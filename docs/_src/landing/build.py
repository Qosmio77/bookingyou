"""Render the approved Traditional Chinese and Japanese production homepages."""
from pathlib import Path
from lxml import html, etree
from PIL import Image
import json, hashlib

ROOT = Path(__file__).resolve().parent
SITE = ROOT.parents[1]
BASE = 'https://bookingyou.app/'
CONFIG = {
 'zh': dict(path='', language='zh-Hant', title='BookingYou｜小店預約管理系統・基本功能免費', description='BookingYou 為美容、美髮、美甲、私人教練、教學及寵物美容小店提供預約管理。分享連結或 QR Code，客人免下載 App 即可提交網頁預約，商戶確認後成立。基本功能免費，零預約佣金。', keyword='小店預約管理系統', about='BookingYou 係為預約制小店而設嘅預約管理 App，適合美容、美髮、美甲、私人教練、教學及寵物美容。商戶可以管理日曆、代理預約、改期同提醒；客人透過連結或 QR Code 提交網頁預約，經商戶確認後成立。基本功能免費，零預約佣金。'),
 'ja': dict(path='ja/', language='ja', title='BookingYou｜小さなお店の予約管理アプリ・基本機能無料', description='美容室・ネイルサロン・パーソナルジム・教室・ペットサロンの予約管理に。予約リンクやQRコードで、お客様はアプリ不要で予約を申し込み、お店の確認後に確定。基本機能無料、予約手数料なし。', keyword='小さなお店の予約管理アプリ', about='BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。')
}

def tag(parent, tag_name, text=None, **attrs):
 e=etree.SubElement(parent,tag_name,{k.replace('_','-'):str(v) for k,v in attrs.items()})
 if text is not None:e.text=text
 return e

def text_replace(element, value):
 for child in list(element):element.remove(child)
 element.text=value

def build():
 release=True
 translations=json.loads((ROOT/'seo-copy.json').read_text())
 template=(ROOT/'template.html').read_text()
 base_dom=html.document_fromstring(template)
 zh={e.get('data-i18n'):e.text_content() for e in base_dom.xpath('//*[@data-i18n]')}
 zh.update(translations['zh']);translations['zh']=zh
 for lang in CONFIG:
  translations[lang]['aboutDesc']=CONFIG[lang]['about']
  translations[lang]['seoKeyword']=CONFIG[lang]['keyword']
  translations[lang]['preview']='設計預覽 V12 · 未發佈' if lang=='zh' else 'デザインプレビュー V12 · 未公開'
 files=json.loads((ROOT/'assets.json').read_text())
 assets={k:'assets/'+v for k,v in files.items()};assets['photo']='preview-assets/hero-salon-v6.webp'
 source=template.replace('__ASSET_MAP__',json.dumps(assets,ensure_ascii=False))
 source=source.replace("document.querySelectorAll('[data-i18n]').forEach(el=>copy.zh[el.dataset.i18n]=el.textContent);",'Object.assign(copy.zh,'+json.dumps(zh,ensure_ascii=False).replace('<','\\u003c')+');')
 source=source.replace("setLanguage(new URLSearchParams(location.search).get('lang')||'zh');","setLanguage(document.documentElement.lang==='ja'?'ja':'zh');")
 target=SITE
 report=[]
 for lang,cfg in CONFIG.items():
  doc=html.document_fromstring(source);head=doc.find('head');body=doc.find('body')
  doc.set('lang',cfg['language']);doc.set('data-seo-mode','release' if release else 'preview')
  # Each URL delivers its complete language without relying on JS execution.
  for e in doc.xpath('//*[@data-lang]'):
   if e.get('data-lang')!=lang:e.getparent().remove(e)
  for e in doc.xpath('//*[@data-i18n]'):
   key=e.get('data-i18n');value=translations[lang].get(key,zh.get(key,e.text_content()))
   text_replace(e,value)
  for e in doc.xpath('//*[@data-asset]'):e.set('src',assets[e.get('data-asset')])
  local={'web1':'web1'+lang,'web2':'web2'+lang,'apple':'apple'+lang,'google':'google'+lang}
  for e in doc.xpath('//*[@data-local-asset]'):e.set('src',assets[local[e.get('data-local-asset')]])
  # These screenshots already exist; render a useful gallery before JavaScript.
  gallery=doc.get_element_by_id('screen-gallery')
  labels=['搵店及服務','服務、時長同價錢','揀日子同時間','店舖 QR 卡','分享預約連結'] if lang=='zh' else ['お店とサービスを探す','サービス・時間・料金','日付と時間を選ぶ','お店のQRカード','予約リンクを共有']
  for i,label in enumerate(labels,1):
   article=tag(gallery,'article',**{'class':'screen-item'})
   a=tag(article,'a',href=f'app-screens/{lang}/{i:02d}.webp',**{'class':'screen-open'})
   frame=tag(a,'span',**{'class':'screen-frame'})
   tag(frame,'img',src=f'app-screens/{lang}/{i:02d}.webp',alt='BookingYou · '+label,width='1100',height='2390',loading='lazy')
   caption=tag(a,'span',**{'class':'screen-caption'});tag(caption,'strong',label)
  # Keep downloads and useful sections accessible even if JS is disabled.
  for e in doc.xpath('//a[starts-with(@href,"#")]'):
   e.set('href','/'+cfg['path']+e.get('href'))
  for e in doc.xpath('//*[@data-page]'):e.set('href',BASE+cfg['path']+'about/')
  for e in doc.xpath('//select[@id="language"]/option'):
   e.attrib.pop('selected',None)
   if e.get('value')==lang:e.set('selected','selected')
  tag(doc.xpath('//h1')[0],'span',cfg['keyword'],**{'class':'hero-h1-descriptor','data-i18n':'seoKeyword'})
  language_links=tag(doc.xpath('//footer')[0],'nav',aria_label='語言 / Languages',**{'class':'seo-language-links wrap'})
  for code,path,label in [('zh-Hant','','繁體中文'),('en','en/','English'),('zh-Hans','zh-cn/','简体中文'),('ja','ja/','日本語'),('ko','ko/','한국어'),('ms','ms/','Bahasa Melayu'),('th','th/','ไทย'),('vi','vi/','Tiếng Việt')]:
   tag(language_links,'a',label,href=('/'+path if release or code in ['zh-Hant','ja'] else BASE+path),hreflang=code,lang=code)
  # Reuse the live site's language cluster and identity, with localized content.
  official=html.parse(str(SITE/cfg['path']/'index.html'))
  for e in list(head):
   if e.tag in ['title','meta','link','script'] and not (e.tag=='meta' and (e.get('charset') or e.get('name')=='viewport')):head.remove(e)
  tag(head,'base',href='/')
  tag(head,'title',cfg['title']+('' if release else ' · '+('設計預覽' if lang=='zh' else 'デザインプレビュー')))
  tag(head,'meta',name='description',content=cfg['description'])
  tag(head,'meta',name='robots',content='index,follow,max-image-preview:large' if release else 'noindex,nofollow')
  tag(head,'link',rel='canonical',href=BASE+cfg['path'])
  tag(head,'link',rel='icon',type='image/png',href='/assets/logo.png')
  for e in official.xpath('//link[@hreflang]'):head.append(e)
  for name,value in {'og:type':'website','og:site_name':'BookingYou','og:url':BASE+cfg['path'],'og:title':cfg['title'],'og:description':cfg['description'],'og:image':BASE+'assets/logo.png','og:image:alt':'BookingYou','og:locale':'zh_HK' if lang=='zh' else 'ja_JP'}.items():tag(head,'meta',property=name,content=value)
  for name,value in {'twitter:card':'summary','twitter:title':cfg['title'],'twitter:description':cfg['description'],'twitter:image':BASE+'assets/logo.png','twitter:image:alt':'BookingYou'}.items():tag(head,'meta',name=name,content=value)
  graph=json.loads(official.xpath('//script[@type="application/ld+json"]')[0].text)['@graph']
  graph=[g for g in graph if g['@type'] not in ['SoftwareApplication','FAQPage']]
  webpage=next(g for g in graph if g['@type']=='WebPage');webpage.update(name=cfg['title'],description=cfg['description'])
  graph.append({'@type':'SoftwareApplication','@id':BASE+'#app','name':'BookingYou','url':BASE,'applicationCategory':'BusinessApplication','operatingSystem':'iOS, iPadOS, Android','description':cfg['about'],'publisher':{'@id':BASE+'#organization'},'downloadUrl':['https://apps.apple.com/app/id6782119326','https://play.google.com/store/apps/details?id=com.bookingyou.app'],'isAccessibleForFree':True})
  questions=[]
  for item in doc.xpath('//section[@id="faq"]//details'):
   question=item.find('summary');answer=item.find('p')
   if question is not None and answer is not None:questions.append({'@type':'Question','name':question.text_content().strip(),'acceptedAnswer':{'@type':'Answer','text':answer.text_content().strip()}})
  graph.append({'@type':'FAQPage','@id':BASE+cfg['path']+'#faq','mainEntity':questions,'inLanguage':cfg['language']})
  tag(head,'script',json.dumps({'@context':'https://schema.org','@graph':graph},ensure_ascii=False).replace('<','\\u003c'),type='application/ld+json')
  # Reserve image space and ship cacheable assets rather than megabytes of base64.
  for img in doc.xpath('//img[@src]'):
   src=img.get('src');f=SITE/src
   img.set('decoding','async')
   if not img.get('alt'):img.set('alt',img.get('alt',''))
   if f.is_file() and f.suffix.lower() not in ['.svg']:
    with Image.open(f) as im:w,h=im.size
    if not img.get('width') or not img.get('height'):img.set('width',str(w));img.set('height',str(h))
  styles='\n'.join(e.text or '' for e in head.findall('style'))
  styles+='\n'+(ROOT/'seo-v11.css').read_text()
  for e in head.findall('style'):head.remove(e)
  styles+='\n.hero-h1-descriptor{display:block;font-size:clamp(15px,1.6vw,22px);letter-spacing:.04em;line-height:1.6;margin-top:14px;color:var(--navy)}.seo-language-links{display:flex;flex-wrap:wrap;gap:12px 20px;margin-top:22px;font-size:12px;color:var(--muted)}'
  css_name='landing-'+hashlib.sha256(styles.encode()).hexdigest()[:12]+'.css'
  (target/'assets'/css_name).write_text(styles);tag(head,'link',rel='stylesheet',href='assets/'+css_name)
  scripts=doc.xpath('//body/script[not(@type)]')
  js='\n;\n'.join(e.text or '' for e in scripts)
  for e in scripts:e.getparent().remove(e)
  js+='\n'+(ROOT/'seo-runtime.js').read_text().replace('__SEO_CONFIG__',json.dumps(CONFIG,ensure_ascii=False)).replace('__SEO_TRANSLATIONS__',json.dumps(translations,ensure_ascii=False))
  js_name='landing-'+hashlib.sha256(js.encode()).hexdigest()[:12]+'.js'
  (target/'assets'/js_name).write_text(js);tag(body,'script',src='assets/'+js_name,defer='defer')
  if release:
   for e in doc.xpath('//*[contains(concat(" ",normalize-space(@class)," ")," preview-tag ")]'):e.getparent().remove(e)
  destination=target/cfg['path'];destination.mkdir(exist_ok=True,parents=True)
  content=html.tostring(doc,encoding='unicode',doctype='<!doctype html>')
  (destination/'index.html').write_text(content)
  report.append({'language':lang,'html_bytes':len(content.encode()),'canonical':BASE+cfg['path'],'static_faqs':len(questions),'h1_count':len(doc.xpath('//h1'))})
 (target/'robots.txt').write_text((SITE/'robots.txt').read_text() if release else 'User-agent: *\nAllow: /\n# Local preview HTML carries noindex,nofollow. No preview sitemap.\n')
 (target/'llms.txt').write_text((ROOT/'seo-llms.txt').read_text())
 print(json.dumps({'mode':'production' if release else 'preview','pages':report},ensure_ascii=False))

if __name__=='__main__':
 build()
