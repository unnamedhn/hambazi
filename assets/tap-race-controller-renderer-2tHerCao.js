import{g as m}from"./theme-registry-DVwZrcfh.js";import{c as R,d as b}from"./ui-components-Tk9G7nUf.js";import{t as s,e as l}from"./utils-CtiNnZvt.js";import{T as t,C as I}from"./tap-race-constants-BBZuw0gu.js";import"./howler-DacRvduY.js";const h="تلویزیون را نگاه کن",M="روی گوشی جواب بده",L="پاسخت ثبت شد",H="رتبه شما";let E=new Map,c=!1,T=null,p=null,f=null;function P(n,e,r,i,o){switch(n){case"lobby":break;case"challenge-start":k(e,i);break;case"challenge-observe":x(e,i);break;case"challenge-answer":case"challenge-active":y(e,r,i);break;case"challenge-result":U(e,r,i);break;case"game-end":D(e,r,i);break;default:console.warn(`Unknown phase for Tap Race controller: ${n}`)}}function x(n,e){var r,i;const o=n.currentChallengeIndex+1,a=((r=n.currentChallenge)==null?void 0:r.id)||"",d=T!==a;A(e),d&&(u(),c=!1,T=a),p=n.phase,g(e,`${t.CHALLENGE} ${s(o.toString())}`,h),e.timer.textContent=N(n.timeRemaining),e.challengeInfo.textContent="",e.challengeQuestion.innerHTML=`
    <div class="hb-tap-phone-prompt">
      <div class="hb-tap-phone-label">${q(n.currentChallenge)}</div>
      <div>${t.OBSERVE}</div>
    </div>
  `,e.optionsContainer.innerHTML=b({cue:h,title:((i=n.currentChallenge)==null?void 0:i.type)==="quick_count"?t.COUNT_THEM:t.MEMORIZE})}function k(n,e){u(),c=!1;const r=n.currentChallengeIndex+1;A(e),g(e,`${t.CHALLENGE} ${s(r.toString())}`,h),e.timer.textContent="",e.challengeInfo.textContent="",e.challengeQuestion.innerHTML=`
    <div class="hb-km-question">${t.WAITING}</div>
  `,e.optionsContainer.innerHTML=""}function y(n,e,r){var i;const o=n.currentChallengeIndex+1,a=((i=n.currentChallenge)==null?void 0:i.id)||"",d=T!==a,v=p!==n.phase;if(A(r),d&&(u(),c=!1,T=a),p=n.phase,r.timer.textContent=N(n.timeRemaining),g(r,`${t.CHALLENGE} ${s(o.toString())}`,M),r.challengeInfo.textContent="",!n.currentChallenge)return;if(r.challengeQuestion.innerHTML=G(n.currentChallenge),n.answers.find(_=>_.playerId===e)){u(),c=!0,r.optionsContainer.innerHTML=$();return}c||!d&&!v&&r.optionsContainer.children.length>0||S(n.currentChallenge,e,r)}function U(n,e,r){u(),p=n.phase,c=!0,w(r,t.RESULTS);const i=n.results.find(a=>a.playerId===e),o=n.scores[e];if(!i){r.myResult.innerHTML=b({cue:h,title:t.WAITING});return}r.myResult.innerHTML=R({cue:h,title:i.correct?t.CORRECT:t.WRONG,summary:i.fastest?t.FASTEST:t.RESULTS,tone:i.correct?"success":"warning",reward:{value:`+${s(i.coinsEarned.toString())}`,label:t.COINS_EARNED},total:o?{value:s(o.totalCoins.toString()),label:t.COINS_EARNED}:void 0,body:`
      ${n.correctAnswerText?`
        <div class="hb-km-question">
          ${t.CORRECT_ANSWER}: ${l(n.correctAnswerText)}
        </div>
      `:""}
      ${n.revealText?`<div class="hb-km-result-note">${l(n.revealText)}</div>`:""}
      ${i.responseTime!==null?`
        <div class="hb-km-result-note">
          ${t.RESPONSE_TIME}: ${Q(i.responseTime)}
        </div>
      `:""}
    `})}function D(n,e,r){u(),p=n.phase,w(r,t.GAME_OVER);const i=n.scores[e],o=Object.values(n.scores).sort((C,_)=>_.correctAnswers!==C.correctAnswers?_.correctAnswers-C.correctAnswers:_.fastestAnswers-C.fastestAnswers),a=o.findIndex(C=>C.playerId===e),d=a>=0?a+1:Math.max(o.length,1),v=n.championPlayerId===e;r.myResult.innerHTML=R({cue:h,title:v?t.CHAMPION:`${H}: ${s(d.toString())}`,summary:t.GAME_OVER,tone:v?"success":"default",reward:i?{value:s(i.totalCoins.toString()),label:t.COINS_EARNED}:void 0,body:i?`
      <div class="hb-km-stat-grid">
        <div>${t.CORRECT_ANSWERS}<strong>${s(i.correctAnswers.toString())}</strong></div>
        <div>${t.FASTEST_ANSWERS}<strong>${s(i.fastestAnswers.toString())}</strong></div>
        <div>${t.COINS_EARNED}<strong>${s(i.totalCoins.toString())}</strong></div>
      </div>
    `:""})}function G(n){switch(n.type){case"object_math":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${t.OBJECT_MATH}</div>
          <div class="hb-tap-phone-detail">${l(n.key)}</div>
          <div class="hb-tap-phone-display">${l(n.display)}</div>
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
          <div>${l(n.question)}</div>
          <div class="hb-tap-phone-display" style="color: ${l(n.displayColor)}">
            ${I[n.word]||n.word}
          </div>
        </div>
      `;case"memory_flash":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${t.MEMORY_FLASH}</div>
          <div>${l(n.question)}</div>
        </div>
      `;case"quick_count":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${t.QUICK_COUNT}</div>
          <div>${t.QUICK_COUNT_INSTRUCTION}</div>
        </div>
      `;case"quick_trivia":return`
        <div class="hb-tap-phone-prompt">
          <div class="hb-tap-phone-label">${t.QUICK_TRIVIA}</div>
          <div>${l(n.question)}</div>
        </div>
      `}}function S(n,e,r){O();let i=[];"options"in n?i=n.options:n.type==="odd_one_out"&&(i=n.items),r.optionsContainer.innerHTML=i.map((o,a)=>`
    <button class="answer-option-button hb-answer-option" data-index="${a}">
      <span class="hb-answer-index">${s((a+1).toString())}</span>
      <span class="hb-answer-text">${l(o)}</span>
    </button>
  `).join(""),r.optionsContainer.querySelectorAll(".answer-option-button").forEach(o=>{const a=Number(o.getAttribute("data-index")||"0"),d=v=>{v.preventDefault(),!c&&(c=!0,m.sendGameEvent("TAP_ANSWER",{playerId:e,challengeId:n.id,answerIndex:a,timestamp:Date.now()}),r.optionsContainer.innerHTML=$(),u(),f=window.setTimeout(()=>{f=null,!(T!==n.id||!["challenge-answer","challenge-active"].includes(p||""))&&(c=!1,S(n,e,r))},1500))};o.addEventListener("click",d),E.set(o,d)})}function $(){return b({cue:h,title:L,subtitle:t.WAITING})}function g(n,e,r=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${l(e)}</span>
    </div>
    ${r?`<div class="hb-minigame-instruction">${l(r)}</div>`:""}
  `}function A(n){var e;(e=n.challengeContainer)==null||e.classList.remove("hidden"),n.myResult.classList.add("hidden")}function w(n,e){var r;g(n,t.GAME_NAME,e),n.timer.textContent="",n.challengeInfo.textContent="",(r=n.challengeContainer)==null||r.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function O(){E.forEach((n,e)=>{e.removeEventListener("click",n)}),E.clear()}function u(){f!==null&&window.clearTimeout(f),f=null}function j(){O(),u(),c=!1,T=null,p=null}function q(n){if(!n)return t.CHALLENGE;switch(n.type){case"object_math":return t.OBJECT_MATH;case"odd_one_out":return t.ODD_ONE_OUT;case"color_match":return t.COLOR_MATCH;case"memory_flash":return t.MEMORY_FLASH;case"quick_count":return t.QUICK_COUNT;case"quick_trivia":return t.QUICK_TRIVIA}}function N(n){return s(Math.max(0,Math.ceil(n/1e3)).toString())}function Q(n){const e=(n/1e3).toFixed(2).replace(".","٫");return`${s(e)} ${t.SECONDS}`}export{j as cleanupHandlers,D as renderFinalResults,P as renderPhase};
