import html


IMAGES = [
    '01-interrupted-service-call.png',
    '02-scattered-booking-channels.png?v=20260919b',
    '03-after-hours-self-booking.png',
    '04-easy-reschedule.png',
    '05-automatic-reminders.png',
    '06-protected-break-time.png',
    '07-slot-approval-rules.png',
    '08-class-capacity.png',
    '09-direct-booking-payment.png',
    '10-customer-history.png',
]


COPY = {
    'zh-HK': {
        'chip': '商戶日常',
        'title': '每個預約問題，都有清楚的處理方法',
        'lead': '唔使改變你原本做生意嘅方式。BookingYou 只係將最花時間、最容易出錯嘅預約工作接過來。',
        'pain': '商戶痛點',
        'answer': 'BookingYou 對應方法',
    },
    'en': {
        'chip': 'Everyday operations',
        'title': 'A clear answer to every booking problem',
        'lead': 'You do not need to rebuild the way you run your business. BookingYou takes over the booking tasks most likely to waste time or go wrong.',
        'pain': 'Merchant pain point',
        'answer': 'How BookingYou helps',
    },
    'zh-CN': {
        'chip': '商户日常',
        'title': '每个预约问题，都有清楚的处理方法',
        'lead': '无需改变原有的经营方式。BookingYou 帮你接手最费时、最容易出错的预约工作。',
        'pain': '商户痛点',
        'answer': 'BookingYou 对应方法',
    },
    'ja': {
        'chip': '日々の店舗運営',
        'title': '予約の悩み一つひとつに、明確な解決策を',
        'lead': '今の仕事の進め方を大きく変える必要はありません。時間がかかり、ミスが起きやすい予約業務をBookingYouが引き受けます。',
        'pain': '店舗の悩み',
        'answer': 'BookingYouの解決方法',
    },
    'ko': {
        'chip': '매장 운영의 일상',
        'title': '예약 문제마다 분명한 해결 방법을',
        'lead': '기존 운영 방식을 전부 바꿀 필요가 없습니다. 시간이 많이 들고 실수하기 쉬운 예약 업무를 BookingYou가 맡아 드립니다.',
        'pain': '매장의 어려움',
        'answer': 'BookingYou의 해결 방법',
    },
    'ms': {
        'chip': 'Operasi harian',
        'title': 'Jawapan yang jelas untuk setiap masalah tempahan',
        'lead': 'Anda tidak perlu mengubah cara perniagaan dijalankan. BookingYou mengurus bahagian tempahan yang paling memakan masa dan mudah tersilap.',
        'pain': 'Masalah peniaga',
        'answer': 'Cara BookingYou membantu',
    },
    'th': {
        'chip': 'งานประจำวันของร้าน',
        'title': 'ทุกปัญหาการจอง มีวิธีจัดการที่ชัดเจน',
        'lead': 'ไม่ต้องเปลี่ยนวิธีบริหารร้านทั้งหมด BookingYou ช่วยรับช่วงงานจองที่เสียเวลาและเกิดข้อผิดพลาดได้ง่าย',
        'pain': 'ปัญหาของร้าน',
        'answer': 'BookingYou ช่วยอย่างไร',
    },
    'vi': {
        'chip': 'Vận hành hằng ngày',
        'title': 'Mỗi vấn đề đặt lịch đều có cách xử lý rõ ràng',
        'lead': 'Bạn không cần thay đổi toàn bộ cách vận hành. BookingYou tiếp nhận những công việc đặt lịch tốn thời gian và dễ xảy ra sai sót nhất.',
        'pain': 'Khó khăn của doanh nghiệp',
        'answer': 'BookingYou giải quyết',
    },
}


PAIRS = {
    'zh-HK': [
        ('做緊服務，電話同訊息不停響', '停手回覆會打斷服務；唔覆又怕走失新客。', '讓客人 24 小時自己預約', '分享專屬連結或 QR Code，客人自己揀服務、日期同時間。'),
        ('WhatsApp、IG、電話同紙本各有預約', '資料散落幾個地方，忙起來最容易漏單或撞期。', '所有渠道放回同一個日曆', '網上預約、電話單同上門客都可以由商戶統一加入管理。'),
        ('收舖後未覆，客人已經搵第二間', '客人想即時知道有冇位，等到第二日先覆往往太遲。', '任何時間都睇到可預約時段', '系統只顯示真正可用時間，客人毋須等商戶回覆先完成預約。'),
        ('改一次期，要來回幾輪訊息', '取消、重開、再確認，容易記錯新時間或遺失原有紀錄。', '直接改期並保留預約紀錄', '商戶或客人都可按需要更改時間，毋須重新建立整張預約。'),
        ('忙到唔記得提醒，客人又忘記到場', '臨時缺席令原本可以接客的時段白白留空。', '自動發送預約提醒', '預約資料和時間清楚送到客人手上，減少靠人手逐個通知。'),
        ('休息日、食飯時間都被人預約', '營業時間不等於每一分鐘都可以接客。', '按實際營運封鎖時間', '設定休息日、私人時段和保留時段，只開放真正可以接單的時間。'),
        ('旺時想先審批，淡時又想即時確認', '單一確認方式太死板，未能配合每日不同人手和工作量。', '每個時段獨立設定確認方式', '可按日期和時段選擇即時確認，或先由商戶審批再落實。'),
        ('團體班或多人服務容易超額', '只記低開始時間，未必能準確掌握每節尚餘名額。', '為每節設定人數上限', '按課堂、活動或服務設定容量，額滿後不再接受新預約。'),
        ('熟客每次都經平台，持續被抽佣', '明明是自己經營回來的客人，重複預約仍要增加成本。', '建立自己的直接預約入口', '客人經你的連結或 QR Code 預約，直接向商戶付款，BookingYou 不抽佣。'),
        ('客人資料靠記憶，跟進容易斷線', '忘記上次服務、偏好或預約紀錄，影響下次接待。', '集中保留顧客和預約紀錄', '需要時快速查看過往資料，讓回訪客得到更連貫的服務。'),
    ],
    'en': [
        ('Calls and messages interrupt every service', 'Stopping to reply breaks your focus; staying silent risks losing a new customer.', 'Let customers book themselves, 24/7', 'Share your own link or QR code so customers can choose the service, date and time.'),
        ('Bookings are split across WhatsApp, Instagram, calls and paper', 'Scattered information makes missed bookings and double bookings much more likely.', 'Bring every channel into one calendar', 'Add online, phone and walk-in bookings to one place managed by the business.'),
        ('After-hours enquiries go to another business', 'Customers want to know what is available now, not wait until the next morning.', 'Show available times at any hour', 'Customers see only genuinely open slots and can book without waiting for a reply.'),
        ('One reschedule takes several messages', 'Cancelling, re-creating and confirming a booking makes the new time easy to lose.', 'Reschedule without losing the booking record', 'The business or customer can change the time without rebuilding the entire booking.'),
        ('Manual reminders are easy to forget', 'A last-minute no-show leaves time that could have gone to another customer.', 'Send booking reminders automatically', 'Keep the date and time clear for customers without messaging every person by hand.'),
        ('Customers book over breaks or closed days', 'Published opening hours do not mean every minute is available for appointments.', 'Block time around real operations', 'Close holidays, breaks and reserved periods, then offer only times you can actually serve.'),
        ('Busy slots need approval; quiet slots do not', 'One confirmation rule cannot match changing staffing and workload.', 'Choose confirmation rules by time slot', 'Set individual dates and slots to confirm instantly or wait for merchant approval.'),
        ('Group sessions are easily overbooked', 'A start time alone does not show how many places remain in a class or activity.', 'Set a capacity for every session', 'Define the limit for each class, event or service and stop bookings when it is full.'),
        ('Repeat customers still create platform fees', 'Customers you earned yourself should not keep adding a commission cost when they return.', 'Own a direct booking channel', 'Customers book through your link or QR code and pay the business directly. BookingYou takes no commission.'),
        ('Customer history lives in someone’s memory', 'Past services, preferences and booking details are easy to forget before the next visit.', 'Keep customer and booking records together', 'Review previous information when needed and give returning customers a more consistent experience.'),
    ],
    'zh-CN': [
        ('服务进行中，电话和消息不停响', '停下来回复会打断服务；不回复又担心失去新客。', '让顾客 24 小时自助预约', '分享专属链接或二维码，让顾客自行选择服务、日期和时间。'),
        ('微信、社交平台、电话和纸本各有预约', '资料散落在不同地方，忙起来最容易漏单或撞期。', '所有渠道回到同一个日历', '线上、电话和到店预约，都可由商户统一加入并管理。'),
        ('营业后未及时回复，顾客已选择别家', '顾客想马上知道有没有空位，等到第二天往往太迟。', '随时查看可预约时段', '系统只显示真正可用的时间，顾客无需等待回复即可预约。'),
        ('改一次时间，要来回沟通好几次', '取消、重建、再确认，容易记错新时间或丢失原记录。', '直接改期并保留预约记录', '商户或顾客都可更改时间，无需重新建立整个预约。'),
        ('忙起来忘记提醒，顾客也忘记到店', '临时缺席令原本可以服务的时段白白空置。', '自动发送预约提醒', '清楚通知顾客日期和时间，减少逐一手动发送消息。'),
        ('休息日和用餐时间也被预约', '营业时间并不代表每一分钟都能接待顾客。', '按照实际运营封锁时间', '设置休息日、私人和保留时段，只开放真正能接单的时间。'),
        ('忙时想先审批，闲时想即时确认', '单一确认方式太死板，无法配合每天不同的人手和工作量。', '每个时段单独设置确认方式', '可按日期和时段选择即时确认，或先由商户审批。'),
        ('团体课程或多人服务容易超额', '只记录开始时间，无法准确掌握每节还剩多少名额。', '为每节设置人数上限', '按课程、活动或服务设置容量，满额后停止接受新预约。'),
        ('熟客每次都经平台，持续支付佣金', '自己经营回来的顾客，重复预约不应继续增加成本。', '建立自己的直接预约入口', '顾客通过你的链接或二维码预约并直接付款给商户，BookingYou 不收佣金。'),
        ('顾客资料靠记忆，后续服务容易断层', '忘记上次服务、偏好或预约记录，会影响再次接待。', '集中保存顾客与预约记录', '需要时快速查看历史资料，为回访顾客提供更连贯的服务。'),
    ],
    'ja': [
        ('施術中も電話やメッセージが鳴り続ける', '返信すれば接客が中断し、返信しなければ新規客を逃す不安があります。', 'お客様が24時間いつでも自己予約', '専用リンクやQRコードから、サービス・日付・時間を選んでもらえます。'),
        ('LINE、SNS、電話、紙に予約が分散', '情報が散らばるほど、予約漏れやダブルブッキングが起きやすくなります。', 'すべての窓口を一つのカレンダーへ', 'オンライン、電話、来店予約を店舗側でまとめて登録・管理できます。'),
        ('営業時間外の問い合わせを他店に取られる', 'お客様は翌朝の返信ではなく、今すぐ空き状況を知りたいものです。', 'いつでも空き時間を表示', '実際に予約できる枠だけを表示し、返信を待たずに予約を完了できます。'),
        ('一度の日時変更に何往復も必要', 'キャンセル、再登録、再確認を繰り返すと、新しい時間や履歴を見失いがちです。', '履歴を残したまま日時変更', '店舗側でもお客様側でも、予約を作り直さずに時間を変更できます。'),
        ('忙しいとリマインドを送り忘れる', '直前の無断キャンセルで、ほかのお客様に使えた時間が空いてしまいます。', '予約リマインドを自動送信', '一人ずつ連絡しなくても、予約日時をわかりやすくお客様へ届けます。'),
        ('休業日や休憩時間にも予約が入る', '営業時間内でも、すべての時間に対応できるとは限りません。', '実際の運営に合わせて時間をブロック', '休業日、休憩、確保したい時間を閉じ、対応可能な枠だけを公開します。'),
        ('繁忙時は承認制、閑散時は即時確定にしたい', '一律の確定方法では、日ごとの人員や仕事量に対応できません。', '時間枠ごとに確定方法を設定', '日付や時間ごとに、即時確定または店舗承認を選べます。'),
        ('グループレッスンの定員を超えてしまう', '開始時間だけでは、各クラスの残席数を正確に把握できません。', 'セッションごとに定員を設定', 'クラス、イベント、サービスごとに上限を決め、満席時は受付を停止します。'),
        ('リピーター経由でも手数料がかかり続ける', '自店で獲得したお客様の再予約に、毎回コストをかけたくありません。', '自店専用の直接予約窓口を持つ', '専用リンクやQRから予約し、お客様は店舗へ直接支払い。BookingYouの手数料は0です。'),
        ('顧客情報を記憶だけに頼っている', '前回のサービスや希望、予約履歴を忘れると、次の接客に影響します。', '顧客情報と予約履歴を一元管理', '必要なときに過去の情報を確認し、リピーターへ一貫した対応ができます。'),
    ],
    'ko': [
        ('서비스 중에도 전화와 메시지가 계속 온다', '응대하면 서비스가 끊기고, 답하지 않으면 신규 고객을 놓칠 수 있습니다.', '고객이 24시간 직접 예약', '전용 링크나 QR 코드에서 서비스, 날짜, 시간을 직접 선택합니다.'),
        ('메신저, SNS, 전화, 수기 장부에 예약이 흩어져 있다', '정보가 나뉘면 예약 누락과 중복 예약이 생기기 쉽습니다.', '모든 채널을 하나의 캘린더로', '온라인, 전화, 방문 예약을 매장이 한곳에 추가하고 관리할 수 있습니다.'),
        ('영업시간 이후 문의 고객이 다른 곳으로 간다', '고객은 다음 날 답변보다 지금 가능한 시간을 알고 싶어 합니다.', '언제든 예약 가능한 시간 표시', '실제로 비어 있는 시간만 보여 주고 답변을 기다리지 않고 예약하게 합니다.'),
        ('한 번의 일정 변경에 메시지가 여러 번 오간다', '취소, 재등록, 재확인 과정에서 새 시간이나 기존 기록을 놓치기 쉽습니다.', '기록을 유지한 채 일정 변경', '매장이나 고객이 예약을 새로 만들지 않고 시간을 변경할 수 있습니다.'),
        ('바쁠 때 안내 메시지를 보내는 것을 잊는다', '갑작스러운 노쇼는 다른 고객을 받을 수 있던 시간을 비워 둡니다.', '예약 알림 자동 발송', '고객마다 직접 연락하지 않아도 날짜와 시간을 분명하게 안내합니다.'),
        ('휴무일이나 휴식 시간에도 예약이 들어온다', '영업시간이라고 해서 매 순간 고객을 받을 수 있는 것은 아닙니다.', '실제 운영에 맞춰 시간 차단', '휴무일, 휴식, 확보 시간을 닫고 실제 가능한 시간만 공개합니다.'),
        ('바쁜 시간은 승인, 한가한 시간은 즉시 확정하고 싶다', '하나의 확정 방식으로는 날마다 다른 인력과 업무량에 대응하기 어렵습니다.', '시간대별 확정 방식 설정', '날짜와 시간대마다 즉시 확정 또는 매장 승인을 선택할 수 있습니다.'),
        ('그룹 수업이나 다인 서비스가 정원을 넘는다', '시작 시간만 기록하면 회차별 남은 자리를 정확히 알기 어렵습니다.', '회차마다 정원 설정', '수업, 행사, 서비스별 한도를 정하고 만석이면 예약을 멈춥니다.'),
        ('단골 고객도 계속 플랫폼 수수료가 발생한다', '직접 확보한 고객의 재예약에 계속 비용을 낼 필요는 없습니다.', '매장 전용 직접 예약 채널', '전용 링크나 QR로 예약하고 고객은 매장에 직접 결제합니다. BookingYou는 수수료를 받지 않습니다.'),
        ('고객 정보를 기억에만 의존한다', '이전 서비스, 선호 사항, 예약 기록을 잊으면 다음 응대가 끊깁니다.', '고객과 예약 기록을 한곳에 보관', '필요할 때 과거 정보를 확인해 재방문 고객에게 일관된 서비스를 제공합니다.'),
    ],
    'ms': [
        ('Panggilan dan mesej mengganggu setiap sesi', 'Berhenti untuk membalas mengganggu fokus; tidak membalas pula boleh kehilangan pelanggan baharu.', 'Biarkan pelanggan menempah sendiri 24 jam', 'Kongsi pautan atau kod QR supaya mereka memilih servis, tarikh dan masa.'),
        ('Tempahan berpecah antara WhatsApp, media sosial, telefon dan kertas', 'Maklumat yang berselerak mudah menyebabkan tempahan tercicir atau bertindih.', 'Satukan semua saluran dalam satu kalendar', 'Masukkan tempahan dalam talian, telefon dan pelanggan datang terus di satu tempat.'),
        ('Pertanyaan selepas waktu operasi pergi kepada pesaing', 'Pelanggan mahu tahu masa yang tersedia sekarang, bukan menunggu hingga esok.', 'Paparkan masa tersedia pada bila-bila masa', 'Hanya slot sebenar yang kosong dipaparkan dan pelanggan boleh terus menempah.'),
        ('Satu perubahan masa memerlukan banyak mesej', 'Membatal, mencipta semula dan mengesahkan tempahan memudahkan masa baharu tercicir.', 'Ubah masa tanpa kehilangan rekod', 'Peniaga atau pelanggan boleh mengubah masa tanpa membina semula tempahan.'),
        ('Peringatan manual mudah terlupa', 'Pelanggan yang tidak hadir pada saat akhir membiarkan slot terbuang.', 'Hantar peringatan secara automatik', 'Maklumkan tarikh dan masa dengan jelas tanpa menghubungi setiap pelanggan secara manual.'),
        ('Pelanggan menempah pada waktu rehat atau cuti', 'Waktu operasi tidak bermakna setiap minit tersedia untuk janji temu.', 'Sekat masa mengikut operasi sebenar', 'Tutup hari cuti, rehat dan masa simpanan; buka hanya slot yang boleh dilayan.'),
        ('Slot sibuk perlu kelulusan, slot lengang tidak', 'Satu peraturan pengesahan tidak sesuai dengan tenaga kerja dan beban yang berubah.', 'Pilih cara pengesahan bagi setiap slot', 'Tetapkan tarikh dan masa untuk pengesahan segera atau kelulusan peniaga.'),
        ('Sesi berkumpulan mudah terlebih tempahan', 'Masa mula sahaja tidak menunjukkan baki tempat dalam kelas atau aktiviti.', 'Tetapkan kapasiti setiap sesi', 'Tentukan had kelas, acara atau servis dan hentikan tempahan apabila penuh.'),
        ('Pelanggan tetap masih menghasilkan yuran platform', 'Pelanggan yang anda peroleh sendiri tidak sepatutnya menambah kos komisen setiap kali kembali.', 'Miliki saluran tempahan terus', 'Pelanggan menempah melalui pautan atau QR anda dan membayar terus. BookingYou tidak mengambil komisen.'),
        ('Sejarah pelanggan hanya bergantung pada ingatan', 'Servis, pilihan dan rekod lalu mudah dilupakan sebelum lawatan seterusnya.', 'Simpan rekod pelanggan dan tempahan bersama', 'Semak maklumat lama apabila perlu untuk pengalaman pelanggan berulang yang lebih konsisten.'),
    ],
    'th': [
        ('ระหว่างให้บริการ โทรศัพท์และข้อความดังไม่หยุด', 'หยุดตอบก็เสียสมาธิ ไม่ตอบก็อาจเสียลูกค้าใหม่', 'ให้ลูกค้าจองเองได้ตลอด 24 ชั่วโมง', 'แชร์ลิงก์หรือ QR Code ให้ลูกค้าเลือกบริการ วันที่ และเวลาเอง'),
        ('การจองกระจายอยู่ในแชต โซเชียล โทรศัพท์ และกระดาษ', 'ข้อมูลที่กระจัดกระจายทำให้ตกหล่นหรือจองเวลาซ้ำได้ง่าย', 'รวมทุกช่องทางไว้ในปฏิทินเดียว', 'เพิ่มการจองออนไลน์ โทรศัพท์ และหน้าร้านไว้ให้ร้านจัดการจากที่เดียว'),
        ('ตอบหลังเวลาร้านไม่ทัน ลูกค้าไปเลือกร้านอื่น', 'ลูกค้าอยากรู้เวลาว่างทันที ไม่อยากรอคำตอบถึงวันถัดไป', 'แสดงเวลาที่จองได้ทุกเมื่อ', 'แสดงเฉพาะช่วงที่ว่างจริง ลูกค้าจองได้โดยไม่ต้องรอร้านตอบ'),
        ('เปลี่ยนเวลาครั้งเดียวแต่ต้องคุยหลายรอบ', 'การยกเลิก สร้างใหม่ และยืนยันซ้ำ ทำให้เวลาหรือข้อมูลเดิมหายได้ง่าย', 'เลื่อนนัดโดยยังเก็บประวัติไว้', 'ร้านหรือลูกค้าเปลี่ยนเวลาได้โดยไม่ต้องสร้างรายการจองใหม่ทั้งหมด'),
        ('ยุ่งจนลืมเตือน ลูกค้าก็ลืมมาตามนัด', 'การไม่มาตามนัดกะทันหันทำให้เสียช่วงเวลาที่รับลูกค้าคนอื่นได้', 'ส่งการแจ้งเตือนอัตโนมัติ', 'แจ้งวันและเวลาอย่างชัดเจนโดยไม่ต้องส่งข้อความหาลูกค้าทีละคน'),
        ('มีคนจองในวันหยุดหรือเวลาพัก', 'เวลาเปิดร้านไม่ได้หมายความว่าทุกนาทีพร้อมรับนัด', 'ปิดช่วงเวลาตามการทำงานจริง', 'ตั้งวันหยุด เวลาพัก และช่วงที่กันไว้ เปิดเฉพาะเวลาที่ให้บริการได้จริง'),
        ('ช่วงยุ่งอยากอนุมัติก่อน ช่วงว่างอยากยืนยันทันที', 'วิธียืนยันแบบเดียวไม่เหมาะกับจำนวนพนักงานและงานที่เปลี่ยนในแต่ละวัน', 'กำหนดวิธียืนยันแยกตามช่วงเวลา', 'เลือกให้ยืนยันทันทีหรือรอร้านอนุมัติในแต่ละวันและช่วงเวลา'),
        ('คลาสกลุ่มหรือบริการหลายคนเกินจำนวนรับ', 'มีแค่เวลาเริ่มต้นจึงไม่รู้จำนวนที่นั่งคงเหลือจริง', 'กำหนดจำนวนรับต่อรอบ', 'ตั้งความจุของคลาส กิจกรรม หรือบริการ และหยุดรับเมื่อเต็ม'),
        ('ลูกค้าประจำยังทำให้เสียค่าคอมมิชชัน', 'ลูกค้าที่ร้านหามาเองไม่ควรเพิ่มต้นทุนทุกครั้งที่กลับมาจอง', 'มีช่องทางจองตรงของร้านเอง', 'ลูกค้าจองผ่านลิงก์หรือ QR ของร้านและจ่ายให้ร้านโดยตรง BookingYou ไม่คิดค่าคอมมิชชัน'),
        ('ข้อมูลลูกค้าอยู่ในความจำของคนใดคนหนึ่ง', 'บริการเดิม ความชอบ และประวัติการจองอาจถูกลืมก่อนครั้งถัดไป', 'เก็บข้อมูลลูกค้าและการจองไว้ด้วยกัน', 'ดูประวัติเมื่อจำเป็นและดูแลลูกค้าประจำได้ต่อเนื่องยิ่งขึ้น'),
    ],
    'vi': [
        ('Điện thoại và tin nhắn liên tục làm gián đoạn dịch vụ', 'Dừng lại để trả lời sẽ mất tập trung; không trả lời lại có thể mất khách mới.', 'Để khách tự đặt lịch 24/7', 'Chia sẻ liên kết hoặc mã QR để khách tự chọn dịch vụ, ngày và giờ.'),
        ('Lịch hẹn nằm rải rác trên tin nhắn, mạng xã hội, điện thoại và giấy', 'Thông tin phân tán khiến việc bỏ sót hoặc trùng lịch dễ xảy ra.', 'Đưa mọi kênh về một lịch duy nhất', 'Thêm lịch online, qua điện thoại và khách đến trực tiếp vào cùng một nơi.'),
        ('Khách hỏi ngoài giờ rồi chọn nơi khác', 'Khách muốn biết giờ trống ngay, thay vì chờ đến sáng hôm sau.', 'Hiển thị giờ trống bất cứ lúc nào', 'Chỉ hiển thị những khung giờ thật sự còn trống để khách đặt ngay.'),
        ('Một lần đổi lịch cần quá nhiều tin nhắn', 'Hủy, tạo lại và xác nhận nhiều lần dễ làm mất giờ mới hoặc lịch sử cũ.', 'Đổi giờ mà vẫn giữ nguyên hồ sơ', 'Doanh nghiệp hoặc khách có thể đổi giờ mà không cần tạo lại toàn bộ lịch hẹn.'),
        ('Bận rộn khiến bạn quên nhắc lịch', 'Khách vắng mặt vào phút cuối làm lãng phí khung giờ có thể phục vụ người khác.', 'Tự động gửi nhắc lịch', 'Thông báo rõ ngày giờ mà không cần nhắn riêng cho từng khách.'),
        ('Khách đặt vào ngày nghỉ hoặc giờ giải lao', 'Giờ mở cửa không có nghĩa mọi phút đều sẵn sàng nhận lịch.', 'Chặn thời gian theo vận hành thực tế', 'Đóng ngày nghỉ, giờ giải lao và thời gian dành riêng; chỉ mở giờ thật sự phục vụ được.'),
        ('Giờ cao điểm cần duyệt, giờ vắng muốn xác nhận ngay', 'Một quy tắc xác nhận không phù hợp với nhân sự và khối lượng công việc thay đổi.', 'Chọn cách xác nhận theo từng khung giờ', 'Đặt từng ngày và giờ để xác nhận ngay hoặc chờ doanh nghiệp phê duyệt.'),
        ('Lớp nhóm dễ nhận quá số lượng', 'Chỉ có giờ bắt đầu không cho biết chính xác còn bao nhiêu chỗ.', 'Đặt sức chứa cho từng buổi', 'Xác định giới hạn của lớp, sự kiện hoặc dịch vụ và dừng nhận khi đã đầy.'),
        ('Khách quen vẫn phát sinh phí nền tảng', 'Khách do bạn tự xây dựng không nên tiếp tục tạo phí hoa hồng mỗi lần quay lại.', 'Sở hữu kênh đặt lịch trực tiếp', 'Khách đặt qua liên kết hoặc QR của bạn và trả trực tiếp. BookingYou không thu hoa hồng.'),
        ('Lịch sử khách hàng chỉ nằm trong trí nhớ', 'Dịch vụ cũ, sở thích và lịch sử đặt hẹn dễ bị quên trước lần ghé tiếp theo.', 'Lưu hồ sơ khách hàng và lịch hẹn cùng nhau', 'Xem lại thông tin khi cần để phục vụ khách quay lại nhất quán hơn.'),
    ],
}


def pain_solution_markup(code):
    copy = COPY[code]
    cards = []
    for index, ((pain_title, pain_body, answer_title, answer_body), image) in enumerate(zip(PAIRS[code], IMAGES), start=1):
        cards.append(
            f'<article class="ps-card">'
            f'<div class="ps-no">{index:02d}</div>'
            f'<figure class="ps-art" aria-hidden="true"><img loading="lazy" decoding="async" '
            f'src="assets/pain-solutions/{image}" alt=""></figure>'
            f'<div class="ps-block ps-problem"><span>{html.escape(copy["pain"])}</span>'
            f'<h3>{html.escape(pain_title)}</h3><p>{html.escape(pain_body)}</p></div>'
            f'<div class="ps-arrow" aria-hidden="true"><span>↓</span></div>'
            f'<div class="ps-block ps-answer"><span>{html.escape(copy["answer"])}</span>'
            f'<h3>{html.escape(answer_title)}</h3><p>{html.escape(answer_body)}</p></div>'
            f'</article>'
        )
    return ''.join(cards)
