/* https://unpkg.com/@lit/context@1.1.4/lib/context-request-event.js?module */ /**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s extends Event {constructor(s, t, e, o) {super("context-request", { bubbles: !0, composed: !0 }), this.context = s, this.contextTarget = t, this.callback = e, this.subscribe = o !== null && o !== void 0 ? o : !1;}}export { s as ContextRequestEvent };