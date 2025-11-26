import { t as __commonJSMin } from "./rolldown-runtime-p26lAE5v.js";
import "./chakra-ui-NHV_-bGL.js";
import { t as nanoid } from "./common-utils-BCFfNPpf.js";
import "./monaco-De2c8opW.js";
import { D as mermaid } from "./mermaid-b5860b54-tdZQTKtH.js";
const SVG_TO_SHAPE_MAPPER = {
	rect: "rectangle",
	circle: "ellipse"
};
const MERMAID_CONFIG = {
	startOnLoad: false,
	flowchart: { curve: "linear" },
	themeVariables: { fontSize: `${20 * 1.25}px` },
	maxEdges: 500,
	maxTextSize: 5e4
};
var GraphConverter = class {
	constructor({ converter }) {
		this.convert = (graph, config) => {
			return this.converter(graph, {
				...config,
				fontSize: config.fontSize || 20
			});
		};
		this.converter = converter;
	}
};
var VERTEX_TYPE;
(function(VERTEX_TYPE$1) {
	VERTEX_TYPE$1["ROUND"] = "round";
	VERTEX_TYPE$1["STADIUM"] = "stadium";
	VERTEX_TYPE$1["DOUBLECIRCLE"] = "doublecircle";
	VERTEX_TYPE$1["CIRCLE"] = "circle";
	VERTEX_TYPE$1["DIAMOND"] = "diamond";
})(VERTEX_TYPE || (VERTEX_TYPE = {}));
var LABEL_STYLE_PROPERTY;
(function(LABEL_STYLE_PROPERTY$1) {
	LABEL_STYLE_PROPERTY$1["COLOR"] = "color";
})(LABEL_STYLE_PROPERTY || (LABEL_STYLE_PROPERTY = {}));
var CONTAINER_STYLE_PROPERTY;
(function(CONTAINER_STYLE_PROPERTY$1) {
	CONTAINER_STYLE_PROPERTY$1["FILL"] = "fill";
	CONTAINER_STYLE_PROPERTY$1["STROKE"] = "stroke";
	CONTAINER_STYLE_PROPERTY$1["STROKE_WIDTH"] = "stroke-width";
	CONTAINER_STYLE_PROPERTY$1["STROKE_DASHARRAY"] = "stroke-dasharray";
})(CONTAINER_STYLE_PROPERTY || (CONTAINER_STYLE_PROPERTY = {}));
var import_dist = (/* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.removeMarkdown = void 0;
	var removeMarkdown$1 = function(markdown, options) {
		if (options === void 0) options = { listUnicodeChar: "" };
		options = options || {};
		options.listUnicodeChar = options.hasOwnProperty("listUnicodeChar") ? options.listUnicodeChar : false;
		options.stripListLeaders = options.hasOwnProperty("stripListLeaders") ? options.stripListLeaders : true;
		options.gfm = options.hasOwnProperty("gfm") ? options.gfm : true;
		options.useImgAltText = options.hasOwnProperty("useImgAltText") ? options.useImgAltText : true;
		options.preserveLinks = options.hasOwnProperty("preserveLinks") ? options.preserveLinks : false;
		var output = markdown || "";
		output = output.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, "");
		try {
			if (options.stripListLeaders) if (options.listUnicodeChar) output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, options.listUnicodeChar + " $1");
			else output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1");
			if (options.gfm) output = output.replace(/\n={2,}/g, "\n").replace(/~{3}.*\n/g, "").replace(/~~/g, "").replace(/`{3}.*\n/g, "");
			if (options.preserveLinks) output = output.replace(/\[(.*?)\][\[\(](.*?)[\]\)]/g, "$1 ($2)");
			output = output.replace(/<[^>]*>/g, "").replace(/^[=\-]{2,}\s*$/g, "").replace(/\[\^.+?\](\: .*?$)?/g, "").replace(/\s{0,2}\[.*?\]: .*?$/g, "").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, options.useImgAltText ? "$1" : "").replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1").replace(/^\s{0,3}>\s?/g, "").replace(/(^|\n)\s{0,3}>\s?/g, "\n\n").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm, "$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/(`{3,})(.*?)\1/gm, "$2").replace(/`(.+?)`/g, "$1").replace(/\n{2,}/g, "\n\n");
		} catch (e) {
			console.error(e);
			return markdown;
		}
		return output;
	};
	exports.removeMarkdown = removeMarkdown$1;
})))();
var MERMAID_EDGE_TYPE_MAPPER = {
	arrow_circle: { endArrowhead: "dot" },
	arrow_cross: { endArrowhead: "bar" },
	arrow_open: {
		endArrowhead: null,
		startArrowhead: null
	},
	double_arrow_circle: {
		endArrowhead: "dot",
		startArrowhead: "dot"
	},
	double_arrow_cross: {
		endArrowhead: "bar",
		startArrowhead: "bar"
	},
	double_arrow_point: {
		endArrowhead: "arrow",
		startArrowhead: "arrow"
	}
};
const computeExcalidrawArrowType = (mermaidArrowType) => {
	return MERMAID_EDGE_TYPE_MAPPER[mermaidArrowType];
};
const getText = (element) => {
	let text = element.text;
	if (element.labelType === "markdown") text = (0, import_dist.removeMarkdown)(element.text);
	return removeFontAwesomeIcons(text);
};
var removeFontAwesomeIcons = (input) => {
	return input.replace(/\s?(fa|fab):[a-zA-Z0-9-]+/g, "");
};
const computeExcalidrawVertexStyle = (style) => {
	const excalidrawProperty = {};
	Object.keys(style).forEach((property) => {
		switch (property) {
			case CONTAINER_STYLE_PROPERTY.FILL:
				excalidrawProperty.backgroundColor = style[property];
				excalidrawProperty.fillStyle = "solid";
				break;
			case CONTAINER_STYLE_PROPERTY.STROKE:
				excalidrawProperty.strokeColor = style[property];
				break;
			case CONTAINER_STYLE_PROPERTY.STROKE_WIDTH:
				excalidrawProperty.strokeWidth = Number(style[property]?.split("px")[0]);
				break;
			case CONTAINER_STYLE_PROPERTY.STROKE_DASHARRAY:
				excalidrawProperty.strokeStyle = "dashed";
				break;
		}
	});
	return excalidrawProperty;
};
const computeExcalidrawVertexLabelStyle = (style) => {
	const excalidrawProperty = {};
	Object.keys(style).forEach((property) => {
		switch (property) {
			case LABEL_STYLE_PROPERTY.COLOR:
				excalidrawProperty.strokeColor = style[property];
				break;
		}
	});
	return excalidrawProperty;
};
var computeGroupIds = (graph) => {
	const tree = {};
	graph.subGraphs.map((subGraph) => {
		subGraph.nodeIds.forEach((nodeId) => {
			tree[subGraph.id] = {
				id: subGraph.id,
				parent: null,
				isLeaf: false
			};
			tree[nodeId] = {
				id: nodeId,
				parent: subGraph.id,
				isLeaf: graph.vertices[nodeId] !== void 0
			};
		});
	});
	const mapper = {};
	[...Object.keys(graph.vertices), ...graph.subGraphs.map((c) => c.id)].forEach((id) => {
		if (!tree[id]) return;
		let curr = tree[id];
		const groupIds = [];
		if (!curr.isLeaf) groupIds.push(`subgraph_group_${curr.id}`);
		while (true) if (curr.parent) {
			groupIds.push(`subgraph_group_${curr.parent}`);
			curr = tree[curr.parent];
		} else break;
		mapper[id] = groupIds;
	});
	return {
		getGroupIds: (elementId) => {
			return mapper[elementId] || [];
		},
		getParentId: (elementId) => {
			return tree[elementId] ? tree[elementId].parent : null;
		}
	};
};
const FlowchartToExcalidrawSkeletonConverter = new GraphConverter({ converter: (graph, options) => {
	const elements = [];
	const fontSize = options.fontSize;
	const { getGroupIds, getParentId } = computeGroupIds(graph);
	graph.subGraphs.reverse().forEach((subGraph) => {
		const groupIds = getGroupIds(subGraph.id);
		const containerElement = {
			id: subGraph.id,
			type: "rectangle",
			groupIds,
			x: subGraph.x,
			y: subGraph.y,
			width: subGraph.width,
			height: subGraph.height,
			label: {
				groupIds,
				text: getText(subGraph),
				fontSize,
				verticalAlign: "top"
			}
		};
		elements.push(containerElement);
	});
	Object.values(graph.vertices).forEach((vertex) => {
		if (!vertex) return;
		const groupIds = getGroupIds(vertex.id);
		const containerStyle = computeExcalidrawVertexStyle(vertex.containerStyle);
		const labelStyle = computeExcalidrawVertexLabelStyle(vertex.labelStyle);
		let containerElement = {
			id: vertex.id,
			type: "rectangle",
			groupIds,
			x: vertex.x,
			y: vertex.y,
			width: vertex.width,
			height: vertex.height,
			strokeWidth: 2,
			label: {
				groupIds,
				text: getText(vertex),
				fontSize,
				...labelStyle
			},
			link: vertex.link || null,
			...containerStyle
		};
		switch (vertex.type) {
			case VERTEX_TYPE.STADIUM:
				containerElement = {
					...containerElement,
					roundness: { type: 3 }
				};
				break;
			case VERTEX_TYPE.ROUND:
				containerElement = {
					...containerElement,
					roundness: { type: 3 }
				};
				break;
			case VERTEX_TYPE.DOUBLECIRCLE: {
				const CIRCLE_MARGIN = 5;
				groupIds.push(`doublecircle_${vertex.id}}`);
				const innerCircle = {
					type: "ellipse",
					groupIds,
					x: vertex.x + CIRCLE_MARGIN,
					y: vertex.y + CIRCLE_MARGIN,
					width: vertex.width - CIRCLE_MARGIN * 2,
					height: vertex.height - CIRCLE_MARGIN * 2,
					strokeWidth: 2,
					roundness: { type: 3 },
					label: {
						groupIds,
						text: getText(vertex),
						fontSize
					}
				};
				containerElement = {
					...containerElement,
					groupIds,
					type: "ellipse"
				};
				elements.push(innerCircle);
				break;
			}
			case VERTEX_TYPE.CIRCLE:
				containerElement.type = "ellipse";
				break;
			case VERTEX_TYPE.DIAMOND:
				containerElement.type = "diamond";
				break;
		}
		elements.push(containerElement);
	});
	graph.edges.forEach((edge) => {
		let groupIds = [];
		const startParentId = getParentId(edge.start);
		const endParentId = getParentId(edge.end);
		if (startParentId && startParentId === endParentId) groupIds = getGroupIds(startParentId);
		const { startX, startY, reflectionPoints } = edge;
		const points = reflectionPoints.map((point) => [point.x - reflectionPoints[0].x, point.y - reflectionPoints[0].y]);
		const arrowType = computeExcalidrawArrowType(edge.type);
		const containerElement = {
			id: `${edge.start}_${edge.end}`,
			type: "arrow",
			groupIds,
			x: startX,
			y: startY,
			strokeWidth: edge.stroke === "thick" ? 4 : 2,
			strokeStyle: edge.stroke === "dotted" ? "dashed" : void 0,
			points,
			...edge.text ? { label: {
				text: getText(edge),
				fontSize,
				groupIds
			} } : {},
			roundness: { type: 2 },
			...arrowType
		};
		const startVertex = elements.find((e) => e.id === edge.start);
		const endVertex = elements.find((e) => e.id === edge.end);
		if (!startVertex || !endVertex) return;
		containerElement.start = { id: startVertex.id || "" };
		containerElement.end = { id: endVertex.id || "" };
		elements.push(containerElement);
	});
	return { elements };
} });
const GraphImageConverter = new GraphConverter({ converter: (graph) => {
	const imageId = nanoid();
	const { width, height } = graph;
	const imageElement = {
		type: "image",
		x: 0,
		y: 0,
		width,
		height,
		status: "saved",
		fileId: imageId
	};
	return {
		files: { [imageId]: {
			id: imageId,
			mimeType: graph.mimeType,
			dataURL: graph.dataURL
		} },
		elements: [imageElement]
	};
} });
const normalizeText = (text) => {
	return text.replace(/\\n/g, "\n");
};
const transformToExcalidrawLineSkeleton = (line) => {
	const lineElement = {
		type: "line",
		x: line.startX,
		y: line.startY,
		points: [[0, 0], [line.endX - line.startX, line.endY - line.startY]],
		width: line.endX - line.startX,
		height: line.endY - line.startY,
		strokeStyle: line.strokeStyle || "solid",
		strokeColor: line.strokeColor || "#000",
		strokeWidth: line.strokeWidth || 1
	};
	if (line.groupId) Object.assign(lineElement, { groupIds: [line.groupId] });
	if (line.id) Object.assign(lineElement, { id: line.id });
	return lineElement;
};
const transformToExcalidrawTextSkeleton = (element) => {
	const textElement = {
		type: "text",
		x: element.x,
		y: element.y,
		width: element.width,
		height: element.height,
		text: normalizeText(element.text) || "",
		fontSize: element.fontSize,
		verticalAlign: "middle"
	};
	if (element.groupId) Object.assign(textElement, { groupIds: [element.groupId] });
	if (element.id) Object.assign(textElement, { id: element.id });
	return textElement;
};
const transformToExcalidrawContainerSkeleton = (element) => {
	let extraProps = {};
	if (element.type === "rectangle" && element.subtype === "activation") extraProps = {
		backgroundColor: "#e9ecef",
		fillStyle: "solid"
	};
	const container = {
		id: element.id,
		type: element.type,
		x: element.x,
		y: element.y,
		width: element.width,
		height: element.height,
		label: {
			text: normalizeText(element?.label?.text || ""),
			fontSize: element?.label?.fontSize,
			verticalAlign: element.label?.verticalAlign || "middle",
			strokeColor: element.label?.color || "#000",
			groupIds: element.groupId ? [element.groupId] : []
		},
		strokeStyle: element?.strokeStyle,
		strokeWidth: element?.strokeWidth,
		strokeColor: element?.strokeColor,
		backgroundColor: element?.bgColor,
		fillStyle: "solid",
		...extraProps
	};
	if (element.groupId) Object.assign(container, { groupIds: [element.groupId] });
	return container;
};
const transformToExcalidrawArrowSkeleton = (arrow) => {
	const arrowElement = {
		type: "arrow",
		x: arrow.startX,
		y: arrow.startY,
		points: arrow.points || [[0, 0], [arrow.endX - arrow.startX, arrow.endY - arrow.startY]],
		width: arrow.endX - arrow.startX,
		height: arrow.endY - arrow.startY,
		strokeStyle: arrow?.strokeStyle || "solid",
		endArrowhead: arrow?.endArrowhead || null,
		startArrowhead: arrow?.startArrowhead || null,
		label: {
			text: normalizeText(arrow?.label?.text || ""),
			fontSize: 16
		},
		roundness: { type: 2 },
		start: arrow.start,
		end: arrow.end
	};
	if (arrow.groupId) Object.assign(arrowElement, { groupIds: [arrow.groupId] });
	return arrowElement;
};
const SequenceToExcalidrawSkeletonConvertor = new GraphConverter({ converter: (chart) => {
	const elements = [];
	const activations = [];
	Object.values(chart.nodes).forEach((node) => {
		if (!node || !node.length) return;
		node.forEach((element) => {
			let excalidrawElement;
			switch (element.type) {
				case "line":
					excalidrawElement = transformToExcalidrawLineSkeleton(element);
					break;
				case "rectangle":
				case "ellipse":
					excalidrawElement = transformToExcalidrawContainerSkeleton(element);
					break;
				case "text":
					excalidrawElement = transformToExcalidrawTextSkeleton(element);
					break;
				default: throw `unknown type ${element.type}`;
			}
			if (element.type === "rectangle" && element?.subtype === "activation") activations.push(excalidrawElement);
			else elements.push(excalidrawElement);
		});
	});
	Object.values(chart.lines).forEach((line) => {
		if (!line) return;
		elements.push(transformToExcalidrawLineSkeleton(line));
	});
	Object.values(chart.arrows).forEach((arrow) => {
		if (!arrow) return;
		elements.push(transformToExcalidrawArrowSkeleton(arrow));
		if (arrow.sequenceNumber) elements.push(transformToExcalidrawContainerSkeleton(arrow.sequenceNumber));
	});
	elements.push(...activations);
	if (chart.loops) {
		const { lines, texts, nodes } = chart.loops;
		lines.forEach((line) => {
			elements.push(transformToExcalidrawLineSkeleton(line));
		});
		texts.forEach((text) => {
			elements.push(transformToExcalidrawTextSkeleton(text));
		});
		nodes.forEach((node) => {
			elements.push(transformToExcalidrawContainerSkeleton(node));
		});
	}
	if (chart.groups) chart.groups.forEach((group) => {
		const { actorKeys, name } = group;
		let minX = Infinity;
		let minY = Infinity;
		let maxX = 0;
		let maxY = 0;
		if (!actorKeys.length) return;
		elements.filter((ele) => {
			if (ele.id) {
				const hyphenIndex = ele.id.indexOf("-");
				const id = ele.id.substring(0, hyphenIndex);
				return actorKeys.includes(id);
			}
		}).forEach((actor) => {
			if (actor.x === void 0 || actor.y === void 0 || actor.width === void 0 || actor.height === void 0) throw new Error(`Actor attributes missing ${actor}`);
			minX = Math.min(minX, actor.x);
			minY = Math.min(minY, actor.y);
			maxX = Math.max(maxX, actor.x + actor.width);
			maxY = Math.max(maxY, actor.y + actor.height);
		});
		const PADDING = 10;
		const groupRectX = minX - PADDING;
		const groupRectY = minY - PADDING;
		const groupRectWidth = maxX - minX + PADDING * 2;
		const groupRectHeight = maxY - minY + PADDING * 2;
		const groupRectId = nanoid();
		const groupRect = transformToExcalidrawContainerSkeleton({
			type: "rectangle",
			x: groupRectX,
			y: groupRectY,
			width: groupRectWidth,
			height: groupRectHeight,
			bgColor: group.fill,
			id: groupRectId
		});
		elements.unshift(groupRect);
		const frameId = nanoid();
		const frameChildren = [groupRectId];
		elements.forEach((ele) => {
			if (ele.type === "frame") return;
			if (ele.x === void 0 || ele.y === void 0 || ele.width === void 0 || ele.height === void 0) throw new Error(`Element attributes missing ${ele}`);
			if (ele.x >= minX && ele.x + ele.width <= maxX && ele.y >= minY && ele.y + ele.height <= maxY) {
				const elementId = ele.id || nanoid();
				if (!ele.id) Object.assign(ele, { id: elementId });
				frameChildren.push(elementId);
			}
		});
		const frame = {
			type: "frame",
			id: frameId,
			name,
			children: frameChildren
		};
		elements.push(frame);
	});
	return { elements };
} });
const classToExcalidrawSkeletonConvertor = new GraphConverter({ converter: (chart) => {
	const elements = [];
	Object.values(chart.nodes).forEach((node) => {
		if (!node || !node.length) return;
		node.forEach((element) => {
			let excalidrawElement;
			switch (element.type) {
				case "line":
					excalidrawElement = transformToExcalidrawLineSkeleton(element);
					break;
				case "rectangle":
				case "ellipse":
					excalidrawElement = transformToExcalidrawContainerSkeleton(element);
					break;
				case "text":
					excalidrawElement = transformToExcalidrawTextSkeleton(element);
					break;
				default: throw `unknown type ${element.type}`;
			}
			elements.push(excalidrawElement);
		});
	});
	Object.values(chart.lines).forEach((line) => {
		if (!line) return;
		elements.push(transformToExcalidrawLineSkeleton(line));
	});
	Object.values(chart.arrows).forEach((arrow) => {
		if (!arrow) return;
		const excalidrawElement = transformToExcalidrawArrowSkeleton(arrow);
		elements.push(excalidrawElement);
	});
	Object.values(chart.text).forEach((ele) => {
		const excalidrawElement = transformToExcalidrawTextSkeleton(ele);
		elements.push(excalidrawElement);
	});
	Object.values(chart.namespaces).forEach((namespace) => {
		const classIds = Object.keys(namespace.classes);
		const children = [...classIds];
		const chartElements = [
			...chart.lines,
			...chart.arrows,
			...chart.text
		];
		classIds.forEach((classId) => {
			const childIds = chartElements.filter((ele) => ele.metadata && ele.metadata.classId === classId).map((ele) => ele.id);
			if (childIds.length) children.push(...childIds);
		});
		const frame = {
			type: "frame",
			id: nanoid(),
			name: namespace.id,
			children
		};
		elements.push(frame);
	});
	return { elements };
} });
const graphToExcalidraw = (graph, options = {}) => {
	switch (graph.type) {
		case "graphImage": return GraphImageConverter.convert(graph, options);
		case "flowchart": return FlowchartToExcalidrawSkeletonConverter.convert(graph, options);
		case "sequence": return SequenceToExcalidrawSkeletonConvertor.convert(graph, options);
		case "class": return classToExcalidrawSkeletonConvertor.convert(graph, options);
		default: throw new Error(`graphToExcalidraw: unknown graph type "${graph.type}, only flowcharts are supported!"`);
	}
};
const entityCodesToText = (input) => {
	input = decodeEntities(input);
	const inputWithDecimalCode = input.replace(/#(\d+);/g, "&#$1;").replace(/#([a-z]+);/g, "&$1;");
	const element = document.createElement("textarea");
	element.innerHTML = inputWithDecimalCode;
	return element.value;
};
const getTransformAttr = (el) => {
	const translateMatch = el.getAttribute("transform")?.match(/translate\(([ \d.-]+),\s*([\d.-]+)\)/);
	let transformX = 0;
	let transformY = 0;
	if (translateMatch) {
		transformX = Number(translateMatch[1]);
		transformY = Number(translateMatch[2]);
	}
	return {
		transformX,
		transformY
	};
};
const encodeEntities = (text) => {
	let txt = text;
	txt = txt.replace(/style.*:\S*#.*;/g, (s) => {
		return s.substring(0, s.length - 1);
	});
	txt = txt.replace(/classDef.*:\S*#.*;/g, (s) => {
		return s.substring(0, s.length - 1);
	});
	txt = txt.replace(/#\w+;/g, (s) => {
		const innerTxt = s.substring(1, s.length - 1);
		if (/^\+?\d+$/.test(innerTxt)) return `ﬂ°°${innerTxt}¶ß`;
		return `ﬂ°${innerTxt}¶ß`;
	});
	return txt;
};
const decodeEntities = function(text) {
	return text.replace(/ﬂ°°/g, "#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
};
const computeEdgePositions = (pathElement, offset = {
	x: 0,
	y: 0
}) => {
	if (pathElement.tagName.toLowerCase() !== "path") throw new Error(`Invalid input: Expected an HTMLElement of tag "path", got ${pathElement.tagName}`);
	const dAttr = pathElement.getAttribute("d");
	if (!dAttr) throw new Error("Path element does not contain a \"d\" attribute");
	const commands = dAttr.split(/(?=[LM])/);
	const startPosition = commands[0].substring(1).split(",").map((coord) => parseFloat(coord));
	const endPosition = commands[commands.length - 1].substring(1).split(",").map((coord) => parseFloat(coord));
	const reflectionPoints = commands.map((command) => {
		const coords = command.substring(1).split(",").map((coord) => parseFloat(coord));
		return {
			x: coords[0],
			y: coords[1]
		};
	}).filter((point, index, array) => {
		if (index === 0 || index === array.length - 1) return true;
		if (point.x === array[index - 1].x && point.y === array[index - 1].y) return false;
		if (index === array.length - 2 && (array[index - 1].x === point.x || array[index - 1].y === point.y)) {
			const lastPoint = array[array.length - 1];
			return Math.hypot(lastPoint.x - point.x, lastPoint.y - point.y) > 20;
		}
		return point.x !== array[index - 1].x || point.y !== array[index - 1].y;
	}).map((p) => {
		return {
			x: p.x + offset.x,
			y: p.y + offset.y
		};
	});
	return {
		startX: startPosition[0] + offset.x,
		startY: startPosition[1] + offset.y,
		endX: endPosition[0] + offset.x,
		endY: endPosition[1] + offset.y,
		reflectionPoints
	};
};
var parseSubGraph = (data, containerEl) => {
	const nodeIds = data.nodes.map((n) => {
		if (n.startsWith("flowchart-")) return n.split("-")[1];
		return n;
	});
	const el = containerEl.querySelector(`[id='${data.id}']`);
	if (!el) throw new Error("SubGraph element not found");
	const position = computeElementPosition(el, containerEl);
	const boundingBox = el.getBBox();
	const dimension = {
		width: boundingBox.width,
		height: boundingBox.height
	};
	data.classes = void 0;
	data.dir = void 0;
	return {
		...data,
		nodeIds,
		...position,
		...dimension,
		text: entityCodesToText(data.title)
	};
};
var parseVertex = (data, containerEl) => {
	const el = containerEl.querySelector(`[id*="flowchart-${data.id}-"]`);
	if (!el) return;
	let link;
	if (el.parentElement?.tagName.toLowerCase() === "a") link = el.parentElement.getAttribute("xlink:href");
	const position = computeElementPosition(link ? el.parentElement : el, containerEl);
	const boundingBox = el.getBBox();
	const dimension = {
		width: boundingBox.width,
		height: boundingBox.height
	};
	const labelContainerStyleText = el.querySelector(".label-container")?.getAttribute("style");
	const labelStyleText = el.querySelector(".label")?.getAttribute("style");
	const containerStyle = {};
	labelContainerStyleText?.split(";").forEach((property) => {
		if (!property) return;
		const key = property.split(":")[0].trim();
		containerStyle[key] = property.split(":")[1].trim();
	});
	const labelStyle = {};
	labelStyleText?.split(";").forEach((property) => {
		if (!property) return;
		const key = property.split(":")[0].trim();
		labelStyle[key] = property.split(":")[1].trim();
	});
	return {
		id: data.id,
		labelType: data.labelType,
		text: entityCodesToText(data.text),
		type: data.type,
		link: link || void 0,
		...position,
		...dimension,
		containerStyle,
		labelStyle
	};
};
var parseEdge = (data, edgeIndex, containerEl) => {
	const edge = containerEl.querySelector(`[id*="L-${data.start}-${data.end}-${edgeIndex}"]`);
	if (!edge) throw new Error("Edge element not found");
	const edgePositionData = computeEdgePositions(edge, computeElementPosition(edge, containerEl));
	data.length = void 0;
	return {
		...data,
		...edgePositionData,
		text: entityCodesToText(data.text)
	};
};
var computeElementPosition = (el, containerEl) => {
	if (!el) throw new Error("Element not found");
	let root = el.parentElement?.parentElement;
	const childElement = el.childNodes[0];
	let childPosition = {
		x: 0,
		y: 0
	};
	if (childElement) {
		const { transformX: transformX$1, transformY: transformY$1 } = getTransformAttr(childElement);
		const boundingBox = childElement.getBBox();
		childPosition = {
			x: Number(childElement.getAttribute("x")) || transformX$1 + boundingBox.x || 0,
			y: Number(childElement.getAttribute("y")) || transformY$1 + boundingBox.y || 0
		};
	}
	const { transformX, transformY } = getTransformAttr(el);
	const position = {
		x: transformX + childPosition.x,
		y: transformY + childPosition.y
	};
	while (root && root.id !== containerEl.id) {
		if (root.classList.value === "root" && root.hasAttribute("transform")) {
			const { transformX: transformX$1, transformY: transformY$1 } = getTransformAttr(root);
			position.x += transformX$1;
			position.y += transformY$1;
		}
		root = root.parentElement;
	}
	return position;
};
const parseMermaidFlowChartDiagram = (diagram, containerEl) => {
	diagram.parse();
	const mermaidParser = diagram.parser.yy;
	const vertices = mermaidParser.getVertices();
	Object.keys(vertices).forEach((id) => {
		vertices[id] = parseVertex(vertices[id], containerEl);
	});
	const edgeCountMap = /* @__PURE__ */ new Map();
	const edges = mermaidParser.getEdges().filter((edge) => {
		return containerEl.querySelector(`[id*="L-${edge.start}-${edge.end}"]`);
	}).map((data) => {
		const edgeId = `${data.start}-${data.end}`;
		const count = edgeCountMap.get(edgeId) || 0;
		edgeCountMap.set(edgeId, count + 1);
		return parseEdge(data, count, containerEl);
	});
	return {
		type: "flowchart",
		subGraphs: mermaidParser.getSubGraphs().map((data) => parseSubGraph(data, containerEl)),
		vertices,
		edges
	};
};
const createArrowSkeletonFromSVG = (arrowNode, opts) => {
	const arrow = {};
	if (opts?.label) arrow.label = {
		text: entityCodesToText(opts.label),
		fontSize: 16
	};
	const tagName = arrowNode.tagName;
	if (tagName === "line") {
		arrow.startX = Number(arrowNode.getAttribute("x1"));
		arrow.startY = Number(arrowNode.getAttribute("y1"));
		arrow.endX = Number(arrowNode.getAttribute("x2"));
		arrow.endY = Number(arrowNode.getAttribute("y2"));
	} else if (tagName === "path") {
		const dAttr = arrowNode.getAttribute("d");
		if (!dAttr) throw new Error("Path element does not contain a \"d\" attribute");
		const commands = dAttr.split(/(?=[LC])/);
		const startPosition = commands[0].substring(1).split(",").map((coord) => parseFloat(coord));
		const points = [];
		commands.forEach((command) => {
			const currPoints = command.substring(1).trim().split(" ").map((pos) => {
				const [x, y] = pos.split(",");
				return [parseFloat(x) - startPosition[0], parseFloat(y) - startPosition[1]];
			});
			points.push(...currPoints);
		});
		const endPosition = points[points.length - 1];
		arrow.startX = startPosition[0];
		arrow.startY = startPosition[1];
		arrow.endX = endPosition[0];
		arrow.endY = endPosition[1];
		arrow.points = points;
	}
	if (opts?.label) {
		const offset = 10;
		arrow.startY = arrow.startY - offset;
		arrow.endY = arrow.endY - offset;
	}
	arrow.strokeColor = arrowNode.getAttribute("stroke");
	arrow.strokeWidth = Number(arrowNode.getAttribute("stroke-width"));
	arrow.type = "arrow";
	arrow.strokeStyle = opts?.strokeStyle || "solid";
	arrow.startArrowhead = opts?.startArrowhead || null;
	arrow.endArrowhead = opts?.endArrowhead || null;
	return arrow;
};
const createArrowSkeletion = (startX, startY, endX, endY, opts) => {
	const arrow = {};
	arrow.type = "arrow";
	arrow.startX = startX;
	arrow.startY = startY;
	arrow.endX = endX;
	arrow.endY = endY;
	Object.assign(arrow, { ...opts });
	return arrow;
};
const createTextSkeleton = (x, y, text, opts) => {
	return {
		type: "text",
		x,
		y,
		text,
		width: opts?.width || 20,
		height: opts?.height || 20,
		fontSize: opts?.fontSize || 20,
		id: opts?.id,
		groupId: opts?.groupId,
		metadata: opts?.metadata
	};
};
const createTextSkeletonFromSVG = (textNode, text, opts) => {
	const node = {};
	const x = Number(textNode.getAttribute("x"));
	const y = Number(textNode.getAttribute("y"));
	node.type = "text";
	node.text = entityCodesToText(text);
	if (opts?.id) node.id = opts.id;
	if (opts?.groupId) node.groupId = opts.groupId;
	const boundingBox = textNode.getBBox();
	node.width = boundingBox.width;
	node.height = boundingBox.height;
	node.x = x - boundingBox.width / 2;
	node.y = y;
	node.fontSize = parseInt(getComputedStyle(textNode).fontSize);
	return node;
};
const createContainerSkeletonFromSVG = (node, type, opts = {}) => {
	const container = {};
	container.type = type;
	const { label, subtype, id, groupId } = opts;
	container.id = id;
	if (groupId) container.groupId = groupId;
	if (label) container.label = {
		text: entityCodesToText(label.text),
		fontSize: 16,
		verticalAlign: label?.verticalAlign
	};
	const boundingBox = node.getBBox();
	container.x = boundingBox.x;
	container.y = boundingBox.y;
	container.width = boundingBox.width;
	container.height = boundingBox.height;
	container.subtype = subtype;
	switch (subtype) {
		case "highlight":
			const bgColor = node.getAttribute("fill");
			if (bgColor) container.bgColor = bgColor;
			break;
		case "note":
			container.strokeStyle = "dashed";
			break;
	}
	return container;
};
const createLineSkeletonFromSVG = (lineNode, startX, startY, endX, endY, opts) => {
	const line = {};
	line.startX = startX;
	line.startY = startY;
	line.endX = endX;
	if (opts?.groupId) line.groupId = opts.groupId;
	if (opts?.id) line.id = opts.id;
	line.endY = endY;
	line.strokeColor = lineNode.getAttribute("stroke");
	line.strokeWidth = Number(lineNode.getAttribute("stroke-width"));
	line.type = "line";
	return line;
};
var SEQUENCE_ARROW_TYPES = {
	0: "SOLID",
	1: "DOTTED",
	3: "SOLID_CROSS",
	4: "DOTTED_CROSS",
	5: "SOLID_OPEN",
	6: "DOTTED_OPEN",
	24: "SOLID_POINT",
	25: "DOTTED_POINT"
};
var MESSAGE_TYPE = {
	SOLID: 0,
	DOTTED: 1,
	NOTE: 2,
	SOLID_CROSS: 3,
	DOTTED_CROSS: 4,
	SOLID_OPEN: 5,
	DOTTED_OPEN: 6,
	LOOP_START: 10,
	LOOP_END: 11,
	ALT_START: 12,
	ALT_ELSE: 13,
	ALT_END: 14,
	OPT_START: 15,
	OPT_END: 16,
	ACTIVE_START: 17,
	ACTIVE_END: 18,
	PAR_START: 19,
	PAR_AND: 20,
	PAR_END: 21,
	RECT_START: 22,
	RECT_END: 23,
	SOLID_POINT: 24,
	DOTTED_POINT: 25,
	AUTONUMBER: 26,
	CRITICAL_START: 27,
	CRITICAL_OPTION: 28,
	CRITICAL_END: 29,
	BREAK_START: 30,
	BREAK_END: 31,
	PAR_OVER_START: 32
};
var getStrokeStyle$1 = (type) => {
	let strokeStyle;
	switch (type) {
		case MESSAGE_TYPE.SOLID:
		case MESSAGE_TYPE.SOLID_CROSS:
		case MESSAGE_TYPE.SOLID_OPEN:
		case MESSAGE_TYPE.SOLID_POINT:
			strokeStyle = "solid";
			break;
		case MESSAGE_TYPE.DOTTED:
		case MESSAGE_TYPE.DOTTED_CROSS:
		case MESSAGE_TYPE.DOTTED_OPEN:
		case MESSAGE_TYPE.DOTTED_POINT:
			strokeStyle = "dotted";
			break;
		default:
			strokeStyle = "solid";
			break;
	}
	return strokeStyle;
};
var attachSequenceNumberToArrow = (node, arrow) => {
	if (!!node.nextElementSibling?.classList.contains("sequenceNumber")) {
		const text = node.nextElementSibling?.textContent;
		if (!text) throw new Error("sequence number not present");
		const height = 30;
		const yOffset = height / 2;
		const sequenceNumber = {
			type: "rectangle",
			x: arrow.startX - 10,
			y: arrow.startY - yOffset,
			label: {
				text,
				fontSize: 14
			},
			bgColor: "#e9ecef",
			height,
			subtype: "sequence"
		};
		Object.assign(arrow, { sequenceNumber });
	}
};
var createActorSymbol = (rootNode, text, opts) => {
	if (!rootNode) throw "root node not found";
	const groupId = nanoid();
	const children = Array.from(rootNode.children);
	const nodeElements = [];
	children.forEach((child, index) => {
		const id = `${opts?.id}-${index}`;
		let ele;
		switch (child.tagName) {
			case "line":
				ele = createLineSkeletonFromSVG(child, Number(child.getAttribute("x1")), Number(child.getAttribute("y1")), Number(child.getAttribute("x2")), Number(child.getAttribute("y2")), {
					groupId,
					id
				});
				break;
			case "text":
				ele = createTextSkeletonFromSVG(child, text, {
					groupId,
					id
				});
				break;
			case "circle": ele = createContainerSkeletonFromSVG(child, "ellipse", {
				label: child.textContent ? { text: child.textContent } : void 0,
				groupId,
				id
			});
			default: ele = createContainerSkeletonFromSVG(child, SVG_TO_SHAPE_MAPPER[child.tagName], {
				label: child.textContent ? { text: child.textContent } : void 0,
				groupId,
				id
			});
		}
		nodeElements.push(ele);
	});
	return nodeElements;
};
var parseActor = (actors, containerEl) => {
	const actorTopNodes = Array.from(containerEl.querySelectorAll(".actor-top"));
	const actorBottomNodes = Array.from(containerEl.querySelectorAll(".actor-bottom"));
	const nodes = [];
	const lines = [];
	Object.values(actors).forEach((actor, index) => {
		const topRootNode = actorTopNodes.find((actorNode) => actorNode.getAttribute("name") === actor.name);
		const bottomRootNode = actorBottomNodes.find((actorNode) => actorNode.getAttribute("name") === actor.name);
		if (!topRootNode || !bottomRootNode) throw "root not found";
		const text = actor.description;
		if (actor.type === "participant") {
			const topNodeElement = createContainerSkeletonFromSVG(topRootNode, "rectangle", {
				id: `${actor.name}-top`,
				label: { text },
				subtype: "actor"
			});
			if (!topNodeElement) throw "Top Node element not found!";
			nodes.push([topNodeElement]);
			const bottomNodeElement = createContainerSkeletonFromSVG(bottomRootNode, "rectangle", {
				id: `${actor.name}-bottom`,
				label: { text },
				subtype: "actor"
			});
			nodes.push([bottomNodeElement]);
			const lineNode = topRootNode?.parentElement?.previousElementSibling;
			if (lineNode?.tagName !== "line") throw "Line not found";
			const startX = Number(lineNode.getAttribute("x1"));
			if (!topNodeElement.height) throw "Top node element height is null";
			const startY = topNodeElement.y + topNodeElement.height;
			const endY = bottomNodeElement.y;
			const line = createLineSkeletonFromSVG(lineNode, startX, startY, Number(lineNode.getAttribute("x2")), endY);
			lines.push(line);
		} else if (actor.type === "actor") {
			const topNodeElement = createActorSymbol(topRootNode, text, { id: `${actor.name}-top` });
			nodes.push(topNodeElement);
			const bottomNodeElement = createActorSymbol(bottomRootNode, text, { id: `${actor.name}-bottom` });
			nodes.push(bottomNodeElement);
			const lineNode = topRootNode.previousElementSibling;
			if (lineNode?.tagName !== "line") throw "Line not found";
			const startX = Number(lineNode.getAttribute("x1"));
			const startY = Number(lineNode.getAttribute("y1"));
			const endX = Number(lineNode.getAttribute("x2"));
			const bottomEllipseNode = bottomNodeElement.find((node) => node.type === "ellipse");
			if (bottomEllipseNode) {
				const endY = bottomEllipseNode.y;
				const line = createLineSkeletonFromSVG(lineNode, startX, startY, endX, endY);
				lines.push(line);
			}
		}
	});
	return {
		nodes,
		lines
	};
};
var computeArrows = (messages, containerEl) => {
	const arrows = [];
	const arrowNodes = Array.from(containerEl.querySelectorAll("[class*=\"messageLine\"]"));
	const supportedMessageTypes = Object.keys(SEQUENCE_ARROW_TYPES);
	const arrowMessages = messages.filter((message) => supportedMessageTypes.includes(message.type.toString()));
	arrowNodes.forEach((arrowNode, index) => {
		const message = arrowMessages[index];
		const messageType = SEQUENCE_ARROW_TYPES[message.type];
		const arrow = createArrowSkeletonFromSVG(arrowNode, {
			label: message?.message,
			strokeStyle: getStrokeStyle$1(message.type),
			endArrowhead: messageType === "SOLID_OPEN" || messageType === "DOTTED_OPEN" ? null : "arrow"
		});
		attachSequenceNumberToArrow(arrowNode, arrow);
		arrows.push(arrow);
	});
	return arrows;
};
var computeNotes = (messages, containerEl) => {
	const noteNodes = Array.from(containerEl.querySelectorAll(".note")).map((node) => node.parentElement);
	const noteText = messages.filter((message) => message.type === MESSAGE_TYPE.NOTE);
	const notes = [];
	noteNodes.forEach((node, index) => {
		if (!node) return;
		const rect = node.firstChild;
		const text = noteText[index].message;
		const note = createContainerSkeletonFromSVG(rect, "rectangle", {
			label: { text },
			subtype: "note"
		});
		notes.push(note);
	});
	return notes;
};
var parseActivations = (containerEl) => {
	const activationNodes = Array.from(containerEl.querySelectorAll(`[class*=activation]`));
	const activations = [];
	activationNodes.forEach((node) => {
		const rect = createContainerSkeletonFromSVG(node, "rectangle", {
			label: { text: "" },
			subtype: "activation"
		});
		activations.push(rect);
	});
	return activations;
};
var parseLoops = (messages, containerEl) => {
	const lineNodes = Array.from(containerEl.querySelectorAll(".loopLine"));
	const lines = [];
	const texts = [];
	const nodes = [];
	lineNodes.forEach((node) => {
		const line = createLineSkeletonFromSVG(node, Number(node.getAttribute("x1")), Number(node.getAttribute("y1")), Number(node.getAttribute("x2")), Number(node.getAttribute("y2")));
		line.strokeStyle = "dotted";
		line.strokeColor = "#adb5bd";
		line.strokeWidth = 2;
		lines.push(line);
	});
	const loopTextNodes = Array.from(containerEl.querySelectorAll(".loopText"));
	const criticalMessages = messages.filter((message) => message.type === MESSAGE_TYPE.CRITICAL_START).map((message) => message.message);
	loopTextNodes.forEach((node) => {
		const text = node.textContent || "";
		const textElement = createTextSkeletonFromSVG(node, text);
		const rawText = text.match(/\[(.*?)\]/)?.[1] || "";
		if (criticalMessages.includes(rawText)) textElement.x += 16;
		texts.push(textElement);
	});
	const labelBoxes = Array.from(containerEl?.querySelectorAll(".labelBox"));
	const labelTextNode = Array.from(containerEl?.querySelectorAll(".labelText"));
	labelBoxes.forEach((labelBox, index) => {
		const container = createContainerSkeletonFromSVG(labelBox, "rectangle", { label: { text: labelTextNode[index]?.textContent || "" } });
		container.strokeColor = "#adb5bd";
		container.bgColor = "#e9ecef";
		container.width = void 0;
		nodes.push(container);
	});
	return {
		lines,
		texts,
		nodes
	};
};
var computeHighlights = (containerEl) => {
	const rects = Array.from(containerEl.querySelectorAll(".rect")).filter((node) => node.parentElement?.tagName !== "g");
	const nodes = [];
	rects.forEach((rect) => {
		const node = createContainerSkeletonFromSVG(rect, "rectangle", {
			label: { text: "" },
			subtype: "highlight"
		});
		nodes.push(node);
	});
	return nodes;
};
const parseMermaidSequenceDiagram = (diagram, containerEl) => {
	diagram.parse();
	const mermaidParser = diagram.parser.yy;
	const nodes = [];
	const groups = mermaidParser.getBoxes();
	const bgHightlights = computeHighlights(containerEl);
	const { nodes: actors, lines } = parseActor(mermaidParser.getActors(), containerEl);
	const messages = mermaidParser.getMessages();
	const arrows = computeArrows(messages, containerEl);
	const notes = computeNotes(messages, containerEl);
	const activations = parseActivations(containerEl);
	const loops = parseLoops(messages, containerEl);
	nodes.push(bgHightlights);
	nodes.push(...actors);
	nodes.push(notes);
	nodes.push(activations);
	return {
		type: "sequence",
		lines,
		arrows,
		nodes,
		loops,
		groups
	};
};
var RELATION_TYPE = {
	AGGREGATION: 0,
	EXTENSION: 1,
	COMPOSITION: 2,
	DEPENDENCY: 3,
	LOLLIPOP: 4
};
var LINE_TYPE = {
	LINE: 0,
	DOTTED_LINE: 1
};
var MERMAID_ARROW_HEAD_OFFSET = 16;
var getStrokeStyle = (type) => {
	let lineType;
	switch (type) {
		case LINE_TYPE.LINE:
			lineType = "solid";
			break;
		case LINE_TYPE.DOTTED_LINE:
			lineType = "dotted";
			break;
		default: lineType = "solid";
	}
	return lineType;
};
var getArrowhead = (type) => {
	let arrowhead;
	switch (type) {
		case RELATION_TYPE.AGGREGATION:
			arrowhead = "diamond_outline";
			break;
		case RELATION_TYPE.COMPOSITION:
			arrowhead = "diamond";
			break;
		case RELATION_TYPE.EXTENSION:
			arrowhead = "triangle_outline";
			break;
		case "none":
			arrowhead = null;
			break;
		case RELATION_TYPE.DEPENDENCY:
		default:
			arrowhead = "arrow";
			break;
	}
	return arrowhead;
};
var parseClasses = (classes, containerEl) => {
	const nodes = [];
	const lines = [];
	const text = [];
	Object.values(classes).forEach((classNode) => {
		const { domId, id: classId } = classNode;
		const groupId = nanoid();
		const domNode = containerEl.querySelector(`[data-id=${classId}]`);
		if (!domNode) throw Error(`DOM Node with id ${domId} not found`);
		const { transformX, transformY } = getTransformAttr(domNode);
		const container = createContainerSkeletonFromSVG(domNode.firstChild, "rectangle", {
			id: classId,
			groupId
		});
		container.x += transformX;
		container.y += transformY;
		container.metadata = { classId };
		nodes.push(container);
		Array.from(domNode.querySelectorAll(".divider")).forEach((lineNode) => {
			const line = createLineSkeletonFromSVG(lineNode, Number(lineNode.getAttribute("x1")), Number(lineNode.getAttribute("y1")), Number(lineNode.getAttribute("x2")), Number(lineNode.getAttribute("y2")), {
				groupId,
				id: nanoid()
			});
			line.startX += transformX;
			line.startY += transformY;
			line.endX += transformX;
			line.endY += transformY;
			line.metadata = { classId };
			lines.push(line);
		});
		const labelNodes = domNode.querySelector(".label")?.children;
		if (!labelNodes) throw "label nodes not found";
		Array.from(labelNodes).forEach((node) => {
			const label = node.textContent;
			if (!label) return;
			const id = nanoid();
			const { transformX: textTransformX, transformY: textTransformY } = getTransformAttr(node);
			const boundingBox = node.getBBox();
			const textElement = createTextSkeleton(transformX + textTransformX, transformY + textTransformY + 10, label, {
				width: boundingBox.width,
				height: boundingBox.height,
				id,
				groupId,
				metadata: { classId }
			});
			text.push(textElement);
		});
	});
	return {
		nodes,
		lines,
		text
	};
};
var adjustArrowPosition = (direction, arrow) => {
	const arrowHeadShapes = [
		"triangle_outline",
		"diamond",
		"diamond_outline"
	];
	const shouldUpdateStartArrowhead = arrow.startArrowhead && arrowHeadShapes.includes(arrow.startArrowhead);
	const shouldUpdateEndArrowhead = arrow.endArrowhead && arrowHeadShapes.includes(arrow.endArrowhead);
	if (!shouldUpdateEndArrowhead && !shouldUpdateStartArrowhead) return arrow;
	if (shouldUpdateStartArrowhead) {
		if (direction === "LR") arrow.startX -= MERMAID_ARROW_HEAD_OFFSET;
		else if (direction === "RL") arrow.startX += MERMAID_ARROW_HEAD_OFFSET;
		else if (direction === "TB") arrow.startY -= MERMAID_ARROW_HEAD_OFFSET;
		else if (direction === "BT") arrow.startY += MERMAID_ARROW_HEAD_OFFSET;
	}
	if (shouldUpdateEndArrowhead) {
		if (direction === "LR") arrow.endX += MERMAID_ARROW_HEAD_OFFSET;
		else if (direction === "RL") arrow.endX -= MERMAID_ARROW_HEAD_OFFSET;
		else if (direction === "TB") arrow.endY += MERMAID_ARROW_HEAD_OFFSET;
		else if (direction === "BT") arrow.endY -= MERMAID_ARROW_HEAD_OFFSET;
	}
	return arrow;
};
var parseRelations = (relations, classNodes, containerEl, direction) => {
	const edges = containerEl.querySelector(".edgePaths")?.children;
	if (!edges) throw new Error("No Edges found!");
	const arrows = [];
	const text = [];
	relations.forEach((relationNode, index) => {
		const { id1, id2, relation } = relationNode;
		const node1 = classNodes.find((node) => node.id === id1);
		const node2 = classNodes.find((node) => node.id === id2);
		const strokeStyle = getStrokeStyle(relation.lineType);
		const startArrowhead = getArrowhead(relation.type1);
		const endArrowhead = getArrowhead(relation.type2);
		const edgePositionData = computeEdgePositions(edges[index]);
		const arrow = adjustArrowPosition(direction, createArrowSkeletion(edgePositionData.startX, edgePositionData.startY, edgePositionData.endX, edgePositionData.endY, {
			strokeStyle,
			startArrowhead,
			endArrowhead,
			label: relationNode.title ? { text: relationNode.title } : void 0,
			start: {
				type: "rectangle",
				id: node1.id
			},
			end: {
				type: "rectangle",
				id: node2.id
			}
		}));
		arrows.push(arrow);
		const { relationTitle1, relationTitle2 } = relationNode;
		const offsetX = 20;
		const offsetY = 15;
		const directionOffset = 15;
		let x;
		let y;
		if (relationTitle1 && relationTitle1 !== "none") {
			switch (direction) {
				case "TB":
					x = arrow.startX - offsetX;
					if (arrow.endX < arrow.startX) x -= directionOffset;
					y = arrow.startY + offsetY;
					break;
				case "BT":
					x = arrow.startX + offsetX;
					if (arrow.endX > arrow.startX) x += directionOffset;
					y = arrow.startY - offsetY;
					break;
				case "LR":
					x = arrow.startX + offsetX;
					y = arrow.startY + offsetY;
					if (arrow.endY > arrow.startY) y += directionOffset;
					break;
				case "RL":
					x = arrow.startX - offsetX;
					y = arrow.startY - offsetY;
					if (arrow.startY > arrow.endY) y -= directionOffset;
					break;
				default:
					x = arrow.startX - offsetX;
					y = arrow.startY + offsetY;
			}
			const relationTitleElement = createTextSkeleton(x, y, relationTitle1, { fontSize: 16 });
			text.push(relationTitleElement);
		}
		if (relationTitle2 && relationTitle2 !== "none") {
			switch (direction) {
				case "TB":
					x = arrow.endX + offsetX;
					if (arrow.endX < arrow.startX) x += directionOffset;
					y = arrow.endY - offsetY;
					break;
				case "BT":
					x = arrow.endX - offsetX;
					if (arrow.endX > arrow.startX) x -= directionOffset;
					y = arrow.endY + offsetY;
					break;
				case "LR":
					x = arrow.endX - offsetX;
					y = arrow.endY - offsetY;
					if (arrow.endY > arrow.startY) y -= directionOffset;
					break;
				case "RL":
					x = arrow.endX + offsetX;
					y = arrow.endY + offsetY;
					if (arrow.startY > arrow.endY) y += directionOffset;
					break;
				default:
					x = arrow.endX + offsetX;
					y = arrow.endY - offsetY;
			}
			const relationTitleElement = createTextSkeleton(x, y, relationTitle2, { fontSize: 16 });
			text.push(relationTitleElement);
		}
	});
	return {
		arrows,
		text
	};
};
var parseNotes = (notes, containerEl, classNodes) => {
	const noteContainers = [];
	const connectors = [];
	notes.forEach((note) => {
		const { id, text, class: classId } = note;
		const node = containerEl.querySelector(`#${id}`);
		if (!node) throw new Error(`Node with id ${id} not found!`);
		const { transformX, transformY } = getTransformAttr(node);
		const rect = node.firstChild;
		const container = createContainerSkeletonFromSVG(rect, "rectangle", {
			id,
			subtype: "note",
			label: { text }
		});
		Object.assign(container, {
			x: container.x + transformX,
			y: container.y + transformY
		});
		noteContainers.push(container);
		if (classId) {
			const classNode = classNodes.find((node$1) => node$1.id === classId);
			if (!classNode) throw new Error(`class node with id ${classId} not found!`);
			const startX = container.x + (container.width || 0) / 2;
			const startY = container.y + (container.height || 0);
			const endX = startX;
			const endY = classNode.y;
			const connector = createArrowSkeletion(startX, startY, endX, endY, {
				strokeStyle: "dotted",
				startArrowhead: null,
				endArrowhead: null,
				start: {
					id: container.id,
					type: "rectangle"
				},
				end: {
					id: classNode.id,
					type: "rectangle"
				}
			});
			connectors.push(connector);
		}
	});
	return {
		notes: noteContainers,
		connectors
	};
};
const parseMermaidClassDiagram = (diagram, containerEl) => {
	diagram.parse();
	const mermaidParser = diagram.parser.yy;
	const direction = mermaidParser.getDirection();
	const nodes = [];
	const lines = [];
	const text = [];
	const classNodes = [];
	const namespaces = mermaidParser.getNamespaces();
	const classes = mermaidParser.getClasses();
	if (Object.keys(classes).length) {
		const classData = parseClasses(classes, containerEl);
		nodes.push(classData.nodes);
		lines.push(...classData.lines);
		text.push(...classData.text);
		classNodes.push(...classData.nodes);
	}
	const { arrows, text: relationTitles } = parseRelations(mermaidParser.getRelations(), classNodes, containerEl, direction);
	const { notes, connectors } = parseNotes(mermaidParser.getNotes(), containerEl, classNodes);
	nodes.push(notes);
	arrows.push(...connectors);
	text.push(...relationTitles);
	return {
		type: "class",
		nodes,
		lines,
		arrows,
		text,
		namespaces
	};
};
var convertSvgToGraphImage = (svgContainer) => {
	const svgEl = svgContainer.querySelector("svg");
	if (!svgEl) throw new Error("SVG element not found");
	const rect = svgEl.getBoundingClientRect();
	const width = rect.width;
	const height = rect.height;
	svgEl.setAttribute("width", `${width}`);
	svgEl.setAttribute("height", `${height}`);
	const mimeType = "image/svg+xml";
	const decoded = unescape(encodeURIComponent(svgEl.outerHTML));
	return {
		type: "graphImage",
		mimeType,
		dataURL: `data:image/svg+xml;base64,${btoa(decoded)}`,
		width,
		height
	};
};
const parseMermaid = async (definition, config = MERMAID_CONFIG) => {
	mermaid.initialize({
		...MERMAID_CONFIG,
		...config
	});
	const diagram = await mermaid.mermaidAPI.getDiagramFromText(encodeEntities(definition));
	const { svg } = await mermaid.render("mermaid-to-excalidraw", definition);
	const svgContainer = document.createElement("div");
	svgContainer.setAttribute("style", `opacity: 0; position: relative; z-index: -1;`);
	svgContainer.innerHTML = svg;
	svgContainer.id = "mermaid-diagram";
	document.body.appendChild(svgContainer);
	let data;
	switch (diagram.type) {
		case "flowchart-v2":
			data = parseMermaidFlowChartDiagram(diagram, svgContainer);
			break;
		case "sequence":
			data = parseMermaidSequenceDiagram(diagram, svgContainer);
			break;
		case "classDiagram":
			data = parseMermaidClassDiagram(diagram, svgContainer);
			break;
		default: data = convertSvgToGraphImage(svgContainer);
	}
	svgContainer.remove();
	return data;
};
var parseMermaidToExcalidraw = async (definition, config) => {
	const mermaidConfig = config || {};
	const fontSize = parseInt(mermaidConfig.themeVariables?.fontSize ?? "") || 20;
	return graphToExcalidraw(await parseMermaid(definition, {
		...mermaidConfig,
		themeVariables: {
			...mermaidConfig.themeVariables,
			fontSize: `${fontSize * 1.25}px`
		}
	}), { fontSize });
};
export { parseMermaidToExcalidraw };
