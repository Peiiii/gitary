import "./chakra-ui-NHV_-bGL.js";
import "./monaco-De2c8opW.js";
import { _i as select_default, ri as require_dist } from "./app-CHqOxvpb.js";
import { F as setAccTitle, L as setDiagramTitle, P as setAccDescription, Pt as require_purify, Xt as require_dayjs_min, _ as getAccTitle, b as getDiagramTitle, c as common$1, f as defaultConfig, g as getAccDescription, s as clear, v as getConfig, z as setupGraphViewbox$1 } from "./mermaid-b5860b54-tdZQTKtH.js";
import { t as ordinal } from "./ordinal-CdFd_BCw.js";
import "./init-B8EbwIsk.js";
import { t as Tableau10_default } from "./Tableau10-CL9Zesom.js";
function max(values, valueof) {
	let max$1;
	if (valueof === void 0) {
		for (const value$1 of values) if (value$1 != null && (max$1 < value$1 || max$1 === void 0 && value$1 >= value$1)) max$1 = value$1;
	} else {
		let index = -1;
		for (let value$1 of values) if ((value$1 = valueof(value$1, ++index, values)) != null && (max$1 < value$1 || max$1 === void 0 && value$1 >= value$1)) max$1 = value$1;
	}
	return max$1;
}
function min(values, valueof) {
	let min$1;
	if (valueof === void 0) {
		for (const value$1 of values) if (value$1 != null && (min$1 > value$1 || min$1 === void 0 && value$1 >= value$1)) min$1 = value$1;
	} else {
		let index = -1;
		for (let value$1 of values) if ((value$1 = valueof(value$1, ++index, values)) != null && (min$1 > value$1 || min$1 === void 0 && value$1 >= value$1)) min$1 = value$1;
	}
	return min$1;
}
function sum(values, valueof) {
	let sum$1 = 0;
	if (valueof === void 0) {
		for (let value$1 of values) if (value$1 = +value$1) sum$1 += value$1;
	} else {
		let index = -1;
		for (let value$1 of values) if (value$1 = +valueof(value$1, ++index, values)) sum$1 += value$1;
	}
	return sum$1;
}
function targetDepth(d) {
	return d.target.depth;
}
function left(node) {
	return node.depth;
}
function right(node, n) {
	return n - 1 - node.height;
}
function justify(node, n) {
	return node.sourceLinks.length ? node.depth : n - 1;
}
function center(node) {
	return node.targetLinks.length ? node.depth : node.sourceLinks.length ? min(node.sourceLinks, targetDepth) - 1 : 0;
}
function constant(x$1) {
	return function() {
		return x$1;
	};
}
function ascendingSourceBreadth(a, b) {
	return ascendingBreadth(a.source, b.source) || a.index - b.index;
}
function ascendingTargetBreadth(a, b) {
	return ascendingBreadth(a.target, b.target) || a.index - b.index;
}
function ascendingBreadth(a, b) {
	return a.y0 - b.y0;
}
function value(d) {
	return d.value;
}
function defaultId(d) {
	return d.index;
}
function defaultNodes(graph) {
	return graph.nodes;
}
function defaultLinks(graph) {
	return graph.links;
}
function find(nodeById, id) {
	const node = nodeById.get(id);
	if (!node) throw new Error("missing: " + id);
	return node;
}
function computeLinkBreadths({ nodes: nodes$1 }) {
	for (const node of nodes$1) {
		let y0 = node.y0;
		let y1 = y0;
		for (const link$1 of node.sourceLinks) {
			link$1.y0 = y0 + link$1.width / 2;
			y0 += link$1.width;
		}
		for (const link$1 of node.targetLinks) {
			link$1.y1 = y1 + link$1.width / 2;
			y1 += link$1.width;
		}
	}
}
function Sankey() {
	let x0 = 0, y0 = 0, x1 = 1, y1 = 1;
	let dx = 24;
	let dy = 8, py;
	let id = defaultId;
	let align = justify;
	let sort;
	let linkSort;
	let nodes$1 = defaultNodes;
	let links$1 = defaultLinks;
	let iterations = 6;
	function sankey() {
		const graph = {
			nodes: nodes$1.apply(null, arguments),
			links: links$1.apply(null, arguments)
		};
		computeNodeLinks(graph);
		computeNodeValues(graph);
		computeNodeDepths(graph);
		computeNodeHeights(graph);
		computeNodeBreadths(graph);
		computeLinkBreadths(graph);
		return graph;
	}
	sankey.update = function(graph) {
		computeLinkBreadths(graph);
		return graph;
	};
	sankey.nodeId = function(_) {
		return arguments.length ? (id = typeof _ === "function" ? _ : constant(_), sankey) : id;
	};
	sankey.nodeAlign = function(_) {
		return arguments.length ? (align = typeof _ === "function" ? _ : constant(_), sankey) : align;
	};
	sankey.nodeSort = function(_) {
		return arguments.length ? (sort = _, sankey) : sort;
	};
	sankey.nodeWidth = function(_) {
		return arguments.length ? (dx = +_, sankey) : dx;
	};
	sankey.nodePadding = function(_) {
		return arguments.length ? (dy = py = +_, sankey) : dy;
	};
	sankey.nodes = function(_) {
		return arguments.length ? (nodes$1 = typeof _ === "function" ? _ : constant(_), sankey) : nodes$1;
	};
	sankey.links = function(_) {
		return arguments.length ? (links$1 = typeof _ === "function" ? _ : constant(_), sankey) : links$1;
	};
	sankey.linkSort = function(_) {
		return arguments.length ? (linkSort = _, sankey) : linkSort;
	};
	sankey.size = function(_) {
		return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], sankey) : [x1 - x0, y1 - y0];
	};
	sankey.extent = function(_) {
		return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], sankey) : [[x0, y0], [x1, y1]];
	};
	sankey.iterations = function(_) {
		return arguments.length ? (iterations = +_, sankey) : iterations;
	};
	function computeNodeLinks({ nodes: nodes$2, links: links$2 }) {
		for (const [i, node] of nodes$2.entries()) {
			node.index = i;
			node.sourceLinks = [];
			node.targetLinks = [];
		}
		const nodeById = new Map(nodes$2.map((d, i) => [id(d, i, nodes$2), d]));
		for (const [i, link$1] of links$2.entries()) {
			link$1.index = i;
			let { source, target } = link$1;
			if (typeof source !== "object") source = link$1.source = find(nodeById, source);
			if (typeof target !== "object") target = link$1.target = find(nodeById, target);
			source.sourceLinks.push(link$1);
			target.targetLinks.push(link$1);
		}
		if (linkSort != null) for (const { sourceLinks, targetLinks } of nodes$2) {
			sourceLinks.sort(linkSort);
			targetLinks.sort(linkSort);
		}
	}
	function computeNodeValues({ nodes: nodes$2 }) {
		for (const node of nodes$2) node.value = node.fixedValue === void 0 ? Math.max(sum(node.sourceLinks, value), sum(node.targetLinks, value)) : node.fixedValue;
	}
	function computeNodeDepths({ nodes: nodes$2 }) {
		const n = nodes$2.length;
		let current = new Set(nodes$2);
		let next = /* @__PURE__ */ new Set();
		let x$1 = 0;
		while (current.size) {
			for (const node of current) {
				node.depth = x$1;
				for (const { target } of node.sourceLinks) next.add(target);
			}
			if (++x$1 > n) throw new Error("circular link");
			current = next;
			next = /* @__PURE__ */ new Set();
		}
	}
	function computeNodeHeights({ nodes: nodes$2 }) {
		const n = nodes$2.length;
		let current = new Set(nodes$2);
		let next = /* @__PURE__ */ new Set();
		let x$1 = 0;
		while (current.size) {
			for (const node of current) {
				node.height = x$1;
				for (const { source } of node.targetLinks) next.add(source);
			}
			if (++x$1 > n) throw new Error("circular link");
			current = next;
			next = /* @__PURE__ */ new Set();
		}
	}
	function computeNodeLayers({ nodes: nodes$2 }) {
		const x$1 = max(nodes$2, (d) => d.depth) + 1;
		const kx = (x1 - x0 - dx) / (x$1 - 1);
		const columns = new Array(x$1);
		for (const node of nodes$2) {
			const i = Math.max(0, Math.min(x$1 - 1, Math.floor(align.call(null, node, x$1))));
			node.layer = i;
			node.x0 = x0 + i * kx;
			node.x1 = node.x0 + dx;
			if (columns[i]) columns[i].push(node);
			else columns[i] = [node];
		}
		if (sort) for (const column of columns) column.sort(sort);
		return columns;
	}
	function initializeNodeBreadths(columns) {
		const ky = min(columns, (c) => (y1 - y0 - (c.length - 1) * py) / sum(c, value));
		for (const nodes$2 of columns) {
			let y$1 = y0;
			for (const node of nodes$2) {
				node.y0 = y$1;
				node.y1 = y$1 + node.value * ky;
				y$1 = node.y1 + py;
				for (const link$1 of node.sourceLinks) link$1.width = link$1.value * ky;
			}
			y$1 = (y1 - y$1 + py) / (nodes$2.length + 1);
			for (let i = 0; i < nodes$2.length; ++i) {
				const node = nodes$2[i];
				node.y0 += y$1 * (i + 1);
				node.y1 += y$1 * (i + 1);
			}
			reorderLinks(nodes$2);
		}
	}
	function computeNodeBreadths(graph) {
		const columns = computeNodeLayers(graph);
		py = Math.min(dy, (y1 - y0) / (max(columns, (c) => c.length) - 1));
		initializeNodeBreadths(columns);
		for (let i = 0; i < iterations; ++i) {
			const alpha = Math.pow(.99, i);
			const beta = Math.max(1 - alpha, (i + 1) / iterations);
			relaxRightToLeft(columns, alpha, beta);
			relaxLeftToRight(columns, alpha, beta);
		}
	}
	function relaxLeftToRight(columns, alpha, beta) {
		for (let i = 1, n = columns.length; i < n; ++i) {
			const column = columns[i];
			for (const target of column) {
				let y$1 = 0;
				let w = 0;
				for (const { source, value: value$1 } of target.targetLinks) {
					let v = value$1 * (target.layer - source.layer);
					y$1 += targetTop(source, target) * v;
					w += v;
				}
				if (!(w > 0)) continue;
				let dy$1 = (y$1 / w - target.y0) * alpha;
				target.y0 += dy$1;
				target.y1 += dy$1;
				reorderNodeLinks(target);
			}
			if (sort === void 0) column.sort(ascendingBreadth);
			resolveCollisions(column, beta);
		}
	}
	function relaxRightToLeft(columns, alpha, beta) {
		for (let i = columns.length - 2; i >= 0; --i) {
			const column = columns[i];
			for (const source of column) {
				let y$1 = 0;
				let w = 0;
				for (const { target, value: value$1 } of source.sourceLinks) {
					let v = value$1 * (target.layer - source.layer);
					y$1 += sourceTop(source, target) * v;
					w += v;
				}
				if (!(w > 0)) continue;
				let dy$1 = (y$1 / w - source.y0) * alpha;
				source.y0 += dy$1;
				source.y1 += dy$1;
				reorderNodeLinks(source);
			}
			if (sort === void 0) column.sort(ascendingBreadth);
			resolveCollisions(column, beta);
		}
	}
	function resolveCollisions(nodes$2, alpha) {
		const i = nodes$2.length >> 1;
		const subject = nodes$2[i];
		resolveCollisionsBottomToTop(nodes$2, subject.y0 - py, i - 1, alpha);
		resolveCollisionsTopToBottom(nodes$2, subject.y1 + py, i + 1, alpha);
		resolveCollisionsBottomToTop(nodes$2, y1, nodes$2.length - 1, alpha);
		resolveCollisionsTopToBottom(nodes$2, y0, 0, alpha);
	}
	function resolveCollisionsTopToBottom(nodes$2, y$1, i, alpha) {
		for (; i < nodes$2.length; ++i) {
			const node = nodes$2[i];
			const dy$1 = (y$1 - node.y0) * alpha;
			if (dy$1 > 1e-6) node.y0 += dy$1, node.y1 += dy$1;
			y$1 = node.y1 + py;
		}
	}
	function resolveCollisionsBottomToTop(nodes$2, y$1, i, alpha) {
		for (; i >= 0; --i) {
			const node = nodes$2[i];
			const dy$1 = (node.y1 - y$1) * alpha;
			if (dy$1 > 1e-6) node.y0 -= dy$1, node.y1 -= dy$1;
			y$1 = node.y0 - py;
		}
	}
	function reorderNodeLinks({ sourceLinks, targetLinks }) {
		if (linkSort === void 0) {
			for (const { source: { sourceLinks: sourceLinks$1 } } of targetLinks) sourceLinks$1.sort(ascendingTargetBreadth);
			for (const { target: { targetLinks: targetLinks$1 } } of sourceLinks) targetLinks$1.sort(ascendingSourceBreadth);
		}
	}
	function reorderLinks(nodes$2) {
		if (linkSort === void 0) for (const { sourceLinks, targetLinks } of nodes$2) {
			sourceLinks.sort(ascendingTargetBreadth);
			targetLinks.sort(ascendingSourceBreadth);
		}
	}
	function targetTop(source, target) {
		let y$1 = source.y0 - (source.sourceLinks.length - 1) * py / 2;
		for (const { target: node, width } of source.sourceLinks) {
			if (node === target) break;
			y$1 += width + py;
		}
		for (const { source: node, width } of target.targetLinks) {
			if (node === source) break;
			y$1 -= width;
		}
		return y$1;
	}
	function sourceTop(source, target) {
		let y$1 = target.y0 - (target.targetLinks.length - 1) * py / 2;
		for (const { source: node, width } of target.targetLinks) {
			if (node === source) break;
			y$1 += width + py;
		}
		for (const { target: node, width } of source.sourceLinks) {
			if (node === target) break;
			y$1 -= width;
		}
		return y$1;
	}
	return sankey;
}
var pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
function Path() {
	this._x0 = this._y0 = this._x1 = this._y1 = null;
	this._ = "";
}
function path() {
	return new Path();
}
Path.prototype = path.prototype = {
	constructor: Path,
	moveTo: function(x$1, y$1) {
		this._ += "M" + (this._x0 = this._x1 = +x$1) + "," + (this._y0 = this._y1 = +y$1);
	},
	closePath: function() {
		if (this._x1 !== null) {
			this._x1 = this._x0, this._y1 = this._y0;
			this._ += "Z";
		}
	},
	lineTo: function(x$1, y$1) {
		this._ += "L" + (this._x1 = +x$1) + "," + (this._y1 = +y$1);
	},
	quadraticCurveTo: function(x1, y1, x$1, y$1) {
		this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x$1) + "," + (this._y1 = +y$1);
	},
	bezierCurveTo: function(x1, y1, x2, y2, x$1, y$1) {
		this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x$1) + "," + (this._y1 = +y$1);
	},
	arcTo: function(x1, y1, x2, y2, r) {
		x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
		var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
		if (r < 0) throw new Error("negative radius: " + r);
		if (this._x1 === null) this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
		else if (!(l01_2 > epsilon));
		else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
		else {
			var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
			if (Math.abs(t01 - 1) > epsilon) this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
			this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
		}
	},
	arc: function(x$1, y$1, r, a0, a1, ccw) {
		x$1 = +x$1, y$1 = +y$1, r = +r, ccw = !!ccw;
		var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x$1 + dx, y0 = y$1 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
		if (r < 0) throw new Error("negative radius: " + r);
		if (this._x1 === null) this._ += "M" + x0 + "," + y0;
		else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) this._ += "L" + x0 + "," + y0;
		if (!r) return;
		if (da < 0) da = da % tau + tau;
		if (da > tauEpsilon) this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x$1 - dx) + "," + (y$1 - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
		else if (da > epsilon) this._ += "A" + r + "," + r + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x$1 + r * Math.cos(a1)) + "," + (this._y1 = y$1 + r * Math.sin(a1));
	},
	rect: function(x$1, y$1, w, h) {
		this._ += "M" + (this._x0 = this._x1 = +x$1) + "," + (this._y0 = this._y1 = +y$1) + "h" + +w + "v" + +h + "h" + -w + "Z";
	},
	toString: function() {
		return this._;
	}
};
var path_default = path;
function constant_default(x$1) {
	return function constant$1() {
		return x$1;
	};
}
function x(p) {
	return p[0];
}
function y(p) {
	return p[1];
}
var slice = Array.prototype.slice;
function linkSource(d) {
	return d.source;
}
function linkTarget(d) {
	return d.target;
}
function link(curve) {
	var source = linkSource, target = linkTarget, x$1 = x, y$1 = y, context = null;
	function link$1() {
		var buffer, argv = slice.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
		if (!context) context = buffer = path_default();
		curve(context, +x$1.apply(this, (argv[0] = s, argv)), +y$1.apply(this, argv), +x$1.apply(this, (argv[0] = t, argv)), +y$1.apply(this, argv));
		if (buffer) return context = null, buffer + "" || null;
	}
	link$1.source = function(_) {
		return arguments.length ? (source = _, link$1) : source;
	};
	link$1.target = function(_) {
		return arguments.length ? (target = _, link$1) : target;
	};
	link$1.x = function(_) {
		return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant_default(+_), link$1) : x$1;
	};
	link$1.y = function(_) {
		return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant_default(+_), link$1) : y$1;
	};
	link$1.context = function(_) {
		return arguments.length ? (context = _ == null ? null : _, link$1) : context;
	};
	return link$1;
}
function curveHorizontal(context, x0, y0, x1, y1) {
	context.moveTo(x0, y0);
	context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}
function linkHorizontal() {
	return link(curveHorizontal);
}
function horizontalSource(d) {
	return [d.source.x1, d.y0];
}
function horizontalTarget(d) {
	return [d.target.x0, d.y1];
}
function sankeyLinkHorizontal_default() {
	return linkHorizontal().source(horizontalSource).target(horizontalTarget);
}
require_dayjs_min();
require_dist();
require_purify();
var parser = function() {
	var o = function(k, v, o2, l) {
		for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v);
		return o2;
	}, $V0 = [1, 9], $V1 = [1, 10], $V2 = [
		1,
		5,
		10,
		12
	];
	var parser2 = {
		trace: function trace() {},
		yy: {},
		symbols_: {
			"error": 2,
			"start": 3,
			"SANKEY": 4,
			"NEWLINE": 5,
			"csv": 6,
			"opt_eof": 7,
			"record": 8,
			"csv_tail": 9,
			"EOF": 10,
			"field[source]": 11,
			"COMMA": 12,
			"field[target]": 13,
			"field[value]": 14,
			"field": 15,
			"escaped": 16,
			"non_escaped": 17,
			"DQUOTE": 18,
			"ESCAPED_TEXT": 19,
			"NON_ESCAPED_TEXT": 20,
			"$accept": 0,
			"$end": 1
		},
		terminals_: {
			2: "error",
			4: "SANKEY",
			5: "NEWLINE",
			10: "EOF",
			11: "field[source]",
			12: "COMMA",
			13: "field[target]",
			14: "field[value]",
			18: "DQUOTE",
			19: "ESCAPED_TEXT",
			20: "NON_ESCAPED_TEXT"
		},
		productions_: [
			0,
			[3, 4],
			[6, 2],
			[9, 2],
			[9, 0],
			[7, 1],
			[7, 0],
			[8, 5],
			[15, 1],
			[15, 1],
			[16, 3],
			[17, 1]
		],
		performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
			var $0 = $$.length - 1;
			switch (yystate) {
				case 7:
					const source = yy.findOrCreateNode($$[$0 - 4].trim().replaceAll("\"\"", "\""));
					const target = yy.findOrCreateNode($$[$0 - 2].trim().replaceAll("\"\"", "\""));
					const value$1 = parseFloat($$[$0].trim());
					yy.addLink(source, target, value$1);
					break;
				case 8:
				case 9:
				case 11:
					this.$ = $$[$0];
					break;
				case 10:
					this.$ = $$[$0 - 1];
					break;
			}
		},
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			{ 5: [1, 3] },
			{
				6: 4,
				8: 5,
				15: 6,
				16: 7,
				17: 8,
				18: $V0,
				20: $V1
			},
			{
				1: [2, 6],
				7: 11,
				10: [1, 12]
			},
			o($V1, [2, 4], {
				9: 13,
				5: [1, 14]
			}),
			{ 12: [1, 15] },
			o($V2, [2, 8]),
			o($V2, [2, 9]),
			{ 19: [1, 16] },
			o($V2, [2, 11]),
			{ 1: [2, 1] },
			{ 1: [2, 5] },
			o($V1, [2, 2]),
			{
				6: 17,
				8: 5,
				15: 6,
				16: 7,
				17: 8,
				18: $V0,
				20: $V1
			},
			{
				15: 18,
				16: 7,
				17: 8,
				18: $V0,
				20: $V1
			},
			{ 18: [1, 19] },
			o($V1, [2, 3]),
			{ 12: [1, 20] },
			o($V2, [2, 10]),
			{
				15: 21,
				16: 7,
				17: 8,
				18: $V0,
				20: $V1
			},
			o([
				1,
				5,
				10
			], [2, 7])
		],
		defaultActions: {
			11: [2, 1],
			12: [2, 5]
		},
		parseError: function parseError(str, hash) {
			if (hash.recoverable) this.trace(str);
			else {
				var error = new Error(str);
				error.hash = hash;
				throw error;
			}
		},
		parse: function parse(input) {
			var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, TERROR = 2, EOF = 1;
			var args = lstack.slice.call(arguments, 1);
			var lexer2 = Object.create(this.lexer);
			var sharedState = { yy: {} };
			for (var k in this.yy) if (Object.prototype.hasOwnProperty.call(this.yy, k)) sharedState.yy[k] = this.yy[k];
			lexer2.setInput(input, sharedState.yy);
			sharedState.yy.lexer = lexer2;
			sharedState.yy.parser = this;
			if (typeof lexer2.yylloc == "undefined") lexer2.yylloc = {};
			var yyloc = lexer2.yylloc;
			lstack.push(yyloc);
			var ranges = lexer2.options && lexer2.options.ranges;
			if (typeof sharedState.yy.parseError === "function") this.parseError = sharedState.yy.parseError;
			else this.parseError = Object.getPrototypeOf(this).parseError;
			function lex() {
				var token = tstack.pop() || lexer2.lex() || EOF;
				if (typeof token !== "number") {
					if (token instanceof Array) {
						tstack = token;
						token = tstack.pop();
					}
					token = self.symbols_[token] || token;
				}
				return token;
			}
			var symbol, state, action, r, yyval = {}, p, len, newState, expected;
			while (true) {
				state = stack[stack.length - 1];
				if (this.defaultActions[state]) action = this.defaultActions[state];
				else {
					if (symbol === null || typeof symbol == "undefined") symbol = lex();
					action = table[state] && table[state][symbol];
				}
				if (typeof action === "undefined" || !action.length || !action[0]) {
					var errStr = "";
					expected = [];
					for (p in table[state]) if (this.terminals_[p] && p > TERROR) expected.push("'" + this.terminals_[p] + "'");
					if (lexer2.showPosition) errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
					else errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
					this.parseError(errStr, {
						text: lexer2.match,
						token: this.terminals_[symbol] || symbol,
						line: lexer2.yylineno,
						loc: yyloc,
						expected
					});
				}
				if (action[0] instanceof Array && action.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
				switch (action[0]) {
					case 1:
						stack.push(symbol);
						vstack.push(lexer2.yytext);
						lstack.push(lexer2.yylloc);
						stack.push(action[1]);
						symbol = null;
						yyleng = lexer2.yyleng;
						yytext = lexer2.yytext;
						yylineno = lexer2.yylineno;
						yyloc = lexer2.yylloc;
						break;
					case 2:
						len = this.productions_[action[1]][1];
						yyval.$ = vstack[vstack.length - len];
						yyval._$ = {
							first_line: lstack[lstack.length - (len || 1)].first_line,
							last_line: lstack[lstack.length - 1].last_line,
							first_column: lstack[lstack.length - (len || 1)].first_column,
							last_column: lstack[lstack.length - 1].last_column
						};
						if (ranges) yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
						r = this.performAction.apply(yyval, [
							yytext,
							yyleng,
							yylineno,
							sharedState.yy,
							action[1],
							vstack,
							lstack
						].concat(args));
						if (typeof r !== "undefined") return r;
						if (len) {
							stack = stack.slice(0, -1 * len * 2);
							vstack = vstack.slice(0, -1 * len);
							lstack = lstack.slice(0, -1 * len);
						}
						stack.push(this.productions_[action[1]][0]);
						vstack.push(yyval.$);
						lstack.push(yyval._$);
						newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
						stack.push(newState);
						break;
					case 3: return true;
				}
			}
			return true;
		}
	};
	parser2.lexer = function() {
		return {
			EOF: 1,
			parseError: function parseError(str, hash) {
				if (this.yy.parser) this.yy.parser.parseError(str, hash);
				else throw new Error(str);
			},
			setInput: function(input, yy) {
				this.yy = yy || this.yy || {};
				this._input = input;
				this._more = this._backtrack = this.done = false;
				this.yylineno = this.yyleng = 0;
				this.yytext = this.matched = this.match = "";
				this.conditionStack = ["INITIAL"];
				this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				};
				if (this.options.ranges) this.yylloc.range = [0, 0];
				this.offset = 0;
				return this;
			},
			input: function() {
				var ch = this._input[0];
				this.yytext += ch;
				this.yyleng++;
				this.offset++;
				this.match += ch;
				this.matched += ch;
				if (ch.match(/(?:\r\n?|\n).*/g)) {
					this.yylineno++;
					this.yylloc.last_line++;
				} else this.yylloc.last_column++;
				if (this.options.ranges) this.yylloc.range[1]++;
				this._input = this._input.slice(1);
				return ch;
			},
			unput: function(ch) {
				var len = ch.length;
				var lines = ch.split(/(?:\r\n?|\n)/g);
				this._input = ch + this._input;
				this.yytext = this.yytext.substr(0, this.yytext.length - len);
				this.offset -= len;
				var oldLines = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1);
				this.matched = this.matched.substr(0, this.matched.length - 1);
				if (lines.length - 1) this.yylineno -= lines.length - 1;
				var r = this.yylloc.range;
				this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
				};
				if (this.options.ranges) this.yylloc.range = [r[0], r[0] + this.yyleng - len];
				this.yyleng = this.yytext.length;
				return this;
			},
			more: function() {
				this._more = true;
				return this;
			},
			reject: function() {
				if (this.options.backtrack_lexer) this._backtrack = true;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			},
			less: function(n) {
				this.unput(this.match.slice(n));
			},
			pastInput: function() {
				var past = this.matched.substr(0, this.matched.length - this.match.length);
				return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
			},
			upcomingInput: function() {
				var next = this.match;
				if (next.length < 20) next += this._input.substr(0, 20 - next.length);
				return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
			},
			showPosition: function() {
				var pre = this.pastInput();
				var c = new Array(pre.length + 1).join("-");
				return pre + this.upcomingInput() + "\n" + c + "^";
			},
			test_match: function(match, indexed_rule) {
				var token, lines, backup;
				if (this.options.backtrack_lexer) {
					backup = {
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
					};
					if (this.options.ranges) backup.yylloc.range = this.yylloc.range.slice(0);
				}
				lines = match[0].match(/(?:\r\n?|\n).*/g);
				if (lines) this.yylineno += lines.length;
				this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
				};
				this.yytext += match[0];
				this.match += match[0];
				this.matches = match;
				this.yyleng = this.yytext.length;
				if (this.options.ranges) this.yylloc.range = [this.offset, this.offset += this.yyleng];
				this._more = false;
				this._backtrack = false;
				this._input = this._input.slice(match[0].length);
				this.matched += match[0];
				token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
				if (this.done && this._input) this.done = false;
				if (token) return token;
				else if (this._backtrack) {
					for (var k in backup) this[k] = backup[k];
					return false;
				}
				return false;
			},
			next: function() {
				if (this.done) return this.EOF;
				if (!this._input) this.done = true;
				var token, match, tempMatch, index;
				if (!this._more) {
					this.yytext = "";
					this.match = "";
				}
				var rules = this._currentRules();
				for (var i = 0; i < rules.length; i++) {
					tempMatch = this._input.match(this.rules[rules[i]]);
					if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
						match = tempMatch;
						index = i;
						if (this.options.backtrack_lexer) {
							token = this.test_match(tempMatch, rules[i]);
							if (token !== false) return token;
							else if (this._backtrack) {
								match = false;
								continue;
							} else return false;
						} else if (!this.options.flex) break;
					}
				}
				if (match) {
					token = this.test_match(match, rules[index]);
					if (token !== false) return token;
					return false;
				}
				if (this._input === "") return this.EOF;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			},
			lex: function lex() {
				var r = this.next();
				if (r) return r;
				else return this.lex();
			},
			begin: function begin(condition) {
				this.conditionStack.push(condition);
			},
			popState: function popState() {
				if (this.conditionStack.length - 1 > 0) return this.conditionStack.pop();
				else return this.conditionStack[0];
			},
			_currentRules: function _currentRules() {
				if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
				else return this.conditions["INITIAL"].rules;
			},
			topState: function topState(n) {
				n = this.conditionStack.length - 1 - Math.abs(n || 0);
				if (n >= 0) return this.conditionStack[n];
				else return "INITIAL";
			},
			pushState: function pushState(condition) {
				this.begin(condition);
			},
			stateStackSize: function stateStackSize() {
				return this.conditionStack.length;
			},
			options: { "case-insensitive": true },
			performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
				switch ($avoiding_name_collisions) {
					case 0:
						this.pushState("csv");
						return 4;
					case 1: return 10;
					case 2: return 5;
					case 3: return 12;
					case 4:
						this.pushState("escaped_text");
						return 18;
					case 5: return 20;
					case 6:
						this.popState("escaped_text");
						return 18;
					case 7: return 19;
				}
			},
			rules: [
				/^(?:sankey-beta\b)/i,
				/^(?:$)/i,
				/^(?:((\u000D\u000A)|(\u000A)))/i,
				/^(?:(\u002C))/i,
				/^(?:(\u0022))/i,
				/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,
				/^(?:(\u0022)(?!(\u0022)))/i,
				/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i
			],
			conditions: {
				"csv": {
					"rules": [
						1,
						2,
						3,
						4,
						5,
						6,
						7
					],
					"inclusive": false
				},
				"escaped_text": {
					"rules": [6, 7],
					"inclusive": false
				},
				"INITIAL": {
					"rules": [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7
					],
					"inclusive": true
				}
			}
		};
	}();
	function Parser() {
		this.yy = {};
	}
	Parser.prototype = parser2;
	parser2.Parser = Parser;
	return new Parser();
}();
parser.parser = parser;
var parser$1 = parser;
var links = [];
var nodes = [];
var nodesMap = {};
var clear$1 = () => {
	links = [];
	nodes = [];
	nodesMap = {};
	clear();
};
var SankeyLink = class {
	constructor(source, target, value$1 = 0) {
		this.source = source;
		this.target = target;
		this.value = value$1;
	}
};
var addLink = (source, target, value$1) => {
	links.push(new SankeyLink(source, target, value$1));
};
var SankeyNode = class {
	constructor(ID) {
		this.ID = ID;
	}
};
var findOrCreateNode = (ID) => {
	ID = common$1.sanitizeText(ID, getConfig());
	if (!nodesMap[ID]) {
		nodesMap[ID] = new SankeyNode(ID);
		nodes.push(nodesMap[ID]);
	}
	return nodesMap[ID];
};
var getNodes = () => nodes;
var getLinks = () => links;
var getGraph = () => ({
	nodes: nodes.map((node) => ({ id: node.ID })),
	links: links.map((link$1) => ({
		source: link$1.source.ID,
		target: link$1.target.ID,
		value: link$1.value
	}))
});
var db = {
	nodesMap,
	getConfig: () => getConfig().sankey,
	getNodes,
	getLinks,
	getGraph,
	addLink,
	findOrCreateNode,
	getAccTitle,
	setAccTitle,
	getAccDescription,
	setAccDescription,
	getDiagramTitle,
	setDiagramTitle,
	clear: clear$1
};
var _Uid = class _Uid2 {
	static next(name) {
		return new _Uid2(name + ++_Uid2.count);
	}
	constructor(id) {
		this.id = id;
		this.href = `#${id}`;
	}
	toString() {
		return "url(" + this.href + ")";
	}
};
_Uid.count = 0;
var Uid = _Uid;
var alignmentsMap = {
	left,
	right,
	center,
	justify
};
var draw = function(text, id, _version, diagObj) {
	const { securityLevel, sankey: conf } = getConfig();
	const defaultSankeyConfig = defaultConfig.sankey;
	let sandboxElement;
	if (securityLevel === "sandbox") sandboxElement = select_default("#i" + id);
	const root = securityLevel === "sandbox" ? select_default(sandboxElement.nodes()[0].contentDocument.body) : select_default("body");
	const svg = securityLevel === "sandbox" ? root.select(`[id="${id}"]`) : select_default(`[id="${id}"]`);
	const width = (conf == null ? void 0 : conf.width) ?? defaultSankeyConfig.width;
	const height = (conf == null ? void 0 : conf.height) ?? defaultSankeyConfig.width;
	const useMaxWidth = (conf == null ? void 0 : conf.useMaxWidth) ?? defaultSankeyConfig.useMaxWidth;
	const nodeAlignment = (conf == null ? void 0 : conf.nodeAlignment) ?? defaultSankeyConfig.nodeAlignment;
	const prefix = (conf == null ? void 0 : conf.prefix) ?? defaultSankeyConfig.prefix;
	const suffix = (conf == null ? void 0 : conf.suffix) ?? defaultSankeyConfig.suffix;
	const showValues = (conf == null ? void 0 : conf.showValues) ?? defaultSankeyConfig.showValues;
	const graph = diagObj.db.getGraph();
	const nodeAlign = alignmentsMap[nodeAlignment];
	Sankey().nodeId((d) => d.id).nodeWidth(10).nodePadding(10 + (showValues ? 15 : 0)).nodeAlign(nodeAlign).extent([[0, 0], [width, height]])(graph);
	const colorScheme = ordinal(Tableau10_default);
	svg.append("g").attr("class", "nodes").selectAll(".node").data(graph.nodes).join("g").attr("class", "node").attr("id", (d) => (d.uid = Uid.next("node-")).id).attr("transform", function(d) {
		return "translate(" + d.x0 + "," + d.y0 + ")";
	}).attr("x", (d) => d.x0).attr("y", (d) => d.y0).append("rect").attr("height", (d) => {
		return d.y1 - d.y0;
	}).attr("width", (d) => d.x1 - d.x0).attr("fill", (d) => colorScheme(d.id));
	const getText = ({ id: id2, value: value$1 }) => {
		if (!showValues) return id2;
		return `${id2}
${prefix}${Math.round(value$1 * 100) / 100}${suffix}`;
	};
	svg.append("g").attr("class", "node-labels").attr("font-family", "sans-serif").attr("font-size", 14).selectAll("text").data(graph.nodes).join("text").attr("x", (d) => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6).attr("y", (d) => (d.y1 + d.y0) / 2).attr("dy", `${showValues ? "0" : "0.35"}em`).attr("text-anchor", (d) => d.x0 < width / 2 ? "start" : "end").text(getText);
	const link$1 = svg.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", .5).selectAll(".link").data(graph.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply");
	const linkColor = (conf == null ? void 0 : conf.linkColor) || "gradient";
	if (linkColor === "gradient") {
		const gradient = link$1.append("linearGradient").attr("id", (d) => (d.uid = Uid.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", (d) => d.source.x1).attr("x2", (d) => d.target.x0);
		gradient.append("stop").attr("offset", "0%").attr("stop-color", (d) => colorScheme(d.source.id));
		gradient.append("stop").attr("offset", "100%").attr("stop-color", (d) => colorScheme(d.target.id));
	}
	let coloring;
	switch (linkColor) {
		case "gradient":
			coloring = (d) => d.uid;
			break;
		case "source":
			coloring = (d) => colorScheme(d.source.id);
			break;
		case "target":
			coloring = (d) => colorScheme(d.target.id);
			break;
		default: coloring = linkColor;
	}
	link$1.append("path").attr("d", sankeyLinkHorizontal_default()).attr("stroke", coloring).attr("stroke-width", (d) => Math.max(1, d.width));
	setupGraphViewbox$1(void 0, svg, 0, useMaxWidth);
};
var renderer = { draw };
var prepareTextForParsing = (text) => {
	return text.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, "\n").trim();
};
var originalParse = parser$1.parse.bind(parser$1);
parser$1.parse = (text) => originalParse(prepareTextForParsing(text));
var diagram = {
	parser: parser$1,
	db,
	renderer
};
export { diagram };
