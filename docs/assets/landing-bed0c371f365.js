
const assets={"logo": "assets/logo.png", "photo": "preview-assets/hero-salon-v6.webp", "mascot": "assets/yu-kun-wave.png", "slots": "assets/deck-phone-slots.png", "dashboard": "assets/deck-dashboard.png", "hours": "assets/deck-hours.png", "customer": "assets/illustrations/33-customer-using-phone.webp", "owner": "assets/illustrations/34-salon-owner-welcoming.webp", "web1zh": "assets/webbook/ko-1.jpg", "web2zh": "assets/webbook/ko-2.jpg", "web1ja": "assets/webbook/ja-1.jpg", "web2ja": "assets/webbook/ja-2.jpg", "applezh": "assets/badges/apple-ko-kr.svg", "googlezh": "assets/badges/google-ko.png", "appleja": "assets/badges/apple-ja-jp.svg", "googleja": "assets/badges/google-ja.png"};
const copy={zh:{},ja:{nav1:'BookingYouについて',nav2:"기능 소개",nav3:"요금",nav4:'よくあるご質問',start:'無料ではじめる',eyebrow:'ひとりで営むお店のための予約管理',hero1:'予約を、もっとかんたんに。',hero2:'お客様との時間を、もっと大切に。',heroDesc:'お客様は自分で予約、お店は一日を管理。電話・来店・ネット予約を、ひとつのカレンダーに。',promise1:'基本機能は無料',promise2:'予約手数料なし',promise3:'iOS・Android・Web',seeHow:'使い方を見る',heroNote:'お客様はアプリなしで、ブラウザから予約できます。',phoneLabel:'空いている時間を選んで、お店に予約。',float:'予約はお客様に。目の前のサービスに集中。',trust:'予約でつながる、小さなお店の毎日に。',ind1:'美容室・理容室',ind2:'ネイルサロン',ind3:'パーソナルジム',ind4:'教室・レッスン',ind5:'ペットサロン',newsBadge:'ウェブ予約',news:'リンクひとつで、お客様はブラウザから予約できます。',about1:'小さなお店の予約を、',about2:'ひとつに、わかりやすく。',aboutDesc:'施術中の電話、あちこちに届くメッセージ。BookingYouなら予約・日程変更・リマインダーをまとめて管理。目の前のお客様に、もっと向き合える毎日へ。',point1:'いつでも予約を受け付けたい',f1a:'お店のリンクが、',f1b:'あなたの予約受付になります。',f1desc:'予約リンクやQRコードを共有するだけ。お客様はアプリなしで、サービス・日付・時間を選べます。ウェブ予約は、お店の確認後に確定します。',f1link:'お店の予約受付をはじめる',point2:'すべての予約を、ひと目で把握したい',f2a:'電話も、来店も、ネットも。',f2b:'ひとつのカレンダーで管理。',f2desc:'電話や来店で受けた予約も、お店から登録。ネット予約と一緒に管理できます。日時変更も、予約を取り消さずにそのまま変更できます。',f2link:'一日の予約をまとめて管理',point3:'お店に合った予約ルールにしたい',f3a:'予約を受ける時間も、休む時間も。',f3b:'お店のペースで決められます。',f3desc:'営業時間、定休日、予約を受けない時間を設定。アプリ内予約は、時間帯ごとに即時確定かお店の承認制かを選べます。',f3link:'使い方をもっと知る',factUnit1:"수수료",fact1:'お支払いはお店に直接',free:"무료",fact2:'予約管理の基本機能',factUnit3:"언어",fact3:'お店に合った表示言語',faqTitle:'よくあるご質問',q1:'基本機能は本当に無料ですか？',a1:'予約ページ、カレンダー、代理予約、日時変更、リマインダー、承認ルールなどの基本機能は無料です。Proプランは計画中で、まだ提供しておらず、料金も未定です。',q2:'お客様もアプリを入れる必要がありますか？',a2:'必要ありません。お店のリンクやQRコードからブラウザで予約できます。お店の設定によっては、アプリ内予約のみを受け付ける場合もあります。',q3:'ウェブ予約は自動で確定しますか？',a3:'ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。',cta1:'予約に、ゆとりを。',cta2:'お店の毎日に、笑顔を。',ctaDesc:'今日から、小さなお店の時間をもっと大切に。',downloadNote:'iOS・Androidで配信中 · 基本機能無料',privacy:'プライバシーポリシー',terms:"이용약관",preview:'デザインプレビュー V10 · 未公開'}};
const images={zh:{web1:'web1zh',web2:'web2zh',apple:'applezh',google:'googlezh'},ja:{web1:'web1ja',web2:'web2ja',apple:'appleja',google:'googleja'}};
Object.assign(copy.zh,{"nav1": "BookingYou 소개", "nav2": "기능 소개", "guideScreens": "앱 화면", "guidePosts": "SNS 게시물", "nav3": "요금", "nav4": "자주 묻는 질문", "start": "무료로 시작하기", "eyebrow": "독립 매장을 위한 예약 관리", "hero1": "예약을 더 간편하게.", "hero2": "고객을 위한 시간을 더.", "heroDesc": "고객은 시간을 선택하고 매장은 하루 일정을 간편하게 관리하세요. 전화, 메시지, 방문 예약을 하나의 캘린더에 모으세요.", "promise1": "기본 기능 무료", "promise2": "수수료 없음", "promise3": "iOS・Android・Web", "seeHow": "사용 방법 보기", "heroNote": "고객은 앱을 내려받지 않고도 웹 예약을 신청할 수 있습니다.", "float": "예약은 고객이, 서비스는 당신이.", "trust": "정성으로 운영하는 모든 예약제 소규모 매장을 위해", "ind1": "뷰티 · 헤어", "ind2": "네일 스튜디오", "ind3": "개인 트레이너", "ind4": "개인 지도 · 수업", "ind5": "반려동물 미용", "industryScope": "위 업종은 예약 서비스의 대표적인 예입니다. BookingYou는 예약이 필요한 다양한 사업에 활용할 수 있으며, 소규모 매장과 전문 서비스 업체가 규모에 맞게 유연하게 예약을 관리하도록 돕습니다.", "newsBadge": "웹 예약", "news": "링크 하나면 고객이 브라우저에서 예약할 수 있습니다.", "galleryTitle": "매장 찾기부터 예약 관리까지, 각 화면을 살펴보세요.", "galleryDesc": "서비스 찾기, 시간 선택, 예약 링크 공유 등 BookingYou 앱 소개 이미지를 살펴보세요. 이미지를 누르면 자세히 확대할 수 있습니다.", "webGuide": "앱 없이 예약하는 방법", "customerTab": "고객 예약 · 링크 공유", "merchantTab": "매장 일상 관리", "galleryNote": "앱 소개용 이미지입니다. 매장, 날짜, 금액은 예시이며 실제 화면은 사용 중인 앱을 기준으로 합니다.", "yuLabel": "U의 작은 안내", "yuScreenTitle": "더 자세히 보고 싶다면 화면을 눌러 보세요.", "yuScreenBody": "앱 화면을 확대하거나 ‘매장 일상 관리’로 전환해 예약 시간대, 영업시간, 언어 설정을 살펴보세요.", "about1": "우리 매장의 모든 예약을,", "about2": "명확하게 정리하세요.", "aboutDesc": "BookingYou는 예약제로 운영하는 소규모 매장을 위한 예약 관리 앱입니다. 뷰티, 헤어, 네일, 개인 트레이닝, 교육, 반려동물 미용에 적합합니다. 매장은 캘린더, 대리 예약, 일정 변경, 알림을 관리할 수 있습니다. 고객이 링크나 QR 코드로 웹 예약을 신청하면 매장 확인 후 확정됩니다. 기본 기능은 무료이며 예약 수수료는 없습니다.", "point1": "고객이 언제든 예약을 신청하도록", "f1a": "매장 전용 링크 하나로,", "f1b": "온라인 예약 창구가 됩니다.", "f1desc": "매장 링크나 QR 코드를 공유하세요. 고객은 앱 없이 브라우저에서 서비스, 날짜, 시간을 선택할 수 있습니다. 웹 예약은 매장에서 확인한 후 확정됩니다.", "f1link": "나만의 예약 창구 만들기", "point2": "모든 예약을 한눈에", "f2a": "전화, 방문, 온라인 예약을,", "f2b": "하나의 캘린더로 모든 일정을 정리하세요.", "f2desc": "전화와 방문 고객의 예약을 직접 추가하고 온라인 예약과 함께 관리하세요. 시간이 바뀌면 취소 후 재등록할 필요 없이 일정을 변경하면 됩니다.", "f2link": "매일의 예약을 한곳에서 관리", "point3": "운영 방식은 직접 정하세요", "f3a": "고객을 맞이할 시간과 쉴 시간,", "f3b": "나의 업무 흐름에 맞게.", "f3desc": "영업시간, 휴무일, 예약을 받지 않을 시간을 설정하세요. 앱 예약은 시간대별로 즉시 확정 또는 매장 승인 방식을 선택해 실제 일과에 맞출 수 있습니다.", "f3link": "다양한 활용 방법 보기", "yuBookingTitle": "고객이 신청한 후에도 매장 확인이 필요합니다.", "yuBookingBody": "웹 예약은 항상 매장 확인 후 확정됩니다. 앱 예약은 시간대별로 즉시 확정 또는 매장 승인 방식을 설정할 수 있습니다.", "scenarioHeading": "우리 매장에 맞는 예약 운영.", "scenarioIntro": "업종을 선택해 고객 예약부터 매일의 업무 일정까지 BookingYou를 어떻게 활용할 수 있는지 알아보세요.", "allIndustries": "전체 12개 업종 보기", "scenarioBeauty": "뷰티 케어", "scenarioNails": "네일 스튜디오", "scenarioFitness": "퍼스널 트레이닝", "scenarioTeaching": "수업", "scenarioExample": "예약 운영 예시", "scenarioPending": "웹 신청 후 매장 확인 대기", "scenarioGuide": "고객 예약 방법 보기", "scenarioNote": "활용 상황을 설명하기 위한 예시입니다. 서비스, 시간, 소요 시간은 참고용이며 실제 예약 가능 여부는 매장 설정에 따릅니다.", "yuWorkTitle": "전화와 방문 예약도 함께 기록하세요.", "yuWorkBody": "전화, 메시지, 방문 예약을 받으면 매장에서 직접 기록을 추가하고 온라인 예약과 하나의 캘린더에서 관리할 수 있습니다.", "factUnit1": "수수료", "fact1": "고객이 매장에 직접 결제", "free": "무료", "fact2": "예약 관리 기본 기능", "factUnit3": "종", "fact3": "화면 언어", "postsTitle": "매장 이야기와 예약 방법을 함께 나눠요.", "postsDesc": "예약 방법, 기능 소개, 여러 지역 매장의 일상을 담은 소셜 홍보 이미지 140장입니다. 언어로 필터링하고 이미지를 눌러 전체 크기로 보세요.", "filterLabel": "게시물 언어", "allPosts": "모든 언어", "loadMore": "게시물 더 보기", "postsNote": "기존 게시물 이미지를 모았습니다. 원문, 댓글, 최신 소식은 공식 소셜 미디어 계정에서 확인하세요.", "faqTitle": "자주 묻는 질문", "q1": "기본 기능이 정말 무료인가요?", "a1": "예약 페이지, 캘린더, 대리 예약, 일정 변경, 알림, 승인 규칙 등 기본 기능은 무료입니다. Pro는 기획 중이며 아직 출시되지 않았고 가격도 정해지지 않았습니다.", "q2": "고객도 앱을 내려받아야 하나요?", "a2": "아니요. 공유한 링크나 QR 코드로 브라우저에서 바로 예약을 신청할 수 있습니다. 다만 매장에 따라 앱 예약만 받도록 설정할 수 있습니다.", "q3": "웹 예약은 자동으로 확정되나요?", "a3": "웹 예약은 매장에서 확인해야 확정됩니다. 앱 예약은 시간대별로 즉시 확정 또는 매장 승인 방식을 선택할 수 있습니다.", "cta1": "예약은 체계적으로,", "cta2": "매장 운영을 더 여유롭게.", "ctaDesc": "오늘부터 매장에 여유 시간을 더하세요.", "downloadNote": "iOS 및 Android 출시 · 기본 기능 무료", "devicesTitle": "휴대폰, iPad, 컴퓨터.", "devicesDesc": "휴대폰과 iPad에서는 앱을, 컴퓨터에서는 웹사이트와 예약 안내를 살펴보세요.", "devicesSwitch": "컴퓨터 화면", "devicesBooking": "예약 안내", "devicesPosts": "홍보 게시물", "devicesSocial": "SNS", "devicesShops": "매장 소개", "privacy": "개인정보처리방침", "terms": "이용약관", "preview": "設計預覽 V12 · 未發佈", "guideWeb": "예약 안내", "guideFeatures": "전체 기능", "guideWho": "활용 가능한 업종", "closeImage": "이미지 닫기", "previousImage": "이전 이미지", "nextImage": "다음 이미지", "zoom": "확대해서 보기", "post": "소셜 미디어 게시물", "shown": "표시됨", "of": "／", "unit": "장", "chapterReading": "읽기 진행률", "chapterDownload": "앱 다운로드", "chapterLabel": "페이지 목차", "scenarioTabLabel": "업종별 활용 상황 선택", "scenarioChanged": "전환됨:", "progressText": "읽음", "seoKeyword": "소규모 매장 예약 관리 시스템"});
document.querySelectorAll('[data-asset]').forEach(el=>el.src=assets[el.dataset.asset]);
function setLanguage(lang){if(!copy[lang])lang='zh';document.documentElement.lang=lang==='ja'?'ja':'zh-Hant';document.getElementById('language').value=lang;document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=copy[lang][el.dataset.i18n]||copy.zh[el.dataset.i18n]);document.querySelectorAll('[data-local-asset]').forEach(el=>el.src=assets[images[lang][el.dataset.localAsset]]);document.querySelector('[data-page]').href='https://bookingyou.app/'+(lang==='ja'?'ja/':'')+'about/';document.querySelector('.menu-toggle').setAttribute('aria-label',lang==='ja'?'メニュー':"메뉴 열기");document.querySelector('.nav').setAttribute('aria-label',lang==='ja'?'メインメニュー':"주 메뉴");document.title=lang==='ja'?'BookingYou · ホームページデザインプレビュー':"BookingYou · 홈페이지 디자인 미리보기";}
setLanguage(document.documentElement.lang==='ja'?'ja':'zh');
document.getElementById('language').addEventListener('change',e=>setLanguage(e.target.value));
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menu.addEventListener('click',()=>{let open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);menu.textContent=open?'×':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.textContent='☰';}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.textContent='☰';}});

;
const postManifest = [{"id": "001", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "002", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "003", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "004", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "005", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "006", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "007", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "008", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "009", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "010", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "011", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "012", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "013", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "014", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "015", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "016", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "017", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "018", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "019", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "020", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "021", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "022", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "023", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "024", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "025", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "026", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "027", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "028", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "029", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "030", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "031", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "032", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "033", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "034", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "035", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "036", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "037", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "038", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "039", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "040", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "041", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "042", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "043", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "044", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "045", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "046", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "047", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "048", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "049", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "050", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "051", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "052", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "053", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "054", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "055", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "056", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "057", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "058", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "059", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "060", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "061", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "062", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "063", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "064", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "065", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "066", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "067", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "068", "w": 941, "h": 1672, "lang": "ja"}, {"id": "069", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "070", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "071", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "072", "w": 941, "h": 1672, "lang": "ja"}, {"id": "073", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "074", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "075", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "076", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "077", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "078", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "079", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "080", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "081", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "082", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "083", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "084", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "085", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "086", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "087", "w": 1080, "h": 1919, "lang": "ja"}, {"id": "088", "w": 1080, "h": 1919, "lang": "ja"}, {"id": "089", "w": 1080, "h": 1350, "lang": "th"}, {"id": "090", "w": 1080, "h": 1350, "lang": "th"}, {"id": "091", "w": 1080, "h": 1350, "lang": "th"}, {"id": "092", "w": 1080, "h": 1350, "lang": "th"}, {"id": "093", "w": 1080, "h": 1350, "lang": "th"}, {"id": "094", "w": 1080, "h": 1350, "lang": "th"}, {"id": "095", "w": 1080, "h": 1350, "lang": "th"}, {"id": "096", "w": 1080, "h": 1350, "lang": "th"}, {"id": "097", "w": 1080, "h": 1350, "lang": "th"}, {"id": "098", "w": 1080, "h": 1350, "lang": "th"}, {"id": "099", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "100", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "101", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "102", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "103", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "104", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "105", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "106", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "107", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "108", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "109", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "110", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "111", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "112", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "113", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "114", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "115", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "116", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "117", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "118", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "119", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "120", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "121", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "122", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "123", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "124", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "125", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "126", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "127", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "128", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "129", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "130", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "131", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "132", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "133", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "134", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "135", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "136", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "137", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "138", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "139", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "140", "w": 848, "h": 1072, "lang": "ja"}];
const extraCopy = {
 zh:{industryScope:"위 업종은 예약 서비스의 대표적인 예입니다. BookingYou는 예약이 필요한 다양한 사업에 활용할 수 있으며, 소규모 매장과 전문 서비스 업체가 규모에 맞게 유연하게 예약을 관리하도록 돕습니다.",galleryTitle:"매장 찾기부터 예약 관리까지, 각 화면을 살펴보세요.",galleryDesc:"서비스 찾기, 시간 선택, 예약 링크 공유 등 BookingYou 앱 소개 이미지를 살펴보세요. 이미지를 누르면 자세히 확대할 수 있습니다.",webGuide:"앱 없이 예약하는 방법",customerTab:"고객 예약 · 링크 공유",merchantTab:"매장 일상 관리",galleryNote:"앱 소개용 이미지입니다. 매장, 날짜, 금액은 예시이며 실제 화면은 사용 중인 앱을 기준으로 합니다.",postsTitle:"매장 이야기와 예약 방법을 함께 나눠요.",postsDesc:"예약 방법, 기능 소개, 여러 지역 매장의 일상을 담은 소셜 홍보 이미지 140장입니다. 언어로 필터링하고 이미지를 눌러 전체 크기로 보세요.",filterLabel:"게시물 언어",allPosts:"모든 언어",loadMore:"게시물 더 보기",postsNote:"기존 게시물 이미지를 모았습니다. 원문, 댓글, 최신 소식은 공식 소셜 미디어 계정에서 확인하세요.",guideScreens:"앱 화면",guideWeb:"예약 안내",guideFeatures:"전체 기능",guideWho:"활용 가능한 업종",guidePosts:"SNS 게시물",closeImage:"이미지 닫기",previousImage:"이전 이미지",nextImage:"다음 이미지",zoom:"확대해서 보기",post:"소셜 미디어 게시물",shown:"표시됨",of:'／',unit:"장"},
 ja:{industryScope:'掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。',galleryTitle:'お店探しから予約管理まで、画面でわかりやすく。',galleryDesc:'サービス選び、空き時間の確認、予約リンクの共有。BookingYouのアプリ紹介画像を、タップして拡大できます。',webGuide:'アプリ不要の予約ガイド',customerTab:'お客様の予約・リンク共有',merchantTab:'お店の日常管理',galleryNote:'アプリ紹介用の画像です。店舗、日付、金額は表示例で、実際の画面はご利用中のアプリをご確認ください。',postsTitle:'小さなお店の日常も、予約のヒントも。SNSでお届け。',postsDesc:'予約ガイドからお店の日常まで。BookingYouのSNS画像140点をご紹介。言語で絞り込み、タップで拡大できます。',filterLabel:'投稿の言語',allPosts:'すべての言語',loadMore:'もっと見る',postsNote:'既存の投稿画像を掲載しています。投稿本文、コメント、最新情報は公式SNSアカウントをご覧ください。',guideScreens:'アプリ画面',guideWeb:'予約ガイド',guideFeatures:'すべての機能',guideWho:"지원 업종",guidePosts:"소셜 미디어 게시물",closeImage:'画像を閉じる',previousImage:'前の画像',nextImage:'次の画像',zoom:'拡大する',post:"소셜 미디어 게시물",shown:"표시 중",of:'／',unit:"건"}
};
for(const lang of ['zh','ja'])Object.assign(copy[lang],extraCopy[lang]);
const appTexts={
 zh:[["나에게 맞는 매장 찾기","지역과 서비스 유형으로 매장을 찾고 사진과 서비스 정보를 확인한 뒤 예약하세요."],["서비스, 소요 시간, 가격","매장 페이지에서 서비스별 내용, 소요 시간, 가격을 확인하세요."],["날짜 선택 후 시간 선택","예약 가능한 날짜와 시간을 확인하세요. 시간대 설정에 따라 즉시 확정되거나 매장 승인을 기다리게 됩니다."],["매장 전용 QR 카드","고객이 QR 코드를 스캔하면 예약 페이지가 열립니다. 매장 안이나 명함에 활용하세요."],["한 번에 예약 링크 공유","WhatsApp, Instagram, Facebook, 웹사이트에 링크를 공유해 고객이 다시 예약하기 쉽게 하세요."]],
 ja:[['自分に合うお店を探す','地域やサービスから探し、写真とサービス内容を見て予約へ進めます。'],['サービス・時間・料金','お店のページでサービス一覧、所要時間、料金をまとめて確認できます。'],['日付と空き時間を選ぶ','予約可能な日時を選択。時間帯の設定により即時確定、またはお店の承認後に確定します。'],['お店専用のQRカード','QRコードから予約ページへ。店内や名刺に載せて、予約の入口をつくれます。'],['予約リンクを共有','メッセージやInstagram、Facebook、ホームページにリンクを掲載できます。']]
};
const merchantTexts={
 zh:[["매장 관리 홈","매장 현황과 관리 메뉴를 한곳에서 확인하고 전화, 방문, 온라인 예약을 함께 기록하세요."],["예약 시간대","고객은 예약 가능한 날짜와 시간을 확인하고, 매장은 실제 운영에 맞게 시간대를 관리합니다."],["영업 및 승인 설정","영업시간, 휴무일, 확정 규칙을 설정하면 앱 예약에 시간대별로 적용됩니다."],["8개 언어 지원","번체 중국어, 영어, 간체 중국어, 일본어, 한국어, 말레이어, 태국어, 베트남어를 지원합니다. 필요에 따라 전환하세요."]],
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
    const title=lang==='ja'?(isDashboard?'店舗の管理画面':'予約できる時間帯'):(isDashboard?"매장 관리 홈":"예약 시간대");
    openViewer([{src:assets[element.dataset.heroScreen],title}],0);
  });});
  const resize=()=>pair.style.setProperty('--pair-scale',String(pair.clientWidth/1254));
  if('ResizeObserver' in window)new ResizeObserver(resize).observe(pair);
  window.addEventListener('resize',resize);resize();
  const previousLanguage=setLanguage;
  setLanguage=function(lang){previousLanguage(lang);const isJapanese=langNow()==='ja';
    pair.querySelector('[data-hero-screen="dashboard"]').setAttribute('aria-label',isJapanese?'店舗の管理画面を拡大':"매장 관리 홈 확대");
    pair.querySelector('[data-hero-screen="slots"]').setAttribute('aria-label',isJapanese?'予約できる時間帯を拡大':"예약 시간대 화면 확대");
  };
  setLanguage(document.getElementById('language').value);
})();

;
(() => {
  const root=document.querySelector('.device-showcase');
  if(!root)return;
  const words={
    zh:{devicesTitle:"휴대폰, iPad, 컴퓨터.",devicesDesc:"휴대폰과 iPad에서는 앱을, 컴퓨터에서는 웹사이트와 예약 안내를 살펴보세요.",devicesSwitch:"컴퓨터 화면",devicesBooking:"예약 안내",devicesPosts:"홍보 게시물",devicesSocial:"SNS",devicesShops:"매장 소개"},
    ja:{devicesTitle:'スマホも、iPadも、パソコンも。',devicesDesc:'スマホとiPadでアプリを。パソコンではWebサイトや予約ガイドを。',devicesSwitch:'パソコンの画面',devicesBooking:'予約ガイド',devicesPosts:'紹介コンテンツ',devicesSocial:"공식 소셜 미디어",devicesShops:'お店の課題'}
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
 const config={"zh": {"path": "", "language": "zh-Hant", "title": "BookingYou | 소규모 매장 예약 관리 앱", "description": "BookingYou는 뷰티, 헤어, 네일, 개인 트레이닝, 교육, 반려동물 미용 매장의 예약 관리를 돕습니다. 링크나 QR 코드를 공유하면 고객은 앱을 내려받지 않고 웹 예약을 신청할 수 있으며, 매장 확인 후 확정됩니다. 기본 기능 무료, 예약 수수료 없음.", "keyword": "소규모 매장 예약 관리 시스템", "about": "BookingYou는 예약제로 운영하는 소규모 매장을 위한 예약 관리 앱입니다. 뷰티, 헤어, 네일, 개인 트레이닝, 교육, 반려동물 미용에 적합합니다. 매장은 캘린더, 대리 예약, 일정 변경, 알림을 관리할 수 있습니다. 고객이 링크나 QR 코드로 웹 예약을 신청하면 매장 확인 후 확정됩니다. 기본 기능은 무료이며 예약 수수료는 없습니다."}, "ja": {"path": "ja/", "language": "ja", "title": "BookingYou｜小さなお店の予約管理アプリ・基本機能無料", "description": "美容室・ネイルサロン・パーソナルジム・教室・ペットサロンの予約管理に。予約リンクやQRコードで、お客様はアプリ不要で予約を申し込み、お店の確認後に確定。基本機能無料、予約手数料なし。", "keyword": "小さなお店の予約管理アプリ", "about": "BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。"}},translations={"zh": {"nav1": "BookingYou 소개", "nav2": "기능 소개", "guideScreens": "앱 화면", "guidePosts": "SNS 게시물", "nav3": "요금", "nav4": "자주 묻는 질문", "start": "무료로 시작하기", "eyebrow": "독립 매장을 위한 예약 관리", "hero1": "예약을 더 간편하게.", "hero2": "고객을 위한 시간을 더.", "heroDesc": "고객은 시간을 선택하고 매장은 하루 일정을 간편하게 관리하세요. 전화, 메시지, 방문 예약을 하나의 캘린더에 모으세요.", "promise1": "기본 기능 무료", "promise2": "수수료 없음", "promise3": "iOS・Android・Web", "seeHow": "사용 방법 보기", "heroNote": "고객은 앱을 내려받지 않고도 웹 예약을 신청할 수 있습니다.", "float": "예약은 고객이, 서비스는 당신이.", "trust": "정성으로 운영하는 모든 예약제 소규모 매장을 위해", "ind1": "뷰티 · 헤어", "ind2": "네일 스튜디오", "ind3": "개인 트레이너", "ind4": "개인 지도 · 수업", "ind5": "반려동물 미용", "industryScope": "위 업종은 예약 서비스의 대표적인 예입니다. BookingYou는 예약이 필요한 다양한 사업에 활용할 수 있으며, 소규모 매장과 전문 서비스 업체가 규모에 맞게 유연하게 예약을 관리하도록 돕습니다.", "newsBadge": "웹 예약", "news": "링크 하나면 고객이 브라우저에서 예약할 수 있습니다.", "galleryTitle": "매장 찾기부터 예약 관리까지, 각 화면을 살펴보세요.", "galleryDesc": "서비스 찾기, 시간 선택, 예약 링크 공유 등 BookingYou 앱 소개 이미지를 살펴보세요. 이미지를 누르면 자세히 확대할 수 있습니다.", "webGuide": "앱 없이 예약하는 방법", "customerTab": "고객 예약 · 링크 공유", "merchantTab": "매장 일상 관리", "galleryNote": "앱 소개용 이미지입니다. 매장, 날짜, 금액은 예시이며 실제 화면은 사용 중인 앱을 기준으로 합니다.", "yuLabel": "U의 작은 안내", "yuScreenTitle": "더 자세히 보고 싶다면 화면을 눌러 보세요.", "yuScreenBody": "앱 화면을 확대하거나 ‘매장 일상 관리’로 전환해 예약 시간대, 영업시간, 언어 설정을 살펴보세요.", "about1": "우리 매장의 모든 예약을,", "about2": "명확하게 정리하세요.", "aboutDesc": "BookingYou는 예약제로 운영하는 소규모 매장을 위한 예약 관리 앱입니다. 뷰티, 헤어, 네일, 개인 트레이닝, 교육, 반려동물 미용에 적합합니다. 매장은 캘린더, 대리 예약, 일정 변경, 알림을 관리할 수 있습니다. 고객이 링크나 QR 코드로 웹 예약을 신청하면 매장 확인 후 확정됩니다. 기본 기능은 무료이며 예약 수수료는 없습니다.", "point1": "고객이 언제든 예약을 신청하도록", "f1a": "매장 전용 링크 하나로,", "f1b": "온라인 예약 창구가 됩니다.", "f1desc": "매장 링크나 QR 코드를 공유하세요. 고객은 앱 없이 브라우저에서 서비스, 날짜, 시간을 선택할 수 있습니다. 웹 예약은 매장에서 확인한 후 확정됩니다.", "f1link": "나만의 예약 창구 만들기", "point2": "모든 예약을 한눈에", "f2a": "전화, 방문, 온라인 예약을,", "f2b": "하나의 캘린더로 모든 일정을 정리하세요.", "f2desc": "전화와 방문 고객의 예약을 직접 추가하고 온라인 예약과 함께 관리하세요. 시간이 바뀌면 취소 후 재등록할 필요 없이 일정을 변경하면 됩니다.", "f2link": "매일의 예약을 한곳에서 관리", "point3": "운영 방식은 직접 정하세요", "f3a": "고객을 맞이할 시간과 쉴 시간,", "f3b": "나의 업무 흐름에 맞게.", "f3desc": "영업시간, 휴무일, 예약을 받지 않을 시간을 설정하세요. 앱 예약은 시간대별로 즉시 확정 또는 매장 승인 방식을 선택해 실제 일과에 맞출 수 있습니다.", "f3link": "다양한 활용 방법 보기", "yuBookingTitle": "고객이 신청한 후에도 매장 확인이 필요합니다.", "yuBookingBody": "웹 예약은 항상 매장 확인 후 확정됩니다. 앱 예약은 시간대별로 즉시 확정 또는 매장 승인 방식을 설정할 수 있습니다.", "scenarioHeading": "우리 매장에 맞는 예약 운영.", "scenarioIntro": "업종을 선택해 고객 예약부터 매일의 업무 일정까지 BookingYou를 어떻게 활용할 수 있는지 알아보세요.", "allIndustries": "전체 12개 업종 보기", "scenarioBeauty": "뷰티 케어", "scenarioNails": "네일 스튜디오", "scenarioFitness": "퍼스널 트레이닝", "scenarioTeaching": "수업", "scenarioExample": "예약 운영 예시", "scenarioPending": "웹 신청 후 매장 확인 대기", "scenarioGuide": "고객 예약 방법 보기", "scenarioNote": "활용 상황을 설명하기 위한 예시입니다. 서비스, 시간, 소요 시간은 참고용이며 실제 예약 가능 여부는 매장 설정에 따릅니다.", "yuWorkTitle": "전화와 방문 예약도 함께 기록하세요.", "yuWorkBody": "전화, 메시지, 방문 예약을 받으면 매장에서 직접 기록을 추가하고 온라인 예약과 하나의 캘린더에서 관리할 수 있습니다.", "factUnit1": "수수료", "fact1": "고객이 매장에 직접 결제", "free": "무료", "fact2": "예약 관리 기본 기능", "factUnit3": "종", "fact3": "화면 언어", "postsTitle": "매장 이야기와 예약 방법을 함께 나눠요.", "postsDesc": "예약 방법, 기능 소개, 여러 지역 매장의 일상을 담은 소셜 홍보 이미지 140장입니다. 언어로 필터링하고 이미지를 눌러 전체 크기로 보세요.", "filterLabel": "게시물 언어", "allPosts": "모든 언어", "loadMore": "게시물 더 보기", "postsNote": "기존 게시물 이미지를 모았습니다. 원문, 댓글, 최신 소식은 공식 소셜 미디어 계정에서 확인하세요.", "faqTitle": "자주 묻는 질문", "q1": "기본 기능이 정말 무료인가요?", "a1": "예약 페이지, 캘린더, 대리 예약, 일정 변경, 알림, 승인 규칙 등 기본 기능은 무료입니다. Pro는 기획 중이며 아직 출시되지 않았고 가격도 정해지지 않았습니다.", "q2": "고객도 앱을 내려받아야 하나요?", "a2": "아니요. 공유한 링크나 QR 코드로 브라우저에서 바로 예약을 신청할 수 있습니다. 다만 매장에 따라 앱 예약만 받도록 설정할 수 있습니다.", "q3": "웹 예약은 자동으로 확정되나요?", "a3": "웹 예약은 매장에서 확인해야 확정됩니다. 앱 예약은 시간대별로 즉시 확정 또는 매장 승인 방식을 선택할 수 있습니다.", "cta1": "예약은 체계적으로,", "cta2": "매장 운영을 더 여유롭게.", "ctaDesc": "오늘부터 매장에 여유 시간을 더하세요.", "downloadNote": "iOS 및 Android 출시 · 기본 기능 무료", "devicesTitle": "휴대폰, iPad, 컴퓨터.", "devicesDesc": "휴대폰과 iPad에서는 앱을, 컴퓨터에서는 웹사이트와 예약 안내를 살펴보세요.", "devicesSwitch": "컴퓨터 화면", "devicesBooking": "예약 안내", "devicesPosts": "홍보 게시물", "devicesSocial": "SNS", "devicesShops": "매장 소개", "privacy": "개인정보처리방침", "terms": "이용약관", "preview": "設計預覽 V12 · 未發佈", "guideWeb": "예약 안내", "guideFeatures": "전체 기능", "guideWho": "활용 가능한 업종", "closeImage": "이미지 닫기", "previousImage": "이전 이미지", "nextImage": "다음 이미지", "zoom": "확대해서 보기", "post": "소셜 미디어 게시물", "shown": "표시됨", "of": "／", "unit": "장", "chapterReading": "읽기 진행률", "chapterDownload": "앱 다운로드", "chapterLabel": "페이지 목차", "scenarioTabLabel": "업종별 활용 상황 선택", "scenarioChanged": "전환됨:", "progressText": "읽음", "seoKeyword": "소규모 매장 예약 관리 시스템"}, "ja": {"nav1": "BookingYouについて", "nav2": "기능 소개", "nav3": "요금", "nav4": "よくあるご質問", "start": "無料ではじめる", "eyebrow": "ひとりで営むお店のための予約管理", "hero1": "予約を、もっとかんたんに。", "hero2": "お客様との時間を、もっと大切に。", "heroDesc": "お客様は自分で予約、お店は一日を管理。電話・来店・ネット予約を、ひとつのカレンダーに。", "promise1": "基本機能は無料", "promise2": "予約手数料なし", "promise3": "iOS・Android・Web", "seeHow": "使い方を見る", "heroNote": "お客様はアプリなしで、ブラウザから予約できます。", "phoneLabel": "空いている時間を選んで、お店に予約。", "float": "予約はお客様に。目の前のサービスに集中。", "trust": "予約でつながる、小さなお店の毎日に。", "ind1": "美容室・理容室", "ind2": "ネイルサロン", "ind3": "パーソナルジム", "ind4": "教室・レッスン", "ind5": "ペットサロン", "newsBadge": "ウェブ予約", "news": "リンクひとつで、お客様はブラウザから予約できます。", "about1": "小さなお店の予約を、", "about2": "ひとつに、わかりやすく。", "aboutDesc": "BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。", "point1": "いつでも予約を受け付けたい", "f1a": "お店のリンクが、", "f1b": "あなたの予約受付になります。", "f1desc": "予約リンクやQRコードを共有するだけ。お客様はアプリなしで、サービス・日付・時間を選べます。ウェブ予約は、お店の確認後に確定します。", "f1link": "お店の予約受付をはじめる", "point2": "すべての予約を、ひと目で把握したい", "f2a": "電話も、来店も、ネットも。", "f2b": "ひとつのカレンダーで管理。", "f2desc": "電話や来店で受けた予約も、お店から登録。ネット予約と一緒に管理できます。日時変更も、予約を取り消さずにそのまま変更できます。", "f2link": "一日の予約をまとめて管理", "point3": "お店に合った予約ルールにしたい", "f3a": "予約を受ける時間も、休む時間も。", "f3b": "お店のペースで決められます。", "f3desc": "営業時間、定休日、予約を受けない時間を設定。アプリ内予約は、時間帯ごとに即時確定かお店の承認制かを選べます。", "f3link": "使い方をもっと知る", "factUnit1": "수수료", "fact1": "お支払いはお店に直接", "free": "무료", "fact2": "予約管理の基本機能", "factUnit3": "언어", "fact3": "お店に合った表示言語", "faqTitle": "よくあるご質問", "q1": "基本機能は本当に無料ですか？", "a1": "予約ページ、カレンダー、代理予約、日時変更、リマインダー、承認ルールなどの基本機能は無料です。Proプランは計画中で、まだ提供しておらず、料金も未定です。", "q2": "お客様もアプリを入れる必要がありますか？", "a2": "必要ありません。お店のリンクやQRコードからブラウザで予約できます。お店の設定によっては、アプリ内予約のみを受け付ける場合もあります。", "q3": "ウェブ予約は自動で確定しますか？", "a3": "ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。", "cta1": "予約に、ゆとりを。", "cta2": "お店の毎日に、笑顔を。", "ctaDesc": "今日から、小さなお店の時間をもっと大切に。", "downloadNote": "iOS・Androidで配信中 · 基本機能無料", "privacy": "プライバシーポリシー", "terms": "이용약관", "preview": "デザインプレビュー V12 · 未公開", "industryScope": "掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。", "galleryTitle": "お店探しから予約管理まで、画面でわかりやすく。", "galleryDesc": "サービス選び、空き時間の確認、予約リンクの共有。BookingYouのアプリ紹介画像を、タップして拡大できます。", "webGuide": "アプリ不要の予約ガイド", "customerTab": "お客様の予約・リンク共有", "merchantTab": "お店の日常管理", "galleryNote": "アプリ紹介用の画像です。店舗、日付、金額は表示例で、実際の画面はご利用中のアプリをご確認ください。", "postsTitle": "小さなお店の日常も、予約のヒントも。SNSでお届け。", "postsDesc": "予約ガイドからお店の日常まで。BookingYouのSNS画像140点をご紹介。言語で絞り込み、タップで拡大できます。", "filterLabel": "投稿の言語", "allPosts": "すべての言語", "loadMore": "もっと見る", "postsNote": "既存の投稿画像を掲載しています。投稿本文、コメント、最新情報は公式SNSアカウントをご覧ください。", "guideScreens": "アプリ画面", "guideWeb": "予約ガイド", "guideFeatures": "すべての機能", "guideWho": "지원 업종", "guidePosts": "소셜 미디어 게시물", "closeImage": "画像を閉じる", "previousImage": "前の画像", "nextImage": "次の画像", "zoom": "拡大する", "post": "소셜 미디어 게시물", "shown": "표시 중", "of": "／", "unit": "건", "scenarioHeading": "お店に合わせた、予約のかたち。", "scenarioIntro": "業種を選んで、お客様の予約から一日の管理まで、BookingYouの使い方をご覧ください。", "allIndustries": "12の業種をすべて見る", "scenarioBeauty": "美容・ケア", "scenarioNails": "ネイルサロン", "scenarioFitness": "パーソナルジム", "scenarioTeaching": "教室・レッスン", "scenarioExample": "予約スケジュールの例", "scenarioPending": "ウェブで送信後、お店の確認を待ちます", "scenarioGuide": "お客様の予約方法を見る", "scenarioNote": "サービス・時間・所要時間は活用例です。実際に予約できる内容は、各店舗の設定によって異なります。", "yuLabel": "Uくんのひとこと", "yuWorkTitle": "電話や来店で受けた予約も、一緒に。", "yuWorkBody": "電話・メッセージ・来店で受けた予約は、お店から登録。ネット予約と同じカレンダーで管理できます。", "yuScreenTitle": "気になる画面は、タップして拡大。", "yuScreenBody": "「お店の日常管理」に切り替えると、予約枠、営業時間、言語設定の紹介画面も確認できます。", "yuBookingTitle": "送信しただけでは、予約はまだ確定しません。", "yuBookingBody": "ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。", "chapterReading": "読書の進み具合", "chapterDownload": "ダウンロード", "chapterLabel": "ページの目次", "scenarioTabLabel": "業種を選択", "scenarioChanged": "選択した業種：", "progressText": "읽음", "devicesTitle": "スマホも、iPadも、パソコンも。", "devicesDesc": "スマホとiPadでアプリを。パソコンではWebサイトや予約ガイドを。", "devicesSwitch": "パソコンの画面", "devicesBooking": "予約ガイド", "devicesPosts": "紹介コンテンツ", "devicesSocial": "공식 소셜 미디어", "devicesShops": "お店の課題", "seoKeyword": "小さなお店の予約管理アプリ"}};
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
