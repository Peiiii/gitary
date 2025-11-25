import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { N as require_jsx_runtime, P as require_react, w as require_react_dom } from "./chakra-ui-NHV_-bGL.js";
import { k as require_lodash } from "./react-utils-DE1lHEcz.js";
import { t as require_client } from "./vendor-BKa3f7Q_.js";
import "./common-utils-BCFfNPpf.js";
import "./monaco-CcclqKWN.js";
import "./react-markdown-CiPHk2vS.js";
import "./remark-gfm-DwVXGmow.js";
import { $n as require_markdown_it_task_lists, Gn as yt, Qn as require_pinyin, Xn as zi, bn as qa, er as require_markdown_it_multimd_table, et as R, ft as V8, mn as n5, qt as gt, t as $e, un as m, w as If, wi as require_classnames } from "./app-BOej-ymv.js";
import "./_baseUniq-214847ec-mD4wcw89.js";
import "./_basePickBy-f749536a-DSnWYoR6.js";
import { t as L } from "./graph-355e244d-BxLvad5c.js";
import "./chunk-55IACEB6-b2733bca-_fhoWAnE.js";
import "./chunk-QN33PNHL-d51d5666-MYAQbxt5.js";
import { t as ht } from "./layout-7ea0beed-D6emYQt7.js";
import { n as Me, r as Ue, t as Be } from "./chunk-DI55MBZ5-0b913128-CgOCikoo.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
var X = /* @__PURE__ */ m((e) => e.append("circle").attr("class", "start-state").attr("r", yt().state.sizeUnit).attr("cx", yt().state.padding + yt().state.sizeUnit).attr("cy", yt().state.padding + yt().state.sizeUnit), "drawStartState"), D = /* @__PURE__ */ m((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", yt().state.textHeight).attr("class", "divider").attr("x2", yt().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider"), Y = /* @__PURE__ */ m((e, a) => {
	const s = e.append("text").attr("x", 2 * yt().state.padding).attr("y", yt().state.textHeight + 2 * yt().state.padding).attr("font-size", yt().state.fontSize).attr("class", "state-title").text(a.id), p = s.node().getBBox();
	return e.insert("rect", ":first-child").attr("x", yt().state.padding).attr("y", yt().state.padding).attr("width", p.width + 2 * yt().state.padding).attr("height", p.height + 2 * yt().state.padding).attr("rx", yt().state.radius), s;
}, "drawSimpleState"), I = /* @__PURE__ */ m((e, a) => {
	const s = /* @__PURE__ */ m(function(c, B, w) {
		const E = c.append("tspan").attr("x", 2 * yt().state.padding).text(B);
		w || E.attr("dy", yt().state.textHeight);
	}, "addTspan"), o = e.append("text").attr("x", 2 * yt().state.padding).attr("y", yt().state.textHeight + 1.3 * yt().state.padding).attr("font-size", yt().state.fontSize).attr("class", "state-title").text(a.descriptions[0]).node().getBBox(), g = o.height, m$1 = e.append("text").attr("x", yt().state.padding).attr("y", g + yt().state.padding * .4 + yt().state.dividerMargin + yt().state.textHeight).attr("class", "state-description");
	let i = !0, n = !0;
	a.descriptions.forEach(function(c) {
		i || (s(m$1, c, n), n = !1), i = !1;
	});
	const y = e.append("line").attr("x1", yt().state.padding).attr("y1", yt().state.padding + g + yt().state.dividerMargin / 2).attr("y2", yt().state.padding + g + yt().state.dividerMargin / 2).attr("class", "descr-divider"), h = m$1.node().getBBox(), d = Math.max(h.width, o.width);
	return y.attr("x2", d + 3 * yt().state.padding), e.insert("rect", ":first-child").attr("x", yt().state.padding).attr("y", yt().state.padding).attr("width", d + 2 * yt().state.padding).attr("height", h.height + g + 2 * yt().state.padding).attr("rx", yt().state.radius), e;
}, "drawDescrState"), $ = /* @__PURE__ */ m((e, a, s) => {
	const p = yt().state.padding, o = 2 * yt().state.padding, g = e.node().getBBox(), m$1 = g.width, i = g.x, n = e.append("text").attr("x", 0).attr("y", yt().state.titleShift).attr("font-size", yt().state.fontSize).attr("class", "state-title").text(a.id), h = n.node().getBBox().width + o;
	let d = Math.max(h, m$1);
	d === m$1 && (d = d + o);
	let c;
	const B = e.node().getBBox();
	a.doc, c = i - p, h > m$1 && (c = (m$1 - d) / 2 + p), Math.abs(i - B.x) < p && h > m$1 && (c = i - (h - m$1) / 2);
	const w = 1 - yt().state.textHeight;
	return e.insert("rect", ":first-child").attr("x", c).attr("y", w).attr("class", s ? "alt-composit" : "composit").attr("width", d).attr("height", B.height + yt().state.textHeight + yt().state.titleShift + 1).attr("rx", "0"), n.attr("x", c + p), h <= m$1 && n.attr("x", i + (d - o) / 2 - h / 2 + p), e.insert("rect", ":first-child").attr("x", c).attr("y", yt().state.titleShift - yt().state.textHeight - yt().state.padding).attr("width", d).attr("height", yt().state.textHeight * 3).attr("rx", yt().state.radius), e.insert("rect", ":first-child").attr("x", c).attr("y", yt().state.titleShift - yt().state.textHeight - yt().state.padding).attr("width", d).attr("height", B.height + 3 + 2 * yt().state.textHeight).attr("rx", yt().state.radius), e;
}, "addTitleAndBox"), j = /* @__PURE__ */ m((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", yt().state.sizeUnit + yt().state.miniPadding).attr("cx", yt().state.padding + yt().state.sizeUnit + yt().state.miniPadding).attr("cy", yt().state.padding + yt().state.sizeUnit + yt().state.miniPadding), e.append("circle").attr("class", "end-state-inner").attr("r", yt().state.sizeUnit).attr("cx", yt().state.padding + yt().state.sizeUnit + 2).attr("cy", yt().state.padding + yt().state.sizeUnit + 2)), "drawEndState"), q = /* @__PURE__ */ m((e, a) => {
	let s = yt().state.forkWidth, p = yt().state.forkHeight;
	if (a.parentId) {
		let o = s;
		s = p, p = o;
	}
	return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", s).attr("height", p).attr("x", yt().state.padding).attr("y", yt().state.padding);
}, "drawForkJoinState"), Z = /* @__PURE__ */ m((e, a, s, p) => {
	let o = 0;
	const g = p.append("text");
	g.style("text-anchor", "start"), g.attr("class", "noteText");
	let m$1 = e.replace(/\r\n/g, "<br/>");
	m$1 = m$1.replace(/\n/g, "<br/>");
	const i = m$1.split(zi.lineBreakRegex);
	let n = 1.25 * yt().state.noteMargin;
	for (const y of i) {
		const h = y.trim();
		if (h.length > 0) {
			const d = g.append("tspan");
			if (d.text(h), n === 0) {
				const c = d.node().getBBox();
				n += c.height;
			}
			o += n, d.attr("x", a + yt().state.noteMargin), d.attr("y", s + o + 1.25 * yt().state.noteMargin);
		}
	}
	return {
		textWidth: g.node().getBBox().width,
		textHeight: o
	};
}, "_drawLongText"), K = /* @__PURE__ */ m((e, a) => {
	a.attr("class", "state-note");
	const s = a.append("rect").attr("x", 0).attr("y", yt().state.padding), { textWidth: o, textHeight: g } = Z(e, 0, 0, a.append("g"));
	return s.attr("height", g + 2 * yt().state.noteMargin), s.attr("width", o + yt().state.noteMargin * 2), s;
}, "drawNote"), L$1 = /* @__PURE__ */ m(function(e, a) {
	const s = a.id, p = {
		id: s,
		label: a.id,
		width: 0,
		height: 0
	}, o = e.append("g").attr("id", s).attr("class", "stateGroup");
	a.type === "start" && X(o), a.type === "end" && j(o), (a.type === "fork" || a.type === "join") && q(o, a), a.type === "note" && K(a.note.text, o), a.type === "divider" && D(o), a.type === "default" && a.descriptions.length === 0 && Y(o, a), a.type === "default" && a.descriptions.length > 0 && I(o, a);
	const g = o.node().getBBox();
	return p.width = g.width + 2 * yt().state.padding, p.height = g.height + 2 * yt().state.padding, p;
}, "drawState"), R$1 = 0, Q = /* @__PURE__ */ m(function(e, a, s) {
	const p = /* @__PURE__ */ m(function(n) {
		switch (n) {
			case Me.relationType.AGGREGATION: return "aggregation";
			case Me.relationType.EXTENSION: return "extension";
			case Me.relationType.COMPOSITION: return "composition";
			case Me.relationType.DEPENDENCY: return "dependency";
		}
	}, "getRelationType");
	a.points = a.points.filter((n) => !Number.isNaN(n.y));
	const o = a.points, g = V8().x(function(n) {
		return n.x;
	}).y(function(n) {
		return n.y;
	}).curve(qa), m$1 = e.append("path").attr("d", g(o)).attr("id", "edge" + R$1).attr("class", "transition");
	let i = "";
	if (yt().state.arrowMarkerAbsolute && (i = n5(!0)), m$1.attr("marker-end", "url(" + i + "#" + p(Me.relationType.DEPENDENCY) + "End)"), s.title !== void 0) {
		const n = e.append("g").attr("class", "stateLabel"), { x: y, y: h } = $e.calcLabelPosition(a.points), d = zi.getRows(s.title);
		let c = 0;
		const B = [];
		let w = 0, E = 0;
		for (let x = 0; x <= d.length; x++) {
			const l = n.append("text").attr("text-anchor", "middle").text(d[x]).attr("x", y).attr("y", h + c), f = l.node().getBBox();
			w = Math.max(w, f.width), E = Math.min(E, f.x), R.info(f.x, y, h + c), c === 0 && (c = l.node().getBBox().height, R.info("Title height", c, h)), B.push(l);
		}
		let k = c * d.length;
		if (d.length > 1) {
			const x = (d.length - 1) * c * .5;
			B.forEach((l, f) => l.attr("y", h + f * c - x)), k = c * d.length;
		}
		const r = n.node().getBBox();
		n.insert("rect", ":first-child").attr("class", "box").attr("x", y - w / 2 - yt().state.padding / 2).attr("y", h - k / 2 - yt().state.padding / 2 - 3.5).attr("width", w + yt().state.padding).attr("height", k + yt().state.padding), R.info(r);
	}
	R$1++;
}, "drawEdge"), b, T = {}, V = /* @__PURE__ */ m(function() {}, "setConf"), tt = /* @__PURE__ */ m(function(e) {
	e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers"), et = /* @__PURE__ */ m(function(e, a, s, p) {
	b = yt().state;
	const o = yt().securityLevel;
	let g;
	o === "sandbox" && (g = gt("#i" + a));
	const m$1 = o === "sandbox" ? gt(g.nodes()[0].contentDocument.body) : gt("body"), i = o === "sandbox" ? g.nodes()[0].contentDocument : document;
	R.debug("Rendering diagram " + e);
	const n = m$1.select(`[id='${a}']`);
	tt(n);
	A(p.db.getRootDoc(), n, void 0, !1, m$1, i, p);
	const h = b.padding, d = n.node().getBBox(), c = d.width + h * 2, B = d.height + h * 2;
	If(n, B, c * 1.75, b.useMaxWidth), n.attr("viewBox", `${d.x - b.padding}  ${d.y - b.padding} ` + c + " " + B);
}, "draw"), it = /* @__PURE__ */ m((e) => e ? e.length * b.fontSizeFactor : 1, "getLabelWidth"), A = /* @__PURE__ */ m((e, a, s, p, o, g, m$1) => {
	const i = new L({
		compound: !0,
		multigraph: !0
	});
	let n, y = !0;
	for (n = 0; n < e.length; n++) if (e[n].stmt === "relation") {
		y = !1;
		break;
	}
	s ? i.setGraph({
		rankdir: "LR",
		multigraph: !0,
		compound: !0,
		ranker: "tight-tree",
		ranksep: y ? 1 : b.edgeLengthFactor,
		nodeSep: y ? 1 : 50,
		isMultiGraph: !0
	}) : i.setGraph({
		rankdir: "TB",
		multigraph: !0,
		compound: !0,
		ranksep: y ? 1 : b.edgeLengthFactor,
		nodeSep: y ? 1 : 50,
		ranker: "tight-tree",
		isMultiGraph: !0
	}), i.setDefaultEdgeLabel(function() {
		return {};
	});
	const h = m$1.db.getStates(), d = m$1.db.getRelations(), c = Object.keys(h);
	for (const r of c) {
		const x = h[r];
		s && (x.parentId = s);
		let l;
		if (x.doc) {
			let f = a.append("g").attr("id", x.id).attr("class", "stateGroup");
			l = A(x.doc, f, x.id, !p, o, g, m$1);
			{
				f = $(f, x, p);
				let v = f.node().getBBox();
				l.width = v.width, l.height = v.height + b.padding / 2, T[x.id] = { y: b.compositTitleSize };
			}
		} else l = L$1(a, x, i);
		if (x.note) {
			const v = L$1(a, {
				descriptions: [],
				id: x.id + "-note",
				note: x.note,
				type: "note"
			}, i);
			x.note.position === "left of" ? (i.setNode(l.id + "-note", v), i.setNode(l.id, l)) : (i.setNode(l.id, l), i.setNode(l.id + "-note", v)), i.setParent(l.id, l.id + "-group"), i.setParent(l.id + "-note", l.id + "-group");
		} else i.setNode(l.id, l);
	}
	R.debug("Count=", i.nodeCount(), i);
	let B = 0;
	d.forEach(function(r) {
		B++, R.debug("Setting edge", r), i.setEdge(r.id1, r.id2, {
			relation: r,
			width: it(r.title),
			height: b.labelHeight * zi.getRows(r.title).length,
			labelpos: "c"
		}, "id" + B);
	}), ht(i), R.debug("Graph after layout", i.nodes());
	const w = a.node();
	i.nodes().forEach(function(r) {
		r !== void 0 && i.node(r) !== void 0 ? (R.warn("Node " + r + ": " + JSON.stringify(i.node(r))), o.select("#" + w.id + " #" + r).attr("transform", "translate(" + (i.node(r).x - i.node(r).width / 2) + "," + (i.node(r).y + (T[r] ? T[r].y : 0) - i.node(r).height / 2) + " )"), o.select("#" + w.id + " #" + r).attr("data-x-shift", i.node(r).x - i.node(r).width / 2), g.querySelectorAll("#" + w.id + " #" + r + " .divider").forEach((l) => {
			const f = l.parentElement;
			let v = 0, M = 0;
			f && (f.parentElement && (v = f.parentElement.getBBox().width), M = parseInt(f.getAttribute("data-x-shift"), 10), Number.isNaN(M) && (M = 0)), l.setAttribute("x1", 0 - M + 8), l.setAttribute("x2", v - M - 8);
		})) : R.debug("No Node " + r + ": " + JSON.stringify(i.node(r)));
	});
	let E = w.getBBox();
	i.edges().forEach(function(r) {
		r !== void 0 && i.edge(r) !== void 0 && (R.debug("Edge " + r.v + " -> " + r.w + ": " + JSON.stringify(i.edge(r))), Q(a, i.edge(r), i.edge(r).relation));
	}), E = w.getBBox();
	const k = {
		id: s || "root",
		label: s || "root",
		width: 0,
		height: 0
	};
	return k.width = E.width + 2 * b.padding, k.height = E.height + 2 * b.padding, R.debug("Doc rendered", k, i), k;
}, "renderDoc"), Ae = {
	parser: Be,
	get db() {
		return new Me(1);
	},
	renderer: {
		setConf: V,
		draw: et
	},
	styles: Ue,
	init: /* @__PURE__ */ m((e) => {
		e.state || (e.state = {}), e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
	}, "init")
};
export { Ae as diagram };
