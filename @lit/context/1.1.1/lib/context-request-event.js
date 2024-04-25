/* https://unpkg.com/@lit/context@1.1.1/lib/context-request-event.js?module */ /**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s extends Event {constructor(s, t, e) {super("context-request", { bubbles: !0, composed: !0 }), this.context = s, this.callback = t, this.subscribe = e !== null && e !== void 0 ? e : !1;}}export { s as ContextRequestEvent };