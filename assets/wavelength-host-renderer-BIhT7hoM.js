import{h as C,t as a,e as d,f as G}from"./utils-DwvgUve0.js";import{b as y,r as $,a as f}from"./ui-components-Dv-0K--_.js";import{b as i}from"./wavelength-constants-Dzyp9o5y.js";import"./howler-DacRvduY.js";import"./theme-registry-DnI3cy_m.js";function T(n,e,t,r){const o=t.filter(l=>!l.isHost);switch(n){case"intro":_(e,o,r);break;case"psychic-clue":w(e,o,r);break;case"guessing":L(e,o,r);break;case"reveal":N(e,o,r);break;case"game-end":H(e,o,r);break;default:console.warn(`Unknown phase for Wavelength host renderer: ${n}`)}}function j(n,e,t){T(n.phase,n,e.filter(r=>!r.isHost),t)}function _(n,e,t){h("challenge",t),t.challengeTitle.textContent=i.INTRO,t.challengeTimer.textContent="",t.challengeProgress.textContent=R(n);const r=g(e,n.psychicId);t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="text-xl opacity-75 mb-3">${i.PSYCHIC}</div>
      <div class="hb-host-focus-card">
        ${r?f(r):""}
        <div class="text-3xl font-bold">${d(n.psychicName||"")}</div>
      </div>
      <div class="mt-8">${v(n,null,null)}</div>
    </div>
  `}function w(n,e,t){h("challenge",t),E(n,t,i.PSYCHIC_CLUE);const r=g(e,n.psychicId);t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="mb-6 hb-host-focus-card">
        ${r?f(r):""}
        <span class="text-xl font-bold">${d(n.psychicName||"")}</span>
      </div>
      ${v(n,null,null)}
      <div class="mt-8 text-xl opacity-80">${i.WAITING_FOR_PSYCHIC}</div>
    </div>
  `}function L(n,e,t){h("challenge",t),E(n,t,i.GUESSING);const r=Object.keys(n.guesses),o=e.filter(s=>r.includes(s.id)),l=r.filter(s=>{var c;return(c=n.guesses[s])==null?void 0:c.submitted}).length;t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt mb-6">
        ${i.CLUE}: ${d(n.clue||i.NO_CLUE)}
      </div>
      ${v(n,null,null)}
      <div class="mt-6 text-xl opacity-80">
        ${a(l.toString())}/${a(r.length.toString())}
        ${i.WAITING_FOR_GUESSERS}
      </div>
      <div class="mt-5 flex flex-wrap justify-center gap-3">
        ${o.map(s=>{var c;const u=!!((c=n.guesses[s.id])!=null&&c.submitted);return`
            <div class="hb-host-status-chip ${u?"is-done":""}">
              ${f(s)}
              <span>${d(s.name)}</span>
              <span>${u?i.GUESSED:i.WAITING}</span>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function N(n,e,t){var r,o,l;h("results",t);const s=n.currentRoundResult,c=[...(s==null?void 0:s.guessResults)||[]].sort((p,I)=>I.coinsEarned-p.coinsEarned),u=g(e,(s==null?void 0:s.psychicId)||n.psychicId),S=(o=(r=s==null?void 0:s.targetValue)!=null?r:n.targetValue)!=null?o:0,m=(s==null?void 0:s.averageGuess)!==null&&(s==null?void 0:s.averageGuess)!==void 0?` | ${i.AVERAGE}: ${a(s.averageGuess.toString())}`:"",x=u?$({player:u,detail:i.PSYCHIC_BONUS,reward:`+${a(((s==null?void 0:s.psychicCoinsEarned)||0).toString())} ${i.COINS}`,tone:((s==null?void 0:s.psychicCoinsEarned)||0)>0?"good":"default"}):"";t.resultsContainer.innerHTML=y({eyebrow:i.REVEAL,title:`${i.CLUE}: ${(s==null?void 0:s.clue)||n.clue||""}`,subtitle:`${i.TARGET}: ${a(S.toString())}${m}`,rows:`
      <div class="hb-host-result-visual">
        ${v(n,S,(l=s==null?void 0:s.averageGuess)!=null?l:null)}
      </div>
      ${x}
      ${c.map(p=>O(p,e)).join("")}
    `})}function H(n,e,t){h("results",t);const r=Object.values(n.scores).sort((l,s)=>s.totalCoins-l.totalCoins),o=r.map(l=>l.totalCoins);t.resultsContainer.innerHTML=y({eyebrow:i.GAME_OVER,title:i.RESULTS,rows:r.map(l=>{const s=g(e,l.playerId)||{id:l.playerId,name:l.playerName,color:"#64748b"};return $({player:s,rank:C(o,l.totalCoins),detail:[`${i.CLOSE_GUESSES}: ${a(l.closeGuesses.toString())}`,`${i.PERFECT_GUESSES}: ${a(l.perfectGuesses.toString())}`,`${i.PSYCHIC_BONUS}: ${a(l.psychicBonuses.toString())}`].join(" | "),reward:`+${a(l.totalCoins.toString())} ${i.COINS}`,tone:C(o,l.totalCoins)===1&&l.totalCoins>0?"winner":"default"})}).join("")})}function O(n,e){const r=g(e,n.playerId)||{id:n.playerId,name:n.playerId,color:"#64748b"};return $({player:r,detail:[`${i.YOUR_GUESS}: ${n.guessValue===null?i.NO_CLUE:a(n.guessValue.toString())}`,`${i.DISTANCE}: ${n.distance===null?"-":a(n.distance.toString())}`].join(" | "),reward:`+${a(n.coinsEarned.toString())} ${i.COINS}`,tone:n.coinsEarned>0?"good":"muted"})}function E(n,e,t){e.challengeTitle.textContent=t,e.challengeTimer.textContent=G(n.timeRemaining/1e3),e.challengeProgress.textContent=R(n)}function R(n){const e=n.currentRoundIndex+1;return`${i.ROUND} ${a(e.toString())} ${i.OF} ${a(n.totalRounds.toString())}`}function v(n,e,t,r){var o,l;return`
    <div class="hb-host-spectrum">
      <div class="relative h-10 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 shadow-lg">
        ${typeof e=="number"?b(e,"bg-white",i.TARGET):""}
        ${typeof t=="number"?b(t,"bg-green-300",i.AVERAGE):""}
        
      </div>
      <div class="mt-4 flex justify-between gap-6 text-xl font-black">
        <span class="text-left">${d(((o=n.currentSpectrum)==null?void 0:o.leftLabel)||"")}</span>
        <span class="text-right">${d(((l=n.currentSpectrum)==null?void 0:l.rightLabel)||"")}</span>
      </div>
    </div>
  `}function b(n,e,t){const r=Math.max(0,Math.min(100,n));return`
    <div class="absolute top-1/2 h-14 w-2 -translate-y-1/2 rounded ${e}" style="left: ${r}%" title="${d(t)}"></div>
  `}function g(n,e){return e&&n.find(t=>t.id===e)||null}function h(n,e){e.challengeContainer.classList.toggle("hidden",n!=="challenge"),e.resultsContainer.classList.toggle("hidden",n!=="results"),e.finalResults!==e.resultsContainer&&e.finalResults.classList.add("hidden")}function M(){}export{M as cleanupHandlers,j as renderGameScreen,T as renderPhase};
