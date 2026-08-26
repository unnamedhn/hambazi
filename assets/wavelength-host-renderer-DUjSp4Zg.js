import{t as a,e as d,f as I}from"./utils-CtiNnZvt.js";import{b as C,r as $,a as f}from"./ui-components-Tk9G7nUf.js";import{b as s}from"./wavelength-constants-B8Zat8xZ.js";import"./howler-DacRvduY.js";import"./theme-registry-DVwZrcfh.js";function G(n,e,t,i){const l=t.filter(o=>!o.isHost);switch(n){case"intro":T(e,l,i);break;case"psychic-clue":_(e,l,i);break;case"guessing":w(e,l,i);break;case"reveal":L(e,l,i);break;case"game-end":N(e,l,i);break;default:console.warn(`Unknown phase for Wavelength host renderer: ${n}`)}}function j(n,e,t){G(n.phase,n,e.filter(i=>!i.isHost),t)}function T(n,e,t){h("challenge",t),t.challengeTitle.textContent=s.INTRO,t.challengeTimer.textContent="",t.challengeProgress.textContent=E(n);const i=g(e,n.psychicId);t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="text-xl opacity-75 mb-3">${s.PSYCHIC}</div>
      <div class="hb-host-focus-card">
        ${i?f(i):""}
        <div class="text-3xl font-bold">${d(n.psychicName||"")}</div>
      </div>
      <div class="mt-8">${v(n,null,null)}</div>
    </div>
  `}function _(n,e,t){h("challenge",t),y(n,t,s.PSYCHIC_CLUE);const i=g(e,n.psychicId);t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="mb-6 hb-host-focus-card">
        ${i?f(i):""}
        <span class="text-xl font-bold">${d(n.psychicName||"")}</span>
      </div>
      ${v(n,null,null)}
      <div class="mt-8 text-xl opacity-80">${s.WAITING_FOR_PSYCHIC}</div>
    </div>
  `}function w(n,e,t){h("challenge",t),y(n,t,s.GUESSING);const i=Object.keys(n.guesses),l=e.filter(r=>i.includes(r.id)),o=i.filter(r=>{var c;return(c=n.guesses[r])==null?void 0:c.submitted}).length;t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt mb-6">
        ${s.CLUE}: ${d(n.clue||s.NO_CLUE)}
      </div>
      ${v(n,null,null)}
      <div class="mt-6 text-xl opacity-80">
        ${a(o.toString())}/${a(i.length.toString())}
        ${s.WAITING_FOR_GUESSERS}
      </div>
      <div class="mt-5 flex flex-wrap justify-center gap-3">
        ${l.map(r=>{var c;const u=!!((c=n.guesses[r.id])!=null&&c.submitted);return`
            <div class="hb-host-status-chip ${u?"is-done":""}">
              ${f(r)}
              <span>${d(r.name)}</span>
              <span>${u?s.GUESSED:s.WAITING}</span>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function L(n,e,t){var i,l,o;h("results",t);const r=n.currentRoundResult,c=[...(r==null?void 0:r.guessResults)||[]].sort((p,x)=>x.coinsEarned-p.coinsEarned),u=g(e,(r==null?void 0:r.psychicId)||n.psychicId),S=(l=(i=r==null?void 0:r.targetValue)!=null?i:n.targetValue)!=null?l:0,R=(r==null?void 0:r.averageGuess)!==null&&(r==null?void 0:r.averageGuess)!==void 0?` | ${s.AVERAGE}: ${a(r.averageGuess.toString())}`:"",m=u?$({player:u,detail:s.PSYCHIC_BONUS,reward:`+${a(((r==null?void 0:r.psychicCoinsEarned)||0).toString())} ${s.COINS}`,tone:((r==null?void 0:r.psychicCoinsEarned)||0)>0?"good":"default"}):"";t.resultsContainer.innerHTML=C({eyebrow:s.REVEAL,title:`${s.CLUE}: ${(r==null?void 0:r.clue)||n.clue||""}`,subtitle:`${s.TARGET}: ${a(S.toString())}${R}`,rows:`
      <div class="hb-host-result-visual">
        ${v(n,S,(o=r==null?void 0:r.averageGuess)!=null?o:null)}
      </div>
      ${m}
      ${c.map(p=>H(p,e)).join("")}
    `})}function N(n,e,t){h("results",t);const i=Object.values(n.scores).sort((l,o)=>o.totalCoins-l.totalCoins);t.resultsContainer.innerHTML=C({eyebrow:s.GAME_OVER,title:s.RESULTS,rows:i.map((l,o)=>{const r=g(e,l.playerId)||{id:l.playerId,name:l.playerName,color:"#64748b"};return $({player:r,rank:o+1,detail:[`${s.CLOSE_GUESSES}: ${a(l.closeGuesses.toString())}`,`${s.PERFECT_GUESSES}: ${a(l.perfectGuesses.toString())}`,`${s.PSYCHIC_BONUS}: ${a(l.psychicBonuses.toString())}`].join(" | "),reward:`+${a(l.totalCoins.toString())} ${s.COINS}`,tone:o===0?"winner":"default"})}).join("")})}function H(n,e){const i=g(e,n.playerId)||{id:n.playerId,name:n.playerId,color:"#64748b"};return $({player:i,detail:[`${s.YOUR_GUESS}: ${n.guessValue===null?s.NO_CLUE:a(n.guessValue.toString())}`,`${s.DISTANCE}: ${n.distance===null?"-":a(n.distance.toString())}`].join(" | "),reward:`+${a(n.coinsEarned.toString())} ${s.COINS}`,tone:n.coinsEarned>0?"good":"muted"})}function y(n,e,t){e.challengeTitle.textContent=t,e.challengeTimer.textContent=I(n.timeRemaining/1e3),e.challengeProgress.textContent=E(n)}function E(n){const e=n.currentRoundIndex+1;return`${s.ROUND} ${a(e.toString())} ${s.OF} ${a(n.totalRounds.toString())}`}function v(n,e,t,i){var l,o;return`
    <div class="hb-host-spectrum">
      <div class="relative h-10 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 shadow-lg">
        ${typeof e=="number"?b(e,"bg-white",s.TARGET):""}
        ${typeof t=="number"?b(t,"bg-green-300",s.AVERAGE):""}
        
      </div>
      <div class="mt-4 flex justify-between gap-6 text-xl font-black">
        <span class="text-left">${d(((l=n.currentSpectrum)==null?void 0:l.leftLabel)||"")}</span>
        <span class="text-right">${d(((o=n.currentSpectrum)==null?void 0:o.rightLabel)||"")}</span>
      </div>
    </div>
  `}function b(n,e,t){const i=Math.max(0,Math.min(100,n));return`
    <div class="absolute top-1/2 h-14 w-2 -translate-y-1/2 rounded ${e}" style="left: ${i}%" title="${d(t)}"></div>
  `}function g(n,e){return e&&n.find(t=>t.id===e)||null}function h(n,e){e.challengeContainer.classList.toggle("hidden",n!=="challenge"),e.resultsContainer.classList.toggle("hidden",n!=="results"),e.finalResults!==e.resultsContainer&&e.finalResults.classList.add("hidden")}function M(){}export{M as cleanupHandlers,j as renderGameScreen,G as renderPhase};
