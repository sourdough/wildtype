/* https://unpkg.com/pyscript@1.0.6/lib/iterable.js?module */ /**
 *
 * @param {any} iterable Iterable to check
 * @returns A boolean indicating whether it is all or not
 */
export function all(iterable) {
  for (const element of iterable) if (!element) return false;
  return true;
}

/**
   *
   * @param {any} iterable Iterable to check
   * @returns A boolean indicating whether it is any or not
   */
export function any(iterable) {
  for (const element of iterable) if (element) return true;
  return false;
}

/**
   *
   * @param {iterable} sequence The iterable to enumerate
   * @param {number} start The number to start enumerating at
   * @yields Yields an array containing the index and the element
   */
export function* enumerate(sequence, start) {
  let n = start || 0;
  for (const element of sequence) {
    yield [n, element];
    n++;
  }
}

/**
   *
   * @param {any} s Item to check the length on
   * @returns Returns the length of the item
   */
export function lens(s) {
  return typeof s === "object" ? Object.keys(s).length : s.length;
}

/**
   *
   * @param {any} iterable Iterable to get the max value out of
   * Works like the Math.max() function
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
   */
export function max(iterable) {
  if (iterable instanceof Array) return Math.max(...iterable);else
  return Math.max(...arguments);
}

/**
   *
   * @param {any} iterable Iterable to get the min value out of
   * Works like the Math.min() function
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
   */
export function min(iterable) {
  if (iterable instanceof Array) return Math.min(...iterable);else
  return Math.min(...arguments);
}