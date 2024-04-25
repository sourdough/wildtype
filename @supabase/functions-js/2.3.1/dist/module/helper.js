/* https://unpkg.com/@supabase/functions-js@2.3.1/dist/module/helper.js?module */ export const resolveFetch = customFetch => {
  let _fetch;
  if (customFetch) {
    _fetch = customFetch;
  } else
  if (typeof fetch === 'undefined') {
    _fetch = (...args) => import("https://unpkg.com/@supabase/node-fetch@^2.6.14?module").then(({ default: fetch }) => fetch(...args));
  } else
  {
    _fetch = fetch;
  }
  return (...args) => _fetch(...args);
};