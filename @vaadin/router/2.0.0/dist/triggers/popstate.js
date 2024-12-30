/* https://unpkg.com/@vaadin/router@2.0.0/dist/triggers/popstate.js */ import { fireRouterEvent } from "../utils.js";
function vaadinRouterGlobalPopstateHandler(event) {
  if (event.state === "vaadin-router-ignore") {
    return;
  }
  const { hash, pathname, search } = window.location;
  fireRouterEvent("go", { hash, pathname, search });
}
const POPSTATE = {
  activate() {
    window.addEventListener("popstate", vaadinRouterGlobalPopstateHandler);
  },
  inactivate() {
    window.removeEventListener("popstate", vaadinRouterGlobalPopstateHandler);
  }
};
var popstate_default = POPSTATE;
export {
  popstate_default as default
};
//# sourceMappingURL=popstate.js.map
