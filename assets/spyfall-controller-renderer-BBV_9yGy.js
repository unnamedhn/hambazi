import{t as p,e as u,f as _}from"./utils-CtiNnZvt.js";import{z as L,g as b}from"./theme-registry-CiclUM8b.js";import{c as C,d as N,g as P}from"./ui-components-Tk9G7nUf.js";import{b as i,S as E}from"./spyfall-constants-B9TudPiR.js";import"./howler-DacRvduY.js";const h=new Map;let I=null,v=null;const O="تلویزیون را نگاه کن",M="رتبه شما";function F(n,o,t,e){switch(n){case"intro":A(o,e);break;case"discussion":k(o,e);break;case"vote-spy":H(o,t,e);break;case"spy-guess":Y(o,t,e);break;case"reveal":m(o,t,e);break;case"game-end":W(o,t,e);break;case"lobby":break;default:console.warn(`Unknown phase for Spyfall controller renderer: ${n}`)}}function A(n,o){d(),T(o),f(o,i.INTRO),o.timer.textContent="",o.challengeInfo.textContent="",o.challengeQuestion.innerHTML=g(n.privateRole),o.optionsContainer.innerHTML=""}function k(n,o){d(),T(o),f(o,i.DISCUSSION,i.ASK_QUESTIONS),o.timer.textContent=_(n.timeRemaining/1e3),o.challengeInfo.textContent="",o.challengeQuestion.innerHTML=g(n.privateRole),o.optionsContainer.innerHTML=""}function H(n,o,t){var e;T(t),f(t,i.VOTE_SPY),t.timer.textContent=_(n.timeRemaining/1e3),t.challengeInfo.textContent="",t.challengeQuestion.innerHTML=g(n.privateRole);const r=`vote:${n.roundId}`;if((e=n.votes[o])!=null&&e.votedPlayerId||v===r){d(),t.optionsContainer.innerHTML=S(i.VOTED);return}x(n,o,t,r,n.roundId)}function Y(n,o,t){T(t),f(t,i.SPY_GUESS),t.timer.textContent=_(n.timeRemaining/1e3),t.challengeQuestion.innerHTML=g(n.privateRole);const e=n.privateRole;if(!(e!=null&&e.isSpy)){d(),t.challengeInfo.textContent=i.WAITING,t.optionsContainer.innerHTML=S(i.SPY_GUESS);return}t.challengeInfo.textContent="";const r=`guess:${n.roundId}`;if(n.spyGuessLocationId||v===r){d(),t.optionsContainer.innerHTML=S(i.SPY_GUESSED);return}U(e,o,t,r,n.roundId)}function m(n,o,t){var e;d(),$(t,i.REVEAL);const r=n.currentRoundResult,s=(r==null?void 0:r.spyId)===o,l=s?r==null?void 0:r.spyWon:!(r!=null&&r.spyWon),a=((e=n.votes[o])==null?void 0:e.votedPlayerId)===(r==null?void 0:r.spyId),c=s?r!=null&&r.spyWon?E.SPY_WIN_POINTS:0:(r!=null&&r.spyWon?0:E.TEAM_WIN_POINTS)+(a?E.CORRECT_VOTE_POINTS:0);t.myResult.innerHTML=C({cue:O,title:l?s?i.SPY_WON:i.TEAM_WON:s?i.SPY_FOUND:i.SPY_WON,summary:`${i.LOCATION}: ${(r==null?void 0:r.locationName)||""}`,tone:l?"success":"default",reward:{value:`+${p(c.toString())}`,label:i.POINTS},body:`
      <div class="hb-result-detail-stack">
        <div><span>${i.SPY}</span><strong>${u((r==null?void 0:r.spyName)||"")}</strong></div>
      </div>
    `})}function W(n,o,t){d(),$(t,i.GAME_OVER);const e=Object.values(n.scores).sort((l,a)=>a.points-l.points),r=n.scores[o],s=Math.max(1,e.findIndex(l=>l.playerId===o)+1);t.myResult.innerHTML=C({cue:O,title:`${M}: ${p(s.toString())}`,summary:i.RESULTS,tone:s===1?"success":"default",reward:r?{value:p(r.points.toString()),label:i.POINTS}:void 0,body:r?`
      <div class="hb-km-stat-grid">
        <div>${i.FOUND_SPY}<strong>${p(r.foundSpy.toString())}</strong></div>
        <div>${i.SPY_WINS}<strong>${p(r.spyWins.toString())}</strong></div>
        <div>${i.TEAM_WINS}<strong>${p(r.teamWins.toString())}</strong></div>
      </div>
    `:""})}function g(n){return n?n.isSpy?`
      <div class="hb-km-result-panel hb-spy-role-card is-warning">
        <div class="hb-km-result-title">${i.YOU_ARE_SPY}</div>
        <div class="hb-km-result-note">${i.ASK_QUESTIONS}</div>
      </div>
    `:`
    <div class="hb-km-result-panel hb-spy-role-card is-success">
      <div class="hb-km-result-note">${i.YOU_ARE_NOT_SPY}</div>
      <div class="hb-km-result-title">${i.LOCATION}: ${u(n.locationName||"")}</div>
      <div class="hb-km-result-note">${i.ROLE}: ${u(n.roleName||"")}</div>
    </div>
  `:`<div class="hb-km-result-panel hb-spy-role-card is-neutral">${i.WAITING}</div>`}function x(n,o,t,e,r){const s=Object.values(n.votes),l=`${e}:${s.map(a=>`${a.playerId}:${a.playerColor||""}:${a.avatarId||""}`).join("|")}`;I===l&&t.optionsContainer.querySelector(".spyfall-vote-button")||(d(),I=l,t.optionsContainer.innerHTML=s.map((a,c)=>P({id:a.playerId,name:a.playerName,color:a.playerColor||L[c%L.length],avatarId:a.avatarId||`avatar-${c%L.length}`},a.playerId===o?"خودم":i.VOTE_SPY,`data-player-id="${u(a.playerId)}"`,"spyfall-vote-button")).join(""),t.optionsContainer.querySelectorAll(".spyfall-vote-button").forEach(a=>{const c=a.getAttribute("data-player-id")||"",y=R=>{R.preventDefault(),!(!c||v===e)&&(v=e,b.sendGameEvent("SP_VOTE_SPY",{playerId:o,roundId:r,votedPlayerId:c}),t.optionsContainer.innerHTML=S(i.VOTED))};a.addEventListener("click",y),a.addEventListener("touchstart",y),h.set(a,y)}))}function U(n,o,t,e,r){d(),t.optionsContainer.innerHTML=n.locationOptions.map((s,l)=>`
    <button class="spyfall-location-button hb-answer-option" data-location-id="${u(s.id)}">
      <span class="hb-answer-index">${p((l+1).toString())}</span>
      <span class="hb-answer-text">${u(s.name)}</span>
    </button>
  `).join(""),t.optionsContainer.querySelectorAll(".spyfall-location-button").forEach(s=>{const l=s.getAttribute("data-location-id")||"",a=c=>{c.preventDefault(),!(!l||v===e)&&(v=e,b.sendGameEvent("SP_GUESS_LOCATION",{playerId:o,roundId:r,locationId:l}),t.optionsContainer.innerHTML=S(i.SPY_GUESSED))};s.addEventListener("click",a),s.addEventListener("touchstart",a),h.set(s,a)})}function S(n){return N({cue:O,title:n})}function f(n,o,t=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${u(o)}</span>
    </div>
    ${t?`<div class="hb-minigame-instruction">${u(t)}</div>`:""}
  `}function T(n){var o;(o=n.challengeContainer)==null||o.classList.remove("hidden"),n.myResult.classList.add("hidden")}function $(n,o){var t;(t=n.challengeContainer)==null||t.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),f(n,i.GAME_NAME,o),n.timer.textContent="",n.challengeInfo.textContent="",n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function d(){h.forEach((n,o)=>{o.removeEventListener("click",n),o.removeEventListener("touchstart",n)}),h.clear()}function K(){d(),I=null,v=null}export{K as cleanupHandlers,F as renderPhase};
