/* https://unpkg.com/@vaadin/router@2.0.0/dist/resolver/utils.js */ function isObject(o) {
  return typeof o === "object" && !!o;
}
function isFunction(f) {
  return typeof f === "function";
}
function isString(s) {
  return typeof s === "string";
}
function toArray(value = []) {
  return Array.isArray(value) ? value : [value];
}
function log(msg) {
  return `[Vaadin.Router] ${msg}`;
}
class NotFoundError extends Error {
  code;
  context;
  constructor(context) {
    super(log(`Page not found (${context.pathname})`));
    this.context = context;
    this.code = 404;
  }
}
const notFoundResult = Symbol("NotFoundResult");
function getNotFoundError(context) {
  return new NotFoundError(context);
}
function resolvePath(path) {
  return (Array.isArray(path) ? path[0] : path) ?? "";
}
function getRoutePath(route) {
  return resolvePath(route?.path);
}
function unwrapChildren(children) {
  return Array.isArray(children) && children.length > 0 ? children : void 0;
}
export {
  NotFoundError,
  getNotFoundError,
  getRoutePath,
  isFunction,
  isObject,
  isString,
  log,
  notFoundResult,
  resolvePath,
  toArray,
  unwrapChildren
};
//# sourceMappingURL=utils.js.map
