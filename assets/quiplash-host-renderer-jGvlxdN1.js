import{j as $,t as d,e as u,f as S}from"./utils-kcsRnXbH.js";import{b as m,r as b,a as R}from"./ui-components-_blXeNEu.js";import{b as s}from"./quiplash-constants-BidQ-1J6.js";import"./theme-registry-BNXgcGF6.js";function T(t,n,r,e){const i=r.filter(o=>!o.isHost);switch(t){case"prompt":x(n,e);break;case"write-answer":y(n,i,e);break;case"vote":C(n,i,e);break;case"reveal":w(n,i,e);break;case"game-end":P(n,i,e);break;default:console.warn(`Unknown phase for Quiplash host renderer: ${t}`)}}function j(t,n,r){T(t.phase,t,n.filter(e=>!e.isHost),r)}function x(t,n){var r;v("challenge",n),h(t,n,s.PROMPT),n.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((r=t.currentPrompt)==null?void 0:r.text)||"")}</div>
    </div>
  `}function y(t,n,r){var e;v("challenge",r),h(t,r,s.WRITE_ANSWER);const i=Object.keys(t.answers),o=n.filter(c=>i.includes(c.id)),l=i.filter(c=>{var p;return(p=t.answers[c])==null?void 0:p.submitted}).length,a=i.length||n.length;r.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((e=t.currentPrompt)==null?void 0:e.text)||"")}</div>
      <div class="text-xl opacity-80 mb-5">
        ${d(l.toString())}/${d(a.toString())}
        ${s.SUBMITTED}
      </div>
      <div class="flex flex-wrap justify-center gap-3">
        ${o.map(c=>{var p;const f=!!((p=t.answers[c.id])!=null&&p.submitted);return`
            <div class="hb-host-status-chip ${f?"is-done":""}">
              ${R(c)}
              <span>${u(c.name)}</span>
              <span>${f?s.SUBMITTED:s.WAITING}</span>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function C(t,n,r){var e;v("challenge",r),h(t,r,s.VOTE);const i=Object.keys(t.votes).length,o=Object.keys(t.answers).length||n.length;r.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((e=t.currentPrompt)==null?void 0:e.text)||"")}</div>
      <div class="grid grid-cols-2 gap-4 text-xl mb-6">
        ${t.options.map(l=>E(l)).join("")}
      </div>
      <div class="text-xl opacity-80">
        ${d(i.toString())}/${d(o.toString())}
        ${s.VOTED}
      </div>
    </div>
  `}function w(t,n,r){var e;v("results",r);const i=t.currentRoundResult,o=[...(i==null?void 0:i.answerResults)||[]].sort((a,c)=>c.votes-a.votes),l=H(o,(i==null?void 0:i.voteResults)||[],n);r.resultsContainer.innerHTML=m({eyebrow:s.REVEAL,title:((e=t.currentPrompt)==null?void 0:e.text)||"",rows:`${o.map(a=>k(a,n)).join("")}
      <p class="board-result-narrator">${u(l)}</p>`})}function P(t,n,r){v("results",r);const e=Object.values(t.scores).sort((o,l)=>l.totalCoins-o.totalCoins),i=e.map(o=>o.totalCoins);r.resultsContainer.innerHTML=m({eyebrow:s.GAME_OVER,title:s.RESULTS,rows:e.map(o=>{const l=g(n,o.playerId)||{id:o.playerId,name:o.playerName,color:"#64748b"};return b({player:l,rank:$(i,o.totalCoins),detail:[`${s.ANSWER_VOTES}: ${d(o.answerVotes.toString())}`,`${s.HUMAN_VOTES}: ${d(o.humanVotes.toString())}`].join(" | "),reward:`${d(o.totalCoins.toString())} ${s.POINTS}`,tone:$(i,o.totalCoins)===1&&o.totalCoins>0?"winner":"default"})}).join("")})}function h(t,n,r){const e=t.currentPromptIndex+1;n.challengeTitle.textContent=r,n.challengeTimer.textContent=S(t.timeRemaining/1e3),n.challengeProgress.textContent=`${d(e.toString())}/${d(t.totalPrompts.toString())}`}function E(t){return`
    <div class="hb-host-option-card">
      ${u(t.text)}
    </div>
  `}function k(t,n){const e=g(n,t.playerId)||{id:t.playerId,name:t.playerId,color:"#64748b"};return b({player:e,detail:t.text,reward:`${d(t.votes.toString())} ${s.ANSWER_VOTES}`})}function H(t,n,r){const e=Math.max(0,...t.map(a=>a.votes)),i=t.filter(a=>a.votes===e&&e>0),o=i.map(a=>{var c;return((c=g(r,a.playerId))==null?void 0:c.name)||a.playerId}).join(" و "),l=n.filter(a=>a.votedDecoy).length;return i.length>1?`${o} رأی جمع را تقسیم کردند؛ اتاق هنوز داور نهایی ندارد.`:i.length===1&&l>0?`${o} برد؛ جواب‌های کمکی هم ${d(l.toString())} رأی دزدیدند.`:i.length===1?`${o} این موقعیت را بامزه‌تر از بقیه تمام کرد.`:"این دور رأی برنده نداشت؛ موقعیت بعدی فرصت جبران است."}function g(t,n){return n&&t.find(r=>r.id===n)||null}function v(t,n){n.challengeContainer.classList.toggle("hidden",t!=="challenge"),n.resultsContainer.classList.toggle("hidden",t!=="results"),n.finalResults!==n.resultsContainer&&n.finalResults.classList.add("hidden")}function A(){}export{A as cleanupHandlers,j as renderGameScreen,T as renderPhase};
