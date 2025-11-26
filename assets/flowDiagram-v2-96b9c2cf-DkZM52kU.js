import "./chakra-ui-NHV_-bGL.js";
import { n as flowStyles, t as flowRendererV2 } from "./styles-c10674c1-BRhwYWf3.js";
import "./react-markdown-14W_w1u6.js";
import "./monaco-De2c8opW.js";
import { ri as require_dist } from "./app-CHqOxvpb.js";
import { I as setConfig, Pt as require_purify, Xt as require_dayjs_min } from "./mermaid-b5860b54-tdZQTKtH.js";
import "./path-i3PwAG1d.js";
import "./array-BUZ-AMCX.js";
import "./line-B3bzx1M9.js";
import "./channel-C95t94dA.js";
import "./graphlib-oiOPKi5Y.js";
import "./clone-LXr1G8oY.js";
import "./createText-2e5e7dd3-D_Z27H6D.js";
import "./edges-e0da2a9e-x7Ix4ajg.js";
import "./dagre-Dsrn4VCH.js";
import "./index-3862675e-BaSQP6fm.js";
import { n as flowDb, r as parser$1 } from "./flowDb-956e92f1-CxlCi20b.js";
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
