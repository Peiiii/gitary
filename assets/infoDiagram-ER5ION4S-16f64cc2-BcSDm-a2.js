import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { N as require_jsx_runtime, P as require_react, w as require_react_dom } from "./chakra-ui-NHV_-bGL.js";
import { k as require_lodash } from "./react-utils-DE1lHEcz.js";
import { t as require_client } from "./vendor-BKa3f7Q_.js";
import "./common-utils-BCFfNPpf.js";
import "./react-markdown-14W_w1u6.js";
import "./monaco-De2c8opW.js";
import "./remark-gfm-BxiTB6j-.js";
import { $n as require_markdown_it_task_lists, $t as iT, Qn as require_pinyin, er as require_markdown_it_multimd_table, et as R, un as m, w as If, wi as require_classnames, zn as wh } from "./app-CHqOxvpb.js";
import "./_baseUniq-214847ec-DBvBJYdJ.js";
import "./_basePickBy-f749536a-BkQsym14.js";
import "./clone-8a8d8292-tyjQLPbI.js";
import { u as Yy } from "./mermaid-parser.core-ecfcb38d-Co5SNHNR.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
var g = { parse: /* @__PURE__ */ m(async (r) => {
	const t = await Yy("info", r);
	R.debug(t);
}, "parse") }, v = { version: wh.version + "" }, Gr = {
	parser: g,
	db: { getVersion: /* @__PURE__ */ m(() => v.version, "getVersion") },
	renderer: { draw: /* @__PURE__ */ m((r, t, m$1) => {
		R.debug(`rendering info diagram
` + r);
		const i = iT(t);
		If(i, 100, 400, !0), i.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${m$1}`);
	}, "draw") }
};
export { Gr as diagram };
