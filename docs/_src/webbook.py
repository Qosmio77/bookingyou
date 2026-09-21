# 首頁「網頁預約」區塊：講明客人而家唔使裝 App、用瀏覽器就約到，逐步教點用。
#
# 內容跟 /b/index.html 實際行為（2026-09-21 核對）：
#   揀服務 → 揀日期 → 揀時間 → 填姓名同電話 → 提交；網頁單一律「待確認」，由店舖確認先成立；
#   冇戶口，提交後嘅「你嘅預約連結」（?t=token）就係憑證，睇狀態／取消都靠佢；
#   店舖可以只接受 App 內預約，頁面會一入嚟就講明。
# /b/ 嘅行為改咗，呢度嘅文案要跟住改。
#
# 截圖：assets/webbook/<語言>-1|2|3.jpg，係示範店 Sunny Beauty Studio
#   （App Store 審核用嘅 demo business）嘅真實 /b/ 頁面，390px 手機闊度，冇提交過任何預約。
#   重影方法見 /_src/README.md。唔好用真商戶嘅頁面做截圖。

WEBBOOK_COPY = {
    'zh-HK': dict(
        chip='網頁預約 · 新', h2='而家唔使裝 App，用瀏覽器就約到',
        lead='收到店舖嘅 BookingYou 連結或者 QR code？用手機或者電腦嘅瀏覽器開，就可以直接預約。唔使下載，亦唔使開戶口。',
        steps=[('開店舖條連結', '撳店舖喺 Instagram、通訊 App 或者網站放嘅 BookingYou 連結，或者掃舖面張 QR 卡，瀏覽器就會開到預約頁。'),
               ('揀服務', '每項服務都寫明時長同價錢，揀你想要嗰項。'),
               ('揀日期同時間', '只會顯示仲有位嘅時段，時間係店舖當地時間；休息日會變灰，揀唔到。'),
               ('填姓名同電話', '店舖只需要呢兩樣，備註可以選填。唔使註冊。'),
               ('提交，等店舖確認', '網頁預約要店舖確認先算成立。提交之後會有一條「你嘅預約連結」，儲存低，之後靠佢睇狀態或者取消。')],
        know_h='留意',
        know=['冇戶口，所以預約連結就係你嘅憑證。請儲存低，唔好分享俾人。',
              '店舖確認之後，預約連結上面嘅狀態會由「待確認」變成「已確認」。',
              '個別店舖只接受 App 內預約，預約頁一開就會講明，並俾你一粒掣開 App。',
              '想收提醒、同店舖傾偈、一次過管理所有預約？裝 App 就得。'],
        shop_h='商戶', shop='喺 App 分享你嘅預約連結或者 QR 卡，客人即刻可以用網頁預約。每張網頁單都要你確認先成立；你亦可以揀只接受 App 內預約。',
        cap='畫面係示範店舖嘅實際網頁預約頁。', alt=['預約頁：店舖資料同揀服務', '預約頁：揀日期同時間', '預約頁：填姓名同電話']),
    'en': dict(
        chip='Web booking · New', h2='Book in your browser — no app needed',
        lead='Got a shop’s BookingYou link or QR code? Open it in any browser, on your phone or computer, and book right there. No download and no account.',
        steps=[('Open the shop’s link', 'Tap the BookingYou link the shop shares on Instagram, a messaging app or its website, or scan the QR card at the counter. The booking page opens in your browser.'),
               ('Choose a service', 'Each service shows its duration and price. Pick the one you want.'),
               ('Pick a date and time', 'Only times that are still free are shown, in the shop’s local time. Closed days are greyed out.'),
               ('Enter your name and phone', 'That’s all the shop needs. A note is optional. No sign-up.'),
               ('Send it and wait for the shop', 'Web bookings are confirmed by the shop. After you submit, you get your own booking link — save it to check the status or cancel later.')],
        know_h='Good to know',
        know=['There is no account, so your booking link is your key. Save it and don’t share it.',
              'Once the shop confirms, the status on your booking link changes from “Waiting for the shop” to “Confirmed”.',
              'Some shops take bookings in the app only. The page says so straight away and gives you a button to open the app.',
              'Want reminders, chat with the shop and all your bookings in one place? Get the app.'],
        shop_h='For shops', shop='Share your booking link or QR card from the app and customers can book on the web right away. Every web booking waits for your confirmation, and you can choose to take bookings in the app only.',
        cap='Screens show the live web booking page of our demo shop.', alt=['Booking page: shop details and service', 'Booking page: date and time', 'Booking page: name and phone']),
    'zh-CN': dict(
        chip='网页预约 · 新', h2='现在不用装 App，用浏览器就能预约',
        lead='收到店铺的 BookingYou 链接或二维码？用手机或电脑的浏览器打开，就可以直接预约。不用下载，也不用注册账号。',
        steps=[('打开店铺的链接', '点击店铺在 Instagram、聊天软件或网站上放的 BookingYou 链接，或者扫描店内的二维码卡，浏览器就会打开预约页。'),
               ('选择服务', '每项服务都写明时长和价格，选你想要的那一项。'),
               ('选择日期和时间', '只显示还有空位的时段，时间为店铺当地时间；休息日会变灰，无法选择。'),
               ('填写姓名和电话', '店铺只需要这两项，备注可选填。无需注册。'),
               ('提交，等待店铺确认', '网页预约需要店铺确认后才成立。提交后会得到一条“你的预约链接”，请保存，之后靠它查看状态或取消。')],
        know_h='请留意',
        know=['没有账号，所以预约链接就是你的凭证。请保存好，不要分享给别人。',
              '店铺确认后，预约链接上的状态会从“待确认”变为“已确认”。',
              '个别店铺只接受 App 内预约，预约页一打开就会说明，并提供按钮打开 App。',
              '想收到提醒、和店铺聊天、集中管理所有预约？安装 App 即可。'],
        shop_h='商户', shop='在 App 里分享你的预约链接或二维码卡，客人马上就能用网页预约。每张网页预约都要你确认后才成立；你也可以选择只接受 App 内预约。',
        cap='画面为示范店铺的实际网页预约页。', alt=['预约页：店铺信息与选择服务', '预约页：选择日期和时间', '预约页：填写姓名和电话']),
    'ja': dict(
        chip='ウェブ予約 · NEW', h2='アプリなしで、ブラウザからそのまま予約',
        lead='お店の BookingYou リンクや QR コードを受け取ったら、スマホやパソコンのブラウザでひらくだけ。ダウンロードもアカウント登録も不要です。',
        steps=[('お店のリンクをひらく', 'お店が Instagram やメッセージアプリ、ウェブサイトに載せている BookingYou リンクをタップするか、店頭の QR カードを読み取ると、ブラウザで予約ページがひらきます。'),
               ('サービスを選ぶ', '各サービスの所要時間と料金を見て、希望のものを選びます。'),
               ('日付と時間を選ぶ', '空いている時間だけが表示されます。時間はお店の現地時間です。定休日はグレーになり選べません。'),
               ('お名前と電話番号を入力', 'お店に必要なのはこの二つだけ。備考は任意です。会員登録は不要です。'),
               ('送信して、お店の確認を待つ', 'ウェブ予約は、お店が確認した時点で確定します。送信後に「ご予約リンク」が発行されるので保存してください。状況の確認やキャンセルはこのリンクから行えます。')],
        know_h='ご利用のポイント',
        know=['アカウントがないため、予約リンクがあなたの控えになります。保存して、他の人と共有しないでください。',
              'お店が確認すると、予約リンク上のステータスが「確認待ち」から「確定」に変わります。',
              'アプリからの予約のみ受け付けているお店もあります。その場合はページをひらいた時点で案内し、アプリをひらくボタンを表示します。',
              'リマインダーの受け取り、お店とのチャット、予約の一括管理にはアプリが便利です。'],
        shop_h='店舗の方へ', shop='アプリから予約リンクや QR カードを共有すれば、お客様はすぐにウェブから予約できます。ウェブ予約はすべてお店の確認後に確定します。アプリからの予約のみを受け付ける設定も選べます。',
        cap='画面はデモ店舗の実際のウェブ予約ページです。', alt=['予約ページ：店舗情報とサービス選択', '予約ページ：日付と時間の選択', '予約ページ：お名前と電話番号の入力']),
    'ko': dict(
        chip='웹 예약 · NEW', h2='앱 없이, 브라우저에서 바로 예약',
        lead='매장의 BookingYou 링크나 QR 코드를 받으셨나요? 휴대폰이나 컴퓨터의 브라우저로 열면 바로 예약할 수 있습니다. 다운로드도, 계정 가입도 필요 없습니다.',
        steps=[('매장 링크 열기', '매장이 Instagram, 메신저, 웹사이트에 올린 BookingYou 링크를 누르거나 매장의 QR 카드를 스캔하면 브라우저에서 예약 페이지가 열립니다.'),
               ('서비스 선택', '서비스마다 소요 시간과 가격이 표시됩니다. 원하는 서비스를 고르세요.'),
               ('날짜와 시간 선택', '아직 비어 있는 시간만 표시되며, 시간은 매장 현지 시간 기준입니다. 휴무일은 회색으로 표시되어 선택할 수 없습니다.'),
               ('이름과 전화번호 입력', '매장에 필요한 정보는 이 두 가지뿐입니다. 메모는 선택 사항이며 회원가입은 필요 없습니다.'),
               ('보내고 매장 확인 기다리기', '웹 예약은 매장이 확인해야 확정됩니다. 제출하면 “내 예약 링크”가 발급되니 저장해 두세요. 상태 확인과 취소는 이 링크로 합니다.')],
        know_h='알아 두세요',
        know=['계정이 없기 때문에 예약 링크가 곧 증빙입니다. 저장해 두고 다른 사람과 공유하지 마세요.',
              '매장이 확인하면 예약 링크의 상태가 “확인 대기”에서 “확정”으로 바뀝니다.',
              '앱에서만 예약을 받는 매장도 있습니다. 이 경우 페이지를 열자마자 안내하고 앱 열기 버튼을 보여 드립니다.',
              '알림 받기, 매장과 채팅, 모든 예약을 한곳에서 관리하려면 앱을 설치하세요.'],
        shop_h='매장 안내', shop='앱에서 예약 링크나 QR 카드를 공유하면 고객이 바로 웹에서 예약할 수 있습니다. 모든 웹 예약은 매장이 확인해야 확정되며, 앱 예약만 받도록 선택할 수도 있습니다.',
        cap='화면은 데모 매장의 실제 웹 예약 페이지입니다.', alt=['예약 페이지: 매장 정보와 서비스 선택', '예약 페이지: 날짜와 시간 선택', '예약 페이지: 이름과 전화번호 입력']),
    'ms': dict(
        chip='Tempahan web · Baharu', h2='Tempah terus di pelayar — tanpa aplikasi',
        lead='Dapat pautan atau kod QR BookingYou daripada kedai? Buka di mana-mana pelayar, pada telefon atau komputer, dan tempah terus. Tidak perlu muat turun dan tidak perlu akaun.',
        steps=[('Buka pautan kedai', 'Ketik pautan BookingYou yang dikongsi kedai di Instagram, aplikasi mesej atau laman webnya, atau imbas kad QR di kaunter. Halaman tempahan akan dibuka dalam pelayar anda.'),
               ('Pilih perkhidmatan', 'Setiap perkhidmatan memaparkan tempoh dan harga. Pilih yang anda mahu.'),
               ('Pilih tarikh dan masa', 'Hanya masa yang masih kosong dipaparkan, mengikut waktu tempatan kedai. Hari tutup dikelabukan.'),
               ('Isi nama dan nombor telefon', 'Itu sahaja yang kedai perlukan. Nota adalah pilihan. Tidak perlu mendaftar.'),
               ('Hantar dan tunggu pengesahan kedai', 'Tempahan web disahkan oleh kedai. Selepas menghantar, anda mendapat pautan tempahan sendiri — simpan untuk menyemak status atau membatalkan kemudian.')],
        know_h='Perlu tahu',
        know=['Tiada akaun, jadi pautan tempahan ialah bukti anda. Simpan dan jangan kongsikannya.',
              'Apabila kedai mengesahkan, status pada pautan tempahan bertukar daripada “Menunggu kedai” kepada “Disahkan”.',
              'Sesetengah kedai hanya menerima tempahan dalam aplikasi. Halaman akan memaklumkannya serta-merta dan memberi butang untuk membuka aplikasi.',
              'Mahu peringatan, berbual dengan kedai dan semua tempahan di satu tempat? Dapatkan aplikasi.'],
        shop_h='Untuk kedai', shop='Kongsi pautan tempahan atau kad QR daripada aplikasi dan pelanggan boleh terus menempah di web. Setiap tempahan web menunggu pengesahan anda, dan anda boleh memilih untuk menerima tempahan dalam aplikasi sahaja.',
        cap='Skrin menunjukkan halaman tempahan web sebenar bagi kedai demo kami.', alt=['Halaman tempahan: butiran kedai dan perkhidmatan', 'Halaman tempahan: tarikh dan masa', 'Halaman tempahan: nama dan telefon']),
    'th': dict(
        chip='จองผ่านเว็บ · ใหม่', h2='จองผ่านเบราว์เซอร์ได้เลย ไม่ต้องติดตั้งแอป',
        lead='ได้รับลิงก์หรือ QR code ของ BookingYou จากร้านใช่ไหม เปิดด้วยเบราว์เซอร์บนมือถือหรือคอมพิวเตอร์ แล้วจองได้ทันที ไม่ต้องดาวน์โหลด ไม่ต้องสมัครบัญชี',
        steps=[('เปิดลิงก์ของร้าน', 'แตะลิงก์ BookingYou ที่ร้านแชร์ไว้บน Instagram แอปแชต หรือเว็บไซต์ หรือสแกนการ์ด QR ที่หน้าร้าน หน้าจองจะเปิดในเบราว์เซอร์ของคุณ'),
               ('เลือกบริการ', 'แต่ละบริการแสดงระยะเวลาและราคา เลือกบริการที่ต้องการ'),
               ('เลือกวันและเวลา', 'แสดงเฉพาะเวลาที่ยังว่าง โดยเป็นเวลาท้องถิ่นของร้าน วันหยุดของร้านจะเป็นสีเทาและเลือกไม่ได้'),
               ('กรอกชื่อและเบอร์โทร', 'ร้านต้องการเพียงสองอย่างนี้ หมายเหตุจะใส่หรือไม่ก็ได้ ไม่ต้องสมัครสมาชิก'),
               ('ส่งคำขอและรอร้านยืนยัน', 'การจองผ่านเว็บจะสมบูรณ์เมื่อร้านยืนยัน หลังส่งแล้วคุณจะได้ “ลิงก์การจองของคุณ” โปรดบันทึกไว้เพื่อดูสถานะหรือยกเลิกภายหลัง')],
        know_h='ควรรู้',
        know=['ไม่มีบัญชีผู้ใช้ ลิงก์การจองจึงเป็นหลักฐานของคุณ โปรดบันทึกไว้และอย่าแชร์ให้ผู้อื่น',
              'เมื่อร้านยืนยันแล้ว สถานะในลิงก์การจองจะเปลี่ยนจาก “รอร้านยืนยัน” เป็น “ยืนยันแล้ว”',
              'บางร้านรับจองผ่านแอปเท่านั้น หน้าจองจะแจ้งให้ทราบทันทีและมีปุ่มสำหรับเปิดแอป',
              'อยากรับการแจ้งเตือน แชตกับร้าน และดูการจองทั้งหมดในที่เดียว ติดตั้งแอปได้เลย'],
        shop_h='สำหรับร้าน', shop='แชร์ลิงก์จองหรือการ์ด QR จากในแอป ลูกค้าก็จองผ่านเว็บได้ทันที การจองผ่านเว็บทุกรายการต้องรอคุณยืนยัน และคุณเลือกรับจองผ่านแอปเท่านั้นก็ได้',
        cap='ภาพหน้าจอมาจากหน้าจองผ่านเว็บจริงของร้านตัวอย่าง', alt=['หน้าจอง: ข้อมูลร้านและเลือกบริการ', 'หน้าจอง: เลือกวันและเวลา', 'หน้าจอง: กรอกชื่อและเบอร์โทร']),
    'vi': dict(
        chip='Đặt lịch trên web · Mới', h2='Đặt lịch ngay trên trình duyệt — không cần ứng dụng',
        lead='Bạn nhận được liên kết hoặc mã QR BookingYou của tiệm? Mở bằng trình duyệt trên điện thoại hoặc máy tính là đặt được ngay. Không cần tải về, không cần tài khoản.',
        steps=[('Mở liên kết của tiệm', 'Chạm vào liên kết BookingYou mà tiệm chia sẻ trên Instagram, ứng dụng nhắn tin hoặc website, hoặc quét thẻ QR tại quầy. Trang đặt lịch sẽ mở trong trình duyệt.'),
               ('Chọn dịch vụ', 'Mỗi dịch vụ đều ghi rõ thời lượng và giá. Chọn dịch vụ bạn muốn.'),
               ('Chọn ngày và giờ', 'Chỉ hiển thị những khung giờ còn trống, theo giờ địa phương của tiệm. Ngày nghỉ sẽ bị làm mờ và không chọn được.'),
               ('Nhập tên và số điện thoại', 'Tiệm chỉ cần hai thông tin này. Ghi chú là tùy chọn. Không cần đăng ký.'),
               ('Gửi và chờ tiệm xác nhận', 'Lịch đặt trên web chỉ có hiệu lực khi tiệm xác nhận. Sau khi gửi, bạn nhận được liên kết đặt lịch riêng — hãy lưu lại để xem trạng thái hoặc hủy sau này.')],
        know_h='Cần biết',
        know=['Không có tài khoản, nên liên kết đặt lịch chính là bằng chứng của bạn. Hãy lưu lại và đừng chia sẻ cho người khác.',
              'Khi tiệm xác nhận, trạng thái trên liên kết đặt lịch sẽ chuyển từ “Đang chờ cửa hàng” sang “Đã xác nhận”.',
              'Một số tiệm chỉ nhận đặt lịch qua ứng dụng. Trang sẽ báo ngay khi mở và có nút để mở ứng dụng.',
              'Muốn nhận nhắc lịch, trò chuyện với tiệm và quản lý mọi lịch hẹn ở một nơi? Hãy cài ứng dụng.'],
        shop_h='Dành cho tiệm', shop='Chia sẻ liên kết đặt lịch hoặc thẻ QR từ ứng dụng, khách có thể đặt trên web ngay. Mọi lịch đặt trên web đều chờ bạn xác nhận, và bạn có thể chọn chỉ nhận đặt lịch qua ứng dụng.',
        cap='Ảnh màn hình là trang đặt lịch web thực tế của tiệm demo.', alt=['Trang đặt lịch: thông tin tiệm và dịch vụ', 'Trang đặt lịch: ngày và giờ', 'Trang đặt lịch: tên và số điện thoại']),
}

# 每張截圖對應邊幾個步驟（0-based）
GROUPS = [(0, 1), (2,), (3, 4)]

WEBBOOK_CSS = """
  .wb-cols{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:34px;margin-top:40px;align-items:start}
  .wb-shot{border-radius:26px;overflow:hidden;border:1px solid rgba(18,48,79,.10);box-shadow:var(--shadow);background:#f2f5fa}
  .wb-shot img{display:block;width:100%;height:auto}
  .wb-steps{list-style:none;margin-top:22px;display:grid;gap:18px}
  .wb-steps li{display:grid;grid-template-columns:40px 1fr;gap:14px;align-items:start}
  .wb-num{width:40px;height:40px;border-radius:14px;background:var(--navy);color:#fff;font-weight:800;font-size:17px;display:grid;place-items:center}
  .wb-steps b{display:block;font-size:18px;line-height:1.45;color:var(--navy)}
  .wb-steps div>span{display:block;font-size:15px;line-height:1.75;color:var(--muted);margin-top:3px}
  .wb-foot{display:grid;grid-template-columns:1.35fr 1fr;gap:24px;margin-top:44px}
  .wb-box{background:var(--white);border:1px solid rgba(18,48,79,.08);border-radius:22px;padding:26px 28px;box-shadow:0 10px 26px rgba(27,67,89,.06)}
  .wb-box h3{font-size:17px;color:var(--navy);margin-bottom:12px}
  .wb-box ul{list-style:none;display:grid;gap:10px}
  .wb-box li{position:relative;padding-left:20px;font-size:15px;line-height:1.75;color:var(--ink)}
  .wb-box li::before{content:"";position:absolute;left:2px;top:.72em;width:8px;height:8px;border-radius:50%;background:var(--teal)}
  .wb-box p{font-size:15px;line-height:1.8;color:var(--ink)}
  .wb-box.shop{background:var(--pale);border-color:rgba(19,169,149,.28)}
  @media(max-width:980px){.wb-cols{grid-template-columns:1fr;gap:40px;max-width:460px;margin-left:auto;margin-right:auto}.wb-foot{grid-template-columns:1fr}}
"""

def _esc(s):
    return str(s).replace('&', '&amp;').replace('<', '&lt;').replace('"', '&quot;')

def webbook_markup(code):
    c = WEBBOOK_COPY[code]
    cols = []
    for i, grp in enumerate(GROUPS):
        lis = ''.join(f'<li><span class="wb-num">{n + 1}</span><div><b>{_esc(c["steps"][n][0])}</b><span>{_esc(c["steps"][n][1])}</span></div></li>' for n in grp)
        cols.append(f'<div class="wb-col"><div class="wb-shot"><img src="assets/webbook/{code}-{i + 1}.jpg" alt="{_esc(c["alt"][i])}" loading="lazy" decoding="async" width="640"></div>'
                    f'<ol class="wb-steps">{lis}</ol></div>')
    know = ''.join(f'<li>{_esc(k)}</li>' for k in c['know'])
    return (f'<section id="web-booking" class="bg-b"><div class="wrap">'
            f'<span class="chip">{_esc(c["chip"])}</span>'
            f'<h2 style="margin-top:14px">{_esc(c["h2"])}</h2><p class="lead">{_esc(c["lead"])}</p>'
            f'<div class="wb-cols">{"".join(cols)}</div>'
            f'<div class="wb-foot"><div class="wb-box"><h3>{_esc(c["know_h"])}</h3><ul>{know}</ul></div>'
            f'<div class="wb-box shop"><h3>{_esc(c["shop_h"])}</h3><p>{_esc(c["shop"])}</p></div></div>'
            f'<p class="note">{_esc(c["cap"])}</p>'
            f'</div></section>')
