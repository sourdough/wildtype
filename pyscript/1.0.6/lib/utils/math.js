/* https://unpkg.com/pyscript@1.0.6/lib/utils/math.js?module */ import { Complex } from "../classes/Complex.js";

/**
                                                         *
                                                         * @param {number | Complex} x Number to pass in
                                                         * @returns Absolute value of a number, and the magnitude of a complex number
                                                         */
export function abs(x) {
  if (x instanceof Complex)
  return Math.sqrt(Math.pow(x.real, 2) + Math.pow(x.imaginary, 2));
  return Math.abs(x);
}

/**
   *
   * @param {number} x Number to pass in
   * @returns Similar to the Python bin function
   * @see https://docs.python.org/3/library/functions.html#bin
   */
export function bin(x) {
  return `${x < 0 ? "-" : ""}0b${Math.abs(x).toString(2)}`;
}

/**
   *
   * @param {number} length The length of the returned array
   * @returns The closest thing is a Uint8Array
   * @deprecated Why the fuck are you using this
   * I have no idea what bytes does
   * @see https://docs.python.org/3/library/functions.html#func-bytearray
   */
export function bytearray(length) {
  return new Uint8Array(length);
}

/**
   *
   * @param {number} length The length of the returned array
   * @returns The closest thing is a Uint8Array
   * @deprecated Why the fuck are you using this
   * I have no idea what bytes does
   * @see https://docs.python.org/3/library/functions.html#func-bytes
   */
export function bytes(length) {
  return new Uint8Array(length);
}

/**
   *
   * @param {any} object Check if it is callable
   * @deprecated Why the fuck are you using this
   */
export function callable(object) {
  return object() ? true : false;
}

/**
   *
   * @param {number} a First number
   * @param {number} b Second number
   * @see https://docs.python.org/3/library/functions.html#divmod
   */
export function divmod(a, b) {
  return Number.isInteger(a) && Number.isInteger(b) ?
  [a / b, a % b] :
  [Math.floor(a / b), a % b];
}

/**
   *
   * @param {any} iterable Anything that's iterable
   * @param {number} start Starting value
   * @returns Returns the sum of all elements in the array
   */
export function sum(iterable, start) {
  return iterable.reduce((acc, cur) => acc + cur, start || 0);
}