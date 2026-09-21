# 官網「追蹤我哋」區塊 + footer 社交圖示。
#
# 帳號：只放已開、有內容、公開頁核實過嘅帳號（2026-09-21 核實）。
#   韓國 IG（0 帖）同韓國 FB 專頁（得個換頭像）暫時唔放，有內容先加。
# 標誌：Simple Icons 16.32.0（CC0）嘅品牌 glyph —— 幾何跟各平台官方 brand guideline，
#   冇重畫、冇改形狀。一律黑色單色放白底：X／Threads／TikTok／Facebook／YouTube／LINE
#   嘅規範都容許黑白單色版，Instagram glyph 容許任何純色。唔好改做品牌色以外嘅彩色。
# 卡面圖：/posts/t/NNN.jpg，全部係出過街嘅貼文（見 /posts/README.md）。
#
# 加平台：喺 ACCOUNTS 加一行（key 要喺 GLYPHS 有 path），重新 `python3 render.py`。

GLYPHS = {
    'instagram': 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077',
    'threads': 'M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z',
    'x': 'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z',
    'tiktok': 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
    'facebook': 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
    'youtube': 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    'line': 'M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314',
}

# (key, 顯示名, handle, url, 三張卡面圖 id)
ACCOUNTS = [
    ('instagram', 'Instagram', '@bookingyou_jp', 'https://www.instagram.com/bookingyou_jp/', ['137', '051', '034']),
    ('threads',   'Threads',   '@bookingyou_jp', 'https://www.threads.com/@bookingyou_jp',   ['055', '138', '050']),
    ('x',         'X',         '@bookingyou_jp', 'https://x.com/bookingyou_jp',              ['044', '062', '066']),
    ('tiktok',    'TikTok',    '@bookingyou_jp', 'https://www.tiktok.com/@bookingyou_jp',    ['069', '070', '073']),
    ('youtube',   'YouTube',   '@BookingYouApp', 'https://www.youtube.com/@BookingYouApp',   ['067', '071', '084']),
    ('facebook',  'Facebook',  'bookingyoujp',   'https://www.facebook.com/bookingyoujp',    ['033', '043', '059']),
    ('line',      'LINE',      '@504pmlcw',      'https://line.me/R/ti/p/%40504pmlcw',       ['048', '139', '061']),
]

SOCIAL_COPY = {
    'zh-HK': dict(chip='社交平台', h2='喺你常用嘅平台追蹤 BookingYou', lead='新功能、使用貼士同各行各業嘅預約例子，第一時間喺社交平台出。', follow='去睇睇', note='而家以日文帳號為主，其他地區嘅帳號陸續開設。', tm='各平台名稱及標誌為其各自擁有者嘅商標。', aria='BookingYou 社交平台'),
    'en':    dict(chip='Social', h2='Follow BookingYou where you already are', lead='New features, how-to tips and booking ideas for every kind of business — shared on social first.', follow='Visit', note='Our accounts are currently in Japanese. More regions are on the way.', tm='Platform names and logos are trademarks of their respective owners.', aria='BookingYou on social media'),
    'zh-CN': dict(chip='社交平台', h2='在你常用的平台关注 BookingYou', lead='新功能、使用技巧和各行各业的预约案例，第一时间在社交平台发布。', follow='去看看', note='目前以日文账号为主，其他地区的账号将陆续开设。', tm='各平台名称及标志为其各自所有者的商标。', aria='BookingYou 社交平台'),
    'ja':    dict(chip='SNS', h2='いつもの SNS で BookingYou をフォロー', lead='新機能、使い方のヒント、さまざまな業種の予約アイデアを SNS でいち早くお届けします。', follow='見にいく', note='フォローして最新情報をチェック！ YouTube はグローバル共通のチャンネルです。', tm='各サービスの名称およびロゴは、それぞれの権利者の商標です。', aria='BookingYou の SNS'),
    'ko':    dict(chip='SNS', h2='자주 쓰는 SNS에서 BookingYou를 팔로우하세요', lead='새 기능, 사용 팁, 다양한 업종의 예약 아이디어를 SNS에서 가장 먼저 전해 드립니다.', follow='보러 가기', note='현재는 일본어 계정을 중심으로 운영하고 있으며, 다른 지역 계정도 차례로 열 예정입니다.', tm='각 플랫폼의 이름과 로고는 해당 권리자의 상표입니다.', aria='BookingYou SNS'),
    'ms':    dict(chip='Media sosial', h2='Ikuti BookingYou di platform kegemaran anda', lead='Ciri baharu, petua penggunaan dan idea tempahan untuk pelbagai jenis perniagaan — dikongsi dahulu di media sosial.', follow='Lawati', note='Buat masa ini akaun kami dalam bahasa Jepun. Rantau lain akan menyusul.', tm='Nama dan logo platform ialah tanda dagangan pemilik masing-masing.', aria='BookingYou di media sosial'),
    'th':    dict(chip='โซเชียล', h2='ติดตาม BookingYou บนแพลตฟอร์มที่คุณใช้อยู่', lead='ฟีเจอร์ใหม่ เคล็ดลับการใช้งาน และไอเดียการจองสำหรับธุรกิจทุกประเภท อัปเดตบนโซเชียลก่อนใคร', follow='ไปดู', note='ขณะนี้บัญชีของเราเป็นภาษาญี่ปุ่นเป็นหลัก ภูมิภาคอื่นจะตามมาเร็ว ๆ นี้', tm='ชื่อและโลโก้ของแต่ละแพลตฟอร์มเป็นเครื่องหมายการค้าของเจ้าของแต่ละราย', aria='BookingYou บนโซเชียลมีเดีย'),
    'vi':    dict(chip='Mạng xã hội', h2='Theo dõi BookingYou trên nền tảng bạn vẫn dùng', lead='Tính năng mới, mẹo sử dụng và ý tưởng đặt lịch cho mọi ngành nghề — được chia sẻ sớm nhất trên mạng xã hội.', follow='Xem ngay', note='Hiện các tài khoản của chúng tôi chủ yếu bằng tiếng Nhật. Các khu vực khác sẽ sớm có mặt.', tm='Tên và logo của các nền tảng là nhãn hiệu của chủ sở hữu tương ứng.', aria='BookingYou trên mạng xã hội'),
}

SOCIAL_CSS = """
  .soc-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin-top:34px}
  .soc-card{display:flex;flex-direction:column;background:var(--white);border:1px solid rgba(18,48,79,.08);border-radius:22px;overflow:hidden;text-decoration:none;box-shadow:0 10px 26px rgba(27,67,89,.08);transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
  .soc-card:hover,.soc-card:focus-visible{transform:translateY(-4px);box-shadow:0 18px 40px rgba(27,67,89,.15);border-color:rgba(19,169,149,.45)}
  .soc-card:focus-visible{outline:3px solid var(--teal);outline-offset:3px}
  .soc-shots{display:grid;grid-template-columns:2fr 1fr;grid-template-rows:1fr 1fr;gap:3px;aspect-ratio:3/2;background:var(--pale)}
  .soc-shots img{width:100%;height:100%;object-fit:cover;object-position:top center}
  .soc-shots img:first-child{grid-row:1 / span 2}
  .soc-meta{display:flex;align-items:center;gap:13px;padding:16px 18px 18px}
  .soc-logo{flex:none;width:46px;height:46px;border-radius:14px;background:#fff;border:1px solid rgba(18,48,79,.12);display:grid;place-items:center}
  .soc-logo svg{width:24px;height:24px;fill:#000}
  .soc-name{display:block;font-size:17px;font-weight:700;color:var(--navy);line-height:1.3}
  .soc-text{min-width:0;flex:1}
  .soc-handle{display:block;font-size:13px;color:var(--muted);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .soc-go{margin-left:auto;flex:none;width:34px;height:34px;border-radius:50%;background:var(--pale);color:var(--teal);display:grid;place-items:center;font-size:16px;font-weight:700;transition:background .25s ease,color .25s ease}
  .soc-card:hover .soc-go,.soc-card:focus-visible .soc-go{background:var(--teal);color:#fff}
  .soc-yu{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:26px 22px;border-radius:22px;background:linear-gradient(160deg,var(--pale),#f4fbff);border:1px dashed rgba(19,169,149,.45)}
  .soc-yu img{width:min(150px,55%);height:auto}
  .soc-yu p{font-size:14px;line-height:1.7;color:var(--navy);font-weight:600}
  .soc-note{margin-top:22px;font-size:11px;color:var(--muted)}
  .foot-soc{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
  .foot-soc a{width:36px;height:36px;border-radius:50%;background:#fff;border:1px solid rgba(18,48,79,.14);display:grid;place-items:center;transition:transform .2s ease,border-color .2s ease}
  .foot-soc a:hover,.foot-soc a:focus-visible{transform:translateY(-2px);border-color:var(--teal)}
  .foot-soc svg{width:17px;height:17px;fill:#000}
  @media(max-width:1100px){.soc-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
  @media(max-width:820px){.soc-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.soc-meta{padding:13px 14px 15px;gap:10px}.soc-logo{width:40px;height:40px;border-radius:12px}.soc-go{display:none}}
  @media(max-width:520px){.soc-grid{grid-template-columns:1fr}.soc-go{display:grid}.foot-soc{width:100%;justify-content:center;order:3}}
  @media(prefers-reduced-motion:reduce){.soc-card,.foot-soc a{transition:none}}
"""

def _esc(s):
    return str(s).replace('&', '&amp;').replace('<', '&lt;').replace('"', '&quot;')

def _glyph(key):
    return f'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="{GLYPHS[key]}"/></svg>'

def social_markup(code):
    c = SOCIAL_COPY[code]
    cards = []
    for key, name, handle, url, shots in ACCOUNTS:
        imgs = ''.join(f'<img src="/posts/t/{i}.jpg" alt="" loading="lazy" decoding="async" width="480" height="480">' for i in shots)
        cards.append(
            f'<a class="soc-card" href="{_esc(url)}" target="_blank" rel="noopener" aria-label="{_esc(name)} {_esc(handle)}">'
            f'<div class="soc-shots">{imgs}</div>'
            f'<div class="soc-meta"><span class="soc-logo">{_glyph(key)}</span>'
            f'<span class="soc-text"><span class="soc-name">{_esc(name)}</span><span class="soc-handle">{_esc(handle)}</span></span>'
            f'<span class="soc-go" aria-hidden="true">↗</span></div></a>')
    same = ','.join(f'"{u}"' for _, _, _, u, _ in ACCOUNTS)
    ld = ('<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"BookingYou",'
          f'"url":"https://bookingyou.app/","logo":"https://bookingyou.app/assets/logo.png","sameAs":[{same}]}}</script>')
    return (f'<section id="social" class="bg-a"><div class="wrap">'
            f'<span class="chip">{_esc(c["chip"])}</span>'
            f'<h2 style="margin-top:14px">{_esc(c["h2"])}</h2><p class="lead">{_esc(c["lead"])}</p>'
            f'<div class="soc-grid">{"".join(cards)}'
            f'<div class="soc-yu"><img src="assets/yu-kun-wave.png" alt="" loading="lazy" decoding="async"><p>{_esc(c["note"])}</p></div></div>'
            f'<p class="soc-note">{_esc(c["tm"])}</p>'
            f'</div></section>{ld}')

def social_footer(code):
    c = SOCIAL_COPY[code]
    links = ''.join(f'<a href="{_esc(url)}" target="_blank" rel="noopener" aria-label="{_esc(name)}">{_glyph(key)}</a>'
                    for key, name, _, url, _ in ACCOUNTS)
    return f'<nav class="foot-soc" aria-label="{_esc(c["aria"])}">{links}</nav>'
