import{g as N}from"./theme-registry-B1-TVogZ.js";import{c as b,d as g}from"./ui-components-Tk9G7nUf.js";import{t as a,e as c}from"./utils-CtiNnZvt.js";import{T as r,C as m}from"./tap-race-constants-kRsdPF15.js";import"./howler-DacRvduY.js";const p="تلویزیون را نگاه کن",w="روی گوشی جواب بده",I="پاسخت ثبت شد",M="رتبه شما";let f=new Map,l=!1,T=null,v=null;function B(n,e,t,i,o){switch(n){case"lobby":break;case"challenge-start":H(e,i);break;case"challenge-observe":L(e,i);break;case"challenge-answer":case"challenge-active":x(e,t,i);break;case"challenge-result":k(e,t,i);break;case"game-end":y(e,t,i);break;default:console.warn(`Unknown phase for Tap Race controller: ${n}`)}}function L(n,e){var t,i;const o=n.currentChallengeIndex+1,s=((t=n.currentChallenge)==null?void 0:t.id)||"",d=T!==s;E(e),d&&(l=!1,T=s),v=n.phase,_(e,`${r.CHALLENGE} ${a(o.toString())}`,p),e.timer.textContent=O(n.timeRemaining),e.challengeInfo.textContent="",e.challengeQuestion.innerHTML=`
    <div class="hb-tap-phone-prompt">
      <div class="hb-tap-phone-label">${D(n.currentChallenge)}</div>
      <div>${r.OBSERVE}</div>
    </div>
  `,e.optionsContainer.innerHTML=g({cue:p,title:((i=n.currentChallenge)==null?void 0:i.type)==="quick_count"?r.COUNT_THEM:r.MEMORIZE})}function H(n,e){l=!1;const t=n.currentChallengeIndex+1;E(e),_(e,`${r.CHALLENGE} ${a(t.toString())}`,p),e.timer.textContent="",e.challengeInfo.textContent="",e.challengeQuestion.innerHTML=`
    <div class="hb-km-question">${r.WAITING}</div>
  `,e.optionsContainer.innerHTML=""}function x(n,e,t){var i;const o=n.currentChallengeIndex+1,s=((i=n.currentChallenge)==null?void 0:i.id)||"",d=T!==s,C=v!==n.phase;if(E(t),d&&(l=!1,T=s),v=n.phase,t.timer.textContent=O(n.timeRemaining),_(t,`${r.CHALLENGE} ${a(o.toString())}`,w),t.challengeInfo.textContent="",!n.currentChallenge)return;if(t.challengeQuestion.innerHTML=U(n.currentChallenge),n.answers.find(h=>h.playerId===e)){l=!0,t.optionsContainer.innerHTML=R();return}l||!d&&!C&&t.optionsContainer.children.length>0||A(n.currentChallenge,e,t)}function k(n,e,t){v=n.phase,l=!0,S(t,r.RESULTS);const i=n.results.find(s=>s.playerId===e),o=n.scores[e];if(!i){t.myResult.innerHTML=g({cue:p,title:r.WAITING});return}t.myResult.innerHTML=b({cue:p,title:i.correct?r.CORRECT:r.WRONG,summary:i.fastest?r.FASTEST:r.RESULTS,tone:i.correct?"success":"warning",reward:{value:`+${a(i.coinsEarned.toString())}`,label:r.COINS_EARNED},total:o?{value:a(o.totalCoins.toString()),label:r.COINS_EARNED}:void 0,body:`
      ${n.correctAnswerText?`
        <div class="hb-km-question">
          ${r.CORRECT_ANSWER}: ${c(n.correctAnswerText)}
        </div>
      `:""}
      ${n.revealText?`<div class="hb-km-result-note">${c(n.revealText)}</div>`:""}
      ${i.responseTime!==null?`
        <div class="hb-km-result-note">
          ${r.RESPONSE_TIME}: ${G(i.responseTime)}
        </div>
      `:""}
    `})}function y(n,e,t){v=n.phase,S(t,r.GAME_OVER);const i=n.scores[e],o=Object.values(n.scores).sort((u,h)=>h.correctAnswers!==u.correctAnswers?h.correctAnswers-u.correctAnswers:h.fastestAnswers-u.fastestAnswers),s=o.findIndex(u=>u.playerId===e),d=s>=0?s+1:Math.max(o.length,1),C=n.championPlayerId===e;t.myResult.innerHTML=b({cue:p,title:C?r.CHAMPION:`${M}: ${a(d.toString())}`,summary:r.GAME_OVER,tone:C?"success":"default",reward:i?{value:a(i.totalCoins.toString()),label:r.COINS_EARNED}:void 0,body:i?`
      <div class="hb-km-stat-grid">
        <div>${r.CORRECT_ANSWERS}<strong>${a(i.correctAnswers.toString())}</strong></div>
        <div>${r.FASTEST_ANSWERS}<strong>${a(i.fastestAnswers.toString())}</strong></div>
        <div>${r.COINS_EARNED}<strong>${a(i.totalCoins.toString())}</strong></div>
      </div>
    `:""})}function U(n){switch(n.type){case"object_math":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${r.OBJECT_MATH}</div>
          <div class="hb-tap-phone-detail">${c(n.key)}</div>
          <div class="hb-tap-phone-display">${c(n.display)}</div>
          <div>${r.OBJECT_MATH_INSTRUCTION}</div>
        </div>
      `;case"odd_one_out":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${r.ODD_ONE_OUT}</div>
          <div>${r.ODD_ONE_OUT_INSTRUCTION}</div>
        </div>
      `;case"color_match":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${r.COLOR_MATCH}</div>
          <div>${c(n.question)}</div>
          <div class="hb-tap-phone-display" style="color: ${c(n.displayColor)}">
            ${m[n.word]||n.word}
          </div>
        </div>
      `;case"memory_flash":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${r.MEMORY_FLASH}</div>
          <div>${c(n.question)}</div>
        </div>
      `;case"quick_count":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${r.QUICK_COUNT}</div>
          <div>${r.QUICK_COUNT_INSTRUCTION}</div>
        </div>
      `;case"quick_trivia":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${r.QUICK_TRIVIA}</div>
          <div>${c(n.question)}</div>
        </div>
      `}}function A(n,e,t){$();let i=[];"options"in n?i=n.options:n.type==="odd_one_out"&&(i=n.items),t.optionsContainer.innerHTML=i.map((o,s)=>`
    <button class="answer-option-button hb-answer-option" data-index="${s}">
      <span class="hb-answer-index">${a((s+1).toString())}</span>
      <span class="hb-answer-text">${c(o)}</span>
    </button>
  `).join(""),t.optionsContainer.querySelectorAll(".answer-option-button").forEach(o=>{const s=Number(o.getAttribute("data-index")||"0"),d=C=>{if(C.preventDefault(),l)return;l=!0;const u=N.sendGameEvent("TAP_ANSWER",{playerId:e,challengeId:n.id,answerIndex:s,timestamp:Date.now()});t.optionsContainer.innerHTML=R(),Promise.resolve(u).then(h=>{h===!1&&(T!==n.id||!["challenge-answer","challenge-active"].includes(v||"")||(l=!1,A(n,e,t)))})};o.addEventListener("click",d),f.set(o,d)})}function R(){return g({cue:p,title:I,subtitle:r.WAITING})}function _(n,e,t=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${c(e)}</span>
    </div>
    ${t?`<div class="hb-minigame-instruction">${c(t)}</div>`:""}
  `}function E(n){var e;(e=n.challengeContainer)==null||e.classList.remove("hidden"),n.myResult.classList.add("hidden")}function S(n,e){var t;_(n,r.GAME_NAME,e),n.timer.textContent="",n.challengeInfo.textContent="",(t=n.challengeContainer)==null||t.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function $(){f.forEach((n,e)=>{e.removeEventListener("click",n)}),f.clear()}function F(){$(),l=!1,T=null,v=null}function D(n){if(!n)return r.CHALLENGE;switch(n.type){case"object_math":return r.OBJECT_MATH;case"odd_one_out":return r.ODD_ONE_OUT;case"color_match":return r.COLOR_MATCH;case"memory_flash":return r.MEMORY_FLASH;case"quick_count":return r.QUICK_COUNT;case"quick_trivia":return r.QUICK_TRIVIA}}function O(n){return a(Math.max(0,Math.ceil(n/1e3)).toString())}function G(n){const e=(n/1e3).toFixed(2).replace(".","٫");return`${a(e)} ${r.SECONDS}`}export{F as cleanupHandlers,y as renderFinalResults,B as renderPhase};
