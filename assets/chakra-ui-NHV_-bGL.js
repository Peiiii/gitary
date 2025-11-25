import { a as __toCommonJS, n as __esmMin, r as __export, s as __toESM, t as __commonJSMin } from "./rolldown-runtime-p26lAE5v.js";
function isHTMLElement$2(el$1) {
	return el$1 != null && typeof el$1 == "object" && "nodeType" in el$1 && el$1.nodeType === Node.ELEMENT_NODE;
}
function isBrowser$1() {
	return Boolean(globalThis?.document);
}
function isHiddenElement(element) {
	if (element.parentElement && isHiddenElement(element.parentElement)) return true;
	return element.hidden;
}
function isContentEditableElement(element) {
	const value = element.getAttribute("contenteditable");
	return value !== "false" && value != null;
}
function isDisabledElement(element) {
	return Boolean(element.getAttribute("disabled")) === true || Boolean(element.getAttribute("aria-disabled")) === true;
}
function getOwnerWindow(node$1) {
	return getOwnerDocument$2(node$1)?.defaultView ?? window;
}
function getOwnerDocument$2(node$1) {
	return isHTMLElement$2(node$1) ? node$1.ownerDocument : document;
}
function getActiveElement(node$1) {
	return getOwnerDocument$2(node$1).activeElement;
}
function assignAfter(target, ...sources) {
	if (target == null) throw new TypeError("Cannot convert undefined or null to object");
	const result = { ...target };
	for (const nextSource of sources) {
		if (nextSource == null) continue;
		for (const nextKey in nextSource) {
			if (!Object.prototype.hasOwnProperty.call(nextSource, nextKey)) continue;
			if (nextKey in result) delete result[nextKey];
			result[nextKey] = nextSource[nextKey];
		}
	}
	return result;
}
var dataAttr = (condition) => condition ? "" : void 0;
function isArray(value) {
	return Array.isArray(value);
}
function isObject(value) {
	const type = typeof value;
	return value != null && (type === "object" || type === "function") && !isArray(value);
}
function getLastItem(array) {
	const length$1 = array == null ? 0 : array.length;
	return length$1 ? array[length$1 - 1] : void 0;
}
function analyzeCSSValue$1(value) {
	const num = parseFloat(value.toString());
	const unit = value.toString().replace(String(num), "");
	return {
		unitless: !unit,
		value: num,
		unit
	};
}
function px$1(value) {
	if (value == null) return value;
	const { unitless } = analyzeCSSValue$1(value);
	return unitless || typeof value === "number" ? `${value}px` : value;
}
var sortByBreakpointValue = (a, b$1) => parseInt(a[1], 10) > parseInt(b$1[1], 10) ? 1 : -1;
var sortBps = (breakpoints$2) => Object.fromEntries(Object.entries(breakpoints$2).sort(sortByBreakpointValue));
function normalize$1(breakpoints$2) {
	const sorted = sortBps(breakpoints$2);
	return Object.assign(Object.values(sorted), sorted);
}
function keys(breakpoints$2) {
	const value = Object.keys(sortBps(breakpoints$2));
	return new Set(value);
}
function subtract$2(value) {
	if (!value) return value;
	value = px$1(value) ?? value;
	const OFFSET = -.02;
	return typeof value === "number" ? `${value + OFFSET}` : value.replace(/(\d+\.?\d*)/u, (m$2) => `${parseFloat(m$2) + OFFSET}`);
}
function toMediaQueryString(min$1, max$1) {
	const query = ["@media screen"];
	if (min$1) query.push("and", `(min-width: ${px$1(min$1)})`);
	if (max$1) query.push("and", `(max-width: ${px$1(max$1)})`);
	return query.join(" ");
}
function analyzeBreakpoints(breakpoints$2) {
	if (!breakpoints$2) return null;
	breakpoints$2.base = breakpoints$2.base ?? "0px";
	const normalized = normalize$1(breakpoints$2);
	const queries = Object.entries(breakpoints$2).sort(sortByBreakpointValue).map(([breakpoint, minW], index$1, entry) => {
		let [, maxW] = entry[index$1 + 1] ?? [];
		maxW = parseFloat(maxW) > 0 ? subtract$2(maxW) : void 0;
		return {
			_minW: subtract$2(minW),
			breakpoint,
			minW,
			maxW,
			maxWQuery: toMediaQueryString(null, maxW),
			minWQuery: toMediaQueryString(minW),
			minMaxQuery: toMediaQueryString(minW, maxW)
		};
	});
	const _keys = keys(breakpoints$2);
	const _keysArr = Array.from(_keys.values());
	return {
		keys: _keys,
		normalized,
		isResponsive(test$1) {
			const keys2 = Object.keys(test$1);
			return keys2.length > 0 && keys2.every((key) => _keys.has(key));
		},
		asObject: sortBps(breakpoints$2),
		asArray: normalize$1(breakpoints$2),
		details: queries,
		get(key) {
			return queries.find((q$4) => q$4.breakpoint === key);
		},
		media: [null, ...normalized.map((minW) => toMediaQueryString(minW)).slice(1)],
		toArrayValue(test$1) {
			if (!isObject(test$1)) throw new Error("toArrayValue: value must be an object");
			const result = _keysArr.map((bp) => test$1[bp] ?? null);
			while (getLastItem(result) === null) result.pop();
			return result;
		},
		toObjectValue(test$1) {
			if (!Array.isArray(test$1)) throw new Error("toObjectValue: value must be an array");
			return test$1.reduce((acc, value, index$1) => {
				const key = _keysArr[index$1];
				if (key != null && value != null) acc[key] = value;
				return acc;
			}, {});
		}
	};
}
function callAll(...fns) {
	return function mergedFn(...args) {
		fns.forEach((fn) => fn?.(...args));
	};
}
function callAllHandlers(...fns) {
	return function func(event) {
		fns.some((fn) => {
			fn?.(event);
			return event?.defaultPrevented;
		});
	};
}
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var l$3 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$4 = Symbol.for("react.fragment"), q$3 = Symbol.for("react.strict_mode"), r$3 = Symbol.for("react.profiler"), t$3 = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$3 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$2 = Symbol.for("react.lazy"), z$3 = Symbol.iterator;
	function A$3(a) {
		if (null === a || "object" !== typeof a) return null;
		a = z$3 && a[z$3] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var B$2 = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, C$1 = Object.assign, D$2 = {};
	function E$2(a, b$1, e$1) {
		this.props = a;
		this.context = b$1;
		this.refs = D$2;
		this.updater = e$1 || B$2;
	}
	E$2.prototype.isReactComponent = {};
	E$2.prototype.setState = function(a, b$1) {
		if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, a, b$1, "setState");
	};
	E$2.prototype.forceUpdate = function(a) {
		this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F$1() {}
	F$1.prototype = E$2.prototype;
	function G$2(a, b$1, e$1) {
		this.props = a;
		this.context = b$1;
		this.refs = D$2;
		this.updater = e$1 || B$2;
	}
	var H$2 = G$2.prototype = new F$1();
	H$2.constructor = G$2;
	C$1(H$2, E$2.prototype);
	H$2.isPureReactComponent = !0;
	var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function M$2(a, b$1, e$1) {
		var d$1, c$1 = {}, k$3 = null, h$2 = null;
		if (null != b$1) for (d$1 in void 0 !== b$1.ref && (h$2 = b$1.ref), void 0 !== b$1.key && (k$3 = "" + b$1.key), b$1) J$1.call(b$1, d$1) && !L$2.hasOwnProperty(d$1) && (c$1[d$1] = b$1[d$1]);
		var g$2 = arguments.length - 2;
		if (1 === g$2) c$1.children = e$1;
		else if (1 < g$2) {
			for (var f$3 = Array(g$2), m$2 = 0; m$2 < g$2; m$2++) f$3[m$2] = arguments[m$2 + 2];
			c$1.children = f$3;
		}
		if (a && a.defaultProps) for (d$1 in g$2 = a.defaultProps, g$2) void 0 === c$1[d$1] && (c$1[d$1] = g$2[d$1]);
		return {
			$$typeof: l$3,
			type: a,
			key: k$3,
			ref: h$2,
			props: c$1,
			_owner: K$2.current
		};
	}
	function N$2(a, b$1) {
		return {
			$$typeof: l$3,
			type: a.type,
			key: b$1,
			ref: a.ref,
			props: a.props,
			_owner: a._owner
		};
	}
	function O$2(a) {
		return "object" === typeof a && null !== a && a.$$typeof === l$3;
	}
	function escape$2(a) {
		var b$1 = {
			"=": "=0",
			":": "=2"
		};
		return "$" + a.replace(/[=:]/g, function(a$1) {
			return b$1[a$1];
		});
	}
	var P$2 = /\/+/g;
	function Q$2(a, b$1) {
		return "object" === typeof a && null !== a && null != a.key ? escape$2("" + a.key) : b$1.toString(36);
	}
	function R$2(a, b$1, e$1, d$1, c$1) {
		var k$3 = typeof a;
		if ("undefined" === k$3 || "boolean" === k$3) a = null;
		var h$2 = !1;
		if (null === a) h$2 = !0;
		else switch (k$3) {
			case "string":
			case "number":
				h$2 = !0;
				break;
			case "object": switch (a.$$typeof) {
				case l$3:
				case n$2: h$2 = !0;
			}
		}
		if (h$2) return h$2 = a, c$1 = c$1(h$2), a = "" === d$1 ? "." + Q$2(h$2, 0) : d$1, I$2(c$1) ? (e$1 = "", null != a && (e$1 = a.replace(P$2, "$&/") + "/"), R$2(c$1, b$1, e$1, "", function(a$1) {
			return a$1;
		})) : null != c$1 && (O$2(c$1) && (c$1 = N$2(c$1, e$1 + (!c$1.key || h$2 && h$2.key === c$1.key ? "" : ("" + c$1.key).replace(P$2, "$&/") + "/") + a)), b$1.push(c$1)), 1;
		h$2 = 0;
		d$1 = "" === d$1 ? "." : d$1 + ":";
		if (I$2(a)) for (var g$2 = 0; g$2 < a.length; g$2++) {
			k$3 = a[g$2];
			var f$3 = d$1 + Q$2(k$3, g$2);
			h$2 += R$2(k$3, b$1, e$1, f$3, c$1);
		}
		else if (f$3 = A$3(a), "function" === typeof f$3) for (a = f$3.call(a), g$2 = 0; !(k$3 = a.next()).done;) k$3 = k$3.value, f$3 = d$1 + Q$2(k$3, g$2++), h$2 += R$2(k$3, b$1, e$1, f$3, c$1);
		else if ("object" === k$3) throw b$1 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b$1 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b$1) + "). If you meant to render a collection of children, use an array instead.");
		return h$2;
	}
	function S$2(a, b$1, e$1) {
		if (null == a) return a;
		var d$1 = [], c$1 = 0;
		R$2(a, d$1, "", "", function(a$1) {
			return b$1.call(e$1, a$1, c$1++);
		});
		return d$1;
	}
	function T$2(a) {
		if (-1 === a._status) {
			var b$1 = a._result;
			b$1 = b$1();
			b$1.then(function(b$2) {
				if (0 === a._status || -1 === a._status) a._status = 1, a._result = b$2;
			}, function(b$2) {
				if (0 === a._status || -1 === a._status) a._status = 2, a._result = b$2;
			});
			-1 === a._status && (a._status = 0, a._result = b$1);
		}
		if (1 === a._status) return a._result.default;
		throw a._result;
	}
	var U$2 = { current: null }, V$1 = { transition: null }, W$1 = {
		ReactCurrentDispatcher: U$2,
		ReactCurrentBatchConfig: V$1,
		ReactCurrentOwner: K$2
	};
	function X$1() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	exports.Children = {
		map: S$2,
		forEach: function(a, b$1, e$1) {
			S$2(a, function() {
				b$1.apply(this, arguments);
			}, e$1);
		},
		count: function(a) {
			var b$1 = 0;
			S$2(a, function() {
				b$1++;
			});
			return b$1;
		},
		toArray: function(a) {
			return S$2(a, function(a$1) {
				return a$1;
			}) || [];
		},
		only: function(a) {
			if (!O$2(a)) throw Error("React.Children.only expected to receive a single React element child.");
			return a;
		}
	};
	exports.Component = E$2;
	exports.Fragment = p$4;
	exports.Profiler = r$3;
	exports.PureComponent = G$2;
	exports.StrictMode = q$3;
	exports.Suspense = w$1;
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
	exports.act = X$1;
	exports.cloneElement = function(a, b$1, e$1) {
		if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
		var d$1 = C$1({}, a.props), c$1 = a.key, k$3 = a.ref, h$2 = a._owner;
		if (null != b$1) {
			void 0 !== b$1.ref && (k$3 = b$1.ref, h$2 = K$2.current);
			void 0 !== b$1.key && (c$1 = "" + b$1.key);
			if (a.type && a.type.defaultProps) var g$2 = a.type.defaultProps;
			for (f$3 in b$1) J$1.call(b$1, f$3) && !L$2.hasOwnProperty(f$3) && (d$1[f$3] = void 0 === b$1[f$3] && void 0 !== g$2 ? g$2[f$3] : b$1[f$3]);
		}
		var f$3 = arguments.length - 2;
		if (1 === f$3) d$1.children = e$1;
		else if (1 < f$3) {
			g$2 = Array(f$3);
			for (var m$2 = 0; m$2 < f$3; m$2++) g$2[m$2] = arguments[m$2 + 2];
			d$1.children = g$2;
		}
		return {
			$$typeof: l$3,
			type: a.type,
			key: c$1,
			ref: k$3,
			props: d$1,
			_owner: h$2
		};
	};
	exports.createContext = function(a) {
		a = {
			$$typeof: u$1,
			_currentValue: a,
			_currentValue2: a,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		};
		a.Provider = {
			$$typeof: t$3,
			_context: a
		};
		return a.Consumer = a;
	};
	exports.createElement = M$2;
	exports.createFactory = function(a) {
		var b$1 = M$2.bind(null, a);
		b$1.type = a;
		return b$1;
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(a) {
		return {
			$$typeof: v$3,
			render: a
		};
	};
	exports.isValidElement = O$2;
	exports.lazy = function(a) {
		return {
			$$typeof: y$2,
			_payload: {
				_status: -1,
				_result: a
			},
			_init: T$2
		};
	};
	exports.memo = function(a, b$1) {
		return {
			$$typeof: x$1,
			type: a,
			compare: void 0 === b$1 ? null : b$1
		};
	};
	exports.startTransition = function(a) {
		var b$1 = V$1.transition;
		V$1.transition = {};
		try {
			a();
		} finally {
			V$1.transition = b$1;
		}
	};
	exports.unstable_act = X$1;
	exports.useCallback = function(a, b$1) {
		return U$2.current.useCallback(a, b$1);
	};
	exports.useContext = function(a) {
		return U$2.current.useContext(a);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(a) {
		return U$2.current.useDeferredValue(a);
	};
	exports.useEffect = function(a, b$1) {
		return U$2.current.useEffect(a, b$1);
	};
	exports.useId = function() {
		return U$2.current.useId();
	};
	exports.useImperativeHandle = function(a, b$1, e$1) {
		return U$2.current.useImperativeHandle(a, b$1, e$1);
	};
	exports.useInsertionEffect = function(a, b$1) {
		return U$2.current.useInsertionEffect(a, b$1);
	};
	exports.useLayoutEffect = function(a, b$1) {
		return U$2.current.useLayoutEffect(a, b$1);
	};
	exports.useMemo = function(a, b$1) {
		return U$2.current.useMemo(a, b$1);
	};
	exports.useReducer = function(a, b$1, e$1) {
		return U$2.current.useReducer(a, b$1, e$1);
	};
	exports.useRef = function(a) {
		return U$2.current.useRef(a);
	};
	exports.useState = function(a) {
		return U$2.current.useState(a);
	};
	exports.useSyncExternalStore = function(a, b$1, e$1) {
		return U$2.current.useSyncExternalStore(a, b$1, e$1);
	};
	exports.useTransition = function() {
		return U$2.current.useTransition();
	};
	exports.version = "18.3.1";
}));
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production_min();
}));
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function getValidChildren(children) {
	return import_react.Children.toArray(children).filter((child) => (0, import_react.isValidElement)(child));
}
function compact(object) {
	const clone = Object.assign({}, object);
	for (let key in clone) if (clone[key] === void 0) delete clone[key];
	return clone;
}
function getErrorMessage(hook, provider) {
	return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}
function createContext(options = {}) {
	const { name, strict = true, hookName = "useContext", providerName = "Provider", errorMessage, defaultValue } = options;
	const Context = (0, import_react.createContext)(defaultValue);
	Context.displayName = name;
	function useContext$1$1() {
		const context = (0, import_react.useContext)(Context);
		if (!context && strict) {
			const error = new Error(errorMessage ?? getErrorMessage(hookName, providerName));
			error.name = "ContextError";
			Error.captureStackTrace?.(error, useContext$1$1);
			throw error;
		}
		return context;
	}
	return [
		Context.Provider,
		useContext$1$1,
		Context
	];
}
var cx$1 = (...classNames$1) => classNames$1.filter(Boolean).join(" ");
var hasTabIndex = (element) => element.hasAttribute("tabindex");
var hasNegativeTabIndex = (element) => hasTabIndex(element) && element.tabIndex === -1;
function isFocusable(element) {
	if (!isHTMLElement$2(element) || isHiddenElement(element) || isDisabledElement(element)) return false;
	const { localName } = element;
	if ([
		"input",
		"select",
		"textarea",
		"button"
	].indexOf(localName) >= 0) return true;
	const others$1 = {
		a: () => element.hasAttribute("href"),
		audio: () => element.hasAttribute("controls"),
		video: () => element.hasAttribute("controls")
	};
	if (localName in others$1) return others$1[localName]();
	if (isContentEditableElement(element)) return true;
	return hasTabIndex(element);
}
function isTabbable(element) {
	if (!element) return false;
	return isHTMLElement$2(element) && isFocusable(element) && !hasNegativeTabIndex(element);
}
function get$2(obj, path, fallback, index$1) {
	const key = typeof path === "string" ? path.split(".") : [path];
	for (index$1 = 0; index$1 < key.length; index$1 += 1) {
		if (!obj) break;
		obj = obj[key[index$1]];
	}
	return obj === void 0 ? fallback : obj;
}
var memoize$3 = (fn) => {
	const cache$1 = /* @__PURE__ */ new WeakMap();
	const memoizedFn = (obj, path, fallback, index$1) => {
		if (typeof obj === "undefined") return fn(obj, path, fallback);
		if (!cache$1.has(obj)) cache$1.set(obj, /* @__PURE__ */ new Map());
		const map = cache$1.get(obj);
		if (map.has(path)) return map.get(path);
		const value = fn(obj, path, fallback, index$1);
		map.set(path, value);
		return value;
	};
	return memoizedFn;
};
var memoizedGet = memoize$3(get$2);
var interopDefault = (mod) => mod.default || mod;
function lazyDisclosure(options) {
	const { wasSelected, enabled, isSelected, mode: mode$1 = "unmount" } = options;
	if (!enabled) return true;
	if (isSelected) return true;
	if (mode$1 === "keepMounted" && wasSelected) return true;
	return false;
}
function omit(object, keysToOmit = []) {
	const clone = Object.assign({}, object);
	for (const key of keysToOmit) if (key in clone) delete clone[key];
	return clone;
}
function pick(object, keysToPick) {
	const result = {};
	for (const key of keysToPick) if (key in object) result[key] = object[key];
	return result;
}
Object.freeze([
	"base",
	"sm",
	"md",
	"lg",
	"xl",
	"2xl"
]);
function mapResponsive(prop, mapper) {
	if (Array.isArray(prop)) return prop.map((item) => item === null ? null : mapper(item));
	if (isObject(prop)) return Object.keys(prop).reduce((result, key) => {
		result[key] = mapper(prop[key]);
		return result;
	}, {});
	if (prop != null) return mapper(prop);
	return null;
}
var isFunction$3 = (value) => typeof value === "function";
function runIfFn(valueOrFn, ...args) {
	return isFunction$3(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
function isScrollParent$1(el$1) {
	const { overflow, overflowX, overflowY } = (el$1.ownerDocument.defaultView || window).getComputedStyle(el$1);
	return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getParent(el$1) {
	if (el$1.localName === "html") return el$1;
	return el$1.assignedSlot || el$1.parentElement || el$1.ownerDocument.documentElement;
}
function getScrollParent(el$1) {
	if ([
		"html",
		"body",
		"#document"
	].includes(el$1.localName)) return el$1.ownerDocument.body;
	if (isHTMLElement$2(el$1) && isScrollParent$1(el$1)) return el$1;
	return getScrollParent(getParent(el$1));
}
function splitProps(props, ...keys$1) {
	const descriptors = Object.getOwnPropertyDescriptors(props);
	const dKeys = Object.keys(descriptors);
	const split = (k$3) => {
		const clone = {};
		for (let i = 0; i < k$3.length; i++) {
			const key = k$3[i];
			if (descriptors[key]) {
				Object.defineProperty(clone, key, descriptors[key]);
				delete descriptors[key];
			}
		}
		return clone;
	};
	const fn = (key) => split(Array.isArray(key) ? key : dKeys.filter(key));
	return keys$1.map(fn).concat(split(dKeys));
}
function walkObject(target, predicate, options = {}) {
	const { stop, getKey } = options;
	function inner(value, path = []) {
		if (isObject(value) || Array.isArray(value)) {
			const result = {};
			for (const [prop, child] of Object.entries(value)) {
				const key = getKey?.(prop) ?? prop;
				const childPath = [...path, key];
				if (stop?.(value, childPath)) return predicate(value, path);
				result[key] = inner(child, childPath);
			}
			return result;
		}
		return predicate(value, path);
	}
	return inner(target);
}
var import_lodash = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var LARGE_ARRAY_SIZE = 200;
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	var HOT_COUNT = 800, HOT_SPAN = 16;
	var MAX_SAFE_INTEGER = 9007199254740991;
	var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
	var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
	var freeSelf = typeof self == "object" && self && self.Object === Object && self;
	var root = freeGlobal || freeSelf || Function("return this")();
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	var moduleExports = freeModule && freeModule.exports === freeExports;
	var freeProcess = moduleExports && freeGlobal.process;
	var nodeUtil = function() {
		try {
			var types$1 = freeModule && freeModule.require && freeModule.require("util").types;
			if (types$1) return types$1;
			return freeProcess && freeProcess.binding && freeProcess.binding("util");
		} catch (e$1) {}
	}();
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	function apply(func, thisArg, args) {
		switch (args.length) {
			case 0: return func.call(thisArg);
			case 1: return func.call(thisArg, args[0]);
			case 2: return func.call(thisArg, args[0], args[1]);
			case 3: return func.call(thisArg, args[0], args[1], args[2]);
		}
		return func.apply(thisArg, args);
	}
	function baseTimes(n$3, iteratee) {
		var index$1 = -1, result = Array(n$3);
		while (++index$1 < n$3) result[index$1] = iteratee(index$1);
		return result;
	}
	function baseUnary(func) {
		return function(value) {
			return func(value);
		};
	}
	function getValue(object, key) {
		return object == null ? void 0 : object[key];
	}
	function overArg(func, transform$1) {
		return function(arg) {
			return func(transform$1(arg));
		};
	}
	var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
	var coreJsData = root["__core-js_shared__"];
	var funcToString = funcProto.toString;
	var hasOwnProperty = objectProto.hasOwnProperty;
	var maskSrcKey = function() {
		var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
		return uid ? "Symbol(src)_1." + uid : "";
	}();
	var nativeObjectToString = objectProto.toString;
	var objectCtorString = funcToString.call(Object);
	var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	var Buffer = moduleExports ? root.Buffer : void 0, Symbol$1 = root.Symbol, Uint8Array = root.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
	var defineProperty$1 = function() {
		try {
			var func = getNative(Object, "defineProperty");
			func({}, "", {});
			return func;
		} catch (e$1) {}
	}();
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeMax = Math.max, nativeNow = Date.now;
	var Map$1 = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
	var baseCreate = function() {
		function object() {}
		return function(proto) {
			if (!isObject$1(proto)) return {};
			if (objectCreate) return objectCreate(proto);
			object.prototype = proto;
			var result = new object();
			object.prototype = void 0;
			return result;
		};
	}();
	function Hash(entries) {
		var index$1 = -1, length$1 = entries == null ? 0 : entries.length;
		this.clear();
		while (++index$1 < length$1) {
			var entry = entries[index$1];
			this.set(entry[0], entry[1]);
		}
	}
	function hashClear() {
		this.__data__ = nativeCreate ? nativeCreate(null) : {};
		this.size = 0;
	}
	function hashDelete(key) {
		var result = this.has(key) && delete this.__data__[key];
		this.size -= result ? 1 : 0;
		return result;
	}
	function hashGet(key) {
		var data = this.__data__;
		if (nativeCreate) {
			var result = data[key];
			return result === HASH_UNDEFINED ? void 0 : result;
		}
		return hasOwnProperty.call(data, key) ? data[key] : void 0;
	}
	function hashHas(key) {
		var data = this.__data__;
		return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
	}
	function hashSet(key, value) {
		var data = this.__data__;
		this.size += this.has(key) ? 0 : 1;
		data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
		return this;
	}
	Hash.prototype.clear = hashClear;
	Hash.prototype["delete"] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	function ListCache(entries) {
		var index$1 = -1, length$1 = entries == null ? 0 : entries.length;
		this.clear();
		while (++index$1 < length$1) {
			var entry = entries[index$1];
			this.set(entry[0], entry[1]);
		}
	}
	function listCacheClear() {
		this.__data__ = [];
		this.size = 0;
	}
	function listCacheDelete(key) {
		var data = this.__data__, index$1 = assocIndexOf(data, key);
		if (index$1 < 0) return false;
		if (index$1 == data.length - 1) data.pop();
		else splice.call(data, index$1, 1);
		--this.size;
		return true;
	}
	function listCacheGet(key) {
		var data = this.__data__, index$1 = assocIndexOf(data, key);
		return index$1 < 0 ? void 0 : data[index$1][1];
	}
	function listCacheHas(key) {
		return assocIndexOf(this.__data__, key) > -1;
	}
	function listCacheSet(key, value) {
		var data = this.__data__, index$1 = assocIndexOf(data, key);
		if (index$1 < 0) {
			++this.size;
			data.push([key, value]);
		} else data[index$1][1] = value;
		return this;
	}
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype["delete"] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	function MapCache(entries) {
		var index$1 = -1, length$1 = entries == null ? 0 : entries.length;
		this.clear();
		while (++index$1 < length$1) {
			var entry = entries[index$1];
			this.set(entry[0], entry[1]);
		}
	}
	function mapCacheClear() {
		this.size = 0;
		this.__data__ = {
			"hash": new Hash(),
			"map": new (Map$1 || ListCache)(),
			"string": new Hash()
		};
	}
	function mapCacheDelete(key) {
		var result = getMapData(this, key)["delete"](key);
		this.size -= result ? 1 : 0;
		return result;
	}
	function mapCacheGet(key) {
		return getMapData(this, key).get(key);
	}
	function mapCacheHas(key) {
		return getMapData(this, key).has(key);
	}
	function mapCacheSet(key, value) {
		var data = getMapData(this, key), size$1 = data.size;
		data.set(key, value);
		this.size += data.size == size$1 ? 0 : 1;
		return this;
	}
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype["delete"] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	function Stack$1(entries) {
		this.size = (this.__data__ = new ListCache(entries)).size;
	}
	function stackClear() {
		this.__data__ = new ListCache();
		this.size = 0;
	}
	function stackDelete(key) {
		var data = this.__data__, result = data["delete"](key);
		this.size = data.size;
		return result;
	}
	function stackGet(key) {
		return this.__data__.get(key);
	}
	function stackHas(key) {
		return this.__data__.has(key);
	}
	function stackSet(key, value) {
		var data = this.__data__;
		if (data instanceof ListCache) {
			var pairs = data.__data__;
			if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
				pairs.push([key, value]);
				this.size = ++data.size;
				return this;
			}
			data = this.__data__ = new MapCache(pairs);
		}
		data.set(key, value);
		this.size = data.size;
		return this;
	}
	Stack$1.prototype.clear = stackClear;
	Stack$1.prototype["delete"] = stackDelete;
	Stack$1.prototype.get = stackGet;
	Stack$1.prototype.has = stackHas;
	Stack$1.prototype.set = stackSet;
	function arrayLikeKeys(value, inherited) {
		var isArr = isArray$1(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length$1 = result.length;
		for (var key in value) if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length$1)))) result.push(key);
		return result;
	}
	function assignMergeValue(object, key, value) {
		if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
	function assignValue(object, key, value) {
		var objValue = object[key];
		if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
	function assocIndexOf(array, key) {
		var length$1 = array.length;
		while (length$1--) if (eq(array[length$1][0], key)) return length$1;
		return -1;
	}
	function baseAssignValue(object, key, value) {
		if (key == "__proto__" && defineProperty$1) defineProperty$1(object, key, {
			"configurable": true,
			"enumerable": true,
			"value": value,
			"writable": true
		});
		else object[key] = value;
	}
	var baseFor = createBaseFor();
	function baseGetTag(value) {
		if (value == null) return value === void 0 ? undefinedTag : nullTag;
		return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	function baseIsArguments(value) {
		return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	function baseIsNative(value) {
		if (!isObject$1(value) || isMasked(value)) return false;
		return (isFunction$2(value) ? reIsNative : reIsHostCtor).test(toSource(value));
	}
	function baseIsTypedArray(value) {
		return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	function baseKeysIn(object) {
		if (!isObject$1(object)) return nativeKeysIn(object);
		var isProto = isPrototype(object), result = [];
		for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
		return result;
	}
	function baseMerge(object, source, srcIndex, customizer, stack) {
		if (object === source) return;
		baseFor(source, function(srcValue, key) {
			stack || (stack = new Stack$1());
			if (isObject$1(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
			else {
				var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
				if (newValue === void 0) newValue = srcValue;
				assignMergeValue(object, key, newValue);
			}
		}, keysIn);
	}
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
		var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
		if (stacked) {
			assignMergeValue(object, key, stacked);
			return;
		}
		var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
		var isCommon = newValue === void 0;
		if (isCommon) {
			var isArr = isArray$1(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
			newValue = srcValue;
			if (isArr || isBuff || isTyped) if (isArray$1(objValue)) newValue = objValue;
			else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
			else if (isBuff) {
				isCommon = false;
				newValue = cloneBuffer(srcValue, true);
			} else if (isTyped) {
				isCommon = false;
				newValue = cloneTypedArray(srcValue, true);
			} else newValue = [];
			else if (isPlainObject(srcValue) || isArguments(srcValue)) {
				newValue = objValue;
				if (isArguments(objValue)) newValue = toPlainObject(objValue);
				else if (!isObject$1(objValue) || isFunction$2(objValue)) newValue = initCloneObject(srcValue);
			} else isCommon = false;
		}
		if (isCommon) {
			stack.set(srcValue, newValue);
			mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
			stack["delete"](srcValue);
		}
		assignMergeValue(object, key, newValue);
	}
	function baseRest(func, start$1) {
		return setToString(overRest(func, start$1, identity), func + "");
	}
	var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
		return defineProperty$1(func, "toString", {
			"configurable": true,
			"enumerable": false,
			"value": constant(string),
			"writable": true
		});
	};
	function cloneBuffer(buffer, isDeep) {
		if (isDeep) return buffer.slice();
		var length$1 = buffer.length, result = allocUnsafe ? allocUnsafe(length$1) : new buffer.constructor(length$1);
		buffer.copy(result);
		return result;
	}
	function cloneArrayBuffer(arrayBuffer) {
		var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
		new Uint8Array(result).set(new Uint8Array(arrayBuffer));
		return result;
	}
	function cloneTypedArray(typedArray, isDeep) {
		var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
		return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	function copyArray(source, array) {
		var index$1 = -1, length$1 = source.length;
		array || (array = Array(length$1));
		while (++index$1 < length$1) array[index$1] = source[index$1];
		return array;
	}
	function copyObject(source, props, object, customizer) {
		var isNew = !object;
		object || (object = {});
		var index$1 = -1, length$1 = props.length;
		while (++index$1 < length$1) {
			var key = props[index$1];
			var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
			if (newValue === void 0) newValue = source[key];
			if (isNew) baseAssignValue(object, key, newValue);
			else assignValue(object, key, newValue);
		}
		return object;
	}
	function createAssigner(assigner) {
		return baseRest(function(object, sources) {
			var index$1 = -1, length$1 = sources.length, customizer = length$1 > 1 ? sources[length$1 - 1] : void 0, guard$1 = length$1 > 2 ? sources[2] : void 0;
			customizer = assigner.length > 3 && typeof customizer == "function" ? (length$1--, customizer) : void 0;
			if (guard$1 && isIterateeCall(sources[0], sources[1], guard$1)) {
				customizer = length$1 < 3 ? void 0 : customizer;
				length$1 = 1;
			}
			object = Object(object);
			while (++index$1 < length$1) {
				var source = sources[index$1];
				if (source) assigner(object, source, index$1, customizer);
			}
			return object;
		});
	}
	function createBaseFor(fromRight) {
		return function(object, iteratee, keysFunc) {
			var index$1 = -1, iterable = Object(object), props = keysFunc(object), length$1 = props.length;
			while (length$1--) {
				var key = props[fromRight ? length$1 : ++index$1];
				if (iteratee(iterable[key], key, iterable) === false) break;
			}
			return object;
		};
	}
	function getMapData(map, key) {
		var data = map.__data__;
		return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
	}
	function getNative(object, key) {
		var value = getValue(object, key);
		return baseIsNative(value) ? value : void 0;
	}
	function getRawTag(value) {
		var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
		try {
			value[symToStringTag] = void 0;
			var unmasked = true;
		} catch (e$1) {}
		var result = nativeObjectToString.call(value);
		if (unmasked) if (isOwn) value[symToStringTag] = tag;
		else delete value[symToStringTag];
		return result;
	}
	function initCloneObject(object) {
		return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
	}
	function isIndex(value, length$1) {
		var type = typeof value;
		length$1 = length$1 == null ? MAX_SAFE_INTEGER : length$1;
		return !!length$1 && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length$1;
	}
	function isIterateeCall(value, index$1, object) {
		if (!isObject$1(object)) return false;
		var type = typeof index$1;
		if (type == "number" ? isArrayLike(object) && isIndex(index$1, object.length) : type == "string" && index$1 in object) return eq(object[index$1], value);
		return false;
	}
	function isKeyable(value) {
		var type = typeof value;
		return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
	}
	function isMasked(func) {
		return !!maskSrcKey && maskSrcKey in func;
	}
	function isPrototype(value) {
		var Ctor = value && value.constructor;
		return value === (typeof Ctor == "function" && Ctor.prototype || objectProto);
	}
	function nativeKeysIn(object) {
		var result = [];
		if (object != null) for (var key in Object(object)) result.push(key);
		return result;
	}
	function objectToString(value) {
		return nativeObjectToString.call(value);
	}
	function overRest(func, start$1, transform$1) {
		start$1 = nativeMax(start$1 === void 0 ? func.length - 1 : start$1, 0);
		return function() {
			var args = arguments, index$1 = -1, length$1 = nativeMax(args.length - start$1, 0), array = Array(length$1);
			while (++index$1 < length$1) array[index$1] = args[start$1 + index$1];
			index$1 = -1;
			var otherArgs = Array(start$1 + 1);
			while (++index$1 < start$1) otherArgs[index$1] = args[index$1];
			otherArgs[start$1] = transform$1(array);
			return apply(func, this, otherArgs);
		};
	}
	function safeGet(object, key) {
		if (key === "constructor" && typeof object[key] === "function") return;
		if (key == "__proto__") return;
		return object[key];
	}
	var setToString = shortOut(baseSetToString);
	function shortOut(func) {
		var count = 0, lastCalled = 0;
		return function() {
			var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
			lastCalled = stamp;
			if (remaining > 0) {
				if (++count >= HOT_COUNT) return arguments[0];
			} else count = 0;
			return func.apply(void 0, arguments);
		};
	}
	function toSource(func) {
		if (func != null) {
			try {
				return funcToString.call(func);
			} catch (e$1) {}
			try {
				return func + "";
			} catch (e$1) {}
		}
		return "";
	}
	function eq(value, other) {
		return value === other || value !== value && other !== other;
	}
	var isArguments = baseIsArguments(function() {
		return arguments;
	}()) ? baseIsArguments : function(value) {
		return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
	};
	var isArray$1 = Array.isArray;
	function isArrayLike(value) {
		return value != null && isLength(value.length) && !isFunction$2(value);
	}
	function isArrayLikeObject(value) {
		return isObjectLike(value) && isArrayLike(value);
	}
	var isBuffer = nativeIsBuffer || stubFalse;
	function isFunction$2(value) {
		if (!isObject$1(value)) return false;
		var tag = baseGetTag(value);
		return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	function isLength(value) {
		return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	function isObject$1(value) {
		var type = typeof value;
		return value != null && (type == "object" || type == "function");
	}
	function isObjectLike(value) {
		return value != null && typeof value == "object";
	}
	function isPlainObject(value) {
		if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
		var proto = getPrototype(value);
		if (proto === null) return true;
		var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
		return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	function toPlainObject(value) {
		return copyObject(value, keysIn(value));
	}
	function keysIn(object) {
		return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	var mergeWith$6 = createAssigner(function(object, source, srcIndex, customizer) {
		baseMerge(object, source, srcIndex, customizer);
	});
	function constant(value) {
		return function() {
			return value;
		};
	}
	function identity(value) {
		return value;
	}
	function stubFalse() {
		return false;
	}
	module.exports = mergeWith$6;
})))(), 1);
function useCallbackRef(callback, deps = []) {
	const callbackRef = (0, import_react.useRef)(callback);
	(0, import_react.useEffect)(() => {
		callbackRef.current = callback;
	});
	return (0, import_react.useCallback)((...args) => callbackRef.current?.(...args), deps);
}
function useEventListener(target, event, handler, options) {
	const listener = useCallbackRef(handler);
	(0, import_react.useEffect)(() => {
		const node$1 = typeof target === "function" ? target() : target ?? document;
		if (!handler || !node$1) return;
		node$1.addEventListener(event, listener, options);
		return () => {
			node$1.removeEventListener(event, listener, options);
		};
	}, [
		event,
		target,
		options,
		listener,
		handler
	]);
	return () => {
		(typeof target === "function" ? target() : target ?? document)?.removeEventListener(event, listener, options);
	};
}
function useAnimationState(props) {
	const { isOpen, ref } = props;
	const [mounted, setMounted] = (0, import_react.useState)(isOpen);
	const [once, setOnce] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!once) {
			setMounted(isOpen);
			setOnce(true);
		}
	}, [
		isOpen,
		once,
		mounted
	]);
	useEventListener(() => ref.current, "animationend", () => {
		setMounted(isOpen);
	});
	return {
		present: !(isOpen ? false : !mounted),
		onComplete() {
			const evt = new (getOwnerWindow(ref.current)).CustomEvent("animationend", { bubbles: true });
			ref.current?.dispatchEvent(evt);
		}
	};
}
function useDisclosure(props = {}) {
	const { onClose: onCloseProp, onOpen: onOpenProp, isOpen: isOpenProp, id: idProp } = props;
	const handleOpen = useCallbackRef(onOpenProp);
	const handleClose = useCallbackRef(onCloseProp);
	const [isOpenState, setIsOpen] = (0, import_react.useState)(props.defaultIsOpen || false);
	const isOpen = isOpenProp !== void 0 ? isOpenProp : isOpenState;
	const isControlled = isOpenProp !== void 0;
	const uid = (0, import_react.useId)();
	const id$3 = idProp ?? `disclosure-${uid}`;
	const onClose = (0, import_react.useCallback)(() => {
		if (!isControlled) setIsOpen(false);
		handleClose?.();
	}, [isControlled, handleClose]);
	const onOpen = (0, import_react.useCallback)(() => {
		if (!isControlled) setIsOpen(true);
		handleOpen?.();
	}, [isControlled, handleOpen]);
	const onToggle = (0, import_react.useCallback)(() => {
		if (isOpen) onClose();
		else onOpen();
	}, [
		isOpen,
		onOpen,
		onClose
	]);
	function getButtonProps(props2 = {}) {
		return {
			...props2,
			"aria-expanded": isOpen,
			"aria-controls": id$3,
			onClick(event) {
				props2.onClick?.(event);
				onToggle();
			}
		};
	}
	function getDisclosureProps(props2 = {}) {
		return {
			...props2,
			hidden: !isOpen,
			id: id$3
		};
	}
	return {
		isOpen,
		onOpen,
		onClose,
		onToggle,
		isControlled,
		getButtonProps,
		getDisclosureProps
	};
}
var useSafeLayoutEffect = Boolean(globalThis?.document) ? import_react.useLayoutEffect : import_react.useEffect;
var useUpdateEffect = (effect$4, deps) => {
	const renderCycleRef = (0, import_react.useRef)(false);
	const effectCycleRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (renderCycleRef.current && effectCycleRef.current) return effect$4();
		effectCycleRef.current = true;
	}, deps);
	(0, import_react.useEffect)(() => {
		renderCycleRef.current = true;
		return () => {
			renderCycleRef.current = false;
		};
	}, []);
};
function preventReturnFocus(containerRef) {
	const el$1 = containerRef.current;
	if (!el$1) return false;
	const activeElement = getActiveElement(el$1);
	if (!activeElement) return false;
	if (el$1.contains(activeElement)) return false;
	if (isTabbable(activeElement)) return true;
	return false;
}
function useFocusOnHide(containerRef, options) {
	const { shouldFocus: shouldFocusProp, visible, focusRef } = options;
	const shouldFocus = shouldFocusProp && !visible;
	useUpdateEffect(() => {
		if (!shouldFocus) return;
		if (preventReturnFocus(containerRef)) return;
		const el$1 = focusRef?.current || containerRef.current;
		let rafId;
		if (el$1) {
			rafId = requestAnimationFrame(() => {
				el$1.focus({ preventScroll: true });
			});
			return () => {
				cancelAnimationFrame(rafId);
			};
		}
	}, [
		shouldFocus,
		containerRef,
		focusRef
	]);
}
function useId$5(idProp, prefix$1) {
	const id$3 = (0, import_react.useId)();
	return (0, import_react.useMemo)(() => idProp || [prefix$1, id$3].filter(Boolean).join("-"), [
		idProp,
		prefix$1,
		id$3
	]);
}
function useIds(idProp, ...prefixes) {
	const id$3 = useId$5(idProp);
	return (0, import_react.useMemo)(() => {
		return prefixes.map((prefix$1) => `${prefix$1}-${id$3}`);
	}, [id$3, prefixes]);
}
function assignRef(ref, value) {
	if (ref == null) return;
	if (typeof ref === "function") {
		ref(value);
		return;
	}
	try {
		ref.current = value;
	} catch (error) {
		throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
	}
}
function mergeRefs(...refs) {
	return (node$1) => {
		refs.forEach((ref) => {
			assignRef(ref, node$1);
		});
	};
}
function useMergeRefs(...refs) {
	return (0, import_react.useMemo)(() => mergeRefs(...refs), refs);
}
function useOutsideClick(props) {
	const { ref, handler, enabled = true } = props;
	const savedHandler = useCallbackRef(handler);
	const state$1 = (0, import_react.useRef)({
		isPointerDown: false,
		ignoreEmulatedMouseEvents: false
	}).current;
	(0, import_react.useEffect)(() => {
		if (!enabled) return;
		const onPointerDown = (e$1) => {
			if (isValidEvent(e$1, ref)) state$1.isPointerDown = true;
		};
		const onMouseUp = (event) => {
			if (state$1.ignoreEmulatedMouseEvents) {
				state$1.ignoreEmulatedMouseEvents = false;
				return;
			}
			if (state$1.isPointerDown && handler && isValidEvent(event, ref)) {
				state$1.isPointerDown = false;
				savedHandler(event);
			}
		};
		const onTouchEnd = (event) => {
			state$1.ignoreEmulatedMouseEvents = true;
			if (handler && state$1.isPointerDown && isValidEvent(event, ref)) {
				state$1.isPointerDown = false;
				savedHandler(event);
			}
		};
		const doc = getOwnerDocument$1(ref.current);
		doc.addEventListener("mousedown", onPointerDown, true);
		doc.addEventListener("mouseup", onMouseUp, true);
		doc.addEventListener("touchstart", onPointerDown, true);
		doc.addEventListener("touchend", onTouchEnd, true);
		return () => {
			doc.removeEventListener("mousedown", onPointerDown, true);
			doc.removeEventListener("mouseup", onMouseUp, true);
			doc.removeEventListener("touchstart", onPointerDown, true);
			doc.removeEventListener("touchend", onTouchEnd, true);
		};
	}, [
		handler,
		ref,
		savedHandler,
		state$1,
		enabled
	]);
}
function isValidEvent(event, ref) {
	const target = event.composedPath?.()[0] ?? event.target;
	if (target) {
		if (!getOwnerDocument$1(target).contains(target)) return false;
	}
	return !ref.current?.contains(target);
}
function getOwnerDocument$1(node$1) {
	return node$1?.ownerDocument ?? document;
}
function useTimeout(callback, delay$1) {
	const fn = useCallbackRef(callback);
	(0, import_react.useEffect)(() => {
		if (delay$1 == null) return void 0;
		let timeoutId = null;
		timeoutId = window.setTimeout(() => {
			fn();
		}, delay$1);
		return () => {
			if (timeoutId) window.clearTimeout(timeoutId);
		};
	}, [delay$1, fn]);
}
var state = {
	open: (str, post) => `${str}[data-open], ${str}[open], ${str}[data-state=open] ${post}`,
	closed: (str, post) => `${str}[data-closed], ${str}[data-state=closed] ${post}`,
	hover: (str, post) => `${str}:hover ${post}, ${str}[data-hover] ${post}`,
	focus: (str, post) => `${str}:focus ${post}, ${str}[data-focus] ${post}`,
	focusVisible: (str, post) => `${str}:focus-visible ${post}`,
	focusWithin: (str, post) => `${str}:focus-within ${post}`,
	active: (str, post) => `${str}:active ${post}, ${str}[data-active] ${post}`,
	disabled: (str, post) => `${str}:disabled ${post}, ${str}[data-disabled] ${post}`,
	invalid: (str, post) => `${str}:invalid ${post}, ${str}[data-invalid] ${post}`,
	checked: (str, post) => `${str}:checked ${post}, ${str}[data-checked] ${post}`,
	indeterminate: (str, post) => `${str}:indeterminate ${post}, ${str}[aria-checked=mixed] ${post}, ${str}[data-indeterminate] ${post}`,
	readOnly: (str, post) => `${str}:read-only ${post}, ${str}[readonly] ${post}, ${str}[data-read-only] ${post}`,
	expanded: (str, post) => `${str}:read-only ${post}, ${str}[aria-expanded=true] ${post}, ${str}[data-expanded] ${post}`,
	placeholderShown: (str, post) => `${str}:placeholder-shown ${post}`
};
var toGroup = (fn) => merge$2((v$4) => fn(v$4, "&"), "[role=group]", "[data-group]", ".group");
var toPeer = (fn) => merge$2((v$4) => fn(v$4, "~ &"), "[data-peer]", ".peer");
var merge$2 = (fn, ...selectors) => selectors.map(fn).join(", ");
var pseudoSelectors = {
	_hover: "&:hover, &[data-hover]",
	_active: "&:active, &[data-active]",
	_focus: "&:focus, &[data-focus]",
	_highlighted: "&[data-highlighted]",
	_focusWithin: "&:focus-within, &[data-focus-within]",
	_focusVisible: "&:focus-visible, &[data-focus-visible]",
	_disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
	_readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
	_before: "&::before",
	_after: "&::after",
	_empty: "&:empty, &[data-empty]",
	_expanded: "&[aria-expanded=true], &[data-expanded], &[data-state=expanded]",
	_checked: "&[aria-checked=true], &[data-checked], &[data-state=checked]",
	_grabbed: "&[aria-grabbed=true], &[data-grabbed]",
	_pressed: "&[aria-pressed=true], &[data-pressed]",
	_invalid: "&[aria-invalid=true], &[data-invalid]",
	_valid: "&[data-valid], &[data-state=valid]",
	_loading: "&[data-loading], &[aria-busy=true]",
	_selected: "&[aria-selected=true], &[data-selected]",
	_hidden: "&[hidden], &[data-hidden]",
	_autofill: "&:-webkit-autofill",
	_even: "&:nth-of-type(even)",
	_odd: "&:nth-of-type(odd)",
	_first: "&:first-of-type",
	_firstLetter: "&::first-letter",
	_last: "&:last-of-type",
	_notFirst: "&:not(:first-of-type)",
	_notLast: "&:not(:last-of-type)",
	_visited: "&:visited",
	_activeLink: "&[aria-current=page]",
	_activeStep: "&[aria-current=step]",
	_indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]",
	_groupOpen: toGroup(state.open),
	_groupClosed: toGroup(state.closed),
	_groupHover: toGroup(state.hover),
	_peerHover: toPeer(state.hover),
	_groupFocus: toGroup(state.focus),
	_peerFocus: toPeer(state.focus),
	_groupFocusVisible: toGroup(state.focusVisible),
	_peerFocusVisible: toPeer(state.focusVisible),
	_groupActive: toGroup(state.active),
	_peerActive: toPeer(state.active),
	_groupDisabled: toGroup(state.disabled),
	_peerDisabled: toPeer(state.disabled),
	_groupInvalid: toGroup(state.invalid),
	_peerInvalid: toPeer(state.invalid),
	_groupChecked: toGroup(state.checked),
	_peerChecked: toPeer(state.checked),
	_groupFocusWithin: toGroup(state.focusWithin),
	_peerFocusWithin: toPeer(state.focusWithin),
	_peerPlaceholderShown: toPeer(state.placeholderShown),
	_placeholder: "&::placeholder, &[data-placeholder]",
	_placeholderShown: "&:placeholder-shown, &[data-placeholder-shown]",
	_fullScreen: "&:fullscreen, &[data-fullscreen]",
	_selection: "&::selection",
	_rtl: "[dir=rtl] &, &[dir=rtl]",
	_ltr: "[dir=ltr] &, &[dir=ltr]",
	_mediaDark: "@media (prefers-color-scheme: dark)",
	_mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
	_dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
	_light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
	_horizontal: "&[data-orientation=horizontal]",
	_vertical: "&[data-orientation=vertical]",
	_open: "&[data-open], &[open], &[data-state=open]",
	_closed: "&[data-closed], &[data-state=closed]",
	_complete: "&[data-complete]",
	_incomplete: "&[data-incomplete]",
	_current: "&[data-current]"
};
var pseudoPropNames = Object.keys(pseudoSelectors);
var isImportant = (value) => /!(important)?$/.test(value);
var withoutImportant = (value) => typeof value === "string" ? value.replace(/!(important)?$/, "").trim() : value;
var tokenToCSSVar = (scale$2, value) => (theme$1) => {
	const valueStr = String(value);
	const important = isImportant(valueStr);
	const valueWithoutImportant = withoutImportant(valueStr);
	const key = scale$2 ? `${scale$2}.${valueWithoutImportant}` : valueWithoutImportant;
	let transformed = isObject(theme$1.__cssMap) && key in theme$1.__cssMap ? theme$1.__cssMap[key].varRef : value;
	transformed = withoutImportant(transformed);
	return important ? `${transformed} !important` : transformed;
};
function createTransform(options) {
	const { scale: scale$2, transform: transform$1, compose } = options;
	const fn = (value, theme$1) => {
		const _value = tokenToCSSVar(scale$2, value)(theme$1);
		let result = transform$1?.(_value, theme$1) ?? _value;
		if (compose) result = compose(result, theme$1);
		return result;
	};
	return fn;
}
var pipe$1 = (...fns) => (v$4) => fns.reduce((a, b$1) => b$1(a), v$4);
function toConfig(scale$2, transform$1) {
	return (property) => {
		const result = {
			property,
			scale: scale$2
		};
		result.transform = createTransform({
			scale: scale$2,
			transform: transform$1
		});
		return result;
	};
}
var getRtl = ({ rtl, ltr }) => (theme$1) => theme$1.direction === "rtl" ? rtl : ltr;
function logical(options) {
	const { property, scale: scale$2, transform: transform$1 } = options;
	return {
		scale: scale$2,
		property: getRtl(property),
		transform: scale$2 ? createTransform({
			scale: scale$2,
			compose: transform$1
		}) : transform$1
	};
}
var transformTemplate = [
	"rotate(var(--chakra-rotate, 0))",
	"scaleX(var(--chakra-scale-x, 1))",
	"scaleY(var(--chakra-scale-y, 1))",
	"skewX(var(--chakra-skew-x, 0))",
	"skewY(var(--chakra-skew-y, 0))"
];
function getTransformTemplate() {
	return [
		"translateX(var(--chakra-translate-x, 0))",
		"translateY(var(--chakra-translate-y, 0))",
		...transformTemplate
	].join(" ");
}
function getTransformGpuTemplate() {
	return ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)", ...transformTemplate].join(" ");
}
var filterTemplate = {
	"--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
	filter: [
		"var(--chakra-blur)",
		"var(--chakra-brightness)",
		"var(--chakra-contrast)",
		"var(--chakra-grayscale)",
		"var(--chakra-hue-rotate)",
		"var(--chakra-invert)",
		"var(--chakra-saturate)",
		"var(--chakra-sepia)",
		"var(--chakra-drop-shadow)"
	].join(" ")
};
var backdropFilterTemplate = {
	backdropFilter: [
		"var(--chakra-backdrop-blur)",
		"var(--chakra-backdrop-brightness)",
		"var(--chakra-backdrop-contrast)",
		"var(--chakra-backdrop-grayscale)",
		"var(--chakra-backdrop-hue-rotate)",
		"var(--chakra-backdrop-invert)",
		"var(--chakra-backdrop-opacity)",
		"var(--chakra-backdrop-saturate)",
		"var(--chakra-backdrop-sepia)"
	].join(" "),
	"--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate(value) {
	return {
		"--chakra-ring-offset-shadow": `var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)`,
		"--chakra-ring-shadow": `var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)`,
		"--chakra-ring-width": value,
		boxShadow: [
			`var(--chakra-ring-offset-shadow)`,
			`var(--chakra-ring-shadow)`,
			`var(--chakra-shadow, 0 0 #0000)`
		].join(", ")
	};
}
var flexDirectionTemplate = {
	"row-reverse": {
		space: "--chakra-space-x-reverse",
		divide: "--chakra-divide-x-reverse"
	},
	"column-reverse": {
		space: "--chakra-space-y-reverse",
		divide: "--chakra-divide-y-reverse"
	}
};
var directionMap = {
	"to-t": "to top",
	"to-tr": "to top right",
	"to-r": "to right",
	"to-br": "to bottom right",
	"to-b": "to bottom",
	"to-bl": "to bottom left",
	"to-l": "to left",
	"to-tl": "to top left"
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = /* @__PURE__ */ new Set([
	"none",
	"-moz-initial",
	"inherit",
	"initial",
	"revert",
	"unset"
]);
var trimSpace = (str) => str.trim();
function parseGradient(value, theme$1) {
	if (value == null || globalSet.has(value)) return value;
	if (!(isCSSFunction(value) || globalSet.has(value))) return `url('${value}')`;
	const results = /(^[a-z-A-Z]+)\((.*)\)/g.exec(value);
	const type = results?.[1];
	const values = results?.[2];
	if (!type || !values) return value;
	const _type = type.includes("-gradient") ? type : `${type}-gradient`;
	const [maybeDirection, ...stops] = values.split(",").map(trimSpace).filter(Boolean);
	if (stops?.length === 0) return value;
	const direction$1 = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
	stops.unshift(direction$1);
	return `${_type}(${stops.map((stop) => {
		if (valueSet.has(stop)) return stop;
		const firstStop = stop.indexOf(" ");
		const [_color, _stop] = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop];
		const _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" ");
		const key = `colors.${_color}`;
		const color$2 = key in theme$1.__cssMap ? theme$1.__cssMap[key].varRef : _color;
		return _stopOrFunc ? [color$2, ...Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]].join(" ") : color$2;
	}).join(", ")})`;
}
var isCSSFunction = (value) => {
	return typeof value === "string" && value.includes("(") && value.includes(")");
};
var gradientTransform = (value, theme$1) => parseGradient(value, theme$1 ?? {});
function isCssVar$1(value) {
	return /^var\(--.+\)$/.test(value);
}
var analyzeCSSValue = (value) => {
	const num = parseFloat(value.toString());
	const unit = value.toString().replace(String(num), "");
	return {
		unitless: !unit,
		value: num,
		unit
	};
};
var wrap = (str) => (value) => `${str}(${value})`;
var transformFunctions = {
	filter(value) {
		return value !== "auto" ? value : filterTemplate;
	},
	backdropFilter(value) {
		return value !== "auto" ? value : backdropFilterTemplate;
	},
	ring(value) {
		return getRingTemplate(transformFunctions.px(value));
	},
	bgClip(value) {
		return value === "text" ? {
			color: "transparent",
			backgroundClip: "text"
		} : { backgroundClip: value };
	},
	transform(value) {
		if (value === "auto") return getTransformTemplate();
		if (value === "auto-gpu") return getTransformGpuTemplate();
		return value;
	},
	vh(value) {
		return value === "$100vh" ? "var(--chakra-vh)" : value;
	},
	px(value) {
		if (value == null) return value;
		const { unitless } = analyzeCSSValue(value);
		return unitless || typeof value === "number" ? `${value}px` : value;
	},
	fraction(value) {
		return !(typeof value === "number") || value > 1 ? value : `${value * 100}%`;
	},
	float(value, theme$1) {
		return theme$1.direction === "rtl" ? {
			left: "right",
			right: "left"
		}[value] : value;
	},
	degree(value) {
		if (isCssVar$1(value) || value == null) return value;
		const unitless = typeof value === "string" && !value.endsWith("deg");
		return typeof value === "number" || unitless ? `${value}deg` : value;
	},
	gradient: gradientTransform,
	blur: wrap("blur"),
	opacity: wrap("opacity"),
	brightness: wrap("brightness"),
	contrast: wrap("contrast"),
	dropShadow: wrap("drop-shadow"),
	grayscale: wrap("grayscale"),
	hueRotate: (value) => wrap("hue-rotate")(transformFunctions.degree(value)),
	invert: wrap("invert"),
	saturate: wrap("saturate"),
	sepia: wrap("sepia"),
	bgImage(value) {
		if (value == null) return value;
		return !(isCSSFunction(value) || globalSet.has(value)) ? `url(${value})` : value;
	},
	outline(value) {
		return value !== null && (String(value) === "0" || String(value) === "none") ? {
			outline: "2px solid transparent",
			outlineOffset: "2px"
		} : { outline: value };
	},
	flexDirection(value) {
		const { space: space$1, divide: divide$2 } = flexDirectionTemplate[value] ?? {};
		const result = { flexDirection: value };
		if (space$1) result[space$1] = 1;
		if (divide$2) result[divide$2] = 1;
		return result;
	}
};
var t$2 = {
	borderWidths: toConfig("borderWidths"),
	borderStyles: toConfig("borderStyles"),
	colors: toConfig("colors"),
	borders: toConfig("borders"),
	gradients: toConfig("gradients", transformFunctions.gradient),
	radii: toConfig("radii", transformFunctions.px),
	space: toConfig("space", pipe$1(transformFunctions.vh, transformFunctions.px)),
	spaceT: toConfig("space", pipe$1(transformFunctions.vh, transformFunctions.px)),
	degreeT(property) {
		return {
			property,
			transform: transformFunctions.degree
		};
	},
	prop(property, scale$2, transform$1) {
		return {
			property,
			scale: scale$2,
			...scale$2 && { transform: createTransform({
				scale: scale$2,
				transform: transform$1
			}) }
		};
	},
	propT(property, transform$1) {
		return {
			property,
			transform: transform$1
		};
	},
	sizes: toConfig("sizes", pipe$1(transformFunctions.vh, transformFunctions.px)),
	sizesT: toConfig("sizes", pipe$1(transformFunctions.vh, transformFunctions.fraction)),
	shadows: toConfig("shadows"),
	logical,
	blur: toConfig("blur", transformFunctions.blur)
};
var background = {
	background: t$2.colors("background"),
	backgroundColor: t$2.colors("backgroundColor"),
	backgroundImage: t$2.gradients("backgroundImage"),
	backgroundSize: true,
	backgroundPosition: true,
	backgroundRepeat: true,
	backgroundAttachment: true,
	backgroundClip: { transform: transformFunctions.bgClip },
	bgSize: t$2.prop("backgroundSize"),
	bgPosition: t$2.prop("backgroundPosition"),
	bg: t$2.colors("background"),
	bgColor: t$2.colors("backgroundColor"),
	bgPos: t$2.prop("backgroundPosition"),
	bgRepeat: t$2.prop("backgroundRepeat"),
	bgAttachment: t$2.prop("backgroundAttachment"),
	bgGradient: t$2.gradients("backgroundImage"),
	bgClip: { transform: transformFunctions.bgClip }
};
Object.assign(background, {
	bgImage: background.backgroundImage,
	bgImg: background.backgroundImage
});
var border = {
	border: t$2.borders("border"),
	borderWidth: t$2.borderWidths("borderWidth"),
	borderStyle: t$2.borderStyles("borderStyle"),
	borderColor: t$2.colors("borderColor"),
	borderRadius: t$2.radii("borderRadius"),
	borderTop: t$2.borders("borderTop"),
	borderBlockStart: t$2.borders("borderBlockStart"),
	borderTopLeftRadius: t$2.radii("borderTopLeftRadius"),
	borderStartStartRadius: t$2.logical({
		scale: "radii",
		property: {
			ltr: "borderTopLeftRadius",
			rtl: "borderTopRightRadius"
		}
	}),
	borderEndStartRadius: t$2.logical({
		scale: "radii",
		property: {
			ltr: "borderBottomLeftRadius",
			rtl: "borderBottomRightRadius"
		}
	}),
	borderTopRightRadius: t$2.radii("borderTopRightRadius"),
	borderStartEndRadius: t$2.logical({
		scale: "radii",
		property: {
			ltr: "borderTopRightRadius",
			rtl: "borderTopLeftRadius"
		}
	}),
	borderEndEndRadius: t$2.logical({
		scale: "radii",
		property: {
			ltr: "borderBottomRightRadius",
			rtl: "borderBottomLeftRadius"
		}
	}),
	borderRight: t$2.borders("borderRight"),
	borderInlineEnd: t$2.borders("borderInlineEnd"),
	borderBottom: t$2.borders("borderBottom"),
	borderBlockEnd: t$2.borders("borderBlockEnd"),
	borderBottomLeftRadius: t$2.radii("borderBottomLeftRadius"),
	borderBottomRightRadius: t$2.radii("borderBottomRightRadius"),
	borderLeft: t$2.borders("borderLeft"),
	borderInlineStart: {
		property: "borderInlineStart",
		scale: "borders"
	},
	borderInlineStartRadius: t$2.logical({
		scale: "radii",
		property: {
			ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
			rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
		}
	}),
	borderInlineEndRadius: t$2.logical({
		scale: "radii",
		property: {
			ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
			rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
		}
	}),
	borderX: t$2.borders(["borderLeft", "borderRight"]),
	borderInline: t$2.borders("borderInline"),
	borderY: t$2.borders(["borderTop", "borderBottom"]),
	borderBlock: t$2.borders("borderBlock"),
	borderTopWidth: t$2.borderWidths("borderTopWidth"),
	borderBlockStartWidth: t$2.borderWidths("borderBlockStartWidth"),
	borderTopColor: t$2.colors("borderTopColor"),
	borderBlockStartColor: t$2.colors("borderBlockStartColor"),
	borderTopStyle: t$2.borderStyles("borderTopStyle"),
	borderBlockStartStyle: t$2.borderStyles("borderBlockStartStyle"),
	borderBottomWidth: t$2.borderWidths("borderBottomWidth"),
	borderBlockEndWidth: t$2.borderWidths("borderBlockEndWidth"),
	borderBottomColor: t$2.colors("borderBottomColor"),
	borderBlockEndColor: t$2.colors("borderBlockEndColor"),
	borderBottomStyle: t$2.borderStyles("borderBottomStyle"),
	borderBlockEndStyle: t$2.borderStyles("borderBlockEndStyle"),
	borderLeftWidth: t$2.borderWidths("borderLeftWidth"),
	borderInlineStartWidth: t$2.borderWidths("borderInlineStartWidth"),
	borderLeftColor: t$2.colors("borderLeftColor"),
	borderInlineStartColor: t$2.colors("borderInlineStartColor"),
	borderLeftStyle: t$2.borderStyles("borderLeftStyle"),
	borderInlineStartStyle: t$2.borderStyles("borderInlineStartStyle"),
	borderRightWidth: t$2.borderWidths("borderRightWidth"),
	borderInlineEndWidth: t$2.borderWidths("borderInlineEndWidth"),
	borderRightColor: t$2.colors("borderRightColor"),
	borderInlineEndColor: t$2.colors("borderInlineEndColor"),
	borderRightStyle: t$2.borderStyles("borderRightStyle"),
	borderInlineEndStyle: t$2.borderStyles("borderInlineEndStyle"),
	borderTopRadius: t$2.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
	borderBottomRadius: t$2.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
	borderLeftRadius: t$2.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
	borderRightRadius: t$2.radii(["borderTopRightRadius", "borderBottomRightRadius"])
};
Object.assign(border, {
	rounded: border.borderRadius,
	roundedTop: border.borderTopRadius,
	roundedTopLeft: border.borderTopLeftRadius,
	roundedTopRight: border.borderTopRightRadius,
	roundedTopStart: border.borderStartStartRadius,
	roundedTopEnd: border.borderStartEndRadius,
	roundedBottom: border.borderBottomRadius,
	roundedBottomLeft: border.borderBottomLeftRadius,
	roundedBottomRight: border.borderBottomRightRadius,
	roundedBottomStart: border.borderEndStartRadius,
	roundedBottomEnd: border.borderEndEndRadius,
	roundedLeft: border.borderLeftRadius,
	roundedRight: border.borderRightRadius,
	roundedStart: border.borderInlineStartRadius,
	roundedEnd: border.borderInlineEndRadius,
	borderStart: border.borderInlineStart,
	borderEnd: border.borderInlineEnd,
	borderTopStartRadius: border.borderStartStartRadius,
	borderTopEndRadius: border.borderStartEndRadius,
	borderBottomStartRadius: border.borderEndStartRadius,
	borderBottomEndRadius: border.borderEndEndRadius,
	borderStartRadius: border.borderInlineStartRadius,
	borderEndRadius: border.borderInlineEndRadius,
	borderStartWidth: border.borderInlineStartWidth,
	borderEndWidth: border.borderInlineEndWidth,
	borderStartColor: border.borderInlineStartColor,
	borderEndColor: border.borderInlineEndColor,
	borderStartStyle: border.borderInlineStartStyle,
	borderEndStyle: border.borderInlineEndStyle
});
var color$1 = {
	color: t$2.colors("color"),
	textColor: t$2.colors("color"),
	fill: t$2.colors("fill"),
	stroke: t$2.colors("stroke"),
	accentColor: t$2.colors("accentColor"),
	textFillColor: t$2.colors("textFillColor")
};
var flexbox = {
	alignItems: true,
	alignContent: true,
	justifyItems: true,
	justifyContent: true,
	flexWrap: true,
	flexDirection: { transform: transformFunctions.flexDirection },
	flex: true,
	flexFlow: true,
	flexGrow: true,
	flexShrink: true,
	flexBasis: t$2.sizes("flexBasis"),
	justifySelf: true,
	alignSelf: true,
	order: true,
	placeItems: true,
	placeContent: true,
	placeSelf: true,
	gap: t$2.space("gap"),
	rowGap: t$2.space("rowGap"),
	columnGap: t$2.space("columnGap")
};
Object.assign(flexbox, { flexDir: flexbox.flexDirection });
var layout$1 = {
	width: t$2.sizesT("width"),
	inlineSize: t$2.sizesT("inlineSize"),
	height: t$2.sizes("height"),
	blockSize: t$2.sizes("blockSize"),
	boxSize: t$2.sizes(["width", "height"]),
	minWidth: t$2.sizes("minWidth"),
	minInlineSize: t$2.sizes("minInlineSize"),
	minHeight: t$2.sizes("minHeight"),
	minBlockSize: t$2.sizes("minBlockSize"),
	maxWidth: t$2.sizes("maxWidth"),
	maxInlineSize: t$2.sizes("maxInlineSize"),
	maxHeight: t$2.sizes("maxHeight"),
	maxBlockSize: t$2.sizes("maxBlockSize"),
	overflow: true,
	overflowX: true,
	overflowY: true,
	overscrollBehavior: true,
	overscrollBehaviorX: true,
	overscrollBehaviorY: true,
	display: true,
	aspectRatio: true,
	hideFrom: {
		scale: "breakpoints",
		transform: (value, theme$1) => {
			return { [`@media screen and (min-width: ${theme$1.__breakpoints?.get(value)?.minW ?? value})`]: { display: "none" } };
		}
	},
	hideBelow: {
		scale: "breakpoints",
		transform: (value, theme$1) => {
			return { [`@media screen and (max-width: ${theme$1.__breakpoints?.get(value)?._minW ?? value})`]: { display: "none" } };
		}
	},
	verticalAlign: true,
	boxSizing: true,
	boxDecorationBreak: true,
	float: t$2.propT("float", transformFunctions.float),
	objectFit: true,
	objectPosition: true,
	visibility: true,
	isolation: true
};
Object.assign(layout$1, {
	w: layout$1.width,
	h: layout$1.height,
	minW: layout$1.minWidth,
	maxW: layout$1.maxWidth,
	minH: layout$1.minHeight,
	maxH: layout$1.maxHeight,
	overscroll: layout$1.overscrollBehavior,
	overscrollX: layout$1.overscrollBehaviorX,
	overscrollY: layout$1.overscrollBehaviorY
});
var filter$1 = {
	filter: { transform: transformFunctions.filter },
	blur: t$2.blur("--chakra-blur"),
	brightness: t$2.propT("--chakra-brightness", transformFunctions.brightness),
	contrast: t$2.propT("--chakra-contrast", transformFunctions.contrast),
	hueRotate: t$2.propT("--chakra-hue-rotate", transformFunctions.hueRotate),
	invert: t$2.propT("--chakra-invert", transformFunctions.invert),
	saturate: t$2.propT("--chakra-saturate", transformFunctions.saturate),
	dropShadow: t$2.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
	backdropFilter: { transform: transformFunctions.backdropFilter },
	backdropBlur: t$2.blur("--chakra-backdrop-blur"),
	backdropBrightness: t$2.propT("--chakra-backdrop-brightness", transformFunctions.brightness),
	backdropContrast: t$2.propT("--chakra-backdrop-contrast", transformFunctions.contrast),
	backdropHueRotate: t$2.propT("--chakra-backdrop-hue-rotate", transformFunctions.hueRotate),
	backdropInvert: t$2.propT("--chakra-backdrop-invert", transformFunctions.invert),
	backdropSaturate: t$2.propT("--chakra-backdrop-saturate", transformFunctions.saturate)
};
var ring = {
	ring: { transform: transformFunctions.ring },
	ringColor: t$2.colors("--chakra-ring-color"),
	ringOffset: t$2.prop("--chakra-ring-offset-width"),
	ringOffsetColor: t$2.colors("--chakra-ring-offset-color"),
	ringInset: t$2.prop("--chakra-ring-inset")
};
var interactivity = {
	appearance: true,
	cursor: true,
	resize: true,
	userSelect: true,
	pointerEvents: true,
	outline: { transform: transformFunctions.outline },
	outlineOffset: true,
	outlineColor: t$2.colors("outlineColor")
};
var grid = {
	gridGap: t$2.space("gridGap"),
	gridColumnGap: t$2.space("gridColumnGap"),
	gridRowGap: t$2.space("gridRowGap"),
	gridColumn: true,
	gridRow: true,
	gridAutoFlow: true,
	gridAutoColumns: true,
	gridColumnStart: true,
	gridColumnEnd: true,
	gridRowStart: true,
	gridRowEnd: true,
	gridAutoRows: true,
	gridTemplate: true,
	gridTemplateColumns: true,
	gridTemplateRows: true,
	gridTemplateAreas: true,
	gridArea: true
};
function get$1(obj, path, fallback, index$1) {
	const key = typeof path === "string" ? path.split(".") : [path];
	for (index$1 = 0; index$1 < key.length; index$1 += 1) {
		if (!obj) break;
		obj = obj[key[index$1]];
	}
	return obj === void 0 ? fallback : obj;
}
var memoize$2 = (fn) => {
	const cache$1 = /* @__PURE__ */ new WeakMap();
	const memoizedFn = (obj, path, fallback, index$1) => {
		if (typeof obj === "undefined") return fn(obj, path, fallback);
		if (!cache$1.has(obj)) cache$1.set(obj, /* @__PURE__ */ new Map());
		const map = cache$1.get(obj);
		if (map.has(path)) return map.get(path);
		const value = fn(obj, path, fallback, index$1);
		map.set(path, value);
		return value;
	};
	return memoizedFn;
};
var memoizedGet$1 = memoize$2(get$1);
var srOnly = {
	border: "0px",
	clip: "rect(0, 0, 0, 0)",
	width: "1px",
	height: "1px",
	margin: "-1px",
	padding: "0px",
	overflow: "hidden",
	whiteSpace: "nowrap",
	position: "absolute"
};
var srFocusable = {
	position: "static",
	width: "auto",
	height: "auto",
	clip: "auto",
	padding: "0",
	margin: "0",
	overflow: "visible",
	whiteSpace: "normal"
};
var getWithPriority = (theme$1, key, styles$1) => {
	const result = {};
	const obj = memoizedGet$1(theme$1, key, {});
	for (const prop in obj) if (!(prop in styles$1 && styles$1[prop] != null)) result[prop] = obj[prop];
	return result;
};
var others = {
	srOnly: { transform(value) {
		if (value === true) return srOnly;
		if (value === "focusable") return srFocusable;
		return {};
	} },
	layerStyle: {
		processResult: true,
		transform: (value, theme$1, styles$1) => getWithPriority(theme$1, `layerStyles.${value}`, styles$1)
	},
	textStyle: {
		processResult: true,
		transform: (value, theme$1, styles$1) => getWithPriority(theme$1, `textStyles.${value}`, styles$1)
	},
	apply: {
		processResult: true,
		transform: (value, theme$1, styles$1) => getWithPriority(theme$1, value, styles$1)
	}
};
var position$1 = {
	position: true,
	pos: t$2.prop("position"),
	zIndex: t$2.prop("zIndex", "zIndices"),
	inset: t$2.spaceT("inset"),
	insetX: t$2.spaceT(["left", "right"]),
	insetInline: t$2.spaceT("insetInline"),
	insetY: t$2.spaceT(["top", "bottom"]),
	insetBlock: t$2.spaceT("insetBlock"),
	top: t$2.spaceT("top"),
	insetBlockStart: t$2.spaceT("insetBlockStart"),
	bottom: t$2.spaceT("bottom"),
	insetBlockEnd: t$2.spaceT("insetBlockEnd"),
	left: t$2.spaceT("left"),
	insetInlineStart: t$2.logical({
		scale: "space",
		property: {
			ltr: "left",
			rtl: "right"
		}
	}),
	right: t$2.spaceT("right"),
	insetInlineEnd: t$2.logical({
		scale: "space",
		property: {
			ltr: "right",
			rtl: "left"
		}
	})
};
Object.assign(position$1, {
	insetStart: position$1.insetInlineStart,
	insetEnd: position$1.insetInlineEnd
});
var effect$3 = {
	boxShadow: t$2.shadows("boxShadow"),
	mixBlendMode: true,
	blendMode: t$2.prop("mixBlendMode"),
	backgroundBlendMode: true,
	bgBlendMode: t$2.prop("backgroundBlendMode"),
	opacity: true
};
Object.assign(effect$3, { shadow: effect$3.boxShadow });
var space = {
	margin: t$2.spaceT("margin"),
	marginTop: t$2.spaceT("marginTop"),
	marginBlockStart: t$2.spaceT("marginBlockStart"),
	marginRight: t$2.spaceT("marginRight"),
	marginInlineEnd: t$2.spaceT("marginInlineEnd"),
	marginBottom: t$2.spaceT("marginBottom"),
	marginBlockEnd: t$2.spaceT("marginBlockEnd"),
	marginLeft: t$2.spaceT("marginLeft"),
	marginInlineStart: t$2.spaceT("marginInlineStart"),
	marginX: t$2.spaceT(["marginInlineStart", "marginInlineEnd"]),
	marginInline: t$2.spaceT("marginInline"),
	marginY: t$2.spaceT(["marginTop", "marginBottom"]),
	marginBlock: t$2.spaceT("marginBlock"),
	padding: t$2.space("padding"),
	paddingTop: t$2.space("paddingTop"),
	paddingBlockStart: t$2.space("paddingBlockStart"),
	paddingRight: t$2.space("paddingRight"),
	paddingBottom: t$2.space("paddingBottom"),
	paddingBlockEnd: t$2.space("paddingBlockEnd"),
	paddingLeft: t$2.space("paddingLeft"),
	paddingInlineStart: t$2.space("paddingInlineStart"),
	paddingInlineEnd: t$2.space("paddingInlineEnd"),
	paddingX: t$2.space(["paddingInlineStart", "paddingInlineEnd"]),
	paddingInline: t$2.space("paddingInline"),
	paddingY: t$2.space(["paddingTop", "paddingBottom"]),
	paddingBlock: t$2.space("paddingBlock")
};
Object.assign(space, {
	m: space.margin,
	mt: space.marginTop,
	mr: space.marginRight,
	me: space.marginInlineEnd,
	marginEnd: space.marginInlineEnd,
	mb: space.marginBottom,
	ml: space.marginLeft,
	ms: space.marginInlineStart,
	marginStart: space.marginInlineStart,
	mx: space.marginX,
	my: space.marginY,
	p: space.padding,
	pt: space.paddingTop,
	py: space.paddingY,
	px: space.paddingX,
	pb: space.paddingBottom,
	pl: space.paddingLeft,
	ps: space.paddingInlineStart,
	paddingStart: space.paddingInlineStart,
	pr: space.paddingRight,
	pe: space.paddingInlineEnd,
	paddingEnd: space.paddingInlineEnd
});
var scroll = {
	scrollBehavior: true,
	scrollSnapAlign: true,
	scrollSnapStop: true,
	scrollSnapType: true,
	scrollMargin: t$2.spaceT("scrollMargin"),
	scrollMarginTop: t$2.spaceT("scrollMarginTop"),
	scrollMarginBottom: t$2.spaceT("scrollMarginBottom"),
	scrollMarginLeft: t$2.spaceT("scrollMarginLeft"),
	scrollMarginRight: t$2.spaceT("scrollMarginRight"),
	scrollMarginX: t$2.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
	scrollMarginY: t$2.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
	scrollPadding: t$2.spaceT("scrollPadding"),
	scrollPaddingTop: t$2.spaceT("scrollPaddingTop"),
	scrollPaddingBottom: t$2.spaceT("scrollPaddingBottom"),
	scrollPaddingLeft: t$2.spaceT("scrollPaddingLeft"),
	scrollPaddingRight: t$2.spaceT("scrollPaddingRight"),
	scrollPaddingX: t$2.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
	scrollPaddingY: t$2.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
var typography$1 = {
	fontFamily: t$2.prop("fontFamily", "fonts"),
	fontSize: t$2.prop("fontSize", "fontSizes", transformFunctions.px),
	fontWeight: t$2.prop("fontWeight", "fontWeights"),
	lineHeight: t$2.prop("lineHeight", "lineHeights"),
	letterSpacing: t$2.prop("letterSpacing", "letterSpacings"),
	textAlign: true,
	fontStyle: true,
	textIndent: true,
	wordBreak: true,
	overflowWrap: true,
	textOverflow: true,
	textTransform: true,
	whiteSpace: true,
	isTruncated: { transform(value) {
		if (value === true) return {
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		};
	} },
	noOfLines: {
		static: {
			overflow: "hidden",
			textOverflow: "ellipsis",
			display: "-webkit-box",
			WebkitBoxOrient: "vertical",
			WebkitLineClamp: "var(--chakra-line-clamp)"
		},
		property: "--chakra-line-clamp"
	}
};
var textDecoration = {
	textDecorationColor: t$2.colors("textDecorationColor"),
	textDecoration: true,
	textDecor: { property: "textDecoration" },
	textDecorationLine: true,
	textDecorationStyle: true,
	textDecorationThickness: true,
	textUnderlineOffset: true,
	textShadow: t$2.shadows("textShadow")
};
var transform = {
	clipPath: true,
	transform: t$2.propT("transform", transformFunctions.transform),
	transformOrigin: true,
	translateX: t$2.spaceT("--chakra-translate-x"),
	translateY: t$2.spaceT("--chakra-translate-y"),
	skewX: t$2.degreeT("--chakra-skew-x"),
	skewY: t$2.degreeT("--chakra-skew-y"),
	scaleX: t$2.prop("--chakra-scale-x"),
	scaleY: t$2.prop("--chakra-scale-y"),
	scale: t$2.prop(["--chakra-scale-x", "--chakra-scale-y"]),
	rotate: t$2.degreeT("--chakra-rotate")
};
var list = {
	listStyleType: true,
	listStylePosition: true,
	listStylePos: t$2.prop("listStylePosition"),
	listStyleImage: true,
	listStyleImg: t$2.prop("listStyleImage")
};
var transition$1 = {
	transition: true,
	transitionDelay: true,
	animation: true,
	willChange: true,
	transitionDuration: t$2.prop("transitionDuration", "transition.duration"),
	transitionProperty: t$2.prop("transitionProperty", "transition.property"),
	transitionTimingFunction: t$2.prop("transitionTimingFunction", "transition.easing")
};
var systemProps = (0, import_lodash.default)({}, background, border, color$1, flexbox, layout$1, filter$1, ring, interactivity, grid, others, position$1, effect$3, space, scroll, typography$1, textDecoration, transform, list, transition$1);
Object.assign({}, space, layout$1, flexbox, grid, position$1);
var propNames = [...Object.keys(systemProps), ...pseudoPropNames];
var styleProps = {
	...systemProps,
	...pseudoSelectors
};
var isStyleProp = (prop) => prop in styleProps;
var expandResponsive = (styles$1) => (theme$1) => {
	if (!theme$1.__breakpoints) return styles$1;
	const { isResponsive, toArrayValue, media: medias } = theme$1.__breakpoints;
	const computedStyles = {};
	for (const key in styles$1) {
		let value = runIfFn(styles$1[key], theme$1);
		if (value == null) continue;
		value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;
		if (!Array.isArray(value)) {
			computedStyles[key] = value;
			continue;
		}
		const queries = value.slice(0, medias.length).length;
		for (let index$1 = 0; index$1 < queries; index$1 += 1) {
			const media = medias?.[index$1];
			if (!media) {
				computedStyles[key] = value[index$1];
				continue;
			}
			computedStyles[media] = computedStyles[media] || {};
			if (value[index$1] == null) continue;
			computedStyles[media][key] = value[index$1];
		}
	}
	return computedStyles;
};
function splitByComma(value) {
	const chunks = [];
	let chunk = "";
	let inParens = false;
	for (let i = 0; i < value.length; i++) {
		const char$1 = value[i];
		if (char$1 === "(") {
			inParens = true;
			chunk += char$1;
		} else if (char$1 === ")") {
			inParens = false;
			chunk += char$1;
		} else if (char$1 === "," && !inParens) {
			chunks.push(chunk);
			chunk = "";
		} else chunk += char$1;
	}
	chunk = chunk.trim();
	if (chunk) chunks.push(chunk);
	return chunks;
}
function isCssVar(value) {
	return /^var\(--.+\)$/.test(value);
}
var isCSSVariableTokenValue = (key, value) => key.startsWith("--") && typeof value === "string" && !isCssVar(value);
var resolveTokenValue = (theme$1, value) => {
	if (value == null) return value;
	const getVar = (val) => theme$1.__cssMap?.[val]?.varRef;
	const getValue$1 = (val) => getVar(val) ?? val;
	const [tokenValue, fallbackValue] = splitByComma(value);
	value = getVar(tokenValue) ?? getValue$1(fallbackValue) ?? getValue$1(value);
	return value;
};
function getCss(options) {
	const { configs = {}, pseudos = {}, theme: theme$1 } = options;
	const css2 = (stylesOrFn, nested = false) => {
		const _styles = runIfFn(stylesOrFn, theme$1);
		const styles$1 = expandResponsive(_styles)(theme$1);
		let computedStyles = {};
		for (let key in styles$1) {
			const valueOrFn = styles$1[key];
			let value = runIfFn(valueOrFn, theme$1);
			if (key in pseudos) key = pseudos[key];
			if (isCSSVariableTokenValue(key, value)) value = resolveTokenValue(theme$1, value);
			let config$1 = configs[key];
			if (config$1 === true) config$1 = { property: key };
			if (isObject(value)) {
				computedStyles[key] = computedStyles[key] ?? {};
				computedStyles[key] = (0, import_lodash.default)({}, computedStyles[key], css2(value, true));
				continue;
			}
			let rawValue = config$1?.transform?.(value, theme$1, _styles) ?? value;
			rawValue = config$1?.processResult ? css2(rawValue, true) : rawValue;
			const configProperty = runIfFn(config$1?.property, theme$1);
			if (!nested && config$1?.static) {
				const staticStyles = runIfFn(config$1.static, theme$1);
				computedStyles = (0, import_lodash.default)({}, computedStyles, staticStyles);
			}
			if (configProperty && Array.isArray(configProperty)) {
				for (const property of configProperty) computedStyles[property] = rawValue;
				continue;
			}
			if (configProperty) {
				if (configProperty === "&" && isObject(rawValue)) computedStyles = (0, import_lodash.default)({}, computedStyles, rawValue);
				else computedStyles[configProperty] = rawValue;
				continue;
			}
			if (isObject(rawValue)) {
				computedStyles = (0, import_lodash.default)({}, computedStyles, rawValue);
				continue;
			}
			computedStyles[key] = rawValue;
		}
		return computedStyles;
	};
	return css2;
}
var css$1 = (styles$1) => (theme$1) => {
	return getCss({
		theme: theme$1,
		pseudos: pseudoSelectors,
		configs: systemProps
	})(styles$1);
};
function defineStyle(styles$1) {
	return styles$1;
}
function defineStyleConfig(config$1) {
	return config$1;
}
function createMultiStyleConfigHelpers(parts) {
	return {
		definePartsStyle(config$1) {
			return config$1;
		},
		defineMultiStyleConfig(config$1) {
			return {
				parts,
				...config$1
			};
		}
	};
}
function getCSSVar(theme$1, scale$2, value) {
	return theme$1.__cssMap?.[`${scale$2}.${value}`]?.varRef ?? value;
}
function normalize(value, toArray) {
	if (Array.isArray(value)) return value;
	if (isObject(value)) return toArray(value);
	if (value != null) return [value];
}
function getNextIndex$1(values, i) {
	for (let j = i + 1; j < values.length; j++) if (values[j] != null) return j;
	return -1;
}
function createResolver(theme$1) {
	const breakpointUtil = theme$1.__breakpoints;
	return function resolver(config$1, prop, value, props) {
		if (!breakpointUtil) return;
		const result = {};
		const normalized = normalize(value, breakpointUtil.toArrayValue);
		if (!normalized) return result;
		const len = normalized.length;
		const isSingle = len === 1;
		const isMultipart = !!config$1.parts;
		for (let i = 0; i < len; i++) {
			const key = breakpointUtil.details[i];
			const nextKey = breakpointUtil.details[getNextIndex$1(normalized, i)];
			const query = toMediaQueryString(key.minW, nextKey?._minW);
			const styles$1 = runIfFn(config$1[prop]?.[normalized[i]], props);
			if (!styles$1) continue;
			if (isMultipart) {
				config$1.parts?.forEach((part) => {
					(0, import_lodash.default)(result, { [part]: isSingle ? styles$1[part] : { [query]: styles$1[part] } });
				});
				continue;
			}
			if (!isMultipart) {
				if (isSingle) (0, import_lodash.default)(result, styles$1);
				else result[query] = styles$1;
				continue;
			}
			result[query] = styles$1;
		}
		return result;
	};
}
function resolveStyleConfig(config$1) {
	return (props) => {
		const { variant, size: size$1, theme: theme$1 } = props;
		const recipe = createResolver(theme$1);
		return (0, import_lodash.default)({}, runIfFn(config$1.baseStyle ?? {}, props), recipe(config$1, "sizes", size$1, props), recipe(config$1, "variants", variant, props));
	};
}
function omitThemingProps(props) {
	return omit(props, [
		"styleConfig",
		"size",
		"variant",
		"colorScheme"
	]);
}
function resolveReference(operand) {
	if (isObject(operand) && operand.reference) return operand.reference;
	return String(operand);
}
var toExpression = (operator, ...operands) => operands.map(resolveReference).join(` ${operator} `).replace(/calc/g, "");
var add$1 = (...operands) => `calc(${toExpression("+", ...operands)})`;
var subtract$1 = (...operands) => `calc(${toExpression("-", ...operands)})`;
var multiply$1 = (...operands) => `calc(${toExpression("*", ...operands)})`;
var divide$1 = (...operands) => `calc(${toExpression("/", ...operands)})`;
var negate$1 = (x$2) => {
	const value = resolveReference(x$2);
	if (value != null && !Number.isNaN(parseFloat(value))) return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
	return multiply$1(value, -1);
};
var calc$1 = Object.assign((x$2) => ({
	add: (...operands) => calc$1(add$1(x$2, ...operands)),
	subtract: (...operands) => calc$1(subtract$1(x$2, ...operands)),
	multiply: (...operands) => calc$1(multiply$1(x$2, ...operands)),
	divide: (...operands) => calc$1(divide$1(x$2, ...operands)),
	negate: () => calc$1(negate$1(x$2)),
	toString: () => x$2.toString()
}), {
	add: add$1,
	subtract: subtract$1,
	multiply: multiply$1,
	divide: divide$1,
	negate: negate$1
});
function replaceWhiteSpace$1(value, replaceValue = "-") {
	return value.replace(/\s+/g, replaceValue);
}
function escape$1(value) {
	return escapeSymbol(escapeDot(replaceWhiteSpace$1(value.toString())));
}
function escapeDot(value) {
	if (value.includes("\\.")) return value;
	return !Number.isInteger(parseFloat(value.toString())) ? value.replace(".", `\\.`) : value;
}
function escapeSymbol(value) {
	return value.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function addPrefix$1(value, prefix$1 = "") {
	return [prefix$1, value].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
	return `var(${name}${fallback ? `, ${fallback}` : ""})`;
}
function toVarDefinition(value, prefix$1 = "") {
	return escape$1(`--${addPrefix$1(value, prefix$1)}`);
}
function cssVar$1(name, fallback, cssVarPrefix) {
	const cssVariable = toVarDefinition(name, cssVarPrefix);
	return {
		variable: cssVariable,
		reference: toVarReference(cssVariable, fallback)
	};
}
function defineCssVars(scope, keys$1) {
	const vars$1 = {};
	for (const key of keys$1) {
		if (Array.isArray(key)) {
			const [name, fallback] = key;
			vars$1[name] = cssVar$1(`${scope}-${name}`, fallback);
			continue;
		}
		vars$1[key] = cssVar$1(`${scope}-${key}`);
	}
	return vars$1;
}
var tokens = [
	"colors",
	"borders",
	"borderWidths",
	"borderStyles",
	"fonts",
	"fontSizes",
	"fontWeights",
	"gradients",
	"letterSpacings",
	"lineHeights",
	"radii",
	"space",
	"shadows",
	"sizes",
	"zIndices",
	"transition",
	"blur",
	"breakpoints"
];
function extractTokens(theme$1) {
	return pick(theme$1, tokens);
}
function extractSemanticTokens(theme$1) {
	return theme$1.semanticTokens;
}
function omitVars(rawTheme) {
	const { __cssMap, __cssVars, __breakpoints, ...cleanTheme } = rawTheme;
	return cleanTheme;
}
function flattenTokens(theme$1) {
	const tokens$1 = extractTokens(theme$1);
	const semanticTokens$1 = extractSemanticTokens(theme$1);
	const isSemanticCondition = (key) => pseudoPropNames.includes(key) || "default" === key;
	const result = {};
	walkObject(tokens$1, (value, path) => {
		if (value == null) return;
		result[path.join(".")] = {
			isSemantic: false,
			value
		};
	});
	walkObject(semanticTokens$1, (value, path) => {
		if (value == null) return;
		result[path.join(".")] = {
			isSemantic: true,
			value
		};
	}, { stop: (value) => Object.keys(value).every(isSemanticCondition) });
	return result;
}
function tokenToCssVar(token$1, prefix$1) {
	return cssVar$1(String(token$1).replace(/\./g, "-"), void 0, prefix$1);
}
function createThemeVars(theme$1) {
	const flatTokens = flattenTokens(theme$1);
	const cssVarPrefix = theme$1.config?.cssVarPrefix;
	let cssVars$1 = {};
	const cssMap = {};
	function lookupToken(token$1, maybeToken) {
		const withScale = [String(token$1).split(".")[0], maybeToken].join(".");
		if (!flatTokens[withScale]) return maybeToken;
		const { reference: reference$1 } = tokenToCssVar(withScale, cssVarPrefix);
		return reference$1;
	}
	for (const [token$1, tokenValue] of Object.entries(flatTokens)) {
		const { isSemantic, value } = tokenValue;
		const { variable, reference: reference$1 } = tokenToCssVar(token$1, cssVarPrefix);
		if (!isSemantic) {
			if (token$1.startsWith("space")) {
				const [firstKey, ...referenceKeys] = token$1.split(".");
				const negativeLookupKey = `${firstKey}.-${referenceKeys.join(".")}`;
				cssMap[negativeLookupKey] = {
					value: calc$1.negate(value),
					var: variable,
					varRef: calc$1.negate(reference$1)
				};
			}
			cssVars$1[variable] = value;
			cssMap[token$1] = {
				value,
				var: variable,
				varRef: reference$1
			};
			continue;
		}
		const normalizedValue = isObject(value) ? value : { default: value };
		cssVars$1 = (0, import_lodash.default)(cssVars$1, Object.entries(normalizedValue).reduce((acc, [conditionAlias, conditionValue]) => {
			if (!conditionValue) return acc;
			const tokenReference = lookupToken(token$1, `${conditionValue}`);
			if (conditionAlias === "default") {
				acc[variable] = tokenReference;
				return acc;
			}
			const conditionSelector = pseudoSelectors?.[conditionAlias] ?? conditionAlias;
			acc[conditionSelector] = { [variable]: tokenReference };
			return acc;
		}, {}));
		cssMap[token$1] = {
			value: reference$1,
			var: variable,
			varRef: reference$1
		};
	}
	return {
		cssVars: cssVars$1,
		cssMap
	};
}
function toCSSVar(rawTheme) {
	const theme$1 = omitVars(rawTheme);
	const { cssMap, cssVars: cssVars$1 } = createThemeVars(theme$1);
	Object.assign(theme$1, {
		__cssVars: {
			"--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
			"--chakra-ring-offset-width": "0px",
			"--chakra-ring-offset-color": "#fff",
			"--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
			"--chakra-ring-offset-shadow": "0 0 #0000",
			"--chakra-ring-shadow": "0 0 #0000",
			"--chakra-space-x-reverse": "0",
			"--chakra-space-y-reverse": "0",
			...cssVars$1
		},
		__cssMap: cssMap,
		__breakpoints: analyzeBreakpoints(theme$1.breakpoints)
	});
	return theme$1;
}
function anatomy(name, map = {}) {
	let called = false;
	function assert() {
		if (!called) {
			called = true;
			return;
		}
		throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
	}
	function parts(...values) {
		assert();
		for (const part of values) map[part] = toPart(part);
		return anatomy(name, map);
	}
	function extend(...parts2) {
		for (const part of parts2) {
			if (part in map) continue;
			map[part] = toPart(part);
		}
		return anatomy(name, map);
	}
	function selectors() {
		return Object.fromEntries(Object.entries(map).map(([key, part]) => [key, part.selector]));
	}
	function classnames$1() {
		return Object.fromEntries(Object.entries(map).map(([key, part]) => [key, part.className]));
	}
	function toPart(part) {
		const className = `chakra-${(["container", "root"].includes(part ?? "") ? [name] : [name, part]).filter(Boolean).join("__")}`;
		return {
			className,
			selector: `.${className}`,
			toString: () => part
		};
	}
	return {
		parts,
		toPart,
		extend,
		selectors,
		classnames: classnames$1,
		get keys() {
			return Object.keys(map);
		},
		__type: {}
	};
}
var accordionAnatomy = anatomy("accordion").parts("root", "container", "button", "panel", "icon");
var alertAnatomy = anatomy("alert").parts("title", "description", "container", "icon", "spinner");
var avatarAnatomy = anatomy("avatar").parts("label", "badge", "container", "excessLabel", "group");
var breadcrumbAnatomy = anatomy("breadcrumb").parts("link", "item", "container", "separator");
anatomy("button").parts();
var checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container", "label");
anatomy("progress").parts("track", "filledTrack", "label");
var drawerAnatomy = anatomy("drawer").parts("overlay", "dialogContainer", "dialog", "header", "closeButton", "body", "footer");
var editableAnatomy = anatomy("editable").parts("preview", "input", "textarea");
var formAnatomy = anatomy("form").parts("container", "requiredIndicator", "helperText");
var formErrorAnatomy = anatomy("formError").parts("text", "icon");
var inputAnatomy = anatomy("input").parts("addon", "field", "element", "group");
var listAnatomy = anatomy("list").parts("container", "item", "icon");
var menuAnatomy = anatomy("menu").parts("button", "list", "item", "groupTitle", "icon", "command", "divider");
var modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog", "header", "closeButton", "body", "footer");
var numberInputAnatomy = anatomy("numberinput").parts("root", "field", "stepperGroup", "stepper");
anatomy("pininput").parts("field");
var popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer", "popper", "arrow", "closeButton");
var progressAnatomy = anatomy("progress").parts("label", "filledTrack", "track");
var radioAnatomy = anatomy("radio").parts("container", "control", "label");
var selectAnatomy = anatomy("select").parts("field", "icon");
var sliderAnatomy = anatomy("slider").parts("container", "track", "thumb", "filledTrack", "mark");
var statAnatomy = anatomy("stat").parts("container", "label", "helpText", "number", "icon");
var switchAnatomy = anatomy("switch").parts("container", "track", "thumb", "label");
var tableAnatomy = anatomy("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption");
var tabsAnatomy = anatomy("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator");
var tagAnatomy = anatomy("tag").parts("container", "label", "closeButton");
var cardAnatomy = anatomy("card").parts("container", "header", "body", "footer");
anatomy("stepper").parts("stepper", "step", "title", "description", "indicator", "separator", "icon", "number");
var { definePartsStyle: definePartsStyle$25, defineMultiStyleConfig: defineMultiStyleConfig$25 } = createMultiStyleConfigHelpers(accordionAnatomy.keys);
var accordionTheme = defineMultiStyleConfig$25({ baseStyle: definePartsStyle$25({
	container: defineStyle({
		borderTopWidth: "1px",
		borderColor: "inherit",
		_last: { borderBottomWidth: "1px" }
	}),
	button: defineStyle({
		transitionProperty: "common",
		transitionDuration: "normal",
		fontSize: "md",
		_focusVisible: { boxShadow: "outline" },
		_hover: { bg: "blackAlpha.50" },
		_disabled: {
			opacity: .4,
			cursor: "not-allowed"
		},
		px: "4",
		py: "2"
	}),
	panel: defineStyle({
		pt: "2",
		px: "4",
		pb: "5"
	}),
	icon: defineStyle({ fontSize: "1.25em" })
}) });
function guard(low, high, value) {
	return Math.min(Math.max(low, value), high);
}
var ColorError = class extends Error {
	constructor(color$2) {
		super(`Failed to parse color: "${color$2}"`);
	}
};
var ColorError$1 = ColorError;
function parseToRgba(color$2) {
	if (typeof color$2 !== "string") throw new ColorError$1(color$2);
	if (color$2.trim().toLowerCase() === "transparent") return [
		0,
		0,
		0,
		0
	];
	let normalizedColor = color$2.trim();
	normalizedColor = namedColorRegex.test(color$2) ? nameToHex(color$2) : color$2;
	const reducedHexMatch = reducedHexRegex.exec(normalizedColor);
	if (reducedHexMatch) {
		const arr = Array.from(reducedHexMatch).slice(1);
		return [...arr.slice(0, 3).map((x$2) => parseInt(r$2(x$2, 2), 16)), parseInt(r$2(arr[3] || "f", 2), 16) / 255];
	}
	const hexMatch = hexRegex.exec(normalizedColor);
	if (hexMatch) {
		const arr = Array.from(hexMatch).slice(1);
		return [...arr.slice(0, 3).map((x$2) => parseInt(x$2, 16)), parseInt(arr[3] || "ff", 16) / 255];
	}
	const rgbaMatch = rgbaRegex.exec(normalizedColor);
	if (rgbaMatch) {
		const arr = Array.from(rgbaMatch).slice(1);
		return [...arr.slice(0, 3).map((x$2) => parseInt(x$2, 10)), parseFloat(arr[3] || "1")];
	}
	const hslaMatch = hslaRegex.exec(normalizedColor);
	if (hslaMatch) {
		const [h$2, s, l$4, a] = Array.from(hslaMatch).slice(1).map(parseFloat);
		if (guard(0, 100, s) !== s) throw new ColorError$1(color$2);
		if (guard(0, 100, l$4) !== l$4) throw new ColorError$1(color$2);
		return [...hslToRgb(h$2, s, l$4), Number.isNaN(a) ? 1 : a];
	}
	throw new ColorError$1(color$2);
}
function hash$3(str) {
	let hash$4 = 5381;
	let i = str.length;
	while (i) hash$4 = hash$4 * 33 ^ str.charCodeAt(--i);
	return (hash$4 >>> 0) % 2341;
}
var colorToInt = (x$2) => parseInt(x$2.replace(/_/g, ""), 36);
var compressedColorMap = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((acc, next$1) => {
	const key = colorToInt(next$1.substring(0, 3));
	const hex$1 = colorToInt(next$1.substring(3)).toString(16);
	let prefix$1 = "";
	for (let i = 0; i < 6 - hex$1.length; i++) prefix$1 += "0";
	acc[key] = `${prefix$1}${hex$1}`;
	return acc;
}, {});
function nameToHex(color$2) {
	const result = compressedColorMap[hash$3(color$2.toLowerCase().trim())];
	if (!result) throw new ColorError$1(color$2);
	return `#${result}`;
}
var r$2 = (str, amount) => Array.from(Array(amount)).map(() => str).join("");
var reducedHexRegex = new RegExp(`^#${r$2("([a-f0-9])", 3)}([a-f0-9])?$`, "i");
var hexRegex = new RegExp(`^#${r$2("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i");
var rgbaRegex = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${r$2(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i");
var hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
var namedColorRegex = /^[a-z]+$/i;
var roundColor = (color$2) => {
	return Math.round(color$2 * 255);
};
var hslToRgb = (hue, saturation, lightness) => {
	let l$4 = lightness / 100;
	if (saturation === 0) return [
		l$4,
		l$4,
		l$4
	].map(roundColor);
	const huePrime = (hue % 360 + 360) % 360 / 60;
	const chroma = (1 - Math.abs(2 * l$4 - 1)) * (saturation / 100);
	const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
	let red = 0;
	let green = 0;
	let blue = 0;
	if (huePrime >= 0 && huePrime < 1) {
		red = chroma;
		green = secondComponent;
	} else if (huePrime >= 1 && huePrime < 2) {
		red = secondComponent;
		green = chroma;
	} else if (huePrime >= 2 && huePrime < 3) {
		green = chroma;
		blue = secondComponent;
	} else if (huePrime >= 3 && huePrime < 4) {
		green = secondComponent;
		blue = chroma;
	} else if (huePrime >= 4 && huePrime < 5) {
		red = secondComponent;
		blue = chroma;
	} else if (huePrime >= 5 && huePrime < 6) {
		red = chroma;
		blue = secondComponent;
	}
	const lightnessModification = l$4 - chroma / 2;
	return [
		red + lightnessModification,
		green + lightnessModification,
		blue + lightnessModification
	].map(roundColor);
};
function rgba$1(red, green, blue, alpha$1) {
	return `rgba(${guard(0, 255, red).toFixed()}, ${guard(0, 255, green).toFixed()}, ${guard(0, 255, blue).toFixed()}, ${parseFloat(guard(0, 1, alpha$1).toFixed(3))})`;
}
function transparentize$1(color$2, amount) {
	const [r$4, g$2, b$1, a] = parseToRgba(color$2);
	return rgba$1(r$4, g$2, b$1, a - amount);
}
function toHex(color$2) {
	const [r$4, g$2, b$1, a] = parseToRgba(color$2);
	let hex$1 = (x$2) => {
		const h$2 = guard(0, 255, x$2).toString(16);
		return h$2.length === 1 ? `0${h$2}` : h$2;
	};
	return `#${hex$1(r$4)}${hex$1(g$2)}${hex$1(b$1)}${a < 1 ? hex$1(Math.round(a * 255)) : ""}`;
}
var isEmptyObject = (obj) => Object.keys(obj).length === 0;
function get(obj, key, def, p$5, undef) {
	key = key.split ? key.split(".") : key;
	for (p$5 = 0; p$5 < key.length; p$5++) obj = obj ? obj[key[p$5]] : undef;
	return obj === undef ? def : obj;
}
var getColor = (theme$1, color$2, fallback) => {
	const hex$1 = get(theme$1, `colors.${color$2}`, color$2);
	try {
		toHex(hex$1);
		return hex$1;
	} catch {
		return fallback ?? "#000000";
	}
};
var getBrightness = (color$2) => {
	const [r$4, g$2, b$1] = parseToRgba(color$2);
	return (r$4 * 299 + g$2 * 587 + b$1 * 114) / 1e3;
};
var tone = (color$2) => (theme$1) => {
	return getBrightness(getColor(theme$1, color$2)) < 128 ? "dark" : "light";
};
var isDark = (color$2) => (theme$1) => tone(color$2)(theme$1) === "dark";
var transparentize = (color$2, opacity) => (theme$1) => {
	return transparentize$1(getColor(theme$1, color$2), 1 - opacity);
};
function generateStripe(size$1 = "1rem", color$2 = "rgba(255, 255, 255, 0.15)") {
	return {
		backgroundImage: `linear-gradient(
    45deg,
    ${color$2} 25%,
    transparent 25%,
    transparent 50%,
    ${color$2} 50%,
    ${color$2} 75%,
    transparent 75%,
    transparent
  )`,
		backgroundSize: `${size$1} ${size$1}`
	};
}
var randomHex = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function randomColor(opts) {
	const fallback = randomHex();
	if (!opts || isEmptyObject(opts)) return fallback;
	if (opts.string && opts.colors) return randomColorFromList(opts.string, opts.colors);
	if (opts.string && !opts.colors) return randomColorFromString(opts.string);
	if (opts.colors && !opts.string) return randomFromList(opts.colors);
	return fallback;
}
function randomColorFromString(str) {
	let hash$4 = 0;
	if (str.length === 0) return hash$4.toString();
	for (let i = 0; i < str.length; i += 1) {
		hash$4 = str.charCodeAt(i) + ((hash$4 << 5) - hash$4);
		hash$4 = hash$4 & hash$4;
	}
	let color$2 = "#";
	for (let j = 0; j < 3; j += 1) {
		const value = hash$4 >> j * 8 & 255;
		color$2 += `00${value.toString(16)}`.substr(-2);
	}
	return color$2;
}
function randomColorFromList(str, list$1) {
	let index$1 = 0;
	if (str.length === 0) return list$1[0];
	for (let i = 0; i < str.length; i += 1) {
		index$1 = str.charCodeAt(i) + ((index$1 << 5) - index$1);
		index$1 = index$1 & index$1;
	}
	index$1 = (index$1 % list$1.length + list$1.length) % list$1.length;
	return list$1[index$1];
}
function randomFromList(list$1) {
	return list$1[Math.floor(Math.random() * list$1.length)];
}
function mode(light, dark) {
	return (props) => props.colorMode === "dark" ? dark : light;
}
function orient(options) {
	const { orientation, vertical, horizontal } = options;
	if (!orientation) return {};
	return orientation === "vertical" ? vertical : horizontal;
}
function toRef(operand) {
	if (isObject(operand) && operand.reference) return operand.reference;
	return String(operand);
}
var toExpr = (operator, ...operands) => operands.map(toRef).join(` ${operator} `).replace(/calc/g, "");
var add = (...operands) => `calc(${toExpr("+", ...operands)})`;
var subtract = (...operands) => `calc(${toExpr("-", ...operands)})`;
var multiply = (...operands) => `calc(${toExpr("*", ...operands)})`;
var divide = (...operands) => `calc(${toExpr("/", ...operands)})`;
var negate = (x$2) => {
	const value = toRef(x$2);
	if (value != null && !Number.isNaN(parseFloat(value))) return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
	return multiply(value, -1);
};
var calc = Object.assign((x$2) => ({
	add: (...operands) => calc(add(x$2, ...operands)),
	subtract: (...operands) => calc(subtract(x$2, ...operands)),
	multiply: (...operands) => calc(multiply(x$2, ...operands)),
	divide: (...operands) => calc(divide(x$2, ...operands)),
	negate: () => calc(negate(x$2)),
	toString: () => x$2.toString()
}), {
	add,
	subtract,
	multiply,
	divide,
	negate
});
function isDecimal(value) {
	return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace(value, replaceValue = "-") {
	return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
	const valueStr = replaceWhiteSpace(value.toString());
	if (valueStr.includes("\\.")) return value;
	return isDecimal(value) ? valueStr.replace(".", `\\.`) : value;
}
function addPrefix(value, prefix$1 = "") {
	return [prefix$1, escape(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
	return `var(${escape(name)}${fallback ? `, ${fallback}` : ""})`;
}
function toVar$1(value, prefix$1 = "") {
	return `--${addPrefix(value, prefix$1)}`;
}
function cssVar(name, options) {
	const cssVariable = toVar$1(name, options?.prefix);
	return {
		variable: cssVariable,
		reference: toVarRef(cssVariable, getFallback(options?.fallback))
	};
}
function getFallback(fallback) {
	if (typeof fallback === "string") return fallback;
	return fallback?.reference;
}
var { definePartsStyle: definePartsStyle$24, defineMultiStyleConfig: defineMultiStyleConfig$24 } = createMultiStyleConfigHelpers(alertAnatomy.keys);
var $fg$5 = cssVar$1("alert-fg");
var $bg$15 = cssVar$1("alert-bg");
var baseStyle$12 = definePartsStyle$24({
	container: {
		bg: $bg$15.reference,
		px: "4",
		py: "3"
	},
	title: {
		fontWeight: "bold",
		lineHeight: "6",
		marginEnd: "2"
	},
	description: { lineHeight: "6" },
	icon: {
		color: $fg$5.reference,
		flexShrink: 0,
		marginEnd: "3",
		w: "5",
		h: "6"
	},
	spinner: {
		color: $fg$5.reference,
		flexShrink: 0,
		marginEnd: "3",
		w: "5",
		h: "5"
	}
});
function getBg(props) {
	const { theme: theme$1, colorScheme: c$1 } = props;
	const darkBg = transparentize(`${c$1}.200`, .16)(theme$1);
	return {
		light: `colors.${c$1}.100`,
		dark: darkBg
	};
}
var variantSubtle = definePartsStyle$24((props) => {
	const { colorScheme: c$1 } = props;
	const bg$1 = getBg(props);
	return { container: {
		[$fg$5.variable]: `colors.${c$1}.600`,
		[$bg$15.variable]: bg$1.light,
		_dark: {
			[$fg$5.variable]: `colors.${c$1}.200`,
			[$bg$15.variable]: bg$1.dark
		}
	} };
});
var variantLeftAccent = definePartsStyle$24((props) => {
	const { colorScheme: c$1 } = props;
	const bg$1 = getBg(props);
	return { container: {
		[$fg$5.variable]: `colors.${c$1}.600`,
		[$bg$15.variable]: bg$1.light,
		_dark: {
			[$fg$5.variable]: `colors.${c$1}.200`,
			[$bg$15.variable]: bg$1.dark
		},
		paddingStart: "3",
		borderStartWidth: "4px",
		borderStartColor: $fg$5.reference
	} };
});
var variantTopAccent = definePartsStyle$24((props) => {
	const { colorScheme: c$1 } = props;
	const bg$1 = getBg(props);
	return { container: {
		[$fg$5.variable]: `colors.${c$1}.600`,
		[$bg$15.variable]: bg$1.light,
		_dark: {
			[$fg$5.variable]: `colors.${c$1}.200`,
			[$bg$15.variable]: bg$1.dark
		},
		pt: "2",
		borderTopWidth: "4px",
		borderTopColor: $fg$5.reference
	} };
});
var variantSolid = definePartsStyle$24((props) => {
	const { colorScheme: c$1 } = props;
	return { container: {
		[$fg$5.variable]: `colors.white`,
		[$bg$15.variable]: `colors.${c$1}.600`,
		_dark: {
			[$fg$5.variable]: `colors.gray.900`,
			[$bg$15.variable]: `colors.${c$1}.200`
		},
		color: $fg$5.reference
	} };
});
var alertTheme = defineMultiStyleConfig$24({
	baseStyle: baseStyle$12,
	variants: {
		subtle: variantSubtle,
		"left-accent": variantLeftAccent,
		"top-accent": variantTopAccent,
		solid: variantSolid
	},
	defaultProps: {
		variant: "subtle",
		colorScheme: "blue"
	}
});
var spacing = {
	px: "1px",
	.5: "0.125rem",
	1: "0.25rem",
	1.5: "0.375rem",
	2: "0.5rem",
	2.5: "0.625rem",
	3: "0.75rem",
	3.5: "0.875rem",
	4: "1rem",
	5: "1.25rem",
	6: "1.5rem",
	7: "1.75rem",
	8: "2rem",
	9: "2.25rem",
	10: "2.5rem",
	12: "3rem",
	14: "3.5rem",
	16: "4rem",
	20: "5rem",
	24: "6rem",
	28: "7rem",
	32: "8rem",
	36: "9rem",
	40: "10rem",
	44: "11rem",
	48: "12rem",
	52: "13rem",
	56: "14rem",
	60: "15rem",
	64: "16rem",
	72: "18rem",
	80: "20rem",
	96: "24rem"
};
var largeSizes = {
	max: "max-content",
	min: "min-content",
	full: "100%",
	"3xs": "14rem",
	"2xs": "16rem",
	xs: "20rem",
	sm: "24rem",
	md: "28rem",
	lg: "32rem",
	xl: "36rem",
	"2xl": "42rem",
	"3xl": "48rem",
	"4xl": "56rem",
	"5xl": "64rem",
	"6xl": "72rem",
	"7xl": "80rem",
	"8xl": "90rem",
	prose: "60ch"
};
var container = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px"
};
var sizes = {
	...spacing,
	...largeSizes,
	container
};
var isFunction = (value) => typeof value === "function";
function runIfFn$1(valueOrFn, ...args) {
	return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
var { definePartsStyle: definePartsStyle$23, defineMultiStyleConfig: defineMultiStyleConfig$23 } = createMultiStyleConfigHelpers(avatarAnatomy.keys);
var $border$3 = cssVar$1("avatar-border-color");
var $bg$14 = cssVar$1("avatar-bg");
var $fs = cssVar$1("avatar-font-size");
var $size$4 = cssVar$1("avatar-size");
var baseStyleBadge = defineStyle({
	borderRadius: "full",
	border: "0.2em solid",
	borderColor: $border$3.reference,
	[$border$3.variable]: "white",
	_dark: { [$border$3.variable]: "colors.gray.800" }
});
var baseStyleExcessLabel = defineStyle({
	bg: $bg$14.reference,
	fontSize: $fs.reference,
	width: $size$4.reference,
	height: $size$4.reference,
	lineHeight: "1",
	[$bg$14.variable]: "colors.gray.200",
	_dark: { [$bg$14.variable]: "colors.whiteAlpha.400" }
});
var baseStyleContainer$2 = defineStyle((props) => {
	const { name, theme: theme$1 } = props;
	const bg$1 = name ? randomColor({ string: name }) : "colors.gray.400";
	const isBgDark = isDark(bg$1)(theme$1);
	let color$2 = "white";
	if (!isBgDark) color$2 = "gray.800";
	return {
		bg: $bg$14.reference,
		fontSize: $fs.reference,
		color: color$2,
		borderColor: $border$3.reference,
		verticalAlign: "top",
		width: $size$4.reference,
		height: $size$4.reference,
		"&:not([data-loaded])": { [$bg$14.variable]: bg$1 },
		[$border$3.variable]: "colors.white",
		_dark: { [$border$3.variable]: "colors.gray.800" }
	};
});
var baseStyleLabel$2 = defineStyle({
	fontSize: $fs.reference,
	lineHeight: "1"
});
var baseStyle$11 = definePartsStyle$23((props) => ({
	badge: runIfFn$1(baseStyleBadge, props),
	excessLabel: runIfFn$1(baseStyleExcessLabel, props),
	container: runIfFn$1(baseStyleContainer$2, props),
	label: baseStyleLabel$2
}));
function getSize$3(size$1) {
	const themeSize = size$1 !== "100%" ? sizes[size$1] : void 0;
	return definePartsStyle$23({
		container: {
			[$size$4.variable]: themeSize ?? size$1,
			[$fs.variable]: `calc(${themeSize ?? size$1} / 2.5)`
		},
		excessLabel: {
			[$size$4.variable]: themeSize ?? size$1,
			[$fs.variable]: `calc(${themeSize ?? size$1} / 2.5)`
		}
	});
}
var avatarTheme = defineMultiStyleConfig$23({
	baseStyle: baseStyle$11,
	sizes: {
		"2xs": getSize$3(4),
		xs: getSize$3(6),
		sm: getSize$3(8),
		md: getSize$3(12),
		lg: getSize$3(16),
		xl: getSize$3(24),
		"2xl": getSize$3(32),
		full: getSize$3("100%")
	},
	defaultProps: { size: "md" }
});
var vars = defineCssVars("badge", [
	"bg",
	"color",
	"shadow"
]);
var badgeTheme = defineStyleConfig({
	baseStyle: defineStyle({
		px: 1,
		textTransform: "uppercase",
		fontSize: "xs",
		borderRadius: "sm",
		fontWeight: "bold",
		bg: vars.bg.reference,
		color: vars.color.reference,
		boxShadow: vars.shadow.reference
	}),
	variants: {
		solid: defineStyle((props) => {
			const { colorScheme: c$1, theme: theme$1 } = props;
			const dark = transparentize(`${c$1}.500`, .6)(theme$1);
			return {
				[vars.bg.variable]: `colors.${c$1}.500`,
				[vars.color.variable]: `colors.white`,
				_dark: {
					[vars.bg.variable]: dark,
					[vars.color.variable]: `colors.whiteAlpha.800`
				}
			};
		}),
		subtle: defineStyle((props) => {
			const { colorScheme: c$1, theme: theme$1 } = props;
			const darkBg = transparentize(`${c$1}.200`, .16)(theme$1);
			return {
				[vars.bg.variable]: `colors.${c$1}.100`,
				[vars.color.variable]: `colors.${c$1}.800`,
				_dark: {
					[vars.bg.variable]: darkBg,
					[vars.color.variable]: `colors.${c$1}.200`
				}
			};
		}),
		outline: defineStyle((props) => {
			const { colorScheme: c$1, theme: theme$1 } = props;
			const darkColor = transparentize(`${c$1}.200`, .8)(theme$1);
			return {
				[vars.color.variable]: `colors.${c$1}.500`,
				_dark: { [vars.color.variable]: darkColor },
				[vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`
			};
		})
	},
	defaultProps: {
		variant: "subtle",
		colorScheme: "gray"
	}
});
var { defineMultiStyleConfig: defineMultiStyleConfig$22, definePartsStyle: definePartsStyle$22 } = createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);
var $decor = cssVar$1("breadcrumb-link-decor");
var breadcrumbTheme = defineMultiStyleConfig$22({ baseStyle: definePartsStyle$22({ link: defineStyle({
	transitionProperty: "common",
	transitionDuration: "fast",
	transitionTimingFunction: "ease-out",
	outline: "none",
	color: "inherit",
	textDecoration: $decor.reference,
	[$decor.variable]: "none",
	"&:not([aria-current=page])": {
		cursor: "pointer",
		_hover: { [$decor.variable]: "underline" },
		_focusVisible: { boxShadow: "outline" }
	}
}) }) });
var baseStyle$10 = defineStyle({
	lineHeight: "1.2",
	borderRadius: "md",
	fontWeight: "semibold",
	transitionProperty: "common",
	transitionDuration: "normal",
	_focusVisible: { boxShadow: "outline" },
	_disabled: {
		opacity: .4,
		cursor: "not-allowed",
		boxShadow: "none"
	},
	_hover: { _disabled: { bg: "initial" } }
});
var variantGhost = defineStyle((props) => {
	const { colorScheme: c$1, theme: theme$1 } = props;
	if (c$1 === "gray") return {
		color: mode(`gray.800`, `whiteAlpha.900`)(props),
		_hover: { bg: mode(`gray.100`, `whiteAlpha.200`)(props) },
		_active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) }
	};
	const darkHoverBg = transparentize(`${c$1}.200`, .12)(theme$1);
	const darkActiveBg = transparentize(`${c$1}.200`, .24)(theme$1);
	return {
		color: mode(`${c$1}.600`, `${c$1}.200`)(props),
		bg: "transparent",
		_hover: { bg: mode(`${c$1}.50`, darkHoverBg)(props) },
		_active: { bg: mode(`${c$1}.100`, darkActiveBg)(props) }
	};
});
var variantOutline = defineStyle((props) => {
	const { colorScheme: c$1 } = props;
	const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
	return {
		border: "1px solid",
		borderColor: c$1 === "gray" ? borderColor : "currentColor",
		".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
		".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
		...runIfFn$1(variantGhost, props)
	};
});
var accessibleColorMap = {
	yellow: {
		bg: "yellow.400",
		color: "black",
		hoverBg: "yellow.500",
		activeBg: "yellow.600"
	},
	cyan: {
		bg: "cyan.400",
		color: "black",
		hoverBg: "cyan.500",
		activeBg: "cyan.600"
	}
};
var buttonTheme = defineStyleConfig({
	baseStyle: baseStyle$10,
	variants: {
		ghost: variantGhost,
		outline: variantOutline,
		solid: defineStyle((props) => {
			const { colorScheme: c$1 } = props;
			if (c$1 === "gray") {
				const bg2 = mode(`gray.100`, `whiteAlpha.200`)(props);
				return {
					bg: bg2,
					color: mode(`gray.800`, `whiteAlpha.900`)(props),
					_hover: {
						bg: mode(`gray.200`, `whiteAlpha.300`)(props),
						_disabled: { bg: bg2 }
					},
					_active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) }
				};
			}
			const { bg: bg$1 = `${c$1}.500`, color: color$2 = "white", hoverBg = `${c$1}.600`, activeBg = `${c$1}.700` } = accessibleColorMap[c$1] ?? {};
			const background$1 = mode(bg$1, `${c$1}.200`)(props);
			return {
				bg: background$1,
				color: mode(color$2, `gray.800`)(props),
				_hover: {
					bg: mode(hoverBg, `${c$1}.300`)(props),
					_disabled: { bg: background$1 }
				},
				_active: { bg: mode(activeBg, `${c$1}.400`)(props) }
			};
		}),
		link: defineStyle((props) => {
			const { colorScheme: c$1 } = props;
			return {
				padding: 0,
				height: "auto",
				lineHeight: "normal",
				verticalAlign: "baseline",
				color: mode(`${c$1}.500`, `${c$1}.200`)(props),
				_hover: {
					textDecoration: "underline",
					_disabled: { textDecoration: "none" }
				},
				_active: { color: mode(`${c$1}.700`, `${c$1}.500`)(props) }
			};
		}),
		unstyled: defineStyle({
			bg: "none",
			color: "inherit",
			display: "inline",
			lineHeight: "inherit",
			m: "0",
			p: "0"
		})
	},
	sizes: {
		lg: defineStyle({
			h: "12",
			minW: "12",
			fontSize: "lg",
			px: "6"
		}),
		md: defineStyle({
			h: "10",
			minW: "10",
			fontSize: "md",
			px: "4"
		}),
		sm: defineStyle({
			h: "8",
			minW: "8",
			fontSize: "sm",
			px: "3"
		}),
		xs: defineStyle({
			h: "6",
			minW: "6",
			fontSize: "xs",
			px: "2"
		})
	},
	defaultProps: {
		variant: "solid",
		size: "md",
		colorScheme: "gray"
	}
});
var { definePartsStyle: definePartsStyle$21, defineMultiStyleConfig: defineMultiStyleConfig$21 } = createMultiStyleConfigHelpers(cardAnatomy.keys);
var $bg$13 = cssVar$1("card-bg");
var $padding$1 = cssVar$1("card-padding");
var $shadow$3 = cssVar$1("card-shadow");
var $radius = cssVar$1("card-radius");
var $border$2 = cssVar$1("card-border-width", "0");
var $borderColor = cssVar$1("card-border-color");
var baseStyle$9 = definePartsStyle$21({
	container: {
		[$bg$13.variable]: "colors.chakra-body-bg",
		backgroundColor: $bg$13.reference,
		boxShadow: $shadow$3.reference,
		borderRadius: $radius.reference,
		color: "chakra-body-text",
		borderWidth: $border$2.reference,
		borderColor: $borderColor.reference
	},
	body: {
		padding: $padding$1.reference,
		flex: "1 1 0%"
	},
	header: { padding: $padding$1.reference },
	footer: { padding: $padding$1.reference }
});
var sizes$4 = {
	sm: definePartsStyle$21({ container: {
		[$radius.variable]: "radii.base",
		[$padding$1.variable]: "space.3"
	} }),
	md: definePartsStyle$21({ container: {
		[$radius.variable]: "radii.md",
		[$padding$1.variable]: "space.5"
	} }),
	lg: definePartsStyle$21({ container: {
		[$radius.variable]: "radii.xl",
		[$padding$1.variable]: "space.7"
	} })
};
var cardTheme = defineMultiStyleConfig$21({
	baseStyle: baseStyle$9,
	variants: {
		elevated: definePartsStyle$21({ container: {
			[$shadow$3.variable]: "shadows.base",
			_dark: { [$bg$13.variable]: "colors.gray.700" }
		} }),
		outline: definePartsStyle$21({ container: {
			[$border$2.variable]: "1px",
			[$borderColor.variable]: "colors.chakra-border-color"
		} }),
		filled: definePartsStyle$21({ container: { [$bg$13.variable]: "colors.chakra-subtle-bg" } }),
		unstyled: {
			body: { [$padding$1.variable]: 0 },
			header: { [$padding$1.variable]: 0 },
			footer: { [$padding$1.variable]: 0 }
		}
	},
	sizes: sizes$4,
	defaultProps: {
		variant: "elevated",
		size: "md"
	}
});
var { definePartsStyle: definePartsStyle$20, defineMultiStyleConfig: defineMultiStyleConfig$20 } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);
var $size$3 = cssVar$1("checkbox-size");
var baseStyleControl$1 = defineStyle((props) => {
	const { colorScheme: c$1 } = props;
	return {
		w: $size$3.reference,
		h: $size$3.reference,
		transitionProperty: "box-shadow",
		transitionDuration: "normal",
		border: "2px solid",
		borderRadius: "sm",
		borderColor: "inherit",
		color: "white",
		_checked: {
			bg: mode(`${c$1}.500`, `${c$1}.200`)(props),
			borderColor: mode(`${c$1}.500`, `${c$1}.200`)(props),
			color: mode("white", "gray.900")(props),
			_hover: {
				bg: mode(`${c$1}.600`, `${c$1}.300`)(props),
				borderColor: mode(`${c$1}.600`, `${c$1}.300`)(props)
			},
			_disabled: {
				borderColor: mode("gray.200", "transparent")(props),
				bg: mode("gray.200", "whiteAlpha.300")(props),
				color: mode("gray.500", "whiteAlpha.500")(props)
			}
		},
		_indeterminate: {
			bg: mode(`${c$1}.500`, `${c$1}.200`)(props),
			borderColor: mode(`${c$1}.500`, `${c$1}.200`)(props),
			color: mode("white", "gray.900")(props)
		},
		_disabled: {
			bg: mode("gray.100", "whiteAlpha.100")(props),
			borderColor: mode("gray.100", "transparent")(props)
		},
		_focusVisible: { boxShadow: "outline" },
		_invalid: { borderColor: mode("red.500", "red.300")(props) }
	};
});
var baseStyleContainer$1 = defineStyle({ _disabled: { cursor: "not-allowed" } });
var baseStyleLabel$1 = defineStyle({
	userSelect: "none",
	_disabled: { opacity: .4 }
});
var baseStyleIcon$1 = defineStyle({
	transitionProperty: "transform",
	transitionDuration: "normal"
});
var checkboxTheme = defineMultiStyleConfig$20({
	baseStyle: definePartsStyle$20((props) => ({
		icon: baseStyleIcon$1,
		container: baseStyleContainer$1,
		control: runIfFn$1(baseStyleControl$1, props),
		label: baseStyleLabel$1
	})),
	sizes: {
		sm: definePartsStyle$20({
			control: { [$size$3.variable]: "sizes.3" },
			label: { fontSize: "sm" },
			icon: { fontSize: "3xs" }
		}),
		md: definePartsStyle$20({
			control: { [$size$3.variable]: "sizes.4" },
			label: { fontSize: "md" },
			icon: { fontSize: "2xs" }
		}),
		lg: definePartsStyle$20({
			control: { [$size$3.variable]: "sizes.5" },
			label: { fontSize: "lg" },
			icon: { fontSize: "2xs" }
		})
	},
	defaultProps: {
		size: "md",
		colorScheme: "blue"
	}
});
var $size$2 = cssVar("close-button-size");
var $bg$12 = cssVar("close-button-bg");
var closeButtonTheme = defineStyleConfig({
	baseStyle: defineStyle({
		w: [$size$2.reference],
		h: [$size$2.reference],
		borderRadius: "md",
		transitionProperty: "common",
		transitionDuration: "normal",
		_disabled: {
			opacity: .4,
			cursor: "not-allowed",
			boxShadow: "none"
		},
		_hover: {
			[$bg$12.variable]: "colors.blackAlpha.100",
			_dark: { [$bg$12.variable]: "colors.whiteAlpha.100" }
		},
		_active: {
			[$bg$12.variable]: "colors.blackAlpha.200",
			_dark: { [$bg$12.variable]: "colors.whiteAlpha.200" }
		},
		_focusVisible: { boxShadow: "outline" },
		bg: $bg$12.reference
	}),
	sizes: {
		lg: defineStyle({
			[$size$2.variable]: "sizes.10",
			fontSize: "md"
		}),
		md: defineStyle({
			[$size$2.variable]: "sizes.8",
			fontSize: "xs"
		}),
		sm: defineStyle({
			[$size$2.variable]: "sizes.6",
			fontSize: "2xs"
		})
	},
	defaultProps: { size: "md" }
});
var { variants: variants$1, defaultProps } = badgeTheme;
var codeTheme = defineStyleConfig({
	baseStyle: defineStyle({
		fontFamily: "mono",
		fontSize: "sm",
		px: "0.2em",
		borderRadius: "sm",
		bg: vars.bg.reference,
		color: vars.color.reference,
		boxShadow: vars.shadow.reference
	}),
	variants: variants$1,
	defaultProps
});
var containerTheme = defineStyleConfig({ baseStyle: defineStyle({
	w: "100%",
	mx: "auto",
	maxW: "prose",
	px: "4"
}) });
var dividerTheme = defineStyleConfig({
	baseStyle: defineStyle({
		opacity: .6,
		borderColor: "inherit"
	}),
	variants: {
		solid: defineStyle({ borderStyle: "solid" }),
		dashed: defineStyle({ borderStyle: "dashed" })
	},
	defaultProps: { variant: "solid" }
});
var { definePartsStyle: definePartsStyle$19, defineMultiStyleConfig: defineMultiStyleConfig$19 } = createMultiStyleConfigHelpers(drawerAnatomy.keys);
var $bg$11 = cssVar$1("drawer-bg");
var $bs = cssVar$1("drawer-box-shadow");
function getSize$2(value) {
	if (value === "full") return definePartsStyle$19({ dialog: {
		maxW: "100vw",
		h: "100vh"
	} });
	return definePartsStyle$19({ dialog: { maxW: value } });
}
var baseStyleOverlay$1 = defineStyle({
	bg: "blackAlpha.600",
	zIndex: "modal"
});
var baseStyleDialogContainer$1 = defineStyle({
	display: "flex",
	zIndex: "modal",
	justifyContent: "center"
});
var baseStyleDialog$1 = defineStyle((props) => {
	const { isFullHeight } = props;
	return {
		...isFullHeight && { height: "100vh" },
		zIndex: "modal",
		maxH: "100vh",
		color: "inherit",
		[$bg$11.variable]: "colors.white",
		[$bs.variable]: "shadows.lg",
		_dark: {
			[$bg$11.variable]: "colors.gray.700",
			[$bs.variable]: "shadows.dark-lg"
		},
		bg: $bg$11.reference,
		boxShadow: $bs.reference
	};
});
var baseStyleHeader$1 = defineStyle({
	px: "6",
	py: "4",
	fontSize: "xl",
	fontWeight: "semibold"
});
var baseStyleCloseButton$1 = defineStyle({
	position: "absolute",
	top: "2",
	insetEnd: "3"
});
var baseStyleBody$1 = defineStyle({
	px: "6",
	py: "2",
	flex: "1",
	overflow: "auto"
});
var baseStyleFooter$1 = defineStyle({
	px: "6",
	py: "4"
});
var drawerTheme = defineMultiStyleConfig$19({
	baseStyle: definePartsStyle$19((props) => ({
		overlay: baseStyleOverlay$1,
		dialogContainer: baseStyleDialogContainer$1,
		dialog: runIfFn$1(baseStyleDialog$1, props),
		header: baseStyleHeader$1,
		closeButton: baseStyleCloseButton$1,
		body: baseStyleBody$1,
		footer: baseStyleFooter$1
	})),
	sizes: {
		xs: getSize$2("xs"),
		sm: getSize$2("md"),
		md: getSize$2("lg"),
		lg: getSize$2("2xl"),
		xl: getSize$2("4xl"),
		full: getSize$2("full")
	},
	defaultProps: { size: "xs" }
});
var { definePartsStyle: definePartsStyle$18, defineMultiStyleConfig: defineMultiStyleConfig$18 } = createMultiStyleConfigHelpers(editableAnatomy.keys);
var editableTheme = defineMultiStyleConfig$18({ baseStyle: definePartsStyle$18({
	preview: defineStyle({
		borderRadius: "md",
		py: "1",
		transitionProperty: "common",
		transitionDuration: "normal"
	}),
	input: defineStyle({
		borderRadius: "md",
		py: "1",
		transitionProperty: "common",
		transitionDuration: "normal",
		width: "full",
		_focusVisible: { boxShadow: "outline" },
		_placeholder: { opacity: .6 }
	}),
	textarea: defineStyle({
		borderRadius: "md",
		py: "1",
		transitionProperty: "common",
		transitionDuration: "normal",
		width: "full",
		_focusVisible: { boxShadow: "outline" },
		_placeholder: { opacity: .6 }
	})
}) });
var { definePartsStyle: definePartsStyle$17, defineMultiStyleConfig: defineMultiStyleConfig$17 } = createMultiStyleConfigHelpers(formAnatomy.keys);
var $fg$4 = cssVar$1("form-control-color");
var formTheme = defineMultiStyleConfig$17({ baseStyle: definePartsStyle$17({
	container: {
		width: "100%",
		position: "relative"
	},
	requiredIndicator: defineStyle({
		marginStart: "1",
		[$fg$4.variable]: "colors.red.500",
		_dark: { [$fg$4.variable]: "colors.red.300" },
		color: $fg$4.reference
	}),
	helperText: defineStyle({
		mt: "2",
		[$fg$4.variable]: "colors.gray.600",
		_dark: { [$fg$4.variable]: "colors.whiteAlpha.600" },
		color: $fg$4.reference,
		lineHeight: "normal",
		fontSize: "sm"
	})
}) });
var { definePartsStyle: definePartsStyle$16, defineMultiStyleConfig: defineMultiStyleConfig$16 } = createMultiStyleConfigHelpers(formErrorAnatomy.keys);
var $fg$3 = cssVar$1("form-error-color");
var formErrorTheme = defineMultiStyleConfig$16({ baseStyle: definePartsStyle$16({
	text: defineStyle({
		[$fg$3.variable]: `colors.red.500`,
		_dark: { [$fg$3.variable]: `colors.red.300` },
		color: $fg$3.reference,
		mt: "2",
		fontSize: "sm",
		lineHeight: "normal"
	}),
	icon: defineStyle({
		marginEnd: "0.5em",
		[$fg$3.variable]: `colors.red.500`,
		_dark: { [$fg$3.variable]: `colors.red.300` },
		color: $fg$3.reference
	})
}) });
var formLabelTheme = defineStyleConfig({ baseStyle: defineStyle({
	fontSize: "md",
	marginEnd: "3",
	mb: "2",
	fontWeight: "medium",
	transitionProperty: "common",
	transitionDuration: "normal",
	opacity: 1,
	_disabled: { opacity: .4 }
}) });
var headingTheme = defineStyleConfig({
	baseStyle: defineStyle({
		fontFamily: "heading",
		fontWeight: "bold"
	}),
	sizes: {
		"4xl": defineStyle({
			fontSize: [
				"6xl",
				null,
				"7xl"
			],
			lineHeight: 1
		}),
		"3xl": defineStyle({
			fontSize: [
				"5xl",
				null,
				"6xl"
			],
			lineHeight: 1
		}),
		"2xl": defineStyle({
			fontSize: [
				"4xl",
				null,
				"5xl"
			],
			lineHeight: [
				1.2,
				null,
				1
			]
		}),
		xl: defineStyle({
			fontSize: [
				"3xl",
				null,
				"4xl"
			],
			lineHeight: [
				1.33,
				null,
				1.2
			]
		}),
		lg: defineStyle({
			fontSize: [
				"2xl",
				null,
				"3xl"
			],
			lineHeight: [
				1.33,
				null,
				1.2
			]
		}),
		md: defineStyle({
			fontSize: "xl",
			lineHeight: 1.2
		}),
		sm: defineStyle({
			fontSize: "md",
			lineHeight: 1.2
		}),
		xs: defineStyle({
			fontSize: "sm",
			lineHeight: 1.2
		})
	},
	defaultProps: { size: "xl" }
});
var { definePartsStyle: definePartsStyle$15, defineMultiStyleConfig: defineMultiStyleConfig$15 } = createMultiStyleConfigHelpers(inputAnatomy.keys);
var $height$1 = cssVar$1("input-height");
var $fontSize$1 = cssVar$1("input-font-size");
var $padding = cssVar$1("input-padding");
var $borderRadius = cssVar$1("input-border-radius");
var baseStyle$8 = definePartsStyle$15({
	addon: {
		height: $height$1.reference,
		fontSize: $fontSize$1.reference,
		px: $padding.reference,
		borderRadius: $borderRadius.reference
	},
	field: {
		width: "100%",
		height: $height$1.reference,
		fontSize: $fontSize$1.reference,
		px: $padding.reference,
		borderRadius: $borderRadius.reference,
		minWidth: 0,
		outline: 0,
		position: "relative",
		appearance: "none",
		transitionProperty: "common",
		transitionDuration: "normal",
		_disabled: {
			opacity: .4,
			cursor: "not-allowed"
		}
	}
});
var size = {
	lg: defineStyle({
		[$fontSize$1.variable]: "fontSizes.lg",
		[$padding.variable]: "space.4",
		[$borderRadius.variable]: "radii.md",
		[$height$1.variable]: "sizes.12"
	}),
	md: defineStyle({
		[$fontSize$1.variable]: "fontSizes.md",
		[$padding.variable]: "space.4",
		[$borderRadius.variable]: "radii.md",
		[$height$1.variable]: "sizes.10"
	}),
	sm: defineStyle({
		[$fontSize$1.variable]: "fontSizes.sm",
		[$padding.variable]: "space.3",
		[$borderRadius.variable]: "radii.sm",
		[$height$1.variable]: "sizes.8"
	}),
	xs: defineStyle({
		[$fontSize$1.variable]: "fontSizes.xs",
		[$padding.variable]: "space.2",
		[$borderRadius.variable]: "radii.sm",
		[$height$1.variable]: "sizes.6"
	})
};
var sizes$3 = {
	lg: definePartsStyle$15({
		field: size.lg,
		group: size.lg
	}),
	md: definePartsStyle$15({
		field: size.md,
		group: size.md
	}),
	sm: definePartsStyle$15({
		field: size.sm,
		group: size.sm
	}),
	xs: definePartsStyle$15({
		field: size.xs,
		group: size.xs
	})
};
function getDefaults(props) {
	const { focusBorderColor: fc$1, errorBorderColor: ec$1 } = props;
	return {
		focusBorderColor: fc$1 || mode("blue.500", "blue.300")(props),
		errorBorderColor: ec$1 || mode("red.500", "red.300")(props)
	};
}
var inputTheme = defineMultiStyleConfig$15({
	baseStyle: baseStyle$8,
	sizes: sizes$3,
	variants: {
		outline: definePartsStyle$15((props) => {
			const { theme: theme$1 } = props;
			const { focusBorderColor: fc$1, errorBorderColor: ec$1 } = getDefaults(props);
			return {
				field: {
					border: "1px solid",
					borderColor: "inherit",
					bg: "inherit",
					_hover: { borderColor: mode("gray.300", "whiteAlpha.400")(props) },
					_readOnly: {
						boxShadow: "none !important",
						userSelect: "all"
					},
					_invalid: {
						borderColor: getColor(theme$1, ec$1),
						boxShadow: `0 0 0 1px ${getColor(theme$1, ec$1)}`
					},
					_focusVisible: {
						zIndex: 1,
						borderColor: getColor(theme$1, fc$1),
						boxShadow: `0 0 0 1px ${getColor(theme$1, fc$1)}`
					}
				},
				addon: {
					border: "1px solid",
					borderColor: mode("inherit", "whiteAlpha.50")(props),
					bg: mode("gray.100", "whiteAlpha.300")(props)
				}
			};
		}),
		filled: definePartsStyle$15((props) => {
			const { theme: theme$1 } = props;
			const { focusBorderColor: fc$1, errorBorderColor: ec$1 } = getDefaults(props);
			return {
				field: {
					border: "2px solid",
					borderColor: "transparent",
					bg: mode("gray.100", "whiteAlpha.50")(props),
					_hover: { bg: mode("gray.200", "whiteAlpha.100")(props) },
					_readOnly: {
						boxShadow: "none !important",
						userSelect: "all"
					},
					_invalid: { borderColor: getColor(theme$1, ec$1) },
					_focusVisible: {
						bg: "transparent",
						borderColor: getColor(theme$1, fc$1)
					}
				},
				addon: {
					border: "2px solid",
					borderColor: "transparent",
					bg: mode("gray.100", "whiteAlpha.50")(props)
				}
			};
		}),
		flushed: definePartsStyle$15((props) => {
			const { theme: theme$1 } = props;
			const { focusBorderColor: fc$1, errorBorderColor: ec$1 } = getDefaults(props);
			return {
				field: {
					borderBottom: "1px solid",
					borderColor: "inherit",
					borderRadius: "0",
					px: "0",
					bg: "transparent",
					_readOnly: {
						boxShadow: "none !important",
						userSelect: "all"
					},
					_invalid: {
						borderColor: getColor(theme$1, ec$1),
						boxShadow: `0px 1px 0px 0px ${getColor(theme$1, ec$1)}`
					},
					_focusVisible: {
						borderColor: getColor(theme$1, fc$1),
						boxShadow: `0px 1px 0px 0px ${getColor(theme$1, fc$1)}`
					}
				},
				addon: {
					borderBottom: "2px solid",
					borderColor: "inherit",
					borderRadius: "0",
					px: "0",
					bg: "transparent"
				}
			};
		}),
		unstyled: definePartsStyle$15({
			field: {
				bg: "transparent",
				px: "0",
				height: "auto"
			},
			addon: {
				bg: "transparent",
				px: "0",
				height: "auto"
			}
		})
	},
	defaultProps: {
		size: "md",
		variant: "outline"
	}
});
var $bg$10 = cssVar$1("kbd-bg");
var kbdTheme = defineStyleConfig({ baseStyle: defineStyle({
	[$bg$10.variable]: "colors.gray.100",
	_dark: { [$bg$10.variable]: "colors.whiteAlpha.100" },
	bg: $bg$10.reference,
	borderRadius: "md",
	borderWidth: "1px",
	borderBottomWidth: "3px",
	fontSize: "0.8em",
	fontWeight: "bold",
	lineHeight: "normal",
	px: "0.4em",
	whiteSpace: "nowrap"
}) });
var linkTheme = defineStyleConfig({ baseStyle: defineStyle({
	transitionProperty: "common",
	transitionDuration: "fast",
	transitionTimingFunction: "ease-out",
	cursor: "pointer",
	textDecoration: "none",
	outline: "none",
	color: "inherit",
	_hover: { textDecoration: "underline" },
	_focusVisible: { boxShadow: "outline" }
}) });
var { defineMultiStyleConfig: defineMultiStyleConfig$14, definePartsStyle: definePartsStyle$14 } = createMultiStyleConfigHelpers(listAnatomy.keys);
var listTheme = defineMultiStyleConfig$14({ baseStyle: definePartsStyle$14({ icon: defineStyle({
	marginEnd: "2",
	display: "inline",
	verticalAlign: "text-bottom"
}) }) });
var { defineMultiStyleConfig: defineMultiStyleConfig$13, definePartsStyle: definePartsStyle$13 } = createMultiStyleConfigHelpers(menuAnatomy.keys);
var $bg$9 = cssVar$1("menu-bg");
var $shadow$2 = cssVar$1("menu-shadow");
var baseStyleList = defineStyle({
	[$bg$9.variable]: "#fff",
	[$shadow$2.variable]: "shadows.sm",
	_dark: {
		[$bg$9.variable]: "colors.gray.700",
		[$shadow$2.variable]: "shadows.dark-lg"
	},
	color: "inherit",
	minW: "3xs",
	py: "2",
	zIndex: "dropdown",
	borderRadius: "md",
	borderWidth: "1px",
	bg: $bg$9.reference,
	boxShadow: $shadow$2.reference
});
var baseStyleItem = defineStyle({
	py: "1.5",
	px: "3",
	transitionProperty: "background",
	transitionDuration: "ultra-fast",
	transitionTimingFunction: "ease-in",
	_focus: {
		[$bg$9.variable]: "colors.gray.100",
		_dark: { [$bg$9.variable]: "colors.whiteAlpha.100" }
	},
	_active: {
		[$bg$9.variable]: "colors.gray.200",
		_dark: { [$bg$9.variable]: "colors.whiteAlpha.200" }
	},
	_expanded: {
		[$bg$9.variable]: "colors.gray.100",
		_dark: { [$bg$9.variable]: "colors.whiteAlpha.100" }
	},
	_disabled: {
		opacity: .4,
		cursor: "not-allowed"
	},
	bg: $bg$9.reference
});
var baseStyleGroupTitle = defineStyle({
	mx: 4,
	my: 2,
	fontWeight: "semibold",
	fontSize: "sm"
});
var baseStyleIcon = defineStyle({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0
});
var baseStyleCommand = defineStyle({ opacity: .6 });
var baseStyleDivider = defineStyle({
	border: 0,
	borderBottom: "1px solid",
	borderColor: "inherit",
	my: "2",
	opacity: .6
});
var menuTheme = defineMultiStyleConfig$13({ baseStyle: definePartsStyle$13({
	button: defineStyle({
		transitionProperty: "common",
		transitionDuration: "normal"
	}),
	list: baseStyleList,
	item: baseStyleItem,
	groupTitle: baseStyleGroupTitle,
	icon: baseStyleIcon,
	command: baseStyleCommand,
	divider: baseStyleDivider
}) });
var { defineMultiStyleConfig: defineMultiStyleConfig$12, definePartsStyle: definePartsStyle$12 } = createMultiStyleConfigHelpers(modalAnatomy.keys);
var $bg$8 = cssVar$1("modal-bg");
var $shadow$1 = cssVar$1("modal-shadow");
var baseStyleOverlay = defineStyle({
	bg: "blackAlpha.600",
	zIndex: "modal"
});
var baseStyleDialogContainer = defineStyle((props) => {
	const { isCentered, scrollBehavior } = props;
	return {
		display: "flex",
		zIndex: "modal",
		justifyContent: "center",
		alignItems: isCentered ? "center" : "flex-start",
		overflow: scrollBehavior === "inside" ? "hidden" : "auto",
		overscrollBehaviorY: "none"
	};
});
var baseStyleDialog = defineStyle((props) => {
	const { isCentered, scrollBehavior } = props;
	return {
		borderRadius: "md",
		color: "inherit",
		my: isCentered ? "auto" : "16",
		mx: isCentered ? "auto" : void 0,
		zIndex: "modal",
		maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
		[$bg$8.variable]: "colors.white",
		[$shadow$1.variable]: "shadows.lg",
		_dark: {
			[$bg$8.variable]: "colors.gray.700",
			[$shadow$1.variable]: "shadows.dark-lg"
		},
		bg: $bg$8.reference,
		boxShadow: $shadow$1.reference
	};
});
var baseStyleHeader = defineStyle({
	px: "6",
	py: "4",
	fontSize: "xl",
	fontWeight: "semibold"
});
var baseStyleCloseButton = defineStyle({
	position: "absolute",
	top: "2",
	insetEnd: "3"
});
var baseStyleBody = defineStyle((props) => {
	const { scrollBehavior } = props;
	return {
		px: "6",
		py: "2",
		flex: "1",
		overflow: scrollBehavior === "inside" ? "auto" : void 0
	};
});
var baseStyleFooter = defineStyle({
	px: "6",
	py: "4"
});
var baseStyle$7 = definePartsStyle$12((props) => ({
	overlay: baseStyleOverlay,
	dialogContainer: runIfFn$1(baseStyleDialogContainer, props),
	dialog: runIfFn$1(baseStyleDialog, props),
	header: baseStyleHeader,
	closeButton: baseStyleCloseButton,
	body: runIfFn$1(baseStyleBody, props),
	footer: baseStyleFooter
}));
function getSize$1(value) {
	if (value === "full") return definePartsStyle$12({ dialog: {
		maxW: "100vw",
		minH: "$100vh",
		my: "0",
		borderRadius: "0"
	} });
	return definePartsStyle$12({ dialog: { maxW: value } });
}
var modalTheme = defineMultiStyleConfig$12({
	baseStyle: baseStyle$7,
	sizes: {
		xs: getSize$1("xs"),
		sm: getSize$1("sm"),
		md: getSize$1("md"),
		lg: getSize$1("lg"),
		xl: getSize$1("xl"),
		"2xl": getSize$1("2xl"),
		"3xl": getSize$1("3xl"),
		"4xl": getSize$1("4xl"),
		"5xl": getSize$1("5xl"),
		"6xl": getSize$1("6xl"),
		full: getSize$1("full")
	},
	defaultProps: { size: "md" }
});
var typography = {
	letterSpacings: {
		tighter: "-0.05em",
		tight: "-0.025em",
		normal: "0",
		wide: "0.025em",
		wider: "0.05em",
		widest: "0.1em"
	},
	lineHeights: {
		normal: "normal",
		none: 1,
		shorter: 1.25,
		short: 1.375,
		base: 1.5,
		tall: 1.625,
		taller: "2",
		"3": ".75rem",
		"4": "1rem",
		"5": "1.25rem",
		"6": "1.5rem",
		"7": "1.75rem",
		"8": "2rem",
		"9": "2.25rem",
		"10": "2.5rem"
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900
	},
	fonts: {
		heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
		body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
		mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
	},
	fontSizes: {
		"3xs": "0.45rem",
		"2xs": "0.625rem",
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "3.75rem",
		"7xl": "4.5rem",
		"8xl": "6rem",
		"9xl": "8rem"
	}
};
var { defineMultiStyleConfig: defineMultiStyleConfig$11, definePartsStyle: definePartsStyle$11 } = createMultiStyleConfigHelpers(numberInputAnatomy.keys);
var $stepperWidth = cssVar("number-input-stepper-width");
var $inputPadding = cssVar("number-input-input-padding");
var inputPaddingValue = calc($stepperWidth).add("0.5rem").toString();
var $bg$7 = cssVar("number-input-bg");
var $fg$2 = cssVar("number-input-color");
var $border$1 = cssVar("number-input-border-color");
var baseStyleRoot$1 = defineStyle({
	[$stepperWidth.variable]: "sizes.6",
	[$inputPadding.variable]: inputPaddingValue
});
var baseStyleField = defineStyle((props) => runIfFn$1(inputTheme.baseStyle, props)?.field ?? {});
var baseStyleStepperGroup = defineStyle({ width: $stepperWidth.reference });
var baseStyleStepper = defineStyle({
	borderStart: "1px solid",
	borderStartColor: $border$1.reference,
	color: $fg$2.reference,
	bg: $bg$7.reference,
	[$fg$2.variable]: "colors.chakra-body-text",
	[$border$1.variable]: "colors.chakra-border-color",
	_dark: {
		[$fg$2.variable]: "colors.whiteAlpha.800",
		[$border$1.variable]: "colors.whiteAlpha.300"
	},
	_active: {
		[$bg$7.variable]: "colors.gray.200",
		_dark: { [$bg$7.variable]: "colors.whiteAlpha.300" }
	},
	_disabled: {
		opacity: .4,
		cursor: "not-allowed"
	}
});
var baseStyle$6 = definePartsStyle$11((props) => ({
	root: baseStyleRoot$1,
	field: runIfFn$1(baseStyleField, props) ?? {},
	stepperGroup: baseStyleStepperGroup,
	stepper: baseStyleStepper
}));
function getSize(size$1) {
	const sizeStyle = inputTheme.sizes?.[size$1];
	const radius = {
		lg: "md",
		md: "md",
		sm: "sm",
		xs: "sm"
	};
	const _fontSize = sizeStyle.field?.fontSize ?? "md";
	const fontSize = typography.fontSizes[_fontSize];
	return definePartsStyle$11({
		field: {
			...sizeStyle.field,
			paddingInlineEnd: $inputPadding.reference,
			verticalAlign: "top"
		},
		stepper: {
			fontSize: calc(fontSize).multiply(.75).toString(),
			_first: { borderTopEndRadius: radius[size$1] },
			_last: {
				borderBottomEndRadius: radius[size$1],
				mt: "-1px",
				borderTopWidth: 1
			}
		}
	});
}
var numberInputTheme = defineMultiStyleConfig$11({
	baseStyle: baseStyle$6,
	sizes: {
		xs: getSize("xs"),
		sm: getSize("sm"),
		md: getSize("md"),
		lg: getSize("lg")
	},
	variants: inputTheme.variants,
	defaultProps: inputTheme.defaultProps
});
var pinInputTheme = defineStyleConfig({
	baseStyle: defineStyle({
		...inputTheme.baseStyle?.field,
		textAlign: "center"
	}),
	sizes: {
		lg: defineStyle({
			fontSize: "lg",
			w: 12,
			h: 12,
			borderRadius: "md"
		}),
		md: defineStyle({
			fontSize: "md",
			w: 10,
			h: 10,
			borderRadius: "md"
		}),
		sm: defineStyle({
			fontSize: "sm",
			w: 8,
			h: 8,
			borderRadius: "sm"
		}),
		xs: defineStyle({
			fontSize: "xs",
			w: 6,
			h: 6,
			borderRadius: "sm"
		})
	},
	variants: {
		outline: defineStyle((props) => runIfFn$1(inputTheme.variants?.outline, props)?.field ?? {}),
		flushed: defineStyle((props) => runIfFn$1(inputTheme.variants?.flushed, props)?.field ?? {}),
		filled: defineStyle((props) => runIfFn$1(inputTheme.variants?.filled, props)?.field ?? {}),
		unstyled: inputTheme.variants?.unstyled.field ?? {}
	},
	defaultProps: inputTheme.defaultProps
});
var { defineMultiStyleConfig: defineMultiStyleConfig$10, definePartsStyle: definePartsStyle$10 } = createMultiStyleConfigHelpers(popoverAnatomy.keys);
var $popperBg = cssVar("popper-bg");
var $arrowBg$1 = cssVar("popper-arrow-bg");
var $arrowShadowColor = cssVar("popper-arrow-shadow-color");
var popoverTheme = defineMultiStyleConfig$10({ baseStyle: definePartsStyle$10({
	popper: defineStyle({ zIndex: "popover" }),
	content: defineStyle({
		[$popperBg.variable]: `colors.white`,
		bg: $popperBg.reference,
		[$arrowBg$1.variable]: $popperBg.reference,
		[$arrowShadowColor.variable]: `colors.gray.200`,
		_dark: {
			[$popperBg.variable]: `colors.gray.700`,
			[$arrowShadowColor.variable]: `colors.whiteAlpha.300`
		},
		width: "xs",
		border: "1px solid",
		borderColor: "inherit",
		borderRadius: "md",
		boxShadow: "sm",
		zIndex: "inherit",
		_focusVisible: {
			outline: 0,
			boxShadow: "outline"
		}
	}),
	header: defineStyle({
		px: 3,
		py: 2,
		borderBottomWidth: "1px"
	}),
	body: defineStyle({
		px: 3,
		py: 2
	}),
	footer: defineStyle({
		px: 3,
		py: 2,
		borderTopWidth: "1px"
	}),
	closeButton: defineStyle({
		position: "absolute",
		borderRadius: "md",
		top: 1,
		insetEnd: 2,
		padding: 2
	})
}) });
var { defineMultiStyleConfig: defineMultiStyleConfig$9, definePartsStyle: definePartsStyle$9 } = createMultiStyleConfigHelpers(progressAnatomy.keys);
var filledStyle = defineStyle((props) => {
	const { colorScheme: c$1, theme: t$4, isIndeterminate, hasStripe } = props;
	const stripeStyle = mode(generateStripe(), generateStripe("1rem", "rgba(0,0,0,0.1)"))(props);
	const bgColor = mode(`${c$1}.500`, `${c$1}.200`)(props);
	const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(t$4, bgColor)} 50%,
    transparent 100%
  )`;
	return {
		...!isIndeterminate && hasStripe && stripeStyle,
		...isIndeterminate ? { bgImage: gradient } : { bgColor }
	};
});
var baseStyleLabel = defineStyle({
	lineHeight: "1",
	fontSize: "0.25em",
	fontWeight: "bold",
	color: "white"
});
var baseStyleTrack$2 = defineStyle((props) => {
	return { bg: mode("gray.100", "whiteAlpha.300")(props) };
});
var baseStyleFilledTrack$1 = defineStyle((props) => {
	return {
		transitionProperty: "common",
		transitionDuration: "slow",
		...filledStyle(props)
	};
});
var baseStyle$5 = definePartsStyle$9((props) => ({
	label: baseStyleLabel,
	filledTrack: baseStyleFilledTrack$1(props),
	track: baseStyleTrack$2(props)
}));
var progressTheme = defineMultiStyleConfig$9({
	sizes: {
		xs: definePartsStyle$9({ track: { h: "1" } }),
		sm: definePartsStyle$9({ track: { h: "2" } }),
		md: definePartsStyle$9({ track: { h: "3" } }),
		lg: definePartsStyle$9({ track: { h: "4" } })
	},
	baseStyle: baseStyle$5,
	defaultProps: {
		size: "md",
		colorScheme: "blue"
	}
});
var { defineMultiStyleConfig: defineMultiStyleConfig$8, definePartsStyle: definePartsStyle$8 } = createMultiStyleConfigHelpers(radioAnatomy.keys);
var baseStyleControl = defineStyle((props) => {
	const controlStyle = runIfFn$1(checkboxTheme.baseStyle, props)?.control;
	return {
		...controlStyle,
		borderRadius: "full",
		_checked: {
			...controlStyle?.["_checked"],
			_before: {
				content: `""`,
				display: "inline-block",
				pos: "relative",
				w: "50%",
				h: "50%",
				borderRadius: "50%",
				bg: "currentColor"
			}
		}
	};
});
var radioTheme = defineMultiStyleConfig$8({
	baseStyle: definePartsStyle$8((props) => ({
		label: checkboxTheme.baseStyle?.(props).label,
		container: checkboxTheme.baseStyle?.(props).container,
		control: baseStyleControl(props)
	})),
	sizes: {
		md: definePartsStyle$8({
			control: {
				w: "4",
				h: "4"
			},
			label: { fontSize: "md" }
		}),
		lg: definePartsStyle$8({
			control: {
				w: "5",
				h: "5"
			},
			label: { fontSize: "lg" }
		}),
		sm: definePartsStyle$8({
			control: {
				width: "3",
				height: "3"
			},
			label: { fontSize: "sm" }
		})
	},
	defaultProps: {
		size: "md",
		colorScheme: "blue"
	}
});
var { defineMultiStyleConfig: defineMultiStyleConfig$7, definePartsStyle: definePartsStyle$7 } = createMultiStyleConfigHelpers(selectAnatomy.keys);
var $bg$6 = cssVar$1("select-bg");
var baseStyle$4 = definePartsStyle$7({
	field: defineStyle({
		...inputTheme.baseStyle?.field,
		appearance: "none",
		paddingBottom: "1px",
		lineHeight: "normal",
		bg: $bg$6.reference,
		[$bg$6.variable]: "colors.white",
		_dark: { [$bg$6.variable]: "colors.gray.700" },
		"> option, > optgroup": { bg: $bg$6.reference }
	}),
	icon: defineStyle({
		width: "6",
		height: "100%",
		insetEnd: "2",
		position: "relative",
		color: "currentColor",
		fontSize: "xl",
		_disabled: { opacity: .5 }
	})
});
var iconSpacing = defineStyle({ paddingInlineEnd: "8" });
var selectTheme = defineMultiStyleConfig$7({
	baseStyle: baseStyle$4,
	sizes: {
		lg: {
			...inputTheme.sizes?.lg,
			field: {
				...inputTheme.sizes?.lg.field,
				...iconSpacing
			}
		},
		md: {
			...inputTheme.sizes?.md,
			field: {
				...inputTheme.sizes?.md.field,
				...iconSpacing
			}
		},
		sm: {
			...inputTheme.sizes?.sm,
			field: {
				...inputTheme.sizes?.sm.field,
				...iconSpacing
			}
		},
		xs: {
			...inputTheme.sizes?.xs,
			field: {
				...inputTheme.sizes?.xs.field,
				...iconSpacing
			},
			icon: { insetEnd: "1" }
		}
	},
	variants: inputTheme.variants,
	defaultProps: inputTheme.defaultProps
});
var $startColor = cssVar$1("skeleton-start-color");
var $endColor = cssVar$1("skeleton-end-color");
var skeletonTheme = defineStyleConfig({ baseStyle: defineStyle({
	[$startColor.variable]: "colors.gray.100",
	[$endColor.variable]: "colors.gray.400",
	_dark: {
		[$startColor.variable]: "colors.gray.800",
		[$endColor.variable]: "colors.gray.600"
	},
	background: $startColor.reference,
	borderColor: $endColor.reference,
	opacity: .7,
	borderRadius: "sm"
}) });
var $bg$5 = cssVar$1("skip-link-bg");
var skipLinkTheme = defineStyleConfig({ baseStyle: defineStyle({
	borderRadius: "md",
	fontWeight: "semibold",
	_focusVisible: {
		boxShadow: "outline",
		padding: "4",
		position: "fixed",
		top: "6",
		insetStart: "6",
		[$bg$5.variable]: "colors.white",
		_dark: { [$bg$5.variable]: "colors.gray.700" },
		bg: $bg$5.reference
	}
}) });
var { defineMultiStyleConfig: defineMultiStyleConfig$6, definePartsStyle: definePartsStyle$6 } = createMultiStyleConfigHelpers(sliderAnatomy.keys);
var $thumbSize = cssVar$1("slider-thumb-size");
var $trackSize = cssVar$1("slider-track-size");
var $bg$4 = cssVar$1("slider-bg");
var baseStyleContainer = defineStyle((props) => {
	const { orientation } = props;
	return {
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		_disabled: {
			opacity: .6,
			cursor: "default",
			pointerEvents: "none"
		},
		...orient({
			orientation,
			vertical: {
				h: "100%",
				px: calc$1($thumbSize.reference).divide(2).toString()
			},
			horizontal: {
				w: "100%",
				py: calc$1($thumbSize.reference).divide(2).toString()
			}
		})
	};
});
var baseStyleTrack$1 = defineStyle((props) => {
	return {
		...orient({
			orientation: props.orientation,
			horizontal: { h: $trackSize.reference },
			vertical: { w: $trackSize.reference }
		}),
		overflow: "hidden",
		borderRadius: "sm",
		[$bg$4.variable]: "colors.gray.200",
		_dark: { [$bg$4.variable]: "colors.whiteAlpha.200" },
		_disabled: {
			[$bg$4.variable]: "colors.gray.300",
			_dark: { [$bg$4.variable]: "colors.whiteAlpha.300" }
		},
		bg: $bg$4.reference
	};
});
var baseStyleThumb$1 = defineStyle((props) => {
	const { orientation } = props;
	return {
		...orient({
			orientation,
			vertical: { left: "50%" },
			horizontal: { top: "50%" }
		}),
		w: $thumbSize.reference,
		h: $thumbSize.reference,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		outline: 0,
		zIndex: 1,
		borderRadius: "full",
		bg: "white",
		boxShadow: "base",
		border: "1px solid",
		borderColor: "transparent",
		transitionProperty: "transform",
		transitionDuration: "normal",
		_focusVisible: { boxShadow: "outline" },
		_active: { "--slider-thumb-scale": `1.15` },
		_disabled: { bg: "gray.300" }
	};
});
var baseStyleFilledTrack = defineStyle((props) => {
	const { colorScheme: c$1 } = props;
	return {
		width: "inherit",
		height: "inherit",
		[$bg$4.variable]: `colors.${c$1}.500`,
		_dark: { [$bg$4.variable]: `colors.${c$1}.200` },
		bg: $bg$4.reference
	};
});
var sliderTheme = defineMultiStyleConfig$6({
	baseStyle: definePartsStyle$6((props) => ({
		container: baseStyleContainer(props),
		track: baseStyleTrack$1(props),
		thumb: baseStyleThumb$1(props),
		filledTrack: baseStyleFilledTrack(props)
	})),
	sizes: {
		lg: definePartsStyle$6({ container: {
			[$thumbSize.variable]: `sizes.4`,
			[$trackSize.variable]: `sizes.1`
		} }),
		md: definePartsStyle$6({ container: {
			[$thumbSize.variable]: `sizes.3.5`,
			[$trackSize.variable]: `sizes.1`
		} }),
		sm: definePartsStyle$6({ container: {
			[$thumbSize.variable]: `sizes.2.5`,
			[$trackSize.variable]: `sizes.0.5`
		} })
	},
	defaultProps: {
		size: "md",
		colorScheme: "blue"
	}
});
var $size$1 = cssVar("spinner-size");
var spinnerTheme = defineStyleConfig({
	baseStyle: defineStyle({
		width: [$size$1.reference],
		height: [$size$1.reference]
	}),
	sizes: {
		xs: defineStyle({ [$size$1.variable]: "sizes.3" }),
		sm: defineStyle({ [$size$1.variable]: "sizes.4" }),
		md: defineStyle({ [$size$1.variable]: "sizes.6" }),
		lg: defineStyle({ [$size$1.variable]: "sizes.8" }),
		xl: defineStyle({ [$size$1.variable]: "sizes.12" })
	},
	defaultProps: { size: "md" }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$5, definePartsStyle: definePartsStyle$5 } = createMultiStyleConfigHelpers(statAnatomy.keys);
var statTheme = defineMultiStyleConfig$5({
	baseStyle: definePartsStyle$5({
		container: {},
		label: defineStyle({ fontWeight: "medium" }),
		helpText: defineStyle({
			opacity: .8,
			marginBottom: "2"
		}),
		number: defineStyle({
			verticalAlign: "baseline",
			fontWeight: "semibold"
		}),
		icon: defineStyle({
			marginEnd: 1,
			w: "3.5",
			h: "3.5",
			verticalAlign: "middle"
		})
	}),
	sizes: { md: definePartsStyle$5({
		label: { fontSize: "sm" },
		helpText: { fontSize: "sm" },
		number: { fontSize: "2xl" }
	}) },
	defaultProps: { size: "md" }
});
var { defineMultiStyleConfig: defineMultiStyleConfig$4, definePartsStyle: definePartsStyle$4 } = createMultiStyleConfigHelpers([
	"stepper",
	"step",
	"title",
	"description",
	"indicator",
	"separator",
	"icon",
	"number"
]);
var $size = cssVar$1("stepper-indicator-size");
var $iconSize = cssVar$1("stepper-icon-size");
var $titleFontSize = cssVar$1("stepper-title-font-size");
var $descFontSize = cssVar$1("stepper-description-font-size");
var $accentColor = cssVar$1("stepper-accent-color");
var stepperTheme = defineMultiStyleConfig$4({
	baseStyle: definePartsStyle$4(({ colorScheme: c$1 }) => ({
		stepper: {
			display: "flex",
			justifyContent: "space-between",
			gap: "4",
			"&[data-orientation=vertical]": {
				flexDirection: "column",
				alignItems: "flex-start"
			},
			"&[data-orientation=horizontal]": {
				flexDirection: "row",
				alignItems: "center"
			},
			[$accentColor.variable]: `colors.${c$1}.500`,
			_dark: { [$accentColor.variable]: `colors.${c$1}.200` }
		},
		title: {
			fontSize: $titleFontSize.reference,
			fontWeight: "medium"
		},
		description: {
			fontSize: $descFontSize.reference,
			color: "chakra-subtle-text"
		},
		number: { fontSize: $titleFontSize.reference },
		step: {
			flexShrink: 0,
			position: "relative",
			display: "flex",
			gap: "2",
			"&[data-orientation=horizontal]": { alignItems: "center" },
			flex: "1",
			"&:last-of-type:not([data-stretch])": { flex: "initial" }
		},
		icon: {
			flexShrink: 0,
			width: $iconSize.reference,
			height: $iconSize.reference
		},
		indicator: {
			flexShrink: 0,
			borderRadius: "full",
			width: $size.reference,
			height: $size.reference,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			"&[data-status=active]": {
				borderWidth: "2px",
				borderColor: $accentColor.reference
			},
			"&[data-status=complete]": {
				bg: $accentColor.reference,
				color: "chakra-inverse-text"
			},
			"&[data-status=incomplete]": { borderWidth: "2px" }
		},
		separator: {
			bg: "chakra-border-color",
			flex: "1",
			"&[data-status=complete]": { bg: $accentColor.reference },
			"&[data-orientation=horizontal]": {
				width: "100%",
				height: "2px",
				marginStart: "2"
			},
			"&[data-orientation=vertical]": {
				width: "2px",
				position: "absolute",
				height: "100%",
				maxHeight: `calc(100% - ${$size.reference} - 8px)`,
				top: `calc(${$size.reference} + 4px)`,
				insetStart: `calc(${$size.reference} / 2 - 1px)`
			}
		}
	})),
	sizes: {
		xs: definePartsStyle$4({ stepper: {
			[$size.variable]: "sizes.4",
			[$iconSize.variable]: "sizes.3",
			[$titleFontSize.variable]: "fontSizes.xs",
			[$descFontSize.variable]: "fontSizes.xs"
		} }),
		sm: definePartsStyle$4({ stepper: {
			[$size.variable]: "sizes.6",
			[$iconSize.variable]: "sizes.4",
			[$titleFontSize.variable]: "fontSizes.sm",
			[$descFontSize.variable]: "fontSizes.xs"
		} }),
		md: definePartsStyle$4({ stepper: {
			[$size.variable]: "sizes.8",
			[$iconSize.variable]: "sizes.5",
			[$titleFontSize.variable]: "fontSizes.md",
			[$descFontSize.variable]: "fontSizes.sm"
		} }),
		lg: definePartsStyle$4({ stepper: {
			[$size.variable]: "sizes.10",
			[$iconSize.variable]: "sizes.6",
			[$titleFontSize.variable]: "fontSizes.lg",
			[$descFontSize.variable]: "fontSizes.md"
		} })
	},
	defaultProps: {
		size: "md",
		colorScheme: "blue"
	}
});
var { defineMultiStyleConfig: defineMultiStyleConfig$3, definePartsStyle: definePartsStyle$3 } = createMultiStyleConfigHelpers(switchAnatomy.keys);
var $width = cssVar("switch-track-width");
var $height = cssVar("switch-track-height");
var $diff = cssVar("switch-track-diff");
var diffValue = calc.subtract($width, $height);
var $translateX = cssVar("switch-thumb-x");
var $bg$3 = cssVar("switch-bg");
var baseStyleTrack = defineStyle((props) => {
	const { colorScheme: c$1 } = props;
	return {
		borderRadius: "full",
		p: "0.5",
		width: [$width.reference],
		height: [$height.reference],
		transitionProperty: "common",
		transitionDuration: "fast",
		[$bg$3.variable]: "colors.gray.300",
		_dark: { [$bg$3.variable]: "colors.whiteAlpha.400" },
		_focusVisible: { boxShadow: "outline" },
		_disabled: {
			opacity: .4,
			cursor: "not-allowed"
		},
		_checked: {
			[$bg$3.variable]: `colors.${c$1}.500`,
			_dark: { [$bg$3.variable]: `colors.${c$1}.200` }
		},
		bg: $bg$3.reference
	};
});
var baseStyleThumb = defineStyle({
	bg: "white",
	transitionProperty: "transform",
	transitionDuration: "normal",
	borderRadius: "inherit",
	width: [$height.reference],
	height: [$height.reference],
	_checked: { transform: `translateX(${$translateX.reference})` }
});
var switchTheme = defineMultiStyleConfig$3({
	baseStyle: definePartsStyle$3((props) => ({
		container: {
			[$diff.variable]: diffValue,
			[$translateX.variable]: $diff.reference,
			_rtl: { [$translateX.variable]: calc($diff).negate().toString() }
		},
		track: baseStyleTrack(props),
		thumb: baseStyleThumb
	})),
	sizes: {
		sm: definePartsStyle$3({ container: {
			[$width.variable]: "1.375rem",
			[$height.variable]: "sizes.3"
		} }),
		md: definePartsStyle$3({ container: {
			[$width.variable]: "1.875rem",
			[$height.variable]: "sizes.4"
		} }),
		lg: definePartsStyle$3({ container: {
			[$width.variable]: "2.875rem",
			[$height.variable]: "sizes.6"
		} })
	},
	defaultProps: {
		size: "md",
		colorScheme: "blue"
	}
});
var { defineMultiStyleConfig: defineMultiStyleConfig$2, definePartsStyle: definePartsStyle$2 } = createMultiStyleConfigHelpers(tableAnatomy.keys);
var baseStyle$3 = definePartsStyle$2({
	table: {
		fontVariantNumeric: "lining-nums tabular-nums",
		borderCollapse: "collapse",
		width: "full"
	},
	th: {
		fontFamily: "heading",
		fontWeight: "bold",
		textTransform: "uppercase",
		letterSpacing: "wider",
		textAlign: "start"
	},
	td: { textAlign: "start" },
	caption: {
		mt: 4,
		fontFamily: "heading",
		textAlign: "center",
		fontWeight: "medium"
	}
});
var numericStyles = defineStyle({ "&[data-is-numeric=true]": { textAlign: "end" } });
var tableTheme = defineMultiStyleConfig$2({
	baseStyle: baseStyle$3,
	variants: {
		simple: definePartsStyle$2((props) => {
			const { colorScheme: c$1 } = props;
			return {
				th: {
					color: mode("gray.600", "gray.400")(props),
					borderBottom: "1px",
					borderColor: mode(`${c$1}.100`, `${c$1}.700`)(props),
					...numericStyles
				},
				td: {
					borderBottom: "1px",
					borderColor: mode(`${c$1}.100`, `${c$1}.700`)(props),
					...numericStyles
				},
				caption: { color: mode("gray.600", "gray.100")(props) },
				tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } }
			};
		}),
		striped: definePartsStyle$2((props) => {
			const { colorScheme: c$1 } = props;
			return {
				th: {
					color: mode("gray.600", "gray.400")(props),
					borderBottom: "1px",
					borderColor: mode(`${c$1}.100`, `${c$1}.700`)(props),
					...numericStyles
				},
				td: {
					borderBottom: "1px",
					borderColor: mode(`${c$1}.100`, `${c$1}.700`)(props),
					...numericStyles
				},
				caption: { color: mode("gray.600", "gray.100")(props) },
				tbody: { tr: { "&:nth-of-type(odd)": {
					"th, td": {
						borderBottomWidth: "1px",
						borderColor: mode(`${c$1}.100`, `${c$1}.700`)(props)
					},
					td: { background: mode(`${c$1}.100`, `${c$1}.700`)(props) }
				} } },
				tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } }
			};
		}),
		unstyled: defineStyle({})
	},
	sizes: {
		sm: definePartsStyle$2({
			th: {
				px: "4",
				py: "1",
				lineHeight: "4",
				fontSize: "xs"
			},
			td: {
				px: "4",
				py: "2",
				fontSize: "sm",
				lineHeight: "4"
			},
			caption: {
				px: "4",
				py: "2",
				fontSize: "xs"
			}
		}),
		md: definePartsStyle$2({
			th: {
				px: "6",
				py: "3",
				lineHeight: "4",
				fontSize: "xs"
			},
			td: {
				px: "6",
				py: "4",
				lineHeight: "5"
			},
			caption: {
				px: "6",
				py: "2",
				fontSize: "sm"
			}
		}),
		lg: definePartsStyle$2({
			th: {
				px: "8",
				py: "4",
				lineHeight: "5",
				fontSize: "sm"
			},
			td: {
				px: "8",
				py: "5",
				lineHeight: "6"
			},
			caption: {
				px: "6",
				py: "2",
				fontSize: "md"
			}
		})
	},
	defaultProps: {
		variant: "simple",
		size: "md",
		colorScheme: "gray"
	}
});
var $fg$1 = cssVar$1("tabs-color");
var $bg$2 = cssVar$1("tabs-bg");
var $border = cssVar$1("tabs-border-color");
var { defineMultiStyleConfig: defineMultiStyleConfig$1, definePartsStyle: definePartsStyle$1 } = createMultiStyleConfigHelpers(tabsAnatomy.keys);
var baseStyleRoot = defineStyle((props) => {
	const { orientation } = props;
	return { display: orientation === "vertical" ? "flex" : "block" };
});
var baseStyleTab = defineStyle((props) => {
	const { isFitted } = props;
	return {
		flex: isFitted ? 1 : void 0,
		transitionProperty: "common",
		transitionDuration: "normal",
		_focusVisible: {
			zIndex: 1,
			boxShadow: "outline"
		},
		_disabled: {
			cursor: "not-allowed",
			opacity: .4
		}
	};
});
var baseStyleTablist = defineStyle((props) => {
	const { align = "start", orientation } = props;
	return {
		justifyContent: {
			end: "flex-end",
			center: "center",
			start: "flex-start"
		}[align],
		flexDirection: orientation === "vertical" ? "column" : "row"
	};
});
var baseStyleTabpanel = defineStyle({ p: 4 });
var baseStyle$2 = definePartsStyle$1((props) => ({
	root: baseStyleRoot(props),
	tab: baseStyleTab(props),
	tablist: baseStyleTablist(props),
	tabpanel: baseStyleTabpanel
}));
var sizes$2 = {
	sm: definePartsStyle$1({ tab: {
		py: 1,
		px: 4,
		fontSize: "sm"
	} }),
	md: definePartsStyle$1({ tab: {
		fontSize: "md",
		py: 2,
		px: 4
	} }),
	lg: definePartsStyle$1({ tab: {
		fontSize: "lg",
		py: 3,
		px: 4
	} })
};
var variantLine = definePartsStyle$1((props) => {
	const { colorScheme: c$1, orientation } = props;
	const isVertical = orientation === "vertical";
	const borderProp = isVertical ? "borderStart" : "borderBottom";
	const marginProp = isVertical ? "marginStart" : "marginBottom";
	return {
		tablist: {
			[borderProp]: "2px solid",
			borderColor: "inherit"
		},
		tab: {
			[borderProp]: "2px solid",
			borderColor: "transparent",
			[marginProp]: "-2px",
			_selected: {
				[$fg$1.variable]: `colors.${c$1}.600`,
				_dark: { [$fg$1.variable]: `colors.${c$1}.300` },
				borderColor: "currentColor"
			},
			_active: {
				[$bg$2.variable]: "colors.gray.200",
				_dark: { [$bg$2.variable]: "colors.whiteAlpha.300" }
			},
			_disabled: { _active: { bg: "none" } },
			color: $fg$1.reference,
			bg: $bg$2.reference
		}
	};
});
var variantEnclosed = definePartsStyle$1((props) => {
	const { colorScheme: c$1 } = props;
	return {
		tab: {
			borderTopRadius: "md",
			border: "1px solid",
			borderColor: "transparent",
			mb: "-1px",
			[$border.variable]: "transparent",
			_selected: {
				[$fg$1.variable]: `colors.${c$1}.600`,
				[$border.variable]: `colors.white`,
				_dark: {
					[$fg$1.variable]: `colors.${c$1}.300`,
					[$border.variable]: `colors.gray.800`
				},
				borderColor: "inherit",
				borderBottomColor: $border.reference
			},
			color: $fg$1.reference
		},
		tablist: {
			mb: "-1px",
			borderBottom: "1px solid",
			borderColor: "inherit"
		}
	};
});
var variantEnclosedColored = definePartsStyle$1((props) => {
	const { colorScheme: c$1 } = props;
	return {
		tab: {
			border: "1px solid",
			borderColor: "inherit",
			[$bg$2.variable]: "colors.gray.50",
			_dark: { [$bg$2.variable]: "colors.whiteAlpha.50" },
			mb: "-1px",
			_notLast: { marginEnd: "-1px" },
			_selected: {
				[$bg$2.variable]: "colors.white",
				[$fg$1.variable]: `colors.${c$1}.600`,
				_dark: {
					[$bg$2.variable]: "colors.gray.800",
					[$fg$1.variable]: `colors.${c$1}.300`
				},
				borderColor: "inherit",
				borderTopColor: "currentColor",
				borderBottomColor: "transparent"
			},
			color: $fg$1.reference,
			bg: $bg$2.reference
		},
		tablist: {
			mb: "-1px",
			borderBottom: "1px solid",
			borderColor: "inherit"
		}
	};
});
var variantSoftRounded = definePartsStyle$1((props) => {
	const { colorScheme: c$1, theme: theme$1 } = props;
	return { tab: {
		borderRadius: "full",
		fontWeight: "semibold",
		color: "gray.600",
		_selected: {
			color: getColor(theme$1, `${c$1}.700`),
			bg: getColor(theme$1, `${c$1}.100`)
		}
	} };
});
var variantSolidRounded = definePartsStyle$1((props) => {
	const { colorScheme: c$1 } = props;
	return { tab: {
		borderRadius: "full",
		fontWeight: "semibold",
		[$fg$1.variable]: "colors.gray.600",
		_dark: { [$fg$1.variable]: "inherit" },
		_selected: {
			[$fg$1.variable]: "colors.white",
			[$bg$2.variable]: `colors.${c$1}.600`,
			_dark: {
				[$fg$1.variable]: "colors.gray.800",
				[$bg$2.variable]: `colors.${c$1}.300`
			}
		},
		color: $fg$1.reference,
		bg: $bg$2.reference
	} };
});
var variantUnstyled = definePartsStyle$1({});
var tabsTheme = defineMultiStyleConfig$1({
	baseStyle: baseStyle$2,
	sizes: sizes$2,
	variants: {
		line: variantLine,
		enclosed: variantEnclosed,
		"enclosed-colored": variantEnclosedColored,
		"soft-rounded": variantSoftRounded,
		"solid-rounded": variantSolidRounded,
		unstyled: variantUnstyled
	},
	defaultProps: {
		size: "md",
		variant: "line",
		colorScheme: "blue"
	}
});
var { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(tagAnatomy.keys);
var $bg$1 = cssVar$1("tag-bg");
var $color = cssVar$1("tag-color");
var $shadow = cssVar$1("tag-shadow");
var $minH = cssVar$1("tag-min-height");
var $minW = cssVar$1("tag-min-width");
var $fontSize = cssVar$1("tag-font-size");
var $paddingX = cssVar$1("tag-padding-inline");
var baseStyle$1 = definePartsStyle({
	container: defineStyle({
		fontWeight: "medium",
		lineHeight: 1.2,
		outline: 0,
		[$color.variable]: vars.color.reference,
		[$bg$1.variable]: vars.bg.reference,
		[$shadow.variable]: vars.shadow.reference,
		color: $color.reference,
		bg: $bg$1.reference,
		boxShadow: $shadow.reference,
		borderRadius: "md",
		minH: $minH.reference,
		minW: $minW.reference,
		fontSize: $fontSize.reference,
		px: $paddingX.reference,
		_focusVisible: { [$shadow.variable]: "shadows.outline" }
	}),
	label: defineStyle({
		lineHeight: 1.2,
		overflow: "visible"
	}),
	closeButton: defineStyle({
		fontSize: "lg",
		w: "5",
		h: "5",
		transitionProperty: "common",
		transitionDuration: "normal",
		borderRadius: "full",
		marginStart: "1.5",
		marginEnd: "-1",
		opacity: .5,
		_disabled: { opacity: .4 },
		_focusVisible: {
			boxShadow: "outline",
			bg: "rgba(0, 0, 0, 0.14)"
		},
		_hover: { opacity: .8 },
		_active: { opacity: 1 }
	})
});
var sizes$1 = {
	sm: definePartsStyle({
		container: {
			[$minH.variable]: "sizes.5",
			[$minW.variable]: "sizes.5",
			[$fontSize.variable]: "fontSizes.xs",
			[$paddingX.variable]: "space.2"
		},
		closeButton: {
			marginEnd: "-2px",
			marginStart: "0.35rem"
		}
	}),
	md: definePartsStyle({ container: {
		[$minH.variable]: "sizes.6",
		[$minW.variable]: "sizes.6",
		[$fontSize.variable]: "fontSizes.sm",
		[$paddingX.variable]: "space.2"
	} }),
	lg: definePartsStyle({ container: {
		[$minH.variable]: "sizes.8",
		[$minW.variable]: "sizes.8",
		[$fontSize.variable]: "fontSizes.md",
		[$paddingX.variable]: "space.3"
	} })
};
var tagTheme = defineMultiStyleConfig({
	variants: {
		subtle: definePartsStyle((props) => ({ container: badgeTheme.variants?.subtle(props) })),
		solid: definePartsStyle((props) => ({ container: badgeTheme.variants?.solid(props) })),
		outline: definePartsStyle((props) => ({ container: badgeTheme.variants?.outline(props) }))
	},
	baseStyle: baseStyle$1,
	sizes: sizes$1,
	defaultProps: {
		size: "md",
		variant: "subtle",
		colorScheme: "gray"
	}
});
var baseStyle = defineStyle({
	...inputTheme.baseStyle?.field,
	paddingY: "2",
	minHeight: "20",
	lineHeight: "short",
	verticalAlign: "top"
});
var variants = {
	outline: defineStyle((props) => inputTheme.variants?.outline(props).field ?? {}),
	flushed: defineStyle((props) => inputTheme.variants?.flushed(props).field ?? {}),
	filled: defineStyle((props) => inputTheme.variants?.filled(props).field ?? {}),
	unstyled: inputTheme.variants?.unstyled.field ?? {}
};
var textareaTheme = defineStyleConfig({
	baseStyle,
	sizes: {
		xs: inputTheme.sizes?.xs.field ?? {},
		sm: inputTheme.sizes?.sm.field ?? {},
		md: inputTheme.sizes?.md.field ?? {},
		lg: inputTheme.sizes?.lg.field ?? {}
	},
	variants,
	defaultProps: {
		size: "md",
		variant: "outline"
	}
});
var $bg = cssVar("tooltip-bg");
var $fg = cssVar("tooltip-fg");
var $arrowBg = cssVar("popper-arrow-bg");
var components = {
	Accordion: accordionTheme,
	Alert: alertTheme,
	Avatar: avatarTheme,
	Badge: badgeTheme,
	Breadcrumb: breadcrumbTheme,
	Button: buttonTheme,
	Checkbox: checkboxTheme,
	CloseButton: closeButtonTheme,
	Code: codeTheme,
	Container: containerTheme,
	Divider: dividerTheme,
	Drawer: drawerTheme,
	Editable: editableTheme,
	Form: formTheme,
	FormError: formErrorTheme,
	FormLabel: formLabelTheme,
	Heading: headingTheme,
	Input: inputTheme,
	Kbd: kbdTheme,
	Link: linkTheme,
	List: listTheme,
	Menu: menuTheme,
	Modal: modalTheme,
	NumberInput: numberInputTheme,
	PinInput: pinInputTheme,
	Popover: popoverTheme,
	Progress: progressTheme,
	Radio: radioTheme,
	Select: selectTheme,
	Skeleton: skeletonTheme,
	SkipLink: skipLinkTheme,
	Slider: sliderTheme,
	Spinner: spinnerTheme,
	Stat: statTheme,
	Switch: switchTheme,
	Table: tableTheme,
	Tabs: tabsTheme,
	Tag: tagTheme,
	Textarea: textareaTheme,
	Tooltip: defineStyleConfig({ baseStyle: defineStyle({
		bg: $bg.reference,
		color: $fg.reference,
		[$bg.variable]: "colors.gray.700",
		[$fg.variable]: "colors.whiteAlpha.900",
		_dark: {
			[$bg.variable]: "colors.gray.300",
			[$fg.variable]: "colors.gray.900"
		},
		[$arrowBg.variable]: $bg.reference,
		px: "2",
		py: "0.5",
		borderRadius: "sm",
		fontWeight: "medium",
		fontSize: "sm",
		boxShadow: "md",
		maxW: "xs",
		zIndex: "tooltip"
	}) }),
	Card: cardTheme,
	Stepper: stepperTheme
};
var borders$1 = {
	none: 0,
	"1px": "1px solid",
	"2px": "2px solid",
	"4px": "4px solid",
	"8px": "8px solid"
};
var breakpoints = {
	base: "0em",
	sm: "30em",
	md: "48em",
	lg: "62em",
	xl: "80em",
	"2xl": "96em"
};
var colors = {
	transparent: "transparent",
	current: "currentColor",
	black: "#000000",
	white: "#FFFFFF",
	whiteAlpha: {
		50: "rgba(255, 255, 255, 0.04)",
		100: "rgba(255, 255, 255, 0.06)",
		200: "rgba(255, 255, 255, 0.08)",
		300: "rgba(255, 255, 255, 0.16)",
		400: "rgba(255, 255, 255, 0.24)",
		500: "rgba(255, 255, 255, 0.36)",
		600: "rgba(255, 255, 255, 0.48)",
		700: "rgba(255, 255, 255, 0.64)",
		800: "rgba(255, 255, 255, 0.80)",
		900: "rgba(255, 255, 255, 0.92)"
	},
	blackAlpha: {
		50: "rgba(0, 0, 0, 0.04)",
		100: "rgba(0, 0, 0, 0.06)",
		200: "rgba(0, 0, 0, 0.08)",
		300: "rgba(0, 0, 0, 0.16)",
		400: "rgba(0, 0, 0, 0.24)",
		500: "rgba(0, 0, 0, 0.36)",
		600: "rgba(0, 0, 0, 0.48)",
		700: "rgba(0, 0, 0, 0.64)",
		800: "rgba(0, 0, 0, 0.80)",
		900: "rgba(0, 0, 0, 0.92)"
	},
	gray: {
		50: "#F7FAFC",
		100: "#EDF2F7",
		200: "#E2E8F0",
		300: "#CBD5E0",
		400: "#A0AEC0",
		500: "#718096",
		600: "#4A5568",
		700: "#2D3748",
		800: "#1A202C",
		900: "#171923"
	},
	red: {
		50: "#FFF5F5",
		100: "#FED7D7",
		200: "#FEB2B2",
		300: "#FC8181",
		400: "#F56565",
		500: "#E53E3E",
		600: "#C53030",
		700: "#9B2C2C",
		800: "#822727",
		900: "#63171B"
	},
	orange: {
		50: "#FFFAF0",
		100: "#FEEBC8",
		200: "#FBD38D",
		300: "#F6AD55",
		400: "#ED8936",
		500: "#DD6B20",
		600: "#C05621",
		700: "#9C4221",
		800: "#7B341E",
		900: "#652B19"
	},
	yellow: {
		50: "#FFFFF0",
		100: "#FEFCBF",
		200: "#FAF089",
		300: "#F6E05E",
		400: "#ECC94B",
		500: "#D69E2E",
		600: "#B7791F",
		700: "#975A16",
		800: "#744210",
		900: "#5F370E"
	},
	green: {
		50: "#F0FFF4",
		100: "#C6F6D5",
		200: "#9AE6B4",
		300: "#68D391",
		400: "#48BB78",
		500: "#38A169",
		600: "#2F855A",
		700: "#276749",
		800: "#22543D",
		900: "#1C4532"
	},
	teal: {
		50: "#E6FFFA",
		100: "#B2F5EA",
		200: "#81E6D9",
		300: "#4FD1C5",
		400: "#38B2AC",
		500: "#319795",
		600: "#2C7A7B",
		700: "#285E61",
		800: "#234E52",
		900: "#1D4044"
	},
	blue: {
		50: "#ebf8ff",
		100: "#bee3f8",
		200: "#90cdf4",
		300: "#63b3ed",
		400: "#4299e1",
		500: "#3182ce",
		600: "#2b6cb0",
		700: "#2c5282",
		800: "#2a4365",
		900: "#1A365D"
	},
	cyan: {
		50: "#EDFDFD",
		100: "#C4F1F9",
		200: "#9DECF9",
		300: "#76E4F7",
		400: "#0BC5EA",
		500: "#00B5D8",
		600: "#00A3C4",
		700: "#0987A0",
		800: "#086F83",
		900: "#065666"
	},
	purple: {
		50: "#FAF5FF",
		100: "#E9D8FD",
		200: "#D6BCFA",
		300: "#B794F4",
		400: "#9F7AEA",
		500: "#805AD5",
		600: "#6B46C1",
		700: "#553C9A",
		800: "#44337A",
		900: "#322659"
	},
	pink: {
		50: "#FFF5F7",
		100: "#FED7E2",
		200: "#FBB6CE",
		300: "#F687B3",
		400: "#ED64A6",
		500: "#D53F8C",
		600: "#B83280",
		700: "#97266D",
		800: "#702459",
		900: "#521B41"
	}
};
var radii = {
	none: "0",
	sm: "0.125rem",
	base: "0.25rem",
	md: "0.375rem",
	lg: "0.5rem",
	xl: "0.75rem",
	"2xl": "1rem",
	"3xl": "1.5rem",
	full: "9999px"
};
var shadows = {
	xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
	sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
	base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
	md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
	lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
	xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
	"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
	outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
	inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
	none: "none",
	"dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
var transition = {
	property: {
		common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
		colors: "background-color, border-color, color, fill, stroke",
		dimensions: "width, height",
		position: "left, right, top, bottom",
		background: "background-color, background-image, background-position"
	},
	easing: {
		"ease-in": "cubic-bezier(0.4, 0, 1, 1)",
		"ease-out": "cubic-bezier(0, 0, 0.2, 1)",
		"ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
	},
	duration: {
		"ultra-fast": "50ms",
		faster: "100ms",
		fast: "150ms",
		normal: "200ms",
		slow: "300ms",
		slower: "400ms",
		"ultra-slow": "500ms"
	}
};
var foundations = {
	breakpoints,
	zIndices: {
		hide: -1,
		auto: "auto",
		base: 0,
		docked: 10,
		dropdown: 1e3,
		sticky: 1100,
		banner: 1200,
		overlay: 1300,
		modal: 1400,
		popover: 1500,
		skipLink: 1600,
		toast: 1700,
		tooltip: 1800
	},
	radii,
	blur: {
		none: 0,
		sm: "4px",
		base: "8px",
		md: "12px",
		lg: "16px",
		xl: "24px",
		"2xl": "40px",
		"3xl": "64px"
	},
	colors,
	...typography,
	sizes,
	shadows,
	space: spacing,
	borders: borders$1,
	transition
};
var semanticTokens = { colors: {
	"chakra-body-text": {
		_light: "gray.800",
		_dark: "whiteAlpha.900"
	},
	"chakra-body-bg": {
		_light: "white",
		_dark: "gray.800"
	},
	"chakra-border-color": {
		_light: "gray.200",
		_dark: "whiteAlpha.300"
	},
	"chakra-inverse-text": {
		_light: "white",
		_dark: "gray.800"
	},
	"chakra-subtle-bg": {
		_light: "gray.100",
		_dark: "gray.700"
	},
	"chakra-subtle-text": {
		_light: "gray.600",
		_dark: "gray.400"
	},
	"chakra-placeholder-color": {
		_light: "gray.500",
		_dark: "whiteAlpha.400"
	}
} };
var styles = { global: {
	body: {
		fontFamily: "body",
		color: "chakra-body-text",
		bg: "chakra-body-bg",
		transitionProperty: "background-color",
		transitionDuration: "normal",
		lineHeight: "base"
	},
	"*::placeholder": { color: "chakra-placeholder-color" },
	"*, *::before, &::after": { borderColor: "chakra-border-color" }
} };
var direction = "ltr";
var config = {
	useSystemColorMode: false,
	initialColorMode: "light",
	cssVarPrefix: "chakra"
};
var theme = {
	semanticTokens,
	direction,
	...foundations,
	components,
	styles,
	config
};
({ ...foundations });
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var f$2 = require_react(), k$2 = Symbol.for("react.element"), l$2 = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n$1 = f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$3 = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function q$2(c$1, a, g$2) {
		var b$1, d$1 = {}, e$1 = null, h$2 = null;
		void 0 !== g$2 && (e$1 = "" + g$2);
		void 0 !== a.key && (e$1 = "" + a.key);
		void 0 !== a.ref && (h$2 = a.ref);
		for (b$1 in a) m$1.call(a, b$1) && !p$3.hasOwnProperty(b$1) && (d$1[b$1] = a[b$1]);
		if (c$1 && c$1.defaultProps) for (b$1 in a = c$1.defaultProps, a) void 0 === d$1[b$1] && (d$1[b$1] = a[b$1]);
		return {
			$$typeof: k$2,
			type: c$1,
			key: e$1,
			ref: h$2,
			props: d$1,
			_owner: n$1.current
		};
	}
	exports.Fragment = l$2;
	exports.jsx = q$2;
	exports.jsxs = q$2;
}));
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production_min();
}));
var isDevelopment$3 = false;
function sheetForTag(tag) {
	if (tag.sheet) return tag.sheet;
	/* istanbul ignore next */
	for (var i = 0; i < document.styleSheets.length; i++) if (document.styleSheets[i].ownerNode === tag) return document.styleSheets[i];
}
function createStyleElement(options) {
	var tag = document.createElement("style");
	tag.setAttribute("data-emotion", options.key);
	if (options.nonce !== void 0) tag.setAttribute("nonce", options.nonce);
	tag.appendChild(document.createTextNode(""));
	tag.setAttribute("data-s", "");
	return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
	function StyleSheet$1(options) {
		var _this = this;
		this._insertTag = function(tag) {
			var before;
			if (_this.tags.length === 0) if (_this.insertionPoint) before = _this.insertionPoint.nextSibling;
			else if (_this.prepend) before = _this.container.firstChild;
			else before = _this.before;
			else before = _this.tags[_this.tags.length - 1].nextSibling;
			_this.container.insertBefore(tag, before);
			_this.tags.push(tag);
		};
		this.isSpeedy = options.speedy === void 0 ? !isDevelopment$3 : options.speedy;
		this.tags = [];
		this.ctr = 0;
		this.nonce = options.nonce;
		this.key = options.key;
		this.container = options.container;
		this.prepend = options.prepend;
		this.insertionPoint = options.insertionPoint;
		this.before = null;
	}
	var _proto = StyleSheet$1.prototype;
	_proto.hydrate = function hydrate$1(nodes) {
		nodes.forEach(this._insertTag);
	};
	_proto.insert = function insert(rule) {
		if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) this._insertTag(createStyleElement(this));
		var tag = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var sheet$1 = sheetForTag(tag);
			try {
				sheet$1.insertRule(rule, sheet$1.cssRules.length);
			} catch (e$1) {}
		} else tag.appendChild(document.createTextNode(rule));
		this.ctr++;
	};
	_proto.flush = function flush$1() {
		this.tags.forEach(function(tag) {
			var _tag$parentNode;
			return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
		});
		this.tags = [];
		this.ctr = 0;
	};
	return StyleSheet$1;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash$2(value, length$1) {
	return charat(value, 0) ^ 45 ? (((length$1 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
	return value.trim();
}
function match(value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
	return value.replace(pattern, replacement);
}
function indexof(value, search) {
	return value.indexOf(search);
}
function charat(value, index$1) {
	return value.charCodeAt(index$1) | 0;
}
function substr(value, begin, end$1) {
	return value.slice(begin, end$1);
}
function strlen(value) {
	return value.length;
}
function sizeof(value) {
	return value.length;
}
function append(value, array) {
	return array.push(value), value;
}
function combine(array, callback) {
	return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root$1, parent, type, props, children, length$1) {
	return {
		value,
		root: root$1,
		parent,
		type,
		props,
		children,
		line,
		column,
		length: length$1,
		return: ""
	};
}
function copy(root$1, props) {
	return assign(node("", null, null, "", null, null, 0), root$1, { length: -root$1.length }, props);
}
function char() {
	return character;
}
function prev() {
	character = position > 0 ? charat(characters, --position) : 0;
	if (column--, character === 10) column = 1, line--;
	return character;
}
function next() {
	character = position < length ? charat(characters, position++) : 0;
	if (column++, character === 10) column = 1, line++;
	return character;
}
function peek() {
	return charat(characters, position);
}
function caret() {
	return position;
}
function slice(begin, end$1) {
	return substr(characters, begin, end$1);
}
function token(type) {
	switch (type) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function alloc(value) {
	return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
	return characters = "", value;
}
function delimit(type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
	while (character = peek()) if (character < 33) next();
	else break;
	return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index$1, count) {
	while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
	return slice(index$1, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
	while (next()) switch (character) {
		case type: return position;
		case 34:
		case 39:
			if (type !== 34 && type !== 39) delimiter(character);
			break;
		case 40:
			if (type === 41) delimiter(type);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
function commenter(type, index$1) {
	while (next()) if (type + character === 57) break;
	else if (type + character === 84 && peek() === 47) break;
	return "/*" + slice(index$1, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index$1) {
	while (!token(peek())) next();
	return slice(index$1, position);
}
function compile(value) {
	return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root$1, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index$1 = 0;
	var offset$1 = 0;
	var length$1 = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character$1 = 0;
	var type = "";
	var props = rules;
	var children = rulesets;
	var reference$1 = rule;
	var characters$1 = type;
	while (scanning) switch (previous = character$1, character$1 = next()) {
		case 40: if (previous != 108 && charat(characters$1, length$1 - 1) == 58) {
			if (indexof(characters$1 += replace(delimit(character$1), "&", "&\f"), "&\f") != -1) ampersand = -1;
			break;
		}
		case 34:
		case 39:
		case 91:
			characters$1 += delimit(character$1);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			characters$1 += whitespace(previous);
			break;
		case 92:
			characters$1 += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), root$1, parent), declarations);
					break;
				default: characters$1 += "/";
			}
			break;
		case 123 * variable: points[index$1++] = strlen(characters$1) * ampersand;
		case 125 * variable:
		case 59:
		case 0:
			switch (character$1) {
				case 0:
				case 125: scanning = 0;
				case 59 + offset$1:
					if (ampersand == -1) characters$1 = replace(characters$1, /\f/g, "");
					if (property > 0 && strlen(characters$1) - length$1) append(property > 32 ? declaration(characters$1 + ";", rule, parent, length$1 - 1) : declaration(replace(characters$1, " ", "") + ";", rule, parent, length$1 - 2), declarations);
					break;
				case 59: characters$1 += ";";
				default:
					append(reference$1 = ruleset(characters$1, root$1, parent, index$1, offset$1, rules, points, type, props = [], children = [], length$1), rulesets);
					if (character$1 === 123) if (offset$1 === 0) parse(characters$1, root$1, reference$1, reference$1, props, rulesets, length$1, points, children);
					else switch (atrule === 99 && charat(characters$1, 3) === 110 ? 100 : atrule) {
						case 100:
						case 108:
						case 109:
						case 115:
							parse(value, reference$1, reference$1, rule && append(ruleset(value, reference$1, reference$1, 0, 0, rules, points, type, rules, props = [], length$1), children), rules, children, length$1, points, rule ? props : children);
							break;
						default: parse(characters$1, reference$1, reference$1, reference$1, [""], children, 0, points, children);
					}
			}
			index$1 = offset$1 = property = 0, variable = ampersand = 1, type = characters$1 = "", length$1 = pseudo;
			break;
		case 58: length$1 = 1 + strlen(characters$1), property = previous;
		default:
			if (variable < 1) {
				if (character$1 == 123) --variable;
				else if (character$1 == 125 && variable++ == 0 && prev() == 125) continue;
			}
			switch (characters$1 += from(character$1), character$1 * variable) {
				case 38:
					ampersand = offset$1 > 0 ? 1 : (characters$1 += "\f", -1);
					break;
				case 44:
					points[index$1++] = (strlen(characters$1) - 1) * ampersand, ampersand = 1;
					break;
				case 64:
					if (peek() === 45) characters$1 += delimit(next());
					atrule = peek(), offset$1 = length$1 = strlen(type = characters$1 += identifier(caret())), character$1++;
					break;
				case 45: if (previous === 45 && strlen(characters$1) == 2) variable = 0;
			}
	}
	return rulesets;
}
function ruleset(value, root$1, parent, index$1, offset$1, rules, points, type, props, children, length$1) {
	var post = offset$1 - 1;
	var rule = offset$1 === 0 ? rules : [""];
	var size$1 = sizeof(rule);
	for (var i = 0, j = 0, k$3 = 0; i < index$1; ++i) for (var x$2 = 0, y$3 = substr(value, post + 1, post = abs(j = points[i])), z$4 = value; x$2 < size$1; ++x$2) if (z$4 = trim(j > 0 ? rule[x$2] + " " + y$3 : replace(y$3, /&\f/g, rule[x$2]))) props[k$3++] = z$4;
	return node(value, root$1, parent, offset$1 === 0 ? RULESET : type, props, children, length$1);
}
function comment(value, root$1, parent) {
	return node(value, root$1, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root$1, parent, length$1) {
	return node(value, root$1, parent, DECLARATION, substr(value, 0, length$1), substr(value, length$1 + 1, -1), length$1);
}
function serialize(children, callback) {
	var output = "";
	var length$1 = sizeof(children);
	for (var i = 0; i < length$1; i++) output += callback(children[i], i, children, callback) || "";
	return output;
}
function stringify(element, index$1, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break;
		case IMPORT:
		case DECLARATION: return element.return = element.return || element.value;
		case COMMENT: return "";
		case KEYFRAMES: return element.return = element.value + "{" + serialize(element.children, callback) + "}";
		case RULESET: element.value = element.props.join(",");
	}
	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
	var length$1 = sizeof(collection);
	return function(element, index$1, children, callback) {
		var output = "";
		for (var i = 0; i < length$1; i++) output += collection[i](element, index$1, children, callback) || "";
		return output;
	};
}
function rulesheet(callback) {
	return function(element) {
		if (!element.root) {
			if (element = element.return) callback(element);
		}
	};
}
var weakMemoize = function weakMemoize$1(func) {
	var cache$1 = /* @__PURE__ */ new WeakMap();
	return function(arg) {
		if (cache$1.has(arg)) return cache$1.get(arg);
		var ret = func(arg);
		cache$1.set(arg, ret);
		return ret;
	};
};
function memoize(fn) {
	var cache$1 = Object.create(null);
	return function(arg) {
		if (cache$1[arg] === void 0) cache$1[arg] = fn(arg);
		return cache$1[arg];
	};
}
var identifierWithPointTracking = function identifierWithPointTracking$1(begin, points, index$1) {
	var previous = 0;
	var character$1 = 0;
	while (true) {
		previous = character$1;
		character$1 = peek();
		if (previous === 38 && character$1 === 12) points[index$1] = 1;
		if (token(character$1)) break;
		next();
	}
	return slice(begin, position);
};
var toRules = function toRules$1(parsed, points) {
	var index$1 = -1;
	var character$1 = 44;
	do
		switch (token(character$1)) {
			case 0:
				if (character$1 === 38 && peek() === 12) points[index$1] = 1;
				parsed[index$1] += identifierWithPointTracking(position - 1, points, index$1);
				break;
			case 2:
				parsed[index$1] += delimit(character$1);
				break;
			case 4: if (character$1 === 44) {
				parsed[++index$1] = peek() === 58 ? "&\f" : "";
				points[index$1] = parsed[index$1].length;
				break;
			}
			default: parsed[index$1] += from(character$1);
		}
	while (character$1 = next());
	return parsed;
};
var getRules = function getRules$1(value, points) {
	return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat$1(element) {
	if (element.type !== "rule" || !element.parent || element.length < 1) return;
	var value = element.value;
	var parent = element.parent;
	var isImplicitRule = element.column === parent.column && element.line === parent.line;
	while (parent.type !== "rule") {
		parent = parent.parent;
		if (!parent) return;
	}
	if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) return;
	if (isImplicitRule) return;
	fixedElements.set(element, true);
	var points = [];
	var rules = getRules(value, points);
	var parentRules = parent.props;
	for (var i = 0, k$3 = 0; i < rules.length; i++) for (var j = 0; j < parentRules.length; j++, k$3++) element.props[k$3] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
};
var removeLabel = function removeLabel$1(element) {
	if (element.type === "decl") {
		var value = element.value;
		if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
			element["return"] = "";
			element.value = "";
		}
	}
};
function prefix(value, length$1) {
	switch (hash$2(value, length$1)) {
		case 5103: return WEBKIT + "print-" + value + value;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return WEBKIT + value + value;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
		case 6828:
		case 4268: return WEBKIT + value + MS + value + value;
		case 6165: return WEBKIT + value + MS + "flex-" + value + value;
		case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
		case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
		case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
		case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
		case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
		case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
		case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
		case 6187: return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
		case 5495:
		case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
		case 4968: return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (strlen(value) - 1 - length$1 > 6) switch (charat(value, length$1 + 1)) {
				case 109: if (charat(value, length$1 + 4) !== 45) break;
				case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length$1 + 3) == 108 ? "$3" : "$2-$3")) + value;
				case 115: return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length$1) + value : value;
			}
			break;
		case 4949: if (charat(value, length$1 + 1) !== 115) break;
		case 6444:
			switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
				case 107: return replace(value, ":", ":" + WEBKIT) + value;
				case 101: return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
			}
			break;
		case 5936:
			switch (charat(value, length$1 + 11)) {
				case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
				case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
				case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
			}
			return WEBKIT + value + MS + value + value;
	}
	return value;
}
var defaultStylisPlugins = [function prefixer(element, index$1, children, callback) {
	if (element.length > -1) {
		if (!element["return"]) switch (element.type) {
			case DECLARATION:
				element["return"] = prefix(element.value, element.length);
				break;
			case KEYFRAMES: return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
			case RULESET: if (element.length) return combine(element.props, function(value) {
				switch (match(value, /(::plac\w+|:read-\w+)/)) {
					case ":read-only":
					case ":read-write": return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
					case "::placeholder": return serialize([
						copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
						copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
						copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
					], callback);
				}
				return "";
			});
		}
	}
}];
var createCache = function createCache$1(options) {
	var key = options.key;
	if (key === "css") {
		var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(ssrStyles, function(node$1) {
			if (node$1.getAttribute("data-emotion").indexOf(" ") === -1) return;
			document.head.appendChild(node$1);
			node$1.setAttribute("data-s", "");
		});
	}
	var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
	var inserted = {};
	var container$1;
	var nodesToHydrate = [];
	container$1 = options.container || document.head;
	Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function(node$1) {
		var attrib = node$1.getAttribute("data-emotion").split(" ");
		for (var i = 1; i < attrib.length; i++) inserted[attrib[i]] = true;
		nodesToHydrate.push(node$1);
	});
	var _insert;
	var omnipresentPlugins = [compat, removeLabel];
	var currentSheet;
	var finalizingPlugins = [stringify, rulesheet(function(rule) {
		currentSheet.insert(rule);
	})];
	var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
	var stylis = function stylis$1(styles$1) {
		return serialize(compile(styles$1), serializer);
	};
	_insert = function insert(selector, serialized, sheet$1, shouldCache) {
		currentSheet = sheet$1;
		stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
		if (shouldCache) cache$1.inserted[serialized.name] = true;
	};
	var cache$1 = {
		key,
		sheet: new StyleSheet({
			key,
			container: container$1,
			nonce: options.nonce,
			speedy: options.speedy,
			prepend: options.prepend,
			insertionPoint: options.insertionPoint
		}),
		nonce: options.nonce,
		inserted,
		registered: {},
		insert: _insert
	};
	cache$1.sheet.hydrate(nodesToHydrate);
	return cache$1;
};
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n$3) {
		for (var e$1 = 1; e$1 < arguments.length; e$1++) {
			var t$4 = arguments[e$1];
			for (var r$4 in t$4) ({}).hasOwnProperty.call(t$4, r$4) && (n$3[r$4] = t$4[r$4]);
		}
		return n$3;
	}, _extends.apply(null, arguments);
}
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f$1 = b ? Symbol.for("react.strict_mode") : 60108, g$1 = b ? Symbol.for("react.profiler") : 60114, h$1 = b ? Symbol.for("react.provider") : 60109, k$1 = b ? Symbol.for("react.context") : 60110, l$1 = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p$2 = b ? Symbol.for("react.suspense") : 60113, q$1 = b ? Symbol.for("react.suspense_list") : 60120, r$1 = b ? Symbol.for("react.memo") : 60115, t$1 = b ? Symbol.for("react.lazy") : 60116, v$2 = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y$1 = b ? Symbol.for("react.scope") : 60119;
	function z$2(a) {
		if ("object" === typeof a && null !== a) {
			var u$2 = a.$$typeof;
			switch (u$2) {
				case c: switch (a = a.type, a) {
					case l$1:
					case m:
					case e:
					case g$1:
					case f$1:
					case p$2: return a;
					default: switch (a = a && a.$$typeof, a) {
						case k$1:
						case n:
						case t$1:
						case r$1:
						case h$1: return a;
						default: return u$2;
					}
				}
				case d: return u$2;
			}
		}
	}
	function A$2(a) {
		return z$2(a) === m;
	}
	exports.AsyncMode = l$1;
	exports.ConcurrentMode = m;
	exports.ContextConsumer = k$1;
	exports.ContextProvider = h$1;
	exports.Element = c;
	exports.ForwardRef = n;
	exports.Fragment = e;
	exports.Lazy = t$1;
	exports.Memo = r$1;
	exports.Portal = d;
	exports.Profiler = g$1;
	exports.StrictMode = f$1;
	exports.Suspense = p$2;
	exports.isAsyncMode = function(a) {
		return A$2(a) || z$2(a) === l$1;
	};
	exports.isConcurrentMode = A$2;
	exports.isContextConsumer = function(a) {
		return z$2(a) === k$1;
	};
	exports.isContextProvider = function(a) {
		return z$2(a) === h$1;
	};
	exports.isElement = function(a) {
		return "object" === typeof a && null !== a && a.$$typeof === c;
	};
	exports.isForwardRef = function(a) {
		return z$2(a) === n;
	};
	exports.isFragment = function(a) {
		return z$2(a) === e;
	};
	exports.isLazy = function(a) {
		return z$2(a) === t$1;
	};
	exports.isMemo = function(a) {
		return z$2(a) === r$1;
	};
	exports.isPortal = function(a) {
		return z$2(a) === d;
	};
	exports.isProfiler = function(a) {
		return z$2(a) === g$1;
	};
	exports.isStrictMode = function(a) {
		return z$2(a) === f$1;
	};
	exports.isSuspense = function(a) {
		return z$2(a) === p$2;
	};
	exports.isValidElementType = function(a) {
		return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g$1 || a === f$1 || a === p$2 || a === q$1 || "object" === typeof a && null !== a && (a.$$typeof === t$1 || a.$$typeof === r$1 || a.$$typeof === h$1 || a.$$typeof === k$1 || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y$1 || a.$$typeof === v$2);
	};
	exports.typeOf = z$2;
}));
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_production_min();
}));
var require_hoist_non_react_statics_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var reactIs = require_react_is();
	var REACT_STATICS = {
		childContextTypes: true,
		contextType: true,
		contextTypes: true,
		defaultProps: true,
		displayName: true,
		getDefaultProps: true,
		getDerivedStateFromError: true,
		getDerivedStateFromProps: true,
		mixins: true,
		propTypes: true,
		type: true
	};
	var KNOWN_STATICS = {
		name: true,
		length: true,
		prototype: true,
		caller: true,
		callee: true,
		arguments: true,
		arity: true
	};
	var FORWARD_REF_STATICS = {
		"$$typeof": true,
		render: true,
		defaultProps: true,
		displayName: true,
		propTypes: true
	};
	var MEMO_STATICS = {
		"$$typeof": true,
		compare: true,
		defaultProps: true,
		displayName: true,
		propTypes: true,
		type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
	function getStatics(component) {
		if (reactIs.isMemo(component)) return MEMO_STATICS;
		return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
	}
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
		if (typeof sourceComponent !== "string") {
			if (objectPrototype) {
				var inheritedComponent = getPrototypeOf(sourceComponent);
				if (inheritedComponent && inheritedComponent !== objectPrototype) hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
			}
			var keys$1 = getOwnPropertyNames(sourceComponent);
			if (getOwnPropertySymbols) keys$1 = keys$1.concat(getOwnPropertySymbols(sourceComponent));
			var targetStatics = getStatics(targetComponent);
			var sourceStatics = getStatics(sourceComponent);
			for (var i = 0; i < keys$1.length; ++i) {
				var key = keys$1[i];
				if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
					var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
					try {
						defineProperty(targetComponent, key, descriptor);
					} catch (e$1) {}
				}
			}
		}
		return targetComponent;
	}
	module.exports = hoistNonReactStatics;
}));
var isBrowser$2 = true;
function getRegisteredStyles$1(registered, registeredStyles, classNames$1) {
	var rawClassName = "";
	classNames$1.split(" ").forEach(function(className) {
		if (registered[className] !== void 0) registeredStyles.push(registered[className] + ";");
		else if (className) rawClassName += className + " ";
	});
	return rawClassName;
}
var registerStyles = function registerStyles$1(cache$1, serialized, isStringTag) {
	var className = cache$1.key + "-" + serialized.name;
	if ((isStringTag === false || isBrowser$2 === false) && cache$1.registered[className] === void 0) cache$1.registered[className] = serialized.styles;
};
var insertStyles = function insertStyles$1(cache$1, serialized, isStringTag) {
	registerStyles(cache$1, serialized, isStringTag);
	var className = cache$1.key + "-" + serialized.name;
	if (cache$1.inserted[serialized.name] === void 0) {
		var current = serialized;
		do {
			cache$1.insert(serialized === current ? "." + className : "", current, cache$1.sheet, true);
			current = current.next;
		} while (current !== void 0);
	}
};
function murmur2(str) {
	var h$2 = 0;
	var k$3, i = 0, len = str.length;
	for (; len >= 4; ++i, len -= 4) {
		k$3 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
		k$3 = (k$3 & 65535) * 1540483477 + ((k$3 >>> 16) * 59797 << 16);
		k$3 ^= k$3 >>> 24;
		h$2 = (k$3 & 65535) * 1540483477 + ((k$3 >>> 16) * 59797 << 16) ^ (h$2 & 65535) * 1540483477 + ((h$2 >>> 16) * 59797 << 16);
	}
	switch (len) {
		case 3: h$2 ^= (str.charCodeAt(i + 2) & 255) << 16;
		case 2: h$2 ^= (str.charCodeAt(i + 1) & 255) << 8;
		case 1:
			h$2 ^= str.charCodeAt(i) & 255;
			h$2 = (h$2 & 65535) * 1540483477 + ((h$2 >>> 16) * 59797 << 16);
	}
	h$2 ^= h$2 >>> 13;
	h$2 = (h$2 & 65535) * 1540483477 + ((h$2 >>> 16) * 59797 << 16);
	return ((h$2 ^ h$2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
};
var isDevelopment$2 = false;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty$1(property) {
	return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue$1(value) {
	return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
	return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue$1(key, value) {
	switch (key) {
		case "animation":
		case "animationName": if (typeof value === "string") return value.replace(animationRegex, function(match$1, p1, p2) {
			cursor = {
				name: p1,
				styles: p2,
				next: cursor
			};
			return p1;
		});
	}
	if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) return value + "px";
	return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
	if (interpolation == null) return "";
	var componentSelector = interpolation;
	if (componentSelector.__emotion_styles !== void 0) return componentSelector;
	switch (typeof interpolation) {
		case "boolean": return "";
		case "object":
			var keyframes$3 = interpolation;
			if (keyframes$3.anim === 1) {
				cursor = {
					name: keyframes$3.name,
					styles: keyframes$3.styles,
					next: cursor
				};
				return keyframes$3.name;
			}
			var serializedStyles = interpolation;
			if (serializedStyles.styles !== void 0) {
				var next$1 = serializedStyles.next;
				if (next$1 !== void 0) while (next$1 !== void 0) {
					cursor = {
						name: next$1.name,
						styles: next$1.styles,
						next: cursor
					};
					next$1 = next$1.next;
				}
				return serializedStyles.styles + ";";
			}
			return createStringFromObject(mergedProps, registered, interpolation);
		case "function":
			if (mergedProps !== void 0) {
				var previousCursor = cursor;
				var result = interpolation(mergedProps);
				cursor = previousCursor;
				return handleInterpolation(mergedProps, registered, result);
			}
			break;
	}
	var asString = interpolation;
	if (registered == null) return asString;
	var cached = registered[asString];
	return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
	var string = "";
	if (Array.isArray(obj)) for (var i = 0; i < obj.length; i++) string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
	else for (var key in obj) {
		var value = obj[key];
		if (typeof value !== "object") {
			var asString = value;
			if (registered != null && registered[asString] !== void 0) string += key + "{" + registered[asString] + "}";
			else if (isProcessableValue(asString)) string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
		} else {
			if (key === "NO_COMPONENT_SELECTOR" && isDevelopment$2) throw new Error(noComponentSelectorMessage);
			if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
				for (var _i = 0; _i < value.length; _i++) if (isProcessableValue(value[_i])) string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
			} else {
				var interpolated = handleInterpolation(mergedProps, registered, value);
				switch (key) {
					case "animation":
					case "animationName":
						string += processStyleName(key) + ":" + interpolated + ";";
						break;
					default: string += key + "{" + interpolated + "}";
				}
			}
		}
	}
	return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
	if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) return args[0];
	var stringMode = true;
	var styles$1 = "";
	cursor = void 0;
	var strings = args[0];
	if (strings == null || strings.raw === void 0) {
		stringMode = false;
		styles$1 += handleInterpolation(mergedProps, registered, strings);
	} else styles$1 += strings[0];
	for (var i = 1; i < args.length; i++) {
		styles$1 += handleInterpolation(mergedProps, registered, args[i]);
		if (stringMode) styles$1 += strings[i];
	}
	labelPattern.lastIndex = 0;
	var identifierName = "";
	var match$1;
	while ((match$1 = labelPattern.exec(styles$1)) !== null) identifierName += "-" + match$1[1];
	return {
		name: murmur2(styles$1) + identifierName,
		styles: styles$1,
		next: cursor
	};
}
var syncFallback = function syncFallback$1(create) {
	return create();
};
var useInsertionEffect$2 = import_react.useInsertionEffect ? import_react.useInsertionEffect : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect$2 || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect$2 || import_react.useLayoutEffect;
var EmotionCacheContext = /* @__PURE__ */ import_react.createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({ key: "css" }) : null);
EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
	return (0, import_react.useContext)(EmotionCacheContext);
};
var withEmotionCache = function withEmotionCache$1(func) {
	return /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
		return func(props, (0, import_react.useContext)(EmotionCacheContext), ref);
	});
};
var ThemeContext = /* @__PURE__ */ import_react.createContext({});
var getTheme$1 = function getTheme$2(outerTheme, theme$1) {
	if (typeof theme$1 === "function") return theme$1(outerTheme);
	return _extends({}, outerTheme, theme$1);
};
var createCacheWithTheme = /* @__PURE__ */ weakMemoize(function(outerTheme) {
	return weakMemoize(function(theme$1) {
		return getTheme$1(outerTheme, theme$1);
	});
});
var ThemeProvider$1 = function ThemeProvider$2(props) {
	var theme$1 = import_react.useContext(ThemeContext);
	if (props.theme !== theme$1) theme$1 = createCacheWithTheme(theme$1)(props.theme);
	return /* @__PURE__ */ import_react.createElement(ThemeContext.Provider, { value: theme$1 }, props.children);
};
var hasOwn = {}.hasOwnProperty;
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps$1(type, props) {
	var newProps = {};
	for (var _key in props) if (hasOwn.call(props, _key)) newProps[_key] = props[_key];
	newProps[typePropName] = type;
	return newProps;
};
var Insertion$1 = function Insertion$2(_ref) {
	var cache$1 = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
	registerStyles(cache$1, serialized, isStringTag);
	useInsertionEffectAlwaysWithSyncFallback(function() {
		return insertStyles(cache$1, serialized, isStringTag);
	});
	return null;
};
var Emotion$1 = /* @__PURE__ */ withEmotionCache(function(props, cache$1, ref) {
	var cssProp = props.css;
	if (typeof cssProp === "string" && cache$1.registered[cssProp] !== void 0) cssProp = cache$1.registered[cssProp];
	var WrappedComponent = props[typePropName];
	var registeredStyles = [cssProp];
	var className = "";
	if (typeof props.className === "string") className = getRegisteredStyles$1(cache$1.registered, registeredStyles, props.className);
	else if (props.className != null) className = props.className + " ";
	var serialized = serializeStyles(registeredStyles, void 0, import_react.useContext(ThemeContext));
	className += cache$1.key + "-" + serialized.name;
	var newProps = {};
	for (var _key2 in props) if (hasOwn.call(props, _key2) && _key2 !== "css" && _key2 !== typePropName && true) newProps[_key2] = props[_key2];
	newProps.className = className;
	if (ref) newProps.ref = ref;
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Insertion$1, {
		cache: cache$1,
		serialized,
		isStringTag: typeof WrappedComponent === "string"
	}), /* @__PURE__ */ import_react.createElement(WrappedComponent, newProps));
});
require_hoist_non_react_statics_cjs();
var jsx$42 = function jsx$43(type, props) {
	var args = arguments;
	if (props == null || !hasOwn.call(props, "css")) return import_react.createElement.apply(void 0, args);
	var argsLength = args.length;
	var createElementArgArray = new Array(argsLength);
	createElementArgArray[0] = Emotion$1;
	createElementArgArray[1] = createEmotionProps(type, props);
	for (var i = 2; i < argsLength; i++) createElementArgArray[i] = args[i];
	return import_react.createElement.apply(null, createElementArgArray);
};
(function(_jsx) {
	var JSX;
	(function(_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx$42 || (jsx$42 = {}));
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache$1) {
	var styles$1 = props.styles;
	var serialized = serializeStyles([styles$1], void 0, import_react.useContext(ThemeContext));
	var sheetRef = import_react.useRef();
	useInsertionEffectWithLayoutFallback(function() {
		var key = cache$1.key + "-global";
		var sheet$1 = new cache$1.sheet.constructor({
			key,
			nonce: cache$1.sheet.nonce,
			container: cache$1.sheet.container,
			speedy: cache$1.sheet.isSpeedy
		});
		var rehydrating = false;
		var node$1 = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");
		if (cache$1.sheet.tags.length) sheet$1.before = cache$1.sheet.tags[0];
		if (node$1 !== null) {
			rehydrating = true;
			node$1.setAttribute("data-emotion", key);
			sheet$1.hydrate([node$1]);
		}
		sheetRef.current = [sheet$1, rehydrating];
		return function() {
			sheet$1.flush();
		};
	}, [cache$1]);
	useInsertionEffectWithLayoutFallback(function() {
		var sheetRefCurrent = sheetRef.current;
		var sheet$1 = sheetRefCurrent[0];
		if (sheetRefCurrent[1]) {
			sheetRefCurrent[1] = false;
			return;
		}
		if (serialized.next !== void 0) insertStyles(cache$1, serialized.next, true);
		if (sheet$1.tags.length) {
			sheet$1.before = sheet$1.tags[sheet$1.tags.length - 1].nextElementSibling;
			sheet$1.flush();
		}
		cache$1.insert("", serialized, sheet$1, false);
	}, [cache$1, serialized.name]);
	return null;
});
function css$3() {
	for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	return serializeStyles(args);
}
function keyframes$1() {
	var insertable = css$3.apply(void 0, arguments);
	var name = "animation-" + insertable.name;
	return {
		name,
		styles: "@keyframes " + name + "{" + insertable.styles + "}",
		anim: 1,
		toString: function toString() {
			return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
		}
	};
}
var ColorModeContext = (0, import_react.createContext)({});
ColorModeContext.displayName = "ColorModeContext";
function useColorMode() {
	const context = (0, import_react.useContext)(ColorModeContext);
	if (context === void 0) throw new Error("useColorMode must be used within a ColorModeProvider");
	return context;
}
var classNames = {
	light: "chakra-ui-light",
	dark: "chakra-ui-dark"
};
function getColorModeUtils(options = {}) {
	const { preventTransition = true, nonce } = options;
	const utils = {
		setDataset: (value) => {
			const cleanup = preventTransition ? utils.preventTransition() : void 0;
			document.documentElement.dataset.theme = value;
			document.documentElement.style.colorScheme = value;
			cleanup?.();
		},
		setClassName(dark) {
			document.body.classList.add(dark ? classNames.dark : classNames.light);
			document.body.classList.remove(dark ? classNames.light : classNames.dark);
		},
		query() {
			return window.matchMedia("(prefers-color-scheme: dark)");
		},
		getSystemTheme(fallback) {
			return utils.query().matches ?? fallback === "dark" ? "dark" : "light";
		},
		addListener(fn) {
			const mql = utils.query();
			const listener = (e$1) => {
				fn(e$1.matches ? "dark" : "light");
			};
			if (typeof mql.addListener === "function") mql.addListener(listener);
			else mql.addEventListener("change", listener);
			return () => {
				if (typeof mql.removeListener === "function") mql.removeListener(listener);
				else mql.removeEventListener("change", listener);
			};
		},
		preventTransition() {
			const css$4 = document.createElement("style");
			css$4.appendChild(document.createTextNode(`*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`));
			if (nonce !== void 0) css$4.nonce = nonce;
			document.head.appendChild(css$4);
			return () => {
				window.getComputedStyle(document.body);
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						document.head.removeChild(css$4);
					});
				});
			};
		}
	};
	return utils;
}
var STORAGE_KEY = "chakra-ui-color-mode";
function createLocalStorageManager(key) {
	return {
		ssr: false,
		type: "localStorage",
		get(init) {
			if (!globalThis?.document) return init;
			let value;
			try {
				value = localStorage.getItem(key) || init;
			} catch (e$1) {}
			return value || init;
		},
		set(value) {
			try {
				localStorage.setItem(key, value);
			} catch (e$1) {}
		}
	};
}
var localStorageManager = createLocalStorageManager(STORAGE_KEY);
function parseCookie(cookie, key) {
	return cookie.match(/* @__PURE__ */ new RegExp(`(^| )${key}=([^;]+)`))?.[2];
}
function createCookieStorageManager(key, cookie) {
	return {
		ssr: !!cookie,
		type: "cookie",
		get(init) {
			if (cookie) return parseCookie(cookie, key);
			if (!globalThis?.document) return init;
			return parseCookie(document.cookie, key) || init;
		},
		set(value) {
			document.cookie = `${key}=${value}; max-age=31536000; path=/`;
		}
	};
}
createCookieStorageManager(STORAGE_KEY);
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
var noop$1 = () => {};
var useSafeLayoutEffect$2 = isBrowser$1() ? import_react.useLayoutEffect : import_react.useEffect;
function getTheme(manager, fallback) {
	return manager.type === "cookie" && manager.ssr ? manager.get(fallback) : fallback;
}
var ColorModeProvider = function ColorModeProvider2(props) {
	const { value, children, options: { useSystemColorMode, initialColorMode, disableTransitionOnChange } = {}, colorModeManager = localStorageManager } = props;
	const cache$1 = __unsafe_useEmotionCache();
	const defaultColorMode = initialColorMode === "dark" ? "dark" : "light";
	const [colorMode, rawSetColorMode] = (0, import_react.useState)(() => getTheme(colorModeManager, defaultColorMode));
	const [resolvedColorMode, setResolvedColorMode] = (0, import_react.useState)(() => getTheme(colorModeManager));
	const { getSystemTheme, setClassName, setDataset, addListener } = (0, import_react.useMemo)(() => getColorModeUtils({
		preventTransition: disableTransitionOnChange,
		nonce: cache$1?.nonce
	}), [disableTransitionOnChange, cache$1?.nonce]);
	const resolvedValue = initialColorMode === "system" && !colorMode ? resolvedColorMode : colorMode;
	const setColorMode = (0, import_react.useCallback)((value2) => {
		const resolved = value2 === "system" ? getSystemTheme() : value2;
		rawSetColorMode(resolved);
		setClassName(resolved === "dark");
		setDataset(resolved);
		colorModeManager.set(resolved);
	}, [
		colorModeManager,
		getSystemTheme,
		setClassName,
		setDataset
	]);
	useSafeLayoutEffect$2(() => {
		if (initialColorMode === "system") setResolvedColorMode(getSystemTheme());
	}, []);
	(0, import_react.useEffect)(() => {
		const managerValue = colorModeManager.get();
		if (managerValue) {
			setColorMode(managerValue);
			return;
		}
		if (initialColorMode === "system") {
			setColorMode("system");
			return;
		}
		setColorMode(defaultColorMode);
	}, [
		colorModeManager,
		defaultColorMode,
		initialColorMode,
		setColorMode
	]);
	const toggleColorMode = (0, import_react.useCallback)(() => {
		setColorMode(resolvedValue === "dark" ? "light" : "dark");
	}, [resolvedValue, setColorMode]);
	(0, import_react.useEffect)(() => {
		if (!useSystemColorMode) return;
		return addListener(setColorMode);
	}, [
		useSystemColorMode,
		addListener,
		setColorMode
	]);
	const context = (0, import_react.useMemo)(() => ({
		colorMode: value ?? resolvedValue,
		toggleColorMode: value ? noop$1 : toggleColorMode,
		setColorMode: value ? noop$1 : setColorMode,
		forced: value !== void 0
	}), [
		resolvedValue,
		toggleColorMode,
		setColorMode,
		value
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorModeContext.Provider, {
		value: context,
		children
	});
};
ColorModeProvider.displayName = "ColorModeProvider";
function DarkMode(props) {
	const context = (0, import_react.useMemo)(() => ({
		colorMode: "dark",
		toggleColorMode: noop$1,
		setColorMode: noop$1,
		forced: true
	}), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorModeContext.Provider, {
		value: context,
		...props
	});
}
DarkMode.displayName = "DarkMode";
function LightMode(props) {
	const context = (0, import_react.useMemo)(() => ({
		colorMode: "light",
		toggleColorMode: noop$1,
		setColorMode: noop$1,
		forced: true
	}), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorModeContext.Provider, {
		value: context,
		...props
	});
}
LightMode.displayName = "LightMode";
var css$2 = String.raw;
var vhPolyfill = css$2`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`;
var CSSPolyfill = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Global, { styles: vhPolyfill });
var CSSReset = ({ scope = "" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Global, { styles: css$2`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${scope} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${scope} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${scope} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${scope} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${scope} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${scope} :where(b, strong) {
        font-weight: bold;
      }

      ${scope} small {
        font-size: 80%;
      }

      ${scope} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${scope} sub {
        bottom: -0.25em;
      }

      ${scope} sup {
        top: -0.5em;
      }

      ${scope} img {
        border-style: none;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${scope} :where(button, input) {
        overflow: visible;
      }

      ${scope} :where(button, select) {
        text-transform: none;
      }

      ${scope} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${scope} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${scope} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${scope} progress {
        vertical-align: baseline;
      }

      ${scope} textarea {
        overflow: auto;
      }

      ${scope} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${scope} input[type="number"]::-webkit-inner-spin-button,
      ${scope} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${scope} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${scope} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${scope} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${scope} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${scope} details {
        display: block;
      }

      ${scope} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${scope} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${scope} button {
        background: transparent;
        padding: 0;
      }

      ${scope} fieldset {
        margin: 0;
        padding: 0;
      }

      ${scope} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${scope} textarea {
        resize: vertical;
      }

      ${scope} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${scope} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${scope} table {
        border-collapse: collapse;
      }

      ${scope} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${scope} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${scope} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${scope} select::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
    ` });
function ThemeProvider(props) {
	const { cssVarsRoot, theme: theme$1, children } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider$1, {
		theme: (0, import_react.useMemo)(() => toCSSVar(theme$1), [theme$1]),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CSSVars, { root: cssVarsRoot }), children]
	});
}
function CSSVars({ root: root$1 = ":host, :root" }) {
	const selector = [root$1, `[data-theme]`].join(",");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Global, { styles: (theme$1) => ({ [selector]: theme$1.__cssVars }) });
}
var [StylesProvider, useStyles] = createContext({
	name: "StylesContext",
	errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function GlobalStyle() {
	const { colorMode } = useColorMode();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Global, { styles: (theme$1) => {
		const globalStyles = runIfFn(memoizedGet(theme$1, "styles.global"), {
			theme: theme$1,
			colorMode
		});
		if (!globalStyles) return void 0;
		return css$1(globalStyles)(theme$1);
	} });
}
var [PortalManagerContextProvider, usePortalManager] = createContext({
	strict: false,
	name: "PortalManagerContext"
});
function PortalManager(props) {
	const { children, zIndex } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalManagerContextProvider, {
		value: { zIndex },
		children
	});
}
PortalManager.displayName = "PortalManager";
var EnvironmentContext = (0, import_react.createContext)({
	getDocument() {
		return document;
	},
	getWindow() {
		return window;
	}
});
EnvironmentContext.displayName = "EnvironmentContext";
function EnvironmentProvider(props) {
	const { children, environment: environmentProp, disabled } = props;
	const ref = (0, import_react.useRef)(null);
	const context = (0, import_react.useMemo)(() => {
		if (environmentProp) return environmentProp;
		return {
			getDocument: () => ref.current?.ownerDocument ?? document,
			getWindow: () => ref.current?.ownerDocument.defaultView ?? window
		};
	}, [environmentProp]);
	const showSpan = !disabled || !environmentProp;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EnvironmentContext.Provider, {
		value: context,
		children: [children, showSpan && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			id: "__chakra_env",
			hidden: true,
			ref
		})]
	});
}
EnvironmentProvider.displayName = "EnvironmentProvider";
var Provider = (props) => {
	const { children, colorModeManager, portalZIndex, resetScope, resetCSS = true, theme: theme$1 = {}, environment, cssVarsRoot, disableEnvironment, disableGlobalStyle } = props;
	const _children = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvironmentProvider, {
		environment,
		disabled: disableEnvironment,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, {
		theme: theme$1,
		cssVarsRoot,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ColorModeProvider, {
			colorModeManager,
			options: theme$1.config,
			children: [
				resetCSS ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CSSReset, { scope: resetScope }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CSSPolyfill, {}),
				!disableGlobalStyle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalStyle, {}),
				portalZIndex ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalManager, {
					zIndex: portalZIndex,
					children: _children
				}) : _children
			]
		})
	});
};
var MotionConfigContext = (0, import_react.createContext)({
	transformPagePoint: (p$5) => p$5,
	isStatic: false,
	reducedMotion: "never"
});
var MotionContext = (0, import_react.createContext)({});
var PresenceContext = (0, import_react.createContext)(null);
var isBrowser = typeof document !== "undefined";
var useIsomorphicLayoutEffect = isBrowser ? import_react.useLayoutEffect : import_react.useEffect;
var LazyContext = (0, import_react.createContext)({ strict: false });
var camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
var optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId");
function useVisualElement(Component, visualState, props, createVisualElement) {
	const { visualElement: parent } = (0, import_react.useContext)(MotionContext);
	const lazyContext = (0, import_react.useContext)(LazyContext);
	const presenceContext = (0, import_react.useContext)(PresenceContext);
	const reducedMotionConfig = (0, import_react.useContext)(MotionConfigContext).reducedMotion;
	const visualElementRef = (0, import_react.useRef)();
	createVisualElement = createVisualElement || lazyContext.renderer;
	if (!visualElementRef.current && createVisualElement) visualElementRef.current = createVisualElement(Component, {
		visualState,
		parent,
		props,
		presenceContext,
		blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
		reducedMotionConfig
	});
	const visualElement = visualElementRef.current;
	(0, import_react.useInsertionEffect)(() => {
		visualElement && visualElement.update(props, presenceContext);
	});
	const wantsHandoff = (0, import_react.useRef)(Boolean(props[optimizedAppearDataAttribute] && !window.HandoffComplete));
	useIsomorphicLayoutEffect(() => {
		if (!visualElement) return;
		visualElement.render();
		if (wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
	});
	(0, import_react.useEffect)(() => {
		if (!visualElement) return;
		visualElement.updateFeatures();
		if (!wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
		if (wantsHandoff.current) {
			wantsHandoff.current = false;
			window.HandoffComplete = true;
		}
	});
	return visualElement;
}
function isRefObject(ref) {
	return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
function useMotionRef(visualState, visualElement, externalRef) {
	return (0, import_react.useCallback)((instance) => {
		instance && visualState.mount && visualState.mount(instance);
		if (visualElement) instance ? visualElement.mount(instance) : visualElement.unmount();
		if (externalRef) {
			if (typeof externalRef === "function") externalRef(instance);
			else if (isRefObject(externalRef)) externalRef.current = instance;
		}
	}, [visualElement]);
}
function isVariantLabel(v$4) {
	return typeof v$4 === "string" || Array.isArray(v$4);
}
function isAnimationControls(v$4) {
	return v$4 !== null && typeof v$4 === "object" && typeof v$4.start === "function";
}
var variantPriorityOrder = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
];
var variantProps = ["initial", ...variantPriorityOrder];
function isControllingVariants(props) {
	return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
	return Boolean(isControllingVariants(props) || props.variants);
}
function getCurrentTreeVariants(props, context) {
	if (isControllingVariants(props)) {
		const { initial, animate } = props;
		return {
			initial: initial === false || isVariantLabel(initial) ? initial : void 0,
			animate: isVariantLabel(animate) ? animate : void 0
		};
	}
	return props.inherit !== false ? context : {};
}
function useCreateMotionContext(props) {
	const { initial, animate } = getCurrentTreeVariants(props, (0, import_react.useContext)(MotionContext));
	return (0, import_react.useMemo)(() => ({
		initial,
		animate
	}), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
	return Array.isArray(prop) ? prop.join(" ") : prop;
}
var featureProps = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
};
var featureDefinitions = {};
for (const key in featureProps) featureDefinitions[key] = { isEnabled: (props) => featureProps[key].some((name) => !!props[name]) };
function loadFeatures(features) {
	for (const key in features) featureDefinitions[key] = {
		...featureDefinitions[key],
		...features[key]
	};
}
var LayoutGroupContext = (0, import_react.createContext)({});
var SwitchLayoutGroupContext = (0, import_react.createContext)({});
var motionComponentSymbol = Symbol.for("motionComponentSymbol");
function createMotionComponent({ preloadedFeatures: preloadedFeatures$1, createVisualElement, useRender, useVisualState, Component }) {
	preloadedFeatures$1 && loadFeatures(preloadedFeatures$1);
	function MotionComponent(props, externalRef) {
		let MeasureLayout$1;
		const configAndProps = {
			...(0, import_react.useContext)(MotionConfigContext),
			...props,
			layoutId: useLayoutId(props)
		};
		const { isStatic } = configAndProps;
		const context = useCreateMotionContext(props);
		const visualState = useVisualState(props, isStatic);
		if (!isStatic && isBrowser) {
			context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement);
			const initialLayoutGroupConfig = (0, import_react.useContext)(SwitchLayoutGroupContext);
			const isStrict = (0, import_react.useContext)(LazyContext).strict;
			if (context.visualElement) MeasureLayout$1 = context.visualElement.loadFeatures(configAndProps, isStrict, preloadedFeatures$1, initialLayoutGroupConfig);
		}
		return import_react.createElement(MotionContext.Provider, { value: context }, MeasureLayout$1 && context.visualElement ? import_react.createElement(MeasureLayout$1, {
			visualElement: context.visualElement,
			...configAndProps
		}) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement));
	}
	const ForwardRefComponent = (0, import_react.forwardRef)(MotionComponent);
	ForwardRefComponent[motionComponentSymbol] = Component;
	return ForwardRefComponent;
}
function useLayoutId({ layoutId }) {
	const layoutGroupId = (0, import_react.useContext)(LayoutGroupContext).id;
	return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function createMotionProxy(createConfig) {
	function custom(Component, customMotionComponentConfig = {}) {
		return createMotionComponent(createConfig(Component, customMotionComponentConfig));
	}
	if (typeof Proxy === "undefined") return custom;
	const componentCache = /* @__PURE__ */ new Map();
	return new Proxy(custom, { get: (_target, key) => {
		if (!componentCache.has(key)) componentCache.set(key, custom(key));
		return componentCache.get(key);
	} });
}
var lowercaseSVGElements = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
function isSVGComponent(Component) {
	if (typeof Component !== "string" || Component.includes("-")) return false;
	else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/.test(Component)) return true;
	return false;
}
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
	Object.assign(scaleCorrectors, correctors);
}
var transformPropOrder = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
];
var transformProps = new Set(transformPropOrder);
function isForcedMotionValue(key, { layout: layout$2, layoutId }) {
	return transformProps.has(key) || key.startsWith("origin") || (layout$2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
var isMotionValue = (value) => Boolean(value && value.getVelocity);
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
function buildTransform(transform$1, { enableHardwareAcceleration = true, allowTransformNone = true }, transformIsDefault, transformTemplate$1) {
	let transformString = "";
	for (let i = 0; i < numTransforms; i++) {
		const key = transformPropOrder[i];
		if (transform$1[key] !== void 0) {
			const transformName = translateAlias[key] || key;
			transformString += `${transformName}(${transform$1[key]}) `;
		}
	}
	if (enableHardwareAcceleration && !transform$1.z) transformString += "translateZ(0)";
	transformString = transformString.trim();
	if (transformTemplate$1) transformString = transformTemplate$1(transform$1, transformIsDefault ? "" : transformString);
	else if (allowTransformNone && transformIsDefault) transformString = "none";
	return transformString;
}
var checkStringStartsWith = (token$1) => (key) => typeof key === "string" && key.startsWith(token$1);
var isCSSVariableName = checkStringStartsWith("--");
var isCSSVariableToken = checkStringStartsWith("var(--");
var cssVariableRegex = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
var getValueAsType = (value, type) => {
	return type && typeof value === "number" ? type.transform(value) : value;
};
var clamp = (min$1, max$1, v$4) => Math.min(Math.max(v$4, min$1), max$1);
var number = {
	test: (v$4) => typeof v$4 === "number",
	parse: parseFloat,
	transform: (v$4) => v$4
};
var alpha = {
	...number,
	transform: (v$4) => clamp(0, 1, v$4)
};
var scale$1 = {
	...number,
	default: 1
};
var sanitize = (v$4) => Math.round(v$4 * 1e5) / 1e5;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v$4) {
	return typeof v$4 === "string";
}
var createUnitType = (unit) => ({
	test: (v$4) => isString(v$4) && v$4.endsWith(unit) && v$4.split(" ").length === 1,
	parse: parseFloat,
	transform: (v$4) => `${v$4}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh$1 = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = {
	...percent,
	parse: (v$4) => percent.parse(v$4) / 100,
	transform: (v$4) => percent.transform(v$4 * 100)
};
var int = {
	...number,
	transform: Math.round
};
var numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	radius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	size: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	rotate: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale: scale$1,
	scaleX: scale$1,
	scaleY: scale$1,
	scaleZ: scale$1,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
};
function buildHTMLStyles(state$1, latestValues, options, transformTemplate$1) {
	const { style, vars: vars$1, transform: transform$1, transformOrigin: transformOrigin$1 } = state$1;
	let hasTransform$1 = false;
	let hasTransformOrigin = false;
	let transformIsNone = true;
	for (const key in latestValues) {
		const value = latestValues[key];
		if (isCSSVariableName(key)) {
			vars$1[key] = value;
			continue;
		}
		const valueType = numberValueTypes[key];
		const valueAsType = getValueAsType(value, valueType);
		if (transformProps.has(key)) {
			hasTransform$1 = true;
			transform$1[key] = valueAsType;
			if (!transformIsNone) continue;
			if (value !== (valueType.default || 0)) transformIsNone = false;
		} else if (key.startsWith("origin")) {
			hasTransformOrigin = true;
			transformOrigin$1[key] = valueAsType;
		} else style[key] = valueAsType;
	}
	if (!latestValues.transform) {
		if (hasTransform$1 || transformTemplate$1) style.transform = buildTransform(state$1.transform, options, transformIsNone, transformTemplate$1);
		else if (style.transform) style.transform = "none";
	}
	if (hasTransformOrigin) {
		const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin$1;
		style.transformOrigin = `${originX} ${originY} ${originZ}`;
	}
}
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
function copyRawValuesOnly(target, source, props) {
	for (const key in source) if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) target[key] = source[key];
}
function useInitialMotionValues({ transformTemplate: transformTemplate$1 }, visualState, isStatic) {
	return (0, import_react.useMemo)(() => {
		const state$1 = createHtmlRenderState();
		buildHTMLStyles(state$1, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate$1);
		return Object.assign({}, state$1.vars, state$1.style);
	}, [visualState]);
}
function useStyle(props, visualState, isStatic) {
	const styleProp = props.style || {};
	const style = {};
	copyRawValuesOnly(style, styleProp, props);
	Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
	return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
	const htmlProps = {};
	const style = useStyle(props, visualState, isStatic);
	if (props.drag && props.dragListener !== false) {
		htmlProps.draggable = false;
		style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
		style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
	}
	if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) htmlProps.tabIndex = 0;
	htmlProps.style = style;
	return htmlProps;
}
var validMotionProps = new Set([
	"animate",
	"exit",
	"variants",
	"initial",
	"style",
	"values",
	"variants",
	"transition",
	"transformTemplate",
	"transformValues",
	"custom",
	"inherit",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"_dragX",
	"_dragY",
	"onHoverStart",
	"onHoverEnd",
	"onViewportEnter",
	"onViewportLeave",
	"globalTapTarget",
	"ignoreStrict",
	"viewport"
]);
function isValidMotionProp(key) {
	return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
function memoize$1(fn) {
	var cache$1 = {};
	return function(arg) {
		if (cache$1[arg] === void 0) cache$1[arg] = fn(arg);
		return cache$1[arg];
	};
}
var memoize_browser_esm_default;
var init_memoize_browser_esm = __esmMin((() => {
	memoize_browser_esm_default = memoize$1;
}));
var is_prop_valid_browser_esm_exports = /* @__PURE__ */ __export({ default: () => is_prop_valid_browser_esm_default });
var reactPropsRegex$1, index, is_prop_valid_browser_esm_default;
var init_is_prop_valid_browser_esm = __esmMin((() => {
	init_memoize_browser_esm();
	reactPropsRegex$1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
	index = memoize_browser_esm_default(function(prop) {
		return reactPropsRegex$1.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
	});
	is_prop_valid_browser_esm_default = index;
}));
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
	if (!isValidProp) return;
	shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
	loadExternalIsValidProp((init_is_prop_valid_browser_esm(), __toCommonJS(is_prop_valid_browser_esm_exports)).default);
} catch (_a) {}
function filterProps(props, isDom, forwardMotionProps) {
	const filteredProps = {};
	for (const key in props) {
		if (key === "values" && typeof props.values === "object") continue;
		if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) filteredProps[key] = props[key];
	}
	return filteredProps;
}
function calcOrigin$1(origin, offset$1, size$1) {
	return typeof origin === "string" ? origin : px.transform(offset$1 + size$1 * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
	return `${calcOrigin$1(originX, dimensions.x, dimensions.width)} ${calcOrigin$1(originY, dimensions.y, dimensions.height)}`;
}
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
};
var camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function buildSVGPath(attrs, length$1, spacing$1 = 1, offset$1 = 0, useDashCase = true) {
	attrs.pathLength = 1;
	const keys$1 = useDashCase ? dashKeys : camelKeys;
	attrs[keys$1.offset] = px.transform(-offset$1);
	const pathLength = px.transform(length$1);
	const pathSpacing = px.transform(spacing$1);
	attrs[keys$1.array] = `${pathLength} ${pathSpacing}`;
}
function buildSVGAttrs(state$1, { attrX, attrY, attrScale, originX, originY, pathLength, pathSpacing = 1, pathOffset = 0, ...latest }, options, isSVGTag$1, transformTemplate$1) {
	buildHTMLStyles(state$1, latest, options, transformTemplate$1);
	if (isSVGTag$1) {
		if (state$1.style.viewBox) state$1.attrs.viewBox = state$1.style.viewBox;
		return;
	}
	state$1.attrs = state$1.style;
	state$1.style = {};
	const { attrs, style, dimensions } = state$1;
	if (attrs.transform) {
		if (dimensions) style.transform = attrs.transform;
		delete attrs.transform;
	}
	if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : .5, originY !== void 0 ? originY : .5);
	if (attrX !== void 0) attrs.x = attrX;
	if (attrY !== void 0) attrs.y = attrY;
	if (attrScale !== void 0) attrs.scale = attrScale;
	if (pathLength !== void 0) buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
}
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
});
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";
function useSVGProps(props, visualState, _isStatic, Component) {
	const visualProps = (0, import_react.useMemo)(() => {
		const state$1 = createSvgRenderState();
		buildSVGAttrs(state$1, visualState, { enableHardwareAcceleration: false }, isSVGTag(Component), props.transformTemplate);
		return {
			...state$1.attrs,
			style: { ...state$1.style }
		};
	}, [visualState]);
	if (props.style) {
		const rawStyles = {};
		copyRawValuesOnly(rawStyles, props.style, props);
		visualProps.style = {
			...rawStyles,
			...visualProps.style
		};
	}
	return visualProps;
}
function createUseRender(forwardMotionProps = false) {
	const useRender = (Component, props, ref, { latestValues }, isStatic) => {
		const visualProps = (isSVGComponent(Component) ? useSVGProps : useHTMLProps)(props, latestValues, isStatic, Component);
		const elementProps = {
			...filterProps(props, typeof Component === "string", forwardMotionProps),
			...visualProps,
			ref
		};
		const { children } = props;
		const renderedChildren = (0, import_react.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
		return (0, import_react.createElement)(Component, {
			...elementProps,
			children: renderedChildren
		});
	};
	return useRender;
}
function renderHTML(element, { style, vars: vars$1 }, styleProp, projection) {
	Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
	for (const key in vars$1) element.style.setProperty(key, vars$1[key]);
}
var camelCaseAttributes = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);
function renderSVG(element, renderState, _styleProp, projection) {
	renderHTML(element, renderState, void 0, projection);
	for (const key in renderState.attrs) element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
}
function scrapeMotionValuesFromProps$1(props, prevProps) {
	const { style } = props;
	const newValues = {};
	for (const key in style) if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props)) newValues[key] = style[key];
	return newValues;
}
function scrapeMotionValuesFromProps(props, prevProps) {
	const newValues = scrapeMotionValuesFromProps$1(props, prevProps);
	for (const key in props) if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
		const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
		newValues[targetKey] = props[key];
	}
	return newValues;
}
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
	if (typeof definition === "function") definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
	if (typeof definition === "string") definition = props.variants && props.variants[definition];
	if (typeof definition === "function") definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
	return definition;
}
function useConstant(init) {
	const ref = (0, import_react.useRef)(null);
	if (ref.current === null) ref.current = init();
	return ref.current;
}
var isKeyframesTarget = (v$4) => {
	return Array.isArray(v$4);
};
var isCustomValue = (v$4) => {
	return Boolean(v$4 && typeof v$4 === "object" && v$4.mix && v$4.toValue);
};
var resolveFinalValueInKeyframes = (v$4) => {
	return isKeyframesTarget(v$4) ? v$4[v$4.length - 1] || 0 : v$4;
};
function resolveMotionValue(value) {
	const unwrappedValue = isMotionValue(value) ? value.get() : value;
	return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$2, createRenderState, onMount }, props, context, presenceContext) {
	const state$1 = {
		latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps$2),
		renderState: createRenderState()
	};
	if (onMount) state$1.mount = (instance) => onMount(props, instance, state$1);
	return state$1;
}
var makeUseVisualState = (config$1) => (props, isStatic) => {
	const context = (0, import_react.useContext)(MotionContext);
	const presenceContext = (0, import_react.useContext)(PresenceContext);
	const make = () => makeState(config$1, props, context, presenceContext);
	return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
	const values = {};
	const motionValues = scrapeMotionValues(props, {});
	for (const key in motionValues) values[key] = resolveMotionValue(motionValues[key]);
	let { initial, animate } = props;
	const isControllingVariants$1 = isControllingVariants(props);
	const isVariantNode$1 = isVariantNode(props);
	if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
		if (initial === void 0) initial = context.initial;
		if (animate === void 0) animate = context.animate;
	}
	let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
	isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
	const variantToSet = isInitialAnimationBlocked ? animate : initial;
	if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) (Array.isArray(variantToSet) ? variantToSet : [variantToSet]).forEach((definition) => {
		const resolved = resolveVariantFromProps(props, definition);
		if (!resolved) return;
		const { transitionEnd, transition: transition$2, ...target } = resolved;
		for (const key in target) {
			let valueTarget = target[key];
			if (Array.isArray(valueTarget)) {
				const index$1 = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
				valueTarget = valueTarget[index$1];
			}
			if (valueTarget !== null) values[key] = valueTarget;
		}
		for (const key in transitionEnd) values[key] = transitionEnd[key];
	});
	return values;
}
var noop = (any) => any;
var Queue = class {
	constructor() {
		this.order = [];
		this.scheduled = /* @__PURE__ */ new Set();
	}
	add(process) {
		if (!this.scheduled.has(process)) {
			this.scheduled.add(process);
			this.order.push(process);
			return true;
		}
	}
	remove(process) {
		const index$1 = this.order.indexOf(process);
		if (index$1 !== -1) {
			this.order.splice(index$1, 1);
			this.scheduled.delete(process);
		}
	}
	clear() {
		this.order.length = 0;
		this.scheduled.clear();
	}
};
function createRenderStep(runNextFrame) {
	let thisFrame = new Queue();
	let nextFrame = new Queue();
	let numToRun = 0;
	let isProcessing = false;
	let flushNextFrame = false;
	const toKeepAlive = /* @__PURE__ */ new WeakSet();
	const step = {
		schedule: (callback, keepAlive = false, immediate = false) => {
			const addToCurrentFrame = immediate && isProcessing;
			const queue = addToCurrentFrame ? thisFrame : nextFrame;
			if (keepAlive) toKeepAlive.add(callback);
			if (queue.add(callback) && addToCurrentFrame && isProcessing) numToRun = thisFrame.order.length;
			return callback;
		},
		cancel: (callback) => {
			nextFrame.remove(callback);
			toKeepAlive.delete(callback);
		},
		process: (frameData$1) => {
			if (isProcessing) {
				flushNextFrame = true;
				return;
			}
			isProcessing = true;
			[thisFrame, nextFrame] = [nextFrame, thisFrame];
			nextFrame.clear();
			numToRun = thisFrame.order.length;
			if (numToRun) for (let i = 0; i < numToRun; i++) {
				const callback = thisFrame.order[i];
				callback(frameData$1);
				if (toKeepAlive.has(callback)) {
					step.schedule(callback);
					runNextFrame();
				}
			}
			isProcessing = false;
			if (flushNextFrame) {
				flushNextFrame = false;
				step.process(frameData$1);
			}
		}
	};
	return step;
}
var stepsOrder = [
	"prepare",
	"read",
	"update",
	"preRender",
	"render",
	"postRender"
];
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
	let runNextFrame = false;
	let useDefaultElapsed = true;
	const state$1 = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	const steps$1 = stepsOrder.reduce((acc, key) => {
		acc[key] = createRenderStep(() => runNextFrame = true);
		return acc;
	}, {});
	const processStep = (stepId) => steps$1[stepId].process(state$1);
	const processBatch = () => {
		const timestamp = performance.now();
		runNextFrame = false;
		state$1.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state$1.timestamp, maxElapsed), 1);
		state$1.timestamp = timestamp;
		state$1.isProcessing = true;
		stepsOrder.forEach(processStep);
		state$1.isProcessing = false;
		if (runNextFrame && allowKeepAlive) {
			useDefaultElapsed = false;
			scheduleNextBatch(processBatch);
		}
	};
	const wake = () => {
		runNextFrame = true;
		useDefaultElapsed = true;
		if (!state$1.isProcessing) scheduleNextBatch(processBatch);
	};
	const schedule = stepsOrder.reduce((acc, key) => {
		const step = steps$1[key];
		acc[key] = (process, keepAlive = false, immediate = false) => {
			if (!runNextFrame) wake();
			return step.schedule(process, keepAlive, immediate);
		};
		return acc;
	}, {});
	const cancel = (process) => stepsOrder.forEach((key) => steps$1[key].cancel(process));
	return {
		schedule,
		cancel,
		state: state$1,
		steps: steps$1
	};
}
var { schedule: frame, cancel: cancelFrame, state: frameData, steps } = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);
var svgMotionConfig = { useVisualState: makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState,
	onMount: (props, instance, { renderState, latestValues }) => {
		frame.read(() => {
			try {
				renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
			} catch (e$1) {
				renderState.dimensions = {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				};
			}
		});
		frame.render(() => {
			buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, isSVGTag(instance.tagName), props.transformTemplate);
			renderSVG(instance, renderState);
		});
	}
}) };
var htmlMotionConfig = { useVisualState: makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
}) };
function createDomMotionConfig(Component, { forwardMotionProps = false }, preloadedFeatures$1, createVisualElement) {
	return {
		...isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig,
		preloadedFeatures: preloadedFeatures$1,
		useRender: createUseRender(forwardMotionProps),
		createVisualElement,
		Component
	};
}
function addDomEvent(target, eventName, handler, options = { passive: true }) {
	target.addEventListener(eventName, handler, options);
	return () => target.removeEventListener(eventName, handler);
}
var isPrimaryPointer = (event) => {
	if (event.pointerType === "mouse") return typeof event.button !== "number" || event.button <= 0;
	else return event.isPrimary !== false;
};
function extractEventInfo(event, pointType = "page") {
	return { point: {
		x: event[pointType + "X"],
		y: event[pointType + "Y"]
	} };
}
var addPointerInfo = (handler) => {
	return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};
function addPointerEvent(target, eventName, handler, options) {
	return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
var combineFunctions = (a, b$1) => (v$4) => b$1(a(v$4));
var pipe = (...transformers) => transformers.reduce(combineFunctions);
function createLock(name) {
	let lock = null;
	return () => {
		const openLock = () => {
			lock = null;
		};
		if (lock === null) {
			lock = name;
			return openLock;
		}
		return false;
	};
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag$1) {
	let lock = false;
	if (drag$1 === "y") lock = globalVerticalLock();
	else if (drag$1 === "x") lock = globalHorizontalLock();
	else {
		const openHorizontal = globalHorizontalLock();
		const openVertical = globalVerticalLock();
		if (openHorizontal && openVertical) lock = () => {
			openHorizontal();
			openVertical();
		};
		else {
			if (openHorizontal) openHorizontal();
			if (openVertical) openVertical();
		}
	}
	return lock;
}
function isDragActive() {
	const openGestureLock = getGlobalLock(true);
	if (!openGestureLock) return true;
	openGestureLock();
	return false;
}
var Feature = class {
	constructor(node$1) {
		this.isMounted = false;
		this.node = node$1;
	}
	update() {}
};
function addHoverEvent(node$1, isActive) {
	const eventName = "pointer" + (isActive ? "enter" : "leave");
	const callbackName = "onHover" + (isActive ? "Start" : "End");
	const handleEvent = (event, info) => {
		if (event.pointerType === "touch" || isDragActive()) return;
		const props = node$1.getProps();
		if (node$1.animationState && props.whileHover) node$1.animationState.setActive("whileHover", isActive);
		if (props[callbackName]) frame.update(() => props[callbackName](event, info));
	};
	return addPointerEvent(node$1.current, eventName, handleEvent, { passive: !node$1.getProps()[callbackName] });
}
var HoverGesture = class extends Feature {
	mount() {
		this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
	}
	unmount() {}
};
var FocusGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.isActive = false;
	}
	onFocus() {
		let isFocusVisible = false;
		try {
			isFocusVisible = this.node.current.matches(":focus-visible");
		} catch (e$1) {
			isFocusVisible = true;
		}
		if (!isFocusVisible || !this.node.animationState) return;
		this.node.animationState.setActive("whileFocus", true);
		this.isActive = true;
	}
	onBlur() {
		if (!this.isActive || !this.node.animationState) return;
		this.node.animationState.setActive("whileFocus", false);
		this.isActive = false;
	}
	mount() {
		this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
var isNodeOrChild = (parent, child) => {
	if (!child) return false;
	else if (parent === child) return true;
	else return isNodeOrChild(parent, child.parentElement);
};
function fireSyntheticPointerEvent(name, handler) {
	if (!handler) return;
	const syntheticPointerEvent = new PointerEvent("pointer" + name);
	handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
var PressGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.removeStartListeners = noop;
		this.removeEndListeners = noop;
		this.removeAccessibleListeners = noop;
		this.startPointerPress = (startEvent, startInfo) => {
			if (this.isPressing) return;
			this.removeEndListeners();
			const props = this.node.getProps();
			const endPointerPress = (endEvent, endInfo) => {
				if (!this.checkPressEnd()) return;
				const { onTap, onTapCancel, globalTapTarget } = this.node.getProps();
				frame.update(() => {
					!globalTapTarget && !isNodeOrChild(this.node.current, endEvent.target) ? onTapCancel && onTapCancel(endEvent, endInfo) : onTap && onTap(endEvent, endInfo);
				});
			};
			this.removeEndListeners = pipe(addPointerEvent(window, "pointerup", endPointerPress, { passive: !(props.onTap || props["onPointerUp"]) }), addPointerEvent(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), { passive: !(props.onTapCancel || props["onPointerCancel"]) }));
			this.startPress(startEvent, startInfo);
		};
		this.startAccessiblePress = () => {
			const handleKeydown = (keydownEvent) => {
				if (keydownEvent.key !== "Enter" || this.isPressing) return;
				const handleKeyup = (keyupEvent) => {
					if (keyupEvent.key !== "Enter" || !this.checkPressEnd()) return;
					fireSyntheticPointerEvent("up", (event, info) => {
						const { onTap } = this.node.getProps();
						if (onTap) frame.update(() => onTap(event, info));
					});
				};
				this.removeEndListeners();
				this.removeEndListeners = addDomEvent(this.node.current, "keyup", handleKeyup);
				fireSyntheticPointerEvent("down", (event, info) => {
					this.startPress(event, info);
				});
			};
			const removeKeydownListener = addDomEvent(this.node.current, "keydown", handleKeydown);
			const handleBlur = () => {
				if (!this.isPressing) return;
				fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
			};
			this.removeAccessibleListeners = pipe(removeKeydownListener, addDomEvent(this.node.current, "blur", handleBlur));
		};
	}
	startPress(event, info) {
		this.isPressing = true;
		const { onTapStart, whileTap } = this.node.getProps();
		if (whileTap && this.node.animationState) this.node.animationState.setActive("whileTap", true);
		if (onTapStart) frame.update(() => onTapStart(event, info));
	}
	checkPressEnd() {
		this.removeEndListeners();
		this.isPressing = false;
		if (this.node.getProps().whileTap && this.node.animationState) this.node.animationState.setActive("whileTap", false);
		return !isDragActive();
	}
	cancelPress(event, info) {
		if (!this.checkPressEnd()) return;
		const { onTapCancel } = this.node.getProps();
		if (onTapCancel) frame.update(() => onTapCancel(event, info));
	}
	mount() {
		const props = this.node.getProps();
		this.removeStartListeners = pipe(addPointerEvent(props.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(props.onTapStart || props["onPointerStart"]) }), addDomEvent(this.node.current, "focus", this.startAccessiblePress));
	}
	unmount() {
		this.removeStartListeners();
		this.removeEndListeners();
		this.removeAccessibleListeners();
	}
};
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
	const callback = observerCallbacks.get(entry.target);
	callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
	entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root: root$1, ...options }) {
	const lookupRoot = root$1 || document;
	if (!observers.has(lookupRoot)) observers.set(lookupRoot, {});
	const rootObservers = observers.get(lookupRoot);
	const key = JSON.stringify(options);
	if (!rootObservers[key]) rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
		root: root$1,
		...options
	});
	return rootObservers[key];
}
function observeIntersection(element, options, callback) {
	const rootInteresectionObserver = initIntersectionObserver(options);
	observerCallbacks.set(element, callback);
	rootInteresectionObserver.observe(element);
	return () => {
		observerCallbacks.delete(element);
		rootInteresectionObserver.unobserve(element);
	};
}
var thresholdNames = {
	some: 0,
	all: 1
};
var InViewFeature = class extends Feature {
	constructor() {
		super(...arguments);
		this.hasEnteredView = false;
		this.isInView = false;
	}
	startObserver() {
		this.unmount();
		const { viewport: viewport$1 = {} } = this.node.getProps();
		const { root: root$1, margin: rootMargin, amount = "some", once } = viewport$1;
		const options = {
			root: root$1 ? root$1.current : void 0,
			rootMargin,
			threshold: typeof amount === "number" ? amount : thresholdNames[amount]
		};
		const onIntersectionUpdate = (entry) => {
			const { isIntersecting } = entry;
			if (this.isInView === isIntersecting) return;
			this.isInView = isIntersecting;
			if (once && !isIntersecting && this.hasEnteredView) return;
			else if (isIntersecting) this.hasEnteredView = true;
			if (this.node.animationState) this.node.animationState.setActive("whileInView", isIntersecting);
			const { onViewportEnter, onViewportLeave } = this.node.getProps();
			const callback = isIntersecting ? onViewportEnter : onViewportLeave;
			callback && callback(entry);
		};
		return observeIntersection(this.node.current, options, onIntersectionUpdate);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver === "undefined") return;
		const { props, prevProps } = this.node;
		if ([
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(props, prevProps))) this.startObserver();
	}
	unmount() {}
};
function hasViewportOptionChanged({ viewport: viewport$1 = {} }, { viewport: prevViewport = {} } = {}) {
	return (name) => viewport$1[name] !== prevViewport[name];
}
var gestureAnimations = {
	inView: { Feature: InViewFeature },
	tap: { Feature: PressGesture },
	focus: { Feature: FocusGesture },
	hover: { Feature: HoverGesture }
};
function shallowCompare(next$1, prev$1) {
	if (!Array.isArray(prev$1)) return false;
	const prevLength = prev$1.length;
	if (prevLength !== next$1.length) return false;
	for (let i = 0; i < prevLength; i++) if (prev$1[i] !== next$1[i]) return false;
	return true;
}
function getCurrent(visualElement) {
	const current = {};
	visualElement.values.forEach((value, key) => current[key] = value.get());
	return current;
}
function getVelocity$1(visualElement) {
	const velocity = {};
	visualElement.values.forEach((value, key) => velocity[key] = value.getVelocity());
	return velocity;
}
function resolveVariant(visualElement, definition, custom) {
	const props = visualElement.getProps();
	return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity$1(visualElement));
}
var warning = noop;
var invariant = noop;
var secondsToMilliseconds = (seconds) => seconds * 1e3;
var millisecondsToSeconds = (milliseconds) => milliseconds / 1e3;
var instantAnimationState = { current: false };
var isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";
function isWaapiSupportedEasing(easing) {
	return Boolean(!easing || typeof easing === "string" && supportedWaapiEasing[easing] || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = ([a, b$1, c$1, d$1]) => `cubic-bezier(${a}, ${b$1}, ${c$1}, ${d$1})`;
var supportedWaapiEasing = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: cubicBezierAsString([
		0,
		.65,
		.55,
		1
	]),
	circOut: cubicBezierAsString([
		.55,
		0,
		1,
		.45
	]),
	backIn: cubicBezierAsString([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: cubicBezierAsString([
		.33,
		1.53,
		.69,
		.99
	])
};
function mapEasingToNativeEasing(easing) {
	if (!easing) return void 0;
	return isBezierDefinition(easing) ? cubicBezierAsString(easing) : Array.isArray(easing) ? easing.map(mapEasingToNativeEasing) : supportedWaapiEasing[easing];
}
function animateStyle(element, valueName, keyframes$3, { delay: delay$1 = 0, duration, repeat = 0, repeatType = "loop", ease: ease$1, times } = {}) {
	const keyframeOptions = { [valueName]: keyframes$3 };
	if (times) keyframeOptions.offset = times;
	const easing = mapEasingToNativeEasing(ease$1);
	if (Array.isArray(easing)) keyframeOptions.easing = easing;
	return element.animate(keyframeOptions, {
		delay: delay$1,
		duration,
		easing: !Array.isArray(easing) ? easing : "linear",
		fill: "both",
		iterations: repeat + 1,
		direction: repeatType === "reverse" ? "alternate" : "normal"
	});
}
function getFinalKeyframe(keyframes$3, { repeat, repeatType = "loop" }) {
	return keyframes$3[repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : keyframes$3.length - 1];
}
var calcBezier = (t$4, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t$4 + (3 * a2 - 6 * a1)) * t$4 + 3 * a1) * t$4;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x$2, lowerBound, upperBound, mX1, mX2) {
	let currentX;
	let currentT;
	let i = 0;
	do {
		currentT = lowerBound + (upperBound - lowerBound) / 2;
		currentX = calcBezier(currentT, mX1, mX2) - x$2;
		if (currentX > 0) upperBound = currentT;
		else lowerBound = currentT;
	} while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
	return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
	if (mX1 === mY1 && mX2 === mY2) return noop;
	const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
	return (t$4) => t$4 === 0 || t$4 === 1 ? t$4 : calcBezier(getTForX(t$4), mY1, mY2);
}
var easeIn = cubicBezier(.42, 0, 1, 1);
var easeOut = cubicBezier(0, 0, .58, 1);
var easeInOut = cubicBezier(.42, 0, .58, 1);
var isEasingArray = (ease$1) => {
	return Array.isArray(ease$1) && typeof ease$1[0] !== "number";
};
var mirrorEasing = (easing) => (p$5) => p$5 <= .5 ? easing(2 * p$5) / 2 : (2 - easing(2 * (1 - p$5))) / 2;
var reverseEasing = (easing) => (p$5) => 1 - easing(1 - p$5);
var circIn = (p$5) => 1 - Math.sin(Math.acos(p$5));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circIn);
var backOut = cubicBezier(.33, 1.53, .69, .99);
var backIn = reverseEasing(backOut);
var backInOut = mirrorEasing(backIn);
var anticipate = (p$5) => (p$5 *= 2) < 1 ? .5 * backIn(p$5) : .5 * (2 - Math.pow(2, -10 * (p$5 - 1)));
var easingLookup = {
	linear: noop,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate
};
var easingDefinitionToFunction = (definition) => {
	if (Array.isArray(definition)) {
		invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
		const [x1, y1, x2, y2] = definition;
		return cubicBezier(x1, y1, x2, y2);
	} else if (typeof definition === "string") {
		invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
		return easingLookup[definition];
	}
	return definition;
};
var isColorString = (type, testProp) => (v$4) => {
	return Boolean(isString(v$4) && singleColorRegex.test(v$4) && v$4.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v$4, testProp));
};
var splitColor = (aName, bName, cName) => (v$4) => {
	if (!isString(v$4)) return v$4;
	const [a, b$1, c$1, alpha$1] = v$4.match(floatRegex);
	return {
		[aName]: parseFloat(a),
		[bName]: parseFloat(b$1),
		[cName]: parseFloat(c$1),
		alpha: alpha$1 !== void 0 ? parseFloat(alpha$1) : 1
	};
};
var clampRgbUnit = (v$4) => clamp(0, 255, v$4);
var rgbUnit = {
	...number,
	transform: (v$4) => Math.round(clampRgbUnit(v$4))
};
var rgba = {
	test: isColorString("rgb", "red"),
	parse: splitColor("red", "green", "blue"),
	transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
function parseHex(v$4) {
	let r$4 = "";
	let g$2 = "";
	let b$1 = "";
	let a = "";
	if (v$4.length > 5) {
		r$4 = v$4.substring(1, 3);
		g$2 = v$4.substring(3, 5);
		b$1 = v$4.substring(5, 7);
		a = v$4.substring(7, 9);
	} else {
		r$4 = v$4.substring(1, 2);
		g$2 = v$4.substring(2, 3);
		b$1 = v$4.substring(3, 4);
		a = v$4.substring(4, 5);
		r$4 += r$4;
		g$2 += g$2;
		b$1 += b$1;
		a += a;
	}
	return {
		red: parseInt(r$4, 16),
		green: parseInt(g$2, 16),
		blue: parseInt(b$1, 16),
		alpha: a ? parseInt(a, 16) / 255 : 1
	};
}
var hex = {
	test: isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
};
var hsla = {
	test: isColorString("hsl", "hue"),
	parse: splitColor("hue", "saturation", "lightness"),
	transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
		return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
	}
};
var color = {
	test: (v$4) => rgba.test(v$4) || hex.test(v$4) || hsla.test(v$4),
	parse: (v$4) => {
		if (rgba.test(v$4)) return rgba.parse(v$4);
		else if (hsla.test(v$4)) return hsla.parse(v$4);
		else return hex.parse(v$4);
	},
	transform: (v$4) => {
		return isString(v$4) ? v$4 : v$4.hasOwnProperty("red") ? rgba.transform(v$4) : hsla.transform(v$4);
	}
};
var mix = (from$1, to, progress$1) => -progress$1 * from$1 + progress$1 * to + from$1;
function hueToRgb(p$5, q$4, t$4) {
	if (t$4 < 0) t$4 += 1;
	if (t$4 > 1) t$4 -= 1;
	if (t$4 < 1 / 6) return p$5 + (q$4 - p$5) * 6 * t$4;
	if (t$4 < 1 / 2) return q$4;
	if (t$4 < 2 / 3) return p$5 + (q$4 - p$5) * (2 / 3 - t$4) * 6;
	return p$5;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha$1 }) {
	hue /= 360;
	saturation /= 100;
	lightness /= 100;
	let red = 0;
	let green = 0;
	let blue = 0;
	if (!saturation) red = green = blue = lightness;
	else {
		const q$4 = lightness < .5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
		const p$5 = 2 * lightness - q$4;
		red = hueToRgb(p$5, q$4, hue + 1 / 3);
		green = hueToRgb(p$5, q$4, hue);
		blue = hueToRgb(p$5, q$4, hue - 1 / 3);
	}
	return {
		red: Math.round(red * 255),
		green: Math.round(green * 255),
		blue: Math.round(blue * 255),
		alpha: alpha$1
	};
}
var mixLinearColor = (from$1, to, v$4) => {
	const fromExpo = from$1 * from$1;
	return Math.sqrt(Math.max(0, v$4 * (to * to - fromExpo) + fromExpo));
};
var colorTypes = [
	hex,
	rgba,
	hsla
];
var getColorType = (v$4) => colorTypes.find((type) => type.test(v$4));
function asRGBA(color$2) {
	const type = getColorType(color$2);
	invariant(Boolean(type), `'${color$2}' is not an animatable color. Use the equivalent color code instead.`);
	let model = type.parse(color$2);
	if (type === hsla) model = hslaToRgba(model);
	return model;
}
var mixColor = (from$1, to) => {
	const fromRGBA = asRGBA(from$1);
	const toRGBA = asRGBA(to);
	const blended = { ...fromRGBA };
	return (v$4) => {
		blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v$4);
		blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v$4);
		blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v$4);
		blended.alpha = mix(fromRGBA.alpha, toRGBA.alpha, v$4);
		return rgba.transform(blended);
	};
};
function test(v$4) {
	var _a, _b;
	return isNaN(v$4) && isString(v$4) && (((_a = v$4.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v$4.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
var cssVarTokeniser = {
	regex: cssVariableRegex,
	countKey: "Vars",
	token: "${v}",
	parse: noop
};
var colorTokeniser = {
	regex: colorRegex,
	countKey: "Colors",
	token: "${c}",
	parse: color.parse
};
var numberTokeniser = {
	regex: floatRegex,
	countKey: "Numbers",
	token: "${n}",
	parse: number.parse
};
function tokenise(info, { regex, countKey, token: token$1, parse: parse$1 }) {
	const matches = info.tokenised.match(regex);
	if (!matches) return;
	info["num" + countKey] = matches.length;
	info.tokenised = info.tokenised.replace(regex, token$1);
	info.values.push(...matches.map(parse$1));
}
function analyseComplexValue(value) {
	const originalValue = value.toString();
	const info = {
		value: originalValue,
		tokenised: originalValue,
		values: [],
		numVars: 0,
		numColors: 0,
		numNumbers: 0
	};
	if (info.value.includes("var(--")) tokenise(info, cssVarTokeniser);
	tokenise(info, colorTokeniser);
	tokenise(info, numberTokeniser);
	return info;
}
function parseComplexValue(v$4) {
	return analyseComplexValue(v$4).values;
}
function createTransformer(source) {
	const { values, numColors, numVars, tokenised } = analyseComplexValue(source);
	const numValues = values.length;
	return (v$4) => {
		let output = tokenised;
		for (let i = 0; i < numValues; i++) if (i < numVars) output = output.replace(cssVarTokeniser.token, v$4[i]);
		else if (i < numVars + numColors) output = output.replace(colorTokeniser.token, color.transform(v$4[i]));
		else output = output.replace(numberTokeniser.token, sanitize(v$4[i]));
		return output;
	};
}
var convertNumbersToZero = (v$4) => typeof v$4 === "number" ? 0 : v$4;
function getAnimatableNone$1(v$4) {
	const parsed = parseComplexValue(v$4);
	return createTransformer(v$4)(parsed.map(convertNumbersToZero));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
var mixImmediate = (origin, target) => (p$5) => `${p$5 > 0 ? target : origin}`;
function getMixer(origin, target) {
	if (typeof origin === "number") return (v$4) => mix(origin, target, v$4);
	else if (color.test(origin)) return mixColor(origin, target);
	else return origin.startsWith("var(") ? mixImmediate(origin, target) : mixComplex(origin, target);
}
var mixArray = (from$1, to) => {
	const output = [...from$1];
	const numValues = output.length;
	const blendValue = from$1.map((fromThis, i) => getMixer(fromThis, to[i]));
	return (v$4) => {
		for (let i = 0; i < numValues; i++) output[i] = blendValue[i](v$4);
		return output;
	};
};
var mixObject = (origin, target) => {
	const output = {
		...origin,
		...target
	};
	const blendValue = {};
	for (const key in output) if (origin[key] !== void 0 && target[key] !== void 0) blendValue[key] = getMixer(origin[key], target[key]);
	return (v$4) => {
		for (const key in blendValue) output[key] = blendValue[key](v$4);
		return output;
	};
};
var mixComplex = (origin, target) => {
	const template = complex.createTransformer(target);
	const originStats = analyseComplexValue(origin);
	const targetStats = analyseComplexValue(target);
	if (originStats.numVars === targetStats.numVars && originStats.numColors === targetStats.numColors && originStats.numNumbers >= targetStats.numNumbers) return pipe(mixArray(originStats.values, targetStats.values), template);
	else {
		warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
		return mixImmediate(origin, target);
	}
};
var progress = (from$1, to, value) => {
	const toFromDifference = to - from$1;
	return toFromDifference === 0 ? 1 : (value - from$1) / toFromDifference;
};
var mixNumber = (from$1, to) => (p$5) => mix(from$1, to, p$5);
function detectMixerFactory(v$4) {
	if (typeof v$4 === "number") return mixNumber;
	else if (typeof v$4 === "string") return color.test(v$4) ? mixColor : mixComplex;
	else if (Array.isArray(v$4)) return mixArray;
	else if (typeof v$4 === "object") return mixObject;
	return mixNumber;
}
function createMixers(output, ease$1, customMixer) {
	const mixers = [];
	const mixerFactory = customMixer || detectMixerFactory(output[0]);
	const numMixers = output.length - 1;
	for (let i = 0; i < numMixers; i++) {
		let mixer = mixerFactory(output[i], output[i + 1]);
		if (ease$1) mixer = pipe(Array.isArray(ease$1) ? ease$1[i] || noop : ease$1, mixer);
		mixers.push(mixer);
	}
	return mixers;
}
function interpolate(input, output, { clamp: isClamp = true, ease: ease$1, mixer } = {}) {
	const inputLength = input.length;
	invariant(inputLength === output.length, "Both input and output ranges must be the same length");
	if (inputLength === 1) return () => output[0];
	if (input[0] > input[inputLength - 1]) {
		input = [...input].reverse();
		output = [...output].reverse();
	}
	const mixers = createMixers(output, ease$1, mixer);
	const numMixers = mixers.length;
	const interpolator = (v$4) => {
		let i = 0;
		if (numMixers > 1) {
			for (; i < input.length - 2; i++) if (v$4 < input[i + 1]) break;
		}
		const progressInRange = progress(input[i], input[i + 1], v$4);
		return mixers[i](progressInRange);
	};
	return isClamp ? (v$4) => interpolator(clamp(input[0], input[inputLength - 1], v$4)) : interpolator;
}
function fillOffset(offset$1, remaining) {
	const min$1 = offset$1[offset$1.length - 1];
	for (let i = 1; i <= remaining; i++) {
		const offsetProgress = progress(0, remaining, i);
		offset$1.push(mix(min$1, 1, offsetProgress));
	}
}
function defaultOffset(arr) {
	const offset$1 = [0];
	fillOffset(offset$1, arr.length - 1);
	return offset$1;
}
function convertOffsetToTimes(offset$1, duration) {
	return offset$1.map((o) => o * duration);
}
function defaultEasing(values, easing) {
	return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes$2({ duration = 300, keyframes: keyframeValues, times, ease: ease$1 = "easeInOut" }) {
	const easingFunctions = isEasingArray(ease$1) ? ease$1.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease$1);
	const state$1 = {
		done: false,
		value: keyframeValues[0]
	};
	const mapTimeToKeyframe = interpolate(convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration), keyframeValues, { ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions) });
	return {
		calculatedDuration: duration,
		next: (t$4) => {
			state$1.value = mapTimeToKeyframe(t$4);
			state$1.done = t$4 >= duration;
			return state$1;
		}
	};
}
function velocityPerSecond(velocity, frameDuration) {
	return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}
var velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t$4, current) {
	const prevT = Math.max(t$4 - velocitySampleDuration, 0);
	return velocityPerSecond(current - resolveValue(prevT), t$4 - prevT);
}
var safeMin = .001;
var minDuration = .01;
var minDamping = .05;
function findSpring({ duration = 800, bounce = .25, velocity = 0, mass = 1 }) {
	let envelope;
	let derivative;
	warning(duration <= secondsToMilliseconds(10), "Spring duration must be 10 seconds or less");
	let dampingRatio = 1 - bounce;
	dampingRatio = clamp(minDamping, 1, dampingRatio);
	duration = clamp(minDuration, 10, millisecondsToSeconds(duration));
	if (dampingRatio < 1) {
		envelope = (undampedFreq$1) => {
			const exponentialDecay = undampedFreq$1 * dampingRatio;
			const delta = exponentialDecay * duration;
			const a = exponentialDecay - velocity;
			const b$1 = calcAngularFreq(undampedFreq$1, dampingRatio);
			const c$1 = Math.exp(-delta);
			return safeMin - a / b$1 * c$1;
		};
		derivative = (undampedFreq$1) => {
			const delta = undampedFreq$1 * dampingRatio * duration;
			const d$1 = delta * velocity + velocity;
			const e$1 = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq$1, 2) * duration;
			const f$3 = Math.exp(-delta);
			const g$2 = calcAngularFreq(Math.pow(undampedFreq$1, 2), dampingRatio);
			return (-envelope(undampedFreq$1) + safeMin > 0 ? -1 : 1) * ((d$1 - e$1) * f$3) / g$2;
		};
	} else {
		envelope = (undampedFreq$1) => {
			const a = Math.exp(-undampedFreq$1 * duration);
			const b$1 = (undampedFreq$1 - velocity) * duration + 1;
			return -safeMin + a * b$1;
		};
		derivative = (undampedFreq$1) => {
			return Math.exp(-undampedFreq$1 * duration) * ((velocity - undampedFreq$1) * (duration * duration));
		};
	}
	const initialGuess = 5 / duration;
	const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
	duration = secondsToMilliseconds(duration);
	if (isNaN(undampedFreq)) return {
		stiffness: 100,
		damping: 10,
		duration
	};
	else {
		const stiffness = Math.pow(undampedFreq, 2) * mass;
		return {
			stiffness,
			damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
			duration
		};
	}
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
	let result = initialGuess;
	for (let i = 1; i < rootIterations; i++) result = result - envelope(result) / derivative(result);
	return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
	return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
var durationKeys = ["duration", "bounce"];
var physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(options, keys$1) {
	return keys$1.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
	let springOptions = {
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: false,
		...options
	};
	if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
		const derived = findSpring(options);
		springOptions = {
			...springOptions,
			...derived,
			mass: 1
		};
		springOptions.isResolvedFromDuration = true;
	}
	return springOptions;
}
function spring({ keyframes: keyframes$3, restDelta, restSpeed, ...options }) {
	const origin = keyframes$3[0];
	const target = keyframes$3[keyframes$3.length - 1];
	const state$1 = {
		done: false,
		value: origin
	};
	const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
		...options,
		velocity: -millisecondsToSeconds(options.velocity || 0)
	});
	const initialVelocity = velocity || 0;
	const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
	const initialDelta = target - origin;
	const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
	const isGranularScale = Math.abs(initialDelta) < 5;
	restSpeed || (restSpeed = isGranularScale ? .01 : 2);
	restDelta || (restDelta = isGranularScale ? .005 : .5);
	let resolveSpring;
	if (dampingRatio < 1) {
		const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
		resolveSpring = (t$4) => {
			return target - Math.exp(-dampingRatio * undampedAngularFreq * t$4) * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t$4) + initialDelta * Math.cos(angularFreq * t$4));
		};
	} else if (dampingRatio === 1) resolveSpring = (t$4) => target - Math.exp(-undampedAngularFreq * t$4) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t$4);
	else {
		const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
		resolveSpring = (t$4) => {
			const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t$4);
			const freqForT = Math.min(dampedAngularFreq * t$4, 300);
			return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
		};
	}
	return {
		calculatedDuration: isResolvedFromDuration ? duration || null : null,
		next: (t$4) => {
			const current = resolveSpring(t$4);
			if (!isResolvedFromDuration) {
				let currentVelocity = initialVelocity;
				if (t$4 !== 0) if (dampingRatio < 1) currentVelocity = calcGeneratorVelocity(resolveSpring, t$4, current);
				else currentVelocity = 0;
				const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
				const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
				state$1.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
			} else state$1.done = t$4 >= duration;
			state$1.value = state$1.done ? target : current;
			return state$1;
		}
	};
}
function inertia({ keyframes: keyframes$3, velocity = 0, power = .8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min: min$1, max: max$1, restDelta = .5, restSpeed }) {
	const origin = keyframes$3[0];
	const state$1 = {
		done: false,
		value: origin
	};
	const isOutOfBounds = (v$4) => min$1 !== void 0 && v$4 < min$1 || max$1 !== void 0 && v$4 > max$1;
	const nearestBoundary = (v$4) => {
		if (min$1 === void 0) return max$1;
		if (max$1 === void 0) return min$1;
		return Math.abs(min$1 - v$4) < Math.abs(max$1 - v$4) ? min$1 : max$1;
	};
	let amplitude = power * velocity;
	const ideal = origin + amplitude;
	const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
	if (target !== ideal) amplitude = target - origin;
	const calcDelta = (t$4) => -amplitude * Math.exp(-t$4 / timeConstant);
	const calcLatest = (t$4) => target + calcDelta(t$4);
	const applyFriction = (t$4) => {
		const delta = calcDelta(t$4);
		const latest = calcLatest(t$4);
		state$1.done = Math.abs(delta) <= restDelta;
		state$1.value = state$1.done ? target : latest;
	};
	let timeReachedBoundary;
	let spring$1;
	const checkCatchBoundary = (t$4) => {
		if (!isOutOfBounds(state$1.value)) return;
		timeReachedBoundary = t$4;
		spring$1 = spring({
			keyframes: [state$1.value, nearestBoundary(state$1.value)],
			velocity: calcGeneratorVelocity(calcLatest, t$4, state$1.value),
			damping: bounceDamping,
			stiffness: bounceStiffness,
			restDelta,
			restSpeed
		});
	};
	checkCatchBoundary(0);
	return {
		calculatedDuration: null,
		next: (t$4) => {
			let hasUpdatedFrame = false;
			if (!spring$1 && timeReachedBoundary === void 0) {
				hasUpdatedFrame = true;
				applyFriction(t$4);
				checkCatchBoundary(t$4);
			}
			if (timeReachedBoundary !== void 0 && t$4 > timeReachedBoundary) return spring$1.next(t$4 - timeReachedBoundary);
			else {
				!hasUpdatedFrame && applyFriction(t$4);
				return state$1;
			}
		}
	};
}
var frameloopDriver = (update) => {
	const passTimestamp = ({ timestamp }) => update(timestamp);
	return {
		start: () => frame.update(passTimestamp, true),
		stop: () => cancelFrame(passTimestamp),
		now: () => frameData.isProcessing ? frameData.timestamp : performance.now()
	};
};
function calcGeneratorDuration(generator) {
	let duration = 0;
	const timeStep = 50;
	let state$1 = generator.next(duration);
	while (!state$1.done && duration < 2e4) {
		duration += timeStep;
		state$1 = generator.next(duration);
	}
	return duration >= 2e4 ? Infinity : duration;
}
var types = {
	decay: inertia,
	inertia,
	tween: keyframes$2,
	keyframes: keyframes$2,
	spring
};
function animateValue({ autoplay = true, delay: delay$1 = 0, driver = frameloopDriver, keyframes: keyframes$1$1, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", onPlay, onStop, onComplete, onUpdate, ...options }) {
	let speed = 1;
	let hasStopped = false;
	let resolveFinishedPromise;
	let currentFinishedPromise;
	const updateFinishedPromise = () => {
		currentFinishedPromise = new Promise((resolve) => {
			resolveFinishedPromise = resolve;
		});
	};
	updateFinishedPromise();
	let animationDriver;
	const generatorFactory = types[type] || keyframes$2;
	let mapNumbersToKeyframes;
	if (generatorFactory !== keyframes$2 && typeof keyframes$1$1[0] !== "number") {
		mapNumbersToKeyframes = interpolate([0, 100], keyframes$1$1, { clamp: false });
		keyframes$1$1 = [0, 100];
	}
	const generator = generatorFactory({
		...options,
		keyframes: keyframes$1$1
	});
	let mirroredGenerator;
	if (repeatType === "mirror") mirroredGenerator = generatorFactory({
		...options,
		keyframes: [...keyframes$1$1].reverse(),
		velocity: -(options.velocity || 0)
	});
	let playState = "idle";
	let holdTime = null;
	let startTime = null;
	let cancelTime = null;
	if (generator.calculatedDuration === null && repeat) generator.calculatedDuration = calcGeneratorDuration(generator);
	const { calculatedDuration } = generator;
	let resolvedDuration = Infinity;
	let totalDuration = Infinity;
	if (calculatedDuration !== null) {
		resolvedDuration = calculatedDuration + repeatDelay;
		totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
	}
	let currentTime = 0;
	const tick = (timestamp) => {
		if (startTime === null) return;
		if (speed > 0) startTime = Math.min(startTime, timestamp);
		if (speed < 0) startTime = Math.min(timestamp - totalDuration / speed, startTime);
		if (holdTime !== null) currentTime = holdTime;
		else currentTime = Math.round(timestamp - startTime) * speed;
		const timeWithoutDelay = currentTime - delay$1 * (speed >= 0 ? 1 : -1);
		const isInDelayPhase = speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
		currentTime = Math.max(timeWithoutDelay, 0);
		if (playState === "finished" && holdTime === null) currentTime = totalDuration;
		let elapsed = currentTime;
		let frameGenerator = generator;
		if (repeat) {
			const progress$1 = Math.min(currentTime, totalDuration) / resolvedDuration;
			let currentIteration = Math.floor(progress$1);
			let iterationProgress = progress$1 % 1;
			if (!iterationProgress && progress$1 >= 1) iterationProgress = 1;
			iterationProgress === 1 && currentIteration--;
			currentIteration = Math.min(currentIteration, repeat + 1);
			if (Boolean(currentIteration % 2)) {
				if (repeatType === "reverse") {
					iterationProgress = 1 - iterationProgress;
					if (repeatDelay) iterationProgress -= repeatDelay / resolvedDuration;
				} else if (repeatType === "mirror") frameGenerator = mirroredGenerator;
			}
			elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
		}
		const state$1 = isInDelayPhase ? {
			done: false,
			value: keyframes$1$1[0]
		} : frameGenerator.next(elapsed);
		if (mapNumbersToKeyframes) state$1.value = mapNumbersToKeyframes(state$1.value);
		let { done } = state$1;
		if (!isInDelayPhase && calculatedDuration !== null) done = speed >= 0 ? currentTime >= totalDuration : currentTime <= 0;
		const isAnimationFinished = holdTime === null && (playState === "finished" || playState === "running" && done);
		if (onUpdate) onUpdate(state$1.value);
		if (isAnimationFinished) finish();
		return state$1;
	};
	const stopAnimationDriver = () => {
		animationDriver && animationDriver.stop();
		animationDriver = void 0;
	};
	const cancel = () => {
		playState = "idle";
		stopAnimationDriver();
		resolveFinishedPromise();
		updateFinishedPromise();
		startTime = cancelTime = null;
	};
	const finish = () => {
		playState = "finished";
		onComplete && onComplete();
		stopAnimationDriver();
		resolveFinishedPromise();
	};
	const play = () => {
		if (hasStopped) return;
		if (!animationDriver) animationDriver = driver(tick);
		const now = animationDriver.now();
		onPlay && onPlay();
		if (holdTime !== null) startTime = now - holdTime;
		else if (!startTime || playState === "finished") startTime = now;
		if (playState === "finished") updateFinishedPromise();
		cancelTime = startTime;
		holdTime = null;
		playState = "running";
		animationDriver.start();
	};
	if (autoplay) play();
	const controls = {
		then(resolve, reject) {
			return currentFinishedPromise.then(resolve, reject);
		},
		get time() {
			return millisecondsToSeconds(currentTime);
		},
		set time(newTime) {
			newTime = secondsToMilliseconds(newTime);
			currentTime = newTime;
			if (holdTime !== null || !animationDriver || speed === 0) holdTime = newTime;
			else startTime = animationDriver.now() - newTime / speed;
		},
		get duration() {
			return millisecondsToSeconds(generator.calculatedDuration === null ? calcGeneratorDuration(generator) : generator.calculatedDuration);
		},
		get speed() {
			return speed;
		},
		set speed(newSpeed) {
			if (newSpeed === speed || !animationDriver) return;
			speed = newSpeed;
			controls.time = millisecondsToSeconds(currentTime);
		},
		get state() {
			return playState;
		},
		play,
		pause: () => {
			playState = "paused";
			holdTime = currentTime;
		},
		stop: () => {
			hasStopped = true;
			if (playState === "idle") return;
			playState = "idle";
			onStop && onStop();
			cancel();
		},
		cancel: () => {
			if (cancelTime !== null) tick(cancelTime);
			cancel();
		},
		complete: () => {
			playState = "finished";
		},
		sample: (elapsed) => {
			startTime = 0;
			return tick(elapsed);
		}
	};
	return controls;
}
function memo$1(callback) {
	let result;
	return () => {
		if (result === void 0) result = callback();
		return result;
	};
}
var supportsWaapi = memo$1(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
var acceleratedValues = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform",
	"backgroundColor"
]);
var sampleDelta = 10;
var maxDuration = 2e4;
var requiresPregeneratedKeyframes = (valueName, options) => options.type === "spring" || valueName === "backgroundColor" || !isWaapiSupportedEasing(options.ease);
function createAcceleratedAnimation(value, valueName, { onUpdate, onComplete, ...options }) {
	if (!(supportsWaapi() && acceleratedValues.has(valueName) && !options.repeatDelay && options.repeatType !== "mirror" && options.damping !== 0 && options.type !== "inertia")) return false;
	let hasStopped = false;
	let resolveFinishedPromise;
	let currentFinishedPromise;
	let pendingCancel = false;
	const updateFinishedPromise = () => {
		currentFinishedPromise = new Promise((resolve) => {
			resolveFinishedPromise = resolve;
		});
	};
	updateFinishedPromise();
	let { keyframes: keyframes$3, duration = 300, ease: ease$1, times } = options;
	if (requiresPregeneratedKeyframes(valueName, options)) {
		const sampleAnimation = animateValue({
			...options,
			repeat: 0,
			delay: 0
		});
		let state$1 = {
			done: false,
			value: keyframes$3[0]
		};
		const pregeneratedKeyframes = [];
		let t$4 = 0;
		while (!state$1.done && t$4 < maxDuration) {
			state$1 = sampleAnimation.sample(t$4);
			pregeneratedKeyframes.push(state$1.value);
			t$4 += sampleDelta;
		}
		times = void 0;
		keyframes$3 = pregeneratedKeyframes;
		duration = t$4 - sampleDelta;
		ease$1 = "linear";
	}
	const animation = animateStyle(value.owner.current, valueName, keyframes$3, {
		...options,
		duration,
		ease: ease$1,
		times
	});
	const cancelAnimation = () => {
		pendingCancel = false;
		animation.cancel();
	};
	const safeCancel = () => {
		pendingCancel = true;
		frame.update(cancelAnimation);
		resolveFinishedPromise();
		updateFinishedPromise();
	};
	animation.onfinish = () => {
		if (pendingCancel) return;
		value.set(getFinalKeyframe(keyframes$3, options));
		onComplete && onComplete();
		safeCancel();
	};
	return {
		then(resolve, reject) {
			return currentFinishedPromise.then(resolve, reject);
		},
		attachTimeline(timeline) {
			animation.timeline = timeline;
			animation.onfinish = null;
			return noop;
		},
		get time() {
			return millisecondsToSeconds(animation.currentTime || 0);
		},
		set time(newTime) {
			animation.currentTime = secondsToMilliseconds(newTime);
		},
		get speed() {
			return animation.playbackRate;
		},
		set speed(newSpeed) {
			animation.playbackRate = newSpeed;
		},
		get duration() {
			return millisecondsToSeconds(duration);
		},
		play: () => {
			if (hasStopped) return;
			animation.play();
			cancelFrame(cancelAnimation);
		},
		pause: () => animation.pause(),
		stop: () => {
			hasStopped = true;
			if (animation.playState === "idle") return;
			const { currentTime } = animation;
			if (currentTime) {
				const sampleAnimation = animateValue({
					...options,
					autoplay: false
				});
				value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
			}
			safeCancel();
		},
		complete: () => {
			if (pendingCancel) return;
			animation.finish();
		},
		cancel: safeCancel
	};
}
function createInstantAnimation({ keyframes: keyframes$3, delay: delay$1, onUpdate, onComplete }) {
	const setValue = () => {
		onUpdate && onUpdate(keyframes$3[keyframes$3.length - 1]);
		onComplete && onComplete();
		return {
			time: 0,
			speed: 1,
			duration: 0,
			play: noop,
			pause: noop,
			stop: noop,
			then: (resolve) => {
				resolve();
				return Promise.resolve();
			},
			cancel: noop,
			complete: noop
		};
	};
	return delay$1 ? animateValue({
		keyframes: [0, 1],
		duration: 0,
		delay: delay$1,
		onComplete: setValue
	}) : setValue();
}
var underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
	type: "spring",
	stiffness: 550,
	damping: target === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
});
var keyframesTransition = {
	type: "keyframes",
	duration: .8
};
var ease = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
};
var getDefaultTransition = (valueKey, { keyframes: keyframes$3 }) => {
	if (keyframes$3.length > 2) return keyframesTransition;
	else if (transformProps.has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes$3[1]) : underDampedSpring;
	return ease;
};
var isAnimatable = (key, value) => {
	if (key === "zIndex") return false;
	if (typeof value === "number" || Array.isArray(value)) return true;
	if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) return true;
	return false;
};
var maxDefaults = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(v$4) {
	const [name, value] = v$4.slice(0, -1).split("(");
	if (name === "drop-shadow") return v$4;
	const [number$1] = value.match(floatRegex) || [];
	if (!number$1) return v$4;
	const unit = value.replace(number$1, "");
	let defaultValue = maxDefaults.has(name) ? 1 : 0;
	if (number$1 !== value) defaultValue *= 100;
	return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = {
	...complex,
	getAnimatableNone: (v$4) => {
		const functions = v$4.match(functionRegex);
		return functions ? functions.map(applyDefaultFilter).join(" ") : v$4;
	}
};
var defaultValueTypes = {
	...numberValueTypes,
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter
};
var getDefaultValueType = (key) => defaultValueTypes[key];
function getAnimatableNone(key, value) {
	let defaultValueType = getDefaultValueType(key);
	if (defaultValueType !== filter) defaultValueType = complex;
	return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}
var isZeroValueString = (v$4) => /^0[^.\s]+$/.test(v$4);
function isNone(value) {
	if (typeof value === "number") return value === 0;
	else if (value !== null) return value === "none" || value === "0" || isZeroValueString(value);
}
function getKeyframes(value, valueName, target, transition$2) {
	const isTargetAnimatable = isAnimatable(valueName, target);
	let keyframes$3;
	if (Array.isArray(target)) keyframes$3 = [...target];
	else keyframes$3 = [null, target];
	const defaultOrigin = transition$2.from !== void 0 ? transition$2.from : value.get();
	let animatableTemplateValue = void 0;
	const noneKeyframeIndexes = [];
	for (let i = 0; i < keyframes$3.length; i++) {
		if (keyframes$3[i] === null) keyframes$3[i] = i === 0 ? defaultOrigin : keyframes$3[i - 1];
		if (isNone(keyframes$3[i])) noneKeyframeIndexes.push(i);
		if (typeof keyframes$3[i] === "string" && keyframes$3[i] !== "none" && keyframes$3[i] !== "0") animatableTemplateValue = keyframes$3[i];
	}
	if (isTargetAnimatable && noneKeyframeIndexes.length && animatableTemplateValue) for (let i = 0; i < noneKeyframeIndexes.length; i++) {
		const index$1 = noneKeyframeIndexes[i];
		keyframes$3[index$1] = getAnimatableNone(valueName, animatableTemplateValue);
	}
	return keyframes$3;
}
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from: from$1, elapsed, ...transition$2 }) {
	return !!Object.keys(transition$2).length;
}
function getValueTransition(transition$2, key) {
	return transition$2[key] || transition$2["default"] || transition$2;
}
var MotionGlobalConfig = { skipAnimations: false };
var animateMotionValue = (valueName, value, target, transition$2 = {}) => {
	return (onComplete) => {
		const valueTransition = getValueTransition(transition$2, valueName) || {};
		const delay$1 = valueTransition.delay || transition$2.delay || 0;
		let { elapsed = 0 } = transition$2;
		elapsed = elapsed - secondsToMilliseconds(delay$1);
		const keyframes$3 = getKeyframes(value, valueName, target, valueTransition);
		const originKeyframe = keyframes$3[0];
		const targetKeyframe = keyframes$3[keyframes$3.length - 1];
		const isOriginAnimatable = isAnimatable(valueName, originKeyframe);
		const isTargetAnimatable = isAnimatable(valueName, targetKeyframe);
		warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${valueName} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
		let options = {
			keyframes: keyframes$3,
			velocity: value.getVelocity(),
			ease: "easeOut",
			...valueTransition,
			delay: -elapsed,
			onUpdate: (v$4) => {
				value.set(v$4);
				valueTransition.onUpdate && valueTransition.onUpdate(v$4);
			},
			onComplete: () => {
				onComplete();
				valueTransition.onComplete && valueTransition.onComplete();
			}
		};
		if (!isTransitionDefined(valueTransition)) options = {
			...options,
			...getDefaultTransition(valueName, options)
		};
		if (options.duration) options.duration = secondsToMilliseconds(options.duration);
		if (options.repeatDelay) options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
		if (!isOriginAnimatable || !isTargetAnimatable || instantAnimationState.current || valueTransition.type === false || MotionGlobalConfig.skipAnimations) return createInstantAnimation(instantAnimationState.current ? {
			...options,
			delay: 0
		} : options);
		if (!transition$2.isHandoff && value.owner && value.owner.current instanceof HTMLElement && !value.owner.getProps().onUpdate) {
			const acceleratedAnimation = createAcceleratedAnimation(value, valueName, options);
			if (acceleratedAnimation) return acceleratedAnimation;
		}
		return animateValue(options);
	};
};
function isWillChangeMotionValue(value) {
	return Boolean(isMotionValue(value) && value.add);
}
var isNumericalString = (v$4) => /^\-?\d*\.?\d+$/.test(v$4);
function addUniqueItem(arr, item) {
	if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
	const index$1 = arr.indexOf(item);
	if (index$1 > -1) arr.splice(index$1, 1);
}
var SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(handler) {
		addUniqueItem(this.subscriptions, handler);
		return () => removeItem(this.subscriptions, handler);
	}
	notify(a, b$1, c$1) {
		const numSubscriptions = this.subscriptions.length;
		if (!numSubscriptions) return;
		if (numSubscriptions === 1) this.subscriptions[0](a, b$1, c$1);
		else for (let i = 0; i < numSubscriptions; i++) {
			const handler = this.subscriptions[i];
			handler && handler(a, b$1, c$1);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
};
var isFloat = (value) => {
	return !isNaN(parseFloat(value));
};
var collectMotionValues = { current: void 0 };
var MotionValue = class {
	constructor(init, options = {}) {
		this.version = "10.18.0";
		this.timeDelta = 0;
		this.lastUpdated = 0;
		this.canTrackVelocity = false;
		this.events = {};
		this.updateAndNotify = (v$4, render = true) => {
			this.prev = this.current;
			this.current = v$4;
			const { delta, timestamp } = frameData;
			if (this.lastUpdated !== timestamp) {
				this.timeDelta = delta;
				this.lastUpdated = timestamp;
				frame.postRender(this.scheduleVelocityCheck);
			}
			if (this.prev !== this.current && this.events.change) this.events.change.notify(this.current);
			if (this.events.velocityChange) this.events.velocityChange.notify(this.getVelocity());
			if (render && this.events.renderRequest) this.events.renderRequest.notify(this.current);
		};
		this.scheduleVelocityCheck = () => frame.postRender(this.velocityCheck);
		this.velocityCheck = ({ timestamp }) => {
			if (timestamp !== this.lastUpdated) {
				this.prev = this.current;
				if (this.events.velocityChange) this.events.velocityChange.notify(this.getVelocity());
			}
		};
		this.hasAnimated = false;
		this.prev = this.current = init;
		this.canTrackVelocity = isFloat(this.current);
		this.owner = options.owner;
	}
	onChange(subscription) {
		return this.on("change", subscription);
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		const unsubscribe = this.events[eventName].add(callback);
		if (eventName === "change") return () => {
			unsubscribe();
			frame.read(() => {
				if (!this.events.change.getSize()) this.stop();
			});
		};
		return unsubscribe;
	}
	clearListeners() {
		for (const eventManagers in this.events) this.events[eventManagers].clear();
	}
	attach(passiveEffect, stopPassiveEffect) {
		this.passiveEffect = passiveEffect;
		this.stopPassiveEffect = stopPassiveEffect;
	}
	set(v$4, render = true) {
		if (!render || !this.passiveEffect) this.updateAndNotify(v$4, render);
		else this.passiveEffect(v$4, this.updateAndNotify);
	}
	setWithVelocity(prev$1, current, delta) {
		this.set(current);
		this.prev = prev$1;
		this.timeDelta = delta;
	}
	jump(v$4) {
		this.updateAndNotify(v$4);
		this.prev = v$4;
		this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
	get() {
		if (collectMotionValues.current) collectMotionValues.current.push(this);
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
	}
	start(startAnimation) {
		this.stop();
		return new Promise((resolve) => {
			this.hasAnimated = true;
			this.animation = startAnimation(resolve);
			if (this.events.animationStart) this.events.animationStart.notify();
		}).then(() => {
			if (this.events.animationComplete) this.events.animationComplete.notify();
			this.clearAnimation();
		});
	}
	stop() {
		if (this.animation) {
			this.animation.stop();
			if (this.events.animationCancel) this.events.animationCancel.notify();
		}
		this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.clearListeners();
		this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
};
function motionValue(init, options) {
	return new MotionValue(init, options);
}
var testValueType = (v$4) => (type) => type.test(v$4);
var dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh$1,
	{
		test: (v$4) => v$4 === "auto",
		parse: (v$4) => v$4
	}
];
var findDimensionValueType = (v$4) => dimensionValueTypes.find(testValueType(v$4));
var valueTypes = [
	...dimensionValueTypes,
	color,
	complex
];
var findValueType = (v$4) => valueTypes.find(testValueType(v$4));
function setMotionValue(visualElement, key, value) {
	if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
	else visualElement.addValue(key, motionValue(value));
}
function setTarget(visualElement, definition) {
	const resolved = resolveVariant(visualElement, definition);
	let { transitionEnd = {}, transition: transition$2 = {}, ...target } = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {};
	target = {
		...target,
		...transitionEnd
	};
	for (const key in target) setMotionValue(visualElement, key, resolveFinalValueInKeyframes(target[key]));
}
function checkTargetForNewValues(visualElement, target, origin) {
	var _a, _b;
	const newValueKeys = Object.keys(target).filter((key) => !visualElement.hasValue(key));
	const numNewValues = newValueKeys.length;
	if (!numNewValues) return;
	for (let i = 0; i < numNewValues; i++) {
		const key = newValueKeys[i];
		const targetValue = target[key];
		let value = null;
		if (Array.isArray(targetValue)) value = targetValue[0];
		if (value === null) value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
		if (value === void 0 || value === null) continue;
		if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) value = parseFloat(value);
		else if (!findValueType(value) && complex.test(targetValue)) value = getAnimatableNone(key, targetValue);
		visualElement.addValue(key, motionValue(value, { owner: visualElement }));
		if (origin[key] === void 0) origin[key] = value;
		if (value !== null) visualElement.setBaseTarget(key, value);
	}
}
function getOriginFromTransition(key, transition$2) {
	if (!transition$2) return;
	return (transition$2[key] || transition$2["default"] || transition$2).from;
}
function getOrigin(target, transition$2, visualElement) {
	const origin = {};
	for (const key in target) {
		const transitionOrigin = getOriginFromTransition(key, transition$2);
		if (transitionOrigin !== void 0) origin[key] = transitionOrigin;
		else {
			const value = visualElement.getValue(key);
			if (value) origin[key] = value.get();
		}
	}
	return origin;
}
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
	const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
	needsAnimating[key] = false;
	return shouldBlock;
}
function hasKeyframesChanged(value, target) {
	const current = value.get();
	if (Array.isArray(target)) {
		for (let i = 0; i < target.length; i++) if (target[i] !== current) return true;
	} else return current !== target;
}
function animateTarget(visualElement, definition, { delay: delay$1 = 0, transitionOverride, type } = {}) {
	let { transition: transition$2 = visualElement.getDefaultTransition(), transitionEnd, ...target } = visualElement.makeTargetAnimatable(definition);
	const willChange = visualElement.getValue("willChange");
	if (transitionOverride) transition$2 = transitionOverride;
	const animations$1 = [];
	const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
	for (const key in target) {
		const value = visualElement.getValue(key);
		const valueTarget = target[key];
		if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
		const valueTransition = {
			delay: delay$1,
			elapsed: 0,
			...getValueTransition(transition$2 || {}, key)
		};
		if (window.HandoffAppearAnimations) {
			const appearId = visualElement.getProps()[optimizedAppearDataAttribute];
			if (appearId) {
				const elapsed = window.HandoffAppearAnimations(appearId, key, value, frame);
				if (elapsed !== null) {
					valueTransition.elapsed = elapsed;
					valueTransition.isHandoff = true;
				}
			}
		}
		let canSkip = !valueTransition.isHandoff && !hasKeyframesChanged(value, valueTarget);
		if (valueTransition.type === "spring" && (value.getVelocity() || valueTransition.velocity)) canSkip = false;
		if (value.animation) canSkip = false;
		if (canSkip) continue;
		value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key) ? { type: false } : valueTransition));
		const animation = value.animation;
		if (isWillChangeMotionValue(willChange)) {
			willChange.add(key);
			animation.then(() => willChange.remove(key));
		}
		animations$1.push(animation);
	}
	if (transitionEnd) Promise.all(animations$1).then(() => {
		transitionEnd && setTarget(visualElement, transitionEnd);
	});
	return animations$1;
}
function animateVariant(visualElement, variant, options = {}) {
	const resolved = resolveVariant(visualElement, variant, options.custom);
	let { transition: transition$2 = visualElement.getDefaultTransition() || {} } = resolved || {};
	if (options.transitionOverride) transition$2 = options.transitionOverride;
	const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
	const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
		const { delayChildren = 0, staggerChildren, staggerDirection } = transition$2;
		return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
	} : () => Promise.resolve();
	const { when } = transition$2;
	if (when) {
		const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
		return first().then(() => last());
	} else return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
	const animations$1 = [];
	const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
	const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
	Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
		child.notify("AnimationStart", variant);
		animations$1.push(animateVariant(child, variant, {
			...options,
			delay: delayChildren + generateStaggerDuration(i)
		}).then(() => child.notify("AnimationComplete", variant)));
	});
	return Promise.all(animations$1);
}
function sortByTreeOrder(a, b$1) {
	return a.sortNodePosition(b$1);
}
function animateVisualElement(visualElement, definition, options = {}) {
	visualElement.notify("AnimationStart", definition);
	let animation;
	if (Array.isArray(definition)) {
		const animations$1 = definition.map((variant) => animateVariant(visualElement, variant, options));
		animation = Promise.all(animations$1);
	} else if (typeof definition === "string") animation = animateVariant(visualElement, definition, options);
	else {
		const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
		animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
	}
	return animation.then(() => visualElement.notify("AnimationComplete", definition));
}
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
	return (animations$1) => Promise.all(animations$1.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
	let animate = animateList(visualElement);
	const state$1 = createState();
	let isInitialRender = true;
	const buildResolvedTypeValues = (acc, definition) => {
		const resolved = resolveVariant(visualElement, definition);
		if (resolved) {
			const { transition: transition$2, transitionEnd, ...target } = resolved;
			acc = {
				...acc,
				...target,
				...transitionEnd
			};
		}
		return acc;
	};
	function setAnimateFunction(makeAnimator) {
		animate = makeAnimator(visualElement);
	}
	function animateChanges(options, changedActiveType) {
		const props = visualElement.getProps();
		const context = visualElement.getVariantContext(true) || {};
		const animations$1 = [];
		const removedKeys = /* @__PURE__ */ new Set();
		let encounteredKeys = {};
		let removedVariantIndex = Infinity;
		for (let i = 0; i < numAnimationTypes; i++) {
			const type = reversePriorityOrder[i];
			const typeState = state$1[type];
			const prop = props[type] !== void 0 ? props[type] : context[type];
			const propIsVariant = isVariantLabel(prop);
			const activeDelta = type === changedActiveType ? typeState.isActive : null;
			if (activeDelta === false) removedVariantIndex = i;
			let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
			if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) isInherited = false;
			typeState.protectedKeys = { ...encounteredKeys };
			if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") continue;
			let shouldAnimateType = checkVariantsDidChange(typeState.prevProp, prop) || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
			let handledRemovedValues = false;
			const definitionList = Array.isArray(prop) ? prop : [prop];
			let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
			if (activeDelta === false) resolvedValues = {};
			const { prevResolvedValues = {} } = typeState;
			const allKeys = {
				...prevResolvedValues,
				...resolvedValues
			};
			const markToAnimate = (key) => {
				shouldAnimateType = true;
				if (removedKeys.has(key)) {
					handledRemovedValues = true;
					removedKeys.delete(key);
				}
				typeState.needsAnimating[key] = true;
			};
			for (const key in allKeys) {
				const next$1 = resolvedValues[key];
				const prev$1 = prevResolvedValues[key];
				if (encounteredKeys.hasOwnProperty(key)) continue;
				let valueHasChanged = false;
				if (isKeyframesTarget(next$1) && isKeyframesTarget(prev$1)) valueHasChanged = !shallowCompare(next$1, prev$1);
				else valueHasChanged = next$1 !== prev$1;
				if (valueHasChanged) if (next$1 !== void 0) markToAnimate(key);
				else removedKeys.add(key);
				else if (next$1 !== void 0 && removedKeys.has(key)) markToAnimate(key);
				else typeState.protectedKeys[key] = true;
			}
			typeState.prevProp = prop;
			typeState.prevResolvedValues = resolvedValues;
			if (typeState.isActive) encounteredKeys = {
				...encounteredKeys,
				...resolvedValues
			};
			if (isInitialRender && visualElement.blockInitialAnimation) shouldAnimateType = false;
			if (shouldAnimateType && (!isInherited || handledRemovedValues)) animations$1.push(...definitionList.map((animation) => ({
				animation,
				options: {
					type,
					...options
				}
			})));
		}
		if (removedKeys.size) {
			const fallbackAnimation = {};
			removedKeys.forEach((key) => {
				const fallbackTarget = visualElement.getBaseTarget(key);
				if (fallbackTarget !== void 0) fallbackAnimation[key] = fallbackTarget;
			});
			animations$1.push({ animation: fallbackAnimation });
		}
		let shouldAnimate = Boolean(animations$1.length);
		if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) shouldAnimate = false;
		isInitialRender = false;
		return shouldAnimate ? animate(animations$1) : Promise.resolve();
	}
	function setActive(type, isActive, options) {
		var _a;
		if (state$1[type].isActive === isActive) return Promise.resolve();
		(_a = visualElement.variantChildren) === null || _a === void 0 || _a.forEach((child) => {
			var _a$1;
			return (_a$1 = child.animationState) === null || _a$1 === void 0 ? void 0 : _a$1.setActive(type, isActive);
		});
		state$1[type].isActive = isActive;
		const animations$1 = animateChanges(options, type);
		for (const key in state$1) state$1[key].protectedKeys = {};
		return animations$1;
	}
	return {
		animateChanges,
		setActive,
		setAnimateFunction,
		getState: () => state$1
	};
}
function checkVariantsDidChange(prev$1, next$1) {
	if (typeof next$1 === "string") return next$1 !== prev$1;
	else if (Array.isArray(next$1)) return !shallowCompare(next$1, prev$1);
	return false;
}
function createTypeState(isActive = false) {
	return {
		isActive,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function createState() {
	return {
		animate: createTypeState(true),
		whileInView: createTypeState(),
		whileHover: createTypeState(),
		whileTap: createTypeState(),
		whileDrag: createTypeState(),
		whileFocus: createTypeState(),
		exit: createTypeState()
	};
}
var AnimationFeature = class extends Feature {
	constructor(node$1) {
		super(node$1);
		node$1.animationState || (node$1.animationState = createAnimationState(node$1));
	}
	updateAnimationControlsSubscription() {
		const { animate } = this.node.getProps();
		this.unmount();
		if (isAnimationControls(animate)) this.unmount = animate.subscribe(this.node);
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate } = this.node.getProps();
		const { animate: prevAnimate } = this.node.prevProps || {};
		if (animate !== prevAnimate) this.updateAnimationControlsSubscription();
	}
	unmount() {}
};
var id$2 = 0;
var ExitAnimationFeature = class extends Feature {
	constructor() {
		super(...arguments);
		this.id = id$2++;
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent: isPresent$1, onExitComplete, custom } = this.node.presenceContext;
		const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || isPresent$1 === prevIsPresent) return;
		const exitAnimation = this.node.animationState.setActive("exit", !isPresent$1, { custom: custom !== null && custom !== void 0 ? custom : this.node.getProps().custom });
		if (onExitComplete && !isPresent$1) exitAnimation.then(() => onExitComplete(this.id));
	}
	mount() {
		const { register } = this.node.presenceContext || {};
		if (register) this.unmount = register(this.id);
	}
	unmount() {}
};
var animations = {
	animation: { Feature: AnimationFeature },
	exit: { Feature: ExitAnimationFeature }
};
var distance = (a, b$1) => Math.abs(a - b$1);
function distance2D(a, b$1) {
	const xDelta = distance(a.x, b$1.x);
	const yDelta = distance(a.y, b$1.y);
	return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}
var PanSession = class {
	constructor(event, handlers, { transformPagePoint, contextWindow, dragSnapToOrigin = false } = {}) {
		this.startEvent = null;
		this.lastMoveEvent = null;
		this.lastMoveEventInfo = null;
		this.handlers = {};
		this.contextWindow = window;
		this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			const info = getPanInfo(this.lastMoveEventInfo, this.history);
			const isPanStarted = this.startEvent !== null;
			const isDistancePastThreshold = distance2D(info.offset, {
				x: 0,
				y: 0
			}) >= 3;
			if (!isPanStarted && !isDistancePastThreshold) return;
			const { point: point$1 } = info;
			const { timestamp: timestamp$1 } = frameData;
			this.history.push({
				...point$1,
				timestamp: timestamp$1
			});
			const { onStart, onMove } = this.handlers;
			if (!isPanStarted) {
				onStart && onStart(this.lastMoveEvent, info);
				this.startEvent = this.lastMoveEvent;
			}
			onMove && onMove(this.lastMoveEvent, info);
		};
		this.handlePointerMove = (event$1, info) => {
			this.lastMoveEvent = event$1;
			this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
			frame.update(this.updatePoint, true);
		};
		this.handlePointerUp = (event$1, info) => {
			this.end();
			const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
			if (this.dragSnapToOrigin) resumeAnimation && resumeAnimation();
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			const panInfo = getPanInfo(event$1.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info, this.transformPagePoint), this.history);
			if (this.startEvent && onEnd) onEnd(event$1, panInfo);
			onSessionEnd && onSessionEnd(event$1, panInfo);
		};
		if (!isPrimaryPointer(event)) return;
		this.dragSnapToOrigin = dragSnapToOrigin;
		this.handlers = handlers;
		this.transformPagePoint = transformPagePoint;
		this.contextWindow = contextWindow || window;
		const initialInfo = transformPoint(extractEventInfo(event), this.transformPagePoint);
		const { point } = initialInfo;
		const { timestamp } = frameData;
		this.history = [{
			...point,
			timestamp
		}];
		const { onSessionStart } = handlers;
		onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
		this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
	}
	updateHandlers(handlers) {
		this.handlers = handlers;
	}
	end() {
		this.removeListeners && this.removeListeners();
		cancelFrame(this.updatePoint);
	}
};
function transformPoint(info, transformPagePoint) {
	return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b$1) {
	return {
		x: a.x - b$1.x,
		y: a.y - b$1.y
	};
}
function getPanInfo({ point }, history) {
	return {
		point,
		delta: subtractPoint(point, lastDevicePoint(history)),
		offset: subtractPoint(point, startDevicePoint(history)),
		velocity: getVelocity(history, .1)
	};
}
function startDevicePoint(history) {
	return history[0];
}
function lastDevicePoint(history) {
	return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
	if (history.length < 2) return {
		x: 0,
		y: 0
	};
	let i = history.length - 1;
	let timestampedPoint = null;
	const lastPoint = lastDevicePoint(history);
	while (i >= 0) {
		timestampedPoint = history[i];
		if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) break;
		i--;
	}
	if (!timestampedPoint) return {
		x: 0,
		y: 0
	};
	const time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
	if (time === 0) return {
		x: 0,
		y: 0
	};
	const currentVelocity = {
		x: (lastPoint.x - timestampedPoint.x) / time,
		y: (lastPoint.y - timestampedPoint.y) / time
	};
	if (currentVelocity.x === Infinity) currentVelocity.x = 0;
	if (currentVelocity.y === Infinity) currentVelocity.y = 0;
	return currentVelocity;
}
function calcLength(axis) {
	return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = .01) {
	return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = .5) {
	delta.origin = origin;
	delta.originPoint = mix(source.min, source.max, delta.origin);
	delta.scale = calcLength(target) / calcLength(source);
	if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale)) delta.scale = 1;
	delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
	if (isNear(delta.translate) || isNaN(delta.translate)) delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
	calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
	calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent) {
	target.min = parent.min + relative.min;
	target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
	calcRelativeAxis(target.x, relative.x, parent.x);
	calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout$2, parent) {
	target.min = layout$2.min - parent.min;
	target.max = target.min + calcLength(layout$2);
}
function calcRelativePosition(target, layout$2, parent) {
	calcRelativeAxisPosition(target.x, layout$2.x, parent.x);
	calcRelativeAxisPosition(target.y, layout$2.y, parent.y);
}
function applyConstraints(point, { min: min$1, max: max$1 }, elastic) {
	if (min$1 !== void 0 && point < min$1) point = elastic ? mix(min$1, point, elastic.min) : Math.max(point, min$1);
	else if (max$1 !== void 0 && point > max$1) point = elastic ? mix(max$1, point, elastic.max) : Math.min(point, max$1);
	return point;
}
function calcRelativeAxisConstraints(axis, min$1, max$1) {
	return {
		min: min$1 !== void 0 ? axis.min + min$1 : void 0,
		max: max$1 !== void 0 ? axis.max + max$1 - (axis.max - axis.min) : void 0
	};
}
function calcRelativeConstraints(layoutBox, { top: top$1, left: left$1, bottom: bottom$1, right: right$1 }) {
	return {
		x: calcRelativeAxisConstraints(layoutBox.x, left$1, right$1),
		y: calcRelativeAxisConstraints(layoutBox.y, top$1, bottom$1)
	};
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
	let min$1 = constraintsAxis.min - layoutAxis.min;
	let max$1 = constraintsAxis.max - layoutAxis.max;
	if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) [min$1, max$1] = [max$1, min$1];
	return {
		min: min$1,
		max: max$1
	};
}
function calcViewportConstraints(layoutBox, constraintsBox) {
	return {
		x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
		y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
	};
}
function calcOrigin(source, target) {
	let origin = .5;
	const sourceLength = calcLength(source);
	const targetLength = calcLength(target);
	if (targetLength > sourceLength) origin = progress(target.min, target.max - sourceLength, source.min);
	else if (sourceLength > targetLength) origin = progress(source.min, source.max - targetLength, target.min);
	return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout$2, constraints) {
	const relativeConstraints = {};
	if (constraints.min !== void 0) relativeConstraints.min = constraints.min - layout$2.min;
	if (constraints.max !== void 0) relativeConstraints.max = constraints.max - layout$2.min;
	return relativeConstraints;
}
var defaultElastic = .35;
function resolveDragElastic(dragElastic = defaultElastic) {
	if (dragElastic === false) dragElastic = 0;
	else if (dragElastic === true) dragElastic = defaultElastic;
	return {
		x: resolveAxisElastic(dragElastic, "left", "right"),
		y: resolveAxisElastic(dragElastic, "top", "bottom")
	};
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
	return {
		min: resolvePointElastic(dragElastic, minLabel),
		max: resolvePointElastic(dragElastic, maxLabel)
	};
}
function resolvePointElastic(dragElastic, label) {
	return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}
var createAxisDelta = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
});
var createDelta = () => ({
	x: createAxisDelta(),
	y: createAxisDelta()
});
var createAxis = () => ({
	min: 0,
	max: 0
});
var createBox = () => ({
	x: createAxis(),
	y: createAxis()
});
function eachAxis(callback) {
	return [callback("x"), callback("y")];
}
function convertBoundingBoxToBox({ top: top$1, left: left$1, right: right$1, bottom: bottom$1 }) {
	return {
		x: {
			min: left$1,
			max: right$1
		},
		y: {
			min: top$1,
			max: bottom$1
		}
	};
}
function convertBoxToBoundingBox({ x: x$2, y: y$3 }) {
	return {
		top: y$3.min,
		right: x$2.max,
		bottom: y$3.max,
		left: x$2.min
	};
}
function transformBoxPoints(point, transformPoint$1) {
	if (!transformPoint$1) return point;
	const topLeft = transformPoint$1({
		x: point.left,
		y: point.top
	});
	const bottomRight = transformPoint$1({
		x: point.right,
		y: point.bottom
	});
	return {
		top: topLeft.y,
		left: topLeft.x,
		bottom: bottomRight.y,
		right: bottomRight.x
	};
}
function isIdentityScale(scale$2) {
	return scale$2 === void 0 || scale$2 === 1;
}
function hasScale({ scale: scale$2, scaleX, scaleY }) {
	return !isIdentityScale(scale$2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
	return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function has2DTranslate(values) {
	return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
	return value && value !== "0%";
}
function scalePoint(point, scale$2, originPoint) {
	return originPoint + scale$2 * (point - originPoint);
}
function applyPointDelta(point, translate, scale$2, originPoint, boxScale) {
	if (boxScale !== void 0) point = scalePoint(point, boxScale, originPoint);
	return scalePoint(point, scale$2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale$2 = 1, originPoint, boxScale) {
	axis.min = applyPointDelta(axis.min, translate, scale$2, originPoint, boxScale);
	axis.max = applyPointDelta(axis.max, translate, scale$2, originPoint, boxScale);
}
function applyBoxDelta(box, { x: x$2, y: y$3 }) {
	applyAxisDelta(box.x, x$2.translate, x$2.scale, x$2.originPoint);
	applyAxisDelta(box.y, y$3.translate, y$3.scale, y$3.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
	const treeLength = treePath.length;
	if (!treeLength) return;
	treeScale.x = treeScale.y = 1;
	let node$1;
	let delta;
	for (let i = 0; i < treeLength; i++) {
		node$1 = treePath[i];
		delta = node$1.projectionDelta;
		const instance = node$1.instance;
		if (instance && instance.style && instance.style.display === "contents") continue;
		if (isSharedTransition && node$1.options.layoutScroll && node$1.scroll && node$1 !== node$1.root) transformBox(box, {
			x: -node$1.scroll.offset.x,
			y: -node$1.scroll.offset.y
		});
		if (delta) {
			treeScale.x *= delta.x.scale;
			treeScale.y *= delta.y.scale;
			applyBoxDelta(box, delta);
		}
		if (isSharedTransition && hasTransform(node$1.latestValues)) transformBox(box, node$1.latestValues);
	}
	treeScale.x = snapToDefault(treeScale.x);
	treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale$2) {
	if (Number.isInteger(scale$2)) return scale$2;
	return scale$2 > 1.0000000000001 || scale$2 < .999999999999 ? scale$2 : 1;
}
function translateAxis(axis, distance$1) {
	axis.min = axis.min + distance$1;
	axis.max = axis.max + distance$1;
}
function transformAxis(axis, transforms$1, [key, scaleKey, originKey]) {
	const axisOrigin = transforms$1[originKey] !== void 0 ? transforms$1[originKey] : .5;
	const originPoint = mix(axis.min, axis.max, axisOrigin);
	applyAxisDelta(axis, transforms$1[key], transforms$1[scaleKey], originPoint, transforms$1.scale);
}
var xKeys$1 = [
	"x",
	"scaleX",
	"originX"
];
var yKeys$1 = [
	"y",
	"scaleY",
	"originY"
];
function transformBox(box, transform$1) {
	transformAxis(box.x, transform$1, xKeys$1);
	transformAxis(box.y, transform$1, yKeys$1);
}
function measureViewportBox(instance, transformPoint$1) {
	return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint$1));
}
function measurePageBox(element, rootProjectionNode$1, transformPagePoint) {
	const viewportBox = measureViewportBox(element, transformPagePoint);
	const { scroll: scroll$1 } = rootProjectionNode$1;
	if (scroll$1) {
		translateAxis(viewportBox.x, scroll$1.offset.x);
		translateAxis(viewportBox.y, scroll$1.offset.y);
	}
	return viewportBox;
}
var getContextWindow = ({ current }) => {
	return current ? current.ownerDocument.defaultView : null;
};
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
	constructor(visualElement) {
		this.openGlobalLock = null;
		this.isDragging = false;
		this.currentDirection = null;
		this.originPoint = {
			x: 0,
			y: 0
		};
		this.constraints = false;
		this.hasMutatedConstraints = false;
		this.elastic = createBox();
		this.visualElement = visualElement;
	}
	start(originEvent, { snapToCursor = false } = {}) {
		const { presenceContext } = this.visualElement;
		if (presenceContext && presenceContext.isPresent === false) return;
		const onSessionStart = (event) => {
			const { dragSnapToOrigin: dragSnapToOrigin$1 } = this.getProps();
			dragSnapToOrigin$1 ? this.pauseAnimation() : this.stopAnimation();
			if (snapToCursor) this.snapToCursor(extractEventInfo(event, "page").point);
		};
		const onStart = (event, info) => {
			const { drag: drag$1, dragPropagation, onDragStart } = this.getProps();
			if (drag$1 && !dragPropagation) {
				if (this.openGlobalLock) this.openGlobalLock();
				this.openGlobalLock = getGlobalLock(drag$1);
				if (!this.openGlobalLock) return;
			}
			this.isDragging = true;
			this.currentDirection = null;
			this.resolveConstraints();
			if (this.visualElement.projection) {
				this.visualElement.projection.isAnimationBlocked = true;
				this.visualElement.projection.target = void 0;
			}
			eachAxis((axis) => {
				let current = this.getAxisMotionValue(axis).get() || 0;
				if (percent.test(current)) {
					const { projection } = this.visualElement;
					if (projection && projection.layout) {
						const measuredAxis = projection.layout.layoutBox[axis];
						if (measuredAxis) current = calcLength(measuredAxis) * (parseFloat(current) / 100);
					}
				}
				this.originPoint[axis] = current;
			});
			if (onDragStart) frame.update(() => onDragStart(event, info), false, true);
			const { animationState } = this.visualElement;
			animationState && animationState.setActive("whileDrag", true);
		};
		const onMove = (event, info) => {
			const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
			if (!dragPropagation && !this.openGlobalLock) return;
			const { offset: offset$1 } = info;
			if (dragDirectionLock && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(offset$1);
				if (this.currentDirection !== null) onDirectionLock && onDirectionLock(this.currentDirection);
				return;
			}
			this.updateAxis("x", info.point, offset$1);
			this.updateAxis("y", info.point, offset$1);
			this.visualElement.render();
			onDrag && onDrag(event, info);
		};
		const onSessionEnd = (event, info) => this.stop(event, info);
		const resumeAnimation = () => eachAxis((axis) => {
			var _a;
			return this.getAnimationState(axis) === "paused" && ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
		});
		const { dragSnapToOrigin } = this.getProps();
		this.panSession = new PanSession(originEvent, {
			onSessionStart,
			onStart,
			onMove,
			onSessionEnd,
			resumeAnimation
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin,
			contextWindow: getContextWindow(this.visualElement)
		});
	}
	stop(event, info) {
		const isDragging = this.isDragging;
		this.cancel();
		if (!isDragging) return;
		const { velocity } = info;
		this.startAnimation(velocity);
		const { onDragEnd } = this.getProps();
		if (onDragEnd) frame.update(() => onDragEnd(event, info));
	}
	cancel() {
		this.isDragging = false;
		const { projection, animationState } = this.visualElement;
		if (projection) projection.isAnimationBlocked = false;
		this.panSession && this.panSession.end();
		this.panSession = void 0;
		const { dragPropagation } = this.getProps();
		if (!dragPropagation && this.openGlobalLock) {
			this.openGlobalLock();
			this.openGlobalLock = null;
		}
		animationState && animationState.setActive("whileDrag", false);
	}
	updateAxis(axis, _point, offset$1) {
		const { drag: drag$1 } = this.getProps();
		if (!offset$1 || !shouldDrag(axis, drag$1, this.currentDirection)) return;
		const axisValue = this.getAxisMotionValue(axis);
		let next$1 = this.originPoint[axis] + offset$1[axis];
		if (this.constraints && this.constraints[axis]) next$1 = applyConstraints(next$1, this.constraints[axis], this.elastic[axis]);
		axisValue.set(next$1);
	}
	resolveConstraints() {
		var _a;
		const { dragConstraints, dragElastic } = this.getProps();
		const layout$2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
		const prevConstraints = this.constraints;
		if (dragConstraints && isRefObject(dragConstraints)) {
			if (!this.constraints) this.constraints = this.resolveRefConstraints();
		} else if (dragConstraints && layout$2) this.constraints = calcRelativeConstraints(layout$2.layoutBox, dragConstraints);
		else this.constraints = false;
		this.elastic = resolveDragElastic(dragElastic);
		if (prevConstraints !== this.constraints && layout$2 && this.constraints && !this.hasMutatedConstraints) eachAxis((axis) => {
			if (this.getAxisMotionValue(axis)) this.constraints[axis] = rebaseAxisConstraints(layout$2.layoutBox[axis], this.constraints[axis]);
		});
	}
	resolveRefConstraints() {
		const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
		if (!constraints || !isRefObject(constraints)) return false;
		const constraintsElement = constraints.current;
		invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
		const { projection } = this.visualElement;
		if (!projection || !projection.layout) return false;
		const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
		let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
		if (onMeasureDragConstraints) {
			const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
			this.hasMutatedConstraints = !!userConstraints;
			if (userConstraints) measuredConstraints = convertBoundingBoxToBox(userConstraints);
		}
		return measuredConstraints;
	}
	startAnimation(velocity) {
		const { drag: drag$1, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
		const constraints = this.constraints || {};
		const momentumAnimations = eachAxis((axis) => {
			if (!shouldDrag(axis, drag$1, this.currentDirection)) return;
			let transition$2 = constraints && constraints[axis] || {};
			if (dragSnapToOrigin) transition$2 = {
				min: 0,
				max: 0
			};
			const bounceStiffness = dragElastic ? 200 : 1e6;
			const bounceDamping = dragElastic ? 40 : 1e7;
			const inertia$1 = {
				type: "inertia",
				velocity: dragMomentum ? velocity[axis] : 0,
				bounceStiffness,
				bounceDamping,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...dragTransition,
				...transition$2
			};
			return this.startAxisValueAnimation(axis, inertia$1);
		});
		return Promise.all(momentumAnimations).then(onDragTransitionEnd);
	}
	startAxisValueAnimation(axis, transition$2) {
		const axisValue = this.getAxisMotionValue(axis);
		return axisValue.start(animateMotionValue(axis, axisValue, 0, transition$2));
	}
	stopAnimation() {
		eachAxis((axis) => this.getAxisMotionValue(axis).stop());
	}
	pauseAnimation() {
		eachAxis((axis) => {
			var _a;
			return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
		});
	}
	getAnimationState(axis) {
		var _a;
		return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
	}
	getAxisMotionValue(axis) {
		const dragKey = "_drag" + axis.toUpperCase();
		const props = this.visualElement.getProps();
		const externalMotionValue = props[dragKey];
		return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
	}
	snapToCursor(point) {
		eachAxis((axis) => {
			const { drag: drag$1 } = this.getProps();
			if (!shouldDrag(axis, drag$1, this.currentDirection)) return;
			const { projection } = this.visualElement;
			const axisValue = this.getAxisMotionValue(axis);
			if (projection && projection.layout) {
				const { min: min$1, max: max$1 } = projection.layout.layoutBox[axis];
				axisValue.set(point[axis] - mix(min$1, max$1, .5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: drag$1, dragConstraints } = this.getProps();
		const { projection } = this.visualElement;
		if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
		this.stopAnimation();
		const boxProgress = {
			x: 0,
			y: 0
		};
		eachAxis((axis) => {
			const axisValue = this.getAxisMotionValue(axis);
			if (axisValue) {
				const latest = axisValue.get();
				boxProgress[axis] = calcOrigin({
					min: latest,
					max: latest
				}, this.constraints[axis]);
			}
		});
		const { transformTemplate: transformTemplate$1 } = this.visualElement.getProps();
		this.visualElement.current.style.transform = transformTemplate$1 ? transformTemplate$1({}, "") : "none";
		projection.root && projection.root.updateScroll();
		projection.updateLayout();
		this.resolveConstraints();
		eachAxis((axis) => {
			if (!shouldDrag(axis, drag$1, null)) return;
			const axisValue = this.getAxisMotionValue(axis);
			const { min: min$1, max: max$1 } = this.constraints[axis];
			axisValue.set(mix(min$1, max$1, boxProgress[axis]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		const element = this.visualElement.current;
		const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
			const { drag: drag$1, dragListener = true } = this.getProps();
			drag$1 && dragListener && this.start(event);
		});
		const measureDragConstraints = () => {
			const { dragConstraints } = this.getProps();
			if (isRefObject(dragConstraints)) this.constraints = this.resolveRefConstraints();
		};
		const { projection } = this.visualElement;
		const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
		if (projection && !projection.layout) {
			projection.root && projection.root.updateScroll();
			projection.updateLayout();
		}
		measureDragConstraints();
		const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
		const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
			if (this.isDragging && hasLayoutChanged) {
				eachAxis((axis) => {
					const motionValue$1 = this.getAxisMotionValue(axis);
					if (!motionValue$1) return;
					this.originPoint[axis] += delta[axis].translate;
					motionValue$1.set(motionValue$1.get() + delta[axis].translate);
				});
				this.visualElement.render();
			}
		}));
		return () => {
			stopResizeListener();
			stopPointerListener();
			stopMeasureLayoutListener();
			stopLayoutUpdateListener && stopLayoutUpdateListener();
		};
	}
	getProps() {
		const props = this.visualElement.getProps();
		const { drag: drag$1 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
		return {
			...props,
			drag: drag$1,
			dragDirectionLock,
			dragPropagation,
			dragConstraints,
			dragElastic,
			dragMomentum
		};
	}
};
function shouldDrag(direction$1, drag$1, currentDirection) {
	return (drag$1 === true || drag$1 === direction$1) && (currentDirection === null || currentDirection === direction$1);
}
function getCurrentDirection(offset$1, lockThreshold = 10) {
	let direction$1 = null;
	if (Math.abs(offset$1.y) > lockThreshold) direction$1 = "y";
	else if (Math.abs(offset$1.x) > lockThreshold) direction$1 = "x";
	return direction$1;
}
var DragGesture = class extends Feature {
	constructor(node$1) {
		super(node$1);
		this.removeGroupControls = noop;
		this.removeListeners = noop;
		this.controls = new VisualElementDragControls(node$1);
	}
	mount() {
		const { dragControls } = this.node.getProps();
		if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
		this.removeListeners = this.controls.addListeners() || noop;
	}
	unmount() {
		this.removeGroupControls();
		this.removeListeners();
	}
};
var asyncHandler = (handler) => (event, info) => {
	if (handler) frame.update(() => handler(event, info));
};
var PanGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.removePointerDownListener = noop;
	}
	onPointerDown(pointerDownEvent) {
		this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: getContextWindow(this.node)
		});
	}
	createPanHandlers() {
		const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(onPanSessionStart),
			onStart: asyncHandler(onPanStart),
			onMove: onPan,
			onEnd: (event, info) => {
				delete this.session;
				if (onPanEnd) frame.update(() => onPanEnd(event, info));
			}
		};
	}
	mount() {
		this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener();
		this.session && this.session.end();
	}
};
function usePresence() {
	const context = (0, import_react.useContext)(PresenceContext);
	if (context === null) return [true, null];
	const { isPresent: isPresent$1, onExitComplete, register } = context;
	const id$3 = (0, import_react.useId)();
	(0, import_react.useEffect)(() => register(id$3), []);
	const safeToRemove = () => onExitComplete && onExitComplete(id$3);
	return !isPresent$1 && onExitComplete ? [false, safeToRemove] : [true];
}
function useIsPresent() {
	return isPresent((0, import_react.useContext)(PresenceContext));
}
function isPresent(context) {
	return context === null ? true : context.isPresent;
}
var globalProjectionState = {
	hasAnimatedSinceResize: true,
	hasEverUpdated: false
};
function pixelsToPercent(pixels, axis) {
	if (axis.max === axis.min) return 0;
	return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = { correct: (latest, node$1) => {
	if (!node$1.target) return latest;
	if (typeof latest === "string") if (px.test(latest)) latest = parseFloat(latest);
	else return latest;
	return `${pixelsToPercent(latest, node$1.target.x)}% ${pixelsToPercent(latest, node$1.target.y)}%`;
} };
var correctBoxShadow = { correct: (latest, { treeScale, projectionDelta }) => {
	const original = latest;
	const shadow = complex.parse(latest);
	if (shadow.length > 5) return original;
	const template = complex.createTransformer(latest);
	const offset$1 = typeof shadow[0] !== "number" ? 1 : 0;
	const xScale = projectionDelta.x.scale * treeScale.x;
	const yScale = projectionDelta.y.scale * treeScale.y;
	shadow[0 + offset$1] /= xScale;
	shadow[1 + offset$1] /= yScale;
	const averageScale = mix(xScale, yScale, .5);
	if (typeof shadow[2 + offset$1] === "number") shadow[2 + offset$1] /= averageScale;
	if (typeof shadow[3 + offset$1] === "number") shadow[3 + offset$1] /= averageScale;
	return template(shadow);
} };
var MeasureLayoutWithContext = class extends import_react.Component {
	componentDidMount() {
		const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
		const { projection } = visualElement;
		addScaleCorrector(defaultScaleCorrectors);
		if (projection) {
			if (layoutGroup.group) layoutGroup.group.add(projection);
			if (switchLayoutGroup && switchLayoutGroup.register && layoutId) switchLayoutGroup.register(projection);
			projection.root.didUpdate();
			projection.addEventListener("animationComplete", () => {
				this.safeToRemove();
			});
			projection.setOptions({
				...projection.options,
				onExitComplete: () => this.safeToRemove()
			});
		}
		globalProjectionState.hasEverUpdated = true;
	}
	getSnapshotBeforeUpdate(prevProps) {
		const { layoutDependency, visualElement, drag: drag$1, isPresent: isPresent$1 } = this.props;
		const projection = visualElement.projection;
		if (!projection) return null;
		projection.isPresent = isPresent$1;
		if (drag$1 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) projection.willUpdate();
		else this.safeToRemove();
		if (prevProps.isPresent !== isPresent$1) {
			if (isPresent$1) projection.promote();
			else if (!projection.relegate()) frame.postRender(() => {
				const stack = projection.getStack();
				if (!stack || !stack.members.length) this.safeToRemove();
			});
		}
		return null;
	}
	componentDidUpdate() {
		const { projection } = this.props.visualElement;
		if (projection) {
			projection.root.didUpdate();
			queueMicrotask(() => {
				if (!projection.currentAnimation && projection.isLead()) this.safeToRemove();
			});
		}
	}
	componentWillUnmount() {
		const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
		const { projection } = visualElement;
		if (projection) {
			projection.scheduleCheckAfterUnmount();
			if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
			if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
		}
	}
	safeToRemove() {
		const { safeToRemove } = this.props;
		safeToRemove && safeToRemove();
	}
	render() {
		return null;
	}
};
function MeasureLayout(props) {
	const [isPresent$1, safeToRemove] = usePresence();
	const layoutGroup = (0, import_react.useContext)(LayoutGroupContext);
	return import_react.createElement(MeasureLayoutWithContext, {
		...props,
		layoutGroup,
		switchLayoutGroup: (0, import_react.useContext)(SwitchLayoutGroupContext),
		isPresent: isPresent$1,
		safeToRemove
	});
}
var defaultScaleCorrectors = {
	borderRadius: {
		...correctBorderRadius,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: correctBorderRadius,
	borderTopRightRadius: correctBorderRadius,
	borderBottomLeftRadius: correctBorderRadius,
	borderBottomRightRadius: correctBorderRadius,
	boxShadow: correctBoxShadow
};
var borders = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
];
var numBorders = borders.length;
var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress$1, shouldCrossfadeOpacity, isOnlyMember) {
	if (shouldCrossfadeOpacity) {
		target.opacity = mix(0, lead.opacity !== void 0 ? lead.opacity : 1, easeCrossfadeIn(progress$1));
		target.opacityExit = mix(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress$1));
	} else if (isOnlyMember) target.opacity = mix(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress$1);
	for (let i = 0; i < numBorders; i++) {
		const borderLabel = `border${borders[i]}Radius`;
		let followRadius = getRadius(follow, borderLabel);
		let leadRadius = getRadius(lead, borderLabel);
		if (followRadius === void 0 && leadRadius === void 0) continue;
		followRadius || (followRadius = 0);
		leadRadius || (leadRadius = 0);
		if (followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius)) {
			target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress$1), 0);
			if (percent.test(leadRadius) || percent.test(followRadius)) target[borderLabel] += "%";
		} else target[borderLabel] = leadRadius;
	}
	if (follow.rotate || lead.rotate) target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress$1);
}
function getRadius(values, radiusName) {
	return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = compress(0, .5, circOut);
var easeCrossfadeOut = compress(.5, .95, noop);
function compress(min$1, max$1, easing) {
	return (p$5) => {
		if (p$5 < min$1) return 0;
		if (p$5 > max$1) return 1;
		return easing(progress(min$1, max$1, p$5));
	};
}
function copyAxisInto(axis, originAxis) {
	axis.min = originAxis.min;
	axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
	copyAxisInto(box.x, originBox.x);
	copyAxisInto(box.y, originBox.y);
}
function removePointDelta(point, translate, scale$2, originPoint, boxScale) {
	point -= translate;
	point = scalePoint(point, 1 / scale$2, originPoint);
	if (boxScale !== void 0) point = scalePoint(point, 1 / boxScale, originPoint);
	return point;
}
function removeAxisDelta(axis, translate = 0, scale$2 = 1, origin = .5, boxScale, originAxis = axis, sourceAxis = axis) {
	if (percent.test(translate)) {
		translate = parseFloat(translate);
		translate = mix(sourceAxis.min, sourceAxis.max, translate / 100) - sourceAxis.min;
	}
	if (typeof translate !== "number") return;
	let originPoint = mix(originAxis.min, originAxis.max, origin);
	if (axis === originAxis) originPoint -= translate;
	axis.min = removePointDelta(axis.min, translate, scale$2, originPoint, boxScale);
	axis.max = removePointDelta(axis.max, translate, scale$2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms$1, [key, scaleKey, originKey], origin, sourceAxis) {
	removeAxisDelta(axis, transforms$1[key], transforms$1[scaleKey], transforms$1[originKey], transforms$1.scale, origin, sourceAxis);
}
var xKeys = [
	"x",
	"scaleX",
	"originX"
];
var yKeys = [
	"y",
	"scaleY",
	"originY"
];
function removeBoxTransforms(box, transforms$1, originBox, sourceBox) {
	removeAxisTransforms(box.x, transforms$1, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
	removeAxisTransforms(box.y, transforms$1, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}
function isAxisDeltaZero(delta) {
	return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
	return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b$1) {
	return a.x.min === b$1.x.min && a.x.max === b$1.x.max && a.y.min === b$1.y.min && a.y.max === b$1.y.max;
}
function boxEqualsRounded(a, b$1) {
	return Math.round(a.x.min) === Math.round(b$1.x.min) && Math.round(a.x.max) === Math.round(b$1.x.max) && Math.round(a.y.min) === Math.round(b$1.y.min) && Math.round(a.y.max) === Math.round(b$1.y.max);
}
function aspectRatio(box) {
	return calcLength(box.x) / calcLength(box.y);
}
var NodeStack = class {
	constructor() {
		this.members = [];
	}
	add(node$1) {
		addUniqueItem(this.members, node$1);
		node$1.scheduleRender();
	}
	remove(node$1) {
		removeItem(this.members, node$1);
		if (node$1 === this.prevLead) this.prevLead = void 0;
		if (node$1 === this.lead) {
			const prevLead = this.members[this.members.length - 1];
			if (prevLead) this.promote(prevLead);
		}
	}
	relegate(node$1) {
		const indexOfNode = this.members.findIndex((member) => node$1 === member);
		if (indexOfNode === 0) return false;
		let prevLead;
		for (let i = indexOfNode; i >= 0; i--) {
			const member = this.members[i];
			if (member.isPresent !== false) {
				prevLead = member;
				break;
			}
		}
		if (prevLead) {
			this.promote(prevLead);
			return true;
		} else return false;
	}
	promote(node$1, preserveFollowOpacity) {
		const prevLead = this.lead;
		if (node$1 === prevLead) return;
		this.prevLead = prevLead;
		this.lead = node$1;
		node$1.show();
		if (prevLead) {
			prevLead.instance && prevLead.scheduleRender();
			node$1.scheduleRender();
			node$1.resumeFrom = prevLead;
			if (preserveFollowOpacity) node$1.resumeFrom.preserveOpacity = true;
			if (prevLead.snapshot) {
				node$1.snapshot = prevLead.snapshot;
				node$1.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
			}
			if (node$1.root && node$1.root.isUpdating) node$1.isLayoutDirty = true;
			const { crossfade } = node$1.options;
			if (crossfade === false) prevLead.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((node$1) => {
			const { options, resumingFrom } = node$1;
			options.onExitComplete && options.onExitComplete();
			if (resumingFrom) resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((node$1) => {
			node$1.instance && node$1.scheduleRender(false);
		});
	}
	removeLeadSnapshot() {
		if (this.lead && this.lead.snapshot) this.lead.snapshot = void 0;
	}
};
function buildProjectionTransform(delta, treeScale, latestTransform) {
	let transform$1 = "";
	const xTranslate = delta.x.translate / treeScale.x;
	const yTranslate = delta.y.translate / treeScale.y;
	if (xTranslate || yTranslate) transform$1 = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `;
	if (treeScale.x !== 1 || treeScale.y !== 1) transform$1 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
	if (latestTransform) {
		const { rotate, rotateX, rotateY } = latestTransform;
		if (rotate) transform$1 += `rotate(${rotate}deg) `;
		if (rotateX) transform$1 += `rotateX(${rotateX}deg) `;
		if (rotateY) transform$1 += `rotateY(${rotateY}deg) `;
	}
	const elementScaleX = delta.x.scale * treeScale.x;
	const elementScaleY = delta.y.scale * treeScale.y;
	if (elementScaleX !== 1 || elementScaleY !== 1) transform$1 += `scale(${elementScaleX}, ${elementScaleY})`;
	return transform$1 || "none";
}
var compareByDepth = (a, b$1) => a.depth - b$1.depth;
var FlatTree = class {
	constructor() {
		this.children = [];
		this.isDirty = false;
	}
	add(child) {
		addUniqueItem(this.children, child);
		this.isDirty = true;
	}
	remove(child) {
		removeItem(this.children, child);
		this.isDirty = true;
	}
	forEach(callback) {
		this.isDirty && this.children.sort(compareByDepth);
		this.isDirty = false;
		this.children.forEach(callback);
	}
};
function delay(callback, timeout) {
	const start$1 = performance.now();
	const checkElapsed = ({ timestamp }) => {
		const elapsed = timestamp - start$1;
		if (elapsed >= timeout) {
			cancelFrame(checkElapsed);
			callback(elapsed - timeout);
		}
	};
	frame.read(checkElapsed, true);
	return () => cancelFrame(checkElapsed);
}
function record(data) {
	if (window.MotionDebug) window.MotionDebug.record(data);
}
function isSVGElement(element) {
	return element instanceof SVGElement && element.tagName !== "svg";
}
function animateSingleValue(value, keyframes$3, options) {
	const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
	motionValue$1.start(animateMotionValue("", motionValue$1, keyframes$3, options));
	return motionValue$1.animation;
}
var transformAxes = [
	"",
	"X",
	"Y",
	"Z"
];
var hiddenVisibility = { visibility: "hidden" };
var animationTarget = 1e3;
var id$1 = 0;
var projectionFrameData = {
	type: "projectionFrame",
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0
};
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
	return class ProjectionNode {
		constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
			this.id = id$1++;
			this.animationId = 0;
			this.children = /* @__PURE__ */ new Set();
			this.options = {};
			this.isTreeAnimating = false;
			this.isAnimationBlocked = false;
			this.isLayoutDirty = false;
			this.isProjectionDirty = false;
			this.isSharedProjectionDirty = false;
			this.isTransformDirty = false;
			this.updateManuallyBlocked = false;
			this.updateBlockedByResize = false;
			this.isUpdating = false;
			this.isSVG = false;
			this.needsReset = false;
			this.shouldResetTransform = false;
			this.treeScale = {
				x: 1,
				y: 1
			};
			this.eventHandlers = /* @__PURE__ */ new Map();
			this.hasTreeAnimated = false;
			this.updateScheduled = false;
			this.projectionUpdateScheduled = false;
			this.checkUpdateFailed = () => {
				if (this.isUpdating) {
					this.isUpdating = false;
					this.clearAllSnapshots();
				}
			};
			this.updateProjection = () => {
				this.projectionUpdateScheduled = false;
				projectionFrameData.totalNodes = projectionFrameData.resolvedTargetDeltas = projectionFrameData.recalculatedProjection = 0;
				this.nodes.forEach(propagateDirtyNodes);
				this.nodes.forEach(resolveTargetDelta);
				this.nodes.forEach(calcProjection);
				this.nodes.forEach(cleanDirtyNodes);
				record(projectionFrameData);
			};
			this.hasProjected = false;
			this.isVisible = true;
			this.animationProgress = 0;
			this.sharedNodes = /* @__PURE__ */ new Map();
			this.latestValues = latestValues;
			this.root = parent ? parent.root || parent : this;
			this.path = parent ? [...parent.path, parent] : [];
			this.parent = parent;
			this.depth = parent ? parent.depth + 1 : 0;
			for (let i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = true;
			if (this.root === this) this.nodes = new FlatTree();
		}
		addEventListener(name, handler) {
			if (!this.eventHandlers.has(name)) this.eventHandlers.set(name, new SubscriptionManager());
			return this.eventHandlers.get(name).add(handler);
		}
		notifyListeners(name, ...args) {
			const subscriptionManager = this.eventHandlers.get(name);
			subscriptionManager && subscriptionManager.notify(...args);
		}
		hasListeners(name) {
			return this.eventHandlers.has(name);
		}
		mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
			if (this.instance) return;
			this.isSVG = isSVGElement(instance);
			this.instance = instance;
			const { layoutId, layout: layout$2, visualElement } = this.options;
			if (visualElement && !visualElement.current) visualElement.mount(instance);
			this.root.nodes.add(this);
			this.parent && this.parent.children.add(this);
			if (isLayoutDirty && (layout$2 || layoutId)) this.isLayoutDirty = true;
			if (attachResizeListener) {
				let cancelDelay;
				const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
				attachResizeListener(instance, () => {
					this.root.updateBlockedByResize = true;
					cancelDelay && cancelDelay();
					cancelDelay = delay(resizeUnblockUpdate, 250);
					if (globalProjectionState.hasAnimatedSinceResize) {
						globalProjectionState.hasAnimatedSinceResize = false;
						this.nodes.forEach(finishAnimation);
					}
				});
			}
			if (layoutId) this.root.registerSharedNode(layoutId, this);
			if (this.options.animate !== false && visualElement && (layoutId || layout$2)) this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0;
					this.relativeTarget = void 0;
					return;
				}
				const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
				const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
				const targetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout) || hasRelativeTargetChanged;
				const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
				if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
					if (this.resumeFrom) {
						this.resumingFrom = this.resumeFrom;
						this.resumingFrom.resumingFrom = void 0;
					}
					this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
					const animationOptions = {
						...getValueTransition(layoutTransition, "layout"),
						onPlay: onLayoutAnimationStart,
						onComplete: onLayoutAnimationComplete
					};
					if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
						animationOptions.delay = 0;
						animationOptions.type = false;
					}
					this.startAnimation(animationOptions);
				} else {
					if (!hasLayoutChanged) finishAnimation(this);
					if (this.isLead() && this.options.onExitComplete) this.options.onExitComplete();
				}
				this.targetLayout = newLayout;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate();
			this.root.nodes.remove(this);
			const stack = this.getStack();
			stack && stack.remove(this);
			this.parent && this.parent.children.delete(this);
			this.instance = void 0;
			cancelFrame(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = true;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = false;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
		}
		startUpdate() {
			if (this.isUpdateBlocked()) return;
			this.isUpdating = true;
			this.nodes && this.nodes.forEach(resetRotation);
			this.animationId++;
		}
		getTransformTemplate() {
			const { visualElement } = this.options;
			return visualElement && visualElement.getProps().transformTemplate;
		}
		willUpdate(shouldNotifyListeners = true) {
			this.root.hasTreeAnimated = true;
			if (this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			!this.root.isUpdating && this.root.startUpdate();
			if (this.isLayoutDirty) return;
			this.isLayoutDirty = true;
			for (let i = 0; i < this.path.length; i++) {
				const node$1 = this.path[i];
				node$1.shouldResetTransform = true;
				node$1.updateScroll("snapshot");
				if (node$1.options.layoutRoot) node$1.willUpdate(false);
			}
			const { layoutId, layout: layout$2 } = this.options;
			if (layoutId === void 0 && !layout$2) return;
			const transformTemplate$1 = this.getTransformTemplate();
			this.prevTransformTemplateValue = transformTemplate$1 ? transformTemplate$1(this.latestValues, "") : void 0;
			this.updateSnapshot();
			shouldNotifyListeners && this.notifyListeners("willUpdate");
		}
		update() {
			this.updateScheduled = false;
			if (this.isUpdateBlocked()) {
				this.unblockUpdate();
				this.clearAllSnapshots();
				this.nodes.forEach(clearMeasurements);
				return;
			}
			if (!this.isUpdating) this.nodes.forEach(clearIsLayoutDirty);
			this.isUpdating = false;
			this.nodes.forEach(resetTransformStyle);
			this.nodes.forEach(updateLayout);
			this.nodes.forEach(notifyLayoutUpdate);
			this.clearAllSnapshots();
			const now = performance.now();
			frameData.delta = clamp(0, 1e3 / 60, now - frameData.timestamp);
			frameData.timestamp = now;
			frameData.isProcessing = true;
			steps.update.process(frameData);
			steps.preRender.process(frameData);
			steps.render.process(frameData);
			frameData.isProcessing = false;
		}
		didUpdate() {
			if (!this.updateScheduled) {
				this.updateScheduled = true;
				queueMicrotask(() => this.update());
			}
		}
		clearAllSnapshots() {
			this.nodes.forEach(clearSnapshot);
			this.sharedNodes.forEach(removeLeadSnapshots);
		}
		scheduleUpdateProjection() {
			if (!this.projectionUpdateScheduled) {
				this.projectionUpdateScheduled = true;
				frame.preRender(this.updateProjection, false, true);
			}
		}
		scheduleCheckAfterUnmount() {
			frame.postRender(() => {
				if (this.isLayoutDirty) this.root.didUpdate();
				else this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			if (this.snapshot || !this.instance) return;
			this.snapshot = this.measure();
		}
		updateLayout() {
			if (!this.instance) return;
			this.updateScroll();
			if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let i = 0; i < this.path.length; i++) this.path[i].updateScroll();
			const prevLayout = this.layout;
			this.layout = this.measure(false);
			this.layoutCorrected = createBox();
			this.isLayoutDirty = false;
			this.projectionDelta = void 0;
			this.notifyListeners("measure", this.layout.layoutBox);
			const { visualElement } = this.options;
			visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
		}
		updateScroll(phase = "measure") {
			let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) needsMeasurement = false;
			if (needsMeasurement) this.scroll = {
				animationId: this.root.animationId,
				phase,
				isRoot: checkIsScrollRoot(this.instance),
				offset: measureScroll(this.instance)
			};
		}
		resetTransform() {
			if (!resetTransform) return;
			const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
			const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
			const transformTemplate$1 = this.getTransformTemplate();
			const transformTemplateValue = transformTemplate$1 ? transformTemplate$1(this.latestValues, "") : void 0;
			const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
			if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
				resetTransform(this.instance, transformTemplateValue);
				this.shouldResetTransform = false;
				this.scheduleRender();
			}
		}
		measure(removeTransform = true) {
			const pageBox = this.measurePageBox();
			let layoutBox = this.removeElementScroll(pageBox);
			if (removeTransform) layoutBox = this.removeTransform(layoutBox);
			roundBox(layoutBox);
			return {
				animationId: this.root.animationId,
				measuredBox: pageBox,
				layoutBox,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			const { visualElement } = this.options;
			if (!visualElement) return createBox();
			const box = visualElement.measureViewportBox();
			const { scroll: scroll$1 } = this.root;
			if (scroll$1) {
				translateAxis(box.x, scroll$1.offset.x);
				translateAxis(box.y, scroll$1.offset.y);
			}
			return box;
		}
		removeElementScroll(box) {
			const boxWithoutScroll = createBox();
			copyBoxInto(boxWithoutScroll, box);
			for (let i = 0; i < this.path.length; i++) {
				const node$1 = this.path[i];
				const { scroll: scroll$1, options } = node$1;
				if (node$1 !== this.root && scroll$1 && options.layoutScroll) {
					if (scroll$1.isRoot) {
						copyBoxInto(boxWithoutScroll, box);
						const { scroll: rootScroll } = this.root;
						if (rootScroll) {
							translateAxis(boxWithoutScroll.x, -rootScroll.offset.x);
							translateAxis(boxWithoutScroll.y, -rootScroll.offset.y);
						}
					}
					translateAxis(boxWithoutScroll.x, scroll$1.offset.x);
					translateAxis(boxWithoutScroll.y, scroll$1.offset.y);
				}
			}
			return boxWithoutScroll;
		}
		applyTransform(box, transformOnly = false) {
			const withTransforms = createBox();
			copyBoxInto(withTransforms, box);
			for (let i = 0; i < this.path.length; i++) {
				const node$1 = this.path[i];
				if (!transformOnly && node$1.options.layoutScroll && node$1.scroll && node$1 !== node$1.root) transformBox(withTransforms, {
					x: -node$1.scroll.offset.x,
					y: -node$1.scroll.offset.y
				});
				if (!hasTransform(node$1.latestValues)) continue;
				transformBox(withTransforms, node$1.latestValues);
			}
			if (hasTransform(this.latestValues)) transformBox(withTransforms, this.latestValues);
			return withTransforms;
		}
		removeTransform(box) {
			const boxWithoutTransform = createBox();
			copyBoxInto(boxWithoutTransform, box);
			for (let i = 0; i < this.path.length; i++) {
				const node$1 = this.path[i];
				if (!node$1.instance) continue;
				if (!hasTransform(node$1.latestValues)) continue;
				hasScale(node$1.latestValues) && node$1.updateSnapshot();
				const sourceBox = createBox();
				copyBoxInto(sourceBox, node$1.measurePageBox());
				removeBoxTransforms(boxWithoutTransform, node$1.latestValues, node$1.snapshot ? node$1.snapshot.layoutBox : void 0, sourceBox);
			}
			if (hasTransform(this.latestValues)) removeBoxTransforms(boxWithoutTransform, this.latestValues);
			return boxWithoutTransform;
		}
		setTargetDelta(delta) {
			this.targetDelta = delta;
			this.root.scheduleUpdateProjection();
			this.isProjectionDirty = true;
		}
		setOptions(options) {
			this.options = {
				...this.options,
				...options,
				crossfade: options.crossfade !== void 0 ? options.crossfade : true
			};
		}
		clearMeasurements() {
			this.scroll = void 0;
			this.layout = void 0;
			this.snapshot = void 0;
			this.prevTransformTemplateValue = void 0;
			this.targetDelta = void 0;
			this.target = void 0;
			this.isLayoutDirty = false;
		}
		forceRelativeParentToResolveTarget() {
			if (!this.relativeParent) return;
			if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) this.relativeParent.resolveTargetDelta(true);
		}
		resolveTargetDelta(forceRecalculation = false) {
			var _a;
			const lead = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
			this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
			this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
			const isShared = Boolean(this.resumingFrom) || this !== lead;
			if (!(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
			const { layout: layout$2, layoutId } = this.options;
			if (!this.layout || !(layout$2 || layoutId)) return;
			this.resolvedRelativeTargetAt = frameData.timestamp;
			if (!this.targetDelta && !this.relativeTarget) {
				const relativeParent = this.getClosestProjectingParent();
				if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
					this.relativeParent = relativeParent;
					this.forceRelativeParentToResolveTarget();
					this.relativeTarget = createBox();
					this.relativeTargetOrigin = createBox();
					calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
					copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
				} else this.relativeParent = this.relativeTarget = void 0;
			}
			if (!this.relativeTarget && !this.targetDelta) return;
			if (!this.target) {
				this.target = createBox();
				this.targetWithTransforms = createBox();
			}
			if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
				this.forceRelativeParentToResolveTarget();
				calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
			} else if (this.targetDelta) {
				if (Boolean(this.resumingFrom)) this.target = this.applyTransform(this.layout.layoutBox);
				else copyBoxInto(this.target, this.layout.layoutBox);
				applyBoxDelta(this.target, this.targetDelta);
			} else copyBoxInto(this.target, this.layout.layoutBox);
			if (this.attemptToResolveRelativeTarget) {
				this.attemptToResolveRelativeTarget = false;
				const relativeParent = this.getClosestProjectingParent();
				if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
					this.relativeParent = relativeParent;
					this.forceRelativeParentToResolveTarget();
					this.relativeTarget = createBox();
					this.relativeTargetOrigin = createBox();
					calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
					copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
				} else this.relativeParent = this.relativeTarget = void 0;
			}
			projectionFrameData.resolvedTargetDeltas++;
		}
		getClosestProjectingParent() {
			if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) return;
			if (this.parent.isProjecting()) return this.parent;
			else return this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		calcProjection() {
			var _a;
			const lead = this.getLead();
			const isShared = Boolean(this.resumingFrom) || this !== lead;
			let canSkip = true;
			if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) canSkip = false;
			if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) canSkip = false;
			if (this.resolvedRelativeTargetAt === frameData.timestamp) canSkip = false;
			if (canSkip) return;
			const { layout: layout$2, layoutId } = this.options;
			this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
			if (!this.isTreeAnimating) this.targetDelta = this.relativeTarget = void 0;
			if (!this.layout || !(layout$2 || layoutId)) return;
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			const prevTreeScaleX = this.treeScale.x;
			const prevTreeScaleY = this.treeScale.y;
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
			if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) lead.target = lead.layout.layoutBox;
			const { target } = lead;
			if (!target) {
				if (this.projectionTransform) {
					this.projectionDelta = createDelta();
					this.projectionTransform = "none";
					this.scheduleRender();
				}
				return;
			}
			if (!this.projectionDelta) {
				this.projectionDelta = createDelta();
				this.projectionDeltaWithTransform = createDelta();
			}
			const prevProjectionTransform = this.projectionTransform;
			calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
			this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
			if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
				this.hasProjected = true;
				this.scheduleRender();
				this.notifyListeners("projectionUpdate", target);
			}
			projectionFrameData.recalculatedProjection++;
		}
		hide() {
			this.isVisible = false;
		}
		show() {
			this.isVisible = true;
		}
		scheduleRender(notifyAll = true) {
			this.options.scheduleRender && this.options.scheduleRender();
			if (notifyAll) {
				const stack = this.getStack();
				stack && stack.scheduleRender();
			}
			if (this.resumingFrom && !this.resumingFrom.instance) this.resumingFrom = void 0;
		}
		setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
			const snapshot = this.snapshot;
			const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
			const mixedValues = { ...this.latestValues };
			const targetDelta = createDelta();
			if (!this.relativeParent || !this.relativeParent.options.layoutRoot) this.relativeTarget = this.relativeTargetOrigin = void 0;
			this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
			const relativeLayout = createBox();
			const isSharedLayoutAnimation = (snapshot ? snapshot.source : void 0) !== (this.layout ? this.layout.source : void 0);
			const stack = this.getStack();
			const isOnlyMember = !stack || stack.members.length <= 1;
			const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let prevRelativeTarget;
			this.mixTargetDelta = (latest) => {
				const progress$1 = latest / 1e3;
				mixAxisDelta(targetDelta.x, delta.x, progress$1);
				mixAxisDelta(targetDelta.y, delta.y, progress$1);
				this.setTargetDelta(targetDelta);
				if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
					calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
					mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress$1);
					if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) this.isProjectionDirty = false;
					if (!prevRelativeTarget) prevRelativeTarget = createBox();
					copyBoxInto(prevRelativeTarget, this.relativeTarget);
				}
				if (isSharedLayoutAnimation) {
					this.animationValues = mixedValues;
					mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress$1, shouldCrossfadeOpacity, isOnlyMember);
				}
				this.root.scheduleUpdateProjection();
				this.scheduleRender();
				this.animationProgress = progress$1;
			};
			this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(options) {
			this.notifyListeners("animationStart");
			this.currentAnimation && this.currentAnimation.stop();
			if (this.resumingFrom && this.resumingFrom.currentAnimation) this.resumingFrom.currentAnimation.stop();
			if (this.pendingAnimation) {
				cancelFrame(this.pendingAnimation);
				this.pendingAnimation = void 0;
			}
			this.pendingAnimation = frame.update(() => {
				globalProjectionState.hasAnimatedSinceResize = true;
				this.currentAnimation = animateSingleValue(0, animationTarget, {
					...options,
					onUpdate: (latest) => {
						this.mixTargetDelta(latest);
						options.onUpdate && options.onUpdate(latest);
					},
					onComplete: () => {
						options.onComplete && options.onComplete();
						this.completeAnimation();
					}
				});
				if (this.resumingFrom) this.resumingFrom.currentAnimation = this.currentAnimation;
				this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			if (this.resumingFrom) {
				this.resumingFrom.currentAnimation = void 0;
				this.resumingFrom.preserveOpacity = void 0;
			}
			const stack = this.getStack();
			stack && stack.exitAnimationComplete();
			this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
			this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			if (this.currentAnimation) {
				this.mixTargetDelta && this.mixTargetDelta(animationTarget);
				this.currentAnimation.stop();
			}
			this.completeAnimation();
		}
		applyTransformsToTarget() {
			const lead = this.getLead();
			let { targetWithTransforms, target, layout: layout$2, latestValues } = lead;
			if (!targetWithTransforms || !target || !layout$2) return;
			if (this !== lead && this.layout && layout$2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout$2.layoutBox)) {
				target = this.target || createBox();
				const xLength = calcLength(this.layout.layoutBox.x);
				target.x.min = lead.target.x.min;
				target.x.max = target.x.min + xLength;
				const yLength = calcLength(this.layout.layoutBox.y);
				target.y.min = lead.target.y.min;
				target.y.max = target.y.min + yLength;
			}
			copyBoxInto(targetWithTransforms, target);
			transformBox(targetWithTransforms, latestValues);
			calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
		}
		registerSharedNode(layoutId, node$1) {
			if (!this.sharedNodes.has(layoutId)) this.sharedNodes.set(layoutId, new NodeStack());
			this.sharedNodes.get(layoutId).add(node$1);
			const config$1 = node$1.options.initialPromotionConfig;
			node$1.promote({
				transition: config$1 ? config$1.transition : void 0,
				preserveFollowOpacity: config$1 && config$1.shouldPreserveFollowOpacity ? config$1.shouldPreserveFollowOpacity(node$1) : void 0
			});
		}
		isLead() {
			const stack = this.getStack();
			return stack ? stack.lead === this : true;
		}
		getLead() {
			var _a;
			const { layoutId } = this.options;
			return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
		}
		getPrevLead() {
			var _a;
			const { layoutId } = this.options;
			return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
		}
		getStack() {
			const { layoutId } = this.options;
			if (layoutId) return this.root.sharedNodes.get(layoutId);
		}
		promote({ needsReset, transition: transition$2, preserveFollowOpacity } = {}) {
			const stack = this.getStack();
			if (stack) stack.promote(this, preserveFollowOpacity);
			if (needsReset) {
				this.projectionDelta = void 0;
				this.needsReset = true;
			}
			if (transition$2) this.setOptions({ transition: transition$2 });
		}
		relegate() {
			const stack = this.getStack();
			if (stack) return stack.relegate(this);
			else return false;
		}
		resetRotation() {
			const { visualElement } = this.options;
			if (!visualElement) return;
			let hasRotate = false;
			const { latestValues } = visualElement;
			if (latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ) hasRotate = true;
			if (!hasRotate) return;
			const resetValues = {};
			for (let i = 0; i < transformAxes.length; i++) {
				const key = "rotate" + transformAxes[i];
				if (latestValues[key]) {
					resetValues[key] = latestValues[key];
					visualElement.setStaticValue(key, 0);
				}
			}
			visualElement.render();
			for (const key in resetValues) visualElement.setStaticValue(key, resetValues[key]);
			visualElement.scheduleRender();
		}
		getProjectionStyles(styleProp) {
			var _a, _b;
			if (!this.instance || this.isSVG) return void 0;
			if (!this.isVisible) return hiddenVisibility;
			const styles$1 = { visibility: "" };
			const transformTemplate$1 = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = false;
				styles$1.opacity = "";
				styles$1.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
				styles$1.transform = transformTemplate$1 ? transformTemplate$1(this.latestValues, "") : "none";
				return styles$1;
			}
			const lead = this.getLead();
			if (!this.projectionDelta || !this.layout || !lead.target) {
				const emptyStyles = {};
				if (this.options.layoutId) {
					emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
					emptyStyles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
				}
				if (this.hasProjected && !hasTransform(this.latestValues)) {
					emptyStyles.transform = transformTemplate$1 ? transformTemplate$1({}, "") : "none";
					this.hasProjected = false;
				}
				return emptyStyles;
			}
			const valuesToRender = lead.animationValues || lead.latestValues;
			this.applyTransformsToTarget();
			styles$1.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
			if (transformTemplate$1) styles$1.transform = transformTemplate$1(valuesToRender, styles$1.transform);
			const { x: x$2, y: y$3 } = this.projectionDelta;
			styles$1.transformOrigin = `${x$2.origin * 100}% ${y$3.origin * 100}% 0`;
			if (lead.animationValues) styles$1.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
			else styles$1.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
			for (const key in scaleCorrectors) {
				if (valuesToRender[key] === void 0) continue;
				const { correct, applyTo } = scaleCorrectors[key];
				const corrected = styles$1.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
				if (applyTo) {
					const num = applyTo.length;
					for (let i = 0; i < num; i++) styles$1[applyTo[i]] = corrected;
				} else styles$1[key] = corrected;
			}
			if (this.options.layoutId) styles$1.pointerEvents = lead === this ? resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
			return styles$1;
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((node$1) => {
				var _a;
				return (_a = node$1.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
			});
			this.root.nodes.forEach(clearMeasurements);
			this.root.sharedNodes.clear();
		}
	};
}
function updateLayout(node$1) {
	node$1.updateLayout();
}
function notifyLayoutUpdate(node$1) {
	var _a;
	const snapshot = ((_a = node$1.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node$1.snapshot;
	if (node$1.isLead() && node$1.layout && snapshot && node$1.hasListeners("didUpdate")) {
		const { layoutBox: layout$2, measuredBox: measuredLayout } = node$1.layout;
		const { animationType } = node$1.options;
		const isShared = snapshot.source !== node$1.layout.source;
		if (animationType === "size") eachAxis((axis) => {
			const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
			const length$1 = calcLength(axisSnapshot);
			axisSnapshot.min = layout$2[axis].min;
			axisSnapshot.max = axisSnapshot.min + length$1;
		});
		else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout$2)) eachAxis((axis) => {
			const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
			const length$1 = calcLength(layout$2[axis]);
			axisSnapshot.max = axisSnapshot.min + length$1;
			if (node$1.relativeTarget && !node$1.currentAnimation) {
				node$1.isProjectionDirty = true;
				node$1.relativeTarget[axis].max = node$1.relativeTarget[axis].min + length$1;
			}
		});
		const layoutDelta = createDelta();
		calcBoxDelta(layoutDelta, layout$2, snapshot.layoutBox);
		const visualDelta = createDelta();
		if (isShared) calcBoxDelta(visualDelta, node$1.applyTransform(measuredLayout, true), snapshot.measuredBox);
		else calcBoxDelta(visualDelta, layout$2, snapshot.layoutBox);
		const hasLayoutChanged = !isDeltaZero(layoutDelta);
		let hasRelativeTargetChanged = false;
		if (!node$1.resumeFrom) {
			const relativeParent = node$1.getClosestProjectingParent();
			if (relativeParent && !relativeParent.resumeFrom) {
				const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
				if (parentSnapshot && parentLayout) {
					const relativeSnapshot = createBox();
					calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
					const relativeLayout = createBox();
					calcRelativePosition(relativeLayout, layout$2, parentLayout.layoutBox);
					if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) hasRelativeTargetChanged = true;
					if (relativeParent.options.layoutRoot) {
						node$1.relativeTarget = relativeLayout;
						node$1.relativeTargetOrigin = relativeSnapshot;
						node$1.relativeParent = relativeParent;
					}
				}
			}
		}
		node$1.notifyListeners("didUpdate", {
			layout: layout$2,
			snapshot,
			delta: visualDelta,
			layoutDelta,
			hasLayoutChanged,
			hasRelativeTargetChanged
		});
	} else if (node$1.isLead()) {
		const { onExitComplete } = node$1.options;
		onExitComplete && onExitComplete();
	}
	node$1.options.transition = void 0;
}
function propagateDirtyNodes(node$1) {
	projectionFrameData.totalNodes++;
	if (!node$1.parent) return;
	if (!node$1.isProjecting()) node$1.isProjectionDirty = node$1.parent.isProjectionDirty;
	node$1.isSharedProjectionDirty || (node$1.isSharedProjectionDirty = Boolean(node$1.isProjectionDirty || node$1.parent.isProjectionDirty || node$1.parent.isSharedProjectionDirty));
	node$1.isTransformDirty || (node$1.isTransformDirty = node$1.parent.isTransformDirty);
}
function cleanDirtyNodes(node$1) {
	node$1.isProjectionDirty = node$1.isSharedProjectionDirty = node$1.isTransformDirty = false;
}
function clearSnapshot(node$1) {
	node$1.clearSnapshot();
}
function clearMeasurements(node$1) {
	node$1.clearMeasurements();
}
function clearIsLayoutDirty(node$1) {
	node$1.isLayoutDirty = false;
}
function resetTransformStyle(node$1) {
	const { visualElement } = node$1.options;
	if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) visualElement.notify("BeforeLayoutMeasure");
	node$1.resetTransform();
}
function finishAnimation(node$1) {
	node$1.finishAnimation();
	node$1.targetDelta = node$1.relativeTarget = node$1.target = void 0;
	node$1.isProjectionDirty = true;
}
function resolveTargetDelta(node$1) {
	node$1.resolveTargetDelta();
}
function calcProjection(node$1) {
	node$1.calcProjection();
}
function resetRotation(node$1) {
	node$1.resetRotation();
}
function removeLeadSnapshots(stack) {
	stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p$5) {
	output.translate = mix(delta.translate, 0, p$5);
	output.scale = mix(delta.scale, 1, p$5);
	output.origin = delta.origin;
	output.originPoint = delta.originPoint;
}
function mixAxis(output, from$1, to, p$5) {
	output.min = mix(from$1.min, to.min, p$5);
	output.max = mix(from$1.max, to.max, p$5);
}
function mixBox(output, from$1, to, p$5) {
	mixAxis(output.x, from$1.x, to.x, p$5);
	mixAxis(output.y, from$1.y, to.y, p$5);
}
function hasOpacityCrossfade(node$1) {
	return node$1.animationValues && node$1.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
};
var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent.toLowerCase().includes(string);
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
	axis.min = roundPoint(axis.min);
	axis.max = roundPoint(axis.max);
}
function roundBox(box) {
	roundAxis(box.x);
	roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout$2) {
	return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout$2), .2);
}
var DocumentProjectionNode = createProjectionNode({
	attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body.scrollLeft,
		y: document.documentElement.scrollTop || document.body.scrollTop
	}),
	checkIsScrollRoot: () => true
});
var rootProjectionNode = { current: void 0 };
var HTMLProjectionNode = createProjectionNode({
	measureScroll: (instance) => ({
		x: instance.scrollLeft,
		y: instance.scrollTop
	}),
	defaultParent: () => {
		if (!rootProjectionNode.current) {
			const documentNode = new DocumentProjectionNode({});
			documentNode.mount(window);
			documentNode.setOptions({ layoutScroll: true });
			rootProjectionNode.current = documentNode;
		}
		return rootProjectionNode.current;
	},
	resetTransform: (instance, value) => {
		instance.style.transform = value !== void 0 ? value : "none";
	},
	checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});
var drag = {
	pan: { Feature: PanGesture },
	drag: {
		Feature: DragGesture,
		ProjectionNode: HTMLProjectionNode,
		MeasureLayout
	}
};
var splitCSSVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
	const match$1 = splitCSSVariableRegex.exec(current);
	if (!match$1) return [,];
	const [, token$1, fallback] = match$1;
	return [token$1, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
	invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
	const [token$1, fallback] = parseCSSVariable(current);
	if (!token$1) return;
	const resolved = window.getComputedStyle(element).getPropertyValue(token$1);
	if (resolved) {
		const trimmed = resolved.trim();
		return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
	} else if (isCSSVariableToken(fallback)) return getVariableValue(fallback, element, depth + 1);
	else return fallback;
}
function resolveCSSVariables(visualElement, { ...target }, transitionEnd) {
	const element = visualElement.current;
	if (!(element instanceof Element)) return {
		target,
		transitionEnd
	};
	if (transitionEnd) transitionEnd = { ...transitionEnd };
	visualElement.values.forEach((value) => {
		const current = value.get();
		if (!isCSSVariableToken(current)) return;
		const resolved = getVariableValue(current, element);
		if (resolved) value.set(resolved);
	});
	for (const key in target) {
		const current = target[key];
		if (!isCSSVariableToken(current)) continue;
		const resolved = getVariableValue(current, element);
		if (!resolved) continue;
		target[key] = resolved;
		if (!transitionEnd) transitionEnd = {};
		if (transitionEnd[key] === void 0) transitionEnd[key] = current;
	}
	return {
		target,
		transitionEnd
	};
}
var positionalKeys = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	"x",
	"y",
	"translateX",
	"translateY"
]);
var isPositionalKey = (key) => positionalKeys.has(key);
var hasPositionalKey = (target) => {
	return Object.keys(target).some(isPositionalKey);
};
var isNumOrPxType = (v$4) => v$4 === number || v$4 === px;
var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
var getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform: transform$1 }) => {
	if (transform$1 === "none" || !transform$1) return 0;
	const matrix3d = transform$1.match(/^matrix3d\((.+)\)$/);
	if (matrix3d) return getPosFromMatrix(matrix3d[1], pos3);
	else {
		const matrix = transform$1.match(/^matrix\((.+)\)$/);
		if (matrix) return getPosFromMatrix(matrix[1], pos2);
		else return 0;
	}
};
var transformKeys = new Set([
	"x",
	"y",
	"z"
]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
	const removedTransforms = [];
	nonTranslationalTransformKeys.forEach((key) => {
		const value = visualElement.getValue(key);
		if (value !== void 0) {
			removedTransforms.push([key, value.get()]);
			value.set(key.startsWith("scale") ? 1 : 0);
		}
	});
	if (removedTransforms.length) visualElement.render();
	return removedTransforms;
}
var positionalValues = {
	width: ({ x: x$2 }, { paddingLeft = "0", paddingRight = "0" }) => x$2.max - x$2.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
	height: ({ y: y$3 }, { paddingTop = "0", paddingBottom = "0" }) => y$3.max - y$3.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
	top: (_bbox, { top: top$1 }) => parseFloat(top$1),
	left: (_bbox, { left: left$1 }) => parseFloat(left$1),
	bottom: ({ y: y$3 }, { top: top$1 }) => parseFloat(top$1) + (y$3.max - y$3.min),
	right: ({ x: x$2 }, { left: left$1 }) => parseFloat(left$1) + (x$2.max - x$2.min),
	x: getTranslateFromMatrix(4, 13),
	y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
var convertChangedValueTypes = (target, visualElement, changedKeys) => {
	const originBbox = visualElement.measureViewportBox();
	const element = visualElement.current;
	const elementComputedStyle = getComputedStyle(element);
	const { display } = elementComputedStyle;
	const origin = {};
	if (display === "none") visualElement.setStaticValue("display", target.display || "block");
	changedKeys.forEach((key) => {
		origin[key] = positionalValues[key](originBbox, elementComputedStyle);
	});
	visualElement.render();
	const targetBbox = visualElement.measureViewportBox();
	changedKeys.forEach((key) => {
		const value = visualElement.getValue(key);
		value && value.jump(origin[key]);
		target[key] = positionalValues[key](targetBbox, elementComputedStyle);
	});
	return target;
};
var checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
	target = { ...target };
	transitionEnd = { ...transitionEnd };
	const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
	let removedTransformValues = [];
	let hasAttemptedToRemoveTransformValues = false;
	const changedValueTypeKeys = [];
	targetPositionalKeys.forEach((key) => {
		const value = visualElement.getValue(key);
		if (!visualElement.hasValue(key)) return;
		let from$1 = origin[key];
		let fromType = findDimensionValueType(from$1);
		const to = target[key];
		let toType;
		if (isKeyframesTarget(to)) {
			const numKeyframes = to.length;
			const fromIndex = to[0] === null ? 1 : 0;
			from$1 = to[fromIndex];
			fromType = findDimensionValueType(from$1);
			for (let i = fromIndex; i < numKeyframes; i++) {
				if (to[i] === null) break;
				if (!toType) {
					toType = findDimensionValueType(to[i]);
					invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
				} else invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
			}
		} else toType = findDimensionValueType(to);
		if (fromType !== toType) if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
			const current = value.get();
			if (typeof current === "string") value.set(parseFloat(current));
			if (typeof to === "string") target[key] = parseFloat(to);
			else if (Array.isArray(to) && toType === px) target[key] = to.map(parseFloat);
		} else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from$1 === 0 || to === 0)) if (from$1 === 0) value.set(toType.transform(from$1));
		else target[key] = fromType.transform(to);
		else {
			if (!hasAttemptedToRemoveTransformValues) {
				removedTransformValues = removeNonTranslationalTransform(visualElement);
				hasAttemptedToRemoveTransformValues = true;
			}
			changedValueTypeKeys.push(key);
			transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
			value.jump(to);
		}
	});
	if (changedValueTypeKeys.length) {
		const scrollY = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
		const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
		if (removedTransformValues.length) removedTransformValues.forEach(([key, value]) => {
			visualElement.getValue(key).set(value);
		});
		visualElement.render();
		if (isBrowser && scrollY !== null) window.scrollTo({ top: scrollY });
		return {
			target: convertedTarget,
			transitionEnd
		};
	} else return {
		target,
		transitionEnd
	};
};
function unitConversion(visualElement, target, origin, transitionEnd) {
	return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) : {
		target,
		transitionEnd
	};
}
var parseDomVariant = (visualElement, target, origin, transitionEnd) => {
	const resolved = resolveCSSVariables(visualElement, target, transitionEnd);
	target = resolved.target;
	transitionEnd = resolved.transitionEnd;
	return unitConversion(visualElement, target, origin, transitionEnd);
};
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };
function initPrefersReducedMotion() {
	hasReducedMotionListener.current = true;
	if (!isBrowser) return;
	if (window.matchMedia) {
		const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
		const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
		motionMediaQuery.addListener(setReducedMotionPreferences);
		setReducedMotionPreferences();
	} else prefersReducedMotion.current = false;
}
function updateMotionValuesFromProps(element, next$1, prev$1) {
	const { willChange } = next$1;
	for (const key in next$1) {
		const nextValue = next$1[key];
		const prevValue = prev$1[key];
		if (isMotionValue(nextValue)) {
			element.addValue(key, nextValue);
			if (isWillChangeMotionValue(willChange)) willChange.add(key);
		} else if (isMotionValue(prevValue)) {
			element.addValue(key, motionValue(nextValue, { owner: element }));
			if (isWillChangeMotionValue(willChange)) willChange.remove(key);
		} else if (prevValue !== nextValue) if (element.hasValue(key)) {
			const existingValue = element.getValue(key);
			!existingValue.hasAnimated && existingValue.set(nextValue);
		} else {
			const latestValue = element.getStaticValue(key);
			element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
		}
	}
	for (const key in prev$1) if (next$1[key] === void 0) element.removeValue(key);
	return next$1;
}
var visualElementStore = /* @__PURE__ */ new WeakMap();
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
var propEventHandlers = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
];
var numVariantProps = variantProps.length;
var VisualElement = class {
	constructor({ parent, props, presenceContext, reducedMotionConfig, visualState }, options = {}) {
		this.current = null;
		this.children = /* @__PURE__ */ new Set();
		this.isVariantNode = false;
		this.isControllingVariants = false;
		this.shouldReduceMotion = null;
		this.values = /* @__PURE__ */ new Map();
		this.features = {};
		this.valueSubscriptions = /* @__PURE__ */ new Map();
		this.prevMotionValues = {};
		this.events = {};
		this.propEventSubscriptions = {};
		this.notifyUpdate = () => this.notify("Update", this.latestValues);
		this.render = () => {
			if (!this.current) return;
			this.triggerBuild();
			this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
		};
		this.scheduleRender = () => frame.render(this.render, false, true);
		const { latestValues, renderState } = visualState;
		this.latestValues = latestValues;
		this.baseTarget = { ...latestValues };
		this.initialValues = props.initial ? { ...latestValues } : {};
		this.renderState = renderState;
		this.parent = parent;
		this.props = props;
		this.presenceContext = presenceContext;
		this.depth = parent ? parent.depth + 1 : 0;
		this.reducedMotionConfig = reducedMotionConfig;
		this.options = options;
		this.isControllingVariants = isControllingVariants(props);
		this.isVariantNode = isVariantNode(props);
		if (this.isVariantNode) this.variantChildren = /* @__PURE__ */ new Set();
		this.manuallyAnimateOnMount = Boolean(parent && parent.current);
		const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {});
		for (const key in initialMotionValues) {
			const value = initialMotionValues[key];
			if (latestValues[key] !== void 0 && isMotionValue(value)) {
				value.set(latestValues[key], false);
				if (isWillChangeMotionValue(willChange)) willChange.add(key);
			}
		}
	}
	scrapeMotionValuesFromProps(_props, _prevProps) {
		return {};
	}
	mount(instance) {
		this.current = instance;
		visualElementStore.set(instance, this);
		if (this.projection && !this.projection.instance) this.projection.mount(instance);
		if (this.parent && this.isVariantNode && !this.isControllingVariants) this.removeFromVariantTree = this.parent.addVariantChild(this);
		this.values.forEach((value, key) => this.bindToMotionValue(key, value));
		if (!hasReducedMotionListener.current) initPrefersReducedMotion();
		this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
		if (this.parent) this.parent.children.add(this);
		this.update(this.props, this.presenceContext);
	}
	unmount() {
		visualElementStore.delete(this.current);
		this.projection && this.projection.unmount();
		cancelFrame(this.notifyUpdate);
		cancelFrame(this.render);
		this.valueSubscriptions.forEach((remove) => remove());
		this.removeFromVariantTree && this.removeFromVariantTree();
		this.parent && this.parent.children.delete(this);
		for (const key in this.events) this.events[key].clear();
		for (const key in this.features) this.features[key].unmount();
		this.current = null;
	}
	bindToMotionValue(key, value) {
		const valueIsTransform = transformProps.has(key);
		const removeOnChange = value.on("change", (latestValue) => {
			this.latestValues[key] = latestValue;
			this.props.onUpdate && frame.update(this.notifyUpdate, false, true);
			if (valueIsTransform && this.projection) this.projection.isTransformDirty = true;
		});
		const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
		this.valueSubscriptions.set(key, () => {
			removeOnChange();
			removeOnRenderRequest();
		});
	}
	sortNodePosition(other) {
		if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) return 0;
		return this.sortInstanceNodePosition(this.current, other.current);
	}
	loadFeatures({ children, ...renderedProps }, isStrict, preloadedFeatures$1, initialLayoutGroupConfig) {
		let ProjectionNodeConstructor;
		let MeasureLayout$1;
		for (let i = 0; i < numFeatures; i++) {
			const name = featureNames[i];
			const { isEnabled, Feature: FeatureConstructor, ProjectionNode, MeasureLayout: MeasureLayoutComponent } = featureDefinitions[name];
			if (ProjectionNode) ProjectionNodeConstructor = ProjectionNode;
			if (isEnabled(renderedProps)) {
				if (!this.features[name] && FeatureConstructor) this.features[name] = new FeatureConstructor(this);
				if (MeasureLayoutComponent) MeasureLayout$1 = MeasureLayoutComponent;
			}
		}
		if ((this.type === "html" || this.type === "svg") && !this.projection && ProjectionNodeConstructor) {
			this.projection = new ProjectionNodeConstructor(this.latestValues, this.parent && this.parent.projection);
			const { layoutId, layout: layout$2, drag: drag$1, dragConstraints, layoutScroll, layoutRoot } = renderedProps;
			this.projection.setOptions({
				layoutId,
				layout: layout$2,
				alwaysMeasureLayout: Boolean(drag$1) || dragConstraints && isRefObject(dragConstraints),
				visualElement: this,
				scheduleRender: () => this.scheduleRender(),
				animationType: typeof layout$2 === "string" ? layout$2 : "both",
				initialPromotionConfig: initialLayoutGroupConfig,
				layoutScroll,
				layoutRoot
			});
		}
		return MeasureLayout$1;
	}
	updateFeatures() {
		for (const key in this.features) {
			const feature = this.features[key];
			if (feature.isMounted) feature.update();
			else {
				feature.mount();
				feature.isMounted = true;
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.options, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(key) {
		return this.latestValues[key];
	}
	setStaticValue(key, value) {
		this.latestValues[key] = value;
	}
	makeTargetAnimatable(target, canMutate = true) {
		return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
	}
	update(props, presenceContext) {
		if (props.transformTemplate || this.props.transformTemplate) this.scheduleRender();
		this.prevProps = this.props;
		this.props = props;
		this.prevPresenceContext = this.presenceContext;
		this.presenceContext = presenceContext;
		for (let i = 0; i < propEventHandlers.length; i++) {
			const key = propEventHandlers[i];
			if (this.propEventSubscriptions[key]) {
				this.propEventSubscriptions[key]();
				delete this.propEventSubscriptions[key];
			}
			const listener = props["on" + key];
			if (listener) this.propEventSubscriptions[key] = this.on(key, listener);
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps), this.prevMotionValues);
		if (this.handleChildMotionValue) this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(name) {
		return this.props.variants ? this.props.variants[name] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	getVariantContext(startAtParent = false) {
		if (startAtParent) return this.parent ? this.parent.getVariantContext() : void 0;
		if (!this.isControllingVariants) {
			const context$1 = this.parent ? this.parent.getVariantContext() || {} : {};
			if (this.props.initial !== void 0) context$1.initial = this.props.initial;
			return context$1;
		}
		const context = {};
		for (let i = 0; i < numVariantProps; i++) {
			const name = variantProps[i];
			const prop = this.props[name];
			if (isVariantLabel(prop) || prop === false) context[name] = prop;
		}
		return context;
	}
	addVariantChild(child) {
		const closestVariantNode = this.getClosestVariantNode();
		if (closestVariantNode) {
			closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
			return () => closestVariantNode.variantChildren.delete(child);
		}
	}
	addValue(key, value) {
		if (value !== this.values.get(key)) {
			this.removeValue(key);
			this.bindToMotionValue(key, value);
		}
		this.values.set(key, value);
		this.latestValues[key] = value.get();
	}
	removeValue(key) {
		this.values.delete(key);
		const unsubscribe = this.valueSubscriptions.get(key);
		if (unsubscribe) {
			unsubscribe();
			this.valueSubscriptions.delete(key);
		}
		delete this.latestValues[key];
		this.removeValueFromRenderState(key, this.renderState);
	}
	hasValue(key) {
		return this.values.has(key);
	}
	getValue(key, defaultValue) {
		if (this.props.values && this.props.values[key]) return this.props.values[key];
		let value = this.values.get(key);
		if (value === void 0 && defaultValue !== void 0) {
			value = motionValue(defaultValue, { owner: this });
			this.addValue(key, value);
		}
		return value;
	}
	readValue(key) {
		var _a;
		return this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
	}
	setBaseTarget(key, value) {
		this.baseTarget[key] = value;
	}
	getBaseTarget(key) {
		var _a;
		const { initial } = this.props;
		const valueFromInitial = typeof initial === "string" || typeof initial === "object" ? (_a = resolveVariantFromProps(this.props, initial)) === null || _a === void 0 ? void 0 : _a[key] : void 0;
		if (initial && valueFromInitial !== void 0) return valueFromInitial;
		const target = this.getBaseTargetFromProps(this.props, key);
		if (target !== void 0 && !isMotionValue(target)) return target;
		return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		return this.events[eventName].add(callback);
	}
	notify(eventName, ...args) {
		if (this.events[eventName]) this.events[eventName].notify(...args);
	}
};
var DOMVisualElement = class extends VisualElement {
	sortInstanceNodePosition(a, b$1) {
		return a.compareDocumentPosition(b$1) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(props, key) {
		return props.style ? props.style[key] : void 0;
	}
	removeValueFromRenderState(key, { vars: vars$1, style }) {
		delete vars$1[key];
		delete style[key];
	}
	makeTargetAnimatableFromInstance({ transition: transition$2, transitionEnd, ...target }, { transformValues }, isMounted) {
		let origin = getOrigin(target, transition$2 || {}, this);
		if (transformValues) {
			if (transitionEnd) transitionEnd = transformValues(transitionEnd);
			if (target) target = transformValues(target);
			if (origin) origin = transformValues(origin);
		}
		if (isMounted) {
			checkTargetForNewValues(this, target, origin);
			const parsed = parseDomVariant(this, target, origin, transitionEnd);
			transitionEnd = parsed.transitionEnd;
			target = parsed.target;
		}
		return {
			transition: transition$2,
			transitionEnd,
			...target
		};
	}
};
function getComputedStyle$2(element) {
	return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "html";
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) {
			const defaultType = getDefaultValueType(key);
			return defaultType ? defaultType.default || 0 : 0;
		} else {
			const computedStyle = getComputedStyle$2(instance);
			const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
			return typeof value === "string" ? value.trim() : value;
		}
	}
	measureInstanceViewportBox(instance, { transformPagePoint }) {
		return measureViewportBox(instance, transformPagePoint);
	}
	build(renderState, latestValues, options, props) {
		buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
	}
	scrapeMotionValuesFromProps(props, prevProps) {
		return scrapeMotionValuesFromProps$1(props, prevProps);
	}
	handleChildMotionValue() {
		if (this.childSubscription) {
			this.childSubscription();
			delete this.childSubscription;
		}
		const { children } = this.props;
		if (isMotionValue(children)) this.childSubscription = children.on("change", (latest) => {
			if (this.current) this.current.textContent = `${latest}`;
		});
	}
	renderInstance(instance, renderState, styleProp, projection) {
		renderHTML(instance, renderState, styleProp, projection);
	}
};
var SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "svg";
		this.isSVGTag = false;
	}
	getBaseTargetFromProps(props, key) {
		return props[key];
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) {
			const defaultType = getDefaultValueType(key);
			return defaultType ? defaultType.default || 0 : 0;
		}
		key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
		return instance.getAttribute(key);
	}
	measureInstanceViewportBox() {
		return createBox();
	}
	scrapeMotionValuesFromProps(props, prevProps) {
		return scrapeMotionValuesFromProps(props, prevProps);
	}
	build(renderState, latestValues, options, props) {
		buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
	}
	renderInstance(instance, renderState, styleProp, projection) {
		renderSVG(instance, renderState, styleProp, projection);
	}
	mount(instance) {
		this.isSVGTag = isSVGTag(instance.tagName);
		super.mount(instance);
	}
};
var createDomVisualElement = (Component, options) => {
	return isSVGComponent(Component) ? new SVGVisualElement(options, { enableHardwareAcceleration: false }) : new HTMLVisualElement(options, { enableHardwareAcceleration: true });
};
var layout = { layout: {
	ProjectionNode: HTMLProjectionNode,
	MeasureLayout
} };
var preloadedFeatures = {
	...animations,
	...gestureAnimations,
	...drag,
	...layout
};
var motion = /* @__PURE__ */ createMotionProxy((Component, config$1) => createDomMotionConfig(Component, config$1, preloadedFeatures, createDomVisualElement));
function useIsMounted() {
	const isMounted = (0, import_react.useRef)(false);
	useIsomorphicLayoutEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);
	return isMounted;
}
function useForceUpdate() {
	const isMounted = useIsMounted();
	const [forcedRenderCount, setForcedRenderCount] = (0, import_react.useState)(0);
	const forceRender = (0, import_react.useCallback)(() => {
		isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
	}, [forcedRenderCount]);
	return [(0, import_react.useCallback)(() => frame.postRender(forceRender), [forceRender]), forcedRenderCount];
}
var PopChildMeasure = class extends import_react.Component {
	getSnapshotBeforeUpdate(prevProps) {
		const element = this.props.childRef.current;
		if (element && prevProps.isPresent && !this.props.isPresent) {
			const size$1 = this.props.sizeRef.current;
			size$1.height = element.offsetHeight || 0;
			size$1.width = element.offsetWidth || 0;
			size$1.top = element.offsetTop;
			size$1.left = element.offsetLeft;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function PopChild({ children, isPresent: isPresent$1 }) {
	const id$3 = (0, import_react.useId)();
	const ref = (0, import_react.useRef)(null);
	const size$1 = (0, import_react.useRef)({
		width: 0,
		height: 0,
		top: 0,
		left: 0
	});
	(0, import_react.useInsertionEffect)(() => {
		const { width, height, top: top$1, left: left$1 } = size$1.current;
		if (isPresent$1 || !ref.current || !width || !height) return;
		ref.current.dataset.motionPopId = id$3;
		const style = document.createElement("style");
		document.head.appendChild(style);
		if (style.sheet) style.sheet.insertRule(`
          [data-motion-pop-id="${id$3}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top$1}px !important;
            left: ${left$1}px !important;
          }
        `);
		return () => {
			document.head.removeChild(style);
		};
	}, [isPresent$1]);
	return import_react.createElement(PopChildMeasure, {
		isPresent: isPresent$1,
		childRef: ref,
		sizeRef: size$1
	}, import_react.cloneElement(children, { ref }));
}
var PresenceChild = ({ children, initial, isPresent: isPresent$1, onExitComplete, custom, presenceAffectsLayout, mode: mode$1 }) => {
	const presenceChildren = useConstant(newChildrenMap);
	const id$3 = (0, import_react.useId)();
	const context = (0, import_react.useMemo)(() => ({
		id: id$3,
		initial,
		isPresent: isPresent$1,
		custom,
		onExitComplete: (childId) => {
			presenceChildren.set(childId, true);
			for (const isComplete of presenceChildren.values()) if (!isComplete) return;
			onExitComplete && onExitComplete();
		},
		register: (childId) => {
			presenceChildren.set(childId, false);
			return () => presenceChildren.delete(childId);
		}
	}), presenceAffectsLayout ? void 0 : [isPresent$1]);
	(0, import_react.useMemo)(() => {
		presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
	}, [isPresent$1]);
	import_react.useEffect(() => {
		!isPresent$1 && !presenceChildren.size && onExitComplete && onExitComplete();
	}, [isPresent$1]);
	if (mode$1 === "popLayout") children = import_react.createElement(PopChild, { isPresent: isPresent$1 }, children);
	return import_react.createElement(PresenceContext.Provider, { value: context }, children);
};
function newChildrenMap() {
	return /* @__PURE__ */ new Map();
}
function useUnmountEffect(callback) {
	return (0, import_react.useEffect)(() => () => callback(), []);
}
var getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
	children.forEach((child) => {
		const key = getChildKey(child);
		allChildren.set(key, child);
	});
}
function onlyElements(children) {
	const filtered = [];
	import_react.Children.forEach(children, (child) => {
		if ((0, import_react.isValidElement)(child)) filtered.push(child);
	});
	return filtered;
}
var AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode: mode$1 = "sync" }) => {
	invariant(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
	const forceRender = (0, import_react.useContext)(LayoutGroupContext).forceRender || useForceUpdate()[0];
	const isMounted = useIsMounted();
	const filteredChildren = onlyElements(children);
	let childrenToRender = filteredChildren;
	const exitingChildren = (0, import_react.useRef)(/* @__PURE__ */ new Map()).current;
	const presentChildren = (0, import_react.useRef)(childrenToRender);
	const allChildren = (0, import_react.useRef)(/* @__PURE__ */ new Map()).current;
	const isInitialRender = (0, import_react.useRef)(true);
	useIsomorphicLayoutEffect(() => {
		isInitialRender.current = false;
		updateChildLookup(filteredChildren, allChildren);
		presentChildren.current = childrenToRender;
	});
	useUnmountEffect(() => {
		isInitialRender.current = true;
		allChildren.clear();
		exitingChildren.clear();
	});
	if (isInitialRender.current) return import_react.createElement(import_react.Fragment, null, childrenToRender.map((child) => import_react.createElement(PresenceChild, {
		key: getChildKey(child),
		isPresent: true,
		initial: initial ? void 0 : false,
		presenceAffectsLayout,
		mode: mode$1
	}, child)));
	childrenToRender = [...childrenToRender];
	const presentKeys = presentChildren.current.map(getChildKey);
	const targetKeys = filteredChildren.map(getChildKey);
	const numPresent = presentKeys.length;
	for (let i = 0; i < numPresent; i++) {
		const key = presentKeys[i];
		if (targetKeys.indexOf(key) === -1 && !exitingChildren.has(key)) exitingChildren.set(key, void 0);
	}
	if (mode$1 === "wait" && exitingChildren.size) childrenToRender = [];
	exitingChildren.forEach((component, key) => {
		if (targetKeys.indexOf(key) !== -1) return;
		const child = allChildren.get(key);
		if (!child) return;
		const insertionIndex = presentKeys.indexOf(key);
		let exitingComponent = component;
		if (!exitingComponent) {
			const onExit = () => {
				exitingChildren.delete(key);
				const leftOverKeys = Array.from(allChildren.keys()).filter((childKey) => !targetKeys.includes(childKey));
				leftOverKeys.forEach((leftOverKey) => allChildren.delete(leftOverKey));
				presentChildren.current = filteredChildren.filter((presentChild) => {
					const presentChildKey = getChildKey(presentChild);
					return presentChildKey === key || leftOverKeys.includes(presentChildKey);
				});
				if (!exitingChildren.size) {
					if (isMounted.current === false) return;
					forceRender();
					onExitComplete && onExitComplete();
				}
			};
			exitingComponent = import_react.createElement(PresenceChild, {
				key: getChildKey(child),
				isPresent: false,
				onExitComplete: onExit,
				custom,
				presenceAffectsLayout,
				mode: mode$1
			}, child);
			exitingChildren.set(key, exitingComponent);
		}
		childrenToRender.splice(insertionIndex, 0, exitingComponent);
	});
	childrenToRender = childrenToRender.map((child) => {
		const key = child.key;
		return exitingChildren.has(key) ? child : import_react.createElement(PresenceChild, {
			key: getChildKey(child),
			isPresent: true,
			presenceAffectsLayout,
			mode: mode$1
		}, child);
	});
	return import_react.createElement(import_react.Fragment, null, exitingChildren.size ? childrenToRender : childrenToRender.map((child) => (0, import_react.cloneElement)(child)));
};
var findById = (arr, id$3) => arr.find((toast) => toast.id === id$3);
function findToast(toasts, id$3) {
	const position$2 = getToastPosition(toasts, id$3);
	return {
		position: position$2,
		index: position$2 ? toasts[position$2].findIndex((toast) => toast.id === id$3) : -1
	};
}
function getToastPosition(toasts, id$3) {
	for (const [position$2, values] of Object.entries(toasts)) if (findById(values, id$3)) return position$2;
}
function getToastStyle(position$2) {
	const isRighty = position$2.includes("right");
	const isLefty = position$2.includes("left");
	let alignItems = "center";
	if (isRighty) alignItems = "flex-end";
	if (isLefty) alignItems = "flex-start";
	return {
		display: "flex",
		flexDirection: "column",
		alignItems
	};
}
function getToastListStyle(position$2) {
	return {
		position: "fixed",
		zIndex: "var(--toast-z-index, 5500)",
		pointerEvents: "none",
		display: "flex",
		flexDirection: "column",
		margin: position$2 === "top" || position$2 === "bottom" ? "0 auto" : void 0,
		top: position$2.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
		bottom: position$2.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
		right: !position$2.includes("left") ? "env(safe-area-inset-right, 0px)" : void 0,
		left: !position$2.includes("right") ? "env(safe-area-inset-left, 0px)" : void 0
	};
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(function(prop) {
	return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var isDevelopment = false;
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent$1(key) {
	return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp$1(tag) {
	return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps$1(tag, options, isReal) {
	var shouldForwardProp$1;
	if (options) {
		var optionsShouldForwardProp = options.shouldForwardProp;
		shouldForwardProp$1 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
			return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
		} : optionsShouldForwardProp;
	}
	if (typeof shouldForwardProp$1 !== "function" && isReal) shouldForwardProp$1 = tag.__emotion_forwardProp;
	return shouldForwardProp$1;
};
var Insertion = function Insertion$2(_ref) {
	var cache$1 = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
	registerStyles(cache$1, serialized, isStringTag);
	useInsertionEffectAlwaysWithSyncFallback(function() {
		return insertStyles(cache$1, serialized, isStringTag);
	});
	return null;
};
var createStyled = function createStyled$1(tag, options) {
	var isReal = tag.__emotion_real === tag;
	var baseTag = isReal && tag.__emotion_base || tag;
	var identifierName;
	var targetClassName;
	if (options !== void 0) {
		identifierName = options.label;
		targetClassName = options.target;
	}
	var shouldForwardProp$1 = composeShouldForwardProps(tag, options, isReal);
	var defaultShouldForwardProp = shouldForwardProp$1 || getDefaultShouldForwardProp(baseTag);
	var shouldUseAs = !defaultShouldForwardProp("as");
	return function() {
		var args = arguments;
		var styles$1 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
		if (identifierName !== void 0) styles$1.push("label:" + identifierName + ";");
		if (args[0] == null || args[0].raw === void 0) styles$1.push.apply(styles$1, args);
		else {
			var templateStringsArr = args[0];
			styles$1.push(templateStringsArr[0]);
			var len = args.length;
			var i = 1;
			for (; i < len; i++) styles$1.push(args[i], templateStringsArr[i]);
		}
		var Styled = withEmotionCache(function(props, cache$1, ref) {
			var FinalTag = shouldUseAs && props.as || baseTag;
			var className = "";
			var classInterpolations = [];
			var mergedProps = props;
			if (props.theme == null) {
				mergedProps = {};
				for (var key in props) mergedProps[key] = props[key];
				mergedProps.theme = import_react.useContext(ThemeContext);
			}
			if (typeof props.className === "string") className = getRegisteredStyles$1(cache$1.registered, classInterpolations, props.className);
			else if (props.className != null) className = props.className + " ";
			var serialized = serializeStyles(styles$1.concat(classInterpolations), cache$1.registered, mergedProps);
			className += cache$1.key + "-" + serialized.name;
			if (targetClassName !== void 0) className += " " + targetClassName;
			var finalShouldForwardProp = shouldUseAs && shouldForwardProp$1 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
			var newProps = {};
			for (var _key in props) {
				if (shouldUseAs && _key === "as") continue;
				if (finalShouldForwardProp(_key)) newProps[_key] = props[_key];
			}
			newProps.className = className;
			if (ref) newProps.ref = ref;
			return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Insertion, {
				cache: cache$1,
				serialized,
				isStringTag: typeof FinalTag === "string"
			}), /* @__PURE__ */ import_react.createElement(FinalTag, newProps));
		});
		Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
		Styled.defaultProps = tag.defaultProps;
		Styled.__emotion_real = Styled;
		Styled.__emotion_base = baseTag;
		Styled.__emotion_styles = styles$1;
		Styled.__emotion_forwardProp = shouldForwardProp$1;
		Object.defineProperty(Styled, "toString", { value: function value() {
			if (targetClassName === void 0 && isDevelopment) return "NO_COMPONENT_SELECTOR";
			return "." + targetClassName;
		} });
		Styled.withComponent = function(nextTag, nextOptions) {
			return createStyled$1(nextTag, _extends({}, options, nextOptions, { shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true) })).apply(void 0, styles$1);
		};
		return Styled;
	};
};
var tags = [
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"base",
	"bdi",
	"bdo",
	"big",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"keygen",
	"label",
	"legend",
	"li",
	"link",
	"main",
	"map",
	"mark",
	"marquee",
	"menu",
	"menuitem",
	"meta",
	"meter",
	"nav",
	"noscript",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"param",
	"picture",
	"pre",
	"progress",
	"q",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"script",
	"section",
	"select",
	"small",
	"source",
	"span",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"table",
	"tbody",
	"td",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"title",
	"tr",
	"track",
	"u",
	"ul",
	"var",
	"video",
	"wbr",
	"circle",
	"clipPath",
	"defs",
	"ellipse",
	"foreignObject",
	"g",
	"image",
	"line",
	"linearGradient",
	"mask",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialGradient",
	"rect",
	"stop",
	"svg",
	"text",
	"tspan"
];
var styled$1 = createStyled.bind(null);
tags.forEach(function(tagName) {
	styled$1[tagName] = styled$1(tagName);
});
var allPropNames = /* @__PURE__ */ new Set([
	...propNames,
	"textStyle",
	"layerStyle",
	"apply",
	"noOfLines",
	"focusBorderColor",
	"errorBorderColor",
	"as",
	"__css",
	"css",
	"sx"
]);
var validHTMLProps = /* @__PURE__ */ new Set([
	"htmlWidth",
	"htmlHeight",
	"htmlSize",
	"htmlTranslate"
]);
function shouldForwardProp(prop) {
	return (validHTMLProps.has(prop) || !allPropNames.has(prop)) && prop[0] !== "_";
}
var emotion_styled = interopDefault(styled$1);
var toCSSObject = ({ baseStyle: baseStyle$13 }) => (props) => {
	const { theme: theme$1, css: cssProp, __css, sx, ...restProps } = props;
	const [styleProps$1] = splitProps(restProps, isStyleProp);
	const computedCSS = css$1(assignAfter({}, __css, runIfFn(baseStyle$13, props), compact(styleProps$1), sx))(props.theme);
	return cssProp ? [computedCSS, cssProp] : computedCSS;
};
function styled(component, options) {
	const { baseStyle: baseStyle$13, ...styledOptions } = options ?? {};
	if (!styledOptions.shouldForwardProp) styledOptions.shouldForwardProp = shouldForwardProp;
	const styleObject = toCSSObject({ baseStyle: baseStyle$13 });
	const Component = emotion_styled(component, styledOptions)(styleObject);
	return (0, import_react.forwardRef)(function ChakraComponent2(props, ref) {
		const { children, ...restProps } = props;
		const { colorMode, forced } = useColorMode();
		const dataTheme = forced ? colorMode : void 0;
		return (0, import_react.createElement)(Component, {
			ref,
			"data-theme": dataTheme,
			...restProps
		}, children);
	});
}
function factory() {
	const cache$1 = /* @__PURE__ */ new Map();
	return new Proxy(styled, {
		apply(target, thisArg, argArray) {
			return styled(...argArray);
		},
		get(_, element) {
			if (!cache$1.has(element)) cache$1.set(element, styled(element));
			return cache$1.get(element);
		}
	});
}
var chakra = factory();
var toastMotionVariants = {
	initial: (props) => {
		const { position: position$2 } = props;
		const dir = ["top", "bottom"].includes(position$2) ? "y" : "x";
		let factor = ["top-right", "bottom-right"].includes(position$2) ? 1 : -1;
		if (position$2 === "bottom") factor = 1;
		return {
			opacity: 0,
			[dir]: factor * 24
		};
	},
	animate: {
		opacity: 1,
		y: 0,
		x: 0,
		scale: 1,
		transition: {
			duration: .4,
			ease: [
				.4,
				0,
				.2,
				1
			]
		}
	},
	exit: {
		opacity: 0,
		scale: .85,
		transition: {
			duration: .2,
			ease: [
				.4,
				0,
				1,
				1
			]
		}
	}
};
var ToastComponent = (0, import_react.memo)((props) => {
	const { id: id$3, message, onCloseComplete, onRequestRemove, requestClose = false, position: position$2 = "bottom", duration = 5e3, containerStyle, motionVariants: motionVariants$1 = toastMotionVariants, toastSpacing = "0.5rem" } = props;
	const [delay$1, setDelay] = (0, import_react.useState)(duration);
	const isPresent$1 = useIsPresent();
	useUpdateEffect(() => {
		if (!isPresent$1) onCloseComplete?.();
	}, [isPresent$1]);
	useUpdateEffect(() => {
		setDelay(duration);
	}, [duration]);
	const onMouseEnter = () => setDelay(null);
	const onMouseLeave = () => setDelay(duration);
	const close = () => {
		if (isPresent$1) onRequestRemove();
	};
	(0, import_react.useEffect)(() => {
		if (isPresent$1 && requestClose) onRequestRemove();
	}, [
		isPresent$1,
		requestClose,
		onRequestRemove
	]);
	useTimeout(close, delay$1);
	const containerStyles = (0, import_react.useMemo)(() => ({
		pointerEvents: "auto",
		maxWidth: 560,
		minWidth: 300,
		margin: toastSpacing,
		...containerStyle
	}), [containerStyle, toastSpacing]);
	const toastStyle = (0, import_react.useMemo)(() => getToastStyle(position$2), [position$2]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		layout: true,
		className: "chakra-toast",
		variants: motionVariants$1,
		initial: "initial",
		animate: "animate",
		exit: "exit",
		onHoverStart: onMouseEnter,
		onHoverEnd: onMouseLeave,
		custom: { position: position$2 },
		style: toastStyle,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
			role: "status",
			"aria-atomic": "true",
			className: "chakra-toast__inner",
			__css: containerStyles,
			children: runIfFn(message, {
				id: id$3,
				onClose: close
			})
		})
	});
});
ToastComponent.displayName = "ToastComponent";
function forwardRef(component) {
	return (0, import_react.forwardRef)(component);
}
var require_react_fast_compare = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasElementType = typeof Element !== "undefined";
	var hasMap = typeof Map === "function";
	var hasSet = typeof Set === "function";
	var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
	function equal(a, b$1) {
		if (a === b$1) return true;
		if (a && b$1 && typeof a == "object" && typeof b$1 == "object") {
			if (a.constructor !== b$1.constructor) return false;
			var length$1, i, keys$1;
			if (Array.isArray(a)) {
				length$1 = a.length;
				if (length$1 != b$1.length) return false;
				for (i = length$1; i-- !== 0;) if (!equal(a[i], b$1[i])) return false;
				return true;
			}
			var it;
			if (hasMap && a instanceof Map && b$1 instanceof Map) {
				if (a.size !== b$1.size) return false;
				it = a.entries();
				while (!(i = it.next()).done) if (!b$1.has(i.value[0])) return false;
				it = a.entries();
				while (!(i = it.next()).done) if (!equal(i.value[1], b$1.get(i.value[0]))) return false;
				return true;
			}
			if (hasSet && a instanceof Set && b$1 instanceof Set) {
				if (a.size !== b$1.size) return false;
				it = a.entries();
				while (!(i = it.next()).done) if (!b$1.has(i.value[0])) return false;
				return true;
			}
			if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b$1)) {
				length$1 = a.length;
				if (length$1 != b$1.length) return false;
				for (i = length$1; i-- !== 0;) if (a[i] !== b$1[i]) return false;
				return true;
			}
			if (a.constructor === RegExp) return a.source === b$1.source && a.flags === b$1.flags;
			if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b$1.valueOf === "function") return a.valueOf() === b$1.valueOf();
			if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b$1.toString === "function") return a.toString() === b$1.toString();
			keys$1 = Object.keys(a);
			length$1 = keys$1.length;
			if (length$1 !== Object.keys(b$1).length) return false;
			for (i = length$1; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b$1, keys$1[i])) return false;
			if (hasElementType && a instanceof Element) return false;
			for (i = length$1; i-- !== 0;) {
				if ((keys$1[i] === "_owner" || keys$1[i] === "__v" || keys$1[i] === "__o") && a.$$typeof) continue;
				if (!equal(a[keys$1[i]], b$1[keys$1[i]])) return false;
			}
			return true;
		}
		return a !== a && b$1 !== b$1;
	}
	module.exports = function isEqual$1(a, b$1) {
		try {
			return equal(a, b$1);
		} catch (error) {
			if ((error.message || "").match(/stack|recursion/i)) {
				console.warn("react-fast-compare cannot handle circular refs");
				return false;
			}
			throw error;
		}
	};
}));
function useTheme() {
	const theme$1 = (0, import_react.useContext)(ThemeContext);
	if (!theme$1) throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
	return theme$1;
}
function useChakra() {
	const colorModeResult = useColorMode();
	const theme$1 = useTheme();
	return {
		...colorModeResult,
		theme: theme$1
	};
}
var import_react_fast_compare = /* @__PURE__ */ __toESM(require_react_fast_compare(), 1);
function omitReactElements(props) {
	return Object.fromEntries(Object.entries(props).filter(([key, value]) => {
		return value !== void 0 && key !== "children" && !(0, import_react.isValidElement)(value);
	}));
}
function useStyleConfigImpl(themeKey, props = {}) {
	const { styleConfig: styleConfigProp, ...rest } = props;
	const { theme: theme$1, colorMode } = useChakra();
	const themeStyleConfig = themeKey ? memoizedGet(theme$1, `components.${themeKey}`) : void 0;
	const styleConfig = styleConfigProp || themeStyleConfig;
	const mergedProps = (0, import_lodash.default)({
		theme: theme$1,
		colorMode
	}, styleConfig?.defaultProps ?? {}, omitReactElements(rest), (obj, src) => !obj ? src : void 0);
	const stylesRef = (0, import_react.useRef)({});
	if (styleConfig) {
		const styles$1 = resolveStyleConfig(styleConfig)(mergedProps);
		if (!(0, import_react_fast_compare.default)(stylesRef.current, styles$1)) stylesRef.current = styles$1;
	}
	return stylesRef.current;
}
function useStyleConfig(themeKey, props = {}) {
	return useStyleConfigImpl(themeKey, props);
}
function useMultiStyleConfig(themeKey, props = {}) {
	return useStyleConfigImpl(themeKey, props);
}
var fallbackIcon = {
	path: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		stroke: "currentColor",
		strokeWidth: "1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				strokeLinecap: "round",
				fill: "none",
				d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "currentColor",
				strokeLinecap: "round",
				d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				fill: "none",
				strokeMiterlimit: "10",
				cx: "12",
				cy: "12",
				r: "11.25"
			})
		]
	}),
	viewBox: "0 0 24 24"
};
var Icon = forwardRef((props, ref) => {
	const { as: element, viewBox, color: color$2 = "currentColor", focusable = false, children, className, __css, ...rest } = props;
	const _className = cx$1("chakra-icon", className);
	const customStyles = useStyleConfig("Icon", props);
	const shared = {
		ref,
		focusable,
		className: _className,
		__css: {
			w: "1em",
			h: "1em",
			display: "inline-block",
			lineHeight: "1em",
			flexShrink: 0,
			color: color$2,
			...__css,
			...customStyles
		}
	};
	const _viewBox = viewBox ?? fallbackIcon.viewBox;
	if (element && typeof element !== "string") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.svg, {
		as: element,
		...shared,
		...rest
	});
	const _path = children ?? fallbackIcon.path;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.svg, {
		verticalAlign: "middle",
		viewBox: _viewBox,
		...shared,
		...rest,
		children: _path
	});
});
Icon.displayName = "Icon";
function CheckIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		viewBox: "0 0 24 24",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
		})
	});
}
function InfoIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		viewBox: "0 0 24 24",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
		})
	});
}
function WarningIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		viewBox: "0 0 24 24",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
		})
	});
}
var spin = keyframes$1({
	"0%": { transform: "rotate(0deg)" },
	"100%": { transform: "rotate(360deg)" }
});
var Spinner = forwardRef((props, ref) => {
	const styles$1 = useStyleConfig("Spinner", props);
	const { label = "Loading...", thickness = "2px", speed = "0.45s", emptyColor = "transparent", className, ...rest } = omitThemingProps(props);
	const _className = cx$1("chakra-spinner", className);
	const spinnerStyles = {
		display: "inline-block",
		borderColor: "currentColor",
		borderStyle: "solid",
		borderRadius: "99999px",
		borderWidth: thickness,
		borderBottomColor: emptyColor,
		borderLeftColor: emptyColor,
		animation: `${spin} ${speed} linear infinite`,
		...styles$1
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		__css: spinnerStyles,
		className: _className,
		...rest,
		children: label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
			srOnly: true,
			children: label
		})
	});
});
Spinner.displayName = "Spinner";
var [AlertProvider, useAlertContext] = createContext({
	name: "AlertContext",
	hookName: "useAlertContext",
	providerName: "<Alert />"
});
var [AlertStylesProvider, useAlertStyles] = createContext({
	name: `AlertStylesContext`,
	hookName: `useAlertStyles`,
	providerName: "<Alert />"
});
var STATUSES = {
	info: {
		icon: InfoIcon,
		colorScheme: "blue"
	},
	warning: {
		icon: WarningIcon,
		colorScheme: "orange"
	},
	success: {
		icon: CheckIcon,
		colorScheme: "green"
	},
	error: {
		icon: WarningIcon,
		colorScheme: "red"
	},
	loading: {
		icon: Spinner,
		colorScheme: "blue"
	}
};
function getStatusColorScheme(status) {
	return STATUSES[status].colorScheme;
}
function getStatusIcon(status) {
	return STATUSES[status].icon;
}
var Alert = forwardRef(function Alert2(props, ref) {
	const { status = "info", addRole = true, ...rest } = omitThemingProps(props);
	const colorScheme = props.colorScheme ?? getStatusColorScheme(status);
	const styles$1 = useMultiStyleConfig("Alert", {
		...props,
		colorScheme
	});
	const alertStyles = defineStyle({
		width: "100%",
		display: "flex",
		alignItems: "center",
		position: "relative",
		overflow: "hidden",
		...styles$1.container
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertProvider, {
		value: { status },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertStylesProvider, {
			value: styles$1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
				"data-status": status,
				role: addRole ? "alert" : void 0,
				ref,
				...rest,
				className: cx$1("chakra-alert", props.className),
				__css: alertStyles
			})
		})
	});
});
Alert.displayName = "Alert";
function AlertIcon(props) {
	const { status } = useAlertContext();
	const BaseIcon = getStatusIcon(status);
	const styles$1 = useAlertStyles();
	const css$4 = status === "loading" ? styles$1.spinner : styles$1.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
		display: "inherit",
		"data-status": status,
		...props,
		className: cx$1("chakra-alert__icon", props.className),
		__css: css$4,
		children: props.children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaseIcon, {
			h: "100%",
			w: "100%"
		})
	});
}
AlertIcon.displayName = "AlertIcon";
var AlertTitle = forwardRef(function AlertTitle2(props, ref) {
	const styles$1 = useAlertStyles();
	const { status } = useAlertContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		"data-status": status,
		...props,
		className: cx$1("chakra-alert__title", props.className),
		__css: styles$1.title
	});
});
AlertTitle.displayName = "AlertTitle";
var AlertDescription = forwardRef(function AlertDescription2(props, ref) {
	const { status } = useAlertContext();
	const descriptionStyles = defineStyle({
		display: "inline",
		...useAlertStyles().description
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		"data-status": status,
		...props,
		className: cx$1("chakra-alert__desc", props.className),
		__css: descriptionStyles
	});
});
AlertDescription.displayName = "AlertDescription";
function CloseIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		focusable: "false",
		"aria-hidden": true,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
		})
	});
}
var CloseButton = forwardRef(function CloseButton2(props, ref) {
	const styles$1 = useStyleConfig("CloseButton", props);
	const { children, isDisabled, __css, ...rest } = omitThemingProps(props);
	const baseStyle$13 = {
		outline: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.button, {
		type: "button",
		"aria-label": "Close",
		ref,
		disabled: isDisabled,
		__css: {
			...baseStyle$13,
			...styles$1,
			...__css
		},
		...rest,
		children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, {
			width: "1em",
			height: "1em"
		})
	});
});
CloseButton.displayName = "CloseButton";
var Toast = (props) => {
	const { status, variant = "solid", id: id$3, title, isClosable, onClose, description, colorScheme, icon } = props;
	const ids = id$3 ? {
		root: `toast-${id$3}`,
		title: `toast-${id$3}-title`,
		description: `toast-${id$3}-description`
	} : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
		addRole: false,
		status,
		variant,
		id: ids?.root,
		alignItems: "start",
		borderRadius: "md",
		boxShadow: "lg",
		paddingEnd: 8,
		textAlign: "start",
		width: "auto",
		colorScheme,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertIcon, { children: icon }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(chakra.div, {
				flex: "1",
				maxWidth: "100%",
				children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, {
					id: ids?.title,
					children: title
				}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, {
					id: ids?.description,
					display: "block",
					children: description
				})]
			}),
			isClosable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseButton, {
				size: "sm",
				onClick: onClose,
				position: "absolute",
				insetEnd: 1,
				top: 1
			})
		]
	});
};
function createRenderToast(options = {}) {
	const { render, toastComponent: ToastComponent$1 = Toast } = options;
	const renderToast = (props) => {
		if (typeof render === "function") return render({
			...props,
			...options
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastComponent$1, {
			...props,
			...options
		});
	};
	return renderToast;
}
var toastStore = createStore({
	top: [],
	"top-left": [],
	"top-right": [],
	"bottom-left": [],
	bottom: [],
	"bottom-right": []
});
function createStore(initialState2) {
	let state$1 = initialState2;
	const listeners = /* @__PURE__ */ new Set();
	const setState = (setStateFn) => {
		state$1 = setStateFn(state$1);
		listeners.forEach((l$4) => l$4());
	};
	return {
		getState: () => state$1,
		subscribe: (listener) => {
			listeners.add(listener);
			return () => {
				setState(() => initialState2);
				listeners.delete(listener);
			};
		},
		removeToast: (id$3, position$2) => {
			setState((prevState) => ({
				...prevState,
				[position$2]: prevState[position$2].filter((toast) => toast.id != id$3)
			}));
		},
		notify: (message, options) => {
			const toast = createToast(message, options);
			const { position: position$2, id: id$3 } = toast;
			setState((prevToasts) => {
				const toasts = position$2.includes("top") ? [toast, ...prevToasts[position$2] ?? []] : [...prevToasts[position$2] ?? [], toast];
				return {
					...prevToasts,
					[position$2]: toasts
				};
			});
			return id$3;
		},
		update: (id$3, options) => {
			if (!id$3) return;
			setState((prevState) => {
				const nextState = { ...prevState };
				const { position: position$2, index: index$1 } = findToast(nextState, id$3);
				if (position$2 && index$1 !== -1) nextState[position$2][index$1] = {
					...nextState[position$2][index$1],
					...options,
					message: createRenderToast(options)
				};
				return nextState;
			});
		},
		closeAll: ({ positions } = {}) => {
			setState((prev$1) => {
				return (positions ?? [
					"bottom",
					"bottom-right",
					"bottom-left",
					"top",
					"top-left",
					"top-right"
				]).reduce((acc, position$2) => {
					acc[position$2] = prev$1[position$2].map((toast) => ({
						...toast,
						requestClose: true
					}));
					return acc;
				}, { ...prev$1 });
			});
		},
		close: (id$3) => {
			setState((prevState) => {
				const position$2 = getToastPosition(prevState, id$3);
				if (!position$2) return prevState;
				return {
					...prevState,
					[position$2]: prevState[position$2].map((toast) => {
						if (toast.id == id$3) return {
							...toast,
							requestClose: true
						};
						return toast;
					})
				};
			});
		},
		isActive: (id$3) => Boolean(findToast(toastStore.getState(), id$3).position)
	};
}
var counter = 0;
function createToast(message, options = {}) {
	counter += 1;
	const id$3 = options.id ?? counter;
	const position$2 = options.position ?? "bottom";
	return {
		id: id$3,
		message,
		position: position$2,
		duration: options.duration,
		onCloseComplete: options.onCloseComplete,
		onRequestRemove: () => toastStore.removeToast(String(id$3), position$2),
		status: options.status,
		requestClose: false,
		containerStyle: options.containerStyle
	};
}
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	function f(a, b$1) {
		var c$1 = a.length;
		a.push(b$1);
		a: for (; 0 < c$1;) {
			var d$1 = c$1 - 1 >>> 1, e$1 = a[d$1];
			if (0 < g(e$1, b$1)) a[d$1] = b$1, a[c$1] = e$1, c$1 = d$1;
			else break a;
		}
	}
	function h(a) {
		return 0 === a.length ? null : a[0];
	}
	function k(a) {
		if (0 === a.length) return null;
		var b$1 = a[0], c$1 = a.pop();
		if (c$1 !== b$1) {
			a[0] = c$1;
			a: for (var d$1 = 0, e$1 = a.length, w$2 = e$1 >>> 1; d$1 < w$2;) {
				var m$2 = 2 * (d$1 + 1) - 1, C$2 = a[m$2], n$3 = m$2 + 1, x$2 = a[n$3];
				if (0 > g(C$2, c$1)) n$3 < e$1 && 0 > g(x$2, C$2) ? (a[d$1] = x$2, a[n$3] = c$1, d$1 = n$3) : (a[d$1] = C$2, a[m$2] = c$1, d$1 = m$2);
				else if (n$3 < e$1 && 0 > g(x$2, c$1)) a[d$1] = x$2, a[n$3] = c$1, d$1 = n$3;
				else break a;
			}
		}
		return b$1;
	}
	function g(a, b$1) {
		var c$1 = a.sortIndex - b$1.sortIndex;
		return 0 !== c$1 ? c$1 : a.id - b$1.id;
	}
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var l = performance;
		exports.unstable_now = function() {
			return l.now();
		};
	} else {
		var p$1 = Date, q = p$1.now();
		exports.unstable_now = function() {
			return p$1.now() - q;
		};
	}
	var r = [], t = [], u = 1, v$1 = null, y = 3, z$1 = !1, A$1 = !1, B$1 = !1, D$1 = "function" === typeof setTimeout ? setTimeout : null, E$1 = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
	"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function G$1(a) {
		for (var b$1 = h(t); null !== b$1;) {
			if (null === b$1.callback) k(t);
			else if (b$1.startTime <= a) k(t), b$1.sortIndex = b$1.expirationTime, f(r, b$1);
			else break;
			b$1 = h(t);
		}
	}
	function H$1(a) {
		B$1 = !1;
		G$1(a);
		if (!A$1) if (null !== h(r)) A$1 = !0, I$1(J);
		else {
			var b$1 = h(t);
			null !== b$1 && K$1(H$1, b$1.startTime - a);
		}
	}
	function J(a, b$1) {
		A$1 = !1;
		B$1 && (B$1 = !1, E$1(L$1), L$1 = -1);
		z$1 = !0;
		var c$1 = y;
		try {
			G$1(b$1);
			for (v$1 = h(r); null !== v$1 && (!(v$1.expirationTime > b$1) || a && !M$1());) {
				var d$1 = v$1.callback;
				if ("function" === typeof d$1) {
					v$1.callback = null;
					y = v$1.priorityLevel;
					var e$1 = d$1(v$1.expirationTime <= b$1);
					b$1 = exports.unstable_now();
					"function" === typeof e$1 ? v$1.callback = e$1 : v$1 === h(r) && k(r);
					G$1(b$1);
				} else k(r);
				v$1 = h(r);
			}
			if (null !== v$1) var w$2 = !0;
			else {
				var m$2 = h(t);
				null !== m$2 && K$1(H$1, m$2.startTime - b$1);
				w$2 = !1;
			}
			return w$2;
		} finally {
			v$1 = null, y = c$1, z$1 = !1;
		}
	}
	var N$1 = !1, O$1 = null, L$1 = -1, P$1 = 5, Q$1 = -1;
	function M$1() {
		return exports.unstable_now() - Q$1 < P$1 ? !1 : !0;
	}
	function R$1() {
		if (null !== O$1) {
			var a = exports.unstable_now();
			Q$1 = a;
			var b$1 = !0;
			try {
				b$1 = O$1(!0, a);
			} finally {
				b$1 ? S$1() : (N$1 = !1, O$1 = null);
			}
		} else N$1 = !1;
	}
	var S$1;
	if ("function" === typeof F) S$1 = function() {
		F(R$1);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var T$1 = new MessageChannel(), U$1 = T$1.port2;
		T$1.port1.onmessage = R$1;
		S$1 = function() {
			U$1.postMessage(null);
		};
	} else S$1 = function() {
		D$1(R$1, 0);
	};
	function I$1(a) {
		O$1 = a;
		N$1 || (N$1 = !0, S$1());
	}
	function K$1(a, b$1) {
		L$1 = D$1(function() {
			a(exports.unstable_now());
		}, b$1);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(a) {
		a.callback = null;
	};
	exports.unstable_continueExecution = function() {
		A$1 || z$1 || (A$1 = !0, I$1(J));
	};
	exports.unstable_forceFrameRate = function(a) {
		0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P$1 = 0 < a ? Math.floor(1e3 / a) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return y;
	};
	exports.unstable_getFirstCallbackNode = function() {
		return h(r);
	};
	exports.unstable_next = function(a) {
		switch (y) {
			case 1:
			case 2:
			case 3:
				var b$1 = 3;
				break;
			default: b$1 = y;
		}
		var c$1 = y;
		y = b$1;
		try {
			return a();
		} finally {
			y = c$1;
		}
	};
	exports.unstable_pauseExecution = function() {};
	exports.unstable_requestPaint = function() {};
	exports.unstable_runWithPriority = function(a, b$1) {
		switch (a) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: a = 3;
		}
		var c$1 = y;
		y = a;
		try {
			return b$1();
		} finally {
			y = c$1;
		}
	};
	exports.unstable_scheduleCallback = function(a, b$1, c$1) {
		var d$1 = exports.unstable_now();
		"object" === typeof c$1 && null !== c$1 ? (c$1 = c$1.delay, c$1 = "number" === typeof c$1 && 0 < c$1 ? d$1 + c$1 : d$1) : c$1 = d$1;
		switch (a) {
			case 1:
				var e$1 = -1;
				break;
			case 2:
				e$1 = 250;
				break;
			case 5:
				e$1 = 1073741823;
				break;
			case 4:
				e$1 = 1e4;
				break;
			default: e$1 = 5e3;
		}
		e$1 = c$1 + e$1;
		a = {
			id: u++,
			callback: b$1,
			priorityLevel: a,
			startTime: c$1,
			expirationTime: e$1,
			sortIndex: -1
		};
		c$1 > d$1 ? (a.sortIndex = c$1, f(t, a), null === h(r) && a === h(t) && (B$1 ? (E$1(L$1), L$1 = -1) : B$1 = !0, K$1(H$1, c$1 - d$1))) : (a.sortIndex = e$1, f(r, a), A$1 || z$1 || (A$1 = !0, I$1(J)));
		return a;
	};
	exports.unstable_shouldYield = M$1;
	exports.unstable_wrapCallback = function(a) {
		var b$1 = y;
		return function() {
			var c$1 = y;
			y = b$1;
			try {
				return a.apply(this, arguments);
			} finally {
				y = c$1;
			}
		};
	};
}));
var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production_min();
}));
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var aa = require_react(), ca = require_scheduler();
	function p(a) {
		for (var b$1 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c$1 = 1; c$1 < arguments.length; c$1++) b$1 += "&args[]=" + encodeURIComponent(arguments[c$1]);
		return "Minified React error #" + a + "; visit " + b$1 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var da = /* @__PURE__ */ new Set(), ea = {};
	function fa(a, b$1) {
		ha(a, b$1);
		ha(a + "Capture", b$1);
	}
	function ha(a, b$1) {
		ea[a] = b$1;
		for (a = 0; a < b$1.length; a++) da.add(b$1[a]);
	}
	var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
	function oa(a) {
		if (ja.call(ma, a)) return !0;
		if (ja.call(la, a)) return !1;
		if (ka.test(a)) return ma[a] = !0;
		la[a] = !0;
		return !1;
	}
	function pa(a, b$1, c$1, d$1) {
		if (null !== c$1 && 0 === c$1.type) return !1;
		switch (typeof b$1) {
			case "function":
			case "symbol": return !0;
			case "boolean":
				if (d$1) return !1;
				if (null !== c$1) return !c$1.acceptsBooleans;
				a = a.toLowerCase().slice(0, 5);
				return "data-" !== a && "aria-" !== a;
			default: return !1;
		}
	}
	function qa(a, b$1, c$1, d$1) {
		if (null === b$1 || "undefined" === typeof b$1 || pa(a, b$1, c$1, d$1)) return !0;
		if (d$1) return !1;
		if (null !== c$1) switch (c$1.type) {
			case 3: return !b$1;
			case 4: return !1 === b$1;
			case 5: return isNaN(b$1);
			case 6: return isNaN(b$1) || 1 > b$1;
		}
		return !1;
	}
	function v(a, b$1, c$1, d$1, e$1, f$3, g$2) {
		this.acceptsBooleans = 2 === b$1 || 3 === b$1 || 4 === b$1;
		this.attributeName = d$1;
		this.attributeNamespace = e$1;
		this.mustUseProperty = c$1;
		this.propertyName = a;
		this.type = b$1;
		this.sanitizeURL = f$3;
		this.removeEmptyString = g$2;
	}
	var z = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
		z[a] = new v(a, 0, !1, a, null, !1, !1);
	});
	[
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function(a) {
		var b$1 = a[0];
		z[b$1] = new v(b$1, 1, !1, a[1], null, !1, !1);
	});
	[
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
		z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach(function(a) {
		z[a] = new v(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function(a) {
		z[a] = new v(a, 4, !1, a, null, !1, !1);
	});
	[
		"cols",
		"rows",
		"size",
		"span"
	].forEach(function(a) {
		z[a] = new v(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function(a) {
		z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var ra = /[\-:]([a-z])/g;
	function sa(a) {
		return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
		var b$1 = a.replace(ra, sa);
		z[b$1] = new v(b$1, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
		var b$1 = a.replace(ra, sa);
		z[b$1] = new v(b$1, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	[
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach(function(a) {
		var b$1 = a.replace(ra, sa);
		z[b$1] = new v(b$1, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	[
		"src",
		"href",
		"action",
		"formAction"
	].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});
	function ta(a, b$1, c$1, d$1) {
		var e$1 = z.hasOwnProperty(b$1) ? z[b$1] : null;
		if (null !== e$1 ? 0 !== e$1.type : d$1 || !(2 < b$1.length) || "o" !== b$1[0] && "O" !== b$1[0] || "n" !== b$1[1] && "N" !== b$1[1]) qa(b$1, c$1, e$1, d$1) && (c$1 = null), d$1 || null === e$1 ? oa(b$1) && (null === c$1 ? a.removeAttribute(b$1) : a.setAttribute(b$1, "" + c$1)) : e$1.mustUseProperty ? a[e$1.propertyName] = null === c$1 ? 3 === e$1.type ? !1 : "" : c$1 : (b$1 = e$1.attributeName, d$1 = e$1.attributeNamespace, null === c$1 ? a.removeAttribute(b$1) : (e$1 = e$1.type, c$1 = 3 === e$1 || 4 === e$1 && !0 === c$1 ? "" : "" + c$1, d$1 ? a.setAttributeNS(d$1, b$1, c$1) : a.setAttribute(b$1, c$1)));
	}
	var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
	var Ia = Symbol.for("react.offscreen");
	var Ja = Symbol.iterator;
	function Ka(a) {
		if (null === a || "object" !== typeof a) return null;
		a = Ja && a[Ja] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var A = Object.assign, La;
	function Ma(a) {
		if (void 0 === La) try {
			throw Error();
		} catch (c$1) {
			var b$1 = c$1.stack.trim().match(/\n( *(at )?)/);
			La = b$1 && b$1[1] || "";
		}
		return "\n" + La + a;
	}
	var Na = !1;
	function Oa(a, b$1) {
		if (!a || Na) return "";
		Na = !0;
		var c$1 = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (b$1) if (b$1 = function() {
				throw Error();
			}, Object.defineProperty(b$1.prototype, "props", { set: function() {
				throw Error();
			} }), "object" === typeof Reflect && Reflect.construct) {
				try {
					Reflect.construct(b$1, []);
				} catch (l$4) {
					var d$1 = l$4;
				}
				Reflect.construct(a, [], b$1);
			} else {
				try {
					b$1.call();
				} catch (l$4) {
					d$1 = l$4;
				}
				a.call(b$1.prototype);
			}
			else {
				try {
					throw Error();
				} catch (l$4) {
					d$1 = l$4;
				}
				a();
			}
		} catch (l$4) {
			if (l$4 && d$1 && "string" === typeof l$4.stack) {
				for (var e$1 = l$4.stack.split("\n"), f$3 = d$1.stack.split("\n"), g$2 = e$1.length - 1, h$2 = f$3.length - 1; 1 <= g$2 && 0 <= h$2 && e$1[g$2] !== f$3[h$2];) h$2--;
				for (; 1 <= g$2 && 0 <= h$2; g$2--, h$2--) if (e$1[g$2] !== f$3[h$2]) {
					if (1 !== g$2 || 1 !== h$2) do
						if (g$2--, h$2--, 0 > h$2 || e$1[g$2] !== f$3[h$2]) {
							var k$3 = "\n" + e$1[g$2].replace(" at new ", " at ");
							a.displayName && k$3.includes("<anonymous>") && (k$3 = k$3.replace("<anonymous>", a.displayName));
							return k$3;
						}
					while (1 <= g$2 && 0 <= h$2);
					break;
				}
			}
		} finally {
			Na = !1, Error.prepareStackTrace = c$1;
		}
		return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
	}
	function Pa(a) {
		switch (a.tag) {
			case 5: return Ma(a.type);
			case 16: return Ma("Lazy");
			case 13: return Ma("Suspense");
			case 19: return Ma("SuspenseList");
			case 0:
			case 2:
			case 15: return a = Oa(a.type, !1), a;
			case 11: return a = Oa(a.type.render, !1), a;
			case 1: return a = Oa(a.type, !0), a;
			default: return "";
		}
	}
	function Qa(a) {
		if (null == a) return null;
		if ("function" === typeof a) return a.displayName || a.name || null;
		if ("string" === typeof a) return a;
		switch (a) {
			case ya: return "Fragment";
			case wa: return "Portal";
			case Aa: return "Profiler";
			case za: return "StrictMode";
			case Ea: return "Suspense";
			case Fa: return "SuspenseList";
		}
		if ("object" === typeof a) switch (a.$$typeof) {
			case Ca: return (a.displayName || "Context") + ".Consumer";
			case Ba: return (a._context.displayName || "Context") + ".Provider";
			case Da:
				var b$1 = a.render;
				a = a.displayName;
				a || (a = b$1.displayName || b$1.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
				return a;
			case Ga: return b$1 = a.displayName || null, null !== b$1 ? b$1 : Qa(a.type) || "Memo";
			case Ha:
				b$1 = a._payload;
				a = a._init;
				try {
					return Qa(a(b$1));
				} catch (c$1) {}
		}
		return null;
	}
	function Ra(a) {
		var b$1 = a.type;
		switch (a.tag) {
			case 24: return "Cache";
			case 9: return (b$1.displayName || "Context") + ".Consumer";
			case 10: return (b$1._context.displayName || "Context") + ".Provider";
			case 18: return "DehydratedFragment";
			case 11: return a = b$1.render, a = a.displayName || a.name || "", b$1.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
			case 7: return "Fragment";
			case 5: return b$1;
			case 4: return "Portal";
			case 3: return "Root";
			case 6: return "Text";
			case 16: return Qa(b$1);
			case 8: return b$1 === za ? "StrictMode" : "Mode";
			case 22: return "Offscreen";
			case 12: return "Profiler";
			case 21: return "Scope";
			case 13: return "Suspense";
			case 19: return "SuspenseList";
			case 25: return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if ("function" === typeof b$1) return b$1.displayName || b$1.name || null;
				if ("string" === typeof b$1) return b$1;
		}
		return null;
	}
	function Sa(a) {
		switch (typeof a) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return a;
			case "object": return a;
			default: return "";
		}
	}
	function Ta(a) {
		var b$1 = a.type;
		return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b$1 || "radio" === b$1);
	}
	function Ua(a) {
		var b$1 = Ta(a) ? "checked" : "value", c$1 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b$1), d$1 = "" + a[b$1];
		if (!a.hasOwnProperty(b$1) && "undefined" !== typeof c$1 && "function" === typeof c$1.get && "function" === typeof c$1.set) {
			var e$1 = c$1.get, f$3 = c$1.set;
			Object.defineProperty(a, b$1, {
				configurable: !0,
				get: function() {
					return e$1.call(this);
				},
				set: function(a$1) {
					d$1 = "" + a$1;
					f$3.call(this, a$1);
				}
			});
			Object.defineProperty(a, b$1, { enumerable: c$1.enumerable });
			return {
				getValue: function() {
					return d$1;
				},
				setValue: function(a$1) {
					d$1 = "" + a$1;
				},
				stopTracking: function() {
					a._valueTracker = null;
					delete a[b$1];
				}
			};
		}
	}
	function Va(a) {
		a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
		if (!a) return !1;
		var b$1 = a._valueTracker;
		if (!b$1) return !0;
		var c$1 = b$1.getValue();
		var d$1 = "";
		a && (d$1 = Ta(a) ? a.checked ? "true" : "false" : a.value);
		a = d$1;
		return a !== c$1 ? (b$1.setValue(a), !0) : !1;
	}
	function Xa(a) {
		a = a || ("undefined" !== typeof document ? document : void 0);
		if ("undefined" === typeof a) return null;
		try {
			return a.activeElement || a.body;
		} catch (b$1) {
			return a.body;
		}
	}
	function Ya(a, b$1) {
		var c$1 = b$1.checked;
		return A({}, b$1, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: null != c$1 ? c$1 : a._wrapperState.initialChecked
		});
	}
	function Za(a, b$1) {
		var c$1 = null == b$1.defaultValue ? "" : b$1.defaultValue, d$1 = null != b$1.checked ? b$1.checked : b$1.defaultChecked;
		c$1 = Sa(null != b$1.value ? b$1.value : c$1);
		a._wrapperState = {
			initialChecked: d$1,
			initialValue: c$1,
			controlled: "checkbox" === b$1.type || "radio" === b$1.type ? null != b$1.checked : null != b$1.value
		};
	}
	function ab(a, b$1) {
		b$1 = b$1.checked;
		null != b$1 && ta(a, "checked", b$1, !1);
	}
	function bb(a, b$1) {
		ab(a, b$1);
		var c$1 = Sa(b$1.value), d$1 = b$1.type;
		if (null != c$1) if ("number" === d$1) {
			if (0 === c$1 && "" === a.value || a.value != c$1) a.value = "" + c$1;
		} else a.value !== "" + c$1 && (a.value = "" + c$1);
		else if ("submit" === d$1 || "reset" === d$1) {
			a.removeAttribute("value");
			return;
		}
		b$1.hasOwnProperty("value") ? cb(a, b$1.type, c$1) : b$1.hasOwnProperty("defaultValue") && cb(a, b$1.type, Sa(b$1.defaultValue));
		null == b$1.checked && null != b$1.defaultChecked && (a.defaultChecked = !!b$1.defaultChecked);
	}
	function db(a, b$1, c$1) {
		if (b$1.hasOwnProperty("value") || b$1.hasOwnProperty("defaultValue")) {
			var d$1 = b$1.type;
			if (!("submit" !== d$1 && "reset" !== d$1 || void 0 !== b$1.value && null !== b$1.value)) return;
			b$1 = "" + a._wrapperState.initialValue;
			c$1 || b$1 === a.value || (a.value = b$1);
			a.defaultValue = b$1;
		}
		c$1 = a.name;
		"" !== c$1 && (a.name = "");
		a.defaultChecked = !!a._wrapperState.initialChecked;
		"" !== c$1 && (a.name = c$1);
	}
	function cb(a, b$1, c$1) {
		if ("number" !== b$1 || Xa(a.ownerDocument) !== a) null == c$1 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c$1 && (a.defaultValue = "" + c$1);
	}
	var eb = Array.isArray;
	function fb(a, b$1, c$1, d$1) {
		a = a.options;
		if (b$1) {
			b$1 = {};
			for (var e$1 = 0; e$1 < c$1.length; e$1++) b$1["$" + c$1[e$1]] = !0;
			for (c$1 = 0; c$1 < a.length; c$1++) e$1 = b$1.hasOwnProperty("$" + a[c$1].value), a[c$1].selected !== e$1 && (a[c$1].selected = e$1), e$1 && d$1 && (a[c$1].defaultSelected = !0);
		} else {
			c$1 = "" + Sa(c$1);
			b$1 = null;
			for (e$1 = 0; e$1 < a.length; e$1++) {
				if (a[e$1].value === c$1) {
					a[e$1].selected = !0;
					d$1 && (a[e$1].defaultSelected = !0);
					return;
				}
				null !== b$1 || a[e$1].disabled || (b$1 = a[e$1]);
			}
			null !== b$1 && (b$1.selected = !0);
		}
	}
	function gb(a, b$1) {
		if (null != b$1.dangerouslySetInnerHTML) throw Error(p(91));
		return A({}, b$1, {
			value: void 0,
			defaultValue: void 0,
			children: "" + a._wrapperState.initialValue
		});
	}
	function hb(a, b$1) {
		var c$1 = b$1.value;
		if (null == c$1) {
			c$1 = b$1.children;
			b$1 = b$1.defaultValue;
			if (null != c$1) {
				if (null != b$1) throw Error(p(92));
				if (eb(c$1)) {
					if (1 < c$1.length) throw Error(p(93));
					c$1 = c$1[0];
				}
				b$1 = c$1;
			}
			b$1 ??= "";
			c$1 = b$1;
		}
		a._wrapperState = { initialValue: Sa(c$1) };
	}
	function ib(a, b$1) {
		var c$1 = Sa(b$1.value), d$1 = Sa(b$1.defaultValue);
		null != c$1 && (c$1 = "" + c$1, c$1 !== a.value && (a.value = c$1), null == b$1.defaultValue && a.defaultValue !== c$1 && (a.defaultValue = c$1));
		null != d$1 && (a.defaultValue = "" + d$1);
	}
	function jb(a) {
		var b$1 = a.textContent;
		b$1 === a._wrapperState.initialValue && "" !== b$1 && null !== b$1 && (a.value = b$1);
	}
	function kb(a) {
		switch (a) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function lb(a, b$1) {
		return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b$1) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b$1 ? "http://www.w3.org/1999/xhtml" : a;
	}
	var mb, nb = function(a) {
		return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b$1, c$1, d$1, e$1) {
			MSApp.execUnsafeLocalFunction(function() {
				return a(b$1, c$1, d$1, e$1);
			});
		} : a;
	}(function(a, b$1) {
		if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b$1;
		else {
			mb = mb || document.createElement("div");
			mb.innerHTML = "<svg>" + b$1.valueOf().toString() + "</svg>";
			for (b$1 = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
			for (; b$1.firstChild;) a.appendChild(b$1.firstChild);
		}
	});
	function ob(a, b$1) {
		if (b$1) {
			var c$1 = a.firstChild;
			if (c$1 && c$1 === a.lastChild && 3 === c$1.nodeType) {
				c$1.nodeValue = b$1;
				return;
			}
		}
		a.textContent = b$1;
	}
	var pb = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	}, qb = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(pb).forEach(function(a) {
		qb.forEach(function(b$1) {
			b$1 = b$1 + a.charAt(0).toUpperCase() + a.substring(1);
			pb[b$1] = pb[a];
		});
	});
	function rb(a, b$1, c$1) {
		return null == b$1 || "boolean" === typeof b$1 || "" === b$1 ? "" : c$1 || "number" !== typeof b$1 || 0 === b$1 || pb.hasOwnProperty(a) && pb[a] ? ("" + b$1).trim() : b$1 + "px";
	}
	function sb(a, b$1) {
		a = a.style;
		for (var c$1 in b$1) if (b$1.hasOwnProperty(c$1)) {
			var d$1 = 0 === c$1.indexOf("--"), e$1 = rb(c$1, b$1[c$1], d$1);
			"float" === c$1 && (c$1 = "cssFloat");
			d$1 ? a.setProperty(c$1, e$1) : a[c$1] = e$1;
		}
	}
	var tb = A({ menuitem: !0 }, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});
	function ub(a, b$1) {
		if (b$1) {
			if (tb[a] && (null != b$1.children || null != b$1.dangerouslySetInnerHTML)) throw Error(p(137, a));
			if (null != b$1.dangerouslySetInnerHTML) {
				if (null != b$1.children) throw Error(p(60));
				if ("object" !== typeof b$1.dangerouslySetInnerHTML || !("__html" in b$1.dangerouslySetInnerHTML)) throw Error(p(61));
			}
			if (null != b$1.style && "object" !== typeof b$1.style) throw Error(p(62));
		}
	}
	function vb(a, b$1) {
		if (-1 === a.indexOf("-")) return "string" === typeof b$1.is;
		switch (a) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var wb = null;
	function xb(a) {
		a = a.target || a.srcElement || window;
		a.correspondingUseElement && (a = a.correspondingUseElement);
		return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null, zb = null, Ab = null;
	function Bb(a) {
		if (a = Cb(a)) {
			if ("function" !== typeof yb) throw Error(p(280));
			var b$1 = a.stateNode;
			b$1 && (b$1 = Db(b$1), yb(a.stateNode, a.type, b$1));
		}
	}
	function Eb(a) {
		zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}
	function Fb() {
		if (zb) {
			var a = zb, b$1 = Ab;
			Ab = zb = null;
			Bb(a);
			if (b$1) for (a = 0; a < b$1.length; a++) Bb(b$1[a]);
		}
	}
	function Gb(a, b$1) {
		return a(b$1);
	}
	function Hb() {}
	var Ib = !1;
	function Jb(a, b$1, c$1) {
		if (Ib) return a(b$1, c$1);
		Ib = !0;
		try {
			return Gb(a, b$1, c$1);
		} finally {
			if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
		}
	}
	function Kb(a, b$1) {
		var c$1 = a.stateNode;
		if (null === c$1) return null;
		var d$1 = Db(c$1);
		if (null === d$1) return null;
		c$1 = d$1[b$1];
		a: switch (b$1) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(d$1 = !d$1.disabled) || (a = a.type, d$1 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
				a = !d$1;
				break a;
			default: a = !1;
		}
		if (a) return null;
		if (c$1 && "function" !== typeof c$1) throw Error(p(231, b$1, typeof c$1));
		return c$1;
	}
	var Lb = !1;
	if (ia) try {
		var Mb = {};
		Object.defineProperty(Mb, "passive", { get: function() {
			Lb = !0;
		} });
		window.addEventListener("test", Mb, Mb);
		window.removeEventListener("test", Mb, Mb);
	} catch (a) {
		Lb = !1;
	}
	function Nb(a, b$1, c$1, d$1, e$1, f$3, g$2, h$2, k$3) {
		var l$4 = Array.prototype.slice.call(arguments, 3);
		try {
			b$1.apply(c$1, l$4);
		} catch (m$2) {
			this.onError(m$2);
		}
	}
	var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = { onError: function(a) {
		Ob = !0;
		Pb = a;
	} };
	function Tb(a, b$1, c$1, d$1, e$1, f$3, g$2, h$2, k$3) {
		Ob = !1;
		Pb = null;
		Nb.apply(Sb, arguments);
	}
	function Ub(a, b$1, c$1, d$1, e$1, f$3, g$2, h$2, k$3) {
		Tb.apply(this, arguments);
		if (Ob) {
			if (Ob) {
				var l$4 = Pb;
				Ob = !1;
				Pb = null;
			} else throw Error(p(198));
			Qb || (Qb = !0, Rb = l$4);
		}
	}
	function Vb(a) {
		var b$1 = a, c$1 = a;
		if (a.alternate) for (; b$1.return;) b$1 = b$1.return;
		else {
			a = b$1;
			do
				b$1 = a, 0 !== (b$1.flags & 4098) && (c$1 = b$1.return), a = b$1.return;
			while (a);
		}
		return 3 === b$1.tag ? c$1 : null;
	}
	function Wb(a) {
		if (13 === a.tag) {
			var b$1 = a.memoizedState;
			null === b$1 && (a = a.alternate, null !== a && (b$1 = a.memoizedState));
			if (null !== b$1) return b$1.dehydrated;
		}
		return null;
	}
	function Xb(a) {
		if (Vb(a) !== a) throw Error(p(188));
	}
	function Yb(a) {
		var b$1 = a.alternate;
		if (!b$1) {
			b$1 = Vb(a);
			if (null === b$1) throw Error(p(188));
			return b$1 !== a ? null : a;
		}
		for (var c$1 = a, d$1 = b$1;;) {
			var e$1 = c$1.return;
			if (null === e$1) break;
			var f$3 = e$1.alternate;
			if (null === f$3) {
				d$1 = e$1.return;
				if (null !== d$1) {
					c$1 = d$1;
					continue;
				}
				break;
			}
			if (e$1.child === f$3.child) {
				for (f$3 = e$1.child; f$3;) {
					if (f$3 === c$1) return Xb(e$1), a;
					if (f$3 === d$1) return Xb(e$1), b$1;
					f$3 = f$3.sibling;
				}
				throw Error(p(188));
			}
			if (c$1.return !== d$1.return) c$1 = e$1, d$1 = f$3;
			else {
				for (var g$2 = !1, h$2 = e$1.child; h$2;) {
					if (h$2 === c$1) {
						g$2 = !0;
						c$1 = e$1;
						d$1 = f$3;
						break;
					}
					if (h$2 === d$1) {
						g$2 = !0;
						d$1 = e$1;
						c$1 = f$3;
						break;
					}
					h$2 = h$2.sibling;
				}
				if (!g$2) {
					for (h$2 = f$3.child; h$2;) {
						if (h$2 === c$1) {
							g$2 = !0;
							c$1 = f$3;
							d$1 = e$1;
							break;
						}
						if (h$2 === d$1) {
							g$2 = !0;
							d$1 = f$3;
							c$1 = e$1;
							break;
						}
						h$2 = h$2.sibling;
					}
					if (!g$2) throw Error(p(189));
				}
			}
			if (c$1.alternate !== d$1) throw Error(p(190));
		}
		if (3 !== c$1.tag) throw Error(p(188));
		return c$1.stateNode.current === c$1 ? a : b$1;
	}
	function Zb(a) {
		a = Yb(a);
		return null !== a ? $b(a) : null;
	}
	function $b(a) {
		if (5 === a.tag || 6 === a.tag) return a;
		for (a = a.child; null !== a;) {
			var b$1 = $b(a);
			if (null !== b$1) return b$1;
			a = a.sibling;
		}
		return null;
	}
	var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
	function mc(a) {
		if (lc && "function" === typeof lc.onCommitFiberRoot) try {
			lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
		} catch (b$1) {}
	}
	var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
	function nc(a) {
		a >>>= 0;
		return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
	}
	var rc = 64, sc = 4194304;
	function tc(a) {
		switch (a & -a) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return a & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return a & 130023424;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 1073741824;
			default: return a;
		}
	}
	function uc(a, b$1) {
		var c$1 = a.pendingLanes;
		if (0 === c$1) return 0;
		var d$1 = 0, e$1 = a.suspendedLanes, f$3 = a.pingedLanes, g$2 = c$1 & 268435455;
		if (0 !== g$2) {
			var h$2 = g$2 & ~e$1;
			0 !== h$2 ? d$1 = tc(h$2) : (f$3 &= g$2, 0 !== f$3 && (d$1 = tc(f$3)));
		} else g$2 = c$1 & ~e$1, 0 !== g$2 ? d$1 = tc(g$2) : 0 !== f$3 && (d$1 = tc(f$3));
		if (0 === d$1) return 0;
		if (0 !== b$1 && b$1 !== d$1 && 0 === (b$1 & e$1) && (e$1 = d$1 & -d$1, f$3 = b$1 & -b$1, e$1 >= f$3 || 16 === e$1 && 0 !== (f$3 & 4194240))) return b$1;
		0 !== (d$1 & 4) && (d$1 |= c$1 & 16);
		b$1 = a.entangledLanes;
		if (0 !== b$1) for (a = a.entanglements, b$1 &= d$1; 0 < b$1;) c$1 = 31 - oc(b$1), e$1 = 1 << c$1, d$1 |= a[c$1], b$1 &= ~e$1;
		return d$1;
	}
	function vc(a, b$1) {
		switch (a) {
			case 1:
			case 2:
			case 4: return b$1 + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return b$1 + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function wc(a, b$1) {
		for (var c$1 = a.suspendedLanes, d$1 = a.pingedLanes, e$1 = a.expirationTimes, f$3 = a.pendingLanes; 0 < f$3;) {
			var g$2 = 31 - oc(f$3), h$2 = 1 << g$2, k$3 = e$1[g$2];
			if (-1 === k$3) {
				if (0 === (h$2 & c$1) || 0 !== (h$2 & d$1)) e$1[g$2] = vc(h$2, b$1);
			} else k$3 <= b$1 && (a.expiredLanes |= h$2);
			f$3 &= ~h$2;
		}
	}
	function xc(a) {
		a = a.pendingLanes & -1073741825;
		return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function yc() {
		var a = rc;
		rc <<= 1;
		0 === (rc & 4194240) && (rc = 64);
		return a;
	}
	function zc(a) {
		for (var b$1 = [], c$1 = 0; 31 > c$1; c$1++) b$1.push(a);
		return b$1;
	}
	function Ac(a, b$1, c$1) {
		a.pendingLanes |= b$1;
		536870912 !== b$1 && (a.suspendedLanes = 0, a.pingedLanes = 0);
		a = a.eventTimes;
		b$1 = 31 - oc(b$1);
		a[b$1] = c$1;
	}
	function Bc(a, b$1) {
		var c$1 = a.pendingLanes & ~b$1;
		a.pendingLanes = b$1;
		a.suspendedLanes = 0;
		a.pingedLanes = 0;
		a.expiredLanes &= b$1;
		a.mutableReadLanes &= b$1;
		a.entangledLanes &= b$1;
		b$1 = a.entanglements;
		var d$1 = a.eventTimes;
		for (a = a.expirationTimes; 0 < c$1;) {
			var e$1 = 31 - oc(c$1), f$3 = 1 << e$1;
			b$1[e$1] = 0;
			d$1[e$1] = -1;
			a[e$1] = -1;
			c$1 &= ~f$3;
		}
	}
	function Cc(a, b$1) {
		var c$1 = a.entangledLanes |= b$1;
		for (a = a.entanglements; c$1;) {
			var d$1 = 31 - oc(c$1), e$1 = 1 << d$1;
			e$1 & b$1 | a[d$1] & b$1 && (a[d$1] |= b$1);
			c$1 &= ~e$1;
		}
	}
	var C = 0;
	function Dc(a) {
		a &= -a;
		return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
	}
	var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a, b$1) {
		switch (a) {
			case "focusin":
			case "focusout":
				Lc = null;
				break;
			case "dragenter":
			case "dragleave":
				Mc = null;
				break;
			case "mouseover":
			case "mouseout":
				Nc = null;
				break;
			case "pointerover":
			case "pointerout":
				Oc.delete(b$1.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Pc.delete(b$1.pointerId);
		}
	}
	function Tc(a, b$1, c$1, d$1, e$1, f$3) {
		if (null === a || a.nativeEvent !== f$3) return a = {
			blockedOn: b$1,
			domEventName: c$1,
			eventSystemFlags: d$1,
			nativeEvent: f$3,
			targetContainers: [e$1]
		}, null !== b$1 && (b$1 = Cb(b$1), null !== b$1 && Fc(b$1)), a;
		a.eventSystemFlags |= d$1;
		b$1 = a.targetContainers;
		null !== e$1 && -1 === b$1.indexOf(e$1) && b$1.push(e$1);
		return a;
	}
	function Uc(a, b$1, c$1, d$1, e$1) {
		switch (b$1) {
			case "focusin": return Lc = Tc(Lc, a, b$1, c$1, d$1, e$1), !0;
			case "dragenter": return Mc = Tc(Mc, a, b$1, c$1, d$1, e$1), !0;
			case "mouseover": return Nc = Tc(Nc, a, b$1, c$1, d$1, e$1), !0;
			case "pointerover":
				var f$3 = e$1.pointerId;
				Oc.set(f$3, Tc(Oc.get(f$3) || null, a, b$1, c$1, d$1, e$1));
				return !0;
			case "gotpointercapture": return f$3 = e$1.pointerId, Pc.set(f$3, Tc(Pc.get(f$3) || null, a, b$1, c$1, d$1, e$1)), !0;
		}
		return !1;
	}
	function Vc(a) {
		var b$1 = Wc(a.target);
		if (null !== b$1) {
			var c$1 = Vb(b$1);
			if (null !== c$1) {
				if (b$1 = c$1.tag, 13 === b$1) {
					if (b$1 = Wb(c$1), null !== b$1) {
						a.blockedOn = b$1;
						Ic(a.priority, function() {
							Gc(c$1);
						});
						return;
					}
				} else if (3 === b$1 && c$1.stateNode.current.memoizedState.isDehydrated) {
					a.blockedOn = 3 === c$1.tag ? c$1.stateNode.containerInfo : null;
					return;
				}
			}
		}
		a.blockedOn = null;
	}
	function Xc(a) {
		if (null !== a.blockedOn) return !1;
		for (var b$1 = a.targetContainers; 0 < b$1.length;) {
			var c$1 = Yc(a.domEventName, a.eventSystemFlags, b$1[0], a.nativeEvent);
			if (null === c$1) {
				c$1 = a.nativeEvent;
				var d$1 = new c$1.constructor(c$1.type, c$1);
				wb = d$1;
				c$1.target.dispatchEvent(d$1);
				wb = null;
			} else return b$1 = Cb(c$1), null !== b$1 && Fc(b$1), a.blockedOn = c$1, !1;
			b$1.shift();
		}
		return !0;
	}
	function Zc(a, b$1, c$1) {
		Xc(a) && c$1.delete(b$1);
	}
	function $c() {
		Jc = !1;
		null !== Lc && Xc(Lc) && (Lc = null);
		null !== Mc && Xc(Mc) && (Mc = null);
		null !== Nc && Xc(Nc) && (Nc = null);
		Oc.forEach(Zc);
		Pc.forEach(Zc);
	}
	function ad(a, b$1) {
		a.blockedOn === b$1 && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
	}
	function bd(a) {
		function b$1(b$2) {
			return ad(b$2, a);
		}
		if (0 < Kc.length) {
			ad(Kc[0], a);
			for (var c$1 = 1; c$1 < Kc.length; c$1++) {
				var d$1 = Kc[c$1];
				d$1.blockedOn === a && (d$1.blockedOn = null);
			}
		}
		null !== Lc && ad(Lc, a);
		null !== Mc && ad(Mc, a);
		null !== Nc && ad(Nc, a);
		Oc.forEach(b$1);
		Pc.forEach(b$1);
		for (c$1 = 0; c$1 < Qc.length; c$1++) d$1 = Qc[c$1], d$1.blockedOn === a && (d$1.blockedOn = null);
		for (; 0 < Qc.length && (c$1 = Qc[0], null === c$1.blockedOn);) Vc(c$1), null === c$1.blockedOn && Qc.shift();
	}
	var cd = ua.ReactCurrentBatchConfig, dd = !0;
	function ed(a, b$1, c$1, d$1) {
		var e$1 = C, f$3 = cd.transition;
		cd.transition = null;
		try {
			C = 1, fd(a, b$1, c$1, d$1);
		} finally {
			C = e$1, cd.transition = f$3;
		}
	}
	function gd(a, b$1, c$1, d$1) {
		var e$1 = C, f$3 = cd.transition;
		cd.transition = null;
		try {
			C = 4, fd(a, b$1, c$1, d$1);
		} finally {
			C = e$1, cd.transition = f$3;
		}
	}
	function fd(a, b$1, c$1, d$1) {
		if (dd) {
			var e$1 = Yc(a, b$1, c$1, d$1);
			if (null === e$1) hd(a, b$1, d$1, id, c$1), Sc(a, d$1);
			else if (Uc(e$1, a, b$1, c$1, d$1)) d$1.stopPropagation();
			else if (Sc(a, d$1), b$1 & 4 && -1 < Rc.indexOf(a)) {
				for (; null !== e$1;) {
					var f$3 = Cb(e$1);
					null !== f$3 && Ec(f$3);
					f$3 = Yc(a, b$1, c$1, d$1);
					null === f$3 && hd(a, b$1, d$1, id, c$1);
					if (f$3 === e$1) break;
					e$1 = f$3;
				}
				null !== e$1 && d$1.stopPropagation();
			} else hd(a, b$1, d$1, null, c$1);
		}
	}
	var id = null;
	function Yc(a, b$1, c$1, d$1) {
		id = null;
		a = xb(d$1);
		a = Wc(a);
		if (null !== a) if (b$1 = Vb(a), null === b$1) a = null;
		else if (c$1 = b$1.tag, 13 === c$1) {
			a = Wb(b$1);
			if (null !== a) return a;
			a = null;
		} else if (3 === c$1) {
			if (b$1.stateNode.current.memoizedState.isDehydrated) return 3 === b$1.tag ? b$1.stateNode.containerInfo : null;
			a = null;
		} else b$1 !== a && (a = null);
		id = a;
		return null;
	}
	function jd(a) {
		switch (a) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 4;
			case "message": switch (ec()) {
				case fc: return 1;
				case gc: return 4;
				case hc:
				case ic: return 16;
				case jc: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var kd = null, ld = null, md = null;
	function nd() {
		if (md) return md;
		var a, b$1 = ld, c$1 = b$1.length, d$1, e$1 = "value" in kd ? kd.value : kd.textContent, f$3 = e$1.length;
		for (a = 0; a < c$1 && b$1[a] === e$1[a]; a++);
		var g$2 = c$1 - a;
		for (d$1 = 1; d$1 <= g$2 && b$1[c$1 - d$1] === e$1[f$3 - d$1]; d$1++);
		return md = e$1.slice(a, 1 < d$1 ? 1 - d$1 : void 0);
	}
	function od(a) {
		var b$1 = a.keyCode;
		"charCode" in a ? (a = a.charCode, 0 === a && 13 === b$1 && (a = 13)) : a = b$1;
		10 === a && (a = 13);
		return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
		return !0;
	}
	function qd() {
		return !1;
	}
	function rd(a) {
		function b$1(b$2, d$1, e$1, f$3, g$2) {
			this._reactName = b$2;
			this._targetInst = e$1;
			this.type = d$1;
			this.nativeEvent = f$3;
			this.target = g$2;
			this.currentTarget = null;
			for (var c$1 in a) a.hasOwnProperty(c$1) && (b$2 = a[c$1], this[c$1] = b$2 ? b$2(f$3) : f$3[c$1]);
			this.isDefaultPrevented = (null != f$3.defaultPrevented ? f$3.defaultPrevented : !1 === f$3.returnValue) ? pd : qd;
			this.isPropagationStopped = qd;
			return this;
		}
		A(b$1.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var a$1 = this.nativeEvent;
				a$1 && (a$1.preventDefault ? a$1.preventDefault() : "unknown" !== typeof a$1.returnValue && (a$1.returnValue = !1), this.isDefaultPrevented = pd);
			},
			stopPropagation: function() {
				var a$1 = this.nativeEvent;
				a$1 && (a$1.stopPropagation ? a$1.stopPropagation() : "unknown" !== typeof a$1.cancelBubble && (a$1.cancelBubble = !0), this.isPropagationStopped = pd);
			},
			persist: function() {},
			isPersistent: pd
		});
		return b$1;
	}
	var sd = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(a) {
			return a.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, td = rd(sd), ud = A({}, sd, {
		view: 0,
		detail: 0
	}), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: zd,
		button: 0,
		buttons: 0,
		relatedTarget: function(a) {
			return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
		},
		movementX: function(a) {
			if ("movementX" in a) return a.movementX;
			a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
			return wd;
		},
		movementY: function(a) {
			return "movementY" in a ? a.movementY : xd;
		}
	}), Bd = rd(Ad), Dd = rd(A({}, Ad, { dataTransfer: 0 })), Fd = rd(A({}, ud, { relatedTarget: 0 })), Hd = rd(A({}, sd, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Jd = rd(A({}, sd, { clipboardData: function(a) {
		return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	} })), Ld = rd(A({}, sd, { data: 0 })), Md = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Nd = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Od = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Pd(a) {
		var b$1 = this.nativeEvent;
		return b$1.getModifierState ? b$1.getModifierState(a) : (a = Od[a]) ? !!b$1[a] : !1;
	}
	function zd() {
		return Pd;
	}
	var Rd = rd(A({}, ud, {
		key: function(a) {
			if (a.key) {
				var b$1 = Md[a.key] || a.key;
				if ("Unidentified" !== b$1) return b$1;
			}
			return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: zd,
		charCode: function(a) {
			return "keypress" === a.type ? od(a) : 0;
		},
		keyCode: function(a) {
			return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		},
		which: function(a) {
			return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		}
	})), Td = rd(A({}, Ad, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Vd = rd(A({}, ud, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: zd
	})), Xd = rd(A({}, sd, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Zd = rd(A({}, Ad, {
		deltaX: function(a) {
			return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
		},
		deltaY: function(a) {
			return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), $d = [
		9,
		13,
		27,
		32
	], ae = ia && "CompositionEvent" in window, be = null;
	ia && "documentMode" in document && (be = document.documentMode);
	var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
	function ge(a, b$1) {
		switch (a) {
			case "keyup": return -1 !== $d.indexOf(b$1.keyCode);
			case "keydown": return 229 !== b$1.keyCode;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function he(a) {
		a = a.detail;
		return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie = !1;
	function je(a, b$1) {
		switch (a) {
			case "compositionend": return he(b$1);
			case "keypress":
				if (32 !== b$1.which) return null;
				fe = !0;
				return ee;
			case "textInput": return a = b$1.data, a === ee && fe ? null : a;
			default: return null;
		}
	}
	function ke(a, b$1) {
		if (ie) return "compositionend" === a || !ae && ge(a, b$1) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
		switch (a) {
			case "paste": return null;
			case "keypress":
				if (!(b$1.ctrlKey || b$1.altKey || b$1.metaKey) || b$1.ctrlKey && b$1.altKey) {
					if (b$1.char && 1 < b$1.char.length) return b$1.char;
					if (b$1.which) return String.fromCharCode(b$1.which);
				}
				return null;
			case "compositionend": return de && "ko" !== b$1.locale ? null : b$1.data;
			default: return null;
		}
	}
	var le = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function me(a) {
		var b$1 = a && a.nodeName && a.nodeName.toLowerCase();
		return "input" === b$1 ? !!le[a.type] : "textarea" === b$1 ? !0 : !1;
	}
	function ne(a, b$1, c$1, d$1) {
		Eb(d$1);
		b$1 = oe(b$1, "onChange");
		0 < b$1.length && (c$1 = new td("onChange", "change", null, c$1, d$1), a.push({
			event: c$1,
			listeners: b$1
		}));
	}
	var pe = null, qe = null;
	function re(a) {
		se(a, 0);
	}
	function te(a) {
		if (Wa(ue(a))) return a;
	}
	function ve(a, b$1) {
		if ("change" === a) return b$1;
	}
	var we = !1;
	if (ia) {
		var xe;
		if (ia) {
			var ye = "oninput" in document;
			if (!ye) {
				var ze = document.createElement("div");
				ze.setAttribute("oninput", "return;");
				ye = "function" === typeof ze.oninput;
			}
			xe = ye;
		} else xe = !1;
		we = xe && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae() {
		pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}
	function Be(a) {
		if ("value" === a.propertyName && te(qe)) {
			var b$1 = [];
			ne(b$1, qe, a, xb(a));
			Jb(re, b$1);
		}
	}
	function Ce(a, b$1, c$1) {
		"focusin" === a ? (Ae(), pe = b$1, qe = c$1, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}
	function De(a) {
		if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
	}
	function Ee(a, b$1) {
		if ("click" === a) return te(b$1);
	}
	function Fe(a, b$1) {
		if ("input" === a || "change" === a) return te(b$1);
	}
	function Ge(a, b$1) {
		return a === b$1 && (0 !== a || 1 / a === 1 / b$1) || a !== a && b$1 !== b$1;
	}
	var He = "function" === typeof Object.is ? Object.is : Ge;
	function Ie(a, b$1) {
		if (He(a, b$1)) return !0;
		if ("object" !== typeof a || null === a || "object" !== typeof b$1 || null === b$1) return !1;
		var c$1 = Object.keys(a), d$1 = Object.keys(b$1);
		if (c$1.length !== d$1.length) return !1;
		for (d$1 = 0; d$1 < c$1.length; d$1++) {
			var e$1 = c$1[d$1];
			if (!ja.call(b$1, e$1) || !He(a[e$1], b$1[e$1])) return !1;
		}
		return !0;
	}
	function Je(a) {
		for (; a && a.firstChild;) a = a.firstChild;
		return a;
	}
	function Ke(a, b$1) {
		var c$1 = Je(a);
		a = 0;
		for (var d$1; c$1;) {
			if (3 === c$1.nodeType) {
				d$1 = a + c$1.textContent.length;
				if (a <= b$1 && d$1 >= b$1) return {
					node: c$1,
					offset: b$1 - a
				};
				a = d$1;
			}
			a: {
				for (; c$1;) {
					if (c$1.nextSibling) {
						c$1 = c$1.nextSibling;
						break a;
					}
					c$1 = c$1.parentNode;
				}
				c$1 = void 0;
			}
			c$1 = Je(c$1);
		}
	}
	function Le(a, b$1) {
		return a && b$1 ? a === b$1 ? !0 : a && 3 === a.nodeType ? !1 : b$1 && 3 === b$1.nodeType ? Le(a, b$1.parentNode) : "contains" in a ? a.contains(b$1) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b$1) & 16) : !1 : !1;
	}
	function Me() {
		for (var a = window, b$1 = Xa(); b$1 instanceof a.HTMLIFrameElement;) {
			try {
				var c$1 = "string" === typeof b$1.contentWindow.location.href;
			} catch (d$1) {
				c$1 = !1;
			}
			if (c$1) a = b$1.contentWindow;
			else break;
			b$1 = Xa(a.document);
		}
		return b$1;
	}
	function Ne(a) {
		var b$1 = a && a.nodeName && a.nodeName.toLowerCase();
		return b$1 && ("input" === b$1 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b$1 || "true" === a.contentEditable);
	}
	function Oe(a) {
		var b$1 = Me(), c$1 = a.focusedElem, d$1 = a.selectionRange;
		if (b$1 !== c$1 && c$1 && c$1.ownerDocument && Le(c$1.ownerDocument.documentElement, c$1)) {
			if (null !== d$1 && Ne(c$1)) {
				if (b$1 = d$1.start, a = d$1.end, void 0 === a && (a = b$1), "selectionStart" in c$1) c$1.selectionStart = b$1, c$1.selectionEnd = Math.min(a, c$1.value.length);
				else if (a = (b$1 = c$1.ownerDocument || document) && b$1.defaultView || window, a.getSelection) {
					a = a.getSelection();
					var e$1 = c$1.textContent.length, f$3 = Math.min(d$1.start, e$1);
					d$1 = void 0 === d$1.end ? f$3 : Math.min(d$1.end, e$1);
					!a.extend && f$3 > d$1 && (e$1 = d$1, d$1 = f$3, f$3 = e$1);
					e$1 = Ke(c$1, f$3);
					var g$2 = Ke(c$1, d$1);
					e$1 && g$2 && (1 !== a.rangeCount || a.anchorNode !== e$1.node || a.anchorOffset !== e$1.offset || a.focusNode !== g$2.node || a.focusOffset !== g$2.offset) && (b$1 = b$1.createRange(), b$1.setStart(e$1.node, e$1.offset), a.removeAllRanges(), f$3 > d$1 ? (a.addRange(b$1), a.extend(g$2.node, g$2.offset)) : (b$1.setEnd(g$2.node, g$2.offset), a.addRange(b$1)));
				}
			}
			b$1 = [];
			for (a = c$1; a = a.parentNode;) 1 === a.nodeType && b$1.push({
				element: a,
				left: a.scrollLeft,
				top: a.scrollTop
			});
			"function" === typeof c$1.focus && c$1.focus();
			for (c$1 = 0; c$1 < b$1.length; c$1++) a = b$1[c$1], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
		}
	}
	var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
	function Ue(a, b$1, c$1) {
		var d$1 = c$1.window === c$1 ? c$1.document : 9 === c$1.nodeType ? c$1 : c$1.ownerDocument;
		Te || null == Qe || Qe !== Xa(d$1) || (d$1 = Qe, "selectionStart" in d$1 && Ne(d$1) ? d$1 = {
			start: d$1.selectionStart,
			end: d$1.selectionEnd
		} : (d$1 = (d$1.ownerDocument && d$1.ownerDocument.defaultView || window).getSelection(), d$1 = {
			anchorNode: d$1.anchorNode,
			anchorOffset: d$1.anchorOffset,
			focusNode: d$1.focusNode,
			focusOffset: d$1.focusOffset
		}), Se && Ie(Se, d$1) || (Se = d$1, d$1 = oe(Re, "onSelect"), 0 < d$1.length && (b$1 = new td("onSelect", "select", null, b$1, c$1), a.push({
			event: b$1,
			listeners: d$1
		}), b$1.target = Qe)));
	}
	function Ve(a, b$1) {
		var c$1 = {};
		c$1[a.toLowerCase()] = b$1.toLowerCase();
		c$1["Webkit" + a] = "webkit" + b$1;
		c$1["Moz" + a] = "moz" + b$1;
		return c$1;
	}
	var We = {
		animationend: Ve("Animation", "AnimationEnd"),
		animationiteration: Ve("Animation", "AnimationIteration"),
		animationstart: Ve("Animation", "AnimationStart"),
		transitionend: Ve("Transition", "TransitionEnd")
	}, Xe = {}, Ye = {};
	ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
	function Ze(a) {
		if (Xe[a]) return Xe[a];
		if (!We[a]) return a;
		var b$1 = We[a], c$1;
		for (c$1 in b$1) if (b$1.hasOwnProperty(c$1) && c$1 in Ye) return Xe[a] = b$1[c$1];
		return a;
	}
	var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a, b$1) {
		df.set(a, b$1);
		fa(b$1, [a]);
	}
	for (var gf = 0; gf < ef.length; gf++) {
		var hf = ef[gf];
		ff(hf.toLowerCase(), "on" + (hf[0].toUpperCase() + hf.slice(1)));
	}
	ff($e, "onAnimationEnd");
	ff(af, "onAnimationIteration");
	ff(bf, "onAnimationStart");
	ff("dblclick", "onDoubleClick");
	ff("focusin", "onFocus");
	ff("focusout", "onBlur");
	ff(cf, "onTransitionEnd");
	ha("onMouseEnter", ["mouseout", "mouseover"]);
	ha("onMouseLeave", ["mouseout", "mouseover"]);
	ha("onPointerEnter", ["pointerout", "pointerover"]);
	ha("onPointerLeave", ["pointerout", "pointerover"]);
	fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	fa("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]);
	fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a, b$1, c$1) {
		var d$1 = a.type || "unknown-event";
		a.currentTarget = c$1;
		Ub(d$1, b$1, void 0, a);
		a.currentTarget = null;
	}
	function se(a, b$1) {
		b$1 = 0 !== (b$1 & 4);
		for (var c$1 = 0; c$1 < a.length; c$1++) {
			var d$1 = a[c$1], e$1 = d$1.event;
			d$1 = d$1.listeners;
			a: {
				var f$3 = void 0;
				if (b$1) for (var g$2 = d$1.length - 1; 0 <= g$2; g$2--) {
					var h$2 = d$1[g$2], k$3 = h$2.instance, l$4 = h$2.currentTarget;
					h$2 = h$2.listener;
					if (k$3 !== f$3 && e$1.isPropagationStopped()) break a;
					nf(e$1, h$2, l$4);
					f$3 = k$3;
				}
				else for (g$2 = 0; g$2 < d$1.length; g$2++) {
					h$2 = d$1[g$2];
					k$3 = h$2.instance;
					l$4 = h$2.currentTarget;
					h$2 = h$2.listener;
					if (k$3 !== f$3 && e$1.isPropagationStopped()) break a;
					nf(e$1, h$2, l$4);
					f$3 = k$3;
				}
			}
		}
		if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
	}
	function D(a, b$1) {
		var c$1 = b$1[of];
		void 0 === c$1 && (c$1 = b$1[of] = /* @__PURE__ */ new Set());
		var d$1 = a + "__bubble";
		c$1.has(d$1) || (pf(b$1, a, 2, !1), c$1.add(d$1));
	}
	function qf(a, b$1, c$1) {
		var d$1 = 0;
		b$1 && (d$1 |= 4);
		pf(c$1, a, d$1, b$1);
	}
	var rf = "_reactListening" + Math.random().toString(36).slice(2);
	function sf(a) {
		if (!a[rf]) {
			a[rf] = !0;
			da.forEach(function(b$2) {
				"selectionchange" !== b$2 && (mf.has(b$2) || qf(b$2, !1, a), qf(b$2, !0, a));
			});
			var b$1 = 9 === a.nodeType ? a : a.ownerDocument;
			null === b$1 || b$1[rf] || (b$1[rf] = !0, qf("selectionchange", !1, b$1));
		}
	}
	function pf(a, b$1, c$1, d$1) {
		switch (jd(b$1)) {
			case 1:
				var e$1 = ed;
				break;
			case 4:
				e$1 = gd;
				break;
			default: e$1 = fd;
		}
		c$1 = e$1.bind(null, b$1, c$1, a);
		e$1 = void 0;
		!Lb || "touchstart" !== b$1 && "touchmove" !== b$1 && "wheel" !== b$1 || (e$1 = !0);
		d$1 ? void 0 !== e$1 ? a.addEventListener(b$1, c$1, {
			capture: !0,
			passive: e$1
		}) : a.addEventListener(b$1, c$1, !0) : void 0 !== e$1 ? a.addEventListener(b$1, c$1, { passive: e$1 }) : a.addEventListener(b$1, c$1, !1);
	}
	function hd(a, b$1, c$1, d$1, e$1) {
		var f$3 = d$1;
		if (0 === (b$1 & 1) && 0 === (b$1 & 2) && null !== d$1) a: for (;;) {
			if (null === d$1) return;
			var g$2 = d$1.tag;
			if (3 === g$2 || 4 === g$2) {
				var h$2 = d$1.stateNode.containerInfo;
				if (h$2 === e$1 || 8 === h$2.nodeType && h$2.parentNode === e$1) break;
				if (4 === g$2) for (g$2 = d$1.return; null !== g$2;) {
					var k$3 = g$2.tag;
					if (3 === k$3 || 4 === k$3) {
						if (k$3 = g$2.stateNode.containerInfo, k$3 === e$1 || 8 === k$3.nodeType && k$3.parentNode === e$1) return;
					}
					g$2 = g$2.return;
				}
				for (; null !== h$2;) {
					g$2 = Wc(h$2);
					if (null === g$2) return;
					k$3 = g$2.tag;
					if (5 === k$3 || 6 === k$3) {
						d$1 = f$3 = g$2;
						continue a;
					}
					h$2 = h$2.parentNode;
				}
			}
			d$1 = d$1.return;
		}
		Jb(function() {
			var d$2 = f$3, e$2 = xb(c$1), g$3 = [];
			a: {
				var h$3 = df.get(a);
				if (void 0 !== h$3) {
					var k$4 = td, n$3 = a;
					switch (a) {
						case "keypress": if (0 === od(c$1)) break a;
						case "keydown":
						case "keyup":
							k$4 = Rd;
							break;
						case "focusin":
							n$3 = "focus";
							k$4 = Fd;
							break;
						case "focusout":
							n$3 = "blur";
							k$4 = Fd;
							break;
						case "beforeblur":
						case "afterblur":
							k$4 = Fd;
							break;
						case "click": if (2 === c$1.button) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							k$4 = Bd;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							k$4 = Dd;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							k$4 = Vd;
							break;
						case $e:
						case af:
						case bf:
							k$4 = Hd;
							break;
						case cf:
							k$4 = Xd;
							break;
						case "scroll":
							k$4 = vd;
							break;
						case "wheel":
							k$4 = Zd;
							break;
						case "copy":
						case "cut":
						case "paste":
							k$4 = Jd;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": k$4 = Td;
					}
					var t$4 = 0 !== (b$1 & 4), J$2 = !t$4 && "scroll" === a, x$2 = t$4 ? null !== h$3 ? h$3 + "Capture" : null : h$3;
					t$4 = [];
					for (var w$2 = d$2, u$2; null !== w$2;) {
						u$2 = w$2;
						var F$2 = u$2.stateNode;
						5 === u$2.tag && null !== F$2 && (u$2 = F$2, null !== x$2 && (F$2 = Kb(w$2, x$2), null != F$2 && t$4.push(tf(w$2, F$2, u$2))));
						if (J$2) break;
						w$2 = w$2.return;
					}
					0 < t$4.length && (h$3 = new k$4(h$3, n$3, null, c$1, e$2), g$3.push({
						event: h$3,
						listeners: t$4
					}));
				}
			}
			if (0 === (b$1 & 7)) {
				a: {
					h$3 = "mouseover" === a || "pointerover" === a;
					k$4 = "mouseout" === a || "pointerout" === a;
					if (h$3 && c$1 !== wb && (n$3 = c$1.relatedTarget || c$1.fromElement) && (Wc(n$3) || n$3[uf])) break a;
					if (k$4 || h$3) {
						h$3 = e$2.window === e$2 ? e$2 : (h$3 = e$2.ownerDocument) ? h$3.defaultView || h$3.parentWindow : window;
						if (k$4) {
							if (n$3 = c$1.relatedTarget || c$1.toElement, k$4 = d$2, n$3 = n$3 ? Wc(n$3) : null, null !== n$3 && (J$2 = Vb(n$3), n$3 !== J$2 || 5 !== n$3.tag && 6 !== n$3.tag)) n$3 = null;
						} else k$4 = null, n$3 = d$2;
						if (k$4 !== n$3) {
							t$4 = Bd;
							F$2 = "onMouseLeave";
							x$2 = "onMouseEnter";
							w$2 = "mouse";
							if ("pointerout" === a || "pointerover" === a) t$4 = Td, F$2 = "onPointerLeave", x$2 = "onPointerEnter", w$2 = "pointer";
							J$2 = null == k$4 ? h$3 : ue(k$4);
							u$2 = null == n$3 ? h$3 : ue(n$3);
							h$3 = new t$4(F$2, w$2 + "leave", k$4, c$1, e$2);
							h$3.target = J$2;
							h$3.relatedTarget = u$2;
							F$2 = null;
							Wc(e$2) === d$2 && (t$4 = new t$4(x$2, w$2 + "enter", n$3, c$1, e$2), t$4.target = u$2, t$4.relatedTarget = J$2, F$2 = t$4);
							J$2 = F$2;
							if (k$4 && n$3) b: {
								t$4 = k$4;
								x$2 = n$3;
								w$2 = 0;
								for (u$2 = t$4; u$2; u$2 = vf(u$2)) w$2++;
								u$2 = 0;
								for (F$2 = x$2; F$2; F$2 = vf(F$2)) u$2++;
								for (; 0 < w$2 - u$2;) t$4 = vf(t$4), w$2--;
								for (; 0 < u$2 - w$2;) x$2 = vf(x$2), u$2--;
								for (; w$2--;) {
									if (t$4 === x$2 || null !== x$2 && t$4 === x$2.alternate) break b;
									t$4 = vf(t$4);
									x$2 = vf(x$2);
								}
								t$4 = null;
							}
							else t$4 = null;
							null !== k$4 && wf(g$3, h$3, k$4, t$4, !1);
							null !== n$3 && null !== J$2 && wf(g$3, J$2, n$3, t$4, !0);
						}
					}
				}
				a: {
					h$3 = d$2 ? ue(d$2) : window;
					k$4 = h$3.nodeName && h$3.nodeName.toLowerCase();
					if ("select" === k$4 || "input" === k$4 && "file" === h$3.type) var na = ve;
					else if (me(h$3)) if (we) na = Fe;
					else {
						na = De;
						var xa = Ce;
					}
					else (k$4 = h$3.nodeName) && "input" === k$4.toLowerCase() && ("checkbox" === h$3.type || "radio" === h$3.type) && (na = Ee);
					if (na && (na = na(a, d$2))) {
						ne(g$3, na, c$1, e$2);
						break a;
					}
					xa && xa(a, h$3, d$2);
					"focusout" === a && (xa = h$3._wrapperState) && xa.controlled && "number" === h$3.type && cb(h$3, "number", h$3.value);
				}
				xa = d$2 ? ue(d$2) : window;
				switch (a) {
					case "focusin":
						if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d$2, Se = null;
						break;
					case "focusout":
						Se = Re = Qe = null;
						break;
					case "mousedown":
						Te = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Te = !1;
						Ue(g$3, c$1, e$2);
						break;
					case "selectionchange": if (Pe) break;
					case "keydown":
					case "keyup": Ue(g$3, c$1, e$2);
				}
				var $a;
				if (ae) b: {
					switch (a) {
						case "compositionstart":
							var ba = "onCompositionStart";
							break b;
						case "compositionend":
							ba = "onCompositionEnd";
							break b;
						case "compositionupdate":
							ba = "onCompositionUpdate";
							break b;
					}
					ba = void 0;
				}
				else ie ? ge(a, c$1) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c$1.keyCode && (ba = "onCompositionStart");
				ba && (de && "ko" !== c$1.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e$2, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d$2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c$1, e$2), g$3.push({
					event: ba,
					listeners: xa
				}), $a ? ba.data = $a : ($a = he(c$1), null !== $a && (ba.data = $a))));
				if ($a = ce ? je(a, c$1) : ke(a, c$1)) d$2 = oe(d$2, "onBeforeInput"), 0 < d$2.length && (e$2 = new Ld("onBeforeInput", "beforeinput", null, c$1, e$2), g$3.push({
					event: e$2,
					listeners: d$2
				}), e$2.data = $a);
			}
			se(g$3, b$1);
		});
	}
	function tf(a, b$1, c$1) {
		return {
			instance: a,
			listener: b$1,
			currentTarget: c$1
		};
	}
	function oe(a, b$1) {
		for (var c$1 = b$1 + "Capture", d$1 = []; null !== a;) {
			var e$1 = a, f$3 = e$1.stateNode;
			5 === e$1.tag && null !== f$3 && (e$1 = f$3, f$3 = Kb(a, c$1), null != f$3 && d$1.unshift(tf(a, f$3, e$1)), f$3 = Kb(a, b$1), null != f$3 && d$1.push(tf(a, f$3, e$1)));
			a = a.return;
		}
		return d$1;
	}
	function vf(a) {
		if (null === a) return null;
		do
			a = a.return;
		while (a && 5 !== a.tag);
		return a ? a : null;
	}
	function wf(a, b$1, c$1, d$1, e$1) {
		for (var f$3 = b$1._reactName, g$2 = []; null !== c$1 && c$1 !== d$1;) {
			var h$2 = c$1, k$3 = h$2.alternate, l$4 = h$2.stateNode;
			if (null !== k$3 && k$3 === d$1) break;
			5 === h$2.tag && null !== l$4 && (h$2 = l$4, e$1 ? (k$3 = Kb(c$1, f$3), null != k$3 && g$2.unshift(tf(c$1, k$3, h$2))) : e$1 || (k$3 = Kb(c$1, f$3), null != k$3 && g$2.push(tf(c$1, k$3, h$2))));
			c$1 = c$1.return;
		}
		0 !== g$2.length && a.push({
			event: b$1,
			listeners: g$2
		});
	}
	var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
	function zf(a) {
		return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
	}
	function Af(a, b$1, c$1) {
		b$1 = zf(b$1);
		if (zf(a) !== b$1 && c$1) throw Error(p(425));
	}
	function Bf() {}
	var Cf = null, Df = null;
	function Ef(a, b$1) {
		return "textarea" === a || "noscript" === a || "string" === typeof b$1.children || "number" === typeof b$1.children || "object" === typeof b$1.dangerouslySetInnerHTML && null !== b$1.dangerouslySetInnerHTML && null != b$1.dangerouslySetInnerHTML.__html;
	}
	var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
		return Hf.resolve(null).then(a).catch(If);
	} : Ff;
	function If(a) {
		setTimeout(function() {
			throw a;
		});
	}
	function Kf(a, b$1) {
		var c$1 = b$1, d$1 = 0;
		do {
			var e$1 = c$1.nextSibling;
			a.removeChild(c$1);
			if (e$1 && 8 === e$1.nodeType) if (c$1 = e$1.data, "/$" === c$1) {
				if (0 === d$1) {
					a.removeChild(e$1);
					bd(b$1);
					return;
				}
				d$1--;
			} else "$" !== c$1 && "$?" !== c$1 && "$!" !== c$1 || d$1++;
			c$1 = e$1;
		} while (c$1);
		bd(b$1);
	}
	function Lf(a) {
		for (; null != a; a = a.nextSibling) {
			var b$1 = a.nodeType;
			if (1 === b$1 || 3 === b$1) break;
			if (8 === b$1) {
				b$1 = a.data;
				if ("$" === b$1 || "$!" === b$1 || "$?" === b$1) break;
				if ("/$" === b$1) return null;
			}
		}
		return a;
	}
	function Mf(a) {
		a = a.previousSibling;
		for (var b$1 = 0; a;) {
			if (8 === a.nodeType) {
				var c$1 = a.data;
				if ("$" === c$1 || "$!" === c$1 || "$?" === c$1) {
					if (0 === b$1) return a;
					b$1--;
				} else "/$" === c$1 && b$1++;
			}
			a = a.previousSibling;
		}
		return null;
	}
	var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
	function Wc(a) {
		var b$1 = a[Of];
		if (b$1) return b$1;
		for (var c$1 = a.parentNode; c$1;) {
			if (b$1 = c$1[uf] || c$1[Of]) {
				c$1 = b$1.alternate;
				if (null !== b$1.child || null !== c$1 && null !== c$1.child) for (a = Mf(a); null !== a;) {
					if (c$1 = a[Of]) return c$1;
					a = Mf(a);
				}
				return b$1;
			}
			a = c$1;
			c$1 = a.parentNode;
		}
		return null;
	}
	function Cb(a) {
		a = a[Of] || a[uf];
		return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue(a) {
		if (5 === a.tag || 6 === a.tag) return a.stateNode;
		throw Error(p(33));
	}
	function Db(a) {
		return a[Pf] || null;
	}
	var Sf = [], Tf = -1;
	function Uf(a) {
		return { current: a };
	}
	function E(a) {
		0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
	}
	function G(a, b$1) {
		Tf++;
		Sf[Tf] = a.current;
		a.current = b$1;
	}
	var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
	function Yf(a, b$1) {
		var c$1 = a.type.contextTypes;
		if (!c$1) return Vf;
		var d$1 = a.stateNode;
		if (d$1 && d$1.__reactInternalMemoizedUnmaskedChildContext === b$1) return d$1.__reactInternalMemoizedMaskedChildContext;
		var e$1 = {}, f$3;
		for (f$3 in c$1) e$1[f$3] = b$1[f$3];
		d$1 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b$1, a.__reactInternalMemoizedMaskedChildContext = e$1);
		return e$1;
	}
	function Zf(a) {
		a = a.childContextTypes;
		return null !== a && void 0 !== a;
	}
	function $f() {
		E(Wf);
		E(H);
	}
	function ag(a, b$1, c$1) {
		if (H.current !== Vf) throw Error(p(168));
		G(H, b$1);
		G(Wf, c$1);
	}
	function bg(a, b$1, c$1) {
		var d$1 = a.stateNode;
		b$1 = b$1.childContextTypes;
		if ("function" !== typeof d$1.getChildContext) return c$1;
		d$1 = d$1.getChildContext();
		for (var e$1 in d$1) if (!(e$1 in b$1)) throw Error(p(108, Ra(a) || "Unknown", e$1));
		return A({}, c$1, d$1);
	}
	function cg(a) {
		a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
		Xf = H.current;
		G(H, a);
		G(Wf, Wf.current);
		return !0;
	}
	function dg(a, b$1, c$1) {
		var d$1 = a.stateNode;
		if (!d$1) throw Error(p(169));
		c$1 ? (a = bg(a, b$1, Xf), d$1.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
		G(Wf, c$1);
	}
	var eg = null, fg = !1, gg = !1;
	function hg(a) {
		null === eg ? eg = [a] : eg.push(a);
	}
	function ig(a) {
		fg = !0;
		hg(a);
	}
	function jg() {
		if (!gg && null !== eg) {
			gg = !0;
			var a = 0, b$1 = C;
			try {
				var c$1 = eg;
				for (C = 1; a < c$1.length; a++) {
					var d$1 = c$1[a];
					do
						d$1 = d$1(!0);
					while (null !== d$1);
				}
				eg = null;
				fg = !1;
			} catch (e$1) {
				throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e$1;
			} finally {
				C = b$1, gg = !1;
			}
		}
		return null;
	}
	var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
	function tg(a, b$1) {
		kg[lg++] = ng;
		kg[lg++] = mg;
		mg = a;
		ng = b$1;
	}
	function ug(a, b$1, c$1) {
		og[pg++] = rg;
		og[pg++] = sg;
		og[pg++] = qg;
		qg = a;
		var d$1 = rg;
		a = sg;
		var e$1 = 32 - oc(d$1) - 1;
		d$1 &= ~(1 << e$1);
		c$1 += 1;
		var f$3 = 32 - oc(b$1) + e$1;
		if (30 < f$3) {
			var g$2 = e$1 - e$1 % 5;
			f$3 = (d$1 & (1 << g$2) - 1).toString(32);
			d$1 >>= g$2;
			e$1 -= g$2;
			rg = 1 << 32 - oc(b$1) + e$1 | c$1 << e$1 | d$1;
			sg = f$3 + a;
		} else rg = 1 << f$3 | c$1 << e$1 | d$1, sg = a;
	}
	function vg(a) {
		null !== a.return && (tg(a, 1), ug(a, 1, 0));
	}
	function wg(a) {
		for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
		for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
	}
	var xg = null, yg = null, I = !1, zg = null;
	function Ag(a, b$1) {
		var c$1 = Bg(5, null, null, 0);
		c$1.elementType = "DELETED";
		c$1.stateNode = b$1;
		c$1.return = a;
		b$1 = a.deletions;
		null === b$1 ? (a.deletions = [c$1], a.flags |= 16) : b$1.push(c$1);
	}
	function Cg(a, b$1) {
		switch (a.tag) {
			case 5:
				var c$1 = a.type;
				b$1 = 1 !== b$1.nodeType || c$1.toLowerCase() !== b$1.nodeName.toLowerCase() ? null : b$1;
				return null !== b$1 ? (a.stateNode = b$1, xg = a, yg = Lf(b$1.firstChild), !0) : !1;
			case 6: return b$1 = "" === a.pendingProps || 3 !== b$1.nodeType ? null : b$1, null !== b$1 ? (a.stateNode = b$1, xg = a, yg = null, !0) : !1;
			case 13: return b$1 = 8 !== b$1.nodeType ? null : b$1, null !== b$1 ? (c$1 = null !== qg ? {
				id: rg,
				overflow: sg
			} : null, a.memoizedState = {
				dehydrated: b$1,
				treeContext: c$1,
				retryLane: 1073741824
			}, c$1 = Bg(18, null, null, 0), c$1.stateNode = b$1, c$1.return = a, a.child = c$1, xg = a, yg = null, !0) : !1;
			default: return !1;
		}
	}
	function Dg(a) {
		return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
	}
	function Eg(a) {
		if (I) {
			var b$1 = yg;
			if (b$1) {
				var c$1 = b$1;
				if (!Cg(a, b$1)) {
					if (Dg(a)) throw Error(p(418));
					b$1 = Lf(c$1.nextSibling);
					var d$1 = xg;
					b$1 && Cg(a, b$1) ? Ag(d$1, c$1) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
				}
			} else {
				if (Dg(a)) throw Error(p(418));
				a.flags = a.flags & -4097 | 2;
				I = !1;
				xg = a;
			}
		}
	}
	function Fg(a) {
		for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
		xg = a;
	}
	function Gg(a) {
		if (a !== xg) return !1;
		if (!I) return Fg(a), I = !0, !1;
		var b$1;
		(b$1 = 3 !== a.tag) && !(b$1 = 5 !== a.tag) && (b$1 = a.type, b$1 = "head" !== b$1 && "body" !== b$1 && !Ef(a.type, a.memoizedProps));
		if (b$1 && (b$1 = yg)) {
			if (Dg(a)) throw Hg(), Error(p(418));
			for (; b$1;) Ag(a, b$1), b$1 = Lf(b$1.nextSibling);
		}
		Fg(a);
		if (13 === a.tag) {
			a = a.memoizedState;
			a = null !== a ? a.dehydrated : null;
			if (!a) throw Error(p(317));
			a: {
				a = a.nextSibling;
				for (b$1 = 0; a;) {
					if (8 === a.nodeType) {
						var c$1 = a.data;
						if ("/$" === c$1) {
							if (0 === b$1) {
								yg = Lf(a.nextSibling);
								break a;
							}
							b$1--;
						} else "$" !== c$1 && "$!" !== c$1 && "$?" !== c$1 || b$1++;
					}
					a = a.nextSibling;
				}
				yg = null;
			}
		} else yg = xg ? Lf(a.stateNode.nextSibling) : null;
		return !0;
	}
	function Hg() {
		for (var a = yg; a;) a = Lf(a.nextSibling);
	}
	function Ig() {
		yg = xg = null;
		I = !1;
	}
	function Jg(a) {
		null === zg ? zg = [a] : zg.push(a);
	}
	var Kg = ua.ReactCurrentBatchConfig;
	function Lg(a, b$1, c$1) {
		a = c$1.ref;
		if (null !== a && "function" !== typeof a && "object" !== typeof a) {
			if (c$1._owner) {
				c$1 = c$1._owner;
				if (c$1) {
					if (1 !== c$1.tag) throw Error(p(309));
					var d$1 = c$1.stateNode;
				}
				if (!d$1) throw Error(p(147, a));
				var e$1 = d$1, f$3 = "" + a;
				if (null !== b$1 && null !== b$1.ref && "function" === typeof b$1.ref && b$1.ref._stringRef === f$3) return b$1.ref;
				b$1 = function(a$1) {
					var b$2 = e$1.refs;
					null === a$1 ? delete b$2[f$3] : b$2[f$3] = a$1;
				};
				b$1._stringRef = f$3;
				return b$1;
			}
			if ("string" !== typeof a) throw Error(p(284));
			if (!c$1._owner) throw Error(p(290, a));
		}
		return a;
	}
	function Mg(a, b$1) {
		a = Object.prototype.toString.call(b$1);
		throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b$1).join(", ") + "}" : a));
	}
	function Ng(a) {
		var b$1 = a._init;
		return b$1(a._payload);
	}
	function Og(a) {
		function b$1(b$2, c$2) {
			if (a) {
				var d$2 = b$2.deletions;
				null === d$2 ? (b$2.deletions = [c$2], b$2.flags |= 16) : d$2.push(c$2);
			}
		}
		function c$1(c$2, d$2) {
			if (!a) return null;
			for (; null !== d$2;) b$1(c$2, d$2), d$2 = d$2.sibling;
			return null;
		}
		function d$1(a$1, b$2) {
			for (a$1 = /* @__PURE__ */ new Map(); null !== b$2;) null !== b$2.key ? a$1.set(b$2.key, b$2) : a$1.set(b$2.index, b$2), b$2 = b$2.sibling;
			return a$1;
		}
		function e$1(a$1, b$2) {
			a$1 = Pg(a$1, b$2);
			a$1.index = 0;
			a$1.sibling = null;
			return a$1;
		}
		function f$3(b$2, c$2, d$2) {
			b$2.index = d$2;
			if (!a) return b$2.flags |= 1048576, c$2;
			d$2 = b$2.alternate;
			if (null !== d$2) return d$2 = d$2.index, d$2 < c$2 ? (b$2.flags |= 2, c$2) : d$2;
			b$2.flags |= 2;
			return c$2;
		}
		function g$2(b$2) {
			a && null === b$2.alternate && (b$2.flags |= 2);
			return b$2;
		}
		function h$2(a$1, b$2, c$2, d$2) {
			if (null === b$2 || 6 !== b$2.tag) return b$2 = Qg(c$2, a$1.mode, d$2), b$2.return = a$1, b$2;
			b$2 = e$1(b$2, c$2);
			b$2.return = a$1;
			return b$2;
		}
		function k$3(a$1, b$2, c$2, d$2) {
			var f$4 = c$2.type;
			if (f$4 === ya) return m$2(a$1, b$2, c$2.props.children, d$2, c$2.key);
			if (null !== b$2 && (b$2.elementType === f$4 || "object" === typeof f$4 && null !== f$4 && f$4.$$typeof === Ha && Ng(f$4) === b$2.type)) return d$2 = e$1(b$2, c$2.props), d$2.ref = Lg(a$1, b$2, c$2), d$2.return = a$1, d$2;
			d$2 = Rg(c$2.type, c$2.key, c$2.props, null, a$1.mode, d$2);
			d$2.ref = Lg(a$1, b$2, c$2);
			d$2.return = a$1;
			return d$2;
		}
		function l$4(a$1, b$2, c$2, d$2) {
			if (null === b$2 || 4 !== b$2.tag || b$2.stateNode.containerInfo !== c$2.containerInfo || b$2.stateNode.implementation !== c$2.implementation) return b$2 = Sg(c$2, a$1.mode, d$2), b$2.return = a$1, b$2;
			b$2 = e$1(b$2, c$2.children || []);
			b$2.return = a$1;
			return b$2;
		}
		function m$2(a$1, b$2, c$2, d$2, f$4) {
			if (null === b$2 || 7 !== b$2.tag) return b$2 = Tg(c$2, a$1.mode, d$2, f$4), b$2.return = a$1, b$2;
			b$2 = e$1(b$2, c$2);
			b$2.return = a$1;
			return b$2;
		}
		function q$4(a$1, b$2, c$2) {
			if ("string" === typeof b$2 && "" !== b$2 || "number" === typeof b$2) return b$2 = Qg("" + b$2, a$1.mode, c$2), b$2.return = a$1, b$2;
			if ("object" === typeof b$2 && null !== b$2) {
				switch (b$2.$$typeof) {
					case va: return c$2 = Rg(b$2.type, b$2.key, b$2.props, null, a$1.mode, c$2), c$2.ref = Lg(a$1, null, b$2), c$2.return = a$1, c$2;
					case wa: return b$2 = Sg(b$2, a$1.mode, c$2), b$2.return = a$1, b$2;
					case Ha:
						var d$2 = b$2._init;
						return q$4(a$1, d$2(b$2._payload), c$2);
				}
				if (eb(b$2) || Ka(b$2)) return b$2 = Tg(b$2, a$1.mode, c$2, null), b$2.return = a$1, b$2;
				Mg(a$1, b$2);
			}
			return null;
		}
		function r$4(a$1, b$2, c$2, d$2) {
			var e$2 = null !== b$2 ? b$2.key : null;
			if ("string" === typeof c$2 && "" !== c$2 || "number" === typeof c$2) return null !== e$2 ? null : h$2(a$1, b$2, "" + c$2, d$2);
			if ("object" === typeof c$2 && null !== c$2) {
				switch (c$2.$$typeof) {
					case va: return c$2.key === e$2 ? k$3(a$1, b$2, c$2, d$2) : null;
					case wa: return c$2.key === e$2 ? l$4(a$1, b$2, c$2, d$2) : null;
					case Ha: return e$2 = c$2._init, r$4(a$1, b$2, e$2(c$2._payload), d$2);
				}
				if (eb(c$2) || Ka(c$2)) return null !== e$2 ? null : m$2(a$1, b$2, c$2, d$2, null);
				Mg(a$1, c$2);
			}
			return null;
		}
		function y$3(a$1, b$2, c$2, d$2, e$2) {
			if ("string" === typeof d$2 && "" !== d$2 || "number" === typeof d$2) return a$1 = a$1.get(c$2) || null, h$2(b$2, a$1, "" + d$2, e$2);
			if ("object" === typeof d$2 && null !== d$2) {
				switch (d$2.$$typeof) {
					case va: return a$1 = a$1.get(null === d$2.key ? c$2 : d$2.key) || null, k$3(b$2, a$1, d$2, e$2);
					case wa: return a$1 = a$1.get(null === d$2.key ? c$2 : d$2.key) || null, l$4(b$2, a$1, d$2, e$2);
					case Ha:
						var f$4 = d$2._init;
						return y$3(a$1, b$2, c$2, f$4(d$2._payload), e$2);
				}
				if (eb(d$2) || Ka(d$2)) return a$1 = a$1.get(c$2) || null, m$2(b$2, a$1, d$2, e$2, null);
				Mg(b$2, d$2);
			}
			return null;
		}
		function n$3(e$2, g$3, h$3, k$4) {
			for (var l$5 = null, m$3 = null, u$2 = g$3, w$2 = g$3 = 0, x$2 = null; null !== u$2 && w$2 < h$3.length; w$2++) {
				u$2.index > w$2 ? (x$2 = u$2, u$2 = null) : x$2 = u$2.sibling;
				var n$4 = r$4(e$2, u$2, h$3[w$2], k$4);
				if (null === n$4) {
					null === u$2 && (u$2 = x$2);
					break;
				}
				a && u$2 && null === n$4.alternate && b$1(e$2, u$2);
				g$3 = f$3(n$4, g$3, w$2);
				null === m$3 ? l$5 = n$4 : m$3.sibling = n$4;
				m$3 = n$4;
				u$2 = x$2;
			}
			if (w$2 === h$3.length) return c$1(e$2, u$2), I && tg(e$2, w$2), l$5;
			if (null === u$2) {
				for (; w$2 < h$3.length; w$2++) u$2 = q$4(e$2, h$3[w$2], k$4), null !== u$2 && (g$3 = f$3(u$2, g$3, w$2), null === m$3 ? l$5 = u$2 : m$3.sibling = u$2, m$3 = u$2);
				I && tg(e$2, w$2);
				return l$5;
			}
			for (u$2 = d$1(e$2, u$2); w$2 < h$3.length; w$2++) x$2 = y$3(u$2, e$2, w$2, h$3[w$2], k$4), null !== x$2 && (a && null !== x$2.alternate && u$2.delete(null === x$2.key ? w$2 : x$2.key), g$3 = f$3(x$2, g$3, w$2), null === m$3 ? l$5 = x$2 : m$3.sibling = x$2, m$3 = x$2);
			a && u$2.forEach(function(a$1) {
				return b$1(e$2, a$1);
			});
			I && tg(e$2, w$2);
			return l$5;
		}
		function t$4(e$2, g$3, h$3, k$4) {
			var l$5 = Ka(h$3);
			if ("function" !== typeof l$5) throw Error(p(150));
			h$3 = l$5.call(h$3);
			if (null == h$3) throw Error(p(151));
			for (var u$2 = l$5 = null, m$3 = g$3, w$2 = g$3 = 0, x$2 = null, n$4 = h$3.next(); null !== m$3 && !n$4.done; w$2++, n$4 = h$3.next()) {
				m$3.index > w$2 ? (x$2 = m$3, m$3 = null) : x$2 = m$3.sibling;
				var t$5 = r$4(e$2, m$3, n$4.value, k$4);
				if (null === t$5) {
					null === m$3 && (m$3 = x$2);
					break;
				}
				a && m$3 && null === t$5.alternate && b$1(e$2, m$3);
				g$3 = f$3(t$5, g$3, w$2);
				null === u$2 ? l$5 = t$5 : u$2.sibling = t$5;
				u$2 = t$5;
				m$3 = x$2;
			}
			if (n$4.done) return c$1(e$2, m$3), I && tg(e$2, w$2), l$5;
			if (null === m$3) {
				for (; !n$4.done; w$2++, n$4 = h$3.next()) n$4 = q$4(e$2, n$4.value, k$4), null !== n$4 && (g$3 = f$3(n$4, g$3, w$2), null === u$2 ? l$5 = n$4 : u$2.sibling = n$4, u$2 = n$4);
				I && tg(e$2, w$2);
				return l$5;
			}
			for (m$3 = d$1(e$2, m$3); !n$4.done; w$2++, n$4 = h$3.next()) n$4 = y$3(m$3, e$2, w$2, n$4.value, k$4), null !== n$4 && (a && null !== n$4.alternate && m$3.delete(null === n$4.key ? w$2 : n$4.key), g$3 = f$3(n$4, g$3, w$2), null === u$2 ? l$5 = n$4 : u$2.sibling = n$4, u$2 = n$4);
			a && m$3.forEach(function(a$1) {
				return b$1(e$2, a$1);
			});
			I && tg(e$2, w$2);
			return l$5;
		}
		function J$2(a$1, d$2, f$4, h$3) {
			"object" === typeof f$4 && null !== f$4 && f$4.type === ya && null === f$4.key && (f$4 = f$4.props.children);
			if ("object" === typeof f$4 && null !== f$4) {
				switch (f$4.$$typeof) {
					case va:
						a: {
							for (var k$4 = f$4.key, l$5 = d$2; null !== l$5;) {
								if (l$5.key === k$4) {
									k$4 = f$4.type;
									if (k$4 === ya) {
										if (7 === l$5.tag) {
											c$1(a$1, l$5.sibling);
											d$2 = e$1(l$5, f$4.props.children);
											d$2.return = a$1;
											a$1 = d$2;
											break a;
										}
									} else if (l$5.elementType === k$4 || "object" === typeof k$4 && null !== k$4 && k$4.$$typeof === Ha && Ng(k$4) === l$5.type) {
										c$1(a$1, l$5.sibling);
										d$2 = e$1(l$5, f$4.props);
										d$2.ref = Lg(a$1, l$5, f$4);
										d$2.return = a$1;
										a$1 = d$2;
										break a;
									}
									c$1(a$1, l$5);
									break;
								} else b$1(a$1, l$5);
								l$5 = l$5.sibling;
							}
							f$4.type === ya ? (d$2 = Tg(f$4.props.children, a$1.mode, h$3, f$4.key), d$2.return = a$1, a$1 = d$2) : (h$3 = Rg(f$4.type, f$4.key, f$4.props, null, a$1.mode, h$3), h$3.ref = Lg(a$1, d$2, f$4), h$3.return = a$1, a$1 = h$3);
						}
						return g$2(a$1);
					case wa:
						a: {
							for (l$5 = f$4.key; null !== d$2;) {
								if (d$2.key === l$5) if (4 === d$2.tag && d$2.stateNode.containerInfo === f$4.containerInfo && d$2.stateNode.implementation === f$4.implementation) {
									c$1(a$1, d$2.sibling);
									d$2 = e$1(d$2, f$4.children || []);
									d$2.return = a$1;
									a$1 = d$2;
									break a;
								} else {
									c$1(a$1, d$2);
									break;
								}
								else b$1(a$1, d$2);
								d$2 = d$2.sibling;
							}
							d$2 = Sg(f$4, a$1.mode, h$3);
							d$2.return = a$1;
							a$1 = d$2;
						}
						return g$2(a$1);
					case Ha: return l$5 = f$4._init, J$2(a$1, d$2, l$5(f$4._payload), h$3);
				}
				if (eb(f$4)) return n$3(a$1, d$2, f$4, h$3);
				if (Ka(f$4)) return t$4(a$1, d$2, f$4, h$3);
				Mg(a$1, f$4);
			}
			return "string" === typeof f$4 && "" !== f$4 || "number" === typeof f$4 ? (f$4 = "" + f$4, null !== d$2 && 6 === d$2.tag ? (c$1(a$1, d$2.sibling), d$2 = e$1(d$2, f$4), d$2.return = a$1, a$1 = d$2) : (c$1(a$1, d$2), d$2 = Qg(f$4, a$1.mode, h$3), d$2.return = a$1, a$1 = d$2), g$2(a$1)) : c$1(a$1, d$2);
		}
		return J$2;
	}
	var Ug = Og(!0), Vg = Og(!1), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
	function $g() {
		Zg = Yg = Xg = null;
	}
	function ah(a) {
		var b$1 = Wg.current;
		E(Wg);
		a._currentValue = b$1;
	}
	function bh(a, b$1, c$1) {
		for (; null !== a;) {
			var d$1 = a.alternate;
			(a.childLanes & b$1) !== b$1 ? (a.childLanes |= b$1, null !== d$1 && (d$1.childLanes |= b$1)) : null !== d$1 && (d$1.childLanes & b$1) !== b$1 && (d$1.childLanes |= b$1);
			if (a === c$1) break;
			a = a.return;
		}
	}
	function ch(a, b$1) {
		Xg = a;
		Zg = Yg = null;
		a = a.dependencies;
		null !== a && null !== a.firstContext && (0 !== (a.lanes & b$1) && (dh = !0), a.firstContext = null);
	}
	function eh(a) {
		var b$1 = a._currentValue;
		if (Zg !== a) if (a = {
			context: a,
			memoizedValue: b$1,
			next: null
		}, null === Yg) {
			if (null === Xg) throw Error(p(308));
			Yg = a;
			Xg.dependencies = {
				lanes: 0,
				firstContext: a
			};
		} else Yg = Yg.next = a;
		return b$1;
	}
	var fh = null;
	function gh(a) {
		null === fh ? fh = [a] : fh.push(a);
	}
	function hh(a, b$1, c$1, d$1) {
		var e$1 = b$1.interleaved;
		null === e$1 ? (c$1.next = c$1, gh(b$1)) : (c$1.next = e$1.next, e$1.next = c$1);
		b$1.interleaved = c$1;
		return ih(a, d$1);
	}
	function ih(a, b$1) {
		a.lanes |= b$1;
		var c$1 = a.alternate;
		null !== c$1 && (c$1.lanes |= b$1);
		c$1 = a;
		for (a = a.return; null !== a;) a.childLanes |= b$1, c$1 = a.alternate, null !== c$1 && (c$1.childLanes |= b$1), c$1 = a, a = a.return;
		return 3 === c$1.tag ? c$1.stateNode : null;
	}
	var jh = !1;
	function kh(a) {
		a.updateQueue = {
			baseState: a.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				interleaved: null,
				lanes: 0
			},
			effects: null
		};
	}
	function lh(a, b$1) {
		a = a.updateQueue;
		b$1.updateQueue === a && (b$1.updateQueue = {
			baseState: a.baseState,
			firstBaseUpdate: a.firstBaseUpdate,
			lastBaseUpdate: a.lastBaseUpdate,
			shared: a.shared,
			effects: a.effects
		});
	}
	function mh(a, b$1) {
		return {
			eventTime: a,
			lane: b$1,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function nh(a, b$1, c$1) {
		var d$1 = a.updateQueue;
		if (null === d$1) return null;
		d$1 = d$1.shared;
		if (0 !== (K & 2)) {
			var e$1 = d$1.pending;
			null === e$1 ? b$1.next = b$1 : (b$1.next = e$1.next, e$1.next = b$1);
			d$1.pending = b$1;
			return ih(a, c$1);
		}
		e$1 = d$1.interleaved;
		null === e$1 ? (b$1.next = b$1, gh(d$1)) : (b$1.next = e$1.next, e$1.next = b$1);
		d$1.interleaved = b$1;
		return ih(a, c$1);
	}
	function oh(a, b$1, c$1) {
		b$1 = b$1.updateQueue;
		if (null !== b$1 && (b$1 = b$1.shared, 0 !== (c$1 & 4194240))) {
			var d$1 = b$1.lanes;
			d$1 &= a.pendingLanes;
			c$1 |= d$1;
			b$1.lanes = c$1;
			Cc(a, c$1);
		}
	}
	function ph(a, b$1) {
		var c$1 = a.updateQueue, d$1 = a.alternate;
		if (null !== d$1 && (d$1 = d$1.updateQueue, c$1 === d$1)) {
			var e$1 = null, f$3 = null;
			c$1 = c$1.firstBaseUpdate;
			if (null !== c$1) {
				do {
					var g$2 = {
						eventTime: c$1.eventTime,
						lane: c$1.lane,
						tag: c$1.tag,
						payload: c$1.payload,
						callback: c$1.callback,
						next: null
					};
					null === f$3 ? e$1 = f$3 = g$2 : f$3 = f$3.next = g$2;
					c$1 = c$1.next;
				} while (null !== c$1);
				null === f$3 ? e$1 = f$3 = b$1 : f$3 = f$3.next = b$1;
			} else e$1 = f$3 = b$1;
			c$1 = {
				baseState: d$1.baseState,
				firstBaseUpdate: e$1,
				lastBaseUpdate: f$3,
				shared: d$1.shared,
				effects: d$1.effects
			};
			a.updateQueue = c$1;
			return;
		}
		a = c$1.lastBaseUpdate;
		null === a ? c$1.firstBaseUpdate = b$1 : a.next = b$1;
		c$1.lastBaseUpdate = b$1;
	}
	function qh(a, b$1, c$1, d$1) {
		var e$1 = a.updateQueue;
		jh = !1;
		var f$3 = e$1.firstBaseUpdate, g$2 = e$1.lastBaseUpdate, h$2 = e$1.shared.pending;
		if (null !== h$2) {
			e$1.shared.pending = null;
			var k$3 = h$2, l$4 = k$3.next;
			k$3.next = null;
			null === g$2 ? f$3 = l$4 : g$2.next = l$4;
			g$2 = k$3;
			var m$2 = a.alternate;
			null !== m$2 && (m$2 = m$2.updateQueue, h$2 = m$2.lastBaseUpdate, h$2 !== g$2 && (null === h$2 ? m$2.firstBaseUpdate = l$4 : h$2.next = l$4, m$2.lastBaseUpdate = k$3));
		}
		if (null !== f$3) {
			var q$4 = e$1.baseState;
			g$2 = 0;
			m$2 = l$4 = k$3 = null;
			h$2 = f$3;
			do {
				var r$4 = h$2.lane, y$3 = h$2.eventTime;
				if ((d$1 & r$4) === r$4) {
					null !== m$2 && (m$2 = m$2.next = {
						eventTime: y$3,
						lane: 0,
						tag: h$2.tag,
						payload: h$2.payload,
						callback: h$2.callback,
						next: null
					});
					a: {
						var n$3 = a, t$4 = h$2;
						r$4 = b$1;
						y$3 = c$1;
						switch (t$4.tag) {
							case 1:
								n$3 = t$4.payload;
								if ("function" === typeof n$3) {
									q$4 = n$3.call(y$3, q$4, r$4);
									break a;
								}
								q$4 = n$3;
								break a;
							case 3: n$3.flags = n$3.flags & -65537 | 128;
							case 0:
								n$3 = t$4.payload;
								r$4 = "function" === typeof n$3 ? n$3.call(y$3, q$4, r$4) : n$3;
								if (null === r$4 || void 0 === r$4) break a;
								q$4 = A({}, q$4, r$4);
								break a;
							case 2: jh = !0;
						}
					}
					null !== h$2.callback && 0 !== h$2.lane && (a.flags |= 64, r$4 = e$1.effects, null === r$4 ? e$1.effects = [h$2] : r$4.push(h$2));
				} else y$3 = {
					eventTime: y$3,
					lane: r$4,
					tag: h$2.tag,
					payload: h$2.payload,
					callback: h$2.callback,
					next: null
				}, null === m$2 ? (l$4 = m$2 = y$3, k$3 = q$4) : m$2 = m$2.next = y$3, g$2 |= r$4;
				h$2 = h$2.next;
				if (null === h$2) if (h$2 = e$1.shared.pending, null === h$2) break;
				else r$4 = h$2, h$2 = r$4.next, r$4.next = null, e$1.lastBaseUpdate = r$4, e$1.shared.pending = null;
			} while (1);
			null === m$2 && (k$3 = q$4);
			e$1.baseState = k$3;
			e$1.firstBaseUpdate = l$4;
			e$1.lastBaseUpdate = m$2;
			b$1 = e$1.shared.interleaved;
			if (null !== b$1) {
				e$1 = b$1;
				do
					g$2 |= e$1.lane, e$1 = e$1.next;
				while (e$1 !== b$1);
			} else null === f$3 && (e$1.shared.lanes = 0);
			rh |= g$2;
			a.lanes = g$2;
			a.memoizedState = q$4;
		}
	}
	function sh(a, b$1, c$1) {
		a = b$1.effects;
		b$1.effects = null;
		if (null !== a) for (b$1 = 0; b$1 < a.length; b$1++) {
			var d$1 = a[b$1], e$1 = d$1.callback;
			if (null !== e$1) {
				d$1.callback = null;
				d$1 = c$1;
				if ("function" !== typeof e$1) throw Error(p(191, e$1));
				e$1.call(d$1);
			}
		}
	}
	var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
	function xh(a) {
		if (a === th) throw Error(p(174));
		return a;
	}
	function yh(a, b$1) {
		G(wh, b$1);
		G(vh, a);
		G(uh, th);
		a = b$1.nodeType;
		switch (a) {
			case 9:
			case 11:
				b$1 = (b$1 = b$1.documentElement) ? b$1.namespaceURI : lb(null, "");
				break;
			default: a = 8 === a ? b$1.parentNode : b$1, b$1 = a.namespaceURI || null, a = a.tagName, b$1 = lb(b$1, a);
		}
		E(uh);
		G(uh, b$1);
	}
	function zh() {
		E(uh);
		E(vh);
		E(wh);
	}
	function Ah(a) {
		xh(wh.current);
		var b$1 = xh(uh.current);
		var c$1 = lb(b$1, a.type);
		b$1 !== c$1 && (G(vh, a), G(uh, c$1));
	}
	function Bh(a) {
		vh.current === a && (E(uh), E(vh));
	}
	var L = Uf(0);
	function Ch(a) {
		for (var b$1 = a; null !== b$1;) {
			if (13 === b$1.tag) {
				var c$1 = b$1.memoizedState;
				if (null !== c$1 && (c$1 = c$1.dehydrated, null === c$1 || "$?" === c$1.data || "$!" === c$1.data)) return b$1;
			} else if (19 === b$1.tag && void 0 !== b$1.memoizedProps.revealOrder) {
				if (0 !== (b$1.flags & 128)) return b$1;
			} else if (null !== b$1.child) {
				b$1.child.return = b$1;
				b$1 = b$1.child;
				continue;
			}
			if (b$1 === a) break;
			for (; null === b$1.sibling;) {
				if (null === b$1.return || b$1.return === a) return null;
				b$1 = b$1.return;
			}
			b$1.sibling.return = b$1.return;
			b$1 = b$1.sibling;
		}
		return null;
	}
	var Dh = [];
	function Eh() {
		for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
		Dh.length = 0;
	}
	var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = !1, Jh = !1, Kh = 0, Lh = 0;
	function P() {
		throw Error(p(321));
	}
	function Mh(a, b$1) {
		if (null === b$1) return !1;
		for (var c$1 = 0; c$1 < b$1.length && c$1 < a.length; c$1++) if (!He(a[c$1], b$1[c$1])) return !1;
		return !0;
	}
	function Nh(a, b$1, c$1, d$1, e$1, f$3) {
		Hh = f$3;
		M = b$1;
		b$1.memoizedState = null;
		b$1.updateQueue = null;
		b$1.lanes = 0;
		Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
		a = c$1(d$1, e$1);
		if (Jh) {
			f$3 = 0;
			do {
				Jh = !1;
				Kh = 0;
				if (25 <= f$3) throw Error(p(301));
				f$3 += 1;
				O = N = null;
				b$1.updateQueue = null;
				Fh.current = Qh;
				a = c$1(d$1, e$1);
			} while (Jh);
		}
		Fh.current = Rh;
		b$1 = null !== N && null !== N.next;
		Hh = 0;
		O = N = M = null;
		Ih = !1;
		if (b$1) throw Error(p(300));
		return a;
	}
	function Sh() {
		var a = 0 !== Kh;
		Kh = 0;
		return a;
	}
	function Th() {
		var a = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		null === O ? M.memoizedState = O = a : O = O.next = a;
		return O;
	}
	function Uh() {
		if (null === N) {
			var a = M.alternate;
			a = null !== a ? a.memoizedState : null;
		} else a = N.next;
		var b$1 = null === O ? M.memoizedState : O.next;
		if (null !== b$1) O = b$1, N = a;
		else {
			if (null === a) throw Error(p(310));
			N = a;
			a = {
				memoizedState: N.memoizedState,
				baseState: N.baseState,
				baseQueue: N.baseQueue,
				queue: N.queue,
				next: null
			};
			null === O ? M.memoizedState = O = a : O = O.next = a;
		}
		return O;
	}
	function Vh(a, b$1) {
		return "function" === typeof b$1 ? b$1(a) : b$1;
	}
	function Wh(a) {
		var b$1 = Uh(), c$1 = b$1.queue;
		if (null === c$1) throw Error(p(311));
		c$1.lastRenderedReducer = a;
		var d$1 = N, e$1 = d$1.baseQueue, f$3 = c$1.pending;
		if (null !== f$3) {
			if (null !== e$1) {
				var g$2 = e$1.next;
				e$1.next = f$3.next;
				f$3.next = g$2;
			}
			d$1.baseQueue = e$1 = f$3;
			c$1.pending = null;
		}
		if (null !== e$1) {
			f$3 = e$1.next;
			d$1 = d$1.baseState;
			var h$2 = g$2 = null, k$3 = null, l$4 = f$3;
			do {
				var m$2 = l$4.lane;
				if ((Hh & m$2) === m$2) null !== k$3 && (k$3 = k$3.next = {
					lane: 0,
					action: l$4.action,
					hasEagerState: l$4.hasEagerState,
					eagerState: l$4.eagerState,
					next: null
				}), d$1 = l$4.hasEagerState ? l$4.eagerState : a(d$1, l$4.action);
				else {
					var q$4 = {
						lane: m$2,
						action: l$4.action,
						hasEagerState: l$4.hasEagerState,
						eagerState: l$4.eagerState,
						next: null
					};
					null === k$3 ? (h$2 = k$3 = q$4, g$2 = d$1) : k$3 = k$3.next = q$4;
					M.lanes |= m$2;
					rh |= m$2;
				}
				l$4 = l$4.next;
			} while (null !== l$4 && l$4 !== f$3);
			null === k$3 ? g$2 = d$1 : k$3.next = h$2;
			He(d$1, b$1.memoizedState) || (dh = !0);
			b$1.memoizedState = d$1;
			b$1.baseState = g$2;
			b$1.baseQueue = k$3;
			c$1.lastRenderedState = d$1;
		}
		a = c$1.interleaved;
		if (null !== a) {
			e$1 = a;
			do
				f$3 = e$1.lane, M.lanes |= f$3, rh |= f$3, e$1 = e$1.next;
			while (e$1 !== a);
		} else null === e$1 && (c$1.lanes = 0);
		return [b$1.memoizedState, c$1.dispatch];
	}
	function Xh(a) {
		var b$1 = Uh(), c$1 = b$1.queue;
		if (null === c$1) throw Error(p(311));
		c$1.lastRenderedReducer = a;
		var d$1 = c$1.dispatch, e$1 = c$1.pending, f$3 = b$1.memoizedState;
		if (null !== e$1) {
			c$1.pending = null;
			var g$2 = e$1 = e$1.next;
			do
				f$3 = a(f$3, g$2.action), g$2 = g$2.next;
			while (g$2 !== e$1);
			He(f$3, b$1.memoizedState) || (dh = !0);
			b$1.memoizedState = f$3;
			null === b$1.baseQueue && (b$1.baseState = f$3);
			c$1.lastRenderedState = f$3;
		}
		return [f$3, d$1];
	}
	function Yh() {}
	function Zh(a, b$1) {
		var c$1 = M, d$1 = Uh(), e$1 = b$1(), f$3 = !He(d$1.memoizedState, e$1);
		f$3 && (d$1.memoizedState = e$1, dh = !0);
		d$1 = d$1.queue;
		$h(ai.bind(null, c$1, d$1, a), [a]);
		if (d$1.getSnapshot !== b$1 || f$3 || null !== O && O.memoizedState.tag & 1) {
			c$1.flags |= 2048;
			bi(9, ci.bind(null, c$1, d$1, e$1, b$1), void 0, null);
			if (null === Q) throw Error(p(349));
			0 !== (Hh & 30) || di(c$1, b$1, e$1);
		}
		return e$1;
	}
	function di(a, b$1, c$1) {
		a.flags |= 16384;
		a = {
			getSnapshot: b$1,
			value: c$1
		};
		b$1 = M.updateQueue;
		null === b$1 ? (b$1 = {
			lastEffect: null,
			stores: null
		}, M.updateQueue = b$1, b$1.stores = [a]) : (c$1 = b$1.stores, null === c$1 ? b$1.stores = [a] : c$1.push(a));
	}
	function ci(a, b$1, c$1, d$1) {
		b$1.value = c$1;
		b$1.getSnapshot = d$1;
		ei(b$1) && fi(a);
	}
	function ai(a, b$1, c$1) {
		return c$1(function() {
			ei(b$1) && fi(a);
		});
	}
	function ei(a) {
		var b$1 = a.getSnapshot;
		a = a.value;
		try {
			var c$1 = b$1();
			return !He(a, c$1);
		} catch (d$1) {
			return !0;
		}
	}
	function fi(a) {
		var b$1 = ih(a, 1);
		null !== b$1 && gi(b$1, a, 1, -1);
	}
	function hi(a) {
		var b$1 = Th();
		"function" === typeof a && (a = a());
		b$1.memoizedState = b$1.baseState = a;
		a = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Vh,
			lastRenderedState: a
		};
		b$1.queue = a;
		a = a.dispatch = ii.bind(null, M, a);
		return [b$1.memoizedState, a];
	}
	function bi(a, b$1, c$1, d$1) {
		a = {
			tag: a,
			create: b$1,
			destroy: c$1,
			deps: d$1,
			next: null
		};
		b$1 = M.updateQueue;
		null === b$1 ? (b$1 = {
			lastEffect: null,
			stores: null
		}, M.updateQueue = b$1, b$1.lastEffect = a.next = a) : (c$1 = b$1.lastEffect, null === c$1 ? b$1.lastEffect = a.next = a : (d$1 = c$1.next, c$1.next = a, a.next = d$1, b$1.lastEffect = a));
		return a;
	}
	function ji() {
		return Uh().memoizedState;
	}
	function ki(a, b$1, c$1, d$1) {
		var e$1 = Th();
		M.flags |= a;
		e$1.memoizedState = bi(1 | b$1, c$1, void 0, void 0 === d$1 ? null : d$1);
	}
	function li(a, b$1, c$1, d$1) {
		var e$1 = Uh();
		d$1 = void 0 === d$1 ? null : d$1;
		var f$3 = void 0;
		if (null !== N) {
			var g$2 = N.memoizedState;
			f$3 = g$2.destroy;
			if (null !== d$1 && Mh(d$1, g$2.deps)) {
				e$1.memoizedState = bi(b$1, c$1, f$3, d$1);
				return;
			}
		}
		M.flags |= a;
		e$1.memoizedState = bi(1 | b$1, c$1, f$3, d$1);
	}
	function mi(a, b$1) {
		return ki(8390656, 8, a, b$1);
	}
	function $h(a, b$1) {
		return li(2048, 8, a, b$1);
	}
	function ni(a, b$1) {
		return li(4, 2, a, b$1);
	}
	function oi(a, b$1) {
		return li(4, 4, a, b$1);
	}
	function pi(a, b$1) {
		if ("function" === typeof b$1) return a = a(), b$1(a), function() {
			b$1(null);
		};
		if (null !== b$1 && void 0 !== b$1) return a = a(), b$1.current = a, function() {
			b$1.current = null;
		};
	}
	function qi(a, b$1, c$1) {
		c$1 = null !== c$1 && void 0 !== c$1 ? c$1.concat([a]) : null;
		return li(4, 4, pi.bind(null, b$1, a), c$1);
	}
	function ri() {}
	function si(a, b$1) {
		var c$1 = Uh();
		b$1 = void 0 === b$1 ? null : b$1;
		var d$1 = c$1.memoizedState;
		if (null !== d$1 && null !== b$1 && Mh(b$1, d$1[1])) return d$1[0];
		c$1.memoizedState = [a, b$1];
		return a;
	}
	function ti(a, b$1) {
		var c$1 = Uh();
		b$1 = void 0 === b$1 ? null : b$1;
		var d$1 = c$1.memoizedState;
		if (null !== d$1 && null !== b$1 && Mh(b$1, d$1[1])) return d$1[0];
		a = a();
		c$1.memoizedState = [a, b$1];
		return a;
	}
	function ui(a, b$1, c$1) {
		if (0 === (Hh & 21)) return a.baseState && (a.baseState = !1, dh = !0), a.memoizedState = c$1;
		He(c$1, b$1) || (c$1 = yc(), M.lanes |= c$1, rh |= c$1, a.baseState = !0);
		return b$1;
	}
	function vi(a, b$1) {
		var c$1 = C;
		C = 0 !== c$1 && 4 > c$1 ? c$1 : 4;
		a(!0);
		var d$1 = Gh.transition;
		Gh.transition = {};
		try {
			a(!1), b$1();
		} finally {
			C = c$1, Gh.transition = d$1;
		}
	}
	function wi() {
		return Uh().memoizedState;
	}
	function xi(a, b$1, c$1) {
		var d$1 = yi(a);
		c$1 = {
			lane: d$1,
			action: c$1,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (zi(a)) Ai(b$1, c$1);
		else if (c$1 = hh(a, b$1, c$1, d$1), null !== c$1) {
			var e$1 = R();
			gi(c$1, a, d$1, e$1);
			Bi(c$1, b$1, d$1);
		}
	}
	function ii(a, b$1, c$1) {
		var d$1 = yi(a), e$1 = {
			lane: d$1,
			action: c$1,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (zi(a)) Ai(b$1, e$1);
		else {
			var f$3 = a.alternate;
			if (0 === a.lanes && (null === f$3 || 0 === f$3.lanes) && (f$3 = b$1.lastRenderedReducer, null !== f$3)) try {
				var g$2 = b$1.lastRenderedState, h$2 = f$3(g$2, c$1);
				e$1.hasEagerState = !0;
				e$1.eagerState = h$2;
				if (He(h$2, g$2)) {
					var k$3 = b$1.interleaved;
					null === k$3 ? (e$1.next = e$1, gh(b$1)) : (e$1.next = k$3.next, k$3.next = e$1);
					b$1.interleaved = e$1;
					return;
				}
			} catch (l$4) {}
			c$1 = hh(a, b$1, e$1, d$1);
			null !== c$1 && (e$1 = R(), gi(c$1, a, d$1, e$1), Bi(c$1, b$1, d$1));
		}
	}
	function zi(a) {
		var b$1 = a.alternate;
		return a === M || null !== b$1 && b$1 === M;
	}
	function Ai(a, b$1) {
		Jh = Ih = !0;
		var c$1 = a.pending;
		null === c$1 ? b$1.next = b$1 : (b$1.next = c$1.next, c$1.next = b$1);
		a.pending = b$1;
	}
	function Bi(a, b$1, c$1) {
		if (0 !== (c$1 & 4194240)) {
			var d$1 = b$1.lanes;
			d$1 &= a.pendingLanes;
			c$1 |= d$1;
			b$1.lanes = c$1;
			Cc(a, c$1);
		}
	}
	var Rh = {
		readContext: eh,
		useCallback: P,
		useContext: P,
		useEffect: P,
		useImperativeHandle: P,
		useInsertionEffect: P,
		useLayoutEffect: P,
		useMemo: P,
		useReducer: P,
		useRef: P,
		useState: P,
		useDebugValue: P,
		useDeferredValue: P,
		useTransition: P,
		useMutableSource: P,
		useSyncExternalStore: P,
		useId: P,
		unstable_isNewReconciler: !1
	}, Oh = {
		readContext: eh,
		useCallback: function(a, b$1) {
			Th().memoizedState = [a, void 0 === b$1 ? null : b$1];
			return a;
		},
		useContext: eh,
		useEffect: mi,
		useImperativeHandle: function(a, b$1, c$1) {
			c$1 = null !== c$1 && void 0 !== c$1 ? c$1.concat([a]) : null;
			return ki(4194308, 4, pi.bind(null, b$1, a), c$1);
		},
		useLayoutEffect: function(a, b$1) {
			return ki(4194308, 4, a, b$1);
		},
		useInsertionEffect: function(a, b$1) {
			return ki(4, 2, a, b$1);
		},
		useMemo: function(a, b$1) {
			var c$1 = Th();
			b$1 = void 0 === b$1 ? null : b$1;
			a = a();
			c$1.memoizedState = [a, b$1];
			return a;
		},
		useReducer: function(a, b$1, c$1) {
			var d$1 = Th();
			b$1 = void 0 !== c$1 ? c$1(b$1) : b$1;
			d$1.memoizedState = d$1.baseState = b$1;
			a = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: a,
				lastRenderedState: b$1
			};
			d$1.queue = a;
			a = a.dispatch = xi.bind(null, M, a);
			return [d$1.memoizedState, a];
		},
		useRef: function(a) {
			var b$1 = Th();
			a = { current: a };
			return b$1.memoizedState = a;
		},
		useState: hi,
		useDebugValue: ri,
		useDeferredValue: function(a) {
			return Th().memoizedState = a;
		},
		useTransition: function() {
			var a = hi(!1), b$1 = a[0];
			a = vi.bind(null, a[1]);
			Th().memoizedState = a;
			return [b$1, a];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(a, b$1, c$1) {
			var d$1 = M, e$1 = Th();
			if (I) {
				if (void 0 === c$1) throw Error(p(407));
				c$1 = c$1();
			} else {
				c$1 = b$1();
				if (null === Q) throw Error(p(349));
				0 !== (Hh & 30) || di(d$1, b$1, c$1);
			}
			e$1.memoizedState = c$1;
			var f$3 = {
				value: c$1,
				getSnapshot: b$1
			};
			e$1.queue = f$3;
			mi(ai.bind(null, d$1, f$3, a), [a]);
			d$1.flags |= 2048;
			bi(9, ci.bind(null, d$1, f$3, c$1, b$1), void 0, null);
			return c$1;
		},
		useId: function() {
			var a = Th(), b$1 = Q.identifierPrefix;
			if (I) {
				var c$1 = sg;
				var d$1 = rg;
				c$1 = (d$1 & ~(1 << 32 - oc(d$1) - 1)).toString(32) + c$1;
				b$1 = ":" + b$1 + "R" + c$1;
				c$1 = Kh++;
				0 < c$1 && (b$1 += "H" + c$1.toString(32));
				b$1 += ":";
			} else c$1 = Lh++, b$1 = ":" + b$1 + "r" + c$1.toString(32) + ":";
			return a.memoizedState = b$1;
		},
		unstable_isNewReconciler: !1
	}, Ph = {
		readContext: eh,
		useCallback: si,
		useContext: eh,
		useEffect: $h,
		useImperativeHandle: qi,
		useInsertionEffect: ni,
		useLayoutEffect: oi,
		useMemo: ti,
		useReducer: Wh,
		useRef: ji,
		useState: function() {
			return Wh(Vh);
		},
		useDebugValue: ri,
		useDeferredValue: function(a) {
			return ui(Uh(), N.memoizedState, a);
		},
		useTransition: function() {
			return [Wh(Vh)[0], Uh().memoizedState];
		},
		useMutableSource: Yh,
		useSyncExternalStore: Zh,
		useId: wi,
		unstable_isNewReconciler: !1
	}, Qh = {
		readContext: eh,
		useCallback: si,
		useContext: eh,
		useEffect: $h,
		useImperativeHandle: qi,
		useInsertionEffect: ni,
		useLayoutEffect: oi,
		useMemo: ti,
		useReducer: Xh,
		useRef: ji,
		useState: function() {
			return Xh(Vh);
		},
		useDebugValue: ri,
		useDeferredValue: function(a) {
			var b$1 = Uh();
			return null === N ? b$1.memoizedState = a : ui(b$1, N.memoizedState, a);
		},
		useTransition: function() {
			return [Xh(Vh)[0], Uh().memoizedState];
		},
		useMutableSource: Yh,
		useSyncExternalStore: Zh,
		useId: wi,
		unstable_isNewReconciler: !1
	};
	function Ci(a, b$1) {
		if (a && a.defaultProps) {
			b$1 = A({}, b$1);
			a = a.defaultProps;
			for (var c$1 in a) void 0 === b$1[c$1] && (b$1[c$1] = a[c$1]);
			return b$1;
		}
		return b$1;
	}
	function Di(a, b$1, c$1, d$1) {
		b$1 = a.memoizedState;
		c$1 = c$1(d$1, b$1);
		c$1 = null === c$1 || void 0 === c$1 ? b$1 : A({}, b$1, c$1);
		a.memoizedState = c$1;
		0 === a.lanes && (a.updateQueue.baseState = c$1);
	}
	var Ei = {
		isMounted: function(a) {
			return (a = a._reactInternals) ? Vb(a) === a : !1;
		},
		enqueueSetState: function(a, b$1, c$1) {
			a = a._reactInternals;
			var d$1 = R(), e$1 = yi(a), f$3 = mh(d$1, e$1);
			f$3.payload = b$1;
			void 0 !== c$1 && null !== c$1 && (f$3.callback = c$1);
			b$1 = nh(a, f$3, e$1);
			null !== b$1 && (gi(b$1, a, e$1, d$1), oh(b$1, a, e$1));
		},
		enqueueReplaceState: function(a, b$1, c$1) {
			a = a._reactInternals;
			var d$1 = R(), e$1 = yi(a), f$3 = mh(d$1, e$1);
			f$3.tag = 1;
			f$3.payload = b$1;
			void 0 !== c$1 && null !== c$1 && (f$3.callback = c$1);
			b$1 = nh(a, f$3, e$1);
			null !== b$1 && (gi(b$1, a, e$1, d$1), oh(b$1, a, e$1));
		},
		enqueueForceUpdate: function(a, b$1) {
			a = a._reactInternals;
			var c$1 = R(), d$1 = yi(a), e$1 = mh(c$1, d$1);
			e$1.tag = 2;
			void 0 !== b$1 && null !== b$1 && (e$1.callback = b$1);
			b$1 = nh(a, e$1, d$1);
			null !== b$1 && (gi(b$1, a, d$1, c$1), oh(b$1, a, d$1));
		}
	};
	function Fi(a, b$1, c$1, d$1, e$1, f$3, g$2) {
		a = a.stateNode;
		return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d$1, f$3, g$2) : b$1.prototype && b$1.prototype.isPureReactComponent ? !Ie(c$1, d$1) || !Ie(e$1, f$3) : !0;
	}
	function Gi(a, b$1, c$1) {
		var d$1 = !1, e$1 = Vf;
		var f$3 = b$1.contextType;
		"object" === typeof f$3 && null !== f$3 ? f$3 = eh(f$3) : (e$1 = Zf(b$1) ? Xf : H.current, d$1 = b$1.contextTypes, f$3 = (d$1 = null !== d$1 && void 0 !== d$1) ? Yf(a, e$1) : Vf);
		b$1 = new b$1(c$1, f$3);
		a.memoizedState = null !== b$1.state && void 0 !== b$1.state ? b$1.state : null;
		b$1.updater = Ei;
		a.stateNode = b$1;
		b$1._reactInternals = a;
		d$1 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e$1, a.__reactInternalMemoizedMaskedChildContext = f$3);
		return b$1;
	}
	function Hi(a, b$1, c$1, d$1) {
		a = b$1.state;
		"function" === typeof b$1.componentWillReceiveProps && b$1.componentWillReceiveProps(c$1, d$1);
		"function" === typeof b$1.UNSAFE_componentWillReceiveProps && b$1.UNSAFE_componentWillReceiveProps(c$1, d$1);
		b$1.state !== a && Ei.enqueueReplaceState(b$1, b$1.state, null);
	}
	function Ii(a, b$1, c$1, d$1) {
		var e$1 = a.stateNode;
		e$1.props = c$1;
		e$1.state = a.memoizedState;
		e$1.refs = {};
		kh(a);
		var f$3 = b$1.contextType;
		"object" === typeof f$3 && null !== f$3 ? e$1.context = eh(f$3) : (f$3 = Zf(b$1) ? Xf : H.current, e$1.context = Yf(a, f$3));
		e$1.state = a.memoizedState;
		f$3 = b$1.getDerivedStateFromProps;
		"function" === typeof f$3 && (Di(a, b$1, f$3, c$1), e$1.state = a.memoizedState);
		"function" === typeof b$1.getDerivedStateFromProps || "function" === typeof e$1.getSnapshotBeforeUpdate || "function" !== typeof e$1.UNSAFE_componentWillMount && "function" !== typeof e$1.componentWillMount || (b$1 = e$1.state, "function" === typeof e$1.componentWillMount && e$1.componentWillMount(), "function" === typeof e$1.UNSAFE_componentWillMount && e$1.UNSAFE_componentWillMount(), b$1 !== e$1.state && Ei.enqueueReplaceState(e$1, e$1.state, null), qh(a, c$1, e$1, d$1), e$1.state = a.memoizedState);
		"function" === typeof e$1.componentDidMount && (a.flags |= 4194308);
	}
	function Ji(a, b$1) {
		try {
			var c$1 = "", d$1 = b$1;
			do
				c$1 += Pa(d$1), d$1 = d$1.return;
			while (d$1);
			var e$1 = c$1;
		} catch (f$3) {
			e$1 = "\nError generating stack: " + f$3.message + "\n" + f$3.stack;
		}
		return {
			value: a,
			source: b$1,
			stack: e$1,
			digest: null
		};
	}
	function Ki(a, b$1, c$1) {
		return {
			value: a,
			source: null,
			stack: null != c$1 ? c$1 : null,
			digest: null != b$1 ? b$1 : null
		};
	}
	function Li(a, b$1) {
		try {
			console.error(b$1.value);
		} catch (c$1) {
			setTimeout(function() {
				throw c$1;
			});
		}
	}
	var Mi = "function" === typeof WeakMap ? WeakMap : Map;
	function Ni(a, b$1, c$1) {
		c$1 = mh(-1, c$1);
		c$1.tag = 3;
		c$1.payload = { element: null };
		var d$1 = b$1.value;
		c$1.callback = function() {
			Oi || (Oi = !0, Pi = d$1);
			Li(a, b$1);
		};
		return c$1;
	}
	function Qi(a, b$1, c$1) {
		c$1 = mh(-1, c$1);
		c$1.tag = 3;
		var d$1 = a.type.getDerivedStateFromError;
		if ("function" === typeof d$1) {
			var e$1 = b$1.value;
			c$1.payload = function() {
				return d$1(e$1);
			};
			c$1.callback = function() {
				Li(a, b$1);
			};
		}
		var f$3 = a.stateNode;
		null !== f$3 && "function" === typeof f$3.componentDidCatch && (c$1.callback = function() {
			Li(a, b$1);
			"function" !== typeof d$1 && (null === Ri ? Ri = new Set([this]) : Ri.add(this));
			var c$2 = b$1.stack;
			this.componentDidCatch(b$1.value, { componentStack: null !== c$2 ? c$2 : "" });
		});
		return c$1;
	}
	function Si(a, b$1, c$1) {
		var d$1 = a.pingCache;
		if (null === d$1) {
			d$1 = a.pingCache = new Mi();
			var e$1 = /* @__PURE__ */ new Set();
			d$1.set(b$1, e$1);
		} else e$1 = d$1.get(b$1), void 0 === e$1 && (e$1 = /* @__PURE__ */ new Set(), d$1.set(b$1, e$1));
		e$1.has(c$1) || (e$1.add(c$1), a = Ti.bind(null, a, b$1, c$1), b$1.then(a, a));
	}
	function Ui(a) {
		do {
			var b$1;
			if (b$1 = 13 === a.tag) b$1 = a.memoizedState, b$1 = null !== b$1 ? null !== b$1.dehydrated ? !0 : !1 : !0;
			if (b$1) return a;
			a = a.return;
		} while (null !== a);
		return null;
	}
	function Vi(a, b$1, c$1, d$1, e$1) {
		if (0 === (a.mode & 1)) return a === b$1 ? a.flags |= 65536 : (a.flags |= 128, c$1.flags |= 131072, c$1.flags &= -52805, 1 === c$1.tag && (null === c$1.alternate ? c$1.tag = 17 : (b$1 = mh(-1, 1), b$1.tag = 2, nh(c$1, b$1, 1))), c$1.lanes |= 1), a;
		a.flags |= 65536;
		a.lanes = e$1;
		return a;
	}
	var Wi = ua.ReactCurrentOwner, dh = !1;
	function Xi(a, b$1, c$1, d$1) {
		b$1.child = null === a ? Vg(b$1, null, c$1, d$1) : Ug(b$1, a.child, c$1, d$1);
	}
	function Yi(a, b$1, c$1, d$1, e$1) {
		c$1 = c$1.render;
		var f$3 = b$1.ref;
		ch(b$1, e$1);
		d$1 = Nh(a, b$1, c$1, d$1, f$3, e$1);
		c$1 = Sh();
		if (null !== a && !dh) return b$1.updateQueue = a.updateQueue, b$1.flags &= -2053, a.lanes &= ~e$1, Zi(a, b$1, e$1);
		I && c$1 && vg(b$1);
		b$1.flags |= 1;
		Xi(a, b$1, d$1, e$1);
		return b$1.child;
	}
	function $i(a, b$1, c$1, d$1, e$1) {
		if (null === a) {
			var f$3 = c$1.type;
			if ("function" === typeof f$3 && !aj(f$3) && void 0 === f$3.defaultProps && null === c$1.compare && void 0 === c$1.defaultProps) return b$1.tag = 15, b$1.type = f$3, bj(a, b$1, f$3, d$1, e$1);
			a = Rg(c$1.type, null, d$1, b$1, b$1.mode, e$1);
			a.ref = b$1.ref;
			a.return = b$1;
			return b$1.child = a;
		}
		f$3 = a.child;
		if (0 === (a.lanes & e$1)) {
			var g$2 = f$3.memoizedProps;
			c$1 = c$1.compare;
			c$1 = null !== c$1 ? c$1 : Ie;
			if (c$1(g$2, d$1) && a.ref === b$1.ref) return Zi(a, b$1, e$1);
		}
		b$1.flags |= 1;
		a = Pg(f$3, d$1);
		a.ref = b$1.ref;
		a.return = b$1;
		return b$1.child = a;
	}
	function bj(a, b$1, c$1, d$1, e$1) {
		if (null !== a) {
			var f$3 = a.memoizedProps;
			if (Ie(f$3, d$1) && a.ref === b$1.ref) if (dh = !1, b$1.pendingProps = d$1 = f$3, 0 !== (a.lanes & e$1)) 0 !== (a.flags & 131072) && (dh = !0);
			else return b$1.lanes = a.lanes, Zi(a, b$1, e$1);
		}
		return cj(a, b$1, c$1, d$1, e$1);
	}
	function dj(a, b$1, c$1) {
		var d$1 = b$1.pendingProps, e$1 = d$1.children, f$3 = null !== a ? a.memoizedState : null;
		if ("hidden" === d$1.mode) if (0 === (b$1.mode & 1)) b$1.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, G(ej, fj), fj |= c$1;
		else {
			if (0 === (c$1 & 1073741824)) return a = null !== f$3 ? f$3.baseLanes | c$1 : c$1, b$1.lanes = b$1.childLanes = 1073741824, b$1.memoizedState = {
				baseLanes: a,
				cachePool: null,
				transitions: null
			}, b$1.updateQueue = null, G(ej, fj), fj |= a, null;
			b$1.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			};
			d$1 = null !== f$3 ? f$3.baseLanes : c$1;
			G(ej, fj);
			fj |= d$1;
		}
		else null !== f$3 ? (d$1 = f$3.baseLanes | c$1, b$1.memoizedState = null) : d$1 = c$1, G(ej, fj), fj |= d$1;
		Xi(a, b$1, e$1, c$1);
		return b$1.child;
	}
	function gj(a, b$1) {
		var c$1 = b$1.ref;
		if (null === a && null !== c$1 || null !== a && a.ref !== c$1) b$1.flags |= 512, b$1.flags |= 2097152;
	}
	function cj(a, b$1, c$1, d$1, e$1) {
		var f$3 = Zf(c$1) ? Xf : H.current;
		f$3 = Yf(b$1, f$3);
		ch(b$1, e$1);
		c$1 = Nh(a, b$1, c$1, d$1, f$3, e$1);
		d$1 = Sh();
		if (null !== a && !dh) return b$1.updateQueue = a.updateQueue, b$1.flags &= -2053, a.lanes &= ~e$1, Zi(a, b$1, e$1);
		I && d$1 && vg(b$1);
		b$1.flags |= 1;
		Xi(a, b$1, c$1, e$1);
		return b$1.child;
	}
	function hj(a, b$1, c$1, d$1, e$1) {
		if (Zf(c$1)) {
			var f$3 = !0;
			cg(b$1);
		} else f$3 = !1;
		ch(b$1, e$1);
		if (null === b$1.stateNode) ij(a, b$1), Gi(b$1, c$1, d$1), Ii(b$1, c$1, d$1, e$1), d$1 = !0;
		else if (null === a) {
			var g$2 = b$1.stateNode, h$2 = b$1.memoizedProps;
			g$2.props = h$2;
			var k$3 = g$2.context, l$4 = c$1.contextType;
			"object" === typeof l$4 && null !== l$4 ? l$4 = eh(l$4) : (l$4 = Zf(c$1) ? Xf : H.current, l$4 = Yf(b$1, l$4));
			var m$2 = c$1.getDerivedStateFromProps, q$4 = "function" === typeof m$2 || "function" === typeof g$2.getSnapshotBeforeUpdate;
			q$4 || "function" !== typeof g$2.UNSAFE_componentWillReceiveProps && "function" !== typeof g$2.componentWillReceiveProps || (h$2 !== d$1 || k$3 !== l$4) && Hi(b$1, g$2, d$1, l$4);
			jh = !1;
			var r$4 = b$1.memoizedState;
			g$2.state = r$4;
			qh(b$1, d$1, g$2, e$1);
			k$3 = b$1.memoizedState;
			h$2 !== d$1 || r$4 !== k$3 || Wf.current || jh ? ("function" === typeof m$2 && (Di(b$1, c$1, m$2, d$1), k$3 = b$1.memoizedState), (h$2 = jh || Fi(b$1, c$1, h$2, d$1, r$4, k$3, l$4)) ? (q$4 || "function" !== typeof g$2.UNSAFE_componentWillMount && "function" !== typeof g$2.componentWillMount || ("function" === typeof g$2.componentWillMount && g$2.componentWillMount(), "function" === typeof g$2.UNSAFE_componentWillMount && g$2.UNSAFE_componentWillMount()), "function" === typeof g$2.componentDidMount && (b$1.flags |= 4194308)) : ("function" === typeof g$2.componentDidMount && (b$1.flags |= 4194308), b$1.memoizedProps = d$1, b$1.memoizedState = k$3), g$2.props = d$1, g$2.state = k$3, g$2.context = l$4, d$1 = h$2) : ("function" === typeof g$2.componentDidMount && (b$1.flags |= 4194308), d$1 = !1);
		} else {
			g$2 = b$1.stateNode;
			lh(a, b$1);
			h$2 = b$1.memoizedProps;
			l$4 = b$1.type === b$1.elementType ? h$2 : Ci(b$1.type, h$2);
			g$2.props = l$4;
			q$4 = b$1.pendingProps;
			r$4 = g$2.context;
			k$3 = c$1.contextType;
			"object" === typeof k$3 && null !== k$3 ? k$3 = eh(k$3) : (k$3 = Zf(c$1) ? Xf : H.current, k$3 = Yf(b$1, k$3));
			var y$3 = c$1.getDerivedStateFromProps;
			(m$2 = "function" === typeof y$3 || "function" === typeof g$2.getSnapshotBeforeUpdate) || "function" !== typeof g$2.UNSAFE_componentWillReceiveProps && "function" !== typeof g$2.componentWillReceiveProps || (h$2 !== q$4 || r$4 !== k$3) && Hi(b$1, g$2, d$1, k$3);
			jh = !1;
			r$4 = b$1.memoizedState;
			g$2.state = r$4;
			qh(b$1, d$1, g$2, e$1);
			var n$3 = b$1.memoizedState;
			h$2 !== q$4 || r$4 !== n$3 || Wf.current || jh ? ("function" === typeof y$3 && (Di(b$1, c$1, y$3, d$1), n$3 = b$1.memoizedState), (l$4 = jh || Fi(b$1, c$1, l$4, d$1, r$4, n$3, k$3) || !1) ? (m$2 || "function" !== typeof g$2.UNSAFE_componentWillUpdate && "function" !== typeof g$2.componentWillUpdate || ("function" === typeof g$2.componentWillUpdate && g$2.componentWillUpdate(d$1, n$3, k$3), "function" === typeof g$2.UNSAFE_componentWillUpdate && g$2.UNSAFE_componentWillUpdate(d$1, n$3, k$3)), "function" === typeof g$2.componentDidUpdate && (b$1.flags |= 4), "function" === typeof g$2.getSnapshotBeforeUpdate && (b$1.flags |= 1024)) : ("function" !== typeof g$2.componentDidUpdate || h$2 === a.memoizedProps && r$4 === a.memoizedState || (b$1.flags |= 4), "function" !== typeof g$2.getSnapshotBeforeUpdate || h$2 === a.memoizedProps && r$4 === a.memoizedState || (b$1.flags |= 1024), b$1.memoizedProps = d$1, b$1.memoizedState = n$3), g$2.props = d$1, g$2.state = n$3, g$2.context = k$3, d$1 = l$4) : ("function" !== typeof g$2.componentDidUpdate || h$2 === a.memoizedProps && r$4 === a.memoizedState || (b$1.flags |= 4), "function" !== typeof g$2.getSnapshotBeforeUpdate || h$2 === a.memoizedProps && r$4 === a.memoizedState || (b$1.flags |= 1024), d$1 = !1);
		}
		return jj(a, b$1, c$1, d$1, f$3, e$1);
	}
	function jj(a, b$1, c$1, d$1, e$1, f$3) {
		gj(a, b$1);
		var g$2 = 0 !== (b$1.flags & 128);
		if (!d$1 && !g$2) return e$1 && dg(b$1, c$1, !1), Zi(a, b$1, f$3);
		d$1 = b$1.stateNode;
		Wi.current = b$1;
		var h$2 = g$2 && "function" !== typeof c$1.getDerivedStateFromError ? null : d$1.render();
		b$1.flags |= 1;
		null !== a && g$2 ? (b$1.child = Ug(b$1, a.child, null, f$3), b$1.child = Ug(b$1, null, h$2, f$3)) : Xi(a, b$1, h$2, f$3);
		b$1.memoizedState = d$1.state;
		e$1 && dg(b$1, c$1, !0);
		return b$1.child;
	}
	function kj(a) {
		var b$1 = a.stateNode;
		b$1.pendingContext ? ag(a, b$1.pendingContext, b$1.pendingContext !== b$1.context) : b$1.context && ag(a, b$1.context, !1);
		yh(a, b$1.containerInfo);
	}
	function lj(a, b$1, c$1, d$1, e$1) {
		Ig();
		Jg(e$1);
		b$1.flags |= 256;
		Xi(a, b$1, c$1, d$1);
		return b$1.child;
	}
	var mj = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function nj(a) {
		return {
			baseLanes: a,
			cachePool: null,
			transitions: null
		};
	}
	function oj(a, b$1, c$1) {
		var d$1 = b$1.pendingProps, e$1 = L.current, f$3 = !1, g$2 = 0 !== (b$1.flags & 128), h$2;
		(h$2 = g$2) || (h$2 = null !== a && null === a.memoizedState ? !1 : 0 !== (e$1 & 2));
		if (h$2) f$3 = !0, b$1.flags &= -129;
		else if (null === a || null !== a.memoizedState) e$1 |= 1;
		G(L, e$1 & 1);
		if (null === a) {
			Eg(b$1);
			a = b$1.memoizedState;
			if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b$1.mode & 1) ? b$1.lanes = 1 : "$!" === a.data ? b$1.lanes = 8 : b$1.lanes = 1073741824, null;
			g$2 = d$1.children;
			a = d$1.fallback;
			return f$3 ? (d$1 = b$1.mode, f$3 = b$1.child, g$2 = {
				mode: "hidden",
				children: g$2
			}, 0 === (d$1 & 1) && null !== f$3 ? (f$3.childLanes = 0, f$3.pendingProps = g$2) : f$3 = pj(g$2, d$1, 0, null), a = Tg(a, d$1, c$1, null), f$3.return = b$1, a.return = b$1, f$3.sibling = a, b$1.child = f$3, b$1.child.memoizedState = nj(c$1), b$1.memoizedState = mj, a) : qj(b$1, g$2);
		}
		e$1 = a.memoizedState;
		if (null !== e$1 && (h$2 = e$1.dehydrated, null !== h$2)) return rj(a, b$1, g$2, d$1, h$2, e$1, c$1);
		if (f$3) {
			f$3 = d$1.fallback;
			g$2 = b$1.mode;
			e$1 = a.child;
			h$2 = e$1.sibling;
			var k$3 = {
				mode: "hidden",
				children: d$1.children
			};
			0 === (g$2 & 1) && b$1.child !== e$1 ? (d$1 = b$1.child, d$1.childLanes = 0, d$1.pendingProps = k$3, b$1.deletions = null) : (d$1 = Pg(e$1, k$3), d$1.subtreeFlags = e$1.subtreeFlags & 14680064);
			null !== h$2 ? f$3 = Pg(h$2, f$3) : (f$3 = Tg(f$3, g$2, c$1, null), f$3.flags |= 2);
			f$3.return = b$1;
			d$1.return = b$1;
			d$1.sibling = f$3;
			b$1.child = d$1;
			d$1 = f$3;
			f$3 = b$1.child;
			g$2 = a.child.memoizedState;
			g$2 = null === g$2 ? nj(c$1) : {
				baseLanes: g$2.baseLanes | c$1,
				cachePool: null,
				transitions: g$2.transitions
			};
			f$3.memoizedState = g$2;
			f$3.childLanes = a.childLanes & ~c$1;
			b$1.memoizedState = mj;
			return d$1;
		}
		f$3 = a.child;
		a = f$3.sibling;
		d$1 = Pg(f$3, {
			mode: "visible",
			children: d$1.children
		});
		0 === (b$1.mode & 1) && (d$1.lanes = c$1);
		d$1.return = b$1;
		d$1.sibling = null;
		null !== a && (c$1 = b$1.deletions, null === c$1 ? (b$1.deletions = [a], b$1.flags |= 16) : c$1.push(a));
		b$1.child = d$1;
		b$1.memoizedState = null;
		return d$1;
	}
	function qj(a, b$1) {
		b$1 = pj({
			mode: "visible",
			children: b$1
		}, a.mode, 0, null);
		b$1.return = a;
		return a.child = b$1;
	}
	function sj(a, b$1, c$1, d$1) {
		null !== d$1 && Jg(d$1);
		Ug(b$1, a.child, null, c$1);
		a = qj(b$1, b$1.pendingProps.children);
		a.flags |= 2;
		b$1.memoizedState = null;
		return a;
	}
	function rj(a, b$1, c$1, d$1, e$1, f$3, g$2) {
		if (c$1) {
			if (b$1.flags & 256) return b$1.flags &= -257, d$1 = Ki(Error(p(422))), sj(a, b$1, g$2, d$1);
			if (null !== b$1.memoizedState) return b$1.child = a.child, b$1.flags |= 128, null;
			f$3 = d$1.fallback;
			e$1 = b$1.mode;
			d$1 = pj({
				mode: "visible",
				children: d$1.children
			}, e$1, 0, null);
			f$3 = Tg(f$3, e$1, g$2, null);
			f$3.flags |= 2;
			d$1.return = b$1;
			f$3.return = b$1;
			d$1.sibling = f$3;
			b$1.child = d$1;
			0 !== (b$1.mode & 1) && Ug(b$1, a.child, null, g$2);
			b$1.child.memoizedState = nj(g$2);
			b$1.memoizedState = mj;
			return f$3;
		}
		if (0 === (b$1.mode & 1)) return sj(a, b$1, g$2, null);
		if ("$!" === e$1.data) {
			d$1 = e$1.nextSibling && e$1.nextSibling.dataset;
			if (d$1) var h$2 = d$1.dgst;
			d$1 = h$2;
			f$3 = Error(p(419));
			d$1 = Ki(f$3, d$1, void 0);
			return sj(a, b$1, g$2, d$1);
		}
		h$2 = 0 !== (g$2 & a.childLanes);
		if (dh || h$2) {
			d$1 = Q;
			if (null !== d$1) {
				switch (g$2 & -g$2) {
					case 4:
						e$1 = 2;
						break;
					case 16:
						e$1 = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						e$1 = 32;
						break;
					case 536870912:
						e$1 = 268435456;
						break;
					default: e$1 = 0;
				}
				e$1 = 0 !== (e$1 & (d$1.suspendedLanes | g$2)) ? 0 : e$1;
				0 !== e$1 && e$1 !== f$3.retryLane && (f$3.retryLane = e$1, ih(a, e$1), gi(d$1, a, e$1, -1));
			}
			tj();
			d$1 = Ki(Error(p(421)));
			return sj(a, b$1, g$2, d$1);
		}
		if ("$?" === e$1.data) return b$1.flags |= 128, b$1.child = a.child, b$1 = uj.bind(null, a), e$1._reactRetry = b$1, null;
		a = f$3.treeContext;
		yg = Lf(e$1.nextSibling);
		xg = b$1;
		I = !0;
		zg = null;
		null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b$1);
		b$1 = qj(b$1, d$1.children);
		b$1.flags |= 4096;
		return b$1;
	}
	function vj(a, b$1, c$1) {
		a.lanes |= b$1;
		var d$1 = a.alternate;
		null !== d$1 && (d$1.lanes |= b$1);
		bh(a.return, b$1, c$1);
	}
	function wj(a, b$1, c$1, d$1, e$1) {
		var f$3 = a.memoizedState;
		null === f$3 ? a.memoizedState = {
			isBackwards: b$1,
			rendering: null,
			renderingStartTime: 0,
			last: d$1,
			tail: c$1,
			tailMode: e$1
		} : (f$3.isBackwards = b$1, f$3.rendering = null, f$3.renderingStartTime = 0, f$3.last = d$1, f$3.tail = c$1, f$3.tailMode = e$1);
	}
	function xj(a, b$1, c$1) {
		var d$1 = b$1.pendingProps, e$1 = d$1.revealOrder, f$3 = d$1.tail;
		Xi(a, b$1, d$1.children, c$1);
		d$1 = L.current;
		if (0 !== (d$1 & 2)) d$1 = d$1 & 1 | 2, b$1.flags |= 128;
		else {
			if (null !== a && 0 !== (a.flags & 128)) a: for (a = b$1.child; null !== a;) {
				if (13 === a.tag) null !== a.memoizedState && vj(a, c$1, b$1);
				else if (19 === a.tag) vj(a, c$1, b$1);
				else if (null !== a.child) {
					a.child.return = a;
					a = a.child;
					continue;
				}
				if (a === b$1) break a;
				for (; null === a.sibling;) {
					if (null === a.return || a.return === b$1) break a;
					a = a.return;
				}
				a.sibling.return = a.return;
				a = a.sibling;
			}
			d$1 &= 1;
		}
		G(L, d$1);
		if (0 === (b$1.mode & 1)) b$1.memoizedState = null;
		else switch (e$1) {
			case "forwards":
				c$1 = b$1.child;
				for (e$1 = null; null !== c$1;) a = c$1.alternate, null !== a && null === Ch(a) && (e$1 = c$1), c$1 = c$1.sibling;
				c$1 = e$1;
				null === c$1 ? (e$1 = b$1.child, b$1.child = null) : (e$1 = c$1.sibling, c$1.sibling = null);
				wj(b$1, !1, e$1, c$1, f$3);
				break;
			case "backwards":
				c$1 = null;
				e$1 = b$1.child;
				for (b$1.child = null; null !== e$1;) {
					a = e$1.alternate;
					if (null !== a && null === Ch(a)) {
						b$1.child = e$1;
						break;
					}
					a = e$1.sibling;
					e$1.sibling = c$1;
					c$1 = e$1;
					e$1 = a;
				}
				wj(b$1, !0, c$1, null, f$3);
				break;
			case "together":
				wj(b$1, !1, null, null, void 0);
				break;
			default: b$1.memoizedState = null;
		}
		return b$1.child;
	}
	function ij(a, b$1) {
		0 === (b$1.mode & 1) && null !== a && (a.alternate = null, b$1.alternate = null, b$1.flags |= 2);
	}
	function Zi(a, b$1, c$1) {
		null !== a && (b$1.dependencies = a.dependencies);
		rh |= b$1.lanes;
		if (0 === (c$1 & b$1.childLanes)) return null;
		if (null !== a && b$1.child !== a.child) throw Error(p(153));
		if (null !== b$1.child) {
			a = b$1.child;
			c$1 = Pg(a, a.pendingProps);
			b$1.child = c$1;
			for (c$1.return = b$1; null !== a.sibling;) a = a.sibling, c$1 = c$1.sibling = Pg(a, a.pendingProps), c$1.return = b$1;
			c$1.sibling = null;
		}
		return b$1.child;
	}
	function yj(a, b$1, c$1) {
		switch (b$1.tag) {
			case 3:
				kj(b$1);
				Ig();
				break;
			case 5:
				Ah(b$1);
				break;
			case 1:
				Zf(b$1.type) && cg(b$1);
				break;
			case 4:
				yh(b$1, b$1.stateNode.containerInfo);
				break;
			case 10:
				var d$1 = b$1.type._context, e$1 = b$1.memoizedProps.value;
				G(Wg, d$1._currentValue);
				d$1._currentValue = e$1;
				break;
			case 13:
				d$1 = b$1.memoizedState;
				if (null !== d$1) {
					if (null !== d$1.dehydrated) return G(L, L.current & 1), b$1.flags |= 128, null;
					if (0 !== (c$1 & b$1.child.childLanes)) return oj(a, b$1, c$1);
					G(L, L.current & 1);
					a = Zi(a, b$1, c$1);
					return null !== a ? a.sibling : null;
				}
				G(L, L.current & 1);
				break;
			case 19:
				d$1 = 0 !== (c$1 & b$1.childLanes);
				if (0 !== (a.flags & 128)) {
					if (d$1) return xj(a, b$1, c$1);
					b$1.flags |= 128;
				}
				e$1 = b$1.memoizedState;
				null !== e$1 && (e$1.rendering = null, e$1.tail = null, e$1.lastEffect = null);
				G(L, L.current);
				if (d$1) break;
				else return null;
			case 22:
			case 23: return b$1.lanes = 0, dj(a, b$1, c$1);
		}
		return Zi(a, b$1, c$1);
	}
	var zj = function(a, b$1) {
		for (var c$1 = b$1.child; null !== c$1;) {
			if (5 === c$1.tag || 6 === c$1.tag) a.appendChild(c$1.stateNode);
			else if (4 !== c$1.tag && null !== c$1.child) {
				c$1.child.return = c$1;
				c$1 = c$1.child;
				continue;
			}
			if (c$1 === b$1) break;
			for (; null === c$1.sibling;) {
				if (null === c$1.return || c$1.return === b$1) return;
				c$1 = c$1.return;
			}
			c$1.sibling.return = c$1.return;
			c$1 = c$1.sibling;
		}
	}, Aj = function() {}, Bj = function(a, b$1, c$1, d$1) {
		var e$1 = a.memoizedProps;
		if (e$1 !== d$1) {
			a = b$1.stateNode;
			xh(uh.current);
			var f$3 = null;
			switch (c$1) {
				case "input":
					e$1 = Ya(a, e$1);
					d$1 = Ya(a, d$1);
					f$3 = [];
					break;
				case "select":
					e$1 = A({}, e$1, { value: void 0 });
					d$1 = A({}, d$1, { value: void 0 });
					f$3 = [];
					break;
				case "textarea":
					e$1 = gb(a, e$1);
					d$1 = gb(a, d$1);
					f$3 = [];
					break;
				default: "function" !== typeof e$1.onClick && "function" === typeof d$1.onClick && (a.onclick = Bf);
			}
			ub(c$1, d$1);
			var g$2;
			c$1 = null;
			for (l$4 in e$1) if (!d$1.hasOwnProperty(l$4) && e$1.hasOwnProperty(l$4) && null != e$1[l$4]) if ("style" === l$4) {
				var h$2 = e$1[l$4];
				for (g$2 in h$2) h$2.hasOwnProperty(g$2) && (c$1 || (c$1 = {}), c$1[g$2] = "");
			} else "dangerouslySetInnerHTML" !== l$4 && "children" !== l$4 && "suppressContentEditableWarning" !== l$4 && "suppressHydrationWarning" !== l$4 && "autoFocus" !== l$4 && (ea.hasOwnProperty(l$4) ? f$3 || (f$3 = []) : (f$3 = f$3 || []).push(l$4, null));
			for (l$4 in d$1) {
				var k$3 = d$1[l$4];
				h$2 = null != e$1 ? e$1[l$4] : void 0;
				if (d$1.hasOwnProperty(l$4) && k$3 !== h$2 && (null != k$3 || null != h$2)) if ("style" === l$4) if (h$2) {
					for (g$2 in h$2) !h$2.hasOwnProperty(g$2) || k$3 && k$3.hasOwnProperty(g$2) || (c$1 || (c$1 = {}), c$1[g$2] = "");
					for (g$2 in k$3) k$3.hasOwnProperty(g$2) && h$2[g$2] !== k$3[g$2] && (c$1 || (c$1 = {}), c$1[g$2] = k$3[g$2]);
				} else c$1 || (f$3 || (f$3 = []), f$3.push(l$4, c$1)), c$1 = k$3;
				else "dangerouslySetInnerHTML" === l$4 ? (k$3 = k$3 ? k$3.__html : void 0, h$2 = h$2 ? h$2.__html : void 0, null != k$3 && h$2 !== k$3 && (f$3 = f$3 || []).push(l$4, k$3)) : "children" === l$4 ? "string" !== typeof k$3 && "number" !== typeof k$3 || (f$3 = f$3 || []).push(l$4, "" + k$3) : "suppressContentEditableWarning" !== l$4 && "suppressHydrationWarning" !== l$4 && (ea.hasOwnProperty(l$4) ? (null != k$3 && "onScroll" === l$4 && D("scroll", a), f$3 || h$2 === k$3 || (f$3 = [])) : (f$3 = f$3 || []).push(l$4, k$3));
			}
			c$1 && (f$3 = f$3 || []).push("style", c$1);
			var l$4 = f$3;
			if (b$1.updateQueue = l$4) b$1.flags |= 4;
		}
	}, Cj = function(a, b$1, c$1, d$1) {
		c$1 !== d$1 && (b$1.flags |= 4);
	};
	function Dj(a, b$1) {
		if (!I) switch (a.tailMode) {
			case "hidden":
				b$1 = a.tail;
				for (var c$1 = null; null !== b$1;) null !== b$1.alternate && (c$1 = b$1), b$1 = b$1.sibling;
				null === c$1 ? a.tail = null : c$1.sibling = null;
				break;
			case "collapsed":
				c$1 = a.tail;
				for (var d$1 = null; null !== c$1;) null !== c$1.alternate && (d$1 = c$1), c$1 = c$1.sibling;
				null === d$1 ? b$1 || null === a.tail ? a.tail = null : a.tail.sibling = null : d$1.sibling = null;
		}
	}
	function S(a) {
		var b$1 = null !== a.alternate && a.alternate.child === a.child, c$1 = 0, d$1 = 0;
		if (b$1) for (var e$1 = a.child; null !== e$1;) c$1 |= e$1.lanes | e$1.childLanes, d$1 |= e$1.subtreeFlags & 14680064, d$1 |= e$1.flags & 14680064, e$1.return = a, e$1 = e$1.sibling;
		else for (e$1 = a.child; null !== e$1;) c$1 |= e$1.lanes | e$1.childLanes, d$1 |= e$1.subtreeFlags, d$1 |= e$1.flags, e$1.return = a, e$1 = e$1.sibling;
		a.subtreeFlags |= d$1;
		a.childLanes = c$1;
		return b$1;
	}
	function Ej(a, b$1, c$1) {
		var d$1 = b$1.pendingProps;
		wg(b$1);
		switch (b$1.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return S(b$1), null;
			case 1: return Zf(b$1.type) && $f(), S(b$1), null;
			case 3:
				d$1 = b$1.stateNode;
				zh();
				E(Wf);
				E(H);
				Eh();
				d$1.pendingContext && (d$1.context = d$1.pendingContext, d$1.pendingContext = null);
				if (null === a || null === a.child) Gg(b$1) ? b$1.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b$1.flags & 256) || (b$1.flags |= 1024, null !== zg && (Fj(zg), zg = null));
				Aj(a, b$1);
				S(b$1);
				return null;
			case 5:
				Bh(b$1);
				var e$1 = xh(wh.current);
				c$1 = b$1.type;
				if (null !== a && null != b$1.stateNode) Bj(a, b$1, c$1, d$1, e$1), a.ref !== b$1.ref && (b$1.flags |= 512, b$1.flags |= 2097152);
				else {
					if (!d$1) {
						if (null === b$1.stateNode) throw Error(p(166));
						S(b$1);
						return null;
					}
					a = xh(uh.current);
					if (Gg(b$1)) {
						d$1 = b$1.stateNode;
						c$1 = b$1.type;
						var f$3 = b$1.memoizedProps;
						d$1[Of] = b$1;
						d$1[Pf] = f$3;
						a = 0 !== (b$1.mode & 1);
						switch (c$1) {
							case "dialog":
								D("cancel", d$1);
								D("close", d$1);
								break;
							case "iframe":
							case "object":
							case "embed":
								D("load", d$1);
								break;
							case "video":
							case "audio":
								for (e$1 = 0; e$1 < lf.length; e$1++) D(lf[e$1], d$1);
								break;
							case "source":
								D("error", d$1);
								break;
							case "img":
							case "image":
							case "link":
								D("error", d$1);
								D("load", d$1);
								break;
							case "details":
								D("toggle", d$1);
								break;
							case "input":
								Za(d$1, f$3);
								D("invalid", d$1);
								break;
							case "select":
								d$1._wrapperState = { wasMultiple: !!f$3.multiple };
								D("invalid", d$1);
								break;
							case "textarea": hb(d$1, f$3), D("invalid", d$1);
						}
						ub(c$1, f$3);
						e$1 = null;
						for (var g$2 in f$3) if (f$3.hasOwnProperty(g$2)) {
							var h$2 = f$3[g$2];
							"children" === g$2 ? "string" === typeof h$2 ? d$1.textContent !== h$2 && (!0 !== f$3.suppressHydrationWarning && Af(d$1.textContent, h$2, a), e$1 = ["children", h$2]) : "number" === typeof h$2 && d$1.textContent !== "" + h$2 && (!0 !== f$3.suppressHydrationWarning && Af(d$1.textContent, h$2, a), e$1 = ["children", "" + h$2]) : ea.hasOwnProperty(g$2) && null != h$2 && "onScroll" === g$2 && D("scroll", d$1);
						}
						switch (c$1) {
							case "input":
								Va(d$1);
								db(d$1, f$3, !0);
								break;
							case "textarea":
								Va(d$1);
								jb(d$1);
								break;
							case "select":
							case "option": break;
							default: "function" === typeof f$3.onClick && (d$1.onclick = Bf);
						}
						d$1 = e$1;
						b$1.updateQueue = d$1;
						null !== d$1 && (b$1.flags |= 4);
					} else {
						g$2 = 9 === e$1.nodeType ? e$1 : e$1.ownerDocument;
						"http://www.w3.org/1999/xhtml" === a && (a = kb(c$1));
						"http://www.w3.org/1999/xhtml" === a ? "script" === c$1 ? (a = g$2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d$1.is ? a = g$2.createElement(c$1, { is: d$1.is }) : (a = g$2.createElement(c$1), "select" === c$1 && (g$2 = a, d$1.multiple ? g$2.multiple = !0 : d$1.size && (g$2.size = d$1.size))) : a = g$2.createElementNS(a, c$1);
						a[Of] = b$1;
						a[Pf] = d$1;
						zj(a, b$1, !1, !1);
						b$1.stateNode = a;
						a: {
							g$2 = vb(c$1, d$1);
							switch (c$1) {
								case "dialog":
									D("cancel", a);
									D("close", a);
									e$1 = d$1;
									break;
								case "iframe":
								case "object":
								case "embed":
									D("load", a);
									e$1 = d$1;
									break;
								case "video":
								case "audio":
									for (e$1 = 0; e$1 < lf.length; e$1++) D(lf[e$1], a);
									e$1 = d$1;
									break;
								case "source":
									D("error", a);
									e$1 = d$1;
									break;
								case "img":
								case "image":
								case "link":
									D("error", a);
									D("load", a);
									e$1 = d$1;
									break;
								case "details":
									D("toggle", a);
									e$1 = d$1;
									break;
								case "input":
									Za(a, d$1);
									e$1 = Ya(a, d$1);
									D("invalid", a);
									break;
								case "option":
									e$1 = d$1;
									break;
								case "select":
									a._wrapperState = { wasMultiple: !!d$1.multiple };
									e$1 = A({}, d$1, { value: void 0 });
									D("invalid", a);
									break;
								case "textarea":
									hb(a, d$1);
									e$1 = gb(a, d$1);
									D("invalid", a);
									break;
								default: e$1 = d$1;
							}
							ub(c$1, e$1);
							h$2 = e$1;
							for (f$3 in h$2) if (h$2.hasOwnProperty(f$3)) {
								var k$3 = h$2[f$3];
								"style" === f$3 ? sb(a, k$3) : "dangerouslySetInnerHTML" === f$3 ? (k$3 = k$3 ? k$3.__html : void 0, null != k$3 && nb(a, k$3)) : "children" === f$3 ? "string" === typeof k$3 ? ("textarea" !== c$1 || "" !== k$3) && ob(a, k$3) : "number" === typeof k$3 && ob(a, "" + k$3) : "suppressContentEditableWarning" !== f$3 && "suppressHydrationWarning" !== f$3 && "autoFocus" !== f$3 && (ea.hasOwnProperty(f$3) ? null != k$3 && "onScroll" === f$3 && D("scroll", a) : null != k$3 && ta(a, f$3, k$3, g$2));
							}
							switch (c$1) {
								case "input":
									Va(a);
									db(a, d$1, !1);
									break;
								case "textarea":
									Va(a);
									jb(a);
									break;
								case "option":
									null != d$1.value && a.setAttribute("value", "" + Sa(d$1.value));
									break;
								case "select":
									a.multiple = !!d$1.multiple;
									f$3 = d$1.value;
									null != f$3 ? fb(a, !!d$1.multiple, f$3, !1) : null != d$1.defaultValue && fb(a, !!d$1.multiple, d$1.defaultValue, !0);
									break;
								default: "function" === typeof e$1.onClick && (a.onclick = Bf);
							}
							switch (c$1) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									d$1 = !!d$1.autoFocus;
									break a;
								case "img":
									d$1 = !0;
									break a;
								default: d$1 = !1;
							}
						}
						d$1 && (b$1.flags |= 4);
					}
					null !== b$1.ref && (b$1.flags |= 512, b$1.flags |= 2097152);
				}
				S(b$1);
				return null;
			case 6:
				if (a && null != b$1.stateNode) Cj(a, b$1, a.memoizedProps, d$1);
				else {
					if ("string" !== typeof d$1 && null === b$1.stateNode) throw Error(p(166));
					c$1 = xh(wh.current);
					xh(uh.current);
					if (Gg(b$1)) {
						d$1 = b$1.stateNode;
						c$1 = b$1.memoizedProps;
						d$1[Of] = b$1;
						if (f$3 = d$1.nodeValue !== c$1) {
							if (a = xg, null !== a) switch (a.tag) {
								case 3:
									Af(d$1.nodeValue, c$1, 0 !== (a.mode & 1));
									break;
								case 5: !0 !== a.memoizedProps.suppressHydrationWarning && Af(d$1.nodeValue, c$1, 0 !== (a.mode & 1));
							}
						}
						f$3 && (b$1.flags |= 4);
					} else d$1 = (9 === c$1.nodeType ? c$1 : c$1.ownerDocument).createTextNode(d$1), d$1[Of] = b$1, b$1.stateNode = d$1;
				}
				S(b$1);
				return null;
			case 13:
				E(L);
				d$1 = b$1.memoizedState;
				if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
					if (I && null !== yg && 0 !== (b$1.mode & 1) && 0 === (b$1.flags & 128)) Hg(), Ig(), b$1.flags |= 98560, f$3 = !1;
					else if (f$3 = Gg(b$1), null !== d$1 && null !== d$1.dehydrated) {
						if (null === a) {
							if (!f$3) throw Error(p(318));
							f$3 = b$1.memoizedState;
							f$3 = null !== f$3 ? f$3.dehydrated : null;
							if (!f$3) throw Error(p(317));
							f$3[Of] = b$1;
						} else Ig(), 0 === (b$1.flags & 128) && (b$1.memoizedState = null), b$1.flags |= 4;
						S(b$1);
						f$3 = !1;
					} else null !== zg && (Fj(zg), zg = null), f$3 = !0;
					if (!f$3) return b$1.flags & 65536 ? b$1 : null;
				}
				if (0 !== (b$1.flags & 128)) return b$1.lanes = c$1, b$1;
				d$1 = null !== d$1;
				d$1 !== (null !== a && null !== a.memoizedState) && d$1 && (b$1.child.flags |= 8192, 0 !== (b$1.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
				null !== b$1.updateQueue && (b$1.flags |= 4);
				S(b$1);
				return null;
			case 4: return zh(), Aj(a, b$1), null === a && sf(b$1.stateNode.containerInfo), S(b$1), null;
			case 10: return ah(b$1.type._context), S(b$1), null;
			case 17: return Zf(b$1.type) && $f(), S(b$1), null;
			case 19:
				E(L);
				f$3 = b$1.memoizedState;
				if (null === f$3) return S(b$1), null;
				d$1 = 0 !== (b$1.flags & 128);
				g$2 = f$3.rendering;
				if (null === g$2) if (d$1) Dj(f$3, !1);
				else {
					if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b$1.child; null !== a;) {
						g$2 = Ch(a);
						if (null !== g$2) {
							b$1.flags |= 128;
							Dj(f$3, !1);
							d$1 = g$2.updateQueue;
							null !== d$1 && (b$1.updateQueue = d$1, b$1.flags |= 4);
							b$1.subtreeFlags = 0;
							d$1 = c$1;
							for (c$1 = b$1.child; null !== c$1;) f$3 = c$1, a = d$1, f$3.flags &= 14680066, g$2 = f$3.alternate, null === g$2 ? (f$3.childLanes = 0, f$3.lanes = a, f$3.child = null, f$3.subtreeFlags = 0, f$3.memoizedProps = null, f$3.memoizedState = null, f$3.updateQueue = null, f$3.dependencies = null, f$3.stateNode = null) : (f$3.childLanes = g$2.childLanes, f$3.lanes = g$2.lanes, f$3.child = g$2.child, f$3.subtreeFlags = 0, f$3.deletions = null, f$3.memoizedProps = g$2.memoizedProps, f$3.memoizedState = g$2.memoizedState, f$3.updateQueue = g$2.updateQueue, f$3.type = g$2.type, a = g$2.dependencies, f$3.dependencies = null === a ? null : {
								lanes: a.lanes,
								firstContext: a.firstContext
							}), c$1 = c$1.sibling;
							G(L, L.current & 1 | 2);
							return b$1.child;
						}
						a = a.sibling;
					}
					null !== f$3.tail && B() > Gj && (b$1.flags |= 128, d$1 = !0, Dj(f$3, !1), b$1.lanes = 4194304);
				}
				else {
					if (!d$1) if (a = Ch(g$2), null !== a) {
						if (b$1.flags |= 128, d$1 = !0, c$1 = a.updateQueue, null !== c$1 && (b$1.updateQueue = c$1, b$1.flags |= 4), Dj(f$3, !0), null === f$3.tail && "hidden" === f$3.tailMode && !g$2.alternate && !I) return S(b$1), null;
					} else 2 * B() - f$3.renderingStartTime > Gj && 1073741824 !== c$1 && (b$1.flags |= 128, d$1 = !0, Dj(f$3, !1), b$1.lanes = 4194304);
					f$3.isBackwards ? (g$2.sibling = b$1.child, b$1.child = g$2) : (c$1 = f$3.last, null !== c$1 ? c$1.sibling = g$2 : b$1.child = g$2, f$3.last = g$2);
				}
				if (null !== f$3.tail) return b$1 = f$3.tail, f$3.rendering = b$1, f$3.tail = b$1.sibling, f$3.renderingStartTime = B(), b$1.sibling = null, c$1 = L.current, G(L, d$1 ? c$1 & 1 | 2 : c$1 & 1), b$1;
				S(b$1);
				return null;
			case 22:
			case 23: return Hj(), d$1 = null !== b$1.memoizedState, null !== a && null !== a.memoizedState !== d$1 && (b$1.flags |= 8192), d$1 && 0 !== (b$1.mode & 1) ? 0 !== (fj & 1073741824) && (S(b$1), b$1.subtreeFlags & 6 && (b$1.flags |= 8192)) : S(b$1), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(p(156, b$1.tag));
	}
	function Ij(a, b$1) {
		wg(b$1);
		switch (b$1.tag) {
			case 1: return Zf(b$1.type) && $f(), a = b$1.flags, a & 65536 ? (b$1.flags = a & -65537 | 128, b$1) : null;
			case 3: return zh(), E(Wf), E(H), Eh(), a = b$1.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b$1.flags = a & -65537 | 128, b$1) : null;
			case 5: return Bh(b$1), null;
			case 13:
				E(L);
				a = b$1.memoizedState;
				if (null !== a && null !== a.dehydrated) {
					if (null === b$1.alternate) throw Error(p(340));
					Ig();
				}
				a = b$1.flags;
				return a & 65536 ? (b$1.flags = a & -65537 | 128, b$1) : null;
			case 19: return E(L), null;
			case 4: return zh(), null;
			case 10: return ah(b$1.type._context), null;
			case 22:
			case 23: return Hj(), null;
			case 24: return null;
			default: return null;
		}
	}
	var Jj = !1, U = !1, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
	function Lj(a, b$1) {
		var c$1 = a.ref;
		if (null !== c$1) if ("function" === typeof c$1) try {
			c$1(null);
		} catch (d$1) {
			W(a, b$1, d$1);
		}
		else c$1.current = null;
	}
	function Mj(a, b$1, c$1) {
		try {
			c$1();
		} catch (d$1) {
			W(a, b$1, d$1);
		}
	}
	var Nj = !1;
	function Oj(a, b$1) {
		Cf = dd;
		a = Me();
		if (Ne(a)) {
			if ("selectionStart" in a) var c$1 = {
				start: a.selectionStart,
				end: a.selectionEnd
			};
			else a: {
				c$1 = (c$1 = a.ownerDocument) && c$1.defaultView || window;
				var d$1 = c$1.getSelection && c$1.getSelection();
				if (d$1 && 0 !== d$1.rangeCount) {
					c$1 = d$1.anchorNode;
					var e$1 = d$1.anchorOffset, f$3 = d$1.focusNode;
					d$1 = d$1.focusOffset;
					try {
						c$1.nodeType, f$3.nodeType;
					} catch (F$2) {
						c$1 = null;
						break a;
					}
					var g$2 = 0, h$2 = -1, k$3 = -1, l$4 = 0, m$2 = 0, q$4 = a, r$4 = null;
					b: for (;;) {
						for (var y$3;;) {
							q$4 !== c$1 || 0 !== e$1 && 3 !== q$4.nodeType || (h$2 = g$2 + e$1);
							q$4 !== f$3 || 0 !== d$1 && 3 !== q$4.nodeType || (k$3 = g$2 + d$1);
							3 === q$4.nodeType && (g$2 += q$4.nodeValue.length);
							if (null === (y$3 = q$4.firstChild)) break;
							r$4 = q$4;
							q$4 = y$3;
						}
						for (;;) {
							if (q$4 === a) break b;
							r$4 === c$1 && ++l$4 === e$1 && (h$2 = g$2);
							r$4 === f$3 && ++m$2 === d$1 && (k$3 = g$2);
							if (null !== (y$3 = q$4.nextSibling)) break;
							q$4 = r$4;
							r$4 = q$4.parentNode;
						}
						q$4 = y$3;
					}
					c$1 = -1 === h$2 || -1 === k$3 ? null : {
						start: h$2,
						end: k$3
					};
				} else c$1 = null;
			}
			c$1 = c$1 || {
				start: 0,
				end: 0
			};
		} else c$1 = null;
		Df = {
			focusedElem: a,
			selectionRange: c$1
		};
		dd = !1;
		for (V = b$1; null !== V;) if (b$1 = V, a = b$1.child, 0 !== (b$1.subtreeFlags & 1028) && null !== a) a.return = b$1, V = a;
		else for (; null !== V;) {
			b$1 = V;
			try {
				var n$3 = b$1.alternate;
				if (0 !== (b$1.flags & 1024)) switch (b$1.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						if (null !== n$3) {
							var t$4 = n$3.memoizedProps, J$2 = n$3.memoizedState, x$2 = b$1.stateNode;
							x$2.__reactInternalSnapshotBeforeUpdate = x$2.getSnapshotBeforeUpdate(b$1.elementType === b$1.type ? t$4 : Ci(b$1.type, t$4), J$2);
						}
						break;
					case 3:
						var u$2 = b$1.stateNode.containerInfo;
						1 === u$2.nodeType ? u$2.textContent = "" : 9 === u$2.nodeType && u$2.documentElement && u$2.removeChild(u$2.documentElement);
						break;
					case 5:
					case 6:
					case 4:
					case 17: break;
					default: throw Error(p(163));
				}
			} catch (F$2) {
				W(b$1, b$1.return, F$2);
			}
			a = b$1.sibling;
			if (null !== a) {
				a.return = b$1.return;
				V = a;
				break;
			}
			V = b$1.return;
		}
		n$3 = Nj;
		Nj = !1;
		return n$3;
	}
	function Pj(a, b$1, c$1) {
		var d$1 = b$1.updateQueue;
		d$1 = null !== d$1 ? d$1.lastEffect : null;
		if (null !== d$1) {
			var e$1 = d$1 = d$1.next;
			do {
				if ((e$1.tag & a) === a) {
					var f$3 = e$1.destroy;
					e$1.destroy = void 0;
					void 0 !== f$3 && Mj(b$1, c$1, f$3);
				}
				e$1 = e$1.next;
			} while (e$1 !== d$1);
		}
	}
	function Qj(a, b$1) {
		b$1 = b$1.updateQueue;
		b$1 = null !== b$1 ? b$1.lastEffect : null;
		if (null !== b$1) {
			var c$1 = b$1 = b$1.next;
			do {
				if ((c$1.tag & a) === a) {
					var d$1 = c$1.create;
					c$1.destroy = d$1();
				}
				c$1 = c$1.next;
			} while (c$1 !== b$1);
		}
	}
	function Rj(a) {
		var b$1 = a.ref;
		if (null !== b$1) {
			var c$1 = a.stateNode;
			switch (a.tag) {
				case 5:
					a = c$1;
					break;
				default: a = c$1;
			}
			"function" === typeof b$1 ? b$1(a) : b$1.current = a;
		}
	}
	function Sj(a) {
		var b$1 = a.alternate;
		null !== b$1 && (a.alternate = null, Sj(b$1));
		a.child = null;
		a.deletions = null;
		a.sibling = null;
		5 === a.tag && (b$1 = a.stateNode, null !== b$1 && (delete b$1[Of], delete b$1[Pf], delete b$1[of], delete b$1[Qf], delete b$1[Rf]));
		a.stateNode = null;
		a.return = null;
		a.dependencies = null;
		a.memoizedProps = null;
		a.memoizedState = null;
		a.pendingProps = null;
		a.stateNode = null;
		a.updateQueue = null;
	}
	function Tj(a) {
		return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function Uj(a) {
		a: for (;;) {
			for (; null === a.sibling;) {
				if (null === a.return || Tj(a.return)) return null;
				a = a.return;
			}
			a.sibling.return = a.return;
			for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
				if (a.flags & 2) continue a;
				if (null === a.child || 4 === a.tag) continue a;
				else a.child.return = a, a = a.child;
			}
			if (!(a.flags & 2)) return a.stateNode;
		}
	}
	function Vj(a, b$1, c$1) {
		var d$1 = a.tag;
		if (5 === d$1 || 6 === d$1) a = a.stateNode, b$1 ? 8 === c$1.nodeType ? c$1.parentNode.insertBefore(a, b$1) : c$1.insertBefore(a, b$1) : (8 === c$1.nodeType ? (b$1 = c$1.parentNode, b$1.insertBefore(a, c$1)) : (b$1 = c$1, b$1.appendChild(a)), c$1 = c$1._reactRootContainer, null !== c$1 && void 0 !== c$1 || null !== b$1.onclick || (b$1.onclick = Bf));
		else if (4 !== d$1 && (a = a.child, null !== a)) for (Vj(a, b$1, c$1), a = a.sibling; null !== a;) Vj(a, b$1, c$1), a = a.sibling;
	}
	function Wj(a, b$1, c$1) {
		var d$1 = a.tag;
		if (5 === d$1 || 6 === d$1) a = a.stateNode, b$1 ? c$1.insertBefore(a, b$1) : c$1.appendChild(a);
		else if (4 !== d$1 && (a = a.child, null !== a)) for (Wj(a, b$1, c$1), a = a.sibling; null !== a;) Wj(a, b$1, c$1), a = a.sibling;
	}
	var X = null, Xj = !1;
	function Yj(a, b$1, c$1) {
		for (c$1 = c$1.child; null !== c$1;) Zj(a, b$1, c$1), c$1 = c$1.sibling;
	}
	function Zj(a, b$1, c$1) {
		if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
			lc.onCommitFiberUnmount(kc, c$1);
		} catch (h$2) {}
		switch (c$1.tag) {
			case 5: U || Lj(c$1, b$1);
			case 6:
				var d$1 = X, e$1 = Xj;
				X = null;
				Yj(a, b$1, c$1);
				X = d$1;
				Xj = e$1;
				null !== X && (Xj ? (a = X, c$1 = c$1.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c$1) : a.removeChild(c$1)) : X.removeChild(c$1.stateNode));
				break;
			case 18:
				null !== X && (Xj ? (a = X, c$1 = c$1.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c$1) : 1 === a.nodeType && Kf(a, c$1), bd(a)) : Kf(X, c$1.stateNode));
				break;
			case 4:
				d$1 = X;
				e$1 = Xj;
				X = c$1.stateNode.containerInfo;
				Xj = !0;
				Yj(a, b$1, c$1);
				X = d$1;
				Xj = e$1;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!U && (d$1 = c$1.updateQueue, null !== d$1 && (d$1 = d$1.lastEffect, null !== d$1))) {
					e$1 = d$1 = d$1.next;
					do {
						var f$3 = e$1, g$2 = f$3.destroy;
						f$3 = f$3.tag;
						void 0 !== g$2 && (0 !== (f$3 & 2) ? Mj(c$1, b$1, g$2) : 0 !== (f$3 & 4) && Mj(c$1, b$1, g$2));
						e$1 = e$1.next;
					} while (e$1 !== d$1);
				}
				Yj(a, b$1, c$1);
				break;
			case 1:
				if (!U && (Lj(c$1, b$1), d$1 = c$1.stateNode, "function" === typeof d$1.componentWillUnmount)) try {
					d$1.props = c$1.memoizedProps, d$1.state = c$1.memoizedState, d$1.componentWillUnmount();
				} catch (h$2) {
					W(c$1, b$1, h$2);
				}
				Yj(a, b$1, c$1);
				break;
			case 21:
				Yj(a, b$1, c$1);
				break;
			case 22:
				c$1.mode & 1 ? (U = (d$1 = U) || null !== c$1.memoizedState, Yj(a, b$1, c$1), U = d$1) : Yj(a, b$1, c$1);
				break;
			default: Yj(a, b$1, c$1);
		}
	}
	function ak(a) {
		var b$1 = a.updateQueue;
		if (null !== b$1) {
			a.updateQueue = null;
			var c$1 = a.stateNode;
			null === c$1 && (c$1 = a.stateNode = new Kj());
			b$1.forEach(function(b$2) {
				var d$1 = bk.bind(null, a, b$2);
				c$1.has(b$2) || (c$1.add(b$2), b$2.then(d$1, d$1));
			});
		}
	}
	function ck(a, b$1) {
		var c$1 = b$1.deletions;
		if (null !== c$1) for (var d$1 = 0; d$1 < c$1.length; d$1++) {
			var e$1 = c$1[d$1];
			try {
				var f$3 = a, g$2 = b$1, h$2 = g$2;
				a: for (; null !== h$2;) {
					switch (h$2.tag) {
						case 5:
							X = h$2.stateNode;
							Xj = !1;
							break a;
						case 3:
							X = h$2.stateNode.containerInfo;
							Xj = !0;
							break a;
						case 4:
							X = h$2.stateNode.containerInfo;
							Xj = !0;
							break a;
					}
					h$2 = h$2.return;
				}
				if (null === X) throw Error(p(160));
				Zj(f$3, g$2, e$1);
				X = null;
				Xj = !1;
				var k$3 = e$1.alternate;
				null !== k$3 && (k$3.return = null);
				e$1.return = null;
			} catch (l$4) {
				W(e$1, b$1, l$4);
			}
		}
		if (b$1.subtreeFlags & 12854) for (b$1 = b$1.child; null !== b$1;) dk(b$1, a), b$1 = b$1.sibling;
	}
	function dk(a, b$1) {
		var c$1 = a.alternate, d$1 = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				ck(b$1, a);
				ek(a);
				if (d$1 & 4) {
					try {
						Pj(3, a, a.return), Qj(3, a);
					} catch (t$4) {
						W(a, a.return, t$4);
					}
					try {
						Pj(5, a, a.return);
					} catch (t$4) {
						W(a, a.return, t$4);
					}
				}
				break;
			case 1:
				ck(b$1, a);
				ek(a);
				d$1 & 512 && null !== c$1 && Lj(c$1, c$1.return);
				break;
			case 5:
				ck(b$1, a);
				ek(a);
				d$1 & 512 && null !== c$1 && Lj(c$1, c$1.return);
				if (a.flags & 32) {
					var e$1 = a.stateNode;
					try {
						ob(e$1, "");
					} catch (t$4) {
						W(a, a.return, t$4);
					}
				}
				if (d$1 & 4 && (e$1 = a.stateNode, null != e$1)) {
					var f$3 = a.memoizedProps, g$2 = null !== c$1 ? c$1.memoizedProps : f$3, h$2 = a.type, k$3 = a.updateQueue;
					a.updateQueue = null;
					if (null !== k$3) try {
						"input" === h$2 && "radio" === f$3.type && null != f$3.name && ab(e$1, f$3);
						vb(h$2, g$2);
						var l$4 = vb(h$2, f$3);
						for (g$2 = 0; g$2 < k$3.length; g$2 += 2) {
							var m$2 = k$3[g$2], q$4 = k$3[g$2 + 1];
							"style" === m$2 ? sb(e$1, q$4) : "dangerouslySetInnerHTML" === m$2 ? nb(e$1, q$4) : "children" === m$2 ? ob(e$1, q$4) : ta(e$1, m$2, q$4, l$4);
						}
						switch (h$2) {
							case "input":
								bb(e$1, f$3);
								break;
							case "textarea":
								ib(e$1, f$3);
								break;
							case "select":
								var r$4 = e$1._wrapperState.wasMultiple;
								e$1._wrapperState.wasMultiple = !!f$3.multiple;
								var y$3 = f$3.value;
								null != y$3 ? fb(e$1, !!f$3.multiple, y$3, !1) : r$4 !== !!f$3.multiple && (null != f$3.defaultValue ? fb(e$1, !!f$3.multiple, f$3.defaultValue, !0) : fb(e$1, !!f$3.multiple, f$3.multiple ? [] : "", !1));
						}
						e$1[Pf] = f$3;
					} catch (t$4) {
						W(a, a.return, t$4);
					}
				}
				break;
			case 6:
				ck(b$1, a);
				ek(a);
				if (d$1 & 4) {
					if (null === a.stateNode) throw Error(p(162));
					e$1 = a.stateNode;
					f$3 = a.memoizedProps;
					try {
						e$1.nodeValue = f$3;
					} catch (t$4) {
						W(a, a.return, t$4);
					}
				}
				break;
			case 3:
				ck(b$1, a);
				ek(a);
				if (d$1 & 4 && null !== c$1 && c$1.memoizedState.isDehydrated) try {
					bd(b$1.containerInfo);
				} catch (t$4) {
					W(a, a.return, t$4);
				}
				break;
			case 4:
				ck(b$1, a);
				ek(a);
				break;
			case 13:
				ck(b$1, a);
				ek(a);
				e$1 = a.child;
				e$1.flags & 8192 && (f$3 = null !== e$1.memoizedState, e$1.stateNode.isHidden = f$3, !f$3 || null !== e$1.alternate && null !== e$1.alternate.memoizedState || (fk = B()));
				d$1 & 4 && ak(a);
				break;
			case 22:
				m$2 = null !== c$1 && null !== c$1.memoizedState;
				a.mode & 1 ? (U = (l$4 = U) || m$2, ck(b$1, a), U = l$4) : ck(b$1, a);
				ek(a);
				if (d$1 & 8192) {
					l$4 = null !== a.memoizedState;
					if ((a.stateNode.isHidden = l$4) && !m$2 && 0 !== (a.mode & 1)) for (V = a, m$2 = a.child; null !== m$2;) {
						for (q$4 = V = m$2; null !== V;) {
							r$4 = V;
							y$3 = r$4.child;
							switch (r$4.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Pj(4, r$4, r$4.return);
									break;
								case 1:
									Lj(r$4, r$4.return);
									var n$3 = r$4.stateNode;
									if ("function" === typeof n$3.componentWillUnmount) {
										d$1 = r$4;
										c$1 = r$4.return;
										try {
											b$1 = d$1, n$3.props = b$1.memoizedProps, n$3.state = b$1.memoizedState, n$3.componentWillUnmount();
										} catch (t$4) {
											W(d$1, c$1, t$4);
										}
									}
									break;
								case 5:
									Lj(r$4, r$4.return);
									break;
								case 22: if (null !== r$4.memoizedState) {
									gk(q$4);
									continue;
								}
							}
							null !== y$3 ? (y$3.return = r$4, V = y$3) : gk(q$4);
						}
						m$2 = m$2.sibling;
					}
					a: for (m$2 = null, q$4 = a;;) {
						if (5 === q$4.tag) {
							if (null === m$2) {
								m$2 = q$4;
								try {
									e$1 = q$4.stateNode, l$4 ? (f$3 = e$1.style, "function" === typeof f$3.setProperty ? f$3.setProperty("display", "none", "important") : f$3.display = "none") : (h$2 = q$4.stateNode, k$3 = q$4.memoizedProps.style, g$2 = void 0 !== k$3 && null !== k$3 && k$3.hasOwnProperty("display") ? k$3.display : null, h$2.style.display = rb("display", g$2));
								} catch (t$4) {
									W(a, a.return, t$4);
								}
							}
						} else if (6 === q$4.tag) {
							if (null === m$2) try {
								q$4.stateNode.nodeValue = l$4 ? "" : q$4.memoizedProps;
							} catch (t$4) {
								W(a, a.return, t$4);
							}
						} else if ((22 !== q$4.tag && 23 !== q$4.tag || null === q$4.memoizedState || q$4 === a) && null !== q$4.child) {
							q$4.child.return = q$4;
							q$4 = q$4.child;
							continue;
						}
						if (q$4 === a) break a;
						for (; null === q$4.sibling;) {
							if (null === q$4.return || q$4.return === a) break a;
							m$2 === q$4 && (m$2 = null);
							q$4 = q$4.return;
						}
						m$2 === q$4 && (m$2 = null);
						q$4.sibling.return = q$4.return;
						q$4 = q$4.sibling;
					}
				}
				break;
			case 19:
				ck(b$1, a);
				ek(a);
				d$1 & 4 && ak(a);
				break;
			case 21: break;
			default: ck(b$1, a), ek(a);
		}
	}
	function ek(a) {
		var b$1 = a.flags;
		if (b$1 & 2) {
			try {
				a: {
					for (var c$1 = a.return; null !== c$1;) {
						if (Tj(c$1)) {
							var d$1 = c$1;
							break a;
						}
						c$1 = c$1.return;
					}
					throw Error(p(160));
				}
				switch (d$1.tag) {
					case 5:
						var e$1 = d$1.stateNode;
						d$1.flags & 32 && (ob(e$1, ""), d$1.flags &= -33);
						Wj(a, Uj(a), e$1);
						break;
					case 3:
					case 4:
						var g$2 = d$1.stateNode.containerInfo;
						Vj(a, Uj(a), g$2);
						break;
					default: throw Error(p(161));
				}
			} catch (k$3) {
				W(a, a.return, k$3);
			}
			a.flags &= -3;
		}
		b$1 & 4096 && (a.flags &= -4097);
	}
	function hk(a, b$1, c$1) {
		V = a;
		ik(a, b$1, c$1);
	}
	function ik(a, b$1, c$1) {
		for (var d$1 = 0 !== (a.mode & 1); null !== V;) {
			var e$1 = V, f$3 = e$1.child;
			if (22 === e$1.tag && d$1) {
				var g$2 = null !== e$1.memoizedState || Jj;
				if (!g$2) {
					var h$2 = e$1.alternate, k$3 = null !== h$2 && null !== h$2.memoizedState || U;
					h$2 = Jj;
					var l$4 = U;
					Jj = g$2;
					if ((U = k$3) && !l$4) for (V = e$1; null !== V;) g$2 = V, k$3 = g$2.child, 22 === g$2.tag && null !== g$2.memoizedState ? jk(e$1) : null !== k$3 ? (k$3.return = g$2, V = k$3) : jk(e$1);
					for (; null !== f$3;) V = f$3, ik(f$3, b$1, c$1), f$3 = f$3.sibling;
					V = e$1;
					Jj = h$2;
					U = l$4;
				}
				kk(a, b$1, c$1);
			} else 0 !== (e$1.subtreeFlags & 8772) && null !== f$3 ? (f$3.return = e$1, V = f$3) : kk(a, b$1, c$1);
		}
	}
	function kk(a) {
		for (; null !== V;) {
			var b$1 = V;
			if (0 !== (b$1.flags & 8772)) {
				var c$1 = b$1.alternate;
				try {
					if (0 !== (b$1.flags & 8772)) switch (b$1.tag) {
						case 0:
						case 11:
						case 15:
							U || Qj(5, b$1);
							break;
						case 1:
							var d$1 = b$1.stateNode;
							if (b$1.flags & 4 && !U) if (null === c$1) d$1.componentDidMount();
							else {
								var e$1 = b$1.elementType === b$1.type ? c$1.memoizedProps : Ci(b$1.type, c$1.memoizedProps);
								d$1.componentDidUpdate(e$1, c$1.memoizedState, d$1.__reactInternalSnapshotBeforeUpdate);
							}
							var f$3 = b$1.updateQueue;
							null !== f$3 && sh(b$1, f$3, d$1);
							break;
						case 3:
							var g$2 = b$1.updateQueue;
							if (null !== g$2) {
								c$1 = null;
								if (null !== b$1.child) switch (b$1.child.tag) {
									case 5:
										c$1 = b$1.child.stateNode;
										break;
									case 1: c$1 = b$1.child.stateNode;
								}
								sh(b$1, g$2, c$1);
							}
							break;
						case 5:
							var h$2 = b$1.stateNode;
							if (null === c$1 && b$1.flags & 4) {
								c$1 = h$2;
								var k$3 = b$1.memoizedProps;
								switch (b$1.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										k$3.autoFocus && c$1.focus();
										break;
									case "img": k$3.src && (c$1.src = k$3.src);
								}
							}
							break;
						case 6: break;
						case 4: break;
						case 12: break;
						case 13:
							if (null === b$1.memoizedState) {
								var l$4 = b$1.alternate;
								if (null !== l$4) {
									var m$2 = l$4.memoizedState;
									if (null !== m$2) {
										var q$4 = m$2.dehydrated;
										null !== q$4 && bd(q$4);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25: break;
						default: throw Error(p(163));
					}
					U || b$1.flags & 512 && Rj(b$1);
				} catch (r$4) {
					W(b$1, b$1.return, r$4);
				}
			}
			if (b$1 === a) {
				V = null;
				break;
			}
			c$1 = b$1.sibling;
			if (null !== c$1) {
				c$1.return = b$1.return;
				V = c$1;
				break;
			}
			V = b$1.return;
		}
	}
	function gk(a) {
		for (; null !== V;) {
			var b$1 = V;
			if (b$1 === a) {
				V = null;
				break;
			}
			var c$1 = b$1.sibling;
			if (null !== c$1) {
				c$1.return = b$1.return;
				V = c$1;
				break;
			}
			V = b$1.return;
		}
	}
	function jk(a) {
		for (; null !== V;) {
			var b$1 = V;
			try {
				switch (b$1.tag) {
					case 0:
					case 11:
					case 15:
						var c$1 = b$1.return;
						try {
							Qj(4, b$1);
						} catch (k$3) {
							W(b$1, c$1, k$3);
						}
						break;
					case 1:
						var d$1 = b$1.stateNode;
						if ("function" === typeof d$1.componentDidMount) {
							var e$1 = b$1.return;
							try {
								d$1.componentDidMount();
							} catch (k$3) {
								W(b$1, e$1, k$3);
							}
						}
						var f$3 = b$1.return;
						try {
							Rj(b$1);
						} catch (k$3) {
							W(b$1, f$3, k$3);
						}
						break;
					case 5:
						var g$2 = b$1.return;
						try {
							Rj(b$1);
						} catch (k$3) {
							W(b$1, g$2, k$3);
						}
				}
			} catch (k$3) {
				W(b$1, b$1.return, k$3);
			}
			if (b$1 === a) {
				V = null;
				break;
			}
			var h$2 = b$1.sibling;
			if (null !== h$2) {
				h$2.return = b$1.return;
				V = h$2;
				break;
			}
			V = b$1.return;
		}
	}
	var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = !1, Pi = null, Ri = null, vk = !1, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
	function R() {
		return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
	}
	function yi(a) {
		if (0 === (a.mode & 1)) return 1;
		if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
		if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
		a = C;
		if (0 !== a) return a;
		a = window.event;
		a = void 0 === a ? 16 : jd(a.type);
		return a;
	}
	function gi(a, b$1, c$1, d$1) {
		if (50 < yk) throw yk = 0, zk = null, Error(p(185));
		Ac(a, c$1, d$1);
		if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c$1), 4 === T && Ck(a, Z)), Dk(a, d$1), 1 === c$1 && 0 === K && 0 === (b$1.mode & 1) && (Gj = B() + 500, fg && jg());
	}
	function Dk(a, b$1) {
		var c$1 = a.callbackNode;
		wc(a, b$1);
		var d$1 = uc(a, a === Q ? Z : 0);
		if (0 === d$1) null !== c$1 && bc(c$1), a.callbackNode = null, a.callbackPriority = 0;
		else if (b$1 = d$1 & -d$1, a.callbackPriority !== b$1) {
			null != c$1 && bc(c$1);
			if (1 === b$1) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
				0 === (K & 6) && jg();
			}), c$1 = null;
			else {
				switch (Dc(d$1)) {
					case 1:
						c$1 = fc;
						break;
					case 4:
						c$1 = gc;
						break;
					case 16:
						c$1 = hc;
						break;
					case 536870912:
						c$1 = jc;
						break;
					default: c$1 = hc;
				}
				c$1 = Fk(c$1, Gk.bind(null, a));
			}
			a.callbackPriority = b$1;
			a.callbackNode = c$1;
		}
	}
	function Gk(a, b$1) {
		Ak = -1;
		Bk = 0;
		if (0 !== (K & 6)) throw Error(p(327));
		var c$1 = a.callbackNode;
		if (Hk() && a.callbackNode !== c$1) return null;
		var d$1 = uc(a, a === Q ? Z : 0);
		if (0 === d$1) return null;
		if (0 !== (d$1 & 30) || 0 !== (d$1 & a.expiredLanes) || b$1) b$1 = Ik(a, d$1);
		else {
			b$1 = d$1;
			var e$1 = K;
			K |= 2;
			var f$3 = Jk();
			if (Q !== a || Z !== b$1) uk = null, Gj = B() + 500, Kk(a, b$1);
			do
				try {
					Lk();
					break;
				} catch (h$2) {
					Mk(a, h$2);
				}
			while (1);
			$g();
			mk.current = f$3;
			K = e$1;
			null !== Y ? b$1 = 0 : (Q = null, Z = 0, b$1 = T);
		}
		if (0 !== b$1) {
			2 === b$1 && (e$1 = xc(a), 0 !== e$1 && (d$1 = e$1, b$1 = Nk(a, e$1)));
			if (1 === b$1) throw c$1 = pk, Kk(a, 0), Ck(a, d$1), Dk(a, B()), c$1;
			if (6 === b$1) Ck(a, d$1);
			else {
				e$1 = a.current.alternate;
				if (0 === (d$1 & 30) && !Ok(e$1) && (b$1 = Ik(a, d$1), 2 === b$1 && (f$3 = xc(a), 0 !== f$3 && (d$1 = f$3, b$1 = Nk(a, f$3))), 1 === b$1)) throw c$1 = pk, Kk(a, 0), Ck(a, d$1), Dk(a, B()), c$1;
				a.finishedWork = e$1;
				a.finishedLanes = d$1;
				switch (b$1) {
					case 0:
					case 1: throw Error(p(345));
					case 2:
						Pk(a, tk, uk);
						break;
					case 3:
						Ck(a, d$1);
						if ((d$1 & 130023424) === d$1 && (b$1 = fk + 500 - B(), 10 < b$1)) {
							if (0 !== uc(a, 0)) break;
							e$1 = a.suspendedLanes;
							if ((e$1 & d$1) !== d$1) {
								R();
								a.pingedLanes |= a.suspendedLanes & e$1;
								break;
							}
							a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b$1);
							break;
						}
						Pk(a, tk, uk);
						break;
					case 4:
						Ck(a, d$1);
						if ((d$1 & 4194240) === d$1) break;
						b$1 = a.eventTimes;
						for (e$1 = -1; 0 < d$1;) {
							var g$2 = 31 - oc(d$1);
							f$3 = 1 << g$2;
							g$2 = b$1[g$2];
							g$2 > e$1 && (e$1 = g$2);
							d$1 &= ~f$3;
						}
						d$1 = e$1;
						d$1 = B() - d$1;
						d$1 = (120 > d$1 ? 120 : 480 > d$1 ? 480 : 1080 > d$1 ? 1080 : 1920 > d$1 ? 1920 : 3e3 > d$1 ? 3e3 : 4320 > d$1 ? 4320 : 1960 * lk(d$1 / 1960)) - d$1;
						if (10 < d$1) {
							a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d$1);
							break;
						}
						Pk(a, tk, uk);
						break;
					case 5:
						Pk(a, tk, uk);
						break;
					default: throw Error(p(329));
				}
			}
		}
		Dk(a, B());
		return a.callbackNode === c$1 ? Gk.bind(null, a) : null;
	}
	function Nk(a, b$1) {
		var c$1 = sk;
		a.current.memoizedState.isDehydrated && (Kk(a, b$1).flags |= 256);
		a = Ik(a, b$1);
		2 !== a && (b$1 = tk, tk = c$1, null !== b$1 && Fj(b$1));
		return a;
	}
	function Fj(a) {
		null === tk ? tk = a : tk.push.apply(tk, a);
	}
	function Ok(a) {
		for (var b$1 = a;;) {
			if (b$1.flags & 16384) {
				var c$1 = b$1.updateQueue;
				if (null !== c$1 && (c$1 = c$1.stores, null !== c$1)) for (var d$1 = 0; d$1 < c$1.length; d$1++) {
					var e$1 = c$1[d$1], f$3 = e$1.getSnapshot;
					e$1 = e$1.value;
					try {
						if (!He(f$3(), e$1)) return !1;
					} catch (g$2) {
						return !1;
					}
				}
			}
			c$1 = b$1.child;
			if (b$1.subtreeFlags & 16384 && null !== c$1) c$1.return = b$1, b$1 = c$1;
			else {
				if (b$1 === a) break;
				for (; null === b$1.sibling;) {
					if (null === b$1.return || b$1.return === a) return !0;
					b$1 = b$1.return;
				}
				b$1.sibling.return = b$1.return;
				b$1 = b$1.sibling;
			}
		}
		return !0;
	}
	function Ck(a, b$1) {
		b$1 &= ~rk;
		b$1 &= ~qk;
		a.suspendedLanes |= b$1;
		a.pingedLanes &= ~b$1;
		for (a = a.expirationTimes; 0 < b$1;) {
			var c$1 = 31 - oc(b$1), d$1 = 1 << c$1;
			a[c$1] = -1;
			b$1 &= ~d$1;
		}
	}
	function Ek(a) {
		if (0 !== (K & 6)) throw Error(p(327));
		Hk();
		var b$1 = uc(a, 0);
		if (0 === (b$1 & 1)) return Dk(a, B()), null;
		var c$1 = Ik(a, b$1);
		if (0 !== a.tag && 2 === c$1) {
			var d$1 = xc(a);
			0 !== d$1 && (b$1 = d$1, c$1 = Nk(a, d$1));
		}
		if (1 === c$1) throw c$1 = pk, Kk(a, 0), Ck(a, b$1), Dk(a, B()), c$1;
		if (6 === c$1) throw Error(p(345));
		a.finishedWork = a.current.alternate;
		a.finishedLanes = b$1;
		Pk(a, tk, uk);
		Dk(a, B());
		return null;
	}
	function Qk(a, b$1) {
		var c$1 = K;
		K |= 1;
		try {
			return a(b$1);
		} finally {
			K = c$1, 0 === K && (Gj = B() + 500, fg && jg());
		}
	}
	function Rk(a) {
		null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
		var b$1 = K;
		K |= 1;
		var c$1 = ok.transition, d$1 = C;
		try {
			if (ok.transition = null, C = 1, a) return a();
		} finally {
			C = d$1, ok.transition = c$1, K = b$1, 0 === (K & 6) && jg();
		}
	}
	function Hj() {
		fj = ej.current;
		E(ej);
	}
	function Kk(a, b$1) {
		a.finishedWork = null;
		a.finishedLanes = 0;
		var c$1 = a.timeoutHandle;
		-1 !== c$1 && (a.timeoutHandle = -1, Gf(c$1));
		if (null !== Y) for (c$1 = Y.return; null !== c$1;) {
			var d$1 = c$1;
			wg(d$1);
			switch (d$1.tag) {
				case 1:
					d$1 = d$1.type.childContextTypes;
					null !== d$1 && void 0 !== d$1 && $f();
					break;
				case 3:
					zh();
					E(Wf);
					E(H);
					Eh();
					break;
				case 5:
					Bh(d$1);
					break;
				case 4:
					zh();
					break;
				case 13:
					E(L);
					break;
				case 19:
					E(L);
					break;
				case 10:
					ah(d$1.type._context);
					break;
				case 22:
				case 23: Hj();
			}
			c$1 = c$1.return;
		}
		Q = a;
		Y = a = Pg(a.current, null);
		Z = fj = b$1;
		T = 0;
		pk = null;
		rk = qk = rh = 0;
		tk = sk = null;
		if (null !== fh) {
			for (b$1 = 0; b$1 < fh.length; b$1++) if (c$1 = fh[b$1], d$1 = c$1.interleaved, null !== d$1) {
				c$1.interleaved = null;
				var e$1 = d$1.next, f$3 = c$1.pending;
				if (null !== f$3) {
					var g$2 = f$3.next;
					f$3.next = e$1;
					d$1.next = g$2;
				}
				c$1.pending = d$1;
			}
			fh = null;
		}
		return a;
	}
	function Mk(a, b$1) {
		do {
			var c$1 = Y;
			try {
				$g();
				Fh.current = Rh;
				if (Ih) {
					for (var d$1 = M.memoizedState; null !== d$1;) {
						var e$1 = d$1.queue;
						null !== e$1 && (e$1.pending = null);
						d$1 = d$1.next;
					}
					Ih = !1;
				}
				Hh = 0;
				O = N = M = null;
				Jh = !1;
				Kh = 0;
				nk.current = null;
				if (null === c$1 || null === c$1.return) {
					T = 1;
					pk = b$1;
					Y = null;
					break;
				}
				a: {
					var f$3 = a, g$2 = c$1.return, h$2 = c$1, k$3 = b$1;
					b$1 = Z;
					h$2.flags |= 32768;
					if (null !== k$3 && "object" === typeof k$3 && "function" === typeof k$3.then) {
						var l$4 = k$3, m$2 = h$2, q$4 = m$2.tag;
						if (0 === (m$2.mode & 1) && (0 === q$4 || 11 === q$4 || 15 === q$4)) {
							var r$4 = m$2.alternate;
							r$4 ? (m$2.updateQueue = r$4.updateQueue, m$2.memoizedState = r$4.memoizedState, m$2.lanes = r$4.lanes) : (m$2.updateQueue = null, m$2.memoizedState = null);
						}
						var y$3 = Ui(g$2);
						if (null !== y$3) {
							y$3.flags &= -257;
							Vi(y$3, g$2, h$2, f$3, b$1);
							y$3.mode & 1 && Si(f$3, l$4, b$1);
							b$1 = y$3;
							k$3 = l$4;
							var n$3 = b$1.updateQueue;
							if (null === n$3) {
								var t$4 = /* @__PURE__ */ new Set();
								t$4.add(k$3);
								b$1.updateQueue = t$4;
							} else n$3.add(k$3);
							break a;
						} else {
							if (0 === (b$1 & 1)) {
								Si(f$3, l$4, b$1);
								tj();
								break a;
							}
							k$3 = Error(p(426));
						}
					} else if (I && h$2.mode & 1) {
						var J$2 = Ui(g$2);
						if (null !== J$2) {
							0 === (J$2.flags & 65536) && (J$2.flags |= 256);
							Vi(J$2, g$2, h$2, f$3, b$1);
							Jg(Ji(k$3, h$2));
							break a;
						}
					}
					f$3 = k$3 = Ji(k$3, h$2);
					4 !== T && (T = 2);
					null === sk ? sk = [f$3] : sk.push(f$3);
					f$3 = g$2;
					do {
						switch (f$3.tag) {
							case 3:
								f$3.flags |= 65536;
								b$1 &= -b$1;
								f$3.lanes |= b$1;
								var x$2 = Ni(f$3, k$3, b$1);
								ph(f$3, x$2);
								break a;
							case 1:
								h$2 = k$3;
								var w$2 = f$3.type, u$2 = f$3.stateNode;
								if (0 === (f$3.flags & 128) && ("function" === typeof w$2.getDerivedStateFromError || null !== u$2 && "function" === typeof u$2.componentDidCatch && (null === Ri || !Ri.has(u$2)))) {
									f$3.flags |= 65536;
									b$1 &= -b$1;
									f$3.lanes |= b$1;
									var F$2 = Qi(f$3, h$2, b$1);
									ph(f$3, F$2);
									break a;
								}
						}
						f$3 = f$3.return;
					} while (null !== f$3);
				}
				Sk(c$1);
			} catch (na) {
				b$1 = na;
				Y === c$1 && null !== c$1 && (Y = c$1 = c$1.return);
				continue;
			}
			break;
		} while (1);
	}
	function Jk() {
		var a = mk.current;
		mk.current = Rh;
		return null === a ? Rh : a;
	}
	function tj() {
		if (0 === T || 3 === T || 2 === T) T = 4;
		null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
	}
	function Ik(a, b$1) {
		var c$1 = K;
		K |= 2;
		var d$1 = Jk();
		if (Q !== a || Z !== b$1) uk = null, Kk(a, b$1);
		do
			try {
				Tk();
				break;
			} catch (e$1) {
				Mk(a, e$1);
			}
		while (1);
		$g();
		K = c$1;
		mk.current = d$1;
		if (null !== Y) throw Error(p(261));
		Q = null;
		Z = 0;
		return T;
	}
	function Tk() {
		for (; null !== Y;) Uk(Y);
	}
	function Lk() {
		for (; null !== Y && !cc();) Uk(Y);
	}
	function Uk(a) {
		var b$1 = Vk(a.alternate, a, fj);
		a.memoizedProps = a.pendingProps;
		null === b$1 ? Sk(a) : Y = b$1;
		nk.current = null;
	}
	function Sk(a) {
		var b$1 = a;
		do {
			var c$1 = b$1.alternate;
			a = b$1.return;
			if (0 === (b$1.flags & 32768)) {
				if (c$1 = Ej(c$1, b$1, fj), null !== c$1) {
					Y = c$1;
					return;
				}
			} else {
				c$1 = Ij(c$1, b$1);
				if (null !== c$1) {
					c$1.flags &= 32767;
					Y = c$1;
					return;
				}
				if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
				else {
					T = 6;
					Y = null;
					return;
				}
			}
			b$1 = b$1.sibling;
			if (null !== b$1) {
				Y = b$1;
				return;
			}
			Y = b$1 = a;
		} while (null !== b$1);
		0 === T && (T = 5);
	}
	function Pk(a, b$1, c$1) {
		var d$1 = C, e$1 = ok.transition;
		try {
			ok.transition = null, C = 1, Wk(a, b$1, c$1, d$1);
		} finally {
			ok.transition = e$1, C = d$1;
		}
		return null;
	}
	function Wk(a, b$1, c$1, d$1) {
		do
			Hk();
		while (null !== wk);
		if (0 !== (K & 6)) throw Error(p(327));
		c$1 = a.finishedWork;
		var e$1 = a.finishedLanes;
		if (null === c$1) return null;
		a.finishedWork = null;
		a.finishedLanes = 0;
		if (c$1 === a.current) throw Error(p(177));
		a.callbackNode = null;
		a.callbackPriority = 0;
		var f$3 = c$1.lanes | c$1.childLanes;
		Bc(a, f$3);
		a === Q && (Y = Q = null, Z = 0);
		0 === (c$1.subtreeFlags & 2064) && 0 === (c$1.flags & 2064) || vk || (vk = !0, Fk(hc, function() {
			Hk();
			return null;
		}));
		f$3 = 0 !== (c$1.flags & 15990);
		if (0 !== (c$1.subtreeFlags & 15990) || f$3) {
			f$3 = ok.transition;
			ok.transition = null;
			var g$2 = C;
			C = 1;
			var h$2 = K;
			K |= 4;
			nk.current = null;
			Oj(a, c$1);
			dk(c$1, a);
			Oe(Df);
			dd = !!Cf;
			Df = Cf = null;
			a.current = c$1;
			hk(c$1, a, e$1);
			dc();
			K = h$2;
			C = g$2;
			ok.transition = f$3;
		} else a.current = c$1;
		vk && (vk = !1, wk = a, xk = e$1);
		f$3 = a.pendingLanes;
		0 === f$3 && (Ri = null);
		mc(c$1.stateNode, d$1);
		Dk(a, B());
		if (null !== b$1) for (d$1 = a.onRecoverableError, c$1 = 0; c$1 < b$1.length; c$1++) e$1 = b$1[c$1], d$1(e$1.value, {
			componentStack: e$1.stack,
			digest: e$1.digest
		});
		if (Oi) throw Oi = !1, a = Pi, Pi = null, a;
		0 !== (xk & 1) && 0 !== a.tag && Hk();
		f$3 = a.pendingLanes;
		0 !== (f$3 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
		jg();
		return null;
	}
	function Hk() {
		if (null !== wk) {
			var a = Dc(xk), b$1 = ok.transition, c$1 = C;
			try {
				ok.transition = null;
				C = 16 > a ? 16 : a;
				if (null === wk) var d$1 = !1;
				else {
					a = wk;
					wk = null;
					xk = 0;
					if (0 !== (K & 6)) throw Error(p(331));
					var e$1 = K;
					K |= 4;
					for (V = a.current; null !== V;) {
						var f$3 = V, g$2 = f$3.child;
						if (0 !== (V.flags & 16)) {
							var h$2 = f$3.deletions;
							if (null !== h$2) {
								for (var k$3 = 0; k$3 < h$2.length; k$3++) {
									var l$4 = h$2[k$3];
									for (V = l$4; null !== V;) {
										var m$2 = V;
										switch (m$2.tag) {
											case 0:
											case 11:
											case 15: Pj(8, m$2, f$3);
										}
										var q$4 = m$2.child;
										if (null !== q$4) q$4.return = m$2, V = q$4;
										else for (; null !== V;) {
											m$2 = V;
											var r$4 = m$2.sibling, y$3 = m$2.return;
											Sj(m$2);
											if (m$2 === l$4) {
												V = null;
												break;
											}
											if (null !== r$4) {
												r$4.return = y$3;
												V = r$4;
												break;
											}
											V = y$3;
										}
									}
								}
								var n$3 = f$3.alternate;
								if (null !== n$3) {
									var t$4 = n$3.child;
									if (null !== t$4) {
										n$3.child = null;
										do {
											var J$2 = t$4.sibling;
											t$4.sibling = null;
											t$4 = J$2;
										} while (null !== t$4);
									}
								}
								V = f$3;
							}
						}
						if (0 !== (f$3.subtreeFlags & 2064) && null !== g$2) g$2.return = f$3, V = g$2;
						else b: for (; null !== V;) {
							f$3 = V;
							if (0 !== (f$3.flags & 2048)) switch (f$3.tag) {
								case 0:
								case 11:
								case 15: Pj(9, f$3, f$3.return);
							}
							var x$2 = f$3.sibling;
							if (null !== x$2) {
								x$2.return = f$3.return;
								V = x$2;
								break b;
							}
							V = f$3.return;
						}
					}
					var w$2 = a.current;
					for (V = w$2; null !== V;) {
						g$2 = V;
						var u$2 = g$2.child;
						if (0 !== (g$2.subtreeFlags & 2064) && null !== u$2) u$2.return = g$2, V = u$2;
						else b: for (g$2 = w$2; null !== V;) {
							h$2 = V;
							if (0 !== (h$2.flags & 2048)) try {
								switch (h$2.tag) {
									case 0:
									case 11:
									case 15: Qj(9, h$2);
								}
							} catch (na) {
								W(h$2, h$2.return, na);
							}
							if (h$2 === g$2) {
								V = null;
								break b;
							}
							var F$2 = h$2.sibling;
							if (null !== F$2) {
								F$2.return = h$2.return;
								V = F$2;
								break b;
							}
							V = h$2.return;
						}
					}
					K = e$1;
					jg();
					if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
						lc.onPostCommitFiberRoot(kc, a);
					} catch (na) {}
					d$1 = !0;
				}
				return d$1;
			} finally {
				C = c$1, ok.transition = b$1;
			}
		}
		return !1;
	}
	function Xk(a, b$1, c$1) {
		b$1 = Ji(c$1, b$1);
		b$1 = Ni(a, b$1, 1);
		a = nh(a, b$1, 1);
		b$1 = R();
		null !== a && (Ac(a, 1, b$1), Dk(a, b$1));
	}
	function W(a, b$1, c$1) {
		if (3 === a.tag) Xk(a, a, c$1);
		else for (; null !== b$1;) {
			if (3 === b$1.tag) {
				Xk(b$1, a, c$1);
				break;
			} else if (1 === b$1.tag) {
				var d$1 = b$1.stateNode;
				if ("function" === typeof b$1.type.getDerivedStateFromError || "function" === typeof d$1.componentDidCatch && (null === Ri || !Ri.has(d$1))) {
					a = Ji(c$1, a);
					a = Qi(b$1, a, 1);
					b$1 = nh(b$1, a, 1);
					a = R();
					null !== b$1 && (Ac(b$1, 1, a), Dk(b$1, a));
					break;
				}
			}
			b$1 = b$1.return;
		}
	}
	function Ti(a, b$1, c$1) {
		var d$1 = a.pingCache;
		null !== d$1 && d$1.delete(b$1);
		b$1 = R();
		a.pingedLanes |= a.suspendedLanes & c$1;
		Q === a && (Z & c$1) === c$1 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c$1);
		Dk(a, b$1);
	}
	function Yk(a, b$1) {
		0 === b$1 && (0 === (a.mode & 1) ? b$1 = 1 : (b$1 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
		var c$1 = R();
		a = ih(a, b$1);
		null !== a && (Ac(a, b$1, c$1), Dk(a, c$1));
	}
	function uj(a) {
		var b$1 = a.memoizedState, c$1 = 0;
		null !== b$1 && (c$1 = b$1.retryLane);
		Yk(a, c$1);
	}
	function bk(a, b$1) {
		var c$1 = 0;
		switch (a.tag) {
			case 13:
				var d$1 = a.stateNode;
				var e$1 = a.memoizedState;
				null !== e$1 && (c$1 = e$1.retryLane);
				break;
			case 19:
				d$1 = a.stateNode;
				break;
			default: throw Error(p(314));
		}
		null !== d$1 && d$1.delete(b$1);
		Yk(a, c$1);
	}
	var Vk = function(a, b$1, c$1) {
		if (null !== a) if (a.memoizedProps !== b$1.pendingProps || Wf.current) dh = !0;
		else {
			if (0 === (a.lanes & c$1) && 0 === (b$1.flags & 128)) return dh = !1, yj(a, b$1, c$1);
			dh = 0 !== (a.flags & 131072) ? !0 : !1;
		}
		else dh = !1, I && 0 !== (b$1.flags & 1048576) && ug(b$1, ng, b$1.index);
		b$1.lanes = 0;
		switch (b$1.tag) {
			case 2:
				var d$1 = b$1.type;
				ij(a, b$1);
				a = b$1.pendingProps;
				var e$1 = Yf(b$1, H.current);
				ch(b$1, c$1);
				e$1 = Nh(null, b$1, d$1, a, e$1, c$1);
				var f$3 = Sh();
				b$1.flags |= 1;
				"object" === typeof e$1 && null !== e$1 && "function" === typeof e$1.render && void 0 === e$1.$$typeof ? (b$1.tag = 1, b$1.memoizedState = null, b$1.updateQueue = null, Zf(d$1) ? (f$3 = !0, cg(b$1)) : f$3 = !1, b$1.memoizedState = null !== e$1.state && void 0 !== e$1.state ? e$1.state : null, kh(b$1), e$1.updater = Ei, b$1.stateNode = e$1, e$1._reactInternals = b$1, Ii(b$1, d$1, a, c$1), b$1 = jj(null, b$1, d$1, !0, f$3, c$1)) : (b$1.tag = 0, I && f$3 && vg(b$1), Xi(null, b$1, e$1, c$1), b$1 = b$1.child);
				return b$1;
			case 16:
				d$1 = b$1.elementType;
				a: {
					ij(a, b$1);
					a = b$1.pendingProps;
					e$1 = d$1._init;
					d$1 = e$1(d$1._payload);
					b$1.type = d$1;
					e$1 = b$1.tag = Zk(d$1);
					a = Ci(d$1, a);
					switch (e$1) {
						case 0:
							b$1 = cj(null, b$1, d$1, a, c$1);
							break a;
						case 1:
							b$1 = hj(null, b$1, d$1, a, c$1);
							break a;
						case 11:
							b$1 = Yi(null, b$1, d$1, a, c$1);
							break a;
						case 14:
							b$1 = $i(null, b$1, d$1, Ci(d$1.type, a), c$1);
							break a;
					}
					throw Error(p(306, d$1, ""));
				}
				return b$1;
			case 0: return d$1 = b$1.type, e$1 = b$1.pendingProps, e$1 = b$1.elementType === d$1 ? e$1 : Ci(d$1, e$1), cj(a, b$1, d$1, e$1, c$1);
			case 1: return d$1 = b$1.type, e$1 = b$1.pendingProps, e$1 = b$1.elementType === d$1 ? e$1 : Ci(d$1, e$1), hj(a, b$1, d$1, e$1, c$1);
			case 3:
				a: {
					kj(b$1);
					if (null === a) throw Error(p(387));
					d$1 = b$1.pendingProps;
					f$3 = b$1.memoizedState;
					e$1 = f$3.element;
					lh(a, b$1);
					qh(b$1, d$1, null, c$1);
					var g$2 = b$1.memoizedState;
					d$1 = g$2.element;
					if (f$3.isDehydrated) if (f$3 = {
						element: d$1,
						isDehydrated: !1,
						cache: g$2.cache,
						pendingSuspenseBoundaries: g$2.pendingSuspenseBoundaries,
						transitions: g$2.transitions
					}, b$1.updateQueue.baseState = f$3, b$1.memoizedState = f$3, b$1.flags & 256) {
						e$1 = Ji(Error(p(423)), b$1);
						b$1 = lj(a, b$1, d$1, c$1, e$1);
						break a;
					} else if (d$1 !== e$1) {
						e$1 = Ji(Error(p(424)), b$1);
						b$1 = lj(a, b$1, d$1, c$1, e$1);
						break a;
					} else for (yg = Lf(b$1.stateNode.containerInfo.firstChild), xg = b$1, I = !0, zg = null, c$1 = Vg(b$1, null, d$1, c$1), b$1.child = c$1; c$1;) c$1.flags = c$1.flags & -3 | 4096, c$1 = c$1.sibling;
					else {
						Ig();
						if (d$1 === e$1) {
							b$1 = Zi(a, b$1, c$1);
							break a;
						}
						Xi(a, b$1, d$1, c$1);
					}
					b$1 = b$1.child;
				}
				return b$1;
			case 5: return Ah(b$1), null === a && Eg(b$1), d$1 = b$1.type, e$1 = b$1.pendingProps, f$3 = null !== a ? a.memoizedProps : null, g$2 = e$1.children, Ef(d$1, e$1) ? g$2 = null : null !== f$3 && Ef(d$1, f$3) && (b$1.flags |= 32), gj(a, b$1), Xi(a, b$1, g$2, c$1), b$1.child;
			case 6: return null === a && Eg(b$1), null;
			case 13: return oj(a, b$1, c$1);
			case 4: return yh(b$1, b$1.stateNode.containerInfo), d$1 = b$1.pendingProps, null === a ? b$1.child = Ug(b$1, null, d$1, c$1) : Xi(a, b$1, d$1, c$1), b$1.child;
			case 11: return d$1 = b$1.type, e$1 = b$1.pendingProps, e$1 = b$1.elementType === d$1 ? e$1 : Ci(d$1, e$1), Yi(a, b$1, d$1, e$1, c$1);
			case 7: return Xi(a, b$1, b$1.pendingProps, c$1), b$1.child;
			case 8: return Xi(a, b$1, b$1.pendingProps.children, c$1), b$1.child;
			case 12: return Xi(a, b$1, b$1.pendingProps.children, c$1), b$1.child;
			case 10:
				a: {
					d$1 = b$1.type._context;
					e$1 = b$1.pendingProps;
					f$3 = b$1.memoizedProps;
					g$2 = e$1.value;
					G(Wg, d$1._currentValue);
					d$1._currentValue = g$2;
					if (null !== f$3) if (He(f$3.value, g$2)) {
						if (f$3.children === e$1.children && !Wf.current) {
							b$1 = Zi(a, b$1, c$1);
							break a;
						}
					} else for (f$3 = b$1.child, null !== f$3 && (f$3.return = b$1); null !== f$3;) {
						var h$2 = f$3.dependencies;
						if (null !== h$2) {
							g$2 = f$3.child;
							for (var k$3 = h$2.firstContext; null !== k$3;) {
								if (k$3.context === d$1) {
									if (1 === f$3.tag) {
										k$3 = mh(-1, c$1 & -c$1);
										k$3.tag = 2;
										var l$4 = f$3.updateQueue;
										if (null !== l$4) {
											l$4 = l$4.shared;
											var m$2 = l$4.pending;
											null === m$2 ? k$3.next = k$3 : (k$3.next = m$2.next, m$2.next = k$3);
											l$4.pending = k$3;
										}
									}
									f$3.lanes |= c$1;
									k$3 = f$3.alternate;
									null !== k$3 && (k$3.lanes |= c$1);
									bh(f$3.return, c$1, b$1);
									h$2.lanes |= c$1;
									break;
								}
								k$3 = k$3.next;
							}
						} else if (10 === f$3.tag) g$2 = f$3.type === b$1.type ? null : f$3.child;
						else if (18 === f$3.tag) {
							g$2 = f$3.return;
							if (null === g$2) throw Error(p(341));
							g$2.lanes |= c$1;
							h$2 = g$2.alternate;
							null !== h$2 && (h$2.lanes |= c$1);
							bh(g$2, c$1, b$1);
							g$2 = f$3.sibling;
						} else g$2 = f$3.child;
						if (null !== g$2) g$2.return = f$3;
						else for (g$2 = f$3; null !== g$2;) {
							if (g$2 === b$1) {
								g$2 = null;
								break;
							}
							f$3 = g$2.sibling;
							if (null !== f$3) {
								f$3.return = g$2.return;
								g$2 = f$3;
								break;
							}
							g$2 = g$2.return;
						}
						f$3 = g$2;
					}
					Xi(a, b$1, e$1.children, c$1);
					b$1 = b$1.child;
				}
				return b$1;
			case 9: return e$1 = b$1.type, d$1 = b$1.pendingProps.children, ch(b$1, c$1), e$1 = eh(e$1), d$1 = d$1(e$1), b$1.flags |= 1, Xi(a, b$1, d$1, c$1), b$1.child;
			case 14: return d$1 = b$1.type, e$1 = Ci(d$1, b$1.pendingProps), e$1 = Ci(d$1.type, e$1), $i(a, b$1, d$1, e$1, c$1);
			case 15: return bj(a, b$1, b$1.type, b$1.pendingProps, c$1);
			case 17: return d$1 = b$1.type, e$1 = b$1.pendingProps, e$1 = b$1.elementType === d$1 ? e$1 : Ci(d$1, e$1), ij(a, b$1), b$1.tag = 1, Zf(d$1) ? (a = !0, cg(b$1)) : a = !1, ch(b$1, c$1), Gi(b$1, d$1, e$1), Ii(b$1, d$1, e$1, c$1), jj(null, b$1, d$1, !0, a, c$1);
			case 19: return xj(a, b$1, c$1);
			case 22: return dj(a, b$1, c$1);
		}
		throw Error(p(156, b$1.tag));
	};
	function Fk(a, b$1) {
		return ac(a, b$1);
	}
	function $k(a, b$1, c$1, d$1) {
		this.tag = a;
		this.key = c$1;
		this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		this.index = 0;
		this.ref = null;
		this.pendingProps = b$1;
		this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		this.mode = d$1;
		this.subtreeFlags = this.flags = 0;
		this.deletions = null;
		this.childLanes = this.lanes = 0;
		this.alternate = null;
	}
	function Bg(a, b$1, c$1, d$1) {
		return new $k(a, b$1, c$1, d$1);
	}
	function aj(a) {
		a = a.prototype;
		return !(!a || !a.isReactComponent);
	}
	function Zk(a) {
		if ("function" === typeof a) return aj(a) ? 1 : 0;
		if (void 0 !== a && null !== a) {
			a = a.$$typeof;
			if (a === Da) return 11;
			if (a === Ga) return 14;
		}
		return 2;
	}
	function Pg(a, b$1) {
		var c$1 = a.alternate;
		null === c$1 ? (c$1 = Bg(a.tag, b$1, a.key, a.mode), c$1.elementType = a.elementType, c$1.type = a.type, c$1.stateNode = a.stateNode, c$1.alternate = a, a.alternate = c$1) : (c$1.pendingProps = b$1, c$1.type = a.type, c$1.flags = 0, c$1.subtreeFlags = 0, c$1.deletions = null);
		c$1.flags = a.flags & 14680064;
		c$1.childLanes = a.childLanes;
		c$1.lanes = a.lanes;
		c$1.child = a.child;
		c$1.memoizedProps = a.memoizedProps;
		c$1.memoizedState = a.memoizedState;
		c$1.updateQueue = a.updateQueue;
		b$1 = a.dependencies;
		c$1.dependencies = null === b$1 ? null : {
			lanes: b$1.lanes,
			firstContext: b$1.firstContext
		};
		c$1.sibling = a.sibling;
		c$1.index = a.index;
		c$1.ref = a.ref;
		return c$1;
	}
	function Rg(a, b$1, c$1, d$1, e$1, f$3) {
		var g$2 = 2;
		d$1 = a;
		if ("function" === typeof a) aj(a) && (g$2 = 1);
		else if ("string" === typeof a) g$2 = 5;
		else a: switch (a) {
			case ya: return Tg(c$1.children, e$1, f$3, b$1);
			case za:
				g$2 = 8;
				e$1 |= 8;
				break;
			case Aa: return a = Bg(12, c$1, b$1, e$1 | 2), a.elementType = Aa, a.lanes = f$3, a;
			case Ea: return a = Bg(13, c$1, b$1, e$1), a.elementType = Ea, a.lanes = f$3, a;
			case Fa: return a = Bg(19, c$1, b$1, e$1), a.elementType = Fa, a.lanes = f$3, a;
			case Ia: return pj(c$1, e$1, f$3, b$1);
			default:
				if ("object" === typeof a && null !== a) switch (a.$$typeof) {
					case Ba:
						g$2 = 10;
						break a;
					case Ca:
						g$2 = 9;
						break a;
					case Da:
						g$2 = 11;
						break a;
					case Ga:
						g$2 = 14;
						break a;
					case Ha:
						g$2 = 16;
						d$1 = null;
						break a;
				}
				throw Error(p(130, null == a ? a : typeof a, ""));
		}
		b$1 = Bg(g$2, c$1, b$1, e$1);
		b$1.elementType = a;
		b$1.type = d$1;
		b$1.lanes = f$3;
		return b$1;
	}
	function Tg(a, b$1, c$1, d$1) {
		a = Bg(7, a, d$1, b$1);
		a.lanes = c$1;
		return a;
	}
	function pj(a, b$1, c$1, d$1) {
		a = Bg(22, a, d$1, b$1);
		a.elementType = Ia;
		a.lanes = c$1;
		a.stateNode = { isHidden: !1 };
		return a;
	}
	function Qg(a, b$1, c$1) {
		a = Bg(6, a, null, b$1);
		a.lanes = c$1;
		return a;
	}
	function Sg(a, b$1, c$1) {
		b$1 = Bg(4, null !== a.children ? a.children : [], a.key, b$1);
		b$1.lanes = c$1;
		b$1.stateNode = {
			containerInfo: a.containerInfo,
			pendingChildren: null,
			implementation: a.implementation
		};
		return b$1;
	}
	function al(a, b$1, c$1, d$1, e$1) {
		this.tag = b$1;
		this.containerInfo = a;
		this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
		this.timeoutHandle = -1;
		this.callbackNode = this.pendingContext = this.context = null;
		this.callbackPriority = 0;
		this.eventTimes = zc(0);
		this.expirationTimes = zc(-1);
		this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		this.entanglements = zc(0);
		this.identifierPrefix = d$1;
		this.onRecoverableError = e$1;
		this.mutableSourceEagerHydrationData = null;
	}
	function bl(a, b$1, c$1, d$1, e$1, f$3, g$2, h$2, k$3) {
		a = new al(a, b$1, c$1, h$2, k$3);
		1 === b$1 ? (b$1 = 1, !0 === f$3 && (b$1 |= 8)) : b$1 = 0;
		f$3 = Bg(3, null, null, b$1);
		a.current = f$3;
		f$3.stateNode = a;
		f$3.memoizedState = {
			element: d$1,
			isDehydrated: c$1,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		};
		kh(f$3);
		return a;
	}
	function cl(a, b$1, c$1) {
		var d$1 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: wa,
			key: null == d$1 ? null : "" + d$1,
			children: a,
			containerInfo: b$1,
			implementation: c$1
		};
	}
	function dl(a) {
		if (!a) return Vf;
		a = a._reactInternals;
		a: {
			if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
			var b$1 = a;
			do {
				switch (b$1.tag) {
					case 3:
						b$1 = b$1.stateNode.context;
						break a;
					case 1: if (Zf(b$1.type)) {
						b$1 = b$1.stateNode.__reactInternalMemoizedMergedChildContext;
						break a;
					}
				}
				b$1 = b$1.return;
			} while (null !== b$1);
			throw Error(p(171));
		}
		if (1 === a.tag) {
			var c$1 = a.type;
			if (Zf(c$1)) return bg(a, c$1, b$1);
		}
		return b$1;
	}
	function el(a, b$1, c$1, d$1, e$1, f$3, g$2, h$2, k$3) {
		a = bl(c$1, d$1, !0, a, e$1, f$3, g$2, h$2, k$3);
		a.context = dl(null);
		c$1 = a.current;
		d$1 = R();
		e$1 = yi(c$1);
		f$3 = mh(d$1, e$1);
		f$3.callback = void 0 !== b$1 && null !== b$1 ? b$1 : null;
		nh(c$1, f$3, e$1);
		a.current.lanes = e$1;
		Ac(a, e$1, d$1);
		Dk(a, d$1);
		return a;
	}
	function fl(a, b$1, c$1, d$1) {
		var e$1 = b$1.current, f$3 = R(), g$2 = yi(e$1);
		c$1 = dl(c$1);
		null === b$1.context ? b$1.context = c$1 : b$1.pendingContext = c$1;
		b$1 = mh(f$3, g$2);
		b$1.payload = { element: a };
		d$1 = void 0 === d$1 ? null : d$1;
		null !== d$1 && (b$1.callback = d$1);
		a = nh(e$1, b$1, g$2);
		null !== a && (gi(a, e$1, g$2, f$3), oh(a, e$1, g$2));
		return g$2;
	}
	function gl(a) {
		a = a.current;
		if (!a.child) return null;
		switch (a.child.tag) {
			case 5: return a.child.stateNode;
			default: return a.child.stateNode;
		}
	}
	function hl(a, b$1) {
		a = a.memoizedState;
		if (null !== a && null !== a.dehydrated) {
			var c$1 = a.retryLane;
			a.retryLane = 0 !== c$1 && c$1 < b$1 ? c$1 : b$1;
		}
	}
	function il(a, b$1) {
		hl(a, b$1);
		(a = a.alternate) && hl(a, b$1);
	}
	function jl() {
		return null;
	}
	var kl = "function" === typeof reportError ? reportError : function(a) {
		console.error(a);
	};
	function ll(a) {
		this._internalRoot = a;
	}
	ml.prototype.render = ll.prototype.render = function(a) {
		var b$1 = this._internalRoot;
		if (null === b$1) throw Error(p(409));
		fl(a, b$1, null, null);
	};
	ml.prototype.unmount = ll.prototype.unmount = function() {
		var a = this._internalRoot;
		if (null !== a) {
			this._internalRoot = null;
			var b$1 = a.containerInfo;
			Rk(function() {
				fl(null, a, null, null);
			});
			b$1[uf] = null;
		}
	};
	function ml(a) {
		this._internalRoot = a;
	}
	ml.prototype.unstable_scheduleHydration = function(a) {
		if (a) {
			var b$1 = Hc();
			a = {
				blockedOn: null,
				target: a,
				priority: b$1
			};
			for (var c$1 = 0; c$1 < Qc.length && 0 !== b$1 && b$1 < Qc[c$1].priority; c$1++);
			Qc.splice(c$1, 0, a);
			0 === c$1 && Vc(a);
		}
	};
	function nl(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
	}
	function ol(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function pl() {}
	function ql(a, b$1, c$1, d$1, e$1) {
		if (e$1) {
			if ("function" === typeof d$1) {
				var f$3 = d$1;
				d$1 = function() {
					var a$1 = gl(g$2);
					f$3.call(a$1);
				};
			}
			var g$2 = el(b$1, d$1, a, 0, null, !1, !1, "", pl);
			a._reactRootContainer = g$2;
			a[uf] = g$2.current;
			sf(8 === a.nodeType ? a.parentNode : a);
			Rk();
			return g$2;
		}
		for (; e$1 = a.lastChild;) a.removeChild(e$1);
		if ("function" === typeof d$1) {
			var h$2 = d$1;
			d$1 = function() {
				var a$1 = gl(k$3);
				h$2.call(a$1);
			};
		}
		var k$3 = bl(a, 0, !1, null, null, !1, !1, "", pl);
		a._reactRootContainer = k$3;
		a[uf] = k$3.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		Rk(function() {
			fl(b$1, k$3, c$1, d$1);
		});
		return k$3;
	}
	function rl(a, b$1, c$1, d$1, e$1) {
		var f$3 = c$1._reactRootContainer;
		if (f$3) {
			var g$2 = f$3;
			if ("function" === typeof e$1) {
				var h$2 = e$1;
				e$1 = function() {
					var a$1 = gl(g$2);
					h$2.call(a$1);
				};
			}
			fl(b$1, g$2, a, e$1);
		} else g$2 = ql(c$1, b$1, a, e$1, d$1);
		return gl(g$2);
	}
	Ec = function(a) {
		switch (a.tag) {
			case 3:
				var b$1 = a.stateNode;
				if (b$1.current.memoizedState.isDehydrated) {
					var c$1 = tc(b$1.pendingLanes);
					0 !== c$1 && (Cc(b$1, c$1 | 1), Dk(b$1, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
				}
				break;
			case 13: Rk(function() {
				var b$2 = ih(a, 1);
				if (null !== b$2) gi(b$2, a, 1, R());
			}), il(a, 1);
		}
	};
	Fc = function(a) {
		if (13 === a.tag) {
			var b$1 = ih(a, 134217728);
			if (null !== b$1) gi(b$1, a, 134217728, R());
			il(a, 134217728);
		}
	};
	Gc = function(a) {
		if (13 === a.tag) {
			var b$1 = yi(a), c$1 = ih(a, b$1);
			if (null !== c$1) gi(c$1, a, b$1, R());
			il(a, b$1);
		}
	};
	Hc = function() {
		return C;
	};
	Ic = function(a, b$1) {
		var c$1 = C;
		try {
			return C = a, b$1();
		} finally {
			C = c$1;
		}
	};
	yb = function(a, b$1, c$1) {
		switch (b$1) {
			case "input":
				bb(a, c$1);
				b$1 = c$1.name;
				if ("radio" === c$1.type && null != b$1) {
					for (c$1 = a; c$1.parentNode;) c$1 = c$1.parentNode;
					c$1 = c$1.querySelectorAll("input[name=" + JSON.stringify("" + b$1) + "][type=\"radio\"]");
					for (b$1 = 0; b$1 < c$1.length; b$1++) {
						var d$1 = c$1[b$1];
						if (d$1 !== a && d$1.form === a.form) {
							var e$1 = Db(d$1);
							if (!e$1) throw Error(p(90));
							Wa(d$1);
							bb(d$1, e$1);
						}
					}
				}
				break;
			case "textarea":
				ib(a, c$1);
				break;
			case "select": b$1 = c$1.value, null != b$1 && fb(a, !!c$1.multiple, b$1, !1);
		}
	};
	Gb = Qk;
	Hb = Rk;
	var sl = {
		usingClientEntryPoint: !1,
		Events: [
			Cb,
			ue,
			Db,
			Eb,
			Fb,
			Qk
		]
	}, tl = {
		findFiberByHostInstance: Wc,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	};
	var ul = {
		bundleType: tl.bundleType,
		version: tl.version,
		rendererPackageName: tl.rendererPackageName,
		rendererConfig: tl.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: ua.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(a) {
			a = Zb(a);
			return null === a ? null : a.stateNode;
		},
		findFiberByHostInstance: tl.findFiberByHostInstance || jl,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!vl.isDisabled && vl.supportsFiber) try {
			kc = vl.inject(ul), lc = vl;
		} catch (a) {}
	}
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
	exports.createPortal = function(a, b$1) {
		var c$1 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!nl(b$1)) throw Error(p(200));
		return cl(a, b$1, null, c$1);
	};
	exports.createRoot = function(a, b$1) {
		if (!nl(a)) throw Error(p(299));
		var c$1 = !1, d$1 = "", e$1 = kl;
		null !== b$1 && void 0 !== b$1 && (!0 === b$1.unstable_strictMode && (c$1 = !0), void 0 !== b$1.identifierPrefix && (d$1 = b$1.identifierPrefix), void 0 !== b$1.onRecoverableError && (e$1 = b$1.onRecoverableError));
		b$1 = bl(a, 1, !1, null, null, c$1, !1, d$1, e$1);
		a[uf] = b$1.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		return new ll(b$1);
	};
	exports.findDOMNode = function(a) {
		if (null == a) return null;
		if (1 === a.nodeType) return a;
		var b$1 = a._reactInternals;
		if (void 0 === b$1) {
			if ("function" === typeof a.render) throw Error(p(188));
			a = Object.keys(a).join(",");
			throw Error(p(268, a));
		}
		a = Zb(b$1);
		a = null === a ? null : a.stateNode;
		return a;
	};
	exports.flushSync = function(a) {
		return Rk(a);
	};
	exports.hydrate = function(a, b$1, c$1) {
		if (!ol(b$1)) throw Error(p(200));
		return rl(null, a, b$1, !0, c$1);
	};
	exports.hydrateRoot = function(a, b$1, c$1) {
		if (!nl(a)) throw Error(p(405));
		var d$1 = null != c$1 && c$1.hydratedSources || null, e$1 = !1, f$3 = "", g$2 = kl;
		null !== c$1 && void 0 !== c$1 && (!0 === c$1.unstable_strictMode && (e$1 = !0), void 0 !== c$1.identifierPrefix && (f$3 = c$1.identifierPrefix), void 0 !== c$1.onRecoverableError && (g$2 = c$1.onRecoverableError));
		b$1 = el(b$1, null, a, 1, null != c$1 ? c$1 : null, e$1, !1, f$3, g$2);
		a[uf] = b$1.current;
		sf(a);
		if (d$1) for (a = 0; a < d$1.length; a++) c$1 = d$1[a], e$1 = c$1._getVersion, e$1 = e$1(c$1._source), null == b$1.mutableSourceEagerHydrationData ? b$1.mutableSourceEagerHydrationData = [c$1, e$1] : b$1.mutableSourceEagerHydrationData.push(c$1, e$1);
		return new ml(b$1);
	};
	exports.render = function(a, b$1, c$1) {
		if (!ol(b$1)) throw Error(p(200));
		return rl(null, a, b$1, !1, c$1);
	};
	exports.unmountComponentAtNode = function(a) {
		if (!ol(a)) throw Error(p(40));
		return a._reactRootContainer ? (Rk(function() {
			rl(null, null, a, !1, function() {
				a._reactRootContainer = null;
				a[uf] = null;
			});
		}), !0) : !1;
	};
	exports.unstable_batchedUpdates = Qk;
	exports.unstable_renderSubtreeIntoContainer = function(a, b$1, c$1, d$1) {
		if (!ol(c$1)) throw Error(p(200));
		if (null == a || void 0 === a._reactInternals) throw Error(p(38));
		return rl(a, b$1, c$1, !1, d$1);
	};
	exports.version = "18.3.1-next-f1338f8080-20240426";
}));
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production_min();
}));
var import_react_dom = require_react_dom();
var [PortalContextProvider, usePortalContext] = createContext({
	strict: false,
	name: "PortalContext"
});
var PORTAL_CLASSNAME = "chakra-portal";
var PORTAL_SELECTOR = `.chakra-portal`;
var Container = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "chakra-portal-zIndex",
	style: {
		position: "absolute",
		zIndex: props.zIndex,
		top: 0,
		left: 0,
		right: 0
	},
	children: props.children
});
var DefaultPortal = (props) => {
	const { appendToParentPortal, children } = props;
	const [tempNode, setTempNode] = (0, import_react.useState)(null);
	const portal = (0, import_react.useRef)(null);
	const [, forceUpdate] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => forceUpdate({}), []);
	const parentPortal = usePortalContext();
	const manager = usePortalManager();
	useSafeLayoutEffect(() => {
		if (!tempNode) return;
		const doc = tempNode.ownerDocument;
		const host = appendToParentPortal ? parentPortal ?? doc.body : doc.body;
		if (!host) return;
		portal.current = doc.createElement("div");
		portal.current.className = PORTAL_CLASSNAME;
		host.appendChild(portal.current);
		forceUpdate({});
		const portalNode = portal.current;
		return () => {
			if (host.contains(portalNode)) host.removeChild(portalNode);
		};
	}, [tempNode]);
	const _children = manager?.zIndex ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		zIndex: manager?.zIndex,
		children
	}) : children;
	return portal.current ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalContextProvider, {
		value: portal.current,
		children: _children
	}), portal.current) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { ref: (el$1) => {
		if (el$1) setTempNode(el$1);
	} });
};
var ContainerPortal = (props) => {
	const { children, containerRef, appendToParentPortal } = props;
	const containerEl = containerRef.current;
	const host = containerEl ?? (typeof window !== "undefined" ? document.body : void 0);
	const portal = (0, import_react.useMemo)(() => {
		const node$1 = containerEl?.ownerDocument.createElement("div");
		if (node$1) node$1.className = PORTAL_CLASSNAME;
		return node$1;
	}, [containerEl]);
	const [, forceUpdate] = (0, import_react.useState)({});
	useSafeLayoutEffect(() => forceUpdate({}), []);
	useSafeLayoutEffect(() => {
		if (!portal || !host) return;
		host.appendChild(portal);
		return () => {
			host.removeChild(portal);
		};
	}, [portal, host]);
	if (host && portal) return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalContextProvider, {
		value: appendToParentPortal ? portal : null,
		children
	}), portal);
	return null;
};
function Portal(props) {
	const { containerRef, ...rest } = {
		appendToParentPortal: true,
		...props
	};
	return containerRef ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContainerPortal, {
		containerRef,
		...rest
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultPortal, { ...rest });
}
Portal.className = PORTAL_CLASSNAME;
Portal.selector = PORTAL_SELECTOR;
Portal.displayName = "Portal";
var [ToastOptionProvider, useToastOptionContext] = createContext({
	name: `ToastOptionsContext`,
	strict: false
});
var ToastProvider = (props) => {
	const state$1 = (0, import_react.useSyncExternalStore)(toastStore.subscribe, toastStore.getState, toastStore.getState);
	const { motionVariants: motionVariants$1, component: Component = ToastComponent, portalProps, animatePresenceProps } = props;
	const toastList = Object.keys(state$1).map((position$2) => {
		const toasts = state$1[position$2];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "region",
			"aria-live": "polite",
			"aria-label": `Notifications-${position$2}`,
			id: `chakra-toast-manager-${position$2}`,
			style: getToastListStyle(position$2),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				...animatePresenceProps,
				initial: false,
				children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
					motionVariants: motionVariants$1,
					...toast
				}, toast.id))
			})
		}, position$2);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		...portalProps,
		children: toastList
	});
};
var createProvider = (providerTheme) => {
	return function ChakraProvider$1({ children, theme: theme$1 = providerTheme, toastOptions, ...restProps }) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Provider, {
			theme: theme$1,
			...restProps,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastOptionProvider, {
				value: toastOptions?.defaultOptions,
				children
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastProvider, { ...toastOptions })]
		});
	};
};
var ChakraProvider = createProvider(theme);
function sortNodes(nodes) {
	return nodes.sort((a, b$1) => {
		const compare = a.compareDocumentPosition(b$1);
		if (compare & Node.DOCUMENT_POSITION_FOLLOWING || compare & Node.DOCUMENT_POSITION_CONTAINED_BY) return -1;
		if (compare & Node.DOCUMENT_POSITION_PRECEDING || compare & Node.DOCUMENT_POSITION_CONTAINS) return 1;
		if (compare & Node.DOCUMENT_POSITION_DISCONNECTED || compare & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC) throw Error("Cannot sort the given nodes.");
		else return 0;
	});
}
var isElement$2 = (el$1) => typeof el$1 == "object" && "nodeType" in el$1 && el$1.nodeType === Node.ELEMENT_NODE;
function getNextIndex(current, max$1, loop) {
	let next$1 = current + 1;
	if (loop && next$1 >= max$1) next$1 = 0;
	return next$1;
}
function getPrevIndex(current, max$1, loop) {
	let next$1 = current - 1;
	if (loop && next$1 < 0) next$1 = max$1;
	return next$1;
}
var useSafeLayoutEffect$1 = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var cast = (value) => value;
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField = (obj, key, value) => {
	__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	return value;
};
var DescendantsManager = class {
	constructor() {
		__publicField(this, "descendants", /* @__PURE__ */ new Map());
		__publicField(this, "register", (nodeOrOptions) => {
			if (nodeOrOptions == null) return;
			if (isElement$2(nodeOrOptions)) return this.registerNode(nodeOrOptions);
			return (node$1) => {
				this.registerNode(node$1, nodeOrOptions);
			};
		});
		__publicField(this, "unregister", (node$1) => {
			this.descendants.delete(node$1);
			const sorted = sortNodes(Array.from(this.descendants.keys()));
			this.assignIndex(sorted);
		});
		__publicField(this, "destroy", () => {
			this.descendants.clear();
		});
		__publicField(this, "assignIndex", (descendants) => {
			this.descendants.forEach((descendant) => {
				descendant.index = descendants.indexOf(descendant.node);
				descendant.node.dataset["index"] = descendant.index.toString();
			});
		});
		__publicField(this, "count", () => this.descendants.size);
		__publicField(this, "enabledCount", () => this.enabledValues().length);
		__publicField(this, "values", () => {
			return Array.from(this.descendants.values()).sort((a, b$1) => a.index - b$1.index);
		});
		__publicField(this, "enabledValues", () => {
			return this.values().filter((descendant) => !descendant.disabled);
		});
		__publicField(this, "item", (index$1) => {
			if (this.count() === 0) return void 0;
			return this.values()[index$1];
		});
		__publicField(this, "enabledItem", (index$1) => {
			if (this.enabledCount() === 0) return void 0;
			return this.enabledValues()[index$1];
		});
		__publicField(this, "first", () => this.item(0));
		__publicField(this, "firstEnabled", () => this.enabledItem(0));
		__publicField(this, "last", () => this.item(this.descendants.size - 1));
		__publicField(this, "lastEnabled", () => {
			const lastIndex = this.enabledValues().length - 1;
			return this.enabledItem(lastIndex);
		});
		__publicField(this, "indexOf", (node$1) => {
			if (!node$1) return -1;
			return this.descendants.get(node$1)?.index ?? -1;
		});
		__publicField(this, "enabledIndexOf", (node$1) => {
			if (node$1 == null) return -1;
			return this.enabledValues().findIndex((i) => i.node.isSameNode(node$1));
		});
		__publicField(this, "next", (index$1, loop = true) => {
			const next$1 = getNextIndex(index$1, this.count(), loop);
			return this.item(next$1);
		});
		__publicField(this, "nextEnabled", (index$1, loop = true) => {
			const item = this.item(index$1);
			if (!item) return;
			const nextEnabledIndex = getNextIndex(this.enabledIndexOf(item.node), this.enabledCount(), loop);
			return this.enabledItem(nextEnabledIndex);
		});
		__publicField(this, "prev", (index$1, loop = true) => {
			const prev$1 = getPrevIndex(index$1, this.count() - 1, loop);
			return this.item(prev$1);
		});
		__publicField(this, "prevEnabled", (index$1, loop = true) => {
			const item = this.item(index$1);
			if (!item) return;
			const prevEnabledIndex = getPrevIndex(this.enabledIndexOf(item.node), this.enabledCount() - 1, loop);
			return this.enabledItem(prevEnabledIndex);
		});
		__publicField(this, "registerNode", (node$1, options) => {
			if (!node$1 || this.descendants.has(node$1)) return;
			const sorted = sortNodes(Array.from(this.descendants.keys()).concat(node$1));
			if (options?.disabled) options.disabled = !!options.disabled;
			const descendant = {
				node: node$1,
				index: -1,
				...options
			};
			this.descendants.set(node$1, descendant);
			this.assignIndex(sorted);
		});
	}
};
function createDescendantContext() {
	const [DescendantsContextProvider, useDescendantsContext] = createContext({
		name: "DescendantsProvider",
		errorMessage: "useDescendantsContext must be used within DescendantsProvider"
	});
	const useDescendant = (options) => {
		const descendants = useDescendantsContext();
		const [index$1, setIndex] = (0, import_react.useState)(-1);
		const ref = (0, import_react.useRef)(null);
		useSafeLayoutEffect$1(() => {
			return () => {
				if (!ref.current) return;
				descendants.unregister(ref.current);
			};
		}, []);
		useSafeLayoutEffect$1(() => {
			if (!ref.current) return;
			const dataIndex = Number(ref.current.dataset["index"]);
			if (index$1 != dataIndex && !Number.isNaN(dataIndex)) setIndex(dataIndex);
		});
		const refCallback = options ? cast(descendants.register(options)) : cast(descendants.register);
		return {
			descendants,
			index: index$1,
			enabledIndex: descendants.enabledIndexOf(ref.current),
			register: mergeRefs(refCallback, ref)
		};
	};
	const useDescendants = () => {
		const descendants = (0, import_react.useRef)(new DescendantsManager());
		useSafeLayoutEffect$1(() => {
			return () => descendants.current.destroy();
		});
		return descendants.current;
	};
	return [
		DescendantsContextProvider,
		useDescendantsContext,
		useDescendants,
		useDescendant
	];
}
function useImage(props) {
	const { loading, src, srcSet, onLoad, onError, crossOrigin, sizes: sizes$5, ignoreFallback } = props;
	const [status, setStatus] = (0, import_react.useState)("pending");
	(0, import_react.useEffect)(() => {
		setStatus(src ? "loading" : "pending");
	}, [src]);
	const imageRef = (0, import_react.useRef)(null);
	const load = (0, import_react.useCallback)(() => {
		if (!src) return;
		flush$1();
		const img = new Image();
		img.src = src;
		if (crossOrigin) img.crossOrigin = crossOrigin;
		if (srcSet) img.srcset = srcSet;
		if (sizes$5) img.sizes = sizes$5;
		if (loading) img.loading = loading;
		img.onload = (event) => {
			flush$1();
			setStatus("loaded");
			onLoad?.(event);
		};
		img.onerror = (error) => {
			flush$1();
			setStatus("failed");
			onError?.(error);
		};
		imageRef.current = img;
	}, [
		src,
		crossOrigin,
		srcSet,
		sizes$5,
		onLoad,
		onError,
		loading
	]);
	const flush$1 = () => {
		if (imageRef.current) {
			imageRef.current.onload = null;
			imageRef.current.onerror = null;
			imageRef.current = null;
		}
	};
	useSafeLayoutEffect(() => {
		if (ignoreFallback) return void 0;
		if (status === "loading") load();
		return () => {
			flush$1();
		};
	}, [
		status,
		load,
		ignoreFallback
	]);
	return ignoreFallback ? "loaded" : status;
}
var shouldShowFallbackImage = (status, fallbackStrategy) => status !== "loaded" && fallbackStrategy === "beforeLoadOrError" || status === "failed" && fallbackStrategy === "onError";
var Box = chakra("div");
Box.displayName = "Box";
var [ButtonGroupProvider, useButtonGroup] = createContext({
	strict: false,
	name: "ButtonGroupContext"
});
function ButtonIcon(props) {
	const { children, className, ...rest } = props;
	const _children = (0, import_react.isValidElement)(children) ? (0, import_react.cloneElement)(children, {
		"aria-hidden": true,
		focusable: false
	}) : children;
	const _className = cx$1("chakra-button__icon", className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
		display: "inline-flex",
		alignSelf: "center",
		flexShrink: 0,
		...rest,
		className: _className,
		children: _children
	});
}
ButtonIcon.displayName = "ButtonIcon";
function ButtonSpinner(props) {
	const { label, placement, spacing: spacing$1 = "0.5rem", children = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
		color: "currentColor",
		width: "1em",
		height: "1em"
	}), className, __css, ...rest } = props;
	const _className = cx$1("chakra-button__spinner", className);
	const marginProp = placement === "start" ? "marginEnd" : "marginStart";
	const spinnerStyles = (0, import_react.useMemo)(() => defineStyle({
		display: "flex",
		alignItems: "center",
		position: label ? "relative" : "absolute",
		[marginProp]: label ? spacing$1 : 0,
		fontSize: "1em",
		lineHeight: "normal",
		...__css
	}), [
		__css,
		label,
		marginProp,
		spacing$1
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		className: _className,
		...rest,
		__css: spinnerStyles,
		children
	});
}
ButtonSpinner.displayName = "ButtonSpinner";
function useButtonType(value) {
	const [isButton, setIsButton] = (0, import_react.useState)(!value);
	return {
		ref: (0, import_react.useCallback)((node$1) => {
			if (!node$1) return;
			setIsButton(node$1.tagName === "BUTTON");
		}, []),
		type: isButton ? "button" : void 0
	};
}
var Button = forwardRef((props, ref) => {
	const group = useButtonGroup();
	const styles$1 = useStyleConfig("Button", {
		...group,
		...props
	});
	const { isDisabled = group?.isDisabled, isLoading, isActive, children, leftIcon, rightIcon, loadingText, iconSpacing: iconSpacing$1 = "0.5rem", type, spinner, spinnerPlacement = "start", className, as, shouldWrapChildren, ...rest } = omitThemingProps(props);
	const buttonStyles = (0, import_react.useMemo)(() => {
		const _focus = {
			...styles$1?.["_focus"],
			zIndex: 1
		};
		return {
			display: "inline-flex",
			appearance: "none",
			alignItems: "center",
			justifyContent: "center",
			userSelect: "none",
			position: "relative",
			whiteSpace: "nowrap",
			verticalAlign: "middle",
			outline: "none",
			...styles$1,
			...!!group && { _focus }
		};
	}, [styles$1, group]);
	const { ref: _ref, type: defaultType } = useButtonType(as);
	const contentProps = {
		rightIcon,
		leftIcon,
		iconSpacing: iconSpacing$1,
		children,
		shouldWrapChildren
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(chakra.button, {
		disabled: isDisabled || isLoading,
		ref: useMergeRefs(ref, _ref),
		as,
		type: type ?? defaultType,
		"data-active": dataAttr(isActive),
		"data-loading": dataAttr(isLoading),
		__css: buttonStyles,
		className: cx$1("chakra-button", className),
		...rest,
		children: [
			isLoading && spinnerPlacement === "start" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonSpinner, {
				className: "chakra-button__spinner--start",
				label: loadingText,
				placement: "start",
				spacing: iconSpacing$1,
				children: spinner
			}),
			isLoading ? loadingText || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
				opacity: 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonContent, { ...contentProps })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonContent, { ...contentProps }),
			isLoading && spinnerPlacement === "end" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonSpinner, {
				className: "chakra-button__spinner--end",
				label: loadingText,
				placement: "end",
				spacing: iconSpacing$1,
				children: spinner
			})
		]
	});
});
Button.displayName = "Button";
function ButtonContent(props) {
	const { leftIcon, rightIcon, children, iconSpacing: iconSpacing$1, shouldWrapChildren } = props;
	if (!shouldWrapChildren) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		leftIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonIcon, {
			marginEnd: iconSpacing$1,
			children: leftIcon
		}),
		children,
		rightIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonIcon, {
			marginStart: iconSpacing$1,
			children: rightIcon
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		style: { display: "contents" },
		children: [
			leftIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonIcon, {
				marginEnd: iconSpacing$1,
				children: leftIcon
			}),
			children,
			rightIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonIcon, {
				marginStart: iconSpacing$1,
				children: rightIcon
			})
		]
	});
}
var IconButton = forwardRef((props, ref) => {
	const { icon, children, isRound, "aria-label": ariaLabel, ...rest } = props;
	const element = icon || children;
	const _children = (0, import_react.isValidElement)(element) ? (0, import_react.cloneElement)(element, {
		"aria-hidden": true,
		focusable: false
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		px: "0",
		py: "0",
		borderRadius: isRound ? "full" : void 0,
		ref,
		"aria-label": ariaLabel,
		...rest,
		children: _children
	});
});
IconButton.displayName = "IconButton";
var Flex = forwardRef(function Flex2(props, ref) {
	const { direction: direction$1, align, justify, wrap: wrap$1, basis, grow, shrink, ...rest } = props;
	const styles$1 = {
		display: "flex",
		flexDirection: direction$1,
		alignItems: align,
		justifyContent: justify,
		flexWrap: wrap$1,
		flexBasis: basis,
		flexGrow: grow,
		flexShrink: shrink
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		__css: styles$1,
		...rest
	});
});
Flex.displayName = "Flex";
function createIcon(options) {
	const { viewBox = "0 0 24 24", d: pathDefinition, displayName, defaultProps: defaultProps$1 = {} } = options;
	const path = import_react.Children.toArray(options.path);
	const Comp = forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		ref,
		viewBox,
		...defaultProps$1,
		...props,
		children: path.length ? path : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: pathDefinition
		})
	}));
	Comp.displayName = displayName;
	return Comp;
}
var NativeImage = forwardRef(function NativeImage2(props, ref) {
	const { htmlWidth, htmlHeight, alt, ...rest } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		width: htmlWidth,
		height: htmlHeight,
		ref,
		alt,
		...rest
	});
});
NativeImage.displayName = "NativeImage";
var Image$1 = forwardRef(function Image2(props, ref) {
	const { fallbackSrc, fallback, src, srcSet, align, fit, loading, ignoreFallback, crossOrigin, fallbackStrategy = "beforeLoadOrError", referrerPolicy, ...rest } = props;
	const shouldIgnoreFallbackImage = loading != null || ignoreFallback || !(fallbackSrc !== void 0 || fallback !== void 0);
	const showFallbackImage = shouldShowFallbackImage(useImage({
		...props,
		crossOrigin,
		ignoreFallback: shouldIgnoreFallbackImage
	}), fallbackStrategy);
	const shared = {
		ref,
		objectFit: fit,
		objectPosition: align,
		...shouldIgnoreFallbackImage ? rest : omit(rest, ["onError", "onLoad"])
	};
	if (showFallbackImage) {
		if (fallback) return fallback;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.img, {
			as: NativeImage,
			className: "chakra-image__placeholder",
			src: fallbackSrc,
			...shared
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.img, {
		as: NativeImage,
		src,
		srcSet,
		crossOrigin,
		loading,
		referrerPolicy,
		className: "chakra-image",
		...shared
	});
});
Image$1.displayName = "Image";
var Link = forwardRef(function Link2(props, ref) {
	const styles$1 = useStyleConfig("Link", props);
	const { className, isExternal, ...rest } = omitThemingProps(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.a, {
		target: isExternal ? "_blank" : void 0,
		rel: isExternal ? "noopener" : void 0,
		ref,
		className: cx$1("chakra-link", className),
		...rest,
		__css: styles$1
	});
});
Link.displayName = "Link";
function getNextItemFromSearch(items, searchString, itemToString, currentItem) {
	if (searchString == null) return currentItem;
	if (!currentItem) return items.find((item) => itemToString(item).toLowerCase().startsWith(searchString.toLowerCase()));
	const matchingItems = items.filter((item) => itemToString(item).toLowerCase().startsWith(searchString.toLowerCase()));
	if (matchingItems.length > 0) {
		let nextIndex;
		if (matchingItems.includes(currentItem)) {
			nextIndex = matchingItems.indexOf(currentItem) + 1;
			if (nextIndex === matchingItems.length) nextIndex = 0;
			return matchingItems[nextIndex];
		}
		nextIndex = items.indexOf(matchingItems[0]);
		return items[nextIndex];
	}
	return currentItem;
}
function isPrintableCharacter(event) {
	const { key } = event;
	return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}
function useShortcut(props = {}) {
	const { timeout = 300, preventDefault = () => true } = props;
	const [keys$1, setKeys] = (0, import_react.useState)([]);
	const timeoutRef = (0, import_react.useRef)(void 0);
	const flush$1 = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
	};
	const clearKeysAfterDelay = () => {
		flush$1();
		timeoutRef.current = setTimeout(() => {
			setKeys([]);
			timeoutRef.current = null;
		}, timeout);
	};
	(0, import_react.useEffect)(() => flush$1, []);
	function onKeyDown(fn) {
		return (event) => {
			if (event.key === "Backspace") {
				const keysCopy = [...keys$1];
				keysCopy.pop();
				setKeys(keysCopy);
				return;
			}
			if (isPrintableCharacter(event)) {
				const keysCopy = keys$1.concat(event.key);
				if (preventDefault(event)) {
					event.preventDefault();
					event.stopPropagation();
				}
				setKeys(keysCopy);
				fn(keysCopy.join(""));
				clearKeysAfterDelay();
			}
		};
	}
	return onKeyDown;
}
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
	"top",
	bottom,
	right,
	left
];
var start = "start";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
	return acc.concat([placement + "-" + start, placement + "-end"]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
	return acc.concat([
		placement,
		placement + "-" + start,
		placement + "-end"
	]);
}, []);
var modifierPhases = [
	"beforeRead",
	"read",
	"afterRead",
	"beforeMain",
	"main",
	"afterMain",
	"beforeWrite",
	"write",
	"afterWrite"
];
function getNodeName(element) {
	return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node$1) {
	if (node$1 == null) return window;
	if (node$1.toString() !== "[object Window]") {
		var ownerDocument = node$1.ownerDocument;
		return ownerDocument ? ownerDocument.defaultView || window : window;
	}
	return node$1;
}
function isElement$1(node$1) {
	return node$1 instanceof getWindow(node$1).Element || node$1 instanceof Element;
}
function isHTMLElement$1(node$1) {
	return node$1 instanceof getWindow(node$1).HTMLElement || node$1 instanceof HTMLElement;
}
function isShadowRoot(node$1) {
	if (typeof ShadowRoot === "undefined") return false;
	return node$1 instanceof getWindow(node$1).ShadowRoot || node$1 instanceof ShadowRoot;
}
function applyStyles(_ref) {
	var state$1 = _ref.state;
	Object.keys(state$1.elements).forEach(function(name) {
		var style = state$1.styles[name] || {};
		var attributes = state$1.attributes[name] || {};
		var element = state$1.elements[name];
		if (!isHTMLElement$1(element) || !getNodeName(element)) return;
		Object.assign(element.style, style);
		Object.keys(attributes).forEach(function(name$1) {
			var value = attributes[name$1];
			if (value === false) element.removeAttribute(name$1);
			else element.setAttribute(name$1, value === true ? "" : value);
		});
	});
}
function effect$2(_ref2) {
	var state$1 = _ref2.state;
	var initialStyles = {
		popper: {
			position: state$1.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	Object.assign(state$1.elements.popper.style, initialStyles.popper);
	state$1.styles = initialStyles;
	if (state$1.elements.arrow) Object.assign(state$1.elements.arrow.style, initialStyles.arrow);
	return function() {
		Object.keys(state$1.elements).forEach(function(name) {
			var element = state$1.elements[name];
			var attributes = state$1.attributes[name] || {};
			var style = Object.keys(state$1.styles.hasOwnProperty(name) ? state$1.styles[name] : initialStyles[name]).reduce(function(style$1, property) {
				style$1[property] = "";
				return style$1;
			}, {});
			if (!isHTMLElement$1(element) || !getNodeName(element)) return;
			Object.assign(element.style, style);
			Object.keys(attributes).forEach(function(attribute) {
				element.removeAttribute(attribute);
			});
		});
	};
}
var applyStyles_default = {
	name: "applyStyles",
	enabled: true,
	phase: "write",
	fn: applyStyles,
	effect: effect$2,
	requires: ["computeStyles"]
};
function getBasePlacement(placement) {
	return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
	var uaData = navigator.userAgentData;
	if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map(function(item) {
		return item.brand + "/" + item.version;
	}).join(" ");
	return navigator.userAgent;
}
function isLayoutViewport() {
	return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	var clientRect = element.getBoundingClientRect();
	var scaleX = 1;
	var scaleY = 1;
	if (includeScale && isHTMLElement$1(element)) {
		scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
		scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
	}
	var visualViewport = (isElement$1(element) ? getWindow(element) : window).visualViewport;
	var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
	var x$2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
	var y$3 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
	var width = clientRect.width / scaleX;
	var height = clientRect.height / scaleY;
	return {
		width,
		height,
		top: y$3,
		right: x$2 + width,
		bottom: y$3 + height,
		left: x$2,
		x: x$2,
		y: y$3
	};
}
function getLayoutRect(element) {
	var clientRect = getBoundingClientRect(element);
	var width = element.offsetWidth;
	var height = element.offsetHeight;
	if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
	if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
	return {
		x: element.offsetLeft,
		y: element.offsetTop,
		width,
		height
	};
}
function contains(parent, child) {
	var rootNode = child.getRootNode && child.getRootNode();
	if (parent.contains(child)) return true;
	else if (rootNode && isShadowRoot(rootNode)) {
		var next$1 = child;
		do {
			if (next$1 && parent.isSameNode(next$1)) return true;
			next$1 = next$1.parentNode || next$1.host;
		} while (next$1);
	}
	return false;
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
	return [
		"table",
		"td",
		"th"
	].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
	return ((isElement$1(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
	if (getNodeName(element) === "html") return element;
	return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
	if (!isHTMLElement$1(element) || getComputedStyle$1(element).position === "fixed") return null;
	return element.offsetParent;
}
function getContainingBlock(element) {
	var isFirefox = /firefox/i.test(getUAString());
	if (/Trident/i.test(getUAString()) && isHTMLElement$1(element)) {
		if (getComputedStyle$1(element).position === "fixed") return null;
	}
	var currentNode = getParentNode(element);
	if (isShadowRoot(currentNode)) currentNode = currentNode.host;
	while (isHTMLElement$1(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
		var css$4 = getComputedStyle$1(currentNode);
		if (css$4.transform !== "none" || css$4.perspective !== "none" || css$4.contain === "paint" || ["transform", "perspective"].indexOf(css$4.willChange) !== -1 || isFirefox && css$4.willChange === "filter" || isFirefox && css$4.filter && css$4.filter !== "none") return currentNode;
		else currentNode = currentNode.parentNode;
	}
	return null;
}
function getOffsetParent(element) {
	var window$1 = getWindow(element);
	var offsetParent = getTrueOffsetParent(element);
	while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") offsetParent = getTrueOffsetParent(offsetParent);
	if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) return window$1;
	return offsetParent || getContainingBlock(element) || window$1;
}
function getMainAxisFromPlacement(placement) {
	return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
	return max(min$1, min(value, max$1));
}
function withinMaxClamp(min$1, value, max$1) {
	var v$4 = within(min$1, value, max$1);
	return v$4 > max$1 ? max$1 : v$4;
}
function getFreshSideObject() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}
function mergePaddingObject(paddingObject) {
	return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys$1) {
	return keys$1.reduce(function(hashMap, key) {
		hashMap[key] = value;
		return hashMap;
	}, {});
}
var toPaddingObject = function toPaddingObject$1(padding, state$1) {
	padding = typeof padding === "function" ? padding(Object.assign({}, state$1.rects, { placement: state$1.placement })) : padding;
	return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
	var _state$modifiersData$;
	var state$1 = _ref.state, name = _ref.name, options = _ref.options;
	var arrowElement = state$1.elements.arrow;
	var popperOffsets$1 = state$1.modifiersData.popperOffsets;
	var basePlacement = getBasePlacement(state$1.placement);
	var axis = getMainAxisFromPlacement(basePlacement);
	var len = ["left", "right"].indexOf(basePlacement) >= 0 ? "height" : "width";
	if (!arrowElement || !popperOffsets$1) return;
	var paddingObject = toPaddingObject(options.padding, state$1);
	var arrowRect = getLayoutRect(arrowElement);
	var minProp = axis === "y" ? "top" : left;
	var maxProp = axis === "y" ? bottom : right;
	var endDiff = state$1.rects.reference[len] + state$1.rects.reference[axis] - popperOffsets$1[axis] - state$1.rects.popper[len];
	var startDiff = popperOffsets$1[axis] - state$1.rects.reference[axis];
	var arrowOffsetParent = getOffsetParent(arrowElement);
	var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
	var centerToReference = endDiff / 2 - startDiff / 2;
	var min$1 = paddingObject[minProp];
	var max$1 = clientSize - arrowRect[len] - paddingObject[maxProp];
	var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
	var offset$1 = within(min$1, center, max$1);
	var axisProp = axis;
	state$1.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset$1, _state$modifiersData$.centerOffset = offset$1 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
	var state$1 = _ref2.state;
	var _options$element = _ref2.options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
	if (arrowElement == null) return;
	if (typeof arrowElement === "string") {
		arrowElement = state$1.elements.popper.querySelector(arrowElement);
		if (!arrowElement) return;
	}
	if (!contains(state$1.elements.popper, arrowElement)) return;
	state$1.elements.arrow = arrowElement;
}
var arrow_default = {
	name: "arrow",
	enabled: true,
	phase: "main",
	fn: arrow,
	effect: effect$1,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
	return placement.split("-")[1];
}
var unsetSides = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
	var x$2 = _ref.x, y$3 = _ref.y;
	var dpr = win.devicePixelRatio || 1;
	return {
		x: round(x$2 * dpr) / dpr || 0,
		y: round(y$3 * dpr) / dpr || 0
	};
}
function mapToStyles(_ref2) {
	var _Object$assign2;
	var popper$1 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position$2 = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
	var _offsets$x = offsets.x, x$2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y$3 = _offsets$y === void 0 ? 0 : _offsets$y;
	var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
		x: x$2,
		y: y$3
	}) : {
		x: x$2,
		y: y$3
	};
	x$2 = _ref3.x;
	y$3 = _ref3.y;
	var hasX = offsets.hasOwnProperty("x");
	var hasY = offsets.hasOwnProperty("y");
	var sideX = left;
	var sideY = "top";
	var win = window;
	if (adaptive) {
		var offsetParent = getOffsetParent(popper$1);
		var heightProp = "clientHeight";
		var widthProp = "clientWidth";
		if (offsetParent === getWindow(popper$1)) {
			offsetParent = getDocumentElement(popper$1);
			if (getComputedStyle$1(offsetParent).position !== "static" && position$2 === "absolute") {
				heightProp = "scrollHeight";
				widthProp = "scrollWidth";
			}
		}
		offsetParent = offsetParent;
		if (placement === "top" || (placement === "left" || placement === "right") && variation === "end") {
			sideY = bottom;
			var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
			y$3 -= offsetY - popperRect.height;
			y$3 *= gpuAcceleration ? 1 : -1;
		}
		if (placement === "left" || (placement === "top" || placement === "bottom") && variation === "end") {
			sideX = right;
			var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
			x$2 -= offsetX - popperRect.width;
			x$2 *= gpuAcceleration ? 1 : -1;
		}
	}
	var commonStyles = Object.assign({ position: position$2 }, adaptive && unsetSides);
	var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
		x: x$2,
		y: y$3
	}, getWindow(popper$1)) : {
		x: x$2,
		y: y$3
	};
	x$2 = _ref4.x;
	y$3 = _ref4.y;
	if (gpuAcceleration) {
		var _Object$assign;
		return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x$2 + "px, " + y$3 + "px)" : "translate3d(" + x$2 + "px, " + y$3 + "px, 0)", _Object$assign));
	}
	return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y$3 + "px" : "", _Object$assign2[sideX] = hasX ? x$2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
	var state$1 = _ref5.state, options = _ref5.options;
	var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
	var commonStyles = {
		placement: getBasePlacement(state$1.placement),
		variation: getVariation(state$1.placement),
		popper: state$1.elements.popper,
		popperRect: state$1.rects.popper,
		gpuAcceleration,
		isFixed: state$1.options.strategy === "fixed"
	};
	if (state$1.modifiersData.popperOffsets != null) state$1.styles.popper = Object.assign({}, state$1.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
		offsets: state$1.modifiersData.popperOffsets,
		position: state$1.options.strategy,
		adaptive,
		roundOffsets
	})));
	if (state$1.modifiersData.arrow != null) state$1.styles.arrow = Object.assign({}, state$1.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
		offsets: state$1.modifiersData.arrow,
		position: "absolute",
		adaptive: false,
		roundOffsets
	})));
	state$1.attributes.popper = Object.assign({}, state$1.attributes.popper, { "data-popper-placement": state$1.placement });
}
var computeStyles_default = {
	name: "computeStyles",
	enabled: true,
	phase: "beforeWrite",
	fn: computeStyles,
	data: {}
};
var passive = { passive: true };
function effect(_ref) {
	var state$1 = _ref.state, instance = _ref.instance, options = _ref.options;
	var _options$scroll = options.scroll, scroll$1 = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
	var window$1 = getWindow(state$1.elements.popper);
	var scrollParents = [].concat(state$1.scrollParents.reference, state$1.scrollParents.popper);
	if (scroll$1) scrollParents.forEach(function(scrollParent) {
		scrollParent.addEventListener("scroll", instance.update, passive);
	});
	if (resize) window$1.addEventListener("resize", instance.update, passive);
	return function() {
		if (scroll$1) scrollParents.forEach(function(scrollParent) {
			scrollParent.removeEventListener("scroll", instance.update, passive);
		});
		if (resize) window$1.removeEventListener("resize", instance.update, passive);
	};
}
var eventListeners_default = {
	name: "eventListeners",
	enabled: true,
	phase: "write",
	fn: function fn() {},
	effect,
	data: {}
};
var hash$1 = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function getOppositePlacement(placement) {
	return placement.replace(/left|right|bottom|top/g, function(matched) {
		return hash$1[matched];
	});
}
var hash = {
	start: "end",
	end: "start"
};
function getOppositeVariationPlacement(placement) {
	return placement.replace(/start|end/g, function(matched) {
		return hash[matched];
	});
}
function getWindowScroll(node$1) {
	var win = getWindow(node$1);
	return {
		scrollLeft: win.pageXOffset,
		scrollTop: win.pageYOffset
	};
}
function getWindowScrollBarX(element) {
	return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
	var win = getWindow(element);
	var html = getDocumentElement(element);
	var visualViewport = win.visualViewport;
	var width = html.clientWidth;
	var height = html.clientHeight;
	var x$2 = 0;
	var y$3 = 0;
	if (visualViewport) {
		width = visualViewport.width;
		height = visualViewport.height;
		var layoutViewport = isLayoutViewport();
		if (layoutViewport || !layoutViewport && strategy === "fixed") {
			x$2 = visualViewport.offsetLeft;
			y$3 = visualViewport.offsetTop;
		}
	}
	return {
		width,
		height,
		x: x$2 + getWindowScrollBarX(element),
		y: y$3
	};
}
function getDocumentRect(element) {
	var _element$ownerDocumen;
	var html = getDocumentElement(element);
	var winScroll = getWindowScroll(element);
	var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
	var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
	var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
	var x$2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
	var y$3 = -winScroll.scrollTop;
	if (getComputedStyle$1(body || html).direction === "rtl") x$2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
	return {
		width,
		height,
		x: x$2,
		y: y$3
	};
}
function isScrollParent(element) {
	var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
	return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent$1(node$1) {
	if ([
		"html",
		"body",
		"#document"
	].indexOf(getNodeName(node$1)) >= 0) return node$1.ownerDocument.body;
	if (isHTMLElement$1(node$1) && isScrollParent(node$1)) return node$1;
	return getScrollParent$1(getParentNode(node$1));
}
function listScrollParents(element, list$1) {
	var _element$ownerDocumen;
	if (list$1 === void 0) list$1 = [];
	var scrollParent = getScrollParent$1(element);
	var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
	var win = getWindow(scrollParent);
	var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
	var updatedList = list$1.concat(target);
	return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
	return Object.assign({}, rect, {
		left: rect.x,
		top: rect.y,
		right: rect.x + rect.width,
		bottom: rect.y + rect.height
	});
}
function getInnerBoundingClientRect(element, strategy) {
	var rect = getBoundingClientRect(element, false, strategy === "fixed");
	rect.top = rect.top + element.clientTop;
	rect.left = rect.left + element.clientLeft;
	rect.bottom = rect.top + element.clientHeight;
	rect.right = rect.left + element.clientWidth;
	rect.width = element.clientWidth;
	rect.height = element.clientHeight;
	rect.x = rect.left;
	rect.y = rect.top;
	return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
	return clippingParent === "viewport" ? rectToClientRect(getViewportRect(element, strategy)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
	var clippingParents$1 = listScrollParents(getParentNode(element));
	var clipperElement = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0 && isHTMLElement$1(element) ? getOffsetParent(element) : element;
	if (!isElement$1(clipperElement)) return [];
	return clippingParents$1.filter(function(clippingParent) {
		return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
	});
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
	var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
	var clippingParents$1 = [].concat(mainClippingParents, [rootBoundary]);
	var firstClippingParent = clippingParents$1[0];
	var clippingRect = clippingParents$1.reduce(function(accRect, clippingParent) {
		var rect = getClientRectFromMixedType(element, clippingParent, strategy);
		accRect.top = max(rect.top, accRect.top);
		accRect.right = min(rect.right, accRect.right);
		accRect.bottom = min(rect.bottom, accRect.bottom);
		accRect.left = max(rect.left, accRect.left);
		return accRect;
	}, getClientRectFromMixedType(element, firstClippingParent, strategy));
	clippingRect.width = clippingRect.right - clippingRect.left;
	clippingRect.height = clippingRect.bottom - clippingRect.top;
	clippingRect.x = clippingRect.left;
	clippingRect.y = clippingRect.top;
	return clippingRect;
}
function computeOffsets(_ref) {
	var reference$1 = _ref.reference, element = _ref.element, placement = _ref.placement;
	var basePlacement = placement ? getBasePlacement(placement) : null;
	var variation = placement ? getVariation(placement) : null;
	var commonX = reference$1.x + reference$1.width / 2 - element.width / 2;
	var commonY = reference$1.y + reference$1.height / 2 - element.height / 2;
	var offsets;
	switch (basePlacement) {
		case "top":
			offsets = {
				x: commonX,
				y: reference$1.y - element.height
			};
			break;
		case bottom:
			offsets = {
				x: commonX,
				y: reference$1.y + reference$1.height
			};
			break;
		case right:
			offsets = {
				x: reference$1.x + reference$1.width,
				y: commonY
			};
			break;
		case left:
			offsets = {
				x: reference$1.x - element.width,
				y: commonY
			};
			break;
		default: offsets = {
			x: reference$1.x,
			y: reference$1.y
		};
	}
	var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
	if (mainAxis != null) {
		var len = mainAxis === "y" ? "height" : "width";
		switch (variation) {
			case start:
				offsets[mainAxis] = offsets[mainAxis] - (reference$1[len] / 2 - element[len] / 2);
				break;
			case "end":
				offsets[mainAxis] = offsets[mainAxis] + (reference$1[len] / 2 - element[len] / 2);
				break;
			default:
		}
	}
	return offsets;
}
function detectOverflow(state$1, options) {
	if (options === void 0) options = {};
	var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state$1.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state$1.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
	var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
	var altContext = elementContext === "popper" ? reference : popper;
	var popperRect = state$1.rects.popper;
	var element = state$1.elements[altBoundary ? altContext : elementContext];
	var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state$1.elements.popper), boundary, rootBoundary, strategy);
	var referenceClientRect = getBoundingClientRect(state$1.elements.reference);
	var popperOffsets$1 = computeOffsets({
		reference: referenceClientRect,
		element: popperRect,
		strategy: "absolute",
		placement
	});
	var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets$1));
	var elementClientRect = elementContext === "popper" ? popperClientRect : referenceClientRect;
	var overflowOffsets = {
		top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
		bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
		left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
		right: elementClientRect.right - clippingClientRect.right + paddingObject.right
	};
	var offsetData = state$1.modifiersData.offset;
	if (elementContext === "popper" && offsetData) {
		var offset$1 = offsetData[placement];
		Object.keys(overflowOffsets).forEach(function(key) {
			var multiply$2 = ["right", "bottom"].indexOf(key) >= 0 ? 1 : -1;
			var axis = ["top", "bottom"].indexOf(key) >= 0 ? "y" : "x";
			overflowOffsets[key] += offset$1[axis] * multiply$2;
		});
	}
	return overflowOffsets;
}
function computeAutoPlacement(state$1, options) {
	if (options === void 0) options = {};
	var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
	var variation = getVariation(placement);
	var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement$1) {
		return getVariation(placement$1) === variation;
	}) : basePlacements;
	var allowedPlacements = placements$1.filter(function(placement$1) {
		return allowedAutoPlacements.indexOf(placement$1) >= 0;
	});
	if (allowedPlacements.length === 0) allowedPlacements = placements$1;
	var overflows = allowedPlacements.reduce(function(acc, placement$1) {
		acc[placement$1] = detectOverflow(state$1, {
			placement: placement$1,
			boundary,
			rootBoundary,
			padding
		})[getBasePlacement(placement$1)];
		return acc;
	}, {});
	return Object.keys(overflows).sort(function(a, b$1) {
		return overflows[a] - overflows[b$1];
	});
}
function getExpandedFallbackPlacements(placement) {
	if (getBasePlacement(placement) === "auto") return [];
	var oppositePlacement = getOppositePlacement(placement);
	return [
		getOppositeVariationPlacement(placement),
		oppositePlacement,
		getOppositeVariationPlacement(oppositePlacement)
	];
}
function flip(_ref) {
	var state$1 = _ref.state, options = _ref.options, name = _ref.name;
	if (state$1.modifiersData[name]._skip) return;
	var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
	var preferredPlacement = state$1.options.placement;
	var isBasePlacement = getBasePlacement(preferredPlacement) === preferredPlacement;
	var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
	var placements$1 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement$1) {
		return acc.concat(getBasePlacement(placement$1) === "auto" ? computeAutoPlacement(state$1, {
			placement: placement$1,
			boundary,
			rootBoundary,
			padding,
			flipVariations,
			allowedAutoPlacements
		}) : placement$1);
	}, []);
	var referenceRect = state$1.rects.reference;
	var popperRect = state$1.rects.popper;
	var checksMap = /* @__PURE__ */ new Map();
	var makeFallbackChecks = true;
	var firstFittingPlacement = placements$1[0];
	for (var i = 0; i < placements$1.length; i++) {
		var placement = placements$1[i];
		var _basePlacement = getBasePlacement(placement);
		var isStartVariation = getVariation(placement) === start;
		var isVertical = ["top", bottom].indexOf(_basePlacement) >= 0;
		var len = isVertical ? "width" : "height";
		var overflow = detectOverflow(state$1, {
			placement,
			boundary,
			rootBoundary,
			altBoundary,
			padding
		});
		var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : "top";
		if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
		var altVariationSide = getOppositePlacement(mainVariationSide);
		var checks = [];
		if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
		if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
		if (checks.every(function(check) {
			return check;
		})) {
			firstFittingPlacement = placement;
			makeFallbackChecks = false;
			break;
		}
		checksMap.set(placement, checks);
	}
	if (makeFallbackChecks) {
		var numberOfChecks = flipVariations ? 3 : 1;
		var _loop = function _loop$1(_i$1) {
			var fittingPlacement = placements$1.find(function(placement$1) {
				var checks$1 = checksMap.get(placement$1);
				if (checks$1) return checks$1.slice(0, _i$1).every(function(check) {
					return check;
				});
			});
			if (fittingPlacement) {
				firstFittingPlacement = fittingPlacement;
				return "break";
			}
		};
		for (var _i = numberOfChecks; _i > 0; _i--) if (_loop(_i) === "break") break;
	}
	if (state$1.placement !== firstFittingPlacement) {
		state$1.modifiersData[name]._skip = true;
		state$1.placement = firstFittingPlacement;
		state$1.reset = true;
	}
}
var flip_default = {
	name: "flip",
	enabled: true,
	phase: "main",
	fn: flip,
	requiresIfExists: ["offset"],
	data: { _skip: false }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
	if (preventedOffsets === void 0) preventedOffsets = {
		x: 0,
		y: 0
	};
	return {
		top: overflow.top - rect.height - preventedOffsets.y,
		right: overflow.right - rect.width + preventedOffsets.x,
		bottom: overflow.bottom - rect.height + preventedOffsets.y,
		left: overflow.left - rect.width - preventedOffsets.x
	};
}
function isAnySideFullyClipped(overflow) {
	return [
		"top",
		right,
		bottom,
		left
	].some(function(side) {
		return overflow[side] >= 0;
	});
}
function hide(_ref) {
	var state$1 = _ref.state, name = _ref.name;
	var referenceRect = state$1.rects.reference;
	var popperRect = state$1.rects.popper;
	var preventedOffsets = state$1.modifiersData.preventOverflow;
	var referenceOverflow = detectOverflow(state$1, { elementContext: "reference" });
	var popperAltOverflow = detectOverflow(state$1, { altBoundary: true });
	var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
	var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
	var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
	var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
	state$1.modifiersData[name] = {
		referenceClippingOffsets,
		popperEscapeOffsets,
		isReferenceHidden,
		hasPopperEscaped
	};
	state$1.attributes.popper = Object.assign({}, state$1.attributes.popper, {
		"data-popper-reference-hidden": isReferenceHidden,
		"data-popper-escaped": hasPopperEscaped
	});
}
var hide_default = {
	name: "hide",
	enabled: true,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset$1) {
	var basePlacement = getBasePlacement(placement);
	var invertDistance = ["left", "top"].indexOf(basePlacement) >= 0 ? -1 : 1;
	var _ref = typeof offset$1 === "function" ? offset$1(Object.assign({}, rects, { placement })) : offset$1, skidding = _ref[0], distance$1 = _ref[1];
	skidding = skidding || 0;
	distance$1 = (distance$1 || 0) * invertDistance;
	return ["left", "right"].indexOf(basePlacement) >= 0 ? {
		x: distance$1,
		y: skidding
	} : {
		x: skidding,
		y: distance$1
	};
}
function offset(_ref2) {
	var state$1 = _ref2.state, options = _ref2.options, name = _ref2.name;
	var _options$offset = options.offset, offset$1 = _options$offset === void 0 ? [0, 0] : _options$offset;
	var data = placements.reduce(function(acc, placement) {
		acc[placement] = distanceAndSkiddingToXY(placement, state$1.rects, offset$1);
		return acc;
	}, {});
	var _data$state$placement = data[state$1.placement], x$2 = _data$state$placement.x, y$3 = _data$state$placement.y;
	if (state$1.modifiersData.popperOffsets != null) {
		state$1.modifiersData.popperOffsets.x += x$2;
		state$1.modifiersData.popperOffsets.y += y$3;
	}
	state$1.modifiersData[name] = data;
}
var offset_default = {
	name: "offset",
	enabled: true,
	phase: "main",
	requires: ["popperOffsets"],
	fn: offset
};
function popperOffsets(_ref) {
	var state$1 = _ref.state, name = _ref.name;
	state$1.modifiersData[name] = computeOffsets({
		reference: state$1.rects.reference,
		element: state$1.rects.popper,
		strategy: "absolute",
		placement: state$1.placement
	});
}
var popperOffsets_default = {
	name: "popperOffsets",
	enabled: true,
	phase: "read",
	fn: popperOffsets,
	data: {}
};
function getAltAxis(axis) {
	return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
	var state$1 = _ref.state, options = _ref.options, name = _ref.name;
	var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
	var overflow = detectOverflow(state$1, {
		boundary,
		rootBoundary,
		padding,
		altBoundary
	});
	var basePlacement = getBasePlacement(state$1.placement);
	var variation = getVariation(state$1.placement);
	var isBasePlacement = !variation;
	var mainAxis = getMainAxisFromPlacement(basePlacement);
	var altAxis = getAltAxis(mainAxis);
	var popperOffsets$1 = state$1.modifiersData.popperOffsets;
	var referenceRect = state$1.rects.reference;
	var popperRect = state$1.rects.popper;
	var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state$1.rects, { placement: state$1.placement })) : tetherOffset;
	var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
		mainAxis: tetherOffsetValue,
		altAxis: tetherOffsetValue
	} : Object.assign({
		mainAxis: 0,
		altAxis: 0
	}, tetherOffsetValue);
	var offsetModifierState = state$1.modifiersData.offset ? state$1.modifiersData.offset[state$1.placement] : null;
	var data = {
		x: 0,
		y: 0
	};
	if (!popperOffsets$1) return;
	if (checkMainAxis) {
		var _offsetModifierState$;
		var mainSide = mainAxis === "y" ? "top" : left;
		var altSide = mainAxis === "y" ? bottom : right;
		var len = mainAxis === "y" ? "height" : "width";
		var offset$1 = popperOffsets$1[mainAxis];
		var min$1 = offset$1 + overflow[mainSide];
		var max$1 = offset$1 - overflow[altSide];
		var additive = tether ? -popperRect[len] / 2 : 0;
		var minLen = variation === "start" ? referenceRect[len] : popperRect[len];
		var maxLen = variation === "start" ? -popperRect[len] : -referenceRect[len];
		var arrowElement = state$1.elements.arrow;
		var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
			width: 0,
			height: 0
		};
		var arrowPaddingObject = state$1.modifiersData["arrow#persistent"] ? state$1.modifiersData["arrow#persistent"].padding : getFreshSideObject();
		var arrowPaddingMin = arrowPaddingObject[mainSide];
		var arrowPaddingMax = arrowPaddingObject[altSide];
		var arrowLen = within(0, referenceRect[len], arrowRect[len]);
		var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
		var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
		var arrowOffsetParent = state$1.elements.arrow && getOffsetParent(state$1.elements.arrow);
		var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
		var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
		var tetherMin = offset$1 + minOffset - offsetModifierValue - clientOffset;
		var tetherMax = offset$1 + maxOffset - offsetModifierValue;
		var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset$1, tether ? max(max$1, tetherMax) : max$1);
		popperOffsets$1[mainAxis] = preventedOffset;
		data[mainAxis] = preventedOffset - offset$1;
	}
	if (checkAltAxis) {
		var _offsetModifierState$2;
		var _mainSide = mainAxis === "x" ? "top" : left;
		var _altSide = mainAxis === "x" ? bottom : right;
		var _offset = popperOffsets$1[altAxis];
		var _len = altAxis === "y" ? "height" : "width";
		var _min = _offset + overflow[_mainSide];
		var _max = _offset - overflow[_altSide];
		var isOriginSide = ["top", left].indexOf(basePlacement) !== -1;
		var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
		var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
		var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
		var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
		popperOffsets$1[altAxis] = _preventedOffset;
		data[altAxis] = _preventedOffset - _offset;
	}
	state$1.modifiersData[name] = data;
}
var preventOverflow_default = {
	name: "preventOverflow",
	enabled: true,
	phase: "main",
	fn: preventOverflow,
	requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
	return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
}
function getNodeScroll(node$1) {
	if (node$1 === getWindow(node$1) || !isHTMLElement$1(node$1)) return getWindowScroll(node$1);
	else return getHTMLElementScroll(node$1);
}
function isElementScaled(element) {
	var rect = element.getBoundingClientRect();
	var scaleX = round(rect.width) / element.offsetWidth || 1;
	var scaleY = round(rect.height) / element.offsetHeight || 1;
	return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
	if (isFixed === void 0) isFixed = false;
	var isOffsetParentAnElement = isHTMLElement$1(offsetParent);
	var offsetParentIsScaled = isHTMLElement$1(offsetParent) && isElementScaled(offsetParent);
	var documentElement = getDocumentElement(offsetParent);
	var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
	var scroll$1 = {
		scrollLeft: 0,
		scrollTop: 0
	};
	var offsets = {
		x: 0,
		y: 0
	};
	if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll$1 = getNodeScroll(offsetParent);
		if (isHTMLElement$1(offsetParent)) {
			offsets = getBoundingClientRect(offsetParent, true);
			offsets.x += offsetParent.clientLeft;
			offsets.y += offsetParent.clientTop;
		} else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
	}
	return {
		x: rect.left + scroll$1.scrollLeft - offsets.x,
		y: rect.top + scroll$1.scrollTop - offsets.y,
		width: rect.width,
		height: rect.height
	};
}
function order(modifiers) {
	var map = /* @__PURE__ */ new Map();
	var visited = /* @__PURE__ */ new Set();
	var result = [];
	modifiers.forEach(function(modifier) {
		map.set(modifier.name, modifier);
	});
	function sort(modifier) {
		visited.add(modifier.name);
		[].concat(modifier.requires || [], modifier.requiresIfExists || []).forEach(function(dep) {
			if (!visited.has(dep)) {
				var depModifier = map.get(dep);
				if (depModifier) sort(depModifier);
			}
		});
		result.push(modifier);
	}
	modifiers.forEach(function(modifier) {
		if (!visited.has(modifier.name)) sort(modifier);
	});
	return result;
}
function orderModifiers(modifiers) {
	var orderedModifiers = order(modifiers);
	return modifierPhases.reduce(function(acc, phase) {
		return acc.concat(orderedModifiers.filter(function(modifier) {
			return modifier.phase === phase;
		}));
	}, []);
}
function debounce(fn) {
	var pending;
	return function() {
		if (!pending) pending = new Promise(function(resolve) {
			Promise.resolve().then(function() {
				pending = void 0;
				resolve(fn());
			});
		});
		return pending;
	};
}
function mergeByName(modifiers) {
	var merged = modifiers.reduce(function(merged$1, current) {
		var existing = merged$1[current.name];
		merged$1[current.name] = existing ? Object.assign({}, existing, current, {
			options: Object.assign({}, existing.options, current.options),
			data: Object.assign({}, existing.data, current.data)
		}) : current;
		return merged$1;
	}, {});
	return Object.keys(merged).map(function(key) {
		return merged[key];
	});
}
var DEFAULT_OPTIONS = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function areValidElements() {
	for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	return !args.some(function(element) {
		return !(element && typeof element.getBoundingClientRect === "function");
	});
}
function popperGenerator(generatorOptions) {
	if (generatorOptions === void 0) generatorOptions = {};
	var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers$1 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
	return function createPopper$1(reference$1, popper$1, options) {
		if (options === void 0) options = defaultOptions;
		var state$1 = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
			modifiersData: {},
			elements: {
				reference: reference$1,
				popper: popper$1
			},
			attributes: {},
			styles: {}
		};
		var effectCleanupFns = [];
		var isDestroyed = false;
		var instance = {
			state: state$1,
			setOptions: function setOptions(setOptionsAction) {
				var options$1 = typeof setOptionsAction === "function" ? setOptionsAction(state$1.options) : setOptionsAction;
				cleanupModifierEffects();
				state$1.options = Object.assign({}, defaultOptions, state$1.options, options$1);
				state$1.scrollParents = {
					reference: isElement$1(reference$1) ? listScrollParents(reference$1) : reference$1.contextElement ? listScrollParents(reference$1.contextElement) : [],
					popper: listScrollParents(popper$1)
				};
				state$1.orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers$1, state$1.options.modifiers))).filter(function(m$2) {
					return m$2.enabled;
				});
				runModifierEffects();
				return instance.update();
			},
			forceUpdate: function forceUpdate() {
				if (isDestroyed) return;
				var _state$elements = state$1.elements, reference$2 = _state$elements.reference, popper$2 = _state$elements.popper;
				if (!areValidElements(reference$2, popper$2)) return;
				state$1.rects = {
					reference: getCompositeRect(reference$2, getOffsetParent(popper$2), state$1.options.strategy === "fixed"),
					popper: getLayoutRect(popper$2)
				};
				state$1.reset = false;
				state$1.placement = state$1.options.placement;
				state$1.orderedModifiers.forEach(function(modifier) {
					return state$1.modifiersData[modifier.name] = Object.assign({}, modifier.data);
				});
				for (var index$1 = 0; index$1 < state$1.orderedModifiers.length; index$1++) {
					if (state$1.reset === true) {
						state$1.reset = false;
						index$1 = -1;
						continue;
					}
					var _state$orderedModifie = state$1.orderedModifiers[index$1], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
					if (typeof fn === "function") state$1 = fn({
						state: state$1,
						options: _options,
						name,
						instance
					}) || state$1;
				}
			},
			update: debounce(function() {
				return new Promise(function(resolve) {
					instance.forceUpdate();
					resolve(state$1);
				});
			}),
			destroy: function destroy() {
				cleanupModifierEffects();
				isDestroyed = true;
			}
		};
		if (!areValidElements(reference$1, popper$1)) return instance;
		instance.setOptions(options).then(function(state$2) {
			if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state$2);
		});
		function runModifierEffects() {
			state$1.orderedModifiers.forEach(function(_ref) {
				var name = _ref.name, _ref$options = _ref.options, options$1 = _ref$options === void 0 ? {} : _ref$options, effect$4 = _ref.effect;
				if (typeof effect$4 === "function") {
					var cleanupFn = effect$4({
						state: state$1,
						name,
						instance,
						options: options$1
					});
					effectCleanupFns.push(cleanupFn || function noopFn() {});
				}
			});
		}
		function cleanupModifierEffects() {
			effectCleanupFns.forEach(function(fn) {
				return fn();
			});
			effectCleanupFns = [];
		}
		return instance;
	};
}
var createPopper = /* @__PURE__ */ popperGenerator({ defaultModifiers: [
	eventListeners_default,
	popperOffsets_default,
	computeStyles_default,
	applyStyles_default,
	offset_default,
	flip_default,
	preventOverflow_default,
	arrow_default,
	hide_default
] });
var toVar = (value, fallback) => ({
	var: value,
	varRef: fallback ? `var(${value}, ${fallback})` : `var(${value})`
});
var cssVars = {
	arrowShadowColor: toVar("--popper-arrow-shadow-color"),
	arrowSize: toVar("--popper-arrow-size", "8px"),
	arrowSizeHalf: toVar("--popper-arrow-size-half"),
	arrowBg: toVar("--popper-arrow-bg"),
	transformOrigin: toVar("--popper-transform-origin"),
	arrowOffset: toVar("--popper-arrow-offset")
};
function getBoxShadow(placement) {
	if (placement.includes("top")) return `1px 1px 0px 0 var(--popper-arrow-shadow-color)`;
	if (placement.includes("bottom")) return `-1px -1px 0px 0 var(--popper-arrow-shadow-color)`;
	if (placement.includes("right")) return `-1px 1px 0px 0 var(--popper-arrow-shadow-color)`;
	if (placement.includes("left")) return `1px -1px 0px 0 var(--popper-arrow-shadow-color)`;
}
var transforms = {
	top: "bottom center",
	"top-start": "bottom left",
	"top-end": "bottom right",
	bottom: "top center",
	"bottom-start": "top left",
	"bottom-end": "top right",
	left: "right center",
	"left-start": "right top",
	"left-end": "right bottom",
	right: "left center",
	"right-start": "left top",
	"right-end": "left bottom"
};
var toTransformOrigin = (placement) => transforms[placement];
var defaultEventListeners = {
	scroll: true,
	resize: true
};
function getEventListenerOptions(value) {
	let eventListeners;
	if (typeof value === "object") eventListeners = {
		enabled: true,
		options: {
			...defaultEventListeners,
			...value
		}
	};
	else eventListeners = {
		enabled: value,
		options: defaultEventListeners
	};
	return eventListeners;
}
var matchWidth = {
	name: "matchWidth",
	enabled: true,
	phase: "beforeWrite",
	requires: ["computeStyles"],
	fn: ({ state: state$1 }) => {
		state$1.styles.popper.width = `${state$1.rects.reference.width}px`;
	},
	effect: ({ state: state$1 }) => () => {
		const reference$1 = state$1.elements.reference;
		state$1.elements.popper.style.width = `${reference$1.offsetWidth}px`;
	}
};
var transformOrigin = {
	name: "transformOrigin",
	enabled: true,
	phase: "write",
	fn: ({ state: state$1 }) => {
		setTransformOrigin(state$1);
	},
	effect: ({ state: state$1 }) => () => {
		setTransformOrigin(state$1);
	}
};
var setTransformOrigin = (state$1) => {
	state$1.elements.popper.style.setProperty(cssVars.transformOrigin.var, toTransformOrigin(state$1.placement));
};
var positionArrow = {
	name: "positionArrow",
	enabled: true,
	phase: "afterWrite",
	fn: ({ state: state$1 }) => {
		setArrowStyles(state$1);
	}
};
var setArrowStyles = (state$1) => {
	if (!state$1.placement) return;
	const overrides = getArrowStyle$1(state$1.placement);
	if (state$1.elements?.arrow && overrides) {
		Object.assign(state$1.elements.arrow.style, {
			[overrides.property]: overrides.value,
			width: cssVars.arrowSize.varRef,
			height: cssVars.arrowSize.varRef,
			zIndex: -1
		});
		const vars$1 = {
			[cssVars.arrowSizeHalf.var]: `calc(${cssVars.arrowSize.varRef} / 2 - 1px)`,
			[cssVars.arrowOffset.var]: `calc(${cssVars.arrowSizeHalf.varRef} * -1)`
		};
		for (const property in vars$1) state$1.elements.arrow.style.setProperty(property, vars$1[property]);
	}
};
var getArrowStyle$1 = (placement) => {
	if (placement.startsWith("top")) return {
		property: "bottom",
		value: cssVars.arrowOffset.varRef
	};
	if (placement.startsWith("bottom")) return {
		property: "top",
		value: cssVars.arrowOffset.varRef
	};
	if (placement.startsWith("left")) return {
		property: "right",
		value: cssVars.arrowOffset.varRef
	};
	if (placement.startsWith("right")) return {
		property: "left",
		value: cssVars.arrowOffset.varRef
	};
};
var innerArrow = {
	name: "innerArrow",
	enabled: true,
	phase: "main",
	requires: ["arrow"],
	fn: ({ state: state$1 }) => {
		setInnerArrowStyles(state$1);
	},
	effect: ({ state: state$1 }) => () => {
		setInnerArrowStyles(state$1);
	}
};
var setInnerArrowStyles = (state$1) => {
	if (!state$1.elements.arrow) return;
	const inner = state$1.elements.arrow.querySelector("[data-popper-arrow-inner]");
	if (!inner) return;
	const boxShadow = getBoxShadow(state$1.placement);
	if (boxShadow) inner.style.setProperty("--popper-arrow-default-shadow", boxShadow);
	Object.assign(inner.style, {
		transform: "rotate(45deg)",
		background: cssVars.arrowBg.varRef,
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		position: "absolute",
		zIndex: "inherit",
		boxShadow: `var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))`
	});
};
var logicals = {
	"start-start": {
		ltr: "left-start",
		rtl: "right-start"
	},
	"start-end": {
		ltr: "left-end",
		rtl: "right-end"
	},
	"end-start": {
		ltr: "right-start",
		rtl: "left-start"
	},
	"end-end": {
		ltr: "right-end",
		rtl: "left-end"
	},
	start: {
		ltr: "left",
		rtl: "right"
	},
	end: {
		ltr: "right",
		rtl: "left"
	}
};
var opposites = {
	"auto-start": "auto-end",
	"auto-end": "auto-start",
	"top-start": "top-end",
	"top-end": "top-start",
	"bottom-start": "bottom-end",
	"bottom-end": "bottom-start"
};
function getPopperPlacement(placement, dir = "ltr") {
	const value = logicals[placement]?.[dir] || placement;
	if (dir === "ltr") return value;
	return opposites[placement] ?? value;
}
function usePopper(props = {}) {
	const { enabled = true, modifiers, placement: placementProp = "bottom", strategy = "absolute", arrowPadding = 8, eventListeners = true, offset: offset$1, gutter = 8, flip: flip$1 = true, boundary = "clippingParents", preventOverflow: preventOverflow$1 = true, matchWidth: matchWidth$1, direction: direction$1 = "ltr" } = props;
	const reference$1 = (0, import_react.useRef)(null);
	const popper$1 = (0, import_react.useRef)(null);
	const instance = (0, import_react.useRef)(null);
	const placement = getPopperPlacement(placementProp, direction$1);
	const cleanup = (0, import_react.useRef)(() => {});
	const setupPopper = (0, import_react.useCallback)(() => {
		if (!enabled || !reference$1.current || !popper$1.current) return;
		cleanup.current?.();
		instance.current = createPopper(reference$1.current, popper$1.current, {
			placement,
			modifiers: [
				innerArrow,
				positionArrow,
				transformOrigin,
				{
					...matchWidth,
					enabled: !!matchWidth$1
				},
				{
					name: "eventListeners",
					...getEventListenerOptions(eventListeners)
				},
				{
					name: "arrow",
					options: { padding: arrowPadding }
				},
				{
					name: "offset",
					options: { offset: offset$1 ?? [0, gutter] }
				},
				{
					name: "flip",
					enabled: !!flip$1,
					options: { padding: 8 }
				},
				{
					name: "preventOverflow",
					enabled: !!preventOverflow$1,
					options: { boundary }
				},
				...modifiers ?? []
			],
			strategy
		});
		instance.current.forceUpdate();
		cleanup.current = instance.current.destroy;
	}, [
		placement,
		enabled,
		modifiers,
		matchWidth$1,
		eventListeners,
		arrowPadding,
		offset$1,
		gutter,
		flip$1,
		preventOverflow$1,
		boundary,
		strategy
	]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (!reference$1.current && !popper$1.current) {
				instance.current?.destroy();
				instance.current = null;
			}
		};
	}, []);
	const referenceRef = (0, import_react.useCallback)((node$1) => {
		reference$1.current = node$1;
		setupPopper();
	}, [setupPopper]);
	const getReferenceProps = (0, import_react.useCallback)((props2 = {}, ref = null) => ({
		...props2,
		ref: mergeRefs(referenceRef, ref)
	}), [referenceRef]);
	const popperRef = (0, import_react.useCallback)((node$1) => {
		popper$1.current = node$1;
		setupPopper();
	}, [setupPopper]);
	const getPopperProps = (0, import_react.useCallback)((props2 = {}, ref = null) => ({
		...props2,
		ref: mergeRefs(popperRef, ref),
		style: {
			...props2.style,
			position: strategy,
			minWidth: matchWidth$1 ? void 0 : "max-content",
			inset: "0 auto auto 0"
		}
	}), [
		strategy,
		popperRef,
		matchWidth$1
	]);
	const getArrowProps = (0, import_react.useCallback)((props2 = {}, ref = null) => {
		const { size: size$1, shadowColor, bg: bg$1, style, ...rest } = props2;
		return {
			...rest,
			ref,
			"data-popper-arrow": "",
			style: getArrowStyle(props2)
		};
	}, []);
	const getArrowInnerProps = (0, import_react.useCallback)((props2 = {}, ref = null) => ({
		...props2,
		ref,
		"data-popper-arrow-inner": ""
	}), []);
	return {
		update() {
			instance.current?.update();
		},
		forceUpdate() {
			instance.current?.forceUpdate();
		},
		transformOrigin: cssVars.transformOrigin.varRef,
		referenceRef,
		popperRef,
		getPopperProps,
		getArrowProps,
		getArrowInnerProps,
		getReferenceProps
	};
}
function getArrowStyle(props) {
	const { size: size$1, shadowColor, bg: bg$1, style } = props;
	const computedStyle = {
		...style,
		position: "absolute"
	};
	if (size$1) computedStyle["--popper-arrow-size"] = size$1;
	if (shadowColor) computedStyle["--popper-arrow-shadow-color"] = shadowColor;
	if (bg$1) computedStyle["--popper-arrow-bg"] = bg$1;
	return computedStyle;
}
function useEventListeners() {
	const listeners = (0, import_react.useRef)(/* @__PURE__ */ new Map());
	const currentListeners = listeners.current;
	const add$2 = (0, import_react.useCallback)((el$1, type, listener, options) => {
		listeners.current.set(listener, {
			type,
			el: el$1,
			options
		});
		el$1.addEventListener(type, listener, options);
	}, []);
	const remove = (0, import_react.useCallback)((el$1, type, listener, options) => {
		el$1.removeEventListener(type, listener, options);
		listeners.current.delete(listener);
	}, []);
	(0, import_react.useEffect)(() => () => {
		currentListeners.forEach((value, key) => {
			remove(value.el, value.type, key, value.options);
		});
	}, [remove, currentListeners]);
	return {
		add: add$2,
		remove
	};
}
function isValidElement$2(event) {
	const { tagName, isContentEditable } = event.composedPath?.()?.[0] ?? event.target;
	return tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable !== true;
}
function useClickable(props = {}) {
	const { ref: htmlRef, isDisabled, isFocusable: isFocusable$1, clickOnEnter = true, clickOnSpace = true, onMouseDown, onMouseUp, onClick, onKeyDown, onKeyUp, tabIndex: tabIndexProp, onMouseOver, onMouseLeave, ...htmlProps } = props;
	const [isButton, setIsButton] = (0, import_react.useState)(true);
	const [isPressed, setIsPressed] = (0, import_react.useState)(false);
	const listeners = useEventListeners();
	const refCallback = (node$1) => {
		if (!node$1) return;
		if (node$1.tagName !== "BUTTON") setIsButton(false);
	};
	const tabIndex = isButton ? tabIndexProp : tabIndexProp || 0;
	const trulyDisabled = isDisabled && !isFocusable$1;
	const handleClick = (0, import_react.useCallback)((event) => {
		if (isDisabled) {
			event.stopPropagation();
			event.preventDefault();
			return;
		}
		event.currentTarget.focus();
		onClick?.(event);
	}, [isDisabled, onClick]);
	const onDocumentKeyUp = (0, import_react.useCallback)((e$1) => {
		if (isPressed && isValidElement$2(e$1)) {
			e$1.preventDefault();
			e$1.stopPropagation();
			setIsPressed(false);
			listeners.remove(document, "keyup", onDocumentKeyUp, false);
		}
	}, [isPressed, listeners]);
	const handleKeyDown = (0, import_react.useCallback)((event) => {
		onKeyDown?.(event);
		if (isDisabled || event.defaultPrevented || event.metaKey) return;
		if (!isValidElement$2(event.nativeEvent) || isButton) return;
		const shouldClickOnEnter = clickOnEnter && event.key === "Enter";
		if (clickOnSpace && event.key === " ") {
			event.preventDefault();
			setIsPressed(true);
		}
		if (shouldClickOnEnter) {
			event.preventDefault();
			event.currentTarget.click();
		}
		listeners.add(document, "keyup", onDocumentKeyUp, false);
	}, [
		isDisabled,
		isButton,
		onKeyDown,
		clickOnEnter,
		clickOnSpace,
		listeners,
		onDocumentKeyUp
	]);
	const handleKeyUp = (0, import_react.useCallback)((event) => {
		onKeyUp?.(event);
		if (isDisabled || event.defaultPrevented || event.metaKey) return;
		if (!isValidElement$2(event.nativeEvent) || isButton) return;
		if (clickOnSpace && event.key === " ") {
			event.preventDefault();
			setIsPressed(false);
			event.currentTarget.click();
		}
	}, [
		clickOnSpace,
		isButton,
		isDisabled,
		onKeyUp
	]);
	const onDocumentMouseUp = (0, import_react.useCallback)((event) => {
		if (event.button !== 0) return;
		setIsPressed(false);
		listeners.remove(document, "mouseup", onDocumentMouseUp, false);
	}, [listeners]);
	const handleMouseDown = (0, import_react.useCallback)((event) => {
		if (event.button !== 0) return;
		if (isDisabled) {
			event.stopPropagation();
			event.preventDefault();
			return;
		}
		if (!isButton) setIsPressed(true);
		event.currentTarget.focus({ preventScroll: true });
		listeners.add(document, "mouseup", onDocumentMouseUp, false);
		onMouseDown?.(event);
	}, [
		isDisabled,
		isButton,
		onMouseDown,
		listeners,
		onDocumentMouseUp
	]);
	const handleMouseUp = (0, import_react.useCallback)((event) => {
		if (event.button !== 0) return;
		if (!isButton) setIsPressed(false);
		onMouseUp?.(event);
	}, [onMouseUp, isButton]);
	const handleMouseOver = (0, import_react.useCallback)((event) => {
		if (isDisabled) {
			event.preventDefault();
			return;
		}
		onMouseOver?.(event);
	}, [isDisabled, onMouseOver]);
	const handleMouseLeave = (0, import_react.useCallback)((event) => {
		if (isPressed) {
			event.preventDefault();
			setIsPressed(false);
		}
		onMouseLeave?.(event);
	}, [isPressed, onMouseLeave]);
	const ref = mergeRefs(htmlRef, refCallback);
	if (isButton) return {
		...htmlProps,
		ref,
		type: "button",
		"aria-disabled": trulyDisabled ? void 0 : isDisabled,
		disabled: trulyDisabled,
		onClick: handleClick,
		onMouseDown,
		onMouseUp,
		onKeyUp,
		onKeyDown,
		onMouseOver,
		onMouseLeave
	};
	return {
		...htmlProps,
		ref,
		role: "button",
		"data-active": dataAttr(isPressed),
		"aria-disabled": isDisabled ? "true" : void 0,
		tabIndex: trulyDisabled ? void 0 : tabIndex,
		onClick: handleClick,
		onMouseDown: handleMouseDown,
		onMouseUp: handleMouseUp,
		onKeyUp: handleKeyUp,
		onKeyDown: handleKeyDown,
		onMouseOver: handleMouseOver,
		onMouseLeave: handleMouseLeave
	};
}
var [MenuDescendantsProvider, useMenuDescendantsContext, useMenuDescendants, useMenuDescendant] = createDescendantContext();
var [MenuProvider, useMenuContext] = createContext({
	strict: false,
	name: "MenuContext"
});
function getOwnerDocument(node$1) {
	return node$1?.ownerDocument ?? document;
}
function isActiveElement(element) {
	return getOwnerDocument(element).activeElement === element;
}
function useMenu(props = {}) {
	const { id: id$3, closeOnSelect = true, closeOnBlur = true, initialFocusRef, autoSelect = true, isLazy, isOpen: isOpenProp, defaultIsOpen, onClose: onCloseProp, onOpen: onOpenProp, placement = "bottom-start", lazyBehavior = "unmount", direction: direction$1, computePositionOnMount = false, ...popperProps } = props;
	const menuRef = (0, import_react.useRef)(null);
	const buttonRef = (0, import_react.useRef)(null);
	const scrollIntoViewRef = (0, import_react.useRef)(true);
	const descendants = useMenuDescendants();
	const focusMenu = (0, import_react.useCallback)(() => {
		requestAnimationFrame(() => {
			menuRef.current?.focus({ preventScroll: false });
		});
	}, []);
	const focusFirstItem = (0, import_react.useCallback)(() => {
		const id2 = setTimeout(() => {
			if (initialFocusRef) initialFocusRef.current?.focus();
			else if (!descendants.count()) menuRef.current?.focus({ preventScroll: false });
			else {
				const first = descendants.firstEnabled();
				if (first) setFocusedIndex(first.index);
			}
		});
		timeoutIds.current.add(id2);
	}, [descendants, initialFocusRef]);
	const focusLastItem = (0, import_react.useCallback)(() => {
		const id2 = setTimeout(() => {
			if (!descendants.count()) menuRef.current?.focus({ preventScroll: false });
			else {
				const last = descendants.lastEnabled();
				if (last) setFocusedIndex(last.index);
			}
		});
		timeoutIds.current.add(id2);
	}, [descendants]);
	const { isOpen, onOpen, onClose, onToggle } = useDisclosure({
		isOpen: isOpenProp,
		defaultIsOpen,
		onClose: onCloseProp,
		onOpen: (0, import_react.useCallback)(() => {
			onOpenProp?.();
			if (autoSelect) focusFirstItem();
			else focusMenu();
		}, [
			autoSelect,
			focusFirstItem,
			focusMenu,
			onOpenProp
		])
	});
	useOutsideClick({
		enabled: isOpen && closeOnBlur,
		ref: menuRef,
		handler: (event) => {
			const target = event.composedPath?.()?.[0] ?? event.target;
			if (!buttonRef.current?.contains(target)) onClose();
		}
	});
	const popper$1 = usePopper({
		...popperProps,
		enabled: isOpen || computePositionOnMount,
		placement,
		direction: direction$1
	});
	const [focusedIndex, setFocusedIndex] = (0, import_react.useState)(-1);
	useFocusOnHide(menuRef, {
		focusRef: buttonRef,
		visible: isOpen,
		shouldFocus: true
	});
	const animationState = useAnimationState({
		isOpen,
		ref: menuRef
	});
	const [buttonId, menuId] = useIds(id$3, `menu-button`, `menu-list`);
	const openAndFocusMenu = (0, import_react.useCallback)(() => {
		onOpen();
		focusMenu();
	}, [onOpen, focusMenu]);
	const timeoutIds = (0, import_react.useRef)(/* @__PURE__ */ new Set([]));
	(0, import_react.useEffect)(() => {
		const ids = timeoutIds.current;
		return () => {
			ids.forEach((id2) => clearTimeout(id2));
			ids.clear();
		};
	}, []);
	useUpdateEffect(() => {
		if (isOpen) return;
		setFocusedIndex(-1);
		menuRef.current?.scrollTo(0, 0);
	}, [isOpen]);
	useUpdateEffect(() => {
		if (!isOpen) return;
		if (focusedIndex === -1) focusMenu();
	}, [focusedIndex, isOpen]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		descendants.item(focusedIndex)?.node?.focus({ preventScroll: !scrollIntoViewRef.current });
	}, [
		descendants,
		focusedIndex,
		isOpen
	]);
	return {
		openAndFocusMenu,
		openAndFocusFirstItem: (0, import_react.useCallback)(() => {
			onOpen();
			focusFirstItem();
		}, [focusFirstItem, onOpen]),
		openAndFocusLastItem: (0, import_react.useCallback)(() => {
			scrollIntoViewRef.current = true;
			onOpen();
			focusLastItem();
		}, [onOpen, focusLastItem]),
		onTransitionEnd: (0, import_react.useCallback)(() => {
			const doc = getOwnerDocument(menuRef.current);
			const hasFocusWithin$1 = menuRef.current?.contains(doc.activeElement);
			if (!(isOpen && !hasFocusWithin$1)) return;
			(descendants.item(focusedIndex)?.node)?.focus({ preventScroll: !scrollIntoViewRef.current });
		}, [
			isOpen,
			focusedIndex,
			descendants
		]),
		unstable__animationState: animationState,
		descendants,
		popper: popper$1,
		buttonId,
		menuId,
		forceUpdate: popper$1.forceUpdate,
		orientation: "vertical",
		isOpen,
		onToggle,
		onOpen,
		onClose,
		menuRef,
		buttonRef,
		focusedIndex,
		closeOnSelect,
		closeOnBlur,
		autoSelect,
		setFocusedIndex,
		isLazy,
		lazyBehavior,
		initialFocusRef,
		scrollIntoViewRef
	};
}
function useMenuButton(props = {}, externalRef = null) {
	const menu = useMenuContext();
	const { onToggle, popper: popper$1, openAndFocusFirstItem, openAndFocusLastItem, scrollIntoViewRef } = menu;
	const onKeyDown = (0, import_react.useCallback)((event) => {
		const eventKey = event.key;
		const action = {
			Enter: openAndFocusFirstItem,
			ArrowDown: openAndFocusFirstItem,
			ArrowUp: openAndFocusLastItem
		}[eventKey];
		if (action) {
			scrollIntoViewRef.current = true;
			event.preventDefault();
			event.stopPropagation();
			action(event);
		}
	}, [
		openAndFocusFirstItem,
		openAndFocusLastItem,
		scrollIntoViewRef
	]);
	return {
		...props,
		ref: mergeRefs(menu.buttonRef, externalRef, popper$1.referenceRef),
		id: menu.buttonId,
		"data-active": dataAttr(menu.isOpen),
		"aria-expanded": menu.isOpen,
		"aria-haspopup": "menu",
		"aria-controls": menu.menuId,
		onClick: callAllHandlers(props.onClick, onToggle),
		onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
	};
}
function isTargetMenuItem(target) {
	return isHTMLElement(target) && !!target?.getAttribute("role")?.startsWith("menuitem");
}
function useMenuList(props = {}, ref = null) {
	const menu = useMenuContext();
	if (!menu) throw new Error(`useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>`);
	const { focusedIndex, setFocusedIndex, menuRef, isOpen, onClose, menuId, isLazy, lazyBehavior, scrollIntoViewRef, unstable__animationState: animated } = menu;
	const descendants = useMenuDescendantsContext();
	const createTypeaheadHandler = useShortcut({ preventDefault: (event) => event.key !== " " && isTargetMenuItem(event.target) });
	const onKeyDown = (0, import_react.useCallback)((event) => {
		if (!event.currentTarget.contains(event.target)) return;
		const fn = {
			Tab: (event2) => event2.preventDefault(),
			Escape: (event2) => {
				event2.stopPropagation();
				onClose();
			},
			ArrowDown: () => {
				scrollIntoViewRef.current = true;
				const next$1 = descendants.nextEnabled(focusedIndex) ?? descendants.firstEnabled();
				if (next$1) setFocusedIndex(next$1.index);
			},
			ArrowUp: () => {
				scrollIntoViewRef.current = true;
				const prev$1 = descendants.prevEnabled(focusedIndex) ?? descendants.firstEnabled();
				if (prev$1) setFocusedIndex(prev$1.index);
			}
		}[event.key];
		if (fn) {
			event.preventDefault();
			fn(event);
			return;
		}
		const onTypeahead = createTypeaheadHandler((character$1) => {
			const nextItem = getNextItemFromSearch(descendants.values(), character$1, (item) => item?.node?.textContent ?? "", descendants.item(focusedIndex));
			if (nextItem) setFocusedIndex(descendants.indexOf(nextItem.node));
		});
		if (isTargetMenuItem(event.target)) onTypeahead(event);
	}, [
		descendants,
		focusedIndex,
		createTypeaheadHandler,
		onClose,
		setFocusedIndex,
		scrollIntoViewRef
	]);
	const hasBeenOpened = (0, import_react.useRef)(false);
	if (isOpen) hasBeenOpened.current = true;
	const shouldRenderChildren = lazyDisclosure({
		wasSelected: hasBeenOpened.current,
		enabled: isLazy,
		mode: lazyBehavior,
		isSelected: animated.present
	});
	return {
		...props,
		ref: mergeRefs(menuRef, ref),
		children: shouldRenderChildren ? props.children : null,
		tabIndex: -1,
		role: "menu",
		id: menuId,
		style: {
			...props.style,
			transformOrigin: "var(--popper-transform-origin)"
		},
		"aria-orientation": "vertical",
		onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
	};
}
function useMenuPositioner(props = {}) {
	const { popper: popper$1, isOpen } = useMenuContext();
	return popper$1.getPopperProps({
		...props,
		style: {
			visibility: isOpen ? "visible" : "hidden",
			...props.style
		}
	});
}
function useMenuItem(props = {}, externalRef = null) {
	const { onMouseEnter: onMouseEnterProp, onMouseMove: onMouseMoveProp, onMouseLeave: onMouseLeaveProp, onClick: onClickProp, onFocus: onFocusProp, isDisabled, isFocusable: isFocusable$1, closeOnSelect, type: typeProp, ...htmlProps } = props;
	const { setFocusedIndex, focusedIndex, closeOnSelect: menuCloseOnSelect, onClose, menuId, scrollIntoViewRef } = useMenuContext();
	const ref = (0, import_react.useRef)(null);
	const id$3 = `${menuId}-menuitem-${(0, import_react.useId)()}`;
	const { index: index$1, register } = useMenuDescendant({ disabled: isDisabled && !isFocusable$1 });
	const onMouseEnter = (0, import_react.useCallback)((event) => {
		onMouseEnterProp?.(event);
		if (isDisabled) return;
		scrollIntoViewRef.current = false;
		setFocusedIndex(index$1);
	}, [
		setFocusedIndex,
		index$1,
		isDisabled,
		onMouseEnterProp,
		scrollIntoViewRef
	]);
	const onMouseMove = (0, import_react.useCallback)((event) => {
		onMouseMoveProp?.(event);
		if (ref.current && !isActiveElement(ref.current)) onMouseEnter(event);
	}, [onMouseEnter, onMouseMoveProp]);
	const onMouseLeave = (0, import_react.useCallback)((event) => {
		onMouseLeaveProp?.(event);
		if (isDisabled) return;
		setFocusedIndex(-1);
	}, [
		setFocusedIndex,
		isDisabled,
		onMouseLeaveProp
	]);
	const onClick = (0, import_react.useCallback)((event) => {
		onClickProp?.(event);
		if (!isTargetMenuItem(event.currentTarget)) return;
		if (closeOnSelect ?? menuCloseOnSelect) onClose();
	}, [
		onClose,
		onClickProp,
		menuCloseOnSelect,
		closeOnSelect
	]);
	const onFocus = (0, import_react.useCallback)((event) => {
		onFocusProp?.(event);
		setFocusedIndex(index$1);
	}, [
		setFocusedIndex,
		onFocusProp,
		index$1
	]);
	const isFocused = index$1 === focusedIndex;
	const clickableProps = useClickable({
		onClick,
		onFocus,
		onMouseEnter,
		onMouseMove,
		onMouseLeave,
		ref: mergeRefs(register, ref, externalRef),
		isDisabled,
		isFocusable: isFocusable$1
	});
	return {
		...htmlProps,
		...clickableProps,
		type: typeProp ?? clickableProps.type,
		id: id$3,
		role: "menuitem",
		tabIndex: isFocused ? 0 : -1
	};
}
function isHTMLElement(el$1) {
	if (!isElement(el$1)) return false;
	return el$1 instanceof (el$1.ownerDocument.defaultView ?? window).HTMLElement;
}
function isElement(el$1) {
	return el$1 != null && typeof el$1 == "object" && "nodeType" in el$1 && el$1.nodeType === Node.ELEMENT_NODE;
}
var [MenuStylesProvider, useMenuStyles] = createContext({
	name: `MenuStylesContext`,
	errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
});
var Menu = (props) => {
	const { children } = props;
	const styles$1 = useMultiStyleConfig("Menu", props);
	const ownProps = omitThemingProps(props);
	const { direction: direction$1 } = useTheme();
	const { descendants, ...ctx } = useMenu({
		...ownProps,
		direction: direction$1
	});
	const context = (0, import_react.useMemo)(() => ctx, [ctx]);
	const { isOpen, onClose, forceUpdate } = context;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuDescendantsProvider, {
		value: descendants,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuProvider, {
			value: context,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuStylesProvider, {
				value: styles$1,
				children: runIfFn(children, {
					isOpen,
					onClose,
					forceUpdate
				})
			})
		})
	});
};
Menu.displayName = "Menu";
var StyledMenuButton = forwardRef((props, ref) => {
	const styles$1 = useMenuStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.button, {
		ref,
		...props,
		__css: {
			display: "inline-flex",
			appearance: "none",
			alignItems: "center",
			outline: 0,
			...styles$1.button
		}
	});
});
var MenuButton = forwardRef((props, ref) => {
	const { children, as: As, ...rest } = props;
	const buttonProps = useMenuButton(rest, ref);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As || StyledMenuButton, {
		...buttonProps,
		className: cx$1("chakra-menu__menu-button", props.className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
			__css: {
				pointerEvents: "none",
				flex: "1 1 auto",
				minW: 0
			},
			children: props.children
		})
	});
});
MenuButton.displayName = "MenuButton";
var MenuCommand = forwardRef((props, ref) => {
	const styles$1 = useMenuStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
		ref,
		...props,
		__css: styles$1.command,
		className: "chakra-menu__command"
	});
});
MenuCommand.displayName = "MenuCommand";
var MenuIcon = (props) => {
	const { className, children, ...rest } = props;
	const styles$1 = useMenuStyles();
	const child = import_react.Children.only(children);
	const clone = (0, import_react.isValidElement)(child) ? (0, import_react.cloneElement)(child, {
		focusable: "false",
		"aria-hidden": true,
		className: cx$1("chakra-menu__icon", child.props.className)
	}) : null;
	const _className = cx$1("chakra-menu__icon-wrapper", className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
		className: _className,
		...rest,
		__css: styles$1.icon,
		children: clone
	});
};
MenuIcon.displayName = "MenuIcon";
var StyledMenuItem = forwardRef((props, ref) => {
	const { type, ...rest } = props;
	const styles$1 = useMenuStyles();
	const btnType = rest.as || type ? type ?? void 0 : "button";
	const buttonStyles = (0, import_react.useMemo)(() => ({
		textDecoration: "none",
		color: "inherit",
		userSelect: "none",
		display: "flex",
		width: "100%",
		alignItems: "center",
		textAlign: "start",
		flex: "0 0 auto",
		outline: 0,
		...styles$1.item
	}), [styles$1.item]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.button, {
		ref,
		type: btnType,
		...rest,
		__css: buttonStyles
	});
});
var MenuItem = forwardRef((props, ref) => {
	const { icon, iconSpacing: iconSpacing$1 = "0.75rem", command, commandSpacing = "0.75rem", children, ...rest } = props;
	const menuitemProps = useMenuItem(rest, ref);
	const _children = icon || command ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: {
			pointerEvents: "none",
			flex: 1
		},
		children
	}) : children;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledMenuItem, {
		...menuitemProps,
		className: cx$1("chakra-menu__menuitem", menuitemProps.className),
		children: [
			icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {
				fontSize: "0.8em",
				marginEnd: iconSpacing$1,
				children: icon
			}),
			_children,
			command && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuCommand, {
				marginStart: commandSpacing,
				children: command
			})
		]
	});
});
MenuItem.displayName = "MenuItem";
var motionVariants = {
	enter: {
		visibility: "visible",
		opacity: 1,
		scale: 1,
		transition: {
			duration: .2,
			ease: [
				.4,
				0,
				.2,
				1
			]
		}
	},
	exit: {
		transitionEnd: { visibility: "hidden" },
		opacity: 0,
		scale: .8,
		transition: {
			duration: .1,
			easings: "easeOut"
		}
	}
};
var MenuTransition = chakra(motion.div);
var MenuList = forwardRef(function MenuList2(props, ref) {
	const { rootProps, motionProps, ...rest } = props;
	const { isOpen, onTransitionEnd, unstable__animationState: animated } = useMenuContext();
	const listProps = useMenuList(rest, ref);
	const positionerProps = useMenuPositioner(rootProps);
	const styles$1 = useMenuStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		...positionerProps,
		__css: { zIndex: props.zIndex ?? styles$1.list?.zIndex },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuTransition, {
			variants: motionVariants,
			initial: false,
			animate: isOpen ? "enter" : "exit",
			__css: {
				outline: 0,
				...styles$1.list
			},
			...motionProps,
			...listProps,
			className: cx$1("chakra-menu__menu-list", listProps.className),
			onUpdate: onTransitionEnd,
			onAnimationComplete: callAll(animated.onComplete, listProps.onAnimationComplete)
		})
	});
});
MenuList.displayName = "MenuList";
function getElementRef(el$1) {
	const version = "18.3.1";
	if (typeof version !== "string") return el$1?.ref;
	if (version.startsWith("18.")) return el$1?.ref;
	return el$1?.props?.ref;
}
var StackItem = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
	className: "chakra-stack__item",
	...props,
	__css: {
		display: "inline-block",
		flex: "0 0 auto",
		minWidth: 0,
		...props["__css"]
	}
});
StackItem.displayName = "StackItem";
function getDividerStyles(options) {
	const { spacing: spacing$1, direction: direction$1 } = options;
	const dividerStyles = {
		column: {
			my: spacing$1,
			mx: 0,
			borderLeftWidth: 0,
			borderBottomWidth: "1px"
		},
		"column-reverse": {
			my: spacing$1,
			mx: 0,
			borderLeftWidth: 0,
			borderBottomWidth: "1px"
		},
		row: {
			mx: spacing$1,
			my: 0,
			borderLeftWidth: "1px",
			borderBottomWidth: 0
		},
		"row-reverse": {
			mx: spacing$1,
			my: 0,
			borderLeftWidth: "1px",
			borderBottomWidth: 0
		}
	};
	return { "&": mapResponsive(direction$1, (value) => dividerStyles[value]) };
}
var Stack = forwardRef((props, ref) => {
	const { isInline, direction: directionProp, align, justify, spacing: spacing$1 = "0.5rem", wrap: wrap$1, children, divider, className, shouldWrapChildren, ...rest } = props;
	const direction$1 = isInline ? "row" : directionProp ?? "column";
	const dividerStyle = (0, import_react.useMemo)(() => getDividerStyles({
		spacing: spacing$1,
		direction: direction$1
	}), [spacing$1, direction$1]);
	const hasDivider = !!divider;
	const shouldUseChildren = !shouldWrapChildren && !hasDivider;
	const clones = (0, import_react.useMemo)(() => {
		const validChildren = getValidChildren(children);
		return shouldUseChildren ? validChildren : validChildren.map((child, index$1) => {
			const key = typeof child.key !== "undefined" ? child.key : index$1;
			const isLast = index$1 + 1 === validChildren.length;
			const _child = shouldWrapChildren ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackItem, { children: child }, key) : child;
			if (!hasDivider) return _child;
			const clonedDivider = (0, import_react.cloneElement)(divider, { __css: dividerStyle });
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [_child, isLast ? null : clonedDivider] }, key);
		});
	}, [
		divider,
		dividerStyle,
		hasDivider,
		shouldUseChildren,
		shouldWrapChildren,
		children
	]);
	const _className = cx$1("chakra-stack", className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		display: "flex",
		alignItems: align,
		justifyContent: justify,
		flexDirection: direction$1,
		flexWrap: wrap$1,
		gap: hasDivider ? void 0 : spacing$1,
		className: _className,
		...rest,
		children: clones
	});
});
Stack.displayName = "Stack";
var HStack = forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
	align: "center",
	...props,
	direction: "row",
	ref
}));
HStack.displayName = "HStack";
var VStack = forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
	align: "center",
	...props,
	direction: "column",
	ref
}));
VStack.displayName = "VStack";
var [StatStylesProvider, useStatStyles] = createContext({
	name: `StatStylesContext`,
	errorMessage: `useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `
});
var Stat = forwardRef(function Stat2(props, ref) {
	const styles$1 = useMultiStyleConfig("Stat", props);
	const statStyles = {
		position: "relative",
		flex: "1 1 0%",
		...styles$1.container
	};
	const { className, children, ...rest } = omitThemingProps(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStylesProvider, {
		value: styles$1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
			ref,
			...rest,
			className: cx$1("chakra-stat", className),
			__css: statStyles,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", { children })
		})
	});
});
Stat.displayName = "Stat";
function getToastPlacement(position$2, dir) {
	const computedPosition = position$2 ?? "bottom";
	return {
		"top-start": {
			ltr: "top-left",
			rtl: "top-right"
		},
		"top-end": {
			ltr: "top-right",
			rtl: "top-left"
		},
		"bottom-start": {
			ltr: "bottom-left",
			rtl: "bottom-right"
		},
		"bottom-end": {
			ltr: "bottom-right",
			rtl: "bottom-left"
		}
	}[computedPosition]?.[dir] ?? computedPosition;
}
function createToastFn(dir, defaultOptions) {
	const normalizeToastOptions = (options) => ({
		...defaultOptions,
		...options,
		position: getToastPlacement(options?.position ?? defaultOptions?.position, dir)
	});
	const toast = (options) => {
		const normalizedToastOptions = normalizeToastOptions(options);
		const Message = createRenderToast(normalizedToastOptions);
		return toastStore.notify(Message, normalizedToastOptions);
	};
	toast.update = (id$3, options) => {
		toastStore.update(id$3, normalizeToastOptions(options));
	};
	toast.promise = (promise, options) => {
		const id$3 = toast({
			...options.loading,
			status: "loading",
			duration: null
		});
		promise.then((data) => toast.update(id$3, {
			status: "success",
			duration: 5e3,
			...runIfFn(options.success, data)
		})).catch((error) => toast.update(id$3, {
			status: "error",
			duration: 5e3,
			...runIfFn(options.error, error)
		}));
	};
	toast.closeAll = toastStore.closeAll;
	toast.close = toastStore.close;
	toast.isActive = toastStore.isActive;
	return toast;
}
function useToast(options) {
	const { theme: theme$1 } = useChakra();
	const defaultOptions = useToastOptionContext();
	return (0, import_react.useMemo)(() => createToastFn(theme$1.direction, {
		...defaultOptions,
		...options
	}), [
		options,
		theme$1.direction,
		defaultOptions
	]);
}
var scale = {
	exit: {
		scale: .85,
		opacity: 0,
		transition: {
			opacity: {
				duration: .15,
				easings: "easeInOut"
			},
			scale: {
				duration: .2,
				easings: "easeInOut"
			}
		}
	},
	enter: {
		scale: 1,
		opacity: 1,
		transition: {
			opacity: {
				easings: "easeOut",
				duration: .2
			},
			scale: {
				duration: .2,
				ease: [
					.175,
					.885,
					.4,
					1.1
				]
			}
		}
	}
};
var getDoc = (ref) => ref.current?.ownerDocument || document;
var getWin = (ref) => ref.current?.ownerDocument?.defaultView || window;
function useTooltip(props = {}) {
	const { openDelay = 0, closeDelay = 0, closeOnClick = true, closeOnMouseDown, closeOnScroll, closeOnPointerDown = closeOnMouseDown, closeOnEsc = true, onOpen: onOpenProp, onClose: onCloseProp, placement, id: id$3, isOpen: isOpenProp, defaultIsOpen, arrowSize = 10, arrowShadowColor, arrowPadding, modifiers, isDisabled, gutter, offset: offset$1, direction: direction$1, ...htmlProps } = props;
	const { isOpen, onOpen, onClose } = useDisclosure({
		isOpen: isOpenProp,
		defaultIsOpen,
		onOpen: onOpenProp,
		onClose: onCloseProp
	});
	const { referenceRef, getPopperProps, getArrowInnerProps, getArrowProps } = usePopper({
		enabled: isOpen,
		placement,
		arrowPadding,
		modifiers,
		gutter,
		offset: offset$1,
		direction: direction$1
	});
	const uuid = (0, import_react.useId)();
	const tooltipId = `tooltip-${id$3 ?? uuid}`;
	const ref = (0, import_react.useRef)(null);
	const enterTimeout = (0, import_react.useRef)(void 0);
	const clearEnterTimeout = (0, import_react.useCallback)(() => {
		if (enterTimeout.current) {
			clearTimeout(enterTimeout.current);
			enterTimeout.current = void 0;
		}
	}, []);
	const exitTimeout = (0, import_react.useRef)(void 0);
	const clearExitTimeout = (0, import_react.useCallback)(() => {
		if (exitTimeout.current) {
			clearTimeout(exitTimeout.current);
			exitTimeout.current = void 0;
		}
	}, []);
	const closeNow = (0, import_react.useCallback)(() => {
		clearExitTimeout();
		onClose();
	}, [onClose, clearExitTimeout]);
	const dispatchCloseEvent = useCloseEvent(ref, closeNow);
	const openWithDelay = (0, import_react.useCallback)(() => {
		if (!isDisabled && !enterTimeout.current) {
			if (isOpen) dispatchCloseEvent();
			enterTimeout.current = getWin(ref).setTimeout(onOpen, openDelay);
		}
	}, [
		dispatchCloseEvent,
		isDisabled,
		isOpen,
		onOpen,
		openDelay
	]);
	const closeWithDelay = (0, import_react.useCallback)(() => {
		clearEnterTimeout();
		exitTimeout.current = getWin(ref).setTimeout(closeNow, closeDelay);
	}, [
		closeDelay,
		closeNow,
		clearEnterTimeout
	]);
	const onClick = (0, import_react.useCallback)(() => {
		if (isOpen && closeOnClick) closeWithDelay();
	}, [
		closeOnClick,
		closeWithDelay,
		isOpen
	]);
	const onPointerDown = (0, import_react.useCallback)(() => {
		if (isOpen && closeOnPointerDown) closeWithDelay();
	}, [
		closeOnPointerDown,
		closeWithDelay,
		isOpen
	]);
	const onKeyDown = (0, import_react.useCallback)((event) => {
		if (isOpen && event.key === "Escape") closeWithDelay();
	}, [isOpen, closeWithDelay]);
	useEventListener(() => getDoc(ref), "keydown", closeOnEsc ? onKeyDown : void 0);
	useEventListener(() => {
		if (!closeOnScroll) return null;
		const node$1 = ref.current;
		if (!node$1) return null;
		const scrollParent = getScrollParent(node$1);
		return scrollParent.localName === "body" ? getWin(ref) : scrollParent;
	}, "scroll", () => {
		if (isOpen && closeOnScroll) closeNow();
	}, {
		passive: true,
		capture: true
	});
	(0, import_react.useEffect)(() => {
		if (!isDisabled) return;
		clearEnterTimeout();
		if (isOpen) onClose();
	}, [
		isDisabled,
		isOpen,
		onClose,
		clearEnterTimeout
	]);
	(0, import_react.useEffect)(() => {
		return () => {
			clearEnterTimeout();
			clearExitTimeout();
		};
	}, [clearEnterTimeout, clearExitTimeout]);
	useEventListener(() => ref.current, "pointerleave", closeWithDelay);
	const getTriggerProps = (0, import_react.useCallback)((props2 = {}, _ref = null) => {
		return {
			...props2,
			ref: mergeRefs(ref, _ref, referenceRef),
			onPointerEnter: callAllHandlers(props2.onPointerEnter, (e$1) => {
				if (e$1.pointerType === "touch") return;
				openWithDelay();
			}),
			onClick: callAllHandlers(props2.onClick, onClick),
			onPointerDown: callAllHandlers(props2.onPointerDown, onPointerDown),
			onFocus: callAllHandlers(props2.onFocus, openWithDelay),
			onBlur: callAllHandlers(props2.onBlur, closeWithDelay),
			"aria-describedby": isOpen ? tooltipId : void 0
		};
	}, [
		openWithDelay,
		closeWithDelay,
		onPointerDown,
		isOpen,
		tooltipId,
		onClick,
		referenceRef
	]);
	const getTooltipPositionerProps = (0, import_react.useCallback)((props2 = {}, forwardedRef = null) => getPopperProps({
		...props2,
		style: {
			...props2.style,
			[cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
			[cssVars.arrowShadowColor.var]: arrowShadowColor
		}
	}, forwardedRef), [
		getPopperProps,
		arrowSize,
		arrowShadowColor
	]);
	return {
		isOpen,
		show: openWithDelay,
		hide: closeWithDelay,
		getTriggerProps,
		getTooltipProps: (0, import_react.useCallback)((props2 = {}, ref2 = null) => {
			const styles$1 = {
				...props2.style,
				position: "relative",
				transformOrigin: cssVars.transformOrigin.varRef
			};
			return {
				ref: ref2,
				...htmlProps,
				...props2,
				id: tooltipId,
				role: "tooltip",
				style: styles$1
			};
		}, [htmlProps, tooltipId]),
		getTooltipPositionerProps,
		getArrowProps,
		getArrowInnerProps
	};
}
var closeEventName = "chakra-ui:close-tooltip";
function useCloseEvent(ref, close) {
	(0, import_react.useEffect)(() => {
		const doc = getDoc(ref);
		doc.addEventListener(closeEventName, close);
		return () => doc.removeEventListener(closeEventName, close);
	}, [close, ref]);
	return () => {
		const doc = getDoc(ref);
		const win = getWin(ref);
		doc.dispatchEvent(new win.CustomEvent(closeEventName));
	};
}
var MotionDiv = chakra(motion.div);
var Tooltip = forwardRef((props, ref) => {
	const styles$1 = useStyleConfig("Tooltip", props);
	const ownProps = omitThemingProps(props);
	const theme$1 = useTheme();
	const { children, label, shouldWrapChildren, "aria-label": ariaLabel, hasArrow, bg: bg$1, portalProps, background: background$1, backgroundColor, bgColor, motionProps, animatePresenceProps, ...rest } = ownProps;
	const userDefinedBg = background$1 ?? backgroundColor ?? bg$1 ?? bgColor;
	if (userDefinedBg) {
		styles$1.bg = userDefinedBg;
		const bgVar = getCSSVar(theme$1, "colors", userDefinedBg);
		styles$1[cssVars.arrowBg.var] = bgVar;
	}
	const tooltip = useTooltip({
		...rest,
		direction: theme$1.direction
	});
	const shouldWrap = !(0, import_react.isValidElement)(children) || shouldWrapChildren;
	let trigger;
	if (shouldWrap) trigger = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
		display: "inline-block",
		tabIndex: 0,
		...tooltip.getTriggerProps(),
		children
	});
	else {
		const child = import_react.Children.only(children);
		trigger = (0, import_react.cloneElement)(child, tooltip.getTriggerProps(child.props, getElementRef(child)));
	}
	const hasAriaLabel = !!ariaLabel;
	const _tooltipProps = tooltip.getTooltipProps({}, ref);
	const tooltipProps = hasAriaLabel ? omit(_tooltipProps, ["role", "id"]) : _tooltipProps;
	const srOnlyProps = pick(_tooltipProps, ["role", "id"]);
	if (!label) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [trigger, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		...animatePresenceProps,
		children: tooltip.isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
			...portalProps,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
				...tooltip.getTooltipPositionerProps(),
				__css: {
					zIndex: styles$1.zIndex,
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MotionDiv, {
					variants: scale,
					initial: "exit",
					animate: "enter",
					exit: "exit",
					...motionProps,
					...tooltipProps,
					__css: styles$1,
					children: [
						label,
						hasAriaLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
							srOnly: true,
							...srOnlyProps,
							children: ariaLabel
						}),
						hasArrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
							"data-popper-arrow": true,
							className: "chakra-tooltip__arrow-wrapper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
								"data-popper-arrow-inner": true,
								className: "chakra-tooltip__arrow",
								__css: { bg: styles$1.bg }
							})
						})
					]
				})
			})
		})
	})] });
});
Tooltip.displayName = "Tooltip";
var Text = forwardRef(function Text2(props, ref) {
	const styles$1 = useStyleConfig("Text", props);
	const { className, align, decoration, casing, ...rest } = omitThemingProps(props);
	const aliasedProps = compact({
		textAlign: props.align,
		textDecoration: props.decoration,
		textTransform: props.casing
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.p, {
		ref,
		className: cx$1("chakra-text", props.className),
		...aliasedProps,
		...rest,
		__css: styles$1
	});
});
Text.displayName = "Text";
function insertWithoutScoping(cache$1, serialized) {
	if (cache$1.inserted[serialized.name] === void 0) return cache$1.insert("", serialized, cache$1.sheet, true);
}
function merge$1(registered, css$4, className) {
	var registeredStyles = [];
	var rawClassName = getRegisteredStyles$1(registered, registeredStyles, className);
	if (registeredStyles.length < 2) return className;
	return rawClassName + css$4(registeredStyles);
}
var createEmotion = function createEmotion$1(options) {
	var cache$1 = createCache(options);
	cache$1.sheet.speedy = function(value) {
		this.isSpeedy = value;
	};
	cache$1.compat = true;
	var css$4 = function css$5() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		var serialized = serializeStyles(args, cache$1.registered, void 0);
		insertStyles(cache$1, serialized, false);
		return cache$1.key + "-" + serialized.name;
	};
	return {
		css: css$4,
		cx: function cx$2() {
			for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
			return merge$1(cache$1.registered, css$4, classnames(args));
		},
		injectGlobal: function injectGlobal$1() {
			for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
			insertWithoutScoping(cache$1, serializeStyles(args, cache$1.registered));
		},
		keyframes: function keyframes$3() {
			for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
			var serialized = serializeStyles(args, cache$1.registered);
			var animation = "animation-" + serialized.name;
			insertWithoutScoping(cache$1, {
				name: serialized.name,
				styles: "@keyframes " + animation + "{" + serialized.styles + "}"
			});
			return animation;
		},
		hydrate: function hydrate$1(ids) {
			ids.forEach(function(key) {
				cache$1.inserted[key] = true;
			});
		},
		flush: function flush$1() {
			cache$1.registered = {};
			cache$1.inserted = {};
			cache$1.sheet.flush();
		},
		sheet: cache$1.sheet,
		cache: cache$1,
		getRegisteredStyles: getRegisteredStyles$1.bind(null, cache$1.registered),
		merge: merge$1.bind(null, cache$1.registered, css$4)
	};
};
var classnames = function classnames$1(args) {
	var cls = "";
	for (var i = 0; i < args.length; i++) {
		var arg = args[i];
		if (arg == null) continue;
		var toAdd = void 0;
		switch (typeof arg) {
			case "boolean": break;
			case "object":
				if (Array.isArray(arg)) toAdd = classnames$1(arg);
				else {
					toAdd = "";
					for (var k$3 in arg) if (arg[k$3] && k$3) {
						toAdd && (toAdd += " ");
						toAdd += k$3;
					}
				}
				break;
			default: toAdd = arg;
		}
		if (toAdd) {
			cls && (cls += " ");
			cls += toAdd;
		}
	}
	return cls;
}, _createEmotion = createEmotion({ key: "css" });
_createEmotion.flush;
_createEmotion.hydrate;
_createEmotion.cx;
_createEmotion.merge;
_createEmotion.getRegisteredStyles;
_createEmotion.injectGlobal;
var keyframes = _createEmotion.keyframes, css = _createEmotion.css;
_createEmotion.sheet;
_createEmotion.cache;
var ChevronRightIcon = createIcon({
	d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
	displayName: "ChevronRightIcon"
});
var ChevronDownIcon = createIcon({
	displayName: "ChevronDownIcon",
	d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
});
export { serialize as A, ChakraProvider as C, Icon as D, Spinner as E, compile as M, require_jsx_runtime as N, forwardRef as O, require_react as P, Box as S, Alert as T, Link as _, Text as a, IconButton as b, Stat as c, MenuList as d, MenuItem as f, applyStyles_default as g, createPopper as h, keyframes as i, stringify as j, useColorMode as k, VStack as l, Menu as m, ChevronRightIcon as n, Tooltip as o, MenuButton as p, css as r, useToast as s, ChevronDownIcon as t, HStack as u, Image$1 as v, require_react_dom as w, Button as x, Flex as y };
