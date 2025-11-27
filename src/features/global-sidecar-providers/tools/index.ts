import type { Tool } from "@agent-labs/agent-chat";
import { getWorkspaceContextTool } from "./workspace-context";
import { fsReaddirTool, fsReadFileTool, fsStatTool } from "./fs";
import {
  excalidrawAnalyzeTool,
  excalidrawAIGenerateDiagramTool,
  excalidrawAIAppendDiagramTool,
  excalidrawCreateDiagramTool,
  excalidrawAppendDiagramTool,
  excalidrawModifyTool,
} from "./excalidraw";
import {
  drawioGenerateDiagramTool,
  drawioAnalyzeTool,
  drawioModifyTool,
} from "./drawio";

export const GLOBAL_AGENT_TOOLS: Tool[] = [
  getWorkspaceContextTool,
  fsReaddirTool,
  fsReadFileTool,
  fsStatTool,
  excalidrawAnalyzeTool,
  excalidrawAIGenerateDiagramTool,
  excalidrawAIAppendDiagramTool,
  excalidrawCreateDiagramTool,
  excalidrawAppendDiagramTool,
  excalidrawModifyTool,
  drawioGenerateDiagramTool,
  drawioAnalyzeTool,
  drawioModifyTool,
];
