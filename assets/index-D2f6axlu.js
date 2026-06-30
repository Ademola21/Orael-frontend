(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const cn=10042024;var Ua;const Xe=(Ua=window.Telegram)==null?void 0:Ua.WebApp,un=typeof(Xe==null?void 0:Xe.initData)=="string"&&Xe.initData.length>0;if(!un){const e={id:cn,first_name:"Ademola",last_name:"O.",username:"ademola21",photo_url:"",language_code:"en"},t=()=>{},n={initData:`dev=1&user=${encodeURIComponent(JSON.stringify(e))}`,initDataUnsafe:{user:e,start_param:""},version:"8.0",platform:"web",colorScheme:"dark",themeParams:{},viewportHeight:window.innerHeight,viewportStableHeight:window.innerHeight,isExpanded:!0,safeAreaInset:{top:0,bottom:0,left:0,right:0},contentSafeAreaInset:{top:0,bottom:0,left:0,right:0},headerColor:"#0b0f1a",backgroundColor:"#0b0f1a",ready:t,expand:t,close:t,enableClosingConfirmation:t,disableClosingConfirmation:t,setHeaderColor:t,setBackgroundColor:t,disableVerticalSwipes:t,enableVerticalSwipes:t,openInvoice:(s,o)=>{console.log("[devmock] openInvoice simulated success:",s),setTimeout(()=>o&&o("paid"),900)},openTelegramLink:s=>window.open(s,"_blank"),openLink:s=>window.open(s,"_blank"),HapticFeedback:{impactOccurred:t,notificationOccurred:t,selectionChanged:t},BackButton:{show:t,hide:t,onClick:t,offClick:t},MainButton:{show:t,hide:t,setText:t,enable:t,disable:t,onClick:t,offClick:t,setParams:t},SettingsButton:{show:t,hide:t,onClick:t,offClick:t},showAlert:s=>window.alert(s),showConfirm:(s,o)=>o&&o(window.confirm(s)),showPopup:(s,o)=>o&&o("ok")};window.Telegram=window.Telegram||{},window.Telegram.WebApp=n,window.__ORAEL_DEV__=!0,console.info("[devmock] Telegram WebApp mock installed (frontend-only mode)."),window.Adsgram={init:({blockId:s})=>{const o={},r={show:()=>new Promise(l=>{setTimeout(()=>l({done:!0,description:"dev mock ad",state:"destroy",error:!1}),1200)}),addEventListener:(l,m)=>{o[l]=m},removeEventListener:t,destroy:t};return r._listeners=o,r}},console.info("[devmock] Adsgram mock installed (resolves show() after 1.2s).");const i=window.fetch;window.fetch=async function(s,o){if((typeof s=="string"?s:s==null?void 0:s.url)==="/api/profile/avatar/upload"&&(o==null?void 0:o.method)==="POST"){const l=o.body;let m=null;if(l instanceof FormData){for(const[c,p]of l.entries())if(c==="avatar"&&p instanceof Blob){m=p;break}}if(m){const c=await new Promise((p,h)=>{const u=new FileReader;u.onload=()=>p(u.result),u.onerror=h,u.readAsDataURL(m)});try{const p=localStorage.getItem("orael_mock_state"),h=p?JSON.parse(p):{};h.avatarUrl=c,h.photoUrl=c,localStorage.setItem("orael_mock_state",JSON.stringify(h))}catch{}}return new Response(JSON.stringify({ok:!0,avatarUrl:"uploaded"}),{status:200,headers:{"Content-Type":"application/json"}})}return i.apply(this,arguments)},console.info("[devmock] fetch() interceptor installed for avatar upload.")}function mn(){var o,r,l,m,c,p;const e=(o=window.Telegram)==null?void 0:o.WebApp;if(!e)return{tg:null,user:null,startParam:""};try{e.ready()}catch{}try{e.expand()}catch{}try{e.enableClosingConfirmation()}catch{}const t=((r=e.safeAreaInset)==null?void 0:r.top)||0,a=((l=e.safeAreaInset)==null?void 0:l.bottom)||0;document.documentElement.style.setProperty("--safe-top",t+"px"),document.documentElement.style.setProperty("--safe-bot",a+"px");const n=((m=e.contentSafeAreaInset)==null?void 0:m.top)||0;document.documentElement.style.setProperty("--content-safe-top",n+"px");const i=((c=e.initDataUnsafe)==null?void 0:c.user)||null,s=((p=e.initDataUnsafe)==null?void 0:p.start_param)||"";return{tg:e,user:i,startParam:s}}function pn(){var t,a;const e=(a=(t=window.Telegram)==null?void 0:t.WebApp)==null?void 0:a.initData;return typeof e=="string"&&e.length>0}function S(e){var t,a;try{const n=(a=(t=window.Telegram)==null?void 0:t.WebApp)==null?void 0:a.HapticFeedback;if(!n)return;e==="success"?n.notificationOccurred("success"):n.impactOccurred(e==="light"?"light":"medium")}catch{}}function fn(e,t){var n,i;const a=(n=window.Telegram)==null?void 0:n.WebApp;try{if(a){a.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(e)}&text=${encodeURIComponent(t)}`);return}}catch{}(i=navigator.clipboard)==null||i.writeText(e)}function hn(e){var a;const t=(a=window.Telegram)==null?void 0:a.WebApp;try{if(t){e.includes("t.me/")||e.includes("telegram.me/")?t.openTelegramLink(e):t.openLink(e);return}}catch{}window.open(e,"_blank")}let K={balance:0,tier:1,rigLevel:0,tankMined:0,lastAccrue:Date.now(),boostUntil:0,proUntil:0,faucetLast:0,streakDay:0,streakAmounts:[60,90,140,210,290,390,770],spinFreeUsed:!1,scratchLeft:999,chestProgress:0,lottoTickets:0,adChallenge:{count:0,milestones:[],nextMilestone:null},proChestReady:!1,proChestLast:0,photoUrl:null,tutorialSeen:!1,role:"user",permissions:"",firstName:"",ref:{count:0,earned:0,active:0},refCode:"",rig:{name:"Rig I",sessionMin:240,cost:0},rigs:[],nextRig:null,tasks:[],featuredTasks:[],completedTasks:{},transactions:[],leaderboard:[],lottoPool:0,lottoPlayers:0,_loaded:!1,_screen:"mine",_selectedMethod:null,_earnTab:"tasks",_tutorialSeen:!1,_historyPage:1};function I(e){var a,n,i,s;if(!e||typeof e!="object")return;let t=e;e.user&&typeof e.user=="object"&&(t=e.user);for(const o of Object.keys(t)){if(o.startsWith("_"))continue;const r=t[o];r!==null&&typeof r=="object"&&!Array.isArray(r)&&typeof K[o]=="object"&&K[o]!==null&&!Array.isArray(K[o])?K[o]={...K[o],...r}:K[o]=r}try{const o=(s=(i=(n=(a=window.Telegram)==null?void 0:a.WebApp)==null?void 0:n.initDataUnsafe)==null?void 0:i.user)==null?void 0:s.id;if(o){const r={},l=["balance","tier","rigLevel","tankMined","lastAccrue","boostUntil","proUntil","faucetLast","streakDay","spinFreeUsed","scratchLeft","chestProgress","lottoTickets","ref","refCode","rig"];for(const m of l)K[m]!==void 0&&(r[m]=K[m]);localStorage.setItem(`orael_state_${o}`,JSON.stringify(r))}}catch(o){console.error("Failed to save state cache:",o)}}function vn(e){if(e)try{const t=localStorage.getItem(`orael_state_${e}`);if(t){const a=JSON.parse(t);for(const n of Object.keys(a))n.startsWith("_")||(K[n]=a[n]);K._loaded=!0}}catch(t){console.error("Failed to load cached state:",t)}}function $(){return K}function J(e,t){K[e]=t}const gn=395.8;function ie(e,t,a,n){S("success"),n&&n()}function bn(){const e=d("savedBankSelect");return e&&e.value?!0:$()._resolvedAccountName!==void 0&&$()._resolvedAccountName!==null}function q(){const e=$().economy;return!e||!e.ORL_TO_NGN?null:e}function ca(){return q()!==null}function We(){const e=q();return e?e.ORL_TO_NGN:0}function me(){const e=q();return e?e.TANK_ORL:0}function Ct(){const e=q();return e&&e.RIGS&&e.RIGS.length?e.RIGS:[]}function yn(e){const t=q();return t&&t.TIER_MULTIPLIERS&&t.TIER_MULTIPLIERS[e]||1}function wn(){const e=q();return e?e.PRO_MULTIPLIER:1}function kn(){const e=q();return e?e.BOOST_MULTIPLIER:1}function Ha(){const e=q();return e?e.WITHDRAWAL_METHODS||{}:{}}function Ln(){const e=q();return e?e.FAUCET_COOLDOWN:0}function Sn(){const e=q();return e?e.CHEST_GOAL:0}function U(e,t=2){return Number(e).toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t})}function A(e){return Math.floor(e).toLocaleString("en-US")}function ua(e){return"₦"+U(e*We(),2)}function ma(e){const t=Math.max(0,Math.floor(e/1e3)),a=Math.floor(t/3600),n=Math.floor(t%3600/60),i=t%60;return`${a}:${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function d(e){return document.getElementById(e)}function Ee(){return Date.now()}function be(e){return Ee()<(e.proUntil||0)}function et(e){return Ee()<(e.boostUntil||0)}function Wa(e){const t=be(e)?wn():1,a=et(e)?kn():1,n=yn(e.tier||1);return t*a*n}function En(e){const t=Ct();return t[e.rigLevel]||t[0]}function _n(e){return(En(e).sessionMin||240)/60}function vt(e){return me()/_n(e)*Wa(e)}function Tn(e){return(e.tankMined||0)<me()-1e-9}function xn(e){if(!Tn(e))return 0;const t=Ee()-(e.lastAccrue||Ee());if(t<=0)return 0;const a=t/36e5*vt(e);return Math.min(a,me()-(e.tankMined||0))}const pa={success:'<svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4 10-11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',error:'<svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',info:'<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 11v5m0-9h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',reward:'<svg viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 5.8 6.6.6-5 4.3 1.5 6.5L12 16.2 6.5 19.2 8 12.7 3 8.4l6.6-.6L12 2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>'};function y(e,t){var r,l;const a=d("toastWrap");if(!a)return;let n={variant:"info",message:"",coin:"",duration:2600};typeof e=="object"?n={...n,...e}:typeof t=="object"?(n={...n,...t},n.coin=n.coin||(typeof t=="string"?t:"")):(typeof t=="string"&&(n.coin=t),n.variant=fa(e)),n.title||(n.title=e);const i=document.createElement("div");i.className=`toast ${n.variant||"info"}`;const s=pa[n.variant]||pa.info;i.innerHTML=`
    <div class="toast-ic">${s}</div>
    <div class="toast-body">
      <div class="toast-title">${ft(n.title)}</div>
      ${n.message?`<div class="toast-msg">${ft(n.message)}</div>`:""}
    </div>
    ${n.coin?`<div class="toast-coin">${ft(n.coin)}</div>`:""}
  `,a.appendChild(i);try{const m=(l=(r=window.Telegram)==null?void 0:r.WebApp)==null?void 0:l.HapticFeedback;m&&(n.variant==="success"||n.variant==="reward"?m.notificationOccurred("success"):n.variant==="error"?m.notificationOccurred("error"):m.impactOccurred("light"))}catch{}const o=n.duration||2600;setTimeout(()=>{i.classList.add("toast-leaving"),setTimeout(()=>i.remove(),350)},o)}function fa(e){if(!e)return"info";const t=e.toLowerCase();return/(success|claimed|refueled|credited|approved|completed|won|earned|unlocked|boost active|active)/i.test(t)?"success":/(error|failed|failed to|invalid|insufficient|not enough|banned|rejected|coming soon|incomplete|missing)/i.test(t)?"error":/(reward|bonus|\+\d)/i.test(t)?"reward":"info"}function ft(e){return e==null?"":String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Cn(e){const t=document.createElement("div");t.className="reward-burst",t.textContent=`+${e} ORL`,document.body.appendChild(t),setTimeout(()=>t.remove(),1500)}function ee(e,t,a){const n=d("modalTitle"),i=d("modalAmt"),s=d("modalBody"),o=d("modalVeil"),r=d("modalIcon"),l=r==null?void 0:r.parentElement;!n||!i||!s||!o||(n.textContent=t,e==null||e===0?(i.style.display="none",r&&(r.innerHTML='<path d="M5 13l4 4 10-11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>',r.style.color="var(--emerald)"),l&&(l.style.background="rgba(16,185,129,0.10)",l.style.borderColor="rgba(16,185,129,0.25)")):(i.style.display="",i.textContent=(e>0?"+":"")+A(e)+" ORL",r&&(r.innerHTML='<path d="M12 2l2.4 5.8 6.6.6-5 4.3 1.5 6.5L12 16.2 6.5 19.2 8 12.7 3 8.4l6.6-.6L12 2z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',r.style.color="var(--gold-1)"),l&&(l.style.background="rgba(251,191,36,0.10)",l.style.borderColor="rgba(251,191,36,0.25)")),s.textContent=a||"",o.classList.add("show"),S("success"),e>0&&Cn(e))}function $n(){const e=d("modalClose");e&&e.addEventListener("click",()=>{var t;(t=d("modalVeil"))==null||t.classList.remove("show")})}function An(){const e=d("userChip"),t=d("tierClose"),a=d("tierVeil"),n=d("profileVeil"),i=d("profileClose"),s=d("profileViewTiers");e&&n&&e.addEventListener("click",()=>{const o=$();ja(o),n.classList.add("show"),S("light")}),i&&n&&i.addEventListener("click",()=>{n.classList.remove("show"),S("light")}),s&&a&&s.addEventListener("click",()=>{const o=$();Fa(o),n&&n.classList.remove("show"),a.classList.add("show"),S("light")}),t&&a&&t.addEventListener("click",()=>{a.classList.remove("show"),S("light")})}function Fa(e){const t=e.tier||1,a=e.balance||0,n=e.ref&&e.ref.count||0;for(let c=1;c<=5;c++){const p=d("tier-row-"+c);p&&(c===t?(p.style.borderColor="rgba(224,162,91,0.5)",p.style.background="rgba(224,162,91,0.08)",p.style.boxShadow="0 0 12px rgba(224,162,91,0.05)"):(p.style.borderColor="transparent",p.style.background="rgba(255,255,255,0.03)",p.style.boxShadow="none"))}const i=d("tierProgression");if(!i)return;if(t>=5){i.innerHTML=`
      <div style="text-align:center;font-weight:600;color:var(--cu-1)">🏆 Max Tier Reached!</div>
      <div style="font-size:11px;color:var(--ink-soft);text-align:center;margin-top:4px">You are at Diamond Tier (2.0x mining multiplier)</div>
    `;return}const s={2:{name:"Silver",bal:5e3,refs:3},3:{name:"Gold",bal:25e3,refs:10},4:{name:"Platinum",bal:1e5,refs:25},5:{name:"Diamond",bal:5e5,refs:100}},o=t+1,r=s[o];if(!r)return;const l=Math.min(100,a/r.bal*100),m=Math.min(100,n/r.refs*100);i.innerHTML=`
    <div style="font-weight:700;margin-bottom:8px;color:var(--ink)">Next: Tier ${o} (${r.name})</div>
    <div style="margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--ink-soft);margin-bottom:3px">
        <span>Balance Progress</span>
        <span><b>${A(a)}</b> / ${A(r.bal)} ORL</span>
      </div>
      <div style="height:4px;border-radius:2px;background:rgba(255,255,255,0.06);overflow:hidden">
        <div style="height:100%;width:${l}%;background:var(--cu-1);border-radius:2px"></div>
      </div>
    </div>
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--ink-soft);margin-bottom:3px">
        <span>Invites Progress</span>
        <span><b>${n}</b> / ${r.refs} referrals</span>
      </div>
      <div style="height:4px;border-radius:2px;background:rgba(255,255,255,0.06);overflow:hidden">
        <div style="height:100%;width:${m}%;background:var(--cu-1);border-radius:2px"></div>
      </div>
    </div>
    <div style="font-size:10.5px;color:var(--ink-mute);margin-top:10px;text-align:center">
      Reach either requirement to upgrade to ${r.name}!
    </div>
  `}function Rn(){document.querySelectorAll(".nav-btn").forEach(e=>{e.addEventListener("click",()=>{var a;S("light"),document.querySelectorAll(".nav-btn").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".screen").forEach(n=>n.classList.remove("active")),e.classList.add("active");const t=d("screen-"+e.dataset.screen);t&&t.classList.add("active"),J("_screen",e.dataset.screen),(a=document.querySelector(".scroll"))==null||a.scrollTo({top:0,behavior:"smooth"}),e.dataset.screen==="wallet"&&document.dispatchEvent(new CustomEvent("orael:method-change"))})})}function Mn(){document.querySelectorAll(".seg button").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".seg button").forEach(t=>t.classList.remove("on")),e.classList.add("on"),document.querySelectorAll("[data-pane]").forEach(t=>{t.hidden=t.dataset.pane!==e.dataset.seg}),J("_earnTab",e.dataset.seg)})})}function On(e){const t=e||$(),a=Ct(),n=a[t.rigLevel]||a[0],i=a[t.rigLevel+1],s=d("rigName"),o=d("rigRate"),r=d("rigMeter"),l=d("rigNext"),m=d("rigBtn");s&&(s.textContent=n.name),o&&(o.textContent=U(me()/(n.sessionMin/60),1)),r&&(r.innerHTML=a.map((c,p)=>`<div class="rig-seg ${p<=t.rigLevel?"on":""}"></div>`).join("")),i?(l&&(l.textContent=U(me()/(i.sessionMin/60),1)),m&&(m.textContent=`Upgrade · ${A(i.cost)} ORL`,m.disabled=t.balance<i.cost)):(l&&(l.textContent="MAX"),m&&(m.textContent="Max rig",m.disabled=!0))}const ha={airtime:'<svg class="m-ic" viewBox="0 0 24 24" fill="none"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="#e0a25b" stroke-width="1.8" stroke-linejoin="round"/></svg>',bank:'<svg class="m-ic" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="13" rx="2" stroke="#e0a25b" stroke-width="1.8"/><path d="M3 10h18" stroke="#e0a25b" stroke-width="1.8"/></svg>',usdt:'<svg class="m-ic" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M7 6h7a3 3 0 0 1 0 6H7m0 0h8a3 3 0 0 1 0 6H7" stroke="#e0a25b" stroke-width="1.8" stroke-linecap="round"/></svg>'};let Ue="";function In(e){var m,c,p;const t=d("methodGrid");if(!t)return;const a=Ha();if(!a||Object.keys(a).length===0){Ue||(t.innerHTML='<div style="text-align:center;padding:16px;color:var(--ink-soft);font-size:13px">Loading payout methods...</div>',Ue="loading");return}const n=!e.country||e.country==="NG";q();const i=JSON.stringify({methods:a,isNG:n,sel:(m=e._selectedMethod)==null?void 0:m.id});if(i===Ue)return;Ue=i;const s=[];for(const[h,u]of Object.entries(a))(u.countries==="all"||Array.isArray(u.countries)&&u.countries.includes(n?"NG":e.country||""))&&s.push({key:h,...u});s.length===0&&a.usdt&&s.push({key:"usdt",...a.usdt});const o=(c=e._selectedMethod)==null?void 0:c.id,r=s.some(h=>h.key===o);if(!o||!r){const h=s.find(u=>u.key==="bank")||s[0];h&&(J("_selectedMethod",{id:h.key,name:h.name,min:h.minOrl}),document.dispatchEvent(new CustomEvent("orael:method-change")))}const l=(p=e._selectedMethod)==null?void 0:p.id;t.innerHTML=s.map(h=>{const u=ha[h.key]||ha.bank,f=h.key===l?" sel":"",b=`Min ${A(h.minOrl)} ORL · ${h.fiat}`;return`<div class="method${f}" id="method-${h.key}" data-min="${h.minOrl}" data-name="${h.name}" data-key="${h.key}">
      ${u}
      <div class="m-name">${h.name}</div><div class="m-min">${b}</div>
    </div>`}).join(""),t.querySelectorAll(".method").forEach(h=>{h.addEventListener("click",()=>{S("light"),t.querySelectorAll(".method").forEach(b=>b.classList.remove("sel")),h.classList.add("sel");const u=h.dataset.key,f=a[u];J("_selectedMethod",{id:u,name:f.name,min:f.minOrl}),Ue="",R(),document.dispatchEvent(new CustomEvent("orael:method-change"))})})}function R(){var ta,aa,na,ia,sa;const e=$();if(!e._loaded||!ca()){const C=d("balance");C&&(C.textContent="...");const z=d("balanceFiat");z&&(z.textContent="≈ ₦...");const xe=d("sessionEarned");xe&&(xe.textContent="Loading...");const Ke=d("energyNum");Ke&&(Ke.textContent="...");const oa=d("timeLeft");oa&&(oa.textContent="...");const ra=d("wBalance");ra&&(ra.textContent="...");const la=d("wFiat");la&&(la.textContent="...");const da=d("userTier");da&&(da.textContent="...");return}const t=xn(e),a=me(),n=Math.min(a,(e.tankMined||0)+t),i=(e.balance||0)+t,s=Math.max(0,(a-n)/a*100),o=n<a-1e-9;document.body.classList.toggle("is-pro",be(e));const r=e.role==="admin"||e.role==="mod"||e.permissions&&e.permissions.length>0;document.body.classList.toggle("is-admin",r);const l=d("userTier");l&&(l.textContent=e.tier||1),Fa(e);const m=d("userAv");if(m){const C=e.avatarUrl||e.photoUrl||null,z=((ta=(e.firstName||"A")[0])==null?void 0:ta.toUpperCase())||"A";C&&C!==m.dataset.src?(m.innerHTML=`<img src="${C}" alt="avatar" onerror="this.parentElement.textContent='${z}'" />`,m.dataset.src=C):!C&&m.dataset.src!=="initial"&&(m.textContent=z,m.dataset.src="initial")}const c=d("balance");c&&(c.textContent=U(i));const p=!e.country||e.country==="NG",h=d("balanceFiat");if(h){const C=q();p?h.textContent=ua(i):C&&C.ORL_PER_USD?h.textContent="≈ $"+U(i/C.ORL_PER_USD,2):h.textContent="≈ $..."}const u=d("gaugeArc");u&&(u.style.strokeDashoffset=(gn*(1-s/100)).toFixed(1));const f=d("energyNum");f&&(f.textContent=Math.round(s));const b=d("engineStatus");b&&(o?(b.classList.remove("empty"),b.textContent=et(e)?"Boosted · 1.2× speed":be(e)?"Pro mining":"Mining active"):(b.classList.add("empty"),b.textContent="Out of fuel"));const _=d("timeLeft");if(_){const C=o?(a-n)/vt(e)*36e5:0;_.textContent=ma(C)}const x=d("hashrate");x&&(x.textContent=U(vt(e),1));const E=d("boostState");E&&(E.textContent=Wa(e).toFixed(1)+"×");const B=d("sessionEarned");B&&(B.textContent=U(n,4)+" ORL mined");const N=d("refuelBtn");N&&(N.disabled=s>95);const se=d("boostBtn");if(se){se.disabled=et(e)||!o;const C=se.querySelector(".btn-stack");C&&C.firstChild&&(C.firstChild.textContent=et(e)?"1.2× Boost active":"Activate 1.2× Boost")}const de=Ln(),te=Ee()-(e.faucetLast||0),ce=d("faucetStatus"),ae=d("faucetBtn");ce&&ae&&de>0&&(te>=de?(ce.textContent="Ready to claim",ae.disabled=!1,ae.textContent="Claim"):(ce.textContent="Next in "+ma(de-te),ae.disabled=!0,ae.textContent="Wait")),On(e),In(e);const M=Ha(),P=e._selectedMethod||null;if(!P||!M[P.id]){const C=d("withdrawBtn");C&&(C.disabled=!0,C.textContent=ca()?"Select a payout method":"Loading...");return}const H=M[P.id],oe=H.minOrl,dn=H.name,Be=P.id,Rt=d("wBalance");Rt&&(Rt.textContent=U(i));const ze=d("wFiat"),Te=q();ze&&(p?ze.textContent="₦"+U(i*We(),2):Te&&Te.ORL_PER_USD?ze.textContent="$"+U(i/Te.ORL_PER_USD,2):ze.textContent="$...");const Mt=d("wProgress");Mt&&(Mt.style.width=Math.min(100,i/oe*100)+"%");const Ot=d("wProgLabel");Ot&&(Ot.textContent=`${A(i)} / ${A(oe)} ORL`);const It=i>=oe,Bt=Be==="airtime"?0:be(e)?5:10,pe=d("withdrawAmountInput"),ct=d("withdrawUnitToggle"),Pt=d("withdrawAmountLabel"),ut=d("orlDeductionRow"),Nt=d("orlDeductionVal");let Ve=!0;Be==="bank"&&(Ve=bn());const Pe=Be==="bank"||Be==="airtime",Ne=e._withdrawUnit||"orl";ct&&(ct.style.display=Pe?"inline-block":"none",ct.textContent=Ne==="ngn"?"Switch to ORL":"Switch to ₦ NGN"),Pt&&(Pt.textContent=Pe&&Ne==="ngn"?"Amount to withdraw (NGN)":"Amount to withdraw (ORL)"),pe&&(pe.placeholder=Pe&&Ne==="ngn"?"Enter amount in Naira":"Enter amount to withdraw",pe.disabled=!Ve);let ue=0,fe=!1,he="";if(!Ve)fe=!0,he="Verify account name first";else if(It)if(pe&&pe.value.trim()!=="")if(Pe&&Ne==="ngn"){const C=parseFloat(pe.value);if(isNaN(C)||C<=0)fe=!0,he="Invalid amount";else{const z=Math.round(C/We()),xe=Math.round(oe*We()),Ke=Math.round(i*We());C<xe?(fe=!0,he=`Min is ₦${U(xe,0)}`):z>i?(fe=!0,he=`Max is ₦${U(Ke,0)}`):ue=z}}else{const C=parseInt(pe.value);isNaN(C)||C<oe?(fe=!0,he=`Min is ${A(oe)} ORL`):C>i?(fe=!0,he=`Max is ${A(i)} ORL`):ue=C}else ue=Math.floor(i);ut&&(Pe&&Ne==="ngn"?(ut.style.display="flex",Nt&&(Nt.textContent=A(ue)+" ORL")):ut.style.display="none");const re=d("withdrawBtn");re&&(Ve?It?fe?(re.disabled=!0,re.textContent=he):(re.disabled=!1,re.textContent=`Withdraw to ${dn}`):(re.disabled=!0,re.textContent=`Need ${A(oe-i)} more ORL`):(re.disabled=!0,re.textContent="Verify account name first"));const mt=Math.floor(ue*Bt/100),Dt=d("feePct");Dt&&(Dt.textContent=Bt);const Ut=d("feeAmt");Ut&&(Ut.textContent=A(ue)+" ORL");const Ht=d("feeVal");Ht&&(Ht.textContent=A(mt)+" ORL");const pt=d("feeNet");if(pt)if(Be==="usdt"&&Te&&Te.ORL_PER_USD){const C=(ue-mt)/Te.ORL_PER_USD;pt.textContent="$"+U(C,2)+" USDT"}else pt.textContent=ua(ue-mt);const ve=d("proBtn");if(ve){const C=q().PRO_PRICE_STARS||250;if(be(e)){ve.disabled=!0;const z=Math.max(0,Math.ceil((e.proUntil-Ee())/864e5));ve.innerHTML=`Pro active · ${z}d left`,ve.style.opacity="0.7"}else ve.disabled=!1,ve.innerHTML=`
        <svg class="stars-ico" viewBox="0 0 24 24" fill="#1c1109"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z"/></svg>
        Go Pro · ${C} Telegram Stars / mo
      `,ve.style.opacity="1"}const De=d("proChestBtn");De&&(be(e)?(De.style.display="",De.disabled=!e.proChestReady,De.textContent=e.proChestReady?"Claim free daily chest":"Chest claimed · come back tomorrow"):De.style.display="none");const Wt=d("spinTag");Wt&&(Wt.textContent="Unlimited · 1 ad");const Ft=d("spinBtn");Ft&&(Ft.textContent="Spin the wheel");const jt=d("scratchTag");jt&&(jt.textContent="Unlimited");const qe=Sn(),Gt=d("chestBar");Gt&&qe>0&&(Gt.style.width=(e.chestProgress||0)/qe*100+"%");const zt=d("chestCap");zt&&qe>0&&(zt.textContent=`${e.chestProgress||0} / ${qe} ads watched`);const Vt=d("lottoMine");Vt&&(Vt.textContent=e.lottoTickets||0);const qt=d("lottoPool");qt&&(qt.textContent=A(e.lottoPool||0)+" ORL");const Kt=d("lottoPlayers");Kt&&(Kt.textContent=A(e.lottoPlayers||0));const Xt=d("refCount");Xt&&(Xt.textContent=((aa=e.ref)==null?void 0:aa.count)||0);const Yt=d("refEarned");Yt&&(Yt.textContent=A(((na=e.ref)==null?void 0:na.earned)||0));const Jt=d("refActive");Jt&&(Jt.textContent=((ia=e.ref)==null?void 0:ia.active)||0);const Zt=d("refCode");Zt&&e.refCode&&(Zt.textContent=`https://t.me/Orael_bot?start=${e.refCode}`);const Qt=d("acCount");Qt&&(Qt.textContent=((sa=e.adChallenge)==null?void 0:sa.count)||0);const ea=d("acMilestones");if(ea&&e.adChallenge){const C=e.adChallenge.milestones||[];ea.innerHTML=C.map(z=>`<div class="ac-milestone ${z.claimed?"claimed":""}">
        <div class="ac-m-ads">${z.ads} ads</div>
        <div class="ac-m-bonus">+${z.bonus} ORL</div>
        <div class="ac-m-status">${z.claimed?"✓ Claimed":"Locked"}</div>
      </div>`).join("")}ja(e)}function ja(e){var r;if(!d("profileVeil"))return;const a=d("profileAvatar");if(a){const l=e.avatarUrl||e.photoUrl||null,m=((r=(e.firstName||"A")[0])==null?void 0:r.toUpperCase())||"A";l&&l!==a.dataset.src?(a.innerHTML=`<img src="${l}" alt="avatar" onerror="this.parentElement.textContent='${m}'" />`,a.dataset.src=l):!l&&a.dataset.src!=="initial"&&(a.textContent=m,a.dataset.src="initial")}const n=d("profileName");n&&(n.textContent=e.firstName?`${e.firstName} ${e.lastName||""}`.trim():"Orael Miner");const i=d("profileUsername");i&&(i.textContent=e.username?"@"+e.username:"");const s=d("profileTier");s&&(s.textContent=`Tier ${e.tier||1}`);const o=d("profileProBadge");if(o)if(be(e)){const l=Math.max(0,Math.ceil((e.proUntil-Ee())/864e5));o.style.display="",o.textContent=`PRO · ${l}d left`}else o.style.display="none"}const T={ORL_TO_NGN:2.774,USD_TO_NGN:1387,ORL_PER_USD:500,TANK_ORL:40,FREE_MINING_CAP:.6,RIGS:[{name:"Rig I",sessionMin:240,cost:0},{name:"Rig II",sessionMin:200,cost:8e3},{name:"Rig III",sessionMin:160,cost:3e4},{name:"Rig IV",sessionMin:120,cost:9e4},{name:"Rig V",sessionMin:80,cost:25e4}],FAUCET_REWARD:35,FAUCET_COOLDOWN:3600*1e3,LOTTO_TICKET_ORL:750,CHEST_GOAL:5,CHEST_REWARD_MIN:200,CHEST_REWARD_MAX:280,WHEEL_PRIZES:[120,60,300,0,40,20,600,8],WHEEL_WEIGHTS:[10,16,1,20,14,20,.3,18.7],SCRATCH_PRIZES:[8,20,40,100,250,0],SCRATCH_WEIGHTS:[38,28,20,10,1,3],COINFLIP_WIN:65,COINFLIP_LOSE:15,VIDEO_WALL_REWARD:40,AD_MILESTONES:[{ads:10,bonus:70},{ads:25,bonus:140},{ads:50,bonus:350}],STREAK_AMOUNTS:[60,90,140,210,290,390,770],SESSION_MS:14400*1e3,REFERRAL_L1_PCT:.07,REFERRAL_L2_PCT:.02,PRO_MULTIPLIER:2,BOOST_MULTIPLIER:1.2,TIER_MULTIPLIERS:{1:1,2:1.1,3:1.25,4:1.5,5:2},WITHDRAWAL_FEE_PCT:.1,WITHDRAWAL_FEE_PRO_PCT:.05,MANUAL_APPROVAL_THRESHOLD_ORL:1800,WITHDRAWAL_METHODS:{airtime:{name:"Airtime",minOrl:40,fiat:"₦100",countries:["NG"],icon:"phone"},bank:{name:"Bank (NGN)",minOrl:40,fiat:"₦100",countries:["NG"],icon:"bank"},usdt:{name:"USDT (TRC20)",minOrl:720,fiat:"$2.00",countries:"all",icon:"crypto"}},TASKS:[{id:"t1",title:"Follow Orael on X",sub:"Tap follow · earn 40 ORL",reward:40,url:"https://x.com/Orael_Network"},{id:"t2",title:"Join Orael Telegram",sub:"Open & start the bot",reward:40,url:"https://t.me/Orael_bot"},{id:"t3",title:"Subscribe YouTube",sub:"Watch & subscribe",reward:40,url:"https://youtube.com/@Orael"},{id:"t4",title:"Follow on Instagram",sub:"Tap follow",reward:35,url:"https://instagram.com/Orael"},{id:"t5",title:"Join Discord server",sub:"Connect with the community",reward:35,url:"https://discord.gg/Orael"},{id:"t6",title:"Follow on TikTok",sub:"Tap follow",reward:35,url:"https://tiktok.com/@Orael"}],FEATURED_TASKS:[{id:"f1",title:"Partner: Binance",sub:"Sign up & trade",reward:100,url:"https://binance.com"},{id:"f2",title:"Partner: Yellow Card",sub:"Buy crypto in Africa",reward:80,url:"https://yellowcard.io"},{id:"f3",title:"Partner: Flutterwave",sub:"Send & receive money",reward:80,url:"https://flutterwave.com"}],PRO_PRICE_STARS:250,PRO_DURATION_DAYS:30},Ga=[{code:"044",name:"Access Bank"},{code:"035",name:"ALAT by WEMA"},{code:"401",name:"ASO Savings and Loans"},{code:"023",name:"Citibank Nigeria"},{code:"063",name:"Diamond Bank"},{code:"050",name:"Ecobank Nigeria"},{code:"562",name:"Ekondo Microfinance Bank"},{code:"084",name:"Enterprise Bank"},{code:"058",name:"Fidelity Bank"},{code:"070",name:"First Bank of Nigeria"},{code:"011",name:"First City Monument Bank"},{code:"214",name:"FCMB"},{code:"051",name:"Guaranty Trust Bank"},{code:"030",name:"Heritage Bank"},{code:"082",name:"Keystone Bank"},{code:"014",name:"MainStreet Bank"},{code:"076",name:"Polaris Bank"},{code:"101",name:"Providus Bank"},{code:"221",name:"Stanbic IBTC Bank"},{code:"068",name:"Standard Chartered Bank"},{code:"232",name:"Sterling Bank"},{code:"032",name:"Union Bank of Nigeria"},{code:"033",name:"United Bank For Africa"},{code:"215",name:"Unity Bank"},{code:"035",name:"Wema Bank"},{code:"057",name:"Zenith Bank"},{code:"999",name:"Rubies Bank"},{code:"327",name:"Paga"},{code:"901",name:"Opay"},{code:"329",name:"Palmpay"},{code:"305",name:"Kuda Microfinance Bank"},{code:"993",name:"Paycom"},{code:"307",name:"Eyowo"}],G=e=>`/Orael-frontend/avatars/avatar-${e}.png`;function Bn(){const e=Date.now();return{firstName:"Ademola",lastName:"O.",username:"ademola21",photoUrl:G(1),avatarUrl:G(1),country:"NG",role:"admin",permissions:"all",tutorialSeen:!1,pinSet:!1,balance:18750,tier:1,rigLevel:0,tankMined:12.5,lastAccrue:e,boostUntil:0,proUntil:0,faucetLast:e-3900*1e3,streakDay:3,streakClaimedToday:!1,streakAmounts:T.STREAK_AMOUNTS,spinFreeUsed:!1,scratchLeft:999,chestProgress:2,lottoTickets:1,lottoPool:184500,lottoPlayers:247,lottoDrawAt:e+8*3600*1e3,adChallenge:{count:4,nextMilestone:{ads:10,bonus:70},milestones:T.AD_MILESTONES.map(t=>({...t,claimed:!1}))},proChestReady:!1,proChestLast:0,ref:{count:2,earned:540,active:1},refCode:"ADEMOLA21",rig:T.RIGS[0],rigs:T.RIGS,tasks:T.TASKS,featuredTasks:T.FEATURED_TASKS,completedTasks:{t1:!0},transactions:[{id:1001,type:"mining",description:"Mining reward",amount:12.4,created_at:new Date(Date.now()-300*1e3).toISOString()},{id:1002,type:"refuel",description:"Refuel bonus",amount:40,created_at:new Date(Date.now()-2100*1e3).toISOString()},{id:1003,type:"spin",description:"Lucky Spin reward",amount:60,created_at:new Date(Date.now()-2*3600*1e3).toISOString()},{id:1004,type:"withdraw",description:"Withdrawal via bank",amount:-5e3,created_at:new Date(Date.now()-5*3600*1e3).toISOString(),withdrawal_status:"completed",withdrawal_id:"WD-2024-001",flw_reference:"FLW-MOCK-REF-001",net_fiat:"₦13,870.00",fee_orl:500,wallet_info:"044|0123456789|ADEWALE JOHNSON|Access Bank",failure_reason:null},{id:1005,type:"scratch",description:"Scratch & Win reward",amount:40,created_at:new Date(Date.now()-8*3600*1e3).toISOString()},{id:1006,type:"faucet",description:"Hourly faucet",amount:35,created_at:new Date(Date.now()-10*3600*1e3).toISOString()},{id:1007,type:"withdraw",description:"Withdrawal via bank",amount:-3e3,created_at:new Date(Date.now()-26*3600*1e3).toISOString(),withdrawal_status:"pending",withdrawal_id:"WD-2024-002",flw_reference:null,net_fiat:"₦8,322.00",fee_orl:300,wallet_info:"044|0123456789|ADEWALE JOHNSON|Access Bank",failure_reason:null},{id:1008,type:"coinflip",description:"Coin flip win",amount:65,created_at:new Date(Date.now()-30*3600*1e3).toISOString()},{id:1009,type:"chest",description:"Mystery Chest reward",amount:240,created_at:new Date(Date.now()-48*3600*1e3).toISOString()},{id:1010,type:"streak",description:"Daily streak day 3",amount:140,created_at:new Date(Date.now()-50*3600*1e3).toISOString()}],leaderboard:[{id:1,first_name:"Ngozi",balance:284500,avatar_url:G(2)},{id:2,first_name:"Tunde",balance:242800,avatar_url:G(3)},{id:3,first_name:"Amaka",balance:198200,avatar_url:G(4)},{id:4,first_name:"Bisi",balance:174100,avatar_url:G(5)},{id:5,first_name:"Chidi",balance:161500,avatar_url:G(6)},{id:6,first_name:"Halima",balance:148900,avatar_url:G(7)},{id:7,first_name:"Emeka",balance:137400,avatar_url:G(8)},{id:8,first_name:"Sade",balance:129800,avatar_url:G(9)},{id:9,first_name:"Yakubu",balance:122100,avatar_url:G(10)},{id:10,first_name:"Zainab",balance:116400,avatar_url:G(1)}],_userRank:null,economy:T}}const za="orael_mock_state";function Pn(){try{const e=localStorage.getItem(za);if(e){const t=JSON.parse(e);return t.economy=T,t.rigs=T.RIGS,t.streakAmounts=T.STREAK_AMOUNTS,t}}catch{}return Bn()}let v=Pn();function D(){try{localStorage.setItem(za,JSON.stringify(v))}catch(e){console.warn("Mock state persist failed",e)}}function Nn(){const e=Date.now(),t=T.TANK_ORL*T.FREE_MINING_CAP;if(v.tankMined>=t){v.lastAccrue=e;return}const n=((T.RIGS[v.rigLevel]||T.RIGS[0]).sessionMin||240)/60,i=e<(v.proUntil||0)?T.PRO_MULTIPLIER:1,s=e<(v.boostUntil||0)?T.BOOST_MULTIPLIER:1,o=T.TIER_MULTIPLIERS[v.tier||1]||1,r=T.TANK_ORL/n*i*s*o,m=(e-(v.lastAccrue||e))/36e5*r,c=t-(v.tankMined||0),p=Math.min(m,c);p>0&&(v.tankMined+=p,v.balance+=p),v.lastAccrue=e}function V(e,t,a){a&&(v.transactions.unshift({id:Date.now()+Math.random(),type:e,description:t,amount:a,created_at:new Date().toISOString()}),v.transactions.length>200&&(v.transactions.length=200))}function Dn(e){return new Promise(t=>setTimeout(t,e))}function va(){return Date.now()<(v.proUntil||0)}function j(){const{_userRank:e,...t}=v;return JSON.parse(JSON.stringify(t))}function ga(e){const t=e.reduce((n,i)=>n+i,0);let a=Math.random()*t;for(let n=0;n<e.length;n++)if(a-=e[n],a<=0)return n;return e.length-1}function Un(){const e=[...v.leaderboard].sort((i,s)=>s.balance-i.balance),t={first_name:v.firstName,balance:v.balance,avatar_url:v.avatarUrl};return[...e,t].sort((i,s)=>s.balance-i.balance).findIndex(i=>i.first_name===t.first_name&&i.balance===t.balance)+1}function ne(){if(v.adChallenge||(v.adChallenge={count:0,milestones:[],nextMilestone:null}),v.adChallenge.count=(v.adChallenge.count||0)+1,v.adChallenge.milestones){v.adChallenge.milestones.forEach(t=>{!t.claimed&&v.adChallenge.count>=t.ads&&(t.claimed=!0,v.balance+=t.bonus,V("milestone",`Ad challenge: ${t.ads} ads`,t.bonus))});const e=v.adChallenge.milestones.find(t=>!t.claimed);v.adChallenge.nextMilestone=e||null}}async function L(e,t={}){var o;const a=(t.method||"GET").toUpperCase(),n=t.body||null,i=e.split("?")[1]||"",s=e.split("?")[0];await Dn(100+Math.random()*150);try{if(Nn(),s==="/api/user"&&a==="GET")return j();if(s==="/api/user/tutorial-seen"&&a==="POST")return v.tutorialSeen=!0,D(),{ok:!0};if(s==="/api/user/transactions"&&a==="GET"){const r=new URLSearchParams(i),l=parseInt(r.get("page")||"1"),m=parseInt(r.get("limit")||"15"),c=(l-1)*m,p=v.transactions.slice(c,c+m),h=Math.max(1,Math.ceil(v.transactions.length/m));return{transactions:p,pagination:{page:l,limit:m,total:v.transactions.length,totalPages:h}}}if(s==="/api/user/redeem-promo"&&a==="POST"){const r=n&&n.code||"",l=100;return v.balance+=l,V("promo",`Promo code: ${r}`,l),D(),{success:!0,reward:l,message:"Promo code redeemed!"}}if(s==="/api/leaderboard"&&a==="GET")return{leaderboard:v.leaderboard.map(l=>({...l,balance:Math.max(0,Math.floor(l.balance+(Math.random()-.5)*200))})),userRank:Un()};if(s==="/api/profile/avatars"&&a==="GET")return{avatars:[1,2,3,4,5,6,7,8,9,10].map(r=>G(r))};if(s==="/api/profile/avatar/choose"&&a==="POST"){const r=n&&n.avatar||G(1);return v.avatarUrl=r,v.photoUrl=r,D(),{ok:!0,avatarUrl:r}}if(s==="/api/profile/avatar/reset"&&a==="POST"){const r=Math.floor(Math.random()*10)+1,l=G(r);return v.avatarUrl=l,v.photoUrl=l,D(),{ok:!0,avatarUrl:l}}if(s==="/api/mining/refuel"&&a==="POST")return v.tankMined=0,v.lastAccrue=Date.now(),v.balance+=T.TANK_ORL,V("refuel","Refuel bonus",T.TANK_ORL),ne(),D(),j();if(s==="/api/mining/boost"&&a==="POST")return v.boostUntil=Date.now()+T.SESSION_MS,ne(),D(),j();if(s==="/api/mining/rig-upgrade"&&a==="POST"){const r=T.RIGS[v.rigLevel+1];if(!r)throw new Error("Already at max rig");if(v.balance<r.cost)throw new Error("Insufficient balance");return v.balance-=r.cost,v.rigLevel+=1,v.rig=r,v.tankMined=0,v.lastAccrue=Date.now(),V("upgrade",`Upgraded to ${r.name}`,-r.cost),D(),j()}if(s==="/api/mining/pro-chest"&&a==="POST"){if(!va())throw new Error("Pro only");if(!v.proChestReady)throw new Error("Chest not ready yet");const r=T.CHEST_REWARD_MIN+Math.floor(Math.random()*(T.CHEST_REWARD_MAX-T.CHEST_REWARD_MIN));return v.balance+=r,v.proChestReady=!1,v.proChestLast=Date.now(),V("pro-chest","Pro daily chest",r),D(),{user:j(),reward:r}}if(s==="/api/play/spin"&&a==="POST"){const r=T.WHEEL_PRIZES,l=T.WHEEL_WEIGHTS,m=ga(l),c=r[m];return c>0&&(v.balance+=c,V("spin","Lucky Spin reward",c)),ne(),D(),{...j(),prizeIndex:m,prizeAmount:c}}if(s==="/api/play/scratch"&&a==="POST"){if(v.scratchLeft<=0)throw new Error("No scratch cards left today");v.scratchLeft-=1;const r=ga(T.SCRATCH_WEIGHTS),l=T.SCRATCH_PRIZES[r];return l>0&&(v.balance+=l,V("scratch","Scratch & Win reward",l)),ne(),D(),{...j(),prizeIndex:r,prizeAmount:l}}if(s==="/api/play/chest"&&a==="POST"){v.chestProgress=(v.chestProgress||0)+1;let r=0,l=!1;return v.chestProgress>=T.CHEST_GOAL&&(l=!0,r=T.CHEST_REWARD_MIN+Math.floor(Math.random()*(T.CHEST_REWARD_MAX-T.CHEST_REWARD_MIN)),v.balance+=r,v.chestProgress=0,V("chest","Mystery Chest reward",r)),ne(),D(),{...j(),chestOpened:l,prizeAmount:r}}if(s==="/api/play/lottery/ticket"&&a==="POST"){if((n&&n.type||"ad")==="buy"){const l=T.LOTTO_TICKET_ORL;if(v.balance<l)throw new Error("Insufficient balance");v.balance-=l,v.lottoPool+=l,v.lottoTickets+=1,V("lotto","Lottery ticket purchase",-l)}else v.lottoTickets+=1,ne();return D(),j()}if(s==="/api/play/coinflip"&&a==="POST"){const r=n&&n.choice||"heads",l=Math.random()<.5?"heads":"tails",m=r===l,c=m?T.COINFLIP_WIN:T.COINFLIP_LOSE;return v.balance+=c,V("coinflip",m?"Coin flip win":"Coin flip consolation",c),ne(),D(),{...j(),result:l,won:m,prizeAmount:c}}if(s==="/api/earn/task"&&a==="POST"){const{taskId:r}=n||{},m=[...T.TASKS,...T.FEATURED_TASKS].find(c=>c.id===r);if(!m)throw new Error("Task not found");if(v.completedTasks[r])throw new Error("Task already completed");return v.completedTasks[r]=!0,v.balance+=m.reward,V("task",`Task: ${m.title}`,m.reward),ne(),D(),j()}if(s==="/api/earn/streak"&&a==="POST"){if(v.streakClaimedToday)throw new Error("Already claimed today");const r=Math.min(6,Math.max(0,(v.streakDay||1)-1)),l=T.STREAK_AMOUNTS[r];return v.balance+=l,v.streakClaimedToday=!0,V("streak",`Daily streak day ${v.streakDay}`,l),D(),{user:j(),reward:l}}if(s==="/api/earn/faucet"&&a==="POST"){if(Date.now()-(v.faucetLast||0)<T.FAUCET_COOLDOWN)throw new Error("Faucet on cooldown");const l=T.FAUCET_REWARD;return v.balance+=l,v.faucetLast=Date.now(),V("faucet","Hourly faucet",l),ne(),D(),{...j(),reward:l}}if(s==="/api/earn/video-wall"&&a==="POST"){const r=T.VIDEO_WALL_REWARD;return v.balance+=r,V("video","Video Wall reward",r),ne(),D(),{...j(),reward:r}}if(s==="/api/wallet/banks"&&a==="GET")return{banks:Ga};if(s==="/api/wallet/bank-accounts"&&a==="GET")return{accounts:JSON.parse(localStorage.getItem("orael_mock_bank_accounts")||"[]")};if(s==="/api/wallet/resolve-account"&&a==="POST"){const l=(n&&n.account_number||"").slice(-4),m=["ADEWALE JOHNSON","FUNMI BALOGUN","CHUKWUEMEKA NWOSU","BISI ADEYEMI","IBRAHIM MUSA","NKEM IGWE","TITILOPE OLAOYE","SANNI ABDUL","GRACE OKORO","YUSUF MOHAMMED"],c=(parseInt(l)||0)%m.length;return{account_name:m[c]}}if(s==="/api/wallet/set-pin"&&a==="POST")return v.pinSet=!0,D(),{ok:!0};if(s==="/api/wallet/withdraw"&&a==="POST"){const r=n&&n.method||"bank",m={bank:40,usdt:720,airtime:40}[r]||40;if(v.balance<m)throw new Error(`Minimum is ${m} ORL`);let c;r==="airtime"?c=0:c=va()?T.WITHDRAWAL_FEE_PRO_PCT:T.WITHDRAWAL_FEE_PCT;const p=Math.floor(v.balance*c),h=v.balance-p;if(r==="bank"&&n&&n.walletInfo&&!n.bankAccountId){const x=n.walletInfo.split("|");if(x.length>=4){const E=JSON.parse(localStorage.getItem("orael_mock_bank_accounts")||"[]");E.push({id:Date.now(),bank_code:x[0],account_number:x[1],account_name:x[2],bank_name:x[3]}),localStorage.setItem("orael_mock_bank_accounts",JSON.stringify(E))}}const u="WD-"+Date.now(),f=r==="bank"?"FLW-MOCK-"+Math.random().toString(36).slice(2,10).toUpperCase():null,b=r==="usdt"?"$"+U(h/500,2)+" USDT":"₦"+U(h*T.ORL_TO_NGN,2),_={id:Date.now(),type:"withdraw",description:`Withdrawal via ${r}`,amount:-v.balance,created_at:new Date().toISOString(),withdrawal_status:"pending",withdrawal_id:u,flw_reference:f,net_fiat:b,fee_orl:p,wallet_info:n&&n.walletInfo?n.walletInfo:null,failure_reason:null};return v.transactions.unshift(_),v.transactions.length>200&&(v.transactions.length=200),v.balance=0,D(),{success:!0,user:j(),message:`Withdrawal of ${h} ORL (fee ${p}) is processing. Funds arrive within 24h.`,withdrawal_id:u}}if(s==="/api/wallet/pro"&&a==="POST")return{invoiceLink:"mock-invoice-link",ok:!0};if(s==="/api/wallet/pro/dev-activate"&&a==="POST")return v.proUntil=Date.now()+T.PRO_DURATION_DAYS*24*3600*1e3,v.proChestReady=!0,D(),{state:j()};if(s==="/api/adsgram-callback"&&a==="POST")return{ok:!0};if(s==="/api/admin/permissions"&&a==="GET")return{permissions:["dashboard","users","withdrawals","transactions","economy","promos","audit","broadcast","settings"]};if(s==="/api/admin/stats"&&a==="GET")return{totalUsers:1284,activeToday:342,totalOrlMined:4520800,totalWithdrawals:842e3,pendingWithdrawals:3,totalRevenue:2840.5,adRevenueToday:12.4,proSubscribers:47};if(s==="/api/admin/settings"&&a==="GET")return{flags:{maintenance:!1,registrations:!0,withdrawals:!0,"auto-approve":!0}};if(s==="/api/admin/settings"&&a==="PUT")return{ok:!0,flags:{...(n==null?void 0:n.flags)||{}}};if(s==="/api/admin/users"&&a==="GET"){const r=new URLSearchParams(i),l=parseInt(r.get("page")||"1"),m=parseInt(r.get("limit")||"20"),c=r.get("search")||"",p=Va();let h=p;c&&(h=p.filter(b=>{var _,x;return((_=b.first_name)==null?void 0:_.toLowerCase().includes(c.toLowerCase()))||((x=b.username)==null?void 0:x.toLowerCase().includes(c.toLowerCase()))||String(b.id).includes(c)}));const u=(l-1)*m;return{users:h.slice(u,u+m),pagination:{page:l,limit:m,total:h.length,totalPages:Math.max(1,Math.ceil(h.length/m))}}}if(s.match(/^\/api\/admin\/users\/\d+\/detail$/)&&a==="GET"){const r=parseInt(s.match(/\d+/)[0]);return Wn(r)}if(s.match(/^\/api\/admin\/users\/\d+\/ban$/)&&a==="POST")return{ok:!0};if(s.match(/^\/api\/admin\/users\/\d+\/balance$/)&&a==="POST")return{ok:!0,newBalance:v.balance};if(s.match(/^\/api\/admin\/users\/\d+\/role$/)&&a==="POST")return{ok:!0};if(s==="/api/admin/withdrawals"&&a==="GET"){const r=new URLSearchParams(i),l=parseInt(r.get("page")||"1"),m=parseInt(r.get("limit")||"20"),c=r.get("status")||"",p=qa();let h=p;c&&c!=="all"&&(h=p.filter(b=>b.status===c));const u=(l-1)*m;return{withdrawals:h.slice(u,u+m),pagination:{page:l,limit:m,total:h.length,totalPages:Math.max(1,Math.ceil(h.length/m))}}}if(s.match(/^\/api\/admin\/withdrawals\/\d+\/process$/)&&a==="POST")return{ok:!0,status:(n==null?void 0:n.status)||"completed"};if(s.match(/^\/api\/admin\/withdrawals\/\d+\/requery$/)&&a==="POST")return{ok:!0,status:"completed"};if(s==="/api/admin/withdrawals/bulk-process"&&a==="POST")return{ok:!0,processed:((o=n==null?void 0:n.ids)==null?void 0:o.length)||0};if(s==="/api/admin/transactions"&&a==="GET"){const r=new URLSearchParams(i),l=parseInt(r.get("page")||"1"),m=parseInt(r.get("limit")||"20"),c=(l-1)*m;return{transactions:v.transactions.slice(c,c+m),pagination:{page:l,limit:m,total:v.transactions.length,totalPages:Math.max(1,Math.ceil(v.transactions.length/m))}}}return s==="/api/admin/economy"&&a==="GET"?{economy:T}:s==="/api/admin/economy"&&a==="PUT"?{ok:!0,economy:T}:s==="/api/admin/economy/reset"&&a==="POST"?{ok:!0,economy:T}:s==="/api/admin/promo-codes"&&a==="GET"?{promos:[{code:"WELCOME",rewardOrl:100,maxUses:1e3,uses:234,expiresAt:null,active:!0},{code:"BONUS50",rewardOrl:50,maxUses:500,uses:67,expiresAt:null,active:!0}]}:s==="/api/admin/promo-codes"&&a==="POST"?{ok:!0}:s.match(/^\/api\/admin\/promo-codes\//)&&a==="DELETE"?{ok:!0}:s==="/api/admin/audit-log"&&a==="GET"?{logs:[{id:1,admin_id:10042024,admin_name:"Ademola",action:"UPDATE_SETTINGS",target:"maintenance=false",created_at:new Date(Date.now()-36e5).toISOString()},{id:2,admin_id:10042024,admin_name:"Ademola",action:"APPROVE_WITHDRAWAL",target:"WD-2024-001",created_at:new Date(Date.now()-72e5).toISOString()},{id:3,admin_id:10042024,admin_name:"Ademola",action:"BAN_USER",target:"user #5821",created_at:new Date(Date.now()-864e5).toISOString()}],pagination:{page:1,totalPages:1}}:s==="/api/admin/broadcast"&&a==="POST"?{ok:!0,jobId:"JOB-"+Date.now()}:s.match(/^\/api\/admin\/broadcast\//)&&a==="GET"?{jobId:s.split("/").pop(),status:"completed",sent:1284,failed:0}:s==="/api/admin/backup-db"&&a==="POST"?{ok:!0,filename:"orael_backup_"+Date.now()+".db"}:(console.warn("[mock api] Unhandled route:",a,s),{ok:!0})}catch(r){throw r.message!=="Telegram-only access"&&r.message!=="maintenance"&&y(r.message||"Mock API error"),r}}const at=["Ngozi","Tunde","Amaka","Bisi","Chidi","Halima","Emeka","Sade","Yakubu","Zainab","Femi","Nneka","Kunle","Aisha","Bola","Seyi","Ibrahim","Chioma","Dapo","Fatima"],Hn=["Access Bank","GTBank","First Bank","UBA","Zenith Bank","Kuda","Opay","Palmpay","Wema Bank","Fidelity Bank"];function Va(){const e=[];for(let t=1;t<=47;t++){const a=at[t%at.length],n=t%17===0,i=t%8===0;e.push({id:1e4+t,first_name:a,username:a.toLowerCase()+"_"+t,balance:Math.floor(Math.random()*2e5)+500,tier:Math.min(5,Math.floor(Math.random()*5)+1),rig_level:Math.floor(Math.random()*5),pro_until:i?Date.now()+30*864e5:0,banned:n,role:t===1?"admin":"user",country:"NG",created_at:new Date(Date.now()-t*864e5*3).toISOString(),last_active:new Date(Date.now()-Math.random()*864e5*7).toISOString(),ref_count:Math.floor(Math.random()*20),total_mined:Math.floor(Math.random()*5e5),avatar_url:G(t%10+1)})}return e}function Wn(e){const t=Va(),a=t.find(n=>n.id===e)||t[0];return{...a,transactions:v.transactions.slice(0,10),withdrawals:qa().slice(0,5),stats:{totalEarned:a.total_mined||0,totalWithdrawn:Math.floor(Math.random()*5e4),adsWatched:Math.floor(Math.random()*500),lastLogin:a.last_active}}}function qa(){const e=[],t=["pending","completed","completed","completed","failed","needs_approval"];for(let a=1;a<=23;a++){const n=t[a%t.length],i=Math.floor(Math.random()*5e4)+1e3;e.push({id:2e3+a,user_id:1e4+Math.floor(Math.random()*47),user_name:at[a%at.length],amount_orl:i,net_fiat:"₦"+(i*2.774).toFixed(0),method:["bank","usdt","airtime"][a%3],status:n,created_at:new Date(Date.now()-a*36e5*5).toISOString(),wallet_info:a%3===0?"TXYZ123...":`${Hn[a%Ga.length]} • ${String(Math.floor(Math.random()*1e10)).padStart(10,"0")}`,flw_reference:n==="completed"?"FLW-REF-"+(1e3+a):null,failure_reason:n==="failed"?"Bank account verification failed":null})}return e}let Ce=null,Ye=null;function ba(e,t,a,n=800,i=s=>s.toFixed(2)){if(!e)return;if(t===a){e.textContent=i(a);return}const s=performance.now(),o=a-t;e.classList.remove("flash-up","flash-down"),e.offsetWidth,e.classList.add(o>0?"flash-up":"flash-down"),Ye&&cancelAnimationFrame(Ye);function r(l){const m=l-s,c=Math.min(m/n,1),p=1-Math.pow(1-c,3),h=t+o*p;e.textContent=i(h),c<1?Ye=requestAnimationFrame(r):e.textContent=i(a)}Ye=requestAnimationFrame(r)}function Fn(){const e=$();if(!e._loaded)return;const t=e.balance||0,a=document.getElementById("balance"),n=document.getElementById("wBalance");if(Ce!==null&&Ce!==t){const i=t-Ce,s=o=>Number(o).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});a&&ba(a,Ce,t,800,s),n&&ba(n,Ce,t,800,s),i>=500&&_e()}Ce=t}const ya=["#fbbf24","#f59e0b","#10b981","#3b82f6","#8b5cf6","#ef4444"];function _e(e=40){for(let t=0;t<e;t++)setTimeout(()=>jn(),t*20)}function jn(){const e=document.createElement("div");e.className="confetti-piece",e.style.left=Math.random()*100+"vw",e.style.background=ya[Math.floor(Math.random()*ya.length)],e.style.animationDuration=2+Math.random()*1.5+"s",e.style.animationDelay=Math.random()*.3+"s",e.style.transform=`rotate(${Math.random()*360}deg)`,Math.random()>.5&&(e.style.borderRadius="50%",e.style.width="10px",e.style.height="10px"),document.body.appendChild(e),setTimeout(()=>e.remove(),4e3)}function Gn(e){!e||e.dataset.rippleAttached||(e.dataset.rippleAttached="1",e.addEventListener("click",t=>{const a=e.getBoundingClientRect(),n=Math.max(a.width,a.height),i=t.clientX-a.left-n/2,s=t.clientY-a.top-n/2,o=document.createElement("span");o.className="ripple",o.style.width=o.style.height=n+"px",o.style.left=i+"px",o.style.top=s+"px",e.appendChild(o),setTimeout(()=>o.remove(),600)}))}function wa(){document.querySelectorAll(".btn, .faucet-btn, .nav-btn, .seg button, .chip-go, .pg-btn, .referral button, .method, .day, .lb-row").forEach(Gn)}const ka=["mine","play","earn","wallet"];function zn(e){const t=$()._screen,a=ka.indexOf(t),n=ka.indexOf(e),i=document.getElementById("screen-"+e);i&&(i.classList.remove("slide-left","slide-right"),i.offsetWidth,n>a?i.classList.add("slide-left"):n<a&&i.classList.add("slide-right"),J("_screen",e))}let ye=null;function Ka(){ye&&ye.disconnect(),"IntersectionObserver"in window&&(ye=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("fade-in"),ye.unobserve(t.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"}),document.querySelectorAll(".feat, .card, .item").forEach(e=>{ye.observe(e)}))}function Vn(){if(!ye)return Ka();document.querySelectorAll(".feat:not(.fade-in), .card:not(.fade-in), .item:not(.fade-in)").forEach(e=>{ye.observe(e)})}function La(){const e=$();if(!e._loaded)return;const t=document.getElementById("refuelBtn");if(t){const o=e.tankMined||0;Math.max(0,(40-o)/40*100)<30&&!t.disabled?t.classList.add("pulse-glow"):t.classList.remove("pulse-glow")}const a=document.getElementById("faucetBtn");a&&(Date.now()-(e.faucetLast||0)>=3600*1e3?a.classList.add("pulse-glow"):a.classList.remove("pulse-glow"));const n=document.getElementById("lottoAdBtn");n&&n.classList.add("pulse-glow");const i=document.getElementById("streakClaim");i&&i.classList.add("pulse-glow");const s=document.getElementById("videoWallBtn");s&&s.classList.add("ready")}function qn(){const e=document.querySelector(".scroll"),t=document.querySelector(".balance-card");if(!e||!t)return;let a=!1;e.addEventListener("scroll",()=>{a||(requestAnimationFrame(()=>{const n=e.scrollTop;n<200&&(t.style.transform=`translateY(${n*.15}px) scale(${1-n*5e-4})`,t.style.opacity=String(1-n*.003)),a=!1}),a=!0)})}function Sa(){const e=$();if(!e._loaded)return;const t=document.getElementById("engineStatus");if(!t)return;const n=(e.tankMined||0)<40-1e-9,i=t.querySelector(".live-dot");i&&i.remove();const s=document.createElement("span");s.className="live-dot"+(n?"":" idle"),t.insertBefore(s,t.firstChild)}function Kn(){const e=d("refuelBtn"),t=d("boostBtn"),a=d("rigBtn");e&&e.addEventListener("click",()=>{const n=$(),i=Date.now()<(n.proUntil||0),s=async()=>{try{const o=await L("/api/mining/refuel",{method:"POST"});I(o),R(),y({title:"Engine refueled",message:"Fuel at 100%",variant:"success"}),_e(15)}catch{}};i?s():ie("Refueling engine…","Reward unlocks when the ad finishes.",15,s)}),t&&t.addEventListener("click",()=>{const n=$(),i=Date.now()<(n.boostUntil||0),s=(n.tankMined||0)<me()-1e-9;i||!s||ie("Loading boost…","1.2× mining speed for 3 hours.",15,async()=>{try{const o=await L("/api/mining/boost",{method:"POST"});I(o),R(),y({title:"1.2× Boost active",message:"Speed increased by 20% for 3h",variant:"success"})}catch{}})}),a&&a.addEventListener("click",async()=>{const n=$(),i=Ct(),s=i[n.rigLevel+1];if(!(!s||n.balance<s.cost))try{const o=await L("/api/mining/rig-upgrade",{method:"POST"});I(o),R();const r=i[$().rigLevel]||s;ee(0,`${r.name} online`,`Now mining ${U(me()/(r.sessionMin/60),1)} ORL/hr — faster sessions.`)}catch{}})}function Fe(){return $().economy||{}}let Je=0,Re=!1;function Xn(){const e=d("wheel");if(!e)return;const t=Fe().WHEEL_PRIZES||[120,60,300,0,40,20,600,8],a=t.length,n=360/a,i=100,s=100,o=92,r="#141a2a",l="#1e2538";let m="";m+=`<defs>
    <!-- Gold rim gradient — matches .btn-primary gradient -->
    <linearGradient id="wheelRim" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fbbf24"/>
      <stop offset="0.5" stop-color="#f59e0b"/>
      <stop offset="1" stop-color="#d97706"/>
    </linearGradient>
    <!-- Subtle top highlight for segments (matches card inset shadow) -->
    <radialGradient id="segHighlight" cx="0.5" cy="0.25" r="0.6">
      <stop offset="0" stop-color="rgba(255,255,255,0.06)"/>
      <stop offset="0.6" stop-color="rgba(255,255,255,0)"/>
      <stop offset="1" stop-color="rgba(0,0,0,0.2)"/>
    </radialGradient>
  </defs>`,m+=`<circle cx="${i}" cy="${s}" r="${o+5}" fill="none" stroke="url(#wheelRim)" stroke-width="5"/>`,m+=`<circle cx="${i}" cy="${s}" r="${o+2}" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="1"/>`;for(let p=0;p<a;p++){const h=(p*n-90)*Math.PI/180,u=((p+1)*n-90)*Math.PI/180,f=i+o*Math.cos(h),b=s+o*Math.sin(h),_=i+o*Math.cos(u),x=s+o*Math.sin(u),E=p%2===0?l:r;m+=`<path d="M${i},${s} L${f},${b} A${o},${o} 0 0 1 ${_},${x} Z" fill="${E}"/>`,m+=`<path d="M${i},${s} L${f},${b} A${o},${o} 0 0 1 ${_},${x} Z" fill="url(#segHighlight)" pointer-events="none"/>`,m+=`<line x1="${i}" y1="${s}" x2="${f}" y2="${b}" stroke="rgba(251,191,36,0.18)" stroke-width="0.6"/>`;const B=(h+u)/2,N=i+o*.62*Math.cos(B),se=s+o*.62*Math.sin(B),de=p*n+n/2,te=t[p],ce=te>=300,ae=te===0?"MISS":te;let M,P,H;te===0?(M="#64748b",P=11,H=600):ce?(M="#fbbf24",P=15,H=800):(M="#fde68a",P=13,H=700),m+=`<text x="${N}" y="${se}" fill="${M}" font-size="${P}" font-family="Space Grotesk" font-weight="${H}" text-anchor="middle" dominant-baseline="middle" transform="rotate(${de} ${N} ${se})" style="letter-spacing:0.03em">${ae}</text>`}m+=`<circle cx="${i}" cy="${s}" r="${o}" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="1.5"/>`,m+=`<circle cx="${i}" cy="${s}" r="${o-1}" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="0.5"/>`,e.innerHTML=m;const c=document.querySelector(".wheel-bezel");if(c&&c.innerHTML===""){let p="";for(let u=0;u<16;u++){const f=u/16*360;p+=`<i style="transform: rotate(${f}deg) translate(0, -133px)"></i>`}c.innerHTML=p}}function Yn(e,t){if(Re)return;Re=!0;const n=360/(Fe().WHEEL_PRIZES||[120,60,300,0,40,20,600,8]).length,i=Je%360,o=((360-(e*n+n/2))%360-i+360)%360,r=Je,l=Je+360*6+o;Je=l;const m=d("wheel");if(m){let f=function(_){return _<.25?_/.25*.45:_<.5?.45+(_-.25)/.25*.25:_<.75?.7+(_-.5)/.25*.15:.85+(_-.75)/.25*.15},b=function(_){const x=_-u,E=Math.min(x/4600,1),B=f(E),N=r+(l-r)*B;m.style.transform=`rotate(${N}deg)`,E<1&&Re?requestAnimationFrame(b):m.style.transform=`rotate(${l}deg)`};var c=f,p=b;const u=performance.now();requestAnimationFrame(b)}setTimeout(()=>{Re=!1;const h=d("spinBtn");h&&(h.disabled=!1,h.textContent="Spin the wheel"),t>0?(ee(t,"Lucky spin!","Watch an ad to spin again!"),t>=300&&_e(60)):y("So close","No win this time"),R()},4900)}let Ge=!1,gt=!1;function bt(){const e=d("scratchCanvas"),t=d("scratch");if(!e||!t)return;const a=t.getBoundingClientRect();if(a.width===0||a.height===0)return;const n=Math.min(window.devicePixelRatio||1,2);e.width=Math.max(1,Math.floor(a.width*n)),e.height=Math.max(1,Math.floor(a.height*n));const i=e.getContext("2d");i.scale(n,n);const s=i.createLinearGradient(0,0,a.width,a.height);s.addColorStop(0,"#b45309"),s.addColorStop(.45,"#fbbf24"),s.addColorStop(.55,"#f59e0b"),s.addColorStop(1,"#92400e"),i.fillStyle=s,i.fillRect(0,0,a.width,a.height),i.globalAlpha=.18,i.strokeStyle="#fff7e6",i.lineWidth=1;for(let f=-a.height;f<a.width;f+=9)i.beginPath(),i.moveTo(f,0),i.lineTo(f+a.height,a.height),i.stroke();i.globalAlpha=1,i.fillStyle="rgba(28, 17, 9, 0.55)",i.font='700 12px "Space Grotesk", sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(gt?"SCRATCH TO REVEAL":'TAP "GET A SCRATCH CARD"',a.width/2,a.height/2),i.globalCompositeOperation="destination-out",i.lineCap="round",i.lineJoin="round",i.lineWidth=26;let o=!1,r=null,l=0;const m=()=>{try{const f=i.getImageData(0,0,e.width,e.height).data;let b=0,_=0;for(let x=3;x<f.length;x+=160)f[x]===0&&b++,_++;return _?b/_:0}catch{return 0}},c=f=>{const b=e.getBoundingClientRect(),_=f.touches?f.touches[0]:f;return{x:_.clientX-b.left,y:_.clientY-b.top}},p=f=>{Ge||!gt||(o=!0,r=c(f),f.preventDefault())},h=f=>{if(!o||Ge)return;const b=c(f);i.beginPath(),i.moveTo(r.x,r.y),i.lineTo(b.x,b.y),i.stroke(),r=b,f.preventDefault()},u=()=>{o&&(o=!1,l=m(),l>.45&&Jn())};e.addEventListener("mousedown",p),e.addEventListener("mousemove",h),window.addEventListener("mouseup",u),e.addEventListener("touchstart",p,{passive:!1}),e.addEventListener("touchmove",h,{passive:!1}),e.addEventListener("touchend",u)}function Jn(){if(Ge)return;Ge=!0;const e=d("scratch");e&&e.classList.add("revealed");const t=Number($()._pendingScratchPrize||0);t>0?(y("Scratch win!",`+${t} ORL`),ee(t,"Scratch win!","")):y("No luck","Try the next one"),R()}function Zn(e){const t=d("scratch"),a=d("scratchPrize");t&&(Ge=!1,gt=!0,t.classList.remove("revealed","locked"),$()._pendingScratchPrize=e,a&&(a.innerHTML=e>0?`+${e}<small>ORL</small>`:"MISS<small>try again</small>"),bt())}let we=!1,Ze=0;function Qn(e){const t=d("coinflipCoin");if(!t)return;const a=e==="tails"?180:0,n=Ze%360,i=(a-n+360)%360,s=Ze,o=Ze+360*10+i;Ze=o;const r=3e3,l=performance.now();function m(f){return f<.25?f/.25*.45:f<.5?.45+(f-.25)/.25*.25:f<.75?.7+(f-.5)/.25*.15:.85+(f-.75)/.25*.15}function c(f){return-120*Math.sin(f*Math.PI)}function p(f){return 1+.25*Math.sin(f*Math.PI)}function h(f){if(f<.95)return 0;const b=(f-.95)/.05;return-8*Math.sin(b*Math.PI)}function u(f){const b=f-l,_=Math.min(b/r,1),x=m(_),E=s+(o-s)*x,B=c(_)+h(_),N=p(_);t.style.transform=`translateY(${B}px) scale(${N}) rotateY(${E}deg)`,_<1&&we?requestAnimationFrame(u):t.style.transform=`translateY(0px) scale(1) rotateY(${o}deg)`}requestAnimationFrame(u)}function ei(){function e(){const h=Fe(),u=d("coinflipResult");u&&!we&&h.COINFLIP_WIN&&(u.textContent=`Pick heads or tails · win ${h.COINFLIP_WIN} ORL`);const f=d("lottoBuyBtn");f&&h.LOTTO_TICKET_ORL&&(f.innerHTML=`Buy ticket<small>${h.LOTTO_TICKET_ORL} ORL</small>`)}e();const t=d("spinBtn"),a=document.querySelector(".wheel-hub"),n=()=>{if(Re)return;t&&(t.disabled=!0,t.textContent="Spinning…"),ie("Loading spin…","Watch an ad to spin the wheel.",10,async()=>{try{const u=await L("/api/play/spin",{method:"POST"});I(u),Yn(u.prizeIndex??0,u.prizeAmount??0)}catch{t&&(t.disabled=!1,t.textContent="Spin the wheel")}})};t&&t.addEventListener("click",n),a&&(a.style.cursor="pointer",a.addEventListener("click",n));const i=d("scratchBtn");i&&i.addEventListener("click",()=>{ie("Loading card…","Scratch to reveal your prize.",8,async()=>{try{const h=await L("/api/play/scratch",{method:"POST"});I(h),Zn(h.prizeAmount??0)}catch{}})}),setTimeout(()=>{const h=d("scratch");h&&h.classList.add("locked"),bt()},50);const s=document.querySelector('.nav-btn[data-screen="play"]');s&&s.addEventListener("click",()=>setTimeout(bt,120));const o=d("chestBtn");o&&o.addEventListener("click",()=>{ie("Filling chest…","Each ad gets you closer to the loot.",10,async()=>{try{const h=await L("/api/play/chest",{method:"POST"});if(I(h),h.chestOpened&&h.prizeAmount)ee(h.prizeAmount,"Chest unlocked!","Big haul. Fill another one?"),_e(40);else{const u=$(),f=Fe().CHEST_GOAL||5;y("Chest filling",`${u.chestProgress||0}/${f}`)}R()}catch{}})});const r=d("lottoAdBtn");r&&r.addEventListener("click",()=>{ie("Loading ticket…","Watch to grab a free entry.",10,async()=>{try{const h=await L("/api/play/lottery/ticket",{method:"POST",body:{type:"ad"}});I(h),R(),y("Ticket added","Good luck tonight")}catch{}})});const l=d("lottoBuyBtn");l&&l.addEventListener("click",async()=>{const h=$(),u=Fe().LOTTO_TICKET_ORL||750;if(h.balance<u){y("Not enough ORL",`Need ${u}`);return}try{const f=await L("/api/play/lottery/ticket",{method:"POST",body:{type:"buy"}});I(f),R(),y("Ticket bought","Entry confirmed")}catch{}});const m=d("cfHeadsBtn"),c=d("cfTailsBtn");function p(h){if(we)return;const u=d("coinflipResult");we=!0,u&&(u.textContent="Flipping…",u.classList.remove("win")),ie("Loading coin flip…","Watch an ad to flip the coin.",8,async()=>{try{const f=await L("/api/play/coinflip",{method:"POST",body:{choice:h}});Qn(f.result),setTimeout(()=>{I(f),f.won?(ee(f.prizeAmount,"You won the flip!",`Landed on ${f.result}.`),u&&(u.textContent=`Landed on ${f.result} · +${f.prizeAmount} ORL`,u.classList.add("win")),_e(25)):(y("Coin landed on "+f.result,`+${f.prizeAmount} ORL consolation`),u&&(u.textContent=`Landed on ${f.result} · +${f.prizeAmount} ORL`)),R(),we=!1},3100)}catch{we=!1,e()}})}m&&m.addEventListener("click",()=>p("heads")),c&&c.addEventListener("click",()=>p("tails")),Xa()}function Xa(e){const t=d("leaderboard");if(!t)return;const a=$(),n=e||a.leaderboard||[];let i="";n.length?i=n.map((m,c)=>{const p=m.first_name||m.name||"Anonymous",h=m.balance!==void 0?A(m.balance):0,u=(p.replace("@","")[0]||"A").toUpperCase(),f=m.avatar_url||m.photo_url,b=f?`<div class="lb-av"><img src="${f}" alt="" onerror="this.parentElement.textContent='${u}'" /></div>`:`<div class="lb-av">${u}</div>`;return`<div class="lb-row"><div class="lb-rank ${c<3?"top":""}">${c+1}</div>
        ${b}
        <div class="lb-name">${p}</div><div class="lb-amt">${h} ORL</div></div>`}).join(""):i='<div style="text-align:center;padding:20px;color:var(--ink-soft);font-size:13px">Leaderboard will update as users mine ORL.</div>';const s=a.firstName?a.firstName[0].toUpperCase():"A",o=a._userRank?a._userRank:"—",r=a.avatarUrl||a.photoUrl,l=r?`<div class="lb-av" id="lbAv"><img src="${r}" alt="" onerror="this.parentElement.textContent='${s}'" /></div>`:`<div class="lb-av" id="lbAv">${s}</div>`;i+=`<div class="lb-row lb-me"><div class="lb-rank">${o}</div>${l}
    <div class="lb-name">You<small>climb to reach the prize pool</small></div><div class="lb-amt">${A(a.balance)} ORL</div></div>`,t.innerHTML=i}function $e(){return Re||we}const ti='<svg viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7L8 5z" fill="#e0a25b"/></svg>',ge={twitter:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',telegram:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',youtube:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',instagram:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>',discord:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',tiktok:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'};function Ea(e){if(!e)return ti;const t=e.toLowerCase();return t.includes("x.com")||t.includes("twitter.com")?ge.twitter:t.includes("t.me")||t.includes("telegram")?ge.telegram:t.includes("youtube.com")||t.includes("youtu.be")?ge.youtube:t.includes("instagram.com")?ge.instagram:t.includes("discord.com")||t.includes("discord.gg")?ge.discord:t.includes("tiktok.com")?ge.tiktok:ge.globe}function _a(e,t){return`<div class="chip-go">${e?"Done":t}</div>`}function $t(){const e=$(),t=e.tasks&&e.tasks.length?e.tasks:[],a=e.featuredTasks&&e.featuredTasks.length?e.featuredTasks:[],n=e.completedTasks||{},i=d("taskList");i&&(t.length?i.innerHTML=t.map(o=>`
        <div class="item ${n[o.id]?"done":""}" data-kind="tasks" data-id="${o.id}" data-r="${o.r}" data-url="${o.url||""}">
          <div class="item-ic">${Ea(o.url)}</div>
          <div class="item-body"><div class="item-title">${o.title}</div><div class="item-sub">${o.sub}</div></div>
          ${_a(n[o.id],"+"+o.r+" ORL")}</div>`).join(""):i.innerHTML='<div style="text-align:center;padding:15px;color:var(--ink-soft);font-size:13px">Loading tasks...</div>');const s=d("featuredList");s&&(a.length?s.innerHTML=a.map(o=>`
        <div class="item featured ${n[o.id]?"done":""}" data-kind="featured" data-id="${o.id}" data-r="${o.r}" data-url="${o.url||""}">
          <div class="item-ic">${Ea(o.url)}</div>
          <div class="item-body"><div class="item-title">${o.title}</div><div class="item-sub">${o.sub}</div></div>
          ${_a(n[o.id],"+"+o.r+" ORL")}</div>`).join(""):s.innerHTML='<div style="text-align:center;padding:15px;color:var(--ink-soft);font-size:13px">Loading featured tasks...</div>'),document.querySelectorAll('[data-kind="tasks"], [data-kind="featured"]').forEach(o=>{o.addEventListener("click",()=>{const{kind:r,id:l,url:m}=o.dataset,c=parseInt(o.dataset.r);if(($().completedTasks||{})[l])return;m&&hn(m),ie("Verifying task…","Reward credits when you complete it.",10,async()=>{try{const f=await L("/api/earn/task",{method:"POST",body:{taskId:l,kind:r}});I(f),$t(),R(),ee(c,"Reward earned","Nice. Keep stacking ORL.")}catch{}})})})}function At(){const e=$(),t=d("streakStrip");if(!t)return;const a=e.streakAmounts&&e.streakAmounts.length?e.streakAmounts:[40,70,110,170,240,330,440];t.innerHTML=a.map((i,s)=>{const o=s+1,r=o<e.streakDay||o===e.streakDay&&e.streakClaimedToday,l=o===e.streakDay&&!e.streakClaimedToday;return`<div class="day ${r?"claimed":l?"today":""}" ${l?'id="streakClaim"':""}><div>D${o}</div><div class="d-amt">${i}</div></div>`}).join("");const n=d("streakClaim");n&&n.addEventListener("click",async()=>{try{S("light");const i=await L("/api/earn/streak",{method:"POST"});I(i.user),R(),At(),y("Daily streak claimed",`+${a[(e.streakDay||1)-1]} ORL`)}catch{}})}function ai(){const e=d("videoWallBtn");e&&e.addEventListener("click",()=>{ie("Video ad loading…","Watch to earn 30 ORL.",15,async()=>{try{const t=await L("/api/earn/video-wall",{method:"POST"});I(t.user||t),R(),y("Video reward",`+${t.reward||30} ORL`)}catch{}})})}function ni(){const e=d("faucetBtn");e&&e.addEventListener("click",()=>{const t=$();Date.now()-(t.faucetLast||0)<3600*1e3||ie("Claiming bonus…","Your hourly drip is loading.",10,async()=>{try{const n=await L("/api/earn/faucet",{method:"POST"});I(n),R(),y("Hourly bonus",`+${n.reward||20} ORL`)}catch{}})})}function ii(){const e=d("copyRef"),t=d("shareRef"),a=d("refCode");e&&e.addEventListener("click",()=>{var i;const n=(a==null?void 0:a.textContent)||"";(i=navigator.clipboard)==null||i.writeText(n),y("Invite link copied","Share it anywhere")}),t&&t.addEventListener("click",()=>{const n=(a==null?void 0:a.textContent)||"",i=n.startsWith("http")?n:"https://"+n;fn(i,"Mine ORL free on Orael ⛏️"),y("Link shared","")})}function si(){const e=d("adsgramTaskList");if(e){e.innerHTML='<div style="font-size:12px;color:var(--ink-soft);text-align:center;width:100%">No Adsgram tasks configured.</div>';return}}function oi(){$t(),si(),At(),ai(),ni(),ii()}let Ae=1,Qe=1,ke=null,Y=null,Se=null,nt=[];function ri(){const e=d("withdrawBtn");Oe(1),en(),e&&e.addEventListener("click",fi);const t=d("withdrawAmountInput");t==null||t.addEventListener("input",()=>{R()});const a=d("withdrawUnitToggle");a==null||a.addEventListener("click",()=>{S("light");const s=($()._withdrawUnit||"orl")==="orl"?"ngn":"orl";J("_withdrawUnit",s);const o=d("withdrawAmountInput");o&&(o.value=""),R()}),gi(),ci(),hi(),bi(),document.addEventListener("click",n=>{const i=n.target.closest(".nav-btn");i&&i.dataset.screen==="wallet"&&Oe(1)})}function yt(){var n;const t=(n=$()._selectedMethod)==null?void 0:n.id;if(!t)return;const a=d("walletInfoBox");a&&(t==="bank"?li(a):t==="usdt"?(a.style.display="",a.innerHTML=`
      <div class="fee-row"><span>USDT TRC20 wallet address</span></div>
      <input type="text" id="walletInfoInput" placeholder="TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--bg-inset);color:var(--ink);font-size:13px;margin-top:6px" />
    `):t==="airtime"?(a.style.display="",a.innerHTML=`
      <div class="fee-row"><span>Phone number (Nigeria)</span></div>
      <input type="tel" id="phoneNumberInput" placeholder="08012345678" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--bg-inset);color:var(--ink);font-size:13px;margin-top:6px" />
    `):a.style.display="none")}function li(e){var o;e.style.display="";const t=nt.length>0?nt.map(r=>`<option value="${r.id}">${r.bank_name} • ${r.account_number} (${r.account_name})</option>`).join(""):"";e.innerHTML=`
    <div class="fee-row" style="margin-bottom:8px">
      <span>Saved bank account</span>
    </div>
    <select id="savedBankSelect" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--bg-inset);color:var(--ink);font-size:13px;margin-bottom:12px">
      <option value="">— Use new account —</option>
      ${t}
    </select>

    <div id="newBankFields" style="display:none">
      <div class="fee-row" style="margin-bottom:8px;margin-top:12px">
        <span>Select bank</span>
      </div>
      
      <div id="bankSelectTrigger" class="custom-select-trigger" style="margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:8px">
          <div id="selectedBankIcon" style="width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,0.06);display:none;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:var(--gold-1);overflow:hidden;flex-shrink:0;"></div>
          <span id="selectedBankText">— Select bank —</span>
        </div>
        <svg viewBox="0 0 24 24" fill="none" style="width:16px;height:16px;stroke:var(--ink-soft);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:transform 0.2s;"><path d="M6 9l6 6 6-6"/></svg>
      </div>

      <div class="fee-row" style="margin-bottom:8px">
        <span>Account number (10 digits)</span>
      </div>
      <input type="text" id="accountNumberInput" placeholder="0123456789" maxlength="10" inputmode="numeric" style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--bg-inset);color:var(--ink);font-size:13px;margin-bottom:12px" />

      <button class="btn btn-ghost" id="resolveAccountBtn" style="margin-bottom:12px">Verify account name</button>

      <div class="fee-row" style="margin-bottom:8px">
        <span>Account name (auto-filled)</span>
      </div>
      <input type="text" id="accountNameInput" placeholder="Will appear after verification" disabled style="width:100%;padding:10px;border-radius:10px;border:1px solid var(--line);background:var(--bg-2);color:var(--gold-1);font-size:13px;margin-bottom:12px;font-weight:600" />
    </div>
  `;const a=d("savedBankSelect"),n=d("newBankFields");a&&n&&(n.style.display=a.value?"none":"block"),a==null||a.addEventListener("change",()=>{n.style.display=a.value?"none":"block",S("light")});const i=d("bankSelectTrigger");i==null||i.addEventListener("click",()=>{S("light");const r=d("bankModalVeil");r&&r.classList.add("show");const l=d("bankModalSearchInput");l&&(l.value="",l.focus()),Ya("")});const s=d("accountNumberInput");s==null||s.addEventListener("input",()=>{s.value=s.value.replace(/\D/g,"").slice(0,10),Se=null,J("_resolvedAccountName",null);const r=d("accountNameInput");r&&(r.value="")}),(o=d("resolveAccountBtn"))==null||o.addEventListener("click",mi),di()}async function di(){const e=d("bankSelectTrigger");if(e)try{e.classList.add("loading");const t=d("selectedBankText");if(t&&(t.textContent="Loading banks..."),!ke){const a=await L("/api/wallet/banks");ke=ui(a.banks||[])}e.classList.remove("loading"),Ja()}catch{e.classList.remove("loading");const a=d("selectedBankText");a&&(a.textContent="Failed to load banks")}}function ci(){const e=d("bankModalVeil"),t=d("bankModalClose"),a=d("bankModalSearchInput");t==null||t.addEventListener("click",()=>{e==null||e.classList.remove("show"),S("light")}),e==null||e.addEventListener("click",n=>{n.target===e&&(e.classList.remove("show"),S("light"))}),a==null||a.addEventListener("input",()=>{Ya(a.value)})}function Ya(e=""){const t=d("bankModalList");if(!t)return;if(!ke||ke.length===0){t.innerHTML='<div style="text-align:center;padding:20px;color:var(--ink-soft);font-size:13px">Loading banks...</div>';return}const a=e?ke.filter(n=>n.name.toLowerCase().includes(e.toLowerCase())):ke;if(a.length===0){t.innerHTML='<div style="text-align:center;padding:20px;color:var(--ink-soft);font-size:13px">No banks found.</div>';return}t.innerHTML=a.map(n=>{const i=Za(n.name);return`
      <div class="bank-item" data-code="${n.code}">
        <div style="position:relative; width:28px; height:28px; border-radius:50%; overflow:hidden; background:rgba(255,255,255,0.04); flex-shrink:0; display:flex; align-items:center; justify-content:center;">
          <img src="${Qa(n.code,n.name)}" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div style="width:100%; height:100%; display:none; align-items:center; justify-content:center; font-size:10px; font-weight:700; color:var(--gold-1); background:rgba(255,255,255,0.06); text-transform:uppercase;">${i}</div>
        </div>
        <span style="font-size:13.5px;font-weight:500;color:var(--ink);">${n.name}</span>
      </div>
    `}).join(""),t.querySelectorAll(".bank-item").forEach(n=>{n.addEventListener("click",()=>{var o;const i=n.dataset.code;Y=ke.find(r=>r.code===i)||null,S("light"),Ja(),Se=null,J("_resolvedAccountName",null);const s=d("accountNameInput");s&&(s.value=""),(o=d("bankModalVeil"))==null||o.classList.remove("show")})})}function Ja(){const e=d("selectedBankText"),t=d("selectedBankIcon");if(!(!e||!t))if(Y){e.textContent=Y.name,t.style.display="flex";const a=Za(Y.name);t.innerHTML=`
      <img src="${Qa(Y.code,Y.name)}" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div style="width:100%; height:100%; display:none; align-items:center; justify-content:center; background:rgba(255,255,255,0.06); font-size:8px; font-weight:700; color:var(--gold-1);">${a}</div>
    `}else e.textContent="— Select bank —",t.style.display="none",t.innerHTML=""}function Za(e){if(!e)return"";const t=e.split(/\s+/).filter(Boolean);return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():e.slice(0,2).toUpperCase()}function Qa(e,t){if(!t)return"";const a=t.toLowerCase();return e==="044"||a.includes("access bank")?a.includes("diamond")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/access-bank-diamond.png":"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/access-bank.png":e==="058"||a.includes("gtbank")||a.includes("guaranty trust")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/guaranty-trust-bank.png":e==="033"||a.includes("uba")||a.includes("united bank for africa")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/united-bank-for-africa.png":e==="057"||a.includes("zenith")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/zenith-bank.png":e==="011"||a.includes("first bank")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/first-bank-of-nigeria.png":e==="090267"||e==="50211"||a.includes("kuda")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/kuda-bank.png":e==="100004"||e==="999992"||e==="305"||a.includes("opay")||a.includes("paycom")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/paycom.png":e==="100033"||e==="999991"||a.includes("palmpay")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/palmpay.png":e==="090405"||e==="50515"||a.includes("moniepoint")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/moniepoint-mfb-ng.png":e==="232"||a.includes("sterling")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/sterling-bank.png":e==="035"||a.includes("wema")?a.includes("alat")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/alat-by-wema.png":"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/wema-bank.png":e==="070"||a.includes("fidelity")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/fidelity-bank.png":e==="032"||a.includes("union bank")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/union-bank-of-nigeria.png":e==="050"||a.includes("ecobank")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/ecobank-nigeria.png":e==="076"||a.includes("polaris")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/polaris-bank.png":e==="221"||a.includes("stanbic")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/stanbic-ibtc-bank.png":e==="068"||a.includes("standard chartered")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/standard-chartered-bank.png":e==="215"||a.includes("unity")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/unity-bank.png":e==="100"||a.includes("suntrust")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/suntrust-bank.png":e==="101"||a.includes("providus")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/providus-bank.png":e==="301"||a.includes("jaiz")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/jaiz-bank.png":e==="082"||a.includes("keystone")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/keystone-bank.png":e==="214"||a.includes("fcmb")||a.includes("first city monument")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/first-city-monument-bank.png":e==="102"||a.includes("globus")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/globus-bank.png":e==="303"||a.includes("lotus")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/lotus-bank.png":e==="302"||a.includes("taj")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/taj-bank.png":e==="030"||a.includes("heritage")?"https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/heritage-bank.png":`https://cdn.jsdelivr.net/gh/ridbay/nigerian-banks@master/src/logos/${a.replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}.png`}function ui(e){const t=["opay","palmpay","moniepoint","kuda","access bank","gtbank","guaranty trust","zenith","united bank for africa","uba","first bank","fcmb","sterling","wema","fidelity","union bank","ecobank","stanbic"];return[...e].sort((a,n)=>{const i=a.name.toLowerCase(),s=n.name.toLowerCase();let o=t.findIndex(l=>i.includes(l)),r=t.findIndex(l=>s.includes(l));return o===-1&&(o=999),r===-1&&(r=999),o!==r?o-r:a.name.localeCompare(n.name)})}async function mi(){const e=d("accountNumberInput"),t=d("accountNameInput"),a=d("resolveAccountBtn");if(!Y||!(e!=null&&e.value)){y({title:"Select bank + account",message:"Pick a bank and enter your 10-digit account number",variant:"error"});return}if(e.value.length!==10){y({title:"Invalid account",message:"Account number must be 10 digits",variant:"error"});return}a.disabled=!0,a.textContent="Verifying...",t.value="";try{const n=await L("/api/wallet/resolve-account",{method:"POST",body:{account_number:e.value,account_bank:Y.code}});Se=n.account_name,J("_resolvedAccountName",n.account_name),t.value=n.account_name,S("success"),y({title:"Account verified",message:n.account_name,variant:"success"})}catch(n){Se=null,J("_resolvedAccountName",null),y({title:"Verification failed",message:n.message||"Could not verify account",variant:"error"})}finally{a.disabled=!1,a.textContent="Verify account name"}}async function en(){try{nt=(await L("/api/wallet/bank-accounts")).accounts||[];const t=d("walletInfoBox");t&&t.style.display!=="none"&&yt()}catch{}}function it(e,t){const a=d("pinModalVeil"),n=d("pinModalTitle"),i=d("pinModalDesc"),s=d("pinInput"),o=d("pinConfirmGroup"),r=d("pinConfirmInput"),l=d("pinModalCancel"),m=d("pinModalProceed");if(!a||!n||!i||!s||!o||!r||!l||!m)return;const c=s.cloneNode(!0),p=r.cloneNode(!0);s.parentNode.replaceChild(c,s),r.parentNode.replaceChild(p,r),c.value="",p.value="";const h=x=>{x.target.value=x.target.value.replace(/\D/g,"").slice(0,4)};c.addEventListener("input",h),p.addEventListener("input",h),e==="set"?(n.textContent="Set Withdrawal PIN",i.textContent="Create a secure 4-digit PIN to authorize withdrawals. Keep this safe!",o.style.display="block",m.textContent="Save PIN"):(n.textContent="Enter Withdrawal PIN",i.textContent="Enter your 4-digit PIN to proceed with the withdrawal.",o.style.display="none",m.textContent="Proceed");const u=()=>{a.classList.remove("show")},f=l.cloneNode(!0),b=m.cloneNode(!0);l.parentNode.replaceChild(f,l),m.parentNode.replaceChild(b,m),f.addEventListener("click",()=>{S("light"),u()});const _=async()=>{const x=c.value;if(!/^\d{4}$/.test(x)){y({title:"Invalid PIN",message:"PIN must be exactly 4 digits",variant:"error"});return}if(e==="set"){const E=p.value;if(x!==E){y({title:"Mismatch",message:"PINs do not match",variant:"error"});return}b.disabled=!0,b.textContent="Saving...";try{const B=await L("/api/wallet/set-pin",{method:"POST",body:{pin:x}});if(B.success){y({title:"Success",message:"Withdrawal PIN set successfully",variant:"success"}),S("success");const N=$();N.hasPin=!0,I(N),u(),setTimeout(()=>{it("verify",t)},300)}else y({title:"Error",message:B.message||"Failed to set PIN",variant:"error"})}catch(B){y({title:"Error",message:B.message||"Failed to set PIN",variant:"error"})}finally{b.disabled=!1,b.textContent="Save PIN"}}else S("medium"),u(),t.pin=x,pi(t)};b.addEventListener("click",_),c.addEventListener("keydown",x=>{x.key==="Enter"&&_()}),p.addEventListener("keydown",x=>{x.key==="Enter"&&_()}),a.classList.add("show"),setTimeout(()=>c.focus(),200)}async function pi(e){var a;const t=d("withdrawBtn");t&&(t.disabled=!0,t.textContent="Processing...");try{const n=await L("/api/wallet/withdraw",{method:"POST",body:e});if(n.success){I(n.user||n);const i=d("withdrawAmountInput");i&&(i.value=""),R();const s=$(),o=s.economy||{},r=((a=s._selectedMethod)==null?void 0:a.name)||"your account";n.needsApproval?ee(null,"Withdrawal Submitted","Your withdrawal is waiting for admin approval. You'll be notified once it's processed."):ee(null,"Withdrawal Successful",`${n.message||"Your payout is being processed."} Funds will arrive in your ${r} within 24 hours.`),_e(20),en(),Oe(1)}else y({title:"Withdrawal failed",message:n.message||"",variant:"error"})}catch(n){n.message==="Incorrect PIN"&&setTimeout(()=>{it("verify",e)},500)}finally{t&&(t.disabled=!1,R())}}async function fi(){var de,te,ce,ae;const e=$(),t=((de=e.economy)==null?void 0:de.WITHDRAWAL_METHODS)||{},a=(te=e._selectedMethod)==null?void 0:te.id;if(!a||!t[a]){y({title:"Select method",message:"Pick a payout method first",variant:"error"});return}const n=t[a].minOrl;if(e.balance<n){y({title:"Insufficient balance",message:`Minimum is ${n} ORL`,variant:"error"});return}const i=d("withdrawAmountInput"),s=e._withdrawUnit||"orl",o=a==="bank"||a==="airtime";let r=Math.floor(e.balance);if(i&&i.value.trim()!=="")if(o&&s==="ngn"){const M=parseFloat(i.value);if(isNaN(M)||M<=0){y({title:"Invalid amount",message:"Enter a valid amount",variant:"error"});return}r=Math.round(M/e.economy.ORL_TO_NGN)}else{const M=parseInt(i.value);if(isNaN(M)||M<n){y({title:"Amount too low",message:`Minimum is ${n} ORL`,variant:"error"});return}r=M}if(r>e.balance){y({title:"Amount too high",message:`Maximum is ${Math.floor(e.balance)} ORL`,variant:"error"});return}if(r<n){y({title:"Amount too low",message:`Minimum is ${n} ORL`,variant:"error"});return}let l={method:a,amount:r};const c=Date.now()<(e.proUntil||0)?e.economy.WITHDRAWAL_FEE_PRO_PCT:e.economy.WITHDRAWAL_FEE_PCT,p=Math.floor(r*c),h=r-p,u=Math.round(h*e.economy.ORL_TO_NGN);let f="";if(a==="bank"){let M="";const P=d("savedBankSelect");if(P!=null&&P.value){const H=nt.find(oe=>oe.id===parseInt(P.value));if(!H){y({title:"Select account",message:"Saved bank account not found",variant:"error"});return}l.bankAccountId=H.id,M=`
        <div><b>Bank:</b> ${H.bank_name}</div>
        <div><b>Account Number:</b> ${H.account_number}</div>
        <div><b>Account Name:</b> ${H.account_name}</div>
      `}else{if(!Y||!Se){y({title:"Verify account",message:'Click "Verify account name" first',variant:"error"});return}const H=d("accountNumberInput");l.walletInfo=`${Y.code}|${H.value}|${Se}|${Y.name}`,M=`
        <div><b>Bank:</b> ${Y.name}</div>
        <div><b>Account Number:</b> ${H.value}</div>
        <div><b>Account Name:</b> ${Se}</div>
      `}f=`
      <div style="font-weight:700;margin-bottom:8px;color:var(--cu-1);">BANK TRANSFER (NGN)</div>
      ${M}
      <hr style="border:0;border-top:1px solid var(--line);margin:10px 0;" />
      <div><b>Withdrawal Amount:</b> ${A(r)} ORL</div>
      <div><b>Fee (${Math.round(c*100)}%):</b> ${A(p)} ORL</div>
      <div><b>Total Deduction:</b> ${A(r)} ORL</div>
      <div style="font-size:14px;margin-top:6px;color:var(--cu-1);"><b>You Receive: ₦${U(u,2)}</b></div>
    `}else if(a==="airtime"){const M=d("phoneNumberInput"),P=(ce=M==null?void 0:M.value)==null?void 0:ce.trim();if(!P){y({title:"Phone required",message:"Enter phone number",variant:"error"});return}l.phoneNumber=P,f=`
      <div style="font-weight:700;margin-bottom:8px;color:var(--cu-1);">AIRTIME RECHARGE</div>
      <div><b>Phone Number:</b> ${P}</div>
      <hr style="border:0;border-top:1px solid var(--line);margin:10px 0;" />
      <div><b>Withdrawal Amount:</b> ${A(r)} ORL</div>
      <div><b>Fee (${Math.round(c*100)}%):</b> ${A(p)} ORL</div>
      <div><b>Total Deduction:</b> ${A(r)} ORL</div>
      <div style="font-size:14px;margin-top:6px;color:var(--cu-1);"><b>You Receive: ₦${U(u,0)} Airtime</b></div>
    `}else if(a==="usdt"){const M=d("walletInfoInput"),P=(ae=M==null?void 0:M.value)==null?void 0:ae.trim();if(!P){y({title:"Address required",message:"Enter USDT TRC20 address",variant:"error"});return}l.walletInfo=P;const H=h/e.economy.ORL_PER_USD;f=`
      <div style="font-weight:700;margin-bottom:8px;color:var(--cu-1);">USDT TRC20 TRANSFER</div>
      <div style="word-break:break-all;"><b>Address:</b> ${P}</div>
      <hr style="border:0;border-top:1px solid var(--line);margin:10px 0;" />
      <div><b>Withdrawal Amount:</b> ${A(r)} ORL</div>
      <div><b>Fee (${Math.round(c*100)}%):</b> ${A(p)} ORL</div>
      <div><b>Total Deduction:</b> ${A(r)} ORL</div>
      <div style="font-size:14px;margin-top:6px;color:var(--cu-1);"><b>You Receive: $${U(H,2)} USDT</b></div>
    `}const b=d("withdrawConfirmVeil"),_=d("withdrawConfirmCancel"),x=d("withdrawConfirmProceed"),E=d("withdrawConfirmDetails");if(!b||!_||!x||!E)return;E.innerHTML=f;const B=()=>{b.classList.remove("show")},N=_.cloneNode(!0),se=x.cloneNode(!0);_.parentNode.replaceChild(N,_),x.parentNode.replaceChild(se,x),N.addEventListener("click",()=>{S("light"),B()}),se.addEventListener("click",()=>{S("medium"),B(),e.hasPin?it("verify",l):it("set",l)}),b.classList.add("show")}async function Oe(e){try{const t=await L(`/api/user/transactions?page=${e}&limit=15`);Ae=t.pagination.page,Qe=t.pagination.totalPages;const a=d("historyList");if(!a)return;if(!t.transactions.length){a.innerHTML='<div style="text-align:center;padding:20px;color:var(--ink-soft);font-size:13px">No transactions yet.</div>';return}const n='<svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14m0 0 5-5m-5 5-5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',i='<svg viewBox="0 0 24 24" fill="none"><path d="M12 19V5m0 0 5 5m-5-5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';if(a.innerHTML=t.transactions.map((o,r)=>{const l=o.amount<0,m=(o.amount>=0?"+":"")+A(o.amount);let c="";if(o.type==="withdraw"||o.withdrawal_status){const p=o.withdrawal_status||"pending";let h="pending",u="Processing";p==="completed"?(h="completed",u="Success"):p==="failed"||p==="rejected"?(h="failed",u="Failed"):p==="needs_approval"&&(h="approval",u="Awaiting Approval"),c=`<span class="tx-badge ${h}">${u}</span>`}return`<div class="item tx-item" data-index="${r}">
        <div class="item-ic">${l?i:n}</div>
        <div class="item-body">
          <div class="item-title">
            ${o.description||o.type}
          </div>
          <div class="item-sub">${new Date(o.created_at).toLocaleString()}</div>
        </div>
        <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; justify-content: center; gap: 4px; flex-shrink: 0;">
          <div class="item-reward ${l?"neg":"pos"}" style="margin: 0;">${m}</div>
          ${c}
        </div>
      </div>`}).join(""),a.querySelectorAll(".tx-item").forEach(o=>{o.addEventListener("click",()=>{try{S("light");const r=parseInt(o.dataset.index),l=t.transactions[r];if(!l){y({title:"Error",message:"Transaction not found",variant:"error"});return}vi(l)}catch{y({title:"Error",message:"Failed to load details",variant:"error"})}})}),Qe>1){a.innerHTML+=`
        <div class="pagination">
          <button class="pg-btn" id="pgPrev" ${Ae<=1?"disabled":""}>← Prev</button>
          <span class="pg-info">${Ae} / ${Qe}</span>
          <button class="pg-btn" id="pgNext" ${Ae>=Qe?"disabled":""}>Next →</button>
        </div>
      `;const o=d("pgPrev"),r=d("pgNext");o&&o.addEventListener("click",()=>Oe(Ae-1)),r&&r.addEventListener("click",()=>Oe(Ae+1))}}catch(t){console.error("Failed to load history:",t)}}function hi(){const e=d("txDetailsVeil"),t=d("txDetailsClose");!e||!t||(t.addEventListener("click",()=>{S("light"),e.classList.remove("show")}),e.addEventListener("click",a=>{a.target===e&&(S("light"),e.classList.remove("show"))}))}function vi(e){if(!e){y({title:"Error",message:"Transaction data missing",variant:"error"});return}const t=d("txDetailsVeil"),a=d("txDetailsContent");if(!t||!a){y({title:"Error",message:"Modal not available",variant:"error"});return}const n=e.amount<0,i=e.type.toUpperCase().replace(/_/g," "),s=n?"":"+",o=n?"var(--ink)":"var(--emerald)",r='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',l=(p,h)=>`
    <div class="tx-field">
      <span class="tx-field-label">${p}</span>
      <div class="tx-field-value">${h}</div>
    </div>
  `;let c=((p,h,u,f="id")=>`
    <div class="tx-field">
      <span class="tx-field-label">${p}</span>
      <div class="tx-field-value ${f}">
        <span>${h}</span>
        <button class="tx-copy-btn" data-copy="${u}" aria-label="Copy ${p}">${r}</button>
      </div>
    </div>
  `)("Transaction ID",`#${e.id}`,e.id,"id");if(c+=l("Type",i),c+=l("Amount",`<span style="color:${o};font-family:var(--font-mono);">${s}${A(e.amount)} ORL</span>`),c+=l("Date",new Date(e.created_at).toLocaleString()),c+=l("Description",e.description||"N/A"),e.type==="withdraw"||e.type==="withdraw_completed"||e.type==="withdraw_refund"||e.withdrawal_status||e.withdrawal_id){const p=e.withdrawal_status||"pending";let h="Processing",u="pending";if(p==="completed"?(h="Completed",u="completed"):p==="failed"||p==="rejected"?(h="Failed",u="failed"):p==="needs_approval"&&(h="Awaiting Approval",u="approval"),c+=l("Status",`<span class="tx-status-badge ${u}">${h}</span>`),e.net_fiat&&(c+=l("Net Payout",`<span style="color:var(--emerald);font-family:var(--font-mono);">${e.net_fiat}</span>`)),e.fee_orl!==void 0&&e.fee_orl!==null&&(c+=l("Processing Fee",`<span style="font-family:var(--font-mono);">${A(e.fee_orl)} ORL</span>`)),e.wallet_info){const f=e.wallet_info.split("|");let b;f.length>=4?b=`<div style="display:flex;flex-direction:column;gap:2px;">
          <div>${f[3]}</div>
          <div style="font-family:var(--font-mono);font-size:12px;color:var(--ink-mute);">${f[1]}</div>
          <div style="font-size:12px;color:var(--ink-mute);">${f[2]}</div>
        </div>`:b=e.wallet_info,c+=l("Payout Destination",b)}(p==="failed"||p==="rejected")&&e.failure_reason&&(c+=`<div class="tx-failure-box"><b>Failure Reason:</b> ${e.failure_reason}</div>`)}a.innerHTML=c,a.querySelectorAll(".tx-copy-btn").forEach(p=>{p.addEventListener("click",h=>{h.stopPropagation(),S("light");const u=p.dataset.copy;navigator.clipboard.writeText(u).then(()=>{y({title:"Copied",message:"Copied to clipboard",variant:"success"})}).catch(()=>{y({title:"Error",message:"Failed to copy",variant:"error"})})})}),a.scrollTop=0,t.classList.add("show")}function gi(){document.addEventListener("orael:method-change",yt),yt()}function bi(){const e=d("promoBtn"),t=d("promoInput");!e||!t||e.addEventListener("click",async()=>{const a=t.value.trim().toUpperCase();if(!a){y({title:"Enter a code",message:"Please enter a promo code first",variant:"error"});return}e.disabled=!0,e.textContent="Verifying...";try{const n=await L("/api/user/redeem-promo",{method:"POST",body:{code:a}});I(n.user||n),R(),n.reward&&n.reward>0?ee(n.reward,"Promo Redeemed!",n.message||"Reward added to your balance."):ee(null,"Promo Redeemed!",n.message||"Promo code applied successfully."),_e(30),t.value="",Oe(1)}catch(n){y({title:"Redemption failed",message:n.message||"Invalid or expired code",variant:"error"})}finally{e.disabled=!1,e.textContent="Redeem"}})}let He=null,Ta=!1;async function yi(){if(He)return He;try{He=(await L("/api/profile/avatars")).avatars||[]}catch{He=[]}return He}function rt(){const t=$().avatarUrl||"",a=d("avatarGrid");a&&a.querySelectorAll(".avatar-opt").forEach(n=>{n.classList.toggle("sel",n.dataset.url===t)})}async function wi(){const e=d("avatarGrid");if(!e||Ta)return;const t=await yi();e.innerHTML=t.map(a=>`<button class="avatar-opt" data-url="${a}" style="background-image:url('${a}')"></button>`).join(""),Ta=!0,rt(),e.querySelectorAll(".avatar-opt").forEach(a=>{a.addEventListener("click",()=>ki(a.dataset.url))})}async function ki(e){S("light");try{await L("/api/profile/avatar/choose",{method:"POST",body:{avatar:e}});const t=await L("/api/user");I(t),R(),rt(),y({title:"Avatar updated",variant:"success"})}catch{}}function Li(e){return new Promise((t,a)=>{const n=new Image,i=URL.createObjectURL(e);n.onload=()=>{const o=document.createElement("canvas");o.width=256,o.height=256;const r=o.getContext("2d"),l=Math.min(n.width,n.height),m=(n.width-l)/2,c=(n.height-l)/2;r.drawImage(n,m,c,l,l,0,0,256,256),o.toBlob(p=>{URL.revokeObjectURL(i),p?t(p):a(new Error("Failed to encode image"))},"image/png")},n.onerror=()=>{URL.revokeObjectURL(i),a(new Error("Invalid image"))},n.src=i})}async function Si(e){var a,n,i,s,o,r;if(!e)return;S("light");let t;try{t=await Li(e)}catch(l){y({title:"Image error",message:l.message,variant:"error"});return}try{const l=new FormData;l.append("avatar",t,"avatar.png");const c={"X-Telegram-Init-Data":((n=(a=window.Telegram)==null?void 0:a.WebApp)==null?void 0:n.initData)||""};window.__ORAEL_DEV__&&(c["X-Dev-Telegram-Id"]=String(((r=(o=(s=(i=window.Telegram)==null?void 0:i.WebApp)==null?void 0:s.initDataUnsafe)==null?void 0:o.user)==null?void 0:r.id)||""));const p=await fetch("/api/profile/avatar/upload",{method:"POST",headers:c,body:l});if(!p.ok){const f=await p.json().catch(()=>({error:"Upload failed"}));throw new Error(f.error||"Upload failed")}const h=await p.json(),u=await L("/api/user");I(u),R(),rt(),y({title:"Avatar uploaded",variant:"success"})}catch(l){y({title:"Upload failed",message:l.message,variant:"error"})}}async function Ei(){S("light");try{await L("/api/profile/avatar/reset",{method:"POST"});const e=await L("/api/user");I(e),R(),rt(),y({title:"Random avatar assigned",variant:"success"})}catch{}}async function _i(){var t;const e=(t=window.Telegram)==null?void 0:t.WebApp;S("light");try{const a=await L("/api/wallet/pro",{method:"POST"});a.invoiceLink&&(e!=null&&e.openInvoice?e.openInvoice(a.invoiceLink,async n=>{if(n==="paid"){S("success"),y({title:"Payment successful!",message:"Orael Pro active",variant:"success"});const i=await L("/api/user");I(i),R()}else y({title:"Payment incomplete",message:"Subscription not activated",variant:"error"})}):y({title:"Open inside Telegram",message:"Stars checkout requires the Telegram app.",variant:"info"}))}catch{}}async function Ti(){S("light");try{const e=await L("/api/wallet/pro/dev-activate",{method:"POST"});e.state&&I(e.state),R(),y({title:"Pro activated",message:"DEV MODE · 30 days",variant:"success"})}catch{}}async function xi(){S("light");try{const e=await L("/api/mining/pro-chest",{method:"POST"});e.reward&&(I(e.user),R(),ee(e.reward,"Pro chest unlocked!","Free daily chest, no ad needed."))}catch{}}function Ci(){wi();const e=d("avatarFile");e&&e.addEventListener("change",s=>{var r;const o=(r=s.target.files)==null?void 0:r[0];o&&Si(o),s.target.value=""});const t=d("avatarResetBtn");t&&t.addEventListener("click",Ei);const a=d("proBtn");a&&a.addEventListener("click",_i);const n=d("proDevBtn");n&&window.__ORAEL_DEV__&&(n.style.display="",n.addEventListener("click",Ti));const i=d("proChestBtn");i&&i.addEventListener("click",xi)}function w(e){return e==null?"":String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function st(e,t=2){const a=Number(e);return isFinite(a)?a.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t}):"0"}function O(e){const t=Number(e);return isFinite(t)?Math.floor(t).toLocaleString("en-US"):"0"}function Z(e){if(!e)return"—";const t=new Date(e);return isNaN(t.getTime())?w(e):t.toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function ht(e){return isFinite(Number(e))?"$"+st(e,2):"$0.00"}function tn(){const e=$(),t=(e.permissions||"").split(",").map(i=>i.trim()).filter(Boolean),a=e.role==="mod",n=e.role==="admin";return{role:e.role||"user",perms:t,canAll:n||t.includes("all"),isAdmin:n,isMod:a}}let W=null;async function $i(){if(W!==null)return W;try{W=!!(await L("/api/admin/permissions")).isSuperAdmin}catch{W=!1}return W}function le(e="Loading…"){const t=g("adminBody");t&&(t.innerHTML=`<div class="admin-loading"><div class="spinner"></div><span>${w(e)}</span></div>`)}function F(e,t=""){return`<div class="admin-empty">
    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    <div>${w(e)}</div>
    ${t?`<div style="font-size:11.5px;margin-top:4px;color:var(--ink-faint)">${w(t)}</div>`:""}
  </div>`}function g(e){return document.getElementById(e)}function lt(e,t,a,n){return t<=1?`<div class="admin-pagination"><span class="page-info">${O(a)} record${a===1?"":"s"}</span><div class="pages"></div></div>`:`<div class="admin-pagination">
    <span class="page-info">Page ${e} of ${t} · ${O(a)} records</span>
    <div class="pages">
      <button data-page="${e-1}" ${e<=1?"disabled":""}>‹ Prev</button>
      <button data-page="${e+1}" ${e>=t?"disabled":""}>Next ›</button>
    </div>
  </div>`}function dt(e,t){e&&e.querySelectorAll(".admin-pagination button[data-page]").forEach(a=>{a.addEventListener("click",()=>{const n=parseInt(a.dataset.page);!isNaN(n)&&n>0&&t(n)})})}const k={dashboard:{loaded:!1},users:{page:1,limit:20,search:""},withdrawals:{status:"needs_approval",page:1,limit:20,selected:new Set},transactions:{page:1,limit:50,search:""},economy:{data:null},promos:{loaded:!1},audit:{page:1,limit:30,action:""},broadcast:{jobId:null,pollTimer:null},settings:{data:null}};let wt="dashboard",tt=null;const Ai={dashboard:an,users:kt,withdrawals:Ie,transactions:Et,economy:ot,promos:_t,audit:Tt,broadcast:sn,settings:on};async function xa(e){if(!(wt===e&&k[e]&&k[e].loaded)){wt=e,document.querySelectorAll(".admin-tab").forEach(t=>{t.classList.toggle("active",t.dataset.tab===e)}),le("Loading "+e+"…");try{await Ai[e](),k[e]&&(k[e].loaded=!0)}catch(t){const a=g("adminBody");a&&(a.innerHTML=F("Failed to load",t.message||String(t)))}}}async function an(){var i,s,o;le("Fetching stats…");let e;try{e=await L("/api/admin/stats")}catch(r){g("adminBody").innerHTML=F("Failed to load stats",r.message);return}const t=[{key:"maintenance_mode",label:"Maintenance",desc:"Block all writes"},{key:"withdrawals_enabled",label:"Withdrawals",desc:"Allow cash-outs"},{key:"games_enabled",label:"Games",desc:"Spin/scratch/etc"},{key:"mining_enabled",label:"Mining",desc:"Accrual + refuel"},{key:"faucet_enabled",label:"Faucet",desc:"Hourly claim"}],n=`
    <div class="admin-section">
      <div class="admin-section-title">Platform Metrics</div>
      <div class="admin-stat-grid">
        ${[{lbl:"Total Users",val:O(e.totalUsers),sub:"",cls:""},{lbl:"Total Balance",val:O(e.totalBalance),sub:`≈ ${ht(e.totalBalanceUsd)} · ${O(e.totalBalance)} ORL`,cls:""},{lbl:"Total Mined",val:O(e.totalMined),sub:`≈ ${ht(e.totalMinedUsd)}`,cls:"muted"},{lbl:"Total Ads",val:O(e.totalAds),sub:"Lifetime views",cls:"muted"},{lbl:"Total Withdrawals",val:O(e.totalWithdrawals),sub:`≈ ${ht(e.totalWithdrawalsUsd)}`,cls:"muted"},{lbl:"Pending Withdrawals",val:O(e.pendingWithdrawals),sub:"Needs action",cls:e.pendingWithdrawals>0?"danger":"muted"},{lbl:"Pro Users",val:O(e.proUsers||0),sub:"Active subs",cls:"success"},{lbl:"Banned Users",val:O(e.bannedUsers||0),sub:"Suspended",cls:e.bannedUsers>0?"danger":"muted"}].map(r=>`
          <div class="admin-stat ${r.cls}">
            <div class="lbl">${w(r.lbl)}</div>
            <div class="val">${r.val}</div>
            ${r.sub?`<div class="sub">${r.sub}</div>`:""}
          </div>
        `).join("")}
      </div>
    </div>

    ${e.flags&&e.flags.maintenance_mode?`
      <div class="admin-banner">
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
        <div><b>Maintenance mode is ON.</b> All non-admin write actions are blocked for regular users.</div>
      </div>
    `:""}

    <div class="admin-section">
      <div class="admin-section-title">Feature Flags (quick toggle)</div>
      <div class="admin-flags-row" id="adminFlagRow">
        ${t.map(r=>`
          <label class="admin-flag-chip">
            <span class="lbl"><b>${w(r.label)}</b><span>${w(r.desc)}</span></span>
            <span class="admin-toggle">
              <input type="checkbox" data-flag="${r.key}" ${e.flags&&e.flags[r.key]?"checked":""} ${W?"":"disabled"} />
              <span class="track"></span>
            </span>
          </label>
        `).join("")}
      </div>
      ${W?"":'<div style="font-size:11px;color:var(--ink-faint);margin-top:6px">Super admin only — you have view-only access.</div>'}
    </div>

    <div class="admin-section">
      <div class="admin-section-title">Quick Actions</div>
      <div class="admin-toolbar">
        <button class="btn btn-ghost" id="adminRefreshStats">↻ Refresh Stats</button>
        <button class="btn btn-primary" id="adminBackupDb" ${W?"":"disabled"}>💾 Backup DB</button>
      </div>
    </div>
  `;g("adminBody").innerHTML=n,(i=g("adminFlagRow"))==null||i.querySelectorAll("input[data-flag]").forEach(r=>{r.addEventListener("change",async()=>{if(!W){r.checked=!r.checked;return}const l=r.dataset.flag,m=r.checked;S("light");try{await L("/api/admin/settings",{method:"PUT",body:{flags:{[l]:m}}}),y({title:`${l} ${m?"enabled":"disabled"}`,variant:"success"}),k.dashboard.loaded=!1}catch{}})}),(s=g("adminRefreshStats"))==null||s.addEventListener("click",()=>{S("light"),k.dashboard.loaded=!1,an()}),(o=g("adminBackupDb"))==null||o.addEventListener("click",async()=>{if(!W)return;S("light");const r=g("adminBackupDb");r.disabled=!0,r.textContent="Backing up…";try{const l=await L("/api/admin/backup-db",{method:"POST"});y({title:"Backup created",message:l.path||"OK",variant:"success"})}catch{}r.disabled=!1,r.textContent="💾 Backup DB"})}async function kt(e){var c;e&&(k.users.page=e);const{page:t,limit:a,search:n}=k.users;le("Fetching users…");let i;try{const p=new URLSearchParams({page:String(t),limit:String(a)});n&&p.set("search",n),i=await L("/api/admin/users?"+p.toString())}catch(p){g("adminBody").innerHTML=F("Failed to load users",p.message);return}const{users:s,pagination:o}=i,r=`
    <div class="admin-section">
      <div class="admin-h">
        <div>
          <h3>Users</h3>
          <div class="admin-h-sub">${O(o.total)} total · page ${o.page}/${o.totalPages}</div>
        </div>
      </div>

      <div class="admin-toolbar">
        <input type="search" class="admin-input grow" id="adminUserSearch"
               placeholder="Search name, @username, or Telegram ID…"
               value="${w(n)}" />
        <button class="btn btn-primary" id="adminUserSearchBtn">Search</button>
      </div>

      ${s.length===0?F("No users found",n?"Try a different search term.":""):`
        <div class="admin-table-wrap">
          <div class="admin-table-scroll">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>ID</th><th>Name</th><th>@username</th><th>TG ID</th>
                  <th>Balance</th><th>Tier</th><th>Role</th><th>Country</th><th>Status</th><th></th>
                </tr>
              </thead>
              <tbody>
                ${s.map(p=>`
                  <tr class="row-link" data-uid="${p.id}">
                    <td class="num">${p.id}</td>
                    <td><b>${w(p.first_name||"—")}</b>${p.username,""}</td>
                    <td class="muted">${p.username?"@"+w(p.username):"—"}</td>
                    <td class="mono muted">${w(p.telegram_id)}</td>
                    <td class="num gold">${O(p.balance)}</td>
                    <td><span class="admin-pill muted">T${p.tier||1}</span></td>
                    <td>${Ri(p.role)}</td>
                    <td class="muted">${w(p.country||"—")}</td>
                    <td>${p.banned?'<span class="admin-pill ruby">Banned</span>':'<span class="admin-pill emerald">Active</span>'}</td>
                    <td class="actions"><button class="btn btn-ghost btn-sm" data-view="${p.id}">View</button></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
        ${lt(o.page,o.totalPages,o.total)}
      `}
    </div>
  `;g("adminBody").innerHTML=r.replace(/__PAGE__/g,"");const l=g("adminUserSearch"),m=()=>{k.users.search=(l.value||"").trim(),k.users.page=1,k.users.loaded=!1,kt()};(c=g("adminUserSearchBtn"))==null||c.addEventListener("click",m),l==null||l.addEventListener("keydown",p=>{p.key==="Enter"&&m()}),document.querySelectorAll("[data-view]").forEach(p=>{p.addEventListener("click",h=>{h.stopPropagation(),je(parseInt(p.dataset.view))})}),document.querySelectorAll("tr.row-link").forEach(p=>{p.addEventListener("click",()=>je(parseInt(p.dataset.uid)))}),dt(g("adminBody"),p=>kt(p))}function Ri(e){return e==="admin"?'<span class="admin-pill gold">Admin</span>':e==="mod"?'<span class="admin-pill sapphire">Mod</span>':'<span class="admin-pill muted">User</span>'}async function je(e){var b,_,x;S("light");let t=g("adminDrawerVeil");t||(t=document.createElement("div"),t.id="adminDrawerVeil",t.className="admin-drawer-veil",t.innerHTML='<div class="admin-drawer"><div class="admin-drawer-head"><h3 id="adminDrawerTitle">User</h3><button class="close" id="adminDrawerClose">&times;</button></div><div class="admin-drawer-body" id="adminDrawerBody"></div></div>',g("adminVeil").appendChild(t),t.addEventListener("click",E=>{E.target===t&&t.classList.remove("show")}),g("adminDrawerClose").addEventListener("click",()=>t.classList.remove("show"))),t.classList.add("show"),g("adminDrawerTitle").textContent="User #"+e,g("adminDrawerBody").innerHTML='<div class="admin-loading"><div class="spinner"></div><span>Loading user…</span></div>';let a;try{a=await L("/api/admin/users/"+e+"/detail")}catch(E){g("adminDrawerBody").innerHTML=F("Failed to load user",E.message);return}const{user:n,transactions:i,withdrawals:s,achievements:o,referrer:r,referrals:l,allAchievements:m}=a,c=tn(),p=c.canAll||c.perms.includes("ban_users"),h=c.canAll||c.perms.includes("adjust_balance"),u=W;g("adminDrawerTitle").textContent=n.first_name||"User #"+n.id;const f=[["ID",n.id],["Telegram ID",n.telegram_id],["Username",n.username?"@"+n.username:"—"],["Balance",O(n.balance)+" ORL"],["Tier","T"+(n.tier||1)],["Rig",n.rig_level!=null?"L"+n.rig_level:"—"],["Role",n.role||"user"],["Country",n.country||"—"],["Banned",n.banned?"YES":"no"],["Pro",n.pro_until&&new Date(n.pro_until)>new Date?"until "+Z(n.pro_until):"no"],["Referral code",n.referral_code||"—"],["Joined",Z(n.created_at)]];g("adminDrawerBody").innerHTML=`
    <div class="admin-section">
      <div class="admin-section-title">Profile</div>
      <div class="admin-info-grid">
        ${f.map(([E,B])=>`<div><div class="k">${w(E)}</div><div class="v">${w(B)}</div></div>`).join("")}
      </div>
      ${n.isSuperAdmin?'<div class="admin-pill gold" style="margin-top:6px">Super Admin</div>':""}
    </div>

    <div class="admin-section">
      <div class="admin-section-title">Actions</div>
      ${p&&!n.isSuperAdmin?`
        <div class="admin-toolbar">
          <button class="btn ${n.banned?"btn-success":"btn-danger"} btn-sm" id="uBanBtn">${n.banned?"Unban user":"Ban user"}</button>
        </div>`:""}
      ${h&&!n.isSuperAdmin?`
        <div class="admin-form-card">
          <div class="admin-field">
            <label>Adjust balance (±ORL)</label>
            <div class="admin-field-row">
              <input type="number" class="admin-input" id="uBalAmt" placeholder="e.g. -500 or +1000" step="any" />
              <input type="text" class="admin-input" id="uBalReason" placeholder="Reason (optional)" style="flex:1.4" />
            </div>
            <button class="btn btn-primary btn-sm" id="uBalBtn" style="margin-top:8px">Apply adjustment</button>
          </div>
        </div>`:""}
      ${u&&!n.isSuperAdmin?`
        <div class="admin-form-card">
          <div class="admin-field">
            <label>Role</label>
            <select class="admin-select" id="uRoleSel">
              <option value="user" ${n.role==="user"?"selected":""}>User</option>
              <option value="mod" ${n.role==="mod"?"selected":""}>Moderator</option>
              <option value="admin" ${n.role==="admin"?"selected":""}>Admin</option>
            </select>
          </div>
          <div class="admin-field">
            <label>Permissions (comma-separated: view_users, ban_users, adjust_balance, process_withdrawals, view_transactions, manage_mods)</label>
            <input type="text" class="admin-input" id="uPermsInput" value="${w(n.permissions||"")}" placeholder="e.g. view_users,ban_users" />
          </div>
          <button class="btn btn-primary btn-sm" id="uRoleBtn">Save role</button>
        </div>`:""}
      ${n.isSuperAdmin?'<div class="admin-banner warn"><svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg><div><b>Super admin.</b> Cannot be modified.</div></div>':""}
    </div>

    ${r||l&&l.length?`
      <div class="admin-section">
        <div class="admin-section-title">Referral Tree</div>
        ${r?`<div style="font-size:11.5px;color:var(--ink-faint);margin-bottom:6px">Referred by:</div>
          <div class="admin-ref-tree">
            <div class="admin-ref-tree-item">
              <div class="av">${w((r.first_name||"?")[0])}</div>
              <div><b>${w(r.first_name||"User")}</b> <span class="muted">@${w(r.username||"—")} · TG ${w(r.telegram_id)}</span></div>
            </div>
          </div>`:""}
        ${l&&l.length?`
          <div style="font-size:11.5px;color:var(--ink-faint);margin:10px 0 6px">Direct referrals (${l.length}):</div>
          <div class="admin-ref-tree">
            ${l.map(E=>`
              <div class="admin-ref-tree-item">
                <div class="av">${w((E.first_name||"?")[0])}</div>
                <div><b>${w(E.first_name||"User")}</b> <span class="muted">@${w(E.username||"—")} · ${O(E.balance)} ORL · ${Z(E.created_at)}</span></div>
              </div>
            `).join("")}
          </div>`:""}
      </div>`:""}

    ${o&&o.length?`
      <div class="admin-section">
        <div class="admin-section-title">Achievements (${o.length})</div>
        <div class="admin-ref-tree">
          ${o.map(E=>`<div class="admin-ref-tree-item"><div class="av">★</div><div><b>${w(E.code||E.id)}</b> <span class="muted">${w(E.title||"")} · ${Z(E.earned_at)}</span></div></div>`).join("")}
        </div>
      </div>`:""}

    <div class="admin-section">
      <div class="admin-section-title">Recent Withdrawals</div>
      ${s&&s.length?`
        <div class="admin-table-wrap"><div class="admin-table-scroll">
          <table class="admin-table">
            <thead><tr><th>ID</th><th>Method</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead>
            <tbody>
              ${s.map(E=>`
                <tr>
                  <td class="num">${E.id}</td>
                  <td>${w(E.method)}</td>
                  <td class="num gold">${O(E.amount_orl)}</td>
                  <td>${nn(E.status)}</td>
                  <td class="muted">${Z(E.created_at)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div></div>
      `:F("No withdrawals")}
    </div>

    <div class="admin-section">
      <div class="admin-section-title">Recent Transactions</div>
      ${i&&i.length?`
        <div class="admin-table-wrap"><div class="admin-table-scroll">
          <table class="admin-table">
            <thead><tr><th>Type</th><th>Amount</th><th>Description</th><th>Date</th></tr></thead>
            <tbody>
              ${i.slice(0,20).map(E=>`
                <tr>
                  <td>${Lt(E.type)}</td>
                  <td class="num ${St(E.amount,E.type)}">${E.amount>=0?"+":""}${st(E.amount,2)}</td>
                  <td class="muted">${w(E.description||"")}</td>
                  <td class="muted">${Z(E.created_at)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div></div>
      `:F("No transactions")}
    </div>
  `,(b=g("uBanBtn"))==null||b.addEventListener("click",async()=>{S("light");try{await L("/api/admin/users/"+e+"/ban",{method:"POST",body:{banned:!n.banned}}),y({title:n.banned?"User unbanned":"User banned",variant:"success"}),je(e),k.users.loaded=!1}catch{}}),(_=g("uBalBtn"))==null||_.addEventListener("click",async()=>{const E=parseFloat(g("uBalAmt").value),B=g("uBalReason").value||"";if(!E||isNaN(E)){y({title:"Enter a valid amount",variant:"error"});return}S("light");try{const N=await L("/api/admin/users/"+e+"/balance",{method:"POST",body:{amount:E,reason:B}});y({title:"Balance adjusted",message:"New: "+O(N.newBalance)+" ORL",variant:"success"}),je(e),k.users.loaded=!1}catch{}}),(x=g("uRoleBtn"))==null||x.addEventListener("click",async()=>{const E=g("uRoleSel").value,B=g("uPermsInput").value.split(",").map(N=>N.trim()).filter(Boolean);S("light");try{await L("/api/admin/users/"+e+"/role",{method:"POST",body:{role:E,permissions:B}}),y({title:"Role updated",variant:"success"}),je(e),k.users.loaded=!1}catch{}})}function nn(e){return`<span class="admin-pill ${{completed:"emerald",rejected:"ruby",pending:"sapphire",needs_approval:"gold"}[e]||"muted"}">${w(e||"—")}</span>`}function Lt(e){return`<span class="admin-pill ${{mining:"gold",faucet:"gold",spin_win:"gold",scratch_win:"gold",coinflip_win:"gold",chest:"gold",referral:"sapphire",ad_milestone:"emerald",deposit:"emerald",withdraw:"ruby",withdraw_refund:"sapphire",withdraw_completed:"emerald",admin_adjust:"violet",admin_action:"violet",pro_activate:"violet",lottery_win:"gold",lottery_ticket:"ruby"}[e]||"muted"}">${w(e||"—")}</span>`}function St(e,t){return t==="withdraw"||t==="withdraw_refund"?e<0?"ruby":"sapphire":e<0?"ruby":t&&t.startsWith("admin")?"violet":"emerald"}async function Ie(e){var m,c,p,h;e?k.withdrawals.page=e:k.withdrawals.page=1;const{status:t,page:a,limit:n}=k.withdrawals;le("Fetching withdrawals…");let i;try{const u=new URLSearchParams({status:t,page:String(a),limit:String(n)});i=await L("/api/admin/withdrawals?"+u.toString())}catch(u){g("adminBody").innerHTML=F("Failed to load withdrawals",u.message);return}const{withdrawals:s,pagination:o}=i;k.withdrawals.selected=new Set;const r=[{key:"needs_approval",label:"Needs Approval"},{key:"pending",label:"Pending"},{key:"completed",label:"Completed"},{key:"rejected",label:"Rejected"}],l=`
    <div class="admin-section">
      <div class="admin-h">
        <div>
          <h3>Withdrawals</h3>
          <div class="admin-h-sub">${O(o.total)} records · page ${o.page}/${o.totalPages}</div>
        </div>
      </div>

      <div class="admin-status-tabs" id="wStatusTabs">
        ${r.map(u=>`
          <button class="admin-status-tab ${u.key===t?"active":""}" data-status="${u.key}">${w(u.label)}</button>
        `).join("")}
      </div>

      ${t==="needs_approval"?`
        <div class="admin-banner warn">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
          <div><b>Bulk approve skips Flutterwave.</b> Bulk-approving a <code>needs_approval</code> bank/airtime withdrawal will mark it paid <b>without</b> actually sending money. Always approve those individually so the Flutterwave transfer is initiated.</div>
        </div>
      `:""}

      ${s.length===0?F("No withdrawals in this status"):`
        <div class="admin-toolbar">
          <label class="admin-flag-chip" style="padding:6px 10px">
            <span class="admin-toggle"><input type="checkbox" id="wSelectAll" /><span class="track"></span></span>
            <span class="lbl"><b>Select all</b></span>
          </label>
          <span class="info"><span id="wSelCount">0</span> selected</span>
          <button class="btn btn-success btn-sm" id="wBulkApprove">✓ Approve Selected</button>
          <button class="btn btn-danger btn-sm" id="wBulkReject">✕ Reject Selected</button>
        </div>
        <div class="admin-table-wrap">
          <div class="admin-table-scroll">
            <table class="admin-table">
              <thead>
                <tr>
                  <th></th><th>ID</th><th>User</th><th>Method</th>
                  <th>ORL</th><th>Fee</th><th>Net</th><th>Status</th><th>Created</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${s.map(u=>`
                  <tr data-wid="${u.id}">
                    <td><input type="checkbox" class="admin-check w-check" data-wid="${u.id}" /></td>
                    <td class="num">${u.id}</td>
                    <td>
                      <b>${w(u.first_name||"User")}</b>
                      <span class="muted mono">@${w(u.username||"—")}</span><br/>
                      <span class="muted mono">${w(u.telegram_id)}</span>
                    </td>
                    <td>${w(u.method)}</td>
                    <td class="num gold">${O(u.amount_orl)}</td>
                    <td class="num muted">${O(u.fee_orl||0)}</td>
                    <td class="num">${w(u.net_fiat||"—")}</td>
                    <td>${nn(u.status)}</td>
                    <td class="muted">${Z(u.created_at)}</td>
                    <td class="actions">
                      ${u.status==="needs_approval"||u.status==="pending"?`
                        <button class="btn btn-success btn-sm" data-approve="${u.id}">Approve</button>
                        <button class="btn btn-danger btn-sm" data-reject="${u.id}">Reject</button>
                      `:""}
                      ${u.flw_transfer_id?`<button class="btn btn-ghost btn-sm" data-requery="${u.id}">Requery</button>`:""}
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
        ${lt(o.page,o.totalPages,o.total)}
      `}
    </div>
  `;g("adminBody").innerHTML=l.replace(/__PAGE__/g,""),(m=g("wStatusTabs"))==null||m.querySelectorAll(".admin-status-tab").forEach(u=>{u.addEventListener("click",()=>{S("light"),k.withdrawals.status=u.dataset.status,k.withdrawals.page=1,k.withdrawals.loaded=!1,Ie()})}),(c=g("wSelectAll"))==null||c.addEventListener("change",u=>{document.querySelectorAll(".w-check").forEach(f=>{f.checked=u.target.checked,u.target.checked?k.withdrawals.selected.add(parseInt(f.dataset.wid)):k.withdrawals.selected.delete(parseInt(f.dataset.wid))}),Ca()}),document.querySelectorAll(".w-check").forEach(u=>{u.addEventListener("change",()=>{const f=parseInt(u.dataset.wid);u.checked?k.withdrawals.selected.add(f):k.withdrawals.selected.delete(f),Ca()})}),document.querySelectorAll("[data-approve]").forEach(u=>u.addEventListener("click",()=>$a(parseInt(u.dataset.approve),"completed"))),document.querySelectorAll("[data-reject]").forEach(u=>u.addEventListener("click",()=>$a(parseInt(u.dataset.reject),"rejected"))),document.querySelectorAll("[data-requery]").forEach(u=>u.addEventListener("click",()=>Mi(parseInt(u.dataset.requery)))),(p=g("wBulkApprove"))==null||p.addEventListener("click",()=>Aa("approve")),(h=g("wBulkReject"))==null||h.addEventListener("click",()=>Aa("reject")),dt(g("adminBody"),u=>Ie(u))}function Ca(){const e=g("wSelCount");e&&(e.textContent=k.withdrawals.selected.size)}async function $a(e,t){if(S("light"),!!confirm(`Are you sure you want to ${t==="completed"?"APPROVE":"REJECT"} withdrawal #${e}?`))try{const a=await L("/api/admin/withdrawals/"+e+"/process",{method:"POST",body:{status:t}});y({title:"Withdrawal "+(a.status||t),message:a.message||"",variant:"success"}),k.withdrawals.loaded=!1,Ie()}catch{}}async function Mi(e){S("light");try{const t=await L("/api/admin/withdrawals/"+e+"/requery",{method:"POST"});y({title:"Requery done",message:`FLW: ${t.flw_status} · local: ${t.local_status}`,variant:"info",duration:4e3}),k.withdrawals.loaded=!1,Ie()}catch{}}async function Aa(e){const t=Array.from(k.withdrawals.selected);if(!t.length){y({title:"Select at least one row",variant:"error"});return}if(S("light"),!!confirm(`${e==="approve"?"APPROVE":"REJECT"} ${t.length} withdrawal(s)?`))try{const a=await L("/api/admin/withdrawals/bulk-process",{method:"POST",body:{ids:t,action:e}}),n=a.results.filter(o=>o.status==="success").length,i=a.results.filter(o=>o.status==="skipped").length,s=a.results.filter(o=>o.status==="error").length;y({title:"Bulk done",message:`${n} ok, ${i} skipped, ${s} failed`,variant:s?"error":"success",duration:5e3}),k.withdrawals.loaded=!1,Ie()}catch{}}async function Et(e){e&&(k.transactions.page=e);const{page:t,limit:a}=k.transactions;le("Fetching transactions…");let n;try{const c=new URLSearchParams({page:String(t),limit:String(a)});n=await L("/api/admin/transactions?"+c.toString())}catch(c){g("adminBody").innerHTML=F("Failed to load transactions",c.message);return}const{transactions:i,pagination:s}=n,o=`
    <div class="admin-section">
      <div class="admin-h">
        <div>
          <h3>Transactions</h3>
          <div class="admin-h-sub">${O(s.total)} records · page ${s.page}/${s.totalPages}</div>
        </div>
      </div>

      <div style="margin-bottom:12px;display:flex;gap:8px;align-items:center;">
        <input type="text" id="adminTxSearch" placeholder="Search by Transaction ID, type, or description..." value="${w(k.transactions.search||"")}" style="flex:1;padding:8px 12px;border-radius:8px;border:1px solid var(--line);background:var(--bg-inset);color:var(--ink);font-size:12.5px;outline:none;" />
        <button class="btn btn-primary" id="adminTxSearchBtn" style="padding:8px 14px;font-size:12px;border-radius:8px;">Search</button>
      </div>

      ${i.length===0?F("No transactions"):`
        <div class="admin-table-wrap">
          <div class="admin-table-scroll">
            <table class="admin-table">
              <thead>
                <tr><th>ID</th><th>User</th><th>Type</th><th>Amount</th><th>Status / Ref</th><th>Description</th><th>Date</th></tr>
              </thead>
              <tbody>
                ${i.map(c=>`
                  <tr>
                    <td class="num">${c.id}</td>
                    <td><b>${w(c.user_first_name||c.user_name||"User #"+c.user_id)}</b><br/><span class="muted mono">${w(c.user_username?"@"+c.user_username:"")}</span></td>
                    <td>${Lt(c.type)}</td>
                    <td class="num ${St(c.amount,c.type)}">${c.amount>=0?"+":""}${st(c.amount,2)}</td>
                    <td>${c.withdrawal_status?`<span class="tx-status-badge ${c.withdrawal_status==="completed"?"completed":c.withdrawal_status==="failed"||c.withdrawal_status==="rejected"?"failed":"pending"}">${w(c.withdrawal_status)}</span>${c.flw_reference?`<br/><span class="muted mono" style="font-size:10px">${w(c.flw_reference)}</span>`:""}`:'<span class="muted">—</span>'}</td>
                    <td class="muted">${w(c.description||"—")}</td>
                    <td class="muted">${Z(c.created_at)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
        ${lt(s.page,s.totalPages,s.total)}
      `}
    </div>
  `;g("adminBody").innerHTML=o.replace(/__PAGE__/g,""),dt(g("adminBody"),c=>Et(c));const r=g("adminTxSearch"),l=g("adminTxSearchBtn"),m=()=>{const c=r.value.trim();k.transactions.search=c,k.transactions.page=1,Et()};if(l&&l.addEventListener("click",m),r&&r.addEventListener("keydown",c=>{c.key==="Enter"&&m()}),k.transactions.search){const c=k.transactions.search.toLowerCase(),p=i.filter(u=>String(u.id).includes(c)||(u.type||"").toLowerCase().includes(c)||(u.description||"").toLowerCase().includes(c)||(u.flw_reference||"").toLowerCase().includes(c)||(u.withdrawal_id||"").toLowerCase().includes(c)),h=g("adminBody").querySelector(".admin-table tbody");h&&(h.innerHTML=p.map(u=>`
        <tr>
          <td class="num">${u.id}</td>
          <td><b>${w(u.user_first_name||u.user_name||"User #"+u.user_id)}</b><br/><span class="muted mono">${w(u.user_username?"@"+u.user_username:"")}</span></td>
          <td>${Lt(u.type)}</td>
          <td class="num ${St(u.amount,u.type)}">${u.amount>=0?"+":""}${st(u.amount,2)}</td>
          <td>${u.withdrawal_status?`<span class="tx-status-badge ${u.withdrawal_status==="completed"?"completed":u.withdrawal_status==="failed"||u.withdrawal_status==="rejected"?"failed":"pending"}">${w(u.withdrawal_status)}</span>${u.flw_reference?`<br/><span class="muted mono" style="font-size:10px">${w(u.flw_reference)}</span>`:""}`:'<span class="muted">—</span>'}</td>
          <td class="muted">${w(u.description||"—")}</td>
          <td class="muted">${Z(u.created_at)}</td>
        </tr>
      `).join(""))}}async function ot(){var c,p,h,u;if(!W){g("adminBody").innerHTML=`
      <div class="admin-empty">
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
        <div><b>Super admin only</b></div>
        <div style="font-size:11.5px;margin-top:4px;color:var(--ink-faint)">Economy configuration is restricted to super admins.</div>
      </div>`;return}le("Fetching economy config…");let e;try{e=await L("/api/admin/economy")}catch(f){g("adminBody").innerHTML=F("Failed to load economy",f.message);return}const t=e.economy||{};k.economy.data=t;const a=168,n=f=>{const b=Number(f);return!isFinite(b)||b<=0?"":`<div class="hint">${(b/a*100).toFixed(1)}% of ad revenue</div>`},i=(t.RIGS||[]).map((f,b)=>`
    <div class="admin-rig-row" data-idx="${b}">
      <input class="admin-input" data-rig-key="name" value="${w(f.name)}" placeholder="Name" />
      <input class="admin-input" data-rig-key="sessionMin" type="number" value="${f.sessionMin}" placeholder="Session min" />
      <input class="admin-input" data-rig-key="cost" type="number" value="${f.cost}" placeholder="Cost" />
    </div>
  `).join(""),s=Object.keys(t.WITHDRAWAL_METHODS||{}).map(f=>{const b=t.WITHDRAWAL_METHODS[f];return`<div class="admin-econ-field" style="grid-column:1/-1">
      <label>${w(f)} method</label>
      <div class="admin-field-row" style="margin-top:4px">
        <input class="admin-input" data-method="${f}" data-mk="minOrl" type="number" value="${b.minOrl}" placeholder="min ORL" />
        <input class="admin-input" data-method="${f}" data-mk="fiat" value="${w(b.fiat)}" placeholder="fiat label" />
        <input class="admin-input" data-method="${f}" data-mk="countries" value="${Array.isArray(b.countries)?b.countries.join(","):w(b.countries)}" placeholder="countries (NG or 'all')" />
      </div>
    </div>`}).join(""),o=t.TIER_MULTIPLIERS||{1:1,2:1.1,3:1.25,4:1.5,5:2},r=[1,2,3,4,5].map(f=>`
    <div class="admin-econ-field">
      <label>Tier ${f} multiplier</label>
      <input type="number" step="0.01" data-tier="${f}" value="${o[f]}" />
    </div>
  `).join(""),l=(t.AD_MILESTONES||[]).map((f,b)=>`
    <div class="admin-rig-row" data-ms-idx="${b}">
      <input class="admin-input" data-ms-key="ads" type="number" value="${f.ads}" placeholder="ads" />
      <input class="admin-input" data-ms-key="bonus" type="number" value="${f.bonus}" placeholder="bonus ORL" />
      <button class="btn btn-ghost btn-sm" data-ms-del="${b}">✕</button>
    </div>
  `).join(""),m=`
    <div class="admin-banner warn">
      <svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
      <div><b>Editing economy config affects all users immediately.</b> Reward fields show their expected payout ratio (reward ÷ 168 ORL per-ad revenue). Stay in the 22–30% safe zone.</div>
    </div>

    <div class="admin-section">
      <div class="admin-section-title">Peg &amp; Rates</div>
      <div class="admin-econ-grid">
        <div class="admin-econ-field">
          <label>ORL → NGN</label>
          <input type="number" step="0.0001" data-econ="ORL_TO_NGN" value="${t.ORL_TO_NGN}" />
          ${n(t.FAUCET_REWARD?t.FAUCET_REWARD/t.ORL_TO_NGN*t.USD_TO_NGN:0)}
        </div>
        <div class="admin-econ-field">
          <label>USD → NGN</label>
          <input type="number" step="1" data-econ="USD_TO_NGN" value="${t.USD_TO_NGN}" />
        </div>
        <div class="admin-econ-field">
          <label>ORL per USD (derived, read-only)</label>
          <input type="text" value="${O(t.ORL_PER_USD)}" readonly />
          <div class="hint dim">= USD_TO_NGN / ORL_TO_NGN</div>
        </div>
      </div>
    </div>

    <div class="admin-section">
      <div class="admin-section-title">Mining</div>
      <div class="admin-econ-grid">
        <div class="admin-econ-field">
          <label>Tank ORL (per refuel)</label>
          <input type="number" data-econ="TANK_ORL" value="${t.TANK_ORL}" />
          ${n(t.TANK_ORL)}
        </div>
        <div class="admin-econ-field">
          <label>Free mining cap (0-1)</label>
          <input type="number" step="0.05" data-econ="FREE_MINING_CAP" value="${t.FREE_MINING_CAP}" />
        </div>
        <div class="admin-econ-field">
          <label>Pro multiplier</label>
          <input type="number" step="0.1" data-econ="PRO_MULTIPLIER" value="${t.PRO_MULTIPLIER}" />
        </div>
        <div class="admin-econ-field">
          <label>Boost multiplier</label>
          <input type="number" step="0.05" data-econ="BOOST_MULTIPLIER" value="${t.BOOST_MULTIPLIER}" />
        </div>
        <div class="admin-econ-field">
          <label>Session duration (ms)</label>
          <input type="number" step="1000" data-econ="SESSION_MS" value="${t.SESSION_MS}" />
        </div>
      </div>
      <div style="margin-top:10px"><label style="font-size:10.5px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-faint)">Rigs</label></div>
      <div class="admin-rigs-editor" id="rigsEditor">${i}</div>
      <div style="margin-top:10px"><label style="font-size:10.5px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-faint)">Tier multipliers</label></div>
      <div class="admin-econ-grid" style="margin-top:6px">${r}</div>
    </div>

    <div class="admin-section">
      <div class="admin-section-title">Games</div>
      <div class="admin-econ-grid">
        <div class="admin-econ-field">
          <label>Wheel prizes (CSV)</label>
          <input type="text" data-econ-arr="WHEEL_PRIZES" value="${(t.WHEEL_PRIZES||[]).join(",")}" />
        </div>
        <div class="admin-econ-field">
          <label>Wheel weights (CSV)</label>
          <input type="text" data-econ-arr="WHEEL_WEIGHTS" value="${(t.WHEEL_WEIGHTS||[]).join(",")}" />
        </div>
        <div class="admin-econ-field">
          <label>Scratch prizes (CSV)</label>
          <input type="text" data-econ-arr="SCRATCH_PRIZES" value="${(t.SCRATCH_PRIZES||[]).join(",")}" />
          ${n((t.SCRATCH_PRIZES||[]).reduce((f,b)=>f+b,0)/(t.SCRATCH_PRIZES||[]).length)}
        </div>
        <div class="admin-econ-field">
          <label>Scratch weights (CSV)</label>
          <input type="text" data-econ-arr="SCRATCH_WEIGHTS" value="${(t.SCRATCH_WEIGHTS||[]).join(",")}" />
        </div>
        <div class="admin-econ-field">
          <label>Coinflip win</label>
          <input type="number" data-econ="COINFLIP_WIN" value="${t.COINFLIP_WIN}" />
          ${n(t.COINFLIP_WIN)}
        </div>
        <div class="admin-econ-field">
          <label>Coinflip lose</label>
          <input type="number" data-econ="COINFLIP_LOSE" value="${t.COINFLIP_LOSE}" />
        </div>
        <div class="admin-econ-field">
          <label>Chest goal (ads)</label>
          <input type="number" data-econ="CHEST_GOAL" value="${t.CHEST_GOAL}" />
        </div>
        <div class="admin-econ-field">
          <label>Chest reward min</label>
          <input type="number" data-econ="CHEST_REWARD_MIN" value="${t.CHEST_REWARD_MIN}" />
          ${n((t.CHEST_REWARD_MIN+t.CHEST_REWARD_MAX)/2/(t.CHEST_GOAL||1))}
        </div>
        <div class="admin-econ-field">
          <label>Chest reward max</label>
          <input type="number" data-econ="CHEST_REWARD_MAX" value="${t.CHEST_REWARD_MAX}" />
        </div>
        <div class="admin-econ-field">
          <label>Lottery ticket (ORL)</label>
          <input type="number" data-econ="LOTTO_TICKET_ORL" value="${t.LOTTO_TICKET_ORL}" />
        </div>
      </div>
    </div>

    <div class="admin-section">
      <div class="admin-section-title">Earn</div>
      <div class="admin-econ-grid">
        <div class="admin-econ-field">
          <label>Faucet reward</label>
          <input type="number" data-econ="FAUCET_REWARD" value="${t.FAUCET_REWARD}" />
          ${n(t.FAUCET_REWARD)}
        </div>
        <div class="admin-econ-field">
          <label>Faucet cooldown (ms)</label>
          <input type="number" step="1000" data-econ="FAUCET_COOLDOWN" value="${t.FAUCET_COOLDOWN}" />
        </div>
        <div class="admin-econ-field">
          <label>Video wall reward</label>
          <input type="number" data-econ="VIDEO_WALL_REWARD" value="${t.VIDEO_WALL_REWARD}" />
          ${n(t.VIDEO_WALL_REWARD)}
        </div>
        <div class="admin-econ-field">
          <label>Streak amounts (7 CSV)</label>
          <input type="text" data-econ-arr="STREAK_AMOUNTS" value="${(t.STREAK_AMOUNTS||[]).join(",")}" />
        </div>
      </div>
      <div style="margin-top:10px"><label style="font-size:10.5px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-faint)">Ad milestones</label></div>
      <div class="admin-rigs-editor" id="msEditor">${l}</div>
      <button class="btn btn-ghost btn-sm" id="msAdd" style="margin-top:6px">+ Add milestone</button>
    </div>

    <div class="admin-section">
      <div class="admin-section-title">Referral</div>
      <div class="admin-econ-grid">
        <div class="admin-econ-field">
          <label>L1 commission (0-1)</label>
          <input type="number" step="0.01" data-econ="REFERRAL_L1_PCT" value="${t.REFERRAL_L1_PCT}" />
        </div>
        <div class="admin-econ-field">
          <label>L2 commission (0-1)</label>
          <input type="number" step="0.01" data-econ="REFERRAL_L2_PCT" value="${t.REFERRAL_L2_PCT}" />
        </div>
      </div>
    </div>

    <div class="admin-section">
      <div class="admin-section-title">Withdrawal</div>
      <div class="admin-econ-grid">
        <div class="admin-econ-field">
          <label>Fee % (free)</label>
          <input type="number" step="0.01" data-econ="WITHDRAWAL_FEE_PCT" value="${t.WITHDRAWAL_FEE_PCT}" />
        </div>
        <div class="admin-econ-field">
          <label>Fee % (Pro)</label>
          <input type="number" step="0.01" data-econ="WITHDRAWAL_FEE_PRO_PCT" value="${t.WITHDRAWAL_FEE_PRO_PCT}" />
        </div>
        <div class="admin-econ-field">
          <label>Manual approval threshold (ORL)</label>
          <input type="number" step="1000" data-econ="MANUAL_APPROVAL_THRESHOLD_ORL" value="${t.MANUAL_APPROVAL_THRESHOLD_ORL}" />
        </div>
      </div>
      <div style="margin-top:10px"><label style="font-size:10.5px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-faint)">Methods</label></div>
      <div class="admin-econ-grid" style="margin-top:6px">${s}</div>
    </div>

    <div class="admin-section">
      <div class="admin-section-title">Pro</div>
      <div class="admin-econ-grid">
        <div class="admin-econ-field">
          <label>Pro price (Stars)</label>
          <input type="number" data-econ="PRO_PRICE_STARS" value="${t.PRO_PRICE_STARS}" />
        </div>
        <div class="admin-econ-field">
          <label>Pro duration (days)</label>
          <input type="number" data-econ="PRO_DURATION_DAYS" value="${t.PRO_DURATION_DAYS}" />
        </div>
      </div>
    </div>

    <div class="admin-save-bar">
      <button class="btn btn-danger btn-sm" id="econReset">Reset to defaults</button>
      <span class="spacer"></span>
      <button class="btn btn-ghost btn-sm" id="econReload">Reload</button>
      <button class="btn btn-primary" id="econSave">💾 Save changes</button>
    </div>
  `;g("adminBody").innerHTML=m,(c=g("msAdd"))==null||c.addEventListener("click",()=>{const f=g("msEditor"),b=f.children.length,_=document.createElement("div");_.className="admin-rig-row",_.dataset.msIdx=b,_.innerHTML=`
      <input class="admin-input" data-ms-key="ads" type="number" placeholder="ads" />
      <input class="admin-input" data-ms-key="bonus" type="number" placeholder="bonus ORL" />
      <button class="btn btn-ghost btn-sm" data-ms-del="${b}">✕</button>`,f.appendChild(_),_.querySelector("[data-ms-del]").addEventListener("click",()=>_.remove())}),document.querySelectorAll("[data-ms-del]").forEach(f=>f.addEventListener("click",()=>f.closest("[data-ms-idx]").remove())),(p=g("econReload"))==null||p.addEventListener("click",()=>{S("light"),k.economy.loaded=!1,ot()}),(h=g("econReset"))==null||h.addEventListener("click",async()=>{if(confirm("Reset ALL economy overrides to defaults? This affects every user immediately.")){S("light");try{await L("/api/admin/economy/reset",{method:"POST"}),y({title:"Economy reset to defaults",variant:"success"}),k.economy.loaded=!1,ot()}catch{}}}),(u=g("econSave"))==null||u.addEventListener("click",Oi)}async function Oi(){const e={};document.querySelectorAll("[data-econ]").forEach(o=>{const r=o.dataset.econ;let l=o.value;o.type==="number"?l=parseFloat(l):l=Number(l),isNaN(l)||(e[r]=l)}),document.querySelectorAll("[data-econ-arr]").forEach(o=>{const r=o.dataset.econArr,l=o.value.split(",").map(m=>parseFloat(m.trim())).filter(m=>!isNaN(m));e[r]=l});const t={};document.querySelectorAll("[data-tier]").forEach(o=>{const r=o.dataset.tier,l=parseFloat(o.value);isNaN(l)||(t[r]=l)}),e.TIER_MULTIPLIERS=t;const a=[];document.querySelectorAll("#rigsEditor .admin-rig-row").forEach(o=>{const r={};o.querySelectorAll("input[data-rig-key]").forEach(l=>{const m=l.dataset.rigKey;let c=l.value;(m==="sessionMin"||m==="cost")&&(c=parseInt(c)),r[m]=c}),r.name&&a.push(r)}),a.length&&(e.RIGS=a);const n=[];document.querySelectorAll("#msEditor .admin-rig-row").forEach(o=>{const r={};o.querySelectorAll("input[data-ms-key]").forEach(l=>{r[l.dataset.msKey]=parseInt(l.value)}),r.ads&&r.bonus&&n.push(r)}),e.AD_MILESTONES=n;const i={};document.querySelectorAll("[data-method]").forEach(o=>{var m;const r=o.dataset.method,l=o.dataset.mk;if(i[r]||(i[r]={...((m=k.economy.data.WITHDRAWAL_METHODS)==null?void 0:m[r])||{}}),l==="minOrl")i[r][l]=parseInt(o.value);else if(l==="countries"){const c=o.value.trim();i[r][l]=c.toLowerCase()==="all"?"all":c.split(",").map(p=>p.trim()).filter(Boolean)}else i[r][l]=o.value}),Object.keys(i).length&&(e.WITHDRAWAL_METHODS=i),S("light");const s=g("econSave");s.disabled=!0,s.textContent="Saving…";try{await L("/api/admin/economy",{method:"PUT",body:{economy:e}}),y({title:"Economy saved",message:Object.keys(e).length+" fields updated",variant:"success"}),k.economy.loaded=!1,ot()}catch{}s.disabled=!1,s.textContent="💾 Save changes"}async function _t(){var n;le("Fetching promo codes…");let e;try{e=await L("/api/admin/promo-codes")}catch(i){g("adminBody").innerHTML=F("Failed to load promo codes",i.message);return}const t=e.codes||[],a=`
    <div class="admin-section">
      <div class="admin-h">
        <div><h3>Promo Codes</h3><div class="admin-h-sub">${t.length} codes</div></div>
      </div>

      <div class="admin-form-card">
        <div class="admin-section-title">Create new code</div>
        <div class="admin-field-row">
          <div class="admin-field" style="flex:1.2">
            <label>Code</label>
            <input type="text" class="admin-input" id="pCode" placeholder="SUMMER50" />
          </div>
          <div class="admin-field">
            <label>Reward ORL</label>
            <input type="number" class="admin-input" id="pReward" placeholder="500" />
          </div>
          <div class="admin-field">
            <label>Max uses (0 = unlimited)</label>
            <input type="number" class="admin-input" id="pMax" placeholder="0" />
          </div>
        </div>
        <div class="admin-field">
          <label>Expires at (epoch seconds, optional)</label>
          <input type="number" class="admin-input" id="pExpires" placeholder="1735689600" />
        </div>
        <button class="btn btn-primary btn-sm" id="pCreate">+ Create code</button>
      </div>

      ${t.length===0?F("No promo codes yet"):`
        <div class="admin-table-wrap">
          <div class="admin-table-scroll">
            <table class="admin-table">
              <thead>
                <tr><th>Code</th><th>Reward</th><th>Uses / Max</th><th>Expires</th><th>Active</th><th>Actions</th></tr>
              </thead>
              <tbody>
                ${t.map(i=>{const s=i.expires_at?new Date(i.expires_at*1e3):null,o=s&&s<new Date;return`
                  <tr>
                    <td><b class="gold">${w(i.code)}</b></td>
                    <td class="num gold">${O(i.reward_orl)}</td>
                    <td class="num">${O(i.uses||0)} / ${i.max_uses?O(i.max_uses):"∞"}</td>
                    <td class="muted">${s?Z(s):"never"}</td>
                    <td>${i.active&&!o?'<span class="admin-pill emerald">Active</span>':'<span class="admin-pill ruby">Inactive</span>'}</td>
                    <td class="actions"><button class="btn btn-danger btn-sm" data-del="${w(i.code)}">Delete</button></td>
                  </tr>`}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      `}
    </div>
  `;g("adminBody").innerHTML=a,(n=g("pCreate"))==null||n.addEventListener("click",async()=>{const i=g("pCode").value.trim(),s=parseFloat(g("pReward").value),o=parseInt(g("pMax").value)||0,r=g("pExpires").value?parseInt(g("pExpires").value):null;if(!i||!s){y({title:"Code and reward required",variant:"error"});return}S("light");try{await L("/api/admin/promo-codes",{method:"POST",body:{code:i,rewardOrl:s,maxUses:o,expiresAt:r}}),y({title:"Promo code created",variant:"success"}),k.promos.loaded=!1,_t()}catch{}}),document.querySelectorAll("[data-del]").forEach(i=>i.addEventListener("click",async()=>{const s=i.dataset.del;if(confirm(`Delete promo code "${s}"?`)){S("light");try{await L("/api/admin/promo-codes/"+encodeURIComponent(s),{method:"DELETE"}),y({title:"Promo code deleted",variant:"success"}),k.promos.loaded=!1,_t()}catch{}}}))}async function Tt(e){var m;e&&(k.audit.page=e);const{page:t,limit:a,action:n}=k.audit;le("Fetching audit log…");let i;try{const c=new URLSearchParams({page:String(t),limit:String(a)});n&&c.set("action",n),i=await L("/api/admin/audit-log?"+c.toString())}catch(c){g("adminBody").innerHTML=F("Failed to load audit log",c.message);return}const{entries:s,pagination:o}=i,r=["","withdrawal_rejected","withdrawal_approved_initiated","withdrawal_approved_airtime","withdrawal_completed","bulk_withdrawal_process","manual_backup","create_promo_code","deactivate_promo_code","economy_update","economy_reset","flags_update","broadcast_start","broadcast_done"],l=`
    <div class="admin-section">
      <div class="admin-h">
        <div><h3>Audit Log</h3><div class="admin-h-sub">${O(o.total)} entries · page ${o.page}/${o.totalPages}</div></div>
      </div>

      <div class="admin-toolbar">
        <select class="admin-select" id="auditAction" style="max-width:280px">
          ${r.map(c=>`<option value="${w(c)}" ${c===n?"selected":""}>${c||"— all actions —"}</option>`).join("")}
        </select>
        <button class="btn btn-primary btn-sm" id="auditFilter">Filter</button>
      </div>

      ${s.length===0?F("No audit entries"):`
        <div class="admin-table-wrap">
          <div class="admin-table-scroll">
            <table class="admin-table">
              <thead>
                <tr><th>Time</th><th>Actor</th><th>Action</th><th>Target</th><th>Details</th><th>IP</th></tr>
              </thead>
              <tbody>
                ${s.map(c=>`
                  <tr>
                    <td class="muted">${Z(c.created_at)}</td>
                    <td><b>#${w(c.actor_id)}</b> <span class="muted">(${w(c.actor_role||"—")})</span></td>
                    <td><span class="admin-pill sapphire">${w(c.action)}</span></td>
                    <td class="num">${c.target_user_id||"—"}</td>
                    <td>
                      ${c.details?`<div class="admin-json">${w(JSON.stringify(c.details,null,2))}</div>`:'<span class="muted">—</span>'}
                    </td>
                    <td class="mono muted">${w(c.ip||"—")}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
        ${lt(o.page,o.totalPages,o.total)}
      `}
    </div>
  `;g("adminBody").innerHTML=l.replace(/__PAGE__/g,""),(m=g("auditFilter"))==null||m.addEventListener("click",()=>{S("light"),k.audit.action=g("auditAction").value,k.audit.page=1,k.audit.loaded=!1,Tt()}),dt(g("adminBody"),c=>Tt(c))}async function sn(){var a;if(!W){g("adminBody").innerHTML=`
      <div class="admin-empty">
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
        <div><b>Super admin only</b></div>
        <div style="font-size:11.5px;margin-top:4px;color:var(--ink-faint)">Broadcasts are restricted to super admins.</div>
      </div>`;return}if(k.broadcast.jobId)return Ra();const e=`
    <div class="admin-section">
      <div class="admin-h"><div><h3>Broadcast Message</h3><div class="admin-h-sub">Send a Telegram message to all non-banned users</div></div></div>

      <div class="admin-banner warn">
        <svg viewBox="0 0 24 24" fill="none"><path d="M3 11l15-6v14L3 13z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M3 11v2M9 14v3a2 2 0 0 0 4 0v-3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
        <div><b>This sends a Telegram message to ALL non-banned users.</b> Use with caution. Telegram rate-limits to ~30 msg/sec; we pace at 20/sec.</div>
      </div>

      <div class="admin-form-card">
        <div class="admin-field">
          <label>Message (max 4000 chars)</label>
          <textarea class="admin-textarea" id="bcText" maxlength="4000" placeholder="Type your broadcast message here…"></textarea>
          <div class="admin-char-count"><span id="bcCount">0</span> / 4000</div>
        </div>
        <button class="btn btn-primary btn-block" id="bcSend">📣 Send to all users</button>
      </div>
    </div>
  `;g("adminBody").innerHTML=e;const t=g("bcText");t==null||t.addEventListener("input",()=>{const n=t.value.length;g("bcCount").textContent=n,g("bcCount").parentElement.classList.toggle("over",n>=4e3)}),(a=g("bcSend"))==null||a.addEventListener("click",async()=>{const n=t.value.trim();if(!n){y({title:"Message is empty",variant:"error"});return}if(n.length>4e3){y({title:"Message too long",variant:"error"});return}if(!confirm("Send this broadcast to ALL non-banned users? This cannot be undone."))return;S("light");const i=g("bcSend");i.disabled=!0,i.textContent="Starting…";try{const s=await L("/api/admin/broadcast",{method:"POST",body:{text:n}});k.broadcast.jobId=s.jobId,y({title:"Broadcast started",message:`Job ${s.jobId} · ${s.total} recipients`,variant:"success"}),Ra(),Ii()}catch{}i.disabled=!1,i.textContent="📣 Send to all users"})}function Ra(){var t;const e=k.broadcast.jobId;g("adminBody").innerHTML=`
    <div class="admin-section">
      <div class="admin-h"><div><h3>Broadcast in progress</h3><div class="admin-h-sub">Job ${w(e)}</div></div></div>
      <div class="admin-form-card">
        <div class="admin-progress"><div class="admin-progress-bar" id="bcBar" style="width:0%"></div></div>
        <div class="admin-progress-stats">
          <div>Sent: <b id="bcSent">0</b></div>
          <div>Failed: <b id="bcFailed">0</b></div>
          <div>Total: <b id="bcTotal">0</b></div>
        </div>
        <div style="text-align:center;font-size:12px;color:var(--ink-mute);margin-top:8px" id="bcStatus">Starting…</div>
        <button class="btn btn-ghost btn-block" id="bcDone" style="margin-top:14px;display:none">← Back to compose</button>
      </div>
    </div>
  `,(t=g("bcDone"))==null||t.addEventListener("click",()=>{Le(),k.broadcast.jobId=null,sn()})}function Ii(){Le(),tt=setInterval(async()=>{if(!k.broadcast.jobId){Le();return}try{const e=await L("/api/admin/broadcast/"+k.broadcast.jobId),t=e.total||1,a=(e.sent||0)+(e.failed||0),n=Math.min(100,a/t*100),i=g("bcBar");i&&(i.style.width=n+"%");const s=g("bcSent"),o=g("bcFailed"),r=g("bcTotal"),l=g("bcStatus");if(s&&(s.textContent=e.sent||0),o&&(o.textContent=e.failed||0),r&&(r.textContent=e.total||0),l&&(l.textContent=`Status: ${e.status} · ${n.toFixed(0)}%`),e.status==="done"||e.status==="error"){Le(),l&&(l.textContent=`Status: ${e.status==="done"?"completed":"error"} · ${n.toFixed(0)}%`);const m=g("bcDone");m&&(m.style.display=""),S(e.status==="done"?"success":"light"),y({title:e.status==="done"?"Broadcast complete":"Broadcast failed",variant:e.status==="done"?"success":"error"})}}catch{Le()}},1e3)}function Le(){tt&&(clearInterval(tt),tt=null)}async function on(){le("Fetching feature flags…");let e;try{e=await L("/api/admin/settings")}catch(i){g("adminBody").innerHTML=F("Failed to load settings",i.message);return}const t=e.flags||{};e.defaults;const a=[{key:"maintenance_mode",label:"Maintenance mode",desc:"Block all non-admin write actions for users"},{key:"withdrawals_enabled",label:"Withdrawals enabled",desc:"Allow users to request cash-outs"},{key:"games_enabled",label:"Games enabled",desc:"Spin / scratch / coinflip / chest / lottery"},{key:"mining_enabled",label:"Mining enabled",desc:"Accrual + refuel (ads)"},{key:"faucet_enabled",label:"Faucet enabled",desc:"Hourly bonus claim"},{key:"broadcast_enabled",label:"Broadcast enabled",desc:"Allow sending broadcast messages"},{key:"signups_enabled",label:"Signups enabled",desc:"Allow new user creation"}],n=`
    ${t.maintenance_mode?`
      <div class="admin-banner">
        <svg viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
        <div><b>Maintenance mode is currently ON.</b> Regular users cannot perform any write action.</div>
      </div>
    `:""}

    <div class="admin-section">
      <div class="admin-h">
        <div><h3>Feature Flags</h3><div class="admin-h-sub">${W?"Toggle to enable/disable platform features":"View-only — super admin required to toggle"}</div></div>
      </div>

      <div class="admin-form-card">
        ${a.map(i=>`
          <label class="admin-flag-chip" style="margin-bottom:8px">
            <span class="lbl">
              <b>${w(i.label)}</b>
              <span>${w(i.desc)}</span>
            </span>
            <span class="admin-toggle">
              <input type="checkbox" data-flag="${i.key}" ${t[i.key]?"checked":""} ${W?"":"disabled"} />
              <span class="track"></span>
            </span>
          </label>
        `).join("")}
      </div>
    </div>
  `;g("adminBody").innerHTML=n,document.querySelectorAll("input[data-flag]").forEach(i=>{i.addEventListener("change",async()=>{if(!W){i.checked=!i.checked;return}const s=i.dataset.flag,o=i.checked;S("light");try{await L("/api/admin/settings",{method:"PUT",body:{flags:{[s]:o}}}),y({title:`${s} ${o?"enabled":"disabled"}`,variant:"success"}),s==="maintenance_mode"&&(k.settings.loaded=!1,on())}catch{}})})}function Bi(){const e=g("adminChip"),t=g("adminVeil"),a=g("adminClose"),n=g("adminTabs");e&&t&&e.addEventListener("click",async i=>{i.preventDefault();const s=$();if(!(s.role==="admin"||s.role==="mod"||s.permissions&&s.permissions.length>0)){y({title:"Admin access required",variant:"error"});return}S("light"),t.classList.add("show"),t.setAttribute("aria-hidden","false");const r=tn(),l=g("adminSub");if(W=await $i(),l){const m=W?"Super Admin":r.role==="admin"?"Admin":"Moderator";l.innerHTML=`Signed in as <b>${w(m)}</b>`}for(const m of Object.keys(k))k[m]&&(k[m].loaded=!1);await xa(wt)}),a&&t&&a.addEventListener("click",()=>{S("light"),t.classList.remove("show"),t.setAttribute("aria-hidden","true"),Le()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&t&&t.classList.contains("show")&&(t.classList.remove("show"),t.setAttribute("aria-hidden","true"),Le())}),n&&n.querySelectorAll(".admin-tab").forEach(i=>{i.addEventListener("click",()=>{S("light");const s=i.dataset.tab;xa(s)})})}const Me=[{screen:"mine",target:".balance-card",placement:"bottom",title:"Your balance",body:"This is your <b>ORL balance</b> — the main currency you earn by mining, playing games, and completing tasks. The fiat value updates in real time.",icon:"wallet"},{screen:"mine",target:".engine",placement:"bottom",title:"Mining engine",body:"The gauge shows your <b>engine fuel</b>. When it drains, the engine stops. Watch one ad to <b>refuel</b> and keep ORL flowing.",icon:"engine"},{screen:"mine",target:"#refuelBtn",placement:"top",title:"Refuel & boost",body:"Tap <b>Refuel</b> to watch a short ad and refill your tank to 100%. Use <b>Boost</b> for 1.2× mining speed for 3 hours.",icon:"bolt"},{screen:"mine",target:".rig-card, .feat:has(#rigBtn)",placement:"top",title:"Upgrade your rig",body:"Upgrade your <b>mining rig</b> to drain the tank faster. Faster drain = more refuels = more ad revenue = more ORL for you.",icon:"rig"},{screen:"play",target:".wheel-wrap",placement:"top",title:"Lucky spin",body:"Spin the wheel for a chance to win up to <b>600 ORL</b>. Each spin costs one ad — no daily limit. Tap the wheel center or the button below.",icon:"spin"},{screen:"play",target:"#scratchBtn",placement:"top",title:"Scratch & win",body:"Get a scratch card, then scratch with your finger to reveal prizes up to <b>250 ORL</b>. The card stays locked until you tap the button.",icon:"scratch"},{screen:"play",target:"#cfHeadsBtn",placement:"top",title:"Coin flip",body:"Pick <b>heads or tails</b> — win 65 ORL or get 15 ORL consolation. The coin does a real 3D flip animation.",icon:"coin"},{screen:"play",target:"#chestBtn",placement:"top",title:"Mystery chest",body:"Watch <b>5 ads</b> to fill the chest, then unlock it for <b>200–280 ORL</b>. The progress bar fills with each ad.",icon:"chest"},{screen:"earn",target:".ad-challenge",placement:"bottom",title:"Daily ad challenge",body:"Every ad you watch counts toward <b>milestone bonuses</b>. Hit 10, 25, and 50 ads for extra ORL rewards.",icon:"trophy"},{screen:"earn",target:"#videoWallBtn",placement:"top",title:"Video wall",body:"Watch unlimited video ads for <b>40 ORL each</b>. No daily cap — earn as much as you want.",icon:"video"},{screen:"earn",target:".seg",placement:"bottom",title:"Tasks & invites",body:"Switch between <b>Tasks</b> (earn by completing actions) and <b>Invite</b> (earn 7% forever on referrals).",icon:"share"},{screen:"wallet",target:".withdraw-head",placement:"bottom",title:"Withdrawals",body:"Cash out to <b>Bank (NGN)</b>, <b>Airtime</b>, or <b>USDT</b>. The progress bar shows how close you are to the minimum.",icon:"bank"},{screen:"wallet",target:"#methodGrid",placement:"top",title:"Payout methods",body:"Pick your preferred payout method. Bank transfers verify your account name automatically before withdrawal.",icon:"payment"},{screen:"wallet",target:"#historyList",placement:"top",title:"Recent activity",body:"Every transaction is logged here. <b>Tap any transaction</b> to see full details — withdrawal status, payout reference, and more.",icon:"history"},{screen:null,target:null,placement:"center",title:"You're all set!",body:"You now know everything about Orael. Start mining, play games, and cash out your earnings. <b>Welcome to the engine room.</b>",icon:"rocket"}],Ma={wallet:'<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="13" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M16 12h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',engine:'<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 12 7 7m5 5 5-5m-5 5v7" stroke="currentColor" stroke-width="1.5"/></svg>',bolt:'<svg viewBox="0 0 24 24" fill="none"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',rig:'<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="9" width="18" height="11" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M7 9V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" stroke="currentColor" stroke-width="1.7"/></svg>',spin:'<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 12 7 7m5 5 5-5" stroke="currentColor" stroke-width="1.5"/></svg>',scratch:'<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M7 14c2-3 4-3 6 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',coin:'<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v10M9 10l3-3 3 3M9 14l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',chest:'<svg viewBox="0 0 24 24" fill="none"><path d="M4 9h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9z" stroke="currentColor" stroke-width="1.7"/><path d="M4 9l2-4h12l2 4M12 9v11" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',trophy:'<svg viewBox="0 0 24 24" fill="none"><path d="M8 21h8M12 17v4M6 4h12v4a6 6 0 0 1-12 0V4zM6 6H4v2a3 3 0 0 0 2 2.8M18 6h2v2a3 3 0 0 1-2 2.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M10 9l5 3-5 3V9z" fill="currentColor"/></svg>',share:'<svg viewBox="0 0 24 24" fill="none"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M12 3v13m0-13L8 7m4-4 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',bank:'<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M3 10h18" stroke="currentColor" stroke-width="1.8"/></svg>',payment:'<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" stroke-width="1.8"/><path d="M2 10h20" stroke="currentColor" stroke-width="1.8"/></svg>',history:'<svg viewBox="0 0 24 24" fill="none"><path d="M12 8v4l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/></svg>',rocket:'<svg viewBox="0 0 24 24" fill="none"><path d="M5 13l-2 8 9-5 9 5-2-8M12 2v13m0-13L8 7m4-4 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'};let X=0,Q=null;function Pi(){var e,t,a;Q||(Q=document.createElement("div"),Q.className="tutorial-overlay",Q.innerHTML=`
    <div class="tutorial-spotlight" id="tutorialSpotlight"></div>
    <div class="tutorial-tooltip" id="tutorialTooltip">
      <div class="tutorial-tooltip-inner">
        <div class="tutorial-header">
          <div class="tutorial-icon" id="tutorialIcon"></div>
          <div class="tutorial-progress-bar">
            <div class="tutorial-progress-fill" id="tutorialProgressFill"></div>
          </div>
          <button class="tutorial-skip-btn" id="tutorialSkipBtn">Skip</button>
        </div>
        <div class="tutorial-content">
          <h3 class="tutorial-step-title" id="tutorialStepTitle"></h3>
          <p class="tutorial-step-body" id="tutorialStepBody"></p>
        </div>
        <div class="tutorial-footer">
          <div class="tutorial-dots" id="tutorialDots"></div>
          <div class="tutorial-nav-buttons">
            <button class="btn btn-ghost tutorial-back-btn" id="tutorialBackBtn">Back</button>
            <button class="btn btn-primary tutorial-next-btn" id="tutorialNextBtn">Next</button>
          </div>
        </div>
      </div>
    </div>
  `,document.body.appendChild(Q),(e=d("tutorialNextBtn"))==null||e.addEventListener("click",()=>{S("light"),X<Me.length-1?(X++,xt()):Oa()}),(t=d("tutorialBackBtn"))==null||t.addEventListener("click",()=>{S("light"),X>0&&(X--,xt())}),(a=d("tutorialSkipBtn"))==null||a.addEventListener("click",()=>{S("light"),Oa()}))}function rn(e){if(!e)return;const t=document.querySelector(`.nav-btn[data-screen="${e}"]`);t&&t.click()}function xt(){const e=Me[X];if(!e)return;Pi(),e.screen&&rn(e.screen),setTimeout(()=>ln(e),350),d("tutorialStepTitle").textContent=e.title,d("tutorialStepBody").innerHTML=e.body,d("tutorialIcon").innerHTML=Ma[e.icon]||Ma.rocket;const t=(X+1)/Me.length*100;d("tutorialProgressFill").style.width=t+"%";const a=d("tutorialDots");a&&(a.innerHTML=Me.map((n,i)=>`<div class="tutorial-dot ${i<X?"done":i===X?"active":""}"></div>`).join("")),d("tutorialBackBtn").style.display=X===0?"none":"",d("tutorialNextBtn").textContent=X===Me.length-1?"Get started":"Next"}function ln(e){const t=d("tutorialSpotlight"),a=d("tutorialTooltip");if(!t||!a)return;if(!e.target){t.style.display="none",a.classList.add("center"),a.style.left="50%",a.style.top="50%",a.style.transform="translate(-50%, -50%)";return}const n=document.querySelector(e.target);if(!n){t.style.display="none",a.classList.add("center"),a.style.left="50%",a.style.top="50%",a.style.transform="translate(-50%, -50%)";return}n.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{const i=n.getBoundingClientRect(),s=8;t.style.display="",t.style.left=i.left-s+"px",t.style.top=i.top-s+"px",t.style.width=i.width+s*2+"px",t.style.height=i.height+s*2+"px",a.classList.remove("center");const o=a.getBoundingClientRect(),m=window.innerHeight-78,c=m-i.bottom,p=i.top;let h;e.placement==="top"||c<o.height+32&&p>o.height+32?(h=i.top-o.height-16,a.classList.add("above"),a.classList.remove("below")):(h=i.bottom+16,a.classList.add("below"),a.classList.remove("above"));const u=16,f=m-o.height-16;h=Math.max(u,Math.min(h,f));let b=i.left+i.width/2-o.width/2;b=Math.max(16,Math.min(b,window.innerWidth-o.width-16)),a.style.left=b+"px",a.style.top=h+"px",a.style.transform="none"},300)}async function Oa(){try{await L("/api/user/tutorial-seen",{method:"POST"})}catch(e){console.error("Failed to mark tutorial as seen:",e)}Q&&(Q.classList.add("leaving"),setTimeout(()=>{Q&&(Q.remove(),Q=null)},400)),J("_tutorialSeen",!0),S("success"),rn("mine"),y({title:"Welcome to Orael!",message:"Start mining to earn your first ORL",variant:"success"})}let Ia=null;function Ba(){Q&&(clearTimeout(Ia),Ia=setTimeout(()=>{const e=Me[X];e&&ln(e)},100))}function Ni(){$().tutorialSeen||setTimeout(()=>{var t;X=0,xt(),window.addEventListener("resize",Ba),(t=document.querySelector(".scroll"))==null||t.addEventListener("scroll",Ba,{passive:!0})},600)}function Pa(){const e=document.getElementById("splash-screen"),t=document.querySelector(".app");if(e)e.style.opacity="0",e.style.transition="opacity 0.4s ease",setTimeout(()=>{e.style.display="none";const a=document.getElementById("tg-gate"),n=document.getElementById("ban-gate"),i=document.getElementById("maintenance-gate");!(a&&a.style.display==="flex"||n&&n.style.display==="flex"||i&&i.style.display==="flex")&&t&&(t.style.display="flex")},400);else{const a=document.getElementById("tg-gate"),n=document.getElementById("ban-gate"),i=document.getElementById("maintenance-gate");!(a&&a.style.display==="flex"||n&&n.style.display==="flex"||i&&i.style.display==="flex")&&t&&(t.style.display="flex")}}async function Na(){const{tg:e,user:t,startParam:a}=mn();if(!pn()){const s=document.getElementById("tg-gate"),o=document.querySelector(".app");s&&(s.style.display="flex"),o&&(o.style.display="none"),Pa();return}t&&t.id&&vn(t.id),R(),t&&Da(t);try{let s="/api/user";a&&(s+=`?start_param=${encodeURIComponent(a)}`);const o=await L(s);I(o)}catch(s){console.error("Failed to fetch user state on boot:",s)}J("_loaded",!0),Pa();const n=$();Da({first_name:n.firstName,photo_url:n.photoUrl});async function i(){try{const s=await L("/api/leaderboard");I({leaderboard:s.leaderboard,_userRank:s.userRank}),Xa(s.leaderboard)}catch(s){console.error("Failed to fetch leaderboard:",s)}}await i(),Xn(),Rn(),Mn(),An(),$n(),Kn(),ei(),oi(),ri(),Ci(),Bi(),R(),wa(),Ka(),qn(),La(),Sa(),Ni(),setInterval(()=>{$e&&$e()||(R(),Fn(),La(),Sa())},1e3),setInterval(()=>{$e&&$e()||(wa(),Vn())},5e3),setInterval(async()=>{if(!($e&&$e()))try{const s=await L("/api/user");I(s),R(),$t(),At(),await i()}catch(s){console.error("Background state sync failed:",s)}},3e4)}function Da(e){const t=d("userAv");if(!t)return;const a=e.photo_url||$&&$().photoUrl||null;if(a)t.innerHTML=`<img src="${a}" alt="avatar" onerror="this.parentElement.textContent='${(e.first_name||"A")[0].toUpperCase()}'" />`;else{const n=(e.first_name||"A")[0].toUpperCase();t.textContent=n}}document.addEventListener("click",e=>{const t=e.target.closest(".nav-btn");t&&t.dataset.screen&&zn(t.dataset.screen)},!0);document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Na):Na();
