
const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const WA='601113219709';
function openWA(msg){window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,'_blank')}
function setMediaFallback(){
  $$('img[data-fallback], video[data-fallback]').forEach(el=>{
    const card=el.closest('.media-card,.gallery-tile');
    const fail=()=>{ if(card){card.classList.add('missing'); card.setAttribute('data-missing',el.dataset.fallback||'Add your Chamuel media file here.')} el.style.display='none'; };
    el.addEventListener('error',fail);
    if(el.tagName==='VIDEO') el.addEventListener('stalled',()=>{});
  })
}
function initNav(){ const b=$('.hamb'), n=$('.nav-links'); if(b&&n){b.addEventListener('click',()=>n.classList.toggle('open'));}}
function initFAQ(){ $$('.faq-q').forEach(q=>q.addEventListener('click',()=>q.closest('.faq-item').classList.toggle('open'))); }
function initInquiry(){
  const form=$('#inquiryForm'); if(!form) return;
  form.addEventListener('submit',e=>{e.preventDefault(); const d=new FormData(form); const msg=`Hi Chamuel & Co., I would like jewelry advice.%0A%0AOccasion: ${d.get('occasion')||'-'}%0ABudget: RM ${d.get('budget')||'-'}%0AMaterial preference: ${d.get('metal')||'-'}%0ADiamond/Gemstone: ${d.get('stone')||'-'}%0ATimeline: ${d.get('timeline')||'-'}%0AReference / Notes: ${d.get('notes')||'-'}%0A%0APlease advise me before quoting.`.replace(/%0A/g,'\n'); $('#inquiryResult').textContent=msg; openWA(msg); });
}
function initBudget(){
  const budget=$('#budgetAmount'), occasion=$('#budgetOccasion'), out=$('#budgetResult'), btn=$('#budgetBtn'); if(!btn) return;
  if(budget){
    budget.setAttribute('min','300');
    budget.setAttribute('step','50');
  }
  btn.addEventListener('click',()=>{
    const b=Number(budget.value||0), o=occasion.value;
    let rec='';
    if(!b || b<300){
      rec='Minimum recommendation starts from RM300 and above. For budgets below RM300, please WhatsApp us directly to check ready-stock availability.';
    }else if(b<1500){
      rec='Best direction: Silver jewelry or silver custom piece. Suitable for simple proposal-style designs, daily wear, gift jewelry or entry-level couple rings.';
    }else if(b<2000){
      rec='Best direction: 9K gold. Suitable for simple gold rings, minimal couple rings, small custom pieces or classic daily-wear jewelry.';
    }else if(b<2800){
      rec='Best direction: 14K gold. Suitable for better durability, cleaner finishing, custom rings and more balanced long-term daily wear.';
    }else if(b<4000){
      rec='Best direction: 18K gold. Suitable for premium custom rings, proposal pieces, wedding bands and higher-end fine jewelry direction.';
    }else{
      rec='Best direction: 18K gold with stronger diamond options, lab-grown diamond upgrade, premium custom design or platinum discussion depending on design.';
    }
    const msg=`Budget: RM ${b||'-'}\nOccasion: ${o}\n${rec}\n\nNext step: Send us your reference photo, ring size if available, preferred material and collection date.`;
    out.textContent=msg;
  });
}
function initTabs(){
  $$('.tab').forEach(t=>t.addEventListener('click',()=>{ const group=t.parentElement; $$('.tab',group).forEach(x=>x.classList.remove('active')); t.classList.add('active'); const target=t.dataset.tab; $$('.tab-panel').forEach(p=>p.style.display=p.id===target?'block':'none'); }));
}

function initActiveNav(){
  const current=(location.pathname.split('/').pop()||'index.html');
  $$('.nav-main-links a').forEach(a=>{ if(a.getAttribute('href')===current) a.classList.add('active'); });
}
function initCloseMenuOnClick(){
  const n=$('.nav-links');
  $$('.nav-links a').forEach(a=>a.addEventListener('click',()=>{ if(n) n.classList.remove('open'); }));
}

document.addEventListener('DOMContentLoaded',()=>{initNav();initFAQ();initInquiry();initBudget();initTabs();setMediaFallback(); initActiveNav(); initCloseMenuOnClick(); const y=$('#year'); if(y)y.textContent=new Date().getFullYear();});



const CHAMUEL_SETTING_LIBRARY = {
  heritage:{name:'Heritage',code:'CC-H001',series:'Heritage Solitaire Series',type:'Classic Solitaire',scores:{Sparkle:4,Maintenance:5,Durability:5,'Daily Wear':5,'Cleaning Ease':5,Resizing:5,'Budget Efficiency':5}},"aurora": {"name": "Aurora", "code": "CC-A001", "series": "Angelic Halo Series", "type": "Hidden Halo Solitaire", "scores": {"Sparkle": 5, "Maintenance": 3, "Durability": 4, "Daily Wear": 5, "Cleaning Ease": 3, "Resizing": 4, "Budget Efficiency": 4}}, "harmony": {"name": "Harmony", "code": "CC-HH001", "series": "Angelic Halo Series", "type": "Pavé Hidden Halo", "scores": {"Sparkle": 5, "Maintenance": 2, "Durability": 3, "Daily Wear": 3, "Cleaning Ease": 2, "Resizing": 3, "Budget Efficiency": 3}}, "celeste": {"name": "Celeste", "code": "CC-C001", "series": "Cathedral Grace Series", "type": "Cathedral Solitaire", "scores": {"Sparkle": 4, "Maintenance": 4, "Durability": 5, "Daily Wear": 5, "Cleaning Ease": 4, "Resizing": 4, "Budget Efficiency": 4}}, "nova": {"name": "Nova", "code": "CC-N001", "series": "Minimal Light Series", "type": "Minimal Solitaire", "scores": {"Sparkle": 3, "Maintenance": 5, "Durability": 5, "Daily Wear": 5, "Cleaning Ease": 5, "Resizing": 5, "Budget Efficiency": 5}}, "cathedralOne": {"name": "Cathedral One", "code": "CC-CO001", "series": "Cathedral Grace Series", "type": "Six-Prong Cathedral", "scores": {"Sparkle": 4, "Maintenance": 4, "Durability": 5, "Daily Wear": 5, "Cleaning Ease": 4, "Resizing": 4, "Budget Efficiency": 4}}, "seraphina": {"name": "Seraphina", "code": "CC-S001", "series": "Pavé Light Series", "type": "Petite Pavé Solitaire", "scores": {"Sparkle": 5, "Maintenance": 2, "Durability": 3, "Daily Wear": 3, "Cleaning Ease": 2, "Resizing": 3, "Budget Efficiency": 3}}, "elyon": {"name": "Elyon", "code": "CC-E001", "series": "Guardian Bezel Series", "type": "Bezel Solitaire", "scores": {"Sparkle": 3, "Maintenance": 5, "Durability": 5, "Daily Wear": 5, "Cleaning Ease": 5, "Resizing": 3, "Budget Efficiency": 4}}, "luna": {"name": "Luna", "code": "CC-L001", "series": "Modern Orbit Series", "type": "East-West Oval", "scores": {"Sparkle": 4, "Maintenance": 4, "Durability": 4, "Daily Wear": 4, "Cleaning Ease": 4, "Resizing": 4, "Budget Efficiency": 4}}, "aurelia": {"name": "Aurelia", "code": "CC-AU001", "series": "Legacy Three-Stone Series", "type": "Three-Stone Setting", "scores": {"Sparkle": 5, "Maintenance": 3, "Durability": 4, "Daily Wear": 3, "Cleaning Ease": 3, "Resizing": 3, "Budget Efficiency": 2}}, "vesper": {"name": "Vesper", "code": "CC-V001", "series": "Vintage Romance Series", "type": "Vintage-Inspired Halo", "scores": {"Sparkle": 5, "Maintenance": 2, "Durability": 3, "Daily Wear": 3, "Cleaning Ease": 2, "Resizing": 2, "Budget Efficiency": 3}}, "elara": {"name": "Elara", "code": "CC-EL001", "series": "Architectural Split Series", "type": "Split Shank", "scores": {"Sparkle": 4, "Maintenance": 3, "Durability": 4, "Daily Wear": 4, "Cleaning Ease": 3, "Resizing": 3, "Budget Efficiency": 3}}, "mira": {"name": "Mira", "code": "CC-M001", "series": "Modern Orbit Series", "type": "Tension-Inspired Modern Setting", "scores": {"Sparkle": 4, "Maintenance": 3, "Durability": 3, "Daily Wear": 3, "Cleaning Ease": 3, "Resizing": 2, "Budget Efficiency": 3}}};
function chamuelStars(n){return '🌟'.repeat(n)+'☆'.repeat(5-n);}
function chamuelSettingScoreText(setting){return Object.entries(setting.scores).map(([k,v])=>`${k}: ${chamuelStars(v)}`).join('
');}
: ${chamuelStars(v)}`).join('\n');
}


/* Chamuel & Co. AI Engagement Ring Advisor
   To connect Google Sheet backend:
   1) Open GOOGLE_SHEET_APPS_SCRIPT_SETUP.txt in this website package.
   2) Deploy the Apps Script as a Web App.
   3) Paste the Web App URL below.
*/
const CHAMUEL_LEAD_WEB_APP_URL = "";

function initEngagementAdvisor(){
  const form=document.getElementById('engagementAdvisorForm');
  if(!form) return;

  const steps=[...form.querySelectorAll('.form-step')];
  const next=document.getElementById('advisorNext');
  const prev=document.getElementById('advisorPrev');
  const submit=document.getElementById('advisorSubmit');
  const bar=document.getElementById('advisorProgressBar');
  let current=0;

  function showStep(i){
    current=Math.max(0,Math.min(i,steps.length-1));
    steps.forEach((s,idx)=>s.classList.toggle('active',idx===current));
    if(prev) prev.style.display=current===0?'none':'inline-flex';
    if(next) next.style.display=current===steps.length-1?'none':'inline-flex';
    if(submit) submit.style.display=current===steps.length-1?'inline-flex':'none';
    if(bar) bar.style.width=((current+1)/steps.length*100)+'%';
  }

  function validateStep(){
    const active=steps[current];
    const required=[...active.querySelectorAll('[required]')];
    for(const field of required){
      if(field.type==='radio'){
        const checked=active.querySelector(`input[name="${field.name}"]:checked`);
        if(!checked){ active.classList.add('shake'); setTimeout(()=>active.classList.remove('shake'),350); return false; }
      }else if(!field.value.trim()){
        field.focus();
        active.classList.add('shake'); setTimeout(()=>active.classList.remove('shake'),350);
        return false;
      }
    }
    return true;
  }

  function getData(){
    const d=new FormData(form);
    return {
      timestamp:new Date().toISOString(),
      name:d.get('name')||'',
      phone:d.get('phone')||'',
      story:d.get('story')||'',
      timeline:d.get('timeline')||'',
      budget:d.get('budget')||'',
      lifestyle:d.get('lifestyle')||'',
      priority:d.get('priority')||''
    };
  }

  function recommend(data){
    const b=data.budget;
    const lifestyle=data.lifestyle;
    const priority=data.priority;
    const timeline=data.timeline;

    let settingObj=CHAMUEL_SETTING_LIBRARY.heritage;
    let setting='Heritage (CC-H001) — Classic Solitaire';
    let diamond='Moissanite or selected entry diamond direction';
    let material='Silver, 9K Gold, 14K Gold, 18K Gold or Platinum depending on budget and final design';
    let width='1.6mm–1.8mm elegant band';
    let warranty='One-Year Manufacturing Warranty with basic workmanship coverage';
    let afterSales='Lifetime cleaning & polishing, plus prong tightening inspection';
    let allocation='50% centre stone / 30% material & setting / 20% craftsmanship & after-sales';

    if(priority==='Strongest Ring' || lifestyle==='Active' || lifestyle==='Wear everyday'){
      settingObj=(priority==='Strongest Ring'||lifestyle==='Active')?CHAMUEL_SETTING_LIBRARY.elyon:CHAMUEL_SETTING_LIBRARY.cathedralOne;
      setting=`${settingObj.name} (${settingObj.code}) — ${settingObj.type}`;
      width='1.8mm–2.2mm stronger daily-wear band';
      allocation='40% centre stone / 40% stronger setting & material / 20% craftsmanship & after-sales';
      afterSales='Prong inspection every 6 months, lifetime cleaning & polishing, daily-wear care guidance';
    }

    if(priority==='Biggest Diamond'){
      settingObj=CHAMUEL_SETTING_LIBRARY.aurora;
      setting=`${settingObj.name} (${settingObj.code}) — ${settingObj.type}`;
      diamond='Moissanite or lab-grown diamond for better visual size within budget';
      allocation='60% centre stone / 25% material & setting / 15% craftsmanship & after-sales';
    }

    if(priority==='Sparkle'){
      settingObj=CHAMUEL_SETTING_LIBRARY.harmony;
      setting=`${settingObj.name} (${settingObj.code}) — ${settingObj.type}`;
      diamond='Lab-grown diamond or moissanite depending on sparkle style and budget';
      allocation='55% centre stone & side stones / 25% material & setting / 20% craftsmanship & after-sales';
      afterSales='Lifetime cleaning & polishing, prong inspection, extra care guidance for side diamonds';
    }

    if(priority==='Budget'){
      settingObj=CHAMUEL_SETTING_LIBRARY.heritage;
      setting=`${settingObj.name} (${settingObj.code}) — ${settingObj.type}`;
      allocation='45% centre stone / 35% material & setting / 20% craftsmanship & after-sales';
    }

    if(priority==='Premium Material'){
      settingObj=CHAMUEL_SETTING_LIBRARY.celeste;
      setting=`${settingObj.name} (${settingObj.code}) — ${settingObj.type}`;
      material='18K gold or platinum discussion depending on budget and design';
      allocation='45% centre stone / 40% premium material & setting / 15% craftsmanship & after-sales';
    }

    if(b==='RM1000'){
      diamond='Moissanite or silver symbolic proposal direction';
      material='Silver direction recommended. 9K Gold only if the design is very simple and feasibility is confirmed';
      settingObj=CHAMUEL_SETTING_LIBRARY.nova;
      setting=`${settingObj.name} (${settingObj.code}) — ${settingObj.type}`;
      width='1.5mm–1.8mm depending on material and ring size';
      allocation='35% stone / 45% material & making / 20% finishing & after-sales';
    }else if(b==='RM3000'){
      diamond='Moissanite with gold setting, or selected lab-grown diamond starter direction';
      material='18K gold direction can be explored for simple design; 14K gold if prioritising stronger budget control';
      width=(lifestyle==='Active'||lifestyle==='Wear everyday')?'1.8mm–2.1mm':'1.6mm–1.9mm';
    }else if(b==='RM5000'){
      diamond='Lab-grown diamond recommended; moissanite only if the priority is maximum visual size';
      material='18K gold recommended for premium engagement ring direction';
      width=(lifestyle==='Active'||lifestyle==='Wear everyday')?'1.9mm–2.2mm':'1.7mm–2.0mm';
      allocation='55% diamond / 30% 18K gold setting / 15% craftsmanship & after-sales';
    }else if(b==='RM10000+'){
      diamond='Premium lab-grown diamond or natural diamond comparison recommended';
      material='18K gold or platinum recommended';
      width=(lifestyle==='Active'||lifestyle==='Wear everyday')?'2.0mm–2.3mm':'1.8mm–2.1mm';
      warranty='One-Year Manufacturing Warranty, premium inspection before collection, and long-term care support';
      allocation='60% diamond / 25% premium material & setting / 15% craftsmanship & after-sales';
    }

    let timelineAdvice='Normal custom production planning is recommended.';
    if(timeline==='Within 2 weeks'){
      timelineAdvice='Urgent timeline: choose simpler setting, available stone options, and avoid complicated custom changes.';
    }else if(timeline==='1 month'){
      timelineAdvice='Comfortable timeline: custom design and proper stone selection can be planned more safely.';
    }else if(timeline==='3 months'){
      timelineAdvice='Best timeline: more time to compare diamond type, refine design and prepare proposal details.';
    }

    return {
      "Suitable Setting":setting,
      "Setting Series":settingObj.series,
      "Setting Score":chamuelSettingScoreText(settingObj),
      "Suitable Diamond":diamond,
      "Suitable Material":material,
      "Suitable Width":width,
      "Suitable Warranty":warranty,
      "Suitable After Sales":afterSales,
      "Suitable Budget Allocation":allocation,
      "Timeline Advice":timelineAdvice
    };
  }

  function renderResult(data, rec){
    const box=document.getElementById('advisorRecommendation');
    const resultSection=document.getElementById('advisorResultSection');
    if(!box || !resultSection) return;

    box.innerHTML=Object.entries(rec).map(([k,v])=>`
      <article class="recommendation-card">
        <span>${k}</span>
        <h3>${v}</h3>
      </article>
    `).join('');

    const summary=[
      `Chamuel & Co. AI Engagement Ring Advisor`,
      ``,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Story: ${data.story || '-'}`,
      `Proposal timeline: ${data.timeline}`,
      `Budget: ${data.budget}`,
      `Lifestyle: ${data.lifestyle}`,
      `Priority: ${data.priority}`,
      ``,
      `Recommendation:`,
      ...Object.entries(rec).map(([k,v])=>`${k}: ${v}`)
    ].join('\n');

    const wa=document.getElementById('advisorWhatsapp');
    if(wa) wa.href=`https://wa.me/601113219709?text=${encodeURIComponent(summary)}`;

    resultSection.style.display='block';
    resultSection.scrollIntoView({behavior:'smooth',block:'start'});
  }

  async function sendLead(data, rec){
    const payload={...data, recommendations:rec, source:'Engagement Ring AI Advisor'};
    if(!CHAMUEL_LEAD_WEB_APP_URL){
      return {status:'not_connected'};
    }
    try{
      await fetch(CHAMUEL_LEAD_WEB_APP_URL,{
        method:'POST',
        mode:'no-cors',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload)
      });
      return {status:'sent'};
    }catch(e){
      console.warn('Lead submit failed',e);
      return {status:'failed'};
    }
  }

  next?.addEventListener('click',()=>{ if(validateStep()) showStep(current+1); });
  prev?.addEventListener('click',()=>showStep(current-1));
  form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    if(!validateStep()) return;
    const data=getData();
    const rec=recommend(data);
    renderResult(data,rec);
    await sendLead(data,rec);
  });

  showStep(0);
}

document.addEventListener('DOMContentLoaded', initEngagementAdvisor);

/* Soft image protection: lowers casual downloading only, not 100% protection */
document.addEventListener('contextmenu', function(e){
  if(e.target && (e.target.tagName==='IMG' || e.target.tagName==='VIDEO')) e.preventDefault();
});
document.addEventListener('dragstart', function(e){
  if(e.target && (e.target.tagName==='IMG' || e.target.tagName==='VIDEO')) e.preventDefault();
});


// 3D Ring Builder Malaysia
(function(){
  function initRingBuilder(){
    const btn = document.getElementById('ringBuilderBtn');
    const form = document.getElementById('ringBuilderForm');
    const result = document.getElementById('ringBuilderResult');
    if(!btn || !form || !result) return;

    function val(name){ return form.querySelector(`[name="${name}"]`)?.value || ''; }

    btn.addEventListener('click', function(){
      const occasion = val('occasion');
      const shape = val('shape');
      const setting = val('setting');
      const materialPrice = val('material_price');
      const stone = val('stone');
      const timeline = val('timeline');

      let settingAdvice = setting;
      if(setting === 'Not Sure Yet'){
        settingAdvice = occasion === 'Wedding Band' ? 'Classic comfort band direction' : 'Heritage Solitaire / simple prong setting';
      }



      let timelineAdvice = timeline === 'Within 2 weeks'
        ? 'This is urgent. Please contact us early so we can check whether the design is possible within the timeline.'
        : 'Normal customisation usually needs design confirmation before production timeline can be advised.';

      const message =
`Hi Chamuel & Co.%0A%0AI would like to build my ring direction:%0AOccasion: ${encodeURIComponent(occasion)}%0ADiamond Shape: ${encodeURIComponent(shape)}%0ASetting Style: ${encodeURIComponent(setting)}%0AMaterial %26 Price Range: ${encodeURIComponent(materialPrice)}%0AStone Type: ${encodeURIComponent(stone)}%0ATimeline: ${encodeURIComponent(timeline)}`;

      result.innerHTML = `
        <div class="kicker">Recommended Direction</div>
        <h3>${shape} ${settingAdvice}</h3>
        <div class="builder-result-grid">
          <div><span>Occasion</span><strong>${occasion}</strong></div>
          <div><span>Stone Direction</span><strong>${stone}</strong></div>
          <div><span>Material & Price Range</span><strong>${materialPrice}</strong></div>
          <div><span>Timeline</span><strong>${timelineAdvice}</strong></div>
        </div>
        <p class="result-note">This is an early design direction. Final quotation depends on actual diamond size, ring size, material weight, setting structure and production details.</p>
        <a class="btn btn-gold" target="_blank" rel="noopener" href="https://wa.me/601113219709?text=${message}">Send to Advisor</a>
      `;
    });
  }
  document.addEventListener('DOMContentLoaded', initRingBuilder);
})();
