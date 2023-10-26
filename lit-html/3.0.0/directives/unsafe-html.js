/* https://cdn.jsdelivr.net/npm/lit-html@3.0.0/directives/unsafe-html.js/+esm */ /**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lit-html@3.0.0/directives/unsafe-html.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.trustedTypes,s=e?e.createPolicy("lit-html",{createHTML:t=>t}):void 0,i="$lit$",n=`lit$${(Math.random()+"").slice(9)}$`,r="?"+n,o=`<${r}>`,h=document,l=()=>h.createComment(""),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,A=t=>c(t)||"function"==typeof t?.[Symbol.iterator],a="[ \t\n\f\r]",_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,d=/-->/g,u=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,v=/"/g,f=/^(?:script|style|textarea|title)$/i,m=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),H=new WeakMap,x=h.createTreeWalker(h,129);function T(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const N=(t,e)=>{const s=t.length-1,r=[];let h,l=2===e?"<svg>":"",$=_;for(let e=0;e<s;e++){const s=t[e];let c,A,a=-1,m=0;for(;m<s.length&&($.lastIndex=m,A=$.exec(s),null!==A);)m=$.lastIndex,$===_?"!--"===A[1]?$=d:void 0!==A[1]?$=u:void 0!==A[2]?(f.test(A[2])&&(h=RegExp("</"+A[2],"g")),$=p):void 0!==A[3]&&($=p):$===p?">"===A[0]?($=h??_,a=-1):void 0===A[1]?a=-2:(a=$.lastIndex-A[2].length,c=A[1],$=void 0===A[3]?p:'"'===A[3]?v:g):$===v||$===g?$=p:$===d||$===u?$=_:($=p,h=void 0);const y=$===p&&t[e+1].startsWith("/>")?" ":"";l+=$===_?s+o:a>=0?(r.push(c),s.slice(0,a)+i+s.slice(a)+n+y):s+n+(-2===a?e:y)}return[T(t,l+(t[s]||"<?>")+(2===e?"</svg>":"")),r]};class E{constructor({strings:t,_$litType$:s},o){let h;this.parts=[];let $=0,c=0;const A=t.length-1,a=this.parts,[_,d]=N(t,s);if(this.el=E.createElement(_,o),x.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(h=x.nextNode())&&a.length<A;){if(1===h.nodeType){if(h.hasAttributes())for(const t of h.getAttributeNames())if(t.endsWith(i)){const e=d[c++],s=h.getAttribute(t).split(n),i=/([.?@])?(.*)/.exec(e);a.push({type:1,index:$,name:i[2],strings:s,ctor:"."===i[1]?I:"?"===i[1]?S:"@"===i[1]?U:w}),h.removeAttribute(t)}else t.startsWith(n)&&(a.push({type:6,index:$}),h.removeAttribute(t));if(f.test(h.tagName)){const t=h.textContent.split(n),s=t.length-1;if(s>0){h.textContent=e?e.emptyScript:"";for(let e=0;e<s;e++)h.append(t[e],l()),x.nextNode(),a.push({type:2,index:++$});h.append(t[s],l())}}}else if(8===h.nodeType)if(h.data===r)a.push({type:2,index:$});else{let t=-1;for(;-1!==(t=h.data.indexOf(n,t+1));)a.push({type:7,index:$}),t+=n.length-1}$++}}static createElement(t,e){const s=h.createElement("template");return s.innerHTML=t,s}}function M(t,e,s=t,i){if(e===m)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=$(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=M(t,n._$AS(t,e.values),n,i)),e}class b{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??h).importNode(e,!0);x.currentNode=i;let n=x.nextNode(),r=0,o=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new C(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new L(n,this,t)),this._$AV.push(e),l=s[++o]}r!==l?.index&&(n=x.nextNode(),r++)}return x.currentNode=h,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class C{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),$(t)?t===y||null==t||""===t?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==m&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):A(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==y&&$(this._$AH)?this._$AA.nextSibling.data=t:this.$(h.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=E.createElement(T(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new b(i,this),s=t.u(this.options);t.p(e),this.$(s),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new E(t)),e}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new C(this.k(l()),this.k(l()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class w{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=M(this,t,e,0),r=!$(t)||t!==this._$AH&&t!==m,r&&(this._$AH=t);else{const i=t;let o,h;for(t=n[0],o=0;o<n.length-1;o++)h=M(this,i[s+o],e,o),h===m&&(h=this._$AH[o]),r||=!$(h)||h!==this._$AH[o],h===y?t=y:t!==y&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}r&&!i&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class I extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class S extends w{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class U extends w{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??y)===m)return;const s=this._$AH,i=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==y&&(s===y||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const R=t.litHtmlPolyfillSupport;R?.(E,C),(t.litHtmlVersions??=[]).push("3.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},D=t=>(...e)=>({_$litDirective$:t,values:e});class P{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class k extends P{constructor(t){if(super(t),this.et=y,t.type!==B.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||null==t)return this.vt=void 0,this.et=t;if(t===m)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}k.directiveName="unsafeHTML",k.resultType=1;const O=D(k);export{k as UnsafeHTMLDirective,O as unsafeHTML};export default null;
//# sourceMappingURL=/sm/718ec8ce000376312b2c93143d68373a13e2cb9060b454659beb7c785c9038e5.map