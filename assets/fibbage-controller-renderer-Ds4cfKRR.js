import{t as c,e as v,f as A}from"./utils-CtiNnZvt.js";import{g as H}from"./theme-registry-B1gdAM7C.js";import{c as M,d as B}from"./ui-components-Tk9G7nUf.js";import{b as r,F as _}from"./fibbage-constants-C5MI7b8o.js";import"./howler-DacRvduY.js";const g=new Map,E=new Map;let T=null,L=null,h=null,m=null;const C="تلویزیون را نگاه کن",k="رتبه شما";function X(n,t,o,a){switch(n){case"prompt":y(t,a);break;case"write-lie":w(t,o,a);break;case"vote":G(t,o,a);break;case"reveal":N(t,o,a);break;case"game-end":P(t,o,a);break;case"lobby":break;default:console.warn(`Unknown phase for Fibbage controller renderer: ${n}`)}}function y(n,t){p(),S(t),I(n,t,r.PROMPT),t.challengeQuestion.innerHTML=R(n),t.optionsContainer.innerHTML=b(r.WAITING)}function w(n,t,o){var a,i;S(o),I(n,o,r.WRITE_LIE),o.challengeQuestion.innerHTML=R(n);const s=((a=n.currentPrompt)==null?void 0:a.id)||"none";if(!!!n.submissions[t]){p(),o.optionsContainer.innerHTML=b(r.WAITING);return}if(!!((i=n.submissions[t])!=null&&i.submitted)||h===s){p(),o.optionsContainer.innerHTML=b(r.SUBMITTED);return}U(n,t,o)}function G(n,t,o){var a;if(S(o),I(n,o,r.VOTE),o.challengeQuestion.innerHTML=R(n),!!!n.submissions[t]){p(),o.optionsContainer.innerHTML=b(r.WAITING);return}const s=((a=n.currentPrompt)==null?void 0:a.id)||"none";if(!!n.votes[t]||m===s){p(),o.optionsContainer.innerHTML=b(r.VOTED);return}D(n,t,o)}function N(n,t,o){var a;p(),x(o,r.REVEAL);const i=n.currentRoundResult,s=i==null?void 0:i.voteResults.find(l=>l.playerId===t),e=i==null?void 0:i.lieResults.find(l=>l.playerId===t),d=n.options.find(l=>l.id===(s==null?void 0:s.votedOptionId)),u=n.options.find(l=>l.id===(i==null?void 0:i.truthOptionId)),f=((s==null?void 0:s.coinsEarned)||0)+((e==null?void 0:e.coinsEarned)||0);o.myResult.innerHTML=M({cue:C,title:s!=null&&s.correct?r.TRUTH:r.REVEAL,summary:(u==null?void 0:u.text)||((a=n.currentPrompt)==null?void 0:a.truth)||"",tone:s!=null&&s.correct?"success":"default",reward:{value:`+${c(f.toString())}`,label:r.COINS},body:`
      <div class="hb-result-detail-stack">
        <div><span>${r.VOTE}</span><strong>${v((d==null?void 0:d.text)||r.NO_VOTE)}</strong></div>
        ${e?`
          <div>
            <span>${r.YOUR_LIE}</span>
            <strong>${v(e.text)}</strong>
            <small>${c(e.votes.toString())} ${r.LIE_VOTES}</small>
          </div>
        `:""}
      </div>
    `})}function P(n,t,o){p(),x(o,r.GAME_OVER);const a=Object.values(n.scores).sort((e,d)=>d.totalCoins-e.totalCoins),i=n.scores[t],s=Math.max(1,a.findIndex(e=>e.playerId===t)+1);o.myResult.innerHTML=M({cue:C,title:`${k}: ${c(s.toString())}`,summary:r.RESULTS,tone:s===1?"success":"default",reward:i?{value:c(i.totalCoins.toString()),label:r.COINS}:void 0,body:i?`
      <div class="hb-km-stat-grid">
        <div>${r.TRUTH_GUESSES}<strong>${c(i.truthGuesses.toString())}</strong></div>
        <div>${r.LIE_VOTES}<strong>${c(i.lieVotes.toString())}</strong></div>
      </div>
    `:""})}function I(n,t,o){const a=n.currentPromptIndex+1;O(t,`${c(a.toString())}/${c(n.totalPrompts.toString())}`,o),t.timer.textContent=A(n.timeRemaining/1e3),t.challengeInfo.textContent=""}function R(n){var t;return`
    <div class="hb-km-question">${v(((t=n.currentPrompt)==null?void 0:t.text)||"")}</div>
  `}function U(n,t,o){var a;const i=((a=n.currentPrompt)==null?void 0:a.id)||"none",s=`${i}:write`;if(T===s&&o.optionsContainer.querySelector(".fibbage-lie-input"))return;p(),T=s,L=null;const e=E.get(i)||"";o.optionsContainer.innerHTML=`
    <div class="hb-text-entry">
      <textarea
        class="fibbage-lie-input hb-textarea"
        rows="4"
        maxlength="${_.MAX_LIE_LENGTH}"
        dir="auto"
        inputmode="text"
        placeholder="${v(r.PLACEHOLDER)}"
      >${v(e)}</textarea>
      <div class="hb-input-meta">
        <span>${r.CHARACTER_LIMIT} ${c(_.MAX_LIE_LENGTH.toString())}</span>
        <span class="fibbage-char-count">${c(e.length.toString())}</span>
      </div>
      <button
        class="fibbage-submit-button hb-primary-button disabled:opacity-40"
        ${e.trim()?"":"disabled"}
      >
        ${r.SUBMIT}
      </button>
    </div>
  `;const d=o.optionsContainer.querySelector(".fibbage-lie-input"),u=o.optionsContainer.querySelector(".fibbage-submit-button"),f=o.optionsContainer.querySelector(".fibbage-char-count");if(d){const l=()=>{E.set(i,d.value),f&&(f.textContent=c(d.value.length.toString())),u&&(u.disabled=d.value.trim().length===0)};d.addEventListener("input",l),g.set(d,l)}if(u&&d){const l=V=>{if(V.preventDefault(),h===i)return;const $=d.value.trim();$&&(h=i,u.disabled=!0,E.set(i,$),H.sendGameEvent("FB_SUBMIT_LIE",{playerId:t,promptId:i,text:$}),o.optionsContainer.innerHTML=b(r.SUBMITTED))};u.addEventListener("click",l),u.addEventListener("touchstart",l),g.set(u,l)}}function D(n,t,o){var a;const i=((a=n.currentPrompt)==null?void 0:a.id)||"none",s=`${i}:vote:${n.options.map(e=>e.id).join("|")}`;L===s&&o.optionsContainer.querySelector(".fibbage-vote-button")||(p(),L=s,T=null,o.optionsContainer.innerHTML=n.options.map(e=>W(e,t)).join(""),o.optionsContainer.querySelectorAll(".fibbage-vote-button").forEach(e=>{if(e.hasAttribute("disabled"))return;const d=e.getAttribute("data-option-id")||"",u=f=>{f.preventDefault(),!(!d||m===i)&&(m=i,H.sendGameEvent("FB_VOTE",{playerId:t,promptId:i,optionId:d}),o.optionsContainer.innerHTML=b(r.VOTED))};e.addEventListener("click",u),e.addEventListener("touchstart",u),g.set(e,u)}))}function W(n,t){const o=n.authorId===t;return`
    <button
      class="fibbage-vote-button hb-vote-option ${o?"is-disabled":""}"
      data-option-id="${v(n.id)}"
      ${o?"disabled":""}
    >
      <div>${v(n.text)}</div>
      ${o?`<div class="mt-2 text-sm opacity-75">${r.CANNOT_VOTE_OWN_LIE}</div>`:""}
    </button>
  `}function b(n){return B({cue:C,title:n})}function O(n,t,o=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${v(t)}</span>
    </div>
    ${o?`<div class="hb-minigame-instruction">${v(o)}</div>`:""}
  `}function S(n){var t;(t=n.challengeContainer)==null||t.classList.remove("hidden"),n.myResult.classList.add("hidden")}function x(n,t){var o;(o=n.challengeContainer)==null||o.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),O(n,r.GAME_NAME,t),n.timer.textContent="",n.challengeInfo.textContent="",n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function p(){g.forEach((n,t)=>{t.removeEventListener("click",n),t.removeEventListener("touchstart",n),t.removeEventListener("input",n)}),g.clear()}function Y(){p(),E.clear(),T=null,L=null,h=null,m=null}export{Y as cleanupHandlers,X as renderPhase};
