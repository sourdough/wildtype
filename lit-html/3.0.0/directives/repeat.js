/* https://cdn.jsdelivr.net/npm/lit-html@3.0.0/directives/repeat.js/+esm */ /**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lit-html@3.0.0/directives/repeat.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.trustedTypes,s=e?e.createPolicy("lit-html",{createHTML:t=>t}):void 0,i="$lit$",n=`lit$${(Math.random()+"").slice(9)}$`,o="?"+n,r=`<${o}>`,h=document,l=()=>h.createComment(""),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,_=t=>A(t)||"function"==typeof t?.[Symbol.iterator],c="[ \t\n\f\r]",a=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,d=/-->/g,u=/>/g,p=RegExp(`>|${c}(?:([^\\s"'>=/]+)(${c}*=${c}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),f=/'/g,g=/"/g,v=/^(?:script|style|textarea|title)$/i,m=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),x=new WeakMap,H=h.createTreeWalker(h,129);function N(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const T=(t,e)=>{const s=t.length-1,o=[];let h,l=2===e?"<svg>":"",$=a;for(let e=0;e<s;e++){const s=t[e];let A,_,c=-1,m=0;for(;m<s.length&&($.lastIndex=m,_=$.exec(s),null!==_);)m=$.lastIndex,$===a?"!--"===_[1]?$=d:void 0!==_[1]?$=u:void 0!==_[2]?(v.test(_[2])&&(h=RegExp("</"+_[2],"g")),$=p):void 0!==_[3]&&($=p):$===p?">"===_[0]?($=h??a,c=-1):void 0===_[1]?c=-2:(c=$.lastIndex-_[2].length,A=_[1],$=void 0===_[3]?p:'"'===_[3]?g:f):$===g||$===f?$=p:$===d||$===u?$=a:($=p,h=void 0);const y=$===p&&t[e+1].startsWith("/>")?" ":"";l+=$===a?s+r:c>=0?(o.push(A),s.slice(0,c)+i+s.slice(c)+n+y):s+n+(-2===c?e:y)}return[N(t,l+(t[s]||"<?>")+(2===e?"</svg>":"")),o]};class b{constructor({strings:t,_$litType$:s},r){let h;this.parts=[];let $=0,A=0;const _=t.length-1,c=this.parts,[a,d]=T(t,s);if(this.el=b.createElement(a,r),H.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(h=H.nextNode())&&c.length<_;){if(1===h.nodeType){if(h.hasAttributes())for(const t of h.getAttributeNames())if(t.endsWith(i)){const e=d[A++],s=h.getAttribute(t).split(n),i=/([.?@])?(.*)/.exec(e);c.push({type:1,index:$,name:i[2],strings:s,ctor:"."===i[1]?B:"?"===i[1]?I:"@"===i[1]?w:S}),h.removeAttribute(t)}else t.startsWith(n)&&(c.push({type:6,index:$}),h.removeAttribute(t));if(v.test(h.tagName)){const t=h.textContent.split(n),s=t.length-1;if(s>0){h.textContent=e?e.emptyScript:"";for(let e=0;e<s;e++)h.append(t[e],l()),H.nextNode(),c.push({type:2,index:++$});h.append(t[s],l())}}}else if(8===h.nodeType)if(h.data===o)c.push({type:2,index:$});else{let t=-1;for(;-1!==(t=h.data.indexOf(n,t+1));)c.push({type:7,index:$}),t+=n.length-1}$++}}static createElement(t,e){const s=h.createElement("template");return s.innerHTML=t,s}}function M(t,e,s=t,i){if(e===m)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const o=$(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=M(t,n._$AS(t,e.values),n,i)),e}class C{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??h).importNode(e,!0);H.currentNode=i;let n=H.nextNode(),o=0,r=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new E(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new U(n,this,t)),this._$AV.push(e),l=s[++r]}o!==l?.index&&(n=H.nextNode(),o++)}return H.currentNode=h,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class E{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),$(t)?t===y||null==t||""===t?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==m&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):_(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==y&&$(this._$AH)?this._$AA.nextSibling.data=t:this.$(h.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=b.createElement(N(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new C(i,this),s=t.u(this.options);t.p(e),this.$(s),this._$AH=t}}_$AC(t){let e=x.get(t.strings);return void 0===e&&x.set(t.strings,e=new b(t)),e}T(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new E(this.k(l()),this.k(l()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class S{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=M(this,t,e,0),o=!$(t)||t!==this._$AH&&t!==m,o&&(this._$AH=t);else{const i=t;let r,h;for(t=n[0],r=0;r<n.length-1;r++)h=M(this,i[s+r],e,r),h===m&&(h=this._$AH[r]),o||=!$(h)||h!==this._$AH[r],h===y?t=y:t!==y&&(t+=(h??"")+n[r+1]),this._$AH[r]=h}o&&!i&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class B extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class I extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class w extends S{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??y)===m)return;const s=this._$AH,i=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==y&&(s===y||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class U{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const R={S:i,A:n,P:o,C:1,M:T,L:C,R:_,V:M,D:E,I:S,H:I,N:w,U:B,B:U},P=t.litHtmlPolyfillSupport;P?.(b,E),(t.litHtmlVersions??=[]).push("3.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},D=t=>(...e)=>({_$litDirective$:t,values:e});class k{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:O}=R,V=()=>document.createComment(""),W=(t,e,s)=>{const i=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=i.insertBefore(V(),n),o=i.insertBefore(V(),n);s=new O(e,o,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,r=o!==t;if(r){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==n||r){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,n),t=e}}}return s},j=(t,e,s=t)=>(t._$AI(e,s),t),z={},Z=(t,e=z)=>t._$AH=e,Q=t=>t._$AH,Y=t=>{t._$AP?.(!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=(t,e,s)=>{const i=new Map;for(let n=e;n<=s;n++)i.set(t[n],n);return i},F=D(class extends k{constructor(t){if(super(t),t.type!==L.CHILD)throw Error("repeat() can only be used in text expressions")}ht(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const n=[],o=[];let r=0;for(const e of t)n[r]=i?i(e,r):r,o[r]=s(e,r),r++;return{values:o,keys:n}}render(t,e,s){return this.ht(t,e,s).values}update(t,[e,s,i]){const n=Q(t),{values:o,keys:r}=this.ht(e,s,i);if(!Array.isArray(n))return this.dt=r,o;const h=this.dt??=[],l=[];let $,A,_=0,c=n.length-1,a=0,d=o.length-1;for(;_<=c&&a<=d;)if(null===n[_])_++;else if(null===n[c])c--;else if(h[_]===r[a])l[a]=j(n[_],o[a]),_++,a++;else if(h[c]===r[d])l[d]=j(n[c],o[d]),c--,d--;else if(h[_]===r[d])l[d]=j(n[_],o[d]),W(t,l[d+1],n[_]),_++,d--;else if(h[c]===r[a])l[a]=j(n[c],o[a]),W(t,n[_],n[c]),c--,a++;else if(void 0===$&&($=q(r,a,d),A=q(h,_,c)),$.has(h[_]))if($.has(h[c])){const e=A.get(r[a]),s=void 0!==e?n[e]:null;if(null===s){const e=W(t,n[_]);j(e,o[a]),l[a]=e}else l[a]=j(s,o[a]),W(t,n[_],s),n[e]=null;a++}else Y(n[c]),c--;else Y(n[_]),_++;for(;a<=d;){const e=W(t,l[d+1]);j(e,o[a]),l[a++]=e}for(;_<=c;){const t=n[_++];null!==t&&Y(t)}return this.dt=r,Z(t,l),m}});export{F as repeat};export default null;
//# sourceMappingURL=/sm/b86c8a3e5dab16613ac36c36eff5de753f96a20a0fbaf14556a9a627791ea38c.map