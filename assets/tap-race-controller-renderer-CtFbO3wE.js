import{g as N}from"./theme-registry-BNXgcGF6.js";import{c as f,d as g}from"./ui-components-_blXeNEu.js";import{j as m,t as s,e as l}from"./utils-kcsRnXbH.js";import{T as e,C as I}from"./tap-race-constants-DfjI501Q.js";const u="تلویزیون را نگاه کن",M="روی گوشی جواب بده",L="پاسخت ثبت شد",w="رتبه شما";let b=new Map,d=!1,C=null,h=null;function P(n,t,i,r,o){switch(n){case"lobby":break;case"challenge-start":x(t,r);break;case"challenge-observe":H(t,r);break;case"challenge-answer":case"challenge-active":k(t,i,r);break;case"challenge-result":y(t,i,r);break;case"game-end":U(t,i,r);break;default:console.warn(`Unknown phase for Tap Race controller: ${n}`)}}function H(n,t){var i,r;const o=n.currentChallengeIndex+1,a=((i=n.currentChallenge)==null?void 0:i.id)||"",c=C!==a;E(t),c&&(d=!1,C=a),h=n.phase,_(t,`${e.CHALLENGE} ${s(o.toString())}`,u),t.timer.textContent=O(n.timeRemaining),t.challengeInfo.textContent="",t.challengeQuestion.innerHTML=`
    <div class="hb-tap-phone-prompt">
      <div class="hb-tap-phone-label">${G(n.currentChallenge)}</div>
      <div>${e.OBSERVE}</div>
    </div>
  `,t.optionsContainer.innerHTML=g({cue:u,title:((r=n.currentChallenge)==null?void 0:r.type)==="quick_count"?e.COUNT_THEM:e.MEMORIZE})}function x(n,t){d=!1;const i=n.currentChallengeIndex+1;E(t),_(t,`${e.CHALLENGE} ${s(i.toString())}`,u),t.timer.textContent="",t.challengeInfo.textContent="",t.challengeQuestion.innerHTML=`
    <div class="hb-km-question">${e.WAITING}</div>
  `,t.optionsContainer.innerHTML=""}function k(n,t,i){var r;const o=n.currentChallengeIndex+1,a=((r=n.currentChallenge)==null?void 0:r.id)||"",c=C!==a,p=h!==n.phase;if(E(i),c&&(d=!1,C=a),h=n.phase,i.timer.textContent=O(n.timeRemaining),_(i,`${e.CHALLENGE} ${s(o.toString())}`,M),i.challengeInfo.textContent="",!n.currentChallenge)return;if(i.challengeQuestion.innerHTML=D(n.currentChallenge),n.answers.find(T=>T.playerId===t)){d=!0,i.optionsContainer.innerHTML=S();return}d||!c&&!p&&i.optionsContainer.children.length>0||R(n.currentChallenge,t,i)}function y(n,t,i){h=n.phase,d=!0,$(i,e.RESULTS);const r=n.results.find(a=>a.playerId===t),o=n.scores[t];if(!r){i.myResult.innerHTML=g({cue:u,title:e.WAITING});return}i.myResult.innerHTML=f({cue:u,title:r.correct?e.CORRECT:e.WRONG,summary:r.fastest?e.FASTEST:e.RESULTS,tone:r.correct?"success":"warning",reward:{value:`+${s(r.coinsEarned.toString())}`,label:e.COINS_EARNED},total:o?{value:s(o.totalCoins.toString()),label:e.COINS_EARNED}:void 0,body:`
      ${n.correctAnswerText?`
        <div class="hb-km-question">
          ${e.CORRECT_ANSWER}: ${l(n.correctAnswerText)}
        </div>
      `:""}
      ${n.revealText?`<div class="hb-km-result-note">${l(n.revealText)}</div>`:""}
      ${r.responseTime!==null?`
        <div class="hb-km-result-note">
          ${e.RESPONSE_TIME}: ${q(r.responseTime)}
        </div>
      `:""}
    `})}function U(n,t,i){var r;h=n.phase,$(i,e.GAME_OVER);const o=n.scores[t],a=Object.values(n.scores).sort((v,T)=>T.totalCoins-v.totalCoins),c=o?m(a.map(v=>v.totalCoins),o.totalCoins):Math.max(a.length,1),p=c===1&&((r=o==null?void 0:o.totalCoins)!=null?r:0)>0;i.myResult.innerHTML=f({cue:u,title:p?e.CHAMPION:`${w}: ${s(c.toString())}`,summary:e.GAME_OVER,tone:p?"success":"default",reward:o?{value:s(o.totalCoins.toString()),label:e.COINS_EARNED}:void 0,body:o?`
      <div class="hb-km-stat-grid">
        <div>${e.CORRECT_ANSWERS}<strong>${s(o.correctAnswers.toString())}</strong></div>
        <div>${e.FASTEST_ANSWERS}<strong>${s(o.fastestAnswers.toString())}</strong></div>
        <div>${e.COINS_EARNED}<strong>${s(o.totalCoins.toString())}</strong></div>
      </div>
    `:""})}function D(n){switch(n.type){case"object_math":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${e.OBJECT_MATH}</div>
          <div class="hb-tap-phone-detail">${l(n.key)}</div>
          <div class="hb-tap-phone-display">${l(n.display)}</div>
          <div>${e.OBJECT_MATH_INSTRUCTION}</div>
        </div>
      `;case"odd_one_out":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${e.ODD_ONE_OUT}</div>
          <div>${e.ODD_ONE_OUT_INSTRUCTION}</div>
        </div>
      `;case"color_match":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${e.COLOR_MATCH}</div>
          <div>${l(n.question)}</div>
          <div class="hb-tap-phone-display" style="color: ${l(n.displayColor)}">
            ${I[n.word]||n.word}
          </div>
        </div>
      `;case"memory_flash":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${e.MEMORY_FLASH}</div>
          <div>${l(n.question)}</div>
        </div>
      `;case"quick_count":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${e.QUICK_COUNT}</div>
          <div>${e.QUICK_COUNT_INSTRUCTION}</div>
        </div>
      `;case"quick_trivia":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${e.QUICK_TRIVIA}</div>
          <div>${l(n.question)}</div>
        </div>
      `}}function R(n,t,i){A();let r=[];"options"in n?r=n.options:n.type==="odd_one_out"&&(r=n.items),i.optionsContainer.innerHTML=r.map((o,a)=>`
    <button class="answer-option-button hb-answer-option" data-index="${a}">
      <span class="hb-answer-index">${s((a+1).toString())}</span>
      <span class="hb-answer-text">${l(o)}</span>
    </button>
  `).join(""),i.optionsContainer.querySelectorAll(".answer-option-button").forEach(o=>{const a=Number(o.getAttribute("data-index")||"0"),c=p=>{if(p.preventDefault(),d)return;d=!0;const v=N.sendGameEvent("TAP_ANSWER",{playerId:t,challengeId:n.id,answerIndex:a,timestamp:Date.now()});i.optionsContainer.innerHTML=S(),Promise.resolve(v).then(T=>{T===!1&&(C!==n.id||!["challenge-answer","challenge-active"].includes(h||"")||(d=!1,R(n,t,i)))})};o.addEventListener("click",c),b.set(o,c)})}function S(){return g({cue:u,title:L,subtitle:e.WAITING})}function _(n,t,i=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${l(t)}</span>
    </div>
    ${i?`<div class="hb-minigame-instruction">${l(i)}</div>`:""}
  `}function E(n){var t;(t=n.challengeContainer)==null||t.classList.remove("hidden"),n.myResult.classList.add("hidden")}function $(n,t){var i;_(n,e.GAME_NAME,t),n.timer.textContent="",n.challengeInfo.textContent="",(i=n.challengeContainer)==null||i.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function A(){b.forEach((n,t)=>{t.removeEventListener("click",n)}),b.clear()}function B(){A(),d=!1,C=null,h=null}function G(n){if(!n)return e.CHALLENGE;switch(n.type){case"object_math":return e.OBJECT_MATH;case"odd_one_out":return e.ODD_ONE_OUT;case"color_match":return e.COLOR_MATCH;case"memory_flash":return e.MEMORY_FLASH;case"quick_count":return e.QUICK_COUNT;case"quick_trivia":return e.QUICK_TRIVIA}}function O(n){return s(Math.max(0,Math.ceil(n/1e3)).toString())}function q(n){const t=(n/1e3).toFixed(2).replace(".","٫");return`${s(t)} ${e.SECONDS}`}export{B as cleanupHandlers,U as renderFinalResults,P as renderPhase};
