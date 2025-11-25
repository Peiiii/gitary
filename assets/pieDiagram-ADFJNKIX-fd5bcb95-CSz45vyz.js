import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { N as require_jsx_runtime, P as require_react, w as require_react_dom } from "./chakra-ui-NHV_-bGL.js";
import { k as require_lodash } from "./react-utils-DE1lHEcz.js";
import { t as require_client } from "./vendor-BKa3f7Q_.js";
import "./common-utils-BCFfNPpf.js";
import "./monaco-CcclqKWN.js";
import "./react-markdown-CiPHk2vS.js";
import "./remark-gfm-DwVXGmow.js";
import { $n as require_markdown_it_task_lists, $t as iT, Gn as yt, Ln as w5, Ot as b5, Pt as cs, Qn as require_pinyin, R as Mf, Rt as di, Vn as x5, Wn as y5, cn as lu, dn as m5, er as require_markdown_it_multimd_table, et as R, in as kz, nn as k5, un as m, ut as U8, w as If, wi as require_classnames, xt as _5 } from "./app-BOej-ymv.js";
import "./_baseUniq-214847ec-mD4wcw89.js";
import "./_basePickBy-f749536a-DSnWYoR6.js";
import "./clone-8a8d8292-DZnGZRIv.js";
import { u as Yy } from "./mermaid-parser.core-ecfcb38d-BkI1D0mG.js";
import { t as m$1 } from "./chunk-4BX2VUAB-df729ba8-DzJWSpsY.js";
import "./init-f9637058-mGOscHBv.js";
import { t as h } from "./ordinal-980380c7-2fIs9QWo.js";
import { t as hn } from "./arc-55eabd0f-DBUEARM4.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
function lt(t, r) {
	return r < t ? -1 : r > t ? 1 : r >= t ? 0 : NaN;
}
function mt(t) {
	return t;
}
function ct() {
	var t = mt, r = lt, d = null, x = di(0), n = di(kz), p = di(0);
	function s(e) {
		var a, l = (e = U8(e)).length, m$2, y, h$1 = 0, c = new Array(l), o = new Array(l), v = +x.apply(this, arguments), w = Math.min(kz, Math.max(-kz, n.apply(this, arguments) - v)), f, C = Math.min(Math.abs(w) / l, p.apply(this, arguments)), $ = C * (w < 0 ? -1 : 1), g;
		for (a = 0; a < l; ++a) (g = o[c[a] = a] = +t(e[a], a, e)) > 0 && (h$1 += g);
		for (r != null ? c.sort(function(A, D) {
			return r(o[A], o[D]);
		}) : d != null && c.sort(function(A, D) {
			return d(e[A], e[D]);
		}), a = 0, y = h$1 ? (w - l * $) / h$1 : 0; a < l; ++a, v = f) m$2 = c[a], g = o[m$2], f = v + (g > 0 ? g * y : 0) + $, o[m$2] = {
			data: e[m$2],
			index: a,
			value: g,
			startAngle: v,
			endAngle: f,
			padAngle: C
		};
		return o;
	}
	return s.value = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : di(+e), s) : t;
	}, s.sortValues = function(e) {
		return arguments.length ? (r = e, d = null, s) : r;
	}, s.sort = function(e) {
		return arguments.length ? (d = e, r = null, s) : d;
	}, s.startAngle = function(e) {
		return arguments.length ? (x = typeof e == "function" ? e : di(+e), s) : x;
	}, s.endAngle = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : di(+e), s) : n;
	}, s.padAngle = function(e) {
		return arguments.length ? (p = typeof e == "function" ? e : di(+e), s) : p;
	}, s;
}
var L = Mf.pie, G = {
	sections: /* @__PURE__ */ new Map(),
	showData: !1,
	config: L
}, T = G.sections, N = G.showData, ut = structuredClone(L), _ = {
	getConfig: /* @__PURE__ */ m(() => structuredClone(ut), "getConfig"),
	clear: /* @__PURE__ */ m(() => {
		T = /* @__PURE__ */ new Map(), N = G.showData, m5();
	}, "clear"),
	setDiagramTitle: w5,
	getDiagramTitle: _5,
	setAccTitle: b5,
	getAccTitle: x5,
	setAccDescription: y5,
	getAccDescription: k5,
	addSection: /* @__PURE__ */ m(({ label: t, value: r }) => {
		if (r < 0) throw new Error(`"${t}" has invalid value: ${r}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
		T.has(t) || (T.set(t, r), R.debug(`added new section: ${t}, with value: ${r}`));
	}, "addSection"),
	getSections: /* @__PURE__ */ m(() => T, "getSections"),
	setShowData: /* @__PURE__ */ m((t) => {
		N = t;
	}, "setShowData"),
	getShowData: /* @__PURE__ */ m(() => N, "getShowData")
}, xt = /* @__PURE__ */ m((t, r) => {
	m$1(t, r), r.setShowData(t.showData), t.sections.map(r.addSection);
}, "populateDb"), yt$1 = { parse: /* @__PURE__ */ m(async (t) => {
	const r = await Yy("pie", t);
	R.debug(r), xt(r, _);
}, "parse") }, At = /* @__PURE__ */ m((t) => `
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`, "getStyles"), Dt = /* @__PURE__ */ m((t) => {
	const r = [...t.values()].reduce((n, p) => n + p, 0), d = [...t.entries()].map(([n, p]) => ({
		label: n,
		value: p
	})).filter((n) => n.value / r * 100 >= 1).sort((n, p) => p.value - n.value);
	return ct().value((n) => n.value)(d);
}, "createPieArcs"), rr = {
	parser: yt$1,
	db: _,
	renderer: { draw: /* @__PURE__ */ m((t, r, d, x) => {
		R.debug(`rendering pie chart
` + t);
		const n = x.db, p = yt(), s = lu(n.getConfig(), p.pie), e = 40, a = 18, l = 4, m$2 = 450, y = m$2, h$1 = iT(r), c = h$1.append("g");
		c.attr("transform", "translate(" + y / 2 + "," + m$2 / 2 + ")");
		const { themeVariables: o } = p;
		let [v] = cs(o.pieOuterStrokeWidth);
		v ?? (v = 2);
		const w = s.textPosition, f = Math.min(y, m$2) / 2 - e, C = hn().innerRadius(0).outerRadius(f), $ = hn().innerRadius(f * w).outerRadius(f * w);
		c.append("circle").attr("cx", 0).attr("cy", 0).attr("r", f + v / 2).attr("class", "pieOuterCircle");
		const g = n.getSections(), A = Dt(g), D = [
			o.pie1,
			o.pie2,
			o.pie3,
			o.pie4,
			o.pie5,
			o.pie6,
			o.pie7,
			o.pie8,
			o.pie9,
			o.pie10,
			o.pie11,
			o.pie12
		];
		let b = 0;
		g.forEach((i) => {
			b += i;
		});
		const P = A.filter((i) => (i.data.value / b * 100).toFixed(0) !== "0"), k = h(D);
		c.selectAll("mySlices").data(P).enter().append("path").attr("d", C).attr("fill", (i) => k(i.data.label)).attr("class", "pieCircle"), c.selectAll("mySlices").data(P).enter().append("text").text((i) => (i.data.value / b * 100).toFixed(0) + "%").attr("transform", (i) => "translate(" + $.centroid(i) + ")").style("text-anchor", "middle").attr("class", "slice"), c.append("text").text(n.getDiagramTitle()).attr("x", 0).attr("y", -(m$2 - 50) / 2).attr("class", "pieTitleText");
		const W = [...g.entries()].map(([i, M]) => ({
			label: i,
			value: M
		})), E = c.selectAll(".legend").data(W).enter().append("g").attr("class", "legend").attr("transform", (i, M) => {
			const R$1 = a + l, V = R$1 * W.length / 2, U = 12 * a, j = M * R$1 - V;
			return "translate(" + U + "," + j + ")";
		});
		E.append("rect").attr("width", a).attr("height", a).style("fill", (i) => k(i.label)).style("stroke", (i) => k(i.label)), E.append("text").attr("x", a + l).attr("y", a - l).text((i) => n.getShowData() ? `${i.label} [${i.value}]` : i.label);
		const B = Math.max(...E.selectAll("text").nodes().map((i) => (i == null ? void 0 : i.getBoundingClientRect().width) ?? 0)), O = y + e + a + l + B;
		h$1.attr("viewBox", `0 0 ${O} ${m$2}`), If(h$1, m$2, O, s.useMaxWidth);
	}, "draw") },
	styles: At
};
export { rr as diagram };
