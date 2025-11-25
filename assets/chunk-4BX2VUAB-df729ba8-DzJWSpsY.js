import { un as m } from "./app-BOej-ymv.js";
function m$1(e, c) {
	var i, t, o;
	e.accDescr && ((i = c.setAccDescription) == null || i.call(c, e.accDescr)), e.accTitle && ((t = c.setAccTitle) == null || t.call(c, e.accTitle)), e.title && ((o = c.setDiagramTitle) == null || o.call(c, e.title));
}
m(m$1, "populateCommonDb");
export { m$1 as t };
