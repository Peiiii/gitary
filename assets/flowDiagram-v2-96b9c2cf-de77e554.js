import { p as parser$1, f as flowDb } from "./flowDb-956e92f1-288d74e8.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-c10674c1-ed2b0f56.js";
import { v as setConfig } from "./index-f07981df.js";
import "./app-e2c5defa.js";
import "./graph-782f8747.js";
import "./layout-cc573759.js";
import "./index-3862675e-fc855d48.js";
import "./clone-ccbbda47.js";
import "./edges-e0da2a9e-5bd46cf9.js";
import "./createText-2e5e7dd3-0fc6747e.js";
import "./react-markdown-1245d4fe.js";
import "./chakra-ui-31f48106.js";
import "./line-f9aa94df.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./channel-c4c38647.js";
import "./monaco-f0dde6c1.js";
import "./vendor-c051683a.js";
import "./react-utils-d801a309.js";
import "./common-utils-40e9b830.js";
import "./react-syntax-highlighter-bb88d724.js";
import "./remark-gfm-e39f7469.js";
const diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
