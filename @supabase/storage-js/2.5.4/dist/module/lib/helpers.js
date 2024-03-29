/* https://unpkg.com/@supabase/storage-js@2.5.4/dist/module/lib/helpers.js?module */ var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {return value instanceof P ? value : new P(function (resolve) {resolve(value);});}
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {try {step(generator.next(value));} catch (e) {reject(e);}}
    function rejected(value) {try {step(generator["throw"](value));} catch (e) {reject(e);}}
    function step(result) {result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);}
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
export const resolveFetch = customFetch => {
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
export const resolveResponse = () => __awaiter(void 0, void 0, void 0, function* () {
  if (typeof Response === 'undefined') {
    // @ts-ignore
    return (yield import("https://unpkg.com/@supabase/node-fetch@^2.6.14?module")).Response;
  }
  return Response;
});