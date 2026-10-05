"""Search and sharing metadata for public editorial pages only."""
from pathlib import Path
from xml.etree import ElementTree as ET
import html
import json
import re
BASE = 'https://bookingyou.app/'
LOGO = BASE + 'assets/logo.png'

def page_metadata(page, *, url, title, description, language, same_as, about=False):
    """Replace metadata when a homepage shell is reused for an about page."""
    page = re.sub(r'<!-- page metadata -->.*?<!-- /page metadata -->\n?', '', page, flags=re.S)
    page = re.sub(r'<title>[^<]*</title>', lambda _: f'<title>{html.escape(title)}</title>', page, count=1)
    page = re.sub(r'<meta name="description" content="[^"]*">',
                  lambda _: f'<meta name="description" content="{html.escape(description)}">', page, count=1)
    page = canonicalize(page, url)
    organization = {
        '@type': 'Organization', '@id': BASE + '#organization',
        'name': 'BookingYou', 'url': BASE, 'logo': LOGO,
        'email': 'contact@bookingyou.app', 'sameAs': same_as,
    }
    graph = [organization]
    # Google's site name applies to the domain, not to language subdirectories.
    if url == BASE:
        graph.append({
            '@type': 'WebSite', '@id': BASE + '#website',
            'name': 'BookingYou', 'url': BASE,
            'publisher': {'@id': BASE + '#organization'},
        })
    graph.append({
        '@type': 'AboutPage' if about else 'WebPage', '@id': url + '#webpage',
        'url': url, 'name': title, 'description': description,
        'inLanguage': language, 'isPartOf': {'@id': BASE + '#website'},
        'about': {'@id': BASE + '#organization'},
    })
    social = {
        'og:type': 'website', 'og:site_name': 'BookingYou', 'og:url': url,
        'og:title': title, 'og:description': description,
        'og:image': LOGO, 'og:image:type': 'image/png',
        'og:image:width': '600', 'og:image:height': '576', 'og:image:alt': 'BookingYou',
    }
    tags = [f'<meta property="{key}" content="{html.escape(value)}">' for key, value in social.items()]
    twitter = {'twitter:card': 'summary', 'twitter:title': title,
               'twitter:description': description, 'twitter:image': LOGO, 'twitter:image:alt': 'BookingYou'}
    tags += [f'<meta name="{key}" content="{html.escape(value)}">' for key, value in twitter.items()]
    # Escaping '<' keeps future copy containing HTML from closing the script.
    data = json.dumps({'@context': 'https://schema.org', '@graph': graph}, ensure_ascii=False).replace('<', '\\u003c')
    tags.append(f'<script type="application/ld+json">{data}</script>')
    markup = '<!-- page metadata -->\n' + '\n'.join(tags) + '\n<!-- /page metadata -->\n'
    return page.replace('</head>', markup + '</head>', 1)

def canonicalize(page, url):
    page = re.sub(r'<link\b[^>]*rel=[\"\']canonical[\"\'][^>]*>\s*', '', page)
    return page.replace('</head>', f'<link rel="canonical" href="{url}">\n</head>', 1)

def write_discovery(root, paths, languages):
    root = Path(root)
    ns = 'http://www.sitemaps.org/schemas/sitemap/0.9'
    xhtml = 'http://www.w3.org/1999/xhtml'
    ET.register_namespace('', ns)
    ET.register_namespace('xhtml', xhtml)
    sitemap = ET.Element(f'{{{ns}}}urlset')
    for suffix in ('', 'about/'):
        for code, path in paths.items():
            entry = ET.SubElement(sitemap, f'{{{ns}}}url')
            ET.SubElement(entry, f'{{{ns}}}loc').text = BASE + path + suffix
            for alt, alt_path in paths.items():
                ET.SubElement(entry, f'{{{xhtml}}}link', rel='alternate', hreflang=languages[alt]['lang'], href=BASE + alt_path + suffix)
            ET.SubElement(entry, f'{{{xhtml}}}link', rel='alternate', hreflang='x-default', href=BASE + suffix)
    for path in ('privacy/', 'terms/'):
        file = root / path / 'index.html'
        file.write_text(canonicalize(file.read_text(), BASE + path))
        entry = ET.SubElement(sitemap, f'{{{ns}}}url')
        ET.SubElement(entry, f'{{{ns}}}loc').text = BASE + path
    ET.indent(sitemap, space='  ')
    ET.ElementTree(sitemap).write(root / 'sitemap.xml', encoding='utf-8', xml_declaration=True)
    (root / 'robots.txt').write_text('User-agent: *\nAllow: /\n\nSitemap: https://bookingyou.app/sitemap.xml\n')
