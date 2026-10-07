
const assets={"logo": "assets/logo.png", "photo": "preview-assets/hero-salon-v6.webp", "mascot": "assets/yu-kun-wave.png", "slots": "assets/deck-phone-slots.png", "dashboard": "assets/deck-dashboard.png", "hours": "assets/deck-hours.png", "customer": "assets/illustrations/33-customer-using-phone.webp", "owner": "assets/illustrations/34-salon-owner-welcoming.webp", "web1zh": "assets/webbook/vi-1.jpg", "web2zh": "assets/webbook/vi-2.jpg", "web1ja": "assets/webbook/ja-1.jpg", "web2ja": "assets/webbook/ja-2.jpg", "applezh": "assets/badges/apple-vi-vn.svg", "googlezh": "assets/badges/google-vi.png", "appleja": "assets/badges/apple-ja-jp.svg", "googleja": "assets/badges/google-ja.png"};
const copy={zh:{},ja:{nav1:'BookingYouについて',nav2:"Tính năng",nav3:"Giá",nav4:'よくあるご質問',start:'無料ではじめる',eyebrow:'ひとりで営むお店のための予約管理',hero1:'予約を、もっとかんたんに。',hero2:'お客様との時間を、もっと大切に。',heroDesc:'お客様は自分で予約、お店は一日を管理。電話・来店・ネット予約を、ひとつのカレンダーに。',promise1:'基本機能は無料',promise2:'予約手数料なし',promise3:'iOS・Android・Web',seeHow:'使い方を見る',heroNote:'お客様はアプリなしで、ブラウザから予約できます。',phoneLabel:'空いている時間を選んで、お店に予約。',float:'予約はお客様に。目の前のサービスに集中。',trust:'予約でつながる、小さなお店の毎日に。',ind1:'美容室・理容室',ind2:'ネイルサロン',ind3:'パーソナルジム',ind4:'教室・レッスン',ind5:'ペットサロン',newsBadge:'ウェブ予約',news:'リンクひとつで、お客様はブラウザから予約できます。',about1:'小さなお店の予約を、',about2:'ひとつに、わかりやすく。',aboutDesc:'施術中の電話、あちこちに届くメッセージ。BookingYouなら予約・日程変更・リマインダーをまとめて管理。目の前のお客様に、もっと向き合える毎日へ。',point1:'いつでも予約を受け付けたい',f1a:'お店のリンクが、',f1b:'あなたの予約受付になります。',f1desc:'予約リンクやQRコードを共有するだけ。お客様はアプリなしで、サービス・日付・時間を選べます。ウェブ予約は、お店の確認後に確定します。',f1link:'お店の予約受付をはじめる',point2:'すべての予約を、ひと目で把握したい',f2a:'電話も、来店も、ネットも。',f2b:'ひとつのカレンダーで管理。',f2desc:'電話や来店で受けた予約も、お店から登録。ネット予約と一緒に管理できます。日時変更も、予約を取り消さずにそのまま変更できます。',f2link:'一日の予約をまとめて管理',point3:'お店に合った予約ルールにしたい',f3a:'予約を受ける時間も、休む時間も。',f3b:'お店のペースで決められます。',f3desc:'営業時間、定休日、予約を受けない時間を設定。アプリ内予約は、時間帯ごとに即時確定かお店の承認制かを選べます。',f3link:'使い方をもっと知る',factUnit1:"Phí",fact1:'お支払いはお店に直接',free:"Miễn phí",fact2:'予約管理の基本機能',factUnit3:"Ngôn ngữ",fact3:'お店に合った表示言語',faqTitle:'よくあるご質問',q1:'基本機能は本当に無料ですか？',a1:'予約ページ、カレンダー、代理予約、日時変更、リマインダー、承認ルールなどの基本機能は無料です。Proプランは計画中で、まだ提供しておらず、料金も未定です。',q2:'お客様もアプリを入れる必要がありますか？',a2:'必要ありません。お店のリンクやQRコードからブラウザで予約できます。お店の設定によっては、アプリ内予約のみを受け付ける場合もあります。',q3:'ウェブ予約は自動で確定しますか？',a3:'ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。',cta1:'予約に、ゆとりを。',cta2:'お店の毎日に、笑顔を。',ctaDesc:'今日から、小さなお店の時間をもっと大切に。',downloadNote:'iOS・Androidで配信中 · 基本機能無料',privacy:'プライバシーポリシー',terms:"Điều khoản sử dụng",preview:'デザインプレビュー V10 · 未公開'}};
const images={zh:{web1:'web1zh',web2:'web2zh',apple:'applezh',google:'googlezh'},ja:{web1:'web1ja',web2:'web2ja',apple:'appleja',google:'googleja'}};
Object.assign(copy.zh,{"nav1": "Về BookingYou", "nav2": "Tính năng", "guideScreens": "Giao diện ứng dụng", "guidePosts": "Bài đăng FB / IG", "nav3": "Giá", "nav4": "Câu hỏi thường gặp", "start": "Bắt đầu miễn phí", "eyebrow": "Quản lý lịch hẹn dành cho cơ sở độc lập", "hero1": "Đặt lịch đơn giản hơn.", "hero2": "Dành thời gian cho khách.", "heroDesc": "Khách tự chọn giờ, chủ cơ sở dễ dàng quản lý cả ngày. Gom lịch đặt qua điện thoại, tin nhắn và trực tiếp vào một lịch chung.", "promise1": "Tính năng cơ bản miễn phí", "promise2": "Không hoa hồng", "promise3": "iOS・Android・Web", "seeHow": "Xem cách hoạt động", "heroNote": "Khách có thể gửi yêu cầu qua web mà không cần tải ứng dụng.", "float": "Khách tự đặt, bạn tập trung phục vụ.", "trust": "Dành cho mọi cơ sở nhỏ tận tâm phục vụ theo lịch hẹn", "ind1": "Làm đẹp · Làm tóc", "ind2": "Studio làm móng", "ind3": "Huấn luyện viên cá nhân", "ind4": "Gia sư · Lớp học", "ind5": "Cắt tỉa thú cưng", "industryScope": "Trên đây là những ngành dịch vụ thường nhận đặt lịch. BookingYou cũng phù hợp với các hoạt động khác cần sắp xếp lịch hẹn, giúp cơ sở nhỏ và đơn vị dịch vụ chuyên nghiệp quản lý linh hoạt.", "newsBadge": "Đặt lịch trên web", "news": "Chỉ một liên kết, khách có thể đặt lịch bằng trình duyệt.", "galleryTitle": "Xem rõ từng màn hình, từ tìm cơ sở đến quản lý lịch hẹn.", "galleryDesc": "Xem ảnh minh họa ứng dụng BookingYou: tìm dịch vụ, chọn giờ và chia sẻ liên kết đặt lịch. Chạm vào ảnh bất kỳ để phóng to chi tiết.", "webGuide": "Hướng dẫn khách đặt lịch không cần ứng dụng", "customerTab": "Đặt lịch · Chia sẻ liên kết", "merchantTab": "Quản lý hằng ngày", "galleryNote": "Hình ảnh minh họa ứng dụng; cơ sở, ngày và mức giá chỉ là ví dụ. Giao diện thực tế phụ thuộc vào phiên bản ứng dụng đang dùng.", "yuLabel": "Lời nhắc từ Yu-kun", "yuScreenTitle": "Muốn xem rõ hơn? Chạm vào ảnh.", "yuScreenBody": "Có thể phóng to ảnh và chuyển sang “Quản lý hằng ngày” để xem khung giờ, giờ hoạt động và cài đặt ngôn ngữ.", "about1": "Mỗi lịch hẹn của cơ sở nhỏ,", "about2": "đều được sắp xếp rõ ràng.", "aboutDesc": "BookingYou là ứng dụng quản lý lịch hẹn cho các cơ sở nhỏ phục vụ theo lịch, phù hợp với chăm sóc sắc đẹp, tóc, móng, huấn luyện cá nhân, giảng dạy và chăm sóc thú cưng. Cơ sở quản lý lịch, đặt hộ khách, đổi lịch và nhắc hẹn; khách gửi yêu cầu qua liên kết hoặc mã QR và lịch qua web chỉ được xác lập khi cơ sở xác nhận. Tính năng cơ bản miễn phí, không thu hoa hồng đặt lịch.", "point1": "Để khách gửi yêu cầu đặt lịch bất cứ lúc nào", "f1a": "Một liên kết riêng,", "f1b": "là quầy tiếp nhận lịch hẹn trực tuyến của bạn.", "f1desc": "Chia sẻ liên kết hoặc mã QR để khách chọn dịch vụ, ngày và giờ bằng trình duyệt, không cần tải ứng dụng. Lịch qua web chỉ được xác lập sau khi bạn xác nhận.", "f1link": "Bắt đầu tạo kênh nhận lịch của bạn", "point2": "Nhìn rõ mọi lịch hẹn", "f2a": "Điện thoại, trực tiếp, trực tuyến,", "f2b": "Mọi lịch hẹn trong một lịch chung.", "f2desc": "Thêm lịch hộ khách qua điện thoại hoặc đến trực tiếp rồi quản lý cùng lịch trực tuyến. Khi cần đổi giờ, chỉ cần đổi lịch, không phải hủy và tạo lại.", "f2link": "Tập trung quản lý lịch hẹn mỗi ngày", "point3": "Bạn quyết định nhịp hoạt động", "f3a": "Khi nào đón khách, khi nào nghỉ,", "f3b": "Theo nhịp làm việc của bạn.", "f3desc": "Đặt giờ hoạt động, ngày nghỉ và khoảng thời gian giữ riêng. Lịch trong ứng dụng có thể xác nhận ngay hoặc chờ cơ sở duyệt theo từng khung giờ, phù hợp lịch thực tế hằng ngày.", "f3link": "Tìm hiểu thêm cách sử dụng", "yuBookingTitle": "Khách đã gửi yêu cầu, vẫn cần bạn xác nhận.", "yuBookingBody": "Mọi lịch đặt qua web chỉ được xác lập sau khi cơ sở xác nhận. Lịch đặt trong ứng dụng có thể xác nhận ngay hoặc chờ cơ sở duyệt theo từng khung giờ.", "scenarioHeading": "Cơ sở của bạn, nhịp đặt lịch của bạn.", "scenarioIntro": "Chọn ngành để xem cách dùng BookingYou từ lúc khách đặt lịch đến khi sắp xếp công việc hằng ngày.", "allIndustries": "Xem đủ 12 nhóm ngành", "scenarioBeauty": "Chăm sóc sắc đẹp", "scenarioNails": "Studio làm móng", "scenarioFitness": "Huấn luyện cá nhân", "scenarioTeaching": "Lớp học", "scenarioExample": "Ví dụ sắp xếp lịch hẹn", "scenarioPending": "Gửi yêu cầu qua web, chờ cơ sở xác nhận", "scenarioGuide": "Xem cách khách đặt lịch", "scenarioNote": "Đây là các tình huống minh họa; dịch vụ, thời gian và thời lượng chỉ nhằm giải thích. Lịch có thể đặt thực tế phụ thuộc vào cài đặt của từng cơ sở.", "yuWorkTitle": "Ghi lại cả khách qua điện thoại và khách đến trực tiếp.", "yuWorkBody": "Sau khi nhận hẹn qua điện thoại, tin nhắn riêng hoặc trực tiếp, cơ sở có thể tự thêm bản ghi và quản lý cùng lịch trực tuyến trong một lịch chung.", "factUnit1": "Hoa hồng", "fact1": "Khách thanh toán trực tiếp cho cơ sở", "free": "Miễn phí", "fact2": "Tính năng quản lý lịch hẹn cơ bản", "factUnit3": "ngôn ngữ", "fact3": "Ngôn ngữ giao diện", "postsTitle": "Cùng chia sẻ chuyện cửa hàng và cách đặt lịch.", "postsDesc": "Hướng dẫn đặt lịch, giới thiệu tính năng và chuyện thường ngày của các cơ sở được tổng hợp thành 140 ảnh quảng bá mạng xã hội. Lọc theo ngôn ngữ và chạm để xem ảnh đầy đủ.", "filterLabel": "Ngôn ngữ bài đăng", "allPosts": "Tất cả ngôn ngữ", "loadMore": "Hiển thị thêm bài đăng", "postsNote": "Đây là hình ảnh các bài đăng đã có. Để đọc nội dung gốc, bình luận và cập nhật mới nhất, hãy truy cập tài khoản mạng xã hội chính thức.", "faqTitle": "Có thể bạn muốn biết", "q1": "Tính năng cơ bản có thực sự miễn phí không?", "a1": "Trang đặt lịch, lịch, đặt hộ khách, đổi lịch, nhắc hẹn và quy tắc phê duyệt đều là tính năng cơ bản miễn phí. Bản Pro vẫn đang được lên kế hoạch, chưa ra mắt và chưa định giá.", "q2": "Khách có bắt buộc tải ứng dụng không?", "a2": "Không cần. Khách có thể dùng liên kết hoặc mã QR bạn chia sẻ để gửi yêu cầu ngay trên trình duyệt; một số cơ sở có thể chỉ nhận đặt trong ứng dụng.", "q3": "Lịch đặt qua web có tự động xác nhận không?", "a3": "Mọi lịch đặt qua web cần cơ sở xác nhận mới được xác lập. Với lịch trong ứng dụng, có thể chọn xác nhận ngay hoặc chờ duyệt theo khung giờ.", "cta1": "Lịch hẹn có tổ chức,", "cta2": "Kinh doanh nhẹ nhàng hơn.", "ctaDesc": "Từ hôm nay, dành thêm thời gian cho cơ sở của bạn.", "downloadNote": "Đã có trên iOS và Android · Tính năng cơ bản miễn phí", "devicesTitle": "Điện thoại, iPad và máy tính.", "devicesDesc": "Dùng ứng dụng trên điện thoại và iPad; xem website và hướng dẫn đặt lịch trên máy tính.", "devicesSwitch": "Màn hình máy tính", "devicesBooking": "Hướng dẫn đặt lịch", "devicesPosts": "Bài đăng quảng bá", "devicesSocial": "Mạng xã hội", "devicesShops": "Giới thiệu cơ sở", "privacy": "Chính sách quyền riêng tư", "terms": "Điều khoản dịch vụ", "preview": "設計預覽 V12 · 未發佈", "guideWeb": "Hướng dẫn đặt lịch", "guideFeatures": "Toàn bộ tính năng", "guideWho": "Ngành phù hợp", "closeImage": "Đóng ảnh", "previousImage": "Ảnh trước", "nextImage": "Ảnh tiếp theo", "zoom": "Phóng to xem", "post": "Bài đăng mạng xã hội", "shown": "Đã hiển thị", "of": "／", "unit": "ảnh", "chapterReading": "Tiến độ đọc", "chapterDownload": "Tải ứng dụng", "chapterLabel": "Các phần của trang", "scenarioTabLabel": "Chọn tình huống theo ngành", "scenarioChanged": "Đã chuyển sang:", "progressText": "Đã đọc", "seoKeyword": "Hệ thống quản lý lịch hẹn cho cơ sở nhỏ"});
document.querySelectorAll('[data-asset]').forEach(el=>el.src=assets[el.dataset.asset]);
function setLanguage(lang){if(!copy[lang])lang='zh';document.documentElement.lang=lang==='ja'?'ja':'zh-Hant';document.getElementById('language').value=lang;document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=copy[lang][el.dataset.i18n]||copy.zh[el.dataset.i18n]);document.querySelectorAll('[data-local-asset]').forEach(el=>el.src=assets[images[lang][el.dataset.localAsset]]);document.querySelector('[data-page]').href='https://bookingyou.app/'+(lang==='ja'?'ja/':'')+'about/';document.querySelector('.menu-toggle').setAttribute('aria-label',lang==='ja'?'メニュー':"Mở menu");document.querySelector('.nav').setAttribute('aria-label',lang==='ja'?'メインメニュー':"Menu chính");document.title=lang==='ja'?'BookingYou · ホームページデザインプレビュー':"BookingYou · Bản xem trước thiết kế trang chủ";}
setLanguage(document.documentElement.lang==='ja'?'ja':'zh');
document.getElementById('language').addEventListener('change',e=>setLanguage(e.target.value));
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menu.addEventListener('click',()=>{let open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);menu.textContent=open?'×':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.textContent='☰';}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.textContent='☰';}});

;
const postManifest = [{"id": "001", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "002", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "003", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "004", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "005", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "006", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "007", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "008", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "009", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "010", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "011", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "012", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "013", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "014", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "015", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "016", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "017", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "018", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "019", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "020", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "021", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "022", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "023", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "024", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "025", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "026", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "027", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "028", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "029", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "030", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "031", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "032", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "033", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "034", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "035", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "036", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "037", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "038", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "039", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "040", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "041", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "042", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "043", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "044", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "045", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "046", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "047", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "048", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "049", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "050", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "051", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "052", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "053", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "054", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "055", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "056", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "057", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "058", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "059", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "060", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "061", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "062", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "063", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "064", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "065", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "066", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "067", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "068", "w": 941, "h": 1672, "lang": "ja"}, {"id": "069", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "070", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "071", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "072", "w": 941, "h": 1672, "lang": "ja"}, {"id": "073", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "074", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "075", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "076", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "077", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "078", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "079", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "080", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "081", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "082", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "083", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "084", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "085", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "086", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "087", "w": 1080, "h": 1919, "lang": "ja"}, {"id": "088", "w": 1080, "h": 1919, "lang": "ja"}, {"id": "089", "w": 1080, "h": 1350, "lang": "th"}, {"id": "090", "w": 1080, "h": 1350, "lang": "th"}, {"id": "091", "w": 1080, "h": 1350, "lang": "th"}, {"id": "092", "w": 1080, "h": 1350, "lang": "th"}, {"id": "093", "w": 1080, "h": 1350, "lang": "th"}, {"id": "094", "w": 1080, "h": 1350, "lang": "th"}, {"id": "095", "w": 1080, "h": 1350, "lang": "th"}, {"id": "096", "w": 1080, "h": 1350, "lang": "th"}, {"id": "097", "w": 1080, "h": 1350, "lang": "th"}, {"id": "098", "w": 1080, "h": 1350, "lang": "th"}, {"id": "099", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "100", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "101", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "102", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "103", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "104", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "105", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "106", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "107", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "108", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "109", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "110", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "111", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "112", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "113", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "114", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "115", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "116", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "117", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "118", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "119", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "120", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "121", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "122", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "123", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "124", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "125", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "126", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "127", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "128", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "129", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "130", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "131", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "132", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "133", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "134", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "135", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "136", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "137", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "138", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "139", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "140", "w": 848, "h": 1072, "lang": "ja"}];
const extraCopy = {
 zh:{industryScope:"Trên đây là những ngành dịch vụ thường nhận đặt lịch. BookingYou cũng phù hợp với các hoạt động khác cần sắp xếp lịch hẹn, giúp cơ sở nhỏ và đơn vị dịch vụ chuyên nghiệp quản lý linh hoạt.",galleryTitle:"Xem rõ từng màn hình, từ tìm cơ sở đến quản lý lịch hẹn.",galleryDesc:"Xem ảnh minh họa ứng dụng BookingYou: tìm dịch vụ, chọn giờ và chia sẻ liên kết đặt lịch. Chạm vào ảnh bất kỳ để phóng to chi tiết.",webGuide:"Hướng dẫn khách đặt lịch không cần ứng dụng",customerTab:"Đặt lịch · Chia sẻ liên kết",merchantTab:"Quản lý hằng ngày",galleryNote:"Hình ảnh minh họa ứng dụng; cơ sở, ngày và mức giá chỉ là ví dụ. Giao diện thực tế phụ thuộc vào phiên bản ứng dụng đang dùng.",postsTitle:"Cùng chia sẻ chuyện cửa hàng và cách đặt lịch.",postsDesc:"Hướng dẫn đặt lịch, giới thiệu tính năng và chuyện thường ngày của các cơ sở được tổng hợp thành 140 ảnh quảng bá mạng xã hội. Lọc theo ngôn ngữ và chạm để xem ảnh đầy đủ.",filterLabel:"Ngôn ngữ bài đăng",allPosts:"Tất cả ngôn ngữ",loadMore:"Hiển thị thêm bài đăng",postsNote:"Đây là hình ảnh các bài đăng đã có. Để đọc nội dung gốc, bình luận và cập nhật mới nhất, hãy truy cập tài khoản mạng xã hội chính thức.",guideScreens:"Giao diện ứng dụng",guideWeb:"Hướng dẫn đặt lịch",guideFeatures:"Toàn bộ tính năng",guideWho:"Ngành phù hợp",guidePosts:"Bài đăng FB / IG",closeImage:"Đóng ảnh",previousImage:"Ảnh trước",nextImage:"Ảnh tiếp theo",zoom:"Phóng to xem",post:"Bài đăng mạng xã hội",shown:"Đã hiển thị",of:'／',unit:"ảnh"},
 ja:{industryScope:'掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。',galleryTitle:'お店探しから予約管理まで、画面でわかりやすく。',galleryDesc:'サービス選び、空き時間の確認、予約リンクの共有。BookingYouのアプリ紹介画像を、タップして拡大できます。',webGuide:'アプリ不要の予約ガイド',customerTab:'お客様の予約・リンク共有',merchantTab:'お店の日常管理',galleryNote:'アプリ紹介用の画像です。店舗、日付、金額は表示例で、実際の画面はご利用中のアプリをご確認ください。',postsTitle:'小さなお店の日常も、予約のヒントも。SNSでお届け。',postsDesc:'予約ガイドからお店の日常まで。BookingYouのSNS画像140点をご紹介。言語で絞り込み、タップで拡大できます。',filterLabel:'投稿の言語',allPosts:'すべての言語',loadMore:'もっと見る',postsNote:'既存の投稿画像を掲載しています。投稿本文、コメント、最新情報は公式SNSアカウントをご覧ください。',guideScreens:'アプリ画面',guideWeb:'予約ガイド',guideFeatures:'すべての機能',guideWho:"Ngành phù hợp",guidePosts:"Bài đăng mạng xã hội",closeImage:'画像を閉じる',previousImage:'前の画像',nextImage:'次の画像',zoom:'拡大する',post:"Bài đăng mạng xã hội",shown:"Đang hiển thị",of:'／',unit:"mục"}
};
for(const lang of ['zh','ja'])Object.assign(copy[lang],extraCopy[lang]);
const appTexts={
 zh:[["Tìm cơ sở phù hợp","Tìm cơ sở theo khu vực và loại dịch vụ, xem ảnh và thông tin trước khi đặt lịch."],["Dịch vụ, thời lượng và giá","Mở trang cơ sở để xem dịch vụ, thời lượng và giá từng mục."],["Chọn ngày, rồi chọn giờ","Xem ngày và giờ trống; xác nhận ngay hoặc chờ chủ cơ sở duyệt tùy quy tắc từng khung giờ."],["Thẻ QR riêng của cơ sở","Khách quét mã QR để mở trang đặt lịch, phù hợp đặt tại cơ sở và trên danh thiếp."],["Chia sẻ liên kết đặt lịch chỉ bằng một lần chạm","Đặt liên kết trên WhatsApp, Instagram, Facebook hoặc website để khách quay lại đặt dễ dàng."]],
 ja:[['自分に合うお店を探す','地域やサービスから探し、写真とサービス内容を見て予約へ進めます。'],['サービス・時間・料金','お店のページでサービス一覧、所要時間、料金をまとめて確認できます。'],['日付と空き時間を選ぶ','予約可能な日時を選択。時間帯の設定により即時確定、またはお店の承認後に確定します。'],['お店専用のQRカード','QRコードから予約ページへ。店内や名刺に載せて、予約の入口をつくれます。'],['予約リンクを共有','メッセージやInstagram、Facebook、ホームページにリンクを掲載できます。']]
};
const merchantTexts={
 zh:[["Trang chủ quản lý cơ sở","Xem tập trung trạng thái cơ sở và các mục quản lý; ghi lịch qua điện thoại, trực tiếp và trực tuyến tại cùng một nơi."],["Khung giờ đặt lịch","Khách xem ngày và giờ có thể đặt; cơ sở quản lý khung giờ trống theo vận hành thực tế."],["Cài đặt hoạt động và phê duyệt","Đặt giờ mở cửa, ngày nghỉ và quy tắc xác nhận; lịch trong ứng dụng áp dụng theo khung giờ."],["Giao diện 8 ngôn ngữ","Hỗ trợ tiếng Trung phồn thể, Anh, Trung giản thể, Nhật, Hàn, Mã Lai, Thái và Việt; chuyển đổi theo nhu cầu."]],
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
    const title=lang==='ja'?(isDashboard?'店舗の管理画面':'予約できる時間帯'):(isDashboard?"Trang chủ quản lý cơ sở":"Khung giờ đặt lịch");
    openViewer([{src:assets[element.dataset.heroScreen],title}],0);
  });});
  const resize=()=>pair.style.setProperty('--pair-scale',String(pair.clientWidth/1254));
  if('ResizeObserver' in window)new ResizeObserver(resize).observe(pair);
  window.addEventListener('resize',resize);resize();
  const previousLanguage=setLanguage;
  setLanguage=function(lang){previousLanguage(lang);const isJapanese=langNow()==='ja';
    pair.querySelector('[data-hero-screen="dashboard"]').setAttribute('aria-label',isJapanese?'店舗の管理画面を拡大':"Phóng to trang chủ quản lý cơ sở");
    pair.querySelector('[data-hero-screen="slots"]').setAttribute('aria-label',isJapanese?'予約できる時間帯を拡大':"Phóng to giao diện khung giờ đặt lịch");
  };
  setLanguage(document.getElementById('language').value);
})();

;
(() => {
  const root=document.querySelector('.device-showcase');
  if(!root)return;
  const words={
    zh:{devicesTitle:"Điện thoại, iPad và máy tính.",devicesDesc:"Dùng ứng dụng trên điện thoại và iPad; xem website và hướng dẫn đặt lịch trên máy tính.",devicesSwitch:"Màn hình máy tính",devicesBooking:"Hướng dẫn đặt lịch",devicesPosts:"Bài đăng quảng bá",devicesSocial:"Mạng xã hội",devicesShops:"Giới thiệu cơ sở"},
    ja:{devicesTitle:'スマホも、iPadも、パソコンも。',devicesDesc:'スマホとiPadでアプリを。パソコンではWebサイトや予約ガイドを。',devicesSwitch:'パソコンの画面',devicesBooking:'予約ガイド',devicesPosts:'紹介コンテンツ',devicesSocial:"Mạng xã hội chính thức",devicesShops:'お店の課題'}
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
 const config={"zh": {"path": "", "language": "zh-Hant", "title": "BookingYou | Quản lý đặt lịch cho tiệm nhỏ", "description": "BookingYou giúp các cơ sở làm đẹp, tóc, móng, huấn luyện cá nhân, giảng dạy và chăm sóc thú cưng quản lý lịch hẹn. Chia sẻ liên kết hoặc mã QR để khách gửi yêu cầu qua web mà không cần tải ứng dụng; lịch được xác lập sau khi cơ sở xác nhận. Tính năng cơ bản miễn phí, không thu hoa hồng đặt lịch.", "keyword": "Hệ thống quản lý lịch hẹn cho cơ sở nhỏ", "about": "BookingYou là ứng dụng quản lý lịch hẹn cho các cơ sở nhỏ phục vụ theo lịch, phù hợp với chăm sóc sắc đẹp, tóc, móng, huấn luyện cá nhân, giảng dạy và chăm sóc thú cưng. Cơ sở quản lý lịch, đặt hộ khách, đổi lịch và nhắc hẹn; khách gửi yêu cầu qua liên kết hoặc mã QR và lịch qua web chỉ được xác lập khi cơ sở xác nhận. Tính năng cơ bản miễn phí, không thu hoa hồng đặt lịch."}, "ja": {"path": "ja/", "language": "ja", "title": "BookingYou｜小さなお店の予約管理アプリ・基本機能無料", "description": "美容室・ネイルサロン・パーソナルジム・教室・ペットサロンの予約管理に。予約リンクやQRコードで、お客様はアプリ不要で予約を申し込み、お店の確認後に確定。基本機能無料、予約手数料なし。", "keyword": "小さなお店の予約管理アプリ", "about": "BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。"}},translations={"zh": {"nav1": "Về BookingYou", "nav2": "Tính năng", "guideScreens": "Giao diện ứng dụng", "guidePosts": "Bài đăng FB / IG", "nav3": "Giá", "nav4": "Câu hỏi thường gặp", "start": "Bắt đầu miễn phí", "eyebrow": "Quản lý lịch hẹn dành cho cơ sở độc lập", "hero1": "Đặt lịch đơn giản hơn.", "hero2": "Dành thời gian cho khách.", "heroDesc": "Khách tự chọn giờ, chủ cơ sở dễ dàng quản lý cả ngày. Gom lịch đặt qua điện thoại, tin nhắn và trực tiếp vào một lịch chung.", "promise1": "Tính năng cơ bản miễn phí", "promise2": "Không hoa hồng", "promise3": "iOS・Android・Web", "seeHow": "Xem cách hoạt động", "heroNote": "Khách có thể gửi yêu cầu qua web mà không cần tải ứng dụng.", "float": "Khách tự đặt, bạn tập trung phục vụ.", "trust": "Dành cho mọi cơ sở nhỏ tận tâm phục vụ theo lịch hẹn", "ind1": "Làm đẹp · Làm tóc", "ind2": "Studio làm móng", "ind3": "Huấn luyện viên cá nhân", "ind4": "Gia sư · Lớp học", "ind5": "Cắt tỉa thú cưng", "industryScope": "Trên đây là những ngành dịch vụ thường nhận đặt lịch. BookingYou cũng phù hợp với các hoạt động khác cần sắp xếp lịch hẹn, giúp cơ sở nhỏ và đơn vị dịch vụ chuyên nghiệp quản lý linh hoạt.", "newsBadge": "Đặt lịch trên web", "news": "Chỉ một liên kết, khách có thể đặt lịch bằng trình duyệt.", "galleryTitle": "Xem rõ từng màn hình, từ tìm cơ sở đến quản lý lịch hẹn.", "galleryDesc": "Xem ảnh minh họa ứng dụng BookingYou: tìm dịch vụ, chọn giờ và chia sẻ liên kết đặt lịch. Chạm vào ảnh bất kỳ để phóng to chi tiết.", "webGuide": "Hướng dẫn khách đặt lịch không cần ứng dụng", "customerTab": "Đặt lịch · Chia sẻ liên kết", "merchantTab": "Quản lý hằng ngày", "galleryNote": "Hình ảnh minh họa ứng dụng; cơ sở, ngày và mức giá chỉ là ví dụ. Giao diện thực tế phụ thuộc vào phiên bản ứng dụng đang dùng.", "yuLabel": "Lời nhắc từ Yu-kun", "yuScreenTitle": "Muốn xem rõ hơn? Chạm vào ảnh.", "yuScreenBody": "Có thể phóng to ảnh và chuyển sang “Quản lý hằng ngày” để xem khung giờ, giờ hoạt động và cài đặt ngôn ngữ.", "about1": "Mỗi lịch hẹn của cơ sở nhỏ,", "about2": "đều được sắp xếp rõ ràng.", "aboutDesc": "BookingYou là ứng dụng quản lý lịch hẹn cho các cơ sở nhỏ phục vụ theo lịch, phù hợp với chăm sóc sắc đẹp, tóc, móng, huấn luyện cá nhân, giảng dạy và chăm sóc thú cưng. Cơ sở quản lý lịch, đặt hộ khách, đổi lịch và nhắc hẹn; khách gửi yêu cầu qua liên kết hoặc mã QR và lịch qua web chỉ được xác lập khi cơ sở xác nhận. Tính năng cơ bản miễn phí, không thu hoa hồng đặt lịch.", "point1": "Để khách gửi yêu cầu đặt lịch bất cứ lúc nào", "f1a": "Một liên kết riêng,", "f1b": "là quầy tiếp nhận lịch hẹn trực tuyến của bạn.", "f1desc": "Chia sẻ liên kết hoặc mã QR để khách chọn dịch vụ, ngày và giờ bằng trình duyệt, không cần tải ứng dụng. Lịch qua web chỉ được xác lập sau khi bạn xác nhận.", "f1link": "Bắt đầu tạo kênh nhận lịch của bạn", "point2": "Nhìn rõ mọi lịch hẹn", "f2a": "Điện thoại, trực tiếp, trực tuyến,", "f2b": "Mọi lịch hẹn trong một lịch chung.", "f2desc": "Thêm lịch hộ khách qua điện thoại hoặc đến trực tiếp rồi quản lý cùng lịch trực tuyến. Khi cần đổi giờ, chỉ cần đổi lịch, không phải hủy và tạo lại.", "f2link": "Tập trung quản lý lịch hẹn mỗi ngày", "point3": "Bạn quyết định nhịp hoạt động", "f3a": "Khi nào đón khách, khi nào nghỉ,", "f3b": "Theo nhịp làm việc của bạn.", "f3desc": "Đặt giờ hoạt động, ngày nghỉ và khoảng thời gian giữ riêng. Lịch trong ứng dụng có thể xác nhận ngay hoặc chờ cơ sở duyệt theo từng khung giờ, phù hợp lịch thực tế hằng ngày.", "f3link": "Tìm hiểu thêm cách sử dụng", "yuBookingTitle": "Khách đã gửi yêu cầu, vẫn cần bạn xác nhận.", "yuBookingBody": "Mọi lịch đặt qua web chỉ được xác lập sau khi cơ sở xác nhận. Lịch đặt trong ứng dụng có thể xác nhận ngay hoặc chờ cơ sở duyệt theo từng khung giờ.", "scenarioHeading": "Cơ sở của bạn, nhịp đặt lịch của bạn.", "scenarioIntro": "Chọn ngành để xem cách dùng BookingYou từ lúc khách đặt lịch đến khi sắp xếp công việc hằng ngày.", "allIndustries": "Xem đủ 12 nhóm ngành", "scenarioBeauty": "Chăm sóc sắc đẹp", "scenarioNails": "Studio làm móng", "scenarioFitness": "Huấn luyện cá nhân", "scenarioTeaching": "Lớp học", "scenarioExample": "Ví dụ sắp xếp lịch hẹn", "scenarioPending": "Gửi yêu cầu qua web, chờ cơ sở xác nhận", "scenarioGuide": "Xem cách khách đặt lịch", "scenarioNote": "Đây là các tình huống minh họa; dịch vụ, thời gian và thời lượng chỉ nhằm giải thích. Lịch có thể đặt thực tế phụ thuộc vào cài đặt của từng cơ sở.", "yuWorkTitle": "Ghi lại cả khách qua điện thoại và khách đến trực tiếp.", "yuWorkBody": "Sau khi nhận hẹn qua điện thoại, tin nhắn riêng hoặc trực tiếp, cơ sở có thể tự thêm bản ghi và quản lý cùng lịch trực tuyến trong một lịch chung.", "factUnit1": "Hoa hồng", "fact1": "Khách thanh toán trực tiếp cho cơ sở", "free": "Miễn phí", "fact2": "Tính năng quản lý lịch hẹn cơ bản", "factUnit3": "ngôn ngữ", "fact3": "Ngôn ngữ giao diện", "postsTitle": "Cùng chia sẻ chuyện cửa hàng và cách đặt lịch.", "postsDesc": "Hướng dẫn đặt lịch, giới thiệu tính năng và chuyện thường ngày của các cơ sở được tổng hợp thành 140 ảnh quảng bá mạng xã hội. Lọc theo ngôn ngữ và chạm để xem ảnh đầy đủ.", "filterLabel": "Ngôn ngữ bài đăng", "allPosts": "Tất cả ngôn ngữ", "loadMore": "Hiển thị thêm bài đăng", "postsNote": "Đây là hình ảnh các bài đăng đã có. Để đọc nội dung gốc, bình luận và cập nhật mới nhất, hãy truy cập tài khoản mạng xã hội chính thức.", "faqTitle": "Có thể bạn muốn biết", "q1": "Tính năng cơ bản có thực sự miễn phí không?", "a1": "Trang đặt lịch, lịch, đặt hộ khách, đổi lịch, nhắc hẹn và quy tắc phê duyệt đều là tính năng cơ bản miễn phí. Bản Pro vẫn đang được lên kế hoạch, chưa ra mắt và chưa định giá.", "q2": "Khách có bắt buộc tải ứng dụng không?", "a2": "Không cần. Khách có thể dùng liên kết hoặc mã QR bạn chia sẻ để gửi yêu cầu ngay trên trình duyệt; một số cơ sở có thể chỉ nhận đặt trong ứng dụng.", "q3": "Lịch đặt qua web có tự động xác nhận không?", "a3": "Mọi lịch đặt qua web cần cơ sở xác nhận mới được xác lập. Với lịch trong ứng dụng, có thể chọn xác nhận ngay hoặc chờ duyệt theo khung giờ.", "cta1": "Lịch hẹn có tổ chức,", "cta2": "Kinh doanh nhẹ nhàng hơn.", "ctaDesc": "Từ hôm nay, dành thêm thời gian cho cơ sở của bạn.", "downloadNote": "Đã có trên iOS và Android · Tính năng cơ bản miễn phí", "devicesTitle": "Điện thoại, iPad và máy tính.", "devicesDesc": "Dùng ứng dụng trên điện thoại và iPad; xem website và hướng dẫn đặt lịch trên máy tính.", "devicesSwitch": "Màn hình máy tính", "devicesBooking": "Hướng dẫn đặt lịch", "devicesPosts": "Bài đăng quảng bá", "devicesSocial": "Mạng xã hội", "devicesShops": "Giới thiệu cơ sở", "privacy": "Chính sách quyền riêng tư", "terms": "Điều khoản dịch vụ", "preview": "設計預覽 V12 · 未發佈", "guideWeb": "Hướng dẫn đặt lịch", "guideFeatures": "Toàn bộ tính năng", "guideWho": "Ngành phù hợp", "closeImage": "Đóng ảnh", "previousImage": "Ảnh trước", "nextImage": "Ảnh tiếp theo", "zoom": "Phóng to xem", "post": "Bài đăng mạng xã hội", "shown": "Đã hiển thị", "of": "／", "unit": "ảnh", "chapterReading": "Tiến độ đọc", "chapterDownload": "Tải ứng dụng", "chapterLabel": "Các phần của trang", "scenarioTabLabel": "Chọn tình huống theo ngành", "scenarioChanged": "Đã chuyển sang:", "progressText": "Đã đọc", "seoKeyword": "Hệ thống quản lý lịch hẹn cho cơ sở nhỏ"}, "ja": {"nav1": "BookingYouについて", "nav2": "Tính năng", "nav3": "Giá", "nav4": "よくあるご質問", "start": "無料ではじめる", "eyebrow": "ひとりで営むお店のための予約管理", "hero1": "予約を、もっとかんたんに。", "hero2": "お客様との時間を、もっと大切に。", "heroDesc": "お客様は自分で予約、お店は一日を管理。電話・来店・ネット予約を、ひとつのカレンダーに。", "promise1": "基本機能は無料", "promise2": "予約手数料なし", "promise3": "iOS・Android・Web", "seeHow": "使い方を見る", "heroNote": "お客様はアプリなしで、ブラウザから予約できます。", "phoneLabel": "空いている時間を選んで、お店に予約。", "float": "予約はお客様に。目の前のサービスに集中。", "trust": "予約でつながる、小さなお店の毎日に。", "ind1": "美容室・理容室", "ind2": "ネイルサロン", "ind3": "パーソナルジム", "ind4": "教室・レッスン", "ind5": "ペットサロン", "newsBadge": "ウェブ予約", "news": "リンクひとつで、お客様はブラウザから予約できます。", "about1": "小さなお店の予約を、", "about2": "ひとつに、わかりやすく。", "aboutDesc": "BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。", "point1": "いつでも予約を受け付けたい", "f1a": "お店のリンクが、", "f1b": "あなたの予約受付になります。", "f1desc": "予約リンクやQRコードを共有するだけ。お客様はアプリなしで、サービス・日付・時間を選べます。ウェブ予約は、お店の確認後に確定します。", "f1link": "お店の予約受付をはじめる", "point2": "すべての予約を、ひと目で把握したい", "f2a": "電話も、来店も、ネットも。", "f2b": "ひとつのカレンダーで管理。", "f2desc": "電話や来店で受けた予約も、お店から登録。ネット予約と一緒に管理できます。日時変更も、予約を取り消さずにそのまま変更できます。", "f2link": "一日の予約をまとめて管理", "point3": "お店に合った予約ルールにしたい", "f3a": "予約を受ける時間も、休む時間も。", "f3b": "お店のペースで決められます。", "f3desc": "営業時間、定休日、予約を受けない時間を設定。アプリ内予約は、時間帯ごとに即時確定かお店の承認制かを選べます。", "f3link": "使い方をもっと知る", "factUnit1": "Phí", "fact1": "お支払いはお店に直接", "free": "Miễn phí", "fact2": "予約管理の基本機能", "factUnit3": "Ngôn ngữ", "fact3": "お店に合った表示言語", "faqTitle": "よくあるご質問", "q1": "基本機能は本当に無料ですか？", "a1": "予約ページ、カレンダー、代理予約、日時変更、リマインダー、承認ルールなどの基本機能は無料です。Proプランは計画中で、まだ提供しておらず、料金も未定です。", "q2": "お客様もアプリを入れる必要がありますか？", "a2": "必要ありません。お店のリンクやQRコードからブラウザで予約できます。お店の設定によっては、アプリ内予約のみを受け付ける場合もあります。", "q3": "ウェブ予約は自動で確定しますか？", "a3": "ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。", "cta1": "予約に、ゆとりを。", "cta2": "お店の毎日に、笑顔を。", "ctaDesc": "今日から、小さなお店の時間をもっと大切に。", "downloadNote": "iOS・Androidで配信中 · 基本機能無料", "privacy": "プライバシーポリシー", "terms": "Điều khoản sử dụng", "preview": "デザインプレビュー V12 · 未公開", "industryScope": "掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。", "galleryTitle": "お店探しから予約管理まで、画面でわかりやすく。", "galleryDesc": "サービス選び、空き時間の確認、予約リンクの共有。BookingYouのアプリ紹介画像を、タップして拡大できます。", "webGuide": "アプリ不要の予約ガイド", "customerTab": "お客様の予約・リンク共有", "merchantTab": "お店の日常管理", "galleryNote": "アプリ紹介用の画像です。店舗、日付、金額は表示例で、実際の画面はご利用中のアプリをご確認ください。", "postsTitle": "小さなお店の日常も、予約のヒントも。SNSでお届け。", "postsDesc": "予約ガイドからお店の日常まで。BookingYouのSNS画像140点をご紹介。言語で絞り込み、タップで拡大できます。", "filterLabel": "投稿の言語", "allPosts": "すべての言語", "loadMore": "もっと見る", "postsNote": "既存の投稿画像を掲載しています。投稿本文、コメント、最新情報は公式SNSアカウントをご覧ください。", "guideScreens": "アプリ画面", "guideWeb": "予約ガイド", "guideFeatures": "すべての機能", "guideWho": "Ngành phù hợp", "guidePosts": "Bài đăng mạng xã hội", "closeImage": "画像を閉じる", "previousImage": "前の画像", "nextImage": "次の画像", "zoom": "拡大する", "post": "Bài đăng mạng xã hội", "shown": "Đang hiển thị", "of": "／", "unit": "mục", "scenarioHeading": "お店に合わせた、予約のかたち。", "scenarioIntro": "業種を選んで、お客様の予約から一日の管理まで、BookingYouの使い方をご覧ください。", "allIndustries": "12の業種をすべて見る", "scenarioBeauty": "美容・ケア", "scenarioNails": "ネイルサロン", "scenarioFitness": "パーソナルジム", "scenarioTeaching": "教室・レッスン", "scenarioExample": "予約スケジュールの例", "scenarioPending": "ウェブで送信後、お店の確認を待ちます", "scenarioGuide": "お客様の予約方法を見る", "scenarioNote": "サービス・時間・所要時間は活用例です。実際に予約できる内容は、各店舗の設定によって異なります。", "yuLabel": "Uくんのひとこと", "yuWorkTitle": "電話や来店で受けた予約も、一緒に。", "yuWorkBody": "電話・メッセージ・来店で受けた予約は、お店から登録。ネット予約と同じカレンダーで管理できます。", "yuScreenTitle": "気になる画面は、タップして拡大。", "yuScreenBody": "「お店の日常管理」に切り替えると、予約枠、営業時間、言語設定の紹介画面も確認できます。", "yuBookingTitle": "送信しただけでは、予約はまだ確定しません。", "yuBookingBody": "ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。", "chapterReading": "読書の進み具合", "chapterDownload": "ダウンロード", "chapterLabel": "ページの目次", "scenarioTabLabel": "業種を選択", "scenarioChanged": "選択した業種：", "progressText": "Đã đọc", "devicesTitle": "スマホも、iPadも、パソコンも。", "devicesDesc": "スマホとiPadでアプリを。パソコンではWebサイトや予約ガイドを。", "devicesSwitch": "パソコンの画面", "devicesBooking": "予約ガイド", "devicesPosts": "紹介コンテンツ", "devicesSocial": "Mạng xã hội chính thức", "devicesShops": "お店の課題", "seoKeyword": "小さなお店の予約管理アプリ"}};
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
