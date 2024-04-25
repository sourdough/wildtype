/* https://unpkg.com/@lit/context@1.1.1/lib/controllers/context-provider.js?module */ import { ContextRequestEvent as t } from "../context-request-event.js";import { ValueNotifier as s } from "../value-notifier.js";
/**
                                                                                                                                                 * @license
                                                                                                                                                 * Copyright 2021 Google LLC
                                                                                                                                                 * SPDX-License-Identifier: BSD-3-Clause
                                                                                                                                                 */class e extends Event {constructor(t) {super("context-provider", { bubbles: !0, composed: !0 }), this.context = t;}}class i extends s {constructor(s, e, i) {var _this$host$addControl, _this$host;super(void 0 !== e.context ? e.initialValue : i), this.onContextRequest = t => {const s = t.composedPath()[0];t.context === this.context && s !== this.host && (t.stopPropagation(), this.addCallback(t.callback, s, t.subscribe));}, this.onProviderRequest = s => {const e = s.composedPath()[0];if (s.context !== this.context || e === this.host) return;const i = new Set();for (const [s, { consumerHost: e }] of this.subscriptions) i.has(s) || (i.add(s), e.dispatchEvent(new t(this.context, s, !0)));s.stopPropagation();}, this.host = s, void 0 !== e.context ? this.context = e.context : this.context = e, this.attachListeners(), (_this$host$addControl = (_this$host = this.host).addController) === null || _this$host$addControl === void 0 ? void 0 : _this$host$addControl.call(_this$host, this);}attachListeners() {this.host.addEventListener("context-request", this.onContextRequest), this.host.addEventListener("context-provider", this.onProviderRequest);}hostConnected() {this.host.dispatchEvent(new e(this.context));}}export { i as ContextProvider, e as ContextProviderEvent };