/* https://unpkg.com/@supabase/postgrest-js@1.15.2/dist/module/PostgrestClient.js?module */ import PostgrestQueryBuilder from "./PostgrestQueryBuilder.js";
import PostgrestFilterBuilder from "./PostgrestFilterBuilder.js";
import { DEFAULT_HEADERS } from "./constants.js";
/**
                                                       * PostgREST client.
                                                       *
                                                       * @typeParam Database - Types for the schema from the [type
                                                       * generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
                                                       *
                                                       * @typeParam SchemaName - Postgres schema to switch to. Must be a string
                                                       * literal, the same one passed to the constructor. If the schema is not
                                                       * `"public"`, this must be supplied manually.
                                                       */
export default class PostgrestClient {
  // TODO: Add back shouldThrowOnError once we figure out the typings
  /**
   * Creates a PostgREST client.
   *
   * @param url - URL of the PostgREST endpoint
   * @param options - Named parameters
   * @param options.headers - Custom headers
   * @param options.schema - Postgres schema to switch to
   * @param options.fetch - Custom fetch
   */
  constructor(url, { headers = {}, schema, fetch } = {}) {
    this.url = url;
    this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS), headers);
    this.schemaName = schema;
    this.fetch = fetch;
  }
  /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */
  from(relation) {
    const url = new URL(`${this.url}/${relation}`);
    return new PostgrestQueryBuilder(url, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch });

  }
  /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */
  schema(schema) {
    return new PostgrestClient(this.url, {
      headers: this.headers,
      schema,
      fetch: this.fetch });

  }
  /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
  rpc(fn, args = {}, { head = false, get = false, count } = {}) {
    let method;
    const url = new URL(`${this.url}/rpc/${fn}`);
    let body;
    if (head || get) {
      method = head ? 'HEAD' : 'GET';
      Object.entries(args)
      // params with undefined value needs to be filtered out, otherwise it'll
      // show up as `?param=undefined`
      .filter(([_, value]) => value !== undefined)
      // array values need special syntax
      .map(([name, value]) => [name, Array.isArray(value) ? `{${value.join(',')}}` : `${value}`]).
      forEach(([name, value]) => {
        url.searchParams.append(name, value);
      });
    } else
    {
      method = 'POST';
      body = args;
    }
    const headers = Object.assign({}, this.headers);
    if (count) {
      headers['Prefer'] = `count=${count}`;
    }
    return new PostgrestFilterBuilder({
      method,
      url,
      headers,
      schema: this.schemaName,
      body,
      fetch: this.fetch,
      allowEmpty: false });

  }}