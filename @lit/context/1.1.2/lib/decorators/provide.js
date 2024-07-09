/* https://unpkg.com/@lit/context@1.1.2/lib/decorators/provide.js?module */ import { ContextProvider as t } from "../controllers/context-provider.js";
/**
                                                                                   * @license
                                                                                   * Copyright 2017 Google LLC
                                                                                   * SPDX-License-Identifier: BSD-3-Clause
                                                                                   */function e({ context: e }) {return (n, r) => {const i = new WeakMap();if ("object" == typeof r) return r.addInitializer(function () {i.set(this, new t(this, { context: e }));}), { get() {return n.get.call(this);}, set(t) {var _i$get;return (_i$get = i.get(this)) !== null && _i$get !== void 0 && _i$get.setValue(t), n.set.call(this, t);}, init(t) {var _i$get2;return (_i$get2 = i.get(this)) !== null && _i$get2 !== void 0 && _i$get2.setValue(t), t;} };{n.constructor.addInitializer(n => {i.set(n, new t(n, { context: e }));});const o = Object.getOwnPropertyDescriptor(n, r);let s;if (void 0 === o) {const t = new WeakMap();s = { get() {return t.get(this);}, set(e) {i.get(this).setValue(e), t.set(this, e);}, configurable: !0, enumerable: !0 };} else {const t = o.set;s = { ...o, set(e) {i.get(this).setValue(e), t === null || t === void 0 ? void 0 : t.call(this, e);} };}return void Object.defineProperty(n, r, s);}};}export { e as provide };