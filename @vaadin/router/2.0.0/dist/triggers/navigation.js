/* https://unpkg.com/@vaadin/router@2.0.0/dist/triggers/navigation.js */ import CLICK from "./click.js";
import POPSTATE from "./popstate.js";
let triggers = [];
const DEFAULT_TRIGGERS = {
  CLICK,
  POPSTATE
};
function setNavigationTriggers(newTriggers = []) {
  triggers.forEach((trigger) => trigger.inactivate());
  newTriggers.forEach((trigger) => trigger.activate());
  triggers = newTriggers;
}
export {
  DEFAULT_TRIGGERS,
  setNavigationTriggers
};
//# sourceMappingURL=navigation.js.map
