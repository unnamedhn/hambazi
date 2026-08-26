import{t as i,e as S,f as T}from"./utils-CtiNnZvt.js";import{b as v,r as f,a as h}from"./ui-components-Tk9G7nUf.js";import{b as r,S as u}from"./spyfall-constants-Rc9p3uuF.js";import"./howler-DacRvduY.js";import"./theme-registry-0EpoZLH3.js";function $(e,n,t,o){const a=t.filter(s=>!s.isHost);switch(e){case"intro":y(n,a,o);break;case"discussion":b(n,a,o);break;case"vote-spy":O(n,a,o);break;case"spy-guess":P(n,a,o);break;case"reveal":I(n,a,o);break;case"game-end":C(n,a,o);break;default:console.warn(`Unknown phase for Spyfall host renderer: ${e}`)}}function x(e,n,t){$(e.phase,e,n.filter(o=>!o.isHost),t)}function y(e,n,t){l("challenge",t),t.challengeTitle.textContent=r.INTRO,t.challengeTimer.classList.remove("is-count-circle"),t.challengeTimer.textContent="",t.challengeProgress.textContent=`${i(n.length.toString())} ${r.ROLE}`,t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="flex flex-wrap justify-center gap-3">${n.map(o=>h(o)).join("")}</div>
    </div>
  `}function b(e,n,t){l("challenge",t),g(e,t,r.DISCUSSION),t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-subprompt">${r.ASK_QUESTIONS}</div>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        ${n.map(o=>`
          <div class="hb-host-status-chip">
            ${h(o)}
            <span class="text-lg font-bold">${S(o.name)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `}function O(e,n,t){l("challenge",t),g(e,t,r.VOTE_SPY);const o=Object.values(e.votes).filter(s=>s.votedPlayerId).length,a=Object.keys(e.votes).length||n.length;t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-subprompt mb-6">
        ${i(o.toString())}/${i(a.toString())}
        ${r.VOTED}
      </div>
      <div class="flex flex-wrap justify-center gap-3">
        ${n.map(s=>{var c;const d=!!((c=e.votes[s.id])!=null&&c.votedPlayerId);return`
            <div class="hb-host-status-chip ${d?"is-done":""}">
              ${h(s)}
              <span>${S(s.name)}</span>
              <span>${d?r.VOTED:r.WAITING}</span>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function P(e,n,t){l("challenge",t),g(e,t,r.SPY_GUESS),t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-subprompt">${r.LOCATION}</div>
    </div>
  `}function I(e,n,t){l("results",t);const o=e.currentRoundResult;t.resultsContainer.innerHTML=v({eyebrow:r.REVEAL,title:o!=null&&o.spyWon?r.SPY_WON:r.TEAM_WON,subtitle:[`${r.SPY}: ${(o==null?void 0:o.spyName)||""}`,`${r.LOCATION}: ${(o==null?void 0:o.locationName)||""}`,`${r.ACCUSED}: ${(o==null?void 0:o.accusedPlayerName)||r.NO_VOTE}`].join(" | "),rows:o?N(o,n):""})}function N(e,n){return e.voteResults.map(t=>{const o=p(n,t.playerId)||{id:t.playerId,name:t.playerId,color:"#64748b"},a=p(n,t.votedPlayerId),s=t.votedPlayerId===e.spyId,d=t.playerId===e.spyId?e.spyWon?u.SPY_WIN_POINTS:0:(e.spyWon?0:u.TEAM_WIN_POINTS)+(s?u.CORRECT_VOTE_POINTS:0);return f({player:o,detail:`${r.VOTE_SPY}: ${(a==null?void 0:a.name)||r.NO_VOTE}`,reward:`+${i(d.toString())} ${r.POINTS}`,tone:s?"good":"muted"})}).join("")}function C(e,n,t){l("results",t);const o=Object.values(e.scores).sort((a,s)=>s.points-a.points);t.resultsContainer.innerHTML=v({eyebrow:r.GAME_OVER,title:r.RESULTS,rows:o.map((a,s)=>{const c=p(n,a.playerId)||{id:a.playerId,name:a.playerName,color:"#64748b"};return f({player:c,rank:s+1,detail:[`${r.FOUND_SPY}: ${i(a.foundSpy.toString())}`,`${r.SPY_WINS}: ${i(a.spyWins.toString())}`,`${r.TEAM_WINS}: ${i(a.teamWins.toString())}`].join(" | "),reward:`${i(a.points.toString())} ${r.POINTS}`,tone:s===0?"winner":"default"})}).join("")})}function g(e,n,t){n.challengeTitle.textContent=t,n.challengeTimer.classList.add("is-count-circle"),n.challengeTimer.textContent=T(e.timeRemaining/1e3),n.challengeProgress.textContent=r.GAME_NAME}function p(e,n){return n&&e.find(t=>t.id===n)||null}function l(e,n){n.challengeContainer.classList.toggle("hidden",e!=="challenge"),n.resultsContainer.classList.toggle("hidden",e!=="results"),e==="challenge"&&(n.challengeContent.className="board-host-game-content"),n.finalResults!==n.resultsContainer&&n.finalResults.classList.add("hidden")}function w(){}export{w as cleanupHandlers,x as renderGameScreen,$ as renderPhase};
