/* https://unpkg.com/@supabase/functions-js@2.1.5/dist/module/types.js?module */ export class FunctionsError extends Error {
  constructor(message, name = 'FunctionsError', context) {
    super(message);
    this.name = name;
    this.context = context;
  }}

export class FunctionsFetchError extends FunctionsError {
  constructor(context) {
    super('Failed to send a request to the Edge Function', 'FunctionsFetchError', context);
  }}

export class FunctionsRelayError extends FunctionsError {
  constructor(context) {
    super('Relay Error invoking the Edge Function', 'FunctionsRelayError', context);
  }}

export class FunctionsHttpError extends FunctionsError {
  constructor(context) {
    super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', context);
  }}