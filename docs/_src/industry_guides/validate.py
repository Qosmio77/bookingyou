"""Validate generated industry guides against their actual linked content."""
from pathlib import Path
import sys,json
from urllib.parse import urlsplit
from lxml import html,etree
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from industry_guides.content import GUIDES
from industry_guides.build import UI,route,BASE
DOCS=Path(__file__).resolve().parents[2]
checks=0
def check(ok,label):
 global checks
 checks+=1
 if not ok:raise AssertionError(label)
urls=etree.parse(str(DOCS/'sitemap.xml')).xpath('//*[local-name()="loc"]/text()')
check(len(urls)==len(set(urls))==18+len(UI)*(len(GUIDES)+1),'66 unique sitemap routes')
titles=[];descriptions=[]
for lang,u in UI.items():
 home=html.parse(str(DOCS/u['home'].strip('/')/'index.html'))
 links=home.xpath('//*[@id="industries-overview"]//a/@href')
 for g in GUIDES:check(route(lang,g['slug']) in links,'homepage discovery '+g['slug'])
 for slug in ['']+[g['slug'] for g in GUIDES]:
  path=DOCS/route(lang,slug).strip('/')/'index.html';doc=html.parse(str(path));raw=path.read_text()
  check(doc.getroot().get('lang')==u['lang'],'correct lang '+str(path))
  check(len(doc.xpath('//h1'))==1,'one h1')
  check(doc.xpath('//link[@rel="canonical"]/@href')==[BASE+route(lang,slug)],'canonical')
  check(BASE+route(lang,slug) in urls,'in sitemap')
  check(not any('noindex' in v for v in doc.xpath('//meta[@name="robots"]/@content')),'indexable')
  titles+=doc.xpath('//title/text()');descriptions+=doc.xpath('//meta[@name="description"]/@content')
  check(len(doc.xpath('//link[@hreflang]'))==len(UI)+1,'all eight locale alternates plus default')
  for a in doc.xpath('//link[@hreflang]'):
   check((DOCS/urlsplit(a.get('href')).path.strip('/')/'index.html').exists(),'alternate exists')
  ids=doc.xpath('//*[@id]/@id');check(len(ids)==len(set(ids)),'unique IDs')
  for a in doc.xpath('//a[@href] | //img[@src] | //link[@rel="stylesheet"]'):
   value=a.get('src') or a.get('href');parts=urlsplit(value)
   if parts.scheme or parts.netloc:continue
   if not parts.path:check(not parts.fragment or parts.fragment in ids,'anchor exists '+value);continue
   target=DOCS/parts.path.strip('/')
   if parts.path.endswith('/'):target=target/'index.html'
   check(target.is_file(),'internal route/asset exists '+value)
  graph=json.loads(doc.xpath('//script[@type="application/ld+json"]/text()')[0])['@graph']
  check(any(x['@type']=='BreadcrumbList' for x in graph),'breadcrumb schema')
  if slug:
   check(len(doc.xpath('//*[@id="customer"]//li'))==3,'customer steps')
   check(len(doc.xpath('//*[@id="merchant"]//li'))==3,'merchant steps')
   check(len(doc.xpath('//*[@id="challenges"]//article'))==4,'four industry pains')
   faq=next(x for x in graph if x['@type']=='FAQPage');visible=doc.xpath('//*[@id="faq"]')[0].text_content()
   for q in faq['mainEntity']:
    check(q['name'] in visible and q['acceptedAnswer']['text'] in visible,'FAQ matches visible copy')
   check(len(visible)>160,'substantial specific FAQ')
  else:
   check(len(doc.xpath('//*[@id="who"]//details'))==12,'preserved twelve industry groups')
   check(len(doc.xpath('//*[@id="who"]//li'))==122,'preserved 122 service examples')
  check('/Users/' not in raw and '127.0.0.1' not in raw,'no local references')
check(len(titles)==len(set(titles))==len(UI)*(len(GUIDES)+1),'unique titles')
check(len(descriptions)==len(set(descriptions))==len(UI)*(len(GUIDES)+1),'unique descriptions')
print(f'{checks} checks passed across {len(UI)*len(GUIDES)} guides, {len(UI)} hubs and homepage links')
