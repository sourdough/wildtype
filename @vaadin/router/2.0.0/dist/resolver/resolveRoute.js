/* https://unpkg.com/@vaadin/router@2.0.0/dist/resolver/resolveRoute.js */ import { isFunction } from "./utils.js";
function resolveRoute(context) {
  if (isFunction(context.route.action)) {
    return context.route.action(context);
  }
  return void 0;
}
export {
  resolveRoute as default
};
//# sourceMappingURL=resolveRoute.js.map
