import type { Tool } from "@agent-labs/agent-chat";
import { t } from "@/i18n/utils";
import { drawioAIService } from "@/services/ai/drawio-ai.service";
import { getCurrentDrawioHandle } from "@/services/drawio-runtime";

export const drawioGenerateDiagramTool: Tool<
  { prompt: string; mode?: "append" | "replace" },
  { success: boolean; mode: "append" | "replace" }
> = {
  name: "drawio_generate_diagram",
  description: t("drawio.tools.generateDiagramDescription"),
  parameters: {
    type: "object",
    properties: {
      prompt: {
        type: "string",
        description: t("drawio.tools.generateDiagramPromptDescription"),
      },
      mode: {
        type: "string",
        enum: ["append", "replace"],
        description: t("drawio.tools.generateDiagramModeDescription"),
        default: "append",
      },
    },
    required: ["prompt"],
    additionalProperties: false,
  },
  async execute(args) {
    const handle = getCurrentDrawioHandle();
    if (!handle) {
      throw new Error(t("drawio.tools.noCanvas"));
    }

    const prompt = (args?.prompt ?? "").trim();
    const mode: "append" | "replace" =
      args?.mode === "replace" ? "replace" : "append";

    if (!prompt) {
      throw new Error(t("drawio.tools.promptRequired"));
    }

    const newXml = await drawioAIService.generateDiagram(prompt);
    
    if (mode === "replace") {
      handle.updateXml(newXml);
    } else {
      const currentXml = handle.getXml();
      if (currentXml && currentXml.trim()) {
        const mergedXml = await mergeDrawioXml(currentXml, newXml);
        handle.updateXml(mergedXml);
      } else {
        handle.updateXml(newXml);
      }
    }

    return {
      success: true,
      mode,
    };
  },
};

async function mergeDrawioXml(existingXml: string, newXml: string): Promise<string> {
  try {
    const parser = new DOMParser();
    const existingDoc = parser.parseFromString(existingXml, "text/xml");
    const newDoc = parser.parseFromString(newXml, "text/xml");

    const existingRoot = existingDoc.querySelector("mxfile");
    const newRoot = newDoc.querySelector("mxfile");

    if (!existingRoot || !newRoot) {
      return newXml;
    }

    const newDiagrams = newRoot.querySelectorAll("diagram");

    newDiagrams.forEach((newDiagram, index) => {
      const cloned = newDiagram.cloneNode(true) as Element;
      cloned.setAttribute("id", `diagram-${Date.now()}-${index}`);
      existingRoot.appendChild(cloned);
    });

    const serializer = new XMLSerializer();
    return serializer.serializeToString(existingDoc);
  } catch (error) {
    console.error("Failed to merge Draw.io XML:", error);
    return newXml;
  }
}

