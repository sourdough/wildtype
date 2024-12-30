/* https://cdn.jsdelivr.net/npm/lit-html@3.2.1/directives/async-append.js/+esm */ /**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.37.0.
 * Original file: /npm/lit-html@3.2.1/directives/async-append.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class s{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=globalThis,n=i.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,r="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,$="?"+h,c=`<${$}>`,_=document,l=()=>_.createComment(""),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,a=t=>d(t)||"function"==typeof t?.[Symbol.iterator],u="[ \t\n\f\r]",p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,g=/>/g,v=RegExp(`>|${u}(?:([^\\s"'>=/]+)(${u}*=${u}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),m=/'/g,y=/"/g,C=/^(?:script|style|textarea|title)$/i,x=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),N=new WeakMap,T=_.createTreeWalker(_,129);function M(t,e){if(!d(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==o?o.createHTML(e):e}const b=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":3===e?"<math>":"",$=p;for(let e=0;e<s;e++){const s=t[e];let _,l,A=-1,d=0;for(;d<s.length&&($.lastIndex=d,l=$.exec(s),null!==l);)d=$.lastIndex,$===p?"!--"===l[1]?$=f:void 0!==l[1]?$=g:void 0!==l[2]?(C.test(l[2])&&(n=RegExp("</"+l[2],"g")),$=v):void 0!==l[3]&&($=v):$===v?">"===l[0]?($=n??p,A=-1):void 0===l[1]?A=-2:(A=$.lastIndex-l[2].length,_=l[1],$=void 0===l[3]?v:'"'===l[3]?y:m):$===y||$===m?$=v:$===f||$===g?$=p:($=v,n=void 0);const a=$===v&&t[e+1].startsWith("/>")?" ":"";o+=$===p?s+c:A>=0?(i.push(_),s.slice(0,A)+r+s.slice(A)+h+a):s+h+(-2===A?e:a)}return[M(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class w{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,c=0;const _=t.length-1,A=this.parts,[d,a]=b(t,e);if(this.el=w.createElement(d,s),T.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=T.nextNode())&&A.length<_;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(r)){const e=a[c++],s=i.getAttribute(t).split(h),n=/([.?@])?(.*)/.exec(e);A.push({type:1,index:o,name:n[2],strings:s,ctor:"."===n[1]?B:"?"===n[1]?R:"@"===n[1]?O:U}),i.removeAttribute(t)}else t.startsWith(h)&&(A.push({type:6,index:o}),i.removeAttribute(t));if(C.test(i.tagName)){const t=i.textContent.split(h),e=t.length-1;if(e>0){i.textContent=n?n.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],l()),T.nextNode(),A.push({type:2,index:++o});i.append(t[e],l())}}}else if(8===i.nodeType)if(i.data===$)A.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(h,t+1));)A.push({type:7,index:o}),t+=h.length-1}o++}}static createElement(t,e){const s=_.createElement("template");return s.innerHTML=t,s}}function E(t,e,s=t,i){if(e===x)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const o=A(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=E(t,n._$AS(t,e.values),n,i)),e}class I{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??_).importNode(e,!0);T.currentNode=i;let n=T.nextNode(),o=0,r=0,h=s[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new S(n,n.nextSibling,this,t):1===h.type?e=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(e=new P(n,this,t)),this._$AV.push(e),h=s[++r]}o!==h?.index&&(n=T.nextNode(),o++)}return T.currentNode=_,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class S{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),A(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==x&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):a(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==H&&A(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=w.createElement(M(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new I(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new w(t)),e}k(t){d(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new S(this.O(l()),this.O(l()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class U{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=H}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=E(this,t,e,0),o=!A(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const i=t;let r,h;for(t=n[0],r=0;r<n.length-1;r++)h=E(this,i[s+r],e,r),h===x&&(h=this._$AH[r]),o||=!A(h)||h!==this._$AH[r],h===H?t=H:t!==H&&(t+=(h??"")+n[r+1]),this._$AH[r]=h}o&&!i&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class B extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}class R extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}}class O extends U{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??H)===x)return;const s=this._$AH,i=t===H&&s!==H||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==H&&(s===H||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class P{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const L={M:r,P:h,A:$,C:1,L:b,R:I,D:a,V:E,I:S,H:U,N:R,U:O,B:B,F:P},V=i.litHtmlPolyfillSupport;V?.(w,S),(i.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:D}=L,k=t=>void 0===t.strings,W=()=>document.createComment(""),Z=(t,e,s)=>{const i=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=i.insertBefore(W(),n),o=i.insertBefore(W(),n);s=new D(e,o,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,r=o!==t;if(r){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==n||r){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,n),t=e}}}return s},j=(t,e,s=t)=>(t._$AI(e,s),t),Y=t=>{t._$AR()};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=(t,e)=>{const s=t._$AN;if(void 0===s)return!1;for(const t of s)t._$AO?.(e,!1),q(t,e);return!0},z=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===s?.size)},K=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),F(e)}};function X(t){void 0!==this._$AN?(z(this),this._$AM=t,K(this)):this._$AM=t}function J(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)q(i[t],!1),z(i[t]);else null!=i&&(q(i,!1),z(i));else q(this,t)}const F=e=>{e.type==t.CHILD&&(e._$AP??=J,e._$AQ??=X)};class Q extends s{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),K(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(q(this,t),z(this))}setValue(t){if(k(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=async(t,e)=>{for await(const s of t)if(!1===await e(s))return};class tt{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class et{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((t=>this.q=t))}resume(){this.q?.(),this.Z=this.q=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class st extends Q{constructor(){super(...arguments),this._$CK=new tt(this),this._$CX=new et}render(t,e){return x}update(t,[e,s]){if(this.isConnected||this.disconnected(),e===this._$CJ)return x;this._$CJ=e;let i=0;const{_$CK:n,_$CX:o}=this;return G(e,(async t=>{for(;o.get();)await o.get();const r=n.deref();if(void 0!==r){if(r._$CJ!==e)return!1;void 0!==s&&(t=s(t,i)),r.commitValue(t,i),i++}return!0})),x}commitValue(t,e){this.setValue(t)}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=e(class extends st{constructor(e){if(super(e),e.type!==t.CHILD)throw Error("asyncAppend can only be used in child expressions")}update(t,e){return this._$Ctt=t,super.update(t,e)}commitValue(t,e){0===e&&Y(this._$Ctt);const s=Z(this._$Ctt);j(s,t)}});export{it as asyncAppend};export default null;
//# sourceMappingURL=/sm/a6903d5c11e0ead19ebf76961df01cb50d3908870b1752da9e2ae425dee17cde.map