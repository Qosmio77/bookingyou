# 官網源檔

- `template.html` — 版面模板，文字用 `{{token}}`
- `strings.py` — 八個語言嘅文案
- `webbook.py` — 首頁「網頁預約」區塊：講明客人唔使裝 App、逐步教點用（8 語）。文案要跟 `/b/index.html` 實際行為；`/b/` 改咗就要跟住改
- `shoot_webbook.py` — 重影「網頁預約」區塊嘅截圖（示範店嘅真實 `/b/` 頁面，唔會提交預約）
- `social.py` — 首頁「社交平台」區塊＋footer 社交圖示：帳號清單、8 語文案、品牌 glyph（Simple Icons，CC0，黑色單色）。加減帳號改 `ACCOUNTS`
- `render.py` — 生成器：`python3 render.py` 會出 8 個 index.html

改文案改 `strings.py`，改版面改 `template.html`，之後重新生成再 commit。
內容跟 `BOOKINGYOU-TEMP/投資者簡報-INVESTOR-DECK/2026-09-14/BookingYou-投資者簡介-繁中.pptx`，
但唔公開市場數字、經營數字，亦冇簡報第 11–14 頁（進度、定位、團隊、融資需求）。
