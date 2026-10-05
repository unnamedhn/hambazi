import{b as v,c as b,d as S}from"./ui-components-FMHP__KN.js";import{t as a,c as p,e as l,f as R}from"./utils-B-zlAPKk.js";import{K as t}from"./know-me-constants-DJxla61P.js";import"./theme-registry-B-ymQaNS.js";function C(n,e,o,r){switch(n){case"intro":N(e,o,r);break;case"subject-answering":w(e,r);break;case"void-no-subject-answer":O(e,r);break;case"guessing":I(e,o,r);break;case"reveal":f(e,o,r);break;case"reaction":j(e,o,r);break;case"game-end":x(e,o,r);break;default:console.warn(`Unknown phase for Know Me host renderer: ${n}`)}}function y(n,e,o){C(n.phase,n,e,o)}function N(n,e,o){d("challenge",o),o.challengeTitle.textContent=t.INTRO,o.challengeTimer.classList.remove("is-count-circle"),o.challengeTimer.textContent="",o.challengeProgress.textContent=`${a(n.totalQuestions.toString())} ${t.QUESTION}`;const r=h(e,n.subjectId);o.challengeContent.innerHTML=`
    <div class="hb-host-game-panel">
      <div class="hb-host-meta-label">${t.SUBJECT}</div>
      <div class="hb-host-focus-card hb-host-player-focus">
        ${r?S(r):""}
        <div class="hb-host-player-focus-name">${l(n.subjectName||"")}</div>
      </div>
    </div>
  `}function w(n,e){d("challenge",e),T(n,e,t.ANSWERING),e.challengeContent.innerHTML=`
    ${$(n)}
    <div class="hb-host-meta-row">
      <span class="hb-host-status-chip">${t.WAITING_FOR_SUBJECT}</span>
    </div>
  `}function I(n,e,o){d("challenge",o),T(n,o,t.GUESSING);const r=e.filter(s=>s.id!==n.subjectId),i=Object.keys(n.guesses).length;o.challengeContent.innerHTML=`
    ${$(n,!0)}
    <div class="hb-host-meta-row">
      <span class="hb-host-status-chip">
        ${a(i.toString())}/${a(r.length.toString())}
        ${t.WAITING_FOR_GUESSERS}
      </span>
    </div>
    <div class="hb-host-player-chip-row">
      ${r.map(s=>{const c=!!n.guesses[s.id];return`
          <div class="hb-host-status-chip ${c?"is-done":""}">
            ${S(s)}
            <span>${l(s.name)}</span>
            <span>${c?t.ANSWERED:t.WAITING}</span>
          </div>
        `}).join("")}
    </div>
  `}function O(n,e){var o;d("challenge",e),e.challengeTitle.textContent=t.NO_ANSWER,e.challengeTimer.textContent="",e.challengeProgress.textContent="",e.challengeContent.innerHTML=`
    <div class="hb-host-game-panel">
      <div class="hb-host-question-text">${l(((o=n.currentQuestion)==null?void 0:o.text)||"")}</div>
      <p class="board-result-narrator">${l(t.VOID_NO_SUBJECT_ANSWER)}</p>
    </div>`}function f(n,e,o){var r;d("results",o);const i=n.currentQuestion,s=i&&n.subjectAnswer!==null?i.options[n.subjectAnswer]:t.NO_ANSWER,c=[...n.revealResults].sort((g,E)=>E.pointsEarned-g.pointsEarned),u=typeof((r=n.revealFact)==null?void 0:r.value)=="string"?n.revealFact.value:"";o.resultsContainer.innerHTML=v({eyebrow:n.phase==="reaction"?t.REACTION:t.REVEAL,title:(i==null?void 0:i.text)||"",highlight:s,rows:[A(n,e),...c.map(g=>_(g,e,n)),u?`<p class="board-result-narrator">${l(u)}</p>`:""].join("")})}function j(n,e,o){f(n,e,o)}function x(n,e,o){d("results",o);const r=Object.values(n.scores).sort((s,c)=>c.score-s.score),i=r.map(s=>s.score);o.resultsContainer.innerHTML=v({eyebrow:t.GAME_OVER,title:n.noContest?t.NO_CONTEST:t.FINAL_RESULTS,rows:r.map(s=>{const c=h(e,s.playerId)||{id:s.playerId,name:s.playerName,color:"#64748b"},u=[`${t.CORRECT} ${a(s.correctGuesses.toString())}`,`${t.SUBJECT_BONUS} ${a(s.subjectBonuses.toString())}`].join(" | ");return b({player:c,rank:p(i,s.score),detail:u,reward:`${a(s.score.toString())} ${t.POINTS}`,tone:p(i,s.score)===1&&s.score>0?"winner":"default"})}).join("")})}function T(n,e,o){const r=n.currentQuestionIndex+1;e.challengeTitle.textContent=o,e.challengeTimer.classList.add("is-count-circle"),e.challengeTimer.textContent=R(n.timeRemaining/1e3),e.challengeProgress.textContent=`${t.QUESTION} ${a(r.toString())} ${t.OF} ${a(n.totalQuestions.toString())}`}function $(n,e=!1){const o=n.currentQuestion;return o?`
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
  `:""}function _(n,e,o){const r=h(e,n.playerId)||{id:n.playerId,name:n.playerId,color:"#64748b"},i=o.currentQuestion,c=[i&&n.answerIndex!==null?i.options[n.answerIndex]:t.NO_ANSWER,n.correct?t.CORRECT:t.WRONG].filter(Boolean).join(" | ");return b({player:r,detail:c,reward:`+${a(n.pointsEarned.toString())} ${t.POINTS}`,tone:n.correct?"good":"muted"})}function A(n,e){const o=h(e,n.subjectId);return o?b({player:o,detail:t.SUBJECT_PICKED,reward:`+${a(n.subjectBonusEarned.toString())} ${t.SUBJECT_BONUS}`,tone:n.subjectBonusEarned>0?"good":"default"}):""}function h(n,e){return e&&n.find(o=>o.id===e)||null}function d(n,e){e.challengeContainer.classList.toggle("hidden",n!=="challenge"),e.resultsContainer.classList.toggle("hidden",n!=="results"),n==="challenge"&&(e.challengeContent.className="board-host-game-content"),e.finalResults!==e.resultsContainer&&e.finalResults.classList.add("hidden")}function G(){}export{G as cleanupHandlers,y as renderGameScreen,C as renderPhase};
