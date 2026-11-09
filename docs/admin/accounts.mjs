import { esc, fmtDate, money, fieldGrid, pager, showError } from './ui.mjs'

const LIST_SIZE = 30
const RECORD_SIZE = 20
const freshFilters = () => ({ page: 1, pageSize: LIST_SIZE, search: '', role: 'all', status: 'all', country: '' })
let filters = freshFilters()
let detailState = { id: null, section: 'overview', page: 1 }
let renderSequence = 0

export function resetAccounts() {
  filters = freshFilters()
  detailState = { id: null, section: 'overview', page: 1 }
  renderSequence++
}

const sections = [
  ['businesses', '擁有商戶'], ['bookings', '客戶預約'], ['merchant_bookings', '商戶收到的預約'],
  ['payments', '實收紀錄'], ['wallets', '積分／印花結餘'], ['loyalty', '積分／印花明細'],
  ['birthdays', '生日設定'], ['crm', '商戶 CRM 紀錄'], ['reviews', '發出的評價'],
  ['complaints', '相關投訴'], ['favourites', '收藏商戶'], ['conversations', '對話資料'], ['notifications', '通知'],
]
const roles = [['all', '所有角色'], ['customer', '客戶'], ['merchant', '商戶'], ['admin', '管理員']]
const statuses = [['all', '所有狀態'], ['active', '正常'], ['suspended', '已停權'], ['unverified', '電郵未驗證'], ['missing_profile', '缺少個人資料']]
const labels = {
  id: '紀錄 ID', business_name: '商戶', service_name: '服務', customer_name: '客戶姓名', phone: '聯絡電話',
  category: '行業代碼', description: '說明', address: '地址', country: '國家／地區', currency: '貨幣', timezone: '時區',
  subscription_plan: '訂閱方案', is_active: '營業功能已啟用', is_listed: '可在搜尋中顯示', web_booking_enabled: '網頁預約已啟用',
  created_at: '建立時間', updated_at: '更新時間', start_time: '開始時間', end_time: '結束時間', status: '狀態',
  payment_status: '付款狀態', price_snapshot: '預約報價', currency_snapshot: '預約貨幣', notes: '預約備註', party_size: '預約人數', source: '預約來源',
  program_name: '獎勵計劃', mode: '計劃類型', reward_cost: '兌換所需單位', reward_name: '獎賞', balance: '可用結餘',
  next_expiry: '下一次到期時間', transactions: '紀錄數目', booking_id: '預約 ID', kind: '紀錄類型', units: '單位',
  consumed: '已使用單位', voided: '已作廢', paid_amount: '商戶記錄實收金額', expires_at: '到期時間', completed_at: '完成時間',
  rating: '評分', comment: '評價內容', is_hidden: '已隱藏', hidden_reason: '隱藏原因', complainant_role: '投訴者角色',
  reason: '原因', direction: '與此帳戶的關係', note: '商戶備註', tags: '標籤', tier: '客戶級別',
  last_message_at: '最近訊息時間', messages: '訊息數目', title: '標題', body: '通知內容', type: '通知類型', is_read: '已讀',
}
const enums = {
  pending: '待確認', confirmed: '已確認', completed: '已完成', cancelled: '已取消', no_show: '未出席',
  open: '待處理', reviewing: '處理中', resolved: '已處理', dismissed: '已駁回',
  paid: '已付款', unpaid: '未付款', refunded: '已退款', partial: '部分付款',
  customer: '客戶', merchant: '商戶', admin: '管理員', submitted: '此帳戶提出', received: '此帳戶／旗下商戶收到',
  points: '積分', stamps: '印花', stamp: '印花', earn: '賺取', redeem: '兌換', adjust: '調整', refund: '退回',
  app: 'App', web: '網頁', manual: '商戶手動輸入',
}
const enumKeys = new Set(['status', 'payment_status', 'mode', 'kind', 'direction', 'complainant_role', 'source'])
const dateKeys = new Set(['created_at', 'updated_at', 'start_time', 'end_time', 'next_expiry', 'expires_at', 'completed_at', 'last_message_at'])
const recordFields = {
  businesses: ['business_name', 'category', 'description', 'address', 'phone', 'country', 'currency', 'timezone', 'subscription_plan', 'is_active', 'is_listed', 'web_booking_enabled', 'created_at', 'updated_at'],
  bookings: ['business_name', 'service_name', 'start_time', 'end_time', 'status', 'payment_status', 'price_snapshot', 'currency_snapshot', 'notes', 'party_size', 'source', 'created_at'],
  merchant_bookings: ['business_name', 'service_name', 'customer_name', 'phone', 'start_time', 'end_time', 'status', 'payment_status', 'price_snapshot', 'currency_snapshot', 'notes', 'party_size', 'source', 'created_at'],
  payments: ['business_name', 'paid_amount', 'currency', 'completed_at'],
  wallets: ['business_name', 'program_name', 'mode', 'balance', 'reward_cost', 'reward_name', 'next_expiry', 'transactions', 'created_at'],
  loyalty: ['business_name', 'program_name', 'mode', 'booking_id', 'kind', 'units', 'consumed', 'voided', 'paid_amount', 'currency', 'description', 'expires_at', 'created_at'],
  birthdays: ['business_name'],
  crm: ['business_name', 'note', 'tags', 'tier', 'updated_at'],
  reviews: ['business_name', 'rating', 'comment', 'is_hidden', 'hidden_reason', 'created_at'],
  complaints: ['business_name', 'complainant_role', 'reason', 'description', 'status', 'booking_id', 'direction', 'created_at'],
  favourites: ['business_name', 'created_at'],
  conversations: ['business_name', 'customer_name', 'created_at', 'last_message_at', 'messages'],
  notifications: ['title', 'body', 'type', 'is_read', 'created_at'],
}

function plain(value) {
  if (value === null || value === undefined || value === '') return '—'
  if (typeof value === 'boolean') return value ? '是' : '否'
  if (Array.isArray(value)) return value.filter(v => ['string', 'number'].includes(typeof v)).join('、') || '—'
  return ['string', 'number'].includes(typeof value) ? String(value) : '—'
}
function suspended(account) {
  return !!account.banned_at || !!account.auth_suspended || (Number.isFinite(Date.parse(account.banned_until)) && Date.parse(account.banned_until) > Date.now())
}
function roleText(account) {
  const merchant = account.is_merchant ?? ((account.counts?.businesses ?? 0) > 0)
  return [merchant ? '商戶' : '客戶', account.is_admin_account ? '管理員' : ''].filter(Boolean).join(' · ')
}
function statusText(account) {
  return [suspended(account) ? '已停權' : '正常', account.email && !account.email_confirmed_at ? '電郵未驗證' : '', account.has_profile === false ? '缺少個人資料' : ''].filter(Boolean).join(' · ')
}
function options(items, selected) {
  return items.map(([value, label]) => `<option value="${esc(value)}"${value === selected ? ' selected' : ''}>${esc(label)}</option>`).join('')
}
function loading(text = '載入中…') { return `<p class="muted" role="status">${esc(text)}</p>` }
function session(ctx) {
  const sequence = ++renderSequence
  return () => sequence === renderSequence && ctx.alive()
}
function navigate(ctx, live, tab, params = {}) { if (live()) ctx.route(tab, params) }
function bindPager(container, onPage, live) {
  container.querySelectorAll('[data-page]').forEach(button => button.addEventListener('click', () => {
    const page = Number(button.dataset.page)
    if (live() && !button.disabled && Number.isInteger(page) && page > 0) onPage(page)
  }))
}

export async function renderAccounts(ctx) {
  const live = session(ctx), { container, data } = ctx
  if (!live()) return
  const requested = { ...filters }
  container.innerHTML = `
    <h2>帳戶管理</h2>
    <p class="muted">按姓名、電郵、電話或帳戶 ID 搜尋，查看帳戶資料及相關紀錄。</p>
    <form class="toolbar" id="account-filters" aria-label="帳戶搜尋與篩選">
      <label class="field" for="account-search">搜尋帳戶<input id="account-search" name="search" type="search" maxlength="200" value="${esc(filters.search)}" placeholder="姓名、電郵、電話或帳戶 ID"></label>
      <label class="field" for="account-role">角色<select id="account-role" name="role">${options(roles, filters.role)}</select></label>
      <label class="field" for="account-status">狀態<select id="account-status" name="status">${options(statuses, filters.status)}</select></label>
      <label class="field" for="account-country">國家／地區代碼<input id="account-country" name="country" maxlength="2" value="${esc(filters.country)}" placeholder="例如 HK、JP" autocapitalize="characters"></label>
      <button type="submit">搜尋</button><button type="button" data-reset-filters>重設</button>
    </form><div data-account-results aria-live="polite" aria-busy="true">${loading()}</div>`
  const form = container.querySelector('#account-filters')
  form.addEventListener('submit', event => {
    event.preventDefault()
    if (!live()) return
    filters = { ...freshFilters(), search: form.elements.search.value.trim(), role: form.elements.role.value, status: form.elements.status.value, country: form.elements.country.value.trim().toUpperCase() }
    navigate(ctx, live, 'accounts')
  })
  container.querySelector('[data-reset-filters]').addEventListener('click', () => {
    if (!live()) return
    filters = freshFilters(); navigate(ctx, live, 'accounts')
  })
  const results = container.querySelector('[data-account-results]')
  try {
    const page = await data.accounts({ ...requested, signal: ctx.signal })
    if (!live()) return
    const lastPage = Math.max(1, Math.ceil(page.total / page.pageSize))
    if (requested.page > lastPage) {
      filters.page = lastPage
      navigate(ctx, live, 'accounts')
      return
    }
    results.setAttribute('aria-busy', 'false')
    results.innerHTML = `<p class="muted">符合條件：${esc(page.total)} 個帳戶</p>${page.items.length ? `
      <div class="table-wrap"><table class="data-table"><caption class="muted">帳戶清單 · 第 ${esc(page.page)} 頁</caption>
        <thead><tr><th scope="col">帳戶</th><th scope="col">聯絡資料</th><th scope="col">地區／語言</th><th scope="col">角色／狀態</th><th scope="col">建立／登入時間</th><th scope="col">操作</th></tr></thead>
        <tbody>${page.items.map(account => `<tr>
          <td><strong>${esc(account.full_name || account.email || '未填姓名')}</strong><div class="meta">${esc(account.id)}</div></td>
          <td>${esc(plain(account.email))}<div class="meta">${esc(plain(account.phone))}</div></td>
          <td>${esc(plain(account.country))}<div class="meta">${esc(plain(account.locale))}</div></td>
          <td>${esc(roleText(account))}<div class="meta">${esc(statusText(account))}</div></td>
          <td>${esc(fmtDate(account.created_at))}<div class="meta">最近登入：${esc(fmtDate(account.last_sign_in_at))}</div></td>
          <td><button type="button" data-account-id="${esc(account.id)}" aria-label="查看 ${esc(account.full_name || account.email || account.id)} 的帳戶">查看帳戶</button></td>
        </tr>`).join('')}</tbody></table></div>` : `<p class="notice">${page.total > 0 ? '此頁沒有帳戶，請返回上一頁或重新搜尋。' : '沒有符合條件的帳戶。可調整篩選條件再試。'}</p>`}
      ${pager(page)}`
    results.querySelectorAll('[data-account-id]').forEach(button => button.addEventListener('click', () => navigate(ctx, live, 'account', { id: button.dataset.accountId })))
    bindPager(results, number => { filters.page = number; navigate(ctx, live, 'accounts') }, live)
  } catch (error) {
    if (!live()) return
    results.setAttribute('aria-busy', 'false')
    showError(results, error, () => navigate(ctx, live, 'accounts'))
  }
}

function profileFields(account) {
  return [
    ['帳戶 ID', account.id], ['姓名', account.full_name], ['電郵', account.email], ['聯絡電話', account.phone], ['驗證電話', account.auth_phone],
    ['國家／地區', account.country], ['語言', account.locale], ['登入方式', account.providers], ['角色', roleText(account)], ['帳戶狀態', statusText(account)],
    ['電郵驗證時間', fmtDate(account.email_confirmed_at)], ['電話驗證時間', fmtDate(account.phone_confirmed_at)],
    ['建立時間', fmtDate(account.created_at)], ['資料更新時間', fmtDate(account.updated_at)], ['最近登入時間', fmtDate(account.last_sign_in_at)],
    ['已有個人資料', account.has_profile], ['匿名帳戶', account.is_anonymous], ['管理員帳戶', account.is_admin_account],
    ['已退出營銷資訊', account.marketing_opt_out], ['已登記推送通知', account.push_registered], ['積分／印花資料可用', account.loyalty_available],
    ['停權時間', fmtDate(account.banned_at)], ['停權原因', account.banned_reason], ['登入停權期限', fmtDate(account.banned_until)],
  ].map(([label, value]) => ({ label, value: plain(value) }))
}
function avatar(account) {
  try {
    const url = new URL(account.avatar_url)
    if (['https:', 'http:'].includes(url.protocol) && !url.username && !url.password) return `<img src="${esc(url.href)}" alt="${esc(account.full_name || '帳戶')}的頭像" width="64" height="64" loading="lazy" referrerpolicy="no-referrer">`
  } catch { /* No valid avatar: the identity text remains available. */ }
  return ''
}
function summary(account) {
  const spend = Array.isArray(account.spend) ? account.spend : []
  return `<div class="account-summary">
    <section class="detail-card"><h3>個人及帳戶資料</h3>${fieldGrid(profileFields(account))}</section>
    <section class="detail-card"><h3>已完成預約報價（非實收）</h3>
      <p class="notice">按已完成預約的報價快照計算，各貨幣分開顯示。這不是付款或實收總額；實收請看「實收紀錄」。</p>
      ${spend.length ? `<ul>${spend.map(item => `<li><strong>${esc(money(item.amount, item.currency))}</strong> · ${esc(plain(item.completed))} 個已完成預約</li>`).join('')}</ul>` : '<p class="muted">沒有可統計的已完成預約報價。</p>'}
      <button type="button" data-section="payments">查看實收紀錄</button>
    </section>
    <section class="detail-card"><h3>相關紀錄</h3><div class="section-tabs">${sections.map(([key, title]) => {
      const count = account.counts?.[key]
      return `<button type="button" data-section="${key}">${esc(title)}${Number.isFinite(count) ? `（${esc(count)}）` : ''}</button>`
    }).join('')}</div><p class="muted">選擇項目後分頁載入。未提供總數的項目，不會當成零筆。</p></section>
  </div>`
}
function recordValue(row, key) {
  if (dateKeys.has(key)) return fmtDate(row[key])
  if (key === 'price_snapshot') return money(row[key], row.currency_snapshot)
  if (key === 'paid_amount') return money(row[key], row.currency)
  if (key === 'source' && row[key] === 'merchant') return '商戶代客預約'
  if (enumKeys.has(key)) return Object.hasOwn(enums, row[key]) ? enums[row[key]] : plain(row[key])
  return plain(row[key])
}
function recordCard(row, section, index) {
  const fields = recordFields[section].map(key => ({ label: labels[key], value: recordValue(row, key) }))
  if (section === 'birthdays') {
    fields.push({ label: '生日（月／日）', value: row.month && row.day ? `${row.month} 月 ${row.day} 日` : '—' })
    fields.push({ label: '商戶建立時間', value: fmtDate(row.created_at) })
  }
  fields.push({ label: section === 'payments' ? '預約 ID' : ['birthdays', 'crm', 'favourites'].includes(section) ? '商戶 ID' : section === 'wallets' ? '獎勵計劃 ID' : '紀錄 ID', value: plain(row.id) })
  const businessLink = ['businesses', 'birthdays', 'crm', 'favourites'].includes(section) && row.id
  return `<article class="detail-card"><h4>${esc(row.title || row.program_name || row.business_name || `紀錄 ${index + 1}`)}</h4>${fieldGrid(fields)}
    ${businessLink ? `<div class="toolbar"><button type="button" data-business-id="${esc(row.id)}">查看商戶</button>${section === 'businesses' ? `<button type="button" data-business-bookings="${esc(row.id)}">查看此商戶預約</button>` : ''}</div>` : ''}</article>`
}
function sectionNotice(section) {
  if (section === 'payments') return '<p class="notice">商戶完成預約時記錄的實收金額，與預約報價分開；不代表第三方支付平台已完成結算。</p>'
  if (section === 'conversations') return '<p class="notice">此處只顯示對話參與者、時間及訊息數目，不顯示私人訊息內容。</p>'
  if (section === 'birthdays') return '<p class="notice">生日按商戶分別登記，只顯示月份與日期。</p>'
  if (section === 'bookings' || section === 'merchant_bookings') return '<p class="notice">金額為預約建立時的報價快照，並非實收金額。</p>'
  return ''
}

export async function renderAccount(ctx, id) {
  const live = session(ctx), { container, data } = ctx
  if (!live()) return
  if (detailState.id !== id) detailState = { id, section: 'overview', page: 1 }
  const requested = { ...detailState }
  const back = '<button type="button" class="back-btn" data-back-accounts>← 返回帳戶清單</button>'
  container.innerHTML = `${back}${loading('載入帳戶資料…')}`
  container.querySelector('[data-back-accounts]').addEventListener('click', () => navigate(ctx, live, 'accounts'))
  let account
  try {
    account = await data.account(id, { signal: ctx.signal })
    if (!live()) return
  } catch (error) {
    if (!live()) return
    container.innerHTML = `${back}<div data-account-error></div>`
    container.querySelector('[data-back-accounts]').addEventListener('click', () => navigate(ctx, live, 'accounts'))
    showError(container.querySelector('[data-account-error]'), error, () => navigate(ctx, live, 'account', { id }))
    return
  }
  container.innerHTML = `${back}<header class="toolbar">${avatar(account)}<div><h2>${esc(account.full_name || account.email || '帳戶資料')}</h2><p class="meta">${esc(roleText(account))} · ${esc(statusText(account))}</p></div><button type="button" data-refresh-account>重新整理</button></header>
    <p class="muted">帳戶及相關紀錄按權限顯示，查閱會留下管理員存取紀錄。</p>
    <nav class="section-tabs" aria-label="帳戶資料分類">${[['overview', '總覽'], ...sections].map(([key, title]) => `<button type="button" data-section="${key}" aria-pressed="${key === requested.section}" class="${key === requested.section ? 'active' : ''}">${esc(title)}${Number.isFinite(account.counts?.[key]) ? `（${esc(account.counts[key])}）` : ''}</button>`).join('')}</nav>
    <div data-account-panel aria-live="polite">${requested.section === 'overview' ? summary(account) : loading('載入相關紀錄…')}</div>`
  container.querySelector('[data-back-accounts]').addEventListener('click', () => navigate(ctx, live, 'accounts'))
  container.querySelector('[data-refresh-account]').addEventListener('click', () => navigate(ctx, live, 'account', { id }))
  container.querySelectorAll('[data-section]').forEach(button => button.addEventListener('click', () => {
    if (!live()) return
    detailState = { id, section: button.dataset.section, page: 1 }; navigate(ctx, live, 'account', { id })
  }))
  if (requested.section === 'overview') return
  const panel = container.querySelector('[data-account-panel]'), title = sections.find(([key]) => key === requested.section)?.[1]
  try {
    const page = await data.accountRecords({ id, section: requested.section, page: requested.page, pageSize: RECORD_SIZE, signal: ctx.signal })
    if (!live()) return
    const lastPage = Math.max(1, Math.ceil(page.total / page.pageSize))
    if (requested.page > lastPage) {
      detailState.page = lastPage
      navigate(ctx, live, 'account', { id })
      return
    }
    panel.innerHTML = `<h3>${esc(title)}</h3>${sectionNotice(requested.section)}${page.available === false
      ? '<p class="notice" role="status">此類資料暫未啟用或未提供，並不代表此帳戶沒有紀錄。</p>'
      : `<p class="muted">共 ${esc(page.total)} 筆紀錄</p>${page.items.length ? `<div class="detail-grid">${page.items.map((row, index) => recordCard(row, requested.section, index)).join('')}</div>` : `<p class="notice">${page.total > 0 ? '此頁沒有紀錄，請返回上一頁或重新整理。' : '此帳戶暫時沒有這類紀錄。'}</p>`}${pager(page)}`}`
    bindPager(panel, number => { detailState.page = number; navigate(ctx, live, 'account', { id }) }, live)
    panel.querySelectorAll('[data-business-id]').forEach(button => button.addEventListener('click', () => navigate(ctx, live, 'business', { id: button.dataset.businessId })))
    panel.querySelectorAll('[data-business-bookings]').forEach(button => button.addEventListener('click', () => navigate(ctx, live, 'bookings', { businessId: button.dataset.businessBookings })))
  } catch (error) {
    if (!live()) return
    showError(panel, error, () => navigate(ctx, live, 'account', { id }))
  }
}
