import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { N as require_jsx_runtime, P as require_react, w as require_react_dom } from "./chakra-ui-NHV_-bGL.js";
import { k as require_lodash } from "./react-utils-DE1lHEcz.js";
import { t as require_client } from "./vendor-BKa3f7Q_.js";
import "./common-utils-BCFfNPpf.js";
import "./react-markdown-14W_w1u6.js";
import "./monaco-De2c8opW.js";
import "./remark-gfm-BxiTB6j-.js";
import { $n as require_markdown_it_task_lists, Ct as _e, Gn as yt, Ht as et, N as Kn, Qn as require_pinyin, R as Mf, _t as Y, er as require_markdown_it_multimd_table, et as R, g as Dz, it as Rz, ln as lz, un as m, wi as require_classnames } from "./app-CHqOxvpb.js";
import { t as g } from "./chunk-55IACEB6-b2733bca-BG2rdqII.js";
import { t as d } from "./chunk-QN33PNHL-d51d5666-A9hOYyX2.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
var E = [];
for (let t = 0; t < 256; ++t) E.push((t + 256).toString(16).slice(1));
function ye(t, e = 0) {
	return (E[t[e + 0]] + E[t[e + 1]] + E[t[e + 2]] + E[t[e + 3]] + "-" + E[t[e + 4]] + E[t[e + 5]] + "-" + E[t[e + 6]] + E[t[e + 7]] + "-" + E[t[e + 8]] + E[t[e + 9]] + "-" + E[t[e + 10]] + E[t[e + 11]] + E[t[e + 12]] + E[t[e + 13]] + E[t[e + 14]] + E[t[e + 15]]).toLowerCase();
}
var Y$1;
var Ee = new Uint8Array(16);
function _e$1() {
	if (!Y$1) {
		if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
		Y$1 = crypto.getRandomValues.bind(crypto);
	}
	return Y$1(Ee);
}
var ne = { randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto) };
function Se(t, e, i) {
	var g$1;
	if (ne.randomUUID && !e && !t) return ne.randomUUID();
	t = t || {};
	const c = t.random ?? ((g$1 = t.rng) == null ? void 0 : g$1.call(t)) ?? _e$1();
	if (c.length < 16) throw new Error("Random bytes length must be >= 16");
	if (c[6] = c[6] & 15 | 64, c[8] = c[8] & 63 | 128, e) {
		if (i = i || 0, i < 0 || i + 16 > e.length) throw new RangeError(`UUID byte range ${i}:${i + 15} is out of buffer bounds`);
		for (let l = 0; l < 16; ++l) e[i + l] = c[l];
		return e;
	}
	return ye(c);
}
var q = function() {
	var t = /* @__PURE__ */ m(function(v, s, n, o) {
		for (n = n || {}, o = v.length; o--; n[v[o]] = s);
		return n;
	}, "o"), e = [1, 4], i = [1, 13], c = [1, 12], g$1 = [1, 15], l = [1, 16], u = [1, 20], f = [1, 19], _ = [
		6,
		7,
		8
	], b = [1, 26], y = [1, 24], R$1 = [1, 25], D = [
		6,
		7,
		11
	], J = [
		1,
		6,
		13,
		15,
		16,
		19,
		22
	], K = [1, 33], Q = [1, 34], w = [
		1,
		6,
		7,
		11,
		13,
		15,
		16,
		19,
		22
	], G = {
		trace: /* @__PURE__ */ m(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			mindMap: 4,
			spaceLines: 5,
			SPACELINE: 6,
			NL: 7,
			MINDMAP: 8,
			document: 9,
			stop: 10,
			EOF: 11,
			statement: 12,
			SPACELIST: 13,
			node: 14,
			ICON: 15,
			CLASS: 16,
			nodeWithId: 17,
			nodeWithoutId: 18,
			NODE_DSTART: 19,
			NODE_DESCR: 20,
			NODE_DEND: 21,
			NODE_ID: 22,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			6: "SPACELINE",
			7: "NL",
			8: "MINDMAP",
			11: "EOF",
			13: "SPACELIST",
			15: "ICON",
			16: "CLASS",
			19: "NODE_DSTART",
			20: "NODE_DESCR",
			21: "NODE_DEND",
			22: "NODE_ID"
		},
		productions_: [
			0,
			[3, 1],
			[3, 2],
			[5, 1],
			[5, 2],
			[5, 2],
			[4, 2],
			[4, 3],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 2],
			[10, 2],
			[9, 3],
			[9, 2],
			[12, 2],
			[12, 2],
			[12, 2],
			[12, 1],
			[12, 1],
			[12, 1],
			[12, 1],
			[12, 1],
			[14, 1],
			[14, 1],
			[18, 3],
			[17, 1],
			[17, 4]
		],
		performAction: /* @__PURE__ */ m(function(s, n, o, a, p, r, A) {
			var d$1 = r.length - 1;
			switch (p) {
				case 6:
				case 7: return a;
				case 8:
					a.getLogger().trace("Stop NL ");
					break;
				case 9:
					a.getLogger().trace("Stop EOF ");
					break;
				case 11:
					a.getLogger().trace("Stop NL2 ");
					break;
				case 12:
					a.getLogger().trace("Stop EOF2 ");
					break;
				case 15:
					a.getLogger().info("Node: ", r[d$1].id), a.addNode(r[d$1 - 1].length, r[d$1].id, r[d$1].descr, r[d$1].type);
					break;
				case 16:
					a.getLogger().trace("Icon: ", r[d$1]), a.decorateNode({ icon: r[d$1] });
					break;
				case 17:
				case 21:
					a.decorateNode({ class: r[d$1] });
					break;
				case 18:
					a.getLogger().trace("SPACELIST");
					break;
				case 19:
					a.getLogger().trace("Node: ", r[d$1].id), a.addNode(0, r[d$1].id, r[d$1].descr, r[d$1].type);
					break;
				case 20:
					a.decorateNode({ icon: r[d$1] });
					break;
				case 25:
					a.getLogger().trace("node found ..", r[d$1 - 2]), this.$ = {
						id: r[d$1 - 1],
						descr: r[d$1 - 1],
						type: a.getType(r[d$1 - 2], r[d$1])
					};
					break;
				case 26:
					this.$ = {
						id: r[d$1],
						descr: r[d$1],
						type: a.nodeType.DEFAULT
					};
					break;
				case 27:
					a.getLogger().trace("node found ..", r[d$1 - 3]), this.$ = {
						id: r[d$1 - 3],
						descr: r[d$1 - 1],
						type: a.getType(r[d$1 - 2], r[d$1])
					};
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				5: 3,
				6: [1, 5],
				8: e
			},
			{ 1: [3] },
			{ 1: [2, 1] },
			{
				4: 6,
				6: [1, 7],
				7: [1, 8],
				8: e
			},
			{
				6: i,
				7: [1, 10],
				9: 9,
				12: 11,
				13: c,
				14: 14,
				15: g$1,
				16: l,
				17: 17,
				18: 18,
				19: u,
				22: f
			},
			t(_, [2, 3]),
			{ 1: [2, 2] },
			t(_, [2, 4]),
			t(_, [2, 5]),
			{
				1: [2, 6],
				6: i,
				12: 21,
				13: c,
				14: 14,
				15: g$1,
				16: l,
				17: 17,
				18: 18,
				19: u,
				22: f
			},
			{
				6: i,
				9: 22,
				12: 11,
				13: c,
				14: 14,
				15: g$1,
				16: l,
				17: 17,
				18: 18,
				19: u,
				22: f
			},
			{
				6: b,
				7: y,
				10: 23,
				11: R$1
			},
			t(D, [2, 22], {
				17: 17,
				18: 18,
				14: 27,
				15: [1, 28],
				16: [1, 29],
				19: u,
				22: f
			}),
			t(D, [2, 18]),
			t(D, [2, 19]),
			t(D, [2, 20]),
			t(D, [2, 21]),
			t(D, [2, 23]),
			t(D, [2, 24]),
			t(D, [2, 26], { 19: [1, 30] }),
			{ 20: [1, 31] },
			{
				6: b,
				7: y,
				10: 32,
				11: R$1
			},
			{
				1: [2, 7],
				6: i,
				12: 21,
				13: c,
				14: 14,
				15: g$1,
				16: l,
				17: 17,
				18: 18,
				19: u,
				22: f
			},
			t(J, [2, 14], {
				7: K,
				11: Q
			}),
			t(w, [2, 8]),
			t(w, [2, 9]),
			t(w, [2, 10]),
			t(D, [2, 15]),
			t(D, [2, 16]),
			t(D, [2, 17]),
			{ 20: [1, 35] },
			{ 21: [1, 36] },
			t(J, [2, 13], {
				7: K,
				11: Q
			}),
			t(w, [2, 11]),
			t(w, [2, 12]),
			{ 21: [1, 37] },
			t(D, [2, 25]),
			t(D, [2, 27])
		],
		defaultActions: {
			2: [2, 1],
			6: [2, 2]
		},
		parseError: /* @__PURE__ */ m(function(s, n) {
			if (n.recoverable) this.trace(s);
			else {
				var o = new Error(s);
				throw o.hash = n, o;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ m(function(s) {
			var n = this, o = [0], a = [], p = [null], r = [], A = this.table, d$1 = "", M = 0, Z = 0, re = 2, ee = 1, oe = r.slice.call(arguments, 1), m$1 = Object.create(this.lexer), T = { yy: {} };
			for (var $ in this.yy) Object.prototype.hasOwnProperty.call(this.yy, $) && (T.yy[$] = this.yy[$]);
			m$1.setInput(s, T.yy), T.yy.lexer = m$1, T.yy.parser = this, typeof m$1.yylloc > "u" && (m$1.yylloc = {});
			var H = m$1.yylloc;
			r.push(H);
			var ae = m$1.options && m$1.options.ranges;
			typeof T.yy.parseError == "function" ? this.parseError = T.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function ce(N) {
				o.length = o.length - 2 * N, p.length = p.length - N, r.length = r.length - N;
			}
			m(ce, "popStack");
			function te() {
				var N;
				return N = a.pop() || m$1.lex() || ee, typeof N != "number" && (N instanceof Array && (a = N, N = a.pop()), N = n.symbols_[N] || N), N;
			}
			m(te, "lex");
			for (var S, O, k, z, I = {}, V, L, ie, B;;) {
				if (O = o[o.length - 1], this.defaultActions[O] ? k = this.defaultActions[O] : ((S === null || typeof S > "u") && (S = te()), k = A[O] && A[O][S]), typeof k > "u" || !k.length || !k[0]) {
					var W = "";
					B = [];
					for (V in A[O]) this.terminals_[V] && V > re && B.push("'" + this.terminals_[V] + "'");
					m$1.showPosition ? W = "Parse error on line " + (M + 1) + `:
` + m$1.showPosition() + `
Expecting ` + B.join(", ") + ", got '" + (this.terminals_[S] || S) + "'" : W = "Parse error on line " + (M + 1) + ": Unexpected " + (S == ee ? "end of input" : "'" + (this.terminals_[S] || S) + "'"), this.parseError(W, {
						text: m$1.match,
						token: this.terminals_[S] || S,
						line: m$1.yylineno,
						loc: H,
						expected: B
					});
				}
				if (k[0] instanceof Array && k.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + O + ", token: " + S);
				switch (k[0]) {
					case 1:
						o.push(S), p.push(m$1.yytext), r.push(m$1.yylloc), o.push(k[1]), S = null, Z = m$1.yyleng, d$1 = m$1.yytext, M = m$1.yylineno, H = m$1.yylloc;
						break;
					case 2:
						if (L = this.productions_[k[1]][1], I.$ = p[p.length - L], I._$ = {
							first_line: r[r.length - (L || 1)].first_line,
							last_line: r[r.length - 1].last_line,
							first_column: r[r.length - (L || 1)].first_column,
							last_column: r[r.length - 1].last_column
						}, ae && (I._$.range = [r[r.length - (L || 1)].range[0], r[r.length - 1].range[1]]), z = this.performAction.apply(I, [
							d$1,
							Z,
							M,
							T.yy,
							k[1],
							p,
							r
						].concat(oe)), typeof z < "u") return z;
						L && (o = o.slice(0, -1 * L * 2), p = p.slice(0, -1 * L), r = r.slice(0, -1 * L)), o.push(this.productions_[k[1]][0]), p.push(I.$), r.push(I._$), ie = A[o[o.length - 2]][o[o.length - 1]], o.push(ie);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	G.lexer = /* @__PURE__ */ function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ m(function(n, o) {
				if (this.yy.parser) this.yy.parser.parseError(n, o);
				else throw new Error(n);
			}, "parseError"),
			setInput: /* @__PURE__ */ m(function(s, n) {
				return this.yy = n || this.yy || {}, this._input = s, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ m(function() {
				var s = this._input[0];
				this.yytext += s, this.yyleng++, this.offset++, this.match += s, this.matched += s;
				return s.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), s;
			}, "input"),
			unput: /* @__PURE__ */ m(function(s) {
				var n = s.length, o = s.split(/(?:\r\n?|\n)/g);
				this._input = s + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - n), this.offset -= n;
				var a = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), o.length - 1 && (this.yylineno -= o.length - 1);
				var p = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: o ? (o.length === a.length ? this.yylloc.first_column : 0) + a[a.length - o.length].length - o[0].length : this.yylloc.first_column - n
				}, this.options.ranges && (this.yylloc.range = [p[0], p[0] + this.yyleng - n]), this.yyleng = this.yytext.length, this;
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
			less: /* @__PURE__ */ m(function(s) {
				this.unput(this.match.slice(s));
			}, "less"),
			pastInput: /* @__PURE__ */ m(function() {
				var s = this.matched.substr(0, this.matched.length - this.match.length);
				return (s.length > 20 ? "..." : "") + s.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ m(function() {
				var s = this.match;
				return s.length < 20 && (s += this._input.substr(0, 20 - s.length)), (s.substr(0, 20) + (s.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ m(function() {
				var s = this.pastInput(), n = new Array(s.length + 1).join("-");
				return s + this.upcomingInput() + `
` + n + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ m(function(s, n) {
				var o, a, p;
				if (this.options.backtrack_lexer && (p = {
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
				}, this.options.ranges && (p.yylloc.range = this.yylloc.range.slice(0))), a = s[0].match(/(?:\r\n?|\n).*/g), a && (this.yylineno += a.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: a ? a[a.length - 1].length - a[a.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + s[0].length
				}, this.yytext += s[0], this.match += s[0], this.matches = s, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(s[0].length), this.matched += s[0], o = this.performAction.call(this, this.yy, this, n, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), o) return o;
				if (this._backtrack) {
					for (var r in p) this[r] = p[r];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ m(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var s, n, o, a;
				this._more || (this.yytext = "", this.match = "");
				for (var p = this._currentRules(), r = 0; r < p.length; r++) if (o = this._input.match(this.rules[p[r]]), o && (!n || o[0].length > n[0].length)) {
					if (n = o, a = r, this.options.backtrack_lexer) {
						if (s = this.test_match(o, p[r]), s !== !1) return s;
						if (this._backtrack) {
							n = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return n ? (s = this.test_match(n, p[a]), s !== !1 ? s : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ m(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ m(function(n) {
				this.conditionStack.push(n);
			}, "begin"),
			popState: /* @__PURE__ */ m(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ m(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ m(function(n) {
				return n = this.conditionStack.length - 1 - Math.abs(n || 0), n >= 0 ? this.conditionStack[n] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ m(function(n) {
				this.begin(n);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ m(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ m(function(n, o, a, p) {
				switch (a) {
					case 0: return n.getLogger().trace("Found comment", o.yytext), 6;
					case 1: return 8;
					case 2:
						this.begin("CLASS");
						break;
					case 3: return this.popState(), 16;
					case 4:
						this.popState();
						break;
					case 5:
						n.getLogger().trace("Begin icon"), this.begin("ICON");
						break;
					case 6: return n.getLogger().trace("SPACELINE"), 6;
					case 7: return 7;
					case 8: return 15;
					case 9:
						n.getLogger().trace("end icon"), this.popState();
						break;
					case 10: return n.getLogger().trace("Exploding node"), this.begin("NODE"), 19;
					case 11: return n.getLogger().trace("Cloud"), this.begin("NODE"), 19;
					case 12: return n.getLogger().trace("Explosion Bang"), this.begin("NODE"), 19;
					case 13: return n.getLogger().trace("Cloud Bang"), this.begin("NODE"), 19;
					case 14: return this.begin("NODE"), 19;
					case 15: return this.begin("NODE"), 19;
					case 16: return this.begin("NODE"), 19;
					case 17: return this.begin("NODE"), 19;
					case 18: return 13;
					case 19: return 22;
					case 20: return 11;
					case 21:
						this.begin("NSTR2");
						break;
					case 22: return "NODE_DESCR";
					case 23:
						this.popState();
						break;
					case 24:
						n.getLogger().trace("Starting NSTR"), this.begin("NSTR");
						break;
					case 25: return n.getLogger().trace("description:", o.yytext), "NODE_DESCR";
					case 26:
						this.popState();
						break;
					case 27: return this.popState(), n.getLogger().trace("node end ))"), "NODE_DEND";
					case 28: return this.popState(), n.getLogger().trace("node end )"), "NODE_DEND";
					case 29: return this.popState(), n.getLogger().trace("node end ...", o.yytext), "NODE_DEND";
					case 30: return this.popState(), n.getLogger().trace("node end (("), "NODE_DEND";
					case 31: return this.popState(), n.getLogger().trace("node end (-"), "NODE_DEND";
					case 32: return this.popState(), n.getLogger().trace("node end (-"), "NODE_DEND";
					case 33: return this.popState(), n.getLogger().trace("node end (("), "NODE_DEND";
					case 34: return this.popState(), n.getLogger().trace("node end (("), "NODE_DEND";
					case 35: return n.getLogger().trace("Long description:", o.yytext), 20;
					case 36: return n.getLogger().trace("Long description:", o.yytext), 20;
				}
			}, "anonymous"),
			rules: [
				/^(?:\s*%%.*)/i,
				/^(?:mindmap\b)/i,
				/^(?::::)/i,
				/^(?:.+)/i,
				/^(?:\n)/i,
				/^(?:::icon\()/i,
				/^(?:[\s]+[\n])/i,
				/^(?:[\n]+)/i,
				/^(?:[^\)]+)/i,
				/^(?:\))/i,
				/^(?:-\))/i,
				/^(?:\(-)/i,
				/^(?:\)\))/i,
				/^(?:\))/i,
				/^(?:\(\()/i,
				/^(?:\{\{)/i,
				/^(?:\()/i,
				/^(?:\[)/i,
				/^(?:[\s]+)/i,
				/^(?:[^\(\[\n\)\{\}]+)/i,
				/^(?:$)/i,
				/^(?:["][`])/i,
				/^(?:[^`"]+)/i,
				/^(?:[`]["])/i,
				/^(?:["])/i,
				/^(?:[^"]+)/i,
				/^(?:["])/i,
				/^(?:[\)]\))/i,
				/^(?:[\)])/i,
				/^(?:[\]])/i,
				/^(?:\}\})/i,
				/^(?:\(-)/i,
				/^(?:-\))/i,
				/^(?:\(\()/i,
				/^(?:\()/i,
				/^(?:[^\)\]\(\}]+)/i,
				/^(?:.+(?!\(\())/i
			],
			conditions: {
				CLASS: {
					rules: [3, 4],
					inclusive: !1
				},
				ICON: {
					rules: [8, 9],
					inclusive: !1
				},
				NSTR2: {
					rules: [22, 23],
					inclusive: !1
				},
				NSTR: {
					rules: [25, 26],
					inclusive: !1
				},
				NODE: {
					rules: [
						21,
						24,
						27,
						28,
						29,
						30,
						31,
						32,
						33,
						34,
						35,
						36
					],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						2,
						5,
						6,
						7,
						10,
						11,
						12,
						13,
						14,
						15,
						16,
						17,
						18,
						19,
						20
					],
					inclusive: !0
				}
			}
		};
	}();
	function P() {
		this.yy = {};
	}
	return m(P, "Parser"), P.prototype = G, G.Parser = P, new P();
}();
q.parser = q;
var De = q, x = {
	DEFAULT: 0,
	NO_BORDER: 0,
	ROUNDED_RECT: 1,
	RECT: 2,
	CIRCLE: 3,
	CLOUD: 4,
	BANG: 5,
	HEXAGON: 6
}, U, Ne = (U = class {
	constructor() {
		this.nodes = [], this.count = 0, this.elements = {}, this.getLogger = this.getLogger.bind(this), this.nodeType = x, this.clear(), this.getType = this.getType.bind(this), this.getElementById = this.getElementById.bind(this), this.getParent = this.getParent.bind(this), this.getMindmap = this.getMindmap.bind(this), this.addNode = this.addNode.bind(this), this.decorateNode = this.decorateNode.bind(this);
	}
	clear() {
		this.nodes = [], this.count = 0, this.elements = {}, this.baseLevel = void 0;
	}
	getParent(e) {
		for (let i = this.nodes.length - 1; i >= 0; i--) if (this.nodes[i].level < e) return this.nodes[i];
		return null;
	}
	getMindmap() {
		return this.nodes.length > 0 ? this.nodes[0] : null;
	}
	addNode(e, i, c, g$1) {
		var y, R$1;
		R.info("addNode", e, i, c, g$1);
		let l = !1;
		this.nodes.length === 0 ? (this.baseLevel = e, e = 0, l = !0) : this.baseLevel !== void 0 && (e = e - this.baseLevel, l = !1);
		const u = yt();
		let f = ((y = u.mindmap) == null ? void 0 : y.padding) ?? Mf.mindmap.padding;
		switch (g$1) {
			case this.nodeType.ROUNDED_RECT:
			case this.nodeType.RECT:
			case this.nodeType.HEXAGON:
				f *= 2;
				break;
		}
		const _ = {
			id: this.count++,
			nodeId: _e(i, u),
			level: e,
			descr: _e(c, u),
			type: g$1,
			children: [],
			width: ((R$1 = u.mindmap) == null ? void 0 : R$1.maxNodeWidth) ?? Mf.mindmap.maxNodeWidth,
			padding: f,
			isRoot: l
		}, b = this.getParent(e);
		if (b) b.children.push(_), this.nodes.push(_);
		else if (l) this.nodes.push(_);
		else throw new Error(`There can be only one root. No parent could be found for ("${_.descr}")`);
	}
	getType(e, i) {
		switch (R.debug("In get type", e, i), e) {
			case "[": return this.nodeType.RECT;
			case "(": return i === ")" ? this.nodeType.ROUNDED_RECT : this.nodeType.CLOUD;
			case "((": return this.nodeType.CIRCLE;
			case ")": return this.nodeType.CLOUD;
			case "))": return this.nodeType.BANG;
			case "{{": return this.nodeType.HEXAGON;
			default: return this.nodeType.DEFAULT;
		}
	}
	setElementForId(e, i) {
		this.elements[e] = i;
	}
	getElementById(e) {
		return this.elements[e];
	}
	decorateNode(e) {
		if (!e) return;
		const i = yt(), c = this.nodes[this.nodes.length - 1];
		e.icon && (c.icon = _e(e.icon, i)), e.class && (c.class = _e(e.class, i));
	}
	type2Str(e) {
		switch (e) {
			case this.nodeType.DEFAULT: return "no-border";
			case this.nodeType.RECT: return "rect";
			case this.nodeType.ROUNDED_RECT: return "rounded-rect";
			case this.nodeType.CIRCLE: return "circle";
			case this.nodeType.CLOUD: return "cloud";
			case this.nodeType.BANG: return "bang";
			case this.nodeType.HEXAGON: return "hexgon";
			default: return "no-border";
		}
	}
	assignSections(e, i) {
		if (e.level === 0 ? e.section = void 0 : e.section = i, e.children) for (const [c, g$1] of e.children.entries()) {
			const l = e.level === 0 ? c : i;
			this.assignSections(g$1, l);
		}
	}
	flattenNodes(e, i) {
		const c = ["mindmap-node"];
		e.isRoot === !0 ? c.push("section-root", "section--1") : e.section !== void 0 && c.push(`section-${e.section}`), e.class && c.push(e.class);
		const g$1 = c.join(" "), l = /* @__PURE__ */ m((f) => {
			switch (f) {
				case x.CIRCLE: return "mindmapCircle";
				case x.RECT: return "rect";
				case x.ROUNDED_RECT: return "rounded";
				case x.CLOUD: return "cloud";
				case x.BANG: return "bang";
				case x.HEXAGON: return "hexagon";
				case x.DEFAULT: return "defaultMindmapNode";
				case x.NO_BORDER:
				default: return "rect";
			}
		}, "getShapeFromType"), u = {
			id: e.id.toString(),
			domId: "node_" + e.id.toString(),
			label: e.descr,
			isGroup: !1,
			shape: l(e.type),
			width: e.width,
			height: e.height ?? 0,
			padding: e.padding,
			cssClasses: g$1,
			cssStyles: [],
			look: "default",
			icon: e.icon,
			x: e.x,
			y: e.y,
			level: e.level,
			nodeId: e.nodeId,
			type: e.type,
			section: e.section
		};
		if (i.push(u), e.children) for (const f of e.children) this.flattenNodes(f, i);
	}
	generateEdges(e, i) {
		if (e.children) for (const c of e.children) {
			let g$1 = "edge";
			c.section !== void 0 && (g$1 += ` section-edge-${c.section}`);
			const l = e.level + 1;
			g$1 += ` edge-depth-${l}`;
			const u = {
				id: `edge_${e.id}_${c.id}`,
				start: e.id.toString(),
				end: c.id.toString(),
				type: "normal",
				curve: "basis",
				thickness: "normal",
				look: "default",
				classes: g$1,
				depth: e.level,
				section: c.section
			};
			i.push(u), this.generateEdges(c, i);
		}
	}
	getData() {
		const e = this.getMindmap(), i = yt(), g$1 = lz().layout !== void 0, l = i;
		if (g$1 || (l.layout = "cose-bilkent"), !e) return {
			nodes: [],
			edges: [],
			config: l
		};
		R.debug("getData: mindmapRoot", e, i), this.assignSections(e);
		const u = [], f = [];
		this.flattenNodes(e, u), this.generateEdges(e, f), R.debug(`getData: processed ${u.length} nodes and ${f.length} edges`);
		const _ = /* @__PURE__ */ new Map();
		for (const b of u) _.set(b.id, {
			shape: b.shape,
			width: b.width,
			height: b.height,
			padding: b.padding
		});
		return {
			nodes: u,
			edges: f,
			config: l,
			rootNode: e,
			markers: ["point"],
			direction: "TB",
			nodeSpacing: 50,
			rankSpacing: 50,
			shapes: Object.fromEntries(_),
			type: "mindmap",
			diagramId: "mindmap-" + Se()
		};
	}
	getLogger() {
		return R;
	}
}, m(U, "MindmapDB"), U), Le = { draw: /* @__PURE__ */ m(async (t, e, i, c) => {
	var _, b;
	R.debug(`Rendering mindmap diagram
` + t);
	const g$1 = c.db, l = g$1.getData(), u = g(e, l.config.securityLevel);
	l.type = c.type, l.layoutAlgorithm = Rz(l.config.layout, { fallback: "cose-bilkent" }), l.diagramId = e, g$1.getMindmap() && (l.nodes.forEach((y) => {
		y.shape === "rounded" ? (y.radius = 15, y.taper = 15, y.stroke = "none", y.width = 0, y.padding = 15) : y.shape === "circle" ? y.padding = 10 : y.shape === "rect" && (y.width = 0, y.padding = 10);
	}), await Dz(l, u), d(u, ((_ = l.config.mindmap) == null ? void 0 : _.padding) ?? Mf.mindmap.padding, "mindmapDiagram", ((b = l.config.mindmap) == null ? void 0 : b.useMaxWidth) ?? Mf.mindmap.useMaxWidth));
}, "draw") }, xe = /* @__PURE__ */ m((t) => {
	let e = "";
	for (let i = 0; i < t.THEME_COLOR_LIMIT; i++) t["lineColor" + i] = t["lineColor" + i] || t["cScaleInv" + i], Kn(t["lineColor" + i]) ? t["lineColor" + i] = Y(t["lineColor" + i], 20) : t["lineColor" + i] = et(t["lineColor" + i], 20);
	for (let i = 0; i < t.THEME_COLOR_LIMIT; i++) {
		const c = "" + (17 - 3 * i);
		e += `
    .section-${i - 1} rect, .section-${i - 1} path, .section-${i - 1} circle, .section-${i - 1} polygon, .section-${i - 1} path  {
      fill: ${t["cScale" + i]};
    }
    .section-${i - 1} text {
     fill: ${t["cScaleLabel" + i]};
    }
    .node-icon-${i - 1} {
      font-size: 40px;
      color: ${t["cScaleLabel" + i]};
    }
    .section-edge-${i - 1}{
      stroke: ${t["cScale" + i]};
    }
    .edge-depth-${i - 1}{
      stroke-width: ${c};
    }
    .section-${i - 1} line {
      stroke: ${t["cScaleInv" + i]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
	}
	return e;
}, "genSections"), Zt = {
	get db() {
		return new Ne();
	},
	renderer: Le,
	parser: De,
	styles: /* @__PURE__ */ m((t) => `
  .edge {
    stroke-width: 3;
  }
  ${xe(t)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .section-root span {
    color: ${t.gitBranchLabel0};
  }
  .section-2 span {
    color: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`, "getStyles")
};
export { Zt as diagram };
