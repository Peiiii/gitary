import type { Tool } from "@agent-labs/agent-chat";
import { t } from "@/i18n/utils";
import { getCurrentDrawioHandle } from "@/services/drawio-runtime";
import type { DrawioOperation, ApplyOperationsResult } from "./types";
import {
  parseDrawioXml,
  findNodeByRef,
  getNodePosition,
  computeBounds,
  createDrawioNode,
  createDrawioEdge,
} from "./drawio-xml-utils";

export const drawioModifyTool: Tool<
  { operations: DrawioOperation[] },
  ApplyOperationsResult
> = {
  name: "drawio_modify",
  description: t("drawio.tools.applyOperationsDescription"),
  parameters: {
    type: "object",
    properties: {
      operations: {
        type: "array",
        description: t("drawio.tools.applyOperationsOperationsDescription"),
        items: {
          type: "object",
          properties: {
            op: {
              type: "string",
              enum: ["add_node", "connect", "rename_node", "delete_node"],
              description: t("drawio.tools.applyOperationsOpDescription"),
            },
            id: {
              type: "string",
              description: t("drawio.tools.applyOperationsIdDescription"),
            },
            label: {
              type: "string",
              description: t("drawio.tools.applyOperationsLabelDescription"),
            },
            kind: {
              type: "string",
              description: t("drawio.tools.applyOperationsKindDescription"),
            },
            near: {
              type: "string",
              description: t("drawio.tools.applyOperationsNearDescription"),
            },
            from: {
              type: "string",
              description: t("drawio.tools.applyOperationsFromDescription"),
            },
            to: {
              type: "string",
              description: t("drawio.tools.applyOperationsToDescription"),
            },
            target: {
              type: "string",
              description: t("drawio.tools.applyOperationsTargetDescription"),
            },
            newLabel: {
              type: "string",
              description: t("drawio.tools.applyOperationsNewLabelDescription"),
            },
          },
          required: ["op"],
          additionalProperties: false,
        },
      },
    },
    required: ["operations"],
    additionalProperties: false,
  },
  async execute(args) {
    const handle = getCurrentDrawioHandle();
    if (!handle) {
      throw new Error(t("drawio.tools.noCanvas"));
    }

    const xml = handle.getXml();
    if (!xml || !xml.trim()) {
      throw new Error(t("drawio.tools.emptyCanvas"));
    }

    const operations = args?.operations ?? [];
    if (!operations.length) {
      throw new Error(t("drawio.tools.operationsRequired"));
    }

    try {
      const { doc, root, nodes, edges, nextId } = parseDrawioXml(xml);
      
      const failed: { index: number; op: string; reason: string }[] = [];
      let applied = 0;
      let currentNextId = nextId;

      const bounds = computeBounds(nodes);
      const defaultCenter = bounds
        ? {
            x: (bounds.minX + bounds.maxX) / 2,
            y: (bounds.minY + bounds.maxY) / 2,
          }
        : { x: 200, y: 200 };

      const addFailure = (index: number, op: DrawioOperation, reason: string) => {
        failed.push({ index, op: op.op, reason });
      };

      operations.forEach((op, index) => {
        if (!op || typeof op.op !== "string") {
          addFailure(index, { op: "add_node" }, t("drawio.tools.invalidOperation"));
          return;
        }

        if (op.op === "add_node") {
          const label = (op.label ?? "").trim();
          if (!label) {
            addFailure(index, op, t("drawio.tools.addNodeLabelRequired"));
            return;
          }

          const nodeId = (op.id && op.id.trim()) || `node-${currentNextId++}`;
          const cellId = `cell-${currentNextId++}`;

          let position = defaultCenter;
          if (op.near) {
            const nearNode = findNodeByRef(nodes, op.near);
            if (nearNode) {
              const nearPos = getNodePosition(nearNode);
              position = { x: nearPos.x + 200, y: nearPos.y };
            }
          } else if (bounds) {
            position = { x: bounds.maxX + 200, y: defaultCenter.y };
          }

          const newNode = createDrawioNode(doc, {
            id: cellId,
            label,
            position,
            kind: op.kind,
          });

          root.appendChild(newNode);
          nodes.push({ id: cellId, label, position });
          applied += 1;
          return;
        }

        if (op.op === "connect") {
          const fromRef = (op.from ?? "").trim();
          const toRef = (op.to ?? "").trim();
          if (!fromRef || !toRef) {
            addFailure(index, op, t("drawio.tools.connectFromToRequired"));
            return;
          }

          const fromNode = findNodeByRef(nodes, fromRef);
          const toNode = findNodeByRef(nodes, toRef);
          if (!fromNode || !toNode) {
            addFailure(index, op, t("drawio.tools.connectNodeNotFound"));
            return;
          }

          const edgeId = `edge-${currentNextId++}`;
          const newEdge = createDrawioEdge(doc, {
            id: edgeId,
            fromId: fromNode.id,
            toId: toNode.id,
          });

          root.appendChild(newEdge);
          edges.push({ id: edgeId, from: fromNode.id, to: toNode.id });
          applied += 1;
          return;
        }

        if (op.op === "rename_node") {
          const targetRef = (op.target ?? "").trim();
          const newLabel = (op.newLabel ?? "").trim();
          if (!targetRef || !newLabel) {
            addFailure(index, op, t("drawio.tools.renameTargetLabelRequired"));
            return;
          }

          const targetNode = findNodeByRef(nodes, targetRef);
          if (!targetNode) {
            addFailure(index, op, t("drawio.tools.renameNodeNotFound"));
            return;
          }

          const cell = root.querySelector(`mxCell[id="${targetNode.id}"]`);
          if (cell) {
            cell.setAttribute("value", newLabel);
            targetNode.label = newLabel;
            applied += 1;
          } else {
            addFailure(index, op, t("drawio.tools.renameNodeNotFound"));
          }
          return;
        }

        if (op.op === "delete_node") {
          const targetRef = (op.target ?? "").trim();
          if (!targetRef) {
            addFailure(index, op, t("drawio.tools.deleteTargetRequired"));
            return;
          }

          const targetNode = findNodeByRef(nodes, targetRef);
          if (!targetNode) {
            addFailure(index, op, t("drawio.tools.deleteNodeNotFound"));
            return;
          }

          const cell = root.querySelector(`mxCell[id="${targetNode.id}"]`);
          if (cell) {
            root.removeChild(cell);
            
            const relatedEdges = root.querySelectorAll(
              `mxCell[source="${targetNode.id}"], mxCell[target="${targetNode.id}"]`
            );
            relatedEdges.forEach((edge) => root.removeChild(edge));

            applied += 1;
          } else {
            addFailure(index, op, t("drawio.tools.deleteNodeNotFound"));
          }
          return;
        }

        addFailure(index, op, t("drawio.tools.unknownOperationType", { type: op.op }));
      });

      const serializer = new XMLSerializer();
      const updatedXml = serializer.serializeToString(doc);
      handle.updateXml(updatedXml);

      return {
        applied,
        failed,
      };
    } catch (error) {
      console.error("Failed to apply Draw.io operations:", error);
      throw new Error(
        error instanceof Error
          ? error.message
          : t("drawio.tools.applyOperationsFailed")
      );
    }
  },
};

