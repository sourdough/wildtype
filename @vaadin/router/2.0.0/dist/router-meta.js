/* https://unpkg.com/@vaadin/router@2.0.0/dist/router-meta.js */ function __REGISTER__(feature, vaadinObj = window.Vaadin ??= {}) {
  vaadinObj.registrations ??= [];
  vaadinObj.registrations.push({
    is: feature ? `${"@vaadin/router"}/${feature}` : "@vaadin/router",
    version: "2.0.0"
  });
}
import { usageStatistics } from "@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js";
__REGISTER__();
usageStatistics();
//# sourceMappingURL=router-meta.js.map
