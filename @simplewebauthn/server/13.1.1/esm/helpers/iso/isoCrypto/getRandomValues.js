/* https://unpkg.com/@simplewebauthn/server@13.1.1/esm/helpers/iso/isoCrypto/getRandomValues.js?module */ import { getWebCrypto } from "./getWebCrypto.js";
/**
 * Fill up the provided bytes array with random bytes equal to its length.
 *
 * @returns the same bytes array passed into the method
 */
export async function getRandomValues(array) {
    const WebCrypto = await getWebCrypto();
    WebCrypto.getRandomValues(array);
    return array;
}
