import{t as c,e as p,f as N}from"./utils-CtiNnZvt.js";import{g as x}from"./theme-registry-C69X5mSl.js";import{c as V,d as y}from"./ui-components-Tk9G7nUf.js";import{b as r,F as O}from"./fibbage-constants-Bp46MwWU.js";import"./howler-DacRvduY.js";const h=new Map,m=new Map;let T=null,L=null,g=null,E=null,$=null,C=null;const S="تلویزیون را نگاه کن",U="رتبه شما";function Z(n,t,o,a){var i;switch($=n,C=((i=t.currentPrompt)==null?void 0:i.id)||null,n){case"prompt":D(t,a);break;case"write-lie":W(t,o,a);break;case"vote":q(t,o,a);break;case"reveal":F(t,o,a);break;case"game-end":K(t,o,a);break;case"lobby":break;default:console.warn(`Unknown phase for Fibbage controller renderer: ${n}`)}}function D(n,t){v(),M(t),_(n,t,r.PROMPT),t.challengeQuestion.innerHTML=H(n),t.optionsContainer.innerHTML=b(r.WAITING)}function W(n,t,o){var a,i;M(o),_(n,o,r.WRITE_LIE),o.challengeQuestion.innerHTML=H(n);const s=((a=n.currentPrompt)==null?void 0:a.id)||"none";if(!!!n.submissions[t]){v(),o.optionsContainer.innerHTML=b(r.WAITING);return}if(!!((i=n.submissions[t])!=null&&i.submitted)||g===s){v(),o.optionsContainer.innerHTML=b(r.SUBMITTED);return}A(n,t,o)}function q(n,t,o){var a;if(M(o),_(n,o,r.VOTE),o.challengeQuestion.innerHTML=H(n),!!!n.submissions[t]){v(),o.optionsContainer.innerHTML=b(r.WAITING);return}const s=((a=n.currentPrompt)==null?void 0:a.id)||"none";if(!!n.votes[t]||E===s){v(),o.optionsContainer.innerHTML=b(r.VOTED);return}B(n,t,o)}function F(n,t,o){var a;v(),k(o,r.REVEAL);const i=n.currentRoundResult,s=i==null?void 0:i.voteResults.find(u=>u.playerId===t),e=i==null?void 0:i.lieResults.find(u=>u.playerId===t),l=n.options.find(u=>u.id===(s==null?void 0:s.votedOptionId)),d=n.options.find(u=>u.id===(i==null?void 0:i.truthOptionId)),f=((s==null?void 0:s.coinsEarned)||0)+((e==null?void 0:e.coinsEarned)||0);o.myResult.innerHTML=V({cue:S,title:s!=null&&s.correct?r.TRUTH:r.REVEAL,summary:(d==null?void 0:d.text)||((a=n.currentPrompt)==null?void 0:a.truth)||"",tone:s!=null&&s.correct?"success":"default",reward:{value:`+${c(f.toString())}`,label:r.COINS},body:`
      <div class="hb-result-detail-stack">
        <div><span>${r.VOTE}</span><strong>${p((l==null?void 0:l.text)||r.NO_VOTE)}</strong></div>
        ${e?`
          <div>
            <span>${r.YOUR_LIE}</span>
            <strong>${p(e.text)}</strong>
            <small>${c(e.votes.toString())} ${r.LIE_VOTES}</small>
          </div>
        `:""}
      </div>
    `})}function K(n,t,o){v(),k(o,r.GAME_OVER);const a=Object.values(n.scores).sort((e,l)=>l.totalCoins-e.totalCoins),i=n.scores[t],s=Math.max(1,a.findIndex(e=>e.playerId===t)+1);o.myResult.innerHTML=V({cue:S,title:`${U}: ${c(s.toString())}`,summary:r.RESULTS,tone:s===1?"success":"default",reward:i?{value:c(i.totalCoins.toString()),label:r.COINS}:void 0,body:i?`
      <div class="hb-km-stat-grid">
        <div>${r.TRUTH_GUESSES}<strong>${c(i.truthGuesses.toString())}</strong></div>
        <div>${r.LIE_VOTES}<strong>${c(i.lieVotes.toString())}</strong></div>
      </div>
    `:""})}function _(n,t,o){const a=n.currentPromptIndex+1;P(t,`${c(a.toString())}/${c(n.totalPrompts.toString())}`,o),t.timer.textContent=N(n.timeRemaining/1e3),t.challengeInfo.textContent=""}function H(n){var t;return`
    <div class="hb-km-question">${p(((t=n.currentPrompt)==null?void 0:t.text)||"")}</div>
  `}function A(n,t,o){var a;const i=((a=n.currentPrompt)==null?void 0:a.id)||"none",s=`${i}:write`;if(T===s&&o.optionsContainer.querySelector(".fibbage-lie-input"))return;v(),T=s,L=null;const e=m.get(i)||"";o.optionsContainer.innerHTML=`
    <div class="hb-text-entry">
      <textarea
        class="fibbage-lie-input hb-textarea"
        rows="4"
        maxlength="${O.MAX_LIE_LENGTH}"
        dir="auto"
        inputmode="text"
        placeholder="${p(r.PLACEHOLDER)}"
      >${p(e)}</textarea>
      <div class="hb-input-meta">
        <span>${r.CHARACTER_LIMIT} ${c(O.MAX_LIE_LENGTH.toString())}</span>
        <span class="fibbage-char-count">${c(e.length.toString())}</span>
      </div>
      <button
        class="fibbage-submit-button hb-primary-button disabled:opacity-40"
        ${e.trim()?"":"disabled"}
      >
        ${r.SUBMIT}
      </button>
    </div>
  `;const l=o.optionsContainer.querySelector(".fibbage-lie-input"),d=o.optionsContainer.querySelector(".fibbage-submit-button"),f=o.optionsContainer.querySelector(".fibbage-char-count");if(l){const u=()=>{m.set(i,l.value),f&&(f.textContent=c(l.value.length.toString())),d&&(d.disabled=l.value.trim().length===0)};l.addEventListener("input",u),h.set(l,u)}if(d&&l){const u=R=>{if(R.preventDefault(),g===i)return;const I=l.value.trim();if(!I)return;g=i,d.disabled=!0,m.set(i,I);const w=x.sendGameEvent("FB_SUBMIT_LIE",{playerId:t,promptId:i,text:I});o.optionsContainer.innerHTML=b(r.SUBMITTED),Promise.resolve(w).then(G=>{G!==!1||g!==i||$!=="write-lie"||C!==i||(g=null,T=null,A(n,t,o))})};d.addEventListener("click",u),d.addEventListener("touchstart",u),h.set(d,u)}}function B(n,t,o){var a;const i=((a=n.currentPrompt)==null?void 0:a.id)||"none",s=`${i}:vote:${n.options.map(e=>e.id).join("|")}`;L===s&&o.optionsContainer.querySelector(".fibbage-vote-button")||(v(),L=s,T=null,o.optionsContainer.innerHTML=n.options.map(e=>Q(e,t)).join(""),o.optionsContainer.querySelectorAll(".fibbage-vote-button").forEach(e=>{if(e.hasAttribute("disabled"))return;const l=e.getAttribute("data-option-id")||"",d=f=>{if(f.preventDefault(),!l||E===i)return;E=i;const u=x.sendGameEvent("FB_VOTE",{playerId:t,promptId:i,optionId:l});o.optionsContainer.innerHTML=b(r.VOTED),Promise.resolve(u).then(R=>{R!==!1||E!==i||$!=="vote"||C!==i||(E=null,L=null,B(n,t,o))})};e.addEventListener("click",d),e.addEventListener("touchstart",d),h.set(e,d)}))}function Q(n,t){const o=n.authorId===t;return`
    <button
      class="fibbage-vote-button hb-vote-option ${o?"is-disabled":""}"
      data-option-id="${p(n.id)}"
      ${o?"disabled":""}
    >
      <div>${p(n.text)}</div>
      ${o?`<div class="mt-2 text-sm opacity-75">${r.CANNOT_VOTE_OWN_LIE}</div>`:""}
    </button>
  `}function b(n){return y({cue:S,title:n})}function P(n,t,o=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${p(t)}</span>
    </div>
    ${o?`<div class="hb-minigame-instruction">${p(o)}</div>`:""}
  `}function M(n){var t;(t=n.challengeContainer)==null||t.classList.remove("hidden"),n.myResult.classList.add("hidden")}function k(n,t){var o;(o=n.challengeContainer)==null||o.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),P(n,r.GAME_NAME,t),n.timer.textContent="",n.challengeInfo.textContent="",n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function v(){h.forEach((n,t)=>{t.removeEventListener("click",n),t.removeEventListener("touchstart",n),t.removeEventListener("input",n)}),h.clear()}function nn(){v(),m.clear(),T=null,L=null,g=null,E=null,$=null,C=null}export{nn as cleanupHandlers,Z as renderPhase};
