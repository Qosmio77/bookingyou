
const assets={"logo": "assets/logo.png", "photo": "preview-assets/hero-salon-v6.webp", "mascot": "assets/yu-kun-wave.png", "slots": "assets/deck-phone-slots.png", "dashboard": "assets/deck-dashboard.png", "hours": "assets/deck-hours.png", "customer": "assets/illustrations/33-customer-using-phone.webp", "owner": "assets/illustrations/34-salon-owner-welcoming.webp", "web1zh": "assets/webbook/ms-1.jpg", "web2zh": "assets/webbook/ms-2.jpg", "web1ja": "assets/webbook/ja-1.jpg", "web2ja": "assets/webbook/ja-2.jpg", "applezh": "assets/badges/apple-ms-my.svg", "googlezh": "assets/badges/google-ms.png", "appleja": "assets/badges/apple-ja-jp.svg", "googleja": "assets/badges/google-ja.png"};
const copy={zh:{},ja:{nav1:'BookingYouについて',nav2:"Pengenalan fungsi",nav3:"Harga",nav4:'よくあるご質問',start:'無料ではじめる',eyebrow:'ひとりで営むお店のための予約管理',hero1:'予約を、もっとかんたんに。',hero2:'お客様との時間を、もっと大切に。',heroDesc:'お客様は自分で予約、お店は一日を管理。電話・来店・ネット予約を、ひとつのカレンダーに。',promise1:'基本機能は無料',promise2:'予約手数料なし',promise3:'iOS・Android・Web',seeHow:'使い方を見る',heroNote:'お客様はアプリなしで、ブラウザから予約できます。',phoneLabel:'空いている時間を選んで、お店に予約。',float:'予約はお客様に。目の前のサービスに集中。',trust:'予約でつながる、小さなお店の毎日に。',ind1:'美容室・理容室',ind2:'ネイルサロン',ind3:'パーソナルジム',ind4:'教室・レッスン',ind5:'ペットサロン',newsBadge:'ウェブ予約',news:'リンクひとつで、お客様はブラウザから予約できます。',about1:'小さなお店の予約を、',about2:'ひとつに、わかりやすく。',aboutDesc:'施術中の電話、あちこちに届くメッセージ。BookingYouなら予約・日程変更・リマインダーをまとめて管理。目の前のお客様に、もっと向き合える毎日へ。',point1:'いつでも予約を受け付けたい',f1a:'お店のリンクが、',f1b:'あなたの予約受付になります。',f1desc:'予約リンクやQRコードを共有するだけ。お客様はアプリなしで、サービス・日付・時間を選べます。ウェブ予約は、お店の確認後に確定します。',f1link:'お店の予約受付をはじめる',point2:'すべての予約を、ひと目で把握したい',f2a:'電話も、来店も、ネットも。',f2b:'ひとつのカレンダーで管理。',f2desc:'電話や来店で受けた予約も、お店から登録。ネット予約と一緒に管理できます。日時変更も、予約を取り消さずにそのまま変更できます。',f2link:'一日の予約をまとめて管理',point3:'お店に合った予約ルールにしたい',f3a:'予約を受ける時間も、休む時間も。',f3b:'お店のペースで決められます。',f3desc:'営業時間、定休日、予約を受けない時間を設定。アプリ内予約は、時間帯ごとに即時確定かお店の承認制かを選べます。',f3link:'使い方をもっと知る',factUnit1:"Komisen",fact1:'お支払いはお店に直接',free:"Percuma",fact2:'予約管理の基本機能',factUnit3:"Bahasa",fact3:'お店に合った表示言語',faqTitle:'よくあるご質問',q1:'基本機能は本当に無料ですか？',a1:'予約ページ、カレンダー、代理予約、日時変更、リマインダー、承認ルールなどの基本機能は無料です。Proプランは計画中で、まだ提供しておらず、料金も未定です。',q2:'お客様もアプリを入れる必要がありますか？',a2:'必要ありません。お店のリンクやQRコードからブラウザで予約できます。お店の設定によっては、アプリ内予約のみを受け付ける場合もあります。',q3:'ウェブ予約は自動で確定しますか？',a3:'ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。',cta1:'予約に、ゆとりを。',cta2:'お店の毎日に、笑顔を。',ctaDesc:'今日から、小さなお店の時間をもっと大切に。',downloadNote:'iOS・Androidで配信中 · 基本機能無料',privacy:'プライバシーポリシー',terms:"Syarat penggunaan",preview:'デザインプレビュー V10 · 未公開'}};
const images={zh:{web1:'web1zh',web2:'web2zh',apple:'applezh',google:'googlezh'},ja:{web1:'web1ja',web2:'web2ja',apple:'appleja',google:'googleja'}};
Object.assign(copy.zh,{"nav1": "Tentang BookingYou", "nav2": "Pengenalan fungsi", "guideScreens": "Paparan aplikasi", "guidePosts": "Siaran FB / IG", "nav3": "Harga", "nav4": "Soalan lazim", "start": "Mula secara percuma", "eyebrow": "Pengurusan tempahan untuk perniagaan kecil bebas", "hero1": "Tempahan yang lebih mudah.", "hero2": "Lebihkan masa untuk pelanggan.", "heroDesc": "Pelanggan memilih masa sendiri, anda mengurus jadual harian dengan mudah. Satukan tempahan telefon, mesej dan kunjungan dalam satu kalendar.", "promise1": "Fungsi asas percuma", "promise2": "Tanpa komisen", "promise3": "iOS・Android・Web", "seeHow": "Lihat cara ia berfungsi", "heroNote": "Pelanggan boleh menghantar permohonan tempahan web tanpa memuat turun aplikasi.", "float": "Pelanggan menempah sendiri, anda fokus pada perkhidmatan.", "trust": "Direka untuk setiap perniagaan kecil berasaskan janji temu yang diusahakan dengan penuh dedikasi", "ind1": "Kecantikan & rambut", "ind2": "Studio kuku", "ind3": "Jurulatih peribadi", "ind4": "Tuisyen & kelas", "ind5": "Dandanan haiwan", "industryScope": "Ini antara industri yang lazim menggunakan janji temu. BookingYou juga sesuai untuk pelbagai perniagaan lain yang memerlukan tempahan, membantu kedai kecil dan penyedia perkhidmatan profesional mengurus janji temu secara fleksibel mengikut skala mereka.", "newsBadge": "Tempahan web", "news": "Satu pautan untuk pelanggan membuat tempahan melalui pelayar.", "galleryTitle": "Lihat setiap paparan, daripada mencari kedai hingga mengurus tempahan.", "galleryDesc": "Lihat imej pengenalan aplikasi BookingYou: cari perkhidmatan, pilih masa dan kongsi pautan tempahan. Tekan mana-mana imej untuk membesarkan butirannya.", "webGuide": "Panduan tempahan tanpa aplikasi", "customerTab": "Tempahan pelanggan & perkongsian", "merchantTab": "Pengurusan harian peniaga", "galleryNote": "Imej pengenalan aplikasi. Kedai, tarikh dan jumlah wang ialah contoh paparan. Rujuk aplikasi yang sedang digunakan untuk susun atur sebenar.", "yuLabel": "Pesanan daripada U", "yuScreenTitle": "Mahu melihat dengan lebih jelas? Tekan sahaja paparan.", "yuScreenBody": "Besarkan paparan aplikasi atau tukar kepada “Pengurusan harian peniaga” untuk melihat slot, waktu operasi dan tetapan bahasa.", "about1": "Setiap tempahan perniagaan kecil anda,", "about2": "tersusun dengan jelas.", "aboutDesc": "BookingYou ialah aplikasi pengurusan tempahan untuk perniagaan kecil berasaskan janji temu, termasuk kecantikan, rambut, kuku, latihan peribadi, pengajaran dan dandanan haiwan. Peniaga boleh mengurus kalendar, membuat tempahan bagi pelanggan, menukar jadual dan mengurus peringatan. Pelanggan menghantar permohonan web melalui pautan atau kod QR, dan tempahan hanya disahkan selepas pengesahan peniaga. Fungsi asas percuma, tanpa komisen tempahan.", "point1": "Benarkan pelanggan menghantar permohonan pada bila-bila masa", "f1a": "Satu pautan khusus,", "f1b": "menjadi kaunter tempahan dalam talian anda.", "f1desc": "Kongsi pautan kedai atau kod QR. Pelanggan boleh memilih perkhidmatan, tarikh dan masa melalui pelayar tanpa memuat turun aplikasi. Tempahan web hanya sah selepas anda mengesahkannya.", "f1link": "Bina saluran tempahan anda", "point2": "Semua tempahan sepintas lalu", "f2a": "Telefon, kunjungan dan dalam talian,", "f2b": "Satu kalendar untuk semua jadual.", "f2desc": "Tambahkan tempahan bagi pelanggan telefon dan kunjungan, kemudian urus bersama tempahan dalam talian. Jika masa berubah, ubah sahaja jadual tanpa membatalkan dan membuat rekod baharu.", "f2link": "Urus semua tempahan harian di satu tempat", "point3": "Anda tentukan rentak operasi", "f3a": "Waktu melayani pelanggan dan waktu berehat,", "f3b": "mengikut rentak kerja anda.", "f3desc": "Tetapkan waktu operasi, hari cuti dan slot yang tidak menerima pelanggan. Bagi tempahan dalam aplikasi, pilih pengesahan segera atau kelulusan peniaga mengikut slot supaya selaras dengan jadual harian sebenar.", "f3link": "Lihat lebih banyak cara penggunaan", "yuBookingTitle": "Selepas pelanggan menghantar permohonan, pengesahan anda masih diperlukan.", "yuBookingBody": "Tempahan web hanya sah selepas pengesahan peniaga. Tempahan dalam aplikasi boleh ditetapkan kepada pengesahan segera atau kelulusan peniaga mengikut slot.", "scenarioHeading": "Perniagaan anda, rentak tempahan anda.", "scenarioIntro": "Pilih industri untuk melihat cara BookingYou membantu, daripada tempahan pelanggan hingga pengurusan jadual kerja harian.", "allIndustries": "Lihat semua 12 industri", "scenarioBeauty": "Rawatan kecantikan", "scenarioNails": "Studio kuku", "scenarioFitness": "Latihan peribadi", "scenarioTeaching": "Kelas pengajaran", "scenarioExample": "Contoh susunan tempahan", "scenarioPending": "Selepas permohonan web, tunggu pengesahan peniaga", "scenarioGuide": "Lihat cara pelanggan menempah", "scenarioNote": "Ini ialah contoh situasi penggunaan. Perkhidmatan, waktu dan tempoh adalah untuk penerangan sahaja. Ketersediaan sebenar bergantung pada tetapan setiap peniaga.", "yuWorkTitle": "Rekodkan juga pelanggan telefon dan kunjungan.", "yuWorkBody": "Selepas menerima tempahan telefon, mesej peribadi atau kunjungan, peniaga boleh menambah rekod sendiri dan mengurusnya bersama tempahan dalam talian dalam satu kalendar.", "factUnit1": "Komisen", "fact1": "Pelanggan membayar terus kepada kedai", "free": "Percuma", "fact2": "Fungsi asas pengurusan tempahan", "factUnit3": "jenis", "fact3": "Bahasa antara muka", "postsTitle": "Kongsi cerita perniagaan dan panduan tempahan.", "postsDesc": "140 imej promosi sosial yang merangkumi panduan tempahan, pengenalan fungsi dan kehidupan perniagaan kecil di pelbagai tempat. Tapis mengikut bahasa dan tekan imej untuk melihat saiz penuh.", "filterLabel": "Bahasa siaran", "allPosts": "Semua bahasa", "loadMore": "Tunjukkan lebih banyak siaran", "postsNote": "Imej siaran asal dipaparkan di sini. Untuk kandungan asal, komen dan perkembangan terkini, kunjungi akaun media sosial rasmi.", "faqTitle": "Soalan yang mungkin anda ada", "q1": "Adakah fungsi asas benar-benar percuma?", "a1": "Fungsi asas seperti halaman tempahan, kalendar, tempahan bagi pihak pelanggan, penjadualan semula, peringatan dan peraturan kelulusan adalah percuma. Pelan Pro masih dalam perancangan, belum dilancarkan dan harganya belum ditetapkan.", "q2": "Perlukah pelanggan memuat turun aplikasi?", "a2": "Tidak. Pelanggan boleh menghantar permohonan terus melalui pelayar menggunakan pautan atau kod QR yang anda kongsi. Sesetengah kedai boleh menetapkan penerimaan tempahan dalam aplikasi sahaja.", "q3": "Adakah tempahan web disahkan secara automatik?", "a3": "Semua tempahan web memerlukan pengesahan kedai sebelum sah. Tempahan dalam aplikasi boleh menggunakan pengesahan segera atau kelulusan peniaga mengikut slot.", "cta1": "Tempahan tersusun,", "cta2": "Urus perniagaan dengan lebih tenang.", "ctaDesc": "Beri perniagaan anda lebih masa, bermula hari ini.", "downloadNote": "Tersedia pada iOS dan Android · Fungsi asas percuma", "devicesTitle": "Telefon, iPad dan komputer.", "devicesDesc": "Lihat aplikasi pada telefon dan iPad, serta laman web dan panduan tempahan pada komputer.", "devicesSwitch": "Paparan komputer", "devicesBooking": "Panduan tempahan", "devicesPosts": "Siaran promosi", "devicesSocial": "Platform sosial", "devicesShops": "Pengenalan perniagaan", "privacy": "Dasar Privasi", "terms": "Terma Perkhidmatan", "preview": "設計預覽 V12 · 未發佈", "guideWeb": "Panduan tempahan", "guideFeatures": "Semua fungsi", "guideWho": "Industri yang sesuai", "closeImage": "Tutup imej", "previousImage": "Imej sebelumnya", "nextImage": "Imej seterusnya", "zoom": "Lihat lebih besar", "post": "Siaran media sosial", "shown": "Dipaparkan", "of": "／", "unit": "imej", "chapterReading": "Kemajuan bacaan", "chapterDownload": "Muat turun aplikasi", "chapterLabel": "Bahagian halaman", "scenarioTabLabel": "Pilih situasi industri", "scenarioChanged": "Ditukar kepada:", "progressText": "Dibaca", "seoKeyword": "Sistem pengurusan tempahan perniagaan kecil"});
document.querySelectorAll('[data-asset]').forEach(el=>el.src=assets[el.dataset.asset]);
function setLanguage(lang){if(!copy[lang])lang='zh';document.documentElement.lang=lang==='ja'?'ja':'zh-Hant';document.getElementById('language').value=lang;document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=copy[lang][el.dataset.i18n]||copy.zh[el.dataset.i18n]);document.querySelectorAll('[data-local-asset]').forEach(el=>el.src=assets[images[lang][el.dataset.localAsset]]);document.querySelector('[data-page]').href='https://bookingyou.app/'+(lang==='ja'?'ja/':'')+'about/';document.querySelector('.menu-toggle').setAttribute('aria-label',lang==='ja'?'メニュー':"Buka menu");document.querySelector('.nav').setAttribute('aria-label',lang==='ja'?'メインメニュー':"Menu utama");document.title=lang==='ja'?'BookingYou · ホームページデザインプレビュー':"BookingYou · Pratonton reka bentuk laman utama";}
setLanguage(document.documentElement.lang==='ja'?'ja':'zh');
document.getElementById('language').addEventListener('change',e=>setLanguage(e.target.value));
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menu.addEventListener('click',()=>{let open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);menu.textContent=open?'×':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.textContent='☰';}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.textContent='☰';}});

;
const postManifest = [{"id": "001", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "002", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "003", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "004", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "005", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "006", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "007", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "008", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "009", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "010", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "011", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "012", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "013", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "014", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "015", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "016", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "017", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "018", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "019", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "020", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "021", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "022", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "023", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "024", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "025", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "026", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "027", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "028", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "029", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "030", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "031", "w": 1080, "h": 1350, "lang": "ja"}, {"id": "032", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "033", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "034", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "035", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "036", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "037", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "038", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "039", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "040", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "041", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "042", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "043", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "044", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "045", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "046", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "047", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "048", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "049", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "050", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "051", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "052", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "053", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "054", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "055", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "056", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "057", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "058", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "059", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "060", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "061", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "062", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "063", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "064", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "065", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "066", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "067", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "068", "w": 941, "h": 1672, "lang": "ja"}, {"id": "069", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "070", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "071", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "072", "w": 941, "h": 1672, "lang": "ja"}, {"id": "073", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "074", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "075", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "076", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "077", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "078", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "079", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "080", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "081", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "082", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "083", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "084", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "085", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "086", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "087", "w": 1080, "h": 1919, "lang": "ja"}, {"id": "088", "w": 1080, "h": 1919, "lang": "ja"}, {"id": "089", "w": 1080, "h": 1350, "lang": "th"}, {"id": "090", "w": 1080, "h": 1350, "lang": "th"}, {"id": "091", "w": 1080, "h": 1350, "lang": "th"}, {"id": "092", "w": 1080, "h": 1350, "lang": "th"}, {"id": "093", "w": 1080, "h": 1350, "lang": "th"}, {"id": "094", "w": 1080, "h": 1350, "lang": "th"}, {"id": "095", "w": 1080, "h": 1350, "lang": "th"}, {"id": "096", "w": 1080, "h": 1350, "lang": "th"}, {"id": "097", "w": 1080, "h": 1350, "lang": "th"}, {"id": "098", "w": 1080, "h": 1350, "lang": "th"}, {"id": "099", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "100", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "101", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "102", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "103", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "104", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "105", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "106", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "107", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "108", "w": 1080, "h": 1350, "lang": "vi"}, {"id": "109", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "110", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "111", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "112", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "113", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "114", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "115", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "116", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "117", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "118", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "119", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "120", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "121", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "122", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "123", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "124", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "125", "w": 1080, "h": 1920, "lang": "ja"}, {"id": "126", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "127", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "128", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "129", "w": 1080, "h": 1920, "lang": "ko"}, {"id": "130", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "131", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "132", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "133", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "134", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "135", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "136", "w": 1080, "h": 1350, "lang": "ko"}, {"id": "137", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "138", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "139", "w": 1080, "h": 1080, "lang": "ja"}, {"id": "140", "w": 848, "h": 1072, "lang": "ja"}];
const extraCopy = {
 zh:{industryScope:"Ini antara industri yang lazim menggunakan janji temu. BookingYou juga sesuai untuk pelbagai perniagaan lain yang memerlukan tempahan, membantu kedai kecil dan penyedia perkhidmatan profesional mengurus janji temu secara fleksibel mengikut skala mereka.",galleryTitle:"Lihat setiap paparan, daripada mencari kedai hingga mengurus tempahan.",galleryDesc:"Lihat imej pengenalan aplikasi BookingYou: cari perkhidmatan, pilih masa dan kongsi pautan tempahan. Tekan mana-mana imej untuk membesarkan butirannya.",webGuide:"Panduan tempahan tanpa aplikasi",customerTab:"Tempahan pelanggan & perkongsian",merchantTab:"Pengurusan harian peniaga",galleryNote:"Imej pengenalan aplikasi. Kedai, tarikh dan jumlah wang ialah contoh paparan. Rujuk aplikasi yang sedang digunakan untuk susun atur sebenar.",postsTitle:"Kongsi cerita perniagaan dan panduan tempahan.",postsDesc:"140 imej promosi sosial yang merangkumi panduan tempahan, pengenalan fungsi dan kehidupan perniagaan kecil di pelbagai tempat. Tapis mengikut bahasa dan tekan imej untuk melihat saiz penuh.",filterLabel:"Bahasa siaran",allPosts:"Semua bahasa",loadMore:"Tunjukkan lebih banyak siaran",postsNote:"Imej siaran asal dipaparkan di sini. Untuk kandungan asal, komen dan perkembangan terkini, kunjungi akaun media sosial rasmi.",guideScreens:"Paparan aplikasi",guideWeb:"Panduan tempahan",guideFeatures:"Semua fungsi",guideWho:"Industri yang sesuai",guidePosts:"Siaran FB / IG",closeImage:"Tutup imej",previousImage:"Imej sebelumnya",nextImage:"Imej seterusnya",zoom:"Lihat lebih besar",post:"Siaran media sosial",shown:"Dipaparkan",of:'／',unit:"imej"},
 ja:{industryScope:'掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。',galleryTitle:'お店探しから予約管理まで、画面でわかりやすく。',galleryDesc:'サービス選び、空き時間の確認、予約リンクの共有。BookingYouのアプリ紹介画像を、タップして拡大できます。',webGuide:'アプリ不要の予約ガイド',customerTab:'お客様の予約・リンク共有',merchantTab:'お店の日常管理',galleryNote:'アプリ紹介用の画像です。店舗、日付、金額は表示例で、実際の画面はご利用中のアプリをご確認ください。',postsTitle:'小さなお店の日常も、予約のヒントも。SNSでお届け。',postsDesc:'予約ガイドからお店の日常まで。BookingYouのSNS画像140点をご紹介。言語で絞り込み、タップで拡大できます。',filterLabel:'投稿の言語',allPosts:'すべての言語',loadMore:'もっと見る',postsNote:'既存の投稿画像を掲載しています。投稿本文、コメント、最新情報は公式SNSアカウントをご覧ください。',guideScreens:'アプリ画面',guideWeb:'予約ガイド',guideFeatures:'すべての機能',guideWho:"Industri yang disokong",guidePosts:"Siaran media sosial",closeImage:'画像を閉じる',previousImage:'前の画像',nextImage:'次の画像',zoom:'拡大する',post:"Siaran media sosial",shown:"Sedang dipaparkan",of:'／',unit:"item"}
};
for(const lang of ['zh','ja'])Object.assign(copy[lang],extraCopy[lang]);
const appTexts={
 zh:[["Cari kedai yang sesuai","Cari kedai mengikut kawasan dan jenis perkhidmatan, lihat foto serta maklumat perkhidmatan, kemudian pilih tempahan."],["Perkhidmatan, tempoh dan harga","Buka halaman kedai untuk memahami perkhidmatan, tempoh dan harga setiap pilihan."],["Pilih tarikh, kemudian masa","Lihat tarikh dan slot yang tersedia. Tempahan disahkan segera atau menunggu kelulusan pemilik mengikut peraturan slot."],["Kad QR khusus kedai","Pelanggan boleh mengimbas kod QR untuk membuka halaman tempahan. Sesuai diletakkan di kedai atau pada kad nama."],["Kongsi pautan tempahan dengan satu sentuhan","Kongsi pautan melalui WhatsApp, Instagram, Facebook atau laman web supaya pelanggan mudah menempah semula."]],
 ja:[['自分に合うお店を探す','地域やサービスから探し、写真とサービス内容を見て予約へ進めます。'],['サービス・時間・料金','お店のページでサービス一覧、所要時間、料金をまとめて確認できます。'],['日付と空き時間を選ぶ','予約可能な日時を選択。時間帯の設定により即時確定、またはお店の承認後に確定します。'],['お店専用のQRカード','QRコードから予約ページへ。店内や名刺に載せて、予約の入口をつくれます。'],['予約リンクを共有','メッセージやInstagram、Facebook、ホームページにリンクを掲載できます。']]
};
const merchantTexts={
 zh:[["Laman utama pengurusan peniaga","Lihat status kedai dan akses pengurusan di satu tempat. Rekodkan tempahan telefon, kunjungan dan dalam talian bersama-sama."],["Slot tempahan","Pelanggan melihat tarikh dan masa yang tersedia; peniaga mengurus slot mengikut operasi sebenar."],["Tetapan operasi dan kelulusan","Tetapkan waktu buka, hari cuti dan peraturan pengesahan yang digunakan mengikut slot dalam aplikasi."],["Antara muka dalam 8 bahasa","Menyokong bahasa Cina Tradisional, Inggeris, Cina Ringkas, Jepun, Korea, Melayu, Thai dan Vietnam. Tukar mengikut keperluan."]],
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
    const title=lang==='ja'?(isDashboard?'店舗の管理画面':'予約できる時間帯'):(isDashboard?"Laman utama pengurusan peniaga":"Slot tempahan");
    openViewer([{src:assets[element.dataset.heroScreen],title}],0);
  });});
  const resize=()=>pair.style.setProperty('--pair-scale',String(pair.clientWidth/1254));
  if('ResizeObserver' in window)new ResizeObserver(resize).observe(pair);
  window.addEventListener('resize',resize);resize();
  const previousLanguage=setLanguage;
  setLanguage=function(lang){previousLanguage(lang);const isJapanese=langNow()==='ja';
    pair.querySelector('[data-hero-screen="dashboard"]').setAttribute('aria-label',isJapanese?'店舗の管理画面を拡大':"Besarkan laman utama pengurusan peniaga");
    pair.querySelector('[data-hero-screen="slots"]').setAttribute('aria-label',isJapanese?'予約できる時間帯を拡大':"Besarkan paparan slot tempahan");
  };
  setLanguage(document.getElementById('language').value);
})();

;
(() => {
  const root=document.querySelector('.device-showcase');
  if(!root)return;
  const words={
    zh:{devicesTitle:"Telefon, iPad dan komputer.",devicesDesc:"Lihat aplikasi pada telefon dan iPad, serta laman web dan panduan tempahan pada komputer.",devicesSwitch:"Paparan komputer",devicesBooking:"Panduan tempahan",devicesPosts:"Siaran promosi",devicesSocial:"Platform sosial",devicesShops:"Pengenalan perniagaan"},
    ja:{devicesTitle:'スマホも、iPadも、パソコンも。',devicesDesc:'スマホとiPadでアプリを。パソコンではWebサイトや予約ガイドを。',devicesSwitch:'パソコンの画面',devicesBooking:'予約ガイド',devicesPosts:'紹介コンテンツ',devicesSocial:"Media sosial rasmi",devicesShops:'お店の課題'}
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
 const config={"zh": {"path": "", "language": "zh-Hant", "title": "BookingYou | Pengurusan Tempahan untuk Kedai Kecil", "description": "BookingYou membantu perniagaan kecil dalam kecantikan, rambut, kuku, latihan peribadi, pengajaran dan dandanan haiwan mengurus tempahan. Kongsi pautan atau kod QR supaya pelanggan boleh menghantar permohonan web tanpa memuat turun aplikasi. Tempahan sah selepas pengesahan peniaga. Fungsi asas percuma, tanpa komisen tempahan.", "keyword": "Sistem pengurusan tempahan perniagaan kecil", "about": "BookingYou ialah aplikasi pengurusan tempahan untuk perniagaan kecil berasaskan janji temu, termasuk kecantikan, rambut, kuku, latihan peribadi, pengajaran dan dandanan haiwan. Peniaga boleh mengurus kalendar, membuat tempahan bagi pelanggan, menukar jadual dan mengurus peringatan. Pelanggan menghantar permohonan web melalui pautan atau kod QR, dan tempahan hanya disahkan selepas pengesahan peniaga. Fungsi asas percuma, tanpa komisen tempahan."}, "ja": {"path": "ja/", "language": "ja", "title": "BookingYou｜小さなお店の予約管理アプリ・基本機能無料", "description": "美容室・ネイルサロン・パーソナルジム・教室・ペットサロンの予約管理に。予約リンクやQRコードで、お客様はアプリ不要で予約を申し込み、お店の確認後に確定。基本機能無料、予約手数料なし。", "keyword": "小さなお店の予約管理アプリ", "about": "BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。"}},translations={"zh": {"nav1": "Tentang BookingYou", "nav2": "Pengenalan fungsi", "guideScreens": "Paparan aplikasi", "guidePosts": "Siaran FB / IG", "nav3": "Harga", "nav4": "Soalan lazim", "start": "Mula secara percuma", "eyebrow": "Pengurusan tempahan untuk perniagaan kecil bebas", "hero1": "Tempahan yang lebih mudah.", "hero2": "Lebihkan masa untuk pelanggan.", "heroDesc": "Pelanggan memilih masa sendiri, anda mengurus jadual harian dengan mudah. Satukan tempahan telefon, mesej dan kunjungan dalam satu kalendar.", "promise1": "Fungsi asas percuma", "promise2": "Tanpa komisen", "promise3": "iOS・Android・Web", "seeHow": "Lihat cara ia berfungsi", "heroNote": "Pelanggan boleh menghantar permohonan tempahan web tanpa memuat turun aplikasi.", "float": "Pelanggan menempah sendiri, anda fokus pada perkhidmatan.", "trust": "Direka untuk setiap perniagaan kecil berasaskan janji temu yang diusahakan dengan penuh dedikasi", "ind1": "Kecantikan & rambut", "ind2": "Studio kuku", "ind3": "Jurulatih peribadi", "ind4": "Tuisyen & kelas", "ind5": "Dandanan haiwan", "industryScope": "Ini antara industri yang lazim menggunakan janji temu. BookingYou juga sesuai untuk pelbagai perniagaan lain yang memerlukan tempahan, membantu kedai kecil dan penyedia perkhidmatan profesional mengurus janji temu secara fleksibel mengikut skala mereka.", "newsBadge": "Tempahan web", "news": "Satu pautan untuk pelanggan membuat tempahan melalui pelayar.", "galleryTitle": "Lihat setiap paparan, daripada mencari kedai hingga mengurus tempahan.", "galleryDesc": "Lihat imej pengenalan aplikasi BookingYou: cari perkhidmatan, pilih masa dan kongsi pautan tempahan. Tekan mana-mana imej untuk membesarkan butirannya.", "webGuide": "Panduan tempahan tanpa aplikasi", "customerTab": "Tempahan pelanggan & perkongsian", "merchantTab": "Pengurusan harian peniaga", "galleryNote": "Imej pengenalan aplikasi. Kedai, tarikh dan jumlah wang ialah contoh paparan. Rujuk aplikasi yang sedang digunakan untuk susun atur sebenar.", "yuLabel": "Pesanan daripada U", "yuScreenTitle": "Mahu melihat dengan lebih jelas? Tekan sahaja paparan.", "yuScreenBody": "Besarkan paparan aplikasi atau tukar kepada “Pengurusan harian peniaga” untuk melihat slot, waktu operasi dan tetapan bahasa.", "about1": "Setiap tempahan perniagaan kecil anda,", "about2": "tersusun dengan jelas.", "aboutDesc": "BookingYou ialah aplikasi pengurusan tempahan untuk perniagaan kecil berasaskan janji temu, termasuk kecantikan, rambut, kuku, latihan peribadi, pengajaran dan dandanan haiwan. Peniaga boleh mengurus kalendar, membuat tempahan bagi pelanggan, menukar jadual dan mengurus peringatan. Pelanggan menghantar permohonan web melalui pautan atau kod QR, dan tempahan hanya disahkan selepas pengesahan peniaga. Fungsi asas percuma, tanpa komisen tempahan.", "point1": "Benarkan pelanggan menghantar permohonan pada bila-bila masa", "f1a": "Satu pautan khusus,", "f1b": "menjadi kaunter tempahan dalam talian anda.", "f1desc": "Kongsi pautan kedai atau kod QR. Pelanggan boleh memilih perkhidmatan, tarikh dan masa melalui pelayar tanpa memuat turun aplikasi. Tempahan web hanya sah selepas anda mengesahkannya.", "f1link": "Bina saluran tempahan anda", "point2": "Semua tempahan sepintas lalu", "f2a": "Telefon, kunjungan dan dalam talian,", "f2b": "Satu kalendar untuk semua jadual.", "f2desc": "Tambahkan tempahan bagi pelanggan telefon dan kunjungan, kemudian urus bersama tempahan dalam talian. Jika masa berubah, ubah sahaja jadual tanpa membatalkan dan membuat rekod baharu.", "f2link": "Urus semua tempahan harian di satu tempat", "point3": "Anda tentukan rentak operasi", "f3a": "Waktu melayani pelanggan dan waktu berehat,", "f3b": "mengikut rentak kerja anda.", "f3desc": "Tetapkan waktu operasi, hari cuti dan slot yang tidak menerima pelanggan. Bagi tempahan dalam aplikasi, pilih pengesahan segera atau kelulusan peniaga mengikut slot supaya selaras dengan jadual harian sebenar.", "f3link": "Lihat lebih banyak cara penggunaan", "yuBookingTitle": "Selepas pelanggan menghantar permohonan, pengesahan anda masih diperlukan.", "yuBookingBody": "Tempahan web hanya sah selepas pengesahan peniaga. Tempahan dalam aplikasi boleh ditetapkan kepada pengesahan segera atau kelulusan peniaga mengikut slot.", "scenarioHeading": "Perniagaan anda, rentak tempahan anda.", "scenarioIntro": "Pilih industri untuk melihat cara BookingYou membantu, daripada tempahan pelanggan hingga pengurusan jadual kerja harian.", "allIndustries": "Lihat semua 12 industri", "scenarioBeauty": "Rawatan kecantikan", "scenarioNails": "Studio kuku", "scenarioFitness": "Latihan peribadi", "scenarioTeaching": "Kelas pengajaran", "scenarioExample": "Contoh susunan tempahan", "scenarioPending": "Selepas permohonan web, tunggu pengesahan peniaga", "scenarioGuide": "Lihat cara pelanggan menempah", "scenarioNote": "Ini ialah contoh situasi penggunaan. Perkhidmatan, waktu dan tempoh adalah untuk penerangan sahaja. Ketersediaan sebenar bergantung pada tetapan setiap peniaga.", "yuWorkTitle": "Rekodkan juga pelanggan telefon dan kunjungan.", "yuWorkBody": "Selepas menerima tempahan telefon, mesej peribadi atau kunjungan, peniaga boleh menambah rekod sendiri dan mengurusnya bersama tempahan dalam talian dalam satu kalendar.", "factUnit1": "Komisen", "fact1": "Pelanggan membayar terus kepada kedai", "free": "Percuma", "fact2": "Fungsi asas pengurusan tempahan", "factUnit3": "jenis", "fact3": "Bahasa antara muka", "postsTitle": "Kongsi cerita perniagaan dan panduan tempahan.", "postsDesc": "140 imej promosi sosial yang merangkumi panduan tempahan, pengenalan fungsi dan kehidupan perniagaan kecil di pelbagai tempat. Tapis mengikut bahasa dan tekan imej untuk melihat saiz penuh.", "filterLabel": "Bahasa siaran", "allPosts": "Semua bahasa", "loadMore": "Tunjukkan lebih banyak siaran", "postsNote": "Imej siaran asal dipaparkan di sini. Untuk kandungan asal, komen dan perkembangan terkini, kunjungi akaun media sosial rasmi.", "faqTitle": "Soalan yang mungkin anda ada", "q1": "Adakah fungsi asas benar-benar percuma?", "a1": "Fungsi asas seperti halaman tempahan, kalendar, tempahan bagi pihak pelanggan, penjadualan semula, peringatan dan peraturan kelulusan adalah percuma. Pelan Pro masih dalam perancangan, belum dilancarkan dan harganya belum ditetapkan.", "q2": "Perlukah pelanggan memuat turun aplikasi?", "a2": "Tidak. Pelanggan boleh menghantar permohonan terus melalui pelayar menggunakan pautan atau kod QR yang anda kongsi. Sesetengah kedai boleh menetapkan penerimaan tempahan dalam aplikasi sahaja.", "q3": "Adakah tempahan web disahkan secara automatik?", "a3": "Semua tempahan web memerlukan pengesahan kedai sebelum sah. Tempahan dalam aplikasi boleh menggunakan pengesahan segera atau kelulusan peniaga mengikut slot.", "cta1": "Tempahan tersusun,", "cta2": "Urus perniagaan dengan lebih tenang.", "ctaDesc": "Beri perniagaan anda lebih masa, bermula hari ini.", "downloadNote": "Tersedia pada iOS dan Android · Fungsi asas percuma", "devicesTitle": "Telefon, iPad dan komputer.", "devicesDesc": "Lihat aplikasi pada telefon dan iPad, serta laman web dan panduan tempahan pada komputer.", "devicesSwitch": "Paparan komputer", "devicesBooking": "Panduan tempahan", "devicesPosts": "Siaran promosi", "devicesSocial": "Platform sosial", "devicesShops": "Pengenalan perniagaan", "privacy": "Dasar Privasi", "terms": "Terma Perkhidmatan", "preview": "設計預覽 V12 · 未發佈", "guideWeb": "Panduan tempahan", "guideFeatures": "Semua fungsi", "guideWho": "Industri yang sesuai", "closeImage": "Tutup imej", "previousImage": "Imej sebelumnya", "nextImage": "Imej seterusnya", "zoom": "Lihat lebih besar", "post": "Siaran media sosial", "shown": "Dipaparkan", "of": "／", "unit": "imej", "chapterReading": "Kemajuan bacaan", "chapterDownload": "Muat turun aplikasi", "chapterLabel": "Bahagian halaman", "scenarioTabLabel": "Pilih situasi industri", "scenarioChanged": "Ditukar kepada:", "progressText": "Dibaca", "seoKeyword": "Sistem pengurusan tempahan perniagaan kecil"}, "ja": {"nav1": "BookingYouについて", "nav2": "Pengenalan fungsi", "nav3": "Harga", "nav4": "よくあるご質問", "start": "無料ではじめる", "eyebrow": "ひとりで営むお店のための予約管理", "hero1": "予約を、もっとかんたんに。", "hero2": "お客様との時間を、もっと大切に。", "heroDesc": "お客様は自分で予約、お店は一日を管理。電話・来店・ネット予約を、ひとつのカレンダーに。", "promise1": "基本機能は無料", "promise2": "予約手数料なし", "promise3": "iOS・Android・Web", "seeHow": "使い方を見る", "heroNote": "お客様はアプリなしで、ブラウザから予約できます。", "phoneLabel": "空いている時間を選んで、お店に予約。", "float": "予約はお客様に。目の前のサービスに集中。", "trust": "予約でつながる、小さなお店の毎日に。", "ind1": "美容室・理容室", "ind2": "ネイルサロン", "ind3": "パーソナルジム", "ind4": "教室・レッスン", "ind5": "ペットサロン", "newsBadge": "ウェブ予約", "news": "リンクひとつで、お客様はブラウザから予約できます。", "about1": "小さなお店の予約を、", "about2": "ひとつに、わかりやすく。", "aboutDesc": "BookingYouは、美容室・ネイルサロン・パーソナルジム・教室・ペットサロンなど、予約制の小さなお店向けの予約管理アプリです。カレンダー、代理予約、日程変更、リマインダーを管理できます。お客様はリンクやQRコードからウェブ予約を申し込み、お店の確認後に確定します。基本機能は無料で、予約手数料はかかりません。", "point1": "いつでも予約を受け付けたい", "f1a": "お店のリンクが、", "f1b": "あなたの予約受付になります。", "f1desc": "予約リンクやQRコードを共有するだけ。お客様はアプリなしで、サービス・日付・時間を選べます。ウェブ予約は、お店の確認後に確定します。", "f1link": "お店の予約受付をはじめる", "point2": "すべての予約を、ひと目で把握したい", "f2a": "電話も、来店も、ネットも。", "f2b": "ひとつのカレンダーで管理。", "f2desc": "電話や来店で受けた予約も、お店から登録。ネット予約と一緒に管理できます。日時変更も、予約を取り消さずにそのまま変更できます。", "f2link": "一日の予約をまとめて管理", "point3": "お店に合った予約ルールにしたい", "f3a": "予約を受ける時間も、休む時間も。", "f3b": "お店のペースで決められます。", "f3desc": "営業時間、定休日、予約を受けない時間を設定。アプリ内予約は、時間帯ごとに即時確定かお店の承認制かを選べます。", "f3link": "使い方をもっと知る", "factUnit1": "Komisen", "fact1": "お支払いはお店に直接", "free": "Percuma", "fact2": "予約管理の基本機能", "factUnit3": "Bahasa", "fact3": "お店に合った表示言語", "faqTitle": "よくあるご質問", "q1": "基本機能は本当に無料ですか？", "a1": "予約ページ、カレンダー、代理予約、日時変更、リマインダー、承認ルールなどの基本機能は無料です。Proプランは計画中で、まだ提供しておらず、料金も未定です。", "q2": "お客様もアプリを入れる必要がありますか？", "a2": "必要ありません。お店のリンクやQRコードからブラウザで予約できます。お店の設定によっては、アプリ内予約のみを受け付ける場合もあります。", "q3": "ウェブ予約は自動で確定しますか？", "a3": "ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。", "cta1": "予約に、ゆとりを。", "cta2": "お店の毎日に、笑顔を。", "ctaDesc": "今日から、小さなお店の時間をもっと大切に。", "downloadNote": "iOS・Androidで配信中 · 基本機能無料", "privacy": "プライバシーポリシー", "terms": "Syarat penggunaan", "preview": "デザインプレビュー V12 · 未公開", "industryScope": "掲載しているのは、予約サービスでよく見られる業種の一例です。BookingYouは、予約が必要なさまざまな業種に対応し、小さなお店から専門サービスまで、事業に合わせた柔軟な予約管理をサポートします。", "galleryTitle": "お店探しから予約管理まで、画面でわかりやすく。", "galleryDesc": "サービス選び、空き時間の確認、予約リンクの共有。BookingYouのアプリ紹介画像を、タップして拡大できます。", "webGuide": "アプリ不要の予約ガイド", "customerTab": "お客様の予約・リンク共有", "merchantTab": "お店の日常管理", "galleryNote": "アプリ紹介用の画像です。店舗、日付、金額は表示例で、実際の画面はご利用中のアプリをご確認ください。", "postsTitle": "小さなお店の日常も、予約のヒントも。SNSでお届け。", "postsDesc": "予約ガイドからお店の日常まで。BookingYouのSNS画像140点をご紹介。言語で絞り込み、タップで拡大できます。", "filterLabel": "投稿の言語", "allPosts": "すべての言語", "loadMore": "もっと見る", "postsNote": "既存の投稿画像を掲載しています。投稿本文、コメント、最新情報は公式SNSアカウントをご覧ください。", "guideScreens": "アプリ画面", "guideWeb": "予約ガイド", "guideFeatures": "すべての機能", "guideWho": "Industri yang disokong", "guidePosts": "Siaran media sosial", "closeImage": "画像を閉じる", "previousImage": "前の画像", "nextImage": "次の画像", "zoom": "拡大する", "post": "Siaran media sosial", "shown": "Sedang dipaparkan", "of": "／", "unit": "item", "scenarioHeading": "お店に合わせた、予約のかたち。", "scenarioIntro": "業種を選んで、お客様の予約から一日の管理まで、BookingYouの使い方をご覧ください。", "allIndustries": "12の業種をすべて見る", "scenarioBeauty": "美容・ケア", "scenarioNails": "ネイルサロン", "scenarioFitness": "パーソナルジム", "scenarioTeaching": "教室・レッスン", "scenarioExample": "予約スケジュールの例", "scenarioPending": "ウェブで送信後、お店の確認を待ちます", "scenarioGuide": "お客様の予約方法を見る", "scenarioNote": "サービス・時間・所要時間は活用例です。実際に予約できる内容は、各店舗の設定によって異なります。", "yuLabel": "Uくんのひとこと", "yuWorkTitle": "電話や来店で受けた予約も、一緒に。", "yuWorkBody": "電話・メッセージ・来店で受けた予約は、お店から登録。ネット予約と同じカレンダーで管理できます。", "yuScreenTitle": "気になる画面は、タップして拡大。", "yuScreenBody": "「お店の日常管理」に切り替えると、予約枠、営業時間、言語設定の紹介画面も確認できます。", "yuBookingTitle": "送信しただけでは、予約はまだ確定しません。", "yuBookingBody": "ウェブ予約はすべて、お店の確認後に確定します。アプリ内予約は、時間帯ごとに即時確定か承認制かを設定できます。", "chapterReading": "読書の進み具合", "chapterDownload": "ダウンロード", "chapterLabel": "ページの目次", "scenarioTabLabel": "業種を選択", "scenarioChanged": "選択した業種：", "progressText": "Dibaca", "devicesTitle": "スマホも、iPadも、パソコンも。", "devicesDesc": "スマホとiPadでアプリを。パソコンではWebサイトや予約ガイドを。", "devicesSwitch": "パソコンの画面", "devicesBooking": "予約ガイド", "devicesPosts": "紹介コンテンツ", "devicesSocial": "Media sosial rasmi", "devicesShops": "お店の課題", "seoKeyword": "小さなお店の予約管理アプリ"}};
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
