import{j as f,t as l,e as u,f as y}from"./utils-kcsRnXbH.js";import{b as $,r as g,a as S}from"./ui-components-_blXeNEu.js";import{b as a}from"./fibbage-constants-BvBUvF1U.js";import"./theme-registry-BNXgcGF6.js";function T(t,n,e,i){const r=e.filter(o=>!o.isHost);switch(t){case"prompt":C(n,i);break;case"write-lie":R(n,r,i);break;case"vote":x(n,r,i);break;case"reveal":I(n,r,i);break;case"game-end":E(n,r,i);break;default:console.warn(`Unknown phase for Fibbage host renderer: ${t}`)}}function j(t,n,e){T(t.phase,t,n.filter(i=>!i.isHost),e)}function C(t,n){var e;v("challenge",n),b(t,n,""),n.challengeContent.innerHTML=`
    <div class="hb-host-game-panel hb-host-prompt-only">
      <div class="hb-host-meta-label">${u(a.PROMPT)}</div>
      <div class="hb-host-prompt">${u(((e=t.currentPrompt)==null?void 0:e.text)||"")}</div>
    </div>
  `}function R(t,n,e){var i;v("challenge",e),b(t,e,a.WRITE_LIE);const r=Object.keys(t.submissions),o=n.filter(d=>r.includes(d.id)),s=r.filter(d=>{var c;return(c=t.submissions[d])==null?void 0:c.submitted}).length,p=r.length||n.length;e.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((i=t.currentPrompt)==null?void 0:i.text)||"")}</div>
      <div class="text-xl opacity-80 mb-5">
        ${l(s.toString())}/${l(p.toString())}
        ${a.SUBMITTED}
      </div>
      <div class="flex flex-wrap justify-center gap-3">
        ${o.map(d=>{var c;const m=!!((c=t.submissions[d.id])!=null&&c.submitted);return`
            <div class="hb-host-status-chip ${m?"is-done":""}">
              ${S(d)}
              <span>${u(d.name)}</span>
              <span>${m?a.SUBMITTED:a.WAITING}</span>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function x(t,n,e){var i;v("challenge",e),b(t,e,a.VOTE);const r=Object.keys(t.votes).length,o=Object.keys(t.submissions).length||n.length;e.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((i=t.currentPrompt)==null?void 0:i.text)||"")}</div>
      <div class="grid grid-cols-2 gap-4 text-xl mb-6">
        ${t.options.map(s=>P(s)).join("")}
      </div>
      <div class="text-xl opacity-80">
        ${l(r.toString())}/${l(o.toString())}
        ${a.VOTED}
      </div>
    </div>
  `}function I(t,n,e){var i,r;v("results",e);const o=t.currentRoundResult,s=t.options.find(c=>c.id===(o==null?void 0:o.truthOptionId)),p=(o==null?void 0:o.lieResults)||[],d=(o==null?void 0:o.voteResults)||[];e.resultsContainer.innerHTML=$({eyebrow:a.REVEAL,title:((i=t.currentPrompt)==null?void 0:i.text)||"",highlight:`${a.TRUTH}: ${(s==null?void 0:s.text)||((r=t.currentPrompt)==null?void 0:r.truth)||""}`,rows:[...d.map(c=>O(c,n,t.options)),...p.map(c=>k(c,n))].join("")})}function E(t,n,e){v("results",e);const i=Object.values(t.scores).sort((o,s)=>s.totalCoins-o.totalCoins),r=i.map(o=>o.totalCoins);e.resultsContainer.innerHTML=$({eyebrow:a.GAME_OVER,title:a.RESULTS,rows:i.map(o=>{const s=h(n,o.playerId)||{id:o.playerId,name:o.playerName,color:"#64748b"};return g({player:s,rank:f(r,o.totalCoins),detail:[`${a.TRUTH_GUESSES}: ${l(o.truthGuesses.toString())}`,`${a.LIE_VOTES}: ${l(o.lieVotes.toString())}`].join(" | "),reward:`+${l(o.totalCoins.toString())} ${a.COINS}`,tone:f(r,o.totalCoins)===1&&o.totalCoins>0?"winner":"default"})}).join("")})}function b(t,n,e){const i=t.currentPromptIndex+1;n.challengeTitle.textContent=e,n.challengeTimer.textContent=y(t.timeRemaining/1e3),n.challengeProgress.textContent=`${l(i.toString())}/${l(t.totalPrompts.toString())}`}function P(t){return`
    <div class="hb-host-option-card">
      ${u(t.text)}
    </div>
  `}function O(t,n,e){const i=h(n,t.playerId),r=e.find(d=>d.id===t.votedOptionId),o=h(n,t.trickedByPlayerId),s=i||{id:t.playerId,name:t.playerId,color:"#64748b"},p=[(r==null?void 0:r.text)||a.NO_VOTE,(o==null?void 0:o.name)||""].filter(Boolean).join(" | ");return g({player:s,detail:p,reward:`+${l(t.coinsEarned.toString())} ${a.COINS}`,tone:t.correct?"good":"muted"})}function k(t,n){const i=h(n,t.playerId)||{id:t.playerId,name:t.playerId,color:"#64748b"};return g({player:i,detail:t.text,reward:`${l(t.votes.toString())} ${a.LIE_VOTES} | +${l(t.coinsEarned.toString())} ${a.COINS}`})}function h(t,n){return n&&t.find(e=>e.id===n)||null}function v(t,n){n.challengeContainer.classList.toggle("hidden",t!=="challenge"),n.resultsContainer.classList.toggle("hidden",t!=="results"),n.finalResults!==n.resultsContainer&&n.finalResults.classList.add("hidden")}function V(){}export{V as cleanupHandlers,j as renderGameScreen,T as renderPhase};
