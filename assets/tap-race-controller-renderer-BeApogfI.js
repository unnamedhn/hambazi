import{g as O}from"./theme-registry-B1gdAM7C.js";import{c as f,d as g}from"./ui-components-Tk9G7nUf.js";import{t as a,e as c}from"./utils-CtiNnZvt.js";import{T as t,C as N}from"./tap-race-constants-BL3TvLMl.js";import"./howler-DacRvduY.js";const d="تلویزیون را نگاه کن",m="روی گوشی جواب بده",I="پاسخت ثبت شد",w="رتبه شما";let _=new Map,u=!1,C=null,T=null;function B(n,e,r,i,o){switch(n){case"lobby":break;case"challenge-start":M(e,i);break;case"challenge-observe":L(e,i);break;case"challenge-answer":case"challenge-active":H(e,r,i);break;case"challenge-result":x(e,r,i);break;case"game-end":k(e,r,i);break;default:console.warn(`Unknown phase for Tap Race controller: ${n}`)}}function L(n,e){var r,i;const o=n.currentChallengeIndex+1,s=((r=n.currentChallenge)==null?void 0:r.id)||"",l=C!==s;b(e),l&&(u=!1,C=s),T=n.phase,E(e,`${t.CHALLENGE} ${a(o.toString())}`,d),e.timer.textContent=$(n.timeRemaining),e.challengeInfo.textContent="",e.challengeQuestion.innerHTML=`
    <div class="hb-tap-phone-prompt">
      <div class="hb-tap-phone-label">${D(n.currentChallenge)}</div>
      <div>${t.OBSERVE}</div>
    </div>
  `,e.optionsContainer.innerHTML=g({cue:d,title:((i=n.currentChallenge)==null?void 0:i.type)==="quick_count"?t.COUNT_THEM:t.MEMORIZE})}function M(n,e){u=!1;const r=n.currentChallengeIndex+1;b(e),E(e,`${t.CHALLENGE} ${a(r.toString())}`,d),e.timer.textContent="",e.challengeInfo.textContent="",e.challengeQuestion.innerHTML=`
    <div class="hb-km-question">${t.WAITING}</div>
  `,e.optionsContainer.innerHTML=""}function H(n,e,r){var i;const o=n.currentChallengeIndex+1,s=((i=n.currentChallenge)==null?void 0:i.id)||"",l=C!==s,h=T!==n.phase;if(b(r),l&&(u=!1,C=s),T=n.phase,r.timer.textContent=$(n.timeRemaining),!l&&!h&&r.optionsContainer.children.length>0||(E(r,`${t.CHALLENGE} ${a(o.toString())}`,m),r.challengeInfo.textContent="",!n.currentChallenge))return;if(r.challengeQuestion.innerHTML=y(n.currentChallenge),n.answers.find(v=>v.playerId===e)||u){r.optionsContainer.innerHTML=A();return}U(n.currentChallenge,e,r)}function x(n,e,r){R(r,t.RESULTS);const i=n.results.find(s=>s.playerId===e),o=n.scores[e];if(!i){r.myResult.innerHTML=g({cue:d,title:t.WAITING});return}r.myResult.innerHTML=f({cue:d,title:i.correct?t.CORRECT:t.WRONG,summary:i.fastest?t.FASTEST:t.RESULTS,tone:i.correct?"success":"warning",reward:{value:`+${a(i.coinsEarned.toString())}`,label:t.COINS_EARNED},total:o?{value:a(o.totalCoins.toString()),label:t.COINS_EARNED}:void 0,body:`
      ${n.correctAnswerText?`
        <div class="hb-km-question">
          ${t.CORRECT_ANSWER}: ${c(n.correctAnswerText)}
        </div>
      `:""}
      ${n.revealText?`<div class="hb-km-result-note">${c(n.revealText)}</div>`:""}
      ${i.responseTime!==null?`
        <div class="hb-km-result-note">
          ${t.RESPONSE_TIME}: ${G(i.responseTime)}
        </div>
      `:""}
    `})}function k(n,e,r){R(r,t.GAME_OVER);const i=n.scores[e],o=Object.values(n.scores).sort((p,v)=>v.correctAnswers!==p.correctAnswers?v.correctAnswers-p.correctAnswers:v.fastestAnswers-p.fastestAnswers),s=o.findIndex(p=>p.playerId===e),l=s>=0?s+1:Math.max(o.length,1),h=n.championPlayerId===e;r.myResult.innerHTML=f({cue:d,title:h?t.CHAMPION:`${w}: ${a(l.toString())}`,summary:t.GAME_OVER,tone:h?"success":"default",reward:i?{value:a(i.totalCoins.toString()),label:t.COINS_EARNED}:void 0,body:i?`
      <div class="hb-km-stat-grid">
        <div>${t.CORRECT_ANSWERS}<strong>${a(i.correctAnswers.toString())}</strong></div>
        <div>${t.FASTEST_ANSWERS}<strong>${a(i.fastestAnswers.toString())}</strong></div>
        <div>${t.COINS_EARNED}<strong>${a(i.totalCoins.toString())}</strong></div>
      </div>
    `:""})}function y(n){switch(n.type){case"object_math":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${t.OBJECT_MATH}</div>
          <div class="hb-tap-phone-detail">${c(n.key)}</div>
          <div class="hb-tap-phone-display">${c(n.display)}</div>
          <div>${t.OBJECT_MATH_INSTRUCTION}</div>
        </div>
      `;case"odd_one_out":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${t.ODD_ONE_OUT}</div>
          <div>${t.ODD_ONE_OUT_INSTRUCTION}</div>
        </div>
      `;case"color_match":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${t.COLOR_MATCH}</div>
          <div>${c(n.question)}</div>
          <div class="hb-tap-phone-display" style="color: ${c(n.displayColor)}">
            ${N[n.word]||n.word}
          </div>
        </div>
      `;case"memory_flash":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${t.MEMORY_FLASH}</div>
          <div>${c(n.question)}</div>
        </div>
      `;case"quick_count":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${t.QUICK_COUNT}</div>
          <div>${t.QUICK_COUNT_INSTRUCTION}</div>
        </div>
      `;case"quick_trivia":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${t.QUICK_TRIVIA}</div>
          <div>${c(n.question)}</div>
        </div>
      `}}function U(n,e,r){S();let i=[];"options"in n?i=n.options:n.type==="odd_one_out"&&(i=n.items),r.optionsContainer.innerHTML=i.map((o,s)=>`
    <button class="answer-option-button hb-answer-option" data-index="${s}">
      <span class="hb-answer-index">${a((s+1).toString())}</span>
      <span class="hb-answer-text">${c(o)}</span>
    </button>
  `).join(""),r.optionsContainer.querySelectorAll(".answer-option-button").forEach(o=>{const s=Number(o.getAttribute("data-index")||"0"),l=h=>{h.preventDefault(),!u&&(u=!0,O.sendGameEvent("TAP_ANSWER",{playerId:e,challengeId:n.id,answerIndex:s,timestamp:Date.now()}),r.optionsContainer.innerHTML=A())};o.addEventListener("click",l),o.addEventListener("touchstart",l,{passive:!1}),_.set(o,l)})}function A(){return g({cue:d,title:I,subtitle:t.WAITING})}function E(n,e,r=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${c(e)}</span>
    </div>
    ${r?`<div class="hb-minigame-instruction">${c(r)}</div>`:""}
  `}function b(n){var e;(e=n.challengeContainer)==null||e.classList.remove("hidden"),n.myResult.classList.add("hidden")}function R(n,e){var r;E(n,t.GAME_NAME,e),n.timer.textContent="",n.challengeInfo.textContent="",(r=n.challengeContainer)==null||r.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function S(){_.forEach((n,e)=>{e.removeEventListener("click",n),e.removeEventListener("touchstart",n)}),_.clear()}function F(){S(),u=!1,C=null,T=null}function D(n){if(!n)return t.CHALLENGE;switch(n.type){case"object_math":return t.OBJECT_MATH;case"odd_one_out":return t.ODD_ONE_OUT;case"color_match":return t.COLOR_MATCH;case"memory_flash":return t.MEMORY_FLASH;case"quick_count":return t.QUICK_COUNT;case"quick_trivia":return t.QUICK_TRIVIA}}function $(n){return a(Math.max(0,Math.ceil(n/1e3)).toString())}function G(n){const e=(n/1e3).toFixed(2).replace(".","٫");return`${a(e)} ${t.SECONDS}`}export{F as cleanupHandlers,k as renderFinalResults,B as renderPhase};
