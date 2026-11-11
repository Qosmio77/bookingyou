export function startWorldClock(clocks) {
  const displays = [...clocks].map(element => ({
    element,
    formatter: new Intl.DateTimeFormat('en-GB', {
      timeZone: element.dataset.clock,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    }),
  }))
  if (!displays.length) return

  let timer
  function update() {
    clearTimeout(timer)
    if (document.hidden) return
    const now = new Date()
    const instant = now.toISOString()
    for (const {element, formatter} of displays) {
      element.textContent = formatter.format(now)
      element.dateTime = instant
    }
    timer = setTimeout(update, 1000 - now.getTime() % 1000)
  }
  document.addEventListener('visibilitychange', update)
  update()
}
