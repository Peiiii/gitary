import { Ai as now_default, Di as isObjectLike_default, Ei as isSymbol_default, Ni as isObject_default, Oi as _baseGetTag_default, Ti as toNumber_default } from "./app-BOej-ymv.js";
import { $ as keysIn_default, Et as eq_default, G as _baseKeys_default, J as _baseRest_default, K as merge_default, Q as identity_default, St as _baseAssignValue_default, U as _getTag_default, X as constant_default, Y as _setToString_default, Z as _overRest_default, ft as isArray_default, ot as _baseUnary_default, q as _isIterateeCall_default, rt as _assignValue_default, tt as _isIndex_default, ut as isArrayLike_default, xt as _baseFor_default } from "./mermaid-b5860b54-BK-JDMC-.js";
import { S as keys_default, _ as _castPath_default, a as has_default, b as _arrayMap_default, c as _castFunction_default, d as _baseIteratee_default, f as _baseProperty_default, g as _toKey_default, h as _baseGet_default, i as values_default, l as _baseEach_default, m as _baseFlatten_default, n as reduce_default, o as filter_default, p as hasIn_default, r as isUndefined_default, s as forEach_default, t as Graph, u as _baseForOwn_default, v as toString_default, x as _baseClone_default, y as _baseFindIndex_default } from "./graphlib-D6tGGlIu.js";
var INFINITY = Infinity, MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
	if (!value) return value === 0 ? value : 0;
	value = toNumber_default(value);
	if (value === INFINITY || value === -INFINITY) return (value < 0 ? -1 : 1) * MAX_INTEGER;
	return value === value ? value : 0;
}
var toFinite_default = toFinite;
function toInteger(value) {
	var result = toFinite_default(value), remainder = result % 1;
	return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_default = toInteger;
function flatten(array) {
	return (array == null ? 0 : array.length) ? _baseFlatten_default(array, 1) : [];
}
var flatten_default = flatten;
function flatRest(func) {
	return _setToString_default(_overRest_default(func, void 0, flatten_default), func + "");
}
var _flatRest_default = flatRest;
var reHasUnicode = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function hasUnicode(string) {
	return reHasUnicode.test(string);
}
var _hasUnicode_default = hasUnicode;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
	return _baseClone_default(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_default = cloneDeep;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var defaults_default = _baseRest_default(function(object, sources) {
	object = Object(object);
	var index = -1;
	var length = sources.length;
	var guard = length > 2 ? sources[2] : void 0;
	if (guard && _isIterateeCall_default(sources[0], sources[1], guard)) length = 1;
	while (++index < length) {
		var source = sources[index];
		var props = keysIn_default(source);
		var propsIndex = -1;
		var propsLength = props.length;
		while (++propsIndex < propsLength) {
			var key = props[propsIndex];
			var value = object[key];
			if (value === void 0 || eq_default(value, objectProto[key]) && !hasOwnProperty.call(object, key)) object[key] = source[key];
		}
	}
	return object;
});
function last(array) {
	var length = array == null ? 0 : array.length;
	return length ? array[length - 1] : void 0;
}
var last_default = last;
function createFind(findIndexFunc) {
	return function(collection, predicate, fromIndex) {
		var iterable = Object(collection);
		if (!isArrayLike_default(collection)) {
			var iteratee = _baseIteratee_default(predicate, 3);
			collection = keys_default(collection);
			predicate = function(key) {
				return iteratee(iterable[key], key, iterable);
			};
		}
		var index = findIndexFunc(collection, predicate, fromIndex);
		return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
	};
}
var _createFind_default = createFind;
var nativeMax$1 = Math.max;
function findIndex(array, predicate, fromIndex) {
	var length = array == null ? 0 : array.length;
	if (!length) return -1;
	var index = fromIndex == null ? 0 : toInteger_default(fromIndex);
	if (index < 0) index = nativeMax$1(length + index, 0);
	return _baseFindIndex_default(array, _baseIteratee_default(predicate, 3), index);
}
var find_default = _createFind_default(findIndex);
function baseMap(collection, iteratee) {
	var index = -1, result = isArrayLike_default(collection) ? Array(collection.length) : [];
	_baseEach_default(collection, function(value, key, collection$1) {
		result[++index] = iteratee(value, key, collection$1);
	});
	return result;
}
var _baseMap_default = baseMap;
function map(collection, iteratee) {
	return (isArray_default(collection) ? _arrayMap_default : _baseMap_default)(collection, _baseIteratee_default(iteratee, 3));
}
var map_default = map;
function forIn(object, iteratee) {
	return object == null ? object : _baseFor_default(object, _castFunction_default(iteratee), keysIn_default);
}
var forIn_default = forIn;
function forOwn(object, iteratee) {
	return object && _baseForOwn_default(object, _castFunction_default(iteratee));
}
var forOwn_default = forOwn;
function baseGt(value, other) {
	return value > other;
}
var _baseGt_default = baseGt;
var stringTag = "[object String]";
function isString(value) {
	return typeof value == "string" || !isArray_default(value) && isObjectLike_default(value) && _baseGetTag_default(value) == stringTag;
}
var isString_default = isString;
function baseLt(value, other) {
	return value < other;
}
var _baseLt_default = baseLt;
function mapValues(object, iteratee) {
	var result = {};
	iteratee = _baseIteratee_default(iteratee, 3);
	_baseForOwn_default(object, function(value, key, object$1) {
		_baseAssignValue_default(result, key, iteratee(value, key, object$1));
	});
	return result;
}
var mapValues_default = mapValues;
function baseExtremum(array, iteratee, comparator) {
	var index = -1, length = array.length;
	while (++index < length) {
		var value = array[index], current = iteratee(value);
		if (current != null && (computed === void 0 ? current === current && !isSymbol_default(current) : comparator(current, computed))) var computed = current, result = value;
	}
	return result;
}
var _baseExtremum_default = baseExtremum;
function max(array) {
	return array && array.length ? _baseExtremum_default(array, identity_default, _baseGt_default) : void 0;
}
var max_default = max;
function min(array) {
	return array && array.length ? _baseExtremum_default(array, identity_default, _baseLt_default) : void 0;
}
var min_default = min;
function minBy(array, iteratee) {
	return array && array.length ? _baseExtremum_default(array, _baseIteratee_default(iteratee, 2), _baseLt_default) : void 0;
}
var minBy_default = minBy;
function baseSet(object, path, value, customizer) {
	if (!isObject_default(object)) return object;
	path = _castPath_default(path, object);
	var index = -1, length = path.length, lastIndex = length - 1, nested = object;
	while (nested != null && ++index < length) {
		var key = _toKey_default(path[index]), newValue = value;
		if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
		if (index != lastIndex) {
			var objValue = nested[key];
			newValue = customizer ? customizer(objValue, key, nested) : void 0;
			if (newValue === void 0) newValue = isObject_default(objValue) ? objValue : _isIndex_default(path[index + 1]) ? [] : {};
		}
		_assignValue_default(nested, key, newValue);
		nested = nested[key];
	}
	return object;
}
var _baseSet_default = baseSet;
function basePickBy(object, paths, predicate) {
	var index = -1, length = paths.length, result = {};
	while (++index < length) {
		var path = paths[index], value = _baseGet_default(object, path);
		if (predicate(value, path)) _baseSet_default(result, _castPath_default(path, object), value);
	}
	return result;
}
var _basePickBy_default = basePickBy;
function baseSortBy(array, comparer) {
	var length = array.length;
	array.sort(comparer);
	while (length--) array[length] = array[length].value;
	return array;
}
var _baseSortBy_default = baseSortBy;
function compareAscending(value, other) {
	if (value !== other) {
		var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol_default(value);
		var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol_default(other);
		if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
		if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
	}
	return 0;
}
var _compareAscending_default = compareAscending;
function compareMultiple(object, other, orders) {
	var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
	while (++index < length) {
		var result = _compareAscending_default(objCriteria[index], othCriteria[index]);
		if (result) {
			if (index >= ordersLength) return result;
			return result * (orders[index] == "desc" ? -1 : 1);
		}
	}
	return object.index - other.index;
}
var _compareMultiple_default = compareMultiple;
function baseOrderBy(collection, iteratees, orders) {
	if (iteratees.length) iteratees = _arrayMap_default(iteratees, function(iteratee) {
		if (isArray_default(iteratee)) return function(value) {
			return _baseGet_default(value, iteratee.length === 1 ? iteratee[0] : iteratee);
		};
		return iteratee;
	});
	else iteratees = [identity_default];
	var index = -1;
	iteratees = _arrayMap_default(iteratees, _baseUnary_default(_baseIteratee_default));
	return _baseSortBy_default(_baseMap_default(collection, function(value, key, collection$1) {
		var criteria = _arrayMap_default(iteratees, function(iteratee) {
			return iteratee(value);
		});
		return {
			"criteria": criteria,
			"index": ++index,
			"value": value
		};
	}), function(object, other) {
		return _compareMultiple_default(object, other, orders);
	});
}
var _baseOrderBy_default = baseOrderBy;
var _asciiSize_default = _baseProperty_default("length");
var rsAstralRange = "\\ud800-\\udfff", rsComboRange = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [
	rsNonAstral,
	rsRegional,
	rsSurrPair
].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [
	rsNonAstral + rsCombo + "?",
	rsCombo,
	rsRegional,
	rsSurrPair,
	rsAstral
].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeSize(string) {
	var result = reUnicode.lastIndex = 0;
	while (reUnicode.test(string)) ++result;
	return result;
}
var _unicodeSize_default = unicodeSize;
function stringSize(string) {
	return _hasUnicode_default(string) ? _unicodeSize_default(string) : _asciiSize_default(string);
}
var _stringSize_default = stringSize;
function basePick(object, paths) {
	return _basePickBy_default(object, paths, function(value, path) {
		return hasIn_default(object, path);
	});
}
var _basePick_default = basePick;
var pick_default = _flatRest_default(function(object, paths) {
	return object == null ? {} : _basePick_default(object, paths);
});
var nativeCeil = Math.ceil, nativeMax = Math.max;
function baseRange(start, end, step, fromRight) {
	var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
	while (length--) {
		result[fromRight ? length : ++index] = start;
		start += step;
	}
	return result;
}
var _baseRange_default = baseRange;
function createRange(fromRight) {
	return function(start, end, step) {
		if (step && typeof step != "number" && _isIterateeCall_default(start, end, step)) end = step = void 0;
		start = toFinite_default(start);
		if (end === void 0) {
			end = start;
			start = 0;
		} else end = toFinite_default(end);
		step = step === void 0 ? start < end ? 1 : -1 : toFinite_default(step);
		return _baseRange_default(start, end, step, fromRight);
	};
}
var range_default = createRange();
var mapTag = "[object Map]", setTag = "[object Set]";
function size(collection) {
	if (collection == null) return 0;
	if (isArrayLike_default(collection)) return isString_default(collection) ? _stringSize_default(collection) : collection.length;
	var tag = _getTag_default(collection);
	if (tag == mapTag || tag == setTag) return collection.size;
	return _baseKeys_default(collection).length;
}
var size_default = size;
var sortBy_default = _baseRest_default(function(collection, iteratees) {
	if (collection == null) return [];
	var length = iteratees.length;
	if (length > 1 && _isIterateeCall_default(collection, iteratees[0], iteratees[1])) iteratees = [];
	else if (length > 2 && _isIterateeCall_default(iteratees[0], iteratees[1], iteratees[2])) iteratees = [iteratees[0]];
	return _baseOrderBy_default(collection, _baseFlatten_default(iteratees, 1), []);
});
var idCounter = 0;
function uniqueId(prefix) {
	var id = ++idCounter;
	return toString_default(prefix) + id;
}
var uniqueId_default = uniqueId;
function baseZipObject(props, values, assignFunc) {
	var index = -1, length = props.length, valsLength = values.length, result = {};
	while (++index < length) {
		var value = index < valsLength ? values[index] : void 0;
		assignFunc(result, props[index], value);
	}
	return result;
}
var _baseZipObject_default = baseZipObject;
function zipObject(props, values) {
	return _baseZipObject_default(props || [], values || [], _assignValue_default);
}
var zipObject_default = zipObject;
var List = class {
	constructor() {
		var sentinel = {};
		sentinel._next = sentinel._prev = sentinel;
		this._sentinel = sentinel;
	}
	dequeue() {
		var sentinel = this._sentinel;
		var entry = sentinel._prev;
		if (entry !== sentinel) {
			unlink(entry);
			return entry;
		}
	}
	enqueue(entry) {
		var sentinel = this._sentinel;
		if (entry._prev && entry._next) unlink(entry);
		entry._next = sentinel._next;
		sentinel._next._prev = entry;
		sentinel._next = entry;
		entry._prev = sentinel;
	}
	toString() {
		var strs = [];
		var sentinel = this._sentinel;
		var curr = sentinel._prev;
		while (curr !== sentinel) {
			strs.push(JSON.stringify(curr, filterOutLinks));
			curr = curr._prev;
		}
		return "[" + strs.join(", ") + "]";
	}
};
function unlink(entry) {
	entry._prev._next = entry._next;
	entry._next._prev = entry._prev;
	delete entry._next;
	delete entry._prev;
}
function filterOutLinks(k, v) {
	if (k !== "_next" && k !== "_prev") return v;
}
var DEFAULT_WEIGHT_FN = constant_default(1);
function greedyFAS(g, weightFn) {
	if (g.nodeCount() <= 1) return [];
	var state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
	return flatten_default(map_default(doGreedyFAS(state.graph, state.buckets, state.zeroIdx), function(e) {
		return g.outEdges(e.v, e.w);
	}));
}
function doGreedyFAS(g, buckets, zeroIdx) {
	var results = [];
	var sources = buckets[buckets.length - 1];
	var sinks = buckets[0];
	var entry;
	while (g.nodeCount()) {
		while (entry = sinks.dequeue()) removeNode(g, buckets, zeroIdx, entry);
		while (entry = sources.dequeue()) removeNode(g, buckets, zeroIdx, entry);
		if (g.nodeCount()) for (var i = buckets.length - 2; i > 0; --i) {
			entry = buckets[i].dequeue();
			if (entry) {
				results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
				break;
			}
		}
	}
	return results;
}
function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
	var results = collectPredecessors ? [] : void 0;
	forEach_default(g.inEdges(entry.v), function(edge) {
		var weight = g.edge(edge);
		var uEntry = g.node(edge.v);
		if (collectPredecessors) results.push({
			v: edge.v,
			w: edge.w
		});
		uEntry.out -= weight;
		assignBucket(buckets, zeroIdx, uEntry);
	});
	forEach_default(g.outEdges(entry.v), function(edge) {
		var weight = g.edge(edge);
		var w = edge.w;
		var wEntry = g.node(w);
		wEntry["in"] -= weight;
		assignBucket(buckets, zeroIdx, wEntry);
	});
	g.removeNode(entry.v);
	return results;
}
function buildState(g, weightFn) {
	var fasGraph = new Graph();
	var maxIn = 0;
	var maxOut = 0;
	forEach_default(g.nodes(), function(v) {
		fasGraph.setNode(v, {
			v,
			in: 0,
			out: 0
		});
	});
	forEach_default(g.edges(), function(e) {
		var prevWeight = fasGraph.edge(e.v, e.w) || 0;
		var weight = weightFn(e);
		var edgeWeight = prevWeight + weight;
		fasGraph.setEdge(e.v, e.w, edgeWeight);
		maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
		maxIn = Math.max(maxIn, fasGraph.node(e.w)["in"] += weight);
	});
	var buckets = range_default(maxOut + maxIn + 3).map(function() {
		return new List();
	});
	var zeroIdx = maxIn + 1;
	forEach_default(fasGraph.nodes(), function(v) {
		assignBucket(buckets, zeroIdx, fasGraph.node(v));
	});
	return {
		graph: fasGraph,
		buckets,
		zeroIdx
	};
}
function assignBucket(buckets, zeroIdx, entry) {
	if (!entry.out) buckets[0].enqueue(entry);
	else if (!entry["in"]) buckets[buckets.length - 1].enqueue(entry);
	else buckets[entry.out - entry["in"] + zeroIdx].enqueue(entry);
}
function run$2(g) {
	forEach_default(g.graph().acyclicer === "greedy" ? greedyFAS(g, weightFn(g)) : dfsFAS(g), function(e) {
		var label = g.edge(e);
		g.removeEdge(e);
		label.forwardName = e.name;
		label.reversed = true;
		g.setEdge(e.w, e.v, label, uniqueId_default("rev"));
	});
	function weightFn(g$1) {
		return function(e) {
			return g$1.edge(e).weight;
		};
	}
}
function dfsFAS(g) {
	var fas = [];
	var stack = {};
	var visited = {};
	function dfs$2(v) {
		if (has_default(visited, v)) return;
		visited[v] = true;
		stack[v] = true;
		forEach_default(g.outEdges(v), function(e) {
			if (has_default(stack, e.w)) fas.push(e);
			else dfs$2(e.w);
		});
		delete stack[v];
	}
	forEach_default(g.nodes(), dfs$2);
	return fas;
}
function undo$2(g) {
	forEach_default(g.edges(), function(e) {
		var label = g.edge(e);
		if (label.reversed) {
			g.removeEdge(e);
			var forwardName = label.forwardName;
			delete label.reversed;
			delete label.forwardName;
			g.setEdge(e.w, e.v, label, forwardName);
		}
	});
}
function addDummyNode(g, type, attrs, name) {
	var v;
	do
		v = uniqueId_default(name);
	while (g.hasNode(v));
	attrs.dummy = type;
	g.setNode(v, attrs);
	return v;
}
function simplify(g) {
	var simplified = new Graph().setGraph(g.graph());
	forEach_default(g.nodes(), function(v) {
		simplified.setNode(v, g.node(v));
	});
	forEach_default(g.edges(), function(e) {
		var simpleLabel = simplified.edge(e.v, e.w) || {
			weight: 0,
			minlen: 1
		};
		var label = g.edge(e);
		simplified.setEdge(e.v, e.w, {
			weight: simpleLabel.weight + label.weight,
			minlen: Math.max(simpleLabel.minlen, label.minlen)
		});
	});
	return simplified;
}
function asNonCompoundGraph(g) {
	var simplified = new Graph({ multigraph: g.isMultigraph() }).setGraph(g.graph());
	forEach_default(g.nodes(), function(v) {
		if (!g.children(v).length) simplified.setNode(v, g.node(v));
	});
	forEach_default(g.edges(), function(e) {
		simplified.setEdge(e, g.edge(e));
	});
	return simplified;
}
function intersectRect(rect, point) {
	var x = rect.x;
	var y = rect.y;
	var dx = point.x - x;
	var dy = point.y - y;
	var w = rect.width / 2;
	var h = rect.height / 2;
	if (!dx && !dy) throw new Error("Not possible to find intersection inside of the rectangle");
	var sx, sy;
	if (Math.abs(dy) * w > Math.abs(dx) * h) {
		if (dy < 0) h = -h;
		sx = h * dx / dy;
		sy = h;
	} else {
		if (dx < 0) w = -w;
		sx = w;
		sy = w * dy / dx;
	}
	return {
		x: x + sx,
		y: y + sy
	};
}
function buildLayerMatrix(g) {
	var layering = map_default(range_default(maxRank(g) + 1), function() {
		return [];
	});
	forEach_default(g.nodes(), function(v) {
		var node = g.node(v);
		var rank$1 = node.rank;
		if (!isUndefined_default(rank$1)) layering[rank$1][node.order] = v;
	});
	return layering;
}
function normalizeRanks(g) {
	var min$1 = min_default(map_default(g.nodes(), function(v) {
		return g.node(v).rank;
	}));
	forEach_default(g.nodes(), function(v) {
		var node = g.node(v);
		if (has_default(node, "rank")) node.rank -= min$1;
	});
}
function removeEmptyRanks(g) {
	var offset = min_default(map_default(g.nodes(), function(v) {
		return g.node(v).rank;
	}));
	var layers = [];
	forEach_default(g.nodes(), function(v) {
		var rank$1 = g.node(v).rank - offset;
		if (!layers[rank$1]) layers[rank$1] = [];
		layers[rank$1].push(v);
	});
	var delta = 0;
	var nodeRankFactor = g.graph().nodeRankFactor;
	forEach_default(layers, function(vs, i) {
		if (isUndefined_default(vs) && i % nodeRankFactor !== 0) --delta;
		else if (delta) forEach_default(vs, function(v) {
			g.node(v).rank += delta;
		});
	});
}
function addBorderNode$1(g, prefix, rank$1, order$1) {
	var node = {
		width: 0,
		height: 0
	};
	if (arguments.length >= 4) {
		node.rank = rank$1;
		node.order = order$1;
	}
	return addDummyNode(g, "border", node, prefix);
}
function maxRank(g) {
	return max_default(map_default(g.nodes(), function(v) {
		var rank$1 = g.node(v).rank;
		if (!isUndefined_default(rank$1)) return rank$1;
	}));
}
function partition(collection, fn) {
	var result = {
		lhs: [],
		rhs: []
	};
	forEach_default(collection, function(value) {
		if (fn(value)) result.lhs.push(value);
		else result.rhs.push(value);
	});
	return result;
}
function time(name, fn) {
	var start = now_default();
	try {
		return fn();
	} finally {
		console.log(name + " time: " + (now_default() - start) + "ms");
	}
}
function notime(name, fn) {
	return fn();
}
function addBorderSegments(g) {
	function dfs$2(v) {
		var children = g.children(v);
		var node = g.node(v);
		if (children.length) forEach_default(children, dfs$2);
		if (has_default(node, "minRank")) {
			node.borderLeft = [];
			node.borderRight = [];
			for (var rank$1 = node.minRank, maxRank$1 = node.maxRank + 1; rank$1 < maxRank$1; ++rank$1) {
				addBorderNode(g, "borderLeft", "_bl", v, node, rank$1);
				addBorderNode(g, "borderRight", "_br", v, node, rank$1);
			}
		}
	}
	forEach_default(g.children(), dfs$2);
}
function addBorderNode(g, prop, prefix, sg, sgNode, rank$1) {
	var label = {
		width: 0,
		height: 0,
		rank: rank$1,
		borderType: prop
	};
	var prev = sgNode[prop][rank$1 - 1];
	var curr = addDummyNode(g, "border", label, prefix);
	sgNode[prop][rank$1] = curr;
	g.setParent(curr, sg);
	if (prev) g.setEdge(prev, curr, { weight: 1 });
}
function adjust(g) {
	var rankDir = g.graph().rankdir.toLowerCase();
	if (rankDir === "lr" || rankDir === "rl") swapWidthHeight(g);
}
function undo$1(g) {
	var rankDir = g.graph().rankdir.toLowerCase();
	if (rankDir === "bt" || rankDir === "rl") reverseY(g);
	if (rankDir === "lr" || rankDir === "rl") {
		swapXY(g);
		swapWidthHeight(g);
	}
}
function swapWidthHeight(g) {
	forEach_default(g.nodes(), function(v) {
		swapWidthHeightOne(g.node(v));
	});
	forEach_default(g.edges(), function(e) {
		swapWidthHeightOne(g.edge(e));
	});
}
function swapWidthHeightOne(attrs) {
	var w = attrs.width;
	attrs.width = attrs.height;
	attrs.height = w;
}
function reverseY(g) {
	forEach_default(g.nodes(), function(v) {
		reverseYOne(g.node(v));
	});
	forEach_default(g.edges(), function(e) {
		var edge = g.edge(e);
		forEach_default(edge.points, reverseYOne);
		if (has_default(edge, "y")) reverseYOne(edge);
	});
}
function reverseYOne(attrs) {
	attrs.y = -attrs.y;
}
function swapXY(g) {
	forEach_default(g.nodes(), function(v) {
		swapXYOne(g.node(v));
	});
	forEach_default(g.edges(), function(e) {
		var edge = g.edge(e);
		forEach_default(edge.points, swapXYOne);
		if (has_default(edge, "x")) swapXYOne(edge);
	});
}
function swapXYOne(attrs) {
	var x = attrs.x;
	attrs.x = attrs.y;
	attrs.y = x;
}
function run$1(g) {
	g.graph().dummyChains = [];
	forEach_default(g.edges(), function(edge) {
		normalizeEdge(g, edge);
	});
}
function normalizeEdge(g, e) {
	var v = e.v;
	var vRank = g.node(v).rank;
	var w = e.w;
	var wRank = g.node(w).rank;
	var name = e.name;
	var edgeLabel = g.edge(e);
	var labelRank = edgeLabel.labelRank;
	if (wRank === vRank + 1) return;
	g.removeEdge(e);
	var dummy, attrs, i;
	for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
		edgeLabel.points = [];
		attrs = {
			width: 0,
			height: 0,
			edgeLabel,
			edgeObj: e,
			rank: vRank
		};
		dummy = addDummyNode(g, "edge", attrs, "_d");
		if (vRank === labelRank) {
			attrs.width = edgeLabel.width;
			attrs.height = edgeLabel.height;
			attrs.dummy = "edge-label";
			attrs.labelpos = edgeLabel.labelpos;
		}
		g.setEdge(v, dummy, { weight: edgeLabel.weight }, name);
		if (i === 0) g.graph().dummyChains.push(dummy);
		v = dummy;
	}
	g.setEdge(v, w, { weight: edgeLabel.weight }, name);
}
function undo(g) {
	forEach_default(g.graph().dummyChains, function(v) {
		var node = g.node(v);
		var origLabel = node.edgeLabel;
		var w;
		g.setEdge(node.edgeObj, origLabel);
		while (node.dummy) {
			w = g.successors(v)[0];
			g.removeNode(v);
			origLabel.points.push({
				x: node.x,
				y: node.y
			});
			if (node.dummy === "edge-label") {
				origLabel.x = node.x;
				origLabel.y = node.y;
				origLabel.width = node.width;
				origLabel.height = node.height;
			}
			v = w;
			node = g.node(v);
		}
	});
}
function longestPath(g) {
	var visited = {};
	function dfs$2(v) {
		var label = g.node(v);
		if (has_default(visited, v)) return label.rank;
		visited[v] = true;
		var rank$1 = min_default(map_default(g.outEdges(v), function(e) {
			return dfs$2(e.w) - g.edge(e).minlen;
		}));
		if (rank$1 === Number.POSITIVE_INFINITY || rank$1 === void 0 || rank$1 === null) rank$1 = 0;
		return label.rank = rank$1;
	}
	forEach_default(g.sources(), dfs$2);
}
function slack(g, e) {
	return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
}
function feasibleTree(g) {
	var t = new Graph({ directed: false });
	var start = g.nodes()[0];
	var size$1 = g.nodeCount();
	t.setNode(start, {});
	var edge, delta;
	while (tightTree(t, g) < size$1) {
		edge = findMinSlackEdge(t, g);
		delta = t.hasNode(edge.v) ? slack(g, edge) : -slack(g, edge);
		shiftRanks(t, g, delta);
	}
	return t;
}
function tightTree(t, g) {
	function dfs$2(v) {
		forEach_default(g.nodeEdges(v), function(e) {
			var edgeV = e.v, w = v === edgeV ? e.w : edgeV;
			if (!t.hasNode(w) && !slack(g, e)) {
				t.setNode(w, {});
				t.setEdge(v, w, {});
				dfs$2(w);
			}
		});
	}
	forEach_default(t.nodes(), dfs$2);
	return t.nodeCount();
}
function findMinSlackEdge(t, g) {
	return minBy_default(g.edges(), function(e) {
		if (t.hasNode(e.v) !== t.hasNode(e.w)) return slack(g, e);
	});
}
function shiftRanks(t, g, delta) {
	forEach_default(t.nodes(), function(v) {
		g.node(v).rank += delta;
	});
}
constant_default(1);
constant_default(1);
topsort.CycleException = CycleException;
function topsort(g) {
	var visited = {};
	var stack = {};
	var results = [];
	function visit(node) {
		if (has_default(stack, node)) throw new CycleException();
		if (!has_default(visited, node)) {
			stack[node] = true;
			visited[node] = true;
			forEach_default(g.predecessors(node), visit);
			delete stack[node];
			results.push(node);
		}
	}
	forEach_default(g.sinks(), visit);
	if (size_default(visited) !== g.nodeCount()) throw new CycleException();
	return results;
}
function CycleException() {}
CycleException.prototype = /* @__PURE__ */ new Error();
function dfs$1(g, vs, order$1) {
	if (!isArray_default(vs)) vs = [vs];
	var navigation = (g.isDirected() ? g.successors : g.neighbors).bind(g);
	var acc = [];
	var visited = {};
	forEach_default(vs, function(v) {
		if (!g.hasNode(v)) throw new Error("Graph does not have node: " + v);
		doDfs(g, v, order$1 === "post", visited, navigation, acc);
	});
	return acc;
}
function doDfs(g, v, postorder$2, visited, navigation, acc) {
	if (!has_default(visited, v)) {
		visited[v] = true;
		if (!postorder$2) acc.push(v);
		forEach_default(navigation(v), function(w) {
			doDfs(g, w, postorder$2, visited, navigation, acc);
		});
		if (postorder$2) acc.push(v);
	}
}
function postorder$1(g, vs) {
	return dfs$1(g, vs, "post");
}
function preorder(g, vs) {
	return dfs$1(g, vs, "pre");
}
networkSimplex.initLowLimValues = initLowLimValues;
networkSimplex.initCutValues = initCutValues;
networkSimplex.calcCutValue = calcCutValue;
networkSimplex.leaveEdge = leaveEdge;
networkSimplex.enterEdge = enterEdge;
networkSimplex.exchangeEdges = exchangeEdges;
function networkSimplex(g) {
	g = simplify(g);
	longestPath(g);
	var t = feasibleTree(g);
	initLowLimValues(t);
	initCutValues(t, g);
	var e, f;
	while (e = leaveEdge(t)) {
		f = enterEdge(t, g, e);
		exchangeEdges(t, g, e, f);
	}
}
function initCutValues(t, g) {
	var vs = postorder$1(t, t.nodes());
	vs = vs.slice(0, vs.length - 1);
	forEach_default(vs, function(v) {
		assignCutValue(t, g, v);
	});
}
function assignCutValue(t, g, child) {
	var parent = t.node(child).parent;
	t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
}
function calcCutValue(t, g, child) {
	var parent = t.node(child).parent;
	var childIsTail = true;
	var graphEdge = g.edge(child, parent);
	var cutValue = 0;
	if (!graphEdge) {
		childIsTail = false;
		graphEdge = g.edge(parent, child);
	}
	cutValue = graphEdge.weight;
	forEach_default(g.nodeEdges(child), function(e) {
		var isOutEdge = e.v === child, other = isOutEdge ? e.w : e.v;
		if (other !== parent) {
			var pointsToHead = isOutEdge === childIsTail, otherWeight = g.edge(e).weight;
			cutValue += pointsToHead ? otherWeight : -otherWeight;
			if (isTreeEdge(t, child, other)) {
				var otherCutValue = t.edge(child, other).cutvalue;
				cutValue += pointsToHead ? -otherCutValue : otherCutValue;
			}
		}
	});
	return cutValue;
}
function initLowLimValues(tree, root) {
	if (arguments.length < 2) root = tree.nodes()[0];
	dfsAssignLowLim(tree, {}, 1, root);
}
function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
	var low = nextLim;
	var label = tree.node(v);
	visited[v] = true;
	forEach_default(tree.neighbors(v), function(w) {
		if (!has_default(visited, w)) nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
	});
	label.low = low;
	label.lim = nextLim++;
	if (parent) label.parent = parent;
	else delete label.parent;
	return nextLim;
}
function leaveEdge(tree) {
	return find_default(tree.edges(), function(e) {
		return tree.edge(e).cutvalue < 0;
	});
}
function enterEdge(t, g, edge) {
	var v = edge.v;
	var w = edge.w;
	if (!g.hasEdge(v, w)) {
		v = edge.w;
		w = edge.v;
	}
	var vLabel = t.node(v);
	var wLabel = t.node(w);
	var tailLabel = vLabel;
	var flip = false;
	if (vLabel.lim > wLabel.lim) {
		tailLabel = wLabel;
		flip = true;
	}
	return minBy_default(filter_default(g.edges(), function(edge$1) {
		return flip === isDescendant(t, t.node(edge$1.v), tailLabel) && flip !== isDescendant(t, t.node(edge$1.w), tailLabel);
	}), function(edge$1) {
		return slack(g, edge$1);
	});
}
function exchangeEdges(t, g, e, f) {
	var v = e.v;
	var w = e.w;
	t.removeEdge(v, w);
	t.setEdge(f.v, f.w, {});
	initLowLimValues(t);
	initCutValues(t, g);
	updateRanks(t, g);
}
function updateRanks(t, g) {
	var vs = preorder(t, find_default(t.nodes(), function(v) {
		return !g.node(v).parent;
	}));
	vs = vs.slice(1);
	forEach_default(vs, function(v) {
		var parent = t.node(v).parent, edge = g.edge(v, parent), flipped = false;
		if (!edge) {
			edge = g.edge(parent, v);
			flipped = true;
		}
		g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
	});
}
function isTreeEdge(tree, u, v) {
	return tree.hasEdge(u, v);
}
function isDescendant(tree, vLabel, rootLabel) {
	return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
}
function rank(g) {
	switch (g.graph().ranker) {
		case "network-simplex":
			networkSimplexRanker(g);
			break;
		case "tight-tree":
			tightTreeRanker(g);
			break;
		case "longest-path":
			longestPathRanker(g);
			break;
		default: networkSimplexRanker(g);
	}
}
var longestPathRanker = longestPath;
function tightTreeRanker(g) {
	longestPath(g);
	feasibleTree(g);
}
function networkSimplexRanker(g) {
	networkSimplex(g);
}
function run(g) {
	var root = addDummyNode(g, "root", {}, "_root");
	var depths = treeDepths(g);
	var height = max_default(values_default(depths)) - 1;
	var nodeSep = 2 * height + 1;
	g.graph().nestingRoot = root;
	forEach_default(g.edges(), function(e) {
		g.edge(e).minlen *= nodeSep;
	});
	var weight = sumWeights(g) + 1;
	forEach_default(g.children(), function(child) {
		dfs(g, root, nodeSep, weight, height, depths, child);
	});
	g.graph().nodeRankFactor = nodeSep;
}
function dfs(g, root, nodeSep, weight, height, depths, v) {
	var children = g.children(v);
	if (!children.length) {
		if (v !== root) g.setEdge(root, v, {
			weight: 0,
			minlen: nodeSep
		});
		return;
	}
	var top = addBorderNode$1(g, "_bt");
	var bottom = addBorderNode$1(g, "_bb");
	var label = g.node(v);
	g.setParent(top, v);
	label.borderTop = top;
	g.setParent(bottom, v);
	label.borderBottom = bottom;
	forEach_default(children, function(child) {
		dfs(g, root, nodeSep, weight, height, depths, child);
		var childNode = g.node(child);
		var childTop = childNode.borderTop ? childNode.borderTop : child;
		var childBottom = childNode.borderBottom ? childNode.borderBottom : child;
		var thisWeight = childNode.borderTop ? weight : 2 * weight;
		var minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;
		g.setEdge(top, childTop, {
			weight: thisWeight,
			minlen,
			nestingEdge: true
		});
		g.setEdge(childBottom, bottom, {
			weight: thisWeight,
			minlen,
			nestingEdge: true
		});
	});
	if (!g.parent(v)) g.setEdge(root, top, {
		weight: 0,
		minlen: height + depths[v]
	});
}
function treeDepths(g) {
	var depths = {};
	function dfs$2(v, depth) {
		var children = g.children(v);
		if (children && children.length) forEach_default(children, function(child) {
			dfs$2(child, depth + 1);
		});
		depths[v] = depth;
	}
	forEach_default(g.children(), function(v) {
		dfs$2(v, 1);
	});
	return depths;
}
function sumWeights(g) {
	return reduce_default(g.edges(), function(acc, e) {
		return acc + g.edge(e).weight;
	}, 0);
}
function cleanup(g) {
	var graphLabel = g.graph();
	g.removeNode(graphLabel.nestingRoot);
	delete graphLabel.nestingRoot;
	forEach_default(g.edges(), function(e) {
		if (g.edge(e).nestingEdge) g.removeEdge(e);
	});
}
function addSubgraphConstraints(g, cg, vs) {
	var prev = {}, rootPrev;
	forEach_default(vs, function(v) {
		var child = g.parent(v), parent, prevChild;
		while (child) {
			parent = g.parent(child);
			if (parent) {
				prevChild = prev[parent];
				prev[parent] = child;
			} else {
				prevChild = rootPrev;
				rootPrev = child;
			}
			if (prevChild && prevChild !== child) {
				cg.setEdge(prevChild, child);
				return;
			}
			child = parent;
		}
	});
}
function buildLayerGraph(g, rank$1, relationship) {
	var root = createRootNode(g), result = new Graph({ compound: true }).setGraph({ root }).setDefaultNodeLabel(function(v) {
		return g.node(v);
	});
	forEach_default(g.nodes(), function(v) {
		var node = g.node(v), parent = g.parent(v);
		if (node.rank === rank$1 || node.minRank <= rank$1 && rank$1 <= node.maxRank) {
			result.setNode(v);
			result.setParent(v, parent || root);
			forEach_default(g[relationship](v), function(e) {
				var u = e.v === v ? e.w : e.v, edge = result.edge(u, v), weight = !isUndefined_default(edge) ? edge.weight : 0;
				result.setEdge(u, v, { weight: g.edge(e).weight + weight });
			});
			if (has_default(node, "minRank")) result.setNode(v, {
				borderLeft: node.borderLeft[rank$1],
				borderRight: node.borderRight[rank$1]
			});
		}
	});
	return result;
}
function createRootNode(g) {
	var v;
	while (g.hasNode(v = uniqueId_default("_root")));
	return v;
}
function crossCount(g, layering) {
	var cc = 0;
	for (var i = 1; i < layering.length; ++i) cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
	return cc;
}
function twoLayerCrossCount(g, northLayer, southLayer) {
	var southPos = zipObject_default(southLayer, map_default(southLayer, function(v, i) {
		return i;
	}));
	var southEntries = flatten_default(map_default(northLayer, function(v) {
		return sortBy_default(map_default(g.outEdges(v), function(e) {
			return {
				pos: southPos[e.w],
				weight: g.edge(e).weight
			};
		}), "pos");
	}));
	var firstIndex = 1;
	while (firstIndex < southLayer.length) firstIndex <<= 1;
	var treeSize = 2 * firstIndex - 1;
	firstIndex -= 1;
	var tree = map_default(new Array(treeSize), function() {
		return 0;
	});
	var cc = 0;
	forEach_default(southEntries.forEach(function(entry) {
		var index = entry.pos + firstIndex;
		tree[index] += entry.weight;
		var weightSum = 0;
		while (index > 0) {
			if (index % 2) weightSum += tree[index + 1];
			index = index - 1 >> 1;
			tree[index] += entry.weight;
		}
		cc += entry.weight * weightSum;
	}));
	return cc;
}
function initOrder(g) {
	var visited = {};
	var simpleNodes = filter_default(g.nodes(), function(v) {
		return !g.children(v).length;
	});
	var layers = map_default(range_default(max_default(map_default(simpleNodes, function(v) {
		return g.node(v).rank;
	})) + 1), function() {
		return [];
	});
	function dfs$2(v) {
		if (has_default(visited, v)) return;
		visited[v] = true;
		layers[g.node(v).rank].push(v);
		forEach_default(g.successors(v), dfs$2);
	}
	forEach_default(sortBy_default(simpleNodes, function(v) {
		return g.node(v).rank;
	}), dfs$2);
	return layers;
}
function barycenter(g, movable) {
	return map_default(movable, function(v) {
		var inV = g.inEdges(v);
		if (!inV.length) return { v };
		else {
			var result = reduce_default(inV, function(acc, e) {
				var edge = g.edge(e), nodeU = g.node(e.v);
				return {
					sum: acc.sum + edge.weight * nodeU.order,
					weight: acc.weight + edge.weight
				};
			}, {
				sum: 0,
				weight: 0
			});
			return {
				v,
				barycenter: result.sum / result.weight,
				weight: result.weight
			};
		}
	});
}
function resolveConflicts(entries, cg) {
	var mappedEntries = {};
	forEach_default(entries, function(entry, i) {
		var tmp = mappedEntries[entry.v] = {
			indegree: 0,
			in: [],
			out: [],
			vs: [entry.v],
			i
		};
		if (!isUndefined_default(entry.barycenter)) {
			tmp.barycenter = entry.barycenter;
			tmp.weight = entry.weight;
		}
	});
	forEach_default(cg.edges(), function(e) {
		var entryV = mappedEntries[e.v];
		var entryW = mappedEntries[e.w];
		if (!isUndefined_default(entryV) && !isUndefined_default(entryW)) {
			entryW.indegree++;
			entryV.out.push(mappedEntries[e.w]);
		}
	});
	return doResolveConflicts(filter_default(mappedEntries, function(entry) {
		return !entry.indegree;
	}));
}
function doResolveConflicts(sourceSet) {
	var entries = [];
	function handleIn(vEntry) {
		return function(uEntry) {
			if (uEntry.merged) return;
			if (isUndefined_default(uEntry.barycenter) || isUndefined_default(vEntry.barycenter) || uEntry.barycenter >= vEntry.barycenter) mergeEntries(vEntry, uEntry);
		};
	}
	function handleOut(vEntry) {
		return function(wEntry) {
			wEntry["in"].push(vEntry);
			if (--wEntry.indegree === 0) sourceSet.push(wEntry);
		};
	}
	while (sourceSet.length) {
		var entry = sourceSet.pop();
		entries.push(entry);
		forEach_default(entry["in"].reverse(), handleIn(entry));
		forEach_default(entry.out, handleOut(entry));
	}
	return map_default(filter_default(entries, function(entry$1) {
		return !entry$1.merged;
	}), function(entry$1) {
		return pick_default(entry$1, [
			"vs",
			"i",
			"barycenter",
			"weight"
		]);
	});
}
function mergeEntries(target, source) {
	var sum = 0;
	var weight = 0;
	if (target.weight) {
		sum += target.barycenter * target.weight;
		weight += target.weight;
	}
	if (source.weight) {
		sum += source.barycenter * source.weight;
		weight += source.weight;
	}
	target.vs = source.vs.concat(target.vs);
	target.barycenter = sum / weight;
	target.weight = weight;
	target.i = Math.min(source.i, target.i);
	source.merged = true;
}
function sort(entries, biasRight) {
	var parts = partition(entries, function(entry) {
		return has_default(entry, "barycenter");
	});
	var sortable = parts.lhs, unsortable = sortBy_default(parts.rhs, function(entry) {
		return -entry.i;
	}), vs = [], sum = 0, weight = 0, vsIndex = 0;
	sortable.sort(compareWithBias(!!biasRight));
	vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
	forEach_default(sortable, function(entry) {
		vsIndex += entry.vs.length;
		vs.push(entry.vs);
		sum += entry.barycenter * entry.weight;
		weight += entry.weight;
		vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
	});
	var result = { vs: flatten_default(vs) };
	if (weight) {
		result.barycenter = sum / weight;
		result.weight = weight;
	}
	return result;
}
function consumeUnsortable(vs, unsortable, index) {
	var last$1;
	while (unsortable.length && (last$1 = last_default(unsortable)).i <= index) {
		unsortable.pop();
		vs.push(last$1.vs);
		index++;
	}
	return index;
}
function compareWithBias(bias) {
	return function(entryV, entryW) {
		if (entryV.barycenter < entryW.barycenter) return -1;
		else if (entryV.barycenter > entryW.barycenter) return 1;
		return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
	};
}
function sortSubgraph(g, v, cg, biasRight) {
	var movable = g.children(v);
	var node = g.node(v);
	var bl = node ? node.borderLeft : void 0;
	var br = node ? node.borderRight : void 0;
	var subgraphs = {};
	if (bl) movable = filter_default(movable, function(w) {
		return w !== bl && w !== br;
	});
	var barycenters = barycenter(g, movable);
	forEach_default(barycenters, function(entry) {
		if (g.children(entry.v).length) {
			var subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
			subgraphs[entry.v] = subgraphResult;
			if (has_default(subgraphResult, "barycenter")) mergeBarycenters(entry, subgraphResult);
		}
	});
	var entries = resolveConflicts(barycenters, cg);
	expandSubgraphs(entries, subgraphs);
	var result = sort(entries, biasRight);
	if (bl) {
		result.vs = flatten_default([
			bl,
			result.vs,
			br
		]);
		if (g.predecessors(bl).length) {
			var blPred = g.node(g.predecessors(bl)[0]), brPred = g.node(g.predecessors(br)[0]);
			if (!has_default(result, "barycenter")) {
				result.barycenter = 0;
				result.weight = 0;
			}
			result.barycenter = (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
			result.weight += 2;
		}
	}
	return result;
}
function expandSubgraphs(entries, subgraphs) {
	forEach_default(entries, function(entry) {
		entry.vs = flatten_default(entry.vs.map(function(v) {
			if (subgraphs[v]) return subgraphs[v].vs;
			return v;
		}));
	});
}
function mergeBarycenters(target, other) {
	if (!isUndefined_default(target.barycenter)) {
		target.barycenter = (target.barycenter * target.weight + other.barycenter * other.weight) / (target.weight + other.weight);
		target.weight += other.weight;
	} else {
		target.barycenter = other.barycenter;
		target.weight = other.weight;
	}
}
function order(g) {
	var maxRank$1 = maxRank(g), downLayerGraphs = buildLayerGraphs(g, range_default(1, maxRank$1 + 1), "inEdges"), upLayerGraphs = buildLayerGraphs(g, range_default(maxRank$1 - 1, -1, -1), "outEdges");
	var layering = initOrder(g);
	assignOrder(g, layering);
	var bestCC = Number.POSITIVE_INFINITY, best;
	for (var i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
		sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);
		layering = buildLayerMatrix(g);
		var cc = crossCount(g, layering);
		if (cc < bestCC) {
			lastBest = 0;
			best = cloneDeep_default(layering);
			bestCC = cc;
		}
	}
	assignOrder(g, best);
}
function buildLayerGraphs(g, ranks, relationship) {
	return map_default(ranks, function(rank$1) {
		return buildLayerGraph(g, rank$1, relationship);
	});
}
function sweepLayerGraphs(layerGraphs, biasRight) {
	var cg = new Graph();
	forEach_default(layerGraphs, function(lg) {
		var root = lg.graph().root;
		var sorted = sortSubgraph(lg, root, cg, biasRight);
		forEach_default(sorted.vs, function(v, i) {
			lg.node(v).order = i;
		});
		addSubgraphConstraints(lg, cg, sorted.vs);
	});
}
function assignOrder(g, layering) {
	forEach_default(layering, function(layer) {
		forEach_default(layer, function(v, i) {
			g.node(v).order = i;
		});
	});
}
function parentDummyChains(g) {
	var postorderNums = postorder(g);
	forEach_default(g.graph().dummyChains, function(v) {
		var node = g.node(v);
		var edgeObj = node.edgeObj;
		var pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w);
		var path = pathData.path;
		var lca = pathData.lca;
		var pathIdx = 0;
		var pathV = path[pathIdx];
		var ascending = true;
		while (v !== edgeObj.w) {
			node = g.node(v);
			if (ascending) {
				while ((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node.rank) pathIdx++;
				if (pathV === lca) ascending = false;
			}
			if (!ascending) {
				while (pathIdx < path.length - 1 && g.node(pathV = path[pathIdx + 1]).minRank <= node.rank) pathIdx++;
				pathV = path[pathIdx];
			}
			g.setParent(v, pathV);
			v = g.successors(v)[0];
		}
	});
}
function findPath(g, postorderNums, v, w) {
	var vPath = [];
	var wPath = [];
	var low = Math.min(postorderNums[v].low, postorderNums[w].low);
	var lim = Math.max(postorderNums[v].lim, postorderNums[w].lim);
	var parent;
	var lca;
	parent = v;
	do {
		parent = g.parent(parent);
		vPath.push(parent);
	} while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
	lca = parent;
	parent = w;
	while ((parent = g.parent(parent)) !== lca) wPath.push(parent);
	return {
		path: vPath.concat(wPath.reverse()),
		lca
	};
}
function postorder(g) {
	var result = {};
	var lim = 0;
	function dfs$2(v) {
		var low = lim;
		forEach_default(g.children(v), dfs$2);
		result[v] = {
			low,
			lim: lim++
		};
	}
	forEach_default(g.children(), dfs$2);
	return result;
}
function findType1Conflicts(g, layering) {
	var conflicts = {};
	function visitLayer(prevLayer, layer) {
		var k0 = 0, scanPos = 0, prevLayerLength = prevLayer.length, lastNode = last_default(layer);
		forEach_default(layer, function(v, i) {
			var w = findOtherInnerSegmentNode(g, v), k1 = w ? g.node(w).order : prevLayerLength;
			if (w || v === lastNode) {
				forEach_default(layer.slice(scanPos, i + 1), function(scanNode) {
					forEach_default(g.predecessors(scanNode), function(u) {
						var uLabel = g.node(u), uPos = uLabel.order;
						if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) addConflict(conflicts, u, scanNode);
					});
				});
				scanPos = i + 1;
				k0 = k1;
			}
		});
		return layer;
	}
	reduce_default(layering, visitLayer);
	return conflicts;
}
function findType2Conflicts(g, layering) {
	var conflicts = {};
	function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
		var v;
		forEach_default(range_default(southPos, southEnd), function(i) {
			v = south[i];
			if (g.node(v).dummy) forEach_default(g.predecessors(v), function(u) {
				var uNode = g.node(u);
				if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) addConflict(conflicts, u, v);
			});
		});
	}
	function visitLayer(north, south) {
		var prevNorthPos = -1, nextNorthPos, southPos = 0;
		forEach_default(south, function(v, southLookahead) {
			if (g.node(v).dummy === "border") {
				var predecessors = g.predecessors(v);
				if (predecessors.length) {
					nextNorthPos = g.node(predecessors[0]).order;
					scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
					southPos = southLookahead;
					prevNorthPos = nextNorthPos;
				}
			}
			scan(south, southPos, south.length, nextNorthPos, north.length);
		});
		return south;
	}
	reduce_default(layering, visitLayer);
	return conflicts;
}
function findOtherInnerSegmentNode(g, v) {
	if (g.node(v).dummy) return find_default(g.predecessors(v), function(u) {
		return g.node(u).dummy;
	});
}
function addConflict(conflicts, v, w) {
	if (v > w) {
		var tmp = v;
		v = w;
		w = tmp;
	}
	var conflictsV = conflicts[v];
	if (!conflictsV) conflicts[v] = conflictsV = {};
	conflictsV[w] = true;
}
function hasConflict(conflicts, v, w) {
	if (v > w) {
		var tmp = v;
		v = w;
		w = tmp;
	}
	return has_default(conflicts[v], w);
}
function verticalAlignment(g, layering, conflicts, neighborFn) {
	var root = {}, align = {}, pos = {};
	forEach_default(layering, function(layer) {
		forEach_default(layer, function(v, order$1) {
			root[v] = v;
			align[v] = v;
			pos[v] = order$1;
		});
	});
	forEach_default(layering, function(layer) {
		var prevIdx = -1;
		forEach_default(layer, function(v) {
			var ws = neighborFn(v);
			if (ws.length) {
				ws = sortBy_default(ws, function(w$1) {
					return pos[w$1];
				});
				var mp = (ws.length - 1) / 2;
				for (var i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
					var w = ws[i];
					if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
						align[w] = v;
						align[v] = root[v] = root[w];
						prevIdx = pos[w];
					}
				}
			}
		});
	});
	return {
		root,
		align
	};
}
function horizontalCompaction(g, layering, root, align, reverseSep) {
	var xs = {}, blockG = buildBlockGraph(g, layering, root, reverseSep), borderType = reverseSep ? "borderLeft" : "borderRight";
	function iterate(setXsFunc, nextNodesFunc) {
		var stack = blockG.nodes();
		var elem = stack.pop();
		var visited = {};
		while (elem) {
			if (visited[elem]) setXsFunc(elem);
			else {
				visited[elem] = true;
				stack.push(elem);
				stack = stack.concat(nextNodesFunc(elem));
			}
			elem = stack.pop();
		}
	}
	function pass1(elem) {
		xs[elem] = blockG.inEdges(elem).reduce(function(acc, e) {
			return Math.max(acc, xs[e.v] + blockG.edge(e));
		}, 0);
	}
	function pass2(elem) {
		var min$1 = blockG.outEdges(elem).reduce(function(acc, e) {
			return Math.min(acc, xs[e.w] - blockG.edge(e));
		}, Number.POSITIVE_INFINITY);
		var node = g.node(elem);
		if (min$1 !== Number.POSITIVE_INFINITY && node.borderType !== borderType) xs[elem] = Math.max(xs[elem], min$1);
	}
	iterate(pass1, blockG.predecessors.bind(blockG));
	iterate(pass2, blockG.successors.bind(blockG));
	forEach_default(align, function(v) {
		xs[v] = xs[root[v]];
	});
	return xs;
}
function buildBlockGraph(g, layering, root, reverseSep) {
	var blockGraph = new Graph(), graphLabel = g.graph(), sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);
	forEach_default(layering, function(layer) {
		var u;
		forEach_default(layer, function(v) {
			var vRoot = root[v];
			blockGraph.setNode(vRoot);
			if (u) {
				var uRoot = root[u], prevMax = blockGraph.edge(uRoot, vRoot);
				blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
			}
			u = v;
		});
	});
	return blockGraph;
}
function findSmallestWidthAlignment(g, xss) {
	return minBy_default(values_default(xss), function(xs) {
		var max$1 = Number.NEGATIVE_INFINITY;
		var min$1 = Number.POSITIVE_INFINITY;
		forIn_default(xs, function(x, v) {
			var halfWidth = width(g, v) / 2;
			max$1 = Math.max(x + halfWidth, max$1);
			min$1 = Math.min(x - halfWidth, min$1);
		});
		return max$1 - min$1;
	});
}
function alignCoordinates(xss, alignTo) {
	var alignToVals = values_default(alignTo), alignToMin = min_default(alignToVals), alignToMax = max_default(alignToVals);
	forEach_default(["u", "d"], function(vert) {
		forEach_default(["l", "r"], function(horiz) {
			var alignment = vert + horiz, xs = xss[alignment], delta;
			if (xs === alignTo) return;
			var xsVals = values_default(xs);
			delta = horiz === "l" ? alignToMin - min_default(xsVals) : alignToMax - max_default(xsVals);
			if (delta) xss[alignment] = mapValues_default(xs, function(x) {
				return x + delta;
			});
		});
	});
}
function balance(xss, align) {
	return mapValues_default(xss.ul, function(ignore, v) {
		if (align) return xss[align.toLowerCase()][v];
		else {
			var xs = sortBy_default(map_default(xss, v));
			return (xs[1] + xs[2]) / 2;
		}
	});
}
function positionX(g) {
	var layering = buildLayerMatrix(g);
	var conflicts = merge_default(findType1Conflicts(g, layering), findType2Conflicts(g, layering));
	var xss = {};
	var adjustedLayering;
	forEach_default(["u", "d"], function(vert) {
		adjustedLayering = vert === "u" ? layering : values_default(layering).reverse();
		forEach_default(["l", "r"], function(horiz) {
			if (horiz === "r") adjustedLayering = map_default(adjustedLayering, function(inner) {
				return values_default(inner).reverse();
			});
			var neighborFn = (vert === "u" ? g.predecessors : g.successors).bind(g);
			var align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
			var xs = horizontalCompaction(g, adjustedLayering, align.root, align.align, horiz === "r");
			if (horiz === "r") xs = mapValues_default(xs, function(x) {
				return -x;
			});
			xss[vert + horiz] = xs;
		});
	});
	alignCoordinates(xss, findSmallestWidthAlignment(g, xss));
	return balance(xss, g.graph().align);
}
function sep(nodeSep, edgeSep, reverseSep) {
	return function(g, v, w) {
		var vLabel = g.node(v);
		var wLabel = g.node(w);
		var sum = 0;
		var delta;
		sum += vLabel.width / 2;
		if (has_default(vLabel, "labelpos")) switch (vLabel.labelpos.toLowerCase()) {
			case "l":
				delta = -vLabel.width / 2;
				break;
			case "r":
				delta = vLabel.width / 2;
				break;
		}
		if (delta) sum += reverseSep ? delta : -delta;
		delta = 0;
		sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
		sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;
		sum += wLabel.width / 2;
		if (has_default(wLabel, "labelpos")) switch (wLabel.labelpos.toLowerCase()) {
			case "l":
				delta = wLabel.width / 2;
				break;
			case "r":
				delta = -wLabel.width / 2;
				break;
		}
		if (delta) sum += reverseSep ? delta : -delta;
		delta = 0;
		return sum;
	};
}
function width(g, v) {
	return g.node(v).width;
}
function position(g) {
	g = asNonCompoundGraph(g);
	positionY(g);
	forOwn_default(positionX(g), function(x, v) {
		g.node(v).x = x;
	});
}
function positionY(g) {
	var layering = buildLayerMatrix(g);
	var rankSep = g.graph().ranksep;
	var prevY = 0;
	forEach_default(layering, function(layer) {
		var maxHeight = max_default(map_default(layer, function(v) {
			return g.node(v).height;
		}));
		forEach_default(layer, function(v) {
			g.node(v).y = prevY + maxHeight / 2;
		});
		prevY += maxHeight + rankSep;
	});
}
function layout(g, opts) {
	var time$1 = opts && opts.debugTiming ? time : notime;
	time$1("layout", function() {
		var layoutGraph = time$1("  buildLayoutGraph", function() {
			return buildLayoutGraph(g);
		});
		time$1("  runLayout", function() {
			runLayout(layoutGraph, time$1);
		});
		time$1("  updateInputGraph", function() {
			updateInputGraph(g, layoutGraph);
		});
	});
}
function runLayout(g, time$1) {
	time$1("    makeSpaceForEdgeLabels", function() {
		makeSpaceForEdgeLabels(g);
	});
	time$1("    removeSelfEdges", function() {
		removeSelfEdges(g);
	});
	time$1("    acyclic", function() {
		run$2(g);
	});
	time$1("    nestingGraph.run", function() {
		run(g);
	});
	time$1("    rank", function() {
		rank(asNonCompoundGraph(g));
	});
	time$1("    injectEdgeLabelProxies", function() {
		injectEdgeLabelProxies(g);
	});
	time$1("    removeEmptyRanks", function() {
		removeEmptyRanks(g);
	});
	time$1("    nestingGraph.cleanup", function() {
		cleanup(g);
	});
	time$1("    normalizeRanks", function() {
		normalizeRanks(g);
	});
	time$1("    assignRankMinMax", function() {
		assignRankMinMax(g);
	});
	time$1("    removeEdgeLabelProxies", function() {
		removeEdgeLabelProxies(g);
	});
	time$1("    normalize.run", function() {
		run$1(g);
	});
	time$1("    parentDummyChains", function() {
		parentDummyChains(g);
	});
	time$1("    addBorderSegments", function() {
		addBorderSegments(g);
	});
	time$1("    order", function() {
		order(g);
	});
	time$1("    insertSelfEdges", function() {
		insertSelfEdges(g);
	});
	time$1("    adjustCoordinateSystem", function() {
		adjust(g);
	});
	time$1("    position", function() {
		position(g);
	});
	time$1("    positionSelfEdges", function() {
		positionSelfEdges(g);
	});
	time$1("    removeBorderNodes", function() {
		removeBorderNodes(g);
	});
	time$1("    normalize.undo", function() {
		undo(g);
	});
	time$1("    fixupEdgeLabelCoords", function() {
		fixupEdgeLabelCoords(g);
	});
	time$1("    undoCoordinateSystem", function() {
		undo$1(g);
	});
	time$1("    translateGraph", function() {
		translateGraph(g);
	});
	time$1("    assignNodeIntersects", function() {
		assignNodeIntersects(g);
	});
	time$1("    reversePoints", function() {
		reversePointsForReversedEdges(g);
	});
	time$1("    acyclic.undo", function() {
		undo$2(g);
	});
}
function updateInputGraph(inputGraph, layoutGraph) {
	forEach_default(inputGraph.nodes(), function(v) {
		var inputLabel = inputGraph.node(v);
		var layoutLabel = layoutGraph.node(v);
		if (inputLabel) {
			inputLabel.x = layoutLabel.x;
			inputLabel.y = layoutLabel.y;
			if (layoutGraph.children(v).length) {
				inputLabel.width = layoutLabel.width;
				inputLabel.height = layoutLabel.height;
			}
		}
	});
	forEach_default(inputGraph.edges(), function(e) {
		var inputLabel = inputGraph.edge(e);
		var layoutLabel = layoutGraph.edge(e);
		inputLabel.points = layoutLabel.points;
		if (has_default(layoutLabel, "x")) {
			inputLabel.x = layoutLabel.x;
			inputLabel.y = layoutLabel.y;
		}
	});
	inputGraph.graph().width = layoutGraph.graph().width;
	inputGraph.graph().height = layoutGraph.graph().height;
}
var graphNumAttrs = [
	"nodesep",
	"edgesep",
	"ranksep",
	"marginx",
	"marginy"
];
var graphDefaults = {
	ranksep: 50,
	edgesep: 20,
	nodesep: 50,
	rankdir: "tb"
};
var graphAttrs = [
	"acyclicer",
	"ranker",
	"rankdir",
	"align"
];
var nodeNumAttrs = ["width", "height"];
var nodeDefaults = {
	width: 0,
	height: 0
};
var edgeNumAttrs = [
	"minlen",
	"weight",
	"width",
	"height",
	"labeloffset"
];
var edgeDefaults = {
	minlen: 1,
	weight: 1,
	width: 0,
	height: 0,
	labeloffset: 10,
	labelpos: "r"
};
var edgeAttrs = ["labelpos"];
function buildLayoutGraph(inputGraph) {
	var g = new Graph({
		multigraph: true,
		compound: true
	});
	var graph = canonicalize(inputGraph.graph());
	g.setGraph(merge_default({}, graphDefaults, selectNumberAttrs(graph, graphNumAttrs), pick_default(graph, graphAttrs)));
	forEach_default(inputGraph.nodes(), function(v) {
		var node = canonicalize(inputGraph.node(v));
		g.setNode(v, defaults_default(selectNumberAttrs(node, nodeNumAttrs), nodeDefaults));
		g.setParent(v, inputGraph.parent(v));
	});
	forEach_default(inputGraph.edges(), function(e) {
		var edge = canonicalize(inputGraph.edge(e));
		g.setEdge(e, merge_default({}, edgeDefaults, selectNumberAttrs(edge, edgeNumAttrs), pick_default(edge, edgeAttrs)));
	});
	return g;
}
function makeSpaceForEdgeLabels(g) {
	var graph = g.graph();
	graph.ranksep /= 2;
	forEach_default(g.edges(), function(e) {
		var edge = g.edge(e);
		edge.minlen *= 2;
		if (edge.labelpos.toLowerCase() !== "c") if (graph.rankdir === "TB" || graph.rankdir === "BT") edge.width += edge.labeloffset;
		else edge.height += edge.labeloffset;
	});
}
function injectEdgeLabelProxies(g) {
	forEach_default(g.edges(), function(e) {
		var edge = g.edge(e);
		if (edge.width && edge.height) {
			var v = g.node(e.v);
			addDummyNode(g, "edge-proxy", {
				rank: (g.node(e.w).rank - v.rank) / 2 + v.rank,
				e
			}, "_ep");
		}
	});
}
function assignRankMinMax(g) {
	var maxRank$1 = 0;
	forEach_default(g.nodes(), function(v) {
		var node = g.node(v);
		if (node.borderTop) {
			node.minRank = g.node(node.borderTop).rank;
			node.maxRank = g.node(node.borderBottom).rank;
			maxRank$1 = max_default(maxRank$1, node.maxRank);
		}
	});
	g.graph().maxRank = maxRank$1;
}
function removeEdgeLabelProxies(g) {
	forEach_default(g.nodes(), function(v) {
		var node = g.node(v);
		if (node.dummy === "edge-proxy") {
			g.edge(node.e).labelRank = node.rank;
			g.removeNode(v);
		}
	});
}
function translateGraph(g) {
	var minX = Number.POSITIVE_INFINITY;
	var maxX = 0;
	var minY = Number.POSITIVE_INFINITY;
	var maxY = 0;
	var graphLabel = g.graph();
	var marginX = graphLabel.marginx || 0;
	var marginY = graphLabel.marginy || 0;
	function getExtremes(attrs) {
		var x = attrs.x;
		var y = attrs.y;
		var w = attrs.width;
		var h = attrs.height;
		minX = Math.min(minX, x - w / 2);
		maxX = Math.max(maxX, x + w / 2);
		minY = Math.min(minY, y - h / 2);
		maxY = Math.max(maxY, y + h / 2);
	}
	forEach_default(g.nodes(), function(v) {
		getExtremes(g.node(v));
	});
	forEach_default(g.edges(), function(e) {
		var edge = g.edge(e);
		if (has_default(edge, "x")) getExtremes(edge);
	});
	minX -= marginX;
	minY -= marginY;
	forEach_default(g.nodes(), function(v) {
		var node = g.node(v);
		node.x -= minX;
		node.y -= minY;
	});
	forEach_default(g.edges(), function(e) {
		var edge = g.edge(e);
		forEach_default(edge.points, function(p) {
			p.x -= minX;
			p.y -= minY;
		});
		if (has_default(edge, "x")) edge.x -= minX;
		if (has_default(edge, "y")) edge.y -= minY;
	});
	graphLabel.width = maxX - minX + marginX;
	graphLabel.height = maxY - minY + marginY;
}
function assignNodeIntersects(g) {
	forEach_default(g.edges(), function(e) {
		var edge = g.edge(e);
		var nodeV = g.node(e.v);
		var nodeW = g.node(e.w);
		var p1, p2;
		if (!edge.points) {
			edge.points = [];
			p1 = nodeW;
			p2 = nodeV;
		} else {
			p1 = edge.points[0];
			p2 = edge.points[edge.points.length - 1];
		}
		edge.points.unshift(intersectRect(nodeV, p1));
		edge.points.push(intersectRect(nodeW, p2));
	});
}
function fixupEdgeLabelCoords(g) {
	forEach_default(g.edges(), function(e) {
		var edge = g.edge(e);
		if (has_default(edge, "x")) {
			if (edge.labelpos === "l" || edge.labelpos === "r") edge.width -= edge.labeloffset;
			switch (edge.labelpos) {
				case "l":
					edge.x -= edge.width / 2 + edge.labeloffset;
					break;
				case "r":
					edge.x += edge.width / 2 + edge.labeloffset;
					break;
			}
		}
	});
}
function reversePointsForReversedEdges(g) {
	forEach_default(g.edges(), function(e) {
		var edge = g.edge(e);
		if (edge.reversed) edge.points.reverse();
	});
}
function removeBorderNodes(g) {
	forEach_default(g.nodes(), function(v) {
		if (g.children(v).length) {
			var node = g.node(v);
			var t = g.node(node.borderTop);
			var b = g.node(node.borderBottom);
			var l = g.node(last_default(node.borderLeft));
			var r = g.node(last_default(node.borderRight));
			node.width = Math.abs(r.x - l.x);
			node.height = Math.abs(b.y - t.y);
			node.x = l.x + node.width / 2;
			node.y = t.y + node.height / 2;
		}
	});
	forEach_default(g.nodes(), function(v) {
		if (g.node(v).dummy === "border") g.removeNode(v);
	});
}
function removeSelfEdges(g) {
	forEach_default(g.edges(), function(e) {
		if (e.v === e.w) {
			var node = g.node(e.v);
			if (!node.selfEdges) node.selfEdges = [];
			node.selfEdges.push({
				e,
				label: g.edge(e)
			});
			g.removeEdge(e);
		}
	});
}
function insertSelfEdges(g) {
	forEach_default(buildLayerMatrix(g), function(layer) {
		var orderShift = 0;
		forEach_default(layer, function(v, i) {
			var node = g.node(v);
			node.order = i + orderShift;
			forEach_default(node.selfEdges, function(selfEdge) {
				addDummyNode(g, "selfedge", {
					width: selfEdge.label.width,
					height: selfEdge.label.height,
					rank: node.rank,
					order: i + ++orderShift,
					e: selfEdge.e,
					label: selfEdge.label
				}, "_se");
			});
			delete node.selfEdges;
		});
	});
}
function positionSelfEdges(g) {
	forEach_default(g.nodes(), function(v) {
		var node = g.node(v);
		if (node.dummy === "selfedge") {
			var selfNode = g.node(node.e.v);
			var x = selfNode.x + selfNode.width / 2;
			var y = selfNode.y;
			var dx = node.x - x;
			var dy = selfNode.height / 2;
			g.setEdge(node.e, node.label);
			g.removeNode(v);
			node.label.points = [
				{
					x: x + 2 * dx / 3,
					y: y - dy
				},
				{
					x: x + 5 * dx / 6,
					y: y - dy
				},
				{
					x: x + dx,
					y
				},
				{
					x: x + 5 * dx / 6,
					y: y + dy
				},
				{
					x: x + 2 * dx / 3,
					y: y + dy
				}
			];
			node.label.x = node.x;
			node.label.y = node.y;
		}
	});
}
function selectNumberAttrs(obj, attrs) {
	return mapValues_default(pick_default(obj, attrs), Number);
}
function canonicalize(attrs) {
	var newAttrs = {};
	forEach_default(attrs, function(v, k) {
		newAttrs[k.toLowerCase()] = v;
	});
	return newAttrs;
}
export { map_default as a, pick_default as i, uniqueId_default as n, defaults_default as o, range_default as r, layout as t };
