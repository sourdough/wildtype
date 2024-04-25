/* https://cdn.jsdelivr.net/npm/lit-html@3.1.3/directives/live.js/+esm */ /**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lit-html@3.1.3/directives/live.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.trustedTypes,i=e?e.createPolicy("lit-html",{createHTML:t=>t}):void 0,s="$lit$",n=`lit$${Math.random().toFixed(9).slice(2)}$`,r="?"+n,o=`<${r}>`,h=document,l=()=>h.createComment(""),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,_="[ \t\n\f\r]",c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,d=/>/g,p=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),u=/'/g,g=/"/g,v=/^(?:script|style|textarea|title)$/i,f=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),y=new WeakMap,x=h.createTreeWalker(h,129);function H(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==i?i.createHTML(e):e}const N=(t,e)=>{const i=t.length-1,r=[];let h,l=2===e?"<svg>":"",$=c;for(let e=0;e<i;e++){const i=t[e];let A,_,f=-1,m=0;for(;m<i.length&&($.lastIndex=m,_=$.exec(i),null!==_);)m=$.lastIndex,$===c?"!--"===_[1]?$=a:void 0!==_[1]?$=d:void 0!==_[2]?(v.test(_[2])&&(h=RegExp("</"+_[2],"g")),$=p):void 0!==_[3]&&($=p):$===p?">"===_[0]?($=h??c,f=-1):void 0===_[1]?f=-2:(f=$.lastIndex-_[2].length,A=_[1],$=void 0===_[3]?p:'"'===_[3]?g:u):$===g||$===u?$=p:$===a||$===d?$=c:($=p,h=void 0);const y=$===p&&t[e+1].startsWith("/>")?" ":"";l+=$===c?i+o:f>=0?(r.push(A),i.slice(0,f)+s+i.slice(f)+n+y):i+n+(-2===f?e:y)}return[H(t,l+(t[i]||"<?>")+(2===e?"</svg>":"")),r]};class b{constructor({strings:t,_$litType$:i},o){let h;this.parts=[];let $=0,A=0;const _=t.length-1,c=this.parts,[a,d]=N(t,i);if(this.el=b.createElement(a,o),x.currentNode=this.el.content,2===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(h=x.nextNode())&&c.length<_;){if(1===h.nodeType){if(h.hasAttributes())for(const t of h.getAttributeNames())if(t.endsWith(s)){const e=d[A++],i=h.getAttribute(t).split(n),s=/([.?@])?(.*)/.exec(e);c.push({type:1,index:$,name:s[2],strings:i,ctor:"."===s[1]?w:"?"===s[1]?E:"@"===s[1]?I:S}),h.removeAttribute(t)}else t.startsWith(n)&&(c.push({type:6,index:$}),h.removeAttribute(t));if(v.test(h.tagName)){const t=h.textContent.split(n),i=t.length-1;if(i>0){h.textContent=e?e.emptyScript:"";for(let e=0;e<i;e++)h.append(t[e],l()),x.nextNode(),c.push({type:2,index:++$});h.append(t[i],l())}}}else if(8===h.nodeType)if(h.data===r)c.push({type:2,index:$});else{let t=-1;for(;-1!==(t=h.data.indexOf(n,t+1));)c.push({type:7,index:$}),t+=n.length-1}$++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function T(t,e,i=t,s){if(e===f)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=$(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=T(t,n._$AS(t,e.values),n,s)),e}class C{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??h).importNode(e,!0);x.currentNode=s;let n=x.nextNode(),r=0,o=0,l=i[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new M(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new U(n,this,t)),this._$AV.push(e),l=i[++o]}r!==l?.index&&(n=x.nextNode(),r++)}return x.currentNode=h,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),$(t)?t===m||null==t||""===t?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==f&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>A(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==m&&$(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=b.createElement(H(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new C(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=y.get(t.strings);return void 0===e&&y.set(t.strings,e=new b(t)),e}k(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new M(this.S(l()),this.S(l()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class S{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=T(this,t,e,0),r=!$(t)||t!==this._$AH&&t!==f,r&&(this._$AH=t);else{const s=t;let o,h;for(t=n[0],o=0;o<n.length-1;o++)h=T(this,s[i+o],e,o),h===f&&(h=this._$AH[o]),r||=!$(h)||h!==this._$AH[o],h===m?t=m:t!==m&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}r&&!s&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class w extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}class E extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}}class I extends S{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??m)===f)return;const i=this._$AH,s=t===m&&i!==m||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==m&&(i===m||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class U{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const R=t.litHtmlPolyfillSupport;R?.(b,M),(t.litHtmlVersions??=[]).push("3.1.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B=1,W=3,j=4;class D{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L={},P=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends D{constructor(t){if(super(t),t.type!==W&&t.type!==B&&t.type!==j)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===f||e===m)return e;const i=t.element,s=t.name;if(t.type===W){if(e===i[s])return f}else if(t.type===j){if(!!e===i.hasAttribute(s))return f}else if(t.type===B&&i.getAttribute(s)===e+"")return f;return((t,e=L)=>{t._$AH=e;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(t),e}});export{P as live};export default null;
//# sourceMappingURL=/sm/90dcc3b3366c6b13fd8a1cd744ce37e7072391d528cc0835cfbceab06b99c5ba.map