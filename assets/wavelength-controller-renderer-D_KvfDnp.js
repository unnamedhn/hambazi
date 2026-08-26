import{t as c,e as v,f as K}from"./utils-CtiNnZvt.js";import{g as U}from"./theme-registry-C69X5mSl.js";import{c as x,d as W}from"./ui-components-Tk9G7nUf.js";import{b as r,W as y}from"./wavelength-constants-BmHhiKPy.js";import"./howler-DacRvduY.js";const E=new Map,T=new Map,_=new Map;let L=null,$=null,p=null,R=null;const M="تلویزیون را نگاه کن",Y="رتبه شما";function rn(n,t,e,i){switch(R=`${n}:${m(t)}`,n){case"intro":q(t,e,i);break;case"psychic-clue":P(t,e,i);break;case"guessing":F(t,e,i);break;case"reveal":Q(t,e,i);break;case"game-end":X(t,e,i);break;case"lobby":break;default:console.warn(`Unknown phase for Wavelength controller renderer: ${n}`)}}function q(n,t,e){h(),I(e),w(e,r.INTRO),e.timer.textContent="",e.challengeInfo.textContent=n.psychicId===t?r.YOU_ARE_PSYCHIC:`${r.PSYCHIC}: ${n.psychicName||""}`,e.challengeQuestion.innerHTML=z(n),e.optionsContainer.innerHTML=C(r.WAITING)}function P(n,t,e){if(I(e),O(n,e,r.PSYCHIC_CLUE),e.challengeQuestion.innerHTML="",n.psychicId!==t){h(),e.optionsContainer.innerHTML=C(r.WAITING_FOR_PSYCHIC);return}A(n,t,e)}function F(n,t,e){var i,o,a;if(I(e),O(n,e,r.GUESSING),e.challengeQuestion.innerHTML=`
    <div class="wavelength-guess-context">
      <div class="wavelength-spectrum-labels">
        <span>${v(((i=n.currentSpectrum)==null?void 0:i.leftLabel)||"")}</span>
        <span>${v(((o=n.currentSpectrum)==null?void 0:o.rightLabel)||"")}</span>
      </div>
      <div class="wavelength-clue-line">
        <span>${r.CLUE}</span>
        <strong>${v(n.clue||r.NO_CLUE)}</strong>
      </div>
    </div>
  `,n.psychicId===t){h(),e.optionsContainer.innerHTML=C(r.WAITING_FOR_GUESSERS);return}if(!!!n.guesses[t]){h(),e.optionsContainer.innerHTML=C(r.WAITING);return}const l=m(n);if((a=n.guesses[t])!=null&&a.submitted||p===`guess:${l}`){h(),e.optionsContainer.innerHTML=C(r.GUESSED);return}N(n,t,e)}function Q(n,t,e){var i,o,a,s,l;h(),k(e,r.REVEAL);const d=n.currentRoundResult,u=d==null?void 0:d.guessResults.find(b=>b.playerId===t),f=(d==null?void 0:d.psychicId)===t,g=f?(d==null?void 0:d.psychicCoinsEarned)||0:(u==null?void 0:u.coinsEarned)||0,S=(o=(i=d==null?void 0:d.targetValue)!=null?i:n.targetValue)!=null?o:0;e.myResult.innerHTML=x({cue:M,title:`${r.TARGET}: ${c(S.toString())}`,summary:f?r.PSYCHIC_BONUS:`${r.DISTANCE}: ${c(((a=u==null?void 0:u.distance)!=null?a:0).toString())}`,tone:g>0?"success":"default",reward:{value:`+${c(g.toString())}`,label:f?r.PSYCHIC_BONUS:r.COINS},body:V(n,(s=u==null?void 0:u.guessValue)!=null?s:null,(l=d==null?void 0:d.averageGuess)!=null?l:null)})}function X(n,t,e){h(),k(e,r.GAME_OVER);const i=Object.values(n.scores).sort((s,l)=>l.totalCoins-s.totalCoins),o=n.scores[t],a=Math.max(1,i.findIndex(s=>s.playerId===t)+1);e.myResult.innerHTML=x({cue:M,title:`${Y}: ${c(a.toString())}`,summary:r.RESULTS,tone:a===1?"success":"default",reward:o?{value:c(o.totalCoins.toString()),label:r.COINS}:void 0,body:o?`
      <div class="hb-km-stat-grid">
        <div>${r.CLOSE_GUESSES}<strong>${c(o.closeGuesses.toString())}</strong></div>
        <div>${r.PERFECT_GUESSES}<strong>${c(o.perfectGuesses.toString())}</strong></div>
        <div>${r.PSYCHIC_BONUS}<strong>${c(o.psychicBonuses.toString())}</strong></div>
      </div>
    `:""})}function A(n,t,e){const i=m(n),o=`clue:${i}`;if(p===o||n.clue){h(),e.optionsContainer.innerHTML=C(r.SUBMITTED);return}if(L===o&&e.optionsContainer.querySelector(".wavelength-clue-input")){j(n,e);return}h(),L=o,$=null;const a=T.get(i)||"";e.optionsContainer.innerHTML=`
    <div class="hb-text-entry wavelength-clue-entry">
      <div class="wavelength-private-target">
        <span>${r.TARGET}</span>
        <strong class="wavelength-target-value">
          ${n.psychicTargetValue===null?"...":c(n.psychicTargetValue.toString())}
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
      >${v(a)}</textarea>
      <div class="hb-input-meta">
        <span>${r.CHARACTER_LIMIT} ${c(y.MAX_CLUE_LENGTH.toString())}</span>
        <span class="wavelength-char-count">${c(a.length.toString())}</span>
      </div>
      <button
        class="wavelength-submit-clue hb-primary-button disabled:opacity-40"
        ${a.trim()?"":"disabled"}
      >
        ${r.SUBMIT_CLUE}
      </button>
    </div>
  `;const s=e.optionsContainer.querySelector(".wavelength-clue-input"),l=e.optionsContainer.querySelector(".wavelength-submit-clue"),d=e.optionsContainer.querySelector(".wavelength-char-count");if(s){const u=()=>{T.set(i,s.value),d&&(d.textContent=c(s.value.length.toString())),l&&(l.disabled=s.value.trim().length===0)};s.addEventListener("input",u),E.set(s,u)}if(l&&s){const u=f=>{if(f.preventDefault(),p===o)return;const g=s.value.trim();if(!g)return;p=o,T.set(i,g),l.disabled=!0;const S=U.sendGameEvent("WL_SUBMIT_CLUE",{playerId:t,roundId:i,clue:g});e.optionsContainer.innerHTML=C(r.SUBMITTED),Promise.resolve(S).then(b=>{b!==!1||p!==o||R!==`psychic-clue:${i}`||(p=null,L=null,A(n,t,e))})};l.addEventListener("click",u),l.addEventListener("touchstart",u),E.set(l,u)}}function j(n,t){const e=t.optionsContainer.querySelector(".wavelength-target-value");e&&(e.textContent=n.psychicTargetValue===null?"...":c(n.psychicTargetValue.toString()))}function N(n,t,e){var i,o,a;const s=m(n),l=`guess:${s}`;if($===l&&e.optionsContainer.querySelector(".wavelength-guess-slider"))return;h(),$=l,L=null;const d=(i=_.get(s))!=null?i:50;e.optionsContainer.innerHTML=`
    <div class="hb-text-entry wavelength-guess-entry">
      <div class="wavelength-private-target">
        <span>${r.YOUR_GUESS}</span>
        <strong class="wavelength-guess-value">${c(d.toString())}</strong>
      </div>
      <input
        class="wavelength-guess-slider hb-range-slider"
        type="range"
        min="${y.MIN_VALUE}"
        max="${y.MAX_VALUE}"
        value="${d}"
      />
      <div class="flex justify-between gap-3 text-sm font-bold">
        <span>${v(((o=n.currentSpectrum)==null?void 0:o.leftLabel)||"")}</span>
        <span>${v(((a=n.currentSpectrum)==null?void 0:a.rightLabel)||"")}</span>
      </div>
      <button class="wavelength-submit-guess hb-primary-button">
        ${r.SUBMIT_GUESS}
      </button>
    </div>
  `;const u=e.optionsContainer.querySelector(".wavelength-guess-slider"),f=e.optionsContainer.querySelector(".wavelength-guess-value"),g=e.optionsContainer.querySelector(".wavelength-submit-guess");if(u){const S=()=>{const b=Number(u.value);_.set(s,b),f&&(f.textContent=c(b.toString()))};u.addEventListener("input",S),E.set(u,S)}if(g&&u){const S=b=>{if(b.preventDefault(),p===l)return;const G=Number(u.value);p=l,_.set(s,G),g.disabled=!0;const B=U.sendGameEvent("WL_SUBMIT_GUESS",{playerId:t,roundId:s,value:G});e.optionsContainer.innerHTML=C(r.GUESSED),Promise.resolve(B).then(D=>{D!==!1||p!==l||R!==`guessing:${s}`||(p=null,$=null,N(n,t,e))})};g.addEventListener("click",S),g.addEventListener("touchstart",S),E.set(g,S)}}function O(n,t,e){const i=n.currentRoundIndex+1;w(t,`${r.ROUND} ${c(i.toString())}/${c(n.totalRounds.toString())}`,e),t.timer.textContent=K(n.timeRemaining/1e3),t.challengeInfo.textContent=""}function z(n){var t,e;return`
    <div class="text-center">
      <div class="grid grid-cols-2 gap-3 text-lg font-bold">
        <div class="hb-spectrum-end">${v(((t=n.currentSpectrum)==null?void 0:t.leftLabel)||"")}</div>
        <div class="hb-spectrum-end">${v(((e=n.currentSpectrum)==null?void 0:e.rightLabel)||"")}</div>
      </div>
    </div>
  `}function V(n,t,e,i=n.targetValue){var o,a;return`
    <div class="hb-mini-spectrum">
      <div class="relative h-5 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">
        ${typeof i=="number"?H(i,"bg-white",r.TARGET):""}
        ${typeof t=="number"?H(t,"bg-yellow-300",r.YOUR_GUESS):""}
        ${typeof e=="number"?H(e,"bg-green-300",r.AVERAGE):""}
      </div>
      <div class="mt-3 flex justify-between text-xs font-bold">
        <span>${v(((o=n.currentSpectrum)==null?void 0:o.leftLabel)||"")}</span>
        <span>${v(((a=n.currentSpectrum)==null?void 0:a.rightLabel)||"")}</span>
      </div>
    </div>
  `}function H(n,t,e){const i=Math.max(0,Math.min(100,n));return`
    <div class="absolute top-1/2 h-8 w-1 -translate-y-1/2 ${t}" style="left: ${i}%" title="${v(e)}"></div>
  `}function C(n){return W({cue:M,title:n})}function w(n,t,e=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${v(t)}</span>
    </div>
    ${e?`<div class="hb-minigame-instruction">${v(e)}</div>`:""}
  `}function m(n){var t;return`${n.currentRoundIndex}:${((t=n.currentSpectrum)==null?void 0:t.id)||"none"}`}function I(n){var t;(t=n.challengeContainer)==null||t.classList.remove("hidden"),n.myResult.classList.add("hidden")}function k(n,t){var e;(e=n.challengeContainer)==null||e.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),w(n,r.GAME_NAME,t),n.timer.textContent="",n.challengeInfo.textContent="",n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function h(){E.forEach((n,t)=>{t.removeEventListener("click",n),t.removeEventListener("touchstart",n),t.removeEventListener("input",n)}),E.clear()}function on(){h(),T.clear(),_.clear(),L=null,$=null,p=null,R=null}export{on as cleanupHandlers,rn as renderPhase};
