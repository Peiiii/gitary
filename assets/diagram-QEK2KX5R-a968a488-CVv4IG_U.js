import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { N as require_jsx_runtime, P as require_react, w as require_react_dom } from "./chakra-ui-NHV_-bGL.js";
import { k as require_lodash } from "./react-utils-DE1lHEcz.js";
import { t as require_client } from "./vendor-BKa3f7Q_.js";
import "./common-utils-BCFfNPpf.js";
import "./react-markdown-14W_w1u6.js";
import "./monaco-De2c8opW.js";
import "./remark-gfm-BxiTB6j-.js";
import { $n as require_markdown_it_task_lists, $t as iT, Ln as w5, Ot as b5, Qn as require_pinyin, R as Mf, Vn as x5, W as P6, Wn as y5, cn as lu, dn as m5, er as require_markdown_it_multimd_table, et as R, gt as Xt, nn as k5, un as m, wi as require_classnames, xt as _5 } from "./app-CHqOxvpb.js";
import "./_baseUniq-214847ec-DBvBJYdJ.js";
import "./_basePickBy-f749536a-BkQsym14.js";
import "./clone-8a8d8292-tyjQLPbI.js";
import { u as Yy } from "./mermaid-parser.core-ecfcb38d-Co5SNHNR.js";
import { t as m$1 } from "./chunk-4BX2VUAB-df729ba8-1CisAdY-.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
var h = {
	showLegend: !0,
	ticks: 5,
	max: null,
	min: 0,
	graticule: "circle"
}, w = {
	axes: [],
	curves: [],
	options: h
}, g = structuredClone(w), B = Mf.radar, j = /* @__PURE__ */ m(() => lu({
	...B,
	...Xt().radar
}), "getConfig"), b = /* @__PURE__ */ m(() => g.axes, "getAxes"), K = /* @__PURE__ */ m(() => g.curves, "getCurves"), N = /* @__PURE__ */ m(() => g.options, "getOptions"), U = /* @__PURE__ */ m((e) => {
	g.axes = e.map((t) => ({
		name: t.name,
		label: t.label ?? t.name
	}));
}, "setAxes"), X = /* @__PURE__ */ m((e) => {
	g.curves = e.map((t) => ({
		name: t.name,
		label: t.label ?? t.name,
		entries: Y(t.entries)
	}));
}, "setCurves"), Y = /* @__PURE__ */ m((e) => {
	if (e[0].axis == null) return e.map((r) => r.value);
	const t = b();
	if (t.length === 0) throw new Error("Axes must be populated before curves for reference entries");
	return t.map((r) => {
		const a = e.find((o) => {
			var s;
			return ((s = o.axis) == null ? void 0 : s.$refText) === r.name;
		});
		if (a === void 0) throw new Error("Missing entry for axis " + r.label);
		return a.value;
	});
}, "computeCurveEntries"), $ = {
	getAxes: b,
	getCurves: K,
	getOptions: N,
	setAxes: U,
	setCurves: X,
	setOptions: /* @__PURE__ */ m((e) => {
		var r, a, o, s, n;
		const t = e.reduce((i, l) => (i[l.name] = l, i), {});
		g.options = {
			showLegend: ((r = t.showLegend) == null ? void 0 : r.value) ?? h.showLegend,
			ticks: ((a = t.ticks) == null ? void 0 : a.value) ?? h.ticks,
			max: ((o = t.max) == null ? void 0 : o.value) ?? h.max,
			min: ((s = t.min) == null ? void 0 : s.value) ?? h.min,
			graticule: ((n = t.graticule) == null ? void 0 : n.value) ?? h.graticule
		};
	}, "setOptions"),
	getConfig: j,
	clear: /* @__PURE__ */ m(() => {
		m5(), g = structuredClone(w);
	}, "clear"),
	setAccTitle: b5,
	getAccTitle: x5,
	setDiagramTitle: w5,
	getDiagramTitle: _5,
	getAccDescription: k5,
	setAccDescription: y5
}, J = /* @__PURE__ */ m((e) => {
	m$1(e, $);
	const { axes: t, curves: r, options: a } = e;
	$.setAxes(t), $.setCurves(r), $.setOptions(a);
}, "populate"), Q = { parse: /* @__PURE__ */ m(async (e) => {
	const t = await Yy("radar", e);
	R.debug(t), J(t);
}, "parse") }, tt = /* @__PURE__ */ m((e, t, r, a) => {
	const o = a.db, s = o.getAxes(), n = o.getCurves(), i = o.getOptions(), l = o.getConfig(), m$2 = o.getDiagramTitle(), c = rt(iT(t), l), u = i.max ?? Math.max(...n.map((f) => Math.max(...f.entries))), x = i.min, v = Math.min(l.width, l.height) / 2;
	et(c, s, v, i.ticks, i.graticule), at(c, s, v, l), M(c, s, n, x, u, i.graticule, l), T(c, n, i.showLegend, l), c.append("text").attr("class", "radarTitle").text(m$2).attr("x", 0).attr("y", -l.height / 2 - l.marginTop);
}, "draw"), rt = /* @__PURE__ */ m((e, t) => {
	const r = t.width + t.marginLeft + t.marginRight, a = t.height + t.marginTop + t.marginBottom, o = {
		x: t.marginLeft + t.width / 2,
		y: t.marginTop + t.height / 2
	};
	return e.attr("viewbox", `0 0 ${r} ${a}`).attr("width", r).attr("height", a), e.append("g").attr("transform", `translate(${o.x}, ${o.y})`);
}, "drawFrame"), et = /* @__PURE__ */ m((e, t, r, a, o) => {
	if (o === "circle") for (let s = 0; s < a; s++) {
		const n = r * (s + 1) / a;
		e.append("circle").attr("r", n).attr("class", "radarGraticule");
	}
	else if (o === "polygon") {
		const s = t.length;
		for (let n = 0; n < a; n++) {
			const i = r * (n + 1) / a, l = t.map((m$2, d) => {
				const c = 2 * d * Math.PI / s - Math.PI / 2;
				return `${i * Math.cos(c)},${i * Math.sin(c)}`;
			}).join(" ");
			e.append("polygon").attr("points", l).attr("class", "radarGraticule");
		}
	}
}, "drawGraticule"), at = /* @__PURE__ */ m((e, t, r, a) => {
	const o = t.length;
	for (let s = 0; s < o; s++) {
		const n = t[s].label, i = 2 * s * Math.PI / o - Math.PI / 2;
		e.append("line").attr("x1", 0).attr("y1", 0).attr("x2", r * a.axisScaleFactor * Math.cos(i)).attr("y2", r * a.axisScaleFactor * Math.sin(i)).attr("class", "radarAxisLine"), e.append("text").text(n).attr("x", r * a.axisLabelFactor * Math.cos(i)).attr("y", r * a.axisLabelFactor * Math.sin(i)).attr("class", "radarAxisLabel");
	}
}, "drawAxes");
function M(e, t, r, a, o, s, n) {
	const i = t.length, l = Math.min(n.width, n.height) / 2;
	r.forEach((m$2, d) => {
		if (m$2.entries.length !== i) return;
		const c = m$2.entries.map((u, x) => {
			const v = 2 * Math.PI * x / i - Math.PI / 2, f = A(u, a, o, l);
			return {
				x: f * Math.cos(v),
				y: f * Math.sin(v)
			};
		});
		s === "circle" ? e.append("path").attr("d", L(c, n.curveTension)).attr("class", `radarCurve-${d}`) : s === "polygon" && e.append("polygon").attr("points", c.map((u) => `${u.x},${u.y}`).join(" ")).attr("class", `radarCurve-${d}`);
	});
}
m(M, "drawCurves");
function A(e, t, r, a) {
	return a * (Math.min(Math.max(e, t), r) - t) / (r - t);
}
m(A, "relativeRadius");
function L(e, t) {
	const r = e.length;
	let a = `M${e[0].x},${e[0].y}`;
	for (let o = 0; o < r; o++) {
		const s = e[(o - 1 + r) % r], n = e[o], i = e[(o + 1) % r], l = e[(o + 2) % r], m$2 = {
			x: n.x + (i.x - s.x) * t,
			y: n.y + (i.y - s.y) * t
		}, d = {
			x: i.x - (l.x - n.x) * t,
			y: i.y - (l.y - n.y) * t
		};
		a += ` C${m$2.x},${m$2.y} ${d.x},${d.y} ${i.x},${i.y}`;
	}
	return `${a} Z`;
}
m(L, "closedRoundCurve");
function T(e, t, r, a) {
	if (!r) return;
	const o = (a.width / 2 + a.marginRight) * 3 / 4, s = -(a.height / 2 + a.marginTop) * 3 / 4, n = 20;
	t.forEach((i, l) => {
		const m$2 = e.append("g").attr("transform", `translate(${o}, ${s + l * n})`);
		m$2.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${l}`), m$2.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(i.label);
	});
}
m(T, "drawLegend");
var ot = { draw: tt }, it = /* @__PURE__ */ m((e, t) => {
	let r = "";
	for (let a = 0; a < e.THEME_COLOR_LIMIT; a++) {
		const o = e[`cScale${a}`];
		r += `
		.radarCurve-${a} {
			color: ${o};
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${a} {
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
		}
		`;
	}
	return r;
}, "genIndexStyles"), st = /* @__PURE__ */ m((e) => {
	const a = lu(P6(), Xt().themeVariables);
	return {
		themeVariables: a,
		radarOptions: lu(a.radar, e)
	};
}, "buildRadarStyleOptions"), Dr = {
	parser: Q,
	db: $,
	renderer: ot,
	styles: /* @__PURE__ */ m(({ radar: e } = {}) => {
		const { themeVariables: t, radarOptions: r } = st(e);
		return `
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${r.axisColor};
		stroke-width: ${r.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${r.axisLabelFontSize}px;
		color: ${r.axisColor};
	}
	.radarGraticule {
		fill: ${r.graticuleColor};
		fill-opacity: ${r.graticuleOpacity};
		stroke: ${r.graticuleColor};
		stroke-width: ${r.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${r.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${it(t, r)}
	`;
	}, "styles")
};
export { Dr as diagram };
