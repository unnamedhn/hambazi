import{b as v,r as b,a as p}from"./ui-components-Tk9G7nUf.js";import{t as a,e as l,f as T}from"./utils-CtiNnZvt.js";import{b as o}from"./know-me-constants-CaMq0mrP.js";import"./howler-DacRvduY.js";import"./theme-registry-DVwZrcfh.js";function E(n,e,t,r){switch(n){case"intro":R(e,t,r);break;case"subject-answering":C(e,r);break;case"guessing":w(e,t,r);break;case"reveal":I(e,t,r);break;case"reaction":N(e,r);break;case"game-end":O(e,t,r);break;default:console.warn(`Unknown phase for Know Me host renderer: ${n}`)}}function Q(n,e,t){E(n.phase,n,e,t)}function R(n,e,t){u("challenge",t),t.challengeTitle.textContent=o.INTRO,t.challengeTimer.classList.remove("is-count-circle"),t.challengeTimer.textContent="",t.challengeProgress.textContent=`${a(n.totalQuestions.toString())} ${o.QUESTION}`;const r=h(e,n.subjectId);t.challengeContent.innerHTML=`
    <div class="hb-host-game-panel">
      <div class="hb-host-meta-label">${o.SUBJECT}</div>
      <div class="hb-host-focus-card hb-host-player-focus">
        ${r?p(r):""}
        <div class="hb-host-player-focus-name">${l(n.subjectName||"")}</div>
      </div>
    </div>
  `}function C(n,e){u("challenge",e),$(n,e,o.ANSWERING),e.challengeContent.innerHTML=`
    ${S(n)}
    <div class="hb-host-meta-row">
      <span class="hb-host-status-chip">${o.WAITING_FOR_SUBJECT}</span>
    </div>
  `}function w(n,e,t){u("challenge",t),$(n,t,o.GUESSING);const r=e.filter(i=>i.id!==n.subjectId),s=Object.keys(n.guesses).length;t.challengeContent.innerHTML=`
    ${S(n,!0)}
    <div class="hb-host-meta-row">
      <span class="hb-host-status-chip">
        ${a(s.toString())}/${a(r.length.toString())}
        ${o.WAITING_FOR_GUESSERS}
      </span>
    </div>
    <div class="hb-host-player-chip-row">
      ${r.map(i=>{const c=!!n.guesses[i.id];return`
          <div class="hb-host-status-chip ${c?"is-done":""}">
            ${p(i)}
            <span>${l(i.name)}</span>
            <span>${c?o.ANSWERED:o.WAITING}</span>
          </div>
        `}).join("")}
    </div>
  `}function I(n,e,t){var r;u("results",t);const s=n.currentQuestion,i=s&&n.subjectAnswer!==null?s.options[n.subjectAnswer]:o.NO_ANSWER,c=[...n.revealResults].sort((g,f)=>f.pointsEarned-g.pointsEarned),d=typeof((r=n.revealFact)==null?void 0:r.value)=="string"?n.revealFact.value:"";t.resultsContainer.innerHTML=v({eyebrow:n.phase==="reaction"?o.REACTION:o.REVEAL,title:(s==null?void 0:s.text)||"",highlight:i,rows:[x(n,e),...c.map(g=>j(g,e,n)),d?`<p class="board-result-narrator">${l(d)}</p>`:""].join("")})}function N(n,e){var t,r;u("challenge",e),e.challengeTitle.textContent=o.REACTION,e.challengeTimer.classList.remove("is-count-circle"),e.challengeTimer.textContent="",e.challengeProgress.textContent=`${o.QUESTION} ${a((n.currentQuestionIndex+1).toString())} ${o.OF} ${a(n.totalQuestions.toString())}`;const s=typeof((t=n.revealFact)==null?void 0:t.value)=="string"?n.revealFact.value:"";e.challengeContent.innerHTML=`
    <div class="hb-host-game-panel">
      <div class="hb-host-meta-label">${l(o.REACTION)}</div>
      <div class="hb-host-focus-card">
        <div class="hb-host-question-text">${l(((r=n.currentQuestion)==null?void 0:r.text)||"")}</div>
        ${s?`<p class="board-result-narrator">${l(s)}</p>`:""}
      </div>
    </div>
  `}function O(n,e,t){u("results",t);const r=Object.values(n.scores).sort((s,i)=>i.score-s.score);t.resultsContainer.innerHTML=v({eyebrow:o.GAME_OVER,title:o.FINAL_RESULTS,rows:r.map((s,i)=>{const c=h(e,s.playerId)||{id:s.playerId,name:s.playerName,color:"#64748b"},d=[`${o.CORRECT} ${a(s.correctGuesses.toString())}`,`${o.SUBJECT_BONUS} ${a(s.subjectBonuses.toString())}`].join(" | ");return b({player:c,rank:i+1,detail:d,reward:`${a(s.score.toString())} ${o.POINTS}`,tone:i===0?"winner":"default"})}).join("")})}function $(n,e,t){const r=n.currentQuestionIndex+1;e.challengeTitle.textContent=t,e.challengeTimer.classList.add("is-count-circle"),e.challengeTimer.textContent=T(n.timeRemaining/1e3),e.challengeProgress.textContent=`${o.QUESTION} ${a(r.toString())} ${o.OF} ${a(n.totalQuestions.toString())}`}function S(n,e=!1){const t=n.currentQuestion;return t?`
    <div class="hb-host-question-layout${e?" is-compact":""}">
      <div class="hb-host-question-text">${l(t.text)}</div>
      <div class="hb-host-options-grid">
        ${t.options.map((r,s)=>`
          <div class="hb-host-option-card">
            <span class="hb-host-option-index">${a((s+1).toString())}</span>
            <span>${l(r)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `:""}function j(n,e,t){const r=h(e,n.playerId)||{id:n.playerId,name:n.playerId,color:"#64748b"},s=t.currentQuestion,c=[s&&n.answerIndex!==null?s.options[n.answerIndex]:o.NO_ANSWER,n.correct?o.CORRECT:o.WRONG].filter(Boolean).join(" | ");return b({player:r,detail:c,reward:`+${a(n.pointsEarned.toString())} ${o.POINTS}`,tone:n.correct?"good":"muted"})}function x(n,e){const t=h(e,n.subjectId);return t?b({player:t,detail:o.SUBJECT_PICKED,reward:`+${a(n.subjectBonusEarned.toString())} ${o.SUBJECT_BONUS}`,tone:n.subjectBonusEarned>0?"good":"default"}):""}function h(n,e){return e&&n.find(t=>t.id===e)||null}function u(n,e){e.challengeContainer.classList.toggle("hidden",n!=="challenge"),e.resultsContainer.classList.toggle("hidden",n!=="results"),n==="challenge"&&(e.challengeContent.className="board-host-game-content"),e.finalResults!==e.resultsContainer&&e.finalResults.classList.add("hidden")}function U(){}export{U as cleanupHandlers,Q as renderGameScreen,E as renderPhase};
