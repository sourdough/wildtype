/* https://cdn.jsdelivr.net/npm/lit-html@3.2.1/directives/cache.js/+esm */ /**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lit-html@3.2.1/directives/cache.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.trustedTypes,i=e?e.createPolicy("lit-html",{createHTML:t=>t}):void 0,s="$lit$",n=`lit$${Math.random().toFixed(9).slice(2)}$`,o="?"+n,r=`<${o}>`,h=document,l=()=>h.createComment(""),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,_=t=>A(t)||"function"==typeof t?.[Symbol.iterator],c="[ \t\n\f\r]",a=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,d=/-->/g,p=/>/g,u=RegExp(`>|${c}(?:([^\\s"'>=/]+)(${c}*=${c}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,f=/"/g,v=/^(?:script|style|textarea|title)$/i,m=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),x=new WeakMap,H=h.createTreeWalker(h,129);function N(t,e){if(!A(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==i?i.createHTML(e):e}const T=(t,e)=>{const i=t.length-1,o=[];let h,l=2===e?"<svg>":3===e?"<math>":"",$=a;for(let e=0;e<i;e++){const i=t[e];let A,_,c=-1,m=0;for(;m<i.length&&($.lastIndex=m,_=$.exec(i),null!==_);)m=$.lastIndex,$===a?"!--"===_[1]?$=d:void 0!==_[1]?$=p:void 0!==_[2]?(v.test(_[2])&&(h=RegExp("</"+_[2],"g")),$=u):void 0!==_[3]&&($=u):$===u?">"===_[0]?($=h??a,c=-1):void 0===_[1]?c=-2:(c=$.lastIndex-_[2].length,A=_[1],$=void 0===_[3]?u:'"'===_[3]?f:g):$===f||$===g?$=u:$===d||$===p?$=a:($=u,h=void 0);const y=$===u&&t[e+1].startsWith("/>")?" ":"";l+=$===a?i+r:c>=0?(o.push(A),i.slice(0,c)+s+i.slice(c)+n+y):i+n+(-2===c?e:y)}return[N(t,l+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class M{constructor({strings:t,_$litType$:i},r){let h;this.parts=[];let $=0,A=0;const _=t.length-1,c=this.parts,[a,d]=T(t,i);if(this.el=M.createElement(a,r),H.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(h=H.nextNode())&&c.length<_;){if(1===h.nodeType){if(h.hasAttributes())for(const t of h.getAttributeNames())if(t.endsWith(s)){const e=d[A++],i=h.getAttribute(t).split(n),s=/([.?@])?(.*)/.exec(e);c.push({type:1,index:$,name:s[2],strings:i,ctor:"."===s[1]?B:"?"===s[1]?I:"@"===s[1]?U:w}),h.removeAttribute(t)}else t.startsWith(n)&&(c.push({type:6,index:$}),h.removeAttribute(t));if(v.test(h.tagName)){const t=h.textContent.split(n),i=t.length-1;if(i>0){h.textContent=e?e.emptyScript:"";for(let e=0;e<i;e++)h.append(t[e],l()),H.nextNode(),c.push({type:2,index:++$});h.append(t[i],l())}}}else if(8===h.nodeType)if(h.data===o)c.push({type:2,index:$});else{let t=-1;for(;-1!==(t=h.data.indexOf(n,t+1));)c.push({type:7,index:$}),t+=n.length-1}$++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function b(t,e,i=t,s){if(e===m)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=$(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=b(t,n._$AS(t,e.values),n,s)),e}class C{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??h).importNode(e,!0);H.currentNode=s;let n=H.nextNode(),o=0,r=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new S(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new E(n,this,t)),this._$AV.push(e),l=i[++r]}o!==l?.index&&(n=H.nextNode(),o++)}return H.currentNode=h,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class S{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),$(t)?t===y||null==t||""===t?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==m&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):_(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&$(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=M.createElement(N(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new C(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=x.get(t.strings);return void 0===e&&x.set(t.strings,e=new M(t)),e}k(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new S(this.O(l()),this.O(l()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class w{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=b(this,t,e,0),o=!$(t)||t!==this._$AH&&t!==m,o&&(this._$AH=t);else{const s=t;let r,h;for(t=n[0],r=0;r<n.length-1;r++)h=b(this,s[i+r],e,r),h===m&&(h=this._$AH[r]),o||=!$(h)||h!==this._$AH[r],h===y?t=y:t!==y&&(t+=(h??"")+n[r+1]),this._$AH[r]=h}o&&!s&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class B extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class I extends w{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class U extends w{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??y)===m)return;const i=this._$AH,s=t===y&&i!==y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==y&&(i===y||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class E{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const P={M:s,P:n,A:o,C:1,L:T,R:C,D:_,V:b,I:S,H:w,N:I,U:U,B:B,F:E},R=t.litHtmlPolyfillSupport;R?.(M,S),(t.litHtmlVersions??=[]).push("3.2.1");const D=(t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new S(e.insertBefore(l(),t),t,void 0,i??{})}return n._$AI(t),n
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};const O=t=>(...e)=>({_$litDirective$:t,values:e});class W{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:L}=P,j=(t,e)=>void 0===e?void 0!==t?._$litType$:t?._$litType$===e,k=t=>null!=t?._$litType$?.h,V=()=>document.createComment(""),F=(t,e,i)=>{const s=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=s.insertBefore(V(),n),o=s.insertBefore(V(),n);i=new L(e,o,t,t.options)}else{const e=i._$AB.nextSibling,o=i._$AM,r=o!==t;if(r){let e;i._$AQ?.(t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==o._$AU&&i._$AP(e)}if(e!==n||r){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;s.insertBefore(t,n),t=e}}}return i},z={},Z=(t,e=z)=>t._$AH=e,Q=t=>t._$AH,q=t=>{t._$AR()};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=t=>k(t)?t._$litType$.h:t.strings,J=O(class extends W{constructor(t){super(t),this.et=new WeakMap}render(t){return[t]}update(t,[e]){const i=j(this.it)?G(this.it):null,s=j(e)?G(e):null;if(null!==i&&(null===s||i!==s)){const e=Q(t).pop();let s=this.et.get(i);if(void 0===s){const t=document.createDocumentFragment();s=D(y,t),s.setConnected(!1),this.et.set(i,s)}Z(s,[e]),F(s,void 0,e)}if(null!==s){if(null===i||i!==s){const e=this.et.get(s);if(void 0!==e){const i=Q(e).pop();q(t),F(t,void 0,i),Z(t,[i])}}this.it=e}else this.it=void 0;return this.render(e)}});export{J as cache};export default null;
//# sourceMappingURL=/sm/8dfae375e45e339d93bef50296320a3e99d2747ad7fb191e6a22a7950e1a935d.map