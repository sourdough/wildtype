/* https://cdn.jsdelivr.net/npm/lit-html@3.1.3/directives/ref.js/+esm */ /**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lit-html@3.1.3/directives/ref.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.trustedTypes,s=e?e.createPolicy("lit-html",{createHTML:t=>t}):void 0,i="$lit$",n=`lit$${Math.random().toFixed(9).slice(2)}$`,h="?"+n,o=`<${h}>`,r=document,l=()=>r.createComment(""),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,A=t=>c(t)||"function"==typeof t?.[Symbol.iterator],_="[ \t\n\f\r]",a=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,d=/-->/g,p=/>/g,u=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,f=/"/g,v=/^(?:script|style|textarea|title)$/i,m=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),H=new WeakMap,x=r.createTreeWalker(r,129);function N(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const T=(t,e)=>{const s=t.length-1,h=[];let r,l=2===e?"<svg>":"",$=a;for(let e=0;e<s;e++){const s=t[e];let c,A,_=-1,m=0;for(;m<s.length&&($.lastIndex=m,A=$.exec(s),null!==A);)m=$.lastIndex,$===a?"!--"===A[1]?$=d:void 0!==A[1]?$=p:void 0!==A[2]?(v.test(A[2])&&(r=RegExp("</"+A[2],"g")),$=u):void 0!==A[3]&&($=u):$===u?">"===A[0]?($=r??a,_=-1):void 0===A[1]?_=-2:(_=$.lastIndex-A[2].length,c=A[1],$=void 0===A[3]?u:'"'===A[3]?f:g):$===f||$===g?$=u:$===d||$===p?$=a:($=u,r=void 0);const y=$===u&&t[e+1].startsWith("/>")?" ":"";l+=$===a?s+o:_>=0?(h.push(c),s.slice(0,_)+i+s.slice(_)+n+y):s+n+(-2===_?e:y)}return[N(t,l+(t[s]||"<?>")+(2===e?"</svg>":"")),h]};class C{constructor({strings:t,_$litType$:s},o){let r;this.parts=[];let $=0,c=0;const A=t.length-1,_=this.parts,[a,d]=T(t,s);if(this.el=C.createElement(a,o),x.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=x.nextNode())&&_.length<A;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(i)){const e=d[c++],s=r.getAttribute(t).split(n),i=/([.?@])?(.*)/.exec(e);_.push({type:1,index:$,name:i[2],strings:s,ctor:"."===i[1]?w:"?"===i[1]?I:"@"===i[1]?U:S}),r.removeAttribute(t)}else t.startsWith(n)&&(_.push({type:6,index:$}),r.removeAttribute(t));if(v.test(r.tagName)){const t=r.textContent.split(n),s=t.length-1;if(s>0){r.textContent=e?e.emptyScript:"";for(let e=0;e<s;e++)r.append(t[e],l()),x.nextNode(),_.push({type:2,index:++$});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===h)_.push({type:2,index:$});else{let t=-1;for(;-1!==(t=r.data.indexOf(n,t+1));)_.push({type:7,index:$}),t+=n.length-1}$++}}static createElement(t,e){const s=r.createElement("template");return s.innerHTML=t,s}}function M(t,e,s=t,i){if(e===m)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const h=$(e)?void 0:e._$litDirective$;return n?.constructor!==h&&(n?._$AO?.(!1),void 0===h?n=void 0:(n=new h(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=M(t,n._$AS(t,e.values),n,i)),e}class b{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??r).importNode(e,!0);x.currentNode=i;let n=x.nextNode(),h=0,o=0,l=s[0];for(;void 0!==l;){if(h===l.index){let e;2===l.type?e=new E(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Y(n,this,t)),this._$AV.push(e),l=s[++o]}h!==l?.index&&(n=x.nextNode(),h++)}return x.currentNode=r,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class E{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),$(t)?t===y||null==t||""===t?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==m&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):A(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==y&&$(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=C.createElement(N(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new b(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new C(t)),e}k(t){c(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new E(this.S(l()),this.S(l()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class S{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}_$AI(t,e=this,s,i){const n=this.strings;let h=!1;if(void 0===n)t=M(this,t,e,0),h=!$(t)||t!==this._$AH&&t!==m,h&&(this._$AH=t);else{const i=t;let o,r;for(t=n[0],o=0;o<n.length-1;o++)r=M(this,i[s+o],e,o),r===m&&(r=this._$AH[o]),h||=!$(r)||r!==this._$AH[o],r===y?t=y:t!==y&&(t+=(r??"")+n[o+1]),this._$AH[o]=r}h&&!i&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class w extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class I extends S{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class U extends S{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??y)===m)return;const s=this._$AH,i=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==y&&(s===y||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const R=t.litHtmlPolyfillSupport;R?.(C,E),(t.litHtmlVersions??=[]).push("3.1.3");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=t=>void 0===t.strings
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const L={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},k=t=>(...e)=>({_$litDirective$:t,values:e});class O{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=(t,e)=>{const s=t._$AN;if(void 0===s)return!1;for(const t of s)t._$AO?.(e,!1),P(t,e);return!0},W=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===s?.size)},D=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),z(e)}};function V(t){void 0!==this._$AN?(W(this),this._$AM=t,D(this)):this._$AM=t}function j(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=s;t<i.length;t++)P(i[t],!1),W(i[t]);else null!=i&&(P(i,!1),W(i));else P(this,t)}const z=t=>{t.type==L.CHILD&&(t._$AP??=j,t._$AQ??=V)};class Z extends O{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),D(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(P(this,t),W(this))}setValue(t){if(B(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=()=>new Q;class Q{}const q=new WeakMap,G=k(class extends Z{render(t){return y}update(t,[e]){const s=e!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),y}rt(t){if("function"==typeof this.Y){const e=this.ht??globalThis;let s=q.get(e);void 0===s&&(s=new WeakMap,q.set(e,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?q.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{F as createRef,G as ref};export default null;
//# sourceMappingURL=/sm/d4940b1baf5c9efaedf157de493abeca240c69694b3a55954a46571cd417ba3c.map