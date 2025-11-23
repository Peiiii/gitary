import { H as m, K as R, aK as iT, ah as If, aL as wh } from "./app-fa4096e2.js";
import { Y as Yy } from "./mermaid-parser.core-ecfcb38d-96c43413.js";
import "./chakra-ui-31f48106.js";
import "./react-utils-d801a309.js";
import "./_baseUniq-214847ec-0fe795ae.js";
import "./_basePickBy-f749536a-636ebb17.js";
import "./monaco-f0dde6c1.js";
import "./vendor-c051683a.js";
import "./common-utils-40e9b830.js";
import "./react-syntax-highlighter-bb88d724.js";
import "./react-markdown-1245d4fe.js";
import "./remark-gfm-e39f7469.js";
import "./clone-8a8d8292-13c9fdbd.js";
var g = {
  parse: /* @__PURE__ */ m(async (r) => {
    const t = await Yy("info", r);
    R.debug(t);
  }, "parse")
}, v = {
  version: wh.version + ""
}, d = /* @__PURE__ */ m(() => v.version, "getVersion"), c = {
  getVersion: d
}, l = /* @__PURE__ */ m((r, t, m2) => {
  R.debug(`rendering info diagram
` + r);
  const i = iT(t);
  If(i, 100, 400, true), i.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${m2}`);
}, "draw"), f = { draw: l }, Gr = {
  parser: g,
  db: c,
  renderer: f
};
export {
  Gr as diagram
};
