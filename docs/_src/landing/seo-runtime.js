// Locale URLs are also served as complete static HTML for crawlers and no-JS users.
(() => {
 const config=__SEO_CONFIG__,translations=__SEO_TRANSLATIONS__;
 const rendered=document.documentElement.lang==='ja'?'ja':'zh';
 for(const lang of ['zh','ja'])Object.assign(copy[lang],translations[lang]);
 const previous=setLanguage;
 setLanguage=function(lang){
  lang=lang==='ja'?'ja':'zh';
  if(lang!==rendered){location.assign('/'+config[lang].path+location.hash);return;}
  previous(lang);
  const preview=document.documentElement.dataset.seoMode!=='release';
  document.title=config[lang].title+(preview?(lang==='ja'?' · デザインプレビュー':' · 設計預覽'):'');
 };
 setLanguage(rendered);
})();
