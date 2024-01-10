/* https://cdn.jsdelivr.net/npm/lit-html@3.1.1/directives/unsafe-svg.js/+esm */ /**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lit-html@3.1.1/directives/unsafe-svg.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=2;class e{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis,i=s.trustedTypes,n=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,r="$lit$",o=`lit$${(Math.random()+"").slice(9)}$`,h="?"+o,l=`<${h}>`,$=document,c=()=>$.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,_="[ \t\n\f\r]",d=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,u=/-->/g,p=/>/g,g=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,f=/"/g,m=/^(?:script|style|textarea|title)$/i,y=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),H=new WeakMap,N=$.createTreeWalker($,129);function T(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==n?n.createHTML(e):e}const b=(t,e)=>{const s=t.length-1,i=[];let n,h=2===e?"<svg>":"",$=d;for(let e=0;e<s;e++){const s=t[e];let c,a,A=-1,_=0;for(;_<s.length&&($.lastIndex=_,a=$.exec(s),null!==a);)_=$.lastIndex,$===d?"!--"===a[1]?$=u:void 0!==a[1]?$=p:void 0!==a[2]?(m.test(a[2])&&(n=RegExp("</"+a[2],"g")),$=g):void 0!==a[3]&&($=g):$===g?">"===a[0]?($=n??d,A=-1):void 0===a[1]?A=-2:(A=$.lastIndex-a[2].length,c=a[1],$=void 0===a[3]?g:'"'===a[3]?f:v):$===f||$===v?$=g:$===u||$===p?$=d:($=g,n=void 0);const y=$===g&&t[e+1].startsWith("/>")?" ":"";h+=$===d?s+l:A>=0?(i.push(c),s.slice(0,A)+r+s.slice(A)+o+y):s+o+(-2===A?e:y)}return[T(t,h+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class M{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let l=0,$=0;const a=t.length-1,A=this.parts,[_,d]=b(t,e);if(this.el=M.createElement(_,s),N.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=N.nextNode())&&A.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(r)){const e=d[$++],s=n.getAttribute(t).split(o),i=/([.?@])?(.*)/.exec(e);A.push({type:1,index:l,name:i[2],strings:s,ctor:"."===i[1]?I:"?"===i[1]?U:"@"===i[1]?O:E}),n.removeAttribute(t)}else t.startsWith(o)&&(A.push({type:6,index:l}),n.removeAttribute(t));if(m.test(n.tagName)){const t=n.textContent.split(o),e=t.length-1;if(e>0){n.textContent=i?i.emptyScript:"";for(let s=0;s<e;s++)n.append(t[s],c()),N.nextNode(),A.push({type:2,index:++l});n.append(t[e],c())}}}else if(8===n.nodeType)if(n.data===h)A.push({type:2,index:l});else{let t=-1;for(;-1!==(t=n.data.indexOf(o,t+1));)A.push({type:7,index:l}),t+=o.length-1}l++}}static createElement(t,e){const s=$.createElement("template");return s.innerHTML=t,s}}function C(t,e,s=t,i){if(e===y)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=a(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=C(t,n._$AS(t,e.values),n,i)),e}class w{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??$).importNode(e,!0);N.currentNode=i;let n=N.nextNode(),r=0,o=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new S(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new R(n,this,t)),this._$AV.push(e),h=s[++o]}r!==h?.index&&(n=N.nextNode(),r++)}return N.currentNode=$,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class S{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),a(t)?t===x||null==t||""===t?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==y&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>A(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==x&&a(this._$AH)?this._$AA.nextSibling.data=t:this.$($.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=M.createElement(T(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new w(i,this),s=t.u(this.options);t.p(e),this.$(s),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new M(t)),e}T(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new S(this.k(c()),this.k(c()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class E{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=C(this,t,e,0),r=!a(t)||t!==this._$AH&&t!==y,r&&(this._$AH=t);else{const i=t;let o,h;for(t=n[0],o=0;o<n.length-1;o++)h=C(this,i[s+o],e,o),h===y&&(h=this._$AH[o]),r||=!a(h)||h!==this._$AH[o],h===x?t=x:t!==x&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}r&&!i&&this.O(t)}O(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class I extends E{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===x?void 0:t}}class U extends E{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}}class O extends E{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??x)===y)return;const s=this._$AH,i=t===x&&s!==x||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==x&&(s===x||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class R{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const k=s.litHtmlPolyfillSupport;k?.(M,S),(s.litHtmlVersions??=[]).push("3.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class B extends e{constructor(e){if(super(e),this.et=x,e.type!==t)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===x||null==t)return this.vt=void 0,this.et=t;if(t===y)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}B.directiveName="unsafeHTML",B.resultType=1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class L extends B{}L.directiveName="unsafeSVG",L.resultType=2;const V=(t=>(...e)=>({_$litDirective$:t,values:e}))(L);export{V as unsafeSVG};export default null;
//# sourceMappingURL=/sm/7503acf1554f9f64bca83a4e1e23741b508bec589c38437674f4bdfa3dac1579.map