/* https://unpkg.com/lit-html@2.1.1/directives/choose.js?module */ /**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = (o, r, n) => {for (const n of r) if (n[0] === o) return (0, n[1])();return null == n ? void 0 : n();};export { o as choose };