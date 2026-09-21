# 重影首頁「網頁預約」區塊嘅截圖：assets/webbook/<語言>-1|2|3.jpg
#
#   pip install playwright pillow      （用本機 Google Chrome，唔使 `playwright install`）
#   python3 _src/shoot_webbook.py
#
# 影嘅係示範店 Sunny Beauty Studio（App Store 審核用嘅 demo business）嘅真實 /b/ 頁面：
# 揀第三個可約日子 → 揀第四個時段 → 停喺表格。**唔會撳「確認預約」，唔會產生任何預約。**
# 唔好改去影真商戶嘅頁面。
import io, os, time
from playwright.sync_api import sync_playwright
from PIL import Image

DEMO_SHOP = 'dca5d796-4e17-47bf-81a6-1dcf63b26dd3'
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'assets', 'webbook')
LANGS = {'zh-HK': 'zh-HK', 'zh-CN': 'zh-CN', 'en': 'en-US', 'ja': 'ja-JP', 'ko': 'ko-KR', 'ms': 'ms-MY', 'th': 'th-TH', 'vi': 'vi-VN'}

def save(img, path, w=640):
    img = img.convert('RGB').resize((w, round(img.height * w / img.width)), Image.LANCZOS)
    img.save(path, quality=84, optimize=True, progressive=True)

os.makedirs(OUT, exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch(executable_path=CHROME, headless=True)
    for code, loc in LANGS.items():
        c = b.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, locale=loc,
                          is_mobile=True, has_touch=True, color_scheme='light')
        pg = c.new_page()
        pg.goto(f'https://bookingyou.app/b/?id={DEMO_SHOP}&lang={code}', wait_until='networkidle')
        pg.wait_for_selector('button.day', timeout=20000)
        [d for d in pg.query_selector_all('button.day') if not d.is_disabled()][2].click()
        pg.wait_for_selector('button.slot', timeout=15000); pg.wait_for_timeout(600)
        pg.query_selector_all('button.slot')[3].click()
        pg.wait_for_selector('form.card', timeout=10000); pg.wait_for_timeout(600)
        pg.evaluate('window.scrollTo(0,0)'); pg.wait_for_timeout(300)
        boxes = pg.evaluate('[...document.querySelectorAll("#app > *")].map(n=>{const r=n.getBoundingClientRect();return {y:r.top+scrollY,h:r.height}})')
        full = Image.open(io.BytesIO(pg.screenshot(full_page=True)))
        def crop(i, j, m=5):
            return full.crop((0, max(int((boxes[i]['y'] - m) * 2), 0), full.width, min(int((boxes[j]['y'] + boxes[j]['h'] + m) * 2), full.height)))
        save(crop(0, 1), os.path.join(OUT, f'{code}-1.jpg'))   # 店舖資料 + 揀服務
        save(crop(2, 3), os.path.join(OUT, f'{code}-2.jpg'))   # 揀日期 + 揀時間
        save(crop(4, 4), os.path.join(OUT, f'{code}-3.jpg'))   # 你嘅資料（表格，未提交）
        print(code, 'ok'); c.close(); time.sleep(3)
    b.close()
