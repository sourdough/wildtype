/* https://cdn.jsdelivr.net/npm/lit-html@3.2.1/directives/style-map.js/+esm */ /**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lit-html@3.2.1/directives/style-map.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.trustedTypes,s=e?e.createPolicy("lit-html",{createHTML:t=>t}):void 0,i="$lit$",n=`lit$${Math.random().toFixed(9).slice(2)}$`,r="?"+n,o=`<${r}>`,h=document,l=()=>h.createComment(""),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,A=t=>c(t)||"function"==typeof t?.[Symbol.iterator],a="[ \t\n\f\r]",_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,d=/-->/g,u=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,f=/"/g,m=/^(?:script|style|textarea|title)$/i,v=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),x=new WeakMap,H=h.createTreeWalker(h,129);function T(t,e){if(!c(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const N=(t,e)=>{const s=t.length-1,r=[];let h,l=2===e?"<svg>":3===e?"<math>":"",$=_;for(let e=0;e<s;e++){const s=t[e];let c,A,a=-1,v=0;for(;v<s.length&&($.lastIndex=v,A=$.exec(s),null!==A);)v=$.lastIndex,$===_?"!--"===A[1]?$=d:void 0!==A[1]?$=u:void 0!==A[2]?(m.test(A[2])&&(h=RegExp("</"+A[2],"g")),$=p):void 0!==A[3]&&($=p):$===p?">"===A[0]?($=h??_,a=-1):void 0===A[1]?a=-2:(a=$.lastIndex-A[2].length,c=A[1],$=void 0===A[3]?p:'"'===A[3]?f:g):$===f||$===g?$=p:$===d||$===u?$=_:($=p,h=void 0);const y=$===p&&t[e+1].startsWith("/>")?" ":"";l+=$===_?s+o:a>=0?(r.push(c),s.slice(0,a)+i+s.slice(a)+n+y):s+n+(-2===a?e:y)}return[T(t,l+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class b{constructor({strings:t,_$litType$:s},o){let h;this.parts=[];let $=0,c=0;const A=t.length-1,a=this.parts,[_,d]=N(t,s);if(this.el=b.createElement(_,o),H.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(h=H.nextNode())&&a.length<A;){if(1===h.nodeType){if(h.hasAttributes())for(const t of h.getAttributeNames())if(t.endsWith(i)){const e=d[c++],s=h.getAttribute(t).split(n),i=/([.?@])?(.*)/.exec(e);a.push({type:1,index:$,name:i[2],strings:s,ctor:"."===i[1]?S:"?"===i[1]?I:"@"===i[1]?U:w}),h.removeAttribute(t)}else t.startsWith(n)&&(a.push({type:6,index:$}),h.removeAttribute(t));if(m.test(h.tagName)){const t=h.textContent.split(n),s=t.length-1;if(s>0){h.textContent=e?e.emptyScript:"";for(let e=0;e<s;e++)h.append(t[e],l()),H.nextNode(),a.push({type:2,index:++$});h.append(t[s],l())}}}else if(8===h.nodeType)if(h.data===r)a.push({type:2,index:$});else{let t=-1;for(;-1!==(t=h.data.indexOf(n,t+1));)a.push({type:7,index:$}),t+=n.length-1}$++}}static createElement(t,e){const s=h.createElement("template");return s.innerHTML=t,s}}function E(t,e,s=t,i){if(e===v)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=$(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=E(t,n._$AS(t,e.values),n,i)),e}class M{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??h).importNode(e,!0);H.currentNode=i;let n=H.nextNode(),r=0,o=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new C(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new O(n,this,t)),this._$AV.push(e),l=s[++o]}r!==l?.index&&(n=H.nextNode(),r++)}return H.currentNode=h,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class C{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),$(t)?t===y||null==t||""===t?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==v&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):A(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&$(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=b.createElement(T(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new M(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=x.get(t.strings);return void 0===e&&x.set(t.strings,e=new b(t)),e}k(t){c(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new C(this.O(l()),this.O(l()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class w{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=E(this,t,e,0),r=!$(t)||t!==this._$AH&&t!==v,r&&(this._$AH=t);else{const i=t;let o,h;for(t=n[0],o=0;o<n.length-1;o++)h=E(this,i[s+o],e,o),h===v&&(h=this._$AH[o]),r||=!$(h)||h!==this._$AH[o],h===y?t=y:t!==y&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}r&&!i&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class S extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class I extends w{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class U extends w{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??y)===v)return;const s=this._$AH,i=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==y&&(s===y||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class O{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const R=t.litHtmlPolyfillSupport;R?.(b,C),(t.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},L=t=>(...e)=>({_$litDirective$:t,values:e});class P{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j="important",k=" !"+j,W=L(class extends P{constructor(t){if(super(t),t.type!==B.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ft.add(t);const e="string"==typeof i&&i.endsWith(k);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?j:""):s[t]=i}}return v}});export{W as styleMap};export default null;
//# sourceMappingURL=/sm/e64e78fea75452baaa03239549ee8f79142b91a9f6724712f85600bfaa5c4a23.map