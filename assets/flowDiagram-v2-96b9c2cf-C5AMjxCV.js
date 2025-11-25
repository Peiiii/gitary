import "./chakra-ui-NHV_-bGL.js";
import { n as flowStyles, t as flowRendererV2 } from "./styles-c10674c1-DVHVrjHR.js";
import "./monaco-CcclqKWN.js";
import "./react-markdown-CiPHk2vS.js";
import { ri as require_dist } from "./app-BOej-ymv.js";
import { I as setConfig, Pt as require_purify, Xt as require_dayjs_min } from "./mermaid-b5860b54-BK-JDMC-.js";
import "./path-i3PwAG1d.js";
import "./array-BUZ-AMCX.js";
import "./line-DgAP7E_u.js";
import "./channel-m4J9A5yk.js";
import "./graphlib-D6tGGlIu.js";
import "./clone-Ddy4OoOS.js";
import "./createText-2e5e7dd3-BYVuN6aK.js";
import "./edges-e0da2a9e-BIAgwi7a.js";
import "./dagre-nrG_51c5.js";
import "./index-3862675e-DFkjLStm.js";
import { n as flowDb, r as parser$1 } from "./flowDb-956e92f1-CCys82EE.js";
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
