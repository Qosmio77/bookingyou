# 貼文圖（首頁貼文牆 + App 首頁）

- `manifest.json`：清單。App 同官網都讀呢個檔，隨機顯示。
- `NNN.jpg`：大圖（最闊 1080），撳入去睇。
- `t/NNN.jpg`：細圖（最闊 480），列表用。

來源：`BOOKINGYOU-TEMP` 入面已發佈過嘅圖（貼文備份、宣傳圖、韓國可發佈圖），
已剔走素材（logo、徽章、截圖）、草稿同近似重複（方形／直式同一張只留直式）。
每張對應邊個原檔見 `/_src/posts-source-map.tsv`。

加圖：放 `NNN.jpg` 同 `t/NNN.jpg`，喺 `manifest.json` 加 `{"id","w","h"}`。
刪圖：喺 `manifest.json` 拎走嗰行就得（App 同網頁都唔會再顯示）。

## 語言（2026-09-19）

每張都有 `lang`（ja 95、ko 21、th 10、vi 10；繁中／簡中／英文／馬來文暫時冇）。
而家 post 唔多，App 同官網**特登唔分語言**，全部隨機。
之後 post 多咗再分：App 按介面語言、官網按頁面語言篩 `lang`，
冇嗰種語言嘅 post 就退返全部隨機。加新圖記得填 `lang`。
