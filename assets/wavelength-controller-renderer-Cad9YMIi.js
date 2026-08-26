import{t as c,e as v,f as O}from"./utils-CtiNnZvt.js";import{g as G}from"./theme-registry-0EpoZLH3.js";import{c as U,d as V}from"./ui-components-Tk9G7nUf.js";import{b as r,W as T}from"./wavelength-constants-DQWs10Qk.js";import"./howler-DacRvduY.js";const E=new Map,L=new Map,$=new Map;let _=null,y=null,f=null;const m="تلویزیون را نگاه کن",k="رتبه شما";function nn(n,t,e,i){switch(n){case"intro":B(t,e,i);break;case"psychic-clue":D(t,e,i);break;case"guessing":W(t,e,i);break;case"reveal":K(t,e,i);break;case"game-end":Y(t,e,i);break;case"lobby":break;default:console.warn(`Unknown phase for Wavelength controller renderer: ${n}`)}}function B(n,t,e){p(),w(e),H(e,r.INTRO),e.timer.textContent="",e.challengeInfo.textContent=n.psychicId===t?r.YOU_ARE_PSYCHIC:`${r.PSYCHIC}: ${n.psychicName||""}`,e.challengeQuestion.innerHTML=Q(n),e.optionsContainer.innerHTML=b(r.WAITING)}function D(n,t,e){if(w(e),x(n,e,r.PSYCHIC_CLUE),e.challengeQuestion.innerHTML="",n.psychicId!==t){p(),e.optionsContainer.innerHTML=b(r.WAITING_FOR_PSYCHIC);return}q(n,t,e)}function W(n,t,e){var i,o,l;if(w(e),x(n,e,r.GUESSING),e.challengeQuestion.innerHTML=`
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
  `,n.psychicId===t){p(),e.optionsContainer.innerHTML=b(r.WAITING_FOR_GUESSERS);return}if(!!!n.guesses[t]){p(),e.optionsContainer.innerHTML=b(r.WAITING);return}const u=M(n);if((l=n.guesses[t])!=null&&l.submitted||f===`guess:${u}`){p(),e.optionsContainer.innerHTML=b(r.GUESSED);return}F(n,t,e)}function K(n,t,e){var i,o,l,s,u;p(),N(e,r.REVEAL);const d=n.currentRoundResult,a=d==null?void 0:d.guessResults.find(C=>C.playerId===t),h=(d==null?void 0:d.psychicId)===t,g=h?(d==null?void 0:d.psychicCoinsEarned)||0:(a==null?void 0:a.coinsEarned)||0,S=(o=(i=d==null?void 0:d.targetValue)!=null?i:n.targetValue)!=null?o:0;e.myResult.innerHTML=U({cue:m,title:`${r.TARGET}: ${c(S.toString())}`,summary:h?r.PSYCHIC_BONUS:`${r.DISTANCE}: ${c(((l=a==null?void 0:a.distance)!=null?l:0).toString())}`,tone:g>0?"success":"default",reward:{value:`+${c(g.toString())}`,label:h?r.PSYCHIC_BONUS:r.COINS},body:A(n,(s=a==null?void 0:a.guessValue)!=null?s:null,(u=d==null?void 0:d.averageGuess)!=null?u:null)})}function Y(n,t,e){p(),N(e,r.GAME_OVER);const i=Object.values(n.scores).sort((s,u)=>u.totalCoins-s.totalCoins),o=n.scores[t],l=Math.max(1,i.findIndex(s=>s.playerId===t)+1);e.myResult.innerHTML=U({cue:m,title:`${k}: ${c(l.toString())}`,summary:r.RESULTS,tone:l===1?"success":"default",reward:o?{value:c(o.totalCoins.toString()),label:r.COINS}:void 0,body:o?`
      <div class="hb-km-stat-grid">
        <div>${r.CLOSE_GUESSES}<strong>${c(o.closeGuesses.toString())}</strong></div>
        <div>${r.PERFECT_GUESSES}<strong>${c(o.perfectGuesses.toString())}</strong></div>
        <div>${r.PSYCHIC_BONUS}<strong>${c(o.psychicBonuses.toString())}</strong></div>
      </div>
    `:""})}function q(n,t,e){const i=M(n),o=`clue:${i}`;if(f===o||n.clue){p(),e.optionsContainer.innerHTML=b(r.SUBMITTED);return}if(_===o&&e.optionsContainer.querySelector(".wavelength-clue-input")){P(n,e);return}p(),_=o,y=null;const l=L.get(i)||"";e.optionsContainer.innerHTML=`
    <div class="hb-text-entry wavelength-clue-entry">
      <div class="wavelength-private-target">
        <span>${r.TARGET}</span>
        <strong class="wavelength-target-value">
          ${n.psychicTargetValue===null?"...":c(n.psychicTargetValue.toString())}
        </strong>
      </div>
      ${A(n,null,null,n.psychicTargetValue)}
      <textarea
        class="wavelength-clue-input hb-textarea"
        rows="2"
        maxlength="${T.MAX_CLUE_LENGTH}"
        dir="auto"
        inputmode="text"
        placeholder="${v(r.PLACEHOLDER)}"
      >${v(l)}</textarea>
      <div class="hb-input-meta">
        <span>${r.CHARACTER_LIMIT} ${c(T.MAX_CLUE_LENGTH.toString())}</span>
        <span class="wavelength-char-count">${c(l.length.toString())}</span>
      </div>
      <button
        class="wavelength-submit-clue hb-primary-button disabled:opacity-40"
        ${l.trim()?"":"disabled"}
      >
        ${r.SUBMIT_CLUE}
      </button>
    </div>
  `;const s=e.optionsContainer.querySelector(".wavelength-clue-input"),u=e.optionsContainer.querySelector(".wavelength-submit-clue"),d=e.optionsContainer.querySelector(".wavelength-char-count");if(s){const a=()=>{L.set(i,s.value),d&&(d.textContent=c(s.value.length.toString())),u&&(u.disabled=s.value.trim().length===0)};s.addEventListener("input",a),E.set(s,a)}if(u&&s){const a=h=>{if(h.preventDefault(),f===o)return;const g=s.value.trim();g&&(f=o,L.set(i,g),u.disabled=!0,G.sendGameEvent("WL_SUBMIT_CLUE",{playerId:t,roundId:i,clue:g}),e.optionsContainer.innerHTML=b(r.SUBMITTED))};u.addEventListener("click",a),u.addEventListener("touchstart",a),E.set(u,a)}}function P(n,t){const e=t.optionsContainer.querySelector(".wavelength-target-value");e&&(e.textContent=n.psychicTargetValue===null?"...":c(n.psychicTargetValue.toString()))}function F(n,t,e){var i,o,l;const s=M(n),u=`guess:${s}`;if(y===u&&e.optionsContainer.querySelector(".wavelength-guess-slider"))return;p(),y=u,_=null;const d=(i=$.get(s))!=null?i:50;e.optionsContainer.innerHTML=`
    <div class="hb-text-entry wavelength-guess-entry">
      <div class="wavelength-private-target">
        <span>${r.YOUR_GUESS}</span>
        <strong class="wavelength-guess-value">${c(d.toString())}</strong>
      </div>
      <input
        class="wavelength-guess-slider hb-range-slider"
        type="range"
        min="${T.MIN_VALUE}"
        max="${T.MAX_VALUE}"
        value="${d}"
      />
      <div class="flex justify-between gap-3 text-sm font-bold">
        <span>${v(((o=n.currentSpectrum)==null?void 0:o.leftLabel)||"")}</span>
        <span>${v(((l=n.currentSpectrum)==null?void 0:l.rightLabel)||"")}</span>
      </div>
      <button class="wavelength-submit-guess hb-primary-button">
        ${r.SUBMIT_GUESS}
      </button>
    </div>
  `;const a=e.optionsContainer.querySelector(".wavelength-guess-slider"),h=e.optionsContainer.querySelector(".wavelength-guess-value"),g=e.optionsContainer.querySelector(".wavelength-submit-guess");if(a){const S=()=>{const C=Number(a.value);$.set(s,C),h&&(h.textContent=c(C.toString()))};a.addEventListener("input",S),E.set(a,S)}if(g&&a){const S=C=>{if(C.preventDefault(),f===u)return;const I=Number(a.value);f=u,$.set(s,I),g.disabled=!0,G.sendGameEvent("WL_SUBMIT_GUESS",{playerId:t,roundId:s,value:I}),e.optionsContainer.innerHTML=b(r.GUESSED)};g.addEventListener("click",S),g.addEventListener("touchstart",S),E.set(g,S)}}function x(n,t,e){const i=n.currentRoundIndex+1;H(t,`${r.ROUND} ${c(i.toString())}/${c(n.totalRounds.toString())}`,e),t.timer.textContent=O(n.timeRemaining/1e3),t.challengeInfo.textContent=""}function Q(n){var t,e;return`
    <div class="text-center">
      <div class="grid grid-cols-2 gap-3 text-lg font-bold">
        <div class="hb-spectrum-end">${v(((t=n.currentSpectrum)==null?void 0:t.leftLabel)||"")}</div>
        <div class="hb-spectrum-end">${v(((e=n.currentSpectrum)==null?void 0:e.rightLabel)||"")}</div>
      </div>
    </div>
  `}function A(n,t,e,i=n.targetValue){var o,l;return`
    <div class="hb-mini-spectrum">
      <div class="relative h-5 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">
        ${typeof i=="number"?R(i,"bg-white",r.TARGET):""}
        ${typeof t=="number"?R(t,"bg-yellow-300",r.YOUR_GUESS):""}
        ${typeof e=="number"?R(e,"bg-green-300",r.AVERAGE):""}
      </div>
      <div class="mt-3 flex justify-between text-xs font-bold">
        <span>${v(((o=n.currentSpectrum)==null?void 0:o.leftLabel)||"")}</span>
        <span>${v(((l=n.currentSpectrum)==null?void 0:l.rightLabel)||"")}</span>
      </div>
    </div>
  `}function R(n,t,e){const i=Math.max(0,Math.min(100,n));return`
    <div class="absolute top-1/2 h-8 w-1 -translate-y-1/2 ${t}" style="left: ${i}%" title="${v(e)}"></div>
  `}function b(n){return V({cue:m,title:n})}function H(n,t,e=""){n.phaseText.innerHTML=`
    <div class="hb-minigame-cue">
      <span class="hb-minigame-title">${v(t)}</span>
    </div>
    ${e?`<div class="hb-minigame-instruction">${v(e)}</div>`:""}
  `}function M(n){var t;return`${n.currentRoundIndex}:${((t=n.currentSpectrum)==null?void 0:t.id)||"none"}`}function w(n){var t;(t=n.challengeContainer)==null||t.classList.remove("hidden"),n.myResult.classList.add("hidden")}function N(n,t){var e;(e=n.challengeContainer)==null||e.classList.add("hidden"),n.myResult.classList.add("hb-result-surface"),n.myResult.classList.remove("hidden"),H(n,r.GAME_NAME,t),n.timer.textContent="",n.challengeInfo.textContent="",n.challengeQuestion.innerHTML="",n.optionsContainer.innerHTML=""}function p(){E.forEach((n,t)=>{t.removeEventListener("click",n),t.removeEventListener("touchstart",n),t.removeEventListener("input",n)}),E.clear()}function en(){p(),L.clear(),$.clear(),_=null,y=null,f=null}export{en as cleanupHandlers,nn as renderPhase};
