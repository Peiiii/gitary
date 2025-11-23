import { p as parser$1, f as flowDb } from "./flowDb-956e92f1-7afd8fa2.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-c10674c1-a4affa6f.js";
import { v as setConfig } from "./index-947a0d03.js";
import "./app-fa4096e2.js";
import "./graph-e94c1bcc.js";
import "./layout-421325ef.js";
import "./index-3862675e-0fa77783.js";
import "./clone-d8c64b9c.js";
import "./edges-e0da2a9e-ad7638dd.js";
import "./createText-2e5e7dd3-ea016b21.js";
import "./react-markdown-1245d4fe.js";
import "./chakra-ui-31f48106.js";
import "./line-d9c792be.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./channel-f59d5d5e.js";
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
