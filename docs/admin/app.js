const SUPABASE_URL = 'https://gzwebxflrltxaglrukde.supabase.co'
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6d2VieGZscmx0eGFnbHJ1a2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyMjA2MDcsImV4cCI6MjA5Njc5NjYwN30.BJoQTqVDw3NAEW_LC0DxhWDgQDHOv-7Str6B6sHDVoU'
const SENTRY_URL = 'https://sentry.io'   // v1: plain link out

const sb = supabase.createClient(SUPABASE_URL, ANON_KEY)
const $ = (s) => document.querySelector(s)

// ---------- helpers ----------
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.remove('hidden')
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.add('hidden'), 2200)
}
function esc(s) { const d = document.createElement('div'); d.textContent = s ?? ''; return d.innerHTML }
function fmtDT(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleString('zh-HK', { month: 'numeric', day: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: false })
}
function blockErr(container, retry) {
  container.innerHTML = '<div class="block-err">載入失敗<br><button>重試</button></div>'
  container.querySelector('button').onclick = retry
}

// ---------- auth & router ----------
const TABS = { overview: '總覽', businesses: '商家', bookings: '預約', complaints: '投訴&評價' }
let currentTab = 'overview'

function show(view) {           // 'login' | 'main'
  $('#login').classList.toggle('hidden', view !== 'login')
  $('#main').classList.toggle('hidden', view !== 'main')
}

async function route(tab) {
  currentTab = tab
  $('#title').textContent = TABS[tab]
  document.querySelectorAll('nav button').forEach(b =>
    b.classList.toggle('active', b.dataset.tab === tab))
  // 儀表板要闊過其他分頁，所以個寬度掛喺 body 而唔係逐個容器度改。
  document.body.classList.toggle('dash', tab === 'overview')
  const c = $('#content'); c.innerHTML = '<div class="block-err">載入中…</div>'
  try {
    if (tab === 'overview')   await renderOverview(c)
    if (tab === 'businesses') await renderBusinesses(c)
    if (tab === 'bookings')   await renderBookings(c)
    if (tab === 'complaints') await renderComplaints(c)
  } catch (e) {
    if (String(e.message || e).includes('forbidden')) {
      c.innerHTML = '<div class="block-err">此帳號無管理權限</div>'
    } else blockErr(c, () => route(tab))
  }
}

$('#loginBtn').onclick = async () => {
  $('#loginErr').textContent = ''
  const { error } = await sb.auth.signInWithPassword({
    email: $('#email').value.trim(), password: $('#password').value })
  if (error) $('#loginErr').textContent = error.message
}
$('#logoutBtn').onclick = () => sb.auth.signOut()

// ---------- 主題 ----------
// 冇揀過就跟系統。撳一次就當佢揀咗，之後系統點變都唔再跟 —— 一個特登撳過嘅選擇
// 唔應該被系統覆蓋。掣面顯示撳落去會變成點，唔係顯示而家係點。
function effectiveTheme() {
  return document.documentElement.dataset.theme
      || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}
function paintThemeBtn() {
  const dark = effectiveTheme() === 'dark'
  const b = $('#themeBtn')
  b.textContent = dark ? '☀️' : '🌙'
  b.title = dark ? '轉淺色' : '轉深色'
}
$('#themeBtn').onclick = () => {
  const next = effectiveTheme() === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = next
  try { localStorage.setItem('theme', next) } catch { /* 私隱模式：今次有效，下次跟返系統 */ }
  paintThemeBtn()
}
paintThemeBtn()
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (!document.documentElement.dataset.theme) paintThemeBtn()
})
document.querySelectorAll('nav button').forEach(b => b.onclick = () => route(b.dataset.tab))

sb.auth.onAuthStateChange((_evt, session) => {
  if (session) { show('main'); route(currentTab) } else show('login')
})

// ---------- tabs (implemented in later tasks) ----------
// ---------- 儀表板 ----------
// 一個 RPC 交齊四段：生意健康度、增長漏斗、商戶成效、營運異常。
// 分開四次攞會攞到四個唔同時刻嘅同一個資料庫。
let dashDays = 30
let merchTab = 'bookings'
let geoTab = 'funnel'

// 兩個字母嘅代碼直接砌到國旗，唔使查表 —— 將來多咗個國家都自動有旗。
// 中文名要查表，查唔到就照出代碼：出個代碼好過亂改個名。
const CC_NAME = {
  HK: '香港', TW: '台灣', CN: '中國', JP: '日本', KR: '韓國', SG: '新加坡',
  MY: '馬來西亞', TH: '泰國', VN: '越南', PH: '菲律賓', ID: '印尼', IN: '印度',
  AE: '阿聯酋', AU: '澳洲', NZ: '紐西蘭', US: '美國', CA: '加拿大', BR: '巴西',
  GB: '英國', FR: '法國', DE: '德國', CH: '瑞士', ZA: '南非',
}
const flag = (cc) => /^[A-Za-z]{2}$/.test(cc)
  ? String.fromCodePoint(...[...cc.toUpperCase()].map(ch => 0x1F1E6 + ch.charCodeAt(0) - 65))
  : '🏳️'
const countryLabel = (cc) => !cc ? '⬜ 冇填國家'
  : `${flag(cc)} ${CC_NAME[cc.toUpperCase()] ?? esc(cc)}`

const nf = (n) => (n === null || n === undefined) ? '—' : Number(n).toLocaleString('en-US')
const pct = (n) => (n === null || n === undefined) ? '—' : n + '%'
const compact = (n) => {
  const v = Number(n)
  if (!isFinite(v)) return '—'
  return Math.abs(v) >= 1e6 ? (v / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
       : Math.abs(v) >= 1e4 ? Math.round(v / 1e3) + 'K' : nf(v)
}

/** 同上一個同樣長度嘅窗比。冇對照就乜都唔畫 —— 畫個「—」淨係當噪音。
 *  一個冇對照嘅數字講唔到自己係好定壞：「取消率 100%」可以係災難，
 *  亦可以係呢間舖一路都咁。upGood=false 嘅（取消率、逾期）升就係壞消息，色要反轉。 */
function delta(cur, prev, { pt = false, upGood = true, days = 30 } = {}) {
  if (cur == null || prev == null) return ''
  const d = Number((cur - prev).toFixed(pt ? 1 : 0))
  if (d === 0) return `<span class="dlt flat" title="上一個 ${days} 日：${nf(prev)}${pt ? '%' : ''}">持平</span>`
  const cls = (d > 0) === upGood ? 'good' : 'bad'
  return `<span class="dlt ${cls}" title="上一個 ${days} 日：${nf(prev)}${pt ? '%' : ''}">`
       + `${d > 0 ? '▲' : '▼'} ${nf(Math.abs(d))}${pt ? 'pt' : ''}</span>`
}

function gmvText(gmv) {
  if (!gmv || !gmv.length) return '0'
  return gmv.map(g => `${esc(g.currency)} ${compact(g.amount)}`).join(' · ')
}

/** 每日堆疊柱：完成 / 取消 / 其餘。空白日都畫，唔畫個形就係假嘅。 */
function dailyChart(series) {
  if (!series.length) return '<div class="block-err">呢段時間冇預約</div>'
  const max = Math.max(...series.map(d => d.created), 1)
  const w = 100 / series.length
  const bars = series.map((d, i) => {
    const x = i * w, h = (d.created / max) * 88
    const done = d.created ? (d.completed / d.created) * h : 0
    const cx   = d.created ? (d.cancelled / d.created) * h : 0
    const rest = h - done - cx
    let y = 92
    const seg = (hh, cls) => { if (hh <= 0) return ''; y -= hh
      return `<rect x="${x + w * .15}" y="${y}" width="${w * .7}" height="${hh}" class="${cls}"/>` }
    return seg(cx, 'b-cancel') + seg(done, 'b-done') + seg(rest, 'b-other')
  }).join('')
  const first = series[0].day.slice(5, 10), last = series[series.length - 1].day.slice(5, 10)
  return `<svg class="chart" viewBox="0 0 100 100" preserveAspectRatio="none">
      <line x1="0" y1="92" x2="100" y2="92" class="axis"/>${bars}</svg>
    <div class="chart-x"><span>${first}</span><span>高峰 ${max}</span><span>${last}</span></div>
    <div class="legend"><i class="b-done"></i>完成 <i class="b-cancel"></i>取消 <i class="b-other"></i>其他</div>`
}

/** 漏斗：每級闊度按第一級計，跌幅寫喺級與級之間。 */
function funnelHtml(f) {
  const steps = [['註冊用戶', f.signups], ['開咗商戶', f.became_merchant],
                 ['出咗服務', f.published_service], ['收到預約', f.got_booking]]
  const top = Math.max(steps[0][1], 1)
  // 每級一行：名／條／數。條打橫擺（唔係一級一大舊）先夠位一版過睇晒四級同三個流失。
  return steps.map(([label, v], i) => {
    const prev = i ? steps[i - 1][1] : null
    const drop = prev ? (prev - v) : 0
    const dropPct = prev && prev > 0 ? Math.round((drop / prev) * 100) : 0
    return `${i ? `<div class="funnel-drop">↓ 流失 ${nf(drop)}（${dropPct}%）</div>` : ''}
      <div class="funnel-step">
        <span class="funnel-name">${esc(label)}</span>
        <span class="funnel-track"><span class="funnel-bar" style="width:${Math.max((v / top) * 100, 2)}%"></span></span>
        <b class="funnel-val">${nf(v)}</b>
      </div>`
  }).join('')
}

/** 分頁掣。所有分頁嘅內容都已經喺 DOM 度，撳掣淨係開關 hidden：
 *  唔會再打一次 RPC，亦唔會令四段數字變成四個唔同時刻。 */
function wireTabs(root, attr, keys, setActive) {
  root.querySelectorAll(`[data-${attr}]`).forEach(b => b.onclick = () => {
    const k = b.dataset[attr]
    setActive(k)
    root.querySelectorAll(`[data-${attr}]`).forEach(x =>
      x.classList.toggle('active', x.dataset[attr] === k))
    keys.forEach(kk => root.querySelectorAll(`.${attr}-${kk}`).forEach(e =>
      e.classList.toggle('hidden', kk !== k)))
  })
}
function tableHtml(cols, rows, empty) {
  if (!rows.length) return `<div class="block-err">${empty}</div>`
  return `<div class="tbl-wrap"><table class="tbl">
    <thead><tr>${cols.map(c => `<th${c.num ? ' class="num"' : ''}>${esc(c.h)}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(r => `<tr>${cols.map(c =>
      `<td${c.num ? ' class="num"' : ''}>${c.f(r)}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>`
}

async function renderOverview(c) {
  const { data, error } = await sb.rpc('admin_dashboard_full', { p_days: dashDays })
  if (error) throw error
  if (!data) { c.innerHTML = '<div class="block-err">此帳號無管理權限</div>'; return }
  const { health: h, merchants: m, funnel: f, anomalies: a, geo: G = [] } = data
  const W = data.window_days

  const lastGap = h.last_booking_at
    ? Math.round((Date.now() - new Date(h.last_booking_at)) / 36e5) + ' 小時前' : '從未'

  // 標紅嘅門檻寫喺呢度而唔係 CSS —— 「幾多先算差」係生意判斷，唔係樣式。
  const P = h.prev ?? {}
  const D = (cur, prv, o) => delta(cur, prv, { ...o, days: W })
  // 對照淨係擺喺真係有得比嘅嘢度。逾期未確認同最後一單係「而家嘅狀態」唔係一段期間，
  // GMV 要比就要將 HKD 加 JPY —— 三樣都寧願吉，唔好砌個假對照出嚟。
  const KPI = [
    ['新預約',       nf(h.created),          false, false, D(h.created, P.created)],
    ['完成率',       pct(h.completion_rate), false, false, D(h.completion_rate, P.completion_rate, { pt: true })],
    ['取消率',       pct(h.cancel_rate),     h.cancel_rate > 30, false,
                     D(h.cancel_rate, P.cancel_rate, { pt: true, upGood: false })],
    ['逾期未確認',   nf(h.stale_pending),    h.stale_pending > 0],
    ['已完成 GMV',   gmvText(h.gmv),         false, true],
    ['有生意 / 活躍', `${nf(h.businesses_with_bookings)}<span class="of">/${nf(h.active_businesses)}</span>`,
                     false, false, D(h.businesses_with_bookings, P.businesses_with_bookings)],
    ['每間平均單數', h.avg_bookings_per_trading_business ?? '—', false, false,
                     D(h.avg_bookings_per_trading_business, P.avg_bookings_per_trading_business, { pt: false })],
    ['最後一單',     lastGap,                false, true],
  ]

  // 應該係零嘅嘢。唔係零就係有人有麻煩而未有人知。
  const ANOM = [
    ['開放投訴', a.open_complaints, 'bad'], ['待審上架', a.pending_listing, 'warn'],
    ['已停權帳戶', a.banned_accounts, 'warn'], ['已下架評價', a.hidden_reviews, 'warn'],
    ['7 日錯誤', a.client_errors_7d, 'bad'], ['錯誤種類', a.client_error_groups_7d, 'bad'],
    ['商戶冇填國家', a.businesses_no_country, 'warn'], ['服務冇價錢', a.services_no_price, 'warn'],
    ['預約商戶錯配', a.booking_biz_mismatch, 'bad'], ['已完成但喺未來', a.completed_in_future, 'bad'],
    ['停用舖仲有待確認', a.inactive_with_pending, 'bad'],
  ]
  const anomBad = ANOM.filter(([, v]) => v > 0).length

  // 三個榜疊落去就一定要拉，所以改做分頁。三個都即場整定，撳掣淨係開關 hidden，唔會再打一次 RPC。
  const MERCH = [
    ['bookings', '預約最多', tableHtml([
      { h: '商戶', f: r => esc(r.name) },
      { h: '地區', f: r => esc(r.country ?? '—') },
      { h: '預約', num: 1, f: r => nf(r.bookings) },
      { h: '完成', num: 1, f: r => nf(r.completed) },
      { h: 'GMV', num: 1, f: r => `${esc(r.currency ?? '')} ${compact(r.gmv)}` },
    ], m.top_by_bookings, '呢段時間冇任何商戶收到預約')],
    ['rating', '評分最高', tableHtml([
      { h: '商戶', f: r => esc(r.name) },
      { h: '評分', num: 1, f: r => `★ ${r.rating}` },
      { h: '評價數', num: 1, f: r => nf(r.reviews) },
    ], m.top_by_rating, '未有商戶夠 3 個評價')],
    ['never', `從來冇人約 ${nf(m.never_booked)}`,
      `<div class="pane-note">由開舖到收到第一單，中位數 ${m.median_days_to_first_booking ?? '—'} 日</div>` +
      tableHtml([
        { h: '商戶', f: r => esc(r.name) },
        { h: '地區', f: r => esc(r.country ?? '—') },
        { h: '服務', num: 1, f: r => nf(r.services) },
        { h: '開舖', f: r => fmtDT(r.created_at) },
      ], m.never_booked_sample, '冇 🎉')],
  ]
  if (!MERCH.some(([k]) => k === merchTab)) merchTab = 'bookings'

  // 漏斗個標題講結論：邊一步流失得最緊要，而唔係「增長漏斗」四隻字重複一次。
  const FSTEP = [['註冊', f.signups], ['開舖', f.became_merchant],
                 ['上架', f.published_service], ['收單', f.got_booking]]
  let worstStep = '由開站至今'
  let worst = -1
  for (let i = 1; i < FSTEP.length; i++) {
    const prev = FSTEP[i - 1][1]
    const r = prev > 0 ? (prev - FSTEP[i][1]) / prev : 0
    if (r > worst) { worst = r
      worstStep = `最大流失：${FSTEP[i - 1][0]} → ${FSTEP[i][0]}（${Math.round(r * 100)}%）` }
  }

  c.innerHTML = `
    <div class="dgrid">
      <div class="dbar">
        ${[7, 30, 90].map(d =>
          `<button class="${d === dashDays ? 'active' : ''}" data-d="${d}">${d} 日</button>`).join('')}
        <span class="stamp">最近 ${W} 日 · 更新於 ${fmtDT(data.generated_at)}</span>
      </div>

      <div class="kpis">${KPI.map(([l, v, alert, sm, dlt]) =>
        `<div class="kpi${alert ? ' alert' : ''}">
           <div class="num${sm ? ' sm' : ''}">${v}</div>
           <div class="lbl"><span>${esc(l)}</span>${dlt ?? ''}</div></div>`).join('')}
      </div>

      <section class="pane pa-chart">
        <div class="pane-hd"><h2>每日預約</h2><span class="pane-sub">${W} 日 ${nf(h.created)} 單，${nf(h.completed)} 完成 · ${nf(h.cancelled)} 取消</span></div>
        <div class="pane-bd">${dailyChart(h.series)}</div>
      </section>

      <section class="pane pa-funnel">
        <div class="pane-hd"><h2>增長</h2>
          <span class="pane-sub gt-funnel${geoTab === 'funnel' ? '' : ' hidden'}">${worstStep}</span>
          <span class="pane-sub gt-geo${geoTab === 'geo' ? '' : ' hidden'}">${nf(G.length)} 個地區 · 「用戶」＝喺當地約過嘢嘅人數</span>
          <div class="pane-tabs">
            <button class="${geoTab === 'funnel' ? 'active' : ''}" data-gt="funnel">漏斗</button>
            <button class="${geoTab === 'geo' ? 'active' : ''}" data-gt="geo">地區</button>
          </div></div>
        <div class="pane-bd gt-funnel${geoTab === 'funnel' ? '' : ' hidden'}">${funnelHtml(f)}
          <div class="funnel-note">最近 ${W} 日新註冊 ${nf(f.recent.signups)} 人，
            其中 ${nf(f.recent.became_merchant)} 開咗舖、${nf(f.recent.got_booking)} 收到過預約</div>
        </div>
        <div class="pane-bd p0 gt-geo${geoTab === 'geo' ? '' : ' hidden'}">
          <div class="pane-note">用戶本身冇國家資料（profiles 得語言，唔係地區）。下面「用戶」係喺當地約過嘢嘅唯一人數 —— 一個人約兩個地方兩邊都計，所以加埋唔等於用戶總數。</div>
          ${tableHtml([
            { h: '地區', f: r => countryLabel(r.country) },
            { h: '用戶', num: 1, f: r => nf(r.customers) },
            { h: '預約', num: 1, f: r => nf(r.bookings) },
            { h: '商戶', num: 1, f: r => nf(r.businesses) },
            { h: '活躍', num: 1, f: r => nf(r.active) },
          ], G, '未有任何商戶填咗國家')}
        </div>
      </section>

      <section class="pane pa-anom">
        <div class="pane-hd"><h2>營運異常</h2>
          <span class="pane-sub">${anomBad ? `${anomBad} 項唔係零` : '全部係零 🎉'}</span></div>
        <div class="pane-bd anom">${ANOM.map(([l, v, k]) =>
          `<div class="anom-row ${v ? k : ''}"><span>${esc(l)}</span><b>${nf(v)}</b></div>`).join('')}
        </div>
      </section>

      <section class="pane pa-merch">
        <div class="pane-hd"><h2>商戶成效</h2>
          <div class="pane-tabs">${MERCH.map(([k, label]) =>
            `<button class="${k === merchTab ? 'active' : ''}" data-mt="${k}">${esc(label)}</button>`).join('')}
          </div></div>
        ${MERCH.map(([k, , body]) =>
          `<div class="pane-bd mt-${k}${k === merchTab ? '' : ' hidden'}">${body}</div>`).join('')}
      </section>
    </div>`

  c.querySelectorAll('[data-d]').forEach(b => b.onclick = () => {
    dashDays = Number(b.dataset.d); route('overview')
  })
  wireTabs(c, 'mt', MERCH.map(([k]) => k), (k) => { merchTab = k })
  wireTabs(c, 'gt', ['funnel', 'geo'], (k) => { geoTab = k })
}

async function renderBusinesses(c) {
  const { data, error } = await sb.from('businesses')
    .select('id,name,category,country,is_active,created_at,images')
    .order('created_at', { ascending: false }).limit(100)
  if (error) throw error
  c.innerHTML = `<input class="search" placeholder="搜尋名稱/類別/國家"><div id="bizList"></div>`
  const list = $('#bizList')
  let q = ''
  const draw = () => {
    const rows = data.filter(b =>
      (b.name + b.category + b.country).toLowerCase().includes(q.toLowerCase()))
    list.innerHTML = rows.map(b => `
      <div class="row ${b.is_active ? '' : 'off'}">
        <h3>${esc(b.name)}</h3>
        <div class="meta">${esc(b.category)} · ${esc(b.country)} · 圖${(b.images || []).length} · ${fmtDT(b.created_at)}</div>
        <div class="act"><button class="${b.is_active ? 'danger' : ''}" data-biz="${b.id}"
          data-to="${!b.is_active}">${b.is_active ? '停用' : '啟用'}</button></div>
      </div>`).join('') || '<div class="block-err">冇結果</div>'
    list.querySelectorAll('[data-biz]').forEach(btn => btn.onclick = async () => {
      const to = btn.dataset.to === 'true'
      const biz = data.find(x => x.id === btn.dataset.biz)
      if (!confirm(`${to ? '啟用' : '停用'}「${biz.name}」?`)) return
      const { error: e2 } = await sb.from('businesses')
        .update({ is_active: to }).eq('id', biz.id)
      if (e2) return toast('失敗:' + e2.message)
      biz.is_active = to; toast(to ? '已啟用' : '已停用'); draw()
    })
  }
  c.querySelector('.search').oninput = (e) => { q = e.target.value; draw() }
  draw()
}
async function renderBookings(c, status = 'all') {
  let q = sb.from('bookings')
    .select('id,status,start_time,party_size,created_at,business:businesses(name,currency),service:services(name,price),customer:profiles(full_name)')
    .order('created_at', { ascending: false }).limit(50)
  if (status !== 'all') q = q.eq('status', status)
  const { data, error } = await q
  if (error) throw error
  const F = ['all', 'pending', 'confirmed', 'completed', 'cancelled']
  c.innerHTML = `<div class="filter">${F.map(f =>
      `<button class="${f === status ? 'active' : ''}" data-f="${f}">${f}</button>`).join('')}</div>
    <div id="bkList">${data.map(b => `
      <div class="row">
        <h3>${esc(b.service?.name ?? '—')} <span class="badge ${b.status}">${b.status}</span></h3>
        <div class="meta">${esc(b.business?.name ?? '—')} · ${esc(b.customer?.full_name ?? '—')}
          · ${b.party_size > 1 ? b.party_size + ' 位 · ' : ''}${fmtDT(b.start_time)}
          · ${b.business?.currency ?? ''} ${b.service?.price ?? ''}</div>
        ${['pending', 'confirmed'].includes(b.status)
          ? `<div class="act"><button class="danger" data-bk="${b.id}">取消預約</button></div>` : ''}
      </div>`).join('') || '<div class="block-err">冇預約</div>'}</div>`
  c.querySelectorAll('[data-f]').forEach(b => b.onclick = () => renderBookings(c, b.dataset.f))
  c.querySelectorAll('[data-bk]').forEach(btn => btn.onclick = async () => {
    if (!confirm('取消呢單預約?')) return
    const { error: e2 } = await sb.from('bookings')
      .update({ status: 'cancelled' }).eq('id', btn.dataset.bk)
    if (e2) return toast('失敗:' + e2.message)
    toast('已取消'); renderBookings(c, status)
  })
}
async function renderComplaints(c) {
  const [cmp, rev] = await Promise.all([
    sb.from('complaints')
      .select('id,complainant_role,reason,description,status,created_at,evidence_urls,business:against_business_id(name)')
      .order('created_at', { ascending: false }).limit(50),
    sb.from('reviews')
      .select('rating,comment,author_name,created_at,business:businesses(name)')
      .order('created_at', { ascending: false }).limit(30),
  ])
  if (cmp.error) throw cmp.error
  if (rev.error) throw rev.error
  const open = cmp.data.filter(x => x.status === 'open' || x.status === 'reviewing')
  const done = cmp.data.filter(x => !open.includes(x))
  const card = (x) => `
    <div class="row">
      <h3>${esc(x.reason)} <span class="badge ${x.status === 'open' ? 'open' : 'resolved'}">${x.status}</span></h3>
      <div class="meta">${x.complainant_role === 'customer' ? '顧客投訴商家' : '商家投訴顧客'}
        · ${esc(x.business?.name ?? '')} · ${fmtDT(x.created_at)}</div>
      <div class="meta">${esc(x.description ?? '')}</div>
      ${(x.evidence_urls || []).map(u => `<a href="${u}" target="_blank">📎 證據</a>`).join(' ')}
      ${x.status !== 'resolved'
        ? `<div class="act"><button data-cmp="${x.id}">標記已處理</button></div>` : ''}
    </div>`
  c.innerHTML = `
    <div class="section-title">投訴(${open.length} 開放)</div>
    ${open.map(card).join('') || '<div class="block-err">冇開放投訴 🎉</div>'}
    ${done.length ? `<div class="section-title">已處理</div>` + done.map(card).join('') : ''}
    <div class="section-title">最新評價</div>
    ${rev.data.map(r => `
      <div class="row"><h3><span class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span></h3>
        <div class="meta">${esc(r.author_name ?? '匿名')} → ${esc(r.business?.name ?? '')} · ${fmtDT(r.created_at)}</div>
        <div class="meta">${esc(r.comment ?? '')}</div></div>`).join('')}`
  c.querySelectorAll('[data-cmp]').forEach(btn => btn.onclick = async () => {
    if (!confirm('標記呢單投訴為已處理?')) return
    const { error: e2 } = await sb.from('complaints')
      .update({ status: 'resolved' }).eq('id', btn.dataset.cmp)
    if (e2) return toast('失敗:' + e2.message)
    toast('已處理'); renderComplaints(c)
  })
}
