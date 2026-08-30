import{j as G,t as c,e as p,f as N}from"./utils-DU4T6s1G.js";import{g as x}from"./theme-registry-JtH1Nn-6.js";import{c as V,d as U}from"./ui-components-B4r38biB.js";import{b as e,F as O}from"./fibbage-constants-PZSepb6b.js";const h=new Map,m=new Map;let T=null,L=null,g=null,E=null,C=null,$=null;const _="تلویزیون را نگاه کن",D="رتبه شما";function Z(n,t,o,a){var i;switch(C=n,$=((i=t.currentPrompt)==null?void 0:i.id)||null,n){case"prompt":W(t,a);break;case"write-lie":q(t,o,a);break;case"vote":F(t,o,a);break;case"reveal":K(t,o,a);break;case"game-end":j(t,o,a);break;case"lobby":break;default:console.warn(`Unknown phase for Fibbage controller renderer: ${n}`)}}function W(n,t){v(),M(t),I(n,t,e.PROMPT),t.challengeQuestion.innerHTML=H(n),t.optionsContainer.innerHTML=b(e.WAITING)}function q(n,t,o){var a,i;M(o),I(n,o,e.WRITE_LIE),o.challengeQuestion.innerHTML=H(n);const r=((a=n.currentPrompt)==null?void 0:a.id)||"none";if(!!!n.submissions[t]){v(),o.optionsContainer.innerHTML=b(e.WAITING);return}if(!!((i=n.submissions[t])!=null&&i.submitted)||g===r){v(),o.optionsContainer.innerHTML=b(e.SUBMITTED);return}A(n,t,o)}function F(n,t,o){var a;if(M(o),I(n,o,e.VOTE),o.challengeQuestion.innerHTML=H(n),!!!n.submissions[t]){v(),o.optionsContainer.innerHTML=b(e.WAITING);return}const r=((a=n.currentPrompt)==null?void 0:a.id)||"none";if(!!n.votes[t]||E===r){v(),o.optionsContainer.innerHTML=b(e.VOTED);return}B(n,t,o)}function K(n,t,o){var a;v(),k(o,e.REVEAL);const i=n.currentRoundResult,r=i==null?void 0:i.voteResults.find(d=>d.playerId===t),s=i==null?void 0:i.lieResults.find(d=>d.playerId===t),l=n.options.find(d=>d.id===(r==null?void 0:r.votedOptionId)),u=n.options.find(d=>d.id===(i==null?void 0:i.truthOptionId)),f=((r==null?void 0:r.coinsEarned)||0)+((s==null?void 0:s.coinsEarned)||0);o.myResult.innerHTML=V({cue:_,title:r!=null&&r.correct?e.TRUTH:e.REVEAL,summary:(u==null?void 0:u.text)||((a=n.currentPrompt)==null?void 0:a.truth)||"",tone:r!=null&&r.correct?"success":"default",reward:{value:`+${c(f.toString())}`,label:e.COINS},body:`
      <div class="hb-result-detail-stack">
        <div><span>${e.VOTE}</span><strong>${p((l==null?void 0:l.text)||e.NO_VOTE)}</strong></div>
        ${s?`
          <div>
            <span>${e.YOUR_LIE}</span>
            <strong>${p(s.text)}</strong>
            <small>${c(s.votes.toString())} ${e.LIE_VOTES}</small>
          </div>
        `:""}
      </div>
    `})}function j(n,t,o){var a;v(),k(o,e.GAME_OVER);const i=Object.values(n.scores).sort((l,u)=>u.totalCoins-l.totalCoins),r=n.scores[t],s=r?G(i.map(l=>l.totalCoins),r.totalCoins):Math.max(1,i.length);o.myResult.innerHTML=V({cue:_,title:`${D}: ${c(s.toString())}`,summary:e.RESULTS,tone:s===1&&((a=r==null?void 0:r.totalCoins)!=null?a:0)>0?"success":"default",reward:r?{value:c(r.totalCoins.toString()),label:e.COINS}:void 0,body:r?`
      <div class="hb-km-stat-grid">
        <div>${e.TRUTH_GUESSES}<strong>${c(r.truthGuesses.toString())}</strong></div>
        <div>${e.LIE_VOTES}<strong>${c(r.lieVotes.toString())}</strong></div>
      </div>
    `:""})}function I(n,t,o){const a=n.currentPromptIndex+1;P(t,`${c(a.toString())}/${c(n.totalPrompts.toString())}`,o),t.timer.textContent=N(n.timeRemaining/1e3),t.challengeInfo.textContent=""}function H(n){var t;return`
    <div class="hb-km-question">${p(((t=n.currentPrompt)==null?void 0:t.text)||"")}</div>
  `}function A(n,t,o){var a;const i=((a=n.currentPrompt)==null?void 0:a.id)||"none",r=`${i}:write`;if(T===r&&o.optionsContainer.querySelector(".fibbage-lie-input"))return;v(),T=r,L=null;const s=m.get(i)||"";o.optionsContainer.innerHTML=`
    <div class="hb-text-entry">
      <textarea
        class="fibbage-lie-input hb-textarea"
        rows="4"
        maxlength="${O.MAX_LIE_LENGTH}"
        dir="auto"
        inputmode="text"
        placeholder="${p(e.PLACEHOLDER)}"
      >${p(s)}</textarea>
      <div class="hb-input-meta">
        <span>${e.CHARACTER_LIMIT} ${c(O.MAX_LIE_LENGTH.toString())}</span>
        <span class="fibbage-char-count">${c(s.length.toString())}</span>
      </div>
      <button
        class="fibbage-submit-button hb-primary-button disabled:opacity-40"
        ${s.trim()?"":"disabled"}
      >
        ${e.SUBMIT}
      </button>
    </div>
  `;const l=o.optionsContainer.querySelector(".fibbage-lie-input"),u=o.optionsContainer.querySelector(".fibbage-submit-button"),f=o.optionsContainer.querySelector(".fibbage-char-count");if(l){const d=()=>{m.set(i,l.value),f&&(f.textContent=c(l.value.length.toString())),u&&(u.disabled=l.value.trim().length===0)};l.addEventListener("input",d),h.set(l,d)}if(u&&l){const d=R=>{if(R.preventDefault(),g===i)return;const S=l.value.trim();if(!S)return;g=i,u.disabled=!0,m.set(i,S);const w=x.sendGameEvent("FB_SUBMIT_LIE",{playerId:t,promptId:i,text:S});o.optionsContainer.innerHTML=b(e.SUBMITTED),Promise.resolve(w).then(y=>{y!==!1||g!==i||C!=="write-lie"||$!==i||(g=null,T=null,A(n,t,o))})};u.addEventListener("click",d),u.addEventListener("touchstart",d),h.set(u,d)}}function B(n,t,o){var a;const i=((a=n.currentPrompt)==null?void 0:a.id)||"none",r=`${i}:vote:${n.options.map(s=>s.id).join("|")}`;L===r&&o.optionsContainer.querySelector(".fibbage-vote-button")||(v(),L=r,T=null,o.optionsContainer.innerHTML=n.options.map(s=>Q(s,t)).join(""),o.optionsContainer.querySelectorAll(".fibbage-vote-button").forEach(s=>{if(s.hasAttribute("disabled"))return;const l=s.getAttribute("data-option-id")||"",u=f=>{if(f.preventDefault(),!l||E===i)return;E=i;const d=x.sendGameEvent("FB_VOTE",{playerId:t,promptId:i,optionId:l});o.optionsContainer.innerHTML=b(e.VOTED),Promise.resolve(d).then(R=>{R!==!1||E!==i||C!=="vote"||$!==i||(E=null,L=null,B(n,t,o))})};s.addEventListener("click",u),s.addEventListener("touchstart",u),h.set(s,u)}))}function Q(n,t){const o=n.authorId===t;return`
    <button
      class="fibbage-vote-button hb-vote-option ${o?"is-disabled":""}"
      data-option-id="${p(n.id)}"
      ${o?"disabled":""}
    >
      <div>${p(n.text)}</div>
      ${o?`<div class="mt-2 text-sm opacity-75">${e.CANNOT_VOTE_OWN_LIE}</div>`:""}
    </button>
  `}function b(n){return U({cue:_,title:n})}function P(n,t,o=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${p(t)}</span>
    </div>
    ${o?`<div class="hb-minigame-instruction">${p(o)}</div>`:""}
  `}function M(n){var t;(t=n.challengeContainer)==null||t.classList.remove("hidden"),n.myResult.classList.add("hidden")}function k(n,t){var o;(o=n.challengeContainer)==null||o.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),P(n,e.GAME_NAME,t),n.timer.textContent="",n.challengeInfo.textContent="",n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function v(){h.forEach((n,t)=>{t.removeEventListener("click",n),t.removeEventListener("touchstart",n),t.removeEventListener("input",n)}),h.clear()}function nn(){v(),m.clear(),T=null,L=null,g=null,E=null,C=null,$=null}export{nn as cleanupHandlers,Z as renderPhase};
