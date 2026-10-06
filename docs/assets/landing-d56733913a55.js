
const assets={"logo": "assets/logo.png", "photo": "preview-assets/hero-salon-v6.webp", "mascot": "assets/yu-kun-wave.png", "slots": "assets/deck-phone-slots.png", "dashboard": "assets/deck-dashboard.png", "hours": "assets/deck-hours.png", "customer": "assets/illustrations/33-customer-using-phone.webp", "owner": "assets/illustrations/34-salon-owner-welcoming.webp", "web1zh": "assets/webbook/zh-HK-1.jpg", "web2zh": "assets/webbook/zh-HK-2.jpg", "web1ja": "assets/webbook/ja-1.jpg", "web2ja": "assets/webbook/ja-2.jpg", "applezh": "assets/badges/apple-zh-hk.svg", "googlezh": "assets/badges/google-zh-tw.png", "appleja": "assets/badges/apple-ja-jp.svg", "googleja": "assets/badges/google-ja.png"};
const copy={zh:{},ja:{nav1:'BookingYouについて',nav2:'機能紹介',nav3:'料金',nav4:'よくあるご質問',start:'無料ではじめる',eyebrow:'ひとりで営むお店のための予約管理',hero1:'予約を、もっとかんたんに。',hero2:'お客様との時間を、もっと大切に。',heroDesc:'お客様は自分で予約、お店は一日を管理。電話・来店・ネット予約を、ひとつのカレンダーに。',promise1:'基本機能は無料',promise2:'予約手数料なし',promise3:'iOS・Android',seeHow:'使い方を見る',heroNote:'お客様はアプリなしで、ブラウザから予約できます。',phoneLabel:'空いている時間を選んで、お店に予約。',float:'予約はお客様に。目の前のサービスに集中。',trust:'予約でつながる、小さなお店の毎日に。',ind1:'美容室・理容室',ind2:'ネイルサロン',ind3:'パーソナルジム',ind4:'教室・レッスン',ind5:'ペットサロン',newsBadge:'ウェブ予約',news:'リンクひとつで、お客様はブラウザから予約できます。',about1:'小さなお店の予約を、',about2:'ひとつに、わかりやすく。',aboutDesc:'施術中の電話、あちこちに届くメッセージ。BookingYouなら予約・日程変更・リマインダーをまとめて管理。目の前のお客様に、もっと向き合える毎日へ。',point1:'いつでも予約を受け付けたい',f1a:'お店のリンクが、',f1b:'あなたの予約受付になります。',f1desc:'予約リンクやQRコードを共有するだけ。お客様はアプリなしで、サービス・日付・時間を選べます。ウェブ予約は、お店の確認後に確定します。',f1link:'お店の予約受付をはじめる',point2:'すべての予約を、ひと目で把握したい',f2a:'電話も、来店も、ネットも。',f2b:'ひとつのカレンダーで管理。',f2desc:'電話や来店で受けた予約も、お店から登録。ネット予約と一緒に管理できます。日時変更も、予約を取り消さずにそのまま変更できます。',f2link:'一日の予約をまとめて管理',point3:'お店に合った予約ルールにしたい',f3a:'予約を受ける時間も、休む時間も。',f3b:'お店のペースで決められます。',f3desc:'営業時間、定休日、予約を受けない時間を設定。アプリ内予約は、時間帯ごとに即時確定かお店の承認制かを選べます。',f3link:'使い方をもっと知る',factUnit1:'手数料',fact1:'お支払いはお店に直接',free:'無料',fact2:'予約管理の基本機能',factUnit3:'言語',fact3:'お店に合った表示言語',faqTitle:'よくあるご質問',q1:'基本機能は本当に無料ですか？',a1:'予約ページ、カレンダー、代理予約、日時変更、リマインダー、承認ルールなどの基本機能は無料です。Proプランは計画中で、まだ提供しておらず、料金も未定です。',q2:'お客様もアプリを入れる必要がありますか？',a2:'必要ありません。お店のリンクやQRコードからブラウザで予約できます。お店の設定によっては、アプリ内予約のみを受け付ける場合もあります。',q3:'ウェブ予約は自動で確定しますか？',a3:'ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。',cta1:'予約に、ゆとりを。',cta2:'お店の毎日に、笑顔を。',ctaDesc:'今日から、小さなお店の時間をもっと大切に。',downloadNote:'iOS・Androidで配信中 · 基本機能無料',privacy:'プライバシーポリシー',terms:'利用規約',preview:'デザインプレビュー V10 · 未公開'}};
const images={zh:{web1:'web1zh',web2:'web2zh',apple:'applezh',google:'googlezh'},ja:{web1:'web1ja',web2:'web2ja',apple:'appleja',google:'googleja'}};
Object.assign(copy.zh,{"nav1": "關於 BookingYou", "nav2": "功能介紹", "guideScreens": "App 畫面", "guidePosts": "FB／IG 帖文", "nav3": "收費", "nav4": "常見問題", "start": "免費開始使用", "eyebrow": "為獨立小店而設的預約管理", "hero1": "預約，簡單一點。", "hero2": "時間，留俾客人。", "heroDesc": "客人自己揀時間，店主輕鬆管理全日。將電話、訊息同上門預約，放返同一個日曆。", "promise1": "基本功能免費", "promise2": "零佣金", "promise3": "iOS・Android", "seeHow": "睇下點運作", "heroNote": "客人免下載 App，都可以提交網頁預約。", "float": "客人自己約，你專心做好服務。", "trust": "為每一間用心經營嘅預約制小店而設", "ind1": "美容・美髮", "ind2": "美甲工作室", "ind3": "私人教練", "ind4": "補習・教學", "ind5": "寵物美容", "industryScope": "以上為常見的預約服務行業。BookingYou 同樣適用於各類需要預約安排的業務，讓不同規模的小店及專業服務都能靈活管理預約。", "newsBadge": "網頁預約", "news": "一條連結，客人用瀏覽器就可以預約。", "galleryTitle": "由搵店到管理預約，每個畫面都睇清楚。", "galleryDesc": "睇返 BookingYou 嘅 App 展示圖：搵服務、揀時間、分享預約連結。撳任何圖片，可以放大睇細節。", "webGuide": "客人免 App 預約教學", "customerTab": "客人使用・分享預約", "merchantTab": "商戶日常管理", "galleryNote": "App 展示素材；店舖、日期及金額為畫面示例。實際版面以使用中的 App 為準。", "yuLabel": "U 仔提提你", "yuScreenTitle": "想睇清楚啲？撳一下畫面就得。", "yuScreenBody": "App 畫面可以放大，亦可以切換「商戶日常管理」，睇返時段、營業時間同語言設定。", "about1": "小店嘅每一個預約，", "about2": "都有清楚嘅安排。", "aboutDesc": "BookingYou 係為預約制小店而設嘅預約管理 App，適合美容、美髮、美甲、私人教練、教學及寵物美容。商戶可以管理日曆、代理預約、改期同提醒；客人透過連結或 QR Code 提交網頁預約，經商戶確認後成立。基本功能免費，零預約佣金。", "point1": "讓客人隨時提交預約", "f1a": "一條專屬連結，", "f1b": "就係你嘅網上預約前台。", "f1desc": "分享店舖連結或 QR Code，客人用瀏覽器揀服務、日期同時間，唔使下載 App。網頁預約由你確認後先成立。", "f1link": "開始建立你嘅預約入口", "point2": "所有預約，一眼睇清", "f2a": "電話、上門、網上，", "f2b": "一個日曆，全部安排好。", "f2desc": "幫電話同上門客人加入預約，連同網上預約一齊管理。要改時間，直接改期就得，毋須取消再開新單。", "f2link": "將每日預約集中管理", "point3": "營業節奏，由你決定", "f3a": "幾時接客、幾時休息，", "f3b": "跟返你嘅工作節奏。", "f3desc": "設定營業時間、休息日同保留時段。App 預約可按時段選擇即時確認或商戶審批，配合你每日嘅實際安排。", "f3link": "了解更多使用方式", "yuBookingTitle": "客人提交咗，仲要等你確認。", "yuBookingBody": "網頁預約一律喺商戶確認後先成立。App 內預約就可以按時段，設定即時確認或者商戶審批。", "scenarioHeading": "你嘅小店，你嘅預約節奏。", "scenarioIntro": "揀一個行業，睇下由客人預約到安排每日工作，可以點樣用 BookingYou。", "allIndustries": "查看全部 12 類行業", "scenarioBeauty": "美容護理", "scenarioNails": "美甲工作室", "scenarioFitness": "私人健身", "scenarioTeaching": "教學課堂", "scenarioExample": "預約安排例子", "scenarioPending": "網頁提交後，等候商戶確認", "scenarioGuide": "睇客人點樣預約", "scenarioNote": "以上係使用情境示例；服務、時間及時長只作說明。實際可預約安排，以各商戶設定為準。", "yuWorkTitle": "電話同上門客，都可以一齊記低。", "yuWorkBody": "收到電話、私訊或上門預約後，商戶可以自行加入記錄，同網上預約放喺同一個日曆管理。", "factUnit1": "佣金", "fact1": "客人直接向店舖付款", "free": "免費", "fact2": "預約管理基本功能", "factUnit3": "種", "fact3": "介面語言", "postsTitle": "小店日常、預約教學，一齊分享。", "postsDesc": "預約教學、功能介紹同各地小店日常，集結成 140 張社交宣傳圖。可按語言篩選，撳圖睇完整大圖。", "filterLabel": "帖文語言", "allPosts": "全部語言", "loadMore": "顯示更多帖文", "postsNote": "呢度展示原有帖文圖片；想睇原帖內容、留言及最新動態，可前往官方社交帳號。", "faqTitle": "你可能想知", "q1": "基本功能係咪真係免費？", "a1": "預約頁、日曆、代客預約、改期、提醒及審批規則等基本功能免費。專業版仍在規劃中，尚未推出，定價未定。", "q2": "客人一定要下載 App 嗎？", "a2": "唔使。客人可以用你分享嘅連結或 QR Code，直接喺瀏覽器提交預約；個別店舖可設定只接受 App 內預約。", "q3": "網頁預約會自動確認嗎？", "a3": "網頁預約一律需要店舖確認先成立。App 內預約就可以按時段選擇即時確認或商戶審批。", "cta1": "預約有安排，", "cta2": "做生意更自在。", "ctaDesc": "由今日開始，為你嘅小店多留一點時間。", "downloadNote": "iOS 及 Android 均已上架 · 基本功能免費", "devicesTitle": "電話、iPad 同電腦。", "devicesDesc": "電話同 iPad 睇 App，電腦瀏覽網站同預約教學。", "devicesSwitch": "電腦畫面", "devicesBooking": "預約教學", "devicesPosts": "宣傳帖文", "devicesSocial": "社交平台", "devicesShops": "小店介紹", "privacy": "私隱政策", "terms": "服務條款", "preview": "設計預覽 V12 · 未發佈", "guideWeb": "預約教學", "guideFeatures": "完整功能", "guideWho": "適用行業", "closeImage": "關閉圖片", "previousImage": "上一張", "nextImage": "下一張", "zoom": "放大查看", "post": "社交帖文", "shown": "已顯示", "of": "／", "unit": "張", "chapterReading": "閱讀進度", "chapterDownload": "下載 App", "chapterLabel": "頁面章節", "scenarioTabLabel": "選擇行業情境", "scenarioChanged": "已切換至：", "progressText": "已閱讀", "seoKeyword": "小店預約管理系統"});
document.querySelectorAll('[data-asset]').forEach(el=>el.src=assets[el.dataset.asset]);
function setLanguage(lang){if(!copy[lang])lang='zh';document.documentElement.lang=lang==='ja'?'ja':'zh-Hant';document.getElementById('language').value=lang;document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=copy[lang][el.dataset.i18n]||copy.zh[el.dataset.i18n]);document.querySelectorAll('[data-local-asset]').forEach(el=>el.src=assets[images[lang][el.dataset.localAsset]]);document.querySelector('[data-page]').href='https://bookingyou.app/'+(lang==='ja'?'ja/':'')+'about/';document.querySelector('.menu-toggle').setAttribute('aria-label',lang==='ja'?'メニュー':'開啟選單');document.querySelector('.nav').setAttribute('aria-label',lang==='ja'?'メインメニュー':'主選單');document.title=lang==='ja'?'BookingYou · ホームページデザインプレビュー':'BookingYou · 首頁設計預覽';}
setLanguage(document.documentElement.lang==='ja'?'ja':'zh');
document.getElementById('language').addEventListener('change',e=>setLanguage(e.target.value));
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menu.addEventListener('click',()=>{let open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);menu.textContent=open?'×':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.textContent='☰';}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.textContent='☰';}});

;
const postManifest = [{"id": "001", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "002", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "003", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "004", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "005", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "006", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "007", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "008", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "009", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "010", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "011", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "012", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "013", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "014", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "015", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "016", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "017", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "018", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "019", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "020", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "021", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "022", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "023", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "024", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "025", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "026", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "027", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "028", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "029", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "030", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "031", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "032", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "033", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "034", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "035", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "036", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "037", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "038", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "039", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "040", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "041", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "042", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "043", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "044", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "045", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "046", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "047", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "048", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "049", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "050", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "051", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "052", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "053", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "054", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "055", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "056", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "057", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "058", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "059", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "060", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "061", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "062", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "063", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "064", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "065", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "066", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "067", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "068", "w": 941, "h": 1672, "lang": "ja"}, {"id": "069", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "070", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "071", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "072", "w": 941, "h": 1672, "lang": "ja"}, {"id": "073", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "074", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "075", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "076", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "077", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "078", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "079", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "080", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "081", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "082", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "083", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "084", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "085", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "086", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "087", "w": 1080, "h": 1919, "lang": "ja"}, {"id": "088", "w": 1080, "h": 1919, "lang": "ja"}, {"id": "089", "w": 1080, "h": 1350, "lang": "th"}, {"id": "090", "w": 1080, "h": 1350, "lang": "th"}, {"id": "091", "w": 1080, "h": 1350, "lang": "th"}, {"id": "092", "w": 1080, "h": 1350, "lang": "th"}, {"id": "093", "w": 1080, "h": 1350, "lang": "th"}, {"id": "094", "w": 1080, "h": 1350, "lang": "th"}, {"id": "095", "w": 1080, "h": 1350, "lang": "th"}, {"id": "096", "w": 1080, "h": 1350, "lang": "th"}, {"id": "097", "w": 1080, "h": 1350, "lang": "th"}, {"id": "098", "w": 1080, "h": 1350, "lang": "th"}, {"id": "099", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "100", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "101", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "102", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "103", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "104", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "105", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "106", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "107", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "108", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "109", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "110", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "111", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "112", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "113", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "114", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "115", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "116", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "117", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "118", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "119", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "120", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "121", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "122", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "123", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "124", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "125", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "126", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "127", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "128", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "129", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "130", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "131", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "132", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "133", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "134", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "135", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "136", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "137", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "138", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "139", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "140", "w": 848, "h": 1072, "lang": "ja"}];
const extraCopy = {
 zh:{industryScope:'以上為常見的預約服務行業。BookingYou 同樣適用於各類需要預約安排的業務，讓不同規模的小店及專業服務都能靈活管理預約。',galleryTitle:'由搵店到管理預約，每個畫面都睇清楚。',galleryDesc:'睇返 BookingYou 嘅 App 展示圖：搵服務、揀時間、分享預約連結。撳任何圖片，可以放大睇細節。',webGuide:'客人免 App 預約教學',customerTab:'客人使用・分享預約',merchantTab:'商戶日常管理',galleryNote:'App 展示素材；店舖、日期及金額為畫面示例。實際版面以使用中的 App 為準。',postsTitle:'小店日常、預約教學，一齊分享。',postsDesc:'預約教學、功能介紹同各地小店日常，集結成 140 張社交宣傳圖。可按語言篩選，撳圖睇完整大圖。',filterLabel:'帖文語言',allPosts:'全部語言',loadMore:'顯示更多帖文',postsNote:'呢度展示原有帖文圖片；想睇原帖內容、留言及最新動態，可前往官方社交帳號。',guideScreens:'App 畫面',guideWeb:'預約教學',guideFeatures:'完整功能',guideWho:'適用行業',guidePosts:'FB／IG 帖文',closeImage:'關閉圖片',previousImage:'上一張',nextImage:'下一張',zoom:'放大查看',post:'社交帖文',shown:'已顯示',of:'／',unit:'張'},
 ja:{industryScope:'掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。',galleryTitle:'お店探しから予約管理まで、画面でわかりやすく。',galleryDesc:'サービス選び、空き時間の確認、予約リンクの共有。BookingYouのアプリ紹介画像を、タップして拡大できます。',webGuide:'アプリ不要の予約ガイド',customerTab:'お客様の予約・リンク共有',merchantTab:'お店の日常管理',galleryNote:'アプリ紹介用の画像です。店舗、日付、金額は表示例で、実際の画面はご利用中のアプリをご確認ください。',postsTitle:'小さなお店の日常も、予約のヒントも。SNSでお届け。',postsDesc:'予約ガイドからお店の日常まで。BookingYouのSNS画像140点をご紹介。言語で絞り込み、タップで拡大できます。',filterLabel:'投稿の言語',allPosts:'すべての言語',loadMore:'もっと見る',postsNote:'既存の投稿画像を掲載しています。投稿本文、コメント、最新情報は公式SNSアカウントをご覧ください。',guideScreens:'アプリ画面',guideWeb:'予約ガイド',guideFeatures:'すべての機能',guideWho:'対応業種',guidePosts:'SNS投稿',closeImage:'画像を閉じる',previousImage:'前の画像',nextImage:'次の画像',zoom:'拡大する',post:'SNS投稿',shown:'表示中',of:'／',unit:'件'}
};
for(const lang of ['zh','ja'])Object.assign(copy[lang],extraCopy[lang]);
const appTexts={
 zh:[['搵到啱你嘅店','按地區同服務類型搵店，先睇相片同服務資料，再選擇預約。'],['服務、時長同價錢','進入店舖頁面，了解提供嘅服務、每項時長同價錢。'],['揀日子，再揀時間','查看可預約日期同空檔，按時段規則即時確認或等店主審批。'],['店舖專屬 QR 卡','客人掃 QR Code 就可以打開預約頁，適合放喺店內同名片。'],['一撳分享預約連結','將連結放喺 WhatsApp、Instagram、Facebook 或網站，方便客人返嚟約。']],
 ja:[['自分に合うお店を探す','地域やサービスから探し、写真とサービス内容を見て予約へ進めます。'],['サービス・時間・料金','お店のページでサービス一覧、所要時間、料金をまとめて確認できます。'],['日付と空き時間を選ぶ','予約可能な日時を選択。時間帯の設定により即時確定、またはお店の承認後に確定します。'],['お店専用のQRカード','QRコードから予約ページへ。店内や名刺に載せて、予約の入口をつくれます。'],['予約リンクを共有','メッセージやInstagram、Facebook、ホームページにリンクを掲載できます。']]
};
const merchantTexts={
 zh:[['商戶管理首頁','集中查看店舖狀態同管理入口，將電話、上門同網上預約記錄喺同一處。'],['預約時段','客人查看日期同可預約時間；商戶按實際營運管理可用時段。'],['營業及審批設定','設定開放時間、休息日同確認規則，App 預約按時段執行。'],['8 種介面語言','支援繁中、英文、簡中、日文、韓文、馬來文、泰文及越南文，按需要切換。']],
 ja:[['店舗の管理画面','お店の状況と管理メニューを確認。電話・来店・ネット予約を一か所で管理します。'],['予約できる時間帯','日付と空き時間を確認。お店の営業時間に合わせて予約枠を管理できます。'],['営業時間と承認ルール','営業時間、休業日、確認方法を設定。アプリ予約には時間帯ごとのルールを適用します。'],['8言語の表示に対応','繁体字中国語、英語、簡体字中国語、日本語、韓国語、マレー語、タイ語、ベトナム語に切り替えられます。']]
};
let activeScreen='customer',postLimit=12,viewerItems=[],viewerIndex=0;
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
document.getElementById('post-filter').addEventListener('change',()=>{postLimit=12;renderPosts();});
document.getElementById('more-posts').addEventListener('click',()=>{postLimit+=12;renderPosts();});
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
  const text = {
    zh: {
      scenarioHeading:'你嘅小店，你嘅預約節奏。',scenarioIntro:'揀一個行業，睇下由客人預約到安排每日工作，可以點樣用 BookingYou。',allIndustries:'查看全部 12 類行業',scenarioBeauty:'美容護理',scenarioNails:'美甲工作室',scenarioFitness:'私人健身',scenarioTeaching:'教學課堂',scenarioExample:'預約安排例子',scenarioPending:'網頁提交後，等候商戶確認',scenarioGuide:'睇客人點樣預約',scenarioNote:'以上係使用情境示例；服務、時間及時長只作說明。實際可預約安排，以各商戶設定為準。',yuLabel:'U 仔提提你',yuWorkTitle:'電話同上門客，都可以一齊記低。',yuWorkBody:'收到電話、私訊或上門預約後，商戶可以自行加入記錄，同網上預約放喺同一個日曆管理。',yuScreenTitle:'想睇清楚啲？撳一下畫面就得。',yuScreenBody:'App 畫面可以放大，亦可以切換「商戶日常管理」，睇返時段、營業時間同語言設定。',yuBookingTitle:'客人提交咗，仲要等你確認。',yuBookingBody:'網頁預約一律喺商戶確認後先成立。App 內預約就可以按時段，設定即時確認或者商戶審批。',chapterReading:'閱讀進度',chapterDownload:'下載 App',chapterLabel:'頁面章節',scenarioTabLabel:'選擇行業情境',scenarioChanged:'已切換至：',progressText:'已閱讀'
    },
    ja: {
      scenarioHeading:'お店に合わせた、予約のかたち。',scenarioIntro:'業種を選んで、お客様の予約から一日の管理まで、BookingYouの使い方をご覧ください。',allIndustries:'12の業種をすべて見る',scenarioBeauty:'美容・ケア',scenarioNails:'ネイルサロン',scenarioFitness:'パーソナルジム',scenarioTeaching:'教室・レッスン',scenarioExample:'予約スケジュールの例',scenarioPending:'ウェブで送信後、お店の確認を待ちます',scenarioGuide:'お客様の予約方法を見る',scenarioNote:'サービス・時間・所要時間は活用例です。実際に予約できる内容は、各店舗の設定によって異なります。',yuLabel:'Uくんのひとこと',yuWorkTitle:'電話や来店で受けた予約も、一緒に。',yuWorkBody:'電話・メッセージ・来店で受けた予約は、お店から登録。ネット予約と同じカレンダーで管理できます。',yuScreenTitle:'気になる画面は、タップして拡大。',yuScreenBody:'「お店の日常管理」に切り替えると、予約枠、営業時間、言語設定の紹介画面も確認できます。',yuBookingTitle:'送信しただけでは、予約はまだ確定しません。',yuBookingBody:'ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。',chapterReading:'読書の進み具合',chapterDownload:'ダウンロード',chapterLabel:'ページの目次',scenarioTabLabel:'業種を選択',scenarioChanged:'選択した業種：',progressText:'読了'
    }
  };
  for (const lang of ['zh','ja']) Object.assign(copy[lang],text[lang]);
  const scenarios = {
    beauty: {
      image:'assets/industries/beauty.webp',label:'scenarioBeauty',kicker:'BEAUTY & CARE',
      zh:{title:'專心做護理，客人自己揀時間。',description:'將預約連結放喺社交簡介，客人先睇服務同時長，再提交合適時間。你喺接待空檔確認安排。',service:'面部護理',duration:'60 分鐘 · 一對一服務',benefits:[['先揀服務，再揀時段','列明療程、價錢同所需時間，方便客人揀啱服務。'],['電話預約一齊管理','幫電話或上門客人加入預約，集中睇每日安排。'],['休息時間預先留好','設定營業時間同休息日，配合店舖實際接待節奏。']]},
      ja:{title:'施術に集中。予約の時間は、お客様が選べます。',description:'SNSのプロフィールに予約リンクを掲載。お客様はメニューと所要時間を確認して送信し、お店が合間に予約を確認します。',service:'フェイシャルケア',duration:'60分 · マンツーマン',benefits:[['メニューから予約へ','施術内容・料金・所要時間を載せて、選びやすい予約ページに。'],['電話で受けた予約も登録','電話や来店で受けた予約も、お店から同じカレンダーに追加。'],['お休みもあらかじめ設定','営業時間と休業日を設定して、お店のペースに合わせて管理。']]}
    },
    nails: {
      image:'assets/illustrations/34-salon-owner-welcoming.webp',label:'scenarioNails',kicker:'NAILS & SMALL STUDIOS',
      zh:{title:'美甲款式各有時長，預約先安排好。',description:'單色、造型款式同卸甲服務分開列明，客人預約前了解所需時間，方便你安排每一節接待。',service:'單色凝膠美甲',duration:'90 分鐘 · 美甲服務',benefits:[['清楚列出服務內容','為唔同美甲服務填寫價錢同時長，減少反覆問資料。'],['分享一條店舖連結','將連結放喺 Instagram 或訊息，客人直接打開預約頁。'],['需要改期，直接調整','喺原有預約改時間，毋須取消後重新開一張預約。']]},
      ja:{title:'メニューごとの時間を、予約前にわかりやすく。',description:'ワンカラー、デザイン、オフなどをメニューごとに掲載。お客様が所要時間を確認して予約でき、次の施術も予定しやすくなります。',service:'ワンカラージェル',duration:'90分 · ネイルケア',benefits:[['内容と所要時間を掲載','メニューごとに料金と時間を登録して、予約前の確認をスムーズに。'],['リンクひとつでご案内','Instagramやメッセージに予約リンクを載せて、予約ページへ。'],['予定が変わったら日時変更','元の予約から日時を変更。取り消して作り直す必要はありません。']]}
    },
    fitness: {
      image:'assets/industries/fitness.webp',label:'scenarioFitness',kicker:'FITNESS & PERSONAL TRAINING',
      zh:{title:'一節訓練，一個清楚嘅安排。',description:'將可接堂時間整理好，學員按空檔提交一對一訓練預約。電話約好嘅堂亦可以由你加入。',service:'私人健身訓練',duration:'60 分鐘 · 一對一課堂',benefits:[['開放合適嘅授課時段','按實際教學時間同休息日，管理可供預約嘅空檔。'],['今日有幾多堂，一眼睇到','網上預約同手動加入嘅記錄，喺同一個日曆查看。'],['按時段設定確認方式','App 內預約可按時段選即時確認或審批；網頁預約仍需商戶確認。']]},
      ja:{title:'一回のトレーニングを、ひとつの予定に。',description:'受付可能な時間を設定し、生徒さんが空き枠からマンツーマンの予約を送信。電話で決まったレッスンも登録できます。',service:'パーソナルトレーニング',duration:'60分 · マンツーマン',benefits:[['指導できる時間を公開','営業時間と休業日に合わせて、予約を受け付ける枠を管理。'],['今日のレッスンを一覧で','ネット予約と手動で登録した予定を、同じカレンダーで確認。'],['時間帯ごとに承認方法を設定','アプリ予約は即時確定か承認制を選択。ウェブ予約はお店の確認後に確定。']]}
    },
    teaching: {
      image:'assets/industries/education.webp',label:'scenarioTeaching',kicker:'LESSONS & LEARNING',
      zh:{title:'由第一堂體驗，到每一次上堂。',description:'將體驗課同個別指導分開列出，學生或家長睇清楚內容再選時間。你集中整理授課日程。',service:'個別體驗課',duration:'45 分鐘 · 個別指導',benefits:[['課堂內容先講清楚','列出課堂名稱、價錢同所需時間，方便學生預約前了解。'],['一掃就打開預約頁','將店舖 QR Code 放喺介紹卡或門口，方便學生同家長進入。'],['有變動就直接改期','喺原有預約調整日期同時間，整理每堂最新安排。']]},
      ja:{title:'はじめての体験から、日々のレッスンまで。',description:'体験レッスンや個別指導をメニューに掲載。生徒さんや保護者が内容を確認して日時を選び、先生は予定をまとめて管理できます。',service:'個別体験レッスン',duration:'45分 · 個別指導',benefits:[['レッスンの内容を明確に','名称・料金・所要時間を掲載し、予約前に必要な情報を案内。'],['QRコードから予約ページへ','案内カードや教室の入口に、お店専用のQRコードを掲載。'],['変更があれば、その予約から','元の予約の日時を変更して、最新のレッスン予定を管理。']]}
    }
  };
  const panel=document.getElementById('scenario-panel');
  const tablist=document.querySelector('.scenario-tabs');
  const tabs=[...tablist.querySelectorAll('[role="tab"]')];
  let selectedScenario='beauty', switchTimer;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  function renderScenario(animate=false,announce=false){
    const lang=langNow(),item=scenarios[selectedScenario],content=item[lang];
    tabs.forEach(tab=>{const active=tab.dataset.scenario===selectedScenario;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});
    panel.setAttribute('aria-labelledby','scenario-tab-'+selectedScenario);
    panel.dataset.theme=selectedScenario;
    const illustration=document.getElementById('scenario-image');
    illustration.src=item.image;illustration.alt=text[lang][item.label];
    document.getElementById('scenario-kicker').textContent=item.kicker;
    for(const key of ['title','description','service','duration'])document.getElementById('scenario-'+key).textContent=content[key];
    const list=document.getElementById('scenario-benefits');list.replaceChildren();
    content.benefits.forEach(([title,body])=>{const li=document.createElement('li'),strong=document.createElement('strong'),span=document.createElement('span');strong.textContent=title;span.textContent=body;li.append(strong,span);list.append(li);});
    clearTimeout(switchTimer);panel.classList.remove('is-switching');
    if(animate&&!motion.matches){void panel.offsetWidth;panel.classList.add('is-switching');switchTimer=setTimeout(()=>panel.classList.remove('is-switching'),350);}
    if(announce)document.getElementById('scenario-announcement').textContent=text[lang].scenarioChanged+text[lang][item.label];
    else document.getElementById('scenario-announcement').textContent='';
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>{if(selectedScenario===tab.dataset.scenario)return;selectedScenario=tab.dataset.scenario;renderScenario(true,true);});
    tab.addEventListener('keydown',event=>{
      let next;
      if(event.key==='ArrowRight')next=(index+1)%tabs.length;
      else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=tabs.length-1;
      else return;
      event.preventDefault();tabs[next].focus({preventScroll:true});tabs[next].click();
    });
  });
  tablist.hidden=false;

  // Hide only off-screen items, once an observer is ready. Content remains visible without JS.
  let revealObserver;
  const revealSelector='.screen-item,.feature-card,.ps-card,.industry-card,.post-card,.restored-start .card,.scenario-panel,.yu-tip,.posters>div,.wb-col';
  function reveal(element){element.classList.remove('reveal-pending');element.classList.add('is-revealed');revealObserver?.unobserve(element);}
  if('IntersectionObserver' in window){
    revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)reveal(entry.target);}),{rootMargin:'0px 0px 24px 0px',threshold:.01});
  }
  function watchReveals(root=document){
    if(!revealObserver)return;
    root.querySelectorAll(revealSelector).forEach((element,index)=>{
      if(element.classList.contains('reveal-item'))return;
      element.classList.add('reveal-item');
      element.style.setProperty('--reveal-delay',`${index%3*45}ms`);
      if(motion.matches||element.getBoundingClientRect().top<innerHeight+24){reveal(element);return;}
      element.classList.add('reveal-pending');revealObserver.observe(element);
    });
  }
  document.addEventListener('focusin',event=>{const item=event.target.closest('.reveal-pending');if(item)reveal(item);});
  motion.addEventListener('change',()=>{if(motion.matches)document.querySelectorAll('.reveal-pending').forEach(reveal);});
  const galleryObserver=new MutationObserver(records=>records.forEach(record=>watchReveals(record.target)));
  for(const id of ['screen-gallery','post-grid'])galleryObserver.observe(document.getElementById(id),{childList:true});

  const previousSetLanguage=setLanguage;
  setLanguage=function(lang){
    previousSetLanguage(lang);renderScenario();
    const t=text[langNow()];tablist.setAttribute('aria-label',t.scenarioTabLabel);
    document.querySelector('.screen-tabs').setAttribute('aria-label',langNow()==='ja'?'画面の種類':'畫面類別');
    watchReveals();
  };
  setLanguage(document.getElementById('language').value);
})();

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
    const title=lang==='ja'?(isDashboard?'店舗の管理画面':'予約できる時間帯'):(isDashboard?'商戶管理首頁':'預約時段');
    openViewer([{src:assets[element.dataset.heroScreen],title}],0);
  });});
  const resize=()=>pair.style.setProperty('--pair-scale',String(pair.clientWidth/1254));
  if('ResizeObserver' in window)new ResizeObserver(resize).observe(pair);
  window.addEventListener('resize',resize);resize();
  const previousLanguage=setLanguage;
  setLanguage=function(lang){previousLanguage(lang);const isJapanese=langNow()==='ja';
    pair.querySelector('[data-hero-screen="dashboard"]').setAttribute('aria-label',isJapanese?'店舗の管理画面を拡大':'放大商戶管理首頁');
    pair.querySelector('[data-hero-screen="slots"]').setAttribute('aria-label',isJapanese?'予約できる時間帯を拡大':'放大預約時段畫面');
  };
  setLanguage(document.getElementById('language').value);
})();

;
(() => {
  const root=document.querySelector('.device-showcase');
  if(!root)return;
  const words={
    zh:{devicesTitle:'電話、iPad 同電腦。',devicesDesc:'電話同 iPad 睇 App，電腦瀏覽網站同預約教學。',devicesSwitch:'電腦畫面',devicesBooking:'預約教學',devicesPosts:'宣傳帖文',devicesSocial:'社交平台',devicesShops:'小店介紹'},
    ja:{devicesTitle:'スマホも、iPadも、パソコンも。',devicesDesc:'スマホとiPadでアプリを。パソコンではWebサイトや予約ガイドを。',devicesSwitch:'パソコンの画面',devicesBooking:'予約ガイド',devicesPosts:'紹介コンテンツ',devicesSocial:'公式SNS',devicesShops:'お店の課題'}
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
 const config={"zh": {"path": "", "language": "zh-Hant", "title": "BookingYou｜小店預約管理系統・基本功能免費", "description": "BookingYou 為美容、美髮、美甲、私人教練、教學及寵物美容小店提供預約管理。分享連結或 QR Code，客人免下載 App 即可提交網頁預約，商戶確認後成立。基本功能免費，零預約佣金。", "keyword": "小店預約管理系統", "about": "BookingYou 係為預約制小店而設嘅預約管理 App，適合美容、美髮、美甲、私人教練、教學及寵物美容。商戶可以管理日曆、代理預約、改期同提醒；客人透過連結或 QR Code 提交網頁預約，經商戶確認後成立。基本功能免費，零預約佣金。"}, "ja": {"path": "ja/", "language": "ja", "title": "BookingYou｜小さなお店の予約管理アプリ・基本機能無料", "description": "美容室・ネイルサロン・パーソナルジム・教室・ペットサロンの予約管理に。予約リンクやQRコードで、お客様はアプリ不要で予約を申し込み、お店の確認後に確定。基本機能無料、予約手数料なし。", "keyword": "小さなお店の予約管理アプリ", "about": "BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。"}},translations={"zh": {"nav1": "關於 BookingYou", "nav2": "功能介紹", "guideScreens": "App 畫面", "guidePosts": "FB／IG 帖文", "nav3": "收費", "nav4": "常見問題", "start": "免費開始使用", "eyebrow": "為獨立小店而設的預約管理", "hero1": "預約，簡單一點。", "hero2": "時間，留俾客人。", "heroDesc": "客人自己揀時間，店主輕鬆管理全日。將電話、訊息同上門預約，放返同一個日曆。", "promise1": "基本功能免費", "promise2": "零佣金", "promise3": "iOS・Android", "seeHow": "睇下點運作", "heroNote": "客人免下載 App，都可以提交網頁預約。", "float": "客人自己約，你專心做好服務。", "trust": "為每一間用心經營嘅預約制小店而設", "ind1": "美容・美髮", "ind2": "美甲工作室", "ind3": "私人教練", "ind4": "補習・教學", "ind5": "寵物美容", "industryScope": "以上為常見的預約服務行業。BookingYou 同樣適用於各類需要預約安排的業務，讓不同規模的小店及專業服務都能靈活管理預約。", "newsBadge": "網頁預約", "news": "一條連結，客人用瀏覽器就可以預約。", "galleryTitle": "由搵店到管理預約，每個畫面都睇清楚。", "galleryDesc": "睇返 BookingYou 嘅 App 展示圖：搵服務、揀時間、分享預約連結。撳任何圖片，可以放大睇細節。", "webGuide": "客人免 App 預約教學", "customerTab": "客人使用・分享預約", "merchantTab": "商戶日常管理", "galleryNote": "App 展示素材；店舖、日期及金額為畫面示例。實際版面以使用中的 App 為準。", "yuLabel": "U 仔提提你", "yuScreenTitle": "想睇清楚啲？撳一下畫面就得。", "yuScreenBody": "App 畫面可以放大，亦可以切換「商戶日常管理」，睇返時段、營業時間同語言設定。", "about1": "小店嘅每一個預約，", "about2": "都有清楚嘅安排。", "aboutDesc": "BookingYou 係為預約制小店而設嘅預約管理 App，適合美容、美髮、美甲、私人教練、教學及寵物美容。商戶可以管理日曆、代理預約、改期同提醒；客人透過連結或 QR Code 提交網頁預約，經商戶確認後成立。基本功能免費，零預約佣金。", "point1": "讓客人隨時提交預約", "f1a": "一條專屬連結，", "f1b": "就係你嘅網上預約前台。", "f1desc": "分享店舖連結或 QR Code，客人用瀏覽器揀服務、日期同時間，唔使下載 App。網頁預約由你確認後先成立。", "f1link": "開始建立你嘅預約入口", "point2": "所有預約，一眼睇清", "f2a": "電話、上門、網上，", "f2b": "一個日曆，全部安排好。", "f2desc": "幫電話同上門客人加入預約，連同網上預約一齊管理。要改時間，直接改期就得，毋須取消再開新單。", "f2link": "將每日預約集中管理", "point3": "營業節奏，由你決定", "f3a": "幾時接客、幾時休息，", "f3b": "跟返你嘅工作節奏。", "f3desc": "設定營業時間、休息日同保留時段。App 預約可按時段選擇即時確認或商戶審批，配合你每日嘅實際安排。", "f3link": "了解更多使用方式", "yuBookingTitle": "客人提交咗，仲要等你確認。", "yuBookingBody": "網頁預約一律喺商戶確認後先成立。App 內預約就可以按時段，設定即時確認或者商戶審批。", "scenarioHeading": "你嘅小店，你嘅預約節奏。", "scenarioIntro": "揀一個行業，睇下由客人預約到安排每日工作，可以點樣用 BookingYou。", "allIndustries": "查看全部 12 類行業", "scenarioBeauty": "美容護理", "scenarioNails": "美甲工作室", "scenarioFitness": "私人健身", "scenarioTeaching": "教學課堂", "scenarioExample": "預約安排例子", "scenarioPending": "網頁提交後，等候商戶確認", "scenarioGuide": "睇客人點樣預約", "scenarioNote": "以上係使用情境示例；服務、時間及時長只作說明。實際可預約安排，以各商戶設定為準。", "yuWorkTitle": "電話同上門客，都可以一齊記低。", "yuWorkBody": "收到電話、私訊或上門預約後，商戶可以自行加入記錄，同網上預約放喺同一個日曆管理。", "factUnit1": "佣金", "fact1": "客人直接向店舖付款", "free": "免費", "fact2": "預約管理基本功能", "factUnit3": "種", "fact3": "介面語言", "postsTitle": "小店日常、預約教學，一齊分享。", "postsDesc": "預約教學、功能介紹同各地小店日常，集結成 140 張社交宣傳圖。可按語言篩選，撳圖睇完整大圖。", "filterLabel": "帖文語言", "allPosts": "全部語言", "loadMore": "顯示更多帖文", "postsNote": "呢度展示原有帖文圖片；想睇原帖內容、留言及最新動態，可前往官方社交帳號。", "faqTitle": "你可能想知", "q1": "基本功能係咪真係免費？", "a1": "預約頁、日曆、代客預約、改期、提醒及審批規則等基本功能免費。專業版仍在規劃中，尚未推出，定價未定。", "q2": "客人一定要下載 App 嗎？", "a2": "唔使。客人可以用你分享嘅連結或 QR Code，直接喺瀏覽器提交預約；個別店舖可設定只接受 App 內預約。", "q3": "網頁預約會自動確認嗎？", "a3": "網頁預約一律需要店舖確認先成立。App 內預約就可以按時段選擇即時確認或商戶審批。", "cta1": "預約有安排，", "cta2": "做生意更自在。", "ctaDesc": "由今日開始，為你嘅小店多留一點時間。", "downloadNote": "iOS 及 Android 均已上架 · 基本功能免費", "devicesTitle": "電話、iPad 同電腦。", "devicesDesc": "電話同 iPad 睇 App，電腦瀏覽網站同預約教學。", "devicesSwitch": "電腦畫面", "devicesBooking": "預約教學", "devicesPosts": "宣傳帖文", "devicesSocial": "社交平台", "devicesShops": "小店介紹", "privacy": "私隱政策", "terms": "服務條款", "preview": "設計預覽 V12 · 未發佈", "guideWeb": "預約教學", "guideFeatures": "完整功能", "guideWho": "適用行業", "closeImage": "關閉圖片", "previousImage": "上一張", "nextImage": "下一張", "zoom": "放大查看", "post": "社交帖文", "shown": "已顯示", "of": "／", "unit": "張", "chapterReading": "閱讀進度", "chapterDownload": "下載 App", "chapterLabel": "頁面章節", "scenarioTabLabel": "選擇行業情境", "scenarioChanged": "已切換至：", "progressText": "已閱讀", "seoKeyword": "小店預約管理系統"}, "ja": {"nav1": "BookingYouについて", "nav2": "機能紹介", "nav3": "料金", "nav4": "よくあるご質問", "start": "無料ではじめる", "eyebrow": "ひとりで営むお店のための予約管理", "hero1": "予約を、もっとかんたんに。", "hero2": "お客様との時間を、もっと大切に。", "heroDesc": "お客様は自分で予約、お店は一日を管理。電話・来店・ネット予約を、ひとつのカレンダーに。", "promise1": "基本機能は無料", "promise2": "予約手数料なし", "promise3": "iOS・Android", "seeHow": "使い方を見る", "heroNote": "お客様はアプリなしで、ブラウザから予約できます。", "phoneLabel": "空いている時間を選んで、お店に予約。", "float": "予約はお客様に。目の前のサービスに集中。", "trust": "予約でつながる、小さなお店の毎日に。", "ind1": "美容室・理容室", "ind2": "ネイルサロン", "ind3": "パーソナルジム", "ind4": "教室・レッスン", "ind5": "ペットサロン", "newsBadge": "ウェブ予約", "news": "リンクひとつで、お客様はブラウザから予約できます。", "about1": "小さなお店の予約を、", "about2": "ひとつに、わかりやすく。", "aboutDesc": "BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。", "point1": "いつでも予約を受け付けたい", "f1a": "お店のリンクが、", "f1b": "あなたの予約受付になります。", "f1desc": "予約リンクやQRコードを共有するだけ。お客様はアプリなしで、サービス・日付・時間を選べます。ウェブ予約は、お店の確認後に確定します。", "f1link": "お店の予約受付をはじめる", "point2": "すべての予約を、ひと目で把握したい", "f2a": "電話も、来店も、ネットも。", "f2b": "ひとつのカレンダーで管理。", "f2desc": "電話や来店で受けた予約も、お店から登録。ネット予約と一緒に管理できます。日時変更も、予約を取り消さずにそのまま変更できます。", "f2link": "一日の予約をまとめて管理", "point3": "お店に合った予約ルールにしたい", "f3a": "予約を受ける時間も、休む時間も。", "f3b": "お店のペースで決められます。", "f3desc": "営業時間、定休日、予約を受けない時間を設定。アプリ内予約は、時間帯ごとに即時確定かお店の承認制かを選べます。", "f3link": "使い方をもっと知る", "factUnit1": "手数料", "fact1": "お支払いはお店に直接", "free": "無料", "fact2": "予約管理の基本機能", "factUnit3": "言語", "fact3": "お店に合った表示言語", "faqTitle": "よくあるご質問", "q1": "基本機能は本当に無料ですか？", "a1": "予約ページ、カレンダー、代理予約、日時変更、リマインダー、承認ルールなどの基本機能は無料です。Proプランは計画中で、まだ提供しておらず、料金も未定です。", "q2": "お客様もアプリを入れる必要がありますか？", "a2": "必要ありません。お店のリンクやQRコードからブラウザで予約できます。お店の設定によっては、アプリ内予約のみを受け付ける場合もあります。", "q3": "ウェブ予約は自動で確定しますか？", "a3": "ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。", "cta1": "予約に、ゆとりを。", "cta2": "お店の毎日に、笑顔を。", "ctaDesc": "今日から、小さなお店の時間をもっと大切に。", "downloadNote": "iOS・Androidで配信中 · 基本機能無料", "privacy": "プライバシーポリシー", "terms": "利用規約", "preview": "デザインプレビュー V12 · 未公開", "industryScope": "掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。", "galleryTitle": "お店探しから予約管理まで、画面でわかりやすく。", "galleryDesc": "サービス選び、空き時間の確認、予約リンクの共有。BookingYouのアプリ紹介画像を、タップして拡大できます。", "webGuide": "アプリ不要の予約ガイド", "customerTab": "お客様の予約・リンク共有", "merchantTab": "お店の日常管理", "galleryNote": "アプリ紹介用の画像です。店舗、日付、金額は表示例で、実際の画面はご利用中のアプリをご確認ください。", "postsTitle": "小さなお店の日常も、予約のヒントも。SNSでお届け。", "postsDesc": "予約ガイドからお店の日常まで。BookingYouのSNS画像140点をご紹介。言語で絞り込み、タップで拡大できます。", "filterLabel": "投稿の言語", "allPosts": "すべての言語", "loadMore": "もっと見る", "postsNote": "既存の投稿画像を掲載しています。投稿本文、コメント、最新情報は公式SNSアカウントをご覧ください。", "guideScreens": "アプリ画面", "guideWeb": "予約ガイド", "guideFeatures": "すべての機能", "guideWho": "対応業種", "guidePosts": "SNS投稿", "closeImage": "画像を閉じる", "previousImage": "前の画像", "nextImage": "次の画像", "zoom": "拡大する", "post": "SNS投稿", "shown": "表示中", "of": "／", "unit": "件", "scenarioHeading": "お店に合わせた、予約のかたち。", "scenarioIntro": "業種を選んで、お客様の予約から一日の管理まで、BookingYouの使い方をご覧ください。", "allIndustries": "12の業種をすべて見る", "scenarioBeauty": "美容・ケア", "scenarioNails": "ネイルサロン", "scenarioFitness": "パーソナルジム", "scenarioTeaching": "教室・レッスン", "scenarioExample": "予約スケジュールの例", "scenarioPending": "ウェブで送信後、お店の確認を待ちます", "scenarioGuide": "お客様の予約方法を見る", "scenarioNote": "サービス・時間・所要時間は活用例です。実際に予約できる内容は、各店舗の設定によって異なります。", "yuLabel": "Uくんのひとこと", "yuWorkTitle": "電話や来店で受けた予約も、一緒に。", "yuWorkBody": "電話・メッセージ・来店で受けた予約は、お店から登録。ネット予約と同じカレンダーで管理できます。", "yuScreenTitle": "気になる画面は、タップして拡大。", "yuScreenBody": "「お店の日常管理」に切り替えると、予約枠、営業時間、言語設定の紹介画面も確認できます。", "yuBookingTitle": "送信しただけでは、予約はまだ確定しません。", "yuBookingBody": "ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。", "chapterReading": "読書の進み具合", "chapterDownload": "ダウンロード", "chapterLabel": "ページの目次", "scenarioTabLabel": "業種を選択", "scenarioChanged": "選択した業種：", "progressText": "読了", "devicesTitle": "スマホも、iPadも、パソコンも。", "devicesDesc": "スマホとiPadでアプリを。パソコンではWebサイトや予約ガイドを。", "devicesSwitch": "パソコンの画面", "devicesBooking": "予約ガイド", "devicesPosts": "紹介コンテンツ", "devicesSocial": "公式SNS", "devicesShops": "お店の課題", "seoKeyword": "小さなお店の予約管理アプリ"}};
 const rendered=document.documentElement.lang==='ja'?'ja':'zh';
 for(const lang of ['zh','ja'])Object.assign(copy[lang],translations[lang]);
 const previous=setLanguage;
 setLanguage=function(lang){
  lang=lang==='ja'?'ja':'zh';
  if(lang!==rendered){location.assign('/'+config[lang].path+location.hash);return;}
  previous(lang);
  const preview=document.documentElement.dataset.seoMode!=='release';
  document.title=config[lang].title+(preview?(lang==='ja'?' · デザインプレビュー':' · 設計預覽'):'');
 };
 setLanguage(rendered);
})();
