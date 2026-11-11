const root = document.documentElement
const systemTheme = matchMedia('(prefers-color-scheme: dark)')
const buttons = document.querySelectorAll('[data-theme-toggle]')

function activeTheme() {
  return root.dataset.theme || (systemTheme.matches ? 'dark' : 'light')
}

function updateButtons() {
  const dark = activeTheme() === 'dark'
  const label = dark ? '切換至淺色模式' : '切換至深色模式'
  for (const button of buttons) {
    button.textContent = dark ? '☀️' : '🌙'
    button.title = label
    button.setAttribute('aria-label', label)
  }
}

for (const button of buttons) {
  button.addEventListener('click', () => {
    const next = activeTheme() === 'dark' ? 'light' : 'dark'
    root.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch {}
    updateButtons()
  })
}

systemTheme.addEventListener('change', updateButtons)
updateButtons()
