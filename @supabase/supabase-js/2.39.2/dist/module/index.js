/* https://unpkg.com/@supabase/supabase-js@2.39.2/dist/module/index.js?module */ import SupabaseClient from "./SupabaseClient.js";
export * from "../../../../gotrue-js.js";
export { FunctionsHttpError, FunctionsFetchError, FunctionsRelayError, FunctionsError } from "../../../../functions-js.js";
export * from "../../../../realtime-js.js";
export { default as SupabaseClient } from "./SupabaseClient.js";
/**
                                                                      * Creates a new Supabase Client.
                                                                      */
export const createClient = (supabaseUrl, supabaseKey, options) => {
  return new SupabaseClient(supabaseUrl, supabaseKey, options);
};