import {esc} from './ui.mjs'

const number = new Intl.NumberFormat('zh-HK', {maximumFractionDigits:1})
const empty = text => `<p class="block-err">${text}</p>`

function amount(value) {
  if (value == null || value === '') return null
  const n = Number(value)
  return Number.isFinite(n) && n >= 0 ? n : null
}

export function bookingOutcomeChart(health) {
  const total = amount(health.created)
  if (total === 0) return empty('呢段時間冇新預約')

  const completed = amount(health.completed)
  const cancelled = amount(health.cancelled)
  const pending = amount(health.pending)
  if ([total, completed, cancelled].includes(null) || completed + cancelled + (pending ?? 0) > total) {
    return empty('未有完整嘅預約結果統計')
  }

  const slices = [
    ['完成', completed, 'done'],
    ['取消', cancelled, 'cancel'],
    ...(pending === null ? [] : [['待確認', pending, 'pending']]),
    ['其他狀態', total - completed - cancelled - (pending ?? 0), 'other'],
  ]
  let offset = 0
  const rings = slices.map(([, count, key]) => {
    const part = 100 * count / total
    const arc = part > 0
      ? `<circle class="outcome-stroke outcome-${key}" cx="60" cy="60" r="49" pathLength="100"
          stroke-dasharray="${part} 100" stroke-dashoffset="${-offset}"></circle>`
      : ''
    offset += part
    return arc
  }).join('')
  return `<div class="outcome-chart">
    <div class="outcome-ring" aria-hidden="true">
      <svg viewBox="0 0 120 120"><circle class="outcome-track" cx="60" cy="60" r="49"></circle>${rings}</svg>
      <div><strong>${number.format(total)}</strong><span>新預約</span></div>
    </div>
    <ul class="outcome-legend" aria-label="新預約結果，合共 ${number.format(total)} 單">${slices.map(([label, count, key]) =>
      `<li><span><i class="outcome-swatch outcome-${key}" aria-hidden="true"></i>${label}</span>
        <b>${number.format(count)} <small>（${number.format(100 * count / total)}%）</small></b></li>`).join('')}</ul>
  </div>`
}

export function bookingPeriodChart(health, days) {
  const previous = health.prev ?? {}
  const metrics = [
    ['新預約', 'created', ' 單'],
    ['完成率', 'completion_rate', '%'],
    ['取消率', 'cancel_rate', '%'],
  ]
  return `<p class="analytics-note">最近 ${number.format(days)} 日，同再之前 ${number.format(days)} 日比較</p>
    <div class="period-charts">${metrics.map(([label, key, unit]) => {
      const values = [amount(health[key]), amount(previous[key])]
      const max = unit === '%' ? 100 : Math.max(...values, 1)
      return `<section class="period-metric"><h3>${label}</h3>
        ${values.map((value, index) => {
          const width = value === null ? 0 : Math.min(100, 100 * value / max)
          return `<div class="period-row"><span>${index ? '上期' : '今期'}</span>
            <span class="analytics-track" aria-hidden="true"><i class="${index ? 'period-prior' : ''}" style="width:${width}%"></i></span>
            <b>${value === null ? '—' : number.format(value) + unit}</b></div>`
        }).join('')}
      </section>`
    }).join('')}</div>`
}

export function merchantBookingChart(rows) {
  const ranking = rows.map(row => ({name:row.name, count:amount(row.bookings)}))
    .filter(row => row.count !== null).sort((a, b) => b.count - a.count)
  if (!ranking.length) return ''
  const max = Math.max(ranking[0].count, 1)
  return `<ol class="merchant-bars" aria-label="商戶新預約排行">
    ${ranking.map(({name, count}) => `<li>
      <div><span>${esc(name)}</span><b>${number.format(count)} 單</b></div>
      <span class="analytics-track" aria-hidden="true"><i style="width:${100 * count / max}%"></i></span>
    </li>`).join('')}
  </ol>`
}
