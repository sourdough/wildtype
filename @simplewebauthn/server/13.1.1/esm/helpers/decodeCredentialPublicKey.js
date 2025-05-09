/* https://unpkg.com/@simplewebauthn/server@13.1.1/esm/helpers/decodeCredentialPublicKey.js?module */ import { isoCBOR } from "./iso/index.js";
export function decodeCredentialPublicKey(publicKey) {
  return _decodeCredentialPublicKeyInternals.stubThis(isoCBOR.decodeFirst(publicKey));
}
/**
   * Make it possible to stub the return value during testing
   * @ignore Don't include this in docs output
   */
export const _decodeCredentialPublicKeyInternals = {
  stubThis: value => value };