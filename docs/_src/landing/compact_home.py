"""Condense the homepage without losing guides, screenshots or promotional assets."""
from lxml import etree,html
import copy

# These additions are shared by static HTML and the six compiled locale bundles.
TEXT={
 'zh':['預約管理的 6 個核心功能','宣傳素材及社交內容','宣傳素材','FB／IG 帖文','社交平台','按需要查看預約規則','先處理日常預約，再按需要深入了解。'],
 'ja':['予約管理の6つの基本機能','販促素材とSNSコンテンツ','販促素材','SNS投稿','SNS','予約ルールを詳しく見る','毎日の予約に必要な機能から、詳しい使い方まで。'],
 'en':['6 core booking features','Promotional materials & social content','Promotional materials','FB / IG posts','Social platforms','Explore booking rules','Start with everyday bookings, then explore the details you need.'],
 'zh-CN':['预约管理的 6 个核心功能','宣传素材及社交内容','宣传素材','FB／IG 帖文','社交平台','按需查看预约规则','先处理日常预约，再按需深入了解。'],
 'ko':['예약 관리의 6가지 핵심 기능','홍보 자료와 SNS 콘텐츠','홍보 자료','SNS 게시물','SNS','예약 규칙 자세히 보기','일상적인 예약 관리부터 필요한 세부 기능까지 살펴보세요.'],
 'ms':['6 fungsi utama tempahan','Bahan promosi & kandungan sosial','Bahan promosi','Siaran FB / IG','Platform sosial','Lihat peraturan tempahan','Mulakan dengan tempahan harian, kemudian lihat butiran yang diperlukan.'],
 'th':['6 ฟีเจอร์หลักในการจัดการจอง','สื่อประชาสัมพันธ์และเนื้อหาโซเชียล','สื่อประชาสัมพันธ์','โพสต์ FB / IG','โซเชียลมีเดีย','ดูรายละเอียดกฎการจอง','เริ่มจากการจัดการจองประจำวัน แล้วดูรายละเอียดที่ต้องการเพิ่มเติม'],
 'vi':['6 tính năng đặt lịch cốt lõi','Tài liệu quảng bá & nội dung mạng xã hội','Tài liệu quảng bá','Bài đăng FB / IG','Mạng xã hội','Xem quy tắc đặt lịch','Bắt đầu với lịch hẹn hằng ngày, rồi tìm hiểu thêm khi cần.'],
}

def node(parent,tag,text=None,**attrs):
 el=etree.SubElement(parent,tag,{k.replace('_','-'):v for k,v in attrs.items()})
 el.text=text
 return el

def discard(el):
 if el.getparent() is not None:el.getparent().remove(el)

def alias(parent,key):return node(parent,'span',id=key,**{'class':'section-alias','aria-hidden':'true'})

def compact(doc,lang,assets):
 words=TEXT[lang];main=doc.get_element_by_id('top')
 original={el.get('id'):el for el in main if el.get('id')}
 hero=main.xpath('./section[@class="hero"]')[0]
 alias(hero,'about')
 discard(original['about'])
 for el in main.xpath('./div[contains(@class,"news-area")]'):discard(el)
 # Detailed workflows already live on five industry pages; the complete catalogue
 # is rendered on the hub by industry_guides.build, in all eight languages.
 discard(original['industry-scenarios']);discard(original['who'])

 old_features=original['features'];pain=original['pain-solutions']
 cards=pain.xpath('.//article[contains(@class,"ps-card")]')
 features=etree.Element('section',id='features',attrib={'class':'compact-features'})
 wrap=node(features,'div',**{'class':'wrap'})
 alias(wrap,'pain-solutions');alias(wrap,'webbook')
 node(wrap,'h2',words[0]);node(wrap,'p',words[6],**{'class':'section-copy'})
 grid=node(wrap,'div',**{'class':'core-grid'})
 previews=old_features.xpath('.//div[contains(@class,"phone-screen")]/img')
 for number,source_index in enumerate([0,1,4,6,7,9],1):
  source=cards[source_index]
  card=node(grid,'article',**{'class':'core-card'})
  node(card,'span',f'0{number}',**{'class':'core-number'})
  art=node(card,'div',**{'class':'core-art'})
  image=copy.deepcopy(source.xpath('.//figure/img')[0]);art.append(image)
  image.set('alt','');image.set('aria-hidden','true')
  if source_index in [0,1,6]:
   shot=copy.deepcopy(previews[{0:0,1:1,6:2}[source_index]])
   art.replace(image,shot);shot.attrib.pop('aria-hidden',None)
  problem=source.xpath('.//*[contains(@class,"ps-problem")]/h3')[0]
  node(card,'p',problem.text_content(),**{'class':'core-problem'})
  answer=source.xpath('.//*[contains(@class,"ps-answer")]')[0]
  card.append(copy.deepcopy(answer.find('h3')));card.append(copy.deepcopy(answer.find('p')))
  if source_index in [0,1,6]:
   key={0:'slots',1:'dashboard',6:'hours'}[source_index]
   shot.attrib.pop('data-local-asset',None)
   shot.set('data-asset',key);shot.set('src',assets[key])
   shot.set('alt',answer.find('h3').text_content())
  if source_index==0:
   # Qualification remains explicit on the main booking feature.
   card.append(copy.deepcopy(cards[2].xpath('.//*[contains(@class,"ps-answer")]/p')[0]))
  if source_index==1:
   details=node(card,'details',**{'class':'core-details'})
   extra=cards[3].xpath('.//*[contains(@class,"ps-answer")]')[0]
   node(details,'summary',extra.find('h3').text_content());details.append(copy.deepcopy(extra.find('p')))
  if source_index==6:
   details=node(card,'details',id='diff',**{'class':'core-details restored-diff'})
   node(details,'summary',words[5])
   extra=cards[5].xpath('.//*[contains(@class,"ps-answer")]')[0]
   node(details,'h3',extra.find('h3').text_content());details.append(copy.deepcopy(extra.find('p')))
   example=original['diff'].xpath('.//p[@class="lead"]')[1]
   details.append(copy.deepcopy(example))
 for old in [old_features,pain,original['diff']]:discard(old)
 main.append(features)
 # Remove repeated "tap to enlarge" tip; the gallery already explains it.
 for tip in original['app-screens'].xpath('.//*[contains(@class,"yu-tip")]'):discard(tip)

 # One pricing block with a small future-plan note, not an unavailable product card.
 plans=original['plans'];planwrap=plans.xpath('.//*[@class="wrap"]')[0]
 stats=original['pricing'];stats.tag='div';stats.set('class','compact-facts')
 planwrap.insert(2,stats)
 pro=plans.xpath('.//*[contains(@class,"plan-pro")]')[0]
 pro_note=pro.xpath('.//li')[1].text_content();discard(pro)
 node(planwrap,'p',pro_note,**{'class':'pro-status'})

 # One FAQ, with the duplicated installation question removed.
 faq=original['faq'];questions=faq.xpath('.//details');target=questions[0].getparent()
 extras=original['more-faq'].xpath('.//details')
 for item in extras[1:]:target.append(item)
 alias(target,'more-faq');discard(original['more-faq'])

 # Put setup steps and download badges together; retain the multi-device scene
 # in an optional disclosure instead of another tall standalone section.
 start=original['start'];download=original['download'];download.tag='div'
 devices=download.xpath('.//*[@class="device-showcase"]')[0]
 device_title=devices.xpath('.//h3')[0].text_content()
 disclosure=etree.Element('details',attrib={'class':'device-disclosure wrap'})
 node(disclosure,'summary',device_title)
 devices.getparent().replace(devices,disclosure);disclosure.append(devices)
 start.append(download)

 # All promotional posters, 140 posts and official social cards stay accessible.
 posts=original['posts'];postwrap=posts.xpath('./div[@class="wrap"]')[0]
 heading=posts.xpath('.//h2')[0]
 heading.attrib.pop('data-i18n',None)
 for child in list(heading):heading.remove(child)
 heading.text=words[1]
 description=posts.xpath('.//*[@data-i18n="postsDesc"]')[0]
 for actions in posts.xpath('.//*[@class="social-actions"]'):discard(actions)
 tabs=node(postwrap,'div',role='tablist',aria_label=words[1],**{'class':'content-tabs'})
 panels=[]
 postpanel=etree.Element('div',id='content-posts',attrib={'class':'content-panel','role':'tabpanel','aria-labelledby':'content-tab-posts'})
 for child in list(postwrap):
  if child.tag=='div' and child.get('class')=='section-heading':continue
  if child is tabs:continue
  postpanel.append(child)
 discard(description);postpanel.insert(0,description)
 postwrap.append(postpanel);panels.append(('posts',words[3],postpanel))
 for key,label in [('brand',words[2]),('social',words[4])]:
  panel=original[key];panel.tag='div';panel.set('class',panel.get('class')+' content-panel')
  panel.set('role','tabpanel');panel.set('aria-labelledby','content-tab-'+key)
  # Repeated headings become short panel captions, preserving translated text.
  for title in panel.xpath('.//h2'):title.tag='h3'
  postwrap.append(panel);panels.append((key,label,panel))
 for key,label,panel in panels:
  button=node(tabs,'button',label,type='button',id='content-tab-'+key,role='tab',aria_controls=panel.get('id'),aria_selected='true' if key=='posts' else 'false',tabindex='0' if key=='posts' else '-1',**{'data-content-tab':key})
  panel.set('data-content-panel',key)
 # A compact set of social links is always available below either content tab.
 social=original['social'];linkrow=node(postwrap,'nav',aria_label=words[4],**{'class':'compact-social-links'})
 for link in social.xpath('.//a[contains(@class,"soc-card")]'):
  name=link.xpath('.//*[contains(@class,"soc-name")]')[0].text_content()
  node(linkrow,'a',name+' ↗',href=link.get('href'),target='_blank',rel='noopener noreferrer')
 discard(original['mascot'])

 # Localized legacy bookmarks lead to their new location, not a missing section.
 for key in ['who','industry-scenarios']:alias(original['industries-overview'],key)
 order=[hero,original['industries-overview'],features,original['app-screens'],original['web-booking'],plans,faq,posts,start]
 for section in order:main.append(section)
 if list(main)!=order:raise ValueError('Unexpected homepage block after compaction')
 # Remove the scenario renderer now that the industry content lives on guides.
 for script in doc.xpath('//body/script[not(@type)]'):
  if 'const scenarios = {' in (script.text or ''):discard(script)

def catalogue(lang,template,mapping=None):
 """Preserve all 122 service examples on the industry hub, as static HTML."""
 doc=html.document_fromstring(template)
 section=doc.get_element_by_id('who')
 source_lang='ja' if lang=='ja' else 'zh'
 for child in list(section):
  if child.get('data-lang')!=source_lang:discard(child)
 section.set('class','section industry-catalogue')
 # Describe possible use cases, not unverified existing customer adoption.
 source=doc.xpath('//*[@data-i18n="industryScope"]')[0]
 intro=section.xpath('.//p[@class="lead"]')[0]
 intro.text=source.text_content() if source_lang=='zh' else '掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。'
 for el in section.iter():
  if mapping:
   from landing.localization import translated
   el.text=translated(el.text,mapping);el.tail=translated(el.tail,mapping)
   if el.get('alt'):el.set('alt',translated(el.get('alt'),mapping))
  if el.get('src') and not el.get('src').startswith('/'):el.set('src','/'+el.get('src'))
 return html.tostring(section,encoding='unicode')
