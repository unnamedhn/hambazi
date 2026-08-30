import{j as S,t as r,e as v,f as $}from"./utils-kcsRnXbH.js";import{b as f,r as T,a as h}from"./ui-components-_blXeNEu.js";import{b as i,S as u}from"./spyfall-constants-BJqWuaRW.js";import"./theme-registry-BNXgcGF6.js";function y(e,n,t,o){const a=t.filter(s=>!s.isHost);switch(e){case"intro":b(n,a,o);break;case"discussion":O(n,a,o);break;case"vote-spy":P(n,a,o);break;case"spy-guess":I(n,a,o);break;case"reveal":N(n,a,o);break;case"game-end":E(n,a,o);break;default:console.warn(`Unknown phase for Spyfall host renderer: ${e}`)}}function x(e,n,t){y(e.phase,e,n.filter(o=>!o.isHost),t)}function b(e,n,t){c("challenge",t),t.challengeTitle.textContent=i.INTRO,t.challengeTimer.classList.remove("is-count-circle"),t.challengeTimer.textContent="",t.challengeProgress.textContent=`${r(n.length.toString())} ${i.ROLE}`,t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="flex flex-wrap justify-center gap-3">${n.map(o=>h(o)).join("")}</div>
    </div>
  `}function O(e,n,t){c("challenge",t),g(e,t,i.DISCUSSION),t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-subprompt">${i.ASK_QUESTIONS}</div>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        ${n.map(o=>`
          <div class="hb-host-status-chip">
            ${h(o)}
            <span class="text-lg font-bold">${v(o.name)}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `}function P(e,n,t){c("challenge",t),g(e,t,i.VOTE_SPY);const o=Object.values(e.votes).filter(s=>s.votedPlayerId).length,a=Object.keys(e.votes).length||n.length;t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-subprompt mb-6">
        ${r(o.toString())}/${r(a.toString())}
        ${i.VOTED}
      </div>
      <div class="flex flex-wrap justify-center gap-3">
        ${n.map(s=>{var l;const d=!!((l=e.votes[s.id])!=null&&l.votedPlayerId);return`
            <div class="hb-host-status-chip ${d?"is-done":""}">
              ${h(s)}
              <span>${v(s.name)}</span>
              <span>${d?i.VOTED:i.WAITING}</span>
            </div>
          `}).join("")}
      </div>
    </div>
  `}function I(e,n,t){c("challenge",t),g(e,t,i.SPY_GUESS),t.challengeContent.innerHTML=`
    <div class="text-center hb-host-content-stack">
      <div class="hb-host-subprompt">${i.LOCATION}</div>
    </div>
  `}function N(e,n,t){c("results",t);const o=e.currentRoundResult;t.resultsContainer.innerHTML=f({eyebrow:i.REVEAL,title:o!=null&&o.spyWon?i.SPY_WON:i.TEAM_WON,subtitle:[`${i.SPY}: ${(o==null?void 0:o.spyName)||""}`,`${i.LOCATION}: ${(o==null?void 0:o.locationName)||""}`,`${i.ACCUSED}: ${(o==null?void 0:o.accusedPlayerName)||i.NO_VOTE}`].join(" | "),rows:o?C(o,n):""})}function C(e,n){return e.voteResults.map(t=>{const o=p(n,t.playerId)||{id:t.playerId,name:t.playerId,color:"#64748b"},a=p(n,t.votedPlayerId),s=t.votedPlayerId===e.spyId,d=t.playerId===e.spyId?e.spyWon?u.SPY_WIN_POINTS:0:(e.spyWon?0:u.TEAM_WIN_POINTS)+(s?u.CORRECT_VOTE_POINTS:0);return T({player:o,detail:`${i.VOTE_SPY}: ${(a==null?void 0:a.name)||i.NO_VOTE}`,reward:`+${r(d.toString())} ${i.POINTS}`,tone:s?"good":"muted"})}).join("")}function E(e,n,t){c("results",t);const o=Object.values(e.scores).sort((s,l)=>l.points-s.points),a=o.map(s=>s.points);t.resultsContainer.innerHTML=f({eyebrow:i.GAME_OVER,title:i.RESULTS,rows:o.map(s=>{const l=p(n,s.playerId)||{id:s.playerId,name:s.playerName,color:"#64748b"};return T({player:l,rank:S(a,s.points),detail:[`${i.FOUND_SPY}: ${r(s.foundSpy.toString())}`,`${i.SPY_WINS}: ${r(s.spyWins.toString())}`,`${i.TEAM_WINS}: ${r(s.teamWins.toString())}`].join(" | "),reward:`${r(s.points.toString())} ${i.POINTS}`,tone:S(a,s.points)===1&&s.points>0?"winner":"default"})}).join("")})}function g(e,n,t){n.challengeTitle.textContent=t,n.challengeTimer.classList.add("is-count-circle"),n.challengeTimer.textContent=$(e.timeRemaining/1e3),n.challengeProgress.textContent=i.GAME_NAME}function p(e,n){return n&&e.find(t=>t.id===n)||null}function c(e,n){n.challengeContainer.classList.toggle("hidden",e!=="challenge"),n.resultsContainer.classList.toggle("hidden",e!=="results"),e==="challenge"&&(n.challengeContent.className="board-host-game-content"),n.finalResults!==n.resultsContainer&&n.finalResults.classList.add("hidden")}function w(){}export{w as cleanupHandlers,x as renderGameScreen,y as renderPhase};
