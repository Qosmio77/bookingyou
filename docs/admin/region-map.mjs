import {esc} from './ui.mjs'
import {regionPoints, worldOutline} from './world-map-data.mjs'

const number = new Intl.NumberFormat('zh-HK')

export function renderRegionMap(rows, label) {
  const counts = new Map()
  let unknown = 0
  let hasCounts = false
  for (const row of rows) {
    if (row.residents == null || row.residents === '') continue
    const count = Number(row.residents)
    if (!Number.isSafeInteger(count) || count < 0) continue
    hasCounts = true
    const code = String(row.country ?? '').trim().toUpperCase()
    if (!/^[A-Z]{2}$/.test(code)) unknown += count
    else if (count > 0) counts.set(code, (counts.get(code) ?? 0) + count)
  }
  const regions = [...counts].sort(([a, x], [b, y]) => y - x || a.localeCompare(b))
  const known = regions.reduce((sum, [, count]) => sum + count, 0)
  const largest = regions[0]?.[1] ?? 1
  const dots = regions.filter(([code]) => Object.hasOwn(regionPoints, code)).map(([code, count]) => {
    const [x, y] = regionPoints[code]
    const radius = (4 + 10 * Math.sqrt(count / largest)).toFixed(1)
    return `<circle class="region-dot" data-region-dot="${code}" cx="${x}" cy="${y}" r="${radius}">
      <title>${esc(label(code))}：${number.format(count)} 人</title></circle>`
  }).join('')
  const options = regions.map(([code, count]) =>
    `<option value="${code}" data-residents="${count}">${esc(label(code))} · ${number.format(count)} 人</option>`).join('')
  const totals = hasCounts
    ? `已填地區 ${number.format(known)} 人 · 未填或無法辨識 ${number.format(unknown)} 人`
    : '未有註冊地區統計'
  return `<div class="region-map">
    <div class="region-map-plot">
      <svg viewBox="0 0 720 294" aria-hidden="true">
        <path class="region-outline" d="${worldOutline}"></path>${dots}
      </svg>
    </div>
    <div class="region-map-caption">
      <span>註冊所在地 · 累計</span><span>${totals}</span>
    </div>
    ${options ? `<div class="region-map-controls">
      <select aria-label="選擇用戶地區" data-region-select>${options}</select>
      <output data-region-count aria-live="polite"></output>
    </div>` : ''}
  </div>`
}

export function wireRegionMap(root) {
  const select = root.querySelector('[data-region-select]')
  if (!select) return
  const output = root.querySelector('[data-region-count]')
  const dots = root.querySelectorAll('[data-region-dot]')
  function showSelection() {
    const code = select.value
    output.textContent = `${number.format(Number(select.selectedOptions[0].dataset.residents))} 人`
    for (const dot of dots) dot.toggleAttribute('data-selected', dot.dataset.regionDot === code)
  }
  select.addEventListener('change', showSelection)
  for (const dot of dots) {
    dot.addEventListener('click', () => {
      select.value = dot.dataset.regionDot
      showSelection()
    })
  }
  showSelection()
}
