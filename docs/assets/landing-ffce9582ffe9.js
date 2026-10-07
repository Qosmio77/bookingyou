
const assets={"logo": "assets/logo.png", "photo": "preview-assets/hero-salon-v6.webp", "mascot": "assets/yu-kun-wave.png", "slots": "assets/deck-phone-slots.png", "dashboard": "assets/deck-dashboard.png", "hours": "assets/deck-hours.png", "customer": "assets/illustrations/33-customer-using-phone.webp", "owner": "assets/illustrations/34-salon-owner-welcoming.webp", "web1zh": "assets/webbook/th-1.jpg", "web2zh": "assets/webbook/th-2.jpg", "web1ja": "assets/webbook/ja-1.jpg", "web2ja": "assets/webbook/ja-2.jpg", "applezh": "assets/badges/apple-th-th.svg", "googlezh": "assets/badges/google-th.png", "appleja": "assets/badges/apple-ja-jp.svg", "googleja": "assets/badges/google-ja.png"};
const copy={zh:{},ja:{nav1:'BookingYouについて',nav2:"ฟีเจอร์",nav3:"ราคา",nav4:'よくあるご質問',start:'無料ではじめる',eyebrow:'ひとりで営むお店のための予約管理',hero1:'予約を、もっとかんたんに。',hero2:'お客様との時間を、もっと大切に。',heroDesc:'お客様は自分で予約、お店は一日を管理。電話・来店・ネット予約を、ひとつのカレンダーに。',promise1:'基本機能は無料',promise2:'予約手数料なし',promise3:'iOS・Android・Web',seeHow:'使い方を見る',heroNote:'お客様はアプリなしで、ブラウザから予約できます。',phoneLabel:'空いている時間を選んで、お店に予約。',float:'予約はお客様に。目の前のサービスに集中。',trust:'予約でつながる、小さなお店の毎日に。',ind1:'美容室・理容室',ind2:'ネイルサロン',ind3:'パーソナルジム',ind4:'教室・レッスン',ind5:'ペットサロン',newsBadge:'ウェブ予約',news:'リンクひとつで、お客様はブラウザから予約できます。',about1:'小さなお店の予約を、',about2:'ひとつに、わかりやすく。',aboutDesc:'施術中の電話、あちこちに届くメッセージ。BookingYouなら予約・日程変更・リマインダーをまとめて管理。目の前のお客様に、もっと向き合える毎日へ。',point1:'いつでも予約を受け付けたい',f1a:'お店のリンクが、',f1b:'あなたの予約受付になります。',f1desc:'予約リンクやQRコードを共有するだけ。お客様はアプリなしで、サービス・日付・時間を選べます。ウェブ予約は、お店の確認後に確定します。',f1link:'お店の予約受付をはじめる',point2:'すべての予約を、ひと目で把握したい',f2a:'電話も、来店も、ネットも。',f2b:'ひとつのカレンダーで管理。',f2desc:'電話や来店で受けた予約も、お店から登録。ネット予約と一緒に管理できます。日時変更も、予約を取り消さずにそのまま変更できます。',f2link:'一日の予約をまとめて管理',point3:'お店に合った予約ルールにしたい',f3a:'予約を受ける時間も、休む時間も。',f3b:'お店のペースで決められます。',f3desc:'営業時間、定休日、予約を受けない時間を設定。アプリ内予約は、時間帯ごとに即時確定かお店の承認制かを選べます。',f3link:'使い方をもっと知る',factUnit1:"ค่าธรรมเนียม",fact1:'お支払いはお店に直接',free:"ฟรี",fact2:'予約管理の基本機能',factUnit3:"ภาษา",fact3:'お店に合った表示言語',faqTitle:'よくあるご質問',q1:'基本機能は本当に無料ですか？',a1:'予約ページ、カレンダー、代理予約、日時変更、リマインダー、承認ルールなどの基本機能は無料です。Proプランは計画中で、まだ提供しておらず、料金も未定です。',q2:'お客様もアプリを入れる必要がありますか？',a2:'必要ありません。お店のリンクやQRコードからブラウザで予約できます。お店の設定によっては、アプリ内予約のみを受け付ける場合もあります。',q3:'ウェブ予約は自動で確定しますか？',a3:'ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。',cta1:'予約に、ゆとりを。',cta2:'お店の毎日に、笑顔を。',ctaDesc:'今日から、小さなお店の時間をもっと大切に。',downloadNote:'iOS・Androidで配信中 · 基本機能無料',privacy:'プライバシーポリシー',terms:"ข้อกำหนดการใช้งาน",preview:'デザインプレビュー V10 · 未公開'}};
const images={zh:{web1:'web1zh',web2:'web2zh',apple:'applezh',google:'googlezh'},ja:{web1:'web1ja',web2:'web2ja',apple:'appleja',google:'googleja'}};
Object.assign(copy.zh,{"nav1": "เกี่ยวกับ BookingYou", "nav2": "ฟีเจอร์", "guideScreens": "หน้าจอแอป", "guidePosts": "โพสต์ FB / IG", "nav3": "ราคา", "nav4": "คำถามที่พบบ่อย", "start": "เริ่มใช้ฟรี", "eyebrow": "การจัดการนัดหมายสำหรับร้านอิสระ", "hero1": "จองให้ง่ายขึ้น", "hero2": "เก็บเวลาไว้ดูแลลูกค้า", "heroDesc": "ลูกค้าเลือกเวลาเอง เจ้าของร้านจัดการทั้งวันได้ง่าย รวมการจองจากโทรศัพท์ ข้อความ และหน้าร้านไว้ในปฏิทินเดียว", "promise1": "ฟีเจอร์พื้นฐานฟรี", "promise2": "ไม่มีค่าคอมมิชชัน", "promise3": "iOS・Android・Web", "seeHow": "ดูวิธีใช้งาน", "heroNote": "ลูกค้าส่งคำขอจองผ่านเว็บได้โดยไม่ต้องดาวน์โหลดแอป", "float": "ลูกค้าจองเอง คุณใส่ใจกับบริการได้เต็มที่", "trust": "สำหรับทุกร้านเล็กที่ใส่ใจและให้บริการตามนัด", "ind1": "ความงาม · ทำผม", "ind2": "สตูดิโอทำเล็บ", "ind3": "เทรนเนอร์ส่วนตัว", "ind4": "กวดวิชา · การสอน", "ind5": "ตัดแต่งขนสัตว์", "industryScope": "ข้างต้นเป็นธุรกิจที่นิยมรับจอง BookingYou ยังเหมาะกับธุรกิจอื่นที่ต้องจัดนัดหมาย ช่วยให้ร้านขนาดเล็กและผู้ให้บริการมืออาชีพบริหารการจองได้อย่างยืดหยุ่น", "newsBadge": "จองผ่านเว็บ", "news": "ลิงก์เดียว ลูกค้าจองผ่านเบราว์เซอร์ได้", "galleryTitle": "ดูทุกหน้าจอ ตั้งแต่ค้นหาร้านจนถึงจัดการนัดหมาย", "galleryDesc": "ดูภาพสาธิตแอป BookingYou: ค้นหาบริการ เลือกเวลา และแชร์ลิงก์จอง แตะภาพใดก็ได้เพื่อขยายดูรายละเอียด", "webGuide": "วิธีจองสำหรับลูกค้าโดยไม่ใช้แอป", "customerTab": "การจองของลูกค้า · แชร์ลิงก์", "merchantTab": "การจัดการประจำวันของร้าน", "galleryNote": "ภาพสาธิตแอป ชื่อร้าน วันที่ และราคาเป็นเพียงตัวอย่าง หน้าจอจริงขึ้นอยู่กับแอปที่ใช้งาน", "yuLabel": "คำแนะนำจาก Yu-kun", "yuScreenTitle": "อยากดูชัดขึ้นไหม แตะที่ภาพได้เลย", "yuScreenBody": "ขยายภาพหน้าจอได้ และสลับไปที่ “การจัดการประจำวันของร้าน” เพื่อดูช่วงเวลา เวลาทำการ และการตั้งค่าภาษา", "about1": "ทุกนัดหมายของร้าน", "about2": "มีตารางที่ชัดเจน", "aboutDesc": "BookingYou คือแอปจัดการนัดหมายสำหรับร้านขนาดเล็กที่รับจอง เหมาะกับร้านเสริมสวย ทำผม ทำเล็บ เทรนเนอร์ การสอน และตัดแต่งขนสัตว์ ร้านจัดการปฏิทิน จองแทนลูกค้า เลื่อนนัด และแจ้งเตือนได้ ลูกค้าส่งคำขอผ่านลิงก์หรือ QR Code และการจองผ่านเว็บจะสมบูรณ์เมื่อร้านยืนยัน ฟีเจอร์พื้นฐานฟรี ไม่มีค่าคอมมิชชันการจอง", "point1": "ให้ลูกค้าส่งคำขอจองได้ทุกเมื่อ", "f1a": "ลิงก์เฉพาะของร้าน", "f1b": "คือเคาน์เตอร์รับจองออนไลน์ของคุณ", "f1desc": "แชร์ลิงก์ร้านหรือ QR Code ให้ลูกค้าเลือกบริการ วันและเวลาผ่านเบราว์เซอร์ โดยไม่ต้องดาวน์โหลดแอป การจองผ่านเว็บจะสมบูรณ์หลังคุณยืนยัน", "f1link": "เริ่มสร้างช่องทางรับจองของคุณ", "point2": "เห็นทุกนัดหมายได้ทันที", "f2a": "โทรศัพท์ หน้าร้าน และออนไลน์", "f2b": "จัดทุกนัดไว้ในปฏิทินเดียว", "f2desc": "เพิ่มรายการแทนลูกค้าทางโทรศัพท์และหน้าร้าน แล้วจัดการร่วมกับการจองออนไลน์ หากต้องเปลี่ยนเวลา ให้เลื่อนนัดได้โดยไม่ต้องยกเลิกแล้วสร้างใหม่", "f2link": "รวมการจองประจำวันไว้ที่เดียว", "point3": "คุณกำหนดจังหวะการทำงานของร้าน", "f3a": "เวลาให้บริการและเวลาพัก", "f3b": "ให้สอดคล้องกับจังหวะการทำงานของคุณ", "f3desc": "ตั้งเวลาทำการ วันหยุด และช่วงที่กันไว้ การจองในแอปเลือกยืนยันทันทีหรือรอร้านอนุมัติได้ตามช่วงเวลา ให้เหมาะกับตารางจริงในแต่ละวัน", "f3link": "ดูวิธีใช้งานเพิ่มเติม", "yuBookingTitle": "ลูกค้าส่งคำขอแล้ว ยังต้องรอคุณยืนยัน", "yuBookingBody": "การจองผ่านเว็บทุกรายการจะสมบูรณ์เมื่อร้านยืนยัน การจองในแอปตั้งให้ยืนยันทันทีหรือรอร้านอนุมัติได้ตามช่วงเวลา", "scenarioHeading": "ร้านของคุณ จังหวะการจองของคุณ", "scenarioIntro": "เลือกธุรกิจเพื่อดูวิธีใช้ BookingYou ตั้งแต่ลูกค้าจองจนถึงการจัดตารางงานประจำวัน", "allIndustries": "ดูธุรกิจทั้งหมด 12 กลุ่ม", "scenarioBeauty": "การดูแลความงาม", "scenarioNails": "สตูดิโอทำเล็บ", "scenarioFitness": "เทรนเนอร์ส่วนตัว", "scenarioTeaching": "คลาสเรียน", "scenarioExample": "ตัวอย่างการจัดนัดหมาย", "scenarioPending": "ส่งคำขอผ่านเว็บแล้ว รอร้านยืนยัน", "scenarioGuide": "ดูวิธีที่ลูกค้าจอง", "scenarioNote": "ตัวอย่างสถานการณ์การใช้งาน บริการ เวลา และระยะเวลาใช้เพื่ออธิบายเท่านั้น การจองจริงขึ้นอยู่กับการตั้งค่าของแต่ละร้าน", "yuWorkTitle": "บันทึกการจองทางโทรศัพท์และหน้าร้านไว้ด้วยกันได้", "yuWorkBody": "หลังรับจองทางโทรศัพท์ ข้อความส่วนตัว หรือหน้าร้าน ร้านเพิ่มรายการเองและจัดการร่วมกับการจองออนไลน์ในปฏิทินเดียวได้", "factUnit1": "ค่าคอมมิชชัน", "fact1": "ลูกค้าจ่ายให้ร้านโดยตรง", "free": "ฟรี", "fact2": "ฟีเจอร์พื้นฐานจัดการนัดหมาย", "factUnit3": "ภาษา", "fact3": "ภาษาของอินเทอร์เฟซ", "postsTitle": "แบ่งปันเรื่องราวร้านและวิธีจองไปด้วยกัน", "postsDesc": "รวมวิธีจอง ฟีเจอร์ และเรื่องราวร้านจากหลายพื้นที่เป็นภาพประชาสัมพันธ์โซเชียล 140 ภาพ กรองตามภาษาและแตะเพื่อดูภาพเต็มได้", "filterLabel": "ภาษาโพสต์", "allPosts": "ทุกภาษา", "loadMore": "แสดงโพสต์เพิ่มเติม", "postsNote": "ที่นี่แสดงภาพโพสต์เดิม หากต้องการอ่านโพสต์ ความคิดเห็น และข่าวล่าสุด โปรดไปที่บัญชีโซเชียลทางการ", "faqTitle": "คำถามที่คุณอาจมี", "q1": "ฟีเจอร์พื้นฐานฟรีจริงไหม", "a1": "หน้าจอง ปฏิทิน การจองแทนลูกค้า เลื่อนนัด แจ้งเตือน และกฎอนุมัติเป็นฟีเจอร์พื้นฐานที่ใช้ฟรี รุ่น Pro ยังอยู่ระหว่างวางแผน ยังไม่เปิดตัวและยังไม่กำหนดราคา", "q2": "ลูกค้าจำเป็นต้องดาวน์โหลดแอปไหม", "a2": "ไม่จำเป็น ลูกค้าใช้ลิงก์หรือ QR Code ที่คุณแชร์เพื่อส่งคำขอในเบราว์เซอร์ได้ บางร้านอาจเลือกรับจองในแอปเท่านั้น", "q3": "การจองผ่านเว็บยืนยันอัตโนมัติไหม", "a3": "การจองผ่านเว็บทุกรายการต้องรอร้านยืนยัน ส่วนการจองในแอปเลือกยืนยันทันทีหรือรออนุมัติได้ตามช่วงเวลา", "cta1": "จัดนัดหมายเป็นระบบ", "cta2": "บริหารร้านได้สบายขึ้น", "ctaDesc": "เริ่มวันนี้ เพื่อให้ร้านของคุณมีเวลามากขึ้น", "downloadNote": "มีบน iOS และ Android · ฟีเจอร์พื้นฐานฟรี", "devicesTitle": "มือถือ iPad และคอมพิวเตอร์", "devicesDesc": "ดูแอปบนมือถือและ iPad เปิดเว็บไซต์และวิธีจองบนคอมพิวเตอร์", "devicesSwitch": "หน้าจอคอมพิวเตอร์", "devicesBooking": "วิธีจอง", "devicesPosts": "โพสต์ประชาสัมพันธ์", "devicesSocial": "โซเชียลมีเดีย", "devicesShops": "แนะนำร้าน", "privacy": "นโยบายความเป็นส่วนตัว", "terms": "ข้อกำหนดการให้บริการ", "preview": "設計預覽 V12 · 未發佈", "guideWeb": "วิธีจอง", "guideFeatures": "ฟีเจอร์ทั้งหมด", "guideWho": "ธุรกิจที่เหมาะสม", "closeImage": "ปิดภาพ", "previousImage": "ภาพก่อนหน้า", "nextImage": "ภาพถัดไป", "zoom": "ขยายดู", "post": "โพสต์โซเชียล", "shown": "แสดงแล้ว", "of": "／", "unit": "ภาพ", "chapterReading": "ความคืบหน้าการอ่าน", "chapterDownload": "ดาวน์โหลดแอป", "chapterLabel": "ส่วนต่าง ๆ ของหน้า", "scenarioTabLabel": "เลือกสถานการณ์ธุรกิจ", "scenarioChanged": "เปลี่ยนเป็น:", "progressText": "อ่านแล้ว", "seoKeyword": "ระบบจัดการนัดหมายสำหรับร้านขนาดเล็ก"});
document.querySelectorAll('[data-asset]').forEach(el=>el.src=assets[el.dataset.asset]);
function setLanguage(lang){if(!copy[lang])lang='zh';document.documentElement.lang=lang==='ja'?'ja':'zh-Hant';document.getElementById('language').value=lang;document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=copy[lang][el.dataset.i18n]||copy.zh[el.dataset.i18n]);document.querySelectorAll('[data-local-asset]').forEach(el=>el.src=assets[images[lang][el.dataset.localAsset]]);document.querySelector('[data-page]').href='https://bookingyou.app/'+(lang==='ja'?'ja/':'')+'about/';document.querySelector('.menu-toggle').setAttribute('aria-label',lang==='ja'?'メニュー':"เปิดเมนู");document.querySelector('.nav').setAttribute('aria-label',lang==='ja'?'メインメニュー':"เมนูหลัก");document.title=lang==='ja'?'BookingYou · ホームページデザインプレビュー':"BookingYou · ตัวอย่างการออกแบบหน้าแรก";}
setLanguage(document.documentElement.lang==='ja'?'ja':'zh');
document.getElementById('language').addEventListener('change',e=>setLanguage(e.target.value));
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menu.addEventListener('click',()=>{let open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);menu.textContent=open?'×':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.textContent='☰';}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.textContent='☰';}});

;
const postManifest = [{"id": "001", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "002", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "003", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "004", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "005", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "006", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "007", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "008", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "009", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "010", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "011", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "012", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "013", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "014", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "015", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "016", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "017", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "018", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "019", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "020", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "021", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "022", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "023", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "024", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "025", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "026", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "027", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "028", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "029", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "030", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "031", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "032", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "033", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "034", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "035", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "036", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "037", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "038", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "039", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "040", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "041", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "042", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "043", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "044", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "045", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "046", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "047", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "048", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "049", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "050", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "051", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "052", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "053", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "054", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "055", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "056", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "057", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "058", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "059", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "060", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "061", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "062", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "063", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "064", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "065", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "066", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "067", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "068", "w": 941, "h": 1672, "lang": "ja"}, {"id": "069", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "070", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "071", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "072", "w": 941, "h": 1672, "lang": "ja"}, {"id": "073", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "074", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "075", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "076", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "077", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "078", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "079", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "080", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "081", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "082", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "083", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "084", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "085", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "086", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "087", "w": 1080, "h": 1919, "lang": "ja"}, {"id": "088", "w": 1080, "h": 1919, "lang": "ja"}, {"id": "089", "w": 1080, "h": 1350, "lang": "th"}, {"id": "090", "w": 1080, "h": 1350, "lang": "th"}, {"id": "091", "w": 1080, "h": 1350, "lang": "th"}, {"id": "092", "w": 1080, "h": 1350, "lang": "th"}, {"id": "093", "w": 1080, "h": 1350, "lang": "th"}, {"id": "094", "w": 1080, "h": 1350, "lang": "th"}, {"id": "095", "w": 1080, "h": 1350, "lang": "th"}, {"id": "096", "w": 1080, "h": 1350, "lang": "th"}, {"id": "097", "w": 1080, "h": 1350, "lang": "th"}, {"id": "098", "w": 1080, "h": 1350, "lang": "th"}, {"id": "099", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "100", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "101", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "102", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "103", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "104", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "105", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "106", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "107", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "108", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "109", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "110", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "111", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "112", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "113", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "114", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "115", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "116", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "117", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "118", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "119", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "120", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "121", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "122", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "123", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "124", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "125", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "126", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "127", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "128", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "129", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "130", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "131", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "132", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "133", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "134", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "135", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "136", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "137", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "138", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "139", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "140", "w": 848, "h": 1072, "lang": "ja"}];
const extraCopy = {
 zh:{industryScope:"ข้างต้นเป็นธุรกิจที่นิยมรับจอง BookingYou ยังเหมาะกับธุรกิจอื่นที่ต้องจัดนัดหมาย ช่วยให้ร้านขนาดเล็กและผู้ให้บริการมืออาชีพบริหารการจองได้อย่างยืดหยุ่น",galleryTitle:"ดูทุกหน้าจอ ตั้งแต่ค้นหาร้านจนถึงจัดการนัดหมาย",galleryDesc:"ดูภาพสาธิตแอป BookingYou: ค้นหาบริการ เลือกเวลา และแชร์ลิงก์จอง แตะภาพใดก็ได้เพื่อขยายดูรายละเอียด",webGuide:"วิธีจองสำหรับลูกค้าโดยไม่ใช้แอป",customerTab:"การจองของลูกค้า · แชร์ลิงก์",merchantTab:"การจัดการประจำวันของร้าน",galleryNote:"ภาพสาธิตแอป ชื่อร้าน วันที่ และราคาเป็นเพียงตัวอย่าง หน้าจอจริงขึ้นอยู่กับแอปที่ใช้งาน",postsTitle:"แบ่งปันเรื่องราวร้านและวิธีจองไปด้วยกัน",postsDesc:"รวมวิธีจอง ฟีเจอร์ และเรื่องราวร้านจากหลายพื้นที่เป็นภาพประชาสัมพันธ์โซเชียล 140 ภาพ กรองตามภาษาและแตะเพื่อดูภาพเต็มได้",filterLabel:"ภาษาโพสต์",allPosts:"ทุกภาษา",loadMore:"แสดงโพสต์เพิ่มเติม",postsNote:"ที่นี่แสดงภาพโพสต์เดิม หากต้องการอ่านโพสต์ ความคิดเห็น และข่าวล่าสุด โปรดไปที่บัญชีโซเชียลทางการ",guideScreens:"หน้าจอแอป",guideWeb:"วิธีจอง",guideFeatures:"ฟีเจอร์ทั้งหมด",guideWho:"ธุรกิจที่เหมาะสม",guidePosts:"โพสต์ FB / IG",closeImage:"ปิดภาพ",previousImage:"ภาพก่อนหน้า",nextImage:"ภาพถัดไป",zoom:"ขยายดู",post:"โพสต์โซเชียล",shown:"แสดงแล้ว",of:'／',unit:"ภาพ"},
 ja:{industryScope:'掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。',galleryTitle:'お店探しから予約管理まで、画面でわかりやすく。',galleryDesc:'サービス選び、空き時間の確認、予約リンクの共有。BookingYouのアプリ紹介画像を、タップして拡大できます。',webGuide:'アプリ不要の予約ガイド',customerTab:'お客様の予約・リンク共有',merchantTab:'お店の日常管理',galleryNote:'アプリ紹介用の画像です。店舗、日付、金額は表示例で、実際の画面はご利用中のアプリをご確認ください。',postsTitle:'小さなお店の日常も、予約のヒントも。SNSでお届け。',postsDesc:'予約ガイドからお店の日常まで。BookingYouのSNS画像140点をご紹介。言語で絞り込み、タップで拡大できます。',filterLabel:'投稿の言語',allPosts:'すべての言語',loadMore:'もっと見る',postsNote:'既存の投稿画像を掲載しています。投稿本文、コメント、最新情報は公式SNSアカウントをご覧ください。',guideScreens:'アプリ画面',guideWeb:'予約ガイド',guideFeatures:'すべての機能',guideWho:"ธุรกิจที่รองรับ",guidePosts:"โพสต์โซเชียล",closeImage:'画像を閉じる',previousImage:'前の画像',nextImage:'次の画像',zoom:'拡大する',post:"โพสต์โซเชียล",shown:"กำลังแสดง",of:'／',unit:"รายการ"}
};
for(const lang of ['zh','ja'])Object.assign(copy[lang],extraCopy[lang]);
const appTexts={
 zh:[["ค้นหาร้านที่ใช่","ค้นหาร้านตามพื้นที่และประเภทบริการ ดูภาพและข้อมูลก่อนเลือกจอง"],["บริการ ระยะเวลา และราคา","เปิดหน้าร้านเพื่อดูบริการ ระยะเวลา และราคาของแต่ละรายการ"],["เลือกวัน แล้วเลือกเวลา","ดูวันและเวลาว่าง แล้วยืนยันทันทีหรือรอเจ้าของร้านอนุมัติตามกฎของช่วงเวลานั้น"],["การ์ด QR เฉพาะร้าน","ลูกค้าสแกน QR Code เพื่อเปิดหน้าจองได้ เหมาะสำหรับวางในร้านและบนนามบัตร"],["แชร์ลิงก์จองในครั้งเดียว","วางลิงก์ใน WhatsApp, Instagram, Facebook หรือเว็บไซต์ เพื่อให้ลูกค้ากลับมาจองได้ง่าย"]],
 ja:[['自分に合うお店を探す','地域やサービスから探し、写真とサービス内容を見て予約へ進めます。'],['サービス・時間・料金','お店のページでサービス一覧、所要時間、料金をまとめて確認できます。'],['日付と空き時間を選ぶ','予約可能な日時を選択。時間帯の設定により即時確定、またはお店の承認後に確定します。'],['お店専用のQRカード','QRコードから予約ページへ。店内や名刺に載せて、予約の入口をつくれます。'],['予約リンクを共有','メッセージやInstagram、Facebook、ホームページにリンクを掲載できます。']]
};
const merchantTexts={
 zh:[["หน้าหลักจัดการร้าน","ดูสถานะร้านและทางเข้าการจัดการจากที่เดียว รวมบันทึกการจองทางโทรศัพท์ หน้าร้าน และออนไลน์ไว้ด้วยกัน"],["ช่วงเวลาจอง","ลูกค้าดูวันและเวลาที่จองได้ ร้านจัดการช่วงว่างตามการทำงานจริง"],["ตั้งเวลาทำการและการอนุมัติ","ตั้งเวลาเปิด วันหยุด และกฎยืนยัน การจองในแอปใช้กฎตามช่วงเวลา"],["อินเทอร์เฟซ 8 ภาษา","รองรับจีนตัวเต็ม อังกฤษ จีนตัวย่อ ญี่ปุ่น เกาหลี มลายู ไทย และเวียดนาม สลับได้ตามต้องการ"]],
 ja:[['店舗の管理画面','お店の状況と管理メニューを確認。電話・来店・ネット予約を一か所で管理します。'],['予約できる時間帯','日付と空き時間を確認。お店の営業時間に合わせて予約枠を管理できます。'],['営業時間と承認ルール','営業時間、休業日、確認方法を設定。アプリ予約には時間帯ごとのルールを適用します。'],['8言語の表示に対応','繁体字中国語、英語、簡体字中国語、日本語、韓国語、マレー語、タイ語、ベトナム語に切り替えられます。']]
};
let activeScreen='customer',postLimit=6,viewerItems=[],viewerIndex=0;
const langNow=()=>document.documentElement.lang==='ja'?'ja':'zh';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dialog=document.getElementById('image-viewer');
function renderScreens(){
 const lang=langNow(),container=document.getElementById('screen-gallery');
 const labels=activeScreen==='customer'?appTexts[lang]:merchantTexts[lang];
 const keys=['dashboard','slots','hours','language'];
 const items=labels.map(([title,description],i)=>({title,description,src:activeScreen==='customer'?`app-screens/${lang}/${String(i+1).padStart(2,'0')}.webp`:i===3?'assets/deck-language.png':assets[keys[i]]}));
 container.classList.toggle('merchant',activeScreen==='merchant');
 container.innerHTML=items.map((item,i)=>`<article class="screen-item"><button class="screen-open" aria-label="${esc(extraCopy[lang].zoom+'：'+item.title)}"><span class="screen-frame"><img src="${item.src}" alt="${esc(item.title)}" loading="lazy" width="1320" height="2868"></span><span class="screen-caption"><small>0${i+1} / ${activeScreen==='customer'?'BOOKING & SHARING':'MERCHANT'}</small><strong>${esc(item.title)}</strong></span></button><div class="screen-caption"><p>${esc(item.description)}</p></div></article>`).join('');
 container.querySelectorAll('.screen-open').forEach((button,i)=>button.addEventListener('click',()=>openViewer(items,i)));
 document.querySelectorAll('[data-screen-tab]').forEach(button=>{const selected=button.dataset.screenTab===activeScreen;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));});
}
document.querySelectorAll('[data-screen-tab]').forEach(button=>button.addEventListener('click',()=>{activeScreen=button.dataset.screenTab;renderScreens();}));
const postLanguage={ja:'日本語',ko:'한국어',th:'ไทย',vi:'Tiếng Việt'};
function filteredPosts(){const filter=document.getElementById('post-filter').value;return [...postManifest].reverse().filter(p=>filter==='all'||p.lang===filter);}
function renderPosts(){
 const all=filteredPosts(),visible=all.slice(0,postLimit),lang=langNow(),t=extraCopy[lang];
 const grid=document.getElementById('post-grid');
 grid.innerHTML=visible.map(p=>`<button class="post-card" data-post="${p.id}" aria-label="${esc(t.zoom+'：'+t.post+' '+p.id+' '+postLanguage[p.lang])}"><img src="posts/t/${p.id}.jpg" alt="BookingYou ${esc(postLanguage[p.lang])} ${esc(t.post)} ${p.id}" loading="lazy" width="${p.w}" height="${p.h}"><span>${esc(postLanguage[p.lang])}<span class="post-id">#${p.id} ↗</span></span></button>`).join('');
 const items=all.map(p=>({src:`posts/${p.id}.jpg`,title:`BookingYou · ${t.post} #${p.id} · ${postLanguage[p.lang]}`}));
 grid.querySelectorAll('.post-card').forEach((button,i)=>button.addEventListener('click',()=>openViewer(items,i)));
 document.getElementById('post-count').textContent=`${t.shown} ${visible.length} ${t.of} ${all.length} ${t.unit}`;
 document.getElementById('more-posts').hidden=visible.length===all.length;
}
document.getElementById('post-filter').addEventListener('change',()=>{postLimit=6;renderPosts();});
document.getElementById('more-posts').addEventListener('click',()=>{postLimit+=6;renderPosts();});
function updateViewer(){
 const item=viewerItems[viewerIndex],img=document.getElementById('viewer-img');img.src=item.src;img.alt=item.title;
 document.getElementById('viewer-caption').textContent=item.title;
 document.getElementById('viewer-position').textContent=`${viewerIndex+1} / ${viewerItems.length}`;
 document.getElementById('previous-image').disabled=viewerIndex===0;
 document.getElementById('next-image').disabled=viewerIndex===viewerItems.length-1;
}
function openViewer(items,index){viewerItems=items;viewerIndex=index;updateViewer();dialog.showModal();document.body.style.overflow='hidden';}
function moveViewer(delta){viewerIndex=Math.max(0,Math.min(viewerItems.length-1,viewerIndex+delta));updateViewer();}
document.getElementById('close-viewer').addEventListener('click',()=>dialog.close());
document.getElementById('previous-image').addEventListener('click',()=>moveViewer(-1));
document.getElementById('next-image').addEventListener('click',()=>moveViewer(1));
dialog.addEventListener('close',()=>{document.body.style.overflow='';});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();moveViewer(1);}if(e.key==='ArrowLeft'){e.preventDefault();moveViewer(-1);}});
document.querySelectorAll('.wb-shot img,.posters img,.restored-diff .phone img,.restored-mascot img').forEach(img=>{
 const button=document.createElement('button');button.className='zoom-trigger';button.dataset.zoomLabel=img.alt||img.parentElement.querySelector('.cap')?.textContent||'BookingYou';
 img.replaceWith(button);button.append(img);button.addEventListener('click',()=>openViewer([{src:img.currentSrc||img.src,title:button.dataset.zoomLabel}],0));
});
const baseSetLanguage=setLanguage;
setLanguage=function(lang){
 baseSetLanguage(lang);renderScreens();renderPosts();const t=extraCopy[langNow()];
 document.querySelectorAll('.zoom-trigger').forEach(b=>b.setAttribute('aria-label',t.zoom+'：'+b.dataset.zoomLabel));
 for(const [id,key] of [['close-viewer','closeImage'],['previous-image','previousImage'],['next-image','nextImage']])document.getElementById(id).setAttribute('aria-label',t[key]);
};
setLanguage(document.getElementById('language').value);

document.querySelectorAll('.restored-start [data-lang]').forEach(section=>{section.querySelectorAll('.card').forEach((card,i)=>{const img=document.createElement('img');img.src='assets/illustrations/'+['30-qr-booking-phone.webp','31-service-selection-phone.webp','32-confirmation-phone.webp'][i];img.alt='';img.loading='lazy';img.className='step-art';card.prepend(img);});});

;
(() => {
  const pair=document.querySelector('.hero-phone-pair');
  if(!pair)return;
  // Project the original screenshot plane onto the four display corners.
  // CSS does the perspective mapping; the screenshot bytes remain untouched.
  function perspectiveMatrix(width,height,corners){
    const source=[[0,0],[width,0],[width,height],[0,height]],rows=[];
    for(let i=0;i<4;i++){
      const [x,y]=source[i],[u,v]=corners[i];
      rows.push([x,y,1,0,0,0,-u*x,-u*y,u]);
      rows.push([0,0,0,x,y,1,-v*x,-v*y,v]);
    }
    for(let col=0;col<8;col++){
      let pivot=col;for(let row=col+1;row<8;row++)if(Math.abs(rows[row][col])>Math.abs(rows[pivot][col]))pivot=row;
      [rows[col],rows[pivot]]=[rows[pivot],rows[col]];
      const divisor=rows[col][col];for(let cell=col;cell<9;cell++)rows[col][cell]/=divisor;
      for(let row=0;row<8;row++){if(row===col)continue;const factor=rows[row][col];for(let cell=col;cell<9;cell++)rows[row][cell]-=factor*rows[col][cell];}
    }
    const [a,b,c,d,e,f,g,h]=rows.map(row=>row[8]);
    return `matrix3d(${[a,d,0,g,b,e,0,h,0,0,1,0,c,f,0,1].join(',')})`;
  }
  const displays=[
    {element:pair.querySelector('.mockup-screen-front'),corners:[[233,166],[509,176],[690,863],[407,897]]},
    {element:pair.querySelector('.mockup-screen-back'),corners:[[775,331],[1053,315],[876,1043],[591,1012]]}
  ];
  displays.forEach(({element,corners})=>{element.style.transform=perspectiveMatrix(760,1500,corners);element.addEventListener('click',()=>{
    const lang=langNow(),isDashboard=element.dataset.heroScreen==='dashboard';
    const title=lang==='ja'?(isDashboard?'店舗の管理画面':'予約できる時間帯'):(isDashboard?"หน้าหลักจัดการร้าน":"ช่วงเวลาจอง");
    openViewer([{src:assets[element.dataset.heroScreen],title}],0);
  });});
  const resize=()=>pair.style.setProperty('--pair-scale',String(pair.clientWidth/1254));
  if('ResizeObserver' in window)new ResizeObserver(resize).observe(pair);
  window.addEventListener('resize',resize);resize();
  const previousLanguage=setLanguage;
  setLanguage=function(lang){previousLanguage(lang);const isJapanese=langNow()==='ja';
    pair.querySelector('[data-hero-screen="dashboard"]').setAttribute('aria-label',isJapanese?'店舗の管理画面を拡大':"ขยายหน้าหลักจัดการร้าน");
    pair.querySelector('[data-hero-screen="slots"]').setAttribute('aria-label',isJapanese?'予約できる時間帯を拡大':"ขยายหน้าจอช่วงเวลาจอง");
  };
  setLanguage(document.getElementById('language').value);
})();

;
(() => {
  const root=document.querySelector('.device-showcase');
  if(!root)return;
  const words={
    zh:{devicesTitle:"มือถือ iPad และคอมพิวเตอร์",devicesDesc:"ดูแอปบนมือถือและ iPad เปิดเว็บไซต์และวิธีจองบนคอมพิวเตอร์",devicesSwitch:"หน้าจอคอมพิวเตอร์",devicesBooking:"วิธีจอง",devicesPosts:"โพสต์ประชาสัมพันธ์",devicesSocial:"โซเชียลมีเดีย",devicesShops:"แนะนำร้าน"},
    ja:{devicesTitle:'スマホも、iPadも、パソコンも。',devicesDesc:'スマホとiPadでアプリを。パソコンではWebサイトや予約ガイドを。',devicesSwitch:'パソコンの画面',devicesBooking:'予約ガイド',devicesPosts:'紹介コンテンツ',devicesSocial:"โซเชียลทางการ",devicesShops:'お店の課題'}
  };
  for(const lang of ['zh','ja'])Object.assign(copy[lang],words[lang]);
  const keys=['devicesBooking','devicesPosts','devicesSocial','devicesShops'];
  let active=0;
  const desktop=document.getElementById('device-desktop-image');
  function label(){desktop.alt=`BookingYou · ${words[langNow()][keys[active]]}`;}
  root.querySelectorAll('[data-device-slide]').forEach(button=>button.addEventListener('click',()=>{
    active=Number(button.dataset.deviceSlide);
    desktop.src=`preview-assets/device-desktop-${active+1}-v11.webp`;
    label();
    root.querySelectorAll('[data-device-slide]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  }));
  const previous=setLanguage;
  setLanguage=function(lang){previous(lang);label();};
  setLanguage(document.getElementById('language').value);
})();

// Locale URLs are also served as complete static HTML for crawlers and no-JS users.
(() => {
 const config={"zh": {"path": "", "language": "zh-Hant", "title": "BookingYou | แอปจัดการนัดหมายสำหรับร้านเล็ก", "description": "BookingYou ช่วยร้านเสริมสวย ทำผม ทำเล็บ เทรนเนอร์ การสอน และตัดแต่งขนสัตว์จัดการนัดหมาย แชร์ลิงก์หรือ QR Code ให้ลูกค้าส่งคำขอผ่านเว็บโดยไม่ต้องดาวน์โหลดแอป การจองจะสมบูรณ์เมื่อร้านยืนยัน ฟีเจอร์พื้นฐานฟรี ไม่มีค่าคอมมิชชันการจอง", "keyword": "ระบบจัดการนัดหมายสำหรับร้านขนาดเล็ก", "about": "BookingYou คือแอปจัดการนัดหมายสำหรับร้านขนาดเล็กที่รับจอง เหมาะกับร้านเสริมสวย ทำผม ทำเล็บ เทรนเนอร์ การสอน และตัดแต่งขนสัตว์ ร้านจัดการปฏิทิน จองแทนลูกค้า เลื่อนนัด และแจ้งเตือนได้ ลูกค้าส่งคำขอผ่านลิงก์หรือ QR Code และการจองผ่านเว็บจะสมบูรณ์เมื่อร้านยืนยัน ฟีเจอร์พื้นฐานฟรี ไม่มีค่าคอมมิชชันการจอง"}, "ja": {"path": "ja/", "language": "ja", "title": "BookingYou｜小さなお店の予約管理アプリ・基本機能無料", "description": "美容室・ネイルサロン・パーソナルジム・教室・ペットサロンの予約管理に。予約リンクやQRコードで、お客様はアプリ不要で予約を申し込み、お店の確認後に確定。基本機能無料、予約手数料なし。", "keyword": "小さなお店の予約管理アプリ", "about": "BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。"}},translations={"zh": {"nav1": "เกี่ยวกับ BookingYou", "nav2": "ฟีเจอร์", "guideScreens": "หน้าจอแอป", "guidePosts": "โพสต์ FB / IG", "nav3": "ราคา", "nav4": "คำถามที่พบบ่อย", "start": "เริ่มใช้ฟรี", "eyebrow": "การจัดการนัดหมายสำหรับร้านอิสระ", "hero1": "จองให้ง่ายขึ้น", "hero2": "เก็บเวลาไว้ดูแลลูกค้า", "heroDesc": "ลูกค้าเลือกเวลาเอง เจ้าของร้านจัดการทั้งวันได้ง่าย รวมการจองจากโทรศัพท์ ข้อความ และหน้าร้านไว้ในปฏิทินเดียว", "promise1": "ฟีเจอร์พื้นฐานฟรี", "promise2": "ไม่มีค่าคอมมิชชัน", "promise3": "iOS・Android・Web", "seeHow": "ดูวิธีใช้งาน", "heroNote": "ลูกค้าส่งคำขอจองผ่านเว็บได้โดยไม่ต้องดาวน์โหลดแอป", "float": "ลูกค้าจองเอง คุณใส่ใจกับบริการได้เต็มที่", "trust": "สำหรับทุกร้านเล็กที่ใส่ใจและให้บริการตามนัด", "ind1": "ความงาม · ทำผม", "ind2": "สตูดิโอทำเล็บ", "ind3": "เทรนเนอร์ส่วนตัว", "ind4": "กวดวิชา · การสอน", "ind5": "ตัดแต่งขนสัตว์", "industryScope": "ข้างต้นเป็นธุรกิจที่นิยมรับจอง BookingYou ยังเหมาะกับธุรกิจอื่นที่ต้องจัดนัดหมาย ช่วยให้ร้านขนาดเล็กและผู้ให้บริการมืออาชีพบริหารการจองได้อย่างยืดหยุ่น", "newsBadge": "จองผ่านเว็บ", "news": "ลิงก์เดียว ลูกค้าจองผ่านเบราว์เซอร์ได้", "galleryTitle": "ดูทุกหน้าจอ ตั้งแต่ค้นหาร้านจนถึงจัดการนัดหมาย", "galleryDesc": "ดูภาพสาธิตแอป BookingYou: ค้นหาบริการ เลือกเวลา และแชร์ลิงก์จอง แตะภาพใดก็ได้เพื่อขยายดูรายละเอียด", "webGuide": "วิธีจองสำหรับลูกค้าโดยไม่ใช้แอป", "customerTab": "การจองของลูกค้า · แชร์ลิงก์", "merchantTab": "การจัดการประจำวันของร้าน", "galleryNote": "ภาพสาธิตแอป ชื่อร้าน วันที่ และราคาเป็นเพียงตัวอย่าง หน้าจอจริงขึ้นอยู่กับแอปที่ใช้งาน", "yuLabel": "คำแนะนำจาก Yu-kun", "yuScreenTitle": "อยากดูชัดขึ้นไหม แตะที่ภาพได้เลย", "yuScreenBody": "ขยายภาพหน้าจอได้ และสลับไปที่ “การจัดการประจำวันของร้าน” เพื่อดูช่วงเวลา เวลาทำการ และการตั้งค่าภาษา", "about1": "ทุกนัดหมายของร้าน", "about2": "มีตารางที่ชัดเจน", "aboutDesc": "BookingYou คือแอปจัดการนัดหมายสำหรับร้านขนาดเล็กที่รับจอง เหมาะกับร้านเสริมสวย ทำผม ทำเล็บ เทรนเนอร์ การสอน และตัดแต่งขนสัตว์ ร้านจัดการปฏิทิน จองแทนลูกค้า เลื่อนนัด และแจ้งเตือนได้ ลูกค้าส่งคำขอผ่านลิงก์หรือ QR Code และการจองผ่านเว็บจะสมบูรณ์เมื่อร้านยืนยัน ฟีเจอร์พื้นฐานฟรี ไม่มีค่าคอมมิชชันการจอง", "point1": "ให้ลูกค้าส่งคำขอจองได้ทุกเมื่อ", "f1a": "ลิงก์เฉพาะของร้าน", "f1b": "คือเคาน์เตอร์รับจองออนไลน์ของคุณ", "f1desc": "แชร์ลิงก์ร้านหรือ QR Code ให้ลูกค้าเลือกบริการ วันและเวลาผ่านเบราว์เซอร์ โดยไม่ต้องดาวน์โหลดแอป การจองผ่านเว็บจะสมบูรณ์หลังคุณยืนยัน", "f1link": "เริ่มสร้างช่องทางรับจองของคุณ", "point2": "เห็นทุกนัดหมายได้ทันที", "f2a": "โทรศัพท์ หน้าร้าน และออนไลน์", "f2b": "จัดทุกนัดไว้ในปฏิทินเดียว", "f2desc": "เพิ่มรายการแทนลูกค้าทางโทรศัพท์และหน้าร้าน แล้วจัดการร่วมกับการจองออนไลน์ หากต้องเปลี่ยนเวลา ให้เลื่อนนัดได้โดยไม่ต้องยกเลิกแล้วสร้างใหม่", "f2link": "รวมการจองประจำวันไว้ที่เดียว", "point3": "คุณกำหนดจังหวะการทำงานของร้าน", "f3a": "เวลาให้บริการและเวลาพัก", "f3b": "ให้สอดคล้องกับจังหวะการทำงานของคุณ", "f3desc": "ตั้งเวลาทำการ วันหยุด และช่วงที่กันไว้ การจองในแอปเลือกยืนยันทันทีหรือรอร้านอนุมัติได้ตามช่วงเวลา ให้เหมาะกับตารางจริงในแต่ละวัน", "f3link": "ดูวิธีใช้งานเพิ่มเติม", "yuBookingTitle": "ลูกค้าส่งคำขอแล้ว ยังต้องรอคุณยืนยัน", "yuBookingBody": "การจองผ่านเว็บทุกรายการจะสมบูรณ์เมื่อร้านยืนยัน การจองในแอปตั้งให้ยืนยันทันทีหรือรอร้านอนุมัติได้ตามช่วงเวลา", "scenarioHeading": "ร้านของคุณ จังหวะการจองของคุณ", "scenarioIntro": "เลือกธุรกิจเพื่อดูวิธีใช้ BookingYou ตั้งแต่ลูกค้าจองจนถึงการจัดตารางงานประจำวัน", "allIndustries": "ดูธุรกิจทั้งหมด 12 กลุ่ม", "scenarioBeauty": "การดูแลความงาม", "scenarioNails": "สตูดิโอทำเล็บ", "scenarioFitness": "เทรนเนอร์ส่วนตัว", "scenarioTeaching": "คลาสเรียน", "scenarioExample": "ตัวอย่างการจัดนัดหมาย", "scenarioPending": "ส่งคำขอผ่านเว็บแล้ว รอร้านยืนยัน", "scenarioGuide": "ดูวิธีที่ลูกค้าจอง", "scenarioNote": "ตัวอย่างสถานการณ์การใช้งาน บริการ เวลา และระยะเวลาใช้เพื่ออธิบายเท่านั้น การจองจริงขึ้นอยู่กับการตั้งค่าของแต่ละร้าน", "yuWorkTitle": "บันทึกการจองทางโทรศัพท์และหน้าร้านไว้ด้วยกันได้", "yuWorkBody": "หลังรับจองทางโทรศัพท์ ข้อความส่วนตัว หรือหน้าร้าน ร้านเพิ่มรายการเองและจัดการร่วมกับการจองออนไลน์ในปฏิทินเดียวได้", "factUnit1": "ค่าคอมมิชชัน", "fact1": "ลูกค้าจ่ายให้ร้านโดยตรง", "free": "ฟรี", "fact2": "ฟีเจอร์พื้นฐานจัดการนัดหมาย", "factUnit3": "ภาษา", "fact3": "ภาษาของอินเทอร์เฟซ", "postsTitle": "แบ่งปันเรื่องราวร้านและวิธีจองไปด้วยกัน", "postsDesc": "รวมวิธีจอง ฟีเจอร์ และเรื่องราวร้านจากหลายพื้นที่เป็นภาพประชาสัมพันธ์โซเชียล 140 ภาพ กรองตามภาษาและแตะเพื่อดูภาพเต็มได้", "filterLabel": "ภาษาโพสต์", "allPosts": "ทุกภาษา", "loadMore": "แสดงโพสต์เพิ่มเติม", "postsNote": "ที่นี่แสดงภาพโพสต์เดิม หากต้องการอ่านโพสต์ ความคิดเห็น และข่าวล่าสุด โปรดไปที่บัญชีโซเชียลทางการ", "faqTitle": "คำถามที่คุณอาจมี", "q1": "ฟีเจอร์พื้นฐานฟรีจริงไหม", "a1": "หน้าจอง ปฏิทิน การจองแทนลูกค้า เลื่อนนัด แจ้งเตือน และกฎอนุมัติเป็นฟีเจอร์พื้นฐานที่ใช้ฟรี รุ่น Pro ยังอยู่ระหว่างวางแผน ยังไม่เปิดตัวและยังไม่กำหนดราคา", "q2": "ลูกค้าจำเป็นต้องดาวน์โหลดแอปไหม", "a2": "ไม่จำเป็น ลูกค้าใช้ลิงก์หรือ QR Code ที่คุณแชร์เพื่อส่งคำขอในเบราว์เซอร์ได้ บางร้านอาจเลือกรับจองในแอปเท่านั้น", "q3": "การจองผ่านเว็บยืนยันอัตโนมัติไหม", "a3": "การจองผ่านเว็บทุกรายการต้องรอร้านยืนยัน ส่วนการจองในแอปเลือกยืนยันทันทีหรือรออนุมัติได้ตามช่วงเวลา", "cta1": "จัดนัดหมายเป็นระบบ", "cta2": "บริหารร้านได้สบายขึ้น", "ctaDesc": "เริ่มวันนี้ เพื่อให้ร้านของคุณมีเวลามากขึ้น", "downloadNote": "มีบน iOS และ Android · ฟีเจอร์พื้นฐานฟรี", "devicesTitle": "มือถือ iPad และคอมพิวเตอร์", "devicesDesc": "ดูแอปบนมือถือและ iPad เปิดเว็บไซต์และวิธีจองบนคอมพิวเตอร์", "devicesSwitch": "หน้าจอคอมพิวเตอร์", "devicesBooking": "วิธีจอง", "devicesPosts": "โพสต์ประชาสัมพันธ์", "devicesSocial": "โซเชียลมีเดีย", "devicesShops": "แนะนำร้าน", "privacy": "นโยบายความเป็นส่วนตัว", "terms": "ข้อกำหนดการให้บริการ", "preview": "設計預覽 V12 · 未發佈", "guideWeb": "วิธีจอง", "guideFeatures": "ฟีเจอร์ทั้งหมด", "guideWho": "ธุรกิจที่เหมาะสม", "closeImage": "ปิดภาพ", "previousImage": "ภาพก่อนหน้า", "nextImage": "ภาพถัดไป", "zoom": "ขยายดู", "post": "โพสต์โซเชียล", "shown": "แสดงแล้ว", "of": "／", "unit": "ภาพ", "chapterReading": "ความคืบหน้าการอ่าน", "chapterDownload": "ดาวน์โหลดแอป", "chapterLabel": "ส่วนต่าง ๆ ของหน้า", "scenarioTabLabel": "เลือกสถานการณ์ธุรกิจ", "scenarioChanged": "เปลี่ยนเป็น:", "progressText": "อ่านแล้ว", "seoKeyword": "ระบบจัดการนัดหมายสำหรับร้านขนาดเล็ก"}, "ja": {"nav1": "BookingYouについて", "nav2": "ฟีเจอร์", "nav3": "ราคา", "nav4": "よくあるご質問", "start": "無料ではじめる", "eyebrow": "ひとりで営むお店のための予約管理", "hero1": "予約を、もっとかんたんに。", "hero2": "お客様との時間を、もっと大切に。", "heroDesc": "お客様は自分で予約、お店は一日を管理。電話・来店・ネット予約を、ひとつのカレンダーに。", "promise1": "基本機能は無料", "promise2": "予約手数料なし", "promise3": "iOS・Android・Web", "seeHow": "使い方を見る", "heroNote": "お客様はアプリなしで、ブラウザから予約できます。", "phoneLabel": "空いている時間を選んで、お店に予約。", "float": "予約はお客様に。目の前のサービスに集中。", "trust": "予約でつながる、小さなお店の毎日に。", "ind1": "美容室・理容室", "ind2": "ネイルサロン", "ind3": "パーソナルジム", "ind4": "教室・レッスン", "ind5": "ペットサロン", "newsBadge": "ウェブ予約", "news": "リンクひとつで、お客様はブラウザから予約できます。", "about1": "小さなお店の予約を、", "about2": "ひとつに、わかりやすく。", "aboutDesc": "BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。", "point1": "いつでも予約を受け付けたい", "f1a": "お店のリンクが、", "f1b": "あなたの予約受付になります。", "f1desc": "予約リンクやQRコードを共有するだけ。お客様はアプリなしで、サービス・日付・時間を選べます。ウェブ予約は、お店の確認後に確定します。", "f1link": "お店の予約受付をはじめる", "point2": "すべての予約を、ひと目で把握したい", "f2a": "電話も、来店も、ネットも。", "f2b": "ひとつのカレンダーで管理。", "f2desc": "電話や来店で受けた予約も、お店から登録。ネット予約と一緒に管理できます。日時変更も、予約を取り消さずにそのまま変更できます。", "f2link": "一日の予約をまとめて管理", "point3": "お店に合った予約ルールにしたい", "f3a": "予約を受ける時間も、休む時間も。", "f3b": "お店のペースで決められます。", "f3desc": "営業時間、定休日、予約を受けない時間を設定。アプリ内予約は、時間帯ごとに即時確定かお店の承認制かを選べます。", "f3link": "使い方をもっと知る", "factUnit1": "ค่าธรรมเนียม", "fact1": "お支払いはお店に直接", "free": "ฟรี", "fact2": "予約管理の基本機能", "factUnit3": "ภาษา", "fact3": "お店に合った表示言語", "faqTitle": "よくあるご質問", "q1": "基本機能は本当に無料ですか？", "a1": "予約ページ、カレンダー、代理予約、日時変更、リマインダー、承認ルールなどの基本機能は無料です。Proプランは計画中で、まだ提供しておらず、料金も未定です。", "q2": "お客様もアプリを入れる必要がありますか？", "a2": "必要ありません。お店のリンクやQRコードからブラウザで予約できます。お店の設定によっては、アプリ内予約のみを受け付ける場合もあります。", "q3": "ウェブ予約は自動で確定しますか？", "a3": "ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。", "cta1": "予約に、ゆとりを。", "cta2": "お店の毎日に、笑顔を。", "ctaDesc": "今日から、小さなお店の時間をもっと大切に。", "downloadNote": "iOS・Androidで配信中 · 基本機能無料", "privacy": "プライバシーポリシー", "terms": "ข้อกำหนดการใช้งาน", "preview": "デザインプレビュー V12 · 未公開", "industryScope": "掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。", "galleryTitle": "お店探しから予約管理まで、画面でわかりやすく。", "galleryDesc": "サービス選び、空き時間の確認、予約リンクの共有。BookingYouのアプリ紹介画像を、タップして拡大できます。", "webGuide": "アプリ不要の予約ガイド", "customerTab": "お客様の予約・リンク共有", "merchantTab": "お店の日常管理", "galleryNote": "アプリ紹介用の画像です。店舗、日付、金額は表示例で、実際の画面はご利用中のアプリをご確認ください。", "postsTitle": "小さなお店の日常も、予約のヒントも。SNSでお届け。", "postsDesc": "予約ガイドからお店の日常まで。BookingYouのSNS画像140点をご紹介。言語で絞り込み、タップで拡大できます。", "filterLabel": "投稿の言語", "allPosts": "すべての言語", "loadMore": "もっと見る", "postsNote": "既存の投稿画像を掲載しています。投稿本文、コメント、最新情報は公式SNSアカウントをご覧ください。", "guideScreens": "アプリ画面", "guideWeb": "予約ガイド", "guideFeatures": "すべての機能", "guideWho": "ธุรกิจที่รองรับ", "guidePosts": "โพสต์โซเชียล", "closeImage": "画像を閉じる", "previousImage": "前の画像", "nextImage": "次の画像", "zoom": "拡大する", "post": "โพสต์โซเชียล", "shown": "กำลังแสดง", "of": "／", "unit": "รายการ", "scenarioHeading": "お店に合わせた、予約のかたち。", "scenarioIntro": "業種を選んで、お客様の予約から一日の管理まで、BookingYouの使い方をご覧ください。", "allIndustries": "12の業種をすべて見る", "scenarioBeauty": "美容・ケア", "scenarioNails": "ネイルサロン", "scenarioFitness": "パーソナルジム", "scenarioTeaching": "教室・レッスン", "scenarioExample": "予約スケジュールの例", "scenarioPending": "ウェブで送信後、お店の確認を待ちます", "scenarioGuide": "お客様の予約方法を見る", "scenarioNote": "サービス・時間・所要時間は活用例です。実際に予約できる内容は、各店舗の設定によって異なります。", "yuLabel": "Uくんのひとこと", "yuWorkTitle": "電話や来店で受けた予約も、一緒に。", "yuWorkBody": "電話・メッセージ・来店で受けた予約は、お店から登録。ネット予約と同じカレンダーで管理できます。", "yuScreenTitle": "気になる画面は、タップして拡大。", "yuScreenBody": "「お店の日常管理」に切り替えると、予約枠、営業時間、言語設定の紹介画面も確認できます。", "yuBookingTitle": "送信しただけでは、予約はまだ確定しません。", "yuBookingBody": "ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。", "chapterReading": "読書の進み具合", "chapterDownload": "ダウンロード", "chapterLabel": "ページの目次", "scenarioTabLabel": "業種を選択", "scenarioChanged": "選択した業種：", "progressText": "อ่านแล้ว", "devicesTitle": "スマホも、iPadも、パソコンも。", "devicesDesc": "スマホとiPadでアプリを。パソコンではWebサイトや予約ガイドを。", "devicesSwitch": "パソコンの画面", "devicesBooking": "予約ガイド", "devicesPosts": "紹介コンテンツ", "devicesSocial": "โซเชียลทางการ", "devicesShops": "お店の課題", "seoKeyword": "小さなお店の予約管理アプリ"}};
 const locales={zh:{path:'',language:'zh-Hant'},en:{path:'en/',language:'en'},'zh-CN':{path:'zh-cn/',language:'zh-Hans'},ja:{path:'ja/',language:'ja'},ko:{path:'ko/',language:'ko'},ms:{path:'ms/',language:'ms'},th:{path:'th/',language:'th'},vi:{path:'vi/',language:'vi'}};
 const rendered=document.documentElement.dataset.locale || (document.documentElement.lang==='ja'?'ja':'zh');
 const internal=rendered==='ja'?'ja':'zh';
 for(const lang of ['zh','ja'])Object.assign(copy[lang],translations[lang]);
 const previous=setLanguage;
 setLanguage=function(lang){
  if(!locales[lang])lang=rendered;
  if(lang!==rendered){location.assign('/'+locales[lang].path+location.hash);return;}
  previous(internal);
  document.documentElement.lang=locales[rendered].language;
  document.getElementById('language').value=rendered;
  document.querySelector('[data-page]').href='/'+locales[rendered].path+'about/';
  const preview=document.documentElement.dataset.seoMode!=='release';
  document.title=config[internal].title+(preview?(internal==='ja'?' · デザインプレビュー':' · 設計預覽'):'');
 };
 setLanguage(rendered);
})();

// Separate enter/exit thresholds avoid flicker as the sticky header changes height.
(() => {
 const root=document.documentElement;
 let compact=false,scheduled=false;
 const update=()=>{
  scheduled=false;
  const next=compact ? window.scrollY>24 : window.scrollY>96;
  if(next===compact)return;
  compact=next;
  root.classList.toggle('has-compact-header',compact);
 };
 window.addEventListener('scroll',()=>{
  if(!scheduled){scheduled=true;requestAnimationFrame(update);}
 },{passive:true});
 window.addEventListener('pageshow',update);
 update();
})();

// Load only the next scene; keep the current photo visible until it is decoded.
(() => {
 const orbit=document.getElementById('hero-industry-photos');
 const controls=document.querySelector('.hero-carousel-controls');
 if(!orbit || !controls)return;
 const slides=JSON.parse(orbit.dataset.slides);
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 const toggle=controls.querySelector('[data-carousel="toggle"]');
 const caption=controls.querySelector('.hero-industry-label');
 const cache=new Map([[0,orbit.querySelector('img')]]);
 let index=0,timer,revision=0,visible=false,paused=reduce.matches;
 const load=(next)=>{
  if(cache.has(next))return cache.get(next);
  const img=new Image();
  img.className='hero-industry-photo';img.alt=slides[next].alt;
  img.width=900;img.height=900;img.decoding='async';img.fetchPriority='low';
  img.src=slides[next].src;cache.set(next,img);return img;
 };
 const updateControl=()=>{
  const label=paused?toggle.dataset.play:toggle.dataset.pause;
  toggle.setAttribute('aria-label',label);toggle.title=label;
  toggle.firstElementChild.textContent=paused?'▶':'Ⅱ';
  caption.setAttribute('aria-live',paused?'polite':'off');
 };
 const canPlay=()=>!paused && visible && !document.hidden;
 const schedule=()=>{
  clearTimeout(timer);
  if(canPlay())timer=setTimeout(()=>show((index+1)%slides.length),5000);
 };
 const show=async(next)=>{
  clearTimeout(timer);
  const token=++revision;
  try{
   const img=load(next);await img.decode();
   if(token!==revision)return;
   if(!orbit.contains(img))orbit.append(img);
   // Commit the transparent starting frame before the crossfade.
   img.getBoundingClientRect();
   orbit.querySelectorAll('img').forEach(el=>{
    el.classList.toggle('is-active',el===img);
    el.setAttribute('aria-hidden',String(el!==img));
   });
   index=next;caption.textContent=slides[index].label;
  }catch(error){
   cache.delete(next); // Retry later without replacing the current photo.
  }
  if(token===revision)schedule();
 };
 controls.hidden=false;updateControl();
 controls.querySelectorAll('[data-carousel]').forEach(button=>button.addEventListener('click',()=>{
  const action=button.dataset.carousel;
  if(action==='toggle'){
   paused=!paused;revision++;updateControl();schedule();
  }else{
   paused=true;updateControl();
   show((index+(action==='next'?1:-1)+slides.length)%slides.length);
  }
 }));
 // Keyboard focus pauses rotation; pointer clicks keep the toggle unambiguous.
 controls.addEventListener('focusin',event=>{
  if(event.target.matches(':focus-visible')){paused=true;revision++;updateControl();schedule();}
 });
 document.addEventListener('visibilitychange',()=>{revision++;schedule();});
 reduce.addEventListener('change',()=>{if(reduce.matches){paused=true;revision++;updateControl();schedule();}});
 if('IntersectionObserver' in window){
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;revision++;schedule();},{threshold:0}).observe(orbit);
 }else{visible=true;schedule();}
 window.addEventListener('pagehide',()=>{revision++;clearTimeout(timer);});
 window.addEventListener('pageshow',schedule);
})();

(() => {
 const tabs=[...document.querySelectorAll('[data-content-tab]')];
 const panels=[...document.querySelectorAll('[data-content-panel]')];
 const choose=key=>{
  tabs.forEach(tab=>{const active=tab.dataset.contentTab===key;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
  panels.forEach(panel=>panel.hidden=panel.dataset.contentPanel!==key);
 };
 tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>choose(tab.dataset.contentTab));
  tab.addEventListener('keydown',event=>{
   let next;
   if(event.key==='ArrowRight')next=(index+1)%tabs.length;
   else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;
   else if(event.key==='Home')next=0;
   else if(event.key==='End')next=tabs.length-1;
   else return;
   event.preventDefault();choose(tabs[next].dataset.contentTab);tabs[next].focus();
  });
 });
 const syncHash=()=>{
  const key=location.hash.slice(1);
  if(['brand','social'].includes(key))choose(key);
  else if(key==='posts')choose('posts');
  const target=document.getElementById(key);
  if(target?.tagName==='DETAILS')target.open=true;
 };
 choose('posts');syncHash();window.addEventListener('hashchange',syncHash);
})();
