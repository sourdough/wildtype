/* https://unpkg.com/@vaadin/router@2.0.0/dist/router.js */ import { compile } from "path-to-regexp";
import generateUrls from "./resolver/generateUrls.js";
import Resolver from "./resolver/resolver.js";
import "./router-config.js";
import { getNotFoundError, isFunction, isObject, isString, log, notFoundResult } from "./resolver/utils.js";
import animate from "./transitions/animate.js";
import { DEFAULT_TRIGGERS, setNavigationTriggers } from "./triggers/navigation.js";
import {
  amend,
  copyContextWithoutNext,
  createLocation,
  createRedirect,
  ensureRoutes,
  fireRouterEvent,
  getMatchedPath,
  getPathnameForRouter,
  logValue,
  maybeCall,
  processNewChildren,
  renderElement
} from "./utils.js";
const MAX_REDIRECT_COUNT = 256;
function prevent() {
  return { cancel: true };
}
const rootContext = {
  __renderId: -1,
  params: {},
  route: {
    __synthetic: true,
    children: [],
    path: "",
    action() {
      return void 0;
    }
  },
  pathname: "",
  // eslint-disable-next-line @typescript-eslint/require-await
  async next() {
    return notFoundResult;
  }
};
class Router extends Resolver {
  /**
   * Contains read-only information about the current router location:
   * pathname, active routes, parameters. See the
   * [Location type declaration](#/classes/RouterLocation)
   * for more details.
   */
  location = createLocation({ resolver: this });
  /**
   * A promise that is settled after the current render cycle completes. If
   * there is no render cycle in progress the promise is immediately settled
   * with the last render cycle result.
   */
  ready = Promise.resolve(this.location);
  #addedByRouter = /* @__PURE__ */ new WeakSet();
  #createdByRouter = /* @__PURE__ */ new WeakSet();
  #navigationEventHandler = this.#onNavigationEvent.bind(this);
  #lastStartedRenderId = 0;
  #outlet;
  __previousContext;
  #urlForName;
  #appearingContent = null;
  #disappearingContent = null;
  /**
   * Creates a new Router instance with a given outlet, and
   * automatically subscribes it to navigation events on the `window`.
   * Using a constructor argument or a setter for outlet is equivalent:
   *
   * ```
   * const router = new Router();
   * router.setOutlet(outlet);
   * ```
   * @param outlet - a container to render the resolved route
   * @param options - an optional object with options
   */
  constructor(outlet, options) {
    const baseElement = document.head.querySelector("base");
    const baseHref = baseElement?.getAttribute("href");
    super([], {
      baseUrl: baseHref ? new URL(baseHref, document.URL).href.replace(/[^/]*$/u, "") : void 0,
      ...options,
      resolveRoute: async (context) => await this.#resolveRoute(context)
    });
    setNavigationTriggers(Object.values(DEFAULT_TRIGGERS));
    this.setOutlet(outlet);
    this.subscribe();
  }
  async #resolveRoute(context) {
    const { route } = context;
    if (isFunction(route.children)) {
      let children = await route.children(copyContextWithoutNext(context));
      if (!isFunction(route.children)) {
        ({ children } = route);
      }
      processNewChildren(children, route);
    }
    const commands = {
      component: (component) => {
        const element = document.createElement(component);
        this.#createdByRouter.add(element);
        return element;
      },
      prevent,
      redirect: (path) => createRedirect(context, path)
    };
    return await Promise.resolve().then(async () => {
      if (this.#isLatestRender(context)) {
        return await maybeCall(route.action, route, context, commands);
      }
    }).then((result) => {
      if (result != null && (typeof result === "object" || typeof result === "symbol")) {
        if (result instanceof HTMLElement || result === notFoundResult || isObject(result) && "redirect" in result) {
          return result;
        }
      }
      if (isString(route.redirect)) {
        return commands.redirect(route.redirect);
      }
    }).then((result) => {
      if (result != null) {
        return result;
      }
      if (isString(route.component)) {
        return commands.component(route.component);
      }
    });
  }
  /**
   * Sets the router outlet (the DOM node where the content for the current
   * route is inserted). Any content pre-existing in the router outlet is
   * removed at the end of each render pass.
   *
   * @remarks
   * This method is automatically invoked first time when creating a new Router
   * instance.
   *
   * @param outlet - the DOM node where the content for the current route is
   * inserted.
   */
  setOutlet(outlet) {
    if (outlet) {
      this.#ensureOutlet(outlet);
    }
    this.#outlet = outlet;
  }
  /**
   * Returns the current router outlet. The initial value is `undefined`.
   *
   * @returns the current router outlet (or `undefined`)
   */
  getOutlet() {
    return this.#outlet;
  }
  /**
   * Sets the routing config (replacing the existing one) and triggers a
   * navigation event so that the router outlet is refreshed according to the
   * current `window.location` and the new routing config.
   *
   * Each route object may have the following properties, listed here in the processing order:
   * * `path` – the route path (relative to the parent route if any) in the
   * [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths).
   *
   * * `children` – an array of nested routes or a function that provides this
   * array at the render time. The function can be synchronous or asynchronous:
   * in the latter case the render is delayed until the returned promise is
   * resolved. The `children` function is executed every time when this route is
   * being rendered. This allows for dynamic route structures (e.g. backend-defined),
   * but it might have a performance impact as well. In order to avoid calling
   * the function on subsequent renders, you can override the `children` property
   * of the route object and save the calculated array there
   * (via `context.route.children = [ route1, route2, ...];`).
   * Parent routes are fully resolved before resolving the children. Children
   * 'path' values are relative to the parent ones.
   *
   * * `action` – the action that is executed before the route is resolved.
   * The value for this property should be a function, accepting `context`
   * and `commands` parameters described below. If present, this function is
   * always invoked first, disregarding of the other properties' presence.
   * The action can return a result directly or within a `Promise`, which
   * resolves to the result. If the action result is an `HTMLElement` instance,
   * a `commands.component(name)` result, a `commands.redirect(path)` result,
   * or a `context.next()` result, the current route resolution is finished,
   * and other route config properties are ignored.
   * See also **Route Actions** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `redirect` – other route's path to redirect to. Passes all route parameters to the redirect target.
   * The target route should also be defined.
   * See also **Redirects** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `component` – the tag name of the Web Component to resolve the route to.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * If route contains the `component` property (or an action that return a component)
   * and its child route also contains the `component` property, child route's component
   * will be rendered as a light dom child of a parent component.
   *
   * * `name` – the string name of the route to use in the
   * [`router.urlForName(name, params)`](#/classes/Router#method-urlForName)
   * navigation helper method.
   *
   * For any route function (`action`, `children`) defined, the corresponding `route` object is available inside the
   * callback through the `this` reference. If you need to access it, make sure you define the callback as a non-arrow
   * function because arrow functions do not have their own `this` reference.
   *
   * `context` object that is passed to `action` function holds the following properties:
   * * `context.pathname` – string with the pathname being resolved
   *
   * * `context.search` – search query string
   *
   * * `context.hash` – hash string
   *
   * * `context.params` – object with route parameters
   *
   * * `context.route` – object that holds the route that is currently being rendered.
   *
   * * `context.next()` – function for asynchronously getting the next route
   * contents from the resolution chain (if any)
   *
   * `commands` object that is passed to `action` function has
   * the following methods:
   *
   * * `commands.redirect(path)` – function that creates a redirect data
   * for the path specified.
   *
   * * `commands.component(component)` – function that creates a new HTMLElement
   * with current context. Note: the component created by this function is reused if visiting the same path twice in
   * row.
   *
   * @param routes - a single route or an array of those
   * @param skipRender - configure the router but skip rendering the
   *     route corresponding to the current `window.location` values
   */
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async setRoutes(routes, skipRender = false) {
    this.__previousContext = void 0;
    this.#urlForName = void 0;
    ensureRoutes(routes);
    super.setRoutes(routes);
    if (!skipRender) {
      this.#onNavigationEvent();
    }
    return await this.ready;
  }
  addRoutes(routes) {
    ensureRoutes(routes);
    return super.addRoutes(routes);
  }
  /**
   * Asynchronously resolves the given pathname and renders the resolved route
   * component into the router outlet. If no router outlet is set at the time of
   * calling this method, or at the time when the route resolution is completed,
   * a `TypeError` is thrown.
   *
   * Returns a promise that is fulfilled with the router outlet DOM Element | DocumentFragment after
   * the route component is created and inserted into the router outlet, or
   * rejected if no route matches the given path.
   *
   * If another render pass is started before the previous one is completed, the
   * result of the previous render pass is ignored.
   *
   * @param pathnameOrContext - the pathname to render or a context object with
   * a `pathname` property, optional `search` and `hash` properties, and other
   * properties to pass to the resolver.
   * @param shouldUpdateHistory - update browser history with the rendered
   * location
   */
  async render(pathnameOrContext, shouldUpdateHistory = false) {
    this.#lastStartedRenderId += 1;
    const renderId = this.#lastStartedRenderId;
    const context = {
      ...rootContext,
      ...isString(pathnameOrContext) ? { hash: "", search: "", pathname: pathnameOrContext } : pathnameOrContext,
      __renderId: renderId
    };
    this.ready = this.#doRender(context, shouldUpdateHistory);
    return await this.ready;
  }
  async #doRender(context, shouldUpdateHistory) {
    const { __renderId: renderId } = context;
    try {
      const ctx = await this.resolve(context);
      const contextWithChain = await this.#fullyResolveChain(ctx);
      if (!this.#isLatestRender(contextWithChain)) {
        return this.location;
      }
      const previousContext = this.__previousContext;
      if (contextWithChain === previousContext) {
        this.#updateBrowserHistory(previousContext, true);
        return this.location;
      }
      this.location = createLocation(contextWithChain);
      if (shouldUpdateHistory) {
        this.#updateBrowserHistory(contextWithChain, renderId === 1);
      }
      fireRouterEvent("location-changed", {
        router: this,
        location: this.location
      });
      if (contextWithChain.__skipAttach) {
        this.#copyUnchangedElements(contextWithChain, previousContext);
        this.__previousContext = contextWithChain;
        return this.location;
      }
      this.#addAppearingContent(contextWithChain, previousContext);
      const animationDone = this.#animateIfNeeded(contextWithChain);
      this.#runOnAfterEnterCallbacks(contextWithChain);
      this.#runOnAfterLeaveCallbacks(contextWithChain, previousContext);
      await animationDone;
      if (this.#isLatestRender(contextWithChain)) {
        this.#removeDisappearingContent();
        this.__previousContext = contextWithChain;
        return this.location;
      }
    } catch (error) {
      if (renderId === this.#lastStartedRenderId) {
        if (shouldUpdateHistory) {
          this.#updateBrowserHistory(this.context);
        }
        for (const child of this.#outlet?.children ?? []) {
          child.remove();
        }
        this.location = createLocation(Object.assign(context, { resolver: this }));
        fireRouterEvent("error", {
          router: this,
          error,
          ...context
        });
        throw error;
      }
    }
    return this.location;
  }
  // `topOfTheChainContextBeforeRedirects` is a context coming from Resolver.resolve().
  // It would contain a 'redirect' route or the first 'component' route that
  // matched the pathname. There might be more child 'component' routes to be
  // resolved and added into the chain. This method would find and add them.
  // `contextBeforeRedirects` is the context containing such a child component
  // route. It's only necessary when this method is called recursively (otherwise
  // it's the same as the 'top of the chain' context).
  //
  // Apart from building the chain of child components, this method would also
  // handle 'redirect' routes, call 'onBefore' callbacks and handle 'prevent'
  // and 'redirect' callback results.
  async #fullyResolveChain(topOfTheChainContextBeforeRedirects, contextBeforeRedirects = topOfTheChainContextBeforeRedirects) {
    const contextAfterRedirects = await this.#findComponentContextAfterAllRedirects(contextBeforeRedirects);
    const redirectsHappened = contextAfterRedirects !== contextBeforeRedirects;
    const topOfTheChainContextAfterRedirects = redirectsHappened ? contextAfterRedirects : topOfTheChainContextBeforeRedirects;
    const matchedPath = getPathnameForRouter(getMatchedPath(contextAfterRedirects.chain ?? []), this);
    const isFound = matchedPath === contextAfterRedirects.pathname;
    const findNextContextIfAny = async (context, parent = context.route, prevResult) => {
      const nextContext2 = await context.next(false, parent, prevResult);
      if (nextContext2 === null || nextContext2 === notFoundResult) {
        if (isFound) {
          return context;
        } else if (parent.parent != null) {
          return await findNextContextIfAny(context, parent.parent, nextContext2);
        }
        return nextContext2;
      }
      return nextContext2;
    };
    const nextContext = await findNextContextIfAny(contextAfterRedirects);
    if (nextContext == null || nextContext === notFoundResult) {
      throw getNotFoundError(
        topOfTheChainContextAfterRedirects
      );
    }
    return nextContext !== contextAfterRedirects ? await this.#fullyResolveChain(topOfTheChainContextAfterRedirects, nextContext) : await this.#amendWithOnBeforeCallbacks(contextAfterRedirects);
  }
  async #findComponentContextAfterAllRedirects(context) {
    const { result } = context;
    if (result instanceof HTMLElement) {
      renderElement(context, result);
      return context;
    } else if (result && "redirect" in result) {
      const ctx = await this.#redirect(result.redirect, context.__redirectCount, context.__renderId);
      return await this.#findComponentContextAfterAllRedirects(ctx);
    }
    throw result instanceof Error ? result : new Error(
      log(
        `Invalid route resolution result for path "${context.pathname}". Expected redirect object or HTML element, but got: "${logValue(result)}". Double check the action return value for the route.`
      )
    );
  }
  async #amendWithOnBeforeCallbacks(contextWithFullChain) {
    return await this.#runOnBeforeCallbacks(contextWithFullChain).then(async (amendedContext) => {
      if (amendedContext === this.__previousContext || amendedContext === contextWithFullChain) {
        return amendedContext;
      }
      return await this.#fullyResolveChain(amendedContext);
    });
  }
  async #runOnBeforeCallbacks(newContext) {
    const previousContext = this.__previousContext ?? {};
    const previousChain = previousContext.chain ?? [];
    const newChain = newContext.chain ?? [];
    let callbacks = Promise.resolve(void 0);
    const redirect = (pathname) => createRedirect(newContext, pathname);
    newContext.__divergedChainIndex = 0;
    newContext.__skipAttach = false;
    if (previousChain.length) {
      for (let i = 0; i < Math.min(previousChain.length, newChain.length); newContext.__divergedChainIndex++, i++) {
        if (previousChain[i].route !== newChain[i].route || previousChain[i].path !== newChain[i].path && previousChain[i].element !== newChain[i].element || !this.#isReusableElement(
          previousChain[i].element,
          newChain[i].element
        )) {
          break;
        }
      }
      newContext.__skipAttach = // Same route chain
      newChain.length === previousChain.length && newContext.__divergedChainIndex === newChain.length && // Same element
      this.#isReusableElement(newContext.result, previousContext.result);
      if (newContext.__skipAttach) {
        for (let i = newChain.length - 1; i >= 0; i--) {
          callbacks = this.#runOnBeforeLeaveCallbacks(callbacks, newContext, { prevent }, previousChain[i]);
        }
        for (let i = 0; i < newChain.length; i++) {
          callbacks = this.#runOnBeforeEnterCallbacks(
            callbacks,
            newContext,
            {
              prevent,
              redirect
            },
            newChain[i]
          );
          previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
        }
      } else {
        for (let i = previousChain.length - 1; i >= newContext.__divergedChainIndex; i--) {
          callbacks = this.#runOnBeforeLeaveCallbacks(callbacks, newContext, { prevent }, previousChain[i]);
        }
      }
    }
    if (!newContext.__skipAttach) {
      for (let i = 0; i < newChain.length; i++) {
        if (i < newContext.__divergedChainIndex) {
          if (i < previousChain.length && previousChain[i].element) {
            previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
          }
        } else {
          callbacks = this.#runOnBeforeEnterCallbacks(
            callbacks,
            newContext,
            {
              prevent,
              redirect
            },
            newChain[i]
          );
          if (newChain[i].element) {
            newChain[i].element.location = createLocation(newContext, newChain[i].route);
          }
        }
      }
    }
    return await callbacks.then(async (amendmentResult) => {
      if (amendmentResult && isObject(amendmentResult)) {
        if ("cancel" in amendmentResult && this.__previousContext) {
          this.__previousContext.__renderId = newContext.__renderId;
          return this.__previousContext;
        }
        if ("redirect" in amendmentResult) {
          return await this.#redirect(amendmentResult.redirect, newContext.__redirectCount, newContext.__renderId);
        }
      }
      return newContext;
    });
  }
  async #runOnBeforeLeaveCallbacks(callbacks, newContext, commands, chainElement) {
    const location = createLocation(newContext);
    let result = await callbacks;
    if (this.#isLatestRender(newContext)) {
      const beforeLeaveFunction = amend("onBeforeLeave", chainElement.element, location, commands, this);
      result = beforeLeaveFunction(result);
    }
    if (!(isObject(result) && "redirect" in result)) {
      return result;
    }
  }
  async #runOnBeforeEnterCallbacks(callbacks, newContext, commands, chainElement) {
    const location = createLocation(newContext, chainElement.route);
    const result = await callbacks;
    if (this.#isLatestRender(newContext)) {
      const beforeEnterFunction = amend("onBeforeEnter", chainElement.element, location, commands, this);
      return beforeEnterFunction(result);
    }
  }
  #isReusableElement(element, otherElement) {
    if (element instanceof Element && otherElement instanceof Element) {
      return this.#createdByRouter.has(element) && this.#createdByRouter.has(otherElement) ? element.localName === otherElement.localName : element === otherElement;
    }
    return false;
  }
  #isLatestRender(context) {
    return context.__renderId === this.#lastStartedRenderId;
  }
  async #redirect(redirectData, counter = 0, renderId = 0) {
    if (counter > MAX_REDIRECT_COUNT) {
      throw new Error(log(`Too many redirects when rendering ${redirectData.from}`));
    }
    return await this.resolve({
      ...rootContext,
      pathname: this.urlForPath(redirectData.pathname, redirectData.params),
      redirectFrom: redirectData.from,
      __redirectCount: counter + 1,
      __renderId: renderId
    });
  }
  #ensureOutlet(outlet = this.#outlet) {
    if (!(outlet instanceof Element || outlet instanceof DocumentFragment)) {
      throw new TypeError(
        log(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${outlet})`)
      );
    }
  }
  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  #updateBrowserHistory({ pathname, search = "", hash = "" }, replace) {
    if (window.location.pathname !== pathname || window.location.search !== search || window.location.hash !== hash) {
      const changeState = replace ? "replaceState" : "pushState";
      window.history[changeState](null, document.title, pathname + search + hash);
      window.dispatchEvent(new PopStateEvent("popstate", { state: "vaadin-router-ignore" }));
    }
  }
  #copyUnchangedElements(context, previousContext) {
    let deepestCommonParent = this.#outlet;
    for (let i = 0; i < (context.__divergedChainIndex ?? 0); i++) {
      const unchangedElement = previousContext?.chain?.[i].element;
      if (unchangedElement) {
        if (unchangedElement.parentNode === deepestCommonParent) {
          context.chain[i].element = unchangedElement;
          deepestCommonParent = unchangedElement;
        } else {
          break;
        }
      }
    }
    return deepestCommonParent;
  }
  #addAppearingContent(context, previousContext) {
    this.#ensureOutlet();
    this.#removeAppearingContent();
    const deepestCommonParent = this.#copyUnchangedElements(context, previousContext);
    this.#appearingContent = [];
    this.#disappearingContent = Array.from(deepestCommonParent?.children ?? []).filter(
      // Only remove layout content that was added by router
      (e) => this.#addedByRouter.has(e) && // Do not remove the result element to avoid flickering
      e !== context.result
    );
    let parentElement = deepestCommonParent;
    for (let i = context.__divergedChainIndex ?? 0; i < (context.chain?.length ?? 0); i++) {
      const elementToAdd = context.chain[i].element;
      if (elementToAdd) {
        parentElement?.appendChild(elementToAdd);
        this.#addedByRouter.add(elementToAdd);
        if (parentElement === deepestCommonParent) {
          this.#appearingContent.push(elementToAdd);
        }
        parentElement = elementToAdd;
      }
    }
  }
  #removeDisappearingContent() {
    if (this.#disappearingContent) {
      for (const element of this.#disappearingContent) {
        element.remove();
      }
    }
    this.#disappearingContent = null;
    this.#appearingContent = null;
  }
  #removeAppearingContent() {
    if (this.#disappearingContent && this.#appearingContent) {
      for (const element of this.#appearingContent) {
        element.remove();
      }
      this.#disappearingContent = null;
      this.#appearingContent = null;
    }
  }
  #runOnAfterLeaveCallbacks(currentContext, targetContext) {
    if (!targetContext?.chain || currentContext.__divergedChainIndex == null) {
      return;
    }
    for (let i = targetContext.chain.length - 1; i >= currentContext.__divergedChainIndex; i--) {
      if (!this.#isLatestRender(currentContext)) {
        break;
      }
      const currentComponent = targetContext.chain[i].element;
      if (!currentComponent) {
        continue;
      }
      try {
        const location = createLocation(currentContext);
        maybeCall(currentComponent.onAfterLeave, currentComponent, location, {}, this);
      } finally {
        if (this.#disappearingContent?.includes(currentComponent)) {
          for (const child of currentComponent.children) {
            child.remove();
          }
        }
      }
    }
  }
  #runOnAfterEnterCallbacks(currentContext) {
    if (!currentContext.chain || currentContext.__divergedChainIndex == null) {
      return;
    }
    for (let i = currentContext.__divergedChainIndex; i < currentContext.chain.length; i++) {
      if (!this.#isLatestRender(currentContext)) {
        break;
      }
      const currentComponent = currentContext.chain[i].element;
      if (currentComponent) {
        const location = createLocation(currentContext, currentContext.chain[i].route);
        maybeCall(currentComponent.onAfterEnter, currentComponent, location, {}, this);
      }
    }
  }
  async #animateIfNeeded(context) {
    const from = this.#disappearingContent?.[0];
    const to = this.#appearingContent?.[0];
    const promises = [];
    const { chain = [] } = context;
    let config;
    for (let i = chain.length - 1; i >= 0; i--) {
      if (chain[i].route.animate) {
        config = chain[i].route.animate;
        break;
      }
    }
    if (from && to && config) {
      const leave = isObject(config) && config.leave ? config.leave : "leaving";
      const enter = isObject(config) && config.enter ? config.enter : "entering";
      promises.push(animate(from, leave));
      promises.push(animate(to, enter));
    }
    await Promise.all(promises);
    return context;
  }
  /**
   * Subscribes this instance to navigation events on the `window`.
   *
   * NOTE: beware of resource leaks. For as long as a router instance is
   * subscribed to navigation events, it won't be garbage collected.
   */
  subscribe() {
    window.addEventListener("vaadin-router-go", this.#navigationEventHandler);
  }
  /**
   * Removes the subscription to navigation events created in the `subscribe()`
   * method.
   */
  unsubscribe() {
    window.removeEventListener("vaadin-router-go", this.#navigationEventHandler);
  }
  #onNavigationEvent(event) {
    const { pathname, search, hash } = event instanceof CustomEvent ? event.detail : window.location;
    if (isString(this.__normalizePathname(pathname))) {
      if (event?.preventDefault) {
        event.preventDefault();
      }
      void this.render({ pathname, search, hash }, true);
    }
  }
  /**
   * Configures what triggers Router navigation events:
   *  - `POPSTATE`: popstate events on the current `window`
   *  - `CLICK`: click events on `<a>` links leading to the current page
   *
   * This method is invoked with the pre-configured values when creating a new Router instance.
   * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
   *
   * See the `router-config.js` for the default navigation triggers config. Based on it, you can
   * create the own one and only import the triggers you need, instead of pulling in all the code,
   * e.g. if you want to handle `click` differently.
   *
   * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * @param triggers - navigation triggers
   */
  static setTriggers(...triggers) {
    setNavigationTriggers(triggers);
  }
  /**
   * Generates a URL for the route with the given name, optionally performing
   * substitution of parameters.
   *
   * The route is searched in all the Router instances subscribed to
   * navigation events.
   *
   * **Note:** For child route names, only array children are considered.
   * It is not possible to generate URLs using a name for routes set with
   * a children function.
   *
   * @param name - The route name or the route’s `component` name.
   * @param params - Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   */
  urlForName(name, params) {
    if (!this.#urlForName) {
      this.#urlForName = generateUrls(this, {
        cacheKeyProvider(route) {
          return "component" in route && typeof route.component === "string" ? route.component : void 0;
        }
      });
    }
    return getPathnameForRouter(this.#urlForName(name, params ?? void 0), this);
  }
  /**
   * Generates a URL for the given route path, optionally performing
   * substitution of parameters.
   *
   * @param path - String route path declared in [express.js
   * syntax](https://expressjs.com/en/guide/routing.html#route-paths).
   * @param params - Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   */
  urlForPath(path, params) {
    return getPathnameForRouter(
      compile(path)(params ?? void 0),
      this
    );
  }
  /**
   * Triggers navigation to a new path. Returns a boolean without waiting until
   * the navigation is complete. Returns `true` if at least one `Router`
   * has handled the navigation (was subscribed and had `baseUrl` matching
   * the `path` argument), otherwise returns `false`.
   *
   * @param path - A new in-app path string, or an URL-like object with
   * `pathname` string property, and optional `search` and `hash` string
   * properties.
   */
  static go(path) {
    const { pathname, search, hash } = isString(path) ? new URL(path, "http://a") : path;
    return fireRouterEvent("go", { pathname, search, hash });
  }
}
export {
  Router
};
//# sourceMappingURL=router.js.map
