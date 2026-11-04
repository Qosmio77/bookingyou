"""Build the published social posts into each localized homepage."""
import json
from pathlib import Path

from lxml import etree

ROOT = Path(__file__).resolve().parent
LABELS = {
    # feed title, more, read caption, archive title, tab, JA, traditional Chinese
    'zh': ('近期社交帖文', '更多帖文', '閱讀帖文', '宣傳圖庫', '社交帖文', '日文', '繁體中文'),
    'ja': ('最近の投稿', 'ほかの投稿', '投稿を読む', '過去のプロモーション画像', 'SNS 投稿', '日本語', '繁体字中国語'),
    'en': ('Recent social posts', 'More posts', 'Read the post', 'Promotional image archive', 'Social posts', 'Japanese', 'Traditional Chinese'),
    'zh-CN': ('近期社交动态', '更多动态', '阅读原文', '宣传图库', '社交动态', '日语', '繁体中文'),
    'ko': ('최근 SNS 게시물', '게시물 더 보기', '게시물 읽기', '이전 홍보 이미지', 'SNS 게시물', '일본어', '번체 중국어'),
    'ms': ('Siaran media sosial terkini', 'Lagi siaran', 'Baca siaran', 'Arkib imej promosi', 'Siaran sosial', 'Bahasa Jepun', 'Bahasa Cina Tradisional'),
    'th': ('โพสต์ล่าสุด', 'โพสต์เพิ่มเติม', 'อ่านโพสต์', 'คลังภาพประชาสัมพันธ์', 'โพสต์โซเชียล', 'ภาษาญี่ปุ่น', 'ภาษาจีนตัวเต็ม'),
    'vi': ('Bài đăng mới nhất', 'Xem thêm bài đăng', 'Đọc bài viết', 'Kho ảnh quảng bá', 'Bài đăng mạng xã hội', 'Tiếng Nhật', 'Tiếng Trung phồn thể'),
}


def child(parent, tag, text=None, **attrs):
    element = etree.SubElement(parent, tag, attrs)
    element.text = text
    return element


def post_image(parent, version, title):
    child(parent, 'img', src='/posts/recent/' + version['file'], alt=title,
          width=str(version['width']), height=str(version['height']), loading='lazy', decoding='async')


def card(grid, post, locale, labels):
    versions = post['variants']
    main_lang = 'zh-Hant' if locale in ('zh', 'zh-CN') and 'zh-Hant' in versions else 'ja'
    title = post['titles'][locale]
    primary = versions[main_lang]
    article = child(grid, 'article', id='post-' + post['id'], **{'class': 'recent-card'})
    cover = child(article, 'a', href=next(iter(primary['links'].values())),
                  **{'class': 'recent-cover', 'aria-label': title + ' · ' + next(iter(primary['links']))})
    post_image(cover, primary, title)
    body = child(article, 'div', **{'class': 'recent-body'})
    meta = child(body, 'div', **{'class': 'recent-meta'})
    child(meta, 'time', post['date'], datetime=post['date'])
    platform, url = next(iter(primary['links'].items()))
    child(meta, 'a', platform + ' ↗', href=url, **{'aria-label': platform + ' · ' + title})
    child(body, 'h4', title)
    for lang in [main_lang] + [other for other in versions if other != main_lang]:
        version = versions[lang]
        language = labels[5 if lang == 'ja' else 6]
        details = child(body, 'details', **{'class': 'recent-caption'})
        child(details, 'summary', labels[2] + ' · ' + language)
        if lang != main_lang and version['file'] != primary['file']:
            post_image(details, version, title + ' · ' + language)
        child(details, 'p', version['caption'], lang=lang, **{'class': 'original-caption'})
        links = child(details, 'div', **{'class': 'recent-links'})
        for platform, url in version['links'].items():
            child(links, 'a', platform + ' ↗', href=url, **{'aria-label': platform + ' · ' + language + ' · ' + title})


def insert_recent_posts(doc, locale):
    labels = LABELS[locale]
    posts = json.loads((ROOT / 'recent-posts.json').read_text())
    panel = doc.get_element_by_id('content-posts')
    # Extra locales are built from the Chinese page. Replace its localized feed.
    for old in panel.xpath('./*[@id="recent-posts" or @id="post-archive-title"]'):
        panel.remove(old)
    feed = etree.Element('section', {'id': 'recent-posts', 'aria-labelledby': 'recent-posts-title'})
    child(feed, 'h3', labels[0], id='recent-posts-title')
    panel.insert(0, feed)
    for offset in (0, 3):
        batch = posts[:3] if offset == 0 else posts[3:]
        if not batch:
            continue
        parent = feed
        if offset:
            parent = child(feed, 'details', **{'class': 'recent-more'})
            child(parent, 'summary', f'{labels[1]} ({len(batch)})')
        grid = child(parent, 'div', **{'class': 'recent-grid'})
        for post in batch:
            card(grid, post, locale, labels)
    archive = etree.Element('h3', id='post-archive-title')
    archive.text = labels[3]
    panel.insert(1, archive)
    doc.get_element_by_id('content-tab-posts').text = labels[4]
    if not doc.xpath('//link[@href="/assets/recent-posts.css"]'):
        child(doc.find('head'), 'link', rel='stylesheet', href='/assets/recent-posts.css')
