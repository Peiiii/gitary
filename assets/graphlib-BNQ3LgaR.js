import { Di as isObjectLike_default, Ei as isSymbol_default, Ni as isObject_default, ki as _Symbol_default } from "./app-B8S090XF.js";
import { $ as keysIn_default, Ct as _Stack_default, Dt as isFunction_default, Et as eq_default, G as _baseKeys_default, H as isEmpty_default, J as _baseRest_default, Q as identity_default, Tt as _MapCache_default, U as _getTag_default, W as _Set_default, X as constant_default, _t as _cloneTypedArray_default, at as _nodeUtil_default, bt as _cloneBuffer_default, ct as isBuffer_default, dt as isLength_default, et as _arrayLikeKeys_default, ft as isArray_default, gt as _copyArray_default, ht as _getPrototype_default, it as isTypedArray_default, lt as isArrayLikeObject_default, mt as _initCloneObject_default, nt as _copyObject_default, ot as _baseUnary_default, pt as isArguments_default, rt as _assignValue_default, tt as _isIndex_default, ut as isArrayLike_default, vt as _cloneArrayBuffer_default, wt as memoize_default, xt as _baseFor_default, yt as _Uint8Array_default } from "./mermaid-b5860b54-BK5VZCIu.js";
function arrayEach(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (iteratee(array[index], index, array) === false) break;
	return array;
}
var _arrayEach_default = arrayEach;
function keys(object) {
	return isArrayLike_default(object) ? _arrayLikeKeys_default(object) : _baseKeys_default(object);
}
var keys_default = keys;
function baseAssign(object, source) {
	return object && _copyObject_default(source, keys_default(source), object);
}
var _baseAssign_default = baseAssign;
function baseAssignIn(object, source) {
	return object && _copyObject_default(source, keysIn_default(source), object);
}
var _baseAssignIn_default = baseAssignIn;
function arrayFilter(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
	while (++index < length) {
		var value = array[index];
		if (predicate(value, index, array)) result[resIndex++] = value;
	}
	return result;
}
var _arrayFilter_default = arrayFilter;
function stubArray() {
	return [];
}
var stubArray_default = stubArray;
var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var _getSymbols_default = !nativeGetSymbols ? stubArray_default : function(object) {
	if (object == null) return [];
	object = Object(object);
	return _arrayFilter_default(nativeGetSymbols(object), function(symbol) {
		return propertyIsEnumerable.call(object, symbol);
	});
};
function copySymbols(source, object) {
	return _copyObject_default(source, _getSymbols_default(source), object);
}
var _copySymbols_default = copySymbols;
function arrayPush(array, values$1) {
	var index = -1, length = values$1.length, offset = array.length;
	while (++index < length) array[offset + index] = values$1[index];
	return array;
}
var _arrayPush_default = arrayPush;
var _getSymbolsIn_default = !Object.getOwnPropertySymbols ? stubArray_default : function(object) {
	var result = [];
	while (object) {
		_arrayPush_default(result, _getSymbols_default(object));
		object = _getPrototype_default(object);
	}
	return result;
};
function copySymbolsIn(source, object) {
	return _copyObject_default(source, _getSymbolsIn_default(source), object);
}
var _copySymbolsIn_default = copySymbolsIn;
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	var result = keysFunc(object);
	return isArray_default(object) ? result : _arrayPush_default(result, symbolsFunc(object));
}
var _baseGetAllKeys_default = baseGetAllKeys;
function getAllKeys(object) {
	return _baseGetAllKeys_default(object, keys_default, _getSymbols_default);
}
var _getAllKeys_default = getAllKeys;
function getAllKeysIn(object) {
	return _baseGetAllKeys_default(object, keysIn_default, _getSymbolsIn_default);
}
var _getAllKeysIn_default = getAllKeysIn;
var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
function initCloneArray(array) {
	var length = array.length, result = new array.constructor(length);
	if (length && typeof array[0] == "string" && hasOwnProperty$3.call(array, "index")) {
		result.index = array.index;
		result.input = array.input;
	}
	return result;
}
var _initCloneArray_default = initCloneArray;
function cloneDataView(dataView, isDeep) {
	var buffer = isDeep ? _cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
	return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView_default = cloneDataView;
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
	var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	result.lastIndex = regexp.lastIndex;
	return result;
}
var _cloneRegExp_default = cloneRegExp;
var symbolProto$2 = _Symbol_default ? _Symbol_default.prototype : void 0, symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : void 0;
function cloneSymbol(symbol) {
	return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
var _cloneSymbol_default = cloneSymbol;
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
	var Ctor = object.constructor;
	switch (tag) {
		case arrayBufferTag$2: return _cloneArrayBuffer_default(object);
		case boolTag$2:
		case dateTag$2: return new Ctor(+object);
		case dataViewTag$2: return _cloneDataView_default(object, isDeep);
		case float32Tag$1:
		case float64Tag$1:
		case int8Tag$1:
		case int16Tag$1:
		case int32Tag$1:
		case uint8Tag$1:
		case uint8ClampedTag$1:
		case uint16Tag$1:
		case uint32Tag$1: return _cloneTypedArray_default(object, isDeep);
		case mapTag$3: return new Ctor();
		case numberTag$2:
		case stringTag$2: return new Ctor(object);
		case regexpTag$2: return _cloneRegExp_default(object);
		case setTag$3: return new Ctor();
		case symbolTag$2: return _cloneSymbol_default(object);
	}
}
var _initCloneByTag_default = initCloneByTag;
var mapTag$2 = "[object Map]";
function baseIsMap(value) {
	return isObjectLike_default(value) && _getTag_default(value) == mapTag$2;
}
var _baseIsMap_default = baseIsMap;
var nodeIsMap = _nodeUtil_default && _nodeUtil_default.isMap;
var isMap_default = nodeIsMap ? _baseUnary_default(nodeIsMap) : _baseIsMap_default;
var setTag$2 = "[object Set]";
function baseIsSet(value) {
	return isObjectLike_default(value) && _getTag_default(value) == setTag$2;
}
var _baseIsSet_default = baseIsSet;
var nodeIsSet = _nodeUtil_default && _nodeUtil_default.isSet;
var isSet_default = nodeIsSet ? _baseUnary_default(nodeIsSet) : _baseIsSet_default;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
	var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
	if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
	if (result !== void 0) return result;
	if (!isObject_default(value)) return value;
	var isArr = isArray_default(value);
	if (isArr) {
		result = _initCloneArray_default(value);
		if (!isDeep) return _copyArray_default(value, result);
	} else {
		var tag = _getTag_default(value), isFunc = tag == funcTag || tag == genTag;
		if (isBuffer_default(value)) return _cloneBuffer_default(value, isDeep);
		if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
			result = isFlat || isFunc ? {} : _initCloneObject_default(value);
			if (!isDeep) return isFlat ? _copySymbolsIn_default(value, _baseAssignIn_default(result, value)) : _copySymbols_default(value, _baseAssign_default(result, value));
		} else {
			if (!cloneableTags[tag]) return object ? value : {};
			result = _initCloneByTag_default(value, tag, isDeep);
		}
	}
	stack || (stack = new _Stack_default());
	var stacked = stack.get(value);
	if (stacked) return stacked;
	stack.set(value, result);
	if (isSet_default(value)) value.forEach(function(subValue) {
		result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	});
	else if (isMap_default(value)) value.forEach(function(subValue, key$1) {
		result.set(key$1, baseClone(subValue, bitmask, customizer, key$1, value, stack));
	});
	var props = isArr ? void 0 : (isFull ? isFlat ? _getAllKeysIn_default : _getAllKeys_default : isFlat ? keysIn_default : keys_default)(value);
	_arrayEach_default(props || value, function(subValue, key$1) {
		if (props) {
			key$1 = subValue;
			subValue = value[key$1];
		}
		_assignValue_default(result, key$1, baseClone(subValue, bitmask, customizer, key$1, value, stack));
	});
	return result;
}
var _baseClone_default = baseClone;
function arrayMap(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length, result = Array(length);
	while (++index < length) result[index] = iteratee(array[index], index, array);
	return result;
}
var _arrayMap_default = arrayMap;
var INFINITY$1 = Infinity;
var symbolProto$1 = _Symbol_default ? _Symbol_default.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(value) {
	if (typeof value == "string") return value;
	if (isArray_default(value)) return _arrayMap_default(value, baseToString) + "";
	if (isSymbol_default(value)) return symbolToString ? symbolToString.call(value) : "";
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString_default = baseToString;
function noop() {}
var noop_default = noop;
function baseFindIndex(array, predicate, fromIndex, fromRight) {
	var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
	while (fromRight ? index-- : ++index < length) if (predicate(array[index], index, array)) return index;
	return -1;
}
var _baseFindIndex_default = baseFindIndex;
function baseIsNaN(value) {
	return value !== value;
}
var _baseIsNaN_default = baseIsNaN;
function strictIndexOf(array, value, fromIndex) {
	var index = fromIndex - 1, length = array.length;
	while (++index < length) if (array[index] === value) return index;
	return -1;
}
var _strictIndexOf_default = strictIndexOf;
function baseIndexOf(array, value, fromIndex) {
	return value === value ? _strictIndexOf_default(array, value, fromIndex) : _baseFindIndex_default(array, _baseIsNaN_default, fromIndex);
}
var _baseIndexOf_default = baseIndexOf;
function arrayIncludes(array, value) {
	return !!(array == null ? 0 : array.length) && _baseIndexOf_default(array, value, 0) > -1;
}
var _arrayIncludes_default = arrayIncludes;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
	if (isArray_default(value)) return false;
	var type = typeof value;
	if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) return true;
	return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey_default = isKey;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
	var result = memoize_default(func, function(key) {
		if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
		return key;
	});
	var cache = result.cache;
	return result;
}
var _memoizeCapped_default = memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var _stringToPath_default = _memoizeCapped_default(function(string) {
	var result = [];
	if (string.charCodeAt(0) === 46) result.push("");
	string.replace(rePropName, function(match, number, quote, subString) {
		result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
	});
	return result;
});
function toString(value) {
	return value == null ? "" : _baseToString_default(value);
}
var toString_default = toString;
function castPath(value, object) {
	if (isArray_default(value)) return value;
	return _isKey_default(value, object) ? [value] : _stringToPath_default(toString_default(value));
}
var _castPath_default = castPath;
var INFINITY = Infinity;
function toKey(value) {
	if (typeof value == "string" || isSymbol_default(value)) return value;
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey_default = toKey;
function baseGet(object, path) {
	path = _castPath_default(path, object);
	var index = 0, length = path.length;
	while (object != null && index < length) object = object[_toKey_default(path[index++])];
	return index && index == length ? object : void 0;
}
var _baseGet_default = baseGet;
function get(object, path, defaultValue) {
	var result = object == null ? void 0 : _baseGet_default(object, path);
	return result === void 0 ? defaultValue : result;
}
var get_default = get;
var spreadableSymbol = _Symbol_default ? _Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(value) {
	return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable_default = isFlattenable;
function baseFlatten(array, depth, predicate, isStrict, result) {
	var index = -1, length = array.length;
	predicate || (predicate = _isFlattenable_default);
	result || (result = []);
	while (++index < length) {
		var value = array[index];
		if (depth > 0 && predicate(value)) if (depth > 1) baseFlatten(value, depth - 1, predicate, isStrict, result);
		else _arrayPush_default(result, value);
		else if (!isStrict) result[result.length] = value;
	}
	return result;
}
var _baseFlatten_default = baseFlatten;
function arrayReduce(array, iteratee, accumulator, initAccum) {
	var index = -1, length = array == null ? 0 : array.length;
	if (initAccum && length) accumulator = array[++index];
	while (++index < length) accumulator = iteratee(accumulator, array[index], index, array);
	return accumulator;
}
var _arrayReduce_default = arrayReduce;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
	this.__data__.set(value, HASH_UNDEFINED);
	return this;
}
var _setCacheAdd_default = setCacheAdd;
function setCacheHas(value) {
	return this.__data__.has(value);
}
var _setCacheHas_default = setCacheHas;
function SetCache(values$1) {
	var index = -1, length = values$1 == null ? 0 : values$1.length;
	this.__data__ = new _MapCache_default();
	while (++index < length) this.add(values$1[index]);
}
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd_default;
SetCache.prototype.has = _setCacheHas_default;
var _SetCache_default = SetCache;
function arraySome(array, predicate) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (predicate(array[index], index, array)) return true;
	return false;
}
var _arraySome_default = arraySome;
function cacheHas(cache, key) {
	return cache.has(key);
}
var _cacheHas_default = cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
	if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
	var arrStacked = stack.get(array);
	var othStacked = stack.get(other);
	if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
	var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new _SetCache_default() : void 0;
	stack.set(array, other);
	stack.set(other, array);
	while (++index < arrLength) {
		var arrValue = array[index], othValue = other[index];
		if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
		if (compared !== void 0) {
			if (compared) continue;
			result = false;
			break;
		}
		if (seen) {
			if (!_arraySome_default(other, function(othValue$1, othIndex) {
				if (!_cacheHas_default(seen, othIndex) && (arrValue === othValue$1 || equalFunc(arrValue, othValue$1, bitmask, customizer, stack))) return seen.push(othIndex);
			})) {
				result = false;
				break;
			}
		} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
			result = false;
			break;
		}
	}
	stack["delete"](array);
	stack["delete"](other);
	return result;
}
var _equalArrays_default = equalArrays;
function mapToArray(map) {
	var index = -1, result = Array(map.size);
	map.forEach(function(value, key) {
		result[++index] = [key, value];
	});
	return result;
}
var _mapToArray_default = mapToArray;
function setToArray(set) {
	var index = -1, result = Array(set.size);
	set.forEach(function(value) {
		result[++index] = value;
	});
	return result;
}
var _setToArray_default = setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = _Symbol_default ? _Symbol_default.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	switch (tag) {
		case dataViewTag:
			if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
			object = object.buffer;
			other = other.buffer;
		case arrayBufferTag:
			if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array_default(object), new _Uint8Array_default(other))) return false;
			return true;
		case boolTag:
		case dateTag:
		case numberTag: return eq_default(+object, +other);
		case errorTag: return object.name == other.name && object.message == other.message;
		case regexpTag:
		case stringTag: return object == other + "";
		case mapTag: var convert = _mapToArray_default;
		case setTag:
			var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
			convert || (convert = _setToArray_default);
			if (object.size != other.size && !isPartial) return false;
			var stacked = stack.get(object);
			if (stacked) return stacked == other;
			bitmask |= COMPARE_UNORDERED_FLAG$2;
			stack.set(object, other);
			var result = _equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
			stack["delete"](object);
			return result;
		case symbolTag: if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
	}
	return false;
}
var _equalByTag_default = equalByTag;
var COMPARE_PARTIAL_FLAG$3 = 1;
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = _getAllKeys_default(object), objLength = objProps.length;
	if (objLength != _getAllKeys_default(other).length && !isPartial) return false;
	var index = objLength;
	while (index--) {
		var key = objProps[index];
		if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) return false;
	}
	var objStacked = stack.get(object);
	var othStacked = stack.get(other);
	if (objStacked && othStacked) return objStacked == other && othStacked == object;
	var result = true;
	stack.set(object, other);
	stack.set(other, object);
	var skipCtor = isPartial;
	while (++index < objLength) {
		key = objProps[index];
		var objValue = object[key], othValue = other[key];
		if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
		if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
			result = false;
			break;
		}
		skipCtor || (skipCtor = key == "constructor");
	}
	if (result && !skipCtor) {
		var objCtor = object.constructor, othCtor = other.constructor;
		if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
	}
	stack["delete"](object);
	stack["delete"](other);
	return result;
}
var _equalObjects_default = equalObjects;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag : _getTag_default(object), othTag = othIsArr ? arrayTag : _getTag_default(other);
	objTag = objTag == argsTag ? objectTag : objTag;
	othTag = othTag == argsTag ? objectTag : othTag;
	var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
	if (isSameTag && isBuffer_default(object)) {
		if (!isBuffer_default(other)) return false;
		objIsArr = true;
		objIsObj = false;
	}
	if (isSameTag && !objIsObj) {
		stack || (stack = new _Stack_default());
		return objIsArr || isTypedArray_default(object) ? _equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : _equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
	}
	if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
		var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
		if (objIsWrapped || othIsWrapped) {
			var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
			stack || (stack = new _Stack_default());
			return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
		}
	}
	if (!isSameTag) return false;
	stack || (stack = new _Stack_default());
	return _equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep_default = baseIsEqualDeep;
function baseIsEqual(value, other, bitmask, customizer, stack) {
	if (value === other) return true;
	if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) return value !== value && other !== other;
	return _baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
var _baseIsEqual_default = baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
	var index = matchData.length, length = index, noCustomizer = !customizer;
	if (object == null) return !length;
	object = Object(object);
	while (index--) {
		var data = matchData[index];
		if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
	}
	while (++index < length) {
		data = matchData[index];
		var key = data[0], objValue = object[key], srcValue = data[1];
		if (noCustomizer && data[2]) {
			if (objValue === void 0 && !(key in object)) return false;
		} else {
			var stack = new _Stack_default();
			if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
			if (!(result === void 0 ? _baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) return false;
		}
	}
	return true;
}
var _baseIsMatch_default = baseIsMatch;
function isStrictComparable(value) {
	return value === value && !isObject_default(value);
}
var _isStrictComparable_default = isStrictComparable;
function getMatchData(object) {
	var result = keys_default(object), length = result.length;
	while (length--) {
		var key = result[length], value = object[key];
		result[length] = [
			key,
			value,
			_isStrictComparable_default(value)
		];
	}
	return result;
}
var _getMatchData_default = getMatchData;
function matchesStrictComparable(key, srcValue) {
	return function(object) {
		if (object == null) return false;
		return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
	};
}
var _matchesStrictComparable_default = matchesStrictComparable;
function baseMatches(source) {
	var matchData = _getMatchData_default(source);
	if (matchData.length == 1 && matchData[0][2]) return _matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
	return function(object) {
		return object === source || _baseIsMatch_default(object, source, matchData);
	};
}
var _baseMatches_default = baseMatches;
function baseHasIn(object, key) {
	return object != null && key in Object(object);
}
var _baseHasIn_default = baseHasIn;
function hasPath(object, path, hasFunc) {
	path = _castPath_default(path, object);
	var index = -1, length = path.length, result = false;
	while (++index < length) {
		var key = _toKey_default(path[index]);
		if (!(result = object != null && hasFunc(object, key))) break;
		object = object[key];
	}
	if (result || ++index != length) return result;
	length = object == null ? 0 : object.length;
	return !!length && isLength_default(length) && _isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
}
var _hasPath_default = hasPath;
function hasIn(object, path) {
	return object != null && _hasPath_default(object, path, _baseHasIn_default);
}
var hasIn_default = hasIn;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
	if (_isKey_default(path) && _isStrictComparable_default(srcValue)) return _matchesStrictComparable_default(_toKey_default(path), srcValue);
	return function(object) {
		var objValue = get_default(object, path);
		return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : _baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	};
}
var _baseMatchesProperty_default = baseMatchesProperty;
function baseProperty(key) {
	return function(object) {
		return object == null ? void 0 : object[key];
	};
}
var _baseProperty_default = baseProperty;
function basePropertyDeep(path) {
	return function(object) {
		return _baseGet_default(object, path);
	};
}
var _basePropertyDeep_default = basePropertyDeep;
function property(path) {
	return _isKey_default(path) ? _baseProperty_default(_toKey_default(path)) : _basePropertyDeep_default(path);
}
var property_default = property;
function baseIteratee(value) {
	if (typeof value == "function") return value;
	if (value == null) return identity_default;
	if (typeof value == "object") return isArray_default(value) ? _baseMatchesProperty_default(value[0], value[1]) : _baseMatches_default(value);
	return property_default(value);
}
var _baseIteratee_default = baseIteratee;
function baseForOwn(object, iteratee) {
	return object && _baseFor_default(object, iteratee, keys_default);
}
var _baseForOwn_default = baseForOwn;
function createBaseEach(eachFunc, fromRight) {
	return function(collection, iteratee) {
		if (collection == null) return collection;
		if (!isArrayLike_default(collection)) return eachFunc(collection, iteratee);
		var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
		while (fromRight ? index-- : ++index < length) if (iteratee(iterable[index], index, iterable) === false) break;
		return collection;
	};
}
var _baseEach_default = createBaseEach(_baseForOwn_default);
function arrayIncludesWith(array, value, comparator) {
	var index = -1, length = array == null ? 0 : array.length;
	while (++index < length) if (comparator(value, array[index])) return true;
	return false;
}
var _arrayIncludesWith_default = arrayIncludesWith;
function castFunction(value) {
	return typeof value == "function" ? value : identity_default;
}
var _castFunction_default = castFunction;
function forEach(collection, iteratee) {
	return (isArray_default(collection) ? _arrayEach_default : _baseEach_default)(collection, _castFunction_default(iteratee));
}
var forEach_default = forEach;
function baseFilter(collection, predicate) {
	var result = [];
	_baseEach_default(collection, function(value, index, collection$1) {
		if (predicate(value, index, collection$1)) result.push(value);
	});
	return result;
}
var _baseFilter_default = baseFilter;
function filter(collection, predicate) {
	return (isArray_default(collection) ? _arrayFilter_default : _baseFilter_default)(collection, _baseIteratee_default(predicate, 3));
}
var filter_default = filter;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function baseHas(object, key) {
	return object != null && hasOwnProperty.call(object, key);
}
var _baseHas_default = baseHas;
function has(object, path) {
	return object != null && _hasPath_default(object, path, _baseHas_default);
}
var has_default = has;
function baseValues(object, props) {
	return _arrayMap_default(props, function(key) {
		return object[key];
	});
}
var _baseValues_default = baseValues;
function values(object) {
	return object == null ? [] : _baseValues_default(object, keys_default(object));
}
var values_default = values;
function isUndefined(value) {
	return value === void 0;
}
var isUndefined_default = isUndefined;
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	eachFunc(collection, function(value, index, collection$1) {
		accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection$1);
	});
	return accumulator;
}
var _baseReduce_default = baseReduce;
function reduce(collection, iteratee, accumulator) {
	var func = isArray_default(collection) ? _arrayReduce_default : _baseReduce_default, initAccum = arguments.length < 3;
	return func(collection, _baseIteratee_default(iteratee, 4), accumulator, initAccum, _baseEach_default);
}
var reduce_default = reduce;
var _createSet_default = !(_Set_default && 1 / _setToArray_default(new _Set_default([, -0]))[1] == Infinity) ? noop_default : function(values$1) {
	return new _Set_default(values$1);
};
var LARGE_ARRAY_SIZE = 200;
function baseUniq(array, iteratee, comparator) {
	var index = -1, includes = _arrayIncludes_default, length = array.length, isCommon = true, result = [], seen = result;
	if (comparator) {
		isCommon = false;
		includes = _arrayIncludesWith_default;
	} else if (length >= LARGE_ARRAY_SIZE) {
		var set = iteratee ? null : _createSet_default(array);
		if (set) return _setToArray_default(set);
		isCommon = false;
		includes = _cacheHas_default;
		seen = new _SetCache_default();
	} else seen = iteratee ? [] : result;
	outer: while (++index < length) {
		var value = array[index], computed = iteratee ? iteratee(value) : value;
		value = comparator || value !== 0 ? value : 0;
		if (isCommon && computed === computed) {
			var seenIndex = seen.length;
			while (seenIndex--) if (seen[seenIndex] === computed) continue outer;
			if (iteratee) seen.push(computed);
			result.push(value);
		} else if (!includes(seen, computed, comparator)) {
			if (seen !== result) seen.push(computed);
			result.push(value);
		}
	}
	return result;
}
var _baseUniq_default = baseUniq;
var union_default = _baseRest_default(function(arrays) {
	return _baseUniq_default(_baseFlatten_default(arrays, 1, isArrayLikeObject_default, true));
});
var DEFAULT_EDGE_NAME = "\0";
var GRAPH_NODE = "\0";
var EDGE_KEY_DELIM = "";
var Graph = class {
	constructor(opts = {}) {
		this._isDirected = has_default(opts, "directed") ? opts.directed : true;
		this._isMultigraph = has_default(opts, "multigraph") ? opts.multigraph : false;
		this._isCompound = has_default(opts, "compound") ? opts.compound : false;
		this._label = void 0;
		this._defaultNodeLabelFn = constant_default(void 0);
		this._defaultEdgeLabelFn = constant_default(void 0);
		this._nodes = {};
		if (this._isCompound) {
			this._parent = {};
			this._children = {};
			this._children[GRAPH_NODE] = {};
		}
		this._in = {};
		this._preds = {};
		this._out = {};
		this._sucs = {};
		this._edgeObjs = {};
		this._edgeLabels = {};
	}
	isDirected() {
		return this._isDirected;
	}
	isMultigraph() {
		return this._isMultigraph;
	}
	isCompound() {
		return this._isCompound;
	}
	setGraph(label) {
		this._label = label;
		return this;
	}
	graph() {
		return this._label;
	}
	setDefaultNodeLabel(newDefault) {
		if (!isFunction_default(newDefault)) newDefault = constant_default(newDefault);
		this._defaultNodeLabelFn = newDefault;
		return this;
	}
	nodeCount() {
		return this._nodeCount;
	}
	nodes() {
		return keys_default(this._nodes);
	}
	sources() {
		var self = this;
		return filter_default(this.nodes(), function(v) {
			return isEmpty_default(self._in[v]);
		});
	}
	sinks() {
		var self = this;
		return filter_default(this.nodes(), function(v) {
			return isEmpty_default(self._out[v]);
		});
	}
	setNodes(vs, value) {
		var args = arguments;
		var self = this;
		forEach_default(vs, function(v) {
			if (args.length > 1) self.setNode(v, value);
			else self.setNode(v);
		});
		return this;
	}
	setNode(v, value) {
		if (has_default(this._nodes, v)) {
			if (arguments.length > 1) this._nodes[v] = value;
			return this;
		}
		this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
		if (this._isCompound) {
			this._parent[v] = GRAPH_NODE;
			this._children[v] = {};
			this._children[GRAPH_NODE][v] = true;
		}
		this._in[v] = {};
		this._preds[v] = {};
		this._out[v] = {};
		this._sucs[v] = {};
		++this._nodeCount;
		return this;
	}
	node(v) {
		return this._nodes[v];
	}
	hasNode(v) {
		return has_default(this._nodes, v);
	}
	removeNode(v) {
		var self = this;
		if (has_default(this._nodes, v)) {
			var removeEdge = function(e) {
				self.removeEdge(self._edgeObjs[e]);
			};
			delete this._nodes[v];
			if (this._isCompound) {
				this._removeFromParentsChildList(v);
				delete this._parent[v];
				forEach_default(this.children(v), function(child) {
					self.setParent(child);
				});
				delete this._children[v];
			}
			forEach_default(keys_default(this._in[v]), removeEdge);
			delete this._in[v];
			delete this._preds[v];
			forEach_default(keys_default(this._out[v]), removeEdge);
			delete this._out[v];
			delete this._sucs[v];
			--this._nodeCount;
		}
		return this;
	}
	setParent(v, parent) {
		if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
		if (isUndefined_default(parent)) parent = GRAPH_NODE;
		else {
			parent += "";
			for (var ancestor = parent; !isUndefined_default(ancestor); ancestor = this.parent(ancestor)) if (ancestor === v) throw new Error("Setting " + parent + " as parent of " + v + " would create a cycle");
			this.setNode(parent);
		}
		this.setNode(v);
		this._removeFromParentsChildList(v);
		this._parent[v] = parent;
		this._children[parent][v] = true;
		return this;
	}
	_removeFromParentsChildList(v) {
		delete this._children[this._parent[v]][v];
	}
	parent(v) {
		if (this._isCompound) {
			var parent = this._parent[v];
			if (parent !== GRAPH_NODE) return parent;
		}
	}
	children(v) {
		if (isUndefined_default(v)) v = GRAPH_NODE;
		if (this._isCompound) {
			var children = this._children[v];
			if (children) return keys_default(children);
		} else if (v === GRAPH_NODE) return this.nodes();
		else if (this.hasNode(v)) return [];
	}
	predecessors(v) {
		var predsV = this._preds[v];
		if (predsV) return keys_default(predsV);
	}
	successors(v) {
		var sucsV = this._sucs[v];
		if (sucsV) return keys_default(sucsV);
	}
	neighbors(v) {
		var preds = this.predecessors(v);
		if (preds) return union_default(preds, this.successors(v));
	}
	isLeaf(v) {
		var neighbors;
		if (this.isDirected()) neighbors = this.successors(v);
		else neighbors = this.neighbors(v);
		return neighbors.length === 0;
	}
	filterNodes(filter$1) {
		var copy = new this.constructor({
			directed: this._isDirected,
			multigraph: this._isMultigraph,
			compound: this._isCompound
		});
		copy.setGraph(this.graph());
		var self = this;
		forEach_default(this._nodes, function(value, v) {
			if (filter$1(v)) copy.setNode(v, value);
		});
		forEach_default(this._edgeObjs, function(e) {
			if (copy.hasNode(e.v) && copy.hasNode(e.w)) copy.setEdge(e, self.edge(e));
		});
		var parents = {};
		function findParent(v) {
			var parent = self.parent(v);
			if (parent === void 0 || copy.hasNode(parent)) {
				parents[v] = parent;
				return parent;
			} else if (parent in parents) return parents[parent];
			else return findParent(parent);
		}
		if (this._isCompound) forEach_default(copy.nodes(), function(v) {
			copy.setParent(v, findParent(v));
		});
		return copy;
	}
	setDefaultEdgeLabel(newDefault) {
		if (!isFunction_default(newDefault)) newDefault = constant_default(newDefault);
		this._defaultEdgeLabelFn = newDefault;
		return this;
	}
	edgeCount() {
		return this._edgeCount;
	}
	edges() {
		return values_default(this._edgeObjs);
	}
	setPath(vs, value) {
		var self = this;
		var args = arguments;
		reduce_default(vs, function(v, w) {
			if (args.length > 1) self.setEdge(v, w, value);
			else self.setEdge(v, w);
			return w;
		});
		return this;
	}
	setEdge() {
		var v, w, name, value;
		var valueSpecified = false;
		var arg0 = arguments[0];
		if (typeof arg0 === "object" && arg0 !== null && "v" in arg0) {
			v = arg0.v;
			w = arg0.w;
			name = arg0.name;
			if (arguments.length === 2) {
				value = arguments[1];
				valueSpecified = true;
			}
		} else {
			v = arg0;
			w = arguments[1];
			name = arguments[3];
			if (arguments.length > 2) {
				value = arguments[2];
				valueSpecified = true;
			}
		}
		v = "" + v;
		w = "" + w;
		if (!isUndefined_default(name)) name = "" + name;
		var e = edgeArgsToId(this._isDirected, v, w, name);
		if (has_default(this._edgeLabels, e)) {
			if (valueSpecified) this._edgeLabels[e] = value;
			return this;
		}
		if (!isUndefined_default(name) && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
		this.setNode(v);
		this.setNode(w);
		this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);
		var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
		v = edgeObj.v;
		w = edgeObj.w;
		Object.freeze(edgeObj);
		this._edgeObjs[e] = edgeObj;
		incrementOrInitEntry(this._preds[w], v);
		incrementOrInitEntry(this._sucs[v], w);
		this._in[w][e] = edgeObj;
		this._out[v][e] = edgeObj;
		this._edgeCount++;
		return this;
	}
	edge(v, w, name) {
		var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
		return this._edgeLabels[e];
	}
	hasEdge(v, w, name) {
		var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
		return has_default(this._edgeLabels, e);
	}
	removeEdge(v, w, name) {
		var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
		var edge = this._edgeObjs[e];
		if (edge) {
			v = edge.v;
			w = edge.w;
			delete this._edgeLabels[e];
			delete this._edgeObjs[e];
			decrementOrRemoveEntry(this._preds[w], v);
			decrementOrRemoveEntry(this._sucs[v], w);
			delete this._in[w][e];
			delete this._out[v][e];
			this._edgeCount--;
		}
		return this;
	}
	inEdges(v, u) {
		var inV = this._in[v];
		if (inV) {
			var edges = values_default(inV);
			if (!u) return edges;
			return filter_default(edges, function(edge) {
				return edge.v === u;
			});
		}
	}
	outEdges(v, w) {
		var outV = this._out[v];
		if (outV) {
			var edges = values_default(outV);
			if (!w) return edges;
			return filter_default(edges, function(edge) {
				return edge.w === w;
			});
		}
	}
	nodeEdges(v, w) {
		var inEdges = this.inEdges(v, w);
		if (inEdges) return inEdges.concat(this.outEdges(v, w));
	}
};
Graph.prototype._nodeCount = 0;
Graph.prototype._edgeCount = 0;
function incrementOrInitEntry(map, k) {
	if (map[k]) map[k]++;
	else map[k] = 1;
}
function decrementOrRemoveEntry(map, k) {
	if (!--map[k]) delete map[k];
}
function edgeArgsToId(isDirected, v_, w_, name) {
	var v = "" + v_;
	var w = "" + w_;
	if (!isDirected && v > w) {
		var tmp = v;
		v = w;
		w = tmp;
	}
	return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + (isUndefined_default(name) ? DEFAULT_EDGE_NAME : name);
}
function edgeArgsToObj(isDirected, v_, w_, name) {
	var v = "" + v_;
	var w = "" + w_;
	if (!isDirected && v > w) {
		var tmp = v;
		v = w;
		w = tmp;
	}
	var edgeObj = {
		v,
		w
	};
	if (name) edgeObj.name = name;
	return edgeObj;
}
function edgeObjToId(isDirected, edgeObj) {
	return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
}
export { keys_default as S, _castPath_default as _, has_default as a, _arrayMap_default as b, _castFunction_default as c, _baseIteratee_default as d, _baseProperty_default as f, _toKey_default as g, _baseGet_default as h, values_default as i, _baseEach_default as l, _baseFlatten_default as m, reduce_default as n, filter_default as o, hasIn_default as p, isUndefined_default as r, forEach_default as s, Graph as t, _baseForOwn_default as u, toString_default as v, _baseClone_default as x, _baseFindIndex_default as y };
