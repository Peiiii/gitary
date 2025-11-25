const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/katex-FY-mDH2O.js","assets/app-B8S090XF.js","assets/monaco-DGZQwLgt.js","assets/rolldown-runtime-p26lAE5v.js","assets/monaco-CO_qJIS_.css","assets/chakra-ui-BP0KsvPN.js","assets/react-syntax-highlighter-kv5bfHd0.js","assets/react-markdown-CC4NHZ99.js","assets/react-utils-CBnCOsPf.js","assets/remark-gfm-BOrJohj3.js","assets/common-utils-oTrucMut.js","assets/vendor-D4MyOtoJ.js","assets/app-Cur-PYGw.css","assets/c4Diagram-3d4e48cf-PJdUkfzF.js","assets/svgDrawCommon-08f97a94-fTovdXxZ.js","assets/flowDiagram-66a62f08-BJlEbvS6.js","assets/path-i3PwAG1d.js","assets/styles-c10674c1-Dxj82ZSp.js","assets/graphlib-BNQ3LgaR.js","assets/index-3862675e-CuYqlOEr.js","assets/dagre-BJecOo78.js","assets/clone-B1t2B2qh.js","assets/createText-2e5e7dd3-BLlo6W12.js","assets/edges-e0da2a9e-CvspFgC2.js","assets/line-DmCrNvb6.js","assets/array-BUZ-AMCX.js","assets/channel-s-LqkM1T.js","assets/flowDb-956e92f1-DBPQ0cOS.js","assets/flowDiagram-v2-96b9c2cf-ColxveIU.js","assets/erDiagram-9861fffd-SnNfAclG.js","assets/gitGraphDiagram-72cf32ee-D_YmiEWL.js","assets/ganttDiagram-c361ad54-Bs8DmLo3.js","assets/linear-CRgseeDq.js","assets/init-B8EbwIsk.js","assets/infoDiagram-f8f76790-Bp2_gusB.js","assets/pieDiagram-8a3498a8-V50rLdmT.js","assets/ordinal-CdFd_BCw.js","assets/arc-B7FkMLGj.js","assets/quadrantDiagram-120e2f19-DCrEcZV5.js","assets/xychartDiagram-e933f94c-C2OjD2fa.js","assets/requirementDiagram-deff3bca-BScV7fxJ.js","assets/sequenceDiagram-704730f1-DsK49Bjv.js","assets/classDiagram-70f12bd4-qXUf6MbU.js","assets/styles-9a916d00-BUNuh_eN.js","assets/classDiagram-v2-f2320105-jbcLoF_O.js","assets/stateDiagram-587899a1-DPCttp-L.js","assets/styles-6aaf32cf-TJXoxbmI.js","assets/stateDiagram-v2-d93cdb3a-BZ4EFaiy.js","assets/journeyDiagram-49397b02-BhZXFFXS.js","assets/flowchart-elk-definition-4a651766-JpCLYp3l.js","assets/timeline-definition-85554ec2-BiFn0MeW.js","assets/mindmap-definition-fc14e90a-CLpA1Z3c.js","assets/sankeyDiagram-04a897e0-eGYSFcI1.js","assets/Tableau10-CL9Zesom.js","assets/blockDiagram-38ab4fdb-8Fb3RMJS.js"])))=>i.map(i=>d[i]);
import { s as __toESM, t as __commonJSMin } from "./rolldown-runtime-p26lAE5v.js";
import { M as stringify, N as compile, j as serialize } from "./chakra-ui-BP0KsvPN.js";
import { Dn as __vitePreload } from "./monaco-DGZQwLgt.js";
import { Di as isObjectLike_default, Mi as _freeGlobal_default, Ni as isObject_default, Oi as _baseGetTag_default, _i as select_default, ji as _root_default, ri as require_dist } from "./app-B8S090XF.js";
function dedent(templ) {
	var values = [];
	for (var _i = 1; _i < arguments.length; _i++) values[_i - 1] = arguments[_i];
	var strings = Array.from(typeof templ === "string" ? [templ] : templ);
	strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
	var indentLengths = strings.reduce(function(arr, str) {
		var matches = str.match(/\n([\t ]+|(?!\s).)/g);
		if (matches) return arr.concat(matches.map(function(match) {
			var _a, _b;
			return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
		}));
		return arr;
	}, []);
	if (indentLengths.length) {
		var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
		strings = strings.map(function(str) {
			return str.replace(pattern_1, "\n");
		});
	}
	strings[0] = strings[0].replace(/^\r?\n/, "");
	var string = strings[0];
	values.forEach(function(value, i$1) {
		var endentations = string.match(/(?:^|\n)( *)$/);
		var endentation = endentations ? endentations[1] : "";
		var indentedValue = value;
		if (typeof value === "string" && value.includes("\n")) indentedValue = String(value).split("\n").map(function(str, i$2) {
			return i$2 === 0 ? str : "" + endentation + str;
		}).join("\n");
		string += indentedValue + strings[i$1 + 1];
	});
	return string;
}
var require_dayjs_min = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(t, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
	})(exports, (function() {
		"use strict";
		var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i$1 = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
			name: "en",
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			ordinal: function(t$1) {
				var e$1 = [
					"th",
					"st",
					"nd",
					"rd"
				], n$1 = t$1 % 100;
				return "[" + t$1 + (e$1[(n$1 - 20) % 10] || e$1[n$1] || e$1[0]) + "]";
			}
		}, m = function(t$1, e$1, n$1) {
			var r$1 = String(t$1);
			return !r$1 || r$1.length >= e$1 ? t$1 : "" + Array(e$1 + 1 - r$1.length).join(n$1) + t$1;
		}, v = {
			s: m,
			z: function(t$1) {
				var e$1 = -t$1.utcOffset(), n$1 = Math.abs(e$1), r$1 = Math.floor(n$1 / 60), i$2 = n$1 % 60;
				return (e$1 <= 0 ? "+" : "-") + m(r$1, 2, "0") + ":" + m(i$2, 2, "0");
			},
			m: function t$1(e$1, n$1) {
				if (e$1.date() < n$1.date()) return -t$1(n$1, e$1);
				var r$1 = 12 * (n$1.year() - e$1.year()) + (n$1.month() - e$1.month()), i$2 = e$1.clone().add(r$1, c), s$1 = n$1 - i$2 < 0, u$1 = e$1.clone().add(r$1 + (s$1 ? -1 : 1), c);
				return +(-(r$1 + (n$1 - i$2) / (s$1 ? i$2 - u$1 : u$1 - i$2)) || 0);
			},
			a: function(t$1) {
				return t$1 < 0 ? Math.ceil(t$1) || 0 : Math.floor(t$1);
			},
			p: function(t$1) {
				return {
					M: c,
					y: h,
					w: o,
					d: a,
					D: d,
					h: u,
					m: s,
					s: i$1,
					ms: r,
					Q: f
				}[t$1] || String(t$1 || "").toLowerCase().replace(/s$/, "");
			},
			u: function(t$1) {
				return void 0 === t$1;
			}
		}, g = "en", D = {};
		D[g] = M;
		var p = "$isDayjsObject", S = function(t$1) {
			return t$1 instanceof _ || !(!t$1 || !t$1[p]);
		}, w = function t$1(e$1, n$1, r$1) {
			var i$2;
			if (!e$1) return g;
			if ("string" == typeof e$1) {
				var s$1 = e$1.toLowerCase();
				D[s$1] && (i$2 = s$1), n$1 && (D[s$1] = n$1, i$2 = s$1);
				var u$1 = e$1.split("-");
				if (!i$2 && u$1.length > 1) return t$1(u$1[0]);
			} else {
				var a$1 = e$1.name;
				D[a$1] = e$1, i$2 = a$1;
			}
			return !r$1 && i$2 && (g = i$2), i$2 || !r$1 && g;
		}, O = function(t$1, e$1) {
			if (S(t$1)) return t$1.clone();
			var n$1 = "object" == typeof e$1 ? e$1 : {};
			return n$1.date = t$1, n$1.args = arguments, new _(n$1);
		}, b = v;
		b.l = w, b.i = S, b.w = function(t$1, e$1) {
			return O(t$1, {
				locale: e$1.$L,
				utc: e$1.$u,
				x: e$1.$x,
				$offset: e$1.$offset
			});
		};
		var _ = function() {
			function M$1(t$1) {
				this.$L = w(t$1.locale, null, !0), this.parse(t$1), this.$x = this.$x || t$1.x || {}, this[p] = !0;
			}
			var m$1 = M$1.prototype;
			return m$1.parse = function(t$1) {
				this.$d = function(t$2) {
					var e$1 = t$2.date, n$1 = t$2.utc;
					if (null === e$1) return /* @__PURE__ */ new Date(NaN);
					if (b.u(e$1)) return /* @__PURE__ */ new Date();
					if (e$1 instanceof Date) return new Date(e$1);
					if ("string" == typeof e$1 && !/Z$/i.test(e$1)) {
						var r$1 = e$1.match($);
						if (r$1) {
							var i$2 = r$1[2] - 1 || 0, s$1 = (r$1[7] || "0").substring(0, 3);
							return n$1 ? new Date(Date.UTC(r$1[1], i$2, r$1[3] || 1, r$1[4] || 0, r$1[5] || 0, r$1[6] || 0, s$1)) : new Date(r$1[1], i$2, r$1[3] || 1, r$1[4] || 0, r$1[5] || 0, r$1[6] || 0, s$1);
						}
					}
					return new Date(e$1);
				}(t$1), this.init();
			}, m$1.init = function() {
				var t$1 = this.$d;
				this.$y = t$1.getFullYear(), this.$M = t$1.getMonth(), this.$D = t$1.getDate(), this.$W = t$1.getDay(), this.$H = t$1.getHours(), this.$m = t$1.getMinutes(), this.$s = t$1.getSeconds(), this.$ms = t$1.getMilliseconds();
			}, m$1.$utils = function() {
				return b;
			}, m$1.isValid = function() {
				return !(this.$d.toString() === l);
			}, m$1.isSame = function(t$1, e$1) {
				var n$1 = O(t$1);
				return this.startOf(e$1) <= n$1 && n$1 <= this.endOf(e$1);
			}, m$1.isAfter = function(t$1, e$1) {
				return O(t$1) < this.startOf(e$1);
			}, m$1.isBefore = function(t$1, e$1) {
				return this.endOf(e$1) < O(t$1);
			}, m$1.$g = function(t$1, e$1, n$1) {
				return b.u(t$1) ? this[e$1] : this.set(n$1, t$1);
			}, m$1.unix = function() {
				return Math.floor(this.valueOf() / 1e3);
			}, m$1.valueOf = function() {
				return this.$d.getTime();
			}, m$1.startOf = function(t$1, e$1) {
				var n$1 = this, r$1 = !!b.u(e$1) || e$1, f$1 = b.p(t$1), l$1 = function(t$2, e$2) {
					var i$2 = b.w(n$1.$u ? Date.UTC(n$1.$y, e$2, t$2) : new Date(n$1.$y, e$2, t$2), n$1);
					return r$1 ? i$2 : i$2.endOf(a);
				}, $$1 = function(t$2, e$2) {
					return b.w(n$1.toDate()[t$2].apply(n$1.toDate("s"), (r$1 ? [
						0,
						0,
						0,
						0
					] : [
						23,
						59,
						59,
						999
					]).slice(e$2)), n$1);
				}, y$1 = this.$W, M$2 = this.$M, m$2 = this.$D, v$1 = "set" + (this.$u ? "UTC" : "");
				switch (f$1) {
					case h: return r$1 ? l$1(1, 0) : l$1(31, 11);
					case c: return r$1 ? l$1(1, M$2) : l$1(0, M$2 + 1);
					case o:
						var g$1 = this.$locale().weekStart || 0, D$1 = (y$1 < g$1 ? y$1 + 7 : y$1) - g$1;
						return l$1(r$1 ? m$2 - D$1 : m$2 + (6 - D$1), M$2);
					case a:
					case d: return $$1(v$1 + "Hours", 0);
					case u: return $$1(v$1 + "Minutes", 1);
					case s: return $$1(v$1 + "Seconds", 2);
					case i$1: return $$1(v$1 + "Milliseconds", 3);
					default: return this.clone();
				}
			}, m$1.endOf = function(t$1) {
				return this.startOf(t$1, !1);
			}, m$1.$set = function(t$1, e$1) {
				var n$1, o$1 = b.p(t$1), f$1 = "set" + (this.$u ? "UTC" : ""), l$1 = (n$1 = {}, n$1[a] = f$1 + "Date", n$1[d] = f$1 + "Date", n$1[c] = f$1 + "Month", n$1[h] = f$1 + "FullYear", n$1[u] = f$1 + "Hours", n$1[s] = f$1 + "Minutes", n$1[i$1] = f$1 + "Seconds", n$1[r] = f$1 + "Milliseconds", n$1)[o$1], $$1 = o$1 === a ? this.$D + (e$1 - this.$W) : e$1;
				if (o$1 === c || o$1 === h) {
					var y$1 = this.clone().set(d, 1);
					y$1.$d[l$1]($$1), y$1.init(), this.$d = y$1.set(d, Math.min(this.$D, y$1.daysInMonth())).$d;
				} else l$1 && this.$d[l$1]($$1);
				return this.init(), this;
			}, m$1.set = function(t$1, e$1) {
				return this.clone().$set(t$1, e$1);
			}, m$1.get = function(t$1) {
				return this[b.p(t$1)]();
			}, m$1.add = function(r$1, f$1) {
				var d$1, l$1 = this;
				r$1 = Number(r$1);
				var $$1 = b.p(f$1), y$1 = function(t$1) {
					var e$1 = O(l$1);
					return b.w(e$1.date(e$1.date() + Math.round(t$1 * r$1)), l$1);
				};
				if ($$1 === c) return this.set(c, this.$M + r$1);
				if ($$1 === h) return this.set(h, this.$y + r$1);
				if ($$1 === a) return y$1(1);
				if ($$1 === o) return y$1(7);
				var M$2 = (d$1 = {}, d$1[s] = e, d$1[u] = n, d$1[i$1] = t, d$1)[$$1] || 1, m$2 = this.$d.getTime() + r$1 * M$2;
				return b.w(m$2, this);
			}, m$1.subtract = function(t$1, e$1) {
				return this.add(-1 * t$1, e$1);
			}, m$1.format = function(t$1) {
				var e$1 = this, n$1 = this.$locale();
				if (!this.isValid()) return n$1.invalidDate || l;
				var r$1 = t$1 || "YYYY-MM-DDTHH:mm:ssZ", i$2 = b.z(this), s$1 = this.$H, u$1 = this.$m, a$1 = this.$M, o$1 = n$1.weekdays, c$1 = n$1.months, f$1 = n$1.meridiem, h$1 = function(t$2, n$2, i$3, s$2) {
					return t$2 && (t$2[n$2] || t$2(e$1, r$1)) || i$3[n$2].slice(0, s$2);
				}, d$1 = function(t$2) {
					return b.s(s$1 % 12 || 12, t$2, "0");
				}, $$1 = f$1 || function(t$2, e$2, n$2) {
					var r$2 = t$2 < 12 ? "AM" : "PM";
					return n$2 ? r$2.toLowerCase() : r$2;
				};
				return r$1.replace(y, (function(t$2, r$2) {
					return r$2 || function(t$3) {
						switch (t$3) {
							case "YY": return String(e$1.$y).slice(-2);
							case "YYYY": return b.s(e$1.$y, 4, "0");
							case "M": return a$1 + 1;
							case "MM": return b.s(a$1 + 1, 2, "0");
							case "MMM": return h$1(n$1.monthsShort, a$1, c$1, 3);
							case "MMMM": return h$1(c$1, a$1);
							case "D": return e$1.$D;
							case "DD": return b.s(e$1.$D, 2, "0");
							case "d": return String(e$1.$W);
							case "dd": return h$1(n$1.weekdaysMin, e$1.$W, o$1, 2);
							case "ddd": return h$1(n$1.weekdaysShort, e$1.$W, o$1, 3);
							case "dddd": return o$1[e$1.$W];
							case "H": return String(s$1);
							case "HH": return b.s(s$1, 2, "0");
							case "h": return d$1(1);
							case "hh": return d$1(2);
							case "a": return $$1(s$1, u$1, !0);
							case "A": return $$1(s$1, u$1, !1);
							case "m": return String(u$1);
							case "mm": return b.s(u$1, 2, "0");
							case "s": return String(e$1.$s);
							case "ss": return b.s(e$1.$s, 2, "0");
							case "SSS": return b.s(e$1.$ms, 3, "0");
							case "Z": return i$2;
						}
						return null;
					}(t$2) || i$2.replace(":", "");
				}));
			}, m$1.utcOffset = function() {
				return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
			}, m$1.diff = function(r$1, d$1, l$1) {
				var $$1, y$1 = this, M$2 = b.p(d$1), m$2 = O(r$1), v$1 = (m$2.utcOffset() - this.utcOffset()) * e, g$1 = this - m$2, D$1 = function() {
					return b.m(y$1, m$2);
				};
				switch (M$2) {
					case h:
						$$1 = D$1() / 12;
						break;
					case c:
						$$1 = D$1();
						break;
					case f:
						$$1 = D$1() / 3;
						break;
					case o:
						$$1 = (g$1 - v$1) / 6048e5;
						break;
					case a:
						$$1 = (g$1 - v$1) / 864e5;
						break;
					case u:
						$$1 = g$1 / n;
						break;
					case s:
						$$1 = g$1 / e;
						break;
					case i$1:
						$$1 = g$1 / t;
						break;
					default: $$1 = g$1;
				}
				return l$1 ? $$1 : b.a($$1);
			}, m$1.daysInMonth = function() {
				return this.endOf(c).$D;
			}, m$1.$locale = function() {
				return D[this.$L];
			}, m$1.locale = function(t$1, e$1) {
				if (!t$1) return this.$L;
				var n$1 = this.clone(), r$1 = w(t$1, e$1, !0);
				return r$1 && (n$1.$L = r$1), n$1;
			}, m$1.clone = function() {
				return b.w(this.$d, this);
			}, m$1.toDate = function() {
				return new Date(this.valueOf());
			}, m$1.toJSON = function() {
				return this.isValid() ? this.toISOString() : null;
			}, m$1.toISOString = function() {
				return this.$d.toISOString();
			}, m$1.toString = function() {
				return this.$d.toUTCString();
			}, M$1;
		}(), k = _.prototype;
		return O.prototype = k, [
			["$ms", r],
			["$s", i$1],
			["$m", s],
			["$H", u],
			["$W", a],
			["$M", c],
			["$y", h],
			["$D", d]
		].forEach((function(t$1) {
			k[t$1[1]] = function(e$1) {
				return this.$g(e$1, t$1[0], t$1[1]);
			};
		})), O.extend = function(t$1, e$1) {
			return t$1.$i || (t$1(e$1, _, O), t$1.$i = !0), O;
		}, O.locale = w, O.isDayjs = S, O.unix = function(t$1) {
			return O(1e3 * t$1);
		}, O.en = D[g], O.Ls = D, O.p = {}, O;
	}));
}));
var { abs: abs$1, max: max$1, min: min$1 } = Math;
["w", "e"].map(type$1);
["n", "s"].map(type$1);
[
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(type$1);
function type$1(t) {
	return { type: t };
}
const abs = Math.abs;
const atan2 = Math.atan2;
const cos = Math.cos;
const max = Math.max;
const min = Math.min;
const sin = Math.sin;
const sqrt = Math.sqrt;
const epsilon = 1e-12;
const pi = Math.PI;
const halfPi = pi / 2;
const tau = 2 * pi;
function acos(x) {
	return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}
function asin(x) {
	return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}
function Linear(context) {
	this._context = context;
}
Linear.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
		this._line = 1 - this._line;
	},
	point: function(x, y) {
		x = +x, y = +y;
		switch (this._point) {
			case 0:
				this._point = 1;
				this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
				break;
			case 1: this._point = 2;
			default:
				this._context.lineTo(x, y);
				break;
		}
	}
};
function linear_default(context) {
	return new Linear(context);
}
var Bump = class {
	constructor(context, x) {
		this._context = context;
		this._x = x;
	}
	areaStart() {
		this._line = 0;
	}
	areaEnd() {
		this._line = NaN;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {
		if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
		this._line = 1 - this._line;
	}
	point(x, y) {
		x = +x, y = +y;
		switch (this._point) {
			case 0:
				this._point = 1;
				if (this._line) this._context.lineTo(x, y);
				else this._context.moveTo(x, y);
				break;
			case 1: this._point = 2;
			default:
				if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
				else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
				break;
		}
		this._x0 = x, this._y0 = y;
	}
};
function bumpX(context) {
	return new Bump(context, true);
}
function bumpY(context) {
	return new Bump(context, false);
}
function noop_default() {}
function point$3(that, x, y) {
	that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
}
function Basis(context) {
	this._context = context;
}
Basis.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN;
		this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 3: point$3(this, this._x1, this._y1);
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
		}
		if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
		this._line = 1 - this._line;
	},
	point: function(x, y) {
		x = +x, y = +y;
		switch (this._point) {
			case 0:
				this._point = 1;
				this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
			default:
				point$3(this, x, y);
				break;
		}
		this._x0 = this._x1, this._x1 = x;
		this._y0 = this._y1, this._y1 = y;
	}
};
function basis_default(context) {
	return new Basis(context);
}
function BasisClosed(context) {
	this._context = context;
}
BasisClosed.prototype = {
	areaStart: noop_default,
	areaEnd: noop_default,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
		this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x2, this._y2);
				this._context.closePath();
				break;
			case 2:
				this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
				this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
				this._context.closePath();
				break;
			case 3:
				this.point(this._x2, this._y2);
				this.point(this._x3, this._y3);
				this.point(this._x4, this._y4);
				break;
		}
	},
	point: function(x, y) {
		x = +x, y = +y;
		switch (this._point) {
			case 0:
				this._point = 1;
				this._x2 = x, this._y2 = y;
				break;
			case 1:
				this._point = 2;
				this._x3 = x, this._y3 = y;
				break;
			case 2:
				this._point = 3;
				this._x4 = x, this._y4 = y;
				this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
				break;
			default:
				point$3(this, x, y);
				break;
		}
		this._x0 = this._x1, this._x1 = x;
		this._y0 = this._y1, this._y1 = y;
	}
};
function basisClosed_default(context) {
	return new BasisClosed(context);
}
function BasisOpen(context) {
	this._context = context;
}
BasisOpen.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN;
		this._point = 0;
	},
	lineEnd: function() {
		if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
		this._line = 1 - this._line;
	},
	point: function(x, y) {
		x = +x, y = +y;
		switch (this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6;
				this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
				break;
			case 3: this._point = 4;
			default:
				point$3(this, x, y);
				break;
		}
		this._x0 = this._x1, this._x1 = x;
		this._y0 = this._y1, this._y1 = y;
	}
};
function basisOpen_default(context) {
	return new BasisOpen(context);
}
function Bundle(context, beta) {
	this._basis = new Basis(context);
	this._beta = beta;
}
Bundle.prototype = {
	lineStart: function() {
		this._x = [];
		this._y = [];
		this._basis.lineStart();
	},
	lineEnd: function() {
		var x = this._x, y = this._y, j = x.length - 1;
		if (j > 0) {
			var x0 = x[0], y0 = y[0], dx = x[j] - x0, dy = y[j] - y0, i$1 = -1, t;
			while (++i$1 <= j) {
				t = i$1 / j;
				this._basis.point(this._beta * x[i$1] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i$1] + (1 - this._beta) * (y0 + t * dy));
			}
		}
		this._x = this._y = null;
		this._basis.lineEnd();
	},
	point: function(x, y) {
		this._x.push(+x);
		this._y.push(+y);
	}
};
var bundle_default = (function custom(beta) {
	function bundle(context) {
		return beta === 1 ? new Basis(context) : new Bundle(context, beta);
	}
	bundle.beta = function(beta$1) {
		return custom(+beta$1);
	};
	return bundle;
})(.85);
function point$2(that, x, y) {
	that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
}
function Cardinal(context, tension) {
	this._context = context;
	this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
		this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3:
				point$2(this, this._x1, this._y1);
				break;
		}
		if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
		this._line = 1 - this._line;
	},
	point: function(x, y) {
		x = +x, y = +y;
		switch (this._point) {
			case 0:
				this._point = 1;
				this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
				break;
			case 1:
				this._point = 2;
				this._x1 = x, this._y1 = y;
				break;
			case 2: this._point = 3;
			default:
				point$2(this, x, y);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
		this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	}
};
var cardinal_default = (function custom(tension) {
	function cardinal(context) {
		return new Cardinal(context, tension);
	}
	cardinal.tension = function(tension$1) {
		return custom(+tension$1);
	};
	return cardinal;
})(0);
function CardinalClosed(context, tension) {
	this._context = context;
	this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
	areaStart: noop_default,
	areaEnd: noop_default,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
		this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3);
				this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3);
				this._context.closePath();
				break;
			case 3:
				this.point(this._x3, this._y3);
				this.point(this._x4, this._y4);
				this.point(this._x5, this._y5);
				break;
		}
	},
	point: function(x, y) {
		x = +x, y = +y;
		switch (this._point) {
			case 0:
				this._point = 1;
				this._x3 = x, this._y3 = y;
				break;
			case 1:
				this._point = 2;
				this._context.moveTo(this._x4 = x, this._y4 = y);
				break;
			case 2:
				this._point = 3;
				this._x5 = x, this._y5 = y;
				break;
			default:
				point$2(this, x, y);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
		this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	}
};
var cardinalClosed_default = (function custom(tension) {
	function cardinal(context) {
		return new CardinalClosed(context, tension);
	}
	cardinal.tension = function(tension$1) {
		return custom(+tension$1);
	};
	return cardinal;
})(0);
function CardinalOpen(context, tension) {
	this._context = context;
	this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
		this._point = 0;
	},
	lineEnd: function() {
		if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
		this._line = 1 - this._line;
	},
	point: function(x, y) {
		x = +x, y = +y;
		switch (this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default:
				point$2(this, x, y);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
		this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	}
};
var cardinalOpen_default = (function custom(tension) {
	function cardinal(context) {
		return new CardinalOpen(context, tension);
	}
	cardinal.tension = function(tension$1) {
		return custom(+tension$1);
	};
	return cardinal;
})(0);
function point$1(that, x, y) {
	var x1 = that._x1, y1 = that._y1, x2 = that._x2, y2 = that._y2;
	if (that._l01_a > 1e-12) {
		var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
		x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
		y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
	}
	if (that._l23_a > 1e-12) {
		var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
		x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
		y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
	}
	that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
	this._context = context;
	this._alpha = alpha;
}
CatmullRom.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
		this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3:
				this.point(this._x2, this._y2);
				break;
		}
		if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
		this._line = 1 - this._line;
	},
	point: function(x, y) {
		x = +x, y = +y;
		if (this._point) {
			var x23 = this._x2 - x, y23 = this._y2 - y;
			this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
		}
		switch (this._point) {
			case 0:
				this._point = 1;
				this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3;
			default:
				point$1(this, x, y);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a;
		this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
		this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	}
};
var catmullRom_default = (function custom(alpha) {
	function catmullRom(context) {
		return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
	}
	catmullRom.alpha = function(alpha$1) {
		return custom(+alpha$1);
	};
	return catmullRom;
})(.5);
function CatmullRomClosed(context, alpha) {
	this._context = context;
	this._alpha = alpha;
}
CatmullRomClosed.prototype = {
	areaStart: noop_default,
	areaEnd: noop_default,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
		this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3);
				this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3);
				this._context.closePath();
				break;
			case 3:
				this.point(this._x3, this._y3);
				this.point(this._x4, this._y4);
				this.point(this._x5, this._y5);
				break;
		}
	},
	point: function(x, y) {
		x = +x, y = +y;
		if (this._point) {
			var x23 = this._x2 - x, y23 = this._y2 - y;
			this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
		}
		switch (this._point) {
			case 0:
				this._point = 1;
				this._x3 = x, this._y3 = y;
				break;
			case 1:
				this._point = 2;
				this._context.moveTo(this._x4 = x, this._y4 = y);
				break;
			case 2:
				this._point = 3;
				this._x5 = x, this._y5 = y;
				break;
			default:
				point$1(this, x, y);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a;
		this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
		this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	}
};
var catmullRomClosed_default = (function custom(alpha) {
	function catmullRom(context) {
		return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
	}
	catmullRom.alpha = function(alpha$1) {
		return custom(+alpha$1);
	};
	return catmullRom;
})(.5);
function CatmullRomOpen(context, alpha) {
	this._context = context;
	this._alpha = alpha;
}
CatmullRomOpen.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
		this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
		this._line = 1 - this._line;
	},
	point: function(x, y) {
		x = +x, y = +y;
		if (this._point) {
			var x23 = this._x2 - x, y23 = this._y2 - y;
			this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
		}
		switch (this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default:
				point$1(this, x, y);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a;
		this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
		this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	}
};
var catmullRomOpen_default = (function custom(alpha) {
	function catmullRom(context) {
		return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
	}
	catmullRom.alpha = function(alpha$1) {
		return custom(+alpha$1);
	};
	return catmullRom;
})(.5);
function LinearClosed(context) {
	this._context = context;
}
LinearClosed.prototype = {
	areaStart: noop_default,
	areaEnd: noop_default,
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		if (this._point) this._context.closePath();
	},
	point: function(x, y) {
		x = +x, y = +y;
		if (this._point) this._context.lineTo(x, y);
		else this._point = 1, this._context.moveTo(x, y);
	}
};
function linearClosed_default(context) {
	return new LinearClosed(context);
}
function sign(x) {
	return x < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
	var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
	return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), .5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
	var h = that._x1 - that._x0;
	return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point(that, t0, t1) {
	var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
	that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function MonotoneX(context) {
	this._context = context;
}
MonotoneX.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
		this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
			case 3:
				point(this, this._t0, slope2(this, this._t0));
				break;
		}
		if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
		this._line = 1 - this._line;
	},
	point: function(x, y) {
		var t1 = NaN;
		x = +x, y = +y;
		if (x === this._x1 && y === this._y1) return;
		switch (this._point) {
			case 0:
				this._point = 1;
				this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				point(this, slope2(this, t1 = slope3(this, x, y)), t1);
				break;
			default:
				point(this, this._t0, t1 = slope3(this, x, y));
				break;
		}
		this._x0 = this._x1, this._x1 = x;
		this._y0 = this._y1, this._y1 = y;
		this._t0 = t1;
	}
};
function MonotoneY(context) {
	this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
	MonotoneX.prototype.point.call(this, y, x);
};
function ReflectContext(context) {
	this._context = context;
}
ReflectContext.prototype = {
	moveTo: function(x, y) {
		this._context.moveTo(y, x);
	},
	closePath: function() {
		this._context.closePath();
	},
	lineTo: function(x, y) {
		this._context.lineTo(y, x);
	},
	bezierCurveTo: function(x1, y1, x2, y2, x, y) {
		this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
	}
};
function monotoneX(context) {
	return new MonotoneX(context);
}
function monotoneY(context) {
	return new MonotoneY(context);
}
function Natural(context) {
	this._context = context;
}
Natural.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = [];
		this._y = [];
	},
	lineEnd: function() {
		var x = this._x, y = this._y, n = x.length;
		if (n) {
			this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
			if (n === 2) this._context.lineTo(x[1], y[1]);
			else {
				var px = controlPoints(x), py = controlPoints(y);
				for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
			}
		}
		if (this._line || this._line !== 0 && n === 1) this._context.closePath();
		this._line = 1 - this._line;
		this._x = this._y = null;
	},
	point: function(x, y) {
		this._x.push(+x);
		this._y.push(+y);
	}
};
function controlPoints(x) {
	var i$1, n = x.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
	a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
	for (i$1 = 1; i$1 < n - 1; ++i$1) a[i$1] = 1, b[i$1] = 4, r[i$1] = 4 * x[i$1] + 2 * x[i$1 + 1];
	a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
	for (i$1 = 1; i$1 < n; ++i$1) m = a[i$1] / b[i$1 - 1], b[i$1] -= m, r[i$1] -= m * r[i$1 - 1];
	a[n - 1] = r[n - 1] / b[n - 1];
	for (i$1 = n - 2; i$1 >= 0; --i$1) a[i$1] = (r[i$1] - a[i$1 + 1]) / b[i$1];
	b[n - 1] = (x[n] + a[n - 1]) / 2;
	for (i$1 = 0; i$1 < n - 1; ++i$1) b[i$1] = 2 * x[i$1 + 1] - a[i$1 + 1];
	return [a, b];
}
function natural_default(context) {
	return new Natural(context);
}
function Step(context, t) {
	this._context = context;
	this._t = t;
}
Step.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = this._y = NaN;
		this._point = 0;
	},
	lineEnd: function() {
		if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
		if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
		if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
	},
	point: function(x, y) {
		x = +x, y = +y;
		switch (this._point) {
			case 0:
				this._point = 1;
				this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
				break;
			case 1: this._point = 2;
			default:
				if (this._t <= 0) {
					this._context.lineTo(this._x, y);
					this._context.lineTo(x, y);
				} else {
					var x1 = this._x * (1 - this._t) + x * this._t;
					this._context.lineTo(x1, this._y);
					this._context.lineTo(x1, y);
				}
				break;
		}
		this._x = x, this._y = y;
	}
};
function step_default(context) {
	return new Step(context, .5);
}
function stepBefore(context) {
	return new Step(context, 0);
}
function stepAfter(context) {
	return new Step(context, 1);
}
var require_purify = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(global, factory) {
		typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.DOMPurify = factory());
	})(exports, (function() {
		"use strict";
		const { entries, setPrototypeOf, isFrozen, getPrototypeOf, getOwnPropertyDescriptor } = Object;
		let { freeze, seal, create } = Object;
		let { apply: apply$1, construct } = typeof Reflect !== "undefined" && Reflect;
		if (!freeze) freeze = function freeze$1(x) {
			return x;
		};
		if (!seal) seal = function seal$1(x) {
			return x;
		};
		if (!apply$1) apply$1 = function apply$2(fun, thisValue, args) {
			return fun.apply(thisValue, args);
		};
		if (!construct) construct = function construct$1(Func, args) {
			return new Func(...args);
		};
		const arrayForEach = unapply(Array.prototype.forEach);
		const arrayPop = unapply(Array.prototype.pop);
		const arrayPush = unapply(Array.prototype.push);
		const stringToLowerCase = unapply(String.prototype.toLowerCase);
		const stringToString = unapply(String.prototype.toString);
		const stringMatch = unapply(String.prototype.match);
		const stringReplace = unapply(String.prototype.replace);
		const stringIndexOf = unapply(String.prototype.indexOf);
		const stringTrim = unapply(String.prototype.trim);
		const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
		const regExpTest = unapply(RegExp.prototype.test);
		const typeErrorCreate = unconstruct(TypeError);
		function unapply(func) {
			return function(thisArg) {
				for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
				return apply$1(func, thisArg, args);
			};
		}
		function unconstruct(func) {
			return function() {
				for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
				return construct(func, args);
			};
		}
		function addToSet(set$1, array) {
			let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
			if (setPrototypeOf) setPrototypeOf(set$1, null);
			let l = array.length;
			while (l--) {
				let element = array[l];
				if (typeof element === "string") {
					const lcElement = transformCaseFunc(element);
					if (lcElement !== element) {
						if (!isFrozen(array)) array[l] = lcElement;
						element = lcElement;
					}
				}
				set$1[element] = true;
			}
			return set$1;
		}
		function cleanArray(array) {
			for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
			return array;
		}
		function clone(object) {
			const newObject = create(null);
			for (const [property, value] of entries(object)) if (objectHasOwnProperty(object, property)) if (Array.isArray(value)) newObject[property] = cleanArray(value);
			else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
			else newObject[property] = value;
			return newObject;
		}
		function lookupGetter(object, prop) {
			while (object !== null) {
				const desc = getOwnPropertyDescriptor(object, prop);
				if (desc) {
					if (desc.get) return unapply(desc.get);
					if (typeof desc.value === "function") return unapply(desc.value);
				}
				object = getPrototypeOf(object);
			}
			function fallbackValue() {
				return null;
			}
			return fallbackValue;
		}
		const html$1 = freeze([
			"a",
			"abbr",
			"acronym",
			"address",
			"area",
			"article",
			"aside",
			"audio",
			"b",
			"bdi",
			"bdo",
			"big",
			"blink",
			"blockquote",
			"body",
			"br",
			"button",
			"canvas",
			"caption",
			"center",
			"cite",
			"code",
			"col",
			"colgroup",
			"content",
			"data",
			"datalist",
			"dd",
			"decorator",
			"del",
			"details",
			"dfn",
			"dialog",
			"dir",
			"div",
			"dl",
			"dt",
			"element",
			"em",
			"fieldset",
			"figcaption",
			"figure",
			"font",
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
			"img",
			"input",
			"ins",
			"kbd",
			"label",
			"legend",
			"li",
			"main",
			"map",
			"mark",
			"marquee",
			"menu",
			"menuitem",
			"meter",
			"nav",
			"nobr",
			"ol",
			"optgroup",
			"option",
			"output",
			"p",
			"picture",
			"pre",
			"progress",
			"q",
			"rp",
			"rt",
			"ruby",
			"s",
			"samp",
			"section",
			"select",
			"shadow",
			"small",
			"source",
			"spacer",
			"span",
			"strike",
			"strong",
			"style",
			"sub",
			"summary",
			"sup",
			"table",
			"tbody",
			"td",
			"template",
			"textarea",
			"tfoot",
			"th",
			"thead",
			"time",
			"tr",
			"track",
			"tt",
			"u",
			"ul",
			"var",
			"video",
			"wbr"
		]);
		const svg$1 = freeze([
			"svg",
			"a",
			"altglyph",
			"altglyphdef",
			"altglyphitem",
			"animatecolor",
			"animatemotion",
			"animatetransform",
			"circle",
			"clippath",
			"defs",
			"desc",
			"ellipse",
			"filter",
			"font",
			"g",
			"glyph",
			"glyphref",
			"hkern",
			"image",
			"line",
			"lineargradient",
			"marker",
			"mask",
			"metadata",
			"mpath",
			"path",
			"pattern",
			"polygon",
			"polyline",
			"radialgradient",
			"rect",
			"stop",
			"style",
			"switch",
			"symbol",
			"text",
			"textpath",
			"title",
			"tref",
			"tspan",
			"view",
			"vkern"
		]);
		const svgFilters = freeze([
			"feBlend",
			"feColorMatrix",
			"feComponentTransfer",
			"feComposite",
			"feConvolveMatrix",
			"feDiffuseLighting",
			"feDisplacementMap",
			"feDistantLight",
			"feDropShadow",
			"feFlood",
			"feFuncA",
			"feFuncB",
			"feFuncG",
			"feFuncR",
			"feGaussianBlur",
			"feImage",
			"feMerge",
			"feMergeNode",
			"feMorphology",
			"feOffset",
			"fePointLight",
			"feSpecularLighting",
			"feSpotLight",
			"feTile",
			"feTurbulence"
		]);
		const svgDisallowed = freeze([
			"animate",
			"color-profile",
			"cursor",
			"discard",
			"font-face",
			"font-face-format",
			"font-face-name",
			"font-face-src",
			"font-face-uri",
			"foreignobject",
			"hatch",
			"hatchpath",
			"mesh",
			"meshgradient",
			"meshpatch",
			"meshrow",
			"missing-glyph",
			"script",
			"set",
			"solidcolor",
			"unknown",
			"use"
		]);
		const mathMl$1 = freeze([
			"math",
			"menclose",
			"merror",
			"mfenced",
			"mfrac",
			"mglyph",
			"mi",
			"mlabeledtr",
			"mmultiscripts",
			"mn",
			"mo",
			"mover",
			"mpadded",
			"mphantom",
			"mroot",
			"mrow",
			"ms",
			"mspace",
			"msqrt",
			"mstyle",
			"msub",
			"msup",
			"msubsup",
			"mtable",
			"mtd",
			"mtext",
			"mtr",
			"munder",
			"munderover",
			"mprescripts"
		]);
		const mathMlDisallowed = freeze([
			"maction",
			"maligngroup",
			"malignmark",
			"mlongdiv",
			"mscarries",
			"mscarry",
			"msgroup",
			"mstack",
			"msline",
			"msrow",
			"semantics",
			"annotation",
			"annotation-xml",
			"mprescripts",
			"none"
		]);
		const text = freeze(["#text"]);
		const html = freeze([
			"accept",
			"action",
			"align",
			"alt",
			"autocapitalize",
			"autocomplete",
			"autopictureinpicture",
			"autoplay",
			"background",
			"bgcolor",
			"border",
			"capture",
			"cellpadding",
			"cellspacing",
			"checked",
			"cite",
			"class",
			"clear",
			"color",
			"cols",
			"colspan",
			"controls",
			"controlslist",
			"coords",
			"crossorigin",
			"datetime",
			"decoding",
			"default",
			"dir",
			"disabled",
			"disablepictureinpicture",
			"disableremoteplayback",
			"download",
			"draggable",
			"enctype",
			"enterkeyhint",
			"face",
			"for",
			"headers",
			"height",
			"hidden",
			"high",
			"href",
			"hreflang",
			"id",
			"inputmode",
			"integrity",
			"ismap",
			"kind",
			"label",
			"lang",
			"list",
			"loading",
			"loop",
			"low",
			"max",
			"maxlength",
			"media",
			"method",
			"min",
			"minlength",
			"multiple",
			"muted",
			"name",
			"nonce",
			"noshade",
			"novalidate",
			"nowrap",
			"open",
			"optimum",
			"pattern",
			"placeholder",
			"playsinline",
			"popover",
			"popovertarget",
			"popovertargetaction",
			"poster",
			"preload",
			"pubdate",
			"radiogroup",
			"readonly",
			"rel",
			"required",
			"rev",
			"reversed",
			"role",
			"rows",
			"rowspan",
			"spellcheck",
			"scope",
			"selected",
			"shape",
			"size",
			"sizes",
			"span",
			"srclang",
			"start",
			"src",
			"srcset",
			"step",
			"style",
			"summary",
			"tabindex",
			"title",
			"translate",
			"type",
			"usemap",
			"valign",
			"value",
			"width",
			"wrap",
			"xmlns",
			"slot"
		]);
		const svg = freeze([
			"accent-height",
			"accumulate",
			"additive",
			"alignment-baseline",
			"ascent",
			"attributename",
			"attributetype",
			"azimuth",
			"basefrequency",
			"baseline-shift",
			"begin",
			"bias",
			"by",
			"class",
			"clip",
			"clippathunits",
			"clip-path",
			"clip-rule",
			"color",
			"color-interpolation",
			"color-interpolation-filters",
			"color-profile",
			"color-rendering",
			"cx",
			"cy",
			"d",
			"dx",
			"dy",
			"diffuseconstant",
			"direction",
			"display",
			"divisor",
			"dur",
			"edgemode",
			"elevation",
			"end",
			"fill",
			"fill-opacity",
			"fill-rule",
			"filter",
			"filterunits",
			"flood-color",
			"flood-opacity",
			"font-family",
			"font-size",
			"font-size-adjust",
			"font-stretch",
			"font-style",
			"font-variant",
			"font-weight",
			"fx",
			"fy",
			"g1",
			"g2",
			"glyph-name",
			"glyphref",
			"gradientunits",
			"gradienttransform",
			"height",
			"href",
			"id",
			"image-rendering",
			"in",
			"in2",
			"k",
			"k1",
			"k2",
			"k3",
			"k4",
			"kerning",
			"keypoints",
			"keysplines",
			"keytimes",
			"lang",
			"lengthadjust",
			"letter-spacing",
			"kernelmatrix",
			"kernelunitlength",
			"lighting-color",
			"local",
			"marker-end",
			"marker-mid",
			"marker-start",
			"markerheight",
			"markerunits",
			"markerwidth",
			"maskcontentunits",
			"maskunits",
			"max",
			"mask",
			"media",
			"method",
			"mode",
			"min",
			"name",
			"numoctaves",
			"offset",
			"operator",
			"opacity",
			"order",
			"orient",
			"orientation",
			"origin",
			"overflow",
			"paint-order",
			"path",
			"pathlength",
			"patterncontentunits",
			"patterntransform",
			"patternunits",
			"points",
			"preservealpha",
			"preserveaspectratio",
			"primitiveunits",
			"r",
			"rx",
			"ry",
			"radius",
			"refx",
			"refy",
			"repeatcount",
			"repeatdur",
			"restart",
			"result",
			"rotate",
			"scale",
			"seed",
			"shape-rendering",
			"specularconstant",
			"specularexponent",
			"spreadmethod",
			"startoffset",
			"stddeviation",
			"stitchtiles",
			"stop-color",
			"stop-opacity",
			"stroke-dasharray",
			"stroke-dashoffset",
			"stroke-linecap",
			"stroke-linejoin",
			"stroke-miterlimit",
			"stroke-opacity",
			"stroke",
			"stroke-width",
			"style",
			"surfacescale",
			"systemlanguage",
			"tabindex",
			"targetx",
			"targety",
			"transform",
			"transform-origin",
			"text-anchor",
			"text-decoration",
			"text-rendering",
			"textlength",
			"type",
			"u1",
			"u2",
			"unicode",
			"values",
			"viewbox",
			"visibility",
			"version",
			"vert-adv-y",
			"vert-origin-x",
			"vert-origin-y",
			"width",
			"word-spacing",
			"wrap",
			"writing-mode",
			"xchannelselector",
			"ychannelselector",
			"x",
			"x1",
			"x2",
			"xmlns",
			"y",
			"y1",
			"y2",
			"z",
			"zoomandpan"
		]);
		const mathMl = freeze([
			"accent",
			"accentunder",
			"align",
			"bevelled",
			"close",
			"columnsalign",
			"columnlines",
			"columnspan",
			"denomalign",
			"depth",
			"dir",
			"display",
			"displaystyle",
			"encoding",
			"fence",
			"frame",
			"height",
			"href",
			"id",
			"largeop",
			"length",
			"linethickness",
			"lspace",
			"lquote",
			"mathbackground",
			"mathcolor",
			"mathsize",
			"mathvariant",
			"maxsize",
			"minsize",
			"movablelimits",
			"notation",
			"numalign",
			"open",
			"rowalign",
			"rowlines",
			"rowspacing",
			"rowspan",
			"rspace",
			"rquote",
			"scriptlevel",
			"scriptminsize",
			"scriptsizemultiplier",
			"selection",
			"separator",
			"separators",
			"stretchy",
			"subscriptshift",
			"supscriptshift",
			"symmetric",
			"voffset",
			"width",
			"xmlns"
		]);
		const xml = freeze([
			"xlink:href",
			"xml:id",
			"xlink:title",
			"xml:space",
			"xmlns:xlink"
		]);
		const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
		const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
		const TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
		const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
		const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
		const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
		const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
		const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
		const DOCTYPE_NAME = seal(/^html$/i);
		const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
		var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
			__proto__: null,
			MUSTACHE_EXPR,
			ERB_EXPR,
			TMPLIT_EXPR,
			DATA_ATTR,
			ARIA_ATTR,
			IS_ALLOWED_URI,
			IS_SCRIPT_OR_DATA,
			ATTR_WHITESPACE,
			DOCTYPE_NAME,
			CUSTOM_ELEMENT
		});
		const NODE_TYPE = {
			element: 1,
			attribute: 2,
			text: 3,
			cdataSection: 4,
			entityReference: 5,
			entityNode: 6,
			progressingInstruction: 7,
			comment: 8,
			document: 9,
			documentType: 10,
			documentFragment: 11,
			notation: 12
		};
		const getGlobal = function getGlobal$1() {
			return typeof window === "undefined" ? null : window;
		};
		const _createTrustedTypesPolicy = function _createTrustedTypesPolicy$1(trustedTypes, purifyHostElement) {
			if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
			let suffix = null;
			const ATTR_NAME = "data-tt-policy-suffix";
			if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
			const policyName = "dompurify" + (suffix ? "#" + suffix : "");
			try {
				return trustedTypes.createPolicy(policyName, {
					createHTML(html$2) {
						return html$2;
					},
					createScriptURL(scriptUrl) {
						return scriptUrl;
					}
				});
			} catch (_) {
				console.warn("TrustedTypes policy " + policyName + " could not be created.");
				return null;
			}
		};
		function createDOMPurify() {
			let window$1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
			const DOMPurify$1 = (root) => createDOMPurify(root);
			DOMPurify$1.version = "3.1.6";
			DOMPurify$1.removed = [];
			if (!window$1 || !window$1.document || window$1.document.nodeType !== NODE_TYPE.document) {
				DOMPurify$1.isSupported = false;
				return DOMPurify$1;
			}
			let { document: document$1 } = window$1;
			const originalDocument = document$1;
			const currentScript = originalDocument.currentScript;
			const { DocumentFragment, HTMLTemplateElement, Node, Element, NodeFilter, NamedNodeMap = window$1.NamedNodeMap || window$1.MozNamedAttrMap, HTMLFormElement, DOMParser, trustedTypes } = window$1;
			const ElementPrototype = Element.prototype;
			const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
			const remove = lookupGetter(ElementPrototype, "remove");
			const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
			const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
			const getParentNode = lookupGetter(ElementPrototype, "parentNode");
			if (typeof HTMLTemplateElement === "function") {
				const template = document$1.createElement("template");
				if (template.content && template.content.ownerDocument) document$1 = template.content.ownerDocument;
			}
			let trustedTypesPolicy;
			let emptyHTML = "";
			const { implementation, createNodeIterator, createDocumentFragment, getElementsByTagName } = document$1;
			const { importNode } = originalDocument;
			let hooks = {};
			DOMPurify$1.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
			const { MUSTACHE_EXPR: MUSTACHE_EXPR$1, ERB_EXPR: ERB_EXPR$1, TMPLIT_EXPR: TMPLIT_EXPR$1, DATA_ATTR: DATA_ATTR$1, ARIA_ATTR: ARIA_ATTR$1, IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA$1, ATTR_WHITESPACE: ATTR_WHITESPACE$1, CUSTOM_ELEMENT: CUSTOM_ELEMENT$1 } = EXPRESSIONS;
			let { IS_ALLOWED_URI: IS_ALLOWED_URI$1 } = EXPRESSIONS;
			let ALLOWED_TAGS = null;
			const DEFAULT_ALLOWED_TAGS = addToSet({}, [
				...html$1,
				...svg$1,
				...svgFilters,
				...mathMl$1,
				...text
			]);
			let ALLOWED_ATTR = null;
			const DEFAULT_ALLOWED_ATTR = addToSet({}, [
				...html,
				...svg,
				...mathMl,
				...xml
			]);
			let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
				tagNameCheck: {
					writable: true,
					configurable: false,
					enumerable: true,
					value: null
				},
				attributeNameCheck: {
					writable: true,
					configurable: false,
					enumerable: true,
					value: null
				},
				allowCustomizedBuiltInElements: {
					writable: true,
					configurable: false,
					enumerable: true,
					value: false
				}
			}));
			let FORBID_TAGS = null;
			let FORBID_ATTR = null;
			let ALLOW_ARIA_ATTR = true;
			let ALLOW_DATA_ATTR = true;
			let ALLOW_UNKNOWN_PROTOCOLS = false;
			let ALLOW_SELF_CLOSE_IN_ATTR = true;
			let SAFE_FOR_TEMPLATES = false;
			let SAFE_FOR_XML = true;
			let WHOLE_DOCUMENT = false;
			let SET_CONFIG = false;
			let FORCE_BODY = false;
			let RETURN_DOM = false;
			let RETURN_DOM_FRAGMENT = false;
			let RETURN_TRUSTED_TYPE = false;
			let SANITIZE_DOM = true;
			let SANITIZE_NAMED_PROPS = false;
			const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
			let KEEP_CONTENT = true;
			let IN_PLACE = false;
			let USE_PROFILES = {};
			let FORBID_CONTENTS = null;
			const DEFAULT_FORBID_CONTENTS = addToSet({}, [
				"annotation-xml",
				"audio",
				"colgroup",
				"desc",
				"foreignobject",
				"head",
				"iframe",
				"math",
				"mi",
				"mn",
				"mo",
				"ms",
				"mtext",
				"noembed",
				"noframes",
				"noscript",
				"plaintext",
				"script",
				"style",
				"svg",
				"template",
				"thead",
				"title",
				"video",
				"xmp"
			]);
			let DATA_URI_TAGS = null;
			const DEFAULT_DATA_URI_TAGS = addToSet({}, [
				"audio",
				"video",
				"img",
				"source",
				"image",
				"track"
			]);
			let URI_SAFE_ATTRIBUTES = null;
			const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
				"alt",
				"class",
				"for",
				"id",
				"label",
				"name",
				"pattern",
				"placeholder",
				"role",
				"summary",
				"title",
				"value",
				"style",
				"xmlns"
			]);
			const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
			const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
			const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
			let NAMESPACE = HTML_NAMESPACE;
			let IS_EMPTY_INPUT = false;
			let ALLOWED_NAMESPACES = null;
			const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
				MATHML_NAMESPACE,
				SVG_NAMESPACE,
				HTML_NAMESPACE
			], stringToString);
			let PARSER_MEDIA_TYPE = null;
			const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
			const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
			let transformCaseFunc = null;
			let CONFIG = null;
			const formElement = document$1.createElement("form");
			const isRegexOrFunction = function isRegexOrFunction$1(testValue) {
				return testValue instanceof RegExp || testValue instanceof Function;
			};
			const _parseConfig = function _parseConfig$1() {
				let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
				if (CONFIG && CONFIG === cfg) return;
				if (!cfg || typeof cfg !== "object") cfg = {};
				cfg = clone(cfg);
				PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
				transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
				ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
				ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
				ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
				URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
				DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
				FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
				FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
				FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
				USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
				ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
				ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
				ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
				ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
				SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
				SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
				WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
				RETURN_DOM = cfg.RETURN_DOM || false;
				RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
				RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
				FORCE_BODY = cfg.FORCE_BODY || false;
				SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
				SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
				KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
				IN_PLACE = cfg.IN_PLACE || false;
				IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
				NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
				CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
				if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
				if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
				if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
				if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
				if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
				if (USE_PROFILES) {
					ALLOWED_TAGS = addToSet({}, text);
					ALLOWED_ATTR = [];
					if (USE_PROFILES.html === true) {
						addToSet(ALLOWED_TAGS, html$1);
						addToSet(ALLOWED_ATTR, html);
					}
					if (USE_PROFILES.svg === true) {
						addToSet(ALLOWED_TAGS, svg$1);
						addToSet(ALLOWED_ATTR, svg);
						addToSet(ALLOWED_ATTR, xml);
					}
					if (USE_PROFILES.svgFilters === true) {
						addToSet(ALLOWED_TAGS, svgFilters);
						addToSet(ALLOWED_ATTR, svg);
						addToSet(ALLOWED_ATTR, xml);
					}
					if (USE_PROFILES.mathMl === true) {
						addToSet(ALLOWED_TAGS, mathMl$1);
						addToSet(ALLOWED_ATTR, mathMl);
						addToSet(ALLOWED_ATTR, xml);
					}
				}
				if (cfg.ADD_TAGS) {
					if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
					addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
				}
				if (cfg.ADD_ATTR) {
					if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
					addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
				}
				if (cfg.ADD_URI_SAFE_ATTR) addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
				if (cfg.FORBID_CONTENTS) {
					if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
					addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
				}
				if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
				if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
					"html",
					"head",
					"body"
				]);
				if (ALLOWED_TAGS.table) {
					addToSet(ALLOWED_TAGS, ["tbody"]);
					delete FORBID_TAGS.tbody;
				}
				if (cfg.TRUSTED_TYPES_POLICY) {
					if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
					if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
					trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
					emptyHTML = trustedTypesPolicy.createHTML("");
				} else {
					if (trustedTypesPolicy === void 0) trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
					if (trustedTypesPolicy !== null && typeof emptyHTML === "string") emptyHTML = trustedTypesPolicy.createHTML("");
				}
				if (freeze) freeze(cfg);
				CONFIG = cfg;
			};
			const MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
				"mi",
				"mo",
				"mn",
				"ms",
				"mtext"
			]);
			const HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "annotation-xml"]);
			const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
				"title",
				"style",
				"font",
				"a",
				"script"
			]);
			const ALL_SVG_TAGS = addToSet({}, [
				...svg$1,
				...svgFilters,
				...svgDisallowed
			]);
			const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
			const _checkValidNamespace = function _checkValidNamespace$1(element) {
				let parent = getParentNode(element);
				if (!parent || !parent.tagName) parent = {
					namespaceURI: NAMESPACE,
					tagName: "template"
				};
				const tagName = stringToLowerCase(element.tagName);
				const parentTagName = stringToLowerCase(parent.tagName);
				if (!ALLOWED_NAMESPACES[element.namespaceURI]) return false;
				if (element.namespaceURI === SVG_NAMESPACE) {
					if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
					if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
					return Boolean(ALL_SVG_TAGS[tagName]);
				}
				if (element.namespaceURI === MATHML_NAMESPACE) {
					if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
					if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
					return Boolean(ALL_MATHML_TAGS[tagName]);
				}
				if (element.namespaceURI === HTML_NAMESPACE) {
					if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
					if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
					return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
				}
				if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) return true;
				return false;
			};
			const _forceRemove = function _forceRemove$1(node) {
				arrayPush(DOMPurify$1.removed, { element: node });
				try {
					getParentNode(node).removeChild(node);
				} catch (_) {
					remove(node);
				}
			};
			const _removeAttribute = function _removeAttribute$1(name, node) {
				try {
					arrayPush(DOMPurify$1.removed, {
						attribute: node.getAttributeNode(name),
						from: node
					});
				} catch (_) {
					arrayPush(DOMPurify$1.removed, {
						attribute: null,
						from: node
					});
				}
				node.removeAttribute(name);
				if (name === "is" && !ALLOWED_ATTR[name]) if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
					_forceRemove(node);
				} catch (_) {}
				else try {
					node.setAttribute(name, "");
				} catch (_) {}
			};
			const _initDocument = function _initDocument$1(dirty) {
				let doc = null;
				let leadingWhitespace = null;
				if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
				else {
					const matches = stringMatch(dirty, /^[\r\n\t ]+/);
					leadingWhitespace = matches && matches[0];
				}
				if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + dirty + "</body></html>";
				const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
				if (NAMESPACE === HTML_NAMESPACE) try {
					doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
				} catch (_) {}
				if (!doc || !doc.documentElement) {
					doc = implementation.createDocument(NAMESPACE, "template", null);
					try {
						doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
					} catch (_) {}
				}
				const body = doc.body || doc.documentElement;
				if (dirty && leadingWhitespace) body.insertBefore(document$1.createTextNode(leadingWhitespace), body.childNodes[0] || null);
				if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
				return WHOLE_DOCUMENT ? doc.documentElement : body;
			};
			const _createNodeIterator = function _createNodeIterator$1(root) {
				return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
			};
			const _isClobbered = function _isClobbered$1(elm) {
				return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
			};
			const _isNode = function _isNode$1(object) {
				return typeof Node === "function" && object instanceof Node;
			};
			const _executeHook = function _executeHook$1(entryPoint, currentNode, data) {
				if (!hooks[entryPoint]) return;
				arrayForEach(hooks[entryPoint], (hook) => {
					hook.call(DOMPurify$1, currentNode, data, CONFIG);
				});
			};
			const _sanitizeElements = function _sanitizeElements$1(currentNode) {
				let content = null;
				_executeHook("beforeSanitizeElements", currentNode, null);
				if (_isClobbered(currentNode)) {
					_forceRemove(currentNode);
					return true;
				}
				const tagName = transformCaseFunc(currentNode.nodeName);
				_executeHook("uponSanitizeElement", currentNode, {
					tagName,
					allowedTags: ALLOWED_TAGS
				});
				if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
					_forceRemove(currentNode);
					return true;
				}
				if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
					_forceRemove(currentNode);
					return true;
				}
				if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
					_forceRemove(currentNode);
					return true;
				}
				if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
					if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
						if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
						if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
					}
					if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
						const parentNode = getParentNode(currentNode) || currentNode.parentNode;
						const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
						if (childNodes && parentNode) {
							const childCount = childNodes.length;
							for (let i$1 = childCount - 1; i$1 >= 0; --i$1) {
								const childClone = cloneNode(childNodes[i$1], true);
								childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
								parentNode.insertBefore(childClone, getNextSibling(currentNode));
							}
						}
					}
					_forceRemove(currentNode);
					return true;
				}
				if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
					_forceRemove(currentNode);
					return true;
				}
				if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
					_forceRemove(currentNode);
					return true;
				}
				if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
					content = currentNode.textContent;
					arrayForEach([
						MUSTACHE_EXPR$1,
						ERB_EXPR$1,
						TMPLIT_EXPR$1
					], (expr) => {
						content = stringReplace(content, expr, " ");
					});
					if (currentNode.textContent !== content) {
						arrayPush(DOMPurify$1.removed, { element: currentNode.cloneNode() });
						currentNode.textContent = content;
					}
				}
				_executeHook("afterSanitizeElements", currentNode, null);
				return false;
			};
			const _isValidAttribute = function _isValidAttribute$1(lcTag, lcName, value) {
				if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document$1 || value in formElement)) return false;
				if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName));
				else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName));
				else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) if (_isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)));
				else return false;
				else if (URI_SAFE_ATTRIBUTES[lcName]);
				else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, "")));
				else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]);
				else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, "")));
				else if (value) return false;
				return true;
			};
			const _isBasicCustomElement = function _isBasicCustomElement$1(tagName) {
				return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT$1);
			};
			const _sanitizeAttributes = function _sanitizeAttributes$1(currentNode) {
				_executeHook("beforeSanitizeAttributes", currentNode, null);
				const { attributes } = currentNode;
				if (!attributes) return;
				const hookEvent = {
					attrName: "",
					attrValue: "",
					keepAttr: true,
					allowedAttributes: ALLOWED_ATTR
				};
				let l = attributes.length;
				while (l--) {
					const { name, namespaceURI, value: attrValue } = attributes[l];
					const lcName = transformCaseFunc(name);
					let value = name === "value" ? attrValue : stringTrim(attrValue);
					hookEvent.attrName = lcName;
					hookEvent.attrValue = value;
					hookEvent.keepAttr = true;
					hookEvent.forceKeepAttr = void 0;
					_executeHook("uponSanitizeAttribute", currentNode, hookEvent);
					value = hookEvent.attrValue;
					if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
						_removeAttribute(name, currentNode);
						continue;
					}
					if (hookEvent.forceKeepAttr) continue;
					_removeAttribute(name, currentNode);
					if (!hookEvent.keepAttr) continue;
					if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
						_removeAttribute(name, currentNode);
						continue;
					}
					if (SAFE_FOR_TEMPLATES) arrayForEach([
						MUSTACHE_EXPR$1,
						ERB_EXPR$1,
						TMPLIT_EXPR$1
					], (expr) => {
						value = stringReplace(value, expr, " ");
					});
					const lcTag = transformCaseFunc(currentNode.nodeName);
					if (!_isValidAttribute(lcTag, lcName, value)) continue;
					if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
						_removeAttribute(name, currentNode);
						value = SANITIZE_NAMED_PROPS_PREFIX + value;
					}
					if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") if (namespaceURI);
					else switch (trustedTypes.getAttributeType(lcTag, lcName)) {
						case "TrustedHTML":
							value = trustedTypesPolicy.createHTML(value);
							break;
						case "TrustedScriptURL":
							value = trustedTypesPolicy.createScriptURL(value);
							break;
					}
					try {
						if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
						else currentNode.setAttribute(name, value);
						if (_isClobbered(currentNode)) _forceRemove(currentNode);
						else arrayPop(DOMPurify$1.removed);
					} catch (_) {}
				}
				_executeHook("afterSanitizeAttributes", currentNode, null);
			};
			const _sanitizeShadowDOM = function _sanitizeShadowDOM$1(fragment) {
				let shadowNode = null;
				const shadowIterator = _createNodeIterator(fragment);
				_executeHook("beforeSanitizeShadowDOM", fragment, null);
				while (shadowNode = shadowIterator.nextNode()) {
					_executeHook("uponSanitizeShadowNode", shadowNode, null);
					if (_sanitizeElements(shadowNode)) continue;
					if (shadowNode.content instanceof DocumentFragment) _sanitizeShadowDOM$1(shadowNode.content);
					_sanitizeAttributes(shadowNode);
				}
				_executeHook("afterSanitizeShadowDOM", fragment, null);
			};
			DOMPurify$1.sanitize = function(dirty) {
				let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
				let body = null;
				let importedNode = null;
				let currentNode = null;
				let returnNode = null;
				IS_EMPTY_INPUT = !dirty;
				if (IS_EMPTY_INPUT) dirty = "<!-->";
				if (typeof dirty !== "string" && !_isNode(dirty)) if (typeof dirty.toString === "function") {
					dirty = dirty.toString();
					if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
				} else throw typeErrorCreate("toString is not a function");
				if (!DOMPurify$1.isSupported) return dirty;
				if (!SET_CONFIG) _parseConfig(cfg);
				DOMPurify$1.removed = [];
				if (typeof dirty === "string") IN_PLACE = false;
				if (IN_PLACE) {
					if (dirty.nodeName) {
						const tagName = transformCaseFunc(dirty.nodeName);
						if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
					}
				} else if (dirty instanceof Node) {
					body = _initDocument("<!---->");
					importedNode = body.ownerDocument.importNode(dirty, true);
					if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
					else if (importedNode.nodeName === "HTML") body = importedNode;
					else body.appendChild(importedNode);
				} else {
					if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
					body = _initDocument(dirty);
					if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
				}
				if (body && FORCE_BODY) _forceRemove(body.firstChild);
				const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
				while (currentNode = nodeIterator.nextNode()) {
					if (_sanitizeElements(currentNode)) continue;
					if (currentNode.content instanceof DocumentFragment) _sanitizeShadowDOM(currentNode.content);
					_sanitizeAttributes(currentNode);
				}
				if (IN_PLACE) return dirty;
				if (RETURN_DOM) {
					if (RETURN_DOM_FRAGMENT) {
						returnNode = createDocumentFragment.call(body.ownerDocument);
						while (body.firstChild) returnNode.appendChild(body.firstChild);
					} else returnNode = body;
					if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
					return returnNode;
				}
				let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
				if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
				if (SAFE_FOR_TEMPLATES) arrayForEach([
					MUSTACHE_EXPR$1,
					ERB_EXPR$1,
					TMPLIT_EXPR$1
				], (expr) => {
					serializedHTML = stringReplace(serializedHTML, expr, " ");
				});
				return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
			};
			DOMPurify$1.setConfig = function() {
				_parseConfig(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {});
				SET_CONFIG = true;
			};
			DOMPurify$1.clearConfig = function() {
				CONFIG = null;
				SET_CONFIG = false;
			};
			DOMPurify$1.isValidAttribute = function(tag, attr, value) {
				if (!CONFIG) _parseConfig({});
				return _isValidAttribute(transformCaseFunc(tag), transformCaseFunc(attr), value);
			};
			DOMPurify$1.addHook = function(entryPoint, hookFunction) {
				if (typeof hookFunction !== "function") return;
				hooks[entryPoint] = hooks[entryPoint] || [];
				arrayPush(hooks[entryPoint], hookFunction);
			};
			DOMPurify$1.removeHook = function(entryPoint) {
				if (hooks[entryPoint]) return arrayPop(hooks[entryPoint]);
			};
			DOMPurify$1.removeHooks = function(entryPoint) {
				if (hooks[entryPoint]) hooks[entryPoint] = [];
			};
			DOMPurify$1.removeAllHooks = function() {
				hooks = {};
			};
			return DOMPurify$1;
		}
		return createDOMPurify();
	}));
}));
var Channel = {
	min: {
		r: 0,
		g: 0,
		b: 0,
		s: 0,
		l: 0,
		a: 0
	},
	max: {
		r: 255,
		g: 255,
		b: 255,
		h: 360,
		s: 100,
		l: 100,
		a: 1
	},
	clamp: {
		r: (r) => r >= 255 ? 255 : r < 0 ? 0 : r,
		g: (g) => g >= 255 ? 255 : g < 0 ? 0 : g,
		b: (b) => b >= 255 ? 255 : b < 0 ? 0 : b,
		h: (h) => h % 360,
		s: (s) => s >= 100 ? 100 : s < 0 ? 0 : s,
		l: (l) => l >= 100 ? 100 : l < 0 ? 0 : l,
		a: (a) => a >= 1 ? 1 : a < 0 ? 0 : a
	},
	toLinear: (c) => {
		const n = c / 255;
		return c > .03928 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92;
	},
	hue2rgb: (p, q, t) => {
		if (t < 0) t += 1;
		if (t > 1) t -= 1;
		if (t < 1 / 6) return p + (q - p) * 6 * t;
		if (t < 1 / 2) return q;
		if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		return p;
	},
	hsl2rgb: ({ h, s, l }, channel) => {
		if (!s) return l * 2.55;
		h /= 360;
		s /= 100;
		l /= 100;
		const q = l < .5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		switch (channel) {
			case "r": return Channel.hue2rgb(p, q, h + 1 / 3) * 255;
			case "g": return Channel.hue2rgb(p, q, h) * 255;
			case "b": return Channel.hue2rgb(p, q, h - 1 / 3) * 255;
		}
	},
	rgb2hsl: ({ r, g, b }, channel) => {
		r /= 255;
		g /= 255;
		b /= 255;
		const max$2 = Math.max(r, g, b);
		const min$2 = Math.min(r, g, b);
		const l = (max$2 + min$2) / 2;
		if (channel === "l") return l * 100;
		if (max$2 === min$2) return 0;
		const d = max$2 - min$2;
		const s = l > .5 ? d / (2 - max$2 - min$2) : d / (max$2 + min$2);
		if (channel === "s") return s * 100;
		switch (max$2) {
			case r: return ((g - b) / d + (g < b ? 6 : 0)) * 60;
			case g: return ((b - r) / d + 2) * 60;
			case b: return ((r - g) / d + 4) * 60;
			default: return -1;
		}
	}
};
var utils_default = {
	channel: Channel,
	lang: {
		clamp: (number, lower, upper) => {
			if (lower > upper) return Math.min(lower, Math.max(upper, number));
			return Math.min(upper, Math.max(lower, number));
		},
		round: (number) => {
			return Math.round(number * 1e10) / 1e10;
		}
	},
	unit: { dec2hex: (dec) => {
		const hex = Math.round(dec).toString(16);
		return hex.length > 1 ? hex : `0${hex}`;
	} }
};
var DEC2HEX = {};
for (let i$1 = 0; i$1 <= 255; i$1++) DEC2HEX[i$1] = utils_default.unit.dec2hex(i$1);
var TYPE = {
	ALL: 0,
	RGB: 1,
	HSL: 2
};
var Type = class {
	constructor() {
		this.type = TYPE.ALL;
	}
	get() {
		return this.type;
	}
	set(type$2) {
		if (this.type && this.type !== type$2) throw new Error("Cannot change both RGB and HSL channels at the same time");
		this.type = type$2;
	}
	reset() {
		this.type = TYPE.ALL;
	}
	is(type$2) {
		return this.type === type$2;
	}
};
var type_default = Type;
var Channels = class {
	constructor(data, color) {
		this.color = color;
		this.changed = false;
		this.data = data;
		this.type = new type_default();
	}
	set(data, color) {
		this.color = color;
		this.changed = false;
		this.data = data;
		this.type.type = TYPE.ALL;
		return this;
	}
	_ensureHSL() {
		const data = this.data;
		const { h, s, l } = data;
		if (h === void 0) data.h = utils_default.channel.rgb2hsl(data, "h");
		if (s === void 0) data.s = utils_default.channel.rgb2hsl(data, "s");
		if (l === void 0) data.l = utils_default.channel.rgb2hsl(data, "l");
	}
	_ensureRGB() {
		const data = this.data;
		const { r, g, b } = data;
		if (r === void 0) data.r = utils_default.channel.hsl2rgb(data, "r");
		if (g === void 0) data.g = utils_default.channel.hsl2rgb(data, "g");
		if (b === void 0) data.b = utils_default.channel.hsl2rgb(data, "b");
	}
	get r() {
		const data = this.data;
		const r = data.r;
		if (!this.type.is(TYPE.HSL) && r !== void 0) return r;
		this._ensureHSL();
		return utils_default.channel.hsl2rgb(data, "r");
	}
	get g() {
		const data = this.data;
		const g = data.g;
		if (!this.type.is(TYPE.HSL) && g !== void 0) return g;
		this._ensureHSL();
		return utils_default.channel.hsl2rgb(data, "g");
	}
	get b() {
		const data = this.data;
		const b = data.b;
		if (!this.type.is(TYPE.HSL) && b !== void 0) return b;
		this._ensureHSL();
		return utils_default.channel.hsl2rgb(data, "b");
	}
	get h() {
		const data = this.data;
		const h = data.h;
		if (!this.type.is(TYPE.RGB) && h !== void 0) return h;
		this._ensureRGB();
		return utils_default.channel.rgb2hsl(data, "h");
	}
	get s() {
		const data = this.data;
		const s = data.s;
		if (!this.type.is(TYPE.RGB) && s !== void 0) return s;
		this._ensureRGB();
		return utils_default.channel.rgb2hsl(data, "s");
	}
	get l() {
		const data = this.data;
		const l = data.l;
		if (!this.type.is(TYPE.RGB) && l !== void 0) return l;
		this._ensureRGB();
		return utils_default.channel.rgb2hsl(data, "l");
	}
	get a() {
		return this.data.a;
	}
	set r(r) {
		this.type.set(TYPE.RGB);
		this.changed = true;
		this.data.r = r;
	}
	set g(g) {
		this.type.set(TYPE.RGB);
		this.changed = true;
		this.data.g = g;
	}
	set b(b) {
		this.type.set(TYPE.RGB);
		this.changed = true;
		this.data.b = b;
	}
	set h(h) {
		this.type.set(TYPE.HSL);
		this.changed = true;
		this.data.h = h;
	}
	set s(s) {
		this.type.set(TYPE.HSL);
		this.changed = true;
		this.data.s = s;
	}
	set l(l) {
		this.type.set(TYPE.HSL);
		this.changed = true;
		this.data.l = l;
	}
	set a(a) {
		this.changed = true;
		this.data.a = a;
	}
};
var reusable_default = new Channels({
	r: 0,
	g: 0,
	b: 0,
	a: 0
}, "transparent");
var Hex = {
	re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
	parse: (color) => {
		if (color.charCodeAt(0) !== 35) return;
		const match = color.match(Hex.re);
		if (!match) return;
		const hex = match[1];
		const dec = parseInt(hex, 16);
		const length = hex.length;
		const hasAlpha = length % 4 === 0;
		const isFullLength = length > 4;
		const multiplier = isFullLength ? 1 : 17;
		const bits = isFullLength ? 8 : 4;
		const bitsOffset = hasAlpha ? 0 : -1;
		const mask = isFullLength ? 255 : 15;
		return reusable_default.set({
			r: (dec >> bits * (bitsOffset + 3) & mask) * multiplier,
			g: (dec >> bits * (bitsOffset + 2) & mask) * multiplier,
			b: (dec >> bits * (bitsOffset + 1) & mask) * multiplier,
			a: hasAlpha ? (dec & mask) * multiplier / 255 : 1
		}, color);
	},
	stringify: (channels$1) => {
		const { r, g, b, a } = channels$1;
		if (a < 1) return `#${DEC2HEX[Math.round(r)]}${DEC2HEX[Math.round(g)]}${DEC2HEX[Math.round(b)]}${DEC2HEX[Math.round(a * 255)]}`;
		else return `#${DEC2HEX[Math.round(r)]}${DEC2HEX[Math.round(g)]}${DEC2HEX[Math.round(b)]}`;
	}
};
var hex_default = Hex;
var HSL = {
	re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
	hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
	_hue2deg: (hue) => {
		const match = hue.match(HSL.hueRe);
		if (match) {
			const [, number, unit] = match;
			switch (unit) {
				case "grad": return utils_default.channel.clamp.h(parseFloat(number) * .9);
				case "rad": return utils_default.channel.clamp.h(parseFloat(number) * 180 / Math.PI);
				case "turn": return utils_default.channel.clamp.h(parseFloat(number) * 360);
			}
		}
		return utils_default.channel.clamp.h(parseFloat(hue));
	},
	parse: (color) => {
		const charCode = color.charCodeAt(0);
		if (charCode !== 104 && charCode !== 72) return;
		const match = color.match(HSL.re);
		if (!match) return;
		const [, h, s, l, a, isAlphaPercentage] = match;
		return reusable_default.set({
			h: HSL._hue2deg(h),
			s: utils_default.channel.clamp.s(parseFloat(s)),
			l: utils_default.channel.clamp.l(parseFloat(l)),
			a: a ? utils_default.channel.clamp.a(isAlphaPercentage ? parseFloat(a) / 100 : parseFloat(a)) : 1
		}, color);
	},
	stringify: (channels$1) => {
		const { h, s, l, a } = channels$1;
		if (a < 1) return `hsla(${utils_default.lang.round(h)}, ${utils_default.lang.round(s)}%, ${utils_default.lang.round(l)}%, ${a})`;
		else return `hsl(${utils_default.lang.round(h)}, ${utils_default.lang.round(s)}%, ${utils_default.lang.round(l)}%)`;
	}
};
var hsl_default = HSL;
var Keyword = {
	colors: {
		aliceblue: "#f0f8ff",
		antiquewhite: "#faebd7",
		aqua: "#00ffff",
		aquamarine: "#7fffd4",
		azure: "#f0ffff",
		beige: "#f5f5dc",
		bisque: "#ffe4c4",
		black: "#000000",
		blanchedalmond: "#ffebcd",
		blue: "#0000ff",
		blueviolet: "#8a2be2",
		brown: "#a52a2a",
		burlywood: "#deb887",
		cadetblue: "#5f9ea0",
		chartreuse: "#7fff00",
		chocolate: "#d2691e",
		coral: "#ff7f50",
		cornflowerblue: "#6495ed",
		cornsilk: "#fff8dc",
		crimson: "#dc143c",
		cyanaqua: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgoldenrod: "#b8860b",
		darkgray: "#a9a9a9",
		darkgreen: "#006400",
		darkgrey: "#a9a9a9",
		darkkhaki: "#bdb76b",
		darkmagenta: "#8b008b",
		darkolivegreen: "#556b2f",
		darkorange: "#ff8c00",
		darkorchid: "#9932cc",
		darkred: "#8b0000",
		darksalmon: "#e9967a",
		darkseagreen: "#8fbc8f",
		darkslateblue: "#483d8b",
		darkslategray: "#2f4f4f",
		darkslategrey: "#2f4f4f",
		darkturquoise: "#00ced1",
		darkviolet: "#9400d3",
		deeppink: "#ff1493",
		deepskyblue: "#00bfff",
		dimgray: "#696969",
		dimgrey: "#696969",
		dodgerblue: "#1e90ff",
		firebrick: "#b22222",
		floralwhite: "#fffaf0",
		forestgreen: "#228b22",
		fuchsia: "#ff00ff",
		gainsboro: "#dcdcdc",
		ghostwhite: "#f8f8ff",
		gold: "#ffd700",
		goldenrod: "#daa520",
		gray: "#808080",
		green: "#008000",
		greenyellow: "#adff2f",
		grey: "#808080",
		honeydew: "#f0fff0",
		hotpink: "#ff69b4",
		indianred: "#cd5c5c",
		indigo: "#4b0082",
		ivory: "#fffff0",
		khaki: "#f0e68c",
		lavender: "#e6e6fa",
		lavenderblush: "#fff0f5",
		lawngreen: "#7cfc00",
		lemonchiffon: "#fffacd",
		lightblue: "#add8e6",
		lightcoral: "#f08080",
		lightcyan: "#e0ffff",
		lightgoldenrodyellow: "#fafad2",
		lightgray: "#d3d3d3",
		lightgreen: "#90ee90",
		lightgrey: "#d3d3d3",
		lightpink: "#ffb6c1",
		lightsalmon: "#ffa07a",
		lightseagreen: "#20b2aa",
		lightskyblue: "#87cefa",
		lightslategray: "#778899",
		lightslategrey: "#778899",
		lightsteelblue: "#b0c4de",
		lightyellow: "#ffffe0",
		lime: "#00ff00",
		limegreen: "#32cd32",
		linen: "#faf0e6",
		magenta: "#ff00ff",
		maroon: "#800000",
		mediumaquamarine: "#66cdaa",
		mediumblue: "#0000cd",
		mediumorchid: "#ba55d3",
		mediumpurple: "#9370db",
		mediumseagreen: "#3cb371",
		mediumslateblue: "#7b68ee",
		mediumspringgreen: "#00fa9a",
		mediumturquoise: "#48d1cc",
		mediumvioletred: "#c71585",
		midnightblue: "#191970",
		mintcream: "#f5fffa",
		mistyrose: "#ffe4e1",
		moccasin: "#ffe4b5",
		navajowhite: "#ffdead",
		navy: "#000080",
		oldlace: "#fdf5e6",
		olive: "#808000",
		olivedrab: "#6b8e23",
		orange: "#ffa500",
		orangered: "#ff4500",
		orchid: "#da70d6",
		palegoldenrod: "#eee8aa",
		palegreen: "#98fb98",
		paleturquoise: "#afeeee",
		palevioletred: "#db7093",
		papayawhip: "#ffefd5",
		peachpuff: "#ffdab9",
		peru: "#cd853f",
		pink: "#ffc0cb",
		plum: "#dda0dd",
		powderblue: "#b0e0e6",
		purple: "#800080",
		rebeccapurple: "#663399",
		red: "#ff0000",
		rosybrown: "#bc8f8f",
		royalblue: "#4169e1",
		saddlebrown: "#8b4513",
		salmon: "#fa8072",
		sandybrown: "#f4a460",
		seagreen: "#2e8b57",
		seashell: "#fff5ee",
		sienna: "#a0522d",
		silver: "#c0c0c0",
		skyblue: "#87ceeb",
		slateblue: "#6a5acd",
		slategray: "#708090",
		slategrey: "#708090",
		snow: "#fffafa",
		springgreen: "#00ff7f",
		tan: "#d2b48c",
		teal: "#008080",
		thistle: "#d8bfd8",
		transparent: "#00000000",
		turquoise: "#40e0d0",
		violet: "#ee82ee",
		wheat: "#f5deb3",
		white: "#ffffff",
		whitesmoke: "#f5f5f5",
		yellow: "#ffff00",
		yellowgreen: "#9acd32"
	},
	parse: (color) => {
		color = color.toLowerCase();
		const hex = Keyword.colors[color];
		if (!hex) return;
		return hex_default.parse(hex);
	},
	stringify: (channels$1) => {
		const hex = hex_default.stringify(channels$1);
		for (const name in Keyword.colors) if (Keyword.colors[name] === hex) return name;
	}
};
var keyword_default = Keyword;
var RGB = {
	re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
	parse: (color) => {
		const charCode = color.charCodeAt(0);
		if (charCode !== 114 && charCode !== 82) return;
		const match = color.match(RGB.re);
		if (!match) return;
		const [, r, isRedPercentage, g, isGreenPercentage, b, isBluePercentage, a, isAlphaPercentage] = match;
		return reusable_default.set({
			r: utils_default.channel.clamp.r(isRedPercentage ? parseFloat(r) * 2.55 : parseFloat(r)),
			g: utils_default.channel.clamp.g(isGreenPercentage ? parseFloat(g) * 2.55 : parseFloat(g)),
			b: utils_default.channel.clamp.b(isBluePercentage ? parseFloat(b) * 2.55 : parseFloat(b)),
			a: a ? utils_default.channel.clamp.a(isAlphaPercentage ? parseFloat(a) / 100 : parseFloat(a)) : 1
		}, color);
	},
	stringify: (channels$1) => {
		const { r, g, b, a } = channels$1;
		if (a < 1) return `rgba(${utils_default.lang.round(r)}, ${utils_default.lang.round(g)}, ${utils_default.lang.round(b)}, ${utils_default.lang.round(a)})`;
		else return `rgb(${utils_default.lang.round(r)}, ${utils_default.lang.round(g)}, ${utils_default.lang.round(b)})`;
	}
};
var rgb_default = RGB;
var color_default = {
	format: {
		keyword: keyword_default,
		hex: hex_default,
		rgb: rgb_default,
		rgba: rgb_default,
		hsl: hsl_default,
		hsla: hsl_default
	},
	parse: (color) => {
		if (typeof color !== "string") return color;
		const channels$1 = hex_default.parse(color) || rgb_default.parse(color) || hsl_default.parse(color) || keyword_default.parse(color);
		if (channels$1) return channels$1;
		throw new Error(`Unsupported color format: "${color}"`);
	},
	stringify: (channels$1) => {
		if (!channels$1.changed && channels$1.color) return channels$1.color;
		if (channels$1.type.is(TYPE.HSL) || channels$1.data.r === void 0) return hsl_default.stringify(channels$1);
		else if (channels$1.a < 1 || !Number.isInteger(channels$1.r) || !Number.isInteger(channels$1.g) || !Number.isInteger(channels$1.b)) return rgb_default.stringify(channels$1);
		else return hex_default.stringify(channels$1);
	}
};
var change = (color, channels$1) => {
	const ch = color_default.parse(color);
	for (const c in channels$1) ch[c] = utils_default.channel.clamp[c](channels$1[c]);
	return color_default.stringify(ch);
};
var change_default = change;
var rgba = (r, g, b = 0, a = 1) => {
	if (typeof r !== "number") return change_default(r, { a: g });
	const channels$1 = reusable_default.set({
		r: utils_default.channel.clamp.r(r),
		g: utils_default.channel.clamp.g(g),
		b: utils_default.channel.clamp.b(b),
		a: utils_default.channel.clamp.a(a)
	});
	return color_default.stringify(channels$1);
};
var rgba_default = rgba;
var luminance = (color) => {
	const { r, g, b } = color_default.parse(color);
	const luminance$1 = .2126 * utils_default.channel.toLinear(r) + .7152 * utils_default.channel.toLinear(g) + .0722 * utils_default.channel.toLinear(b);
	return utils_default.lang.round(luminance$1);
};
var luminance_default = luminance;
var isLight = (color) => {
	return luminance_default(color) >= .5;
};
var is_light_default = isLight;
var isDark = (color) => {
	return !is_light_default(color);
};
var is_dark_default = isDark;
var adjustChannel = (color, channel, amount) => {
	const channels$1 = color_default.parse(color);
	const amountCurrent = channels$1[channel];
	const amountNext = utils_default.channel.clamp[channel](amountCurrent + amount);
	if (amountCurrent !== amountNext) channels$1[channel] = amountNext;
	return color_default.stringify(channels$1);
};
var adjust_channel_default = adjustChannel;
var lighten = (color, amount) => {
	return adjust_channel_default(color, "l", amount);
};
var lighten_default = lighten;
var darken = (color, amount) => {
	return adjust_channel_default(color, "l", -amount);
};
var darken_default = darken;
var adjust = (color, channels$1) => {
	const ch = color_default.parse(color);
	const changes = {};
	for (const c in channels$1) {
		if (!channels$1[c]) continue;
		changes[c] = ch[c] + channels$1[c];
	}
	return change_default(color, changes);
};
var adjust_default = adjust;
var mix = (color1, color2, weight = 50) => {
	const { r: r1, g: g1, b: b1, a: a1 } = color_default.parse(color1);
	const { r: r2, g: g2, b: b2, a: a2 } = color_default.parse(color2);
	const weightScale = weight / 100;
	const weightNormalized = weightScale * 2 - 1;
	const alphaDelta = a1 - a2;
	const weight1 = ((weightNormalized * alphaDelta === -1 ? weightNormalized : (weightNormalized + alphaDelta) / (1 + weightNormalized * alphaDelta)) + 1) / 2;
	const weight2 = 1 - weight1;
	return rgba_default(r1 * weight1 + r2 * weight2, g1 * weight1 + g2 * weight2, b1 * weight1 + b2 * weight2, a1 * weightScale + a2 * (1 - weightScale));
};
var mix_default = mix;
var invert = (color, weight = 100) => {
	const inverse = color_default.parse(color);
	inverse.r = 255 - inverse.r;
	inverse.g = 255 - inverse.g;
	inverse.b = 255 - inverse.b;
	return mix_default(inverse, color, weight);
};
var invert_default = invert;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
	if (!isObject_default(value)) return false;
	var tag = _baseGetTag_default(value);
	return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;
var _coreJsData_default = _root_default["__core-js_shared__"];
var maskSrcKey = function() {
	var uid = /[^.]+$/.exec(_coreJsData_default && _coreJsData_default.keys && _coreJsData_default.keys.IE_PROTO || "");
	return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
	return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked_default = isMasked;
var funcToString$2 = Function.prototype.toString;
function toSource(func) {
	if (func != null) {
		try {
			return funcToString$2.call(func);
		} catch (e) {}
		try {
			return func + "";
		} catch (e) {}
	}
	return "";
}
var _toSource_default = toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$3 = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$9 = objectProto$3.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$9).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
	if (!isObject_default(value) || _isMasked_default(value)) return false;
	return (isFunction_default(value) ? reIsNative : reIsHostCtor).test(_toSource_default(value));
}
var _baseIsNative_default = baseIsNative;
function getValue(object, key) {
	return object == null ? void 0 : object[key];
}
var _getValue_default = getValue;
function getNative(object, key) {
	var value = _getValue_default(object, key);
	return _baseIsNative_default(value) ? value : void 0;
}
var _getNative_default = getNative;
var _nativeCreate_default = _getNative_default(Object, "create");
function hashClear() {
	this.__data__ = _nativeCreate_default ? _nativeCreate_default(null) : {};
	this.size = 0;
}
var _hashClear_default = hashClear;
function hashDelete(key) {
	var result = this.has(key) && delete this.__data__[key];
	this.size -= result ? 1 : 0;
	return result;
}
var _hashDelete_default = hashDelete;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var hasOwnProperty$8 = Object.prototype.hasOwnProperty;
function hashGet(key) {
	var data = this.__data__;
	if (_nativeCreate_default) {
		var result = data[key];
		return result === HASH_UNDEFINED$1 ? void 0 : result;
	}
	return hasOwnProperty$8.call(data, key) ? data[key] : void 0;
}
var _hashGet_default = hashGet;
var hasOwnProperty$7 = Object.prototype.hasOwnProperty;
function hashHas(key) {
	var data = this.__data__;
	return _nativeCreate_default ? data[key] !== void 0 : hasOwnProperty$7.call(data, key);
}
var _hashHas_default = hashHas;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
	var data = this.__data__;
	this.size += this.has(key) ? 0 : 1;
	data[key] = _nativeCreate_default && value === void 0 ? HASH_UNDEFINED : value;
	return this;
}
var _hashSet_default = hashSet;
function Hash(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
Hash.prototype.clear = _hashClear_default;
Hash.prototype["delete"] = _hashDelete_default;
Hash.prototype.get = _hashGet_default;
Hash.prototype.has = _hashHas_default;
Hash.prototype.set = _hashSet_default;
var _Hash_default = Hash;
function listCacheClear() {
	this.__data__ = [];
	this.size = 0;
}
var _listCacheClear_default = listCacheClear;
function eq(value, other) {
	return value === other || value !== value && other !== other;
}
var eq_default = eq;
function assocIndexOf(array, key) {
	var length = array.length;
	while (length--) if (eq_default(array[length][0], key)) return length;
	return -1;
}
var _assocIndexOf_default = assocIndexOf;
var splice = Array.prototype.splice;
function listCacheDelete(key) {
	var data = this.__data__, index = _assocIndexOf_default(data, key);
	if (index < 0) return false;
	if (index == data.length - 1) data.pop();
	else splice.call(data, index, 1);
	--this.size;
	return true;
}
var _listCacheDelete_default = listCacheDelete;
function listCacheGet(key) {
	var data = this.__data__, index = _assocIndexOf_default(data, key);
	return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet_default = listCacheGet;
function listCacheHas(key) {
	return _assocIndexOf_default(this.__data__, key) > -1;
}
var _listCacheHas_default = listCacheHas;
function listCacheSet(key, value) {
	var data = this.__data__, index = _assocIndexOf_default(data, key);
	if (index < 0) {
		++this.size;
		data.push([key, value]);
	} else data[index][1] = value;
	return this;
}
var _listCacheSet_default = listCacheSet;
function ListCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
ListCache.prototype.clear = _listCacheClear_default;
ListCache.prototype["delete"] = _listCacheDelete_default;
ListCache.prototype.get = _listCacheGet_default;
ListCache.prototype.has = _listCacheHas_default;
ListCache.prototype.set = _listCacheSet_default;
var _ListCache_default = ListCache;
var _Map_default = _getNative_default(_root_default, "Map");
function mapCacheClear() {
	this.size = 0;
	this.__data__ = {
		"hash": new _Hash_default(),
		"map": new (_Map_default || _ListCache_default)(),
		"string": new _Hash_default()
	};
}
var _mapCacheClear_default = mapCacheClear;
function isKeyable(value) {
	var type$2 = typeof value;
	return type$2 == "string" || type$2 == "number" || type$2 == "symbol" || type$2 == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable_default = isKeyable;
function getMapData(map, key) {
	var data = map.__data__;
	return _isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData_default = getMapData;
function mapCacheDelete(key) {
	var result = _getMapData_default(this, key)["delete"](key);
	this.size -= result ? 1 : 0;
	return result;
}
var _mapCacheDelete_default = mapCacheDelete;
function mapCacheGet(key) {
	return _getMapData_default(this, key).get(key);
}
var _mapCacheGet_default = mapCacheGet;
function mapCacheHas(key) {
	return _getMapData_default(this, key).has(key);
}
var _mapCacheHas_default = mapCacheHas;
function mapCacheSet(key, value) {
	var data = _getMapData_default(this, key), size = data.size;
	data.set(key, value);
	this.size += data.size == size ? 0 : 1;
	return this;
}
var _mapCacheSet_default = mapCacheSet;
function MapCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
MapCache.prototype.clear = _mapCacheClear_default;
MapCache.prototype["delete"] = _mapCacheDelete_default;
MapCache.prototype.get = _mapCacheGet_default;
MapCache.prototype.has = _mapCacheHas_default;
MapCache.prototype.set = _mapCacheSet_default;
var _MapCache_default = MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
	if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
	var memoized = function() {
		var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
		if (cache.has(key)) return cache.get(key);
		var result = func.apply(this, args);
		memoized.cache = cache.set(key, result) || cache;
		return result;
	};
	memoized.cache = new (memoize.Cache || _MapCache_default)();
	return memoized;
}
memoize.Cache = _MapCache_default;
var memoize_default = memoize;
function stackClear() {
	this.__data__ = new _ListCache_default();
	this.size = 0;
}
var _stackClear_default = stackClear;
function stackDelete(key) {
	var data = this.__data__, result = data["delete"](key);
	this.size = data.size;
	return result;
}
var _stackDelete_default = stackDelete;
function stackGet(key) {
	return this.__data__.get(key);
}
var _stackGet_default = stackGet;
function stackHas(key) {
	return this.__data__.has(key);
}
var _stackHas_default = stackHas;
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
	var data = this.__data__;
	if (data instanceof _ListCache_default) {
		var pairs$1 = data.__data__;
		if (!_Map_default || pairs$1.length < LARGE_ARRAY_SIZE - 1) {
			pairs$1.push([key, value]);
			this.size = ++data.size;
			return this;
		}
		data = this.__data__ = new _MapCache_default(pairs$1);
	}
	data.set(key, value);
	this.size = data.size;
	return this;
}
var _stackSet_default = stackSet;
function Stack(entries) {
	this.size = (this.__data__ = new _ListCache_default(entries)).size;
}
Stack.prototype.clear = _stackClear_default;
Stack.prototype["delete"] = _stackDelete_default;
Stack.prototype.get = _stackGet_default;
Stack.prototype.has = _stackHas_default;
Stack.prototype.set = _stackSet_default;
var _Stack_default = Stack;
var _defineProperty_default = function() {
	try {
		var func = _getNative_default(Object, "defineProperty");
		func({}, "", {});
		return func;
	} catch (e) {}
}();
function baseAssignValue(object, key, value) {
	if (key == "__proto__" && _defineProperty_default) _defineProperty_default(object, key, {
		"configurable": true,
		"enumerable": true,
		"value": value,
		"writable": true
	});
	else object[key] = value;
}
var _baseAssignValue_default = baseAssignValue;
function assignMergeValue(object, key, value) {
	if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) _baseAssignValue_default(object, key, value);
}
var _assignMergeValue_default = assignMergeValue;
function createBaseFor(fromRight) {
	return function(object, iteratee, keysFunc) {
		var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
		while (length--) {
			var key = props[fromRight ? length : ++index];
			if (iteratee(iterable[key], key, iterable) === false) break;
		}
		return object;
	};
}
var _baseFor_default = createBaseFor();
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var Buffer$1 = freeModule$2 && freeModule$2.exports === freeExports$2 ? _root_default.Buffer : void 0, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
	if (isDeep) return buffer.slice();
	var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	buffer.copy(result);
	return result;
}
var _cloneBuffer_default = cloneBuffer;
var _Uint8Array_default = _root_default.Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
	var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	new _Uint8Array_default(result).set(new _Uint8Array_default(arrayBuffer));
	return result;
}
var _cloneArrayBuffer_default = cloneArrayBuffer;
function cloneTypedArray(typedArray, isDeep) {
	var buffer = isDeep ? _cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
	return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray_default = cloneTypedArray;
function copyArray(source, array) {
	var index = -1, length = source.length;
	array || (array = Array(length));
	while (++index < length) array[index] = source[index];
	return array;
}
var _copyArray_default = copyArray;
var objectCreate = Object.create;
var _baseCreate_default = function() {
	function object() {}
	return function(proto) {
		if (!isObject_default(proto)) return {};
		if (objectCreate) return objectCreate(proto);
		object.prototype = proto;
		var result = new object();
		object.prototype = void 0;
		return result;
	};
}();
function overArg(func, transform) {
	return function(arg) {
		return func(transform(arg));
	};
}
var _overArg_default = overArg;
var _getPrototype_default = _overArg_default(Object.getPrototypeOf, Object);
var objectProto$2 = Object.prototype;
function isPrototype(value) {
	var Ctor = value && value.constructor;
	return value === (typeof Ctor == "function" && Ctor.prototype || objectProto$2);
}
var _isPrototype_default = isPrototype;
function initCloneObject(object) {
	return typeof object.constructor == "function" && !_isPrototype_default(object) ? _baseCreate_default(_getPrototype_default(object)) : {};
}
var _initCloneObject_default = initCloneObject;
var argsTag$1 = "[object Arguments]";
function baseIsArguments(value) {
	return isObjectLike_default(value) && _baseGetTag_default(value) == argsTag$1;
}
var _baseIsArguments_default = baseIsArguments;
var objectProto$1 = Object.prototype;
var hasOwnProperty$6 = objectProto$1.hasOwnProperty;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var isArguments_default = _baseIsArguments_default(function() {
	return arguments;
}()) ? _baseIsArguments_default : function(value) {
	return isObjectLike_default(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArray_default = Array.isArray;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength(value) {
	return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_default = isLength;
function isArrayLike(value) {
	return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;
function isArrayLikeObject(value) {
	return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;
function stubFalse() {
	return false;
}
var stubFalse_default = stubFalse;
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var Buffer = freeModule$1 && freeModule$1.exports === freeExports$1 ? _root_default.Buffer : void 0;
var isBuffer_default = (Buffer ? Buffer.isBuffer : void 0) || stubFalse_default;
var objectTag$2 = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$5 = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
	if (!isObjectLike_default(value) || _baseGetTag_default(value) != objectTag$2) return false;
	var proto = _getPrototype_default(value);
	if (proto === null) return true;
	var Ctor = hasOwnProperty$5.call(proto, "constructor") && proto.constructor;
	return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag = "[object Number]", objectTag$1 = "[object Object]", regexpTag = "[object RegExp]", setTag$2 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag$2] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
	return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[_baseGetTag_default(value)];
}
var _baseIsTypedArray_default = baseIsTypedArray;
function baseUnary(func) {
	return function(value) {
		return func(value);
	};
}
var _baseUnary_default = baseUnary;
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var freeProcess = freeModule && freeModule.exports === freeExports && _freeGlobal_default.process;
var _nodeUtil_default = function() {
	try {
		var types = freeModule && freeModule.require && freeModule.require("util").types;
		if (types) return types;
		return freeProcess && freeProcess.binding && freeProcess.binding("util");
	} catch (e) {}
}();
var nodeIsTypedArray = _nodeUtil_default && _nodeUtil_default.isTypedArray;
var isTypedArray_default = nodeIsTypedArray ? _baseUnary_default(nodeIsTypedArray) : _baseIsTypedArray_default;
function safeGet(object, key) {
	if (key === "constructor" && typeof object[key] === "function") return;
	if (key == "__proto__") return;
	return object[key];
}
var _safeGet_default = safeGet;
var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
function assignValue(object, key, value) {
	var objValue = object[key];
	if (!(hasOwnProperty$4.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) _baseAssignValue_default(object, key, value);
}
var _assignValue_default = assignValue;
function copyObject(source, props, object, customizer) {
	var isNew = !object;
	object || (object = {});
	var index = -1, length = props.length;
	while (++index < length) {
		var key = props[index];
		var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
		if (newValue === void 0) newValue = source[key];
		if (isNew) _baseAssignValue_default(object, key, newValue);
		else _assignValue_default(object, key, newValue);
	}
	return object;
}
var _copyObject_default = copyObject;
function baseTimes(n, iteratee) {
	var index = -1, result = Array(n);
	while (++index < n) result[index] = iteratee(index);
	return result;
}
var _baseTimes_default = baseTimes;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
	var type$2 = typeof value;
	length = length == null ? MAX_SAFE_INTEGER : length;
	return !!length && (type$2 == "number" || type$2 != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var _isIndex_default = isIndex;
var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
	var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? _baseTimes_default(value.length, String) : [], length = result.length;
	for (var key in value) if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || _isIndex_default(key, length)))) result.push(key);
	return result;
}
var _arrayLikeKeys_default = arrayLikeKeys;
function nativeKeysIn(object) {
	var result = [];
	if (object != null) for (var key in Object(object)) result.push(key);
	return result;
}
var _nativeKeysIn_default = nativeKeysIn;
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function baseKeysIn(object) {
	if (!isObject_default(object)) return _nativeKeysIn_default(object);
	var isProto = _isPrototype_default(object), result = [];
	for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object, key)))) result.push(key);
	return result;
}
var _baseKeysIn_default = baseKeysIn;
function keysIn(object) {
	return isArrayLike_default(object) ? _arrayLikeKeys_default(object, true) : _baseKeysIn_default(object);
}
var keysIn_default = keysIn;
function toPlainObject(value) {
	return _copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default = toPlainObject;
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	var objValue = _safeGet_default(object, key), srcValue = _safeGet_default(source, key), stacked = stack.get(srcValue);
	if (stacked) {
		_assignMergeValue_default(object, key, stacked);
		return;
	}
	var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
	var isCommon = newValue === void 0;
	if (isCommon) {
		var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
		newValue = srcValue;
		if (isArr || isBuff || isTyped) if (isArray_default(objValue)) newValue = objValue;
		else if (isArrayLikeObject_default(objValue)) newValue = _copyArray_default(objValue);
		else if (isBuff) {
			isCommon = false;
			newValue = _cloneBuffer_default(srcValue, true);
		} else if (isTyped) {
			isCommon = false;
			newValue = _cloneTypedArray_default(srcValue, true);
		} else newValue = [];
		else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
			newValue = objValue;
			if (isArguments_default(objValue)) newValue = toPlainObject_default(objValue);
			else if (!isObject_default(objValue) || isFunction_default(objValue)) newValue = _initCloneObject_default(srcValue);
		} else isCommon = false;
	}
	if (isCommon) {
		stack.set(srcValue, newValue);
		mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
		stack["delete"](srcValue);
	}
	_assignMergeValue_default(object, key, newValue);
}
var _baseMergeDeep_default = baseMergeDeep;
function baseMerge(object, source, srcIndex, customizer, stack) {
	if (object === source) return;
	_baseFor_default(source, function(srcValue, key) {
		stack || (stack = new _Stack_default());
		if (isObject_default(srcValue)) _baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
		else {
			var newValue = customizer ? customizer(_safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
			if (newValue === void 0) newValue = srcValue;
			_assignMergeValue_default(object, key, newValue);
		}
	}, keysIn_default);
}
var _baseMerge_default = baseMerge;
function identity(value) {
	return value;
}
var identity_default = identity;
function apply(func, thisArg, args) {
	switch (args.length) {
		case 0: return func.call(thisArg);
		case 1: return func.call(thisArg, args[0]);
		case 2: return func.call(thisArg, args[0], args[1]);
		case 3: return func.call(thisArg, args[0], args[1], args[2]);
	}
	return func.apply(thisArg, args);
}
var _apply_default = apply;
var nativeMax = Math.max;
function overRest(func, start, transform) {
	start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
	return function() {
		var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
		while (++index < length) array[index] = args[start + index];
		index = -1;
		var otherArgs = Array(start + 1);
		while (++index < start) otherArgs[index] = args[index];
		otherArgs[start] = transform(array);
		return _apply_default(func, this, otherArgs);
	};
}
var _overRest_default = overRest;
function constant(value) {
	return function() {
		return value;
	};
}
var constant_default = constant;
var _baseSetToString_default = !_defineProperty_default ? identity_default : function(func, string) {
	return _defineProperty_default(func, "toString", {
		"configurable": true,
		"enumerable": false,
		"value": constant_default(string),
		"writable": true
	});
};
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
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
var _setToString_default = shortOut(_baseSetToString_default);
function baseRest(func, start) {
	return _setToString_default(_overRest_default(func, start, identity_default), func + "");
}
var _baseRest_default = baseRest;
function isIterateeCall(value, index, object) {
	if (!isObject_default(object)) return false;
	var type$2 = typeof index;
	if (type$2 == "number" ? isArrayLike_default(object) && _isIndex_default(index, object.length) : type$2 == "string" && index in object) return eq_default(object[index], value);
	return false;
}
var _isIterateeCall_default = isIterateeCall;
function createAssigner(assigner) {
	return _baseRest_default(function(object, sources) {
		var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
		customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
		if (guard && _isIterateeCall_default(sources[0], sources[1], guard)) {
			customizer = length < 3 ? void 0 : customizer;
			length = 1;
		}
		object = Object(object);
		while (++index < length) {
			var source = sources[index];
			if (source) assigner(object, source, index, customizer);
		}
		return object;
	});
}
var merge_default = createAssigner(function(object, source, srcIndex) {
	_baseMerge_default(object, source, srcIndex);
});
var _nativeKeys_default = _overArg_default(Object.keys, Object);
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
function baseKeys(object) {
	if (!_isPrototype_default(object)) return _nativeKeys_default(object);
	var result = [];
	for (var key in Object(object)) if (hasOwnProperty$1.call(object, key) && key != "constructor") result.push(key);
	return result;
}
var _baseKeys_default = baseKeys;
var _DataView_default = _getNative_default(_root_default, "DataView");
var _Promise_default = _getNative_default(_root_default, "Promise");
var _Set_default = _getNative_default(_root_default, "Set");
var _WeakMap_default = _getNative_default(_root_default, "WeakMap");
var mapTag$1 = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = _toSource_default(_DataView_default), mapCtorString = _toSource_default(_Map_default), promiseCtorString = _toSource_default(_Promise_default), setCtorString = _toSource_default(_Set_default), weakMapCtorString = _toSource_default(_WeakMap_default);
var getTag = _baseGetTag_default;
if (_DataView_default && getTag(new _DataView_default(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag || _Map_default && getTag(new _Map_default()) != mapTag$1 || _Promise_default && getTag(_Promise_default.resolve()) != promiseTag || _Set_default && getTag(new _Set_default()) != setTag$1 || _WeakMap_default && getTag(new _WeakMap_default()) != weakMapTag) getTag = function(value) {
	var result = _baseGetTag_default(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? _toSource_default(Ctor) : "";
	if (ctorString) switch (ctorString) {
		case dataViewCtorString: return dataViewTag;
		case mapCtorString: return mapTag$1;
		case promiseCtorString: return promiseTag;
		case setCtorString: return setTag$1;
		case weakMapCtorString: return weakMapTag;
	}
	return result;
};
var _getTag_default = getTag;
var mapTag = "[object Map]", setTag = "[object Set]";
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isEmpty(value) {
	if (value == null) return true;
	if (isArrayLike_default(value) && (isArray_default(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer_default(value) || isTypedArray_default(value) || isArguments_default(value))) return !value.length;
	var tag = _getTag_default(value);
	if (tag == mapTag || tag == setTag) return !value.size;
	if (_isPrototype_default(value)) return !_baseKeys_default(value).length;
	for (var key in value) if (hasOwnProperty.call(value, key)) return false;
	return true;
}
var isEmpty_default = isEmpty;
var import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1);
var import_dist = require_dist();
var import_purify = /* @__PURE__ */ __toESM(require_purify(), 1);
var LEVELS = {
	trace: 0,
	debug: 1,
	info: 2,
	warn: 3,
	error: 4,
	fatal: 5
};
var log$1 = {
	trace: (..._args) => {},
	debug: (..._args) => {},
	info: (..._args) => {},
	warn: (..._args) => {},
	error: (..._args) => {},
	fatal: (..._args) => {}
};
var setLogLevel$1 = function(level = "fatal") {
	let numericLevel = LEVELS.fatal;
	if (typeof level === "string") {
		level = level.toLowerCase();
		if (level in LEVELS) numericLevel = LEVELS[level];
	} else if (typeof level === "number") numericLevel = level;
	log$1.trace = () => {};
	log$1.debug = () => {};
	log$1.info = () => {};
	log$1.warn = () => {};
	log$1.error = () => {};
	log$1.fatal = () => {};
	if (numericLevel <= LEVELS.fatal) log$1.fatal = console.error ? console.error.bind(console, format("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", format("FATAL"));
	if (numericLevel <= LEVELS.error) log$1.error = console.error ? console.error.bind(console, format("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", format("ERROR"));
	if (numericLevel <= LEVELS.warn) log$1.warn = console.warn ? console.warn.bind(console, format("WARN"), "color: orange") : console.log.bind(console, `\x1B[33m`, format("WARN"));
	if (numericLevel <= LEVELS.info) log$1.info = console.info ? console.info.bind(console, format("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", format("INFO"));
	if (numericLevel <= LEVELS.debug) log$1.debug = console.debug ? console.debug.bind(console, format("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", format("DEBUG"));
	if (numericLevel <= LEVELS.trace) log$1.trace = console.debug ? console.debug.bind(console, format("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", format("TRACE"));
};
var format = (level) => {
	return `%c${(0, import_dayjs_min.default)().format("ss.SSS")} : ${level} : `;
};
var lineBreakRegex = /<br\s*\/?>/gi;
var getRows = (s) => {
	if (!s) return [""];
	return breakToPlaceholder(s).replace(/\\n/g, "#br#").split("#br#");
};
var setupDompurifyHooksIfNotSetup = (() => {
	let setup = false;
	return () => {
		if (!setup) {
			setupDompurifyHooks();
			setup = true;
		}
	};
})();
function setupDompurifyHooks() {
	const TEMPORARY_ATTRIBUTE = "data-temp-href-target";
	import_purify.default.addHook("beforeSanitizeAttributes", (node) => {
		if (node.tagName === "A" && node.hasAttribute("target")) node.setAttribute(TEMPORARY_ATTRIBUTE, node.getAttribute("target") || "");
	});
	import_purify.default.addHook("afterSanitizeAttributes", (node) => {
		if (node.tagName === "A" && node.hasAttribute(TEMPORARY_ATTRIBUTE)) {
			node.setAttribute("target", node.getAttribute(TEMPORARY_ATTRIBUTE) || "");
			node.removeAttribute(TEMPORARY_ATTRIBUTE);
			if (node.getAttribute("target") === "_blank") node.setAttribute("rel", "noopener");
		}
	});
}
var removeScript = (txt) => {
	setupDompurifyHooksIfNotSetup();
	return import_purify.default.sanitize(txt);
};
var sanitizeMore = (text, config2) => {
	var _a;
	if (((_a = config2.flowchart) == null ? void 0 : _a.htmlLabels) !== false) {
		const level = config2.securityLevel;
		if (level === "antiscript" || level === "strict") text = removeScript(text);
		else if (level !== "loose") {
			text = breakToPlaceholder(text);
			text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
			text = text.replace(/=/g, "&equals;");
			text = placeholderToBreak(text);
		}
	}
	return text;
};
var sanitizeText$2 = (text, config2) => {
	if (!text) return text;
	if (config2.dompurifyConfig) text = import_purify.default.sanitize(sanitizeMore(text, config2), config2.dompurifyConfig).toString();
	else text = import_purify.default.sanitize(sanitizeMore(text, config2), { FORBID_TAGS: ["style"] }).toString();
	return text;
};
var sanitizeTextOrArray = (a, config2) => {
	if (typeof a === "string") return sanitizeText$2(a, config2);
	return a.flat().map((x) => sanitizeText$2(x, config2));
};
var hasBreaks = (text) => {
	return lineBreakRegex.test(text);
};
var splitBreaks = (text) => {
	return text.split(lineBreakRegex);
};
var placeholderToBreak = (s) => {
	return s.replace(/#br#/g, "<br/>");
};
var breakToPlaceholder = (s) => {
	return s.replace(lineBreakRegex, "#br#");
};
var getUrl = (useAbsolute) => {
	let url = "";
	if (useAbsolute) {
		url = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
		url = url.replaceAll(/\(/g, "\\(");
		url = url.replaceAll(/\)/g, "\\)");
	}
	return url;
};
var evaluate = (val) => val === false || [
	"false",
	"null",
	"0"
].includes(String(val).trim().toLowerCase()) ? false : true;
var getMax = function(...values) {
	const newValues = values.filter((value) => {
		return !isNaN(value);
	});
	return Math.max(...newValues);
};
var getMin = function(...values) {
	const newValues = values.filter((value) => {
		return !isNaN(value);
	});
	return Math.min(...newValues);
};
var parseGenericTypes = function(input) {
	const inputSets = input.split(/(,)/);
	const output = [];
	for (let i$1 = 0; i$1 < inputSets.length; i$1++) {
		let thisSet = inputSets[i$1];
		if (thisSet === "," && i$1 > 0 && i$1 + 1 < inputSets.length) {
			const previousSet = inputSets[i$1 - 1];
			const nextSet = inputSets[i$1 + 1];
			if (shouldCombineSets(previousSet, nextSet)) {
				thisSet = previousSet + "," + nextSet;
				i$1++;
				output.pop();
			}
		}
		output.push(processSet(thisSet));
	}
	return output.join("");
};
var countOccurrence = (string, substring) => {
	return Math.max(0, string.split(substring).length - 1);
};
var shouldCombineSets = (previousSet, nextSet) => {
	const prevCount = countOccurrence(previousSet, "~");
	const nextCount = countOccurrence(nextSet, "~");
	return prevCount === 1 && nextCount === 1;
};
var processSet = (input) => {
	const tildeCount = countOccurrence(input, "~");
	let hasStartingTilde = false;
	if (tildeCount <= 1) return input;
	if (tildeCount % 2 !== 0 && input.startsWith("~")) {
		input = input.substring(1);
		hasStartingTilde = true;
	}
	const chars = [...input];
	let first = chars.indexOf("~");
	let last = chars.lastIndexOf("~");
	while (first !== -1 && last !== -1 && first !== last) {
		chars[first] = "<";
		chars[last] = ">";
		first = chars.indexOf("~");
		last = chars.lastIndexOf("~");
	}
	if (hasStartingTilde) chars.unshift("~");
	return chars.join("");
};
var isMathMLSupported = () => window.MathMLElement !== void 0;
var katexRegex = /\$\$(.*)\$\$/g;
var hasKatex = (text) => {
	var _a;
	return (((_a = text.match(katexRegex)) == null ? void 0 : _a.length) ?? 0) > 0;
};
var calculateMathMLDimensions = async (text, config2) => {
	text = await renderKatex(text, config2);
	const divElem = document.createElement("div");
	divElem.innerHTML = text;
	divElem.id = "katex-temp";
	divElem.style.visibility = "hidden";
	divElem.style.position = "absolute";
	divElem.style.top = "0";
	document.querySelector("body")?.insertAdjacentElement("beforeend", divElem);
	const dim = {
		width: divElem.clientWidth,
		height: divElem.clientHeight
	};
	divElem.remove();
	return dim;
};
var renderKatex = async (text, config2) => {
	if (!hasKatex(text)) return text;
	if (!isMathMLSupported() && !config2.legacyMathML) return text.replace(katexRegex, "MathML is unsupported in this environment.");
	const { default: katex } = await __vitePreload(async () => {
		const { default: katex$1 } = await import("./katex-FY-mDH2O.js");
		return { default: katex$1 };
	}, __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]));
	return text.split(lineBreakRegex).map((line) => hasKatex(line) ? `
            <div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">
              ${line}
            </div>
          ` : `<div>${line}</div>`).join("").replace(katexRegex, (_, c) => katex.renderToString(c, {
		throwOnError: true,
		displayMode: true,
		output: isMathMLSupported() ? "mathml" : "htmlAndMathml"
	}).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
};
var common$1 = {
	getRows,
	sanitizeText: sanitizeText$2,
	sanitizeTextOrArray,
	hasBreaks,
	splitBreaks,
	lineBreakRegex,
	removeScript,
	getUrl,
	evaluate,
	getMax,
	getMin
};
var mkBorder = (col, darkMode) => darkMode ? adjust_default(col, {
	s: -40,
	l: 10
}) : adjust_default(col, {
	s: -40,
	l: -10
});
var oldAttributeBackgroundColorOdd = "#ffffff";
var oldAttributeBackgroundColorEven = "#f2f2f2";
var Theme$4 = class Theme {
	constructor() {
		this.background = "#f4f4f4";
		this.primaryColor = "#fff4dd";
		this.noteBkgColor = "#fff5ad";
		this.noteTextColor = "#333";
		this.THEME_COLOR_LIMIT = 12;
		this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif";
		this.fontSize = "16px";
	}
	updateColors() {
		var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
		this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333");
		this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 });
		this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, {
			h: 180,
			l: 5
		});
		this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode);
		this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode);
		this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode);
		this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode);
		this.noteBkgColor = this.noteBkgColor || "#fff5ad";
		this.noteTextColor = this.noteTextColor || "#333";
		this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor);
		this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor);
		this.lineColor = this.lineColor || invert_default(this.background);
		this.arrowheadColor = this.arrowheadColor || invert_default(this.background);
		this.textColor = this.textColor || this.primaryTextColor;
		this.border2 = this.border2 || this.tertiaryBorderColor;
		this.nodeBkg = this.nodeBkg || this.primaryColor;
		this.mainBkg = this.mainBkg || this.primaryColor;
		this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
		this.clusterBkg = this.clusterBkg || this.tertiaryColor;
		this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
		this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
		this.titleColor = this.titleColor || this.tertiaryTextColor;
		this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
		this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
		this.actorBorder = this.actorBorder || this.primaryBorderColor;
		this.actorBkg = this.actorBkg || this.mainBkg;
		this.actorTextColor = this.actorTextColor || this.primaryTextColor;
		this.actorLineColor = this.actorLineColor || "grey";
		this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
		this.signalColor = this.signalColor || this.textColor;
		this.signalTextColor = this.signalTextColor || this.textColor;
		this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
		this.labelTextColor = this.labelTextColor || this.actorTextColor;
		this.loopTextColor = this.loopTextColor || this.actorTextColor;
		this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10);
		this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
		this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor);
		this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor;
		this.altSectionBkgColor = this.altSectionBkgColor || "white";
		this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor;
		this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor;
		this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
		this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
		this.taskBkgColor = this.taskBkgColor || this.primaryColor;
		this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor;
		this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(this.primaryColor, 23);
		this.gridColor = this.gridColor || "lightgrey";
		this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
		this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
		this.critBorderColor = this.critBorderColor || "#ff8888";
		this.critBkgColor = this.critBkgColor || "red";
		this.todayLineColor = this.todayLineColor || "red";
		this.taskTextColor = this.taskTextColor || this.textColor;
		this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
		this.taskTextLightColor = this.taskTextLightColor || this.textColor;
		this.taskTextColor = this.taskTextColor || this.primaryTextColor;
		this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
		this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
		this.personBorder = this.personBorder || this.primaryBorderColor;
		this.personBkg = this.personBkg || this.mainBkg;
		this.transitionColor = this.transitionColor || this.lineColor;
		this.transitionLabelColor = this.transitionLabelColor || this.textColor;
		this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
		this.stateBkg = this.stateBkg || this.mainBkg;
		this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
		this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
		this.altBackground = this.altBackground || this.tertiaryColor;
		this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
		this.compositeBorder = this.compositeBorder || this.nodeBorder;
		this.innerEndBackground = this.nodeBorder;
		this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
		this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
		this.transitionColor = this.transitionColor || this.lineColor;
		this.specialStateColor = this.lineColor;
		this.cScale0 = this.cScale0 || this.primaryColor;
		this.cScale1 = this.cScale1 || this.secondaryColor;
		this.cScale2 = this.cScale2 || this.tertiaryColor;
		this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 });
		this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 });
		this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 });
		this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 });
		this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 });
		this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, {
			h: 210,
			l: 150
		});
		this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 });
		this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 });
		this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 });
		if (this.darkMode) for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScale" + i$1] = darken_default(this["cScale" + i$1], 75);
		else for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScale" + i$1] = darken_default(this["cScale" + i$1], 25);
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScaleInv" + i$1] = this["cScaleInv" + i$1] || invert_default(this["cScale" + i$1]);
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) if (this.darkMode) this["cScalePeer" + i$1] = this["cScalePeer" + i$1] || lighten_default(this["cScale" + i$1], 10);
		else this["cScalePeer" + i$1] = this["cScalePeer" + i$1] || darken_default(this["cScale" + i$1], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScaleLabel" + i$1] = this["cScaleLabel" + i$1] || this.scaleLabelColor;
		const multiplier = this.darkMode ? -4 : -1;
		for (let i$1 = 0; i$1 < 5; i$1++) {
			this["surface" + i$1] = this["surface" + i$1] || adjust_default(this.mainBkg, {
				h: 180,
				s: -15,
				l: multiplier * (5 + i$1 * 3)
			});
			this["surfacePeer" + i$1] = this["surfacePeer" + i$1] || adjust_default(this.mainBkg, {
				h: 180,
				s: -15,
				l: multiplier * (8 + i$1 * 3)
			});
		}
		this.classText = this.classText || this.textColor;
		this.fillType0 = this.fillType0 || this.primaryColor;
		this.fillType1 = this.fillType1 || this.secondaryColor;
		this.fillType2 = this.fillType2 || adjust_default(this.primaryColor, { h: 64 });
		this.fillType3 = this.fillType3 || adjust_default(this.secondaryColor, { h: 64 });
		this.fillType4 = this.fillType4 || adjust_default(this.primaryColor, { h: -64 });
		this.fillType5 = this.fillType5 || adjust_default(this.secondaryColor, { h: -64 });
		this.fillType6 = this.fillType6 || adjust_default(this.primaryColor, { h: 128 });
		this.fillType7 = this.fillType7 || adjust_default(this.secondaryColor, { h: 128 });
		this.pie1 = this.pie1 || this.primaryColor;
		this.pie2 = this.pie2 || this.secondaryColor;
		this.pie3 = this.pie3 || this.tertiaryColor;
		this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 });
		this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -10 });
		this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -10 });
		this.pie7 = this.pie7 || adjust_default(this.primaryColor, {
			h: 60,
			l: -10
		});
		this.pie8 = this.pie8 || adjust_default(this.primaryColor, {
			h: -60,
			l: -10
		});
		this.pie9 = this.pie9 || adjust_default(this.primaryColor, {
			h: 120,
			l: 0
		});
		this.pie10 = this.pie10 || adjust_default(this.primaryColor, {
			h: 60,
			l: -20
		});
		this.pie11 = this.pie11 || adjust_default(this.primaryColor, {
			h: -60,
			l: -20
		});
		this.pie12 = this.pie12 || adjust_default(this.primaryColor, {
			h: 120,
			l: -10
		});
		this.pieTitleTextSize = this.pieTitleTextSize || "25px";
		this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
		this.pieSectionTextSize = this.pieSectionTextSize || "17px";
		this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
		this.pieLegendTextSize = this.pieLegendTextSize || "17px";
		this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
		this.pieStrokeColor = this.pieStrokeColor || "black";
		this.pieStrokeWidth = this.pieStrokeWidth || "2px";
		this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
		this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
		this.pieOpacity = this.pieOpacity || "0.7";
		this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
		this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		});
		this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		});
		this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		});
		this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
		this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		});
		this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		});
		this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		});
		this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
		this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
		this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
		this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
		this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
		this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
		this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
		this.xyChart = {
			backgroundColor: ((_a = this.xyChart) == null ? void 0 : _a.backgroundColor) || this.background,
			titleColor: ((_b = this.xyChart) == null ? void 0 : _b.titleColor) || this.primaryTextColor,
			xAxisTitleColor: ((_c = this.xyChart) == null ? void 0 : _c.xAxisTitleColor) || this.primaryTextColor,
			xAxisLabelColor: ((_d = this.xyChart) == null ? void 0 : _d.xAxisLabelColor) || this.primaryTextColor,
			xAxisTickColor: ((_e = this.xyChart) == null ? void 0 : _e.xAxisTickColor) || this.primaryTextColor,
			xAxisLineColor: ((_f = this.xyChart) == null ? void 0 : _f.xAxisLineColor) || this.primaryTextColor,
			yAxisTitleColor: ((_g = this.xyChart) == null ? void 0 : _g.yAxisTitleColor) || this.primaryTextColor,
			yAxisLabelColor: ((_h = this.xyChart) == null ? void 0 : _h.yAxisLabelColor) || this.primaryTextColor,
			yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
			yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
			plotColorPalette: ((_k = this.xyChart) == null ? void 0 : _k.plotColorPalette) || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		};
		this.requirementBackground = this.requirementBackground || this.primaryColor;
		this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
		this.requirementBorderSize = this.requirementBorderSize || "1";
		this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
		this.relationColor = this.relationColor || this.lineColor;
		this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
		this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
		this.git0 = this.git0 || this.primaryColor;
		this.git1 = this.git1 || this.secondaryColor;
		this.git2 = this.git2 || this.tertiaryColor;
		this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 });
		this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 });
		this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 });
		this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 });
		this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 });
		if (this.darkMode) {
			this.git0 = lighten_default(this.git0, 25);
			this.git1 = lighten_default(this.git1, 25);
			this.git2 = lighten_default(this.git2, 25);
			this.git3 = lighten_default(this.git3, 25);
			this.git4 = lighten_default(this.git4, 25);
			this.git5 = lighten_default(this.git5, 25);
			this.git6 = lighten_default(this.git6, 25);
			this.git7 = lighten_default(this.git7, 25);
		} else {
			this.git0 = darken_default(this.git0, 25);
			this.git1 = darken_default(this.git1, 25);
			this.git2 = darken_default(this.git2, 25);
			this.git3 = darken_default(this.git3, 25);
			this.git4 = darken_default(this.git4, 25);
			this.git5 = darken_default(this.git5, 25);
			this.git6 = darken_default(this.git6, 25);
			this.git7 = darken_default(this.git7, 25);
		}
		this.gitInv0 = this.gitInv0 || invert_default(this.git0);
		this.gitInv1 = this.gitInv1 || invert_default(this.git1);
		this.gitInv2 = this.gitInv2 || invert_default(this.git2);
		this.gitInv3 = this.gitInv3 || invert_default(this.git3);
		this.gitInv4 = this.gitInv4 || invert_default(this.git4);
		this.gitInv5 = this.gitInv5 || invert_default(this.git5);
		this.gitInv6 = this.gitInv6 || invert_default(this.git6);
		this.gitInv7 = this.gitInv7 || invert_default(this.git7);
		this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
		this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
		this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
		this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
		this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
		this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
		this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
		this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
		this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
		this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
		this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
		this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
		this.tagLabelFontSize = this.tagLabelFontSize || "10px";
		this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
		this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
		this.commitLabelFontSize = this.commitLabelFontSize || "10px";
		this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
		this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(overrides) {
		if (typeof overrides !== "object") {
			this.updateColors();
			return;
		}
		const keys = Object.keys(overrides);
		keys.forEach((k) => {
			this[k] = overrides[k];
		});
		this.updateColors();
		keys.forEach((k) => {
			this[k] = overrides[k];
		});
	}
};
var getThemeVariables$4 = (userOverrides) => {
	const theme2 = new Theme$4();
	theme2.calculate(userOverrides);
	return theme2;
};
var Theme$3 = class Theme2 {
	constructor() {
		this.background = "#333";
		this.primaryColor = "#1f2020";
		this.secondaryColor = lighten_default(this.primaryColor, 16);
		this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 });
		this.primaryBorderColor = invert_default(this.background);
		this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
		this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
		this.primaryTextColor = invert_default(this.primaryColor);
		this.secondaryTextColor = invert_default(this.secondaryColor);
		this.tertiaryTextColor = invert_default(this.tertiaryColor);
		this.lineColor = invert_default(this.background);
		this.textColor = invert_default(this.background);
		this.mainBkg = "#1f2020";
		this.secondBkg = "calculated";
		this.mainContrastColor = "lightgrey";
		this.darkTextColor = lighten_default(invert_default("#323D47"), 10);
		this.lineColor = "calculated";
		this.border1 = "#81B1DB";
		this.border2 = rgba_default(255, 255, 255, .25);
		this.arrowheadColor = "calculated";
		this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif";
		this.fontSize = "16px";
		this.labelBackground = "#181818";
		this.textColor = "#ccc";
		this.THEME_COLOR_LIMIT = 12;
		this.nodeBkg = "calculated";
		this.nodeBorder = "calculated";
		this.clusterBkg = "calculated";
		this.clusterBorder = "calculated";
		this.defaultLinkColor = "calculated";
		this.titleColor = "#F9FFFE";
		this.edgeLabelBackground = "calculated";
		this.actorBorder = "calculated";
		this.actorBkg = "calculated";
		this.actorTextColor = "calculated";
		this.actorLineColor = "calculated";
		this.signalColor = "calculated";
		this.signalTextColor = "calculated";
		this.labelBoxBkgColor = "calculated";
		this.labelBoxBorderColor = "calculated";
		this.labelTextColor = "calculated";
		this.loopTextColor = "calculated";
		this.noteBorderColor = "calculated";
		this.noteBkgColor = "#fff5ad";
		this.noteTextColor = "calculated";
		this.activationBorderColor = "calculated";
		this.activationBkgColor = "calculated";
		this.sequenceNumberColor = "black";
		this.sectionBkgColor = darken_default("#EAE8D9", 30);
		this.altSectionBkgColor = "calculated";
		this.sectionBkgColor2 = "#EAE8D9";
		this.excludeBkgColor = darken_default(this.sectionBkgColor, 10);
		this.taskBorderColor = rgba_default(255, 255, 255, 70);
		this.taskBkgColor = "calculated";
		this.taskTextColor = "calculated";
		this.taskTextLightColor = "calculated";
		this.taskTextOutsideColor = "calculated";
		this.taskTextClickableColor = "#003163";
		this.activeTaskBorderColor = rgba_default(255, 255, 255, 50);
		this.activeTaskBkgColor = "#81B1DB";
		this.gridColor = "calculated";
		this.doneTaskBkgColor = "calculated";
		this.doneTaskBorderColor = "grey";
		this.critBorderColor = "#E83737";
		this.critBkgColor = "#E83737";
		this.taskTextDarkColor = "calculated";
		this.todayLineColor = "#DB5757";
		this.personBorder = this.primaryBorderColor;
		this.personBkg = this.mainBkg;
		this.labelColor = "calculated";
		this.errorBkgColor = "#a44141";
		this.errorTextColor = "#ddd";
	}
	updateColors() {
		var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
		this.secondBkg = lighten_default(this.mainBkg, 16);
		this.lineColor = this.mainContrastColor;
		this.arrowheadColor = this.mainContrastColor;
		this.nodeBkg = this.mainBkg;
		this.nodeBorder = this.border1;
		this.clusterBkg = this.secondBkg;
		this.clusterBorder = this.border2;
		this.defaultLinkColor = this.lineColor;
		this.edgeLabelBackground = lighten_default(this.labelBackground, 25);
		this.actorBorder = this.border1;
		this.actorBkg = this.mainBkg;
		this.actorTextColor = this.mainContrastColor;
		this.actorLineColor = this.mainContrastColor;
		this.signalColor = this.mainContrastColor;
		this.signalTextColor = this.mainContrastColor;
		this.labelBoxBkgColor = this.actorBkg;
		this.labelBoxBorderColor = this.actorBorder;
		this.labelTextColor = this.mainContrastColor;
		this.loopTextColor = this.mainContrastColor;
		this.noteBorderColor = this.secondaryBorderColor;
		this.noteBkgColor = this.secondBkg;
		this.noteTextColor = this.secondaryTextColor;
		this.activationBorderColor = this.border1;
		this.activationBkgColor = this.secondBkg;
		this.altSectionBkgColor = this.background;
		this.taskBkgColor = lighten_default(this.mainBkg, 23);
		this.taskTextColor = this.darkTextColor;
		this.taskTextLightColor = this.mainContrastColor;
		this.taskTextOutsideColor = this.taskTextLightColor;
		this.gridColor = this.mainContrastColor;
		this.doneTaskBkgColor = this.mainContrastColor;
		this.taskTextDarkColor = this.darkTextColor;
		this.transitionColor = this.transitionColor || this.lineColor;
		this.transitionLabelColor = this.transitionLabelColor || this.textColor;
		this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
		this.stateBkg = this.stateBkg || this.mainBkg;
		this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
		this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
		this.altBackground = this.altBackground || "#555";
		this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
		this.compositeBorder = this.compositeBorder || this.nodeBorder;
		this.innerEndBackground = this.primaryBorderColor;
		this.specialStateColor = "#f4f4f4";
		this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
		this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
		this.fillType0 = this.primaryColor;
		this.fillType1 = this.secondaryColor;
		this.fillType2 = adjust_default(this.primaryColor, { h: 64 });
		this.fillType3 = adjust_default(this.secondaryColor, { h: 64 });
		this.fillType4 = adjust_default(this.primaryColor, { h: -64 });
		this.fillType5 = adjust_default(this.secondaryColor, { h: -64 });
		this.fillType6 = adjust_default(this.primaryColor, { h: 128 });
		this.fillType7 = adjust_default(this.secondaryColor, { h: 128 });
		this.cScale1 = this.cScale1 || "#0b0000";
		this.cScale2 = this.cScale2 || "#4d1037";
		this.cScale3 = this.cScale3 || "#3f5258";
		this.cScale4 = this.cScale4 || "#4f2f1b";
		this.cScale5 = this.cScale5 || "#6e0a0a";
		this.cScale6 = this.cScale6 || "#3b0048";
		this.cScale7 = this.cScale7 || "#995a01";
		this.cScale8 = this.cScale8 || "#154706";
		this.cScale9 = this.cScale9 || "#161722";
		this.cScale10 = this.cScale10 || "#00296f";
		this.cScale11 = this.cScale11 || "#01629c";
		this.cScale12 = this.cScale12 || "#010029";
		this.cScale0 = this.cScale0 || this.primaryColor;
		this.cScale1 = this.cScale1 || this.secondaryColor;
		this.cScale2 = this.cScale2 || this.tertiaryColor;
		this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 });
		this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 });
		this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 });
		this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 });
		this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 });
		this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210 });
		this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 });
		this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 });
		this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 });
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScaleInv" + i$1] = this["cScaleInv" + i$1] || invert_default(this["cScale" + i$1]);
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScalePeer" + i$1] = this["cScalePeer" + i$1] || lighten_default(this["cScale" + i$1], 10);
		for (let i$1 = 0; i$1 < 5; i$1++) {
			this["surface" + i$1] = this["surface" + i$1] || adjust_default(this.mainBkg, {
				h: 30,
				s: -30,
				l: -(-10 + i$1 * 4)
			});
			this["surfacePeer" + i$1] = this["surfacePeer" + i$1] || adjust_default(this.mainBkg, {
				h: 30,
				s: -30,
				l: -(-7 + i$1 * 4)
			});
		}
		this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScaleLabel" + i$1] = this["cScaleLabel" + i$1] || this.scaleLabelColor;
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["pie" + i$1] = this["cScale" + i$1];
		this.pieTitleTextSize = this.pieTitleTextSize || "25px";
		this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
		this.pieSectionTextSize = this.pieSectionTextSize || "17px";
		this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
		this.pieLegendTextSize = this.pieLegendTextSize || "17px";
		this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
		this.pieStrokeColor = this.pieStrokeColor || "black";
		this.pieStrokeWidth = this.pieStrokeWidth || "2px";
		this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
		this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
		this.pieOpacity = this.pieOpacity || "0.7";
		this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
		this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		});
		this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		});
		this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		});
		this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
		this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		});
		this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		});
		this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		});
		this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
		this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
		this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
		this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
		this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
		this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
		this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
		this.xyChart = {
			backgroundColor: ((_a = this.xyChart) == null ? void 0 : _a.backgroundColor) || this.background,
			titleColor: ((_b = this.xyChart) == null ? void 0 : _b.titleColor) || this.primaryTextColor,
			xAxisTitleColor: ((_c = this.xyChart) == null ? void 0 : _c.xAxisTitleColor) || this.primaryTextColor,
			xAxisLabelColor: ((_d = this.xyChart) == null ? void 0 : _d.xAxisLabelColor) || this.primaryTextColor,
			xAxisTickColor: ((_e = this.xyChart) == null ? void 0 : _e.xAxisTickColor) || this.primaryTextColor,
			xAxisLineColor: ((_f = this.xyChart) == null ? void 0 : _f.xAxisLineColor) || this.primaryTextColor,
			yAxisTitleColor: ((_g = this.xyChart) == null ? void 0 : _g.yAxisTitleColor) || this.primaryTextColor,
			yAxisLabelColor: ((_h = this.xyChart) == null ? void 0 : _h.yAxisLabelColor) || this.primaryTextColor,
			yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
			yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
			plotColorPalette: ((_k = this.xyChart) == null ? void 0 : _k.plotColorPalette) || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
		};
		this.classText = this.primaryTextColor;
		this.requirementBackground = this.requirementBackground || this.primaryColor;
		this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
		this.requirementBorderSize = this.requirementBorderSize || "1";
		this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
		this.relationColor = this.relationColor || this.lineColor;
		this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
		this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
		this.git0 = lighten_default(this.secondaryColor, 20);
		this.git1 = lighten_default(this.pie2 || this.secondaryColor, 20);
		this.git2 = lighten_default(this.pie3 || this.tertiaryColor, 20);
		this.git3 = lighten_default(this.pie4 || adjust_default(this.primaryColor, { h: -30 }), 20);
		this.git4 = lighten_default(this.pie5 || adjust_default(this.primaryColor, { h: -60 }), 20);
		this.git5 = lighten_default(this.pie6 || adjust_default(this.primaryColor, { h: -90 }), 10);
		this.git6 = lighten_default(this.pie7 || adjust_default(this.primaryColor, { h: 60 }), 10);
		this.git7 = lighten_default(this.pie8 || adjust_default(this.primaryColor, { h: 120 }), 20);
		this.gitInv0 = this.gitInv0 || invert_default(this.git0);
		this.gitInv1 = this.gitInv1 || invert_default(this.git1);
		this.gitInv2 = this.gitInv2 || invert_default(this.git2);
		this.gitInv3 = this.gitInv3 || invert_default(this.git3);
		this.gitInv4 = this.gitInv4 || invert_default(this.git4);
		this.gitInv5 = this.gitInv5 || invert_default(this.git5);
		this.gitInv6 = this.gitInv6 || invert_default(this.git6);
		this.gitInv7 = this.gitInv7 || invert_default(this.git7);
		this.gitBranchLabel0 = this.gitBranchLabel0 || invert_default(this.labelTextColor);
		this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
		this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
		this.gitBranchLabel3 = this.gitBranchLabel3 || invert_default(this.labelTextColor);
		this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
		this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
		this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
		this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
		this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
		this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
		this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
		this.tagLabelFontSize = this.tagLabelFontSize || "10px";
		this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
		this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
		this.commitLabelFontSize = this.commitLabelFontSize || "10px";
		this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || lighten_default(this.background, 12);
		this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || lighten_default(this.background, 2);
	}
	calculate(overrides) {
		if (typeof overrides !== "object") {
			this.updateColors();
			return;
		}
		const keys = Object.keys(overrides);
		keys.forEach((k) => {
			this[k] = overrides[k];
		});
		this.updateColors();
		keys.forEach((k) => {
			this[k] = overrides[k];
		});
	}
};
var getThemeVariables$3 = (userOverrides) => {
	const theme2 = new Theme$3();
	theme2.calculate(userOverrides);
	return theme2;
};
var Theme$2 = class Theme3 {
	constructor() {
		this.background = "#f4f4f4";
		this.primaryColor = "#ECECFF";
		this.secondaryColor = adjust_default(this.primaryColor, { h: 120 });
		this.secondaryColor = "#ffffde";
		this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 });
		this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
		this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
		this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
		this.primaryTextColor = invert_default(this.primaryColor);
		this.secondaryTextColor = invert_default(this.secondaryColor);
		this.tertiaryTextColor = invert_default(this.tertiaryColor);
		this.lineColor = invert_default(this.background);
		this.textColor = invert_default(this.background);
		this.background = "white";
		this.mainBkg = "#ECECFF";
		this.secondBkg = "#ffffde";
		this.lineColor = "#333333";
		this.border1 = "#9370DB";
		this.border2 = "#aaaa33";
		this.arrowheadColor = "#333333";
		this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif";
		this.fontSize = "16px";
		this.labelBackground = "#e8e8e8";
		this.textColor = "#333";
		this.THEME_COLOR_LIMIT = 12;
		this.nodeBkg = "calculated";
		this.nodeBorder = "calculated";
		this.clusterBkg = "calculated";
		this.clusterBorder = "calculated";
		this.defaultLinkColor = "calculated";
		this.titleColor = "calculated";
		this.edgeLabelBackground = "calculated";
		this.actorBorder = "calculated";
		this.actorBkg = "calculated";
		this.actorTextColor = "black";
		this.actorLineColor = "grey";
		this.signalColor = "calculated";
		this.signalTextColor = "calculated";
		this.labelBoxBkgColor = "calculated";
		this.labelBoxBorderColor = "calculated";
		this.labelTextColor = "calculated";
		this.loopTextColor = "calculated";
		this.noteBorderColor = "calculated";
		this.noteBkgColor = "#fff5ad";
		this.noteTextColor = "calculated";
		this.activationBorderColor = "#666";
		this.activationBkgColor = "#f4f4f4";
		this.sequenceNumberColor = "white";
		this.sectionBkgColor = "calculated";
		this.altSectionBkgColor = "calculated";
		this.sectionBkgColor2 = "calculated";
		this.excludeBkgColor = "#eeeeee";
		this.taskBorderColor = "calculated";
		this.taskBkgColor = "calculated";
		this.taskTextLightColor = "calculated";
		this.taskTextColor = this.taskTextLightColor;
		this.taskTextDarkColor = "calculated";
		this.taskTextOutsideColor = this.taskTextDarkColor;
		this.taskTextClickableColor = "calculated";
		this.activeTaskBorderColor = "calculated";
		this.activeTaskBkgColor = "calculated";
		this.gridColor = "calculated";
		this.doneTaskBkgColor = "calculated";
		this.doneTaskBorderColor = "calculated";
		this.critBorderColor = "calculated";
		this.critBkgColor = "calculated";
		this.todayLineColor = "calculated";
		this.sectionBkgColor = rgba_default(102, 102, 255, .49);
		this.altSectionBkgColor = "white";
		this.sectionBkgColor2 = "#fff400";
		this.taskBorderColor = "#534fbc";
		this.taskBkgColor = "#8a90dd";
		this.taskTextLightColor = "white";
		this.taskTextColor = "calculated";
		this.taskTextDarkColor = "black";
		this.taskTextOutsideColor = "calculated";
		this.taskTextClickableColor = "#003163";
		this.activeTaskBorderColor = "#534fbc";
		this.activeTaskBkgColor = "#bfc7ff";
		this.gridColor = "lightgrey";
		this.doneTaskBkgColor = "lightgrey";
		this.doneTaskBorderColor = "grey";
		this.critBorderColor = "#ff8888";
		this.critBkgColor = "red";
		this.todayLineColor = "red";
		this.personBorder = this.primaryBorderColor;
		this.personBkg = this.mainBkg;
		this.labelColor = "black";
		this.errorBkgColor = "#552222";
		this.errorTextColor = "#552222";
		this.updateColors();
	}
	updateColors() {
		var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
		this.cScale0 = this.cScale0 || this.primaryColor;
		this.cScale1 = this.cScale1 || this.secondaryColor;
		this.cScale2 = this.cScale2 || this.tertiaryColor;
		this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 });
		this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 });
		this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 });
		this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 });
		this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 });
		this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210 });
		this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 });
		this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 });
		this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 });
		this["cScalePeer1"] = this["cScalePeer1"] || darken_default(this.secondaryColor, 45);
		this["cScalePeer2"] = this["cScalePeer2"] || darken_default(this.tertiaryColor, 40);
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) {
			this["cScale" + i$1] = darken_default(this["cScale" + i$1], 10);
			this["cScalePeer" + i$1] = this["cScalePeer" + i$1] || darken_default(this["cScale" + i$1], 25);
		}
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScaleInv" + i$1] = this["cScaleInv" + i$1] || adjust_default(this["cScale" + i$1], { h: 180 });
		for (let i$1 = 0; i$1 < 5; i$1++) {
			this["surface" + i$1] = this["surface" + i$1] || adjust_default(this.mainBkg, {
				h: 30,
				l: -(5 + i$1 * 5)
			});
			this["surfacePeer" + i$1] = this["surfacePeer" + i$1] || adjust_default(this.mainBkg, {
				h: 30,
				l: -(7 + i$1 * 5)
			});
		}
		this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
		if (this.labelTextColor !== "calculated") {
			this.cScaleLabel0 = this.cScaleLabel0 || invert_default(this.labelTextColor);
			this.cScaleLabel3 = this.cScaleLabel3 || invert_default(this.labelTextColor);
			for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScaleLabel" + i$1] = this["cScaleLabel" + i$1] || this.labelTextColor;
		}
		this.nodeBkg = this.mainBkg;
		this.nodeBorder = this.border1;
		this.clusterBkg = this.secondBkg;
		this.clusterBorder = this.border2;
		this.defaultLinkColor = this.lineColor;
		this.titleColor = this.textColor;
		this.edgeLabelBackground = this.labelBackground;
		this.actorBorder = lighten_default(this.border1, 23);
		this.actorBkg = this.mainBkg;
		this.labelBoxBkgColor = this.actorBkg;
		this.signalColor = this.textColor;
		this.signalTextColor = this.textColor;
		this.labelBoxBorderColor = this.actorBorder;
		this.labelTextColor = this.actorTextColor;
		this.loopTextColor = this.actorTextColor;
		this.noteBorderColor = this.border2;
		this.noteTextColor = this.actorTextColor;
		this.taskTextColor = this.taskTextLightColor;
		this.taskTextOutsideColor = this.taskTextDarkColor;
		this.transitionColor = this.transitionColor || this.lineColor;
		this.transitionLabelColor = this.transitionLabelColor || this.textColor;
		this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
		this.stateBkg = this.stateBkg || this.mainBkg;
		this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
		this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
		this.altBackground = this.altBackground || "#f0f0f0";
		this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
		this.compositeBorder = this.compositeBorder || this.nodeBorder;
		this.innerEndBackground = this.nodeBorder;
		this.specialStateColor = this.lineColor;
		this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
		this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
		this.transitionColor = this.transitionColor || this.lineColor;
		this.classText = this.primaryTextColor;
		this.fillType0 = this.primaryColor;
		this.fillType1 = this.secondaryColor;
		this.fillType2 = adjust_default(this.primaryColor, { h: 64 });
		this.fillType3 = adjust_default(this.secondaryColor, { h: 64 });
		this.fillType4 = adjust_default(this.primaryColor, { h: -64 });
		this.fillType5 = adjust_default(this.secondaryColor, { h: -64 });
		this.fillType6 = adjust_default(this.primaryColor, { h: 128 });
		this.fillType7 = adjust_default(this.secondaryColor, { h: 128 });
		this.pie1 = this.pie1 || this.primaryColor;
		this.pie2 = this.pie2 || this.secondaryColor;
		this.pie3 = this.pie3 || adjust_default(this.tertiaryColor, { l: -40 });
		this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 });
		this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -30 });
		this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -20 });
		this.pie7 = this.pie7 || adjust_default(this.primaryColor, {
			h: 60,
			l: -20
		});
		this.pie8 = this.pie8 || adjust_default(this.primaryColor, {
			h: -60,
			l: -40
		});
		this.pie9 = this.pie9 || adjust_default(this.primaryColor, {
			h: 120,
			l: -40
		});
		this.pie10 = this.pie10 || adjust_default(this.primaryColor, {
			h: 60,
			l: -40
		});
		this.pie11 = this.pie11 || adjust_default(this.primaryColor, {
			h: -90,
			l: -40
		});
		this.pie12 = this.pie12 || adjust_default(this.primaryColor, {
			h: 120,
			l: -30
		});
		this.pieTitleTextSize = this.pieTitleTextSize || "25px";
		this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
		this.pieSectionTextSize = this.pieSectionTextSize || "17px";
		this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
		this.pieLegendTextSize = this.pieLegendTextSize || "17px";
		this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
		this.pieStrokeColor = this.pieStrokeColor || "black";
		this.pieStrokeWidth = this.pieStrokeWidth || "2px";
		this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
		this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
		this.pieOpacity = this.pieOpacity || "0.7";
		this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
		this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		});
		this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		});
		this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		});
		this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
		this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		});
		this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		});
		this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		});
		this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
		this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
		this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
		this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
		this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
		this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
		this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
		this.xyChart = {
			backgroundColor: ((_a = this.xyChart) == null ? void 0 : _a.backgroundColor) || this.background,
			titleColor: ((_b = this.xyChart) == null ? void 0 : _b.titleColor) || this.primaryTextColor,
			xAxisTitleColor: ((_c = this.xyChart) == null ? void 0 : _c.xAxisTitleColor) || this.primaryTextColor,
			xAxisLabelColor: ((_d = this.xyChart) == null ? void 0 : _d.xAxisLabelColor) || this.primaryTextColor,
			xAxisTickColor: ((_e = this.xyChart) == null ? void 0 : _e.xAxisTickColor) || this.primaryTextColor,
			xAxisLineColor: ((_f = this.xyChart) == null ? void 0 : _f.xAxisLineColor) || this.primaryTextColor,
			yAxisTitleColor: ((_g = this.xyChart) == null ? void 0 : _g.yAxisTitleColor) || this.primaryTextColor,
			yAxisLabelColor: ((_h = this.xyChart) == null ? void 0 : _h.yAxisLabelColor) || this.primaryTextColor,
			yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
			yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
			plotColorPalette: ((_k = this.xyChart) == null ? void 0 : _k.plotColorPalette) || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
		};
		this.requirementBackground = this.requirementBackground || this.primaryColor;
		this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
		this.requirementBorderSize = this.requirementBorderSize || "1";
		this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
		this.relationColor = this.relationColor || this.lineColor;
		this.relationLabelBackground = this.relationLabelBackground || this.labelBackground;
		this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
		this.git0 = this.git0 || this.primaryColor;
		this.git1 = this.git1 || this.secondaryColor;
		this.git2 = this.git2 || this.tertiaryColor;
		this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 });
		this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 });
		this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 });
		this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 });
		this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 });
		if (this.darkMode) {
			this.git0 = lighten_default(this.git0, 25);
			this.git1 = lighten_default(this.git1, 25);
			this.git2 = lighten_default(this.git2, 25);
			this.git3 = lighten_default(this.git3, 25);
			this.git4 = lighten_default(this.git4, 25);
			this.git5 = lighten_default(this.git5, 25);
			this.git6 = lighten_default(this.git6, 25);
			this.git7 = lighten_default(this.git7, 25);
		} else {
			this.git0 = darken_default(this.git0, 25);
			this.git1 = darken_default(this.git1, 25);
			this.git2 = darken_default(this.git2, 25);
			this.git3 = darken_default(this.git3, 25);
			this.git4 = darken_default(this.git4, 25);
			this.git5 = darken_default(this.git5, 25);
			this.git6 = darken_default(this.git6, 25);
			this.git7 = darken_default(this.git7, 25);
		}
		this.gitInv0 = this.gitInv0 || darken_default(invert_default(this.git0), 25);
		this.gitInv1 = this.gitInv1 || invert_default(this.git1);
		this.gitInv2 = this.gitInv2 || invert_default(this.git2);
		this.gitInv3 = this.gitInv3 || invert_default(this.git3);
		this.gitInv4 = this.gitInv4 || invert_default(this.git4);
		this.gitInv5 = this.gitInv5 || invert_default(this.git5);
		this.gitInv6 = this.gitInv6 || invert_default(this.git6);
		this.gitInv7 = this.gitInv7 || invert_default(this.git7);
		this.gitBranchLabel0 = this.gitBranchLabel0 || invert_default(this.labelTextColor);
		this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
		this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
		this.gitBranchLabel3 = this.gitBranchLabel3 || invert_default(this.labelTextColor);
		this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
		this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
		this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
		this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
		this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
		this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
		this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
		this.tagLabelFontSize = this.tagLabelFontSize || "10px";
		this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
		this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
		this.commitLabelFontSize = this.commitLabelFontSize || "10px";
		this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
		this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(overrides) {
		if (typeof overrides !== "object") {
			this.updateColors();
			return;
		}
		const keys = Object.keys(overrides);
		keys.forEach((k) => {
			this[k] = overrides[k];
		});
		this.updateColors();
		keys.forEach((k) => {
			this[k] = overrides[k];
		});
	}
};
var getThemeVariables$2 = (userOverrides) => {
	const theme2 = new Theme$2();
	theme2.calculate(userOverrides);
	return theme2;
};
var Theme$1 = class Theme4 {
	constructor() {
		this.background = "#f4f4f4";
		this.primaryColor = "#cde498";
		this.secondaryColor = "#cdffb2";
		this.background = "white";
		this.mainBkg = "#cde498";
		this.secondBkg = "#cdffb2";
		this.lineColor = "green";
		this.border1 = "#13540c";
		this.border2 = "#6eaa49";
		this.arrowheadColor = "green";
		this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif";
		this.fontSize = "16px";
		this.tertiaryColor = lighten_default("#cde498", 10);
		this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
		this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
		this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
		this.primaryTextColor = invert_default(this.primaryColor);
		this.secondaryTextColor = invert_default(this.secondaryColor);
		this.tertiaryTextColor = invert_default(this.primaryColor);
		this.lineColor = invert_default(this.background);
		this.textColor = invert_default(this.background);
		this.THEME_COLOR_LIMIT = 12;
		this.nodeBkg = "calculated";
		this.nodeBorder = "calculated";
		this.clusterBkg = "calculated";
		this.clusterBorder = "calculated";
		this.defaultLinkColor = "calculated";
		this.titleColor = "#333";
		this.edgeLabelBackground = "#e8e8e8";
		this.actorBorder = "calculated";
		this.actorBkg = "calculated";
		this.actorTextColor = "black";
		this.actorLineColor = "grey";
		this.signalColor = "#333";
		this.signalTextColor = "#333";
		this.labelBoxBkgColor = "calculated";
		this.labelBoxBorderColor = "#326932";
		this.labelTextColor = "calculated";
		this.loopTextColor = "calculated";
		this.noteBorderColor = "calculated";
		this.noteBkgColor = "#fff5ad";
		this.noteTextColor = "calculated";
		this.activationBorderColor = "#666";
		this.activationBkgColor = "#f4f4f4";
		this.sequenceNumberColor = "white";
		this.sectionBkgColor = "#6eaa49";
		this.altSectionBkgColor = "white";
		this.sectionBkgColor2 = "#6eaa49";
		this.excludeBkgColor = "#eeeeee";
		this.taskBorderColor = "calculated";
		this.taskBkgColor = "#487e3a";
		this.taskTextLightColor = "white";
		this.taskTextColor = "calculated";
		this.taskTextDarkColor = "black";
		this.taskTextOutsideColor = "calculated";
		this.taskTextClickableColor = "#003163";
		this.activeTaskBorderColor = "calculated";
		this.activeTaskBkgColor = "calculated";
		this.gridColor = "lightgrey";
		this.doneTaskBkgColor = "lightgrey";
		this.doneTaskBorderColor = "grey";
		this.critBorderColor = "#ff8888";
		this.critBkgColor = "red";
		this.todayLineColor = "red";
		this.personBorder = this.primaryBorderColor;
		this.personBkg = this.mainBkg;
		this.labelColor = "black";
		this.errorBkgColor = "#552222";
		this.errorTextColor = "#552222";
	}
	updateColors() {
		var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
		this.actorBorder = darken_default(this.mainBkg, 20);
		this.actorBkg = this.mainBkg;
		this.labelBoxBkgColor = this.actorBkg;
		this.labelTextColor = this.actorTextColor;
		this.loopTextColor = this.actorTextColor;
		this.noteBorderColor = this.border2;
		this.noteTextColor = this.actorTextColor;
		this.cScale0 = this.cScale0 || this.primaryColor;
		this.cScale1 = this.cScale1 || this.secondaryColor;
		this.cScale2 = this.cScale2 || this.tertiaryColor;
		this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 });
		this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 });
		this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 });
		this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 });
		this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 });
		this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210 });
		this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 });
		this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 });
		this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 });
		this["cScalePeer1"] = this["cScalePeer1"] || darken_default(this.secondaryColor, 45);
		this["cScalePeer2"] = this["cScalePeer2"] || darken_default(this.tertiaryColor, 40);
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) {
			this["cScale" + i$1] = darken_default(this["cScale" + i$1], 10);
			this["cScalePeer" + i$1] = this["cScalePeer" + i$1] || darken_default(this["cScale" + i$1], 25);
		}
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScaleInv" + i$1] = this["cScaleInv" + i$1] || adjust_default(this["cScale" + i$1], { h: 180 });
		this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScaleLabel" + i$1] = this["cScaleLabel" + i$1] || this.scaleLabelColor;
		for (let i$1 = 0; i$1 < 5; i$1++) {
			this["surface" + i$1] = this["surface" + i$1] || adjust_default(this.mainBkg, {
				h: 30,
				s: -30,
				l: -(5 + i$1 * 5)
			});
			this["surfacePeer" + i$1] = this["surfacePeer" + i$1] || adjust_default(this.mainBkg, {
				h: 30,
				s: -30,
				l: -(8 + i$1 * 5)
			});
		}
		this.nodeBkg = this.mainBkg;
		this.nodeBorder = this.border1;
		this.clusterBkg = this.secondBkg;
		this.clusterBorder = this.border2;
		this.defaultLinkColor = this.lineColor;
		this.taskBorderColor = this.border1;
		this.taskTextColor = this.taskTextLightColor;
		this.taskTextOutsideColor = this.taskTextDarkColor;
		this.activeTaskBorderColor = this.taskBorderColor;
		this.activeTaskBkgColor = this.mainBkg;
		this.transitionColor = this.transitionColor || this.lineColor;
		this.transitionLabelColor = this.transitionLabelColor || this.textColor;
		this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
		this.stateBkg = this.stateBkg || this.mainBkg;
		this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
		this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
		this.altBackground = this.altBackground || "#f0f0f0";
		this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
		this.compositeBorder = this.compositeBorder || this.nodeBorder;
		this.innerEndBackground = this.primaryBorderColor;
		this.specialStateColor = this.lineColor;
		this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
		this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
		this.transitionColor = this.transitionColor || this.lineColor;
		this.classText = this.primaryTextColor;
		this.fillType0 = this.primaryColor;
		this.fillType1 = this.secondaryColor;
		this.fillType2 = adjust_default(this.primaryColor, { h: 64 });
		this.fillType3 = adjust_default(this.secondaryColor, { h: 64 });
		this.fillType4 = adjust_default(this.primaryColor, { h: -64 });
		this.fillType5 = adjust_default(this.secondaryColor, { h: -64 });
		this.fillType6 = adjust_default(this.primaryColor, { h: 128 });
		this.fillType7 = adjust_default(this.secondaryColor, { h: 128 });
		this.pie1 = this.pie1 || this.primaryColor;
		this.pie2 = this.pie2 || this.secondaryColor;
		this.pie3 = this.pie3 || this.tertiaryColor;
		this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -30 });
		this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -30 });
		this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, {
			h: 40,
			l: -40
		});
		this.pie7 = this.pie7 || adjust_default(this.primaryColor, {
			h: 60,
			l: -10
		});
		this.pie8 = this.pie8 || adjust_default(this.primaryColor, {
			h: -60,
			l: -10
		});
		this.pie9 = this.pie9 || adjust_default(this.primaryColor, {
			h: 120,
			l: 0
		});
		this.pie10 = this.pie10 || adjust_default(this.primaryColor, {
			h: 60,
			l: -50
		});
		this.pie11 = this.pie11 || adjust_default(this.primaryColor, {
			h: -60,
			l: -50
		});
		this.pie12 = this.pie12 || adjust_default(this.primaryColor, {
			h: 120,
			l: -50
		});
		this.pieTitleTextSize = this.pieTitleTextSize || "25px";
		this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
		this.pieSectionTextSize = this.pieSectionTextSize || "17px";
		this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
		this.pieLegendTextSize = this.pieLegendTextSize || "17px";
		this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
		this.pieStrokeColor = this.pieStrokeColor || "black";
		this.pieStrokeWidth = this.pieStrokeWidth || "2px";
		this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
		this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
		this.pieOpacity = this.pieOpacity || "0.7";
		this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
		this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		});
		this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		});
		this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		});
		this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
		this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		});
		this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		});
		this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		});
		this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
		this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
		this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
		this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
		this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
		this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
		this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
		this.xyChart = {
			backgroundColor: ((_a = this.xyChart) == null ? void 0 : _a.backgroundColor) || this.background,
			titleColor: ((_b = this.xyChart) == null ? void 0 : _b.titleColor) || this.primaryTextColor,
			xAxisTitleColor: ((_c = this.xyChart) == null ? void 0 : _c.xAxisTitleColor) || this.primaryTextColor,
			xAxisLabelColor: ((_d = this.xyChart) == null ? void 0 : _d.xAxisLabelColor) || this.primaryTextColor,
			xAxisTickColor: ((_e = this.xyChart) == null ? void 0 : _e.xAxisTickColor) || this.primaryTextColor,
			xAxisLineColor: ((_f = this.xyChart) == null ? void 0 : _f.xAxisLineColor) || this.primaryTextColor,
			yAxisTitleColor: ((_g = this.xyChart) == null ? void 0 : _g.yAxisTitleColor) || this.primaryTextColor,
			yAxisLabelColor: ((_h = this.xyChart) == null ? void 0 : _h.yAxisLabelColor) || this.primaryTextColor,
			yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
			yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
			plotColorPalette: ((_k = this.xyChart) == null ? void 0 : _k.plotColorPalette) || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
		};
		this.requirementBackground = this.requirementBackground || this.primaryColor;
		this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
		this.requirementBorderSize = this.requirementBorderSize || "1";
		this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
		this.relationColor = this.relationColor || this.lineColor;
		this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
		this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
		this.git0 = this.git0 || this.primaryColor;
		this.git1 = this.git1 || this.secondaryColor;
		this.git2 = this.git2 || this.tertiaryColor;
		this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 });
		this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 });
		this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 });
		this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 });
		this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 });
		if (this.darkMode) {
			this.git0 = lighten_default(this.git0, 25);
			this.git1 = lighten_default(this.git1, 25);
			this.git2 = lighten_default(this.git2, 25);
			this.git3 = lighten_default(this.git3, 25);
			this.git4 = lighten_default(this.git4, 25);
			this.git5 = lighten_default(this.git5, 25);
			this.git6 = lighten_default(this.git6, 25);
			this.git7 = lighten_default(this.git7, 25);
		} else {
			this.git0 = darken_default(this.git0, 25);
			this.git1 = darken_default(this.git1, 25);
			this.git2 = darken_default(this.git2, 25);
			this.git3 = darken_default(this.git3, 25);
			this.git4 = darken_default(this.git4, 25);
			this.git5 = darken_default(this.git5, 25);
			this.git6 = darken_default(this.git6, 25);
			this.git7 = darken_default(this.git7, 25);
		}
		this.gitInv0 = this.gitInv0 || invert_default(this.git0);
		this.gitInv1 = this.gitInv1 || invert_default(this.git1);
		this.gitInv2 = this.gitInv2 || invert_default(this.git2);
		this.gitInv3 = this.gitInv3 || invert_default(this.git3);
		this.gitInv4 = this.gitInv4 || invert_default(this.git4);
		this.gitInv5 = this.gitInv5 || invert_default(this.git5);
		this.gitInv6 = this.gitInv6 || invert_default(this.git6);
		this.gitInv7 = this.gitInv7 || invert_default(this.git7);
		this.gitBranchLabel0 = this.gitBranchLabel0 || invert_default(this.labelTextColor);
		this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
		this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
		this.gitBranchLabel3 = this.gitBranchLabel3 || invert_default(this.labelTextColor);
		this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
		this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
		this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
		this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
		this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
		this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
		this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
		this.tagLabelFontSize = this.tagLabelFontSize || "10px";
		this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
		this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
		this.commitLabelFontSize = this.commitLabelFontSize || "10px";
		this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
		this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(overrides) {
		if (typeof overrides !== "object") {
			this.updateColors();
			return;
		}
		const keys = Object.keys(overrides);
		keys.forEach((k) => {
			this[k] = overrides[k];
		});
		this.updateColors();
		keys.forEach((k) => {
			this[k] = overrides[k];
		});
	}
};
var getThemeVariables$1 = (userOverrides) => {
	const theme2 = new Theme$1();
	theme2.calculate(userOverrides);
	return theme2;
};
var Theme5 = class {
	constructor() {
		this.primaryColor = "#eee";
		this.contrast = "#707070";
		this.secondaryColor = lighten_default(this.contrast, 55);
		this.background = "#ffffff";
		this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 });
		this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
		this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
		this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
		this.primaryTextColor = invert_default(this.primaryColor);
		this.secondaryTextColor = invert_default(this.secondaryColor);
		this.tertiaryTextColor = invert_default(this.tertiaryColor);
		this.lineColor = invert_default(this.background);
		this.textColor = invert_default(this.background);
		this.mainBkg = "#eee";
		this.secondBkg = "calculated";
		this.lineColor = "#666";
		this.border1 = "#999";
		this.border2 = "calculated";
		this.note = "#ffa";
		this.text = "#333";
		this.critical = "#d42";
		this.done = "#bbb";
		this.arrowheadColor = "#333333";
		this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif";
		this.fontSize = "16px";
		this.THEME_COLOR_LIMIT = 12;
		this.nodeBkg = "calculated";
		this.nodeBorder = "calculated";
		this.clusterBkg = "calculated";
		this.clusterBorder = "calculated";
		this.defaultLinkColor = "calculated";
		this.titleColor = "calculated";
		this.edgeLabelBackground = "white";
		this.actorBorder = "calculated";
		this.actorBkg = "calculated";
		this.actorTextColor = "calculated";
		this.actorLineColor = "calculated";
		this.signalColor = "calculated";
		this.signalTextColor = "calculated";
		this.labelBoxBkgColor = "calculated";
		this.labelBoxBorderColor = "calculated";
		this.labelTextColor = "calculated";
		this.loopTextColor = "calculated";
		this.noteBorderColor = "calculated";
		this.noteBkgColor = "calculated";
		this.noteTextColor = "calculated";
		this.activationBorderColor = "#666";
		this.activationBkgColor = "#f4f4f4";
		this.sequenceNumberColor = "white";
		this.sectionBkgColor = "calculated";
		this.altSectionBkgColor = "white";
		this.sectionBkgColor2 = "calculated";
		this.excludeBkgColor = "#eeeeee";
		this.taskBorderColor = "calculated";
		this.taskBkgColor = "calculated";
		this.taskTextLightColor = "white";
		this.taskTextColor = "calculated";
		this.taskTextDarkColor = "calculated";
		this.taskTextOutsideColor = "calculated";
		this.taskTextClickableColor = "#003163";
		this.activeTaskBorderColor = "calculated";
		this.activeTaskBkgColor = "calculated";
		this.gridColor = "calculated";
		this.doneTaskBkgColor = "calculated";
		this.doneTaskBorderColor = "calculated";
		this.critBkgColor = "calculated";
		this.critBorderColor = "calculated";
		this.todayLineColor = "calculated";
		this.personBorder = this.primaryBorderColor;
		this.personBkg = this.mainBkg;
		this.labelColor = "black";
		this.errorBkgColor = "#552222";
		this.errorTextColor = "#552222";
	}
	updateColors() {
		var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
		this.secondBkg = lighten_default(this.contrast, 55);
		this.border2 = this.contrast;
		this.actorBorder = lighten_default(this.border1, 23);
		this.actorBkg = this.mainBkg;
		this.actorTextColor = this.text;
		this.actorLineColor = this.lineColor;
		this.signalColor = this.text;
		this.signalTextColor = this.text;
		this.labelBoxBkgColor = this.actorBkg;
		this.labelBoxBorderColor = this.actorBorder;
		this.labelTextColor = this.text;
		this.loopTextColor = this.text;
		this.noteBorderColor = "#999";
		this.noteBkgColor = "#666";
		this.noteTextColor = "#fff";
		this.cScale0 = this.cScale0 || "#555";
		this.cScale1 = this.cScale1 || "#F4F4F4";
		this.cScale2 = this.cScale2 || "#555";
		this.cScale3 = this.cScale3 || "#BBB";
		this.cScale4 = this.cScale4 || "#777";
		this.cScale5 = this.cScale5 || "#999";
		this.cScale6 = this.cScale6 || "#DDD";
		this.cScale7 = this.cScale7 || "#FFF";
		this.cScale8 = this.cScale8 || "#DDD";
		this.cScale9 = this.cScale9 || "#BBB";
		this.cScale10 = this.cScale10 || "#999";
		this.cScale11 = this.cScale11 || "#777";
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScaleInv" + i$1] = this["cScaleInv" + i$1] || invert_default(this["cScale" + i$1]);
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) if (this.darkMode) this["cScalePeer" + i$1] = this["cScalePeer" + i$1] || lighten_default(this["cScale" + i$1], 10);
		else this["cScalePeer" + i$1] = this["cScalePeer" + i$1] || darken_default(this["cScale" + i$1], 10);
		this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
		this["cScaleLabel0"] = this["cScaleLabel0"] || this.cScale1;
		this["cScaleLabel2"] = this["cScaleLabel2"] || this.cScale1;
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["cScaleLabel" + i$1] = this["cScaleLabel" + i$1] || this.scaleLabelColor;
		for (let i$1 = 0; i$1 < 5; i$1++) {
			this["surface" + i$1] = this["surface" + i$1] || adjust_default(this.mainBkg, { l: -(5 + i$1 * 5) });
			this["surfacePeer" + i$1] = this["surfacePeer" + i$1] || adjust_default(this.mainBkg, { l: -(8 + i$1 * 5) });
		}
		this.nodeBkg = this.mainBkg;
		this.nodeBorder = this.border1;
		this.clusterBkg = this.secondBkg;
		this.clusterBorder = this.border2;
		this.defaultLinkColor = this.lineColor;
		this.titleColor = this.text;
		this.sectionBkgColor = lighten_default(this.contrast, 30);
		this.sectionBkgColor2 = lighten_default(this.contrast, 30);
		this.taskBorderColor = darken_default(this.contrast, 10);
		this.taskBkgColor = this.contrast;
		this.taskTextColor = this.taskTextLightColor;
		this.taskTextDarkColor = this.text;
		this.taskTextOutsideColor = this.taskTextDarkColor;
		this.activeTaskBorderColor = this.taskBorderColor;
		this.activeTaskBkgColor = this.mainBkg;
		this.gridColor = lighten_default(this.border1, 30);
		this.doneTaskBkgColor = this.done;
		this.doneTaskBorderColor = this.lineColor;
		this.critBkgColor = this.critical;
		this.critBorderColor = darken_default(this.critBkgColor, 10);
		this.todayLineColor = this.critBkgColor;
		this.transitionColor = this.transitionColor || "#000";
		this.transitionLabelColor = this.transitionLabelColor || this.textColor;
		this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
		this.stateBkg = this.stateBkg || this.mainBkg;
		this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
		this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
		this.altBackground = this.altBackground || "#f4f4f4";
		this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
		this.stateBorder = this.stateBorder || "#000";
		this.innerEndBackground = this.primaryBorderColor;
		this.specialStateColor = "#222";
		this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
		this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
		this.classText = this.primaryTextColor;
		this.fillType0 = this.primaryColor;
		this.fillType1 = this.secondaryColor;
		this.fillType2 = adjust_default(this.primaryColor, { h: 64 });
		this.fillType3 = adjust_default(this.secondaryColor, { h: 64 });
		this.fillType4 = adjust_default(this.primaryColor, { h: -64 });
		this.fillType5 = adjust_default(this.secondaryColor, { h: -64 });
		this.fillType6 = adjust_default(this.primaryColor, { h: 128 });
		this.fillType7 = adjust_default(this.secondaryColor, { h: 128 });
		for (let i$1 = 0; i$1 < this.THEME_COLOR_LIMIT; i$1++) this["pie" + i$1] = this["cScale" + i$1];
		this.pie12 = this.pie0;
		this.pieTitleTextSize = this.pieTitleTextSize || "25px";
		this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
		this.pieSectionTextSize = this.pieSectionTextSize || "17px";
		this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
		this.pieLegendTextSize = this.pieLegendTextSize || "17px";
		this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
		this.pieStrokeColor = this.pieStrokeColor || "black";
		this.pieStrokeWidth = this.pieStrokeWidth || "2px";
		this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
		this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
		this.pieOpacity = this.pieOpacity || "0.7";
		this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
		this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		});
		this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		});
		this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		});
		this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
		this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		});
		this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		});
		this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		});
		this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
		this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
		this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
		this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
		this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
		this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
		this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
		this.xyChart = {
			backgroundColor: ((_a = this.xyChart) == null ? void 0 : _a.backgroundColor) || this.background,
			titleColor: ((_b = this.xyChart) == null ? void 0 : _b.titleColor) || this.primaryTextColor,
			xAxisTitleColor: ((_c = this.xyChart) == null ? void 0 : _c.xAxisTitleColor) || this.primaryTextColor,
			xAxisLabelColor: ((_d = this.xyChart) == null ? void 0 : _d.xAxisLabelColor) || this.primaryTextColor,
			xAxisTickColor: ((_e = this.xyChart) == null ? void 0 : _e.xAxisTickColor) || this.primaryTextColor,
			xAxisLineColor: ((_f = this.xyChart) == null ? void 0 : _f.xAxisLineColor) || this.primaryTextColor,
			yAxisTitleColor: ((_g = this.xyChart) == null ? void 0 : _g.yAxisTitleColor) || this.primaryTextColor,
			yAxisLabelColor: ((_h = this.xyChart) == null ? void 0 : _h.yAxisLabelColor) || this.primaryTextColor,
			yAxisTickColor: ((_i = this.xyChart) == null ? void 0 : _i.yAxisTickColor) || this.primaryTextColor,
			yAxisLineColor: ((_j = this.xyChart) == null ? void 0 : _j.yAxisLineColor) || this.primaryTextColor,
			plotColorPalette: ((_k = this.xyChart) == null ? void 0 : _k.plotColorPalette) || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
		};
		this.requirementBackground = this.requirementBackground || this.primaryColor;
		this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
		this.requirementBorderSize = this.requirementBorderSize || "1";
		this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
		this.relationColor = this.relationColor || this.lineColor;
		this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
		this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
		this.git0 = darken_default(this.pie1, 25) || this.primaryColor;
		this.git1 = this.pie2 || this.secondaryColor;
		this.git2 = this.pie3 || this.tertiaryColor;
		this.git3 = this.pie4 || adjust_default(this.primaryColor, { h: -30 });
		this.git4 = this.pie5 || adjust_default(this.primaryColor, { h: -60 });
		this.git5 = this.pie6 || adjust_default(this.primaryColor, { h: -90 });
		this.git6 = this.pie7 || adjust_default(this.primaryColor, { h: 60 });
		this.git7 = this.pie8 || adjust_default(this.primaryColor, { h: 120 });
		this.gitInv0 = this.gitInv0 || invert_default(this.git0);
		this.gitInv1 = this.gitInv1 || invert_default(this.git1);
		this.gitInv2 = this.gitInv2 || invert_default(this.git2);
		this.gitInv3 = this.gitInv3 || invert_default(this.git3);
		this.gitInv4 = this.gitInv4 || invert_default(this.git4);
		this.gitInv5 = this.gitInv5 || invert_default(this.git5);
		this.gitInv6 = this.gitInv6 || invert_default(this.git6);
		this.gitInv7 = this.gitInv7 || invert_default(this.git7);
		this.branchLabelColor = this.branchLabelColor || this.labelTextColor;
		this.gitBranchLabel0 = this.branchLabelColor;
		this.gitBranchLabel1 = "white";
		this.gitBranchLabel2 = this.branchLabelColor;
		this.gitBranchLabel3 = "white";
		this.gitBranchLabel4 = this.branchLabelColor;
		this.gitBranchLabel5 = this.branchLabelColor;
		this.gitBranchLabel6 = this.branchLabelColor;
		this.gitBranchLabel7 = this.branchLabelColor;
		this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
		this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
		this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
		this.tagLabelFontSize = this.tagLabelFontSize || "10px";
		this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
		this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
		this.commitLabelFontSize = this.commitLabelFontSize || "10px";
		this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
		this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(overrides) {
		if (typeof overrides !== "object") {
			this.updateColors();
			return;
		}
		const keys = Object.keys(overrides);
		keys.forEach((k) => {
			this[k] = overrides[k];
		});
		this.updateColors();
		keys.forEach((k) => {
			this[k] = overrides[k];
		});
	}
};
var getThemeVariables = (userOverrides) => {
	const theme2 = new Theme5();
	theme2.calculate(userOverrides);
	return theme2;
};
var theme = {
	base: { getThemeVariables: getThemeVariables$4 },
	dark: { getThemeVariables: getThemeVariables$3 },
	default: { getThemeVariables: getThemeVariables$2 },
	forest: { getThemeVariables: getThemeVariables$1 },
	neutral: { getThemeVariables }
};
var defaultConfigJson = {
	"flowchart": {
		"useMaxWidth": true,
		"titleTopMargin": 25,
		"subGraphTitleMargin": {
			"top": 0,
			"bottom": 0
		},
		"diagramPadding": 8,
		"htmlLabels": true,
		"nodeSpacing": 50,
		"rankSpacing": 50,
		"curve": "basis",
		"padding": 15,
		"defaultRenderer": "dagre-wrapper",
		"wrappingWidth": 200
	},
	"sequence": {
		"useMaxWidth": true,
		"hideUnusedParticipants": false,
		"activationWidth": 10,
		"diagramMarginX": 50,
		"diagramMarginY": 10,
		"actorMargin": 50,
		"width": 150,
		"height": 65,
		"boxMargin": 10,
		"boxTextMargin": 5,
		"noteMargin": 10,
		"messageMargin": 35,
		"messageAlign": "center",
		"mirrorActors": true,
		"forceMenus": false,
		"bottomMarginAdj": 1,
		"rightAngles": false,
		"showSequenceNumbers": false,
		"actorFontSize": 14,
		"actorFontFamily": "\"Open Sans\", sans-serif",
		"actorFontWeight": 400,
		"noteFontSize": 14,
		"noteFontFamily": "\"trebuchet ms\", verdana, arial, sans-serif",
		"noteFontWeight": 400,
		"noteAlign": "center",
		"messageFontSize": 16,
		"messageFontFamily": "\"trebuchet ms\", verdana, arial, sans-serif",
		"messageFontWeight": 400,
		"wrap": false,
		"wrapPadding": 10,
		"labelBoxWidth": 50,
		"labelBoxHeight": 20
	},
	"gantt": {
		"useMaxWidth": true,
		"titleTopMargin": 25,
		"barHeight": 20,
		"barGap": 4,
		"topPadding": 50,
		"rightPadding": 75,
		"leftPadding": 75,
		"gridLineStartPadding": 35,
		"fontSize": 11,
		"sectionFontSize": 11,
		"numberSectionStyles": 4,
		"axisFormat": "%Y-%m-%d",
		"topAxis": false,
		"displayMode": "",
		"weekday": "sunday"
	},
	"journey": {
		"useMaxWidth": true,
		"diagramMarginX": 50,
		"diagramMarginY": 10,
		"leftMargin": 150,
		"width": 150,
		"height": 50,
		"boxMargin": 10,
		"boxTextMargin": 5,
		"noteMargin": 10,
		"messageMargin": 35,
		"messageAlign": "center",
		"bottomMarginAdj": 1,
		"rightAngles": false,
		"taskFontSize": 14,
		"taskFontFamily": "\"Open Sans\", sans-serif",
		"taskMargin": 50,
		"activationWidth": 10,
		"textPlacement": "fo",
		"actorColours": [
			"#8FBC8F",
			"#7CFC00",
			"#00FFFF",
			"#20B2AA",
			"#B0E0E6",
			"#FFFFE0"
		],
		"sectionFills": [
			"#191970",
			"#8B008B",
			"#4B0082",
			"#2F4F4F",
			"#800000",
			"#8B4513",
			"#00008B"
		],
		"sectionColours": ["#fff"]
	},
	"class": {
		"useMaxWidth": true,
		"titleTopMargin": 25,
		"arrowMarkerAbsolute": false,
		"dividerMargin": 10,
		"padding": 5,
		"textHeight": 10,
		"defaultRenderer": "dagre-wrapper",
		"htmlLabels": false
	},
	"state": {
		"useMaxWidth": true,
		"titleTopMargin": 25,
		"dividerMargin": 10,
		"sizeUnit": 5,
		"padding": 8,
		"textHeight": 10,
		"titleShift": -15,
		"noteMargin": 10,
		"forkWidth": 70,
		"forkHeight": 7,
		"miniPadding": 2,
		"fontSizeFactor": 5.02,
		"fontSize": 24,
		"labelHeight": 16,
		"edgeLengthFactor": "20",
		"compositTitleSize": 35,
		"radius": 5,
		"defaultRenderer": "dagre-wrapper"
	},
	"er": {
		"useMaxWidth": true,
		"titleTopMargin": 25,
		"diagramPadding": 20,
		"layoutDirection": "TB",
		"minEntityWidth": 100,
		"minEntityHeight": 75,
		"entityPadding": 15,
		"stroke": "gray",
		"fill": "honeydew",
		"fontSize": 12
	},
	"pie": {
		"useMaxWidth": true,
		"textPosition": .75
	},
	"quadrantChart": {
		"useMaxWidth": true,
		"chartWidth": 500,
		"chartHeight": 500,
		"titleFontSize": 20,
		"titlePadding": 10,
		"quadrantPadding": 5,
		"xAxisLabelPadding": 5,
		"yAxisLabelPadding": 5,
		"xAxisLabelFontSize": 16,
		"yAxisLabelFontSize": 16,
		"quadrantLabelFontSize": 16,
		"quadrantTextTopPadding": 5,
		"pointTextPadding": 5,
		"pointLabelFontSize": 12,
		"pointRadius": 5,
		"xAxisPosition": "top",
		"yAxisPosition": "left",
		"quadrantInternalBorderStrokeWidth": 1,
		"quadrantExternalBorderStrokeWidth": 2
	},
	"xyChart": {
		"useMaxWidth": true,
		"width": 700,
		"height": 500,
		"titleFontSize": 20,
		"titlePadding": 10,
		"showTitle": true,
		"xAxis": {
			"$ref": "#/$defs/XYChartAxisConfig",
			"showLabel": true,
			"labelFontSize": 14,
			"labelPadding": 5,
			"showTitle": true,
			"titleFontSize": 16,
			"titlePadding": 5,
			"showTick": true,
			"tickLength": 5,
			"tickWidth": 2,
			"showAxisLine": true,
			"axisLineWidth": 2
		},
		"yAxis": {
			"$ref": "#/$defs/XYChartAxisConfig",
			"showLabel": true,
			"labelFontSize": 14,
			"labelPadding": 5,
			"showTitle": true,
			"titleFontSize": 16,
			"titlePadding": 5,
			"showTick": true,
			"tickLength": 5,
			"tickWidth": 2,
			"showAxisLine": true,
			"axisLineWidth": 2
		},
		"chartOrientation": "vertical",
		"plotReservedSpacePercent": 50
	},
	"requirement": {
		"useMaxWidth": true,
		"rect_fill": "#f9f9f9",
		"text_color": "#333",
		"rect_border_size": "0.5px",
		"rect_border_color": "#bbb",
		"rect_min_width": 200,
		"rect_min_height": 200,
		"fontSize": 14,
		"rect_padding": 10,
		"line_height": 20
	},
	"mindmap": {
		"useMaxWidth": true,
		"padding": 10,
		"maxNodeWidth": 200
	},
	"timeline": {
		"useMaxWidth": true,
		"diagramMarginX": 50,
		"diagramMarginY": 10,
		"leftMargin": 150,
		"width": 150,
		"height": 50,
		"boxMargin": 10,
		"boxTextMargin": 5,
		"noteMargin": 10,
		"messageMargin": 35,
		"messageAlign": "center",
		"bottomMarginAdj": 1,
		"rightAngles": false,
		"taskFontSize": 14,
		"taskFontFamily": "\"Open Sans\", sans-serif",
		"taskMargin": 50,
		"activationWidth": 10,
		"textPlacement": "fo",
		"actorColours": [
			"#8FBC8F",
			"#7CFC00",
			"#00FFFF",
			"#20B2AA",
			"#B0E0E6",
			"#FFFFE0"
		],
		"sectionFills": [
			"#191970",
			"#8B008B",
			"#4B0082",
			"#2F4F4F",
			"#800000",
			"#8B4513",
			"#00008B"
		],
		"sectionColours": ["#fff"],
		"disableMulticolor": false
	},
	"gitGraph": {
		"useMaxWidth": true,
		"titleTopMargin": 25,
		"diagramPadding": 8,
		"nodeLabel": {
			"width": 75,
			"height": 100,
			"x": -25,
			"y": 0
		},
		"mainBranchName": "main",
		"mainBranchOrder": 0,
		"showCommitLabel": true,
		"showBranches": true,
		"rotateCommitLabel": true,
		"parallelCommits": false,
		"arrowMarkerAbsolute": false
	},
	"c4": {
		"useMaxWidth": true,
		"diagramMarginX": 50,
		"diagramMarginY": 10,
		"c4ShapeMargin": 50,
		"c4ShapePadding": 20,
		"width": 216,
		"height": 60,
		"boxMargin": 10,
		"c4ShapeInRow": 4,
		"nextLinePaddingX": 0,
		"c4BoundaryInRow": 2,
		"personFontSize": 14,
		"personFontFamily": "\"Open Sans\", sans-serif",
		"personFontWeight": "normal",
		"external_personFontSize": 14,
		"external_personFontFamily": "\"Open Sans\", sans-serif",
		"external_personFontWeight": "normal",
		"systemFontSize": 14,
		"systemFontFamily": "\"Open Sans\", sans-serif",
		"systemFontWeight": "normal",
		"external_systemFontSize": 14,
		"external_systemFontFamily": "\"Open Sans\", sans-serif",
		"external_systemFontWeight": "normal",
		"system_dbFontSize": 14,
		"system_dbFontFamily": "\"Open Sans\", sans-serif",
		"system_dbFontWeight": "normal",
		"external_system_dbFontSize": 14,
		"external_system_dbFontFamily": "\"Open Sans\", sans-serif",
		"external_system_dbFontWeight": "normal",
		"system_queueFontSize": 14,
		"system_queueFontFamily": "\"Open Sans\", sans-serif",
		"system_queueFontWeight": "normal",
		"external_system_queueFontSize": 14,
		"external_system_queueFontFamily": "\"Open Sans\", sans-serif",
		"external_system_queueFontWeight": "normal",
		"boundaryFontSize": 14,
		"boundaryFontFamily": "\"Open Sans\", sans-serif",
		"boundaryFontWeight": "normal",
		"messageFontSize": 12,
		"messageFontFamily": "\"Open Sans\", sans-serif",
		"messageFontWeight": "normal",
		"containerFontSize": 14,
		"containerFontFamily": "\"Open Sans\", sans-serif",
		"containerFontWeight": "normal",
		"external_containerFontSize": 14,
		"external_containerFontFamily": "\"Open Sans\", sans-serif",
		"external_containerFontWeight": "normal",
		"container_dbFontSize": 14,
		"container_dbFontFamily": "\"Open Sans\", sans-serif",
		"container_dbFontWeight": "normal",
		"external_container_dbFontSize": 14,
		"external_container_dbFontFamily": "\"Open Sans\", sans-serif",
		"external_container_dbFontWeight": "normal",
		"container_queueFontSize": 14,
		"container_queueFontFamily": "\"Open Sans\", sans-serif",
		"container_queueFontWeight": "normal",
		"external_container_queueFontSize": 14,
		"external_container_queueFontFamily": "\"Open Sans\", sans-serif",
		"external_container_queueFontWeight": "normal",
		"componentFontSize": 14,
		"componentFontFamily": "\"Open Sans\", sans-serif",
		"componentFontWeight": "normal",
		"external_componentFontSize": 14,
		"external_componentFontFamily": "\"Open Sans\", sans-serif",
		"external_componentFontWeight": "normal",
		"component_dbFontSize": 14,
		"component_dbFontFamily": "\"Open Sans\", sans-serif",
		"component_dbFontWeight": "normal",
		"external_component_dbFontSize": 14,
		"external_component_dbFontFamily": "\"Open Sans\", sans-serif",
		"external_component_dbFontWeight": "normal",
		"component_queueFontSize": 14,
		"component_queueFontFamily": "\"Open Sans\", sans-serif",
		"component_queueFontWeight": "normal",
		"external_component_queueFontSize": 14,
		"external_component_queueFontFamily": "\"Open Sans\", sans-serif",
		"external_component_queueFontWeight": "normal",
		"wrap": true,
		"wrapPadding": 10,
		"person_bg_color": "#08427B",
		"person_border_color": "#073B6F",
		"external_person_bg_color": "#686868",
		"external_person_border_color": "#8A8A8A",
		"system_bg_color": "#1168BD",
		"system_border_color": "#3C7FC0",
		"system_db_bg_color": "#1168BD",
		"system_db_border_color": "#3C7FC0",
		"system_queue_bg_color": "#1168BD",
		"system_queue_border_color": "#3C7FC0",
		"external_system_bg_color": "#999999",
		"external_system_border_color": "#8A8A8A",
		"external_system_db_bg_color": "#999999",
		"external_system_db_border_color": "#8A8A8A",
		"external_system_queue_bg_color": "#999999",
		"external_system_queue_border_color": "#8A8A8A",
		"container_bg_color": "#438DD5",
		"container_border_color": "#3C7FC0",
		"container_db_bg_color": "#438DD5",
		"container_db_border_color": "#3C7FC0",
		"container_queue_bg_color": "#438DD5",
		"container_queue_border_color": "#3C7FC0",
		"external_container_bg_color": "#B3B3B3",
		"external_container_border_color": "#A6A6A6",
		"external_container_db_bg_color": "#B3B3B3",
		"external_container_db_border_color": "#A6A6A6",
		"external_container_queue_bg_color": "#B3B3B3",
		"external_container_queue_border_color": "#A6A6A6",
		"component_bg_color": "#85BBF0",
		"component_border_color": "#78A8D8",
		"component_db_bg_color": "#85BBF0",
		"component_db_border_color": "#78A8D8",
		"component_queue_bg_color": "#85BBF0",
		"component_queue_border_color": "#78A8D8",
		"external_component_bg_color": "#CCCCCC",
		"external_component_border_color": "#BFBFBF",
		"external_component_db_bg_color": "#CCCCCC",
		"external_component_db_border_color": "#BFBFBF",
		"external_component_queue_bg_color": "#CCCCCC",
		"external_component_queue_border_color": "#BFBFBF"
	},
	"sankey": {
		"useMaxWidth": true,
		"width": 600,
		"height": 400,
		"linkColor": "gradient",
		"nodeAlignment": "justify",
		"showValues": true,
		"prefix": "",
		"suffix": ""
	},
	"block": {
		"useMaxWidth": true,
		"padding": 8
	},
	"theme": "default",
	"maxTextSize": 5e4,
	"maxEdges": 500,
	"darkMode": false,
	"fontFamily": "\"trebuchet ms\", verdana, arial, sans-serif;",
	"logLevel": 5,
	"securityLevel": "strict",
	"startOnLoad": true,
	"arrowMarkerAbsolute": false,
	"secure": [
		"secure",
		"securityLevel",
		"startOnLoad",
		"maxTextSize",
		"maxEdges"
	],
	"legacyMathML": false,
	"deterministicIds": false,
	"fontSize": 16
};
var config = {
	...defaultConfigJson,
	deterministicIDSeed: void 0,
	themeCSS: void 0,
	themeVariables: theme["default"].getThemeVariables(),
	sequence: {
		...defaultConfigJson.sequence,
		messageFont: function() {
			return {
				fontFamily: this.messageFontFamily,
				fontSize: this.messageFontSize,
				fontWeight: this.messageFontWeight
			};
		},
		noteFont: function() {
			return {
				fontFamily: this.noteFontFamily,
				fontSize: this.noteFontSize,
				fontWeight: this.noteFontWeight
			};
		},
		actorFont: function() {
			return {
				fontFamily: this.actorFontFamily,
				fontSize: this.actorFontSize,
				fontWeight: this.actorFontWeight
			};
		}
	},
	gantt: {
		...defaultConfigJson.gantt,
		tickInterval: void 0,
		useWidth: void 0
	},
	c4: {
		...defaultConfigJson.c4,
		useWidth: void 0,
		personFont: function() {
			return {
				fontFamily: this.personFontFamily,
				fontSize: this.personFontSize,
				fontWeight: this.personFontWeight
			};
		},
		external_personFont: function() {
			return {
				fontFamily: this.external_personFontFamily,
				fontSize: this.external_personFontSize,
				fontWeight: this.external_personFontWeight
			};
		},
		systemFont: function() {
			return {
				fontFamily: this.systemFontFamily,
				fontSize: this.systemFontSize,
				fontWeight: this.systemFontWeight
			};
		},
		external_systemFont: function() {
			return {
				fontFamily: this.external_systemFontFamily,
				fontSize: this.external_systemFontSize,
				fontWeight: this.external_systemFontWeight
			};
		},
		system_dbFont: function() {
			return {
				fontFamily: this.system_dbFontFamily,
				fontSize: this.system_dbFontSize,
				fontWeight: this.system_dbFontWeight
			};
		},
		external_system_dbFont: function() {
			return {
				fontFamily: this.external_system_dbFontFamily,
				fontSize: this.external_system_dbFontSize,
				fontWeight: this.external_system_dbFontWeight
			};
		},
		system_queueFont: function() {
			return {
				fontFamily: this.system_queueFontFamily,
				fontSize: this.system_queueFontSize,
				fontWeight: this.system_queueFontWeight
			};
		},
		external_system_queueFont: function() {
			return {
				fontFamily: this.external_system_queueFontFamily,
				fontSize: this.external_system_queueFontSize,
				fontWeight: this.external_system_queueFontWeight
			};
		},
		containerFont: function() {
			return {
				fontFamily: this.containerFontFamily,
				fontSize: this.containerFontSize,
				fontWeight: this.containerFontWeight
			};
		},
		external_containerFont: function() {
			return {
				fontFamily: this.external_containerFontFamily,
				fontSize: this.external_containerFontSize,
				fontWeight: this.external_containerFontWeight
			};
		},
		container_dbFont: function() {
			return {
				fontFamily: this.container_dbFontFamily,
				fontSize: this.container_dbFontSize,
				fontWeight: this.container_dbFontWeight
			};
		},
		external_container_dbFont: function() {
			return {
				fontFamily: this.external_container_dbFontFamily,
				fontSize: this.external_container_dbFontSize,
				fontWeight: this.external_container_dbFontWeight
			};
		},
		container_queueFont: function() {
			return {
				fontFamily: this.container_queueFontFamily,
				fontSize: this.container_queueFontSize,
				fontWeight: this.container_queueFontWeight
			};
		},
		external_container_queueFont: function() {
			return {
				fontFamily: this.external_container_queueFontFamily,
				fontSize: this.external_container_queueFontSize,
				fontWeight: this.external_container_queueFontWeight
			};
		},
		componentFont: function() {
			return {
				fontFamily: this.componentFontFamily,
				fontSize: this.componentFontSize,
				fontWeight: this.componentFontWeight
			};
		},
		external_componentFont: function() {
			return {
				fontFamily: this.external_componentFontFamily,
				fontSize: this.external_componentFontSize,
				fontWeight: this.external_componentFontWeight
			};
		},
		component_dbFont: function() {
			return {
				fontFamily: this.component_dbFontFamily,
				fontSize: this.component_dbFontSize,
				fontWeight: this.component_dbFontWeight
			};
		},
		external_component_dbFont: function() {
			return {
				fontFamily: this.external_component_dbFontFamily,
				fontSize: this.external_component_dbFontSize,
				fontWeight: this.external_component_dbFontWeight
			};
		},
		component_queueFont: function() {
			return {
				fontFamily: this.component_queueFontFamily,
				fontSize: this.component_queueFontSize,
				fontWeight: this.component_queueFontWeight
			};
		},
		external_component_queueFont: function() {
			return {
				fontFamily: this.external_component_queueFontFamily,
				fontSize: this.external_component_queueFontSize,
				fontWeight: this.external_component_queueFontWeight
			};
		},
		boundaryFont: function() {
			return {
				fontFamily: this.boundaryFontFamily,
				fontSize: this.boundaryFontSize,
				fontWeight: this.boundaryFontWeight
			};
		},
		messageFont: function() {
			return {
				fontFamily: this.messageFontFamily,
				fontSize: this.messageFontSize,
				fontWeight: this.messageFontWeight
			};
		}
	},
	pie: {
		...defaultConfigJson.pie,
		useWidth: 984
	},
	xyChart: {
		...defaultConfigJson.xyChart,
		useWidth: void 0
	},
	requirement: {
		...defaultConfigJson.requirement,
		useWidth: void 0
	},
	gitGraph: {
		...defaultConfigJson.gitGraph,
		useMaxWidth: false
	},
	sankey: {
		...defaultConfigJson.sankey,
		useMaxWidth: false
	}
};
var keyify = (obj, prefix = "") => Object.keys(obj).reduce((res, el) => {
	if (Array.isArray(obj[el])) return res;
	else if (typeof obj[el] === "object" && obj[el] !== null) return [
		...res,
		prefix + el,
		...keyify(obj[el], "")
	];
	return [...res, prefix + el];
}, []);
var configKeys = new Set(keyify(config, ""));
var defaultConfig$2 = config;
var sanitizeDirective = (args) => {
	log$1.debug("sanitizeDirective called with", args);
	if (typeof args !== "object" || args == null) return;
	if (Array.isArray(args)) {
		args.forEach((arg) => sanitizeDirective(arg));
		return;
	}
	for (const key of Object.keys(args)) {
		log$1.debug("Checking key", key);
		if (key.startsWith("__") || key.includes("proto") || key.includes("constr") || !configKeys.has(key) || args[key] == null) {
			log$1.debug("sanitize deleting key: ", key);
			delete args[key];
			continue;
		}
		if (typeof args[key] === "object") {
			log$1.debug("sanitizing object", key);
			sanitizeDirective(args[key]);
			continue;
		}
		for (const cssKey of [
			"themeCSS",
			"fontFamily",
			"altFontFamily"
		]) if (key.includes(cssKey)) {
			log$1.debug("sanitizing css option", key);
			args[key] = sanitizeCss(args[key]);
		}
	}
	if (args.themeVariables) for (const k of Object.keys(args.themeVariables)) {
		const val = args.themeVariables[k];
		if ((val == null ? void 0 : val.match) && !val.match(/^[\d "#%(),.;A-Za-z]+$/)) args.themeVariables[k] = "";
	}
	log$1.debug("After sanitization", args);
};
var sanitizeCss = (str2) => {
	let startCnt = 0;
	let endCnt = 0;
	for (const element of str2) {
		if (startCnt < endCnt) return "{ /* ERROR: Unbalanced CSS */ }";
		if (element === "{") startCnt++;
		else if (element === "}") endCnt++;
	}
	if (startCnt !== endCnt) return "{ /* ERROR: Unbalanced CSS */ }";
	return str2;
};
var frontMatterRegex = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
var directiveRegex = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var anyCommentRegex = /\s*%%.*\n/gm;
var UnknownDiagramError = class extends Error {
	constructor(message) {
		super(message);
		this.name = "UnknownDiagramError";
	}
};
var detectors = {};
var detectType = function(text, config2) {
	text = text.replace(frontMatterRegex, "").replace(directiveRegex, "").replace(anyCommentRegex, "\n");
	for (const [key, { detector: detector2 }] of Object.entries(detectors)) if (detector2(text, config2)) return key;
	throw new UnknownDiagramError(`No diagram type detected matching given configuration for text: ${text}`);
};
var registerLazyLoadedDiagrams = (...diagrams2) => {
	for (const { id: id2, detector: detector2, loader: loader2 } of diagrams2) addDetector(id2, detector2, loader2);
};
var addDetector = (key, detector2, loader2) => {
	if (detectors[key]) log$1.error(`Detector with key ${key} already exists`);
	else detectors[key] = {
		detector: detector2,
		loader: loader2
	};
	log$1.debug(`Detector with key ${key} added${loader2 ? " with loader" : ""}`);
};
var getDiagramLoader = (key) => {
	return detectors[key].loader;
};
var assignWithDepth = (dst, src, { depth = 2, clobber = false } = {}) => {
	const config2 = {
		depth,
		clobber
	};
	if (Array.isArray(src) && !Array.isArray(dst)) {
		src.forEach((s) => assignWithDepth(dst, s, config2));
		return dst;
	} else if (Array.isArray(src) && Array.isArray(dst)) {
		src.forEach((s) => {
			if (!dst.includes(s)) dst.push(s);
		});
		return dst;
	}
	if (dst === void 0 || depth <= 0) if (dst !== void 0 && dst !== null && typeof dst === "object" && typeof src === "object") return Object.assign(dst, src);
	else return src;
	if (src !== void 0 && typeof dst === "object" && typeof src === "object") Object.keys(src).forEach((key) => {
		if (typeof src[key] === "object" && (dst[key] === void 0 || typeof dst[key] === "object")) {
			if (dst[key] === void 0) dst[key] = Array.isArray(src[key]) ? [] : {};
			dst[key] = assignWithDepth(dst[key], src[key], {
				depth: depth - 1,
				clobber
			});
		} else if (clobber || typeof dst[key] !== "object" && typeof src[key] !== "object") dst[key] = src[key];
	});
	return dst;
};
var assignWithDepth$1 = assignWithDepth;
var ZERO_WIDTH_SPACE = "​";
var d3CurveTypes = {
	curveBasis: basis_default,
	curveBasisClosed: basisClosed_default,
	curveBasisOpen: basisOpen_default,
	curveBumpX: bumpX,
	curveBumpY: bumpY,
	curveBundle: bundle_default,
	curveCardinalClosed: cardinalClosed_default,
	curveCardinalOpen: cardinalOpen_default,
	curveCardinal: cardinal_default,
	curveCatmullRomClosed: catmullRomClosed_default,
	curveCatmullRomOpen: catmullRomOpen_default,
	curveCatmullRom: catmullRom_default,
	curveLinear: linear_default,
	curveLinearClosed: linearClosed_default,
	curveMonotoneX: monotoneX,
	curveMonotoneY: monotoneY,
	curveNatural: natural_default,
	curveStep: step_default,
	curveStepAfter: stepAfter,
	curveStepBefore: stepBefore
};
var directiveWithoutOpen = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var detectInit = function(text, config2) {
	const inits = detectDirective(text, /(?:init\b)|(?:initialize\b)/);
	let results = {};
	if (Array.isArray(inits)) {
		const args = inits.map((init2) => init2.args);
		sanitizeDirective(args);
		results = assignWithDepth$1(results, [...args]);
	} else results = inits.args;
	if (!results) return;
	let type2 = detectType(text, config2);
	const prop = "config";
	if (results[prop] !== void 0) {
		if (type2 === "flowchart-v2") type2 = "flowchart";
		results[type2] = results[prop];
		delete results[prop];
	}
	return results;
};
var detectDirective = function(text, type2 = null) {
	try {
		const commentWithoutDirectives = new RegExp(`[%]{2}(?![{]${directiveWithoutOpen.source})(?=[}][%]{2}).*
`, "ig");
		text = text.trim().replace(commentWithoutDirectives, "").replace(/'/gm, "\"");
		log$1.debug(`Detecting diagram directive${type2 !== null ? " type:" + type2 : ""} based on the text:${text}`);
		let match;
		const result = [];
		while ((match = directiveRegex.exec(text)) !== null) {
			if (match.index === directiveRegex.lastIndex) directiveRegex.lastIndex++;
			if (match && !type2 || type2 && match[1] && match[1].match(type2) || type2 && match[2] && match[2].match(type2)) {
				const type22 = match[1] ? match[1] : match[2];
				const args = match[3] ? match[3].trim() : match[4] ? JSON.parse(match[4].trim()) : null;
				result.push({
					type: type22,
					args
				});
			}
		}
		if (result.length === 0) return {
			type: text,
			args: null
		};
		return result.length === 1 ? result[0] : result;
	} catch (error) {
		log$1.error(`ERROR: ${error.message} - Unable to parse directive type: '${type2}' based on the text: '${text}'`);
		return {
			type: void 0,
			args: null
		};
	}
};
var removeDirectives = function(text) {
	return text.replace(directiveRegex, "");
};
var isSubstringInArray = function(str2, arr) {
	for (const [i$1, element] of arr.entries()) if (element.match(str2)) return i$1;
	return -1;
};
function interpolateToCurve(interpolate, defaultCurve) {
	if (!interpolate) return defaultCurve;
	return d3CurveTypes[`curve${interpolate.charAt(0).toUpperCase() + interpolate.slice(1)}`] ?? defaultCurve;
}
function formatUrl(linkStr, config2) {
	const url = linkStr.trim();
	if (!url) return;
	if (config2.securityLevel !== "loose") return (0, import_dist.sanitizeUrl)(url);
	return url;
}
var runFunc = (functionName, ...params) => {
	const arrPaths = functionName.split(".");
	const len = arrPaths.length - 1;
	const fnName = arrPaths[len];
	let obj = window;
	for (let i$1 = 0; i$1 < len; i$1++) {
		obj = obj[arrPaths[i$1]];
		if (!obj) {
			log$1.error(`Function name: ${functionName} not found in window`);
			return;
		}
	}
	obj[fnName](...params);
};
function distance(p1, p2) {
	if (!p1 || !p2) return 0;
	return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function traverseEdge(points) {
	let prevPoint;
	let totalDistance = 0;
	points.forEach((point$4) => {
		totalDistance += distance(point$4, prevPoint);
		prevPoint = point$4;
	});
	return calculatePoint(points, totalDistance / 2);
}
function calcLabelPosition(points) {
	if (points.length === 1) return points[0];
	return traverseEdge(points);
}
var roundNumber = (num, precision = 2) => {
	const factor = Math.pow(10, precision);
	return Math.round(num * factor) / factor;
};
var calculatePoint = (points, distanceToTraverse) => {
	let prevPoint = void 0;
	let remainingDistance = distanceToTraverse;
	for (const point$4 of points) {
		if (prevPoint) {
			const vectorDistance = distance(point$4, prevPoint);
			if (vectorDistance < remainingDistance) remainingDistance -= vectorDistance;
			else {
				const distanceRatio = remainingDistance / vectorDistance;
				if (distanceRatio <= 0) return prevPoint;
				if (distanceRatio >= 1) return {
					x: point$4.x,
					y: point$4.y
				};
				if (distanceRatio > 0 && distanceRatio < 1) return {
					x: roundNumber((1 - distanceRatio) * prevPoint.x + distanceRatio * point$4.x, 5),
					y: roundNumber((1 - distanceRatio) * prevPoint.y + distanceRatio * point$4.y, 5)
				};
			}
		}
		prevPoint = point$4;
	}
	throw new Error("Could not find a suitable point for the given distance");
};
var calcCardinalityPosition = (isRelationTypePresent, points, initialPosition) => {
	log$1.info(`our points ${JSON.stringify(points)}`);
	if (points[0] !== initialPosition) points = points.reverse();
	const center = calculatePoint(points, 25);
	const d = isRelationTypePresent ? 10 : 5;
	const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
	const cardinalityPosition = {
		x: 0,
		y: 0
	};
	cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
	cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
	return cardinalityPosition;
};
function calcTerminalLabelPosition(terminalMarkerSize, position, _points) {
	const points = structuredClone(_points);
	log$1.info("our points", points);
	if (position !== "start_left" && position !== "start_right") points.reverse();
	const center = calculatePoint(points, 25 + terminalMarkerSize);
	const d = 10 + terminalMarkerSize * .5;
	const angle = Math.atan2(points[0].y - center.y, points[0].x - center.x);
	const cardinalityPosition = {
		x: 0,
		y: 0
	};
	if (position === "start_left") {
		cardinalityPosition.x = Math.sin(angle + Math.PI) * d + (points[0].x + center.x) / 2;
		cardinalityPosition.y = -Math.cos(angle + Math.PI) * d + (points[0].y + center.y) / 2;
	} else if (position === "end_right") {
		cardinalityPosition.x = Math.sin(angle - Math.PI) * d + (points[0].x + center.x) / 2 - 5;
		cardinalityPosition.y = -Math.cos(angle - Math.PI) * d + (points[0].y + center.y) / 2 - 5;
	} else if (position === "end_left") {
		cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2 - 5;
		cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2 - 5;
	} else {
		cardinalityPosition.x = Math.sin(angle) * d + (points[0].x + center.x) / 2;
		cardinalityPosition.y = -Math.cos(angle) * d + (points[0].y + center.y) / 2;
	}
	return cardinalityPosition;
}
function getStylesFromArray(arr) {
	let style = "";
	let labelStyle = "";
	for (const element of arr) if (element !== void 0) if (element.startsWith("color:") || element.startsWith("text-align:")) labelStyle = labelStyle + element + ";";
	else style = style + element + ";";
	return {
		style,
		labelStyle
	};
}
var cnt = 0;
var generateId = () => {
	cnt++;
	return "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt;
};
function makeRandomHex(length) {
	let result = "";
	const characters = "0123456789abcdef";
	const charactersLength = 16;
	for (let i$1 = 0; i$1 < length; i$1++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
	return result;
}
var random = (options) => {
	return makeRandomHex(options.length);
};
var getTextObj = function() {
	return {
		x: 0,
		y: 0,
		fill: void 0,
		anchor: "start",
		style: "#666",
		width: 100,
		height: 100,
		textMargin: 0,
		rx: 0,
		ry: 0,
		valign: void 0,
		text: ""
	};
};
var drawSimpleText = function(elem, textData) {
	const nText = textData.text.replace(common$1.lineBreakRegex, " ");
	const [, _fontSizePx] = parseFontSize(textData.fontSize);
	const textElem = elem.append("text");
	textElem.attr("x", textData.x);
	textElem.attr("y", textData.y);
	textElem.style("text-anchor", textData.anchor);
	textElem.style("font-family", textData.fontFamily);
	textElem.style("font-size", _fontSizePx);
	textElem.style("font-weight", textData.fontWeight);
	textElem.attr("fill", textData.fill);
	if (textData.class !== void 0) textElem.attr("class", textData.class);
	const span = textElem.append("tspan");
	span.attr("x", textData.x + textData.textMargin * 2);
	span.attr("fill", textData.fill);
	span.text(nText);
	return textElem;
};
var wrapLabel = memoize_default((label, maxWidth, config2) => {
	if (!label) return label;
	config2 = Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		joinWith: "<br/>"
	}, config2);
	if (common$1.lineBreakRegex.test(label)) return label;
	const words = label.split(" ");
	const completedLines = [];
	let nextLine = "";
	words.forEach((word, index) => {
		const wordLength = calculateTextWidth(`${word} `, config2);
		const nextLineLength = calculateTextWidth(nextLine, config2);
		if (wordLength > maxWidth) {
			const { hyphenatedStrings, remainingWord } = breakString(word, maxWidth, "-", config2);
			completedLines.push(nextLine, ...hyphenatedStrings);
			nextLine = remainingWord;
		} else if (nextLineLength + wordLength >= maxWidth) {
			completedLines.push(nextLine);
			nextLine = word;
		} else nextLine = [nextLine, word].filter(Boolean).join(" ");
		if (index + 1 === words.length) completedLines.push(nextLine);
	});
	return completedLines.filter((line) => line !== "").join(config2.joinWith);
}, (label, maxWidth, config2) => `${label}${maxWidth}${config2.fontSize}${config2.fontWeight}${config2.fontFamily}${config2.joinWith}`);
var breakString = memoize_default((word, maxWidth, hyphenCharacter = "-", config2) => {
	config2 = Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		margin: 0
	}, config2);
	const characters = [...word];
	const lines = [];
	let currentLine = "";
	characters.forEach((character, index) => {
		const nextLine = `${currentLine}${character}`;
		if (calculateTextWidth(nextLine, config2) >= maxWidth) {
			const currentCharacter = index + 1;
			const isLastLine = characters.length === currentCharacter;
			const hyphenatedNextLine = `${nextLine}${hyphenCharacter}`;
			lines.push(isLastLine ? nextLine : hyphenatedNextLine);
			currentLine = "";
		} else currentLine = nextLine;
	});
	return {
		hyphenatedStrings: lines,
		remainingWord: currentLine
	};
}, (word, maxWidth, hyphenCharacter = "-", config2) => `${word}${maxWidth}${hyphenCharacter}${config2.fontSize}${config2.fontWeight}${config2.fontFamily}`);
function calculateTextHeight(text, config2) {
	return calculateTextDimensions(text, config2).height;
}
function calculateTextWidth(text, config2) {
	return calculateTextDimensions(text, config2).width;
}
var calculateTextDimensions = memoize_default((text, config2) => {
	const { fontSize = 12, fontFamily = "Arial", fontWeight = 400 } = config2;
	if (!text) return {
		width: 0,
		height: 0
	};
	const [, _fontSizePx] = parseFontSize(fontSize);
	const fontFamilies = ["sans-serif", fontFamily];
	const lines = text.split(common$1.lineBreakRegex);
	const dims = [];
	const body = select_default("body");
	if (!body.remove) return {
		width: 0,
		height: 0,
		lineHeight: 0
	};
	const g = body.append("svg");
	for (const fontFamily2 of fontFamilies) {
		let cHeight = 0;
		const dim = {
			width: 0,
			height: 0,
			lineHeight: 0
		};
		for (const line of lines) {
			const textObj = getTextObj();
			textObj.text = line || "​";
			const textElem = drawSimpleText(g, textObj).style("font-size", _fontSizePx).style("font-weight", fontWeight).style("font-family", fontFamily2);
			const bBox = (textElem._groups || textElem)[0][0].getBBox();
			if (bBox.width === 0 && bBox.height === 0) throw new Error("svg element not in render tree");
			dim.width = Math.round(Math.max(dim.width, bBox.width));
			cHeight = Math.round(bBox.height);
			dim.height += cHeight;
			dim.lineHeight = Math.round(Math.max(dim.lineHeight, cHeight));
		}
		dims.push(dim);
	}
	g.remove();
	return dims[isNaN(dims[1].height) || isNaN(dims[1].width) || isNaN(dims[1].lineHeight) || dims[0].height > dims[1].height && dims[0].width > dims[1].width && dims[0].lineHeight > dims[1].lineHeight ? 0 : 1];
}, (text, config2) => `${text}${config2.fontSize}${config2.fontWeight}${config2.fontFamily}`);
var InitIDGenerator = class {
	constructor(deterministic = false, seed) {
		this.count = 0;
		this.count = seed ? seed.length : 0;
		this.next = deterministic ? () => this.count++ : () => Date.now();
	}
};
var decoder;
var entityDecode = function(html) {
	decoder = decoder || document.createElement("div");
	html = escape(html).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";");
	decoder.innerHTML = html;
	return unescape(decoder.textContent);
};
function isDetailedError(error) {
	return "str" in error;
}
var insertTitle = (parent, cssClass, titleTopMargin, title) => {
	var _a;
	if (!title) return;
	const bounds = (_a = parent.node()) == null ? void 0 : _a.getBBox();
	if (!bounds) return;
	parent.append("text").text(title).attr("x", bounds.x + bounds.width / 2).attr("y", -titleTopMargin).attr("class", cssClass);
};
var parseFontSize = (fontSize) => {
	if (typeof fontSize === "number") return [fontSize, fontSize + "px"];
	const fontSizeNumber = parseInt(fontSize ?? "", 10);
	if (Number.isNaN(fontSizeNumber)) return [void 0, void 0];
	else if (fontSize === String(fontSizeNumber)) return [fontSizeNumber, fontSize + "px"];
	else return [fontSizeNumber, fontSize];
};
function cleanAndMerge(defaultData, data) {
	return merge_default({}, defaultData, data);
}
var utils = {
	assignWithDepth: assignWithDepth$1,
	wrapLabel,
	calculateTextHeight,
	calculateTextWidth,
	calculateTextDimensions,
	cleanAndMerge,
	detectInit,
	detectDirective,
	isSubstringInArray,
	interpolateToCurve,
	calcLabelPosition,
	calcCardinalityPosition,
	calcTerminalLabelPosition,
	formatUrl,
	getStylesFromArray,
	generateId,
	random,
	runFunc,
	entityDecode,
	insertTitle,
	parseFontSize,
	InitIDGenerator
};
var encodeEntities = function(text) {
	let txt = text;
	txt = txt.replace(/style.*:\S*#.*;/g, function(s) {
		return s.substring(0, s.length - 1);
	});
	txt = txt.replace(/classDef.*:\S*#.*;/g, function(s) {
		return s.substring(0, s.length - 1);
	});
	txt = txt.replace(/#\w+;/g, function(s) {
		const innerTxt = s.substring(1, s.length - 1);
		if (/^\+?\d+$/.test(innerTxt)) return "ﬂ°°" + innerTxt + "¶ß";
		else return "ﬂ°" + innerTxt + "¶ß";
	});
	return txt;
};
var decodeEntities = function(text) {
	return text.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
};
var version = "10.9.3";
var defaultConfig$1 = Object.freeze(defaultConfig$2);
var siteConfig = assignWithDepth$1({}, defaultConfig$1);
var configFromInitialize;
var directives = [];
var currentConfig = assignWithDepth$1({}, defaultConfig$1);
var updateCurrentConfig = (siteCfg, _directives) => {
	let cfg = assignWithDepth$1({}, siteCfg);
	let sumOfDirectives = {};
	for (const d of _directives) {
		sanitize(d);
		sumOfDirectives = assignWithDepth$1(sumOfDirectives, d);
	}
	cfg = assignWithDepth$1(cfg, sumOfDirectives);
	if (sumOfDirectives.theme && sumOfDirectives.theme in theme) {
		const themeVariables = assignWithDepth$1(assignWithDepth$1({}, configFromInitialize).themeVariables || {}, sumOfDirectives.themeVariables);
		if (cfg.theme && cfg.theme in theme) cfg.themeVariables = theme[cfg.theme].getThemeVariables(themeVariables);
	}
	currentConfig = cfg;
	checkConfig(currentConfig);
	return currentConfig;
};
var setSiteConfig = (conf) => {
	siteConfig = assignWithDepth$1({}, defaultConfig$1);
	siteConfig = assignWithDepth$1(siteConfig, conf);
	if (conf.theme && theme[conf.theme]) siteConfig.themeVariables = theme[conf.theme].getThemeVariables(conf.themeVariables);
	updateCurrentConfig(siteConfig, directives);
	return siteConfig;
};
var saveConfigFromInitialize = (conf) => {
	configFromInitialize = assignWithDepth$1({}, conf);
};
var updateSiteConfig = (conf) => {
	siteConfig = assignWithDepth$1(siteConfig, conf);
	updateCurrentConfig(siteConfig, directives);
	return siteConfig;
};
var getSiteConfig = () => {
	return assignWithDepth$1({}, siteConfig);
};
var setConfig$1 = (conf) => {
	checkConfig(conf);
	assignWithDepth$1(currentConfig, conf);
	return getConfig$1();
};
var getConfig$1 = () => {
	return assignWithDepth$1({}, currentConfig);
};
var sanitize = (options) => {
	if (!options) return;
	["secure", ...siteConfig.secure ?? []].forEach((key) => {
		if (Object.hasOwn(options, key)) {
			log$1.debug(`Denied attempt to modify a secure key ${key}`, options[key]);
			delete options[key];
		}
	});
	Object.keys(options).forEach((key) => {
		if (key.startsWith("__")) delete options[key];
	});
	Object.keys(options).forEach((key) => {
		if (typeof options[key] === "string" && (options[key].includes("<") || options[key].includes(">") || options[key].includes("url(data:"))) delete options[key];
		if (typeof options[key] === "object") sanitize(options[key]);
	});
};
var addDirective = (directive) => {
	sanitizeDirective(directive);
	if (directive.fontFamily && (!directive.themeVariables || !directive.themeVariables.fontFamily)) directive.themeVariables = { fontFamily: directive.fontFamily };
	directives.push(directive);
	updateCurrentConfig(siteConfig, directives);
};
var reset = (config2 = siteConfig) => {
	directives = [];
	updateCurrentConfig(config2, directives);
};
var ConfigWarning = { LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead." };
var issuedWarnings = {};
var issueWarning = (warning) => {
	if (issuedWarnings[warning]) return;
	log$1.warn(ConfigWarning[warning]);
	issuedWarnings[warning] = true;
};
var checkConfig = (config2) => {
	if (!config2) return;
	if (config2.lazyLoadedDiagrams || config2.loadExternalDiagramsAtStartup) issueWarning("LAZY_LOAD_DEPRECATED");
};
var id$l = "c4";
var detector$l = (txt) => {
	return /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(txt);
};
var loader$m = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./c4Diagram-3d4e48cf-PJdUkfzF.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([13,1,2,3,4,5,6,7,8,9,10,11,12,14]));
	return {
		id: id$l,
		diagram: diagram2
	};
};
var c4 = {
	id: id$l,
	detector: detector$l,
	loader: loader$m
};
var id$k = "flowchart";
var detector$k = (txt, config2) => {
	var _a, _b;
	if (((_a = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper" || ((_b = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _b.defaultRenderer) === "elk") return false;
	return /^\s*graph/.test(txt);
};
var loader$l = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./flowDiagram-66a62f08-BJlEbvS6.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,12,16,17,18,19,20,21,22,23,24,25,26,27]));
	return {
		id: id$k,
		diagram: diagram2
	};
};
var flowchart = {
	id: id$k,
	detector: detector$k,
	loader: loader$l
};
var id$j = "flowchart-v2";
var detector$j = (txt, config2) => {
	var _a, _b, _c;
	if (((_a = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _a.defaultRenderer) === "dagre-d3" || ((_b = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _b.defaultRenderer) === "elk") return false;
	if (/^\s*graph/.test(txt) && ((_c = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _c.defaultRenderer) === "dagre-wrapper") return true;
	return /^\s*flowchart/.test(txt);
};
var loader$k = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./flowDiagram-v2-96b9c2cf-ColxveIU.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,12,16,17,18,19,20,21,22,23,24,25,26,27]));
	return {
		id: id$j,
		diagram: diagram2
	};
};
var flowchartV2 = {
	id: id$j,
	detector: detector$j,
	loader: loader$k
};
var id$i = "er";
var detector$i = (txt) => {
	return /^\s*erDiagram/.test(txt);
};
var loader$j = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./erDiagram-9861fffd-SnNfAclG.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10,11,12,16,25,24,20,18]));
	return {
		id: id$i,
		diagram: diagram2
	};
};
var er = {
	id: id$i,
	detector: detector$i,
	loader: loader$j
};
var id$h = "gitGraph";
var detector$h = (txt) => {
	return /^\s*gitGraph/.test(txt);
};
var loader$i = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./gitGraphDiagram-72cf32ee-D_YmiEWL.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11,12]));
	return {
		id: id$h,
		diagram: diagram2
	};
};
var git = {
	id: id$h,
	detector: detector$h,
	loader: loader$i
};
var id$g = "gantt";
var detector$g = (txt) => {
	return /^\s*gantt/.test(txt);
};
var loader$h = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./ganttDiagram-c361ad54-Bs8DmLo3.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,32,33]));
	return {
		id: id$g,
		diagram: diagram2
	};
};
var gantt = {
	id: id$g,
	detector: detector$g,
	loader: loader$h
};
var id$f = "info";
var detector$f = (txt) => {
	return /^\s*info/.test(txt);
};
var loader$g = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./infoDiagram-f8f76790-Bp2_gusB.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11,12]));
	return {
		id: id$f,
		diagram: diagram2
	};
};
var info = {
	id: id$f,
	detector: detector$f,
	loader: loader$g
};
var id$e = "pie";
var detector$e = (txt) => {
	return /^\s*pie/.test(txt);
};
var loader$f = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./pieDiagram-8a3498a8-V50rLdmT.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12,16,33,36,37,25]));
	return {
		id: id$e,
		diagram: diagram2
	};
};
var pie = {
	id: id$e,
	detector: detector$e,
	loader: loader$f
};
var id$d = "quadrantChart";
var detector$d = (txt) => {
	return /^\s*quadrantChart/.test(txt);
};
var loader$e = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./quadrantDiagram-120e2f19-DCrEcZV5.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,10,11,12,32,33]));
	return {
		id: id$d,
		diagram: diagram2
	};
};
var quadrantChart = {
	id: id$d,
	detector: detector$d,
	loader: loader$e
};
var id$c = "xychart";
var detector$c = (txt) => {
	return /^\s*xychart-beta/.test(txt);
};
var loader$d = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./xychartDiagram-e933f94c-C2OjD2fa.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,32,33,16,36,25,24,22]));
	return {
		id: id$c,
		diagram: diagram2
	};
};
var xychart = {
	id: id$c,
	detector: detector$c,
	loader: loader$d
};
var id$b = "requirement";
var detector$b = (txt) => {
	return /^\s*requirement(Diagram)?/.test(txt);
};
var loader$c = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./requirementDiagram-deff3bca-BScV7fxJ.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([40,1,2,3,4,5,6,7,8,9,10,11,12,16,25,24,20,18]));
	return {
		id: id$b,
		diagram: diagram2
	};
};
var requirement = {
	id: id$b,
	detector: detector$b,
	loader: loader$c
};
var id$a = "sequence";
var detector$a = (txt) => {
	return /^\s*sequenceDiagram/.test(txt);
};
var loader$b = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./sequenceDiagram-704730f1-DsK49Bjv.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,10,11,12,14]));
	return {
		id: id$a,
		diagram: diagram2
	};
};
var sequence = {
	id: id$a,
	detector: detector$a,
	loader: loader$b
};
var id$9 = "class";
var detector$9 = (txt, config2) => {
	var _a;
	if (((_a = config2 == null ? void 0 : config2.class) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper") return false;
	return /^\s*classDiagram/.test(txt);
};
var loader$a = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./classDiagram-70f12bd4-qXUf6MbU.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,16,25,24,20,18,43]));
	return {
		id: id$9,
		diagram: diagram2
	};
};
var classDiagram = {
	id: id$9,
	detector: detector$9,
	loader: loader$a
};
var id$8 = "classDiagram";
var detector$8 = (txt, config2) => {
	var _a;
	if (/^\s*classDiagram/.test(txt) && ((_a = config2 == null ? void 0 : config2.class) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper") return true;
	return /^\s*classDiagram-v2/.test(txt);
};
var loader$9 = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./classDiagram-v2-f2320105-jbcLoF_O.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([44,1,2,3,4,5,6,7,8,9,10,11,12,16,25,24,20,18,19,21,22,23,43]));
	return {
		id: id$8,
		diagram: diagram2
	};
};
var classDiagramV2 = {
	id: id$8,
	detector: detector$8,
	loader: loader$9
};
var id$7 = "state";
var detector$7 = (txt, config2) => {
	var _a;
	if (((_a = config2 == null ? void 0 : config2.state) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper") return false;
	return /^\s*stateDiagram/.test(txt);
};
var loader$8 = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./stateDiagram-587899a1-DPCttp-L.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([45,1,2,3,4,5,6,7,8,9,10,11,12,16,25,24,20,18,46]));
	return {
		id: id$7,
		diagram: diagram2
	};
};
var state = {
	id: id$7,
	detector: detector$7,
	loader: loader$8
};
var id$6 = "stateDiagram";
var detector$6 = (txt, config2) => {
	var _a;
	if (/^\s*stateDiagram-v2/.test(txt)) return true;
	if (/^\s*stateDiagram/.test(txt) && ((_a = config2 == null ? void 0 : config2.state) == null ? void 0 : _a.defaultRenderer) === "dagre-wrapper") return true;
	return false;
};
var loader$7 = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./stateDiagram-v2-d93cdb3a-BZ4EFaiy.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([47,1,2,3,4,5,6,7,8,9,10,11,12,16,25,24,20,18,19,21,22,23,46]));
	return {
		id: id$6,
		diagram: diagram2
	};
};
var stateV2 = {
	id: id$6,
	detector: detector$6,
	loader: loader$7
};
var id$5 = "journey";
var detector$5 = (txt) => {
	return /^\s*journey/.test(txt);
};
var loader$6 = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./journeyDiagram-49397b02-BhZXFFXS.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([48,1,2,3,4,5,6,7,8,9,10,11,12,16,37,14]));
	return {
		id: id$5,
		diagram: diagram2
	};
};
var journey = {
	id: id$5,
	detector: detector$5,
	loader: loader$6
};
var d3Attrs = function(d3Elem, attrs) {
	for (let attr of attrs) d3Elem.attr(attr[0], attr[1]);
};
var calculateSvgSizeAttrs = function(height, width, useMaxWidth) {
	let attrs = /* @__PURE__ */ new Map();
	if (useMaxWidth) {
		attrs.set("width", "100%");
		attrs.set("style", `max-width: ${width}px;`);
	} else {
		attrs.set("height", height);
		attrs.set("width", width);
	}
	return attrs;
};
var configureSvgSize = function(svgElem, height, width, useMaxWidth) {
	d3Attrs(svgElem, calculateSvgSizeAttrs(height, width, useMaxWidth));
};
var setupGraphViewbox$1 = function(graph, svgElem, padding, useMaxWidth) {
	const svgBounds = svgElem.node().getBBox();
	const sWidth = svgBounds.width;
	const sHeight = svgBounds.height;
	log$1.info(`SVG bounds: ${sWidth}x${sHeight}`, svgBounds);
	let width = 0;
	let height = 0;
	log$1.info(`Graph bounds: ${width}x${height}`, graph);
	width = sWidth + padding * 2;
	height = sHeight + padding * 2;
	log$1.info(`Calculated bounds: ${width}x${height}`);
	configureSvgSize(svgElem, height, width, useMaxWidth);
	const vBox = `${svgBounds.x - padding} ${svgBounds.y - padding} ${svgBounds.width + 2 * padding} ${svgBounds.height + 2 * padding}`;
	svgElem.attr("viewBox", vBox);
};
var themes = {};
var getStyles = (type2, userStyles, options) => {
	let diagramStyles = "";
	if (type2 in themes && themes[type2]) diagramStyles = themes[type2](options);
	else log$1.warn(`No theme found for ${type2}`);
	return ` & {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize};
    fill: ${options.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${options.errorBkgColor};
  }
  & .error-text {
    fill: ${options.errorTextColor};
    stroke: ${options.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${options.lineColor};
    stroke: ${options.lineColor};
  }
  & .marker.cross {
    stroke: ${options.lineColor};
  }

  & svg {
    font-family: ${options.fontFamily};
    font-size: ${options.fontSize};
  }

  ${diagramStyles}

  ${userStyles}
`;
};
var addStylesForDiagram = (type2, diagramTheme) => {
	if (diagramTheme !== void 0) themes[type2] = diagramTheme;
};
var getStyles$1 = getStyles;
var accTitle = "";
var diagramTitle = "";
var accDescription = "";
var sanitizeText$1 = (txt) => sanitizeText$2(txt, getConfig$1());
var clear = () => {
	accTitle = "";
	accDescription = "";
	diagramTitle = "";
};
var setAccTitle = (txt) => {
	accTitle = sanitizeText$1(txt).replace(/^\s+/g, "");
};
var getAccTitle = () => accTitle;
var setAccDescription = (txt) => {
	accDescription = sanitizeText$1(txt).replace(/\n\s+/g, "\n");
};
var getAccDescription = () => accDescription;
var setDiagramTitle = (txt) => {
	diagramTitle = sanitizeText$1(txt);
};
var getDiagramTitle = () => diagramTitle;
var commonDb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
	__proto__: null,
	clear,
	getAccDescription,
	getAccTitle,
	getDiagramTitle,
	setAccDescription,
	setAccTitle,
	setDiagramTitle
}, Symbol.toStringTag, { value: "Module" }));
var log = log$1;
var setLogLevel = setLogLevel$1;
var getConfig = getConfig$1;
var setConfig = setConfig$1;
var defaultConfig = defaultConfig$1;
var sanitizeText = (text) => sanitizeText$2(text, getConfig());
var setupGraphViewbox = setupGraphViewbox$1;
var getCommonDb = () => {
	return commonDb;
};
var diagrams = {};
var registerDiagram = (id2, diagram2, detector2) => {
	var _a;
	if (diagrams[id2]) throw new Error(`Diagram ${id2} already registered.`);
	diagrams[id2] = diagram2;
	if (detector2) addDetector(id2, detector2);
	addStylesForDiagram(id2, diagram2.styles);
	(_a = diagram2.injectUtils) == null || _a.call(diagram2, log, setLogLevel, getConfig, sanitizeText, setupGraphViewbox, getCommonDb(), () => {});
};
var getDiagram = (name) => {
	if (name in diagrams) return diagrams[name];
	throw new DiagramNotFoundError(name);
};
var DiagramNotFoundError = class extends Error {
	constructor(name) {
		super(`Diagram ${name} not found.`);
	}
};
var selectSvgElement = (id2) => {
	var _a;
	const { securityLevel } = getConfig();
	let root = select_default("body");
	if (securityLevel === "sandbox") root = select_default((((_a = select_default(`#i${id2}`).node()) == null ? void 0 : _a.contentDocument) ?? document).body);
	return root.select(`#${id2}`);
};
var draw = (_text, id2, version2) => {
	log$1.debug("rendering svg for syntax error\n");
	const svg = selectSvgElement(id2);
	const g = svg.append("g");
	svg.attr("viewBox", "0 0 2412 512");
	configureSvgSize(svg, 100, 512, true);
	g.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z");
	g.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z");
	g.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z");
	g.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z");
	g.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z");
	g.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z");
	g.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text");
	g.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${version2}`);
};
var renderer = { draw };
var errorRenderer = renderer;
var errorDiagram = {
	db: {},
	renderer,
	parser: {
		parser: { yy: {} },
		parse: () => {}
	}
};
var id$4 = "flowchart-elk";
var detector$4 = (txt, config2) => {
	var _a;
	if (/^\s*flowchart-elk/.test(txt) || /^\s*flowchart|graph/.test(txt) && ((_a = config2 == null ? void 0 : config2.flowchart) == null ? void 0 : _a.defaultRenderer) === "elk") return true;
	return false;
};
var loader$5 = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./flowchart-elk-definition-4a651766-JpCLYp3l.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([49,1,2,3,4,5,6,7,8,9,10,11,12,16,25,24,22,23,27]));
	return {
		id: id$4,
		diagram: diagram2
	};
};
var flowchartElk = {
	id: id$4,
	detector: detector$4,
	loader: loader$5
};
var id$3 = "timeline";
var detector$3 = (txt) => {
	return /^\s*timeline/.test(txt);
};
var loader$4 = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./timeline-definition-85554ec2-BiFn0MeW.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([50,1,2,3,4,5,6,7,8,9,10,11,12,16,37]));
	return {
		id: id$3,
		diagram: diagram2
	};
};
var timeline = {
	id: id$3,
	detector: detector$3,
	loader: loader$4
};
var id$2 = "mindmap";
var detector$2 = (txt) => {
	return /^\s*mindmap/.test(txt);
};
var loader$3 = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./mindmap-definition-fc14e90a-CLpA1Z3c.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([51,1,2,3,4,5,6,7,8,9,10,11,12,22]));
	return {
		id: id$2,
		diagram: diagram2
	};
};
var mindmap = {
	id: id$2,
	detector: detector$2,
	loader: loader$3
};
var id$1 = "sankey";
var detector$1 = (txt) => {
	return /^\s*sankey-beta/.test(txt);
};
var loader$2 = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./sankeyDiagram-04a897e0-eGYSFcI1.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,10,11,12,53,33,36]));
	return {
		id: id$1,
		diagram: diagram2
	};
};
var sankey = {
	id: id$1,
	detector: detector$1,
	loader: loader$2
};
var id = "block";
var detector = (txt) => {
	return /^\s*block-beta/.test(txt);
};
var loader$1 = async () => {
	const { diagram: diagram2 } = await __vitePreload(async () => {
		const { diagram: diagram2$1 } = await import("./blockDiagram-38ab4fdb-8Fb3RMJS.js");
		return { diagram: diagram2$1 };
	}, __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,10,11,12,16,53,33,36,25,24,18,26,21,22,23]));
	return {
		id,
		diagram: diagram2
	};
};
var block = {
	id,
	detector,
	loader: loader$1
};
var hasLoadedDiagrams = false;
var addDiagrams = () => {
	if (hasLoadedDiagrams) return;
	hasLoadedDiagrams = true;
	registerDiagram("error", errorDiagram, (text) => {
		return text.toLowerCase().trim() === "error";
	});
	registerDiagram("---", {
		db: { clear: () => {} },
		styles: {},
		renderer: { draw: () => {} },
		parser: {
			parser: { yy: {} },
			parse: () => {
				throw new Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
			}
		},
		init: () => null
	}, (text) => {
		return text.toLowerCase().trimStart().startsWith("---");
	});
	registerLazyLoadedDiagrams(c4, classDiagramV2, classDiagram, er, gantt, info, pie, requirement, sequence, flowchartElk, flowchartV2, flowchart, mindmap, timeline, git, stateV2, state, journey, quadrantChart, sankey, xychart, block);
};
var Diagram = class {
	constructor(text, metadata = {}) {
		this.text = text;
		this.metadata = metadata;
		this.type = "graph";
		this.text = encodeEntities(text);
		this.text += "\n";
		const cnf = getConfig$1();
		try {
			this.type = detectType(text, cnf);
		} catch (e) {
			this.type = "error";
			this.detectError = e;
		}
		const diagram2 = getDiagram(this.type);
		log$1.debug("Type " + this.type);
		this.db = diagram2.db;
		this.renderer = diagram2.renderer;
		this.parser = diagram2.parser;
		this.parser.parser.yy = this.db;
		this.init = diagram2.init;
		this.parse();
	}
	parse() {
		var _a, _b, _c, _d, _e;
		if (this.detectError) throw this.detectError;
		(_b = (_a = this.db).clear) == null || _b.call(_a);
		const config2 = getConfig$1();
		(_c = this.init) == null || _c.call(this, config2);
		if (this.metadata.title) (_e = (_d = this.db).setDiagramTitle) == null || _e.call(_d, this.metadata.title);
		this.parser.parse(this.text);
	}
	async render(id2, version2) {
		await this.renderer.draw(this.text, id2, version2, this);
	}
	getParser() {
		return this.parser;
	}
	getType() {
		return this.type;
	}
};
var getDiagramFromText$1 = async (text, metadata = {}) => {
	const type2 = detectType(text, getConfig$1());
	try {
		getDiagram(type2);
	} catch (error) {
		const loader2 = getDiagramLoader(type2);
		if (!loader2) throw new UnknownDiagramError(`Diagram ${type2} not found.`);
		const { id: id2, diagram: diagram2 } = await loader2();
		registerDiagram(id2, diagram2);
	}
	return new Diagram(text, metadata);
};
var interactionFunctions = [];
var attachFunctions = () => {
	interactionFunctions.forEach((f) => {
		f();
	});
	interactionFunctions = [];
};
var SVG_ROLE = "graphics-document document";
function setA11yDiagramInfo(svg, diagramType) {
	svg.attr("role", SVG_ROLE);
	if (diagramType !== "") svg.attr("aria-roledescription", diagramType);
}
function addSVGa11yTitleDescription(svg, a11yTitle, a11yDesc, baseId) {
	if (svg.insert === void 0) return;
	if (a11yDesc) {
		const descId = `chart-desc-${baseId}`;
		svg.attr("aria-describedby", descId);
		svg.insert("desc", ":first-child").attr("id", descId).text(a11yDesc);
	}
	if (a11yTitle) {
		const titleId = `chart-title-${baseId}`;
		svg.attr("aria-labelledby", titleId);
		svg.insert("title", ":first-child").attr("id", titleId).text(a11yTitle);
	}
}
var cleanupComments = (text) => {
	return text.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart();
};
function isNothing(subject) {
	return typeof subject === "undefined" || subject === null;
}
function isObject(subject) {
	return typeof subject === "object" && subject !== null;
}
function toArray(sequence2) {
	if (Array.isArray(sequence2)) return sequence2;
	else if (isNothing(sequence2)) return [];
	return [sequence2];
}
function extend(target, source) {
	var index, length, key, sourceKeys;
	if (source) {
		sourceKeys = Object.keys(source);
		for (index = 0, length = sourceKeys.length; index < length; index += 1) {
			key = sourceKeys[index];
			target[key] = source[key];
		}
	}
	return target;
}
function repeat(string, count) {
	var result = "", cycle;
	for (cycle = 0; cycle < count; cycle += 1) result += string;
	return result;
}
function isNegativeZero(number) {
	return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var common = {
	isNothing,
	isObject,
	toArray,
	repeat,
	isNegativeZero,
	extend
};
function formatError(exception2, compact) {
	var where = "", message = exception2.reason || "(unknown reason)";
	if (!exception2.mark) return message;
	if (exception2.mark.name) where += "in \"" + exception2.mark.name + "\" ";
	where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
	if (!compact && exception2.mark.snippet) where += "\n\n" + exception2.mark.snippet;
	return message + " " + where;
}
function YAMLException$1(reason, mark) {
	Error.call(this);
	this.name = "YAMLException";
	this.reason = reason;
	this.mark = mark;
	this.message = formatError(this, false);
	if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
	else this.stack = (/* @__PURE__ */ new Error()).stack || "";
}
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString(compact) {
	return this.name + ": " + formatError(this, compact);
};
var exception = YAMLException$1;
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
	var head = "";
	var tail = "";
	var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
	if (position - lineStart > maxHalfLength) {
		head = " ... ";
		lineStart = position - maxHalfLength + head.length;
	}
	if (lineEnd - position > maxHalfLength) {
		tail = " ...";
		lineEnd = position + maxHalfLength - tail.length;
	}
	return {
		str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "→") + tail,
		pos: position - lineStart + head.length
	};
}
function padStart(string, max$2) {
	return common.repeat(" ", max$2 - string.length) + string;
}
function makeSnippet(mark, options) {
	options = Object.create(options || null);
	if (!mark.buffer) return null;
	if (!options.maxLength) options.maxLength = 79;
	if (typeof options.indent !== "number") options.indent = 1;
	if (typeof options.linesBefore !== "number") options.linesBefore = 3;
	if (typeof options.linesAfter !== "number") options.linesAfter = 2;
	var re = /\r?\n|\r|\0/g;
	var lineStarts = [0];
	var lineEnds = [];
	var match;
	var foundLineNo = -1;
	while (match = re.exec(mark.buffer)) {
		lineEnds.push(match.index);
		lineStarts.push(match.index + match[0].length);
		if (mark.position <= match.index && foundLineNo < 0) foundLineNo = lineStarts.length - 2;
	}
	if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
	var result = "", i$1, line;
	var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
	var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
	for (i$1 = 1; i$1 <= options.linesBefore; i$1++) {
		if (foundLineNo - i$1 < 0) break;
		line = getLine(mark.buffer, lineStarts[foundLineNo - i$1], lineEnds[foundLineNo - i$1], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i$1]), maxLineLength);
		result = common.repeat(" ", options.indent) + padStart((mark.line - i$1 + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
	}
	line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
	result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
	result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
	for (i$1 = 1; i$1 <= options.linesAfter; i$1++) {
		if (foundLineNo + i$1 >= lineEnds.length) break;
		line = getLine(mark.buffer, lineStarts[foundLineNo + i$1], lineEnds[foundLineNo + i$1], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i$1]), maxLineLength);
		result += common.repeat(" ", options.indent) + padStart((mark.line + i$1 + 1).toString(), lineNoLength) + " | " + line.str + "\n";
	}
	return result.replace(/\n$/, "");
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
	"kind",
	"multi",
	"resolve",
	"construct",
	"instanceOf",
	"predicate",
	"represent",
	"representName",
	"defaultStyle",
	"styleAliases"
];
var YAML_NODE_KINDS = [
	"scalar",
	"sequence",
	"mapping"
];
function compileStyleAliases(map2) {
	var result = {};
	if (map2 !== null) Object.keys(map2).forEach(function(style) {
		map2[style].forEach(function(alias) {
			result[String(alias)] = style;
		});
	});
	return result;
}
function Type$1(tag, options) {
	options = options || {};
	Object.keys(options).forEach(function(name) {
		if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) throw new exception("Unknown option \"" + name + "\" is met in definition of \"" + tag + "\" YAML type.");
	});
	this.options = options;
	this.tag = tag;
	this.kind = options["kind"] || null;
	this.resolve = options["resolve"] || function() {
		return true;
	};
	this.construct = options["construct"] || function(data) {
		return data;
	};
	this.instanceOf = options["instanceOf"] || null;
	this.predicate = options["predicate"] || null;
	this.represent = options["represent"] || null;
	this.representName = options["representName"] || null;
	this.defaultStyle = options["defaultStyle"] || null;
	this.multi = options["multi"] || false;
	this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
	if (YAML_NODE_KINDS.indexOf(this.kind) === -1) throw new exception("Unknown kind \"" + this.kind + "\" is specified for \"" + tag + "\" YAML type.");
}
var type = Type$1;
function compileList(schema2, name) {
	var result = [];
	schema2[name].forEach(function(currentType) {
		var newIndex = result.length;
		result.forEach(function(previousType, previousIndex) {
			if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) newIndex = previousIndex;
		});
		result[newIndex] = currentType;
	});
	return result;
}
function compileMap() {
	var result = {
		scalar: {},
		sequence: {},
		mapping: {},
		fallback: {},
		multi: {
			scalar: [],
			sequence: [],
			mapping: [],
			fallback: []
		}
	}, index, length;
	function collectType(type2) {
		if (type2.multi) {
			result.multi[type2.kind].push(type2);
			result.multi["fallback"].push(type2);
		} else result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
	}
	for (index = 0, length = arguments.length; index < length; index += 1) arguments[index].forEach(collectType);
	return result;
}
function Schema$1(definition) {
	return this.extend(definition);
}
Schema$1.prototype.extend = function extend2(definition) {
	var implicit = [];
	var explicit = [];
	if (definition instanceof type) explicit.push(definition);
	else if (Array.isArray(definition)) explicit = explicit.concat(definition);
	else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
		if (definition.implicit) implicit = implicit.concat(definition.implicit);
		if (definition.explicit) explicit = explicit.concat(definition.explicit);
	} else throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
	implicit.forEach(function(type$1$1) {
		if (!(type$1$1 instanceof type)) throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
		if (type$1$1.loadKind && type$1$1.loadKind !== "scalar") throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
		if (type$1$1.multi) throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
	});
	explicit.forEach(function(type$1$1) {
		if (!(type$1$1 instanceof type)) throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
	});
	var result = Object.create(Schema$1.prototype);
	result.implicit = (this.implicit || []).concat(implicit);
	result.explicit = (this.explicit || []).concat(explicit);
	result.compiledImplicit = compileList(result, "implicit");
	result.compiledExplicit = compileList(result, "explicit");
	result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
	return result;
};
var failsafe = new Schema$1({ explicit: [
	new type("tag:yaml.org,2002:str", {
		kind: "scalar",
		construct: function(data) {
			return data !== null ? data : "";
		}
	}),
	new type("tag:yaml.org,2002:seq", {
		kind: "sequence",
		construct: function(data) {
			return data !== null ? data : [];
		}
	}),
	new type("tag:yaml.org,2002:map", {
		kind: "mapping",
		construct: function(data) {
			return data !== null ? data : {};
		}
	})
] });
function resolveYamlNull(data) {
	if (data === null) return true;
	var max$2 = data.length;
	return max$2 === 1 && data === "~" || max$2 === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
	return null;
}
function isNull(object) {
	return object === null;
}
var _null = new type("tag:yaml.org,2002:null", {
	kind: "scalar",
	resolve: resolveYamlNull,
	construct: constructYamlNull,
	predicate: isNull,
	represent: {
		canonical: function() {
			return "~";
		},
		lowercase: function() {
			return "null";
		},
		uppercase: function() {
			return "NULL";
		},
		camelcase: function() {
			return "Null";
		},
		empty: function() {
			return "";
		}
	},
	defaultStyle: "lowercase"
});
function resolveYamlBoolean(data) {
	if (data === null) return false;
	var max$2 = data.length;
	return max$2 === 4 && (data === "true" || data === "True" || data === "TRUE") || max$2 === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
	return data === "true" || data === "True" || data === "TRUE";
}
function isBoolean(object) {
	return Object.prototype.toString.call(object) === "[object Boolean]";
}
var bool = new type("tag:yaml.org,2002:bool", {
	kind: "scalar",
	resolve: resolveYamlBoolean,
	construct: constructYamlBoolean,
	predicate: isBoolean,
	represent: {
		lowercase: function(object) {
			return object ? "true" : "false";
		},
		uppercase: function(object) {
			return object ? "TRUE" : "FALSE";
		},
		camelcase: function(object) {
			return object ? "True" : "False";
		}
	},
	defaultStyle: "lowercase"
});
function isHexCode(c) {
	return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
function isOctCode(c) {
	return 48 <= c && c <= 55;
}
function isDecCode(c) {
	return 48 <= c && c <= 57;
}
function resolveYamlInteger(data) {
	if (data === null) return false;
	var max$2 = data.length, index = 0, hasDigits = false, ch;
	if (!max$2) return false;
	ch = data[index];
	if (ch === "-" || ch === "+") ch = data[++index];
	if (ch === "0") {
		if (index + 1 === max$2) return true;
		ch = data[++index];
		if (ch === "b") {
			index++;
			for (; index < max$2; index++) {
				ch = data[index];
				if (ch === "_") continue;
				if (ch !== "0" && ch !== "1") return false;
				hasDigits = true;
			}
			return hasDigits && ch !== "_";
		}
		if (ch === "x") {
			index++;
			for (; index < max$2; index++) {
				ch = data[index];
				if (ch === "_") continue;
				if (!isHexCode(data.charCodeAt(index))) return false;
				hasDigits = true;
			}
			return hasDigits && ch !== "_";
		}
		if (ch === "o") {
			index++;
			for (; index < max$2; index++) {
				ch = data[index];
				if (ch === "_") continue;
				if (!isOctCode(data.charCodeAt(index))) return false;
				hasDigits = true;
			}
			return hasDigits && ch !== "_";
		}
	}
	if (ch === "_") return false;
	for (; index < max$2; index++) {
		ch = data[index];
		if (ch === "_") continue;
		if (!isDecCode(data.charCodeAt(index))) return false;
		hasDigits = true;
	}
	if (!hasDigits || ch === "_") return false;
	return true;
}
function constructYamlInteger(data) {
	var value = data, sign$1 = 1, ch;
	if (value.indexOf("_") !== -1) value = value.replace(/_/g, "");
	ch = value[0];
	if (ch === "-" || ch === "+") {
		if (ch === "-") sign$1 = -1;
		value = value.slice(1);
		ch = value[0];
	}
	if (value === "0") return 0;
	if (ch === "0") {
		if (value[1] === "b") return sign$1 * parseInt(value.slice(2), 2);
		if (value[1] === "x") return sign$1 * parseInt(value.slice(2), 16);
		if (value[1] === "o") return sign$1 * parseInt(value.slice(2), 8);
	}
	return sign$1 * parseInt(value, 10);
}
function isInteger(object) {
	return Object.prototype.toString.call(object) === "[object Number]" && object % 1 === 0 && !common.isNegativeZero(object);
}
var int = new type("tag:yaml.org,2002:int", {
	kind: "scalar",
	resolve: resolveYamlInteger,
	construct: constructYamlInteger,
	predicate: isInteger,
	represent: {
		binary: function(obj) {
			return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
		},
		octal: function(obj) {
			return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
		},
		decimal: function(obj) {
			return obj.toString(10);
		},
		hexadecimal: function(obj) {
			return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
		}
	},
	defaultStyle: "decimal",
	styleAliases: {
		binary: [2, "bin"],
		octal: [8, "oct"],
		decimal: [10, "dec"],
		hexadecimal: [16, "hex"]
	}
});
var YAML_FLOAT_PATTERN = /* @__PURE__ */ new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function resolveYamlFloat(data) {
	if (data === null) return false;
	if (!YAML_FLOAT_PATTERN.test(data) || data[data.length - 1] === "_") return false;
	return true;
}
function constructYamlFloat(data) {
	var value = data.replace(/_/g, "").toLowerCase(), sign$1 = value[0] === "-" ? -1 : 1;
	if ("+-".indexOf(value[0]) >= 0) value = value.slice(1);
	if (value === ".inf") return sign$1 === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
	else if (value === ".nan") return NaN;
	return sign$1 * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
	var res;
	if (isNaN(object)) switch (style) {
		case "lowercase": return ".nan";
		case "uppercase": return ".NAN";
		case "camelcase": return ".NaN";
	}
	else if (Number.POSITIVE_INFINITY === object) switch (style) {
		case "lowercase": return ".inf";
		case "uppercase": return ".INF";
		case "camelcase": return ".Inf";
	}
	else if (Number.NEGATIVE_INFINITY === object) switch (style) {
		case "lowercase": return "-.inf";
		case "uppercase": return "-.INF";
		case "camelcase": return "-.Inf";
	}
	else if (common.isNegativeZero(object)) return "-0.0";
	res = object.toString(10);
	return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
	return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
}
var float = new type("tag:yaml.org,2002:float", {
	kind: "scalar",
	resolve: resolveYamlFloat,
	construct: constructYamlFloat,
	predicate: isFloat,
	represent: representYamlFloat,
	defaultStyle: "lowercase"
});
var json = failsafe.extend({ implicit: [
	_null,
	bool,
	int,
	float
] });
var core = json;
var YAML_DATE_REGEXP = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
var YAML_TIMESTAMP_REGEXP = /* @__PURE__ */ new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function resolveYamlTimestamp(data) {
	if (data === null) return false;
	if (YAML_DATE_REGEXP.exec(data) !== null) return true;
	if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
	return false;
}
function constructYamlTimestamp(data) {
	var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
	match = YAML_DATE_REGEXP.exec(data);
	if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
	if (match === null) throw new Error("Date resolve error");
	year = +match[1];
	month = +match[2] - 1;
	day = +match[3];
	if (!match[4]) return new Date(Date.UTC(year, month, day));
	hour = +match[4];
	minute = +match[5];
	second = +match[6];
	if (match[7]) {
		fraction = match[7].slice(0, 3);
		while (fraction.length < 3) fraction += "0";
		fraction = +fraction;
	}
	if (match[9]) {
		tz_hour = +match[10];
		tz_minute = +(match[11] || 0);
		delta = (tz_hour * 60 + tz_minute) * 6e4;
		if (match[9] === "-") delta = -delta;
	}
	date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
	if (delta) date.setTime(date.getTime() - delta);
	return date;
}
function representYamlTimestamp(object) {
	return object.toISOString();
}
var timestamp = new type("tag:yaml.org,2002:timestamp", {
	kind: "scalar",
	resolve: resolveYamlTimestamp,
	construct: constructYamlTimestamp,
	instanceOf: Date,
	represent: representYamlTimestamp
});
function resolveYamlMerge(data) {
	return data === "<<" || data === null;
}
var merge = new type("tag:yaml.org,2002:merge", {
	kind: "scalar",
	resolve: resolveYamlMerge
});
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
	if (data === null) return false;
	var code, idx, bitlen = 0, max$2 = data.length, map2 = BASE64_MAP;
	for (idx = 0; idx < max$2; idx++) {
		code = map2.indexOf(data.charAt(idx));
		if (code > 64) continue;
		if (code < 0) return false;
		bitlen += 6;
	}
	return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
	var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max$2 = input.length, map2 = BASE64_MAP, bits = 0, result = [];
	for (idx = 0; idx < max$2; idx++) {
		if (idx % 4 === 0 && idx) {
			result.push(bits >> 16 & 255);
			result.push(bits >> 8 & 255);
			result.push(bits & 255);
		}
		bits = bits << 6 | map2.indexOf(input.charAt(idx));
	}
	tailbits = max$2 % 4 * 6;
	if (tailbits === 0) {
		result.push(bits >> 16 & 255);
		result.push(bits >> 8 & 255);
		result.push(bits & 255);
	} else if (tailbits === 18) {
		result.push(bits >> 10 & 255);
		result.push(bits >> 2 & 255);
	} else if (tailbits === 12) result.push(bits >> 4 & 255);
	return new Uint8Array(result);
}
function representYamlBinary(object) {
	var result = "", bits = 0, idx, tail, max$2 = object.length, map2 = BASE64_MAP;
	for (idx = 0; idx < max$2; idx++) {
		if (idx % 3 === 0 && idx) {
			result += map2[bits >> 18 & 63];
			result += map2[bits >> 12 & 63];
			result += map2[bits >> 6 & 63];
			result += map2[bits & 63];
		}
		bits = (bits << 8) + object[idx];
	}
	tail = max$2 % 3;
	if (tail === 0) {
		result += map2[bits >> 18 & 63];
		result += map2[bits >> 12 & 63];
		result += map2[bits >> 6 & 63];
		result += map2[bits & 63];
	} else if (tail === 2) {
		result += map2[bits >> 10 & 63];
		result += map2[bits >> 4 & 63];
		result += map2[bits << 2 & 63];
		result += map2[64];
	} else if (tail === 1) {
		result += map2[bits >> 2 & 63];
		result += map2[bits << 4 & 63];
		result += map2[64];
		result += map2[64];
	}
	return result;
}
function isBinary(obj) {
	return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
var binary = new type("tag:yaml.org,2002:binary", {
	kind: "scalar",
	resolve: resolveYamlBinary,
	construct: constructYamlBinary,
	predicate: isBinary,
	represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
	if (data === null) return true;
	var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
	for (index = 0, length = object.length; index < length; index += 1) {
		pair = object[index];
		pairHasKey = false;
		if (_toString$2.call(pair) !== "[object Object]") return false;
		for (pairKey in pair) if (_hasOwnProperty$3.call(pair, pairKey)) if (!pairHasKey) pairHasKey = true;
		else return false;
		if (!pairHasKey) return false;
		if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
		else return false;
	}
	return true;
}
function constructYamlOmap(data) {
	return data !== null ? data : [];
}
var omap = new type("tag:yaml.org,2002:omap", {
	kind: "sequence",
	resolve: resolveYamlOmap,
	construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
	if (data === null) return true;
	var index, length, pair, keys, result, object = data;
	result = new Array(object.length);
	for (index = 0, length = object.length; index < length; index += 1) {
		pair = object[index];
		if (_toString$1.call(pair) !== "[object Object]") return false;
		keys = Object.keys(pair);
		if (keys.length !== 1) return false;
		result[index] = [keys[0], pair[keys[0]]];
	}
	return true;
}
function constructYamlPairs(data) {
	if (data === null) return [];
	var index, length, pair, keys, result, object = data;
	result = new Array(object.length);
	for (index = 0, length = object.length; index < length; index += 1) {
		pair = object[index];
		keys = Object.keys(pair);
		result[index] = [keys[0], pair[keys[0]]];
	}
	return result;
}
var pairs = new type("tag:yaml.org,2002:pairs", {
	kind: "sequence",
	resolve: resolveYamlPairs,
	construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
	if (data === null) return true;
	var key, object = data;
	for (key in object) if (_hasOwnProperty$2.call(object, key)) {
		if (object[key] !== null) return false;
	}
	return true;
}
function constructYamlSet(data) {
	return data !== null ? data : {};
}
var set = new type("tag:yaml.org,2002:set", {
	kind: "mapping",
	resolve: resolveYamlSet,
	construct: constructYamlSet
});
var _default = core.extend({
	implicit: [timestamp, merge],
	explicit: [
		binary,
		omap,
		pairs,
		set
	]
});
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
	return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
	return c === 10 || c === 13;
}
function is_WHITE_SPACE(c) {
	return c === 9 || c === 32;
}
function is_WS_OR_EOL(c) {
	return c === 9 || c === 32 || c === 10 || c === 13;
}
function is_FLOW_INDICATOR(c) {
	return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function fromHexCode(c) {
	var lc;
	if (48 <= c && c <= 57) return c - 48;
	lc = c | 32;
	if (97 <= lc && lc <= 102) return lc - 97 + 10;
	return -1;
}
function escapedHexLen(c) {
	if (c === 120) return 2;
	if (c === 117) return 4;
	if (c === 85) return 8;
	return 0;
}
function fromDecimalCode(c) {
	if (48 <= c && c <= 57) return c - 48;
	return -1;
}
function simpleEscapeSequence(c) {
	return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? "\"" : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function charFromCodepoint(c) {
	if (c <= 65535) return String.fromCharCode(c);
	return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320);
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
	simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
	simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function State$1(input, options) {
	this.input = input;
	this.filename = options["filename"] || null;
	this.schema = options["schema"] || _default;
	this.onWarning = options["onWarning"] || null;
	this.legacy = options["legacy"] || false;
	this.json = options["json"] || false;
	this.listener = options["listener"] || null;
	this.implicitTypes = this.schema.compiledImplicit;
	this.typeMap = this.schema.compiledTypeMap;
	this.length = input.length;
	this.position = 0;
	this.line = 0;
	this.lineStart = 0;
	this.lineIndent = 0;
	this.firstTabInLine = -1;
	this.documents = [];
}
function generateError(state2, message) {
	var mark = {
		name: state2.filename,
		buffer: state2.input.slice(0, -1),
		position: state2.position,
		line: state2.line,
		column: state2.position - state2.lineStart
	};
	mark.snippet = snippet(mark);
	return new exception(message, mark);
}
function throwError(state2, message) {
	throw generateError(state2, message);
}
function throwWarning(state2, message) {
	if (state2.onWarning) state2.onWarning.call(null, generateError(state2, message));
}
var directiveHandlers = {
	YAML: function handleYamlDirective(state2, name, args) {
		var match, major, minor;
		if (state2.version !== null) throwError(state2, "duplication of %YAML directive");
		if (args.length !== 1) throwError(state2, "YAML directive accepts exactly one argument");
		match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
		if (match === null) throwError(state2, "ill-formed argument of the YAML directive");
		major = parseInt(match[1], 10);
		minor = parseInt(match[2], 10);
		if (major !== 1) throwError(state2, "unacceptable YAML version of the document");
		state2.version = args[0];
		state2.checkLineBreaks = minor < 2;
		if (minor !== 1 && minor !== 2) throwWarning(state2, "unsupported YAML version of the document");
	},
	TAG: function handleTagDirective(state2, name, args) {
		var handle, prefix;
		if (args.length !== 2) throwError(state2, "TAG directive accepts exactly two arguments");
		handle = args[0];
		prefix = args[1];
		if (!PATTERN_TAG_HANDLE.test(handle)) throwError(state2, "ill-formed tag handle (first argument) of the TAG directive");
		if (_hasOwnProperty$1.call(state2.tagMap, handle)) throwError(state2, "there is a previously declared suffix for \"" + handle + "\" tag handle");
		if (!PATTERN_TAG_URI.test(prefix)) throwError(state2, "ill-formed tag prefix (second argument) of the TAG directive");
		try {
			prefix = decodeURIComponent(prefix);
		} catch (err) {
			throwError(state2, "tag prefix is malformed: " + prefix);
		}
		state2.tagMap[handle] = prefix;
	}
};
function captureSegment(state2, start, end, checkJson) {
	var _position, _length, _character, _result;
	if (start < end) {
		_result = state2.input.slice(start, end);
		if (checkJson) for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
			_character = _result.charCodeAt(_position);
			if (!(_character === 9 || 32 <= _character && _character <= 1114111)) throwError(state2, "expected valid JSON character");
		}
		else if (PATTERN_NON_PRINTABLE.test(_result)) throwError(state2, "the stream contains non-printable characters");
		state2.result += _result;
	}
}
function mergeMappings(state2, destination, source, overridableKeys) {
	var sourceKeys, key, index, quantity;
	if (!common.isObject(source)) throwError(state2, "cannot merge mappings; the provided source object is unacceptable");
	sourceKeys = Object.keys(source);
	for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
		key = sourceKeys[index];
		if (!_hasOwnProperty$1.call(destination, key)) {
			destination[key] = source[key];
			overridableKeys[key] = true;
		}
	}
}
function storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
	var index, quantity;
	if (Array.isArray(keyNode)) {
		keyNode = Array.prototype.slice.call(keyNode);
		for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
			if (Array.isArray(keyNode[index])) throwError(state2, "nested arrays are not supported inside keys");
			if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") keyNode[index] = "[object Object]";
		}
	}
	if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") keyNode = "[object Object]";
	keyNode = String(keyNode);
	if (_result === null) _result = {};
	if (keyTag === "tag:yaml.org,2002:merge") if (Array.isArray(valueNode)) for (index = 0, quantity = valueNode.length; index < quantity; index += 1) mergeMappings(state2, _result, valueNode[index], overridableKeys);
	else mergeMappings(state2, _result, valueNode, overridableKeys);
	else {
		if (!state2.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
			state2.line = startLine || state2.line;
			state2.lineStart = startLineStart || state2.lineStart;
			state2.position = startPos || state2.position;
			throwError(state2, "duplicated mapping key");
		}
		if (keyNode === "__proto__") Object.defineProperty(_result, keyNode, {
			configurable: true,
			enumerable: true,
			writable: true,
			value: valueNode
		});
		else _result[keyNode] = valueNode;
		delete overridableKeys[keyNode];
	}
	return _result;
}
function readLineBreak(state2) {
	var ch = state2.input.charCodeAt(state2.position);
	if (ch === 10) state2.position++;
	else if (ch === 13) {
		state2.position++;
		if (state2.input.charCodeAt(state2.position) === 10) state2.position++;
	} else throwError(state2, "a line break is expected");
	state2.line += 1;
	state2.lineStart = state2.position;
	state2.firstTabInLine = -1;
}
function skipSeparationSpace(state2, allowComments, checkIndent) {
	var lineBreaks = 0, ch = state2.input.charCodeAt(state2.position);
	while (ch !== 0) {
		while (is_WHITE_SPACE(ch)) {
			if (ch === 9 && state2.firstTabInLine === -1) state2.firstTabInLine = state2.position;
			ch = state2.input.charCodeAt(++state2.position);
		}
		if (allowComments && ch === 35) do
			ch = state2.input.charCodeAt(++state2.position);
		while (ch !== 10 && ch !== 13 && ch !== 0);
		if (is_EOL(ch)) {
			readLineBreak(state2);
			ch = state2.input.charCodeAt(state2.position);
			lineBreaks++;
			state2.lineIndent = 0;
			while (ch === 32) {
				state2.lineIndent++;
				ch = state2.input.charCodeAt(++state2.position);
			}
		} else break;
	}
	if (checkIndent !== -1 && lineBreaks !== 0 && state2.lineIndent < checkIndent) throwWarning(state2, "deficient indentation");
	return lineBreaks;
}
function testDocumentSeparator(state2) {
	var _position = state2.position, ch = state2.input.charCodeAt(_position);
	if ((ch === 45 || ch === 46) && ch === state2.input.charCodeAt(_position + 1) && ch === state2.input.charCodeAt(_position + 2)) {
		_position += 3;
		ch = state2.input.charCodeAt(_position);
		if (ch === 0 || is_WS_OR_EOL(ch)) return true;
	}
	return false;
}
function writeFoldedLines(state2, count) {
	if (count === 1) state2.result += " ";
	else if (count > 1) state2.result += common.repeat("\n", count - 1);
}
function readPlainScalar(state2, nodeIndent, withinFlowCollection) {
	var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state2.kind, _result = state2.result, ch = state2.input.charCodeAt(state2.position);
	if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) return false;
	if (ch === 63 || ch === 45) {
		following = state2.input.charCodeAt(state2.position + 1);
		if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) return false;
	}
	state2.kind = "scalar";
	state2.result = "";
	captureStart = captureEnd = state2.position;
	hasPendingContent = false;
	while (ch !== 0) {
		if (ch === 58) {
			following = state2.input.charCodeAt(state2.position + 1);
			if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) break;
		} else if (ch === 35) {
			preceding = state2.input.charCodeAt(state2.position - 1);
			if (is_WS_OR_EOL(preceding)) break;
		} else if (state2.position === state2.lineStart && testDocumentSeparator(state2) || withinFlowCollection && is_FLOW_INDICATOR(ch)) break;
		else if (is_EOL(ch)) {
			_line = state2.line;
			_lineStart = state2.lineStart;
			_lineIndent = state2.lineIndent;
			skipSeparationSpace(state2, false, -1);
			if (state2.lineIndent >= nodeIndent) {
				hasPendingContent = true;
				ch = state2.input.charCodeAt(state2.position);
				continue;
			} else {
				state2.position = captureEnd;
				state2.line = _line;
				state2.lineStart = _lineStart;
				state2.lineIndent = _lineIndent;
				break;
			}
		}
		if (hasPendingContent) {
			captureSegment(state2, captureStart, captureEnd, false);
			writeFoldedLines(state2, state2.line - _line);
			captureStart = captureEnd = state2.position;
			hasPendingContent = false;
		}
		if (!is_WHITE_SPACE(ch)) captureEnd = state2.position + 1;
		ch = state2.input.charCodeAt(++state2.position);
	}
	captureSegment(state2, captureStart, captureEnd, false);
	if (state2.result) return true;
	state2.kind = _kind;
	state2.result = _result;
	return false;
}
function readSingleQuotedScalar(state2, nodeIndent) {
	var ch = state2.input.charCodeAt(state2.position), captureStart, captureEnd;
	if (ch !== 39) return false;
	state2.kind = "scalar";
	state2.result = "";
	state2.position++;
	captureStart = captureEnd = state2.position;
	while ((ch = state2.input.charCodeAt(state2.position)) !== 0) if (ch === 39) {
		captureSegment(state2, captureStart, state2.position, true);
		ch = state2.input.charCodeAt(++state2.position);
		if (ch === 39) {
			captureStart = state2.position;
			state2.position++;
			captureEnd = state2.position;
		} else return true;
	} else if (is_EOL(ch)) {
		captureSegment(state2, captureStart, captureEnd, true);
		writeFoldedLines(state2, skipSeparationSpace(state2, false, nodeIndent));
		captureStart = captureEnd = state2.position;
	} else if (state2.position === state2.lineStart && testDocumentSeparator(state2)) throwError(state2, "unexpected end of the document within a single quoted scalar");
	else {
		state2.position++;
		captureEnd = state2.position;
	}
	throwError(state2, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state2, nodeIndent) {
	var captureStart, captureEnd, hexLength, hexResult, tmp, ch = state2.input.charCodeAt(state2.position);
	if (ch !== 34) return false;
	state2.kind = "scalar";
	state2.result = "";
	state2.position++;
	captureStart = captureEnd = state2.position;
	while ((ch = state2.input.charCodeAt(state2.position)) !== 0) if (ch === 34) {
		captureSegment(state2, captureStart, state2.position, true);
		state2.position++;
		return true;
	} else if (ch === 92) {
		captureSegment(state2, captureStart, state2.position, true);
		ch = state2.input.charCodeAt(++state2.position);
		if (is_EOL(ch)) skipSeparationSpace(state2, false, nodeIndent);
		else if (ch < 256 && simpleEscapeCheck[ch]) {
			state2.result += simpleEscapeMap[ch];
			state2.position++;
		} else if ((tmp = escapedHexLen(ch)) > 0) {
			hexLength = tmp;
			hexResult = 0;
			for (; hexLength > 0; hexLength--) {
				ch = state2.input.charCodeAt(++state2.position);
				if ((tmp = fromHexCode(ch)) >= 0) hexResult = (hexResult << 4) + tmp;
				else throwError(state2, "expected hexadecimal character");
			}
			state2.result += charFromCodepoint(hexResult);
			state2.position++;
		} else throwError(state2, "unknown escape sequence");
		captureStart = captureEnd = state2.position;
	} else if (is_EOL(ch)) {
		captureSegment(state2, captureStart, captureEnd, true);
		writeFoldedLines(state2, skipSeparationSpace(state2, false, nodeIndent));
		captureStart = captureEnd = state2.position;
	} else if (state2.position === state2.lineStart && testDocumentSeparator(state2)) throwError(state2, "unexpected end of the document within a double quoted scalar");
	else {
		state2.position++;
		captureEnd = state2.position;
	}
	throwError(state2, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state2, nodeIndent) {
	var readNext = true, _line, _lineStart, _pos, _tag = state2.tag, _result, _anchor = state2.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch = state2.input.charCodeAt(state2.position);
	if (ch === 91) {
		terminator = 93;
		isMapping = false;
		_result = [];
	} else if (ch === 123) {
		terminator = 125;
		isMapping = true;
		_result = {};
	} else return false;
	if (state2.anchor !== null) state2.anchorMap[state2.anchor] = _result;
	ch = state2.input.charCodeAt(++state2.position);
	while (ch !== 0) {
		skipSeparationSpace(state2, true, nodeIndent);
		ch = state2.input.charCodeAt(state2.position);
		if (ch === terminator) {
			state2.position++;
			state2.tag = _tag;
			state2.anchor = _anchor;
			state2.kind = isMapping ? "mapping" : "sequence";
			state2.result = _result;
			return true;
		} else if (!readNext) throwError(state2, "missed comma between flow collection entries");
		else if (ch === 44) throwError(state2, "expected the node content, but found ','");
		keyTag = keyNode = valueNode = null;
		isPair = isExplicitPair = false;
		if (ch === 63) {
			following = state2.input.charCodeAt(state2.position + 1);
			if (is_WS_OR_EOL(following)) {
				isPair = isExplicitPair = true;
				state2.position++;
				skipSeparationSpace(state2, true, nodeIndent);
			}
		}
		_line = state2.line;
		_lineStart = state2.lineStart;
		_pos = state2.position;
		composeNode(state2, nodeIndent, CONTEXT_FLOW_IN, false, true);
		keyTag = state2.tag;
		keyNode = state2.result;
		skipSeparationSpace(state2, true, nodeIndent);
		ch = state2.input.charCodeAt(state2.position);
		if ((isExplicitPair || state2.line === _line) && ch === 58) {
			isPair = true;
			ch = state2.input.charCodeAt(++state2.position);
			skipSeparationSpace(state2, true, nodeIndent);
			composeNode(state2, nodeIndent, CONTEXT_FLOW_IN, false, true);
			valueNode = state2.result;
		}
		if (isMapping) storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
		else if (isPair) _result.push(storeMappingPair(state2, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
		else _result.push(keyNode);
		skipSeparationSpace(state2, true, nodeIndent);
		ch = state2.input.charCodeAt(state2.position);
		if (ch === 44) {
			readNext = true;
			ch = state2.input.charCodeAt(++state2.position);
		} else readNext = false;
	}
	throwError(state2, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state2, nodeIndent) {
	var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch = state2.input.charCodeAt(state2.position);
	if (ch === 124) folding = false;
	else if (ch === 62) folding = true;
	else return false;
	state2.kind = "scalar";
	state2.result = "";
	while (ch !== 0) {
		ch = state2.input.charCodeAt(++state2.position);
		if (ch === 43 || ch === 45) if (CHOMPING_CLIP === chomping) chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
		else throwError(state2, "repeat of a chomping mode identifier");
		else if ((tmp = fromDecimalCode(ch)) >= 0) if (tmp === 0) throwError(state2, "bad explicit indentation width of a block scalar; it cannot be less than one");
		else if (!detectedIndent) {
			textIndent = nodeIndent + tmp - 1;
			detectedIndent = true;
		} else throwError(state2, "repeat of an indentation width identifier");
		else break;
	}
	if (is_WHITE_SPACE(ch)) {
		do
			ch = state2.input.charCodeAt(++state2.position);
		while (is_WHITE_SPACE(ch));
		if (ch === 35) do
			ch = state2.input.charCodeAt(++state2.position);
		while (!is_EOL(ch) && ch !== 0);
	}
	while (ch !== 0) {
		readLineBreak(state2);
		state2.lineIndent = 0;
		ch = state2.input.charCodeAt(state2.position);
		while ((!detectedIndent || state2.lineIndent < textIndent) && ch === 32) {
			state2.lineIndent++;
			ch = state2.input.charCodeAt(++state2.position);
		}
		if (!detectedIndent && state2.lineIndent > textIndent) textIndent = state2.lineIndent;
		if (is_EOL(ch)) {
			emptyLines++;
			continue;
		}
		if (state2.lineIndent < textIndent) {
			if (chomping === CHOMPING_KEEP) state2.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
			else if (chomping === CHOMPING_CLIP) {
				if (didReadContent) state2.result += "\n";
			}
			break;
		}
		if (folding) if (is_WHITE_SPACE(ch)) {
			atMoreIndented = true;
			state2.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
		} else if (atMoreIndented) {
			atMoreIndented = false;
			state2.result += common.repeat("\n", emptyLines + 1);
		} else if (emptyLines === 0) {
			if (didReadContent) state2.result += " ";
		} else state2.result += common.repeat("\n", emptyLines);
		else state2.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
		didReadContent = true;
		detectedIndent = true;
		emptyLines = 0;
		captureStart = state2.position;
		while (!is_EOL(ch) && ch !== 0) ch = state2.input.charCodeAt(++state2.position);
		captureSegment(state2, captureStart, state2.position, false);
	}
	return true;
}
function readBlockSequence(state2, nodeIndent) {
	var _line, _tag = state2.tag, _anchor = state2.anchor, _result = [], following, detected = false, ch;
	if (state2.firstTabInLine !== -1) return false;
	if (state2.anchor !== null) state2.anchorMap[state2.anchor] = _result;
	ch = state2.input.charCodeAt(state2.position);
	while (ch !== 0) {
		if (state2.firstTabInLine !== -1) {
			state2.position = state2.firstTabInLine;
			throwError(state2, "tab characters must not be used in indentation");
		}
		if (ch !== 45) break;
		following = state2.input.charCodeAt(state2.position + 1);
		if (!is_WS_OR_EOL(following)) break;
		detected = true;
		state2.position++;
		if (skipSeparationSpace(state2, true, -1)) {
			if (state2.lineIndent <= nodeIndent) {
				_result.push(null);
				ch = state2.input.charCodeAt(state2.position);
				continue;
			}
		}
		_line = state2.line;
		composeNode(state2, nodeIndent, CONTEXT_BLOCK_IN, false, true);
		_result.push(state2.result);
		skipSeparationSpace(state2, true, -1);
		ch = state2.input.charCodeAt(state2.position);
		if ((state2.line === _line || state2.lineIndent > nodeIndent) && ch !== 0) throwError(state2, "bad indentation of a sequence entry");
		else if (state2.lineIndent < nodeIndent) break;
	}
	if (detected) {
		state2.tag = _tag;
		state2.anchor = _anchor;
		state2.kind = "sequence";
		state2.result = _result;
		return true;
	}
	return false;
}
function readBlockMapping(state2, nodeIndent, flowIndent) {
	var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state2.tag, _anchor = state2.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
	if (state2.firstTabInLine !== -1) return false;
	if (state2.anchor !== null) state2.anchorMap[state2.anchor] = _result;
	ch = state2.input.charCodeAt(state2.position);
	while (ch !== 0) {
		if (!atExplicitKey && state2.firstTabInLine !== -1) {
			state2.position = state2.firstTabInLine;
			throwError(state2, "tab characters must not be used in indentation");
		}
		following = state2.input.charCodeAt(state2.position + 1);
		_line = state2.line;
		if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
			if (ch === 63) {
				if (atExplicitKey) {
					storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
					keyTag = keyNode = valueNode = null;
				}
				detected = true;
				atExplicitKey = true;
				allowCompact = true;
			} else if (atExplicitKey) {
				atExplicitKey = false;
				allowCompact = true;
			} else throwError(state2, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
			state2.position += 1;
			ch = following;
		} else {
			_keyLine = state2.line;
			_keyLineStart = state2.lineStart;
			_keyPos = state2.position;
			if (!composeNode(state2, flowIndent, CONTEXT_FLOW_OUT, false, true)) break;
			if (state2.line === _line) {
				ch = state2.input.charCodeAt(state2.position);
				while (is_WHITE_SPACE(ch)) ch = state2.input.charCodeAt(++state2.position);
				if (ch === 58) {
					ch = state2.input.charCodeAt(++state2.position);
					if (!is_WS_OR_EOL(ch)) throwError(state2, "a whitespace character is expected after the key-value separator within a block mapping");
					if (atExplicitKey) {
						storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
						keyTag = keyNode = valueNode = null;
					}
					detected = true;
					atExplicitKey = false;
					allowCompact = false;
					keyTag = state2.tag;
					keyNode = state2.result;
				} else if (detected) throwError(state2, "can not read an implicit mapping pair; a colon is missed");
				else {
					state2.tag = _tag;
					state2.anchor = _anchor;
					return true;
				}
			} else if (detected) throwError(state2, "can not read a block mapping entry; a multiline key may not be an implicit key");
			else {
				state2.tag = _tag;
				state2.anchor = _anchor;
				return true;
			}
		}
		if (state2.line === _line || state2.lineIndent > nodeIndent) {
			if (atExplicitKey) {
				_keyLine = state2.line;
				_keyLineStart = state2.lineStart;
				_keyPos = state2.position;
			}
			if (composeNode(state2, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) if (atExplicitKey) keyNode = state2.result;
			else valueNode = state2.result;
			if (!atExplicitKey) {
				storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
				keyTag = keyNode = valueNode = null;
			}
			skipSeparationSpace(state2, true, -1);
			ch = state2.input.charCodeAt(state2.position);
		}
		if ((state2.line === _line || state2.lineIndent > nodeIndent) && ch !== 0) throwError(state2, "bad indentation of a mapping entry");
		else if (state2.lineIndent < nodeIndent) break;
	}
	if (atExplicitKey) storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
	if (detected) {
		state2.tag = _tag;
		state2.anchor = _anchor;
		state2.kind = "mapping";
		state2.result = _result;
	}
	return detected;
}
function readTagProperty(state2) {
	var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch = state2.input.charCodeAt(state2.position);
	if (ch !== 33) return false;
	if (state2.tag !== null) throwError(state2, "duplication of a tag property");
	ch = state2.input.charCodeAt(++state2.position);
	if (ch === 60) {
		isVerbatim = true;
		ch = state2.input.charCodeAt(++state2.position);
	} else if (ch === 33) {
		isNamed = true;
		tagHandle = "!!";
		ch = state2.input.charCodeAt(++state2.position);
	} else tagHandle = "!";
	_position = state2.position;
	if (isVerbatim) {
		do
			ch = state2.input.charCodeAt(++state2.position);
		while (ch !== 0 && ch !== 62);
		if (state2.position < state2.length) {
			tagName = state2.input.slice(_position, state2.position);
			ch = state2.input.charCodeAt(++state2.position);
		} else throwError(state2, "unexpected end of the stream within a verbatim tag");
	} else {
		while (ch !== 0 && !is_WS_OR_EOL(ch)) {
			if (ch === 33) if (!isNamed) {
				tagHandle = state2.input.slice(_position - 1, state2.position + 1);
				if (!PATTERN_TAG_HANDLE.test(tagHandle)) throwError(state2, "named tag handle cannot contain such characters");
				isNamed = true;
				_position = state2.position + 1;
			} else throwError(state2, "tag suffix cannot contain exclamation marks");
			ch = state2.input.charCodeAt(++state2.position);
		}
		tagName = state2.input.slice(_position, state2.position);
		if (PATTERN_FLOW_INDICATORS.test(tagName)) throwError(state2, "tag suffix cannot contain flow indicator characters");
	}
	if (tagName && !PATTERN_TAG_URI.test(tagName)) throwError(state2, "tag name cannot contain such characters: " + tagName);
	try {
		tagName = decodeURIComponent(tagName);
	} catch (err) {
		throwError(state2, "tag name is malformed: " + tagName);
	}
	if (isVerbatim) state2.tag = tagName;
	else if (_hasOwnProperty$1.call(state2.tagMap, tagHandle)) state2.tag = state2.tagMap[tagHandle] + tagName;
	else if (tagHandle === "!") state2.tag = "!" + tagName;
	else if (tagHandle === "!!") state2.tag = "tag:yaml.org,2002:" + tagName;
	else throwError(state2, "undeclared tag handle \"" + tagHandle + "\"");
	return true;
}
function readAnchorProperty(state2) {
	var _position, ch = state2.input.charCodeAt(state2.position);
	if (ch !== 38) return false;
	if (state2.anchor !== null) throwError(state2, "duplication of an anchor property");
	ch = state2.input.charCodeAt(++state2.position);
	_position = state2.position;
	while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) ch = state2.input.charCodeAt(++state2.position);
	if (state2.position === _position) throwError(state2, "name of an anchor node must contain at least one character");
	state2.anchor = state2.input.slice(_position, state2.position);
	return true;
}
function readAlias(state2) {
	var _position, alias, ch = state2.input.charCodeAt(state2.position);
	if (ch !== 42) return false;
	ch = state2.input.charCodeAt(++state2.position);
	_position = state2.position;
	while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) ch = state2.input.charCodeAt(++state2.position);
	if (state2.position === _position) throwError(state2, "name of an alias node must contain at least one character");
	alias = state2.input.slice(_position, state2.position);
	if (!_hasOwnProperty$1.call(state2.anchorMap, alias)) throwError(state2, "unidentified alias \"" + alias + "\"");
	state2.result = state2.anchorMap[alias];
	skipSeparationSpace(state2, true, -1);
	return true;
}
function composeNode(state2, parentIndent, nodeContext, allowToSeek, allowCompact) {
	var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
	if (state2.listener !== null) state2.listener("open", state2);
	state2.tag = null;
	state2.anchor = null;
	state2.kind = null;
	state2.result = null;
	allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
	if (allowToSeek) {
		if (skipSeparationSpace(state2, true, -1)) {
			atNewLine = true;
			if (state2.lineIndent > parentIndent) indentStatus = 1;
			else if (state2.lineIndent === parentIndent) indentStatus = 0;
			else if (state2.lineIndent < parentIndent) indentStatus = -1;
		}
	}
	if (indentStatus === 1) while (readTagProperty(state2) || readAnchorProperty(state2)) if (skipSeparationSpace(state2, true, -1)) {
		atNewLine = true;
		allowBlockCollections = allowBlockStyles;
		if (state2.lineIndent > parentIndent) indentStatus = 1;
		else if (state2.lineIndent === parentIndent) indentStatus = 0;
		else if (state2.lineIndent < parentIndent) indentStatus = -1;
	} else allowBlockCollections = false;
	if (allowBlockCollections) allowBlockCollections = atNewLine || allowCompact;
	if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
		if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) flowIndent = parentIndent;
		else flowIndent = parentIndent + 1;
		blockIndent = state2.position - state2.lineStart;
		if (indentStatus === 1) if (allowBlockCollections && (readBlockSequence(state2, blockIndent) || readBlockMapping(state2, blockIndent, flowIndent)) || readFlowCollection(state2, flowIndent)) hasContent = true;
		else {
			if (allowBlockScalars && readBlockScalar(state2, flowIndent) || readSingleQuotedScalar(state2, flowIndent) || readDoubleQuotedScalar(state2, flowIndent)) hasContent = true;
			else if (readAlias(state2)) {
				hasContent = true;
				if (state2.tag !== null || state2.anchor !== null) throwError(state2, "alias node should not have any properties");
			} else if (readPlainScalar(state2, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
				hasContent = true;
				if (state2.tag === null) state2.tag = "?";
			}
			if (state2.anchor !== null) state2.anchorMap[state2.anchor] = state2.result;
		}
		else if (indentStatus === 0) hasContent = allowBlockCollections && readBlockSequence(state2, blockIndent);
	}
	if (state2.tag === null) {
		if (state2.anchor !== null) state2.anchorMap[state2.anchor] = state2.result;
	} else if (state2.tag === "?") {
		if (state2.result !== null && state2.kind !== "scalar") throwError(state2, "unacceptable node kind for !<?> tag; it should be \"scalar\", not \"" + state2.kind + "\"");
		for (typeIndex = 0, typeQuantity = state2.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
			type2 = state2.implicitTypes[typeIndex];
			if (type2.resolve(state2.result)) {
				state2.result = type2.construct(state2.result);
				state2.tag = type2.tag;
				if (state2.anchor !== null) state2.anchorMap[state2.anchor] = state2.result;
				break;
			}
		}
	} else if (state2.tag !== "!") {
		if (_hasOwnProperty$1.call(state2.typeMap[state2.kind || "fallback"], state2.tag)) type2 = state2.typeMap[state2.kind || "fallback"][state2.tag];
		else {
			type2 = null;
			typeList = state2.typeMap.multi[state2.kind || "fallback"];
			for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) if (state2.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
				type2 = typeList[typeIndex];
				break;
			}
		}
		if (!type2) throwError(state2, "unknown tag !<" + state2.tag + ">");
		if (state2.result !== null && type2.kind !== state2.kind) throwError(state2, "unacceptable node kind for !<" + state2.tag + "> tag; it should be \"" + type2.kind + "\", not \"" + state2.kind + "\"");
		if (!type2.resolve(state2.result, state2.tag)) throwError(state2, "cannot resolve a node with !<" + state2.tag + "> explicit tag");
		else {
			state2.result = type2.construct(state2.result, state2.tag);
			if (state2.anchor !== null) state2.anchorMap[state2.anchor] = state2.result;
		}
	}
	if (state2.listener !== null) state2.listener("close", state2);
	return state2.tag !== null || state2.anchor !== null || hasContent;
}
function readDocument(state2) {
	var documentStart = state2.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
	state2.version = null;
	state2.checkLineBreaks = state2.legacy;
	state2.tagMap = /* @__PURE__ */ Object.create(null);
	state2.anchorMap = /* @__PURE__ */ Object.create(null);
	while ((ch = state2.input.charCodeAt(state2.position)) !== 0) {
		skipSeparationSpace(state2, true, -1);
		ch = state2.input.charCodeAt(state2.position);
		if (state2.lineIndent > 0 || ch !== 37) break;
		hasDirectives = true;
		ch = state2.input.charCodeAt(++state2.position);
		_position = state2.position;
		while (ch !== 0 && !is_WS_OR_EOL(ch)) ch = state2.input.charCodeAt(++state2.position);
		directiveName = state2.input.slice(_position, state2.position);
		directiveArgs = [];
		if (directiveName.length < 1) throwError(state2, "directive name must not be less than one character in length");
		while (ch !== 0) {
			while (is_WHITE_SPACE(ch)) ch = state2.input.charCodeAt(++state2.position);
			if (ch === 35) {
				do
					ch = state2.input.charCodeAt(++state2.position);
				while (ch !== 0 && !is_EOL(ch));
				break;
			}
			if (is_EOL(ch)) break;
			_position = state2.position;
			while (ch !== 0 && !is_WS_OR_EOL(ch)) ch = state2.input.charCodeAt(++state2.position);
			directiveArgs.push(state2.input.slice(_position, state2.position));
		}
		if (ch !== 0) readLineBreak(state2);
		if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) directiveHandlers[directiveName](state2, directiveName, directiveArgs);
		else throwWarning(state2, "unknown document directive \"" + directiveName + "\"");
	}
	skipSeparationSpace(state2, true, -1);
	if (state2.lineIndent === 0 && state2.input.charCodeAt(state2.position) === 45 && state2.input.charCodeAt(state2.position + 1) === 45 && state2.input.charCodeAt(state2.position + 2) === 45) {
		state2.position += 3;
		skipSeparationSpace(state2, true, -1);
	} else if (hasDirectives) throwError(state2, "directives end mark is expected");
	composeNode(state2, state2.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
	skipSeparationSpace(state2, true, -1);
	if (state2.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state2.input.slice(documentStart, state2.position))) throwWarning(state2, "non-ASCII line breaks are interpreted as content");
	state2.documents.push(state2.result);
	if (state2.position === state2.lineStart && testDocumentSeparator(state2)) {
		if (state2.input.charCodeAt(state2.position) === 46) {
			state2.position += 3;
			skipSeparationSpace(state2, true, -1);
		}
		return;
	}
	if (state2.position < state2.length - 1) throwError(state2, "end of the stream or a document separator is expected");
	else return;
}
function loadDocuments(input, options) {
	input = String(input);
	options = options || {};
	if (input.length !== 0) {
		if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) input += "\n";
		if (input.charCodeAt(0) === 65279) input = input.slice(1);
	}
	var state2 = new State$1(input, options);
	var nullpos = input.indexOf("\0");
	if (nullpos !== -1) {
		state2.position = nullpos;
		throwError(state2, "null byte is not allowed in input");
	}
	state2.input += "\0";
	while (state2.input.charCodeAt(state2.position) === 32) {
		state2.lineIndent += 1;
		state2.position += 1;
	}
	while (state2.position < state2.length - 1) readDocument(state2);
	return state2.documents;
}
function loadAll$1(input, iterator, options) {
	if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
		options = iterator;
		iterator = null;
	}
	var documents = loadDocuments(input, options);
	if (typeof iterator !== "function") return documents;
	for (var index = 0, length = documents.length; index < length; index += 1) iterator(documents[index]);
}
function load$1(input, options) {
	var documents = loadDocuments(input, options);
	if (documents.length === 0) return;
	else if (documents.length === 1) return documents[0];
	throw new exception("expected a single document in the stream, but found more");
}
var loader = {
	loadAll: loadAll$1,
	load: load$1
};
var JSON_SCHEMA = json;
var load = loader.load;
function extractFrontMatter(text) {
	const matches = text.match(frontMatterRegex);
	if (!matches) return {
		text,
		metadata: {}
	};
	let parsed = load(matches[1], { schema: JSON_SCHEMA }) ?? {};
	parsed = typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
	const metadata = {};
	if (parsed.displayMode) metadata.displayMode = parsed.displayMode.toString();
	if (parsed.title) metadata.title = parsed.title.toString();
	if (parsed.config) metadata.config = parsed.config;
	return {
		text: text.slice(matches[0].length),
		metadata
	};
}
var cleanupText = (code) => {
	return code.replace(/\r\n?/g, "\n").replace(/<(\w+)([^>]*)>/g, (match, tag, attributes) => "<" + tag + attributes.replace(/="([^"]*)"/g, "='$1'") + ">");
};
var processFrontmatter = (code) => {
	const { text, metadata } = extractFrontMatter(code);
	const { displayMode, title, config: config2 = {} } = metadata;
	if (displayMode) {
		if (!config2.gantt) config2.gantt = {};
		config2.gantt.displayMode = displayMode;
	}
	return {
		title,
		config: config2,
		text
	};
};
var processDirectives = (code) => {
	const initDirective = utils.detectInit(code) ?? {};
	const wrapDirectives = utils.detectDirective(code, "wrap");
	if (Array.isArray(wrapDirectives)) initDirective.wrap = wrapDirectives.some(({ type: type2 }) => {});
	else if ((wrapDirectives == null ? void 0 : wrapDirectives.type) === "wrap") initDirective.wrap = true;
	return {
		text: removeDirectives(code),
		directive: initDirective
	};
};
function preprocessDiagram(code) {
	const frontMatterResult = processFrontmatter(cleanupText(code));
	const directiveResult = processDirectives(frontMatterResult.text);
	const config2 = cleanAndMerge(frontMatterResult.config, directiveResult.directive);
	code = cleanupComments(directiveResult.text);
	return {
		code,
		title: frontMatterResult.title,
		config: config2
	};
}
var MAX_TEXTLENGTH = 5e4;
var MAX_TEXTLENGTH_EXCEEDED_MSG = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
var SECURITY_LVL_SANDBOX = "sandbox";
var SECURITY_LVL_LOOSE = "loose";
var XMLNS_SVG_STD = "http://www.w3.org/2000/svg";
var XMLNS_XLINK_STD = "http://www.w3.org/1999/xlink";
var XMLNS_XHTML_STD = "http://www.w3.org/1999/xhtml";
var IFRAME_WIDTH = "100%";
var IFRAME_HEIGHT = "100%";
var IFRAME_STYLES = "border:0;margin:0;";
var IFRAME_BODY_STYLE = "margin:0";
var IFRAME_SANDBOX_OPTS = "allow-top-navigation-by-user-activation allow-popups";
var IFRAME_NOT_SUPPORTED_MSG = "The \"iframe\" tag is not supported by your browser.";
var DOMPURIFY_TAGS = ["foreignobject"];
var DOMPURIFY_ATTR = ["dominant-baseline"];
function processAndSetConfigs(text) {
	const processed = preprocessDiagram(text);
	reset();
	addDirective(processed.config ?? {});
	return processed;
}
async function parse$1(text, parseOptions) {
	addDiagrams();
	text = processAndSetConfigs(text).code;
	try {
		await getDiagramFromText(text);
	} catch (error) {
		if (parseOptions == null ? void 0 : parseOptions.suppressErrors) return false;
		throw error;
	}
	return true;
}
var cssImportantStyles = (cssClass, element, cssClasses = []) => {
	return `
.${cssClass} ${element} { ${cssClasses.join(" !important; ")} !important; }`;
};
var createCssStyles = (config2, classDefs = {}) => {
	var _a;
	let cssStyles = "";
	if (config2.themeCSS !== void 0) cssStyles += `
${config2.themeCSS}`;
	if (config2.fontFamily !== void 0) cssStyles += `
:root { --mermaid-font-family: ${config2.fontFamily}}`;
	if (config2.altFontFamily !== void 0) cssStyles += `
:root { --mermaid-alt-font-family: ${config2.altFontFamily}}`;
	if (!isEmpty_default(classDefs)) {
		const cssElements = config2.htmlLabels || ((_a = config2.flowchart) == null ? void 0 : _a.htmlLabels) ? ["> *", "span"] : [
			"rect",
			"polygon",
			"ellipse",
			"circle",
			"path"
		];
		for (const classId in classDefs) {
			const styleClassDef = classDefs[classId];
			if (!isEmpty_default(styleClassDef.styles)) cssElements.forEach((cssElement) => {
				cssStyles += cssImportantStyles(styleClassDef.id, cssElement, styleClassDef.styles);
			});
			if (!isEmpty_default(styleClassDef.textStyles)) cssStyles += cssImportantStyles(styleClassDef.id, "tspan", styleClassDef.textStyles);
		}
	}
	return cssStyles;
};
var createUserStyles = (config2, graphType, classDefs, svgId) => {
	return serialize(compile(`${svgId}{${getStyles$1(graphType, createCssStyles(config2, classDefs), config2.themeVariables)}}`), stringify);
};
var cleanUpSvgCode = (svgCode = "", inSandboxMode, useArrowMarkerUrls) => {
	let cleanedUpSvg = svgCode;
	if (!useArrowMarkerUrls && !inSandboxMode) cleanedUpSvg = cleanedUpSvg.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, "marker-end=\"url(#");
	cleanedUpSvg = decodeEntities(cleanedUpSvg);
	cleanedUpSvg = cleanedUpSvg.replace(/<br>/g, "<br/>");
	return cleanedUpSvg;
};
var putIntoIFrame = (svgCode = "", svgElement) => {
	var _a, _b;
	return `<iframe style="width:${IFRAME_WIDTH};height:${((_b = (_a = svgElement == null ? void 0 : svgElement.viewBox) == null ? void 0 : _a.baseVal) == null ? void 0 : _b.height) ? svgElement.viewBox.baseVal.height + "px" : IFRAME_HEIGHT};${IFRAME_STYLES}" src="data:text/html;base64,${btoa("<body style=\"" + IFRAME_BODY_STYLE + "\">" + svgCode + "</body>")}" sandbox="${IFRAME_SANDBOX_OPTS}">
  ${IFRAME_NOT_SUPPORTED_MSG}
</iframe>`;
};
var appendDivSvgG = (parentRoot, id2, enclosingDivId, divStyle, svgXlink) => {
	const enclosingDiv = parentRoot.append("div");
	enclosingDiv.attr("id", enclosingDivId);
	if (divStyle) enclosingDiv.attr("style", divStyle);
	const svgNode = enclosingDiv.append("svg").attr("id", id2).attr("width", "100%").attr("xmlns", XMLNS_SVG_STD);
	if (svgXlink) svgNode.attr("xmlns:xlink", svgXlink);
	svgNode.append("g");
	return parentRoot;
};
function sandboxedIframe(parentNode, iFrameId) {
	return parentNode.append("iframe").attr("id", iFrameId).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
var removeExistingElements = (doc, id2, divId, iFrameId) => {
	var _a, _b, _c;
	(_a = doc.getElementById(id2)) == null || _a.remove();
	(_b = doc.getElementById(divId)) == null || _b.remove();
	(_c = doc.getElementById(iFrameId)) == null || _c.remove();
};
var render$1 = async function(id2, text, svgContainingElement) {
	var _a, _b, _c, _d, _e, _f;
	addDiagrams();
	const processed = processAndSetConfigs(text);
	text = processed.code;
	const config2 = getConfig$1();
	log$1.debug(config2);
	if (text.length > ((config2 == null ? void 0 : config2.maxTextSize) ?? MAX_TEXTLENGTH)) text = MAX_TEXTLENGTH_EXCEEDED_MSG;
	const idSelector = "#" + id2;
	const iFrameID = "i" + id2;
	const iFrameID_selector = "#" + iFrameID;
	const enclosingDivID = "d" + id2;
	const enclosingDivID_selector = "#" + enclosingDivID;
	let root = select_default("body");
	const isSandboxed = config2.securityLevel === SECURITY_LVL_SANDBOX;
	const isLooseSecurityLevel = config2.securityLevel === SECURITY_LVL_LOOSE;
	const fontFamily = config2.fontFamily;
	if (svgContainingElement !== void 0) {
		if (svgContainingElement) svgContainingElement.innerHTML = "";
		if (isSandboxed) {
			root = select_default(sandboxedIframe(select_default(svgContainingElement), iFrameID).nodes()[0].contentDocument.body);
			root.node().style.margin = 0;
		} else root = select_default(svgContainingElement);
		appendDivSvgG(root, id2, enclosingDivID, `font-family: ${fontFamily}`, XMLNS_XLINK_STD);
	} else {
		removeExistingElements(document, id2, enclosingDivID, iFrameID);
		if (isSandboxed) {
			root = select_default(sandboxedIframe(select_default("body"), iFrameID).nodes()[0].contentDocument.body);
			root.node().style.margin = 0;
		} else root = select_default("body");
		appendDivSvgG(root, id2, enclosingDivID);
	}
	let diag;
	let parseEncounteredException;
	try {
		diag = await getDiagramFromText(text, { title: processed.title });
	} catch (error) {
		diag = new Diagram("error");
		parseEncounteredException = error;
	}
	const element = root.select(enclosingDivID_selector).node();
	const diagramType = diag.type;
	const svg = element.firstChild;
	const firstChild = svg.firstChild;
	const rules = createUserStyles(config2, diagramType, (_b = (_a = diag.renderer).getClasses) == null ? void 0 : _b.call(_a, text, diag), idSelector);
	const style1 = document.createElement("style");
	style1.innerHTML = rules;
	svg.insertBefore(style1, firstChild);
	try {
		await diag.renderer.draw(text, id2, version, diag);
	} catch (e) {
		errorRenderer.draw(text, id2, version);
		throw e;
	}
	addA11yInfo(diagramType, root.select(`${enclosingDivID_selector} svg`), (_d = (_c = diag.db).getAccTitle) == null ? void 0 : _d.call(_c), (_f = (_e = diag.db).getAccDescription) == null ? void 0 : _f.call(_e));
	root.select(`[id="${id2}"]`).selectAll("foreignobject > *").attr("xmlns", XMLNS_XHTML_STD);
	let svgCode = root.select(enclosingDivID_selector).node().innerHTML;
	log$1.debug("config.arrowMarkerAbsolute", config2.arrowMarkerAbsolute);
	svgCode = cleanUpSvgCode(svgCode, isSandboxed, evaluate(config2.arrowMarkerAbsolute));
	if (isSandboxed) {
		const svgEl = root.select(enclosingDivID_selector + " svg").node();
		svgCode = putIntoIFrame(svgCode, svgEl);
	} else if (!isLooseSecurityLevel) svgCode = import_purify.default.sanitize(svgCode, {
		ADD_TAGS: DOMPURIFY_TAGS,
		ADD_ATTR: DOMPURIFY_ATTR
	});
	attachFunctions();
	if (parseEncounteredException) throw parseEncounteredException;
	const node = select_default(isSandboxed ? iFrameID_selector : enclosingDivID_selector).node();
	if (node && "remove" in node) node.remove();
	return {
		svg: svgCode,
		bindFunctions: diag.db.bindFunctions
	};
};
function initialize$1(options = {}) {
	var _a;
	if ((options == null ? void 0 : options.fontFamily) && !((_a = options.themeVariables) == null ? void 0 : _a.fontFamily)) {
		if (!options.themeVariables) options.themeVariables = {};
		options.themeVariables.fontFamily = options.fontFamily;
	}
	saveConfigFromInitialize(options);
	if ((options == null ? void 0 : options.theme) && options.theme in theme) options.themeVariables = theme[options.theme].getThemeVariables(options.themeVariables);
	else if (options) options.themeVariables = theme.default.getThemeVariables(options.themeVariables);
	setLogLevel$1((typeof options === "object" ? setSiteConfig(options) : getSiteConfig()).logLevel);
	addDiagrams();
}
var getDiagramFromText = (text, metadata = {}) => {
	const { code } = preprocessDiagram(text);
	return getDiagramFromText$1(code, metadata);
};
function addA11yInfo(diagramType, svgNode, a11yTitle, a11yDescr) {
	setA11yDiagramInfo(svgNode, diagramType);
	addSVGa11yTitleDescription(svgNode, a11yTitle, a11yDescr, svgNode.attr("id"));
}
var mermaidAPI = Object.freeze({
	render: render$1,
	parse: parse$1,
	getDiagramFromText,
	initialize: initialize$1,
	getConfig: getConfig$1,
	setConfig: setConfig$1,
	getSiteConfig,
	updateSiteConfig,
	reset: () => {
		reset();
	},
	globalReset: () => {
		reset(defaultConfig$1);
	},
	defaultConfig: defaultConfig$1
});
setLogLevel$1(getConfig$1().logLevel);
reset(getConfig$1());
var loadRegisteredDiagrams = async () => {
	log$1.debug(`Loading registered diagrams`);
	const failed = (await Promise.allSettled(Object.entries(detectors).map(async ([key, { detector: detector2, loader: loader2 }]) => {
		if (loader2) try {
			getDiagram(key);
		} catch (error) {
			try {
				const { diagram: diagram2, id: id2 } = await loader2();
				registerDiagram(id2, diagram2, detector2);
			} catch (err) {
				log$1.error(`Failed to load external diagram with key ${key}. Removing from detectors.`);
				delete detectors[key];
				throw err;
			}
		}
	}))).filter((result) => result.status === "rejected");
	if (failed.length > 0) {
		log$1.error(`Failed to load ${failed.length} external diagrams`);
		for (const res of failed) log$1.error(res);
		throw new Error(`Failed to load ${failed.length} external diagrams`);
	}
};
var handleError = (error, errors, parseError) => {
	log$1.warn(error);
	if (isDetailedError(error)) {
		if (parseError) parseError(error.str, error.hash);
		errors.push({
			...error,
			message: error.str,
			error
		});
	} else {
		if (parseError) parseError(error);
		if (error instanceof Error) errors.push({
			str: error.message,
			message: error.message,
			hash: error.name,
			error
		});
	}
};
var run = async function(options = { querySelector: ".mermaid" }) {
	try {
		await runThrowsErrors(options);
	} catch (e) {
		if (isDetailedError(e)) log$1.error(e.str);
		if (mermaid.parseError) mermaid.parseError(e);
		if (!options.suppressErrors) {
			log$1.error("Use the suppressErrors option to suppress these errors");
			throw e;
		}
	}
};
var runThrowsErrors = async function({ postRenderCallback, querySelector, nodes } = { querySelector: ".mermaid" }) {
	const conf = mermaidAPI.getConfig();
	log$1.debug(`${!postRenderCallback ? "No " : ""}Callback function found`);
	let nodesToProcess;
	if (nodes) nodesToProcess = nodes;
	else if (querySelector) nodesToProcess = document.querySelectorAll(querySelector);
	else throw new Error("Nodes and querySelector are both undefined");
	log$1.debug(`Found ${nodesToProcess.length} diagrams`);
	if ((conf == null ? void 0 : conf.startOnLoad) !== void 0) {
		log$1.debug("Start On Load: " + (conf == null ? void 0 : conf.startOnLoad));
		mermaidAPI.updateSiteConfig({ startOnLoad: conf == null ? void 0 : conf.startOnLoad });
	}
	const idGenerator = new utils.InitIDGenerator(conf.deterministicIds, conf.deterministicIDSeed);
	let txt;
	const errors = [];
	for (const element of Array.from(nodesToProcess)) {
		log$1.info("Rendering diagram: " + element.id);
		if (element.getAttribute("data-processed")) continue;
		element.setAttribute("data-processed", "true");
		const id2 = `mermaid-${idGenerator.next()}`;
		txt = element.innerHTML;
		txt = dedent(utils.entityDecode(txt)).trim().replace(/<br\s*\/?>/gi, "<br/>");
		const init2 = utils.detectInit(txt);
		if (init2) log$1.debug("Detected early reinit: ", init2);
		try {
			const { svg, bindFunctions } = await render(id2, txt, element);
			element.innerHTML = svg;
			if (postRenderCallback) await postRenderCallback(id2);
			if (bindFunctions) bindFunctions(element);
		} catch (error) {
			handleError(error, errors, mermaid.parseError);
		}
	}
	if (errors.length > 0) throw errors[0];
};
var initialize = function(config2) {
	mermaidAPI.initialize(config2);
};
var init = async function(config2, nodes, callback) {
	log$1.warn("mermaid.init is deprecated. Please use run instead.");
	if (config2) initialize(config2);
	const runOptions = {
		postRenderCallback: callback,
		querySelector: ".mermaid"
	};
	if (typeof nodes === "string") runOptions.querySelector = nodes;
	else if (nodes) if (nodes instanceof HTMLElement) runOptions.nodes = [nodes];
	else runOptions.nodes = nodes;
	await run(runOptions);
};
var registerExternalDiagrams = async (diagrams2, { lazyLoad = true } = {}) => {
	registerLazyLoadedDiagrams(...diagrams2);
	if (lazyLoad === false) await loadRegisteredDiagrams();
};
var contentLoaded = function() {
	if (mermaid.startOnLoad) {
		const { startOnLoad } = mermaidAPI.getConfig();
		if (startOnLoad) mermaid.run().catch((err) => log$1.error("Mermaid failed to initialize", err));
	}
};
if (typeof document !== "undefined") window.addEventListener("load", contentLoaded, false);
var setParseErrorHandler = function(parseErrorHandler) {
	mermaid.parseError = parseErrorHandler;
};
var executionQueue = [];
var executionQueueRunning = false;
var executeQueue = async () => {
	if (executionQueueRunning) return;
	executionQueueRunning = true;
	while (executionQueue.length > 0) {
		const f = executionQueue.shift();
		if (f) try {
			await f();
		} catch (e) {
			log$1.error("Error executing queue", e);
		}
	}
	executionQueueRunning = false;
};
var parse = async (text, parseOptions) => {
	return new Promise((resolve, reject) => {
		const performCall = () => new Promise((res, rej) => {
			mermaidAPI.parse(text, parseOptions).then((r) => {
				res(r);
				resolve(r);
			}, (e) => {
				var _a;
				log$1.error("Error parsing", e);
				(_a = mermaid.parseError) == null || _a.call(mermaid, e);
				rej(e);
				reject(e);
			});
		});
		executionQueue.push(performCall);
		executeQueue().catch(reject);
	});
};
var render = (id2, text, container) => {
	return new Promise((resolve, reject) => {
		const performCall = () => new Promise((res, rej) => {
			mermaidAPI.render(id2, text, container).then((r) => {
				res(r);
				resolve(r);
			}, (e) => {
				var _a;
				log$1.error("Error parsing", e);
				(_a = mermaid.parseError) == null || _a.call(mermaid, e);
				rej(e);
				reject(e);
			});
		});
		executionQueue.push(performCall);
		executeQueue().catch(reject);
	});
};
var mermaid = {
	startOnLoad: true,
	mermaidAPI,
	parse,
	render,
	init,
	run,
	registerExternalDiagrams,
	initialize,
	parseError: void 0,
	contentLoaded,
	setParseErrorHandler,
	detectType
};
export { keysIn_default as $, random as A, is_dark_default as At, utils as B, atan2 as Bt, hasKatex as C, _Stack_default as Ct, mermaid as D, isFunction_default as Dt, log$1 as E, eq_default as Et, setAccTitle as F, basis_default as Ft, _baseKeys_default as G, min as Gt, isEmpty_default as H, epsilon as Ht, setConfig as I, linear_default as It, _baseRest_default as J, sqrt as Jt, merge_default as K, pi as Kt, setDiagramTitle as L, abs as Lt, sanitizeText$2 as M, color_default as Mt, selectSvgElement as N, utils_default as Nt, parseFontSize as O, darken_default as Ot, setAccDescription as P, require_purify as Pt, identity_default as Q, setupGraphViewbox as R, acos as Rt, getThemeVariables$2 as S, _baseAssignValue_default as St, lineBreakRegex as T, _MapCache_default as Tt, _getTag_default as U, halfPi as Ut, wrapLabel as V, cos as Vt, _Set_default as W, max as Wt, constant_default as X, require_dayjs_min as Xt, _setToString_default as Y, tau as Yt, _overRest_default as Z, dedent as Zt, getAccTitle as _, _cloneTypedArray_default as _t, calculateTextWidth as a, _nodeUtil_default as at, getDiagramTitle as b, _cloneBuffer_default as bt, common$1 as c, isBuffer_default as ct, decodeEntities as d, isLength_default as dt, _arrayLikeKeys_default as et, defaultConfig as f, isArray_default as ft, getAccDescription as g, _copyArray_default as gt, generateId as h, _getPrototype_default as ht, calculateTextHeight as i, isTypedArray_default as it, renderKatex as j, rgba_default as jt, parseGenericTypes as k, lighten_default as kt, commonDb as l, isArrayLikeObject_default as lt, evaluate as m, _initCloneObject_default as mt, assignWithDepth$1 as n, _copyObject_default as nt, cleanAndMerge as o, _baseUnary_default as ot, defaultConfig$2 as p, isArguments_default as pt, _isIterateeCall_default as q, sin as qt, calculateMathMLDimensions as r, _assignValue_default as rt, clear as s, isPlainObject_default as st, ZERO_WIDTH_SPACE as t, _isIndex_default as tt, configureSvgSize as u, isArrayLike_default as ut, getConfig as v, _cloneArrayBuffer_default as vt, interpolateToCurve as w, memoize_default as wt, getStylesFromArray as x, _baseFor_default as xt, getConfig$1 as y, _Uint8Array_default as yt, setupGraphViewbox$1 as z, asin as zt };
