import sys, os, re, html
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from strings import L
from extra import E
from concepts import THEMES, COMMON_CSS, concept_nav, hub_html
from industries import COPY as INDUSTRY_COPY, industry_markup
from pain_solutions import COPY as PAIN_SOLUTION_COPY, pain_solution_markup
from posts_wall import POSTS_COPY, POSTS_CSS, posts_markup
from social import SOCIAL_CSS, SOCIAL_COPY, social_markup, social_footer
from webbook import WEBBOOK_CSS, webbook_markup, WEBBOOK_COPY
from about import ABOUT, ABOUT_CSS, about_body
SRC = os.path.dirname(os.path.abspath(__file__))
W = os.path.dirname(SRC)
T = open(os.path.join(SRC, 'template.html'), encoding='utf-8').read()
OUT = W
PATHS = {'zh-HK':'', 'en':'en/', 'zh-CN':'zh-cn/', 'ja':'ja/', 'ko':'ko/', 'ms':'ms/', 'th':'th/', 'vi':'vi/'}
CSS = """
  .lang-menu{position:relative;flex:none}
  .lang-menu summary{list-style:none;display:flex;align-items:center;gap:8px;min-width:124px;padding:8px 12px;border:1px solid rgba(18,48,79,.12);border-radius:999px;background:rgba(255,255,255,.78);color:var(--navy);font-size:13px;font-weight:700;line-height:1.4;cursor:pointer;box-shadow:0 7px 20px rgba(18,48,79,.06);transition:border-color .2s ease,background .2s ease,box-shadow .2s ease}
  .lang-menu summary::-webkit-details-marker{display:none}
  .lang-menu summary:hover,.lang-menu[open] summary{border-color:rgba(19,169,149,.42);background:var(--white);box-shadow:0 10px 26px rgba(18,48,79,.10)}
  .lang-mark{width:24px;height:24px;border-radius:50%;display:grid;place-items:center;background:var(--pale);color:var(--teal);font-size:12px;font-weight:800}
  .lang-chevron{width:7px;height:7px;margin-left:auto;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:rotate(45deg) translateY(-2px);transition:transform .2s ease}
  .lang-menu[open] .lang-chevron{transform:rotate(225deg) translate(-1px,-1px)}
  .lang-options{position:absolute;right:0;top:calc(100% + 10px);z-index:80;display:grid;min-width:210px;padding:8px;border:1px solid rgba(18,48,79,.10);border-radius:18px;background:rgba(255,255,255,.97);box-shadow:0 20px 50px rgba(18,48,79,.16);backdrop-filter:blur(18px)}
  .lang-options a{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:9px 11px;border-radius:11px;color:var(--muted);font-size:13px;text-decoration:none;white-space:nowrap}
  .lang-options a:hover{color:var(--navy);background:var(--pale)}
  .lang-options a.on{color:var(--navy);font-weight:700;background:rgba(232,247,243,.72)}
  .lang-options a.on::after{content:"✓";color:var(--teal);font-weight:800}
  @media(max-width:900px){.nav{height:auto;min-height:64px;padding:9px 0;flex-wrap:nowrap}.nav>.home img{height:38px}.links{order:9;width:100%;margin-left:0;gap:8px;padding:6px 0 2px}.nav{flex-wrap:wrap}.lang-menu{margin-left:auto}.menu-panel{position:fixed;left:18px;right:18px;top:auto;min-width:0;grid-template-columns:repeat(2,minmax(0,1fr))}.lang-menu summary{min-width:118px}.lang-options{position:fixed;left:18px;right:18px;top:72px;min-width:0;grid-template-columns:repeat(2,minmax(0,1fr));padding:10px}.lang-options a{padding:11px 12px}}
"""
def esc(x): return html.escape(str(x), quote=False)

def vals(code):
    d = L[code]; v = {}
    for k in ['lang','title','desc','hero_tag','hero_sub','cta1','cta2','hero_foot','p_chip','p_h2','illus',
              's_chip','s_h2','s_cap1','s_cap2','d_chip','d_h2','d_lead','d_boxT','d_boxB','d_cap',
              'w_chip','w_h2','m_chip','m_h2','m_lead','y_chip','y_h2','y_lead','pl_chip','pl_h2','pl_core_badge','pl_core',
              'pl_pro_badge','pl_pro','pl_note','f_h2','f_sub','foot_privacy','foot_terms','foot_contact']:
        v[k] = esc(d[k])
    for i, n in enumerate(d['nav']): v[f'nav{i}'] = esc(n)
    for i, (a, b) in enumerate(d['p_items']): v[f'p{i}a'], v[f'p{i}b'] = esc(a), esc(b)
    for i, (a, b) in enumerate(d['s_items']): v[f's{i}a'], v[f's{i}b'] = esc(a), esc(b)
    for i, n in enumerate(d['w_inds']): v[f'w{i}'] = esc(n)
    for i, n in enumerate(d['m_caps']): v[f'm{i}'] = esc(n)
    for i, n in enumerate(d['pl_core_items']): v[f'c{i}'] = esc(n)
    for i, n in enumerate(d['pl_pro_items']): v[f'r{i}'] = esc(n)
    e = E[code]
    for k in ['badge_apple','badge_google','p_lead','s_lead','d_extra','w_lead',
              'st_chip','st_h2','faq_chip','faq_h2','dl_note']:
        v[k] = e[k] if k.startswith('badge_') else esc(e[k])
    for i, (a, b) in enumerate(e['st_items']): v[f'st{i}a'], v[f'st{i}b'] = esc(a), esc(b)
    for i, (q, a) in enumerate(e['faq']): v[f'q{i}'], v[f'a{i}'] = esc(q), esc(a)
    v['industry_stat'] = esc(INDUSTRY_COPY[code]['stat'])
    v['industry_note'] = esc(INDUSTRY_COPY[code]['note'])
    v['industry_grid'] = industry_markup(code)
    v['ps_chip'] = esc(PAIN_SOLUTION_COPY[code]['chip'])
    v['ps_h2'] = esc(PAIN_SOLUTION_COPY[code]['title'])
    v['ps_lead'] = esc(PAIN_SOLUTION_COPY[code]['lead'])
    v['ps_grid'] = pain_solution_markup(code)
    v['posts_wall'] = posts_markup(POSTS_COPY[code])
    v['webbook'] = webbook_markup(code)
    v['nav_links'] = nav_links(code, '/' + PATHS[code])
    v['foot_about'] = esc(ABOUT[code]['nav'])
    v['foot_about_href'] = '/' + PATHS[code] + 'about/'
    v['social'] = social_markup(code)
    v['social_footer'] = social_footer(code)
    return v

NAV_GROUPS = {  # 三組下拉：產品 / 商戶 / 品牌
    'zh-HK': ('產品', '商戶', '品牌'), 'en': ('Product', 'For shops', 'Brand'), 'zh-CN': ('产品', '商户', '品牌'),
    'ja': ('製品', '店舗の方へ', 'ブランド'), 'ko': ('제품', '매장 안내', '브랜드'), 'ms': ('Produk', 'Untuk kedai', 'Jenama'),
    'th': ('ผลิตภัณฑ์', 'สำหรับร้าน', 'แบรนด์'), 'vi': ('Sản phẩm', 'Dành cho tiệm', 'Thương hiệu'),
}

def nav_links(code, home=''):
    """頂部三組下拉，每組內跟頁面次序，用區塊自己嘅標籤（「· 新」之類後綴去走）。"""
    d, e = L[code], E[code]
    groups = [
        [('problem', d['p_chip']), ('solution', d['s_chip']), ('web-booking', WEBBOOK_COPY[code]['chip']),
         ('pain-solutions', PAIN_SOLUTION_COPY[code]['chip']), ('diff', d['d_chip'])],
        [('who', d['w_chip']), ('plans', d['pl_chip']), ('start', e['st_chip']), ('faq', e['faq_chip'])],
        [('brand', d['m_chip']), ('posts', POSTS_COPY[code]['chip']), ('social', SOCIAL_COPY[code]['chip']), ('mascot', d['y_chip']), (None, ABOUT[code]['nav'])],
    ]
    out = []
    for label, items in zip(NAV_GROUPS[code], groups):
        links = ''.join((f'<a href="{home}#{i}">{esc(t.split(" · ")[0])}</a>' if i else f'<a href="{home or "/"}about/">{esc(t)}</a>') for i, t in items)
        out.append(f'<details class="menu"><summary>{esc(label)}<span class="lang-chevron" aria-hidden="true"></span></summary><div class="menu-panel">{links}</div></details>')
    return ''.join(out)

def switcher(code):
    current = esc(L[code]['name'])
    out = [f'<details class="lang-menu"><summary aria-label="Language: {current}">',
           f'<span class="lang-mark" aria-hidden="true">文</span><span>{current}</span>',
           '<span class="lang-chevron" aria-hidden="true"></span></summary><div class="lang-options">']
    for c, p in PATHS.items():
        active = ' class="on" aria-current="page"' if c == code else ''
        out.append(f'<a href="/{p}"{active} hreflang="{L[c]["lang"]}">{esc(L[c]["name"])}</a>')
    return ''.join(out) + '</div></details>'

alts = ''.join(f'<link rel="alternate" hreflang="{L[c]["lang"]}" href="https://bookingyou.app/{p}">' for c, p in PATHS.items()) \
     + '<link rel="alternate" hreflang="x-default" href="https://bookingyou.app/">'

def write_about(code, path, page):
    """關於我們：借用該語言首頁嘅 <head>、header、footer，換走中間內容。"""
    home = '/' + path
    head = page[:page.index('<body')]
    header = page[page.index('<header>'):page.index('</header>') + len('</header>')]
    footer = page[page.index('<footer>'):]
    head = re.sub(r'<title>[^<]*</title>', f'<title>{esc(ABOUT[code]["title"])}</title>', head, count=1)
    head = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{esc(ABOUT[code]["lead"])}">', head, count=1)
    head = re.sub(r'(<link rel="alternate" hreflang="[^"]*" href="https://bookingyou.app/[^"]*?)">', r'\1about/">', head)
    header = header.replace('href="#top"', f'href="{home}"')
    header = re.sub(r'(<a href="/[a-z-]*/?)("[^>]*hreflang)', r'\1about/\2', header)
    footer = footer[:footer.index('<script')]  # 唔要首頁嘅 GSAP 動畫；下拉選單 script 另外加返
    menu_js = page[page.index('<script>\n  (function(){\n    var menus'):]
    menu_js = menu_js[:menu_js.index('</script>') + len('</script>')]
    out = head + '<body>\n' + header + '\n' + about_body(code, home) + '\n' + footer + menu_js + '\n</body></html>'
    out = out.replace('src="assets/', 'src="/assets/').replace('url("assets/', 'url("/assets/').replace('href="assets/', 'href="/assets/')
    ad = os.path.join(OUT, path, 'about'); os.makedirs(ad, exist_ok=True)
    open(os.path.join(ad, 'index.html'), 'w', encoding='utf-8').write(out)

os.makedirs(OUT, exist_ok=True)
for code, path in PATHS.items():
    v = vals(code)
    s = re.sub(r'\{\{(\w+)\}\}', lambda m: v[m.group(1)], T)
    s = s.replace('</style>', CSS + POSTS_CSS + SOCIAL_CSS + WEBBOOK_CSS + ABOUT_CSS + '</style>').replace('</head>', alts + '</head>')
    s = s.replace('</div></header>', switcher(code) + '</div></header>')
    if path:
        s = s.replace('src="assets/', 'src="/assets/').replace('url("assets/', 'url("/assets/')
    d = os.path.join(OUT, path); os.makedirs(d, exist_ok=True)
    open(os.path.join(d, 'index.html'), 'w', encoding='utf-8').write(s)
    leftover = re.findall(r'\{\{\w+\}\}', s)
    print(f'{code:6s} → /{path:8s} {len(s):6d} bytes  未填 token: {len(leftover)}')
    write_about(code, path, s)

# Three visual directions for stakeholder review. These are intentionally
# isolated from the production homepage and excluded from search indexing.
v = vals('zh-HK')
base = re.sub(r'\{\{(\w+)\}\}', lambda m: v[m.group(1)], T)
base = base.replace('</style>', CSS + POSTS_CSS + SOCIAL_CSS + WEBBOOK_CSS + ABOUT_CSS + '</style>').replace('</head>', '<meta name="robots" content="noindex,nofollow">' + alts + '</head>')
base = base.replace('</div></header>', switcher('zh-HK') + '</div></header>')
base = base.replace('src="assets/', 'src="/assets/').replace('href="assets/', 'href="/assets/').replace('url("assets/', 'url("/assets/')

concept_root = os.path.join(OUT, 'concepts')
os.makedirs(concept_root, exist_ok=True)
open(os.path.join(concept_root, 'index.html'), 'w', encoding='utf-8').write(hub_html())
for theme in THEMES:
    themed = base.replace('</style>', COMMON_CSS + theme['css'] + '</style>')
    themed = themed.replace('<body>', f'<body class="concept-{theme["slug"]}">')
    themed = themed.replace('</body>', concept_nav(theme['slug']) + '</body>')
    themed = themed.replace('<title>', f'<title>方案 {theme["label"]} · {theme["name"]}｜')
    dest = os.path.join(concept_root, theme['slug'])
    os.makedirs(dest, exist_ok=True)
    open(os.path.join(dest, 'index.html'), 'w', encoding='utf-8').write(themed)
    print(f'方案 {theme["label"]} → /concepts/{theme["slug"]}/  {len(themed):6d} bytes')
