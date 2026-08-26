import{b as T,r as m}from"./ui-components-Tk9G7nUf.js";import{t as a,e as d}from"./utils-CtiNnZvt.js";import{T as t,C as R}from"./tap-race-constants-CdinSpZC.js";import"./howler-DacRvduY.js";import"./theme-registry-C69X5mSl.js";let g=null,C=null,p=null;function _(e,n,s,r,h){const l=b(s);switch(e){case"challenge-start":N(n,r);break;case"challenge-observe":case"challenge-answer":case"challenge-active":y(n,l,r);break;case"challenge-result":w(n,l,r);break;case"game-end":$("results",r),I(n,l,r);break;default:console.warn(`Unknown phase for Tap Race renderer: ${e}`)}}function N(e,n){$("challenge",n),g=null,C=null,p=null;const s=e.currentChallengeIndex+1;n.challengeTitle.textContent=`${t.CHALLENGE} ${a(s.toString())} ${t.OF} ${a(e.totalChallenges.toString())}`,n.challengeProgress.textContent=`${a(s.toString())}/${a(e.totalChallenges.toString())}`,n.challengeTimer.classList.remove("is-count-circle"),n.challengeTimer.textContent="",n.challengeContent.innerHTML=`
    <div class="hb-host-game-panel">
      <div class="hb-host-prompt">${t.WAITING}</div>
    </div>
  `}function y(e,n,s){var r;const h=((r=e.currentChallenge)==null?void 0:r.id)||"";$("challenge",s),s.challengeTimer.classList.add("is-count-circle"),s.challengeTimer.textContent=M(e.timeRemaining);const l=e.answers.length,u=e.eligiblePlayerIds.length||n.length;if(g===h&&C===e.showItems&&p===e.phase){const c=s.challengeContent.querySelector(".hb-host-answer-count");c&&(c.textContent=S(l,u));return}g=h,C=e.showItems,p=e.phase;const i=e.currentChallengeIndex+1;s.challengeTitle.textContent=`${t.CHALLENGE} ${a(i.toString())} ${t.OF} ${a(e.totalChallenges.toString())}`,s.challengeProgress.textContent=`${a(i.toString())}/${a(e.totalChallenges.toString())}`,e.currentChallenge&&(s.challengeContent.innerHTML=O(e.currentChallenge,e.showItems)),s.challengeContent.innerHTML+=`
    <div class="hb-host-meta-row">
      <span class="hb-host-status-chip hb-host-answer-count">
        ${S(l,u)}
      </span>
    </div>
  `}function w(e,n,s){var r;$("results",s),g=null,C=null,p=null;const h=[...e.results].sort((i,c)=>c.coinsEarned-i.coinsEarned),l=((r=e.currentChallenge)==null?void 0:r.type)==="quick_trivia"?e.currentChallenge.source.title:"",u=[e.revealText,l?`منبع: ${l}`:""].filter(Boolean).join(" | ");s.resultsContainer.innerHTML=T({title:t.RESULTS,subtitle:u||void 0,highlight:e.correctAnswerText?`${t.CORRECT_ANSWER}: ${e.correctAnswerText}`:void 0,rows:h.map(i=>{const c=n.find(v=>v.id===i.playerId);if(!c)return"";const o=[i.correct?t.CORRECT:t.WRONG,i.fastest?t.FASTEST:"",i.responseTime!==null?`${t.RESPONSE_TIME}: ${x(i.responseTime)}`:""].filter(Boolean).join(" | ");return m({player:c,detail:o,reward:i.coinsEarned>0?`+${a(i.coinsEarned.toString())} ${t.COINS_EARNED}`:`0 ${t.COINS_EARNED}`,tone:i.correct?"good":"muted"})}).join("")})}function j(e,n,s){_(e.phase,e,b(n),s)}function I(e,n,s){var r;const h=Array.isArray(n)?b(n):[],l=s||n,u=Object.values(e.scores).sort((o,v)=>v.correctAnswers!==o.correctAnswers?v.correctAnswers-o.correctAnswers:v.fastestAnswers-o.fastestAnswers),i=e.championPlayerId?u.find(o=>o.playerId===e.championPlayerId):void 0,c=i?((r=h.find(o=>o.id===i.playerId))==null?void 0:r.name)||i.playerName:"";l.resultsContainer.innerHTML=T({eyebrow:t.GAME_OVER,title:c?`${t.CHAMPION}: ${c}`:t.NO_CHAMPION,subtitle:i?[`${a(i.correctAnswers.toString())} ${t.CORRECT_ANSWERS}`,`${a(i.fastestAnswers.toString())} ${t.FASTEST_ANSWERS}`].join(" | "):void 0,rows:u.map((o,v)=>{const E=h.find(f=>f.id===o.playerId)||{id:o.playerId,name:o.playerName||o.playerId,color:"#64748b"},A=[`${a(o.correctAnswers.toString())} ${t.CORRECT_ANSWERS}`,`${a(o.fastestAnswers.toString())} ${t.FASTEST_ANSWERS}`].join(" | ");return m({player:E,rank:v+1,detail:A,reward:`${a(o.totalCoins.toString())} ${t.COINS_EARNED}`,tone:e.championPlayerId===o.playerId?"winner":"default"})}).join("")}),l.resultsContainer.classList.remove("hidden")}function O(e,n=!0){switch(e.type){case"object_math":return`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${t.OBJECT_MATH}</div>
          <div class="hb-host-tap-display">${d(e.display)}</div>
          <div class="hb-host-question-text">${t.OBJECT_MATH_INSTRUCTION}</div>
          <div class="hb-host-subprompt">${d(e.key)}</div>
        </div>
      `;case"odd_one_out":return`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${t.ODD_ONE_OUT}</div>
          <div class="hb-host-question-text">${t.ODD_ONE_OUT_INSTRUCTION}</div>
          <div class="hb-host-tap-items">
            ${e.items.map(s=>`<div>${d(s)}</div>`).join("")}
          </div>
        </div>
      `;case"color_match":return`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${t.COLOR_MATCH}</div>
          <div class="hb-host-question-text">${d(e.question)}</div>
          <div class="hb-host-tap-display" style="color: ${d(e.displayColor)}">
            ${R[e.word]||e.word}
          </div>
        </div>
      `;case"memory_flash":return n?`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${t.MEMORY_FLASH}</div>
          <div class="hb-host-question-text">${t.MEMORIZE}</div>
          <div class="hb-host-tap-items animate-pulse">
            ${e.items.map(s=>`<div>${d(s)}</div>`).join("")}
          </div>
        </div>
      `:`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${t.MEMORY_FLASH}</div>
          <div class="hb-host-question-text">${d(e.question)}</div>
        </div>
      `;case"quick_count":return n?`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${t.QUICK_COUNT}</div>
          <div class="hb-host-question-text">${t.COUNT_THEM}</div>
          <div class="hb-host-tap-items animate-pulse">
            ${Array.from({length:e.count},()=>`<div>${d(e.itemLabel)}</div>`).join("")}
          </div>
        </div>
      `:`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${t.QUICK_COUNT}</div>
          <div class="hb-host-question-text">${t.QUICK_COUNT_INSTRUCTION}</div>
        </div>
      `;case"quick_trivia":return`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${t.QUICK_TRIVIA}</div>
          <div class="hb-host-question-text">${d(e.question)}</div>
          <div class="hb-host-options-grid">
            ${e.options.map((s,r)=>`
              <div class="hb-host-option-card">
                <span class="hb-host-option-index">${a((r+1).toString())}</span>
                <span>${d(s)}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `}}function b(e){return e.filter(n=>!n.isHost)}function S(e,n){return`${a(e.toString())}/${a(n.toString())} ${t.ANSWERED}`}function k(e,n){switch(n){case"challenge-start":return t.CHALLENGE;case"challenge-active":case"challenge-observe":case"challenge-answer":return t.GAME_NAME;case"challenge-result":return t.RESULTS;case"game-end":return t.GAME_OVER;default:return""}}function D(){g=null,C=null,p=null}function M(e){return a(Math.max(0,Math.ceil(e/1e3)).toString())}function x(e){const n=(e/1e3).toFixed(2).replace(".","٫");return`${a(n)} ${t.SECONDS}`}function $(e,n){n.challengeContainer.classList.toggle("hidden",e!=="challenge"),n.resultsContainer.classList.toggle("hidden",e!=="results"),e==="challenge"&&(n.challengeContent.className="board-host-game-content"),n.finalResults!==n.resultsContainer&&n.finalResults.classList.add("hidden")}export{D as cleanupHandlers,k as getTransitionMessage,j as renderGameScreen,_ as renderPhase,I as renderResults};
