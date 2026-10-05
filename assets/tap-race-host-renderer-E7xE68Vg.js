import{b as f,c as R}from"./ui-components-FMHP__KN.js";import{t as i,c as E,e as c}from"./utils-B-zlAPKk.js";import{T as n,C as N}from"./tap-race-constants-BhmXwkJd.js";import"./theme-registry-B-ymQaNS.js";let g=null,p=null,$=null;function O(t,e,s,l,h){const r=S(s);switch(t){case"challenge-start":w(e,l);break;case"challenge-observe":case"challenge-answer":case"challenge-active":y(e,r,l);break;case"challenge-result":I(e,r,l);break;case"game-end":m("results",l),M(e,r,l);break;default:console.warn(`Unknown phase for Tap Race renderer: ${t}`)}}function w(t,e){m("challenge",e),g=null,p=null,$=null;const s=t.currentChallengeIndex+1;e.challengeTitle.textContent=`${n.CHALLENGE} ${i(s.toString())} ${n.OF} ${i(t.totalChallenges.toString())}`,e.challengeProgress.textContent=`${i(s.toString())}/${i(t.totalChallenges.toString())}`,e.challengeTimer.classList.remove("is-count-circle"),e.challengeTimer.textContent="",e.challengeContent.innerHTML=`
    <div class="hb-host-game-panel">
      <div class="hb-host-prompt">${n.WAITING}</div>
    </div>
  `}function y(t,e,s){var l;const h=((l=t.currentChallenge)==null?void 0:l.id)||"";m("challenge",s),s.challengeTimer.classList.add("is-count-circle"),s.challengeTimer.textContent=L(t.timeRemaining);const r=t.answers.length,v=t.eligiblePlayerIds.length||e.length;if(g===h&&p===t.showItems&&$===t.phase){const d=s.challengeContent.querySelector(".hb-host-answer-count");d&&(d.textContent=_(r,v));return}g=h,p=t.showItems,$=t.phase;const o=t.currentChallengeIndex+1;s.challengeTitle.textContent=`${n.CHALLENGE} ${i(o.toString())} ${n.OF} ${i(t.totalChallenges.toString())}`,s.challengeProgress.textContent=`${i(o.toString())}/${i(t.totalChallenges.toString())}`,t.currentChallenge&&(s.challengeContent.innerHTML=x(t.currentChallenge,t.showItems)),s.challengeContent.innerHTML+=`
    <div class="hb-host-meta-row">
      <span class="hb-host-status-chip hb-host-answer-count">
        ${_(r,v)}
      </span>
    </div>
  `}function I(t,e,s){var l;m("results",s),g=null,p=null,$=null;const h=[...t.results].sort((o,d)=>d.coinsEarned-o.coinsEarned),r=((l=t.currentChallenge)==null?void 0:l.type)==="quick_trivia"?t.currentChallenge.source.title:"",v=[t.revealText,r?`منبع: ${r}`:""].filter(Boolean).join(" | ");s.resultsContainer.innerHTML=f({title:n.RESULTS,subtitle:v||void 0,highlight:t.correctAnswerText?`${n.CORRECT_ANSWER}: ${t.correctAnswerText}`:void 0,rows:h.map(o=>{const d=e.find(b=>b.id===o.playerId);if(!d)return"";const C=[o.correct?n.CORRECT:n.WRONG,o.fastest?n.FASTEST:"",o.responseTime!==null?`${n.RESPONSE_TIME}: ${H(o.responseTime)}`:""].filter(Boolean).join(" | ");return R({player:d,detail:C,reward:o.coinsEarned>0?`+${i(o.coinsEarned.toString())} ${n.COINS_EARNED}`:`0 ${n.COINS_EARNED}`,tone:o.correct?"good":"muted"})}).join("")})}function k(t,e,s){O(t.phase,t,S(e),s)}function M(t,e,s){var l,h;const r=Array.isArray(e)?S(e):[],v=s||e,o=Object.values(t.scores).sort((a,u)=>u.totalCoins-a.totalCoins||u.correctAnswers-a.correctAnswers||u.fastestAnswers-a.fastestAnswers),d=o.map(a=>a.totalCoins),C=(h=(l=o[0])==null?void 0:l.totalCoins)!=null?h:0,b=C>0?o.filter(a=>a.totalCoins===C).map(a=>{var u;return((u=r.find(T=>T.id===a.playerId))==null?void 0:u.name)||a.playerName}):[];v.resultsContainer.innerHTML=f({eyebrow:n.GAME_OVER,title:b.length>0?`${n.CHAMPION}: ${b.join(" و ")}`:n.NO_CHAMPION,subtitle:C>0?`${i(C.toString())} ${n.COINS_EARNED}`:void 0,rows:o.map(a=>{const u=r.find(A=>A.id===a.playerId)||{id:a.playerId,name:a.playerName||a.playerId,color:"#64748b"},T=[`${i(a.correctAnswers.toString())} ${n.CORRECT_ANSWERS}`,`${i(a.fastestAnswers.toString())} ${n.FASTEST_ANSWERS}`].join(" | ");return R({player:u,rank:E(d,a.totalCoins),detail:T,reward:`${i(a.totalCoins.toString())} ${n.COINS_EARNED}`,tone:E(d,a.totalCoins)===1&&a.totalCoins>0?"winner":"default"})}).join("")}),v.resultsContainer.classList.remove("hidden")}function x(t,e=!0){switch(t.type){case"object_math":return`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${n.OBJECT_MATH}</div>
          <div class="hb-host-tap-display">${c(t.display)}</div>
          <div class="hb-host-question-text">${n.OBJECT_MATH_INSTRUCTION}</div>
          <div class="hb-host-subprompt">${c(t.key)}</div>
        </div>
      `;case"odd_one_out":return`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${n.ODD_ONE_OUT}</div>
          <div class="hb-host-question-text">${c(t.prompt||n.ODD_ONE_OUT_INSTRUCTION)}</div>
          <div class="hb-host-tap-items">
            ${t.items.map(s=>`<div>${c(s)}</div>`).join("")}
          </div>
        </div>
      `;case"color_match":return`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${n.COLOR_MATCH}</div>
          <div class="hb-host-question-text">${c(t.question)}</div>
          <div class="hb-host-tap-display" style="color: ${c(t.displayColor)}">
            ${N[t.word]||t.word}
          </div>
        </div>
      `;case"memory_flash":return e?`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${n.MEMORY_FLASH}</div>
          <div class="hb-host-question-text">${n.MEMORIZE}</div>
          <div class="hb-host-tap-items animate-pulse">
            ${t.items.map(s=>`<div>${c(s)}</div>`).join("")}
          </div>
        </div>
      `:`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${n.MEMORY_FLASH}</div>
          <div class="hb-host-question-text">${c(t.question)}</div>
        </div>
      `;case"quick_count":return e?`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${n.QUICK_COUNT}</div>
          <div class="hb-host-question-text">${n.COUNT_THEM}</div>
          <div class="hb-host-tap-items animate-pulse">
            ${Array.from({length:t.count||0},()=>`<div>${c(t.itemLabel)}</div>`).join("")}
          </div>
        </div>
      `:`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${n.QUICK_COUNT}</div>
          <div class="hb-host-question-text">${n.QUICK_COUNT_INSTRUCTION}</div>
        </div>
      `;case"quick_trivia":return`
        <div class="hb-host-tap-layout">
          <div class="hb-host-meta-label">${n.QUICK_TRIVIA}</div>
          <div class="hb-host-question-text">${c(t.question)}</div>
          <div class="hb-host-options-grid">
            ${t.options.map((s,l)=>`
              <div class="hb-host-option-card">
                <span class="hb-host-option-index">${i((l+1).toString())}</span>
                <span>${c(s)}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `}}function S(t){return t.filter(e=>!e.isHost)}function _(t,e){return`${i(t.toString())}/${i(e.toString())} ${n.ANSWERED}`}function D(t,e){switch(e){case"challenge-start":return n.CHALLENGE;case"challenge-active":case"challenge-observe":case"challenge-answer":return n.GAME_NAME;case"challenge-result":return n.RESULTS;case"game-end":return n.GAME_OVER;default:return""}}function G(){g=null,p=null,$=null}function L(t){return i(Math.max(0,Math.ceil(t/1e3)).toString())}function H(t){const e=(t/1e3).toFixed(2).replace(".","٫");return`${i(e)} ${n.SECONDS}`}function m(t,e){e.challengeContainer.classList.toggle("hidden",t!=="challenge"),e.resultsContainer.classList.toggle("hidden",t!=="results"),t==="challenge"&&(e.challengeContent.className="board-host-game-content"),e.finalResults!==e.resultsContainer&&e.finalResults.classList.add("hidden")}export{G as cleanupHandlers,D as getTransitionMessage,k as renderGameScreen,O as renderPhase,M as renderResults};
