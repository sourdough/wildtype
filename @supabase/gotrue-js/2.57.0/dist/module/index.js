/* https://unpkg.com/@supabase/gotrue-js@2.57.0/dist/module/index.js?module */ import GoTrueAdminApi from "./GoTrueAdminApi.js";
import GoTrueClient from "./GoTrueClient.js";
export { GoTrueAdminApi, GoTrueClient };
export * from "./lib/types.js";
export * from "./lib/errors.js";
export { navigatorLock, NavigatorLockAcquireTimeoutError, internals as lockInternals } from "./lib/locks.js";