import{c as m,t as d,e as u,f as R}from"./utils-B-zlAPKk.js";import{b as $,c as S,d as T}from"./ui-components-FMHP__KN.js";import{Q as s}from"./quiplash-constants-COhCMD1-.js";function h(t,n,e,r){const a=e.filter(o=>!o.isHost);switch(t){case"prompt":C(n,r);break;case"write-answer":x(n,a,r);break;case"vote":w(n,a,r);break;case"reveal":case"reaction":P(n,a,r);break;case"game-end":_(n,a,r);break;default:console.warn(`Unknown phase for Quiplash host renderer: ${t}`)}}function y(t,n,e){h(t.phase,t,n.filter(r=>!r.isHost),e)}function C(t,n){var e;v("challenge",n),g(t,n,s.PROMPT),n.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((e=t.currentPrompt)==null?void 0:e.text)||"")}</div>
    </div>
  `}function x(t,n,e){var r;v("challenge",e),g(t,e,s.WRITE_ANSWER);const a=Object.keys(t.answers),o=n.filter(c=>a.includes(c.id)),l=a.filter(c=>{var p;return(p=t.answers[c])==null?void 0:p.submitted}).length,i=a.length||n.length;e.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((r=t.currentPrompt)==null?void 0:r.text)||"")}</div>
      <div class="text-xl opacity-80 mb-5">
        ${d(l.toString())}/${d(i.toString())}
        ${s.SUBMITTED}
      </div>
      <div class="flex flex-wrap justify-center gap-3">
        ${o.map(c=>{var p;const b=!!((p=t.answers[c.id])!=null&&p.submitted);return`
            <div class="hb-host-status-chip ${b?"is-done":""}">
              ${T(c)}
              <span>${u(c.name)}</span>
              <span>${b?s.SUBMITTED:s.WAITING}</span>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function w(t,n,e){var r;v("challenge",e),g(t,e,s.VOTE);const a=Object.keys(t.votes).length,o=Object.keys(t.answers).length||n.length;e.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((r=t.currentPrompt)==null?void 0:r.text)||"")}</div>
      <div class="grid grid-cols-2 gap-4 text-xl mb-6">
        ${t.options.map(l=>E(l)).join("")}
      </div>
      <div class="text-xl opacity-80">
        ${d(a.toString())}/${d(o.toString())}
        ${s.VOTED}
      </div>
    </div>
  `}function P(t,n,e){var r;v("results",e);const a=t.currentRoundResult,o=[...(a==null?void 0:a.answerResults)||[]].sort((i,c)=>c.votes-i.votes),l=H(o,(a==null?void 0:a.voteResults)||[],n);e.resultsContainer.innerHTML=$({eyebrow:s.REVEAL,title:((r=t.currentPrompt)==null?void 0:r.text)||"",rows:`${o.map(i=>O(i,n)).join("")}
      <p class="board-result-narrator">${u(l)}</p>`})}function _(t,n,e){v("results",e);const r=Object.values(t.scores).sort((o,l)=>l.totalCoins-o.totalCoins),a=r.map(o=>o.totalCoins);e.resultsContainer.innerHTML=$({eyebrow:s.GAME_OVER,title:s.RESULTS,rows:r.map(o=>{const l=f(n,o.playerId)||{id:o.playerId,name:o.playerName,color:"#64748b"};return S({player:l,rank:m(a,o.totalCoins),detail:[`${s.ANSWER_VOTES}: ${d(o.answerVotes.toString())}`,`${s.HUMAN_VOTES}: ${d(o.humanVotes.toString())}`].join(" | "),reward:`${d(o.totalCoins.toString())} ${s.POINTS}`,tone:m(a,o.totalCoins)===1&&o.totalCoins>0?"winner":"default"})}).join("")})}function g(t,n,e){const r=t.currentPromptIndex+1;n.challengeTitle.textContent=e,n.challengeTimer.textContent=R(t.timeRemaining/1e3),n.challengeProgress.textContent=`${d(r.toString())}/${d(t.totalPrompts.toString())}`}function E(t){return`
    <div class="hb-host-option-card">
      ${u(t.text)}
    </div>
  `}function O(t,n){const r=f(n,t.playerId)||{id:t.playerId,name:t.playerId,color:"#64748b"};return S({player:r,detail:t.text,reward:`${d(t.votes.toString())} ${s.ANSWER_VOTES}`})}function H(t,n,e){const r=Math.max(0,...t.map(i=>i.votes)),a=t.filter(i=>i.votes===r&&r>0),o=a.map(i=>{var c;return((c=f(e,i.playerId))==null?void 0:c.name)||i.playerId}).join(" و "),l=n.filter(i=>i.votedDecoy).length;return a.length>1?`${o} رأی جمع را تقسیم کردند؛ اتاق هنوز داور نهایی ندارد.`:a.length===1&&l>0?`${o} برد؛ جواب‌های کمکی هم ${d(l.toString())} رأی دزدیدند.`:a.length===1?`${o} این موقعیت را بامزه‌تر از بقیه تمام کرد.`:"این دور رأی برنده نداشت؛ موقعیت بعدی فرصت جبران است."}function f(t,n){return n&&t.find(e=>e.id===n)||null}function v(t,n){n.challengeContainer.classList.toggle("hidden",t!=="challenge"),n.resultsContainer.classList.toggle("hidden",t!=="results"),n.finalResults!==n.resultsContainer&&n.finalResults.classList.add("hidden")}function j(){}const V=Object.freeze(Object.defineProperty({__proto__:null,cleanupHandlers:j,renderGameScreen:y,renderPhase:h},Symbol.toStringTag,{value:"Module"})),A=Object.freeze(Object.defineProperty({__proto__:null,renderGameScreen:y,renderPhase:h},Symbol.toStringTag,{value:"Module"}));export{V as q,A as s};
