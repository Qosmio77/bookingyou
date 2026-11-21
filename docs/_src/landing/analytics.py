"""Cloudflare Web Analytics for public marketing pages."""

BEACON_SRC = 'https://static.cloudflareinsights.com/beacon.min.js'
BEACON = ("<!-- Cloudflare Web Analytics -->"
          "<script type='module' src='" + BEACON_SRC + "' "
          "data-cf-beacon='{\"token\": \"167da06a6ffb4c49ab450dd41ebb599c\"}'></script>"
          "<!-- End Cloudflare Web Analytics -->")


def inject_analytics(page):
    """Add exactly one beacon, without affecting pages which already contain it."""
    if BEACON_SRC in page:
        return page
    if page.count('</body>') != 1:
        raise ValueError('Expected exactly one closing body tag')
    return page.replace('</body>', BEACON + '</body>', 1)
