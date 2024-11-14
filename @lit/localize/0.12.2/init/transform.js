/* https://cdn.jsdelivr.net/npm/@lit/localize@0.12.2/init/transform.js */ /**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { defaultMsg } from "../internal/default-msg.js";
import { _installMsgImplementation } from "./install.js";
/**
 * Set configuration parameters for lit-localize when in transform mode. Returns
 * an object with function:
 *
 * - `getLocale`: Return the active locale code.
 *
 * Throws if called more than once.
 */
export const configureTransformLocalization = (config) => {
    _installMsgImplementation(defaultMsg);
    const sourceLocale = config.sourceLocale;
    return {
        getLocale: () => sourceLocale,
    };
};
//# sourceMappingURL=transform.js.map