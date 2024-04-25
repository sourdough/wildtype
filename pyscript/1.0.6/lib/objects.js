/* https://unpkg.com/pyscript@1.0.6/lib/objects.js?module */ /**
 *
 * @param {object} object The object to convert to ascii
 * @returns String representation of the object – non-ascii characters escaped
 */
export function ascii(object) {
  return JSON.stringify(object).
  split("").
  map(function (char) {
    const charCode = char.charCodeAt(0);
    return charCode > 127 ?
    "\\u" +
    new Array(5 - charCode.toString(16).length).join("0") +
    charCode.toString(16) :
    char;
  }).
  join("");
}

/**
   *
   * @param {object} object The object to operate on
   * @param {any} name The property or method to delete
   * @returns Returns the deleted attribute
   */
export function delattr(object, name) {
  if (object.name) delete object.name;
  return name;
}

/**
   *
   * @param {object} object The object to operate on
   * @param {any} name The new name of the property or method
   * @param {any} value The value of the new property or method
   * @returns Returns the value
   */
export function setattr(object, name, value) {
  object[name] = value;
  return value;
}

/**
   *
   * @param {object} object Object to retrieve the property
   * @param {any} name The name of the property or method
   * @param {any} defaultValue The default value returned
   */
export function getattr(object, name, defaultValue) {
  if (!object[name] && !defaultValue)
  throw new Error(
  "Warning: No default specified and the property or method was not found!");

  return object[name] || defaultValue || null;
}

/**
   *
   * @param {object} object Object to check
   * @param {any} name Name to check
   */
export function hasattr(object, name) {
  return object[name] ? true : false;
}

/**
   *
   * @param {object} object Object to inspect
   * Well, what did you expect?
   */
export function dir(object) {
  return console.dir(object);
}