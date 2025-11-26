import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { N as require_jsx_runtime, P as require_react, w as require_react_dom } from "./chakra-ui-NHV_-bGL.js";
import { k as require_lodash } from "./react-utils-DE1lHEcz.js";
import { t as require_client } from "./vendor-BKa3f7Q_.js";
import "./common-utils-BCFfNPpf.js";
import "./react-markdown-14W_w1u6.js";
import "./monaco-De2c8opW.js";
import "./remark-gfm-BxiTB6j-.js";
import { $n as require_markdown_it_task_lists, $t as iT, Ln as w5, Ot as b5, Qn as require_pinyin, R as Mf, Vn as x5, Wn as y5, cn as lu, dn as m5, er as require_markdown_it_multimd_table, et as R, fn as mm, gt as Xt, ht as X, nn as k5, qt as gt, un as m, w as If, wi as require_classnames, xt as _5 } from "./app-CHqOxvpb.js";
import "./_baseUniq-214847ec-DBvBJYdJ.js";
import "./_basePickBy-f749536a-BkQsym14.js";
import "./clone-8a8d8292-tyjQLPbI.js";
import { u as Yy } from "./mermaid-parser.core-ecfcb38d-Co5SNHNR.js";
import { t as m$1 } from "./chunk-4BX2VUAB-df729ba8-1CisAdY-.js";
import { t as d } from "./chunk-QN33PNHL-d51d5666-A9hOYyX2.js";
import { r as nn } from "./defaultLocale-2db4a961-D4e7yott.js";
import "./init-f9637058-mGOscHBv.js";
import { t as h } from "./ordinal-980380c7-2fIs9QWo.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
function Le(t) {
	var a = 0, r = t.children, n = r && r.length;
	if (!n) a = 1;
	else for (; --n >= 0;) a += r[n].value;
	t.value = a;
}
function $e() {
	return this.eachAfter(Le);
}
function ke(t, a) {
	let r = -1;
	for (const n of this) t.call(a, n, ++r, this);
	return this;
}
function Fe(t, a) {
	for (var r = this, n = [r], s, o, p = -1; r = n.pop();) if (t.call(a, r, ++p, this), s = r.children) for (o = s.length - 1; o >= 0; --o) n.push(s[o]);
	return this;
}
function Ae(t, a) {
	for (var r = this, n = [r], s = [], o, p, d$1, m$2 = -1; r = n.pop();) if (s.push(r), o = r.children) for (p = 0, d$1 = o.length; p < d$1; ++p) n.push(o[p]);
	for (; r = s.pop();) t.call(a, r, ++m$2, this);
	return this;
}
function Ne(t, a) {
	let r = -1;
	for (const n of this) if (t.call(a, n, ++r, this)) return n;
}
function Me(t) {
	return this.eachAfter(function(a) {
		for (var r = +t(a.data) || 0, n = a.children, s = n && n.length; --s >= 0;) r += n[s].value;
		a.value = r;
	});
}
function _e(t) {
	return this.eachBefore(function(a) {
		a.children && a.children.sort(t);
	});
}
function ze(t) {
	for (var a = this, r = De(a, t), n = [a]; a !== r;) a = a.parent, n.push(a);
	for (var s = n.length; t !== r;) n.splice(s, 0, t), t = t.parent;
	return n;
}
function De(t, a) {
	if (t === a) return t;
	var r = t.ancestors(), n = a.ancestors(), s = null;
	for (t = r.pop(), a = n.pop(); t === a;) s = t, t = r.pop(), a = n.pop();
	return s;
}
function Ve() {
	for (var t = this, a = [t]; t = t.parent;) a.push(t);
	return a;
}
function Pe() {
	return Array.from(this);
}
function Be() {
	var t = [];
	return this.eachBefore(function(a) {
		a.children || t.push(a);
	}), t;
}
function Ee() {
	var t = this, a = [];
	return t.each(function(r) {
		r !== t && a.push({
			source: r.parent,
			target: r
		});
	}), a;
}
function* Re() {
	var t = this, a, r = [t], n, s, o;
	do
		for (a = r.reverse(), r = []; t = a.pop();) if (yield t, n = t.children) for (s = 0, o = n.length; s < o; ++s) r.push(n[s]);
	while (r.length);
}
function Q(t, a) {
	t instanceof Map ? (t = [void 0, t], a === void 0 && (a = Ie)) : a === void 0 && (a = He);
	for (var r = new U(t), n, s = [r], o, p, d$1, m$2; n = s.pop();) if ((p = a(n.data)) && (m$2 = (p = Array.from(p)).length)) for (n.children = p, d$1 = m$2 - 1; d$1 >= 0; --d$1) s.push(o = p[d$1] = new U(p[d$1])), o.parent = n, o.depth = n.depth + 1;
	return r.eachBefore(Ge);
}
function We() {
	return Q(this).eachBefore(Oe);
}
function He(t) {
	return t.children;
}
function Ie(t) {
	return Array.isArray(t) ? t[1] : null;
}
function Oe(t) {
	t.data.value !== void 0 && (t.value = t.data.value), t.data = t.data.data;
}
function Ge(t) {
	var a = 0;
	do
		t.height = a;
	while ((t = t.parent) && t.height < ++a);
}
function U(t) {
	this.data = t, this.depth = this.height = 0, this.parent = null;
}
U.prototype = Q.prototype = {
	constructor: U,
	count: $e,
	each: ke,
	eachAfter: Ae,
	eachBefore: Fe,
	find: Ne,
	sum: Me,
	sort: _e,
	path: ze,
	ancestors: Ve,
	descendants: Pe,
	leaves: Be,
	links: Ee,
	copy: We,
	[Symbol.iterator]: Re
};
function je(t) {
	if (typeof t != "function") throw new Error();
	return t;
}
function O() {
	return 0;
}
function G(t) {
	return function() {
		return t;
	};
}
function qe(t) {
	t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
}
function Xe(t, a, r, n, s) {
	for (var o = t.children, p, d$1 = -1, m$2 = o.length, c = t.value && (n - a) / t.value; ++d$1 < m$2;) p = o[d$1], p.y0 = r, p.y1 = s, p.x0 = a, p.x1 = a += p.value * c;
}
function Ye(t, a, r, n, s) {
	for (var o = t.children, p, d$1 = -1, m$2 = o.length, c = t.value && (s - r) / t.value; ++d$1 < m$2;) p = o[d$1], p.x0 = a, p.x1 = n, p.y0 = r, p.y1 = r += p.value * c;
}
var Ue = (1 + Math.sqrt(5)) / 2;
function Ze(t, a, r, n, s, o) {
	for (var p = [], d$1 = a.children, m$2, c, h$1 = 0, b = 0, i = d$1.length, x, S, v = a.value, u, g, M, A, D, E, _; h$1 < i;) {
		x = s - r, S = o - n;
		do
			u = d$1[b++].value;
		while (!u && b < i);
		for (g = M = u, E = Math.max(S / x, x / S) / (v * t), _ = u * u * E, D = Math.max(M / _, _ / g); b < i; ++b) {
			if (u += c = d$1[b].value, c < g && (g = c), c > M && (M = c), _ = u * u * E, A = Math.max(M / _, _ / g), A > D) {
				u -= c;
				break;
			}
			D = A;
		}
		p.push(m$2 = {
			value: u,
			dice: x < S,
			children: d$1.slice(h$1, b)
		}), m$2.dice ? Xe(m$2, r, n, s, v ? n += S * u / v : o) : Ye(m$2, r, n, v ? r += x * u / v : s, o), v -= u, h$1 = b;
	}
	return p;
}
var Je = function t(a) {
	function r(n, s, o, p, d$1) {
		Ze(a, n, s, o, p, d$1);
	}
	return r.ratio = function(n) {
		return t((n = +n) > 1 ? n : 1);
	}, r;
}(Ue);
function Ke() {
	var t = Je, a = !1, r = 1, n = 1, s = [0], o = O, p = O, d$1 = O, m$2 = O, c = O;
	function h$1(i) {
		return i.x0 = i.y0 = 0, i.x1 = r, i.y1 = n, i.eachBefore(b), s = [0], a && i.eachBefore(qe), i;
	}
	function b(i) {
		var x = s[i.depth], S = i.x0 + x, v = i.y0 + x, u = i.x1 - x, g = i.y1 - x;
		u < S && (S = u = (S + u) / 2), g < v && (v = g = (v + g) / 2), i.x0 = S, i.y0 = v, i.x1 = u, i.y1 = g, i.children && (x = s[i.depth + 1] = o(i) / 2, S += c(i) - x, v += p(i) - x, u -= d$1(i) - x, g -= m$2(i) - x, u < S && (S = u = (S + u) / 2), g < v && (v = g = (v + g) / 2), t(i, S, v, u, g));
	}
	return h$1.round = function(i) {
		return arguments.length ? (a = !!i, h$1) : a;
	}, h$1.size = function(i) {
		return arguments.length ? (r = +i[0], n = +i[1], h$1) : [r, n];
	}, h$1.tile = function(i) {
		return arguments.length ? (t = je(i), h$1) : t;
	}, h$1.padding = function(i) {
		return arguments.length ? h$1.paddingInner(i).paddingOuter(i) : h$1.paddingInner();
	}, h$1.paddingInner = function(i) {
		return arguments.length ? (o = typeof i == "function" ? i : G(+i), h$1) : o;
	}, h$1.paddingOuter = function(i) {
		return arguments.length ? h$1.paddingTop(i).paddingRight(i).paddingBottom(i).paddingLeft(i) : h$1.paddingTop();
	}, h$1.paddingTop = function(i) {
		return arguments.length ? (p = typeof i == "function" ? i : G(+i), h$1) : p;
	}, h$1.paddingRight = function(i) {
		return arguments.length ? (d$1 = typeof i == "function" ? i : G(+i), h$1) : d$1;
	}, h$1.paddingBottom = function(i) {
		return arguments.length ? (m$2 = typeof i == "function" ? i : G(+i), h$1) : m$2;
	}, h$1.paddingLeft = function(i) {
		return arguments.length ? (c = typeof i == "function" ? i : G(+i), h$1) : c;
	}, h$1;
}
var q, ne = (q = class {
	constructor() {
		this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = b5, this.getAccTitle = x5, this.setDiagramTitle = w5, this.getDiagramTitle = _5, this.getAccDescription = k5, this.setAccDescription = y5;
	}
	getNodes() {
		return this.nodes;
	}
	getConfig() {
		const a = Mf, r = Xt();
		return lu({
			...a.treemap,
			...r.treemap ?? {}
		});
	}
	addNode(a, r) {
		this.nodes.push(a), this.levels.set(a, r), r === 0 && (this.outerNodes.push(a), this.root ?? (this.root = a));
	}
	getRoot() {
		return {
			name: "",
			children: this.outerNodes
		};
	}
	addClass(a, r) {
		const n = this.classes.get(a) ?? {
			id: a,
			styles: [],
			textStyles: []
		}, s = r.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
		s && s.forEach((o) => {
			mm(o) && (n != null && n.textStyles ? n.textStyles.push(o) : n.textStyles = [o]), n != null && n.styles ? n.styles.push(o) : n.styles = [o];
		}), this.classes.set(a, n);
	}
	getClasses() {
		return this.classes;
	}
	getStylesForClass(a) {
		var r;
		return ((r = this.classes.get(a)) == null ? void 0 : r.styles) ?? [];
	}
	clear() {
		m5(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
	}
}, m(q, "TreeMapDB"), q);
function re(t) {
	if (!t.length) return [];
	const a = [], r = [];
	return t.forEach((n) => {
		const s = {
			name: n.name,
			children: n.type === "Leaf" ? void 0 : []
		};
		for (s.classSelector = n == null ? void 0 : n.classSelector, n != null && n.cssCompiledStyles && (s.cssCompiledStyles = [n.cssCompiledStyles]), n.type === "Leaf" && n.value !== void 0 && (s.value = n.value); r.length > 0 && r[r.length - 1].level >= n.level;) r.pop();
		if (r.length === 0) a.push(s);
		else {
			const o = r[r.length - 1].node;
			o.children ? o.children.push(s) : o.children = [s];
		}
		n.type !== "Leaf" && r.push({
			node: s,
			level: n.level
		});
	}), a;
}
m(re, "buildHierarchy");
var Qe = /* @__PURE__ */ m((t, a) => {
	m$1(t, a);
	const r = [];
	for (const o of t.TreemapRows ?? []) o.$type === "ClassDefStatement" && a.addClass(o.className ?? "", o.styleText ?? "");
	for (const o of t.TreemapRows ?? []) {
		const p = o.item;
		if (!p) continue;
		const d$1 = o.indent ? parseInt(o.indent) : 0, m$2 = et(p), c = p.classSelector ? a.getStylesForClass(p.classSelector) : [], h$1 = c.length > 0 ? c.join(";") : void 0, b = {
			level: d$1,
			name: m$2,
			type: p.$type,
			value: p.value,
			classSelector: p.classSelector,
			cssCompiledStyles: h$1
		};
		r.push(b);
	}
	const n = re(r), s = /* @__PURE__ */ m((o, p) => {
		for (const d$1 of o) a.addNode(d$1, p), d$1.children && d$1.children.length > 0 && s(d$1.children, p + 1);
	}, "addNodesRecursively");
	s(n, 0);
}, "populate"), et = /* @__PURE__ */ m((t) => t.name ? String(t.name) : "", "getItemName"), ie = {
	parser: { yy: void 0 },
	parse: /* @__PURE__ */ m(async (t) => {
		var a;
		try {
			const n = await Yy("treemap", t);
			R.debug("Treemap AST:", n);
			const s = (a = ie.parser) == null ? void 0 : a.yy;
			if (!(s instanceof ne)) throw new Error("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
			Qe(n, s);
		} catch (r) {
			throw R.error("Error parsing treemap:", r), r;
		}
	}, "parse")
}, tt = 10, B = 10, j = 25, rt = {
	draw: /* @__PURE__ */ m((t, a, r, n) => {
		const s = n.db, o = s.getConfig(), p = o.padding ?? tt, d$1 = s.getDiagramTitle(), m$2 = s.getRoot(), { themeVariables: c } = Xt();
		if (!m$2) return;
		const h$1 = d$1 ? 30 : 0, b = iT(a), i = o.nodeWidth ? o.nodeWidth * B : 960, x = o.nodeHeight ? o.nodeHeight * B : 500, S = i, v = x + h$1;
		b.attr("viewBox", `0 0 ${S} ${v}`), If(b, v, S, o.useMaxWidth);
		let u;
		try {
			const e = o.valueFormat || ",";
			if (e === "$0,0") u = /* @__PURE__ */ m((l) => "$" + nn(",")(l), "valueFormat");
			else if (e.startsWith("$") && e.includes(",")) {
				const l = /\.\d+/.exec(e), f = l ? l[0] : "";
				u = /* @__PURE__ */ m((T) => "$" + nn("," + f)(T), "valueFormat");
			} else if (e.startsWith("$")) {
				const l = e.substring(1);
				u = /* @__PURE__ */ m((f) => "$" + nn(l || "")(f), "valueFormat");
			} else u = nn(e);
		} catch (e) {
			R.error("Error creating format function:", e), u = nn(",");
		}
		const g = h().range([
			"transparent",
			c.cScale0,
			c.cScale1,
			c.cScale2,
			c.cScale3,
			c.cScale4,
			c.cScale5,
			c.cScale6,
			c.cScale7,
			c.cScale8,
			c.cScale9,
			c.cScale10,
			c.cScale11
		]), M = h().range([
			"transparent",
			c.cScalePeer0,
			c.cScalePeer1,
			c.cScalePeer2,
			c.cScalePeer3,
			c.cScalePeer4,
			c.cScalePeer5,
			c.cScalePeer6,
			c.cScalePeer7,
			c.cScalePeer8,
			c.cScalePeer9,
			c.cScalePeer10,
			c.cScalePeer11
		]), A = h().range([
			c.cScaleLabel0,
			c.cScaleLabel1,
			c.cScaleLabel2,
			c.cScaleLabel3,
			c.cScaleLabel4,
			c.cScaleLabel5,
			c.cScaleLabel6,
			c.cScaleLabel7,
			c.cScaleLabel8,
			c.cScaleLabel9,
			c.cScaleLabel10,
			c.cScaleLabel11
		]);
		d$1 && b.append("text").attr("x", S / 2).attr("y", h$1 / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(d$1);
		const D = b.append("g").attr("transform", `translate(0, ${h$1})`).attr("class", "treemapContainer"), E = Q(m$2).sum((e) => e.value ?? 0).sort((e, l) => (l.value ?? 0) - (e.value ?? 0)), ee = Ke().size([i, x]).paddingTop((e) => e.children && e.children.length > 0 ? j + B : 0).paddingInner(p).paddingLeft((e) => e.children && e.children.length > 0 ? B : 0).paddingRight((e) => e.children && e.children.length > 0 ? B : 0).paddingBottom((e) => e.children && e.children.length > 0 ? B : 0).round(!0)(E), oe = ee.descendants().filter((e) => e.children && e.children.length > 0), R$1 = D.selectAll(".treemapSection").data(oe).enter().append("g").attr("class", "treemapSection").attr("transform", (e) => `translate(${e.x0},${e.y0})`);
		R$1.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", j).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", .6).attr("stroke-width", .6).attr("style", (e) => e.depth === 0 ? "display: none;" : ""), R$1.append("clipPath").attr("id", (e, l) => `clip-section-${a}-${l}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 12)).attr("height", j), R$1.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", (e, l) => `treemapSection section${l}`).attr("fill", (e) => g(e.data.name)).attr("fill-opacity", .6).attr("stroke", (e) => M(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", .4).attr("style", (e) => {
			if (e.depth === 0) return "display: none;";
			const l = X({ cssCompiledStyles: e.data.cssCompiledStyles });
			return l.nodeStyles + ";" + l.borderStyles.join(";");
		}), R$1.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", j / 2).attr("dominant-baseline", "middle").text((e) => e.depth === 0 ? "" : e.data.name).attr("font-weight", "bold").attr("style", (e) => {
			if (e.depth === 0) return "display: none;";
			return "dominant-baseline: middle; font-size: 12px; fill:" + A(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + X({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:");
		}).each(function(e) {
			if (e.depth === 0) return;
			const l = gt(this), f = e.data.name;
			l.text(f);
			const T = e.x1 - e.x0, $ = 6;
			let k;
			if (o.showValues !== !1 && e.value) k = T - 10 - 30 - 10 - $;
			else k = T - $ - 6;
			const F = Math.max(15, k), y = l.node();
			if (y.getComputedTextLength() > F) {
				const w = "...";
				let L = f;
				for (; L.length > 0;) {
					if (L = f.substring(0, L.length - 1), L.length === 0) {
						l.text(w), y.getComputedTextLength() > F && l.text("");
						break;
					}
					if (l.text(L + w), y.getComputedTextLength() <= F) break;
				}
			}
		}), o.showValues !== !1 && R$1.append("text").attr("class", "treemapSectionValue").attr("x", (e) => e.x1 - e.x0 - 10).attr("y", j / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((e) => e.value ? u(e.value) : "").attr("font-style", "italic").attr("style", (e) => {
			if (e.depth === 0) return "display: none;";
			return "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + A(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + X({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:");
		});
		const le = ee.leaves(), X$1 = D.selectAll(".treemapLeafGroup").data(le).enter().append("g").attr("class", (e, l) => `treemapNode treemapLeafGroup leaf${l}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", (e) => `translate(${e.x0},${e.y0})`);
		X$1.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", (e) => e.parent ? g(e.parent.data.name) : g(e.data.name)).attr("style", (e) => X({ cssCompiledStyles: e.data.cssCompiledStyles }).nodeStyles).attr("fill-opacity", .3).attr("stroke", (e) => e.parent ? g(e.parent.data.name) : g(e.data.name)).attr("stroke-width", 3), X$1.append("clipPath").attr("id", (e, l) => `clip-${a}-${l}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 4)).attr("height", (e) => Math.max(0, e.y1 - e.y0 - 4)), X$1.append("text").attr("class", "treemapLabel").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", (e) => (e.y1 - e.y0) / 2).attr("style", (e) => {
			return "text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:" + A(e.data.name) + ";" + X({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:");
		}).attr("clip-path", (e, l) => `url(#clip-${a}-${l})`).text((e) => e.data.name).each(function(e) {
			const l = gt(this), f = e.x1 - e.x0, T = e.y1 - e.y0, $ = l.node(), k = 4, V = f - 2 * k, F = T - 2 * k;
			if (V < 10 || F < 10) {
				l.style("display", "none");
				return;
			}
			let y = parseInt(l.style("font-size"), 10);
			const z = 8, w = 28, L = .6, N = 6, W = 2;
			for (; $.getComputedTextLength() > V && y > z;) y--, l.style("font-size", `${y}px`);
			let H = Math.max(N, Math.min(w, Math.round(y * L))), Z = y + W + H;
			for (; Z > F && y > z && (y--, H = Math.max(N, Math.min(w, Math.round(y * L))), !(H < N && y === z));) l.style("font-size", `${y}px`), Z = y + W + H;
			l.style("font-size", `${y}px`), ($.getComputedTextLength() > V || y < z || F < y) && l.style("display", "none");
		}), o.showValues !== !1 && X$1.append("text").attr("class", "treemapValue").attr("x", (l) => (l.x1 - l.x0) / 2).attr("y", function(l) {
			return (l.y1 - l.y0) / 2;
		}).attr("style", (l) => {
			return "text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:" + A(l.data.name) + ";" + X({ cssCompiledStyles: l.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:");
		}).attr("clip-path", (l, f) => `url(#clip-${a}-${f})`).text((l) => l.value ? u(l.value) : "").each(function(l) {
			const f = gt(this), T = this.parentNode;
			if (!T) {
				f.style("display", "none");
				return;
			}
			const $ = gt(T).select(".treemapLabel");
			if ($.empty() || $.style("display") === "none") {
				f.style("display", "none");
				return;
			}
			const k = parseFloat($.style("font-size")), V = 28, F = .6, y = 6, z = 2, w = Math.max(y, Math.min(V, Math.round(k * F)));
			f.style("font-size", `${w}px`);
			const N = (l.y1 - l.y0) / 2 + k / 2 + z;
			f.attr("y", N);
			const W = l.x1 - l.x0, ce = l.y1 - l.y0 - 4, pe = W - 8;
			f.node().getComputedTextLength() > pe || N + w > ce || w < y ? f.style("display", "none") : f.style("display", null);
		});
		d(b, o.diagramPadding ?? 8, "flowchart", (o == null ? void 0 : o.useMaxWidth) || !1);
	}, "draw"),
	getClasses: /* @__PURE__ */ m(function(t, a) {
		return a.db.getClasses();
	}, "getClasses")
}, it = {
	sectionStrokeColor: "black",
	sectionStrokeWidth: "1",
	sectionFillColor: "#efefef",
	leafStrokeColor: "black",
	leafStrokeWidth: "1",
	leafFillColor: "#efefef",
	labelColor: "black",
	labelFontSize: "12px",
	valueFontSize: "10px",
	valueColor: "black",
	titleColor: "black",
	titleFontSize: "14px"
}, Wa = {
	parser: ie,
	get db() {
		return new ne();
	},
	renderer: rt,
	styles: /* @__PURE__ */ m(({ treemap: t } = {}) => {
		const a = lu(it, t);
		return `
  .treemapNode.section {
    stroke: ${a.sectionStrokeColor};
    stroke-width: ${a.sectionStrokeWidth};
    fill: ${a.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${a.leafStrokeColor};
    stroke-width: ${a.leafStrokeWidth};
    fill: ${a.leafFillColor};
  }
  .treemapLabel {
    fill: ${a.labelColor};
    font-size: ${a.labelFontSize};
  }
  .treemapValue {
    fill: ${a.valueColor};
    font-size: ${a.valueFontSize};
  }
  .treemapTitle {
    fill: ${a.titleColor};
    font-size: ${a.titleFontSize};
  }
  `;
	}, "getStyles")
};
export { Wa as diagram };
