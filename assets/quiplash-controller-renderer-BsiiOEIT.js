import{t as c,e as v,f as q}from"./utils-CtiNnZvt.js";import{g as H,l as P}from"./theme-registry-DVwZrcfh.js";import{c as _,d as y}from"./ui-components-Tk9G7nUf.js";import{b as r,Q as w}from"./quiplash-constants-CMFfrw1l.js";import"./howler-DacRvduY.js";const h=new Map,b=new Map,m=new Map;let g=null,E=null,S=null,L=null;const $="تلویزیون را نگاه کن",W="رتبه شما";function tn(n,t,o,i){switch(n){case"prompt":B(t,i);break;case"write-answer":U(t,o,i);break;case"vote":G(t,o,i);break;case"reveal":Q(t,o,i);break;case"game-end":D(t,o,i);break;case"lobby":break;default:console.warn(`Unknown phase for Quiplash controller renderer: ${n}`)}}function B(n,t){l(),M(t),A(n,t,r.PROMPT),t.challengeQuestion.innerHTML=C(n),t.optionsContainer.innerHTML=f(r.WAITING)}function U(n,t,o){var i,e;M(o),A(n,o,r.WRITE_ANSWER),o.challengeQuestion.innerHTML=C(n);const s=((i=n.currentPrompt)==null?void 0:i.id)||"none";if(!!!n.answers[t]){l(),o.optionsContainer.innerHTML=f(r.WAITING);return}if(!!((e=n.answers[t])!=null&&e.submitted)||S===s){l(),o.optionsContainer.innerHTML=f(r.SUBMITTED);return}K(n,t,o)}function G(n,t,o){var i;if(M(o),A(n,o,r.VOTE),o.challengeQuestion.innerHTML=C(n),!!!n.answers[t]){l(),o.optionsContainer.innerHTML=f(r.WAITING);return}const s=((i=n.currentPrompt)==null?void 0:i.id)||"none";if(!!n.votes[t]||L===s){l(),o.optionsContainer.innerHTML=f(r.VOTED);return}j(n,t,o)}function Q(n,t,o){l(),N(o,r.REVEAL);const i=n.currentRoundResult,e=i==null?void 0:i.voteResults.find(u=>u.playerId===t),s=i==null?void 0:i.answerResults.find(u=>u.playerId===t),d=n.options.find(u=>u.id===(e==null?void 0:e.votedOptionId)),a=((e==null?void 0:e.coinsEarned)||0)+((s==null?void 0:s.coinsEarned)||0);o.myResult.innerHTML=_({cue:$,title:r.REVEAL,summary:(d==null?void 0:d.text)||r.NO_VOTE,tone:e!=null&&e.votedDecoy?"default":"success",reward:{value:`+${c(a.toString())}`,label:r.POINTS},body:s?`
      <div class="hb-result-detail-stack">
        <div>
          <span>${r.YOUR_ANSWER}</span>
          <strong>${v(s.text)}</strong>
          <small>${c(s.votes.toString())} ${r.ANSWER_VOTES}</small>
        </div>
      </div>
    `:""})}function D(n,t,o){l(),N(o,r.GAME_OVER);const i=Object.values(n.scores).sort((d,a)=>a.totalCoins-d.totalCoins),e=n.scores[t],s=Math.max(1,i.findIndex(d=>d.playerId===t)+1);o.myResult.innerHTML=_({cue:$,title:`${W}: ${c(s.toString())}`,summary:r.RESULTS,tone:s===1?"success":"default",reward:e?{value:c(e.totalCoins.toString()),label:r.POINTS}:void 0,body:e?`
      <div class="hb-km-stat-grid">
        <div>${r.ANSWER_VOTES}<strong>${c(e.answerVotes.toString())}</strong></div>
        <div>${r.HUMAN_VOTES}<strong>${c(e.humanVotes.toString())}</strong></div>
      </div>
    `:""})}function A(n,t,o){const i=n.currentPromptIndex+1;I(t,`${c(i.toString())}/${c(n.totalPrompts.toString())}`,o),t.timer.textContent=q(n.timeRemaining/1e3),t.challengeInfo.textContent=""}function C(n){var t;return`
    <div class="hb-km-question">${v(((t=n.currentPrompt)==null?void 0:t.text)||"")}</div>
  `}function K(n,t,o){var i;const e=((i=n.currentPrompt)==null?void 0:i.id)||"none",s=`${e}:write`;if(g===s&&o.optionsContainer.querySelector(".quiplash-answer-input"))return;l(),g=s,E=null;const d=b.get(e)||"";o.optionsContainer.innerHTML=`
    <div class="hb-text-entry">
      <textarea
        class="quiplash-answer-input hb-textarea"
        rows="4"
        maxlength="${w.MAX_ANSWER_LENGTH}"
        dir="auto"
        inputmode="text"
        placeholder="${v(r.PLACEHOLDER)}"
      >${v(d)}</textarea>
      <div class="hb-input-meta">
        <span>${r.CHARACTER_LIMIT} ${c(w.MAX_ANSWER_LENGTH.toString())}</span>
        <span class="quiplash-char-count">${c(d.length.toString())}</span>
      </div>
      <button
        class="quiplash-submit-button hb-primary-button disabled:opacity-40"
        ${d.trim()?"":"disabled"}
      >
        ${r.SUBMIT}
      </button>
    </div>
  `;const a=o.optionsContainer.querySelector(".quiplash-answer-input"),u=o.optionsContainer.querySelector(".quiplash-submit-button"),T=o.optionsContainer.querySelector(".quiplash-char-count");if(a){const p=()=>{b.set(e,a.value),T&&(T.textContent=c(a.value.length.toString())),u&&(u.disabled=a.value.trim().length===0)};a.addEventListener("input",p),h.set(a,p)}if(u&&a){const p=V=>{if(V.preventDefault(),S===e)return;const R=a.value.trim();if(!R)return;const k=Y(e,t);S=e,u.disabled=!0,b.set(e,R),H.sendGameEvent("QP_SUBMIT_ANSWER",{playerId:t,promptId:e,text:R,optionToken:k}),o.optionsContainer.innerHTML=f(r.SUBMITTED)};u.addEventListener("click",p),u.addEventListener("touchstart",p),h.set(u,p)}}function j(n,t,o){var i;const e=((i=n.currentPrompt)==null?void 0:i.id)||"none",s=`${e}:vote:${n.options.map(a=>a.id).join("|")}`;if(E===s&&o.optionsContainer.querySelector(".quiplash-vote-button"))return;l(),E=s,g=null;const d=O(e,t);o.optionsContainer.innerHTML=n.options.map(a=>X(a,d)).join(""),o.optionsContainer.querySelectorAll(".quiplash-vote-button").forEach(a=>{if(a.hasAttribute("disabled"))return;const u=a.getAttribute("data-option-id")||"",T=p=>{p.preventDefault(),!(!u||L===e)&&(L=e,H.sendGameEvent("QP_VOTE",{playerId:t,promptId:e,optionId:u}),o.optionsContainer.innerHTML=f(r.VOTED))};a.addEventListener("click",T),a.addEventListener("touchstart",T),h.set(a,T)})}function X(n,t){const o=!!(t&&n.id===`answer-${t}`);return`
    <button
      class="quiplash-vote-button hb-vote-option disabled:opacity-45"
      data-option-id="${v(n.id)}"
      ${o?"disabled":""}
    >
      <div>${v(n.text)}</div>
      ${o?`<div class="mt-2 text-sm opacity-75">${r.CANNOT_VOTE_OWN_ANSWER}</div>`:""}

    </button>
  `}function Y(n,t){const o=O(n,t);if(o)return o;const i=P("quiplash-option");return m.set(n,i),window.sessionStorage.setItem(x(n,t),i),i}function O(n,t){return m.get(n)||window.sessionStorage.getItem(x(n,t))}function x(n,t){return`hambazi:funny-option:${n}:${t}`}function f(n){return y({cue:$,title:n})}function I(n,t,o=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${v(t)}</span>
    </div>
    ${o?`<div class="hb-minigame-instruction">${v(o)}</div>`:""}
  `}function M(n){var t;(t=n.challengeContainer)==null||t.classList.remove("hidden"),n.myResult.classList.add("hidden")}function N(n,t){var o;(o=n.challengeContainer)==null||o.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),I(n,r.GAME_NAME,t),n.timer.textContent="",n.challengeInfo.textContent="",n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function l(){h.forEach((n,t)=>{t.removeEventListener("click",n),t.removeEventListener("touchstart",n),t.removeEventListener("input",n)}),h.clear()}function on(){l(),b.clear(),m.clear(),g=null,E=null,S=null,L=null}export{on as cleanupHandlers,tn as renderPhase};
