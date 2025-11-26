import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { N as require_jsx_runtime, P as require_react, w as require_react_dom } from "./chakra-ui-NHV_-bGL.js";
import { k as require_lodash } from "./react-utils-DE1lHEcz.js";
import { t as require_client } from "./vendor-BKa3f7Q_.js";
import "./common-utils-BCFfNPpf.js";
import "./react-markdown-14W_w1u6.js";
import "./monaco-De2c8opW.js";
import "./remark-gfm-BxiTB6j-.js";
import { $n as require_markdown_it_task_lists, A as K, B as Mz, G as Pb, Gn as yt, I as Lz, L as M$, M as Kc, Qn as require_pinyin, S as Fz, Y as Q$, _ as E$, c as Bz, er as require_markdown_it_multimd_table, et as R, r as $z, u as D$, un as m, wi as require_classnames, wn as s$ } from "./app-CHqOxvpb.js";
import { t as Dt } from "./_baseUniq-214847ec-DBvBJYdJ.js";
import { u as on } from "./_basePickBy-f749536a-BkQsym14.js";
import { t as a } from "./clone-8a8d8292-tyjQLPbI.js";
import { t as L } from "./graph-355e244d-CA1jW9GY.js";
import { t as ht } from "./layout-7ea0beed-1xTp1gHY.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
function E(e) {
	var n = {
		options: {
			directed: e.isDirected(),
			multigraph: e.isMultigraph(),
			compound: e.isCompound()
		},
		nodes: ee(e),
		edges: te(e)
	};
	return Dt(e.graph()) || (n.value = a(e.graph())), n;
}
function ee(e) {
	return on(e.nodes(), function(n) {
		var t = e.node(n), s = e.parent(n), c = { v: n };
		return Dt(t) || (c.value = t), Dt(s) || (c.parent = s), c;
	});
}
function te(e) {
	return on(e.edges(), function(n) {
		var t = e.edge(n), s = {
			v: n.v,
			w: n.w
		};
		return Dt(n.name) || (s.name = n.name), Dt(t) || (s.value = t), s;
	});
}
var f = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ m(() => {
	b.clear(), J.clear(), f.clear();
}, "clear"), O = /* @__PURE__ */ m((e, n) => {
	const t = b.get(n) || [];
	return R.trace("In isDescendant", n, " ", e, " = ", t.includes(e)), t.includes(e);
}, "isDescendant"), ie = /* @__PURE__ */ m((e, n) => {
	const t = b.get(n) || [];
	return R.info("Descendants of ", n, " is ", t), R.info("Edge is ", e), e.v === n || e.w === n ? !1 : t ? t.includes(e.v) || O(e.v, n) || O(e.w, n) || t.includes(e.w) : (R.debug("Tilt, ", n, ",not in descendants"), !1);
}, "edgeInCluster"), G = /* @__PURE__ */ m((e, n, t, s) => {
	R.warn("Copying children of ", e, "root", s, "data", n.node(e), s);
	const c = n.children(e) || [];
	e !== s && c.push(e), R.warn("Copying (nodes) clusterId", e, "nodes", c), c.forEach((a$1) => {
		if (n.children(a$1).length > 0) G(a$1, n, t, s);
		else {
			const o = n.node(a$1);
			R.info("cp ", a$1, " to ", s, " with parent ", e), t.setNode(a$1, o), s !== n.parent(a$1) && (R.warn("Setting parent", a$1, n.parent(a$1)), t.setParent(a$1, n.parent(a$1))), e !== s && a$1 !== e ? (R.debug("Setting parent", a$1, e), t.setParent(a$1, e)) : (R.info("In copy ", e, "root", s, "data", n.node(e), s), R.debug("Not Setting parent for node=", a$1, "cluster!==rootId", e !== s, "node!==clusterId", a$1 !== e));
			const m$1 = n.edges(a$1);
			R.debug("Copying Edges", m$1), m$1.forEach((l) => {
				R.info("Edge", l);
				const h = n.edge(l.v, l.w, l.name);
				R.info("Edge data", h, s);
				try {
					ie(l, s) ? (R.info("Copying as ", l.v, l.w, h, l.name), t.setEdge(l.v, l.w, h, l.name), R.info("newGraph edges ", t.edges(), t.edge(t.edges()[0]))) : R.info("Skipping copy of edge ", l.v, "-->", l.w, " rootId: ", s, " clusterId:", e);
				} catch (C) {
					R.error(C);
				}
			});
		}
		R.debug("Removing node", a$1), n.removeNode(a$1);
	});
}, "copy"), R$1 = /* @__PURE__ */ m((e, n) => {
	const t = n.children(e);
	let s = [...t];
	for (const c of t) J.set(c, e), s = [...s, ...R$1(c, n)];
	return s;
}, "extractDescendants"), re = /* @__PURE__ */ m((e, n, t) => {
	const s = e.edges().filter((l) => l.v === n || l.w === n), c = e.edges().filter((l) => l.v === t || l.w === t), a$1 = s.map((l) => ({
		v: l.v === n ? t : l.v,
		w: l.w === n ? n : l.w
	})), o = c.map((l) => ({
		v: l.v,
		w: l.w
	}));
	return a$1.filter((l) => o.some((h) => l.v === h.v && l.w === h.w));
}, "findCommonEdges"), D = /* @__PURE__ */ m((e, n, t) => {
	const s = n.children(e);
	if (R.trace("Searching children of id ", e, s), s.length < 1) return e;
	let c;
	for (const a$1 of s) {
		const o = D(a$1, n, t), m$1 = re(n, t, o);
		if (o) if (m$1.length > 0) c = o;
		else return o;
	}
	return c;
}, "findNonClusterChild"), k = /* @__PURE__ */ m((e) => !f.has(e) || !f.get(e).externalConnections ? e : f.has(e) ? f.get(e).id : e, "getAnchorId"), oe = /* @__PURE__ */ m((e, n) => {
	if (!e || n > 10) {
		R.debug("Opting out, no graph ");
		return;
	} else R.debug("Opting in, graph ");
	e.nodes().forEach(function(t) {
		e.children(t).length > 0 && (R.warn("Cluster identified", t, " Replacement id in edges: ", D(t, e, t)), b.set(t, R$1(t, e)), f.set(t, {
			id: D(t, e, t),
			clusterData: e.node(t)
		}));
	}), e.nodes().forEach(function(t) {
		const s = e.children(t), c = e.edges();
		s.length > 0 ? (R.debug("Cluster identified", t, b), c.forEach((a$1) => {
			O(a$1.v, t) ^ O(a$1.w, t) && (R.warn("Edge: ", a$1, " leaves cluster ", t), R.warn("Descendants of XXX ", t, ": ", b.get(t)), f.get(t).externalConnections = !0);
		})) : R.debug("Not a cluster ", t, b);
	});
	for (let t of f.keys()) {
		const s = f.get(t).id, c = e.parent(s);
		c !== t && f.has(c) && !f.get(c).externalConnections && (f.get(t).id = c);
	}
	e.edges().forEach(function(t) {
		const s = e.edge(t);
		R.warn("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(t)), R.warn("Edge " + t.v + " -> " + t.w + ": " + JSON.stringify(e.edge(t)));
		let c = t.v, a$1 = t.w;
		if (R.warn("Fix XXX", f, "ids:", t.v, t.w, "Translating: ", f.get(t.v), " --- ", f.get(t.w)), f.get(t.v) || f.get(t.w)) {
			if (R.warn("Fixing and trying - removing XXX", t.v, t.w, t.name), c = k(t.v), a$1 = k(t.w), e.removeEdge(t.v, t.w, t.name), c !== t.v) {
				const o = e.parent(c);
				f.get(o).externalConnections = !0, s.fromCluster = t.v;
			}
			if (a$1 !== t.w) {
				const o = e.parent(a$1);
				f.get(o).externalConnections = !0, s.toCluster = t.w;
			}
			R.warn("Fix Replacing with XXX", c, a$1, t.name), e.setEdge(c, a$1, s, t.name);
		}
	}), R.warn("Adjusted Graph", E(e)), T(e, 0), R.trace(f);
}, "adjustClustersAndEdges"), T = /* @__PURE__ */ m((e, n) => {
	var c, a$1;
	if (R.warn("extractor - ", n, E(e), e.children("D")), n > 10) {
		R.error("Bailing out");
		return;
	}
	let t = e.nodes(), s = !1;
	for (const o of t) {
		const m$1 = e.children(o);
		s = s || m$1.length > 0;
	}
	if (!s) {
		R.debug("Done, no node has children", e.nodes());
		return;
	}
	R.debug("Nodes = ", t, n);
	for (const o of t) if (R.debug("Extracting node", o, f, f.has(o) && !f.get(o).externalConnections, !e.parent(o), e.node(o), e.children("D"), " Depth ", n), !f.has(o)) R.debug("Not a cluster", o, n);
	else if (!f.get(o).externalConnections && e.children(o) && e.children(o).length > 0) {
		R.warn("Cluster without external connections, without a parent and with children", o, n);
		let l = e.graph().rankdir === "TB" ? "LR" : "TB";
		(a$1 = (c = f.get(o)) == null ? void 0 : c.clusterData) != null && a$1.dir && (l = f.get(o).clusterData.dir, R.warn("Fixing dir", f.get(o).clusterData.dir, l));
		const h = new L({
			multigraph: !0,
			compound: !0
		}).setGraph({
			rankdir: l,
			nodesep: 50,
			ranksep: 50,
			marginx: 8,
			marginy: 8
		}).setDefaultEdgeLabel(function() {
			return {};
		});
		R.warn("Old graph before copy", E(e)), G(o, e, h, o), e.setNode(o, {
			clusterNode: !0,
			id: o,
			clusterData: f.get(o).clusterData,
			label: f.get(o).label,
			graph: h
		}), R.warn("New graph after copy node: (", o, ")", E(h)), R.debug("Old graph after copy", E(e));
	} else R.warn("Cluster ** ", o, " **not meeting the criteria !externalConnections:", !f.get(o).externalConnections, " no parent: ", !e.parent(o), " children ", e.children(o) && e.children(o).length > 0, e.children("D"), n), R.debug(f);
	t = e.nodes(), R.warn("New list of nodes", t);
	for (const o of t) {
		const m$1 = e.node(o);
		R.warn(" Now next level", o, m$1), m$1 != null && m$1.clusterNode && T(m$1.graph, n + 1);
	}
}, "extractor"), M = /* @__PURE__ */ m((e, n) => {
	if (n.length === 0) return [];
	let t = Object.assign([], n);
	return n.forEach((s) => {
		const a$1 = M(e, e.children(s));
		t = [...t, ...a$1];
	}), t;
}, "sorter"), se = /* @__PURE__ */ m((e) => M(e, e.children()), "sortNodesByHierarchy"), j = /* @__PURE__ */ m(async (e, n, t, s, c, a$1) => {
	R.warn("Graph in recursive render:XAX", E(n), c);
	const o = n.graph().rankdir;
	R.trace("Dir in recursive render - dir:", o);
	const m$1 = e.insert("g").attr("class", "root");
	n.nodes() ? R.info("Recursive render XXX", n.nodes()) : R.info("No nodes found for", n), n.edges().length > 0 && R.info("Recursive edges", n.edge(n.edges()[0]));
	const l = m$1.insert("g").attr("class", "clusters"), h = m$1.insert("g").attr("class", "edgePaths"), C = m$1.insert("g").attr("class", "edgeLabels"), u = m$1.insert("g").attr("class", "nodes");
	await Promise.all(n.nodes().map(async function(d) {
		const i = n.node(d);
		if (c !== void 0) {
			const p = JSON.parse(JSON.stringify(c.clusterData));
			R.trace(`Setting data for parent cluster XXX
 Node.id = `, d, `
 data=`, p.height, `
Parent cluster`, c.height), n.setNode(c.id, p), n.parent(d) || (R.trace("Setting parent", d, c.id), n.setParent(d, c.id, p));
		}
		if (R.info("(Insert) Node XXX" + d + ": " + JSON.stringify(n.node(d))), i != null && i.clusterNode) {
			R.info("Cluster identified XBX", d, i.width, n.node(d));
			const { ranksep: p, nodesep: g } = n.graph();
			i.graph.setGraph({
				...i.graph.graph(),
				ranksep: p + 25,
				nodesep: g
			});
			const N = await j(u, i.graph, t, s, n.node(d), a$1), S = N.elem;
			K(i, S), i.diff = N.diff || 0, R.info("New compound node after recursive render XAX", d, "width", i.width, "height", i.height), Lz(S, i);
		} else n.children(d).length > 0 ? (R.trace("Cluster - the non recursive path XBX", d, i.id, i, i.width, "Graph:", n), R.trace(D(i.id, n)), f.set(i.id, {
			id: D(i.id, n),
			node: i
		})) : (R.trace("Node - the non recursive path XAX", d, u, n.node(d), o), await Pb(u, n.node(d), {
			config: a$1,
			dir: o
		}));
	})), await (/* @__PURE__ */ m(async () => {
		const d = n.edges().map(async function(i) {
			const p = n.edge(i.v, i.w, i.name);
			R.info("Edge " + i.v + " -> " + i.w + ": " + JSON.stringify(i)), R.info("Edge " + i.v + " -> " + i.w + ": ", i, " ", JSON.stringify(n.edge(i))), R.info("Fix", f, "ids:", i.v, i.w, "Translating: ", f.get(i.v), f.get(i.w)), await E$(C, p);
		});
		await Promise.all(d);
	}, "processEdges"))(), R.info("Graph before layout:", JSON.stringify(E(n))), R.info("############################################# XXX"), R.info("###                Layout                 ### XXX"), R.info("############################################# XXX"), ht(n), R.info("Graph after layout:", JSON.stringify(E(n)));
	let y = 0, { subGraphTitleTotalMargin: X } = Kc(a$1);
	return await Promise.all(se(n).map(async function(d) {
		var p;
		const i = n.node(d);
		if (R.info("Position XBX => " + d + ": (" + i.x, "," + i.y, ") width: ", i.width, " height: ", i.height), i != null && i.clusterNode) i.y += X, R.info("A tainted cluster node XBX1", d, i.id, i.width, i.height, i.x, i.y, n.parent(d)), f.get(i.id).node = i, Bz(i);
		else if (n.children(d).length > 0) {
			R.info("A pure cluster node XBX1", d, i.id, i.x, i.y, i.width, i.height, n.parent(d)), i.height += X, n.node(i.parentId);
			const g = (i == null ? void 0 : i.padding) / 2 || 0, N = ((p = i == null ? void 0 : i.labelBBox) == null ? void 0 : p.height) || 0, S = N - g || 0;
			R.debug("OffsetY", S, "labelHeight", N, "halfPadding", g), await s$(l, i), f.get(i.id).node = i;
		} else {
			const g = n.node(i.parentId);
			i.y += X / 2, R.info("A regular node XBX1 - using the padding", i.id, "parent", i.parentId, i.width, i.height, i.x, i.y, "offsetY", i.offsetY, "parent", g, g == null ? void 0 : g.offsetY, i), Bz(i);
		}
	})), n.edges().forEach(function(d) {
		const i = n.edge(d);
		R.info("Edge " + d.v + " -> " + d.w + ": " + JSON.stringify(i), i), i.points.forEach((S) => S.y += X / 2);
		M$(i, D$(h, i, f, t, n.node(d.v), n.node(d.w), s));
	}), n.nodes().forEach(function(d) {
		const i = n.node(d);
		R.info(d, i.type, i.diff), i.isGroup && (y = i.diff);
	}), R.warn("Returning from recursive render XAX", m$1, y), {
		elem: m$1,
		diff: y
	};
}, "recursiveRender"), Gt = /* @__PURE__ */ m(async (e, n) => {
	var a$1, o, m$1, l, h, C;
	const t = new L({
		multigraph: !0,
		compound: !0
	}).setGraph({
		rankdir: e.direction,
		nodesep: ((a$1 = e.config) == null ? void 0 : a$1.nodeSpacing) || ((m$1 = (o = e.config) == null ? void 0 : o.flowchart) == null ? void 0 : m$1.nodeSpacing) || e.nodeSpacing,
		ranksep: ((l = e.config) == null ? void 0 : l.rankSpacing) || ((C = (h = e.config) == null ? void 0 : h.flowchart) == null ? void 0 : C.rankSpacing) || e.rankSpacing,
		marginx: 8,
		marginy: 8
	}).setDefaultEdgeLabel(function() {
		return {};
	}), s = n.select("g");
	Q$(s, e.markers, e.type, e.diagramId), $z(), Fz(), Mz(), ne(), e.nodes.forEach((u) => {
		t.setNode(u.id, { ...u }), u.parentId && t.setParent(u.id, u.parentId);
	}), R.debug("Edges:", e.edges), e.edges.forEach((u) => {
		if (u.start === u.end) {
			const w = u.start, y = w + "---" + w + "---1", X = w + "---" + w + "---2", d = t.node(w);
			t.setNode(y, {
				domId: y,
				id: y,
				parentId: d.parentId,
				labelStyle: "",
				label: "",
				padding: 0,
				shape: "labelRect",
				style: "",
				width: 10,
				height: 10
			}), t.setParent(y, d.parentId), t.setNode(X, {
				domId: X,
				id: X,
				parentId: d.parentId,
				labelStyle: "",
				padding: 0,
				shape: "labelRect",
				label: "",
				style: "",
				width: 10,
				height: 10
			}), t.setParent(X, d.parentId);
			const i = structuredClone(u), p = structuredClone(u), g = structuredClone(u);
			i.label = "", i.arrowTypeEnd = "none", i.id = w + "-cyclic-special-1", p.arrowTypeStart = "none", p.arrowTypeEnd = "none", p.id = w + "-cyclic-special-mid", g.label = "", d.isGroup && (i.fromCluster = w, g.toCluster = w), g.id = w + "-cyclic-special-2", g.arrowTypeStart = "none", t.setEdge(w, y, i, w + "-cyclic-special-0"), t.setEdge(y, X, p, w + "-cyclic-special-1"), t.setEdge(X, w, g, w + "-cyc<lic-special-2");
		} else t.setEdge(u.start, u.end, { ...u }, u.id);
	}), R.warn("Graph at first:", JSON.stringify(E(t))), oe(t), R.warn("Graph after XAX:", JSON.stringify(E(t)));
	const c = yt();
	await j(s, t, e.type, e.diagramId, void 0, c);
}, "render");
export { Gt as render };
