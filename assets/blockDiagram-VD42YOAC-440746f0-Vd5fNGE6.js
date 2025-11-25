import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { F as require_react, P as require_jsx_runtime, w as require_react_dom } from "./chakra-ui-BP0KsvPN.js";
import { k as require_lodash } from "./react-utils-CBnCOsPf.js";
import { t as require_client } from "./vendor-D4MyOtoJ.js";
import "./common-utils-oTrucMut.js";
import "./monaco-DGZQwLgt.js";
import "./react-markdown-CC4NHZ99.js";
import "./remark-gfm-BOrJohj3.js";
import { $n as require_markdown_it_task_lists, Ct as _e, Gn as yt, M as Kc, Qn as require_pinyin, Sn as ri, T as Im, Xn as zi, Xt as hA, Yt as h1, Zn as zt, bn as qa, dn as m5, er as require_markdown_it_multimd_table, et as R, ft as V8, gt as Xt, mn as n5, o as Ar, qt as gt, t as $e, un as m, w as If, wi as require_classnames, zt as dn } from "./app-B8S090XF.js";
import "./_baseUniq-214847ec-BRMVCl18.js";
import { t as a } from "./clone-8a8d8292-DsDaipBQ.js";
import { t as l } from "./chunk-FMBD7UC4-5875f4cd-PjSBLvNV.js";
import { t as L } from "./graph-355e244d-pA-hTZ7k.js";
import { t as e } from "./channel-37719d92-BHe18KKm.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
var bt = function() {
	var e$1 = /* @__PURE__ */ m(function(N, x, g, p) {
		for (g = g || {}, p = N.length; p--; g[N[p]] = x);
		return g;
	}, "o"), t = [1, 15], a$1 = [1, 7], i = [1, 13], l$1 = [1, 14], s = [1, 19], r = [1, 16], n = [1, 17], o = [1, 18], u = [8, 30], h = [
		8,
		10,
		21,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], y = [1, 23], m$1 = [1, 24], L$1 = [
		8,
		10,
		15,
		16,
		21,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], E = [
		8,
		10,
		15,
		16,
		21,
		27,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], D = [1, 49], v = {
		trace: /* @__PURE__ */ m(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			spaceLines: 3,
			SPACELINE: 4,
			NL: 5,
			separator: 6,
			SPACE: 7,
			EOF: 8,
			start: 9,
			BLOCK_DIAGRAM_KEY: 10,
			document: 11,
			stop: 12,
			statement: 13,
			link: 14,
			LINK: 15,
			START_LINK: 16,
			LINK_LABEL: 17,
			STR: 18,
			nodeStatement: 19,
			columnsStatement: 20,
			SPACE_BLOCK: 21,
			blockStatement: 22,
			classDefStatement: 23,
			cssClassStatement: 24,
			styleStatement: 25,
			node: 26,
			SIZE: 27,
			COLUMNS: 28,
			"id-block": 29,
			end: 30,
			NODE_ID: 31,
			nodeShapeNLabel: 32,
			dirList: 33,
			DIR: 34,
			NODE_DSTART: 35,
			NODE_DEND: 36,
			BLOCK_ARROW_START: 37,
			BLOCK_ARROW_END: 38,
			classDef: 39,
			CLASSDEF_ID: 40,
			CLASSDEF_STYLEOPTS: 41,
			DEFAULT: 42,
			class: 43,
			CLASSENTITY_IDS: 44,
			STYLECLASS: 45,
			style: 46,
			STYLE_ENTITY_IDS: 47,
			STYLE_DEFINITION_DATA: 48,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "SPACELINE",
			5: "NL",
			7: "SPACE",
			8: "EOF",
			10: "BLOCK_DIAGRAM_KEY",
			15: "LINK",
			16: "START_LINK",
			17: "LINK_LABEL",
			18: "STR",
			21: "SPACE_BLOCK",
			27: "SIZE",
			28: "COLUMNS",
			29: "id-block",
			30: "end",
			31: "NODE_ID",
			34: "DIR",
			35: "NODE_DSTART",
			36: "NODE_DEND",
			37: "BLOCK_ARROW_START",
			38: "BLOCK_ARROW_END",
			39: "classDef",
			40: "CLASSDEF_ID",
			41: "CLASSDEF_STYLEOPTS",
			42: "DEFAULT",
			43: "class",
			44: "CLASSENTITY_IDS",
			45: "STYLECLASS",
			46: "style",
			47: "STYLE_ENTITY_IDS",
			48: "STYLE_DEFINITION_DATA"
		},
		productions_: [
			0,
			[3, 1],
			[3, 2],
			[3, 2],
			[6, 1],
			[6, 1],
			[6, 1],
			[9, 3],
			[12, 1],
			[12, 1],
			[12, 2],
			[12, 2],
			[11, 1],
			[11, 2],
			[14, 1],
			[14, 4],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[19, 3],
			[19, 2],
			[19, 1],
			[20, 1],
			[22, 4],
			[22, 3],
			[26, 1],
			[26, 2],
			[33, 1],
			[33, 2],
			[32, 3],
			[32, 4],
			[23, 3],
			[23, 3],
			[24, 3],
			[25, 3]
		],
		performAction: /* @__PURE__ */ m(function(x, g, p, b, S, c, _) {
			var f = c.length - 1;
			switch (S) {
				case 4:
					b.getLogger().debug("Rule: separator (NL) ");
					break;
				case 5:
					b.getLogger().debug("Rule: separator (Space) ");
					break;
				case 6:
					b.getLogger().debug("Rule: separator (EOF) ");
					break;
				case 7:
					b.getLogger().debug("Rule: hierarchy: ", c[f - 1]), b.setHierarchy(c[f - 1]);
					break;
				case 8:
					b.getLogger().debug("Stop NL ");
					break;
				case 9:
					b.getLogger().debug("Stop EOF ");
					break;
				case 10:
					b.getLogger().debug("Stop NL2 ");
					break;
				case 11:
					b.getLogger().debug("Stop EOF2 ");
					break;
				case 12:
					b.getLogger().debug("Rule: statement: ", c[f]), typeof c[f].length == "number" ? this.$ = c[f] : this.$ = [c[f]];
					break;
				case 13:
					b.getLogger().debug("Rule: statement #2: ", c[f - 1]), this.$ = [c[f - 1]].concat(c[f]);
					break;
				case 14:
					b.getLogger().debug("Rule: link: ", c[f], x), this.$ = {
						edgeTypeStr: c[f],
						label: ""
					};
					break;
				case 15:
					b.getLogger().debug("Rule: LABEL link: ", c[f - 3], c[f - 1], c[f]), this.$ = {
						edgeTypeStr: c[f],
						label: c[f - 1]
					};
					break;
				case 18:
					const A = parseInt(c[f]);
					this.$ = {
						id: b.generateId(),
						type: "space",
						label: "",
						width: A,
						children: []
					};
					break;
				case 23:
					b.getLogger().debug("Rule: (nodeStatement link node) ", c[f - 2], c[f - 1], c[f], " typestr: ", c[f - 1].edgeTypeStr);
					const X = b.edgeStrToEdgeData(c[f - 1].edgeTypeStr);
					this.$ = [
						{
							id: c[f - 2].id,
							label: c[f - 2].label,
							type: c[f - 2].type,
							directions: c[f - 2].directions
						},
						{
							id: c[f - 2].id + "-" + c[f].id,
							start: c[f - 2].id,
							end: c[f].id,
							label: c[f - 1].label,
							type: "edge",
							directions: c[f].directions,
							arrowTypeEnd: X,
							arrowTypeStart: "arrow_open"
						},
						{
							id: c[f].id,
							label: c[f].label,
							type: b.typeStr2Type(c[f].typeStr),
							directions: c[f].directions
						}
					];
					break;
				case 24:
					b.getLogger().debug("Rule: nodeStatement (abc88 node size) ", c[f - 1], c[f]), this.$ = {
						id: c[f - 1].id,
						label: c[f - 1].label,
						type: b.typeStr2Type(c[f - 1].typeStr),
						directions: c[f - 1].directions,
						widthInColumns: parseInt(c[f], 10)
					};
					break;
				case 25:
					b.getLogger().debug("Rule: nodeStatement (node) ", c[f]), this.$ = {
						id: c[f].id,
						label: c[f].label,
						type: b.typeStr2Type(c[f].typeStr),
						directions: c[f].directions,
						widthInColumns: 1
					};
					break;
				case 26:
					b.getLogger().debug("APA123", this ? this : "na"), b.getLogger().debug("COLUMNS: ", c[f]), this.$ = {
						type: "column-setting",
						columns: c[f] === "auto" ? -1 : parseInt(c[f])
					};
					break;
				case 27:
					b.getLogger().debug("Rule: id-block statement : ", c[f - 2], c[f - 1]), b.generateId(), this.$ = {
						...c[f - 2],
						type: "composite",
						children: c[f - 1]
					};
					break;
				case 28:
					b.getLogger().debug("Rule: blockStatement : ", c[f - 2], c[f - 1], c[f]);
					this.$ = {
						id: b.generateId(),
						type: "composite",
						label: "",
						children: c[f - 1]
					};
					break;
				case 29:
					b.getLogger().debug("Rule: node (NODE_ID separator): ", c[f]), this.$ = { id: c[f] };
					break;
				case 30:
					b.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", c[f - 1], c[f]), this.$ = {
						id: c[f - 1],
						label: c[f].label,
						typeStr: c[f].typeStr,
						directions: c[f].directions
					};
					break;
				case 31:
					b.getLogger().debug("Rule: dirList: ", c[f]), this.$ = [c[f]];
					break;
				case 32:
					b.getLogger().debug("Rule: dirList: ", c[f - 1], c[f]), this.$ = [c[f - 1]].concat(c[f]);
					break;
				case 33:
					b.getLogger().debug("Rule: nodeShapeNLabel: ", c[f - 2], c[f - 1], c[f]), this.$ = {
						typeStr: c[f - 2] + c[f],
						label: c[f - 1]
					};
					break;
				case 34:
					b.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", c[f - 3], c[f - 2], " #3:", c[f - 1], c[f]), this.$ = {
						typeStr: c[f - 3] + c[f],
						label: c[f - 2],
						directions: c[f - 1]
					};
					break;
				case 35:
				case 36:
					this.$ = {
						type: "classDef",
						id: c[f - 1].trim(),
						css: c[f].trim()
					};
					break;
				case 37:
					this.$ = {
						type: "applyClass",
						id: c[f - 1].trim(),
						styleClass: c[f].trim()
					};
					break;
				case 38:
					this.$ = {
						type: "applyStyles",
						id: c[f - 1].trim(),
						stylesStr: c[f].trim()
					};
					break;
			}
		}, "anonymous"),
		table: [
			{
				9: 1,
				10: [1, 2]
			},
			{ 1: [3] },
			{
				10: t,
				11: 3,
				13: 4,
				19: 5,
				20: 6,
				21: a$1,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: i,
				29: l$1,
				31: s,
				39: r,
				43: n,
				46: o
			},
			{ 8: [1, 20] },
			e$1(u, [2, 12], {
				13: 4,
				19: 5,
				20: 6,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				11: 21,
				10: t,
				21: a$1,
				28: i,
				29: l$1,
				31: s,
				39: r,
				43: n,
				46: o
			}),
			e$1(h, [2, 16], {
				14: 22,
				15: y,
				16: m$1
			}),
			e$1(h, [2, 17]),
			e$1(h, [2, 18]),
			e$1(h, [2, 19]),
			e$1(h, [2, 20]),
			e$1(h, [2, 21]),
			e$1(h, [2, 22]),
			e$1(L$1, [2, 25], { 27: [1, 25] }),
			e$1(h, [2, 26]),
			{
				19: 26,
				26: 12,
				31: s
			},
			{
				10: t,
				11: 27,
				13: 4,
				19: 5,
				20: 6,
				21: a$1,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: i,
				29: l$1,
				31: s,
				39: r,
				43: n,
				46: o
			},
			{
				40: [1, 28],
				42: [1, 29]
			},
			{ 44: [1, 30] },
			{ 47: [1, 31] },
			e$1(E, [2, 29], {
				32: 32,
				35: [1, 33],
				37: [1, 34]
			}),
			{ 1: [2, 7] },
			e$1(u, [2, 13]),
			{
				26: 35,
				31: s
			},
			{ 31: [2, 14] },
			{ 17: [1, 36] },
			e$1(L$1, [2, 24]),
			{
				10: t,
				11: 37,
				13: 4,
				14: 22,
				15: y,
				16: m$1,
				19: 5,
				20: 6,
				21: a$1,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: i,
				29: l$1,
				31: s,
				39: r,
				43: n,
				46: o
			},
			{ 30: [1, 38] },
			{ 41: [1, 39] },
			{ 41: [1, 40] },
			{ 45: [1, 41] },
			{ 48: [1, 42] },
			e$1(E, [2, 30]),
			{ 18: [1, 43] },
			{ 18: [1, 44] },
			e$1(L$1, [2, 23]),
			{ 18: [1, 45] },
			{ 30: [1, 46] },
			e$1(h, [2, 28]),
			e$1(h, [2, 35]),
			e$1(h, [2, 36]),
			e$1(h, [2, 37]),
			e$1(h, [2, 38]),
			{ 36: [1, 47] },
			{
				33: 48,
				34: D
			},
			{ 15: [1, 50] },
			e$1(h, [2, 27]),
			e$1(E, [2, 33]),
			{ 38: [1, 51] },
			{
				33: 52,
				34: D,
				38: [2, 31]
			},
			{ 31: [2, 15] },
			e$1(E, [2, 34]),
			{ 38: [2, 32] }
		],
		defaultActions: {
			20: [2, 7],
			23: [2, 14],
			50: [2, 15],
			52: [2, 32]
		},
		parseError: /* @__PURE__ */ m(function(x, g) {
			if (g.recoverable) this.trace(x);
			else {
				var p = new Error(x);
				throw p.hash = g, p;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ m(function(x) {
			var g = this, p = [0], b = [], S = [null], c = [], _ = this.table, f = "", A = 0, O = 0, X = 2, P = 1, J = c.slice.call(arguments, 1), M = Object.create(this.lexer), Q = { yy: {} };
			for (var ut in this.yy) Object.prototype.hasOwnProperty.call(this.yy, ut) && (Q.yy[ut] = this.yy[ut]);
			M.setInput(x, Q.yy), Q.yy.lexer = M, Q.yy.parser = this, typeof M.yylloc > "u" && (M.yylloc = {});
			var pt = M.yylloc;
			c.push(pt);
			var oe = M.options && M.options.ranges;
			typeof Q.yy.parseError == "function" ? this.parseError = Q.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function he(H) {
				p.length = p.length - 2 * H, S.length = S.length - H, c.length = c.length - H;
			}
			m(he, "popStack");
			function Tt() {
				var H;
				return H = b.pop() || M.lex() || P, typeof H != "number" && (H instanceof Array && (b = H, H = b.pop()), H = g.symbols_[H] || H), H;
			}
			m(Tt, "lex");
			for (var Y, $, U, ft, tt = {}, it, q, Ct, nt;;) {
				if ($ = p[p.length - 1], this.defaultActions[$] ? U = this.defaultActions[$] : ((Y === null || typeof Y > "u") && (Y = Tt()), U = _[$] && _[$][Y]), typeof U > "u" || !U.length || !U[0]) {
					var xt = "";
					nt = [];
					for (it in _[$]) this.terminals_[it] && it > X && nt.push("'" + this.terminals_[it] + "'");
					M.showPosition ? xt = "Parse error on line " + (A + 1) + `:
` + M.showPosition() + `
Expecting ` + nt.join(", ") + ", got '" + (this.terminals_[Y] || Y) + "'" : xt = "Parse error on line " + (A + 1) + ": Unexpected " + (Y == P ? "end of input" : "'" + (this.terminals_[Y] || Y) + "'"), this.parseError(xt, {
						text: M.match,
						token: this.terminals_[Y] || Y,
						line: M.yylineno,
						loc: pt,
						expected: nt
					});
				}
				if (U[0] instanceof Array && U.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + $ + ", token: " + Y);
				switch (U[0]) {
					case 1:
						p.push(Y), S.push(M.yytext), c.push(M.yylloc), p.push(U[1]), Y = null, O = M.yyleng, f = M.yytext, A = M.yylineno, pt = M.yylloc;
						break;
					case 2:
						if (q = this.productions_[U[1]][1], tt.$ = S[S.length - q], tt._$ = {
							first_line: c[c.length - (q || 1)].first_line,
							last_line: c[c.length - 1].last_line,
							first_column: c[c.length - (q || 1)].first_column,
							last_column: c[c.length - 1].last_column
						}, oe && (tt._$.range = [c[c.length - (q || 1)].range[0], c[c.length - 1].range[1]]), ft = this.performAction.apply(tt, [
							f,
							O,
							A,
							Q.yy,
							U[1],
							S,
							c
						].concat(J)), typeof ft < "u") return ft;
						q && (p = p.slice(0, -1 * q * 2), S = S.slice(0, -1 * q), c = c.slice(0, -1 * q)), p.push(this.productions_[U[1]][0]), S.push(tt.$), c.push(tt._$), Ct = _[p[p.length - 2]][p[p.length - 1]], p.push(Ct);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	v.lexer = /* @__PURE__ */ function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ m(function(g, p) {
				if (this.yy.parser) this.yy.parser.parseError(g, p);
				else throw new Error(g);
			}, "parseError"),
			setInput: /* @__PURE__ */ m(function(x, g) {
				return this.yy = g || this.yy || {}, this._input = x, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ m(function() {
				var x = this._input[0];
				this.yytext += x, this.yyleng++, this.offset++, this.match += x, this.matched += x;
				return x.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), x;
			}, "input"),
			unput: /* @__PURE__ */ m(function(x) {
				var g = x.length, p = x.split(/(?:\r\n?|\n)/g);
				this._input = x + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g), this.offset -= g;
				var b = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), p.length - 1 && (this.yylineno -= p.length - 1);
				var S = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: p ? (p.length === b.length ? this.yylloc.first_column : 0) + b[b.length - p.length].length - p[0].length : this.yylloc.first_column - g
				}, this.options.ranges && (this.yylloc.range = [S[0], S[0] + this.yyleng - g]), this.yyleng = this.yytext.length, this;
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
			less: /* @__PURE__ */ m(function(x) {
				this.unput(this.match.slice(x));
			}, "less"),
			pastInput: /* @__PURE__ */ m(function() {
				var x = this.matched.substr(0, this.matched.length - this.match.length);
				return (x.length > 20 ? "..." : "") + x.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ m(function() {
				var x = this.match;
				return x.length < 20 && (x += this._input.substr(0, 20 - x.length)), (x.substr(0, 20) + (x.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ m(function() {
				var x = this.pastInput(), g = new Array(x.length + 1).join("-");
				return x + this.upcomingInput() + `
` + g + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ m(function(x, g) {
				var p, b, S;
				if (this.options.backtrack_lexer && (S = {
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
				}, this.options.ranges && (S.yylloc.range = this.yylloc.range.slice(0))), b = x[0].match(/(?:\r\n?|\n).*/g), b && (this.yylineno += b.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: b ? b[b.length - 1].length - b[b.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + x[0].length
				}, this.yytext += x[0], this.match += x[0], this.matches = x, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(x[0].length), this.matched += x[0], p = this.performAction.call(this, this.yy, this, g, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), p) return p;
				if (this._backtrack) {
					for (var c in S) this[c] = S[c];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ m(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var x, g, p, b;
				this._more || (this.yytext = "", this.match = "");
				for (var S = this._currentRules(), c = 0; c < S.length; c++) if (p = this._input.match(this.rules[S[c]]), p && (!g || p[0].length > g[0].length)) {
					if (g = p, b = c, this.options.backtrack_lexer) {
						if (x = this.test_match(p, S[c]), x !== !1) return x;
						if (this._backtrack) {
							g = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return g ? (x = this.test_match(g, S[b]), x !== !1 ? x : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ m(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ m(function(g) {
				this.conditionStack.push(g);
			}, "begin"),
			popState: /* @__PURE__ */ m(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ m(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ m(function(g) {
				return g = this.conditionStack.length - 1 - Math.abs(g || 0), g >= 0 ? this.conditionStack[g] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ m(function(g) {
				this.begin(g);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ m(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: {},
			performAction: /* @__PURE__ */ m(function(g, p, b, S) {
				switch (b) {
					case 0: return g.getLogger().debug("Found block-beta"), 10;
					case 1: return g.getLogger().debug("Found id-block"), 29;
					case 2: return g.getLogger().debug("Found block"), 10;
					case 3:
						g.getLogger().debug(".", p.yytext);
						break;
					case 4:
						g.getLogger().debug("_", p.yytext);
						break;
					case 5: return 5;
					case 6: return p.yytext = -1, 28;
					case 7: return p.yytext = p.yytext.replace(/columns\s+/, ""), g.getLogger().debug("COLUMNS (LEX)", p.yytext), 28;
					case 8:
						this.pushState("md_string");
						break;
					case 9: return "MD_STR";
					case 10:
						this.popState();
						break;
					case 11:
						this.pushState("string");
						break;
					case 12:
						g.getLogger().debug("LEX: POPPING STR:", p.yytext), this.popState();
						break;
					case 13: return g.getLogger().debug("LEX: STR end:", p.yytext), "STR";
					case 14: return p.yytext = p.yytext.replace(/space\:/, ""), g.getLogger().debug("SPACE NUM (LEX)", p.yytext), 21;
					case 15: return p.yytext = "1", g.getLogger().debug("COLUMNS (LEX)", p.yytext), 21;
					case 16: return 42;
					case 17: return "LINKSTYLE";
					case 18: return "INTERPOLATE";
					case 19: return this.pushState("CLASSDEF"), 39;
					case 20: return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
					case 21: return this.popState(), this.pushState("CLASSDEFID"), 40;
					case 22: return this.popState(), 41;
					case 23: return this.pushState("CLASS"), 43;
					case 24: return this.popState(), this.pushState("CLASS_STYLE"), 44;
					case 25: return this.popState(), 45;
					case 26: return this.pushState("STYLE_STMNT"), 46;
					case 27: return this.popState(), this.pushState("STYLE_DEFINITION"), 47;
					case 28: return this.popState(), 48;
					case 29: return this.pushState("acc_title"), "acc_title";
					case 30: return this.popState(), "acc_title_value";
					case 31: return this.pushState("acc_descr"), "acc_descr";
					case 32: return this.popState(), "acc_descr_value";
					case 33:
						this.pushState("acc_descr_multiline");
						break;
					case 34:
						this.popState();
						break;
					case 35: return "acc_descr_multiline_value";
					case 36: return 30;
					case 37: return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
					case 38: return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
					case 39: return this.popState(), g.getLogger().debug("Lex: ))"), "NODE_DEND";
					case 40: return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
					case 41: return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
					case 42: return this.popState(), g.getLogger().debug("Lex: (-"), "NODE_DEND";
					case 43: return this.popState(), g.getLogger().debug("Lex: -)"), "NODE_DEND";
					case 44: return this.popState(), g.getLogger().debug("Lex: (("), "NODE_DEND";
					case 45: return this.popState(), g.getLogger().debug("Lex: ]]"), "NODE_DEND";
					case 46: return this.popState(), g.getLogger().debug("Lex: ("), "NODE_DEND";
					case 47: return this.popState(), g.getLogger().debug("Lex: ])"), "NODE_DEND";
					case 48: return this.popState(), g.getLogger().debug("Lex: /]"), "NODE_DEND";
					case 49: return this.popState(), g.getLogger().debug("Lex: /]"), "NODE_DEND";
					case 50: return this.popState(), g.getLogger().debug("Lex: )]"), "NODE_DEND";
					case 51: return this.popState(), g.getLogger().debug("Lex: )"), "NODE_DEND";
					case 52: return this.popState(), g.getLogger().debug("Lex: ]>"), "NODE_DEND";
					case 53: return this.popState(), g.getLogger().debug("Lex: ]"), "NODE_DEND";
					case 54: return g.getLogger().debug("Lexa: -)"), this.pushState("NODE"), 35;
					case 55: return g.getLogger().debug("Lexa: (-"), this.pushState("NODE"), 35;
					case 56: return g.getLogger().debug("Lexa: ))"), this.pushState("NODE"), 35;
					case 57: return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 58: return g.getLogger().debug("Lex: ((("), this.pushState("NODE"), 35;
					case 59: return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 60: return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 61: return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 62: return g.getLogger().debug("Lexc: >"), this.pushState("NODE"), 35;
					case 63: return g.getLogger().debug("Lexa: (["), this.pushState("NODE"), 35;
					case 64: return g.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 65: return this.pushState("NODE"), 35;
					case 66: return this.pushState("NODE"), 35;
					case 67: return this.pushState("NODE"), 35;
					case 68: return this.pushState("NODE"), 35;
					case 69: return this.pushState("NODE"), 35;
					case 70: return this.pushState("NODE"), 35;
					case 71: return this.pushState("NODE"), 35;
					case 72: return g.getLogger().debug("Lexa: ["), this.pushState("NODE"), 35;
					case 73: return this.pushState("BLOCK_ARROW"), g.getLogger().debug("LEX ARR START"), 37;
					case 74: return g.getLogger().debug("Lex: NODE_ID", p.yytext), 31;
					case 75: return g.getLogger().debug("Lex: EOF", p.yytext), 8;
					case 76:
						this.pushState("md_string");
						break;
					case 77:
						this.pushState("md_string");
						break;
					case 78: return "NODE_DESCR";
					case 79:
						this.popState();
						break;
					case 80:
						g.getLogger().debug("Lex: Starting string"), this.pushState("string");
						break;
					case 81:
						g.getLogger().debug("LEX ARR: Starting string"), this.pushState("string");
						break;
					case 82: return g.getLogger().debug("LEX: NODE_DESCR:", p.yytext), "NODE_DESCR";
					case 83:
						g.getLogger().debug("LEX POPPING"), this.popState();
						break;
					case 84:
						g.getLogger().debug("Lex: =>BAE"), this.pushState("ARROW_DIR");
						break;
					case 85: return p.yytext = p.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (right): dir:", p.yytext), "DIR";
					case 86: return p.yytext = p.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (left):", p.yytext), "DIR";
					case 87: return p.yytext = p.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (x):", p.yytext), "DIR";
					case 88: return p.yytext = p.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (y):", p.yytext), "DIR";
					case 89: return p.yytext = p.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (up):", p.yytext), "DIR";
					case 90: return p.yytext = p.yytext.replace(/^,\s*/, ""), g.getLogger().debug("Lex (down):", p.yytext), "DIR";
					case 91: return p.yytext = "]>", g.getLogger().debug("Lex (ARROW_DIR end):", p.yytext), this.popState(), this.popState(), "BLOCK_ARROW_END";
					case 92: return g.getLogger().debug("Lex: LINK", "#" + p.yytext + "#"), 15;
					case 93: return g.getLogger().debug("Lex: LINK", p.yytext), 15;
					case 94: return g.getLogger().debug("Lex: LINK", p.yytext), 15;
					case 95: return g.getLogger().debug("Lex: LINK", p.yytext), 15;
					case 96: return g.getLogger().debug("Lex: START_LINK", p.yytext), this.pushState("LLABEL"), 16;
					case 97: return g.getLogger().debug("Lex: START_LINK", p.yytext), this.pushState("LLABEL"), 16;
					case 98: return g.getLogger().debug("Lex: START_LINK", p.yytext), this.pushState("LLABEL"), 16;
					case 99:
						this.pushState("md_string");
						break;
					case 100: return g.getLogger().debug("Lex: Starting string"), this.pushState("string"), "LINK_LABEL";
					case 101: return this.popState(), g.getLogger().debug("Lex: LINK", "#" + p.yytext + "#"), 15;
					case 102: return this.popState(), g.getLogger().debug("Lex: LINK", p.yytext), 15;
					case 103: return this.popState(), g.getLogger().debug("Lex: LINK", p.yytext), 15;
					case 104: return g.getLogger().debug("Lex: COLON", p.yytext), p.yytext = p.yytext.slice(1), 27;
				}
			}, "anonymous"),
			rules: [
				/^(?:block-beta\b)/,
				/^(?:block:)/,
				/^(?:block\b)/,
				/^(?:[\s]+)/,
				/^(?:[\n]+)/,
				/^(?:((\u000D\u000A)|(\u000A)))/,
				/^(?:columns\s+auto\b)/,
				/^(?:columns\s+[\d]+)/,
				/^(?:["][`])/,
				/^(?:[^`"]+)/,
				/^(?:[`]["])/,
				/^(?:["])/,
				/^(?:["])/,
				/^(?:[^"]*)/,
				/^(?:space[:]\d+)/,
				/^(?:space\b)/,
				/^(?:default\b)/,
				/^(?:linkStyle\b)/,
				/^(?:interpolate\b)/,
				/^(?:classDef\s+)/,
				/^(?:DEFAULT\s+)/,
				/^(?:\w+\s+)/,
				/^(?:[^\n]*)/,
				/^(?:class\s+)/,
				/^(?:(\w+)+((,\s*\w+)*))/,
				/^(?:[^\n]*)/,
				/^(?:style\s+)/,
				/^(?:(\w+)+((,\s*\w+)*))/,
				/^(?:[^\n]*)/,
				/^(?:accTitle\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*\{\s*)/,
				/^(?:[\}])/,
				/^(?:[^\}]*)/,
				/^(?:end\b\s*)/,
				/^(?:\(\(\()/,
				/^(?:\)\)\))/,
				/^(?:[\)]\))/,
				/^(?:\}\})/,
				/^(?:\})/,
				/^(?:\(-)/,
				/^(?:-\))/,
				/^(?:\(\()/,
				/^(?:\]\])/,
				/^(?:\()/,
				/^(?:\]\))/,
				/^(?:\\\])/,
				/^(?:\/\])/,
				/^(?:\)\])/,
				/^(?:[\)])/,
				/^(?:\]>)/,
				/^(?:[\]])/,
				/^(?:-\))/,
				/^(?:\(-)/,
				/^(?:\)\))/,
				/^(?:\))/,
				/^(?:\(\(\()/,
				/^(?:\(\()/,
				/^(?:\{\{)/,
				/^(?:\{)/,
				/^(?:>)/,
				/^(?:\(\[)/,
				/^(?:\()/,
				/^(?:\[\[)/,
				/^(?:\[\|)/,
				/^(?:\[\()/,
				/^(?:\)\)\))/,
				/^(?:\[\\)/,
				/^(?:\[\/)/,
				/^(?:\[\\)/,
				/^(?:\[)/,
				/^(?:<\[)/,
				/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,
				/^(?:$)/,
				/^(?:["][`])/,
				/^(?:["][`])/,
				/^(?:[^`"]+)/,
				/^(?:[`]["])/,
				/^(?:["])/,
				/^(?:["])/,
				/^(?:[^"]+)/,
				/^(?:["])/,
				/^(?:\]>\s*\()/,
				/^(?:,?\s*right\s*)/,
				/^(?:,?\s*left\s*)/,
				/^(?:,?\s*x\s*)/,
				/^(?:,?\s*y\s*)/,
				/^(?:,?\s*up\s*)/,
				/^(?:,?\s*down\s*)/,
				/^(?:\)\s*)/,
				/^(?:\s*[xo<]?--+[-xo>]\s*)/,
				/^(?:\s*[xo<]?==+[=xo>]\s*)/,
				/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
				/^(?:\s*~~[\~]+\s*)/,
				/^(?:\s*[xo<]?--\s*)/,
				/^(?:\s*[xo<]?==\s*)/,
				/^(?:\s*[xo<]?-\.\s*)/,
				/^(?:["][`])/,
				/^(?:["])/,
				/^(?:\s*[xo<]?--+[-xo>]\s*)/,
				/^(?:\s*[xo<]?==+[=xo>]\s*)/,
				/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
				/^(?::\d+)/
			],
			conditions: {
				STYLE_DEFINITION: {
					rules: [28],
					inclusive: !1
				},
				STYLE_STMNT: {
					rules: [27],
					inclusive: !1
				},
				CLASSDEFID: {
					rules: [22],
					inclusive: !1
				},
				CLASSDEF: {
					rules: [20, 21],
					inclusive: !1
				},
				CLASS_STYLE: {
					rules: [25],
					inclusive: !1
				},
				CLASS: {
					rules: [24],
					inclusive: !1
				},
				LLABEL: {
					rules: [
						99,
						100,
						101,
						102,
						103
					],
					inclusive: !1
				},
				ARROW_DIR: {
					rules: [
						85,
						86,
						87,
						88,
						89,
						90,
						91
					],
					inclusive: !1
				},
				BLOCK_ARROW: {
					rules: [
						76,
						81,
						84
					],
					inclusive: !1
				},
				NODE: {
					rules: [
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						46,
						47,
						48,
						49,
						50,
						51,
						52,
						53,
						77,
						80
					],
					inclusive: !1
				},
				md_string: {
					rules: [
						9,
						10,
						78,
						79
					],
					inclusive: !1
				},
				space: {
					rules: [],
					inclusive: !1
				},
				string: {
					rules: [
						12,
						13,
						82,
						83
					],
					inclusive: !1
				},
				acc_descr_multiline: {
					rules: [34, 35],
					inclusive: !1
				},
				acc_descr: {
					rules: [32],
					inclusive: !1
				},
				acc_title: {
					rules: [30],
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
						8,
						11,
						14,
						15,
						16,
						17,
						18,
						19,
						23,
						26,
						29,
						31,
						33,
						36,
						54,
						55,
						56,
						57,
						58,
						59,
						60,
						61,
						62,
						63,
						64,
						65,
						66,
						67,
						68,
						69,
						70,
						71,
						72,
						73,
						74,
						75,
						92,
						93,
						94,
						95,
						96,
						97,
						98,
						104
					],
					inclusive: !0
				}
			}
		};
	}();
	function k() {
		this.yy = {};
	}
	return m(k, "Parser"), k.prototype = v, v.Parser = k, new k();
}();
bt.parser = bt;
var ke = bt, V = /* @__PURE__ */ new Map(), Et = [], wt = /* @__PURE__ */ new Map(), It = "color", Bt = "fill", De = "bgFill", Kt = ",", Ne = yt(), ot = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ m((e$1) => zi.sanitizeText(e$1, Ne), "sanitizeText"), Ce = /* @__PURE__ */ m(function(e$1, t = "") {
	let a$1 = ot.get(e$1);
	a$1 || (a$1 = {
		id: e$1,
		styles: [],
		textStyles: []
	}, ot.set(e$1, a$1)), t?.split(Kt).forEach((i) => {
		const l$1 = i.replace(/([^;]*);/, "$1").trim();
		if (RegExp(It).exec(i)) {
			const r = l$1.replace(Bt, De).replace(It, Bt);
			a$1.textStyles.push(r);
		}
		a$1.styles.push(l$1);
	});
}, "addStyleClass"), Ie = /* @__PURE__ */ m(function(e$1, t = "") {
	const a$1 = V.get(e$1);
	t != null && (a$1.styles = t.split(Kt));
}, "addStyle2Node"), Be = /* @__PURE__ */ m(function(e$1, t) {
	e$1.split(",").forEach(function(a$1) {
		let i = V.get(a$1);
		if (i === void 0) {
			const l$1 = a$1.trim();
			i = {
				id: l$1,
				type: "na",
				children: []
			}, V.set(l$1, i);
		}
		i.classes || (i.classes = []), i.classes.push(t);
	});
}, "setCssClass"), Xt$1 = /* @__PURE__ */ m((e$1, t) => {
	const a$1 = e$1.flat(), i = [], l$1 = a$1.find((r) => (r == null ? void 0 : r.type) === "column-setting"), s = (l$1 == null ? void 0 : l$1.columns) ?? -1;
	for (const r of a$1) {
		if (typeof s == "number" && s > 0 && r.type !== "column-setting" && typeof r.widthInColumns == "number" && r.widthInColumns > s && R.warn(`Block ${r.id} width ${r.widthInColumns} exceeds configured column width ${s}`), r.label && (r.label = Te(r.label)), r.type === "classDef") {
			Ce(r.id, r.css);
			continue;
		}
		if (r.type === "applyClass") {
			Be(r.id, (r == null ? void 0 : r.styleClass) ?? "");
			continue;
		}
		if (r.type === "applyStyles") {
			r != null && r.stylesStr && Ie(r.id, r == null ? void 0 : r.stylesStr);
			continue;
		}
		if (r.type === "column-setting") t.columns = r.columns ?? -1;
		else if (r.type === "edge") {
			const n = (wt.get(r.id) ?? 0) + 1;
			wt.set(r.id, n), r.id = n + "-" + r.id, Et.push(r);
		} else {
			r.label || (r.type === "composite" ? r.label = "" : r.label = r.id);
			const n = V.get(r.id);
			if (n === void 0 ? V.set(r.id, r) : (r.type !== "na" && (n.type = r.type), r.label !== r.id && (n.label = r.label)), r.children && Xt$1(r.children, r), r.type === "space") {
				const o = r.width ?? 1;
				for (let u = 0; u < o; u++) {
					const h = a(r);
					h.id = h.id + "-" + u, V.set(h.id, h), i.push(h);
				}
			} else n === void 0 && i.push(r);
		}
	}
	t.children = i;
}, "populateBlockDatabase"), _t = [], at = {
	id: "root",
	type: "composite",
	children: [],
	columns: -1
}, Oe = /* @__PURE__ */ m(() => {
	R.debug("Clear called"), m5(), at = {
		id: "root",
		type: "composite",
		children: [],
		columns: -1
	}, V = /* @__PURE__ */ new Map([["root", at]]), _t = [], ot = /* @__PURE__ */ new Map(), Et = [], wt = /* @__PURE__ */ new Map();
}, "clear");
function Ut(e$1) {
	switch (R.debug("typeStr2Type", e$1), e$1) {
		case "[]": return "square";
		case "()": return R.debug("we have a round"), "round";
		case "(())": return "circle";
		case ">]": return "rect_left_inv_arrow";
		case "{}": return "diamond";
		case "{{}}": return "hexagon";
		case "([])": return "stadium";
		case "[[]]": return "subroutine";
		case "[()]": return "cylinder";
		case "((()))": return "doublecircle";
		case "[//]": return "lean_right";
		case "[\\\\]": return "lean_left";
		case "[/\\]": return "trapezoid";
		case "[\\/]": return "inv_trapezoid";
		case "<[]>": return "block_arrow";
		default: return "na";
	}
}
m(Ut, "typeStr2Type");
function jt(e$1) {
	switch (R.debug("typeStr2Type", e$1), e$1) {
		case "==": return "thick";
		default: return "normal";
	}
}
m(jt, "edgeTypeStr2Type");
function Vt(e$1) {
	switch (e$1.replace(/^[\s-]+|[\s-]+$/g, "")) {
		case "x": return "arrow_cross";
		case "o": return "arrow_circle";
		case ">": return "arrow_point";
		default: return "";
	}
}
m(Vt, "edgeStrToEdgeData");
var Ot = 0, Ue = {
	getConfig: /* @__PURE__ */ m(() => Xt().block, "getConfig"),
	typeStr2Type: Ut,
	edgeTypeStr2Type: jt,
	edgeStrToEdgeData: Vt,
	getLogger: /* @__PURE__ */ m(() => R, "getLogger"),
	getBlocksFlat: /* @__PURE__ */ m(() => [...V.values()], "getBlocksFlat"),
	getBlocks: /* @__PURE__ */ m(() => _t || [], "getBlocks"),
	getEdges: /* @__PURE__ */ m(() => Et, "getEdges"),
	setHierarchy: /* @__PURE__ */ m((e$1) => {
		at.children = e$1, Xt$1(e$1, at), _t = at.children;
	}, "setHierarchy"),
	getBlock: /* @__PURE__ */ m((e$1) => V.get(e$1), "getBlock"),
	setBlock: /* @__PURE__ */ m((e$1) => {
		V.set(e$1.id, e$1);
	}, "setBlock"),
	getColumns: /* @__PURE__ */ m((e$1) => {
		const t = V.get(e$1);
		return t ? t.columns ? t.columns : t.children ? t.children.length : -1 : -1;
	}, "getColumns"),
	getClasses: /* @__PURE__ */ m(function() {
		return ot;
	}, "getClasses"),
	clear: Oe,
	generateId: /* @__PURE__ */ m(() => (Ot++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Ot), "generateId")
}, lt = /* @__PURE__ */ m((e$1, t) => {
	const a$1 = e;
	return dn(a$1(e$1, "r"), a$1(e$1, "g"), a$1(e$1, "b"), t);
}, "fade"), Ve = /* @__PURE__ */ m((e$1) => `.label {
    font-family: ${e$1.fontFamily};
    color: ${e$1.nodeTextColor || e$1.textColor};
  }
  .cluster-label text {
    fill: ${e$1.titleColor};
  }
  .cluster-label span,p {
    color: ${e$1.titleColor};
  }



  .label text,span,p {
    fill: ${e$1.nodeTextColor || e$1.textColor};
    color: ${e$1.nodeTextColor || e$1.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e$1.mainBkg};
    stroke: ${e$1.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e$1.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e$1.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e$1.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e$1.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e$1.edgeLabelBackground};
      fill: ${e$1.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${lt(e$1.edgeLabelBackground, .5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${lt(e$1.mainBkg, .5)};
    fill: ${lt(e$1.clusterBkg, .5)};
    stroke: ${lt(e$1.clusterBorder, .2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e$1.titleColor};
  }

  .cluster span,p {
    color: ${e$1.titleColor};
  }
  /* .cluster div {
    color: ${e$1.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e$1.fontFamily};
    font-size: 12px;
    background: ${e$1.tertiaryColor};
    border: 1px solid ${e$1.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e$1.textColor};
  }
  ${l()}
`, "getStyles"), Ge = /* @__PURE__ */ m((e$1, t, a$1, i) => {
	t.forEach((l$1) => {
		sr[l$1](e$1, a$1, i);
	});
}, "insertMarkers"), sr = {
	extension: /* @__PURE__ */ m((e$1, t, a$1) => {
		R.trace("Making markers for ", a$1), e$1.append("defs").append("marker").attr("id", a$1 + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e$1.append("defs").append("marker").attr("id", a$1 + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z");
	}, "extension"),
	composition: /* @__PURE__ */ m((e$1, t, a$1) => {
		e$1.append("defs").append("marker").attr("id", a$1 + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e$1.append("defs").append("marker").attr("id", a$1 + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "composition"),
	aggregation: /* @__PURE__ */ m((e$1, t, a$1) => {
		e$1.append("defs").append("marker").attr("id", a$1 + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e$1.append("defs").append("marker").attr("id", a$1 + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "aggregation"),
	dependency: /* @__PURE__ */ m((e$1, t, a$1) => {
		e$1.append("defs").append("marker").attr("id", a$1 + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e$1.append("defs").append("marker").attr("id", a$1 + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
	}, "dependency"),
	lollipop: /* @__PURE__ */ m((e$1, t, a$1) => {
		e$1.append("defs").append("marker").attr("id", a$1 + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e$1.append("defs").append("marker").attr("id", a$1 + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("stroke", "black").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6);
	}, "lollipop"),
	point: /* @__PURE__ */ m((e$1, t, a$1) => {
		e$1.append("marker").attr("id", a$1 + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 6).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e$1.append("marker").attr("id", a$1 + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "point"),
	circle: /* @__PURE__ */ m((e$1, t, a$1) => {
		e$1.append("marker").attr("id", a$1 + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e$1.append("marker").attr("id", a$1 + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0");
	}, "circle"),
	cross: /* @__PURE__ */ m((e$1, t, a$1) => {
		e$1.append("marker").attr("id", a$1 + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e$1.append("marker").attr("id", a$1 + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0");
	}, "cross"),
	barb: /* @__PURE__ */ m((e$1, t, a$1) => {
		e$1.append("defs").append("marker").attr("id", a$1 + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
	}, "barb")
}, ir = Ge, Pt, Yt, B = ((Yt = (Pt = yt()) == null ? void 0 : Pt.block) == null ? void 0 : Yt.padding) ?? 8;
function Gt(e$1, t) {
	if (e$1 === 0 || !Number.isInteger(e$1)) throw new Error("Columns must be an integer !== 0.");
	if (t < 0 || !Number.isInteger(t)) throw new Error("Position must be a non-negative integer." + t);
	if (e$1 < 0) return {
		px: t,
		py: 0
	};
	if (e$1 === 1) return {
		px: 0,
		py: t
	};
	return {
		px: t % e$1,
		py: Math.floor(t / e$1)
	};
}
m(Gt, "calculateBlockPosition");
var nr = /* @__PURE__ */ m((e$1) => {
	let t = 0, a$1 = 0;
	for (const i of e$1.children) {
		const { width: l$1, height: s, x: r, y: n } = i.size ?? {
			width: 0,
			height: 0,
			x: 0,
			y: 0
		};
		R.debug("getMaxChildSize abc95 child:", i.id, "width:", l$1, "height:", s, "x:", r, "y:", n, i.type), i.type !== "space" && (l$1 > t && (t = l$1 / (e$1.widthInColumns ?? 1)), s > a$1 && (a$1 = s));
	}
	return {
		width: t,
		height: a$1
	};
}, "getMaxChildSize");
function ht(e$1, t, a$1 = 0, i = 0) {
	var r, n, o, u, h, y, m$1, L$1, E, D, v;
	R.debug("setBlockSizes abc95 (start)", e$1.id, (r = e$1 == null ? void 0 : e$1.size) == null ? void 0 : r.x, "block width =", e$1 == null ? void 0 : e$1.size, "siblingWidth", a$1), (n = e$1 == null ? void 0 : e$1.size) != null && n.width || (e$1.size = {
		width: a$1,
		height: i,
		x: 0,
		y: 0
	});
	let l$1 = 0, s = 0;
	if (((o = e$1.children) == null ? void 0 : o.length) > 0) {
		for (const S of e$1.children) ht(S, t);
		const T = nr(e$1);
		l$1 = T.width, s = T.height, R.debug("setBlockSizes abc95 maxWidth of", e$1.id, ":s children is ", l$1, s);
		for (const S of e$1.children) S.size && (R.debug(`abc95 Setting size of children of ${e$1.id} id=${S.id} ${l$1} ${s} ${JSON.stringify(S.size)}`), S.size.width = l$1 * (S.widthInColumns ?? 1) + B * ((S.widthInColumns ?? 1) - 1), S.size.height = s, S.size.x = 0, S.size.y = 0, R.debug(`abc95 updating size of ${e$1.id} children child:${S.id} maxWidth:${l$1} maxHeight:${s}`));
		for (const S of e$1.children) ht(S, t, l$1, s);
		const k = e$1.columns ?? -1;
		let N = 0;
		for (const S of e$1.children) N += S.widthInColumns ?? 1;
		let x = e$1.children.length;
		k > 0 && k < N && (x = k);
		const g = Math.ceil(N / x);
		let p = x * (l$1 + B) + B, b = g * (s + B) + B;
		if (p < a$1) {
			R.debug(`Detected to small sibling: abc95 ${e$1.id} siblingWidth ${a$1} siblingHeight ${i} width ${p}`), p = a$1, b = i;
			const S = (a$1 - x * B - B) / x, c = (i - g * B - B) / g;
			R.debug("Size indata abc88", e$1.id, "childWidth", S, "maxWidth", l$1), R.debug("Size indata abc88", e$1.id, "childHeight", c, "maxHeight", s), R.debug("Size indata abc88 xSize", x, "padding", B);
			for (const _ of e$1.children) _.size && (_.size.width = S, _.size.height = c, _.size.x = 0, _.size.y = 0);
		}
		if (R.debug(`abc95 (finale calc) ${e$1.id} xSize ${x} ySize ${g} columns ${k}${e$1.children.length} width=${Math.max(p, ((u = e$1.size) == null ? void 0 : u.width) || 0)}`), p < (((h = e$1 == null ? void 0 : e$1.size) == null ? void 0 : h.width) || 0)) {
			p = ((y = e$1 == null ? void 0 : e$1.size) == null ? void 0 : y.width) || 0;
			const S = k > 0 ? Math.min(e$1.children.length, k) : e$1.children.length;
			if (S > 0) {
				const c = (p - S * B - B) / S;
				R.debug("abc95 (growing to fit) width", e$1.id, p, (m$1 = e$1.size) == null ? void 0 : m$1.width, c);
				for (const _ of e$1.children) _.size && (_.size.width = c);
			}
		}
		e$1.size = {
			width: p,
			height: b,
			x: 0,
			y: 0
		};
	}
	R.debug("setBlockSizes abc94 (done)", e$1.id, (L$1 = e$1 == null ? void 0 : e$1.size) == null ? void 0 : L$1.x, (E = e$1 == null ? void 0 : e$1.size) == null ? void 0 : E.width, (D = e$1 == null ? void 0 : e$1.size) == null ? void 0 : D.y, (v = e$1 == null ? void 0 : e$1.size) == null ? void 0 : v.height);
}
m(ht, "setBlockSizes");
function kt(e$1, t) {
	var i, l$1, s, r, n, o, u, h, y, m$1, L$1, E, D, v, T, k, N;
	R.debug(`abc85 layout blocks (=>layoutBlocks) ${e$1.id} x: ${(i = e$1 == null ? void 0 : e$1.size) == null ? void 0 : i.x} y: ${(l$1 = e$1 == null ? void 0 : e$1.size) == null ? void 0 : l$1.y} width: ${(s = e$1 == null ? void 0 : e$1.size) == null ? void 0 : s.width}`);
	const a$1 = e$1.columns ?? -1;
	if (R.debug("layoutBlocks columns abc95", e$1.id, "=>", a$1, e$1), e$1.children && e$1.children.length > 0) {
		const x = ((n = (r = e$1 == null ? void 0 : e$1.children[0]) == null ? void 0 : r.size) == null ? void 0 : n.width) ?? 0, g = e$1.children.length * x + (e$1.children.length - 1) * B;
		R.debug("widthOfChildren 88", g, "posX");
		let p = 0;
		R.debug("abc91 block?.size?.x", e$1.id, (o = e$1 == null ? void 0 : e$1.size) == null ? void 0 : o.x);
		let b = (u = e$1 == null ? void 0 : e$1.size) != null && u.x ? ((h = e$1 == null ? void 0 : e$1.size) == null ? void 0 : h.x) + (-((y = e$1 == null ? void 0 : e$1.size) == null ? void 0 : y.width) / 2 || 0) : -B, S = 0;
		for (const c of e$1.children) {
			const _ = e$1;
			if (!c.size) continue;
			const { width: f, height: A } = c.size, { px: O, py: X } = Gt(a$1, p);
			if (X != S && (S = X, b = (m$1 = e$1 == null ? void 0 : e$1.size) != null && m$1.x ? ((L$1 = e$1 == null ? void 0 : e$1.size) == null ? void 0 : L$1.x) + (-((E = e$1 == null ? void 0 : e$1.size) == null ? void 0 : E.width) / 2 || 0) : -B, R.debug("New row in layout for block", e$1.id, " and child ", c.id, S)), R.debug(`abc89 layout blocks (child) id: ${c.id} Pos: ${p} (px, py) ${O},${X} (${(D = _ == null ? void 0 : _.size) == null ? void 0 : D.x},${(v = _ == null ? void 0 : _.size) == null ? void 0 : v.y}) parent: ${_.id} width: ${f}${B}`), _.size) {
				const J = f / 2;
				c.size.x = b + B + J, R.debug(`abc91 layout blocks (calc) px, pyid:${c.id} startingPos=X${b} new startingPosX${c.size.x} ${J} padding=${B} width=${f} halfWidth=${J} => x:${c.size.x} y:${c.size.y} ${c.widthInColumns} (width * (child?.w || 1)) / 2 ${f * ((c == null ? void 0 : c.widthInColumns) ?? 1) / 2}`), b = c.size.x + J, c.size.y = _.size.y - _.size.height / 2 + X * (A + B) + A / 2 + B, R.debug(`abc88 layout blocks (calc) px, pyid:${c.id}startingPosX${b}${B}${J}=>x:${c.size.x}y:${c.size.y}${c.widthInColumns}(width * (child?.w || 1)) / 2${f * ((c == null ? void 0 : c.widthInColumns) ?? 1) / 2}`);
			}
			c.children && kt(c);
			let P = (c == null ? void 0 : c.widthInColumns) ?? 1;
			a$1 > 0 && (P = Math.min(P, a$1 - p % a$1)), p += P, R.debug("abc88 columnsPos", c, p);
		}
	}
	R.debug(`layout blocks (<==layoutBlocks) ${e$1.id} x: ${(T = e$1 == null ? void 0 : e$1.size) == null ? void 0 : T.x} y: ${(k = e$1 == null ? void 0 : e$1.size) == null ? void 0 : k.y} width: ${(N = e$1 == null ? void 0 : e$1.size) == null ? void 0 : N.width}`);
}
m(kt, "layoutBlocks");
function Dt(e$1, { minX: t, minY: a$1, maxX: i, maxY: l$1 } = {
	minX: 0,
	minY: 0,
	maxX: 0,
	maxY: 0
}) {
	if (e$1.size && e$1.id !== "root") {
		const { x: s, y: r, width: n, height: o } = e$1.size;
		s - n / 2 < t && (t = s - n / 2), r - o / 2 < a$1 && (a$1 = r - o / 2), s + n / 2 > i && (i = s + n / 2), r + o / 2 > l$1 && (l$1 = r + o / 2);
	}
	if (e$1.children) for (const s of e$1.children) ({minX: t, minY: a$1, maxX: i, maxY: l$1} = Dt(s, {
		minX: t,
		minY: a$1,
		maxX: i,
		maxY: l$1
	}));
	return {
		minX: t,
		minY: a$1,
		maxX: i,
		maxY: l$1
	};
}
m(Dt, "findBounds");
function Zt(e$1) {
	const t = e$1.getBlock("root");
	if (!t) return;
	ht(t, e$1, 0, 0), kt(t), R.debug("getBlocks", JSON.stringify(t, null, 2));
	const { minX: a$1, minY: i, maxX: l$1, maxY: s } = Dt(t), r = s - i;
	return {
		x: a$1,
		y: i,
		width: l$1 - a$1,
		height: r
	};
}
m(Zt, "layout");
function Lt(e$1, t) {
	t && e$1.attr("style", t);
}
m(Lt, "applyStyle");
function qt(e$1, t) {
	const a$1 = gt(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")), i = a$1.append("xhtml:div"), l$1 = e$1.label, s = e$1.isNode ? "nodeLabel" : "edgeLabel", r = i.append("span");
	return r.html(_e(l$1, t)), Lt(r, e$1.labelStyle), r.attr("class", s), Lt(i, e$1.labelStyle), i.style("display", "inline-block"), i.style("white-space", "nowrap"), i.attr("xmlns", "http://www.w3.org/1999/xhtml"), a$1.node();
}
m(qt, "addHtmlLabel");
var j = /* @__PURE__ */ m(async (e$1, t, a$1, i) => {
	let l$1 = e$1 || "";
	typeof l$1 == "object" && (l$1 = l$1[0]);
	const s = yt();
	if (zt(s.flowchart.htmlLabels)) {
		l$1 = l$1.replace(/\\n|\n/g, "<br />"), R.debug("vertexText" + l$1);
		return qt({
			isNode: i,
			label: await h1(ri(l$1)),
			labelStyle: t.replace("fill:", "color:")
		}, s);
	} else {
		const r = document.createElementNS("http://www.w3.org/2000/svg", "text");
		r.setAttribute("style", t.replace("color:", "fill:"));
		let n = [];
		typeof l$1 == "string" ? n = l$1.split(/\\n|\n|<br\s*\/?>/gi) : Array.isArray(l$1) ? n = l$1 : n = [];
		for (const o of n) {
			const u = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
			u.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), u.setAttribute("dy", "1em"), u.setAttribute("x", "0"), a$1 ? u.setAttribute("class", "title-row") : u.setAttribute("class", "row"), u.textContent = o.trim(), r.appendChild(u);
		}
		return r;
	}
}, "createLabel"), cr = /* @__PURE__ */ m((e$1, t, a$1, i, l$1) => {
	t.arrowTypeStart && Rt(e$1, "start", t.arrowTypeStart, a$1, i, l$1), t.arrowTypeEnd && Rt(e$1, "end", t.arrowTypeEnd, a$1, i, l$1);
}, "addEdgeMarkers"), or = {
	arrow_cross: "cross",
	arrow_point: "point",
	arrow_barb: "barb",
	arrow_circle: "circle",
	aggregation: "aggregation",
	extension: "extension",
	composition: "composition",
	dependency: "dependency",
	lollipop: "lollipop"
}, Rt = /* @__PURE__ */ m((e$1, t, a$1, i, l$1, s) => {
	const r = or[a$1];
	if (!r) {
		R.warn(`Unknown arrow type: ${a$1}`);
		return;
	}
	const n = t === "start" ? "Start" : "End";
	e$1.attr(`marker-${t}`, `url(${i}#${l$1}_${s}-${r}${n})`);
}, "addEdgeMarker"), St = {}, W = {}, hr = /* @__PURE__ */ m(async (e$1, t) => {
	const a$1 = yt(), i = zt(a$1.flowchart.htmlLabels), l$1 = t.labelType === "markdown" ? Ar(e$1, t.label, {
		style: t.labelStyle,
		useHtmlLabels: i,
		addSvgBackground: !0
	}, a$1) : await j(t.label, t.labelStyle), s = e$1.insert("g").attr("class", "edgeLabel"), r = s.insert("g").attr("class", "label");
	r.node().appendChild(l$1);
	let n = l$1.getBBox();
	if (i) {
		const u = l$1.children[0], h = gt(l$1);
		n = u.getBoundingClientRect(), h.attr("width", n.width), h.attr("height", n.height);
	}
	r.attr("transform", "translate(" + -n.width / 2 + ", " + -n.height / 2 + ")"), St[t.id] = s, t.width = n.width, t.height = n.height;
	let o;
	if (t.startLabelLeft) {
		const u = await j(t.startLabelLeft, t.labelStyle), h = e$1.insert("g").attr("class", "edgeTerminals"), y = h.insert("g").attr("class", "inner");
		o = y.node().appendChild(u);
		const m$1 = u.getBBox();
		y.attr("transform", "translate(" + -m$1.width / 2 + ", " + -m$1.height / 2 + ")"), W[t.id] || (W[t.id] = {}), W[t.id].startLeft = h, rt(o, t.startLabelLeft);
	}
	if (t.startLabelRight) {
		const u = await j(t.startLabelRight, t.labelStyle), h = e$1.insert("g").attr("class", "edgeTerminals"), y = h.insert("g").attr("class", "inner");
		o = h.node().appendChild(u), y.node().appendChild(u);
		const m$1 = u.getBBox();
		y.attr("transform", "translate(" + -m$1.width / 2 + ", " + -m$1.height / 2 + ")"), W[t.id] || (W[t.id] = {}), W[t.id].startRight = h, rt(o, t.startLabelRight);
	}
	if (t.endLabelLeft) {
		const u = await j(t.endLabelLeft, t.labelStyle), h = e$1.insert("g").attr("class", "edgeTerminals"), y = h.insert("g").attr("class", "inner");
		o = y.node().appendChild(u);
		const m$1 = u.getBBox();
		y.attr("transform", "translate(" + -m$1.width / 2 + ", " + -m$1.height / 2 + ")"), h.node().appendChild(u), W[t.id] || (W[t.id] = {}), W[t.id].endLeft = h, rt(o, t.endLabelLeft);
	}
	if (t.endLabelRight) {
		const u = await j(t.endLabelRight, t.labelStyle), h = e$1.insert("g").attr("class", "edgeTerminals"), y = h.insert("g").attr("class", "inner");
		o = y.node().appendChild(u);
		const m$1 = u.getBBox();
		y.attr("transform", "translate(" + -m$1.width / 2 + ", " + -m$1.height / 2 + ")"), h.node().appendChild(u), W[t.id] || (W[t.id] = {}), W[t.id].endRight = h, rt(o, t.endLabelRight);
	}
	return l$1;
}, "insertEdgeLabel");
function rt(e$1, t) {
	yt().flowchart.htmlLabels && e$1 && (e$1.style.width = t.length * 9 + "px", e$1.style.height = "12px");
}
m(rt, "setTerminalWidth");
var dr = /* @__PURE__ */ m((e$1, t) => {
	R.debug("Moving label abc88 ", e$1.id, e$1.label, St[e$1.id], t);
	let a$1 = t.updatedPath ? t.updatedPath : t.originalPath;
	const { subGraphTitleTotalMargin: l$1 } = Kc(yt());
	if (e$1.label) {
		const s = St[e$1.id];
		let r = e$1.x, n = e$1.y;
		if (a$1) {
			const o = $e.calcLabelPosition(a$1);
			R.debug("Moving label " + e$1.label + " from (", r, ",", n, ") to (", o.x, ",", o.y, ") abc88"), t.updatedPath && (r = o.x, n = o.y);
		}
		s.attr("transform", `translate(${r}, ${n + l$1 / 2})`);
	}
	if (e$1.startLabelLeft) {
		const s = W[e$1.id].startLeft;
		let r = e$1.x, n = e$1.y;
		if (a$1) {
			const o = $e.calcTerminalLabelPosition(e$1.arrowTypeStart ? 10 : 0, "start_left", a$1);
			r = o.x, n = o.y;
		}
		s.attr("transform", `translate(${r}, ${n})`);
	}
	if (e$1.startLabelRight) {
		const s = W[e$1.id].startRight;
		let r = e$1.x, n = e$1.y;
		if (a$1) {
			const o = $e.calcTerminalLabelPosition(e$1.arrowTypeStart ? 10 : 0, "start_right", a$1);
			r = o.x, n = o.y;
		}
		s.attr("transform", `translate(${r}, ${n})`);
	}
	if (e$1.endLabelLeft) {
		const s = W[e$1.id].endLeft;
		let r = e$1.x, n = e$1.y;
		if (a$1) {
			const o = $e.calcTerminalLabelPosition(e$1.arrowTypeEnd ? 10 : 0, "end_left", a$1);
			r = o.x, n = o.y;
		}
		s.attr("transform", `translate(${r}, ${n})`);
	}
	if (e$1.endLabelRight) {
		const s = W[e$1.id].endRight;
		let r = e$1.x, n = e$1.y;
		if (a$1) {
			const o = $e.calcTerminalLabelPosition(e$1.arrowTypeEnd ? 10 : 0, "end_right", a$1);
			r = o.x, n = o.y;
		}
		s.attr("transform", `translate(${r}, ${n})`);
	}
}, "positionEdgeLabel"), gr = /* @__PURE__ */ m((e$1, t) => {
	const a$1 = e$1.x, i = e$1.y, l$1 = Math.abs(t.x - a$1), s = Math.abs(t.y - i), r = e$1.width / 2, n = e$1.height / 2;
	return l$1 >= r || s >= n;
}, "outsideNode"), ur = /* @__PURE__ */ m((e$1, t, a$1) => {
	R.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(a$1)}
  node        : x:${e$1.x} y:${e$1.y} w:${e$1.width} h:${e$1.height}`);
	const i = e$1.x, l$1 = e$1.y, s = Math.abs(i - a$1.x), r = e$1.width / 2;
	let n = a$1.x < t.x ? r - s : r + s;
	const o = e$1.height / 2, u = Math.abs(t.y - a$1.y), h = Math.abs(t.x - a$1.x);
	if (Math.abs(l$1 - t.y) * r > Math.abs(i - t.x) * o) {
		let y = a$1.y < t.y ? t.y - o - l$1 : l$1 - o - t.y;
		n = h * y / u;
		const m$1 = {
			x: a$1.x < t.x ? a$1.x + n : a$1.x - h + n,
			y: a$1.y < t.y ? a$1.y + u - y : a$1.y - u + y
		};
		return n === 0 && (m$1.x = t.x, m$1.y = t.y), h === 0 && (m$1.x = t.x), u === 0 && (m$1.y = t.y), R.debug(`abc89 topp/bott calc, Q ${u}, q ${y}, R ${h}, r ${n}`, m$1), m$1;
	} else {
		a$1.x < t.x ? n = t.x - r - i : n = i - r - t.x;
		let y = u * n / h, m$1 = a$1.x < t.x ? a$1.x + h - n : a$1.x - h + n, L$1 = a$1.y < t.y ? a$1.y + y : a$1.y - y;
		return R.debug(`sides calc abc89, Q ${u}, q ${y}, R ${h}, r ${n}`, {
			_x: m$1,
			_y: L$1
		}), n === 0 && (m$1 = t.x, L$1 = t.y), h === 0 && (m$1 = t.x), u === 0 && (L$1 = t.y), {
			x: m$1,
			y: L$1
		};
	}
}, "intersection"), zt$1 = /* @__PURE__ */ m((e$1, t) => {
	R.debug("abc88 cutPathAtIntersect", e$1, t);
	let a$1 = [], i = e$1[0], l$1 = !1;
	return e$1.forEach((s) => {
		if (!gr(t, s) && !l$1) {
			const r = ur(t, i, s);
			let n = !1;
			a$1.forEach((o) => {
				n = n || o.x === r.x && o.y === r.y;
			}), a$1.some((o) => o.x === r.x && o.y === r.y) || a$1.push(r), l$1 = !0;
		} else i = s, l$1 || a$1.push(s);
	}), a$1;
}, "cutPathAtIntersect"), pr = /* @__PURE__ */ m(function(e$1, t, a$1, i, l$1, s, r) {
	let n = a$1.points;
	R.debug("abc88 InsertEdge: edge=", a$1, "e=", t);
	let o = !1;
	const u = s.node(t.v);
	var h = s.node(t.w);
	h != null && h.intersect && u != null && u.intersect && (n = n.slice(1, a$1.points.length - 1), n.unshift(u.intersect(n[0])), n.push(h.intersect(n[n.length - 1]))), a$1.toCluster && (R.debug("to cluster abc88", i[a$1.toCluster]), n = zt$1(a$1.points, i[a$1.toCluster].node), o = !0), a$1.fromCluster && (R.debug("from cluster abc88", i[a$1.fromCluster]), n = zt$1(n.reverse(), i[a$1.fromCluster].node).reverse(), o = !0);
	const y = n.filter((x) => !Number.isNaN(x.y));
	let m$1 = qa;
	a$1.curve && (l$1 === "graph" || l$1 === "flowchart") && (m$1 = a$1.curve);
	const { x: L$1, y: E } = hA(a$1), D = V8().x(L$1).y(E).curve(m$1);
	let v;
	switch (a$1.thickness) {
		case "normal":
			v = "edge-thickness-normal";
			break;
		case "thick":
			v = "edge-thickness-thick";
			break;
		case "invisible":
			v = "edge-thickness-thick";
			break;
		default: v = "";
	}
	switch (a$1.pattern) {
		case "solid":
			v += " edge-pattern-solid";
			break;
		case "dotted":
			v += " edge-pattern-dotted";
			break;
		case "dashed":
			v += " edge-pattern-dashed";
			break;
	}
	const T = e$1.append("path").attr("d", D(y)).attr("id", a$1.id).attr("class", " " + v + (a$1.classes ? " " + a$1.classes : "")).attr("style", a$1.style);
	let k = "";
	(yt().flowchart.arrowMarkerAbsolute || yt().state.arrowMarkerAbsolute) && (k = n5(!0)), cr(T, a$1, k, r, l$1);
	let N = {};
	return o && (N.updatedPath = n), N.originalPath = a$1.points, N;
}, "insertEdge"), fr = /* @__PURE__ */ m((e$1) => {
	const t = /* @__PURE__ */ new Set();
	for (const a$1 of e$1) switch (a$1) {
		case "x":
			t.add("right"), t.add("left");
			break;
		case "y":
			t.add("up"), t.add("down");
			break;
		default:
			t.add(a$1);
			break;
	}
	return t;
}, "expandAndDeduplicateDirections"), xr = /* @__PURE__ */ m((e$1, t, a$1) => {
	const i = fr(e$1), l$1 = 2, s = t.height + 2 * a$1.padding, r = s / l$1, n = t.width + 2 * r + a$1.padding, o = a$1.padding / 2;
	return i.has("right") && i.has("left") && i.has("up") && i.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: r,
			y: 0
		},
		{
			x: n / 2,
			y: 2 * o
		},
		{
			x: n - r,
			y: 0
		},
		{
			x: n,
			y: 0
		},
		{
			x: n,
			y: -s / 3
		},
		{
			x: n + 2 * o,
			y: -s / 2
		},
		{
			x: n,
			y: -2 * s / 3
		},
		{
			x: n,
			y: -s
		},
		{
			x: n - r,
			y: -s
		},
		{
			x: n / 2,
			y: -s - 2 * o
		},
		{
			x: r,
			y: -s
		},
		{
			x: 0,
			y: -s
		},
		{
			x: 0,
			y: -2 * s / 3
		},
		{
			x: -2 * o,
			y: -s / 2
		},
		{
			x: 0,
			y: -s / 3
		}
	] : i.has("right") && i.has("left") && i.has("up") ? [
		{
			x: r,
			y: 0
		},
		{
			x: n - r,
			y: 0
		},
		{
			x: n,
			y: -s / 2
		},
		{
			x: n - r,
			y: -s
		},
		{
			x: r,
			y: -s
		},
		{
			x: 0,
			y: -s / 2
		}
	] : i.has("right") && i.has("left") && i.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: r,
			y: -s
		},
		{
			x: n - r,
			y: -s
		},
		{
			x: n,
			y: 0
		}
	] : i.has("right") && i.has("up") && i.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: n,
			y: -r
		},
		{
			x: n,
			y: -s + r
		},
		{
			x: 0,
			y: -s
		}
	] : i.has("left") && i.has("up") && i.has("down") ? [
		{
			x: n,
			y: 0
		},
		{
			x: 0,
			y: -r
		},
		{
			x: 0,
			y: -s + r
		},
		{
			x: n,
			y: -s
		}
	] : i.has("right") && i.has("left") ? [
		{
			x: r,
			y: 0
		},
		{
			x: r,
			y: -o
		},
		{
			x: n - r,
			y: -o
		},
		{
			x: n - r,
			y: 0
		},
		{
			x: n,
			y: -s / 2
		},
		{
			x: n - r,
			y: -s
		},
		{
			x: n - r,
			y: -s + o
		},
		{
			x: r,
			y: -s + o
		},
		{
			x: r,
			y: -s
		},
		{
			x: 0,
			y: -s / 2
		}
	] : i.has("up") && i.has("down") ? [
		{
			x: n / 2,
			y: 0
		},
		{
			x: 0,
			y: -o
		},
		{
			x: r,
			y: -o
		},
		{
			x: r,
			y: -s + o
		},
		{
			x: 0,
			y: -s + o
		},
		{
			x: n / 2,
			y: -s
		},
		{
			x: n,
			y: -s + o
		},
		{
			x: n - r,
			y: -s + o
		},
		{
			x: n - r,
			y: -o
		},
		{
			x: n,
			y: -o
		}
	] : i.has("right") && i.has("up") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: n,
			y: -r
		},
		{
			x: 0,
			y: -s
		}
	] : i.has("right") && i.has("down") ? [
		{
			x: 0,
			y: 0
		},
		{
			x: n,
			y: 0
		},
		{
			x: 0,
			y: -s
		}
	] : i.has("left") && i.has("up") ? [
		{
			x: n,
			y: 0
		},
		{
			x: 0,
			y: -r
		},
		{
			x: n,
			y: -s
		}
	] : i.has("left") && i.has("down") ? [
		{
			x: n,
			y: 0
		},
		{
			x: 0,
			y: 0
		},
		{
			x: n,
			y: -s
		}
	] : i.has("right") ? [
		{
			x: r,
			y: -o
		},
		{
			x: r,
			y: -o
		},
		{
			x: n - r,
			y: -o
		},
		{
			x: n - r,
			y: 0
		},
		{
			x: n,
			y: -s / 2
		},
		{
			x: n - r,
			y: -s
		},
		{
			x: n - r,
			y: -s + o
		},
		{
			x: r,
			y: -s + o
		},
		{
			x: r,
			y: -s + o
		}
	] : i.has("left") ? [
		{
			x: r,
			y: 0
		},
		{
			x: r,
			y: -o
		},
		{
			x: n - r,
			y: -o
		},
		{
			x: n - r,
			y: -s + o
		},
		{
			x: r,
			y: -s + o
		},
		{
			x: r,
			y: -s
		},
		{
			x: 0,
			y: -s / 2
		}
	] : i.has("up") ? [
		{
			x: r,
			y: -o
		},
		{
			x: r,
			y: -s + o
		},
		{
			x: 0,
			y: -s + o
		},
		{
			x: n / 2,
			y: -s
		},
		{
			x: n,
			y: -s + o
		},
		{
			x: n - r,
			y: -s + o
		},
		{
			x: n - r,
			y: -o
		}
	] : i.has("down") ? [
		{
			x: n / 2,
			y: 0
		},
		{
			x: 0,
			y: -o
		},
		{
			x: r,
			y: -o
		},
		{
			x: r,
			y: -s + o
		},
		{
			x: n - r,
			y: -s + o
		},
		{
			x: n - r,
			y: -o
		},
		{
			x: n,
			y: -o
		}
	] : [{
		x: 0,
		y: 0
	}];
}, "getArrowPoints");
function Jt(e$1, t) {
	return e$1.intersect(t);
}
m(Jt, "intersectNode");
var yr = Jt;
function Qt(e$1, t, a$1, i) {
	var l$1 = e$1.x, s = e$1.y, r = l$1 - i.x, n = s - i.y, o = Math.sqrt(t * t * n * n + a$1 * a$1 * r * r), u = Math.abs(t * a$1 * r / o);
	i.x < l$1 && (u = -u);
	var h = Math.abs(t * a$1 * n / o);
	return i.y < s && (h = -h), {
		x: l$1 + u,
		y: s + h
	};
}
m(Qt, "intersectEllipse");
var $t = Qt;
function te(e$1, t, a$1) {
	return $t(e$1, t, t, a$1);
}
m(te, "intersectCircle");
var mr = te;
function ee(e$1, t, a$1, i) {
	var l$1, s, r, n, o, u, h, y, m$1, L$1, E, D, v, T, k;
	if (l$1 = t.y - e$1.y, r = e$1.x - t.x, o = t.x * e$1.y - e$1.x * t.y, m$1 = l$1 * a$1.x + r * a$1.y + o, L$1 = l$1 * i.x + r * i.y + o, !(m$1 !== 0 && L$1 !== 0 && vt(m$1, L$1)) && (s = i.y - a$1.y, n = a$1.x - i.x, u = i.x * a$1.y - a$1.x * i.y, h = s * e$1.x + n * e$1.y + u, y = s * t.x + n * t.y + u, !(h !== 0 && y !== 0 && vt(h, y)) && (E = l$1 * n - s * r, E !== 0))) return D = Math.abs(E / 2), v = r * u - n * o, T = v < 0 ? (v - D) / E : (v + D) / E, v = s * o - l$1 * u, k = v < 0 ? (v - D) / E : (v + D) / E, {
		x: T,
		y: k
	};
}
m(ee, "intersectLine");
function vt(e$1, t) {
	return e$1 * t > 0;
}
m(vt, "sameSign");
var br = ee, wr = re;
function re(e$1, t, a$1) {
	var i = e$1.x, l$1 = e$1.y, s = [], r = Number.POSITIVE_INFINITY, n = Number.POSITIVE_INFINITY;
	typeof t.forEach == "function" ? t.forEach(function(E) {
		r = Math.min(r, E.x), n = Math.min(n, E.y);
	}) : (r = Math.min(r, t.x), n = Math.min(n, t.y));
	for (var o = i - e$1.width / 2 - r, u = l$1 - e$1.height / 2 - n, h = 0; h < t.length; h++) {
		var y = t[h], m$1 = t[h < t.length - 1 ? h + 1 : 0], L$1 = br(e$1, a$1, {
			x: o + y.x,
			y: u + y.y
		}, {
			x: o + m$1.x,
			y: u + m$1.y
		});
		L$1 && s.push(L$1);
	}
	return s.length ? (s.length > 1 && s.sort(function(E, D) {
		var v = E.x - a$1.x, T = E.y - a$1.y, k = Math.sqrt(v * v + T * T), N = D.x - a$1.x, x = D.y - a$1.y, g = Math.sqrt(N * N + x * x);
		return k < g ? -1 : k === g ? 0 : 1;
	}), s[0]) : e$1;
}
m(re, "intersectPolygon");
var C = {
	node: yr,
	circle: mr,
	ellipse: $t,
	polygon: wr,
	rect: /* @__PURE__ */ m((e$1, t) => {
		var a$1 = e$1.x, i = e$1.y, l$1 = t.x - a$1, s = t.y - i, r = e$1.width / 2, n = e$1.height / 2, o, u;
		return Math.abs(s) * r > Math.abs(l$1) * n ? (s < 0 && (n = -n), o = s === 0 ? 0 : n * l$1 / s, u = n) : (l$1 < 0 && (r = -r), o = r, u = l$1 === 0 ? 0 : r * s / l$1), {
			x: a$1 + o,
			y: i + u
		};
	}, "intersectRect")
}, F = /* @__PURE__ */ m(async (e$1, t, a$1, i) => {
	const l$1 = yt();
	let s;
	const r = t.useHtmlLabels || zt(l$1.flowchart.htmlLabels);
	a$1 ? s = a$1 : s = "node default";
	const n = e$1.insert("g").attr("class", s).attr("id", t.domId || t.id), o = n.insert("g").attr("class", "label").attr("style", t.labelStyle);
	let u;
	t.labelText === void 0 ? u = "" : u = typeof t.labelText == "string" ? t.labelText : t.labelText[0];
	const h = o.node();
	let y;
	t.labelType === "markdown" ? y = Ar(o, _e(ri(u), l$1), {
		useHtmlLabels: r,
		width: t.width || l$1.flowchart.wrappingWidth,
		classes: "markdown-node-label"
	}, l$1) : y = h.appendChild(await j(_e(ri(u), l$1), t.labelStyle, !1, i));
	let m$1 = y.getBBox();
	const L$1 = t.padding / 2;
	if (zt(l$1.flowchart.htmlLabels)) {
		const E = y.children[0], D = gt(y), v = E.getElementsByTagName("img");
		if (v) {
			const T = u.replace(/<img[^>]*>/g, "").trim() === "";
			await Promise.all([...v].map((k) => new Promise((N) => {
				function x() {
					if (k.style.display = "flex", k.style.flexDirection = "column", T) {
						const g = l$1.fontSize ? l$1.fontSize : window.getComputedStyle(document.body).fontSize, b = parseInt(g, 10) * 5 + "px";
						k.style.minWidth = b, k.style.maxWidth = b;
					} else k.style.width = "100%";
					N(k);
				}
				m(x, "setupImage"), setTimeout(() => {
					k.complete && x();
				}), k.addEventListener("error", x), k.addEventListener("load", x);
			})));
		}
		m$1 = E.getBoundingClientRect(), D.attr("width", m$1.width), D.attr("height", m$1.height);
	}
	return r ? o.attr("transform", "translate(" + -m$1.width / 2 + ", " + -m$1.height / 2 + ")") : o.attr("transform", "translate(0, " + -m$1.height / 2 + ")"), t.centerLabel && o.attr("transform", "translate(" + -m$1.width / 2 + ", " + -m$1.height / 2 + ")"), o.insert("rect", ":first-child"), {
		shapeSvg: n,
		bbox: m$1,
		halfPadding: L$1,
		label: o
	};
}, "labelHelper"), I = /* @__PURE__ */ m((e$1, t) => {
	const a$1 = t.node().getBBox();
	e$1.width = a$1.width, e$1.height = a$1.height;
}, "updateNodeBounds");
function G(e$1, t, a$1, i) {
	return e$1.insert("polygon", ":first-child").attr("points", i.map(function(l$1) {
		return l$1.x + "," + l$1.y;
	}).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + a$1 / 2 + ")");
}
m(G, "insertPolygonShape");
var Er = /* @__PURE__ */ m(async (e$1, t) => {
	t.useHtmlLabels || yt().flowchart.htmlLabels || (t.centerLabel = !0);
	const { shapeSvg: i, bbox: l$1, halfPadding: s } = await F(e$1, t, "node " + t.classes, !0);
	R.info("Classes = ", t.classes);
	const r = i.insert("rect", ":first-child");
	return r.attr("rx", t.rx).attr("ry", t.ry).attr("x", -l$1.width / 2 - s).attr("y", -l$1.height / 2 - s).attr("width", l$1.width + t.padding).attr("height", l$1.height + t.padding), I(t, r), t.intersect = function(n) {
		return C.rect(t, n);
	}, i;
}, "note"), At = /* @__PURE__ */ m((e$1) => e$1 ? " " + e$1 : "", "formatClass"), K = /* @__PURE__ */ m((e$1, t) => `${t || "node default"}${At(e$1.classes)} ${At(e$1.class)}`, "getClassesFromNode"), Mt = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i } = await F(e$1, t, K(t, void 0), !0), r = i.width + t.padding + (i.height + t.padding), n = [
		{
			x: r / 2,
			y: 0
		},
		{
			x: r,
			y: -r / 2
		},
		{
			x: r / 2,
			y: -r
		},
		{
			x: 0,
			y: -r / 2
		}
	];
	R.info("Question main (Circle)");
	const o = G(a$1, r, r, n);
	return o.attr("style", t.style), I(t, o), t.intersect = function(u) {
		return R.warn("Intersect called"), C.polygon(t, n, u);
	}, a$1;
}, "question"), _r = /* @__PURE__ */ m((e$1, t) => {
	const a$1 = e$1.insert("g").attr("class", "node default").attr("id", t.domId || t.id), i = 28, l$1 = [
		{
			x: 0,
			y: i / 2
		},
		{
			x: i / 2,
			y: 0
		},
		{
			x: 0,
			y: -i / 2
		},
		{
			x: -i / 2,
			y: 0
		}
	];
	return a$1.insert("polygon", ":first-child").attr("points", l$1.map(function(r) {
		return r.x + "," + r.y;
	}).join(" ")).attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28), t.width = 28, t.height = 28, t.intersect = function(r) {
		return C.circle(t, 14, r);
	}, a$1;
}, "choice"), kr = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i } = await F(e$1, t, K(t, void 0), !0), l$1 = 4, s = i.height + t.padding, r = s / l$1, n = i.width + 2 * r + t.padding, o = [
		{
			x: r,
			y: 0
		},
		{
			x: n - r,
			y: 0
		},
		{
			x: n,
			y: -s / 2
		},
		{
			x: n - r,
			y: -s
		},
		{
			x: r,
			y: -s
		},
		{
			x: 0,
			y: -s / 2
		}
	], u = G(a$1, n, s, o);
	return u.attr("style", t.style), I(t, u), t.intersect = function(h) {
		return C.polygon(t, o, h);
	}, a$1;
}, "hexagon"), Dr = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i } = await F(e$1, t, void 0, !0), l$1 = 2, s = i.height + 2 * t.padding, r = s / l$1, n = i.width + 2 * r + t.padding, o = xr(t.directions, i, t), u = G(a$1, n, s, o);
	return u.attr("style", t.style), I(t, u), t.intersect = function(h) {
		return C.polygon(t, o, h);
	}, a$1;
}, "block_arrow"), Nr = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i } = await F(e$1, t, K(t, void 0), !0), l$1 = i.width + t.padding, s = i.height + t.padding, r = [
		{
			x: -s / 2,
			y: 0
		},
		{
			x: l$1,
			y: 0
		},
		{
			x: l$1,
			y: -s
		},
		{
			x: -s / 2,
			y: -s
		},
		{
			x: 0,
			y: -s / 2
		}
	];
	return G(a$1, l$1, s, r).attr("style", t.style), t.width = l$1 + s, t.height = s, t.intersect = function(o) {
		return C.polygon(t, r, o);
	}, a$1;
}, "rect_left_inv_arrow"), Tr = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i } = await F(e$1, t, K(t), !0), l$1 = i.width + t.padding, s = i.height + t.padding, r = [
		{
			x: -2 * s / 6,
			y: 0
		},
		{
			x: l$1 - s / 6,
			y: 0
		},
		{
			x: l$1 + 2 * s / 6,
			y: -s
		},
		{
			x: s / 6,
			y: -s
		}
	], n = G(a$1, l$1, s, r);
	return n.attr("style", t.style), I(t, n), t.intersect = function(o) {
		return C.polygon(t, r, o);
	}, a$1;
}, "lean_right"), Cr = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i } = await F(e$1, t, K(t, void 0), !0), l$1 = i.width + t.padding, s = i.height + t.padding, r = [
		{
			x: 2 * s / 6,
			y: 0
		},
		{
			x: l$1 + s / 6,
			y: 0
		},
		{
			x: l$1 - 2 * s / 6,
			y: -s
		},
		{
			x: -s / 6,
			y: -s
		}
	], n = G(a$1, l$1, s, r);
	return n.attr("style", t.style), I(t, n), t.intersect = function(o) {
		return C.polygon(t, r, o);
	}, a$1;
}, "lean_left"), Ir = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i } = await F(e$1, t, K(t, void 0), !0), l$1 = i.width + t.padding, s = i.height + t.padding, r = [
		{
			x: -2 * s / 6,
			y: 0
		},
		{
			x: l$1 + 2 * s / 6,
			y: 0
		},
		{
			x: l$1 - s / 6,
			y: -s
		},
		{
			x: s / 6,
			y: -s
		}
	], n = G(a$1, l$1, s, r);
	return n.attr("style", t.style), I(t, n), t.intersect = function(o) {
		return C.polygon(t, r, o);
	}, a$1;
}, "trapezoid"), Br = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i } = await F(e$1, t, K(t, void 0), !0), l$1 = i.width + t.padding, s = i.height + t.padding, r = [
		{
			x: s / 6,
			y: 0
		},
		{
			x: l$1 - s / 6,
			y: 0
		},
		{
			x: l$1 + 2 * s / 6,
			y: -s
		},
		{
			x: -2 * s / 6,
			y: -s
		}
	], n = G(a$1, l$1, s, r);
	return n.attr("style", t.style), I(t, n), t.intersect = function(o) {
		return C.polygon(t, r, o);
	}, a$1;
}, "inv_trapezoid"), Or = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i } = await F(e$1, t, K(t, void 0), !0), l$1 = i.width + t.padding, s = i.height + t.padding, r = [
		{
			x: 0,
			y: 0
		},
		{
			x: l$1 + s / 2,
			y: 0
		},
		{
			x: l$1,
			y: -s / 2
		},
		{
			x: l$1 + s / 2,
			y: -s
		},
		{
			x: 0,
			y: -s
		}
	], n = G(a$1, l$1, s, r);
	return n.attr("style", t.style), I(t, n), t.intersect = function(o) {
		return C.polygon(t, r, o);
	}, a$1;
}, "rect_right_inv_arrow"), Rr = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i } = await F(e$1, t, K(t, void 0), !0), l$1 = i.width + t.padding, s = l$1 / 2, r = s / (2.5 + l$1 / 50), n = i.height + r + t.padding, o = "M 0," + r + " a " + s + "," + r + " 0,0,0 " + l$1 + " 0 a " + s + "," + r + " 0,0,0 " + -l$1 + " 0 l 0," + n + " a " + s + "," + r + " 0,0,0 " + l$1 + " 0 l 0," + -n;
	return I(t, a$1.attr("label-offset-y", r).insert("path", ":first-child").attr("style", t.style).attr("d", o).attr("transform", "translate(" + -l$1 / 2 + "," + -(n / 2 + r) + ")")), t.intersect = function(h) {
		const y = C.rect(t, h), m$1 = y.x - t.x;
		if (s != 0 && (Math.abs(m$1) < t.width / 2 || Math.abs(m$1) == t.width / 2 && Math.abs(y.y - t.y) > t.height / 2 - r)) {
			let L$1 = r * r * (1 - m$1 * m$1 / (s * s));
			L$1 != 0 && (L$1 = Math.sqrt(L$1)), L$1 = r - L$1, h.y - t.y > 0 && (L$1 = -L$1), y.y += L$1;
		}
		return y;
	}, a$1;
}, "cylinder"), zr = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i, halfPadding: l$1 } = await F(e$1, t, "node " + t.classes + " " + t.class, !0), s = a$1.insert("rect", ":first-child"), r = t.positioned ? t.width : i.width + t.padding, n = t.positioned ? t.height : i.height + t.padding, o = t.positioned ? -r / 2 : -i.width / 2 - l$1, u = t.positioned ? -n / 2 : -i.height / 2 - l$1;
	if (s.attr("class", "basic label-container").attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", o).attr("y", u).attr("width", r).attr("height", n), t.props) {
		const h = new Set(Object.keys(t.props));
		t.props.borders && (dt(s, t.props.borders, r, n), h.delete("borders")), h.forEach((y) => {
			R.warn(`Unknown node property ${y}`);
		});
	}
	return I(t, s), t.intersect = function(h) {
		return C.rect(t, h);
	}, a$1;
}, "rect"), Ar$1 = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i, halfPadding: l$1 } = await F(e$1, t, "node " + t.classes, !0), s = a$1.insert("rect", ":first-child"), r = t.positioned ? t.width : i.width + t.padding, n = t.positioned ? t.height : i.height + t.padding, o = t.positioned ? -r / 2 : -i.width / 2 - l$1, u = t.positioned ? -n / 2 : -i.height / 2 - l$1;
	if (s.attr("class", "basic cluster composite label-container").attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", o).attr("y", u).attr("width", r).attr("height", n), t.props) {
		const h = new Set(Object.keys(t.props));
		t.props.borders && (dt(s, t.props.borders, r, n), h.delete("borders")), h.forEach((y) => {
			R.warn(`Unknown node property ${y}`);
		});
	}
	return I(t, s), t.intersect = function(h) {
		return C.rect(t, h);
	}, a$1;
}, "composite"), Mr = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1 } = await F(e$1, t, "label", !0);
	R.trace("Classes = ", t.class);
	const i = a$1.insert("rect", ":first-child"), l$1 = 0, s = 0;
	if (i.attr("width", l$1).attr("height", s), a$1.attr("class", "label edgeLabel"), t.props) {
		const r = new Set(Object.keys(t.props));
		t.props.borders && (dt(i, t.props.borders, l$1, s), r.delete("borders")), r.forEach((n) => {
			R.warn(`Unknown node property ${n}`);
		});
	}
	return I(t, i), t.intersect = function(r) {
		return C.rect(t, r);
	}, a$1;
}, "labelRect");
function dt(e$1, t, a$1, i) {
	const l$1 = [], s = /* @__PURE__ */ m((n) => {
		l$1.push(n, 0);
	}, "addBorder"), r = /* @__PURE__ */ m((n) => {
		l$1.push(0, n);
	}, "skipBorder");
	t.includes("t") ? (R.debug("add top border"), s(a$1)) : r(a$1), t.includes("r") ? (R.debug("add right border"), s(i)) : r(i), t.includes("b") ? (R.debug("add bottom border"), s(a$1)) : r(a$1), t.includes("l") ? (R.debug("add left border"), s(i)) : r(i), e$1.attr("stroke-dasharray", l$1.join(" "));
}
m(dt, "applyNodePropertyBorders");
var Fr = /* @__PURE__ */ m(async (e$1, t) => {
	let a$1;
	t.classes ? a$1 = "node " + t.classes : a$1 = "node default";
	const i = e$1.insert("g").attr("class", a$1).attr("id", t.domId || t.id), l$1 = i.insert("rect", ":first-child"), s = i.insert("line"), r = i.insert("g").attr("class", "label"), n = t.labelText.flat ? t.labelText.flat() : t.labelText;
	let o = "";
	typeof n == "object" ? o = n[0] : o = n, R.info("Label text abc79", o, n, typeof n == "object");
	const u = r.node().appendChild(await j(o, t.labelStyle, !0, !0));
	let h = {
		width: 0,
		height: 0
	};
	if (zt(yt().flowchart.htmlLabels)) {
		const D = u.children[0], v = gt(u);
		h = D.getBoundingClientRect(), v.attr("width", h.width), v.attr("height", h.height);
	}
	R.info("Text 2", n);
	const y = n.slice(1, n.length);
	let m$1 = u.getBBox();
	const L$1 = r.node().appendChild(await j(y.join ? y.join("<br/>") : y, t.labelStyle, !0, !0));
	if (zt(yt().flowchart.htmlLabels)) {
		const D = L$1.children[0], v = gt(L$1);
		h = D.getBoundingClientRect(), v.attr("width", h.width), v.attr("height", h.height);
	}
	const E = t.padding / 2;
	return gt(L$1).attr("transform", "translate( " + (h.width > m$1.width ? 0 : (m$1.width - h.width) / 2) + ", " + (m$1.height + E + 5) + ")"), gt(u).attr("transform", "translate( " + (h.width < m$1.width ? 0 : -(m$1.width - h.width) / 2) + ", 0)"), h = r.node().getBBox(), r.attr("transform", "translate(" + -h.width / 2 + ", " + (-h.height / 2 - E + 3) + ")"), l$1.attr("class", "outer title-state").attr("x", -h.width / 2 - E).attr("y", -h.height / 2 - E).attr("width", h.width + t.padding).attr("height", h.height + t.padding), s.attr("class", "divider").attr("x1", -h.width / 2 - E).attr("x2", h.width / 2 + E).attr("y1", -h.height / 2 - E + m$1.height + E).attr("y2", -h.height / 2 - E + m$1.height + E), I(t, l$1), t.intersect = function(D) {
		return C.rect(t, D);
	}, i;
}, "rectWithTitle"), Wr = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i } = await F(e$1, t, K(t, void 0), !0), l$1 = i.height + t.padding, s = i.width + l$1 / 4 + t.padding;
	return I(t, a$1.insert("rect", ":first-child").attr("style", t.style).attr("rx", l$1 / 2).attr("ry", l$1 / 2).attr("x", -s / 2).attr("y", -l$1 / 2).attr("width", s).attr("height", l$1)), t.intersect = function(n) {
		return C.rect(t, n);
	}, a$1;
}, "stadium"), Pr = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i, halfPadding: l$1 } = await F(e$1, t, K(t, void 0), !0), s = a$1.insert("circle", ":first-child");
	return s.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", i.width / 2 + l$1).attr("width", i.width + t.padding).attr("height", i.height + t.padding), R.info("Circle main"), I(t, s), t.intersect = function(r) {
		return R.info("Circle intersect", t, i.width / 2 + l$1, r), C.circle(t, i.width / 2 + l$1, r);
	}, a$1;
}, "circle"), Yr = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i, halfPadding: l$1 } = await F(e$1, t, K(t, void 0), !0), s = 5, r = a$1.insert("g", ":first-child"), n = r.insert("circle"), o = r.insert("circle");
	return r.attr("class", t.class), n.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", i.width / 2 + l$1 + s).attr("width", i.width + t.padding + s * 2).attr("height", i.height + t.padding + s * 2), o.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("r", i.width / 2 + l$1).attr("width", i.width + t.padding).attr("height", i.height + t.padding), R.info("DoubleCircle main"), I(t, n), t.intersect = function(u) {
		return R.info("DoubleCircle intersect", t, i.width / 2 + l$1 + s, u), C.circle(t, i.width / 2 + l$1 + s, u);
	}, a$1;
}, "doublecircle"), Hr = /* @__PURE__ */ m(async (e$1, t) => {
	const { shapeSvg: a$1, bbox: i } = await F(e$1, t, K(t, void 0), !0), l$1 = i.width + t.padding, s = i.height + t.padding, r = [
		{
			x: 0,
			y: 0
		},
		{
			x: l$1,
			y: 0
		},
		{
			x: l$1,
			y: -s
		},
		{
			x: 0,
			y: -s
		},
		{
			x: 0,
			y: 0
		},
		{
			x: -8,
			y: 0
		},
		{
			x: l$1 + 8,
			y: 0
		},
		{
			x: l$1 + 8,
			y: -s
		},
		{
			x: -8,
			y: -s
		},
		{
			x: -8,
			y: 0
		}
	], n = G(a$1, l$1, s, r);
	return n.attr("style", t.style), I(t, n), t.intersect = function(o) {
		return C.polygon(t, r, o);
	}, a$1;
}, "subroutine"), Kr = /* @__PURE__ */ m((e$1, t) => {
	const a$1 = e$1.insert("g").attr("class", "node default").attr("id", t.domId || t.id), i = a$1.insert("circle", ":first-child");
	return i.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), I(t, i), t.intersect = function(l$1) {
		return C.circle(t, 7, l$1);
	}, a$1;
}, "start"), Ft = /* @__PURE__ */ m((e$1, t, a$1) => {
	const i = e$1.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
	let l$1 = 70, s = 10;
	a$1 === "LR" && (l$1 = 10, s = 70);
	return I(t, i.append("rect").attr("x", -1 * l$1 / 2).attr("y", -1 * s / 2).attr("width", l$1).attr("height", s).attr("class", "fork-join")), t.height = t.height + t.padding / 2, t.width = t.width + t.padding / 2, t.intersect = function(n) {
		return C.rect(t, n);
	}, i;
}, "forkJoin"), Wt = {
	rhombus: Mt,
	composite: Ar$1,
	question: Mt,
	rect: zr,
	labelRect: Mr,
	rectWithTitle: Fr,
	choice: _r,
	circle: Pr,
	doublecircle: Yr,
	stadium: Wr,
	hexagon: kr,
	block_arrow: Dr,
	rect_left_inv_arrow: Nr,
	lean_right: Tr,
	lean_left: Cr,
	trapezoid: Ir,
	inv_trapezoid: Br,
	rect_right_inv_arrow: Or,
	cylinder: Rr,
	start: Kr,
	end: /* @__PURE__ */ m((e$1, t) => {
		const a$1 = e$1.insert("g").attr("class", "node default").attr("id", t.domId || t.id), i = a$1.insert("circle", ":first-child"), l$1 = a$1.insert("circle", ":first-child");
		return l$1.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14), i.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10), I(t, l$1), t.intersect = function(s) {
			return C.circle(t, 7, s);
		}, a$1;
	}, "end"),
	note: Er,
	subroutine: Hr,
	fork: Ft,
	join: Ft,
	class_box: /* @__PURE__ */ m(async (e$1, t) => {
		var S;
		const a$1 = t.padding / 2, i = 4, l$1 = 8;
		let s;
		t.classes ? s = "node " + t.classes : s = "node default";
		const r = e$1.insert("g").attr("class", s).attr("id", t.domId || t.id), n = r.insert("rect", ":first-child"), o = r.insert("line"), u = r.insert("line");
		let h = 0, y = i;
		const m$1 = r.insert("g").attr("class", "label");
		let L$1 = 0;
		const E = (S = t.classData.annotations) == null ? void 0 : S[0], D = t.classData.annotations[0] ? "«" + t.classData.annotations[0] + "»" : "", v = m$1.node().appendChild(await j(D, t.labelStyle, !0, !0));
		let T = v.getBBox();
		if (zt(yt().flowchart.htmlLabels)) {
			const c = v.children[0], _ = gt(v);
			T = c.getBoundingClientRect(), _.attr("width", T.width), _.attr("height", T.height);
		}
		t.classData.annotations[0] && (y += T.height + i, h += T.width);
		let k = t.classData.label;
		t.classData.type !== void 0 && t.classData.type !== "" && (yt().flowchart.htmlLabels ? k += "&lt;" + t.classData.type + "&gt;" : k += "<" + t.classData.type + ">");
		const N = m$1.node().appendChild(await j(k, t.labelStyle, !0, !0));
		gt(N).attr("class", "classTitle");
		let x = N.getBBox();
		if (zt(yt().flowchart.htmlLabels)) {
			const c = N.children[0], _ = gt(N);
			x = c.getBoundingClientRect(), _.attr("width", x.width), _.attr("height", x.height);
		}
		y += x.height + i, x.width > h && (h = x.width);
		const g = [];
		t.classData.members.forEach(async (c) => {
			const _ = c.getDisplayDetails();
			let f = _.displayText;
			yt().flowchart.htmlLabels && (f = f.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
			const A = m$1.node().appendChild(await j(f, _.cssStyle ? _.cssStyle : t.labelStyle, !0, !0));
			let O = A.getBBox();
			if (zt(yt().flowchart.htmlLabels)) {
				const X = A.children[0], P = gt(A);
				O = X.getBoundingClientRect(), P.attr("width", O.width), P.attr("height", O.height);
			}
			O.width > h && (h = O.width), y += O.height + i, g.push(A);
		}), y += l$1;
		const p = [];
		if (t.classData.methods.forEach(async (c) => {
			const _ = c.getDisplayDetails();
			let f = _.displayText;
			yt().flowchart.htmlLabels && (f = f.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
			const A = m$1.node().appendChild(await j(f, _.cssStyle ? _.cssStyle : t.labelStyle, !0, !0));
			let O = A.getBBox();
			if (zt(yt().flowchart.htmlLabels)) {
				const X = A.children[0], P = gt(A);
				O = X.getBoundingClientRect(), P.attr("width", O.width), P.attr("height", O.height);
			}
			O.width > h && (h = O.width), y += O.height + i, p.push(A);
		}), y += l$1, E) {
			let c = (h - T.width) / 2;
			gt(v).attr("transform", "translate( " + (-1 * h / 2 + c) + ", " + -1 * y / 2 + ")"), L$1 = T.height + i;
		}
		let b = (h - x.width) / 2;
		return gt(N).attr("transform", "translate( " + (-1 * h / 2 + b) + ", " + (-1 * y / 2 + L$1) + ")"), L$1 += x.height + i, o.attr("class", "divider").attr("x1", -h / 2 - a$1).attr("x2", h / 2 + a$1).attr("y1", -y / 2 - a$1 + l$1 + L$1).attr("y2", -y / 2 - a$1 + l$1 + L$1), L$1 += l$1, g.forEach((c) => {
			gt(c).attr("transform", "translate( " + -h / 2 + ", " + (-1 * y / 2 + L$1 + l$1 / 2) + ")");
			const _ = c == null ? void 0 : c.getBBox();
			L$1 += ((_ == null ? void 0 : _.height) ?? 0) + i;
		}), L$1 += l$1, u.attr("class", "divider").attr("x1", -h / 2 - a$1).attr("x2", h / 2 + a$1).attr("y1", -y / 2 - a$1 + l$1 + L$1).attr("y2", -y / 2 - a$1 + l$1 + L$1), L$1 += l$1, p.forEach((c) => {
			gt(c).attr("transform", "translate( " + -h / 2 + ", " + (-1 * y / 2 + L$1) + ")");
			const _ = c == null ? void 0 : c.getBBox();
			L$1 += ((_ == null ? void 0 : _.height) ?? 0) + i;
		}), n.attr("style", t.style).attr("class", "outer title-state").attr("x", -h / 2 - a$1).attr("y", -(y / 2) - a$1).attr("width", h + t.padding).attr("height", y + t.padding), I(t, n), t.intersect = function(c) {
			return C.rect(t, c);
		}, r;
	}, "class_box")
}, ct = {}, ae = /* @__PURE__ */ m(async (e$1, t, a$1) => {
	let i, l$1;
	if (t.link) {
		let s;
		yt().securityLevel === "sandbox" ? s = "_top" : t.linkTarget && (s = t.linkTarget || "_blank"), i = e$1.insert("svg:a").attr("xlink:href", t.link).attr("target", s), l$1 = await Wt[t.shape](i, t, a$1);
	} else l$1 = await Wt[t.shape](e$1, t, a$1), i = l$1;
	return t.tooltip && l$1.attr("title", t.tooltip), t.class && l$1.attr("class", "node default " + t.class), ct[t.id] = i, t.haveCallback && ct[t.id].attr("class", ct[t.id].attr("class") + " clickable"), i;
}, "insertNode"), jr = /* @__PURE__ */ m((e$1) => {
	const t = ct[e$1.id];
	R.trace("Transforming node", e$1.diff, e$1, "translate(" + (e$1.x - e$1.width / 2 - 5) + ", " + e$1.width / 2 + ")");
	const a$1 = 8, i = e$1.diff || 0;
	return e$1.clusterNode ? t.attr("transform", "translate(" + (e$1.x + i - e$1.width / 2) + ", " + (e$1.y - e$1.height / 2 - a$1) + ")") : t.attr("transform", "translate(" + e$1.x + ", " + e$1.y + ")"), i;
}, "positionNode");
function Nt(e$1, t, a$1 = !1) {
	var m$1, L$1, E;
	const i = e$1;
	let l$1 = "default";
	(((m$1 = i == null ? void 0 : i.classes) == null ? void 0 : m$1.length) || 0) > 0 && (l$1 = ((i == null ? void 0 : i.classes) ?? []).join(" ")), l$1 = l$1 + " flowchart-label";
	let s = 0, r = "", n;
	switch (i.type) {
		case "round":
			s = 5, r = "rect";
			break;
		case "composite":
			s = 0, r = "composite", n = 0;
			break;
		case "square":
			r = "rect";
			break;
		case "diamond":
			r = "question";
			break;
		case "hexagon":
			r = "hexagon";
			break;
		case "block_arrow":
			r = "block_arrow";
			break;
		case "odd":
			r = "rect_left_inv_arrow";
			break;
		case "lean_right":
			r = "lean_right";
			break;
		case "lean_left":
			r = "lean_left";
			break;
		case "trapezoid":
			r = "trapezoid";
			break;
		case "inv_trapezoid":
			r = "inv_trapezoid";
			break;
		case "rect_left_inv_arrow":
			r = "rect_left_inv_arrow";
			break;
		case "circle":
			r = "circle";
			break;
		case "ellipse":
			r = "ellipse";
			break;
		case "stadium":
			r = "stadium";
			break;
		case "subroutine":
			r = "subroutine";
			break;
		case "cylinder":
			r = "cylinder";
			break;
		case "group":
			r = "rect";
			break;
		case "doublecircle":
			r = "doublecircle";
			break;
		default: r = "rect";
	}
	const o = Im((i == null ? void 0 : i.styles) ?? []), u = i.label, h = i.size ?? {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	};
	return {
		labelStyle: o.labelStyle,
		shape: r,
		labelText: u,
		rx: s,
		ry: s,
		class: l$1,
		style: o.style,
		id: i.id,
		directions: i.directions,
		width: h.width,
		height: h.height,
		x: h.x,
		y: h.y,
		positioned: a$1,
		intersect: void 0,
		type: i.type,
		padding: n ?? ((E = (L$1 = Xt()) == null ? void 0 : L$1.block) == null ? void 0 : E.padding) ?? 0
	};
}
m(Nt, "getNodeFromBlock");
async function se(e$1, t, a$1) {
	const i = Nt(t, a$1, !1);
	if (i.type === "group") return;
	const s = await ae(e$1, i, { config: Xt() }), r = s.node().getBBox(), n = a$1.getBlock(i.id);
	n.size = {
		width: r.width,
		height: r.height,
		x: 0,
		y: 0,
		node: s
	}, a$1.setBlock(n), s.remove();
}
m(se, "calculateBlockSize");
async function ie(e$1, t, a$1) {
	const i = Nt(t, a$1, !0);
	if (a$1.getBlock(i.id).type !== "space") await ae(e$1, i, { config: Xt() }), t.intersect = i == null ? void 0 : i.intersect, jr(i);
}
m(ie, "insertBlockPositioned");
async function gt$1(e$1, t, a$1, i) {
	for (const l$1 of t) await i(e$1, l$1, a$1), l$1.children && await gt$1(e$1, l$1.children, a$1, i);
}
m(gt$1, "performOperations");
async function ne(e$1, t, a$1) {
	await gt$1(e$1, t, a$1, se);
}
m(ne, "calculateBlockSizes");
async function le(e$1, t, a$1) {
	await gt$1(e$1, t, a$1, ie);
}
m(le, "insertBlocks");
async function ce(e$1, t, a$1, i, l$1) {
	const s = new L({
		multigraph: !0,
		compound: !0
	});
	s.setGraph({
		rankdir: "TB",
		nodesep: 10,
		ranksep: 10,
		marginx: 8,
		marginy: 8
	});
	for (const r of a$1) r.size && s.setNode(r.id, {
		width: r.size.width,
		height: r.size.height,
		intersect: r.intersect
	});
	for (const r of t) if (r.start && r.end) {
		const n = i.getBlock(r.start), o = i.getBlock(r.end);
		if (n != null && n.size && o != null && o.size) {
			const u = n.size, h = o.size, y = [
				{
					x: u.x,
					y: u.y
				},
				{
					x: u.x + (h.x - u.x) / 2,
					y: u.y + (h.y - u.y) / 2
				},
				{
					x: h.x,
					y: h.y
				}
			];
			pr(e$1, {
				v: r.start,
				w: r.end,
				name: r.id
			}, {
				...r,
				arrowTypeEnd: r.arrowTypeEnd,
				arrowTypeStart: r.arrowTypeStart,
				points: y,
				classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
			}, void 0, "block", s, l$1), r.label && (await hr(e$1, {
				...r,
				label: r.label,
				labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
				arrowTypeEnd: r.arrowTypeEnd,
				arrowTypeStart: r.arrowTypeStart,
				points: y,
				classes: "edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"
			}), dr({
				...r,
				x: y[1].x,
				y: y[1].y
			}, { originalPath: y }));
		}
	}
}
m(ce, "insertEdges");
var vs = {
	parser: ke,
	db: Ue,
	renderer: {
		draw: /* @__PURE__ */ m(async function(e$1, t, a$1, i) {
			const { securityLevel: l$1, block: s } = Xt(), r = i.db;
			let n;
			l$1 === "sandbox" && (n = gt("#i" + t));
			const o = l$1 === "sandbox" ? gt(n.nodes()[0].contentDocument.body) : gt("body"), u = l$1 === "sandbox" ? o.select(`[id="${t}"]`) : gt(`[id="${t}"]`);
			ir(u, [
				"point",
				"circle",
				"cross"
			], i.type, t);
			const y = r.getBlocks(), m$1 = r.getBlocksFlat(), L$1 = r.getEdges(), E = u.insert("g").attr("class", "block");
			await ne(E, y, r);
			const D = Zt(r);
			if (await le(E, y, r), await ce(E, L$1, m$1, r, t), D) {
				const v = D, T = Math.max(1, Math.round(.125 * (v.width / v.height))), k = v.height + T + 10, N = v.width + 10, { useMaxWidth: x } = s;
				If(u, k, N, !!x), R.debug("Here Bounds", D, v), u.attr("viewBox", `${v.x - 5} ${v.y - 5} ${v.width + 10} ${v.height + 10}`);
			}
		}, "draw"),
		getClasses: /* @__PURE__ */ m(function(e$1, t) {
			return t.db.getClasses();
		}, "getClasses")
	},
	styles: Ve
};
export { vs as diagram };
