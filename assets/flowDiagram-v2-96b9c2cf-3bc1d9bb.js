import { p as parser$1, f as flowDb } from "./flowDb-956e92f1-8105ad35.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-c10674c1-0f1402d2.js";
import { v as setConfig } from "./index-8d7c0a29.js";
import "./app-aa1e5790.js";
import "./graph-651249f6.js";
import "./layout-953f0aa1.js";
import "./index-3862675e-2c451b58.js";
import "./clone-07759fce.js";
import "./edges-e0da2a9e-8dfcbdd5.js";
import "./createText-2e5e7dd3-d9cbe42a.js";
import "./react-markdown-1245d4fe.js";
import "./chakra-ui-31f48106.js";
import "./line-7ace87eb.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./channel-aa43b6df.js";
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
