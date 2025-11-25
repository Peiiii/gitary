import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { F as require_react, P as require_jsx_runtime, w as require_react_dom } from "./chakra-ui-BP0KsvPN.js";
import { k as require_lodash } from "./react-utils-CBnCOsPf.js";
import { t as require_client } from "./vendor-D4MyOtoJ.js";
import "./common-utils-oTrucMut.js";
import "./monaco-DGZQwLgt.js";
import "./react-markdown-CC4NHZ99.js";
import "./remark-gfm-BOrJohj3.js";
import { $n as require_markdown_it_task_lists, $t as iT, Ln as w5, Ot as b5, Qn as require_pinyin, R as Mf, Vn as x5, Wn as y5, cn as lu, dn as m5, er as require_markdown_it_multimd_table, et as R, gt as Xt, nn as k5, un as m, w as If, wi as require_classnames, xt as _5 } from "./app-B8S090XF.js";
import "./_baseUniq-214847ec-BRMVCl18.js";
import "./_basePickBy-f749536a-CDKxA2-c.js";
import "./clone-8a8d8292-DsDaipBQ.js";
import { u as Yy } from "./mermaid-parser.core-ecfcb38d-CCmJPI1-.js";
import { t as m$1 } from "./chunk-4BX2VUAB-df729ba8-YA0ljxtC.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
var L = Mf.packet, b, v = (b = class {
	constructor() {
		this.packet = [], this.setAccTitle = b5, this.getAccTitle = x5, this.setDiagramTitle = w5, this.getDiagramTitle = _5, this.getAccDescription = k5, this.setAccDescription = y5;
	}
	getConfig() {
		const t = lu({
			...L,
			...Xt().packet
		});
		return t.showBits && (t.paddingY += 10), t;
	}
	getPacket() {
		return this.packet;
	}
	pushWord(t) {
		t.length > 0 && this.packet.push(t);
	}
	clear() {
		m5(), this.packet = [];
	}
}, m(b, "PacketDB"), b), M = 1e4, Y = /* @__PURE__ */ m((r, t) => {
	m$1(r, t);
	let i = -1, o = [], p = 1;
	const { bitsPerRow: n } = t.getConfig();
	for (let { start: e, end: s, bits: c, label: l } of r.blocks) {
		if (e !== void 0 && s !== void 0 && s < e) throw new Error(`Packet block ${e} - ${s} is invalid. End must be greater than start.`);
		if (e ?? (e = i + 1), e !== i + 1) throw new Error(`Packet block ${e} - ${s ?? e} is not contiguous. It should start from ${i + 1}.`);
		if (c === 0) throw new Error(`Packet block ${e} is invalid. Cannot have a zero bit field.`);
		for (s ?? (s = e + (c ?? 1) - 1), c ?? (c = s - e + 1), i = s, R.debug(`Packet block ${e} - ${i} with label ${l}`); o.length <= n + 1 && t.getPacket().length < M;) {
			const [m$2, a] = H({
				start: e,
				end: s,
				bits: c,
				label: l
			}, p, n);
			if (o.push(m$2), m$2.end + 1 === p * n && (t.pushWord(o), o = [], p++), !a) break;
			({start: e, end: s, bits: c, label: l} = a);
		}
	}
	t.pushWord(o);
}, "populate"), H = /* @__PURE__ */ m((r, t, i) => {
	if (r.start === void 0) throw new Error("start should have been set during first phase");
	if (r.end === void 0) throw new Error("end should have been set during first phase");
	if (r.start > r.end) throw new Error(`Block start ${r.start} is greater than block end ${r.end}.`);
	if (r.end + 1 <= t * i) return [r, void 0];
	const o = t * i - 1, p = t * i;
	return [{
		start: r.start,
		end: o,
		label: r.label,
		bits: o - r.start
	}, {
		start: p,
		end: r.end,
		label: r.label,
		bits: r.end - p
	}];
}, "getNextFittingBlock"), x = {
	parser: { yy: void 0 },
	parse: /* @__PURE__ */ m(async (r) => {
		var o;
		const t = await Yy("packet", r), i = (o = x.parser) == null ? void 0 : o.yy;
		if (!(i instanceof v)) throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
		R.debug(t), Y(t, i);
	}, "parse")
}, I = /* @__PURE__ */ m((r, t, i, o) => {
	const p = o.db, n = p.getConfig(), { rowHeight: e, paddingY: s, bitWidth: c, bitsPerRow: l } = n, m$2 = p.getPacket(), a = p.getDiagramTitle(), g = e + s, d = g * (m$2.length + 1) - (a ? 0 : e), h = c * l + 2, k = iT(t);
	k.attr("viewbox", `0 0 ${h} ${d}`), If(k, d, h, n.useMaxWidth);
	for (const [y, $] of m$2.entries()) O(k, $, y, n);
	k.append("text").text(a).attr("x", h / 2).attr("y", d - g / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
}, "draw"), O = /* @__PURE__ */ m((r, t, i, { rowHeight: o, paddingX: p, paddingY: n, bitWidth: e, bitsPerRow: s, showBits: c }) => {
	const l = r.append("g"), m$2 = i * (o + n) + n;
	for (const a of t) {
		const g = a.start % s * e + 1, d = (a.end - a.start + 1) * e - p;
		if (l.append("rect").attr("x", g).attr("y", m$2).attr("width", d).attr("height", o).attr("class", "packetBlock"), l.append("text").attr("x", g + d / 2).attr("y", m$2 + o / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(a.label), !c) continue;
		const h = a.end === a.start, k = m$2 - 2;
		l.append("text").attr("x", g + (h ? d / 2 : 0)).attr("y", k).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", h ? "middle" : "start").text(a.start), h || l.append("text").attr("x", g + d).attr("y", k).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(a.end);
	}
}, "drawWord"), j = { draw: I }, G = {
	byteFontSize: "10px",
	startByteColor: "black",
	endByteColor: "black",
	labelColor: "black",
	labelFontSize: "12px",
	titleColor: "black",
	titleFontSize: "14px",
	blockStrokeColor: "black",
	blockStrokeWidth: "1",
	blockFillColor: "#efefef"
}, wr = {
	parser: x,
	get db() {
		return new v();
	},
	renderer: j,
	styles: /* @__PURE__ */ m(({ packet: r } = {}) => {
		const t = lu(G, r);
		return `
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`;
	}, "styles")
};
export { wr as diagram };
