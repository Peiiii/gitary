export interface DrawioNode {
  id: string;
  label: string;
  position: { x: number; y: number };
  type?: string;
}

export interface DrawioEdge {
  id: string;
  from: string;
  to: string;
}

export interface DrawioXmlParseResult {
  doc: Document;
  root: Element;
  nodes: DrawioNode[];
  edges: DrawioEdge[];
  nextId: number;
}

export function parseDrawioXml(xml: string): DrawioXmlParseResult {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");

  const mxfile = doc.querySelector("mxfile");
  if (!mxfile) {
    throw new Error("Invalid Draw.io XML: missing mxfile element");
  }

  const diagram = mxfile.querySelector("diagram");
  if (!diagram) {
    throw new Error("Invalid Draw.io XML: missing diagram element");
  }

  const mxGraphModel = diagram.querySelector("mxGraphModel");
  if (!mxGraphModel) {
    throw new Error("Invalid Draw.io XML: missing mxGraphModel element");
  }

  const root = mxGraphModel.querySelector("root");
  if (!root) {
    throw new Error("Invalid Draw.io XML: missing root element");
  }

  const nodes: DrawioNode[] = [];
  const edges: DrawioEdge[] = [];
  let maxId = 0;

  const cells = root.querySelectorAll("mxCell");
  cells.forEach((cell) => {
    const id = cell.getAttribute("id") || "";
    const idNum = parseInt(id, 10);
    if (!isNaN(idNum) && idNum > maxId) {
      maxId = idNum;
    }

    const value = cell.getAttribute("value") || "";
    const vertex = cell.getAttribute("vertex");
    const edge = cell.getAttribute("edge");
    const source = cell.getAttribute("source");
    const target = cell.getAttribute("target");

    if (vertex === "1" && value) {
      const geometry = cell.querySelector("mxGeometry");
      const x = geometry ? parseFloat(geometry.getAttribute("x") || "0") : 0;
      const y = geometry ? parseFloat(geometry.getAttribute("y") || "0") : 0;

      nodes.push({
        id,
        label: value,
        position: { x, y },
      });
    }

    if (edge === "1" && source && target) {
      edges.push({
        id,
        from: source,
        to: target,
      });
    }
  });

  return {
    doc,
    root,
    nodes,
    edges,
    nextId: maxId + 1,
  };
}

export function findNodeByRef(
  nodes: DrawioNode[],
  ref: string
): DrawioNode | null {
  if (!ref) return null;
  const trimmed = ref.trim();
  const lowered = trimmed.toLowerCase();

  let found = nodes.find((node) => node.id === trimmed);
  if (found) return found;

  found = nodes.find(
    (node) => node.label.trim().toLowerCase() === lowered
  );
  if (found) return found;

  found = nodes.find((node) =>
    node.label.toLowerCase().includes(lowered)
  );
  return found ?? null;
}

export function getNodePosition(node: DrawioNode): { x: number; y: number } {
  return node.position;
}

export function computeBounds(nodes: DrawioNode[]): {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
} | null {
  if (!nodes.length) return null;

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  nodes.forEach((node) => {
    const { x, y } = node.position;
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  });

  return { minX, minY, maxX, maxY };
}

export function createDrawioNode(
  doc: Document,
  params: {
    id: string;
    label: string;
    position: { x: number; y: number };
    kind?: string;
  }
): Element {
  const { id, label, position, kind } = params;

  const cell = doc.createElement("mxCell");
  cell.setAttribute("id", id);
  cell.setAttribute("value", label);
  cell.setAttribute("vertex", "1");
  cell.setAttribute("parent", "1");

  let style = "rounded=1;whiteSpace=wrap;html=1;";
  if (kind === "database") {
    style += "shape=cylinder3;whiteSpace=wrap;html=1;boundedLbl=1;";
  } else if (kind === "service" || kind === "api") {
    style += "fillColor=#dbeafe;strokeColor=#1e1e1e;";
  } else if (kind === "cache") {
    style += "shape=hexagon;whiteSpace=wrap;html=1;";
  }
  cell.setAttribute("style", style);

  const geometry = doc.createElement("mxGeometry");
  geometry.setAttribute("x", position.x.toString());
  geometry.setAttribute("y", position.y.toString());
  geometry.setAttribute("width", "120");
  geometry.setAttribute("height", "60");
  geometry.setAttribute("as", "geometry");
  cell.appendChild(geometry);

  return cell;
}

export function createDrawioEdge(
  doc: Document,
  params: {
    id: string;
    fromId: string;
    toId: string;
  }
): Element {
  const { id, fromId, toId } = params;

  const cell = doc.createElement("mxCell");
  cell.setAttribute("id", id);
  cell.setAttribute("edge", "1");
  cell.setAttribute("parent", "1");
  cell.setAttribute("source", fromId);
  cell.setAttribute("target", toId);
  cell.setAttribute("style", "endArrow=classic;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;");

  const geometry = doc.createElement("mxGeometry");
  geometry.setAttribute("width", "50");
  geometry.setAttribute("height", "50");
  geometry.setAttribute("relative", "1");
  geometry.setAttribute("as", "geometry");
  cell.appendChild(geometry);

  return cell;
}

