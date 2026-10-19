/* Render only social assets. No website styles or page photography are changed.
   Requires Playwright; GAIA_PLAYWRIGHT_MODULE and GAIA_CHROME_PATH can point to
   an existing installation without adding a website runtime dependency. */
const fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.GAIA_PLAYWRIGHT_MODULE||'playwright');
const root=path.resolve(__dirname,'../..'),output=path.join(root,'public/images/og');
const data=(file,type)=>`data:${type};base64,${fs.readFileSync(path.join(root,file)).toString('base64')}`;
const fonts={display:data('node_modules/@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2','font/woff2'),sans:data('public/fonts/InstrumentSans-Latin-Variable.woff2','font/woff2'),signature:data('public/fonts/Italianno-Latin-Regular.woff2','font/woff2')};
const designs=[
 {key:'home-fr',kind:'home',text:'Se reconnecter<br>à ce qui a toujours<br>été là.',photo:'portrait-1200.webp',position:'50% 43%',title:'Se reconnecter à ce qui a toujours été là.'},
 {key:'home-en',kind:'home',text:'Reconnect with<br>what has always<br>been there.',photo:'portrait-1200.webp',position:'50% 43%',title:'Reconnect with what has always been there.'},
 {key:'acupuncture-fr',text:'Acupuncture<br>traditionnelle',photo:'acupuncture-1200.webp',position:'50% 55%',title:'Acupuncture traditionnelle'},
 {key:'acupuncture-en',text:'Traditional<br>Acupuncture',photo:'acupuncture-1200.webp',position:'50% 55%',title:'Traditional Acupuncture'},
 {key:'aculift',text:'Aculift',photo:'about-portrait-1200.webp',position:'50% 35%',surface:'#F8BCCA',kind:'single',title:'Aculift'},
 {key:'pranic-healing',text:'Pranic<br>Healing',photo:'pranic-meditation-1000.webp',position:'50% 62%',surface:'#D599FB',title:'Pranic Healing'},
 {key:'womens-health-fr',text:'Santé<br>féminine',photo:'softness-1200.webp',position:'35% 50%',surface:'#F8BCCA',title:'Santé féminine'},
 {key:'womens-health-en',text:'Women’s<br>Health',photo:'softness-1200.webp',position:'35% 50%',surface:'#F8BCCA',title:'Women’s Health'},
 {key:'about-fr',text:'Lauriane',label:'À propos',photo:'journal-hero-1200.webp',position:'58% 40%',zoom:1.12,kind:'single',title:'Lauriane — À propos'},
 {key:'about-en',text:'Lauriane',label:'About',photo:'journal-hero-1200.webp',position:'58% 40%',zoom:1.12,kind:'single',title:'Lauriane — About'},
 {key:'booking-fr',text:'Prendre<br>rendez-vous',kind:'booking',title:'Prendre rendez-vous'},
 {key:'booking-en',text:'Book an<br>appointment',kind:'booking',title:'Book an appointment'},
 {key:'links',kind:'links',photo:'lauriane-links.webp',position:'50% 38%',title:'GAIA by Lauriane',secondary:'Reconnexion · Acupuncture · Énergie · Féminin'}
];
const html=d=>`<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'Fraunces Variable';src:url('${fonts.display}');font-weight:100 900}
@font-face{font-family:'Instrument Sans';src:url('${fonts.sans}');font-weight:100 900}
@font-face{font-family:'GAIA Signature';src:url('${fonts.signature}');font-weight:400}
*{box-sizing:border-box}html,body{margin:0;width:1200px;height:630px;overflow:hidden;background:${d.surface||'#FFF4C7'};color:#5E1AF4}
.composition{position:relative;width:1200px;height:630px;display:grid;grid-template-columns:650px 550px}
.editorial{position:relative;padding:76px 64px 64px 72px;min-width:0}
.brand{display:inline-flex;flex-direction:column;align-items:center}
.brand-name{font:900 84px/.83 'Fraunces Variable';font-variation-settings:'wght' 900,'SOFT' 100,'WONK' 1;letter-spacing:-.095em}
.byline{font:400 32px/1 'GAIA Signature';color:#FF6230;margin-top:9px;letter-spacing:0}
h1{position:absolute;left:72px;right:44px;top:270px;margin:0;font:700 76px/1.1 'Fraunces Variable';font-variation-settings:'wght' 700,'SOFT' 70,'WONK' 1;letter-spacing:-.045em}
.photo{height:630px;overflow:hidden}.photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:${d.position||'50% 50%'};${d.zoom?`transform:scale(${d.zoom});`:''}}
.label{position:absolute;top:238px;left:76px;margin:0;font:500 22px/1.4 'Instrument Sans';letter-spacing:.07em;text-transform:uppercase}
.home .brand-name{font-size:128px}.home .byline{font-size:44px}.home h1{font-size:56px;top:294px;right:40px}
.single h1{font-size:104px;top:298px;letter-spacing:-.05em}
.links .brand{position:absolute;left:72px;top:168px}.links .brand-name{font-size:156px}.links .byline{font-size:52px;margin-top:16px}
.links .secondary{position:absolute;left:76px;right:52px;top:410px;margin:0;font:500 26px/1.5 'Instrument Sans';letter-spacing:0}
.booking{background:#5E1AF4;color:#FFF4C7;display:block}.booking .editorial{height:630px}.booking h1{font-size:96px;top:248px;right:72px;line-height:1.08}
.booking .accent{position:absolute;width:22px;height:22px;border-radius:50%;background:#FF6230;right:76px;bottom:76px}
</style></head><body><main class="composition ${d.kind||''}"><div class="editorial"><div class="brand" aria-label="GAIA by Lauriane"><span class="brand-name">Gaia</span><span class="byline">by Lauriane</span></div>${d.label?`<p class="label">${d.label}</p>`:''}${d.kind==='links'?`<p class="secondary">${d.secondary}</p>`:`<h1>${d.text}</h1>`}${d.kind==='booking'?'<span class="accent" aria-hidden="true"></span>':''}</div>${d.photo?`<div class="photo"><img src="${data('public/images/'+d.photo,'image/webp')}" alt=""></div>`:''}</main></body></html>`;
(async()=>{fs.mkdirSync(output,{recursive:true});const b=await chromium.launch({headless:true,...(process.env.GAIA_CHROME_PATH?{executablePath:process.env.GAIA_CHROME_PATH}:{})}),p=await b.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1});let report=[];try{for(const d of designs){await p.setContent(html(d));await p.evaluate(()=>document.fonts.ready);await p.evaluate(async()=>{for(const im of document.images)await im.decode()});const checks=await p.evaluate(()=>{const area=document.querySelector('.editorial').getBoundingClientRect();let errors=[];for(const e of document.querySelectorAll('h1,.brand-name,.byline,.label,.secondary')){const walker=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let n;n=walker.nextNode();){const range=document.createRange();range.selectNodeContents(n);for(const r of range.getClientRects())if(r.left<58||r.right>area.right-28||r.top<45||r.bottom>585)errors.push({text:n.textContent,rect:[r.x,r.y,r.width,r.height]})}}return errors});if(checks.length)throw new Error(d.key+' unsafe text '+JSON.stringify(checks));const file=d.key+'-v1.jpg';await p.screenshot({path:path.join(output,file),type:'jpeg',quality:90});report.push({...d,file,width:1200,height:630,bytes:fs.statSync(path.join(output,file)).size});console.log(file,report.at(-1).bytes)}}finally{await b.close()}if(process.env.GAIA_OG_REPORT)fs.writeFileSync(process.env.GAIA_OG_REPORT,JSON.stringify(report,null,2))})();
