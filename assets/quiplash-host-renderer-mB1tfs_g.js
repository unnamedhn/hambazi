import{t as c,e as u,f as m}from"./utils-CtiNnZvt.js";import{b as $,r as b,a as S}from"./ui-components-Tk9G7nUf.js";import{b as s}from"./quiplash-constants-O3tOxyB9.js";import"./howler-DacRvduY.js";import"./theme-registry-CiclUM8b.js";function T(t,n,e,o){const r=e.filter(i=>!i.isHost);switch(t){case"prompt":y(n,o);break;case"write-answer":R(n,r,o);break;case"vote":w(n,r,o);break;case"reveal":x(n,r,o);break;case"game-end":P(n,r,o);break;default:console.warn(`Unknown phase for Quiplash host renderer: ${t}`)}}function j(t,n,e){T(t.phase,t,n.filter(o=>!o.isHost),e)}function y(t,n){var e;v("challenge",n),h(t,n,s.PROMPT),n.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((e=t.currentPrompt)==null?void 0:e.text)||"")}</div>
    </div>
  `}function R(t,n,e){var o;v("challenge",e),h(t,e,s.WRITE_ANSWER);const r=Object.keys(t.answers),i=n.filter(l=>r.includes(l.id)),d=r.filter(l=>{var p;return(p=t.answers[l])==null?void 0:p.submitted}).length,a=r.length||n.length;e.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((o=t.currentPrompt)==null?void 0:o.text)||"")}</div>
      <div class="text-xl opacity-80 mb-5">
        ${c(d.toString())}/${c(a.toString())}
        ${s.SUBMITTED}
      </div>
      <div class="flex flex-wrap justify-center gap-3">
        ${i.map(l=>{var p;const f=!!((p=t.answers[l.id])!=null&&p.submitted);return`
            <div class="hb-host-status-chip ${f?"is-done":""}">
              ${S(l)}
              <span>${u(l.name)}</span>
              <span>${f?s.SUBMITTED:s.WAITING}</span>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function w(t,n,e){var o;v("challenge",e),h(t,e,s.VOTE);const r=Object.keys(t.votes).length,i=Object.keys(t.answers).length||n.length;e.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-prompt">${u(((o=t.currentPrompt)==null?void 0:o.text)||"")}</div>
      <div class="grid grid-cols-2 gap-4 text-xl mb-6">
        ${t.options.map(d=>C(d)).join("")}
      </div>
      <div class="text-xl opacity-80">
        ${c(r.toString())}/${c(i.toString())}
        ${s.VOTED}
      </div>
    </div>
  `}function x(t,n,e){var o;v("results",e);const r=t.currentRoundResult,i=[...(r==null?void 0:r.answerResults)||[]].sort((a,l)=>l.votes-a.votes),d=H(i,(r==null?void 0:r.voteResults)||[],n);e.resultsContainer.innerHTML=$({eyebrow:s.REVEAL,title:((o=t.currentPrompt)==null?void 0:o.text)||"",rows:`${i.map(a=>E(a,n)).join("")}
      <p class="board-result-narrator">${u(d)}</p>`})}function P(t,n,e){v("results",e);const o=Object.values(t.scores).sort((r,i)=>i.totalCoins-r.totalCoins);e.resultsContainer.innerHTML=$({eyebrow:s.GAME_OVER,title:s.RESULTS,rows:o.map((r,i)=>{const d=g(n,r.playerId)||{id:r.playerId,name:r.playerName,color:"#64748b"};return b({player:d,rank:i+1,detail:[`${s.ANSWER_VOTES}: ${c(r.answerVotes.toString())}`,`${s.HUMAN_VOTES}: ${c(r.humanVotes.toString())}`].join(" | "),reward:`${c(r.totalCoins.toString())} ${s.POINTS}`,tone:i===0?"winner":"default"})}).join("")})}function h(t,n,e){const o=t.currentPromptIndex+1;n.challengeTitle.textContent=e,n.challengeTimer.textContent=m(t.timeRemaining/1e3),n.challengeProgress.textContent=`${c(o.toString())}/${c(t.totalPrompts.toString())}`}function C(t){return`
    <div class="hb-host-option-card">
      ${u(t.text)}
    </div>
  `}function E(t,n){const o=g(n,t.playerId)||{id:t.playerId,name:t.playerId,color:"#64748b"};return b({player:o,detail:t.text,reward:`${c(t.votes.toString())} ${s.ANSWER_VOTES}`})}function H(t,n,e){const o=Math.max(0,...t.map(a=>a.votes)),r=t.filter(a=>a.votes===o&&o>0),i=r.map(a=>{var l;return((l=g(e,a.playerId))==null?void 0:l.name)||a.playerId}).join(" و "),d=n.filter(a=>a.votedDecoy).length;return r.length>1?`${i} رأی جمع را تقسیم کردند؛ اتاق هنوز داور نهایی ندارد.`:r.length===1&&d>0?`${i} برد؛ جواب‌های کمکی هم ${c(d.toString())} رأی دزدیدند.`:r.length===1?`${i} این موقعیت را بامزه‌تر از بقیه تمام کرد.`:"این دور رأی برنده نداشت؛ موقعیت بعدی فرصت جبران است."}function g(t,n){return n&&t.find(e=>e.id===n)||null}function v(t,n){n.challengeContainer.classList.toggle("hidden",t!=="challenge"),n.resultsContainer.classList.toggle("hidden",t!=="results"),n.finalResults!==n.resultsContainer&&n.finalResults.classList.add("hidden")}function A(){}export{A as cleanupHandlers,j as renderGameScreen,T as renderPhase};
