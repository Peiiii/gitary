import { PenTool } from "lucide-react";
import {
  AiFillCode,
  AiFillFile,
  AiFillFileText,
  AiFillHtml5
} from "react-icons/ai";
import {
  SiCss3,
  SiGo,
  SiJavascript,
  SiMarkdown,
  SiPython,
  SiRust,
  SiTypescript,
} from "react-icons/si";
import type { ComponentType } from "react";

export interface FileTypeConfig {
  extensions: string[];
  icon: ComponentType<{ className?: string; size?: number | string; color?: string }>;
  color: string;
}

export const FILE_TYPES: Record<string, FileTypeConfig> = {
  excalidraw: {
    extensions: [".excalidraw.json", ".excalidraw"],
    icon: PenTool,
    color: "#6366f1",
  },
  markdown: {
    extensions: [".md", ".markdown"],
    icon: SiMarkdown,
    color: "#14668b",
  },
  json: {
    extensions: [".json"],
    icon: AiFillFileText,
    color: "#8b6914",
  },
  typescript: {
    extensions: [".ts", ".tsx"],
    icon: SiTypescript,
    color: "#3178c6",
  },
  javascript: {
    extensions: [".js", ".jsx", ".mjs"],
    icon: SiJavascript,
    color: "#997e1a",
  },
  html: {
    extensions: [".html", ".htm"],
    icon: AiFillHtml5,
    color: "#e34c26",
  },
  css: {
    extensions: [".css", ".scss", ".sass", ".less"],
    icon: SiCss3,
    color: "#264de4",
  },
  python: {
    extensions: [".py", ".pyw", ".pyc"],
    icon: SiPython,
    color: "#3776ab",
  },
  rust: {
    extensions: [".rs"],
    icon: SiRust,
    color: "#dea584",
  },
  go: {
    extensions: [".go"],
    icon: SiGo,
    color: "#00add8",
  },
  config: {
    extensions: [".yml", ".yaml", ".toml", ".ini", ".conf", ".config"],
    icon: AiFillCode,
    color: "#6e6e6e",
  },
  default: {
    extensions: [],
    icon: AiFillFile,
    color: "var(--secondary-color)",
  },
};

export const getFileTypeByExtension = (filename: string): FileTypeConfig => {
  const lowerFilename = filename.toLowerCase();
  
  for (const [, config] of Object.entries(FILE_TYPES)) {
    for (const ext of config.extensions) {
      if (lowerFilename.endsWith(ext.toLowerCase())) {
        return config;
      }
    }
  }

  return FILE_TYPES.default;
};
