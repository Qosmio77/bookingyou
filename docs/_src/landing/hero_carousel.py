"""Shared hero photography and accessible controls for all eight homepages."""
import json
from lxml import etree

# Salon is the existing approved image; five new scenes use the same warm light.
SOURCES=['preview-assets/hero-salon-v6.webp']+[
 f'assets/hero-industries/{name}-v1.webp'
 for name in ['beauty','nails','fitness','tutoring','pet-grooming']]
COPY={
 'zh':(['美髮','美容護理','美甲','私人教練','補習教學','寵物美容'],'行業圖片','上一張','下一張','暫停輪播','開始輪播','AI 生成行業情境圖片'),
 'en':(['Hair salon','Beauty care','Nail studio','Personal training','Tutoring','Pet grooming'],'Industry photos','Previous photo','Next photo','Pause slideshow','Play slideshow','AI-generated industry scene'),
 'zh-CN':(['美发','美容护理','美甲','私人教练','补习教学','宠物美容'],'行业图片','上一张','下一张','暂停轮播','开始轮播','AI 生成行业场景图片'),
 'ja':(['美容室','エステ','ネイル','パーソナルトレーニング','個別指導','ペットサロン'],'業種別の写真','前の写真','次の写真','スライドショーを一時停止','スライドショーを再生','AI生成の業種イメージ'),
 'ko':(['헤어숍','피부 관리','네일숍','퍼스널 트레이닝','개인 지도','반려동물 미용'],'업종별 사진','이전 사진','다음 사진','슬라이드 쇼 일시 정지','슬라이드 쇼 재생','AI로 생성한 업종 이미지'),
 'ms':(['Salun rambut','Rawatan kecantikan','Studio kuku','Latihan peribadi','Tuisyen','Dandanan haiwan'],'Foto industri','Foto sebelumnya','Foto seterusnya','Jeda tayangan slaid','Mainkan tayangan slaid','Imej industri dijana AI'),
 'th':(['ร้านทำผม','ดูแลความงาม','ร้านทำเล็บ','เทรนเนอร์ส่วนตัว','กวดวิชา','อาบน้ำตัดขนสัตว์'],'ภาพแต่ละธุรกิจ','ภาพก่อนหน้า','ภาพถัดไป','หยุดสไลด์ชั่วคราว','เล่นสไลด์','ภาพจำลองธุรกิจที่สร้างด้วย AI'),
 'vi':(['Tiệm tóc','Chăm sóc sắc đẹp','Tiệm nail','Huấn luyện cá nhân','Gia sư','Chăm sóc thú cưng'],'Ảnh ngành dịch vụ','Ảnh trước','Ảnh tiếp theo','Tạm dừng trình chiếu','Phát trình chiếu','Hình ảnh ngành dịch vụ do AI tạo'),
}

def configure(doc,code):
 labels,group,previous,nxt,pause,play,disclosure=COPY[code]
 orbit=doc.xpath('//*[contains(concat(" ",@class," ")," photo-orbit ")]')[0]
 orbit.set('id','hero-industry-photos')
 slides=[dict(src=src,label=label,alt=f'{label} — {disclosure}') for src,label in zip(SOURCES,labels)]
 orbit.set('data-slides',json.dumps(slides,ensure_ascii=False))
 first=orbit.find('img');first.set('alt',slides[0]['alt']);first.set('class','hero-industry-photo is-active')
 # Rebuild controls when localizing a copy of the Chinese homepage.
 for old in doc.xpath('//*[@class="hero-carousel-controls"]'):old.getparent().remove(old)
 parent=doc.xpath('//*[contains(concat(" ",@class," ")," hero-copy ")]')[0]
 controls=etree.SubElement(parent,'div',{'class':'hero-carousel-controls','role':'group','aria-label':group,'hidden':'hidden'})
 caption=etree.SubElement(controls,'span',{'class':'hero-industry-label','aria-live':'off'});caption.text=labels[0]
 for action,symbol,label in [('previous','‹',previous),('toggle','Ⅱ',pause),('next','›',nxt)]:
  button=etree.SubElement(controls,'button',{'type':'button','data-carousel':action,'aria-controls':'hero-industry-photos','aria-label':label,'title':label})
  if action=='toggle':button.set('data-pause',pause);button.set('data-play',play)
  icon=etree.SubElement(button,'span',{'aria-hidden':'true'});icon.text=symbol
