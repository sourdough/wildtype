/* https://unpkg.com/@vaadin/router@2.0.0/dist/resolver/matchPath.js */ import { pathToRegexp } from "path-to-regexp";
import { resolvePath } from "./utils.js";
const cache = /* @__PURE__ */ new Map();
cache.set("|false", {
  keys: [],
  pattern: /(?:)/u
});
function decodeParam(val) {
  try {
    return decodeURIComponent(val);
  } catch {
    return val;
  }
}
function matchPath(routePath, path, exact = false, parentKeys = [], parentParams) {
  const cacheKey = `${routePath}|${String(exact)}`;
  const _path = resolvePath(path);
  let regexp = cache.get(cacheKey);
  if (!regexp) {
    const keys = [];
    regexp = {
      keys,
      pattern: pathToRegexp(routePath, keys, {
        end: exact,
        strict: routePath === ""
      })
    };
    cache.set(cacheKey, regexp);
  }
  const m = regexp.pattern.exec(_path);
  if (!m) {
    return null;
  }
  const params = { ...parentParams };
  for (let i = 1; i < m.length; i++) {
    const key = regexp.keys[i - 1];
    const prop = key.name;
    const value = m[i];
    if (value !== void 0 || !Object.hasOwn(params, prop)) {
      if (key.modifier === "+" || key.modifier === "*") {
        params[prop] = value ? value.split(/[/?#]/u).map(decodeParam) : [];
      } else {
        params[prop] = value ? decodeParam(value) : value;
      }
    }
  }
  return {
    keys: [...parentKeys, ...regexp.keys],
    params,
    path: m[0]
  };
}
var matchPath_default = matchPath;
export {
  matchPath_default as default
};
//# sourceMappingURL=matchPath.js.map
