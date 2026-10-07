"""Validate localized homepage parity, routes, metadata and real assets."""
from pathlib import Path
from urllib.parse import urlsplit
import sys,json,re
from lxml import html
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from landing.localization import LOCALES,EXTRA,payload
ROOT=Path(__file__).resolve().parents[2]
count=0
def check(ok,message):
 global count
 count+=1
 if not ok:raise AssertionError(message)
zh=html.parse(str(ROOT/'index.html'))
sections=zh.xpath('//main/*/@id')
for code,loc in LOCALES.items():
 path=ROOT/loc['path']/'index.html';doc=html.parse(str(path));ids=set(doc.xpath('//*[@id]/@id'));url='https://bookingyou.app/'+loc['path']
 check(doc.xpath('//html/@lang')==[loc['language']],code+' language')
 check(doc.xpath('//html/@data-locale')==[code],code+' runtime locale')
 check(doc.xpath('//main/*/@id')==sections,code+' section parity')
 check(len(doc.xpath('//main/*'))==9,code+' nine main blocks')
 check(len(doc.xpath('//*[@id="features"]//article[@class="core-card"]'))==6,code+' six core features')
 check(len(doc.xpath('//*[@id="faq"]//details'))==7,code+' seven distinct FAQs')
 check(len(set(doc.xpath('//*[@id="faq"]//summary/text()')))==7,code+' unique FAQ questions')
 check(not doc.xpath('//*[contains(@class,"news-area") or contains(@class,"plan-pro")]'),code+' no stale news or unavailable plan card')
 check(len(doc.xpath('//*[@data-content-tab]'))==3,code+' three content tabs')
 check(len(doc.xpath('//h1'))==1,code+' one h1')
 check(doc.xpath('//link[@rel="canonical"]/@href')==[url],code+' canonical')
 check(len(doc.xpath('//link[@hreflang]'))==9,code+' hreflang')
 check(len(doc.xpath('//select[@id="language"]/option'))==8,code+' all language options')
 check(doc.xpath('//select[@id="language"]/option[@selected]/@value')==[code],code+' active language')
 check(doc.xpath('//header//nav/a[1]/@href')==['/'+loc['path']+'industries/'],code+' guide navigation')
 check(not any('noindex' in v for v in doc.xpath('//meta[@name="robots"]/@content')),code+' release indexable')
 for el in doc.xpath('//a[@href]|//img[@src]|//link[@rel="stylesheet"]|//script[@src]'):
  value=el.get('src') or el.get('href');parts=urlsplit(value)
  if parts.scheme or parts.netloc:continue
  target=ROOT/parts.path.lstrip('/')
  if parts.path.endswith('/') or not parts.path:target=target/'index.html'
  check(target.is_file(),code+' asset/route '+value)
  if parts.fragment:
   dest=doc if parts.path in ['', '/'+loc['path']] else html.parse(str(target))
   check(bool(dest.xpath('//*[@id=$id]',id=parts.fragment)),code+' anchor '+value)
 schema=json.loads(doc.xpath('//script[@type="application/ld+json"]/text()')[0])['@graph']
 page=next(x for x in schema if x['@type']=='WebPage')
 check(page['inLanguage']==loc['language'] and page['url']==url,code+' schema page')
 faq=next(x for x in schema if x['@type']=='FAQPage')
 check(len(faq['mainEntity'])==7,code+' FAQ schema includes all seven questions')
 visible=doc.xpath('//*[@id="faq"]')[0].text_content()
 for q in faq['mainEntity']:check(q['name'] in visible and q['acceptedAnswer']['text'] in visible,code+' schema FAQ visible')
 if code in EXTRA:
  check(len(payload(code)['guides'])==5,code+' complete industry copy')
  # Native language names in the switcher remain native intentionally.
  for el in doc.xpath('//script|//style|//select|//footer//nav[a[@hreflang]]'):
   el.getparent().remove(el)
  body=doc.xpath('//body')[0].text_content().replace('U仔','Yu-kun').replace('小U','Yu-kun')
  if code!='zh-CN':check(not re.search('[\u3400-\u9fff]',body),code+' no Chinese fallback in homepage')
print(f'{count} multilingual homepage checks passed')
