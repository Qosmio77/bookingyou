const LOCK_KEY = 'bookingyou-admin-logout-lock'
const POLICY_VERSION = 1

// Continuity only: this does not authenticate a JWT or grant permission.
// The server gate and data policies remain the authorization boundary.
function authSessionId(session) {
  try {
    const parts = session?.access_token?.split('.')
    const payload = parts?.length === 3 ? parts[1] : ''
    if (!payload || payload.length > 65536 || !/^[A-Za-z0-9_-]+$/.test(payload) || payload.length % 4 === 1) return null
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/')
    const bytes = atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, '='))
    const json = decodeURIComponent(Array.from(bytes, byte => `%${byte.charCodeAt(0).toString(16).padStart(2, '0')}`).join(''))
    const id = JSON.parse(json)?.session_id
    return typeof id === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id) ? id.toLowerCase() : null
  } catch { return null }
}

// Auth UI is not an authorization boundary: every unlock also requires the
// server gate, and the data policies enforce AAL2 independently.
export function setupAdminAuth({ sb, onAuthorized, onLocked }) {
  const $ = id => document.getElementById(id)
  let live = true, revision = 0, eventVersion = 0, loginAttempt = 0
  let actor = null, currentSession = null, busy = '', authorized = false
  let sessionEstablished = false
  let pending = null, factors = [], selectedFactor = '', logoutLocked = false
  let cooldownUntil = 0, cooldownTimer = null
  const timers = new Set()
  try { logoutLocked = sessionStorage.getItem(LOCK_KEY) === '1' } catch {}

  function persistLock(value) {
    logoutLocked = value
    try { if (value) sessionStorage.setItem(LOCK_KEY, '1'); else sessionStorage.removeItem(LOCK_KEY) } catch {}
  }
  function bounded(promise) {
    let timer
    const timeout = new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('AUTH_TIMEOUT')), 15000); timers.add(timer) })
    return Promise.race([promise, timeout]).finally(() => { clearTimeout(timer); timers.delete(timer) })
  }
  const valid = (version, id) => live && !logoutLocked && revision === version && actor === id
  const hide = (id, value) => $(id).classList.toggle('hidden', value)
  function maskSetup() {
    $('mfaQr').removeAttribute('src'); $('mfaSecret').textContent = ''; $('mfaManual').open = false
    hide('mfaSetup', true)
  }
  function clearSecrets() { pending = null; maskSetup(); $('mfaCode').value = '' }
  function clearCooldown() { cooldownUntil = 0; clearTimeout(cooldownTimer); cooldownTimer = null }
  function controls() {
    const waiting = Date.now() < cooldownUntil
    $('loginBtn').disabled = !!busy || waiting
    $('mfaEnrollBtn').disabled = !!busy || waiting
    $('mfaVerifyBtn').disabled = !!busy || waiting
    $('mfaFactors').disabled = !!busy
    $('authRetry').disabled = !!busy
    $('authSignOut').disabled = busy === 'logout'
    $('logoutBtn').disabled = busy === 'logout'
    $('loginBtn').textContent = busy === 'signin' ? '登入中…' : '登入並繼續'
    $('mfaVerifyBtn').textContent = busy === 'verify' ? '正在驗證…' : waiting ? '請稍後再試' : '驗證並進入後台'
  }
  function lockView(meta = {}) {
    authorized = false; hide('main', true); hide('login', false)
    onLocked(meta)
  }
  function step(second) {
    $('authStepAccount').setAttribute('aria-current', second ? 'false' : 'step')
    $('authStepVerify').setAttribute('aria-current', second ? 'step' : 'false')
  }
  function loginView(message = '') {
    $('password').type = 'password'; $('passwordToggle').textContent = '顯示'
    $('passwordToggle').setAttribute('aria-label', '顯示密碼'); $('passwordToggle').setAttribute('aria-pressed', 'false')
    step(false); hide('loginForm', false); hide('mfaPanel', true); hide('authRetry', true); hide('authSignOut', true)
    $('authIdentity').textContent = ''; $('authStatus').textContent = ''; $('mfaError').textContent = ''
    $('loginErr').textContent = message; controls()
  }
  function checkingView() {
    step(true); hide('loginForm', true); hide('mfaPanel', false); hide('authRetry', true); hide('authSignOut', false)
    hide('mfaForm', true); hide('mfaEnrollBtn', true); maskSetup()
    $('authIdentity').textContent = currentSession?.user?.email || '管理員帳戶'
    $('authStatus').textContent = '正在確認管理員權限及安全驗證狀態…'
    $('mfaTitle').textContent = '安全驗證'; $('mfaDescription').textContent = ''; $('mfaError').textContent = ''
    controls()
  }
  function blocked(message) {
    busy = ''; $('authStatus').textContent = ''; $('mfaError').textContent = message
    hide('mfaForm', true); hide('mfaEnrollBtn', true); hide('authRetry', false); maskSetup(); controls()
  }
  function readFactors(data) {
    if (!data || !Array.isArray(data.all) || !Array.isArray(data.totp)) throw new Error('AUTH_FACTOR_RESPONSE')
    factors = data.all.filter(f => f && f.status === 'verified')
    const totp = data.totp.filter(f => f && typeof f.id === 'string' && f.status === 'verified' && (!f.factor_type || f.factor_type === 'totp'))
    return totp
  }
  function qrDataUrl(value) {
    if (typeof value !== 'string') throw new Error('AUTH_QR_RESPONSE')
    let svg = value
    if (svg.startsWith('data:image/svg+xml')) {
      const comma = svg.indexOf(',')
      if (comma < 0 || /;base64/i.test(svg.slice(0, comma))) throw new Error('AUTH_QR_RESPONSE')
      svg = svg.slice(comma + 1)
      if (!svg.trimStart().startsWith('<')) svg = decodeURIComponent(svg)
    }
    if (!/^\s*<svg[\s>]/i.test(svg)) throw new Error('AUTH_QR_RESPONSE')
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
  }
  function challengeView(totp) {
    busy = ''; $('authStatus').textContent = ''; $('mfaError').textContent = ''; hide('authRetry', true)
    const select = $('mfaFactors'); select.replaceChildren()
    for (const [index, factor] of totp.entries()) {
      const option = document.createElement('option'); option.value = factor.id
      option.textContent = factor.friendly_name || `驗證器 ${index + 1}`; select.append(option)
    }
    if (totp.length) {
      clearSecrets()
      if (!totp.some(f => f.id === selectedFactor)) selectedFactor = totp[0].id
      select.value = selectedFactor
      $('mfaTitle').textContent = '輸入驗證碼'
      $('mfaDescription').textContent = '開啟你的驗證器，完成第二步確認。'
      hide('mfaFactorField', totp.length < 2); hide('mfaForm', false); hide('mfaEnrollBtn', true)
    } else if (factors.length) {
      blocked('此帳戶沒有可用的 TOTP 驗證器。請聯絡系統管理員處理帳戶驗證設定。')
      return
    } else {
      $('mfaTitle').textContent = '設定你的驗證器'
      $('mfaDescription').textContent = '首次登入需設定驗證器。完成設定後，每次登入均使用驗證器確認。'
      hide('mfaFactorField', true)
      const ownPending = pending?.actor === actor
      hide('mfaEnrollBtn', ownPending); hide('mfaForm', !ownPending); hide('mfaSetup', !ownPending)
      if (ownPending) { $('mfaQr').src = pending.qr; $('mfaSecret').textContent = pending.secret }
    }
    controls()
  }
  async function check(version, session) {
    const id = session.user.id
    try {
      const gate = await bounded(sb.rpc('admin_mfa_gate'))
      if (!valid(version, id)) return
      if (gate.error || !gate.data || gate.data.policy_version !== POLICY_VERSION || typeof gate.data.is_admin !== 'boolean' || typeof gate.data.aal2 !== 'boolean') throw new Error('AUTH_GATE_RESPONSE')
      if (!gate.data.is_admin) { blocked('此帳戶沒有管理員權限。請使用獲授權的帳戶登入。'); return }
      const [assurance, listed] = await bounded(Promise.all([
        sb.auth.mfa.getAuthenticatorAssuranceLevel(), sb.auth.mfa.listFactors(),
      ]))
      if (!valid(version, id)) return
      if (assurance.error || listed.error) throw new Error('AUTH_MFA_RESPONSE')
      const level = assurance.data?.currentLevel, next = assurance.data?.nextLevel
      if (!['aal1', 'aal2'].includes(level) || !['aal1', 'aal2'].includes(next) || gate.data.aal2 !== (level === 'aal2')) throw new Error('AUTH_AAL_MISMATCH')
      const totp = readFactors(listed.data)
      if (!gate.data.aal2) { challengeView(totp); return }
      if (next !== 'aal2' || !totp.length) throw new Error('AUTH_FACTOR_REQUIRED')
      const latest = await bounded(sb.auth.getSession())
      if (!valid(version, id)) return
      if (latest.error || latest.data?.session?.user?.id !== id || latest.data.session.access_token !== session.access_token) throw new Error('AUTH_SESSION_CHANGED')
      clearSecrets(); clearCooldown(); busy = ''; authorized = true; $('password').value = ''
      $('authStatus').textContent = ''; hide('login', true); hide('main', false); controls()
      await onAuthorized(latest.data.session)
    } catch {
      if (!valid(version, id)) return
      lockView(); blocked('未能確認安全驗證狀態。後台已鎖定，請重新核對或登出再試。')
    }
  }
  function stageSession(session, event = 'RECHECK') {
    if (!live || logoutLocked) return
    const id = session?.user?.id || null, sameActor = !!id && id === actor
    const previousSessionId = authSessionId(currentSession)
    const sameSession = sameActor && !!previousSessionId && previousSessionId === authSessionId(session)
    const version = ++revision
    if (!sameSession) { clearSecrets(); clearCooldown(); selectedFactor = ''; factors = [] }
    if (event === 'MFA_CHALLENGE_VERIFIED') clearSecrets()
    actor = id; currentSession = session; sessionEstablished = true; busy = id ? 'gate' : ''
    lockView({ sameActor, event })
    if (!id) { loginView(); return }
    checkingView()
    queueMicrotask(() => { if (valid(version, id)) void check(version, session) })
  }
  function failure(error, fallback) {
    if (error?.status === 429 || /rate|too_many/i.test(String(error?.code || ''))) {
      cooldownUntil = Date.now() + 30000; clearTimeout(cooldownTimer)
      cooldownTimer = setTimeout(() => { if (live) controls() }, 30020)
      return '嘗試次數較多，請稍候 30 秒再試。'
    }
    return fallback
  }
  async function signOut() {
    if (!live || busy === 'logout') return
    persistLock(true); loginAttempt++; revision++; eventVersion++
    actor = null; currentSession = null; busy = 'logout'; clearSecrets(); clearCooldown(); selectedFactor = ''; factors = []
    $('password').value = ''; lockView({ event: 'SIGNED_OUT' }); loginView()
    try { const result = await bounded(sb.auth.signOut()); if (result.error) throw result.error }
    catch { if (live) $('loginErr').textContent = '登出未完成，後台仍保持鎖定。請檢查網絡後重新登入。' }
    finally { if (live) { busy = ''; controls() } }
  }
  async function recheck() {
    if (!live || busy || logoutLocked) return
    if (currentSession) { stageSession(currentSession); return }
    const version = revision
    try { const result = await bounded(sb.auth.getSession()); if (live && revision === version && !logoutLocked && !result.error) stageSession(result.data?.session) }
    catch { if (live && revision === version) loginView('未能確認登入狀態，請稍後再試。') }
  }
  $('loginForm').onsubmit = async event => {
    event.preventDefault(); if (!live || busy || Date.now() < cooldownUntil) return
    // Only this deliberate request may release the lock. A late SIGNED_IN
    // event after timeout/failure must not silently reopen the workspace.
    persistLock(true); revision++; eventVersion++
    const attempt = ++loginAttempt; busy = 'signin'; $('loginErr').textContent = ''; controls()
    try {
      const result = await bounded(sb.auth.signInWithPassword({ email: $('email').value.trim(), password: $('password').value }))
      if (!live || attempt !== loginAttempt) return
      if (result.error || !result.data?.session) throw result.error || new Error('AUTH_SESSION_MISSING')
      persistLock(false); $('password').value = ''; busy = ''; stageSession(result.data.session, 'SIGNED_IN')
    } catch (error) {
      if (live && attempt === loginAttempt) { busy = ''; $('password').value = ''; loginView(failure(error, '未能登入，請檢查電郵及密碼，或稍後再試。')) }
    } finally { if (live && attempt === loginAttempt) { if (busy === 'signin') busy = ''; controls() } }
  }
  $('passwordToggle').onclick = () => {
    const showing = $('password').type === 'password'; $('password').type = showing ? 'text' : 'password'
    $('passwordToggle').textContent = showing ? '隱藏' : '顯示'; $('passwordToggle').setAttribute('aria-label', showing ? '隱藏密碼' : '顯示密碼'); $('passwordToggle').setAttribute('aria-pressed', String(showing))
  }
  $('mfaFactors').onchange = () => { selectedFactor = $('mfaFactors').value; $('mfaCode').value = ''; $('mfaError').textContent = '' }
  $('mfaCode').oninput = () => { $('mfaCode').value = $('mfaCode').value.replace(/\D/g, '').slice(0, 6) }
  $('mfaEnrollBtn').onclick = async () => {
    if (!live || busy || logoutLocked || !actor || factors.length || Date.now() < cooldownUntil) return
    const version = revision, id = actor; busy = 'enroll'; $('mfaError').textContent = ''; controls()
    try {
      const listed = await bounded(sb.auth.mfa.listFactors())
      if (!valid(version, id)) return
      if (listed.error) throw listed.error
      const totp = readFactors(listed.data)
      if (factors.length || pending?.actor === id) { challengeView(totp); return }
      const result = await bounded(sb.auth.mfa.enroll({ factorType: 'totp', issuer: 'BookingYou', friendlyName: `BookingYou Admin ${new Date().toISOString()}` }))
      if (!valid(version, id)) return
      if (result.error) throw result.error
      if (typeof result.data?.id !== 'string' || typeof result.data?.totp?.secret !== 'string' || !result.data.totp.secret) throw new Error('AUTH_ENROLL_RESPONSE')
      pending = { actor: id, id: result.data.id, qr: qrDataUrl(result.data.totp.qr_code), secret: result.data.totp.secret }
      challengeView([])
    } catch (error) {
      if (valid(version, id)) { busy = ''; $('mfaError').textContent = failure(error, '未能設定驗證器，請檢查網絡後再試。'); hide('authRetry', false); controls() }
    }
  }
  $('mfaForm').onsubmit = async event => {
    event.preventDefault()
    if (!live || busy || logoutLocked || !actor || Date.now() < cooldownUntil) return
    const code = $('mfaCode').value.trim()
    if (!/^\d{6}$/.test(code)) { $('mfaError').textContent = '請輸入驗證器顯示的 6 位數字。'; return }
    const factorId = pending?.actor === actor ? pending.id : selectedFactor
    if (!factorId || (!pending && !factors.some(f => f.id === factorId && f.factor_type === 'totp'))) return
    const version = revision, id = actor; busy = 'verify'; $('mfaError').textContent = ''; $('mfaCode').value = ''; controls()
    try {
      const result = await bounded(sb.auth.mfa.challengeAndVerify({ factorId, code }))
      if (!valid(version, id)) return
      if (result.error) throw result.error
      clearSecrets()
      const latest = await bounded(sb.auth.getSession())
      if (!valid(version, id)) return
      if (latest.error || latest.data?.session?.user?.id !== id) throw new Error('AUTH_SESSION_CHANGED')
      busy = ''; stageSession(latest.data.session, 'MFA_CHALLENGE_VERIFIED')
    } catch (error) {
      if (valid(version, id)) { busy = ''; $('mfaError').textContent = failure(error, '驗證未通過。請輸入最新代碼，確認裝置時間正確後再試。'); controls() }
    }
  }
  $('authRetry').onclick = () => void recheck()
  $('authSignOut').onclick = () => void signOut()
  $('logoutBtn').onclick = () => void signOut()

  lockView(); loginView()
  const subscription = sb.auth.onAuthStateChange((event, session) => {
    if (live && event === 'SIGNED_OUT') {
      if (busy === 'logout' && logoutLocked) return
      const duringLogin = busy === 'signin'
      loginAttempt++; revision++; eventVersion++; persistLock(true)
      actor = null; currentSession = null; busy = ''; clearSecrets(); clearCooldown()
      selectedFactor = ''; factors = []
      lockView({ event }); loginView(duringLogin ? '登入狀態已變更，請重新登入。' : '登入已結束，請重新登入。')
      return
    }
    if (!live || logoutLocked || busy === 'signin') return
    // A valid refresh/MFA upgrade rotates the token within the same session_id.
    // An old completion must not replace a fresh login to the same account.
    const continuityRequired = event === 'MFA_CHALLENGE_VERIFIED' || (event === 'TOKEN_REFRESHED' && sessionEstablished)
    const previousSessionId = authSessionId(currentSession)
    if (continuityRequired && (!actor || session?.user?.id !== actor || !previousSessionId || authSessionId(session) !== previousSessionId)) {
      persistLock(true); revision++; eventVersion++; loginAttempt++
      actor = null; currentSession = null; busy = ''; clearSecrets(); clearCooldown(); selectedFactor = ''; factors = []
      lockView({ event: 'AUTH_IDENTITY_CHANGED' }); loginView('登入狀態已變更，請重新登入。')
      // The SDK already stored this response. Remove only that local session,
      // outside its auth lock, and never remove a newer deliberate login.
      queueMicrotask(() => {
        if (!live || !session?.access_token) return
        void (async () => {
          const latest = await bounded(sb.auth.getSession())
          if (!live || latest.error || latest.data?.session?.access_token !== session.access_token) return
          await bounded(sb.auth.signOut({ scope: 'local' }))
        })().catch(() => {})
      })
      return
    }
    const eventId = ++eventVersion
    // stageSession does only local work; Supabase calls are queued outside its lock.
    if (eventId === eventVersion) stageSession(session, event)
  })
  const initialEvent = eventVersion, initialRevision = revision
  if (!logoutLocked) {
    void bounded(sb.auth.getSession()).then(result => {
      if (!live || initialEvent !== 0 || initialEvent !== eventVersion || initialRevision !== revision || logoutLocked || busy === 'signin') return
      if (result.error) loginView('未能確認登入狀態，請重新登入。')
      else stageSession(result.data?.session, 'INITIAL_SESSION')
    }).catch(() => { if (live && initialEvent === 0 && initialEvent === eventVersion && initialRevision === revision && !logoutLocked && busy !== 'signin') loginView('未能確認登入狀態，請重新登入。') })
  }
  return {
    recheck, signOut,
    destroy() {
      live = false; revision++; loginAttempt++; eventVersion++; clearSecrets(); clearCooldown()
      for (const timer of timers) clearTimeout(timer)
      subscription?.data?.subscription?.unsubscribe()
      for (const id of ['loginForm', 'mfaForm']) $(id).onsubmit = null
      for (const id of ['passwordToggle', 'mfaEnrollBtn', 'authRetry', 'authSignOut', 'logoutBtn']) $(id).onclick = null
      $('mfaFactors').onchange = null; $('mfaCode').oninput = null; onLocked()
    },
  }
}
