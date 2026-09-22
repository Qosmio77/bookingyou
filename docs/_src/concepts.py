THEMES = [
    {
        "slug": "tokyo-quiet",
        "label": "A",
        "name": "東京清爽",
        "jp": "TOKYO QUIET",
        "desc": "最穩陣、最專業。以日本 SaaS 常見的理性留白、細線框與低調薄荷綠建立信任。",
        "color": "#159b8b",
        "css": r"""
          :root{--navy:#183348;--deep:#10283b;--teal:#159b8b;--bright:#55c9b9;--pale:#e4f3ef;--ink:#293943;--muted:#6f7d82;--line:#d9e3df;--paper:#f8faf7;--paper-blue:#eef5f3;--shadow:0 20px 55px rgba(23,51,72,.09)}
          body{background:#f8faf7}
          header{background:rgba(248,250,247,.94);border-bottom:1px solid #dfe7e3;backdrop-filter:blur(22px)}
          .nav{min-height:72px}.nav>img{height:43px}.wrap{max-width:1180px}
          section{border-bottom:1px solid rgba(24,51,72,.07)}
          .hero{min-height:calc(100vh - 72px);background:linear-gradient(115deg,#f8faf7 0 53%,#eaf4f2 53% 100%)}
          .hero::before{background-image:linear-gradient(rgba(24,51,72,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(24,51,72,.045) 1px,transparent 1px);background-size:40px 40px;mask-image:linear-gradient(to right,black,transparent 58%)}
          .hero h1{letter-spacing:-.055em}.hero .tag{letter-spacing:.16em}.hero-board{border-radius:20px;background:rgba(255,255,255,.72);box-shadow:0 28px 70px rgba(24,51,72,.12)}
          .hero-app{border-radius:22px;transform:translate(-50%,-50%) rotate(-1deg)}.hero-app img{border-radius:15px}
          .btn{border-radius:8px}.chip{border-radius:5px;background:transparent;border:1px solid rgba(24,51,72,.18);padding:6px 12px}
          .card,.tile,.inds>div,.posters img,.faq,.plan,.phone{border-radius:12px}.scene-card,.booking-flow{border-radius:20px}
          .tick,.stepno{border-radius:8px;transform:none}.card .dot{border-radius:12px}
          .bg-a{background:#f1f6f3}.bg-b{background:#eef4f5}.final{background:linear-gradient(120deg,#e7f4ef,#eef5f7)}
          .concept-fab a[data-slug="tokyo-quiet"]{background:#183348;color:#fff}
        """,
    },
    {
        "slug": "washi-editorial",
        "label": "B",
        "name": "和紙編輯",
        "jp": "WASHI EDITORIAL",
        "desc": "品牌感最強。暖米白、墨藍與朱紅，加入日式編輯排版和紙張質感，成熟但不嚴肅。",
        "color": "#c76a51",
        "css": r"""
          :root{--navy:#273746;--deep:#1e2b35;--teal:#c76a51;--bright:#e5aa91;--pale:#f2ddd2;--ink:#3f4547;--muted:#77736c;--line:#ded5c7;--amber:#b38751;--coral:#c76a51;--paper:#f8f3e9;--paper-blue:#f1eadf;--white:#fffdf8;--shadow:0 22px 52px rgba(55,45,35,.11)}
          body{background:#f8f3e9;background-image:radial-gradient(rgba(85,67,47,.035) .7px,transparent .7px);background-size:7px 7px}
          header{background:rgba(248,243,233,.93);border-bottom:1px solid #dcd1c1}.wrap{max-width:1160px}
          h1,h2,h3,.card h3,.plan h3{font-family:"Yu Mincho","Hiragino Mincho ProN","Noto Serif JP",serif;font-weight:600}
          section{background-color:#f8f3e9}.hero{background:linear-gradient(105deg,#f8f3e9 0 58%,#efe5d6 58% 100%)}
          .hero::before{background:linear-gradient(90deg,rgba(199,106,81,.16) 1px,transparent 1px);background-size:calc(100% / 6) 100%;mask-image:linear-gradient(to right,black,transparent 72%);opacity:.55}
          .hero h1{font-size:clamp(54px,7vw,80px);letter-spacing:-.035em}.hero .tag{color:#a65340;letter-spacing:.18em}
          .hero-board{border-radius:8px;background:rgba(255,253,248,.68);border-color:rgba(255,255,255,.7);box-shadow:18px 22px 0 rgba(39,55,70,.08)}
          .hero-board::before{content:"予約のある、穏やかな一日。";position:absolute;z-index:8;right:18px;top:18px;writing-mode:vertical-rl;letter-spacing:.18em;font-size:12px;color:#9b604e}
          .hero-app{border-radius:16px;transform:translate(-50%,-50%) rotate(1.5deg)}.hero-app img{border-radius:10px}
          .btn{border-radius:4px}.btn-main{background:#273746}.btn-ghost{background:transparent;border-color:#a69a89}
          .chip{border-radius:2px;background:transparent;border-left:3px solid #c76a51;padding:3px 0 3px 12px;letter-spacing:.2em}
          .chip::before{display:none}.bg-a{background:#f2eadf}.bg-b{background:#ede8df}
          .card,.tile,.plan,.faq{border-radius:6px;background:rgba(255,253,248,.78);box-shadow:8px 10px 0 rgba(86,68,48,.06)}
          .card{border-left:3px solid rgba(199,106,81,.55)}.card .dot,.tick,.stepno{border-radius:4px;transform:none}
          .scene-card,.booking-flow{border-radius:8px;background:linear-gradient(145deg,#f5e8dc,#eee7d9);box-shadow:14px 18px 0 rgba(68,54,39,.07)}
          .flow-item,.inds>div,.posters img,.phone{border-radius:6px}.inds>div{background:rgba(255,253,248,.7)}
          .plan-core{background:#273746}.final{background:linear-gradient(110deg,#eee2d3,#f6ede2)}
          .final::before,.final::after{background:rgba(199,106,81,.13)}
          .concept-fab a[data-slug="washi-editorial"]{background:#c76a51;color:#fff}
        """,
    },
    {
        "slug": "mint-studio",
        "label": "C",
        "name": "薄荷工作室",
        "jp": "MINT STUDIO",
        "desc": "最親切、最有記憶點。清新薄荷配柔和珊瑚色，圓潤圖形令小店客戶感到容易使用。",
        "color": "#14b89f",
        "css": r"""
          :root{--navy:#173953;--deep:#102d44;--teal:#14b89f;--bright:#79e0cf;--pale:#ddf7f1;--ink:#294354;--muted:#668092;--line:#d5ebe6;--amber:#f3b85c;--coral:#ff927f;--paper:#fbfdfa;--paper-blue:#eef9fb;--shadow:0 24px 65px rgba(23,57,83,.12)}
          body{background:#fbfdfa}.wrap{max-width:1220px}
          header{background:rgba(255,255,255,.85);border-bottom:0;box-shadow:0 9px 30px rgba(23,57,83,.055)}
          .nav{min-height:82px}.nav>img{height:50px}
          .hero{background:radial-gradient(circle at 80% 12%,rgba(255,146,127,.20),transparent 26%),radial-gradient(circle at 12% 90%,rgba(121,224,207,.22),transparent 28%),linear-gradient(135deg,#f8fffc,#ebfaf8 55%,#edf6ff)}
          .hero::before{background-image:radial-gradient(rgba(20,184,159,.18) 1.5px,transparent 1.5px);background-size:26px 26px;mask-image:linear-gradient(to right,black,transparent 45%)}
          .hero h1{font-size:clamp(58px,7.4vw,88px)}.hero .tag{display:inline-flex;background:#fff;border-radius:999px;padding:8px 15px;box-shadow:0 8px 20px rgba(23,57,83,.07)}
          .hero-board{border-radius:48px;background:rgba(255,255,255,.62);box-shadow:0 34px 85px rgba(23,57,83,.14)}
          .hero-app{transform:translate(-50%,-50%) rotate(-3deg)}.btn{padding:15px 30px}.btn-main{background:#173953}
          .chip{background:#ddf7f1;color:#176e66}.chip::before{background:#ff927f}
          .bg-a{background:linear-gradient(145deg,#effbf7,#f5fbff)}.bg-b{background:linear-gradient(145deg,#eef6ff,#f5f1ff)}
          .card,.tile,.inds>div,.plan,.faq{border-radius:30px}.card:nth-child(3n+2){transform:translateY(14px)}
          .card .dot{background:#14b89f}.tick{background:#fff0ec;transform:rotate(-4deg)}.stepno{border-radius:50%;background:#ff927f}
          .scene-card,.booking-flow{border-radius:42px}.flow-item{border-radius:28px}.posters img,.phone{border-radius:26px}
          .scene-card{background:radial-gradient(circle at 85% 18%,rgba(255,146,127,.25),transparent 25%),linear-gradient(145deg,#fff7f2,#e7faf5)}
          .booking-flow{background:linear-gradient(145deg,#e8faf4,#edf4ff)}
          .plan-core{background:linear-gradient(145deg,#173953,#1d5365)}.final{background:linear-gradient(130deg,#ddf8f1,#e7f4ff)}
          .concept-fab a[data-slug="mint-studio"]{background:#14b89f;color:#fff}
        """,
    },
]

COMMON_CSS = r"""
  .concept-label{position:fixed;left:20px;bottom:20px;z-index:90;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.94);border:1px solid rgba(23,57,83,.12);border-radius:999px;padding:8px 14px 8px 9px;box-shadow:0 12px 35px rgba(23,57,83,.15);backdrop-filter:blur(14px);font-size:12px;font-weight:700;color:#173953}
  .concept-label b{display:grid;place-items:center;width:29px;height:29px;border-radius:50%;background:#173953;color:#fff}
  .concept-fab{position:fixed;right:20px;bottom:20px;z-index:90;display:flex;gap:6px;padding:7px;background:rgba(255,255,255,.94);border:1px solid rgba(23,57,83,.12);border-radius:999px;box-shadow:0 12px 35px rgba(23,57,83,.15);backdrop-filter:blur(14px)}
  .concept-fab a{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;text-decoration:none;color:#516676;font-size:12px;font-weight:800;transition:.2s ease}
  .concept-fab a:hover{transform:translateY(-2px);background:#e9f3f1}
  @media(max-width:580px){.concept-label{left:10px;bottom:10px}.concept-fab{right:10px;bottom:10px}.concept-label span{display:none}}
"""


def concept_nav(active_slug):
    links = "".join(
        f'<a data-slug="{item["slug"]}" href="/concepts/{item["slug"]}/" aria-label="{item["name"]}">{item["label"]}</a>'
        for item in THEMES
    )
    active = next(item for item in THEMES if item["slug"] == active_slug)
    return (
        f'<div class="concept-label"><b>{active["label"]}</b><span>{active["name"]} · {active["jp"]}</span></div>'
        f'<nav class="concept-fab" aria-label="切換設計方案">{links}</nav>'
    )


def hub_html():
    cards = "".join(
        f'''<a class="option option-{item["label"].lower()}" href="/concepts/{item["slug"]}/">
          <div class="preview"><img src="/assets/illustrations/{image}" alt=""></div>
          <div class="meta"><span>{item["label"]}</span><div><small>{item["jp"]}</small><h2>{item["name"]}</h2><p>{item["desc"]}</p></div></div>
        </a>'''
        for item, image in zip(THEMES, ["34-salon-owner-welcoming.webp", "38-booking-portal-building.webp", "33-customer-using-phone.webp"])
    )
    return f'''<!doctype html><html lang="zh-HK"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>BookingYou｜三款網站設計方案</title><link rel="icon" type="image/png" href="/assets/logo.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700;800&display=swap" rel="stylesheet"><style>
    *{{box-sizing:border-box}}body{{margin:0;background:#f5f7f4;color:#233746;font-family:"Noto Sans JP","PingFang HK",sans-serif;-webkit-font-smoothing:antialiased}}main{{max-width:1200px;margin:auto;padding:70px 28px 90px}}header{{display:flex;align-items:flex-end;justify-content:space-between;gap:30px;margin-bottom:42px}}header img{{width:92px}}.eyebrow{{color:#148f82;font-size:12px;font-weight:800;letter-spacing:.18em}}h1{{font-size:clamp(35px,5vw,60px);line-height:1.16;letter-spacing:-.04em;margin:10px 0 8px}}header p{{color:#667986;margin:0;max-width:580px}}.grid{{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}}.option{{color:inherit;text-decoration:none;background:#fff;border:1px solid rgba(25,55,75,.09);border-radius:26px;overflow:hidden;box-shadow:0 18px 50px rgba(25,55,75,.08);transition:.3s ease}}.option:hover{{transform:translateY(-8px);box-shadow:0 28px 65px rgba(25,55,75,.14)}}.preview{{height:350px;display:grid;place-items:end center;overflow:hidden;position:relative}}.preview::before{{content:"";position:absolute;inset:24px;border:1px solid rgba(255,255,255,.55);border-radius:22px}}.preview img{{position:relative;z-index:2;max-height:300px;max-width:88%;filter:drop-shadow(0 16px 16px rgba(24,51,72,.15))}}.option-a .preview{{background:linear-gradient(145deg,#e8f3f0,#f6faf8)}}.option-b .preview{{background:linear-gradient(145deg,#eadfce,#f8f1e6)}}.option-c .preview{{background:linear-gradient(145deg,#dff8f0,#e9f3ff)}}.meta{{display:flex;gap:18px;padding:27px}}.meta>span{{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:50%;background:#183348;color:#fff;font-weight:800}}.option-b .meta>span{{background:#c76a51}}.option-c .meta>span{{background:#14b89f}}small{{color:#82919a;font-size:10px;font-weight:800;letter-spacing:.16em}}h2{{font-size:24px;margin:3px 0 8px}}.meta p{{font-size:14px;color:#647783;line-height:1.75;margin:0}}.tip{{margin-top:28px;color:#75858f;font-size:13px;text-align:center}}@media(max-width:900px){{.grid{{grid-template-columns:1fr}}.option{{display:grid;grid-template-columns:280px 1fr}}.preview{{height:280px}}}}@media(max-width:580px){{main{{padding:38px 18px 65px}}header{{align-items:flex-start;flex-direction:column}}.option{{display:block}}.preview{{height:290px}}}}
    </style></head><body><main><header><div><div class="eyebrow">BOOKINGYOU · DESIGN STUDY</div><h1>三款日系網站方向</h1><p>內容、功能和圖片完全相同，只比較視覺氣質。按入每款可以睇完整頁面，再用右下角 A／B／C 即時切換。</p></div><img src="/assets/logo.png" alt="BookingYou"></header><section class="grid">{cards}</section><p class="tip">三款均已為桌面及手機版調整，正式首頁暫時保持不變。</p></main></body></html>'''
