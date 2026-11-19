import io
import json
import subprocess
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch
from urllib.error import HTTPError

import indexnow


class ParserTests(unittest.TestCase):
    def test_actual_checkout_revision_not_stale_reported_revision(self):
        actual = "a" * 40
        log = ("2026-11-11T07:32:27.724Z [command]/usr/bin/git log -1 --format=%H\n"
               f"2026-11-11T07:32:27.727Z {actual}\n")
        self.assertEqual(indexnow.checked_out_revision(log), actual)
        with self.assertRaises(ValueError):
            indexnow.checked_out_revision(log + log)
        with self.assertRaises(ValueError):
            indexnow.checked_out_revision("no checkout revision")

    def test_url_and_noindex_filter(self):
        page = '<link rel="canonical" href="https://bookingyou.app/ja/">'
        self.assertEqual(indexnow.html_url("docs/ja/index.html", page), "https://bookingyou.app/ja/")
        self.assertIsNone(indexnow.html_url("docs/ja/index.html", page + '<meta name="robots" content="noindex,follow">'))
        self.assertIsNone(indexnow.html_url("docs/admin/index.html", page))
        self.assertIsNone(indexnow.expected_url("docs/_src/source.html"))
        self.assertFalse(indexnow.valid_url("https://bookingyou.app.evil.example/"))

    def test_previous_successful_deployment(self):
        current = {"id": 8, "workflow_id": 4, "updated_at": "2026-11-19T03:00:00Z"}
        runs = [
            {"id": 2, "workflow_id": 4, "head_branch": "main", "conclusion": "success", "created_at": "2026-11-18T01:00:00Z", "updated_at": "2026-11-18T02:00:00Z"},
            {"id": 3, "workflow_id": 4, "head_branch": "main", "conclusion": "failure", "created_at": "2026-11-19T01:00:00Z", "updated_at": "2026-11-19T02:00:00Z"},
            {"id": 4, "workflow_id": 5, "head_branch": "main", "conclusion": "success", "created_at": "2026-11-19T01:00:00Z", "updated_at": "2026-11-19T02:30:00Z"},
            {"id": 8, "workflow_id": 4, "head_branch": "main", "conclusion": "success", "created_at": "2026-11-19T02:50:00Z", "updated_at": "2026-11-19T03:00:00Z"},
        ]
        self.assertEqual(indexnow.previous_run(runs, current)["id"], 2)


class GitDiffTests(unittest.TestCase):
    def test_added_modified_deleted_and_noindex_pages(self):
        with tempfile.TemporaryDirectory() as tmp:
            repo = Path(tmp)
            def git(*args):
                return subprocess.check_output(["git", *args], cwd=repo, stderr=subprocess.DEVNULL).decode().strip()
            def write(path, text):
                f = repo / path
                f.parent.mkdir(parents=True, exist_ok=True)
                f.write_text(text, encoding="utf-8")
            def html(url, extra=""):
                return f'<link rel="canonical" href="{url}">{extra}'
            def sitemap(*urls):
                return '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + ''.join('<url><loc>' + u + '</loc></url>' for u in urls) + '</urlset>'
            git("init", "-q")
            git("config", "user.email", "indexnow-test@example.invalid")
            git("config", "user.name", "IndexNow test")
            root = "https://bookingyou.app/"
            old = root + "ja/old/"
            new = root + "ja/new/"
            changed = root + "ja/industries/"
            write("docs/index.html", html(root))
            write("docs/ja/old/index.html", html(old))
            write("docs/ja/industries/index.html", html(changed))
            write("docs/admin/index.html", html(root + "admin/", '<meta name="robots" content="noindex">'))
            write("docs/sitemap.xml", sitemap(root, old, changed))
            git("add", ".")
            git("commit", "-qm", "initial")
            before = git("rev-parse", "HEAD")
            (repo / "docs/ja/old/index.html").unlink()
            write("docs/ja/new/index.html", html(new, "new"))
            write("docs/ja/industries/index.html", html(changed, "changed"))
            write("docs/admin/index.html", html(root + "admin/", '<meta name="robots" content="noindex"> changed'))
            write("docs/sitemap.xml", sitemap(root, new, changed))
            git("add", "-A")
            git("commit", "-qm", "website update")
            after = git("rev-parse", "HEAD")
            self.assertEqual(indexnow.changed_urls(before, after, cwd=repo), sorted([old, new, changed]))


class NetworkTests(unittest.TestCase):
    def test_indexnow_payload_and_acceptance(self):
        class Response:
            status = 202
            def __enter__(self): return self
            def __exit__(self, *args): pass
        with patch("indexnow.urllib.request.urlopen", return_value=Response()) as call:
            code = indexnow.send_urls("a" * 32, ["https://bookingyou.app/ja/"])
            request = call.call_args.args[0]
            self.assertEqual(code, 202)
            self.assertEqual(json.loads(request.data), {"host": "bookingyou.app", "key": "a" * 32, "urlList": ["https://bookingyou.app/ja/"]})
        with self.assertRaises(ValueError):
            indexnow.send_urls("a" * 32, ["https://other.example/"])

    def test_github_token_not_forwarded_to_log_redirect(self):
        class Response:
            def __enter__(self): return self
            def __exit__(self, *args): pass
            def read(self): return b"log content"
        class Opener:
            def open(self, request, timeout):
                raise HTTPError(request.full_url, 302, "redirect", {"Location": "https://storage.example/log?temporary=1"}, io.BytesIO())
        with patch("indexnow.urllib.request.build_opener", return_value=Opener()), patch("indexnow.urllib.request.urlopen", return_value=Response()) as call:
            self.assertEqual(indexnow.job_log("https://api.github.com/repos/o/r", 123, "TOKEN"), "log content")
            redirected = call.call_args.args[0]
            self.assertIsNone(redirected.get_header("Authorization"))


if __name__ == "__main__":
    unittest.main()
