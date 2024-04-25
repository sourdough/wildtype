/* https://unpkg.com/@supabase/supabase-js@2.42.7/dist/module/index.js?module */ import SupabaseClient from "./SupabaseClient.js";
export * from "../../../../auth-js.js";
export { FunctionsHttpError, FunctionsFetchError, FunctionsRelayError, FunctionsError, FunctionRegion } from "../../../../functions-js.js";
export * from "../../../../realtime-js.js";
export { default as SupabaseClient } from "./SupabaseClient.js";
/**
                                                                      * Creates a new Supabase Client.
                                                                      */
export const createClient = (supabaseUrl, supabaseKey, options) => {
  return new SupabaseClient(supabaseUrl, supabaseKey, options);
};