import "./chakra-ui-NHV_-bGL.js";
import "./react-markdown-14W_w1u6.js";
import "./monaco-De2c8opW.js";
import { _i as select_default, ri as require_dist } from "./app-CHqOxvpb.js";
import { B as utils, E as log$1, Pt as require_purify, Xt as require_dayjs_min, c as common$1, u as configureSvgSize, v as getConfig } from "./mermaid-b5860b54-tdZQTKtH.js";
import "./path-i3PwAG1d.js";
import "./array-BUZ-AMCX.js";
import "./line-B3bzx1M9.js";
import { t as Graph } from "./graphlib-oiOPKi5Y.js";
import "./clone-LXr1G8oY.js";
import "./createText-2e5e7dd3-D_Z27H6D.js";
import "./edges-e0da2a9e-x7Ix4ajg.js";
import "./dagre-Dsrn4VCH.js";
import { t as render } from "./index-3862675e-BaSQP6fm.js";
import { a as STMT_STATE, c as styles, i as STMT_RELATION, n as DEFAULT_STATE_TYPE, o as db, r as DIVIDER_TYPE, s as parser$1, t as DEFAULT_NESTED_DOC_DIR } from "./styles-6aaf32cf-CDp_Gx9j.js";
require_dayjs_min();
require_dist();
require_purify();
var SHAPE_STATE = "rect";
var SHAPE_STATE_WITH_DESC = "rectWithTitle";
var SHAPE_START = "start";
var SHAPE_END = "end";
var SHAPE_DIVIDER = "divider";
var SHAPE_GROUP = "roundedWithTitle";
var SHAPE_NOTE = "note";
var SHAPE_NOTEGROUP = "noteGroup";
var CSS_DIAGRAM = "statediagram";
var CSS_DIAGRAM_STATE = `${CSS_DIAGRAM}-state`;
var CSS_EDGE = "transition";
var CSS_NOTE = "note";
var CSS_EDGE_NOTE_EDGE = `${CSS_EDGE} note-edge`;
var CSS_DIAGRAM_NOTE = `${CSS_DIAGRAM}-${CSS_NOTE}`;
var CSS_DIAGRAM_CLUSTER = `${CSS_DIAGRAM}-cluster`;
var CSS_DIAGRAM_CLUSTER_ALT = `${CSS_DIAGRAM}-cluster-alt`;
var PARENT = "parent";
var NOTE = "note";
var DOMID_STATE = "state";
var DOMID_TYPE_SPACER = "----";
var NOTE_ID = `${DOMID_TYPE_SPACER}${NOTE}`;
var PARENT_ID = `${DOMID_TYPE_SPACER}${PARENT}`;
var G_EDGE_STYLE = "fill:none";
var G_EDGE_ARROWHEADSTYLE = "fill: #333";
var G_EDGE_LABELPOS = "c";
var G_EDGE_LABELTYPE = "text";
var G_EDGE_THICKNESS = "normal";
var nodeDb = {};
var graphItemCount = 0;
var setConf = function(cnf) {
	const keys = Object.keys(cnf);
	for (const key of keys) cnf[key];
};
var getClasses = function(text, diagramObj) {
	diagramObj.db.extract(diagramObj.db.getRootDocV2());
	return diagramObj.db.getClasses();
};
function getClassesFromDbInfo(dbInfoItem) {
	if (dbInfoItem === void 0 || dbInfoItem === null) return "";
	else if (dbInfoItem.classes) return dbInfoItem.classes.join(" ");
	else return "";
}
function stateDomId(itemId = "", counter = 0, type = "", typeSpacer = DOMID_TYPE_SPACER) {
	return `${DOMID_STATE}-${itemId}${type !== null && type.length > 0 ? `${typeSpacer}${type}` : ""}-${counter}`;
}
var setupNode = (g, parent, parsedItem, diagramStates, diagramDb, altFlag) => {
	const itemId = parsedItem.id;
	const classStr = getClassesFromDbInfo(diagramStates[itemId]);
	if (itemId !== "root") {
		let shape = SHAPE_STATE;
		if (parsedItem.start === true) shape = SHAPE_START;
		if (parsedItem.start === false) shape = SHAPE_END;
		if (parsedItem.type !== "default") shape = parsedItem.type;
		if (!nodeDb[itemId]) nodeDb[itemId] = {
			id: itemId,
			shape,
			description: common$1.sanitizeText(itemId, getConfig()),
			classes: `${classStr} ${CSS_DIAGRAM_STATE}`
		};
		const newNode = nodeDb[itemId];
		if (parsedItem.description) {
			if (Array.isArray(newNode.description)) {
				newNode.shape = SHAPE_STATE_WITH_DESC;
				newNode.description.push(parsedItem.description);
			} else if (newNode.description.length > 0) {
				newNode.shape = SHAPE_STATE_WITH_DESC;
				if (newNode.description === itemId) newNode.description = [parsedItem.description];
				else newNode.description = [newNode.description, parsedItem.description];
			} else {
				newNode.shape = SHAPE_STATE;
				newNode.description = parsedItem.description;
			}
			newNode.description = common$1.sanitizeTextOrArray(newNode.description, getConfig());
		}
		if (newNode.description.length === 1 && newNode.shape === SHAPE_STATE_WITH_DESC) newNode.shape = SHAPE_STATE;
		if (!newNode.type && parsedItem.doc) {
			log$1.info("Setting cluster for ", itemId, getDir(parsedItem));
			newNode.type = "group";
			newNode.dir = getDir(parsedItem);
			newNode.shape = parsedItem.type === "divider" ? SHAPE_DIVIDER : SHAPE_GROUP;
			newNode.classes = newNode.classes + " " + CSS_DIAGRAM_CLUSTER + " " + (altFlag ? CSS_DIAGRAM_CLUSTER_ALT : "");
		}
		const nodeData = {
			labelStyle: "",
			shape: newNode.shape,
			labelText: newNode.description,
			classes: newNode.classes,
			style: "",
			id: itemId,
			dir: newNode.dir,
			domId: stateDomId(itemId, graphItemCount),
			type: newNode.type,
			padding: 15
		};
		nodeData.centerLabel = true;
		if (parsedItem.note) {
			const noteData = {
				labelStyle: "",
				shape: SHAPE_NOTE,
				labelText: parsedItem.note.text,
				classes: CSS_DIAGRAM_NOTE,
				style: "",
				id: itemId + NOTE_ID + "-" + graphItemCount,
				domId: stateDomId(itemId, graphItemCount, NOTE),
				type: newNode.type,
				padding: 15
			};
			const groupData = {
				labelStyle: "",
				shape: SHAPE_NOTEGROUP,
				labelText: parsedItem.note.text,
				classes: newNode.classes,
				style: "",
				id: itemId + PARENT_ID,
				domId: stateDomId(itemId, graphItemCount, PARENT),
				type: "group",
				padding: 0
			};
			graphItemCount++;
			const parentNodeId = itemId + PARENT_ID;
			g.setNode(parentNodeId, groupData);
			g.setNode(noteData.id, noteData);
			g.setNode(itemId, nodeData);
			g.setParent(itemId, parentNodeId);
			g.setParent(noteData.id, parentNodeId);
			let from = itemId;
			let to = noteData.id;
			if (parsedItem.note.position === "left of") {
				from = noteData.id;
				to = itemId;
			}
			g.setEdge(from, to, {
				arrowhead: "none",
				arrowType: "",
				style: G_EDGE_STYLE,
				labelStyle: "",
				classes: CSS_EDGE_NOTE_EDGE,
				arrowheadStyle: G_EDGE_ARROWHEADSTYLE,
				labelpos: G_EDGE_LABELPOS,
				labelType: G_EDGE_LABELTYPE,
				thickness: G_EDGE_THICKNESS
			});
		} else g.setNode(itemId, nodeData);
	}
	if (parent && parent.id !== "root") {
		log$1.trace("Setting node ", itemId, " to be child of its parent ", parent.id);
		g.setParent(itemId, parent.id);
	}
	if (parsedItem.doc) {
		log$1.trace("Adding nodes children ");
		setupDoc(g, parsedItem, parsedItem.doc, diagramStates, diagramDb, !altFlag);
	}
};
var setupDoc = (g, parentParsedItem, doc, diagramStates, diagramDb, altFlag) => {
	log$1.trace("items", doc);
	doc.forEach((item) => {
		switch (item.stmt) {
			case STMT_STATE:
				setupNode(g, parentParsedItem, item, diagramStates, diagramDb, altFlag);
				break;
			case DEFAULT_STATE_TYPE:
				setupNode(g, parentParsedItem, item, diagramStates, diagramDb, altFlag);
				break;
			case STMT_RELATION:
				{
					setupNode(g, parentParsedItem, item.state1, diagramStates, diagramDb, altFlag);
					setupNode(g, parentParsedItem, item.state2, diagramStates, diagramDb, altFlag);
					const edgeData = {
						id: "edge" + graphItemCount,
						arrowhead: "normal",
						arrowTypeEnd: "arrow_barb",
						style: G_EDGE_STYLE,
						labelStyle: "",
						label: common$1.sanitizeText(item.description, getConfig()),
						arrowheadStyle: G_EDGE_ARROWHEADSTYLE,
						labelpos: G_EDGE_LABELPOS,
						labelType: G_EDGE_LABELTYPE,
						thickness: G_EDGE_THICKNESS,
						classes: CSS_EDGE
					};
					g.setEdge(item.state1.id, item.state2.id, edgeData, graphItemCount);
					graphItemCount++;
				}
				break;
		}
	});
};
var getDir = (parsedItem, defaultDir = "TB") => {
	let dir = defaultDir;
	if (parsedItem.doc) for (let i = 0; i < parsedItem.doc.length; i++) {
		const parsedItemDoc = parsedItem.doc[i];
		if (parsedItemDoc.stmt === "dir") dir = parsedItemDoc.value;
	}
	return dir;
};
var draw = async function(text, id, _version, diag) {
	log$1.info("Drawing state diagram (v2)", id);
	nodeDb = {};
	diag.db.getDirection();
	const { securityLevel, state: conf } = getConfig();
	const nodeSpacing = conf.nodeSpacing || 50;
	const rankSpacing = conf.rankSpacing || 50;
	log$1.info(diag.db.getRootDocV2());
	diag.db.extract(diag.db.getRootDocV2());
	log$1.info(diag.db.getRootDocV2());
	const diagramStates = diag.db.getStates();
	const g = new Graph({
		multigraph: true,
		compound: true
	}).setGraph({
		rankdir: getDir(diag.db.getRootDocV2()),
		nodesep: nodeSpacing,
		ranksep: rankSpacing,
		marginx: 8,
		marginy: 8
	}).setDefaultEdgeLabel(function() {
		return {};
	});
	setupNode(g, void 0, diag.db.getRootDocV2(), diagramStates, diag.db, true);
	let sandboxElement;
	if (securityLevel === "sandbox") sandboxElement = select_default("#i" + id);
	const root = securityLevel === "sandbox" ? select_default(sandboxElement.nodes()[0].contentDocument.body) : select_default("body");
	const svg = root.select(`[id="${id}"]`);
	await render(root.select("#" + id + " g"), g, ["barb"], CSS_DIAGRAM, id);
	const padding = 8;
	utils.insertTitle(svg, "statediagramTitleText", conf.titleTopMargin, diag.db.getDiagramTitle());
	const bounds = svg.node().getBBox();
	const width = bounds.width + padding * 2;
	const height = bounds.height + padding * 2;
	svg.attr("class", CSS_DIAGRAM);
	const svgBounds = svg.node().getBBox();
	configureSvgSize(svg, height, width, conf.useMaxWidth);
	const vBox = `${svgBounds.x - padding} ${svgBounds.y - padding} ${width} ${height}`;
	log$1.debug(`viewBox ${vBox}`);
	svg.attr("viewBox", vBox);
	const labels = document.querySelectorAll("[id=\"" + id + "\"] .edgeLabel .label");
	for (const label of labels) {
		const dim = label.getBBox();
		const rect = document.createElementNS("http://www.w3.org/2000/svg", SHAPE_STATE);
		rect.setAttribute("rx", 0);
		rect.setAttribute("ry", 0);
		rect.setAttribute("width", dim.width);
		rect.setAttribute("height", dim.height);
		label.insertBefore(rect, label.firstChild);
	}
};
var diagram = {
	parser: parser$1,
	db,
	renderer: {
		setConf,
		getClasses,
		draw
	},
	styles,
	init: (cnf) => {
		if (!cnf.state) cnf.state = {};
		cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
		db.clear();
	}
};
export { diagram };
