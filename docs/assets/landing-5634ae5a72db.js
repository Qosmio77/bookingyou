
const assets={"logo": "assets/logo.png", "photo": "preview-assets/hero-salon-v6.webp", "mascot": "assets/yu-kun-wave.png", "slots": "assets/deck-phone-slots.png", "dashboard": "assets/deck-dashboard.png", "hours": "assets/deck-hours.png", "customer": "assets/illustrations/33-customer-using-phone.webp", "owner": "assets/illustrations/34-salon-owner-welcoming.webp", "web1zh": "assets/webbook/zh-CN-1.jpg", "web2zh": "assets/webbook/zh-CN-2.jpg", "web1ja": "assets/webbook/ja-1.jpg", "web2ja": "assets/webbook/ja-2.jpg", "applezh": "assets/badges/apple-zh-cn.svg", "googlezh": "assets/badges/google-zh-cn.png", "appleja": "assets/badges/apple-ja-jp.svg", "googleja": "assets/badges/google-ja.png"};
const copy={zh:{},ja:{nav1:'BookingYouについて',nav2:"功能介绍",nav3:"收费",nav4:'よくあるご質問',start:'無料ではじめる',eyebrow:'ひとりで営むお店のための予約管理',hero1:'予約を、もっとかんたんに。',hero2:'お客様との時間を、もっと大切に。',heroDesc:'お客様は自分で予約、お店は一日を管理。電話・来店・ネット予約を、ひとつのカレンダーに。',promise1:'基本機能は無料',promise2:'予約手数料なし',promise3:'iOS・Android・Web',seeHow:'使い方を見る',heroNote:'お客様はアプリなしで、ブラウザから予約できます。',phoneLabel:'空いている時間を選んで、お店に予約。',float:'予約はお客様に。目の前のサービスに集中。',trust:'予約でつながる、小さなお店の毎日に。',ind1:'美容室・理容室',ind2:'ネイルサロン',ind3:'パーソナルジム',ind4:'教室・レッスン',ind5:'ペットサロン',newsBadge:'ウェブ予約',news:'リンクひとつで、お客様はブラウザから予約できます。',about1:'小さなお店の予約を、',about2:'ひとつに、わかりやすく。',aboutDesc:'施術中の電話、あちこちに届くメッセージ。BookingYouなら予約・日程変更・リマインダーをまとめて管理。目の前のお客様に、もっと向き合える毎日へ。',point1:'いつでも予約を受け付けたい',f1a:'お店のリンクが、',f1b:'あなたの予約受付になります。',f1desc:'予約リンクやQRコードを共有するだけ。お客様はアプリなしで、サービス・日付・時間を選べます。ウェブ予約は、お店の確認後に確定します。',f1link:'お店の予約受付をはじめる',point2:'すべての予約を、ひと目で把握したい',f2a:'電話も、来店も、ネットも。',f2b:'ひとつのカレンダーで管理。',f2desc:'電話や来店で受けた予約も、お店から登録。ネット予約と一緒に管理できます。日時変更も、予約を取り消さずにそのまま変更できます。',f2link:'一日の予約をまとめて管理',point3:'お店に合った予約ルールにしたい',f3a:'予約を受ける時間も、休む時間も。',f3b:'お店のペースで決められます。',f3desc:'営業時間、定休日、予約を受けない時間を設定。アプリ内予約は、時間帯ごとに即時確定かお店の承認制かを選べます。',f3link:'使い方をもっと知る',factUnit1:"佣金",fact1:'お支払いはお店に直接',free:"免费",fact2:'予約管理の基本機能',factUnit3:"语言",fact3:'お店に合った表示言語',faqTitle:'よくあるご質問',q1:'基本機能は本当に無料ですか？',a1:'予約ページ、カレンダー、代理予約、日時変更、リマインダー、承認ルールなどの基本機能は無料です。Proプランは計画中で、まだ提供しておらず、料金も未定です。',q2:'お客様もアプリを入れる必要がありますか？',a2:'必要ありません。お店のリンクやQRコードからブラウザで予約できます。お店の設定によっては、アプリ内予約のみを受け付ける場合もあります。',q3:'ウェブ予約は自動で確定しますか？',a3:'ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。',cta1:'予約に、ゆとりを。',cta2:'お店の毎日に、笑顔を。',ctaDesc:'今日から、小さなお店の時間をもっと大切に。',downloadNote:'iOS・Androidで配信中 · 基本機能無料',privacy:'プライバシーポリシー',terms:"服务条款",preview:'デザインプレビュー V10 · 未公開'}};
const images={zh:{web1:'web1zh',web2:'web2zh',apple:'applezh',google:'googlezh'},ja:{web1:'web1ja',web2:'web2ja',apple:'appleja',google:'googleja'}};
Object.assign(copy.zh,{"nav1": "关于 BookingYou", "nav2": "功能介绍", "guideScreens": "App 界面", "guidePosts": "FB／IG 帖文", "nav3": "收费", "nav4": "常见问题", "start": "免费开始使用", "eyebrow": "为独立小店而设的预约管理", "hero1": "让预约更简单。", "hero2": "把时间留给客户。", "heroDesc": "客户自主选择时间，店主轻松管理全天安排。将电话、消息和到店预约集中在同一个日历中。", "promise1": "基本功能免费", "promise2": "零佣金", "promise3": "iOS・Android・Web", "seeHow": "看看怎么用", "heroNote": "客户无需下载 App，也可提交网页预约。", "float": "客户自主预约，您专注做好服务。", "trust": "为每一家用心经营的预约制小店而设", "ind1": "美容・美发", "ind2": "美甲工作室", "ind3": "私人教练", "ind4": "补习・教学", "ind5": "宠物美容", "industryScope": "以上为常见的预约服务行业。BookingYou 同样适用于各类需要预约安排的业务，帮助不同规模的小店及专业服务灵活管理预约。", "newsBadge": "网页预约", "news": "一个链接，客户通过浏览器即可预约。", "galleryTitle": "从查找店铺到管理预约，清楚了解每个界面。", "galleryDesc": "浏览 BookingYou App 展示图：查找服务、选择时间、分享预约链接。点击任意图片即可放大查看细节。", "webGuide": "客户免 App 预约教程", "customerTab": "客户使用・分享预约", "merchantTab": "商户日常管理", "galleryNote": "App 展示素材；店铺、日期及金额均为画面示例。实际界面以正在使用的 App 为准。", "yuLabel": "小 U 提醒您", "yuScreenTitle": "想看清楚细节？点击画面即可放大。", "yuScreenBody": "App 界面可点击放大，也可切换至“商户日常管理”，查看时段、营业时间和语言设置。", "about1": "小店的每一个预约，", "about2": "都有清晰安排。", "aboutDesc": "BookingYou 是面向预约制小店的预约管理 App，适用于美容、美发、美甲、私人教练、教学及宠物美容。商户可管理日历、代客预约、改期和提醒；客户通过链接或二维码提交网页预约，经商户确认后生效。基本功能免费，预约零佣金。", "point1": "让客户随时提交预约", "f1a": "一个专属链接，", "f1b": "就是您的线上预约前台。", "f1desc": "分享店铺链接或二维码，客户可通过浏览器选择服务、日期和时间，无需下载 App。网页预约须经您确认后才生效。", "f1link": "开始创建您的预约入口", "point2": "全部预约，一目了然", "f2a": "电话、到店、线上，", "f2b": "一个日历，安排井然有序。", "f2desc": "为电话和到店客户添加预约，与线上预约集中管理。如需调整时间，直接改期即可，无需取消后重新创建。", "f2link": "集中管理每日预约", "point3": "经营节奏，由您决定", "f3a": "何时接待、何时休息，", "f3b": "配合您的工作节奏。", "f3desc": "设置营业时间、休息日和保留时段。App 预约可按时段选择即时确认或商户审核，配合每日实际安排。", "f3link": "了解更多使用方式", "yuBookingTitle": "客户提交后，还需您确认。", "yuBookingBody": "网页预约均需商户确认后才生效。App 内预约可按时段设置即时确认或商户审核。", "scenarioHeading": "您的小店，您的预约节奏。", "scenarioIntro": "选择一个行业，了解如何通过 BookingYou 管理客户预约与每日工作安排。", "allIndustries": "查看全部 12 类行业", "scenarioBeauty": "美容护理", "scenarioNails": "美甲工作室", "scenarioFitness": "私人健身", "scenarioTeaching": "教学课程", "scenarioExample": "预约安排示例", "scenarioPending": "网页提交后，等待商户确认", "scenarioGuide": "了解客户如何预约", "scenarioNote": "以上为使用场景示例；服务、时间及时长仅作说明。实际可预约安排以各商户的设置为准。", "yuWorkTitle": "电话和到店预约，也能一并记录。", "yuWorkBody": "收到电话、私信或到店预约后，商户可手动添加记录，与线上预约在同一个日历中管理。", "factUnit1": "佣金", "fact1": "客户直接向店铺付款", "free": "免费", "fact2": "预约管理基本功能", "factUnit3": "种", "fact3": "界面语言", "postsTitle": "分享小店日常与预约教程。", "postsDesc": "汇集预约教程、功能介绍及各地小店日常的 140 张社交宣传图。可按语言筛选，点击图片查看完整大图。", "filterLabel": "帖文语言", "allPosts": "全部语言", "loadMore": "显示更多帖文", "postsNote": "这里展示原有帖文图片。如需查看原帖、评论及最新动态，请前往官方社交账号。", "faqTitle": "您可能想了解", "q1": "基本功能真的免费吗？", "a1": "预约页面、日历、代客预约、改期、提醒及审核规则等基本功能免费。专业版仍在规划中，尚未推出，价格待定。", "q2": "客户一定要下载 App 吗？", "a2": "不需要。客户可通过您分享的链接或二维码，直接在浏览器中提交预约；部分店铺可设置为仅接受 App 内预约。", "q3": "网页预约会自动确认吗？", "a3": "网页预约均需店铺确认后才生效。App 内预约可按时段选择即时确认或商户审核。", "cta1": "预约有安排，", "cta2": "经营更从容。", "ctaDesc": "从今天开始，为您的小店多留一点时间。", "downloadNote": "iOS 及 Android 均已上架 · 基本功能免费", "devicesTitle": "手机、iPad 和电脑。", "devicesDesc": "在手机和 iPad 上使用 App，在电脑上浏览网站及预约教程。", "devicesSwitch": "电脑画面", "devicesBooking": "预约教程", "devicesPosts": "宣传帖文", "devicesSocial": "社交平台", "devicesShops": "小店介绍", "privacy": "隐私政策", "terms": "服务条款", "preview": "設計預覽 V12 · 未發佈", "guideWeb": "预约教程", "guideFeatures": "完整功能", "guideWho": "适用行业", "closeImage": "关闭图片", "previousImage": "上一张", "nextImage": "下一张", "zoom": "放大查看", "post": "社交帖文", "shown": "已显示", "of": "／", "unit": "张", "chapterReading": "阅读进度", "chapterDownload": "下载 App", "chapterLabel": "页面章节", "scenarioTabLabel": "选择行业场景", "scenarioChanged": "已切换至：", "progressText": "已阅读", "seoKeyword": "小店预约管理系统"});
document.querySelectorAll('[data-asset]').forEach(el=>el.src=assets[el.dataset.asset]);
function setLanguage(lang){if(!copy[lang])lang='zh';document.documentElement.lang=lang==='ja'?'ja':'zh-Hant';document.getElementById('language').value=lang;document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=copy[lang][el.dataset.i18n]||copy.zh[el.dataset.i18n]);document.querySelectorAll('[data-local-asset]').forEach(el=>el.src=assets[images[lang][el.dataset.localAsset]]);document.querySelector('[data-page]').href='https://bookingyou.app/'+(lang==='ja'?'ja/':'')+'about/';document.querySelector('.menu-toggle').setAttribute('aria-label',lang==='ja'?'メニュー':"打开菜单");document.querySelector('.nav').setAttribute('aria-label',lang==='ja'?'メインメニュー':"主菜单");document.title=lang==='ja'?'BookingYou · ホームページデザインプレビュー':"BookingYou · 首页设计预览";}
setLanguage(document.documentElement.lang==='ja'?'ja':'zh');
document.getElementById('language').addEventListener('change',e=>setLanguage(e.target.value));
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menu.addEventListener('click',()=>{let open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);menu.textContent=open?'×':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.textContent='☰';}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.textContent='☰';}});

;
const postManifest = [{"id": "001", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "002", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "003", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "004", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "005", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "006", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "007", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "008", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "009", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "010", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "011", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "012", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "013", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "014", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "015", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "016", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "017", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "018", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "019", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "020", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "021", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "022", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "023", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "024", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "025", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "026", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "027", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "028", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "029", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "030", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "031", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "032", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "033", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "034", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "035", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "036", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "037", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "038", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "039", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "040", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "041", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "042", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "043", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "044", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "045", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "046", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "047", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "048", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "049", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "050", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "051", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "052", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "053", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "054", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "055", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "056", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "057", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "058", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "059", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "060", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "061", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "062", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "063", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "064", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "065", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "066", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "067", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "068", "w": 941, "h": 1672, "lang": "ja"}, {"id": "069", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "070", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "071", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "072", "w": 941, "h": 1672, "lang": "ja"}, {"id": "073", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "074", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "075", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "076", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "077", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "078", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "079", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "080", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "081", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "082", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "083", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "084", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "085", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "086", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "087", "w": 1080, "h": 1919, "lang": "ja"}, {"id": "088", "w": 1080, "h": 1919, "lang": "ja"}, {"id": "089", "w": 1080, "h": 1350, "lang": "th"}, {"id": "090", "w": 1080, "h": 1350, "lang": "th"}, {"id": "091", "w": 1080, "h": 1350, "lang": "th"}, {"id": "092", "w": 1080, "h": 1350, "lang": "th"}, {"id": "093", "w": 1080, "h": 1350, "lang": "th"}, {"id": "094", "w": 1080, "h": 1350, "lang": "th"}, {"id": "095", "w": 1080, "h": 1350, "lang": "th"}, {"id": "096", "w": 1080, "h": 1350, "lang": "th"}, {"id": "097", "w": 1080, "h": 1350, "lang": "th"}, {"id": "098", "w": 1080, "h": 1350, "lang": "th"}, {"id": "099", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "100", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "101", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "102", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "103", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "104", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "105", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "106", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "107", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "108", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "109", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "110", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "111", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "112", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "113", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "114", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "115", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "116", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "117", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "118", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "119", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "120", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "121", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "122", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "123", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "124", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "125", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "126", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "127", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "128", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "129", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "130", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "131", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "132", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "133", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "134", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "135", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "136", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "137", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "138", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "139", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "140", "w": 848, "h": 1072, "lang": "ja"}];
const extraCopy = {
 zh:{industryScope:"以上为常见的预约服务行业。BookingYou 同样适用于各类需要预约安排的业务，帮助不同规模的小店及专业服务灵活管理预约。",galleryTitle:"从查找店铺到管理预约，清楚了解每个界面。",galleryDesc:"浏览 BookingYou App 展示图：查找服务、选择时间、分享预约链接。点击任意图片即可放大查看细节。",webGuide:"客户免 App 预约教程",customerTab:"客户使用・分享预约",merchantTab:"商户日常管理",galleryNote:"App 展示素材；店铺、日期及金额均为画面示例。实际界面以正在使用的 App 为准。",postsTitle:"分享小店日常与预约教程。",postsDesc:"汇集预约教程、功能介绍及各地小店日常的 140 张社交宣传图。可按语言筛选，点击图片查看完整大图。",filterLabel:"帖文语言",allPosts:"全部语言",loadMore:"显示更多帖文",postsNote:"这里展示原有帖文图片。如需查看原帖、评论及最新动态，请前往官方社交账号。",guideScreens:"App 界面",guideWeb:"预约教程",guideFeatures:"完整功能",guideWho:"适用行业",guidePosts:"FB／IG 帖文",closeImage:"关闭图片",previousImage:"上一张",nextImage:"下一张",zoom:"放大查看",post:"社交帖文",shown:"已显示",of:'／',unit:"张"},
 ja:{industryScope:'掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。',galleryTitle:'お店探しから予約管理まで、画面でわかりやすく。',galleryDesc:'サービス選び、空き時間の確認、予約リンクの共有。BookingYouのアプリ紹介画像を、タップして拡大できます。',webGuide:'アプリ不要の予約ガイド',customerTab:'お客様の予約・リンク共有',merchantTab:'お店の日常管理',galleryNote:'アプリ紹介用の画像です。店舗、日付、金額は表示例で、実際の画面はご利用中のアプリをご確認ください。',postsTitle:'小さなお店の日常も、予約のヒントも。SNSでお届け。',postsDesc:'予約ガイドからお店の日常まで。BookingYouのSNS画像140点をご紹介。言語で絞り込み、タップで拡大できます。',filterLabel:'投稿の言語',allPosts:'すべての言語',loadMore:'もっと見る',postsNote:'既存の投稿画像を掲載しています。投稿本文、コメント、最新情報は公式SNSアカウントをご覧ください。',guideScreens:'アプリ画面',guideWeb:'予約ガイド',guideFeatures:'すべての機能',guideWho:"适用行业",guidePosts:"社交帖文",closeImage:'画像を閉じる',previousImage:'前の画像',nextImage:'次の画像',zoom:'拡大する',post:"社交帖文",shown:"已显示",of:'／',unit:"项"}
};
for(const lang of ['zh','ja'])Object.assign(copy[lang],extraCopy[lang]);
const appTexts={
 zh:[["找到适合您的店铺","按地区和服务类型查找店铺，先浏览照片和服务资料，再选择预约。"],["服务、时长和价格","进入店铺页面，了解所提供的服务、各项时长及价格。"],["先选日期，再选时间","查看可预约日期和空档。App 内预约按时段规则即时确认或等待店主审核。"],["店铺专属二维码卡","客户扫描二维码即可打开预约页面，适合放在店内或名片上。"],["一键分享预约链接","将链接放在 WhatsApp、Instagram、Facebook 或网站上，方便客户再次预约。"]],
 ja:[['自分に合うお店を探す','地域やサービスから探し、写真とサービス内容を見て予約へ進めます。'],['サービス・時間・料金','お店のページでサービス一覧、所要時間、料金をまとめて確認できます。'],['日付と空き時間を選ぶ','予約可能な日時を選択。時間帯の設定により即時確定、またはお店の承認後に確定します。'],['お店専用のQRカード','QRコードから予約ページへ。店内や名刺に載せて、予約の入口をつくれます。'],['予約リンクを共有','メッセージやInstagram、Facebook、ホームページにリンクを掲載できます。']]
};
const merchantTexts={
 zh:[["商户管理首页","集中查看店铺状态和管理入口，将电话、到店及线上预约记录在同一处。"],["预约时段","客户查看日期及可预约时间；商户根据实际经营安排管理可用时段。"],["营业及审核设置","设置开放时间、休息日及确认规则，App 预约按时段设置执行。"],["8 种界面语言","支持繁体中文、英语、简体中文、日语、韩语、马来语、泰语及越南语，可按需切换。"]],
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
    const title=lang==='ja'?(isDashboard?'店舗の管理画面':'予約できる時間帯'):(isDashboard?"商户管理首页":"预约时段");
    openViewer([{src:assets[element.dataset.heroScreen],title}],0);
  });});
  const resize=()=>pair.style.setProperty('--pair-scale',String(pair.clientWidth/1254));
  if('ResizeObserver' in window)new ResizeObserver(resize).observe(pair);
  window.addEventListener('resize',resize);resize();
  const previousLanguage=setLanguage;
  setLanguage=function(lang){previousLanguage(lang);const isJapanese=langNow()==='ja';
    pair.querySelector('[data-hero-screen="dashboard"]').setAttribute('aria-label',isJapanese?'店舗の管理画面を拡大':"放大商户管理首页");
    pair.querySelector('[data-hero-screen="slots"]').setAttribute('aria-label',isJapanese?'予約できる時間帯を拡大':"放大预约时段界面");
  };
  setLanguage(document.getElementById('language').value);
})();

;
(() => {
  const root=document.querySelector('.device-showcase');
  if(!root)return;
  const words={
    zh:{devicesTitle:"手机、iPad 和电脑。",devicesDesc:"在手机和 iPad 上使用 App，在电脑上浏览网站及预约教程。",devicesSwitch:"电脑画面",devicesBooking:"预约教程",devicesPosts:"宣传帖文",devicesSocial:"社交平台",devicesShops:"小店介绍"},
    ja:{devicesTitle:'スマホも、iPadも、パソコンも。',devicesDesc:'スマホとiPadでアプリを。パソコンではWebサイトや予約ガイドを。',devicesSwitch:'パソコンの画面',devicesBooking:'予約ガイド',devicesPosts:'紹介コンテンツ',devicesSocial:"官方社交账号",devicesShops:'お店の課題'}
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
 const config={"zh": {"path": "", "language": "zh-Hant", "title": "BookingYou｜小店预约管理系统・基本功能免费", "description": "BookingYou 为美容、美发、美甲、私人教练、教学及宠物美容小店提供预约管理。分享链接或二维码，客户无需下载 App 即可提交网页预约，经商户确认后生效。基本功能免费，预约零佣金。", "keyword": "小店预约管理系统", "about": "BookingYou 是面向预约制小店的预约管理 App，适用于美容、美发、美甲、私人教练、教学及宠物美容。商户可管理日历、代客预约、改期和提醒；客户通过链接或二维码提交网页预约，经商户确认后生效。基本功能免费，预约零佣金。"}, "ja": {"path": "ja/", "language": "ja", "title": "BookingYou｜小さなお店の予約管理アプリ・基本機能無料", "description": "美容室・ネイルサロン・パーソナルジム・教室・ペットサロンの予約管理に。予約リンクやQRコードで、お客様はアプリ不要で予約を申し込み、お店の確認後に確定。基本機能無料、予約手数料なし。", "keyword": "小さなお店の予約管理アプリ", "about": "BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。"}},translations={"zh": {"nav1": "关于 BookingYou", "nav2": "功能介绍", "guideScreens": "App 界面", "guidePosts": "FB／IG 帖文", "nav3": "收费", "nav4": "常见问题", "start": "免费开始使用", "eyebrow": "为独立小店而设的预约管理", "hero1": "让预约更简单。", "hero2": "把时间留给客户。", "heroDesc": "客户自主选择时间，店主轻松管理全天安排。将电话、消息和到店预约集中在同一个日历中。", "promise1": "基本功能免费", "promise2": "零佣金", "promise3": "iOS・Android・Web", "seeHow": "看看怎么用", "heroNote": "客户无需下载 App，也可提交网页预约。", "float": "客户自主预约，您专注做好服务。", "trust": "为每一家用心经营的预约制小店而设", "ind1": "美容・美发", "ind2": "美甲工作室", "ind3": "私人教练", "ind4": "补习・教学", "ind5": "宠物美容", "industryScope": "以上为常见的预约服务行业。BookingYou 同样适用于各类需要预约安排的业务，帮助不同规模的小店及专业服务灵活管理预约。", "newsBadge": "网页预约", "news": "一个链接，客户通过浏览器即可预约。", "galleryTitle": "从查找店铺到管理预约，清楚了解每个界面。", "galleryDesc": "浏览 BookingYou App 展示图：查找服务、选择时间、分享预约链接。点击任意图片即可放大查看细节。", "webGuide": "客户免 App 预约教程", "customerTab": "客户使用・分享预约", "merchantTab": "商户日常管理", "galleryNote": "App 展示素材；店铺、日期及金额均为画面示例。实际界面以正在使用的 App 为准。", "yuLabel": "小 U 提醒您", "yuScreenTitle": "想看清楚细节？点击画面即可放大。", "yuScreenBody": "App 界面可点击放大，也可切换至“商户日常管理”，查看时段、营业时间和语言设置。", "about1": "小店的每一个预约，", "about2": "都有清晰安排。", "aboutDesc": "BookingYou 是面向预约制小店的预约管理 App，适用于美容、美发、美甲、私人教练、教学及宠物美容。商户可管理日历、代客预约、改期和提醒；客户通过链接或二维码提交网页预约，经商户确认后生效。基本功能免费，预约零佣金。", "point1": "让客户随时提交预约", "f1a": "一个专属链接，", "f1b": "就是您的线上预约前台。", "f1desc": "分享店铺链接或二维码，客户可通过浏览器选择服务、日期和时间，无需下载 App。网页预约须经您确认后才生效。", "f1link": "开始创建您的预约入口", "point2": "全部预约，一目了然", "f2a": "电话、到店、线上，", "f2b": "一个日历，安排井然有序。", "f2desc": "为电话和到店客户添加预约，与线上预约集中管理。如需调整时间，直接改期即可，无需取消后重新创建。", "f2link": "集中管理每日预约", "point3": "经营节奏，由您决定", "f3a": "何时接待、何时休息，", "f3b": "配合您的工作节奏。", "f3desc": "设置营业时间、休息日和保留时段。App 预约可按时段选择即时确认或商户审核，配合每日实际安排。", "f3link": "了解更多使用方式", "yuBookingTitle": "客户提交后，还需您确认。", "yuBookingBody": "网页预约均需商户确认后才生效。App 内预约可按时段设置即时确认或商户审核。", "scenarioHeading": "您的小店，您的预约节奏。", "scenarioIntro": "选择一个行业，了解如何通过 BookingYou 管理客户预约与每日工作安排。", "allIndustries": "查看全部 12 类行业", "scenarioBeauty": "美容护理", "scenarioNails": "美甲工作室", "scenarioFitness": "私人健身", "scenarioTeaching": "教学课程", "scenarioExample": "预约安排示例", "scenarioPending": "网页提交后，等待商户确认", "scenarioGuide": "了解客户如何预约", "scenarioNote": "以上为使用场景示例；服务、时间及时长仅作说明。实际可预约安排以各商户的设置为准。", "yuWorkTitle": "电话和到店预约，也能一并记录。", "yuWorkBody": "收到电话、私信或到店预约后，商户可手动添加记录，与线上预约在同一个日历中管理。", "factUnit1": "佣金", "fact1": "客户直接向店铺付款", "free": "免费", "fact2": "预约管理基本功能", "factUnit3": "种", "fact3": "界面语言", "postsTitle": "分享小店日常与预约教程。", "postsDesc": "汇集预约教程、功能介绍及各地小店日常的 140 张社交宣传图。可按语言筛选，点击图片查看完整大图。", "filterLabel": "帖文语言", "allPosts": "全部语言", "loadMore": "显示更多帖文", "postsNote": "这里展示原有帖文图片。如需查看原帖、评论及最新动态，请前往官方社交账号。", "faqTitle": "您可能想了解", "q1": "基本功能真的免费吗？", "a1": "预约页面、日历、代客预约、改期、提醒及审核规则等基本功能免费。专业版仍在规划中，尚未推出，价格待定。", "q2": "客户一定要下载 App 吗？", "a2": "不需要。客户可通过您分享的链接或二维码，直接在浏览器中提交预约；部分店铺可设置为仅接受 App 内预约。", "q3": "网页预约会自动确认吗？", "a3": "网页预约均需店铺确认后才生效。App 内预约可按时段选择即时确认或商户审核。", "cta1": "预约有安排，", "cta2": "经营更从容。", "ctaDesc": "从今天开始，为您的小店多留一点时间。", "downloadNote": "iOS 及 Android 均已上架 · 基本功能免费", "devicesTitle": "手机、iPad 和电脑。", "devicesDesc": "在手机和 iPad 上使用 App，在电脑上浏览网站及预约教程。", "devicesSwitch": "电脑画面", "devicesBooking": "预约教程", "devicesPosts": "宣传帖文", "devicesSocial": "社交平台", "devicesShops": "小店介绍", "privacy": "隐私政策", "terms": "服务条款", "preview": "設計預覽 V12 · 未發佈", "guideWeb": "预约教程", "guideFeatures": "完整功能", "guideWho": "适用行业", "closeImage": "关闭图片", "previousImage": "上一张", "nextImage": "下一张", "zoom": "放大查看", "post": "社交帖文", "shown": "已显示", "of": "／", "unit": "张", "chapterReading": "阅读进度", "chapterDownload": "下载 App", "chapterLabel": "页面章节", "scenarioTabLabel": "选择行业场景", "scenarioChanged": "已切换至：", "progressText": "已阅读", "seoKeyword": "小店预约管理系统"}, "ja": {"nav1": "BookingYouについて", "nav2": "功能介绍", "nav3": "收费", "nav4": "よくあるご質問", "start": "無料ではじめる", "eyebrow": "ひとりで営むお店のための予約管理", "hero1": "予約を、もっとかんたんに。", "hero2": "お客様との時間を、もっと大切に。", "heroDesc": "お客様は自分で予約、お店は一日を管理。電話・来店・ネット予約を、ひとつのカレンダーに。", "promise1": "基本機能は無料", "promise2": "予約手数料なし", "promise3": "iOS・Android・Web", "seeHow": "使い方を見る", "heroNote": "お客様はアプリなしで、ブラウザから予約できます。", "phoneLabel": "空いている時間を選んで、お店に予約。", "float": "予約はお客様に。目の前のサービスに集中。", "trust": "予約でつながる、小さなお店の毎日に。", "ind1": "美容室・理容室", "ind2": "ネイルサロン", "ind3": "パーソナルジム", "ind4": "教室・レッスン", "ind5": "ペットサロン", "newsBadge": "ウェブ予約", "news": "リンクひとつで、お客様はブラウザから予約できます。", "about1": "小さなお店の予約を、", "about2": "ひとつに、わかりやすく。", "aboutDesc": "BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。", "point1": "いつでも予約を受け付けたい", "f1a": "お店のリンクが、", "f1b": "あなたの予約受付になります。", "f1desc": "予約リンクやQRコードを共有するだけ。お客様はアプリなしで、サービス・日付・時間を選べます。ウェブ予約は、お店の確認後に確定します。", "f1link": "お店の予約受付をはじめる", "point2": "すべての予約を、ひと目で把握したい", "f2a": "電話も、来店も、ネットも。", "f2b": "ひとつのカレンダーで管理。", "f2desc": "電話や来店で受けた予約も、お店から登録。ネット予約と一緒に管理できます。日時変更も、予約を取り消さずにそのまま変更できます。", "f2link": "一日の予約をまとめて管理", "point3": "お店に合った予約ルールにしたい", "f3a": "予約を受ける時間も、休む時間も。", "f3b": "お店のペースで決められます。", "f3desc": "営業時間、定休日、予約を受けない時間を設定。アプリ内予約は、時間帯ごとに即時確定かお店の承認制かを選べます。", "f3link": "使い方をもっと知る", "factUnit1": "佣金", "fact1": "お支払いはお店に直接", "free": "免费", "fact2": "予約管理の基本機能", "factUnit3": "语言", "fact3": "お店に合った表示言語", "faqTitle": "よくあるご質問", "q1": "基本機能は本当に無料ですか？", "a1": "予約ページ、カレンダー、代理予約、日時変更、リマインダー、承認ルールなどの基本機能は無料です。Proプランは計画中で、まだ提供しておらず、料金も未定です。", "q2": "お客様もアプリを入れる必要がありますか？", "a2": "必要ありません。お店のリンクやQRコードからブラウザで予約できます。お店の設定によっては、アプリ内予約のみを受け付ける場合もあります。", "q3": "ウェブ予約は自動で確定しますか？", "a3": "ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。", "cta1": "予約に、ゆとりを。", "cta2": "お店の毎日に、笑顔を。", "ctaDesc": "今日から、小さなお店の時間をもっと大切に。", "downloadNote": "iOS・Androidで配信中 · 基本機能無料", "privacy": "プライバシーポリシー", "terms": "服务条款", "preview": "デザインプレビュー V12 · 未公開", "industryScope": "掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。", "galleryTitle": "お店探しから予約管理まで、画面でわかりやすく。", "galleryDesc": "サービス選び、空き時間の確認、予約リンクの共有。BookingYouのアプリ紹介画像を、タップして拡大できます。", "webGuide": "アプリ不要の予約ガイド", "customerTab": "お客様の予約・リンク共有", "merchantTab": "お店の日常管理", "galleryNote": "アプリ紹介用の画像です。店舗、日付、金額は表示例で、実際の画面はご利用中のアプリをご確認ください。", "postsTitle": "小さなお店の日常も、予約のヒントも。SNSでお届け。", "postsDesc": "予約ガイドからお店の日常まで。BookingYouのSNS画像140点をご紹介。言語で絞り込み、タップで拡大できます。", "filterLabel": "投稿の言語", "allPosts": "すべての言語", "loadMore": "もっと見る", "postsNote": "既存の投稿画像を掲載しています。投稿本文、コメント、最新情報は公式SNSアカウントをご覧ください。", "guideScreens": "アプリ画面", "guideWeb": "予約ガイド", "guideFeatures": "すべての機能", "guideWho": "适用行业", "guidePosts": "社交帖文", "closeImage": "画像を閉じる", "previousImage": "前の画像", "nextImage": "次の画像", "zoom": "拡大する", "post": "社交帖文", "shown": "已显示", "of": "／", "unit": "项", "scenarioHeading": "お店に合わせた、予約のかたち。", "scenarioIntro": "業種を選んで、お客様の予約から一日の管理まで、BookingYouの使い方をご覧ください。", "allIndustries": "12の業種をすべて見る", "scenarioBeauty": "美容・ケア", "scenarioNails": "ネイルサロン", "scenarioFitness": "パーソナルジム", "scenarioTeaching": "教室・レッスン", "scenarioExample": "予約スケジュールの例", "scenarioPending": "ウェブで送信後、お店の確認を待ちます", "scenarioGuide": "お客様の予約方法を見る", "scenarioNote": "サービス・時間・所要時間は活用例です。実際に予約できる内容は、各店舗の設定によって異なります。", "yuLabel": "Uくんのひとこと", "yuWorkTitle": "電話や来店で受けた予約も、一緒に。", "yuWorkBody": "電話・メッセージ・来店で受けた予約は、お店から登録。ネット予約と同じカレンダーで管理できます。", "yuScreenTitle": "気になる画面は、タップして拡大。", "yuScreenBody": "「お店の日常管理」に切り替えると、予約枠、営業時間、言語設定の紹介画面も確認できます。", "yuBookingTitle": "送信しただけでは、予約はまだ確定しません。", "yuBookingBody": "ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。", "chapterReading": "読書の進み具合", "chapterDownload": "ダウンロード", "chapterLabel": "ページの目次", "scenarioTabLabel": "業種を選択", "scenarioChanged": "選択した業種：", "progressText": "已阅读", "devicesTitle": "スマホも、iPadも、パソコンも。", "devicesDesc": "スマホとiPadでアプリを。パソコンではWebサイトや予約ガイドを。", "devicesSwitch": "パソコンの画面", "devicesBooking": "予約ガイド", "devicesPosts": "紹介コンテンツ", "devicesSocial": "官方社交账号", "devicesShops": "お店の課題", "seoKeyword": "小さなお店の予約管理アプリ"}};
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
