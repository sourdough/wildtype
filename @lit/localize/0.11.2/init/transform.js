/* https://unpkg.com/@lit/localize@0.11.2/init/transform.js?module */ /**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { _installMsgImplementation } from "../lit-localize.js";
import { defaultMsg } from "../internal/default-msg.js";
/**
                                                                 * Set configuration parameters for lit-localize when in transform mode. Returns
                                                                 * an object with function:
                                                                 *
                                                                 * - `getLocale`: Return the active locale code.
                                                                 *
                                                                 * Throws if called more than once.
                                                                 */
export const configureTransformLocalization = config => {
  _installMsgImplementation(defaultMsg);
  const sourceLocale = config.sourceLocale;
  return {
    getLocale: () => sourceLocale };

};