/* https://unpkg.com/@vaadin/router@2.0.0/dist/resolver/matchRoute.js */ import matchPath, {} from "./matchPath.js";
import { getRoutePath, unwrapChildren } from "./utils.js";
function matchRoute(route, pathname, ignoreLeadingSlash, parentKeys, parentParams) {
  let match;
  let childMatches;
  let childIndex = 0;
  let routepath = getRoutePath(route);
  if (routepath.startsWith("/")) {
    if (ignoreLeadingSlash) {
      routepath = routepath.substring(1);
    }
    ignoreLeadingSlash = true;
  }
  return {
    next(routeToSkip) {
      if (route === routeToSkip) {
        return { done: true, value: void 0 };
      }
      route.__children ??= unwrapChildren(route.children);
      const children = route.__children ?? [];
      const exact = !route.__children && !route.children;
      if (!match) {
        match = matchPath(routepath, pathname, exact, parentKeys, parentParams);
        if (match) {
          return {
            value: {
              keys: match.keys,
              params: match.params,
              path: match.path,
              route
            }
          };
        }
      }
      if (match && children.length > 0) {
        while (childIndex < children.length) {
          if (!childMatches) {
            const childRoute = children[childIndex];
            childRoute.parent = route;
            let matchedLength = match.path.length;
            if (matchedLength > 0 && pathname.charAt(matchedLength) === "/") {
              matchedLength += 1;
            }
            childMatches = matchRoute(
              childRoute,
              pathname.substring(matchedLength),
              ignoreLeadingSlash,
              match.keys,
              match.params
            );
          }
          const childMatch = childMatches.next(routeToSkip);
          if (!childMatch.done) {
            return {
              done: false,
              value: childMatch.value
            };
          }
          childMatches = null;
          childIndex += 1;
        }
      }
      return { done: true, value: void 0 };
    }
  };
}
var matchRoute_default = matchRoute;
export {
  matchRoute_default as default
};
//# sourceMappingURL=matchRoute.js.map
