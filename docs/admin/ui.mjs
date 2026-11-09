export const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
export function fmtDate(v) {
  if (!v || !Number.isFinite(new Date(v).getTime())) return '—'
  return new Date(v).toLocaleString('zh-HK', {year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false})
}
export function money(amount, currency) {
  if (amount == null || amount === '' || !Number.isFinite(Number(amount))) return currency ? `${currency} 金額未知` : '金額／幣別未知'
  const number = Number(amount).toLocaleString('zh-HK', {maximumFractionDigits:2})
  return `${currency || '幣別未知'} ${number}`
}
export function safeUrl(v) {
  try { const u = new URL(v); return !u.username && !u.password && (u.protocol === 'https:' || u.protocol === 'http:') ? u.href : '' } catch { return '' }
}
export const fieldGrid = rows => `<dl class="detail-grid">${rows.map(({label,value}) => `<div><dt>${esc(label)}</dt><dd>${esc(value == null || value === '' ? '—' : value)}</dd></div>`).join('')}</dl>`
export function pager({page, pageSize, total}) {
  const pages = Math.max(1, Math.ceil(total / pageSize))
  const start = total ? (page - 1) * pageSize + 1 : 0
  const end = Math.min(page * pageSize, total)
  return `<div class="pagination" aria-label="分頁"><p role="status">共 ${total.toLocaleString()} 筆 · ${start}–${end} 筆 · 第 ${page} / ${pages} 頁</p><div><button type="button" data-page="1" ${page <= 1 ? 'disabled' : ''}>首頁</button><button type="button" data-page="${page-1}" ${page <= 1 ? 'disabled' : ''}>上一頁</button><button type="button" data-page="${page+1}" ${page >= pages ? 'disabled' : ''}>下一頁</button><button type="button" data-page="${pages}" ${page >= pages ? 'disabled' : ''}>末頁</button></div></div>`
}
export function errorMessage(error) {
  const code = String(error?.code || '')
  const message = String(error?.message || '')
  if (/42501|PGRST301/.test(code) || /forbidden|permission denied|JWT expired/i.test(message)) return '未獲授權，或登入已過期。請重新登入管理員帳戶。'
  if (code === 'P0002') return '搵唔到呢筆資料，可能已移除。'
  if (/PGRST202|42883/.test(code)) return '此功能嘅後端接口未可使用，請稍後再試。'
  if (/invalid|無效|日期|格式|page|search|filter/i.test(message)) return '搜尋條件或日期格式不正確，請檢查後再試。'
  return '載入失敗，未能確認資料。請檢查網絡後重試。'
}
export function showError(container, error, retry) {
  container.innerHTML = `<div class="block-err" role="alert"><p>${esc(errorMessage(error))}</p><button type="button">重試</button></div>`
  container.querySelector('button').onclick = retry
}
export const loading = () => '<p class="block-err" role="status">正在載入資料…</p>'
export const option = (value, label, selected) => `<option value="${esc(value)}" ${String(value)===String(selected) ? 'selected' : ''}>${esc(label)}</option>`
export function imageLinks(images) {
  return (images || []).map(safeUrl).filter(Boolean).map((u,i) => `<a href="${esc(u)}" target="_blank" rel="noopener noreferrer"><img src="${esc(u)}" loading="lazy" alt="商戶圖片 ${i+1}"></a>`).join('')
}
export const statusLabel = v => ({pending:'待確認',confirmed:'已確認',completed:'已完成',cancelled:'已取消',rejected:'已拒絕',open:'未處理',reviewing:'處理中',resolved:'已解決',dismissed:'已駁回',paid:'已付款',unpaid:'未付款',refunded:'已退款',app:'App',merchant:'商戶代客預約',manual:'商戶代客預約',web:'網頁預約'}[v] || v || '—')
export function dateBounds(from, to) {
  const parse = value => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw Error('invalid date')
    const d = new Date(`${value}T00:00:00`)
    if (!Number.isFinite(d.getTime()) || `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}` !== value) throw Error('invalid date')
    return d
  }
  const start = from ? parse(from) : null, end = to ? parse(to) : null
  if (start && end && start > end) throw Error('invalid date range')
  if (end) end.setDate(end.getDate()+1)
  return {from:start?.toISOString(),to:end?.toISOString()}
}
