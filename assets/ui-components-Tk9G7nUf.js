import{e as t,t as h,a as d,c}from"./utils-CtiNnZvt.js";function b(a,r=""){const e=i(a.avatarId,a.id||a.name),s=e%4,l=Math.floor(e/4),n=`${s*33.3333}% ${l*100}%`;return`
    <div
      class="board-host-avatar has-avatar-art ${r}"
      data-avatar-id="avatar-${e}"
      style="background-color: ${t(a.color)}; color: ${d(a.color)}; --avatar-position: ${n}"
    >
      <span class="avatar-initials">${t(c(a.name))}</span>
    </div>
  `}function i(a,r){var e;const s=(e=a==null?void 0:a.match(/^avatar-([0-7])$/))==null?void 0:e[1];return s!==void 0?Number(s):$(r)}function $(a){let r=0;for(let e=0;e<a.length;e+=1)r=r*31+a.charCodeAt(e)>>>0;return r%8}function o(a){return`
    <div class="hb-controller-card hb-controller-card-${a.tone||"default"}">
      ${a.cue?`<div class="hb-attention-cue">${t(a.cue)}</div>`:""}
      ${a.visual?`<div class="hb-card-visual is-${a.visual}" aria-hidden="true"><span></span></div>`:""}
      <div class="hb-controller-card-title">${t(a.title)}</div>
      ${a.subtitle?`<div class="hb-controller-card-subtitle">${t(a.subtitle)}</div>`:""}
      ${a.body?`<div class="hb-controller-card-body">${a.body}</div>`:""}
    </div>
  `}function f(a){return o({title:a.title,subtitle:a.subtitle,cue:a.cue,visual:a.visual||"wait",tone:"default",body:a.progress?`<div class="hb-controller-progress">${t(a.progress)}</div>`:void 0})}function m(a){const r=a.tone||"default";return o({cue:a.cue,title:a.title,subtitle:a.summary,tone:r,visual:a.visual||(r==="success"?"success":r==="warning"?"warning":a.reward?"coin":"tv"),body:`
      ${a.reward?`
        <div class="hb-personal-reward ${r==="success"?"is-positive":r==="warning"?"is-negative":""}">
          <strong>${t(a.reward.value)}</strong>
          <span>${t(a.reward.label)}</span>
        </div>
      `:""}
      ${a.total?`
        <div class="hb-personal-total">
          <span>${t(a.total.label)}</span>
          <strong>${t(a.total.value)}</strong>
        </div>
      `:""}
      ${a.body||""}
    `})}function w(a){return`
    <div class="board-host-modal board-host-modal-wide hb-host-results-shell">
      <div class="hb-host-results-header">
        ${a.eyebrow?`<div class="hb-host-results-kicker">${t(a.eyebrow)}</div>`:""}
        <h2>${t(a.title)}</h2>
        ${a.subtitle?`<p>${t(a.subtitle)}</p>`:""}
        ${a.highlight?`<div class="hb-host-answer-pill">${t(a.highlight)}</div>`:""}
      </div>
      ${a.rows?`<div class="hb-host-results-list">${a.rows}</div>`:""}
      ${a.actions?`<div class="hb-host-result-actions">${a.actions}</div>`:""}
    </div>
  `}function y(a){return`
    <div class="hb-host-result-row is-${a.tone||"default"}">
      ${typeof a.rank=="number"?`<span class="hb-host-result-rank">${h(a.rank.toString())}</span>`:""}
      ${b(a.player)}
      <div class="hb-host-result-main">
        <div class="hb-host-result-name">${t(a.player.name)}</div>
        ${a.detail?`<div class="hb-host-result-detail">${t(a.detail)}</div>`:""}
      </div>
      ${a.reward?`<div class="hb-host-result-score">${t(a.reward)}</div>`:""}
    </div>
  `}function C(a,r=""){return`<button class="hb-primary-button" ${r}>${t(a)}</button>`}function x(a,r=""){return`<button class="hb-secondary-button" ${r}>${t(a)}</button>`}function k(a,r,e="",s=""){const l=i(a.avatarId,a.id||a.name),n=l%4,u=Math.floor(l/4),v=`${n*33.3333}% ${u*100}%`;return`
    <button class="hb-player-option ${t(s)}" ${e}>
      <span
        class="hb-player-option-avatar has-avatar-art"
        data-avatar-id="avatar-${l}"
        style="background-color: ${t(a.color)}; color: ${d(a.color)}; --avatar-position: ${v}"
      >
        ${t(c(a.name))}
      </span>
      <span class="hb-player-option-text">
        <span class="hb-player-option-name">${t(a.name)}</span>
        <span class="hb-player-option-detail">${t(r)}</span>
      </span>
    </button>
  `}export{b as a,w as b,m as c,f as d,o as e,C as f,k as g,x as h,y as r};
