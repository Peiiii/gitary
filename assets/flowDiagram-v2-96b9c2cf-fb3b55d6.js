import { p as parser$1, f as flowDb } from "./flowDb-956e92f1-ae02076e.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-c10674c1-5c10a306.js";
import { v as setConfig } from "./index-9f662a56.js";
import "./app-9b3806e9.js";
import "./graph-bd91d400.js";
import "./layout-3d6f56c8.js";
import "./index-3862675e-ad49b3aa.js";
import "./clone-6e9b975a.js";
import "./edges-e0da2a9e-34980cf4.js";
import "./createText-2e5e7dd3-b2f89e49.js";
import "./react-markdown-1245d4fe.js";
import "./chakra-ui-31f48106.js";
import "./line-871f2467.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./channel-630a0389.js";
import "./monaco-f0dde6c1.js";
import "./vendor-c051683a.js";
import "./react-utils-d801a309.js";
import "./common-utils-40e9b830.js";
import "./react-syntax-highlighter-8e0efc03.js";
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
