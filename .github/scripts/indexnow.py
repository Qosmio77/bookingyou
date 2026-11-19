#!/usr/bin/env python3
"""Notify IndexNow of actual indexable page changes after a Pages deployment."""

import json
import os
import re
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path

HOST = "bookingyou.app"
ROOT = "https://" + HOST
ENDPOINT = "https://api.indexnow.org/indexnow"
USER_AGENT = "BookingYou-IndexNow/1.0"
SHA = re.compile(r"^[0-9a-f]{40}$")


def require_sha(value):
    if not isinstance(value, str) or not SHA.fullmatch(value):
        raise ValueError("Invalid Git revision")
    return value


def valid_url(value):
    if not isinstance(value, str) or any(ord(c) < 33 for c in value):
        return False
    p = urllib.parse.urlsplit(value)
    return p.scheme == "https" and p.netloc == HOST and not p.fragment


class Metadata(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.canonical = None
        self.noindex = False

    def handle_starttag(self, tag, attrs):
        a = {k.lower(): (v or "") for k, v in attrs}
        if tag.lower() == "link" and "canonical" in a.get("rel", "").lower().split():
            self.canonical = a.get("href")
        if tag.lower() == "meta" and a.get("name", "").lower() in ("robots", "bingbot"):
            directives = re.split(r"[\s,]+", a.get("content", "").lower())
            self.noindex |= "noindex" in directives or "none" in directives


def expected_url(path):
    if not path.startswith("docs/") or not path.endswith(".html"):
        return None
    relative = path[5:]
    if any(part.startswith("_") or part.startswith(".") for part in relative.split("/")):
        return None
    if relative == "index.html":
        relative = ""
    elif relative.endswith("/index.html"):
        relative = relative[:-len("index.html")]
    return ROOT + "/" + urllib.parse.quote(relative, safe="/-._~")


def html_url(path, contents):
    expected = expected_url(path)
    if expected is None or contents is None:
        return None
    metadata = Metadata()
    metadata.feed(contents)
    if not metadata.noindex and metadata.canonical == expected and valid_url(expected):
        return expected
    return None


def sitemap_urls(contents):
    if contents is None:
        return set()
    root = ET.fromstring(contents)
    return {node.text for node in root.iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")
            if valid_url(node.text)}


def git_output(*args, cwd=None):
    return subprocess.check_output(["git", *args], cwd=cwd, stderr=subprocess.PIPE)


def git_file(revision, path, cwd=None):
    require_sha(revision)
    try:
        return git_output("show", revision + ":" + path, cwd=cwd).decode("utf-8")
    except subprocess.CalledProcessError as exc:
        if b"does not exist" in exc.stderr or b"exists on disk, but not in" in exc.stderr:
            return None
        raise


def changed_urls(before, after, cwd=None):
    require_sha(before)
    require_sha(after)
    raw = git_output("diff", "--name-only", "--no-renames", "-z", before, after, "--", "docs/", cwd=cwd)
    paths = [p.decode("utf-8") for p in raw.split(b"\0") if p]
    urls = set()
    for path in paths:
        if expected_url(path) is None:
            continue
        for revision in (before, after):
            url = html_url(path, git_file(revision, path, cwd=cwd))
            if url:
                urls.add(url)
    if "docs/sitemap.xml" in paths:
        old = sitemap_urls(git_file(before, "docs/sitemap.xml", cwd=cwd))
        new = sitemap_urls(git_file(after, "docs/sitemap.xml", cwd=cwd))
        urls.update(old ^ new)
    return sorted(urls)


def checked_out_revision(log):
    # GitHub's generated Pages workflow checks out main; its reported head_sha can
    # be older than the commit it actually built. Checkout logs record the latter.
    matches = re.findall(
        r"\[command\][^\n]*\bgit log -1 --format=%H\r?\n"
        r"\S+\s+([0-9a-f]{40})\s*(?:\r?\n|$)", log)
    if len(matches) != 1:
        raise ValueError("Could not uniquely determine the deployed checkout revision from the Pages build log")
    return require_sha(matches[0])


def api_request(url, token, accept="application/vnd.github+json"):
    req = urllib.request.Request(url, headers={"Authorization": "Bearer " + token,
        "Accept": accept, "User-Agent": USER_AGENT, "X-GitHub-Api-Version": "2022-11-28"})
    with urllib.request.urlopen(req, timeout=30) as response:
        return response.read()


def api_json(url, token):
    return json.loads(api_request(url, token))


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def job_log(api_base, job_id, token):
    # GitHub redirects logs to a signed URL. Never forward the GitHub token there.
    url = api_base + "/actions/jobs/" + str(job_id) + "/logs"
    req = urllib.request.Request(url, headers={"Authorization": "Bearer " + token,
        "Accept": "application/vnd.github+json", "User-Agent": USER_AGENT,
        "X-GitHub-Api-Version": "2022-11-28"})
    try:
        with urllib.request.build_opener(NoRedirect).open(req, timeout=30) as response:
            return response.read().decode("utf-8")
    except urllib.error.HTTPError as exc:
        if exc.code not in (301, 302, 303, 307, 308):
            raise
        location = exc.headers.get("Location", "")
        if urllib.parse.urlsplit(location).scheme != "https":
            raise ValueError("GitHub returned an unsafe log redirect")
        with urllib.request.urlopen(urllib.request.Request(location, headers={"User-Agent": USER_AGENT}), timeout=30) as response:
            return response.read().decode("utf-8")


def deployed_revision(api_base, run_id, token):
    data = api_json(api_base + "/actions/runs/" + str(run_id) + "/jobs?per_page=100", token)
    builds = [j for j in data["jobs"] if j["name"] == "build" and j["conclusion"] == "success"]
    if len(builds) != 1:
        raise ValueError("Cannot identify one successful Pages build job")
    return checked_out_revision(job_log(api_base, builds[0]["id"], token))


def previous_run(runs, current):
    candidates = [r for r in runs
        if r["id"] != current["id"]
        and r.get("workflow_id") == current["workflow_id"]
        and r.get("head_branch") == "main"
        and r.get("conclusion") == "success"
        and r.get("updated_at", "") <= current["updated_at"]]
    return max(candidates, key=lambda r: (r["updated_at"], r["created_at"], r["id"]), default=None)


def find_previous_run(api_base, current, token):
    all_runs = []
    for page in range(1, 6):
        data = api_json(api_base + "/actions/runs?branch=main&status=success&per_page=100&page=" + str(page), token)
        batch = data["workflow_runs"]
        all_runs.extend(batch)
        if len(batch) < 100:
            break
    previous = previous_run(all_runs, current)
    if previous:
        return previous
    raise ValueError("No prior successful Pages deployment was found; no URLs submitted")


def verify_key(key):
    if not re.fullmatch(r"[0-9a-f]{32}", key):
        raise ValueError("Invalid IndexNow key file")
    request = urllib.request.Request(ROOT + "/" + key + ".txt", headers={"User-Agent": USER_AGENT})
    for attempt in range(12):
        try:
            with urllib.request.urlopen(request, timeout=20) as response:
                if response.status == 200 and response.read().decode("utf-8").strip() == key:
                    return
        except (urllib.error.URLError, TimeoutError):
            pass
        if attempt < 11:
            time.sleep(10)
    raise ValueError("The IndexNow verification file is not yet available on the live website")


def send_urls(key, urls):
    if not urls or len(urls) > 10000 or any(not valid_url(u) for u in urls):
        raise ValueError("Invalid URL batch")
    data = json.dumps({"host": HOST, "key": key, "urlList": urls}).encode("utf-8")
    request = urllib.request.Request(ENDPOINT, data=data, method="POST", headers={
        "User-Agent": USER_AGENT, "Content-Type": "application/json; charset=utf-8"})
    with urllib.request.urlopen(request, timeout=30) as response:
        if response.status not in (200, 202):
            raise ValueError("Unexpected IndexNow response: " + str(response.status))
        return response.status


def main():
    event = json.loads(Path(os.environ["GITHUB_EVENT_PATH"]).read_text(encoding="utf-8"))
    current = event["workflow_run"]
    if current["conclusion"] != "success" or current["head_branch"] != "main":
        raise ValueError("Pages deployment was not a successful main-branch run")
    repository = os.environ["GITHUB_REPOSITORY"]
    if repository.lower() != "qosmio77/bookingyou":
        raise ValueError("Unexpected GitHub repository")
    token = os.environ["GITHUB_TOKEN"]
    api_base = "https://api.github.com/repos/" + repository
    prior = find_previous_run(api_base, current, token)
    before = deployed_revision(api_base, prior["id"], token)
    after = deployed_revision(api_base, current["id"], token)
    urls = changed_urls(before, after)
    key = Path(os.environ["INDEXNOW_KEY_FILE"]).read_text(encoding="utf-8").strip()
    verify_key(key)
    print("Live IndexNow key verified after successful Pages deployment.")
    if not urls:
        print("No indexable HTML pages or sitemap URLs changed; nothing submitted.")
        return
    status = send_urls(key, urls)
    message = f"IndexNow returned HTTP {status} for {len(urls)} changed URL(s); this does not mean indexed."
    print(message)
    for url in urls:
        print(url)
    summary = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary:
        with open(summary, "a", encoding="utf-8") as fh:
            fh.write("## IndexNow\n\n" + message + "\n\n" + "".join("- " + u + "\n" for u in urls))


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print("IndexNow notification failed: " + str(exc), file=sys.stderr)
        sys.exit(1)
