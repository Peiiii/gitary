import "./chakra-ui-NHV_-bGL.js";
import "./react-markdown-14W_w1u6.js";
import "./monaco-De2c8opW.js";
import { _i as select_default, ri as require_dist } from "./app-CHqOxvpb.js";
import { B as utils, E as log$1, It as linear_default, Pt as require_purify, Xt as require_dayjs_min, c as common$1, v as getConfig, w as interpolateToCurve, x as getStylesFromArray, z as setupGraphViewbox$1 } from "./mermaid-b5860b54-tdZQTKtH.js";
import "./path-i3PwAG1d.js";
import "./array-BUZ-AMCX.js";
import "./line-B3bzx1M9.js";
import { t as Graph } from "./graphlib-oiOPKi5Y.js";
import "./clone-LXr1G8oY.js";
import "./createText-2e5e7dd3-D_Z27H6D.js";
import "./edges-e0da2a9e-x7Ix4ajg.js";
import "./dagre-Dsrn4VCH.js";
import { n as parser$1, r as styles, t as db } from "./styles-9a916d00-C9MyO7co.js";
import { t as render } from "./index-3862675e-BaSQP6fm.js";
require_dayjs_min();
require_dist();
require_purify();
var sanitizeText = (txt) => common$1.sanitizeText(txt, getConfig());
var conf = {
	dividerMargin: 10,
	padding: 5,
	textHeight: 10,
	curve: void 0
};
var addNamespaces = function(namespaces, g, _id, diagObj) {
	const keys = Object.keys(namespaces);
	log$1.info("keys:", keys);
	log$1.info(namespaces);
	keys.forEach(function(id) {
		var _a, _b;
		const vertex = namespaces[id];
		const node = {
			shape: "rect",
			id: vertex.id,
			domId: vertex.domId,
			labelText: sanitizeText(vertex.id),
			labelStyle: "",
			style: "fill: none; stroke: black",
			padding: ((_a = getConfig().flowchart) == null ? void 0 : _a.padding) ?? ((_b = getConfig().class) == null ? void 0 : _b.padding)
		};
		g.setNode(vertex.id, node);
		addClasses(vertex.classes, g, _id, diagObj, vertex.id);
		log$1.info("setNode", node);
	});
};
var addClasses = function(classes, g, _id, diagObj, parent) {
	const keys = Object.keys(classes);
	log$1.info("keys:", keys);
	log$1.info(classes);
	keys.filter((id) => classes[id].parent == parent).forEach(function(id) {
		var _a, _b;
		const vertex = classes[id];
		const cssClassStr = vertex.cssClasses.join(" ");
		const styles2 = getStylesFromArray(vertex.styles);
		const vertexText = vertex.label ?? vertex.id;
		const radius = 0;
		const node = {
			labelStyle: styles2.labelStyle,
			shape: "class_box",
			labelText: sanitizeText(vertexText),
			classData: vertex,
			rx: radius,
			ry: radius,
			class: cssClassStr,
			style: styles2.style,
			id: vertex.id,
			domId: vertex.domId,
			tooltip: diagObj.db.getTooltip(vertex.id, parent) || "",
			haveCallback: vertex.haveCallback,
			link: vertex.link,
			width: vertex.type === "group" ? 500 : void 0,
			type: vertex.type,
			padding: ((_a = getConfig().flowchart) == null ? void 0 : _a.padding) ?? ((_b = getConfig().class) == null ? void 0 : _b.padding)
		};
		g.setNode(vertex.id, node);
		if (parent) g.setParent(vertex.id, parent);
		log$1.info("setNode", node);
	});
};
var addNotes = function(notes, g, startEdgeId, classes) {
	log$1.info(notes);
	notes.forEach(function(note, i) {
		var _a, _b;
		const vertex = note;
		const cssNoteStr = "";
		const styles2 = {
			labelStyle: "",
			style: ""
		};
		const vertexText = vertex.text;
		const radius = 0;
		const node = {
			labelStyle: styles2.labelStyle,
			shape: "note",
			labelText: sanitizeText(vertexText),
			noteData: vertex,
			rx: radius,
			ry: radius,
			class: cssNoteStr,
			style: styles2.style,
			id: vertex.id,
			domId: vertex.id,
			tooltip: "",
			type: "note",
			padding: ((_a = getConfig().flowchart) == null ? void 0 : _a.padding) ?? ((_b = getConfig().class) == null ? void 0 : _b.padding)
		};
		g.setNode(vertex.id, node);
		log$1.info("setNode", node);
		if (!vertex.class || !(vertex.class in classes)) return;
		const edgeId = startEdgeId + i;
		const edgeData = {
			id: `edgeNote${edgeId}`,
			classes: "relation",
			pattern: "dotted",
			arrowhead: "none",
			startLabelRight: "",
			endLabelLeft: "",
			arrowTypeStart: "none",
			arrowTypeEnd: "none",
			style: "fill:none",
			labelStyle: "",
			curve: interpolateToCurve(conf.curve, linear_default)
		};
		g.setEdge(vertex.id, vertex.class, edgeData, edgeId);
	});
};
var addRelations = function(relations, g) {
	const conf2 = getConfig().flowchart;
	let cnt = 0;
	relations.forEach(function(edge) {
		var _a;
		cnt++;
		const edgeData = {
			classes: "relation",
			pattern: edge.relation.lineType == 1 ? "dashed" : "solid",
			id: `id_${edge.id1}_${edge.id2}_${cnt}`,
			arrowhead: edge.type === "arrow_open" ? "none" : "normal",
			startLabelRight: edge.relationTitle1 === "none" ? "" : edge.relationTitle1,
			endLabelLeft: edge.relationTitle2 === "none" ? "" : edge.relationTitle2,
			arrowTypeStart: getArrowMarker(edge.relation.type1),
			arrowTypeEnd: getArrowMarker(edge.relation.type2),
			style: "fill:none",
			labelStyle: "",
			curve: interpolateToCurve(conf2 == null ? void 0 : conf2.curve, linear_default)
		};
		log$1.info(edgeData, edge);
		if (edge.style !== void 0) {
			const styles2 = getStylesFromArray(edge.style);
			edgeData.style = styles2.style;
			edgeData.labelStyle = styles2.labelStyle;
		}
		edge.text = edge.title;
		if (edge.text === void 0) {
			if (edge.style !== void 0) edgeData.arrowheadStyle = "fill: #333";
		} else {
			edgeData.arrowheadStyle = "fill: #333";
			edgeData.labelpos = "c";
			if (((_a = getConfig().flowchart) == null ? void 0 : _a.htmlLabels) ?? getConfig().htmlLabels) {
				edgeData.labelType = "html";
				edgeData.label = "<span class=\"edgeLabel\">" + edge.text + "</span>";
			} else {
				edgeData.labelType = "text";
				edgeData.label = edge.text.replace(common$1.lineBreakRegex, "\n");
				if (edge.style === void 0) edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none";
				edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
			}
		}
		g.setEdge(edge.id1, edge.id2, edgeData, cnt);
	});
};
var setConf = function(cnf) {
	conf = {
		...conf,
		...cnf
	};
};
var draw = async function(text, id, _version, diagObj) {
	log$1.info("Drawing class - ", id);
	const conf2 = getConfig().flowchart ?? getConfig().class;
	const securityLevel = getConfig().securityLevel;
	log$1.info("config:", conf2);
	const nodeSpacing = (conf2 == null ? void 0 : conf2.nodeSpacing) ?? 50;
	const rankSpacing = (conf2 == null ? void 0 : conf2.rankSpacing) ?? 50;
	const g = new Graph({
		multigraph: true,
		compound: true
	}).setGraph({
		rankdir: diagObj.db.getDirection(),
		nodesep: nodeSpacing,
		ranksep: rankSpacing,
		marginx: 8,
		marginy: 8
	}).setDefaultEdgeLabel(function() {
		return {};
	});
	const namespaces = diagObj.db.getNamespaces();
	const classes = diagObj.db.getClasses();
	const relations = diagObj.db.getRelations();
	const notes = diagObj.db.getNotes();
	log$1.info(relations);
	addNamespaces(namespaces, g, id, diagObj);
	addClasses(classes, g, id, diagObj);
	addRelations(relations, g);
	addNotes(notes, g, relations.length + 1, classes);
	let sandboxElement;
	if (securityLevel === "sandbox") sandboxElement = select_default("#i" + id);
	const root = securityLevel === "sandbox" ? select_default(sandboxElement.nodes()[0].contentDocument.body) : select_default("body");
	const svg = root.select(`[id="${id}"]`);
	await render(root.select("#" + id + " g"), g, [
		"aggregation",
		"extension",
		"composition",
		"dependency",
		"lollipop"
	], "classDiagram", id);
	utils.insertTitle(svg, "classTitleText", (conf2 == null ? void 0 : conf2.titleTopMargin) ?? 5, diagObj.db.getDiagramTitle());
	setupGraphViewbox$1(g, svg, conf2 == null ? void 0 : conf2.diagramPadding, conf2 == null ? void 0 : conf2.useMaxWidth);
	if (!(conf2 == null ? void 0 : conf2.htmlLabels)) {
		const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
		const labels = doc.querySelectorAll("[id=\"" + id + "\"] .edgeLabel .label");
		for (const label of labels) {
			const dim = label.getBBox();
			const rect = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
			rect.setAttribute("rx", 0);
			rect.setAttribute("ry", 0);
			rect.setAttribute("width", dim.width);
			rect.setAttribute("height", dim.height);
			label.insertBefore(rect, label.firstChild);
		}
	}
};
function getArrowMarker(type) {
	let marker;
	switch (type) {
		case 0:
			marker = "aggregation";
			break;
		case 1:
			marker = "extension";
			break;
		case 2:
			marker = "composition";
			break;
		case 3:
			marker = "dependency";
			break;
		case 4:
			marker = "lollipop";
			break;
		default: marker = "none";
	}
	return marker;
}
var diagram = {
	parser: parser$1,
	db,
	renderer: {
		setConf,
		draw
	},
	styles,
	init: (cnf) => {
		if (!cnf.class) cnf.class = {};
		cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
		db.clear();
	}
};
export { diagram };
