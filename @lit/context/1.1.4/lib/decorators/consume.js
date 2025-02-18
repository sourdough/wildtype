/* https://unpkg.com/@lit/context@1.1.4/lib/decorators/consume.js?module */ import { ContextConsumer as t } from "../controllers/context-consumer.js";
/**
                                                                                   * @license
                                                                                   * Copyright 2022 Google LLC
                                                                                   * SPDX-License-Identifier: BSD-3-Clause
                                                                                   */function c({ context: c, subscribe: e }) {return (o, n) => {"object" == typeof n ? n.addInitializer(function () {new t(this, { context: c, callback: t => {o.set.call(this, t);}, subscribe: e });}) : o.constructor.addInitializer(o => {new t(o, { context: c, callback: t => {o[n] = t;}, subscribe: e });});};}export { c as consume };