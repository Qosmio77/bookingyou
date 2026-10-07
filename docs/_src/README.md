# 官網源檔

- `template.html` — 版面模板，文字用 `{{token}}`
- `strings.py` — 八個語言嘅文案
- `webbook.py` — 首頁「網頁預約」區塊：講明客人唔使裝 App、逐步教點用（8 語）。文案要跟 `/b/index.html` 實際行為；`/b/` 改咗就要跟住改
- `shoot_webbook.py` — 重影「網頁預約」區塊嘅截圖（示範店嘅真實 `/b/` 頁面，唔會提交預約）
- `about.py` — 「關於我們」頁（/about/、/ja/about/ …，8 語）：團隊口吻、公司理念、堅持、時間線。只寫核實過嘅事實，唔出個人名
- `social.py` — 首頁「社交平台」區塊＋footer 社交圖示：帳號清單、8 語文案、品牌 glyph（Simple Icons，CC0，黑色單色）。加減帳號改 `ACCOUNTS`
- `seo.py` — 公開頁面 canonical、Open Graph／Twitter 分享標記、JSON-LD、sitemap 及 robots；品牌資料沿用 `social.py` 嘅帳號清單
- `render.py` — 生成器：`PYTHONDONTWRITEBYTECODE=1 python3 docs/_src/render.py`（repo 根目錄執行）會輸出 8 語首頁、8 語關於頁及 noindex 設計方案

改文案改 `strings.py`，改版面改 `template.html`，之後重新生成再 commit。
「關於我們」嘅搜尋摘要獨立放喺 `about.py` 嘅 `desc`；唔好直接用整段 `lead`。
首頁及關於頁嘅搜尋摘要、分享標題同 JSON-LD 都由同一份文案生成。
私隱政策及條款保留獨立 HTML；修改時保留預設可見嘅英文內容，避免 JavaScript 未載入時頁面空白。
`docs/google2e26d24906c57931.html` 係 Google Search Console 擁有權驗證檔；驗證成功後亦要保留，唔加入 sitemap。
內容跟 `BOOKINGYOU-TEMP/投資者簡報-INVESTOR-DECK/2026-09-14/BookingYou-投資者簡介-繁中.pptx`，
但唔公開市場數字、經營數字，亦冇簡報第 11–14 頁（進度、定位、團隊、融資需求）。

## 新版中文及日文首頁

`landing/template.html` 是完整共用版面及互動程式的來源；中文預設文字在模板，翻譯及覆寫在 `landing/seo-copy.json`。搜尋摘要及產品定義在 `landing/build.py` 的 CONFIG。`landing/seo-v11.css` 補充響應式樣式，`landing/seo-runtime.js` 處理語言路由。

完整生成前需要安裝 `python3 -m pip install -r docs/_src/landing/requirements.txt`。執行原有 `python3 docs/_src/render.py` 會先更新八語共用頁面，再生成新版中文及日文首頁。只修改新版時亦可執行 `python3 docs/_src/landing/build.py`。兩個入口均可重複執行。輸出 CSS/JS 使用內容雜湊檔名；正式首頁不含預覽標籤或 noindex。

相片和裝置素材在 `docs/preview-assets/`（沿用預覽階段檔名），App 截圖在 `docs/app-screens/`。`landing/assets.json` 管理品牌、商店徽章等資源路徑。修改互動程式後請執行 `node --check`，並驗證手機版、語言切換、圖片放大及裝置畫面切換。

## 行業專頁

`industry_guides/content.py` 維護五個重點行業的繁中及日文專頁內容；`style.css` 為共用響應式樣式。每頁包含獨立痛點、服務設定例子、客人與商戶流程及 FAQ。服務時間是示例，不能寫成標準或自動排程承諾。

完整 `render.py` 會生成 10 個專頁、2 個行業總覽，並在原有 18 個 sitemap 網址上加入 12 個網址。新增行業時，同步更新首頁 `landing/build.py` 的卡片路由。執行 `python3 docs/_src/industry_guides/validate.py` 檢查路由、SEO、圖片、內容及語言配對。

## 內容閱讀次序（2026-10-07 首頁精簡）

八語首頁由 `landing/compact_home.py` 整合成九個主要部分：品牌首屏 → 五個重點行業 → 六項核心功能 → App 畫面 → 網頁預約 → 收費 → 七條 FAQ → 宣傳及社交內容 → 三步開始／下載。下載區放在所有內容之後、Footer 之前。主選單依序為行業指南、功能介紹、App 畫面、FB／IG 帖文、收費、FAQ；關於頁入口仍在頁尾。

原有重複功能介紹合併到六張功能卡；改期及確認規則以原生 `details` 展開。完整十二個行業分組、122 個服務例子移到八語行業總覽，重點行業的客人與商戶流程保留於各自專頁。首頁移除靜態 UPDATE 和重複長篇產品簡介；Pro 只保留未推出、定價未定的簡短狀態。

`landing/compact-home.css` 處理整合版面，`compact-home.js` 處理三個內容頁籤、鍵盤選擇及舊錨點。全部 140 張貼文、三張宣傳海報及官方社交入口保留；貼文初次顯示六張，可按語言篩選及逐次增加。獨立 U 仔介紹段已移除。App 畫廊的客人／商戶切換保留，多裝置展示移到開始使用區的展開內容。

行業專頁依序為情境介紹 → 痛點 → 客人預約 → 商戶處理 → 服務設定例子 → FAQ → 其他行業 → 下載。修改順序時保留原有錨點與圖片尺寸。

首頁與行業專頁的主題底框、放大字級及手機規則共用 `landing/section-titles.css`；兩個生成器均會載入並更新 CSS 雜湊。

## 八語言新版（2026-10-07）

完整建置現在輸出 8 個新版首頁、8 個行業總覽、40 個行業專頁；連同既有關於頁及法律頁，sitemap 共 66 個網址。使用 `python3 docs/_src/render.py` 一次重建全部語言。

- `landing/localization.py` 集中管理語言代碼、URL、官方下載徽章、原有網頁預約截圖及語言選單。
- `landing/locales/{en,zh-CN,ko,ms,th,vi}.json` 包含新版精確文字對照及五篇完整行業指南。更新來源文案時同步更新六種翻譯，不能留空或回退中文。
- `landing/build.py` 維護繁中／日文共用版面；`build_remaining()` 以繁中結構生成其餘六語，靜態 HTML 及互動 JS 都替換成同一份翻譯。JS 使用完整已知字串替換，不使用正則表達式解析 JavaScript。
- 原有 App 截圖、裝置展示及社交素材保留原圖文字；新語言頁面附說明。網頁預約教學使用各自現有語言截圖，徽章使用官方各語言檔案。
- 語言切換保留首頁章節，行業專頁切換保留相同行業。所有專頁都有八語言 hreflang 及 x-default。

驗證：`python3 docs/_src/landing/validate_locales.py` 及 `python3 docs/_src/industry_guides/validate.py`。另以 Node 檢查生成的 JS，瀏覽器確認八語切換、手機排版、內容頁籤、貼文篩選、圖片放大及滾動標頭。正式發佈前仍需批准；本機預覽另加 noindex。


### Homepage industry photo carousel

`landing/hero_carousel.py` defines six photos (existing salon + five generated
industry scenes) and all eight locales. `hero-carousel.js` rotates every five
seconds with an 850 ms opacity transition and decodes each next image before
showing it. Previous/next manually pause, keyboard focus pauses, and the play
button resumes. The name/control strip is visually hidden during ordinary
browsing and revealed only when its controls receive keyboard focus, preserving
accessible pause/resume without cluttering the hero. Reduced-motion preference
starts paused and disables fades;
background tabs and an offscreen photo suspend the timer. Without JavaScript,
the original salon photo remains and controls stay hidden. A failed image keeps
the current image visible and retries later. Photos use `object-fit: cover`.

Five project-owned WebP assets live in `docs/assets/hero-industries/` (900 × 900,
about 288 KB combined). They are fictional AI-generated scenes, described as
such in localized alt text. Generation used built-in imagegen; prompt manifest:
`output/bookingyou-hero-carousel-prompts.json` in the parent AI workspace.
Rebuild with the existing `render.py`; this work remains a local draft.
