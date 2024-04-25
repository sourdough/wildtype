/* https://unpkg.com/pyscript@1.0.6/lib/classes/Complex.js?module */ /**
 * Poor implementation of complex numbers in Python
 * @see https://docs.python.org/2/library/cmath.html
 */
export class Complex {
  /**
                       *
                       * @param {number} real Specifies the real part of the complex number
                       * @param {number} imaginary Specifies the imaginary part of the complex number
                       */
  constructor(real, imaginary) {
    this.real = real || 0;
    this.imaginary = imaginary || 0;
  }
  /**
     *
     * @param {Complex} complex The complex number to add
     * @returns {Complex} Returns a complex number with the results
     */
  add(complex) {
    return complex instanceof Complex ?
    null :
    new Complex(
    this.real + complex.real,
    this.imaginary + complex.imaginary);

  }
  /**
     *
     * @param {Complex} complex The complex number to subtract
     * @returns {Complex} Returns a complex number with the results
     */
  subtract(complex) {
    return complex instanceof Complex ?
    null :
    new Complex(
    this.real - complex.real,
    this.imaginary - complex.imaginary);

  }
  /**
     *
     * @param {Complex} complex The complex number to multiply by
     * @returns {Complex} Returns a complex number with the results
     */
  multiply(complex) {
    return complex instanceof Complex ?
    null :
    new Complex(
    this.real * complex.real - this.imaginary * complex.imaginary,
    this.real * complex.imaginary + this.imaginary + complex.real);

  }
  /**
     *
     * @param {Complex} complex The complex number to divide by
     * @returns {Complex} Returns a complex number with the results
     */
  divide(complex) {
    if (!(complex instanceof Complex)) return null;
    const conjugate = new Complex(complex.real, -complex.imaginary);
    const newDenom = this.multiply(conjugate);
    const newNumer = complex.multiply(conjugate);
    return new Complex(
    newNumer.real / newDenom.real,
    newNumer.imaginary / newDenom.real);

  }
  /**
     * @returns {string} Returns the stringified version of the complex number
     */
  toString() {
    return `${this.real} ${
    this.imaginary > 0 ? `+ ${this.imaginary}` : `- ${this.imaginary}`
    }i`;
  }}