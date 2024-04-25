/* https://unpkg.com/pyscript@1.0.6/lib/utils/misc.js?module */ /**
 *
 * @param {number} start The starting number
 * @param {number} stop The stopping number
 * @param {number} step The step number
 * This works like the Python range function
 */
export function range(start, stop, step) {
  if (start < stop && step <= 0 || start > stop && step >= 0) return [];
  if (start && stop === 0 && step < 0) return [];

  const result = [];

  for (
  let i = start && stop ? start : 0;
  stop ? i < stop : i < start;
  i += step || 1)

  result.push(i);

  return result;
}

/**
   *
   * @param {any} x The item you want to check
   * @deprecated Why the fuck are you using this
   */
export function bool(x) {
  return x ? true : false;
}

/**
   *
   * @param {string} args Arguments to watch for
   * @param {string} keywords Keywords for marking stuff
   * @deprecated Why the fuck are you using this
   */
export function breakpoint(args, keywords) {
  if (typeof window !== "undefined") debugger;
  throw new Error(`Breakpoint thrown. This function is useless.`);
}

/**
   *
   * @param {number} i Charcode argument
   * @returns Returns the character for the charcode
   */
export function chr(i) {
  return String.fromCharCode(i);
}

/**
   *
   * @param {string} c String to pass in
   * @returns Returns the charcode for the character passed in
   */
export function ord(c) {
  return c.charCodeAt(0);
}