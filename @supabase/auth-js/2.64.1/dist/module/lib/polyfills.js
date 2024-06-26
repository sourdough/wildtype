/* https://unpkg.com/@supabase/auth-js@2.64.1/dist/module/lib/polyfills.js?module */ /**
 * https://mathiasbynens.be/notes/globalthis
 */
export function polyfillGlobalThis() {
  if (typeof globalThis === 'object')
  return;
  try {
    Object.defineProperty(Object.prototype, '__magic__', {
      get: function () {
        return this;
      },
      configurable: true });

    // @ts-expect-error 'Allow access to magic'
    __magic__.globalThis = __magic__;
    // @ts-expect-error 'Allow access to magic'
    delete Object.prototype.__magic__;
  }
  catch (e) {
    if (typeof self !== 'undefined') {
      // @ts-expect-error 'Allow access to globals'
      self.globalThis = self;
    }
  }
}