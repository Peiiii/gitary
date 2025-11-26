import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { N as require_jsx_runtime, P as require_react, w as require_react_dom } from "./chakra-ui-NHV_-bGL.js";
import { k as require_lodash } from "./react-utils-DE1lHEcz.js";
import { t as require_client } from "./vendor-BKa3f7Q_.js";
import "./common-utils-BCFfNPpf.js";
import "./react-markdown-14W_w1u6.js";
import "./monaco-De2c8opW.js";
import "./remark-gfm-BxiTB6j-.js";
import { $n as require_markdown_it_task_lists, Gn as yt, Ln as w5, Ot as b5, Qn as require_pinyin, Vn as x5, Wn as y5, dn as m5, er as require_markdown_it_multimd_table, nn as k5, qt as gt, un as m, w as If, wi as require_classnames, xt as _5 } from "./app-CHqOxvpb.js";
import { t as l } from "./chunk-FMBD7UC4-5875f4cd-QgVcbw-k.js";
import { a as o, n as g, s as y, t as d } from "./chunk-TZMSLE5B-d1425621-fj5kV4kS.js";
import { t as hn } from "./arc-55eabd0f-Bwx46R9v.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
var U = function() {
	var t = /* @__PURE__ */ m(function(h, i, a, o$1) {
		for (a = a || {}, o$1 = h.length; o$1--; a[h[o$1]] = i);
		return a;
	}, "o"), e = [
		6,
		8,
		10,
		11,
		12,
		14,
		16,
		17,
		18
	], s = [1, 9], c = [1, 10], r = [1, 11], y$1 = [1, 12], u = [1, 13], d$1 = [1, 14], m$1 = {
		trace: /* @__PURE__ */ m(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			journey: 4,
			document: 5,
			EOF: 6,
			line: 7,
			SPACE: 8,
			statement: 9,
			NEWLINE: 10,
			title: 11,
			acc_title: 12,
			acc_title_value: 13,
			acc_descr: 14,
			acc_descr_value: 15,
			acc_descr_multiline_value: 16,
			section: 17,
			taskName: 18,
			taskData: 19,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "journey",
			6: "EOF",
			8: "SPACE",
			10: "NEWLINE",
			11: "title",
			12: "acc_title",
			13: "acc_title_value",
			14: "acc_descr",
			15: "acc_descr_value",
			16: "acc_descr_multiline_value",
			17: "section",
			18: "taskName",
			19: "taskData"
		},
		productions_: [
			0,
			[3, 3],
			[5, 0],
			[5, 2],
			[7, 2],
			[7, 1],
			[7, 1],
			[7, 1],
			[9, 1],
			[9, 2],
			[9, 2],
			[9, 1],
			[9, 1],
			[9, 2]
		],
		performAction: /* @__PURE__ */ m(function(i, a, o$1, p, f, l$1, b) {
			var k = l$1.length - 1;
			switch (f) {
				case 1: return l$1[k - 1];
				case 2:
					this.$ = [];
					break;
				case 3:
					l$1[k - 1].push(l$1[k]), this.$ = l$1[k - 1];
					break;
				case 4:
				case 5:
					this.$ = l$1[k];
					break;
				case 6:
				case 7:
					this.$ = [];
					break;
				case 8:
					p.setDiagramTitle(l$1[k].substr(6)), this.$ = l$1[k].substr(6);
					break;
				case 9:
					this.$ = l$1[k].trim(), p.setAccTitle(this.$);
					break;
				case 10:
				case 11:
					this.$ = l$1[k].trim(), p.setAccDescription(this.$);
					break;
				case 12:
					p.addSection(l$1[k].substr(8)), this.$ = l$1[k].substr(8);
					break;
				case 13:
					p.addTask(l$1[k - 1], l$1[k]), this.$ = "task";
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			t(e, [2, 2], { 5: 3 }),
			{
				6: [1, 4],
				7: 5,
				8: [1, 6],
				9: 7,
				10: [1, 8],
				11: s,
				12: c,
				14: r,
				16: y$1,
				17: u,
				18: d$1
			},
			t(e, [2, 7], { 1: [2, 1] }),
			t(e, [2, 3]),
			{
				9: 15,
				11: s,
				12: c,
				14: r,
				16: y$1,
				17: u,
				18: d$1
			},
			t(e, [2, 5]),
			t(e, [2, 6]),
			t(e, [2, 8]),
			{ 13: [1, 16] },
			{ 15: [1, 17] },
			t(e, [2, 11]),
			t(e, [2, 12]),
			{ 19: [1, 18] },
			t(e, [2, 4]),
			t(e, [2, 9]),
			t(e, [2, 10]),
			t(e, [2, 13])
		],
		defaultActions: {},
		parseError: /* @__PURE__ */ m(function(i, a) {
			if (a.recoverable) this.trace(i);
			else {
				var o$1 = new Error(i);
				throw o$1.hash = a, o$1;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ m(function(i) {
			var a = this, o$1 = [0], p = [], f = [null], l$1 = [], b = this.table, k = "", C = 0, K = 0, pt = 2, Q = 1, dt = l$1.slice.call(arguments, 1), _ = Object.create(this.lexer), I = { yy: {} };
			for (var O in this.yy) Object.prototype.hasOwnProperty.call(this.yy, O) && (I.yy[O] = this.yy[O]);
			_.setInput(i, I.yy), I.yy.lexer = _, I.yy.parser = this, typeof _.yylloc > "u" && (_.yylloc = {});
			var Y = _.yylloc;
			l$1.push(Y);
			var yt$1 = _.options && _.options.ranges;
			typeof I.yy.parseError == "function" ? this.parseError = I.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function ft(w) {
				o$1.length = o$1.length - 2 * w, f.length = f.length - w, l$1.length = l$1.length - w;
			}
			m(ft, "popStack");
			function D() {
				var w;
				return w = p.pop() || _.lex() || Q, typeof w != "number" && (w instanceof Array && (p = w, w = p.pop()), w = a.symbols_[w] || w), w;
			}
			m(D, "lex");
			for (var v, A, T, q, F = {}, N, M, tt, z;;) {
				if (A = o$1[o$1.length - 1], this.defaultActions[A] ? T = this.defaultActions[A] : ((v === null || typeof v > "u") && (v = D()), T = b[A] && b[A][v]), typeof T > "u" || !T.length || !T[0]) {
					var X = "";
					z = [];
					for (N in b[A]) this.terminals_[N] && N > pt && z.push("'" + this.terminals_[N] + "'");
					_.showPosition ? X = "Parse error on line " + (C + 1) + `:
` + _.showPosition() + `
Expecting ` + z.join(", ") + ", got '" + (this.terminals_[v] || v) + "'" : X = "Parse error on line " + (C + 1) + ": Unexpected " + (v == Q ? "end of input" : "'" + (this.terminals_[v] || v) + "'"), this.parseError(X, {
						text: _.match,
						token: this.terminals_[v] || v,
						line: _.yylineno,
						loc: Y,
						expected: z
					});
				}
				if (T[0] instanceof Array && T.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + A + ", token: " + v);
				switch (T[0]) {
					case 1:
						o$1.push(v), f.push(_.yytext), l$1.push(_.yylloc), o$1.push(T[1]), v = null, K = _.yyleng, k = _.yytext, C = _.yylineno, Y = _.yylloc;
						break;
					case 2:
						if (M = this.productions_[T[1]][1], F.$ = f[f.length - M], F._$ = {
							first_line: l$1[l$1.length - (M || 1)].first_line,
							last_line: l$1[l$1.length - 1].last_line,
							first_column: l$1[l$1.length - (M || 1)].first_column,
							last_column: l$1[l$1.length - 1].last_column
						}, yt$1 && (F._$.range = [l$1[l$1.length - (M || 1)].range[0], l$1[l$1.length - 1].range[1]]), q = this.performAction.apply(F, [
							k,
							K,
							C,
							I.yy,
							T[1],
							f,
							l$1
						].concat(dt)), typeof q < "u") return q;
						M && (o$1 = o$1.slice(0, -1 * M * 2), f = f.slice(0, -1 * M), l$1 = l$1.slice(0, -1 * M)), o$1.push(this.productions_[T[1]][0]), f.push(F.$), l$1.push(F._$), tt = b[o$1[o$1.length - 2]][o$1[o$1.length - 1]], o$1.push(tt);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	m$1.lexer = /* @__PURE__ */ function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ m(function(a, o$1) {
				if (this.yy.parser) this.yy.parser.parseError(a, o$1);
				else throw new Error(a);
			}, "parseError"),
			setInput: /* @__PURE__ */ m(function(i, a) {
				return this.yy = a || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ m(function() {
				var i = this._input[0];
				this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i;
				return i.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
			}, "input"),
			unput: /* @__PURE__ */ m(function(i) {
				var a = i.length, o$1 = i.split(/(?:\r\n?|\n)/g);
				this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - a), this.offset -= a;
				var p = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), o$1.length - 1 && (this.yylineno -= o$1.length - 1);
				var f = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: o$1 ? (o$1.length === p.length ? this.yylloc.first_column : 0) + p[p.length - o$1.length].length - o$1[0].length : this.yylloc.first_column - a
				}, this.options.ranges && (this.yylloc.range = [f[0], f[0] + this.yyleng - a]), this.yyleng = this.yytext.length, this;
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
			less: /* @__PURE__ */ m(function(i) {
				this.unput(this.match.slice(i));
			}, "less"),
			pastInput: /* @__PURE__ */ m(function() {
				var i = this.matched.substr(0, this.matched.length - this.match.length);
				return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ m(function() {
				var i = this.match;
				return i.length < 20 && (i += this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ m(function() {
				var i = this.pastInput(), a = new Array(i.length + 1).join("-");
				return i + this.upcomingInput() + `
` + a + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ m(function(i, a) {
				var o$1, p, f;
				if (this.options.backtrack_lexer && (f = {
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
				}, this.options.ranges && (f.yylloc.range = this.yylloc.range.slice(0))), p = i[0].match(/(?:\r\n?|\n).*/g), p && (this.yylineno += p.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: p ? p[p.length - 1].length - p[p.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
				}, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(i[0].length), this.matched += i[0], o$1 = this.performAction.call(this, this.yy, this, a, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), o$1) return o$1;
				if (this._backtrack) {
					for (var l$1 in f) this[l$1] = f[l$1];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ m(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var i, a, o$1, p;
				this._more || (this.yytext = "", this.match = "");
				for (var f = this._currentRules(), l$1 = 0; l$1 < f.length; l$1++) if (o$1 = this._input.match(this.rules[f[l$1]]), o$1 && (!a || o$1[0].length > a[0].length)) {
					if (a = o$1, p = l$1, this.options.backtrack_lexer) {
						if (i = this.test_match(o$1, f[l$1]), i !== !1) return i;
						if (this._backtrack) {
							a = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return a ? (i = this.test_match(a, f[p]), i !== !1 ? i : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ m(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ m(function(a) {
				this.conditionStack.push(a);
			}, "begin"),
			popState: /* @__PURE__ */ m(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ m(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ m(function(a) {
				return a = this.conditionStack.length - 1 - Math.abs(a || 0), a >= 0 ? this.conditionStack[a] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ m(function(a) {
				this.begin(a);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ m(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ m(function(a, o$1, p, f) {
				switch (p) {
					case 0: break;
					case 1: break;
					case 2: return 10;
					case 3: break;
					case 4: break;
					case 5: return 4;
					case 6: return 11;
					case 7: return this.begin("acc_title"), 12;
					case 8: return this.popState(), "acc_title_value";
					case 9: return this.begin("acc_descr"), 14;
					case 10: return this.popState(), "acc_descr_value";
					case 11:
						this.begin("acc_descr_multiline");
						break;
					case 12:
						this.popState();
						break;
					case 13: return "acc_descr_multiline_value";
					case 14: return 17;
					case 15: return 18;
					case 16: return 19;
					case 17: return ":";
					case 18: return 6;
					case 19: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:%(?!\{)[^\n]*)/i,
				/^(?:[^\}]%%[^\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:#[^\n]*)/i,
				/^(?:journey\b)/i,
				/^(?:title\s[^#\n;]+)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:section\s[^#:\n;]+)/i,
				/^(?:[^#:\n;]+)/i,
				/^(?::[^#\n;]+)/i,
				/^(?::)/i,
				/^(?:$)/i,
				/^(?:.)/i
			],
			conditions: {
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
				INITIAL: {
					rules: [
						0,
						1,
						2,
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
						19
					],
					inclusive: !0
				}
			}
		};
	}();
	function x() {
		this.yy = {};
	}
	return m(x, "Parser"), x.prototype = m$1, m$1.Parser = x, new x();
}();
U.parser = U;
var Et = U, V = "", Z = [], L = [], B = [], Ct = /* @__PURE__ */ m(function() {
	Z.length = 0, L.length = 0, V = "", B.length = 0, m5();
}, "clear"), Pt = /* @__PURE__ */ m(function(t) {
	V = t, Z.push(t);
}, "addSection"), It = /* @__PURE__ */ m(function() {
	return Z;
}, "getSections"), At = /* @__PURE__ */ m(function() {
	let t = it();
	const e = 100;
	let s = 0;
	for (; !t && s < e;) t = it(), s++;
	return L.push(...B), L;
}, "getTasks"), Ft = /* @__PURE__ */ m(function() {
	const t = [];
	return L.forEach((s) => {
		s.people && t.push(...s.people);
	}), [...new Set(t)].sort();
}, "updateActors"), Vt = /* @__PURE__ */ m(function(t, e) {
	const s = e.substr(1).split(":");
	let c = 0, r = [];
	s.length === 1 ? (c = Number(s[0]), r = []) : (c = Number(s[0]), r = s[1].split(","));
	const y$1 = r.map((d$1) => d$1.trim()), u = {
		section: V,
		type: V,
		people: y$1,
		task: t,
		score: c
	};
	B.push(u);
}, "addTask"), Rt = /* @__PURE__ */ m(function(t) {
	const e = {
		section: V,
		type: V,
		description: t,
		task: t,
		classes: []
	};
	L.push(e);
}, "addTaskOrg"), it = /* @__PURE__ */ m(function() {
	const t = /* @__PURE__ */ m(function(s) {
		return B[s].processed;
	}, "compileTask");
	let e = !0;
	for (const [s, c] of B.entries()) t(s), e = e && c.processed;
	return e;
}, "compileTasks"), rt = {
	getConfig: /* @__PURE__ */ m(() => yt().journey, "getConfig"),
	clear: Ct,
	setDiagramTitle: w5,
	getDiagramTitle: _5,
	setAccTitle: b5,
	getAccTitle: x5,
	setAccDescription: y5,
	getAccDescription: k5,
	addSection: Pt,
	getSections: It,
	getTasks: At,
	addTask: Vt,
	addTaskOrg: Rt,
	getActors: /* @__PURE__ */ m(function() {
		return Ft();
	}, "getActors")
}, jt = /* @__PURE__ */ m((t) => `.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor ? `fill: ${t.faceColor}` : "fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0 ? `fill: ${t.fillType0}` : ""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0 ? `fill: ${t.fillType1}` : ""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0 ? `fill: ${t.fillType2}` : ""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0 ? `fill: ${t.fillType3}` : ""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0 ? `fill: ${t.fillType4}` : ""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0 ? `fill: ${t.fillType5}` : ""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0 ? `fill: ${t.fillType6}` : ""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0 ? `fill: ${t.fillType7}` : ""};
  }

  .actor-0 {
    ${t.actor0 ? `fill: ${t.actor0}` : ""};
  }
  .actor-1 {
    ${t.actor1 ? `fill: ${t.actor1}` : ""};
  }
  .actor-2 {
    ${t.actor2 ? `fill: ${t.actor2}` : ""};
  }
  .actor-3 {
    ${t.actor3 ? `fill: ${t.actor3}` : ""};
  }
  .actor-4 {
    ${t.actor4 ? `fill: ${t.actor4}` : ""};
  }
  .actor-5 {
    ${t.actor5 ? `fill: ${t.actor5}` : ""};
  }
  ${l()}
`, "getStyles"), J = /* @__PURE__ */ m(function(t, e) {
	return o(t, e);
}, "drawRect"), Nt = /* @__PURE__ */ m(function(t, e) {
	const c = t.append("circle").attr("cx", e.cx).attr("cy", e.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), r = t.append("g");
	r.append("circle").attr("cx", e.cx - 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), r.append("circle").attr("cx", e.cx + 15 / 3).attr("cy", e.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
	function y$1(m$1) {
		const g$1 = hn().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
		m$1.append("path").attr("class", "mouth").attr("d", g$1).attr("transform", "translate(" + e.cx + "," + (e.cy + 2) + ")");
	}
	m(y$1, "smile");
	function u(m$1) {
		const g$1 = hn().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(7.5).outerRadius(6.8181818181818175);
		m$1.append("path").attr("class", "mouth").attr("d", g$1).attr("transform", "translate(" + e.cx + "," + (e.cy + 7) + ")");
	}
	m(u, "sad");
	function d$1(m$1) {
		m$1.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", e.cx - 5).attr("y1", e.cy + 7).attr("x2", e.cx + 5).attr("y2", e.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
	}
	return m(d$1, "ambivalent"), e.score > 3 ? y$1(r) : e.score < 3 ? u(r) : d$1(r), c;
}, "drawFace"), lt = /* @__PURE__ */ m(function(t, e) {
	const s = t.append("circle");
	return s.attr("cx", e.cx), s.attr("cy", e.cy), s.attr("class", "actor-" + e.pos), s.attr("fill", e.fill), s.attr("stroke", e.stroke), s.attr("r", e.r), s.class !== void 0 && s.attr("class", s.class), e.title !== void 0 && s.append("title").text(e.title), s;
}, "drawCircle"), ct = /* @__PURE__ */ m(function(t, e) {
	return g(t, e);
}, "drawText"), zt = /* @__PURE__ */ m(function(t, e) {
	function s(r, y$1, u, d$1, m$1) {
		return r + "," + y$1 + " " + (r + u) + "," + y$1 + " " + (r + u) + "," + (y$1 + d$1 - m$1) + " " + (r + u - m$1 * 1.2) + "," + (y$1 + d$1) + " " + r + "," + (y$1 + d$1);
	}
	m(s, "genPoints");
	const c = t.append("polygon");
	c.attr("points", s(e.x, e.y, 50, 20, 7)), c.attr("class", "labelBox"), e.y = e.y + e.labelMargin, e.x = e.x + .5 * e.labelMargin, ct(t, e);
}, "drawLabel"), Wt = /* @__PURE__ */ m(function(t, e, s) {
	const c = t.append("g"), r = y();
	r.x = e.x, r.y = e.y, r.fill = e.fill, r.width = s.width * e.taskCount + s.diagramMarginX * (e.taskCount - 1), r.height = s.height, r.class = "journey-section section-type-" + e.num, r.rx = 3, r.ry = 3, J(c, r), ht(s)(e.text, c, r.x, r.y, r.width, r.height, { class: "journey-section section-type-" + e.num }, s, e.colour);
}, "drawSection"), nt = -1, Ot = /* @__PURE__ */ m(function(t, e, s) {
	const c = e.x + s.width / 2, r = t.append("g");
	nt++;
	r.append("line").attr("id", "task" + nt).attr("x1", c).attr("y1", e.y).attr("x2", c).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), Nt(r, {
		cx: c,
		cy: 300 + (5 - e.score) * 30,
		score: e.score
	});
	const u = y();
	u.x = e.x, u.y = e.y, u.fill = e.fill, u.width = s.width, u.height = s.height, u.class = "task task-type-" + e.num, u.rx = 3, u.ry = 3, J(r, u);
	let d$1 = e.x + 14;
	e.people.forEach((m$1) => {
		const g$1 = e.actors[m$1].color;
		lt(r, {
			cx: d$1,
			cy: e.y,
			r: 7,
			fill: g$1,
			stroke: "#000",
			title: m$1,
			pos: e.actors[m$1].position
		}), d$1 += 10;
	}), ht(s)(e.task, r, u.x, u.y, u.width, u.height, { class: "task" }, s, e.colour);
}, "drawTask"), Yt = /* @__PURE__ */ m(function(t, e) {
	d(t, e);
}, "drawBackgroundRect"), ht = /* @__PURE__ */ function() {
	function t(r, y$1, u, d$1, m$1, g$1, x, h) {
		c(y$1.append("text").attr("x", u + m$1 / 2).attr("y", d$1 + g$1 / 2 + 5).style("font-color", h).style("text-anchor", "middle").text(r), x);
	}
	m(t, "byText");
	function e(r, y$1, u, d$1, m$1, g$1, x, h, i) {
		const { taskFontSize: a, taskFontFamily: o$1 } = h, p = r.split(/<br\s*\/?>/gi);
		for (let f = 0; f < p.length; f++) {
			const l$1 = f * a - a * (p.length - 1) / 2, b = y$1.append("text").attr("x", u + m$1 / 2).attr("y", d$1).attr("fill", i).style("text-anchor", "middle").style("font-size", a).style("font-family", o$1);
			b.append("tspan").attr("x", u + m$1 / 2).attr("dy", l$1).text(p[f]), b.attr("y", d$1 + g$1 / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), c(b, x);
		}
	}
	m(e, "byTspan");
	function s(r, y$1, u, d$1, m$1, g$1, x, h) {
		const i = y$1.append("switch"), o$1 = i.append("foreignObject").attr("x", u).attr("y", d$1).attr("width", m$1).attr("height", g$1).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		o$1.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(r), e(r, i, u, d$1, m$1, g$1, x, h), c(o$1, x);
	}
	m(s, "byFo");
	function c(r, y$1) {
		for (const u in y$1) u in y$1 && r.attr(u, y$1[u]);
	}
	return m(c, "_setTextAttrs"), function(r) {
		return r.textPlacement === "fo" ? s : r.textPlacement === "old" ? t : e;
	};
}(), j = {
	drawRect: J,
	drawCircle: lt,
	drawSection: Wt,
	drawText: ct,
	drawLabel: zt,
	drawTask: Ot,
	drawBackgroundRect: Yt,
	initGraphics: /* @__PURE__ */ m(function(t) {
		t.append("defs").append("marker").attr("id", "arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
	}, "initGraphics")
}, Xt = /* @__PURE__ */ m(function(t) {
	Object.keys(t).forEach(function(s) {
		$[s] = t[s];
	});
}, "setConf"), E = {}, W = 0;
function ut(t) {
	const e = yt().journey, s = e.maxLabelWidth;
	W = 0;
	let c = 60;
	Object.keys(E).forEach((r) => {
		const y$1 = E[r].color, u = {
			cx: 20,
			cy: c,
			r: 7,
			fill: y$1,
			stroke: "#000",
			pos: E[r].position
		};
		j.drawCircle(t, u);
		let d$1 = t.append("text").attr("visibility", "hidden").text(r);
		const m$1 = d$1.node().getBoundingClientRect().width;
		d$1.remove();
		let g$1 = [];
		if (m$1 <= s) g$1 = [r];
		else {
			const x = r.split(" ");
			let h = "";
			d$1 = t.append("text").attr("visibility", "hidden"), x.forEach((i) => {
				const a = h ? `${h} ${i}` : i;
				if (d$1.text(a), d$1.node().getBoundingClientRect().width > s) {
					if (h && g$1.push(h), h = i, d$1.text(i), d$1.node().getBoundingClientRect().width > s) {
						let p = "";
						for (const f of i) p += f, d$1.text(p + "-"), d$1.node().getBoundingClientRect().width > s && (g$1.push(p.slice(0, -1) + "-"), p = f);
						h = p;
					}
				} else h = a;
			}), h && g$1.push(h), d$1.remove();
		}
		g$1.forEach((x, h) => {
			const i = {
				x: 40,
				y: c + 7 + h * 20,
				fill: "#666",
				text: x,
				textMargin: e.boxTextMargin ?? 5
			}, o$1 = j.drawText(t, i).node().getBoundingClientRect().width;
			o$1 > W && o$1 > e.leftMargin - o$1 && (W = o$1);
		}), c += Math.max(20, g$1.length * 20);
	});
}
m(ut, "drawActorLegend");
var $ = yt().journey, P = 0, Gt = /* @__PURE__ */ m(function(t, e, s, c) {
	const r = yt(), y$1 = r.journey.titleColor, u = r.journey.titleFontSize, d$1 = r.journey.titleFontFamily, m$1 = r.securityLevel;
	let g$1;
	m$1 === "sandbox" && (g$1 = gt("#i" + e));
	const x = m$1 === "sandbox" ? gt(g$1.nodes()[0].contentDocument.body) : gt("body");
	S.init();
	const h = x.select("#" + e);
	j.initGraphics(h);
	const i = c.db.getTasks(), a = c.db.getDiagramTitle(), o$1 = c.db.getActors();
	for (const C in E) delete E[C];
	let p = 0;
	o$1.forEach((C) => {
		E[C] = {
			color: $.actorColours[p % $.actorColours.length],
			position: p
		}, p++;
	}), ut(h), P = $.leftMargin + W, S.insert(0, 0, P, Object.keys(E).length * 50), Ht(h, i, 0);
	const f = S.getBounds();
	a && h.append("text").text(a).attr("x", P).attr("font-size", u).attr("font-weight", "bold").attr("y", 25).attr("fill", y$1).attr("font-family", d$1);
	const l$1 = f.stopy - f.starty + 2 * $.diagramMarginY, b = P + f.stopx + 2 * $.diagramMarginX;
	If(h, l$1, b, $.useMaxWidth), h.append("line").attr("x1", P).attr("y1", $.height * 4).attr("x2", b - P - 4).attr("y2", $.height * 4).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)");
	const k = a ? 70 : 0;
	h.attr("viewBox", `${f.startx} -25 ${b} ${l$1 + k}`), h.attr("preserveAspectRatio", "xMinYMin meet"), h.attr("height", l$1 + k + 25);
}, "draw"), S = {
	data: {
		startx: void 0,
		stopx: void 0,
		starty: void 0,
		stopy: void 0
	},
	verticalPos: 0,
	sequenceItems: [],
	init: /* @__PURE__ */ m(function() {
		this.sequenceItems = [], this.data = {
			startx: void 0,
			stopx: void 0,
			starty: void 0,
			stopy: void 0
		}, this.verticalPos = 0;
	}, "init"),
	updateVal: /* @__PURE__ */ m(function(t, e, s, c) {
		t[e] === void 0 ? t[e] = s : t[e] = c(s, t[e]);
	}, "updateVal"),
	updateBounds: /* @__PURE__ */ m(function(t, e, s, c) {
		const r = yt().journey, y$1 = this;
		let u = 0;
		function d$1(m$1) {
			return /* @__PURE__ */ m(function(x) {
				u++;
				const h = y$1.sequenceItems.length - u + 1;
				y$1.updateVal(x, "starty", e - h * r.boxMargin, Math.min), y$1.updateVal(x, "stopy", c + h * r.boxMargin, Math.max), y$1.updateVal(S.data, "startx", t - h * r.boxMargin, Math.min), y$1.updateVal(S.data, "stopx", s + h * r.boxMargin, Math.max), m$1 !== "activation" && (y$1.updateVal(x, "startx", t - h * r.boxMargin, Math.min), y$1.updateVal(x, "stopx", s + h * r.boxMargin, Math.max), y$1.updateVal(S.data, "starty", e - h * r.boxMargin, Math.min), y$1.updateVal(S.data, "stopy", c + h * r.boxMargin, Math.max));
			}, "updateItemBounds");
		}
		m(d$1, "updateFn"), this.sequenceItems.forEach(d$1());
	}, "updateBounds"),
	insert: /* @__PURE__ */ m(function(t, e, s, c) {
		const r = Math.min(t, s), y$1 = Math.max(t, s), u = Math.min(e, c), d$1 = Math.max(e, c);
		this.updateVal(S.data, "startx", r, Math.min), this.updateVal(S.data, "starty", u, Math.min), this.updateVal(S.data, "stopx", y$1, Math.max), this.updateVal(S.data, "stopy", d$1, Math.max), this.updateBounds(r, u, y$1, d$1);
	}, "insert"),
	bumpVerticalPos: /* @__PURE__ */ m(function(t) {
		this.verticalPos = this.verticalPos + t, this.data.stopy = this.verticalPos;
	}, "bumpVerticalPos"),
	getVerticalPos: /* @__PURE__ */ m(function() {
		return this.verticalPos;
	}, "getVerticalPos"),
	getBounds: /* @__PURE__ */ m(function() {
		return this.data;
	}, "getBounds")
}, H = $.sectionFills, st = $.sectionColours, Ht = /* @__PURE__ */ m(function(t, e, s) {
	const c = yt().journey;
	let r = "";
	const u = s + (c.height * 2 + c.diagramMarginY);
	let d$1 = 0, m$1 = "#CCC", g$1 = "black", x = 0;
	for (const [h, i] of e.entries()) {
		if (r !== i.section) {
			m$1 = H[d$1 % H.length], x = d$1 % H.length, g$1 = st[d$1 % st.length];
			let o$1 = 0;
			const p = i.section;
			for (let l$1 = h; l$1 < e.length && e[l$1].section == p; l$1++) o$1 = o$1 + 1;
			const f = {
				x: h * c.taskMargin + h * c.width + P,
				y: 50,
				text: i.section,
				fill: m$1,
				num: x,
				colour: g$1,
				taskCount: o$1
			};
			j.drawSection(t, f, c), r = i.section, d$1++;
		}
		const a = i.people.reduce((o$1, p) => (E[p] && (o$1[p] = E[p]), o$1), {});
		i.x = h * c.taskMargin + h * c.width + P, i.y = u, i.width = c.diagramMarginX, i.height = c.diagramMarginY, i.colour = g$1, i.fill = m$1, i.num = x, i.actors = a, j.drawTask(t, i, c), S.insert(i.x, i.y, i.x + i.width + c.taskMargin, 450);
	}
}, "drawTasks"), at = {
	setConf: Xt,
	draw: Gt
}, ki = {
	parser: Et,
	db: rt,
	renderer: at,
	styles: jt,
	init: /* @__PURE__ */ m((t) => {
		at.setConf(t.journey), rt.clear();
	}, "init")
};
export { ki as diagram };
