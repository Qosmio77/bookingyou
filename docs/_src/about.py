# 「關於我們」頁：/about/、/en/about/、/ja/about/ …（8 語）。
#
# 只寫核實過嘅事實（2026-09-22）：
#   · 香港團隊設計及開發（Kevin 指示：唔出個人名、寫係團隊）
#   · iOS 2026-07-05 上架（App Store releaseDate）、Android 2026-08-23（brand.json）、網頁預約 2026-09（/b/ commit）
#   · 8 種介面語言、31 個服務類別、零佣金零預約費、基本功能免費、款項由顧客同商戶直接處理（brand.json）
#   · 由日本市場開始（LinkedIn 創辦人稿）
# 唔寫：個人姓名、用戶數、商戶數、下載量、評分。
# 頁面用首頁同一個 header／footer；nav 連結指返首頁錨點。

ABOUT = {
    'zh-HK': dict(
        title='關於我們 · BookingYou', nav='關於我們', chip='關於我們',
        h1='為一人小店而設嘅預約前台',
        lead='BookingYou 由一支香港團隊設計及開發。我哋相信：小店接預約，唔應該比打電話更麻煩；而一個好用嘅工具，唔應該要商戶先計數、先簽約。',
        mis_h='公司理念', mis_lead='我哋做嘅唔係「平台」，係一張放喺櫃枱嘅預約卡。客人由店舖自己嘅連結入嚟，關係一直屬於店舖，唔屬於我哋。', mis=[('工具，唔係中間人','我哋唔企喺商戶同客人中間抽一筆。BookingYou 只係令預約更順，錢同關係都留喺店舖。'),('細店先','功能由一人店舖嘅實際流程出發：做緊客冇手接電話、收工先睇到查詢、週六想自己揀客。大公司要嘅嘢，唔係我哋嘅優先次序。'),('本地就係本地','語言、時區、貨幣、假期都跟店舖所在地。一個城市一個城市咁做，唔係一個介面翻譯八次。'),('誠實','唔講「全港最強」，唔寫冇來源嘅數字。做到先講，未做到就話未做到。')],
        why_h='點解做 BookingYou',
        why=['一人經營嘅美甲舖、髮型屋、補習老師、健身教練，一直靠電話、WhatsApp 同紙簿排期。做緊客嗰陣電話響，收咗工先見到查詢。',
             '市面上嘅預約工具，大多按整間店套用一個規則，又或者要抽佣、收月費。細店計完數，往往決定繼續用紙簿。',
             'BookingYou 想做嘅好簡單：商戶有一條預約連結同一張 QR 卡，客人自己揀時間；店主一個日曆睇晒全日。'],
        hold_h='我哋堅持嘅事',
        hold=[('唔碰錢', '零佣金、零預約費。款項由顧客同商戶直接處理，BookingYou 唔經手任何款項。'),
              ('基本功能永久免費', '預約頁、營業時間、時段、休息日、客戶紀錄，全部免費。日後如有進階功能，會另外標明。'),
              ('本地優先', '八種介面語言，時區、貨幣、日曆都跟店舖所在地。首爾商戶要嘅係韓文介面，唔係翻譯過嘅介面。'),
              ('按時段設規則', '平日下午即時確認，週六晚要店主審批。同一間店，唔同時段唔同規則。')],
        tl_h='走到邊',
        tl=[('2026 年 7 月', 'iOS 版於 App Store 上架，一開始就支援八種語言。'),
            ('2026 年 8 月', 'Android 版於 Google Play 上架。'),
            ('2026 年 9 月', '網頁預約推出：客人唔使裝 App，用瀏覽器就約到。'),
            ('而家', '由日本市場開始，逐個城市招募第一批商戶。')],
        yu_h='ユーくん', yu='BookingYou 嘅吉祥物，一本永遠開朗嘅日曆。佢出現喺 App、貼文同呢個網站，提你：預約可以簡單啲。',
        contact_h='聯絡', contact='合作、傳媒查詢、意見，都歡迎電郵。', mail='contact@bookingyou.app',
        cta='免費開始', back='返回首頁'),
    'en': dict(
        title='About · BookingYou', nav='About us', chip='About us',
        h1='A booking front desk for one-person shops',
        lead='BookingYou is designed and built by a team in Hong Kong. We believe taking bookings should not be harder than answering the phone — and a good tool should not make a shop do the maths or sign a contract first.',
        mis_h='What we believe', mis_lead='We are not building a “platform”. We are building the booking card that sits on the counter. Customers arrive through the shop’s own link, and the relationship stays with the shop, not with us.', mis=[('A tool, not a middleman','We don’t stand between the shop and its customers taking a cut. BookingYou just makes booking smoother; the money and the relationship stay with the shop.'),('Small shops first','Every feature starts from how a one-person shop actually works: no free hand for the phone mid-service, enquiries seen after closing, wanting to choose customers on Saturday night. What big chains need is not our priority.'),('Local means local','Language, time zone, currency and holidays follow the shop’s location. We go one city at a time, rather than translating one interface eight times.'),('Honest','No “best in town”, no numbers without a source. We say it when it’s done, and say so when it isn’t.')],
        why_h='Why BookingYou exists',
        why=['Nail studios, hair salons, tutors and personal trainers run by one person have always scheduled by phone, messaging apps and a paper book. The phone rings mid-service; enquiries after closing time get seen the next morning.',
             'Most booking tools apply one rule to the whole shop, or take a commission or a monthly fee. After doing the maths, a small shop often stays with the paper book.',
             'BookingYou keeps it simple: the shop gets a booking link and a QR card, customers pick their own time, and the owner sees the whole day in one calendar.'],
        hold_h='What we hold to',
        hold=[('We never touch the money', 'No commission and no booking fee. Customers pay the shop directly; BookingYou handles no payments.'),
              ('Core features free, always', 'Booking page, opening hours, time slots, closed days and customer records are free. Any future paid features will be clearly marked.'),
              ('Local first', 'Eight interface languages. Time zone, currency and calendar follow the shop’s location. A shop in Seoul wants a Korean interface, not a translated one.'),
              ('Rules per time slot', 'Instant confirmation on weekday afternoons, owner approval on Saturday nights. One shop, different rules for different hours.')],
        tl_h='Where we are',
        tl=[('July 2026', 'iOS app released on the App Store, in eight languages from day one.'),
            ('August 2026', 'Android app released on Google Play.'),
            ('September 2026', 'Web booking launched: customers book in the browser without installing anything.'),
            ('Now', 'Starting in Japan, recruiting the first shops one city at a time.')],
        yu_h='Yu-kun', yu='BookingYou’s mascot — a calendar that is always in a good mood. Yu-kun shows up in the app, in our posts and on this site to remind you that booking can be simple.',
        contact_h='Contact', contact='Partnerships, press enquiries and feedback are all welcome by email.', mail='contact@bookingyou.app',
        cta='Start for free', back='Back to home'),
    'zh-CN': dict(
        title='关于我们 · BookingYou', nav='关于我们', chip='关于我们',
        h1='为一人小店而设的预约前台',
        lead='BookingYou 由一支香港团队设计与开发。我们相信：小店接预约，不应该比接电话更麻烦；一个好用的工具，也不应该让商户先算账、先签约。',
        mis_h='公司理念', mis_lead='我们做的不是“平台”，而是一张放在柜台上的预约卡。客人从店铺自己的链接进来，关系始终属于店铺，不属于我们。', mis=[('工具，不是中间人','我们不站在商户和客人之间抽成。BookingYou 只是让预约更顺畅，钱和关系都留在店铺。'),('小店优先','功能从一人店铺的实际流程出发：服务中腾不出手接电话、打烊后才看到咨询、周六想自己挑客。大公司需要的，不是我们的优先级。'),('本地就是本地','语言、时区、货币、假期都跟随店铺所在地。一个城市一个城市地做，而不是把一个界面翻译八次。'),('诚实','不说“全城最强”，不写没有来源的数字。做到了才说，没做到就说没做到。')],
        why_h='为什么做 BookingYou',
        why=['一人经营的美甲店、发廊、补习老师、健身教练，一直靠电话、聊天软件和纸本排期。服务中电话响起，打烊后的咨询第二天才看到。',
             '市面上的预约工具大多对整家店套用一个规则，或者要抽佣、收月费。小店算完账，往往决定继续用纸本。',
             'BookingYou 想做的很简单：商户有一条预约链接和一张二维码卡，客人自己选时间；店主一个日历看完全天。'],
        hold_h='我们坚持的事',
        hold=[('不碰钱', '零佣金、零预约费。款项由顾客和商户直接处理，BookingYou 不经手任何款项。'),
              ('基本功能永久免费', '预约页、营业时间、时段、休息日、客户记录，全部免费。日后如有进阶功能，会另外标明。'),
              ('本地优先', '八种界面语言，时区、货币、日历都跟随店铺所在地。首尔的商户要的是韩文界面，不是翻译过的界面。'),
              ('按时段设规则', '工作日下午即时确认，周六晚上要店主审批。同一家店，不同时段不同规则。')],
        tl_h='走到哪里',
        tl=[('2026 年 7 月', 'iOS 版在 App Store 上架，一开始就支持八种语言。'),
            ('2026 年 8 月', 'Android 版在 Google Play 上架。'),
            ('2026 年 9 月', '网页预约推出：客人不用装 App，用浏览器就能预约。'),
            ('现在', '从日本市场开始，逐个城市招募第一批商户。')],
        yu_h='ユーくん', yu='BookingYou 的吉祥物，一本永远开朗的日历。它出现在 App、贴文和这个网站，提醒你：预约可以更简单。',
        contact_h='联系', contact='合作、媒体查询、意见反馈，欢迎发邮件。', mail='contact@bookingyou.app',
        cta='免费开始', back='返回首页'),
    'ja': dict(
        title='BookingYou について', nav='BookingYou について', chip='私たちについて',
        h1='ひとりで営むお店のための予約受付',
        lead='BookingYou は香港のチームが設計・開発しています。私たちはこう考えます。予約の受付は電話に出るより面倒であってはいけない。そして良いツールは、お店に計算や契約を先に求めるべきではない。',
        mis_h='私たちの考え', mis_lead='私たちが作っているのは「プラットフォーム」ではなく、カウンターに置く一枚の予約カードです。お客様はお店自身のリンクから来て、その関係はお店のもの。私たちのものではありません。', mis=[('仲介ではなく、道具','お店とお客様の間に立って手数料を取ることはしません。BookingYou は予約をなめらかにするだけ。お金も関係もお店に残ります。'),('小さなお店を最初に','機能はひとりで営むお店の実際の流れから考えます。施術中は電話に出られない、問い合わせは閉店後に見る、土曜の夜はお客様を自分で選びたい。大きなチェーンに必要なものは、私たちの優先事項ではありません。'),('ローカルはローカルに','言語、時間帯、通貨、祝日はお店の所在地に合わせます。一つの画面を八回翻訳するのではなく、一つの街ずつ取り組みます。'),('正直に','「街いちばん」とは言わず、根拠のない数字は書きません。できたら伝える、できていなければそう伝える。')],
        why_h='なぜ BookingYou を作ったのか',
        why=['ひとりで営むネイルサロン、美容室、家庭教師、パーソナルトレーナーは、ずっと電話とメッセージアプリと紙の予約帳で予定を管理してきました。施術中に電話が鳴り、営業時間外の問い合わせは翌朝まで気づけません。',
             '多くの予約ツールは店全体に一つのルールしか設定できず、手数料や月額料金がかかります。計算した結果、紙の予約帳に戻る小さなお店も少なくありません。',
             'BookingYou がしたいことはシンプルです。お店には予約リンクと QR カード、お客様は自分で時間を選ぶ。オーナーは一つのカレンダーで一日を見渡せる。'],
        hold_h='大切にしていること',
        hold=[('お金には触れない', '手数料も予約料もありません。お支払いはお客様とお店の間で直接行われ、BookingYou は決済を扱いません。'),
              ('基本機能はずっと無料', '予約ページ、営業時間、予約枠、休業日、顧客記録はすべて無料です。将来有料機能を加える場合は、はっきりと表示します。'),
              ('ローカルを優先', '8 言語の表示に対応。時間帯、通貨、カレンダーはお店の所在地に合わせます。ソウルのお店に必要なのは韓国語の画面であって、翻訳された画面ではありません。'),
              ('時間帯ごとのルール', '平日の午後は即時確定、土曜の夜はオーナーの承認制。同じお店でも、時間帯によってルールを変えられます。')],
        tl_h='これまでの歩み',
        tl=[('2026年7月', 'iOS 版を App Store で公開。最初から 8 言語に対応。'),
            ('2026年8月', 'Android 版を Google Play で公開。'),
            ('2026年9月', 'ウェブ予約を公開。アプリなしで、ブラウザから予約できるように。'),
            ('現在', '日本市場から、一つの街ずつ最初のお店を募っています。')],
        yu_h='ユーくん', yu='BookingYou のマスコット。いつも明るいカレンダーです。アプリや投稿、このサイトに登場して、「予約はもっとかんたんでいい」と伝えてくれます。',
        contact_h='お問い合わせ', contact='提携、取材、ご意見はメールでお気軽にどうぞ。', mail='contact@bookingyou.app',
        cta='無料ではじめる', back='ホームへ戻る'),
    'ko': dict(
        title='BookingYou 소개', nav='회사 소개', chip='회사 소개',
        h1='1인 매장을 위한 예약 데스크',
        lead='BookingYou는 홍콩의 팀이 설계하고 개발합니다. 우리는 예약을 받는 일이 전화를 받는 일보다 번거로워서는 안 되며, 좋은 도구라면 매장에게 계산이나 계약을 먼저 요구해서는 안 된다고 믿습니다.',
        mis_h='우리의 생각', mis_lead='우리가 만드는 건 “플랫폼”이 아니라 카운터에 놓는 예약 카드 한 장입니다. 고객은 매장의 링크로 들어오고, 그 관계는 우리가 아닌 매장의 것입니다.', mis=[('중개인이 아닌 도구','매장과 고객 사이에 서서 수수료를 떼지 않습니다. BookingYou는 예약을 매끄럽게 할 뿐, 돈과 관계는 매장에 남습니다.'),('작은 매장 먼저','모든 기능은 1인 매장의 실제 흐름에서 출발합니다. 시술 중엔 전화를 못 받고, 문의는 마감 후에 보고, 토요일 밤엔 손님을 직접 고르고 싶은 것. 큰 체인에 필요한 건 우리의 우선순위가 아닙니다.'),('현지는 현지답게','언어, 시간대, 통화, 휴일은 매장 위치를 따릅니다. 화면 하나를 여덟 번 번역하는 대신 한 도시씩 갑니다.'),('정직하게','“동네 최고”라 말하지 않고, 출처 없는 숫자는 쓰지 않습니다. 된 것은 됐다고, 안 된 것은 안 됐다고 말합니다.')],
        why_h='왜 BookingYou를 만들었나',
        why=['혼자 운영하는 네일숍, 미용실, 과외 선생님, 퍼스널 트레이너는 늘 전화와 메신저, 종이 예약장으로 일정을 관리해 왔습니다. 시술 중에 전화가 울리고, 영업시간 이후의 문의는 다음 날 아침에야 확인합니다.',
             '대부분의 예약 도구는 매장 전체에 규칙 하나만 적용하거나, 수수료나 월 이용료를 받습니다. 계산을 마친 작은 매장은 결국 종이 예약장으로 돌아가곤 합니다.',
             'BookingYou가 하려는 일은 단순합니다. 매장에는 예약 링크와 QR 카드, 고객은 직접 시간을 고르고, 사장님은 캘린더 하나로 하루를 봅니다.'],
        hold_h='지키는 원칙',
        hold=[('돈에 손대지 않습니다', '수수료도 예약비도 없습니다. 결제는 고객과 매장 사이에서 직접 이루어지며 BookingYou는 결제를 다루지 않습니다.'),
              ('기본 기능은 영원히 무료', '예약 페이지, 영업시간, 예약 슬롯, 휴무일, 고객 기록은 모두 무료입니다. 앞으로 유료 기능이 생기면 분명히 표시하겠습니다.'),
              ('현지 우선', '8개 인터페이스 언어. 시간대, 통화, 캘린더는 매장 위치를 따릅니다. 서울의 매장에 필요한 건 번역된 화면이 아니라 한국어 화면입니다.'),
              ('시간대별 규칙', '평일 오후는 즉시 확정, 토요일 밤은 사장님 승인. 같은 매장이라도 시간대마다 규칙을 다르게 둘 수 있습니다.')],
        tl_h='지금까지',
        tl=[('2026년 7월', 'iOS 앱을 App Store에 출시. 처음부터 8개 언어 지원.'),
            ('2026년 8월', 'Android 앱을 Google Play에 출시.'),
            ('2026년 9월', '웹 예약 출시. 앱 설치 없이 브라우저에서 바로 예약.'),
            ('현재', '일본 시장부터, 한 도시씩 첫 매장들을 모으고 있습니다.')],
        yu_h='유군(ユーくん)', yu='BookingYou의 마스코트, 언제나 밝은 캘린더입니다. 앱과 게시물, 이 사이트에 등장해 예약은 더 간단해질 수 있다고 알려 줍니다.',
        contact_h='문의', contact='제휴, 취재, 의견 모두 이메일로 환영합니다.', mail='contact@bookingyou.app',
        cta='무료로 시작', back='홈으로'),
    'ms': dict(
        title='Tentang · BookingYou', nav='Tentang kami', chip='Tentang kami',
        h1='Kaunter tempahan untuk kedai seorang',
        lead='BookingYou direka dan dibina oleh sebuah pasukan di Hong Kong. Kami percaya menerima tempahan tidak sepatutnya lebih sukar daripada menjawab telefon — dan alat yang baik tidak sepatutnya memaksa kedai mengira atau menandatangani kontrak dahulu.',
        mis_h='Pegangan kami', mis_lead='Kami bukan membina “platform”. Kami membina kad tempahan yang diletakkan di kaunter. Pelanggan datang melalui pautan kedai sendiri, dan hubungan itu kekal milik kedai, bukan kami.', mis=[('Alat, bukan orang tengah','Kami tidak berdiri di antara kedai dan pelanggannya untuk mengambil bahagian. BookingYou hanya melancarkan tempahan; wang dan hubungan kekal dengan kedai.'),('Kedai kecil dahulu','Setiap ciri bermula daripada cara kedai seorang benar-benar beroperasi: tiada tangan lapang untuk telefon ketika melayan pelanggan, pertanyaan dilihat selepas tutup, mahu memilih pelanggan pada malam Sabtu. Keperluan rangkaian besar bukan keutamaan kami.'),('Tempatan bermaksud tempatan','Bahasa, zon waktu, mata wang dan cuti mengikut lokasi kedai. Kami maju satu bandar pada satu masa, bukan menterjemah satu antara muka lapan kali.'),('Jujur','Tiada “terbaik di bandar”, tiada angka tanpa sumber. Kami beritahu bila sudah siap, dan beritahu bila belum.')],
        why_h='Mengapa BookingYou wujud',
        why=['Studio kuku, salun rambut, tutor dan jurulatih peribadi yang dikendalikan seorang selama ini menjadualkan melalui telefon, aplikasi mesej dan buku kertas. Telefon berbunyi ketika melayan pelanggan; pertanyaan selepas waktu tutup hanya dilihat keesokan pagi.',
             'Kebanyakan alat tempahan mengenakan satu peraturan untuk seluruh kedai, atau mengambil komisen dan yuran bulanan. Selepas mengira, kedai kecil sering kekal dengan buku kertas.',
             'BookingYou memudahkannya: kedai mendapat pautan tempahan dan kad QR, pelanggan memilih masa sendiri, dan pemilik melihat seluruh hari dalam satu kalendar.'],
        hold_h='Pegangan kami',
        hold=[('Kami tidak menyentuh wang', 'Tiada komisen dan tiada yuran tempahan. Pelanggan membayar terus kepada kedai; BookingYou tidak mengendalikan pembayaran.'),
              ('Ciri asas percuma, selamanya', 'Halaman tempahan, waktu operasi, slot masa, hari tutup dan rekod pelanggan adalah percuma. Ciri berbayar pada masa depan akan ditanda dengan jelas.'),
              ('Tempatan dahulu', 'Lapan bahasa antara muka. Zon waktu, mata wang dan kalendar mengikut lokasi kedai. Kedai di Seoul mahukan antara muka Korea, bukan terjemahan.'),
              ('Peraturan mengikut slot', 'Pengesahan segera pada petang hari bekerja, kelulusan pemilik pada malam Sabtu. Satu kedai, peraturan berbeza untuk waktu berbeza.')],
        tl_h='Perjalanan setakat ini',
        tl=[('Julai 2026', 'Aplikasi iOS dikeluarkan di App Store, dalam lapan bahasa dari hari pertama.'),
            ('Ogos 2026', 'Aplikasi Android dikeluarkan di Google Play.'),
            ('September 2026', 'Tempahan web dilancarkan: pelanggan menempah di pelayar tanpa memasang apa-apa.'),
            ('Kini', 'Bermula di Jepun, merekrut kedai pertama satu bandar pada satu masa.')],
        yu_h='Yu-kun', yu='Maskot BookingYou — kalendar yang sentiasa ceria. Yu-kun muncul dalam aplikasi, hantaran kami dan laman ini untuk mengingatkan bahawa tempahan boleh jadi mudah.',
        contact_h='Hubungi', contact='Kerjasama, pertanyaan media dan maklum balas dialu-alukan melalui e-mel.', mail='contact@bookingyou.app',
        cta='Mula secara percuma', back='Kembali ke laman utama'),
    'th': dict(
        title='เกี่ยวกับเรา · BookingYou', nav='เกี่ยวกับเรา', chip='เกี่ยวกับเรา',
        h1='ระบบรับจองสำหรับร้านคนเดียว',
        lead='BookingYou ออกแบบและพัฒนาโดยทีมงานในฮ่องกง เราเชื่อว่าการรับจองไม่ควรยุ่งยากกว่าการรับโทรศัพท์ และเครื่องมือที่ดีไม่ควรบังคับให้ร้านต้องคำนวณหรือเซ็นสัญญาก่อน',
        mis_h='แนวคิดของเรา', mis_lead='เราไม่ได้สร้าง “แพลตฟอร์ม” เราสร้างการ์ดจองที่วางอยู่บนเคาน์เตอร์ ลูกค้าเข้ามาผ่านลิงก์ของร้านเอง และความสัมพันธ์นั้นเป็นของร้าน ไม่ใช่ของเรา', mis=[('เครื่องมือ ไม่ใช่คนกลาง','เราไม่ยืนอยู่ระหว่างร้านกับลูกค้าเพื่อหักส่วนแบ่ง BookingYou แค่ทำให้การจองราบรื่น เงินและความสัมพันธ์ยังอยู่กับร้าน'),('ร้านเล็กมาก่อน','ทุกฟีเจอร์เริ่มจากวิธีทำงานจริงของร้านคนเดียว: ไม่มีมือว่างรับโทรศัพท์ระหว่างให้บริการ เห็นข้อความหลังปิดร้าน อยากเลือกลูกค้าเองในคืนวันเสาร์ สิ่งที่เชนใหญ่ต้องการไม่ใช่ลำดับความสำคัญของเรา'),('ท้องถิ่นก็คือท้องถิ่น','ภาษา เขตเวลา สกุลเงิน และวันหยุดเป็นไปตามที่ตั้งของร้าน เราทำทีละเมือง ไม่ใช่แปลหน้าจอเดียวแปดครั้ง'),('ซื่อสัตย์','ไม่พูดว่า “ดีที่สุดในเมือง” ไม่เขียนตัวเลขที่ไม่มีที่มา ทำเสร็จแล้วค่อยบอก ยังไม่เสร็จก็บอกตามนั้น')],
        why_h='ทำไมถึงสร้าง BookingYou',
        why=['ร้านทำเล็บ ร้านทำผม ติวเตอร์ และเทรนเนอร์ที่ทำงานคนเดียว จัดคิวด้วยโทรศัพท์ แอปแชต และสมุดจดมาตลอด โทรศัพท์ดังระหว่างให้บริการ ส่วนข้อความหลังปิดร้านกว่าจะเห็นก็เช้าวันถัดไป',
             'เครื่องมือจองส่วนใหญ่ใช้กฎเดียวกับทั้งร้าน หรือไม่ก็เก็บค่าคอมมิชชั่นและค่าบริการรายเดือน คำนวณแล้วร้านเล็ก ๆ มักเลือกใช้สมุดจดต่อไป',
             'BookingYou ทำเรื่องง่าย ๆ: ร้านมีลิงก์จองและการ์ด QR ลูกค้าเลือกเวลาเอง เจ้าของร้านเห็นทั้งวันในปฏิทินเดียว'],
        hold_h='สิ่งที่เรายึดถือ',
        hold=[('เราไม่แตะเงิน', 'ไม่มีค่าคอมมิชชั่น ไม่มีค่าธรรมเนียมการจอง ลูกค้าจ่ายให้ร้านโดยตรง BookingYou ไม่รับชำระเงินใด ๆ'),
              ('ฟีเจอร์พื้นฐานฟรีตลอดไป', 'หน้าจอง เวลาทำการ ช่วงเวลา วันหยุด และประวัติลูกค้า ฟรีทั้งหมด หากมีฟีเจอร์เสียเงินในอนาคตจะระบุให้ชัดเจน'),
              ('ท้องถิ่นมาก่อน', 'รองรับ 8 ภาษา เขตเวลา สกุลเงิน และปฏิทินเป็นไปตามที่ตั้งของร้าน ร้านในโซลต้องการหน้าจอภาษาเกาหลี ไม่ใช่หน้าจอที่แปลมา'),
              ('กฎตามช่วงเวลา', 'บ่ายวันธรรมดายืนยันทันที คืนวันเสาร์ให้เจ้าของอนุมัติ ร้านเดียวกัน ต่างเวลา ต่างกฎได้')],
        tl_h='เส้นทางที่ผ่านมา',
        tl=[('กรกฎาคม 2026', 'เปิดตัวแอป iOS บน App Store รองรับ 8 ภาษาตั้งแต่วันแรก'),
            ('สิงหาคม 2026', 'เปิดตัวแอป Android บน Google Play'),
            ('กันยายน 2026', 'เปิดตัวการจองผ่านเว็บ ลูกค้าจองผ่านเบราว์เซอร์ได้โดยไม่ต้องติดตั้ง'),
            ('ตอนนี้', 'เริ่มจากตลาดญี่ปุ่น หาร้านกลุ่มแรกทีละเมือง')],
        yu_h='ยูคุง (ユーくん)', yu='มาสคอตของ BookingYou ปฏิทินที่อารมณ์ดีเสมอ ยูคุงปรากฏในแอป โพสต์ และเว็บไซต์นี้ เพื่อบอกว่าการจองง่ายกว่านี้ได้',
        contact_h='ติดต่อ', contact='ความร่วมมือ สื่อมวลชน และความคิดเห็น ยินดีรับทางอีเมล', mail='contact@bookingyou.app',
        cta='เริ่มใช้ฟรี', back='กลับหน้าแรก'),
    'vi': dict(
        title='Về chúng tôi · BookingYou', nav='Về chúng tôi', chip='Về chúng tôi',
        h1='Quầy nhận đặt lịch cho tiệm một người',
        lead='BookingYou do một đội ngũ tại Hồng Kông thiết kế và xây dựng. Chúng tôi tin rằng nhận lịch hẹn không nên khó hơn nghe điện thoại — và một công cụ tốt không nên bắt tiệm phải tính toán hay ký hợp đồng trước.',
        mis_h='Điều chúng tôi tin', mis_lead='Chúng tôi không xây một “nền tảng”. Chúng tôi làm tấm thẻ đặt lịch đặt trên quầy. Khách đến qua liên kết của chính tiệm, và mối quan hệ đó thuộc về tiệm, không thuộc về chúng tôi.', mis=[('Công cụ, không phải trung gian','Chúng tôi không đứng giữa tiệm và khách để lấy phần. BookingYou chỉ làm việc đặt lịch trôi chảy hơn; tiền và mối quan hệ ở lại với tiệm.'),('Tiệm nhỏ trước','Mọi tính năng xuất phát từ cách một tiệm một người thực sự vận hành: không rảnh tay nghe điện thoại giữa lúc làm, đọc tin nhắn sau giờ đóng cửa, muốn tự chọn khách tối thứ Bảy. Nhu cầu của chuỗi lớn không phải ưu tiên của chúng tôi.'),('Địa phương là địa phương','Ngôn ngữ, múi giờ, tiền tệ và ngày lễ theo nơi đặt tiệm. Chúng tôi đi từng thành phố, thay vì dịch một giao diện tám lần.'),('Thành thật','Không “tốt nhất thành phố”, không số liệu vô căn cứ. Làm xong mới nói, chưa xong thì nói chưa xong.')],
        why_h='Vì sao có BookingYou',
        why=['Tiệm nail, salon tóc, gia sư và huấn luyện viên cá nhân làm một mình xưa nay xếp lịch bằng điện thoại, ứng dụng nhắn tin và sổ giấy. Điện thoại reo giữa lúc làm khách; tin nhắn sau giờ đóng cửa sáng hôm sau mới thấy.',
             'Phần lớn công cụ đặt lịch chỉ áp một quy tắc cho cả tiệm, hoặc thu hoa hồng và phí hằng tháng. Tính xong, tiệm nhỏ thường quay lại với sổ giấy.',
             'BookingYou làm điều đơn giản: tiệm có một liên kết đặt lịch và một thẻ QR, khách tự chọn giờ, chủ tiệm nhìn cả ngày trên một lịch.'],
        hold_h='Điều chúng tôi giữ',
        hold=[('Không chạm vào tiền', 'Không hoa hồng, không phí đặt lịch. Khách trả trực tiếp cho tiệm; BookingYou không xử lý thanh toán.'),
              ('Tính năng cơ bản miễn phí mãi mãi', 'Trang đặt lịch, giờ mở cửa, khung giờ, ngày nghỉ và hồ sơ khách đều miễn phí. Tính năng trả phí trong tương lai (nếu có) sẽ được ghi rõ.'),
              ('Địa phương trước hết', 'Tám ngôn ngữ giao diện. Múi giờ, tiền tệ và lịch theo nơi đặt tiệm. Tiệm ở Seoul cần giao diện tiếng Hàn, không phải bản dịch.'),
              ('Quy tắc theo khung giờ', 'Chiều ngày thường xác nhận ngay, tối thứ Bảy chủ tiệm duyệt. Cùng một tiệm, mỗi khung giờ một quy tắc.')],
        tl_h='Chặng đường',
        tl=[('Tháng 7/2026', 'Ra mắt ứng dụng iOS trên App Store, tám ngôn ngữ ngay từ đầu.'),
            ('Tháng 8/2026', 'Ra mắt ứng dụng Android trên Google Play.'),
            ('Tháng 9/2026', 'Ra mắt đặt lịch trên web: khách đặt ngay trên trình duyệt, không cần cài gì.'),
            ('Hiện tại', 'Bắt đầu từ thị trường Nhật Bản, tuyển những tiệm đầu tiên theo từng thành phố.')],
        yu_h='Yu-kun', yu='Linh vật của BookingYou — một cuốn lịch lúc nào cũng vui. Yu-kun xuất hiện trong ứng dụng, bài đăng và trang này để nhắc rằng đặt lịch có thể đơn giản hơn.',
        contact_h='Liên hệ', contact='Hợp tác, báo chí và góp ý đều được chào đón qua email.', mail='contact@bookingyou.app',
        cta='Bắt đầu miễn phí', back='Về trang chủ'),
}

ABOUT_CSS = """
  .about-hero{padding:110px 0 70px}
  .about-hero h1{font-size:clamp(34px,4.6vw,56px);line-height:1.25;color:var(--navy);letter-spacing:-.025em;margin-top:16px;max-width:820px}
  .about-hero .lead{max-width:720px;margin-top:20px}
  .about-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:60px;align-items:start}
  .about-why p{font-size:17px;line-height:1.9;color:var(--ink);margin-bottom:16px}
  .about-hold{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:34px}
  .about-mis{grid-template-columns:repeat(4,minmax(0,1fr))}
  .about-hold div{background:var(--white);border:1px solid rgba(18,48,79,.08);border-radius:22px;padding:24px 26px;box-shadow:0 10px 26px rgba(27,67,89,.06)}
  .about-hold b{display:block;font-size:18px;color:var(--navy);margin-bottom:8px}
  .about-hold span{font-size:15px;line-height:1.75;color:var(--muted)}
  .about-tl{list-style:none;margin-top:34px;display:grid;gap:0;border-left:2px solid rgba(19,169,149,.35);padding-left:26px}
  .about-tl li{position:relative;padding-bottom:26px}
  .about-tl li::before{content:"";position:absolute;left:-33px;top:6px;width:12px;height:12px;border-radius:50%;background:var(--teal);box-shadow:0 0 0 4px var(--pale)}
  .about-tl b{display:block;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--teal);margin-bottom:4px}
  .about-tl span{font-size:16px;line-height:1.75;color:var(--ink)}
  .about-yu{display:grid;grid-template-columns:auto 1fr;gap:26px;align-items:center;background:linear-gradient(160deg,var(--pale),#f4fbff);border:1px dashed rgba(19,169,149,.45);border-radius:26px;padding:30px 34px;margin-top:40px}
  .about-yu img{width:120px;height:auto}
  .about-yu b{display:block;font-size:20px;color:var(--navy);margin-bottom:6px}
  .about-yu p{font-size:15px;line-height:1.8;color:var(--ink)}
  .about-contact{margin-top:40px;background:var(--white);border:1px solid rgba(18,48,79,.08);border-radius:22px;padding:28px 32px;display:flex;flex-wrap:wrap;gap:18px;align-items:center;justify-content:space-between}
  .about-contact b{display:block;font-size:18px;color:var(--navy);margin-bottom:4px}
  .about-contact p{font-size:15px;color:var(--muted)}
  .about-contact a.mail{font-weight:700;color:var(--teal);text-decoration:none;font-size:17px}
  .about-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:44px}
  @media(max-width:1100px){.about-mis{grid-template-columns:repeat(2,minmax(0,1fr))}}
  @media(max-width:900px){.about-hero{padding:70px 0 46px}.about-grid{grid-template-columns:1fr;gap:40px}.about-hold,.about-mis{grid-template-columns:1fr}.about-yu{grid-template-columns:1fr;text-align:center;justify-items:center}}
"""

def _esc(s):
    return str(s).replace('&', '&amp;').replace('<', '&lt;').replace('"', '&quot;')

def about_body(code, home):
    """home = 該語言首頁路徑（'/'、'/ja/'…）。"""
    c = ABOUT[code]
    why = ''.join(f'<p>{_esc(x)}</p>' for x in c['why'])
    hold = ''.join(f'<div><b>{_esc(a)}</b><span>{_esc(b)}</span></div>' for a, b in c['hold'])
    mis = ''.join(f'<div><b>{_esc(a)}</b><span>{_esc(b)}</span></div>' for a, b in c['mis'])
    tl = ''.join(f'<li><b>{_esc(a)}</b><span>{_esc(b)}</span></li>' for a, b in c['tl'])
    return (f'<section class="about-hero bg-a"><div class="wrap">'
            f'<span class="chip">{_esc(c["chip"])}</span><h1>{_esc(c["h1"])}</h1><p class="lead">{_esc(c["lead"])}</p></div></section>'
            f'<section><div class="wrap"><h2>{_esc(c["mis_h"])}</h2><p class="lead">{_esc(c["mis_lead"])}</p><div class="about-hold about-mis">{mis}</div></div></section>'
            f'<section class="bg-b"><div class="wrap"><div class="about-grid">'
            f'<div class="about-why"><h2>{_esc(c["why_h"])}</h2>{why}'
            f'<h2 style="margin-top:44px">{_esc(c["hold_h"])}</h2><div class="about-hold">{hold}</div></div>'
            f'<div><h2>{_esc(c["tl_h"])}</h2><ol class="about-tl">{tl}</ol>'
            f'<div class="about-yu"><img src="/assets/yu-kun-wave.png" alt="" loading="lazy"><div><b>{_esc(c["yu_h"])}</b><p>{_esc(c["yu"])}</p></div></div>'
            f'<div class="about-contact"><div><b>{_esc(c["contact_h"])}</b><p>{_esc(c["contact"])}</p></div><a class="mail" href="mailto:{c["mail"]}">{c["mail"]}</a></div>'
            f'<div class="about-actions"><a class="btn btn-main" href="{home}#download">{_esc(c["cta"])}</a><a class="btn btn-ghost" href="{home}">{_esc(c["back"])}</a></div>'
            f'</div></div></div></section>')
