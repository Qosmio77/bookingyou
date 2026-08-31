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
document.querySelectorAll('nav button').forEach(b => b.onclick = () => route(b.dataset.tab))

sb.auth.onAuthStateChange((_evt, session) => {
  if (session) { show('main'); route(currentTab) } else show('login')
})

// ---------- tabs (implemented in later tasks) ----------
// ---------- 儀表板 ----------
// 一個 RPC 交齊四段：生意健康度、增長漏斗、商戶成效、營運異常。
// 分開四次攞會攞到四個唔同時刻嘅同一個資料庫。
let dashDays = 30

const nf = (n) => (n === null || n === undefined) ? '—' : Number(n).toLocaleString('en-US')
const pct = (n) => (n === null || n === undefined) ? '—' : n + '%'

function gmvText(gmv) {
  if (!gmv || !gmv.length) return '0'
  return gmv.map(g => `${esc(g.currency)} ${nf(g.amount)}`).join(' · ')
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
  return steps.map(([label, v], i) => {
    const prev = i ? steps[i - 1][1] : null
    const drop = prev ? (prev - v) : 0
    const dropPct = prev && prev > 0 ? Math.round((drop / prev) * 100) : 0
    return `${i ? `<div class="funnel-drop">↓ 流失 ${nf(drop)}（${dropPct}%）</div>` : ''}
      <div class="funnel-step">
        <div class="funnel-bar" style="width:${Math.max((v / top) * 100, 6)}%"></div>
        <div class="funnel-lbl"><b>${nf(v)}</b> ${esc(label)}</div>
      </div>`
  }).join('')
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
  const { health: h, merchants: m, funnel: f, anomalies: a } = data

  const lastGap = h.last_booking_at
    ? Math.round((Date.now() - new Date(h.last_booking_at)) / 36e5) + ' 小時前' : '從未'

  // 應該係零嘅嘢。唔係零就係有人有麻煩而未有人知。
  const ANOM = [
    ['開放投訴', a.open_complaints, 'bad'], ['待審上架', a.pending_listing, 'warn'],
    ['已停權帳戶', a.banned_accounts, 'warn'], ['已下架評價', a.hidden_reviews, 'warn'],
    ['7 日錯誤', a.client_errors_7d, 'bad'], ['錯誤種類', a.client_error_groups_7d, 'bad'],
    ['商戶冇填國家', a.businesses_no_country, 'warn'], ['服務冇價錢', a.services_no_price, 'warn'],
    ['預約商戶錯配', a.booking_biz_mismatch, 'bad'], ['已完成但喺未來', a.completed_in_future, 'bad'],
    ['停用舖仲有待確認', a.inactive_with_pending, 'bad'],
  ]

  c.innerHTML = `
    <div class="filter dash-range">${[7, 30, 90].map(d =>
      `<button class="${d === dashDays ? 'active' : ''}" data-d="${d}">${d} 日</button>`).join('')}
      <span class="stamp">更新於 ${fmtDT(data.generated_at)}</span></div>

    <div class="section-title">生意健康度 · 最近 ${data.window_days} 日</div>
    <div class="cards">
      <div class="card"><div class="num">${nf(h.created)}</div><div class="lbl">新預約</div></div>
      <div class="card"><div class="num">${pct(h.completion_rate)}</div><div class="lbl">完成率</div></div>
      <div class="card ${h.cancel_rate > 30 ? 'alert' : ''}">
        <div class="num">${pct(h.cancel_rate)}</div><div class="lbl">取消率</div></div>
      <div class="card ${h.stale_pending ? 'alert' : ''}">
        <div class="num">${nf(h.stale_pending)}</div><div class="lbl">逾期未確認</div></div>
    </div>
    <div class="card chart-card">${dailyChart(h.series)}</div>
    <div class="cards">
      <div class="card"><div class="num sm">${gmvText(h.gmv)}</div><div class="lbl">已完成 GMV</div></div>
      <div class="card"><div class="num">${nf(h.businesses_with_bookings)}<span class="of">/${nf(h.active_businesses)}</span></div>
        <div class="lbl">有生意 / 活躍商戶</div></div>
      <div class="card"><div class="num">${h.avg_bookings_per_trading_business ?? '—'}</div>
        <div class="lbl">每間平均單數</div></div>
      <div class="card"><div class="num sm">${lastGap}</div><div class="lbl">最後一單</div></div>
    </div>

    <div class="dash-2col">
      <div>
        <div class="section-title">增長漏斗 · 由開站至今</div>
        <div class="card">${funnelHtml(f)}
          <div class="funnel-note">最近 ${data.window_days} 日新註冊 ${nf(f.recent.signups)} 人，
            其中 ${nf(f.recent.became_merchant)} 開咗舖、${nf(f.recent.got_booking)} 收到過預約</div>
        </div>
      </div>
      <div>
        <div class="section-title">營運異常 · 應該全部係零</div>
        <div class="card anom">${ANOM.map(([l, v, k]) =>
          `<div class="anom-row ${v ? k : ''}"><span>${esc(l)}</span><b>${nf(v)}</b></div>`).join('')}</div>
      </div>
    </div>

    <div class="section-title">商戶成效 · 最近 ${data.window_days} 日預約最多</div>
    ${tableHtml([
      { h: '商戶', f: r => esc(r.name) },
      { h: '地區', f: r => esc(r.country ?? '—') },
      { h: '預約', num: 1, f: r => nf(r.bookings) },
      { h: '完成', num: 1, f: r => nf(r.completed) },
      { h: 'GMV', num: 1, f: r => `${esc(r.currency ?? '')} ${nf(r.gmv)}` },
    ], m.top_by_bookings, '呢段時間冇任何商戶收到預約')}

    <div class="section-title">評分最高（至少 3 個評價）</div>
    ${tableHtml([
      { h: '商戶', f: r => esc(r.name) },
      { h: '評分', num: 1, f: r => `★ ${r.rating}` },
      { h: '評價數', num: 1, f: r => nf(r.reviews) },
    ], m.top_by_rating, '未有商戶夠 3 個評價')}

    <div class="section-title">上咗架但從來冇人約 · ${nf(m.never_booked)} 間</div>
    <div class="card sub">新商戶由開舖到收到第一單，中位數 ${m.median_days_to_first_booking ?? '—'} 日</div>
    ${tableHtml([
      { h: '商戶', f: r => esc(r.name) },
      { h: '地區', f: r => esc(r.country ?? '—') },
      { h: '服務', num: 1, f: r => nf(r.services) },
      { h: '開舖', f: r => fmtDT(r.created_at) },
    ], m.never_booked_sample, '冇 🎉')}`

  c.querySelectorAll('[data-d]').forEach(b => b.onclick = () => {
    dashDays = Number(b.dataset.d); route('overview')
  })
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
