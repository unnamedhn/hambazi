import{b,r as p,a as v}from"./ui-components-Tk9G7nUf.js";import{t as a,e as l,f as T}from"./utils-CtiNnZvt.js";import{b as t}from"./know-me-constants-CZhp7H-t.js";import"./howler-DacRvduY.js";import"./theme-registry-B1gdAM7C.js";function E(n,e,o,r){switch(n){case"intro":R(e,o,r);break;case"subject-answering":w(e,r);break;case"guessing":C(e,o,r);break;case"reveal":case"reaction":N(e,o,r);break;case"game-end":I(e,o,r);break;default:console.warn(`Unknown phase for Know Me host renderer: ${n}`)}}function L(n,e,o){E(n.phase,n,e,o)}function R(n,e,o){u("challenge",o),o.challengeTitle.textContent=t.INTRO,o.challengeTimer.classList.remove("is-count-circle"),o.challengeTimer.textContent="",o.challengeProgress.textContent=`${a(n.totalQuestions.toString())} ${t.QUESTION}`;const r=h(e,n.subjectId);o.challengeContent.innerHTML=`
    <div class="hb-host-game-panel">
      <div class="hb-host-meta-label">${t.SUBJECT}</div>
      <div class="hb-host-focus-card hb-host-player-focus">
        ${r?v(r):""}
        <div class="hb-host-player-focus-name">${l(n.subjectName||"")}</div>
      </div>
    </div>
  `}function w(n,e){u("challenge",e),S(n,e,t.ANSWERING),e.challengeContent.innerHTML=`
    ${f(n)}
    <div class="hb-host-meta-row">
      <span class="hb-host-status-chip">${t.WAITING_FOR_SUBJECT}</span>
    </div>
  `}function C(n,e,o){u("challenge",o),S(n,o,t.GUESSING);const r=e.filter(i=>i.id!==n.subjectId),s=Object.keys(n.guesses).length;o.challengeContent.innerHTML=`
    ${f(n,!0)}
    <div class="hb-host-meta-row">
      <span class="hb-host-status-chip">
        ${a(s.toString())}/${a(r.length.toString())}
        ${t.WAITING_FOR_GUESSERS}
      </span>
    </div>
    <div class="hb-host-player-chip-row">
      ${r.map(i=>{const c=!!n.guesses[i.id];return`
          <div class="hb-host-status-chip ${c?"is-done":""}">
            ${v(i)}
            <span>${l(i.name)}</span>
            <span>${c?t.ANSWERED:t.WAITING}</span>
          </div>
        `}).join("")}
    </div>
  `}function N(n,e,o){var r;u("results",o);const s=n.currentQuestion,i=s&&n.subjectAnswer!==null?s.options[n.subjectAnswer]:t.NO_ANSWER,c=[...n.revealResults].sort((g,$)=>$.pointsEarned-g.pointsEarned),d=typeof((r=n.revealFact)==null?void 0:r.value)=="string"?n.revealFact.value:"";o.resultsContainer.innerHTML=b({eyebrow:n.phase==="reaction"?t.REACTION:t.REVEAL,title:(s==null?void 0:s.text)||"",highlight:i,rows:[O(n,e),...c.map(g=>j(g,e,n)),d?`<p class="board-result-narrator">${l(d)}</p>`:""].join("")})}function I(n,e,o){u("results",o);const r=Object.values(n.scores).sort((s,i)=>i.score-s.score);o.resultsContainer.innerHTML=b({eyebrow:t.GAME_OVER,title:t.FINAL_RESULTS,rows:r.map((s,i)=>{const c=h(e,s.playerId)||{id:s.playerId,name:s.playerName,color:"#64748b"},d=[`${t.CORRECT} ${a(s.correctGuesses.toString())}`,`${t.SUBJECT_BONUS} ${a(s.subjectBonuses.toString())}`].join(" | ");return p({player:c,rank:i+1,detail:d,reward:`${a(s.score.toString())} ${t.POINTS}`,tone:i===0?"winner":"default"})}).join("")})}function S(n,e,o){const r=n.currentQuestionIndex+1;e.challengeTitle.textContent=o,e.challengeTimer.classList.add("is-count-circle"),e.challengeTimer.textContent=T(n.timeRemaining/1e3),e.challengeProgress.textContent=`${t.QUESTION} ${a(r.toString())} ${t.OF} ${a(n.totalQuestions.toString())}`}function f(n,e=!1){const o=n.currentQuestion;return o?`
    <div class="hb-host-question-layout${e?" is-compact":""}">
      <div class="hb-host-question-text">${l(o.text)}</div>
      <div class="hb-host-options-grid">
        ${o.options.map((r,s)=>`
          <div class="hb-host-option-card">
            <span class="hb-host-option-index">${a((s+1).toString())}</span>
            <span>${l(r)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `:""}function j(n,e,o){const r=h(e,n.playerId)||{id:n.playerId,name:n.playerId,color:"#64748b"},s=o.currentQuestion,c=[s&&n.answerIndex!==null?s.options[n.answerIndex]:t.NO_ANSWER,n.correct?t.CORRECT:t.WRONG].filter(Boolean).join(" | ");return p({player:r,detail:c,reward:`+${a(n.pointsEarned.toString())} ${t.POINTS}`,tone:n.correct?"good":"muted"})}function O(n,e){const o=h(e,n.subjectId);return o?p({player:o,detail:t.SUBJECT_PICKED,reward:`+${a(n.subjectBonusEarned.toString())} ${t.SUBJECT_BONUS}`,tone:n.subjectBonusEarned>0?"good":"default"}):""}function h(n,e){return e&&n.find(o=>o.id===e)||null}function u(n,e){e.challengeContainer.classList.toggle("hidden",n!=="challenge"),e.resultsContainer.classList.toggle("hidden",n!=="results"),n==="challenge"&&(e.challengeContent.className="board-host-game-content"),e.finalResults!==e.resultsContainer&&e.finalResults.classList.add("hidden")}function U(){}export{U as cleanupHandlers,L as renderGameScreen,E as renderPhase};
