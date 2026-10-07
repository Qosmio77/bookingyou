"""Shared locale registry and reviewed, exact-string translations for the new site."""
from pathlib import Path
import copy,hashlib,json
from lxml import html,etree
ROOT=Path(__file__).resolve().parent
DOCS=ROOT.parents[1]
LOCALES={
 'zh':dict(path='',language='zh-Hant',name='繁體中文',source='zh-HK',apple='zh-hk',google='zh-tw',og='zh_HK'),
 'en':dict(path='en/',language='en',name='English',source='en',apple='en-us',google='en',og='en_US'),
 'zh-CN':dict(path='zh-cn/',language='zh-Hans',name='简体中文',source='zh-CN',apple='zh-cn',google='zh-cn',og='zh_CN'),
 'ja':dict(path='ja/',language='ja',name='日本語',source='ja',apple='ja-jp',google='ja',og='ja_JP'),
 'ko':dict(path='ko/',language='ko',name='한국어',source='ko',apple='ko-kr',google='ko',og='ko_KR'),
 'ms':dict(path='ms/',language='ms',name='Bahasa Melayu',source='ms',apple='ms-my',google='ms',og='ms_MY'),
 'th':dict(path='th/',language='th',name='ไทย',source='th',apple='th-th',google='th',og='th_TH'),
 'vi':dict(path='vi/',language='vi',name='Tiếng Việt',source='vi',apple='vi-vn',google='vi',og='vi_VN'),
}
EXTRA=[key for key in LOCALES if key not in ['zh','ja']]
IMAGE_NOTES={
'en':'Original App screenshots and promotional images retain their original language; the web-booking guide below uses English screenshots.',
'zh-CN':'App 截图及宣传图片保留原有语言；下方网页预约教学使用简体中文截图。',
'ko':'앱 화면과 홍보 이미지는 원본 언어로 표시됩니다. 아래 웹 예약 안내에는 한국어 화면을 사용합니다.',
'ms':'Tangkapan skrin aplikasi dan imej promosi mengekalkan bahasa asal. Panduan tempahan web di bawah menggunakan tangkapan skrin Bahasa Melayu.',
'th':'ภาพหน้าจอแอปและภาพประชาสัมพันธ์คงภาษาต้นฉบับไว้ ส่วนคู่มือจองผ่านเว็บด้านล่างใช้ภาพหน้าจอภาษาไทย',
'vi':'Ảnh chụp ứng dụng và hình quảng bá giữ nguyên ngôn ngữ gốc. Hướng dẫn đặt lịch trên web bên dưới dùng ảnh chụp tiếng Việt.'}

def payload(code):
 from strings import L
 from landing.compact_home import TEXT
 data=json.loads((ROOT/'locales'/f'{code}.json').read_text())
 data['map'].update(dict(zip(TEXT['zh'],TEXT[code])))
 extra={
 'en':['Beauty & hair','Tutoring & classes','Customer booking & sharing'],
 'zh-CN':['美容・美发','补习・教学','客户使用・分享预约'],
 'ko':['뷰티 · 헤어','개인 지도 · 수업','고객 예약 · 링크 공유'],
 'ms':['Kecantikan & rambut','Tuisyen & kelas','Tempahan pelanggan & perkongsian'],
 'th':['ความงาม · ทำผม','กวดวิชา · การสอน','การจองของลูกค้า · แชร์ลิงก์'],
 'vi':['Làm đẹp · Làm tóc','Gia sư · Lớp học','Đặt lịch · Chia sẻ liên kết']}
 for source,target in zip(['美容・美髮','補習・教學','客人使用・分享預約'],extra[code]):data['map'][source]=target
 data['map'][L['zh-HK']['y_lead']]=L[code]['y_lead']
 data['map']['BookingYou｜小店預約管理系統・基本功能免費']=L[code]['title']
 return data
def translated(value,mapping):
 if value is None:return None
 key=value.strip()
 if key in mapping:return value[:len(value)-len(value.lstrip())]+mapping[key]+value[len(value.rstrip()):]
 return value

def language_options(select,current):
 for child in list(select):select.remove(child)
 for key,loc in LOCALES.items():
  opt=etree.SubElement(select,'option',value=key);opt.text=loc['name']
  if key==current:opt.set('selected','selected')

def localize_js(source,mapping):
 # Replace only complete, known string literals. This also covers nested JSON
 # dictionaries without interpreting JavaScript templates, regexes or comments.
 for key in sorted(mapping,key=len,reverse=True):
  replacement=json.dumps(mapping[key],ensure_ascii=False).replace('<','\\u003c')
  double=json.dumps(key,ensure_ascii=False).replace('<','\\u003c')
  single="'"+key.replace('\\','\\\\').replace("'","\\'").replace('\n','\\n').replace('\r','\\r')+"'"
  source=source.replace(double,replacement).replace(single,replacement)
 return source

def localize_assets(value,loc):
 return (value.replace('assets/webbook/zh-HK-',f'assets/webbook/{loc["source"]}-')
  .replace('badges/apple-zh-hk.svg',f'badges/apple-{loc["apple"]}.svg')
  .replace('badges/google-zh-tw.png',f'badges/google-{loc["google"]}.png'))

def build_remaining():
 from landing.hero_carousel import configure as configure_hero
 original=html.parse(str(DOCS/'index.html')).getroot()
 for code in EXTRA:
  loc=LOCALES[code];data=payload(code);mapping=data['map'];doc=copy.deepcopy(original)
  doc.set('lang',loc['language']);doc.set('data-locale',code)
  home='/'+loc['path'];url='https://bookingyou.app'+home
  for el in doc.iter():
   if not isinstance(el.tag,str):continue
   if el.tag not in ['script','style']:
    el.text=translated(el.text,mapping)
   el.tail=translated(el.tail,mapping)
   for attr in ['alt','aria-label','title','content']:
    if el.get(attr) is not None:el.set(attr,translated(el.get(attr),mapping))
   for attr in ['src','href']:
    v=el.get(attr)
    if not v:continue
    v=localize_assets(v,loc)
    if attr=='href' and el.tag=='a' and not el.get('hreflang'):
     if v=='/' or v.startswith('/#') or v.startswith('/industries/'):v=home+v[1:]
     if v=='https://bookingyou.app/about/':v=url+'about/'
    el.set(attr,v)
  language_options(doc.get_element_by_id('language'),code)
  configure_hero(doc,code)
  doc.xpath('//link[@rel="canonical"]')[0].set('href',url)
  for el in doc.xpath('//meta[@property="og:url"]'):el.set('content',url)
  for el in doc.xpath('//meta[@property="og:locale"]'):el.set('content',loc['og'])
  # Update only page-owned identifiers; shared organization/website IDs stay stable.
  structured=doc.xpath('//script[@type="application/ld+json"]')[0]
  graph=json.loads(structured.text)
  def translate_tree(value):
   if isinstance(value,str):return translated(value,mapping)
   if isinstance(value,list):return [translate_tree(x) for x in value]
   if isinstance(value,dict):return {k:translate_tree(v) for k,v in value.items()}
   return value
  graph=translate_tree(graph)
  for item in graph['@graph']:
   if item['@type']=='WebPage':
    item.update({'@id':url+'#webpage','url':url,'inLanguage':loc['language']})
   elif item['@type']=='FAQPage':item.update({'@id':url+'#faq','inLanguage':loc['language']})
  structured.text=json.dumps(graph,ensure_ascii=False).replace('<','\\u003c')
  # Static titles/captions and JS-rendered versions share the same translations.
  note=doc.xpath('//*[@data-i18n="galleryNote"]')[0]
  note.text=(note.text or '')+' '+IMAGE_NOTES[code]
  note.attrib.pop('data-i18n',None)
  for script in doc.xpath('//script[@src]'):
   source=(DOCS/script.get('src')).read_text()
   source=localize_assets(localize_js(source,mapping),loc)
   name='landing-'+hashlib.sha256(source.encode()).hexdigest()[:12]+'.js'
   (DOCS/'assets'/name).write_text(source);script.set('src','assets/'+name)
  destination=DOCS/loc['path'];destination.mkdir(parents=True,exist_ok=True)
  (destination/'index.html').write_text(html.tostring(doc,encoding='unicode',doctype='<!doctype html>'))
 print('Built six additional localized homepages')
