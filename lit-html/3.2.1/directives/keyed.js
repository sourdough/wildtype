/* https://cdn.jsdelivr.net/npm/lit-html@3.2.1/directives/keyed.js/+esm */ /**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lit-html@3.2.1/directives/keyed.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.trustedTypes,s=e?e.createPolicy("lit-html",{createHTML:t=>t}):void 0,i="$lit$",n=`lit$${Math.random().toFixed(9).slice(2)}$`,r="?"+n,h=`<${r}>`,o=document,l=()=>o.createComment(""),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,_="[ \t\n\f\r]",c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,d=/>/g,p=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),u=/'/g,g=/"/g,v=/^(?:script|style|textarea|title)$/i,m=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),y=new WeakMap,x=o.createTreeWalker(o,129);function H(t,e){if(!A(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const N=(t,e)=>{const s=t.length-1,r=[];let o,l=2===e?"<svg>":3===e?"<math>":"",$=c;for(let e=0;e<s;e++){const s=t[e];let A,_,m=-1,f=0;for(;f<s.length&&($.lastIndex=f,_=$.exec(s),null!==_);)f=$.lastIndex,$===c?"!--"===_[1]?$=a:void 0!==_[1]?$=d:void 0!==_[2]?(v.test(_[2])&&(o=RegExp("</"+_[2],"g")),$=p):void 0!==_[3]&&($=p):$===p?">"===_[0]?($=o??c,m=-1):void 0===_[1]?m=-2:(m=$.lastIndex-_[2].length,A=_[1],$=void 0===_[3]?p:'"'===_[3]?g:u):$===g||$===u?$=p:$===a||$===d?$=c:($=p,o=void 0);const y=$===p&&t[e+1].startsWith("/>")?" ":"";l+=$===c?s+h:m>=0?(r.push(A),s.slice(0,m)+i+s.slice(m)+n+y):s+n+(-2===m?e:y)}return[H(t,l+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class T{constructor({strings:t,_$litType$:s},h){let o;this.parts=[];let $=0,A=0;const _=t.length-1,c=this.parts,[a,d]=N(t,s);if(this.el=T.createElement(a,h),x.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=x.nextNode())&&c.length<_;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(i)){const e=d[A++],s=o.getAttribute(t).split(n),i=/([.?@])?(.*)/.exec(e);c.push({type:1,index:$,name:i[2],strings:s,ctor:"."===i[1]?w:"?"===i[1]?E:"@"===i[1]?I:S}),o.removeAttribute(t)}else t.startsWith(n)&&(c.push({type:6,index:$}),o.removeAttribute(t));if(v.test(o.tagName)){const t=o.textContent.split(n),s=t.length-1;if(s>0){o.textContent=e?e.emptyScript:"";for(let e=0;e<s;e++)o.append(t[e],l()),x.nextNode(),c.push({type:2,index:++$});o.append(t[s],l())}}}else if(8===o.nodeType)if(o.data===r)c.push({type:2,index:$});else{let t=-1;for(;-1!==(t=o.data.indexOf(n,t+1));)c.push({type:7,index:$}),t+=n.length-1}$++}}static createElement(t,e){const s=o.createElement("template");return s.innerHTML=t,s}}function b(t,e,s=t,i){if(e===m)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=$(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=b(t,n._$AS(t,e.values),n,i)),e}class C{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??o).importNode(e,!0);x.currentNode=i;let n=x.nextNode(),r=0,h=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new M(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new U(n,this,t)),this._$AV.push(e),l=s[++h]}r!==l?.index&&(n=x.nextNode(),r++)}return x.currentNode=o,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),$(t)?t===f||null==t||""===t?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==m&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>A(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&$(this._$AH)?this._$AA.nextSibling.data=t:this.T(o.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=T.createElement(H(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new C(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=y.get(t.strings);return void 0===e&&y.set(t.strings,e=new T(t)),e}k(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new M(this.O(l()),this.O(l()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class S{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=b(this,t,e,0),r=!$(t)||t!==this._$AH&&t!==m,r&&(this._$AH=t);else{const i=t;let h,o;for(t=n[0],h=0;h<n.length-1;h++)o=b(this,i[s+h],e,h),o===m&&(o=this._$AH[h]),r||=!$(o)||o!==this._$AH[h],o===f?t=f:t!==f&&(t+=(o??"")+n[h+1]),this._$AH[h]=o}r&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class w extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class E extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class I extends S{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??f)===m)return;const s=this._$AH,i=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class U{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const k=t.litHtmlPolyfillSupport;k?.(T,M),(t.litHtmlVersions??=[]).push("3.2.1");class O{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R={},B=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends O{constructor(){super(...arguments),this.key=f}render(t,e){return this.key=t,e}update(t,[e,s]){return e!==this.key&&(((t,e=R)=>{t._$AH=e;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(t),this.key=e),s}});export{B as keyed};export default null;
//# sourceMappingURL=/sm/edb4ecfae8de0d0474fba5d63b1ed98ae4bd0cd5cbe122e2efa219833454b9b1.map