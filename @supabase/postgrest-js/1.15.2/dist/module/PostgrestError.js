/* https://unpkg.com/@supabase/postgrest-js@1.15.2/dist/module/PostgrestError.js?module */ export default class PostgrestError extends Error {
  constructor(context) {
    super(context.message);
    this.name = 'PostgrestError';
    this.details = context.details;
    this.hint = context.hint;
    this.code = context.code;
  }}