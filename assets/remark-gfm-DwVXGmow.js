import { C as combineExtensions, E as toString, N as ok, S as normalizeIdentifier, _ as markdownLineEnding, b as unicodePunctuation, d as resolveAll, f as classifyCharacter, g as asciiControl, h as asciiAlphanumeric, i as EXIT, m as asciiAlpha, o as visitParents, p as factorySpace, r as visit, s as convert, u as blankLine, v as markdownLineEndingOrSpace, w as splice, x as unicodeWhitespace, y as markdownSpace } from "./react-markdown-CiPHk2vS.js";
function ccount(value, character) {
	const source = String(value);
	if (typeof character !== "string") throw new TypeError("Expected character");
	let count = 0;
	let index = source.indexOf(character);
	while (index !== -1) {
		count++;
		index = source.indexOf(character, index + character.length);
	}
	return count;
}
function escapeStringRegexp(string) {
	if (typeof string !== "string") throw new TypeError("Expected a string");
	return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function findAndReplace(tree, list$1, options) {
	const ignored = convert((options || {}).ignore || []);
	const pairs = toPairs(list$1);
	let pairIndex = -1;
	while (++pairIndex < pairs.length) visitParents(tree, "text", visitor);
	function visitor(node, parents) {
		let index = -1;
		let grandparent;
		while (++index < parents.length) {
			const parent = parents[index];
			const siblings = grandparent ? grandparent.children : void 0;
			if (ignored(parent, siblings ? siblings.indexOf(parent) : void 0, grandparent)) return;
			grandparent = parent;
		}
		if (grandparent) return handler(node, parents);
	}
	function handler(node, parents) {
		const parent = parents[parents.length - 1];
		const find = pairs[pairIndex][0];
		const replace$1 = pairs[pairIndex][1];
		let start = 0;
		const index = parent.children.indexOf(node);
		let change = false;
		let nodes = [];
		find.lastIndex = 0;
		let match = find.exec(node.value);
		while (match) {
			const position = match.index;
			const matchObject = {
				index: match.index,
				input: match.input,
				stack: [...parents, node]
			};
			let value = replace$1(...match, matchObject);
			if (typeof value === "string") value = value.length > 0 ? {
				type: "text",
				value
			} : void 0;
			if (value === false) find.lastIndex = position + 1;
			else {
				if (start !== position) nodes.push({
					type: "text",
					value: node.value.slice(start, position)
				});
				if (Array.isArray(value)) nodes.push(...value);
				else if (value) nodes.push(value);
				start = position + match[0].length;
				change = true;
			}
			if (!find.global) break;
			match = find.exec(node.value);
		}
		if (change) {
			if (start < node.value.length) nodes.push({
				type: "text",
				value: node.value.slice(start)
			});
			parent.children.splice(index, 1, ...nodes);
		} else nodes = [node];
		return index + nodes.length;
	}
}
function toPairs(tupleOrList) {
	const result = [];
	if (!Array.isArray(tupleOrList)) throw new TypeError("Expected find and replace tuple or list of tuples");
	const list$1 = !tupleOrList[0] || Array.isArray(tupleOrList[0]) ? tupleOrList : [tupleOrList];
	let index = -1;
	while (++index < list$1.length) {
		const tuple = list$1[index];
		result.push([toExpression(tuple[0]), toFunction(tuple[1])]);
	}
	return result;
}
function toExpression(find) {
	return typeof find === "string" ? new RegExp(escapeStringRegexp(find), "g") : find;
}
function toFunction(replace$1) {
	return typeof replace$1 === "function" ? replace$1 : function() {
		return replace$1;
	};
}
var inConstruct = "phrasing";
var notInConstruct = [
	"autolink",
	"link",
	"image",
	"label"
];
function gfmAutolinkLiteralFromMarkdown() {
	return {
		transforms: [transformGfmAutolinkLiterals],
		enter: {
			literalAutolink: enterLiteralAutolink,
			literalAutolinkEmail: enterLiteralAutolinkValue,
			literalAutolinkHttp: enterLiteralAutolinkValue,
			literalAutolinkWww: enterLiteralAutolinkValue
		},
		exit: {
			literalAutolink: exitLiteralAutolink,
			literalAutolinkEmail: exitLiteralAutolinkEmail,
			literalAutolinkHttp: exitLiteralAutolinkHttp,
			literalAutolinkWww: exitLiteralAutolinkWww
		}
	};
}
function gfmAutolinkLiteralToMarkdown() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct,
			notInConstruct
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct,
			notInConstruct
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct,
			notInConstruct
		}
	] };
}
function enterLiteralAutolink(token) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, token);
}
function enterLiteralAutolinkValue(token) {
	this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
	this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
	this.config.exit.data.call(this, token);
	const node = this.stack[this.stack.length - 1];
	node.type;
	node.url = "http://" + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
	this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
	this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
	findAndReplace(tree, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl], [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), findEmail]], { ignore: ["link", "linkReference"] });
}
function findUrl(_, protocol, domain$1, path$1, match) {
	let prefix = "";
	if (!previous(match)) return false;
	if (/^w/i.test(protocol)) {
		domain$1 = protocol + domain$1;
		protocol = "";
		prefix = "http://";
	}
	if (!isCorrectDomain(domain$1)) return false;
	const parts = splitUrl(domain$1 + path$1);
	if (!parts[0]) return false;
	const result = {
		type: "link",
		title: null,
		url: prefix + protocol + parts[0],
		children: [{
			type: "text",
			value: protocol + parts[0]
		}]
	};
	if (parts[1]) return [result, {
		type: "text",
		value: parts[1]
	}];
	return result;
}
function findEmail(_, atext, label, match) {
	if (!previous(match, true) || /[-\d_]$/.test(label)) return false;
	return {
		type: "link",
		title: null,
		url: "mailto:" + atext + "@" + label,
		children: [{
			type: "text",
			value: atext + "@" + label
		}]
	};
}
function isCorrectDomain(domain$1) {
	const parts = domain$1.split(".");
	if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) return false;
	return true;
}
function splitUrl(url) {
	const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
	if (!trailExec) return [url, void 0];
	url = url.slice(0, trailExec.index);
	let trail$1 = trailExec[0];
	let closingParenIndex = trail$1.indexOf(")");
	const openingParens = ccount(url, "(");
	let closingParens = ccount(url, ")");
	while (closingParenIndex !== -1 && openingParens > closingParens) {
		url += trail$1.slice(0, closingParenIndex + 1);
		trail$1 = trail$1.slice(closingParenIndex + 1);
		closingParenIndex = trail$1.indexOf(")");
		closingParens++;
	}
	return [url, trail$1];
}
function previous(match, email) {
	const code$2 = match.input.charCodeAt(match.index - 1);
	return (match.index === 0 || unicodeWhitespace(code$2) || unicodePunctuation(code$2)) && (!email || code$2 !== 47);
}
footnoteReference.peek = footnoteReferencePeek;
function enterFootnoteCallString() {
	this.buffer();
}
function enterFootnoteCall(token) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, token);
}
function enterFootnoteDefinitionLabelString() {
	this.buffer();
}
function enterFootnoteDefinition(token) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, token);
}
function exitFootnoteCallString(token) {
	const label = this.resume();
	const node = this.stack[this.stack.length - 1];
	node.type;
	node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
	node.label = label;
}
function exitFootnoteCall(token) {
	this.exit(token);
}
function exitFootnoteDefinitionLabelString(token) {
	const label = this.resume();
	const node = this.stack[this.stack.length - 1];
	node.type;
	node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
	node.label = label;
}
function exitFootnoteDefinition(token) {
	this.exit(token);
}
function footnoteReferencePeek() {
	return "[";
}
function footnoteReference(node, _, state, info) {
	const tracker = state.createTracker(info);
	let value = tracker.move("[^");
	const exit$1 = state.enter("footnoteReference");
	const subexit = state.enter("reference");
	value += tracker.move(state.safe(state.associationId(node), {
		after: "]",
		before: value
	}));
	subexit();
	exit$1();
	value += tracker.move("]");
	return value;
}
function gfmFootnoteFromMarkdown() {
	return {
		enter: {
			gfmFootnoteCallString: enterFootnoteCallString,
			gfmFootnoteCall: enterFootnoteCall,
			gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
			gfmFootnoteDefinition: enterFootnoteDefinition
		},
		exit: {
			gfmFootnoteCallString: exitFootnoteCallString,
			gfmFootnoteCall: exitFootnoteCall,
			gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
			gfmFootnoteDefinition: exitFootnoteDefinition
		}
	};
}
function gfmFootnoteToMarkdown(options) {
	let firstLineBlank = false;
	if (options && options.firstLineBlank) firstLineBlank = true;
	return {
		handlers: {
			footnoteDefinition,
			footnoteReference
		},
		unsafe: [{
			character: "[",
			inConstruct: [
				"label",
				"phrasing",
				"reference"
			]
		}]
	};
	function footnoteDefinition(node, _, state, info) {
		const tracker = state.createTracker(info);
		let value = tracker.move("[^");
		const exit$1 = state.enter("footnoteDefinition");
		const subexit = state.enter("label");
		value += tracker.move(state.safe(state.associationId(node), {
			before: value,
			after: "]"
		}));
		subexit();
		value += tracker.move("]:");
		if (node.children && node.children.length > 0) {
			tracker.shift(4);
			value += tracker.move((firstLineBlank ? "\n" : " ") + state.indentLines(state.containerFlow(node, tracker.current()), firstLineBlank ? mapAll : mapExceptFirst));
		}
		exit$1();
		return value;
	}
}
function mapExceptFirst(line, index, blank) {
	return index === 0 ? line : mapAll(line, index, blank);
}
function mapAll(line, index, blank) {
	return (blank ? "" : "    ") + line;
}
var constructsWithoutStrikethrough = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
handleDelete.peek = peekDelete;
function gfmStrikethroughFromMarkdown() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: enterStrikethrough },
		exit: { strikethrough: exitStrikethrough }
	};
}
function gfmStrikethroughToMarkdown() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: constructsWithoutStrikethrough
		}],
		handlers: { delete: handleDelete }
	};
}
function enterStrikethrough(token) {
	this.enter({
		type: "delete",
		children: []
	}, token);
}
function exitStrikethrough(token) {
	this.exit(token);
}
function handleDelete(node, _, state, info) {
	const tracker = state.createTracker(info);
	const exit$1 = state.enter("strikethrough");
	let value = tracker.move("~~");
	value += state.containerPhrasing(node, {
		...tracker.current(),
		before: value,
		after: "~"
	});
	value += tracker.move("~~");
	exit$1();
	return value;
}
function peekDelete() {
	return "~";
}
function defaultStringLength(value) {
	return value.length;
}
function markdownTable(table, options) {
	const settings = options || {};
	const align = (settings.align || []).concat();
	const stringLength = settings.stringLength || defaultStringLength;
	const alignments = [];
	const cellMatrix = [];
	const sizeMatrix = [];
	const longestCellByColumn = [];
	let mostCellsPerRow = 0;
	let rowIndex = -1;
	while (++rowIndex < table.length) {
		const row$1 = [];
		const sizes$1 = [];
		let columnIndex$1 = -1;
		if (table[rowIndex].length > mostCellsPerRow) mostCellsPerRow = table[rowIndex].length;
		while (++columnIndex$1 < table[rowIndex].length) {
			const cell = serialize(table[rowIndex][columnIndex$1]);
			if (settings.alignDelimiters !== false) {
				const size = stringLength(cell);
				sizes$1[columnIndex$1] = size;
				if (longestCellByColumn[columnIndex$1] === void 0 || size > longestCellByColumn[columnIndex$1]) longestCellByColumn[columnIndex$1] = size;
			}
			row$1.push(cell);
		}
		cellMatrix[rowIndex] = row$1;
		sizeMatrix[rowIndex] = sizes$1;
	}
	let columnIndex = -1;
	if (typeof align === "object" && "length" in align) while (++columnIndex < mostCellsPerRow) alignments[columnIndex] = toAlignment(align[columnIndex]);
	else {
		const code$2 = toAlignment(align);
		while (++columnIndex < mostCellsPerRow) alignments[columnIndex] = code$2;
	}
	columnIndex = -1;
	const row = [];
	const sizes = [];
	while (++columnIndex < mostCellsPerRow) {
		const code$2 = alignments[columnIndex];
		let before = "";
		let after = "";
		if (code$2 === 99) {
			before = ":";
			after = ":";
		} else if (code$2 === 108) before = ":";
		else if (code$2 === 114) after = ":";
		let size = settings.alignDelimiters === false ? 1 : Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length);
		const cell = before + "-".repeat(size) + after;
		if (settings.alignDelimiters !== false) {
			size = before.length + size + after.length;
			if (size > longestCellByColumn[columnIndex]) longestCellByColumn[columnIndex] = size;
			sizes[columnIndex] = size;
		}
		row[columnIndex] = cell;
	}
	cellMatrix.splice(1, 0, row);
	sizeMatrix.splice(1, 0, sizes);
	rowIndex = -1;
	const lines = [];
	while (++rowIndex < cellMatrix.length) {
		const row$1 = cellMatrix[rowIndex];
		const sizes$1 = sizeMatrix[rowIndex];
		columnIndex = -1;
		const line = [];
		while (++columnIndex < mostCellsPerRow) {
			const cell = row$1[columnIndex] || "";
			let before = "";
			let after = "";
			if (settings.alignDelimiters !== false) {
				const size = longestCellByColumn[columnIndex] - (sizes$1[columnIndex] || 0);
				const code$2 = alignments[columnIndex];
				if (code$2 === 114) before = " ".repeat(size);
				else if (code$2 === 99) if (size % 2) {
					before = " ".repeat(size / 2 + .5);
					after = " ".repeat(size / 2 - .5);
				} else {
					before = " ".repeat(size / 2);
					after = before;
				}
				else after = " ".repeat(size);
			}
			if (settings.delimiterStart !== false && !columnIndex) line.push("|");
			if (settings.padding !== false && !(settings.alignDelimiters === false && cell === "") && (settings.delimiterStart !== false || columnIndex)) line.push(" ");
			if (settings.alignDelimiters !== false) line.push(before);
			line.push(cell);
			if (settings.alignDelimiters !== false) line.push(after);
			if (settings.padding !== false) line.push(" ");
			if (settings.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) line.push("|");
		}
		lines.push(settings.delimiterEnd === false ? line.join("").replace(/ +$/, "") : line.join(""));
	}
	return lines.join("\n");
}
function serialize(value) {
	return value === null || value === void 0 ? "" : String(value);
}
function toAlignment(value) {
	const code$2 = typeof value === "string" ? value.codePointAt(0) : 0;
	return code$2 === 67 || code$2 === 99 ? 99 : code$2 === 76 || code$2 === 108 ? 108 : code$2 === 82 || code$2 === 114 ? 114 : 0;
}
function blockquote(node, _, state, info) {
	const exit$1 = state.enter("blockquote");
	const tracker = state.createTracker(info);
	tracker.move("> ");
	tracker.shift(2);
	const value = state.indentLines(state.containerFlow(node, tracker.current()), map$1);
	exit$1();
	return value;
}
function map$1(line, _, blank) {
	return ">" + (blank ? "" : " ") + line;
}
function patternInScope(stack, pattern) {
	return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
function listInScope(stack, list$1, none) {
	if (typeof list$1 === "string") list$1 = [list$1];
	if (!list$1 || list$1.length === 0) return none;
	let index = -1;
	while (++index < list$1.length) if (stack.includes(list$1[index])) return true;
	return false;
}
function hardBreak(_, _1, state, info) {
	let index = -1;
	while (++index < state.unsafe.length) if (state.unsafe[index].character === "\n" && patternInScope(state.stack, state.unsafe[index])) return /[ \t]/.test(info.before) ? "" : " ";
	return "\\\n";
}
function longestStreak(value, substring) {
	const source = String(value);
	let index = source.indexOf(substring);
	let expected = index;
	let count = 0;
	let max = 0;
	if (typeof substring !== "string") throw new TypeError("Expected substring");
	while (index !== -1) {
		if (index === expected) {
			if (++count > max) max = count;
		} else count = 1;
		expected = index + substring.length;
		index = source.indexOf(substring, expected);
	}
	return max;
}
function formatCodeAsIndented(node, state) {
	return Boolean(state.options.fences === false && node.value && !node.lang && /[^ \r\n]/.test(node.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node.value));
}
function checkFence(state) {
	const marker = state.options.fence || "`";
	if (marker !== "`" && marker !== "~") throw new Error("Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`");
	return marker;
}
function code$1(node, _, state, info) {
	const marker = checkFence(state);
	const raw = node.value || "";
	const suffix = marker === "`" ? "GraveAccent" : "Tilde";
	if (formatCodeAsIndented(node, state)) {
		const exit$2 = state.enter("codeIndented");
		const value$1 = state.indentLines(raw, map);
		exit$2();
		return value$1;
	}
	const tracker = state.createTracker(info);
	const sequence = marker.repeat(Math.max(longestStreak(raw, marker) + 1, 3));
	const exit$1 = state.enter("codeFenced");
	let value = tracker.move(sequence);
	if (node.lang) {
		const subexit = state.enter(`codeFencedLang${suffix}`);
		value += tracker.move(state.safe(node.lang, {
			before: value,
			after: " ",
			encode: ["`"],
			...tracker.current()
		}));
		subexit();
	}
	if (node.lang && node.meta) {
		const subexit = state.enter(`codeFencedMeta${suffix}`);
		value += tracker.move(" ");
		value += tracker.move(state.safe(node.meta, {
			before: value,
			after: "\n",
			encode: ["`"],
			...tracker.current()
		}));
		subexit();
	}
	value += tracker.move("\n");
	if (raw) value += tracker.move(raw + "\n");
	value += tracker.move(sequence);
	exit$1();
	return value;
}
function map(line, _, blank) {
	return (blank ? "" : "    ") + line;
}
function checkQuote(state) {
	const marker = state.options.quote || "\"";
	if (marker !== "\"" && marker !== "'") throw new Error("Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`");
	return marker;
}
function definition(node, _, state, info) {
	const quote = checkQuote(state);
	const suffix = quote === "\"" ? "Quote" : "Apostrophe";
	const exit$1 = state.enter("definition");
	let subexit = state.enter("label");
	const tracker = state.createTracker(info);
	let value = tracker.move("[");
	value += tracker.move(state.safe(state.associationId(node), {
		before: value,
		after: "]",
		...tracker.current()
	}));
	value += tracker.move("]: ");
	subexit();
	if (!node.url || /[\0- \u007F]/.test(node.url)) {
		subexit = state.enter("destinationLiteral");
		value += tracker.move("<");
		value += tracker.move(state.safe(node.url, {
			before: value,
			after: ">",
			...tracker.current()
		}));
		value += tracker.move(">");
	} else {
		subexit = state.enter("destinationRaw");
		value += tracker.move(state.safe(node.url, {
			before: value,
			after: node.title ? " " : "\n",
			...tracker.current()
		}));
	}
	subexit();
	if (node.title) {
		subexit = state.enter(`title${suffix}`);
		value += tracker.move(" " + quote);
		value += tracker.move(state.safe(node.title, {
			before: value,
			after: quote,
			...tracker.current()
		}));
		value += tracker.move(quote);
		subexit();
	}
	exit$1();
	return value;
}
function checkEmphasis(state) {
	const marker = state.options.emphasis || "*";
	if (marker !== "*" && marker !== "_") throw new Error("Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`");
	return marker;
}
function encodeCharacterReference(code$2) {
	return "&#x" + code$2.toString(16).toUpperCase() + ";";
}
function encodeInfo(outside, inside, marker) {
	const outsideKind = classifyCharacter(outside);
	const insideKind = classifyCharacter(inside);
	if (outsideKind === void 0) return insideKind === void 0 ? marker === "_" ? {
		inside: true,
		outside: true
	} : {
		inside: false,
		outside: false
	} : insideKind === 1 ? {
		inside: true,
		outside: true
	} : {
		inside: false,
		outside: true
	};
	if (outsideKind === 1) return insideKind === void 0 ? {
		inside: false,
		outside: false
	} : insideKind === 1 ? {
		inside: true,
		outside: true
	} : {
		inside: false,
		outside: false
	};
	return insideKind === void 0 ? {
		inside: false,
		outside: false
	} : insideKind === 1 ? {
		inside: true,
		outside: false
	} : {
		inside: false,
		outside: false
	};
}
emphasis.peek = emphasisPeek;
function emphasis(node, _, state, info) {
	const marker = checkEmphasis(state);
	const exit$1 = state.enter("emphasis");
	const tracker = state.createTracker(info);
	const before = tracker.move(marker);
	let between = tracker.move(state.containerPhrasing(node, {
		after: marker,
		before,
		...tracker.current()
	}));
	const betweenHead = between.charCodeAt(0);
	const open = encodeInfo(info.before.charCodeAt(info.before.length - 1), betweenHead, marker);
	if (open.inside) between = encodeCharacterReference(betweenHead) + between.slice(1);
	const betweenTail = between.charCodeAt(between.length - 1);
	const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
	if (close.inside) between = between.slice(0, -1) + encodeCharacterReference(betweenTail);
	const after = tracker.move(marker);
	exit$1();
	state.attentionEncodeSurroundingInfo = {
		after: close.outside,
		before: open.outside
	};
	return before + between + after;
}
function emphasisPeek(_, _1, state) {
	return state.options.emphasis || "*";
}
function formatHeadingAsSetext(node, state) {
	let literalWithBreak = false;
	visit(node, function(node$1) {
		if ("value" in node$1 && /\r?\n|\r/.test(node$1.value) || node$1.type === "break") {
			literalWithBreak = true;
			return false;
		}
	});
	return Boolean((!node.depth || node.depth < 3) && toString(node) && (state.options.setext || literalWithBreak));
}
function heading(node, _, state, info) {
	const rank = Math.max(Math.min(6, node.depth || 1), 1);
	const tracker = state.createTracker(info);
	if (formatHeadingAsSetext(node, state)) {
		const exit$2 = state.enter("headingSetext");
		const subexit$1 = state.enter("phrasing");
		const value$1 = state.containerPhrasing(node, {
			...tracker.current(),
			before: "\n",
			after: "\n"
		});
		subexit$1();
		exit$2();
		return value$1 + "\n" + (rank === 1 ? "=" : "-").repeat(value$1.length - (Math.max(value$1.lastIndexOf("\r"), value$1.lastIndexOf("\n")) + 1));
	}
	const sequence = "#".repeat(rank);
	const exit$1 = state.enter("headingAtx");
	const subexit = state.enter("phrasing");
	tracker.move(sequence + " ");
	let value = state.containerPhrasing(node, {
		before: "# ",
		after: "\n",
		...tracker.current()
	});
	if (/^[\t ]/.test(value)) value = encodeCharacterReference(value.charCodeAt(0)) + value.slice(1);
	value = value ? sequence + " " + value : sequence;
	if (state.options.closeAtx) value += " " + sequence;
	subexit();
	exit$1();
	return value;
}
html.peek = htmlPeek;
function html(node) {
	return node.value || "";
}
function htmlPeek() {
	return "<";
}
image.peek = imagePeek;
function image(node, _, state, info) {
	const quote = checkQuote(state);
	const suffix = quote === "\"" ? "Quote" : "Apostrophe";
	const exit$1 = state.enter("image");
	let subexit = state.enter("label");
	const tracker = state.createTracker(info);
	let value = tracker.move("![");
	value += tracker.move(state.safe(node.alt, {
		before: value,
		after: "]",
		...tracker.current()
	}));
	value += tracker.move("](");
	subexit();
	if (!node.url && node.title || /[\0- \u007F]/.test(node.url)) {
		subexit = state.enter("destinationLiteral");
		value += tracker.move("<");
		value += tracker.move(state.safe(node.url, {
			before: value,
			after: ">",
			...tracker.current()
		}));
		value += tracker.move(">");
	} else {
		subexit = state.enter("destinationRaw");
		value += tracker.move(state.safe(node.url, {
			before: value,
			after: node.title ? " " : ")",
			...tracker.current()
		}));
	}
	subexit();
	if (node.title) {
		subexit = state.enter(`title${suffix}`);
		value += tracker.move(" " + quote);
		value += tracker.move(state.safe(node.title, {
			before: value,
			after: quote,
			...tracker.current()
		}));
		value += tracker.move(quote);
		subexit();
	}
	value += tracker.move(")");
	exit$1();
	return value;
}
function imagePeek() {
	return "!";
}
imageReference.peek = imageReferencePeek;
function imageReference(node, _, state, info) {
	const type = node.referenceType;
	const exit$1 = state.enter("imageReference");
	let subexit = state.enter("label");
	const tracker = state.createTracker(info);
	let value = tracker.move("![");
	const alt = state.safe(node.alt, {
		before: value,
		after: "]",
		...tracker.current()
	});
	value += tracker.move(alt + "][");
	subexit();
	const stack = state.stack;
	state.stack = [];
	subexit = state.enter("reference");
	const reference = state.safe(state.associationId(node), {
		before: value,
		after: "]",
		...tracker.current()
	});
	subexit();
	state.stack = stack;
	exit$1();
	if (type === "full" || !alt || alt !== reference) value += tracker.move(reference + "]");
	else if (type === "shortcut") value = value.slice(0, -1);
	else value += tracker.move("]");
	return value;
}
function imageReferencePeek() {
	return "!";
}
inlineCode.peek = inlineCodePeek;
function inlineCode(node, _, state) {
	let value = node.value || "";
	let sequence = "`";
	let index = -1;
	while ((/* @__PURE__ */ new RegExp("(^|[^`])" + sequence + "([^`]|$)")).test(value)) sequence += "`";
	if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) value = " " + value + " ";
	while (++index < state.unsafe.length) {
		const pattern = state.unsafe[index];
		const expression = state.compilePattern(pattern);
		let match;
		if (!pattern.atBreak) continue;
		while (match = expression.exec(value)) {
			let position = match.index;
			if (value.charCodeAt(position) === 10 && value.charCodeAt(position - 1) === 13) position--;
			value = value.slice(0, position) + " " + value.slice(match.index + 1);
		}
	}
	return sequence + value + sequence;
}
function inlineCodePeek() {
	return "`";
}
function formatLinkAsAutolink(node, state) {
	const raw = toString(node);
	return Boolean(!state.options.resourceLink && node.url && !node.title && node.children && node.children.length === 1 && node.children[0].type === "text" && (raw === node.url || "mailto:" + raw === node.url) && /^[a-z][a-z+.-]+:/i.test(node.url) && !/[\0- <>\u007F]/.test(node.url));
}
link.peek = linkPeek;
function link(node, _, state, info) {
	const quote = checkQuote(state);
	const suffix = quote === "\"" ? "Quote" : "Apostrophe";
	const tracker = state.createTracker(info);
	let exit$1;
	let subexit;
	if (formatLinkAsAutolink(node, state)) {
		const stack = state.stack;
		state.stack = [];
		exit$1 = state.enter("autolink");
		let value$1 = tracker.move("<");
		value$1 += tracker.move(state.containerPhrasing(node, {
			before: value$1,
			after: ">",
			...tracker.current()
		}));
		value$1 += tracker.move(">");
		exit$1();
		state.stack = stack;
		return value$1;
	}
	exit$1 = state.enter("link");
	subexit = state.enter("label");
	let value = tracker.move("[");
	value += tracker.move(state.containerPhrasing(node, {
		before: value,
		after: "](",
		...tracker.current()
	}));
	value += tracker.move("](");
	subexit();
	if (!node.url && node.title || /[\0- \u007F]/.test(node.url)) {
		subexit = state.enter("destinationLiteral");
		value += tracker.move("<");
		value += tracker.move(state.safe(node.url, {
			before: value,
			after: ">",
			...tracker.current()
		}));
		value += tracker.move(">");
	} else {
		subexit = state.enter("destinationRaw");
		value += tracker.move(state.safe(node.url, {
			before: value,
			after: node.title ? " " : ")",
			...tracker.current()
		}));
	}
	subexit();
	if (node.title) {
		subexit = state.enter(`title${suffix}`);
		value += tracker.move(" " + quote);
		value += tracker.move(state.safe(node.title, {
			before: value,
			after: quote,
			...tracker.current()
		}));
		value += tracker.move(quote);
		subexit();
	}
	value += tracker.move(")");
	exit$1();
	return value;
}
function linkPeek(node, _, state) {
	return formatLinkAsAutolink(node, state) ? "<" : "[";
}
linkReference.peek = linkReferencePeek;
function linkReference(node, _, state, info) {
	const type = node.referenceType;
	const exit$1 = state.enter("linkReference");
	let subexit = state.enter("label");
	const tracker = state.createTracker(info);
	let value = tracker.move("[");
	const text$2 = state.containerPhrasing(node, {
		before: value,
		after: "]",
		...tracker.current()
	});
	value += tracker.move(text$2 + "][");
	subexit();
	const stack = state.stack;
	state.stack = [];
	subexit = state.enter("reference");
	const reference = state.safe(state.associationId(node), {
		before: value,
		after: "]",
		...tracker.current()
	});
	subexit();
	state.stack = stack;
	exit$1();
	if (type === "full" || !text$2 || text$2 !== reference) value += tracker.move(reference + "]");
	else if (type === "shortcut") value = value.slice(0, -1);
	else value += tracker.move("]");
	return value;
}
function linkReferencePeek() {
	return "[";
}
function checkBullet(state) {
	const marker = state.options.bullet || "*";
	if (marker !== "*" && marker !== "+" && marker !== "-") throw new Error("Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return marker;
}
function checkBulletOther(state) {
	const bullet = checkBullet(state);
	const bulletOther = state.options.bulletOther;
	if (!bulletOther) return bullet === "*" ? "-" : "*";
	if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") throw new Error("Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (bulletOther === bullet) throw new Error("Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different");
	return bulletOther;
}
function checkBulletOrdered(state) {
	const marker = state.options.bulletOrdered || ".";
	if (marker !== "." && marker !== ")") throw new Error("Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`");
	return marker;
}
function checkRule(state) {
	const marker = state.options.rule || "*";
	if (marker !== "*" && marker !== "-" && marker !== "_") throw new Error("Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`");
	return marker;
}
function list(node, parent, state, info) {
	const exit$1 = state.enter("list");
	const bulletCurrent = state.bulletCurrent;
	let bullet = node.ordered ? checkBulletOrdered(state) : checkBullet(state);
	const bulletOther = node.ordered ? bullet === "." ? ")" : "." : checkBulletOther(state);
	let useDifferentMarker = parent && state.bulletLastUsed ? bullet === state.bulletLastUsed : false;
	if (!node.ordered) {
		const firstListItem = node.children ? node.children[0] : void 0;
		if ((bullet === "*" || bullet === "-") && firstListItem && (!firstListItem.children || !firstListItem.children[0]) && state.stack[state.stack.length - 1] === "list" && state.stack[state.stack.length - 2] === "listItem" && state.stack[state.stack.length - 3] === "list" && state.stack[state.stack.length - 4] === "listItem" && state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0) useDifferentMarker = true;
		if (checkRule(state) === bullet && firstListItem) {
			let index = -1;
			while (++index < node.children.length) {
				const item = node.children[index];
				if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
					useDifferentMarker = true;
					break;
				}
			}
		}
	}
	if (useDifferentMarker) bullet = bulletOther;
	state.bulletCurrent = bullet;
	const value = state.containerFlow(node, info);
	state.bulletLastUsed = bullet;
	state.bulletCurrent = bulletCurrent;
	exit$1();
	return value;
}
function checkListItemIndent(state) {
	const style = state.options.listItemIndent || "one";
	if (style !== "tab" && style !== "one" && style !== "mixed") throw new Error("Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return style;
}
function listItem(node, parent, state, info) {
	const listItemIndent = checkListItemIndent(state);
	let bullet = state.bulletCurrent || checkBullet(state);
	if (parent && parent.type === "list" && parent.ordered) bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + bullet;
	let size = bullet.length + 1;
	if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node.spread)) size = Math.ceil(size / 4) * 4;
	const tracker = state.createTracker(info);
	tracker.move(bullet + " ".repeat(size - bullet.length));
	tracker.shift(size);
	const exit$1 = state.enter("listItem");
	const value = state.indentLines(state.containerFlow(node, tracker.current()), map$2);
	exit$1();
	return value;
	function map$2(line, index, blank) {
		if (index) return (blank ? "" : " ".repeat(size)) + line;
		return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
	}
}
function paragraph(node, _, state, info) {
	const exit$1 = state.enter("paragraph");
	const subexit = state.enter("phrasing");
	const value = state.containerPhrasing(node, info);
	subexit();
	exit$1();
	return value;
}
const phrasing = convert([
	"break",
	"delete",
	"emphasis",
	"footnote",
	"footnoteReference",
	"image",
	"imageReference",
	"inlineCode",
	"inlineMath",
	"link",
	"linkReference",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"strong",
	"text",
	"textDirective"
]);
function root(node, _, state, info) {
	return (node.children.some(function(d) {
		return phrasing(d);
	}) ? state.containerPhrasing : state.containerFlow).call(state, node, info);
}
function checkStrong(state) {
	const marker = state.options.strong || "*";
	if (marker !== "*" && marker !== "_") throw new Error("Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`");
	return marker;
}
strong.peek = strongPeek;
function strong(node, _, state, info) {
	const marker = checkStrong(state);
	const exit$1 = state.enter("strong");
	const tracker = state.createTracker(info);
	const before = tracker.move(marker + marker);
	let between = tracker.move(state.containerPhrasing(node, {
		after: marker,
		before,
		...tracker.current()
	}));
	const betweenHead = between.charCodeAt(0);
	const open = encodeInfo(info.before.charCodeAt(info.before.length - 1), betweenHead, marker);
	if (open.inside) between = encodeCharacterReference(betweenHead) + between.slice(1);
	const betweenTail = between.charCodeAt(between.length - 1);
	const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
	if (close.inside) between = between.slice(0, -1) + encodeCharacterReference(betweenTail);
	const after = tracker.move(marker + marker);
	exit$1();
	state.attentionEncodeSurroundingInfo = {
		after: close.outside,
		before: open.outside
	};
	return before + between + after;
}
function strongPeek(_, _1, state) {
	return state.options.strong || "*";
}
function text$1(node, _, state, info) {
	return state.safe(node.value, info);
}
function checkRuleRepetition(state) {
	const repetition = state.options.ruleRepetition || 3;
	if (repetition < 3) throw new Error("Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more");
	return repetition;
}
function thematicBreak(_, _1, state) {
	const value = (checkRule(state) + (state.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(state));
	return state.options.ruleSpaces ? value.slice(0, -1) : value;
}
const handle = {
	blockquote,
	break: hardBreak,
	code: code$1,
	definition,
	emphasis,
	hardBreak,
	heading,
	html,
	image,
	imageReference,
	inlineCode,
	link,
	linkReference,
	list,
	listItem,
	paragraph,
	root,
	strong,
	text: text$1,
	thematicBreak
};
function gfmTableFromMarkdown() {
	return {
		enter: {
			table: enterTable,
			tableData: enterCell,
			tableHeader: enterCell,
			tableRow: enterRow
		},
		exit: {
			codeText: exitCodeText,
			table: exitTable,
			tableData: exit,
			tableHeader: exit,
			tableRow: exit
		}
	};
}
function enterTable(token) {
	const align = token._align;
	this.enter({
		type: "table",
		align: align.map(function(d) {
			return d === "none" ? null : d;
		}),
		children: []
	}, token);
	this.data.inTable = true;
}
function exitTable(token) {
	this.exit(token);
	this.data.inTable = void 0;
}
function enterRow(token) {
	this.enter({
		type: "tableRow",
		children: []
	}, token);
}
function exit(token) {
	this.exit(token);
}
function enterCell(token) {
	this.enter({
		type: "tableCell",
		children: []
	}, token);
}
function exitCodeText(token) {
	let value = this.resume();
	if (this.data.inTable) value = value.replace(/\\([\\|])/g, replace);
	const node = this.stack[this.stack.length - 1];
	node.type;
	node.value = value;
	this.exit(token);
}
function replace($0, $1) {
	return $1 === "|" ? $1 : $0;
}
function gfmTableToMarkdown(options) {
	const settings = options || {};
	const padding = settings.tableCellPadding;
	const alignDelimiters = settings.tablePipeAlign;
	const stringLength = settings.stringLength;
	const around = padding ? " " : "|";
	return {
		unsafe: [
			{
				character: "\r",
				inConstruct: "tableCell"
			},
			{
				character: "\n",
				inConstruct: "tableCell"
			},
			{
				atBreak: true,
				character: "|",
				after: "[	 :-]"
			},
			{
				character: "|",
				inConstruct: "tableCell"
			},
			{
				atBreak: true,
				character: ":",
				after: "-"
			},
			{
				atBreak: true,
				character: "-",
				after: "[:|-]"
			}
		],
		handlers: {
			inlineCode: inlineCodeWithTable,
			table: handleTable,
			tableCell: handleTableCell,
			tableRow: handleTableRow
		}
	};
	function handleTable(node, _, state, info) {
		return serializeData(handleTableAsData(node, state, info), node.align);
	}
	function handleTableRow(node, _, state, info) {
		const value = serializeData([handleTableRowAsData(node, state, info)]);
		return value.slice(0, value.indexOf("\n"));
	}
	function handleTableCell(node, _, state, info) {
		const exit$1 = state.enter("tableCell");
		const subexit = state.enter("phrasing");
		const value = state.containerPhrasing(node, {
			...info,
			before: around,
			after: around
		});
		subexit();
		exit$1();
		return value;
	}
	function serializeData(matrix, align) {
		return markdownTable(matrix, {
			align,
			alignDelimiters,
			padding,
			stringLength
		});
	}
	function handleTableAsData(node, state, info) {
		const children = node.children;
		let index = -1;
		const result = [];
		const subexit = state.enter("table");
		while (++index < children.length) result[index] = handleTableRowAsData(children[index], state, info);
		subexit();
		return result;
	}
	function handleTableRowAsData(node, state, info) {
		const children = node.children;
		let index = -1;
		const result = [];
		const subexit = state.enter("tableRow");
		while (++index < children.length) result[index] = handleTableCell(children[index], node, state, info);
		subexit();
		return result;
	}
	function inlineCodeWithTable(node, parent, state) {
		let value = handle.inlineCode(node, parent, state);
		if (state.stack.includes("tableCell")) value = value.replace(/\|/g, "\\$&");
		return value;
	}
}
function gfmTaskListItemFromMarkdown() {
	return { exit: {
		taskListCheckValueChecked: exitCheck,
		taskListCheckValueUnchecked: exitCheck,
		paragraph: exitParagraphWithTaskListItem
	} };
}
function gfmTaskListItemToMarkdown() {
	return {
		unsafe: [{
			atBreak: true,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: listItemWithTaskListItem }
	};
}
function exitCheck(token) {
	const node = this.stack[this.stack.length - 2];
	node.type;
	node.checked = token.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(token) {
	const parent = this.stack[this.stack.length - 2];
	if (parent && parent.type === "listItem" && typeof parent.checked === "boolean") {
		const node = this.stack[this.stack.length - 1];
		node.type;
		const head = node.children[0];
		if (head && head.type === "text") {
			const siblings = parent.children;
			let index = -1;
			let firstParaghraph;
			while (++index < siblings.length) {
				const sibling = siblings[index];
				if (sibling.type === "paragraph") {
					firstParaghraph = sibling;
					break;
				}
			}
			if (firstParaghraph === node) {
				head.value = head.value.slice(1);
				if (head.value.length === 0) node.children.shift();
				else if (node.position && head.position && typeof head.position.start.offset === "number") {
					head.position.start.column++;
					head.position.start.offset++;
					node.position.start = Object.assign({}, head.position.start);
				}
			}
		}
	}
	this.exit(token);
}
function listItemWithTaskListItem(node, parent, state, info) {
	const head = node.children[0];
	const checkable = typeof node.checked === "boolean" && head && head.type === "paragraph";
	const checkbox = "[" + (node.checked ? "x" : " ") + "] ";
	const tracker = state.createTracker(info);
	if (checkable) tracker.move(checkbox);
	let value = handle.listItem(node, parent, state, {
		...info,
		...tracker.current()
	});
	if (checkable) value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
	return value;
	function check($0) {
		return $0 + checkbox;
	}
}
function gfmFromMarkdown() {
	return [
		gfmAutolinkLiteralFromMarkdown(),
		gfmFootnoteFromMarkdown(),
		gfmStrikethroughFromMarkdown(),
		gfmTableFromMarkdown(),
		gfmTaskListItemFromMarkdown()
	];
}
function gfmToMarkdown(options) {
	return { extensions: [
		gfmAutolinkLiteralToMarkdown(),
		gfmFootnoteToMarkdown(options),
		gfmStrikethroughToMarkdown(),
		gfmTableToMarkdown(options),
		gfmTaskListItemToMarkdown()
	] };
}
var wwwPrefix = {
	tokenize: tokenizeWwwPrefix,
	partial: true
};
var domain = {
	tokenize: tokenizeDomain,
	partial: true
};
var path = {
	tokenize: tokenizePath,
	partial: true
};
var trail = {
	tokenize: tokenizeTrail,
	partial: true
};
var emailDomainDotTrail = {
	tokenize: tokenizeEmailDomainDotTrail,
	partial: true
};
var wwwAutolink = {
	name: "wwwAutolink",
	tokenize: tokenizeWwwAutolink,
	previous: previousWww
};
var protocolAutolink = {
	name: "protocolAutolink",
	tokenize: tokenizeProtocolAutolink,
	previous: previousProtocol
};
var emailAutolink = {
	name: "emailAutolink",
	tokenize: tokenizeEmailAutolink,
	previous: previousEmail
};
var text = {};
function gfmAutolinkLiteral() {
	return { text };
}
var code = 48;
while (code < 123) {
	text[code] = emailAutolink;
	code++;
	if (code === 58) code = 65;
	else if (code === 91) code = 97;
}
text[43] = emailAutolink;
text[45] = emailAutolink;
text[46] = emailAutolink;
text[95] = emailAutolink;
text[72] = [emailAutolink, protocolAutolink];
text[104] = [emailAutolink, protocolAutolink];
text[87] = [emailAutolink, wwwAutolink];
text[119] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(effects, ok$1, nok) {
	const self = this;
	let dot;
	let data;
	return start;
	function start(code$2) {
		if (!gfmAtext(code$2) || !previousEmail.call(self, self.previous) || previousUnbalanced(self.events)) return nok(code$2);
		effects.enter("literalAutolink");
		effects.enter("literalAutolinkEmail");
		return atext(code$2);
	}
	function atext(code$2) {
		if (gfmAtext(code$2)) {
			effects.consume(code$2);
			return atext;
		}
		if (code$2 === 64) {
			effects.consume(code$2);
			return emailDomain;
		}
		return nok(code$2);
	}
	function emailDomain(code$2) {
		if (code$2 === 46) return effects.check(emailDomainDotTrail, emailDomainAfter, emailDomainDot)(code$2);
		if (code$2 === 45 || code$2 === 95 || asciiAlphanumeric(code$2)) {
			data = true;
			effects.consume(code$2);
			return emailDomain;
		}
		return emailDomainAfter(code$2);
	}
	function emailDomainDot(code$2) {
		effects.consume(code$2);
		dot = true;
		return emailDomain;
	}
	function emailDomainAfter(code$2) {
		if (data && dot && asciiAlpha(self.previous)) {
			effects.exit("literalAutolinkEmail");
			effects.exit("literalAutolink");
			return ok$1(code$2);
		}
		return nok(code$2);
	}
}
function tokenizeWwwAutolink(effects, ok$1, nok) {
	const self = this;
	return wwwStart;
	function wwwStart(code$2) {
		if (code$2 !== 87 && code$2 !== 119 || !previousWww.call(self, self.previous) || previousUnbalanced(self.events)) return nok(code$2);
		effects.enter("literalAutolink");
		effects.enter("literalAutolinkWww");
		return effects.check(wwwPrefix, effects.attempt(domain, effects.attempt(path, wwwAfter), nok), nok)(code$2);
	}
	function wwwAfter(code$2) {
		effects.exit("literalAutolinkWww");
		effects.exit("literalAutolink");
		return ok$1(code$2);
	}
}
function tokenizeProtocolAutolink(effects, ok$1, nok) {
	const self = this;
	let buffer = "";
	let seen = false;
	return protocolStart;
	function protocolStart(code$2) {
		if ((code$2 === 72 || code$2 === 104) && previousProtocol.call(self, self.previous) && !previousUnbalanced(self.events)) {
			effects.enter("literalAutolink");
			effects.enter("literalAutolinkHttp");
			buffer += String.fromCodePoint(code$2);
			effects.consume(code$2);
			return protocolPrefixInside;
		}
		return nok(code$2);
	}
	function protocolPrefixInside(code$2) {
		if (asciiAlpha(code$2) && buffer.length < 5) {
			buffer += String.fromCodePoint(code$2);
			effects.consume(code$2);
			return protocolPrefixInside;
		}
		if (code$2 === 58) {
			const protocol = buffer.toLowerCase();
			if (protocol === "http" || protocol === "https") {
				effects.consume(code$2);
				return protocolSlashesInside;
			}
		}
		return nok(code$2);
	}
	function protocolSlashesInside(code$2) {
		if (code$2 === 47) {
			effects.consume(code$2);
			if (seen) return afterProtocol;
			seen = true;
			return protocolSlashesInside;
		}
		return nok(code$2);
	}
	function afterProtocol(code$2) {
		return code$2 === null || asciiControl(code$2) || markdownLineEndingOrSpace(code$2) || unicodeWhitespace(code$2) || unicodePunctuation(code$2) ? nok(code$2) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code$2);
	}
	function protocolAfter(code$2) {
		effects.exit("literalAutolinkHttp");
		effects.exit("literalAutolink");
		return ok$1(code$2);
	}
}
function tokenizeWwwPrefix(effects, ok$1, nok) {
	let size = 0;
	return wwwPrefixInside;
	function wwwPrefixInside(code$2) {
		if ((code$2 === 87 || code$2 === 119) && size < 3) {
			size++;
			effects.consume(code$2);
			return wwwPrefixInside;
		}
		if (code$2 === 46 && size === 3) {
			effects.consume(code$2);
			return wwwPrefixAfter;
		}
		return nok(code$2);
	}
	function wwwPrefixAfter(code$2) {
		return code$2 === null ? nok(code$2) : ok$1(code$2);
	}
}
function tokenizeDomain(effects, ok$1, nok) {
	let underscoreInLastSegment;
	let underscoreInLastLastSegment;
	let seen;
	return domainInside;
	function domainInside(code$2) {
		if (code$2 === 46 || code$2 === 95) return effects.check(trail, domainAfter, domainAtPunctuation)(code$2);
		if (code$2 === null || markdownLineEndingOrSpace(code$2) || unicodeWhitespace(code$2) || code$2 !== 45 && unicodePunctuation(code$2)) return domainAfter(code$2);
		seen = true;
		effects.consume(code$2);
		return domainInside;
	}
	function domainAtPunctuation(code$2) {
		if (code$2 === 95) underscoreInLastSegment = true;
		else {
			underscoreInLastLastSegment = underscoreInLastSegment;
			underscoreInLastSegment = void 0;
		}
		effects.consume(code$2);
		return domainInside;
	}
	function domainAfter(code$2) {
		if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) return nok(code$2);
		return ok$1(code$2);
	}
}
function tokenizePath(effects, ok$1) {
	let sizeOpen = 0;
	let sizeClose = 0;
	return pathInside;
	function pathInside(code$2) {
		if (code$2 === 40) {
			sizeOpen++;
			effects.consume(code$2);
			return pathInside;
		}
		if (code$2 === 41 && sizeClose < sizeOpen) return pathAtPunctuation(code$2);
		if (code$2 === 33 || code$2 === 34 || code$2 === 38 || code$2 === 39 || code$2 === 41 || code$2 === 42 || code$2 === 44 || code$2 === 46 || code$2 === 58 || code$2 === 59 || code$2 === 60 || code$2 === 63 || code$2 === 93 || code$2 === 95 || code$2 === 126) return effects.check(trail, ok$1, pathAtPunctuation)(code$2);
		if (code$2 === null || markdownLineEndingOrSpace(code$2) || unicodeWhitespace(code$2)) return ok$1(code$2);
		effects.consume(code$2);
		return pathInside;
	}
	function pathAtPunctuation(code$2) {
		if (code$2 === 41) sizeClose++;
		effects.consume(code$2);
		return pathInside;
	}
}
function tokenizeTrail(effects, ok$1, nok) {
	return trail$1;
	function trail$1(code$2) {
		if (code$2 === 33 || code$2 === 34 || code$2 === 39 || code$2 === 41 || code$2 === 42 || code$2 === 44 || code$2 === 46 || code$2 === 58 || code$2 === 59 || code$2 === 63 || code$2 === 95 || code$2 === 126) {
			effects.consume(code$2);
			return trail$1;
		}
		if (code$2 === 38) {
			effects.consume(code$2);
			return trailCharacterReferenceStart;
		}
		if (code$2 === 93) {
			effects.consume(code$2);
			return trailBracketAfter;
		}
		if (code$2 === 60 || code$2 === null || markdownLineEndingOrSpace(code$2) || unicodeWhitespace(code$2)) return ok$1(code$2);
		return nok(code$2);
	}
	function trailBracketAfter(code$2) {
		if (code$2 === null || code$2 === 40 || code$2 === 91 || markdownLineEndingOrSpace(code$2) || unicodeWhitespace(code$2)) return ok$1(code$2);
		return trail$1(code$2);
	}
	function trailCharacterReferenceStart(code$2) {
		return asciiAlpha(code$2) ? trailCharacterReferenceInside(code$2) : nok(code$2);
	}
	function trailCharacterReferenceInside(code$2) {
		if (code$2 === 59) {
			effects.consume(code$2);
			return trail$1;
		}
		if (asciiAlpha(code$2)) {
			effects.consume(code$2);
			return trailCharacterReferenceInside;
		}
		return nok(code$2);
	}
}
function tokenizeEmailDomainDotTrail(effects, ok$1, nok) {
	return start;
	function start(code$2) {
		effects.consume(code$2);
		return after;
	}
	function after(code$2) {
		return asciiAlphanumeric(code$2) ? nok(code$2) : ok$1(code$2);
	}
}
function previousWww(code$2) {
	return code$2 === null || code$2 === 40 || code$2 === 42 || code$2 === 95 || code$2 === 91 || code$2 === 93 || code$2 === 126 || markdownLineEndingOrSpace(code$2);
}
function previousProtocol(code$2) {
	return !asciiAlpha(code$2);
}
function previousEmail(code$2) {
	return !(code$2 === 47 || gfmAtext(code$2));
}
function gfmAtext(code$2) {
	return code$2 === 43 || code$2 === 45 || code$2 === 46 || code$2 === 95 || asciiAlphanumeric(code$2);
}
function previousUnbalanced(events) {
	let index = events.length;
	let result = false;
	while (index--) {
		const token = events[index][1];
		if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
			result = true;
			break;
		}
		if (token._gfmAutolinkLiteralWalkedInto) {
			result = false;
			break;
		}
	}
	if (events.length > 0 && !result) events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
	return result;
}
var indent = {
	tokenize: tokenizeIndent,
	partial: true
};
function gfmFootnote() {
	return {
		document: { [91]: {
			name: "gfmFootnoteDefinition",
			tokenize: tokenizeDefinitionStart,
			continuation: { tokenize: tokenizeDefinitionContinuation },
			exit: gfmFootnoteDefinitionEnd
		} },
		text: {
			[91]: {
				name: "gfmFootnoteCall",
				tokenize: tokenizeGfmFootnoteCall
			},
			[93]: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: tokenizePotentialGfmFootnoteCall,
				resolveTo: resolveToPotentialGfmFootnoteCall
			}
		}
	};
}
function tokenizePotentialGfmFootnoteCall(effects, ok$1, nok) {
	const self = this;
	let index = self.events.length;
	const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
	let labelStart;
	while (index--) {
		const token = self.events[index][1];
		if (token.type === "labelImage") {
			labelStart = token;
			break;
		}
		if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") break;
	}
	return start;
	function start(code$2) {
		if (!labelStart || !labelStart._balanced) return nok(code$2);
		const id = normalizeIdentifier(self.sliceSerialize({
			start: labelStart.end,
			end: self.now()
		}));
		if (id.codePointAt(0) !== 94 || !defined.includes(id.slice(1))) return nok(code$2);
		effects.enter("gfmFootnoteCallLabelMarker");
		effects.consume(code$2);
		effects.exit("gfmFootnoteCallLabelMarker");
		return ok$1(code$2);
	}
}
function resolveToPotentialGfmFootnoteCall(events, context) {
	let index = events.length;
	while (index--) if (events[index][1].type === "labelImage" && events[index][0] === "enter") {
		events[index][1];
		break;
	}
	events[index + 1][1].type = "data";
	events[index + 3][1].type = "gfmFootnoteCallLabelMarker";
	const call = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, events[index + 3][1].start),
		end: Object.assign({}, events[events.length - 1][1].end)
	};
	const marker = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, events[index + 3][1].end),
		end: Object.assign({}, events[index + 3][1].end)
	};
	marker.end.column++;
	marker.end.offset++;
	marker.end._bufferIndex++;
	const string = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, marker.end),
		end: Object.assign({}, events[events.length - 1][1].start)
	};
	const chunk = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, string.start),
		end: Object.assign({}, string.end)
	};
	const replacement = [
		events[index + 1],
		events[index + 2],
		[
			"enter",
			call,
			context
		],
		events[index + 3],
		events[index + 4],
		[
			"enter",
			marker,
			context
		],
		[
			"exit",
			marker,
			context
		],
		[
			"enter",
			string,
			context
		],
		[
			"enter",
			chunk,
			context
		],
		[
			"exit",
			chunk,
			context
		],
		[
			"exit",
			string,
			context
		],
		events[events.length - 2],
		events[events.length - 1],
		[
			"exit",
			call,
			context
		]
	];
	events.splice(index, events.length - index + 1, ...replacement);
	return events;
}
function tokenizeGfmFootnoteCall(effects, ok$1, nok) {
	const self = this;
	const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
	let size = 0;
	let data;
	return start;
	function start(code$2) {
		effects.enter("gfmFootnoteCall");
		effects.enter("gfmFootnoteCallLabelMarker");
		effects.consume(code$2);
		effects.exit("gfmFootnoteCallLabelMarker");
		return callStart;
	}
	function callStart(code$2) {
		if (code$2 !== 94) return nok(code$2);
		effects.enter("gfmFootnoteCallMarker");
		effects.consume(code$2);
		effects.exit("gfmFootnoteCallMarker");
		effects.enter("gfmFootnoteCallString");
		effects.enter("chunkString").contentType = "string";
		return callData;
	}
	function callData(code$2) {
		if (size > 999 || code$2 === 93 && !data || code$2 === null || code$2 === 91 || markdownLineEndingOrSpace(code$2)) return nok(code$2);
		if (code$2 === 93) {
			effects.exit("chunkString");
			const token = effects.exit("gfmFootnoteCallString");
			if (!defined.includes(normalizeIdentifier(self.sliceSerialize(token)))) return nok(code$2);
			effects.enter("gfmFootnoteCallLabelMarker");
			effects.consume(code$2);
			effects.exit("gfmFootnoteCallLabelMarker");
			effects.exit("gfmFootnoteCall");
			return ok$1;
		}
		if (!markdownLineEndingOrSpace(code$2)) data = true;
		size++;
		effects.consume(code$2);
		return code$2 === 92 ? callEscape : callData;
	}
	function callEscape(code$2) {
		if (code$2 === 91 || code$2 === 92 || code$2 === 93) {
			effects.consume(code$2);
			size++;
			return callData;
		}
		return callData(code$2);
	}
}
function tokenizeDefinitionStart(effects, ok$1, nok) {
	const self = this;
	const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
	let identifier;
	let size = 0;
	let data;
	return start;
	function start(code$2) {
		effects.enter("gfmFootnoteDefinition")._container = true;
		effects.enter("gfmFootnoteDefinitionLabel");
		effects.enter("gfmFootnoteDefinitionLabelMarker");
		effects.consume(code$2);
		effects.exit("gfmFootnoteDefinitionLabelMarker");
		return labelAtMarker;
	}
	function labelAtMarker(code$2) {
		if (code$2 === 94) {
			effects.enter("gfmFootnoteDefinitionMarker");
			effects.consume(code$2);
			effects.exit("gfmFootnoteDefinitionMarker");
			effects.enter("gfmFootnoteDefinitionLabelString");
			effects.enter("chunkString").contentType = "string";
			return labelInside;
		}
		return nok(code$2);
	}
	function labelInside(code$2) {
		if (size > 999 || code$2 === 93 && !data || code$2 === null || code$2 === 91 || markdownLineEndingOrSpace(code$2)) return nok(code$2);
		if (code$2 === 93) {
			effects.exit("chunkString");
			const token = effects.exit("gfmFootnoteDefinitionLabelString");
			identifier = normalizeIdentifier(self.sliceSerialize(token));
			effects.enter("gfmFootnoteDefinitionLabelMarker");
			effects.consume(code$2);
			effects.exit("gfmFootnoteDefinitionLabelMarker");
			effects.exit("gfmFootnoteDefinitionLabel");
			return labelAfter;
		}
		if (!markdownLineEndingOrSpace(code$2)) data = true;
		size++;
		effects.consume(code$2);
		return code$2 === 92 ? labelEscape : labelInside;
	}
	function labelEscape(code$2) {
		if (code$2 === 91 || code$2 === 92 || code$2 === 93) {
			effects.consume(code$2);
			size++;
			return labelInside;
		}
		return labelInside(code$2);
	}
	function labelAfter(code$2) {
		if (code$2 === 58) {
			effects.enter("definitionMarker");
			effects.consume(code$2);
			effects.exit("definitionMarker");
			if (!defined.includes(identifier)) defined.push(identifier);
			return factorySpace(effects, whitespaceAfter, "gfmFootnoteDefinitionWhitespace");
		}
		return nok(code$2);
	}
	function whitespaceAfter(code$2) {
		return ok$1(code$2);
	}
}
function tokenizeDefinitionContinuation(effects, ok$1, nok) {
	return effects.check(blankLine, ok$1, effects.attempt(indent, ok$1, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
	effects.exit("gfmFootnoteDefinition");
}
function tokenizeIndent(effects, ok$1, nok) {
	const self = this;
	return factorySpace(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 5);
	function afterPrefix(code$2) {
		const tail = self.events[self.events.length - 1];
		return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok$1(code$2) : nok(code$2);
	}
}
function gfmStrikethrough(options) {
	let single = (options || {}).singleTilde;
	const tokenizer = {
		name: "strikethrough",
		tokenize: tokenizeStrikethrough,
		resolveAll: resolveAllStrikethrough
	};
	if (single === null || single === void 0) single = true;
	return {
		text: { [126]: tokenizer },
		insideSpan: { null: [tokenizer] },
		attentionMarkers: { null: [126] }
	};
	function resolveAllStrikethrough(events, context) {
		let index = -1;
		while (++index < events.length) if (events[index][0] === "enter" && events[index][1].type === "strikethroughSequenceTemporary" && events[index][1]._close) {
			let open = index;
			while (open--) if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && events[index][1].end.offset - events[index][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
				events[index][1].type = "strikethroughSequence";
				events[open][1].type = "strikethroughSequence";
				const strikethrough = {
					type: "strikethrough",
					start: Object.assign({}, events[open][1].start),
					end: Object.assign({}, events[index][1].end)
				};
				const text$2 = {
					type: "strikethroughText",
					start: Object.assign({}, events[open][1].end),
					end: Object.assign({}, events[index][1].start)
				};
				const nextEvents = [
					[
						"enter",
						strikethrough,
						context
					],
					[
						"enter",
						events[open][1],
						context
					],
					[
						"exit",
						events[open][1],
						context
					],
					[
						"enter",
						text$2,
						context
					]
				];
				const insideSpan = context.parser.constructs.insideSpan.null;
				if (insideSpan) splice(nextEvents, nextEvents.length, 0, resolveAll(insideSpan, events.slice(open + 1, index), context));
				splice(nextEvents, nextEvents.length, 0, [
					[
						"exit",
						text$2,
						context
					],
					[
						"enter",
						events[index][1],
						context
					],
					[
						"exit",
						events[index][1],
						context
					],
					[
						"exit",
						strikethrough,
						context
					]
				]);
				splice(events, open - 1, index - open + 3, nextEvents);
				index = open + nextEvents.length - 2;
				break;
			}
		}
		index = -1;
		while (++index < events.length) if (events[index][1].type === "strikethroughSequenceTemporary") events[index][1].type = "data";
		return events;
	}
	function tokenizeStrikethrough(effects, ok$1, nok) {
		const previous$1 = this.previous;
		const events = this.events;
		let size = 0;
		return start;
		function start(code$2) {
			if (previous$1 === 126 && events[events.length - 1][1].type !== "characterEscape") return nok(code$2);
			effects.enter("strikethroughSequenceTemporary");
			return more(code$2);
		}
		function more(code$2) {
			const before = classifyCharacter(previous$1);
			if (code$2 === 126) {
				if (size > 1) return nok(code$2);
				effects.consume(code$2);
				size++;
				return more;
			}
			if (size < 2 && !single) return nok(code$2);
			const token = effects.exit("strikethroughSequenceTemporary");
			const after = classifyCharacter(code$2);
			token._open = !after || after === 2 && Boolean(before);
			token._close = !before || before === 2 && Boolean(after);
			return ok$1(code$2);
		}
	}
}
var EditMap = class {
	constructor() {
		this.map = [];
	}
	add(index, remove, add) {
		addImplementation(this, index, remove, add);
	}
	consume(events) {
		this.map.sort(function(a, b) {
			return a[0] - b[0];
		});
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
		if (this.map.length === 0) return;
		let index = this.map.length;
		const vecs = [];
		while (index > 0) {
			index -= 1;
			vecs.push(events.slice(this.map[index][0] + this.map[index][1]), this.map[index][2]);
			events.length = this.map[index][0];
		}
		vecs.push(events.slice());
		events.length = 0;
		let slice = vecs.pop();
		while (slice) {
			for (const element of slice) events.push(element);
			slice = vecs.pop();
		}
		this.map.length = 0;
	}
};
function addImplementation(editMap, at, remove, add) {
	let index = 0;
	/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
	if (remove === 0 && add.length === 0) return;
	while (index < editMap.map.length) {
		if (editMap.map[index][0] === at) {
			editMap.map[index][1] += remove;
			editMap.map[index][2].push(...add);
			return;
		}
		index += 1;
	}
	editMap.map.push([
		at,
		remove,
		add
	]);
}
function gfmTableAlign(events, index) {
	let inDelimiterRow = false;
	const align = [];
	while (index < events.length) {
		const event = events[index];
		if (inDelimiterRow) {
			if (event[0] === "enter") {
				if (event[1].type === "tableContent") align.push(events[index + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			} else if (event[1].type === "tableContent") {
				if (events[index - 1][1].type === "tableDelimiterMarker") {
					const alignIndex = align.length - 1;
					align[alignIndex] = align[alignIndex] === "left" ? "center" : "right";
				}
			} else if (event[1].type === "tableDelimiterRow") break;
		} else if (event[0] === "enter" && event[1].type === "tableDelimiterRow") inDelimiterRow = true;
		index += 1;
	}
	return align;
}
function gfmTable() {
	return { flow: { null: {
		name: "table",
		tokenize: tokenizeTable,
		resolveAll: resolveTable
	} } };
}
function tokenizeTable(effects, ok$1, nok) {
	const self = this;
	let size = 0;
	let sizeB = 0;
	let seen;
	return start;
	function start(code$2) {
		let index = self.events.length - 1;
		while (index > -1) {
			const type = self.events[index][1].type;
			if (type === "lineEnding" || type === "linePrefix") index--;
			else break;
		}
		const tail = index > -1 ? self.events[index][1].type : null;
		const next = tail === "tableHead" || tail === "tableRow" ? bodyRowStart : headRowBefore;
		if (next === bodyRowStart && self.parser.lazy[self.now().line]) return nok(code$2);
		return next(code$2);
	}
	function headRowBefore(code$2) {
		effects.enter("tableHead");
		effects.enter("tableRow");
		return headRowStart(code$2);
	}
	function headRowStart(code$2) {
		if (code$2 === 124) return headRowBreak(code$2);
		seen = true;
		sizeB += 1;
		return headRowBreak(code$2);
	}
	function headRowBreak(code$2) {
		if (code$2 === null) return nok(code$2);
		if (markdownLineEnding(code$2)) {
			if (sizeB > 1) {
				sizeB = 0;
				self.interrupt = true;
				effects.exit("tableRow");
				effects.enter("lineEnding");
				effects.consume(code$2);
				effects.exit("lineEnding");
				return headDelimiterStart;
			}
			return nok(code$2);
		}
		if (markdownSpace(code$2)) return factorySpace(effects, headRowBreak, "whitespace")(code$2);
		sizeB += 1;
		if (seen) {
			seen = false;
			size += 1;
		}
		if (code$2 === 124) {
			effects.enter("tableCellDivider");
			effects.consume(code$2);
			effects.exit("tableCellDivider");
			seen = true;
			return headRowBreak;
		}
		effects.enter("data");
		return headRowData(code$2);
	}
	function headRowData(code$2) {
		if (code$2 === null || code$2 === 124 || markdownLineEndingOrSpace(code$2)) {
			effects.exit("data");
			return headRowBreak(code$2);
		}
		effects.consume(code$2);
		return code$2 === 92 ? headRowEscape : headRowData;
	}
	function headRowEscape(code$2) {
		if (code$2 === 92 || code$2 === 124) {
			effects.consume(code$2);
			return headRowData;
		}
		return headRowData(code$2);
	}
	function headDelimiterStart(code$2) {
		self.interrupt = false;
		if (self.parser.lazy[self.now().line]) return nok(code$2);
		effects.enter("tableDelimiterRow");
		seen = false;
		if (markdownSpace(code$2)) return factorySpace(effects, headDelimiterBefore, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code$2);
		return headDelimiterBefore(code$2);
	}
	function headDelimiterBefore(code$2) {
		if (code$2 === 45 || code$2 === 58) return headDelimiterValueBefore(code$2);
		if (code$2 === 124) {
			seen = true;
			effects.enter("tableCellDivider");
			effects.consume(code$2);
			effects.exit("tableCellDivider");
			return headDelimiterCellBefore;
		}
		return headDelimiterNok(code$2);
	}
	function headDelimiterCellBefore(code$2) {
		if (markdownSpace(code$2)) return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code$2);
		return headDelimiterValueBefore(code$2);
	}
	function headDelimiterValueBefore(code$2) {
		if (code$2 === 58) {
			sizeB += 1;
			seen = true;
			effects.enter("tableDelimiterMarker");
			effects.consume(code$2);
			effects.exit("tableDelimiterMarker");
			return headDelimiterLeftAlignmentAfter;
		}
		if (code$2 === 45) {
			sizeB += 1;
			return headDelimiterLeftAlignmentAfter(code$2);
		}
		if (code$2 === null || markdownLineEnding(code$2)) return headDelimiterCellAfter(code$2);
		return headDelimiterNok(code$2);
	}
	function headDelimiterLeftAlignmentAfter(code$2) {
		if (code$2 === 45) {
			effects.enter("tableDelimiterFiller");
			return headDelimiterFiller(code$2);
		}
		return headDelimiterNok(code$2);
	}
	function headDelimiterFiller(code$2) {
		if (code$2 === 45) {
			effects.consume(code$2);
			return headDelimiterFiller;
		}
		if (code$2 === 58) {
			seen = true;
			effects.exit("tableDelimiterFiller");
			effects.enter("tableDelimiterMarker");
			effects.consume(code$2);
			effects.exit("tableDelimiterMarker");
			return headDelimiterRightAlignmentAfter;
		}
		effects.exit("tableDelimiterFiller");
		return headDelimiterRightAlignmentAfter(code$2);
	}
	function headDelimiterRightAlignmentAfter(code$2) {
		if (markdownSpace(code$2)) return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code$2);
		return headDelimiterCellAfter(code$2);
	}
	function headDelimiterCellAfter(code$2) {
		if (code$2 === 124) return headDelimiterBefore(code$2);
		if (code$2 === null || markdownLineEnding(code$2)) {
			if (!seen || size !== sizeB) return headDelimiterNok(code$2);
			effects.exit("tableDelimiterRow");
			effects.exit("tableHead");
			return ok$1(code$2);
		}
		return headDelimiterNok(code$2);
	}
	function headDelimiterNok(code$2) {
		return nok(code$2);
	}
	function bodyRowStart(code$2) {
		effects.enter("tableRow");
		return bodyRowBreak(code$2);
	}
	function bodyRowBreak(code$2) {
		if (code$2 === 124) {
			effects.enter("tableCellDivider");
			effects.consume(code$2);
			effects.exit("tableCellDivider");
			return bodyRowBreak;
		}
		if (code$2 === null || markdownLineEnding(code$2)) {
			effects.exit("tableRow");
			return ok$1(code$2);
		}
		if (markdownSpace(code$2)) return factorySpace(effects, bodyRowBreak, "whitespace")(code$2);
		effects.enter("data");
		return bodyRowData(code$2);
	}
	function bodyRowData(code$2) {
		if (code$2 === null || code$2 === 124 || markdownLineEndingOrSpace(code$2)) {
			effects.exit("data");
			return bodyRowBreak(code$2);
		}
		effects.consume(code$2);
		return code$2 === 92 ? bodyRowEscape : bodyRowData;
	}
	function bodyRowEscape(code$2) {
		if (code$2 === 92 || code$2 === 124) {
			effects.consume(code$2);
			return bodyRowData;
		}
		return bodyRowData(code$2);
	}
}
function resolveTable(events, context) {
	let index = -1;
	let inFirstCellAwaitingPipe = true;
	let rowKind = 0;
	let lastCell = [
		0,
		0,
		0,
		0
	];
	let cell = [
		0,
		0,
		0,
		0
	];
	let afterHeadAwaitingFirstBodyRow = false;
	let lastTableEnd = 0;
	let currentTable;
	let currentBody;
	let currentCell;
	const map$2 = new EditMap();
	while (++index < events.length) {
		const event = events[index];
		const token = event[1];
		if (event[0] === "enter") {
			if (token.type === "tableHead") {
				afterHeadAwaitingFirstBodyRow = false;
				if (lastTableEnd !== 0) {
					flushTableEnd(map$2, context, lastTableEnd, currentTable, currentBody);
					currentBody = void 0;
					lastTableEnd = 0;
				}
				currentTable = {
					type: "table",
					start: Object.assign({}, token.start),
					end: Object.assign({}, token.end)
				};
				map$2.add(index, 0, [[
					"enter",
					currentTable,
					context
				]]);
			} else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
				inFirstCellAwaitingPipe = true;
				currentCell = void 0;
				lastCell = [
					0,
					0,
					0,
					0
				];
				cell = [
					0,
					index + 1,
					0,
					0
				];
				if (afterHeadAwaitingFirstBodyRow) {
					afterHeadAwaitingFirstBodyRow = false;
					currentBody = {
						type: "tableBody",
						start: Object.assign({}, token.start),
						end: Object.assign({}, token.end)
					};
					map$2.add(index, 0, [[
						"enter",
						currentBody,
						context
					]]);
				}
				rowKind = token.type === "tableDelimiterRow" ? 2 : currentBody ? 3 : 1;
			} else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
				inFirstCellAwaitingPipe = false;
				if (cell[2] === 0) {
					if (lastCell[1] !== 0) {
						cell[0] = cell[1];
						currentCell = flushCell(map$2, context, lastCell, rowKind, void 0, currentCell);
						lastCell = [
							0,
							0,
							0,
							0
						];
					}
					cell[2] = index;
				}
			} else if (token.type === "tableCellDivider") if (inFirstCellAwaitingPipe) inFirstCellAwaitingPipe = false;
			else {
				if (lastCell[1] !== 0) {
					cell[0] = cell[1];
					currentCell = flushCell(map$2, context, lastCell, rowKind, void 0, currentCell);
				}
				lastCell = cell;
				cell = [
					lastCell[1],
					index,
					0,
					0
				];
			}
		} else if (token.type === "tableHead") {
			afterHeadAwaitingFirstBodyRow = true;
			lastTableEnd = index;
		} else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
			lastTableEnd = index;
			if (lastCell[1] !== 0) {
				cell[0] = cell[1];
				currentCell = flushCell(map$2, context, lastCell, rowKind, index, currentCell);
			} else if (cell[1] !== 0) currentCell = flushCell(map$2, context, cell, rowKind, index, currentCell);
			rowKind = 0;
		} else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) cell[3] = index;
	}
	if (lastTableEnd !== 0) flushTableEnd(map$2, context, lastTableEnd, currentTable, currentBody);
	map$2.consume(context.events);
	index = -1;
	while (++index < context.events.length) {
		const event = context.events[index];
		if (event[0] === "enter" && event[1].type === "table") event[1]._align = gfmTableAlign(context.events, index);
	}
	return events;
}
function flushCell(map$2, context, range, rowKind, rowEnd, previousCell) {
	const groupName = rowKind === 1 ? "tableHeader" : rowKind === 2 ? "tableDelimiter" : "tableData";
	const valueName = "tableContent";
	if (range[0] !== 0) {
		previousCell.end = Object.assign({}, getPoint(context.events, range[0]));
		map$2.add(range[0], 0, [[
			"exit",
			previousCell,
			context
		]]);
	}
	const now = getPoint(context.events, range[1]);
	previousCell = {
		type: groupName,
		start: Object.assign({}, now),
		end: Object.assign({}, now)
	};
	map$2.add(range[1], 0, [[
		"enter",
		previousCell,
		context
	]]);
	if (range[2] !== 0) {
		const relatedStart = getPoint(context.events, range[2]);
		const relatedEnd = getPoint(context.events, range[3]);
		const valueToken = {
			type: valueName,
			start: Object.assign({}, relatedStart),
			end: Object.assign({}, relatedEnd)
		};
		map$2.add(range[2], 0, [[
			"enter",
			valueToken,
			context
		]]);
		if (rowKind !== 2) {
			const start = context.events[range[2]];
			const end = context.events[range[3]];
			start[1].end = Object.assign({}, end[1].end);
			start[1].type = "chunkText";
			start[1].contentType = "text";
			if (range[3] > range[2] + 1) {
				const a = range[2] + 1;
				const b = range[3] - range[2] - 1;
				map$2.add(a, b, []);
			}
		}
		map$2.add(range[3] + 1, 0, [[
			"exit",
			valueToken,
			context
		]]);
	}
	if (rowEnd !== void 0) {
		previousCell.end = Object.assign({}, getPoint(context.events, rowEnd));
		map$2.add(rowEnd, 0, [[
			"exit",
			previousCell,
			context
		]]);
		previousCell = void 0;
	}
	return previousCell;
}
function flushTableEnd(map$2, context, index, table, tableBody) {
	const exits = [];
	const related = getPoint(context.events, index);
	if (tableBody) {
		tableBody.end = Object.assign({}, related);
		exits.push([
			"exit",
			tableBody,
			context
		]);
	}
	table.end = Object.assign({}, related);
	exits.push([
		"exit",
		table,
		context
	]);
	map$2.add(index + 1, 0, exits);
}
function getPoint(events, index) {
	const event = events[index];
	const side = event[0] === "enter" ? "start" : "end";
	return event[1][side];
}
var tasklistCheck = {
	name: "tasklistCheck",
	tokenize: tokenizeTasklistCheck
};
function gfmTaskListItem() {
	return { text: { [91]: tasklistCheck } };
}
function tokenizeTasklistCheck(effects, ok$1, nok) {
	const self = this;
	return open;
	function open(code$2) {
		if (self.previous !== null || !self._gfmTasklistFirstContentOfListItem) return nok(code$2);
		effects.enter("taskListCheck");
		effects.enter("taskListCheckMarker");
		effects.consume(code$2);
		effects.exit("taskListCheckMarker");
		return inside;
	}
	function inside(code$2) {
		if (markdownLineEndingOrSpace(code$2)) {
			effects.enter("taskListCheckValueUnchecked");
			effects.consume(code$2);
			effects.exit("taskListCheckValueUnchecked");
			return close;
		}
		if (code$2 === 88 || code$2 === 120) {
			effects.enter("taskListCheckValueChecked");
			effects.consume(code$2);
			effects.exit("taskListCheckValueChecked");
			return close;
		}
		return nok(code$2);
	}
	function close(code$2) {
		if (code$2 === 93) {
			effects.enter("taskListCheckMarker");
			effects.consume(code$2);
			effects.exit("taskListCheckMarker");
			effects.exit("taskListCheck");
			return after;
		}
		return nok(code$2);
	}
	function after(code$2) {
		if (markdownLineEnding(code$2)) return ok$1(code$2);
		if (markdownSpace(code$2)) return effects.check({ tokenize: spaceThenNonSpace }, ok$1, nok)(code$2);
		return nok(code$2);
	}
}
function spaceThenNonSpace(effects, ok$1, nok) {
	return factorySpace(effects, after, "whitespace");
	function after(code$2) {
		return code$2 === null ? nok(code$2) : ok$1(code$2);
	}
}
function gfm(options) {
	return combineExtensions([
		gfmAutolinkLiteral(),
		gfmFootnote(),
		gfmStrikethrough(options),
		gfmTable(),
		gfmTaskListItem()
	]);
}
var emptyOptions = {};
function remarkGfm(options) {
	const self = this;
	const settings = options || emptyOptions;
	const data = self.data();
	const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);
	const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);
	const toMarkdownExtensions = data.toMarkdownExtensions || (data.toMarkdownExtensions = []);
	micromarkExtensions.push(gfm(settings));
	fromMarkdownExtensions.push(gfmFromMarkdown());
	toMarkdownExtensions.push(gfmToMarkdown(settings));
}
export { formatCodeAsIndented as a, encodeCharacterReference as i, handle as n, patternInScope as o, formatHeadingAsSetext as r, escapeStringRegexp as s, remarkGfm as t };
