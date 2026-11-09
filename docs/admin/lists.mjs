import {esc,fmtDate,money,fieldGrid,pager,showError,loading,option,imageLinks,safeUrl,statusLabel,dateBounds} from './ui.mjs'
import {historicalAmount,customerName,customerPhone} from './data.mjs'

const fresh = () => ({page:1,pageSize:25,search:'',status:'all',country:'',from:'',to:'',businessId:''})
let states = {businesses:fresh(),bookings:fresh(),complaints:fresh(),reviews:fresh()}
let detail = {id:null,tab:'services',page:1}
export function resetLists() { states = {businesses:fresh(),bookings:fresh(),complaints:fresh(),reviews:fresh()}; detail={id:null,tab:'services',page:1} }
const statuses = ['all','pending','confirmed','completed','cancelled']
const searchField = (s,placeholder) => `<label class="field grow">搜尋全部資料<input name="search" type="search" maxlength="200" value="${esc(s.search)}" placeholder="${esc(placeholder)}"></label>`
const selectField = (name,label,values,value) => `<label class="field">${label}<select name="${name}">${values.map(([v,l])=>option(v,l,value)).join('')}</select></label>`
const pageSizeField = s => selectField('pageSize','每頁筆數',[[25,'25'],[50,'50']],s.pageSize)
const submit = '<button type="submit" class="primary">搜尋</button><button type="reset">清除條件</button>'
const empty = text => `<p class="block-err">${esc(text)}</p>`

function wireList(ctx,key,state) {
  const form = ctx.container.querySelector('form')
  form.onsubmit = e => {
    e.preventDefault(); if(!ctx.alive())return
    const values = new FormData(form)
    if(key==='bookings') {
      try { dateBounds(values.get('from'),values.get('to')) }
      catch {
        let error=form.querySelector('[data-date-error]')
        if(!error){error=document.createElement('p');error.dataset.dateError='';error.className='err';error.setAttribute('role','alert');form.append(error)}
        error.textContent='「預約至」不可早於「預約由」。請修改日期後再搜尋。'
        return
      }
    }
    for(const [name,value] of values) state[name]=name==='pageSize'?Number(value):String(value).trim()
    state.page=1;ctx.route(key)
  }
  form.onreset = e => {e.preventDefault();if(!ctx.alive())return;const businessId=state.businessId;Object.assign(state,fresh(),{businessId});ctx.route(key)}
  ctx.container.querySelectorAll('[data-page]').forEach(b=>b.onclick=()=>{if(!ctx.alive())return;state.page=Number(b.dataset.page);ctx.route(key)})
}
function detailLinks(ctx) {
  ctx.container.querySelectorAll('[data-business]').forEach(b=>b.onclick=()=>{if(ctx.alive())ctx.route('business',{id:b.dataset.business})})
  ctx.container.querySelectorAll('[data-account]').forEach(b=>b.onclick=()=>{if(ctx.alive())ctx.route('account',{id:b.dataset.account})})
}
async function act(ctx,button,question,request,reload) {
  if(!ctx.alive() || button.disabled || !confirm(question))return
  button.disabled=true
  const result = document.createElement('p'); result.className='err';result.setAttribute('role','alert');button.parentElement.append(result)
  try {
    const {data,error}=await request()
    if(error)throw error
    if(!data?.id)throw Error('record changed or update denied')
    if(ctx.alive())reload()
  } catch {
    if(ctx.alive()){result.textContent='未能完成操作，資料可能已改變或權限不足。請重新整理後再試。';button.disabled=false}
  }
}
function clampPage(ctx,key,s,result) {
  const last=Math.max(1,Math.ceil(result.total/s.pageSize))
  if(s.page>last){s.page=last;ctx.route(key);return true}return false
}

export async function renderBusinesses(ctx) {
  const s=states.businesses, c=ctx.container
  try {
    const r=await ctx.data.businesses({...s,signal:ctx.signal});if(!ctx.alive()||clampPage(ctx,'businesses',s,r))return
    c.innerHTML=`<form class="toolbar">${searchField(s,'名稱、類別、國家、電話、地址或完整 ID')}${selectField('status','營業／上架', [['all','全部'],['active','營業中'],['inactive','已停用'],['listed','已上架'],['unlisted','未上架']],s.status)}<label class="field">國家代碼<input name="country" value="${esc(s.country)}" maxlength="2" placeholder="例如 HK"></label>${pageSizeField(s)}${submit}</form>${pager(r)}<div class="result-list">${r.items.map(b=>`<article class="row"><h2><button class="text-link" data-business="${esc(b.id)}">${esc(b.name)}</button></h2><p class="meta">${esc(b.category)} · ${esc(b.country||'未填地區')} · ${b.is_active?'營業中':'已停用'} · ${b.is_listed?'已上架':'未上架'}</p><p class="meta">${esc(b.phone||'未填電話')} · ${esc(b.address||'未填地址')}</p><p class="meta">建立：${esc(fmtDate(b.created_at))}</p><div class="act"><button data-business="${esc(b.id)}">查看詳情</button><button data-toggle="${esc(b.id)}" ${b.is_active?'class="danger"':''}>${b.is_active?'停用':'啟用'}</button></div></article>`).join('')||empty('冇符合條件嘅商家。清除條件可查看全部。')}</div>${pager(r)}`
    wireList(ctx,'businesses',s);detailLinks(ctx)
    c.querySelectorAll('[data-toggle]').forEach(button=>{const b=r.items.find(x=>x.id===button.dataset.toggle);button.onclick=()=>act(ctx,button,`${b.is_active?'停用':'啟用'}「${b.name}」？`,()=>ctx.sb.from('businesses').update({is_active:!b.is_active}).eq('id',b.id).eq('is_active',b.is_active).select('id').maybeSingle(),()=>ctx.route('businesses'))})
  }catch(e){if(ctx.alive())showError(c,e,()=>ctx.route('businesses'))}
}

function bookingCard(b) {
  return `<article class="row"><h2>${esc(b.service?.name||b.service_name||'服務已移除')} <span class="badge ${esc(b.status)}">${esc(statusLabel(b.status))}</span></h2><p><button class="text-link" data-business="${esc(b.business_id)}">${esc(b.business?.name||b.business_name||'商家')}</button></p>${fieldGrid([{label:'客人',value:customerName(b)},{label:'電話',value:customerPhone(b)},{label:'開始時間',value:fmtDate(b.start_time)},{label:'結束時間',value:fmtDate(b.end_time)},{label:'預約當時金額',value:historicalAmount(b)},{label:'人數',value:b.party_size??1},{label:'來源',value:statusLabel(b.source)},{label:'付款狀態',value:statusLabel(b.payment_status)},{label:'建立時間',value:fmtDate(b.created_at)},{label:'預約 ID',value:b.id}])}${b.notes?`<p class="record-note">備註：${esc(b.notes)}</p>`:''}<div class="act">${b.customer_id?`<button data-account="${esc(b.customer_id)}">客人帳戶</button>`:'<span class="meta">訪客預約（未連結帳戶）</span>'}${['pending','confirmed'].includes(b.status)?`<button class="danger" data-cancel="${esc(b.id)}">取消預約</button>`:''}</div></article>`
}
export async function renderBookings(ctx) {
  const s=states.bookings,c=ctx.container
  if(ctx.params.businessId!==undefined){s.businessId=ctx.params.businessId;s.page=1}
  try {
    const r=await ctx.data.bookings({...s,...dateBounds(s.from,s.to),signal:ctx.signal});if(!ctx.alive()||clampPage(ctx,'bookings',s,r))return
    c.innerHTML=`${s.businessId?'<p class="notice">目前只顯示所選商家嘅預約。<button id="allBookings">查看全部商家</button></p>':''}<form class="toolbar">${searchField(s,'客人／訪客、電話、商家、服務、備註或完整 ID')}${selectField('status','狀態',statuses.map(v=>[v,v==='all'?'全部':statusLabel(v)]),s.status)}<label class="field">預約由<input type="date" name="from" value="${esc(s.from)}"></label><label class="field">預約至<input type="date" name="to" value="${esc(s.to)}"></label>${pageSizeField(s)}${submit}</form><p class="muted">日期及時間按本機時區顯示；金額使用預約價格快照，唔代表實收。缺少舊資料會顯示未知。</p>${pager(r)}${r.items.map(bookingCard).join('')||empty('冇符合條件嘅預約。')}${pager(r)}`
    wireList(ctx,'bookings',s);detailLinks(ctx)
    const all=c.querySelector('#allBookings');if(all)all.onclick=()=>{s.businessId='';s.page=1;ctx.route('bookings')}
    c.querySelectorAll('[data-cancel]').forEach(b=>b.onclick=()=>act(ctx,b,'確定取消呢單預約？',()=>ctx.sb.from('bookings').update({status:'cancelled'}).eq('id',b.dataset.cancel).in('status',['pending','confirmed']).select('id').maybeSingle(),()=>ctx.route('bookings')))
  }catch(e){if(ctx.alive())showError(c,e,()=>ctx.route('bookings'))}
}

export async function renderComplaints(ctx) {
  const s=states.complaints,c=ctx.container
  try {
    const r=await ctx.data.complaints({...s,signal:ctx.signal});if(!ctx.alive()||clampPage(ctx,'complaints',s,r))return
    c.innerHTML=`<form class="toolbar">${searchField(s,'原因、內容、商家、姓名或完整 ID')}${selectField('status','狀態',['all','open','reviewing','resolved','dismissed'].map(v=>[v,v==='all'?'全部':statusLabel(v)]),s.status)}${pageSizeField(s)}${submit}</form>${pager(r)}${r.items.map(x=>`<article class="row"><h2>${esc(x.reason)} <span class="badge">${esc(statusLabel(x.status))}</span></h2>${fieldGrid([{label:'商家',value:x.business?.name},{label:'投訴人',value:x.complainant?.full_name},{label:'角色',value:x.complainant_role==='customer'?'客人':'商戶'},{label:'建立時間',value:fmtDate(x.created_at)},{label:'預約 ID',value:x.booking_id},{label:'投訴 ID',value:x.id}])}<p class="record-note">${esc(x.description)}</p><div class="act">${(x.evidence_urls||[]).map(safeUrl).filter(Boolean).map((url,i)=>`<a class="button" href="${esc(url)}" target="_blank" rel="noopener noreferrer">證據 ${i+1}</a>`).join('')}${x.against_business_id?`<button data-business="${esc(x.against_business_id)}">商家詳情</button>`:''}${x.complainant_id?`<button data-account="${esc(x.complainant_id)}">投訴人帳戶</button>`:''}${x.status!=='resolved'?`<button data-resolve="${esc(x.id)}">標記已處理</button>`:''}</div></article>`).join('')||empty('冇符合條件嘅投訴。')}${pager(r)}`
    wireList(ctx,'complaints',s);detailLinks(ctx)
    c.querySelectorAll('[data-resolve]').forEach(b=>b.onclick=()=>act(ctx,b,'標記呢單投訴為已處理？',()=>ctx.sb.from('complaints').update({status:'resolved'}).eq('id',b.dataset.resolve).neq('status','resolved').select('id').maybeSingle(),()=>ctx.route('complaints')))
  }catch(e){if(ctx.alive())showError(c,e,()=>ctx.route('complaints'))}
}
export async function renderReviews(ctx) {
  const s=states.reviews,c=ctx.container
  if(ctx.params.businessId!==undefined){s.businessId=ctx.params.businessId;s.page=1}
  try {
    const r=await ctx.data.reviews({...s,signal:ctx.signal});if(!ctx.alive()||clampPage(ctx,'reviews',s,r))return
    c.innerHTML=`${s.businessId?'<p class="notice">目前只顯示所選商家嘅評價。<button id="allReviews">查看全部商家</button></p>':''}<form class="toolbar">${searchField(s,'作者、評價內容、商家或完整 ID')}${pageSizeField(s)}${submit}</form>${pager(r)}${r.items.map(x=>`<article class="row"><h2>${esc(x.author_name||x.customer?.full_name||'匿名')} · ${esc(x.rating)} / 5</h2><p><button class="text-link" data-business="${esc(x.business_id)}">${esc(x.business?.name||'商家')}</button></p><p class="record-note">${esc(x.comment||'未有文字評價')}</p><p class="meta">${esc(fmtDate(x.created_at))} · ${x.is_hidden?'已隱藏':'公開'}</p>${x.is_hidden?`<p class="meta">隱藏原因：${esc(x.hidden_reason||'未填寫')}</p>`:''}${x.customer_id?`<div class="act"><button data-account="${esc(x.customer_id)}">客人帳戶</button></div>`:''}</article>`).join('')||empty('冇符合條件嘅評價。')}${pager(r)}`
    wireList(ctx,'reviews',s);detailLinks(ctx)
    const all=c.querySelector('#allReviews');if(all)all.onclick=()=>{s.businessId='';s.page=1;ctx.route('reviews')}
  }catch(e){if(ctx.alive())showError(c,e,()=>ctx.route('reviews'))}
}

export async function renderBusiness(ctx,id) {
  const c=ctx.container
  if(detail.id!==id)detail={id,tab:'services',page:1}
  try {
    const b=await ctx.data.business(id,{signal:ctx.signal});if(!ctx.alive())return
    if(!b){c.innerHTML='<button class="back-btn">返回商家</button>'+empty('搵唔到呢間商家，可能已移除或未獲授權。');c.querySelector('button').onclick=()=>ctx.route('businesses');return}
    c.innerHTML=`<button class="back-btn">← 返回商家列表</button><section class="detail-card"><h2>${esc(b.name)}</h2><p class="muted">${b.is_active?'營業中':'已停用'} · ${b.is_listed?'已上架':'未上架'}</p>${fieldGrid([{label:'商家 ID',value:b.id},{label:'類別',value:b.category},{label:'地址',value:b.address},{label:'電話',value:b.phone},{label:'國家',value:b.country},{label:'幣別',value:b.currency},{label:'時區',value:b.timezone},{label:'方案',value:b.subscription_plan},{label:'網頁預約',value:b.web_booking_enabled?'已開啟':'未開啟'},{label:'建立時間',value:fmtDate(b.created_at)},{label:'更新時間',value:fmtDate(b.updated_at)}])}<h3>商家簡介</h3><p class="record-note">${esc(b.description||'未填寫')}</p><div class="business-gallery">${imageLinks(b.images)}</div><div class="act">${b.owner_id?`<button data-account="${esc(b.owner_id)}">查看店主帳戶</button>`:''}<button id="bizBookings">全部預約</button><button id="bizReviews">全部評價</button></div></section><div class="section-tabs" aria-label="商家相關資料"><button data-section="services" class="${detail.tab==='services'?'active':''}">服務</button><button data-section="availability" class="${detail.tab==='availability'?'active':''}">每週開放時間</button></div><section id="businessRecords">${loading()}</section>`
    c.querySelector('.back-btn').onclick=()=>ctx.route('businesses');detailLinks(ctx)
    c.querySelector('#bizBookings').onclick=()=>ctx.route('bookings',{businessId:id});c.querySelector('#bizReviews').onclick=()=>ctx.route('reviews',{businessId:id})
    c.querySelectorAll('[data-section]').forEach(button=>button.onclick=()=>{if(!ctx.alive())return;detail.tab=button.dataset.section;detail.page=1;ctx.route('business',{id})})
    const records=c.querySelector('#businessRecords'), tab=detail.tab
    const load=async()=>{
      try {
        records.innerHTML=loading()
        const r=await ctx.data[tab]({businessId:id,page:detail.page,pageSize:25,signal:ctx.signal});if(!ctx.alive())return
        const last=Math.max(1,Math.ceil(r.total/25));if(detail.page>last){detail.page=last;return load()}
        records.innerHTML=pager(r)+(tab==='services'?r.items.map(x=>`<article class="row"><h3>${esc(x.name)}</h3><p class="meta">${x.is_active?'提供中':'已停用'} · ${esc(x.duration_minutes)} 分鐘 · ${esc(x.price_on_request?'需查詢價錢':money(x.price,b.currency))}${x.price_max!=null?` 至 ${esc(money(x.price_max,b.currency))}`:''}</p><p class="record-note">${esc(x.description||'未填服務簡介')}</p>${fieldGrid([{label:'預約方式',value:x.requires_confirmation?'需要商戶確認':'即時確認'},{label:'服務形式',value:x.booking_type},{label:'地點形式',value:x.location_type},{label:'單次人數上限',value:x.max_party_size??'未設定'},{label:'容量',value:x.max_capacity??'未設定'},{label:'緩衝時間',value:x.buffer_minutes==null?'未設定':`${x.buffer_minutes} 分鐘`},{label:'取消說明',value:x.cancellation_note}])}</article>`).join(''):r.items.map(x=>`<article class="row"><h3>${['星期日','星期一','星期二','星期三','星期四','星期五','星期六'][x.day_of_week]||'未設定'}</h3><p>${esc(x.start_time?.slice(0,5))} – ${esc(x.end_time?.slice(0,5))} · ${x.requires_confirmation?'需要確認':'可即時預約'}</p></article>`).join(''))+(r.items.length?'':empty(tab==='services'?'未有服務。':'未有每週開放時間。'))+pager(r)
        if(tab==='availability')records.insertAdjacentHTML('afterbegin',`<p class="muted">按商家時區 ${esc(b.timezone||'未設定')} 顯示；呢度係每週時間設定，個別封鎖日及預約佔用仍會影響實際可預約時段。</p>`)
        records.querySelectorAll('[data-page]').forEach(button=>button.onclick=()=>{if(!ctx.alive())return;detail.page=Number(button.dataset.page);ctx.route('business',{id})})
      }catch(e){if(ctx.alive())showError(records,e,load)}
    }
    await load()
  }catch(e){if(ctx.alive())showError(c,e,()=>ctx.route('business',{id}))}
}
