import{_ as Tt,o as Y,c as W,a as I,i as lt,F as Mt,e as kt,k as Lt,t as J,g as $,d as ft}from"./index-e4da0025.js";const xt={props:["pages","getData"]},It={"aria-label":"Page navigation example"},Rt={class:"pagination"},Pt=I("span",{"aria-hidden":"true"},"«",-1),$t=[Pt],Vt=["onClick"],Ft=I("span",{"aria-hidden":"true"},"»",-1),qt=[Ft];function Bt(l,M,e,o,d,s){return Y(),W("nav",It,[I("ul",Rt,[I("li",{class:lt(["page-item",{disabled:!e.pages.has_pre}])},[I("a",{class:"page-link","aria-label":"Previous",onClick:M[0]||(M[0]=n=>e.getData(e.pages.current_page-1))},$t)],2),(Y(!0),W(Mt,null,kt(e.pages.total_pages,n=>(Y(),W("li",{class:lt(["page-item",{active:n===e.pages.current_page}]),key:n+"pages"},[I("a",{class:"page-link",href:"#",onClick:Lt(h=>e.getData(n),["prevent"])},J(n),9,Vt)],2))),128)),I("li",{class:lt(["page-item",{disabled:!e.pages.has_next}])},[I("a",{class:"page-link","aria-label":"Next",onClick:M[1]||(M[1]=n=>e.getData(e.pages.current_page+1))},qt)],2)])])}const Ae=Tt(xt,[["render",Bt]]);var ut={},jt={get exports(){return ut},set exports(l){ut=l}},z={},Kt={get exports(){return z},set exports(l){z=l}};/*!
  * Bootstrap index.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ht;function j(){return ht||(ht=1,function(l,M){(function(e,o){o(M)})($,function(e){const s="transitionend",n=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),h=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},u=t=>{let a=t.getAttribute("data-bs-target");if(!a||a==="#"){let f=t.getAttribute("href");if(!f||!f.includes("#")&&!f.startsWith("."))return null;f.includes("#")&&!f.startsWith("#")&&(f=`#${f.split("#")[1]}`),a=f&&f!=="#"?f.trim():null}return a},A=t=>{const a=u(t);return a&&document.querySelector(a)?a:null},y=t=>{const a=u(t);return a?document.querySelector(a):null},p=t=>{if(!t)return 0;let{transitionDuration:a,transitionDelay:f}=window.getComputedStyle(t);const w=Number.parseFloat(a),C=Number.parseFloat(f);return!w&&!C?0:(a=a.split(",")[0],f=f.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(f))*1e3)},D=t=>{t.dispatchEvent(new Event(s))},c=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),b=t=>c(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(t):null,m=t=>{if(!c(t)||t.getClientRects().length===0)return!1;const a=getComputedStyle(t).getPropertyValue("visibility")==="visible",f=t.closest("details:not([open])");if(!f)return a;if(f!==t){const w=t.closest("summary");if(w&&w.parentNode!==f||w===null)return!1}return a},_=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",k=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const a=t.getRootNode();return a instanceof ShadowRoot?a:null}return t instanceof ShadowRoot?t:t.parentNode?k(t.parentNode):null},V=()=>{},N=t=>{t.offsetHeight},R=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,O=[],i=t=>{document.readyState==="loading"?(O.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of O)a()}),O.push(t)):t()},r=()=>document.documentElement.dir==="rtl",g=t=>{i(()=>{const a=R();if(a){const f=t.NAME,w=a.fn[f];a.fn[f]=t.jQueryInterface,a.fn[f].Constructor=t,a.fn[f].noConflict=()=>(a.fn[f]=w,t.jQueryInterface)}})},E=t=>{typeof t=="function"&&t()},S=(t,a,f=!0)=>{if(!f){E(t);return}const w=5,C=p(a)+w;let L=!1;const P=({target:q})=>{q===a&&(L=!0,a.removeEventListener(s,P),E(t))};a.addEventListener(s,P),setTimeout(()=>{L||D(a)},C)},T=(t,a,f,w)=>{const C=t.length;let L=t.indexOf(a);return L===-1?!f&&w?t[C-1]:t[0]:(L+=f?1:-1,w&&(L=(L+C)%C),t[Math.max(0,Math.min(L,C-1))])};e.defineJQueryPlugin=g,e.execute=E,e.executeAfterTransition=S,e.findShadowRoot=k,e.getElement=b,e.getElementFromSelector=y,e.getNextActiveElement=T,e.getSelectorFromElement=A,e.getTransitionDurationFromElement=p,e.getUID=h,e.getjQuery=R,e.isDisabled=_,e.isElement=c,e.isRTL=r,e.isVisible=m,e.noop=V,e.onDOMContentLoaded=i,e.reflow=N,e.toType=n,e.triggerTransitionEnd=D,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(Kt,z)),z}var X={},Ht={get exports(){return X},set exports(l){X=l}};/*!
  * Bootstrap event-handler.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var _t;function G(){return _t||(_t=1,function(l,M){(function(e,o){l.exports=o(j())})($,function(e){const o=/[^.]*(?=\..*)\.|.*/,d=/\..*/,s=/::\d+$/,n={};let h=1;const u={mouseenter:"mouseover",mouseleave:"mouseout"},A=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function y(i,r){return r&&`${r}::${h++}`||i.uidEvent||h++}function p(i){const r=y(i);return i.uidEvent=r,n[r]=n[r]||{},n[r]}function D(i,r){return function g(E){return O(E,{delegateTarget:i}),g.oneOff&&R.off(i,E.type,r),r.apply(i,[E])}}function c(i,r,g){return function E(S){const T=i.querySelectorAll(r);for(let{target:t}=S;t&&t!==this;t=t.parentNode)for(const a of T)if(a===t)return O(S,{delegateTarget:t}),E.oneOff&&R.off(i,S.type,r,g),g.apply(t,[S])}}function b(i,r,g=null){return Object.values(i).find(E=>E.callable===r&&E.delegationSelector===g)}function m(i,r,g){const E=typeof r=="string",S=E?g:r||g;let T=N(i);return A.has(T)||(T=i),[E,S,T]}function _(i,r,g,E,S){if(typeof r!="string"||!i)return;let[T,t,a]=m(r,g,E);r in u&&(t=(at=>function(B){if(!B.relatedTarget||B.relatedTarget!==B.delegateTarget&&!B.delegateTarget.contains(B.relatedTarget))return at.call(this,B)})(t));const f=p(i),w=f[a]||(f[a]={}),C=b(w,t,T?g:null);if(C){C.oneOff=C.oneOff&&S;return}const L=y(t,r.replace(o,"")),P=T?c(i,g,t):D(i,t);P.delegationSelector=T?g:null,P.callable=t,P.oneOff=S,P.uidEvent=L,w[L]=P,i.addEventListener(a,P,T)}function k(i,r,g,E,S){const T=b(r[g],E,S);T&&(i.removeEventListener(g,T,Boolean(S)),delete r[g][T.uidEvent])}function V(i,r,g,E){const S=r[g]||{};for(const T of Object.keys(S))if(T.includes(E)){const t=S[T];k(i,r,g,t.callable,t.delegationSelector)}}function N(i){return i=i.replace(d,""),u[i]||i}const R={on(i,r,g,E){_(i,r,g,E,!1)},one(i,r,g,E){_(i,r,g,E,!0)},off(i,r,g,E){if(typeof r!="string"||!i)return;const[S,T,t]=m(r,g,E),a=t!==r,f=p(i),w=f[t]||{},C=r.startsWith(".");if(typeof T<"u"){if(!Object.keys(w).length)return;k(i,f,t,T,S?g:null);return}if(C)for(const L of Object.keys(f))V(i,f,L,r.slice(1));for(const L of Object.keys(w)){const P=L.replace(s,"");if(!a||r.includes(P)){const q=w[L];k(i,f,t,q.callable,q.delegationSelector)}}},trigger(i,r,g){if(typeof r!="string"||!i)return null;const E=e.getjQuery(),S=N(r),T=r!==S;let t=null,a=!0,f=!0,w=!1;T&&E&&(t=E.Event(r,g),E(i).trigger(t),a=!t.isPropagationStopped(),f=!t.isImmediatePropagationStopped(),w=t.isDefaultPrevented());let C=new Event(r,{bubbles:a,cancelable:!0});return C=O(C,g),w&&C.preventDefault(),f&&i.dispatchEvent(C),C.defaultPrevented&&t&&t.preventDefault(),C}};function O(i,r){for(const[g,E]of Object.entries(r||{}))try{i[g]=E}catch{Object.defineProperty(i,g,{configurable:!0,get(){return E}})}return i}return R})}(Ht)),X}var Z={},Yt={get exports(){return Z},set exports(l){Z=l}};/*!
  * Bootstrap selector-engine.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var gt;function ct(){return gt||(gt=1,function(l,M){(function(e,o){l.exports=o(j())})($,function(e){return{find(d,s=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(s,d))},findOne(d,s=document.documentElement){return Element.prototype.querySelector.call(s,d)},children(d,s){return[].concat(...d.children).filter(n=>n.matches(s))},parents(d,s){const n=[];let h=d.parentNode.closest(s);for(;h;)n.push(h),h=h.parentNode.closest(s);return n},prev(d,s){let n=d.previousElementSibling;for(;n;){if(n.matches(s))return[n];n=n.previousElementSibling}return[]},next(d,s){let n=d.nextElementSibling;for(;n;){if(n.matches(s))return[n];n=n.nextElementSibling}return[]},focusableChildren(d){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(s,d).filter(n=>!e.isDisabled(n)&&e.isVisible(n))}}})}(Yt)),Z}var tt={},Wt={get exports(){return tt},set exports(l){tt=l}},et={},Ut={get exports(){return et},set exports(l){et=l}};/*!
  * Bootstrap manipulator.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pt;function Nt(){return pt||(pt=1,function(l,M){(function(e,o){l.exports=o()})($,function(){function e(s){if(s==="true")return!0;if(s==="false")return!1;if(s===Number(s).toString())return Number(s);if(s===""||s==="null")return null;if(typeof s!="string")return s;try{return JSON.parse(decodeURIComponent(s))}catch{return s}}function o(s){return s.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}return{setDataAttribute(s,n,h){s.setAttribute(`data-bs-${o(n)}`,h)},removeDataAttribute(s,n){s.removeAttribute(`data-bs-${o(n)}`)},getDataAttributes(s){if(!s)return{};const n={},h=Object.keys(s.dataset).filter(u=>u.startsWith("bs")&&!u.startsWith("bsConfig"));for(const u of h){let A=u.replace(/^bs/,"");A=A.charAt(0).toLowerCase()+A.slice(1,A.length),n[A]=e(s.dataset[u])}return n},getDataAttribute(s,n){return e(s.getAttribute(`data-bs-${o(n)}`))}}})}(Ut)),et}/*!
  * Bootstrap scrollbar.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var mt;function zt(){return mt||(mt=1,function(l,M){(function(e,o){l.exports=o(ct(),Nt(),j())})($,function(e,o,d){const s=c=>c&&typeof c=="object"&&"default"in c?c:{default:c},n=s(e),h=s(o),u=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",A=".sticky-top",y="padding-right",p="margin-right";class D{constructor(){this._element=document.body}getWidth(){const b=document.documentElement.clientWidth;return Math.abs(window.innerWidth-b)}hide(){const b=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,y,m=>m+b),this._setElementAttributes(u,y,m=>m+b),this._setElementAttributes(A,p,m=>m-b)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,y),this._resetElementAttributes(u,y),this._resetElementAttributes(A,p)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(b,m,_){const k=this.getWidth(),V=N=>{if(N!==this._element&&window.innerWidth>N.clientWidth+k)return;this._saveInitialAttribute(N,m);const R=window.getComputedStyle(N).getPropertyValue(m);N.style.setProperty(m,`${_(Number.parseFloat(R))}px`)};this._applyManipulationCallback(b,V)}_saveInitialAttribute(b,m){const _=b.style.getPropertyValue(m);_&&h.default.setDataAttribute(b,m,_)}_resetElementAttributes(b,m){const _=k=>{const V=h.default.getDataAttribute(k,m);if(V===null){k.style.removeProperty(m);return}h.default.removeDataAttribute(k,m),k.style.setProperty(m,V)};this._applyManipulationCallback(b,_)}_applyManipulationCallback(b,m){if(d.isElement(b)){m(b);return}for(const _ of n.default.find(b,this._element))m(_)}}return D})}(Wt)),tt}var nt={},Qt={get exports(){return nt},set exports(l){nt=l}},st={},Gt={get exports(){return st},set exports(l){st=l}};/*!
  * Bootstrap data.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Et;function Jt(){return Et||(Et=1,function(l,M){(function(e,o){l.exports=o()})($,function(){const e=new Map;return{set(d,s,n){e.has(d)||e.set(d,new Map);const h=e.get(d);if(!h.has(s)&&h.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(h.keys())[0]}.`);return}h.set(s,n)},get(d,s){return e.has(d)&&e.get(d).get(s)||null},remove(d,s){if(!e.has(d))return;const n=e.get(d);n.delete(s),n.size===0&&e.delete(d)}}})}(Gt)),st}var it={},Xt={get exports(){return it},set exports(l){it=l}};/*!
  * Bootstrap config.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var bt;function dt(){return bt||(bt=1,function(l,M){(function(e,o){l.exports=o(j(),Nt())})($,function(e,o){const s=(h=>h&&typeof h=="object"&&"default"in h?h:{default:h})(o);class n{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(u){return u=this._mergeConfigObj(u),u=this._configAfterMerge(u),this._typeCheckConfig(u),u}_configAfterMerge(u){return u}_mergeConfigObj(u,A){const y=e.isElement(A)?s.default.getDataAttribute(A,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...e.isElement(A)?s.default.getDataAttributes(A):{},...typeof u=="object"?u:{}}}_typeCheckConfig(u,A=this.constructor.DefaultType){for(const y of Object.keys(A)){const p=A[y],D=u[y],c=e.isElement(D)?"element":e.toType(D);if(!new RegExp(p).test(c))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${c}" but expected type "${p}".`)}}}return n})}(Xt)),it}/*!
  * Bootstrap base-component.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var yt;function Zt(){return yt||(yt=1,function(l,M){(function(e,o){l.exports=o(Jt(),j(),G(),dt())})($,function(e,o,d,s){const n=D=>D&&typeof D=="object"&&"default"in D?D:{default:D},h=n(e),u=n(d),A=n(s),y="5.2.2";class p extends A.default{constructor(c,b){super(),c=o.getElement(c),c&&(this._element=c,this._config=this._getConfig(b),h.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){h.default.remove(this._element,this.constructor.DATA_KEY),u.default.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,b,m=!0){o.executeAfterTransition(c,b,m)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return h.default.get(o.getElement(c),this.DATA_KEY)}static getOrCreateInstance(c,b={}){return this.getInstance(c)||new this(c,typeof b=="object"?b:null)}static get VERSION(){return y}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}return p})}(Qt)),nt}var ot={},te={get exports(){return ot},set exports(l){ot=l}};/*!
  * Bootstrap backdrop.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var At;function ee(){return At||(At=1,function(l,M){(function(e,o){l.exports=o(G(),j(),dt())})($,function(e,o,d){const s=m=>m&&typeof m=="object"&&"default"in m?m:{default:m},n=s(e),h=s(d),u="backdrop",A="fade",y="show",p=`mousedown.bs.${u}`,D={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},c={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class b extends h.default{constructor(_){super(),this._config=this._getConfig(_),this._isAppended=!1,this._element=null}static get Default(){return D}static get DefaultType(){return c}static get NAME(){return u}show(_){if(!this._config.isVisible){o.execute(_);return}this._append();const k=this._getElement();this._config.isAnimated&&o.reflow(k),k.classList.add(y),this._emulateAnimation(()=>{o.execute(_)})}hide(_){if(!this._config.isVisible){o.execute(_);return}this._getElement().classList.remove(y),this._emulateAnimation(()=>{this.dispose(),o.execute(_)})}dispose(){this._isAppended&&(n.default.off(this._element,p),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const _=document.createElement("div");_.className=this._config.className,this._config.isAnimated&&_.classList.add(A),this._element=_}return this._element}_configAfterMerge(_){return _.rootElement=o.getElement(_.rootElement),_}_append(){if(this._isAppended)return;const _=this._getElement();this._config.rootElement.append(_),n.default.on(_,p,()=>{o.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(_){o.executeAfterTransition(_,this._getElement(),this._config.isAnimated)}}return b})}(te)),ot}var rt={},ne={get exports(){return rt},set exports(l){rt=l}};/*!
  * Bootstrap focustrap.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var vt;function se(){return vt||(vt=1,function(l,M){(function(e,o){l.exports=o(G(),ct(),dt())})($,function(e,o,d){const s=R=>R&&typeof R=="object"&&"default"in R?R:{default:R},n=s(e),h=s(o),u=s(d),A="focustrap",p=".bs.focustrap",D=`focusin${p}`,c=`keydown.tab${p}`,b="Tab",m="forward",_="backward",k={autofocus:!0,trapElement:null},V={autofocus:"boolean",trapElement:"element"};class N extends u.default{constructor(O){super(),this._config=this._getConfig(O),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return k}static get DefaultType(){return V}static get NAME(){return A}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),n.default.off(document,p),n.default.on(document,D,O=>this._handleFocusin(O)),n.default.on(document,c,O=>this._handleKeydown(O)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,n.default.off(document,p))}_handleFocusin(O){const{trapElement:i}=this._config;if(O.target===document||O.target===i||i.contains(O.target))return;const r=h.default.focusableChildren(i);r.length===0?i.focus():this._lastTabNavDirection===_?r[r.length-1].focus():r[0].focus()}_handleKeydown(O){O.key===b&&(this._lastTabNavDirection=O.shiftKey?_:m)}}return N})}(ne)),rt}var Q={},ie={get exports(){return Q},set exports(l){Q=l}};/*!
  * Bootstrap component-functions.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Dt;function oe(){return Dt||(Dt=1,function(l,M){(function(e,o){o(M,G(),j())})($,function(e,o,d){const n=(u=>u&&typeof u=="object"&&"default"in u?u:{default:u})(o),h=(u,A="hide")=>{const y=`click.dismiss${u.EVENT_KEY}`,p=u.NAME;n.default.on(document,y,`[data-bs-dismiss="${p}"]`,function(D){if(["A","AREA"].includes(this.tagName)&&D.preventDefault(),d.isDisabled(this))return;const c=d.getElementFromSelector(this)||this.closest(`.${p}`);u.getOrCreateInstance(c)[A]()})};e.enableDismissTrigger=h,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(ie,Q)),Q}/*!
  * Bootstrap modal.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(l,M){(function(e,o){l.exports=o(j(),G(),ct(),zt(),Zt(),ee(),se(),oe())})($,function(e,o,d,s,n,h,u,A){const y=H=>H&&typeof H=="object"&&"default"in H?H:{default:H},p=y(o),D=y(d),c=y(s),b=y(n),m=y(h),_=y(u),k="modal",N=".bs.modal",R=".data-api",O="Escape",i=`hide${N}`,r=`hidePrevented${N}`,g=`hidden${N}`,E=`show${N}`,S=`shown${N}`,T=`resize${N}`,t=`click.dismiss${N}`,a=`mousedown.dismiss${N}`,f=`keydown.dismiss${N}`,w=`click${N}${R}`,C="modal-open",L="fade",P="show",q="modal-static",at=".modal.show",B=".modal-dialog",St=".modal-body",wt='[data-bs-toggle="modal"]',Ct={backdrop:!0,focus:!0,keyboard:!0},Ot={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class K extends b.default{constructor(v,x){super(v,x),this._dialog=D.default.findOne(B,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new c.default,this._addEventListeners()}static get Default(){return Ct}static get DefaultType(){return Ot}static get NAME(){return k}toggle(v){return this._isShown?this.hide():this.show(v)}show(v){this._isShown||this._isTransitioning||p.default.trigger(this._element,E,{relatedTarget:v}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(C),this._adjustDialog(),this._backdrop.show(()=>this._showElement(v)))}hide(){!this._isShown||this._isTransitioning||p.default.trigger(this._element,i).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(P),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const v of[window,this._dialog])p.default.off(v,N);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new m.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new _.default({trapElement:this._element})}_showElement(v){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const x=D.default.findOne(St,this._dialog);x&&(x.scrollTop=0),e.reflow(this._element),this._element.classList.add(P);const F=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,p.default.trigger(this._element,S,{relatedTarget:v})};this._queueCallback(F,this._dialog,this._isAnimated())}_addEventListeners(){p.default.on(this._element,f,v=>{if(v.key===O){if(this._config.keyboard){v.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),p.default.on(window,T,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),p.default.on(this._element,a,v=>{p.default.one(this._element,t,x=>{if(!(this._element!==v.target||this._element!==x.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(C),this._resetAdjustments(),this._scrollBar.reset(),p.default.trigger(this._element,g)})}_isAnimated(){return this._element.classList.contains(L)}_triggerBackdropTransition(){if(p.default.trigger(this._element,r).defaultPrevented)return;const x=this._element.scrollHeight>document.documentElement.clientHeight,F=this._element.style.overflowY;F==="hidden"||this._element.classList.contains(q)||(x||(this._element.style.overflowY="hidden"),this._element.classList.add(q),this._queueCallback(()=>{this._element.classList.remove(q),this._queueCallback(()=>{this._element.style.overflowY=F},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const v=this._element.scrollHeight>document.documentElement.clientHeight,x=this._scrollBar.getWidth(),F=x>0;if(F&&!v){const U=e.isRTL()?"paddingLeft":"paddingRight";this._element.style[U]=`${x}px`}if(!F&&v){const U=e.isRTL()?"paddingRight":"paddingLeft";this._element.style[U]=`${x}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(v,x){return this.each(function(){const F=K.getOrCreateInstance(this,v);if(typeof v=="string"){if(typeof F[v]>"u")throw new TypeError(`No method named "${v}"`);F[v](x)}})}}return p.default.on(document,w,wt,function(H){const v=e.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&H.preventDefault(),p.default.one(v,E,U=>{U.defaultPrevented||p.default.one(v,g,()=>{e.isVisible(this)&&this.focus()})});const x=D.default.findOne(at);x&&K.getInstance(x).hide(),K.getOrCreateInstance(v).toggle(this)}),A.enableDismissTrigger(K),e.defineJQueryPlugin(K),K})})(jt);const re=ut,ae={props:["tempProduct","deleteProduct","isOrder","tempOrder"],data(){return{delProductModal:null}},methods:{opendelModal(){this.delProductModal.show()},hidedelModal(){this.delProductModal.hide()}},mounted(){this.delProductModal=new re(this.$refs.delProductModal)}},le={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},ue={class:"modal-dialog"},ce={class:"modal-content border-0"},de={class:"modal-header bg-danger text-white"},fe={id:"delProductModalLabel",class:"modal-title"},he=I("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),_e={class:"modal-body"},ge={key:0,class:"text-danger"},pe={key:1,class:"text-danger"},me={class:"modal-footer"},Ee=I("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function be(l,M,e,o,d,s){return Y(),W("div",le,[I("div",ue,[I("div",ce,[I("div",de,[I("h5",fe,[I("span",null,J(e.isOrder?"刪除訂單":"刪除產品"),1)]),he]),I("div",_e,[ft(" 是否刪除 "),e.isOrder?(Y(),W("strong",ge,J(e.tempOrder.user.email)+"訂單",1)):(Y(),W("strong",pe,J(e.tempProduct.title)+"商品",1)),ft(" (刪除後將無法恢復)。 ")]),I("div",me,[Ee,I("button",{type:"button",class:"btn btn-danger",onClick:M[0]||(M[0]=(...n)=>e.deleteProduct&&e.deleteProduct(...n))}," 確認刪除 ")])])])],512)}const ve=Tt(ae,[["render",be]]);export{ve as D,re as M,Ae as P};
