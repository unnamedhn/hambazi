import{j as K,t as d,e as v,f as W}from"./utils-DU4T6s1G.js";import{g as U}from"./theme-registry-JtH1Nn-6.js";import{c as x,d as Y}from"./ui-components-B4r38biB.js";import{b as r,W as y}from"./wavelength-constants-99VIOlZ_.js";const E=new Map,T=new Map,_=new Map;let L=null,$=null,p=null,R=null;const M="تلویزیون را نگاه کن",q="رتبه شما";function rn(n,t,e,i){switch(R=`${n}:${m(t)}`,n){case"intro":P(t,e,i);break;case"psychic-clue":j(t,e,i);break;case"guessing":F(t,e,i);break;case"reveal":Q(t,e,i);break;case"game-end":X(t,e,i);break;case"lobby":break;default:console.warn(`Unknown phase for Wavelength controller renderer: ${n}`)}}function P(n,t,e){h(),G(e),w(e,r.INTRO),e.timer.textContent="",e.challengeInfo.textContent=n.psychicId===t?r.YOU_ARE_PSYCHIC:`${r.PSYCHIC}: ${n.psychicName||""}`,e.challengeQuestion.innerHTML=J(n),e.optionsContainer.innerHTML=C(r.WAITING)}function j(n,t,e){if(G(e),O(n,e,r.PSYCHIC_CLUE),e.challengeQuestion.innerHTML="",n.psychicId!==t){h(),e.optionsContainer.innerHTML=C(r.WAITING_FOR_PSYCHIC);return}A(n,t,e)}function F(n,t,e){var i,u,o;if(G(e),O(n,e,r.GUESSING),e.challengeQuestion.innerHTML=`
    <div class="wavelength-guess-context">
      <div class="wavelength-spectrum-labels">
        <span>${v(((i=n.currentSpectrum)==null?void 0:i.leftLabel)||"")}</span>
        <span>${v(((u=n.currentSpectrum)==null?void 0:u.rightLabel)||"")}</span>
      </div>
      <div class="wavelength-clue-line">
        <span>${r.CLUE}</span>
        <strong>${v(n.clue||r.NO_CLUE)}</strong>
      </div>
    </div>
  `,n.psychicId===t){h(),e.optionsContainer.innerHTML=C(r.WAITING_FOR_GUESSERS);return}if(!!!n.guesses[t]){h(),e.optionsContainer.innerHTML=C(r.WAITING);return}const s=m(n);if((o=n.guesses[t])!=null&&o.submitted||p===`guess:${s}`){h(),e.optionsContainer.innerHTML=C(r.GUESSED);return}N(n,t,e)}function Q(n,t,e){var i,u,o,l,s;h(),k(e,r.REVEAL);const c=n.currentRoundResult,a=c==null?void 0:c.guessResults.find(f=>f.playerId===t),b=(c==null?void 0:c.psychicId)===t,g=b?(c==null?void 0:c.psychicCoinsEarned)||0:(a==null?void 0:a.coinsEarned)||0,S=(u=(i=c==null?void 0:c.targetValue)!=null?i:n.targetValue)!=null?u:0;e.myResult.innerHTML=x({cue:M,title:`${r.TARGET}: ${d(S.toString())}`,summary:b?r.PSYCHIC_BONUS:`${r.DISTANCE}: ${d(((o=a==null?void 0:a.distance)!=null?o:0).toString())}`,tone:g>0?"success":"default",reward:{value:`+${d(g.toString())}`,label:b?r.PSYCHIC_BONUS:r.COINS},body:V(n,(l=a==null?void 0:a.guessValue)!=null?l:null,(s=c==null?void 0:c.averageGuess)!=null?s:null)})}function X(n,t,e){var i;h(),k(e,r.GAME_OVER);const u=Object.values(n.scores).sort((s,c)=>c.totalCoins-s.totalCoins),o=n.scores[t],l=o?K(u.map(s=>s.totalCoins),o.totalCoins):Math.max(1,u.length);e.myResult.innerHTML=x({cue:M,title:`${q}: ${d(l.toString())}`,summary:r.RESULTS,tone:l===1&&((i=o==null?void 0:o.totalCoins)!=null?i:0)>0?"success":"default",reward:o?{value:d(o.totalCoins.toString()),label:r.COINS}:void 0,body:o?`
      <div class="hb-km-stat-grid">
        <div>${r.CLOSE_GUESSES}<strong>${d(o.closeGuesses.toString())}</strong></div>
        <div>${r.PERFECT_GUESSES}<strong>${d(o.perfectGuesses.toString())}</strong></div>
        <div>${r.PSYCHIC_BONUS}<strong>${d(o.psychicBonuses.toString())}</strong></div>
      </div>
    `:""})}function A(n,t,e){const i=m(n),u=`clue:${i}`;if(p===u||n.clue){h(),e.optionsContainer.innerHTML=C(r.SUBMITTED);return}if(L===u&&e.optionsContainer.querySelector(".wavelength-clue-input")){z(n,e);return}h(),L=u,$=null;const o=T.get(i)||"";e.optionsContainer.innerHTML=`
    <div class="hb-text-entry wavelength-clue-entry">
      <div class="wavelength-private-target">
        <span>${r.TARGET}</span>
        <strong class="wavelength-target-value">
          ${n.psychicTargetValue===null?"...":d(n.psychicTargetValue.toString())}
        </strong>
      </div>
      ${V(n,null,null,n.psychicTargetValue)}
      <textarea
        class="wavelength-clue-input hb-textarea"
        rows="2"
        maxlength="${y.MAX_CLUE_LENGTH}"
        dir="auto"
        inputmode="text"
        placeholder="${v(r.PLACEHOLDER)}"
      >${v(o)}</textarea>
      <div class="hb-input-meta">
        <span>${r.CHARACTER_LIMIT} ${d(y.MAX_CLUE_LENGTH.toString())}</span>
        <span class="wavelength-char-count">${d(o.length.toString())}</span>
      </div>
      <button
        class="wavelength-submit-clue hb-primary-button disabled:opacity-40"
        ${o.trim()?"":"disabled"}
      >
        ${r.SUBMIT_CLUE}
      </button>
    </div>
  `;const l=e.optionsContainer.querySelector(".wavelength-clue-input"),s=e.optionsContainer.querySelector(".wavelength-submit-clue"),c=e.optionsContainer.querySelector(".wavelength-char-count");if(l){const a=()=>{T.set(i,l.value),c&&(c.textContent=d(l.value.length.toString())),s&&(s.disabled=l.value.trim().length===0)};l.addEventListener("input",a),E.set(l,a)}if(s&&l){const a=b=>{if(b.preventDefault(),p===u)return;const g=l.value.trim();if(!g)return;p=u,T.set(i,g),s.disabled=!0;const S=U.sendGameEvent("WL_SUBMIT_CLUE",{playerId:t,roundId:i,clue:g});e.optionsContainer.innerHTML=C(r.SUBMITTED),Promise.resolve(S).then(f=>{f!==!1||p!==u||R!==`psychic-clue:${i}`||(p=null,L=null,A(n,t,e))})};s.addEventListener("click",a),s.addEventListener("touchstart",a),E.set(s,a)}}function z(n,t){const e=t.optionsContainer.querySelector(".wavelength-target-value");e&&(e.textContent=n.psychicTargetValue===null?"...":d(n.psychicTargetValue.toString()))}function N(n,t,e){var i,u,o;const l=m(n),s=`guess:${l}`;if($===s&&e.optionsContainer.querySelector(".wavelength-guess-slider"))return;h(),$=s,L=null;const c=(i=_.get(l))!=null?i:50;e.optionsContainer.innerHTML=`
    <div class="hb-text-entry wavelength-guess-entry">
      <div class="wavelength-private-target">
        <span>${r.YOUR_GUESS}</span>
        <strong class="wavelength-guess-value">${d(c.toString())}</strong>
      </div>
      <input
        class="wavelength-guess-slider hb-range-slider"
        type="range"
        min="${y.MIN_VALUE}"
        max="${y.MAX_VALUE}"
        value="${c}"
      />
      <div class="flex justify-between gap-3 text-sm font-bold">
        <span>${v(((u=n.currentSpectrum)==null?void 0:u.leftLabel)||"")}</span>
        <span>${v(((o=n.currentSpectrum)==null?void 0:o.rightLabel)||"")}</span>
      </div>
      <button class="wavelength-submit-guess hb-primary-button">
        ${r.SUBMIT_GUESS}
      </button>
    </div>
  `;const a=e.optionsContainer.querySelector(".wavelength-guess-slider"),b=e.optionsContainer.querySelector(".wavelength-guess-value"),g=e.optionsContainer.querySelector(".wavelength-submit-guess");if(a){const S=()=>{const f=Number(a.value);_.set(l,f),b&&(b.textContent=d(f.toString()))};a.addEventListener("input",S),E.set(a,S)}if(g&&a){const S=f=>{if(f.preventDefault(),p===s)return;const I=Number(a.value);p=s,_.set(l,I),g.disabled=!0;const B=U.sendGameEvent("WL_SUBMIT_GUESS",{playerId:t,roundId:l,value:I});e.optionsContainer.innerHTML=C(r.GUESSED),Promise.resolve(B).then(D=>{D!==!1||p!==s||R!==`guessing:${l}`||(p=null,$=null,N(n,t,e))})};g.addEventListener("click",S),g.addEventListener("touchstart",S),E.set(g,S)}}function O(n,t,e){const i=n.currentRoundIndex+1;w(t,`${r.ROUND} ${d(i.toString())}/${d(n.totalRounds.toString())}`,e),t.timer.textContent=W(n.timeRemaining/1e3),t.challengeInfo.textContent=""}function J(n){var t,e;return`
    <div class="text-center">
      <div class="grid grid-cols-2 gap-3 text-lg font-bold">
        <div class="hb-spectrum-end">${v(((t=n.currentSpectrum)==null?void 0:t.leftLabel)||"")}</div>
        <div class="hb-spectrum-end">${v(((e=n.currentSpectrum)==null?void 0:e.rightLabel)||"")}</div>
      </div>
    </div>
  `}function V(n,t,e,i=n.targetValue){var u,o;return`
    <div class="hb-mini-spectrum">
      <div class="relative h-5 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">
        ${typeof i=="number"?H(i,"bg-white",r.TARGET):""}
        ${typeof t=="number"?H(t,"bg-yellow-300",r.YOUR_GUESS):""}
        ${typeof e=="number"?H(e,"bg-green-300",r.AVERAGE):""}
      </div>
      <div class="mt-3 flex justify-between text-xs font-bold">
        <span>${v(((u=n.currentSpectrum)==null?void 0:u.leftLabel)||"")}</span>
        <span>${v(((o=n.currentSpectrum)==null?void 0:o.rightLabel)||"")}</span>
      </div>
    </div>
  `}function H(n,t,e){const i=Math.max(0,Math.min(100,n));return`
    <div class="absolute top-1/2 h-8 w-1 -translate-y-1/2 ${t}" style="left: ${i}%" title="${v(e)}"></div>
  `}function C(n){return Y({cue:M,title:n})}function w(n,t,e=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${v(t)}</span>
    </div>
    ${e?`<div class="hb-minigame-instruction">${v(e)}</div>`:""}
  `}function m(n){var t;return`${n.currentRoundIndex}:${((t=n.currentSpectrum)==null?void 0:t.id)||"none"}`}function G(n){var t;(t=n.challengeContainer)==null||t.classList.remove("hidden"),n.myResult.classList.add("hidden")}function k(n,t){var e;(e=n.challengeContainer)==null||e.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),w(n,r.GAME_NAME,t),n.timer.textContent="",n.challengeInfo.textContent="",n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function h(){E.forEach((n,t)=>{t.removeEventListener("click",n),t.removeEventListener("touchstart",n),t.removeEventListener("input",n)}),E.clear()}function on(){h(),T.clear(),_.clear(),L=null,$=null,p=null,R=null}export{on as cleanupHandlers,rn as renderPhase};
