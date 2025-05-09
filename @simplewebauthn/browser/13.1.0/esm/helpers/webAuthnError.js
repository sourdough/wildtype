/* https://unpkg.com/@simplewebauthn/browser@13.1.0/esm/helpers/webAuthnError.js?module */ /**
 * A custom Error used to return a more nuanced error detailing _why_ one of the eight documented
 * errors in the spec was raised after calling `navigator.credentials.create()` or
 * `navigator.credentials.get()`:
 *
 * - `AbortError`
 * - `ConstraintError`
 * - `InvalidStateError`
 * - `NotAllowedError`
 * - `NotSupportedError`
 * - `SecurityError`
 * - `TypeError`
 * - `UnknownError`
 *
 * Error messages were determined through investigation of the spec to determine under which
 * scenarios a given error would be raised.
 */
export class WebAuthnError extends Error {
    constructor({ message, code, cause, name, }) {
        // @ts-ignore: help Rollup understand that `cause` is okay to set
        super(message, { cause });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name ?? cause.name;
        this.code = code;
    }
}
