/* https://cdn.jsdelivr.net/npm/lit-html@3.1.3/directives/guard.js/+esm */ /**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/lit-html@3.1.3/directives/guard.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.trustedTypes,s=e?e.createPolicy("lit-html",{createHTML:t=>t}):void 0,i="$lit$",n=`lit$${Math.random().toFixed(9).slice(2)}$`,r="?"+n,o=`<${r}>`,h=document,l=()=>h.createComment(""),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,a=t=>A(t)||"function"==typeof t?.[Symbol.iterator],_="[ \t\n\f\r]",c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,d=/-->/g,p=/>/g,u=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,f=/"/g,v=/^(?:script|style|textarea|title)$/i,y=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),x=new WeakMap,H=h.createTreeWalker(h,129);function N(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(e):e}const T=(t,e)=>{const s=t.length-1,r=[];let h,l=2===e?"<svg>":"",$=c;for(let e=0;e<s;e++){const s=t[e];let A,a,_=-1,y=0;for(;y<s.length&&($.lastIndex=y,a=$.exec(s),null!==a);)y=$.lastIndex,$===c?"!--"===a[1]?$=d:void 0!==a[1]?$=p:void 0!==a[2]?(v.test(a[2])&&(h=RegExp("</"+a[2],"g")),$=u):void 0!==a[3]&&($=u):$===u?">"===a[0]?($=h??c,_=-1):void 0===a[1]?_=-2:(_=$.lastIndex-a[2].length,A=a[1],$=void 0===a[3]?u:'"'===a[3]?f:g):$===f||$===g?$=u:$===d||$===p?$=c:($=u,h=void 0);const m=$===u&&t[e+1].startsWith("/>")?" ":"";l+=$===c?s+o:_>=0?(r.push(A),s.slice(0,_)+i+s.slice(_)+n+m):s+n+(-2===_?e:m)}return[N(t,l+(t[s]||"<?>")+(2===e?"</svg>":"")),r]};class b{constructor({strings:t,_$litType$:s},o){let h;this.parts=[];let $=0,A=0;const a=t.length-1,_=this.parts,[c,d]=T(t,s);if(this.el=b.createElement(c,o),H.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(h=H.nextNode())&&_.length<a;){if(1===h.nodeType){if(h.hasAttributes())for(const t of h.getAttributeNames())if(t.endsWith(i)){const e=d[A++],s=h.getAttribute(t).split(n),i=/([.?@])?(.*)/.exec(e);_.push({type:1,index:$,name:i[2],strings:s,ctor:"."===i[1]?E:"?"===i[1]?I:"@"===i[1]?U:w}),h.removeAttribute(t)}else t.startsWith(n)&&(_.push({type:6,index:$}),h.removeAttribute(t));if(v.test(h.tagName)){const t=h.textContent.split(n),s=t.length-1;if(s>0){h.textContent=e?e.emptyScript:"";for(let e=0;e<s;e++)h.append(t[e],l()),H.nextNode(),_.push({type:2,index:++$});h.append(t[s],l())}}}else if(8===h.nodeType)if(h.data===r)_.push({type:2,index:$});else{let t=-1;for(;-1!==(t=h.data.indexOf(n,t+1));)_.push({type:7,index:$}),t+=n.length-1}$++}}static createElement(t,e){const s=h.createElement("template");return s.innerHTML=t,s}}function C(t,e,s=t,i){if(e===y)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=$(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=C(t,n._$AS(t,e.values),n,i)),e}class M{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??h).importNode(e,!0);H.currentNode=i;let n=H.nextNode(),r=0,o=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new S(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new R(n,this,t)),this._$AV.push(e),l=s[++o]}r!==l?.index&&(n=H.nextNode(),r++)}return H.currentNode=h,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class S{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),$(t)?t===m||null==t||""===t?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==y&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):a(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==m&&$(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=b.createElement(N(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new M(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=x.get(t.strings);return void 0===e&&x.set(t.strings,e=new b(t)),e}k(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new S(this.S(l()),this.S(l()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class w{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=C(this,t,e,0),r=!$(t)||t!==this._$AH&&t!==y,r&&(this._$AH=t);else{const i=t;let o,h;for(t=n[0],o=0;o<n.length-1;o++)h=C(this,i[s+o],e,o),h===y&&(h=this._$AH[o]),r||=!$(h)||h!==this._$AH[o],h===m?t=m:t!==m&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}r&&!i&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class E extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}class I extends w{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}}class U extends w{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??m)===y)return;const s=this._$AH,i=t===m&&s!==m||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==m&&(s===m||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class R{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const B=t.litHtmlPolyfillSupport;B?.(b,S),(t.litHtmlVersions??=[]).push("3.1.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=t=>(...e)=>({_$litDirective$:t,values:e});class j{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D={},L=W(class extends j{constructor(){super(...arguments),this.ot=D}render(t,e){return e()}update(t,[e,s]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((t,e)=>t===this.ot[e])))return y}else if(this.ot===e)return y;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,s)}});export{L as guard};export default null;
//# sourceMappingURL=/sm/3511eee6f73fa213480656bb39bf923b4a74f04fbd89205530f651207088124c.map