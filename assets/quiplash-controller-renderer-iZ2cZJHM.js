import{t as d,e as v,f as G}from"./utils-CtiNnZvt.js";import{g as x,l as Q}from"./theme-registry-B1-TVogZ.js";import{c as I,d as D}from"./ui-components-Tk9G7nUf.js";import{b as i,Q as O}from"./quiplash-constants-XoRhm_8H.js";import"./howler-DacRvduY.js";const L=new Map,R=new Map,A=new Map;let E=null,S=null,T=null,b=null,m=null,$=null;const C="تلویزیون را نگاه کن",K="رتبه شما";function an(n,t,o,r){var e;switch(m=n,$=((e=t.currentPrompt)==null?void 0:e.id)||null,n){case"prompt":j(t,r);break;case"write-answer":X(t,o,r);break;case"vote":Y(t,o,r);break;case"reveal":z(t,o,r);break;case"game-end":F(t,o,r);break;case"lobby":break;default:console.warn(`Unknown phase for Quiplash controller renderer: ${n}`)}}function j(n,t){c(),_(t),M(n,t,i.PROMPT),t.challengeQuestion.innerHTML=H(n),t.optionsContainer.innerHTML=f(i.WAITING)}function X(n,t,o){var r,e;_(o),M(n,o,i.WRITE_ANSWER),o.challengeQuestion.innerHTML=H(n);const s=((r=n.currentPrompt)==null?void 0:r.id)||"none";if(!!!n.answers[t]){c(),o.optionsContainer.innerHTML=f(i.WAITING);return}if(!!((e=n.answers[t])!=null&&e.submitted)||T===s){c(),o.optionsContainer.innerHTML=f(i.SUBMITTED);return}N(n,t,o)}function Y(n,t,o){var r;if(_(o),M(n,o,i.VOTE),o.challengeQuestion.innerHTML=H(n),!!!n.answers[t]){c(),o.optionsContainer.innerHTML=f(i.WAITING);return}const s=((r=n.currentPrompt)==null?void 0:r.id)||"none";if(!!n.votes[t]||b===s){c(),o.optionsContainer.innerHTML=f(i.VOTED);return}V(n,t,o)}function z(n,t,o){c(),W(o,i.REVEAL);const r=n.currentRoundResult,e=r==null?void 0:r.voteResults.find(u=>u.playerId===t),s=r==null?void 0:r.answerResults.find(u=>u.playerId===t),l=n.options.find(u=>u.id===(e==null?void 0:e.votedOptionId)),a=((e==null?void 0:e.coinsEarned)||0)+((s==null?void 0:s.coinsEarned)||0);o.myResult.innerHTML=I({cue:C,title:i.REVEAL,summary:(l==null?void 0:l.text)||i.NO_VOTE,tone:e!=null&&e.votedDecoy?"default":"success",reward:{value:`+${d(a.toString())}`,label:i.POINTS},body:s?`
      <div class="hb-result-detail-stack">
        <div>
          <span>${i.YOUR_ANSWER}</span>
          <strong>${v(s.text)}</strong>
          <small>${d(s.votes.toString())} ${i.ANSWER_VOTES}</small>
        </div>
      </div>
    `:""})}function F(n,t,o){c(),W(o,i.GAME_OVER);const r=Object.values(n.scores).sort((l,a)=>a.totalCoins-l.totalCoins),e=n.scores[t],s=Math.max(1,r.findIndex(l=>l.playerId===t)+1);o.myResult.innerHTML=I({cue:C,title:`${K}: ${d(s.toString())}`,summary:i.RESULTS,tone:s===1?"success":"default",reward:e?{value:d(e.totalCoins.toString()),label:i.POINTS}:void 0,body:e?`
      <div class="hb-km-stat-grid">
        <div>${i.ANSWER_VOTES}<strong>${d(e.answerVotes.toString())}</strong></div>
        <div>${i.HUMAN_VOTES}<strong>${d(e.humanVotes.toString())}</strong></div>
      </div>
    `:""})}function M(n,t,o){const r=n.currentPromptIndex+1;q(t,`${d(r.toString())}/${d(n.totalPrompts.toString())}`,o),t.timer.textContent=G(n.timeRemaining/1e3),t.challengeInfo.textContent=""}function H(n){var t;return`
    <div class="hb-km-question">${v(((t=n.currentPrompt)==null?void 0:t.text)||"")}</div>
  `}function N(n,t,o){var r;const e=((r=n.currentPrompt)==null?void 0:r.id)||"none",s=`${e}:write`;if(E===s&&o.optionsContainer.querySelector(".quiplash-answer-input"))return;c(),E=s,S=null;const l=R.get(e)||"";o.optionsContainer.innerHTML=`
    <div class="hb-text-entry">
      <textarea
        class="quiplash-answer-input hb-textarea"
        rows="4"
        maxlength="${O.MAX_ANSWER_LENGTH}"
        dir="auto"
        inputmode="text"
        placeholder="${v(i.PLACEHOLDER)}"
      >${v(l)}</textarea>
      <div class="hb-input-meta">
        <span>${i.CHARACTER_LIMIT} ${d(O.MAX_ANSWER_LENGTH.toString())}</span>
        <span class="quiplash-char-count">${d(l.length.toString())}</span>
      </div>
      <button
        class="quiplash-submit-button hb-primary-button disabled:opacity-40"
        ${l.trim()?"":"disabled"}
      >
        ${i.SUBMIT}
      </button>
    </div>
  `;const a=o.optionsContainer.querySelector(".quiplash-answer-input"),u=o.optionsContainer.querySelector(".quiplash-submit-button"),h=o.optionsContainer.querySelector(".quiplash-char-count");if(a){const p=()=>{R.set(e,a.value),h&&(h.textContent=d(a.value.length.toString())),u&&(u.disabled=a.value.trim().length===0)};a.addEventListener("input",p),L.set(a,p)}if(u&&a){const p=w=>{if(w.preventDefault(),T===e)return;const g=a.value.trim();if(!g)return;const y=Z(e,t);T=e,u.disabled=!0,R.set(e,g);const B=x.sendGameEvent("QP_SUBMIT_ANSWER",{playerId:t,promptId:e,text:g,optionToken:y});o.optionsContainer.innerHTML=f(i.SUBMITTED),Promise.resolve(B).then(U=>{U!==!1||T!==e||m!=="write-answer"||$!==e||(T=null,E=null,N(n,t,o))})};u.addEventListener("click",p),u.addEventListener("touchstart",p),L.set(u,p)}}function V(n,t,o){var r;const e=((r=n.currentPrompt)==null?void 0:r.id)||"none",s=`${e}:vote:${n.options.map(a=>a.id).join("|")}`;if(S===s&&o.optionsContainer.querySelector(".quiplash-vote-button"))return;c(),S=s,E=null;const l=k(e,t);o.optionsContainer.innerHTML=n.options.map(a=>J(a,l)).join(""),o.optionsContainer.querySelectorAll(".quiplash-vote-button").forEach(a=>{if(a.hasAttribute("disabled"))return;const u=a.getAttribute("data-option-id")||"",h=p=>{if(p.preventDefault(),!u||b===e)return;b=e;const w=x.sendGameEvent("QP_VOTE",{playerId:t,promptId:e,optionId:u});o.optionsContainer.innerHTML=f(i.VOTED),Promise.resolve(w).then(g=>{g!==!1||b!==e||m!=="vote"||$!==e||(b=null,S=null,V(n,t,o))})};a.addEventListener("click",h),a.addEventListener("touchstart",h),L.set(a,h)})}function J(n,t){const o=!!(t&&n.id===`answer-${t}`);return`
    <button
      class="quiplash-vote-button hb-vote-option disabled:opacity-45"
      data-option-id="${v(n.id)}"
      ${o?"disabled":""}
    >
      <div>${v(n.text)}</div>
      ${o?`<div class="mt-2 text-sm opacity-75">${i.CANNOT_VOTE_OWN_ANSWER}</div>`:""}

    </button>
  `}function Z(n,t){const o=k(n,t);if(o)return o;const r=Q("quiplash-option");return A.set(n,r),window.sessionStorage.setItem(P(n,t),r),r}function k(n,t){return A.get(n)||window.sessionStorage.getItem(P(n,t))}function P(n,t){return`hambazi:funny-option:${n}:${t}`}function f(n){return D({cue:C,title:n})}function q(n,t,o=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${v(t)}</span>
    </div>
    ${o?`<div class="hb-minigame-instruction">${v(o)}</div>`:""}
  `}function _(n){var t;(t=n.challengeContainer)==null||t.classList.remove("hidden"),n.myResult.classList.add("hidden")}function W(n,t){var o;(o=n.challengeContainer)==null||o.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),q(n,i.GAME_NAME,t),n.timer.textContent="",n.challengeInfo.textContent="",n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function c(){L.forEach((n,t)=>{t.removeEventListener("click",n),t.removeEventListener("touchstart",n),t.removeEventListener("input",n)}),L.clear()}function sn(){c(),R.clear(),A.clear(),E=null,S=null,T=null,b=null,m=null,$=null}export{sn as cleanupHandlers,an as renderPhase};
