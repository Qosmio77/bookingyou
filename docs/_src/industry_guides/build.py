"""Build useful bilingual industry guides and extend sitemap idempotently."""
from pathlib import Path
from html import escape as e
import hashlib, json
from lxml import html
from PIL import Image
from xml.etree import ElementTree as ET
from .content import GUIDES
from landing.localization import LOCALES, EXTRA, payload, translated
from landing.compact_home import catalogue
ROOT=Path(__file__).resolve().parent
DOCS=ROOT.parents[1]
BASE='https://bookingyou.app'
UI={
'zh':dict(lang='zh-Hant',home='/',hub='行業預約指南',home_label='首頁',other='日本語',skip='跳到主要內容',start='免費開始使用',flow='睇客人點預約',pain='你熟悉嘅日常難題，逐個安排好。',services='先將服務同所需時間寫清楚。',service_note='以上服務名稱及時長只作設定例子，唔係行業標準或實際店舖資料。請按服務內容、準備及清潔需要調整。',customer='客人點樣預約？',merchant='商戶點樣睇到同處理預約？',customer_note='BookingYou 網頁預約實際示範畫面；店舖、服務及日期只作展示。',merchant_note='BookingYou 商戶端展示畫面。實際版面以使用中 App 為準。',status='提交申請 → 商戶確認 → 預約成立',status_note='網頁預約需要商戶確認。想喺 App 管理預約、聊天及接收提醒，客人可以另行下載 App；網頁訪客請保留預約連結。',faq='呢個行業，仲有咩要留意？',download='由一條預約連結開始。',download_note='下載 BookingYou，登記商戶、建立服務，再設定營業時間及分享預約連結。基本功能免費，零預約佣金。',related='睇其他行業點安排預約',read='查看完整流程 →',photo='行業情境示意圖（AI 生成）',promise='基本功能免費 · 零佣金 · iOS / Android',about='關於 BookingYou',privacy='私隱政策',terms='服務條款',hub_title='各行各業，預約都有自己嘅節奏。',hub_intro='由美容服務到教學課節，揀返你嘅行業，睇客人點提交預約、商戶點確認，以及每日最容易遇到嘅安排問題。'),
'ja':dict(lang='ja',home='/ja/',hub='業種別予約ガイド',home_label='ホーム',other='繁體中文',skip='本文へ移動',start='無料ではじめる',flow='予約の流れを見る',pain='現場で起こる予約の悩みから考える。',services='メニューと所要時間を、先に整理。',service_note='メニュー名と時間は設定例です。業界標準や実在店舗の予約情報ではありません。サービス内容、準備、片付けに合わせて調整してください。',customer='お客様はどう予約する？',merchant='お店はどこで予約を確認する？',customer_note='BookingYouのウェブ予約デモ画面。店舗・サービス・日時は表示例です。',merchant_note='BookingYouのお店側の画面例です。実際の表示はご利用中のアプリでご確認ください。',status='申し込み → お店が確認 → 予約確定',status_note='ウェブ予約はお店の承認後に確定します。アプリでの予約管理、チャット、リマインダーを利用したいお客様はアプリをご利用ください。ウェブからの申し込みでは専用リンクを保存してください。',faq='この業種でよくある質問',download='まずは、予約リンクをひとつ。',download_note='BookingYouをダウンロードし、お店を登録。メニューと営業時間を設定して予約リンクを共有しましょう。基本機能無料、予約手数料なし。',related='ほかの業種の使い方も見る',read='予約の流れを見る →',photo='業種のイメージ写真（AI生成）',promise='基本機能無料 · 予約手数料なし · iOS / Android',about='BookingYouについて',privacy='プライバシーポリシー',terms='利用規約',hub_title='業種が違えば、予約の悩みも違う。',hub_intro='施術から授業まで、それぞれの現場に合った予約の使い方をご紹介。お客様の申し込み、お店の確認、日々のスケジュール管理を業種別に確認できます。')}

TRANSLATIONS={code:payload(code) for code in EXTRA}
for code,data in TRANSLATIONS.items():
 UI[code]={key:translated(value,data['map']) for key,value in UI['zh'].items()}
 UI[code].update(lang=LOCALES[code]['language'],home='/'+LOCALES[code]['path'])
 for guide in GUIDES:guide[code]=data['guides'][guide['slug']]

def tx(lang,zh,ja):
 return zh if lang=='zh' else ja if lang=='ja' else TRANSLATIONS[lang]['map'][zh]

def language_menu(lang,slug):
 links=''.join(f'<a href="{route(code,slug)}" lang="{loc["language"]}" hreflang="{loc["language"]}"'+(' aria-current="page"' if code==lang else '')+f'>{loc["name"]}</a>' for code,loc in LOCALES.items())
 return f'<details class="language-menu"><summary aria-label="Language">{LOCALES[lang]["name"]} ▾</summary><div>{links}</div></details>'

def route(lang,slug=''):
 return UI[lang]['home']+'industries/'+(slug+'/' if slug else '')

def picture(g,loading='lazy'):
 return f'<img src="/preview-assets/industry-{g["image"]}-v8.webp" width="600" height="600" alt="" loading="{loading}">'

def shell(lang,title,description,slug,body,css,faqs=None):
 u=UI[lang];other='ja' if lang=='zh' else 'zh';url=BASE+route(lang,slug)
 graph=[{'@type':'WebPage','@id':url+'#webpage','url':url,'name':title,'description':description,'inLanguage':u['lang'],'isPartOf':{'@id':BASE+'/#website'},'about':{'@id':BASE+'/#organization'}},
 {'@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':u['home_label'],'item':BASE+u['home']},{'@type':'ListItem','position':2,'name':u['hub'],'item':BASE+route(lang)}]+([{'@type':'ListItem','position':3,'name':title,'item':url}] if slug else [])}]
 if faqs:graph.append({'@type':'FAQPage','@id':url+'#faq','inLanguage':u['lang'],'mainEntity':[{'@type':'Question','name':q,'acceptedAnswer':{'@type':'Answer','text':a}} for q,a in faqs]})
 data=json.dumps({'@context':'https://schema.org','@graph':graph},ensure_ascii=False).replace('<','\\u003c')
 alts=''.join(f'<link rel="alternate" hreflang="{UI[l]["lang"]}" href="{BASE+route(l,slug)}">' for l in UI)+f'<link rel="alternate" hreflang="x-default" href="{BASE+route("zh",slug)}">'
 page=f'''<!doctype html><html lang="{u['lang']}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{e(title)}｜BookingYou</title><meta name="description" content="{e(description,quote=True)}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="{url}">{alts}<link rel="icon" href="/assets/logo.png"><link rel="stylesheet" href="/assets/{css}"><meta property="og:type" content="website"><meta property="og:title" content="{e(title,quote=True)}｜BookingYou"><meta property="og:description" content="{e(description,quote=True)}"><meta property="og:url" content="{url}"><meta property="og:image" content="{BASE}/assets/logo.png"><meta property="og:site_name" content="BookingYou"><meta name="twitter:card" content="summary"><script type="application/ld+json">{data}</script></head><body><a class="skip" href="#main">{u['skip']}</a><header class="top"><div class="wrap bar"><a class="logo" href="{u['home']}"><img src="/assets/logo.png" width="35" height="35" alt=""><span>Booking<em>You</em></span></a><nav class="nav" aria-label="{u['hub']}"><a href="{route(lang)}">{u['hub']}</a><a class="optional" href="{u['home']}#app-screens">App</a>{language_menu(lang,slug)}<a class="cta" href="#download">{u['start']}</a></nav></div></header><main id="main">{body}</main><footer class="footer"><div class="wrap"><span>© 2026 BookingYou</span><nav><a href="{u['home']}about/">{u['about']}</a><a href="/privacy/">{u['privacy']}</a><a href="/terms/">{u['terms']}</a><a href="mailto:contact@bookingyou.app">contact@bookingyou.app</a></nav></div></footer></body></html>'''

 doc=html.document_fromstring(page)
 for heading in doc.xpath('//main//h2[not(ancestor::a)]'):
  heading.set('class',(heading.get('class','')+' section-title-emphasis').strip())
 for img in doc.xpath('//img[@src]'):
  f=DOCS/img.get('src').lstrip('/')
  if f.suffix!='.svg' and f.is_file() and not img.get('width'):
   with Image.open(f) as im:
    img.set('width',str(im.width));img.set('height',str(im.height))
 return html.tostring(doc,encoding='unicode',doctype='<!doctype html>')

def crumb(lang,name=''):
 u=UI[lang];return f'<nav class="crumb" aria-label="Breadcrumb"><a href="{u["home"]}">{u["home_label"]}</a><span aria-hidden="true">/</span><a href="{route(lang)}">{u["hub"]}</a>'+ (f'<span aria-hidden="true">/</span><span aria-current="page">{e(name)}</span>' if name else '')+'</nav>'

def steps(items):return '<ol class="steps">'+''.join(f'<li><h3>{e(h)}</h3><p>{e(p)}</p></li>' for h,p in items)+'</ol>'

def download(lang):
 u=UI[lang];apple='apple-'+LOCALES[lang]['apple']+'.svg';google='google-'+LOCALES[lang]['google']+'.png'
 return f'''<section class="section" id="download"><div class="wrap download"><div><h2>{u['download']}</h2><p>{u['download_note']}</p></div><div class="badges"><a href="https://apps.apple.com/app/id6782119326"><img src="/assets/badges/{apple}" alt="Download on the App Store"></a><a href="https://play.google.com/store/apps/details?id=com.bookingyou.app"><img class="google" src="/assets/badges/{google}" alt="Get it on Google Play"></a></div></div></section>'''

def build():
 css_text=(ROOT/'style.css').read_text()+'\n'+(ROOT.parent/'landing/section-titles.css').read_text();css='industry-guides-'+hashlib.sha256(css_text.encode()).hexdigest()[:12]+'.css';(DOCS/'assets'/css).write_text(css_text)
 for lang,u in UI.items():
  for g in GUIDES:
   c=g[lang];slug=g['slug']
   pains=''.join(f'<article class="pain"><span class="num">0{i}</span><h3>{e(h)}</h3><p>{e(p)}</p></article>' for i,(h,p) in enumerate(c['pains'],1))
   services=''.join(f'<article class="service"><h3>{e(h)}</h3><p class="duration">{e(t)}</p><p>{e(p)}</p></article>' for h,t,p in c['services'])
   faq=''.join(f'<details><summary>{e(q)}</summary><p>{e(a)}</p></details>' for q,a in c['faqs'])
   related=''.join(f'<a href="{route(lang,x["slug"])}">{picture(x)}<span>{e(x[lang]["name"])} →</span></a>' for x in GUIDES if x!=g)
   shot=LOCALES[lang]['source']
   body=f'''<section class="hero"><div class="wrap">{crumb(lang,c['name'])}<div class="hero-grid"><div><p class="eyebrow">{e(c['title'])}</p><h1>{e(c['headline'])}</h1><p class="intro">{e(c['intro'])}</p><div class="actions"><a class="cta" href="#download">{u['start']}</a><a class="secondary" href="#customer">{u['flow']} ↓</a></div><p class="promise">{u['promise']}</p></div><figure>{picture(g,'eager')}<figcaption>{u['photo']}</figcaption></figure></div></div></section>
<section class="section" id="challenges"><div class="wrap"><div class="section-head"><p class="eyebrow">{e(c['name'])}</p><h2>{u['pain']}</h2></div><div class="pain-grid">{pains}</div></div></section>

<section class="section workflow" id="customer"><div class="wrap flow-layout"><div class="flow-copy"><p class="eyebrow">01 / {tx(lang,'客人預約','お客様の操作')}</p><h2>{u['customer']}</h2>{steps(c['customer'])}</div><figure class="shot"><a href="/assets/webbook/{shot}-2.jpg" aria-label="{tx(lang,'查看完整預約畫面','予約画面を拡大')}"><img src="/assets/webbook/{shot}-2.jpg" loading="lazy" alt="{tx(lang,'客人選擇日期及預約時間','お客様が予約日時を選択')}"></a><figcaption>{u['customer_note']}</figcaption></figure></div></section>
<section class="section" id="merchant"><div class="wrap"><div class="flow-layout reverse"><div class="flow-copy"><p class="eyebrow">02 / {tx(lang,'商戶管理','お店の操作')}</p><h2>{u['merchant']}</h2>{steps(c['merchant'])}</div><figure class="shot"><a href="/assets/deck-dashboard.png" aria-label="{tx(lang,'查看完整商戶畫面','お店の画面を拡大')}"><img src="/assets/deck-dashboard.png" loading="lazy" alt="{tx(lang,'BookingYou 商戶管理首頁','BookingYou お店の管理ホーム')}"></a><figcaption>{u['merchant_note']}</figcaption></figure></div><aside class="status"><h3>{u['status']}</h3><p>{u['status_note']}</p></aside></div></section>
<section class="section services" id="services"><div class="wrap"><h2>{u['services']}</h2><div class="service-grid">{services}</div><p class="note">{u['service_note']}</p></div></section>
<section class="section workflow" id="faq"><div class="wrap"><div class="faq-wrap"><h2>{u['faq']}</h2>{faq}</div></div></section><section class="section" id="related"><div class="wrap"><h2>{u['related']}</h2><div class="related">{related}</div></div></section>{download(lang)}'''
   dest=DOCS/route(lang,slug).strip('/');dest.mkdir(parents=True,exist_ok=True);(dest/'index.html').write_text(shell(lang,c['title'],c['description'],slug,body,css,c['faqs']))
  cards=''.join(f'<a class="hub-card" href="{route(lang,g["slug"])}">{picture(g)}<div><h2>{e(g[lang]["name"])}</h2><p>{e(g[lang]["intro"])}</p><span>{u["read"]}</span></div></a>' for g in GUIDES)
  catalog=catalogue(lang,(ROOT.parent/'landing/template.html').read_text(),TRANSLATIONS[lang]['map'] if lang in EXTRA else None)
  body=f'<section class="hero"><div class="wrap">{crumb(lang)}<h1>{u["hub_title"]}</h1><p class="intro">{u["hub_intro"]}</p></div></section><section class="section"><div class="wrap hub-grid">{cards}</div></section>{catalog}{download(lang)}'
  dest=DOCS/route(lang).strip('/');dest.mkdir(parents=True,exist_ok=True);(dest/'index.html').write_text(shell(lang,u['hub'],u['hub_intro'],'',body,css))
 extend_sitemap()
 print(f'Built {len(UI)*len(GUIDES)} industry guides and {len(UI)} language hubs')

def extend_sitemap():
 ns='http://www.sitemaps.org/schemas/sitemap/0.9';xh='http://www.w3.org/1999/xhtml';ET.register_namespace('',ns);ET.register_namespace('xhtml',xh)
 path=DOCS/'sitemap.xml';tree=ET.parse(path);root=tree.getroot()
 for old in list(root):
  loc=old.find('{'+ns+'}loc')
  if loc is not None and '/industries/' in loc.text:root.remove(old)
 for slug in ['']+[g['slug'] for g in GUIDES]:
  for lang in UI:
   entry=ET.SubElement(root,'{'+ns+'}url');ET.SubElement(entry,'{'+ns+'}loc').text=BASE+route(lang,slug)
   for alt in UI:ET.SubElement(entry,'{'+xh+'}link',rel='alternate',hreflang=UI[alt]['lang'],href=BASE+route(alt,slug))
   ET.SubElement(entry,'{'+xh+'}link',rel='alternate',hreflang='x-default',href=BASE+route('zh',slug))
 ET.indent(tree,space='  ');tree.write(path,encoding='utf-8',xml_declaration=True)
