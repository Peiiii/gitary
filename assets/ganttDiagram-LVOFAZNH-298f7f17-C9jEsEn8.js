import { s as __toESM } from "./rolldown-runtime-p26lAE5v.js";
import { N as require_jsx_runtime, P as require_react, w as require_react_dom } from "./chakra-ui-NHV_-bGL.js";
import { k as require_lodash } from "./react-utils-DE1lHEcz.js";
import { t as require_client } from "./vendor-BKa3f7Q_.js";
import "./common-utils-BCFfNPpf.js";
import "./react-markdown-14W_w1u6.js";
import "./monaco-De2c8opW.js";
import "./remark-gfm-BxiTB6j-.js";
import { $n as require_markdown_it_task_lists, Bt as dz, Dn as ta, Dt as b4, E as Iv, Gn as yt, Ln as w5, Nt as ce, Ot as b5, Qn as require_pinyin, Vn as x5, Vt as ep, Wn as y5, Xn as zi, Z as Qf, dn as m5, er as require_markdown_it_multimd_table, et as R, h as Dv, kt as bm, nn as k5, p as Dc, qt as gt, rt as Rv, t as $e, un as m, w as If, wi as require_classnames, xt as _5 } from "./app-CHqOxvpb.js";
import "./defaultLocale-2db4a961-D4e7yott.js";
import { t } from "./init-f9637058-mGOscHBv.js";
import { a as tn, i as cn, n as R$1, r as an, t as G } from "./linear-955cbded-BdZs6PsJ.js";
require_jsx_runtime();
require_react();
require_client();
require_react_dom();
require_lodash();
require_markdown_it_multimd_table();
require_markdown_it_task_lists();
require_classnames();
require_pinyin();
function Gr(t$1, e) {
	let r;
	if (e === void 0) for (const n of t$1) n != null && (r < n || r === void 0 && n >= n) && (r = n);
	else {
		let n = -1;
		for (let i of t$1) (i = e(i, ++n, t$1)) != null && (r < i || r === void 0 && i >= i) && (r = i);
	}
	return r;
}
function jr(t$1, e) {
	let r;
	if (e === void 0) for (const n of t$1) n != null && (r > n || r === void 0 && n >= n) && (r = n);
	else {
		let n = -1;
		for (let i of t$1) (i = e(i, ++n, t$1)) != null && (r > i || r === void 0 && i >= i) && (r = i);
	}
	return r;
}
function Qr(t$1) {
	return t$1;
}
var qt = 1, ie = 2, me = 3, Xt = 4, We = 1e-6;
function $r(t$1) {
	return "translate(" + t$1 + ",0)";
}
function Jr(t$1) {
	return "translate(0," + t$1 + ")";
}
function Kr(t$1) {
	return (e) => +t$1(e);
}
function tn$1(t$1, e) {
	return e = Math.max(0, t$1.bandwidth() - e * 2) / 2, t$1.round() && (e = Math.round(e)), (r) => +t$1(r) + e;
}
function en() {
	return !this.__axis;
}
function er(t$1, e) {
	var r = [], n = null, i = null, a = 6, s = 6, y = 3, _ = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, p = t$1 === qt || t$1 === Xt ? -1 : 1, g = t$1 === Xt || t$1 === ie ? "x" : "y", E = t$1 === qt || t$1 === me ? $r : Jr;
	function C(b) {
		var q = n ?? (e.ticks ? e.ticks.apply(e, r) : e.domain()), O = i ?? (e.tickFormat ? e.tickFormat.apply(e, r) : Qr), M = Math.max(a, 0) + y, I = e.range(), V = +I[0] + _, W = +I[I.length - 1] + _, Z = (e.bandwidth ? tn$1 : Kr)(e.copy(), _), Q = b.selection ? b.selection() : b, D = Q.selectAll(".domain").data([null]), H = Q.selectAll(".tick").data(q, e).order(), x = H.exit(), Y = H.enter().append("g").attr("class", "tick"), F = H.select("line"), S = H.select("text");
		D = D.merge(D.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), H = H.merge(Y), F = F.merge(Y.append("line").attr("stroke", "currentColor").attr(g + "2", p * a)), S = S.merge(Y.append("text").attr("fill", "currentColor").attr(g, p * M).attr("dy", t$1 === qt ? "0em" : t$1 === me ? "0.71em" : "0.32em")), b !== Q && (D = D.transition(b), H = H.transition(b), F = F.transition(b), S = S.transition(b), x = x.transition(b).attr("opacity", We).attr("transform", function(v) {
			return isFinite(v = Z(v)) ? E(v + _) : this.getAttribute("transform");
		}), Y.attr("opacity", We).attr("transform", function(v) {
			var U = this.parentNode.__axis;
			return E((U && isFinite(U = U(v)) ? U : Z(v)) + _);
		})), x.remove(), D.attr("d", t$1 === Xt || t$1 === ie ? s ? "M" + p * s + "," + V + "H" + _ + "V" + W + "H" + p * s : "M" + _ + "," + V + "V" + W : s ? "M" + V + "," + p * s + "V" + _ + "H" + W + "V" + p * s : "M" + V + "," + _ + "H" + W), H.attr("opacity", 1).attr("transform", function(v) {
			return E(Z(v) + _);
		}), F.attr(g + "2", p * a), S.attr(g, p * M).text(O), Q.filter(en).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t$1 === ie ? "start" : t$1 === Xt ? "end" : "middle"), Q.each(function() {
			this.__axis = Z;
		});
	}
	return C.scale = function(b) {
		return arguments.length ? (e = b, C) : e;
	}, C.ticks = function() {
		return r = Array.from(arguments), C;
	}, C.tickArguments = function(b) {
		return arguments.length ? (r = b == null ? [] : Array.from(b), C) : r.slice();
	}, C.tickValues = function(b) {
		return arguments.length ? (n = b == null ? null : Array.from(b), C) : n && n.slice();
	}, C.tickFormat = function(b) {
		return arguments.length ? (i = b, C) : i;
	}, C.tickSize = function(b) {
		return arguments.length ? (a = s = +b, C) : a;
	}, C.tickSizeInner = function(b) {
		return arguments.length ? (a = +b, C) : a;
	}, C.tickSizeOuter = function(b) {
		return arguments.length ? (s = +b, C) : s;
	}, C.tickPadding = function(b) {
		return arguments.length ? (y = +b, C) : y;
	}, C.offset = function(b) {
		return arguments.length ? (_ = +b, C) : _;
	}, C;
}
function rn(t$1) {
	return er(qt, t$1);
}
function nn(t$1) {
	return er(me, t$1);
}
var an$1 = Math.PI / 180, sn = 180 / Math.PI, $t = 18, rr = .96422, nr = 1, ir = .82521, ar = 4 / 29, St = 6 / 29, sr = 3 * St * St, on = St * St * St;
function or(t$1) {
	if (t$1 instanceof ft) return new ft(t$1.l, t$1.a, t$1.b, t$1.opacity);
	if (t$1 instanceof dt) return cr(t$1);
	t$1 instanceof ce || (t$1 = b4(t$1));
	var e = ce$1(t$1.r), r = ce$1(t$1.g), n = ce$1(t$1.b), i = ae((.2225045 * e + .7168786 * r + .0606169 * n) / nr), a, s;
	return e === r && r === n ? a = s = i : (a = ae((.4360747 * e + .3850649 * r + .1430804 * n) / rr), s = ae((.0139322 * e + .0971045 * r + .7141733 * n) / ir)), new ft(116 * i - 16, 500 * (a - i), 200 * (i - s), t$1.opacity);
}
function cn$1(t$1, e, r, n) {
	return arguments.length === 1 ? or(t$1) : new ft(t$1, e, r, n ?? 1);
}
function ft(t$1, e, r, n) {
	this.l = +t$1, this.a = +e, this.b = +r, this.opacity = +n;
}
Dc(ft, cn$1, Qf(ta, {
	brighter(t$1) {
		return new ft(this.l + $t * (t$1 ?? 1), this.a, this.b, this.opacity);
	},
	darker(t$1) {
		return new ft(this.l - $t * (t$1 ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var t$1 = (this.l + 16) / 116, e = isNaN(this.a) ? t$1 : t$1 + this.a / 500, r = isNaN(this.b) ? t$1 : t$1 - this.b / 200;
		return e = rr * se(e), t$1 = nr * se(t$1), r = ir * se(r), new ce(oe(3.1338561 * e - 1.6168667 * t$1 - .4906146 * r), oe(-.9787684 * e + 1.9161415 * t$1 + .033454 * r), oe(.0719453 * e - .2289914 * t$1 + 1.4052427 * r), this.opacity);
	}
}));
function ae(t$1) {
	return t$1 > on ? Math.pow(t$1, 1 / 3) : t$1 / sr + ar;
}
function se(t$1) {
	return t$1 > St ? t$1 * t$1 * t$1 : sr * (t$1 - ar);
}
function oe(t$1) {
	return 255 * (t$1 <= .0031308 ? 12.92 * t$1 : 1.055 * Math.pow(t$1, 1 / 2.4) - .055);
}
function ce$1(t$1) {
	return (t$1 /= 255) <= .04045 ? t$1 / 12.92 : Math.pow((t$1 + .055) / 1.055, 2.4);
}
function ln(t$1) {
	if (t$1 instanceof dt) return new dt(t$1.h, t$1.c, t$1.l, t$1.opacity);
	if (t$1 instanceof ft || (t$1 = or(t$1)), t$1.a === 0 && t$1.b === 0) return new dt(NaN, 0 < t$1.l && t$1.l < 100 ? 0 : NaN, t$1.l, t$1.opacity);
	var e = Math.atan2(t$1.b, t$1.a) * sn;
	return new dt(e < 0 ? e + 360 : e, Math.sqrt(t$1.a * t$1.a + t$1.b * t$1.b), t$1.l, t$1.opacity);
}
function ge(t$1, e, r, n) {
	return arguments.length === 1 ? ln(t$1) : new dt(t$1, e, r, n ?? 1);
}
function dt(t$1, e, r, n) {
	this.h = +t$1, this.c = +e, this.l = +r, this.opacity = +n;
}
function cr(t$1) {
	if (isNaN(t$1.h)) return new ft(t$1.l, 0, 0, t$1.opacity);
	var e = t$1.h * an$1;
	return new ft(t$1.l, Math.cos(e) * t$1.c, Math.sin(e) * t$1.c, t$1.opacity);
}
Dc(dt, ge, Qf(ta, {
	brighter(t$1) {
		return new dt(this.h, this.c, this.l + $t * (t$1 ?? 1), this.opacity);
	},
	darker(t$1) {
		return new dt(this.h, this.c, this.l - $t * (t$1 ?? 1), this.opacity);
	},
	rgb() {
		return cr(this).rgb();
	}
}));
function un(t$1) {
	return function(e, r) {
		var n = t$1((e = ge(e)).h, (r = ge(r)).h), i = ep(e.c, r.c), a = ep(e.l, r.l), s = ep(e.opacity, r.opacity);
		return function(y) {
			return e.h = n(y), e.c = i(y), e.l = a(y), e.opacity = s(y), e + "";
		};
	};
}
var fn = un(dz);
function hn(t$1, e) {
	t$1 = t$1.slice();
	var r = 0, n = t$1.length - 1, i = t$1[r], a = t$1[n], s;
	return a < i && (s = r, r = n, n = s, s = i, i = a, a = s), t$1[r] = e.floor(i), t$1[n] = e.ceil(a), t$1;
}
var le = /* @__PURE__ */ new Date(), ue = /* @__PURE__ */ new Date();
function et(t$1, e, r, n) {
	function i(a) {
		return t$1(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
	}
	return i.floor = (a) => (t$1(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (t$1(a = /* @__PURE__ */ new Date(a - 1)), e(a, 1), t$1(a), a), i.round = (a) => {
		const s = i(a), y = i.ceil(a);
		return a - s < y - a ? s : y;
	}, i.offset = (a, s) => (e(a = /* @__PURE__ */ new Date(+a), s == null ? 1 : Math.floor(s)), a), i.range = (a, s, y) => {
		const _ = [];
		if (a = i.ceil(a), y = y == null ? 1 : Math.floor(y), !(a < s) || !(y > 0)) return _;
		let p;
		do
			_.push(p = /* @__PURE__ */ new Date(+a)), e(a, y), t$1(a);
		while (p < a && a < s);
		return _;
	}, i.filter = (a) => et((s) => {
		if (s >= s) for (; t$1(s), !a(s);) s.setTime(s - 1);
	}, (s, y) => {
		if (s >= s) if (y < 0) for (; ++y <= 0;) for (; e(s, -1), !a(s););
		else for (; --y >= 0;) for (; e(s, 1), !a(s););
	}), r && (i.count = (a, s) => (le.setTime(+a), ue.setTime(+s), t$1(le), t$1(ue), Math.floor(r(le, ue))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (s) => n(s) % a === 0 : (s) => i.count(0, s) % a === 0) : i)), i;
}
var Yt = et(() => {}, (t$1, e) => {
	t$1.setTime(+t$1 + e);
}, (t$1, e) => e - t$1);
Yt.every = (t$1) => (t$1 = Math.floor(t$1), !isFinite(t$1) || !(t$1 > 0) ? null : t$1 > 1 ? et((e) => {
	e.setTime(Math.floor(e / t$1) * t$1);
}, (e, r) => {
	e.setTime(+e + r * t$1);
}, (e, r) => (r - e) / t$1) : Yt);
Yt.range;
var mt = 1e3, ct = mt * 60, gt$1 = ct * 60, yt$1 = gt$1 * 24, xe = yt$1 * 7, Oe = yt$1 * 30, fe = yt$1 * 365, vt = et((t$1) => {
	t$1.setTime(t$1 - t$1.getMilliseconds());
}, (t$1, e) => {
	t$1.setTime(+t$1 + e * mt);
}, (t$1, e) => (e - t$1) / mt, (t$1) => t$1.getUTCSeconds());
vt.range;
var Wt = et((t$1) => {
	t$1.setTime(t$1 - t$1.getMilliseconds() - t$1.getSeconds() * mt);
}, (t$1, e) => {
	t$1.setTime(+t$1 + e * ct);
}, (t$1, e) => (e - t$1) / ct, (t$1) => t$1.getMinutes());
Wt.range;
et((t$1) => {
	t$1.setUTCSeconds(0, 0);
}, (t$1, e) => {
	t$1.setTime(+t$1 + e * ct);
}, (t$1, e) => (e - t$1) / ct, (t$1) => t$1.getUTCMinutes()).range;
var Ot = et((t$1) => {
	t$1.setTime(t$1 - t$1.getMilliseconds() - t$1.getSeconds() * mt - t$1.getMinutes() * ct);
}, (t$1, e) => {
	t$1.setTime(+t$1 + e * gt$1);
}, (t$1, e) => (e - t$1) / gt$1, (t$1) => t$1.getHours());
Ot.range;
et((t$1) => {
	t$1.setUTCMinutes(0, 0, 0);
}, (t$1, e) => {
	t$1.setTime(+t$1 + e * gt$1);
}, (t$1, e) => (e - t$1) / gt$1, (t$1) => t$1.getUTCHours()).range;
var Tt = et((t$1) => t$1.setHours(0, 0, 0, 0), (t$1, e) => t$1.setDate(t$1.getDate() + e), (t$1, e) => (e - t$1 - (e.getTimezoneOffset() - t$1.getTimezoneOffset()) * ct) / yt$1, (t$1) => t$1.getDate() - 1);
Tt.range;
var we = et((t$1) => {
	t$1.setUTCHours(0, 0, 0, 0);
}, (t$1, e) => {
	t$1.setUTCDate(t$1.getUTCDate() + e);
}, (t$1, e) => (e - t$1) / yt$1, (t$1) => t$1.getUTCDate() - 1);
we.range;
et((t$1) => {
	t$1.setUTCHours(0, 0, 0, 0);
}, (t$1, e) => {
	t$1.setUTCDate(t$1.getUTCDate() + e);
}, (t$1, e) => (e - t$1) / yt$1, (t$1) => Math.floor(t$1 / yt$1)).range;
function wt(t$1) {
	return et((e) => {
		e.setDate(e.getDate() - (e.getDay() + 7 - t$1) % 7), e.setHours(0, 0, 0, 0);
	}, (e, r) => {
		e.setDate(e.getDate() + r * 7);
	}, (e, r) => (r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * ct) / xe);
}
var Vt = wt(0), Ht = wt(1), lr = wt(2), ur = wt(3), bt = wt(4), fr = wt(5), hr = wt(6);
Vt.range;
Ht.range;
lr.range;
ur.range;
bt.range;
fr.range;
hr.range;
function Dt(t$1) {
	return et((e) => {
		e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t$1) % 7), e.setUTCHours(0, 0, 0, 0);
	}, (e, r) => {
		e.setUTCDate(e.getUTCDate() + r * 7);
	}, (e, r) => (r - e) / xe);
}
var dr = Dt(0), Jt = Dt(1), yn = Dt(2), kn = Dt(3), Ut = Dt(4), pn = Dt(5), vn = Dt(6);
dr.range;
Jt.range;
yn.range;
kn.range;
Ut.range;
pn.range;
vn.range;
var Nt = et((t$1) => {
	t$1.setDate(1), t$1.setHours(0, 0, 0, 0);
}, (t$1, e) => {
	t$1.setMonth(t$1.getMonth() + e);
}, (t$1, e) => e.getMonth() - t$1.getMonth() + (e.getFullYear() - t$1.getFullYear()) * 12, (t$1) => t$1.getMonth());
Nt.range;
et((t$1) => {
	t$1.setUTCDate(1), t$1.setUTCHours(0, 0, 0, 0);
}, (t$1, e) => {
	t$1.setUTCMonth(t$1.getUTCMonth() + e);
}, (t$1, e) => e.getUTCMonth() - t$1.getUTCMonth() + (e.getUTCFullYear() - t$1.getUTCFullYear()) * 12, (t$1) => t$1.getUTCMonth()).range;
var kt = et((t$1) => {
	t$1.setMonth(0, 1), t$1.setHours(0, 0, 0, 0);
}, (t$1, e) => {
	t$1.setFullYear(t$1.getFullYear() + e);
}, (t$1, e) => e.getFullYear() - t$1.getFullYear(), (t$1) => t$1.getFullYear());
kt.every = (t$1) => !isFinite(t$1 = Math.floor(t$1)) || !(t$1 > 0) ? null : et((e) => {
	e.setFullYear(Math.floor(e.getFullYear() / t$1) * t$1), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, r) => {
	e.setFullYear(e.getFullYear() + r * t$1);
});
kt.range;
var xt = et((t$1) => {
	t$1.setUTCMonth(0, 1), t$1.setUTCHours(0, 0, 0, 0);
}, (t$1, e) => {
	t$1.setUTCFullYear(t$1.getUTCFullYear() + e);
}, (t$1, e) => e.getUTCFullYear() - t$1.getUTCFullYear(), (t$1) => t$1.getUTCFullYear());
xt.every = (t$1) => !isFinite(t$1 = Math.floor(t$1)) || !(t$1 > 0) ? null : et((e) => {
	e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t$1) * t$1), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, r) => {
	e.setUTCFullYear(e.getUTCFullYear() + r * t$1);
});
xt.range;
function bn(t$1, e, r, n, i, a) {
	const s = [
		[
			vt,
			1,
			mt
		],
		[
			vt,
			5,
			5 * mt
		],
		[
			vt,
			15,
			15 * mt
		],
		[
			vt,
			30,
			30 * mt
		],
		[
			a,
			1,
			ct
		],
		[
			a,
			5,
			5 * ct
		],
		[
			a,
			15,
			15 * ct
		],
		[
			a,
			30,
			30 * ct
		],
		[
			i,
			1,
			gt$1
		],
		[
			i,
			3,
			3 * gt$1
		],
		[
			i,
			6,
			6 * gt$1
		],
		[
			i,
			12,
			12 * gt$1
		],
		[
			n,
			1,
			yt$1
		],
		[
			n,
			2,
			2 * yt$1
		],
		[
			r,
			1,
			xe
		],
		[
			e,
			1,
			Oe
		],
		[
			e,
			3,
			3 * Oe
		],
		[
			t$1,
			1,
			fe
		]
	];
	function y(p, g, E) {
		const C = g < p;
		C && ([p, g] = [g, p]);
		const b = E && typeof E.range == "function" ? E : _(p, g, E), q = b ? b.range(p, +g + 1) : [];
		return C ? q.reverse() : q;
	}
	function _(p, g, E) {
		const C = Math.abs(g - p) / E, b = R$1(([, , M]) => M).right(s, C);
		if (b === s.length) return t$1.every(G(p / fe, g / fe, E));
		if (b === 0) return Yt.every(Math.max(G(p, g, E), 1));
		const [q, O] = s[C / s[b - 1][2] < s[b][2] / C ? b - 1 : b];
		return q.every(O);
	}
	return [y, _];
}
var [xn, wn] = bn(kt, Nt, Vt, Tt, Ot, Wt);
function he(t$1) {
	if (0 <= t$1.y && t$1.y < 100) {
		var e = new Date(-1, t$1.m, t$1.d, t$1.H, t$1.M, t$1.S, t$1.L);
		return e.setFullYear(t$1.y), e;
	}
	return new Date(t$1.y, t$1.m, t$1.d, t$1.H, t$1.M, t$1.S, t$1.L);
}
function de(t$1) {
	if (0 <= t$1.y && t$1.y < 100) {
		var e = new Date(Date.UTC(-1, t$1.m, t$1.d, t$1.H, t$1.M, t$1.S, t$1.L));
		return e.setUTCFullYear(t$1.y), e;
	}
	return new Date(Date.UTC(t$1.y, t$1.m, t$1.d, t$1.H, t$1.M, t$1.S, t$1.L));
}
function Lt(t$1, e, r) {
	return {
		y: t$1,
		m: e,
		d: r,
		H: 0,
		M: 0,
		S: 0,
		L: 0
	};
}
function Dn(t$1) {
	var e = t$1.dateTime, r = t$1.date, n = t$1.time, i = t$1.periods, a = t$1.days, s = t$1.shortDays, y = t$1.months, _ = t$1.shortMonths, p = At(i), g = It(i), E = At(a), C = It(a), b = At(s), q = It(s), O = At(y), M = It(y), I = At(_), V = It(_), W = {
		a: d,
		A: w,
		b: c,
		B: l,
		c: null,
		d: Re,
		e: Re,
		f: qn,
		g: ni,
		G: ai,
		H: Bn,
		I: Zn,
		j: Xn,
		L: mr,
		m: Gn,
		M: jn,
		p: o,
		q: P,
		Q: Xe,
		s: qe,
		S: Qn,
		u: $n,
		U: Jn,
		V: Kn,
		w: ti,
		W: ei,
		x: null,
		X: null,
		y: ri,
		Y: ii,
		Z: si,
		"%": Ze
	}, Z = {
		a: z,
		A: R$2,
		b: K,
		B: G$1,
		c: null,
		d: Be,
		e: Be,
		f: ui,
		g: Ti,
		G: xi,
		H: oi,
		I: ci,
		j: li,
		L: yr,
		m: fi,
		M: hi,
		p: $,
		q: at,
		Q: Xe,
		s: qe,
		S: di,
		u: mi,
		U: gi,
		V: yi,
		w: ki,
		W: pi,
		x: null,
		X: null,
		y: vi,
		Y: bi,
		Z: wi,
		"%": Ze
	}, Q = {
		a: F,
		A: S,
		b: v,
		B: U,
		c: u,
		d: ze,
		e: ze,
		f: Vn,
		g: Ve,
		G: Ne,
		H: Pe,
		I: Pe,
		j: Wn,
		L: Nn,
		m: In,
		M: On,
		p: Y,
		q: An,
		Q: Pn,
		s: Rn,
		S: Hn,
		u: Fn,
		U: Yn,
		V: Un,
		w: Sn,
		W: En,
		x: m$1,
		X: T,
		y: Ve,
		Y: Ne,
		Z: Ln,
		"%": zn
	};
	W.x = D(r, W), W.X = D(n, W), W.c = D(e, W), Z.x = D(r, Z), Z.X = D(n, Z), Z.c = D(e, Z);
	function D(k, A) {
		return function(N) {
			var f = [], J = -1, L = 0, j = k.length, X, nt, st;
			for (N instanceof Date || (N = /* @__PURE__ */ new Date(+N)); ++J < j;) k.charCodeAt(J) === 37 && (f.push(k.slice(L, J)), (nt = He[X = k.charAt(++J)]) != null ? X = k.charAt(++J) : nt = X === "e" ? " " : "0", (st = A[X]) && (X = st(N, nt)), f.push(X), L = J + 1);
			return f.push(k.slice(L, J)), f.join("");
		};
	}
	function H(k, A) {
		return function(N) {
			var f = Lt(1900, void 0, 1), J = x(f, k, N += "", 0), L, j;
			if (J != N.length) return null;
			if ("Q" in f) return new Date(f.Q);
			if ("s" in f) return new Date(f.s * 1e3 + ("L" in f ? f.L : 0));
			if (A && !("Z" in f) && (f.Z = 0), "p" in f && (f.H = f.H % 12 + f.p * 12), f.m === void 0 && (f.m = "q" in f ? f.q : 0), "V" in f) {
				if (f.V < 1 || f.V > 53) return null;
				"w" in f || (f.w = 1), "Z" in f ? (L = de(Lt(f.y, 0, 1)), j = L.getUTCDay(), L = j > 4 || j === 0 ? Jt.ceil(L) : Jt(L), L = we.offset(L, (f.V - 1) * 7), f.y = L.getUTCFullYear(), f.m = L.getUTCMonth(), f.d = L.getUTCDate() + (f.w + 6) % 7) : (L = he(Lt(f.y, 0, 1)), j = L.getDay(), L = j > 4 || j === 0 ? Ht.ceil(L) : Ht(L), L = Tt.offset(L, (f.V - 1) * 7), f.y = L.getFullYear(), f.m = L.getMonth(), f.d = L.getDate() + (f.w + 6) % 7);
			} else ("W" in f || "U" in f) && ("w" in f || (f.w = "u" in f ? f.u % 7 : "W" in f ? 1 : 0), j = "Z" in f ? de(Lt(f.y, 0, 1)).getUTCDay() : he(Lt(f.y, 0, 1)).getDay(), f.m = 0, f.d = "W" in f ? (f.w + 6) % 7 + f.W * 7 - (j + 5) % 7 : f.w + f.U * 7 - (j + 6) % 7);
			return "Z" in f ? (f.H += f.Z / 100 | 0, f.M += f.Z % 100, de(f)) : he(f);
		};
	}
	function x(k, A, N, f) {
		for (var J = 0, L = A.length, j = N.length, X, nt; J < L;) {
			if (f >= j) return -1;
			if (X = A.charCodeAt(J++), X === 37) {
				if (X = A.charAt(J++), nt = Q[X in He ? A.charAt(J++) : X], !nt || (f = nt(k, N, f)) < 0) return -1;
			} else if (X != N.charCodeAt(f++)) return -1;
		}
		return f;
	}
	function Y(k, A, N) {
		var f = p.exec(A.slice(N));
		return f ? (k.p = g.get(f[0].toLowerCase()), N + f[0].length) : -1;
	}
	function F(k, A, N) {
		var f = b.exec(A.slice(N));
		return f ? (k.w = q.get(f[0].toLowerCase()), N + f[0].length) : -1;
	}
	function S(k, A, N) {
		var f = E.exec(A.slice(N));
		return f ? (k.w = C.get(f[0].toLowerCase()), N + f[0].length) : -1;
	}
	function v(k, A, N) {
		var f = I.exec(A.slice(N));
		return f ? (k.m = V.get(f[0].toLowerCase()), N + f[0].length) : -1;
	}
	function U(k, A, N) {
		var f = O.exec(A.slice(N));
		return f ? (k.m = M.get(f[0].toLowerCase()), N + f[0].length) : -1;
	}
	function u(k, A, N) {
		return x(k, e, A, N);
	}
	function m$1(k, A, N) {
		return x(k, r, A, N);
	}
	function T(k, A, N) {
		return x(k, n, A, N);
	}
	function d(k) {
		return s[k.getDay()];
	}
	function w(k) {
		return a[k.getDay()];
	}
	function c(k) {
		return _[k.getMonth()];
	}
	function l(k) {
		return y[k.getMonth()];
	}
	function o(k) {
		return i[+(k.getHours() >= 12)];
	}
	function P(k) {
		return 1 + ~~(k.getMonth() / 3);
	}
	function z(k) {
		return s[k.getUTCDay()];
	}
	function R$2(k) {
		return a[k.getUTCDay()];
	}
	function K(k) {
		return _[k.getUTCMonth()];
	}
	function G$1(k) {
		return y[k.getUTCMonth()];
	}
	function $(k) {
		return i[+(k.getUTCHours() >= 12)];
	}
	function at(k) {
		return 1 + ~~(k.getUTCMonth() / 3);
	}
	return {
		format: function(k) {
			var A = D(k += "", W);
			return A.toString = function() {
				return k;
			}, A;
		},
		parse: function(k) {
			var A = H(k += "", !1);
			return A.toString = function() {
				return k;
			}, A;
		},
		utcFormat: function(k) {
			var A = D(k += "", Z);
			return A.toString = function() {
				return k;
			}, A;
		},
		utcParse: function(k) {
			var A = H(k += "", !0);
			return A.toString = function() {
				return k;
			}, A;
		}
	};
}
var He = {
	"-": "",
	_: " ",
	0: "0"
}, rt = /^\s*\d+/, Cn = /^%/, Mn = /[\\^$*+?|[\]().{}]/g;
function B(t$1, e, r) {
	var n = t$1 < 0 ? "-" : "", i = (n ? -t$1 : t$1) + "", a = i.length;
	return n + (a < r ? new Array(r - a + 1).join(e) + i : i);
}
function _n(t$1) {
	return t$1.replace(Mn, "\\$&");
}
function At(t$1) {
	return new RegExp("^(?:" + t$1.map(_n).join("|") + ")", "i");
}
function It(t$1) {
	return new Map(t$1.map((e, r) => [e.toLowerCase(), r]));
}
function Sn(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 1));
	return n ? (t$1.w = +n[0], r + n[0].length) : -1;
}
function Fn(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 1));
	return n ? (t$1.u = +n[0], r + n[0].length) : -1;
}
function Yn(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 2));
	return n ? (t$1.U = +n[0], r + n[0].length) : -1;
}
function Un(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 2));
	return n ? (t$1.V = +n[0], r + n[0].length) : -1;
}
function En(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 2));
	return n ? (t$1.W = +n[0], r + n[0].length) : -1;
}
function Ne(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 4));
	return n ? (t$1.y = +n[0], r + n[0].length) : -1;
}
function Ve(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 2));
	return n ? (t$1.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function Ln(t$1, e, r) {
	var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
	return n ? (t$1.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function An(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 1));
	return n ? (t$1.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function In(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 2));
	return n ? (t$1.m = n[0] - 1, r + n[0].length) : -1;
}
function ze(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 2));
	return n ? (t$1.d = +n[0], r + n[0].length) : -1;
}
function Wn(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 3));
	return n ? (t$1.m = 0, t$1.d = +n[0], r + n[0].length) : -1;
}
function Pe(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 2));
	return n ? (t$1.H = +n[0], r + n[0].length) : -1;
}
function On(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 2));
	return n ? (t$1.M = +n[0], r + n[0].length) : -1;
}
function Hn(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 2));
	return n ? (t$1.S = +n[0], r + n[0].length) : -1;
}
function Nn(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 3));
	return n ? (t$1.L = +n[0], r + n[0].length) : -1;
}
function Vn(t$1, e, r) {
	var n = rt.exec(e.slice(r, r + 6));
	return n ? (t$1.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function zn(t$1, e, r) {
	var n = Cn.exec(e.slice(r, r + 1));
	return n ? r + n[0].length : -1;
}
function Pn(t$1, e, r) {
	var n = rt.exec(e.slice(r));
	return n ? (t$1.Q = +n[0], r + n[0].length) : -1;
}
function Rn(t$1, e, r) {
	var n = rt.exec(e.slice(r));
	return n ? (t$1.s = +n[0], r + n[0].length) : -1;
}
function Re(t$1, e) {
	return B(t$1.getDate(), e, 2);
}
function Bn(t$1, e) {
	return B(t$1.getHours(), e, 2);
}
function Zn(t$1, e) {
	return B(t$1.getHours() % 12 || 12, e, 2);
}
function Xn(t$1, e) {
	return B(1 + Tt.count(kt(t$1), t$1), e, 3);
}
function mr(t$1, e) {
	return B(t$1.getMilliseconds(), e, 3);
}
function qn(t$1, e) {
	return mr(t$1, e) + "000";
}
function Gn(t$1, e) {
	return B(t$1.getMonth() + 1, e, 2);
}
function jn(t$1, e) {
	return B(t$1.getMinutes(), e, 2);
}
function Qn(t$1, e) {
	return B(t$1.getSeconds(), e, 2);
}
function $n(t$1) {
	var e = t$1.getDay();
	return e === 0 ? 7 : e;
}
function Jn(t$1, e) {
	return B(Vt.count(kt(t$1) - 1, t$1), e, 2);
}
function gr(t$1) {
	var e = t$1.getDay();
	return e >= 4 || e === 0 ? bt(t$1) : bt.ceil(t$1);
}
function Kn(t$1, e) {
	return t$1 = gr(t$1), B(bt.count(kt(t$1), t$1) + (kt(t$1).getDay() === 4), e, 2);
}
function ti(t$1) {
	return t$1.getDay();
}
function ei(t$1, e) {
	return B(Ht.count(kt(t$1) - 1, t$1), e, 2);
}
function ri(t$1, e) {
	return B(t$1.getFullYear() % 100, e, 2);
}
function ni(t$1, e) {
	return t$1 = gr(t$1), B(t$1.getFullYear() % 100, e, 2);
}
function ii(t$1, e) {
	return B(t$1.getFullYear() % 1e4, e, 4);
}
function ai(t$1, e) {
	var r = t$1.getDay();
	return t$1 = r >= 4 || r === 0 ? bt(t$1) : bt.ceil(t$1), B(t$1.getFullYear() % 1e4, e, 4);
}
function si(t$1) {
	var e = t$1.getTimezoneOffset();
	return (e > 0 ? "-" : (e *= -1, "+")) + B(e / 60 | 0, "0", 2) + B(e % 60, "0", 2);
}
function Be(t$1, e) {
	return B(t$1.getUTCDate(), e, 2);
}
function oi(t$1, e) {
	return B(t$1.getUTCHours(), e, 2);
}
function ci(t$1, e) {
	return B(t$1.getUTCHours() % 12 || 12, e, 2);
}
function li(t$1, e) {
	return B(1 + we.count(xt(t$1), t$1), e, 3);
}
function yr(t$1, e) {
	return B(t$1.getUTCMilliseconds(), e, 3);
}
function ui(t$1, e) {
	return yr(t$1, e) + "000";
}
function fi(t$1, e) {
	return B(t$1.getUTCMonth() + 1, e, 2);
}
function hi(t$1, e) {
	return B(t$1.getUTCMinutes(), e, 2);
}
function di(t$1, e) {
	return B(t$1.getUTCSeconds(), e, 2);
}
function mi(t$1) {
	var e = t$1.getUTCDay();
	return e === 0 ? 7 : e;
}
function gi(t$1, e) {
	return B(dr.count(xt(t$1) - 1, t$1), e, 2);
}
function kr(t$1) {
	var e = t$1.getUTCDay();
	return e >= 4 || e === 0 ? Ut(t$1) : Ut.ceil(t$1);
}
function yi(t$1, e) {
	return t$1 = kr(t$1), B(Ut.count(xt(t$1), t$1) + (xt(t$1).getUTCDay() === 4), e, 2);
}
function ki(t$1) {
	return t$1.getUTCDay();
}
function pi(t$1, e) {
	return B(Jt.count(xt(t$1) - 1, t$1), e, 2);
}
function vi(t$1, e) {
	return B(t$1.getUTCFullYear() % 100, e, 2);
}
function Ti(t$1, e) {
	return t$1 = kr(t$1), B(t$1.getUTCFullYear() % 100, e, 2);
}
function bi(t$1, e) {
	return B(t$1.getUTCFullYear() % 1e4, e, 4);
}
function xi(t$1, e) {
	var r = t$1.getUTCDay();
	return t$1 = r >= 4 || r === 0 ? Ut(t$1) : Ut.ceil(t$1), B(t$1.getUTCFullYear() % 1e4, e, 4);
}
function wi() {
	return "+0000";
}
function Ze() {
	return "%";
}
function Xe(t$1) {
	return +t$1;
}
function qe(t$1) {
	return Math.floor(+t$1 / 1e3);
}
var Mt, Kt;
Di({
	dateTime: "%x, %X",
	date: "%-m/%-d/%Y",
	time: "%-I:%M:%S %p",
	periods: ["AM", "PM"],
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	shortDays: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	months: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	shortMonths: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	]
});
function Di(t$1) {
	return Mt = Dn(t$1), Kt = Mt.format, Mt.parse, Mt.utcFormat, Mt.utcParse, Mt;
}
function Ci(t$1) {
	return new Date(t$1);
}
function Mi(t$1) {
	return t$1 instanceof Date ? +t$1 : +/* @__PURE__ */ new Date(+t$1);
}
function pr(t$1, e, r, n, i, a, s, y, _, p) {
	var g = an(), E = g.invert, C = g.domain, b = p(".%L"), q = p(":%S"), O = p("%I:%M"), M = p("%I %p"), I = p("%a %d"), V = p("%b %d"), W = p("%B"), Z = p("%Y");
	function Q(D) {
		return (_(D) < D ? b : y(D) < D ? q : s(D) < D ? O : a(D) < D ? M : n(D) < D ? i(D) < D ? I : V : r(D) < D ? W : Z)(D);
	}
	return g.invert = function(D) {
		return new Date(E(D));
	}, g.domain = function(D) {
		return arguments.length ? C(Array.from(D, Mi)) : C().map(Ci);
	}, g.ticks = function(D) {
		var H = C();
		return t$1(H[0], H[H.length - 1], D ?? 10);
	}, g.tickFormat = function(D, H) {
		return H == null ? Q : p(H);
	}, g.nice = function(D) {
		var H = C();
		return (!D || typeof D.range != "function") && (D = e(H[0], H[H.length - 1], D ?? 10)), D ? C(hn(H, D)) : g;
	}, g.copy = function() {
		return tn(g, pr(t$1, e, r, n, i, a, s, y, _, p));
	}, g;
}
function _i() {
	return t.apply(pr(xn, wn, kt, Nt, Vt, Tt, Ot, Wt, vt, Kt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var vr = { exports: {} };
(function(t$1, e) {
	(function(r, n) {
		t$1.exports = n();
	})(Dv, function() {
		var r = "day";
		return function(n, i, a) {
			var s = function(p) {
				return p.add(4 - p.isoWeekday(), r);
			}, y = i.prototype;
			y.isoWeekYear = function() {
				return s(this).year();
			}, y.isoWeek = function(p) {
				if (!this.$utils().u(p)) return this.add(7 * (p - this.isoWeek()), r);
				var g, E, C, b, q = s(this), O = (g = this.isoWeekYear(), E = this.$u, C = (E ? a.utc : a)().year(g).startOf("year"), b = 4 - C.isoWeekday(), C.isoWeekday() > 4 && (b += 7), C.add(b, r));
				return q.diff(O, "week") + 1;
			}, y.isoWeekday = function(p) {
				return this.$utils().u(p) ? this.day() || 7 : this.day(this.day() % 7 ? p : p - 7);
			};
			var _ = y.startOf;
			y.startOf = function(p, g) {
				var E = this.$utils(), C = !!E.u(g) || g;
				return E.p(p) === "isoweek" ? C ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : _.bind(this)(p, g);
			};
		};
	});
})(vr);
var Si = vr.exports;
var Fi = /* @__PURE__ */ Rv(Si);
var Tr = { exports: {} };
(function(t$1, e) {
	(function(r, n) {
		t$1.exports = n();
	})(Dv, function() {
		var r = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		}, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, a = /\d\d/, s = /\d\d?/, y = /\d*[^-_:/,()\s\d]+/, _ = {}, p = function(M) {
			return (M = +M) + (M > 68 ? 1900 : 2e3);
		}, g = function(M) {
			return function(I) {
				this[M] = +I;
			};
		}, E = [/[+-]\d\d:?(\d\d)?|Z/, function(M) {
			(this.zone || (this.zone = {})).offset = function(I) {
				if (!I || I === "Z") return 0;
				var V = I.match(/([+-]|\d\d)/g), W = 60 * V[1] + (+V[2] || 0);
				return W === 0 ? 0 : V[0] === "+" ? -W : W;
			}(M);
		}], C = function(M) {
			var I = _[M];
			return I && (I.indexOf ? I : I.s.concat(I.f));
		}, b = function(M, I) {
			var V, W = _.meridiem;
			if (W) {
				for (var Z = 1; Z <= 24; Z += 1) if (M.indexOf(W(Z, 0, I)) > -1) {
					V = Z > 12;
					break;
				}
			} else V = M === (I ? "pm" : "PM");
			return V;
		}, q = {
			A: [y, function(M) {
				this.afternoon = b(M, !1);
			}],
			a: [y, function(M) {
				this.afternoon = b(M, !0);
			}],
			Q: [i, function(M) {
				this.month = 3 * (M - 1) + 1;
			}],
			S: [i, function(M) {
				this.milliseconds = 100 * +M;
			}],
			SS: [a, function(M) {
				this.milliseconds = 10 * +M;
			}],
			SSS: [/\d{3}/, function(M) {
				this.milliseconds = +M;
			}],
			s: [s, g("seconds")],
			ss: [s, g("seconds")],
			m: [s, g("minutes")],
			mm: [s, g("minutes")],
			H: [s, g("hours")],
			h: [s, g("hours")],
			HH: [s, g("hours")],
			hh: [s, g("hours")],
			D: [s, g("day")],
			DD: [a, g("day")],
			Do: [y, function(M) {
				var I = _.ordinal;
				if (this.day = M.match(/\d+/)[0], I) for (var W = 1; W <= 31; W += 1) I(W).replace(/\[|\]/g, "") === M && (this.day = W);
			}],
			w: [s, g("week")],
			ww: [a, g("week")],
			M: [s, g("month")],
			MM: [a, g("month")],
			MMM: [y, function(M) {
				var I = C("months"), V = (C("monthsShort") || I.map(function(W) {
					return W.slice(0, 3);
				})).indexOf(M) + 1;
				if (V < 1) throw new Error();
				this.month = V % 12 || V;
			}],
			MMMM: [y, function(M) {
				var I = C("months").indexOf(M) + 1;
				if (I < 1) throw new Error();
				this.month = I % 12 || I;
			}],
			Y: [/[+-]?\d+/, g("year")],
			YY: [a, function(M) {
				this.year = p(M);
			}],
			YYYY: [/\d{4}/, g("year")],
			Z: E,
			ZZ: E
		};
		function O(M) {
			var I = M, V = _ && _.formats;
			for (var W = (M = I.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(F, S, v) {
				var U = v && v.toUpperCase();
				return S || V[v] || r[v] || V[U].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(u, m$1, T) {
					return m$1 || T.slice(1);
				});
			})).match(n), Z = W.length, Q = 0; Q < Z; Q += 1) {
				var D = W[Q], H = q[D], x = H && H[0], Y = H && H[1];
				W[Q] = Y ? {
					regex: x,
					parser: Y
				} : D.replace(/^\[|\]$/g, "");
			}
			return function(F) {
				for (var S = {}, v = 0, U = 0; v < Z; v += 1) {
					var u = W[v];
					if (typeof u == "string") U += u.length;
					else {
						var m$1 = u.regex, T = u.parser, d = F.slice(U), w = m$1.exec(d)[0];
						T.call(S, w), F = F.replace(w, "");
					}
				}
				return function(c) {
					var l = c.afternoon;
					if (l !== void 0) {
						var o = c.hours;
						l ? o < 12 && (c.hours += 12) : o === 12 && (c.hours = 0), delete c.afternoon;
					}
				}(S), S;
			};
		}
		return function(M, I, V) {
			V.p.customParseFormat = !0, M && M.parseTwoDigitYear && (p = M.parseTwoDigitYear);
			var W = I.prototype, Z = W.parse;
			W.parse = function(Q) {
				var D = Q.date, H = Q.utc, x = Q.args;
				this.$u = H;
				var Y = x[1];
				if (typeof Y == "string") {
					var F = x[2] === !0, S = x[3] === !0, v = F || S, U = x[2];
					S && (U = x[2]), _ = this.$locale(), !F && U && (_ = V.Ls[U]), this.$d = function(d, w, c, l) {
						try {
							if (["x", "X"].indexOf(w) > -1) return /* @__PURE__ */ new Date((w === "X" ? 1e3 : 1) * d);
							var o = O(w)(d), P = o.year, z = o.month, R$2 = o.day, K = o.hours, G$1 = o.minutes, $ = o.seconds, at = o.milliseconds, k = o.zone, A = o.week, N = /* @__PURE__ */ new Date(), f = R$2 || (P || z ? 1 : N.getDate()), J = P || N.getFullYear(), L = 0;
							P && !z || (L = z > 0 ? z - 1 : N.getMonth());
							var j, X = K || 0, nt = G$1 || 0, st = $ || 0, pt = at || 0;
							return k ? new Date(Date.UTC(J, L, f, X, nt, st, pt + 60 * k.offset * 1e3)) : c ? new Date(Date.UTC(J, L, f, X, nt, st, pt)) : (j = new Date(J, L, f, X, nt, st, pt), A && (j = l(j).week(A).toDate()), j);
						} catch {
							return /* @__PURE__ */ new Date("");
						}
					}(D, Y, H, V), this.init(), U && U !== !0 && (this.$L = this.locale(U).$L), v && D != this.format(Y) && (this.$d = /* @__PURE__ */ new Date("")), _ = {};
				} else if (Y instanceof Array) for (var u = Y.length, m$1 = 1; m$1 <= u; m$1 += 1) {
					x[1] = Y[m$1 - 1];
					var T = V.apply(this, x);
					if (T.isValid()) {
						this.$d = T.$d, this.$L = T.$L, this.init();
						break;
					}
					m$1 === u && (this.$d = /* @__PURE__ */ new Date(""));
				}
				else Z.call(this, Q);
			};
		};
	});
})(Tr);
var Yi = Tr.exports;
var Ui = /* @__PURE__ */ Rv(Yi);
var br = { exports: {} };
(function(t$1, e) {
	(function(r, n) {
		t$1.exports = n();
	})(Dv, function() {
		return function(r, n) {
			var i = n.prototype, a = i.format;
			i.format = function(s) {
				var y = this, _ = this.$locale();
				if (!this.isValid()) return a.bind(this)(s);
				var p = this.$utils(), g = (s || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(E) {
					switch (E) {
						case "Q": return Math.ceil((y.$M + 1) / 3);
						case "Do": return _.ordinal(y.$D);
						case "gggg": return y.weekYear();
						case "GGGG": return y.isoWeekYear();
						case "wo": return _.ordinal(y.week(), "W");
						case "w":
						case "ww": return p.s(y.week(), E === "w" ? 1 : 2, "0");
						case "W":
						case "WW": return p.s(y.isoWeek(), E === "W" ? 1 : 2, "0");
						case "k":
						case "kk": return p.s(String(y.$H === 0 ? 24 : y.$H), E === "k" ? 1 : 2, "0");
						case "X": return Math.floor(y.$d.getTime() / 1e3);
						case "x": return y.$d.getTime();
						case "z": return "[" + y.offsetName() + "]";
						case "zzz": return "[" + y.offsetName("long") + "]";
						default: return E;
					}
				});
				return a.bind(this)(g);
			};
		};
	});
})(br);
var Ei = br.exports;
var Li = /* @__PURE__ */ Rv(Ei);
var ye = function() {
	var t$1 = /* @__PURE__ */ m(function(U, u, m$1, T) {
		for (m$1 = m$1 || {}, T = U.length; T--; m$1[U[T]] = u);
		return m$1;
	}, "o"), e = [
		6,
		8,
		10,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		31,
		33,
		35,
		36,
		38,
		40
	], r = [1, 26], n = [1, 27], i = [1, 28], a = [1, 29], s = [1, 30], y = [1, 31], _ = [1, 32], p = [1, 33], g = [1, 34], E = [1, 9], C = [1, 10], b = [1, 11], q = [1, 12], O = [1, 13], M = [1, 14], I = [1, 15], V = [1, 16], W = [1, 19], Z = [1, 20], Q = [1, 21], D = [1, 22], H = [1, 23], x = [1, 25], Y = [1, 35], F = {
		trace: /* @__PURE__ */ m(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			gantt: 4,
			document: 5,
			EOF: 6,
			line: 7,
			SPACE: 8,
			statement: 9,
			NL: 10,
			weekday: 11,
			weekday_monday: 12,
			weekday_tuesday: 13,
			weekday_wednesday: 14,
			weekday_thursday: 15,
			weekday_friday: 16,
			weekday_saturday: 17,
			weekday_sunday: 18,
			weekend: 19,
			weekend_friday: 20,
			weekend_saturday: 21,
			dateFormat: 22,
			inclusiveEndDates: 23,
			topAxis: 24,
			axisFormat: 25,
			tickInterval: 26,
			excludes: 27,
			includes: 28,
			todayMarker: 29,
			title: 30,
			acc_title: 31,
			acc_title_value: 32,
			acc_descr: 33,
			acc_descr_value: 34,
			acc_descr_multiline_value: 35,
			section: 36,
			clickStatement: 37,
			taskTxt: 38,
			taskData: 39,
			click: 40,
			callbackname: 41,
			callbackargs: 42,
			href: 43,
			clickStatementDebug: 44,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "gantt",
			6: "EOF",
			8: "SPACE",
			10: "NL",
			12: "weekday_monday",
			13: "weekday_tuesday",
			14: "weekday_wednesday",
			15: "weekday_thursday",
			16: "weekday_friday",
			17: "weekday_saturday",
			18: "weekday_sunday",
			20: "weekend_friday",
			21: "weekend_saturday",
			22: "dateFormat",
			23: "inclusiveEndDates",
			24: "topAxis",
			25: "axisFormat",
			26: "tickInterval",
			27: "excludes",
			28: "includes",
			29: "todayMarker",
			30: "title",
			31: "acc_title",
			32: "acc_title_value",
			33: "acc_descr",
			34: "acc_descr_value",
			35: "acc_descr_multiline_value",
			36: "section",
			38: "taskTxt",
			39: "taskData",
			40: "click",
			41: "callbackname",
			42: "callbackargs",
			43: "href"
		},
		productions_: [
			0,
			[3, 3],
			[5, 0],
			[5, 2],
			[7, 2],
			[7, 1],
			[7, 1],
			[7, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[19, 1],
			[19, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 2],
			[9, 2],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 2],
			[37, 2],
			[37, 3],
			[37, 3],
			[37, 4],
			[37, 3],
			[37, 4],
			[37, 2],
			[44, 2],
			[44, 3],
			[44, 3],
			[44, 4],
			[44, 3],
			[44, 4],
			[44, 2]
		],
		performAction: /* @__PURE__ */ m(function(u, m$1, T, d, w, c, l) {
			var o = c.length - 1;
			switch (w) {
				case 1: return c[o - 1];
				case 2:
					this.$ = [];
					break;
				case 3:
					c[o - 1].push(c[o]), this.$ = c[o - 1];
					break;
				case 4:
				case 5:
					this.$ = c[o];
					break;
				case 6:
				case 7:
					this.$ = [];
					break;
				case 8:
					d.setWeekday("monday");
					break;
				case 9:
					d.setWeekday("tuesday");
					break;
				case 10:
					d.setWeekday("wednesday");
					break;
				case 11:
					d.setWeekday("thursday");
					break;
				case 12:
					d.setWeekday("friday");
					break;
				case 13:
					d.setWeekday("saturday");
					break;
				case 14:
					d.setWeekday("sunday");
					break;
				case 15:
					d.setWeekend("friday");
					break;
				case 16:
					d.setWeekend("saturday");
					break;
				case 17:
					d.setDateFormat(c[o].substr(11)), this.$ = c[o].substr(11);
					break;
				case 18:
					d.enableInclusiveEndDates(), this.$ = c[o].substr(18);
					break;
				case 19:
					d.TopAxis(), this.$ = c[o].substr(8);
					break;
				case 20:
					d.setAxisFormat(c[o].substr(11)), this.$ = c[o].substr(11);
					break;
				case 21:
					d.setTickInterval(c[o].substr(13)), this.$ = c[o].substr(13);
					break;
				case 22:
					d.setExcludes(c[o].substr(9)), this.$ = c[o].substr(9);
					break;
				case 23:
					d.setIncludes(c[o].substr(9)), this.$ = c[o].substr(9);
					break;
				case 24:
					d.setTodayMarker(c[o].substr(12)), this.$ = c[o].substr(12);
					break;
				case 27:
					d.setDiagramTitle(c[o].substr(6)), this.$ = c[o].substr(6);
					break;
				case 28:
					this.$ = c[o].trim(), d.setAccTitle(this.$);
					break;
				case 29:
				case 30:
					this.$ = c[o].trim(), d.setAccDescription(this.$);
					break;
				case 31:
					d.addSection(c[o].substr(8)), this.$ = c[o].substr(8);
					break;
				case 33:
					d.addTask(c[o - 1], c[o]), this.$ = "task";
					break;
				case 34:
					this.$ = c[o - 1], d.setClickEvent(c[o - 1], c[o], null);
					break;
				case 35:
					this.$ = c[o - 2], d.setClickEvent(c[o - 2], c[o - 1], c[o]);
					break;
				case 36:
					this.$ = c[o - 2], d.setClickEvent(c[o - 2], c[o - 1], null), d.setLink(c[o - 2], c[o]);
					break;
				case 37:
					this.$ = c[o - 3], d.setClickEvent(c[o - 3], c[o - 2], c[o - 1]), d.setLink(c[o - 3], c[o]);
					break;
				case 38:
					this.$ = c[o - 2], d.setClickEvent(c[o - 2], c[o], null), d.setLink(c[o - 2], c[o - 1]);
					break;
				case 39:
					this.$ = c[o - 3], d.setClickEvent(c[o - 3], c[o - 1], c[o]), d.setLink(c[o - 3], c[o - 2]);
					break;
				case 40:
					this.$ = c[o - 1], d.setLink(c[o - 1], c[o]);
					break;
				case 41:
				case 47:
					this.$ = c[o - 1] + " " + c[o];
					break;
				case 42:
				case 43:
				case 45:
					this.$ = c[o - 2] + " " + c[o - 1] + " " + c[o];
					break;
				case 44:
				case 46:
					this.$ = c[o - 3] + " " + c[o - 2] + " " + c[o - 1] + " " + c[o];
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			t$1(e, [2, 2], { 5: 3 }),
			{
				6: [1, 4],
				7: 5,
				8: [1, 6],
				9: 7,
				10: [1, 8],
				11: 17,
				12: r,
				13: n,
				14: i,
				15: a,
				16: s,
				17: y,
				18: _,
				19: 18,
				20: p,
				21: g,
				22: E,
				23: C,
				24: b,
				25: q,
				26: O,
				27: M,
				28: I,
				29: V,
				30: W,
				31: Z,
				33: Q,
				35: D,
				36: H,
				37: 24,
				38: x,
				40: Y
			},
			t$1(e, [2, 7], { 1: [2, 1] }),
			t$1(e, [2, 3]),
			{
				9: 36,
				11: 17,
				12: r,
				13: n,
				14: i,
				15: a,
				16: s,
				17: y,
				18: _,
				19: 18,
				20: p,
				21: g,
				22: E,
				23: C,
				24: b,
				25: q,
				26: O,
				27: M,
				28: I,
				29: V,
				30: W,
				31: Z,
				33: Q,
				35: D,
				36: H,
				37: 24,
				38: x,
				40: Y
			},
			t$1(e, [2, 5]),
			t$1(e, [2, 6]),
			t$1(e, [2, 17]),
			t$1(e, [2, 18]),
			t$1(e, [2, 19]),
			t$1(e, [2, 20]),
			t$1(e, [2, 21]),
			t$1(e, [2, 22]),
			t$1(e, [2, 23]),
			t$1(e, [2, 24]),
			t$1(e, [2, 25]),
			t$1(e, [2, 26]),
			t$1(e, [2, 27]),
			{ 32: [1, 37] },
			{ 34: [1, 38] },
			t$1(e, [2, 30]),
			t$1(e, [2, 31]),
			t$1(e, [2, 32]),
			{ 39: [1, 39] },
			t$1(e, [2, 8]),
			t$1(e, [2, 9]),
			t$1(e, [2, 10]),
			t$1(e, [2, 11]),
			t$1(e, [2, 12]),
			t$1(e, [2, 13]),
			t$1(e, [2, 14]),
			t$1(e, [2, 15]),
			t$1(e, [2, 16]),
			{
				41: [1, 40],
				43: [1, 41]
			},
			t$1(e, [2, 4]),
			t$1(e, [2, 28]),
			t$1(e, [2, 29]),
			t$1(e, [2, 33]),
			t$1(e, [2, 34], {
				42: [1, 42],
				43: [1, 43]
			}),
			t$1(e, [2, 40], { 41: [1, 44] }),
			t$1(e, [2, 35], { 43: [1, 45] }),
			t$1(e, [2, 36]),
			t$1(e, [2, 38], { 42: [1, 46] }),
			t$1(e, [2, 37]),
			t$1(e, [2, 39])
		],
		defaultActions: {},
		parseError: /* @__PURE__ */ m(function(u, m$1) {
			if (m$1.recoverable) this.trace(u);
			else {
				var T = new Error(u);
				throw T.hash = m$1, T;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ m(function(u) {
			var m$1 = this, T = [0], d = [], w = [null], c = [], l = this.table, o = "", P = 0, z = 0, R$2 = 2, K = 1, G$1 = c.slice.call(arguments, 1), $ = Object.create(this.lexer), at = { yy: {} };
			for (var k in this.yy) Object.prototype.hasOwnProperty.call(this.yy, k) && (at.yy[k] = this.yy[k]);
			$.setInput(u, at.yy), at.yy.lexer = $, at.yy.parser = this, typeof $.yylloc > "u" && ($.yylloc = {});
			var A = $.yylloc;
			c.push(A);
			var N = $.options && $.options.ranges;
			typeof at.yy.parseError == "function" ? this.parseError = at.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function f(ot) {
				T.length = T.length - 2 * ot, w.length = w.length - ot, c.length = c.length - ot;
			}
			m(f, "popStack");
			function J() {
				var ot;
				return ot = d.pop() || $.lex() || K, typeof ot != "number" && (ot instanceof Array && (d = ot, ot = d.pop()), ot = m$1.symbols_[ot] || ot), ot;
			}
			m(J, "lex");
			for (var L, j, X, nt, st = {}, pt, lt, Ae, Bt;;) {
				if (j = T[T.length - 1], this.defaultActions[j] ? X = this.defaultActions[j] : ((L === null || typeof L > "u") && (L = J()), X = l[j] && l[j][L]), typeof X > "u" || !X.length || !X[0]) {
					var re = "";
					Bt = [];
					for (pt in l[j]) this.terminals_[pt] && pt > R$2 && Bt.push("'" + this.terminals_[pt] + "'");
					$.showPosition ? re = "Parse error on line " + (P + 1) + `:
` + $.showPosition() + `
Expecting ` + Bt.join(", ") + ", got '" + (this.terminals_[L] || L) + "'" : re = "Parse error on line " + (P + 1) + ": Unexpected " + (L == K ? "end of input" : "'" + (this.terminals_[L] || L) + "'"), this.parseError(re, {
						text: $.match,
						token: this.terminals_[L] || L,
						line: $.yylineno,
						loc: A,
						expected: Bt
					});
				}
				if (X[0] instanceof Array && X.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + j + ", token: " + L);
				switch (X[0]) {
					case 1:
						T.push(L), w.push($.yytext), c.push($.yylloc), T.push(X[1]), L = null, z = $.yyleng, o = $.yytext, P = $.yylineno, A = $.yylloc;
						break;
					case 2:
						if (lt = this.productions_[X[1]][1], st.$ = w[w.length - lt], st._$ = {
							first_line: c[c.length - (lt || 1)].first_line,
							last_line: c[c.length - 1].last_line,
							first_column: c[c.length - (lt || 1)].first_column,
							last_column: c[c.length - 1].last_column
						}, N && (st._$.range = [c[c.length - (lt || 1)].range[0], c[c.length - 1].range[1]]), nt = this.performAction.apply(st, [
							o,
							z,
							P,
							at.yy,
							X[1],
							w,
							c
						].concat(G$1)), typeof nt < "u") return nt;
						lt && (T = T.slice(0, -1 * lt * 2), w = w.slice(0, -1 * lt), c = c.slice(0, -1 * lt)), T.push(this.productions_[X[1]][0]), w.push(st.$), c.push(st._$), Ae = l[T[T.length - 2]][T[T.length - 1]], T.push(Ae);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	F.lexer = /* @__PURE__ */ function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ m(function(m$1, T) {
				if (this.yy.parser) this.yy.parser.parseError(m$1, T);
				else throw new Error(m$1);
			}, "parseError"),
			setInput: /* @__PURE__ */ m(function(u, m$1) {
				return this.yy = m$1 || this.yy || {}, this._input = u, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ m(function() {
				var u = this._input[0];
				this.yytext += u, this.yyleng++, this.offset++, this.match += u, this.matched += u;
				return u.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), u;
			}, "input"),
			unput: /* @__PURE__ */ m(function(u) {
				var m$1 = u.length, T = u.split(/(?:\r\n?|\n)/g);
				this._input = u + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - m$1), this.offset -= m$1;
				var d = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), T.length - 1 && (this.yylineno -= T.length - 1);
				var w = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: T ? (T.length === d.length ? this.yylloc.first_column : 0) + d[d.length - T.length].length - T[0].length : this.yylloc.first_column - m$1
				}, this.options.ranges && (this.yylloc.range = [w[0], w[0] + this.yyleng - m$1]), this.yyleng = this.yytext.length, this;
			}, "unput"),
			more: /* @__PURE__ */ m(function() {
				return this._more = !0, this;
			}, "more"),
			reject: /* @__PURE__ */ m(function() {
				if (this.options.backtrack_lexer) this._backtrack = !0;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: /* @__PURE__ */ m(function(u) {
				this.unput(this.match.slice(u));
			}, "less"),
			pastInput: /* @__PURE__ */ m(function() {
				var u = this.matched.substr(0, this.matched.length - this.match.length);
				return (u.length > 20 ? "..." : "") + u.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ m(function() {
				var u = this.match;
				return u.length < 20 && (u += this._input.substr(0, 20 - u.length)), (u.substr(0, 20) + (u.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ m(function() {
				var u = this.pastInput(), m$1 = new Array(u.length + 1).join("-");
				return u + this.upcomingInput() + `
` + m$1 + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ m(function(u, m$1) {
				var T, d, w;
				if (this.options.backtrack_lexer && (w = {
					yylineno: this.yylineno,
					yylloc: {
						first_line: this.yylloc.first_line,
						last_line: this.last_line,
						first_column: this.yylloc.first_column,
						last_column: this.yylloc.last_column
					},
					yytext: this.yytext,
					match: this.match,
					matches: this.matches,
					matched: this.matched,
					yyleng: this.yyleng,
					offset: this.offset,
					_more: this._more,
					_input: this._input,
					yy: this.yy,
					conditionStack: this.conditionStack.slice(0),
					done: this.done
				}, this.options.ranges && (w.yylloc.range = this.yylloc.range.slice(0))), d = u[0].match(/(?:\r\n?|\n).*/g), d && (this.yylineno += d.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: d ? d[d.length - 1].length - d[d.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + u[0].length
				}, this.yytext += u[0], this.match += u[0], this.matches = u, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(u[0].length), this.matched += u[0], T = this.performAction.call(this, this.yy, this, m$1, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), T) return T;
				if (this._backtrack) {
					for (var c in w) this[c] = w[c];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ m(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var u, m$1, T, d;
				this._more || (this.yytext = "", this.match = "");
				for (var w = this._currentRules(), c = 0; c < w.length; c++) if (T = this._input.match(this.rules[w[c]]), T && (!m$1 || T[0].length > m$1[0].length)) {
					if (m$1 = T, d = c, this.options.backtrack_lexer) {
						if (u = this.test_match(T, w[c]), u !== !1) return u;
						if (this._backtrack) {
							m$1 = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return m$1 ? (u = this.test_match(m$1, w[d]), u !== !1 ? u : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ m(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ m(function(m$1) {
				this.conditionStack.push(m$1);
			}, "begin"),
			popState: /* @__PURE__ */ m(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ m(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ m(function(m$1) {
				return m$1 = this.conditionStack.length - 1 - Math.abs(m$1 || 0), m$1 >= 0 ? this.conditionStack[m$1] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ m(function(m$1) {
				this.begin(m$1);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ m(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ m(function(m$1, T, d, w) {
				switch (d) {
					case 0: return this.begin("open_directive"), "open_directive";
					case 1: return this.begin("acc_title"), 31;
					case 2: return this.popState(), "acc_title_value";
					case 3: return this.begin("acc_descr"), 33;
					case 4: return this.popState(), "acc_descr_value";
					case 5:
						this.begin("acc_descr_multiline");
						break;
					case 6:
						this.popState();
						break;
					case 7: return "acc_descr_multiline_value";
					case 8: break;
					case 9: break;
					case 10: break;
					case 11: return 10;
					case 12: break;
					case 13: break;
					case 14:
						this.begin("href");
						break;
					case 15:
						this.popState();
						break;
					case 16: return 43;
					case 17:
						this.begin("callbackname");
						break;
					case 18:
						this.popState();
						break;
					case 19:
						this.popState(), this.begin("callbackargs");
						break;
					case 20: return 41;
					case 21:
						this.popState();
						break;
					case 22: return 42;
					case 23:
						this.begin("click");
						break;
					case 24:
						this.popState();
						break;
					case 25: return 40;
					case 26: return 4;
					case 27: return 22;
					case 28: return 23;
					case 29: return 24;
					case 30: return 25;
					case 31: return 26;
					case 32: return 28;
					case 33: return 27;
					case 34: return 29;
					case 35: return 12;
					case 36: return 13;
					case 37: return 14;
					case 38: return 15;
					case 39: return 16;
					case 40: return 17;
					case 41: return 18;
					case 42: return 20;
					case 43: return 21;
					case 44: return "date";
					case 45: return 30;
					case 46: return "accDescription";
					case 47: return 36;
					case 48: return 38;
					case 49: return 39;
					case 50: return ":";
					case 51: return 6;
					case 52: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:%%\{)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:%%(?!\{)*[^\n]*)/i,
				/^(?:[^\}]%%*[^\n]*)/i,
				/^(?:%%*[^\n]*[\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:%[^\n]*)/i,
				/^(?:href[\s]+["])/i,
				/^(?:["])/i,
				/^(?:[^"]*)/i,
				/^(?:call[\s]+)/i,
				/^(?:\([\s]*\))/i,
				/^(?:\()/i,
				/^(?:[^(]*)/i,
				/^(?:\))/i,
				/^(?:[^)]*)/i,
				/^(?:click[\s]+)/i,
				/^(?:[\s\n])/i,
				/^(?:[^\s\n]*)/i,
				/^(?:gantt\b)/i,
				/^(?:dateFormat\s[^#\n;]+)/i,
				/^(?:inclusiveEndDates\b)/i,
				/^(?:topAxis\b)/i,
				/^(?:axisFormat\s[^#\n;]+)/i,
				/^(?:tickInterval\s[^#\n;]+)/i,
				/^(?:includes\s[^#\n;]+)/i,
				/^(?:excludes\s[^#\n;]+)/i,
				/^(?:todayMarker\s[^\n;]+)/i,
				/^(?:weekday\s+monday\b)/i,
				/^(?:weekday\s+tuesday\b)/i,
				/^(?:weekday\s+wednesday\b)/i,
				/^(?:weekday\s+thursday\b)/i,
				/^(?:weekday\s+friday\b)/i,
				/^(?:weekday\s+saturday\b)/i,
				/^(?:weekday\s+sunday\b)/i,
				/^(?:weekend\s+friday\b)/i,
				/^(?:weekend\s+saturday\b)/i,
				/^(?:\d\d\d\d-\d\d-\d\d\b)/i,
				/^(?:title\s[^\n]+)/i,
				/^(?:accDescription\s[^#\n;]+)/i,
				/^(?:section\s[^\n]+)/i,
				/^(?:[^:\n]+)/i,
				/^(?::[^#\n;]+)/i,
				/^(?::)/i,
				/^(?:$)/i,
				/^(?:.)/i
			],
			conditions: {
				acc_descr_multiline: {
					rules: [6, 7],
					inclusive: !1
				},
				acc_descr: {
					rules: [4],
					inclusive: !1
				},
				acc_title: {
					rules: [2],
					inclusive: !1
				},
				callbackargs: {
					rules: [21, 22],
					inclusive: !1
				},
				callbackname: {
					rules: [
						18,
						19,
						20
					],
					inclusive: !1
				},
				href: {
					rules: [15, 16],
					inclusive: !1
				},
				click: {
					rules: [24, 25],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						3,
						5,
						8,
						9,
						10,
						11,
						12,
						13,
						14,
						17,
						23,
						26,
						27,
						28,
						29,
						30,
						31,
						32,
						33,
						34,
						35,
						36,
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						46,
						47,
						48,
						49,
						50,
						51,
						52
					],
					inclusive: !0
				}
			}
		};
	}();
	function v() {
		this.yy = {};
	}
	return m(v, "Parser"), v.prototype = F, F.Parser = v, new v();
}();
ye.parser = ye;
var Ai = ye;
Iv.extend(Fi);
Iv.extend(Ui);
Iv.extend(Li);
var Ge = {
	friday: 5,
	saturday: 6
}, ut = "", De = "", Ce = void 0, Me = "", zt = [], Pt = [], _e = /* @__PURE__ */ new Map(), Se = [], te = [], Et = "", Fe = "", xr = [
	"active",
	"done",
	"crit",
	"milestone",
	"vert"
], Ye = [], Rt = !1, Ue = !1, Ee = "sunday", ee = "saturday", ke = 0, Ii = /* @__PURE__ */ m(function() {
	Se = [], te = [], Et = "", Ye = [], Gt = 0, ve = void 0, jt = void 0, tt = [], ut = "", De = "", Fe = "", Ce = void 0, Me = "", zt = [], Pt = [], Rt = !1, Ue = !1, ke = 0, _e = /* @__PURE__ */ new Map(), m5(), Ee = "sunday", ee = "saturday";
}, "clear"), Wi = /* @__PURE__ */ m(function(t$1) {
	De = t$1;
}, "setAxisFormat"), Oi = /* @__PURE__ */ m(function() {
	return De;
}, "getAxisFormat"), Hi = /* @__PURE__ */ m(function(t$1) {
	Ce = t$1;
}, "setTickInterval"), Ni = /* @__PURE__ */ m(function() {
	return Ce;
}, "getTickInterval"), Vi = /* @__PURE__ */ m(function(t$1) {
	Me = t$1;
}, "setTodayMarker"), zi$1 = /* @__PURE__ */ m(function() {
	return Me;
}, "getTodayMarker"), Pi = /* @__PURE__ */ m(function(t$1) {
	ut = t$1;
}, "setDateFormat"), Ri = /* @__PURE__ */ m(function() {
	Rt = !0;
}, "enableInclusiveEndDates"), Bi = /* @__PURE__ */ m(function() {
	return Rt;
}, "endDatesAreInclusive"), Zi = /* @__PURE__ */ m(function() {
	Ue = !0;
}, "enableTopAxis"), Xi = /* @__PURE__ */ m(function() {
	return Ue;
}, "topAxisEnabled"), qi = /* @__PURE__ */ m(function(t$1) {
	Fe = t$1;
}, "setDisplayMode"), Gi = /* @__PURE__ */ m(function() {
	return Fe;
}, "getDisplayMode"), ji = /* @__PURE__ */ m(function() {
	return ut;
}, "getDateFormat"), Qi = /* @__PURE__ */ m(function(t$1) {
	zt = t$1.toLowerCase().split(/[\s,]+/);
}, "setIncludes"), $i = /* @__PURE__ */ m(function() {
	return zt;
}, "getIncludes"), Ji = /* @__PURE__ */ m(function(t$1) {
	Pt = t$1.toLowerCase().split(/[\s,]+/);
}, "setExcludes"), Ki = /* @__PURE__ */ m(function() {
	return Pt;
}, "getExcludes"), ta$1 = /* @__PURE__ */ m(function() {
	return _e;
}, "getLinks"), ea = /* @__PURE__ */ m(function(t$1) {
	Et = t$1, Se.push(t$1);
}, "addSection"), ra = /* @__PURE__ */ m(function() {
	return Se;
}, "getSections"), na = /* @__PURE__ */ m(function() {
	let t$1 = je();
	const e = 10;
	let r = 0;
	for (; !t$1 && r < e;) t$1 = je(), r++;
	return te = tt, te;
}, "getTasks"), wr = /* @__PURE__ */ m(function(t$1, e, r, n) {
	const i = t$1.format(e.trim()), a = t$1.format("YYYY-MM-DD");
	return n.includes(i) || n.includes(a) ? !1 : r.includes("weekends") && (t$1.isoWeekday() === Ge[ee] || t$1.isoWeekday() === Ge[ee] + 1) || r.includes(t$1.format("dddd").toLowerCase()) ? !0 : r.includes(i) || r.includes(a);
}, "isInvalidDate"), ia = /* @__PURE__ */ m(function(t$1) {
	Ee = t$1;
}, "setWeekday"), aa = /* @__PURE__ */ m(function() {
	return Ee;
}, "getWeekday"), sa = /* @__PURE__ */ m(function(t$1) {
	ee = t$1;
}, "setWeekend"), Dr = /* @__PURE__ */ m(function(t$1, e, r, n) {
	if (!r.length || t$1.manualEndTime) return;
	let i;
	t$1.startTime instanceof Date ? i = Iv(t$1.startTime) : i = Iv(t$1.startTime, e, !0), i = i.add(1, "d");
	let a;
	t$1.endTime instanceof Date ? a = Iv(t$1.endTime) : a = Iv(t$1.endTime, e, !0);
	const [s, y] = oa(i, a, e, r, n);
	t$1.endTime = s.toDate(), t$1.renderEndTime = y;
}, "checkTaskDates"), oa = /* @__PURE__ */ m(function(t$1, e, r, n, i) {
	let a = !1, s = null;
	for (; t$1 <= e;) a || (s = e.toDate()), a = wr(t$1, r, n, i), a && (e = e.add(1, "d")), t$1 = t$1.add(1, "d");
	return [e, s];
}, "fixTaskDates"), pe = /* @__PURE__ */ m(function(t$1, e, r) {
	if (r = r.trim(), (e.trim() === "x" || e.trim() === "X") && /^\d+$/.test(r)) return new Date(Number(r));
	const i = /^after\s+(?<ids>[\d\w- ]+)/.exec(r);
	if (i !== null) {
		let s = null;
		for (const _ of i.groups.ids.split(" ")) {
			let p = Ct(_);
			p !== void 0 && (!s || p.endTime > s.endTime) && (s = p);
		}
		if (s) return s.endTime;
		const y = /* @__PURE__ */ new Date();
		return y.setHours(0, 0, 0, 0), y;
	}
	let a = Iv(r, e.trim(), !0);
	if (a.isValid()) return a.toDate();
	{
		R.debug("Invalid date:" + r), R.debug("With date format:" + e.trim());
		const s = new Date(r);
		if (s === void 0 || isNaN(s.getTime()) || s.getFullYear() < -1e4 || s.getFullYear() > 1e4) throw new Error("Invalid date:" + r);
		return s;
	}
}, "getStartDate"), Cr = /* @__PURE__ */ m(function(t$1) {
	const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t$1.trim());
	return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
}, "parseDuration"), Mr = /* @__PURE__ */ m(function(t$1, e, r, n = !1) {
	r = r.trim();
	const a = /^until\s+(?<ids>[\d\w- ]+)/.exec(r);
	if (a !== null) {
		let g = null;
		for (const C of a.groups.ids.split(" ")) {
			let b = Ct(C);
			b !== void 0 && (!g || b.startTime < g.startTime) && (g = b);
		}
		if (g) return g.startTime;
		const E = /* @__PURE__ */ new Date();
		return E.setHours(0, 0, 0, 0), E;
	}
	let s = Iv(r, e.trim(), !0);
	if (s.isValid()) return n && (s = s.add(1, "d")), s.toDate();
	let y = Iv(t$1);
	const [_, p] = Cr(r);
	if (!Number.isNaN(_)) {
		const g = y.add(_, p);
		g.isValid() && (y = g);
	}
	return y.toDate();
}, "getEndDate"), Gt = 0, Ft = /* @__PURE__ */ m(function(t$1) {
	return t$1 === void 0 ? (Gt = Gt + 1, "task" + Gt) : t$1;
}, "parseId"), ca = /* @__PURE__ */ m(function(t$1, e) {
	let r;
	e.substr(0, 1) === ":" ? r = e.substr(1, e.length) : r = e;
	const n = r.split(","), i = {};
	Le(n, i, xr);
	for (let s = 0; s < n.length; s++) n[s] = n[s].trim();
	let a = "";
	switch (n.length) {
		case 1:
			i.id = Ft(), i.startTime = t$1.endTime, a = n[0];
			break;
		case 2:
			i.id = Ft(), i.startTime = pe(void 0, ut, n[0]), a = n[1];
			break;
		case 3:
			i.id = Ft(n[0]), i.startTime = pe(void 0, ut, n[1]), a = n[2];
			break;
	}
	return a && (i.endTime = Mr(i.startTime, ut, a, Rt), i.manualEndTime = Iv(a, "YYYY-MM-DD", !0).isValid(), Dr(i, ut, Pt, zt)), i;
}, "compileData"), la = /* @__PURE__ */ m(function(t$1, e) {
	let r;
	e.substr(0, 1) === ":" ? r = e.substr(1, e.length) : r = e;
	const n = r.split(","), i = {};
	Le(n, i, xr);
	for (let a = 0; a < n.length; a++) n[a] = n[a].trim();
	switch (n.length) {
		case 1:
			i.id = Ft(), i.startTime = {
				type: "prevTaskEnd",
				id: t$1
			}, i.endTime = { data: n[0] };
			break;
		case 2:
			i.id = Ft(), i.startTime = {
				type: "getStartDate",
				startData: n[0]
			}, i.endTime = { data: n[1] };
			break;
		case 3:
			i.id = Ft(n[0]), i.startTime = {
				type: "getStartDate",
				startData: n[1]
			}, i.endTime = { data: n[2] };
			break;
	}
	return i;
}, "parseData"), ve, jt, tt = [], _r = {}, ua = /* @__PURE__ */ m(function(t$1, e) {
	const r = {
		section: Et,
		type: Et,
		processed: !1,
		manualEndTime: !1,
		renderEndTime: null,
		raw: { data: e },
		task: t$1,
		classes: []
	}, n = la(jt, e);
	r.raw.startTime = n.startTime, r.raw.endTime = n.endTime, r.id = n.id, r.prevTaskId = jt, r.active = n.active, r.done = n.done, r.crit = n.crit, r.milestone = n.milestone, r.vert = n.vert, r.order = ke, ke++;
	const i = tt.push(r);
	jt = r.id, _r[r.id] = i - 1;
}, "addTask"), Ct = /* @__PURE__ */ m(function(t$1) {
	const e = _r[t$1];
	return tt[e];
}, "findTaskById"), fa = /* @__PURE__ */ m(function(t$1, e) {
	const r = {
		section: Et,
		type: Et,
		description: t$1,
		task: t$1,
		classes: []
	}, n = ca(ve, e);
	r.startTime = n.startTime, r.endTime = n.endTime, r.id = n.id, r.active = n.active, r.done = n.done, r.crit = n.crit, r.milestone = n.milestone, r.vert = n.vert, ve = r, te.push(r);
}, "addTaskOrg"), je = /* @__PURE__ */ m(function() {
	const t$1 = /* @__PURE__ */ m(function(r) {
		const n = tt[r];
		let i = "";
		switch (tt[r].raw.startTime.type) {
			case "prevTaskEnd":
				n.startTime = Ct(n.prevTaskId).endTime;
				break;
			case "getStartDate":
				i = pe(void 0, ut, tt[r].raw.startTime.startData), i && (tt[r].startTime = i);
				break;
		}
		return tt[r].startTime && (tt[r].endTime = Mr(tt[r].startTime, ut, tt[r].raw.endTime.data, Rt), tt[r].endTime && (tt[r].processed = !0, tt[r].manualEndTime = Iv(tt[r].raw.endTime.data, "YYYY-MM-DD", !0).isValid(), Dr(tt[r], ut, Pt, zt))), tt[r].processed;
	}, "compileTask");
	let e = !0;
	for (const [r, n] of tt.entries()) t$1(r), e = e && n.processed;
	return e;
}, "compileTasks"), ha = /* @__PURE__ */ m(function(t$1, e) {
	let r = e;
	yt().securityLevel !== "loose" && (r = bm(e)), t$1.split(",").forEach(function(n) {
		Ct(n) !== void 0 && (Fr(n, () => {
			window.open(r, "_self");
		}), _e.set(n, r));
	}), Sr(t$1, "clickable");
}, "setLink"), Sr = /* @__PURE__ */ m(function(t$1, e) {
	t$1.split(",").forEach(function(r) {
		let n = Ct(r);
		n !== void 0 && n.classes.push(e);
	});
}, "setClass"), da = /* @__PURE__ */ m(function(t$1, e, r) {
	if (yt().securityLevel !== "loose" || e === void 0) return;
	let n = [];
	if (typeof r == "string") {
		n = r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
		for (let a = 0; a < n.length; a++) {
			let s = n[a].trim();
			s.startsWith("\"") && s.endsWith("\"") && (s = s.substr(1, s.length - 2)), n[a] = s;
		}
	}
	n.length === 0 && n.push(t$1), Ct(t$1) !== void 0 && Fr(t$1, () => {
		$e.runFunc(e, ...n);
	});
}, "setClickFun"), Fr = /* @__PURE__ */ m(function(t$1, e) {
	Ye.push(function() {
		const r = document.querySelector(`[id="${t$1}"]`);
		r !== null && r.addEventListener("click", function() {
			e();
		});
	}, function() {
		const r = document.querySelector(`[id="${t$1}-text"]`);
		r !== null && r.addEventListener("click", function() {
			e();
		});
	});
}, "pushFun"), ya = {
	getConfig: /* @__PURE__ */ m(() => yt().gantt, "getConfig"),
	clear: Ii,
	setDateFormat: Pi,
	getDateFormat: ji,
	enableInclusiveEndDates: Ri,
	endDatesAreInclusive: Bi,
	enableTopAxis: Zi,
	topAxisEnabled: Xi,
	setAxisFormat: Wi,
	getAxisFormat: Oi,
	setTickInterval: Hi,
	getTickInterval: Ni,
	setTodayMarker: Vi,
	getTodayMarker: zi$1,
	setAccTitle: b5,
	getAccTitle: x5,
	setDiagramTitle: w5,
	getDiagramTitle: _5,
	setDisplayMode: qi,
	getDisplayMode: Gi,
	setAccDescription: y5,
	getAccDescription: k5,
	addSection: ea,
	getSections: ra,
	getTasks: na,
	addTask: ua,
	findTaskById: Ct,
	addTaskOrg: fa,
	setIncludes: Qi,
	getIncludes: $i,
	setExcludes: Ji,
	getExcludes: Ki,
	setClickEvent: /* @__PURE__ */ m(function(t$1, e, r) {
		t$1.split(",").forEach(function(n) {
			da(n, e, r);
		}), Sr(t$1, "clickable");
	}, "setClickEvent"),
	setLink: ha,
	getLinks: ta$1,
	bindFunctions: /* @__PURE__ */ m(function(t$1) {
		Ye.forEach(function(e) {
			e(t$1);
		});
	}, "bindFunctions"),
	parseDuration: Cr,
	isInvalidDate: wr,
	setWeekday: ia,
	getWeekday: aa,
	setWeekend: sa
};
function Le(t$1, e, r) {
	let n = !0;
	for (; n;) n = !1, r.forEach(function(i) {
		const a = "^\\s*" + i + "\\s*$", s = new RegExp(a);
		t$1[0].match(s) && (e[i] = !0, t$1.shift(1), n = !0);
	});
}
m(Le, "getTaskTags");
var ka = /* @__PURE__ */ m(function() {
	R.debug("Something is calling, setConf, remove the call");
}, "setConf"), Qe = {
	monday: Ht,
	tuesday: lr,
	wednesday: ur,
	thursday: bt,
	friday: fr,
	saturday: hr,
	sunday: Vt
}, pa = /* @__PURE__ */ m((t$1, e) => {
	let r = [...t$1].map(() => -Infinity), n = [...t$1].sort((a, s) => a.startTime - s.startTime || a.order - s.order), i = 0;
	for (const a of n) for (let s = 0; s < r.length; s++) if (a.startTime >= r[s]) {
		r[s] = a.endTime, a.order = s + e, s > i && (i = s);
		break;
	}
	return i;
}, "getMaxIntersections"), ht, Gs = {
	parser: Ai,
	db: ya,
	renderer: {
		setConf: ka,
		draw: /* @__PURE__ */ m(function(t$1, e, r, n) {
			const i = yt().gantt, a = yt().securityLevel;
			let s;
			a === "sandbox" && (s = gt("#i" + e));
			const y = a === "sandbox" ? gt(s.nodes()[0].contentDocument.body) : gt("body"), _ = a === "sandbox" ? s.nodes()[0].contentDocument : document, p = _.getElementById(e);
			ht = p.parentElement.offsetWidth, ht === void 0 && (ht = 1200), i.useWidth !== void 0 && (ht = i.useWidth);
			const g = n.db.getTasks();
			let E = [];
			for (const x of g) E.push(x.type);
			E = H(E);
			const C = {};
			let b = 2 * i.topPadding;
			if (n.db.getDisplayMode() === "compact" || i.displayMode === "compact") {
				const x = {};
				for (const F of g) x[F.section] === void 0 ? x[F.section] = [F] : x[F.section].push(F);
				let Y = 0;
				for (const F of Object.keys(x)) {
					const S = pa(x[F], Y) + 1;
					Y += S, b += S * (i.barHeight + i.barGap), C[F] = S;
				}
			} else {
				b += g.length * (i.barHeight + i.barGap);
				for (const x of E) C[x] = g.filter((Y) => Y.type === x).length;
			}
			p.setAttribute("viewBox", "0 0 " + ht + " " + b);
			const q = y.select(`[id="${e}"]`), O = _i().domain([jr(g, function(x) {
				return x.startTime;
			}), Gr(g, function(x) {
				return x.endTime;
			})]).rangeRound([0, ht - i.leftPadding - i.rightPadding]);
			function M(x, Y) {
				const F = x.startTime, S = Y.startTime;
				let v = 0;
				return F > S ? v = 1 : F < S && (v = -1), v;
			}
			m(M, "taskCompare"), g.sort(M), I(g, ht, b), If(q, b, ht, i.useMaxWidth), q.append("text").text(n.db.getDiagramTitle()).attr("x", ht / 2).attr("y", i.titleTopMargin).attr("class", "titleText");
			function I(x, Y, F) {
				const S = i.barHeight, v = S + i.barGap, U = i.topPadding, u = i.leftPadding, m$1 = cn().domain([0, E.length]).range(["#00B9FA", "#F95002"]).interpolate(fn);
				W(v, U, u, Y, F, x, n.db.getExcludes(), n.db.getIncludes()), Z(u, U, Y, F), V(x, v, U, u, S, m$1, Y), Q(v, U), D(u, U, Y, F);
			}
			m(I, "makeGantt");
			function V(x, Y, F, S, v, U, u) {
				x.sort((l, o) => l.vert === o.vert ? 0 : l.vert ? 1 : -1);
				const T = [...new Set(x.map((l) => l.order))].map((l) => x.find((o) => o.order === l));
				q.append("g").selectAll("rect").data(T).enter().append("rect").attr("x", 0).attr("y", function(l, o) {
					return o = l.order, o * Y + F - 2;
				}).attr("width", function() {
					return u - i.rightPadding / 2;
				}).attr("height", Y).attr("class", function(l) {
					for (const [o, P] of E.entries()) if (l.type === P) return "section section" + o % i.numberSectionStyles;
					return "section section0";
				}).enter();
				const d = q.append("g").selectAll("rect").data(x).enter(), w = n.db.getLinks();
				if (d.append("rect").attr("id", function(l) {
					return l.id;
				}).attr("rx", 3).attr("ry", 3).attr("x", function(l) {
					return l.milestone ? O(l.startTime) + S + .5 * (O(l.endTime) - O(l.startTime)) - .5 * v : O(l.startTime) + S;
				}).attr("y", function(l, o) {
					return o = l.order, l.vert ? i.gridLineStartPadding : o * Y + F;
				}).attr("width", function(l) {
					return l.milestone ? v : l.vert ? .08 * v : O(l.renderEndTime || l.endTime) - O(l.startTime);
				}).attr("height", function(l) {
					return l.vert ? g.length * (i.barHeight + i.barGap) + i.barHeight * 2 : v;
				}).attr("transform-origin", function(l, o) {
					return o = l.order, (O(l.startTime) + S + .5 * (O(l.endTime) - O(l.startTime))).toString() + "px " + (o * Y + F + .5 * v).toString() + "px";
				}).attr("class", function(l) {
					const o = "task";
					let P = "";
					l.classes.length > 0 && (P = l.classes.join(" "));
					let z = 0;
					for (const [K, G$1] of E.entries()) l.type === G$1 && (z = K % i.numberSectionStyles);
					let R$2 = "";
					return l.active ? l.crit ? R$2 += " activeCrit" : R$2 = " active" : l.done ? l.crit ? R$2 = " doneCrit" : R$2 = " done" : l.crit && (R$2 += " crit"), R$2.length === 0 && (R$2 = " task"), l.milestone && (R$2 = " milestone " + R$2), l.vert && (R$2 = " vert " + R$2), R$2 += z, R$2 += " " + P, o + R$2;
				}), d.append("text").attr("id", function(l) {
					return l.id + "-text";
				}).text(function(l) {
					return l.task;
				}).attr("font-size", i.fontSize).attr("x", function(l) {
					let o = O(l.startTime), P = O(l.renderEndTime || l.endTime);
					if (l.milestone && (o += .5 * (O(l.endTime) - O(l.startTime)) - .5 * v, P = o + v), l.vert) return O(l.startTime) + S;
					const z = this.getBBox().width;
					return z > P - o ? P + z + 1.5 * i.leftPadding > u ? o + S - 5 : P + S + 5 : (P - o) / 2 + o + S;
				}).attr("y", function(l, o) {
					return l.vert ? i.gridLineStartPadding + g.length * (i.barHeight + i.barGap) + 60 : (o = l.order, o * Y + i.barHeight / 2 + (i.fontSize / 2 - 2) + F);
				}).attr("text-height", v).attr("class", function(l) {
					const o = O(l.startTime);
					let P = O(l.endTime);
					l.milestone && (P = o + v);
					const z = this.getBBox().width;
					let R$2 = "";
					l.classes.length > 0 && (R$2 = l.classes.join(" "));
					let K = 0;
					for (const [$, at] of E.entries()) l.type === at && (K = $ % i.numberSectionStyles);
					let G$1 = "";
					return l.active && (l.crit ? G$1 = "activeCritText" + K : G$1 = "activeText" + K), l.done ? l.crit ? G$1 = G$1 + " doneCritText" + K : G$1 = G$1 + " doneText" + K : l.crit && (G$1 = G$1 + " critText" + K), l.milestone && (G$1 += " milestoneText"), l.vert && (G$1 += " vertText"), z > P - o ? P + z + 1.5 * i.leftPadding > u ? R$2 + " taskTextOutsideLeft taskTextOutside" + K + " " + G$1 : R$2 + " taskTextOutsideRight taskTextOutside" + K + " " + G$1 + " width-" + z : R$2 + " taskText taskText" + K + " " + G$1 + " width-" + z;
				}), yt().securityLevel === "sandbox") {
					let l;
					l = gt("#i" + e);
					const o = l.nodes()[0].contentDocument;
					d.filter(function(P) {
						return w.has(P.id);
					}).each(function(P) {
						var z = o.querySelector("#" + P.id), R$2 = o.querySelector("#" + P.id + "-text");
						const K = z.parentNode;
						var G$1 = o.createElement("a");
						G$1.setAttribute("xlink:href", w.get(P.id)), G$1.setAttribute("target", "_top"), K.appendChild(G$1), G$1.appendChild(z), G$1.appendChild(R$2);
					});
				}
			}
			m(V, "drawRects");
			function W(x, Y, F, S, v, U, u, m$1) {
				if (u.length === 0 && m$1.length === 0) return;
				let T, d;
				for (const { startTime: z, endTime: R$2 } of U) (T === void 0 || z < T) && (T = z), (d === void 0 || R$2 > d) && (d = R$2);
				if (!T || !d) return;
				if (Iv(d).diff(Iv(T), "year") > 5) {
					R.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
					return;
				}
				const w = n.db.getDateFormat(), c = [];
				let l = null, o = Iv(T);
				for (; o.valueOf() <= d;) n.db.isInvalidDate(o, w, u, m$1) ? l ? l.end = o : l = {
					start: o,
					end: o
				} : l && (c.push(l), l = null), o = o.add(1, "d");
				q.append("g").selectAll("rect").data(c).enter().append("rect").attr("id", (z) => "exclude-" + z.start.format("YYYY-MM-DD")).attr("x", (z) => O(z.start.startOf("day")) + F).attr("y", i.gridLineStartPadding).attr("width", (z) => O(z.end.endOf("day")) - O(z.start.startOf("day"))).attr("height", v - Y - i.gridLineStartPadding).attr("transform-origin", function(z, R$2) {
					return (O(z.start) + F + .5 * (O(z.end) - O(z.start))).toString() + "px " + (R$2 * x + .5 * v).toString() + "px";
				}).attr("class", "exclude-range");
			}
			m(W, "drawExcludeDays");
			function Z(x, Y, F, S) {
				const v = n.db.getDateFormat(), U = n.db.getAxisFormat();
				let u;
				U ? u = U : v === "D" ? u = "%d" : u = i.axisFormat ?? "%Y-%m-%d";
				let m$1 = nn(O).tickSize(-S + Y + i.gridLineStartPadding).tickFormat(Kt(u));
				const d = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(n.db.getTickInterval() || i.tickInterval);
				if (d !== null) {
					const w = d[1], c = d[2], l = n.db.getWeekday() || i.weekday;
					switch (c) {
						case "millisecond":
							m$1.ticks(Yt.every(w));
							break;
						case "second":
							m$1.ticks(vt.every(w));
							break;
						case "minute":
							m$1.ticks(Wt.every(w));
							break;
						case "hour":
							m$1.ticks(Ot.every(w));
							break;
						case "day":
							m$1.ticks(Tt.every(w));
							break;
						case "week":
							m$1.ticks(Qe[l].every(w));
							break;
						case "month":
							m$1.ticks(Nt.every(w));
							break;
					}
				}
				if (q.append("g").attr("class", "grid").attr("transform", "translate(" + x + ", " + (S - 50) + ")").call(m$1).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), n.db.topAxisEnabled() || i.topAxis) {
					let w = rn(O).tickSize(-S + Y + i.gridLineStartPadding).tickFormat(Kt(u));
					if (d !== null) {
						const c = d[1], l = d[2], o = n.db.getWeekday() || i.weekday;
						switch (l) {
							case "millisecond":
								w.ticks(Yt.every(c));
								break;
							case "second":
								w.ticks(vt.every(c));
								break;
							case "minute":
								w.ticks(Wt.every(c));
								break;
							case "hour":
								w.ticks(Ot.every(c));
								break;
							case "day":
								w.ticks(Tt.every(c));
								break;
							case "week":
								w.ticks(Qe[o].every(c));
								break;
							case "month":
								w.ticks(Nt.every(c));
								break;
						}
					}
					q.append("g").attr("class", "grid").attr("transform", "translate(" + x + ", " + Y + ")").call(w).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
				}
			}
			m(Z, "makeGrid");
			function Q(x, Y) {
				let F = 0;
				const S = Object.keys(C).map((v) => [v, C[v]]);
				q.append("g").selectAll("text").data(S).enter().append(function(v) {
					const U = v[0].split(zi.lineBreakRegex), u = -(U.length - 1) / 2, m$1 = _.createElementNS("http://www.w3.org/2000/svg", "text");
					m$1.setAttribute("dy", u + "em");
					for (const [T, d] of U.entries()) {
						const w = _.createElementNS("http://www.w3.org/2000/svg", "tspan");
						w.setAttribute("alignment-baseline", "central"), w.setAttribute("x", "10"), T > 0 && w.setAttribute("dy", "1em"), w.textContent = d, m$1.appendChild(w);
					}
					return m$1;
				}).attr("x", 10).attr("y", function(v, U) {
					if (U > 0) for (let u = 0; u < U; u++) return F += S[U - 1][1], v[1] * x / 2 + F * x + Y;
					else return v[1] * x / 2 + Y;
				}).attr("font-size", i.sectionFontSize).attr("class", function(v) {
					for (const [U, u] of E.entries()) if (v[0] === u) return "sectionTitle sectionTitle" + U % i.numberSectionStyles;
					return "sectionTitle";
				});
			}
			m(Q, "vertLabels");
			function D(x, Y, F, S) {
				const v = n.db.getTodayMarker();
				if (v === "off") return;
				const U = q.append("g").attr("class", "today"), u = /* @__PURE__ */ new Date(), m$1 = U.append("line");
				m$1.attr("x1", O(u) + x).attr("x2", O(u) + x).attr("y1", i.titleTopMargin).attr("y2", S - i.titleTopMargin).attr("class", "today"), v !== "" && m$1.attr("style", v.replace(/,/g, ";"));
			}
			m(D, "drawToday");
			function H(x) {
				const Y = {}, F = [];
				for (let S = 0, v = x.length; S < v; ++S) Object.prototype.hasOwnProperty.call(Y, x[S]) || (Y[x[S]] = !0, F.push(x[S]));
				return F;
			}
			m(H, "checkUnique");
		}, "draw")
	},
	styles: /* @__PURE__ */ m((t$1) => `
  .mermaid-main-font {
        font-family: ${t$1.fontFamily};
  }

  .exclude-range {
    fill: ${t$1.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t$1.sectionBkgColor};
  }

  .section2 {
    fill: ${t$1.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t$1.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t$1.titleColor};
  }

  .sectionTitle1 {
    fill: ${t$1.titleColor};
  }

  .sectionTitle2 {
    fill: ${t$1.titleColor};
  }

  .sectionTitle3 {
    fill: ${t$1.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t$1.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t$1.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t$1.fontFamily};
    fill: ${t$1.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t$1.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t$1.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t$1.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t$1.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t$1.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t$1.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t$1.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t$1.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t$1.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t$1.taskBkgColor};
    stroke: ${t$1.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t$1.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t$1.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t$1.activeTaskBkgColor};
    stroke: ${t$1.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t$1.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t$1.doneTaskBorderColor};
    fill: ${t$1.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t$1.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t$1.critBorderColor};
    fill: ${t$1.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t$1.critBorderColor};
    fill: ${t$1.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t$1.critBorderColor};
    fill: ${t$1.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t$1.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t$1.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t$1.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t$1.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t$1.titleColor || t$1.textColor};
    font-family: ${t$1.fontFamily};
  }
`, "getStyles")
};
export { Gs as diagram };
