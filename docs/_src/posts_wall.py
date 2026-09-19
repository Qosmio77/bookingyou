# 首頁「貼文牆」：由 /posts/manifest.json 隨機揀 9 張曾經出過嘅 post。
# 圖同清單由 BOOKINGYOU-TEMP 已發佈嘅貼文／宣傳圖匯出（見 /posts/README.md），
# App 首頁讀同一份清單，所以加減 post 只要更新網站。

POSTS_COPY = {
    'zh-HK': dict(chip='貼文', h2='我哋出過嘅貼文', lead='BookingYou 喺各地社交平台出過嘅貼文，每次隨機揀幾張。', more='換一批', close='關閉'),
    'en':    dict(chip='Posts', h2='From our feed', lead='Posts BookingYou has shared around the world, picked at random each visit.', more='Show others', close='Close'),
    'zh-CN': dict(chip='贴文', h2='我们发过的贴文', lead='BookingYou 在各地社交平台发过的贴文，每次随机挑几张。', more='换一批', close='关闭'),
    'ja':    dict(chip='投稿', h2='これまでの投稿', lead='BookingYou が各地の SNS で発信してきた投稿から、毎回ランダムに表示しています。', more='ほかの投稿を見る', close='閉じる'),
    'ko':    dict(chip='게시물', h2='지금까지의 게시물', lead='BookingYou가 여러 나라 SNS에 올린 게시물을 매번 무작위로 보여 드립니다.', more='다른 게시물 보기', close='닫기'),
    'ms':    dict(chip='Hantaran', h2='Hantaran kami', lead='Hantaran BookingYou di media sosial serata dunia, dipilih secara rawak setiap kali.', more='Lihat yang lain', close='Tutup'),
    'th':    dict(chip='โพสต์', h2='โพสต์ของเรา', lead='โพสต์ที่ BookingYou เคยลงในโซเชียลหลายประเทศ สุ่มแสดงทุกครั้งที่เข้าชม', more='ดูโพสต์อื่น', close='ปิด'),
    'vi':    dict(chip='Bài đăng', h2='Các bài đăng của chúng tôi', lead='Những bài BookingYou đã đăng trên mạng xã hội ở nhiều nước, chọn ngẫu nhiên mỗi lần xem.', more='Xem bài khác', close='Đóng'),
}

POSTS_CSS = """
  .pw-grid{columns:3 240px;column-gap:16px;margin-top:28px;min-height:120px}
  .pw-grid button{display:block;width:100%;margin:0 0 16px;padding:0;border:0;background:var(--pale);border-radius:16px;overflow:hidden;cursor:zoom-in;break-inside:avoid;box-shadow:0 10px 26px rgba(27,67,89,.10);transition:transform .25s ease,box-shadow .25s ease}
  .pw-grid button:hover{transform:translateY(-3px);box-shadow:0 16px 34px rgba(27,67,89,.16)}
  .pw-grid img{display:block;width:100%;height:auto}
  .pw-more{margin-top:8px;text-align:center}
  .pw-box{position:fixed;inset:0;z-index:80;display:none;align-items:center;justify-content:center;background:rgba(6,16,28,.86);padding:20px}
  .pw-box.on{display:flex}
  .pw-box img{max-width:min(92vw,720px);max-height:88vh;border-radius:14px;box-shadow:0 24px 60px rgba(0,0,0,.4)}
  .pw-box button{position:absolute;top:16px;right:16px;width:44px;height:44px;border-radius:22px;border:0;background:rgba(255,255,255,.16);color:#fff;font-size:26px;line-height:44px;cursor:pointer}
  @media(max-width:640px){.pw-grid{columns:2 150px;column-gap:10px}.pw-grid button{margin-bottom:10px;border-radius:12px}}
  @media(prefers-reduced-motion:reduce){.pw-grid button{transition:none}}
"""

def posts_markup(c):
    esc = lambda s: s.replace('&', '&amp;').replace('<', '&lt;').replace('"', '&quot;')
    return f"""<section id="posts">
  <div class="wrap">
    <span class="chip">{esc(c['chip'])}</span>
    <h2 style="margin-top:14px">{esc(c['h2'])}</h2>
    <p class="lead">{esc(c['lead'])}</p>
    <div class="pw-grid" id="pwGrid"></div>
    <div class="pw-more"><button type="button" class="btn btn-ghost" id="pwMore">{esc(c['more'])}</button></div>
  </div>
  <div class="pw-box" id="pwBox" role="dialog" aria-modal="true"><img id="pwImg" alt=""><button type="button" id="pwClose" aria-label="{esc(c['close'])}">×</button></div>
</section>
<script>
(function(){{
  var grid=document.getElementById('pwGrid'),box=document.getElementById('pwBox'),big=document.getElementById('pwImg'),SHOW=9,all=[],base='/posts/';
  function shuffle(a){{for(var i=a.length-1;i>0;i--){{var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}}return a;}}
  function draw(){{
    grid.innerHTML='';
    shuffle(all.slice()).slice(0,SHOW).forEach(function(p){{
      var b=document.createElement('button');b.type='button';
      var im=document.createElement('img');im.loading='lazy';im.alt='BookingYou post';im.src=base+'t/'+p.id+'.jpg';
      im.width=480;im.height=Math.round(480*p.h/p.w);
      b.appendChild(im);b.onclick=function(){{big.src=base+p.id+'.jpg';box.classList.add('on');}};
      grid.appendChild(b);
    }});
  }}
  function close(){{box.classList.remove('on');big.removeAttribute('src');}}
  box.onclick=function(e){{if(e.target!==big)close();}};
  document.addEventListener('keydown',function(e){{if(e.key==='Escape')close();}});
  document.getElementById('pwMore').onclick=draw;
  fetch(base+'manifest.json').then(function(r){{return r.json();}}).then(function(m){{all=m.posts||[];if(all.length)draw();else document.getElementById('posts').style.display='none';}})
    .catch(function(){{document.getElementById('posts').style.display='none';}});
}})();
</script>
"""
