import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as p,b as y,d as b,P as f,e as v,j as P}from"./theme-registry-CiclUM8b.js";console.log("HamBazi - Persian Party Games");const a=p("landing");y(document.documentElement,f,b("system",{phase:"landing"},"host"));document.title=a.brand.titleFa;const o=document.querySelector(".landing-header h1"),l=document.querySelector(".landing-header p"),c=document.querySelector(".landing-brand-mark");o&&(o.textContent=a.brand.titleFa);l&&(l.textContent=a.brand.taglineFa);c&&a.id==="bazmestan"&&(c.textContent="♛");v();const m=P(),s=document.getElementById("games-grid"),i=document.getElementById("action-buttons"),d=document.getElementById("btn-create");let n=null;s&&m.length>0&&(s.replaceChildren(),m.forEach(e=>{const t=document.createElement("a");t.className="landing-game-card game-card",t.dataset.gameId=e.id,t.href=`./host/host.html?game=${encodeURIComponent(e.id)}`;const u=e.minPlayers!==e.maxPlayers?`${e.minPlayers}-${e.maxPlayers}`:`${e.minPlayers}+`,g=e.id==="board"?a.brand.titleFa:e.name;t.innerHTML=`
      <div class="landing-game-icon">${e.icon}</div>
      <div class="landing-game-copy">
        <h3${e.id==="board"?' data-theme-brand="titleFa"':""}>${g}</h3>
        <p>${e.description}</p>
      </div>
      <div class="landing-game-meta">
        <span><strong>${u}</strong> بازیکن</span>
        <span><strong>${e.estimatedDuration}</strong> دقیقه</span>
      </div>
    `,t.addEventListener("click",h=>{h.preventDefault(),document.querySelectorAll(".game-card").forEach(r=>{r.classList.remove("is-selected"),r.removeAttribute("aria-current")}),t.classList.add("is-selected"),t.setAttribute("aria-current","true"),n=e.id,i&&i.classList.remove("hidden")}),s.appendChild(t)}));i==null||i.classList.toggle("hidden",!n);d&&d.addEventListener("click",e=>{if(e.preventDefault(),n){sessionStorage.setItem("hambazi:selectedGameId",n);const t=new URL("./host/host.html",window.location.href);t.searchParams.set("game",n),d.setAttribute("aria-disabled","true"),window.location.assign(t.href)}});
