import{b as p,r as b,a as $}from"./ui-components-_blXeNEu.js";import{t as a,j as v,e as l,f as R}from"./utils-kcsRnXbH.js";import{b as t}from"./know-me-constants-CzYdIZ39.js";import"./theme-registry-BNXgcGF6.js";function E(n,e,o,r){switch(n){case"intro":C(e,o,r);break;case"subject-answering":w(e,r);break;case"guessing":I(e,o,r);break;case"reveal":N(e,o,r);break;case"reaction":O(e,r);break;case"game-end":j(e,o,r);break;default:console.warn(`Unknown phase for Know Me host renderer: ${n}`)}}function Q(n,e,o){E(n.phase,n,e,o)}function C(n,e,o){u("challenge",o),o.challengeTitle.textContent=t.INTRO,o.challengeTimer.classList.remove("is-count-circle"),o.challengeTimer.textContent="",o.challengeProgress.textContent=`${a(n.totalQuestions.toString())} ${t.QUESTION}`;const r=h(e,n.subjectId);o.challengeContent.innerHTML=`
    <div class="hb-host-game-panel">
      <div class="hb-host-meta-label">${t.SUBJECT}</div>
      <div class="hb-host-focus-card hb-host-player-focus">
        ${r?$(r):""}
        <div class="hb-host-player-focus-name">${l(n.subjectName||"")}</div>
      </div>
    </div>
  `}function w(n,e){u("challenge",e),S(n,e,t.ANSWERING),e.challengeContent.innerHTML=`
    ${f(n)}
    <div class="hb-host-meta-row">
      <span class="hb-host-status-chip">${t.WAITING_FOR_SUBJECT}</span>
    </div>
  `}function I(n,e,o){u("challenge",o),S(n,o,t.GUESSING);const r=e.filter(s=>s.id!==n.subjectId),i=Object.keys(n.guesses).length;o.challengeContent.innerHTML=`
    ${f(n,!0)}
    <div class="hb-host-meta-row">
      <span class="hb-host-status-chip">
        ${a(i.toString())}/${a(r.length.toString())}
        ${t.WAITING_FOR_GUESSERS}
      </span>
    </div>
    <div class="hb-host-player-chip-row">
      ${r.map(s=>{const c=!!n.guesses[s.id];return`
          <div class="hb-host-status-chip ${c?"is-done":""}">
            ${$(s)}
            <span>${l(s.name)}</span>
            <span>${c?t.ANSWERED:t.WAITING}</span>
          </div>
        `}).join("")}
    </div>
  `}function N(n,e,o){var r;u("results",o);const i=n.currentQuestion,s=i&&n.subjectAnswer!==null?i.options[n.subjectAnswer]:t.NO_ANSWER,c=[...n.revealResults].sort((g,T)=>T.pointsEarned-g.pointsEarned),d=typeof((r=n.revealFact)==null?void 0:r.value)=="string"?n.revealFact.value:"";o.resultsContainer.innerHTML=p({eyebrow:n.phase==="reaction"?t.REACTION:t.REVEAL,title:(i==null?void 0:i.text)||"",highlight:s,rows:[A(n,e),...c.map(g=>x(g,e,n)),d?`<p class="board-result-narrator">${l(d)}</p>`:""].join("")})}function O(n,e){var o,r;u("challenge",e),e.challengeTitle.textContent=t.REACTION,e.challengeTimer.classList.remove("is-count-circle"),e.challengeTimer.textContent="",e.challengeProgress.textContent=`${t.QUESTION} ${a((n.currentQuestionIndex+1).toString())} ${t.OF} ${a(n.totalQuestions.toString())}`;const i=typeof((o=n.revealFact)==null?void 0:o.value)=="string"?n.revealFact.value:"";e.challengeContent.innerHTML=`
    <div class="hb-host-game-panel">
      <div class="hb-host-meta-label">${l(t.REACTION)}</div>
      <div class="hb-host-focus-card">
        <div class="hb-host-question-text">${l(((r=n.currentQuestion)==null?void 0:r.text)||"")}</div>
        ${i?`<p class="board-result-narrator">${l(i)}</p>`:""}
      </div>
    </div>
  `}function j(n,e,o){u("results",o);const r=Object.values(n.scores).sort((s,c)=>c.score-s.score),i=r.map(s=>s.score);o.resultsContainer.innerHTML=p({eyebrow:t.GAME_OVER,title:t.FINAL_RESULTS,rows:r.map(s=>{const c=h(e,s.playerId)||{id:s.playerId,name:s.playerName,color:"#64748b"},d=[`${t.CORRECT} ${a(s.correctGuesses.toString())}`,`${t.SUBJECT_BONUS} ${a(s.subjectBonuses.toString())}`].join(" | ");return b({player:c,rank:v(i,s.score),detail:d,reward:`${a(s.score.toString())} ${t.POINTS}`,tone:v(i,s.score)===1&&s.score>0?"winner":"default"})}).join("")})}function S(n,e,o){const r=n.currentQuestionIndex+1;e.challengeTitle.textContent=o,e.challengeTimer.classList.add("is-count-circle"),e.challengeTimer.textContent=R(n.timeRemaining/1e3),e.challengeProgress.textContent=`${t.QUESTION} ${a(r.toString())} ${t.OF} ${a(n.totalQuestions.toString())}`}function f(n,e=!1){const o=n.currentQuestion;return o?`
    <div class="hb-host-question-layout${e?" is-compact":""}">
      <div class="hb-host-question-text">${l(o.text)}</div>
      <div class="hb-host-options-grid">
        ${o.options.map((r,i)=>`
          <div class="hb-host-option-card">
            <span class="hb-host-option-index">${a((i+1).toString())}</span>
            <span>${l(r)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `:""}function x(n,e,o){const r=h(e,n.playerId)||{id:n.playerId,name:n.playerId,color:"#64748b"},i=o.currentQuestion,c=[i&&n.answerIndex!==null?i.options[n.answerIndex]:t.NO_ANSWER,n.correct?t.CORRECT:t.WRONG].filter(Boolean).join(" | ");return b({player:r,detail:c,reward:`+${a(n.pointsEarned.toString())} ${t.POINTS}`,tone:n.correct?"good":"muted"})}function A(n,e){const o=h(e,n.subjectId);return o?b({player:o,detail:t.SUBJECT_PICKED,reward:`+${a(n.subjectBonusEarned.toString())} ${t.SUBJECT_BONUS}`,tone:n.subjectBonusEarned>0?"good":"default"}):""}function h(n,e){return e&&n.find(o=>o.id===e)||null}function u(n,e){e.challengeContainer.classList.toggle("hidden",n!=="challenge"),e.resultsContainer.classList.toggle("hidden",n!=="results"),n==="challenge"&&(e.challengeContent.className="board-host-game-content"),e.finalResults!==e.resultsContainer&&e.finalResults.classList.add("hidden")}function U(){}export{U as cleanupHandlers,Q as renderGameScreen,E as renderPhase};
