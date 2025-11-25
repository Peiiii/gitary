import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { N as require_jsx_runtime, P as require_react, w as require_react_dom } from "./chakra-ui-NHV_-bGL.js";
import { k as require_lodash } from "./react-utils-DE1lHEcz.js";
import { t as require_client } from "./vendor-BKa3f7Q_.js";
import "./common-utils-BCFfNPpf.js";
import "./monaco-CcclqKWN.js";
import "./react-markdown-CiPHk2vS.js";
import "./remark-gfm-DwVXGmow.js";
import { $n as require_markdown_it_task_lists, Gn as yt, Ln as w5, Nn as v5, Ot as b5, Qn as require_pinyin, R as Mf, Rn as wM, Vn as x5, Wn as y5, Xn as zi, cn as lu, dn as m5, er as require_markdown_it_multimd_table, et as R, gt as Xt, nn as k5, qt as gt, t as $e, un as m$1, wi as require_classnames, xt as _5 } from "./app-BOej-ymv.js";
import "./_baseUniq-214847ec-mD4wcw89.js";
import "./_basePickBy-f749536a-DSnWYoR6.js";
import "./clone-8a8d8292-DZnGZRIv.js";
import { u as Yy } from "./mermaid-parser.core-ecfcb38d-BkI1D0mG.js";
import { t as m } from "./chunk-4BX2VUAB-df729ba8-DzJWSpsY.js";
import { t as e } from "./chunk-QZHKN3VN-69ca95fd-B4Sw6RlU.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
var x = {
	NORMAL: 0,
	REVERSE: 1,
	HIGHLIGHT: 2,
	MERGE: 3,
	CHERRY_PICK: 4
}, gr = Mf.gitGraph, z = /* @__PURE__ */ m$1(() => lu({
	...gr,
	...Xt().gitGraph
}), "getConfig"), i = new e(() => {
	const t = z(), r = t.mainBranchName, a = t.mainBranchOrder;
	return {
		mainBranchName: r,
		commits: /* @__PURE__ */ new Map(),
		head: null,
		branchConfig: /* @__PURE__ */ new Map([[r, {
			name: r,
			order: a
		}]]),
		branches: /* @__PURE__ */ new Map([[r, null]]),
		currBranch: r,
		direction: "LR",
		seq: 0,
		options: {}
	};
});
function j() {
	return wM({ length: 7 });
}
m$1(j, "getID");
function N(t, r) {
	const a = /* @__PURE__ */ Object.create(null);
	return t.reduce((s, e$1) => {
		const n = r(e$1);
		return a[n] || (a[n] = !0, s.push(e$1)), s;
	}, []);
}
m$1(N, "uniqBy");
var yr = /* @__PURE__ */ m$1(function(t) {
	i.records.direction = t;
}, "setDirection"), xr = /* @__PURE__ */ m$1(function(t) {
	R.debug("options str", t), t = t == null ? void 0 : t.trim(), t = t || "{}";
	try {
		i.records.options = JSON.parse(t);
	} catch (r) {
		R.error("error while parsing gitGraph options", r.message);
	}
}, "setOptions"), ur = /* @__PURE__ */ m$1(function() {
	return i.records.options;
}, "getOptions"), mr = /* @__PURE__ */ m$1(function(t) {
	let r = t.msg, a = t.id;
	const s = t.type;
	let e$1 = t.tags;
	R.info("commit", r, a, s, e$1), R.debug("Entering commit:", r, a, s, e$1);
	const n = z();
	a = zi.sanitizeText(a, n), r = zi.sanitizeText(r, n), e$1 = e$1 == null ? void 0 : e$1.map((o) => zi.sanitizeText(o, n));
	const c = {
		id: a || i.records.seq + "-" + j(),
		message: r,
		seq: i.records.seq++,
		type: s ?? x.NORMAL,
		tags: e$1 ?? [],
		parents: i.records.head == null ? [] : [i.records.head.id],
		branch: i.records.currBranch
	};
	i.records.head = c, R.info("main branch", n.mainBranchName), i.records.commits.has(c.id) && R.warn(`Commit ID ${c.id} already exists`), i.records.commits.set(c.id, c), i.records.branches.set(i.records.currBranch, c.id), R.debug("in pushCommit " + c.id);
}, "commit"), br = /* @__PURE__ */ m$1(function(t) {
	let r = t.name;
	const a = t.order;
	if (r = zi.sanitizeText(r, z()), i.records.branches.has(r)) throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${r}")`);
	i.records.branches.set(r, i.records.head != null ? i.records.head.id : null), i.records.branchConfig.set(r, {
		name: r,
		order: a
	}), _(r), R.debug("in createBranch");
}, "branch"), wr = /* @__PURE__ */ m$1((t) => {
	let r = t.branch, a = t.id;
	const s = t.type, e$1 = t.tags, n = z();
	r = zi.sanitizeText(r, n), a && (a = zi.sanitizeText(a, n));
	const c = i.records.branches.get(i.records.currBranch), o = i.records.branches.get(r), $ = c ? i.records.commits.get(c) : void 0, l = o ? i.records.commits.get(o) : void 0;
	if ($ && l && $.branch === r) throw new Error(`Cannot merge branch '${r}' into itself.`);
	if (i.records.currBranch === r) {
		const d = /* @__PURE__ */ new Error("Incorrect usage of \"merge\". Cannot merge a branch to itself");
		throw d.hash = {
			text: `merge ${r}`,
			token: `merge ${r}`,
			expected: ["branch abc"]
		}, d;
	}
	if ($ === void 0 || !$) {
		const d = /* @__PURE__ */ new Error(`Incorrect usage of "merge". Current branch (${i.records.currBranch})has no commits`);
		throw d.hash = {
			text: `merge ${r}`,
			token: `merge ${r}`,
			expected: ["commit"]
		}, d;
	}
	if (!i.records.branches.has(r)) {
		const d = /* @__PURE__ */ new Error("Incorrect usage of \"merge\". Branch to be merged (" + r + ") does not exist");
		throw d.hash = {
			text: `merge ${r}`,
			token: `merge ${r}`,
			expected: [`branch ${r}`]
		}, d;
	}
	if (l === void 0 || !l) {
		const d = /* @__PURE__ */ new Error("Incorrect usage of \"merge\". Branch to be merged (" + r + ") has no commits");
		throw d.hash = {
			text: `merge ${r}`,
			token: `merge ${r}`,
			expected: ["\"commit\""]
		}, d;
	}
	if ($ === l) {
		const d = /* @__PURE__ */ new Error("Incorrect usage of \"merge\". Both branches have same head");
		throw d.hash = {
			text: `merge ${r}`,
			token: `merge ${r}`,
			expected: ["branch abc"]
		}, d;
	}
	if (a && i.records.commits.has(a)) {
		const d = /* @__PURE__ */ new Error("Incorrect usage of \"merge\". Commit with id:" + a + " already exists, use different custom id");
		throw d.hash = {
			text: `merge ${r} ${a} ${s} ${e$1 == null ? void 0 : e$1.join(" ")}`,
			token: `merge ${r} ${a} ${s} ${e$1 == null ? void 0 : e$1.join(" ")}`,
			expected: [`merge ${r} ${a}_UNIQUE ${s} ${e$1 == null ? void 0 : e$1.join(" ")}`]
		}, d;
	}
	const p = o || "", f = {
		id: a || `${i.records.seq}-${j()}`,
		message: `merged branch ${r} into ${i.records.currBranch}`,
		seq: i.records.seq++,
		parents: i.records.head == null ? [] : [i.records.head.id, p],
		branch: i.records.currBranch,
		type: x.MERGE,
		customType: s,
		customId: !!a,
		tags: e$1 ?? []
	};
	i.records.head = f, i.records.commits.set(f.id, f), i.records.branches.set(i.records.currBranch, f.id), R.debug(i.records.branches), R.debug("in mergeBranch");
}, "merge"), vr = /* @__PURE__ */ m$1(function(t) {
	let r = t.id, a = t.targetId, s = t.tags, e$1 = t.parent;
	R.debug("Entering cherryPick:", r, a, s);
	const n = z();
	if (r = zi.sanitizeText(r, n), a = zi.sanitizeText(a, n), s = s == null ? void 0 : s.map(($) => zi.sanitizeText($, n)), e$1 = zi.sanitizeText(e$1, n), !r || !i.records.commits.has(r)) {
		const $ = /* @__PURE__ */ new Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
		throw $.hash = {
			text: `cherryPick ${r} ${a}`,
			token: `cherryPick ${r} ${a}`,
			expected: ["cherry-pick abc"]
		}, $;
	}
	const c = i.records.commits.get(r);
	if (c === void 0 || !c) throw new Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
	if (e$1 && !(Array.isArray(c.parents) && c.parents.includes(e$1))) throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
	const o = c.branch;
	if (c.type === x.MERGE && !e$1) throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
	if (!a || !i.records.commits.has(a)) {
		if (o === i.records.currBranch) {
			const f = /* @__PURE__ */ new Error("Incorrect usage of \"cherryPick\". Source commit is already on current branch");
			throw f.hash = {
				text: `cherryPick ${r} ${a}`,
				token: `cherryPick ${r} ${a}`,
				expected: ["cherry-pick abc"]
			}, f;
		}
		const $ = i.records.branches.get(i.records.currBranch);
		if ($ === void 0 || !$) {
			const f = /* @__PURE__ */ new Error(`Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`);
			throw f.hash = {
				text: `cherryPick ${r} ${a}`,
				token: `cherryPick ${r} ${a}`,
				expected: ["cherry-pick abc"]
			}, f;
		}
		const l = i.records.commits.get($);
		if (l === void 0 || !l) {
			const f = /* @__PURE__ */ new Error(`Incorrect usage of "cherry-pick". Current branch (${i.records.currBranch})has no commits`);
			throw f.hash = {
				text: `cherryPick ${r} ${a}`,
				token: `cherryPick ${r} ${a}`,
				expected: ["cherry-pick abc"]
			}, f;
		}
		const p = {
			id: i.records.seq + "-" + j(),
			message: `cherry-picked ${c == null ? void 0 : c.message} into ${i.records.currBranch}`,
			seq: i.records.seq++,
			parents: i.records.head == null ? [] : [i.records.head.id, c.id],
			branch: i.records.currBranch,
			type: x.CHERRY_PICK,
			tags: s ? s.filter(Boolean) : [`cherry-pick:${c.id}${c.type === x.MERGE ? `|parent:${e$1}` : ""}`]
		};
		i.records.head = p, i.records.commits.set(p.id, p), i.records.branches.set(i.records.currBranch, p.id), R.debug(i.records.branches), R.debug("in cherryPick");
	}
}, "cherryPick"), _ = /* @__PURE__ */ m$1(function(t) {
	if (t = zi.sanitizeText(t, z()), i.records.branches.has(t)) {
		i.records.currBranch = t;
		const r = i.records.branches.get(i.records.currBranch);
		r === void 0 || !r ? i.records.head = null : i.records.head = i.records.commits.get(r) ?? null;
	} else {
		const r = /* @__PURE__ */ new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`);
		throw r.hash = {
			text: `checkout ${t}`,
			token: `checkout ${t}`,
			expected: [`branch ${t}`]
		}, r;
	}
}, "checkout");
function D(t, r, a) {
	const s = t.indexOf(r);
	s === -1 ? t.push(a) : t.splice(s, 1, a);
}
m$1(D, "upsert");
function A(t) {
	const r = t.reduce((e$1, n) => e$1.seq > n.seq ? e$1 : n, t[0]);
	let a = "";
	t.forEach(function(e$1) {
		e$1 === r ? a += "	*" : a += "	|";
	});
	const s = [
		a,
		r.id,
		r.seq
	];
	for (const e$1 in i.records.branches) i.records.branches.get(e$1) === r.id && s.push(e$1);
	if (R.debug(s.join(" ")), r.parents && r.parents.length == 2 && r.parents[0] && r.parents[1]) {
		const e$1 = i.records.commits.get(r.parents[0]);
		D(t, r, e$1), r.parents[1] && t.push(i.records.commits.get(r.parents[1]));
	} else {
		if (r.parents.length == 0) return;
		if (r.parents[0]) {
			const e$1 = i.records.commits.get(r.parents[0]);
			D(t, r, e$1);
		}
	}
	t = N(t, (e$1) => e$1.id), A(t);
}
m$1(A, "prettyPrintCommitHistory");
var Cr = /* @__PURE__ */ m$1(function() {
	R.debug(i.records.commits);
	const t = V()[0];
	A([t]);
}, "prettyPrint"), Er = /* @__PURE__ */ m$1(function() {
	i.reset(), m5();
}, "clear"), Br = /* @__PURE__ */ m$1(function() {
	return [...i.records.branchConfig.values()].map((r, a) => r.order !== null && r.order !== void 0 ? r : {
		...r,
		order: parseFloat(`0.${a}`)
	}).sort((r, a) => (r.order ?? 0) - (a.order ?? 0)).map(({ name: r }) => ({ name: r }));
}, "getBranchesAsObjArray"), kr = /* @__PURE__ */ m$1(function() {
	return i.records.branches;
}, "getBranches"), Lr = /* @__PURE__ */ m$1(function() {
	return i.records.commits;
}, "getCommits"), V = /* @__PURE__ */ m$1(function() {
	const t = [...i.records.commits.values()];
	return t.forEach(function(r) {
		R.debug(r.id);
	}), t.sort((r, a) => r.seq - a.seq), t;
}, "getCommitsArray"), X = {
	commitType: x,
	getConfig: z,
	setDirection: yr,
	setOptions: xr,
	getOptions: ur,
	commit: mr,
	branch: br,
	merge: wr,
	cherryPick: vr,
	checkout: _,
	prettyPrint: Cr,
	clear: Er,
	getBranchesAsObjArray: Br,
	getBranches: kr,
	getCommits: Lr,
	getCommitsArray: V,
	getCurrentBranch: /* @__PURE__ */ m$1(function() {
		return i.records.currBranch;
	}, "getCurrentBranch"),
	getDirection: /* @__PURE__ */ m$1(function() {
		return i.records.direction;
	}, "getDirection"),
	getHead: /* @__PURE__ */ m$1(function() {
		return i.records.head;
	}, "getHead"),
	setAccTitle: b5,
	getAccTitle: x5,
	getAccDescription: k5,
	setAccDescription: y5,
	setDiagramTitle: w5,
	getDiagramTitle: _5
}, Ir = /* @__PURE__ */ m$1((t, r) => {
	m(t, r), t.dir && r.setDirection(t.dir);
	for (const a of t.statements) qr(a, r);
}, "populate"), qr = /* @__PURE__ */ m$1((t, r) => {
	const s = {
		Commit: /* @__PURE__ */ m$1((e$1) => r.commit(Or(e$1)), "Commit"),
		Branch: /* @__PURE__ */ m$1((e$1) => r.branch(zr(e$1)), "Branch"),
		Merge: /* @__PURE__ */ m$1((e$1) => r.merge(Gr(e$1)), "Merge"),
		Checkout: /* @__PURE__ */ m$1((e$1) => r.checkout(Hr(e$1)), "Checkout"),
		CherryPicking: /* @__PURE__ */ m$1((e$1) => r.cherryPick(Pr(e$1)), "CherryPicking")
	}[t.$type];
	s ? s(t) : R.error(`Unknown statement type: ${t.$type}`);
}, "parseStatement"), Or = /* @__PURE__ */ m$1((t) => ({
	id: t.id,
	msg: t.message ?? "",
	type: t.type !== void 0 ? x[t.type] : x.NORMAL,
	tags: t.tags ?? void 0
}), "parseCommit"), zr = /* @__PURE__ */ m$1((t) => ({
	name: t.name,
	order: t.order ?? 0
}), "parseBranch"), Gr = /* @__PURE__ */ m$1((t) => ({
	branch: t.branch,
	id: t.id ?? "",
	type: t.type !== void 0 ? x[t.type] : void 0,
	tags: t.tags ?? void 0
}), "parseMerge"), Hr = /* @__PURE__ */ m$1((t) => t.branch, "parseCheckout"), Pr = /* @__PURE__ */ m$1((t) => {
	var a;
	return {
		id: t.id,
		targetId: "",
		tags: ((a = t.tags) == null ? void 0 : a.length) === 0 ? void 0 : t.tags,
		parent: t.parent
	};
}, "parseCherryPicking"), Wr = { parse: /* @__PURE__ */ m$1(async (t) => {
	const r = await Yy("gitGraph", t);
	R.debug(r), Ir(r, X);
}, "parse") }, S = yt(), m$2 = S == null ? void 0 : S.gitGraph, R$1 = 10, I = 40, k = 4, L = 2, O = 8, C = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), P = 30, G = /* @__PURE__ */ new Map(), W = [], M = 0, y = "LR", jr = /* @__PURE__ */ m$1(() => {
	C.clear(), E.clear(), G.clear(), M = 0, W = [], y = "LR";
}, "clear"), J = /* @__PURE__ */ m$1((t) => {
	const r = document.createElementNS("http://www.w3.org/2000/svg", "text");
	return (typeof t == "string" ? t.split(/\\n|\n|<br\s*\/?>/gi) : t).forEach((s) => {
		const e$1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
		e$1.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), e$1.setAttribute("dy", "1em"), e$1.setAttribute("x", "0"), e$1.setAttribute("class", "row"), e$1.textContent = s.trim(), r.appendChild(e$1);
	}), r;
}, "drawText"), Q = /* @__PURE__ */ m$1((t) => {
	let r, a, s;
	return y === "BT" ? (a = /* @__PURE__ */ m$1((e$1, n) => e$1 <= n, "comparisonFunc"), s = Infinity) : (a = /* @__PURE__ */ m$1((e$1, n) => e$1 >= n, "comparisonFunc"), s = 0), t.forEach((e$1) => {
		var c, o;
		const n = y === "TB" || y == "BT" ? (c = E.get(e$1)) == null ? void 0 : c.y : (o = E.get(e$1)) == null ? void 0 : o.x;
		n !== void 0 && a(n, s) && (r = e$1, s = n);
	}), r;
}, "findClosestParent"), Sr = /* @__PURE__ */ m$1((t) => {
	let r = "", a = Infinity;
	return t.forEach((s) => {
		const e$1 = E.get(s).y;
		e$1 <= a && (r = s, a = e$1);
	}), r || void 0;
}, "findClosestParentBT"), Dr = /* @__PURE__ */ m$1((t, r, a) => {
	let s = a, e$1 = a;
	const n = [];
	t.forEach((c) => {
		const o = r.get(c);
		if (!o) throw new Error(`Commit not found for key ${c}`);
		o.parents.length ? (s = Yr(o), e$1 = Math.max(s, e$1)) : n.push(o), Kr(o, s);
	}), s = e$1, n.forEach((c) => {
		Nr(c, s, a);
	}), t.forEach((c) => {
		const o = r.get(c);
		if (o != null && o.parents.length) {
			const $ = Sr(o.parents);
			s = E.get($).y - I, s <= e$1 && (e$1 = s);
			const l = C.get(o.branch).pos, p = s - R$1;
			E.set(o.id, {
				x: l,
				y: p
			});
		}
	});
}, "setParallelBTPos"), Ar = /* @__PURE__ */ m$1((t) => {
	var s;
	const r = Q(t.parents.filter((e$1) => e$1 !== null));
	if (!r) throw new Error(`Closest parent not found for commit ${t.id}`);
	const a = (s = E.get(r)) == null ? void 0 : s.y;
	if (a === void 0) throw new Error(`Closest parent position not found for commit ${t.id}`);
	return a;
}, "findClosestParentPos"), Yr = /* @__PURE__ */ m$1((t) => Ar(t) + I, "calculateCommitPosition"), Kr = /* @__PURE__ */ m$1((t, r) => {
	const a = C.get(t.branch);
	if (!a) throw new Error(`Branch not found for commit ${t.id}`);
	const s = a.pos, e$1 = r + R$1;
	return E.set(t.id, {
		x: s,
		y: e$1
	}), {
		x: s,
		y: e$1
	};
}, "setCommitPosition"), Nr = /* @__PURE__ */ m$1((t, r, a) => {
	const s = C.get(t.branch);
	if (!s) throw new Error(`Branch not found for commit ${t.id}`);
	const e$1 = r + a, n = s.pos;
	E.set(t.id, {
		x: n,
		y: e$1
	});
}, "setRootPosition"), _r = /* @__PURE__ */ m$1((t, r, a, s, e$1, n) => {
	if (n === x.HIGHLIGHT) t.append("rect").attr("x", a.x - 10).attr("y", a.y - 10).attr("width", 20).attr("height", 20).attr("class", `commit ${r.id} commit-highlight${e$1 % O} ${s}-outer`), t.append("rect").attr("x", a.x - 6).attr("y", a.y - 6).attr("width", 12).attr("height", 12).attr("class", `commit ${r.id} commit${e$1 % O} ${s}-inner`);
	else if (n === x.CHERRY_PICK) t.append("circle").attr("cx", a.x).attr("cy", a.y).attr("r", 10).attr("class", `commit ${r.id} ${s}`), t.append("circle").attr("cx", a.x - 3).attr("cy", a.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${r.id} ${s}`), t.append("circle").attr("cx", a.x + 3).attr("cy", a.y + 2).attr("r", 2.75).attr("fill", "#fff").attr("class", `commit ${r.id} ${s}`), t.append("line").attr("x1", a.x + 3).attr("y1", a.y + 1).attr("x2", a.x).attr("y2", a.y - 5).attr("stroke", "#fff").attr("class", `commit ${r.id} ${s}`), t.append("line").attr("x1", a.x - 3).attr("y1", a.y + 1).attr("x2", a.x).attr("y2", a.y - 5).attr("stroke", "#fff").attr("class", `commit ${r.id} ${s}`);
	else {
		const c = t.append("circle");
		if (c.attr("cx", a.x), c.attr("cy", a.y), c.attr("r", r.type === x.MERGE ? 9 : 10), c.attr("class", `commit ${r.id} commit${e$1 % O}`), n === x.MERGE) {
			const o = t.append("circle");
			o.attr("cx", a.x), o.attr("cy", a.y), o.attr("r", 6), o.attr("class", `commit ${s} ${r.id} commit${e$1 % O}`);
		}
		n === x.REVERSE && t.append("path").attr("d", `M ${a.x - 5},${a.y - 5}L${a.x + 5},${a.y + 5}M${a.x - 5},${a.y + 5}L${a.x + 5},${a.y - 5}`).attr("class", `commit ${s} ${r.id} commit${e$1 % O}`);
	}
}, "drawCommitBullet"), Vr = /* @__PURE__ */ m$1((t, r, a, s) => {
	var e$1;
	if (r.type !== x.CHERRY_PICK && (r.customId && r.type === x.MERGE || r.type !== x.MERGE) && m$2 != null && m$2.showCommitLabel) {
		const n = t.append("g"), c = n.insert("rect").attr("class", "commit-label-bkg"), o = n.append("text").attr("x", s).attr("y", a.y + 25).attr("class", "commit-label").text(r.id), $ = (e$1 = o.node()) == null ? void 0 : e$1.getBBox();
		if ($ && (c.attr("x", a.posWithOffset - $.width / 2 - L).attr("y", a.y + 13.5).attr("width", $.width + 2 * L).attr("height", $.height + 2 * L), y === "TB" || y === "BT" ? (c.attr("x", a.x - ($.width + 4 * k + 5)).attr("y", a.y - 12), o.attr("x", a.x - ($.width + 4 * k)).attr("y", a.y + $.height - 12)) : o.attr("x", a.posWithOffset - $.width / 2), m$2.rotateCommitLabel)) if (y === "TB" || y === "BT") o.attr("transform", "rotate(-45, " + a.x + ", " + a.y + ")"), c.attr("transform", "rotate(-45, " + a.x + ", " + a.y + ")");
		else {
			const l = -7.5 - ($.width + 10) / 25 * 9.5, p = 10 + $.width / 25 * 8.5;
			n.attr("transform", "translate(" + l + ", " + p + ") rotate(-45, " + s + ", " + a.y + ")");
		}
	}
}, "drawCommitLabel"), Xr = /* @__PURE__ */ m$1((t, r, a, s) => {
	var e$1;
	if (r.tags.length > 0) {
		let n = 0, c = 0, o = 0;
		const $ = [];
		for (const l of r.tags.reverse()) {
			const p = t.insert("polygon"), f = t.append("circle"), d = t.append("text").attr("y", a.y - 16 - n).attr("class", "tag-label").text(l), g = (e$1 = d.node()) == null ? void 0 : e$1.getBBox();
			if (!g) throw new Error("Tag bbox not found");
			c = Math.max(c, g.width), o = Math.max(o, g.height), d.attr("x", a.posWithOffset - g.width / 2), $.push({
				tag: d,
				hole: f,
				rect: p,
				yOffset: n
			}), n += 20;
		}
		for (const { tag: l, hole: p, rect: f, yOffset: d } of $) {
			const g = o / 2, u = a.y - 19.2 - d;
			if (f.attr("class", "tag-label-bkg").attr("points", `
      ${s - c / 2 - k / 2},${u + L}  
      ${s - c / 2 - k / 2},${u - L}
      ${a.posWithOffset - c / 2 - k},${u - g - L}
      ${a.posWithOffset + c / 2 + k},${u - g - L}
      ${a.posWithOffset + c / 2 + k},${u + g + L}
      ${a.posWithOffset - c / 2 - k},${u + g + L}`), p.attr("cy", u).attr("cx", s - c / 2 + k / 2).attr("r", 1.5).attr("class", "tag-hole"), y === "TB" || y === "BT") {
				const w = s + d;
				f.attr("class", "tag-label-bkg").attr("points", `
        ${a.x},${w + 2}
        ${a.x},${w - 2}
        ${a.x + R$1},${w - g - 2}
        ${a.x + R$1 + c + 4},${w - g - 2}
        ${a.x + R$1 + c + 4},${w + g + 2}
        ${a.x + R$1},${w + g + 2}`).attr("transform", "translate(12,12) rotate(45, " + a.x + "," + s + ")"), p.attr("cx", a.x + k / 2).attr("cy", w).attr("transform", "translate(12,12) rotate(45, " + a.x + "," + s + ")"), l.attr("x", a.x + 5).attr("y", w + 3).attr("transform", "translate(14,14) rotate(45, " + a.x + "," + s + ")");
			}
		}
	}
}, "drawCommitTags"), Jr = /* @__PURE__ */ m$1((t) => {
	switch (t.customType ?? t.type) {
		case x.NORMAL: return "commit-normal";
		case x.REVERSE: return "commit-reverse";
		case x.HIGHLIGHT: return "commit-highlight";
		case x.MERGE: return "commit-merge";
		case x.CHERRY_PICK: return "commit-cherry-pick";
		default: return "commit-normal";
	}
}, "getCommitClassType"), Qr = /* @__PURE__ */ m$1((t, r, a, s) => {
	const e$1 = {
		x: 0,
		y: 0
	};
	if (t.parents.length > 0) {
		const n = Q(t.parents);
		if (n) {
			const c = s.get(n) ?? e$1;
			return r === "TB" ? c.y + I : r === "BT" ? (s.get(t.id) ?? e$1).y - I : c.x + I;
		}
	} else return r === "TB" ? P : r === "BT" ? (s.get(t.id) ?? e$1).y - I : 0;
	return 0;
}, "calculatePosition"), Zr = /* @__PURE__ */ m$1((t, r, a) => {
	var c, o;
	const s = y === "BT" && a ? r : r + R$1, e$1 = y === "TB" || y === "BT" ? s : (c = C.get(t.branch)) == null ? void 0 : c.pos, n = y === "TB" || y === "BT" ? (o = C.get(t.branch)) == null ? void 0 : o.pos : s;
	if (n === void 0 || e$1 === void 0) throw new Error(`Position were undefined for commit ${t.id}`);
	return {
		x: n,
		y: e$1,
		posWithOffset: s
	};
}, "getCommitPosition"), K = /* @__PURE__ */ m$1((t, r, a) => {
	if (!m$2) throw new Error("GitGraph config not found");
	const s = t.append("g").attr("class", "commit-bullets"), e$1 = t.append("g").attr("class", "commit-labels");
	let n = y === "TB" || y === "BT" ? P : 0;
	const c = [...r.keys()], o = (m$2 == null ? void 0 : m$2.parallelCommits) ?? !1, $ = /* @__PURE__ */ m$1((p, f) => {
		var u, w;
		const d = (u = r.get(p)) == null ? void 0 : u.seq, g = (w = r.get(f)) == null ? void 0 : w.seq;
		return d !== void 0 && g !== void 0 ? d - g : 0;
	}, "sortKeys");
	let l = c.sort($);
	y === "BT" && (o && Dr(l, r, n), l = l.reverse()), l.forEach((p) => {
		var g;
		const f = r.get(p);
		if (!f) throw new Error(`Commit not found for key ${p}`);
		o && (n = Qr(f, y, n, E));
		const d = Zr(f, n, o);
		if (a) {
			const u = Jr(f), w = f.customType ?? f.type;
			_r(s, f, d, u, ((g = C.get(f.branch)) == null ? void 0 : g.index) ?? 0, w), Vr(e$1, f, d, n), Xr(e$1, f, d, n);
		}
		y === "TB" || y === "BT" ? E.set(f.id, {
			x: d.x,
			y: d.posWithOffset
		}) : E.set(f.id, {
			x: d.posWithOffset,
			y: d.y
		}), n = y === "BT" && o ? n + I : n + I + R$1, n > M && (M = n);
	});
}, "drawCommits"), Fr = /* @__PURE__ */ m$1((t, r, a, s, e$1) => {
	const c = (y === "TB" || y === "BT" ? a.x < s.x : a.y < s.y) ? r.branch : t.branch, o = /* @__PURE__ */ m$1((l) => l.branch === c, "isOnBranchToGetCurve"), $ = /* @__PURE__ */ m$1((l) => l.seq > t.seq && l.seq < r.seq, "isBetweenCommits");
	return [...e$1.values()].some((l) => $(l) && o(l));
}, "shouldRerouteArrow"), H = /* @__PURE__ */ m$1((t, r, a = 0) => {
	const s = t + Math.abs(t - r) / 2;
	if (a > 5) return s;
	if (W.every((c) => Math.abs(c - s) >= 10)) return W.push(s), s;
	return H(t, r - Math.abs(t - r) / 5, a + 1);
}, "findLane"), Ur = /* @__PURE__ */ m$1((t, r, a, s) => {
	var g, u, w, q, Y;
	const e$1 = E.get(r.id), n = E.get(a.id);
	if (e$1 === void 0 || n === void 0) throw new Error(`Commit positions not found for commits ${r.id} and ${a.id}`);
	const c = Fr(r, a, e$1, n, s);
	let o = "", $ = "", l = 0, p = 0, f = (g = C.get(a.branch)) == null ? void 0 : g.index;
	a.type === x.MERGE && r.id !== a.parents[0] && (f = (u = C.get(r.branch)) == null ? void 0 : u.index);
	let d;
	if (c) {
		o = "A 10 10, 0, 0, 0,", $ = "A 10 10, 0, 0, 1,", l = 10, p = 10;
		const T = e$1.y < n.y ? H(e$1.y, n.y) : H(n.y, e$1.y), v = e$1.x < n.x ? H(e$1.x, n.x) : H(n.x, e$1.x);
		y === "TB" ? e$1.x < n.x ? d = `M ${e$1.x} ${e$1.y} L ${v - l} ${e$1.y} ${$} ${v} ${e$1.y + p} L ${v} ${n.y - l} ${o} ${v + p} ${n.y} L ${n.x} ${n.y}` : (f = (w = C.get(r.branch)) == null ? void 0 : w.index, d = `M ${e$1.x} ${e$1.y} L ${v + l} ${e$1.y} ${o} ${v} ${e$1.y + p} L ${v} ${n.y - l} ${$} ${v - p} ${n.y} L ${n.x} ${n.y}`) : y === "BT" ? e$1.x < n.x ? d = `M ${e$1.x} ${e$1.y} L ${v - l} ${e$1.y} ${o} ${v} ${e$1.y - p} L ${v} ${n.y + l} ${$} ${v + p} ${n.y} L ${n.x} ${n.y}` : (f = (q = C.get(r.branch)) == null ? void 0 : q.index, d = `M ${e$1.x} ${e$1.y} L ${v + l} ${e$1.y} ${$} ${v} ${e$1.y - p} L ${v} ${n.y + l} ${o} ${v - p} ${n.y} L ${n.x} ${n.y}`) : e$1.y < n.y ? d = `M ${e$1.x} ${e$1.y} L ${e$1.x} ${T - l} ${o} ${e$1.x + p} ${T} L ${n.x - l} ${T} ${$} ${n.x} ${T + p} L ${n.x} ${n.y}` : (f = (Y = C.get(r.branch)) == null ? void 0 : Y.index, d = `M ${e$1.x} ${e$1.y} L ${e$1.x} ${T + l} ${$} ${e$1.x + p} ${T} L ${n.x - l} ${T} ${o} ${n.x} ${T - p} L ${n.x} ${n.y}`);
	} else o = "A 20 20, 0, 0, 0,", $ = "A 20 20, 0, 0, 1,", l = 20, p = 20, y === "TB" ? (e$1.x < n.x && (a.type === x.MERGE && r.id !== a.parents[0] ? d = `M ${e$1.x} ${e$1.y} L ${e$1.x} ${n.y - l} ${o} ${e$1.x + p} ${n.y} L ${n.x} ${n.y}` : d = `M ${e$1.x} ${e$1.y} L ${n.x - l} ${e$1.y} ${$} ${n.x} ${e$1.y + p} L ${n.x} ${n.y}`), e$1.x > n.x && (o = "A 20 20, 0, 0, 0,", $ = "A 20 20, 0, 0, 1,", l = 20, p = 20, a.type === x.MERGE && r.id !== a.parents[0] ? d = `M ${e$1.x} ${e$1.y} L ${e$1.x} ${n.y - l} ${$} ${e$1.x - p} ${n.y} L ${n.x} ${n.y}` : d = `M ${e$1.x} ${e$1.y} L ${n.x + l} ${e$1.y} ${o} ${n.x} ${e$1.y + p} L ${n.x} ${n.y}`), e$1.x === n.x && (d = `M ${e$1.x} ${e$1.y} L ${n.x} ${n.y}`)) : y === "BT" ? (e$1.x < n.x && (a.type === x.MERGE && r.id !== a.parents[0] ? d = `M ${e$1.x} ${e$1.y} L ${e$1.x} ${n.y + l} ${$} ${e$1.x + p} ${n.y} L ${n.x} ${n.y}` : d = `M ${e$1.x} ${e$1.y} L ${n.x - l} ${e$1.y} ${o} ${n.x} ${e$1.y - p} L ${n.x} ${n.y}`), e$1.x > n.x && (o = "A 20 20, 0, 0, 0,", $ = "A 20 20, 0, 0, 1,", l = 20, p = 20, a.type === x.MERGE && r.id !== a.parents[0] ? d = `M ${e$1.x} ${e$1.y} L ${e$1.x} ${n.y + l} ${o} ${e$1.x - p} ${n.y} L ${n.x} ${n.y}` : d = `M ${e$1.x} ${e$1.y} L ${n.x - l} ${e$1.y} ${o} ${n.x} ${e$1.y - p} L ${n.x} ${n.y}`), e$1.x === n.x && (d = `M ${e$1.x} ${e$1.y} L ${n.x} ${n.y}`)) : (e$1.y < n.y && (a.type === x.MERGE && r.id !== a.parents[0] ? d = `M ${e$1.x} ${e$1.y} L ${n.x - l} ${e$1.y} ${$} ${n.x} ${e$1.y + p} L ${n.x} ${n.y}` : d = `M ${e$1.x} ${e$1.y} L ${e$1.x} ${n.y - l} ${o} ${e$1.x + p} ${n.y} L ${n.x} ${n.y}`), e$1.y > n.y && (a.type === x.MERGE && r.id !== a.parents[0] ? d = `M ${e$1.x} ${e$1.y} L ${n.x - l} ${e$1.y} ${o} ${n.x} ${e$1.y - p} L ${n.x} ${n.y}` : d = `M ${e$1.x} ${e$1.y} L ${e$1.x} ${n.y + l} ${$} ${e$1.x + p} ${n.y} L ${n.x} ${n.y}`), e$1.y === n.y && (d = `M ${e$1.x} ${e$1.y} L ${n.x} ${n.y}`));
	if (d === void 0) throw new Error("Line definition not found");
	t.append("path").attr("d", d).attr("class", "arrow arrow" + f % O);
}, "drawArrow"), re = /* @__PURE__ */ m$1((t, r) => {
	const a = t.append("g").attr("class", "commit-arrows");
	[...r.keys()].forEach((s) => {
		const e$1 = r.get(s);
		e$1.parents && e$1.parents.length > 0 && e$1.parents.forEach((n) => {
			Ur(a, r.get(n), e$1, r);
		});
	});
}, "drawArrows"), ee = /* @__PURE__ */ m$1((t, r) => {
	const a = t.append("g");
	r.forEach((s, e$1) => {
		var u;
		const n = e$1 % O, c = (u = C.get(s.name)) == null ? void 0 : u.pos;
		if (c === void 0) throw new Error(`Position not found for branch ${s.name}`);
		const o = a.append("line");
		o.attr("x1", 0), o.attr("y1", c), o.attr("x2", M), o.attr("y2", c), o.attr("class", "branch branch" + n), y === "TB" ? (o.attr("y1", P), o.attr("x1", c), o.attr("y2", M), o.attr("x2", c)) : y === "BT" && (o.attr("y1", M), o.attr("x1", c), o.attr("y2", P), o.attr("x2", c)), W.push(c);
		const $ = s.name, l = J($), p = a.insert("rect"), d = a.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + n);
		d.node().appendChild(l);
		const g = l.getBBox();
		p.attr("class", "branchLabelBkg label" + n).attr("rx", 4).attr("ry", 4).attr("x", -g.width - 4 - ((m$2 == null ? void 0 : m$2.rotateCommitLabel) === !0 ? 30 : 0)).attr("y", -g.height / 2 + 8).attr("width", g.width + 18).attr("height", g.height + 4), d.attr("transform", "translate(" + (-g.width - 14 - ((m$2 == null ? void 0 : m$2.rotateCommitLabel) === !0 ? 30 : 0)) + ", " + (c - g.height / 2 - 1) + ")"), y === "TB" ? (p.attr("x", c - g.width / 2 - 10).attr("y", 0), d.attr("transform", "translate(" + (c - g.width / 2 - 5) + ", 0)")) : y === "BT" ? (p.attr("x", c - g.width / 2 - 10).attr("y", M), d.attr("transform", "translate(" + (c - g.width / 2 - 5) + ", " + M + ")")) : p.attr("transform", "translate(-19, " + (c - g.height / 2) + ")");
	});
}, "drawBranches"), te = /* @__PURE__ */ m$1(function(t, r, a, s, e$1) {
	return C.set(t, {
		pos: r,
		index: a
	}), r += 50 + (e$1 ? 40 : 0) + (y === "TB" || y === "BT" ? s.width / 2 : 0), r;
}, "setBranchPosition"), Gt = {
	parser: Wr,
	db: X,
	renderer: { draw: /* @__PURE__ */ m$1(function(t, r, a, s) {
		if (jr(), R.debug("in gitgraph renderer", t + `
`, "id:", r, a), !m$2) throw new Error("GitGraph config not found");
		const e$1 = m$2.rotateCommitLabel ?? !1, n = s.db;
		G = n.getCommits();
		const c = n.getBranchesAsObjArray();
		y = n.getDirection();
		const o = gt(`[id="${r}"]`);
		let $ = 0;
		c.forEach((l, p) => {
			var q;
			const f = J(l.name), d = o.append("g"), g = d.insert("g").attr("class", "branchLabel"), u = g.insert("g").attr("class", "label branch-label");
			(q = u.node()) == null || q.appendChild(f);
			const w = f.getBBox();
			$ = te(l.name, $, p, w, e$1), u.remove(), g.remove(), d.remove();
		}), K(o, G, !1), m$2.showBranches && ee(o, c), re(o, G), K(o, G, !0), $e.insertTitle(o, "gitTitleText", m$2.titleTopMargin ?? 0, n.getDiagramTitle()), v5(void 0, o, m$2.diagramPadding, m$2.useMaxWidth);
	}, "draw") },
	styles: /* @__PURE__ */ m$1((t) => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7
	].map((r) => `
        .branch-label${r} { fill: ${t["gitBranchLabel" + r]}; }
        .commit${r} { stroke: ${t["git" + r]}; fill: ${t["git" + r]}; }
        .commit-highlight${r} { stroke: ${t["gitInv" + r]}; fill: ${t["gitInv" + r]}; }
        .label${r}  { fill: ${t["git" + r]}; }
        .arrow${r} { stroke: ${t["git" + r]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`, "getStyles")
};
export { Gt as diagram };
