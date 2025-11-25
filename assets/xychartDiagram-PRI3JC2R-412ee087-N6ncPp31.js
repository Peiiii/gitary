import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { F as require_react, P as require_jsx_runtime, w as require_react_dom } from "./chakra-ui-BP0KsvPN.js";
import { k as require_lodash } from "./react-utils-CBnCOsPf.js";
import { t as require_client } from "./vendor-D4MyOtoJ.js";
import "./common-utils-oTrucMut.js";
import "./monaco-DGZQwLgt.js";
import "./react-markdown-CC4NHZ99.js";
import "./remark-gfm-BOrJohj3.js";
import { $n as require_markdown_it_task_lists, $t as iT, Ct as _e, Ln as w5, Ot as b5, Qn as require_pinyin, R as Mf, Vn as x5, W as P6, Wn as y5, Yn as zL, cn as lu, dn as m5, er as require_markdown_it_multimd_table, et as R, ft as V8, gt as Xt, nn as k5, un as m, w as If, wi as require_classnames, xt as _5 } from "./app-B8S090XF.js";
import "./defaultLocale-2db4a961-D4e7yott.js";
import { t } from "./init-f9637058-mGOscHBv.js";
import { t as h } from "./ordinal-980380c7-2fIs9QWo.js";
import { i as cn } from "./linear-955cbded-BBqj977p.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
function Ri(e, t$1, i) {
	e = +e, t$1 = +t$1, i = (n = arguments.length) < 2 ? (t$1 = e, e = 0, 1) : n < 3 ? 1 : +i;
	for (var s = -1, n = Math.max(0, Math.ceil((t$1 - e) / i)) | 0, r = new Array(n); ++s < n;) r[s] = e + s * i;
	return r;
}
function bt() {
	var e = h().unknown(void 0), t$1 = e.domain, i = e.range, s = 0, n = 1, r, g, m$1 = !1, f = 0, k = 0, v = .5;
	delete e.unknown;
	function C() {
		var b = t$1().length, E = n < s, D = E ? n : s, P = E ? s : n;
		r = (P - D) / Math.max(1, b - f + k * 2), m$1 && (r = Math.floor(r)), D += (P - D - r * (b - f)) * v, g = r * (1 - f), m$1 && (D = Math.round(D), g = Math.round(g));
		var I = Ri(b).map(function(y) {
			return D + r * y;
		});
		return i(E ? I.reverse() : I);
	}
	return e.domain = function(b) {
		return arguments.length ? (t$1(b), C()) : t$1();
	}, e.range = function(b) {
		return arguments.length ? ([s, n] = b, s = +s, n = +n, C()) : [s, n];
	}, e.rangeRound = function(b) {
		return [s, n] = b, s = +s, n = +n, m$1 = !0, C();
	}, e.bandwidth = function() {
		return g;
	}, e.step = function() {
		return r;
	}, e.round = function(b) {
		return arguments.length ? (m$1 = !!b, C()) : m$1;
	}, e.padding = function(b) {
		return arguments.length ? (f = Math.min(1, k = +b), C()) : f;
	}, e.paddingInner = function(b) {
		return arguments.length ? (f = Math.min(1, b), C()) : f;
	}, e.paddingOuter = function(b) {
		return arguments.length ? (k = +b, C()) : k;
	}, e.align = function(b) {
		return arguments.length ? (v = Math.max(0, Math.min(1, b)), C()) : v;
	}, e.copy = function() {
		return bt(t$1(), [s, n]).round(m$1).paddingInner(f).paddingOuter(k).align(v);
	}, t.apply(C(), arguments);
}
var At = function() {
	var e = /* @__PURE__ */ m(function(O, h$1, u, x) {
		for (u = u || {}, x = O.length; x--; u[O[x]] = h$1);
		return u;
	}, "o"), t$1 = [
		1,
		10,
		12,
		14,
		16,
		18,
		19,
		21,
		23
	], i = [2, 6], s = [1, 3], n = [1, 5], r = [1, 6], g = [1, 7], m$1 = [
		1,
		5,
		10,
		12,
		14,
		16,
		18,
		19,
		21,
		23,
		34,
		35,
		36
	], f = [1, 25], k = [1, 26], v = [1, 28], C = [1, 29], b = [1, 30], E = [1, 31], D = [1, 32], P = [1, 33], I = [1, 34], y = [1, 35], _ = [1, 36], c = [1, 37], W = [1, 43], z = [1, 42], U = [1, 47], X = [1, 50], l = [
		1,
		10,
		12,
		14,
		16,
		18,
		19,
		21,
		23,
		34,
		35,
		36
	], L = [
		1,
		10,
		12,
		14,
		16,
		18,
		19,
		21,
		23,
		24,
		26,
		27,
		28,
		34,
		35,
		36
	], S = [
		1,
		10,
		12,
		14,
		16,
		18,
		19,
		21,
		23,
		24,
		26,
		27,
		28,
		34,
		35,
		36,
		41,
		42,
		43,
		44,
		45,
		46,
		47,
		48,
		49,
		50
	], R$1 = [1, 64], $ = {
		trace: /* @__PURE__ */ m(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			eol: 4,
			XYCHART: 5,
			chartConfig: 6,
			document: 7,
			CHART_ORIENTATION: 8,
			statement: 9,
			title: 10,
			text: 11,
			X_AXIS: 12,
			parseXAxis: 13,
			Y_AXIS: 14,
			parseYAxis: 15,
			LINE: 16,
			plotData: 17,
			BAR: 18,
			acc_title: 19,
			acc_title_value: 20,
			acc_descr: 21,
			acc_descr_value: 22,
			acc_descr_multiline_value: 23,
			SQUARE_BRACES_START: 24,
			commaSeparatedNumbers: 25,
			SQUARE_BRACES_END: 26,
			NUMBER_WITH_DECIMAL: 27,
			COMMA: 28,
			xAxisData: 29,
			bandData: 30,
			ARROW_DELIMITER: 31,
			commaSeparatedTexts: 32,
			yAxisData: 33,
			NEWLINE: 34,
			SEMI: 35,
			EOF: 36,
			alphaNum: 37,
			STR: 38,
			MD_STR: 39,
			alphaNumToken: 40,
			AMP: 41,
			NUM: 42,
			ALPHA: 43,
			PLUS: 44,
			EQUALS: 45,
			MULT: 46,
			DOT: 47,
			BRKT: 48,
			MINUS: 49,
			UNDERSCORE: 50,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			5: "XYCHART",
			8: "CHART_ORIENTATION",
			10: "title",
			12: "X_AXIS",
			14: "Y_AXIS",
			16: "LINE",
			18: "BAR",
			19: "acc_title",
			20: "acc_title_value",
			21: "acc_descr",
			22: "acc_descr_value",
			23: "acc_descr_multiline_value",
			24: "SQUARE_BRACES_START",
			26: "SQUARE_BRACES_END",
			27: "NUMBER_WITH_DECIMAL",
			28: "COMMA",
			31: "ARROW_DELIMITER",
			34: "NEWLINE",
			35: "SEMI",
			36: "EOF",
			38: "STR",
			39: "MD_STR",
			41: "AMP",
			42: "NUM",
			43: "ALPHA",
			44: "PLUS",
			45: "EQUALS",
			46: "MULT",
			47: "DOT",
			48: "BRKT",
			49: "MINUS",
			50: "UNDERSCORE"
		},
		productions_: [
			0,
			[3, 2],
			[3, 3],
			[3, 2],
			[3, 1],
			[6, 1],
			[7, 0],
			[7, 2],
			[9, 2],
			[9, 2],
			[9, 2],
			[9, 2],
			[9, 2],
			[9, 3],
			[9, 2],
			[9, 3],
			[9, 2],
			[9, 2],
			[9, 1],
			[17, 3],
			[25, 3],
			[25, 1],
			[13, 1],
			[13, 2],
			[13, 1],
			[29, 1],
			[29, 3],
			[30, 3],
			[32, 3],
			[32, 1],
			[15, 1],
			[15, 2],
			[15, 1],
			[33, 3],
			[4, 1],
			[4, 1],
			[4, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[37, 1],
			[37, 2],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1],
			[40, 1]
		],
		performAction: /* @__PURE__ */ m(function(h$1, u, x, p, w, o, j) {
			var d = o.length - 1;
			switch (w) {
				case 5:
					p.setOrientation(o[d]);
					break;
				case 9:
					p.setDiagramTitle(o[d].text.trim());
					break;
				case 12:
					p.setLineData({
						text: "",
						type: "text"
					}, o[d]);
					break;
				case 13:
					p.setLineData(o[d - 1], o[d]);
					break;
				case 14:
					p.setBarData({
						text: "",
						type: "text"
					}, o[d]);
					break;
				case 15:
					p.setBarData(o[d - 1], o[d]);
					break;
				case 16:
					this.$ = o[d].trim(), p.setAccTitle(this.$);
					break;
				case 17:
				case 18:
					this.$ = o[d].trim(), p.setAccDescription(this.$);
					break;
				case 19:
					this.$ = o[d - 1];
					break;
				case 20:
					this.$ = [Number(o[d - 2]), ...o[d]];
					break;
				case 21:
					this.$ = [Number(o[d])];
					break;
				case 22:
					p.setXAxisTitle(o[d]);
					break;
				case 23:
					p.setXAxisTitle(o[d - 1]);
					break;
				case 24:
					p.setXAxisTitle({
						type: "text",
						text: ""
					});
					break;
				case 25:
					p.setXAxisBand(o[d]);
					break;
				case 26:
					p.setXAxisRangeData(Number(o[d - 2]), Number(o[d]));
					break;
				case 27:
					this.$ = o[d - 1];
					break;
				case 28:
					this.$ = [o[d - 2], ...o[d]];
					break;
				case 29:
					this.$ = [o[d]];
					break;
				case 30:
					p.setYAxisTitle(o[d]);
					break;
				case 31:
					p.setYAxisTitle(o[d - 1]);
					break;
				case 32:
					p.setYAxisTitle({
						type: "text",
						text: ""
					});
					break;
				case 33:
					p.setYAxisRangeData(Number(o[d - 2]), Number(o[d]));
					break;
				case 37:
					this.$ = {
						text: o[d],
						type: "text"
					};
					break;
				case 38:
					this.$ = {
						text: o[d],
						type: "text"
					};
					break;
				case 39:
					this.$ = {
						text: o[d],
						type: "markdown"
					};
					break;
				case 40:
					this.$ = o[d];
					break;
				case 41:
					this.$ = o[d - 1] + "" + o[d];
					break;
			}
		}, "anonymous"),
		table: [
			e(t$1, i, {
				3: 1,
				4: 2,
				7: 4,
				5: s,
				34: n,
				35: r,
				36: g
			}),
			{ 1: [3] },
			e(t$1, i, {
				4: 2,
				7: 4,
				3: 8,
				5: s,
				34: n,
				35: r,
				36: g
			}),
			e(t$1, i, {
				4: 2,
				7: 4,
				6: 9,
				3: 10,
				5: s,
				8: [1, 11],
				34: n,
				35: r,
				36: g
			}),
			{
				1: [2, 4],
				9: 12,
				10: [1, 13],
				12: [1, 14],
				14: [1, 15],
				16: [1, 16],
				18: [1, 17],
				19: [1, 18],
				21: [1, 19],
				23: [1, 20]
			},
			e(m$1, [2, 34]),
			e(m$1, [2, 35]),
			e(m$1, [2, 36]),
			{ 1: [2, 1] },
			e(t$1, i, {
				4: 2,
				7: 4,
				3: 21,
				5: s,
				34: n,
				35: r,
				36: g
			}),
			{ 1: [2, 3] },
			e(m$1, [2, 5]),
			e(t$1, [2, 7], {
				4: 22,
				34: n,
				35: r,
				36: g
			}),
			{
				11: 23,
				37: 24,
				38: f,
				39: k,
				40: 27,
				41: v,
				42: C,
				43: b,
				44: E,
				45: D,
				46: P,
				47: I,
				48: y,
				49: _,
				50: c
			},
			{
				11: 39,
				13: 38,
				24: W,
				27: z,
				29: 40,
				30: 41,
				37: 24,
				38: f,
				39: k,
				40: 27,
				41: v,
				42: C,
				43: b,
				44: E,
				45: D,
				46: P,
				47: I,
				48: y,
				49: _,
				50: c
			},
			{
				11: 45,
				15: 44,
				27: U,
				33: 46,
				37: 24,
				38: f,
				39: k,
				40: 27,
				41: v,
				42: C,
				43: b,
				44: E,
				45: D,
				46: P,
				47: I,
				48: y,
				49: _,
				50: c
			},
			{
				11: 49,
				17: 48,
				24: X,
				37: 24,
				38: f,
				39: k,
				40: 27,
				41: v,
				42: C,
				43: b,
				44: E,
				45: D,
				46: P,
				47: I,
				48: y,
				49: _,
				50: c
			},
			{
				11: 52,
				17: 51,
				24: X,
				37: 24,
				38: f,
				39: k,
				40: 27,
				41: v,
				42: C,
				43: b,
				44: E,
				45: D,
				46: P,
				47: I,
				48: y,
				49: _,
				50: c
			},
			{ 20: [1, 53] },
			{ 22: [1, 54] },
			e(l, [2, 18]),
			{ 1: [2, 2] },
			e(l, [2, 8]),
			e(l, [2, 9]),
			e(L, [2, 37], {
				40: 55,
				41: v,
				42: C,
				43: b,
				44: E,
				45: D,
				46: P,
				47: I,
				48: y,
				49: _,
				50: c
			}),
			e(L, [2, 38]),
			e(L, [2, 39]),
			e(S, [2, 40]),
			e(S, [2, 42]),
			e(S, [2, 43]),
			e(S, [2, 44]),
			e(S, [2, 45]),
			e(S, [2, 46]),
			e(S, [2, 47]),
			e(S, [2, 48]),
			e(S, [2, 49]),
			e(S, [2, 50]),
			e(S, [2, 51]),
			e(l, [2, 10]),
			e(l, [2, 22], {
				30: 41,
				29: 56,
				24: W,
				27: z
			}),
			e(l, [2, 24]),
			e(l, [2, 25]),
			{ 31: [1, 57] },
			{
				11: 59,
				32: 58,
				37: 24,
				38: f,
				39: k,
				40: 27,
				41: v,
				42: C,
				43: b,
				44: E,
				45: D,
				46: P,
				47: I,
				48: y,
				49: _,
				50: c
			},
			e(l, [2, 11]),
			e(l, [2, 30], {
				33: 60,
				27: U
			}),
			e(l, [2, 32]),
			{ 31: [1, 61] },
			e(l, [2, 12]),
			{
				17: 62,
				24: X
			},
			{
				25: 63,
				27: R$1
			},
			e(l, [2, 14]),
			{
				17: 65,
				24: X
			},
			e(l, [2, 16]),
			e(l, [2, 17]),
			e(S, [2, 41]),
			e(l, [2, 23]),
			{ 27: [1, 66] },
			{ 26: [1, 67] },
			{
				26: [2, 29],
				28: [1, 68]
			},
			e(l, [2, 31]),
			{ 27: [1, 69] },
			e(l, [2, 13]),
			{ 26: [1, 70] },
			{
				26: [2, 21],
				28: [1, 71]
			},
			e(l, [2, 15]),
			e(l, [2, 26]),
			e(l, [2, 27]),
			{
				11: 59,
				32: 72,
				37: 24,
				38: f,
				39: k,
				40: 27,
				41: v,
				42: C,
				43: b,
				44: E,
				45: D,
				46: P,
				47: I,
				48: y,
				49: _,
				50: c
			},
			e(l, [2, 33]),
			e(l, [2, 19]),
			{
				25: 73,
				27: R$1
			},
			{ 26: [2, 28] },
			{ 26: [2, 20] }
		],
		defaultActions: {
			8: [2, 1],
			10: [2, 3],
			21: [2, 2],
			72: [2, 28],
			73: [2, 20]
		},
		parseError: /* @__PURE__ */ m(function(h$1, u) {
			if (u.recoverable) this.trace(h$1);
			else {
				var x = new Error(h$1);
				throw x.hash = u, x;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ m(function(h$1) {
			var u = this, x = [0], p = [], w = [null], o = [], j = this.table, d = "", lt = 0, It = 0, hi = 2, Mt = 1, li = o.slice.call(arguments, 1), T = Object.create(this.lexer), Y = { yy: {} };
			for (var dt in this.yy) Object.prototype.hasOwnProperty.call(this.yy, dt) && (Y.yy[dt] = this.yy[dt]);
			T.setInput(h$1, Y.yy), Y.yy.lexer = T, Y.yy.parser = this, typeof T.yylloc > "u" && (T.yylloc = {});
			var ft = T.yylloc;
			o.push(ft);
			var ci = T.options && T.options.ranges;
			typeof Y.yy.parseError == "function" ? this.parseError = Y.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function ui(V) {
				x.length = x.length - 2 * V, w.length = w.length - V, o.length = o.length - V;
			}
			m(ui, "popStack");
			function Vt() {
				var V;
				return V = p.pop() || T.lex() || Mt, typeof V != "number" && (V instanceof Array && (p = V, V = p.pop()), V = u.symbols_[V] || V), V;
			}
			m(Vt, "lex");
			for (var M, H, B, mt, q = {}, ct, F, Bt, ut;;) {
				if (H = x[x.length - 1], this.defaultActions[H] ? B = this.defaultActions[H] : ((M === null || typeof M > "u") && (M = Vt()), B = j[H] && j[H][M]), typeof B > "u" || !B.length || !B[0]) {
					var yt = "";
					ut = [];
					for (ct in j[H]) this.terminals_[ct] && ct > hi && ut.push("'" + this.terminals_[ct] + "'");
					T.showPosition ? yt = "Parse error on line " + (lt + 1) + `:
` + T.showPosition() + `
Expecting ` + ut.join(", ") + ", got '" + (this.terminals_[M] || M) + "'" : yt = "Parse error on line " + (lt + 1) + ": Unexpected " + (M == Mt ? "end of input" : "'" + (this.terminals_[M] || M) + "'"), this.parseError(yt, {
						text: T.match,
						token: this.terminals_[M] || M,
						line: T.yylineno,
						loc: ft,
						expected: ut
					});
				}
				if (B[0] instanceof Array && B.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + H + ", token: " + M);
				switch (B[0]) {
					case 1:
						x.push(M), w.push(T.yytext), o.push(T.yylloc), x.push(B[1]), M = null, It = T.yyleng, d = T.yytext, lt = T.yylineno, ft = T.yylloc;
						break;
					case 2:
						if (F = this.productions_[B[1]][1], q.$ = w[w.length - F], q._$ = {
							first_line: o[o.length - (F || 1)].first_line,
							last_line: o[o.length - 1].last_line,
							first_column: o[o.length - (F || 1)].first_column,
							last_column: o[o.length - 1].last_column
						}, ci && (q._$.range = [o[o.length - (F || 1)].range[0], o[o.length - 1].range[1]]), mt = this.performAction.apply(q, [
							d,
							It,
							lt,
							Y.yy,
							B[1],
							w,
							o
						].concat(li)), typeof mt < "u") return mt;
						F && (x = x.slice(0, -1 * F * 2), w = w.slice(0, -1 * F), o = o.slice(0, -1 * F)), x.push(this.productions_[B[1]][0]), w.push(q.$), o.push(q._$), Bt = j[x[x.length - 2]][x[x.length - 1]], x.push(Bt);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	$.lexer = /* @__PURE__ */ function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ m(function(u, x) {
				if (this.yy.parser) this.yy.parser.parseError(u, x);
				else throw new Error(u);
			}, "parseError"),
			setInput: /* @__PURE__ */ m(function(h$1, u) {
				return this.yy = u || this.yy || {}, this._input = h$1, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ m(function() {
				var h$1 = this._input[0];
				this.yytext += h$1, this.yyleng++, this.offset++, this.match += h$1, this.matched += h$1;
				return h$1.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h$1;
			}, "input"),
			unput: /* @__PURE__ */ m(function(h$1) {
				var u = h$1.length, x = h$1.split(/(?:\r\n?|\n)/g);
				this._input = h$1 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - u), this.offset -= u;
				var p = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), x.length - 1 && (this.yylineno -= x.length - 1);
				var w = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: x ? (x.length === p.length ? this.yylloc.first_column : 0) + p[p.length - x.length].length - x[0].length : this.yylloc.first_column - u
				}, this.options.ranges && (this.yylloc.range = [w[0], w[0] + this.yyleng - u]), this.yyleng = this.yytext.length, this;
			}, "unput"),
			more: /* @__PURE__ */ m(function() {
				return this._more = !0, this;
			}, "more"),
			reject: /* @__PURE__ */ m(function() {
				if (this.options.backtrack_lexer) this._backtrack = !0;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: /* @__PURE__ */ m(function(h$1) {
				this.unput(this.match.slice(h$1));
			}, "less"),
			pastInput: /* @__PURE__ */ m(function() {
				var h$1 = this.matched.substr(0, this.matched.length - this.match.length);
				return (h$1.length > 20 ? "..." : "") + h$1.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ m(function() {
				var h$1 = this.match;
				return h$1.length < 20 && (h$1 += this._input.substr(0, 20 - h$1.length)), (h$1.substr(0, 20) + (h$1.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ m(function() {
				var h$1 = this.pastInput(), u = new Array(h$1.length + 1).join("-");
				return h$1 + this.upcomingInput() + `
` + u + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ m(function(h$1, u) {
				var x, p, w;
				if (this.options.backtrack_lexer && (w = {
					yylineno: this.yylineno,
					yylloc: {
						first_line: this.yylloc.first_line,
						last_line: this.last_line,
						first_column: this.yylloc.first_column,
						last_column: this.yylloc.last_column
					},
					yytext: this.yytext,
					match: this.match,
					matches: this.matches,
					matched: this.matched,
					yyleng: this.yyleng,
					offset: this.offset,
					_more: this._more,
					_input: this._input,
					yy: this.yy,
					conditionStack: this.conditionStack.slice(0),
					done: this.done
				}, this.options.ranges && (w.yylloc.range = this.yylloc.range.slice(0))), p = h$1[0].match(/(?:\r\n?|\n).*/g), p && (this.yylineno += p.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: p ? p[p.length - 1].length - p[p.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + h$1[0].length
				}, this.yytext += h$1[0], this.match += h$1[0], this.matches = h$1, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(h$1[0].length), this.matched += h$1[0], x = this.performAction.call(this, this.yy, this, u, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), x) return x;
				if (this._backtrack) {
					for (var o in w) this[o] = w[o];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ m(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var h$1, u, x, p;
				this._more || (this.yytext = "", this.match = "");
				for (var w = this._currentRules(), o = 0; o < w.length; o++) if (x = this._input.match(this.rules[w[o]]), x && (!u || x[0].length > u[0].length)) {
					if (u = x, p = o, this.options.backtrack_lexer) {
						if (h$1 = this.test_match(x, w[o]), h$1 !== !1) return h$1;
						if (this._backtrack) {
							u = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return u ? (h$1 = this.test_match(u, w[p]), h$1 !== !1 ? h$1 : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ m(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ m(function(u) {
				this.conditionStack.push(u);
			}, "begin"),
			popState: /* @__PURE__ */ m(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ m(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ m(function(u) {
				return u = this.conditionStack.length - 1 - Math.abs(u || 0), u >= 0 ? this.conditionStack[u] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ m(function(u) {
				this.begin(u);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ m(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ m(function(u, x, p, w) {
				switch (p) {
					case 0: break;
					case 1: break;
					case 2: return this.popState(), 34;
					case 3: return this.popState(), 34;
					case 4: return 34;
					case 5: break;
					case 6: return 10;
					case 7: return this.pushState("acc_title"), 19;
					case 8: return this.popState(), "acc_title_value";
					case 9: return this.pushState("acc_descr"), 21;
					case 10: return this.popState(), "acc_descr_value";
					case 11:
						this.pushState("acc_descr_multiline");
						break;
					case 12:
						this.popState();
						break;
					case 13: return "acc_descr_multiline_value";
					case 14: return 5;
					case 15: return 5;
					case 16: return 8;
					case 17: return this.pushState("axis_data"), "X_AXIS";
					case 18: return this.pushState("axis_data"), "Y_AXIS";
					case 19: return this.pushState("axis_band_data"), 24;
					case 20: return 31;
					case 21: return this.pushState("data"), 16;
					case 22: return this.pushState("data"), 18;
					case 23: return this.pushState("data_inner"), 24;
					case 24: return 27;
					case 25: return this.popState(), 26;
					case 26:
						this.popState();
						break;
					case 27:
						this.pushState("string");
						break;
					case 28:
						this.popState();
						break;
					case 29: return "STR";
					case 30: return 24;
					case 31: return 26;
					case 32: return 43;
					case 33: return "COLON";
					case 34: return 44;
					case 35: return 28;
					case 36: return 45;
					case 37: return 46;
					case 38: return 48;
					case 39: return 50;
					case 40: return 47;
					case 41: return 41;
					case 42: return 49;
					case 43: return 42;
					case 44: break;
					case 45: return 35;
					case 46: return 36;
				}
			}, "anonymous"),
			rules: [
				/^(?:%%(?!\{)[^\n]*)/i,
				/^(?:[^\}]%%[^\n]*)/i,
				/^(?:(\r?\n))/i,
				/^(?:(\r?\n))/i,
				/^(?:[\n\r]+)/i,
				/^(?:%%[^\n]*)/i,
				/^(?:title\b)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:\{)/i,
				/^(?:[^\}]*)/i,
				/^(?:xychart-beta\b)/i,
				/^(?:xychart\b)/i,
				/^(?:(?:vertical|horizontal))/i,
				/^(?:x-axis\b)/i,
				/^(?:y-axis\b)/i,
				/^(?:\[)/i,
				/^(?:-->)/i,
				/^(?:line\b)/i,
				/^(?:bar\b)/i,
				/^(?:\[)/i,
				/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,
				/^(?:\])/i,
				/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,
				/^(?:["])/i,
				/^(?:["])/i,
				/^(?:[^"]*)/i,
				/^(?:\[)/i,
				/^(?:\])/i,
				/^(?:[A-Za-z]+)/i,
				/^(?::)/i,
				/^(?:\+)/i,
				/^(?:,)/i,
				/^(?:=)/i,
				/^(?:\*)/i,
				/^(?:#)/i,
				/^(?:[\_])/i,
				/^(?:\.)/i,
				/^(?:&)/i,
				/^(?:-)/i,
				/^(?:[0-9]+)/i,
				/^(?:\s+)/i,
				/^(?:;)/i,
				/^(?:$)/i
			],
			conditions: {
				data_inner: {
					rules: [
						0,
						1,
						4,
						5,
						6,
						7,
						9,
						11,
						14,
						15,
						16,
						17,
						18,
						21,
						22,
						24,
						25,
						26,
						27,
						30,
						31,
						32,
						33,
						34,
						35,
						36,
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						46
					],
					inclusive: !0
				},
				data: {
					rules: [
						0,
						1,
						3,
						4,
						5,
						6,
						7,
						9,
						11,
						14,
						15,
						16,
						17,
						18,
						21,
						22,
						23,
						26,
						27,
						30,
						31,
						32,
						33,
						34,
						35,
						36,
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						46
					],
					inclusive: !0
				},
				axis_band_data: {
					rules: [
						0,
						1,
						4,
						5,
						6,
						7,
						9,
						11,
						14,
						15,
						16,
						17,
						18,
						21,
						22,
						25,
						26,
						27,
						30,
						31,
						32,
						33,
						34,
						35,
						36,
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						46
					],
					inclusive: !0
				},
				axis_data: {
					rules: [
						0,
						1,
						2,
						4,
						5,
						6,
						7,
						9,
						11,
						14,
						15,
						16,
						17,
						18,
						19,
						20,
						21,
						22,
						24,
						26,
						27,
						30,
						31,
						32,
						33,
						34,
						35,
						36,
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						46
					],
					inclusive: !0
				},
				acc_descr_multiline: {
					rules: [12, 13],
					inclusive: !1
				},
				acc_descr: {
					rules: [10],
					inclusive: !1
				},
				acc_title: {
					rules: [8],
					inclusive: !1
				},
				title: {
					rules: [],
					inclusive: !1
				},
				md_string: {
					rules: [],
					inclusive: !1
				},
				string: {
					rules: [28, 29],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						4,
						5,
						6,
						7,
						9,
						11,
						14,
						15,
						16,
						17,
						18,
						21,
						22,
						26,
						27,
						30,
						31,
						32,
						33,
						34,
						35,
						36,
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						46
					],
					inclusive: !0
				}
			}
		};
	}();
	function N() {
		this.yy = {};
	}
	return m(N, "Parser"), N.prototype = $, $.Parser = N, new N();
}();
At.parser = At;
var Ti = At;
function wt(e) {
	return e.type === "bar";
}
m(wt, "isBarPlot");
function kt(e) {
	return e.type === "band";
}
m(kt, "isBandAxisData");
function G(e) {
	return e.type === "linear";
}
m(G, "isLinearAxisData");
var J, Ht = (J = class {
	constructor(t$1) {
		this.parentGroup = t$1;
	}
	getMaxDimension(t$1, i) {
		if (!this.parentGroup) return {
			width: t$1.reduce((r, g) => Math.max(g.length, r), 0) * i,
			height: i
		};
		const s = {
			width: 0,
			height: 0
		}, n = this.parentGroup.append("g").attr("visibility", "hidden").attr("font-size", i);
		for (const r of t$1) {
			const g = zL(n, 1, r), m$1 = g ? g.width : r.length * i, f = g ? g.height : i;
			s.width = Math.max(s.width, m$1), s.height = Math.max(s.height, f);
		}
		return n.remove(), s;
	}
}, m(J, "TextDimensionCalculatorWithFont"), J), Ot = .7, Ft = .2, tt, Ut = (tt = class {
	constructor(t$1, i, s, n) {
		this.axisConfig = t$1, this.title = i, this.textDimensionCalculator = s, this.axisThemeConfig = n, this.boundingRect = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}, this.axisPosition = "left", this.showTitle = !1, this.showLabel = !1, this.showTick = !1, this.showAxisLine = !1, this.outerPadding = 0, this.titleTextHeight = 0, this.labelTextHeight = 0, this.range = [0, 10], this.boundingRect = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}, this.axisPosition = "left";
	}
	setRange(t$1) {
		this.range = t$1, this.axisPosition === "left" || this.axisPosition === "right" ? this.boundingRect.height = t$1[1] - t$1[0] : this.boundingRect.width = t$1[1] - t$1[0], this.recalculateScale();
	}
	getRange() {
		return [this.range[0] + this.outerPadding, this.range[1] - this.outerPadding];
	}
	setAxisPosition(t$1) {
		this.axisPosition = t$1, this.setRange(this.range);
	}
	getTickDistance() {
		const t$1 = this.getRange();
		return Math.abs(t$1[0] - t$1[1]) / this.getTickValues().length;
	}
	getAxisOuterPadding() {
		return this.outerPadding;
	}
	getLabelDimension() {
		return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map((t$1) => t$1.toString()), this.axisConfig.labelFontSize);
	}
	recalculateOuterPaddingToDrawBar() {
		Ot * this.getTickDistance() > this.outerPadding * 2 && (this.outerPadding = Math.floor(Ot * this.getTickDistance() / 2)), this.recalculateScale();
	}
	calculateSpaceIfDrawnHorizontally(t$1) {
		let i = t$1.height;
		if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth && (i -= this.axisConfig.axisLineWidth, this.showAxisLine = !0), this.axisConfig.showLabel) {
			const s = this.getLabelDimension(), n = Ft * t$1.width;
			this.outerPadding = Math.min(s.width / 2, n);
			const r = s.height + this.axisConfig.labelPadding * 2;
			this.labelTextHeight = s.height, r <= i && (i -= r, this.showLabel = !0);
		}
		if (this.axisConfig.showTick && i >= this.axisConfig.tickLength && (this.showTick = !0, i -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
			const s = this.textDimensionCalculator.getMaxDimension([this.title], this.axisConfig.titleFontSize), n = s.height + this.axisConfig.titlePadding * 2;
			this.titleTextHeight = s.height, n <= i && (i -= n, this.showTitle = !0);
		}
		this.boundingRect.width = t$1.width, this.boundingRect.height = t$1.height - i;
	}
	calculateSpaceIfDrawnVertical(t$1) {
		let i = t$1.width;
		if (this.axisConfig.showAxisLine && i > this.axisConfig.axisLineWidth && (i -= this.axisConfig.axisLineWidth, this.showAxisLine = !0), this.axisConfig.showLabel) {
			const s = this.getLabelDimension(), n = Ft * t$1.height;
			this.outerPadding = Math.min(s.height / 2, n);
			const r = s.width + this.axisConfig.labelPadding * 2;
			r <= i && (i -= r, this.showLabel = !0);
		}
		if (this.axisConfig.showTick && i >= this.axisConfig.tickLength && (this.showTick = !0, i -= this.axisConfig.tickLength), this.axisConfig.showTitle && this.title) {
			const s = this.textDimensionCalculator.getMaxDimension([this.title], this.axisConfig.titleFontSize), n = s.height + this.axisConfig.titlePadding * 2;
			this.titleTextHeight = s.height, n <= i && (i -= n, this.showTitle = !0);
		}
		this.boundingRect.width = t$1.width - i, this.boundingRect.height = t$1.height;
	}
	calculateSpace(t$1) {
		return this.axisPosition === "left" || this.axisPosition === "right" ? this.calculateSpaceIfDrawnVertical(t$1) : this.calculateSpaceIfDrawnHorizontally(t$1), this.recalculateScale(), {
			width: this.boundingRect.width,
			height: this.boundingRect.height
		};
	}
	setBoundingBoxXY(t$1) {
		this.boundingRect.x = t$1.x, this.boundingRect.y = t$1.y;
	}
	getDrawableElementsForLeftAxis() {
		const t$1 = [];
		if (this.showAxisLine) {
			const i = this.boundingRect.x + this.boundingRect.width - this.axisConfig.axisLineWidth / 2;
			t$1.push({
				type: "path",
				groupTexts: ["left-axis", "axisl-line"],
				data: [{
					path: `M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y + this.boundingRect.height} `,
					strokeFill: this.axisThemeConfig.axisLineColor,
					strokeWidth: this.axisConfig.axisLineWidth
				}]
			});
		}
		if (this.showLabel && t$1.push({
			type: "text",
			groupTexts: ["left-axis", "label"],
			data: this.getTickValues().map((i) => ({
				text: i.toString(),
				x: this.boundingRect.x + this.boundingRect.width - (this.showLabel ? this.axisConfig.labelPadding : 0) - (this.showTick ? this.axisConfig.tickLength : 0) - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
				y: this.getScaleValue(i),
				fill: this.axisThemeConfig.labelColor,
				fontSize: this.axisConfig.labelFontSize,
				rotation: 0,
				verticalPos: "middle",
				horizontalPos: "right"
			}))
		}), this.showTick) {
			const i = this.boundingRect.x + this.boundingRect.width - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
			t$1.push({
				type: "path",
				groupTexts: ["left-axis", "ticks"],
				data: this.getTickValues().map((s) => ({
					path: `M ${i},${this.getScaleValue(s)} L ${i - this.axisConfig.tickLength},${this.getScaleValue(s)}`,
					strokeFill: this.axisThemeConfig.tickColor,
					strokeWidth: this.axisConfig.tickWidth
				}))
			});
		}
		return this.showTitle && t$1.push({
			type: "text",
			groupTexts: ["left-axis", "title"],
			data: [{
				text: this.title,
				x: this.boundingRect.x + this.axisConfig.titlePadding,
				y: this.boundingRect.y + this.boundingRect.height / 2,
				fill: this.axisThemeConfig.titleColor,
				fontSize: this.axisConfig.titleFontSize,
				rotation: 270,
				verticalPos: "top",
				horizontalPos: "center"
			}]
		}), t$1;
	}
	getDrawableElementsForBottomAxis() {
		const t$1 = [];
		if (this.showAxisLine) {
			const i = this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
			t$1.push({
				type: "path",
				groupTexts: ["bottom-axis", "axis-line"],
				data: [{
					path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
					strokeFill: this.axisThemeConfig.axisLineColor,
					strokeWidth: this.axisConfig.axisLineWidth
				}]
			});
		}
		if (this.showLabel && t$1.push({
			type: "text",
			groupTexts: ["bottom-axis", "label"],
			data: this.getTickValues().map((i) => ({
				text: i.toString(),
				x: this.getScaleValue(i),
				y: this.boundingRect.y + this.axisConfig.labelPadding + (this.showTick ? this.axisConfig.tickLength : 0) + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0),
				fill: this.axisThemeConfig.labelColor,
				fontSize: this.axisConfig.labelFontSize,
				rotation: 0,
				verticalPos: "top",
				horizontalPos: "center"
			}))
		}), this.showTick) {
			const i = this.boundingRect.y + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
			t$1.push({
				type: "path",
				groupTexts: ["bottom-axis", "ticks"],
				data: this.getTickValues().map((s) => ({
					path: `M ${this.getScaleValue(s)},${i} L ${this.getScaleValue(s)},${i + this.axisConfig.tickLength}`,
					strokeFill: this.axisThemeConfig.tickColor,
					strokeWidth: this.axisConfig.tickWidth
				}))
			});
		}
		return this.showTitle && t$1.push({
			type: "text",
			groupTexts: ["bottom-axis", "title"],
			data: [{
				text: this.title,
				x: this.range[0] + (this.range[1] - this.range[0]) / 2,
				y: this.boundingRect.y + this.boundingRect.height - this.axisConfig.titlePadding - this.titleTextHeight,
				fill: this.axisThemeConfig.titleColor,
				fontSize: this.axisConfig.titleFontSize,
				rotation: 0,
				verticalPos: "top",
				horizontalPos: "center"
			}]
		}), t$1;
	}
	getDrawableElementsForTopAxis() {
		const t$1 = [];
		if (this.showAxisLine) {
			const i = this.boundingRect.y + this.boundingRect.height - this.axisConfig.axisLineWidth / 2;
			t$1.push({
				type: "path",
				groupTexts: ["top-axis", "axis-line"],
				data: [{
					path: `M ${this.boundingRect.x},${i} L ${this.boundingRect.x + this.boundingRect.width},${i}`,
					strokeFill: this.axisThemeConfig.axisLineColor,
					strokeWidth: this.axisConfig.axisLineWidth
				}]
			});
		}
		if (this.showLabel && t$1.push({
			type: "text",
			groupTexts: ["top-axis", "label"],
			data: this.getTickValues().map((i) => ({
				text: i.toString(),
				x: this.getScaleValue(i),
				y: this.boundingRect.y + (this.showTitle ? this.titleTextHeight + this.axisConfig.titlePadding * 2 : 0) + this.axisConfig.labelPadding,
				fill: this.axisThemeConfig.labelColor,
				fontSize: this.axisConfig.labelFontSize,
				rotation: 0,
				verticalPos: "top",
				horizontalPos: "center"
			}))
		}), this.showTick) {
			const i = this.boundingRect.y;
			t$1.push({
				type: "path",
				groupTexts: ["top-axis", "ticks"],
				data: this.getTickValues().map((s) => ({
					path: `M ${this.getScaleValue(s)},${i + this.boundingRect.height - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)} L ${this.getScaleValue(s)},${i + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig.axisLineWidth : 0)}`,
					strokeFill: this.axisThemeConfig.tickColor,
					strokeWidth: this.axisConfig.tickWidth
				}))
			});
		}
		return this.showTitle && t$1.push({
			type: "text",
			groupTexts: ["top-axis", "title"],
			data: [{
				text: this.title,
				x: this.boundingRect.x + this.boundingRect.width / 2,
				y: this.boundingRect.y + this.axisConfig.titlePadding,
				fill: this.axisThemeConfig.titleColor,
				fontSize: this.axisConfig.titleFontSize,
				rotation: 0,
				verticalPos: "top",
				horizontalPos: "center"
			}]
		}), t$1;
	}
	getDrawableElements() {
		if (this.axisPosition === "left") return this.getDrawableElementsForLeftAxis();
		if (this.axisPosition === "right") throw Error("Drawing of right axis is not implemented");
		return this.axisPosition === "bottom" ? this.getDrawableElementsForBottomAxis() : this.axisPosition === "top" ? this.getDrawableElementsForTopAxis() : [];
	}
}, m(tt, "BaseAxis"), tt), it, Di = (it = class extends Ut {
	constructor(t$1, i, s, n, r) {
		super(t$1, n, r, i), this.categories = s, this.scale = bt().domain(this.categories).range(this.getRange());
	}
	setRange(t$1) {
		super.setRange(t$1);
	}
	recalculateScale() {
		this.scale = bt().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5), R.trace("BandAxis axis final categories, range: ", this.categories, this.getRange());
	}
	getTickValues() {
		return this.categories;
	}
	getScaleValue(t$1) {
		return this.scale(t$1) ?? this.getRange()[0];
	}
}, m(it, "BandAxis"), it), et, vi = (et = class extends Ut {
	constructor(t$1, i, s, n, r) {
		super(t$1, n, r, i), this.domain = s, this.scale = cn().domain(this.domain).range(this.getRange());
	}
	getTickValues() {
		return this.scale.ticks();
	}
	recalculateScale() {
		const t$1 = [...this.domain];
		this.axisPosition === "left" && t$1.reverse(), this.scale = cn().domain(t$1).range(this.getRange());
	}
	getScaleValue(t$1) {
		return this.scale(t$1);
	}
}, m(et, "LinearAxis"), et);
function Ct(e, t$1, i, s) {
	const n = new Ht(s);
	return kt(e) ? new Di(t$1, i, e.categories, e.title, n) : new vi(t$1, i, [e.min, e.max], e.title, n);
}
m(Ct, "getAxis");
var st, Pi = (st = class {
	constructor(t$1, i, s, n) {
		this.textDimensionCalculator = t$1, this.chartConfig = i, this.chartData = s, this.chartThemeConfig = n, this.boundingRect = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		}, this.showChartTitle = !1;
	}
	setBoundingBoxXY(t$1) {
		this.boundingRect.x = t$1.x, this.boundingRect.y = t$1.y;
	}
	calculateSpace(t$1) {
		const i = this.textDimensionCalculator.getMaxDimension([this.chartData.title], this.chartConfig.titleFontSize), s = Math.max(i.width, t$1.width), n = i.height + 2 * this.chartConfig.titlePadding;
		return i.width <= s && i.height <= n && this.chartConfig.showTitle && this.chartData.title && (this.boundingRect.width = s, this.boundingRect.height = n, this.showChartTitle = !0), {
			width: this.boundingRect.width,
			height: this.boundingRect.height
		};
	}
	getDrawableElements() {
		const t$1 = [];
		return this.showChartTitle && t$1.push({
			groupTexts: ["chart-title"],
			type: "text",
			data: [{
				fontSize: this.chartConfig.titleFontSize,
				text: this.chartData.title,
				verticalPos: "middle",
				horizontalPos: "center",
				x: this.boundingRect.x + this.boundingRect.width / 2,
				y: this.boundingRect.y + this.boundingRect.height / 2,
				fill: this.chartThemeConfig.titleColor,
				rotation: 0
			}]
		}), t$1;
	}
}, m(st, "ChartTitle"), st);
function $t(e, t$1, i, s) {
	return new Pi(new Ht(s), e, t$1, i);
}
m($t, "getChartTitleComponent");
var nt, Li = (nt = class {
	constructor(t$1, i, s, n, r) {
		this.plotData = t$1, this.xAxis = i, this.yAxis = s, this.orientation = n, this.plotIndex = r;
	}
	getDrawableElement() {
		const t$1 = this.plotData.data.map((s) => [this.xAxis.getScaleValue(s[0]), this.yAxis.getScaleValue(s[1])]);
		let i;
		return this.orientation === "horizontal" ? i = V8().y((s) => s[0]).x((s) => s[1])(t$1) : i = V8().x((s) => s[0]).y((s) => s[1])(t$1), i ? [{
			groupTexts: ["plot", `line-plot-${this.plotIndex}`],
			type: "path",
			data: [{
				path: i,
				strokeFill: this.plotData.strokeFill,
				strokeWidth: this.plotData.strokeWidth
			}]
		}] : [];
	}
}, m(nt, "LinePlot"), nt), at, Ei = (at = class {
	constructor(t$1, i, s, n, r, g) {
		this.barData = t$1, this.boundingRect = i, this.xAxis = s, this.yAxis = n, this.orientation = r, this.plotIndex = g;
	}
	getDrawableElement() {
		const t$1 = this.barData.data.map((r) => [this.xAxis.getScaleValue(r[0]), this.yAxis.getScaleValue(r[1])]), s = Math.min(this.xAxis.getAxisOuterPadding() * 2, this.xAxis.getTickDistance()) * .95, n = s / 2;
		return this.orientation === "horizontal" ? [{
			groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
			type: "rect",
			data: t$1.map((r) => ({
				x: this.boundingRect.x,
				y: r[0] - n,
				height: s,
				width: r[1] - this.boundingRect.x,
				fill: this.barData.fill,
				strokeWidth: 0,
				strokeFill: this.barData.fill
			}))
		}] : [{
			groupTexts: ["plot", `bar-plot-${this.plotIndex}`],
			type: "rect",
			data: t$1.map((r) => ({
				x: r[0] - n,
				y: r[1],
				width: s,
				height: this.boundingRect.y + this.boundingRect.height - r[1],
				fill: this.barData.fill,
				strokeWidth: 0,
				strokeFill: this.barData.fill
			}))
		}];
	}
}, m(at, "BarPlot"), at), ot, Ii = (ot = class {
	constructor(t$1, i, s) {
		this.chartConfig = t$1, this.chartData = i, this.chartThemeConfig = s, this.boundingRect = {
			x: 0,
			y: 0,
			width: 0,
			height: 0
		};
	}
	setAxes(t$1, i) {
		this.xAxis = t$1, this.yAxis = i;
	}
	setBoundingBoxXY(t$1) {
		this.boundingRect.x = t$1.x, this.boundingRect.y = t$1.y;
	}
	calculateSpace(t$1) {
		return this.boundingRect.width = t$1.width, this.boundingRect.height = t$1.height, {
			width: this.boundingRect.width,
			height: this.boundingRect.height
		};
	}
	getDrawableElements() {
		if (!(this.xAxis && this.yAxis)) throw Error("Axes must be passed to render Plots");
		const t$1 = [];
		for (const [i, s] of this.chartData.plots.entries()) switch (s.type) {
			case "line":
				{
					const n = new Li(s, this.xAxis, this.yAxis, this.chartConfig.chartOrientation, i);
					t$1.push(...n.getDrawableElement());
				}
				break;
			case "bar":
				{
					const n = new Ei(s, this.boundingRect, this.xAxis, this.yAxis, this.chartConfig.chartOrientation, i);
					t$1.push(...n.getDrawableElement());
				}
				break;
		}
		return t$1;
	}
}, m(ot, "BasePlot"), ot);
function qt(e, t$1, i) {
	return new Ii(e, t$1, i);
}
m(qt, "getPlotComponent");
var rt, Mi = (rt = class {
	constructor(t$1, i, s, n) {
		this.chartConfig = t$1, this.chartData = i, this.componentStore = {
			title: $t(t$1, i, s, n),
			plot: qt(t$1, i, s),
			xAxis: Ct(i.xAxis, t$1.xAxis, {
				titleColor: s.xAxisTitleColor,
				labelColor: s.xAxisLabelColor,
				tickColor: s.xAxisTickColor,
				axisLineColor: s.xAxisLineColor
			}, n),
			yAxis: Ct(i.yAxis, t$1.yAxis, {
				titleColor: s.yAxisTitleColor,
				labelColor: s.yAxisLabelColor,
				tickColor: s.yAxisTickColor,
				axisLineColor: s.yAxisLineColor
			}, n)
		};
	}
	calculateVerticalSpace() {
		let t$1 = this.chartConfig.width, i = this.chartConfig.height, s = 0, n = 0, r = Math.floor(t$1 * this.chartConfig.plotReservedSpacePercent / 100), g = Math.floor(i * this.chartConfig.plotReservedSpacePercent / 100), m$1 = this.componentStore.plot.calculateSpace({
			width: r,
			height: g
		});
		t$1 -= m$1.width, i -= m$1.height, m$1 = this.componentStore.title.calculateSpace({
			width: this.chartConfig.width,
			height: i
		}), n = m$1.height, i -= m$1.height, this.componentStore.xAxis.setAxisPosition("bottom"), m$1 = this.componentStore.xAxis.calculateSpace({
			width: t$1,
			height: i
		}), i -= m$1.height, this.componentStore.yAxis.setAxisPosition("left"), m$1 = this.componentStore.yAxis.calculateSpace({
			width: t$1,
			height: i
		}), s = m$1.width, t$1 -= m$1.width, t$1 > 0 && (r += t$1, t$1 = 0), i > 0 && (g += i, i = 0), this.componentStore.plot.calculateSpace({
			width: r,
			height: g
		}), this.componentStore.plot.setBoundingBoxXY({
			x: s,
			y: n
		}), this.componentStore.xAxis.setRange([s, s + r]), this.componentStore.xAxis.setBoundingBoxXY({
			x: s,
			y: n + g
		}), this.componentStore.yAxis.setRange([n, n + g]), this.componentStore.yAxis.setBoundingBoxXY({
			x: 0,
			y: n
		}), this.chartData.plots.some((f) => wt(f)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
	}
	calculateHorizontalSpace() {
		let t$1 = this.chartConfig.width, i = this.chartConfig.height, s = 0, n = 0, r = 0, g = Math.floor(t$1 * this.chartConfig.plotReservedSpacePercent / 100), m$1 = Math.floor(i * this.chartConfig.plotReservedSpacePercent / 100), f = this.componentStore.plot.calculateSpace({
			width: g,
			height: m$1
		});
		t$1 -= f.width, i -= f.height, f = this.componentStore.title.calculateSpace({
			width: this.chartConfig.width,
			height: i
		}), s = f.height, i -= f.height, this.componentStore.xAxis.setAxisPosition("left"), f = this.componentStore.xAxis.calculateSpace({
			width: t$1,
			height: i
		}), t$1 -= f.width, n = f.width, this.componentStore.yAxis.setAxisPosition("top"), f = this.componentStore.yAxis.calculateSpace({
			width: t$1,
			height: i
		}), i -= f.height, r = s + f.height, t$1 > 0 && (g += t$1, t$1 = 0), i > 0 && (m$1 += i, i = 0), this.componentStore.plot.calculateSpace({
			width: g,
			height: m$1
		}), this.componentStore.plot.setBoundingBoxXY({
			x: n,
			y: r
		}), this.componentStore.yAxis.setRange([n, n + g]), this.componentStore.yAxis.setBoundingBoxXY({
			x: n,
			y: s
		}), this.componentStore.xAxis.setRange([r, r + m$1]), this.componentStore.xAxis.setBoundingBoxXY({
			x: 0,
			y: r
		}), this.chartData.plots.some((k) => wt(k)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
	}
	calculateSpace() {
		this.chartConfig.chartOrientation === "horizontal" ? this.calculateHorizontalSpace() : this.calculateVerticalSpace();
	}
	getDrawableElement() {
		this.calculateSpace();
		const t$1 = [];
		this.componentStore.plot.setAxes(this.componentStore.xAxis, this.componentStore.yAxis);
		for (const i of Object.values(this.componentStore)) t$1.push(...i.getDrawableElements());
		return t$1;
	}
}, m(rt, "Orchestrator"), rt), ht, Vi = (ht = class {
	static build(t$1, i, s, n) {
		return new Mi(t$1, i, s, n).getDrawableElement();
	}
}, m(ht, "XYChartBuilder"), ht), Q = 0, Gt, K = Dt(), Z = Tt(), A = vt(), St = Z.plotColorPalette.split(",").map((e) => e.trim()), gt = !1, Rt = !1;
function Tt() {
	const e = P6(), t$1 = Xt();
	return lu(e.xyChart, t$1.themeVariables.xyChart);
}
m(Tt, "getChartDefaultThemeConfig");
function Dt() {
	const e = Xt();
	return lu(Mf.xyChart, e.xyChart);
}
m(Dt, "getChartDefaultConfig");
function vt() {
	return {
		yAxis: {
			type: "linear",
			title: "",
			min: Infinity,
			max: -Infinity
		},
		xAxis: {
			type: "band",
			title: "",
			categories: []
		},
		title: "",
		plots: []
	};
}
m(vt, "getChartDefaultData");
function xt(e) {
	const t$1 = Xt();
	return _e(e.trim(), t$1);
}
m(xt, "textSanitizer");
function jt(e) {
	Gt = e;
}
m(jt, "setTmpSVGG");
function Qt(e) {
	e === "horizontal" ? K.chartOrientation = "horizontal" : K.chartOrientation = "vertical";
}
m(Qt, "setOrientation");
function Kt(e) {
	A.xAxis.title = xt(e.text);
}
m(Kt, "setXAxisTitle");
function Pt(e, t$1) {
	A.xAxis = {
		type: "linear",
		title: A.xAxis.title,
		min: e,
		max: t$1
	}, gt = !0;
}
m(Pt, "setXAxisRangeData");
function Zt(e) {
	A.xAxis = {
		type: "band",
		title: A.xAxis.title,
		categories: e.map((t$1) => xt(t$1.text))
	}, gt = !0;
}
m(Zt, "setXAxisBand");
function Jt(e) {
	A.yAxis.title = xt(e.text);
}
m(Jt, "setYAxisTitle");
function ti(e, t$1) {
	A.yAxis = {
		type: "linear",
		title: A.yAxis.title,
		min: e,
		max: t$1
	}, Rt = !0;
}
m(ti, "setYAxisRangeData");
function ii(e) {
	const t$1 = Math.min(...e), i = Math.max(...e), s = G(A.yAxis) ? A.yAxis.min : Infinity, n = G(A.yAxis) ? A.yAxis.max : -Infinity;
	A.yAxis = {
		type: "linear",
		title: A.yAxis.title,
		min: Math.min(s, t$1),
		max: Math.max(n, i)
	};
}
m(ii, "setYAxisRangeFromPlotData");
function Lt(e) {
	let t$1 = [];
	if (e.length === 0) return t$1;
	if (!gt) {
		const i = G(A.xAxis) ? A.xAxis.min : Infinity, s = G(A.xAxis) ? A.xAxis.max : -Infinity;
		Pt(Math.min(i, 1), Math.max(s, e.length));
	}
	if (Rt || ii(e), kt(A.xAxis) && (t$1 = A.xAxis.categories.map((i, s) => [i, e[s]])), G(A.xAxis)) {
		const i = A.xAxis.min, s = A.xAxis.max, n = (s - i) / (e.length - 1), r = [];
		for (let g = i; g <= s; g += n) r.push(`${g}`);
		t$1 = r.map((g, m$1) => [g, e[m$1]]);
	}
	return t$1;
}
m(Lt, "transformDataWithoutCategory");
function Et(e) {
	return St[e === 0 ? 0 : e % St.length];
}
m(Et, "getPlotColorFromPalette");
function ei(e, t$1) {
	const i = Lt(t$1);
	A.plots.push({
		type: "line",
		strokeFill: Et(Q),
		strokeWidth: 2,
		data: i
	}), Q++;
}
m(ei, "setLineData");
function si(e, t$1) {
	const i = Lt(t$1);
	A.plots.push({
		type: "bar",
		fill: Et(Q),
		data: i
	}), Q++;
}
m(si, "setBarData");
function ni() {
	if (A.plots.length === 0) throw Error("No Plot to render, please provide a plot with some data");
	return A.title = _5(), Vi.build(K, A, Z, Gt);
}
m(ni, "getDrawableElem");
function ai() {
	return Z;
}
m(ai, "getChartThemeConfig");
function oi() {
	return K;
}
m(oi, "getChartConfig");
function ri() {
	return A;
}
m(ri, "getXYChartData");
var gs = {
	parser: Ti,
	db: {
		getDrawableElem: ni,
		clear: /* @__PURE__ */ m(function() {
			m5(), Q = 0, K = Dt(), A = vt(), Z = Tt(), St = Z.plotColorPalette.split(",").map((e) => e.trim()), gt = !1, Rt = !1;
		}, "clear"),
		setAccTitle: b5,
		getAccTitle: x5,
		setDiagramTitle: w5,
		getDiagramTitle: _5,
		getAccDescription: k5,
		setAccDescription: y5,
		setOrientation: Qt,
		setXAxisTitle: Kt,
		setXAxisRangeData: Pt,
		setXAxisBand: Zt,
		setYAxisTitle: Jt,
		setYAxisRangeData: ti,
		setLineData: ei,
		setBarData: si,
		setTmpSVGG: jt,
		getChartThemeConfig: ai,
		getChartConfig: oi,
		getXYChartData: ri
	},
	renderer: { draw: /* @__PURE__ */ m((e, t$1, i, s) => {
		const n = s.db, r = n.getChartThemeConfig(), g = n.getChartConfig(), m$1 = n.getXYChartData().plots[0].data.map((y) => y[1]);
		function f(y) {
			return y === "top" ? "text-before-edge" : "middle";
		}
		m(f, "getDominantBaseLine");
		function k(y) {
			return y === "left" ? "start" : y === "right" ? "end" : "middle";
		}
		m(k, "getTextAnchor");
		function v(y) {
			return `translate(${y.x}, ${y.y}) rotate(${y.rotation || 0})`;
		}
		m(v, "getTextTransformation"), R.debug(`Rendering xychart chart
` + e);
		const C = iT(t$1), b = C.append("g").attr("class", "main"), E = b.append("rect").attr("width", g.width).attr("height", g.height).attr("class", "background");
		If(C, g.height, g.width, !0), C.attr("viewBox", `0 0 ${g.width} ${g.height}`), E.attr("fill", r.backgroundColor), n.setTmpSVGG(C.append("g").attr("class", "mermaid-tmp-group"));
		const D = n.getDrawableElem(), P = {};
		function I(y) {
			let _ = b, c = "";
			for (const [W] of y.entries()) {
				let z = b;
				W > 0 && P[c] && (z = P[c]), c += y[W], _ = P[c], _ || (_ = P[c] = z.append("g").attr("class", y[W]));
			}
			return _;
		}
		m(I, "getGroup");
		for (const y of D) {
			if (y.data.length === 0) continue;
			const _ = I(y.groupTexts);
			switch (y.type) {
				case "rect":
					if (_.selectAll("rect").data(y.data).enter().append("rect").attr("x", (c) => c.x).attr("y", (c) => c.y).attr("width", (c) => c.width).attr("height", (c) => c.height).attr("fill", (c) => c.fill).attr("stroke", (c) => c.strokeFill).attr("stroke-width", (c) => c.strokeWidth), g.showDataLabel) if (g.chartOrientation === "horizontal") {
						let c = function(l, L) {
							const { data: S, label: R$1 } = l;
							return L * R$1.length * W <= S.width - 10;
						};
						m(c, "fitsHorizontally");
						const W = .7, z = y.data.map((l, L) => ({
							data: l,
							label: m$1[L].toString()
						})).filter((l) => l.data.width > 0 && l.data.height > 0), U = z.map((l) => {
							const { data: L } = l;
							let S = L.height * .7;
							for (; !c(l, S) && S > 0;) S -= 1;
							return S;
						}), X = Math.floor(Math.min(...U));
						_.selectAll("text").data(z).enter().append("text").attr("x", (l) => l.data.x + l.data.width - 10).attr("y", (l) => l.data.y + l.data.height / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").attr("fill", "black").attr("font-size", `${X}px`).text((l) => l.label);
					} else {
						let c = function(l, L, S) {
							const { data: R$1, label: $ } = l, N = L * $.length * .7, O = R$1.x + R$1.width / 2, h$1 = O - N / 2, u = O + N / 2, x = h$1 >= R$1.x && u <= R$1.x + R$1.width, p = R$1.y + S + L <= R$1.y + R$1.height;
							return x && p;
						};
						m(c, "fitsInBar");
						const W = 10, z = y.data.map((l, L) => ({
							data: l,
							label: m$1[L].toString()
						})).filter((l) => l.data.width > 0 && l.data.height > 0), U = z.map((l) => {
							const { data: L, label: S } = l;
							let R$1 = L.width / (S.length * .7);
							for (; !c(l, R$1, W) && R$1 > 0;) R$1 -= 1;
							return R$1;
						}), X = Math.floor(Math.min(...U));
						_.selectAll("text").data(z).enter().append("text").attr("x", (l) => l.data.x + l.data.width / 2).attr("y", (l) => l.data.y + W).attr("text-anchor", "middle").attr("dominant-baseline", "hanging").attr("fill", "black").attr("font-size", `${X}px`).text((l) => l.label);
					}
					break;
				case "text":
					_.selectAll("text").data(y.data).enter().append("text").attr("x", 0).attr("y", 0).attr("fill", (c) => c.fill).attr("font-size", (c) => c.fontSize).attr("dominant-baseline", (c) => f(c.verticalPos)).attr("text-anchor", (c) => k(c.horizontalPos)).attr("transform", (c) => v(c)).text((c) => c.text);
					break;
				case "path":
					_.selectAll("path").data(y.data).enter().append("path").attr("d", (c) => c.path).attr("fill", (c) => c.fill ? c.fill : "none").attr("stroke", (c) => c.strokeFill).attr("stroke-width", (c) => c.strokeWidth);
					break;
			}
		}
	}, "draw") }
};
export { gs as diagram };
