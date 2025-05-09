/* https://unpkg.com/@simplewebauthn/browser@13.1.0/esm/helpers/browserSupportsWebAuthn.js?module */ /**
 * Determine if the browser is capable of Webauthn
 */
export function browserSupportsWebAuthn() {
  return _browserSupportsWebAuthnInternals.stubThis((globalThis === null || globalThis === void 0 ? void 0 : globalThis.PublicKeyCredential) !== undefined &&
  typeof globalThis.PublicKeyCredential === 'function');
}
/**
   * Make it possible to stub the return value during testing
   * @ignore Don't include this in docs output
   */
export const _browserSupportsWebAuthnInternals = {
  stubThis: value => value };