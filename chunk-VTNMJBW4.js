import {A as Ka, B as w0, K as co, da as M0, ha as T0, r as ou} from "./chunk-3R47PHPO.js";
import {Rc as D0} from "./chunk-6IVSCMHT.js";
import {a as it, b as ao, c as We, e as Qa, j as ds} from "./chunk-E4T36IQ3.js";
import {h as pt, j as lo, m as I0} from "./chunk-O3BOZ3M4.js";
import {$c as ls, A as e0, B as _t, Bb as $n, Bc as rs, Dd as x0, E as Vn, Ec as C0, Ed as us, Fc as S0, G as Js, Hb as nu, K as Rt, Kc as Te, Lb as pn, Lc as as, Mb as f0, Mc as mt, Oa as u0, Ob as Yi, P as ze, Pb as Un, Q as je, R as Xs, Rb as hn, S as r0, Ua as Ha, Va as Po, Vc as ai, Wa as d0, Wc as Oe, Xa as so, Xb as is, Ya as ro, Zb as Bt, _c as Ve, aa as a0, ca as Fi, cb as Ri, cd as cs, dc as Li, eb as m0, ed as li, hc as fn, ja as er, k as oo, kd as qa, ld as y0, ma as l0, na as es, nc as ns, oa as iu, pb as dt, ra as Wa, rb as Ee, rc as os, tc as ss, uc as Ga, vc as g0, wa as ts, wb as tr, wc as _0, xa as c0, xb as p0, xc as v0, y as Ys, ya as ut, yb as h0, yc as b0, zc as gn} from "./chunk-OFJ5SZPL.js";
import {$ as yt, $c as An, Aa as Ep, Ac as f, Ad as kt, Ae as Jo, B as Da, Bb as Bp, Bc as k, Be as i0, Ca as Oa, Cb as On, Cd as Zi, Ce as cn, Dd as Kp, De as Xo, E as gi, Fa as Zo, Fb as d, Fc as re, Ga as fe, Gb as nt, H as D, Ha as sn, Hc as z, He as un, I as yp, Ia as Q, Ib as tu, Ic as w, Id as no, Ig as za, J as Qo, Ja as Pp, Jb as Na, Jc as jp, Kb as Aa, Kc as zp, Ke as dn, La as Ei, Lb as Fa, Mb as Ie, N as xp, Nb as to, Nd as Qp, O as Ks, Oa as kp, Ob as Vp, P as Ip, Pa as de, Pc as Ra, Pd as Je, Pf as n0, Q as wp, Qc as La, R as Ea, Rb as an, Rc as Ba, Rd as Zp, Re as mn, Sa as ni, Se as Ni, T as pe, Tc as Nn, Te as Lt, Ua as Ye, Ub as ne, Uc as io, Va as I, Vc as Ct, W as Pa, Wa as Op, Wb as Qt, Wc as C, Xa as Np, Xc as X, Xd as Va, Yb as Zt, Yc as K, Yd as $a, Z as tt, Zb as Eo, Zd as Yp, _b as H, _d as Wt, a as B, aa as eu, ab as Ap, ad as Fn, ae as ot, b as J, ba as Mp, bd as Rn, ca as Tp, cb as Pn, ce as Jp, d as Ia, db as R, dd as Qi, e as wa, ea as Tt, eb as L, fd as Fe, g as Ma, gd as Ln, ha as Do, hb as oi, hd as Wp, he as Ua, i as ii, ic as $p, ig as o0, ja as _i, jb as kn, je as Xp, k as Xn, kb as Fp, l as _p, ld as $, m as To, ma as eo, mb as jt, mc as ri, md as Se, nb as rn, nc as b, nd as ae, ne as Ce, o as vp, oa as Ze, oc as Up, od as Hp, oe as t0, p as ue, pb as Ge, pc as Pi, pd as Ft, pe as st, pg as Ai, q as at, qb as ee, qc as vi, qe as q, rb as si, rc as bi, re as ye, s as bp, sc as zt, tb as Rp, te as Yo, u as Ta, ua as ka, uc as W, ud as Zs, ue as ja, v as Cp, vb as Lp, vc as ct, vd as Gp, ve as ki, we as vt, wg as s0, xc as qe, xe as Oi, y as Sp, yc as Ke, yd as Bn, ye as ln, z as he, za as Dp, zb as Qs, zc as h, zd as qp} from "./chunk-K3475DQT.js";
var Ya = wa( (ew, P0) => {
    function rr(n) {
        var s = 0;
        if (n >= 8)
            s = 1;
        else if (n <= -8)
            s = 0;
        else {
            for (var r = 0; r < 100; r++)
                s += Math.pow(n, 2 * r + 1) / ky(2 * r + 1);
            s *= Math.pow(Math.E, -.5 * Math.pow(n, 2)),
            s /= Math.sqrt(2 * Math.PI),
            s += .5
        }
        return s
    }
    function ky(n) {
        for (var s = 1, r = n; r > 1; r -= 2)
            s *= r;
        return s
    }
    function Oy(n, s, r, e, i, a) {
        var u = null
          , p = (i * r + Math.pow(e, 2) * r / 2 - Math.log(s / n)) / (e * Math.sqrt(r));
        return a === "call" ? u = n * rr(p) - s * Math.pow(Math.E, -1 * i * r) * rr(p - e * Math.sqrt(r)) : u = s * Math.pow(Math.E, -1 * i * r) * rr(e * Math.sqrt(r) - p) - n * rr(-p),
        u
    }
    function Ny(n, s, r, e, i) {
        var a = (i * r + Math.pow(e, 2) * r / 2 - Math.log(s / n)) / (e * Math.sqrt(r));
        return a
    }
    P0.exports = {
        blackScholes: Oy,
        stdNormCDF: rr,
        getW: Ny
    }
}
);
var O0 = wa( (tw, k0) => {
    var Ay = Ya();
    function Fy(n, s, r, e, i, a, u) {
        u = u || .1;
        for (var p = 0, g = 1 / 0, y = 0; y < 100; y++) {
            var O = Ay.blackScholes(s, r, e, u, i, a);
            if (n * 100 == Math.floor(O * 100))
                break;
            O > n ? (g = u,
            u = (u - p) / 2 + p) : (p = u,
            u = (g - u) / 2 + u,
            isFinite(u) || (u = p * 2))
        }
        return u
    }
    k0.exports = {
        getImpliedVolatility: Fy
    }
}
);
var F0 = wa( (iw, A0) => {
    var Bi = Ya();
    function Ja(n) {
        return Math.pow(Math.E, -1 * Math.pow(n, 2) / 2) / Math.sqrt(2 * Math.PI)
    }
    function Ry(n, s, r, e, i, a) {
        return a === "call" ? N0(n, s, r, e, i) : Ly(n, s, r, e, i)
    }
    function N0(n, s, r, e, i) {
        var a = Bi.getW(n, s, r, e, i)
          , u = null;
        return isFinite(a) ? u = Bi.stdNormCDF(a) : u = n > s ? 1 : 0,
        u
    }
    function Ly(n, s, r, e, i) {
        var a = N0(n, s, r, e, i) - 1;
        return a == -1 && s == n ? 0 : a
    }
    function By(n, s, r, e, i, a, u) {
        return u = u || 100,
        a === "call" ? Vy(n, s, r, e, i) / u : $y(n, s, r, e, i) / u
    }
    function Vy(n, s, r, e, i) {
        var a = Bi.getW(n, s, r, e, i);
        return isNaN(a) ? 0 : s * r * Math.pow(Math.E, -1 * i * r) * Bi.stdNormCDF(a - e * Math.sqrt(r))
    }
    function $y(n, s, r, e, i) {
        var a = Bi.getW(n, s, r, e, i);
        return isNaN(a) ? 0 : -1 * s * r * Math.pow(Math.E, -1 * i * r) * Bi.stdNormCDF(e * Math.sqrt(r) - a)
    }
    function Uy(n, s, r, e, i) {
        var a = Bi.getW(n, s, r, e, i);
        return isFinite(a) ? n * Math.sqrt(r) * Ja(a) / 100 : 0
    }
    function jy(n, s, r, e, i, a, u) {
        return u = u || 365,
        a === "call" ? zy(n, s, r, e, i) / u : Wy(n, s, r, e, i) / u
    }
    function zy(n, s, r, e, i) {
        var a = Bi.getW(n, s, r, e, i);
        return isFinite(a) ? -1 * e * n * Ja(a) / (2 * Math.sqrt(r)) - s * i * Math.pow(Math.E, -1 * i * r) * Bi.stdNormCDF(a - e * Math.sqrt(r)) : 0
    }
    function Wy(n, s, r, e, i) {
        var a = Bi.getW(n, s, r, e, i);
        return isFinite(a) ? -1 * e * n * Ja(a) / (2 * Math.sqrt(r)) + s * i * Math.pow(Math.E, -1 * i * r) * Bi.stdNormCDF(e * Math.sqrt(r) - a) : 0
    }
    function Hy(n, s, r, e, i) {
        var a = Bi.getW(n, s, r, e, i);
        return isFinite(a) ? Ja(a) / (n * e * Math.sqrt(r)) : 0
    }
    A0.exports = {
        getDelta: Ry,
        getVega: Uy,
        getGamma: Hy,
        getTheta: jy,
        getRho: By
    }
}
);
var J0 = wa( (_s, pr) => {
    (function() {
        var n, s = "4.17.21", r = 200, e = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", i = "Expected a function", a = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", p = 500, g = "__lodash_placeholder__", y = 1, O = 2, j = 4, Z = 1, xe = 2, _e = 1, Ne = 2, Re = 4, $e = 8, Xe = 16, Ue = 32, ft = 64, se = 128, E = 256, go = 512, ws = 30, V = "...", Nf = 800, Af = 16, Vu = 1, Ff = 2, Rf = 3, _o = 1 / 0, jn = 9007199254740991, Lf = 17976931348623157e292, kr = NaN, en = 4294967295, Bf = en - 1, Vf = en >>> 1, $f = [["ary", se], ["bind", _e], ["bindKey", Ne], ["curry", $e], ["curryRight", Xe], ["flip", go], ["partial", Ue], ["partialRight", ft], ["rearg", E]], Ao = "[object Arguments]", Or = "[object Array]", Uf = "[object AsyncFunction]", Ms = "[object Boolean]", Ts = "[object Date]", jf = "[object DOMException]", Nr = "[object Error]", Ar = "[object Function]", $u = "[object GeneratorFunction]", zi = "[object Map]", Ds = "[object Number]", zf = "[object Null]", Cn = "[object Object]", Uu = "[object Promise]", Wf = "[object Proxy]", Es = "[object RegExp]", Wi = "[object Set]", Ps = "[object String]", Fr = "[object Symbol]", Hf = "[object Undefined]", ks = "[object WeakMap]", Gf = "[object WeakSet]", Os = "[object ArrayBuffer]", Fo = "[object DataView]", Nl = "[object Float32Array]", Al = "[object Float64Array]", Fl = "[object Int8Array]", Rl = "[object Int16Array]", Ll = "[object Int32Array]", Bl = "[object Uint8Array]", Vl = "[object Uint8ClampedArray]", $l = "[object Uint16Array]", Ul = "[object Uint32Array]", qf = /\b__p \+= '';/g, Kf = /\b(__p \+=) '' \+/g, Qf = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ju = /&(?:amp|lt|gt|quot|#39);/g, zu = /[&<>"']/g, Zf = RegExp(ju.source), Yf = RegExp(zu.source), Jf = /<%-([\s\S]+?)%>/g, Xf = /<%([\s\S]+?)%>/g, Wu = /<%=([\s\S]+?)%>/g, eg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tg = /^\w*$/, ig = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, jl = /[\\^$.*+?()[\]{}|]/g, ng = RegExp(jl.source), zl = /^\s+/, og = /\s/, sg = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, rg = /\{\n\/\* \[wrapped with (.+)\] \*/, ag = /,? & /, lg = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, cg = /[()=,{}\[\]\/\s]/, ug = /\\(\\)?/g, dg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Hu = /\w*$/, mg = /^[-+]0x[0-9a-f]+$/i, pg = /^0b[01]+$/i, hg = /^\[object .+?Constructor\]$/, fg = /^0o[0-7]+$/i, gg = /^(?:0|[1-9]\d*)$/, _g = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Rr = /($^)/, vg = /['\n\r\u2028\u2029\\]/g, Lr = "\\ud800-\\udfff", bg = "\\u0300-\\u036f", Cg = "\\ufe20-\\ufe2f", Sg = "\\u20d0-\\u20ff", Gu = bg + Cg + Sg, qu = "\\u2700-\\u27bf", Ku = "a-z\\xdf-\\xf6\\xf8-\\xff", yg = "\\xac\\xb1\\xd7\\xf7", xg = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ig = "\\u2000-\\u206f", wg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Qu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Zu = "\\ufe0e\\ufe0f", Yu = yg + xg + Ig + wg, Wl = "['\u2019]", Mg = "[" + Lr + "]", Ju = "[" + Yu + "]", Br = "[" + Gu + "]", Xu = "\\d+", Tg = "[" + qu + "]", ed = "[" + Ku + "]", td = "[^" + Lr + Yu + Xu + qu + Ku + Qu + "]", Hl = "\\ud83c[\\udffb-\\udfff]", Dg = "(?:" + Br + "|" + Hl + ")", id = "[^" + Lr + "]", Gl = "(?:\\ud83c[\\udde6-\\uddff]){2}", ql = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ro = "[" + Qu + "]", nd = "\\u200d", od = "(?:" + ed + "|" + td + ")", Eg = "(?:" + Ro + "|" + td + ")", sd = "(?:" + Wl + "(?:d|ll|m|re|s|t|ve))?", rd = "(?:" + Wl + "(?:D|LL|M|RE|S|T|VE))?", ad = Dg + "?", ld = "[" + Zu + "]?", Pg = "(?:" + nd + "(?:" + [id, Gl, ql].join("|") + ")" + ld + ad + ")*", kg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Og = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", cd = ld + ad + Pg, Ng = "(?:" + [Tg, Gl, ql].join("|") + ")" + cd, Ag = "(?:" + [id + Br + "?", Br, Gl, ql, Mg].join("|") + ")", Fg = RegExp(Wl, "g"), Rg = RegExp(Br, "g"), Kl = RegExp(Hl + "(?=" + Hl + ")|" + Ag + cd, "g"), Lg = RegExp([Ro + "?" + ed + "+" + sd + "(?=" + [Ju, Ro, "$"].join("|") + ")", Eg + "+" + rd + "(?=" + [Ju, Ro + od, "$"].join("|") + ")", Ro + "?" + od + "+" + sd, Ro + "+" + rd, Og, kg, Xu, Ng].join("|"), "g"), Bg = RegExp("[" + nd + Lr + Gu + Zu + "]"), Vg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, $g = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ug = -1, gt = {};
        gt[Nl] = gt[Al] = gt[Fl] = gt[Rl] = gt[Ll] = gt[Bl] = gt[Vl] = gt[$l] = gt[Ul] = !0,
        gt[Ao] = gt[Or] = gt[Os] = gt[Ms] = gt[Fo] = gt[Ts] = gt[Nr] = gt[Ar] = gt[zi] = gt[Ds] = gt[Cn] = gt[Es] = gt[Wi] = gt[Ps] = gt[ks] = !1;
        var lt = {};
        lt[Ao] = lt[Or] = lt[Os] = lt[Fo] = lt[Ms] = lt[Ts] = lt[Nl] = lt[Al] = lt[Fl] = lt[Rl] = lt[Ll] = lt[zi] = lt[Ds] = lt[Cn] = lt[Es] = lt[Wi] = lt[Ps] = lt[Fr] = lt[Bl] = lt[Vl] = lt[$l] = lt[Ul] = !0,
        lt[Nr] = lt[Ar] = lt[ks] = !1;
        var jg = {
            \u00C0: "A",
            \u00C1: "A",
            \u00C2: "A",
            \u00C3: "A",
            \u00C4: "A",
            \u00C5: "A",
            \u00E0: "a",
            \u00E1: "a",
            \u00E2: "a",
            \u00E3: "a",
            \u00E4: "a",
            \u00E5: "a",
            \u00C7: "C",
            \u00E7: "c",
            \u00D0: "D",
            \u00F0: "d",
            \u00C8: "E",
            \u00C9: "E",
            \u00CA: "E",
            \u00CB: "E",
            \u00E8: "e",
            \u00E9: "e",
            \u00EA: "e",
            \u00EB: "e",
            \u00CC: "I",
            \u00CD: "I",
            \u00CE: "I",
            \u00CF: "I",
            \u00EC: "i",
            \u00ED: "i",
            \u00EE: "i",
            \u00EF: "i",
            \u00D1: "N",
            \u00F1: "n",
            \u00D2: "O",
            \u00D3: "O",
            \u00D4: "O",
            \u00D5: "O",
            \u00D6: "O",
            \u00D8: "O",
            \u00F2: "o",
            \u00F3: "o",
            \u00F4: "o",
            \u00F5: "o",
            \u00F6: "o",
            \u00F8: "o",
            \u00D9: "U",
            \u00DA: "U",
            \u00DB: "U",
            \u00DC: "U",
            \u00F9: "u",
            \u00FA: "u",
            \u00FB: "u",
            \u00FC: "u",
            \u00DD: "Y",
            \u00FD: "y",
            \u00FF: "y",
            \u00C6: "Ae",
            \u00E6: "ae",
            \u00DE: "Th",
            \u00FE: "th",
            \u00DF: "ss",
            \u0100: "A",
            \u0102: "A",
            \u0104: "A",
            \u0101: "a",
            \u0103: "a",
            \u0105: "a",
            \u0106: "C",
            \u0108: "C",
            \u010A: "C",
            \u010C: "C",
            \u0107: "c",
            \u0109: "c",
            \u010B: "c",
            \u010D: "c",
            \u010E: "D",
            \u0110: "D",
            \u010F: "d",
            \u0111: "d",
            \u0112: "E",
            \u0114: "E",
            \u0116: "E",
            \u0118: "E",
            \u011A: "E",
            \u0113: "e",
            \u0115: "e",
            \u0117: "e",
            \u0119: "e",
            \u011B: "e",
            \u011C: "G",
            \u011E: "G",
            \u0120: "G",
            \u0122: "G",
            \u011D: "g",
            \u011F: "g",
            \u0121: "g",
            \u0123: "g",
            \u0124: "H",
            \u0126: "H",
            \u0125: "h",
            \u0127: "h",
            \u0128: "I",
            \u012A: "I",
            \u012C: "I",
            \u012E: "I",
            \u0130: "I",
            \u0129: "i",
            \u012B: "i",
            \u012D: "i",
            \u012F: "i",
            \u0131: "i",
            \u0134: "J",
            \u0135: "j",
            \u0136: "K",
            \u0137: "k",
            \u0138: "k",
            \u0139: "L",
            \u013B: "L",
            \u013D: "L",
            \u013F: "L",
            \u0141: "L",
            \u013A: "l",
            \u013C: "l",
            \u013E: "l",
            \u0140: "l",
            \u0142: "l",
            \u0143: "N",
            \u0145: "N",
            \u0147: "N",
            \u014A: "N",
            \u0144: "n",
            \u0146: "n",
            \u0148: "n",
            \u014B: "n",
            \u014C: "O",
            \u014E: "O",
            \u0150: "O",
            \u014D: "o",
            \u014F: "o",
            \u0151: "o",
            \u0154: "R",
            \u0156: "R",
            \u0158: "R",
            \u0155: "r",
            \u0157: "r",
            \u0159: "r",
            \u015A: "S",
            \u015C: "S",
            \u015E: "S",
            \u0160: "S",
            \u015B: "s",
            \u015D: "s",
            \u015F: "s",
            \u0161: "s",
            \u0162: "T",
            \u0164: "T",
            \u0166: "T",
            \u0163: "t",
            \u0165: "t",
            \u0167: "t",
            \u0168: "U",
            \u016A: "U",
            \u016C: "U",
            \u016E: "U",
            \u0170: "U",
            \u0172: "U",
            \u0169: "u",
            \u016B: "u",
            \u016D: "u",
            \u016F: "u",
            \u0171: "u",
            \u0173: "u",
            \u0174: "W",
            \u0175: "w",
            \u0176: "Y",
            \u0177: "y",
            \u0178: "Y",
            \u0179: "Z",
            \u017B: "Z",
            \u017D: "Z",
            \u017A: "z",
            \u017C: "z",
            \u017E: "z",
            \u0132: "IJ",
            \u0133: "ij",
            \u0152: "Oe",
            \u0153: "oe",
            \u0149: "'n",
            \u017F: "s"
        }
          , zg = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
          , Wg = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }
          , Hg = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , Gg = parseFloat
          , qg = parseInt
          , ud = typeof global == "object" && global && global.Object === Object && global
          , Kg = typeof self == "object" && self && self.Object === Object && self
          , Nt = ud || Kg || Function("return this")()
          , Ql = typeof _s == "object" && _s && !_s.nodeType && _s
          , vo = Ql && typeof pr == "object" && pr && !pr.nodeType && pr
          , dd = vo && vo.exports === Ql
          , Zl = dd && ud.process
          , Si = function() {
            try {
                var M = vo && vo.require && vo.require("util").types;
                return M || Zl && Zl.binding && Zl.binding("util")
            } catch {}
        }()
          , md = Si && Si.isArrayBuffer
          , pd = Si && Si.isDate
          , hd = Si && Si.isMap
          , fd = Si && Si.isRegExp
          , gd = Si && Si.isSet
          , _d = Si && Si.isTypedArray;
        function ui(M, N, P) {
            switch (P.length) {
            case 0:
                return M.call(N);
            case 1:
                return M.call(N, P[0]);
            case 2:
                return M.call(N, P[0], P[1]);
            case 3:
                return M.call(N, P[0], P[1], P[2])
            }
            return M.apply(N, P)
        }
        function Qg(M, N, P, oe) {
            for (var we = -1, He = M == null ? 0 : M.length; ++we < He; ) {
                var Et = M[we];
                N(oe, Et, P(Et), M)
            }
            return oe
        }
        function yi(M, N) {
            for (var P = -1, oe = M == null ? 0 : M.length; ++P < oe && N(M[P], P, M) !== !1; )
                ;
            return M
        }
        function Zg(M, N) {
            for (var P = M == null ? 0 : M.length; P-- && N(M[P], P, M) !== !1; )
                ;
            return M
        }
        function vd(M, N) {
            for (var P = -1, oe = M == null ? 0 : M.length; ++P < oe; )
                if (!N(M[P], P, M))
                    return !1;
            return !0
        }
        function zn(M, N) {
            for (var P = -1, oe = M == null ? 0 : M.length, we = 0, He = []; ++P < oe; ) {
                var Et = M[P];
                N(Et, P, M) && (He[we++] = Et)
            }
            return He
        }
        function Vr(M, N) {
            var P = M == null ? 0 : M.length;
            return !!P && Lo(M, N, 0) > -1
        }
        function Yl(M, N, P) {
            for (var oe = -1, we = M == null ? 0 : M.length; ++oe < we; )
                if (P(N, M[oe]))
                    return !0;
            return !1
        }
        function bt(M, N) {
            for (var P = -1, oe = M == null ? 0 : M.length, we = Array(oe); ++P < oe; )
                we[P] = N(M[P], P, M);
            return we
        }
        function Wn(M, N) {
            for (var P = -1, oe = N.length, we = M.length; ++P < oe; )
                M[we + P] = N[P];
            return M
        }
        function Jl(M, N, P, oe) {
            var we = -1
              , He = M == null ? 0 : M.length;
            for (oe && He && (P = M[++we]); ++we < He; )
                P = N(P, M[we], we, M);
            return P
        }
        function Yg(M, N, P, oe) {
            var we = M == null ? 0 : M.length;
            for (oe && we && (P = M[--we]); we--; )
                P = N(P, M[we], we, M);
            return P
        }
        function Xl(M, N) {
            for (var P = -1, oe = M == null ? 0 : M.length; ++P < oe; )
                if (N(M[P], P, M))
                    return !0;
            return !1
        }
        var Jg = ec("length");
        function Xg(M) {
            return M.split("")
        }
        function e_(M) {
            return M.match(lg) || []
        }
        function bd(M, N, P) {
            var oe;
            return P(M, function(we, He, Et) {
                if (N(we, He, Et))
                    return oe = He,
                    !1
            }),
            oe
        }
        function $r(M, N, P, oe) {
            for (var we = M.length, He = P + (oe ? 1 : -1); oe ? He-- : ++He < we; )
                if (N(M[He], He, M))
                    return He;
            return -1
        }
        function Lo(M, N, P) {
            return N === N ? m_(M, N, P) : $r(M, Cd, P)
        }
        function t_(M, N, P, oe) {
            for (var we = P - 1, He = M.length; ++we < He; )
                if (oe(M[we], N))
                    return we;
            return -1
        }
        function Cd(M) {
            return M !== M
        }
        function Sd(M, N) {
            var P = M == null ? 0 : M.length;
            return P ? ic(M, N) / P : kr
        }
        function ec(M) {
            return function(N) {
                return N == null ? n : N[M]
            }
        }
        function tc(M) {
            return function(N) {
                return M == null ? n : M[N]
            }
        }
        function yd(M, N, P, oe, we) {
            return we(M, function(He, Et, rt) {
                P = oe ? (oe = !1,
                He) : N(P, He, Et, rt)
            }),
            P
        }
        function i_(M, N) {
            var P = M.length;
            for (M.sort(N); P--; )
                M[P] = M[P].value;
            return M
        }
        function ic(M, N) {
            for (var P, oe = -1, we = M.length; ++oe < we; ) {
                var He = N(M[oe]);
                He !== n && (P = P === n ? He : P + He)
            }
            return P
        }
        function nc(M, N) {
            for (var P = -1, oe = Array(M); ++P < M; )
                oe[P] = N(P);
            return oe
        }
        function n_(M, N) {
            return bt(N, function(P) {
                return [P, M[P]]
            })
        }
        function xd(M) {
            return M && M.slice(0, Td(M) + 1).replace(zl, "")
        }
        function di(M) {
            return function(N) {
                return M(N)
            }
        }
        function oc(M, N) {
            return bt(N, function(P) {
                return M[P]
            })
        }
        function Ns(M, N) {
            return M.has(N)
        }
        function Id(M, N) {
            for (var P = -1, oe = M.length; ++P < oe && Lo(N, M[P], 0) > -1; )
                ;
            return P
        }
        function wd(M, N) {
            for (var P = M.length; P-- && Lo(N, M[P], 0) > -1; )
                ;
            return P
        }
        function o_(M, N) {
            for (var P = M.length, oe = 0; P--; )
                M[P] === N && ++oe;
            return oe
        }
        var s_ = tc(jg)
          , r_ = tc(zg);
        function a_(M) {
            return "\\" + Hg[M]
        }
        function l_(M, N) {
            return M == null ? n : M[N]
        }
        function Bo(M) {
            return Bg.test(M)
        }
        function c_(M) {
            return Vg.test(M)
        }
        function u_(M) {
            for (var N, P = []; !(N = M.next()).done; )
                P.push(N.value);
            return P
        }
        function sc(M) {
            var N = -1
              , P = Array(M.size);
            return M.forEach(function(oe, we) {
                P[++N] = [we, oe]
            }),
            P
        }
        function Md(M, N) {
            return function(P) {
                return M(N(P))
            }
        }
        function Hn(M, N) {
            for (var P = -1, oe = M.length, we = 0, He = []; ++P < oe; ) {
                var Et = M[P];
                (Et === N || Et === g) && (M[P] = g,
                He[we++] = P)
            }
            return He
        }
        function Ur(M) {
            var N = -1
              , P = Array(M.size);
            return M.forEach(function(oe) {
                P[++N] = oe
            }),
            P
        }
        function d_(M) {
            var N = -1
              , P = Array(M.size);
            return M.forEach(function(oe) {
                P[++N] = [oe, oe]
            }),
            P
        }
        function m_(M, N, P) {
            for (var oe = P - 1, we = M.length; ++oe < we; )
                if (M[oe] === N)
                    return oe;
            return -1
        }
        function p_(M, N, P) {
            for (var oe = P + 1; oe--; )
                if (M[oe] === N)
                    return oe;
            return oe
        }
        function Vo(M) {
            return Bo(M) ? f_(M) : Jg(M)
        }
        function Hi(M) {
            return Bo(M) ? g_(M) : Xg(M)
        }
        function Td(M) {
            for (var N = M.length; N-- && og.test(M.charAt(N)); )
                ;
            return N
        }
        var h_ = tc(Wg);
        function f_(M) {
            for (var N = Kl.lastIndex = 0; Kl.test(M); )
                ++N;
            return N
        }
        function g_(M) {
            return M.match(Kl) || []
        }
        function __(M) {
            return M.match(Lg) || []
        }
        var v_ = function M(N) {
            N = N == null ? Nt : Gn.defaults(Nt.Object(), N, Gn.pick(Nt, $g));
            var P = N.Array
              , oe = N.Date
              , we = N.Error
              , He = N.Function
              , Et = N.Math
              , rt = N.Object
              , rc = N.RegExp
              , b_ = N.String
              , xi = N.TypeError
              , jr = P.prototype
              , C_ = He.prototype
              , $o = rt.prototype
              , zr = N["__core-js_shared__"]
              , Wr = C_.toString
              , et = $o.hasOwnProperty
              , S_ = 0
              , Dd = function() {
                var t = /[^.]+$/.exec(zr && zr.keys && zr.keys.IE_PROTO || "");
                return t ? "Symbol(src)_1." + t : ""
            }()
              , Hr = $o.toString
              , y_ = Wr.call(rt)
              , x_ = Nt._
              , I_ = rc("^" + Wr.call(et).replace(jl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
              , Gr = dd ? N.Buffer : n
              , qn = N.Symbol
              , qr = N.Uint8Array
              , Ed = Gr ? Gr.allocUnsafe : n
              , Kr = Md(rt.getPrototypeOf, rt)
              , Pd = rt.create
              , kd = $o.propertyIsEnumerable
              , Qr = jr.splice
              , Od = qn ? qn.isConcatSpreadable : n
              , As = qn ? qn.iterator : n
              , bo = qn ? qn.toStringTag : n
              , Zr = function() {
                try {
                    var t = Io(rt, "defineProperty");
                    return t({}, "", {}),
                    t
                } catch {}
            }()
              , w_ = N.clearTimeout !== Nt.clearTimeout && N.clearTimeout
              , M_ = oe && oe.now !== Nt.Date.now && oe.now
              , T_ = N.setTimeout !== Nt.setTimeout && N.setTimeout
              , Yr = Et.ceil
              , Jr = Et.floor
              , ac = rt.getOwnPropertySymbols
              , D_ = Gr ? Gr.isBuffer : n
              , Nd = N.isFinite
              , E_ = jr.join
              , P_ = Md(rt.keys, rt)
              , Pt = Et.max
              , $t = Et.min
              , k_ = oe.now
              , O_ = N.parseInt
              , Ad = Et.random
              , N_ = jr.reverse
              , lc = Io(N, "DataView")
              , Fs = Io(N, "Map")
              , cc = Io(N, "Promise")
              , Uo = Io(N, "Set")
              , Rs = Io(N, "WeakMap")
              , Ls = Io(rt, "create")
              , Xr = Rs && new Rs
              , jo = {}
              , A_ = wo(lc)
              , F_ = wo(Fs)
              , R_ = wo(cc)
              , L_ = wo(Uo)
              , B_ = wo(Rs)
              , ea = qn ? qn.prototype : n
              , Bs = ea ? ea.valueOf : n
              , Fd = ea ? ea.toString : n;
            function _(t) {
                if (xt(t) && !Me(t) && !(t instanceof Le)) {
                    if (t instanceof Ii)
                        return t;
                    if (et.call(t, "__wrapped__"))
                        return Rm(t)
                }
                return new Ii(t)
            }
            var zo = function() {
                function t() {}
                return function(o) {
                    if (!St(o))
                        return {};
                    if (Pd)
                        return Pd(o);
                    t.prototype = o;
                    var l = new t;
                    return t.prototype = n,
                    l
                }
            }();
            function ta() {}
            function Ii(t, o) {
                this.__wrapped__ = t,
                this.__actions__ = [],
                this.__chain__ = !!o,
                this.__index__ = 0,
                this.__values__ = n
            }
            _.templateSettings = {
                escape: Jf,
                evaluate: Xf,
                interpolate: Wu,
                variable: "",
                imports: {
                    _
                }
            },
            _.prototype = ta.prototype,
            _.prototype.constructor = _,
            Ii.prototype = zo(ta.prototype),
            Ii.prototype.constructor = Ii;
            function Le(t) {
                this.__wrapped__ = t,
                this.__actions__ = [],
                this.__dir__ = 1,
                this.__filtered__ = !1,
                this.__iteratees__ = [],
                this.__takeCount__ = en,
                this.__views__ = []
            }
            function V_() {
                var t = new Le(this.__wrapped__);
                return t.__actions__ = Jt(this.__actions__),
                t.__dir__ = this.__dir__,
                t.__filtered__ = this.__filtered__,
                t.__iteratees__ = Jt(this.__iteratees__),
                t.__takeCount__ = this.__takeCount__,
                t.__views__ = Jt(this.__views__),
                t
            }
            function $_() {
                if (this.__filtered__) {
                    var t = new Le(this);
                    t.__dir__ = -1,
                    t.__filtered__ = !0
                } else
                    t = this.clone(),
                    t.__dir__ *= -1;
                return t
            }
            function U_() {
                var t = this.__wrapped__.value()
                  , o = this.__dir__
                  , l = Me(t)
                  , c = o < 0
                  , m = l ? t.length : 0
                  , v = Xv(0, m, this.__views__)
                  , S = v.start
                  , x = v.end
                  , T = x - S
                  , A = c ? x : S - 1
                  , F = this.__iteratees__
                  , U = F.length
                  , Y = 0
                  , ce = $t(T, this.__takeCount__);
                if (!l || !c && m == T && ce == T)
                    return sm(t, this.__actions__);
                var ve = [];
                e: for (; T-- && Y < ce; ) {
                    A += o;
                    for (var Pe = -1, be = t[A]; ++Pe < U; ) {
                        var Ae = F[Pe]
                          , Be = Ae.iteratee
                          , hi = Ae.type
                          , Kt = Be(be);
                        if (hi == Ff)
                            be = Kt;
                        else if (!Kt) {
                            if (hi == Vu)
                                continue e;
                            break e
                        }
                    }
                    ve[Y++] = be
                }
                return ve
            }
            Le.prototype = zo(ta.prototype),
            Le.prototype.constructor = Le;
            function Co(t) {
                var o = -1
                  , l = t == null ? 0 : t.length;
                for (this.clear(); ++o < l; ) {
                    var c = t[o];
                    this.set(c[0], c[1])
                }
            }
            function j_() {
                this.__data__ = Ls ? Ls(null) : {},
                this.size = 0
            }
            function z_(t) {
                var o = this.has(t) && delete this.__data__[t];
                return this.size -= o ? 1 : 0,
                o
            }
            function W_(t) {
                var o = this.__data__;
                if (Ls) {
                    var l = o[t];
                    return l === u ? n : l
                }
                return et.call(o, t) ? o[t] : n
            }
            function H_(t) {
                var o = this.__data__;
                return Ls ? o[t] !== n : et.call(o, t)
            }
            function G_(t, o) {
                var l = this.__data__;
                return this.size += this.has(t) ? 0 : 1,
                l[t] = Ls && o === n ? u : o,
                this
            }
            Co.prototype.clear = j_,
            Co.prototype.delete = z_,
            Co.prototype.get = W_,
            Co.prototype.has = H_,
            Co.prototype.set = G_;
            function Sn(t) {
                var o = -1
                  , l = t == null ? 0 : t.length;
                for (this.clear(); ++o < l; ) {
                    var c = t[o];
                    this.set(c[0], c[1])
                }
            }
            function q_() {
                this.__data__ = [],
                this.size = 0
            }
            function K_(t) {
                var o = this.__data__
                  , l = ia(o, t);
                if (l < 0)
                    return !1;
                var c = o.length - 1;
                return l == c ? o.pop() : Qr.call(o, l, 1),
                --this.size,
                !0
            }
            function Q_(t) {
                var o = this.__data__
                  , l = ia(o, t);
                return l < 0 ? n : o[l][1]
            }
            function Z_(t) {
                return ia(this.__data__, t) > -1
            }
            function Y_(t, o) {
                var l = this.__data__
                  , c = ia(l, t);
                return c < 0 ? (++this.size,
                l.push([t, o])) : l[c][1] = o,
                this
            }
            Sn.prototype.clear = q_,
            Sn.prototype.delete = K_,
            Sn.prototype.get = Q_,
            Sn.prototype.has = Z_,
            Sn.prototype.set = Y_;
            function yn(t) {
                var o = -1
                  , l = t == null ? 0 : t.length;
                for (this.clear(); ++o < l; ) {
                    var c = t[o];
                    this.set(c[0], c[1])
                }
            }
            function J_() {
                this.size = 0,
                this.__data__ = {
                    hash: new Co,
                    map: new (Fs || Sn),
                    string: new Co
                }
            }
            function X_(t) {
                var o = ha(this, t).delete(t);
                return this.size -= o ? 1 : 0,
                o
            }
            function ev(t) {
                return ha(this, t).get(t)
            }
            function tv(t) {
                return ha(this, t).has(t)
            }
            function iv(t, o) {
                var l = ha(this, t)
                  , c = l.size;
                return l.set(t, o),
                this.size += l.size == c ? 0 : 1,
                this
            }
            yn.prototype.clear = J_,
            yn.prototype.delete = X_,
            yn.prototype.get = ev,
            yn.prototype.has = tv,
            yn.prototype.set = iv;
            function So(t) {
                var o = -1
                  , l = t == null ? 0 : t.length;
                for (this.__data__ = new yn; ++o < l; )
                    this.add(t[o])
            }
            function nv(t) {
                return this.__data__.set(t, u),
                this
            }
            function ov(t) {
                return this.__data__.has(t)
            }
            So.prototype.add = So.prototype.push = nv,
            So.prototype.has = ov;
            function Gi(t) {
                var o = this.__data__ = new Sn(t);
                this.size = o.size
            }
            function sv() {
                this.__data__ = new Sn,
                this.size = 0
            }
            function rv(t) {
                var o = this.__data__
                  , l = o.delete(t);
                return this.size = o.size,
                l
            }
            function av(t) {
                return this.__data__.get(t)
            }
            function lv(t) {
                return this.__data__.has(t)
            }
            function cv(t, o) {
                var l = this.__data__;
                if (l instanceof Sn) {
                    var c = l.__data__;
                    if (!Fs || c.length < r - 1)
                        return c.push([t, o]),
                        this.size = ++l.size,
                        this;
                    l = this.__data__ = new yn(c)
                }
                return l.set(t, o),
                this.size = l.size,
                this
            }
            Gi.prototype.clear = sv,
            Gi.prototype.delete = rv,
            Gi.prototype.get = av,
            Gi.prototype.has = lv,
            Gi.prototype.set = cv;
            function Rd(t, o) {
                var l = Me(t)
                  , c = !l && Mo(t)
                  , m = !l && !c && Jn(t)
                  , v = !l && !c && !m && qo(t)
                  , S = l || c || m || v
                  , x = S ? nc(t.length, b_) : []
                  , T = x.length;
                for (var A in t)
                    (o || et.call(t, A)) && !(S && (A == "length" || m && (A == "offset" || A == "parent") || v && (A == "buffer" || A == "byteLength" || A == "byteOffset") || Mn(A, T))) && x.push(A);
                return x
            }
            function Ld(t) {
                var o = t.length;
                return o ? t[Cc(0, o - 1)] : n
            }
            function uv(t, o) {
                return fa(Jt(t), yo(o, 0, t.length))
            }
            function dv(t) {
                return fa(Jt(t))
            }
            function uc(t, o, l) {
                (l !== n && !qi(t[o], l) || l === n && !(o in t)) && xn(t, o, l)
            }
            function Vs(t, o, l) {
                var c = t[o];
                (!(et.call(t, o) && qi(c, l)) || l === n && !(o in t)) && xn(t, o, l)
            }
            function ia(t, o) {
                for (var l = t.length; l--; )
                    if (qi(t[l][0], o))
                        return l;
                return -1
            }
            function mv(t, o, l, c) {
                return Kn(t, function(m, v, S) {
                    o(c, m, l(m), S)
                }),
                c
            }
            function Bd(t, o) {
                return t && nn(o, At(o), t)
            }
            function pv(t, o) {
                return t && nn(o, ei(o), t)
            }
            function xn(t, o, l) {
                o == "__proto__" && Zr ? Zr(t, o, {
                    configurable: !0,
                    enumerable: !0,
                    value: l,
                    writable: !0
                }) : t[o] = l
            }
            function dc(t, o) {
                for (var l = -1, c = o.length, m = P(c), v = t == null; ++l < c; )
                    m[l] = v ? n : Hc(t, o[l]);
                return m
            }
            function yo(t, o, l) {
                return t === t && (l !== n && (t = t <= l ? t : l),
                o !== n && (t = t >= o ? t : o)),
                t
            }
            function wi(t, o, l, c, m, v) {
                var S, x = o & y, T = o & O, A = o & j;
                if (l && (S = m ? l(t, c, m, v) : l(t)),
                S !== n)
                    return S;
                if (!St(t))
                    return t;
                var F = Me(t);
                if (F) {
                    if (S = t6(t),
                    !x)
                        return Jt(t, S)
                } else {
                    var U = Ut(t)
                      , Y = U == Ar || U == $u;
                    if (Jn(t))
                        return lm(t, x);
                    if (U == Cn || U == Ao || Y && !m) {
                        if (S = T || Y ? {} : Tm(t),
                        !x)
                            return T ? Wv(t, pv(S, t)) : zv(t, Bd(S, t))
                    } else {
                        if (!lt[U])
                            return m ? t : {};
                        S = i6(t, U, x)
                    }
                }
                v || (v = new Gi);
                var ce = v.get(t);
                if (ce)
                    return ce;
                v.set(t, S),
                ip(t) ? t.forEach(function(be) {
                    S.add(wi(be, o, l, be, t, v))
                }) : ep(t) && t.forEach(function(be, Ae) {
                    S.set(Ae, wi(be, o, l, Ae, t, v))
                });
                var ve = A ? T ? kc : Pc : T ? ei : At
                  , Pe = F ? n : ve(t);
                return yi(Pe || t, function(be, Ae) {
                    Pe && (Ae = be,
                    be = t[Ae]),
                    Vs(S, Ae, wi(be, o, l, Ae, t, v))
                }),
                S
            }
            function hv(t) {
                var o = At(t);
                return function(l) {
                    return Vd(l, t, o)
                }
            }
            function Vd(t, o, l) {
                var c = l.length;
                if (t == null)
                    return !c;
                for (t = rt(t); c--; ) {
                    var m = l[c]
                      , v = o[m]
                      , S = t[m];
                    if (S === n && !(m in t) || !v(S))
                        return !1
                }
                return !0
            }
            function $d(t, o, l) {
                if (typeof t != "function")
                    throw new xi(i);
                return Gs(function() {
                    t.apply(n, l)
                }, o)
            }
            function $s(t, o, l, c) {
                var m = -1
                  , v = Vr
                  , S = !0
                  , x = t.length
                  , T = []
                  , A = o.length;
                if (!x)
                    return T;
                l && (o = bt(o, di(l))),
                c ? (v = Yl,
                S = !1) : o.length >= r && (v = Ns,
                S = !1,
                o = new So(o));
                e: for (; ++m < x; ) {
                    var F = t[m]
                      , U = l == null ? F : l(F);
                    if (F = c || F !== 0 ? F : 0,
                    S && U === U) {
                        for (var Y = A; Y--; )
                            if (o[Y] === U)
                                continue e;
                        T.push(F)
                    } else
                        v(o, U, c) || T.push(F)
                }
                return T
            }
            var Kn = pm(tn)
              , Ud = pm(pc, !0);
            function fv(t, o) {
                var l = !0;
                return Kn(t, function(c, m, v) {
                    return l = !!o(c, m, v),
                    l
                }),
                l
            }
            function na(t, o, l) {
                for (var c = -1, m = t.length; ++c < m; ) {
                    var v = t[c]
                      , S = o(v);
                    if (S != null && (x === n ? S === S && !pi(S) : l(S, x)))
                        var x = S
                          , T = v
                }
                return T
            }
            function gv(t, o, l, c) {
                var m = t.length;
                for (l = De(l),
                l < 0 && (l = -l > m ? 0 : m + l),
                c = c === n || c > m ? m : De(c),
                c < 0 && (c += m),
                c = l > c ? 0 : op(c); l < c; )
                    t[l++] = o;
                return t
            }
            function jd(t, o) {
                var l = [];
                return Kn(t, function(c, m, v) {
                    o(c, m, v) && l.push(c)
                }),
                l
            }
            function Vt(t, o, l, c, m) {
                var v = -1
                  , S = t.length;
                for (l || (l = o6),
                m || (m = []); ++v < S; ) {
                    var x = t[v];
                    o > 0 && l(x) ? o > 1 ? Vt(x, o - 1, l, c, m) : Wn(m, x) : c || (m[m.length] = x)
                }
                return m
            }
            var mc = hm()
              , zd = hm(!0);
            function tn(t, o) {
                return t && mc(t, o, At)
            }
            function pc(t, o) {
                return t && zd(t, o, At)
            }
            function oa(t, o) {
                return zn(o, function(l) {
                    return Tn(t[l])
                })
            }
            function xo(t, o) {
                o = Zn(o, t);
                for (var l = 0, c = o.length; t != null && l < c; )
                    t = t[on(o[l++])];
                return l && l == c ? t : n
            }
            function Wd(t, o, l) {
                var c = o(t);
                return Me(t) ? c : Wn(c, l(t))
            }
            function Gt(t) {
                return t == null ? t === n ? Hf : zf : bo && bo in rt(t) ? Jv(t) : d6(t)
            }
            function hc(t, o) {
                return t > o
            }
            function _v(t, o) {
                return t != null && et.call(t, o)
            }
            function vv(t, o) {
                return t != null && o in rt(t)
            }
            function bv(t, o, l) {
                return t >= $t(o, l) && t < Pt(o, l)
            }
            function fc(t, o, l) {
                for (var c = l ? Yl : Vr, m = t[0].length, v = t.length, S = v, x = P(v), T = 1 / 0, A = []; S--; ) {
                    var F = t[S];
                    S && o && (F = bt(F, di(o))),
                    T = $t(F.length, T),
                    x[S] = !l && (o || m >= 120 && F.length >= 120) ? new So(S && F) : n
                }
                F = t[0];
                var U = -1
                  , Y = x[0];
                e: for (; ++U < m && A.length < T; ) {
                    var ce = F[U]
                      , ve = o ? o(ce) : ce;
                    if (ce = l || ce !== 0 ? ce : 0,
                    !(Y ? Ns(Y, ve) : c(A, ve, l))) {
                        for (S = v; --S; ) {
                            var Pe = x[S];
                            if (!(Pe ? Ns(Pe, ve) : c(t[S], ve, l)))
                                continue e
                        }
                        Y && Y.push(ve),
                        A.push(ce)
                    }
                }
                return A
            }
            function Cv(t, o, l, c) {
                return tn(t, function(m, v, S) {
                    o(c, l(m), v, S)
                }),
                c
            }
            function Us(t, o, l) {
                o = Zn(o, t),
                t = km(t, o);
                var c = t == null ? t : t[on(Ti(o))];
                return c == null ? n : ui(c, t, l)
            }
            function Hd(t) {
                return xt(t) && Gt(t) == Ao
            }
            function Sv(t) {
                return xt(t) && Gt(t) == Os
            }
            function yv(t) {
                return xt(t) && Gt(t) == Ts
            }
            function js(t, o, l, c, m) {
                return t === o ? !0 : t == null || o == null || !xt(t) && !xt(o) ? t !== t && o !== o : xv(t, o, l, c, js, m)
            }
            function xv(t, o, l, c, m, v) {
                var S = Me(t)
                  , x = Me(o)
                  , T = S ? Or : Ut(t)
                  , A = x ? Or : Ut(o);
                T = T == Ao ? Cn : T,
                A = A == Ao ? Cn : A;
                var F = T == Cn
                  , U = A == Cn
                  , Y = T == A;
                if (Y && Jn(t)) {
                    if (!Jn(o))
                        return !1;
                    S = !0,
                    F = !1
                }
                if (Y && !F)
                    return v || (v = new Gi),
                    S || qo(t) ? Im(t, o, l, c, m, v) : Zv(t, o, T, l, c, m, v);
                if (!(l & Z)) {
                    var ce = F && et.call(t, "__wrapped__")
                      , ve = U && et.call(o, "__wrapped__");
                    if (ce || ve) {
                        var Pe = ce ? t.value() : t
                          , be = ve ? o.value() : o;
                        return v || (v = new Gi),
                        m(Pe, be, l, c, v)
                    }
                }
                return Y ? (v || (v = new Gi),
                Yv(t, o, l, c, m, v)) : !1
            }
            function Iv(t) {
                return xt(t) && Ut(t) == zi
            }
            function gc(t, o, l, c) {
                var m = l.length
                  , v = m
                  , S = !c;
                if (t == null)
                    return !v;
                for (t = rt(t); m--; ) {
                    var x = l[m];
                    if (S && x[2] ? x[1] !== t[x[0]] : !(x[0]in t))
                        return !1
                }
                for (; ++m < v; ) {
                    x = l[m];
                    var T = x[0]
                      , A = t[T]
                      , F = x[1];
                    if (S && x[2]) {
                        if (A === n && !(T in t))
                            return !1
                    } else {
                        var U = new Gi;
                        if (c)
                            var Y = c(A, F, T, t, o, U);
                        if (!(Y === n ? js(F, A, Z | xe, c, U) : Y))
                            return !1
                    }
                }
                return !0
            }
            function Gd(t) {
                if (!St(t) || r6(t))
                    return !1;
                var o = Tn(t) ? I_ : hg;
                return o.test(wo(t))
            }
            function wv(t) {
                return xt(t) && Gt(t) == Es
            }
            function Mv(t) {
                return xt(t) && Ut(t) == Wi
            }
            function Tv(t) {
                return xt(t) && Sa(t.length) && !!gt[Gt(t)]
            }
            function qd(t) {
                return typeof t == "function" ? t : t == null ? ti : typeof t == "object" ? Me(t) ? Zd(t[0], t[1]) : Qd(t) : fp(t)
            }
            function _c(t) {
                if (!Hs(t))
                    return P_(t);
                var o = [];
                for (var l in rt(t))
                    et.call(t, l) && l != "constructor" && o.push(l);
                return o
            }
            function Dv(t) {
                if (!St(t))
                    return u6(t);
                var o = Hs(t)
                  , l = [];
                for (var c in t)
                    c == "constructor" && (o || !et.call(t, c)) || l.push(c);
                return l
            }
            function vc(t, o) {
                return t < o
            }
            function Kd(t, o) {
                var l = -1
                  , c = Xt(t) ? P(t.length) : [];
                return Kn(t, function(m, v, S) {
                    c[++l] = o(m, v, S)
                }),
                c
            }
            function Qd(t) {
                var o = Nc(t);
                return o.length == 1 && o[0][2] ? Em(o[0][0], o[0][1]) : function(l) {
                    return l === t || gc(l, t, o)
                }
            }
            function Zd(t, o) {
                return Fc(t) && Dm(o) ? Em(on(t), o) : function(l) {
                    var c = Hc(l, t);
                    return c === n && c === o ? Gc(l, t) : js(o, c, Z | xe)
                }
            }
            function sa(t, o, l, c, m) {
                t !== o && mc(o, function(v, S) {
                    if (m || (m = new Gi),
                    St(v))
                        Ev(t, o, S, l, sa, c, m);
                    else {
                        var x = c ? c(Lc(t, S), v, S + "", t, o, m) : n;
                        x === n && (x = v),
                        uc(t, S, x)
                    }
                }, ei)
            }
            function Ev(t, o, l, c, m, v, S) {
                var x = Lc(t, l)
                  , T = Lc(o, l)
                  , A = S.get(T);
                if (A) {
                    uc(t, l, A);
                    return
                }
                var F = v ? v(x, T, l + "", t, o, S) : n
                  , U = F === n;
                if (U) {
                    var Y = Me(T)
                      , ce = !Y && Jn(T)
                      , ve = !Y && !ce && qo(T);
                    F = T,
                    Y || ce || ve ? Me(x) ? F = x : wt(x) ? F = Jt(x) : ce ? (U = !1,
                    F = lm(T, !0)) : ve ? (U = !1,
                    F = cm(T, !0)) : F = [] : qs(T) || Mo(T) ? (F = x,
                    Mo(x) ? F = sp(x) : (!St(x) || Tn(x)) && (F = Tm(T))) : U = !1
                }
                U && (S.set(T, F),
                m(F, T, c, v, S),
                S.delete(T)),
                uc(t, l, F)
            }
            function Yd(t, o) {
                var l = t.length;
                if (l)
                    return o += o < 0 ? l : 0,
                    Mn(o, l) ? t[o] : n
            }
            function Jd(t, o, l) {
                o.length ? o = bt(o, function(v) {
                    return Me(v) ? function(S) {
                        return xo(S, v.length === 1 ? v[0] : v)
                    }
                    : v
                }) : o = [ti];
                var c = -1;
                o = bt(o, di(ge()));
                var m = Kd(t, function(v, S, x) {
                    var T = bt(o, function(A) {
                        return A(v)
                    });
                    return {
                        criteria: T,
                        index: ++c,
                        value: v
                    }
                });
                return i_(m, function(v, S) {
                    return jv(v, S, l)
                })
            }
            function Pv(t, o) {
                return Xd(t, o, function(l, c) {
                    return Gc(t, c)
                })
            }
            function Xd(t, o, l) {
                for (var c = -1, m = o.length, v = {}; ++c < m; ) {
                    var S = o[c]
                      , x = xo(t, S);
                    l(x, S) && zs(v, Zn(S, t), x)
                }
                return v
            }
            function kv(t) {
                return function(o) {
                    return xo(o, t)
                }
            }
            function bc(t, o, l, c) {
                var m = c ? t_ : Lo
                  , v = -1
                  , S = o.length
                  , x = t;
                for (t === o && (o = Jt(o)),
                l && (x = bt(t, di(l))); ++v < S; )
                    for (var T = 0, A = o[v], F = l ? l(A) : A; (T = m(x, F, T, c)) > -1; )
                        x !== t && Qr.call(x, T, 1),
                        Qr.call(t, T, 1);
                return t
            }
            function em(t, o) {
                for (var l = t ? o.length : 0, c = l - 1; l--; ) {
                    var m = o[l];
                    if (l == c || m !== v) {
                        var v = m;
                        Mn(m) ? Qr.call(t, m, 1) : xc(t, m)
                    }
                }
                return t
            }
            function Cc(t, o) {
                return t + Jr(Ad() * (o - t + 1))
            }
            function Ov(t, o, l, c) {
                for (var m = -1, v = Pt(Yr((o - t) / (l || 1)), 0), S = P(v); v--; )
                    S[c ? v : ++m] = t,
                    t += l;
                return S
            }
            function Sc(t, o) {
                var l = "";
                if (!t || o < 1 || o > jn)
                    return l;
                do
                    o % 2 && (l += t),
                    o = Jr(o / 2),
                    o && (t += t);
                while (o);
                return l
            }
            function ke(t, o) {
                return Bc(Pm(t, o, ti), t + "")
            }
            function Nv(t) {
                return Ld(Ko(t))
            }
            function Av(t, o) {
                var l = Ko(t);
                return fa(l, yo(o, 0, l.length))
            }
            function zs(t, o, l, c) {
                if (!St(t))
                    return t;
                o = Zn(o, t);
                for (var m = -1, v = o.length, S = v - 1, x = t; x != null && ++m < v; ) {
                    var T = on(o[m])
                      , A = l;
                    if (T === "__proto__" || T === "constructor" || T === "prototype")
                        return t;
                    if (m != S) {
                        var F = x[T];
                        A = c ? c(F, T, x) : n,
                        A === n && (A = St(F) ? F : Mn(o[m + 1]) ? [] : {})
                    }
                    Vs(x, T, A),
                    x = x[T]
                }
                return t
            }
            var tm = Xr ? function(t, o) {
                return Xr.set(t, o),
                t
            }
            : ti
              , Fv = Zr ? function(t, o) {
                return Zr(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Kc(o),
                    writable: !0
                })
            }
            : ti;
            function Rv(t) {
                return fa(Ko(t))
            }
            function Mi(t, o, l) {
                var c = -1
                  , m = t.length;
                o < 0 && (o = -o > m ? 0 : m + o),
                l = l > m ? m : l,
                l < 0 && (l += m),
                m = o > l ? 0 : l - o >>> 0,
                o >>>= 0;
                for (var v = P(m); ++c < m; )
                    v[c] = t[c + o];
                return v
            }
            function Lv(t, o) {
                var l;
                return Kn(t, function(c, m, v) {
                    return l = o(c, m, v),
                    !l
                }),
                !!l
            }
            function ra(t, o, l) {
                var c = 0
                  , m = t == null ? c : t.length;
                if (typeof o == "number" && o === o && m <= Vf) {
                    for (; c < m; ) {
                        var v = c + m >>> 1
                          , S = t[v];
                        S !== null && !pi(S) && (l ? S <= o : S < o) ? c = v + 1 : m = v
                    }
                    return m
                }
                return yc(t, o, ti, l)
            }
            function yc(t, o, l, c) {
                var m = 0
                  , v = t == null ? 0 : t.length;
                if (v === 0)
                    return 0;
                o = l(o);
                for (var S = o !== o, x = o === null, T = pi(o), A = o === n; m < v; ) {
                    var F = Jr((m + v) / 2)
                      , U = l(t[F])
                      , Y = U !== n
                      , ce = U === null
                      , ve = U === U
                      , Pe = pi(U);
                    if (S)
                        var be = c || ve;
                    else
                        A ? be = ve && (c || Y) : x ? be = ve && Y && (c || !ce) : T ? be = ve && Y && !ce && (c || !Pe) : ce || Pe ? be = !1 : be = c ? U <= o : U < o;
                    be ? m = F + 1 : v = F
                }
                return $t(v, Bf)
            }
            function im(t, o) {
                for (var l = -1, c = t.length, m = 0, v = []; ++l < c; ) {
                    var S = t[l]
                      , x = o ? o(S) : S;
                    if (!l || !qi(x, T)) {
                        var T = x;
                        v[m++] = S === 0 ? 0 : S
                    }
                }
                return v
            }
            function nm(t) {
                return typeof t == "number" ? t : pi(t) ? kr : +t
            }
            function mi(t) {
                if (typeof t == "string")
                    return t;
                if (Me(t))
                    return bt(t, mi) + "";
                if (pi(t))
                    return Fd ? Fd.call(t) : "";
                var o = t + "";
                return o == "0" && 1 / t == -_o ? "-0" : o
            }
            function Qn(t, o, l) {
                var c = -1
                  , m = Vr
                  , v = t.length
                  , S = !0
                  , x = []
                  , T = x;
                if (l)
                    S = !1,
                    m = Yl;
                else if (v >= r) {
                    var A = o ? null : Kv(t);
                    if (A)
                        return Ur(A);
                    S = !1,
                    m = Ns,
                    T = new So
                } else
                    T = o ? [] : x;
                e: for (; ++c < v; ) {
                    var F = t[c]
                      , U = o ? o(F) : F;
                    if (F = l || F !== 0 ? F : 0,
                    S && U === U) {
                        for (var Y = T.length; Y--; )
                            if (T[Y] === U)
                                continue e;
                        o && T.push(U),
                        x.push(F)
                    } else
                        m(T, U, l) || (T !== x && T.push(U),
                        x.push(F))
                }
                return x
            }
            function xc(t, o) {
                return o = Zn(o, t),
                t = km(t, o),
                t == null || delete t[on(Ti(o))]
            }
            function om(t, o, l, c) {
                return zs(t, o, l(xo(t, o)), c)
            }
            function aa(t, o, l, c) {
                for (var m = t.length, v = c ? m : -1; (c ? v-- : ++v < m) && o(t[v], v, t); )
                    ;
                return l ? Mi(t, c ? 0 : v, c ? v + 1 : m) : Mi(t, c ? v + 1 : 0, c ? m : v)
            }
            function sm(t, o) {
                var l = t;
                return l instanceof Le && (l = l.value()),
                Jl(o, function(c, m) {
                    return m.func.apply(m.thisArg, Wn([c], m.args))
                }, l)
            }
            function Ic(t, o, l) {
                var c = t.length;
                if (c < 2)
                    return c ? Qn(t[0]) : [];
                for (var m = -1, v = P(c); ++m < c; )
                    for (var S = t[m], x = -1; ++x < c; )
                        x != m && (v[m] = $s(v[m] || S, t[x], o, l));
                return Qn(Vt(v, 1), o, l)
            }
            function rm(t, o, l) {
                for (var c = -1, m = t.length, v = o.length, S = {}; ++c < m; ) {
                    var x = c < v ? o[c] : n;
                    l(S, t[c], x)
                }
                return S
            }
            function wc(t) {
                return wt(t) ? t : []
            }
            function Mc(t) {
                return typeof t == "function" ? t : ti
            }
            function Zn(t, o) {
                return Me(t) ? t : Fc(t, o) ? [t] : Fm(Qe(t))
            }
            var Bv = ke;
            function Yn(t, o, l) {
                var c = t.length;
                return l = l === n ? c : l,
                !o && l >= c ? t : Mi(t, o, l)
            }
            var am = w_ || function(t) {
                return Nt.clearTimeout(t)
            }
            ;
            function lm(t, o) {
                if (o)
                    return t.slice();
                var l = t.length
                  , c = Ed ? Ed(l) : new t.constructor(l);
                return t.copy(c),
                c
            }
            function Tc(t) {
                var o = new t.constructor(t.byteLength);
                return new qr(o).set(new qr(t)),
                o
            }
            function Vv(t, o) {
                var l = o ? Tc(t.buffer) : t.buffer;
                return new t.constructor(l,t.byteOffset,t.byteLength)
            }
            function $v(t) {
                var o = new t.constructor(t.source,Hu.exec(t));
                return o.lastIndex = t.lastIndex,
                o
            }
            function Uv(t) {
                return Bs ? rt(Bs.call(t)) : {}
            }
            function cm(t, o) {
                var l = o ? Tc(t.buffer) : t.buffer;
                return new t.constructor(l,t.byteOffset,t.length)
            }
            function um(t, o) {
                if (t !== o) {
                    var l = t !== n
                      , c = t === null
                      , m = t === t
                      , v = pi(t)
                      , S = o !== n
                      , x = o === null
                      , T = o === o
                      , A = pi(o);
                    if (!x && !A && !v && t > o || v && S && T && !x && !A || c && S && T || !l && T || !m)
                        return 1;
                    if (!c && !v && !A && t < o || A && l && m && !c && !v || x && l && m || !S && m || !T)
                        return -1
                }
                return 0
            }
            function jv(t, o, l) {
                for (var c = -1, m = t.criteria, v = o.criteria, S = m.length, x = l.length; ++c < S; ) {
                    var T = um(m[c], v[c]);
                    if (T) {
                        if (c >= x)
                            return T;
                        var A = l[c];
                        return T * (A == "desc" ? -1 : 1)
                    }
                }
                return t.index - o.index
            }
            function dm(t, o, l, c) {
                for (var m = -1, v = t.length, S = l.length, x = -1, T = o.length, A = Pt(v - S, 0), F = P(T + A), U = !c; ++x < T; )
                    F[x] = o[x];
                for (; ++m < S; )
                    (U || m < v) && (F[l[m]] = t[m]);
                for (; A--; )
                    F[x++] = t[m++];
                return F
            }
            function mm(t, o, l, c) {
                for (var m = -1, v = t.length, S = -1, x = l.length, T = -1, A = o.length, F = Pt(v - x, 0), U = P(F + A), Y = !c; ++m < F; )
                    U[m] = t[m];
                for (var ce = m; ++T < A; )
                    U[ce + T] = o[T];
                for (; ++S < x; )
                    (Y || m < v) && (U[ce + l[S]] = t[m++]);
                return U
            }
            function Jt(t, o) {
                var l = -1
                  , c = t.length;
                for (o || (o = P(c)); ++l < c; )
                    o[l] = t[l];
                return o
            }
            function nn(t, o, l, c) {
                var m = !l;
                l || (l = {});
                for (var v = -1, S = o.length; ++v < S; ) {
                    var x = o[v]
                      , T = c ? c(l[x], t[x], x, l, t) : n;
                    T === n && (T = t[x]),
                    m ? xn(l, x, T) : Vs(l, x, T)
                }
                return l
            }
            function zv(t, o) {
                return nn(t, Ac(t), o)
            }
            function Wv(t, o) {
                return nn(t, wm(t), o)
            }
            function la(t, o) {
                return function(l, c) {
                    var m = Me(l) ? Qg : mv
                      , v = o ? o() : {};
                    return m(l, t, ge(c, 2), v)
                }
            }
            function Wo(t) {
                return ke(function(o, l) {
                    var c = -1
                      , m = l.length
                      , v = m > 1 ? l[m - 1] : n
                      , S = m > 2 ? l[2] : n;
                    for (v = t.length > 3 && typeof v == "function" ? (m--,
                    v) : n,
                    S && qt(l[0], l[1], S) && (v = m < 3 ? n : v,
                    m = 1),
                    o = rt(o); ++c < m; ) {
                        var x = l[c];
                        x && t(o, x, c, v)
                    }
                    return o
                })
            }
            function pm(t, o) {
                return function(l, c) {
                    if (l == null)
                        return l;
                    if (!Xt(l))
                        return t(l, c);
                    for (var m = l.length, v = o ? m : -1, S = rt(l); (o ? v-- : ++v < m) && c(S[v], v, S) !== !1; )
                        ;
                    return l
                }
            }
            function hm(t) {
                return function(o, l, c) {
                    for (var m = -1, v = rt(o), S = c(o), x = S.length; x--; ) {
                        var T = S[t ? x : ++m];
                        if (l(v[T], T, v) === !1)
                            break
                    }
                    return o
                }
            }
            function Hv(t, o, l) {
                var c = o & _e
                  , m = Ws(t);
                function v() {
                    var S = this && this !== Nt && this instanceof v ? m : t;
                    return S.apply(c ? l : this, arguments)
                }
                return v
            }
            function fm(t) {
                return function(o) {
                    o = Qe(o);
                    var l = Bo(o) ? Hi(o) : n
                      , c = l ? l[0] : o.charAt(0)
                      , m = l ? Yn(l, 1).join("") : o.slice(1);
                    return c[t]() + m
                }
            }
            function Ho(t) {
                return function(o) {
                    return Jl(pp(mp(o).replace(Fg, "")), t, "")
                }
            }
            function Ws(t) {
                return function() {
                    var o = arguments;
                    switch (o.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(o[0]);
                    case 2:
                        return new t(o[0],o[1]);
                    case 3:
                        return new t(o[0],o[1],o[2]);
                    case 4:
                        return new t(o[0],o[1],o[2],o[3]);
                    case 5:
                        return new t(o[0],o[1],o[2],o[3],o[4]);
                    case 6:
                        return new t(o[0],o[1],o[2],o[3],o[4],o[5]);
                    case 7:
                        return new t(o[0],o[1],o[2],o[3],o[4],o[5],o[6])
                    }
                    var l = zo(t.prototype)
                      , c = t.apply(l, o);
                    return St(c) ? c : l
                }
            }
            function Gv(t, o, l) {
                var c = Ws(t);
                function m() {
                    for (var v = arguments.length, S = P(v), x = v, T = Go(m); x--; )
                        S[x] = arguments[x];
                    var A = v < 3 && S[0] !== T && S[v - 1] !== T ? [] : Hn(S, T);
                    if (v -= A.length,
                    v < l)
                        return Cm(t, o, ca, m.placeholder, n, S, A, n, n, l - v);
                    var F = this && this !== Nt && this instanceof m ? c : t;
                    return ui(F, this, S)
                }
                return m
            }
            function gm(t) {
                return function(o, l, c) {
                    var m = rt(o);
                    if (!Xt(o)) {
                        var v = ge(l, 3);
                        o = At(o),
                        l = function(x) {
                            return v(m[x], x, m)
                        }
                    }
                    var S = t(o, l, c);
                    return S > -1 ? m[v ? o[S] : S] : n
                }
            }
            function _m(t) {
                return wn(function(o) {
                    var l = o.length
                      , c = l
                      , m = Ii.prototype.thru;
                    for (t && o.reverse(); c--; ) {
                        var v = o[c];
                        if (typeof v != "function")
                            throw new xi(i);
                        if (m && !S && pa(v) == "wrapper")
                            var S = new Ii([],!0)
                    }
                    for (c = S ? c : l; ++c < l; ) {
                        v = o[c];
                        var x = pa(v)
                          , T = x == "wrapper" ? Oc(v) : n;
                        T && Rc(T[0]) && T[1] == (se | $e | Ue | E) && !T[4].length && T[9] == 1 ? S = S[pa(T[0])].apply(S, T[3]) : S = v.length == 1 && Rc(v) ? S[x]() : S.thru(v)
                    }
                    return function() {
                        var A = arguments
                          , F = A[0];
                        if (S && A.length == 1 && Me(F))
                            return S.plant(F).value();
                        for (var U = 0, Y = l ? o[U].apply(this, A) : F; ++U < l; )
                            Y = o[U].call(this, Y);
                        return Y
                    }
                })
            }
            function ca(t, o, l, c, m, v, S, x, T, A) {
                var F = o & se
                  , U = o & _e
                  , Y = o & Ne
                  , ce = o & ($e | Xe)
                  , ve = o & go
                  , Pe = Y ? n : Ws(t);
                function be() {
                    for (var Ae = arguments.length, Be = P(Ae), hi = Ae; hi--; )
                        Be[hi] = arguments[hi];
                    if (ce)
                        var Kt = Go(be)
                          , fi = o_(Be, Kt);
                    if (c && (Be = dm(Be, c, m, ce)),
                    v && (Be = mm(Be, v, S, ce)),
                    Ae -= fi,
                    ce && Ae < A) {
                        var Mt = Hn(Be, Kt);
                        return Cm(t, o, ca, be.placeholder, l, Be, Mt, x, T, A - Ae)
                    }
                    var Ki = U ? l : this
                      , En = Y ? Ki[t] : t;
                    return Ae = Be.length,
                    x ? Be = m6(Be, x) : ve && Ae > 1 && Be.reverse(),
                    F && T < Ae && (Be.length = T),
                    this && this !== Nt && this instanceof be && (En = Pe || Ws(En)),
                    En.apply(Ki, Be)
                }
                return be
            }
            function vm(t, o) {
                return function(l, c) {
                    return Cv(l, t, o(c), {})
                }
            }
            function ua(t, o) {
                return function(l, c) {
                    var m;
                    if (l === n && c === n)
                        return o;
                    if (l !== n && (m = l),
                    c !== n) {
                        if (m === n)
                            return c;
                        typeof l == "string" || typeof c == "string" ? (l = mi(l),
                        c = mi(c)) : (l = nm(l),
                        c = nm(c)),
                        m = t(l, c)
                    }
                    return m
                }
            }
            function Dc(t) {
                return wn(function(o) {
                    return o = bt(o, di(ge())),
                    ke(function(l) {
                        var c = this;
                        return t(o, function(m) {
                            return ui(m, c, l)
                        })
                    })
                })
            }
            function da(t, o) {
                o = o === n ? " " : mi(o);
                var l = o.length;
                if (l < 2)
                    return l ? Sc(o, t) : o;
                var c = Sc(o, Yr(t / Vo(o)));
                return Bo(o) ? Yn(Hi(c), 0, t).join("") : c.slice(0, t)
            }
            function qv(t, o, l, c) {
                var m = o & _e
                  , v = Ws(t);
                function S() {
                    for (var x = -1, T = arguments.length, A = -1, F = c.length, U = P(F + T), Y = this && this !== Nt && this instanceof S ? v : t; ++A < F; )
                        U[A] = c[A];
                    for (; T--; )
                        U[A++] = arguments[++x];
                    return ui(Y, m ? l : this, U)
                }
                return S
            }
            function bm(t) {
                return function(o, l, c) {
                    return c && typeof c != "number" && qt(o, l, c) && (l = c = n),
                    o = Dn(o),
                    l === n ? (l = o,
                    o = 0) : l = Dn(l),
                    c = c === n ? o < l ? 1 : -1 : Dn(c),
                    Ov(o, l, c, t)
                }
            }
            function ma(t) {
                return function(o, l) {
                    return typeof o == "string" && typeof l == "string" || (o = Di(o),
                    l = Di(l)),
                    t(o, l)
                }
            }
            function Cm(t, o, l, c, m, v, S, x, T, A) {
                var F = o & $e
                  , U = F ? S : n
                  , Y = F ? n : S
                  , ce = F ? v : n
                  , ve = F ? n : v;
                o |= F ? Ue : ft,
                o &= ~(F ? ft : Ue),
                o & Re || (o &= ~(_e | Ne));
                var Pe = [t, o, m, ce, U, ve, Y, x, T, A]
                  , be = l.apply(n, Pe);
                return Rc(t) && Om(be, Pe),
                be.placeholder = c,
                Nm(be, t, o)
            }
            function Ec(t) {
                var o = Et[t];
                return function(l, c) {
                    if (l = Di(l),
                    c = c == null ? 0 : $t(De(c), 292),
                    c && Nd(l)) {
                        var m = (Qe(l) + "e").split("e")
                          , v = o(m[0] + "e" + (+m[1] + c));
                        return m = (Qe(v) + "e").split("e"),
                        +(m[0] + "e" + (+m[1] - c))
                    }
                    return o(l)
                }
            }
            var Kv = Uo && 1 / Ur(new Uo([, -0]))[1] == _o ? function(t) {
                return new Uo(t)
            }
            : Yc;
            function Sm(t) {
                return function(o) {
                    var l = Ut(o);
                    return l == zi ? sc(o) : l == Wi ? d_(o) : n_(o, t(o))
                }
            }
            function In(t, o, l, c, m, v, S, x) {
                var T = o & Ne;
                if (!T && typeof t != "function")
                    throw new xi(i);
                var A = c ? c.length : 0;
                if (A || (o &= ~(Ue | ft),
                c = m = n),
                S = S === n ? S : Pt(De(S), 0),
                x = x === n ? x : De(x),
                A -= m ? m.length : 0,
                o & ft) {
                    var F = c
                      , U = m;
                    c = m = n
                }
                var Y = T ? n : Oc(t)
                  , ce = [t, o, l, c, m, F, U, v, S, x];
                if (Y && c6(ce, Y),
                t = ce[0],
                o = ce[1],
                l = ce[2],
                c = ce[3],
                m = ce[4],
                x = ce[9] = ce[9] === n ? T ? 0 : t.length : Pt(ce[9] - A, 0),
                !x && o & ($e | Xe) && (o &= ~($e | Xe)),
                !o || o == _e)
                    var ve = Hv(t, o, l);
                else
                    o == $e || o == Xe ? ve = Gv(t, o, x) : (o == Ue || o == (_e | Ue)) && !m.length ? ve = qv(t, o, l, c) : ve = ca.apply(n, ce);
                var Pe = Y ? tm : Om;
                return Nm(Pe(ve, ce), t, o)
            }
            function ym(t, o, l, c) {
                return t === n || qi(t, $o[l]) && !et.call(c, l) ? o : t
            }
            function xm(t, o, l, c, m, v) {
                return St(t) && St(o) && (v.set(o, t),
                sa(t, o, n, xm, v),
                v.delete(o)),
                t
            }
            function Qv(t) {
                return qs(t) ? n : t
            }
            function Im(t, o, l, c, m, v) {
                var S = l & Z
                  , x = t.length
                  , T = o.length;
                if (x != T && !(S && T > x))
                    return !1;
                var A = v.get(t)
                  , F = v.get(o);
                if (A && F)
                    return A == o && F == t;
                var U = -1
                  , Y = !0
                  , ce = l & xe ? new So : n;
                for (v.set(t, o),
                v.set(o, t); ++U < x; ) {
                    var ve = t[U]
                      , Pe = o[U];
                    if (c)
                        var be = S ? c(Pe, ve, U, o, t, v) : c(ve, Pe, U, t, o, v);
                    if (be !== n) {
                        if (be)
                            continue;
                        Y = !1;
                        break
                    }
                    if (ce) {
                        if (!Xl(o, function(Ae, Be) {
                            if (!Ns(ce, Be) && (ve === Ae || m(ve, Ae, l, c, v)))
                                return ce.push(Be)
                        })) {
                            Y = !1;
                            break
                        }
                    } else if (!(ve === Pe || m(ve, Pe, l, c, v))) {
                        Y = !1;
                        break
                    }
                }
                return v.delete(t),
                v.delete(o),
                Y
            }
            function Zv(t, o, l, c, m, v, S) {
                switch (l) {
                case Fo:
                    if (t.byteLength != o.byteLength || t.byteOffset != o.byteOffset)
                        return !1;
                    t = t.buffer,
                    o = o.buffer;
                case Os:
                    return !(t.byteLength != o.byteLength || !v(new qr(t), new qr(o)));
                case Ms:
                case Ts:
                case Ds:
                    return qi(+t, +o);
                case Nr:
                    return t.name == o.name && t.message == o.message;
                case Es:
                case Ps:
                    return t == o + "";
                case zi:
                    var x = sc;
                case Wi:
                    var T = c & Z;
                    if (x || (x = Ur),
                    t.size != o.size && !T)
                        return !1;
                    var A = S.get(t);
                    if (A)
                        return A == o;
                    c |= xe,
                    S.set(t, o);
                    var F = Im(x(t), x(o), c, m, v, S);
                    return S.delete(t),
                    F;
                case Fr:
                    if (Bs)
                        return Bs.call(t) == Bs.call(o)
                }
                return !1
            }
            function Yv(t, o, l, c, m, v) {
                var S = l & Z
                  , x = Pc(t)
                  , T = x.length
                  , A = Pc(o)
                  , F = A.length;
                if (T != F && !S)
                    return !1;
                for (var U = T; U--; ) {
                    var Y = x[U];
                    if (!(S ? Y in o : et.call(o, Y)))
                        return !1
                }
                var ce = v.get(t)
                  , ve = v.get(o);
                if (ce && ve)
                    return ce == o && ve == t;
                var Pe = !0;
                v.set(t, o),
                v.set(o, t);
                for (var be = S; ++U < T; ) {
                    Y = x[U];
                    var Ae = t[Y]
                      , Be = o[Y];
                    if (c)
                        var hi = S ? c(Be, Ae, Y, o, t, v) : c(Ae, Be, Y, t, o, v);
                    if (!(hi === n ? Ae === Be || m(Ae, Be, l, c, v) : hi)) {
                        Pe = !1;
                        break
                    }
                    be || (be = Y == "constructor")
                }
                if (Pe && !be) {
                    var Kt = t.constructor
                      , fi = o.constructor;
                    Kt != fi && "constructor"in t && "constructor"in o && !(typeof Kt == "function" && Kt instanceof Kt && typeof fi == "function" && fi instanceof fi) && (Pe = !1)
                }
                return v.delete(t),
                v.delete(o),
                Pe
            }
            function wn(t) {
                return Bc(Pm(t, n, Vm), t + "")
            }
            function Pc(t) {
                return Wd(t, At, Ac)
            }
            function kc(t) {
                return Wd(t, ei, wm)
            }
            var Oc = Xr ? function(t) {
                return Xr.get(t)
            }
            : Yc;
            function pa(t) {
                for (var o = t.name + "", l = jo[o], c = et.call(jo, o) ? l.length : 0; c--; ) {
                    var m = l[c]
                      , v = m.func;
                    if (v == null || v == t)
                        return m.name
                }
                return o
            }
            function Go(t) {
                var o = et.call(_, "placeholder") ? _ : t;
                return o.placeholder
            }
            function ge() {
                var t = _.iteratee || Qc;
                return t = t === Qc ? qd : t,
                arguments.length ? t(arguments[0], arguments[1]) : t
            }
            function ha(t, o) {
                var l = t.__data__;
                return s6(o) ? l[typeof o == "string" ? "string" : "hash"] : l.map
            }
            function Nc(t) {
                for (var o = At(t), l = o.length; l--; ) {
                    var c = o[l]
                      , m = t[c];
                    o[l] = [c, m, Dm(m)]
                }
                return o
            }
            function Io(t, o) {
                var l = l_(t, o);
                return Gd(l) ? l : n
            }
            function Jv(t) {
                var o = et.call(t, bo)
                  , l = t[bo];
                try {
                    t[bo] = n;
                    var c = !0
                } catch {}
                var m = Hr.call(t);
                return c && (o ? t[bo] = l : delete t[bo]),
                m
            }
            var Ac = ac ? function(t) {
                return t == null ? [] : (t = rt(t),
                zn(ac(t), function(o) {
                    return kd.call(t, o)
                }))
            }
            : Jc
              , wm = ac ? function(t) {
                for (var o = []; t; )
                    Wn(o, Ac(t)),
                    t = Kr(t);
                return o
            }
            : Jc
              , Ut = Gt;
            (lc && Ut(new lc(new ArrayBuffer(1))) != Fo || Fs && Ut(new Fs) != zi || cc && Ut(cc.resolve()) != Uu || Uo && Ut(new Uo) != Wi || Rs && Ut(new Rs) != ks) && (Ut = function(t) {
                var o = Gt(t)
                  , l = o == Cn ? t.constructor : n
                  , c = l ? wo(l) : "";
                if (c)
                    switch (c) {
                    case A_:
                        return Fo;
                    case F_:
                        return zi;
                    case R_:
                        return Uu;
                    case L_:
                        return Wi;
                    case B_:
                        return ks
                    }
                return o
            }
            );
            function Xv(t, o, l) {
                for (var c = -1, m = l.length; ++c < m; ) {
                    var v = l[c]
                      , S = v.size;
                    switch (v.type) {
                    case "drop":
                        t += S;
                        break;
                    case "dropRight":
                        o -= S;
                        break;
                    case "take":
                        o = $t(o, t + S);
                        break;
                    case "takeRight":
                        t = Pt(t, o - S);
                        break
                    }
                }
                return {
                    start: t,
                    end: o
                }
            }
            function e6(t) {
                var o = t.match(rg);
                return o ? o[1].split(ag) : []
            }
            function Mm(t, o, l) {
                o = Zn(o, t);
                for (var c = -1, m = o.length, v = !1; ++c < m; ) {
                    var S = on(o[c]);
                    if (!(v = t != null && l(t, S)))
                        break;
                    t = t[S]
                }
                return v || ++c != m ? v : (m = t == null ? 0 : t.length,
                !!m && Sa(m) && Mn(S, m) && (Me(t) || Mo(t)))
            }
            function t6(t) {
                var o = t.length
                  , l = new t.constructor(o);
                return o && typeof t[0] == "string" && et.call(t, "index") && (l.index = t.index,
                l.input = t.input),
                l
            }
            function Tm(t) {
                return typeof t.constructor == "function" && !Hs(t) ? zo(Kr(t)) : {}
            }
            function i6(t, o, l) {
                var c = t.constructor;
                switch (o) {
                case Os:
                    return Tc(t);
                case Ms:
                case Ts:
                    return new c(+t);
                case Fo:
                    return Vv(t, l);
                case Nl:
                case Al:
                case Fl:
                case Rl:
                case Ll:
                case Bl:
                case Vl:
                case $l:
                case Ul:
                    return cm(t, l);
                case zi:
                    return new c;
                case Ds:
                case Ps:
                    return new c(t);
                case Es:
                    return $v(t);
                case Wi:
                    return new c;
                case Fr:
                    return Uv(t)
                }
            }
            function n6(t, o) {
                var l = o.length;
                if (!l)
                    return t;
                var c = l - 1;
                return o[c] = (l > 1 ? "& " : "") + o[c],
                o = o.join(l > 2 ? ", " : " "),
                t.replace(sg, `{
/* [wrapped with ` + o + `] */
`)
            }
            function o6(t) {
                return Me(t) || Mo(t) || !!(Od && t && t[Od])
            }
            function Mn(t, o) {
                var l = typeof t;
                return o = o ?? jn,
                !!o && (l == "number" || l != "symbol" && gg.test(t)) && t > -1 && t % 1 == 0 && t < o
            }
            function qt(t, o, l) {
                if (!St(l))
                    return !1;
                var c = typeof o;
                return (c == "number" ? Xt(l) && Mn(o, l.length) : c == "string" && o in l) ? qi(l[o], t) : !1
            }
            function Fc(t, o) {
                if (Me(t))
                    return !1;
                var l = typeof t;
                return l == "number" || l == "symbol" || l == "boolean" || t == null || pi(t) ? !0 : tg.test(t) || !eg.test(t) || o != null && t in rt(o)
            }
            function s6(t) {
                var o = typeof t;
                return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? t !== "__proto__" : t === null
            }
            function Rc(t) {
                var o = pa(t)
                  , l = _[o];
                if (typeof l != "function" || !(o in Le.prototype))
                    return !1;
                if (t === l)
                    return !0;
                var c = Oc(l);
                return !!c && t === c[0]
            }
            function r6(t) {
                return !!Dd && Dd in t
            }
            var a6 = zr ? Tn : Xc;
            function Hs(t) {
                var o = t && t.constructor
                  , l = typeof o == "function" && o.prototype || $o;
                return t === l
            }
            function Dm(t) {
                return t === t && !St(t)
            }
            function Em(t, o) {
                return function(l) {
                    return l == null ? !1 : l[t] === o && (o !== n || t in rt(l))
                }
            }
            function l6(t) {
                var o = ba(t, function(c) {
                    return l.size === p && l.clear(),
                    c
                })
                  , l = o.cache;
                return o
            }
            function c6(t, o) {
                var l = t[1]
                  , c = o[1]
                  , m = l | c
                  , v = m < (_e | Ne | se)
                  , S = c == se && l == $e || c == se && l == E && t[7].length <= o[8] || c == (se | E) && o[7].length <= o[8] && l == $e;
                if (!(v || S))
                    return t;
                c & _e && (t[2] = o[2],
                m |= l & _e ? 0 : Re);
                var x = o[3];
                if (x) {
                    var T = t[3];
                    t[3] = T ? dm(T, x, o[4]) : x,
                    t[4] = T ? Hn(t[3], g) : o[4]
                }
                return x = o[5],
                x && (T = t[5],
                t[5] = T ? mm(T, x, o[6]) : x,
                t[6] = T ? Hn(t[5], g) : o[6]),
                x = o[7],
                x && (t[7] = x),
                c & se && (t[8] = t[8] == null ? o[8] : $t(t[8], o[8])),
                t[9] == null && (t[9] = o[9]),
                t[0] = o[0],
                t[1] = m,
                t
            }
            function u6(t) {
                var o = [];
                if (t != null)
                    for (var l in rt(t))
                        o.push(l);
                return o
            }
            function d6(t) {
                return Hr.call(t)
            }
            function Pm(t, o, l) {
                return o = Pt(o === n ? t.length - 1 : o, 0),
                function() {
                    for (var c = arguments, m = -1, v = Pt(c.length - o, 0), S = P(v); ++m < v; )
                        S[m] = c[o + m];
                    m = -1;
                    for (var x = P(o + 1); ++m < o; )
                        x[m] = c[m];
                    return x[o] = l(S),
                    ui(t, this, x)
                }
            }
            function km(t, o) {
                return o.length < 2 ? t : xo(t, Mi(o, 0, -1))
            }
            function m6(t, o) {
                for (var l = t.length, c = $t(o.length, l), m = Jt(t); c--; ) {
                    var v = o[c];
                    t[c] = Mn(v, l) ? m[v] : n
                }
                return t
            }
            function Lc(t, o) {
                if (!(o === "constructor" && typeof t[o] == "function") && o != "__proto__")
                    return t[o]
            }
            var Om = Am(tm)
              , Gs = T_ || function(t, o) {
                return Nt.setTimeout(t, o)
            }
              , Bc = Am(Fv);
            function Nm(t, o, l) {
                var c = o + "";
                return Bc(t, n6(c, p6(e6(c), l)))
            }
            function Am(t) {
                var o = 0
                  , l = 0;
                return function() {
                    var c = k_()
                      , m = Af - (c - l);
                    if (l = c,
                    m > 0) {
                        if (++o >= Nf)
                            return arguments[0]
                    } else
                        o = 0;
                    return t.apply(n, arguments)
                }
            }
            function fa(t, o) {
                var l = -1
                  , c = t.length
                  , m = c - 1;
                for (o = o === n ? c : o; ++l < o; ) {
                    var v = Cc(l, m)
                      , S = t[v];
                    t[v] = t[l],
                    t[l] = S
                }
                return t.length = o,
                t
            }
            var Fm = l6(function(t) {
                var o = [];
                return t.charCodeAt(0) === 46 && o.push(""),
                t.replace(ig, function(l, c, m, v) {
                    o.push(m ? v.replace(ug, "$1") : c || l)
                }),
                o
            });
            function on(t) {
                if (typeof t == "string" || pi(t))
                    return t;
                var o = t + "";
                return o == "0" && 1 / t == -_o ? "-0" : o
            }
            function wo(t) {
                if (t != null) {
                    try {
                        return Wr.call(t)
                    } catch {}
                    try {
                        return t + ""
                    } catch {}
                }
                return ""
            }
            function p6(t, o) {
                return yi($f, function(l) {
                    var c = "_." + l[0];
                    o & l[1] && !Vr(t, c) && t.push(c)
                }),
                t.sort()
            }
            function Rm(t) {
                if (t instanceof Le)
                    return t.clone();
                var o = new Ii(t.__wrapped__,t.__chain__);
                return o.__actions__ = Jt(t.__actions__),
                o.__index__ = t.__index__,
                o.__values__ = t.__values__,
                o
            }
            function h6(t, o, l) {
                (l ? qt(t, o, l) : o === n) ? o = 1 : o = Pt(De(o), 0);
                var c = t == null ? 0 : t.length;
                if (!c || o < 1)
                    return [];
                for (var m = 0, v = 0, S = P(Yr(c / o)); m < c; )
                    S[v++] = Mi(t, m, m += o);
                return S
            }
            function f6(t) {
                for (var o = -1, l = t == null ? 0 : t.length, c = 0, m = []; ++o < l; ) {
                    var v = t[o];
                    v && (m[c++] = v)
                }
                return m
            }
            function g6() {
                var t = arguments.length;
                if (!t)
                    return [];
                for (var o = P(t - 1), l = arguments[0], c = t; c--; )
                    o[c - 1] = arguments[c];
                return Wn(Me(l) ? Jt(l) : [l], Vt(o, 1))
            }
            var _6 = ke(function(t, o) {
                return wt(t) ? $s(t, Vt(o, 1, wt, !0)) : []
            })
              , v6 = ke(function(t, o) {
                var l = Ti(o);
                return wt(l) && (l = n),
                wt(t) ? $s(t, Vt(o, 1, wt, !0), ge(l, 2)) : []
            })
              , b6 = ke(function(t, o) {
                var l = Ti(o);
                return wt(l) && (l = n),
                wt(t) ? $s(t, Vt(o, 1, wt, !0), n, l) : []
            });
            function C6(t, o, l) {
                var c = t == null ? 0 : t.length;
                return c ? (o = l || o === n ? 1 : De(o),
                Mi(t, o < 0 ? 0 : o, c)) : []
            }
            function S6(t, o, l) {
                var c = t == null ? 0 : t.length;
                return c ? (o = l || o === n ? 1 : De(o),
                o = c - o,
                Mi(t, 0, o < 0 ? 0 : o)) : []
            }
            function y6(t, o) {
                return t && t.length ? aa(t, ge(o, 3), !0, !0) : []
            }
            function x6(t, o) {
                return t && t.length ? aa(t, ge(o, 3), !0) : []
            }
            function I6(t, o, l, c) {
                var m = t == null ? 0 : t.length;
                return m ? (l && typeof l != "number" && qt(t, o, l) && (l = 0,
                c = m),
                gv(t, o, l, c)) : []
            }
            function Lm(t, o, l) {
                var c = t == null ? 0 : t.length;
                if (!c)
                    return -1;
                var m = l == null ? 0 : De(l);
                return m < 0 && (m = Pt(c + m, 0)),
                $r(t, ge(o, 3), m)
            }
            function Bm(t, o, l) {
                var c = t == null ? 0 : t.length;
                if (!c)
                    return -1;
                var m = c - 1;
                return l !== n && (m = De(l),
                m = l < 0 ? Pt(c + m, 0) : $t(m, c - 1)),
                $r(t, ge(o, 3), m, !0)
            }
            function Vm(t) {
                var o = t == null ? 0 : t.length;
                return o ? Vt(t, 1) : []
            }
            function w6(t) {
                var o = t == null ? 0 : t.length;
                return o ? Vt(t, _o) : []
            }
            function M6(t, o) {
                var l = t == null ? 0 : t.length;
                return l ? (o = o === n ? 1 : De(o),
                Vt(t, o)) : []
            }
            function T6(t) {
                for (var o = -1, l = t == null ? 0 : t.length, c = {}; ++o < l; ) {
                    var m = t[o];
                    c[m[0]] = m[1]
                }
                return c
            }
            function $m(t) {
                return t && t.length ? t[0] : n
            }
            function D6(t, o, l) {
                var c = t == null ? 0 : t.length;
                if (!c)
                    return -1;
                var m = l == null ? 0 : De(l);
                return m < 0 && (m = Pt(c + m, 0)),
                Lo(t, o, m)
            }
            function E6(t) {
                var o = t == null ? 0 : t.length;
                return o ? Mi(t, 0, -1) : []
            }
            var P6 = ke(function(t) {
                var o = bt(t, wc);
                return o.length && o[0] === t[0] ? fc(o) : []
            })
              , k6 = ke(function(t) {
                var o = Ti(t)
                  , l = bt(t, wc);
                return o === Ti(l) ? o = n : l.pop(),
                l.length && l[0] === t[0] ? fc(l, ge(o, 2)) : []
            })
              , O6 = ke(function(t) {
                var o = Ti(t)
                  , l = bt(t, wc);
                return o = typeof o == "function" ? o : n,
                o && l.pop(),
                l.length && l[0] === t[0] ? fc(l, n, o) : []
            });
            function N6(t, o) {
                return t == null ? "" : E_.call(t, o)
            }
            function Ti(t) {
                var o = t == null ? 0 : t.length;
                return o ? t[o - 1] : n
            }
            function A6(t, o, l) {
                var c = t == null ? 0 : t.length;
                if (!c)
                    return -1;
                var m = c;
                return l !== n && (m = De(l),
                m = m < 0 ? Pt(c + m, 0) : $t(m, c - 1)),
                o === o ? p_(t, o, m) : $r(t, Cd, m, !0)
            }
            function F6(t, o) {
                return t && t.length ? Yd(t, De(o)) : n
            }
            var R6 = ke(Um);
            function Um(t, o) {
                return t && t.length && o && o.length ? bc(t, o) : t
            }
            function L6(t, o, l) {
                return t && t.length && o && o.length ? bc(t, o, ge(l, 2)) : t
            }
            function B6(t, o, l) {
                return t && t.length && o && o.length ? bc(t, o, n, l) : t
            }
            var V6 = wn(function(t, o) {
                var l = t == null ? 0 : t.length
                  , c = dc(t, o);
                return em(t, bt(o, function(m) {
                    return Mn(m, l) ? +m : m
                }).sort(um)),
                c
            });
            function $6(t, o) {
                var l = [];
                if (!(t && t.length))
                    return l;
                var c = -1
                  , m = []
                  , v = t.length;
                for (o = ge(o, 3); ++c < v; ) {
                    var S = t[c];
                    o(S, c, t) && (l.push(S),
                    m.push(c))
                }
                return em(t, m),
                l
            }
            function Vc(t) {
                return t == null ? t : N_.call(t)
            }
            function U6(t, o, l) {
                var c = t == null ? 0 : t.length;
                return c ? (l && typeof l != "number" && qt(t, o, l) ? (o = 0,
                l = c) : (o = o == null ? 0 : De(o),
                l = l === n ? c : De(l)),
                Mi(t, o, l)) : []
            }
            function j6(t, o) {
                return ra(t, o)
            }
            function z6(t, o, l) {
                return yc(t, o, ge(l, 2))
            }
            function W6(t, o) {
                var l = t == null ? 0 : t.length;
                if (l) {
                    var c = ra(t, o);
                    if (c < l && qi(t[c], o))
                        return c
                }
                return -1
            }
            function H6(t, o) {
                return ra(t, o, !0)
            }
            function G6(t, o, l) {
                return yc(t, o, ge(l, 2), !0)
            }
            function q6(t, o) {
                var l = t == null ? 0 : t.length;
                if (l) {
                    var c = ra(t, o, !0) - 1;
                    if (qi(t[c], o))
                        return c
                }
                return -1
            }
            function K6(t) {
                return t && t.length ? im(t) : []
            }
            function Q6(t, o) {
                return t && t.length ? im(t, ge(o, 2)) : []
            }
            function Z6(t) {
                var o = t == null ? 0 : t.length;
                return o ? Mi(t, 1, o) : []
            }
            function Y6(t, o, l) {
                return t && t.length ? (o = l || o === n ? 1 : De(o),
                Mi(t, 0, o < 0 ? 0 : o)) : []
            }
            function J6(t, o, l) {
                var c = t == null ? 0 : t.length;
                return c ? (o = l || o === n ? 1 : De(o),
                o = c - o,
                Mi(t, o < 0 ? 0 : o, c)) : []
            }
            function X6(t, o) {
                return t && t.length ? aa(t, ge(o, 3), !1, !0) : []
            }
            function eb(t, o) {
                return t && t.length ? aa(t, ge(o, 3)) : []
            }
            var tb = ke(function(t) {
                return Qn(Vt(t, 1, wt, !0))
            })
              , ib = ke(function(t) {
                var o = Ti(t);
                return wt(o) && (o = n),
                Qn(Vt(t, 1, wt, !0), ge(o, 2))
            })
              , nb = ke(function(t) {
                var o = Ti(t);
                return o = typeof o == "function" ? o : n,
                Qn(Vt(t, 1, wt, !0), n, o)
            });
            function ob(t) {
                return t && t.length ? Qn(t) : []
            }
            function sb(t, o) {
                return t && t.length ? Qn(t, ge(o, 2)) : []
            }
            function rb(t, o) {
                return o = typeof o == "function" ? o : n,
                t && t.length ? Qn(t, n, o) : []
            }
            function $c(t) {
                if (!(t && t.length))
                    return [];
                var o = 0;
                return t = zn(t, function(l) {
                    if (wt(l))
                        return o = Pt(l.length, o),
                        !0
                }),
                nc(o, function(l) {
                    return bt(t, ec(l))
                })
            }
            function jm(t, o) {
                if (!(t && t.length))
                    return [];
                var l = $c(t);
                return o == null ? l : bt(l, function(c) {
                    return ui(o, n, c)
                })
            }
            var ab = ke(function(t, o) {
                return wt(t) ? $s(t, o) : []
            })
              , lb = ke(function(t) {
                return Ic(zn(t, wt))
            })
              , cb = ke(function(t) {
                var o = Ti(t);
                return wt(o) && (o = n),
                Ic(zn(t, wt), ge(o, 2))
            })
              , ub = ke(function(t) {
                var o = Ti(t);
                return o = typeof o == "function" ? o : n,
                Ic(zn(t, wt), n, o)
            })
              , db = ke($c);
            function mb(t, o) {
                return rm(t || [], o || [], Vs)
            }
            function pb(t, o) {
                return rm(t || [], o || [], zs)
            }
            var hb = ke(function(t) {
                var o = t.length
                  , l = o > 1 ? t[o - 1] : n;
                return l = typeof l == "function" ? (t.pop(),
                l) : n,
                jm(t, l)
            });
            function zm(t) {
                var o = _(t);
                return o.__chain__ = !0,
                o
            }
            function fb(t, o) {
                return o(t),
                t
            }
            function ga(t, o) {
                return o(t)
            }
            var gb = wn(function(t) {
                var o = t.length
                  , l = o ? t[0] : 0
                  , c = this.__wrapped__
                  , m = function(v) {
                    return dc(v, t)
                };
                return o > 1 || this.__actions__.length || !(c instanceof Le) || !Mn(l) ? this.thru(m) : (c = c.slice(l, +l + (o ? 1 : 0)),
                c.__actions__.push({
                    func: ga,
                    args: [m],
                    thisArg: n
                }),
                new Ii(c,this.__chain__).thru(function(v) {
                    return o && !v.length && v.push(n),
                    v
                }))
            });
            function _b() {
                return zm(this)
            }
            function vb() {
                return new Ii(this.value(),this.__chain__)
            }
            function bb() {
                this.__values__ === n && (this.__values__ = np(this.value()));
                var t = this.__index__ >= this.__values__.length
                  , o = t ? n : this.__values__[this.__index__++];
                return {
                    done: t,
                    value: o
                }
            }
            function Cb() {
                return this
            }
            function Sb(t) {
                for (var o, l = this; l instanceof ta; ) {
                    var c = Rm(l);
                    c.__index__ = 0,
                    c.__values__ = n,
                    o ? m.__wrapped__ = c : o = c;
                    var m = c;
                    l = l.__wrapped__
                }
                return m.__wrapped__ = t,
                o
            }
            function yb() {
                var t = this.__wrapped__;
                if (t instanceof Le) {
                    var o = t;
                    return this.__actions__.length && (o = new Le(this)),
                    o = o.reverse(),
                    o.__actions__.push({
                        func: ga,
                        args: [Vc],
                        thisArg: n
                    }),
                    new Ii(o,this.__chain__)
                }
                return this.thru(Vc)
            }
            function xb() {
                return sm(this.__wrapped__, this.__actions__)
            }
            var Ib = la(function(t, o, l) {
                et.call(t, l) ? ++t[l] : xn(t, l, 1)
            });
            function wb(t, o, l) {
                var c = Me(t) ? vd : fv;
                return l && qt(t, o, l) && (o = n),
                c(t, ge(o, 3))
            }
            function Mb(t, o) {
                var l = Me(t) ? zn : jd;
                return l(t, ge(o, 3))
            }
            var Tb = gm(Lm)
              , Db = gm(Bm);
            function Eb(t, o) {
                return Vt(_a(t, o), 1)
            }
            function Pb(t, o) {
                return Vt(_a(t, o), _o)
            }
            function kb(t, o, l) {
                return l = l === n ? 1 : De(l),
                Vt(_a(t, o), l)
            }
            function Wm(t, o) {
                var l = Me(t) ? yi : Kn;
                return l(t, ge(o, 3))
            }
            function Hm(t, o) {
                var l = Me(t) ? Zg : Ud;
                return l(t, ge(o, 3))
            }
            var Ob = la(function(t, o, l) {
                et.call(t, l) ? t[l].push(o) : xn(t, l, [o])
            });
            function Nb(t, o, l, c) {
                t = Xt(t) ? t : Ko(t),
                l = l && !c ? De(l) : 0;
                var m = t.length;
                return l < 0 && (l = Pt(m + l, 0)),
                ya(t) ? l <= m && t.indexOf(o, l) > -1 : !!m && Lo(t, o, l) > -1
            }
            var Ab = ke(function(t, o, l) {
                var c = -1
                  , m = typeof o == "function"
                  , v = Xt(t) ? P(t.length) : [];
                return Kn(t, function(S) {
                    v[++c] = m ? ui(o, S, l) : Us(S, o, l)
                }),
                v
            })
              , Fb = la(function(t, o, l) {
                xn(t, l, o)
            });
            function _a(t, o) {
                var l = Me(t) ? bt : Kd;
                return l(t, ge(o, 3))
            }
            function Rb(t, o, l, c) {
                return t == null ? [] : (Me(o) || (o = o == null ? [] : [o]),
                l = c ? n : l,
                Me(l) || (l = l == null ? [] : [l]),
                Jd(t, o, l))
            }
            var Lb = la(function(t, o, l) {
                t[l ? 0 : 1].push(o)
            }, function() {
                return [[], []]
            });
            function Bb(t, o, l) {
                var c = Me(t) ? Jl : yd
                  , m = arguments.length < 3;
                return c(t, ge(o, 4), l, m, Kn)
            }
            function Vb(t, o, l) {
                var c = Me(t) ? Yg : yd
                  , m = arguments.length < 3;
                return c(t, ge(o, 4), l, m, Ud)
            }
            function $b(t, o) {
                var l = Me(t) ? zn : jd;
                return l(t, Ca(ge(o, 3)))
            }
            function Ub(t) {
                var o = Me(t) ? Ld : Nv;
                return o(t)
            }
            function jb(t, o, l) {
                (l ? qt(t, o, l) : o === n) ? o = 1 : o = De(o);
                var c = Me(t) ? uv : Av;
                return c(t, o)
            }
            function zb(t) {
                var o = Me(t) ? dv : Rv;
                return o(t)
            }
            function Wb(t) {
                if (t == null)
                    return 0;
                if (Xt(t))
                    return ya(t) ? Vo(t) : t.length;
                var o = Ut(t);
                return o == zi || o == Wi ? t.size : _c(t).length
            }
            function Hb(t, o, l) {
                var c = Me(t) ? Xl : Lv;
                return l && qt(t, o, l) && (o = n),
                c(t, ge(o, 3))
            }
            var Gb = ke(function(t, o) {
                if (t == null)
                    return [];
                var l = o.length;
                return l > 1 && qt(t, o[0], o[1]) ? o = [] : l > 2 && qt(o[0], o[1], o[2]) && (o = [o[0]]),
                Jd(t, Vt(o, 1), [])
            })
              , va = M_ || function() {
                return Nt.Date.now()
            }
            ;
            function qb(t, o) {
                if (typeof o != "function")
                    throw new xi(i);
                return t = De(t),
                function() {
                    if (--t < 1)
                        return o.apply(this, arguments)
                }
            }
            function Gm(t, o, l) {
                return o = l ? n : o,
                o = t && o == null ? t.length : o,
                In(t, se, n, n, n, n, o)
            }
            function qm(t, o) {
                var l;
                if (typeof o != "function")
                    throw new xi(i);
                return t = De(t),
                function() {
                    return --t > 0 && (l = o.apply(this, arguments)),
                    t <= 1 && (o = n),
                    l
                }
            }
            var Uc = ke(function(t, o, l) {
                var c = _e;
                if (l.length) {
                    var m = Hn(l, Go(Uc));
                    c |= Ue
                }
                return In(t, c, o, l, m)
            })
              , Km = ke(function(t, o, l) {
                var c = _e | Ne;
                if (l.length) {
                    var m = Hn(l, Go(Km));
                    c |= Ue
                }
                return In(o, c, t, l, m)
            });
            function Qm(t, o, l) {
                o = l ? n : o;
                var c = In(t, $e, n, n, n, n, n, o);
                return c.placeholder = Qm.placeholder,
                c
            }
            function Zm(t, o, l) {
                o = l ? n : o;
                var c = In(t, Xe, n, n, n, n, n, o);
                return c.placeholder = Zm.placeholder,
                c
            }
            function Ym(t, o, l) {
                var c, m, v, S, x, T, A = 0, F = !1, U = !1, Y = !0;
                if (typeof t != "function")
                    throw new xi(i);
                o = Di(o) || 0,
                St(l) && (F = !!l.leading,
                U = "maxWait"in l,
                v = U ? Pt(Di(l.maxWait) || 0, o) : v,
                Y = "trailing"in l ? !!l.trailing : Y);
                function ce(Mt) {
                    var Ki = c
                      , En = m;
                    return c = m = n,
                    A = Mt,
                    S = t.apply(En, Ki),
                    S
                }
                function ve(Mt) {
                    return A = Mt,
                    x = Gs(Ae, o),
                    F ? ce(Mt) : S
                }
                function Pe(Mt) {
                    var Ki = Mt - T
                      , En = Mt - A
                      , gp = o - Ki;
                    return U ? $t(gp, v - En) : gp
                }
                function be(Mt) {
                    var Ki = Mt - T
                      , En = Mt - A;
                    return T === n || Ki >= o || Ki < 0 || U && En >= v
                }
                function Ae() {
                    var Mt = va();
                    if (be(Mt))
                        return Be(Mt);
                    x = Gs(Ae, Pe(Mt))
                }
                function Be(Mt) {
                    return x = n,
                    Y && c ? ce(Mt) : (c = m = n,
                    S)
                }
                function hi() {
                    x !== n && am(x),
                    A = 0,
                    c = T = m = x = n
                }
                function Kt() {
                    return x === n ? S : Be(va())
                }
                function fi() {
                    var Mt = va()
                      , Ki = be(Mt);
                    if (c = arguments,
                    m = this,
                    T = Mt,
                    Ki) {
                        if (x === n)
                            return ve(T);
                        if (U)
                            return am(x),
                            x = Gs(Ae, o),
                            ce(T)
                    }
                    return x === n && (x = Gs(Ae, o)),
                    S
                }
                return fi.cancel = hi,
                fi.flush = Kt,
                fi
            }
            var Kb = ke(function(t, o) {
                return $d(t, 1, o)
            })
              , Qb = ke(function(t, o, l) {
                return $d(t, Di(o) || 0, l)
            });
            function Zb(t) {
                return In(t, go)
            }
            function ba(t, o) {
                if (typeof t != "function" || o != null && typeof o != "function")
                    throw new xi(i);
                var l = function() {
                    var c = arguments
                      , m = o ? o.apply(this, c) : c[0]
                      , v = l.cache;
                    if (v.has(m))
                        return v.get(m);
                    var S = t.apply(this, c);
                    return l.cache = v.set(m, S) || v,
                    S
                };
                return l.cache = new (ba.Cache || yn),
                l
            }
            ba.Cache = yn;
            function Ca(t) {
                if (typeof t != "function")
                    throw new xi(i);
                return function() {
                    var o = arguments;
                    switch (o.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, o[0]);
                    case 2:
                        return !t.call(this, o[0], o[1]);
                    case 3:
                        return !t.call(this, o[0], o[1], o[2])
                    }
                    return !t.apply(this, o)
                }
            }
            function Yb(t) {
                return qm(2, t)
            }
            var Jb = Bv(function(t, o) {
                o = o.length == 1 && Me(o[0]) ? bt(o[0], di(ge())) : bt(Vt(o, 1), di(ge()));
                var l = o.length;
                return ke(function(c) {
                    for (var m = -1, v = $t(c.length, l); ++m < v; )
                        c[m] = o[m].call(this, c[m]);
                    return ui(t, this, c)
                })
            })
              , jc = ke(function(t, o) {
                var l = Hn(o, Go(jc));
                return In(t, Ue, n, o, l)
            })
              , Jm = ke(function(t, o) {
                var l = Hn(o, Go(Jm));
                return In(t, ft, n, o, l)
            })
              , Xb = wn(function(t, o) {
                return In(t, E, n, n, n, o)
            });
            function eC(t, o) {
                if (typeof t != "function")
                    throw new xi(i);
                return o = o === n ? o : De(o),
                ke(t, o)
            }
            function tC(t, o) {
                if (typeof t != "function")
                    throw new xi(i);
                return o = o == null ? 0 : Pt(De(o), 0),
                ke(function(l) {
                    var c = l[o]
                      , m = Yn(l, 0, o);
                    return c && Wn(m, c),
                    ui(t, this, m)
                })
            }
            function iC(t, o, l) {
                var c = !0
                  , m = !0;
                if (typeof t != "function")
                    throw new xi(i);
                return St(l) && (c = "leading"in l ? !!l.leading : c,
                m = "trailing"in l ? !!l.trailing : m),
                Ym(t, o, {
                    leading: c,
                    maxWait: o,
                    trailing: m
                })
            }
            function nC(t) {
                return Gm(t, 1)
            }
            function oC(t, o) {
                return jc(Mc(o), t)
            }
            function sC() {
                if (!arguments.length)
                    return [];
                var t = arguments[0];
                return Me(t) ? t : [t]
            }
            function rC(t) {
                return wi(t, j)
            }
            function aC(t, o) {
                return o = typeof o == "function" ? o : n,
                wi(t, j, o)
            }
            function lC(t) {
                return wi(t, y | j)
            }
            function cC(t, o) {
                return o = typeof o == "function" ? o : n,
                wi(t, y | j, o)
            }
            function uC(t, o) {
                return o == null || Vd(t, o, At(o))
            }
            function qi(t, o) {
                return t === o || t !== t && o !== o
            }
            var dC = ma(hc)
              , mC = ma(function(t, o) {
                return t >= o
            })
              , Mo = Hd(function() {
                return arguments
            }()) ? Hd : function(t) {
                return xt(t) && et.call(t, "callee") && !kd.call(t, "callee")
            }
              , Me = P.isArray
              , pC = md ? di(md) : Sv;
            function Xt(t) {
                return t != null && Sa(t.length) && !Tn(t)
            }
            function wt(t) {
                return xt(t) && Xt(t)
            }
            function hC(t) {
                return t === !0 || t === !1 || xt(t) && Gt(t) == Ms
            }
            var Jn = D_ || Xc
              , fC = pd ? di(pd) : yv;
            function gC(t) {
                return xt(t) && t.nodeType === 1 && !qs(t)
            }
            function _C(t) {
                if (t == null)
                    return !0;
                if (Xt(t) && (Me(t) || typeof t == "string" || typeof t.splice == "function" || Jn(t) || qo(t) || Mo(t)))
                    return !t.length;
                var o = Ut(t);
                if (o == zi || o == Wi)
                    return !t.size;
                if (Hs(t))
                    return !_c(t).length;
                for (var l in t)
                    if (et.call(t, l))
                        return !1;
                return !0
            }
            function vC(t, o) {
                return js(t, o)
            }
            function bC(t, o, l) {
                l = typeof l == "function" ? l : n;
                var c = l ? l(t, o) : n;
                return c === n ? js(t, o, n, l) : !!c
            }
            function zc(t) {
                if (!xt(t))
                    return !1;
                var o = Gt(t);
                return o == Nr || o == jf || typeof t.message == "string" && typeof t.name == "string" && !qs(t)
            }
            function CC(t) {
                return typeof t == "number" && Nd(t)
            }
            function Tn(t) {
                if (!St(t))
                    return !1;
                var o = Gt(t);
                return o == Ar || o == $u || o == Uf || o == Wf
            }
            function Xm(t) {
                return typeof t == "number" && t == De(t)
            }
            function Sa(t) {
                return typeof t == "number" && t > -1 && t % 1 == 0 && t <= jn
            }
            function St(t) {
                var o = typeof t;
                return t != null && (o == "object" || o == "function")
            }
            function xt(t) {
                return t != null && typeof t == "object"
            }
            var ep = hd ? di(hd) : Iv;
            function SC(t, o) {
                return t === o || gc(t, o, Nc(o))
            }
            function yC(t, o, l) {
                return l = typeof l == "function" ? l : n,
                gc(t, o, Nc(o), l)
            }
            function xC(t) {
                return tp(t) && t != +t
            }
            function IC(t) {
                if (a6(t))
                    throw new we(e);
                return Gd(t)
            }
            function wC(t) {
                return t === null
            }
            function MC(t) {
                return t == null
            }
            function tp(t) {
                return typeof t == "number" || xt(t) && Gt(t) == Ds
            }
            function qs(t) {
                if (!xt(t) || Gt(t) != Cn)
                    return !1;
                var o = Kr(t);
                if (o === null)
                    return !0;
                var l = et.call(o, "constructor") && o.constructor;
                return typeof l == "function" && l instanceof l && Wr.call(l) == y_
            }
            var Wc = fd ? di(fd) : wv;
            function TC(t) {
                return Xm(t) && t >= -jn && t <= jn
            }
            var ip = gd ? di(gd) : Mv;
            function ya(t) {
                return typeof t == "string" || !Me(t) && xt(t) && Gt(t) == Ps
            }
            function pi(t) {
                return typeof t == "symbol" || xt(t) && Gt(t) == Fr
            }
            var qo = _d ? di(_d) : Tv;
            function DC(t) {
                return t === n
            }
            function EC(t) {
                return xt(t) && Ut(t) == ks
            }
            function PC(t) {
                return xt(t) && Gt(t) == Gf
            }
            var kC = ma(vc)
              , OC = ma(function(t, o) {
                return t <= o
            });
            function np(t) {
                if (!t)
                    return [];
                if (Xt(t))
                    return ya(t) ? Hi(t) : Jt(t);
                if (As && t[As])
                    return u_(t[As]());
                var o = Ut(t)
                  , l = o == zi ? sc : o == Wi ? Ur : Ko;
                return l(t)
            }
            function Dn(t) {
                if (!t)
                    return t === 0 ? t : 0;
                if (t = Di(t),
                t === _o || t === -_o) {
                    var o = t < 0 ? -1 : 1;
                    return o * Lf
                }
                return t === t ? t : 0
            }
            function De(t) {
                var o = Dn(t)
                  , l = o % 1;
                return o === o ? l ? o - l : o : 0
            }
            function op(t) {
                return t ? yo(De(t), 0, en) : 0
            }
            function Di(t) {
                if (typeof t == "number")
                    return t;
                if (pi(t))
                    return kr;
                if (St(t)) {
                    var o = typeof t.valueOf == "function" ? t.valueOf() : t;
                    t = St(o) ? o + "" : o
                }
                if (typeof t != "string")
                    return t === 0 ? t : +t;
                t = xd(t);
                var l = pg.test(t);
                return l || fg.test(t) ? qg(t.slice(2), l ? 2 : 8) : mg.test(t) ? kr : +t
            }
            function sp(t) {
                return nn(t, ei(t))
            }
            function NC(t) {
                return t ? yo(De(t), -jn, jn) : t === 0 ? t : 0
            }
            function Qe(t) {
                return t == null ? "" : mi(t)
            }
            var AC = Wo(function(t, o) {
                if (Hs(o) || Xt(o)) {
                    nn(o, At(o), t);
                    return
                }
                for (var l in o)
                    et.call(o, l) && Vs(t, l, o[l])
            })
              , rp = Wo(function(t, o) {
                nn(o, ei(o), t)
            })
              , xa = Wo(function(t, o, l, c) {
                nn(o, ei(o), t, c)
            })
              , FC = Wo(function(t, o, l, c) {
                nn(o, At(o), t, c)
            })
              , RC = wn(dc);
            function LC(t, o) {
                var l = zo(t);
                return o == null ? l : Bd(l, o)
            }
            var BC = ke(function(t, o) {
                t = rt(t);
                var l = -1
                  , c = o.length
                  , m = c > 2 ? o[2] : n;
                for (m && qt(o[0], o[1], m) && (c = 1); ++l < c; )
                    for (var v = o[l], S = ei(v), x = -1, T = S.length; ++x < T; ) {
                        var A = S[x]
                          , F = t[A];
                        (F === n || qi(F, $o[A]) && !et.call(t, A)) && (t[A] = v[A])
                    }
                return t
            })
              , VC = ke(function(t) {
                return t.push(n, xm),
                ui(ap, n, t)
            });
            function $C(t, o) {
                return bd(t, ge(o, 3), tn)
            }
            function UC(t, o) {
                return bd(t, ge(o, 3), pc)
            }
            function jC(t, o) {
                return t == null ? t : mc(t, ge(o, 3), ei)
            }
            function zC(t, o) {
                return t == null ? t : zd(t, ge(o, 3), ei)
            }
            function WC(t, o) {
                return t && tn(t, ge(o, 3))
            }
            function HC(t, o) {
                return t && pc(t, ge(o, 3))
            }
            function GC(t) {
                return t == null ? [] : oa(t, At(t))
            }
            function qC(t) {
                return t == null ? [] : oa(t, ei(t))
            }
            function Hc(t, o, l) {
                var c = t == null ? n : xo(t, o);
                return c === n ? l : c
            }
            function KC(t, o) {
                return t != null && Mm(t, o, _v)
            }
            function Gc(t, o) {
                return t != null && Mm(t, o, vv)
            }
            var QC = vm(function(t, o, l) {
                o != null && typeof o.toString != "function" && (o = Hr.call(o)),
                t[o] = l
            }, Kc(ti))
              , ZC = vm(function(t, o, l) {
                o != null && typeof o.toString != "function" && (o = Hr.call(o)),
                et.call(t, o) ? t[o].push(l) : t[o] = [l]
            }, ge)
              , YC = ke(Us);
            function At(t) {
                return Xt(t) ? Rd(t) : _c(t)
            }
            function ei(t) {
                return Xt(t) ? Rd(t, !0) : Dv(t)
            }
            function JC(t, o) {
                var l = {};
                return o = ge(o, 3),
                tn(t, function(c, m, v) {
                    xn(l, o(c, m, v), c)
                }),
                l
            }
            function XC(t, o) {
                var l = {};
                return o = ge(o, 3),
                tn(t, function(c, m, v) {
                    xn(l, m, o(c, m, v))
                }),
                l
            }
            var eS = Wo(function(t, o, l) {
                sa(t, o, l)
            })
              , ap = Wo(function(t, o, l, c) {
                sa(t, o, l, c)
            })
              , tS = wn(function(t, o) {
                var l = {};
                if (t == null)
                    return l;
                var c = !1;
                o = bt(o, function(v) {
                    return v = Zn(v, t),
                    c || (c = v.length > 1),
                    v
                }),
                nn(t, kc(t), l),
                c && (l = wi(l, y | O | j, Qv));
                for (var m = o.length; m--; )
                    xc(l, o[m]);
                return l
            });
            function iS(t, o) {
                return lp(t, Ca(ge(o)))
            }
            var nS = wn(function(t, o) {
                return t == null ? {} : Pv(t, o)
            });
            function lp(t, o) {
                if (t == null)
                    return {};
                var l = bt(kc(t), function(c) {
                    return [c]
                });
                return o = ge(o),
                Xd(t, l, function(c, m) {
                    return o(c, m[0])
                })
            }
            function oS(t, o, l) {
                o = Zn(o, t);
                var c = -1
                  , m = o.length;
                for (m || (m = 1,
                t = n); ++c < m; ) {
                    var v = t == null ? n : t[on(o[c])];
                    v === n && (c = m,
                    v = l),
                    t = Tn(v) ? v.call(t) : v
                }
                return t
            }
            function sS(t, o, l) {
                return t == null ? t : zs(t, o, l)
            }
            function rS(t, o, l, c) {
                return c = typeof c == "function" ? c : n,
                t == null ? t : zs(t, o, l, c)
            }
            var cp = Sm(At)
              , up = Sm(ei);
            function aS(t, o, l) {
                var c = Me(t)
                  , m = c || Jn(t) || qo(t);
                if (o = ge(o, 4),
                l == null) {
                    var v = t && t.constructor;
                    m ? l = c ? new v : [] : St(t) ? l = Tn(v) ? zo(Kr(t)) : {} : l = {}
                }
                return (m ? yi : tn)(t, function(S, x, T) {
                    return o(l, S, x, T)
                }),
                l
            }
            function lS(t, o) {
                return t == null ? !0 : xc(t, o)
            }
            function cS(t, o, l) {
                return t == null ? t : om(t, o, Mc(l))
            }
            function uS(t, o, l, c) {
                return c = typeof c == "function" ? c : n,
                t == null ? t : om(t, o, Mc(l), c)
            }
            function Ko(t) {
                return t == null ? [] : oc(t, At(t))
            }
            function dS(t) {
                return t == null ? [] : oc(t, ei(t))
            }
            function mS(t, o, l) {
                return l === n && (l = o,
                o = n),
                l !== n && (l = Di(l),
                l = l === l ? l : 0),
                o !== n && (o = Di(o),
                o = o === o ? o : 0),
                yo(Di(t), o, l)
            }
            function pS(t, o, l) {
                return o = Dn(o),
                l === n ? (l = o,
                o = 0) : l = Dn(l),
                t = Di(t),
                bv(t, o, l)
            }
            function hS(t, o, l) {
                if (l && typeof l != "boolean" && qt(t, o, l) && (o = l = n),
                l === n && (typeof o == "boolean" ? (l = o,
                o = n) : typeof t == "boolean" && (l = t,
                t = n)),
                t === n && o === n ? (t = 0,
                o = 1) : (t = Dn(t),
                o === n ? (o = t,
                t = 0) : o = Dn(o)),
                t > o) {
                    var c = t;
                    t = o,
                    o = c
                }
                if (l || t % 1 || o % 1) {
                    var m = Ad();
                    return $t(t + m * (o - t + Gg("1e-" + ((m + "").length - 1))), o)
                }
                return Cc(t, o)
            }
            var fS = Ho(function(t, o, l) {
                return o = o.toLowerCase(),
                t + (l ? dp(o) : o)
            });
            function dp(t) {
                return qc(Qe(t).toLowerCase())
            }
            function mp(t) {
                return t = Qe(t),
                t && t.replace(_g, s_).replace(Rg, "")
            }
            function gS(t, o, l) {
                t = Qe(t),
                o = mi(o);
                var c = t.length;
                l = l === n ? c : yo(De(l), 0, c);
                var m = l;
                return l -= o.length,
                l >= 0 && t.slice(l, m) == o
            }
            function _S(t) {
                return t = Qe(t),
                t && Yf.test(t) ? t.replace(zu, r_) : t
            }
            function vS(t) {
                return t = Qe(t),
                t && ng.test(t) ? t.replace(jl, "\\$&") : t
            }
            var bS = Ho(function(t, o, l) {
                return t + (l ? "-" : "") + o.toLowerCase()
            })
              , CS = Ho(function(t, o, l) {
                return t + (l ? " " : "") + o.toLowerCase()
            })
              , SS = fm("toLowerCase");
            function yS(t, o, l) {
                t = Qe(t),
                o = De(o);
                var c = o ? Vo(t) : 0;
                if (!o || c >= o)
                    return t;
                var m = (o - c) / 2;
                return da(Jr(m), l) + t + da(Yr(m), l)
            }
            function xS(t, o, l) {
                t = Qe(t),
                o = De(o);
                var c = o ? Vo(t) : 0;
                return o && c < o ? t + da(o - c, l) : t
            }
            function IS(t, o, l) {
                t = Qe(t),
                o = De(o);
                var c = o ? Vo(t) : 0;
                return o && c < o ? da(o - c, l) + t : t
            }
            function wS(t, o, l) {
                return l || o == null ? o = 0 : o && (o = +o),
                O_(Qe(t).replace(zl, ""), o || 0)
            }
            function MS(t, o, l) {
                return (l ? qt(t, o, l) : o === n) ? o = 1 : o = De(o),
                Sc(Qe(t), o)
            }
            function TS() {
                var t = arguments
                  , o = Qe(t[0]);
                return t.length < 3 ? o : o.replace(t[1], t[2])
            }
            var DS = Ho(function(t, o, l) {
                return t + (l ? "_" : "") + o.toLowerCase()
            });
            function ES(t, o, l) {
                return l && typeof l != "number" && qt(t, o, l) && (o = l = n),
                l = l === n ? en : l >>> 0,
                l ? (t = Qe(t),
                t && (typeof o == "string" || o != null && !Wc(o)) && (o = mi(o),
                !o && Bo(t)) ? Yn(Hi(t), 0, l) : t.split(o, l)) : []
            }
            var PS = Ho(function(t, o, l) {
                return t + (l ? " " : "") + qc(o)
            });
            function kS(t, o, l) {
                return t = Qe(t),
                l = l == null ? 0 : yo(De(l), 0, t.length),
                o = mi(o),
                t.slice(l, l + o.length) == o
            }
            function OS(t, o, l) {
                var c = _.templateSettings;
                l && qt(t, o, l) && (o = n),
                t = Qe(t),
                o = xa({}, o, c, ym);
                var m = xa({}, o.imports, c.imports, ym), v = At(m), S = oc(m, v), x, T, A = 0, F = o.interpolate || Rr, U = "__p += '", Y = rc((o.escape || Rr).source + "|" + F.source + "|" + (F === Wu ? dg : Rr).source + "|" + (o.evaluate || Rr).source + "|$", "g"), ce = "//# sourceURL=" + (et.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ug + "]") + `
`;
                t.replace(Y, function(be, Ae, Be, hi, Kt, fi) {
                    return Be || (Be = hi),
                    U += t.slice(A, fi).replace(vg, a_),
                    Ae && (x = !0,
                    U += `' +
__e(` + Ae + `) +
'`),
                    Kt && (T = !0,
                    U += `';
` + Kt + `;
__p += '`),
                    Be && (U += `' +
((__t = (` + Be + `)) == null ? '' : __t) +
'`),
                    A = fi + be.length,
                    be
                }),
                U += `';
`;
                var ve = et.call(o, "variable") && o.variable;
                if (!ve)
                    U = `with (obj) {
` + U + `
}
`;
                else if (cg.test(ve))
                    throw new we(a);
                U = (T ? U.replace(qf, "") : U).replace(Kf, "$1").replace(Qf, "$1;"),
                U = "function(" + (ve || "obj") + `) {
` + (ve ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (x ? ", __e = _.escape" : "") + (T ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + U + `return __p
}`;
                var Pe = hp(function() {
                    return He(v, ce + "return " + U).apply(n, S)
                });
                if (Pe.source = U,
                zc(Pe))
                    throw Pe;
                return Pe
            }
            function NS(t) {
                return Qe(t).toLowerCase()
            }
            function AS(t) {
                return Qe(t).toUpperCase()
            }
            function FS(t, o, l) {
                if (t = Qe(t),
                t && (l || o === n))
                    return xd(t);
                if (!t || !(o = mi(o)))
                    return t;
                var c = Hi(t)
                  , m = Hi(o)
                  , v = Id(c, m)
                  , S = wd(c, m) + 1;
                return Yn(c, v, S).join("")
            }
            function RS(t, o, l) {
                if (t = Qe(t),
                t && (l || o === n))
                    return t.slice(0, Td(t) + 1);
                if (!t || !(o = mi(o)))
                    return t;
                var c = Hi(t)
                  , m = wd(c, Hi(o)) + 1;
                return Yn(c, 0, m).join("")
            }
            function LS(t, o, l) {
                if (t = Qe(t),
                t && (l || o === n))
                    return t.replace(zl, "");
                if (!t || !(o = mi(o)))
                    return t;
                var c = Hi(t)
                  , m = Id(c, Hi(o));
                return Yn(c, m).join("")
            }
            function BS(t, o) {
                var l = ws
                  , c = V;
                if (St(o)) {
                    var m = "separator"in o ? o.separator : m;
                    l = "length"in o ? De(o.length) : l,
                    c = "omission"in o ? mi(o.omission) : c
                }
                t = Qe(t);
                var v = t.length;
                if (Bo(t)) {
                    var S = Hi(t);
                    v = S.length
                }
                if (l >= v)
                    return t;
                var x = l - Vo(c);
                if (x < 1)
                    return c;
                var T = S ? Yn(S, 0, x).join("") : t.slice(0, x);
                if (m === n)
                    return T + c;
                if (S && (x += T.length - x),
                Wc(m)) {
                    if (t.slice(x).search(m)) {
                        var A, F = T;
                        for (m.global || (m = rc(m.source, Qe(Hu.exec(m)) + "g")),
                        m.lastIndex = 0; A = m.exec(F); )
                            var U = A.index;
                        T = T.slice(0, U === n ? x : U)
                    }
                } else if (t.indexOf(mi(m), x) != x) {
                    var Y = T.lastIndexOf(m);
                    Y > -1 && (T = T.slice(0, Y))
                }
                return T + c
            }
            function VS(t) {
                return t = Qe(t),
                t && Zf.test(t) ? t.replace(ju, h_) : t
            }
            var $S = Ho(function(t, o, l) {
                return t + (l ? " " : "") + o.toUpperCase()
            })
              , qc = fm("toUpperCase");
            function pp(t, o, l) {
                return t = Qe(t),
                o = l ? n : o,
                o === n ? c_(t) ? __(t) : e_(t) : t.match(o) || []
            }
            var hp = ke(function(t, o) {
                try {
                    return ui(t, n, o)
                } catch (l) {
                    return zc(l) ? l : new we(l)
                }
            })
              , US = wn(function(t, o) {
                return yi(o, function(l) {
                    l = on(l),
                    xn(t, l, Uc(t[l], t))
                }),
                t
            });
            function jS(t) {
                var o = t == null ? 0 : t.length
                  , l = ge();
                return t = o ? bt(t, function(c) {
                    if (typeof c[1] != "function")
                        throw new xi(i);
                    return [l(c[0]), c[1]]
                }) : [],
                ke(function(c) {
                    for (var m = -1; ++m < o; ) {
                        var v = t[m];
                        if (ui(v[0], this, c))
                            return ui(v[1], this, c)
                    }
                })
            }
            function zS(t) {
                return hv(wi(t, y))
            }
            function Kc(t) {
                return function() {
                    return t
                }
            }
            function WS(t, o) {
                return t == null || t !== t ? o : t
            }
            var HS = _m()
              , GS = _m(!0);
            function ti(t) {
                return t
            }
            function Qc(t) {
                return qd(typeof t == "function" ? t : wi(t, y))
            }
            function qS(t) {
                return Qd(wi(t, y))
            }
            function KS(t, o) {
                return Zd(t, wi(o, y))
            }
            var QS = ke(function(t, o) {
                return function(l) {
                    return Us(l, t, o)
                }
            })
              , ZS = ke(function(t, o) {
                return function(l) {
                    return Us(t, l, o)
                }
            });
            function Zc(t, o, l) {
                var c = At(o)
                  , m = oa(o, c);
                l == null && !(St(o) && (m.length || !c.length)) && (l = o,
                o = t,
                t = this,
                m = oa(o, At(o)));
                var v = !(St(l) && "chain"in l) || !!l.chain
                  , S = Tn(t);
                return yi(m, function(x) {
                    var T = o[x];
                    t[x] = T,
                    S && (t.prototype[x] = function() {
                        var A = this.__chain__;
                        if (v || A) {
                            var F = t(this.__wrapped__)
                              , U = F.__actions__ = Jt(this.__actions__);
                            return U.push({
                                func: T,
                                args: arguments,
                                thisArg: t
                            }),
                            F.__chain__ = A,
                            F
                        }
                        return T.apply(t, Wn([this.value()], arguments))
                    }
                    )
                }),
                t
            }
            function YS() {
                return Nt._ === this && (Nt._ = x_),
                this
            }
            function Yc() {}
            function JS(t) {
                return t = De(t),
                ke(function(o) {
                    return Yd(o, t)
                })
            }
            var XS = Dc(bt)
              , ey = Dc(vd)
              , ty = Dc(Xl);
            function fp(t) {
                return Fc(t) ? ec(on(t)) : kv(t)
            }
            function iy(t) {
                return function(o) {
                    return t == null ? n : xo(t, o)
                }
            }
            var ny = bm()
              , oy = bm(!0);
            function Jc() {
                return []
            }
            function Xc() {
                return !1
            }
            function sy() {
                return {}
            }
            function ry() {
                return ""
            }
            function ay() {
                return !0
            }
            function ly(t, o) {
                if (t = De(t),
                t < 1 || t > jn)
                    return [];
                var l = en
                  , c = $t(t, en);
                o = ge(o),
                t -= en;
                for (var m = nc(c, o); ++l < t; )
                    o(l);
                return m
            }
            function cy(t) {
                return Me(t) ? bt(t, on) : pi(t) ? [t] : Jt(Fm(Qe(t)))
            }
            function uy(t) {
                var o = ++S_;
                return Qe(t) + o
            }
            var dy = ua(function(t, o) {
                return t + o
            }, 0)
              , my = Ec("ceil")
              , py = ua(function(t, o) {
                return t / o
            }, 1)
              , hy = Ec("floor");
            function fy(t) {
                return t && t.length ? na(t, ti, hc) : n
            }
            function gy(t, o) {
                return t && t.length ? na(t, ge(o, 2), hc) : n
            }
            function _y(t) {
                return Sd(t, ti)
            }
            function vy(t, o) {
                return Sd(t, ge(o, 2))
            }
            function by(t) {
                return t && t.length ? na(t, ti, vc) : n
            }
            function Cy(t, o) {
                return t && t.length ? na(t, ge(o, 2), vc) : n
            }
            var Sy = ua(function(t, o) {
                return t * o
            }, 1)
              , yy = Ec("round")
              , xy = ua(function(t, o) {
                return t - o
            }, 0);
            function Iy(t) {
                return t && t.length ? ic(t, ti) : 0
            }
            function wy(t, o) {
                return t && t.length ? ic(t, ge(o, 2)) : 0
            }
            return _.after = qb,
            _.ary = Gm,
            _.assign = AC,
            _.assignIn = rp,
            _.assignInWith = xa,
            _.assignWith = FC,
            _.at = RC,
            _.before = qm,
            _.bind = Uc,
            _.bindAll = US,
            _.bindKey = Km,
            _.castArray = sC,
            _.chain = zm,
            _.chunk = h6,
            _.compact = f6,
            _.concat = g6,
            _.cond = jS,
            _.conforms = zS,
            _.constant = Kc,
            _.countBy = Ib,
            _.create = LC,
            _.curry = Qm,
            _.curryRight = Zm,
            _.debounce = Ym,
            _.defaults = BC,
            _.defaultsDeep = VC,
            _.defer = Kb,
            _.delay = Qb,
            _.difference = _6,
            _.differenceBy = v6,
            _.differenceWith = b6,
            _.drop = C6,
            _.dropRight = S6,
            _.dropRightWhile = y6,
            _.dropWhile = x6,
            _.fill = I6,
            _.filter = Mb,
            _.flatMap = Eb,
            _.flatMapDeep = Pb,
            _.flatMapDepth = kb,
            _.flatten = Vm,
            _.flattenDeep = w6,
            _.flattenDepth = M6,
            _.flip = Zb,
            _.flow = HS,
            _.flowRight = GS,
            _.fromPairs = T6,
            _.functions = GC,
            _.functionsIn = qC,
            _.groupBy = Ob,
            _.initial = E6,
            _.intersection = P6,
            _.intersectionBy = k6,
            _.intersectionWith = O6,
            _.invert = QC,
            _.invertBy = ZC,
            _.invokeMap = Ab,
            _.iteratee = Qc,
            _.keyBy = Fb,
            _.keys = At,
            _.keysIn = ei,
            _.map = _a,
            _.mapKeys = JC,
            _.mapValues = XC,
            _.matches = qS,
            _.matchesProperty = KS,
            _.memoize = ba,
            _.merge = eS,
            _.mergeWith = ap,
            _.method = QS,
            _.methodOf = ZS,
            _.mixin = Zc,
            _.negate = Ca,
            _.nthArg = JS,
            _.omit = tS,
            _.omitBy = iS,
            _.once = Yb,
            _.orderBy = Rb,
            _.over = XS,
            _.overArgs = Jb,
            _.overEvery = ey,
            _.overSome = ty,
            _.partial = jc,
            _.partialRight = Jm,
            _.partition = Lb,
            _.pick = nS,
            _.pickBy = lp,
            _.property = fp,
            _.propertyOf = iy,
            _.pull = R6,
            _.pullAll = Um,
            _.pullAllBy = L6,
            _.pullAllWith = B6,
            _.pullAt = V6,
            _.range = ny,
            _.rangeRight = oy,
            _.rearg = Xb,
            _.reject = $b,
            _.remove = $6,
            _.rest = eC,
            _.reverse = Vc,
            _.sampleSize = jb,
            _.set = sS,
            _.setWith = rS,
            _.shuffle = zb,
            _.slice = U6,
            _.sortBy = Gb,
            _.sortedUniq = K6,
            _.sortedUniqBy = Q6,
            _.split = ES,
            _.spread = tC,
            _.tail = Z6,
            _.take = Y6,
            _.takeRight = J6,
            _.takeRightWhile = X6,
            _.takeWhile = eb,
            _.tap = fb,
            _.throttle = iC,
            _.thru = ga,
            _.toArray = np,
            _.toPairs = cp,
            _.toPairsIn = up,
            _.toPath = cy,
            _.toPlainObject = sp,
            _.transform = aS,
            _.unary = nC,
            _.union = tb,
            _.unionBy = ib,
            _.unionWith = nb,
            _.uniq = ob,
            _.uniqBy = sb,
            _.uniqWith = rb,
            _.unset = lS,
            _.unzip = $c,
            _.unzipWith = jm,
            _.update = cS,
            _.updateWith = uS,
            _.values = Ko,
            _.valuesIn = dS,
            _.without = ab,
            _.words = pp,
            _.wrap = oC,
            _.xor = lb,
            _.xorBy = cb,
            _.xorWith = ub,
            _.zip = db,
            _.zipObject = mb,
            _.zipObjectDeep = pb,
            _.zipWith = hb,
            _.entries = cp,
            _.entriesIn = up,
            _.extend = rp,
            _.extendWith = xa,
            Zc(_, _),
            _.add = dy,
            _.attempt = hp,
            _.camelCase = fS,
            _.capitalize = dp,
            _.ceil = my,
            _.clamp = mS,
            _.clone = rC,
            _.cloneDeep = lC,
            _.cloneDeepWith = cC,
            _.cloneWith = aC,
            _.conformsTo = uC,
            _.deburr = mp,
            _.defaultTo = WS,
            _.divide = py,
            _.endsWith = gS,
            _.eq = qi,
            _.escape = _S,
            _.escapeRegExp = vS,
            _.every = wb,
            _.find = Tb,
            _.findIndex = Lm,
            _.findKey = $C,
            _.findLast = Db,
            _.findLastIndex = Bm,
            _.findLastKey = UC,
            _.floor = hy,
            _.forEach = Wm,
            _.forEachRight = Hm,
            _.forIn = jC,
            _.forInRight = zC,
            _.forOwn = WC,
            _.forOwnRight = HC,
            _.get = Hc,
            _.gt = dC,
            _.gte = mC,
            _.has = KC,
            _.hasIn = Gc,
            _.head = $m,
            _.identity = ti,
            _.includes = Nb,
            _.indexOf = D6,
            _.inRange = pS,
            _.invoke = YC,
            _.isArguments = Mo,
            _.isArray = Me,
            _.isArrayBuffer = pC,
            _.isArrayLike = Xt,
            _.isArrayLikeObject = wt,
            _.isBoolean = hC,
            _.isBuffer = Jn,
            _.isDate = fC,
            _.isElement = gC,
            _.isEmpty = _C,
            _.isEqual = vC,
            _.isEqualWith = bC,
            _.isError = zc,
            _.isFinite = CC,
            _.isFunction = Tn,
            _.isInteger = Xm,
            _.isLength = Sa,
            _.isMap = ep,
            _.isMatch = SC,
            _.isMatchWith = yC,
            _.isNaN = xC,
            _.isNative = IC,
            _.isNil = MC,
            _.isNull = wC,
            _.isNumber = tp,
            _.isObject = St,
            _.isObjectLike = xt,
            _.isPlainObject = qs,
            _.isRegExp = Wc,
            _.isSafeInteger = TC,
            _.isSet = ip,
            _.isString = ya,
            _.isSymbol = pi,
            _.isTypedArray = qo,
            _.isUndefined = DC,
            _.isWeakMap = EC,
            _.isWeakSet = PC,
            _.join = N6,
            _.kebabCase = bS,
            _.last = Ti,
            _.lastIndexOf = A6,
            _.lowerCase = CS,
            _.lowerFirst = SS,
            _.lt = kC,
            _.lte = OC,
            _.max = fy,
            _.maxBy = gy,
            _.mean = _y,
            _.meanBy = vy,
            _.min = by,
            _.minBy = Cy,
            _.stubArray = Jc,
            _.stubFalse = Xc,
            _.stubObject = sy,
            _.stubString = ry,
            _.stubTrue = ay,
            _.multiply = Sy,
            _.nth = F6,
            _.noConflict = YS,
            _.noop = Yc,
            _.now = va,
            _.pad = yS,
            _.padEnd = xS,
            _.padStart = IS,
            _.parseInt = wS,
            _.random = hS,
            _.reduce = Bb,
            _.reduceRight = Vb,
            _.repeat = MS,
            _.replace = TS,
            _.result = oS,
            _.round = yy,
            _.runInContext = M,
            _.sample = Ub,
            _.size = Wb,
            _.snakeCase = DS,
            _.some = Hb,
            _.sortedIndex = j6,
            _.sortedIndexBy = z6,
            _.sortedIndexOf = W6,
            _.sortedLastIndex = H6,
            _.sortedLastIndexBy = G6,
            _.sortedLastIndexOf = q6,
            _.startCase = PS,
            _.startsWith = kS,
            _.subtract = xy,
            _.sum = Iy,
            _.sumBy = wy,
            _.template = OS,
            _.times = ly,
            _.toFinite = Dn,
            _.toInteger = De,
            _.toLength = op,
            _.toLower = NS,
            _.toNumber = Di,
            _.toSafeInteger = NC,
            _.toString = Qe,
            _.toUpper = AS,
            _.trim = FS,
            _.trimEnd = RS,
            _.trimStart = LS,
            _.truncate = BS,
            _.unescape = VS,
            _.uniqueId = uy,
            _.upperCase = $S,
            _.upperFirst = qc,
            _.each = Wm,
            _.eachRight = Hm,
            _.first = $m,
            Zc(_, function() {
                var t = {};
                return tn(_, function(o, l) {
                    et.call(_.prototype, l) || (t[l] = o)
                }),
                t
            }(), {
                chain: !1
            }),
            _.VERSION = s,
            yi(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
                _[t].placeholder = _
            }),
            yi(["drop", "take"], function(t, o) {
                Le.prototype[t] = function(l) {
                    l = l === n ? 1 : Pt(De(l), 0);
                    var c = this.__filtered__ && !o ? new Le(this) : this.clone();
                    return c.__filtered__ ? c.__takeCount__ = $t(l, c.__takeCount__) : c.__views__.push({
                        size: $t(l, en),
                        type: t + (c.__dir__ < 0 ? "Right" : "")
                    }),
                    c
                }
                ,
                Le.prototype[t + "Right"] = function(l) {
                    return this.reverse()[t](l).reverse()
                }
            }),
            yi(["filter", "map", "takeWhile"], function(t, o) {
                var l = o + 1
                  , c = l == Vu || l == Rf;
                Le.prototype[t] = function(m) {
                    var v = this.clone();
                    return v.__iteratees__.push({
                        iteratee: ge(m, 3),
                        type: l
                    }),
                    v.__filtered__ = v.__filtered__ || c,
                    v
                }
            }),
            yi(["head", "last"], function(t, o) {
                var l = "take" + (o ? "Right" : "");
                Le.prototype[t] = function() {
                    return this[l](1).value()[0]
                }
            }),
            yi(["initial", "tail"], function(t, o) {
                var l = "drop" + (o ? "" : "Right");
                Le.prototype[t] = function() {
                    return this.__filtered__ ? new Le(this) : this[l](1)
                }
            }),
            Le.prototype.compact = function() {
                return this.filter(ti)
            }
            ,
            Le.prototype.find = function(t) {
                return this.filter(t).head()
            }
            ,
            Le.prototype.findLast = function(t) {
                return this.reverse().find(t)
            }
            ,
            Le.prototype.invokeMap = ke(function(t, o) {
                return typeof t == "function" ? new Le(this) : this.map(function(l) {
                    return Us(l, t, o)
                })
            }),
            Le.prototype.reject = function(t) {
                return this.filter(Ca(ge(t)))
            }
            ,
            Le.prototype.slice = function(t, o) {
                t = De(t);
                var l = this;
                return l.__filtered__ && (t > 0 || o < 0) ? new Le(l) : (t < 0 ? l = l.takeRight(-t) : t && (l = l.drop(t)),
                o !== n && (o = De(o),
                l = o < 0 ? l.dropRight(-o) : l.take(o - t)),
                l)
            }
            ,
            Le.prototype.takeRightWhile = function(t) {
                return this.reverse().takeWhile(t).reverse()
            }
            ,
            Le.prototype.toArray = function() {
                return this.take(en)
            }
            ,
            tn(Le.prototype, function(t, o) {
                var l = /^(?:filter|find|map|reject)|While$/.test(o)
                  , c = /^(?:head|last)$/.test(o)
                  , m = _[c ? "take" + (o == "last" ? "Right" : "") : o]
                  , v = c || /^find/.test(o);
                m && (_.prototype[o] = function() {
                    var S = this.__wrapped__
                      , x = c ? [1] : arguments
                      , T = S instanceof Le
                      , A = x[0]
                      , F = T || Me(S)
                      , U = function(Ae) {
                        var Be = m.apply(_, Wn([Ae], x));
                        return c && Y ? Be[0] : Be
                    };
                    F && l && typeof A == "function" && A.length != 1 && (T = F = !1);
                    var Y = this.__chain__
                      , ce = !!this.__actions__.length
                      , ve = v && !Y
                      , Pe = T && !ce;
                    if (!v && F) {
                        S = Pe ? S : new Le(this);
                        var be = t.apply(S, x);
                        return be.__actions__.push({
                            func: ga,
                            args: [U],
                            thisArg: n
                        }),
                        new Ii(be,Y)
                    }
                    return ve && Pe ? t.apply(this, x) : (be = this.thru(U),
                    ve ? c ? be.value()[0] : be.value() : be)
                }
                )
            }),
            yi(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
                var o = jr[t]
                  , l = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru"
                  , c = /^(?:pop|shift)$/.test(t);
                _.prototype[t] = function() {
                    var m = arguments;
                    if (c && !this.__chain__) {
                        var v = this.value();
                        return o.apply(Me(v) ? v : [], m)
                    }
                    return this[l](function(S) {
                        return o.apply(Me(S) ? S : [], m)
                    })
                }
            }),
            tn(Le.prototype, function(t, o) {
                var l = _[o];
                if (l) {
                    var c = l.name + "";
                    et.call(jo, c) || (jo[c] = []),
                    jo[c].push({
                        name: o,
                        func: l
                    })
                }
            }),
            jo[ca(n, Ne).name] = [{
                name: "wrapper",
                func: n
            }],
            Le.prototype.clone = V_,
            Le.prototype.reverse = $_,
            Le.prototype.value = U_,
            _.prototype.at = gb,
            _.prototype.chain = _b,
            _.prototype.commit = vb,
            _.prototype.next = bb,
            _.prototype.plant = Sb,
            _.prototype.reverse = yb,
            _.prototype.toJSON = _.prototype.valueOf = _.prototype.value = xb,
            _.prototype.first = _.prototype.head,
            As && (_.prototype[As] = Cb),
            _
        }
          , Gn = v_();
        typeof define == "function" && typeof define.amd == "object" && define.amd ? (Nt._ = Gn,
        define(function() {
            return Gn
        })) : vo ? ((vo.exports = Gn)._ = Gn,
        Ql._ = Gn) : Nt._ = Gn
    }
    ).call(_s)
}
);
var Ot = function(n) {
    return n[n.GreaterThan = 0] = "GreaterThan",
    n[n.GreaterThanEqual = 1] = "GreaterThanEqual",
    n[n.LessThan = 2] = "LessThan",
    n[n.LessThanEqual = 3] = "LessThanEqual",
    n[n.Equal = 4] = "Equal",
    n[n.NotEqual = 5] = "NotEqual",
    n
}(Ot || {})
  , It = function(n) {
    return n[n.LastTradedPrice = 0] = "LastTradedPrice",
    n[n.LastTradedPriceVarPercent = 1] = "LastTradedPriceVarPercent",
    n[n.TotalNumberOfSharesTraded = 2] = "TotalNumberOfSharesTraded",
    n[n.BestBuyLimitQuantity_1 = 3] = "BestBuyLimitQuantity_1",
    n[n.BestSellLimitQuantity_1 = 4] = "BestSellLimitQuantity_1",
    n[n.ClosingPrice = 5] = "ClosingPrice",
    n[n.ClosingPriceVarPercent = 6] = "ClosingPriceVarPercent",
    n[n.BestBuyLimitPrice_1 = 7] = "BestBuyLimitPrice_1",
    n[n.BestSellLimitPrice_1 = 8] = "BestSellLimitPrice_1",
    n[n.TotalTradeValue = 9] = "TotalTradeValue",
    n
}(It || {})
  , ir = class {
    constructor(s, r, e, i=!1) {
        this.simpleConditions = [],
        this.notifiedConditionIsSeen = !1,
        this.symbolIsin = s,
        this.stockIsin = s,
        this.id = r,
        this.name = e,
        this.notifiedConditionIsSeen = i
    }
    isTrue(s) {
        return this.simpleConditions.every(r => {
            let e = s.find(i => i.field === r.fieldValue.field);
            return !(!e || !r.isTrue(e))
        }
        )
    }
}
  , nr = class {
    constructor(s, r) {
        this.fieldValue = s,
        this.operator = r
    }
    isTrue(s) {
        if (s.field != this.fieldValue.field)
            return !1;
        switch (this.operator) {
        case Ot.GreaterThan:
            return +s.value > +this.fieldValue.value;
        case Ot.GreaterThanEqual:
            return +s.value >= +this.fieldValue.value;
        case Ot.LessThan:
            return +s.value < +this.fieldValue.value;
        case Ot.LessThanEqual:
            return +s.value <= +this.fieldValue.value;
        case Ot.Equal:
            return +s.value == +this.fieldValue.value;
        case Ot.NotEqual:
            return +s.value != +this.fieldValue.value
        }
        return !1
    }
}
  , or = class {
    constructor(s) {
        this._conditionOperator = s
    }
    get conditionOperator() {
        return this._conditionOperator
    }
    get persianName() {
        switch (this.conditionOperator) {
        case Ot.GreaterThan:
            return "\u0628\u0632\u0631\u06AF\u062A\u0631 \u0627\u0632";
        case Ot.GreaterThanEqual:
            return "\u0628\u0632\u0631\u06AF\u062A\u0631 \u06CC\u0627 \u0645\u0633\u0627\u0648\u06CC";
        case Ot.LessThan:
            return "\u06A9\u0648\u0686\u06A9\u062A\u0631 \u0627\u0632";
        case Ot.LessThanEqual:
            return "\u06A9\u0648\u0686\u06A9\u062A\u0631 \u06CC\u0627 \u0645\u0633\u0627\u0648\u06CC";
        case Ot.Equal:
            return "\u0645\u0633\u0627\u0648\u06CC";
        case Ot.NotEqual:
            return "\u0645\u062E\u0627\u0644\u0641";
        default:
            return "\u062E\u0637\u0627: \u0639\u0645\u0644\u06AF\u0631 \u062A\u0639\u0631\u06CC\u0641 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A"
        }
    }
    get mathSymbol() {
        switch (this.conditionOperator) {
        case Ot.GreaterThan:
            return ">";
        case Ot.GreaterThanEqual:
            return "\u2265";
        case Ot.LessThan:
            return "<";
        case Ot.LessThanEqual:
            return "\u2264";
        case Ot.Equal:
            return "=";
        case Ot.NotEqual:
            return "\u2260";
        default:
            return "Error! operator not defined."
        }
    }
    get description() {
        return this.persianName + " (" + this.mathSymbol + ")"
    }
}
  , sr = class {
    constructor(s) {
        this._field = s
    }
    get field() {
        return this._field
    }
    get persianName() {
        switch (this.field) {
        case It.LastTradedPrice:
            return "\u0622\u062E\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A";
        case It.LastTradedPriceVarPercent:
            return "\u062F\u0631\u0635\u062F \u062A\u063A\u06CC\u06CC\u0631 \u0642\u06CC\u0645\u062A";
        case It.TotalNumberOfSharesTraded:
            return "\u062D\u062C\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062A";
        case It.BestBuyLimitQuantity_1:
            return "\u062D\u062C\u0645 \u062A\u0642\u0627\u0636\u0627";
        case It.BestSellLimitQuantity_1:
            return "\u062D\u062C\u0645 \u0639\u0631\u0636\u0647";
        case It.ClosingPrice:
            return "\u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC";
        case It.ClosingPriceVarPercent:
            return "\u062F\u0631\u0635\u062F \u062A\u063A\u06CC\u06CC\u0631 \u067E\u0627\u06CC\u0627\u0646\u06CC";
        case It.BestBuyLimitPrice_1:
            return "\u0642\u06CC\u0645\u062A \u062A\u0642\u0627\u0636\u0627";
        case It.BestSellLimitPrice_1:
            return "\u0642\u06CC\u0645\u062A \u0639\u0631\u0636\u0647";
        case It.TotalTradeValue:
            return "\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062A";
        default:
            return "\u062E\u0637\u0627: \u0622\u06CC\u062A\u0645 \u062A\u0639\u0631\u06CC\u0641 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A"
        }
    }
}
;
var ms = ( () => {
    let s = class s {
    }
    ;
    s.DelayBetweenRetryGetStockData = 1e3,
    s.DelayBetweenRetryGetStockListData = 1e3,
    s.MaxRetryForGettingStockData = 3,
    s.MaxRetryForGettingStockListData = 3,
    s.LongVibrateDuration = 300,
    s.ShortVibrateDuration = 100,
    s.SilentDuration = 100,
    s.TimeoutForPageNavigation = 50;
    let n = s;
    return n
}
)();
var Za = ( () => {
    let s = class s extends Yi {
        get crudUrl() {
            return this.mtsPath + this.apiUrls.easy + "StockCondition"
        }
        get bulkAddStockConditionItemsDtoUrl() {
            return this.mtsPath + this.apiUrls.easy + "StockCondition/BulkAdd"
        }
        get conditionalRiskAgreementUrl() {
            return this.mtsPath + this.apiUrls.easy + "StockCondition/riskAgreement"
        }
        get stockConditions() {
            return !this.userStockConditionSets || !this.userStockConditionSets.stockConditionSets || !this.userStockConditionSets.stockConditionSets.length ? [] : this.userStockConditionSets.stockConditionSets.map(i => i.stockConditionItems).reduce( (i, a) => i.concat(a))
        }
        get unseenNotifiedConditionsCount() {
            return this.stockConditions.filter(e => this.isConditionNotified(e) && !e.notifiedConditionIsSeen).length
        }
        get pendingConditions() {
            return this.stockConditions.filter(e => !this.isConditionNotified(e))
        }
        get pendingIsinsSet() {
            return new Set(this.pendingConditions.map(e => e.stockIsin))
        }
        get pendingIsinsArray() {
            return Array.from(this.pendingIsinsSet)
        }
        get stockConditionsStorageKey() {
            return this.accountService?.userAccountInfo?.value?.customerIsin ? "stockConditions-" + this.accountService?.userAccountInfo?.value?.customerIsin : null
        }
        get riskAgreementIsAccepted() {
            return this._riskAgreementIsAccepted
        }
        set riskAgreementIsAccepted(e) {
            this._riskAgreementIsAccepted = e,
            this.conditionalRiskAgreementSubject.next(e)
        }
        get conditionsSynched() {
            return !localStorage.getItem(this.stockConditionsStorageKey)
        }
        get notifiedConditionIds() {
            let e = localStorage.getItem(this.notifiedConditionIdsStorageKey);
            return e ? JSON.parse(e) : []
        }
        constructor() {
            super(),
            this.lsService = I(Bt),
            this.marketDataService = I(Li),
            this.notificationService = I(fn),
            this.decimalPipe = I(Wt),
            this.accountService = I(hn),
            this.symbolService = I(pt),
            this.userDeviceService = I(Un),
            this.timeService = I(ns),
            this.stockConditionSetSub = new at(void 0),
            this.stockConditionSetObs$ = this.stockConditionSetSub.asObservable().pipe(pe(Boolean)),
            this.stockConditionSetCountSub = new at(void 0),
            this.stockConditionSetCountObs$ = this.stockConditionSetCountSub.asObservable().pipe(pe(Boolean)),
            this.stockStates = {},
            this.stockSubs = {},
            this.stockIsinMapper = {},
            this.notifSubject = new ue,
            this.notif$ = this.notifSubject.asObservable(),
            this.notifiedConditionIdsStorageKey = "notifiedConditionIds",
            this.notifiedConditionDateKey = "notifiedConditionDate",
            this._riskAgreementIsAccepted = !1,
            this.newConditionSubject = new at(0),
            this.newConditionObs$ = this.newConditionSubject.asObservable(),
            this.conditionsSyncSubject = new ue,
            this.conditionsSync$ = this.conditionsSyncSubject.asObservable(),
            this.conditionsAreSetSubject = new ue,
            this.conditionsAreSet$ = this.conditionsAreSetSubject.asObservable(),
            this.conditionalRiskAgreementSubject = new at(!1),
            this.conditionalRiskAgreement$ = this.conditionalRiskAgreementSubject.asObservable(),
            this.showConditionalRiskAgreementSubject = new ue,
            this.showConditionalRiskAgreement$ = this.showConditionalRiskAgreementSubject.asObservable(),
            this.showAnalyticsRiskModalSubject = new at(!localStorage.getItem("analyticsRiskModal")),
            this.currentDateNumber = () => new Date().setHours(0, 0, 0, 0),
            this.updateNotifiedConditionDate = () => localStorage.setItem(this.notifiedConditionDateKey, this.currentDateNumber().toString()),
            this.removeNotifiedConditionalIds = () => localStorage.removeItem(this.notifiedConditionIdsStorageKey),
            this.getDeviceEndRootPath = () => `${this.userDeviceService.deviceType == $n.Mobile ? "/menu/" + _t.CONDITION_ROUTE : "/" + _t.CONDITION_ROUTE}`,
            this.updateNotificationState(),
            this.MapStockIsinsToNames(),
            this.stockConditionSetObs$.subscribe(e => {
                let i = new Map(e.stockConditionSets.map(a => {
                    let u = this.getStockConditionFigureClass(a.isin);
                    return [a.isin, J(B({
                        count: a.stockConditionItems.length
                    }, u), {
                        notifiedCount: a.stockConditionItems.filter(p => this.isConditionNotified(p) && !p.notifiedConditionIsSeen).length
                    })]
                }
                ));
                this.stockConditionSetCountSub.next(i)
            }
            )
        }
        playAudio() {
            try {
                let e = new Audio;
                e.src = "../assets/audio/notify.wav",
                e.load(),
                e.play().catch(null)
            } catch {}
        }
        updateNotificationState() {
            let e = localStorage.getItem(this.notifiedConditionDateKey);
            if (!e) {
                this.updateNotifiedConditionDate();
                return
            }
            this.currentDateNumber() - +e > 0 && (this.removeNotifiedConditionalIds(),
            this.updateNotifiedConditionDate())
        }
        MapStockIsinsToNames() {
            return ii(this, null, function*() {
                let e = yield this.symbolService.getSymbols();
                if (e)
                    for (let i = 0; i < e.length; i++) {
                        let a = e[i];
                        this.stockIsinMapper[a.symbolIsin] = {
                            symbol: a.symbolName,
                            title: a.title
                        }
                    }
            })
        }
        initStockConditions() {
            this.conditionsSynched ? this.getStockConditions().pipe(Q(e => {
                e?.stockConditionSets?.length ? (this.riskAgreementIsAccepted = !0,
                this.checkAllConditionsWhenSet(),
                this.setUserStockConditionSets(e)) : (this.riskAgreementIsAccepted = !1,
                this.httpService.get(this.conditionalRiskAgreementUrl).pipe(Tt(1)).pipe(Q(i => {
                    i && (this.riskAgreementIsAccepted = !0);
                    let a = {
                        id: null,
                        creationDateTime: null,
                        stockConditionSets: []
                    };
                    this.setUserStockConditionSets(a)
                }
                )).subscribe())
            }
            )).subscribe() : (this.riskAgreementIsAccepted = !0,
            this.checkAllConditionsWhenSet(),
            this.moveLocalConditionsToServer())
        }
        checkAllConditionsWhenSet() {
            this.conditionsAreSet$.pipe(Tt(1)).subscribe(e => {
                e && (this.unseenNotifiedConditionsCount > 0 && this.emitUnseenNotifiedConditionsCount(),
                this.initStatesAndCheckConditionsForAll(this.pendingIsinsArray))
            }
            )
        }
        getStockConditions() {
            return this.httpService.get(this.crudUrl).pipe(D(e => e.map(i => J(B({}, i), {
                simpleConditions: i.rules?.map(a => ({
                    fieldValue: {
                        field: a.field,
                        value: a.value
                    },
                    operator: a.operator
                })) ?? []
            }))), D(e => e.reduce(function(i, a) {
                return i[a.symbolIsin] = i[a.symbolIsin] || [],
                i[a.symbolIsin].push(a),
                i
            }, Object.create(null))), D(e => {
                let i = [];
                for (let a in e)
                    i.push({
                        isin: a,
                        stockConditionItems: e[a]
                    });
                return i
            }
            ), D(e => ({
                id: iu(),
                creationDateTime: new Date,
                stockConditionSets: e
            })))
        }
        setUserStockConditionSets(e) {
            if (!(!e || !e.stockConditionSets)) {
                this.userStockConditionSets = {
                    id: e.id,
                    creationDateTime: e.creationDateTime,
                    stockConditionSets: []
                };
                for (let i of e.stockConditionSets) {
                    let a = i.stockConditionItems;
                    if (!a || !a.length)
                        continue;
                    let u = i.isin
                      , p = this.makeStockConditionSet(u, a);
                    this.userStockConditionSets.stockConditionSets.push(p)
                }
                this.conditionsAreSetSubject.next(!0),
                this.stockConditionSetSub.next(this.userStockConditionSets)
            }
        }
        makeStockConditionSet(e, i) {
            let a = {
                isin: e,
                stockConditionItems: []
            };
            for (let u of i) {
                let p = new ir(e,u.id,u.name,u.notifiedConditionIsSeen);
                p.creationDateTime = u.creationDateTime,
                u.simpleConditions.forEach(g => {
                    let y = new nr(g.fieldValue,g.operator);
                    p.simpleConditions.push(y)
                }
                ),
                a.stockConditionItems.push(p)
            }
            return a
        }
        emitUnseenNotifiedConditionsCount() {
            this.newConditionSubject.next(this.unseenNotifiedConditionsCount)
        }
        acceptRiskAgreement() {
            this.httpService.post(this.conditionalRiskAgreementUrl, {
                body: {
                    dummy: !0
                }
            }).pipe(Tt(1)).pipe(Q(e => {
                e && (this.riskAgreementIsAccepted = !0)
            }
            )).subscribe()
        }
        clearLocalStorage() {
            this.stockConditionsStorageKey && localStorage.removeItem(this.stockConditionsStorageKey)
        }
        getStockCondition(e) {
            let i = this.stockConditions.findIndex(a => a.id === e);
            return i < 0 ? null : this.stockConditions[i]
        }
        moveLocalConditionsToServer(e=!1) {
            let i = localStorage.getItem(this.stockConditionsStorageKey);
            if (i) {
                let a = [];
                JSON.parse(i).forEach(g => {
                    let y = new ir(g.stockIsin,g.id,g.name,g.notifiedConditionIsSeen);
                    g.simpleConditions.forEach(O => {
                        let j = new nr(O.fieldValue,O.operator);
                        y.simpleConditions.push(j)
                    }
                    ),
                    a.push(y)
                }
                );
                let p = {
                    addStockConditionItemDtos: []
                };
                for (let g of a) {
                    g.id = iu();
                    let y = {
                        stockCondition: g
                    };
                    p.addStockConditionItemDtos.push(y)
                }
                this.httpService.post(this.bulkAddStockConditionItemsDtoUrl, {
                    body: p
                }).pipe(Tt(1)).pipe(Q(g => {
                    e && this.notificationService.alert("\u0647\u0645\u06AF\u0627\u0645\u200C\u0633\u0627\u0632\u06CC \u0647\u0634\u062F\u0627\u0631\u0647\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F", dt.success),
                    this.setUserStockConditionSets(g),
                    this.conditionsSyncSubject.next(!0),
                    this.clearLocalStorage()
                }
                , () => {
                    this.notificationService.alert("\u062E\u0637\u0627 \u062F\u0631 \u0647\u0645\u06AF\u0627\u0645\u200C\u0633\u0627\u0632\u06CC \u0647\u0634\u062F\u0627\u0631\u0647\u0627", dt.danger),
                    this.conditionsSyncSubject.next(!1)
                }
                )).subscribe()
            }
        }
        makeStockConditionRequest(e) {
            let i = J(B({}, e), {
                rules: e.simpleConditions.map(a => ({
                    field: a.fieldValue.field,
                    value: a.fieldValue.value,
                    operator: a.operator
                }))
            });
            return delete i?.simpleConditions,
            i
        }
        addStockCondition(e) {
            let i = this.makeStockConditionRequest(e);
            this.httpService.post(this.crudUrl, {
                body: i
            }).pipe(Tt(1)).pipe(Q({
                next: a => {
                    e.id = a.id,
                    this.addNewStockConditionsToLocal(e),
                    this.notificationService.alert("\u0647\u0634\u062F\u0627\u0631 \u0634\u0631\u0637\u06CC \u062C\u062F\u06CC\u062F \u0633\u0627\u062E\u062A\u0647 \u0634\u062F", dt.success),
                    this.subscribeLsIfNeededAndCheckConditions(e?.symbolIsin)
                }
                ,
                error: () => {
                    this.notificationService.alert("\u062E\u0637\u0627 \u062F\u0631 \u0633\u0627\u062E\u062A \u0647\u0634\u062F\u0627\u0631 \u0634\u0631\u0637\u06CC", dt.danger)
                }
            })).subscribe()
        }
        addNewStockConditionsToLocal(e) {
            if (!this.userStockConditionSets?.stockConditionSets) {
                this.initStockConditions();
                return
            }
            let i = this.userStockConditionSets?.stockConditionSets?.filter(a => a.isin == e.symbolIsin)[0];
            if (i && i?.stockConditionItems) {
                i.stockConditionItems.push(e);
                return
            }
            i = {
                isin: e.symbolIsin,
                stockConditionItems: [e]
            },
            this.userStockConditionSets.stockConditionSets.push(i),
            this.stockConditionSetSub.next(this.userStockConditionSets)
        }
        updateStockConditionsInLocal(e, i) {
            let a = this.userStockConditionSets?.stockConditionSets?.findIndex(u => u.isin == e.symbolIsin);
            if (a <= -1) {
                this.initStockConditions();
                return
            }
            this.userStockConditionSets.stockConditionSets[a].stockConditionItems[i] = e,
            this.stockConditionSetSub.next(this.userStockConditionSets)
        }
        removeStockCondition(e) {
            let i = this.stockConditions.findIndex(p => p.id === e);
            if (i < 0)
                return;
            let a = this.stockConditions[i].stockIsin
              , u = `${this.crudUrl}/${e}`;
            this.httpService.delete(u, null).pipe(Tt(1)).pipe(Q({
                next: () => {
                    this.notificationService.alert("\u0647\u0634\u062F\u0627\u0631 \u0634\u0631\u0637\u06CC \u062D\u0630\u0641 \u0634\u062F", dt.success),
                    this.isConditionNotified(this.stockConditions[i]) && this.removeNotifiedConditionId(e),
                    this.removeStockConditionFromLocal(a, e),
                    this.unsubscribeStockIfNeeded(a),
                    this.emitUnseenNotifiedConditionsCount()
                }
                ,
                error: () => {
                    this.notificationService.alert("\u062E\u0637\u0627 \u062F\u0631 \u062D\u0630\u0641 \u0647\u0634\u062F\u0627\u0631 \u0634\u0631\u0637\u06CC", dt.danger)
                }
            })).subscribe()
        }
        removeStockConditionFromLocal(e, i) {
            let a = this.userStockConditionSets.stockConditionSets.findIndex(p => p.isin === e)
              , u = this.userStockConditionSets.stockConditionSets.find(p => p.isin === e);
            u.stockConditionItems = u.stockConditionItems.filter(p => p.id !== i),
            u.stockConditionItems.length === 0 && this.userStockConditionSets.stockConditionSets.splice(a, 1),
            this.stockConditionSetSub.next(this.userStockConditionSets)
        }
        updateStockCondition(e, i=!1) {
            let a = this.userStockConditionSets.stockConditionSets?.find(g => g.isin === e.stockIsin)?.stockConditionItems?.findIndex(g => g.id === e.id);
            if (a < 0)
                return;
            let u = e.stockIsin
              , p = this.makeStockConditionRequest(e);
            this.httpService.post(this.crudUrl, {
                body: p
            }).pipe(Tt(1)).pipe(Q( () => {
                i || (this.updateStockConditionsInLocal(e, a),
                this.removeNotifiedConditionId(e.id),
                this.subscribeLsIfNeededAndCheckConditions(u))
            }
            )).subscribe()
        }
        subscribeLsIfNeededAndCheckConditions(e) {
            this.stockSubs[e] ? this.checkConditionsForStock(e) : this.initStatesAndCheckConditions(e)
        }
        initStatesAndCheckConditions(e) {
            this.stockStates[e] = {
                LastTradedPrice: void 0,
                LastTradedPriceVarPercent: void 0,
                TotalNumberOfSharesTraded: void 0,
                BestBuyLimitQuantity_1: void 0,
                BestSellLimitQuantity_1: void 0,
                ClosingPrice: void 0,
                ClosingPriceVarPercent: void 0,
                BestBuyLimitPrice_1: void 0,
                BestSellLimitPrice_1: void 0,
                TotalTradeValue: void 0,
                FeeOfPreviousDaysClosingPrice: void 0
            },
            this.subscribeToStockOnLsConnection(e)
        }
        initStatesAndCheckConditionsForAll(e) {
            for (let i of e)
                this.stockStates[i] = {
                    LastTradedPrice: void 0,
                    LastTradedPriceVarPercent: void 0,
                    TotalNumberOfSharesTraded: void 0,
                    BestBuyLimitQuantity_1: void 0,
                    BestSellLimitQuantity_1: void 0,
                    ClosingPrice: void 0,
                    ClosingPriceVarPercent: void 0,
                    BestBuyLimitPrice_1: void 0,
                    BestSellLimitPrice_1: void 0,
                    TotalTradeValue: void 0,
                    FeeOfPreviousDaysClosingPrice: void 0
                };
            this.subscribeToAllStocksOnLsConnection(e)
        }
        subscribeToStockOnLsConnection(e) {
            this.subscribeToStock(e)
        }
        subscribeToAllStocksOnLsConnection(e) {
            this.subscribeToAllStocks(e)
        }
        subscribeToStock(e) {
            let i = this.lsService.subscribeToLs(ze.Conditional, e).subscribe(a => {
                this.fillMarketLastTradeInfo(a, e),
                this.checkConditionsForStock(e)
            }
            );
            this.stockSubs[e] = i,
            this.subscribeToMarketData(e)
        }
        fillMarketLastTradeInfo(e, i) {
            switch (e.name) {
            case je.ConditionalSchema.LastTradedPrice:
                this.stockStates[i].LastTradedPrice = +e.val;
                break;
            case je.ConditionalSchema.lastTradedPriceVar:
                this.stockStates[i].LastTradedPriceVarPercent = +e.val;
                break;
            case je.ConditionalSchema.FeeOfPreviousDaysClosingPrice:
                this.stockStates[i].FeeOfPreviousDaysClosingPrice = +e.val,
                this.stockStates[i].ClosingPriceVarPercent = this.symbolService.calculateClosingPriceVarPercent(this.stockStates[i].ClosingPrice, this.stockStates[i].FeeOfPreviousDaysClosingPrice, this.stockStates[i].TotalNumberOfSharesTraded);
                break;
            case je.ConditionalSchema.ClosingPrice:
                this.stockStates[i].ClosingPrice = +e.val,
                this.stockStates[i].ClosingPriceVarPercent = this.symbolService.calculateClosingPriceVarPercent(this.stockStates[i].ClosingPrice, this.stockStates[i].FeeOfPreviousDaysClosingPrice, this.stockStates[i].TotalNumberOfSharesTraded);
                break;
            case je.ConditionalSchema.TotalNumberOfSharesTraded:
                this.stockStates[i].TotalNumberOfSharesTraded = +e.val,
                this.stockStates[i].ClosingPriceVarPercent = this.symbolService.calculateClosingPriceVarPercent(this.stockStates[i].ClosingPrice, this.stockStates[i].FeeOfPreviousDaysClosingPrice, this.stockStates[i].TotalNumberOfSharesTraded);
                break;
            case je.ConditionalSchema.BestBuyLimitPrice_1:
                this.stockStates[i].BestSellLimitPrice_1 = +e.val;
                break;
            case je.ConditionalSchema.BestBuyLimitQuantity_1:
                this.stockStates[i].BestSellLimitQuantity_1 = +e.val;
                break;
            case je.ConditionalSchema.BestSellLimitPrice_1:
                this.stockStates[i].BestSellLimitPrice_1 = +e.val;
                break;
            case je.ConditionalSchema.BestSellLimitQuantity_1:
                this.stockStates[i].BestSellLimitQuantity_1 = +e.val;
                break;
            case je.ConditionalSchema.TotalTradeValue:
                this.stockStates[i].TotalTradeValue = +e.val;
                break
            }
        }
        subscribeToAllStocks(e) {
            for (let i of e) {
                let a = this.lsService.subscribeToLs(ze.Conditional, i).subscribe(u => {
                    this.fillMarketLastTradeInfo(u, i),
                    this.checkConditionsForStock(i)
                }
                );
                this.stockSubs[i] = a
            }
        }
        unsubscribeStock(e) {
            let i = this.stockSubs[e];
            i && (i.unsubscribe(),
            this.stockSubs[e] = void 0),
            this.lsService.unsubscribeSchema(ze.Conditional, e)
        }
        subscribeToMarketData(e) {
            this.marketDataService.GetMarketData(7, e).pipe(Tt(1), Dp(i => i.pipe(Do(ms.DelayBetweenRetryGetStockData), Ep(a => a += 1, 1), Q(a => {
                if (a > ms.MaxRetryForGettingStockData)
                    throw "subscribeToMarketData error"
            }
            )))).subscribe({
                next: i => {
                    this.stockStates[e].LastTradedPrice = i?.lastTradedPrice,
                    this.stockStates[e].LastTradedPriceVarPercent = i?.priceVar,
                    this.stockStates[e].TotalNumberOfSharesTraded = i?.totalNumberOfSharesTraded,
                    this.stockStates[e].BestBuyLimitQuantity_1 = i?.bestBuyQuantity,
                    this.stockStates[e].BestSellLimitQuantity_1 = i?.bestSellQuantity,
                    this.stockStates[e].ClosingPrice = i?.closingPrice,
                    this.stockStates[e].ClosingPriceVarPercent = this.symbolService.calculateClosingPriceVarPercent(i?.lastTradedPrice, i?.feeOfPreviousDaysClosingPrice, i?.totalNumberOfSharesTraded),
                    this.stockStates[e].BestBuyLimitPrice_1 = i?.bestBuyPrice,
                    this.stockStates[e].BestSellLimitPrice_1 = i?.bestSellPrice,
                    this.stockStates[e].TotalTradeValue = i?.totalTradeValue,
                    this.checkConditionsForStock(e)
                }
            })
        }
        checkConditionsForStock(e) {
            if (!this.timeService.isMarketOpenSub.value)
                return;
            let i = this.stockStates[e];
            if (!i)
                return;
            let a = this.getFiledValuesForStockState(i);
            this.pendingConditions.filter(p => p.stockIsin === e).forEach(p => {
                if (p.isTrue(a)) {
                    let g = this.stockIsinMapper[e.toUpperCase()]?.symbol
                      , y = p.name ? `\u0634\u0631\u0637 ${p.name} \u0627\u0632 \u0646\u0645\u0627\u062F ${g} \u0628\u0631\u0642\u0631\u0627\u0631 \u0634\u062F` : `\u0634\u0631\u0637   ${g}  \u0628\u0631\u0642\u0631\u0627\u0631 \u0634\u062F`
                      , O = p.name ? p.name : this.getStockConditionDescription(p);
                    this.userDeviceService.deviceType !== $n.Mobile ? this.notificationService.alert(y, dt.info, !1, this.getDeviceEndRootPath(), e) : this.notificationService.alert(y, dt.info, !1, this.getDeviceEndRootPath() + `/${e}`),
                    this.notificationService.notif({
                        title: y,
                        body: O,
                        defaultUrl: this.getDeviceEndRootPath() + `/${e}`
                    }),
                    this.notifSubject.next(new Date),
                    this.playAudio(),
                    this.vibrate(),
                    this.addNotifiedConditionId(p.id),
                    this.unsubscribeStockIfNeeded(e),
                    this.emitUnseenNotifiedConditionsCount()
                }
            }
            )
        }
        vibrate() {
            try {
                if (this.userDeviceService.deviceType != $n.Mobile || this.userDeviceService.isiOS || !navigator.vibrate)
                    return;
                navigator.vibrate([ms.ShortVibrateDuration, ms.SilentDuration, ms.LongVibrateDuration])
            } catch {}
        }
        unsubscribeStockIfNeeded(e) {
            this.pendingIsinsSet.has(e) || this.unsubscribeStock(e)
        }
        getFiledValuesForStockState(e) {
            return [{
                field: It.LastTradedPrice,
                value: e.LastTradedPrice
            }, {
                field: It.LastTradedPriceVarPercent,
                value: e.LastTradedPriceVarPercent
            }, {
                field: It.TotalNumberOfSharesTraded,
                value: e.TotalNumberOfSharesTraded
            }, {
                field: It.BestBuyLimitQuantity_1,
                value: e.BestBuyLimitQuantity_1
            }, {
                field: It.BestSellLimitQuantity_1,
                value: e.BestSellLimitQuantity_1
            }, {
                field: It.ClosingPrice,
                value: e.ClosingPrice
            }, {
                field: It.ClosingPriceVarPercent,
                value: e.ClosingPriceVarPercent
            }, {
                field: It.BestBuyLimitPrice_1,
                value: e.BestBuyLimitPrice_1
            }, {
                field: It.BestSellLimitPrice_1,
                value: e.BestSellLimitPrice_1
            }, {
                field: It.TotalTradeValue,
                value: e.TotalTradeValue
            }]
        }
        getSimpleConditionDescription(e) {
            let i = "";
            return i += new sr(e.fieldValue.field).persianName,
            i += " ",
            i += new or(e.operator).persianName,
            i += " ",
            i += this.decimalPipe.transform(e.fieldValue.value),
            i
        }
        getSimpleConditionDescriptionHtml(e) {
            let i = "";
            return i += new sr(e.fieldValue.field).persianName,
            i += "&nbsp;",
            i += new or(e.operator).persianName,
            i += "&nbsp;<span dir='ltr'>&nbsp;",
            i += this.decimalPipe.transform(e.fieldValue.value),
            i += "</span>",
            i
        }
        getTotalSimpleConditionsDescription(e) {
            let i = "";
            return e.forEach(a => {
                i.length > 0 && (i += " \u0648 "),
                i += this.getSimpleConditionDescription(a)
            }
            ),
            i
        }
        getTotalSimpleConditionsDescriptionHtml(e) {
            let i = "";
            return e.forEach(a => {
                i.length > 0 && (i += " \u0648 "),
                i += this.getSimpleConditionDescriptionHtml(a)
            }
            ),
            i
        }
        getStockConditionDescription(e) {
            return this.getTotalSimpleConditionsDescription(e.simpleConditions)
        }
        getStockConditionDescriptionHtml(e) {
            return this.getTotalSimpleConditionsDescriptionHtml(e.simpleConditions)
        }
        flagNotifiedConditionAsSeen(e) {
            e.notifiedConditionIsSeen = !0,
            this.updateStockCondition(e, !1),
            this.emitUnseenNotifiedConditionsCount()
        }
        pendingOrNotifiedUnseenConditionExistsForStock(e) {
            let i = this.userStockConditionSets;
            if (!i || !e)
                return !1;
            let a = i.stockConditionSets.find(u => u.isin.toUpperCase() === e.toUpperCase());
            return a ? a.stockConditionItems.some(u => this.isConditionNotifiedAndUnseen(u) || !this.isConditionNotified(u)) : !1
        }
        notifiedUnseenConditionExistsForStock(e) {
            let i = this.userStockConditionSets;
            if (!i)
                return !1;
            let a = i.stockConditionSets.find(u => u.isin.toUpperCase() === e.toUpperCase());
            return a ? a.stockConditionItems.some(u => this.isConditionNotifiedAndUnseen(u)) : !1
        }
        getStockConditionFigureClass(e) {
            return this.pendingOrNotifiedUnseenConditionExistsForStock(e) ? this.notifiedUnseenConditionExistsForStock(e) ? {
                class: "text-warning",
                iconName: "bell-ring-fill"
            } : {
                class: "text-warning",
                iconName: "bell-ring-fill"
            } : {
                class: "",
                iconName: "bell-add"
            }
        }
        getStockConditionIconNameInConditionsPage(e) {
            switch (this.getStockConditionState(e)) {
            case Ci.NotifiedUnseen:
                return "bell-ring-fill";
            case Ci.NotifiedSeen:
                return "bell";
            case Ci.Waiting:
                return "sandglass";
            default:
                return ""
            }
        }
        getStockConditionIconClassesInConditionsPage(e) {
            switch (this.getStockConditionState(e)) {
            case Ci.NotifiedUnseen:
                return "text-warning bellshake icon";
            case Ci.NotifiedSeen:
                return "text-muted icon";
            case Ci.Waiting:
                return "text-global icon";
            default:
                return ""
            }
        }
        getStockConditionStateDescription(e) {
            switch (this.getStockConditionState(e)) {
            case Ci.NotifiedUnseen:
                return "\u0647\u0634\u062F\u0627\u0631 \u0628\u0631\u0642\u0631\u0627\u0631 \u0634\u062F\u0647";
            case Ci.NotifiedSeen:
                return "\u0647\u0634\u062F\u0627\u0631 \u062E\u0627\u0645\u0648\u0634 \u0634\u062F\u0647";
            case Ci.Waiting:
                return "\u0647\u0634\u062F\u0627\u0631 \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631";
            default:
                return ""
            }
        }
        getStockConditionState(e) {
            return this.isConditionNotified(e) ? e.notifiedConditionIsSeen ? Ci.NotifiedSeen : Ci.NotifiedUnseen : Ci.Waiting
        }
        isConditionNotified(e) {
            return this.notifiedConditionIds.includes(e.id)
        }
        isConditionNotifiedAndUnseen(e) {
            return this.isConditionNotified(e) && !e.notifiedConditionIsSeen
        }
        addNotifiedConditionId(e) {
            let i = this.notifiedConditionIds;
            i.push(e),
            localStorage.setItem(this.notifiedConditionIdsStorageKey, JSON.stringify(i))
        }
        removeNotifiedConditionId(e) {
            let i = this.notifiedConditionIds.filter(a => a !== e);
            localStorage.setItem(this.notifiedConditionIdsStorageKey, JSON.stringify(i))
        }
        getSortedStockConditions(e) {
            if (e && this.userStockConditionSets) {
                let i = this.userStockConditionSets.stockConditionSets.find(a => a.isin.toUpperCase() == e.toUpperCase());
                if (i) {
                    let a = i.stockConditionItems;
                    return r0(a, "creationDateTime", "dsc")
                }
            }
            return []
        }
        getSortedStockConditionSetWithSymbols() {
            if (!this.userStockConditionSets)
                return [];
            let e = []
              , i = this.userStockConditionSets.stockConditionSets;
            for (let u = 0; u < i.length; u++) {
                let p = i[u]
                  , g = p.isin.toUpperCase();
                this.stockIsinMapper[g] && e.push(J(B({}, p), {
                    symbol: this.stockIsinMapper[g]?.symbol,
                    title: this.stockIsinMapper[g]?.title
                }))
            }
            return Xs(e, "symbol")
        }
        getNotifiedUnseenConditionsCount(e) {
            return e.filter(i => this.isConditionNotifiedAndUnseen(i)).length
        }
        getPendingConditionsCount(e) {
            return e.filter(i => !this.isConditionNotified(i)).length
        }
        enableAccessibility() {
            return this.userDeviceService.isiOS && this.notificationService.alert("\u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0627\u0645\u06A9\u0627\u0646 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0647\u0634\u062F\u0627\u0631 \u062F\u0631\u0648\u0646 \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0627\u06CC \u062F\u0631 ios \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F.", dt.warning),
            !this.userDeviceService.isiOS
        }
        hasAlarm$(e) {
            return this.stockConditionSetCountObs$.pipe(D(i => i.get(e) ?? null))
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)()
  , Ci = function(n) {
    return n[n.Waiting = 0] = "Waiting",
    n[n.NotifiedUnseen = 1] = "NotifiedUnseen",
    n[n.NotifiedSeen = 2] = "NotifiedSeen",
    n
}(Ci || {});
var My = ["conditionalModalContent"];
function Ty(n, s) {
    n & 1 && (h(0, "li"),
    C(1, '\u062A\u0648\u0635\u06CC\u0647 \u0645\u06CC \u0634\u0648\u062F \u06AF\u0632\u06CC\u0646\u0647 "\u0631\u0648\u0634\u0646 \u0646\u06AF\u0647 \u062F\u0627\u0634\u062A\u0646 \u0635\u0641\u062D\u0647 \u0646\u0645\u0627\u06CC\u0634" \u062F\u0631 \u0642\u0633\u0645\u062A \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0641\u0639\u0627\u0644 \u0628\u0627\u0634\u062F.'),
    f())
}
function Dy(n, s) {
    n & 1 && (h(0, "li"),
    C(1, "\u062A\u0631\u062C\u06CC\u062D\u0627 \u0642\u0627\u0628\u0644\u06CC\u062A power saving (\u0635\u0631\u0641\u0647 \u062C\u0648\u06CC\u06CC \u062F\u0631 \u0645\u0635\u0631\u0641 \u0628\u0627\u062A\u0631\u06CC) \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u0628\u0627\u0634\u062F."),
    f())
}
function Ey(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 9)(1, "div", 10)(2, "button", 11),
        z("click", function(i) {
            return R(r),
            w(2).rejectConditionalModal(),
            L(i.stopPropagation())
        }),
        k(3, "svg-icon", 12),
        C(4, " \u0627\u0646\u0635\u0631\u0627\u0641 "),
        f(),
        h(5, "button", 13),
        z("click", function(i) {
            return R(r),
            w(2).acceptConditionalModal(),
            L(i.stopPropagation())
        }),
        k(6, "svg-icon", 12),
        C(7, " \u0645\u06CC\u200C\u067E\u0630\u06CC\u0631\u0645 "),
        f()()()
    }
    if (n & 2) {
        let r = w(2);
        d(3),
        b("iconName", r.icons.Close),
        d(3),
        b("iconName", r.icons.Check)
    }
}
function Py(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 1)(1, "span", 2),
        C(2, "\u0628\u06CC\u0627\u0646\u06CC\u0647 \u0631\u06CC\u0633\u06A9"),
        f(),
        h(3, "button", 3),
        z("click", function(i) {
            return R(r),
            w().closeBtnClicked(),
            L(i.stopPropagation())
        }),
        k(4, "span", 4),
        f()(),
        h(5, "div", 5),
        C(6, " \u0628\u062E\u0634 \u0647\u0634\u062F\u0627\u0631\u0647\u0627\u06CC \u062F\u0631\u0648\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u06CC \u0628\u0647 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062A \u0622\u0632\u0645\u0627\u06CC\u0634\u06CC \u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC \u06AF\u0631\u062F\u06CC\u062F\u0647\u060C \u0644\u0627\u0632\u0645 \u0627\u0633\u062A \u0645\u0648\u0627\u0631\u062F \u0632\u06CC\u0631 \u0645\u062F\u0646\u0638\u0631 \u0628\u0627\u0634\u062F: "),
        h(7, "ul", 6)(8, "li"),
        C(9, "\u0628\u0627 \u062A\u0648\u062C\u0647 \u0628\u0647 \u0631\u0627\u0647 \u0627\u0646\u062F\u0627\u0632\u06CC \u0622\u0632\u0645\u0627\u06CC\u0634\u06CC \u0628\u0647\u062A\u0631 \u0627\u0633\u062A \u0645\u0628\u0646\u0627\u06CC \u0627\u0646\u062C\u0627\u0645 \u0645\u0639\u0627\u0645\u0644\u0647 \u0642\u0631\u0627\u0631 \u0646\u06AF\u06CC\u0631\u062F."),
        f(),
        h(10, "li"),
        C(11, "\u0647\u0634\u062F\u0627\u0631\u0647\u0627 \u062F\u0631 \u0635\u0648\u0631\u062A\u06CC \u0639\u0645\u0644 \u0645\u06CC \u06A9\u0646\u0646\u062F \u06A9\u0647 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0627\u06CC\u0632\u06CC \u062A\u0631\u06CC\u062F\u0631 \u062F\u0631 \u0635\u0641\u062D\u0647 \u0646\u0645\u0627\u06CC\u0634 \u0641\u0639\u0627\u0644 \u0628\u0627\u0634\u062F."),
        f(),
        H(12, Ty, 2, 0, "li", 7)(13, Dy, 2, 0, "li", 7),
        h(14, "li"),
        C(15, "\u0627\u06CC\u0646\u062A\u0631\u0646\u062A \u0628\u0631\u0642\u0631\u0627\u0631 \u0628\u0627\u0634\u062F."),
        f()()(),
        H(16, Ey, 8, 2, "div", 8)
    }
    if (n & 2) {
        let r = w();
        d(12),
        b("ngIf", r.isMobile),
        d(),
        b("ngIf", r.isMobile),
        d(3),
        b("ngIf", r.showButtons)
    }
}
var RI = ( () => {
    let s = class s extends li {
        constructor(e, i) {
            super(),
            this.conditionalNotificationService = e,
            this._location = i,
            this.icons = Ce,
            this.isMobile = !0,
            this.showButtons = !0,
            this.conditionalRiskRejectedEventEmitter = new jt
        }
        ngOnInit() {
            this.subscribeForCheckingConditionalRiskAgreement(),
            this.conditionalNotificationService.riskAgreementIsAccepted || this.conditionalNotificationService.showConditionalRiskAgreementSubject.next(!0)
        }
        ngOnDestroy() {
            this.ConditionalRiskAgreementObs?.unsubscribe()
        }
        subscribeForCheckingConditionalRiskAgreement() {
            this.ConditionalRiskAgreementObs = this.conditionalNotificationService.showConditionalRiskAgreement$.pipe(Q(e => {
                this.conditionalNotificationService.riskAgreementIsAccepted ? this.showButtons = !1 : this.showButtons = !0,
                this.openModalWithDelay()
            }
            )).subscribe()
        }
        openModalWithDelay() {
            setTimeout( () => {
                this.openModal()
            }
            , Js)
        }
        openModal() {
            let e = {
                backdrop: this.showButtons ? "static" : !0,
                keyboard: !1
            };
            this.modalService.open(this.conditionalModalContent, e).result.then( () => {}
            , () => {}
            )
        }
        closeModal() {
            this.modalService.dismissAll()
        }
        acceptConditionalModal() {
            this.conditionalNotificationService.acceptRiskAgreement(),
            this.closeModal()
        }
        rejectConditionalModal() {
            this.closeModal(),
            this.isMobile ? this._location.back() : this.conditionalRiskRejectedEventEmitter.emit(!0)
        }
        closeBtnClicked() {
            this.closeModal(),
            this.showButtons && this.conditionalRiskRejectedEventEmitter.emit(!0)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(nt(Za),nt(Qp))
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["conditional-risk-modal"]],
        viewQuery: function(i, a) {
            if (i & 1 && Ra(My, 7),
            i & 2) {
                let u;
                La(u = Ba()) && (a.conditionalModalContent = u.first)
            }
        },
        inputs: {
            isMobile: "isMobile"
        },
        outputs: {
            conditionalRiskRejectedEventEmitter: "conditionalRiskRejectedEventEmitter"
        },
        features: [Zt],
        decls: 2,
        vars: 0,
        consts: [["conditionalModalContent", ""], [1, "modal-header", "d-flex", "justify-content-between", "align-items-center"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "m-0", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "mt-3"], [4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-footer"], [1, "m-0", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["width", "24", "height", "24", 1, "me-1", 3, "iconName"], ["data-cy", "conditional-modal-accept-btn", "type", "button", 1, "btn", "btn-success", 3, "click"]],
        template: function(i, a) {
            i & 1 && H(0, Py, 17, 3, "ng-template", null, 0, Ft)
        },
        dependencies: [Zp, ye],
        encapsulation: 2
    });
    let n = s;
    return n
}
)();
var E0 = ( () => {
    let s = class s {
        constructor() {
            this.icons = Ce,
            this.riskButtonClicked = Ge()
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["black-scholes-calculator-risk-modal"]],
        outputs: {
            riskButtonClicked: "riskButtonClicked"
        },
        decls: 9,
        vars: 1,
        consts: [[1, "alert", "alert-warning", "m-2", "p-4", "position-absolute", "rounded", "shadow-lg", "z-10", 2, "top", "2%", "left", "0"], ["width", "24", "height", "24", 1, "p-3", "position-absolute", "cup", 2, "left", "0", "top", "0", 3, "click", "iconName"], [1, "fw-bold", "mb-2"], [1, "mb-2", "text-justify"], [1, "text-center"], ["type", "button", 1, "btn", "btn-warning", 3, "click"]],
        template: function(i, a) {
            i & 1 && (h(0, "div", 0)(1, "svg-icon", 1),
            z("click", function() {
                return a.riskButtonClicked.emit()
            }),
            f(),
            h(2, "div", 2),
            C(3, "\u0628\u06CC\u0627\u0646\u06CC\u0647 \u0631\u06CC\u0633\u06A9"),
            f(),
            h(4, "div", 3),
            C(5, " \u0645\u0627\u0634\u06CC\u0646\u200C\u062D\u0633\u0627\u0628\u200C \u0627\u062E\u062A\u06CC\u0627\u0631 \u0628\u0647 \u0645\u0646\u0638\u0648\u0631 \u062A\u0633\u0647\u06CC\u0644 \u0645\u062D\u0627\u0633\u0628\u0627\u062A \u06A9\u0627\u0631\u0628\u0631 \u0637\u0631\u0627\u062D\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A \u0648 \u0645\u0628\u0646\u0627\u06CC \u062A\u0635\u0645\u06CC\u0645 \u06AF\u06CC\u0631\u06CC \u0628\u0631\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631 \u0646\u06CC\u0633\u062A. \u0647\u0645\u0686\u0646\u06CC\u0646 \u0647\u0631\u06AF\u0648\u0646\u0647 \u062A\u0641\u0633\u06CC\u0631 \u0627\u0632 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u062F\u0647\u200C\u0634\u062F\u0647 \u062F\u0631 \u0627\u06CC\u0646 \u0628\u062E\u0634 \u06A9\u0647 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0627\u0631\u062F \u0645\u0646\u062C\u0631 \u0628\u0647 \u062A\u0635\u0645\u06CC\u0645\u0627\u062A \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC \u0634\u0648\u062F\u060C \u0628\u0631 \u0639\u0647\u062F\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0645\u06CC \u0628\u0627\u0634\u062F. "),
            f(),
            h(6, "div", 4)(7, "button", 5),
            z("click", function() {
                return a.riskButtonClicked.emit()
            }),
            C(8, "\u0645\u062A\u0648\u062C\u0647 \u0634\u062F\u0645"),
            f()()()),
            i & 2 && (d(),
            b("iconName", a.icons.Close))
        },
        dependencies: [ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var ru = "blackScholesCalculator";
var R0 = Ma(O0())
  , L0 = Ma(Ya())
  , ps = Ma(F0());
var uo = function(n) {
    return n.Call = "call",
    n.Put = "put",
    n
}(uo || {})
  , Ji = .4
  , Vi = .3
  , Gy = 0;
function hs(n, s, r, e, i=Ji, a=Vi, u=Gy) {
    let p = qy(n, s, r, e, i, a)
      , g = ar(n, s, r, e, i, a)
      , y = Ky(s, r, e, i, a)
      , O = Qy(s, r, e, i, a)
      , j = Zy(n, s, r, e, i, a)
      , Z = Yy(n, s, r, e, i, a)
      , xe = Jy(n, s, r, e, u, a);
    return {
        price: p,
        delta: g,
        gamma: y,
        theta: j,
        vega: O,
        rho: Z,
        impliedVolatility: xe
    }
}
function qy(n, s, r, e, i=Ji, a=Vi) {
    let u = new Date;
    return u.setHours(0, 0, 0, 0),
    L0.default.blackScholes(s, r, ut.daysBetweenTwoDates(u, e) / 365, i, a, n)
}
function ar(n, s, r, e, i=Ji, a=Vi) {
    let u = new Date;
    return u.setHours(0, 0, 0, 0),
    ps.default.getDelta(s, r, ut.daysBetweenTwoDates(u, e) / 365, i, a, n)
}
function Ky(n, s, r, e=Ji, i=Vi) {
    let a = new Date;
    return a.setHours(0, 0, 0, 0),
    ps.default.getGamma(n, s, ut.daysBetweenTwoDates(a, r) / 365, e, i)
}
function Qy(n, s, r, e=Ji, i=Vi) {
    let a = new Date;
    return a.setHours(0, 0, 0, 0),
    ps.default.getVega(n, s, ut.daysBetweenTwoDates(a, r) / 365, e, i)
}
function Zy(n, s, r, e, i=Ji, a=Vi) {
    let u = new Date;
    return u.setHours(0, 0, 0, 0),
    ps.default.getTheta(s, r, ut.daysBetweenTwoDates(u, e) / 365, i, a, n)
}
function Yy(n, s, r, e, i=Ji, a=Vi) {
    let u = new Date;
    return u.setHours(0, 0, 0, 0),
    ps.default.getRho(s, r, ut.daysBetweenTwoDates(u, e) / 365, i, a, n)
}
function Jy(n, s, r, e, i, a=Vi) {
    let u = new Date;
    return u.setHours(0, 0, 0, 0),
    R0.default.getImpliedVolatility(i, s, r, ut.daysBetweenTwoDates(u, e) / 365, a, n)
}
var mo = {
    [Rt.BuyOptionTse]: uo.Call,
    [Rt.BuyOptionIfb]: uo.Call,
    [Rt.SellOptionTse]: uo.Put,
    [Rt.SellOptionIfb]: uo.Put
};
var Xy = ["guidModal"];
function e1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 1)(1, "span", 2),
        C(2, "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0645\u0627\u0634\u06CC\u0646 \u062D\u0633\u0627\u0628 "),
        f(),
        h(3, "button", 3),
        z("click", function(i) {
            return R(r),
            w().closeModal(),
            L(i.stopPropagation())
        }),
        k(4, "span", 4),
        f()(),
        h(5, "div", 5)(6, "div", 6),
        C(7, "\u0642\u06CC\u0645\u062A \u0645\u0646\u0635\u0641\u0627\u0646\u0647\xA0(Black scholes)"),
        f(),
        h(8, "p", 7),
        C(9, " \u0642\u06CC\u0645\u062A \u0645\u0646\u0635\u0641\u0627\u0646\u0647 \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u0628\u0631\u0627\u06CC \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u0639\u0627\u0645\u0644\u0647\u060C \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0641\u0631\u0645\u0648\u0644 \u0628\u0644\u06A9 \u0634\u0648\u0644\u0632 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F. "),
        f(),
        h(10, "div", 6),
        C(11, "\u062F\u0644\u062A\u0627\xA0(Delta)"),
        f(),
        h(12, "p", 7),
        C(13, " \u0646\u0634\u0627\u0646 \u0645\u06CC\u200C\u062F\u0647\u062F \u0628\u0647 \u0627\u0632\u0627 \u0647\u0631 \u06CC\u06A9 \u0648\u0627\u062D\u062F \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0631 \u0642\u06CC\u0645\u062A \u062F\u0627\u0631\u0627\u06CC\u06CC \u067E\u0627\u06CC\u0647\u060C \u0642\u06CC\u0645\u062A \u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u0639\u0627\u0645\u0644\u0647 \u0686\u0646\u062F \u0648\u0627\u062D\u062F \u062A\u063A\u06CC\u06CC\u0631 \u0645\u06CC\u200C\u06A9\u0646\u062F. "),
        f(),
        h(14, "div", 6),
        C(15, "\u06AF\u0627\u0645\u0627\xA0(Gamma)"),
        f(),
        h(16, "p", 7),
        C(17, "\u062A\u063A\u06CC\u06CC\u0631 \u0645\u0642\u062F\u0627\u0631 \u062F\u0644\u062A\u0627 \u0628\u0627 \u062A\u0648\u062C\u0647 \u0628\u0647 \u062A\u063A\u06CC\u06CC\u0631 \u0642\u06CC\u0645\u062A \u062F\u0627\u0631\u0627\u06CC\u06CC \u067E\u0627\u06CC\u0647 \u0631\u0627 \u0646\u0634\u0627\u0646 \u0645\u06CC\u200C\u062F\u0647\u062F."),
        f(),
        h(18, "div", 6),
        C(19, "\u062A\u062A\u0627\xA0(Theta)"),
        f(),
        h(20, "p", 7),
        C(21, "\u0627\u062B\u0631\u0627\u062A \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0632\u0645\u0627\u0646 \u062A\u0627 \u0633\u0631\u0631\u0633\u06CC\u062F \u06CC\u06A9 \u0627\u062E\u062A\u06CC\u0627\u0631 \u0631\u0627 \u0628\u0631 \u0631\u0648\u06CC \u0642\u06CC\u0645\u062A \u0622\u0646 \u0646\u0634\u0627\u0646 \u0645\u06CC\u200C\u062F\u0647\u062F."),
        f(),
        h(22, "div", 6),
        C(23, "\u0648\u06AF\u0627\xA0(Vega)"),
        f(),
        h(24, "p", 7),
        C(25, " \u0646\u0634\u0627\u0646 \u062F\u0647\u0646\u062F\u0647 \u062D\u0633\u0627\u0633\u06CC\u062A \u0642\u06CC\u0645\u062A \u06CC\u06A9 \u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u0639\u0627\u0645\u0644\u0647 \u0631\u0627 \u0628\u0647 \u0646\u0648\u0633\u0627\u0646 \u067E\u0630\u06CC\u0631\u06CC \u0636\u0645\u0646\u06CC \u0646\u0634\u0627\u0646 \u0645\u06CC\u200C\u062F\u0647\u062F. "),
        f(),
        h(26, "div", 8),
        C(27, "\u0631\u0648\xA0(Rho)"),
        f(),
        h(28, "p", 7),
        C(29, " \u0646\u0634\u0627\u0646 \u0645\u06CC\u200C\u062F\u0647\u062F \u06A9\u0647 \u0628\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u0647\u0631 \u0648\u0627\u062D\u062F \u0646\u0631\u062E \u0628\u0647\u0631\u0647\u060C \u0642\u06CC\u0645\u062A \u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u0639\u0627\u0645\u0644\u0647 \u0686\u0646\u062F \u0648\u0627\u062D\u062F \u062A\u063A\u06CC\u06CC\u0631 \u0645\u06CC\u200C\u062F\u0647\u062F. "),
        f()(),
        h(30, "div", 9)(31, "button", 10),
        z("click", function(i) {
            return R(r),
            w().closeModal(),
            L(i.stopPropagation())
        }),
        C(32, "\u0645\u062A\u0648\u062C\u0647 \u0634\u062F\u0645"),
        f()()
    }
}
var B0 = ( () => {
    let s = class s {
        constructor() {
            this.guidModalRef = to("guidModal"),
            this.guidModalClosed = Ge(),
            this.modalService = I(C0)
        }
        ngOnInit() {
            this.openModalWithDelay()
        }
        openModalWithDelay() {
            setTimeout(this.openModal.bind(this), Js)
        }
        openModal() {
            let e = {
                scrollable: !0
            };
            this.modalService.open(this.guidModalRef(), e).result.then( () => {}
            , () => {
                this.guidModalClosed.emit()
            }
            )
        }
        closeModal() {
            this.modalService.dismissAll(),
            this.guidModalClosed.emit()
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["black-scholes-calculator-guid-modal"]],
        viewQuery: function(i, a) {
            i & 1 && Nn(a.guidModalRef, Xy, 5),
            i & 2 && io()
        },
        outputs: {
            guidModalClosed: "guidModalClosed"
        },
        decls: 2,
        vars: 0,
        consts: [["guidModal", ""], [1, "modal-header", "align-items-center", "border-0"], [1, "modal-title", "text-center", "flex-grow-1"], ["type", "button", 1, "btn-close", "m-0", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "fs-7", "fw-bold", "mb-1"], [1, "text-body", "text-opacity-75"], [1, "h6"], [1, "modal-footer", "pt-0", "border-0"], [1, "btn", "btn-global", "w-100", 3, "click"]],
        template: function(i, a) {
            i & 1 && H(0, e1, 33, 0, "ng-template", null, 0, Ft)
        },
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var V0 = n => ({
    "pe-none bg-body-secondary opacity-75": n
});
function t1(n, s) {
    n & 1 && (h(0, "div", 36),
    C(1, " \u0645\u0627\u0634\u06CC\u0646 \u062D\u0633\u0627\u0628 \u0628\u0631\u0627\u06CC \u067E\u06CC\u0634\u200C\u0628\u06CC\u0646\u06CC \u0648 \u062A\u062C\u0632\u06CC\u0647 \u0648 \u062A\u062D\u0644\u06CC\u0644 \u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u0639\u0627\u0645\u0644\u0647 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F. \u062F\u0631 \u0627\u06CC\u0646 \u0645\u0627\u0634\u06CC\u0646 \u062D\u0633\u0627\u0628 \u0627\u0632 \u0645\u062F\u0644 \u0628\u0644\u06A9\u200C\u0634\u0648\u0644\u0632 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0628\u0631\u0627\u06CC \u0645\u062D\u0627\u0633\u0628\u0647 \u0645\u0642\u0627\u062F\u06CC\u0631 \u0646\u0638\u0631\u06CC \u0642\u06CC\u0645\u062A \u06CC\u0627 \u0646\u0648\u0633\u0627\u0646\u0627\u062A \u0636\u0645\u0646\u06CC \u0648 \u0627\u0639\u062F\u0627\u062F \u06CC\u0648\u0646\u0627\u0646\u06CC \u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u0639\u0627\u0645\u0644\u0647\u060C \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u06AF\u0632\u06CC\u0646\u0647 \u0645\u0627\u0634\u06CC\u0646\u200C\u062D\u0633\u0627\u0628 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u06A9\u0646\u06CC\u062F. "),
    f())
}
function i1(n, s) {
    n & 1 && (h(0, "div", 36),
    C(1, "\u062C\u0647\u062A \u0645\u062D\u0627\u0633\u0628\u0647 \u0646\u0648\u0633\u0627\u0646 \u067E\u0630\u06CC\u0631\u06CC \u0636\u0645\u0646\u06CC(Implied Volatility)"),
    f())
}
function n1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "black-scholes-calculator-risk-modal", 37),
        z("riskButtonClicked", function() {
            R(r);
            let i = w();
            return L(i.handleRiskButtonClick())
        }),
        f()
    }
}
function o1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "black-scholes-calculator-guid-modal", 38),
        z("guidModalClosed", function() {
            R(r);
            let i = w();
            return L(i.isGuidModalVisible.set(!1))
        }),
        f()
    }
}
var kw = ( () => {
    let s = class s {
        constructor() {
            this.icons = Ce,
            this.symbolData = ee.required(),
            this.isMobile = ee.required(),
            this.fb = I(mn),
            this.ls = I(Bt),
            this.symbolService = I(pt),
            this.localStorageService = I(pn),
            this.destroyRef = I(Fp),
            this.settingFacadeService = I(co),
            this.type = kt( () => mo[this.symbolData()?.marketUnit]),
            this.headerTitle = kt( () => this.type() === uo.Call ? "\u0627\u062E\u062A\u06CC\u0627\u0631 \u062E\u0631\u06CC\u062F" : "\u0627\u062E\u062A\u06CC\u0627\u0631 \u0641\u0631\u0648\u0634"),
            this.calculationResult = Ie({}),
            this.isRiskModalVisible = Ie(!0),
            this.isGuidModalVisible = Ie(!1),
            this.buildForm(),
            this.getRiskModalVisibility(),
            this.setBaseIsinLastTradedPrice(),
            this.setDueDateAndStrikePrice(),
            q(this.setOptionIsinLastTradedPrice())
        }
        buildForm() {
            let {volatility: e, interestRate: i} = this.settingFacadeService.getSettings();
            this.formGroup = this.fb.group({
                baseIsinLastTradedPrice: [null, vt.required],
                optionIsinLastTradedPrice: [null, vt.required],
                remainingDaysTillDueDate: [null, vt.required],
                strikePrice: [null, vt.required],
                volatility: [e * 100, [vt.required, vt.min(0), vt.max(100)]],
                riskFreeInterestRate: [i * 100, [vt.required, vt.min(0), vt.max(100)]]
            })
        }
        getRiskModalVisibility() {
            let e = this.localStorageService.getItem(ru);
            this.isRiskModalVisible.set(!e)
        }
        setBaseIsinLastTradedPrice() {
            st(this.symbolData).pipe(yt(this.symbolService.symbolIsReceived$), D( ([e]) => this.symbolService.symbolByCompanyIsin[e.baseIsin]), pe(e => !!e), fe(e => this.ls.subscribeToLs(ze.BlackScholesCalculator, e.symbolIsin)), Tt(1)).subscribe(e => {
                if (!e || !e.val)
                    return;
                let i = e.val;
                this.formGroup.patchValue({
                    baseIsinLastTradedPrice: i
                })
            }
            )
        }
        setOptionIsinLastTradedPrice() {
            return st(this.symbolData).pipe(pe(e => !!e), fe(e => this.ls.subscribeToLs(ze.BlackScholesCalculator, e.symbolIsin)), Tt(1), D(e => {
                let i = +e.val;
                return this.formGroup.patchValue({
                    optionIsinLastTradedPrice: i
                }),
                i
            }
            ))
        }
        setDueDateAndStrikePrice() {
            st(this.symbolData).pipe(D(e => {
                let i = null;
                if (e.shareDueDate) {
                    let a = new Date(e.shareDueDate)
                      , u = new Date;
                    u.setHours(0, 0, 0, 0),
                    i = Math.floor(ut.daysBetweenTwoDates(u, a))
                }
                return {
                    strikePrice: e.strikePrice,
                    remainingDaysTillDueDate: i
                }
            }
            ), t0(this.destroyRef)).subscribe( ({remainingDaysTillDueDate: e, strikePrice: i}) => {
                this.manageFieldDisability("remainingDaysTillDueDate", e),
                this.manageFieldDisability("strikePrice", i)
            }
            )
        }
        manageFieldDisability(e, i) {
            i || i === 0 ? (this.formGroup.get(e).disable(),
            this.formGroup.patchValue({
                [e]: i
            })) : this.formGroup.get(e).enable()
        }
        handleCalculateBlackScholes() {
            if (this.formGroup.invalid)
                return;
            let e = this.formGroup.getRawValue()
              , i = hs(this.type(), +e.baseIsinLastTradedPrice, e.strikePrice, new Date(this.symbolData().shareDueDate), e.volatility / 100, e.riskFreeInterestRate / 100, e.optionIsinLastTradedPrice ?? 0);
            this.calculationResult.set(J(B({}, i), {
                impliedVolatility: this.formGroup.get("optionIsinLastTradedPrice").value ? i.impliedVolatility : null
            }))
        }
        handleRiskButtonClick() {
            this.localStorageService.setItem(ru, "0"),
            this.isRiskModalVisible.set(!1)
        }
        showError(e) {
            let i = this.formGroup.controls[e];
            return i.invalid && (i.dirty || i.touched)
        }
        ngOnDestroy() {
            let e = this.symbolService.symbolByCompanyIsin[this.symbolData().baseIsin];
            this.ls.unsubscribeSchema(ze.BlackScholesCalculator, e?.symbolIsin)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["black-scholes-calculator"]],
        inputs: {
            symbolData: [1, "symbolData"],
            isMobile: [1, "isMobile"]
        },
        decls: 98,
        vars: 65,
        consts: [["calculatorInfo", ""], ["optionIsinLastTradedPriceInfo", ""], [1, "bg-principal", "rounded", "overflow-hidden", "flex-shrink-0"], [1, "bg-principal", "bg-principal-4x-dark", "shadow-sm", "d-flex", "align-items-center", "cup", "ps-2"], [1, "p-2"], [1, "fw-bold"], ["width", "18", "height", "18", "container", "body", "triggers", "mouseenter:mouseleave", 1, "text-primary", 3, "tap", "iconName", "triggers", "ngbPopover"], [1, "p-3"], [3, "ngSubmit", "formGroup"], [1, "row", "row-cols-2", "g-2"], [1, "col"], ["for", "baseIsinLastTradedPrice", 1, "col-form-label", "pb-1", "text-body", "text-opacity-75"], ["id", "baseIsinLastTradedPrice", 1, "form-control", "d-flex", "align-items-center", "bg-principal", "flex-grow-1", "custom-number-nospace", 3, "form", "roundOnStep"], ["for", "optionIsinLastTradedPrice", 1, "col-form-label", "pb-1", "text-body", "text-opacity-75"], ["placeholder", "\u0627\u062E\u062A\u06CC\u0627\u0631\u06CC", "type", "number", "name", "optionIsinLastTradedPrice", "formControlName", "optionIsinLastTradedPrice", 1, "form-control"], ["for", "strikePrice", 1, "col-form-label", "pb-1", "text-body", "text-opacity-75"], ["id", "strikePrice", 1, "form-control", "d-flex", "align-items-center", "bg-principal", "flex-grow-1", "custom-number-nospace", 3, "form", "ngClass", "roundOnStep"], ["for", "remainingDaysTillDueDate", 1, "col-form-label", "pb-1", "text-body", "text-opacity-75"], ["type", "number", "name", "remainingDaysTillDueDate", "formControlName", "remainingDaysTillDueDate", 1, "form-control", 3, "ngClass"], ["for", "volatility", 1, "col-form-label", "pb-1", "text-body", "text-opacity-75"], ["type", "number", "name", "volatility", "formControlName", "volatility", "id", "volatility", 1, "form-control", "bg-body", "bg-principal-2x-dark"], ["for", "riskFreeInterestRate", 1, "col-form-label", "pb-1", "text-body", "text-opacity-75"], ["type", "number", "name", "riskFreeInterestRate", "formControlName", "riskFreeInterestRate", "id", "riskFreeInterestRate", 1, "form-control", "bg-body", "bg-principal-2x-dark"], ["id", "black-scholes-calculator-div", 1, "col-12", "mt-3"], ["type", "submit", "id", "black-scholes-calculator-btn", 1, "btn", "btn-global", "w-100"], [1, "p-3", "border-top"], [1, "text-center"], [1, ""], [1, "d-flex", "bg-emphasis", "bg-opacity-025", "rounded", "p-2"], [1, "w-50"], [1, "d-flex", "rounded", "p-2"], ["dir", "ltr", 1, "w-50"], [1, "d-flex", "rounded", "p-2", "bg-emphasis", "bg-opacity-05"], [1, "d-flex", "justify-content-center", "p-3"], [1, "text-body", "text-opacity-50", "bg-emphasis", "bg-opacity-05", "bg-opacity-hover", "p-2", "cup", "rounded", 3, "click"], ["width", "18", "height", "18", 1, "", 3, "iconName"], [1, "mb-2", "text-justify"], [3, "riskButtonClicked"], [3, "guidModalClosed"]],
        template: function(i, a) {
            if (i & 1) {
                let u = re();
                h(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "span", 5),
                C(4, "\u0645\u0627\u0634\u06CC\u0646 \u062D\u0633\u0627\u0628 \u0627\u062E\u062A\u06CC\u0627\u0631"),
                f(),
                h(5, "svg-icon", 6),
                z("tap", function() {
                    R(u);
                    let g = Ct(7);
                    return L(g)
                }),
                f()(),
                H(6, t1, 2, 0, "ng-template", null, 0, Ft),
                f(),
                h(8, "div", 7)(9, "form", 8),
                z("ngSubmit", function() {
                    return R(u),
                    L(a.handleCalculateBlackScholes())
                }),
                h(10, "div", 9)(11, "div", 10)(12, "label", 11),
                C(13, " \u0642\u06CC\u0645\u062A \u062F\u0627\u0631\u0627\u06CC\u06CC \u067E\u0627\u06CC\u0647 "),
                f(),
                k(14, "custom-number-box", 12),
                f(),
                h(15, "div", 10)(16, "label", 13),
                C(17, " \u0642\u06CC\u0645\u062A \u0642\u0631\u0627\u0631\u062F\u0627\u062F "),
                f(),
                h(18, "svg-icon", 6),
                z("tap", function() {
                    R(u);
                    let g = Ct(22);
                    return L(g)
                }),
                f(),
                k(19, "label", 13)(20, "input", 14),
                H(21, i1, 2, 0, "ng-template", null, 1, Ft),
                f(),
                h(23, "div", 10)(24, "label", 15),
                C(25, "\u0642\u06CC\u0645\u062A \u0627\u0639\u0645\u0627\u0644"),
                f(),
                k(26, "custom-number-box", 16),
                f(),
                h(27, "div", 10)(28, "label", 17),
                C(29, " \u0631\u0648\u0632 \u062A\u0627 \u0633\u0631 \u0631\u0633\u06CC\u062F "),
                f(),
                k(30, "input", 18),
                f(),
                h(31, "div", 10)(32, "label", 19),
                C(33, " \u0646\u0648\u0633\u0627\u0646 \u067E\u0630\u06CC\u0631\u06CC (%) "),
                f(),
                k(34, "input", 20),
                f(),
                h(35, "div", 10)(36, "label", 21),
                C(37, " \u0646\u0631\u062E \u0628\u0647\u0631\u0647 (%) "),
                f(),
                k(38, "input", 22),
                f(),
                h(39, "div", 23)(40, "button", 24),
                C(41, "\u0645\u062D\u0627\u0633\u0628\u0647"),
                f()()()()(),
                h(42, "div", 25)(43, "div", 26)(44, "div", 27)(45, "div", 28),
                k(46, "div", 29),
                h(47, "div", 29),
                C(48),
                f()()(),
                h(49, "div", 27)(50, "div", 30)(51, "div", 29),
                C(52, "\u0642\u06CC\u0645\u062A \u0645\u0646\u0635\u0641\u0627\u0646\u0647"),
                f(),
                h(53, "div", 31),
                C(54),
                $(55, "number"),
                f()(),
                h(56, "div", 32)(57, "div", 29),
                C(58, "Delta"),
                f(),
                h(59, "div", 31),
                C(60),
                $(61, "number"),
                f()(),
                h(62, "div", 30)(63, "div", 29),
                C(64, "Gamma"),
                f(),
                h(65, "div", 31),
                C(66),
                $(67, "minNonZeroFractionalNumbers"),
                f()(),
                h(68, "div", 32)(69, "div", 29),
                C(70, "Vega"),
                f(),
                h(71, "div", 31),
                C(72),
                $(73, "number"),
                f()(),
                h(74, "div", 30)(75, "div", 29),
                C(76, "Theta"),
                f(),
                h(77, "div", 31),
                C(78),
                $(79, "number"),
                f()(),
                h(80, "div", 32)(81, "div", 29),
                C(82, "Rho"),
                f(),
                h(83, "div", 31),
                C(84),
                $(85, "number"),
                f()(),
                h(86, "div", 30)(87, "div", 29),
                C(88, "\u0646\u0648\u0633\u0627\u0646 \u067E\u0630\u06CC\u0631\u06CC \u0636\u0645\u0646\u06CC"),
                f(),
                h(89, "div", 31),
                C(90),
                $(91, "number"),
                f()()()()(),
                h(92, "div", 33)(93, "div", 34),
                z("click", function() {
                    return R(u),
                    L(a.isGuidModalVisible.set(!0))
                }),
                k(94, "svg-icon", 35),
                C(95, " \u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0645\u0627\u0634\u06CC\u0646\u200C\u062D\u0633\u0627\u0628 "),
                f()()(),
                H(96, n1, 1, 0, "black-scholes-calculator-risk-modal")(97, o1, 1, 0, "black-scholes-calculator-guid-modal")
            }
            if (i & 2) {
                let u, p, g, y, O, j, Z = Ct(7), xe = Ct(22);
                d(5),
                b("iconName", a.icons.QuestionBox)("triggers", a.isMobile() ? "click:blur" : "mouseenter:mouseleave")("ngbPopover", Z),
                d(4),
                b("formGroup", a.formGroup),
                d(5),
                bi(a.isMobile() ? "text-start" : ""),
                Pi("is-invalid", a.showError("baseIsinLastTradedPrice")),
                b("form", a.formGroup)("roundOnStep", !0),
                d(4),
                b("iconName", a.icons.QuestionBox)("triggers", a.isMobile() ? "click:blur" : "mouseenter:mouseleave")("ngbPopover", xe),
                d(2),
                Pi("is-invalid", a.showError("optionIsinLastTradedPrice")),
                d(6),
                bi(a.isMobile() ? "text-start" : ""),
                Pi("is-invalid", a.showError("strikePrice")),
                b("form", a.formGroup)("ngClass", Fe(61, V0, a.formGroup.get("strikePrice").disabled))("roundOnStep", !0),
                d(4),
                Pi("is-invalid", a.showError("remainingDaysTillDueDate")),
                b("ngClass", Fe(63, V0, a.formGroup.get("remainingDaysTillDueDate").disabled)),
                d(4),
                Pi("is-invalid", a.showError("volatility")),
                d(4),
                Pi("is-invalid", a.showError("riskFreeInterestRate")),
                d(10),
                X(a.headerTitle()),
                d(6),
                K(" ", (u = ae(55, 40, a.calculationResult().price, "1.0-0")) !== null && u !== void 0 ? u : "-", " "),
                d(6),
                X((p = ae(61, 43, a.calculationResult().delta, "1.0-2")) !== null && p !== void 0 ? p : "-"),
                d(6),
                K(" ", ae(67, 46, a.calculationResult().gamma, 2) || "-", " "),
                d(6),
                X((g = ae(73, 49, a.calculationResult().vega, "1.0-2")) !== null && g !== void 0 ? g : "-"),
                d(6),
                X((y = ae(79, 52, a.calculationResult().theta, "1.0-2")) !== null && y !== void 0 ? y : "-"),
                d(6),
                X((O = ae(85, 55, a.calculationResult().rho, "1.0-2")) !== null && O !== void 0 ? O : "-"),
                d(6),
                K(" ", (j = ae(91, 58, a.calculationResult().impliedVolatility, "1.0-2")) !== null && j !== void 0 ? j : "-", " "),
                d(4),
                b("iconName", a.icons.QuestionBox),
                d(2),
                W(a.isRiskModalVisible() ? 96 : -1),
                d(),
                W(a.isGuidModalVisible() ? 97 : -1)
            }
        },
        dependencies: [Je, Wt, rs, Lt, cn, ki, Xo, Oi, ln, un, dn, s0, E0, B0, y0, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var cr = function(n) {
    return n[n.Unknown = -1] = "Unknown",
    n[n.Normal = 0] = "Normal",
    n[n.Danger = 1] = "Danger",
    n[n.CallMargin = 2] = "CallMargin",
    n
}(cr || {})
  , Rw = {
    [cr.Unknown]: {
        title: "\u0646\u0627\u0645\u0634\u062E\u0635",
        class: "text-body bg-body bg-opacity-05  px-2 py-1  rounded-2",
        tooltipClass: "text-body"
    },
    [cr.Normal]: {
        title: "\u0639\u0627\u062F\u06CC",
        class: "text-success bg-success bg-opacity-05 px-2 py-1  rounded-2",
        tooltipClass: "text-success"
    },
    [cr.Danger]: {
        title: "\u062F\u0631 \u062E\u0637\u0631",
        class: "text-warning bg-warning bg-opacity-05 px-2 py-1  rounded-2",
        tooltipClass: "text-warning"
    },
    [cr.CallMargin]: {
        title: "\u06A9\u0627\u0644 \u0645\u0627\u0631\u062C\u06CC\u0646",
        class: "text-danger bg-danger bg-opacity-05 px-2 py-1  rounded-2",
        tooltipClass: "text-danger"
    }
}
  , au = function(n) {
    return n[n.Position = 1] = "Position",
    n[n.Chain = 2] = "Chain",
    n[n.MarketView = 3] = "MarketView",
    n[n.MarketMap = 4] = "MarketMap",
    n
}(au || {})
  , ur = function(n) {
    return n.ITM = "ITM",
    n.OTM = "OTM",
    n.ATM = "ATM",
    n
}(ur || {})
  , Lw = {
    0: "\u062F\u0631\u062E\u0648\u0627\u0633\u062A\u06CC \u062B\u0628\u062A \u0646\u0634\u062F\u0647",
    1: "\u062B\u0628\u062A \u0634\u062F\u0647",
    2: "\u062B\u0628\u062A \u0634\u062F\u0647",
    3: "\u062B\u0628\u062A \u062F\u0631 \u0647\u0633\u062A\u0647",
    4: "\u0627\u0646\u062C\u0627\u0645 \u0634\u062F",
    5: "\u0627\u0646\u062C\u0627\u0645 \u0646\u0634\u062F",
    6: "\u0627\u0646\u062C\u0627\u0645 \u0634\u062F",
    7: "\u0642\u0631\u0627\u0631\u062F\u0627\u062F \u062F\u0631 \u0632\u06CC\u0627\u0646",
    8: "\u0645\u0627\u0646\u062F\u0647 \u0646\u0627\u06A9\u0627\u0641\u06CC",
    9: "\u0628\u062E\u0634\u06CC \u0627\u0646\u062C\u0627\u0645 \u0634\u062F",
    10: "\u062F\u0631 \u062D\u0627\u0644 \u0627\u0631\u0633\u0627\u0644",
    11: "\u062E\u0637\u0627\u06CC \u0633\u06CC\u0633\u062A\u0645"
}
  , Bw = {
    [Ee.Buy]: "buy",
    [Ee.Sell]: "sell"
}
  , fs = function(n) {
    return n[n.CashSettlement = 1] = "CashSettlement",
    n[n.PhysicalSettlement = 2] = "PhysicalSettlement",
    n
}(fs || {})
  , $0 = [{
    title: "\u062A\u0639\u062F\u0627\u062F \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0631\u0627\u06CC \u062A\u0633\u0648\u06CC\u0647",
    fieldName: "quantity"
}, {
    title: "\u0627\u0639\u0645\u0627\u0644 \u062D\u062F\u0627\u06A9\u062B\u0631\u06CC",
    fieldName: "maximumSending"
}, {
    title: "\u0645\u0648\u0627\u0641\u0642\u062A \u0628\u0627 \u062A\u0633\u0648\u06CC\u0647 \u0628\u0647 \u06A9\u0633\u0631",
    fieldName: "fraction"
}, {
    title: "\u062A\u0627\u0631\u06CC\u062E",
    fieldName: "createDate",
    width: 20
}]
  , U0 = [{
    title: "\u062A\u0639\u062F\u0627\u062F \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0631\u0627\u06CC \u062A\u0633\u0648\u06CC\u0647",
    fieldName: "quantity"
}, {
    title: "\u0627\u0639\u0645\u0627\u0644 \u062D\u062F\u0627\u06A9\u062B\u0631\u06CC",
    fieldName: "maximumSending"
}, {
    title: "\u0645\u0648\u0627\u0641\u0642\u062A \u0628\u0627 \u062A\u0633\u0648\u06CC\u0647 \u062F\u0631 \u0632\u06CC\u0627\u0646",
    fieldName: "requestSettlementInLoss"
}, {
    title: "\u062A\u0627\u0631\u06CC\u062E",
    fieldName: "createDate",
    width: 20
}]
  , j0 = [{
    title: "\u0646\u0645\u0627\u062F",
    fieldName: "symbolName"
}, {
    title: "\u062A\u0627\u0631\u06CC\u062E \u0633\u0631\u0631\u0633\u06CC\u062F",
    fieldName: "shareDueDate"
}, {
    title: "\u062A\u0639\u062F\u0627\u062F \u0645\u0648\u0642\u0639\u06CC\u062A",
    fieldName: "executedQuantity"
}, {
    title: "\u0622\u062E\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A",
    fieldName: "lastTradedPrice",
    width: 20
}, {
    title: "\u0627\u0631\u0632\u0634 \u0641\u0639\u0644\u06CC",
    fieldName: "currentValue",
    width: 20
}, {
    title: "\u0633\u0648\u062F/\u0632\u06CC\u0627\u0646 \u0645\u0627\u0646\u062F\u0647",
    fieldName: "profitAmount",
    width: 20
}, {
    title: "\u0648\u062C\u0647 \u062A\u0636\u0645\u06CC\u0646",
    fieldName: "totalMargin",
    width: 20
}, {
    title: "\u062A\u0633\u0648\u06CC\u0647 \u0646\u0642\u062F\u06CC",
    fieldName: "cashSettlement",
    width: 20
}, {
    title: "\u062A\u0633\u0648\u06CC\u0647 \u0641\u06CC\u0632\u06CC\u06A9\u06CC",
    fieldName: "physicalSettlement",
    width: 20
}, {
    title: "\u0642\u06CC\u0645\u062A \u0627\u0639\u0645\u0627\u0644",
    fieldName: "strikePrice",
    width: 20
}, {
    title: "\u0642\u06CC\u0645\u062A \u0633\u0631\u0628\u0647\u200C\u0633\u0631",
    fieldName: "calculatedBreakEvenPoint",
    width: 20
}, {
    title: "\u0633\u0648\u062F/\u0632\u06CC\u0627\u0646 \u0628\u0633\u062A\u0647 \u0634\u062F\u0647",
    fieldName: "closedPositionProfitLoss",
    width: 20
}, {
    title: "\u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC",
    fieldName: "closingPrice",
    width: 20
}, {
    title: "\u0633\u0641\u0627\u0631\u0634 \u0628\u0627\u0632 \u062E\u0631\u06CC\u062F",
    fieldName: "openBuyQuantity",
    width: 20
}, {
    title: "\u0633\u0641\u0627\u0631\u0634 \u0628\u0627\u0632 \u0641\u0631\u0648\u0634",
    fieldName: "openSellQuantity",
    width: 20
}]
  , z0 = [{
    title: "\u0646\u0645\u0627\u062F",
    fieldName: "symbolName",
    width: 15
}, {
    title: "\u0646\u0648\u0639 \u0627\u0648\u0631\u0627\u0642",
    fieldName: "optionSide"
}, {
    title: "\u0648\u0636\u0639\u06CC\u062A \u0642\u0631\u0627\u0631\u062F\u0627\u062F",
    fieldName: "contractState",
    width: 15
}, {
    title: "\u0642\u06CC\u0645\u062A \u062A\u0642\u0627\u0636\u0627",
    fieldName: "bestBuyPrice",
    width: 15
}, {
    title: "\u0642\u06CC\u0645\u062A \u0639\u0631\u0636\u0647",
    fieldName: "bestSellPrice",
    width: 15
}, {
    title: "\u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC",
    fieldName: "closingPrice",
    width: 15
}, {
    title: "\u0622\u062E\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A",
    fieldName: "lastTradedPrice",
    width: 15
}, {
    title: "\u0628\u0644\u06A9 \u0634\u0648\u0644\u0632",
    fieldName: "blackScholesPrice",
    width: 15
}, {
    title: "\u0646\u0648\u0633\u0627\u0646\u200C\u067E\u0630\u06CC\u0631\u06CC \u0636\u0645\u0646\u06CC",
    fieldName: "impliedVolatility",
    width: 15
}]
  , gs = {
    [Ee.Buy]: "\u0642\u0631\u0627\u0631\u062F\u0627\u062F \u062E\u0631\u06CC\u062F",
    [Ee.Sell]: "\u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0641\u0631\u0648\u0634",
    [Ee.None]: "\u0647\u0631\u062F\u0648 \u0642\u0631\u0627\u0631\u062F\u0627\u062F"
}
  , lu = {
    [Rt.BuyOptionTse]: Rt.BuyOptionTse,
    [Rt.BuyOptionIfb]: Rt.BuyOptionIfb
}
  , cu = {
    [Rt.SellOptionTse]: Rt.SellOptionTse,
    [Rt.SellOptionIfb]: Rt.SellOptionIfb
}
  , Vw = B(B({}, lu), cu)
  , $w = {
    45: Ee.Buy,
    46: Ee.Buy,
    47: Ee.Sell,
    48: Ee.Sell
}
  , dr = {
    0: [Rt.BuyOptionTse, Rt.BuyOptionIfb],
    1: [Rt.SellOptionTse, Rt.SellOptionIfb]
}
  , Uw = {
    [ds.Unseen]: {
        title: "\u0634\u0645\u0627 \u0628\u0647 \u0628\u0627\u0632\u0627\u0631 \u0622\u067E\u0634\u0646 \u062F\u0633\u062A\u0631\u0633\u06CC \u0646\u062F\u0627\u0631\u06CC\u062F!",
        description: "\u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u062F\u0633\u062A\u0631\u0633\u06CC \u0627\u0628\u062A\u062F\u0627 \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0645\u0631\u0628\u0648\u0637\u0647 \u0631\u0627 \u0627\u0645\u0636\u0627 \u06A9\u0646\u06CC\u062F"
    },
    [ds.Inactive]: {
        title: "\u0634\u0645\u0627 \u0628\u0647 \u0628\u0627\u0632\u0627\u0631 \u0622\u067E\u0634\u0646 \u062F\u0633\u062A\u0631\u0633\u06CC \u0646\u062F\u0627\u0631\u06CC\u062F!",
        description: "\u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u062F\u0633\u062A\u0631\u0633\u06CC \u0627\u0628\u062A\u062F\u0627 \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0645\u0631\u0628\u0648\u0637\u0647 \u0631\u0627 \u0627\u0645\u0636\u0627 \u06A9\u0646\u06CC\u062F"
    },
    [ds.PendingForReview]: {
        title: "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0634\u0645\u0627 \u062F\u0631 \u062D\u0627\u0644 \u0628\u0631\u0631\u0633\u06CC\u200C \u0645\u06CC\u200C\u0628\u0627\u0634\u062F",
        description: "\u0645\u0634\u062A\u0631\u06CC \u06AF\u0631\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062F\u0633\u062A\u0631\u0633\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0633\u0631\u0648\u06CC\u0633 \u0622\u067E\u0634\u0646 \u062A\u0648\u0633\u0637 \u06A9\u0627\u0631\u0634\u0646\u0627\u0633\u0627\u0646 \u0645\u0627 \u062F\u0631 \u062D\u0627\u0644 \u0628\u0631\u0631\u0633\u06CC\u200C \u0645\u06CC\u200C\u0628\u0627\u0634\u062F"
    },
    [ds.Rejected]: {
        title: "\u0634\u0645\u0627 \u0628\u0647 \u0628\u0627\u0632\u0627\u0631 \u0622\u067E\u0634\u0646 \u062F\u0633\u062A\u0631\u0633\u06CC \u0646\u062F\u0627\u0631\u06CC\u062F",
        description: "\u0645\u0634\u062A\u0631\u06CC \u06AF\u0631\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062F\u0633\u062A\u0631\u0633\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0633\u0631\u0648\u06CC\u0633 \u0622\u067E\u0634\u0646 \u062A\u0648\u0633\u0637 \u06A9\u0627\u0631\u0634\u0646\u0627\u0633\u0627\u0646 \u0645\u0627 \u0631\u062F \u0634\u062F\u0647 \u0627\u0633\u062A"
    },
    [ds.Confirm]: void 0
};
function jw(n, s, r, e) {
    let i = n?.data
      , a = s == fs.CashSettlement ? i?.cashSettlement : i?.physicalSettlement;
    if (r) {
        if (e != 1)
            return "\u062F\u0631 \u0631\u0648\u0632 \u062A\u0633\u0648\u06CC\u0647 \u0628\u0647 \u0635\u0648\u0631\u062A \u062E\u0648\u062F\u06A9\u0627\u0631 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u062F \u0634\u062F"
    } else
        switch (a?.state) {
        case 0:
            return "";
        case 1:
            return `\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0634\u0645\u0627 \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E ${ut.getJDateLongString(a.createDate)} \u062B\u0628\u062A \u0634\u062F\u0647 \u0627\u0633\u062A`;
        case 2:
            return "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062A\u0633\u0648\u06CC\u0647 \u0628\u0647 \u0635\u0648\u0631\u062A \u0627\u062A\u0648\u0645\u0627\u062A\u06CC\u06A9 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u062F \u0634\u062F";
        case 3:
            return "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0634\u0645\u0627 \u0628\u0647 \u0647\u0633\u062A\u0647 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u0627\u0633\u062A";
        case 4:
            return a.amountExecutedInCash != null ? `\u062A\u0639\u062F\u0627\u062F ${a.amountExecutedInCash} \u0645\u0648\u0642\u0639\u06CC\u062A \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647` : "";
        case 5:
            return "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0634\u0645\u0627 \u062F\u0631 \u0627\u062A\u0627\u0642 \u067E\u0627\u06CC\u0627\u067E\u0627\u06CC \u0627\u0646\u062C\u0627\u0645 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A";
        case 6:
            return a.amountExecutedInPhysical != null ? `\u062A\u0639\u062F\u0627\u062F ${a.amountExecutedInPhysical} \u0645\u0648\u0642\u0639\u06CC\u062A \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647` : "";
        case 7:
            return "\u0628\u0627 \u062A\u0648\u062C\u0647 \u0628\u0647 \u0642\u06CC\u0645\u062A \u0627\u0639\u0645\u0627\u0644 \u0648 \u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0647 \u062F\u0631 \u0631\u0648\u0632 \u0633\u0631\u0631\u0633\u06CC\u062F \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u062F\u0631 \u0632\u06CC\u0627\u0646 \u0628\u0648\u062F\u0647 \u0627\u0633\u062A";
        case 8:
            return "\u062F\u0631 \u0631\u0648\u0632 \u0633\u0631\u0631\u0633\u06CC\u062F \u0645\u0627\u0646\u062F\u0647 \u06A9\u0627\u0641\u06CC \u062C\u0647\u062A \u062A\u0633\u0648\u06CC\u0647 \u062F\u0631 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0634\u062A\u0647 \u0627\u0633\u062A";
        case 9:
            return "\u0628\u062E\u0634\u06CC \u0627\u0632 \u062A\u0633\u0648\u06CC\u0647 \u0646\u0642\u062F\u06CC \u0627\u0646\u062C\u0627\u0645 \u0634\u062F";
        case 10:
            return "\u062F\u0631 \u062D\u0627\u0644 \u0627\u0631\u0633\u0627\u0644";
        case 11:
            return "\u0647\u0646\u06AF\u0627\u0645 \u062F\u0631\u06CC\u0627\u0641\u062A \u062A\u0648\u0633\u0637 \u0647\u0633\u062A\u0647 \u062E\u0637\u0627\u06CC\u06CC \u0631\u062E \u062F\u0627\u062F\u0647 \u0627\u0633\u062A";
        default:
            return ""
        }
}
var Dt = function(n) {
    return n.MOST_VALUE = "value",
    n.MOST_VOLUME = "volume",
    n.MOST_SUPPLY = "supply",
    n.MOST_DEMAND = "demand",
    n.MOST_VIEW = "view",
    n.MOST_OPEN_SELL_POSITIONS = "positions/sell",
    n.MOST_OPEN_BUY_POSITIONS = "positions/buy",
    n.MOST_PERSON_BUY = "person-trade",
    n.MOST_TRADE_PRICE_BEST = "trade-price-var/best",
    n.MOST_TRADE_PRICE_WORST = "trade-price-var/worst",
    n.MOST_PROFIT_IN_CONTRACT = "return/profit",
    n.MOST_LOSS_IN_CONTRACT = "return/loss",
    n
}(Dt || {});
var Kw = Dt.MOST_VOLUME
  , Qw = [{
    name: "50 \u0646\u0645\u0627\u062F \u0628\u0631\u062A\u0631 \u062D\u062C\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062A",
    value: Dt.MOST_VOLUME
}, {
    name: "50 \u0646\u0645\u0627\u062F \u0628\u0631\u062A\u0631 \u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062A",
    value: Dt.MOST_VALUE
}, {
    name: "50 \u0646\u0645\u0627\u062F \u0628\u0631\u062A\u0631 \u0645\u0648\u0642\u0639\u06CC\u062A \u0628\u0627\u0632 \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u062E\u0631\u06CC\u062F",
    value: Dt.MOST_OPEN_BUY_POSITIONS
}, {
    name: "50 \u0646\u0645\u0627\u062F \u0628\u0631\u062A\u0631 \u0645\u0648\u0642\u0639\u06CC\u062A \u0628\u0627\u0632 \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0641\u0631\u0648\u0634",
    value: Dt.MOST_OPEN_SELL_POSITIONS
}, {
    name: "50 \u0646\u0645\u0627\u062F \u0628\u0631\u062A\u0631 \u067E\u0631 \u062A\u0642\u0627\u0636\u0627",
    value: Dt.MOST_DEMAND
}, {
    name: "50 \u0646\u0645\u0627\u062F \u0628\u0631\u062A\u0631 \u067E\u0631 \u0639\u0631\u0636\u0647",
    value: Dt.MOST_SUPPLY
}, {
    name: "\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646 \u0628\u0627\u0632\u062F\u06CC\u062F",
    value: Dt.MOST_VIEW
}, {
    name: "50 \u0646\u0645\u0627\u062F \u0628\u0631\u062A\u0631 \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC",
    value: Dt.MOST_PERSON_BUY
}, {
    name: "50 \u0646\u0645\u0627\u062F \u0628\u0631\u062A\u0631 \u0628\u0627\u0632\u062F\u0647 \u0645\u062B\u0628\u062A",
    value: Dt.MOST_TRADE_PRICE_BEST
}, {
    name: "50 \u0646\u0645\u0627\u062F \u0628\u0631\u062A\u0631 \u0628\u0627\u0632\u062F\u0647 \u0645\u0646\u0641\u06CC",
    value: Dt.MOST_TRADE_PRICE_WORST
}, {
    name: "\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646 \u0633\u0648\u062F \u062F\u0631 \u0642\u0631\u0627\u0631\u062F\u0627\u062F ",
    value: Dt.MOST_PROFIT_IN_CONTRACT
}, {
    name: "\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646 \u0632\u06CC\u0627\u0646 \u062F\u0631 \u0642\u0631\u0627\u0631\u062F\u0627\u062F",
    value: Dt.MOST_LOSS_IN_CONTRACT
}]
  , Zw = {
    [ur.ATM]: "bg-success text-success",
    [ur.ITM]: "bg-secondary text-secondary",
    [ur.OTM]: "bg-danger text-danger"
};
function W0(n, s, r, e, i, a, u, p) {
    if (n === Ee.Buy)
        return s * r * (e * (1 - i) - a * (1 + u));
    if (n === Ee.Sell)
        return s * r * (p * (1 - i) - e * (1 + u))
}
var mr = n => n.positionState
  , uu = Oe(mr, n => n?.loading)
  , du = Oe(mr, n => Object.values(n.entities))
  , H0 = Oe(mr, n => n.ids)
  , G0 = Oe(du, n => n.map(s => s.symbolIsin))
  , q0 = Oe(mr, n => n.marketData)
  , K0 = Oe(q0, n => Object.keys(n))
  , Q0 = Oe(du, q0, (n, s) => n.map(r => {
    let e = s?.[r.symbolIsin];
    return J(B(B({}, r), e), {
        stateColor: Fi(e?.stateCode),
        closingPricePercent: tr(e?.closingPrice, e?.feeOfPreviousDaysClosingPrice, e?.totalNumberOfSharesTraded)
    })
}
))
  , mu = n => Oe(mr, s => s.entities[n])
  , pu = n => Oe(du, s => s?.find(r => r.symbolIsin === n));
var me = as({
    source: "position",
    events: {
        load: mt(),
        loadedError: mt(),
        empty: mt(),
        requestDone: mt(),
        set: Te(),
        add: Te(),
        update: Te(),
        upsert: Te(),
        loadCashSettlement: Te(),
        loadPhysicalSettlement: Te(),
        updateCashSettlement: Te(),
        updatePhysicalSettlement: Te(),
        createCashSettlement: Te(),
        createPhysicalSettlement: Te(),
        deleteSettlementRequest: Te(),
        deleteCashSettlement: Te(),
        deletePhysicalSettlement: Te(),
        unSubscribeMarketToLs: mt(),
        subscribeMarketToLs: mt(),
        setMarketData: Te(),
        upsertMarketData: Te(),
        subscribeOptionAveragePriceToLs: mt()
    }
});
var Z0 = ( () => {
    let s = class s {
        constructor() {
            this.store = I(ai),
            this.actions$ = I(ao),
            this.symbolService = I(pt),
            this.timeService = I(ns),
            this.settingFacadeService = I(co),
            this.orderFacade = I(w0),
            this.Loading = this.store.selectSignal(uu),
            this.Loading$ = this.store.select(uu),
            this.PositionIds$ = this.store.select(H0),
            this.PositionIsins$ = this.store.select(G0),
            this.MarketDataIsins$ = this.store.select(K0),
            this.PositionItems$ = this.store.select(Q0).pipe(yt(this.settingFacadeService.getSettings$(), this.timeService.isMarketOpen$.pipe(_i()), this.orderFacade.getOpenBuyOrders(), this.orderFacade.getOpenSellOrders(), this.symbolService.symbolIsReceived$), D( ([e,i,a,u,p]) => e.filter(g => g.executedQuantity > 0).map(g => {
                let y = this.symbolService.symbolByIsin[g.symbolIsin]
                  , O = u[g.symbolIsin]?.map(Z => Z.quantity)?.reduce( (Z, xe) => Z + xe, 0) ?? 0
                  , j = p[g.symbolIsin]?.map(Z => Z.quantity)?.reduce( (Z, xe) => Z + xe, 0) ?? 0;
                return J(B({}, g), {
                    openBuyQuantity: O,
                    openSellQuantity: j,
                    symbolName: g.symbolName,
                    strikePrice: y?.strikePrice,
                    shareDueDate: y?.shareDueDate,
                    canBuy: y?.canBuy,
                    canSell: y?.canBuy,
                    profitAmount: W0(g.side, g.executedQuantity, y?.csize ?? 1, g.lastTradedPrice, +y?.sellCommission, g.buyAveragePrice, +y?.buyCommission, g.sellAveragePrice),
                    currentValue: p0(g.closingPrice, g.lastTradedPrice, g.side === Ee.Buy ? +y?.sellCommission : -y.buyCommission, i.portfolioTotalValueCalculateType, g.stateColor, g.executedQuantity, a, y?.csize ?? 1) * (g.side === Ee.Buy ? 1 : -1),
                    breakEvenPoint: h0(g.side, g.buyAveragePrice, g.sellAveragePrice, +y?.buyCommission, +y?.sellCommission)
                })
            }
            ))),
            this.PositionSummary$ = this.PositionItems$.pipe(D(e => ({
                totalClosedPositionProfitLoss: e.map(i => i.closedPositionProfitLoss).reduce( (i, a) => i + a, 0),
                totalMargin: e.map(i => i.totalMargin).reduce( (i, a) => i + a, 0),
                totalCurrentValue: e.map(i => i.currentValue).reduce( (i, a) => i + a, 0),
                totalProfitAmount: e.map(i => i.profitAmount).reduce( (i, a) => i + a, 0)
            }))),
            this.loadedError$ = this.actions$.pipe(We(me.loadedError)),
            this.positionUpdate$ = this.actions$.pipe(We(me.loadCashSettlement, me.loadPhysicalSettlement, me.deleteCashSettlement, me.deletePhysicalSettlement))
        }
        getPositionsByIsin(e) {
            return this.store.select(pu(e))
        }
        getPositionsById$(e) {
            return this.store.select(mu(e))
        }
        getPositionsById(e) {
            return this.store.selectSignal(mu(e))()
        }
        getPositionsItemById$(e) {
            return this.PositionItems$.pipe(D(i => i.find(a => a.id === e)))
        }
        getPositionsByIsin$(e) {
            return this.store.select(pu(e))
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var Xa = ( () => {
    let s = class s extends Yi {
        constructor() {
            super(...arguments),
            this.httpClient = I(Xp)
        }
        get optionOrderUrl() {
            return this.mtsPath + this.apiUrls.option
        }
        get() {
            return this.httpService.get(`${this.optionOrderUrl}Positions`).pipe(D(e => e.map(i => J(B({}, i), {
                symbolName: er(i.symbolName)
            }))))
        }
        getHistory(e) {
            return this.httpService.post(`${this.optionOrderUrl}Positions/history`, {
                body: B({}, e)
            })
        }
        getCashSettlements(e) {
            return this.httpService.get(`${this.optionOrderUrl}Positions/${e}/settlements/cash`)
        }
        getPhysicalSettlements(e) {
            return this.httpService.get(`${this.optionOrderUrl}Positions/${e}/settlements/physical`)
        }
        getCashSettlement(e) {
            return this.httpService.get(`${this.optionOrderUrl}Positions/settlements/${e}/cash`)
        }
        getPhysicalSettlement(e) {
            return this.httpService.get(`${this.optionOrderUrl}Positions/settlements/${e}/physical`)
        }
        getCustomerStatus() {
            return this.httpService.get(`${this.optionOrderUrl}Customers/status`).pipe(tt( () => he({
                margin: 0,
                status: -1
            })))
        }
        createCashSettlement(e) {
            return this.httpClient.post(`${this.optionOrderUrl}Positions/settlements/cash`, B({}, e), {
                observe: "response"
            }).pipe(D(i => ({
                isSuccessful: !0,
                id: i?.headers.get("X-Settlement-Id"),
                message: "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062A\u0633\u0648\u06CC\u0647 \u0646\u0642\u062F\u06CC \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062B\u0628\u062A \u0634\u062F"
            })), tt(i => he({
                isSuccessful: !1,
                message: i?.detail ?? i?.error?.detail ?? "\u062E\u0637\u0627 \u062F\u0631 \u062B\u0628\u062A \u062A\u0633\u0648\u06CC\u0647"
            })))
        }
        createPhysicalSettlement(e) {
            return this.httpClient.post(`${this.optionOrderUrl}Positions/settlements/physical`, B({}, e), {
                observe: "response"
            }).pipe(D(i => ({
                isSuccessful: !0,
                id: i?.headers.get("X-Settlement-Id"),
                message: "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062A\u0633\u0648\u06CC\u0647 \u0641\u06CC\u0632\u06CC\u06A9\u06CC \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062B\u0628\u062A \u0634\u062F"
            })), tt(i => he({
                isSuccessful: !1,
                message: i.detail ?? i?.error?.detail ?? "\u062E\u0637\u0627 \u062F\u0631 \u062B\u0628\u062A \u062A\u0633\u0648\u06CC\u0647"
            })))
        }
        deleteSettlementRequest(e, i) {
            return this.httpService.delete(`${this.optionOrderUrl}positions/settlements/${e}/${i === fs.CashSettlement ? "cash" : "physical"}`).pipe(D( () => ({
                isSuccessful: !0,
                message: "\u062D\u0630\u0641  \u062A\u0633\u0648\u06CC\u0647  \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F"
            })), tt(a => he({
                isSuccessful: !1,
                message: a.detail ?? a?.error?.detail ?? "\u062E\u0637\u0627 \u062F\u0631 \u062D\u0630\u0641 \u062F\u0631\u062E\u0648\u0627\u0633\u062A"
            })))
        }
        getContractForSymbol(e) {
            return this.httpService.get(`${this.mtsPath + this.apiUrls.option}Contracts/${e}/symbol`)
        }
    }
    ;
    s.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = oi(s)))(a || s)
        }
    }
    )(),
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var _n = ( () => {
    let s = class s {
        constructor() {
            this.store = I(ai),
            this.lsService = I(Bt),
            this.positionStore = I(Z0),
            this.marketDataService = I(Li),
            this.notifyService = I(fn),
            this.optionService = I(Xa),
            this.load = () => this.store.dispatch(me.load()),
            this.notifyError = e => this.notifyService.alert(e, dt.danger),
            this.notifySuccess = e => this.notifyService.alert(e, dt.success),
            this.unSubscribeToMarketDataLs = () => this.lsService.unsubscribeSchema(ze.RealtimePortfolio),
            this.unSubscribeToMarketDataLsById = (e, i=ze.RealtimePortfolio) => this.lsService.unsubscribeSchemaTypeAndIds(i, e),
            this.createCashSettlement = e => this.store.dispatch(me.createCashSettlement({
                value: e
            })),
            this.createPhysicalSettlement = e => this.store.dispatch(me.createPhysicalSettlement({
                value: e
            })),
            this.deleteSettlementRequest = (e, i, a) => this.store.dispatch(me.deleteSettlementRequest({
                id: e,
                positionId: i,
                settlementType: a
            })),
            this.subscribeOptionAveragePriceLs = () => this.store.dispatch(me.subscribeOptionAveragePriceToLs())
        }
        subscribeToMarketDataLs(e, i=ze.RealtimePortfolio) {
            let a = p => {
                let g = je.MobileRealTimePortfolioSchema
                  , y = {
                    symbolIsin: p.inst,
                    stateCode: p.val[g.stateCode],
                    lastTradedPrice: +(p.val[g.LastTradedPrice] ?? 0),
                    closingPrice: +(p.val[g.ClosingPrice] ?? 0),
                    lastTradedPricePercent: +(p.val[g.lastTradedPriceVarPercent] ?? 0),
                    feeOfPreviousDaysClosingPrice: +(p.val[g.feeOfPreviousDaysClosingPrice] ?? 0),
                    totalNumberOfSharesTraded: +(p.val[g.TotalNumberOfSharesTraded] ?? 0)
                };
                this.store.dispatch(me.upsertMarketData({
                    value: y
                }))
            }
            ;
            return (e?.length ? he(e) : this.positionStore.PositionIsins$).pipe(pe(p => !!p?.length), Q(p => this.lsService.subscribeToLsIfNotAvailable(i, p, a)))
        }
        getMarketDataWhenLsIsNotConnected(e) {
            let i = () => (e?.length ? he(e) : this.positionStore.PositionIsins$).pipe(Ze(), fe(u => this.fetchMarketData(u)), D(this.transformMarketItems), Q(u => this.store.dispatch(me.setMarketData({
                values: u
            }))));
            return this.lsService.callFunctionWhenLsIsNotConnected(i)
        }
        fetchMarketData(e) {
            return this.marketDataService.GetMarketData(10, e)
        }
        transformMarketItems(e) {
            return e.map(i => {
                let g = i
                  , {symbolIsin: a, priceVar: u} = g
                  , p = Ia(g, ["symbolIsin", "priceVar"]);
                return J(B({}, p), {
                    symbolIsin: a,
                    lastTradedPricePercent: u
                })
            }
            )
        }
        exportCashSettlementToExcel(e) {
            this.optionService.getCashSettlements(e).pipe(D(i => this.makeExportData(i, $0)), Q( ({headers: i, values: a}) => ts(i, a, "cashSettlement-export"))).subscribe()
        }
        exportPhysicalSettlementToExcel(e) {
            this.optionService.getPhysicalSettlements(e).pipe(D(i => this.makeExportData(i, U0)), Q( ({headers: i, values: a}) => ts(i, a, "physicalSettlement-export"))).subscribe()
        }
        exportPositionToExcel() {
            this.positionStore.PositionItems$.pipe(Ze(), D(e => this.makeExportData(e, j0)), Q( ({headers: e, values: i}) => ts(e, i, "Position-export"))).subscribe()
        }
        getContractForSymbol(e) {
            return this.optionService.getContractForSymbol(e).pipe(tt( () => he({})))
        }
        get positionItems$() {
            return this.positionStore.PositionItems$
        }
        makeExportData(e, i) {
            let a = i.map(p => ({
                title: p.title,
                width: p.width
            }))
              , u = e.map(p => J(B({}, p), {
                createDate: ut.getFormattedJDateTime(new Date(p.createDate))
            })).map(p => {
                let g = {};
                return i.forEach(y => {
                    typeof p[y.fieldName] == "boolean" ? g[y.fieldName] = (!!+p[y.fieldName]).toPersian() : g[y.fieldName] = p[y.fieldName]
                }
                ),
                g
            }
            );
            return {
                headers: a,
                values: u
            }
        }
        getPositionsByIsin(e) {
            return this.positionStore.getPositionsByIsin(e)
        }
        getPositionItems$() {
            return this.positionStore.PositionItems$
        }
        getPositionIsins$() {
            return this.positionStore.PositionIsins$
        }
        getPositionsItemById$(e) {
            return this.positionStore.getPositionsItemById$(e)
        }
        positionUpdate$() {
            return this.positionStore.positionUpdate$
        }
        getLoadedError$() {
            return this.positionStore.loadedError$
        }
        getLoadingState() {
            return this.positionStore.Loading()
        }
        getLoadingState$() {
            return this.positionStore.Loading$
        }
        getPositionSummary$() {
            return this.positionStore.PositionSummary$
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var vn = Qa()
  , r1 = vn.getInitialState({
    loading: !1
});
function Y0(n, s) {
    return a1(n, s)
}
var a1 = ls(r1, Ve(me.load, n => J(B({}, n), {
    loading: !0
})), Ve(me.loadedError, n => J(B({}, n), {
    loading: !1
})), Ve(me.add, (n, {value: s}) => vn.addOne(s, n)), Ve(me.update, (n, s) => vn.updateOne(s, n)), Ve(me.upsert, (n, {value: s}) => vn.upsertOne(s, n)), Ve(me.set, (n, {values: s}) => vn.setAll(s, J(B({}, n), {
    loading: !1
}))), Ve(me.updateCashSettlement, (n, {value: s}) => {
    let r = B(B({}, n.entities[s.positionId]?.cashSettlement), s);
    return vn.updateOne({
        id: s.positionId,
        changes: {
            cashSettlement: r
        }
    }, n)
}
), Ve(me.updatePhysicalSettlement, (n, {value: s}) => {
    let r = B(B({}, n.entities[s.positionId]?.physicalSettlement), s);
    return vn.updateOne({
        id: s.positionId,
        changes: {
            physicalSettlement: r
        }
    }, n)
}
), Ve(me.updateCashSettlement, (n, {value: s}) => {
    let r = B(B({}, n.entities[s.positionId]?.cashSettlement), s);
    return vn.updateOne({
        id: s.positionId,
        changes: {
            cashSettlement: r
        }
    }, n)
}
), Ve(me.deleteCashSettlement, (n, {positionId: s}) => vn.updateOne({
    id: s,
    changes: {
        cashSettlement: null
    }
}, n)), Ve(me.deletePhysicalSettlement, (n, {positionId: s}) => vn.updateOne({
    id: s,
    changes: {
        physicalSettlement: null
    }
}, n)), Ve(me.upsertMarketData, (n, {value: s}) => {
    let r = n.marketData?.[s.symbolIsin]
      , e = B({}, n.marketData ?? {});
    return J(B({}, n), {
        marketData: Object.assign(e, {
            [s.symbolIsin]: B(B({}, r), s)
        })
    })
}
), Ve(me.setMarketData, (n, {values: s}) => {
    let r = Object.fromEntries(s.map(e => [e.symbolIsin, e]));
    return J(B({}, n), {
        marketData: r
    })
}
));
var YM = {
    positionState: Y0
};
var l1 = ( () => {
    let s = class s {
        constructor() {
            this.actions$ = I(ao),
            this.lsService = I(Bt),
            this.optionService = I(Xa),
            this.positionFacade = I(_n),
            this.unleashService = I(S0),
            this.authService = I(cs),
            this.loadPositionData$ = it( () => this.actions$.pipe(We(me.load), fe( () => this.authService.hasClaim(nu.OptionBuy) || this.authService.hasClaim(nu.OptionSell) ? this.optionService.get().pipe(D(e => me.set({
                values: e
            })), tt(e => (this.positionFacade.notifyError(e.error ?? "\u062E\u0637\u0627 \u062F\u0631 \u062E\u0648\u0627\u0646\u062F\u0646 \u0645\u0648\u0642\u0639\u06CC\u062A\u200C\u0647\u0627"),
            he(me.loadedError())))) : he(me.set({
                values: []
            }))))),
            this.loadCashSettlement$ = it( () => this.actions$.pipe(We(me.loadCashSettlement), fe( ({id: e}) => this.optionService.getCashSettlement(e).pipe(D(i => me.updateCashSettlement({
                value: i
            })), tt(i => (this.positionFacade.notifyError(i.error ?? "\u062E\u0637\u0627 \u062F\u0631 \u062E\u0648\u0627\u0646\u062F\u0646 \u0645\u0648\u0642\u0639\u06CC\u062A\u200C\u0647\u0627"),
            he(me.empty()))))))),
            this.loadPhysicalSettlement$ = it( () => this.actions$.pipe(We(me.loadPhysicalSettlement), fe( ({id: e}) => this.optionService.getPhysicalSettlement(e).pipe(D(i => me.updatePhysicalSettlement({
                value: i
            })), tt(i => (this.positionFacade.notifyError(i.error ?? "\u062E\u0637\u0627 \u062F\u0631 \u062E\u0648\u0627\u0646\u062F\u0646 \u0645\u0648\u0642\u0639\u06CC\u062A\u200C\u0647\u0627"),
            he(me.empty()))))))),
            this.createCashSettlement$ = it( () => this.actions$.pipe(We(me.createCashSettlement), fe( ({value: e}) => this.optionService.createCashSettlement(e).pipe(D(i => i?.isSuccessful ? (this.positionFacade.notifySuccess(i?.message),
            me.loadCashSettlement({
                id: i.id
            })) : (this.positionFacade.notifyError(i?.message),
            me.empty())), tt(i => (this.positionFacade.notifyError(i.error),
            he(me.empty()))))))),
            this.createPhysicalSettlement$ = it( () => this.actions$.pipe(We(me.createPhysicalSettlement), fe( ({value: e}) => this.optionService.createPhysicalSettlement(e).pipe(D(i => i?.isSuccessful ? (this.positionFacade.notifySuccess(i?.message),
            me.loadPhysicalSettlement({
                id: i.id
            })) : (this.positionFacade.notifyError(i?.message),
            me.empty())), tt(i => (this.positionFacade.notifyError(i.error),
            he(me.empty()))))))),
            this.deleteSettlementRequest$ = it( () => this.actions$.pipe(We(me.deleteSettlementRequest), fe( ({id: e, positionId: i, settlementType: a}) => this.optionService.deleteSettlementRequest(e, a).pipe(D(u => u?.isSuccessful ? (this.positionFacade.notifySuccess(u?.message),
            a === fs.CashSettlement ? me.deleteCashSettlement({
                positionId: i
            }) : me.deletePhysicalSettlement({
                positionId: i
            })) : (this.positionFacade.notifyError(u?.message),
            me.empty())), tt(u => (this.positionFacade.notifyError(u.error),
            he(me.empty()))))))),
            this.subscribeToPositionLs$ = it( () => this.actions$.pipe(We(me.set), Ze(), fe( () => this.lsService.subscribeToLs(ze.OptionPosition)), D( ({val: e}) => {
                let i = JSON.parse(e);
                return me.upsert({
                    value: J(B({}, i), {
                        id: i.id,
                        side: i.side ?? Ee.Buy,
                        totalMargin: i.totalMargin ?? 0,
                        symbolName: er(i.symbolName)
                    })
                })
            }
            ))),
            this.subscribeToOptionAveragePriceLS$ = it( () => this.actions$.pipe(We(me.subscribeOptionAveragePriceToLs), fe( () => this.lsService.subscribeToLs(ze.OptionAveragePrice)), fe(e => {
                let i = JSON.parse(e.val)
                  , a = {
                    changes: {
                        buyAveragePrice: i?.buyAveragePrice,
                        sellAveragePrice: i?.sellAveragePrice,
                        closedPositionProfitLoss: i?.closedPositionProfitLoss
                    },
                    id: i?.positionId
                };
                return he(me.update(a))
            }
            )))
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)()
  , cT = [l1];
var eh = Ma(J0());
function X0(n) {
    let {[je.OptionMarketViewSchema.lastTradedPrice]: s, [je.OptionMarketViewSchema.lastTradedPriceVarPercent]: r, [je.OptionMarketViewSchema.closingPrice]: e, [je.OptionMarketViewSchema.totalNumberOfSharesTraded]: i, [je.OptionMarketViewSchema.totalTradeValue]: a, [je.OptionMarketViewSchema.feeOfPreviousDaysClosingPrice]: u, [je.OptionMarketViewSchema.bestBuyLimitVolume]: p, [je.OptionMarketViewSchema.bestBuyLimitPrice]: g, [je.OptionMarketViewSchema.bestSellLimitPrice]: y, [je.OptionMarketViewSchema.bestSellLimitVolume]: O} = n;
    return {
        lastTradedPrice: +s || 0,
        lastTradedPriceVarPercent: +r || 0,
        totalNumberOfSharesTraded: +i || 0,
        totalTradeValue: +a || 0,
        closingPrice: +e || 0,
        feeOfPreviousDaysClosingPrice: +u || 0,
        bestBuyLimitVolume: +p || 0,
        bestBuyLimitPrice: +g || 0,
        bestSellLimitPrice: +y || 0,
        bestSellLimitVolume: +O || 0
    }
}
function CT(n) {
    return {
        [Dt.MOST_VALUE]: "totalTradeValue",
        [Dt.MOST_VOLUME]: "totalNumberOfSharesTraded",
        [Dt.MOST_SUPPLY]: "bestSellLimitPrice",
        [Dt.MOST_DEMAND]: "bestBuyLimitPrice"
    }[n]
}
var NT = ( () => {
    let s = class s extends Yi {
        constructor() {
            super(),
            this.marketViewApiSubject = new ue,
            this.marketViewLsDataSubject = new at({}),
            this.marketViewLsDataSubject$ = this.marketViewLsDataSubject.asObservable(),
            this.settingFacadeService = I(co),
            this.lsService = I(Bt),
            this.symbolService = I(pt),
            this.marketDataService = I(Li),
            this.marketViewSymbolIsins$ = this.marketViewApiSubject.pipe(D(e => e.map(i => i.symbolIsin))),
            this.marketViewCompanyIsins$ = this.marketViewSymbolIsins$.pipe(yt(this.symbolService.symbolIsReceived$), D( ([e]) => e.map(i => {
                let a = this.symbolService.symbolByIsin[i];
                return this.symbolService.symbolByCompanyIsin[a?.baseIsin]?.symbolIsin
            }
            ))),
            this.companyMarketDataDict$ = this.marketViewCompanyIsins$.pipe(_i(eh.default.isEqual), fe(e => this.marketDataService.GetMarketData(0, e).pipe(D(i => i ? Object.fromEntries(i.map(a => [a.symbolISIN, a])) : {})))),
            this.marketViewData = q(this.marketViewApiSubject.pipe(yt(this.marketViewLsDataSubject), yt(this.companyMarketDataDict$), yt(this.settingFacadeService.getSettings$()), yt(this.symbolService.symbolIsReceived$), D( ([e]) => {
                let[[[i,a],u],p] = e;
                return i.map(g => {
                    let y = this.symbolService.symbolByIsin[g.symbolIsin]
                      , O = this.symbolService.symbolByCompanyIsin[y?.baseIsin]
                      , j = a[g.symbolIsin]
                      , Z = u[O?.symbolIsin]?.lastTradedPrice
                      , xe = this.calculateBlackScholes(y, Z, p, g.lastTradedPrice)
                      , _e = ar(mo[y?.marketUnit], Z, y?.strikePrice, new Date(y?.shareDueDate), Ji, Vi)
                      , Ne = Po(y?.marketUnit) ? y?.strikePrice + j?.lastTradedPrice : y?.strikePrice - j?.lastTradedPrice
                      , Re = null;
                    if (y?.shareDueDate) {
                        let Xe = new Date(y?.shareDueDate)
                          , Ue = new Date;
                        Ue.setHours(0, 0, 0, 0),
                        Re = Math.floor(ut.daysBetweenTwoDates(Ue, Xe))
                    }
                    let $e = j?.totalNumberOfSharesTraded * u[O?.symbolIsin]?.closingPrice * y?.csize;
                    return {
                        symbolIsin: g.symbolIsin,
                        stateColor: Fi(g.stateCode),
                        symbolName: g.symbolName,
                        baseSymbolName: O?.symbolName,
                        dueDate: y?.shareDueDate,
                        breakEvenPoint: Ne,
                        delta: _e,
                        remainingDaysTillDueDate: Re,
                        notionalValue: $e,
                        strikePrice: y?.strikePrice,
                        lastTradedPrice: j?.lastTradedPrice,
                        lastTradedPriceVarPercent: j?.lastTradedPriceVarPercent,
                        baseSymbolLastTradedPrice: u[O?.symbolIsin]?.lastTradedPrice,
                        baseSymbolLastTradedPriceVarPercent: u[O?.symbolIsin]?.priceVar,
                        totalNumberOfSharesTraded: j?.totalNumberOfSharesTraded,
                        totalTradeValue: j?.totalTradeValue,
                        closingPrice: j?.closingPrice,
                        closingPriceVarPercent: this.symbolService.calculateClosingPriceVarPercent(j?.closingPrice, j?.feeOfPreviousDaysClosingPrice, j?.totalNumberOfSharesTraded) || 0,
                        bestBuyLimitVolume: j?.bestBuyLimitVolume,
                        bestBuyLimitPrice: j?.bestBuyLimitPrice,
                        bestSellLimitPrice: j?.bestSellLimitPrice,
                        bestSellLimitVolume: j?.bestSellLimitVolume,
                        blackScholesPrice: xe?.price,
                        impliedVolatility: xe?.impliedVolatility,
                        openPosition: g?.openPosition,
                        returnProfit: g?.returnProfit,
                        contractStatus: ro(y?.marketUnit, y?.strikePrice, Z)
                    }
                }
                )
            }
            )))
        }
        get url() {
            return `${this.mtsPath + this.apiUrls.easy}OptionMarketLive/`
        }
        calculateBlackScholes(e, i, a, u) {
            if (!e)
                return {};
            let p = mo[e.marketUnit];
            return hs(p, i, e.strikePrice, new Date(e.shareDueDate), a.volatility, a.interestRate, u)
        }
        getMarketDataWithLs(e) {
            return Sp(e).pipe(Qo(i => this.subscribeItemToLs(i)))
        }
        subscribeItemToLs(e) {
            return this.lsService.subscribeToLs(ze.OptionMarketView, e).pipe(D(i => X0(i.val)), Q(i => {
                this.updateMarketViewLsData(e, i)
            }
            ))
        }
        updateMarketViewLsData(e, i) {
            this.marketViewLsDataSubject.next(J(B({}, this.marketViewLsDataSubject.value), {
                [e]: B({}, i)
            }))
        }
        unsubscribeFromLs(e) {
            e.map(i => this.lsService.unsubscribeSchema(ze.OptionMarketView, i))
        }
        getMarketViewData(e) {
            return e ? this.httpService.get(this.url + e, {
                maxRetryAttempts: 3
            }).pipe(Q(i => this.marketViewApiSubject.next(i))) : Cp
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var th = ( () => {
    let s = class s {
        constructor() {
            this.selectedTab = new at(1),
            this.selectedTab$ = this.selectedTab.asObservable(),
            this.loading = new ue,
            this.loading$ = this.loading.asObservable(),
            this.reload = new ue,
            this.reload$ = this.reload.asObservable().pipe(Pp(1e3, null)),
            this.hasReload = new at(!0),
            this.hasReload$ = this.hasReload.asObservable(),
            this.showRevenue = new ue,
            this.showRevenue$ = this.showRevenue.asObservable(),
            this.showFilter = new at(!1),
            this.showFilter$ = this.showFilter.asObservable(),
            this.downloadExcel = new ue,
            this.downloadExcel$ = this.downloadExcel.asObservable(),
            this.showColumnIcon = new at(!0),
            this.showColumnIcon$ = this.showColumnIcon.asObservable(),
            this.updateShowColumnState = e => this.showColumnIcon.next(e),
            this.columnStates = new at([]),
            this.columnStates$ = this.columnStates.asObservable(),
            this.updateColumnState = e => this.columnStates.next(e),
            this.columnVisibility = new ue,
            this.columnVisibility$ = this.columnVisibility.asObservable(),
            this.columnPinability = new ue,
            this.columnPinability$ = this.columnPinability.asObservable(),
            this.columnStatesReset = new ue,
            this.columnStatesReset$ = this.columnStatesReset.asObservable(),
            this.showSearchIcon = new ue,
            this.showSearchIcon$ = this.showSearchIcon.asObservable(),
            this.showSearch = new ue,
            this.showSearch$ = this.showSearch.asObservable(),
            this.inputSearch = new ue,
            this.inputSearch$ = this.inputSearch.asObservable(),
            this.inputSearchNew = new at(""),
            this.inputSearchNew$ = this.inputSearchNew.asObservable(),
            this.updateInputSearch = e => this.inputSearchNew.next(e),
            this.marketHasTrades = new at(!1),
            this.marketHasTrades$ = this.marketHasTrades.asObservable(),
            this.applyClosePrice = new at(!0),
            this.applyClosePrice$ = this.applyClosePrice.asObservable(),
            this.applyCommission = new at(!1),
            this.applyCommission$ = this.applyCommission.asObservable(),
            this.isAutomatic = new at(!1),
            this.isAutomatic$ = this.isAutomatic.asObservable(),
            this.isOpenPositionDetailPage = Ie(!1),
            this.isOpenPositionDetailPage$ = st(this.isOpenPositionDetailPage)
        }
        setIsOpenPositionDetailPage(e) {
            this.isOpenPositionDetailPage.set(e)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var ih = n => ({
    disabled: n
});
function c1(n, s) {
    n & 1 && C(0, "\u0627\u0639\u0645\u0627\u0644 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A ")
}
function u1(n, s) {
    n & 1 && C(0, " \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A ")
}
function d1(n, s) {
    if (n & 1 && (h(0, "div", 26)(1, "button", 27),
    H(2, c1, 1, 0)(3, u1, 1, 0),
    f()()),
    n & 2) {
        let r, e = w(2);
        d(),
        b("disabled", !e.form.dirty || (e.form == null ? null : e.form.invalid)),
        d(),
        W((r = e.PositionItem()) != null && r.cashSettlement ? 2 : 3)
    }
}
function m1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "form", 2),
        z("submit", function() {
            R(r);
            let i = w();
            return L(i.submit())
        }),
        h(1, "ul", 3)(2, "li", 4)(3, "span", 5),
        C(4, "\u0646\u0627\u0645 \u0646\u0645\u0627\u062F \u0627\u062E\u062A\u06CC\u0627\u0631"),
        f(),
        h(5, "span", 6),
        C(6),
        f()(),
        h(7, "li", 7)(8, "span"),
        C(9, "\u0642\u06CC\u0645\u062A \u0627\u0639\u0645\u0627\u0644"),
        f(),
        h(10, "span"),
        C(11),
        $(12, "number"),
        f()(),
        h(13, "li", 7)(14, "span", 5),
        C(15, "\u0622\u062E\u0631\u06CC\u0646 \u0645\u0647\u0644\u062A \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A"),
        f(),
        h(16, "span", 6),
        C(17),
        $(18, "jdate"),
        f()(),
        h(19, "li", 8)(20, "span", 6),
        C(21),
        f(),
        h(22, "span", 9),
        z("click", function() {
            let i;
            R(r);
            let a = w();
            return L(a.updateQuantity((i = a.PositionItem()) == null ? null : i.executedQuantity))
        }),
        C(23),
        f()()(),
        h(24, "ul", 10)(25, "li", 11)(26, "label", 12),
        C(27, "\u062A\u0639\u062F\u0627\u062F \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0631\u0627\u06CC \u062A\u0633\u0648\u06CC\u0647"),
        f(),
        k(28, "input", 13),
        f(),
        h(29, "li", 14)(30, "label", 15)(31, "span", 16),
        C(32, "\u0627\u0639\u0645\u0627\u0644 \u062D\u062F\u0627\u06A9\u062B\u0631\u06CC"),
        f(),
        h(33, "p", 17),
        C(34, " \u062A\u0645\u0627\u0645\u06CC \u0645\u0648\u0642\u0639\u06CC\u062A\u0647\u0627\u06CC \u0634\u0645\u0627 \u062F\u0631 \u0627\u06CC\u0646 \u0646\u0645\u0627\u062F \u062F\u0631 \u0631\u0648\u0632 \u062A\u0633\u0648\u06CC\u0647\u060C \u0628\u0647 \u0647\u0633\u062A\u0647 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u062F \u0634\u062F. "),
        f()(),
        h(35, "label", 18),
        k(36, "input", 19)(37, "span", 20),
        f()(),
        h(38, "li", 14)(39, "label", 15)(40, "span", 16),
        C(41, "\u0645\u0648\u0627\u0641\u0642\u062A \u0628\u0627 \u062A\u0633\u0648\u06CC\u0647 \u0628\u0647 \u06A9\u0633\u0631"),
        f(),
        h(42, "p", 17),
        C(43, " \u0645\u0648\u0627\u0641\u0642\u062A \u0645\u06CC\u200C\u0646\u0645\u0627\u06CC\u06CC\u062F \u06A9\u0647 \u062F\u0631 \u0635\u0648\u0631\u062A \u0627\u0645\u06A9\u0627\u0646 \u0628\u062E\u0634\u06CC \u0627\u0632 \u06CC\u06A9 \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0634\u0645\u0627 \u062A\u0633\u0648\u06CC\u0647 \u0634\u0648\u062F \u0648 \u0645\u0627\u0628\u0642\u06CC \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0633\u0648\u062E\u062A \u0634\u0648\u062F. "),
        f()(),
        h(44, "label", 21),
        k(45, "input", 22)(46, "span", 23),
        f()()(),
        h(47, "div", 24),
        k(48, "svg-icon", 25),
        h(49, "span"),
        C(50, "\u062F\u0631 \u0635\u0648\u0631\u062A \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u060C \u062A\u0646\u0647\u0627 \u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627\u06CC \u062F\u0631 \u0633\u0648\u062F \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E \u062A\u0633\u0648\u06CC\u0647 \u0646\u0642\u062F\u06CC\u060C \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u0646\u062F \u0634\u062F"),
        f()(),
        H(51, d1, 4, 2, "div", 26),
        f()
    }
    if (n & 2) {
        let r, e, i, a, u, p = w();
        b("formGroup", p.form)("ngClass", Fe(14, ih, p.viewMode())),
        d(6),
        X((r = p.PositionItem()) == null ? null : r.symbolName),
        d(5),
        X(Se(12, 10, (e = p.PositionItem()) == null ? null : e.strikePrice)),
        d(6),
        K("15:00 ", Se(18, 12, (i = p.PositionItem()) == null ? null : i.cashSettlementDate), ""),
        d(4),
        K("\u062A\u0639\u062F\u0627\u062F \u0645\u0648\u0642\u0639\u06CC\u062A \u0628\u0627\u0632 ", ((a = p.PositionItem()) == null ? null : a.side) === p.Side.Buy ? "\u062E\u0631\u06CC\u062F" : "\u0641\u0631\u0648\u0634", ""),
        d(2),
        K(" ", (u = p.PositionItem()) == null ? null : u.executedQuantity, " \u0645\u0648\u0642\u0639\u06CC\u062A "),
        d(5),
        b("ngClass", Fe(16, ih, p.MaximumSending())),
        d(20),
        b("iconName", p.icons.Alert),
        d(3),
        W(p.viewMode() ? -1 : 51)
    }
}
function p1(n, s) {
    if (n & 1 && (h(0, "p", 28),
    C(1),
    f()),
    n & 2) {
        let r = s.description;
        d(),
        K(" ", r, " ")
    }
}
var YT = ( () => {
    let s = class s {
        fractionForbidden() {
            return e => !this.PositionItem()?.cefo && e.value ? {
                forbidden: {
                    value: e.value
                }
            } : null
        }
        submit() {
            if (this.viewMode())
                return;
            let e = this.form.value
              , i = J(B({}, e), {
                symbolIsin: this.PositionItem().symbolIsin
            });
            this.positionFacade.createCashSettlement(i)
        }
        constructor() {
            this.icons = Ce,
            this.confirm = Ge(),
            this.cancel = Ge(),
            this.PositionId = ee.required(),
            this.viewMode = ee.required(),
            this.fb = I(mn),
            this.positionFacade = I(_n),
            this.Side = Ee,
            this.PositionId$ = st(this.PositionId),
            this.PositionItem$ = this.PositionId$.pipe(fe(e => this.positionFacade.getPositionsItemById$(e).pipe(Ze())), Q(e => {
                e.cefo || this.form.get("fraction")?.disable()
            }
            )),
            this.PositionItem = q(this.PositionItem$),
            this.form = this.fb.group({
                quantity: new Jo(void 0,[vt.required, vt.min(1)]),
                maximumSending: [!1],
                fraction: new Jo(!1,[this.fractionForbidden()])
            }),
            this.formValue$ = this.form.valueChanges,
            this.AllowSettlement = q(this.formValue$.pipe(D(e => e.fraction))),
            this.MaximumSending$ = this.formValue$.pipe(D(e => e.maximumSending)),
            this.MaximumSending = q(this.MaximumSending$),
            this.addFormValidator = (e, i) => this.form.controls[e].addValidators(i),
            this.updateQuantity = e => this.form.patchValue({
                quantity: e
            }),
            this.setFormValues = (e, i, a) => this.form.setValue({
                quantity: e,
                fraction: i,
                maximumSending: a
            }),
            this.download = () => this.positionFacade.exportCashSettlementToExcel(this.PositionId()),
            this.openPopover = (e, i) => e.open({
                description: i
            }),
            q(this.PositionItem$.pipe(Q(e => this.addFormValidator("quantity", vt.max(e.executedQuantity ?? 100))), Q(e => this.setFormValues(e?.cashSettlement?.quantity, e?.cashSettlement?.fraction, e?.cashSettlement?.maximumSending)))),
            q(this.MaximumSending$.pipe(_i(), pe(Boolean), Q( () => this.updateQuantity(this.PositionItem()?.executedQuantity))))
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["cash-settlement-form"]],
        inputs: {
            PositionId: [1, "PositionId"],
            viewMode: [1, "viewMode"]
        },
        outputs: {
            confirm: "confirm",
            cancel: "cancel"
        },
        decls: 3,
        vars: 1,
        consts: [["tooltip", ""], [3, "formGroup", "ngClass"], [3, "submit", "formGroup", "ngClass"], [1, "list-group", "list-group-flush", "mb-2", "bg-emphasis", "bg-opacity-05", "rounded", "px-3", "py-2"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "lh-lg", "px-0", "pt-0", "border-emphasis", "border-opacity-10"], [1, "fw-light"], [1, "fw-medium"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "lh-lg", "px-0", "border-emphasis", "border-opacity-10"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "lh-lg", "px-0", "pb-0", "border-emphasis", "border-opacity-10"], [1, "cup", "fw-medium", 3, "click"], [1, "list-group", "list-group-flush", "px-3"], [1, "list-group-item", "d-flex", "justify-content-between", "gap-2", "align-items-center", "lh-lg", "px-0", "pt-0"], ["for", "quantity", 1, "text-nowrap", "d-flex", "flex-grow-1"], ["type", "number", "placeholder", "\u062A\u0639\u062F\u0627\u062F", "formControlName", "quantity", 1, "form-control", "text-end", "text-body", 3, "ngClass"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "lh-lg", "px-0"], [1, "col-10", "p-0", "mb-0", "text-inverse", "d-flex", "flex-column"], [1, "fw-bold"], [1, "m-0", "small", "lh-sm", "text-body-tertiary"], ["id", "maximumSending-lbl", 1, "ios7-switch", "lh-1"], ["id", "maximumSending", "type", "checkbox", "formControlName", "maximumSending"], ["id", "maximumSending-span", 1, "h4", "mb-0"], [1, "ios7-switch", "lh-1"], ["id", "maxStrike", "type", "checkbox", "formControlName", "fraction"], [1, "h4", "mb-0"], [1, "alert", "alert-warning", "align-items-center", "d-flex", "gap-2", "fw-bold", "p-2", "my-2"], ["width", "24", "height", "24", 1, "text-warning", 3, "iconName"], [1, "d-flex", "gap-1"], ["type", "submit", 1, "btn", "btn-global", "flex-grow-1", 3, "disabled"], [1, "mb-0", "text-justify"]],
        template: function(i, a) {
            i & 1 && H(0, m1, 52, 18, "form", 1)(1, p1, 2, 1, "ng-template", null, 0, Ft),
            i & 2 && W(a.form ? 0 : -1)
        },
        dependencies: [ot, Je, Wt, Ni, cn, ki, Xo, ja, Oi, ln, Lt, un, dn, Ri, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var nh = n => ({
    disabled: n
});
function h1(n, s) {
    if (n & 1 && (h(0, "div", 24),
    k(1, "svg-icon", 26),
    h(2, "span"),
    C(3, "\u062A\u0648\u062C\u0647: \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u062A\u0633\u0648\u06CC\u0647 \u0634\u0645\u0627 \u0628\u0627 \u0632\u06CC\u0627\u0646 \u062F\u0631 \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0647\u0645\u0631\u0627\u0647 \u0628\u0627\u0634\u062F"),
    f()()),
    n & 2) {
        let r = w(2);
        d(),
        b("iconName", r.icons.Alert)
    }
}
function f1(n, s) {
    n & 1 && C(0, "\u0627\u0639\u0645\u0627\u0644 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A ")
}
function g1(n, s) {
    n & 1 && C(0, " \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A ")
}
function _1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 25)(1, "div", 27)(2, "div", 28)(3, "div", 29)(4, "label"),
        k(5, "input", 30),
        f()(),
        h(6, "label")(7, "span", 31, 2),
        z("click", function() {
            R(r);
            let i = Ct(8)
              , a = w(2);
            return L(a.showRulesHandler(i))
        }),
        C(9, " \u0634\u0631\u0627\u06CC\u0637 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062A\u0633\u0648\u06CC\u0647 \u0641\u06CC\u0632\u06CC\u06A9\u06CC"),
        f(),
        C(10, " \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u0646\u0645\u0648\u062F\u0645."),
        f()()(),
        h(11, "button", 32),
        H(12, f1, 1, 0)(13, g1, 1, 0),
        f()()
    }
    if (n & 2) {
        let r, e = w(2), i = Ct(4);
        d(7),
        b("ngbPopover", i)("triggers", "click:blur")("container", "body"),
        d(4),
        b("disabled", !e.form.dirty || (e.form == null ? null : e.form.invalid)),
        d(),
        W((r = e.PositionItem()) != null && r.physicalSettlement ? 12 : 13)
    }
}
function v1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "form", 4),
        z("submit", function() {
            R(r);
            let i = w();
            return L(i.submit())
        }),
        h(1, "ul", 5)(2, "li", 6)(3, "span", 7),
        C(4, "\u0646\u0627\u0645 \u0646\u0645\u0627\u062F \u0627\u062E\u062A\u06CC\u0627\u0631"),
        f(),
        h(5, "span", 8),
        C(6),
        f()(),
        h(7, "li", 9)(8, "span", 7),
        C(9, "\u0642\u06CC\u0645\u062A \u0627\u0639\u0645\u0627\u0644"),
        f(),
        h(10, "span", 8),
        C(11),
        $(12, "number"),
        f()(),
        h(13, "li", 9)(14, "span", 7),
        C(15, "\u0622\u062E\u0631\u06CC\u0646 \u0645\u0647\u0644\u062A \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A"),
        f(),
        h(16, "span", 8),
        C(17),
        $(18, "jdate"),
        f()(),
        h(19, "li", 10)(20, "span", 8),
        C(21),
        f(),
        h(22, "span", 11),
        z("click", function() {
            let i;
            R(r);
            let a = w();
            return L(a.updateQuantity((i = a.PositionItem()) == null ? null : i.executedQuantity))
        }),
        C(23),
        f()()(),
        h(24, "ul", 12)(25, "li", 13)(26, "label", 14),
        C(27, "\u062A\u0639\u062F\u0627\u062F \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0631\u0627\u06CC \u062A\u0633\u0648\u06CC\u0647"),
        f(),
        k(28, "input", 15),
        f(),
        h(29, "li", 16)(30, "label", 17)(31, "span", 18),
        C(32, "\u0627\u0639\u0645\u0627\u0644 \u062D\u062F\u0627\u06A9\u062B\u0631\u06CC"),
        f(),
        h(33, "p", 19),
        C(34, " \u062A\u0645\u0627\u0645\u06CC \u0645\u0648\u0642\u0639\u06CC\u062A\u0647\u0627\u06CC \u0634\u0645\u0627 \u062F\u0631 \u0627\u06CC\u0646 \u0646\u0645\u0627\u062F \u062F\u0631 \u0631\u0648\u0632 \u062A\u0633\u0648\u06CC\u0647\u060C \u0628\u0647 \u0647\u0633\u062A\u0647 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u062F \u0634\u062F. "),
        f()(),
        h(35, "label", 20),
        k(36, "input", 21)(37, "span", 22),
        f()(),
        h(38, "li", 16)(39, "label", 17)(40, "span", 18),
        C(41, "\u0645\u0648\u0627\u0641\u0642\u062A \u0628\u0627 \u062A\u0633\u0648\u06CC\u0647 \u062F\u0631 \u0632\u06CC\u0627\u0646"),
        f(),
        h(42, "p", 19),
        C(43, " \u062F\u0631 \u0635\u0648\u0631\u062A \u0627\u0646\u062A\u062E\u0627\u0628 \u0627\u06CC\u0646 \u06AF\u0632\u06CC\u0646\u0647 \u0628\u062F\u0648\u0646 \u062A\u0648\u062C\u0647 \u0628\u0647 \u0642\u06CC\u0645\u062A \u0627\u0639\u0645\u0627\u0644 \u0648 \u0646\u0645\u0627\u062F \u067E\u0627\u06CC\u0647 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0647 \u0647\u0633\u062A\u0647 \u0645\u0639\u0627\u0645\u0644\u0627\u062A\u06CC \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u062F \u0634\u062F "),
        f()(),
        h(44, "label", 20),
        k(45, "input", 23)(46, "span", 22),
        f()()(),
        H(47, h1, 4, 1, "div", 24)(48, _1, 14, 5, "div", 25),
        f()
    }
    if (n & 2) {
        let r, e, i, a, u, p = w();
        b("formGroup", p.form)("ngClass", Fe(14, nh, p.viewMode())),
        d(6),
        X((r = p.PositionItem()) == null ? null : r.symbolName),
        d(5),
        X(Se(12, 10, (e = p.PositionItem()) == null ? null : e.strikePrice)),
        d(6),
        K("15:00 ", Se(18, 12, (i = p.PositionItem()) == null ? null : i.physicalSettlementDate), ""),
        d(4),
        K("\u062A\u0639\u062F\u0627\u062F \u0645\u0648\u0642\u0639\u06CC\u062A \u0628\u0627\u0632 ", ((a = p.PositionItem()) == null ? null : a.side) === p.Side.Buy ? "\u062E\u0631\u06CC\u062F" : "\u0641\u0631\u0648\u0634", ""),
        d(2),
        K(" ", (u = p.PositionItem()) == null ? null : u.executedQuantity, " \u0645\u0648\u0642\u0639\u06CC\u062A "),
        d(5),
        b("ngClass", Fe(16, nh, p.MaximumSending())),
        d(19),
        W(p.AllowSettlement() ? 47 : -1),
        d(),
        W(p.viewMode() ? -1 : 48)
    }
}
function b1(n, s) {
    if (n & 1 && (h(0, "p", 33),
    C(1),
    f()),
    n & 2) {
        let r = s.description;
        d(),
        K(" ", r, " ")
    }
}
function C1(n, s) {
    if (n & 1 && (h(0, "div", 34)(1, "div", 35)(2, "div", 36),
    k(3, "svg-icon", 37),
    f(),
    h(4, "div", 38),
    C(5, "\u062C\u0647\u062A \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062A\u0633\u0648\u06CC\u0647 \u0641\u06CC\u0632\u06CC\u06A9\u06CC \u0645\u0648\u0627\u0631\u062F \u0632\u06CC\u0631 \u0631\u0627 \u062F\u0631 \u0646\u0638\u0631 \u0628\u06AF\u06CC\u0631\u06CC\u062F:"),
    f()(),
    h(6, "ul", 39)(7, "li", 40),
    k(8, "svg-icon", 41),
    h(9, "div"),
    C(10, " \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0641\u06CC\u0632\u06CC\u06A9\u06CC\u060C \u0628\u0647 \u0645\u0646\u0632\u0644\u0647 \u0627\u0631\u0633\u0627\u0644 \u0628\u0647 \u0647\u0633\u062A\u0647 \u0646\u0645\u06CC\u200C\u0628\u0627\u0634\u062F \u0648 \u0628\u0627\u06CC\u062F \u062F\u0631 \u0631\u0648\u0632 \u062A\u0633\u0648\u06CC\u0647 \u0634\u0631\u0627\u06CC\u0637 \u0644\u0627\u0632\u0645 \u0627\u0632 \u062C\u0645\u0644\u0647 \u0645\u0627\u0646\u062F\u0647 \u06A9\u0627\u0641\u06CC \u0648 \u062F\u0631 \u0633\u0648\u062F \u0628\u0648\u062F\u0646 \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0648\u062C\u0648\u062F \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F. "),
    f()(),
    h(11, "li", 40),
    k(12, "svg-icon", 41),
    h(13, "div"),
    C(14, " \u062F\u0631 \u0635\u0648\u0631\u062A \u0648\u0627\u0631\u062F \u06A9\u0631\u062F\u0646 \u062F\u0633\u062A\u06CC \u062A\u0639\u062F\u0627\u062F \u0645\u0648\u0631\u062F \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u060C \u062F\u0631 \u0631\u0648\u0632 \u062A\u0633\u0648\u06CC\u0647 \u0641\u06CC\u0632\u06CC\u06A9\u06CC \u0645\u06CC\u0646\u06CC\u0645\u0648\u0645 \u062A\u0639\u062F\u0627\u062F \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u06CC \u0648 \u062A\u0639\u062F\u0627\u062F \u0645\u0648\u0642\u0639\u06CC\u062A \u0628\u0627\u0632 \u0628\u0647 \u0647\u0633\u062A\u0647 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u062F \u0634\u062F. "),
    f()(),
    h(15, "li", 40),
    k(16, "svg-icon", 41),
    h(17, "div"),
    C(18, " \u062F\u0631 \u0635\u0648\u0631\u062A \u0632\u062F\u0646 \u062F\u06A9\u0645\u0647 \u0627\u0639\u0645\u0627\u0644 \u062D\u062F\u0627\u06A9\u062B\u0631\u06CC\u060C \u062A\u0645\u0627\u0645\u06CC \u0645\u0648\u0642\u0639\u06CC\u062A\u200C\u0647\u0627\u06CC \u0628\u0627\u0632 \u0641\u0631\u062F \u062F\u0631 \u0631\u0648\u0632 \u062A\u0633\u0648\u06CC\u0647\u060C \u0628\u0647 \u0647\u0633\u062A\u0647 \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u062F \u0634\u062F. "),
    f()(),
    h(19, "li", 40),
    k(20, "svg-icon", 41),
    h(21, "div"),
    C(22, " \u062F\u0631 \u0635\u0648\u0631\u062A \u0632\u062F\u0646 \u062F\u06A9\u0645\u0647 \u062A\u0633\u0648\u06CC\u0647 \u062F\u0631 \u0632\u06CC\u0627\u0646\u060C \u0628\u062F\u0648\u0646 \u062A\u0648\u062C\u0647 \u0628\u0647 \u0642\u06CC\u0645\u062A \u0627\u0639\u0645\u0627\u0644 \u0648 \u0642\u06CC\u0645\u062A \u0646\u0645\u0627\u062F \u067E\u0627\u06CC\u0647\u060C \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0641\u0631\u062F \u0628\u0647 \u0647\u0633\u062A\u0647 \u0645\u0639\u0627\u0645\u0644\u0627\u062A\u06CC \u0627\u0631\u0633\u0627\u0644 \u062E\u0648\u0627\u0647\u062F \u0634\u062F. "),
    f()()()()),
    n & 2) {
        let r = w();
        d(3),
        b("iconName", r.icons.Alert),
        d(5),
        b("iconName", r.icons.CircleMedium),
        d(4),
        b("iconName", r.icons.CircleMedium),
        d(4),
        b("iconName", r.icons.CircleMedium),
        d(4),
        b("iconName", r.icons.CircleMedium)
    }
}
var dD = ( () => {
    let s = class s {
        submit() {
            if (this.viewMode())
                return;
            let e = this.form.value
              , i = J(B({}, e), {
                symbolIsin: this.PositionItem().symbolIsin
            });
            this.positionFacade.createPhysicalSettlement(i)
        }
        constructor() {
            this.editMode = ee(),
            this.icons = Ce,
            this.confirm = Ge(),
            this.cancel = Ge(),
            this.PositionId = ee.required(),
            this.viewMode = ee.required(),
            this.fb = I(mn),
            this.positionFacade = I(_n),
            this.Side = Ee,
            this.form = this.fb.group({
                quantity: new Jo(void 0,[vt.required, vt.min(1)]),
                maximumSending: [!1],
                requestSettlementInLoss: [!1],
                acceptRules: new Jo(!0,vt.requiredTrue)
            }),
            this.PositionId$ = st(this.PositionId),
            this.PositionItem$ = this.PositionId$.pipe(fe(e => this.positionFacade.getPositionsItemById$(e).pipe(Ze()))),
            this.PositionItem = q(this.PositionItem$),
            this.formValue$ = this.form.valueChanges,
            this.AllowSettlement = q(this.formValue$.pipe(D(e => e.requestSettlementInLoss))),
            this.MaximumSending$ = this.formValue$.pipe(D(e => e.maximumSending)),
            this.MaximumSending = q(this.MaximumSending$),
            this.addFormValidator = (e, i) => this.form.controls[e].addValidators(i),
            this.updateQuantity = e => this.form.patchValue({
                quantity: e
            }),
            this.setFormValues = (e, i, a) => this.form.setValue({
                quantity: e,
                requestSettlementInLoss: i,
                maximumSending: a,
                acceptRules: !0
            }),
            this.download = () => {
                this.positionFacade.exportPhysicalSettlementToExcel(this.PositionId())
            }
            ,
            this.openPopover = (e, i) => e.open({
                description: i
            }),
            q(this.PositionItem$.pipe(Q(e => this.addFormValidator("quantity", vt.max(e.executedQuantity ?? 100))), Q(e => this.setFormValues(e?.physicalSettlement?.quantity, e?.physicalSettlement?.requestSettlementInLoss, e?.physicalSettlement?.maximumSending)))),
            q(this.MaximumSending$.pipe(_i(), pe(Boolean), Q( () => this.updateQuantity(this.PositionItem()?.executedQuantity))))
        }
        showRulesHandler(e=null) {
            e?.open?.()
        }
        closeModal(e=null) {
            e?.close?.()
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["physical-settlement-form"]],
        inputs: {
            editMode: [1, "editMode"],
            PositionId: [1, "PositionId"],
            viewMode: [1, "viewMode"]
        },
        outputs: {
            confirm: "confirm",
            cancel: "cancel"
        },
        decls: 5,
        vars: 1,
        consts: [["tooltip", ""], ["orderRulesTooltip", ""], ["rulesPopOver", "ngbPopover"], [3, "formGroup", "ngClass"], [3, "submit", "formGroup", "ngClass"], [1, "list-group", "list-group-flush", "mb-2", "bg-emphasis", "bg-opacity-05", "rounded", "p-3"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "lh-lg", "px-0", "pt-0", "border-emphasis", "border-opacity-10"], [1, "fw-light"], [1, "fw-medium"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "lh-lg", "px-0", "border-emphasis", "border-opacity-10"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "lh-lg", "px-0", "pb-0", "border-emphasis", "border-opacity-10"], [1, "cup", "fw-medium", 3, "click"], [1, "list-group", "list-group-flush", "px-3"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "lh-lg", "px-0", "pt-0"], ["for", "quantity"], ["type", "number", "placeholder", "\u062A\u0639\u062F\u0627\u062F", "formControlName", "quantity", 1, "form-control", "w-auto", "text-end", "text-body", 3, "ngClass"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "lh-lg", "px-0"], [1, "col-10", "p-0", "mb-0", "text-inverse", "d-flex", "flex-column"], [1, "fw-bold"], [1, "m-0", "small", "lh-sm", "text-body-tertiary"], [1, "ios7-switch", "lh-1"], ["id", "maximumSending", "type", "checkbox", "formControlName", "maximumSending"], [1, "h4", "mb-0"], ["id", "maxStrike", "type", "checkbox", "formControlName", "requestSettlementInLoss"], [1, "alert", "alert-warning", "align-items-center", "d-flex", "gap-2", "fw-bold", "p-2", "my-2"], [1, "d-flex", "gap-1", "flex-column"], ["width", "24", "height", "24", 1, "text-warning", 3, "iconName"], [1, "d-flex"], [1, "d-flex", "align-items-center", "gap-1", "mb-1", "px-3"], [1, "form-check"], ["id", "acceptRules", "type", "checkbox", "formControlName", "acceptRules", 1, "form-check-input"], [1, "cup", "text-global", "text-decoration-underline", "mb-1", 3, "click", "ngbPopover", "triggers", "container"], ["type", "submit", 1, "btn", "btn-global", "flex-grow-1", 3, "disabled"], [1, "mb-0", "text-justify"], [1, "p-0"], [1, "w-100", "d-flex", "flex-column", "gap-3", "align-items-center"], [1, "text-warning", "bg-warning", "bg-opacity-10", "rounded", "p-2"], ["width", "32", "height", "32", 3, "iconName"], [1, "fw-bold", "fs-6", "mb-3"], [1, "p-0", "d-flex", "flex-column", "gap-3"], [1, "d-flex", "text-start"], ["width", "14", "height", "14", 3, "iconName"]],
        template: function(i, a) {
            i & 1 && H(0, v1, 49, 18, "form", 3)(1, b1, 2, 1, "ng-template", null, 0, Ft)(3, C1, 23, 5, "ng-template", null, 1, Ft),
            i & 2 && W(a.form ? 0 : -1)
        },
        dependencies: [ot, Je, Wt, Ni, cn, ki, Xo, ja, Oi, ln, Lt, un, dn, rs, Ri, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var SD = ( () => {
    let s = class s extends li {
        constructor() {
            super(...arguments),
            this.icons = Ce,
            this.confirm = Ge(),
            this.cancel = Ge(),
            this.Id = ee.required(),
            this.PositionId = ee.required(),
            this.SettlementType = ee.required(),
            this.positionFacade = I(_n)
        }
        submit() {
            this.positionFacade.deleteSettlementRequest(this.Id(), this.PositionId(), this.SettlementType())
        }
    }
    ;
    s.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = oi(s)))(a || s)
        }
    }
    )(),
    s.\u0275cmp = ne({
        type: s,
        selectors: [["settlement-cancel-form"]],
        inputs: {
            Id: [1, "Id"],
            PositionId: [1, "PositionId"],
            SettlementType: [1, "SettlementType"]
        },
        outputs: {
            confirm: "confirm",
            cancel: "cancel"
        },
        features: [Zt],
        decls: 10,
        vars: 1,
        consts: [[1, "text-center", "mb-2"], [1, "rounded", "bg-danger-100", "d-inline-flex", "p-2", "mb-2"], ["width", "32", "height", "32", 1, "text-danger", 3, "iconName"], [1, "fs-6", "mb-2", "fw-bold", "mb-2"], [1, "text-body-tertiary", "px-4"], [1, "d-flex", "gap-1"], ["type", "button", 1, "btn", "btn-danger", "flex-grow-1", 3, "click"]],
        template: function(i, a) {
            i & 1 && (h(0, "div", 0)(1, "div", 1),
            k(2, "svg-icon", 2),
            f(),
            h(3, "div", 3),
            C(4, "\u0627\u0632 \u062D\u0630\u0641 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062F\u0627\u0631\u06CC\u062F\u061F"),
            f(),
            h(5, "p", 4),
            C(6, "\u062F\u0631 \u0635\u0648\u0631\u062A \u062D\u0630\u0641 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062A\u0633\u0648\u06CC\u0647 \u0646\u0642\u062F\u06CC \u0634\u0645\u0627\u060C \u0628\u0647 \u0635\u0648\u0631\u062A \u06A9\u0644\u06CC \u0644\u063A\u0648 \u062E\u0648\u0627\u0647\u062F \u0634\u062F."),
            f()(),
            h(7, "div", 5)(8, "button", 6),
            z("click", function() {
                return a.submit()
            }),
            C(9, "\u062D\u0630\u0641 \u062F\u0631\u062E\u0648\u0627\u0633\u062A"),
            f()()),
            i & 2 && (d(2),
            b("iconName", a.icons.Delete))
        },
        dependencies: [ot, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var $i = ( () => {
    let s = class s {
        constructor() {
            this.symbolService = I(pt),
            this.accountService = I(hn),
            this.defaultFilterKeysStorage$ = this.accountService.userAccountInfo$.pipe(pe(Boolean), Ze(), D(e => `${e.customerIsin}_option-default-filters`)),
            this.optionPinedIsinsKey$ = this.accountService.userAccountInfo$.pipe(pe(Boolean), Ze(), D(e => `${e.customerIsin}_option-pined-isins`)),
            this.PinnedIsins = Ie([]),
            this.pinnedIsins$ = st(this.PinnedIsins),
            this.storageFilters = q(this.defaultFilterKeysStorage$.pipe(yt(this.pinnedIsins$.pipe(pe(e => e.length > 0))), Ze(), D( ([e,i]) => {
                let a = localStorage.getItem(e) ?? void 0, u;
                if (a?.length > 0 && a !== "undefined" && a !== "null") {
                    u = JSON.parse(a);
                    let p = new Date
                      , g = u?.date;
                    g && p > new Date(g) && (u.date = null)
                } else
                    u = {
                        date: null,
                        optionSide: Ee.Buy,
                        optionUnits: dr[Ee.Buy],
                        baseSymbolIsin: i[0].symbolIsin ?? "IRT3TVAF0001"
                    };
                return this.updateFilters(u),
                u
            }
            ))),
            this.storageFilters$ = st(this.storageFilters),
            this.openBaseSymbolsList = new ue,
            this.openBaseSymbolsList$ = this.openBaseSymbolsList.asObservable(),
            this.openDueDatesList = new ue,
            this.openDueDatesList$ = this.openDueDatesList.asObservable(),
            this.openSideList = new ue,
            this.openSideList$ = this.openSideList.asObservable(),
            this.filters = Ie(null),
            this.filters$ = st(this.filters).pipe(pe(e => !!e?.baseSymbolIsin)),
            this.selectedDate$ = this.filters$.pipe(pe(Boolean), D(e => e.date)),
            this.selectedBaseSymbolIsin$ = this.filters$.pipe(pe(Boolean), D(e => e.baseSymbolIsin), _i()),
            this.selectedBaseSymbol$ = this.selectedBaseSymbolIsin$.pipe(pe(Boolean), fe(e => this.getBaseSymbolByIsin$(e)), _i()),
            this.selectedOptionSide$ = this.filters$.pipe(pe(Boolean), D(e => +e.optionSide)),
            this.shareDueDates = q(this.selectedBaseSymbol$.pipe(Ei(this.filters$), fe( ([e,i]) => this.symbolService.OptionSymbols$.pipe(D(a => a.filter(u => u.baseIsin === e.companyIsin)), D(a => a.map(u => u.shareDueDate).filter(Boolean)), D(a => [...new Set(a)]), D(a => a.sort()), Q(a => {
                i.date === null && this.setSelectedDate(a?.first())
            }
            ))))),
            this.shareDueDates$ = st(this.shareDueDates),
            q(this.filters$.pipe(Ei(this.defaultFilterKeysStorage$.pipe(pe(Boolean))), Q( ([e,i]) => localStorage.setItem(i, JSON.stringify(e))))),
            q(this.optionPinedIsinsKey$.pipe(Ze(), D(e => {
                let i = JSON.parse(localStorage.getItem(e) ?? null) || [{
                    symbolIsin: "IRT3TVAF0001",
                    sortKey: 3
                }, {
                    symbolIsin: "IRT1KHOD0001",
                    sortKey: 2
                }, {
                    symbolIsin: "IRT3SATF0001",
                    sortKey: 1
                }];
                this.PinnedIsins.set(i)
            }
            ))),
            q(this.pinnedIsins$.pipe(Ei(this.optionPinedIsinsKey$.pipe(pe(Boolean))), Q( ([e,i]) => localStorage.setItem(i, JSON.stringify(e)))))
        }
        openBaseSymbolsListHandler() {
            this.openBaseSymbolsList.next(!0)
        }
        openDueDatesListHandler() {
            this.openDueDatesList.next(!0)
        }
        openSideListHandler() {
            this.openSideList.next(!0)
        }
        updateFilters(e) {
            this.filters.update(i => B(B({}, i), e))
        }
        setSelectedDate(e) {
            this.updateFilters({
                date: e
            })
        }
        setSelectedBaseSymbol(e) {
            this.updateFilters({
                baseSymbolIsin: e?.symbolIsin,
                date: null
            })
        }
        setSelectedOptionSide(e) {
            this.updateFilters({
                optionSide: e,
                optionUnits: dr[e]
            })
        }
        getBaseSymbolByIsin$(e) {
            return this.symbolService.OptionBaseSymbols$.pipe(Ze(), D(i => {
                let a = this.symbolService.symbolByIsin[e];
                if (Ha(a?.marketUnit))
                    return this.symbolService.symbolByCompanyIsin[a?.baseIsin];
                if (i.flatMap(u => u.symbolIsin).includes(e))
                    return this.symbolService.symbolByIsin[e]
            }
            ))
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var el = ( () => {
    let s = class s {
        constructor() {
            this.isMobile = !1,
            this.icons = Ce,
            this.optionChainService = I($i),
            this.hasPrevDate = Ie(!1),
            this.hasNextDate = Ie(!1),
            this.selectedDate = q(this.optionChainService.selectedDate$),
            q(this.optionChainService.selectedDate$.pipe(pe(Boolean), Q(e => {
                this.hasNextDate.set(!1),
                this.hasPrevDate.set(!1);
                let i = this.optionChainService.shareDueDates()?.findIndex(a => a === e) ?? -1;
                if (i >= 0) {
                    let a = this.optionChainService.shareDueDates()?.length ?? 0;
                    i === 0 && a > 1 ? (this.hasNextDate.set(!0),
                    this.hasPrevDate.set(!1)) : i < a - 1 ? (this.hasNextDate.set(!0),
                    this.hasPrevDate.set(!0)) : i === a - 1 && a > 1 ? (this.hasNextDate.set(!1),
                    this.hasPrevDate.set(!0)) : a === 1 && (this.hasNextDate.set(!1),
                    this.hasPrevDate.set(!1))
                }
            }
            )))
        }
        nextDueDate() {
            let e = this.optionChainService.shareDueDates().findIndex(i => i === this.selectedDate());
            this.optionChainService.shareDueDates()[e + 1] && this.optionChainService.setSelectedDate(this.optionChainService.shareDueDates()[e + 1])
        }
        prevDueDate() {
            let e = this.optionChainService.shareDueDates().findIndex(i => i === this.selectedDate());
            this.optionChainService.shareDueDates()[e - 1] && this.optionChainService.setSelectedDate(this.optionChainService.shareDueDates()[e - 1])
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["option-chain-duedate-navigator"]],
        decls: 7,
        vars: 5,
        consts: [[1, "d-flex", "gap-2", "ms-auto", "w-100", 3, "ngClass"], [1, "btn", "btn-outline-secondary", "btn-sm", "border-principal-5x", "border-1", "rounded-2", "px-0", "pe-3", "ps-1", "text-body", 3, "click", "disabled"], ["width", "24", "height", "24", 3, "iconName"], [1, "btn", "btn-outline-secondary", "btn-sm", "border-principal-5x", "border-1", "rounded-2", "px-0", "ps-3", "pe-1", "text-body", 3, "click", "disabled"]],
        template: function(i, a) {
            i & 1 && (h(0, "div", 0)(1, "button", 1),
            z("click", function() {
                return a.prevDueDate()
            }),
            k(2, "svg-icon", 2),
            C(3, " \u0633\u0631\u0631\u0633\u06CC\u062F \u0642\u0628\u0644 "),
            f(),
            h(4, "button", 3),
            z("click", function() {
                return a.nextDueDate()
            }),
            C(5, " \u0633\u0631\u0631\u0633\u06CC\u062F \u0628\u0639\u062F "),
            k(6, "svg-icon", 2),
            f()()),
            i & 2 && (b("ngClass", a.isMobile ? "" : "justify-content-between p-2"),
            d(),
            b("disabled", !a.hasPrevDate()),
            d(),
            b("iconName", a.icons.ChevronRight),
            d(2),
            b("disabled", !a.hasNextDate()),
            d(2),
            b("iconName", a.icons.ChevronLeft))
        },
        dependencies: [ot, Je, gn, Ni, Lt, ye],
        styles: ["/*# sourceMappingURL=option-chain-duedate-navigator.component-DQZYOKBR.css.map */"],
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var oh = (n, s) => s.symbolIsin
  , sh = (n, s) => ({
    "text-success": n,
    "text-danger": s
});
function S1(n, s) {
    n & 1 && (h(0, "span", 0),
    C(1, "\u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0627\u062F \u067E\u0627\u06CC\u0647"),
    f())
}
function y1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "svg-icon", 16),
        z("click", function() {
            R(r);
            let i = w();
            return L(i.clearSearch())
        }),
        f()
    }
    if (n & 2) {
        let r = w();
        b("iconName", r.icons.Close)
    }
}
function x1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "li", 9)(1, "div", 17),
        z("click", function() {
            let i = R(r).$implicit
              , a = w();
            return L(a.onBaseSymbolSelect(i))
        }),
        h(2, "div", 18)(3, "span", 19)(4, "span", 18)(5, "span", 20),
        C(6),
        $(7, "number"),
        f(),
        h(8, "span", 21)(9, "span", 22),
        C(10),
        $(11, "number"),
        f()()(),
        h(12, "span", 23),
        C(13),
        f(),
        k(14, "symbol-state", 24),
        f()(),
        h(15, "svg-icon", 25),
        z("click", function(i) {
            let a = R(r).$implicit
              , u = w();
            return L(u.UnPinExistIsin(i, a.symbolIsin))
        }),
        f()()()
    }
    if (n & 2) {
        let r, e, i = s.$implicit, a = w();
        b("ngClass", a.isMobile() ? "list-group-item px-0" : ""),
        d(),
        b("ngClass", a.isMobile() ? "w-100 py-1" : ""),
        d(5),
        X(Se(7, 8, (r = i == null ? null : i.price) !== null && r !== void 0 ? r : 0)),
        d(2),
        b("ngClass", Ln(13, sh, (i == null ? null : i.pricePercent) > 0, (i == null ? null : i.pricePercent) < 0)),
        d(2),
        K(" (", ae(11, 10, (e = i == null ? null : i.pricePercent) !== null && e !== void 0 ? e : 0, "1.0-2"), "%) "),
        d(3),
        X(i.symbolName),
        d(),
        b("stateColor", i == null ? null : i.symbolState),
        d(),
        b("iconName", a.icons.PinFill)
    }
}
function I1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "li", 14)(1, "div", 17),
        z("click", function() {
            let i = R(r).$implicit
              , a = w();
            return L(a.onBaseSymbolSelect(i))
        }),
        h(2, "div", 18)(3, "span", 26),
        k(4, "symbol-state", 24),
        h(5, "span", 27),
        C(6),
        f()(),
        h(7, "span", 28)(8, "span", 22),
        C(9),
        $(10, "number"),
        f(),
        h(11, "span", 20),
        C(12),
        $(13, "number"),
        f()()(),
        h(14, "svg-icon", 29),
        z("click", function(i) {
            let a = R(r).$implicit
              , u = w();
            return L(u.PinNewIsin(i, a.symbolIsin))
        }),
        f()()()
    }
    if (n & 2) {
        let r, e, i = s.$implicit, a = w();
        b("ngClass", a.isMobile() ? "list-group-item px-0" : ""),
        d(),
        b("ngClass", a.isMobile() ? "w-100 py-1" : ""),
        d(3),
        b("stateColor", i == null ? null : i.symbolState),
        d(2),
        K(" ", i.symbolName, " "),
        d(),
        b("ngClass", Ln(13, sh, (i == null ? null : i.pricePercent) > 0, (i == null ? null : i.pricePercent) < 0)),
        d(2),
        K(" (", ae(10, 8, (r = i == null ? null : i.pricePercent) !== null && r !== void 0 ? r : 0, "1.0-2"), "%) "),
        d(3),
        X(Se(13, 11, (e = i == null ? null : i.price) !== null && e !== void 0 ? e : 0)),
        d(2),
        b("iconName", a.icons.Pin)
    }
}
function w1(n, s) {
    if (n & 1 && (h(0, "div", 15)(1, "div", 30),
    k(2, "svg-icon", 31),
    f(),
    h(3, "div", 32),
    C(4, "\u0646\u062A\u06CC\u062C\u0647 \u0627\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F!"),
    f()()),
    n & 2) {
        let r = w();
        d(2),
        b("iconName", r.icons.AlertBox)
    }
}
var rh = ( () => {
    let s = class s {
        constructor() {
            this.optionChainService = I($i),
            this.activeSymbolService = I(lo),
            this.sidePanelServiceService = I(os),
            this.symbolService = I(pt),
            this.marketDataService = I(Li),
            this.localStorageService = I(pn),
            this.lsService = I(Bt),
            this.icons = Ce,
            this.closed = Ge(),
            this.isMobile = ee.required(),
            this.SymbolSearch = Ie(null),
            this.SymbolSearch$ = st(this.SymbolSearch),
            this.baseSymbolIsins$ = this.symbolService.OptionBaseSymbols$.pipe(Ze(), D(e => e.map(i => i.symbolIsin))),
            this.marketDataApiFunc = () => this.baseSymbolIsins$.pipe(Ze(), pe(e => !!e?.length), fe(e => this.marketDataService.GetMarketData(6, e)), D(e => e.map(i => ({
                symbolIsin: i.symbolIsin,
                price: i?.lastTradedPrice,
                pricePercent: i?.priceVar,
                stateCode: i?.stateCode,
                closingPrice: i?.closingPrice,
                symbolState: Fi(i?.stateCode)
            }))), Q(e => e.forEach(i => this.UpdateMarketData(i)))),
            this.MarketData = Ie(void 0),
            this.UpdateMarketData = e => {
                this.MarketData.update(i => B({}, Object.assign(i ?? {}, {
                    [e.symbolIsin]: B(B({}, i?.[e.symbolIsin]), e)
                })))
            }
            ,
            this.MarketData$ = st(this.MarketData),
            this.optionBaseSymbol$ = this.symbolService.OptionBaseSymbols$.pipe(Ze(), D(e => e.sort( (i, a) => a0(i.symbolName, a.symbolName))), fe(e => this.SymbolSearch$.pipe(D(i => i ? e.filter(a => a.symbolName.includes(i)) : e), Mp(i => this.SymbolSearch() ? Ip(300) : i)))),
            this.OptionBaseSymbol = q(this.optionBaseSymbol$.pipe(fe(e => this.MarketData$.pipe(D(i => e.map(a => B(J(B({}, a), {
                sortKey: 0
            }), i?.[a.symbolIsin]))))))),
            this.PinnedSymbols = kt( () => this.OptionBaseSymbol()?.filter(i => this.optionChainService.PinnedIsins().find(a => a.symbolIsin === i.symbolIsin)).map(i => {
                let a = this.optionChainService.PinnedIsins().find(u => u.symbolIsin === i.symbolIsin);
                return J(B({}, i), {
                    sortKey: a.sortKey
                })
            }
            ).sort( (i, a) => a?.sortKey - i?.sortKey)),
            this.UnPinnedSymbols = kt( () => this.OptionBaseSymbol()?.filter(e => !this.optionChainService.PinnedIsins().find(i => i.symbolIsin === e.symbolIsin))),
            this.PinNewIsin = (e, i) => {
                e.stopPropagation(),
                this.optionChainService.PinnedIsins().findIndex(a => a.symbolIsin === i) < 0 && this.updatePinIsin([...this.optionChainService.PinnedIsins(), {
                    symbolIsin: i,
                    sortKey: 0
                }])
            }
            ,
            this.UnPinExistIsin = (e, i) => {
                e.stopPropagation(),
                this.updatePinIsin(this.optionChainService.PinnedIsins().filter(a => a.symbolIsin !== i))
            }
            ,
            this.updatePinIsin = e => {
                this.optionChainService.PinnedIsins.update( () => [...e])
            }
            ,
            this.clearSearch = () => this.SymbolSearch.set(""),
            q(this.subscribeToMarketDataLs()),
            q(this.marketDataApiFunc())
        }
        subscribeToMarketDataLs() {
            let e = i => {
                let a = je.OptionBaseSymbolInfo
                  , u = {
                    symbolIsin: i.inst,
                    price: +(i.val[a.lastTradedPrice] ?? 0),
                    pricePercent: +(i.val[a.tradedPriceVar] ?? 0),
                    closingPrice: +(i.val[a.closingPrice] ?? 0),
                    symbolState: Fi(i.val[a.stateCode])
                };
                this.UpdateMarketData(u)
            }
            ;
            return this.baseSymbolIsins$.pipe(Ze(), pe(i => !!i?.length), Q(i => this.lsService.subscribeToLsIfNotAvailable(ze.OptionBaseSymbolInfo, i, e)))
        }
        onBaseSymbolSelect(e) {
            this.clearSearch(),
            this.closed.emit(),
            this.optionChainService.setSelectedBaseSymbol(e),
            this.activeSymbolService.setActiveIsin(e.symbolIsin)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["option-chain-base-symbols-menu"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        outputs: {
            closed: "closed"
        },
        decls: 22,
        vars: 16,
        consts: [[1, "fw-700", "d-block", "text-center", "py-2"], [1, "d-flex", "flex-column", "overflow-hidden", "w-100", "h-100"], [1, "position-relative", "px-2", "py-2", "mb-2", "shadow-sm", "flex-shrink-0"], ["id", "symbolSearch", "autocomplete", "off", "placeholder", "\u062C\u0633\u062A\u062C\u0648 \u062F\u0631 \u0644\u06CC\u0633\u062A", "type", "text", 1, "form-control", 3, "input", "value"], ["width", "18", "height", "18", 1, "cup", "position-absolute", "p-1", "text-muted", 2, "top", "11px", "left", "10px", 3, "iconName"], [1, "overflow-hidden", "h-100", "d-flex", "flex-column"], [1, "overflow-auto", "flex-grow-1"], [1, "px-0", 3, "ngClass", "hidden"], [1, "d-block", "text-start", "text-body-tertiary", 3, "ngClass"], ["ngbDropdownItem", "", 1, "dropdown-item", "align-items-baseline", "d-flex", "text-start", "w-100", "border-emphasis", "border-emphasis-dark-mobile", "border-opacity-10", 3, "ngClass"], [1, "list-group", "list-group-flush", 3, "ngClass"], [1, "px-0", "mb-0", 3, "ngClass", "hidden"], [1, "text-start", "text-body-tertiary", 3, "ngClass"], [1, "text-start", "px-0", "mb-1"], ["ngbDropdownItem", "", 1, "dropdown-item", "pinhover", "align-items-baseline", "d-flex", "text-start", "w-100", "text-body", "border-emphasis", "border-emphasis-dark-mobile", "border-opacity-10", 3, "ngClass"], [1, "text-center", "h-100", "d-flex", "flex-column", "justify-content-center", "align-items-center", "my-5"], ["width", "18", "height", "18", 1, "cup", "position-absolute", "p-1", "text-muted", 2, "top", "11px", "left", "10px", 3, "click", "iconName"], [1, "d-flex", "gap-1", "justify-content-between", "pe-2", 3, "click", "ngClass"], [1, "d-flex", "gap-1"], ["dir", "ltr", 1, "pe-2", "d-flex", "gap-1"], [1, "text-body"], [3, "ngClass"], ["dir", "ltr"], [1, "fw-bold", "text-body", 2, "flex-basis", "50px"], [3, "stateColor"], ["width", "16", "height", "16", 1, "rounded", "line-height-18px", "cup", 3, "click", "iconName"], ["dir", "rtl", 1, "pe-2", "w-100"], [1, "fw-bold", 2, "flex-basis", "50px"], [1, "d-flex", "gap-1", 3, "ngClass"], ["width", "16", "height", "16", 1, "display-hover", "rounded", "text-body", "text-opacity-50", "text-primary-hover", "line-height-18px", "cup", 3, "click", "iconName"], [1, "rounded", "bg-secondary", "bg-opacity-10", "d-inline-flex", "p-2", "mb-3"], ["width", "24", "height", "24", 1, "text-secondary", "p-1", 3, "iconName"], [1, "fw-bold"]],
        template: function(i, a) {
            if (i & 1 && (H(0, S1, 2, 0, "span", 0),
            h(1, "div", 1)(2, "div", 2)(3, "input", 3),
            z("input", function(p) {
                return a.SymbolSearch.set(p == null || p.target == null ? null : p.target.value)
            }),
            f(),
            H(4, y1, 1, 1, "svg-icon", 4),
            f(),
            h(5, "div", 5)(6, "div", 6)(7, "div")(8, "ul", 7)(9, "span", 8),
            C(10, "\u067E\u06CC\u0646 \u0634\u062F\u0647 \u0647\u0627"),
            f(),
            qe(11, x1, 16, 16, "li", 9, oh),
            f()(),
            h(13, "div", 10)(14, "ul", 11)(15, "div", 12),
            C(16, " \u0646\u0645\u0627\u062F\u0647\u0627\u06CC \u067E\u0627\u06CC\u0647 "),
            h(17, "span", 13),
            C(18),
            f()(),
            qe(19, I1, 15, 16, "li", 14, oh),
            f()(),
            H(21, w1, 5, 1, "div", 15),
            f()()()),
            i & 2) {
                let u, p, g, y;
                W(a.isMobile() ? 0 : -1),
                d(),
                vi(a.isMobile() ? "" : "max-height: 450px"),
                d(2),
                b("value", a.SymbolSearch()),
                d(),
                W(a.SymbolSearch() ? 4 : -1),
                d(3),
                bi(a.isMobile() ? "list-group list-group-flush px-3" : ""),
                d(),
                b("ngClass", a.isMobile() ? "list-group list-group-flush" : "")("hidden", !((u = a.PinnedSymbols()) != null && u.length)),
                d(),
                b("ngClass", a.isMobile() ? "px-0 mb-0" : "  px-2  mb-1"),
                d(2),
                Ke(a.PinnedSymbols()),
                d(2),
                b("ngClass", a.isMobile() ? "px-3" : ""),
                d(),
                b("ngClass", a.isMobile() ? "list-group list-group-flush " : "")("hidden", !((p = a.UnPinnedSymbols()) != null && p.length)),
                d(),
                b("ngClass", a.isMobile() ? "px-0 mb-0 mt-3" : "px-2 mb-2 "),
                d(3),
                K("(", (g = (g = a.UnPinnedSymbols()) == null ? null : g.length) !== null && g !== void 0 ? g : 0, " \u0646\u0645\u0627\u062F)"),
                d(),
                Ke(a.UnPinnedSymbols()),
                d(2),
                W((y = a.OptionBaseSymbol()) != null && y.length ? -1 : 21)
            }
        },
        dependencies: [ot, Je, Wt, ss, ye, Yo],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
function M1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "button", 5),
        z("click", function() {
            let i = R(r).$implicit
              , a = w(2);
            return L(a.selectDateHandler(i))
        }),
        C(1),
        $(2, "jdate"),
        f()
    }
    if (n & 2) {
        let r = s.$implicit;
        d(),
        K(" ", Se(2, 1, r), " ")
    }
}
function T1(n, s) {
    if (n & 1 && (h(0, "div", 0),
    k(1, "svg-icon", 1),
    h(2, "span", 2),
    C(3, "\u062A\u0627\u0631\u06CC\u062E \u0633\u0631\u0631\u0633\u06CC\u062F"),
    f()(),
    h(4, "div", 3),
    qe(5, M1, 3, 3, "button", 4, ct),
    f()),
    n & 2) {
        let r = w();
        d(),
        b("iconName", r.icons.Calendar),
        d(4),
        Ke(r.optionChainService.shareDueDates())
    }
}
function D1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "button", 7),
        z("click", function() {
            let i = R(r).$implicit
              , a = w(2);
            return L(a.selectDateHandler(i))
        }),
        C(1),
        $(2, "jdate"),
        f()
    }
    if (n & 2) {
        let r = s.$implicit;
        d(),
        K(" ", Se(2, 1, r), `
`)
    }
}
function E1(n, s) {
    if (n & 1 && qe(0, D1, 3, 3, "button", 6, ct),
    n & 2) {
        let r = w();
        Ke(r.optionChainService.shareDueDates())
    }
}
var lh = ( () => {
    let s = class s {
        constructor() {
            this.icons = Ce,
            this.optionChainService = I($i),
            this.isMobile = ee(!1),
            this.closed = Ge()
        }
        selectDateHandler(e) {
            this.optionChainService.setSelectedDate(e),
            this.closed.emit()
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["option-chain-due-date-list"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        outputs: {
            closed: "closed"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "d-flex", "gap-1", "justify-content-center", "align-items-center"], ["width", "20", "height", "20", 3, "iconName"], [1, "fw-700"], [1, "list-group", "list-group-flush", "p-3"], ["type", "button", "ngbDropdownItem", "", 1, "dropdown-item", "list-group-item", "list-group-item-action", "py-2", "text-start", "d-flex", "align-items-baseline", "px-0"], ["type", "button", "ngbDropdownItem", "", 1, "dropdown-item", "list-group-item", "list-group-item-action", "py-2", "text-start", "d-flex", "align-items-baseline", "px-0", 3, "click"], ["type", "button", "ngbDropdownItem", "", 1, "dropdown-item", "list-group-item", "py-2", "text-start", "d-flex", "align-items-baseline"], ["type", "button", "ngbDropdownItem", "", 1, "dropdown-item", "list-group-item", "py-2", "text-start", "d-flex", "align-items-baseline", 3, "click"]],
        template: function(i, a) {
            i & 1 && H(0, T1, 7, 1)(1, E1, 2, 0),
            i & 2 && W(a.isMobile() ? 0 : 1)
        },
        dependencies: [ot, Ri, gn, ss, Ga, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var P1 = n => ({
    "px-3 py-1": n
})
  , k1 = n => ({
    "d-flex px-0 fw-medium gap-2": n
});
function O1(n, s) {
    n & 1 && (h(0, "div", 0),
    C(1, "\u0646\u0648\u0639 \u0642\u0631\u0627\u0631\u062F\u0627\u062F"),
    f())
}
function N1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "button", 3),
        z("click", function() {
            let i = R(r).$implicit
              , a = w();
            return L(a.selectSideHandler(+i.key))
        }),
        k(1, "svg-icon", 4),
        C(2),
        f()
    }
    if (n & 2) {
        let r = s.$implicit
          , e = w();
        b("ngClass", Fe(3, k1, e.isMobile())),
        d(),
        b("iconName", e.sideIconNames[r.key]),
        d(),
        K(" ", r.value, " ")
    }
}
var ch = ( () => {
    let s = class s {
        constructor() {
            this.optionChainService = I($i),
            this.isMobile = ee(!1),
            this.closed = Ge(),
            this.optionSideFilter = Object.keys(gs).map(e => ({
                key: e,
                title: gs[e]
            })),
            this.sideIconNames = {
                0: Ce.Call,
                1: Ce.Put,
                3: Ce.Both
            },
            this.icons = Ce,
            this.OptionSideTitles = gs
        }
        selectSideHandler(e) {
            this.optionChainService.setSelectedOptionSide(e),
            this.closed.emit()
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["option-chain-side-selection-list"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        outputs: {
            closed: "closed"
        },
        decls: 5,
        vars: 6,
        consts: [[1, "d-flex", "justify-content-center", "align-items-center", "fw-700"], [1, "list-group", "list-group-flush", "w-100", 3, "ngClass"], ["type", "button", "ngbDropdownItem", "", 1, "dropdown-item", "list-group-item", "list-group-item-action", "py-2", "text-start", "d-flex", "align-items-baseline", 3, "ngClass"], ["type", "button", "ngbDropdownItem", "", 1, "dropdown-item", "list-group-item", "list-group-item-action", "py-2", "text-start", "d-flex", "align-items-baseline", 3, "click", "ngClass"], [3, "iconName"]],
        template: function(i, a) {
            i & 1 && (H(0, O1, 2, 0, "div", 0),
            h(1, "div", 1),
            qe(2, N1, 3, 5, "button", 2, ct),
            $(4, "keyvalue"),
            f()),
            i & 2 && (W(a.isMobile() ? 0 : -1),
            d(),
            b("ngClass", Fe(4, P1, a.isMobile())),
            d(),
            Ke(Se(4, 2, a.OptionSideTitles)))
        },
        dependencies: [ot, Je, Yp, gn, ss, Ga, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var A1 = (n, s) => ({
    "text-success": n,
    "text-danger": s
});
function F1(n, s) {
    n & 1 && (h(0, "span", 2),
    C(1, "\u0641\u06CC\u0644\u062A\u0631 \u0647\u0627\u06CC \u0632\u0646\u062C\u06CC\u0631\u0647 \u0622\u067E\u0634\u0646"),
    f())
}
function R1(n, s) {
    if (n & 1 && (h(0, "div", 4)(1, "span", 20),
    C(2),
    $(3, "number"),
    f(),
    h(4, "span"),
    C(5),
    $(6, "number"),
    f()()),
    n & 2) {
        let r, e, i, a = w();
        d(),
        b("ngClass", Ln(8, A1, ((r = a.BaseSymbolTrade()) == null ? null : r.pricePercent) > 0, ((r = a.BaseSymbolTrade()) == null ? null : r.pricePercent) < 0)),
        d(),
        K(" (", ae(3, 3, (e = (e = a.BaseSymbolTrade()) == null ? null : e.pricePercent) !== null && e !== void 0 ? e : 0, "1.0-2"), "%) "),
        d(3),
        X(Se(6, 6, (i = (i = a.BaseSymbolTrade()) == null ? null : i.price) !== null && i !== void 0 ? i : 0))
    }
}
function L1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 8)(1, "option-chain-base-symbols-menu", 21),
        z("closed", function() {
            R(r);
            let i = w()
              , a = Ct(4);
            return L(i.closeList(a))
        }),
        f()()
    }
    if (n & 2) {
        let r = w();
        d(),
        b("isMobile", r.isMobile())
    }
}
function B1(n, s) {
    if (n & 1 && (h(0, "div", 15)(1, "div", 22),
    k(2, "option-chain-due-date-list", 23),
    f()()),
    n & 2) {
        let r = w();
        d(2),
        b("isMobile", r.isMobile())
    }
}
function V1(n, s) {
    if (n & 1 && (h(0, "div", 15),
    k(1, "option-chain-side-selection-list", 24),
    f()),
    n & 2) {
        let r = w();
        d(),
        b("isMobile", r.isMobile())
    }
}
function $1(n, s) {
    n & 1 && k(0, "option-chain-duedate-navigator")
}
var uh = ( () => {
    let s = class s {
        onButtonFocus(e) {
            this.isMobile() ? this.optionChainService.openBaseSymbolsListHandler() : e.isOpen() ? e.close() : e.open()
        }
        constructor() {
            this.icons = Ce,
            this.isMobile = ee.required(),
            this.symbolMarketData = Ge(),
            this.lsService = I(Bt),
            this.symbolService = I(pt),
            this.localStorageService = I(pn),
            this.optionChainService = I($i),
            this.sidePanelServiceService = I(os),
            this.marketDataService = I(Li),
            this.BaseSymbolTrade = Ie(null),
            this.BaseSymbolTrade$ = st(this.BaseSymbolTrade),
            this.selectedDate = q(this.optionChainService.selectedDate$),
            this.selectedBaseSymbol = q(this.optionChainService.selectedBaseSymbol$),
            this.selectedOptionSideTitle = q(this.optionChainService.selectedOptionSide$.pipe(D(e => gs[e]))),
            this.autoClose = "outside",
            this.MarketData = Ie(void 0),
            this.UpdateMarketData = e => {
                this.MarketData.update(i => B({}, Object.assign(i ?? {}, B(B({}, i?.[e.symbolIsin]), e))))
            }
            ,
            this.MarketData$ = st(this.MarketData),
            q(this.sidePanelServiceService.openSidePanelWithData$.pipe(pe(e => e.sidePanel === Ys.Option && e?.data?.symbolIsin?.length > 0), yt(this.optionChainService.storageFilters$, this.symbolService.OptionBaseSymbols$.pipe(Ze())), D( ([e,i,a]) => {
                let u = B({}, i)
                  , p = this.symbolService.symbolByIsin[e?.data?.symbolIsin];
                return e && e.sidePanel === Ys.Option && e?.data?.optionTab === au.Chain && (Ha(p?.marketUnit) ? (u.baseSymbolIsin = this.symbolService.symbolByCompanyIsin[p?.baseIsin]?.symbolIsin,
                u.date = p.shareDueDate,
                Po(p.marketUnit) ? u.optionSide = Ee.Buy : d0(p.marketUnit) && (u.optionSide = Ee.Sell),
                u.optionUnits = dr[u.optionSide]) : a.flatMap(g => g.symbolIsin).includes(e?.data?.symbolIsin) && (u.date = null,
                u.baseSymbolIsin = this.symbolService.symbolByIsin[e?.data?.symbolIsin]?.symbolIsin)),
                B({}, u)
            }
            ), Q(e => {
                this.optionChainService.updateFilters(e)
            }
            ))),
            q(this.BaseSymbolTrade$.pipe(Q(e => this.symbolMarketData.emit(e)))),
            q(this.optionChainService.selectedBaseSymbolIsin$.pipe(Q(e => {
                this.lsService.unsubscribeSchema(ze.OptionBaseSymbolInfo),
                this.lsService.subscribeToLsIfNotAvailable(ze.OptionBaseSymbolInfo, [e], i => {
                    let a = je.OptionBaseSymbolInfo
                      , u = {
                        symbolIsin: i.inst,
                        price: +(i.val[a.lastTradedPrice] ?? 0),
                        pricePercent: +(i.val[a.tradedPriceVar] ?? 0),
                        closingPrice: +(i.val[a.closingPrice] ?? 0),
                        symbolState: Fi(i.val[a.stateCode])
                    };
                    this.UpdateMarketData(u)
                }
                )
            }
            ))),
            q(this.MarketData$.pipe(pe(Boolean), Q(e => this.BaseSymbolTrade.set(B({}, e)))))
        }
        ngOnDestroy() {
            this.lsService.unsubscribeSchema(ze.OptionBaseSymbolInfo)
        }
        closeList(e) {
            this.isMobile() || e.close()
        }
        openDueDateList() {
            this.optionChainService.openDueDatesListHandler()
        }
        openSIdeSelection() {
            this.optionChainService.openSideListHandler()
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["option-chain-header"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        outputs: {
            symbolMarketData: "symbolMarketData"
        },
        decls: 31,
        vars: 22,
        consts: [["dropDown", "ngbDropdown"], [1, "d-flex", "align-items-center", "justify-content-between", "w-100", "d-flex", "flex-wrap", "gap-1", "p-2"], [1, "px-2", "d-flex", "align-items-center", "flex-shrink-0"], ["ngbDropdown", "", "dir", "rtl", "placement", "bottom-right", "container", "body", 3, "autoClose"], [1, "d-flex", "gap-1"], ["type", "button", "id", "dropdownManual", "ngbDropdownAnchor", "", 1, "form-select", "position-relative", "justify-content-between", "d-flex", "gap-1", 2, "min-width", "200px", 3, "click"], [1, "me-1"], [3, "stateColor"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownManual", "data-bs-auto-close", "outside", 1, "shadow", "rounded-3", "py-0", 2, "min-width", "260px !important"], [1, "d-flex", "align-items-center", "h-100", "flex-grow-1"], ["ngbDropdown", "", "dir", "rtl", "placement", "bottom-right", 1, "w-100"], [1, "d-flex", "w-100"], ["type", "button", "ngbDropdownToggle", "", 1, "form-select", "justify-content-between", "d-flex", "gap-1", 3, "click"], ["width", "16", "height", "16", 3, "iconName"], [1, ""], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 1, "w-100", "shadow", "overflow-auto", "rounded-3", "p-0", 2, "max-height", "180px"], [1, "d-flex", "align-items-center", "flex-grow-1"], [1, "d-flex", "align-items-center", "w-100"], ["ngbDropdown", "", "dir", "rtl", "placement", "bottom-end"], ["type", "button", "ngbDropdownToggle", "", 1, "form-select", "justify-content-between", "d-flex", "w-100", 3, "click"], ["dir", "ltr", 3, "ngClass"], [3, "closed", "isMobile"], [1, "list-group", "list-group-flush", "w-100"], [1, "list-group-flush", 3, "isMobile"], [3, "isMobile"]],
        template: function(i, a) {
            if (i & 1) {
                let u = re();
                h(0, "div", 1)(1, "div"),
                H(2, F1, 2, 0, "span", 2),
                h(3, "div", 3, 0)(5, "div", 4)(6, "button", 5),
                z("click", function() {
                    R(u);
                    let g = Ct(4);
                    return L(a.onButtonFocus(g))
                }),
                h(7, "span", 6),
                k(8, "symbol-state", 7),
                C(9),
                f(),
                H(10, R1, 7, 11, "div", 4),
                f()(),
                H(11, L1, 2, 1, "div", 8),
                f(),
                h(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "button", 12),
                z("click", function() {
                    return R(u),
                    L(a.openDueDateList())
                }),
                h(16, "div", 4),
                k(17, "svg-icon", 13),
                h(18, "span"),
                C(19, "\u0633\u0631\u0631\u0633\u06CC\u062F"),
                f()(),
                h(20, "span", 14),
                C(21),
                $(22, "jdate"),
                f()()(),
                H(23, B1, 3, 1, "div", 15),
                f()(),
                h(24, "div", 16)(25, "div", 17)(26, "div", 18)(27, "button", 19),
                z("click", function() {
                    return R(u),
                    L(a.openSIdeSelection())
                }),
                C(28),
                f(),
                H(29, V1, 2, 1, "div", 15),
                f()()()(),
                H(30, $1, 1, 0, "option-chain-duedate-navigator"),
                f()
            }
            if (i & 2) {
                let u, p, g;
                d(),
                zt("d-flex gap-2 flex-wrap ", a.isMobile() ? " w-100" : "", ""),
                d(),
                W(a.isMobile() ? -1 : 2),
                d(),
                bi(a.isMobile() ? "flex-grow-1 w-100" : ""),
                b("autoClose", a.autoClose),
                d(5),
                b("stateColor", (u = a.BaseSymbolTrade()) == null ? null : u.symbolState),
                d(),
                K(" \u0646\u0645\u0627\u062F ", (p = (p = a.selectedBaseSymbol()) == null ? null : p.symbolName) !== null && p !== void 0 ? p : "\u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0627\u062F \u067E\u0627\u06CC\u0647", ""),
                d(),
                W(a.BaseSymbolTrade() ? 10 : -1),
                d(),
                W(a.isMobile() ? -1 : 11),
                d(6),
                b("iconName", a.icons.Calendar),
                d(4),
                X(a.selectedDate() ? Se(22, 20, a.selectedDate()) : "\u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0627\u0631\u06CC\u062E \u0633\u0631\u0631\u0633\u06CC\u062F"),
                d(2),
                W(a.isMobile() ? -1 : 23),
                d(3),
                zt("d-inline-block ", a.isMobile() ? "w-100" : "", ""),
                d(2),
                K(" ", (g = a.selectedOptionSideTitle()) !== null && g !== void 0 ? g : "\u0646\u0648\u0639 \u0642\u0631\u0627\u0631\u062F\u0627\u062F", " "),
                d(),
                W(a.isMobile() ? -1 : 29),
                d(),
                W(a.isMobile() ? -1 : 30)
            }
        },
        dependencies: [ot, Je, Wt, gn, b0, _0, v0, g0, Ri, Ni, Lt, ye, Yo, el, rh, lh, ch],
        styles: ["/*# sourceMappingURL=option-chain-header.component-34LE3QM5.css.map */"],
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var dh = ( () => {
    let s = class s {
        constructor() {
            this.symbolName = ee(void 0),
            this.stateColor = ee(void 0)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["app-symbol"]],
        inputs: {
            symbolName: [1, "symbolName"],
            stateColor: [1, "stateColor"]
        },
        decls: 4,
        vars: 2,
        consts: [[1, "d-flex", "align-items-center", "gap-1"], [3, "stateColor"]],
        template: function(i, a) {
            i & 1 && (h(0, "div", 0),
            k(1, "symbol-state", 1),
            h(2, "span"),
            C(3),
            f()()),
            i & 2 && (d(),
            b("stateColor", a.stateColor()),
            d(2),
            X(a.symbolName()))
        },
        dependencies: [Yo],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var mh = ( () => {
    let s = class s {
        constructor(e, i) {
            this.element = e,
            this.renderer = i
        }
        ngOnChanges() {
            let e = ro(this.marketUnit, this.currentValue, this.baseValue)
              , i = this.element.nativeElement
              , a = e === so.OTM ? "row-otm" : "row-itm"
              , u = this.isOdd ? "odd" : "even";
            i.classList.remove("row-otm-odd", "row-otm-even", "row-itm-odd", "row-itm-even"),
            i.classList.add(`${a}-${u}`)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(nt(si),nt(Aa))
    }
    ,
    s.\u0275dir = Qt({
        type: s,
        selectors: [["", "contractStateRow", ""]],
        inputs: {
            baseValue: "baseValue",
            currentValue: "currentValue",
            marketUnit: "marketUnit",
            isOdd: "isOdd"
        },
        features: [Pn]
    });
    let n = s;
    return n
}
)();
var ph = ( () => {
    let s = class s {
        constructor(e, i) {
            this.element = e,
            this.renderer = i
        }
        ngOnChanges() {
            let e = ro(this.marketUnit, this.currentValue, this.baseValue)
              , i = this.element.nativeElement;
            e === so.ITM ? (i.classList.remove("otm"),
            i.classList.add("itm"),
            i.innerText = so.ITM) : e === so.OTM ? (i.classList.remove("itm"),
            i.classList.add("otm"),
            i.innerText = so.OTM) : (i.classList.remove("otm", "itm"),
            i.classList.add("bg-body-secondary", "text-body-secondary"),
            i.innerText = so.ATM)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(nt(si),nt(Aa))
    }
    ,
    s.\u0275dir = Qt({
        type: s,
        selectors: [["", "contractState", ""]],
        inputs: {
            baseValue: "baseValue",
            currentValue: "currentValue",
            marketUnit: "marketUnit"
        },
        features: [Pn]
    });
    let n = s;
    return n
}
)();
var hh = ( () => {
    let s = class s {
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["option-chain-footer"]],
        decls: 1,
        vars: 0,
        template: function(i, a) {
            i & 1 && k(0, "option-chain-duedate-navigator")
        },
        dependencies: [ot, gn, Ni, Lt, el],
        styles: ["/*# sourceMappingURL=option-chain-footer.component-CGNOYVRS.css.map */"],
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
function U1(n, s) {
    if (n & 1 && (h(0, "span", 0),
    C(1),
    $(2, "number"),
    f()),
    n & 2) {
        let r = w();
        b("colorizeNumber", r.percent()),
        d(),
        K(" (", ae(2, 2, r.percent(), "1.0-2"), "%) ")
    }
}
var fh = ( () => {
    let s = class s {
        constructor() {
            this.value = ee(void 0),
            this.percent = ee(void 0)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["value-percent"]],
        inputs: {
            value: [1, "value"],
            percent: [1, "percent"]
        },
        decls: 4,
        vars: 4,
        consts: [[3, "colorizeNumber"]],
        template: function(i, a) {
            i & 1 && (h(0, "span"),
            C(1),
            $(2, "number"),
            f(),
            H(3, U1, 3, 5, "span", 0)),
            i & 2 && (d(),
            X(Se(2, 2, a.value())),
            d(2),
            W(a.percent() !== void 0 ? 3 : -1))
        },
        dependencies: [za, Wt],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var j1 = n => ({
    loading: n
})
  , z1 = (n, s, r) => ({
    "d-none": n,
    "optionSide-single": s,
    "hide-columns": r
})
  , hr = n => ({
    "d-none": n
})
  , W1 = (n, s) => ({
    "d-none": n,
    "border-start border-emphasis border-opacity-05": s
})
  , tl = n => ({
    "cell-pinned": n
});
function H1(n, s) {
    if (n & 1 && (h(0, "div", 6)(1, "div", 59),
    C(2, "\u062E\u0631\u06CC\u062F (Call)"),
    f(),
    h(3, "div", 59),
    C(4, " \u0641\u0631\u0648\u0634 (Put) "),
    f()()),
    n & 2) {
        let r = w();
        d(),
        b("ngClass", Fe(2, hr, r.OptionSide() === r.Side.Sell)),
        d(2),
        b("ngClass", Ln(4, W1, r.OptionSide() === r.Side.Buy, r.OptionSide() === r.Side.None))
    }
}
function G1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "svg-icon", 61, 1),
        z("mouseenter", function() {
            R(r);
            let i = Ct(1)
              , a = w().$implicit
              , u = w(2);
            return L(u.openPopover(i, a.tooltip.title, a.tooltip.description))
        }),
        f()
    }
    if (n & 2) {
        let r = w(3)
          , e = Ct(107);
        b("iconName", r.icons.QuestionBox)("ngClass", Fe(4, hr, r.OptionSide() === r.Side.None))("autoClose", !0)("ngbPopover", e)
    }
}
function q1(n, s) {
    if (n & 1 && (h(0, "div", 19),
    C(1),
    H(2, G1, 2, 6, "svg-icon", 60),
    f()),
    n & 2) {
        let r, e = s.$implicit, i = w(2);
        b("hidden", !(!((r = i.TableColumn()) == null || r[e.colId] == null) && r[e.colId].colVisibility)),
        d(),
        K(" ", e.colName, " "),
        d(),
        W(e.tooltip ? 2 : -1)
    }
}
function K1(n, s) {
    if (n & 1 && qe(0, q1, 3, 3, "div", 19, ct),
    n & 2) {
        let r = w();
        Ke(r.DefaultOptionColumn)
    }
}
function Q1(n, s) {
    if (n & 1 && (h(0, "div", 18),
    C(1),
    f()),
    n & 2) {
        let r, e = w();
        d(),
        K("\u0646\u0645\u0627\u062F (", (r = e.LeftTable()) == null ? null : r.length, ")")
    }
}
function Z1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "svg-icon", 63, 1),
        z("mouseenter", function() {
            R(r);
            let i = Ct(1)
              , a = w().$implicit
              , u = w();
            return L(u.openPopover(i, a.tooltip.title, a.tooltip.description))
        }),
        f()
    }
    if (n & 2) {
        let r = w(2)
          , e = Ct(107);
        b("ngClass", Fe(4, hr, r.OptionSide() === r.Side.None))("autoClose", !0)("ngbPopover", e)("iconName", r.icons.QuestionBox)
    }
}
function Y1(n, s) {
    if (n & 1 && (h(0, "div", 19),
    H(1, Z1, 2, 6, "svg-icon", 62),
    C(2),
    f()),
    n & 2) {
        let r, e = s.$implicit, i = w();
        b("hidden", !(!((r = i.TableColumn()) == null || r[e.colId] == null) && r[e.colId].colVisibility)),
        d(),
        W(e.tooltip ? 1 : -1),
        d(),
        K(" ", e.colName, " ")
    }
}
function J1(n, s) {
    if (n & 1 && (h(0, "div", 68)(1, "div"),
    k(2, "div", 69),
    f()(),
    h(3, "div", 70)(4, "div", 71),
    k(5, "value-percent", 72),
    f()(),
    h(6, "div", 68)(7, "div", 73),
    k(8, "value-percent", 72),
    f()(),
    h(9, "div", 68)(10, "div", 71),
    C(11),
    $(12, "number"),
    f()(),
    h(13, "div", 68)(14, "div", 71),
    C(15),
    $(16, "number"),
    f()(),
    h(17, "div", 68)(18, "div", 71),
    C(19),
    $(20, "number"),
    f()(),
    h(21, "div", 68)(22, "div", 71),
    C(23),
    $(24, "number"),
    f()(),
    h(25, "div", 68)(26, "div", 71),
    C(27),
    f()(),
    h(28, "div", 68)(29, "div", 71),
    C(30),
    f()(),
    h(31, "div", 70)(32, "div", 71),
    C(33),
    $(34, "largeNumber"),
    f()(),
    h(35, "div", 68)(36, "div", 71),
    C(37),
    $(38, "largeNumber"),
    f()(),
    h(39, "div", 68)(40, "div", 71),
    C(41),
    $(42, "number"),
    f()(),
    h(43, "div", 70)(44, "div", 74),
    C(45),
    $(46, "number"),
    f()(),
    h(47, "div", 70)(48, "div", 71),
    C(49),
    $(50, "number"),
    f()(),
    h(51, "div", 70)(52, "div", 71),
    C(53),
    $(54, "largeNumber"),
    f()(),
    h(55, "div", 68)(56, "div", 71),
    C(57),
    f()()),
    n & 2) {
        let r, e, i, a, u, p, g, y, O, j, Z, xe, _e, Ne, Re, $e, Xe, Ue, ft, se = w().$implicit, E = w();
        b("hidden", !(!((r = E.TableColumn()) == null || r[E.OptionColumnName.contractState] == null) && r[E.OptionColumnName.contractState].colVisibility)),
        d(2),
        b("baseValue", (e = E.BaseSymbolTrade()) == null ? null : e.price)("currentValue", se.strikePrice)("marketUnit", se.marketUnit),
        d(),
        b("hidden", !(!((i = E.TableColumn()) == null || i[E.OptionColumnName.lastTradedPrice] == null) && i[E.OptionColumnName.lastTradedPrice].colVisibility)),
        d(2),
        b("value", se.lastTradedPrice)("percent", se.lastTradedPricePercent),
        d(),
        b("hidden", !(!((a = E.TableColumn()) == null || a[E.OptionColumnName.closingPrice] == null) && a[E.OptionColumnName.closingPrice].colVisibility)),
        d(2),
        b("value", se.closingPrice)("percent", se.closingPricePercent),
        d(),
        b("hidden", !(!((u = E.TableColumn()) == null || u[E.OptionColumnName.blackScholesPrice] == null) && u[E.OptionColumnName.blackScholesPrice].colVisibility)),
        d(2),
        K(" ", (p = ae(12, 37, se == null ? null : se.blackScholesPrice, "1.0-0")) !== null && p !== void 0 ? p : "-", " "),
        d(2),
        b("hidden", !(!((g = E.TableColumn()) == null || g[E.OptionColumnName.impliedVolatility] == null) && g[E.OptionColumnName.impliedVolatility].colVisibility)),
        d(2),
        K(" ", (y = ae(16, 40, se == null ? null : se.impliedVolatility, "1.0-2")) !== null && y !== void 0 ? y : "-", " "),
        d(2),
        b("hidden", !(!((O = E.TableColumn()) == null || O[E.OptionColumnName.bestSellPrice] == null) && O[E.OptionColumnName.bestSellPrice].colVisibility)),
        d(2),
        X(ae(20, 43, se.bestSellPrice, "1.0-0")),
        d(2),
        b("hidden", !(!((j = E.TableColumn()) == null || j[E.OptionColumnName.bestBuyPrice] == null) && j[E.OptionColumnName.bestBuyPrice].colVisibility)),
        d(2),
        X(ae(24, 46, se.bestBuyPrice, "1.0-0")),
        d(2),
        b("hidden", !(!((Z = E.TableColumn()) == null || Z[E.OptionColumnName.bestSellQuantity] == null) && Z[E.OptionColumnName.bestSellQuantity].colVisibility)),
        d(2),
        X(se.bestSellQuantity),
        d(),
        b("hidden", !(!((xe = E.TableColumn()) == null || xe[E.OptionColumnName.bestBuyQuantity] == null) && xe[E.OptionColumnName.bestBuyQuantity].colVisibility)),
        d(2),
        X(se.bestBuyQuantity),
        d(),
        b("hidden", !(!((_e = E.TableColumn()) == null || _e[E.OptionColumnName.totalTradeValue] == null) && _e[E.OptionColumnName.totalTradeValue].colVisibility)),
        d(2),
        X(ae(34, 49, se.totalTradeValue, 1)),
        d(2),
        b("hidden", !(!((Ne = E.TableColumn()) == null || Ne[E.OptionColumnName.totalNumberOfSharesTraded] == null) && Ne[E.OptionColumnName.totalNumberOfSharesTraded].colVisibility)),
        d(2),
        K(" ", ae(38, 52, se.totalNumberOfSharesTraded, 1), " "),
        d(2),
        b("hidden", !(!((Re = E.TableColumn()) == null || Re[E.OptionColumnName.breakEvenPoint] == null) && Re[E.OptionColumnName.breakEvenPoint].colVisibility)),
        d(2),
        X(ae(42, 55, se.breakEvenPoint, "1.0-0")),
        d(2),
        b("hidden", !(!(($e = E.TableColumn()) == null || $e[E.OptionColumnName.blackScholesPercent] == null) && $e[E.OptionColumnName.blackScholesPercent].colVisibility)),
        d(),
        b("colorizeNumber", se.blackScholesPercent),
        d(),
        K(" ", ae(46, 58, se.blackScholesPercent, "1.0-2"), "% "),
        d(2),
        b("hidden", !(!((Xe = E.TableColumn()) == null || Xe[E.OptionColumnName.delta] == null) && Xe[E.OptionColumnName.delta].colVisibility)),
        d(2),
        X(ae(50, 61, se.delta, "1.0-2")),
        d(2),
        b("hidden", !(!((Ue = E.TableColumn()) == null || Ue[E.OptionColumnName.notionalValue] == null) && Ue[E.OptionColumnName.notionalValue].colVisibility)),
        d(2),
        X(ae(54, 64, se.notionalValue, 1)),
        d(2),
        b("hidden", !(!((ft = E.TableColumn()) == null || ft[E.OptionColumnName.shareDueDateDistance] == null) && ft[E.OptionColumnName.shareDueDateDistance].colVisibility)),
        d(2),
        X(se.shareDueDateDistance)
    }
}
function X1(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "a", 64, 2),
        z("contextmenu", function() {
            let i = R(r).$implicit
              , a = w();
            return L(a.selectedSymbolByIsin(i.symbolIsin))
        })("mouseover", function() {
            let i = R(r).$index
              , a = Ct(1)
              , u = w();
            return L(u.onMouseOver("top-table", i, a))
        })("mouseleave", function() {
            let i = R(r).$index
              , a = w();
            return L(a.onMouseleave("top-table", i))
        })("click", function() {
            let i = R(r)
              , a = i.$implicit
              , u = i.$index
              , p = Ct(1)
              , g = w();
            return L(g.onCellClicked(a.symbolIsin, "top-table", u, p))
        }),
        h(2, "div", 65)(3, "div", 66),
        k(4, "app-symbol", 67),
        f()(),
        H(5, J1, 58, 67),
        f()
    }
    if (n & 2) {
        let r, e = s.$implicit, i = s.$index, a = s.$index, u = w();
        vi(u.getRightTableStyle()),
        b("id", i)("baseValue", (r = u.BaseSymbolTrade()) == null ? null : r.price)("currentValue", e.strikePrice)("marketUnit", e.marketUnit)("isOdd", a % 2 !== 0),
        d(2),
        b("ngClass", Fe(11, tl, u.scrollChanged())),
        d(2),
        b("symbolName", e.symbolName)("stateColor", e.stateColor),
        d(),
        W(u.OptionSide() === u.Side.None ? 5 : -1)
    }
}
function e2(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 75),
        z("contextmenu", function() {
            R(r);
            let i = w();
            return L(i.updateSelectedRowSymbol(void 0))
        })("mouseover", function() {
            let i = R(r).$index
              , a = w();
            return L(a.onMouseOver("top-table", i))
        })("mouseleave", function() {
            let i = R(r).$index
              , a = w();
            return L(a.onMouseleave("top-table", i))
        }),
        h(1, "div", 76),
        C(2),
        $(3, "number"),
        f()()
    }
    if (n & 2) {
        let r = s.$implicit
          , e = s.$index;
        b("id", e),
        d(2),
        X(Se(3, 2, r))
    }
}
function t2(n, s) {
    if (n & 1 && (h(0, "div", 77)(1, "div", 66),
    k(2, "app-symbol", 67),
    f()()),
    n & 2) {
        let r = w().$implicit
          , e = w();
        b("ngClass", Fe(3, tl, e.scrollChanged())),
        d(2),
        b("symbolName", r.symbolName)("stateColor", r.stateColor)
    }
}
function i2(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "a", 64, 2),
        z("contextmenu", function() {
            let i = R(r).$implicit
              , a = w();
            return L(a.selectedSymbolByIsin(i.symbolIsin))
        })("mouseover", function() {
            let i = R(r).$index
              , a = Ct(1)
              , u = w();
            return L(u.onMouseOver("top-table", i, a))
        })("mouseleave", function() {
            let i = R(r).$index
              , a = w();
            return L(a.onMouseleave("top-table", i))
        })("click", function() {
            let i = R(r)
              , a = i.$implicit
              , u = i.$index
              , p = Ct(1)
              , g = w();
            return L(g.onCellClicked(a.symbolIsin, "top-table", u, p))
        }),
        H(2, t2, 3, 5, "div", 77),
        h(3, "div", 68)(4, "div"),
        k(5, "div", 69),
        f()(),
        h(6, "div", 70)(7, "div", 71),
        k(8, "value-percent", 72),
        f()(),
        h(9, "div", 68)(10, "div", 73),
        k(11, "value-percent", 72),
        f()(),
        h(12, "div", 68)(13, "div", 71),
        C(14),
        $(15, "number"),
        f()(),
        h(16, "div", 68)(17, "div", 71),
        C(18),
        $(19, "number"),
        f()(),
        h(20, "div", 68)(21, "div", 71),
        C(22),
        $(23, "number"),
        f()(),
        h(24, "div", 68)(25, "div", 71),
        C(26),
        $(27, "number"),
        f()(),
        h(28, "div", 68)(29, "div", 71),
        C(30),
        f()(),
        h(31, "div", 68)(32, "div", 71),
        C(33),
        f()(),
        h(34, "div", 70)(35, "div", 71),
        C(36),
        $(37, "largeNumber"),
        f()(),
        h(38, "div", 68)(39, "div", 71),
        C(40),
        $(41, "largeNumber"),
        f()(),
        h(42, "div", 68)(43, "div", 71),
        C(44),
        $(45, "number"),
        f()(),
        h(46, "div", 70)(47, "div", 74),
        C(48),
        $(49, "number"),
        f()(),
        h(50, "div", 70)(51, "div", 71),
        C(52),
        $(53, "number"),
        f()(),
        h(54, "div", 70)(55, "div", 71),
        C(56),
        $(57, "largeNumber"),
        f()(),
        h(58, "div", 78)(59, "div", 71),
        C(60),
        f()()()
    }
    if (n & 2) {
        let r, e, i, a, u, p, g, y, O, j, Z, xe, _e, Ne, Re, $e, Xe, Ue, ft, se, E = s.$implicit, go = s.$index, ws = s.$index, V = w();
        vi(V.getLeftTableStyle()),
        b("id", go)("baseValue", (r = V.BaseSymbolTrade()) == null ? null : r.price)("currentValue", E.strikePrice)("marketUnit", E.marketUnit)("isOdd", ws % 2 !== 0),
        d(2),
        W(V.OptionSide() === V.Side.None ? 2 : -1),
        d(),
        b("hidden", !(!((e = V.TableColumn()) == null || e[V.OptionColumnName.contractState] == null) && e[V.OptionColumnName.contractState].colVisibility)),
        d(2),
        b("baseValue", (i = V.BaseSymbolTrade()) == null ? null : i.price)("currentValue", E.strikePrice)("marketUnit", E.marketUnit),
        d(),
        b("hidden", !(!((a = V.TableColumn()) == null || a[V.OptionColumnName.lastTradedPrice] == null) && a[V.OptionColumnName.lastTradedPrice].colVisibility)),
        d(2),
        b("value", E.lastTradedPrice)("percent", E.lastTradedPricePercent),
        d(),
        b("hidden", !(!((u = V.TableColumn()) == null || u[V.OptionColumnName.closingPrice] == null) && u[V.OptionColumnName.closingPrice].colVisibility)),
        d(2),
        b("value", E.closingPrice)("percent", E.closingPricePercent),
        d(),
        b("hidden", !(!((p = V.TableColumn()) == null || p[V.OptionColumnName.blackScholesPrice] == null) && p[V.OptionColumnName.blackScholesPrice].colVisibility)),
        d(2),
        K(" ", (g = ae(15, 45, E == null ? null : E.blackScholesPrice, "1.0-0")) !== null && g !== void 0 ? g : "-", " "),
        d(2),
        b("hidden", !(!((y = V.TableColumn()) == null || y[V.OptionColumnName.impliedVolatility] == null) && y[V.OptionColumnName.impliedVolatility].colVisibility)),
        d(2),
        K(" ", (O = ae(19, 48, E == null ? null : E.impliedVolatility, "1.0-2")) !== null && O !== void 0 ? O : "-", " "),
        d(2),
        b("hidden", !(!((j = V.TableColumn()) == null || j[V.OptionColumnName.bestSellPrice] == null) && j[V.OptionColumnName.bestSellPrice].colVisibility)),
        d(2),
        X(ae(23, 51, E.bestSellPrice, "1.0-0")),
        d(2),
        b("hidden", !(!((Z = V.TableColumn()) == null || Z[V.OptionColumnName.bestBuyPrice] == null) && Z[V.OptionColumnName.bestBuyPrice].colVisibility)),
        d(2),
        X(ae(27, 54, E.bestBuyPrice, "1.0-0")),
        d(2),
        b("hidden", !(!((xe = V.TableColumn()) == null || xe[V.OptionColumnName.bestSellQuantity] == null) && xe[V.OptionColumnName.bestSellQuantity].colVisibility)),
        d(2),
        X(E.bestSellQuantity),
        d(),
        b("hidden", !(!((_e = V.TableColumn()) == null || _e[V.OptionColumnName.bestBuyQuantity] == null) && _e[V.OptionColumnName.bestBuyQuantity].colVisibility)),
        d(2),
        X(E.bestBuyQuantity),
        d(),
        b("hidden", !(!((Ne = V.TableColumn()) == null || Ne[V.OptionColumnName.totalTradeValue] == null) && Ne[V.OptionColumnName.totalTradeValue].colVisibility)),
        d(2),
        X(ae(37, 57, E.totalTradeValue, 1)),
        d(2),
        b("hidden", !(!((Re = V.TableColumn()) == null || Re[V.OptionColumnName.totalNumberOfSharesTraded] == null) && Re[V.OptionColumnName.totalNumberOfSharesTraded].colVisibility)),
        d(2),
        K(" ", ae(41, 60, E.totalNumberOfSharesTraded, 1), " "),
        d(2),
        b("hidden", !(!(($e = V.TableColumn()) == null || $e[V.OptionColumnName.breakEvenPoint] == null) && $e[V.OptionColumnName.breakEvenPoint].colVisibility)),
        d(2),
        X(ae(45, 63, E.breakEvenPoint, "1.0-0")),
        d(2),
        b("hidden", !(!((Xe = V.TableColumn()) == null || Xe[V.OptionColumnName.blackScholesPercent] == null) && Xe[V.OptionColumnName.blackScholesPercent].colVisibility)),
        d(),
        b("colorizeNumber", E.blackScholesPercent),
        d(),
        K(" ", ae(49, 66, E.blackScholesPercent, "1.0-2"), "% "),
        d(2),
        b("hidden", !(!((Ue = V.TableColumn()) == null || Ue[V.OptionColumnName.delta] == null) && Ue[V.OptionColumnName.delta].colVisibility)),
        d(2),
        X(ae(53, 69, E.delta, "1.0-2")),
        d(2),
        b("hidden", !(!((ft = V.TableColumn()) == null || ft[V.OptionColumnName.notionalValue] == null) && ft[V.OptionColumnName.notionalValue].colVisibility)),
        d(2),
        X(ae(57, 72, E.notionalValue, 1)),
        d(2),
        b("hidden", !(!((se = V.TableColumn()) == null || se[V.OptionColumnName.shareDueDateDistance] == null) && se[V.OptionColumnName.shareDueDateDistance].colVisibility)),
        d(2),
        X(E.shareDueDateDistance)
    }
}
function n2(n, s) {
    if (n & 1 && (h(0, "div", 68)(1, "div"),
    k(2, "div", 69),
    f()(),
    h(3, "div", 70)(4, "div", 71),
    k(5, "value-percent", 72),
    f()(),
    h(6, "div", 68)(7, "div", 73),
    k(8, "value-percent", 72),
    f()(),
    h(9, "div", 68)(10, "div", 71),
    C(11),
    $(12, "number"),
    f()(),
    h(13, "div", 68)(14, "div", 71),
    C(15),
    $(16, "number"),
    f()(),
    h(17, "div", 68)(18, "div", 71),
    C(19),
    $(20, "number"),
    f()(),
    h(21, "div", 68)(22, "div", 71),
    C(23),
    $(24, "number"),
    f()(),
    h(25, "div", 68)(26, "div", 71),
    C(27),
    f()(),
    h(28, "div", 68)(29, "div", 71),
    C(30),
    f()(),
    h(31, "div", 70)(32, "div", 71),
    C(33),
    $(34, "largeNumber"),
    f()(),
    h(35, "div", 68)(36, "div", 71),
    C(37),
    $(38, "largeNumber"),
    f()(),
    h(39, "div", 68)(40, "div", 71),
    C(41),
    $(42, "number"),
    f()(),
    h(43, "div", 70)(44, "div", 74),
    C(45),
    $(46, "number"),
    f()(),
    h(47, "div", 70)(48, "div", 71),
    C(49),
    $(50, "number"),
    f()(),
    h(51, "div", 70)(52, "div", 71),
    C(53),
    $(54, "largeNumber"),
    f()(),
    h(55, "div", 68)(56, "div", 71),
    C(57),
    f()()),
    n & 2) {
        let r, e, i, a, u, p, g, y, O, j, Z, xe, _e, Ne, Re, $e, Xe, Ue, ft, se = w().$implicit, E = w();
        b("hidden", !(!((r = E.TableColumn()) == null || r[E.OptionColumnName.contractState] == null) && r[E.OptionColumnName.contractState].colVisibility)),
        d(2),
        b("baseValue", (e = E.BaseSymbolTrade()) == null ? null : e.price)("currentValue", se.strikePrice)("marketUnit", se.marketUnit),
        d(),
        b("hidden", !(!((i = E.TableColumn()) == null || i[E.OptionColumnName.lastTradedPrice] == null) && i[E.OptionColumnName.lastTradedPrice].colVisibility)),
        d(2),
        b("value", se.lastTradedPrice)("percent", se.lastTradedPricePercent),
        d(),
        b("hidden", !(!((a = E.TableColumn()) == null || a[E.OptionColumnName.closingPrice] == null) && a[E.OptionColumnName.closingPrice].colVisibility)),
        d(2),
        b("value", se.closingPrice)("percent", se.closingPricePercent),
        d(),
        b("hidden", !(!((u = E.TableColumn()) == null || u[E.OptionColumnName.blackScholesPrice] == null) && u[E.OptionColumnName.blackScholesPrice].colVisibility)),
        d(2),
        K(" ", (p = ae(12, 37, se == null ? null : se.blackScholesPrice, "1.0-0")) !== null && p !== void 0 ? p : "-", " "),
        d(2),
        b("hidden", !(!((g = E.TableColumn()) == null || g[E.OptionColumnName.impliedVolatility] == null) && g[E.OptionColumnName.impliedVolatility].colVisibility)),
        d(2),
        K(" ", (y = ae(16, 40, se == null ? null : se.impliedVolatility, "1.0-2")) !== null && y !== void 0 ? y : "-", " "),
        d(2),
        b("hidden", !(!((O = E.TableColumn()) == null || O[E.OptionColumnName.bestSellPrice] == null) && O[E.OptionColumnName.bestSellPrice].colVisibility)),
        d(2),
        X(ae(20, 43, se.bestSellPrice, "1.0-0")),
        d(2),
        b("hidden", !(!((j = E.TableColumn()) == null || j[E.OptionColumnName.bestBuyPrice] == null) && j[E.OptionColumnName.bestBuyPrice].colVisibility)),
        d(2),
        X(ae(24, 46, se.bestBuyPrice, "1.0-0")),
        d(2),
        b("hidden", !(!((Z = E.TableColumn()) == null || Z[E.OptionColumnName.bestSellQuantity] == null) && Z[E.OptionColumnName.bestSellQuantity].colVisibility)),
        d(2),
        X(se.bestSellQuantity),
        d(),
        b("hidden", !(!((xe = E.TableColumn()) == null || xe[E.OptionColumnName.bestBuyQuantity] == null) && xe[E.OptionColumnName.bestBuyQuantity].colVisibility)),
        d(2),
        X(se.bestBuyQuantity),
        d(),
        b("hidden", !(!((_e = E.TableColumn()) == null || _e[E.OptionColumnName.totalTradeValue] == null) && _e[E.OptionColumnName.totalTradeValue].colVisibility)),
        d(2),
        X(ae(34, 49, se.totalTradeValue, 1)),
        d(2),
        b("hidden", !(!((Ne = E.TableColumn()) == null || Ne[E.OptionColumnName.totalNumberOfSharesTraded] == null) && Ne[E.OptionColumnName.totalNumberOfSharesTraded].colVisibility)),
        d(2),
        K(" ", ae(38, 52, se.totalNumberOfSharesTraded, 1), " "),
        d(2),
        b("hidden", !(!((Re = E.TableColumn()) == null || Re[E.OptionColumnName.breakEvenPoint] == null) && Re[E.OptionColumnName.breakEvenPoint].colVisibility)),
        d(2),
        X(ae(42, 55, se.breakEvenPoint, "1.0-0")),
        d(2),
        b("hidden", !(!(($e = E.TableColumn()) == null || $e[E.OptionColumnName.blackScholesPercent] == null) && $e[E.OptionColumnName.blackScholesPercent].colVisibility)),
        d(),
        b("colorizeNumber", se.blackScholesPercent),
        d(),
        K(" ", ae(46, 58, se.blackScholesPercent, "1.0-2"), "% "),
        d(2),
        b("hidden", !(!((Xe = E.TableColumn()) == null || Xe[E.OptionColumnName.delta] == null) && Xe[E.OptionColumnName.delta].colVisibility)),
        d(2),
        X(ae(50, 61, se.delta, "1.0-2")),
        d(2),
        b("hidden", !(!((Ue = E.TableColumn()) == null || Ue[E.OptionColumnName.notionalValue] == null) && Ue[E.OptionColumnName.notionalValue].colVisibility)),
        d(2),
        X(ae(54, 64, se.notionalValue, 1)),
        d(2),
        b("hidden", !(!((ft = E.TableColumn()) == null || ft[E.OptionColumnName.shareDueDateDistance] == null) && ft[E.OptionColumnName.shareDueDateDistance].colVisibility)),
        d(2),
        X(se.shareDueDateDistance)
    }
}
function o2(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "a", 79, 2),
        z("contextmenu", function() {
            let i = R(r).$implicit
              , a = w();
            return L(a.selectedSymbolByIsin(i.symbolIsin))
        })("mouseover", function() {
            let i = R(r).$index
              , a = Ct(1)
              , u = w();
            return L(u.onMouseOver("bottom-table", i, a))
        })("mouseleave", function() {
            let i = R(r).$index
              , a = w();
            return L(a.onMouseleave("bottom-table", i))
        })("click", function() {
            let i = R(r)
              , a = i.$implicit
              , u = i.$index
              , p = Ct(1)
              , g = w();
            return L(g.onCellClicked(a.symbolIsin, "bottom-table", u, p))
        }),
        h(2, "div", 65)(3, "div", 66),
        k(4, "app-symbol", 67),
        f()(),
        H(5, n2, 58, 67),
        f()
    }
    if (n & 2) {
        let r, e = s.$implicit, i = s.$index, a = s.$index, u = w();
        vi(u.getRightTableStyle()),
        b("id", i)("baseValue", (r = u.BaseSymbolTrade()) == null ? null : r.price)("currentValue", e.strikePrice)("marketUnit", e.marketUnit)("isOdd", a % 2 !== 0),
        d(2),
        b("ngClass", Fe(11, tl, u.scrollChanged())),
        d(2),
        b("symbolName", e.symbolName)("stateColor", e.stateColor),
        d(),
        W(u.OptionSide() === u.Side.None ? 5 : -1)
    }
}
function s2(n, s) {
    if (n & 1 && (h(0, "div", 46),
    C(1),
    f()),
    n & 2) {
        let r, e = s.$implicit, i = w(2);
        b("hidden", !(!((r = i.TableColumn()) == null || r[e.colId] == null) && r[e.colId].colVisibility)),
        d(),
        K(" ", e.colName, " ")
    }
}
function r2(n, s) {
    if (n & 1 && qe(0, s2, 2, 2, "div", 46, ct),
    n & 2) {
        let r = w();
        Ke(r.DefaultOptionColumn)
    }
}
function a2(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 80),
        z("contextmenu", function() {
            R(r);
            let i = w();
            return L(i.updateSelectedRowSymbol(void 0))
        })("mouseover", function() {
            let i = R(r).$index
              , a = w();
            return L(a.onMouseOver("bottom-table", i))
        })("mouseleave", function() {
            let i = R(r).$index
              , a = w();
            return L(a.onMouseleave("bottom-table", i))
        }),
        h(1, "div", 76),
        C(2),
        $(3, "number"),
        f()()
    }
    if (n & 2) {
        let r = s.$implicit
          , e = s.$index;
        b("id", e),
        d(2),
        X(Se(3, 2, r))
    }
}
function l2(n, s) {
    if (n & 1 && (h(0, "div", 77)(1, "div", 66),
    k(2, "app-symbol", 67),
    f()()),
    n & 2) {
        let r = w().$implicit
          , e = w();
        b("ngClass", Fe(3, tl, e.scrollChanged())),
        d(2),
        b("symbolName", r.symbolName)("stateColor", r.stateColor)
    }
}
function c2(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "a", 79, 2),
        z("contextmenu", function() {
            let i = R(r).$implicit
              , a = w();
            return L(a.selectedSymbolByIsin(i.symbolIsin))
        })("mouseover", function() {
            let i = R(r).$index
              , a = Ct(1)
              , u = w();
            return L(u.onMouseOver("bottom-table", i, a))
        })("mouseleave", function() {
            let i = R(r).$index
              , a = w();
            return L(a.onMouseleave("bottom-table", i))
        })("click", function() {
            let i = R(r)
              , a = i.$implicit
              , u = i.$index
              , p = Ct(1)
              , g = w();
            return L(g.onCellClicked(a.symbolIsin, "bottom-table", u, p))
        }),
        H(2, l2, 3, 5, "div", 77),
        h(3, "div", 68)(4, "div"),
        k(5, "div", 69),
        f()(),
        h(6, "div", 70)(7, "div", 71),
        k(8, "value-percent", 72),
        f()(),
        h(9, "div", 68)(10, "div", 73),
        k(11, "value-percent", 72),
        f()(),
        h(12, "div", 68)(13, "div", 71),
        C(14),
        $(15, "number"),
        f()(),
        h(16, "div", 68)(17, "div", 71),
        C(18),
        $(19, "number"),
        f()(),
        h(20, "div", 68)(21, "div", 71),
        C(22),
        $(23, "number"),
        f()(),
        h(24, "div", 68)(25, "div", 71),
        C(26),
        $(27, "number"),
        f()(),
        h(28, "div", 68)(29, "div", 71),
        C(30),
        f()(),
        h(31, "div", 68)(32, "div", 71),
        C(33),
        f()(),
        h(34, "div", 70)(35, "div", 71),
        C(36),
        $(37, "largeNumber"),
        f()(),
        h(38, "div", 68)(39, "div", 71),
        C(40),
        $(41, "largeNumber"),
        f()(),
        h(42, "div", 68)(43, "div", 71),
        C(44),
        $(45, "number"),
        f()(),
        h(46, "div", 70)(47, "div", 74),
        C(48),
        $(49, "number"),
        f()(),
        h(50, "div", 70)(51, "div", 71),
        C(52),
        $(53, "number"),
        f()(),
        h(54, "div", 70)(55, "div", 71),
        C(56),
        $(57, "largeNumber"),
        f()(),
        h(58, "div", 68)(59, "div", 71),
        C(60),
        f()()()
    }
    if (n & 2) {
        let r, e, i, a, u, p, g, y, O, j, Z, xe, _e, Ne, Re, $e, Xe, Ue, ft, se, E = s.$implicit, go = s.$index, ws = s.$index, V = w();
        vi(V.getLeftTableStyle()),
        b("id", go)("baseValue", (r = V.BaseSymbolTrade()) == null ? null : r.price)("currentValue", E.strikePrice)("marketUnit", E.marketUnit)("isOdd", ws % 2 !== 0),
        d(2),
        W(V.OptionSide() === V.Side.None ? 2 : -1),
        d(),
        b("hidden", !(!((e = V.TableColumn()) == null || e[V.OptionColumnName.contractState] == null) && e[V.OptionColumnName.contractState].colVisibility)),
        d(2),
        b("baseValue", (i = V.BaseSymbolTrade()) == null ? null : i.price)("currentValue", E.strikePrice)("marketUnit", E.marketUnit),
        d(),
        b("hidden", !(!((a = V.TableColumn()) == null || a[V.OptionColumnName.lastTradedPrice] == null) && a[V.OptionColumnName.lastTradedPrice].colVisibility)),
        d(2),
        b("value", E.lastTradedPrice)("percent", E.lastTradedPricePercent),
        d(),
        b("hidden", !(!((u = V.TableColumn()) == null || u[V.OptionColumnName.closingPrice] == null) && u[V.OptionColumnName.closingPrice].colVisibility)),
        d(2),
        b("value", E.closingPrice)("percent", E.closingPricePercent),
        d(),
        b("hidden", !(!((p = V.TableColumn()) == null || p[V.OptionColumnName.blackScholesPrice] == null) && p[V.OptionColumnName.blackScholesPrice].colVisibility)),
        d(2),
        K(" ", (g = ae(15, 45, E == null ? null : E.blackScholesPrice, "1.0-0")) !== null && g !== void 0 ? g : "-", " "),
        d(2),
        b("hidden", !(!((y = V.TableColumn()) == null || y[V.OptionColumnName.impliedVolatility] == null) && y[V.OptionColumnName.impliedVolatility].colVisibility)),
        d(2),
        K(" ", (O = ae(19, 48, E == null ? null : E.impliedVolatility, "1.0-2")) !== null && O !== void 0 ? O : "-", " "),
        d(2),
        b("hidden", !(!((j = V.TableColumn()) == null || j[V.OptionColumnName.bestSellPrice] == null) && j[V.OptionColumnName.bestSellPrice].colVisibility)),
        d(2),
        X(ae(23, 51, E.bestSellPrice, "1.0-0")),
        d(2),
        b("hidden", !(!((Z = V.TableColumn()) == null || Z[V.OptionColumnName.bestBuyPrice] == null) && Z[V.OptionColumnName.bestBuyPrice].colVisibility)),
        d(2),
        X(ae(27, 54, E.bestBuyPrice, "1.0-0")),
        d(2),
        b("hidden", !(!((xe = V.TableColumn()) == null || xe[V.OptionColumnName.bestSellQuantity] == null) && xe[V.OptionColumnName.bestSellQuantity].colVisibility)),
        d(2),
        X(E.bestSellQuantity),
        d(),
        b("hidden", !(!((_e = V.TableColumn()) == null || _e[V.OptionColumnName.bestBuyQuantity] == null) && _e[V.OptionColumnName.bestBuyQuantity].colVisibility)),
        d(2),
        X(E.bestBuyQuantity),
        d(),
        b("hidden", !(!((Ne = V.TableColumn()) == null || Ne[V.OptionColumnName.totalTradeValue] == null) && Ne[V.OptionColumnName.totalTradeValue].colVisibility)),
        d(2),
        X(ae(37, 57, E.totalTradeValue, 1)),
        d(2),
        b("hidden", !(!((Re = V.TableColumn()) == null || Re[V.OptionColumnName.totalNumberOfSharesTraded] == null) && Re[V.OptionColumnName.totalNumberOfSharesTraded].colVisibility)),
        d(2),
        K(" ", ae(41, 60, E.totalNumberOfSharesTraded, 1), " "),
        d(2),
        b("hidden", !(!(($e = V.TableColumn()) == null || $e[V.OptionColumnName.breakEvenPoint] == null) && $e[V.OptionColumnName.breakEvenPoint].colVisibility)),
        d(2),
        X(ae(45, 63, E.breakEvenPoint, "1.0-0")),
        d(2),
        b("hidden", !(!((Xe = V.TableColumn()) == null || Xe[V.OptionColumnName.blackScholesPercent] == null) && Xe[V.OptionColumnName.blackScholesPercent].colVisibility)),
        d(),
        b("colorizeNumber", E.blackScholesPercent),
        d(),
        K(" ", ae(49, 66, E.blackScholesPercent, "1.0-2"), "% "),
        d(2),
        b("hidden", !(!((Ue = V.TableColumn()) == null || Ue[V.OptionColumnName.delta] == null) && Ue[V.OptionColumnName.delta].colVisibility)),
        d(2),
        X(ae(53, 69, E.delta, "1.0-2")),
        d(2),
        b("hidden", !(!((ft = V.TableColumn()) == null || ft[V.OptionColumnName.notionalValue] == null) && ft[V.OptionColumnName.notionalValue].colVisibility)),
        d(2),
        X(ae(57, 72, E.notionalValue, 1)),
        d(2),
        b("hidden", !(!((se = V.TableColumn()) == null || se[V.OptionColumnName.shareDueDateDistance] == null) && se[V.OptionColumnName.shareDueDateDistance].colVisibility)),
        d(2),
        X(E.shareDueDateDistance)
    }
}
function u2(n, s) {
    n & 1 && (h(0, "div", 42),
    C(1, "\u0646\u0645\u0627\u062F"),
    f())
}
function d2(n, s) {
    if (n & 1 && (h(0, "div", 46),
    C(1),
    f()),
    n & 2) {
        let r, e = s.$implicit, i = w();
        b("hidden", !(!((r = i.TableColumn()) == null || r[e.colId] == null) && r[e.colId].colVisibility)),
        d(),
        K(" ", e.colName, " ")
    }
}
function m2(n, s) {
    n & 1 && k(0, "option-chain-footer")
}
function p2(n, s) {
    if (n & 1 && (h(0, "div", 58)(1, "div", 81),
    k(2, "svg-icon", 82),
    f(),
    h(3, "p", 83),
    C(4, "\u0628\u0631\u0627\u06CC \u0639\u0645\u0644\u06A9\u0631\u062F \u0628\u0647\u062A\u0631\u060C \u06AF\u0648\u0634\u06CC \u062E\u0648\u062F \u0631\u0627 \u0628\u0686\u0631\u062E\u0627\u0646\u06CC\u062F."),
    f()()),
    n & 2) {
        let r = w();
        d(2),
        b("iconName", r.icons.PhoneRotate)
    }
}
function h2(n, s) {
    if (n & 1 && (h(0, "div", 84)(1, "div", 85),
    C(2),
    f(),
    h(3, "div", 86),
    C(4),
    f()()),
    n & 2) {
        let r = s.tooltipTitle
          , e = s.tooltipDescription;
        d(2),
        X(r),
        d(2),
        K(" ", e, " ")
    }
}
var UE = ( () => {
    let s = class s {
        getRightTableStyle() {
            return "--bs-columns:" + (this.OptionSide() === Ee.None ? this.VisibleColumnLength() + 1 : 1)
        }
        getLeftTableStyle() {
            return "--bs-columns:" + (this.OptionSide() === Ee.None ? this.VisibleColumnLength() + 1 : this.VisibleColumnLength())
        }
        onRightClick(e) {
            e.preventDefault()
        }
        subscribeToMarketDataLs() {
            let e = i => {
                let a = je.OptionMarketViewSchema
                  , u = {
                    symbolIsin: i.inst,
                    stateCode: i.val[a.stateCode],
                    lastTradedPrice: +(i.val[a.lastTradedPrice] ?? 0),
                    closingPrice: +(i.val[a.closingPrice] ?? 0),
                    lastTradedPricePercent: +(i.val[a.lastTradedPriceVarPercent] ?? 0),
                    feeOfPreviousDaysClosingPrice: +(i.val[a.feeOfPreviousDaysClosingPrice] ?? 0),
                    totalNumberOfSharesTraded: +(i.val[a.totalNumberOfSharesTraded] ?? 0),
                    bestBuyPrice: +(i.val[a.bestBuyLimitPrice] ?? 0),
                    bestSellPrice: +(i.val[a.bestSellLimitPrice] ?? 0),
                    bestBuyQuantity: +(i.val[a.bestBuyLimitVolume] ?? 0),
                    bestSellQuantity: +(i.val[a.bestSellLimitVolume] ?? 0),
                    totalTradeValue: +(i.val[a.totalTradeValue] ?? 0)
                };
                u.stateColor = Fi(u?.stateCode),
                u.closingPricePercent = tr(u?.closingPrice, u?.feeOfPreviousDaysClosingPrice, u?.totalNumberOfSharesTraded),
                this.UpdateMarketData(u)
            }
            ;
            return this.FilteredSymbolIsin$.pipe(pe(i => !!i?.length), Q(i => this.lsService.subscribeToLsIfNotAvailable(ze.OptionMarketView, i, e)))
        }
        subscribeToContractDataLs() {
            let e = i => {
                let a = je.OptionContractSchema
                  , u = {
                    symbolIsin: i.inst,
                    openPositions: i.val[a.openPositions]
                };
                this.UpdateMarketData(u)
            }
            ;
            return this.FilteredSymbolIsin$.pipe(pe(i => !!i?.length), Q(i => this.lsService.subscribeToLsIfNotAvailable(ze.OptionContract, i, e)))
        }
        getMarketDataWhenLsIsNotConnected() {
            let e = () => this.FilteredSymbolIsin$.pipe(pe(i => !!i?.length), fe(i => this.marketDataService.GetMarketData(6, i)), D(i => i.map(a => {
                let y = a
                  , {symbolIsin: u, priceVar: p} = y
                  , g = Ia(y, ["symbolIsin", "priceVar"]);
                return J(B({}, g), {
                    symbolIsin: u,
                    lastTradedPricePercent: p,
                    stateColor: Fi(g?.stateCode),
                    totalNumberOfSharesTraded: g?.totalNumberOfSharesTraded,
                    closingPricePercent: tr(g?.closingPrice, g?.feeOfPreviousDaysClosingPrice, g?.totalNumberOfSharesTraded)
                })
            }
            )), Q(i => i.forEach(a => this.UpdateMarketData(a))));
            return this.lsService.callFunctionWhenLsIsNotConnected(e)
        }
        constructor() {
            this.isMobile = ee.required(),
            this.conditionItemClick = Ge(),
            this.noteItemClick = Ge(),
            this.marketMapItemClick = Ge(),
            this.icons = Ce,
            this.selectedRowSymbol = Ie(void 0),
            this.updateSelectedRowSymbol = e => this.selectedRowSymbol.update( () => B({}, e)),
            this.selectedSymbolByIsin = e => this.updateSelectedRowSymbol(this.symbolService.symbolByIsin[e]),
            this.selectedSymbolByCompanyIsin = () => this.updateSelectedRowSymbol(this.symbolService.symbolByCompanyIsin[this.optionChainService.filters().baseSymbolIsin]),
            this.router = I(oo),
            this.lsService = I(Bt),
            this.symbolService = I(pt),
            this.marketDataService = I(Li),
            this.activeSymbolService = I(lo),
            this.sidePanelServiceService = I(os),
            this.optionChainService = I($i),
            this.settingFacadeService = I(co),
            this.Setting = q(this.settingFacadeService.getSettings$()),
            this.Side = Ee,
            this.loading = Ie(!0),
            this.BaseSymbolTrade = Ie(void 0),
            this.updateBaseSymbol = e => this.BaseSymbolTrade.update( () => B({}, e)),
            this.BaseSymbolTrade$ = st(this.BaseSymbolTrade).pipe(pe(Boolean)),
            this.OptionSide$ = this.optionChainService.filters$.pipe(D(e => +e.optionSide), Q(e => {
                e !== Ee.Buy && e !== Ee.Sell && this.leftScrollElementsValue?.set(0)
            }
            )),
            this.OptionSide = q(this.OptionSide$),
            this.BaseSymbolName = q(this.optionChainService.selectedBaseSymbol$),
            this.FilteredSymbols$ = this.optionChainService.filters$.pipe(pe( ({date: e}) => !!e), Q( () => this.removeHighlightFromSelectedRow?.()), fe( ({baseSymbolIsin: e, date: i, optionUnits: a}) => {
                let u = this.symbolService.symbolByIsin[e];
                return this.symbolService.OptionSymbols$.pipe(D(p => i ? p.filter(g => g.shareDueDate === i) : p), D(p => e ? p.filter(g => g.baseIsin === u.companyIsin) : p), D(p => a ? p.filter(g => a.includes(g.marketUnit)) : p), D(p => [...p.sort( (g, y) => g.strikePrice - y.strikePrice)]))
            }
            )),
            this.FilteredSymbolIsin$ = this.FilteredSymbols$.pipe(D(e => e.map(i => i.symbolIsin)), Q( () => {
                this.loading.set(!0)
            }
            )),
            this.FilteredSymbolIsin = q(this.FilteredSymbolIsin$),
            this.MarketData = Ie(void 0),
            this.UpdateMarketData = e => {
                this.MarketData.update(i => B({}, Object.assign(i ?? {}, {
                    [e.symbolIsin]: B(B({}, i?.[e.symbolIsin]), e)
                })))
            }
            ,
            this.MarketData$ = st(this.MarketData),
            this.TableData$ = this.FilteredSymbols$.pipe(yt(this.MarketData$, this.BaseSymbolTrade$, this.settingFacadeService.getSettings$()), D( ([e,i,a,{volatility: u, interestRate: p}]) => e.map(g => {
                let y = hs(mo[g?.marketUnit], a?.price, g?.strikePrice, new Date(g?.shareDueDate), u, p, i?.[g.symbolIsin]?.lastTradedPrice)
                  , O = +(((i?.[g.symbolIsin]?.lastTradedPrice || 0) - y.price) / y.price)
                  , j = (i?.[g.symbolIsin]?.totalNumberOfSharesTraded ?? 0) * a?.closingPrice * g?.csize
                  , Z = ut.daysBetweenTwoDates(new Date, new Date(g?.shareDueDate));
                return J(B(B({}, g), i?.[g.symbolIsin]), {
                    impliedVolatility: y.impliedVolatility,
                    breakEvenPoint: Po(g.marketUnit) ? g?.strikePrice + i?.[g.symbolIsin]?.lastTradedPrice : g?.strikePrice - i?.[g.symbolIsin]?.lastTradedPrice,
                    blackScholesPrice: y.price,
                    blackScholesPercent: Number.isFinite(O) && !Number.isNaN(O) ? O * 100 : 0,
                    notionalValue: Number.isFinite(j) && !Number.isNaN(j) ? j : 0,
                    shareDueDateDistance: Z > 0 ? `${Z} \u0631\u0648\u0632 \u0645\u0627\u0646\u062F\u0647` : Z === 0 ? "\u0627\u0645\u0631\u0648\u0632" : `${Math.abs(Z)} \u0631\u0648\u0632 \u06AF\u0630\u0634\u062A\u0647'`
                })
            }
            )), Oa()),
            this.TableData = q(this.TableData$),
            this.RightTable = q(this.OptionSide$.pipe(fe(e => e !== Ee.None ? this.TableData$ : this.TableData$.pipe(D(i => i.filter(a => Object.keys(lu).includes(a.marketUnit?.toString()))))))),
            this.LeftTable = q(this.OptionSide$.pipe(fe(e => e !== Ee.None ? this.TableData$ : this.TableData$.pipe(D(i => i.filter(a => Object.keys(cu).includes(a.marketUnit?.toString()))))))),
            this.StrikePriceTable = q(this.FilteredSymbols$.pipe(D(e => [...new Set(e?.map(i => i.strikePrice))]))),
            this.StrikePriceTable$ = st(this.StrikePriceTable),
            this.RightTopTable = kt( () => this.RightTable()?.filter(e => e.strikePrice <= this.BaseSymbolTrade()?.price)),
            this.RightBottomTable = kt( () => this.RightTable()?.filter(e => e.strikePrice > this.BaseSymbolTrade()?.price)),
            this.LeftTopTable = kt( () => this.LeftTable()?.filter(e => e.strikePrice <= this.BaseSymbolTrade()?.price)),
            this.LeftBottomTable = kt( () => this.LeftTable()?.filter(e => e.strikePrice > this.BaseSymbolTrade()?.price)),
            this.StrikePriceTopTable = kt( () => this.StrikePriceTable()?.filter(e => e <= this.BaseSymbolTrade()?.price)),
            this.StrikePriceBottomTable = kt( () => this.StrikePriceTable()?.filter(e => e > this.BaseSymbolTrade()?.price)),
            this.ScrollSide = 0,
            this.scrollChanged = Ie(!1),
            this.leftScrollElementsValue = Ie(0),
            this.onMouseDown = e => this.ScrollSide = e,
            this.onMouseUp = () => this.ScrollSide = 0,
            this.onMouseOver = (e, i, a) => {
                let u = this.tableContent.querySelectorAll(`.${e}[id='${i}']`);
                this.OptionSide() !== Ee.None ? u.forEach(p => p.classList.add("item-hover")) : a && (Array.from(u)[1].classList.add("item-hover"),
                a?.classList.add("item-hover"))
            }
            ,
            this.onMouseleave = (e, i) => {
                this.tableContent.querySelectorAll(`.${e}[id='${i}']`).forEach(a => a.classList.remove("item-hover"))
            }
            ,
            this.onCellClicked = (e, i, a, u) => {
                this.isMobile() ? this.router.navigate(["/stock-details", e]) : this.activeSymbolService.setActiveIsin(e),
                this.highlightSelectedRow(i, a, u)
            }
            ,
            this.removeHighlightFromSelectedRow = () => this.tableContent?.querySelectorAll(".item-selected").forEach(e => e.classList.remove("item-selected", "left-select", "right-select")),
            this.highlightSelectedRow = (e, i, a) => {
                this.removeHighlightFromSelectedRow();
                let u = this.tableContent.querySelectorAll(`.${e}[id='${i}']`);
                if (this.OptionSide() !== Ee.None)
                    u.forEach(p => p.classList.add("item-selected"));
                else if (a) {
                    let p = a?.parentElement?.className?.includes("left") ? "left-select" : "right-select";
                    Array.from(u)[1].classList.add("item-selected", p),
                    a?.classList.add("item-selected")
                }
            }
            ,
            this.optionManager = I(th),
            this.localStorageService = I(pn),
            this.COLUMN_STATE = "OptionChainColumnState",
            this.accountService = I(hn),
            this.columnStateKey = q(this.accountService.userAccountInfo$.pipe(pe(Boolean), D(e => `${e.customerIsin}_${this.COLUMN_STATE}`))),
            this.TableColumn = q(this.optionManager.columnStates$.pipe(D(e => Object.fromEntries(e.map(i => [i.colId, i]))))),
            this.VisibleColumnLength = q(this.optionManager.columnStates$.pipe(D(e => e?.filter(i => i.colVisibility).length))),
            this.sellItemClick = Ge(),
            this.buyItemClick = Ge(),
            this.DefaultOptionColumn = [{
                colId: "contractState",
                colName: "\u0648\u0636\u0639\u06CC\u062A \u0642\u0631\u0627\u0631\u062F\u0627\u062F",
                colVisibility: !0,
                tooltip: {
                    title: "\u0648\u0636\u0639\u06CC\u062A \u0642\u0631\u0627\u0631\u062F\u0627\u062F",
                    description: "\u0627\u0631\u0632\u0634 \u0630\u0627\u062A\u06CC \u062F\u0631 \u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627\u06CC \u0627\u062E\u062A\u06CC\u0627\u0631 \u0628\u0647 \u0645\u0642\u062F\u0627\u0631\u06CC \u06AF\u0641\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F \u06A9\u0647 \u06CC\u06A9 \u0627\u062E\u062A\u06CC\u0627\u0631 \u062F\u0631 \u0635\u0648\u0631\u062A \u0627\u0639\u0645\u0627\u0644 \u062F\u0631 \u0647\u0645\u06CC\u0646 \u0631\u0648\u0632 \u062C\u0627\u0631\u06CC\u060C \u0628\u0647 \u0633\u0648\u062F \u062E\u0631\u06CC\u062F\u0627\u0631 \u0622\u0646 \u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u06CC \u0628\u0627\u0634\u062F. \u0627\u06CC\u0646 \u0627\u0631\u0632\u0634\u060C \u062A\u0641\u0627\u0648\u062A \u0628\u06CC\u0646 \u0642\u06CC\u0645\u062A \u0641\u0639\u0644\u06CC \u062F\u0627\u0631\u0627\u06CC\u06CC \u067E\u0627\u06CC\u0647 \u0648 \u0642\u06CC\u0645\u062A \u0627\u0639\u0645\u0627\u0644 \u0627\u0633\u062A. \u0628\u0647 \u0639\u0628\u0627\u0631\u062A \u062F\u06CC\u06AF\u0631\u060C \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0627\u062E\u062A\u06CC\u0627\u0631 \u062E\u0631\u06CC\u062F \u0632\u0645\u0627\u0646\u06CC \u062F\u0631 \u0633\u0648\u062F \u0627\u0633\u062A \u06A9\u0647 \u0642\u06CC\u0645\u062A \u0641\u0639\u0644\u06CC \u062F\u0627\u0631\u0627\u06CC\u06CC \u067E\u0627\u06CC\u0647 \u0628\u0627\u0644\u0627\u062A\u0631 \u0627\u0632 \u0642\u06CC\u0645\u062A \u0627\u0639\u0645\u0627\u0644 \u0628\u0627\u0634\u062F \u0648 \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0627\u062E\u062A\u06CC\u0627\u0631 \u0641\u0631\u0648\u0634 \u0632\u0645\u0627\u0646\u06CC \u062F\u0631 \u0633\u0648\u062F \u0627\u0633\u062A \u06A9\u0647 \u0642\u06CC\u0645\u062A \u0641\u0639\u0644\u06CC \u062F\u0627\u0631\u0627\u06CC\u06CC \u067E\u0627\u06CC\u0647 \u06A9\u0645\u062A\u0631 \u0627\u0632 \u0642\u06CC\u0645\u062A \u062A\u0648\u0627\u0641\u0642\u06CC \u0628\u0627\u0634\u062F."
                }
            }, {
                colId: "lastTradedPrice",
                colName: "\u0622\u062E\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A",
                colVisibility: !0
            }, {
                colId: "closingPrice",
                colName: "\u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC",
                colVisibility: !0
            }, {
                colId: "blackScholesPrice",
                colName: "\u0628\u0644\u06A9 \u0634\u0648\u0644\u0632",
                colVisibility: !0,
                tooltip: {
                    title: "\u0628\u0644\u06A9 \u0634\u0648\u0644\u0632",
                    description: "\u0642\u06CC\u0645\u062A \u0645\u0646\u0635\u0641\u0627\u0646\u0647 \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u060C\u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0641\u0631\u0645\u0648\u0644 \u0628\u0644\u06A9 \u0634\u0648\u0644\u0632 \u0645\u06CC \u0628\u0627\u0634\u062F"
                }
            }, {
                colId: "impliedVolatility",
                colName: "\u0646\u0648\u0633\u0627\u0646\u200C\u067E\u0630\u06CC\u0631\u06CC \u0636\u0645\u0646\u06CC",
                colVisibility: !0
            }, {
                colId: "bestSellPrice",
                colName: "\u0642\u06CC\u0645\u062A \u0639\u0631\u0636\u0647",
                colVisibility: !0
            }, {
                colId: "bestBuyPrice",
                colName: "\u0642\u06CC\u0645\u062A \u062A\u0642\u0627\u0636\u0627",
                colVisibility: !0
            }, {
                colId: "bestSellQuantity",
                colName: "\u062D\u062C\u0645 \u0639\u0631\u0636\u0647",
                colVisibility: !0
            }, {
                colId: "bestBuyQuantity",
                colName: "\u062D\u062C\u0645 \u062A\u0642\u0627\u0636\u0627",
                colVisibility: !0
            }, {
                colId: "totalTradeValue",
                colName: "\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062A",
                colVisibility: !0
            }, {
                colId: "totalNumberOfSharesTraded",
                colName: "\u062D\u062C\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062A",
                colVisibility: !0
            }, {
                colId: "breakEvenPoint",
                colName: "\u0642\u06CC\u0645\u062A \u0633\u0631 \u0628\u0647 \u0633\u0631",
                colVisibility: !0
            }, {
                colId: "blackScholesPercent",
                colName: "\u0641\u0627\u0635\u0644\u0647 \u062A\u0627 \u0628\u0644\u06A9 \u0634\u0648\u0644\u0632",
                colVisibility: !0
            }, {
                colId: "delta",
                colName: "\u062F\u0644\u062A\u0627",
                colVisibility: !0
            }, {
                colId: "notionalValue",
                colName: "\u0627\u0631\u0632\u0634 \u0645\u0641\u0647\u0648\u0645\u06CC",
                colVisibility: !0
            }, {
                colId: "shareDueDateDistance",
                colName: "\u0631\u0648\u0632 \u062A\u0627 \u0633\u0631\u0631\u0633\u06CC\u062F",
                colVisibility: !0
            }],
            this.OptionColumnName = {
                contractState: "contractState",
                lastTradedPrice: "lastTradedPrice",
                closingPrice: "closingPrice",
                blackScholesPrice: "blackScholesPrice",
                impliedVolatility: "impliedVolatility",
                bestBuyPrice: "bestBuyPrice",
                bestSellPrice: "bestSellPrice",
                bestSellQuantity: "bestSellQuantity",
                bestBuyQuantity: "bestBuyQuantity",
                totalTradeValue: "totalTradeValue",
                totalNumberOfSharesTraded: "totalNumberOfSharesTraded",
                breakEvenPoint: "breakEvenPoint",
                blackScholesPercent: "blackScholesPercent",
                delta: "delta",
                notionalValue: "notionalValue",
                shareDueDateDistance: "shareDueDateDistance"
            },
            this.optionManager.hasReload.next(!1),
            q(this.subscribeToMarketDataLs()),
            q(this.subscribeToContractDataLs()),
            q(this.getMarketDataWhenLsIsNotConnected()),
            q(this.StrikePriceTable$.pipe(Do(1e3), Q( () => {
                this.ScrollLeftHandler.scrollLeft = 0,
                this.ScrollRightHandler.scrollLeft = 0
            }
            ))),
            q(this.TableData$.pipe(Do(1e3), Q( () => this.loading.set(!1)))),
            q(this.sidePanelServiceService.openSidePanelWithData$.pipe(pe(e => e.sidePanel === Ys.Option), fe(e => yp([this.optionChainService.filters$, this.BaseSymbolTrade$]).pipe(Ze(), Do(1500), D( () => {
                let a = this.symbolService.symbolByIsin[e.data.symbolIsin].strikePrice <= this.BaseSymbolTrade()?.price
                  , u = a ? this.RightTopTable().findIndex(p => p.symbolIsin === e.data.symbolIsin) : this.RightBottomTable().findIndex(p => p.symbolIsin === e.data.symbolIsin);
                return {
                    className: a ? "top-table" : "bottom-table",
                    index: u
                }
            }
            ), Q( ({className: i, index: a}) => this.highlightSelectedRow(i, a)))))),
            q(this.FilteredSymbols$.pipe(fe(e => this.BaseSymbolTrade$.pipe(D(i => e.map(a => {
                let u = ar(mo[a?.marketUnit], i?.price, a?.strikePrice, new Date(a?.shareDueDate), Ji, Vi);
                return {
                    symbolIsin: a.symbolIsin,
                    delta: u
                }
            }
            )), Q(i => i.forEach(a => this.UpdateMarketData(a))))))),
            q(this.optionManager.columnVisibility$.pipe(Q(e => {
                let i = this.optionManager.columnStates.value;
                i = i.update(e, "colId"),
                this.updateColumnState(i)
            }
            ))),
            q(this.optionManager.columnStatesReset$.pipe(pe(Boolean), D( () => this.DefaultOptionColumn), D(e => e.map(i => (delete i.tooltip,
            i))), Q(e => this.updateColumnState(e)))),
            q(this.optionManager.downloadExcel$.pipe(Q( () => {
                let e = this.TableData().map(u => J(B({}, u), {
                    contractState: ro(u.marketUnit, u.strikePrice, this.BaseSymbolTrade().price),
                    optionSide: Po(u.marketUnit) ? "\u062E\u0631\u06CC\u062F" : "\u0641\u0631\u0648\u0634"
                })).sort( (u, p) => u.marketUnit - p.marketUnit)
                  , {headers: i, values: a} = u0(e, z0);
                ts(i, a, "option-chain-export")
            }
            ))),
            q(this.optionChainService.selectedBaseSymbol$.pipe()),
            q(this.FilteredSymbolIsin$.pipe(ka(), Q( ([e]) => {
                e?.length > 0 && this.lsService.unsubscribeSchemaTypeAndIds(ze.OptionMarketView, e)
            }
            ))),
            q(this.optionManager.reload$.pipe(Q( () => this.loading.set(!0)), Do(1e3), Q( () => this.loading.set(!1))))
        }
        ngOnInit() {
            this.updateColumnState(this.getColumnStateForFilter())
        }
        ngOnDestroy() {
            this.lsService.unsubscribeSchema(ze.OptionMarketView),
            this.lsService.unsubscribeSchema(ze.OptionContract)
        }
        ngAfterViewInit() {
            this.tableContent = document.getElementsByClassName("table-content")[0],
            this.tableMiddle = document.getElementById("table-middle"),
            this.ScrollLeftHandler = document.getElementById("ScrollLeftHandler"),
            this.ScrollRightHandler = document.getElementById("ScrollRightHandler");
            let e = document.querySelectorAll(".rightScroll");
            e.forEach(a => {
                a.addEventListener("scroll", () => {
                    this.ScrollSide !== 2 && (this.ScrollLeftHandler.scrollLeft = Math.abs(a.scrollLeft)),
                    Array.from(e).filter(u => u.id != a.id).forEach(u => {
                        u.scrollLeft = a.scrollLeft
                    }
                    )
                }
                )
            }
            );
            let i = document.querySelectorAll(".leftScroll");
            i.forEach(a => {
                Ks(a, "scroll").pipe(D( () => {
                    if (this.isMobile() && (this.OptionSide() === Ee.Buy || this.OptionSide() === Ee.Sell)) {
                        if (a.scrollLeft <= -120)
                            return 1;
                        if (a.scrollLeft > -80)
                            return 0
                    }
                }
                ), Tp(200), Q(u => {
                    this.leftScrollElementsValue?.set(u)
                }
                )).subscribe(),
                a.addEventListener("scroll", () => {
                    this.scrollChanged.set(a?.scrollLeft >= 5),
                    this.ScrollSide !== 1 && (this.ScrollRightHandler.scrollLeft = -a.scrollLeft),
                    Array.from(i).filter(u => u.id != a.id).forEach(u => {
                        u.scrollLeft = a.scrollLeft
                    }
                    )
                }
                )
            }
            )
        }
        updateColumnState(e) {
            this.optionManager.updateColumnState(e),
            this.localStorageService.setItem(this.columnStateKey(), JSON.stringify(e))
        }
        getColumnStateForFilter() {
            let e = JSON.parse(this.localStorageService.getItem(this.columnStateKey())) || [];
            return e = e?.length >= this.DefaultOptionColumn.length ? e : this.DefaultOptionColumn,
            e.filter(i => !["symbolName"].includes(i?.colId))?.map(i => ({
                colId: i.colId,
                colName: i.colName,
                colVisibility: i.colVisibility
            }))
        }
        easyChartItemClick() {
            this.router.navigate([]).then( () => {
                window.open("/easy-chart/" + this.selectedRowSymbol().symbolIsin, "_blank")
            }
            )
        }
        openPopover(e, i, a) {
            e.open({
                tooltipTitle: i,
                tooltipDescription: a
            })
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["option-chain"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        outputs: {
            conditionItemClick: "conditionItemClick",
            noteItemClick: "noteItemClick",
            marketMapItemClick: "marketMapItemClick",
            sellItemClick: "sellItemClick",
            buyItemClick: "buyItemClick"
        },
        decls: 108,
        vars: 78,
        consts: [["tooltip", ""], ["p1", "ngbPopover"], ["row", ""], [1, "d-flex", "flex-column", "h-100", "overflow-hidden", 3, "ngClass"], [1, "d-flex", "flex-column", "h-100"], [3, "symbolMarketData", "isMobile"], [1, "border", "border-emphasis", "border-opacity-05", "d-flex", "rounded", "text-center", "mb-1"], [1, "chain-table", "overflow-auto", "d-flex", "flex-column", 3, "contextmenu", "ngClass"], [1, "right"], [1, "head-content", "overflow-hidden", "rounded-start"], ["id", "right1"], [1, "head-item", "text-start", "start-0"], [1, "middle", "overflow-hidden"], [1, "middle-table"], [1, "middle-head-item"], [1, "left", 3, "dir"], [1, "head-content", "overflow-hidden", "rounded-end"], ["id", "left1", 1, "table-head", "overflow-x-auto", "overflow-y-hidden", "disable-scrollbar-view", "ScrollLeftTarget", "leftScroll"], [1, "head-item", "text-end", "end-0"], ["dir", "ltr", 1, "head-item", 3, "hidden"], ["context-menu", "table-context-menu", 1, "table-content", "d-flex", "flex-column", 3, "ngClass"], [1, "content-wrapper"], [1, "lower-content"], ["id", "right2"], ["contractStateRow", "", 1, "top-table", "table-row", 3, "id", "baseValue", "currentValue", "marketUnit", "isOdd", "style"], [1, "top-table", "middle-row", 3, "id"], ["id", "left2", 1, "table-body", "disable-scrollbar-view", "ScrollLeftTarget", "leftScroll"], [1, "stock-bar", "bg-body-secondary", "border", "border-principal-5x", "border-principal-5x-dark", 3, "contextmenu"], [1, "rounded-2", "text-nowrap", "d-flex", "align-items-center", "justify-content-center", "gap-1", "h-100", "pe-3", "position-relative", "z-1", "py-0"], [1, "px-2", "ps-3", "position-relative", "bg-emphasis", "bg-emphasis-dark-mobile", "text-body-reverse", "h-100", "d-flex", "align-items-center", "justify-content-center", "gap-1", 2, "min-width", "103px"], ["dir", "ltr", 3, "colorizeNumber"], [1, "fw-bold"], [1, "triangle-left"], [1, "ms-3", "cup", "text-body"], ["type", "button", 2, "padding-block", "2px !important", 3, "click"], ["width", "16", "height", "16", 3, "iconName"], [1, "upper-content"], ["id", "right3"], ["contractStateRow", "", 1, "bottom-table", "table-row", 3, "id", "baseValue", "currentValue", "marketUnit", "isOdd", "style"], ["id", "ScrollRightHandler", 3, "mousedown", "mouseup"], [1, "head-content", 2, "opacity", "0"], [1, "table-head"], [1, "head-item"], ["isin", "s", 1, "bottom-table", "middle-row", 3, "id"], ["id", "left3", 1, "table-body", "disable-scrollbar-view", "ScrollLeftTarget", "leftScroll"], ["id", "ScrollLeftHandler", 3, "mousedown", "mouseup"], [1, "head-item", 3, "hidden"], ["id", "table-context-menu", 3, "ngClass"], [1, "text-start", "bg-body", "rounded-2"], [1, "text-start", "py-1", "border-bottom"], [1, "app-context-menu-item", "align-items-center", "cup", "d-flex", "gap-1", "px-2", "py-1", 3, "click"], ["width", "18", "height", "18", 1, "px-1", "text-success", 3, "iconName"], ["width", "18", "height", "18", 1, "px-1", "text-danger", 3, "iconName"], [1, "text-start", "py-1"], ["width", "18", "height", "18", 1, "text-secondary", "px-1", 3, "iconName"], ["width", "18", "height", "18", 1, "px-1", "text-secondary", 3, "iconName"], [1, "app-context-menu-item", "align-items-center", "cup", "d-flex", "gap-1", "py-1", 2, "padding-right", "12px", 3, "click"], ["width", "18", "height", "18", 1, "text-secondary", 3, "iconName"], [1, "chain-table-state", "align-items-center", "chain-table-state", "d-flex", "flex-column", "gap-2", "flex-grow-1", "justify-content-center", "overflow-hidden", "d-none"], [1, "p-1", "flex-grow-1", 3, "ngClass"], ["width", "18", "height", "18", "triggers", "mouseenter:mouseleave", "container", "body", 1, "text-primary", "tooltip-total-popover", "cup", 3, "iconName", "ngClass", "autoClose", "ngbPopover"], ["width", "18", "height", "18", "triggers", "mouseenter:mouseleave", "container", "body", 1, "text-primary", "tooltip-total-popover", "cup", 3, "mouseenter", "iconName", "ngClass", "autoClose", "ngbPopover"], ["triggers", "mouseenter:mouseleave", "container", "body", "width", "18", "height", "18", 1, "text-primary", "tooltip-total-popover", "cup", 3, "ngClass", "autoClose", "ngbPopover", "iconName"], ["triggers", "mouseenter:mouseleave", "container", "body", "width", "18", "height", "18", 1, "text-primary", "tooltip-total-popover", "cup", 3, "mouseenter", "ngClass", "autoClose", "ngbPopover", "iconName"], ["contractStateRow", "", 1, "top-table", "table-row", 3, "contextmenu", "mouseover", "mouseleave", "click", "id", "baseValue", "currentValue", "marketUnit", "isOdd"], [1, "grid-item", "start-0", 3, "ngClass"], [1, "text", "justify-content-start"], [3, "symbolName", "stateColor"], [1, "grid-item", 3, "hidden"], ["contractState", "", 1, "text", 3, "baseValue", "currentValue", "marketUnit"], ["dir", "ltr", 1, "grid-item", 3, "hidden"], [1, "text"], [3, "value", "percent"], ["dir", "ltr", 1, "text"], [1, "text", 3, "colorizeNumber"], [1, "top-table", "middle-row", 3, "contextmenu", "mouseover", "mouseleave", "id"], [1, "middle-grid-item"], [1, "grid-item", "end-0", 3, "ngClass"], ["dir", "rtl", 1, "grid-item", 3, "hidden"], ["contractStateRow", "", 1, "bottom-table", "table-row", 3, "contextmenu", "mouseover", "mouseleave", "click", "id", "baseValue", "currentValue", "marketUnit", "isOdd"], ["isin", "s", 1, "bottom-table", "middle-row", 3, "contextmenu", "mouseover", "mouseleave", "id"], [1, "bg-secondary", "bg-opacity-10", "rounded", "p-2"], ["width", "32", "height", "32", 3, "iconName"], [1, "fw-700"], [1, "d-flex", "flex-column", "align-items-centerjustify-content-between"], [1, "fw-bold", "text-center", "mb-1"], [1, "text-body-secondary", "text-justify"]],
        template: function(i, a) {
            if (i & 1) {
                let u = re();
                h(0, "div", 3)(1, "div", 4)(2, "option-chain-header", 5),
                z("symbolMarketData", function(g) {
                    return R(u),
                    L(a.updateBaseSymbol(g))
                }),
                f(),
                H(3, H1, 5, 7, "div", 6),
                h(4, "div", 7),
                z("contextmenu", function(g) {
                    return R(u),
                    L(a.onRightClick(g))
                }),
                h(5, "div")(6, "div")(7, "div", 8)(8, "div", 9)(9, "div", 10)(10, "div", 11),
                C(11),
                f(),
                H(12, K1, 2, 0),
                f()()(),
                h(13, "div", 12)(14, "div", 13)(15, "div", 14),
                C(16, "\u0642\u06CC\u0645\u062A \u0627\u0639\u0645\u0627\u0644"),
                f()()(),
                h(17, "div", 15)(18, "div", 16)(19, "div", 17),
                H(20, Q1, 2, 1, "div", 18),
                qe(21, Y1, 3, 3, "div", 19, ct),
                f()()()(),
                h(23, "div", 20)(24, "div", 21)(25, "div", 22)(26, "div", 8)(27, "div", 23),
                qe(28, X1, 6, 13, "a", 24, ct),
                f()(),
                h(30, "div")(31, "div", 13),
                qe(32, e2, 4, 4, "div", 25, ct),
                f()(),
                h(34, "div", 15)(35, "div", 26),
                qe(36, i2, 61, 75, "a", 24, ct),
                f()()(),
                h(38, "div", 27),
                z("contextmenu", function() {
                    return R(u),
                    L(a.selectedSymbolByCompanyIsin())
                }),
                h(39, "div", 28)(40, "div", 29)(41, "span", 30),
                C(42),
                f(),
                h(43, "span", 31),
                C(44),
                $(45, "number"),
                f(),
                k(46, "div", 32),
                f(),
                h(47, "span", 33),
                C(48, " \u0646\u0645\u0627\u062F \u067E\u0627\u06CC\u0647 "),
                h(49, "span", 31),
                C(50),
                f(),
                h(51, "button", 34),
                z("click", function() {
                    let g;
                    return R(u),
                    L(a.onCellClicked((g = a.BaseSymbolTrade()) == null ? null : g.symbolIsin))
                }),
                k(52, "svg-icon", 35),
                C(53, " \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0646\u0645\u0627\u062F "),
                f()()()(),
                h(54, "div", 36)(55, "div", 8)(56, "div", 37),
                qe(57, o2, 6, 13, "a", 38, ct),
                f(),
                h(59, "div", 39),
                z("mousedown", function() {
                    return R(u),
                    L(a.onMouseDown(1))
                })("mouseup", function() {
                    return R(u),
                    L(a.onMouseUp())
                }),
                h(60, "div", 40)(61, "div", 41)(62, "div", 42),
                C(63, "\u0646\u0645\u0627\u062F"),
                f(),
                H(64, r2, 2, 0),
                f()()()(),
                h(65, "div")(66, "div", 13),
                qe(67, a2, 4, 4, "div", 43, ct),
                f()(),
                h(69, "div", 15)(70, "div", 44),
                qe(71, c2, 61, 75, "a", 38, ct),
                f(),
                h(73, "div", 45),
                z("mousedown", function() {
                    return R(u),
                    L(a.onMouseDown(2))
                })("mouseup", function() {
                    return R(u),
                    L(a.onMouseUp())
                }),
                h(74, "div", 40)(75, "div", 41),
                H(76, u2, 2, 0, "div", 42),
                qe(77, d2, 2, 2, "div", 46, ct),
                f()()()()()(),
                h(79, "app-context-menu", 47)(80, "div", 48)(81, "div", 49)(82, "div", 50),
                z("click", function() {
                    return R(u),
                    L(a.buyItemClick.emit(a.selectedRowSymbol().symbolIsin))
                }),
                k(83, "svg-icon", 51),
                C(84, " \u062E\u0631\u06CC\u062F "),
                f(),
                h(85, "div", 50),
                z("click", function() {
                    return R(u),
                    L(a.sellItemClick.emit(a.selectedRowSymbol().symbolIsin))
                }),
                k(86, "svg-icon", 52),
                C(87, " \u0641\u0631\u0648\u0634 "),
                f()(),
                h(88, "div", 53)(89, "div", 50),
                z("click", function() {
                    return R(u),
                    L(a.marketMapItemClick.emit(a.selectedRowSymbol()))
                }),
                k(90, "svg-icon", 54),
                C(91, " \u0639\u0645\u0642 \u0628\u0627\u0632\u0627\u0631 "),
                f(),
                h(92, "div", 50),
                z("click", function() {
                    return R(u),
                    L(a.easyChartItemClick())
                }),
                k(93, "svg-icon", 55),
                C(94, " \u0627\u06CC\u0632\u06CC \u0686\u0627\u0631\u062A "),
                f(),
                h(95, "div", 50),
                z("click", function() {
                    let g;
                    return R(u),
                    L(a.noteItemClick.emit((g = a.selectedRowSymbol()) == null ? null : g.symbolIsin))
                }),
                k(96, "svg-icon", 55),
                C(97, " \u06CC\u0627\u062F\u062F\u0627\u0634\u062A "),
                f(),
                h(98, "div", 56),
                z("click", function() {
                    let g;
                    return R(u),
                    L(a.conditionItemClick.emit((g = a.selectedRowSymbol()) == null ? null : g.symbolIsin))
                }),
                k(99, "svg-icon", 57),
                C(100, " \u0647\u0634\u062F\u0627\u0631 \u062F\u0631\u0648\u0646 \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0627\u06CC "),
                f(),
                h(101, "div", 50),
                z("click", function() {
                    return R(u),
                    L(a.noteItemClick.emit(a.selectedRowSymbol().symbolIsin))
                }),
                k(102, "svg-icon", 55),
                C(103, " TSE "),
                f()()()()()(),
                H(104, m2, 1, 0, "option-chain-footer"),
                f(),
                H(105, p2, 5, 1, "div", 58),
                f(),
                H(106, h2, 5, 2, "ng-template", null, 0, Ft),
                f()
            }
            if (i & 2) {
                let u, p, g, y, O, j;
                b("ngClass", Fe(68, j1, a.loading())),
                d(2),
                b("isMobile", a.isMobile()),
                d(),
                W(a.isMobile() ? -1 : 3),
                d(),
                b("ngClass", Wp(70, z1, a.loading(), a.OptionSide() !== a.Side.None, !!a.leftScrollElementsValue())),
                d(),
                zt("bg-principal header-wrapper top-0 z-10 ", a.isMobile() ? "" : "position-sticky", ""),
                d(),
                zt("table-header align-items-end ", a.isMobile() ? "bg-principal-3x" : "", ""),
                d(3),
                vi(a.getRightTableStyle()),
                zt("table-head overflow-x-auto disable-scrollbar-view ScrollRightTarget rightScroll ", a.isMobile() ? "bg-principal-3x" : "", ""),
                d(2),
                K("\u0646\u0645\u0627\u062F (", (u = a.RightTable()) == null ? null : u.length, ")"),
                d(),
                W(a.OptionSide() === a.Side.None ? 12 : -1),
                d(5),
                b("dir", a.OptionSide() === a.Side.Buy || a.OptionSide() === a.Side.Sell ? "rtl" : "ltr"),
                d(2),
                vi(a.getLeftTableStyle()),
                d(),
                W(a.OptionSide() === a.Side.None ? 20 : -1),
                d(),
                Ke(a.DefaultOptionColumn),
                d(2),
                b("ngClass", Fe(74, hr, a.loading())),
                d(4),
                zt("table-body disable-scrollbar-view ScrollRightTarget rightScroll ", a.isMobile() ? "bg-principal-3x" : "", ""),
                d(),
                Ke(a.RightTopTable()),
                d(2),
                zt("middle ", a.isMobile() ? "bg-principal-3x" : "", ""),
                d(2),
                Ke(a.StrikePriceTopTable()),
                d(2),
                b("dir", a.OptionSide() === a.Side.Buy || a.OptionSide() === a.Side.Sell ? "rtl" : "ltr"),
                d(2),
                Ke(a.LeftTopTable()),
                d(5),
                b("colorizeNumber", (p = a.BaseSymbolTrade()) == null ? null : p.pricePercent),
                d(),
                K("(", (g = a.BaseSymbolTrade()) == null ? null : g.pricePercent, "%)"),
                d(2),
                X(Se(45, 66, (y = a.BaseSymbolTrade()) == null ? null : y.price)),
                d(6),
                X((O = a.BaseSymbolName()) == null ? null : O.symbolName),
                d(),
                zt(`btn btn-sm btn-outline-secondary pb-0 ms-1 symbol-details-option 
										`, a.isMobile() ? "d-none" : "", " "),
                d(),
                b("iconName", a.icons.ExternalLink),
                d(4),
                zt("table-body disable-scrollbar-view ScrollRightTarget rightScroll ", a.isMobile() ? "bg-principal-3x" : "", ""),
                d(),
                Ke(a.RightBottomTable()),
                d(2),
                vi(a.getRightTableStyle() + ";height: 10px"),
                zt("scroll overflow-x-auto overflow-y-hidden w-100 rightScroll ", a.isMobile() ? "bg-principal-3x" : "", ""),
                d(5),
                W(a.OptionSide() === a.Side.None ? 64 : -1),
                d(),
                zt("middle ", a.isMobile() ? "bg-principal-3x" : "", ""),
                d(2),
                Ke(a.StrikePriceBottomTable()),
                d(2),
                b("dir", a.OptionSide() === a.Side.Buy || a.OptionSide() === a.Side.Sell ? "rtl" : "ltr"),
                d(2),
                Ke(a.LeftBottomTable()),
                d(2),
                vi(a.getRightTableStyle() + ";height: 10px"),
                zt("scroll overflow-x-auto overflow-y-hidden w-100 leftScroll ", a.isMobile() ? "bg-principal-3x" : "", ""),
                d(3),
                W(a.OptionSide() === a.Side.None ? 76 : -1),
                d(),
                Ke(a.DefaultOptionColumn),
                d(2),
                b("ngClass", Fe(76, hr, !((j = a.selectedRowSymbol()) != null && j.symbolIsin))),
                d(4),
                b("iconName", a.icons.PlusBoxFill),
                d(3),
                b("iconName", a.icons.MinusBoxFill),
                d(4),
                b("iconName", a.icons.MarketDepth),
                d(3),
                b("iconName", a.icons.EasyChart),
                d(3),
                b("iconName", a.icons.Note),
                d(3),
                b("iconName", a.icons.BellAdd),
                d(3),
                b("iconName", a.icons.TseTmc),
                d(2),
                W(a.isMobile() ? 104 : -1),
                d(),
                W(a.isMobile() ? 105 : -1)
            }
        },
        dependencies: [ot, Je, Wt, D0, n0, uh, ph, za, fh, dh, ye, o0, rs, mh, hh],
        styles: [`a[_ngcontent-%COMP%]{color:var(--bs-color-body)}.lower-content[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%], .table-header[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%], .upper-content[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{width:85px}.table-header[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .middle-head-item[_ngcontent-%COMP%]{border-style:solid;border-width:1px 1px 0}.table-head[_ngcontent-%COMP%]{display:flex;padding:4px 0;background-color:var(--color-principal-3x)}.optionSide-single[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .table-head[_ngcontent-%COMP%]{grid-template-columns:repeat(var(--bs-columns, 1),1fr)}.optionSide-single[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .table-head[_ngcontent-%COMP%]{grid-template-columns:repeat(var(--bs-columns, 7),1fr)}.optionSide-single[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .table-head[_ngcontent-%COMP%]{border:1px transparent}.table-head[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]{position:relative;font-size:12px;height:24px;line-height:24px;text-align:center;min-width:95px;flex-shrink:0;padding:0 5px}.table-head[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%]:first-child{background-color:var(--color-principal-3x);border-left:1px solid var(--color-principal-4x);min-width:110px;z-index:1}.table-head[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%] + .head-item[_ngcontent-%COMP%]{border-right:1px solid var(--color-principal-4x)}.left[_ngcontent-%COMP%]   .table-head[_ngcontent-%COMP%]   .head-item[_ngcontent-%COMP%] + .head-item[_ngcontent-%COMP%]{border-right:unset;border-left:1px solid var(--color-principal-4x)}.middle-grid-item[_ngcontent-%COMP%], .middle-head-item[_ngcontent-%COMP%]{background-color:var(--color-principal-3x);text-align:center;width:85px;justify-content:center;align-items:center;height:100%;border-color:var(--bs-tertiary-color)}.middle-head-item[_ngcontent-%COMP%]{font-size:12px;height:36px;line-height:32px}.lower-content[_ngcontent-%COMP%], .table-header[_ngcontent-%COMP%], .upper-content[_ngcontent-%COMP%]{display:flex}.lower-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .lower-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], .table-header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .table-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], .upper-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .upper-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1;flex-wrap:nowrap;overflow:hidden;position:relative}.disable-scrollbar-view[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}.disable-scrollbar-view[_ngcontent-%COMP%]::-webkit-scrollbar{background:transparent;width:0px}.table-body[_ngcontent-%COMP%]{overflow:auto}.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{cursor:pointer;height:36px;white-space:nowrap}.middle-table[_ngcontent-%COMP%]   .middle-grid-item[_ngcontent-%COMP%], .table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{display:flex}.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%], .table-header[_ngcontent-%COMP%]   .table-head[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(var(--bs-columns, 8),1fr);gap:var(--bs-gap, 0)}.optionSide-single[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{grid-template-columns:repeat(var(--bs-columns, 1),1fr)}.optionSide-single[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{grid-template-columns:repeat(var(--bs-columns, 7),1fr)}.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{background-color:var(--color-principal)}.right[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]:first-child{border-right:1px solid transparent}.left[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]:first-child{border-left:1px solid transparent}.left[_ngcontent-%COMP%]   .table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .grid-item.cell-pinned[_ngcontent-%COMP%]:after{left:unset;right:0;box-shadow:inset 10px 0 8px -8px #0003;transform:translate(100%)}.grid-item[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center;text-align:right;min-width:95px}.grid-item[_ngcontent-%COMP%]:first-child{min-width:110px}.grid-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0;align-items:center;display:flex;flex:1;justify-content:center;width:100%;padding:0 5px}.stock-bar[_ngcontent-%COMP%]{position:relative;align-items:center;display:flex;height:36px}.middle-table[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:36px}.middle-table[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]   .middle-grid-item[_ngcontent-%COMP%]{background-color:var(--color-principal-2x);border-style:solid;border-width:0 1px}.upper-content[_ngcontent-%COMP%]   .middle-table[_ngcontent-%COMP%]   .middle-row[_ngcontent-%COMP%]:last-child   .middle-grid-item[_ngcontent-%COMP%]{border-bottom:1px solid;border-color:var(--bs-tertiary-color)!important}.optionSide-single[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:none}.optionSide-single[_ngcontent-%COMP%]   .stock-bar[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-right:109px!important;left:0!important}.chain-table[_ngcontent-%COMP%]   .stock-bar[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{left:-50%;margin-right:-42.5px}.table-row.item-hover[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%], .table-row.item-hover[_ngcontent-%COMP%]   .middle-grid-item[_ngcontent-%COMP%], .middle-row.item-hover[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%], .middle-row.item-hover[_ngcontent-%COMP%]   .middle-grid-item[_ngcontent-%COMP%]{background-color:rgba(var(--bs-global-rgb),.1)!important}.table-row.item-selected[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%], .table-row.item-selected[_ngcontent-%COMP%]   .middle-grid-item[_ngcontent-%COMP%], .middle-row.item-selected[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%], .middle-row.item-selected[_ngcontent-%COMP%]   .middle-grid-item[_ngcontent-%COMP%]{background-color:rgba(var(--bs-global-rgb),.1)!important;border-style:solid!important;border-top-color:var(--bs-global)!important;border-bottom-color:var(--bs-global)!important;border-top-width:1px!important;border-bottom-width:1px!important}.table-row.item-selected[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%], .middle-row.item-selected[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{border-left-width:0!important;border-right-width:0!important}.middle-row.left-select[_ngcontent-%COMP%]   .middle-grid-item[_ngcontent-%COMP%]{border-right-color:var(--bs-global)}.middle-row.right-select[_ngcontent-%COMP%]   .middle-grid-item[_ngcontent-%COMP%]{border-left-color:var(--bs-global)}.triangle-left[_ngcontent-%COMP%]{position:absolute!important;left:-24px!important;width:0;height:0;border-width:17px 12px;border-style:solid;border-color:transparent}.row-otm-even[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{background-color:#5d9cec0f!important}.row-otm-odd[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]{background-color:#5d9cec29!important}
/*# sourceMappingURL=option-chain.component-S3MNZZ2T.css.map */`],
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var gr = "bg-danger"
  , _r = "bg-global";
var vs = "bg-pink_rose"
  , vr = "bg-global-700";
var fr = class {
}
  , il = class extends fr {
}
;
var nl = class {
}
;
var G = function(n) {
    return n[n.ArzeAvalie = 1] = "ArzeAvalie",
    n[n.Goshayesh = 2] = "Goshayesh",
    n[n.TavaghofNamad = 3] = "TavaghofNamad",
    n[n.PazireNevisi = 4] = "PazireNevisi",
    n[n.DamaneMojaz = 5] = "DamaneMojaz",
    n[n.Omde = 6] = "Omde",
    n[n.SarResid = 7] = "SarResid",
    n[n.BazGoshayi = 8] = "BazGoshayi",
    n[n.Ettelaeeye = 9] = "Ettelaeeye",
    n[n.Bazargardani = 10] = "Bazargardani",
    n[n.Haraj = 11] = "Haraj",
    n[n.RafeeGere = 12] = "RafeeGere",
    n[n.Other = 1e3] = "Other",
    n[n.EstefadeNashode = 1001] = "EstefadeNashode",
    n[n.Maskan = 1002] = "Maskan",
    n[n.Energy = 1003] = "Energy",
    n[n.NotConfirm = 1004] = "NotConfirm",
    n[n.Codal = 1005] = "Codal",
    n[n.Mofid = 1006] = "Mofid",
    n
}(G || {})
  , te = function(n) {
    return n[n.MarketMessage = 0] = "MarketMessage",
    n[n.ImmediateMessage = 1] = "ImmediateMessage",
    n[n.LoginMessage = 2] = "LoginMessage",
    n[n.MofidMessage = 3] = "MofidMessage",
    n[n.UserMessage = 4] = "UserMessage",
    n[n.CodalMessage = 5] = "CodalMessage",
    n
}(te || {});
var h4 = {
    "\u0639\u0631\u0636\u0647 \u0627\u0648\u0644\u06CC\u0647": G.ArzeAvalie,
    "\u06AF\u0634\u0627\u06CC\u0634 ": G.Goshayesh,
    "\u062A\u0648\u0642\u0641 ": G.TavaghofNamad,
    "\u067E\u0630\u06CC\u0631\u0647 \u0646\u0648\u06CC\u0633\u06CC": G.PazireNevisi,
    "\u062F\u0627\u0645\u0646\u0647 \u0645\u062C\u0627\u0632": G.DamaneMojaz,
    "\u0639\u0645\u062F\u0647 ": G.Omde,
    "\u0633\u0631\u0631\u0633\u06CC\u062F ": G.SarResid,
    "\u0628\u0627\u0632\u06AF\u0634\u0627\u06CC\u06CC ": G.BazGoshayi,
    "\u0627\u0637\u0644\u0627\u0639\u06CC\u0647 ": G.Ettelaeeye,
    "\u0628\u0627\u0632\u0627\u0631\u06AF\u0631\u062F\u0627\u0646\u06CC ": G.Bazargardani,
    "\u062D\u0631\u0627\u062C ": G.Haraj,
    "\u0631\u0641\u0639 \u06AF\u0631\u0647": G.RafeeGere,
    "\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0646\u0634\u062F\u0647": G.EstefadeNashode,
    "\u0645\u0633\u06A9\u0646 ": G.Other,
    "\u0628\u0648\u0631\u0633 \u0627\u0646\u0631\u0698\u06CC ": G.Energy,
    "\u0639\u062F\u0645 \u062A\u0627\u06CC\u06CC\u062F ": G.NotConfirm
}
  , gh = {
    [G.ArzeAvalie]: "play-box text-success",
    [G.Goshayesh]: "play-box text-success",
    [G.TavaghofNamad]: "stop-box text-danger",
    [G.PazireNevisi]: "play-box text-success",
    [G.DamaneMojaz]: "play-box text-success",
    [G.Omde]: "menu-box text-secondary",
    [G.SarResid]: "stop-box text-danger",
    [G.BazGoshayi]: "play-box text-success",
    [G.Ettelaeeye]: "play-box text-success",
    [G.Bazargardani]: "play-box text-success",
    [G.Haraj]: "play-box text-success",
    [G.RafeeGere]: "play-box text-secondary",
    [G.Other]: "menu-box text-secondary",
    [G.EstefadeNashode]: "alert-box text-secondary",
    [G.Energy]: "energy-exchange text-info",
    [G.NotConfirm]: "blocked text-danger",
    [G.Maskan]: "home-box text-secondary",
    [G.Codal]: "codal text-primary-600",
    [G.Mofid]: "mofid-box text-global"
}
  , ol = {
    [G.ArzeAvalie]: {
        iconName: "play-box",
        class: "text-success"
    },
    [G.Goshayesh]: {
        iconName: "play-box",
        class: "text-success"
    },
    [G.TavaghofNamad]: {
        iconName: "stop-box",
        class: "text-danger"
    },
    [G.PazireNevisi]: {
        iconName: "play-box",
        class: "text-success"
    },
    [G.DamaneMojaz]: {
        iconName: "play-box",
        class: "text-success"
    },
    [G.Omde]: {
        iconName: "menu-box",
        class: "text-secondary"
    },
    [G.SarResid]: {
        iconName: "stop-box",
        class: "text-danger"
    },
    [G.BazGoshayi]: {
        iconName: "play-box",
        class: "text-success"
    },
    [G.Ettelaeeye]: {
        iconName: "play-box",
        class: "text-success"
    },
    [G.Bazargardani]: {
        iconName: "play-box",
        class: "text-success"
    },
    [G.Haraj]: {
        iconName: "play-box",
        class: "text-success"
    },
    [G.RafeeGere]: {
        iconName: "play-box",
        class: "text-secondary"
    },
    [G.Other]: {
        iconName: "menu-box",
        class: "text-secondary"
    },
    [G.EstefadeNashode]: {
        iconName: "alert-box",
        class: "text-secondary"
    },
    [G.Energy]: {
        iconName: "energy-exchange",
        class: "text-info"
    },
    [G.NotConfirm]: {
        iconName: "blocked",
        class: "text-danger"
    },
    [G.Maskan]: {
        iconName: "home-box",
        class: "text-secondary"
    },
    [G.Codal]: {
        iconName: "codal",
        class: "text-primary-600"
    },
    [G.Mofid]: {
        iconName: "mofid-box",
        class: "text-global"
    }
}
  , _h = {
    [G.ArzeAvalie]: "bg-success",
    [G.Goshayesh]: "bg-success",
    [G.TavaghofNamad]: "bg-danger",
    [G.PazireNevisi]: "bg-success",
    [G.DamaneMojaz]: "bg-success",
    [G.Omde]: " bg-secondary",
    [G.SarResid]: "bg-danger",
    [G.BazGoshayi]: "bg-success",
    [G.Ettelaeeye]: "bg-success",
    [G.Bazargardani]: "bg-success",
    [G.Haraj]: "bg-success",
    [G.RafeeGere]: " bg-secondary",
    [G.Other]: " bg-secondary",
    [G.EstefadeNashode]: " bg-secondary",
    [G.Energy]: "bg-info",
    [G.NotConfirm]: "bg-danger",
    [G.Maskan]: "bg-secondary",
    [G.Codal]: "bg-primary",
    [G.Mofid]: "bg-global"
};
var sl = n => n?.replace("<p>", "<p class='text-justify'>");
function br(n) {
    return n.includes("\u0639\u0631\u0636\u0647 \u0627\u0648\u0644\u06CC\u0647") ? G.ArzeAvalie : n.includes("\u0628\u0648\u0631\u0633 \u0627\u0646\u0631\u0698\u06CC") ? G.Energy : n.includes("\u0639\u062F\u0645 \u062A\u0627\u06CC\u06CC\u062F") ? G.NotConfirm : n.includes("\u06AF\u0634\u0627\u06CC\u0634") ? G.Goshayesh : n.includes("\u062A\u0648\u0642\u0641") || n.includes("\u062A\u0639\u0644\u06CC\u0642") ? G.TavaghofNamad : n.includes("\u067E\u0630\u06CC\u0631\u0647") ? G.PazireNevisi : n.includes("\u062F\u0627\u0645\u0646\u0647 \u0645\u062C\u0627\u0632") ? G.DamaneMojaz : n.includes("\u0639\u0645\u062F\u0647") ? G.Omde : n.includes("\u0633\u0631\u0631\u0633\u06CC\u062F") ? G.SarResid : n.includes("\u0628\u0627\u0632\u06AF\u0634\u0627\u06CC\u06CC") ? G.BazGoshayi : n.includes("\u0627\u0637\u0644\u0627\u0639\u06CC\u0647") ? G.Ettelaeeye : n.includes("\u0628\u0627\u0632\u0627\u0631\u06AF\u0631\u062F\u0627\u0646\u06CC") ? G.Bazargardani : n.includes("\u062D\u0631\u0627\u062C") ? G.Haraj : n.includes("\u0631\u0641\u0639 \u06AF\u0631\u0647") ? G.RafeeGere : n.includes("\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0646\u0634\u062F\u0647") ? G.EstefadeNashode : n.includes("\u0645\u0633\u06A9\u0646") ? G.Maskan : G.Other
}
function hu(n) {
    return new Date().getTime() - (n?.getTime() ?? 0) > 2e3
}
var Cr = ( () => {
    let s = class s extends Yi {
        get messagesStorageKey() {
            return "messages-" + this.accountService?.userAccountInfo?.value?.customerIsin
        }
        constructor() {
            super(),
            this.lsService = I(Bt),
            this.accountService = I(hn),
            this.authService = I(cs),
            this.notifyService = I(fn),
            this.symbolService = I(pt),
            this.userDeviceService = I(Un),
            this.messagesLsSubject = new at(new nl),
            this.textMessages$ = this.messagesLsSubject.asObservable(),
            this.subscribeToTextMessage(),
            this.lsService.resetLsManually$.pipe(pe(e => e)).subscribe( () => {
                this.subscribeToTextMessage()
            }
            )
        }
        subscribeToTextMessage() {
            this.lsService.subscribeToLs(ze.TextMessage).pipe(pe(e => e.name === je.orderStateNewSchema.meta), D(e => JSON.parse(e.val))).subscribe(e => this.messagesLsSubject.next(e))
        }
        msgTitleFix(e) {
            try {
                e = Wa(e),
                e = this.normalTitleSymbolName(e)
            } catch {} finally {
                return e.replace("<SUITE>", "")
            }
        }
        normalTitleSymbolName(e) {
            let i = e
              , a = /\(([^)]+)\)/g
              , u = e.match(a);
            if (u) {
                let p = [];
                for (let g of u)
                    if (g.match(/[\d-]/)) {
                        let y = this.symbolService?.symbolByName[g.slice(1, -2)];
                        y ? p.push("(" + y.symbolName + ")") : p.push(g)
                    } else
                        p.push(g);
                u.forEach( (g, y) => {
                    i = i.replace(g, p[y])
                }
                )
            }
            return i
        }
        prepareMessageDetail(e) {
            let i = new il;
            return i.date = ut.getDateWithTimeFromNumber(e.Timestamp.toString()),
            i.title = this.msgTitleFix(e.Title),
            i.body = Wa(e.Body),
            i.id = e.Id ?? e.MessageId,
            i.isins = e?.Isin?.split(","),
            i.isRead = !1,
            i.createDateTime = ut.getDateWithTimeFromNumber(e.Timestamp.toString()),
            i.type = e?.Type,
            i.contentType = br(i.title),
            i.isEnabled = e.IsEnabled ?? !0,
            i
        }
        prepareMofidMessageDetail(e) {
            let i = new fr;
            return i.date = ut.getDateWithTimeFromNumber(e.Timestamp.toString()),
            i.title = this.msgTitleFix(e.Title),
            i.body = sl(Wa(e?.Body ?? "")),
            i.id = e.Id ?? e.MessageId,
            i.isRead = !1,
            i.createDateTime = ut.getDateWithTimeFromNumber(e.Timestamp.toString()),
            i.type = e?.Type,
            i
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var po = n => n.messageState
  , fu = Oe(po, n => [...n.messages].sort( (r, e) => new Date(e.createDateTime).getTime() - new Date(r.createDateTime).getTime()))
  , rl = Oe(fu, n => n.filter(s => s.type === te.MarketMessage))
  , gu = Oe(fu, n => n.filter(s => s.type === te.MarketMessage || s.type === te.ImmediateMessage))
  , al = Oe(rl, n => n.filter(s => !s.isRead))
  , vh = Oe(al, n => n.length)
  , bh = Oe(gu, n => n.filter(s => !s.isRead))
  , Ch = Oe(po, n => n.marketLastUpdateTime)
  , Sh = Oe(po, n => n.mofidLastUpdateTime)
  , yh = Oe(po, n => n.loading)
  , ll = Oe(fu, n => n.filter(s => s.type === te.MofidMessage))
  , bs = Oe(ll, n => n.filter(s => !s.isRead))
  , xh = Oe(bs, n => n.length)
  , _u = Oe(po, n => n.mofidPageState)
  , Ih = Oe(ll, _u, (n, s) => (s.pageNo + 1) * s.pageSize <= n.length)
  , wh = Oe(po, n => n.images)
  , cl = Oe(po, n => n.messages.filter(s => s.type === te.ImmediateMessage))
  , ul = Oe(cl, n => n.filter(s => !s.isRead))
  , Mh = Oe(ul, n => n.length)
  , Th = Oe(bh, bs, (n, s) => [...n, ...s])
  , Dh = n => Oe(cl, s => s.filter(r => r.isins?.includes(n)))
  , Eh = n => Oe(po, s => s.messages.findIndex(r => r.id === n || r.messageId === n))
  , Ph = n => Oe(rl, s => s.filter(r => r.isins.includes(n)))
  , vu = n => Oe(al, s => s.filter(r => r.isins?.includes(n)))
  , kh = n => Oe(ul, s => s.filter(r => r.isins?.includes(n)))
  , Oh = n => Oe(bs, s => s.filter(r => r.isins?.includes(n)))
  , bu = n => Oe(bh, bs, (s, r) => [...s, ...r].filter(e => e.isins?.includes(n)));
var Ui = ( () => {
    let s = class s {
        constructor(e, i, a, u) {
            this.store = e,
            this.positionFacade = i,
            this.portfolioFacadeService = a,
            this.orderStore = u,
            this.marketMessages$ = this.store.select(rl),
            this.marketAndImmediateMessages$ = this.store.select(gu),
            this.unreadMarketMessages$ = this.store.select(al),
            this.unreadMarketMessagesCount$ = this.store.select(vh),
            this.marketLastUpdateTime$ = this.store.select(Ch),
            this.mofidLastUpdateTime$ = this.store.select(Sh),
            this.loading$ = this.store.select(yh),
            this.mofidMessages$ = this.store.select(ll),
            this.unreadMofidMessages$ = this.store.select(bs),
            this.unreadMofidMessagesCount$ = this.store.select(xh),
            this.mofidMessagePageState$ = this.store.select(_u),
            this.mofidMessageHasLoadMore$ = this.store.select(Ih),
            this.mofidMessageImages$ = this.store.select(wh),
            this.immediateMessages$ = this.store.select(cl),
            this.unreadImmediateMessages$ = this.store.select(ul),
            this.unreadImmediateMessagesCount$ = this.store.select(Mh),
            this.orders$ = this.orderStore.getOrders$(),
            this.portfolios$ = this.portfolioFacadeService.getPortfolioItems$(),
            this.userMessages$ = this.marketAndImmediateMessages$.pipe(yt(this.orders$, this.portfolios$, this.positionFacade.getPositionIsins$()), D( ([p,g,y,O]) => {
                let j = g?.map(_e => _e.symbolIsin) || []
                  , Z = y?.map(_e => _e.symbolIsin) || []
                  , xe = j.concat(Z, O);
                return p.filter(_e => xe.some(Ne => _e.isins?.includes(Ne)))
            }
            )),
            this.unreadUserMessages$ = this.userMessages$.pipe(D(p => p.filter(g => !g.isRead || !g.isSeen))),
            this.unreadUserImmediateMessages$ = this.unreadUserMessages$.pipe(D(p => p.filter(g => g.type === te.ImmediateMessage))),
            this.unreadUserMessagesCount$ = this.unreadUserMessages$.pipe(D(p => p.length)),
            this.unreadImmediateUserMessagesCount$ = this.unreadUserImmediateMessages$.pipe(D(p => p.length)),
            this.unreadMessages$ = this.store.select(Th),
            this.unreadMessageState$ = this.unreadImmediateMessagesCount$.pipe(yt(this.unreadImmediateUserMessagesCount$, this.unreadUserMessagesCount$, this.unreadMarketMessagesCount$, this.unreadMofidMessagesCount$), D( ([p,g,y,O,j]) => g ? this.prepareMessageState(vs, y, te.UserMessage) : p ? this.prepareMessageState(gr, p, te.ImmediateMessage) : y ? this.prepareMessageState(vs, y, te.UserMessage) : j ? this.prepareMessageState(vr, j, te.MofidMessage) : this.prepareMessageState(_r, O, te.MarketMessage))),
            this.unreadMessageState = q(this.unreadMessageState$),
            this.getUnreadMessages$ = {
                [te.MarketMessage]: this.unreadMarketMessages$,
                [te.ImmediateMessage]: this.unreadImmediateMessages$,
                [te.UserMessage]: this.unreadUserMessages$,
                [te.MofidMessage]: this.unreadMofidMessages$,
                [te.LoginMessage]: he([]),
                [te.CodalMessage]: he([])
            },
            this.getMessagesState = {
                [te.MarketMessage]: _r,
                [te.ImmediateMessage]: gr,
                [te.UserMessage]: vs,
                [te.MofidMessage]: vr,
                [te.LoginMessage]: "",
                [te.CodalMessage]: ""
            }
        }
        getImmediateMessagesBySymbolIsin$(e) {
            return this.store.select(Dh(e))
        }
        getImmediateMessagesCountBySymbolIsin$(e) {
            return this.getImmediateMessagesBySymbolIsin$(e).pipe(D(i => !!i.length))
        }
        getUnreadMarketMessagesBySymbolIsin$(e) {
            return this.store.select(vu(e))
        }
        getUnreadMarketMessagesCountBySymbolIsin$(e) {
            return this.getUnreadMarketMessagesBySymbolIsin$(e).pipe(D(i => i.length))
        }
        getUnreadImmediateMessagesCountBySymbol$(e) {
            return this.store.select(kh(e)).pipe(D(i => i.length))
        }
        getUnreadMofidMessagesCountBySymbolIsin$(e) {
            return this.store.select(Oh(e)).pipe(D(i => i.length))
        }
        getUnreadMessagesCountBySymbolIsin$(e) {
            return this.store.select(bu(e)).pipe(D(i => i.length))
        }
        getUnreadMessagesStateBySymbolIsin$(e) {
            return this.store.select(bu(e)).pipe(D(i => i.groupBy("type")), D(i => Object.entries(i).map( ([a,u]) => ({
                type: a,
                count: u.length,
                state: this.getMessagesState[a]
            }))), D(i => i.filter(a => a.count > 0).first()))
        }
        getMessageIndexById(e) {
            return ii(this, null, function*() {
                return yield gi(this.store.select(Eh(e)))
            })
        }
        getMessagesBySymbol(e) {
            return ii(this, null, function*() {
                return yield gi(this.store.select(Ph(e)))
            })
        }
        getUnreadMessagesBySymbol(e) {
            return ii(this, null, function*() {
                return yield gi(this.store.select(vu(e)))
            })
        }
        prepareMessageState(e, i, a) {
            return {
                state: e,
                count: i,
                messageType: a
            }
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(Ye(ai),Ye(_n),Ye(T0),Ye(Ka))
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var Cs = ( () => {
    let s = class s extends Cr {
        constructor() {
            super(...arguments),
            this.portfolioService = I(M0),
            this.orderStore = I(Ka),
            this.messageStore = I(Ui),
            this.createMofidUrl = () => this.userDeviceService.deviceType === $n.Desktop ? "desktop-mofid-messages" : "mobile-mofid-messages"
        }
        get(e) {
            let i = new Date(e);
            i.setHours(0, 0, 0);
            let a = new Date(e);
            a.setHours(23, 59, 59);
            let u = {
                from: i,
                to: a
            };
            return this.httpService.post(`${this.mtsPath + this.apiUrls.easy}textmessage/user-messages`, {
                body: u
            }).pipe(D(p => p.map(g => {
                let y = this.msgTitleFix(g.title);
                return J(B({}, g), {
                    title: y,
                    contentType: br(y)
                })
            }
            )))
        }
        getMessagesHistoryForIsin(e) {
            let i = new Date;
            i.setMonth(i.getMonth() - 1),
            i.setHours(0, 0, 0);
            let a = new Date;
            a.setHours(23, 59, 59);
            let u = {
                type: te.MarketMessage,
                from: i,
                to: a,
                isin: e
            };
            return this.httpService.post(`${this.mtsPath + this.apiUrls.easy}textmessage/user-messages`, {
                body: u
            }).pipe(D(p => p.filter(g => !g.body.startsWith("d"))), D(p => (p.forEach(g => {
                g.title = this.msgTitleFix(g.title),
                g.contentType = br(g.title)
            }
            ),
            p)))
        }
        getMofidMessage(e) {
            let i = new Ua;
            return i = i.append("pageSize", e.pageSize),
            i = i.append("pageNo", e.pageNo),
            e.symbolIsin && (i = i.append("symbolIsin", e.symbolIsin)),
            this.httpService.get(`${this.mtsPath + this.apiUrls.easy}textmessage/${this.createMofidUrl()}`, {
                options: {
                    params: i
                }
            }).pipe(D(a => a.map(u => J(B({}, u), {
                type: te.MofidMessage,
                body: sl(u?.body ?? ""),
                contentType: G.Mofid
            }))), D(a => a))
        }
        getImage(e) {
            return this.httpService.getBlob(`${this.mtsPath + this.apiUrls.easy}media/${e}`, {
                responseType: "blob"
            })
        }
        readMessages(e) {
            if (!e?.length)
                return he(null);
            let i = {
                messageIds: e
            };
            return e.length > 0 ? this.httpService.post(`${this.mtsPath + this.apiUrls.easy}textmessage/read-message`, {
                body: i
            }) : he(null)
        }
        subscribeToLs() {
            return this.textMessages$.pipe(pe(e => e?.Body != null), D(e => {
                if (e?.Body)
                    return e?.Type == te.MofidMessage ? this.prepareMofidMessageDetail(e) : this.prepareMessageDetail(e)
            }
            ))
        }
    }
    ;
    s.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = oi(s)))(a || s)
        }
    }
    )(),
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var dl = ( () => {
    let s = class s extends Cr {
        constructor(e) {
            super(),
            this.messageService = e
        }
        getMessagesHistoryForIsin(e) {
            return this.messageService.getMessagesHistoryForIsin(e)
        }
        getMofidMessages(e) {
            return this.messageService.getMofidMessage(e)
        }
        getImage(e) {
            return this.messageService.getImage(e)
        }
        getCodalMessages(e) {
            let i = new Ua;
            return i = i.append("isin", e),
            this.httpService.get(`${this.mtsPath + this.apiUrls.easy}symbol-analysis/filings`, {
                options: {
                    params: i
                }
            }).pipe(D(a => a.map(u => J(B({}, u), {
                createDateTime: ut.jDateToDate(u.date),
                type: te.CodalMessage,
                contentType: G.Codal
            }))))
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(Ye(Cs))
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac
    });
    let n = s;
    return n
}
)();
var Ss = ( () => {
    let s = class s {
        constructor() {
            this.messagesSubject = new at([]),
            this.messages$ = this.messagesSubject.asObservable(),
            this.symbolMessageGroupBy = [D(e => e.map(i => J(B({}, i), {
                groupDate: new Date(i.createDateTime).toDateString()
            }))), D(e => e.groupBy("groupDate")), D(e => Object.entries(e).map( ([i,a]) => ({
                key: i,
                value: a
            }))), D(e => e.sort( (i, a) => new Date(a.key).getTime() - new Date(i.key).getTime())), D(e => e.filter(i => new Date(i.key) > new Date(new Date().setFullYear(new Date().getFullYear() - 1))))],
            this.getMessages$ = e => this.messages$.pipe(D(i => i.filter(a => a.type === (e ?? a.type))), _p.apply(this, this.symbolMessageGroupBy)),
            this.hasMofidMessage$ = this.getMessages$(te.MofidMessage).pipe(D(e => !!e?.length)),
            this.setMessages = e => {
                this.messagesSubject.next(e)
            }
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac
    });
    let n = s;
    return n
}
)();
var ie = as({
    source: "Message",
    events: {
        loadAll: mt(),
        load: Te(),
        loading: Te(),
        loadMofid: Te(),
        loadingMofid: Te(),
        loadMofidImage: Te(),
        loadMoreMofid: mt(),
        loaded: mt(),
        loadedError: mt(),
        loadHistory: Te(),
        set: Te(),
        setMofidMessages: Te(),
        read: Te(),
        readByIds: Te(),
        seenMessage: Te(),
        seenMessageByIsin: Te(),
        hasSeen: mt(),
        hasRead: Te(),
        seen: mt(),
        delete: Te(),
        add: Te(),
        update: Te(),
        updated: mt(),
        addImage: Te(),
        setImages: Te(),
        subscribeToLs: mt()
    }
});
var ci = ( () => {
    let s = class s {
        get messagesStorageKey() {
            return "messages-" + this.accountService?.userAccountInfo?.value?.customerIsin
        }
        get deviceMenuRoot() {
            return this.userDeviceService.getDeviceMenuRoot()
        }
        constructor(e, i, a, u, p, g, y, O, j, Z, xe) {
            this.store = e,
            this.messageStore = i,
            this.messageService = a,
            this.accountService = u,
            this.symbolService = p,
            this.localStorageService = g,
            this.userDeviceService = y,
            this.notificationService = O,
            this.userService = j,
            this.authService = Z,
            this.router = xe,
            this.messagesTapsPerType = {
                [te.ImmediateMessage]: Vn.Immediate,
                [te.MofidMessage]: Vn.Mofid,
                [te.UserMessage]: Vn.Portfolio,
                [te.MarketMessage]: Vn.Broker,
                [te.LoginMessage]: void 0,
                [te.CodalMessage]: void 0
            },
            this.messagesRoutePerTab = {
                [Vn.Immediate]: () => `${this.deviceMenuRoot}/${_t.IMMEDIATE_MESSAGE_ROUTE}`,
                [Vn.Mofid]: () => `${this.deviceMenuRoot}/${_t.MOFID_MESSAGE_ROUTE}`,
                [Vn.Portfolio]: () => `${this.deviceMenuRoot}/${_t.PORTFOLIO_MESSAGE_ROUTE}`,
                [Vn.Broker]: () => `${this.deviceMenuRoot}/${_t.MESSAGES_ROUTE}`
            },
            this.notifiedLsMessagesIds = new Set,
            this.stockChanged = new ue,
            this.sameLoginUuids = [],
            this.messageCountObs$ = this.messageStore.userMessages$.pipe(D(_e => {
                let Ne = new Map;
                return _e.forEach(Re => {
                    Re.isins?.forEach($e => {
                        let Xe = Ne.get($e) || 0;
                        Ne.set($e, Xe + 1)
                    }
                    )
                }
                ),
                Ne
            }
            )),
            this.userService.userChecked$.pipe(Ze(_e => _e), Q( () => this.loadNotifiedLsMessagesIdsFromStorage())).subscribe()
        }
        loadAllMessageTypes() {
            this.loadMessages(),
            this.loadMofidMessages()
        }
        loadMessages(e) {
            e === te.MofidMessage ? this.store.dispatch(ie.loadMofid({
                messageType: e
            })) : this.store.dispatch(ie.load({
                messageType: e
            }))
        }
        loadMofidMessages() {
            this.store.dispatch(ie.loadMofid({}))
        }
        loadMoreMofidMessages() {
            this.store.dispatch(ie.loadMoreMofid())
        }
        loadMofidMessagesImage(e) {
            this.store.dispatch(ie.loadMofidImage({
                imageId: e
            }))
        }
        readMessages(e, i) {
            this.store.dispatch(ie.read({
                messageType: e,
                symbolIsin: i
            }))
        }
        readMessagesByIds(e) {
            this.store.dispatch(ie.readByIds({
                ids: e
            }))
        }
        seenMessageByIsin(e) {
            this.store.dispatch(ie.seenMessageByIsin({
                symbolIsin: e
            }))
        }
        setMessages(e) {
            this.store.dispatch(ie.set({
                messages: e
            }))
        }
        addMessages(e) {
            this.store.dispatch(ie.add({
                message: e
            }))
        }
        subscribeToLs() {
            this.store.dispatch(ie.subscribeToLs())
        }
        deleteMessages(e) {
            this.store.dispatch(ie.delete({
                messageId: e
            }))
        }
        updateMessages(e) {
            this.store.dispatch(ie.update({
                message: e
            }))
        }
        updateStockChange(e) {
            this.stockChanged.next(e)
        }
        getUrlBasedOnUnreadMessage() {
            return this.messageStore.unreadMessageState$.pipe(D(e => this.messagesTapsPerType[e.messageType]), D(e => this.messagesRoutePerTab[e]()))
        }
        getMessagesHistoryForIsin(e) {
            return this.messageService.getMessagesHistoryForIsin(e)
        }
        getStockChange$() {
            return this.stockChanged.asObservable()
        }
        handleLsNotification(e) {
            return ii(this, null, function*() {
                let i = yield gi(this.accountService.userAccountInfo$);
                e && (e.type === te.LoginMessage && e.createDateTime > i.loginDate ? this.notifyUserLogin(e.title) : this.checkMessagesToNotify())
            })
        }
        checkMessagesToNotify() {
            return ii(this, null, function*() {
                (yield gi(this.messageStore.unreadUserImmediateMessages$)).forEach(Z => {
                    let _e = (Z.isins?.map(Ne => this.symbolService.symbolByIsin[Ne]?.symbolName) ?? []).join(", ");
                    _e.length > 15 && (_e = _e?.slice(0, 30) + "..."),
                    this.handleMarketMessageNotification(Z, "\u067E\u06CC\u0627\u0645 \u0641\u0648\u0631\u06CC \u0633\u0647\u0645 " + _e)
                }
                );
                let i = yield gi(this.messageStore.unreadImmediateMessages$.pipe(D(Z => Z?.first())));
                i && !this.notifiedLsMessagesIds.has(i.id) && (this.showNotification({
                    title: "\u067E\u06CC\u0627\u0645 \u0641\u0648\u0631\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F",
                    messageType: _t.IMMEDIATE_MESSAGE_ROUTE
                }),
                this.updateNotificationState(i.id));
                let a = yield gi(this.messageStore.portfolios$.pipe(D(Z => Z?.map(xe => xe.symbolIsin))))
                  , u = yield gi(this.messageStore.unreadMofidMessages$.pipe(D(Z => Z.first())));
                u && !this.notifiedLsMessagesIds.has(u.id) && (this.showNotification({
                    title: "\u067E\u06CC\u0627\u0645 \u0645\u0641\u06CC\u062F \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F",
                    messageType: _t.MOFID_MESSAGE_ROUTE
                }),
                this.updateNotificationState(u.id));
                let p = yield gi(this.messageStore.orders$)
                  , g = p.filter(Z => Z.orderModelType === ou.oms).map(Z => Z.symbolIsin)
                  , y = p.filter(Z => Z.orderModelType === ou.draft).map(Z => Z.symbolIsin)
                  , O = yield gi(this.messageStore.unreadUserMessages$)
                  , j = {
                    draftIsins: y,
                    omsOrderIsins: g,
                    portfolioIsins: a
                };
                for (let Z of O) {
                    let {portfolioIsins: xe, omsOrderIsins: _e, draftIsins: Ne} = this.filteredIsinsByMessageIsins(j, Z.isins);
                    xe?.length && this.handleSymbolMessageNotification(Z, xe, "\u067E\u06CC\u0627\u0645 \u0646\u0627\u0638\u0631 \u0633\u0647\u0645", "\u0633\u0647\u0645 \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u067E\u0631\u062A\u0641\u0648\u06CC"),
                    _e?.length && this.handleSymbolMessageNotification(Z, _e, "\u067E\u06CC\u0627\u0645 \u0646\u0627\u0638\u0631 \u0633\u0647\u0645", "\u0633\u0647\u0645 \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u0644\u06CC\u0633\u062A \u0633\u0641\u0627\u0631\u0634\u200C\u0647\u0627"),
                    Ne?.length && this.handleSymbolMessageNotification(Z, Ne, "\u067E\u06CC\u0627\u0645 \u0646\u0627\u0638\u0631 \u0633\u0647\u0645", "\u0633\u0647\u0645 \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u0644\u06CC\u0633\u062A \u067E\u06CC\u0634 \u0646\u0648\u06CC\u0633 \u0647\u0627")
                }
            })
        }
        getTabBasedOnUnreadMessageAsync() {
            return ii(this, null, function*() {
                let e = yield gi(this.messageStore.unreadMessageState$);
                return this.messagesTapsPerType[e.messageType]
            })
        }
        handleSymbolMessageNotification(e, i, a, u) {
            for (let p of i ?? []) {
                let g = this.symbolService.symbolByIsin[p];
                g && e?.isins?.indexOf(p) >= 0 && this.handleMarketMessageNotification(e, `${a} ${g?.symbolName ?? ""}`, u)
            }
        }
        filteredIsinsByMessageIsins(e, i) {
            return {
                portfolioIsins: e?.portfolioIsins?.filter(a => i?.includes(a)),
                omsOrderIsins: e?.omsOrderIsins?.filter(a => i?.includes(a)),
                draftIsins: e?.draftIsins?.filter(a => i?.includes(a))
            }
        }
        handleMarketMessageNotification(e, i, a) {
            this.notifiedLsMessagesIds.has(e.id) || this.showNotification({
                title: i,
                body: a ?? "",
                messageType: _t.PORTFOLIO_MESSAGE_ROUTE
            }),
            this.notifiedLsMessagesIds.has(e.id) || this.updateNotificationState(e.id)
        }
        updateNotificationState(e, i=0) {
            i ? this.notifiedLsMessagesIds.delete(e) : this.notifiedLsMessagesIds.add(e),
            this.addLsNotificationIdsToStorage(this.notifiedLsMessagesIds)
        }
        addLsNotificationIdsToStorage(e) {
            let i = {
                date: new Date,
                notifiedMessageIds: Array.from(e)
            };
            this.localStorageService.setItem(this.messagesStorageKey, JSON.stringify(i))
        }
        loadNotifiedLsMessagesIdsFromStorage() {
            let e = JSON.parse(this.localStorageService.getItem(this.messagesStorageKey))
              , i = new Date(new Date().setHours(0, 0, 0, 0));
            e && new Date(e.date) > i && e.notifiedMessageIds ? this.notifiedLsMessagesIds = new Set(e.notifiedMessageIds) : this.addLsNotificationIdsToStorage(this.notifiedLsMessagesIds)
        }
        getMessageOption(e) {
            return e.messageType == _t.IMMEDIATE_MESSAGE_ROUTE ? {
                notifType: dt.danger,
                url: this.userDeviceService.getDeviceMenuRoot() + `/${_t.IMMEDIATE_MESSAGE_ROUTE}`
            } : e.messageType == _t.MOFID_MESSAGE_ROUTE ? {
                notifType: dt.globalSecondary,
                url: this.userDeviceService.getDeviceMenuRoot() + `/${_t.MOFID_MESSAGE_ROUTE}`
            } : e.messageType == _t.PORTFOLIO_MESSAGE_ROUTE ? {
                notifType: dt.pinkRose,
                url: this.userDeviceService.getDeviceMenuRoot() + `/${_t.PORTFOLIO_MESSAGE_ROUTE}`
            } : {
                notifType: dt.info,
                url: this.getDeviceEndRootPath(e?.isin ?? "")
            }
        }
        getDeviceEndRootPath(e) {
            return `${this.userDeviceService.deviceType == $n.Mobile ? "/" + e0.STOCK_DETAILS_MESSAGES_ROUTE + "/" + e : "/" + _t.PORTFOLIO_MESSAGE_ROUTE}`
        }
        showNotification(e) {
            let {notifType: i, url: a} = this.getMessageOption(e);
            this.notificationService.alert(e.title, i, !1, a),
            this.notificationService.notif({
                title: e.title,
                body: e.body ?? "",
                defaultUrl: a
            })
        }
        notifyUserLogin(e) {
            let i = {
                title: "\u0627\u06CC\u0632\u06CC \u062A\u0631\u06CC\u062F\u0631",
                body: "\u0644\u0627\u06AF\u06CC\u0646 \u0647\u0645\u0632\u0645\u0627\u0646 \u0628\u0647 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627",
                defaultUrl: this.userDeviceService.getDeviceMenuRoot() + `/${_t.ACCOUNT_ACTIVITY_ROUTE}`
            };
            !e.includes(this.authService.msgSenderUniqId) && !this.sameLoginUuids.includes(e) && (this.sameLoginUuids.push(e),
            this.notificationService.alert("\u0644\u0627\u06AF\u06CC\u0646 \u0647\u0645\u0632\u0645\u0627\u0646 \u0628\u0647 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627", dt.warning, !1, this.userDeviceService.getDeviceMenuRoot() + `/${_t.ACCOUNT_ACTIVITY_ROUTE}`),
            this.notificationService.notif(i),
            this.accountService.accountActivitySeen(!1))
        }
        getUnreadMessageState$() {
            return this.messageStore.unreadMessageState$
        }
        getUnreadMessageState() {
            return this.messageStore.unreadMessageState()
        }
        getUnreadMessagesCountBySymbolIsin$(e) {
            return this.messageStore.getUnreadMessagesCountBySymbolIsin$(e)
        }
        getUnreadMarketMessagesCountBySymbolIsin$(e) {
            return this.messageStore.getUnreadMarketMessagesCountBySymbolIsin$(e)
        }
        getImmediateMessagesCountBySymbolIsin$(e) {
            return this.messageStore.getImmediateMessagesCountBySymbolIsin$(e)
        }
        getUnreadMofidMessagesCountBySymbolIsin$(e) {
            return this.messageStore.getUnreadMofidMessagesCountBySymbolIsin$(e)
        }
        getUnreadImmediateMessagesCountBySymbol$(e) {
            return this.messageStore.getUnreadImmediateMessagesCountBySymbol$(e)
        }
        getImmediateMessagesBySymbolIsin$(e) {
            return this.messageStore.getImmediateMessagesBySymbolIsin$(e)
        }
        getUnreadMessagesStateBySymbolIsin$(e) {
            return this.messageStore.getUnreadMessagesStateBySymbolIsin$(e)
        }
        countPortfolioMarketMessagesForSymbol(e) {
            return ii(this, null, function*() {
                return (yield this.messageStore.getUnreadMessagesBySymbol(e)).length
            })
        }
        subscribeForActiveSymbol() {
            this.getStockChange$().subscribe(e => {
                e?.length > 0 && this.router.navigate(["/stock-details", e])
            }
            )
        }
        getMarketLastUpdateTime$() {
            return this.messageStore.marketLastUpdateTime$
        }
        getMofidLastUpdateTime$() {
            return this.messageStore.mofidLastUpdateTime$
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(Ye(ai),Ye(Ui),Ye(Cs),Ye(hn),Ye(pt),Ye(pn),Ye(Un),Ye(fn),Ye(f0),Ye(cs),Ye(oo))
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var S2 = ( () => {
    let s = class s {
        constructor(e, i, a, u, p) {
            this.actions$ = e,
            this.store = i,
            this.messageService = a,
            this.messageFacade = u,
            this.timeService = p,
            this.loadMessages$ = it( () => this.actions$.pipe(We(ie.load), Ei(this.store.marketLastUpdateTime$), fe( ([g,y]) => hu(y) ? he(ie.loading(g)) : he(ie.loaded())), tt( () => he(ie.loadedError())))),
            this.loadMofidMessages$ = it( () => this.actions$.pipe(We(ie.loadMofid), Ei(this.store.mofidLastUpdateTime$), Ei(this.store.mofidMessagePageState$), fe( ([[g,y],O]) => hu(y) ? he(ie.loadingMofid({
                messageType: g.messageType,
                pageState: O
            })) : he(ie.loaded())), tt( () => he(ie.loadedError())))),
            this.loadMoreMofidMessages$ = it( () => this.actions$.pipe(We(ie.loadMoreMofid), Ei(this.store.mofidMessagePageState$), fe( ([g,y]) => he(ie.loadingMofid(J(B({}, g), {
                messageType: te.MofidMessage,
                pageState: J(B({}, y), {
                    pageNo: y.pageNo + 1
                })
            })))), tt( () => he(ie.loadedError())))),
            this.loadingMessages$ = it( () => this.actions$.pipe(We(ie.loading), eo(g => this.timeService.serverTime$.pipe(Ze(Boolean), fe(y => this.messageService.get(y).pipe(D(O => O.map(j => J(B({}, j), {
                isSeen: j.isRead
            }))), D(O => ie.set({
                messages: O,
                messageType: g.messageType
            })), tt( () => he(ie.loadedError())))))), tt( () => he(ie.loadedError())))),
            this.loadingMofidMessages$ = it( () => this.actions$.pipe(We(ie.loadingMofid), eo(g => this.messageService.getMofidMessage(g.pageState).pipe(D(y => ie.setMofidMessages(J(B({}, g), {
                messages: y
            }))))), tt( () => he(ie.loadedError())))),
            this.loadMofidImage$ = it( () => this.actions$.pipe(We(ie.loadMofidImage), Ei(this.store.mofidMessageImages$), Qo( ([g,y]) => {
                let O = y?.find(j => j.imageId === g.imageId);
                return O ? he(O).pipe(D( () => ie.setImages({
                    images: [...y]
                }))) : this.messageService.getImage(g.imageId).pipe(fe(j => c0(j)), D(j => ie.addImage({
                    image: {
                        imageId: g.imageId,
                        data: j
                    }
                })))
            }
            ), tt( () => he(ie.loadedError())))),
            this.setMessages$ = it( () => this.actions$.pipe(We(ie.set), Q(g => {
                g.messageType == null && this.messageFacade.checkMessagesToNotify()
            }
            ), D(g => g.messageType == null ? ie.loaded() : ie.read({
                messageType: g.messageType
            })), tt( () => he(ie.loadedError())))),
            this.setMofidMessages$ = it( () => this.actions$.pipe(We(ie.setMofidMessages), Q(g => {
                g.messageType == null && this.messageFacade.checkMessagesToNotify()
            }
            ), D(g => g.messageType ? ie.read({
                messageType: g.messageType
            }) : ie.loaded()), tt( () => he(ie.loadedError())))),
            this.readMessages$ = it( () => this.actions$.pipe(We(ie.read), yt([this.store.marketLastUpdateTime$.pipe(Ze(Boolean)), this.store.mofidLastUpdateTime$.pipe(Ze(Boolean))]), eo( ([g]) => (this.store.getUnreadMessages$[g.messageType] ?? this.store.unreadMessages$).pipe(Tt(1), D(O => g.symbolIsin ? O.filter(j => j?.isins?.includes(g.symbolIsin)) : O), fe(O => {
                let j = O.map(Z => Z.id);
                return this.messageService.readMessages(j).pipe(D( () => ie.hasRead({
                    ids: j
                })))
            }
            ))))),
            this.readMessagesByIds$ = it( () => this.actions$.pipe(We(ie.readByIds), eo(g => this.messageService.readMessages(g.ids).pipe(D( () => ie.hasRead({
                ids: g.ids
            })))))),
            this.updateMessage$ = it( () => this.actions$.pipe(We(ie.update), Q(g => this.messageFacade.handleLsNotification(g.message))), {
                dispatch: !1
            }),
            this.seenMessage$ = it( () => this.actions$.pipe(We(ie.hasRead), Ei(this.store.unreadUserMessages$), D( ([g,y]) => g.messageType === te.UserMessage ? ie.seenMessage({
                ids: y.map(O => O.id)
            }) : ie.hasSeen()))),
            this.seenMessageByIsin$ = it( () => this.actions$.pipe(We(ie.seenMessageByIsin), Ei(this.store.marketAndImmediateMessages$), D( ([g,y]) => y.filter(O => O?.isins?.includes(g.symbolIsin))), D(g => ie.seenMessage({
                ids: g.map(y => y.id)
            })))),
            this.subscribeToLs$ = it( () => this.actions$.pipe(We(ie.subscribeToLs), eo( () => this.messageService.subscribeToLs()), Q(g => this.messageFacade.updateNotificationState(g.id, 1)), D(g => ie.update({
                message: g
            }))))
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(Ye(ao),Ye(Ui),Ye(Cs),Ye(ci),Ye(ns))
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)()
  , xP = [S2];
var Fh = {
    messages: [],
    images: [],
    loading: !1,
    mofidPageState: {
        pageNo: 0,
        pageSize: 10
    }
};
function Rh(n, s) {
    return y2(n, s)
}
var y2 = ls(Fh, Ve(ie.loading, n => J(B({}, n), {
    loading: !0
})), Ve(ie.loadMofid, n => J(B({}, n), {
    mofidPageState: Fh.mofidPageState
})), Ve(ie.loadingMofid, n => J(B({}, n), {
    loading: !0
})), Ve(ie.set, (n, {messages: s}) => {
    let r = n.messages.filter(e => e.type == te.MofidMessage);
    return J(B({}, n), {
        messages: [...s, ...r],
        loading: !1,
        marketLastUpdateTime: new Date
    })
}
), Ve(ie.setMofidMessages, (n, {messages: s, pageState: r}) => {
    let e = s.map(u => u.id)
      , i = n.messages.filter(u => !e.includes(u.id))
      , a = n.messages.filter(u => u.type !== te.MofidMessage);
    return J(B({}, n), {
        messages: r.pageNo == 0 ? [...s, ...a] : [...s, ...i],
        loading: !1,
        mofidLastUpdateTime: new Date,
        mofidPageState: r
    })
}
), Ve(ie.add, (n, {message: s}) => n.messages.findIndex(e => e.id === s.id) < 0 ? J(B({}, n), {
    messages: [s, ...n.messages]
}) : n), Ve(ie.delete, (n, {messageId: s}) => J(B({}, n), {
    messages: n.messages.filter(r => r.id !== s)
})), Ve(ie.update, (n, {message: s}) => n.messages.findIndex(e => e.id === s.id) >= 0 ? J(B({}, n), {
    messages: n.messages.update(s)
}) : J(B({}, n), {
    messages: [s, ...n.messages]
})), Ve(ie.hasRead, (n, {ids: s}) => {
    if (!s?.length)
        return n;
    let r = n.messages.filter(i => s.includes(i.id));
    r = r.map(i => J(B({}, i), {
        isRead: !0
    }));
    let e = n.messages.filter(i => !s.includes(i.id));
    return J(B({}, n), {
        messages: [...r, ...e]
    })
}
), Ve(ie.setImages, (n, {images: s}) => J(B({}, n), {
    images: s
})), Ve(ie.addImage, (n, {image: s}) => J(B({}, n), {
    images: [s, ...n.images]
})), Ve(ie.seenMessage, (n, {ids: s}) => {
    let r = n.messages.filter(a => s.includes(a.id))
      , e = n.messages.filter(a => !s.includes(a.id))
      , i = r.map(a => J(B({}, a), {
        isSeen: !0
    }));
    return J(B({}, n), {
        messages: [...i, ...e]
    })
}
));
var OP = {
    messageState: Rh
};
var ml = ( () => {
    let s = class s {
        constructor(e, i, a, u) {
            this.symbolMessageService = e,
            this.symbolMessageStore = i,
            this.messageFacade = a,
            this.loadingService = u
        }
        loadMessages(e) {
            let i = xp({
                mofidMessages: this.getMofidMessages(e),
                marketMessages: this.getMarketMessages(e),
                immMessages: this.messageFacade.getImmediateMessagesBySymbolIsin$(e).pipe(Tt(1)),
                codalMessages: this.getCodalMessages(e)
            }).pipe(D(a => [...a.marketMessages, ...a.mofidMessages, ...a.immMessages, ...a.codalMessages]), Q(this.symbolMessageStore.setMessages));
            this.loadingService.showLoaderUntilComplete(i).subscribe()
        }
        getMofidMessages(e) {
            return this.symbolMessageService.getMofidMessages({
                pageNo: 0,
                pageSize: 0,
                symbolIsin: e
            }).pipe(D(i => i.filter(a => a.isins?.includes(e))))
        }
        getMarketMessages(e) {
            return this.symbolMessageService.getMessagesHistoryForIsin(e)
        }
        getCodalMessages(e) {
            return this.symbolMessageService.getCodalMessages(e)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(Ye(dl),Ye(Ss),Ye(ci),Ye(is))
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac
    });
    let n = s;
    return n
}
)();
var I2 = n => ({
    cup: n
});
function w2(n, s) {
    if (n & 1 && (h(0, "a", 0),
    k(1, "img", 1),
    f()),
    n & 2) {
        let r, e, i = w(2);
        b("href", (r = i.message()) == null ? null : r.url, On),
        d(),
        b("src", (e = i.messageImage()) == null ? null : e.data, On)
    }
}
function M2(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "a", 2),
        z("click", function() {
            R(r);
            let i = w(2);
            return L(i.navigateByRoute())
        }),
        k(1, "img", 3),
        f()
    }
    if (n & 2) {
        let r, e = w(2);
        d(),
        b("src", (r = e.messageImage()) == null ? null : r.data, On)("ngClass", Fe(2, I2, e.route()))
    }
}
function T2(n, s) {
    if (n & 1 && H(0, w2, 2, 2, "a", 0)(1, M2, 2, 4, "a"),
    n & 2) {
        let r, e, i = w();
        W((r = i.message()) != null && r.url ? 0 : -1),
        d(),
        W((e = i.message()) != null && e.url ? -1 : 1)
    }
}
var pl = ( () => {
    let s = class s {
        constructor(e, i) {
            this.messageFacade = e,
            this.messageStore = i,
            this.message = ee(),
            this.messageImage = q(this.messageStore.mofidMessageImages$.pipe(D(a => a?.find(u => u.imageId === this.message()?.imageId)))),
            Zi( () => {
                this.message()?.imageId && this.messageFacade.loadMofidMessagesImage(this.message()?.imageId)
            }
            )
        }
        navigateByRoute() {
            this.message()?.route
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(nt(ci),nt(Ui))
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["message-image"]],
        inputs: {
            message: [1, "message"]
        },
        decls: 1,
        vars: 1,
        consts: [["target", "_blank", 3, "href"], [1, "img-fluid", "w-100", 3, "src"], [3, "click"], [1, "img-fluid", "w-100", 3, "src", "ngClass"]],
        template: function(i, a) {
            i & 1 && H(0, T2, 2, 2),
            i & 2 && W(a.messageImage() ? 0 : -1)
        },
        dependencies: [Je],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var D2 = ["messageWrapper"]
  , hl = ( () => {
    let s = class s {
        constructor(e, i) {
            this.messageFacade = e,
            this.symbolService = i,
            this.plainDesc = ee(void 0),
            this.messageWrapper = to("messageWrapper"),
            this.maxLength = 30,
            this.symbolService.getSymbols().then(a => {
                this.maxLength = a.map(u => u.symbolIsin.length + 3).sort( (u, p) => p - u)[0]
            }
            ),
            Zi( () => {
                let a = /@/gi
                  , u = this.plainDesc().replace(a, "")
                  , p = this.symbolDetection(u);
                p.setAttribute("style", "white-space: pre-line;text-align: justify"),
                this.messageWrapper().nativeElement.appendChild(p)
            }
            )
        }
        symbolDetection(e) {
            let i = /\([^\d)(]([^()]*[^)]+)?\)/g
              , a = e.match(i);
            if (a === null) {
                let O = document.createElement("div");
                return O.innerHTML = this.extractUrl(es(e)),
                O
            }
            a = a.map(O => ({
                str: O
            }));
            let u, p = 0;
            for (; (u = i.exec(e)) != null; )
                a[p].index = u.index,
                p++;
            let g = document.createElement("div")
              , y = 0;
            return a = a.filter(O => O.str.length <= this.maxLength),
            a === null || a.length === 0 ? g.innerHTML = this.extractUrl(es(e)) : (g.addEventListener("click", O => {
                let j = O.target;
                j.dataset.messageSymbolName && this.messageFacade.updateStockChange(j.dataset.messageSymbolName)
            }
            ),
            a.forEach(O => {
                g.innerHTML += this.extractUrl(es(this.noticeNumberDetection(this.dateDetection(e.substring(y, O.index)))));
                let j = document.createElement("span");
                j.style.margin = "0 0.25em",
                j.innerHTML = es(O.str),
                this.activeSymbolRouting(O.str, j),
                g.appendChild(j),
                y = O.index + O.str.length
            }
            ),
            g.innerHTML += this.extractUrl(es(this.noticeNumberDetection(this.dateDetection(e.substring(y, e.length)))))),
            g
        }
        dateDetection(e) {
            return e.replace(/\d{4}([/.-])\d{2}\1\d{2}/g, i => `<b class='text-success'>${i}</b>`)
        }
        noticeNumberDetection(e) {
            return e.replace(/\d{4}[/][\u0621-\u064A]+[/]\d{2}/g, i => `<b class='text-warning'>${i}</b>`)
        }
        activeSymbolRouting(e, i) {
            let a = l0(e.trim());
            a = a.replace(/\(/g, "").replace(/\)/g, "").trim();
            let u = a[a.length - 2];
            a[a.length - 1] === "1" && (u < "0" || u > "9") && (a = a.replace("1", ""));
            let p = this.symbolService.symbolByName[a];
            p || (p = this.symbolService.symbolByName[a + "1"]),
            p && (i.dataset.messageSymbolName = p.symbolIsin,
            i.style.color = "#007bff",
            i.style.cursor = "pointer",
            i.innerHTML = "(" + p.symbolName + ")")
        }
        extractUrl(e) {
            e += " ";
            let i = /((https?:\/\/|www)[^\s]+(<|\s|()))/g;
            return e.replace(i, u => {
                let p = u
                  , g = p.indexOf("<");
                return p = g > -1 ? p.substr(0, g) : p,
                '<a target="_blank" href="' + (p.includes("http") ? "" : "//") + p + '">' + (g > -1 ? p + "</br>" : p) + "</a>"
            }
            )
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(nt(ci),nt(pt))
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["lib-message-description"]],
        viewQuery: function(i, a) {
            i & 1 && Nn(a.messageWrapper, D2, 5),
            i & 2 && io()
        },
        inputs: {
            plainDesc: [1, "plainDesc"]
        },
        decls: 2,
        vars: 0,
        consts: [["messageWrapper", ""], ["data-cy", "message-item-description", 1, "message-desc-wrapper"]],
        template: function(i, a) {
            i & 1 && k(0, "div", 1, 0)
        },
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var E2 = n => ({
    "rotate-180": n
});
function P2(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 5),
        z("click", function() {
            R(r);
            let i = w();
            return L(i.toggleShowDetail())
        }),
        h(1, "span", 6),
        C(2),
        $(3, "positiveNumber"),
        f(),
        k(4, "svg-icon", 7),
        f()
    }
    if (n & 2) {
        let r = w();
        d(2),
        K(" ", Se(3, 3, r.message().title), " "),
        d(2),
        b("iconName", r.icons.ChevronDown)("ngClass", Fe(5, E2, r.showDetail()))
    }
}
function k2(n, s) {
    if (n & 1 && k(0, "div", 2),
    n & 2) {
        let r, e = w();
        b("innerHTML", (r = e.message()) == null ? null : r.body, Bp)
    }
}
var fl = ( () => {
    let s = class s {
        constructor() {
            this.icons = Ce,
            this.message = ee(void 0),
            this.enableDetailToggle = ee(!0),
            this.showDetail = Ie(!1)
        }
        toggleShowDetail() {
            this.showDetail.update(e => !e)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["message-mofid-item"]],
        inputs: {
            message: [1, "message"],
            enableDetailToggle: [1, "enableDetailToggle"]
        },
        decls: 7,
        vars: 7,
        consts: [[1, "p-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2", "cup"], [1, "message-desc-wrapper", 3, "innerHTML"], [1, "d-flex", "justify-content-between"], [1, "small", "text-muted"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2", "cup", 3, "click"], [1, "fw-bold", "d-block"], ["width", "20", "height", "20", 3, "iconName", "ngClass"]],
        template: function(i, a) {
            if (i & 1 && (h(0, "div", 0),
            H(1, P2, 5, 7, "div", 1)(2, k2, 1, 1, "div", 2),
            h(3, "div", 3)(4, "div", 4),
            C(5),
            $(6, "stringDate"),
            f()()()),
            i & 2) {
                let u;
                d(),
                W(a.enableDetailToggle() ? 1 : -1),
                d(),
                W(a.showDetail() || !a.enableDetailToggle() ? 2 : -1),
                d(3),
                K(" ", Hp(6, 3, (u = a.message()) == null ? null : u.createDateTime, !0, !0), " ")
            }
        },
        dependencies: [Je, Ai, m0, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
function O2(n, s) {
    if (n & 1 && k(0, "message-image", 1),
    n & 2) {
        let r = w(2);
        b("message", r.message())
    }
}
function N2(n, s) {
    if (n & 1 && (h(0, "div", 0),
    H(1, O2, 1, 1, "message-image", 1),
    k(2, "message-mofid-item", 2),
    f()),
    n & 2) {
        let r, e = w();
        d(),
        W((r = e.message()) != null && r.imageId ? 1 : -1),
        d(),
        b("message", e.message())("enableDetailToggle", !1)
    }
}
function A2(n, s) {
    if (n & 1 && k(0, "message-image", 1),
    n & 2) {
        let r = w(2);
        b("message", r.message())
    }
}
function F2(n, s) {
    if (n & 1 && (h(0, "div", 0),
    H(1, A2, 1, 1, "message-image", 1),
    h(2, "div", 3),
    C(3),
    $(4, "positiveNumber"),
    f(),
    k(5, "lib-message-description", 4),
    f()),
    n & 2) {
        let r, e, i, a = w();
        d(),
        W((r = a.message()) != null && r.imageId ? 1 : -1),
        d(2),
        K(" ", Se(4, 3, (e = a.message()) == null ? null : e.title), " "),
        d(2),
        b("plainDesc", (i = a.message()) == null ? null : i.body)
    }
}
function R2(n, s) {
    if (n & 1 && (h(0, "a", 6),
    C(1, " \u06A9\u062F\u0627\u0644 "),
    f()),
    n & 2) {
        let r = w(2);
        b("href", r.message().url, On)
    }
}
function L2(n, s) {
    if (n & 1 && (h(0, "a", 7)(1, "span", 8),
    C(2, "PDF"),
    f(),
    k(3, "svg-icon", 9),
    f()),
    n & 2) {
        let r = w(2);
        b("href", r.message().pdf, On),
        d(3),
        b("iconName", r.icons.Pdf)
    }
}
function B2(n, s) {
    if (n & 1 && (h(0, "a", 6)(1, "span", 8),
    C(2, "EXCEL"),
    f(),
    k(3, "svg-icon", 9),
    f()),
    n & 2) {
        let r = w(2);
        b("href", r.message().exc, On),
        d(3),
        b("iconName", r.icons.Excel)
    }
}
function V2(n, s) {
    if (n & 1 && (h(0, "a", 6),
    C(1, " \u067E\u06CC\u0648\u0633\u062A "),
    k(2, "svg-icon", 9),
    f()),
    n & 2) {
        let r = w(2);
        b("href", r.message().att, On),
        d(2),
        b("iconName", r.icons.Attachment)
    }
}
function $2(n, s) {
    if (n & 1 && (h(0, "div", 0)(1, "div", 3),
    C(2),
    $(3, "positiveNumber"),
    f(),
    h(4, "div", 5),
    H(5, R2, 2, 1, "a", 6)(6, L2, 4, 2, "a", 7)(7, B2, 4, 2, "a", 6)(8, V2, 3, 2, "a", 6),
    f()()),
    n & 2) {
        let r, e = w();
        d(2),
        K(" ", Se(3, 5, (r = e.message()) == null ? null : r.title), " "),
        d(3),
        W(e.message().url ? 5 : -1),
        d(),
        W(e.message().pdf ? 6 : -1),
        d(),
        W(e.message().exc ? 7 : -1),
        d(),
        W(e.message().att ? 8 : -1)
    }
}
var Lh = ( () => {
    let s = class s {
        constructor() {
            this.icons = Ce,
            this.message = ee(),
            this.MessageTypes = te
        }
        downloadPdf(e) {
            window.open(e, "_parent")
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["symbol-messages-item-detail"]],
        inputs: {
            message: [1, "message"]
        },
        decls: 3,
        vars: 2,
        consts: [[1, "px-3", "py-2", "text-justify"], [1, "d-block", "rounded", "overflow-hidden", "mb-3", 3, "message"], [3, "message", "enableDetailToggle"], [1, "fw-bold", "mb-2"], [3, "plainDesc"], [1, "d-flex", "justify-content-between", "gap-2"], ["target", "_blank", 1, "d-flex", "align-items-center", "gap-1", "btn", "btn-outline-global", "flex-grow-1", "justify-content-center", "w-25", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "d-flex", "align-items-center", "gap-1", "btn", "btn-outline-global", "flex-grow-1", "justify-content-center", "w-25", 3, "href"], [1, "position-relative", 2, "top", "2px"], ["width", "18", "height", "18", 3, "iconName"]],
        template: function(i, a) {
            if (i & 1 && H(0, N2, 3, 3, "div", 0)(1, F2, 6, 5, "div", 0)(2, $2, 9, 7, "div", 0),
            i & 2) {
                let u, p;
                W(((u = a.message()) == null ? null : u.type) === a.MessageTypes.MofidMessage ? 0 : ((u = a.message()) == null ? null : u.type) !== a.MessageTypes.CodalMessage ? 1 : -1),
                d(2),
                W(((p = a.message()) == null ? null : p.type) === a.MessageTypes.CodalMessage ? 2 : -1)
            }
        },
        dependencies: [Ai, pl, hl, ye, fl],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var U2 = n => ({
    "rotate-180": n
});
function j2(n, s) {
    if (n & 1 && k(0, "symbol-messages-item-detail", 7),
    n & 2) {
        let r = w();
        b("message", r.message())
    }
}
var Bh = ( () => {
    let s = class s {
        constructor() {
            this.icons = Ce,
            this.message = ee(void 0),
            this.selectedTab = ee(void 0),
            this.showDetails = Ie(!1),
            this.selectedTabType = te
        }
        getIcon(e) {
            return ol[e]
        }
        getIconBackgroundClass(e) {
            return _h[e]
        }
        toggleShowDetails() {
            this.showDetails.update(e => !e)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["symbol-messages-item"]],
        inputs: {
            message: [1, "message"],
            selectedTab: [1, "selectedTab"]
        },
        decls: 12,
        vars: 16,
        consts: [[1, "d-flex", "align-items-center", "p-2", "gap-2", "cup", 3, "click"], [1, "bg-opacity-10", "rounded", "d-flex", "align-items-center", "justify-content-center", "flex-shrink-0", 2, "width", "40px", "height", "40px", 3, "ngClass"], ["width", "18", "height", "18", 3, "iconName"], [1, "overflow-hidden", "flex-grow-1"], [1, "text-truncate", "flex-grow-1"], [1, "text-muted", "small"], ["width", "20", "height", "20", 1, "mr-2", "text-muted", "flex-shrink-0", 3, "iconName", "ngClass"], [3, "message"]],
        template: function(i, a) {
            if (i & 1 && (h(0, "div", 0),
            z("click", function() {
                return a.toggleShowDetails()
            }),
            h(1, "div", 1),
            k(2, "svg-icon", 2),
            f(),
            h(3, "div", 3)(4, "div", 4),
            C(5),
            $(6, "positiveNumber"),
            f(),
            h(7, "div", 5),
            C(8),
            $(9, "date"),
            f()(),
            k(10, "svg-icon", 6),
            f(),
            H(11, j2, 1, 1, "symbol-messages-item-detail", 7)),
            i & 2) {
                let u, p, g, y, O;
                d(),
                b("ngClass", a.getIconBackgroundClass((u = a.message()) == null ? null : u.contentType)),
                d(),
                bi((p = a.getIcon((p = a.message()) == null ? null : p.contentType)) == null ? null : p.class),
                b("iconName", (g = a.getIcon((g = a.message()) == null ? null : g.contentType)) == null ? null : g.iconName),
                d(3),
                K(" ", Se(6, 9, (y = a.message()) == null ? null : y.title), " "),
                d(3),
                K(" \u0632\u0645\u0627\u0646: ", ae(9, 11, (O = a.message()) == null ? null : O.date, "HH:mm"), " "),
                d(2),
                b("iconName", a.icons.ChevronDown)("ngClass", Fe(14, U2, a.showDetails())),
                d(),
                W(a.showDetails() ? 11 : -1)
            }
        },
        dependencies: [Je, Ai, $a, Lh, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var z2 = n => ({
    loading: n
})
  , W2 = (n, s) => ({
    active: n,
    "d-none": s
});
function H2(n, s) {
    if (n & 1 && (h(0, "span"),
    C(1),
    $(2, "positiveNumber"),
    f()),
    n & 2) {
        let r = w().$implicit;
        zt("badge ms-1 ", r.badgeClass, ""),
        d(),
        K(" ", Se(2, 4, r.unreadMessageCount), " ")
    }
}
function G2(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "li", 5),
        z("click", function() {
            let i = R(r).$implicit
              , a = w();
            return L(a.onClickTab(i))
        }),
        h(1, "span", 6),
        C(2),
        H(3, H2, 3, 6, "span", 7),
        f()()
    }
    if (n & 2) {
        let r, e = s.$implicit, i = w();
        d(),
        b("id", e.htmlId)("ngClass", Ln(4, W2, ((r = i.selectedTab()) == null ? null : r.index) === (e == null ? null : e.index), e.isShow === !1)),
        d(),
        K("", e.title, " "),
        d(),
        W(e.unreadMessageCount ? 3 : -1)
    }
}
function q2(n, s) {
    if (n & 1 && (h(0, "div", 12),
    k(1, "symbol-messages-item", 13),
    f()),
    n & 2) {
        let r = s.$implicit
          , e = w(3);
        d(),
        b("selectedTab", e.selectedTab())("message", r)
    }
}
function K2(n, s) {
    if (n & 1 && (h(0, "div", 9),
    k(1, "svg-icon", 10),
    C(2),
    $(3, "jdate"),
    $(4, "positiveNumber"),
    f(),
    h(5, "div", 11),
    qe(6, q2, 2, 2, "div", 12, ct),
    f()),
    n & 2) {
        let r = s.$implicit
          , e = w(2);
        d(),
        b("iconName", e.icons.Calendar),
        d(),
        K(" \u062A\u0627\u0631\u06CC\u062E: ", Se(4, 5, ae(3, 2, r.key, "date")), " "),
        d(4),
        Ke(r.value)
    }
}
function Q2(n, s) {
    if (n & 1 && (h(0, "div", 8),
    k(1, "svg-icon", 14),
    C(2, " \u067E\u06CC\u0627\u0645\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F "),
    f()),
    n & 2) {
        let r = w(2);
        d(),
        b("iconName", r.icons.CommentError)
    }
}
function Z2(n, s) {
    if (n & 1 && (h(0, "div", 4),
    qe(1, K2, 8, 7, null, null, ct),
    H(3, Q2, 3, 1, "div", 8),
    f()),
    n & 2) {
        let r = w();
        d(),
        Ke(r.messages()),
        d(2),
        W(r.loading() === !1 && !r.messages().length ? 3 : -1)
    }
}
var Ak = ( () => {
    let s = class s {
        onClickTab(e) {
            this.selectedTab.set(e)
        }
        constructor(e, i, a, u) {
            this.symbolMessageFacade = e,
            this.messageFacade = i,
            this.symbolMessageStore = a,
            this.loadingService = u,
            this.icons = Ce,
            this.MessageTypes = te,
            this.symbolIsin = ee(""),
            this.loading = q(this.loadingService.loading$),
            this.unreadAllMessages = q(this.messageFacade.getUnreadMessagesCountBySymbolIsin$(this.symbolIsin())),
            this.immediateMessageCount = q(this.messageFacade.getImmediateMessagesCountBySymbolIsin$(this.symbolIsin())),
            this.getUnreadImmediateMessagesCount = q(this.messageFacade.getUnreadImmediateMessagesCountBySymbol$(this.symbolIsin())),
            this.selectedTab = Ie(void 0),
            this.hasMofidMessage = q(this.symbolMessageStore.hasMofidMessage$),
            this.mofidMessageCount = q(this.messageFacade.getUnreadMofidMessagesCountBySymbolIsin$(this.symbolIsin())),
            this.tapItems = kt( () => [{
                index: 0,
                title: "\u0647\u0645\u0647 \u067E\u06CC\u0627\u0645\u200C\u0647\u0627",
                type: null,
                htmlId: "symbol-messages-tab-all",
                bannerClass: "symbol-messages-banner-all",
                badgeClass: _r,
                isShow: !0,
                unreadMessageCount: this.unreadAllMessages()
            }, {
                index: 1,
                title: "\u0646\u0627\u0638\u0631",
                type: te.MarketMessage,
                htmlId: "symbol-messages-tab-nazer",
                bannerClass: "symbol-messages-banner-nazer",
                badgeClass: vs,
                isShow: !0,
                unreadMessageCount: this.unreadAllMessages()
            }, {
                index: 2,
                title: "\u06A9\u062F\u0627\u0644",
                type: te.CodalMessage,
                htmlId: "symbol-messages-tab-kodal",
                bannerClass: "symbol-messages-banner-kodal",
                isShow: !0,
                unreadMessageCount: 0
            }, {
                index: 3,
                title: "\u067E\u06CC\u0627\u0645 \u0641\u0648\u0631\u06CC",
                type: te.ImmediateMessage,
                htmlId: "symbol-messages-tab-mofid",
                bannerClass: "symbol-messages-banner-mofid",
                badgeClass: gr,
                isShow: !!this.immediateMessageCount(),
                unreadMessageCount: this.getUnreadImmediateMessagesCount()
            }, {
                index: 4,
                title: "\u067E\u06CC\u0627\u0645 \u0645\u0641\u06CC\u062F",
                type: te.MofidMessage,
                htmlId: "symbol-messages-tab-mofid",
                bannerClass: "symbol-messages-banner-mofid",
                badgeClass: vr,
                isShow: this.hasMofidMessage(),
                unreadMessageCount$: this.mofidMessageCount()
            }]),
            this.messages = q(st(this.selectedTab).pipe(pe(Boolean), fe(p => this.symbolMessageStore.getMessages$(p?.type).pipe(Q( () => this.messageFacade.readMessages(p?.type, this.symbolIsin())), Q( () => this.messageFacade.seenMessageByIsin(this.symbolIsin())))))),
            q(st(this.symbolIsin).pipe(pe(Boolean), fe(p => this.messageFacade.getUnreadMessagesStateBySymbolIsin$(p).pipe(Tt(1), Q(g => this.onClickTab(this.tapItems()[Y2[g?.type] ?? 0])))))),
            Zi( () => {
                this.symbolIsin() && this.symbolMessageFacade.loadMessages(this.symbolIsin())
            }
            )
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(nt(ml),nt(ci),nt(Ss),nt(is))
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["symbol-messages"]],
        inputs: {
            symbolIsin: [1, "symbolIsin"]
        },
        features: [Qi([ml, Ss, dl, is])],
        decls: 7,
        vars: 6,
        consts: [[1, "tabs-handler", "d-flex", "align-items-center", "flex-shrink-0", "border-top", "border-principal-3x", "p-2", "h-auto", "border-bottom", "border-principal-4x-dark-mobile", "position-sticky", "top-0"], [1, "nav", "nav-tabs", "flex-grow-1"], [1, "nav-item"], [1, "symbol-detail-inset-shadow", "d-flex", "flex-column", "py-2", "h-100", "overflow-hidden", "h-100", "position-relative", 3, "ngClass"], [1, "overflow-auto", "h-100", "px-2"], [1, "nav-item", 3, "click"], [1, "nav-link", 3, "id", "ngClass"], [3, "class"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-muted", "h-100"], [1, "bg-principal-3x", "text-center", "text-muted", "py-1", "position-sticky", "z-1", "small", 2, "top", "0"], ["width", "18", "height", "18", 3, "iconName"], [1, "list-group", "list-group-flush", "bg-principal", "rounded", "mb-1"], [1, "list-group-item", "p-0", "border-principal-3x", "border-principal-4x-dark", "border-principal-7x-dark-mobile", "bg-principal-2x-dark-mobile"], [3, "selectedTab", "message"], ["data-cy", "message-container-empty", "width", "48", "height", "48", 1, "mb-2", 3, "iconName"]],
        template: function(i, a) {
            i & 1 && (h(0, "div", 0)(1, "ul", 1),
            qe(2, G2, 4, 7, "li", 2, ct),
            f()(),
            h(4, "div", 3),
            $(5, "async"),
            H(6, Z2, 4, 1, "div", 4),
            f()),
            i & 2 && (d(2),
            Ke(a.tapItems()),
            d(2),
            b("ngClass", Fe(4, z2, Se(5, 2, a.loadingService.loading$))),
            d(2),
            W(a.messages() ? 6 : -1))
        },
        dependencies: [Ri, Ai, Bh, Je, Va, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)()
  , Y2 = {
    [te.MarketMessage]: 1,
    [te.CodalMessage]: 2,
    [te.ImmediateMessage]: 3,
    [te.MofidMessage]: 4
};
var J2 = (n, s) => s.id;
function X2(n, s) {
    if (n & 1 && (h(0, "div", 0),
    k(1, "svg-icon", 3),
    C(2),
    f()),
    n & 2) {
        let r = w();
        d(),
        b("iconName", r.icons.CommentError),
        d(),
        K(" ", r.emptyMessage(), " ")
    }
}
function ex(n, s) {
    if (n & 1 && k(0, "message-image", 4),
    n & 2) {
        let r = w().$implicit;
        b("message", r)
    }
}
function tx(n, s) {
    if (n & 1 && (h(0, "div", 1),
    H(1, ex, 1, 1, "message-image", 4),
    k(2, "message-mofid-item", 4),
    f()),
    n & 2) {
        let r = s.$implicit;
        d(),
        W(r != null && r.imageId ? 1 : -1),
        d(),
        b("message", r)
    }
}
function ix(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 2)(1, "button", 5),
        z("click", function() {
            R(r);
            let i = w();
            return L(i.loadMore())
        }),
        C(2, "\u0646\u0645\u0627\u06CC\u0634 \u0628\u06CC\u0634\u062A\u0631"),
        f()()
    }
}
var Vh = ( () => {
    let s = class s {
        constructor(e, i) {
            this.messageFacade = e,
            this.messageStore = i,
            this.icons = Ce,
            this._messages = Ie([]),
            this.isMobile = ee(!0),
            this.emptyMessage = ee("\u067E\u06CC\u0627\u0645\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F"),
            this.messages = ee([], {
                transform: a => a.filter(u => u?.title && u?.body)
            }),
            this.mofidMessageHasLoadMore = q(this.messageStore.mofidMessageHasLoadMore$)
        }
        getIcon(e) {
            return gh[e]
        }
        imageTrackBy(e, i) {
            return i?.imageId
        }
        loadMore() {
            this.messageFacade.loadMoreMofidMessages()
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(nt(ci),nt(Ui))
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["mofid-message-data"]],
        inputs: {
            isMobile: [1, "isMobile"],
            emptyMessage: [1, "emptyMessage"],
            messages: [1, "messages"]
        },
        decls: 4,
        vars: 2,
        consts: [[1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-muted", "h-100"], [1, "rounded", "overflow-hidden", "bg-principal", "bg-principal-4x-dark", "mb-2"], [1, "py-3", "text-center"], ["data-cy", "message-container-empty", "width", "48", "height", "48", 1, "mb-2", 3, "iconName"], [3, "message"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]],
        template: function(i, a) {
            i & 1 && (H(0, X2, 3, 2, "div", 0),
            qe(1, tx, 3, 2, "div", 1, J2),
            H(3, ix, 3, 0, "div", 2)),
            i & 2 && (W(a.messages().length ? -1 : 0),
            d(),
            Ke(a.messages()),
            d(2),
            W(a.mofidMessageHasLoadMore() ? 3 : -1))
        },
        dependencies: [pl, fl, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var nx = n => ({
    active: n
});
function ox(n, s) {
    if (n & 1 && (h(0, "span"),
    C(1),
    $(2, "positiveNumber"),
    f()),
    n & 2) {
        let r = w();
        bi("badge ms-1 " + r.badgeClass()),
        d(),
        K(" ", Se(2, 3, r.value), " ")
    }
}
var $h = ( () => {
    let s = class s {
        constructor() {
            this.title = ee(void 0),
            this.type = ee(void 0),
            this.active = ee(!1),
            this.badgeClass = ee(void 0),
            this.reload = Ge(),
            this.subs = []
        }
        ngOnDestroy() {
            this.subs?.forEach(e => e.unsubscribe())
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["message-tab"]],
        inputs: {
            title: [1, "title"],
            value: "value",
            type: [1, "type"],
            active: [1, "active"],
            badgeClass: [1, "badgeClass"]
        },
        outputs: {
            reload: "reload"
        },
        decls: 3,
        vars: 5,
        consts: [[1, "nav-link", 3, "ngClass"], [3, "class"]],
        template: function(i, a) {
            i & 1 && (h(0, "span", 0),
            C(1),
            H(2, ox, 3, 5, "span", 1),
            f()),
            i & 2 && (b("ngClass", Fe(3, nx, a.active())),
            d(),
            K(" ", a.title(), " "),
            d(),
            W(a.value ? 2 : -1))
        },
        dependencies: [Je, Ai],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var sx = n => ({
    "rotate-180": n
});
function rx(n, s) {
    if (n & 1 && (h(0, "div", 5)(1, "div", 6),
    C(2),
    $(3, "positiveNumber"),
    f(),
    k(4, "lib-message-description", 7),
    f()),
    n & 2) {
        let r = w();
        d(2),
        K(" ", Se(3, 2, r.message().title), " "),
        d(2),
        b("plainDesc", r.message().body)
    }
}
var Uh = ( () => {
    let s = class s {
        constructor() {
            this.icons = Ce,
            this.message = ee(void 0),
            this.showDetail = Ie(!1)
        }
        getIcon(e) {
            return e.type === te.ImmediateMessage ? {
                iconName: "alert",
                class: "text-warning"
            } : ol[e?.contentType] ?? {
                iconName: "blank",
                class: "text-secondary"
            }
        }
        toggleShowDetail() {
            this.showDetail.update(e => !e)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["message-container-item"]],
        inputs: {
            message: [1, "message"]
        },
        decls: 11,
        vars: 17,
        consts: [["data-cy", "message-container-item", 1, "row-list__item__header", "d-flex", "align-items-center", "px-2", "py-2", "cup", 3, "click"], ["width", "18", "height", "18", 3, "iconName"], [1, "text-muted", "mx-2"], [1, "text-truncate", "flex-grow-1"], ["width", "20", "height", "20", 1, "ms-2", "text-muted", 3, "iconName", "ngClass"], [1, "px-3", "py-2", "text-justify", "row-list__details"], [1, "fw-bold", "mb-2"], [3, "plainDesc"]],
        template: function(i, a) {
            i & 1 && (h(0, "div", 0),
            z("click", function() {
                return a.toggleShowDetail()
            }),
            k(1, "svg-icon", 1),
            h(2, "span", 2),
            C(3),
            $(4, "date"),
            $(5, "positiveNumber"),
            f(),
            h(6, "div", 3),
            C(7),
            $(8, "positiveNumber"),
            f(),
            k(9, "svg-icon", 4),
            f(),
            H(10, rx, 5, 4, "div", 5)),
            i & 2 && (d(),
            bi(a.getIcon(a.message()).class),
            b("iconName", a.getIcon(a.message()).iconName),
            d(2),
            X(Se(5, 11, ae(4, 8, a.message().date, "HH:mm"))),
            d(4),
            K(" ", Se(8, 13, a.message().title), " "),
            d(2),
            b("iconName", a.icons.ChevronDown)("ngClass", Fe(15, sx, a.showDetail())),
            d(),
            W(a.showDetail() ? 10 : -1))
        },
        dependencies: [Je, Ai, hl, $a, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
function ax(n, s) {
    if (n & 1 && (h(0, "div", 0),
    k(1, "svg-icon", 2),
    C(2),
    f()),
    n & 2) {
        let r = w();
        d(),
        b("iconName", r.icons.CommentError),
        d(),
        K(" ", r.emptyMessage(), " ")
    }
}
function lx(n, s) {
    if (n & 1 && (h(0, "div", 1),
    k(1, "message-container-item", 3),
    f()),
    n & 2) {
        let r = s.$implicit;
        d(),
        b("message", r)
    }
}
var jh = ( () => {
    let s = class s {
        constructor() {
            this.icons = Ce,
            this.messages = ee([]),
            this.emptyMessage = ee("\u067E\u06CC\u0627\u0645\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F")
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["message-container"]],
        inputs: {
            messages: [1, "messages"],
            emptyMessage: [1, "emptyMessage"]
        },
        decls: 3,
        vars: 1,
        consts: [[1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-muted", "h-100"], [1, "bg-principal", "bg-principal-hover", "list-group-item", "p-0"], ["data-cy", "message-container-empty", "width", "48", "height", "48", 1, "mb-2", 3, "iconName"], [3, "message"]],
        template: function(i, a) {
            if (i & 1 && (H(0, ax, 3, 2, "div", 0),
            qe(1, lx, 2, 1, "div", 1, ct)),
            i & 2) {
                let u;
                W((u = a.messages()) != null && u.length ? -1 : 0),
                d(),
                Ke(a.messages())
            }
        },
        dependencies: [Uh, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var cx = n => ({
    loading: n
});
function ux(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "svg-icon", 17),
        z("click", function() {
            R(r);
            let i = w(2);
            return L(i.onClearSearchClicked())
        }),
        f()
    }
    if (n & 2) {
        let r = w(2);
        b("iconName", r.icons.Close)
    }
}
function dx(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 9),
        H(1, ux, 1, 1, "svg-icon", 15),
        h(2, "input", 16),
        Rn("ngModelChange", function(i) {
            R(r);
            let a = w();
            return Fn(a.searchInput, i) || (a.searchInput = i),
            L(i)
        }),
        z("input", function(i) {
            R(r);
            let a = w();
            return L(a.onSearchMessages(i))
        }),
        f()()
    }
    if (n & 2) {
        let r = w();
        d(),
        W(r.searchInput.length ? 1 : -1),
        d(),
        An("ngModel", r.searchInput)
    }
}
function mx(n, s) {
    if (n & 1 && k(0, "message-container", 11),
    n & 2) {
        let r = w();
        b("messages", r.filteredMessages())
    }
}
function px(n, s) {
    if (n & 1 && k(0, "message-container", 12),
    n & 2) {
        let r = w();
        b("messages", r.filteredBrokerMessages())
    }
}
function hx(n, s) {
    if (n & 1 && k(0, "message-container", 13),
    n & 2) {
        let r = w();
        b("messages", r.filteredPortfolioMessages())
    }
}
function fx(n, s) {
    if (n & 1 && k(0, "mofid-message-data", 14),
    n & 2) {
        let r = w();
        b("messages", r.mofidMessages())
    }
}
var TO = ( () => {
    let s = class s {
        makeObservableWithSearchFilter(e) {
            return e.pipe(yt(this.searchRegex$), D( ([i,a]) => this.messageFilter(i, a)))
        }
        constructor(e, i, a, u) {
            this.router = e,
            this.messageStore = i,
            this.messageFacade = a,
            this.userDeviceService = u,
            this.icons = Ce,
            this.messageTab = ee(),
            this.searchActive = ee(!1),
            this.changeTap = Ge(),
            this.selectedTab = Ie(1),
            this.searchInput = "",
            this.searchRegex$ = new at(""),
            this.menuRoot = this.userDeviceService.getDeviceMenuRoot() + "/",
            this.messageTypeTab = {
                1: te.MarketMessage,
                2: te.ImmediateMessage,
                3: te.UserMessage,
                4: te.MofidMessage
            },
            this.messageRouteTab = {
                [this.menuRoot + _t.MESSAGES_ROUTE]: 1,
                [this.menuRoot + _t.IMMEDIATE_MESSAGE_ROUTE]: 2,
                [this.menuRoot + _t.PORTFOLIO_MESSAGE_ROUTE]: 3,
                [this.menuRoot + _t.MOFID_MESSAGE_ROUTE]: 4
            },
            this.messageFilter = (p, g) => p.filter(y => g === "" || y.title.match(g) || y.body.match(g)),
            this.mofidMessages = q(this.makeObservableWithSearchFilter(this.messageStore.mofidMessages$)),
            this.filteredMessages = q(this.makeObservableWithSearchFilter(this.messageStore.marketMessages$)),
            this.filteredBrokerMessages = q(this.makeObservableWithSearchFilter(this.messageStore.immediateMessages$)),
            this.filteredPortfolioMessages = q(this.makeObservableWithSearchFilter(this.messageStore.userMessages$)),
            Zi( () => {
                this.selectTab(this.messageTab())
            }
            )
        }
        selectTab(e) {
            this.selectedTab.set(e),
            this.messageFacade.readMessages(this.messageTypeTab[this.selectedTab()]),
            this.changeTap.emit({
                tab: e,
                type: this.messageTypeTab[this.selectedTab()]
            })
        }
        activateStock(e) {
            this.router.navigate(["/stock-details", e])
        }
        onSearchMessages(e) {
            let i = e.target.value;
            this.searchInput = i,
            this.dataSearchRegex(i.replace("(", "\\(").replace(")", "\\)"))
        }
        onClearSearchClicked() {
            this.searchInput = "",
            this.dataSearchRegex("")
        }
        dataSearchRegex(e) {
            this.searchRegex$.next(e)
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)(nt(oo),nt(Ui),nt(ci),nt(Un))
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["lib-messages"]],
        inputs: {
            messageTab: [1, "messageTab"],
            searchActive: [1, "searchActive"]
        },
        outputs: {
            changeTap: "changeTap"
        },
        decls: 21,
        vars: 27,
        consts: [[1, "tabs-handler", "d-flex", "align-items-center", "flex-shrink-0"], [1, "nav", "nav-tabs", "flex-grow-1", "cup"], ["data-cy", "market-message-tab", 1, "nav-item"], ["title", "\u067E\u06CC\u0627\u0645 \u0646\u0627\u0638\u0631", "badgeClass", "bg-global", 3, "click", "value", "active"], [1, "nav-item"], ["title", "\u067E\u06CC\u0627\u0645 \u0641\u0648\u0631\u06CC", "badgeClass", "bg-danger", 3, "click", "value", "active"], ["title", "\u067E\u06CC\u0627\u0645 \u0633\u0647\u0645\u200C\u0647\u0627\u06CC \u0645\u0646", "badgeClass", "badge-pink_rose", 3, "click", "value", "active"], [1, "nav-item", "me-2"], ["title", "\u067E\u06CC\u0627\u0645 \u0645\u0641\u06CC\u062F", "badgeClass", "bg-global-700", 3, "reload", "click", "type", "value", "active"], [1, "p-2", "app-messages-search-filter", "position-relative"], ["data-cy", "message-container-component", 1, "overflow-auto", "h-100", 3, "ngClass"], ["emptyMessage", "\u067E\u06CC\u0627\u0645 \u0646\u0627\u0638\u0631 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F", 1, "list-group", "list-group-flush", "h-100", 3, "messages"], ["emptyMessage", "\u067E\u06CC\u0627\u0645 \u0641\u0648\u0631\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F", 1, "list-group", "list-group-flush", "h-100", 3, "messages"], ["emptyMessage", "\u067E\u06CC\u0627\u0645\u06CC \u0628\u0631\u0627\u06CC \u0633\u0647\u0645\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F", 1, "list-group", "list-group-flush", "h-100", 3, "messages"], ["emptyMessage", "\u067E\u06CC\u0627\u0645 \u0645\u0641\u06CC\u062F \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F", 1, "h-100", "d-block", "p-2", 3, "messages"], ["width", "18", "height", "18", 1, "position-absolute", "px-2", "text-muted", 2, "left", "10px", "top", "15px", 3, "iconName"], ["type", "text", "placeholder", "\u062C\u0633\u062A\u062C\u0648\u06CC \u067E\u06CC\u0627\u0645", "autofocus", "", 1, "form-control", "pe-5", 3, "ngModelChange", "input", "ngModel"], ["width", "18", "height", "18", 1, "position-absolute", "px-2", "text-muted", 2, "left", "10px", "top", "15px", 3, "click", "iconName"]],
        template: function(i, a) {
            i & 1 && (h(0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "message-tab", 3),
            $(4, "async"),
            z("click", function() {
                return a.selectTab(1)
            }),
            f()(),
            h(5, "li", 4)(6, "message-tab", 5),
            $(7, "async"),
            z("click", function() {
                return a.selectTab(2)
            }),
            f()(),
            h(8, "li", 4)(9, "message-tab", 6),
            $(10, "async"),
            z("click", function() {
                return a.selectTab(3)
            }),
            f()(),
            h(11, "li", 7)(12, "message-tab", 8),
            $(13, "async"),
            z("reload", function() {
                return a.selectTab(4)
            })("click", function() {
                return a.selectTab(4)
            }),
            f()()()(),
            H(14, dx, 3, 2, "div", 9),
            h(15, "div", 10),
            $(16, "async"),
            H(17, mx, 1, 1, "message-container", 11)(18, px, 1, 1, "message-container", 12)(19, hx, 1, 1, "message-container", 13)(20, fx, 1, 1, "mofid-message-data", 14),
            f()),
            i & 2 && (d(3),
            b("value", Se(4, 15, a.messageStore.unreadMarketMessagesCount$))("active", a.selectedTab() === 1),
            d(3),
            b("value", Se(7, 17, a.messageStore.unreadImmediateMessagesCount$))("active", a.selectedTab() === 2),
            d(3),
            b("value", Se(10, 19, a.messageStore.unreadUserMessagesCount$))("active", a.selectedTab() === 3),
            d(3),
            b("type", 4)("value", Se(13, 21, a.messageStore.unreadMofidMessagesCount$))("active", a.selectedTab() === 4),
            d(2),
            W(a.searchActive() ? 14 : -1),
            d(),
            b("ngClass", Fe(25, cx, Se(16, 23, a.messageStore.loading$))),
            d(2),
            W(a.selectedTab() === 1 ? 17 : -1),
            d(),
            W(a.selectedTab() === 2 ? 18 : -1),
            d(),
            W(a.selectedTab() === 3 ? 19 : -1),
            d(),
            W(a.selectedTab() === 4 ? 20 : -1))
        },
        dependencies: [Je, Vh, $h, Va, Ni, ki, Oi, i0, Lt, jh, ye],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var ht = as({
    source: "NoteReducer",
    events: {
        empty: mt(),
        loadingStart: mt(),
        loadingEnd: mt(),
        loadSuccess: Te(),
        loadedError: mt(),
        addStoreNote: Te(),
        updateStoreNote: Te(),
        deleteStoreNote: Te(),
        addNoteError: mt(),
        updateNoteError: mt(),
        deleteNoteError: mt(),
        loadNotes: mt(),
        addNote: Te(),
        updateNote: Te(),
        deleteNote: Te()
    }
});
var gl = ( () => {
    let s = class s {
        constructor() {
            this.store = I(ai)
        }
        loadUserNotes() {
            this.store.dispatch(ht.loadNotes())
        }
        addNote(e) {
            this.store.dispatch(ht.addNote({
                noteItem: e
            }))
        }
        updateNote(e) {
            this.store.dispatch(ht.updateNote({
                noteItem: e
            }))
        }
        deleteNote(e) {
            this.store.dispatch(ht.deleteNote({
                noteId: e
            }))
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var gx = n => n.noteState
  , zh = Oe(gx, n => Object?.values(n?.entities ?? []));
var _l = ( () => {
    let s = class s {
        constructor() {
            this.store = I(ai),
            this.notes$ = this.store.select(zh),
            this.userNotes$ = this.notes$.pipe(D(e => {
                let i = [];
                return e.forEach(a => {
                    let u = i.find(p => p.isin === a.symbolIsin);
                    if (!u) {
                        let p = i.push({
                            isin: a.symbolIsin,
                            notes: []
                        });
                        u = i[p - 1]
                    }
                    u.notes.push({
                        content: a.content,
                        createDateTime: a.createDateTime,
                        id: a.id
                    })
                }
                ),
                i && i.length > 0 && i.forEach(a => a.notes.sort( (u, p) => {
                    let g = new Date(u.createDateTime)
                      , y = new Date(p.createDateTime);
                    return g > y ? -1 : g < y ? 1 : 0
                }
                )),
                i
            }
            )),
            this.symbolNotes$ = this.userNotes$.pipe(D(e => e ? e || [] : [])),
            this.notedIsins$ = this.userNotes$.pipe(D(e => e && e ? e.filter(a => a.isin.length > 1 && a.notes.length > 0).map(a => a.isin.toUpperCase()) : []))
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var ON = ( () => {
    let s = class s {
        constructor() {
            this.noteStore = I(_l),
            this.router = I(oo),
            this.getSymbolNotes = q(this.noteStore.symbolNotes$),
            this.getNotedIsins = q(this.noteStore.notedIsins$),
            this.userCountNotes$ = this.noteStore.notes$.pipe(D(e => {
                let i = new Map;
                return e.forEach(a => {
                    let u = a.symbolIsin;
                    u && i.set(u, (i.get(u) || 0) + 1)
                }
                ),
                i
            }
            ))
        }
        hasNote(e) {
            return this.getNotedIsins() && e !== void 0 && e !== null ? this.getNotedIsins().indexOf(e.toUpperCase()) !== -1 : !1
        }
        hasNote$(e) {
            return this.noteStore.userNotes$.pipe(pe( () => !!e && e.length > 0), D(i => i?.length > 0 && i?.some(a => a.isin === e)))
        }
        navigateToNoteManagement(e) {
            this.router.navigate(["/menu/note-management", e])
        }
        getSymbolFirstNote(e) {
            let i = this.getSymbolNotes().findIndex(a => a.isin.toUpperCase() === e.toUpperCase());
            return i > -1 ? this.getSymbolNotes()[i].notes[0].content : ""
        }
        getUserNotes() {
            return this.noteStore.userNotes$
        }
        selectedSymbolNotes(e) {
            return this.noteStore.userNotes$.pipe(pe(i => !!i), D(i => i.find(a => a.isin.toUpperCase() === e.toUpperCase())))
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var Wh = ( () => {
    let s = class s extends Yi {
        constructor() {
            super(...arguments),
            this.url = `${this.mtsPath + this.apiUrls.easy}Notes`
        }
        getUserNotes() {
            return this.httpService.get(this.url)
        }
        addNote(e) {
            return this.httpService.post(this.url, {
                body: {
                    note: e
                }
            })
        }
        updateNote(e) {
            return this.httpService.put(`${this.url}`, {
                body: {
                    note: e
                }
            })
        }
        deleteNote(e) {
            let i = `${this.url}/${e}`;
            return this.httpService.delete(i)
        }
    }
    ;
    s.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = oi(s)))(a || s)
        }
    }
    )(),
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)();
var Oo = {
    addSuccess: {
        text: "\u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u0627\u0636\u0627\u0641\u0647 \u0634\u062F",
        type: dt.success
    },
    updateSuccess: {
        text: "\u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0634\u062F",
        type: dt.success
    },
    deleteSuccess: {
        text: "\u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u062D\u0630\u0641 \u0634\u062F",
        type: dt.success
    },
    addError: {
        text: "\u062E\u0637\u0627 \u062F\u0631 \u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A",
        type: dt.danger
    },
    updateError: {
        text: "\u062E\u0637\u0627 \u062F\u0631 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A",
        type: dt.danger
    },
    deleteError: {
        text: "\u062E\u0637\u0627 \u062F\u0631 \u062D\u0630\u0641 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A",
        type: dt.danger
    }
};
var vx = ( () => {
    let s = class s {
        constructor() {
            this.noteService = I(Wh),
            this.actions$ = I(ao),
            this.store = I(ai),
            this.notificationService = I(fn),
            this.loadNotes$ = it( () => this.actions$.pipe(We(ht.loadNotes), fe( () => (this.store.dispatch(ht.loadingStart()),
            this.noteService.getUserNotes().pipe(fe(e => he(ht.loadSuccess({
                notes: e
            }))), tt( () => he(ht.loadedError()))))))),
            this.addNote$ = it( () => this.actions$.pipe(We(ht.addNote), Qo(e => this.noteService.addNote(e.noteItem).pipe(D(i => ({
                content: e.noteItem.content,
                createDateTime: new Date,
                symbolIsin: e.noteItem.symbolIsin,
                id: i.id
            })), D(i => ht.addStoreNote({
                note: i
            })), Q( () => this.notificationService.alertNotification(Oo.addSuccess)), tt( () => (this.notificationService.alertNotification(Oo.addError),
            he(ht.addNoteError()))))))),
            this.updateNote$ = it( () => this.actions$.pipe(We(ht.updateNote), eu(e => this.noteService.updateNote(e.noteItem).pipe(D(i => ({
                changes: {
                    content: e.noteItem.content,
                    symbolIsin: e.noteItem.symbolIsin
                },
                id: i.id
            })), D(i => ht.updateStoreNote({
                note: i
            })), Q( () => this.notificationService.alertNotification(Oo.updateSuccess)), tt( () => (this.notificationService.alertNotification(Oo.updateError),
            he(ht.updateNoteError()))))))),
            this.deleteNote$ = it( () => this.actions$.pipe(We(ht.deleteNote), eu(e => this.noteService.deleteNote(e.noteId).pipe(eo( () => he(ht.deleteStoreNote({
                noteId: e.noteId
            }))), Q( () => this.notificationService.alertNotification(Oo.deleteSuccess)), tt( () => (this.notificationService.alertNotification(Oo.deleteError),
            he(ht.deleteNoteError())))))))
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac,
        providedIn: "root"
    });
    let n = s;
    return n
}
)()
  , qN = [vx];
var xr = Qa({
    selectId: n => n.id
})
  , bx = xr.getInitialState({
    loading: !1
});
function Hh(n, s) {
    return Cx(n, s)
}
var Cx = ls(bx, Ve(ht.loadSuccess, (n, {notes: s}) => xr.setAll(s, J(B({}, n), {
    loading: !1
}))), Ve(ht.loadingStart, n => J(B({}, n), {
    loading: !0
})), Ve(ht.loadingEnd, n => J(B({}, n), {
    loading: !1
})), Ve(ht.addStoreNote, (n, {note: s}) => xr.addOne(s, n)), Ve(ht.updateStoreNote, (n, {note: s}) => xr.updateOne(s, n)), Ve(ht.deleteStoreNote, (n, {noteId: s}) => xr.removeOne(s, n)));
var tA = {
    noteState: Hh
};
function Sx(n, s) {
    if (n & 1 && (h(0, "small", 4),
    C(1),
    f()),
    n & 2) {
        let r = w(2);
        d(),
        X(r.stockIsinMapper[r.symbolNotes().isin].title)
    }
}
function yx(n, s) {
    if (n & 1 && (h(0, "div", 5),
    C(1),
    f()),
    n & 2) {
        let r = w(2);
        d(),
        K(" ", r.stockIsinMapper[r.symbolNotes().isin].title, " ")
    }
}
function xx(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 0)(1, "div", 1),
        z("click", function() {
            R(r);
            let i = w();
            return L(i.selectSymbolNotes(i.symbolNotes()))
        }),
        h(2, "div", 2)(3, "div", 3),
        C(4),
        f(),
        H(5, Sx, 2, 1, "small", 4)(6, yx, 2, 1, "div", 5),
        f(),
        h(7, "span", 6),
        C(8),
        f()()()
    }
    if (n & 2) {
        let r, e = w();
        ri("data-cy", "note-list-item-" + e.symbolNotes().isin),
        d(4),
        K(" ", (r = e.stockIsinMapper[e.symbolNotes().isin.toUpperCase()]) == null ? null : r.name, " "),
        d(),
        W(e.IsMobile() ? 5 : 6),
        d(2),
        ri("data-cy", "notes-quantity-" + e.symbolNotes().isin),
        d(),
        K("", e.symbolNotes().notes.length, " ")
    }
}
var Gh = ( () => {
    let s = class s extends li {
        constructor() {
            super(...arguments),
            this.activeSymbolService = I(lo),
            this.symbolNotes = ee(),
            this.noteActiveIsin = an()
        }
        get stockIsinMapper() {
            return this.activeSymbolService.stockIsinMapper
        }
        selectSymbolNotes(e) {
            e.isin === this.noteActiveIsin() ? this.noteActiveIsin.set("") : this.noteActiveIsin.set(e.isin.toUpperCase())
        }
    }
    ;
    s.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = oi(s)))(a || s)
        }
    }
    )(),
    s.\u0275cmp = ne({
        type: s,
        selectors: [["symbols-list-item"]],
        inputs: {
            symbolNotes: [1, "symbolNotes"],
            noteActiveIsin: [1, "noteActiveIsin"]
        },
        outputs: {
            noteActiveIsin: "noteActiveIsinChange"
        },
        features: [Zt],
        decls: 1,
        vars: 1,
        consts: [[1, "list-group-item", "bg-principal", "bg-principal-hover", "border-bottom-0", "bg-principal-3x-dark", "flex-shrink-0", "list-group-item", "bg-principal", "bg-principal-3x-dark", "rounded", "shadow-sm", 2, "min-height", "0"], [1, "d-flex", "justify-content-between", "align-items-center", "cup", 3, "click"], [1, "flex-grow-1"], [1, "fw-bold"], [1, "text-body-tertiary", "d-block"], [1, "small", "text-body-tertiary", "d-block"], [1, "d-flex", "align-items-center", "badge", "badgecustom", "badge-violet"]],
        template: function(i, a) {
            i & 1 && H(0, xx, 9, 5, "div", 0),
            i & 2 && W(a.symbolNotes().notes.length > 0 ? 0 : -1)
        },
        dependencies: [ot],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var ho = ( () => {
    let s = class s {
        constructor() {
            this.eventSubject = new ue
        }
        dispatch(e, i) {
            this.eventSubject.next({
                event: e,
                data: i
            })
        }
        on(e) {
            return this.eventSubject.asObservable().pipe(pe(i => i.event === e), D(i => i?.data))
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275prov = de({
        token: s,
        factory: s.\u0275fac
    });
    let n = s;
    return n
}
)();
var Ht = function(n) {
    return n.multiSelectChanged = "multiSelectChanged",
    n.editItemId = "editItemId",
    n.isNewSearch = "isNewSearch",
    n.toggleSelectAll = "toggleSelectAll",
    n
}(Ht || {});
function Ix(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 0)(1, "lib-search-symbol", 1),
        z("selectedSymbol", function(i) {
            R(r);
            let a = w();
            return L(a.onSymbolSelect(i))
        }),
        f()()
    }
    if (n & 2) {
        let r = w();
        d(),
        b("isMobile", r.IsMobile())("clear", !1)("dropDownClass", "lib-search-symbol-dropdown bg-principal overflow-auto position-absolute rounded row-list search-list shadow-sm w-100")
    }
}
function wx(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "symbols-list-item", 4),
        Rn("noteActiveIsinChange", function(i) {
            R(r);
            let a = w(3);
            return Fn(a.noteActiveIsin, i) || (a.noteActiveIsin = i),
            L(i)
        }),
        f()
    }
    if (n & 2) {
        let r = s.$implicit
          , e = w(3);
        b("symbolNotes", r),
        An("noteActiveIsin", e.noteActiveIsin)
    }
}
function Mx(n, s) {
    if (n & 1 && (h(0, "div", 2),
    qe(1, wx, 1, 2, "symbols-list-item", 3, ct),
    f()),
    n & 2) {
        let r = w(2);
        d(),
        Ke(r.sortedSymbolList())
    }
}
function Tx(n, s) {
    if (n & 1 && (h(0, "div", 5),
    k(1, "svg-icon", 6),
    h(2, "div", 7),
    C(3, "\u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u06CC \u062A\u0639\u0631\u06CC\u0641 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A"),
    f(),
    h(4, "div", 8),
    C(5, "\u062C\u0647\u062A \u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u060C \u0646\u0645\u0627\u062F \u0645\u0631\u0628\u0648\u0637\u0647 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F"),
    f()()),
    n & 2) {
        let r = w(3);
        d(),
        b("iconName", r.icons.Note)
    }
}
function Dx(n, s) {
    if (n & 1 && H(0, Tx, 6, 1, "div", 5),
    n & 2) {
        let r, e = w(2);
        W(((r = e.userNotes()) == null ? null : r.length) === 0 ? 0 : -1)
    }
}
function Ex(n, s) {
    if (n & 1 && H(0, Mx, 3, 0, "div", 2)(1, Dx, 1, 1),
    n & 2) {
        let r, e = w();
        W(e.userNotes() && ((r = e.userNotes()) == null ? null : r.length) > 0 ? 0 : 1)
    }
}
var qh = ( () => {
    let s = class s extends li {
        constructor() {
            super(...arguments),
            this.activeSymbolService = I(lo),
            this.symbolService = I(pt),
            this.inject = I(kn),
            this.noteEventService = I(ho),
            this.icons = Ce,
            this.noteActiveIsin = an(),
            this.newSearchSignal = q(this.noteEventService.on(Ht.isNewSearch)),
            this.userNotes = ee(),
            this.sortedSymbolList = Ie([])
        }
        get stockIsinMapper() {
            return this.activeSymbolService.stockIsinMapper
        }
        ngOnInit() {
            Zi( () => {
                this.setSortedSymbolList()
            }
            , {
                injector: this.inject
            })
        }
        setSortedSymbolList() {
            this.IsMobile() ? this.setSortedSymbolListForMobile() : this.setSortedSymbolListForDesktop()
        }
        setSortedSymbolListForMobile() {
            return ii(this, null, function*() {
                if (this.userNotes()) {
                    let e = this.userNotes().map(a => ii(this, null, function*() {
                        let u = a.isin.toUpperCase()
                          , p = yield this.symbolService.getSymbol(u);
                        return J(B({}, a), {
                            name: p?.symbolName,
                            title: p?.title
                        })
                    }))
                      , i = yield Promise.all(e);
                    this.sortedSymbolList.set(Xs(i, "name"))
                } else
                    this.sortedSymbolList.set(null)
            })
        }
        setSortedSymbolListForDesktop() {
            if (this.userNotes) {
                let e = [];
                this.userNotes().forEach(i => {
                    let a = i.isin.toUpperCase();
                    this.stockIsinMapper[a] && e.push(J(B({}, i), {
                        name: this.stockIsinMapper[a].name,
                        title: this.stockIsinMapper[a].title
                    }))
                }
                ),
                this.sortedSymbolList.set(Xs(e, "name"))
            } else
                this.sortedSymbolList.set(null)
        }
        onSymbolSelect(e) {
            this.noteActiveIsin.set(e.symbolIsin),
            this.noteEventService.dispatch(Ht.isNewSearch, !1)
        }
    }
    ;
    s.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = oi(s)))(a || s)
        }
    }
    )(),
    s.\u0275cmp = ne({
        type: s,
        selectors: [["symbols-list"]],
        inputs: {
            noteActiveIsin: [1, "noteActiveIsin"],
            userNotes: [1, "userNotes"]
        },
        outputs: {
            noteActiveIsin: "noteActiveIsinChange"
        },
        features: [Zt],
        decls: 2,
        vars: 2,
        consts: [[1, "search-filter", "p-2", "position-relative", "bg-principal"], [1, "position-relative", 3, "selectedSymbol", "isMobile", "clear", "dropDownClass"], [1, "list-group", "list-group-flush", "overflow-auto", "d-flex", "flex-column", "gap-1", "px-2", "py-1", "h-100"], [3, "symbolNotes", "noteActiveIsin"], [3, "noteActiveIsinChange", "symbolNotes", "noteActiveIsin"], ["data-cy", "empty-notes", 1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "h-100", "px-2", "py-1"], ["width", "48", "height", "48", 1, "mb-2", "text-muted", 3, "iconName"], [1, "fw-bold"], [1, "mt-1", "text-body-tertiary"]],
        template: function(i, a) {
            i & 1 && H(0, Ix, 2, 3, "div", 0)(1, Ex, 2, 1),
            i & 2 && (W(a.newSearchSignal() ? 0 : -1),
            d(),
            W(a.newSearchSignal() ? -1 : 1))
        },
        dependencies: [ot, I0, ye, Gh],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var Px = ["deleteConfirmTemplate"];
function kx(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "form", 3),
        z("ngSubmit", function() {
            R(r);
            let i = w();
            return L(i.editNote(i.noteItem().id))
        }),
        h(1, "div", 4),
        k(2, "input", 5)(3, "textarea", 6),
        h(4, "button", 7)(5, "svg-icon", 8),
        C(6, " >"),
        f()(),
        h(7, "button", 9),
        z("click", function() {
            R(r);
            let i = w();
            return L(i.deactivateEdit())
        }),
        h(8, "svg-icon", 10),
        C(9, " >"),
        f()()()()
    }
    if (n & 2) {
        let r = w();
        b("formGroup", r.editForm),
        d(3),
        ri("data-cy", "edit-note-text-area-" + r.noteItem().id),
        d(),
        ri("data-cy", "note-edit-submit-btn-" + r.noteItem().id),
        d(),
        b("iconName", r.icons.Check),
        d(2),
        ri("data-cy", "note-edit-submit-btn-null"),
        d(),
        b("iconName", r.icons.Close)
    }
}
function Ox(n, s) {
    if (n & 1 && (h(0, "div", 12),
    k(1, "input", 17),
    f()),
    n & 2) {
        let r = w(2);
        d(),
        b("checked", r.isChecked())("id", r.noteActiveIsin())
    }
}
function Nx(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "div", 16)(1, "svg-icon", 18),
        z("click", function() {
            R(r);
            let i = w(2);
            return L(i.editActivated(i.noteItem()))
        }),
        f(),
        h(2, "svg-icon", 19),
        z("click", function() {
            R(r);
            let i = w(2);
            return L(i.showDeleteConfirm())
        }),
        f()()
    }
    if (n & 2) {
        let r = w(2);
        d(),
        b("iconName", r.icons.Edit),
        ri("data-cy", "edit-note-item-btn-" + r.noteItem().id),
        d(),
        b("iconName", r.icons.Delete),
        ri("data-cy", "delete-note-item-btn-" + r.noteItem().id)
    }
}
function Ax(n, s) {
    if (n & 1 && (h(0, "div", 11),
    H(1, Ox, 2, 2, "div", 12),
    h(2, "div", 13)(3, "div", 14),
    C(4),
    f(),
    h(5, "div", 15),
    C(6),
    $(7, "jdate"),
    f()()(),
    H(8, Nx, 3, 4, "div", 16)),
    n & 2) {
        let r = w();
        d(),
        W(r.isMultiSelect() ? 1 : -1),
        d(2),
        ri("data-cy", "note-item-text-" + r.noteItem().id),
        d(),
        K(" ", r.noteItem().content, " "),
        d(2),
        X(Se(7, 5, r.noteItem().createDateTime)),
        d(2),
        W(r.isMultiSelect() ? -1 : 8)
    }
}
function Fx(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "action-confirm", 20),
        z("closeEvent", function() {
            R(r);
            let i = w();
            return L(i.closeModal())
        })("confirmEvent", function() {
            R(r);
            let i = w();
            return L(i.handleRemove())
        }),
        f()
    }
    if (n & 2) {
        let r = w();
        b("icon", r.icons.Delete)
    }
}
var vl = ( () => {
    let s = class s extends li {
        constructor() {
            super(),
            this.deleteConfirmTemplate = to("deleteConfirmTemplate"),
            this.icons = Ce,
            this.fb = I(mn),
            this.noteFacade = I(gl),
            this.noteEventService = I(ho),
            this.overlayService = I(qa),
            this.noteItem = ee(),
            this.isMultiSelect = ee(),
            this.noteActiveIsin = an(),
            this.isChecked = Ie(!1),
            this.isEdit = q(this.noteEventService.on(Ht.editItemId).pipe(D(e => e === this.noteItem().id))),
            this.editForm = this.fb.group({
                isin: ["", vt.required],
                noteText: ["", vt.required]
            }),
            this.showDeleteConfirm = () => {
                this.IsMobile() ? this.overlayService.showOverlay({
                    component: us,
                    input: [{
                        inputName: "title",
                        inputValue: "\u062D\u0630\u0641 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A"
                    }, {
                        inputName: "description",
                        inputValue: "\u0622\u06CC\u0627 \u0627\u0632 \u062D\u0630\u0641 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062A\u06CC\u062F\u061F"
                    }, {
                        inputName: "icon",
                        inputValue: this.icons.Delete
                    }],
                    output: [{
                        outputName: "closeEvent",
                        outputCallBack: () => {
                            this.modalService.dismissAll()
                        }
                        ,
                        closeForm: !0
                    }, {
                        outputName: "confirmEvent",
                        outputCallBack: () => {
                            this.handleRemove()
                        }
                        ,
                        closeForm: !0
                    }],
                    option: {
                        componentName: "NoteDeleteConfirmComponent"
                    }
                }) : this.modalService.open(this.deleteConfirmTemplate())
            }
            ,
            q(this.noteEventService.on(Ht.toggleSelectAll).pipe(Q(e => this.isChecked.set(e))))
        }
        editNote(e) {
            let i = this.editForm.value
              , a = {
                symbolIsin: i.isin,
                id: e,
                content: i.noteText
            };
            this.noteFacade.updateNote(a),
            this.deactivateEdit()
        }
        deactivateEdit() {
            this.noteEventService.dispatch(Ht.editItemId, null)
        }
        editActivated(e) {
            this.editForm.patchValue({
                isin: this.noteActiveIsin(),
                noteText: e.content
            }),
            this.noteEventService.dispatch(Ht.editItemId, e.id)
        }
        checkboxClick() {
            this.isMultiSelect() && this.isChecked.set(!this.isChecked())
        }
        handleRemove() {
            this.noteFacade.deleteNote(this.noteItem().id)
        }
        closeModal() {
            this.modalService.dismissAll()
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["symbol-note-list-item"]],
        viewQuery: function(i, a) {
            i & 1 && Nn(a.deleteConfirmTemplate, Px, 5),
            i & 2 && io()
        },
        inputs: {
            noteItem: [1, "noteItem"],
            isMultiSelect: [1, "isMultiSelect"],
            noteActiveIsin: [1, "noteActiveIsin"]
        },
        outputs: {
            noteActiveIsin: "noteActiveIsinChange"
        },
        features: [Zt],
        decls: 5,
        vars: 3,
        consts: [["deleteConfirmTemplate", ""], [1, "list-group-item", "justify-content-between", "border-bottom-0", "d-flex", "align-items-center", "p-2", "gap-1", "bg-principal", "bg-principal-hover", "bg-principal-3x-dark", "flex-shrink-0", "rounded", "shadow-sm", 3, "click", "id"], [1, "w-100", 3, "formGroup"], [1, "w-100", 3, "ngSubmit", "formGroup"], [1, "d-flex", "justify-content-between"], ["type", "hidden", "formControlName", "isin"], ["multiple", "", "formControlName", "noteText", 1, "form-control", "form-control-sm", "me-2", "flex-grow-1"], ["type", "submit", 1, "btn", "p-0", "align-self-center"], ["width", "20", "height", "20", 1, "d-flex", "text-success", "icon", 3, "iconName"], ["type", "button", 1, "btn", "p-0", "align-self-center", 3, "click"], ["width", "20", "height", "20", 1, "d-flex", "text-danger", "icon", 3, "iconName"], [1, "d-flex", "w-100", "overflow-hidden", "justify-content-center", "align-items-center", 2, "overflow-wrap", "anywhere", "inline-size", "30ch"], [1, "form-check", "form-check-reverse"], [1, "flex-grow-1"], [1, "fw-bold", 2, "white-space", "pre-line"], [1, "text-body-tertiary"], [1, "d-flex", "gap-2"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "id"], ["width", "20", "height", "20", "title", "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", 1, "px-1", "text-secondary", "cup", "icon", 3, "click", "iconName"], ["width", "20", "height", "20", "title", "\u062D\u0630\u0641 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", 1, "px-1", "text-secondary", "cup", "icon", 3, "click", "iconName"], ["title", "\u062D\u0630\u0641 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", "description", "\u0622\u06CC\u0627 \u0627\u0632 \u062D\u0630\u0641 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062F\u0627\u0631\u06CC\u062F\u061F", 3, "closeEvent", "confirmEvent", "icon"]],
        template: function(i, a) {
            if (i & 1) {
                let u = re();
                h(0, "li", 1),
                z("click", function() {
                    return R(u),
                    L(a.checkboxClick())
                }),
                H(1, kx, 10, 6, "form", 2)(2, Ax, 9, 7),
                f(),
                H(3, Fx, 1, 1, "ng-template", null, 0, Ft)
            }
            i & 2 && (b("id", a.noteItem().id),
            ri("data-cy", "note-item-container-" + a.noteItem().id),
            d(),
            W(a.isEdit() ? 1 : 2))
        },
        dependencies: [ot, Ri, ye, Lt, cn, ki, Oi, ln, un, dn, us],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
var Rx = ["deleteConfirmTemplate"];
function Lx(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "symbol-note-list-item", 9),
        Rn("noteActiveIsinChange", function(i) {
            R(r);
            let a = w();
            return Fn(a.noteActiveIsin, i) || (a.noteActiveIsin = i),
            L(i)
        }),
        f()
    }
    if (n & 2) {
        let r = s.$implicit
          , e = w();
        b("noteItem", r)("isMultiSelect", e.isMultiSelect()),
        An("noteActiveIsin", e.noteActiveIsin)
    }
}
function Bx(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "multi-select-toolbar", 10),
        z("removeClicked", function() {
            R(r);
            let i = w();
            return L(i.showDeleteConfirm())
        })("allSelected", function() {
            R(r);
            let i = w();
            return L(i.handleSelectAll())
        })("allDeselected", function() {
            R(r);
            let i = w();
            return L(i.handleDeselectAll())
        })("taskbarClosed", function() {
            R(r);
            let i = w();
            return L(i.handleCloseMultiSelect())
        }),
        f()
    }
    if (n & 2) {
        let r, e = w();
        vi(e.IsMobile() ? "" : "transform: translate(50%); right: 50%; padding: 1rem 0.5rem !important"),
        b("selectedCount", e.checkedItemsLength())("allDataCount", (r = e.selectedSymbolNotes()) == null ? null : r.length)
    }
}
function Vx(n, s) {
    if (n & 1 && (h(0, "div", 5),
    k(1, "svg-icon", 11),
    C(2, " \u0646\u0645\u0627\u062F \u0641\u0627\u0642\u062F \u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u0645\u06CC\u200C\u0628\u0627\u0634\u062F "),
    f()),
    n & 2) {
        let r = w();
        d(),
        b("iconName", r.icons.Note)
    }
}
function $x(n, s) {
    if (n & 1 && (h(0, "div", 8)(1, "button", 12),
    C(2, " \u062B\u0628\u062A \u06CC\u0627\u062F\u062F\u0627\u0634\u062A "),
    f()()),
    n & 2) {
        let r = w();
        d(),
        b("disabled", !r.noteForm.valid)
    }
}
function Ux(n, s) {
    if (n & 1 && (h(0, "div", 8)(1, "button", 12),
    C(2, " \u062B\u0628\u062A \u06CC\u0627\u062F\u062F\u0627\u0634\u062A "),
    f()()),
    n & 2) {
        let r = w();
        d(),
        b("disabled", !r.noteForm.valid)
    }
}
function jx(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "action-confirm", 13),
        z("closeEvent", function() {
            R(r);
            let i = w();
            return L(i.closeModal())
        })("confirmEvent", function() {
            R(r);
            let i = w();
            return L(i.handleRemove())
        }),
        f()
    }
    if (n & 2) {
        let r = w();
        b("icon", r.icons.Delete)
    }
}
var Kh = ( () => {
    let s = class s extends li {
        constructor() {
            super(...arguments),
            this.fb = I(mn),
            this.noteFacade = I(gl),
            this.noteEventService = I(ho),
            this.deleteConfirmTemplate = to("deleteConfirmTemplate"),
            this.itemComponents = Vp(vl),
            this.overlayService = I(qa),
            this.icons = Ce,
            this.selectedSymbolNotes = ee(),
            this.noteActiveIsin = an(),
            this.isMultiSelect = q(this.noteEventService.on(Ht.multiSelectChanged), {
                initialValue: !1
            }),
            this.checkedItemsLength = kt( () => this.itemComponents().filter(e => e.isChecked()).length),
            this.noteForm = this.fb.group({
                noteText: ["", vt.required]
            }),
            this.showDeleteConfirm = () => {
                this.IsMobile() ? this.overlayService.showOverlay({
                    component: us,
                    input: [{
                        inputName: "title",
                        inputValue: "\u062D\u0630\u0641 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A"
                    }, {
                        inputName: "description",
                        inputValue: "\u0622\u06CC\u0627 \u0627\u0632 \u062D\u0630\u0641 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062A\u06CC\u062F\u061F"
                    }, {
                        inputName: "icon",
                        inputValue: this.icons.Delete
                    }],
                    output: [{
                        outputName: "closeEvent",
                        outputCallBack: () => {
                            this.modalService.dismissAll()
                        }
                        ,
                        closeForm: !0
                    }, {
                        outputName: "confirmEvent",
                        outputCallBack: () => {
                            this.handleRemove()
                        }
                        ,
                        closeForm: !0
                    }],
                    option: {
                        componentName: "NoteDeleteConfirmComponent"
                    }
                }) : this.modalService.open(this.deleteConfirmTemplate())
            }
        }
        AddNote() {
            let e = {
                symbolIsin: this.noteActiveIsin(),
                content: this.noteForm.value.noteText
            };
            this.noteFacade.addNote(e),
            this.noteForm.patchValue({
                noteText: ""
            })
        }
        handleRemove() {
            this.itemComponents().filter(i => i.isChecked()).map(i => i.noteItem().id).forEach(i => {
                this.noteFacade.deleteNote(i)
            }
            ),
            this.handleCloseMultiSelect()
        }
        handleSelectAll() {
            this.noteEventService.dispatch(Ht.toggleSelectAll, !0)
        }
        handleDeselectAll() {
            this.noteEventService.dispatch(Ht.toggleSelectAll, !1)
        }
        handleCloseMultiSelect() {
            this.setIsMultiSelect(!1),
            this.handleDeselectAll()
        }
        setIsMultiSelect(e) {
            this.noteEventService.dispatch(Ht.multiSelectChanged, e)
        }
        closeModal() {
            this.modalService.dismissAll()
        }
    }
    ;
    s.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = oi(s)))(a || s)
        }
    }
    )(),
    s.\u0275cmp = ne({
        type: s,
        selectors: [["symbol-note-list"]],
        viewQuery: function(i, a) {
            i & 1 && (Nn(a.deleteConfirmTemplate, Rx, 5),
            Nn(a.itemComponents, vl, 5)),
            i & 2 && io(2)
        },
        inputs: {
            selectedSymbolNotes: [1, "selectedSymbolNotes"],
            noteActiveIsin: [1, "noteActiveIsin"]
        },
        outputs: {
            noteActiveIsin: "noteActiveIsinChange"
        },
        features: [Zt],
        decls: 12,
        vars: 6,
        consts: [["deleteConfirmTemplate", ""], [1, "align-item-center", "d-flex", "flex-column", "h-100", "justify-content-between", "overflow-hidden", "position-relative"], [1, "list-group", "list-group-flush", "p-0", "m-0", "overflow-auto", "d-flex", "flex-column", "gap-1", "px-2", 2, "padding-bottom", "1px !important"], [3, "noteItem", "isMultiSelect", "noteActiveIsin"], [1, "bottom-0", "position-absolute", "z-1", 3, "style", "selectedCount", "allDataCount"], [1, "d-flex", "flex-column", "align-items-center", "text-muted", "h-100", "justify-content-center"], [1, "d-flex", "flex-column", "bg-principal", "bg-principal-3x-dark", "rounded", "p-2", "m-1", "mx-2", "position-relative", 3, "ngSubmit", "formGroup"], ["data-cy", "note-input", "multiple", "", "formControlName", "noteText", 1, "rounded", "border-0", 2, "resize", "none", 3, "rows", "placeholder"], [1, "d-flex", "justify-content-end", "align-items-center"], [3, "noteActiveIsinChange", "noteItem", "isMultiSelect", "noteActiveIsin"], [1, "bottom-0", "position-absolute", "z-1", 3, "removeClicked", "allSelected", "allDeselected", "taskbarClosed", "selectedCount", "allDataCount"], ["width", "36", "height", "36", 1, "mb-2", 3, "iconName"], ["data-cy", "note-add-btn", "type", "submit", 1, "btn", "btn-sm", "btn-success", "px-3", 3, "disabled"], ["title", "\u062D\u0630\u0641 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627", "description", "\u0622\u06CC\u0627 \u0627\u0632 \u062D\u0630\u0641 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627 \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062F\u0627\u0631\u06CC\u062F\u061F", 3, "closeEvent", "confirmEvent", "icon"]],
        template: function(i, a) {
            if (i & 1) {
                let u = re();
                h(0, "div", 1)(1, "ul", 2),
                qe(2, Lx, 1, 3, "symbol-note-list-item", 3, ct),
                f(),
                H(4, Bx, 1, 4, "multi-select-toolbar", 4)(5, Vx, 3, 1, "div", 5),
                f(),
                h(6, "form", 6),
                z("ngSubmit", function() {
                    return R(u),
                    L(a.AddNote())
                }),
                k(7, "textarea", 7),
                H(8, $x, 3, 1, "div", 8)(9, Ux, 3, 1, "div", 8),
                f(),
                H(10, jx, 1, 1, "ng-template", null, 0, Ft)
            }
            i & 2 && (d(2),
            Ke(a.selectedSymbolNotes()),
            d(2),
            W(a.isMultiSelect() ? 4 : -1),
            d(),
            W(a.selectedSymbolNotes() ? -1 : 5),
            d(),
            b("formGroup", a.noteForm),
            d(),
            b("rows", a.IsMobile() ? "2" : "5")("placeholder", (a.IsMobile(),
            "\u0645\u062A\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F ...")),
            d(),
            W(a.IsMobile() ? 8 : 9))
        },
        dependencies: [ot, vl, Lt, cn, ki, Oi, ln, un, dn, ye, x0, us],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
function zx(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "symbols-list", 2),
        Rn("noteActiveIsinChange", function(i) {
            R(r);
            let a = w();
            return Fn(a.noteActiveIsin, i) || (a.noteActiveIsin = i),
            L(i)
        }),
        f()
    }
    if (n & 2) {
        let r = w();
        b("userNotes", r.userNotes()),
        An("noteActiveIsin", r.noteActiveIsin)
    }
}
function Wx(n, s) {
    if (n & 1) {
        let r = re();
        h(0, "symbol-note-list", 3),
        Rn("noteActiveIsinChange", function(i) {
            R(r);
            let a = w();
            return Fn(a.noteActiveIsin, i) || (a.noteActiveIsin = i),
            L(i)
        }),
        f()
    }
    if (n & 2) {
        let r = w();
        b("selectedSymbolNotes", r.selectedSymbolNotes()),
        An("noteActiveIsin", r.noteActiveIsin)
    }
}
var uF = ( () => {
    let s = class s {
        constructor() {
            this.noteStore = I(_l),
            this.noteEventService = I(ho),
            this.noteActiveIsin = an(),
            this.newSearchSignal = q(this.noteEventService.on(Ht.isNewSearch)),
            this.userNotes = q(this.noteStore.userNotes$),
            this.selectedSymbolNotes = kt( () => {
                if (this.noteActiveIsin() && this.userNotes())
                    return this.userNotes()?.find(e => e.isin.toUpperCase() === this.noteActiveIsin()?.toUpperCase())?.notes
            }
            )
        }
    }
    ;
    s.\u0275fac = function(i) {
        return new (i || s)
    }
    ,
    s.\u0275cmp = ne({
        type: s,
        selectors: [["note-comp"]],
        inputs: {
            noteActiveIsin: [1, "noteActiveIsin"]
        },
        outputs: {
            noteActiveIsin: "noteActiveIsinChange"
        },
        decls: 2,
        vars: 1,
        consts: [[3, "userNotes", "noteActiveIsin"], [1, "d-flex", "flex-column", "h-100", "overflow-hidden", "justify-content-between", "gap-1", "py-1", 3, "selectedSymbolNotes", "noteActiveIsin"], [3, "noteActiveIsinChange", "userNotes", "noteActiveIsin"], [1, "d-flex", "flex-column", "h-100", "overflow-hidden", "justify-content-between", "gap-1", "py-1", 3, "noteActiveIsinChange", "selectedSymbolNotes", "noteActiveIsin"]],
        template: function(i, a) {
            i & 1 && H(0, zx, 1, 2, "symbols-list", 0)(1, Wx, 1, 2, "symbol-note-list", 1),
            i & 2 && W(!a.noteActiveIsin() || a.newSearchSignal() ? 0 : 1)
        },
        dependencies: [qh, Kh],
        encapsulation: 2,
        changeDetection: 0
    });
    let n = s;
    return n
}
)();
function fo(n, s=0) {
    return Hx(n) ? Number(n) : arguments.length === 2 ? s : 0
}
function Hx(n) {
    return !isNaN(parseFloat(n)) && !isNaN(Number(n))
}
function Qh(n) {
    return Array.isArray(n) ? n : [n]
}
function bn(n) {
    return n instanceof si ? n.nativeElement : n
}
var yu;
try {
    yu = typeof Intl < "u" && Intl.v8BreakIterator
} catch {
    yu = !1
}
var yl = ( () => {
    class n {
        _platformId = I(Lp);
        isBrowser = this._platformId ? Jp(this._platformId) : typeof document == "object" && !!document;
        EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        BLINK = this.isBrowser && !!(window.chrome || yu) && typeof CSS < "u" && !this.EDGE && !this.TRIDENT;
        WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream"in window);
        FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
        constructor() {}
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275prov = de({
            token: n,
            factory: n.\u0275fac,
            providedIn: "root"
        })
    }
    return n
}
)();
var Ir;
function Gx() {
    if (Ir == null && typeof window < "u")
        try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: () => Ir = !0
            }))
        } finally {
            Ir = Ir || !1
        }
    return Ir
}
function wr(n) {
    return Gx() ? n : !!n.capture
}
var Xi = function(n) {
    return n[n.NORMAL = 0] = "NORMAL",
    n[n.NEGATED = 1] = "NEGATED",
    n[n.INVERTED = 2] = "INVERTED",
    n
}(Xi || {}), bl, No;
function Zh() {
    if (No == null) {
        if (typeof document != "object" || !document || typeof Element != "function" || !Element)
            return No = !1,
            No;
        if ("scrollBehavior"in document.documentElement.style)
            No = !0;
        else {
            let n = Element.prototype.scrollTo;
            n ? No = !/\{\s*\[native code\]\s*\}/.test(n.toString()) : No = !1
        }
    }
    return No
}
function xs() {
    if (typeof document != "object" || !document)
        return Xi.NORMAL;
    if (bl == null) {
        let n = document.createElement("div")
          , s = n.style;
        n.dir = "rtl",
        s.width = "1px",
        s.overflow = "auto",
        s.visibility = "hidden",
        s.pointerEvents = "none",
        s.position = "absolute";
        let r = document.createElement("div")
          , e = r.style;
        e.width = "2px",
        e.height = "1px",
        n.appendChild(r),
        document.body.appendChild(n),
        bl = Xi.NORMAL,
        n.scrollLeft === 0 && (n.scrollLeft = 1,
        bl = n.scrollLeft === 0 ? Xi.NEGATED : Xi.INVERTED),
        n.remove()
    }
    return bl
}
var Su;
function qx() {
    if (Su == null) {
        let n = typeof document < "u" ? document.head : null;
        Su = !!(n && (n.createShadowRoot || n.attachShadow))
    }
    return Su
}
function xl(n) {
    if (qx()) {
        let s = n.getRootNode ? n.getRootNode() : null;
        if (typeof ShadowRoot < "u" && ShadowRoot && s instanceof ShadowRoot)
            return s
    }
    return null
}
function Mr(n) {
    return n.composedPath ? n.composedPath()[0] : n.target
}
var Kx = new ni("cdk-dir-doc",{
    providedIn: "root",
    factory: Qx
});
function Qx() {
    return I(no)
}
var Zx = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function Yx(n) {
    let s = n?.toLowerCase() || "";
    return s === "auto" && typeof navigator < "u" && navigator?.language ? Zx.test(navigator.language) ? "rtl" : "ltr" : s === "rtl" ? "rtl" : "ltr"
}
var Tr = ( () => {
    class n {
        value = "ltr";
        change = new jt;
        constructor() {
            let r = I(Kx, {
                optional: !0
            });
            if (r) {
                let e = r.body ? r.body.dir : null
                  , i = r.documentElement ? r.documentElement.dir : null;
                this.value = Yx(e || i || "ltr")
            }
        }
        ngOnDestroy() {
            this.change.complete()
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275prov = de({
            token: n,
            factory: n.\u0275fac,
            providedIn: "root"
        })
    }
    return n
}
)();
var xu = class {
}
;
function Yh(n) {
    return n && typeof n.connect == "function" && !(n instanceof vp)
}
var Il = class extends xu {
    _data;
    constructor(s) {
        super(),
        this._data = s
    }
    connect() {
        return Da(this._data) ? this._data : he(this._data)
    }
    disconnect() {}
}
  , Dr = function(n) {
    return n[n.REPLACED = 0] = "REPLACED",
    n[n.INSERTED = 1] = "INSERTED",
    n[n.MOVED = 2] = "MOVED",
    n[n.REMOVED = 3] = "REMOVED",
    n
}(Dr || {})
  , Iu = new ni("_ViewRepeater");
var wl = class {
    viewCacheSize = 20;
    _viewCache = [];
    applyChanges(s, r, e, i, a) {
        s.forEachOperation( (u, p, g) => {
            let y, O;
            if (u.previousIndex == null) {
                let j = () => e(u, p, g);
                y = this._insertView(j, g, r, i(u)),
                O = y ? Dr.INSERTED : Dr.REPLACED
            } else
                g == null ? (this._detachAndCacheView(p, r),
                O = Dr.REMOVED) : (y = this._moveView(p, g, r, i(u)),
                O = Dr.MOVED);
            a && a({
                context: y?.context,
                operation: O,
                record: u
            })
        }
        )
    }
    detach() {
        for (let s of this._viewCache)
            s.destroy();
        this._viewCache = []
    }
    _insertView(s, r, e, i) {
        let a = this._insertViewFromCache(r, e);
        if (a) {
            a.context.$implicit = i;
            return
        }
        let u = s();
        return e.createEmbeddedView(u.templateRef, u.context, u.index)
    }
    _detachAndCacheView(s, r) {
        let e = r.detach(s);
        this._maybeCacheView(e, r)
    }
    _moveView(s, r, e, i) {
        let a = e.get(s);
        return e.move(a, r),
        a.context.$implicit = i,
        a
    }
    _maybeCacheView(s, r) {
        if (this._viewCache.length < this.viewCacheSize)
            this._viewCache.push(s);
        else {
            let e = r.indexOf(s);
            e === -1 ? s.destroy() : r.remove(e)
        }
    }
    _insertViewFromCache(s, r) {
        let e = this._viewCache.pop();
        return e && r.insert(e, s),
        e || null
    }
}
;
var Jx = ["contentWrapper"]
  , Xx = ["*"]
  , ef = new ni("VIRTUAL_SCROLL_STRATEGY")
  , wu = class {
    _scrolledIndexChange = new ue;
    scrolledIndexChange = this._scrolledIndexChange.pipe(_i());
    _viewport = null;
    _itemSize;
    _minBufferPx;
    _maxBufferPx;
    constructor(s, r, e) {
        this._itemSize = s,
        this._minBufferPx = r,
        this._maxBufferPx = e
    }
    attach(s) {
        this._viewport = s,
        this._updateTotalContentSize(),
        this._updateRenderedRange()
    }
    detach() {
        this._scrolledIndexChange.complete(),
        this._viewport = null
    }
    updateItemAndBufferSize(s, r, e) {
        e < r,
        this._itemSize = s,
        this._minBufferPx = r,
        this._maxBufferPx = e,
        this._updateTotalContentSize(),
        this._updateRenderedRange()
    }
    onContentScrolled() {
        this._updateRenderedRange()
    }
    onDataLengthChanged() {
        this._updateTotalContentSize(),
        this._updateRenderedRange()
    }
    onContentRendered() {}
    onRenderedOffsetChanged() {}
    scrollToIndex(s, r) {
        this._viewport && this._viewport.scrollToOffset(s * this._itemSize, r)
    }
    _updateTotalContentSize() {
        this._viewport && this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize)
    }
    _updateRenderedRange() {
        if (!this._viewport)
            return;
        let s = this._viewport.getRenderedRange()
          , r = {
            start: s.start,
            end: s.end
        }
          , e = this._viewport.getViewportSize()
          , i = this._viewport.getDataLength()
          , a = this._viewport.measureScrollOffset()
          , u = this._itemSize > 0 ? a / this._itemSize : 0;
        if (r.end > i) {
            let g = Math.ceil(e / this._itemSize)
              , y = Math.max(0, Math.min(u, i - g));
            u != y && (u = y,
            a = y * this._itemSize,
            r.start = Math.floor(u)),
            r.end = Math.max(0, Math.min(i, r.start + g))
        }
        let p = a - r.start * this._itemSize;
        if (p < this._minBufferPx && r.start != 0) {
            let g = Math.ceil((this._maxBufferPx - p) / this._itemSize);
            r.start = Math.max(0, r.start - g),
            r.end = Math.min(i, Math.ceil(u + (e + this._minBufferPx) / this._itemSize))
        } else {
            let g = r.end * this._itemSize - (a + e);
            if (g < this._minBufferPx && r.end != i) {
                let y = Math.ceil((this._maxBufferPx - g) / this._itemSize);
                y > 0 && (r.end = Math.min(i, r.end + y),
                r.start = Math.max(0, Math.floor(u - this._minBufferPx / this._itemSize)))
            }
        }
        this._viewport.setRenderedRange(r),
        this._viewport.setRenderedContentOffset(this._itemSize * r.start),
        this._scrolledIndexChange.next(Math.floor(u))
    }
}
;
function eI(n) {
    return n._scrollStrategy
}
var o7 = ( () => {
    class n {
        get itemSize() {
            return this._itemSize
        }
        set itemSize(r) {
            this._itemSize = fo(r)
        }
        _itemSize = 20;
        get minBufferPx() {
            return this._minBufferPx
        }
        set minBufferPx(r) {
            this._minBufferPx = fo(r)
        }
        _minBufferPx = 100;
        get maxBufferPx() {
            return this._maxBufferPx
        }
        set maxBufferPx(r) {
            this._maxBufferPx = fo(r)
        }
        _maxBufferPx = 200;
        _scrollStrategy = new wu(this.itemSize,this.minBufferPx,this.maxBufferPx);
        ngOnChanges() {
            this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx)
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275dir = Qt({
            type: n,
            selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
            inputs: {
                itemSize: "itemSize",
                minBufferPx: "minBufferPx",
                maxBufferPx: "maxBufferPx"
            },
            features: [Qi([{
                provide: ef,
                useFactory: eI,
                deps: [kp( () => n)]
            }]), Pn]
        })
    }
    return n
}
)()
  , tI = 20
  , Mu = ( () => {
    class n {
        _ngZone = I(rn);
        _platform = I(yl);
        _document = I(no, {
            optional: !0
        });
        constructor() {}
        _scrolled = new ue;
        _globalSubscription = null;
        _scrolledCount = 0;
        scrollContainers = new Map;
        register(r) {
            this.scrollContainers.has(r) || this.scrollContainers.set(r, r.elementScrolled().subscribe( () => this._scrolled.next(r)))
        }
        deregister(r) {
            let e = this.scrollContainers.get(r);
            e && (e.unsubscribe(),
            this.scrollContainers.delete(r))
        }
        scrolled(r=tI) {
            return this._platform.isBrowser ? new To(e => {
                this._globalSubscription || this._addGlobalListener();
                let i = r > 0 ? this._scrolled.pipe(Pa(r)).subscribe(e) : this._scrolled.subscribe(e);
                return this._scrolledCount++,
                () => {
                    i.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || this._removeGlobalListener()
                }
            }
            ) : he()
        }
        ngOnDestroy() {
            this._removeGlobalListener(),
            this.scrollContainers.forEach( (r, e) => this.deregister(e)),
            this._scrolled.complete()
        }
        ancestorScrolled(r, e) {
            let i = this.getAncestorScrollContainers(r);
            return this.scrolled(e).pipe(pe(a => !a || i.indexOf(a) > -1))
        }
        getAncestorScrollContainers(r) {
            let e = [];
            return this.scrollContainers.forEach( (i, a) => {
                this._scrollableContainsElement(a, r) && e.push(a)
            }
            ),
            e
        }
        _getWindow() {
            return this._document.defaultView || window
        }
        _scrollableContainsElement(r, e) {
            let i = bn(e)
              , a = r.getElementRef().nativeElement;
            do
                if (i == a)
                    return !0;
            while (i = i.parentElement);
            return !1
        }
        _addGlobalListener() {
            this._globalSubscription = this._ngZone.runOutsideAngular( () => {
                let r = this._getWindow();
                return Ks(r.document, "scroll").subscribe( () => this._scrolled.next())
            }
            )
        }
        _removeGlobalListener() {
            this._globalSubscription && (this._globalSubscription.unsubscribe(),
            this._globalSubscription = null)
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275prov = de({
            token: n,
            factory: n.\u0275fac,
            providedIn: "root"
        })
    }
    return n
}
)()
  , tf = ( () => {
    class n {
        elementRef = I(si);
        scrollDispatcher = I(Mu);
        ngZone = I(rn);
        dir = I(Tr, {
            optional: !0
        });
        _destroyed = new ue;
        _elementScrolled = new To(r => this.ngZone.runOutsideAngular( () => Ks(this.elementRef.nativeElement, "scroll").pipe(sn(this._destroyed)).subscribe(r)));
        constructor() {}
        ngOnInit() {
            this.scrollDispatcher.register(this)
        }
        ngOnDestroy() {
            this.scrollDispatcher.deregister(this),
            this._destroyed.next(),
            this._destroyed.complete()
        }
        elementScrolled() {
            return this._elementScrolled
        }
        getElementRef() {
            return this.elementRef
        }
        scrollTo(r) {
            let e = this.elementRef.nativeElement
              , i = this.dir && this.dir.value == "rtl";
            r.left == null && (r.left = i ? r.end : r.start),
            r.right == null && (r.right = i ? r.start : r.end),
            r.bottom != null && (r.top = e.scrollHeight - e.clientHeight - r.bottom),
            i && xs() != Xi.NORMAL ? (r.left != null && (r.right = e.scrollWidth - e.clientWidth - r.left),
            xs() == Xi.INVERTED ? r.left = r.right : xs() == Xi.NEGATED && (r.left = r.right ? -r.right : r.right)) : r.right != null && (r.left = e.scrollWidth - e.clientWidth - r.right),
            this._applyScrollToOptions(r)
        }
        _applyScrollToOptions(r) {
            let e = this.elementRef.nativeElement;
            Zh() ? e.scrollTo(r) : (r.top != null && (e.scrollTop = r.top),
            r.left != null && (e.scrollLeft = r.left))
        }
        measureScrollOffset(r) {
            let e = "left"
              , i = "right"
              , a = this.elementRef.nativeElement;
            if (r == "top")
                return a.scrollTop;
            if (r == "bottom")
                return a.scrollHeight - a.clientHeight - a.scrollTop;
            let u = this.dir && this.dir.value == "rtl";
            return r == "start" ? r = u ? i : e : r == "end" && (r = u ? e : i),
            u && xs() == Xi.INVERTED ? r == e ? a.scrollWidth - a.clientWidth - a.scrollLeft : a.scrollLeft : u && xs() == Xi.NEGATED ? r == e ? a.scrollLeft + a.scrollWidth - a.clientWidth : -a.scrollLeft : r == e ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275dir = Qt({
            type: n,
            selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
        })
    }
    return n
}
)()
  , iI = 20
  , Tu = ( () => {
    class n {
        _platform = I(yl);
        _listeners;
        _viewportSize;
        _change = new ue;
        _document = I(no, {
            optional: !0
        });
        constructor() {
            let r = I(rn)
              , e = I(Na).createRenderer(null, null);
            r.runOutsideAngular( () => {
                if (this._platform.isBrowser) {
                    let i = a => this._change.next(a);
                    this._listeners = [e.listen("window", "resize", i), e.listen("window", "orientationchange", i)]
                }
                this.change().subscribe( () => this._viewportSize = null)
            }
            )
        }
        ngOnDestroy() {
            this._listeners?.forEach(r => r()),
            this._change.complete()
        }
        getViewportSize() {
            this._viewportSize || this._updateViewportSize();
            let r = {
                width: this._viewportSize.width,
                height: this._viewportSize.height
            };
            return this._platform.isBrowser || (this._viewportSize = null),
            r
        }
        getViewportRect() {
            let r = this.getViewportScrollPosition()
              , {width: e, height: i} = this.getViewportSize();
            return {
                top: r.top,
                left: r.left,
                bottom: r.top + i,
                right: r.left + e,
                height: i,
                width: e
            }
        }
        getViewportScrollPosition() {
            if (!this._platform.isBrowser)
                return {
                    top: 0,
                    left: 0
                };
            let r = this._document
              , e = this._getWindow()
              , i = r.documentElement
              , a = i.getBoundingClientRect()
              , u = -a.top || r.body.scrollTop || e.scrollY || i.scrollTop || 0
              , p = -a.left || r.body.scrollLeft || e.scrollX || i.scrollLeft || 0;
            return {
                top: u,
                left: p
            }
        }
        change(r=iI) {
            return r > 0 ? this._change.pipe(Pa(r)) : this._change
        }
        _getWindow() {
            return this._document.defaultView || window
        }
        _updateViewportSize() {
            let r = this._getWindow();
            this._viewportSize = this._platform.isBrowser ? {
                width: r.innerWidth,
                height: r.innerHeight
            } : {
                width: 0,
                height: 0
            }
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275prov = de({
            token: n,
            factory: n.\u0275fac,
            providedIn: "root"
        })
    }
    return n
}
)()
  , Jh = new ni("VIRTUAL_SCROLLABLE")
  , nI = ( () => {
    class n extends tf {
        constructor() {
            super()
        }
        measureViewportSize(r) {
            let e = this.elementRef.nativeElement;
            return r === "horizontal" ? e.clientWidth : e.clientHeight
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275dir = Qt({
            type: n,
            features: [Zt]
        })
    }
    return n
}
)();
function oI(n, s) {
    return n.start == s.start && n.end == s.end
}
var sI = typeof requestAnimationFrame < "u" ? Ta : bp
  , rI = ( () => {
    class n extends nI {
        elementRef = I(si);
        _changeDetectorRef = I(Zs);
        _scrollStrategy = I(ef, {
            optional: !0
        });
        scrollable = I(Jh, {
            optional: !0
        });
        _platform = I(yl);
        _detachedSubject = new ue;
        _renderedRangeSubject = new ue;
        get orientation() {
            return this._orientation
        }
        set orientation(r) {
            this._orientation !== r && (this._orientation = r,
            this._calculateSpacerSize())
        }
        _orientation = "vertical";
        appendOnly = !1;
        scrolledIndexChange = new To(r => this._scrollStrategy.scrolledIndexChange.subscribe(e => Promise.resolve().then( () => this.ngZone.run( () => r.next(e)))));
        _contentWrapper;
        renderedRangeStream = this._renderedRangeSubject;
        _totalContentSize = 0;
        _totalContentWidth = "";
        _totalContentHeight = "";
        _renderedContentTransform;
        _renderedRange = {
            start: 0,
            end: 0
        };
        _dataLength = 0;
        _viewportSize = 0;
        _forOf;
        _renderedContentOffset = 0;
        _renderedContentOffsetNeedsRewrite = !1;
        _isChangeDetectionPending = !1;
        _runAfterChangeDetection = [];
        _viewportChanges = Xn.EMPTY;
        _injector = I(kn);
        _isDestroyed = !1;
        constructor() {
            super();
            let r = I(Tu);
            this._scrollStrategy,
            this._viewportChanges = r.change().subscribe( () => {
                this.checkViewportSize()
            }
            ),
            this.scrollable || (this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),
            this.scrollable = this)
        }
        ngOnInit() {
            this._platform.isBrowser && (this.scrollable === this && super.ngOnInit(),
            this.ngZone.runOutsideAngular( () => Promise.resolve().then( () => {
                this._measureViewportSize(),
                this._scrollStrategy.attach(this),
                this.scrollable.elementScrolled().pipe(Zo(null), Pa(0, sI), sn(this._destroyed)).subscribe( () => this._scrollStrategy.onContentScrolled()),
                this._markChangeDetectionNeeded()
            }
            )))
        }
        ngOnDestroy() {
            this.detach(),
            this._scrollStrategy.detach(),
            this._renderedRangeSubject.complete(),
            this._detachedSubject.complete(),
            this._viewportChanges.unsubscribe(),
            this._isDestroyed = !0,
            super.ngOnDestroy()
        }
        attach(r) {
            this._forOf,
            this.ngZone.runOutsideAngular( () => {
                this._forOf = r,
                this._forOf.dataStream.pipe(sn(this._detachedSubject)).subscribe(e => {
                    let i = e.length;
                    i !== this._dataLength && (this._dataLength = i,
                    this._scrollStrategy.onDataLengthChanged()),
                    this._doChangeDetection()
                }
                )
            }
            )
        }
        detach() {
            this._forOf = null,
            this._detachedSubject.next()
        }
        getDataLength() {
            return this._dataLength
        }
        getViewportSize() {
            return this._viewportSize
        }
        getRenderedRange() {
            return this._renderedRange
        }
        measureBoundingClientRectWithScrollOffset(r) {
            return this.getElementRef().nativeElement.getBoundingClientRect()[r]
        }
        setTotalContentSize(r) {
            this._totalContentSize !== r && (this._totalContentSize = r,
            this._calculateSpacerSize(),
            this._markChangeDetectionNeeded())
        }
        setRenderedRange(r) {
            oI(this._renderedRange, r) || (this.appendOnly && (r = {
                start: 0,
                end: Math.max(this._renderedRange.end, r.end)
            }),
            this._renderedRangeSubject.next(this._renderedRange = r),
            this._markChangeDetectionNeeded( () => this._scrollStrategy.onContentRendered()))
        }
        getOffsetToRenderedContentStart() {
            return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset
        }
        setRenderedContentOffset(r, e="to-start") {
            r = this.appendOnly && e === "to-start" ? 0 : r;
            let i = this.dir && this.dir.value == "rtl"
              , a = this.orientation == "horizontal"
              , u = a ? "X" : "Y"
              , g = `translate${u}(${Number((a && i ? -1 : 1) * r)}px)`;
            this._renderedContentOffset = r,
            e === "to-end" && (g += ` translate${u}(-100%)`,
            this._renderedContentOffsetNeedsRewrite = !0),
            this._renderedContentTransform != g && (this._renderedContentTransform = g,
            this._markChangeDetectionNeeded( () => {
                this._renderedContentOffsetNeedsRewrite ? (this._renderedContentOffset -= this.measureRenderedContentSize(),
                this._renderedContentOffsetNeedsRewrite = !1,
                this.setRenderedContentOffset(this._renderedContentOffset)) : this._scrollStrategy.onRenderedOffsetChanged()
            }
            ))
        }
        scrollToOffset(r, e="auto") {
            let i = {
                behavior: e
            };
            this.orientation === "horizontal" ? i.start = r : i.top = r,
            this.scrollable.scrollTo(i)
        }
        scrollToIndex(r, e="auto") {
            this._scrollStrategy.scrollToIndex(r, e)
        }
        measureScrollOffset(r) {
            let e;
            return this.scrollable == this ? e = i => super.measureScrollOffset(i) : e = i => this.scrollable.measureScrollOffset(i),
            Math.max(0, e(r ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset())
        }
        measureViewportOffset(r) {
            let e, i = "left", a = "right", u = this.dir?.value == "rtl";
            r == "start" ? e = u ? a : i : r == "end" ? e = u ? i : a : r ? e = r : e = this.orientation === "horizontal" ? "left" : "top";
            let p = this.scrollable.measureBoundingClientRectWithScrollOffset(e);
            return this.elementRef.nativeElement.getBoundingClientRect()[e] - p
        }
        measureRenderedContentSize() {
            let r = this._contentWrapper.nativeElement;
            return this.orientation === "horizontal" ? r.offsetWidth : r.offsetHeight
        }
        measureRangeSize(r) {
            return this._forOf ? this._forOf.measureRangeSize(r, this.orientation) : 0
        }
        checkViewportSize() {
            this._measureViewportSize(),
            this._scrollStrategy.onDataLengthChanged()
        }
        _measureViewportSize() {
            this._viewportSize = this.scrollable.measureViewportSize(this.orientation)
        }
        _markChangeDetectionNeeded(r) {
            r && this._runAfterChangeDetection.push(r),
            this._isChangeDetectionPending || (this._isChangeDetectionPending = !0,
            this.ngZone.runOutsideAngular( () => Promise.resolve().then( () => {
                this._doChangeDetection()
            }
            )))
        }
        _doChangeDetection() {
            this._isDestroyed || this.ngZone.run( () => {
                this._changeDetectorRef.markForCheck(),
                this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform,
                Qs( () => {
                    this._isChangeDetectionPending = !1;
                    let r = this._runAfterChangeDetection;
                    this._runAfterChangeDetection = [];
                    for (let e of r)
                        e()
                }
                , {
                    injector: this._injector
                })
            }
            )
        }
        _calculateSpacerSize() {
            this._totalContentHeight = this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`,
            this._totalContentWidth = this.orientation === "horizontal" ? `${this._totalContentSize}px` : ""
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275cmp = ne({
            type: n,
            selectors: [["cdk-virtual-scroll-viewport"]],
            viewQuery: function(e, i) {
                if (e & 1 && Ra(Jx, 7),
                e & 2) {
                    let a;
                    La(a = Ba()) && (i._contentWrapper = a.first)
                }
            },
            hostAttrs: [1, "cdk-virtual-scroll-viewport"],
            hostVars: 4,
            hostBindings: function(e, i) {
                e & 2 && Pi("cdk-virtual-scroll-orientation-horizontal", i.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", i.orientation !== "horizontal")
            },
            inputs: {
                orientation: "orientation",
                appendOnly: [2, "appendOnly", "appendOnly", Bn]
            },
            outputs: {
                scrolledIndexChange: "scrolledIndexChange"
            },
            features: [Qi([{
                provide: tf,
                useFactory: (r, e) => r || e,
                deps: [[new Np, new Op(Jh)], n]
            }]), Eo, Zt],
            ngContentSelectors: Xx,
            decls: 4,
            vars: 4,
            consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
            template: function(e, i) {
                e & 1 && (jp(),
                h(0, "div", 1, 0),
                zp(2),
                f(),
                k(3, "div", 2)),
                e & 2 && (d(3),
                Up("width", i._totalContentWidth)("height", i._totalContentHeight))
            },
            styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],
            encapsulation: 2,
            changeDetection: 0
        })
    }
    return n
}
)();
function Xh(n, s, r) {
    let e = r;
    if (!e.getBoundingClientRect)
        return 0;
    let i = e.getBoundingClientRect();
    return n === "horizontal" ? s === "start" ? i.left : i.right : s === "start" ? i.top : i.bottom
}
var s7 = ( () => {
    class n {
        _viewContainerRef = I(Fa);
        _template = I(tu);
        _differs = I(Gp);
        _viewRepeater = I(Iu);
        _viewport = I(rI, {
            skipSelf: !0
        });
        viewChange = new ue;
        _dataSourceChanges = new ue;
        get cdkVirtualForOf() {
            return this._cdkVirtualForOf
        }
        set cdkVirtualForOf(r) {
            this._cdkVirtualForOf = r,
            Yh(r) ? this._dataSourceChanges.next(r) : this._dataSourceChanges.next(new Il(Da(r) ? r : Array.from(r || [])))
        }
        _cdkVirtualForOf;
        get cdkVirtualForTrackBy() {
            return this._cdkVirtualForTrackBy
        }
        set cdkVirtualForTrackBy(r) {
            this._needsUpdate = !0,
            this._cdkVirtualForTrackBy = r ? (e, i) => r(e + (this._renderedRange ? this._renderedRange.start : 0), i) : void 0
        }
        _cdkVirtualForTrackBy;
        set cdkVirtualForTemplate(r) {
            r && (this._needsUpdate = !0,
            this._template = r)
        }
        get cdkVirtualForTemplateCacheSize() {
            return this._viewRepeater.viewCacheSize
        }
        set cdkVirtualForTemplateCacheSize(r) {
            this._viewRepeater.viewCacheSize = fo(r)
        }
        dataStream = this._dataSourceChanges.pipe(Zo(null), ka(), fe( ([r,e]) => this._changeDataSource(r, e)), Oa(1));
        _differ = null;
        _data;
        _renderedItems;
        _renderedRange;
        _needsUpdate = !1;
        _destroyed = new ue;
        constructor() {
            let r = I(rn);
            this.dataStream.subscribe(e => {
                this._data = e,
                this._onRenderedDataChange()
            }
            ),
            this._viewport.renderedRangeStream.pipe(sn(this._destroyed)).subscribe(e => {
                this._renderedRange = e,
                this.viewChange.observers.length && r.run( () => this.viewChange.next(this._renderedRange)),
                this._onRenderedDataChange()
            }
            ),
            this._viewport.attach(this)
        }
        measureRangeSize(r, e) {
            if (r.start >= r.end)
                return 0;
            r.start < this._renderedRange.start || r.end > this._renderedRange.end;
            let i = r.start - this._renderedRange.start, a = r.end - r.start, u, p;
            for (let g = 0; g < a; g++) {
                let y = this._viewContainerRef.get(g + i);
                if (y && y.rootNodes.length) {
                    u = p = y.rootNodes[0];
                    break
                }
            }
            for (let g = a - 1; g > -1; g--) {
                let y = this._viewContainerRef.get(g + i);
                if (y && y.rootNodes.length) {
                    p = y.rootNodes[y.rootNodes.length - 1];
                    break
                }
            }
            return u && p ? Xh(e, "end", p) - Xh(e, "start", u) : 0
        }
        ngDoCheck() {
            if (this._differ && this._needsUpdate) {
                let r = this._differ.diff(this._renderedItems);
                r ? this._applyChanges(r) : this._updateContext(),
                this._needsUpdate = !1
            }
        }
        ngOnDestroy() {
            this._viewport.detach(),
            this._dataSourceChanges.next(void 0),
            this._dataSourceChanges.complete(),
            this.viewChange.complete(),
            this._destroyed.next(),
            this._destroyed.complete(),
            this._viewRepeater.detach()
        }
        _onRenderedDataChange() {
            this._renderedRange && (this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end),
            this._differ || (this._differ = this._differs.find(this._renderedItems).create( (r, e) => this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(r, e) : e)),
            this._needsUpdate = !0)
        }
        _changeDataSource(r, e) {
            return r && r.disconnect(this),
            this._needsUpdate = !0,
            e ? e.connect(this) : he()
        }
        _updateContext() {
            let r = this._data.length
              , e = this._viewContainerRef.length;
            for (; e--; ) {
                let i = this._viewContainerRef.get(e);
                i.context.index = this._renderedRange.start + e,
                i.context.count = r,
                this._updateComputedContextProperties(i.context),
                i.detectChanges()
            }
        }
        _applyChanges(r) {
            this._viewRepeater.applyChanges(r, this._viewContainerRef, (a, u, p) => this._getEmbeddedViewArgs(a, p), a => a.item),
            r.forEachIdentityChange(a => {
                let u = this._viewContainerRef.get(a.currentIndex);
                u.context.$implicit = a.item
            }
            );
            let e = this._data.length
              , i = this._viewContainerRef.length;
            for (; i--; ) {
                let a = this._viewContainerRef.get(i);
                a.context.index = this._renderedRange.start + i,
                a.context.count = e,
                this._updateComputedContextProperties(a.context)
            }
        }
        _updateComputedContextProperties(r) {
            r.first = r.index === 0,
            r.last = r.index === r.count - 1,
            r.even = r.index % 2 === 0,
            r.odd = !r.even
        }
        _getEmbeddedViewArgs(r, e) {
            return {
                templateRef: this._template,
                context: {
                    $implicit: r.item,
                    cdkVirtualForOf: this._cdkVirtualForOf,
                    index: -1,
                    count: -1,
                    first: !1,
                    last: !1,
                    odd: !1,
                    even: !1
                },
                index: e
            }
        }
        static ngTemplateContextGuard(r, e) {
            return !0
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275dir = Qt({
            type: n,
            selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
            inputs: {
                cdkVirtualForOf: "cdkVirtualForOf",
                cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
                cdkVirtualForTemplate: "cdkVirtualForTemplate",
                cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
            },
            features: [Qi([{
                provide: Iu,
                useClass: wl
            }])]
        })
    }
    return n
}
)();
var Ml = new WeakMap
  , nf = ( () => {
    class n {
        _appRef;
        _injector = I(kn);
        _environmentInjector = I(Ap);
        load(r) {
            let e = this._appRef = this._appRef || this._injector.get($p)
              , i = Ml.get(e);
            i || (i = {
                loaders: new Set,
                refs: []
            },
            Ml.set(e, i),
            e.onDestroy( () => {
                Ml.get(e)?.refs.forEach(a => a.destroy()),
                Ml.delete(e)
            }
            )),
            i.loaders.has(r) || (i.loaders.add(r),
            i.refs.push(Kp(r, {
                environmentInjector: this._environmentInjector
            })))
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275prov = de({
            token: n,
            factory: n.\u0275fac,
            providedIn: "root"
        })
    }
    return n
}
)();
function of(n) {
    return n.buttons === 0 || n.detail === 0
}
function sf(n) {
    let s = n.touches && n.touches[0] || n.changedTouches && n.changedTouches[0];
    return !!s && s.identifier === -1 && (s.radiusX == null || s.radiusX === 1) && (s.radiusY == null || s.radiusY === 1)
}
var Du = {}
  , rf = ( () => {
    class n {
        _appId = I(Rp);
        getId(r) {
            return this._appId !== "ng" && (r += this._appId),
            Du.hasOwnProperty(r) || (Du[r] = 0),
            `${r}${Du[r]++}`
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275prov = de({
            token: n,
            factory: n.\u0275fac,
            providedIn: "root"
        })
    }
    return n
}
)();
function xf(n) {
    let s = n.cloneNode(!0)
      , r = s.querySelectorAll("[id]")
      , e = n.nodeName.toLowerCase();
    s.removeAttribute("id");
    for (let i = 0; i < r.length; i++)
        r[i].removeAttribute("id");
    return e === "canvas" ? cf(n, s) : (e === "input" || e === "select" || e === "textarea") && lf(n, s),
    af("canvas", n, s, cf),
    af("input, textarea, select", n, s, lf),
    s
}
function af(n, s, r, e) {
    let i = s.querySelectorAll(n);
    if (i.length) {
        let a = r.querySelectorAll(n);
        for (let u = 0; u < i.length; u++)
            e(i[u], a[u])
    }
}
var aI = 0;
function lf(n, s) {
    s.type !== "file" && (s.value = n.value),
    s.type === "radio" && s.name && (s.name = `mat-clone-${s.name}-${aI++}`)
}
function cf(n, s) {
    let r = s.getContext("2d");
    if (r)
        try {
            r.drawImage(n, 0, 0)
        } catch {}
}
function Ru(n) {
    let s = n.getBoundingClientRect();
    return {
        top: s.top,
        right: s.right,
        bottom: s.bottom,
        left: s.left,
        width: s.width,
        height: s.height,
        x: s.x,
        y: s.y
    }
}
function Pu(n, s, r) {
    let {top: e, bottom: i, left: a, right: u} = n;
    return r >= e && r <= i && s >= a && s <= u
}
function Pr(n, s, r) {
    n.top += s,
    n.bottom = n.top + n.height,
    n.left += r,
    n.right = n.left + n.width
}
function uf(n, s, r, e) {
    let {top: i, right: a, bottom: u, left: p, width: g, height: y} = n
      , O = g * s
      , j = y * s;
    return e > i - j && e < u + j && r > p - O && r < a + O
}
var El = class {
    _document;
    positions = new Map;
    constructor(s) {
        this._document = s
    }
    clear() {
        this.positions.clear()
    }
    cache(s) {
        this.clear(),
        this.positions.set(this._document, {
            scrollPosition: this.getViewportScrollPosition()
        }),
        s.forEach(r => {
            this.positions.set(r, {
                scrollPosition: {
                    top: r.scrollTop,
                    left: r.scrollLeft
                },
                clientRect: Ru(r)
            })
        }
        )
    }
    handleScroll(s) {
        let r = Mr(s)
          , e = this.positions.get(r);
        if (!e)
            return null;
        let i = e.scrollPosition, a, u;
        if (r === this._document) {
            let y = this.getViewportScrollPosition();
            a = y.top,
            u = y.left
        } else
            a = r.scrollTop,
            u = r.scrollLeft;
        let p = i.top - a
          , g = i.left - u;
        return this.positions.forEach( (y, O) => {
            y.clientRect && r !== O && r.contains(O) && Pr(y.clientRect, p, g)
        }
        ),
        i.top = a,
        i.left = u,
        {
            top: p,
            left: g
        }
    }
    getViewportScrollPosition() {
        return {
            top: window.scrollY,
            left: window.scrollX
        }
    }
}
;
function If(n, s) {
    let r = n.rootNodes;
    if (r.length === 1 && r[0].nodeType === s.ELEMENT_NODE)
        return r[0];
    let e = s.createElement("div");
    return r.forEach(i => e.appendChild(i)),
    e
}
function Lu(n, s, r) {
    for (let e in s)
        if (s.hasOwnProperty(e)) {
            let i = s[e];
            i ? n.setProperty(e, i, r?.has(e) ? "important" : "") : n.removeProperty(e)
        }
    return n
}
function Is(n, s) {
    let r = s ? "" : "none";
    Lu(n.style, {
        "touch-action": s ? "" : "none",
        "-webkit-user-drag": s ? "" : "none",
        "-webkit-tap-highlight-color": s ? "" : "transparent",
        "user-select": r,
        "-ms-user-select": r,
        "-webkit-user-select": r,
        "-moz-user-select": r
    })
}
function df(n, s, r) {
    Lu(n.style, {
        position: s ? "" : "fixed",
        top: s ? "" : "0",
        opacity: s ? "" : "0",
        left: s ? "" : "-999em"
    }, r)
}
function Pl(n, s) {
    return s && s != "none" ? n + " " + s : n
}
function mf(n, s) {
    n.style.width = `${s.width}px`,
    n.style.height = `${s.height}px`,
    n.style.transform = kl(s.left, s.top)
}
function kl(n, s) {
    return `translate3d(${Math.round(n)}px, ${Math.round(s)}px, 0)`
}
function pf(n) {
    let s = n.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
    return parseFloat(n) * s
}
function lI(n) {
    let s = getComputedStyle(n)
      , r = Eu(s, "transition-property")
      , e = r.find(p => p === "transform" || p === "all");
    if (!e)
        return 0;
    let i = r.indexOf(e)
      , a = Eu(s, "transition-duration")
      , u = Eu(s, "transition-delay");
    return pf(a[i]) + pf(u[i])
}
function Eu(n, s) {
    return n.getPropertyValue(s).split(",").map(e => e.trim())
}
var cI = new Set(["position"])
  , ku = class {
    _document;
    _rootElement;
    _direction;
    _initialDomRect;
    _previewTemplate;
    _previewClass;
    _pickupPositionOnPage;
    _initialTransform;
    _zIndex;
    _renderer;
    _previewEmbeddedView;
    _preview;
    get element() {
        return this._preview
    }
    constructor(s, r, e, i, a, u, p, g, y, O) {
        this._document = s,
        this._rootElement = r,
        this._direction = e,
        this._initialDomRect = i,
        this._previewTemplate = a,
        this._previewClass = u,
        this._pickupPositionOnPage = p,
        this._initialTransform = g,
        this._zIndex = y,
        this._renderer = O
    }
    attach(s) {
        this._preview = this._createPreview(),
        s.appendChild(this._preview),
        hf(this._preview) && this._preview.showPopover()
    }
    destroy() {
        this._preview.remove(),
        this._previewEmbeddedView?.destroy(),
        this._preview = this._previewEmbeddedView = null
    }
    setTransform(s) {
        this._preview.style.transform = s
    }
    getBoundingClientRect() {
        return this._preview.getBoundingClientRect()
    }
    addClass(s) {
        this._preview.classList.add(s)
    }
    getTransitionDuration() {
        return lI(this._preview)
    }
    addEventListener(s, r) {
        return this._renderer.listen(this._preview, s, r)
    }
    _createPreview() {
        let s = this._previewTemplate, r = this._previewClass, e = s ? s.template : null, i;
        if (e && s) {
            let a = s.matchSize ? this._initialDomRect : null
              , u = s.viewContainer.createEmbeddedView(e, s.context);
            u.detectChanges(),
            i = If(u, this._document),
            this._previewEmbeddedView = u,
            s.matchSize ? mf(i, a) : i.style.transform = kl(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y)
        } else
            i = xf(this._rootElement),
            mf(i, this._initialDomRect),
            this._initialTransform && (i.style.transform = this._initialTransform);
        return Lu(i.style, {
            "pointer-events": "none",
            margin: hf(i) ? "0 auto 0 0" : "0",
            position: "fixed",
            top: "0",
            left: "0",
            "z-index": this._zIndex + ""
        }, cI),
        Is(i, !1),
        i.classList.add("cdk-drag-preview"),
        i.setAttribute("popover", "manual"),
        i.setAttribute("dir", this._direction),
        r && (Array.isArray(r) ? r.forEach(a => i.classList.add(a)) : i.classList.add(r)),
        i
    }
}
;
function hf(n) {
    return "showPopover"in n
}
var ff = wr({
    passive: !0
})
  , Tl = wr({
    passive: !1
})
  , gf = wr({
    passive: !1,
    capture: !0
})
  , uI = 800
  , _f = new Set(["position"])
  , Ou = class {
    _config;
    _document;
    _ngZone;
    _viewportRuler;
    _dragDropRegistry;
    _renderer;
    _preview;
    _previewContainer;
    _placeholderRef;
    _placeholder;
    _pickupPositionInElement;
    _pickupPositionOnPage;
    _anchor;
    _passiveTransform = {
        x: 0,
        y: 0
    };
    _activeTransform = {
        x: 0,
        y: 0
    };
    _initialTransform;
    _hasStartedDragging = Ie(!1);
    _hasMoved;
    _initialContainer;
    _initialIndex;
    _parentPositions;
    _moveEvents = new ue;
    _pointerDirectionDelta;
    _pointerPositionAtLastDirectionChange;
    _lastKnownPointerPosition;
    _rootElement;
    _ownerSVGElement;
    _rootElementTapHighlight;
    _pointerMoveSubscription = Xn.EMPTY;
    _pointerUpSubscription = Xn.EMPTY;
    _scrollSubscription = Xn.EMPTY;
    _resizeSubscription = Xn.EMPTY;
    _lastTouchEventTime;
    _dragStartTime;
    _boundaryElement = null;
    _nativeInteractionsEnabled = !0;
    _initialDomRect;
    _previewRect;
    _boundaryRect;
    _previewTemplate;
    _placeholderTemplate;
    _handles = [];
    _disabledHandles = new Set;
    _dropContainer;
    _direction = "ltr";
    _parentDragRef;
    _cachedShadowRoot;
    lockAxis;
    dragStartDelay = 0;
    previewClass;
    scale = 1;
    get disabled() {
        return this._disabled || !!(this._dropContainer && this._dropContainer.disabled)
    }
    set disabled(s) {
        s !== this._disabled && (this._disabled = s,
        this._toggleNativeDragInteractions(),
        this._handles.forEach(r => Is(r, s)))
    }
    _disabled = !1;
    beforeStarted = new ue;
    started = new ue;
    released = new ue;
    ended = new ue;
    entered = new ue;
    exited = new ue;
    dropped = new ue;
    moved = this._moveEvents;
    data;
    constrainPosition;
    constructor(s, r, e, i, a, u, p) {
        this._config = r,
        this._document = e,
        this._ngZone = i,
        this._viewportRuler = a,
        this._dragDropRegistry = u,
        this._renderer = p,
        this.withRootElement(s).withParent(r.parentDragRef || null),
        this._parentPositions = new El(e),
        u.registerDragItem(this)
    }
    getPlaceholderElement() {
        return this._placeholder
    }
    getRootElement() {
        return this._rootElement
    }
    getVisibleElement() {
        return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement()
    }
    withHandles(s) {
        this._handles = s.map(e => bn(e)),
        this._handles.forEach(e => Is(e, this.disabled)),
        this._toggleNativeDragInteractions();
        let r = new Set;
        return this._disabledHandles.forEach(e => {
            this._handles.indexOf(e) > -1 && r.add(e)
        }
        ),
        this._disabledHandles = r,
        this
    }
    withPreviewTemplate(s) {
        return this._previewTemplate = s,
        this
    }
    withPlaceholderTemplate(s) {
        return this._placeholderTemplate = s,
        this
    }
    withRootElement(s) {
        let r = bn(s);
        return r !== this._rootElement && (this._rootElement && this._removeRootElementListeners(this._rootElement),
        this._ngZone.runOutsideAngular( () => {
            r.addEventListener("mousedown", this._pointerDown, Tl),
            r.addEventListener("touchstart", this._pointerDown, ff),
            r.addEventListener("dragstart", this._nativeDragStart, Tl)
        }
        ),
        this._initialTransform = void 0,
        this._rootElement = r),
        typeof SVGElement < "u" && this._rootElement instanceof SVGElement && (this._ownerSVGElement = this._rootElement.ownerSVGElement),
        this
    }
    withBoundaryElement(s) {
        return this._boundaryElement = s ? bn(s) : null,
        this._resizeSubscription.unsubscribe(),
        s && (this._resizeSubscription = this._viewportRuler.change(10).subscribe( () => this._containInsideBoundaryOnResize())),
        this
    }
    withParent(s) {
        return this._parentDragRef = s,
        this
    }
    dispose() {
        this._removeRootElementListeners(this._rootElement),
        this.isDragging() && this._rootElement?.remove(),
        this._anchor?.remove(),
        this._destroyPreview(),
        this._destroyPlaceholder(),
        this._dragDropRegistry.removeDragItem(this),
        this._removeListeners(),
        this.beforeStarted.complete(),
        this.started.complete(),
        this.released.complete(),
        this.ended.complete(),
        this.entered.complete(),
        this.exited.complete(),
        this.dropped.complete(),
        this._moveEvents.complete(),
        this._handles = [],
        this._disabledHandles.clear(),
        this._dropContainer = void 0,
        this._resizeSubscription.unsubscribe(),
        this._parentPositions.clear(),
        this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null
    }
    isDragging() {
        return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this)
    }
    reset() {
        this._rootElement.style.transform = this._initialTransform || "",
        this._activeTransform = {
            x: 0,
            y: 0
        },
        this._passiveTransform = {
            x: 0,
            y: 0
        }
    }
    disableHandle(s) {
        !this._disabledHandles.has(s) && this._handles.indexOf(s) > -1 && (this._disabledHandles.add(s),
        Is(s, !0))
    }
    enableHandle(s) {
        this._disabledHandles.has(s) && (this._disabledHandles.delete(s),
        Is(s, this.disabled))
    }
    withDirection(s) {
        return this._direction = s,
        this
    }
    _withDropContainer(s) {
        this._dropContainer = s
    }
    getFreeDragPosition() {
        let s = this.isDragging() ? this._activeTransform : this._passiveTransform;
        return {
            x: s.x,
            y: s.y
        }
    }
    setFreeDragPosition(s) {
        return this._activeTransform = {
            x: 0,
            y: 0
        },
        this._passiveTransform.x = s.x,
        this._passiveTransform.y = s.y,
        this._dropContainer || this._applyRootElementTransform(s.x, s.y),
        this
    }
    withPreviewContainer(s) {
        return this._previewContainer = s,
        this
    }
    _sortFromLastPointerPosition() {
        let s = this._lastKnownPointerPosition;
        s && this._dropContainer && this._updateActiveDropContainer(this._getConstrainedPointerPosition(s), s)
    }
    _removeListeners() {
        this._pointerMoveSubscription.unsubscribe(),
        this._pointerUpSubscription.unsubscribe(),
        this._scrollSubscription.unsubscribe(),
        this._getShadowRoot()?.removeEventListener("selectstart", bf, gf)
    }
    _destroyPreview() {
        this._preview?.destroy(),
        this._preview = null
    }
    _destroyPlaceholder() {
        this._placeholder?.remove(),
        this._placeholderRef?.destroy(),
        this._placeholder = this._placeholderRef = null
    }
    _pointerDown = s => {
        if (this.beforeStarted.next(),
        this._handles.length) {
            let r = this._getTargetHandle(s);
            r && !this._disabledHandles.has(r) && !this.disabled && this._initializeDragSequence(r, s)
        } else
            this.disabled || this._initializeDragSequence(this._rootElement, s)
    }
    ;
    _pointerMove = s => {
        let r = this._getPointerPositionOnPage(s);
        if (!this._hasStartedDragging()) {
            let i = Math.abs(r.x - this._pickupPositionOnPage.x)
              , a = Math.abs(r.y - this._pickupPositionOnPage.y);
            if (i + a >= this._config.dragStartThreshold) {
                let p = Date.now() >= this._dragStartTime + this._getDragStartDelay(s)
                  , g = this._dropContainer;
                if (!p) {
                    this._endDragSequence(s);
                    return
                }
                (!g || !g.isDragging() && !g.isReceiving()) && (s.cancelable && s.preventDefault(),
                this._hasStartedDragging.set(!0),
                this._ngZone.run( () => this._startDragSequence(s)))
            }
            return
        }
        s.cancelable && s.preventDefault();
        let e = this._getConstrainedPointerPosition(r);
        if (this._hasMoved = !0,
        this._lastKnownPointerPosition = r,
        this._updatePointerDirectionDelta(e),
        this._dropContainer)
            this._updateActiveDropContainer(e, r);
        else {
            let i = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage
              , a = this._activeTransform;
            a.x = e.x - i.x + this._passiveTransform.x,
            a.y = e.y - i.y + this._passiveTransform.y,
            this._applyRootElementTransform(a.x, a.y)
        }
        this._moveEvents.observers.length && this._ngZone.run( () => {
            this._moveEvents.next({
                source: this,
                pointerPosition: e,
                event: s,
                distance: this._getDragDistance(e),
                delta: this._pointerDirectionDelta
            })
        }
        )
    }
    ;
    _pointerUp = s => {
        this._endDragSequence(s)
    }
    ;
    _endDragSequence(s) {
        if (this._dragDropRegistry.isDragging(this) && (this._removeListeners(),
        this._dragDropRegistry.stopDragging(this),
        this._toggleNativeDragInteractions(),
        this._handles && (this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight),
        !!this._hasStartedDragging()))
            if (this.released.next({
                source: this,
                event: s
            }),
            this._dropContainer)
                this._dropContainer._stopScrolling(),
                this._animatePreviewToPlaceholder().then( () => {
                    this._cleanupDragArtifacts(s),
                    this._cleanupCachedDimensions(),
                    this._dragDropRegistry.stopDragging(this)
                }
                );
            else {
                this._passiveTransform.x = this._activeTransform.x;
                let r = this._getPointerPositionOnPage(s);
                this._passiveTransform.y = this._activeTransform.y,
                this._ngZone.run( () => {
                    this.ended.next({
                        source: this,
                        distance: this._getDragDistance(r),
                        dropPoint: r,
                        event: s
                    })
                }
                ),
                this._cleanupCachedDimensions(),
                this._dragDropRegistry.stopDragging(this)
            }
    }
    _startDragSequence(s) {
        Er(s) && (this._lastTouchEventTime = Date.now()),
        this._toggleNativeDragInteractions();
        let r = this._getShadowRoot()
          , e = this._dropContainer;
        if (r && this._ngZone.runOutsideAngular( () => {
            r.addEventListener("selectstart", bf, gf)
        }
        ),
        e) {
            let i = this._rootElement
              , a = i.parentNode
              , u = this._placeholder = this._createPlaceholderElement()
              , p = this._anchor = this._anchor || this._document.createComment("");
            a.insertBefore(p, i),
            this._initialTransform = i.style.transform || "",
            this._preview = new ku(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate || null,this.previewClass || null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex || 1e3,this._renderer),
            this._preview.attach(this._getPreviewInsertionPoint(a, r)),
            df(i, !1, _f),
            this._document.body.appendChild(a.replaceChild(u, i)),
            this.started.next({
                source: this,
                event: s
            }),
            e.start(),
            this._initialContainer = e,
            this._initialIndex = e.getItemIndex(this)
        } else
            this.started.next({
                source: this,
                event: s
            }),
            this._initialContainer = this._initialIndex = void 0;
        this._parentPositions.cache(e ? e.getScrollableParents() : [])
    }
    _initializeDragSequence(s, r) {
        this._parentDragRef && r.stopPropagation();
        let e = this.isDragging()
          , i = Er(r)
          , a = !i && r.button !== 0
          , u = this._rootElement
          , p = Mr(r)
          , g = !i && this._lastTouchEventTime && this._lastTouchEventTime + uI > Date.now()
          , y = i ? sf(r) : of(r);
        if (p && p.draggable && r.type === "mousedown" && r.preventDefault(),
        e || a || g || y)
            return;
        if (this._handles.length) {
            let Z = u.style;
            this._rootElementTapHighlight = Z.webkitTapHighlightColor || "",
            Z.webkitTapHighlightColor = "transparent"
        }
        this._hasMoved = !1,
        this._hasStartedDragging.set(this._hasMoved),
        this._removeListeners(),
        this._initialDomRect = this._rootElement.getBoundingClientRect(),
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),
        this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(Z => this._updateOnScroll(Z)),
        this._boundaryElement && (this._boundaryRect = Ru(this._boundaryElement));
        let O = this._previewTemplate;
        this._pickupPositionInElement = O && O.template && !O.matchSize ? {
            x: 0,
            y: 0
        } : this._getPointerPositionInElement(this._initialDomRect, s, r);
        let j = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(r);
        this._pointerDirectionDelta = {
            x: 0,
            y: 0
        },
        this._pointerPositionAtLastDirectionChange = {
            x: j.x,
            y: j.y
        },
        this._dragStartTime = Date.now(),
        this._dragDropRegistry.startDragging(this, r)
    }
    _cleanupDragArtifacts(s) {
        df(this._rootElement, !0, _f),
        this._anchor.parentNode.replaceChild(this._rootElement, this._anchor),
        this._destroyPreview(),
        this._destroyPlaceholder(),
        this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0,
        this._ngZone.run( () => {
            let r = this._dropContainer
              , e = r.getItemIndex(this)
              , i = this._getPointerPositionOnPage(s)
              , a = this._getDragDistance(i)
              , u = r._isOverContainer(i.x, i.y);
            this.ended.next({
                source: this,
                distance: a,
                dropPoint: i,
                event: s
            }),
            this.dropped.next({
                item: this,
                currentIndex: e,
                previousIndex: this._initialIndex,
                container: r,
                previousContainer: this._initialContainer,
                isPointerOverContainer: u,
                distance: a,
                dropPoint: i,
                event: s
            }),
            r.drop(this, e, this._initialIndex, this._initialContainer, u, a, i, s),
            this._dropContainer = this._initialContainer
        }
        )
    }
    _updateActiveDropContainer({x: s, y: r}, {x: e, y: i}) {
        let a = this._initialContainer._getSiblingContainerFromPosition(this, s, r);
        !a && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(s, r) && (a = this._initialContainer),
        a && a !== this._dropContainer && this._ngZone.run( () => {
            this.exited.next({
                item: this,
                container: this._dropContainer
            }),
            this._dropContainer.exit(this),
            this._dropContainer = a,
            this._dropContainer.enter(this, s, r, a === this._initialContainer && a.sortingDisabled ? this._initialIndex : void 0),
            this.entered.next({
                item: this,
                container: a,
                currentIndex: a.getItemIndex(this)
            })
        }
        ),
        this.isDragging() && (this._dropContainer._startScrollingIfNecessary(e, i),
        this._dropContainer._sortItem(this, s, r, this._pointerDirectionDelta),
        this.constrainPosition ? this._applyPreviewTransform(s, r) : this._applyPreviewTransform(s - this._pickupPositionInElement.x, r - this._pickupPositionInElement.y))
    }
    _animatePreviewToPlaceholder() {
        if (!this._hasMoved)
            return Promise.resolve();
        let s = this._placeholder.getBoundingClientRect();
        this._preview.addClass("cdk-drag-animating"),
        this._applyPreviewTransform(s.left, s.top);
        let r = this._preview.getTransitionDuration();
        return r === 0 ? Promise.resolve() : this._ngZone.runOutsideAngular( () => new Promise(e => {
            let i = p => {
                (!p || this._preview && Mr(p) === this._preview.element && p.propertyName === "transform") && (u(),
                e(),
                clearTimeout(a))
            }
              , a = setTimeout(i, r * 1.5)
              , u = this._preview.addEventListener("transitionend", i)
        }
        ))
    }
    _createPlaceholderElement() {
        let s = this._placeholderTemplate, r = s ? s.template : null, e;
        return r ? (this._placeholderRef = s.viewContainer.createEmbeddedView(r, s.context),
        this._placeholderRef.detectChanges(),
        e = If(this._placeholderRef, this._document)) : e = xf(this._rootElement),
        e.style.pointerEvents = "none",
        e.classList.add("cdk-drag-placeholder"),
        e
    }
    _getPointerPositionInElement(s, r, e) {
        let i = r === this._rootElement ? null : r
          , a = i ? i.getBoundingClientRect() : s
          , u = Er(e) ? e.targetTouches[0] : e
          , p = this._getViewportScrollPosition()
          , g = u.pageX - a.left - p.left
          , y = u.pageY - a.top - p.top;
        return {
            x: a.left - s.left + g,
            y: a.top - s.top + y
        }
    }
    _getPointerPositionOnPage(s) {
        let r = this._getViewportScrollPosition()
          , e = Er(s) ? s.touches[0] || s.changedTouches[0] || {
            pageX: 0,
            pageY: 0
        } : s
          , i = e.pageX - r.left
          , a = e.pageY - r.top;
        if (this._ownerSVGElement) {
            let u = this._ownerSVGElement.getScreenCTM();
            if (u) {
                let p = this._ownerSVGElement.createSVGPoint();
                return p.x = i,
                p.y = a,
                p.matrixTransform(u.inverse())
            }
        }
        return {
            x: i,
            y: a
        }
    }
    _getConstrainedPointerPosition(s) {
        let r = this._dropContainer ? this._dropContainer.lockAxis : null
          , {x: e, y: i} = this.constrainPosition ? this.constrainPosition(s, this, this._initialDomRect, this._pickupPositionInElement) : s;
        if (this.lockAxis === "x" || r === "x" ? i = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0) : (this.lockAxis === "y" || r === "y") && (e = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0)),
        this._boundaryRect) {
            let {x: a, y: u} = this.constrainPosition ? {
                x: 0,
                y: 0
            } : this._pickupPositionInElement
              , p = this._boundaryRect
              , {width: g, height: y} = this._getPreviewRect()
              , O = p.top + u
              , j = p.bottom - (y - u)
              , Z = p.left + a
              , xe = p.right - (g - a);
            e = vf(e, Z, xe),
            i = vf(i, O, j)
        }
        return {
            x: e,
            y: i
        }
    }
    _updatePointerDirectionDelta(s) {
        let {x: r, y: e} = s
          , i = this._pointerDirectionDelta
          , a = this._pointerPositionAtLastDirectionChange
          , u = Math.abs(r - a.x)
          , p = Math.abs(e - a.y);
        return u > this._config.pointerDirectionChangeThreshold && (i.x = r > a.x ? 1 : -1,
        a.x = r),
        p > this._config.pointerDirectionChangeThreshold && (i.y = e > a.y ? 1 : -1,
        a.y = e),
        i
    }
    _toggleNativeDragInteractions() {
        if (!this._rootElement || !this._handles)
            return;
        let s = this._handles.length > 0 || !this.isDragging();
        s !== this._nativeInteractionsEnabled && (this._nativeInteractionsEnabled = s,
        Is(this._rootElement, s))
    }
    _removeRootElementListeners(s) {
        s.removeEventListener("mousedown", this._pointerDown, Tl),
        s.removeEventListener("touchstart", this._pointerDown, ff),
        s.removeEventListener("dragstart", this._nativeDragStart, Tl)
    }
    _applyRootElementTransform(s, r) {
        let e = 1 / this.scale
          , i = kl(s * e, r * e)
          , a = this._rootElement.style;
        this._initialTransform == null && (this._initialTransform = a.transform && a.transform != "none" ? a.transform : ""),
        a.transform = Pl(i, this._initialTransform)
    }
    _applyPreviewTransform(s, r) {
        let e = this._previewTemplate?.template ? void 0 : this._initialTransform
          , i = kl(s, r);
        this._preview.setTransform(Pl(i, e))
    }
    _getDragDistance(s) {
        let r = this._pickupPositionOnPage;
        return r ? {
            x: s.x - r.x,
            y: s.y - r.y
        } : {
            x: 0,
            y: 0
        }
    }
    _cleanupCachedDimensions() {
        this._boundaryRect = this._previewRect = void 0,
        this._parentPositions.clear()
    }
    _containInsideBoundaryOnResize() {
        let {x: s, y: r} = this._passiveTransform;
        if (s === 0 && r === 0 || this.isDragging() || !this._boundaryElement)
            return;
        let e = this._rootElement.getBoundingClientRect()
          , i = this._boundaryElement.getBoundingClientRect();
        if (i.width === 0 && i.height === 0 || e.width === 0 && e.height === 0)
            return;
        let a = i.left - e.left
          , u = e.right - i.right
          , p = i.top - e.top
          , g = e.bottom - i.bottom;
        i.width > e.width ? (a > 0 && (s += a),
        u > 0 && (s -= u)) : s = 0,
        i.height > e.height ? (p > 0 && (r += p),
        g > 0 && (r -= g)) : r = 0,
        (s !== this._passiveTransform.x || r !== this._passiveTransform.y) && this.setFreeDragPosition({
            y: r,
            x: s
        })
    }
    _getDragStartDelay(s) {
        let r = this.dragStartDelay;
        return typeof r == "number" ? r : Er(s) ? r.touch : r ? r.mouse : 0
    }
    _updateOnScroll(s) {
        let r = this._parentPositions.handleScroll(s);
        if (r) {
            let e = Mr(s);
            this._boundaryRect && e !== this._boundaryElement && e.contains(this._boundaryElement) && Pr(this._boundaryRect, r.top, r.left),
            this._pickupPositionOnPage.x += r.left,
            this._pickupPositionOnPage.y += r.top,
            this._dropContainer || (this._activeTransform.x -= r.left,
            this._activeTransform.y -= r.top,
            this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y))
        }
    }
    _getViewportScrollPosition() {
        return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition()
    }
    _getShadowRoot() {
        return this._cachedShadowRoot === void 0 && (this._cachedShadowRoot = xl(this._rootElement)),
        this._cachedShadowRoot
    }
    _getPreviewInsertionPoint(s, r) {
        let e = this._previewContainer || "global";
        if (e === "parent")
            return s;
        if (e === "global") {
            let i = this._document;
            return r || i.fullscreenElement || i.webkitFullscreenElement || i.mozFullScreenElement || i.msFullscreenElement || i.body
        }
        return bn(e)
    }
    _getPreviewRect() {
        return (!this._previewRect || !this._previewRect.width && !this._previewRect.height) && (this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect),
        this._previewRect
    }
    _nativeDragStart = s => {
        if (this._handles.length) {
            let r = this._getTargetHandle(s);
            r && !this._disabledHandles.has(r) && !this.disabled && s.preventDefault()
        } else
            this.disabled || s.preventDefault()
    }
    ;
    _getTargetHandle(s) {
        return this._handles.find(r => s.target && (s.target === r || r.contains(s.target)))
    }
}
;
function vf(n, s, r) {
    return Math.max(s, Math.min(r, n))
}
function Er(n) {
    return n.type[0] === "t"
}
function bf(n) {
    n.preventDefault()
}
function wf(n, s, r) {
    let e = Cf(s, n.length - 1)
      , i = Cf(r, n.length - 1);
    if (e === i)
        return;
    let a = n[e]
      , u = i < e ? -1 : 1;
    for (let p = e; p !== i; p += u)
        n[p] = n[p + u];
    n[i] = a
}
function Cf(n, s) {
    return Math.max(0, Math.min(s, n))
}
var Ol = class {
    _dragDropRegistry;
    _element;
    _sortPredicate;
    _itemPositions = [];
    _activeDraggables;
    orientation = "vertical";
    direction;
    constructor(s) {
        this._dragDropRegistry = s
    }
    _previousSwap = {
        drag: null,
        delta: 0,
        overlaps: !1
    };
    start(s) {
        this.withItems(s)
    }
    sort(s, r, e, i) {
        let a = this._itemPositions
          , u = this._getItemIndexFromPointerPosition(s, r, e, i);
        if (u === -1 && a.length > 0)
            return null;
        let p = this.orientation === "horizontal"
          , g = a.findIndex(Re => Re.drag === s)
          , y = a[u]
          , O = a[g].clientRect
          , j = y.clientRect
          , Z = g > u ? 1 : -1
          , xe = this._getItemOffsetPx(O, j, Z)
          , _e = this._getSiblingOffsetPx(g, a, Z)
          , Ne = a.slice();
        return wf(a, g, u),
        a.forEach( (Re, $e) => {
            if (Ne[$e] === Re)
                return;
            let Xe = Re.drag === s
              , Ue = Xe ? xe : _e
              , ft = Xe ? s.getPlaceholderElement() : Re.drag.getRootElement();
            Re.offset += Ue;
            let se = Math.round(Re.offset * (1 / Re.drag.scale));
            p ? (ft.style.transform = Pl(`translate3d(${se}px, 0, 0)`, Re.initialTransform),
            Pr(Re.clientRect, 0, Ue)) : (ft.style.transform = Pl(`translate3d(0, ${se}px, 0)`, Re.initialTransform),
            Pr(Re.clientRect, Ue, 0))
        }
        ),
        this._previousSwap.overlaps = Pu(j, r, e),
        this._previousSwap.drag = y.drag,
        this._previousSwap.delta = p ? i.x : i.y,
        {
            previousIndex: g,
            currentIndex: u
        }
    }
    enter(s, r, e, i) {
        let a = i == null || i < 0 ? this._getItemIndexFromPointerPosition(s, r, e) : i
          , u = this._activeDraggables
          , p = u.indexOf(s)
          , g = s.getPlaceholderElement()
          , y = u[a];
        if (y === s && (y = u[a + 1]),
        !y && (a == null || a === -1 || a < u.length - 1) && this._shouldEnterAsFirstChild(r, e) && (y = u[0]),
        p > -1 && u.splice(p, 1),
        y && !this._dragDropRegistry.isDragging(y)) {
            let O = y.getRootElement();
            O.parentElement.insertBefore(g, O),
            u.splice(a, 0, s)
        } else
            this._element.appendChild(g),
            u.push(s);
        g.style.transform = "",
        this._cacheItemPositions()
    }
    withItems(s) {
        this._activeDraggables = s.slice(),
        this._cacheItemPositions()
    }
    withSortPredicate(s) {
        this._sortPredicate = s
    }
    reset() {
        this._activeDraggables?.forEach(s => {
            let r = s.getRootElement();
            if (r) {
                let e = this._itemPositions.find(i => i.drag === s)?.initialTransform;
                r.style.transform = e || ""
            }
        }
        ),
        this._itemPositions = [],
        this._activeDraggables = [],
        this._previousSwap.drag = null,
        this._previousSwap.delta = 0,
        this._previousSwap.overlaps = !1
    }
    getActiveItemsSnapshot() {
        return this._activeDraggables
    }
    getItemIndex(s) {
        return (this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions).findIndex(e => e.drag === s)
    }
    updateOnScroll(s, r) {
        this._itemPositions.forEach( ({clientRect: e}) => {
            Pr(e, s, r)
        }
        ),
        this._itemPositions.forEach( ({drag: e}) => {
            this._dragDropRegistry.isDragging(e) && e._sortFromLastPointerPosition()
        }
        )
    }
    withElementContainer(s) {
        this._element = s
    }
    _cacheItemPositions() {
        let s = this.orientation === "horizontal";
        this._itemPositions = this._activeDraggables.map(r => {
            let e = r.getVisibleElement();
            return {
                drag: r,
                offset: 0,
                initialTransform: e.style.transform || "",
                clientRect: Ru(e)
            }
        }
        ).sort( (r, e) => s ? r.clientRect.left - e.clientRect.left : r.clientRect.top - e.clientRect.top)
    }
    _getItemOffsetPx(s, r, e) {
        let i = this.orientation === "horizontal"
          , a = i ? r.left - s.left : r.top - s.top;
        return e === -1 && (a += i ? r.width - s.width : r.height - s.height),
        a
    }
    _getSiblingOffsetPx(s, r, e) {
        let i = this.orientation === "horizontal"
          , a = r[s].clientRect
          , u = r[s + e * -1]
          , p = a[i ? "width" : "height"] * e;
        if (u) {
            let g = i ? "left" : "top"
              , y = i ? "right" : "bottom";
            e === -1 ? p -= u.clientRect[g] - a[y] : p += a[g] - u.clientRect[y]
        }
        return p
    }
    _shouldEnterAsFirstChild(s, r) {
        if (!this._activeDraggables.length)
            return !1;
        let e = this._itemPositions
          , i = this.orientation === "horizontal";
        if (e[0].drag !== this._activeDraggables[0]) {
            let u = e[e.length - 1].clientRect;
            return i ? s >= u.right : r >= u.bottom
        } else {
            let u = e[0].clientRect;
            return i ? s <= u.left : r <= u.top
        }
    }
    _getItemIndexFromPointerPosition(s, r, e, i) {
        let a = this.orientation === "horizontal"
          , u = this._itemPositions.findIndex( ({drag: p, clientRect: g}) => {
            if (p === s)
                return !1;
            if (i) {
                let y = a ? i.x : i.y;
                if (p === this._previousSwap.drag && this._previousSwap.overlaps && y === this._previousSwap.delta)
                    return !1
            }
            return a ? r >= Math.floor(g.left) && r < Math.floor(g.right) : e >= Math.floor(g.top) && e < Math.floor(g.bottom)
        }
        );
        return u === -1 || !this._sortPredicate(u, s) ? -1 : u
    }
}
  , Nu = class {
    _document;
    _dragDropRegistry;
    _element;
    _sortPredicate;
    _rootNode;
    _activeItems;
    _previousSwap = {
        drag: null,
        deltaX: 0,
        deltaY: 0,
        overlaps: !1
    };
    _relatedNodes = [];
    constructor(s, r) {
        this._document = s,
        this._dragDropRegistry = r
    }
    start(s) {
        let r = this._element.childNodes;
        this._relatedNodes = [];
        for (let e = 0; e < r.length; e++) {
            let i = r[e];
            this._relatedNodes.push([i, i.nextSibling])
        }
        this.withItems(s)
    }
    sort(s, r, e, i) {
        let a = this._getItemIndexFromPointerPosition(s, r, e)
          , u = this._previousSwap;
        if (a === -1 || this._activeItems[a] === s)
            return null;
        let p = this._activeItems[a];
        if (u.drag === p && u.overlaps && u.deltaX === i.x && u.deltaY === i.y)
            return null;
        let g = this.getItemIndex(s)
          , y = s.getPlaceholderElement()
          , O = p.getRootElement();
        a > g ? O.after(y) : O.before(y),
        wf(this._activeItems, g, a);
        let j = this._getRootNode().elementFromPoint(r, e);
        return u.deltaX = i.x,
        u.deltaY = i.y,
        u.drag = p,
        u.overlaps = O === j || O.contains(j),
        {
            previousIndex: g,
            currentIndex: a
        }
    }
    enter(s, r, e, i) {
        let a = i == null || i < 0 ? this._getItemIndexFromPointerPosition(s, r, e) : i;
        a === -1 && (a = this._getClosestItemIndexToPointer(s, r, e));
        let u = this._activeItems[a]
          , p = this._activeItems.indexOf(s);
        p > -1 && this._activeItems.splice(p, 1),
        u && !this._dragDropRegistry.isDragging(u) ? (this._activeItems.splice(a, 0, s),
        u.getRootElement().before(s.getPlaceholderElement())) : (this._activeItems.push(s),
        this._element.appendChild(s.getPlaceholderElement()))
    }
    withItems(s) {
        this._activeItems = s.slice()
    }
    withSortPredicate(s) {
        this._sortPredicate = s
    }
    reset() {
        let s = this._element
          , r = this._previousSwap;
        for (let e = this._relatedNodes.length - 1; e > -1; e--) {
            let[i,a] = this._relatedNodes[e];
            i.parentNode === s && i.nextSibling !== a && (a === null ? s.appendChild(i) : a.parentNode === s && s.insertBefore(i, a))
        }
        this._relatedNodes = [],
        this._activeItems = [],
        r.drag = null,
        r.deltaX = r.deltaY = 0,
        r.overlaps = !1
    }
    getActiveItemsSnapshot() {
        return this._activeItems
    }
    getItemIndex(s) {
        return this._activeItems.indexOf(s)
    }
    updateOnScroll() {
        this._activeItems.forEach(s => {
            this._dragDropRegistry.isDragging(s) && s._sortFromLastPointerPosition()
        }
        )
    }
    withElementContainer(s) {
        s !== this._element && (this._element = s,
        this._rootNode = void 0)
    }
    _getItemIndexFromPointerPosition(s, r, e) {
        let i = this._getRootNode().elementFromPoint(Math.floor(r), Math.floor(e))
          , a = i ? this._activeItems.findIndex(u => {
            let p = u.getRootElement();
            return i === p || p.contains(i)
        }
        ) : -1;
        return a === -1 || !this._sortPredicate(a, s) ? -1 : a
    }
    _getRootNode() {
        return this._rootNode || (this._rootNode = xl(this._element) || this._document),
        this._rootNode
    }
    _getClosestItemIndexToPointer(s, r, e) {
        if (this._activeItems.length === 0)
            return -1;
        if (this._activeItems.length === 1)
            return 0;
        let i = 1 / 0
          , a = -1;
        for (let u = 0; u < this._activeItems.length; u++) {
            let p = this._activeItems[u];
            if (p !== s) {
                let {x: g, y} = p.getRootElement().getBoundingClientRect()
                  , O = Math.hypot(r - g, e - y);
                O < i && (i = O,
                a = u)
            }
        }
        return a
    }
}
  , Sf = .05
  , Mf = .05
  , ji = function(n) {
    return n[n.NONE = 0] = "NONE",
    n[n.UP = 1] = "UP",
    n[n.DOWN = 2] = "DOWN",
    n
}(ji || {})
  , Yt = function(n) {
    return n[n.NONE = 0] = "NONE",
    n[n.LEFT = 1] = "LEFT",
    n[n.RIGHT = 2] = "RIGHT",
    n
}(Yt || {})
  , Au = class {
    _dragDropRegistry;
    _ngZone;
    _viewportRuler;
    element;
    disabled = !1;
    sortingDisabled = !1;
    lockAxis;
    autoScrollDisabled = !1;
    autoScrollStep = 2;
    enterPredicate = () => !0;
    sortPredicate = () => !0;
    beforeStarted = new ue;
    entered = new ue;
    exited = new ue;
    dropped = new ue;
    sorted = new ue;
    receivingStarted = new ue;
    receivingStopped = new ue;
    data;
    _container;
    _isDragging = !1;
    _parentPositions;
    _sortStrategy;
    _domRect;
    _draggables = [];
    _siblings = [];
    _activeSiblings = new Set;
    _viewportScrollSubscription = Xn.EMPTY;
    _verticalScrollDirection = ji.NONE;
    _horizontalScrollDirection = Yt.NONE;
    _scrollNode;
    _stopScrollTimers = new ue;
    _cachedShadowRoot = null;
    _document;
    _scrollableElements = [];
    _initialScrollSnap;
    _direction = "ltr";
    constructor(s, r, e, i, a) {
        this._dragDropRegistry = r,
        this._ngZone = i,
        this._viewportRuler = a;
        let u = this.element = bn(s);
        this._document = e,
        this.withOrientation("vertical").withElementContainer(u),
        r.registerDropContainer(this),
        this._parentPositions = new El(e)
    }
    dispose() {
        this._stopScrolling(),
        this._stopScrollTimers.complete(),
        this._viewportScrollSubscription.unsubscribe(),
        this.beforeStarted.complete(),
        this.entered.complete(),
        this.exited.complete(),
        this.dropped.complete(),
        this.sorted.complete(),
        this.receivingStarted.complete(),
        this.receivingStopped.complete(),
        this._activeSiblings.clear(),
        this._scrollNode = null,
        this._parentPositions.clear(),
        this._dragDropRegistry.removeDropContainer(this)
    }
    isDragging() {
        return this._isDragging
    }
    start() {
        this._draggingStarted(),
        this._notifyReceivingSiblings()
    }
    enter(s, r, e, i) {
        this._draggingStarted(),
        i == null && this.sortingDisabled && (i = this._draggables.indexOf(s)),
        this._sortStrategy.enter(s, r, e, i),
        this._cacheParentPositions(),
        this._notifyReceivingSiblings(),
        this.entered.next({
            item: s,
            container: this,
            currentIndex: this.getItemIndex(s)
        })
    }
    exit(s) {
        this._reset(),
        this.exited.next({
            item: s,
            container: this
        })
    }
    drop(s, r, e, i, a, u, p, g={}) {
        this._reset(),
        this.dropped.next({
            item: s,
            currentIndex: r,
            previousIndex: e,
            container: this,
            previousContainer: i,
            isPointerOverContainer: a,
            distance: u,
            dropPoint: p,
            event: g
        })
    }
    withItems(s) {
        let r = this._draggables;
        return this._draggables = s,
        s.forEach(e => e._withDropContainer(this)),
        this.isDragging() && (r.filter(i => i.isDragging()).every(i => s.indexOf(i) === -1) ? this._reset() : this._sortStrategy.withItems(this._draggables)),
        this
    }
    withDirection(s) {
        return this._direction = s,
        this._sortStrategy instanceof Ol && (this._sortStrategy.direction = s),
        this
    }
    connectedTo(s) {
        return this._siblings = s.slice(),
        this
    }
    withOrientation(s) {
        if (s === "mixed")
            this._sortStrategy = new Nu(this._document,this._dragDropRegistry);
        else {
            let r = new Ol(this._dragDropRegistry);
            r.direction = this._direction,
            r.orientation = s,
            this._sortStrategy = r
        }
        return this._sortStrategy.withElementContainer(this._container),
        this._sortStrategy.withSortPredicate( (r, e) => this.sortPredicate(r, e, this)),
        this
    }
    withScrollableParents(s) {
        let r = this._container;
        return this._scrollableElements = s.indexOf(r) === -1 ? [r, ...s] : s.slice(),
        this
    }
    withElementContainer(s) {
        if (s === this._container)
            return this;
        let r = bn(this.element)
          , e = this._scrollableElements.indexOf(this._container)
          , i = this._scrollableElements.indexOf(s);
        return e > -1 && this._scrollableElements.splice(e, 1),
        i > -1 && this._scrollableElements.splice(i, 1),
        this._sortStrategy && this._sortStrategy.withElementContainer(s),
        this._cachedShadowRoot = null,
        this._scrollableElements.unshift(s),
        this._container = s,
        this
    }
    getScrollableParents() {
        return this._scrollableElements
    }
    getItemIndex(s) {
        return this._isDragging ? this._sortStrategy.getItemIndex(s) : this._draggables.indexOf(s)
    }
    isReceiving() {
        return this._activeSiblings.size > 0
    }
    _sortItem(s, r, e, i) {
        if (this.sortingDisabled || !this._domRect || !uf(this._domRect, Sf, r, e))
            return;
        let a = this._sortStrategy.sort(s, r, e, i);
        a && this.sorted.next({
            previousIndex: a.previousIndex,
            currentIndex: a.currentIndex,
            container: this,
            item: s
        })
    }
    _startScrollingIfNecessary(s, r) {
        if (this.autoScrollDisabled)
            return;
        let e, i = ji.NONE, a = Yt.NONE;
        if (this._parentPositions.positions.forEach( (u, p) => {
            p === this._document || !u.clientRect || e || uf(u.clientRect, Sf, s, r) && ([i,a] = dI(p, u.clientRect, this._direction, s, r),
            (i || a) && (e = p))
        }
        ),
        !i && !a) {
            let {width: u, height: p} = this._viewportRuler.getViewportSize()
              , g = {
                width: u,
                height: p,
                top: 0,
                right: u,
                bottom: p,
                left: 0
            };
            i = Tf(g, r),
            a = Df(g, s),
            e = window
        }
        e && (i !== this._verticalScrollDirection || a !== this._horizontalScrollDirection || e !== this._scrollNode) && (this._verticalScrollDirection = i,
        this._horizontalScrollDirection = a,
        this._scrollNode = e,
        (i || a) && e ? this._ngZone.runOutsideAngular(this._startScrollInterval) : this._stopScrolling())
    }
    _stopScrolling() {
        this._stopScrollTimers.next()
    }
    _draggingStarted() {
        let s = this._container.style;
        this.beforeStarted.next(),
        this._isDragging = !0,
        this._initialScrollSnap = s.msScrollSnapType || s.scrollSnapType || "",
        s.scrollSnapType = s.msScrollSnapType = "none",
        this._sortStrategy.start(this._draggables),
        this._cacheParentPositions(),
        this._viewportScrollSubscription.unsubscribe(),
        this._listenToScrollEvents()
    }
    _cacheParentPositions() {
        this._parentPositions.cache(this._scrollableElements),
        this._domRect = this._parentPositions.positions.get(this._container).clientRect
    }
    _reset() {
        this._isDragging = !1;
        let s = this._container.style;
        s.scrollSnapType = s.msScrollSnapType = this._initialScrollSnap,
        this._siblings.forEach(r => r._stopReceiving(this)),
        this._sortStrategy.reset(),
        this._stopScrolling(),
        this._viewportScrollSubscription.unsubscribe(),
        this._parentPositions.clear()
    }
    _startScrollInterval = () => {
        this._stopScrolling(),
        wp(0, Ta).pipe(sn(this._stopScrollTimers)).subscribe( () => {
            let s = this._scrollNode
              , r = this.autoScrollStep;
            this._verticalScrollDirection === ji.UP ? s.scrollBy(0, -r) : this._verticalScrollDirection === ji.DOWN && s.scrollBy(0, r),
            this._horizontalScrollDirection === Yt.LEFT ? s.scrollBy(-r, 0) : this._horizontalScrollDirection === Yt.RIGHT && s.scrollBy(r, 0)
        }
        )
    }
    ;
    _isOverContainer(s, r) {
        return this._domRect != null && Pu(this._domRect, s, r)
    }
    _getSiblingContainerFromPosition(s, r, e) {
        return this._siblings.find(i => i._canReceive(s, r, e))
    }
    _canReceive(s, r, e) {
        if (!this._domRect || !Pu(this._domRect, r, e) || !this.enterPredicate(s, this))
            return !1;
        let i = this._getShadowRoot().elementFromPoint(r, e);
        return i ? i === this._container || this._container.contains(i) : !1
    }
    _startReceiving(s, r) {
        let e = this._activeSiblings;
        !e.has(s) && r.every(i => this.enterPredicate(i, this) || this._draggables.indexOf(i) > -1) && (e.add(s),
        this._cacheParentPositions(),
        this._listenToScrollEvents(),
        this.receivingStarted.next({
            initiator: s,
            receiver: this,
            items: r
        }))
    }
    _stopReceiving(s) {
        this._activeSiblings.delete(s),
        this._viewportScrollSubscription.unsubscribe(),
        this.receivingStopped.next({
            initiator: s,
            receiver: this
        })
    }
    _listenToScrollEvents() {
        this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(s => {
            if (this.isDragging()) {
                let r = this._parentPositions.handleScroll(s);
                r && this._sortStrategy.updateOnScroll(r.top, r.left)
            } else
                this.isReceiving() && this._cacheParentPositions()
        }
        )
    }
    _getShadowRoot() {
        if (!this._cachedShadowRoot) {
            let s = xl(this._container);
            this._cachedShadowRoot = s || this._document
        }
        return this._cachedShadowRoot
    }
    _notifyReceivingSiblings() {
        let s = this._sortStrategy.getActiveItemsSnapshot().filter(r => r.isDragging());
        this._siblings.forEach(r => r._startReceiving(this, s))
    }
}
;
function Tf(n, s) {
    let {top: r, bottom: e, height: i} = n
      , a = i * Mf;
    return s >= r - a && s <= r + a ? ji.UP : s >= e - a && s <= e + a ? ji.DOWN : ji.NONE
}
function Df(n, s) {
    let {left: r, right: e, width: i} = n
      , a = i * Mf;
    return s >= r - a && s <= r + a ? Yt.LEFT : s >= e - a && s <= e + a ? Yt.RIGHT : Yt.NONE
}
function dI(n, s, r, e, i) {
    let a = Tf(s, i)
      , u = Df(s, e)
      , p = ji.NONE
      , g = Yt.NONE;
    if (a) {
        let y = n.scrollTop;
        a === ji.UP ? y > 0 && (p = ji.UP) : n.scrollHeight - y > n.clientHeight && (p = ji.DOWN)
    }
    if (u) {
        let y = n.scrollLeft;
        r === "rtl" ? u === Yt.RIGHT ? y < 0 && (g = Yt.RIGHT) : n.scrollWidth + y > n.clientWidth && (g = Yt.LEFT) : u === Yt.LEFT ? y > 0 && (g = Yt.LEFT) : n.scrollWidth - y > n.clientWidth && (g = Yt.RIGHT)
    }
    return [p, g]
}
var Dl = wr({
    passive: !1,
    capture: !0
})
  , mI = ( () => {
    class n {
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275cmp = ne({
            type: n,
            selectors: [["ng-component"]],
            hostAttrs: ["cdk-drag-resets-container", ""],
            decls: 0,
            vars: 0,
            template: function(e, i) {},
            styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}"],
            encapsulation: 2,
            changeDetection: 0
        })
    }
    return n
}
)()
  , Bu = ( () => {
    class n {
        _ngZone = I(rn);
        _document = I(no);
        _styleLoader = I(nf);
        _dropInstances = new Set;
        _dragInstances = new Set;
        _activeDragInstances = Ie([]);
        _globalListeners = new Map;
        _draggingPredicate = r => r.isDragging();
        _domNodesToDirectives = null;
        pointerMove = new ue;
        pointerUp = new ue;
        scroll = new ue;
        constructor() {}
        registerDropContainer(r) {
            this._dropInstances.has(r) || this._dropInstances.add(r)
        }
        registerDragItem(r) {
            this._dragInstances.add(r),
            this._dragInstances.size === 1 && this._ngZone.runOutsideAngular( () => {
                this._document.addEventListener("touchmove", this._persistentTouchmoveListener, Dl)
            }
            )
        }
        removeDropContainer(r) {
            this._dropInstances.delete(r)
        }
        removeDragItem(r) {
            this._dragInstances.delete(r),
            this.stopDragging(r),
            this._dragInstances.size === 0 && this._document.removeEventListener("touchmove", this._persistentTouchmoveListener, Dl)
        }
        startDragging(r, e) {
            if (!(this._activeDragInstances().indexOf(r) > -1) && (this._styleLoader.load(mI),
            this._activeDragInstances.update(i => [...i, r]),
            this._activeDragInstances().length === 1)) {
                let i = e.type.startsWith("touch")
                  , a = {
                    handler: u => this.pointerUp.next(u),
                    options: !0
                };
                i ? (this._globalListeners.set("touchend", a),
                this._globalListeners.set("touchcancel", a)) : this._globalListeners.set("mouseup", a),
                this._globalListeners.set("scroll", {
                    handler: u => this.scroll.next(u),
                    options: !0
                }).set("selectstart", {
                    handler: this._preventDefaultWhileDragging,
                    options: Dl
                }),
                i || this._globalListeners.set("mousemove", {
                    handler: u => this.pointerMove.next(u),
                    options: Dl
                }),
                this._ngZone.runOutsideAngular( () => {
                    this._globalListeners.forEach( (u, p) => {
                        this._document.addEventListener(p, u.handler, u.options)
                    }
                    )
                }
                )
            }
        }
        stopDragging(r) {
            this._activeDragInstances.update(e => {
                let i = e.indexOf(r);
                return i > -1 ? (e.splice(i, 1),
                [...e]) : e
            }
            ),
            this._activeDragInstances().length === 0 && this._clearGlobalListeners()
        }
        isDragging(r) {
            return this._activeDragInstances().indexOf(r) > -1
        }
        scrolled(r) {
            let e = [this.scroll];
            return r && r !== this._document && e.push(new To(i => this._ngZone.runOutsideAngular( () => {
                let u = p => {
                    this._activeDragInstances().length && i.next(p)
                }
                ;
                return r.addEventListener("scroll", u, !0),
                () => {
                    r.removeEventListener("scroll", u, !0)
                }
            }
            ))),
            Ea(...e)
        }
        registerDirectiveNode(r, e) {
            this._domNodesToDirectives ??= new WeakMap,
            this._domNodesToDirectives.set(r, e)
        }
        removeDirectiveNode(r) {
            this._domNodesToDirectives?.delete(r)
        }
        getDragDirectiveForNode(r) {
            return this._domNodesToDirectives?.get(r) || null
        }
        ngOnDestroy() {
            this._dragInstances.forEach(r => this.removeDragItem(r)),
            this._dropInstances.forEach(r => this.removeDropContainer(r)),
            this._domNodesToDirectives = null,
            this._clearGlobalListeners(),
            this.pointerMove.complete(),
            this.pointerUp.complete()
        }
        _preventDefaultWhileDragging = r => {
            this._activeDragInstances().length > 0 && r.preventDefault()
        }
        ;
        _persistentTouchmoveListener = r => {
            this._activeDragInstances().length > 0 && (this._activeDragInstances().some(this._draggingPredicate) && r.preventDefault(),
            this.pointerMove.next(r))
        }
        ;
        _clearGlobalListeners() {
            this._globalListeners.forEach( (r, e) => {
                this._document.removeEventListener(e, r.handler, r.options)
            }
            ),
            this._globalListeners.clear()
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275prov = de({
            token: n,
            factory: n.\u0275fac,
            providedIn: "root"
        })
    }
    return n
}
)()
  , pI = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
}
  , Ef = ( () => {
    class n {
        _document = I(no);
        _ngZone = I(rn);
        _viewportRuler = I(Tu);
        _dragDropRegistry = I(Bu);
        _renderer = I(Na).createRenderer(null, null);
        constructor() {}
        createDrag(r, e=pI) {
            return new Ou(r,e,this._document,this._ngZone,this._viewportRuler,this._dragDropRegistry,this._renderer)
        }
        createDropList(r) {
            return new Au(r,this._dragDropRegistry,this._document,this._ngZone,this._viewportRuler)
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275prov = de({
            token: n,
            factory: n.\u0275fac,
            providedIn: "root"
        })
    }
    return n
}
)()
  , Fu = new ni("CDK_DRAG_PARENT");
var Pf = new ni("CdkDragHandle")
  , j7 = ( () => {
    class n {
        element = I(si);
        _parentDrag = I(Fu, {
            optional: !0,
            skipSelf: !0
        });
        _dragDropRegistry = I(Bu);
        _stateChanges = new ue;
        get disabled() {
            return this._disabled
        }
        set disabled(r) {
            this._disabled = r,
            this._stateChanges.next(this)
        }
        _disabled = !1;
        constructor() {
            this._parentDrag?._addHandle(this)
        }
        ngAfterViewInit() {
            if (!this._parentDrag) {
                let r = this.element.nativeElement.parentElement;
                for (; r; ) {
                    let e = this._dragDropRegistry.getDragDirectiveForNode(r);
                    if (e) {
                        this._parentDrag = e,
                        e._addHandle(this);
                        break
                    }
                    r = r.parentElement
                }
            }
        }
        ngOnDestroy() {
            this._parentDrag?._removeHandle(this),
            this._stateChanges.complete()
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275dir = Qt({
            type: n,
            selectors: [["", "cdkDragHandle", ""]],
            hostAttrs: [1, "cdk-drag-handle"],
            inputs: {
                disabled: [2, "cdkDragHandleDisabled", "disabled", Bn]
            },
            features: [Qi([{
                provide: Pf,
                useExisting: n
            }]), Eo]
        })
    }
    return n
}
)()
  , kf = new ni("CDK_DRAG_CONFIG")
  , Of = new ni("CdkDropList")
  , z7 = ( () => {
    class n {
        element = I(si);
        dropContainer = I(Of, {
            optional: !0,
            skipSelf: !0
        });
        _ngZone = I(rn);
        _viewContainerRef = I(Fa);
        _dir = I(Tr, {
            optional: !0
        });
        _changeDetectorRef = I(Zs);
        _selfHandle = I(Pf, {
            optional: !0,
            self: !0
        });
        _parentDrag = I(Fu, {
            optional: !0,
            skipSelf: !0
        });
        _dragDropRegistry = I(Bu);
        _destroyed = new ue;
        _handles = new at([]);
        _previewTemplate;
        _placeholderTemplate;
        _dragRef;
        data;
        lockAxis;
        rootElementSelector;
        boundaryElement;
        dragStartDelay;
        freeDragPosition;
        get disabled() {
            return this._disabled || !!(this.dropContainer && this.dropContainer.disabled)
        }
        set disabled(r) {
            this._disabled = r,
            this._dragRef.disabled = this._disabled
        }
        _disabled;
        constrainPosition;
        previewClass;
        previewContainer;
        scale = 1;
        started = new jt;
        released = new jt;
        ended = new jt;
        entered = new jt;
        exited = new jt;
        dropped = new jt;
        moved = new To(r => {
            let e = this._dragRef.moved.pipe(D(i => ({
                source: this,
                pointerPosition: i.pointerPosition,
                event: i.event,
                delta: i.delta,
                distance: i.distance
            }))).subscribe(r);
            return () => {
                e.unsubscribe()
            }
        }
        );
        _injector = I(kn);
        constructor() {
            let r = this.dropContainer
              , e = I(kf, {
                optional: !0
            })
              , i = I(Ef);
            this._dragRef = i.createDrag(this.element, {
                dragStartThreshold: e && e.dragStartThreshold != null ? e.dragStartThreshold : 5,
                pointerDirectionChangeThreshold: e && e.pointerDirectionChangeThreshold != null ? e.pointerDirectionChangeThreshold : 5,
                zIndex: e?.zIndex
            }),
            this._dragRef.data = this,
            this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement, this),
            e && this._assignDefaults(e),
            r && (this._dragRef._withDropContainer(r._dropListRef),
            r.addItem(this),
            r._dropListRef.beforeStarted.pipe(sn(this._destroyed)).subscribe( () => {
                this._dragRef.scale = this.scale
            }
            )),
            this._syncInputs(this._dragRef),
            this._handleEvents(this._dragRef)
        }
        getPlaceholderElement() {
            return this._dragRef.getPlaceholderElement()
        }
        getRootElement() {
            return this._dragRef.getRootElement()
        }
        reset() {
            this._dragRef.reset()
        }
        getFreeDragPosition() {
            return this._dragRef.getFreeDragPosition()
        }
        setFreeDragPosition(r) {
            this._dragRef.setFreeDragPosition(r)
        }
        ngAfterViewInit() {
            Qs( () => {
                this._updateRootElement(),
                this._setupHandlesListener(),
                this._dragRef.scale = this.scale,
                this.freeDragPosition && this._dragRef.setFreeDragPosition(this.freeDragPosition)
            }
            , {
                injector: this._injector
            })
        }
        ngOnChanges(r) {
            let e = r.rootElementSelector
              , i = r.freeDragPosition;
            e && !e.firstChange && this._updateRootElement(),
            this._dragRef.scale = this.scale,
            i && !i.firstChange && this.freeDragPosition && this._dragRef.setFreeDragPosition(this.freeDragPosition)
        }
        ngOnDestroy() {
            this.dropContainer && this.dropContainer.removeItem(this),
            this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),
            this._ngZone.runOutsideAngular( () => {
                this._handles.complete(),
                this._destroyed.next(),
                this._destroyed.complete(),
                this._dragRef.dispose()
            }
            )
        }
        _addHandle(r) {
            let e = this._handles.getValue();
            e.push(r),
            this._handles.next(e)
        }
        _removeHandle(r) {
            let e = this._handles.getValue()
              , i = e.indexOf(r);
            i > -1 && (e.splice(i, 1),
            this._handles.next(e))
        }
        _setPreviewTemplate(r) {
            this._previewTemplate = r
        }
        _resetPreviewTemplate(r) {
            r === this._previewTemplate && (this._previewTemplate = null)
        }
        _setPlaceholderTemplate(r) {
            this._placeholderTemplate = r
        }
        _resetPlaceholderTemplate(r) {
            r === this._placeholderTemplate && (this._placeholderTemplate = null)
        }
        _updateRootElement() {
            let r = this.element.nativeElement
              , e = r;
            this.rootElementSelector && (e = r.closest !== void 0 ? r.closest(this.rootElementSelector) : r.parentElement?.closest(this.rootElementSelector)),
            this._dragRef.withRootElement(e || r)
        }
        _getBoundaryElement() {
            let r = this.boundaryElement;
            return r ? typeof r == "string" ? this.element.nativeElement.closest(r) : bn(r) : null
        }
        _syncInputs(r) {
            r.beforeStarted.subscribe( () => {
                if (!r.isDragging()) {
                    let e = this._dir
                      , i = this.dragStartDelay
                      , a = this._placeholderTemplate ? {
                        template: this._placeholderTemplate.templateRef,
                        context: this._placeholderTemplate.data,
                        viewContainer: this._viewContainerRef
                    } : null
                      , u = this._previewTemplate ? {
                        template: this._previewTemplate.templateRef,
                        context: this._previewTemplate.data,
                        matchSize: this._previewTemplate.matchSize,
                        viewContainer: this._viewContainerRef
                    } : null;
                    r.disabled = this.disabled,
                    r.lockAxis = this.lockAxis,
                    r.scale = this.scale,
                    r.dragStartDelay = typeof i == "object" && i ? i : fo(i),
                    r.constrainPosition = this.constrainPosition,
                    r.previewClass = this.previewClass,
                    r.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(a).withPreviewTemplate(u).withPreviewContainer(this.previewContainer || "global"),
                    e && r.withDirection(e.value)
                }
            }
            ),
            r.beforeStarted.pipe(Tt(1)).subscribe( () => {
                if (this._parentDrag) {
                    r.withParent(this._parentDrag._dragRef);
                    return
                }
                let e = this.element.nativeElement.parentElement;
                for (; e; ) {
                    let i = this._dragDropRegistry.getDragDirectiveForNode(e);
                    if (i) {
                        r.withParent(i._dragRef);
                        break
                    }
                    e = e.parentElement
                }
            }
            )
        }
        _handleEvents(r) {
            r.started.subscribe(e => {
                this.started.emit({
                    source: this,
                    event: e.event
                }),
                this._changeDetectorRef.markForCheck()
            }
            ),
            r.released.subscribe(e => {
                this.released.emit({
                    source: this,
                    event: e.event
                })
            }
            ),
            r.ended.subscribe(e => {
                this.ended.emit({
                    source: this,
                    distance: e.distance,
                    dropPoint: e.dropPoint,
                    event: e.event
                }),
                this._changeDetectorRef.markForCheck()
            }
            ),
            r.entered.subscribe(e => {
                this.entered.emit({
                    container: e.container.data,
                    item: this,
                    currentIndex: e.currentIndex
                })
            }
            ),
            r.exited.subscribe(e => {
                this.exited.emit({
                    container: e.container.data,
                    item: this
                })
            }
            ),
            r.dropped.subscribe(e => {
                this.dropped.emit({
                    previousIndex: e.previousIndex,
                    currentIndex: e.currentIndex,
                    previousContainer: e.previousContainer.data,
                    container: e.container.data,
                    isPointerOverContainer: e.isPointerOverContainer,
                    item: this,
                    distance: e.distance,
                    dropPoint: e.dropPoint,
                    event: e.event
                })
            }
            )
        }
        _assignDefaults(r) {
            let {lockAxis: e, dragStartDelay: i, constrainPosition: a, previewClass: u, boundaryElement: p, draggingDisabled: g, rootElementSelector: y, previewContainer: O} = r;
            this.disabled = g ?? !1,
            this.dragStartDelay = i || 0,
            e && (this.lockAxis = e),
            a && (this.constrainPosition = a),
            u && (this.previewClass = u),
            p && (this.boundaryElement = p),
            y && (this.rootElementSelector = y),
            O && (this.previewContainer = O)
        }
        _setupHandlesListener() {
            this._handles.pipe(Q(r => {
                let e = r.map(i => i.element);
                this._selfHandle && this.rootElementSelector && e.push(this.element),
                this._dragRef.withHandles(e)
            }
            ), fe(r => Ea(...r.map(e => e._stateChanges.pipe(Zo(e))))), sn(this._destroyed)).subscribe(r => {
                let e = this._dragRef
                  , i = r.element.nativeElement;
                r.disabled ? e.disableHandle(i) : e.enableHandle(i)
            }
            )
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275dir = Qt({
            type: n,
            selectors: [["", "cdkDrag", ""]],
            hostAttrs: [1, "cdk-drag"],
            hostVars: 4,
            hostBindings: function(e, i) {
                e & 2 && Pi("cdk-drag-disabled", i.disabled)("cdk-drag-dragging", i._dragRef.isDragging())
            },
            inputs: {
                data: [0, "cdkDragData", "data"],
                lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
                rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
                boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
                dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
                freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
                disabled: [2, "cdkDragDisabled", "disabled", Bn],
                constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
                previewClass: [0, "cdkDragPreviewClass", "previewClass"],
                previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
                scale: [2, "cdkDragScale", "scale", qp]
            },
            outputs: {
                started: "cdkDragStarted",
                released: "cdkDragReleased",
                ended: "cdkDragEnded",
                entered: "cdkDragEntered",
                exited: "cdkDragExited",
                dropped: "cdkDragDropped",
                moved: "cdkDragMoved"
            },
            exportAs: ["cdkDrag"],
            features: [Qi([{
                provide: Fu,
                useExisting: n
            }]), Eo, Pn]
        })
    }
    return n
}
)()
  , yf = new ni("CdkDropListGroup");
var W7 = ( () => {
    class n {
        element = I(si);
        _changeDetectorRef = I(Zs);
        _scrollDispatcher = I(Mu);
        _dir = I(Tr, {
            optional: !0
        });
        _group = I(yf, {
            optional: !0,
            skipSelf: !0
        });
        _destroyed = new ue;
        _scrollableParentsResolved;
        static _dropLists = [];
        _dropListRef;
        connectedTo = [];
        data;
        orientation;
        id = I(rf).getId("cdk-drop-list-");
        lockAxis;
        get disabled() {
            return this._disabled || !!this._group && this._group.disabled
        }
        set disabled(r) {
            this._dropListRef.disabled = this._disabled = r
        }
        _disabled;
        sortingDisabled;
        enterPredicate = () => !0;
        sortPredicate = () => !0;
        autoScrollDisabled;
        autoScrollStep;
        elementContainerSelector;
        dropped = new jt;
        entered = new jt;
        exited = new jt;
        sorted = new jt;
        _unsortedItems = new Set;
        constructor() {
            let r = I(Ef)
              , e = I(kf, {
                optional: !0
            });
            this._dropListRef = r.createDropList(this.element),
            this._dropListRef.data = this,
            e && this._assignDefaults(e),
            this._dropListRef.enterPredicate = (i, a) => this.enterPredicate(i.data, a.data),
            this._dropListRef.sortPredicate = (i, a, u) => this.sortPredicate(i, a.data, u.data),
            this._setupInputSyncSubscription(this._dropListRef),
            this._handleEvents(this._dropListRef),
            n._dropLists.push(this),
            this._group && this._group._items.add(this)
        }
        addItem(r) {
            this._unsortedItems.add(r),
            this._dropListRef.isDragging() && this._syncItemsWithRef()
        }
        removeItem(r) {
            this._unsortedItems.delete(r),
            this._dropListRef.isDragging() && this._syncItemsWithRef()
        }
        getSortedItems() {
            return Array.from(this._unsortedItems).sort( (r, e) => r._dragRef.getVisibleElement().compareDocumentPosition(e._dragRef.getVisibleElement()) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1)
        }
        ngOnDestroy() {
            let r = n._dropLists.indexOf(this);
            r > -1 && n._dropLists.splice(r, 1),
            this._group && this._group._items.delete(this),
            this._unsortedItems.clear(),
            this._dropListRef.dispose(),
            this._destroyed.next(),
            this._destroyed.complete()
        }
        _setupInputSyncSubscription(r) {
            this._dir && this._dir.change.pipe(Zo(this._dir.value), sn(this._destroyed)).subscribe(e => r.withDirection(e)),
            r.beforeStarted.subscribe( () => {
                let e = Qh(this.connectedTo).map(i => {
                    if (typeof i == "string") {
                        let a = n._dropLists.find(u => u.id === i);
                        return a
                    }
                    return i
                }
                );
                if (this._group && this._group._items.forEach(i => {
                    e.indexOf(i) === -1 && e.push(i)
                }
                ),
                !this._scrollableParentsResolved) {
                    let i = this._scrollDispatcher.getAncestorScrollContainers(this.element).map(a => a.getElementRef().nativeElement);
                    this._dropListRef.withScrollableParents(i),
                    this._scrollableParentsResolved = !0
                }
                if (this.elementContainerSelector) {
                    let i = this.element.nativeElement.querySelector(this.elementContainerSelector);
                    r.withElementContainer(i)
                }
                r.disabled = this.disabled,
                r.lockAxis = this.lockAxis,
                r.sortingDisabled = this.sortingDisabled,
                r.autoScrollDisabled = this.autoScrollDisabled,
                r.autoScrollStep = fo(this.autoScrollStep, 2),
                r.connectedTo(e.filter(i => i && i !== this).map(i => i._dropListRef)).withOrientation(this.orientation)
            }
            )
        }
        _handleEvents(r) {
            r.beforeStarted.subscribe( () => {
                this._syncItemsWithRef(),
                this._changeDetectorRef.markForCheck()
            }
            ),
            r.entered.subscribe(e => {
                this.entered.emit({
                    container: this,
                    item: e.item.data,
                    currentIndex: e.currentIndex
                })
            }
            ),
            r.exited.subscribe(e => {
                this.exited.emit({
                    container: this,
                    item: e.item.data
                }),
                this._changeDetectorRef.markForCheck()
            }
            ),
            r.sorted.subscribe(e => {
                this.sorted.emit({
                    previousIndex: e.previousIndex,
                    currentIndex: e.currentIndex,
                    container: this,
                    item: e.item.data
                })
            }
            ),
            r.dropped.subscribe(e => {
                this.dropped.emit({
                    previousIndex: e.previousIndex,
                    currentIndex: e.currentIndex,
                    previousContainer: e.previousContainer.data,
                    container: e.container.data,
                    item: e.item.data,
                    isPointerOverContainer: e.isPointerOverContainer,
                    distance: e.distance,
                    dropPoint: e.dropPoint,
                    event: e.event
                }),
                this._changeDetectorRef.markForCheck()
            }
            ),
            Ea(r.receivingStarted, r.receivingStopped).subscribe( () => this._changeDetectorRef.markForCheck())
        }
        _assignDefaults(r) {
            let {lockAxis: e, draggingDisabled: i, sortingDisabled: a, listAutoScrollDisabled: u, listOrientation: p} = r;
            this.disabled = i ?? !1,
            this.sortingDisabled = a ?? !1,
            this.autoScrollDisabled = u ?? !1,
            this.orientation = p || "vertical",
            e && (this.lockAxis = e)
        }
        _syncItemsWithRef() {
            this._dropListRef.withItems(this.getSortedItems().map(r => r._dragRef))
        }
        static \u0275fac = function(e) {
            return new (e || n)
        }
        ;
        static \u0275dir = Qt({
            type: n,
            selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
            hostAttrs: [1, "cdk-drop-list"],
            hostVars: 7,
            hostBindings: function(e, i) {
                e & 2 && (ri("id", i.id),
                Pi("cdk-drop-list-disabled", i.disabled)("cdk-drop-list-dragging", i._dropListRef.isDragging())("cdk-drop-list-receiving", i._dropListRef.isReceiving()))
            },
            inputs: {
                connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
                data: [0, "cdkDropListData", "data"],
                orientation: [0, "cdkDropListOrientation", "orientation"],
                id: "id",
                lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
                disabled: [2, "cdkDropListDisabled", "disabled", Bn],
                sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", Bn],
                enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
                sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
                autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", Bn],
                autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
                elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"]
            },
            outputs: {
                dropped: "cdkDropListDropped",
                entered: "cdkDropListEntered",
                exited: "cdkDropListExited",
                sorted: "cdkDropListSorted"
            },
            exportAs: ["cdkDropList"],
            features: [Qi([{
                provide: yf,
                useValue: void 0
            }, {
                provide: Of,
                useExisting: n
            }]), Eo]
        })
    }
    return n
}
)();
export {gl as a, ON as b, ho as c, Ht as d, uF as e, qN as f, tA as g, Ot as h, It as i, ir as j, nr as k, or as l, sr as m, Za as n, RI as o, J0 as p, cr as q, Rw as r, au as s, Lw as t, fs as u, Uw as v, jw as w, Dt as x, Kw as y, Qw as z, qy as A, mo as B, Z0 as C, Xa as D, _n as E, YM as F, cT as G, CT as H, NT as I, th as J, kw as K, YT as L, dD as M, SD as N, UE as O, te as P, ci as Q, xP as R, OP as S, TO as T, Ak as U, o7 as V, rI as W, s7 as X, wf as Y, j7 as Z, z7 as _, W7 as $};
//# sourceMappingURL=chunk-VTNMJBW4.js.map
