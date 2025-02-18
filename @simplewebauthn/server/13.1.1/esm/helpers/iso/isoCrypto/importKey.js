/* https://unpkg.com/@simplewebauthn/server@13.1.1/esm/helpers/iso/isoCrypto/importKey.js */ import { getWebCrypto } from "./getWebCrypto.js";
export async function importKey(opts) {
    const WebCrypto = await getWebCrypto();
    const { keyData, algorithm } = opts;
    return WebCrypto.subtle.importKey('jwk', keyData, algorithm, false, [
        'verify',
    ]);
}
