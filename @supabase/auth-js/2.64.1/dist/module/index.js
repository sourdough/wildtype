/* https://unpkg.com/@supabase/auth-js@2.64.1/dist/module/index.js?module */ import GoTrueAdminApi from "./GoTrueAdminApi.js";
import GoTrueClient from "./GoTrueClient.js";
import AuthAdminApi from "./AuthAdminApi.js";
import AuthClient from "./AuthClient.js";
export { GoTrueAdminApi, GoTrueClient, AuthAdminApi, AuthClient };
export * from "./lib/types.js";
export * from "./lib/errors.js";
export { navigatorLock, NavigatorLockAcquireTimeoutError, internals as lockInternals } from "./lib/locks.js";