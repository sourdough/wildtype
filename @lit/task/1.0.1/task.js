/* https://unpkg.com/@lit/task@1.0.1/task.js */ import{notEqual as t}from"@lit/reactive-element";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},i=Symbol();class h{get taskComplete(){return this.t||(1===this.i?this.t=new Promise(((t,s)=>{this.o=t,this.h=s})):3===this.i?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,s,i){this.p=0,this.i=0,(this._=t).addController(this);const h="object"==typeof s?s:{task:s,args:i};this.v=h.task,this.j=h.args,this.m=h.argsEqual??r,this.k=h.onComplete,this.A=h.onError,this.autoRun=h.autoRun??!0,"initialValue"in h&&(this.u=h.initialValue,this.i=2,this.O=this.T?.())}hostUpdate(){!0===this.autoRun&&this.S()}hostUpdated(){"afterUpdate"===this.autoRun&&this.S()}T(){if(void 0===this.j)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),s=this.O;this.O=t,t===s||void 0===t||void 0!==s&&this.m(s,t)||await this.run(t)}async run(t){let s,h;t??=this.T(),this.O=t,1===this.i?this.q?.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this._.requestUpdate())):this._.requestUpdate();const r=++this.p;this.q=new AbortController;let e=!1;try{s=await this.v(t,{signal:this.q.signal})}catch(t){e=!0,h=t}if(this.p===r){if(s===i)this.i=0;else{if(!1===e){try{this.k?.(s)}catch{}this.i=2,this.o?.(s)}else{try{this.A?.(h)}catch{}this.i=3,this.h?.(h)}this.u=s,this.l=h}this._.requestUpdate()}}abort(t){1===this.i&&this.q?.abort(t)}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){switch(this.i){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.i)}}}const r=(s,i)=>s===i||s.length===i.length&&s.every(((s,h)=>!t(s,i[h])));export{h as Task,s as TaskStatus,i as initialState,r as shallowArrayEquals};
//# sourceMappingURL=task.js.map
