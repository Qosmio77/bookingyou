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
async function renderOverview(c) {
  const { data, error } = await sb.rpc('admin_dashboard_stats')
  if (error) throw error
  const gmvLine = (k) => (data.gmv.length
    ? data.gmv.map(g => `${g.currency} ${Number(g[k]).toLocaleString()}`).join(' + ') : '0')
  const days = data.series.map(s => s.bookings)
  const maxB = Math.max(...days, 1)
  const pts = days.map((v, i) => `${(i / 6) * 100},${46 - (v / maxB) * 40}`).join(' ')
  const lastGap = data.last_booking_at
    ? Math.round((Date.now() - new Date(data.last_booking_at)) / 36e5) + ' 小時前' : '從未'
  c.innerHTML = `
    <div class="cards">
      <div class="card"><div class="num">${data.bookings.today}</div><div class="lbl">今日新預約</div></div>
      <div class="card"><div class="num">${gmvLine('today')}</div><div class="lbl">今日 GMV</div></div>
      <div class="card"><div class="num">${data.users.today}</div><div class="lbl">今日新用戶</div></div>
      <div class="card ${data.open_complaints ? 'alert' : ''}">
        <div class="num">${data.open_complaints}</div><div class="lbl">開放投訴</div></div>
    </div>
    <div class="section-title">7 日預約趨勢(${data.bookings.d7} 單 · GMV ${gmvLine('d7')})</div>
    <div class="card"><svg class="spark" viewBox="0 0 100 48" preserveAspectRatio="none">
      <polyline points="${pts}" fill="none" stroke="#6C63FF" stroke-width="2"/></svg></div>
    <div class="section-title">健康</div>
    <div class="cards">
      <div class="card ${data.stale_pending ? 'alert' : ''}">
        <div class="num">${data.stale_pending}</div><div class="lbl">過期未確認 pending</div></div>
      <div class="card"><div class="num">${data.cancel_rate_7d}%</div><div class="lbl">7 日取消率</div></div>
      <div class="card"><div class="num">${data.active_businesses}</div><div class="lbl">活躍商家</div></div>
      <div class="card"><div class="num">${lastGap}</div><div class="lbl">最後預約</div></div>
    </div>
    <div class="section-title">30 日:用戶 ${data.users.d30} · 預約 ${data.bookings.d30} · GMV ${gmvLine('d30')} · 評價(7日)${data.reviews_d7}</div>
    <div class="row"><a href="${SENTRY_URL}" target="_blank">🔗 開 Sentry 睇 crash</a></div>`
}
async function renderBusinesses(c) { c.innerHTML = '<div class="block-err">TODO Task 5</div>' }
async function renderBookings(c)   { c.innerHTML = '<div class="block-err">TODO Task 6</div>' }
async function renderComplaints(c) { c.innerHTML = '<div class="block-err">TODO Task 7</div>' }
