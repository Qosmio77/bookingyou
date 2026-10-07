// Locale URLs are also served as complete static HTML for crawlers and no-JS users.
(() => {
 const config=__SEO_CONFIG__,translations=__SEO_TRANSLATIONS__;
 const locales={zh:{path:'',language:'zh-Hant'},en:{path:'en/',language:'en'},'zh-CN':{path:'zh-cn/',language:'zh-Hans'},ja:{path:'ja/',language:'ja'},ko:{path:'ko/',language:'ko'},ms:{path:'ms/',language:'ms'},th:{path:'th/',language:'th'},vi:{path:'vi/',language:'vi'}};
 const rendered=document.documentElement.dataset.locale || (document.documentElement.lang==='ja'?'ja':'zh');
 const internal=rendered==='ja'?'ja':'zh';
 for(const lang of ['zh','ja'])Object.assign(copy[lang],translations[lang]);
 const previous=setLanguage;
 setLanguage=function(lang){
  if(!locales[lang])lang=rendered;
  if(lang!==rendered){location.assign('/'+locales[lang].path+location.hash);return;}
  previous(internal);
  document.documentElement.lang=locales[rendered].language;
  document.getElementById('language').value=rendered;
  document.querySelector('[data-page]').href='/'+locales[rendered].path+'about/';
  const preview=document.documentElement.dataset.seoMode!=='release';
  document.title=config[internal].title+(preview?(internal==='ja'?' · デザインプレビュー':' · 設計預覽'):'');
 };
 setLanguage(rendered);
})();

// Separate enter/exit thresholds avoid flicker as the sticky header changes height.
(() => {
 const root=document.documentElement;
 let compact=false,scheduled=false;
 const update=()=>{
  scheduled=false;
  const next=compact ? window.scrollY>24 : window.scrollY>96;
  if(next===compact)return;
  compact=next;
  root.classList.toggle('has-compact-header',compact);
 };
 window.addEventListener('scroll',()=>{
  if(!scheduled){scheduled=true;requestAnimationFrame(update);}
 },{passive:true});
 window.addEventListener('pageshow',update);
 update();
})();
