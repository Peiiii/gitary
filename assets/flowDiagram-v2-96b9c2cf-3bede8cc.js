import { p as parser$1, f as flowDb } from "./flowDb-956e92f1-c87f813a.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-c10674c1-b0172f06.js";
import { v as setConfig } from "./index-3e9828f6.js";
import "./app-57b29c37.js";
import "./graph-06990758.js";
import "./layout-1c9c880a.js";
import "./index-3862675e-76bad8ef.js";
import "./clone-a4384b55.js";
import "./edges-e0da2a9e-d3873c03.js";
import "./createText-2e5e7dd3-89685a00.js";
import "./react-markdown-1245d4fe.js";
import "./chakra-ui-31f48106.js";
import "./line-65d994e7.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./channel-3dd2648c.js";
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
