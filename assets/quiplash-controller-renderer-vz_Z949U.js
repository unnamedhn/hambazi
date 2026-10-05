import{c as X,t as p,e as h,f as Y}from"./utils-B-zlAPKk.js";import{b as M,c as q}from"./theme-registry-B-ymQaNS.js";import{r as y,a as z}from"./ui-components-FMHP__KN.js";import{Q as a,a as k}from"./quiplash-constants-COhCMD1-.js";const C=new Map,_=new Map,N=new Map;let m=null,L=null,g=null,$=null,E=null,R=null,w=null,O=null;const I="تلویزیون را نگاه کن",F="رتبه شما";function dn(n,t,o,r){var e;switch(w=n,O=((e=t.currentPrompt)==null?void 0:e.id)||null,["reveal","reaction"].includes(n)||(g=null),n){case"prompt":J(t,r);break;case"write-answer":Z(t,o,r);break;case"vote":nn(t,o,r);break;case"reveal":case"reaction":tn(t,o,r);break;case"game-end":on(t,o,r);break;case"lobby":break;default:console.warn(`Unknown phase for Quiplash controller renderer: ${n}`)}}function J(n,t){v(),V(t),x(n,t,a.PROMPT),t.challengeQuestion.innerHTML=P(n),t.optionsContainer.innerHTML=T(a.WAITING)}function Z(n,t,o){var r,e;V(o),x(n,o,a.WRITE_ANSWER),o.challengeQuestion.innerHTML=P(n);const s=((r=n.currentPrompt)==null?void 0:r.id)||"none";if(!!!n.answers[t]){v(),o.optionsContainer.innerHTML=T(a.WAITING);return}if(!!((e=n.answers[t])!=null&&e.submitted)||E===s){v(),o.optionsContainer.innerHTML=T(a.SUBMITTED);return}U(n,t,o)}function nn(n,t,o){var r;if(V(o),x(n,o,a.VOTE),o.challengeQuestion.innerHTML=P(n),!!!n.answers[t]){v(),o.optionsContainer.innerHTML=T(a.WAITING);return}const s=((r=n.currentPrompt)==null?void 0:r.id)||"none";if(!!n.votes[t]||R===s){v(),o.optionsContainer.innerHTML=T(a.VOTED);return}W(n,t,o)}function tn(n,t,o){var r;const e=JSON.stringify([n.phase,(r=n.currentPrompt)==null?void 0:r.id,t,n.resultVersion,n.currentRoundResult,n.options,n.reactionContinueOwnerId,n.reactionContinueEnabled]);if(g===e&&$===o.myResult&&o.myResult.childElementCount>0)return;g=e,$=o.myResult,v(),D(o,a.REVEAL);const s=n.currentRoundResult,u=s==null?void 0:s.voteResults.find(c=>c.playerId===t),i=s==null?void 0:s.answerResults.find(c=>c.playerId===t),l=n.options.find(c=>c.id===(u==null?void 0:u.votedOptionId)),b=((u==null?void 0:u.coinsEarned)||0)+((i==null?void 0:i.coinsEarned)||0);if(o.myResult.innerHTML=y({cue:I,title:a.REVEAL,summary:(l==null?void 0:l.text)||a.NO_VOTE,tone:u!=null&&u.votedDecoy?"default":"success",reward:{value:`+${p(b.toString())}`,label:a.POINTS},body:i?`
      <div class="hb-result-detail-stack">
        <div>
          <span>${a.YOUR_ANSWER}</span>
          <strong>${h(i.text)}</strong>
          <small>${p(i.votes.toString())} ${a.ANSWER_VOTES}</small>
        </div>
      </div>
    `:""}),n.phase!=="reaction")return;const S=n.reactionContinueOwnerId===t?`<button type="button" class="hb-primary-button qp-reaction-continue" ${n.reactionContinueEnabled?"":"disabled"}>${n.reactionContinueEnabled?a.CONTINUE:a.CONTINUE_WAIT}</button>`:`<p class="hb-result-cue">${a.CONTINUE_OTHERS}</p>`;o.myResult.insertAdjacentHTML("beforeend",S);const d=o.myResult.querySelector(".qp-reaction-continue");if(d&&n.reactionContinueEnabled&&n.currentPrompt){const c=H=>{var A;if(H.preventDefault(),d.hasAttribute("disabled"))return;d.setAttribute("disabled","");const K=M.sendGameEvent("QP_RESULT_CONTINUE",{playerId:t,promptId:(A=n.currentPrompt)==null?void 0:A.id,actionId:q("qp-result")});Promise.resolve(K).then(j=>{j===!1&&g===e&&d.isConnected&&d.removeAttribute("disabled")})};d.addEventListener("click",c),d.addEventListener("touchstart",c,{passive:!1}),C.set(d,c)}}function on(n,t,o){var r;v(),D(o,a.GAME_OVER);const e=Object.values(n.scores).sort((i,l)=>l.totalCoins-i.totalCoins),s=n.scores[t],u=s?X(e.map(i=>i.totalCoins),s.totalCoins):Math.max(1,e.length);o.myResult.innerHTML=y({cue:I,title:`${F}: ${p(u.toString())}`,summary:a.RESULTS,tone:u===1&&((r=s==null?void 0:s.totalCoins)!=null?r:0)>0?"success":"default",reward:s?{value:p(s.totalCoins.toString()),label:a.POINTS}:void 0,body:s?`
      <div class="hb-km-stat-grid">
        <div>${a.ANSWER_VOTES}<strong>${p(s.answerVotes.toString())}</strong></div>
        <div>${a.HUMAN_VOTES}<strong>${p(s.humanVotes.toString())}</strong></div>
      </div>
    `:""})}function x(n,t,o){const r=n.currentPromptIndex+1;Q(t,`${p(r.toString())}/${p(n.totalPrompts.toString())}`,o),t.timer.textContent=Y(n.timeRemaining/1e3),t.challengeInfo.textContent=""}function P(n){var t;return`
    <div class="hb-km-question">${h(((t=n.currentPrompt)==null?void 0:t.text)||"")}</div>
  `}function U(n,t,o){var r;const e=((r=n.currentPrompt)==null?void 0:r.id)||"none",s=`${e}:write`;if(m===s&&o.optionsContainer.querySelector(".quiplash-answer-input"))return;v(),m=s,L=null,g=null,$=null;const u=_.get(e)||"";o.optionsContainer.innerHTML=`
    <div class="hb-text-entry">
      <textarea
        class="quiplash-answer-input hb-textarea"
        rows="4"
        maxlength="${k.MAX_ANSWER_LENGTH}"
        dir="auto"
        inputmode="text"
        placeholder="${h(a.PLACEHOLDER)}"
      >${h(u)}</textarea>
      <div class="hb-input-meta">
        <span>${a.CHARACTER_LIMIT} ${p(k.MAX_ANSWER_LENGTH.toString())}</span>
        <span class="quiplash-char-count">${p(u.length.toString())}</span>
      </div>
      <button
        class="quiplash-submit-button hb-primary-button disabled:opacity-40"
        ${u.trim()?"":"disabled"}
      >
        ${a.SUBMIT}
      </button>
    </div>
  `;const i=o.optionsContainer.querySelector(".quiplash-answer-input"),l=o.optionsContainer.querySelector(".quiplash-submit-button"),b=o.optionsContainer.querySelector(".quiplash-char-count");if(i){const f=()=>{_.set(e,i.value),b&&(b.textContent=p(i.value.length.toString())),l&&(l.disabled=i.value.trim().length===0)};i.addEventListener("input",f),C.set(i,f)}if(l&&i){const f=S=>{if(S.preventDefault(),E===e)return;const d=i.value.trim();if(!d)return;const c=rn(e,t);E=e,l.disabled=!0,_.set(e,d);const H=M.sendGameEvent("QP_SUBMIT_ANSWER",{playerId:t,promptId:e,text:d,optionToken:c});o.optionsContainer.innerHTML=T(a.SUBMITTED),Promise.resolve(H).then(A=>{A!==!1||E!==e||w!=="write-answer"||O!==e||(E=null,m=null,U(n,t,o))})};l.addEventListener("click",f),l.addEventListener("touchstart",f),C.set(l,f)}}function W(n,t,o){var r;const e=((r=n.currentPrompt)==null?void 0:r.id)||"none",s=`${e}:vote:${n.options.map(i=>i.id).join("|")}`;if(L===s&&o.optionsContainer.querySelector(".quiplash-vote-button"))return;v(),L=s,m=null;const u=B(e,t);o.optionsContainer.innerHTML=n.options.map(i=>en(i,u)).join(""),o.optionsContainer.querySelectorAll(".quiplash-vote-button").forEach(i=>{if(i.hasAttribute("disabled"))return;const l=i.getAttribute("data-option-id")||"",b=f=>{if(f.preventDefault(),!l||R===e)return;R=e;const S=M.sendGameEvent("QP_VOTE",{playerId:t,promptId:e,optionId:l});o.optionsContainer.innerHTML=T(a.VOTED),Promise.resolve(S).then(d=>{d!==!1||R!==e||w!=="vote"||O!==e||(R=null,L=null,W(n,t,o))})};i.addEventListener("click",b),i.addEventListener("touchstart",b),C.set(i,b)})}function en(n,t){const o=!!(t&&n.id===`answer-${t}`);return`
    <button
      class="quiplash-vote-button hb-vote-option disabled:opacity-45"
      data-option-id="${h(n.id)}"
      ${o?"disabled":""}
    >
      <div>${h(n.text)}</div>
      ${o?`<div class="mt-2 text-sm opacity-75">${a.CANNOT_VOTE_OWN_ANSWER}</div>`:""}

    </button>
  `}function rn(n,t){const o=B(n,t);if(o)return o;const r=q("quiplash-option");return N.set(n,r),window.sessionStorage.setItem(G(n,t),r),r}function B(n,t){return N.get(n)||window.sessionStorage.getItem(G(n,t))}function G(n,t){return`hambazi:funny-option:${n}:${t}`}function T(n){return z({cue:I,title:n})}function Q(n,t,o=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${h(t)}</span>
    </div>
    ${o?`<div class="hb-minigame-instruction">${h(o)}</div>`:""}
  `}function V(n){var t;(t=n.challengeContainer)==null||t.classList.remove("hidden"),n.myResult.classList.add("hidden")}function D(n,t){var o;(o=n.challengeContainer)==null||o.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),Q(n,a.GAME_NAME,t),n.timer.textContent="",n.challengeInfo.textContent="",n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function v(){C.forEach((n,t)=>{t.removeEventListener("click",n),t.removeEventListener("touchstart",n),t.removeEventListener("input",n)}),C.clear()}function cn(){v(),_.clear(),N.clear(),m=null,L=null,g=null,$=null,E=null,R=null,w=null,O=null}export{cn as cleanupHandlers,dn as renderPhase};
