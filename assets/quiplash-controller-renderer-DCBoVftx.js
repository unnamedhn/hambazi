import{h as G,t as d,e as v,f as Q}from"./utils-DwvgUve0.js";import{g as x,l as D}from"./theme-registry-DnI3cy_m.js";import{c as N,d as K}from"./ui-components-Dv-0K--_.js";import{b as r,Q as O}from"./quiplash-constants-BzTlauqg.js";import"./howler-DacRvduY.js";const R=new Map,m=new Map,w=new Map;let E=null,S=null,T=null,b=null,L=null,C=null;const A="تلویزیون را نگاه کن",j="رتبه شما";function sn(n,t,o,i){var e;switch(L=n,C=((e=t.currentPrompt)==null?void 0:e.id)||null,n){case"prompt":X(t,i);break;case"write-answer":Y(t,o,i);break;case"vote":z(t,o,i);break;case"reveal":F(t,o,i);break;case"game-end":J(t,o,i);break;case"lobby":break;default:console.warn(`Unknown phase for Quiplash controller renderer: ${n}`)}}function X(n,t){c(),H(t),M(n,t,r.PROMPT),t.challengeQuestion.innerHTML=_(n),t.optionsContainer.innerHTML=f(r.WAITING)}function Y(n,t,o){var i,e;H(o),M(n,o,r.WRITE_ANSWER),o.challengeQuestion.innerHTML=_(n);const a=((i=n.currentPrompt)==null?void 0:i.id)||"none";if(!!!n.answers[t]){c(),o.optionsContainer.innerHTML=f(r.WAITING);return}if(!!((e=n.answers[t])!=null&&e.submitted)||T===a){c(),o.optionsContainer.innerHTML=f(r.SUBMITTED);return}V(n,t,o)}function z(n,t,o){var i;if(H(o),M(n,o,r.VOTE),o.challengeQuestion.innerHTML=_(n),!!!n.answers[t]){c(),o.optionsContainer.innerHTML=f(r.WAITING);return}const a=((i=n.currentPrompt)==null?void 0:i.id)||"none";if(!!n.votes[t]||b===a){c(),o.optionsContainer.innerHTML=f(r.VOTED);return}k(n,t,o)}function F(n,t,o){c(),W(o,r.REVEAL);const i=n.currentRoundResult,e=i==null?void 0:i.voteResults.find(l=>l.playerId===t),a=i==null?void 0:i.answerResults.find(l=>l.playerId===t),u=n.options.find(l=>l.id===(e==null?void 0:e.votedOptionId)),s=((e==null?void 0:e.coinsEarned)||0)+((a==null?void 0:a.coinsEarned)||0);o.myResult.innerHTML=N({cue:A,title:r.REVEAL,summary:(u==null?void 0:u.text)||r.NO_VOTE,tone:e!=null&&e.votedDecoy?"default":"success",reward:{value:`+${d(s.toString())}`,label:r.POINTS},body:a?`
      <div class="hb-result-detail-stack">
        <div>
          <span>${r.YOUR_ANSWER}</span>
          <strong>${v(a.text)}</strong>
          <small>${d(a.votes.toString())} ${r.ANSWER_VOTES}</small>
        </div>
      </div>
    `:""})}function J(n,t,o){var i;c(),W(o,r.GAME_OVER);const e=Object.values(n.scores).sort((s,l)=>l.totalCoins-s.totalCoins),a=n.scores[t],u=a?G(e.map(s=>s.totalCoins),a.totalCoins):Math.max(1,e.length);o.myResult.innerHTML=N({cue:A,title:`${j}: ${d(u.toString())}`,summary:r.RESULTS,tone:u===1&&((i=a==null?void 0:a.totalCoins)!=null?i:0)>0?"success":"default",reward:a?{value:d(a.totalCoins.toString()),label:r.POINTS}:void 0,body:a?`
      <div class="hb-km-stat-grid">
        <div>${r.ANSWER_VOTES}<strong>${d(a.answerVotes.toString())}</strong></div>
        <div>${r.HUMAN_VOTES}<strong>${d(a.humanVotes.toString())}</strong></div>
      </div>
    `:""})}function M(n,t,o){const i=n.currentPromptIndex+1;q(t,`${d(i.toString())}/${d(n.totalPrompts.toString())}`,o),t.timer.textContent=Q(n.timeRemaining/1e3),t.challengeInfo.textContent=""}function _(n){var t;return`
    <div class="hb-km-question">${v(((t=n.currentPrompt)==null?void 0:t.text)||"")}</div>
  `}function V(n,t,o){var i;const e=((i=n.currentPrompt)==null?void 0:i.id)||"none",a=`${e}:write`;if(E===a&&o.optionsContainer.querySelector(".quiplash-answer-input"))return;c(),E=a,S=null;const u=m.get(e)||"";o.optionsContainer.innerHTML=`
    <div class="hb-text-entry">
      <textarea
        class="quiplash-answer-input hb-textarea"
        rows="4"
        maxlength="${O.MAX_ANSWER_LENGTH}"
        dir="auto"
        inputmode="text"
        placeholder="${v(r.PLACEHOLDER)}"
      >${v(u)}</textarea>
      <div class="hb-input-meta">
        <span>${r.CHARACTER_LIMIT} ${d(O.MAX_ANSWER_LENGTH.toString())}</span>
        <span class="quiplash-char-count">${d(u.length.toString())}</span>
      </div>
      <button
        class="quiplash-submit-button hb-primary-button disabled:opacity-40"
        ${u.trim()?"":"disabled"}
      >
        ${r.SUBMIT}
      </button>
    </div>
  `;const s=o.optionsContainer.querySelector(".quiplash-answer-input"),l=o.optionsContainer.querySelector(".quiplash-submit-button"),h=o.optionsContainer.querySelector(".quiplash-char-count");if(s){const p=()=>{m.set(e,s.value),h&&(h.textContent=d(s.value.length.toString())),l&&(l.disabled=s.value.trim().length===0)};s.addEventListener("input",p),R.set(s,p)}if(l&&s){const p=$=>{if($.preventDefault(),T===e)return;const g=s.value.trim();if(!g)return;const y=nn(e,t);T=e,l.disabled=!0,m.set(e,g);const B=x.sendGameEvent("QP_SUBMIT_ANSWER",{playerId:t,promptId:e,text:g,optionToken:y});o.optionsContainer.innerHTML=f(r.SUBMITTED),Promise.resolve(B).then(U=>{U!==!1||T!==e||L!=="write-answer"||C!==e||(T=null,E=null,V(n,t,o))})};l.addEventListener("click",p),l.addEventListener("touchstart",p),R.set(l,p)}}function k(n,t,o){var i;const e=((i=n.currentPrompt)==null?void 0:i.id)||"none",a=`${e}:vote:${n.options.map(s=>s.id).join("|")}`;if(S===a&&o.optionsContainer.querySelector(".quiplash-vote-button"))return;c(),S=a,E=null;const u=I(e,t);o.optionsContainer.innerHTML=n.options.map(s=>Z(s,u)).join(""),o.optionsContainer.querySelectorAll(".quiplash-vote-button").forEach(s=>{if(s.hasAttribute("disabled"))return;const l=s.getAttribute("data-option-id")||"",h=p=>{if(p.preventDefault(),!l||b===e)return;b=e;const $=x.sendGameEvent("QP_VOTE",{playerId:t,promptId:e,optionId:l});o.optionsContainer.innerHTML=f(r.VOTED),Promise.resolve($).then(g=>{g!==!1||b!==e||L!=="vote"||C!==e||(b=null,S=null,k(n,t,o))})};s.addEventListener("click",h),s.addEventListener("touchstart",h),R.set(s,h)})}function Z(n,t){const o=!!(t&&n.id===`answer-${t}`);return`
    <button
      class="quiplash-vote-button hb-vote-option disabled:opacity-45"
      data-option-id="${v(n.id)}"
      ${o?"disabled":""}
    >
      <div>${v(n.text)}</div>
      ${o?`<div class="mt-2 text-sm opacity-75">${r.CANNOT_VOTE_OWN_ANSWER}</div>`:""}

    </button>
  `}function nn(n,t){const o=I(n,t);if(o)return o;const i=D("quiplash-option");return w.set(n,i),window.sessionStorage.setItem(P(n,t),i),i}function I(n,t){return w.get(n)||window.sessionStorage.getItem(P(n,t))}function P(n,t){return`hambazi:funny-option:${n}:${t}`}function f(n){return K({cue:A,title:n})}function q(n,t,o=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${v(t)}</span>
    </div>
    ${o?`<div class="hb-minigame-instruction">${v(o)}</div>`:""}
  `}function H(n){var t;(t=n.challengeContainer)==null||t.classList.remove("hidden"),n.myResult.classList.add("hidden")}function W(n,t){var o;(o=n.challengeContainer)==null||o.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),q(n,r.GAME_NAME,t),n.timer.textContent="",n.challengeInfo.textContent="",n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function c(){R.forEach((n,t)=>{t.removeEventListener("click",n),t.removeEventListener("touchstart",n),t.removeEventListener("input",n)}),R.clear()}function ln(){c(),m.clear(),w.clear(),E=null,S=null,T=null,b=null,L=null,C=null}export{ln as cleanupHandlers,sn as renderPhase};
