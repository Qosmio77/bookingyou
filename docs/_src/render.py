import sys, os, re, html
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from strings import L
from extra import E
from concepts import THEMES, COMMON_CSS, concept_nav, hub_html
from industries import COPY as INDUSTRY_COPY, industry_markup
from pain_solutions import COPY as PAIN_SOLUTION_COPY, pain_solution_markup
SRC = os.path.dirname(os.path.abspath(__file__))
W = os.path.dirname(SRC)
T = open(os.path.join(SRC, 'template.html'), encoding='utf-8').read()
OUT = W
PATHS = {'zh-HK':'', 'en':'en/', 'zh-CN':'zh-cn/', 'ja':'ja/', 'ko':'ko/', 'ms':'ms/', 'th':'th/', 'vi':'vi/'}
CSS = """
  .langs{display:flex;flex-wrap:nowrap;gap:14px;font-size:13px;color:var(--muted);margin-left:20px;white-space:nowrap}
  .langs a{text-decoration:none;padding:3px 2px;border-bottom:2px solid transparent}
  .langs a:hover{color:var(--teal)}
  .langs a.on{color:var(--navy);font-weight:700;border-bottom-color:var(--teal)}
  @media(max-width:900px){.nav{height:auto;padding:10px 0 7px;flex-wrap:wrap}.nav>img{height:38px}.links{display:none}.langs{margin-left:0;width:100%;margin-top:0;gap:18px;overflow-x:auto;padding:0 0 5px;scrollbar-width:none;-webkit-overflow-scrolling:touch}.langs::-webkit-scrollbar{display:none}}
"""
def esc(x): return html.escape(str(x), quote=False)

def vals(code):
    d = L[code]; v = {}
    for k in ['lang','title','desc','hero_tag','hero_sub','cta1','cta2','hero_foot','p_chip','p_h2','illus',
              's_chip','s_h2','s_cap1','s_cap2','d_chip','d_h2','d_lead','d_boxT','d_boxB','d_cap','b_chip','b_h2','b_cap',
              'w_chip','w_h2','m_chip','m_h2','m_lead','y_chip','y_h2','y_lead','pl_chip','pl_h2','pl_core_badge','pl_core',
              'pl_pro_badge','pl_pro','pl_note','f_h2','f_sub','foot_privacy','foot_terms','foot_contact']:
        v[k] = esc(d[k])
    for i, n in enumerate(d['nav']): v[f'nav{i}'] = esc(n)
    for i, (a, b) in enumerate(d['p_items']): v[f'p{i}a'], v[f'p{i}b'] = esc(a), esc(b)
    for i, (a, b) in enumerate(d['s_items']): v[f's{i}a'], v[f's{i}b'] = esc(a), esc(b)
    for i, (a, b) in enumerate(d['b_tiles']): v[f'b{i}a'], v[f'b{i}b'] = esc(a), esc(b)
    for i, n in enumerate(d['w_inds']): v[f'w{i}'] = esc(n)
    for i, n in enumerate(d['m_caps']): v[f'm{i}'] = esc(n)
    for i, n in enumerate(d['pl_core_items']): v[f'c{i}'] = esc(n)
    for i, n in enumerate(d['pl_pro_items']): v[f'r{i}'] = esc(n)
    e = E[code]
    for k in ['badge_apple','badge_google','p_lead','s_lead','d_extra','b_lead','w_lead',
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
    return v

def switcher(code):
    out = ['<div class="langs">']
    for c, p in PATHS.items():
        active = ' class="on"' if c == code else ''
        out.append(f'<a href="/{p}"{active} hreflang="{L[c]["lang"]}">{esc(L[c]["name"])}</a>')
    return ''.join(out) + '</div>'

alts = ''.join(f'<link rel="alternate" hreflang="{L[c]["lang"]}" href="https://bookingyou.app/{p}">' for c, p in PATHS.items()) \
     + '<link rel="alternate" hreflang="x-default" href="https://bookingyou.app/">'

os.makedirs(OUT, exist_ok=True)
for code, path in PATHS.items():
    v = vals(code)
    s = re.sub(r'\{\{(\w+)\}\}', lambda m: v[m.group(1)], T)
    s = s.replace('</style>', CSS + '</style>').replace('</head>', alts + '</head>')
    s = s.replace('</div></header>', switcher(code) + '</div></header>')
    if path:
        s = s.replace('src="assets/', 'src="/assets/').replace('url("assets/', 'url("/assets/')
    d = os.path.join(OUT, path); os.makedirs(d, exist_ok=True)
    open(os.path.join(d, 'index.html'), 'w', encoding='utf-8').write(s)
    leftover = re.findall(r'\{\{\w+\}\}', s)
    print(f'{code:6s} → /{path:8s} {len(s):6d} bytes  未填 token: {len(leftover)}')

# Three visual directions for stakeholder review. These are intentionally
# isolated from the production homepage and excluded from search indexing.
v = vals('zh-HK')
base = re.sub(r'\{\{(\w+)\}\}', lambda m: v[m.group(1)], T)
base = base.replace('</style>', CSS + '</style>').replace('</head>', '<meta name="robots" content="noindex,nofollow">' + alts + '</head>')
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
