import sys, os, re, html
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from strings import L
W = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T = open(f'{W}/i18n/template.html', encoding='utf-8').read()
OUT = f'{W}/dist'
PATHS = {'zh-HK':'', 'en':'en/', 'zh-CN':'zh-cn/', 'ja':'ja/', 'ko':'ko/', 'ms':'ms/', 'th':'th/', 'vi':'vi/'}
CSS = """
  .langs{display:flex;flex-wrap:wrap;gap:12px;font-size:13px;color:var(--muted);margin-left:20px}
  .langs a{text-decoration:none;padding:3px 2px;border-bottom:2px solid transparent}
  .langs a:hover{color:var(--teal)}
  .langs a.on{color:var(--navy);font-weight:700;border-bottom-color:var(--teal)}
  @media(max-width:900px){.nav{height:auto;padding:14px 0;flex-wrap:wrap}.links{display:none}.langs{margin-left:0;width:100%;margin-top:6px}}
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
    return v

def switcher(code):
    out = ['<div class="langs">']
    for c, p in PATHS.items():
        out.append(f'<a href="/{p}"{" class=\"on\"" if c==code else ""} hreflang="{L[c]["lang"]}">{esc(L[c]["name"])}</a>')
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
