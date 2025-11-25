import "./chakra-ui-BP0KsvPN.js";
import { n as flowStyles, t as flowRendererV2 } from "./styles-c10674c1-Dxj82ZSp.js";
import "./monaco-DGZQwLgt.js";
import "./react-markdown-CC4NHZ99.js";
import { ri as require_dist } from "./app-B8S090XF.js";
import { I as setConfig, Pt as require_purify, Xt as require_dayjs_min } from "./mermaid-b5860b54-BK5VZCIu.js";
import "./path-i3PwAG1d.js";
import "./array-BUZ-AMCX.js";
import "./line-DmCrNvb6.js";
import "./channel-s-LqkM1T.js";
import "./graphlib-BNQ3LgaR.js";
import "./clone-B1t2B2qh.js";
import "./createText-2e5e7dd3-BLlo6W12.js";
import "./edges-e0da2a9e-CvspFgC2.js";
import "./dagre-BJecOo78.js";
import "./index-3862675e-CuYqlOEr.js";
import { n as flowDb, r as parser$1 } from "./flowDb-956e92f1-DBPQ0cOS.js";
require_dayjs_min();
require_dist();
require_purify();
var diagram = {
	parser: parser$1,
	db: flowDb,
	renderer: flowRendererV2,
	styles: flowStyles,
	init: (cnf) => {
		if (!cnf.flowchart) cnf.flowchart = {};
		cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
		setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
		flowRendererV2.setConf(cnf.flowchart);
		flowDb.clear();
		flowDb.setGen("gen-2");
	}
};
export { diagram };
