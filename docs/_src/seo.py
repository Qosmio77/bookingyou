"""Canonical URLs and sitemap for public editorial pages only."""
from pathlib import Path
from xml.etree import ElementTree as ET
import re
BASE = 'https://bookingyou.app/'

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
