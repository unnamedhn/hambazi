import{t as l,e as u,f as $}from"./utils-CtiNnZvt.js";import{b as m,r as g,a as y}from"./ui-components-Tk9G7nUf.js";import{b as s}from"./fibbage-constants-BtyxFK-M.js";import"./howler-DacRvduY.js";import"./theme-registry-B1-TVogZ.js";function S(t,n,o,e){const r=o.filter(i=>!i.isHost);switch(t){case"prompt":T(n,e);break;case"write-lie":I(n,r,e);break;case"vote":R(n,r,e);break;case"reveal":x(n,r,e);break;case"game-end":C(n,r,e);break;default:console.warn(`Unknown phase for Fibbage host renderer: ${t}`)}}function j(t,n,o){S(t.phase,t,n.filter(e=>!e.isHost),o)}function T(t,n){var o;v("challenge",n),b(t,n,""),n.challengeContent.innerHTML=`
    <div class="hb-host-game-panel hb-host-prompt-only">
      <div class="hb-host-meta-label">${u(s.PROMPT)}</div>
      <div class="hb-host-prompt">${u(((o=t.currentPrompt)==null?void 0:o.text)||"")}</div>
    </div>
  `}function I(t,n,o){var e;v("challenge",o),b(t,o,s.WRITE_LIE);const r=Object.keys(t.submissions),i=n.filter(a=>r.includes(a.id)),c=r.filter(a=>{var d;return(d=t.submissions[a])==null?void 0:d.submitted}).length,p=r.length||n.length;o.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((e=t.currentPrompt)==null?void 0:e.text)||"")}</div>
      <div class="text-xl opacity-80 mb-5">
        ${l(c.toString())}/${l(p.toString())}
        ${s.SUBMITTED}
      </div>
      <div class="flex flex-wrap justify-center gap-3">
        ${i.map(a=>{var d;const f=!!((d=t.submissions[a.id])!=null&&d.submitted);return`
            <div class="hb-host-status-chip ${f?"is-done":""}">
              ${y(a)}
              <span>${u(a.name)}</span>
              <span>${f?s.SUBMITTED:s.WAITING}</span>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function R(t,n,o){var e;v("challenge",o),b(t,o,s.VOTE);const r=Object.keys(t.votes).length,i=Object.keys(t.submissions).length||n.length;o.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((e=t.currentPrompt)==null?void 0:e.text)||"")}</div>
      <div class="grid grid-cols-2 gap-4 text-xl mb-6">
        ${t.options.map(c=>E(c)).join("")}
      </div>
      <div class="text-xl opacity-80">
        ${l(r.toString())}/${l(i.toString())}
        ${s.VOTED}
      </div>
    </div>
  `}function x(t,n,o){var e,r;v("results",o);const i=t.currentRoundResult,c=t.options.find(d=>d.id===(i==null?void 0:i.truthOptionId)),p=(i==null?void 0:i.lieResults)||[],a=(i==null?void 0:i.voteResults)||[];o.resultsContainer.innerHTML=m({eyebrow:s.REVEAL,title:((e=t.currentPrompt)==null?void 0:e.text)||"",highlight:`${s.TRUTH}: ${(c==null?void 0:c.text)||((r=t.currentPrompt)==null?void 0:r.truth)||""}`,rows:[...a.map(d=>P(d,n,t.options)),...p.map(d=>O(d,n))].join("")})}function C(t,n,o){v("results",o);const e=Object.values(t.scores).sort((r,i)=>i.totalCoins-r.totalCoins);o.resultsContainer.innerHTML=m({eyebrow:s.GAME_OVER,title:s.RESULTS,rows:e.map((r,i)=>{const c=h(n,r.playerId)||{id:r.playerId,name:r.playerName,color:"#64748b"};return g({player:c,rank:i+1,detail:[`${s.TRUTH_GUESSES}: ${l(r.truthGuesses.toString())}`,`${s.LIE_VOTES}: ${l(r.lieVotes.toString())}`].join(" | "),reward:`+${l(r.totalCoins.toString())} ${s.COINS}`,tone:i===0?"winner":"default"})}).join("")})}function b(t,n,o){const e=t.currentPromptIndex+1;n.challengeTitle.textContent=o,n.challengeTimer.textContent=$(t.timeRemaining/1e3),n.challengeProgress.textContent=`${l(e.toString())}/${l(t.totalPrompts.toString())}`}function E(t){return`
    <div class="hb-host-option-card">
      ${u(t.text)}
    </div>
  `}function P(t,n,o){const e=h(n,t.playerId),r=o.find(a=>a.id===t.votedOptionId),i=h(n,t.trickedByPlayerId),c=e||{id:t.playerId,name:t.playerId,color:"#64748b"},p=[(r==null?void 0:r.text)||s.NO_VOTE,(i==null?void 0:i.name)||""].filter(Boolean).join(" | ");return g({player:c,detail:p,reward:`+${l(t.coinsEarned.toString())} ${s.COINS}`,tone:t.correct?"good":"muted"})}function O(t,n){const e=h(n,t.playerId)||{id:t.playerId,name:t.playerId,color:"#64748b"};return g({player:e,detail:t.text,reward:`${l(t.votes.toString())} ${s.LIE_VOTES} | +${l(t.coinsEarned.toString())} ${s.COINS}`})}function h(t,n){return n&&t.find(o=>o.id===n)||null}function v(t,n){n.challengeContainer.classList.toggle("hidden",t!=="challenge"),n.resultsContainer.classList.toggle("hidden",t!=="results"),n.finalResults!==n.resultsContainer&&n.finalResults.classList.add("hidden")}function V(){}export{V as cleanupHandlers,j as renderGameScreen,S as renderPhase};
