import html

IMAGES = [
    'beauty.webp', 'health.webp', 'fitness.webp', 'education.webp',
    'pet.webp', 'home.webp', 'repair-auto.webp', 'creative-events.webp',
    'professional.webp', 'property-retail.webp', 'food-workshops.webp',
    'travel-venues.webp',
]

COPY = {
    'zh-HK': dict(stat='12 個大類 · 122 種預約服務', types='個小類', open='查看全部', note='搵唔到你嘅行業？只要客人需要預約時間，通常都可以用 BookingYou。'),
    'en': dict(stat='12 categories · 122 appointment services', types='service types', open='View all', note='Cannot find your trade? If customers book a time with you, BookingYou will usually fit.'),
    'zh-CN': dict(stat='12 个大类 · 122 种预约服务', types='个小类', open='查看全部', note='找不到你的行业？只要客人需要预约时间，通常都可以使用 BookingYou。'),
    'ja': dict(stat='12カテゴリー・122種類の予約サービス', types='業種', open='すべて見る', note='業種が見つからなくても、時間を予約して来店するサービスなら、ほとんどの場合BookingYouを利用できます。'),
    'ko': dict(stat='12개 분야 · 122가지 예약 서비스', types='개 서비스', open='전체 보기', note='업종이 보이지 않나요? 고객이 시간을 예약하는 서비스라면 대부분 BookingYou를 사용할 수 있습니다.'),
    'ms': dict(stat='12 kategori · 122 perkhidmatan janji temu', types='jenis perkhidmatan', open='Lihat semua', note='Tidak jumpa bidang anda? Jika pelanggan menempah masa dengan anda, BookingYou biasanya sesuai.'),
    'th': dict(stat='12 หมวด · 122 บริการที่รับจอง', types='ประเภทย่อย', open='ดูทั้งหมด', note='ไม่พบธุรกิจของคุณใช่ไหม หากลูกค้าต้องจองเวลา โดยทั่วไปก็ใช้ BookingYou ได้'),
    'vi': dict(stat='12 nhóm · 122 dịch vụ đặt lịch', types='loại dịch vụ', open='Xem tất cả', note='Không thấy ngành của bạn? Nếu khách hàng cần đặt thời gian, BookingYou thường vẫn phù hợp.'),
}

DATA = {
    'zh-HK': [
        ('美容及個人護理', ['髮型屋', '男士理髮', '美甲', '美睫及眉形', '面部及皮膚護理', '化妝服務', '脫毛', '紋身及穿耳', '個人色彩分析', '形象顧問']),
        ('健康、復康及養生', ['按摩治療', '物理治療', '整脊及整骨', '中醫', '針灸', '職業治療', '言語治療', '營養諮詢', '心理輔導', '產後護理']),
        ('健身及運動教練', ['私人健身', '瑜伽', '普拉提', '拳擊及泰拳', '游泳教練', '網球教練', '羽毛球教練', '高爾夫教練', '舞蹈導師', '跑步教練']),
        ('教育、補習及培訓', ['私人補習', '語言課程', '鋼琴課', '結他課', '聲樂課', '繪畫及書法', '編程及 STEM', '烹飪及烘焙', '駕駛導師', '職涯教練']),
        ('寵物服務', ['寵物美容', '寵物沖涼', '寵物訓練', '寵物保姆', '放狗服務', '寵物攝影', '獸醫診所', '寵物按摩', '寵物營養', '領養面談']),
        ('家居及上門服務', ['家居清潔', '深層清潔', '冷氣清洗', '家電清潔', '滅蟲服務', '水喉維修', '電工服務', '傢俬安裝', '智能家居安裝', '搬屋估價']),
        ('維修、汽車及技術', ['手機維修', '電腦維修', '相機維修', '手錶維修', '珠寶維修', '鞋履及手袋維修', '改衣服務', '樂器維修', '汽車美容', '汽車保養']),
        ('攝影、創作及活動', ['人像攝影', '婚禮攝影', '產品攝影', '影片製作', '錄音室', 'Podcast 錄音室', '平面設計', '紋身設計諮詢', '婚禮統籌', '派對場地']),
        ('專業及商業服務', ['會計服務', '稅務顧問', '公司秘書', '法律諮詢', '保險顧問', '按揭顧問', '移民顧問', '招聘及職涯', '市場推廣及 SEO', 'IT 及 AI 顧問']),
        ('地產、零售及產品體驗', ['預約睇樓', '物業估價', '驗樓服務', '室內設計', '裝修報價', '婚紗試身', '西裝度身', '眼鏡試戴', '珠寶預約', '陳列室示範']),
        ('餐飲及工作坊', ['私房菜', '到會試食', '品酒及清酒', '咖啡品鑑', '茶道體驗', '烹飪班', '烘焙班', '蛋糕裝飾', '咖啡拉花', '調酒班']),
        ('旅遊、娛樂及場地', ['私人導遊', '本地導賞', '行山領隊', '露營體驗', '潛水及浮潛', '滑浪及直立板', '遊艇活動', '密室逃脫', 'VR 及電競', '運動場地', '攝影及排練室', '會議室']),
    ],
    'en': [
        ('Beauty & personal care', ['Hair salon', 'Barber', 'Nail studio', 'Lash & brow', 'Facial & skincare', 'Makeup artist', 'Hair removal', 'Tattoo & piercing', 'Personal colour analysis', 'Image consultant']),
        ('Health, rehab & wellness', ['Massage therapy', 'Physiotherapy', 'Chiropractic & osteopathy', 'Chinese medicine', 'Acupuncture', 'Occupational therapy', 'Speech therapy', 'Nutrition advice', 'Counselling', 'Postnatal care']),
        ('Fitness & sports coaching', ['Personal training', 'Yoga', 'Pilates', 'Boxing & Muay Thai', 'Swimming coach', 'Tennis coach', 'Badminton coach', 'Golf coach', 'Dance lessons', 'Running coach']),
        ('Education, tutoring & training', ['Private tutoring', 'Language lessons', 'Piano lessons', 'Guitar lessons', 'Vocal coaching', 'Art & calligraphy', 'Coding & STEM', 'Cooking & baking', 'Driving instructor', 'Career coaching']),
        ('Pet services', ['Pet grooming', 'Pet bathing', 'Pet training', 'Pet sitting', 'Dog walking', 'Pet photography', 'Veterinary clinic', 'Pet massage', 'Pet nutrition', 'Adoption interview']),
        ('Home & on-site services', ['Home cleaning', 'Deep cleaning', 'Air-con cleaning', 'Appliance cleaning', 'Pest control', 'Plumbing', 'Electrician', 'Furniture assembly', 'Smart-home setup', 'Moving estimate']),
        ('Repair, automotive & tech', ['Phone repair', 'Computer repair', 'Camera repair', 'Watch repair', 'Jewellery repair', 'Shoe & bag repair', 'Clothing alterations', 'Instrument repair', 'Car detailing', 'Car maintenance']),
        ('Photography, creative & events', ['Portrait photography', 'Wedding photography', 'Product photography', 'Video production', 'Recording studio', 'Podcast studio', 'Graphic design', 'Tattoo consultation', 'Wedding planning', 'Party venue']),
        ('Professional & business services', ['Accounting', 'Tax advisory', 'Company secretary', 'Legal consultation', 'Insurance advice', 'Mortgage advice', 'Immigration advice', 'Recruitment & career', 'Marketing & SEO', 'IT & AI consulting']),
        ('Property, retail & product experiences', ['Property viewing', 'Property valuation', 'Home inspection', 'Interior design', 'Renovation quotation', 'Wedding-dress fitting', 'Suit fitting', 'Eyewear fitting', 'Jewellery appointment', 'Showroom demo']),
        ('Food, drink & workshops', ['Private dining', 'Catering tasting', 'Wine & sake tasting', 'Coffee tasting', 'Tea ceremony', 'Cooking class', 'Baking class', 'Cake decorating', 'Latte art', 'Bartending class']),
        ('Travel, entertainment & venues', ['Private guide', 'Local tour', 'Hiking guide', 'Camping experience', 'Diving & snorkelling', 'Surfing & SUP', 'Yacht experience', 'Escape room', 'VR & esports', 'Sports court', 'Photo & rehearsal studio', 'Meeting room']),
    ],
    'zh-CN': [
        ('美容及个人护理', ['美发沙龙', '男士理发', '美甲', '美睫及眉形', '面部及皮肤护理', '化妆服务', '脱毛', '纹身及穿耳', '个人色彩分析', '形象顾问']),
        ('健康、康复及养生', ['按摩理疗', '物理治疗', '整脊及整骨', '中医', '针灸', '职业治疗', '言语治疗', '营养咨询', '心理辅导', '产后护理']),
        ('健身及运动教练', ['私人健身', '瑜伽', '普拉提', '拳击及泰拳', '游泳教练', '网球教练', '羽毛球教练', '高尔夫教练', '舞蹈老师', '跑步教练']),
        ('教育、辅导及培训', ['私人辅导', '语言课程', '钢琴课', '吉他课', '声乐课', '绘画及书法', '编程及 STEM', '烹饪及烘焙', '驾驶教练', '职业教练']),
        ('宠物服务', ['宠物美容', '宠物洗澡', '宠物训练', '宠物寄养', '遛狗服务', '宠物摄影', '宠物诊所', '宠物按摩', '宠物营养', '领养面谈']),
        ('家居及上门服务', ['家居清洁', '深层清洁', '空调清洗', '家电清洁', '除虫服务', '水管维修', '电工服务', '家具安装', '智能家居安装', '搬家估价']),
        ('维修、汽车及技术', ['手机维修', '电脑维修', '相机维修', '手表维修', '珠宝维修', '鞋履及箱包维修', '改衣服务', '乐器维修', '汽车美容', '汽车保养']),
        ('摄影、创作及活动', ['人像摄影', '婚礼摄影', '产品摄影', '视频制作', '录音室', '播客录音室', '平面设计', '纹身设计咨询', '婚礼策划', '派对场地']),
        ('专业及商业服务', ['会计服务', '税务顾问', '公司秘书', '法律咨询', '保险顾问', '按揭顾问', '移民顾问', '招聘及职业', '市场营销及 SEO', 'IT 及 AI 顾问']),
        ('房产、零售及产品体验', ['预约看房', '房产估价', '验房服务', '室内设计', '装修报价', '婚纱试穿', '西装量身', '眼镜试戴', '珠宝预约', '展厅演示']),
        ('餐饮及工作坊', ['私房菜', '餐饮试吃', '葡萄酒及清酒品鉴', '咖啡品鉴', '茶道体验', '烹饪课', '烘焙课', '蛋糕装饰', '咖啡拉花', '调酒课']),
        ('旅游、娱乐及场地', ['私人导游', '本地导览', '徒步领队', '露营体验', '潜水及浮潜', '冲浪及桨板', '游艇活动', '密室逃脱', 'VR 及电竞', '运动场地', '摄影及排练室', '会议室']),
    ],
    'ja': [
        ('美容・パーソナルケア', ['美容室', '理容室', 'ネイルサロン', 'まつげ・眉', 'フェイシャル・スキンケア', 'メイクアップ', '脱毛', 'タトゥー・ピアス', 'パーソナルカラー診断', 'イメージコンサルティング']),
        ('健康・リハビリ・ウェルネス', ['マッサージ', '理学療法', 'カイロ・整体', '漢方・中医', '鍼灸', '作業療法', '言語療法', '栄養相談', 'カウンセリング', '産後ケア']),
        ('フィットネス・スポーツ指導', ['パーソナルトレーニング', 'ヨガ', 'ピラティス', 'ボクシング・ムエタイ', '水泳指導', 'テニス指導', 'バドミントン指導', 'ゴルフレッスン', 'ダンスレッスン', 'ランニング指導']),
        ('教育・個人レッスン・研修', ['個人指導・家庭教師', '語学レッスン', 'ピアノレッスン', 'ギターレッスン', 'ボイストレーニング', '絵画・書道', 'プログラミング・STEM', '料理・製菓', '自動車教習', 'キャリアコーチング']),
        ('ペットサービス', ['ペットトリミング', 'ペットシャンプー', 'しつけ教室', 'ペットシッター', '犬の散歩', 'ペット撮影', '動物病院', 'ペットマッサージ', 'ペット栄養相談', '譲渡面談']),
        ('住まい・訪問サービス', ['ハウスクリーニング', '徹底清掃', 'エアコンクリーニング', '家電クリーニング', '害虫駆除', '水道修理', '電気工事', '家具組立', 'スマートホーム設置', '引越し見積り']),
        ('修理・自動車・技術サービス', ['スマートフォン修理', 'パソコン修理', 'カメラ修理', '時計修理', 'ジュエリー修理', '靴・バッグ修理', '洋服のお直し', '楽器修理', 'カーコーティング', '自動車整備']),
        ('写真・クリエイティブ・イベント', ['ポートレート撮影', '結婚式撮影', '商品撮影', '映像制作', 'レコーディングスタジオ', 'ポッドキャストスタジオ', 'グラフィックデザイン', 'タトゥー相談', 'ウェディングプランニング', 'パーティー会場']),
        ('専門・ビジネスサービス', ['会計', '税務相談', '会社秘書・登記', '法律相談', '保険相談', '住宅ローン相談', '移住・ビザ相談', '採用・キャリア', 'マーケティング・SEO', 'IT・AIコンサルティング']),
        ('不動産・小売・商品体験', ['物件内覧', '不動産査定', '住宅検査', 'インテリア相談', 'リフォーム見積り', 'ウェディングドレス試着', 'スーツ採寸', '眼鏡フィッティング', 'ジュエリー相談', 'ショールーム体験']),
        ('飲食・体験教室', ['プライベートダイニング', 'ケータリング試食', 'ワイン・日本酒試飲', 'コーヒー試飲', '茶道体験', '料理教室', 'パン・お菓子教室', 'ケーキデコレーション', 'ラテアート', 'カクテル教室']),
        ('旅行・エンタメ・施設予約', ['プライベートガイド', '地域ツアー', 'ハイキングガイド', 'キャンプ体験', 'ダイビング・シュノーケリング', 'サーフィン・SUP', 'ヨット体験', '脱出ゲーム', 'VR・eスポーツ', 'スポーツコート', '撮影・リハーサルスタジオ', '会議室']),
    ],
    'ko': [
        ('뷰티·퍼스널 케어', ['헤어 살롱', '바버숍', '네일숍', '속눈썹·눈썹', '페이셜·피부 관리', '메이크업', '제모', '타투·피어싱', '퍼스널 컬러', '이미지 컨설팅']),
        ('건강·재활·웰니스', ['마사지 치료', '물리치료', '카이로·정골', '한의원', '침술', '작업치료', '언어치료', '영양 상담', '심리 상담', '산후 관리']),
        ('피트니스·스포츠 코칭', ['퍼스널 트레이닝', '요가', '필라테스', '복싱·무에타이', '수영 레슨', '테니스 레슨', '배드민턴 레슨', '골프 레슨', '댄스 레슨', '러닝 코칭']),
        ('교육·과외·훈련', ['개인 과외', '어학 수업', '피아노 레슨', '기타 레슨', '보컬 레슨', '미술·서예', '코딩·STEM', '요리·베이킹', '운전 교습', '커리어 코칭']),
        ('반려동물 서비스', ['반려동물 미용', '반려동물 목욕', '반려동물 훈련', '펫시팅', '산책 서비스', '반려동물 촬영', '동물병원', '반려동물 마사지', '반려동물 영양', '입양 상담']),
        ('홈·방문 서비스', ['가정 청소', '대청소', '에어컨 청소', '가전 청소', '해충 방제', '배관 수리', '전기 기사', '가구 조립', '스마트홈 설치', '이사 견적']),
        ('수리·자동차·기술', ['휴대폰 수리', '컴퓨터 수리', '카메라 수리', '시계 수리', '주얼리 수리', '신발·가방 수리', '의류 수선', '악기 수리', '자동차 디테일링', '자동차 정비']),
        ('사진·창작·이벤트', ['인물 촬영', '웨딩 촬영', '제품 촬영', '영상 제작', '녹음 스튜디오', '팟캐스트 스튜디오', '그래픽 디자인', '타투 상담', '웨딩 플래닝', '파티 공간']),
        ('전문·비즈니스 서비스', ['회계', '세무 상담', '회사 설립·비서', '법률 상담', '보험 상담', '주택담보대출 상담', '이민·비자 상담', '채용·커리어', '마케팅·SEO', 'IT·AI 컨설팅']),
        ('부동산·리테일·제품 체험', ['부동산 방문', '부동산 감정', '주택 점검', '인테리어 상담', '리모델링 견적', '웨딩드레스 피팅', '정장 피팅', '안경 피팅', '주얼리 상담', '쇼룸 시연']),
        ('음식·음료·워크숍', ['프라이빗 다이닝', '케이터링 시식', '와인·사케 시음', '커피 테이스팅', '다도 체험', '요리 수업', '베이킹 수업', '케이크 장식', '라테아트', '칵테일 수업']),
        ('여행·엔터테인먼트·공간', ['개인 가이드', '지역 투어', '하이킹 가이드', '캠핑 체험', '다이빙·스노클링', '서핑·SUP', '요트 체험', '방탈출', 'VR·e스포츠', '스포츠 코트', '촬영·연습 스튜디오', '회의실']),
    ],
    'ms': [
        ('Kecantikan & penjagaan diri', ['Salon rambut', 'Kedai gunting', 'Studio kuku', 'Bulu mata & kening', 'Rawatan muka & kulit', 'Solekan', 'Pembuangan bulu', 'Tatu & tindik', 'Analisis warna peribadi', 'Perunding imej']),
        ('Kesihatan, rehabilitasi & kesejahteraan', ['Terapi urut', 'Fisioterapi', 'Kiropraktik & osteopati', 'Perubatan Cina', 'Akupunktur', 'Terapi pekerjaan', 'Terapi pertuturan', 'Nasihat pemakanan', 'Kaunseling', 'Penjagaan selepas bersalin']),
        ('Kecergasan & bimbingan sukan', ['Latihan peribadi', 'Yoga', 'Pilates', 'Tinju & Muay Thai', 'Jurulatih renang', 'Jurulatih tenis', 'Jurulatih badminton', 'Jurulatih golf', 'Kelas tarian', 'Jurulatih larian']),
        ('Pendidikan, tuisyen & latihan', ['Tuisyen peribadi', 'Kelas bahasa', 'Kelas piano', 'Kelas gitar', 'Latihan vokal', 'Seni & kaligrafi', 'Pengekodan & STEM', 'Memasak & membakar', 'Pengajar memandu', 'Bimbingan kerjaya']),
        ('Perkhidmatan haiwan peliharaan', ['Dandanan haiwan', 'Mandian haiwan', 'Latihan haiwan', 'Penjagaan haiwan', 'Khidmat jalan anjing', 'Fotografi haiwan', 'Klinik veterinar', 'Urut haiwan', 'Pemakanan haiwan', 'Temu duga pengambilan']),
        ('Rumah & perkhidmatan di lokasi', ['Pembersihan rumah', 'Pembersihan mendalam', 'Cuci penghawa dingin', 'Cuci perkakas', 'Kawalan perosak', 'Paip', 'Juruteknik elektrik', 'Pemasangan perabot', 'Pemasangan rumah pintar', 'Anggaran pindah rumah']),
        ('Pembaikan, automotif & teknologi', ['Baiki telefon', 'Baiki komputer', 'Baiki kamera', 'Baiki jam', 'Baiki barang kemas', 'Baiki kasut & beg', 'Ubah suai pakaian', 'Baiki alat muzik', 'Perincian kereta', 'Servis kereta']),
        ('Fotografi, kreatif & acara', ['Fotografi potret', 'Fotografi perkahwinan', 'Fotografi produk', 'Produksi video', 'Studio rakaman', 'Studio podcast', 'Reka bentuk grafik', 'Konsultasi tatu', 'Perancang perkahwinan', 'Tempat parti']),
        ('Perkhidmatan profesional & perniagaan', ['Perakaunan', 'Nasihat cukai', 'Setiausaha syarikat', 'Konsultasi undang-undang', 'Nasihat insurans', 'Nasihat gadai janji', 'Nasihat imigresen', 'Pengambilan & kerjaya', 'Pemasaran & SEO', 'Perundingan IT & AI']),
        ('Hartanah, runcit & pengalaman produk', ['Lawatan hartanah', 'Penilaian hartanah', 'Pemeriksaan rumah', 'Reka bentuk dalaman', 'Sebut harga pengubahsuaian', 'Cuba gaun pengantin', 'Padanan sut', 'Padanan cermin mata', 'Janji temu barang kemas', 'Demo bilik pameran']),
        ('Makanan, minuman & bengkel', ['Jamuan peribadi', 'Rasa katering', 'Rasa wain & sake', 'Rasa kopi', 'Upacara teh', 'Kelas memasak', 'Kelas membakar', 'Hiasan kek', 'Seni latte', 'Kelas koktel']),
        ('Pelancongan, hiburan & tempat', ['Pemandu peribadi', 'Lawatan tempatan', 'Pemandu mendaki', 'Pengalaman berkhemah', 'Menyelam & snorkel', 'Luncur & SUP', 'Pengalaman kapal layar', 'Bilik melarikan diri', 'VR & e-sukan', 'Gelanggang sukan', 'Studio foto & latihan', 'Bilik mesyuarat']),
    ],
    'th': [
        ('ความงามและการดูแลส่วนบุคคล', ['ร้านทำผม', 'ร้านตัดผมชาย', 'ร้านทำเล็บ', 'ขนตาและคิ้ว', 'ทรีตเมนต์หน้าและผิว', 'บริการแต่งหน้า', 'กำจัดขน', 'สักและเจาะ', 'วิเคราะห์สีส่วนบุคคล', 'ที่ปรึกษาภาพลักษณ์']),
        ('สุขภาพ ฟื้นฟู และเวลเนส', ['นวดบำบัด', 'กายภาพบำบัด', 'ไคโรแพรคติกและจัดกระดูก', 'แพทย์แผนจีน', 'ฝังเข็ม', 'กิจกรรมบำบัด', 'แก้ไขการพูด', 'ให้คำปรึกษาโภชนาการ', 'ให้คำปรึกษาจิตใจ', 'ดูแลหลังคลอด']),
        ('ฟิตเนสและโค้ชกีฬา', ['เทรนเนอร์ส่วนตัว', 'โยคะ', 'พิลาทิส', 'มวยและมวยไทย', 'โค้ชว่ายน้ำ', 'โค้ชเทนนิส', 'โค้ชแบดมินตัน', 'โค้ชกอล์ฟ', 'ครูสอนเต้น', 'โค้ชวิ่ง']),
        ('การศึกษา ติว และฝึกอบรม', ['ติวส่วนตัว', 'เรียนภาษา', 'เรียนเปียโน', 'เรียนกีตาร์', 'ฝึกร้องเพลง', 'ศิลปะและพู่กัน', 'เขียนโค้ดและ STEM', 'ทำอาหารและเบเกอรี่', 'ครูสอนขับรถ', 'โค้ชอาชีพ']),
        ('บริการสัตว์เลี้ยง', ['ตัดแต่งขนสัตว์', 'อาบน้ำสัตว์', 'ฝึกสัตว์เลี้ยง', 'รับเลี้ยงสัตว์ชั่วคราว', 'พาสุนัขเดิน', 'ถ่ายภาพสัตว์', 'คลินิกสัตวแพทย์', 'นวดสัตว์', 'โภชนาการสัตว์', 'สัมภาษณ์รับเลี้ยง']),
        ('บริการบ้านและนอกสถานที่', ['ทำความสะอาดบ้าน', 'ทำความสะอาดใหญ่', 'ล้างแอร์', 'ทำความสะอาดเครื่องใช้', 'กำจัดแมลง', 'งานประปา', 'งานไฟฟ้า', 'ประกอบเฟอร์นิเจอร์', 'ติดตั้งสมาร์ตโฮม', 'ประเมินค่าย้ายบ้าน']),
        ('ซ่อม อะไหล่รถ และเทคโนโลยี', ['ซ่อมโทรศัพท์', 'ซ่อมคอมพิวเตอร์', 'ซ่อมกล้อง', 'ซ่อมนาฬิกา', 'ซ่อมเครื่องประดับ', 'ซ่อมรองเท้าและกระเป๋า', 'แก้เสื้อผ้า', 'ซ่อมเครื่องดนตรี', 'ดูแลรถยนต์', 'บำรุงรักษารถยนต์']),
        ('ภาพถ่าย งานสร้างสรรค์ และอีเวนต์', ['ถ่ายภาพบุคคล', 'ถ่ายภาพงานแต่ง', 'ถ่ายภาพสินค้า', 'ผลิตวิดีโอ', 'สตูดิโอบันทึกเสียง', 'สตูดิโอพอดแคสต์', 'ออกแบบกราฟิก', 'ปรึกษาการสัก', 'วางแผนงานแต่ง', 'สถานที่จัดปาร์ตี้']),
        ('บริการวิชาชีพและธุรกิจ', ['บัญชี', 'ที่ปรึกษาภาษี', 'เลขานุการบริษัท', 'ปรึกษากฎหมาย', 'ที่ปรึกษาประกัน', 'ที่ปรึกษาสินเชื่อบ้าน', 'ที่ปรึกษาตรวจคนเข้าเมือง', 'สรรหาและอาชีพ', 'การตลาดและ SEO', 'ที่ปรึกษา IT และ AI']),
        ('อสังหาริมทรัพย์ ค้าปลีก และทดลองสินค้า', ['นัดชมอสังหา', 'ประเมินราคาอสังหา', 'ตรวจบ้าน', 'ออกแบบภายใน', 'ประเมินค่าปรับปรุง', 'ลองชุดแต่งงาน', 'วัดตัวสูท', 'ลองแว่น', 'นัดชมเครื่องประดับ', 'สาธิตในโชว์รูม']),
        ('อาหาร เครื่องดื่ม และเวิร์กช็อป', ['มื้ออาหารส่วนตัว', 'ชิมอาหารจัดเลี้ยง', 'ชิมไวน์และสาเก', 'ชิมกาแฟ', 'พิธีชงชา', 'คลาสทำอาหาร', 'คลาสเบเกอรี่', 'แต่งหน้าเค้ก', 'ลาเต้อาร์ต', 'คลาสค็อกเทล']),
        ('ท่องเที่ยว บันเทิง และสถานที่', ['ไกด์ส่วนตัว', 'ทัวร์ท้องถิ่น', 'ไกด์เดินป่า', 'ประสบการณ์แคมป์', 'ดำน้ำและสนอร์เกิล', 'โต้คลื่นและ SUP', 'กิจกรรมเรือยอชต์', 'ห้องปริศนา', 'VR และอีสปอร์ต', 'สนามกีฬา', 'สตูดิโอถ่ายภาพและซ้อม', 'ห้องประชุม']),
    ],
    'vi': [
        ('Làm đẹp & chăm sóc cá nhân', ['Salon tóc', 'Tiệm cắt tóc nam', 'Tiệm nail', 'Mi & chân mày', 'Chăm sóc da mặt', 'Trang điểm', 'Triệt lông', 'Xăm & xỏ khuyên', 'Phân tích màu cá nhân', 'Tư vấn hình ảnh']),
        ('Sức khỏe, phục hồi & wellness', ['Massage trị liệu', 'Vật lý trị liệu', 'Trị liệu cột sống & nắn xương', 'Y học cổ truyền', 'Châm cứu', 'Hoạt động trị liệu', 'Âm ngữ trị liệu', 'Tư vấn dinh dưỡng', 'Tư vấn tâm lý', 'Chăm sóc sau sinh']),
        ('Thể hình & huấn luyện thể thao', ['Huấn luyện cá nhân', 'Yoga', 'Pilates', 'Boxing & Muay Thái', 'Huấn luyện bơi', 'Huấn luyện tennis', 'Huấn luyện cầu lông', 'Huấn luyện golf', 'Lớp khiêu vũ', 'Huấn luyện chạy bộ']),
        ('Giáo dục, gia sư & đào tạo', ['Gia sư riêng', 'Lớp ngôn ngữ', 'Lớp piano', 'Lớp guitar', 'Luyện thanh', 'Mỹ thuật & thư pháp', 'Lập trình & STEM', 'Nấu ăn & làm bánh', 'Dạy lái xe', 'Huấn luyện nghề nghiệp']),
        ('Dịch vụ thú cưng', ['Cắt tỉa thú cưng', 'Tắm thú cưng', 'Huấn luyện thú cưng', 'Trông thú cưng', 'Dắt chó đi dạo', 'Chụp ảnh thú cưng', 'Phòng khám thú y', 'Massage thú cưng', 'Dinh dưỡng thú cưng', 'Phỏng vấn nhận nuôi']),
        ('Dịch vụ tại nhà & tận nơi', ['Vệ sinh nhà', 'Vệ sinh chuyên sâu', 'Vệ sinh máy lạnh', 'Vệ sinh thiết bị', 'Diệt côn trùng', 'Sửa ống nước', 'Thợ điện', 'Lắp ráp nội thất', 'Lắp nhà thông minh', 'Báo giá chuyển nhà']),
        ('Sửa chữa, ô tô & công nghệ', ['Sửa điện thoại', 'Sửa máy tính', 'Sửa máy ảnh', 'Sửa đồng hồ', 'Sửa trang sức', 'Sửa giày & túi', 'Sửa quần áo', 'Sửa nhạc cụ', 'Chăm sóc xe', 'Bảo dưỡng xe']),
        ('Nhiếp ảnh, sáng tạo & sự kiện', ['Chụp chân dung', 'Chụp ảnh cưới', 'Chụp sản phẩm', 'Sản xuất video', 'Phòng thu âm', 'Phòng thu podcast', 'Thiết kế đồ họa', 'Tư vấn hình xăm', 'Tổ chức đám cưới', 'Địa điểm tiệc']),
        ('Dịch vụ chuyên môn & doanh nghiệp', ['Kế toán', 'Tư vấn thuế', 'Thư ký công ty', 'Tư vấn pháp lý', 'Tư vấn bảo hiểm', 'Tư vấn thế chấp', 'Tư vấn di trú', 'Tuyển dụng & nghề nghiệp', 'Marketing & SEO', 'Tư vấn IT & AI']),
        ('Bất động sản, bán lẻ & trải nghiệm sản phẩm', ['Xem bất động sản', 'Định giá bất động sản', 'Kiểm tra nhà', 'Thiết kế nội thất', 'Báo giá cải tạo', 'Thử váy cưới', 'Đo may vest', 'Thử kính', 'Hẹn xem trang sức', 'Trình diễn showroom']),
        ('Ẩm thực, đồ uống & workshop', ['Bữa ăn riêng', 'Nếm thử tiệc', 'Thử rượu vang & sake', 'Thử cà phê', 'Trà đạo', 'Lớp nấu ăn', 'Lớp làm bánh', 'Trang trí bánh', 'Latte art', 'Lớp pha chế']),
        ('Du lịch, giải trí & địa điểm', ['Hướng dẫn viên riêng', 'Tour địa phương', 'Hướng dẫn đi bộ đường dài', 'Trải nghiệm cắm trại', 'Lặn & snorkeling', 'Lướt sóng & SUP', 'Trải nghiệm du thuyền', 'Phòng thoát hiểm', 'VR & thể thao điện tử', 'Sân thể thao', 'Studio ảnh & tập luyện', 'Phòng họp']),
    ],
}


def industry_markup(code):
    rows = DATA[code]
    copy = COPY[code]
    cards = []
    for index, ((title, items), image) in enumerate(zip(rows, IMAGES), start=1):
        chips = ''.join(f'<li>{html.escape(item)}</li>' for item in items)
        cards.append(
            f'<details class="industry-card">'
            f'<summary><span class="industry-no">{index:02d}</span>'
            f'<span class="industry-art"><img loading="lazy" src="assets/industries/{image}" alt="{html.escape(title)}"></span>'
            f'<span class="industry-title"><b>{html.escape(title)}</b><small>{len(items)} {html.escape(copy["types"])}</small></span>'
            f'<span class="industry-toggle">{html.escape(copy["open"])}</span></summary>'
            f'<ul class="industry-list">{chips}</ul></details>'
        )
    return ''.join(cards)
