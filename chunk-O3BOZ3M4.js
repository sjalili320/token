import {$b as Ie, Bb as Fe, Fc as Mt, Ia as Tt, K as u, Kb as H, Lb as xt, M as _e, N as re, Ob as kt, P as pe, Pb as Bt, R as Se, Ua as fe, Zb as ge, ca as be, dc as Ne, ja as It, ka as w, la as ae, lc as Ot, mc as le, qa as Nt, ra as Ct, sa as vt, ta as wt, vb as q} from "./chunk-OFJ5SZPL.js";
import {Ac as L, Ae as St, Bc as tt, Cd as ht, E as me, Ea as Ge, Fb as P, Fc as ie, Ga as ze, Gb as Qe, Ge as bt, H as R, Hc as Z, Ia as D, Ic as Y, Lc as st, Mb as _, Nb as Ze, Pa as $, Pc as it, Pd as mt, Qc as ot, Rc as rt, Se as ft, T as ue, Tc as nt, Te as gt, Ua as O, Ub as de, Uc as at, Va as Je, Vc as lt, Wc as oe, Wf as Ae, Xc as De, Z as ye, Zf as Pe, _b as Me, a as x, ae as ut, b as M, ca as Ue, db as K, e as qt, ea as te, eb as G, fd as ct, g as $e, ha as Ke, i as E, j as We, mb as Oe, na as se, nc as J, oa as Be, p as U, pb as W, pe as ne, q as B, qb as A, qc as Ye, qe as Ee, rc as Q, re as yt, uc as Re, ug as Xt, vc as qe, ve as dt, xc as Xe, xe as pt, yc as et, z, zc as F} from "./chunk-K3475DQT.js";
var Rt = qt( (ls, Ce) => {
    var je = function() {
        var a = String.fromCharCode
          , m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          , k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$"
          , e = {};
        function t(i, o) {
            if (!e[i]) {
                e[i] = {};
                for (var r = 0; r < i.length; r++)
                    e[i][i.charAt(r)] = r
            }
            return e[i][o]
        }
        var s = {
            compressToBase64: function(i) {
                if (i == null)
                    return "";
                var o = s._compress(i, 6, function(r) {
                    return m.charAt(r)
                });
                switch (o.length % 4) {
                default:
                case 0:
                    return o;
                case 1:
                    return o + "===";
                case 2:
                    return o + "==";
                case 3:
                    return o + "="
                }
            },
            decompressFromBase64: function(i) {
                return i == null ? "" : i == "" ? null : s._decompress(i.length, 32, function(o) {
                    return t(m, i.charAt(o))
                })
            },
            compressToUTF16: function(i) {
                return i == null ? "" : s._compress(i, 15, function(o) {
                    return a(o + 32)
                }) + " "
            },
            decompressFromUTF16: function(i) {
                return i == null ? "" : i == "" ? null : s._decompress(i.length, 16384, function(o) {
                    return i.charCodeAt(o) - 32
                })
            },
            compressToUint8Array: function(i) {
                for (var o = s.compress(i), r = new Uint8Array(o.length * 2), n = 0, l = o.length; n < l; n++) {
                    var p = o.charCodeAt(n);
                    r[n * 2] = p >>> 8,
                    r[n * 2 + 1] = p % 256
                }
                return r
            },
            decompressFromUint8Array: function(i) {
                if (i == null)
                    return s.decompress(i);
                for (var o = new Array(i.length / 2), r = 0, n = o.length; r < n; r++)
                    o[r] = i[r * 2] * 256 + i[r * 2 + 1];
                var l = [];
                return o.forEach(function(p) {
                    l.push(a(p))
                }),
                s.decompress(l.join(""))
            },
            compressToEncodedURIComponent: function(i) {
                return i == null ? "" : s._compress(i, 6, function(o) {
                    return k.charAt(o)
                })
            },
            decompressFromEncodedURIComponent: function(i) {
                return i == null ? "" : i == "" ? null : (i = i.replace(/ /g, "+"),
                s._decompress(i.length, 32, function(o) {
                    return t(k, i.charAt(o))
                }))
            },
            compress: function(i) {
                return s._compress(i, 16, function(o) {
                    return a(o)
                })
            },
            _compress: function(i, o, r) {
                if (i == null)
                    return "";
                var n, l, p = {}, b = {}, I = "", T = "", N = "", C = 2, V = 3, S = 2, f = [], c = 0, h = 0, v;
                for (v = 0; v < i.length; v += 1)
                    if (I = i.charAt(v),
                    Object.prototype.hasOwnProperty.call(p, I) || (p[I] = V++,
                    b[I] = !0),
                    T = N + I,
                    Object.prototype.hasOwnProperty.call(p, T))
                        N = T;
                    else {
                        if (Object.prototype.hasOwnProperty.call(b, N)) {
                            if (N.charCodeAt(0) < 256) {
                                for (n = 0; n < S; n++)
                                    c = c << 1,
                                    h == o - 1 ? (h = 0,
                                    f.push(r(c)),
                                    c = 0) : h++;
                                for (l = N.charCodeAt(0),
                                n = 0; n < 8; n++)
                                    c = c << 1 | l & 1,
                                    h == o - 1 ? (h = 0,
                                    f.push(r(c)),
                                    c = 0) : h++,
                                    l = l >> 1
                            } else {
                                for (l = 1,
                                n = 0; n < S; n++)
                                    c = c << 1 | l,
                                    h == o - 1 ? (h = 0,
                                    f.push(r(c)),
                                    c = 0) : h++,
                                    l = 0;
                                for (l = N.charCodeAt(0),
                                n = 0; n < 16; n++)
                                    c = c << 1 | l & 1,
                                    h == o - 1 ? (h = 0,
                                    f.push(r(c)),
                                    c = 0) : h++,
                                    l = l >> 1
                            }
                            C--,
                            C == 0 && (C = Math.pow(2, S),
                            S++),
                            delete b[N]
                        } else
                            for (l = p[N],
                            n = 0; n < S; n++)
                                c = c << 1 | l & 1,
                                h == o - 1 ? (h = 0,
                                f.push(r(c)),
                                c = 0) : h++,
                                l = l >> 1;
                        C--,
                        C == 0 && (C = Math.pow(2, S),
                        S++),
                        p[T] = V++,
                        N = String(I)
                    }
                if (N !== "") {
                    if (Object.prototype.hasOwnProperty.call(b, N)) {
                        if (N.charCodeAt(0) < 256) {
                            for (n = 0; n < S; n++)
                                c = c << 1,
                                h == o - 1 ? (h = 0,
                                f.push(r(c)),
                                c = 0) : h++;
                            for (l = N.charCodeAt(0),
                            n = 0; n < 8; n++)
                                c = c << 1 | l & 1,
                                h == o - 1 ? (h = 0,
                                f.push(r(c)),
                                c = 0) : h++,
                                l = l >> 1
                        } else {
                            for (l = 1,
                            n = 0; n < S; n++)
                                c = c << 1 | l,
                                h == o - 1 ? (h = 0,
                                f.push(r(c)),
                                c = 0) : h++,
                                l = 0;
                            for (l = N.charCodeAt(0),
                            n = 0; n < 16; n++)
                                c = c << 1 | l & 1,
                                h == o - 1 ? (h = 0,
                                f.push(r(c)),
                                c = 0) : h++,
                                l = l >> 1
                        }
                        C--,
                        C == 0 && (C = Math.pow(2, S),
                        S++),
                        delete b[N]
                    } else
                        for (l = p[N],
                        n = 0; n < S; n++)
                            c = c << 1 | l & 1,
                            h == o - 1 ? (h = 0,
                            f.push(r(c)),
                            c = 0) : h++,
                            l = l >> 1;
                    C--,
                    C == 0 && (C = Math.pow(2, S),
                    S++)
                }
                for (l = 2,
                n = 0; n < S; n++)
                    c = c << 1 | l & 1,
                    h == o - 1 ? (h = 0,
                    f.push(r(c)),
                    c = 0) : h++,
                    l = l >> 1;
                for (; ; )
                    if (c = c << 1,
                    h == o - 1) {
                        f.push(r(c));
                        break
                    } else
                        h++;
                return f.join("")
            },
            decompress: function(i) {
                return i == null ? "" : i == "" ? null : s._decompress(i.length, 32768, function(o) {
                    return i.charCodeAt(o)
                })
            },
            _decompress: function(i, o, r) {
                var n = [], l, p = 4, b = 4, I = 3, T = "", N = [], C, V, S, f, c, h, v, d = {
                    val: r(0),
                    position: o,
                    index: 1
                };
                for (C = 0; C < 3; C += 1)
                    n[C] = C;
                for (S = 0,
                c = Math.pow(2, 2),
                h = 1; h != c; )
                    f = d.val & d.position,
                    d.position >>= 1,
                    d.position == 0 && (d.position = o,
                    d.val = r(d.index++)),
                    S |= (f > 0 ? 1 : 0) * h,
                    h <<= 1;
                switch (l = S) {
                case 0:
                    for (S = 0,
                    c = Math.pow(2, 8),
                    h = 1; h != c; )
                        f = d.val & d.position,
                        d.position >>= 1,
                        d.position == 0 && (d.position = o,
                        d.val = r(d.index++)),
                        S |= (f > 0 ? 1 : 0) * h,
                        h <<= 1;
                    v = a(S);
                    break;
                case 1:
                    for (S = 0,
                    c = Math.pow(2, 16),
                    h = 1; h != c; )
                        f = d.val & d.position,
                        d.position >>= 1,
                        d.position == 0 && (d.position = o,
                        d.val = r(d.index++)),
                        S |= (f > 0 ? 1 : 0) * h,
                        h <<= 1;
                    v = a(S);
                    break;
                case 2:
                    return ""
                }
                for (n[3] = v,
                V = v,
                N.push(v); ; ) {
                    if (d.index > i)
                        return "";
                    for (S = 0,
                    c = Math.pow(2, I),
                    h = 1; h != c; )
                        f = d.val & d.position,
                        d.position >>= 1,
                        d.position == 0 && (d.position = o,
                        d.val = r(d.index++)),
                        S |= (f > 0 ? 1 : 0) * h,
                        h <<= 1;
                    switch (v = S) {
                    case 0:
                        for (S = 0,
                        c = Math.pow(2, 8),
                        h = 1; h != c; )
                            f = d.val & d.position,
                            d.position >>= 1,
                            d.position == 0 && (d.position = o,
                            d.val = r(d.index++)),
                            S |= (f > 0 ? 1 : 0) * h,
                            h <<= 1;
                        n[b++] = a(S),
                        v = b - 1,
                        p--;
                        break;
                    case 1:
                        for (S = 0,
                        c = Math.pow(2, 16),
                        h = 1; h != c; )
                            f = d.val & d.position,
                            d.position >>= 1,
                            d.position == 0 && (d.position = o,
                            d.val = r(d.index++)),
                            S |= (f > 0 ? 1 : 0) * h,
                            h <<= 1;
                        n[b++] = a(S),
                        v = b - 1,
                        p--;
                        break;
                    case 2:
                        return N.join("")
                    }
                    if (p == 0 && (p = Math.pow(2, I),
                    I++),
                    n[v])
                        T = n[v];
                    else if (v === b)
                        T = V + V.charAt(0);
                    else
                        return null;
                    N.push(T),
                    n[b++] = V + T.charAt(0),
                    p--,
                    V = T,
                    p == 0 && (p = Math.pow(2, I),
                    I++)
                }
            }
        };
        return s
    }();
    typeof define == "function" && define.amd ? define(function() {
        return je
    }) : typeof Ce < "u" && Ce != null ? Ce.exports = je : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
        return je
    })
}
);
var X = $e(Rt());
var j = function(a) {
    return a.ByLastTradePriceVar = "byLastTradePriceVar",
    a.BySymbolName = "bySymbolName",
    a.ByTotalTradeValue = "byTotalTradeValue",
    a
}(j || {})
  , Dt = "nonEtfSymbolGroup";
var es = function(a) {
    return a.IFB = "ifb",
    a.TSE = "tse",
    a
}(es || {})
  , y = function(a) {
    return a.Stock = "\u0633\u0647\u0627\u0645",
    a.Precedence = "\u062D\u0642 \u062A\u0642\u062F\u0645",
    a.ETF = "\u0635\u0646\u062F\u0648\u0642 \u0647\u0627\u06CC \u0642\u0627\u0628\u0644 \u0645\u0639\u0627\u0645\u0644\u0647 (ETF)",
    a.CommodityDeposit = "\u0633\u067E\u0631\u062F\u0647 \u06A9\u0627\u0644\u0627\u06CC\u06CC",
    a.HousingBonds = "\u0627\u0648\u0631\u0627\u0642 \u0645\u0633\u06A9\u0646",
    a.DebtPapers = "\u0627\u0648\u0631\u0627\u0642 \u0628\u062F\u0647\u06CC",
    a.SubsidiaryPapers = "\u0627\u0648\u0631\u0627\u0642 \u062A\u0628\u0639\u06CC",
    a.Rest = "\u0633\u0627\u06CC\u0631",
    a.funds = "\u0635\u0646\u062F\u0648\u0642 \u0647\u0627\u06CC \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644\u06CC \u0645\u0641\u06CC\u062F",
    a.Default = "Default",
    a.cars = "\u0628\u0648\u0631\u0633 \u06A9\u0627\u0644\u0627 - \u062E\u0648\u062F\u0631\u0648",
    a.commodityExchangeCertificate = "\u06AF\u0648\u0627\u0647\u06CC \u0628\u0648\u0631\u0633 \u06A9\u0627\u0644\u0627",
    a.callOption = "\u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062E\u0631\u06CC\u062F",
    a.putOption = "\u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0641\u0631\u0648\u0634",
    a
}(y || {})
  , g = class {
    constructor(m, k, e) {
        this.sectorCode = m,
        this.sectorName = k,
        this.sectorIcon = e
    }
}
  , ms = [{
    code: 1,
    fullName: "\u0632\u0631\u0627\u0639\u062A \u0648 \u062E\u062F\u0645\u0627\u062A \u0648\u0627\u0628\u0633\u062A\u0647",
    shortName: "\u0632\u0631\u0627\u0639\u062A"
}, {
    code: 2,
    fullName: "\u062C\u0646\u06AF\u0644\u062F\u0627\u0631\u06CC \u0648 \u0645\u0627\u0647\u06CC\u06AF\u06CC\u0631\u06CC",
    shortName: "\u062C\u0646\u06AF\u0644\u062F\u0627\u0631\u06CC \u0648 \u0645\u0627\u0647\u06CC\u06AF\u06CC\u0631\u06CC"
}, {
    code: 10,
    fullName: "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0632\u063A\u0627\u0644 \u0633\u0646\u06AF",
    shortName: "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0632\u063A\u0627\u0644 \u0633\u0646\u06AF"
}, {
    code: 11,
    fullName: "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0646\u0641\u062A \u06AF\u0627\u0632",
    shortName: "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0646\u0641\u062A \u06AF\u0627\u0632"
}, {
    code: 13,
    fullName: "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u06A9\u0627\u0646\u0647 \u0647\u0627\u06CC \u0641\u0644\u0632\u06CC",
    shortName: "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u06A9\u0627\u0646\u0647 \u0641\u0644\u0632\u06CC"
}, {
    code: 14,
    fullName: "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0633\u0627\u06CC\u0631 \u0645\u0639\u0627\u062F\u0646",
    shortName: "\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0645\u0639\u0627\u062F\u0646"
}, {
    code: 17,
    fullName: "\u0645\u0646\u0633\u0648\u062C\u0627\u062A",
    shortName: "\u0645\u0646\u0633\u0648\u062C\u0627\u062A"
}, {
    code: 19,
    fullName: "\u062F\u0628\u0627\u063A\u06CC\u060C \u067E\u0631\u062F\u0627\u062E\u062A \u0686\u0631\u0645",
    shortName: "\u062F\u0628\u0627\u063A\u06CC"
}, {
    code: 20,
    fullName: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0686\u0648\u0628\u06CC",
    shortName: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0686\u0648\u0628\u06CC"
}, {
    code: 21,
    fullName: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u06A9\u0627\u063A\u0630\u06CC",
    shortName: ""
}, {
    code: 22,
    fullName: "\u0627\u0646\u062A\u0634\u0627\u0631\u060C \u0686\u0627\u067E \u0648 \u062A\u06A9\u062B\u06CC\u0631",
    shortName: "\u0686\u0627\u067E \u0648 \u062A\u06A9\u062B\u06CC\u0631"
}, {
    code: 23,
    fullName: "\u0641\u0631\u0627\u0648\u0631\u062F\u0647 \u0647\u0627\u06CC \u0646\u0641\u062A\u06CC\u060C \u06A9\u06A9 \u0648 \u0633\u0648\u062E\u062A \u0647\u0633\u062A\u0647 \u0627\u06CC",
    shortName: "\u0641\u0631\u0627\u0648\u0631\u062F\u0647 \u0647\u0627\u06CC \u0646\u0641\u062A\u06CC"
}, {
    code: 25,
    fullName: "\u0644\u0627\u0633\u062A\u06CC\u06A9 \u0648 \u067E\u0644\u0627\u0633\u062A\u06CC\u06A9",
    shortName: "\u0644\u0627\u0633\u062A\u06CC\u06A9 \u0648 \u067E\u0644\u0627\u0633\u062A\u06CC\u06A9"
}, {
    code: 26,
    fullName: "\u062A\u0648\u0644\u06CC\u062F \u0645\u062D\u0635\u0648\u0644\u0627\u062A \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631\u06CC \u0648 \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC",
    shortName: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u06A9\u0627\u0645\u067E\u06CC\u0648\u062A\u0631\u06CC"
}, {
    code: 27,
    fullName: "\u0641\u0644\u0632\u0627\u062A \u0627\u0633\u0627\u0633\u06CC",
    shortName: "\u0641\u0644\u0632\u0627\u062A \u0627\u0633\u0627\u0633\u06CC"
}, {
    code: 28,
    fullName: "\u0633\u0627\u062E\u062A \u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0641\u0644\u0632\u06CC",
    shortName: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0641\u0644\u0632\u06CC"
}, {
    code: 29,
    fullName: "\u0645\u0627\u0634\u06CC\u0646 \u0622\u0644\u0627\u062A \u0648 \u062A\u062C\u0647\u06CC\u0632\u0627\u062A",
    shortName: "\u0645\u0627\u0634\u06CC\u0646 \u0622\u0644\u0627\u062A "
}, {
    code: 31,
    fullName: "\u0645\u0627\u0634\u06CC\u0646 \u0622\u0644\u0627\u062A \u0648 \u062F\u0633\u062A\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0628\u0631\u0642\u06CC",
    shortName: "\u0645\u0627\u0634\u06CC\u0646 \u0622\u0644\u0627\u062A \u0628\u0631\u0642\u06CC"
}, {
    code: 32,
    fullName: "\u0633\u0627\u062E\u062A \u0648\u0633\u0627\u06CC\u0644 \u0627\u0631\u062A\u0628\u0627\u0637\u06CC",
    shortName: "\u0648\u0633\u0627\u06CC\u0644 \u0627\u0631\u062A\u0628\u0627\u0637\u06CC"
}, {
    code: 33,
    fullName: "\u0627\u0628\u0632\u0627\u0631 \u067E\u0632\u0634\u06A9\u06CC\u060C \u0627\u067E\u062A\u06CC\u06A9\u06CC \u0648 \u0627\u0646\u062F\u0627\u0632\u0647\u200C\u06AF\u06CC\u0631\u06CC",
    shortName: "\u0627\u0628\u0632\u0627\u0631 \u067E\u0632\u0634\u06A9\u06CC"
}, {
    code: 34,
    fullName: "\u062E\u0648\u062F\u0631\u0648 \u0648 \u0633\u0627\u062E\u062A \u0642\u0637\u0639\u0627\u062A",
    shortName: "\u062E\u0648\u062F\u0631\u0648"
}, {
    code: 35,
    fullName: "\u0633\u0627\u06CC\u0631 \u062A\u062C\u0647\u06CC\u0632\u0627\u062A \u062D\u0645\u0644 \u0648 \u0646\u0642\u0644",
    shortName: "\u062A\u062C\u0647\u06CC\u0632\u0627\u062A \u062D\u0645\u0644 \u0648 \u0646\u0642\u0644"
}, {
    code: 36,
    fullName: "\u0645\u0628\u0644\u0645\u0627\u0646 \u0648 \u0645\u0635\u0646\u0648\u0639\u0627\u062A \u062F\u06CC\u06AF\u0631",
    shortName: "\u0645\u0628\u0644\u0645\u0627\u0646 "
}, {
    code: 38,
    fullName: "\u0642\u0646\u062F \u0648 \u0634\u06A9\u0631",
    shortName: "\u0642\u0646\u062F \u0648 \u0634\u06A9\u0631"
}, {
    code: 39,
    fullName: "\u0634\u0631\u06A9\u062A\u0647\u0627\u06CC \u0686\u0646\u062F \u0631\u0634\u062A\u0647 \u0627\u06CC \u0635\u0646\u0639\u062A\u06CC",
    shortName: "\u0634\u0631\u06A9\u062A\u0647\u0627\u06CC \u0686\u0646\u062F \u0631\u0634\u062A\u0647 \u0627\u06CC"
}, {
    code: 40,
    fullName: "\u0639\u0631\u0636\u0647 \u0628\u0631\u0642\u060C \u06AF\u0627\u0632\u060C \u0628\u062E\u0627\u0631 \u0648\u0622\u0628 \u06AF\u0631\u0645",
    shortName: "\u0639\u0631\u0636\u0647 \u0628\u0631\u0642\u060C \u06AF\u0627\u0632"
}, {
    code: 41,
    fullName: "\u062C\u0645\u0639 \u0622\u0648\u0631\u06CC\u060C \u062A\u0635\u0641\u06CC\u0647 \u0648 \u062A\u0648\u0632\u06CC\u0639 \u0622\u0628",
    shortName: "\u062A\u0635\u0641\u06CC\u0647 \u0648 \u062A\u0648\u0632\u06CC\u0639 \u0622\u0628"
}, {
    code: 42,
    fullName: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u063A\u0630\u0627\u06CC\u06CC \u0628\u0647 \u062C\u0632 \u0642\u0646\u062F",
    shortName: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u063A\u0630\u0627\u06CC\u06CC"
}, {
    code: 43,
    fullName: "\u0645\u0648\u0627\u062F \u0648 \u0645\u062D\u0635\u0648\u0644\u0627\u062A \u062F\u0627\u0631\u0648\u06CC\u06CC",
    shortName: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u062F\u0627\u0631\u0648\u06CC\u06CC"
}, {
    code: 44,
    fullName: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0634\u06CC\u0645\u06CC\u0627\u06CC\u06CC",
    shortName: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0634\u06CC\u0645\u06CC\u0627\u06CC\u06CC"
}, {
    code: 45,
    fullName: "\u067E\u06CC\u0645\u0627\u0646\u06A9\u0627\u0631\u06CC \u0635\u0646\u0639\u062A\u06CC",
    shortName: "\u067E\u06CC\u0645\u0627\u0646\u06A9\u0627\u0631\u06CC \u0635\u0646\u0639\u062A\u06CC"
}, {
    code: 46,
    fullName: "\u062A\u062C\u0627\u0631\u062A \u0639\u0645\u062F\u0647 \u0641\u0631\u0648\u0634\u06CC",
    shortName: "\u0639\u0645\u062F\u0647 \u0641\u0631\u0648\u0634\u06CC"
}, {
    code: 47,
    fullName: "\u062A\u062C\u0627\u0631\u062A \u062E\u0631\u062F\u0647 \u0641\u0631\u0648\u0634\u06CC",
    shortName: "\u062E\u0631\u062F\u0647 \u0641\u0631\u0648\u0634\u06CC"
}, {
    code: 49,
    fullName: "\u06A9\u0627\u0634\u06CC \u0648 \u0633\u0631\u0627\u0645\u06CC\u06A9",
    shortName: "\u06A9\u0627\u0634\u06CC \u0648 \u0633\u0631\u0627\u0645\u06CC\u06A9"
}, {
    code: 50,
    fullName: "\u062A\u062C\u0627\u0631\u062A \u0648\u0633\u0627\u0626\u0637 \u0646\u0642\u0644\u06CC\u0647 \u0645\u0648\u062A\u0648\u0631",
    shortName: "\u0648\u0633\u0627\u0626\u0637 \u0646\u0642\u0644\u06CC\u0647 \u0645\u0648\u062A\u0648\u0631\u06CC"
}, {
    code: 51,
    fullName: "\u062D\u0645\u0644 \u0648 \u0646\u0642\u0644 \u0647\u0648\u0627\u06CC\u06CC",
    shortName: "\u062D\u0645\u0644 \u0648 \u0646\u0642\u0644 \u0647\u0648\u0627\u06CC\u06CC"
}, {
    code: 52,
    fullName: "\u0627\u0646\u0628\u0627\u0631\u062F\u0627\u0631\u06CC",
    shortName: "\u0627\u0646\u0628\u0627\u0631\u062F\u0627\u0631\u06CC"
}, {
    code: 53,
    fullName: "\u0633\u06CC\u0645\u0627\u0646\u060C \u0622\u0647\u06A9 \u0648 \u06AF\u0686",
    shortName: "\u0633\u06CC\u0645\u0627\u0646\u060C \u0622\u0647\u06A9 \u0648 \u06AF\u0686"
}, {
    code: 54,
    fullName: "\u0633\u0627\u06CC\u0631 \u0645\u062D\u0635\u0648\u0644\u0627\u062A \u06A9\u0627\u0646\u06CC \u063A\u06CC\u0631\u0641\u0644\u0632\u06CC",
    shortName: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A \u063A\u06CC\u0631\u0641\u0644\u0632\u06CC"
}, {
    code: 55,
    fullName: "\u0647\u062A\u0644 \u0648 \u0631\u0633\u062A\u0648\u0631\u0627\u0646",
    shortName: "\u0647\u062A\u0644"
}, {
    code: 56,
    fullName: "\u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC\u0647\u0627",
    shortName: "\u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC"
}, {
    code: 57,
    fullName: "\u0628\u0627\u0646\u06A9\u0647\u0627 \u0648 \u0645\u0648\u0633\u0633\u0627\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC",
    shortName: "\u0628\u0627\u0646\u06A9"
}, {
    code: 58,
    fullName: "\u0633\u0627\u06CC\u0631 \u0648\u0627\u0633\u0637\u0647 \u06AF\u0631\u06CC\u0647\u0627\u06CC \u0645\u0627\u0644\u06CC",
    shortName: "\u0633\u0627\u06CC\u0631 \u0648\u0627\u0633\u0637\u0647 \u06AF\u0631\u06CC \u0645\u0627\u0644\u06CC"
}, {
    code: 59,
    fullName: "\u0627\u0648\u0631\u0627\u0642 \u062D\u0642 \u062A\u0642\u062F\u0645 \u0645\u0633\u06A9\u0646",
    shortName: "\u062D\u0642 \u062A\u0642\u062F\u0645 \u0645\u0633\u06A9\u0646"
}, {
    code: 60,
    fullName: "\u062D\u0645\u0644 \u0648\u0646\u0642\u0644\u060C \u0627\u0646\u0628\u0627\u0631\u062F\u0627\u0631\u06CC \u0648 \u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A",
    shortName: "\u062D\u0645\u0644 \u0648\u0646\u0642\u0644"
}, {
    code: 61,
    fullName: "\u062D\u0645\u0644 \u0648 \u0646\u0642\u0644 \u0622\u0628\u06CC",
    shortName: "\u062D\u0645\u0644 \u0648 \u0646\u0642\u0644 \u0622\u0628\u06CC"
}, {
    code: 63,
    fullName: "\u0641\u0639\u0627\u0644\u06CC\u062A \u0647\u0627\u06CC \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0648 \u06A9\u0645\u06A9\u06CC \u062D\u0645\u0644 \u0648 \u0646\u0642\u0644",
    shortName: "\u0641\u0639\u0627\u0644\u06CC\u062A \u0647\u0627\u06CC \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC"
}, {
    code: 64,
    fullName: "\u0645\u062E\u0627\u0628\u0631\u0627\u062A",
    shortName: "\u0645\u062E\u0627\u0628\u0631\u0627\u062A"
}, {
    code: 65,
    fullName: "\u0648\u0627\u0633\u0637\u0647\u200C\u06AF\u0631\u06CC\u200C\u0647\u0627\u06CC \u0645\u0627\u0644\u06CC \u0648 \u067E\u0648\u0644\u06CC",
    shortName: "\u0648\u0627\u0633\u0637\u0647\u200C\u06AF\u0631\u06CC\u200C \u0645\u0627\u0644\u06CC"
}, {
    code: 66,
    fullName: "\u0628\u06CC\u0645\u0647 \u0648 \u0635\u0646\u062F\u0648\u0642 \u0628\u0627\u0632\u0646\u0634\u0633\u062A\u06AF\u06CC",
    shortName: "\u0628\u06CC\u0645\u0647"
}, {
    code: 67,
    fullName: "\u0641\u0639\u0627\u0644\u06CC\u062A\u0647\u0627\u06CC \u06A9\u0645\u06A9\u06CC \u0628\u0647 \u0646\u0647\u0627\u062F\u0647\u0627\u06CC \u0645\u0627\u0644\u06CC",
    shortName: "\u0641\u0639\u0627\u0644\u06CC\u062A\u0647\u0627\u06CC \u06A9\u0645\u06A9\u06CC"
}, {
    code: 68,
    fullName: "\u0635\u0646\u062F\u0648\u0642 \u0642\u0627\u0628\u0644 \u0645\u0639\u0627\u0645\u0644\u0647",
    shortName: "\u0635\u0646\u062F\u0648\u0642 \u0642\u0627\u0628\u0644 \u0645\u0639\u0627\u0645\u0644\u0647"
}, {
    code: 69,
    fullName: "\u0627\u0648\u0631\u0627\u0642 \u062A\u0627\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC",
    shortName: "\u062A\u0627\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC"
}, {
    code: 70,
    fullName: "\u0627\u0646\u0628\u0648\u0647 \u0633\u0627\u0632\u06CC\u060C \u0627\u0645\u0644\u0627\u06A9 \u0648 \u0645\u0633\u062A\u063A\u0644\u0627\u062A",
    shortName: "\u0627\u0646\u0628\u0648\u0647 \u0633\u0627\u0632\u06CC"
}, {
    code: 71,
    fullName: "\u0641\u0639\u0627\u0644\u06CC\u062A \u0645\u0647\u0646\u062F\u0633\u06CC\u060C \u062A\u062C\u0632\u06CC\u0647\u060C \u062A\u062D\u0644\u06CC\u0644 \u0648 \u0622\u0632\u0645\u0627\u06CC\u0634 \u0641\u0646\u06CC",
    shortName: "\u0641\u0639\u0627\u0644\u06CC\u062A \u0645\u0647\u0646\u062F\u0633\u06CC"
}, {
    code: 72,
    fullName: "\u0631\u0627\u06CC\u0627\u0646\u0647 \u0648 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u0648\u0627\u0628\u0633\u062A\u0647",
    shortName: "\u0631\u0627\u06CC\u0627\u0646\u0647"
}, {
    code: 73,
    fullName: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0648 \u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A",
    shortName: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0648 \u0627\u0631\u062A\u0628\u0627\u0637\u0627\u062A"
}, {
    code: 74,
    fullName: "\u062E\u062F\u0645\u0627\u062A \u0641\u0646\u06CC \u0648 \u0645\u0647\u0646\u062F\u0633\u06CC",
    shortName: "\u062E\u062F\u0645\u0627\u062A \u0645\u0647\u0646\u062F\u0633\u06CC"
}, {
    code: 76,
    fullName: "\u0627\u0648\u0631\u0627\u0642 \u0645\u0628\u062A\u0646\u06CC \u0628\u0631 \u062F\u0627\u0631\u0627\u06CC\u06CC \u0641\u06A9\u0631\u06CC",
    shortName: "\u062F\u0627\u0631\u0627\u06CC\u06CC \u0641\u06A9\u0631\u06CC"
}, {
    code: 77,
    fullName: "\u0641\u0639\u0627\u0644\u06CC\u062A \u0647\u0627\u06CC \u0627\u062C\u0627\u0631\u0647 \u0648 \u0644\u06CC\u0632\u06CC\u0646\u06AF",
    shortName: "\u0627\u062C\u0627\u0631\u0647 \u0648 \u0644\u06CC\u0632\u06CC\u0646\u06AF"
}, {
    code: 82,
    fullName: "\u0641\u0639\u0627\u0644\u06CC\u062A \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0627\u062C\u0631\u0627\u0626\u06CC \u0627\u062F\u0627\u0631\u06CC \u0648 \u062D\u0645\u0627\u06CC\u062A \u06A9\u0633\u0628",
    shortName: "\u0641\u0639\u0627\u0644\u06CC\u062A \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC"
}, {
    code: 90,
    fullName: "\u0641\u0639\u0627\u0644\u06CC\u062A \u0647\u0627\u06CC \u0647\u0646\u0631\u06CC\u060C \u0633\u0631\u06AF\u0631\u0645\u06CC",
    shortName: "\u0641\u0639\u0627\u0644\u06CC\u062A \u0647\u0627\u06CC \u0647\u0646\u0631\u06CC"
}, {
    code: 93,
    fullName: "\u0641\u0639\u0627\u0644\u06CC\u062A\u0647\u0627\u06CC \u0641\u0631\u0647\u0646\u06AF\u06CC \u0648 \u0648\u0631\u0632\u0634\u06CC",
    shortName: "\u0641\u0631\u0647\u0646\u06AF\u06CC \u0648 \u0648\u0631\u0632\u0634\u06CC"
}]
  , us = [new g("27","\u0641\u0644\u0632\u0627\u062A","metal"), new g("34","\u062E\u0648\u062F\u0631\u0648\u06CC\u06CC","car"), new g("44","\u0634\u06CC\u0645\u06CC\u0627\u06CC\u06CC","chemical"), new g("57","\u0628\u0627\u0646\u06A9\u06CC","bank"), new g("53","\u0633\u06CC\u0645\u0627\u0646","cement"), new g("23","\u0641\u0631\u0622\u0648\u0631\u062F\u0647 \u0646\u0641\u062A\u06CC","oil"), new g("56","\u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC","investment"), new g("13","\u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0641\u0644\u0632\u0627\u062A","extraction"), new g("70","\u0633\u0627\u062E\u062A\u0645\u0627\u0646","building"), new g("54","\u06A9\u0627\u0646\u06CC \u063A\u06CC\u0631\u0641\u0644\u0632\u06CC","diamond"), new g("66","\u0628\u06CC\u0645\u0647","insurance"), new g("43","\u062F\u0627\u0631\u0648\u06CC\u06CC","medicine"), new g("42","\u063A\u0630\u0627\u06CC\u06CC","food"), new g("38","\u0642\u0646\u062F","sugar"), new g("01","\u0632\u0631\u0627\u0639\u062A","agriculture"), new g("72","\u0631\u0627\u06CC\u0627\u0646\u0647","computer"), new g("60","\u062D\u0645\u0644\u200C\u0648\u200C\u0646\u0642\u0644","transportation"), new g("45","\u067E\u06CC\u0645\u0627\u0646\u06A9\u0627\u0631\u06CC","contracting"), new g("49","\u06A9\u0627\u0634\u06CC","tile"), new g("28","\u0633\u0627\u062E\u062A \u0641\u0644\u0632\u06CC","construction"), new g("25","\u0644\u0627\u0633\u062A\u06CC\u06A9","wheel"), new g("31","\u062F\u0633\u062A\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0628\u0631\u0642\u06CC","electrical-devices"), new g("40","\u062A\u0648\u0644\u06CC\u062F \u0628\u0631\u0642","electricity"), new g("59","\u062A\u0633\u0647\u06CC\u0644\u0627\u062A \u0645\u0633\u06A9\u0646","home-facilities"), new g("68","\u0635\u0646\u062F\u0648\u0642 ETF","safe")]
  , ys = new Map([[y.Stock, [u.None, u.Exchange, u.Tabaee, u.Ekhtiar, u.AtiSaham, u.AtiSabad, u.Fekri, u.PayehYellow, u.PayehOrange, u.PayehRed, u.Koochak, u.Salaf, u.Bond3, u.Bond6, u.INDEX, u.ProMarket, u.AgreedMarket]], [y.ETF, [u.ETFStock, u.ETFFix, u.ETFMixed, u.ETFZaminSakhteman, u.ETFJasuraneh, u.SandoghKala, u.EtfInEtf, u.EtfAmlak, u.ETFKhosusi, u.EtfSector, u.EnergyETF]], [y.DebtPapers, [u.Bond1, u.Bond2, u.Bond4, u.Bond5, u.bond7]], [y.commodityExchangeCertificate, [u.NapeyvastehSiman, u.GovahiBourseKala, u.NapeyvastehZaferan, u.NapeyvastehSekkeh, u.NapeyvastehShisheh, u.NapeyvastehMes, u.NapeyvastehSangAhan, u.NapeyvastehMilgerd, u.Sekkeh]], [y.Precedence, [u.Rights, u.RightYellow, u.RightOrange, u.RightRed, u.RightsKoochak]], [y.HousingBonds, [u.Maskan1, u.Maskan2]], [y.callOption, [u.BuyOptionIfb, u.BuyOptionTse]], [y.putOption, [u.SellOptionIfb, u.SellOptionTse]]])
  , Ve = new Map([[y.Stock, 0], [y.Precedence, 1], [y.ETF, 2], [y.CommodityDeposit, 3], [y.HousingBonds, 4], [y.DebtPapers, 5], [y.callOption, 6], [y.putOption, 7], [y.SubsidiaryPapers, 8], [y.Rest, 9], [y.funds, 10], [y.Default, 11], [y.cars, 12], [y.commodityExchangeCertificate, 13]])
  , ve = function(a) {
    return a[a.Stock = 10] = "Stock",
    a[a.Precedence = 9] = "Precedence",
    a[a.ETF = 8] = "ETF",
    a[a.CommodityDeposit = 7] = "CommodityDeposit",
    a[a.HousingBonds = 6] = "HousingBonds",
    a[a.DebtPapers = 5] = "DebtPapers",
    a[a.SubsidiaryPapers = 4] = "SubsidiaryPapers",
    a[a.Rest = 3] = "Rest",
    a[a.funds = 2] = "funds",
    a[a.Default = 1] = "Default",
    a[a.cars = 11] = "cars",
    a
}(ve || {});
var ee = ( () => {
    let m = class m extends kt {
        get symbols() {
            return this._symbols
        }
        set symbols(e) {
            this._symbols = e,
            e && this.symbolsSubject.next(e)
        }
        get manners() {
            return this._manners
        }
        set manners(e) {
            this._manners = e,
            e && this.mannersSubject.next(e)
        }
        constructor() {
            super(),
            this.unleashService = Je(Mt),
            this.symbolsSubject = new B(this.symbols),
            this.symbols$ = this.symbolsSubject.asObservable(),
            this.notNullSymbols$ = this.symbols$.pipe(ue(e => !!e && !!e.length)),
            this.symbolsByIsin$ = this.notNullSymbols$.pipe(R(e => Object.fromEntries(e?.map(t => [t.symbolIsin, t])))),
            this.mannersSubject = new B(this.manners),
            this.manners$ = this.mannersSubject.asObservable(),
            this.subscribedSymbols = [],
            this.defaultSymbols = [],
            this.awaiter = new B(!1),
            this.symbolIsReceived$ = this.awaiter.pipe(Be(Boolean)),
            this.symbolByIsinSignal = _(null),
            this.OptionSymbols$ = this.symbolIsReceived$.pipe(ze( () => this.symbols$), R(e => e.filter(t => fe(t.marketUnit)))),
            this.OptionBaseIsins$ = this.OptionSymbols$.pipe(R(e => e.map(t => t.baseIsin).filter(Boolean)), R(e => [...new Set(e)])),
            this.OptionBaseIsins = Ee(this.OptionBaseIsins$),
            this.OptionBaseSymbols$ = this.OptionBaseIsins$.pipe(R(e => e.map(t => this.symbolByCompanyIsin?.[t]).filter(Boolean))),
            this.OptionBaseSymbols = Ee(this.OptionBaseSymbols$),
            this.fillSymbols()
        }
        fillSymbols() {
            this.notNullSymbols$.subscribe(e => {
                e && (this.symbolByIsin = Object.fromEntries(e?.map(t => [t.symbolIsin, t])),
                this.symbolByName = Object.fromEntries(e?.map(t => [t.symbolName, t])),
                this.symbolByCompanyIsin = Object.fromEntries(e?.map(t => [t.companyIsin, t])),
                this.symbolByIsinSignal.set(this.symbolByIsin),
                this.awaiter.next(!0))
            }
            )
        }
        getSymbol(e) {
            return E(this, null, function*() {
                return yield me(this.awaiter.pipe(Be(t => t))),
                this.symbolByIsin[e]
            })
        }
        getSymbolStream(e) {
            return this.notNullSymbols$.pipe(R(t => t.find(s => e && s.symbolIsin?.toUpperCase() === e?.toUpperCase())))
        }
        getOptionBaseSymbolStream(e) {
            return this.notNullSymbols$.pipe(R(t => t.find(s => e && s.companyIsin?.toUpperCase() === e?.toUpperCase())))
        }
        isOptionParentSymbol(e) {
            return this.notNullSymbols$.pipe(R(t => {
                let s = t.find(i => i.symbolIsin === e);
                return t.some(i => s && i.baseIsin === s?.companyIsin)
            }
            ))
        }
        getSymbols(e=!1) {
            return E(this, null, function*() {
                return e ? yield me(this.OptionBaseSymbols$) : yield me(this.notNullSymbols$)
            })
        }
        getSymbolsStream() {
            return this.notNullSymbols$
        }
        groupSymbolsByCategory(e) {
            let t = new Map;
            e.forEach(i => {
                t.has(i.searchCategoryName) || t.set(i.searchCategoryName, []);
                let o = t.get(i.searchCategoryName);
                o.push(i),
                t.set(i.searchCategoryName, o)
            }
            );
            let s = new Map;
            for (let i of Object.values(y))
                t.get(i) && s.set(i, t.get(i));
            return s
        }
        getSameSymbols(e, t) {
            return this.symbols?.filter(i => i.sector === t && i.symbolIsin !== e).map(i => M(x({}, i), {
                searchCategoryName: this.getCategoryByIsin(i.symbolIsin)
            })) ?? []
        }
        getSameSymbolsAsObservable(e, t) {
            let s = this.symbols?.filter(i => i.sector === t && i.symbolIsin !== e).map(i => M(x({}, i), {
                searchCategoryName: this.getCategoryByIsin(i.symbolIsin)
            })) ?? [];
            return z(s)
        }
        checkSymbolsOnLoad() {
            this.checkMannersOnLoad(),
            localStorage.removeItem("symbols");
            try {
                let e = localStorage.getItem(H.symbol);
                if (e) {
                    let t = X.default.decompress(e)
                      , s = JSON.parse(t);
                    this.resetSymbols(s.symbols),
                    this.getAllFromRemote(s.hash)
                } else
                    this.getAllFromRemote("null")
            } catch {
                this.getAllFromRemote("null")
            }
        }
        checkMannersOnLoad() {
            let e = localStorage.getItem("manners");
            if (e) {
                let t = JSON.parse(e);
                this.manners = t
            }
            this.getManners()
        }
        getManners() {
            return this.httpService.get(this.mtsPath + this.apiUrls.symbol + "symbols/manners").pipe(D(e => {
                e && (localStorage.setItem("manners", JSON.stringify(e)),
                this.manners = e)
            }
            )).subscribe()
        }
        getAllFromRemote(e) {
            return this.httpService.post(this.mtsPath + this.apiUrls.symbol + "symbols/all", {
                body: {
                    hash: e
                },
                maxRetryAttempts: 2
            }).pipe(te(1), D(t => {
                if (t?.symbols?.length > 0) {
                    t.symbols.forEach(i => {
                        i.symbolName = It(i.symbolName);
                        let o = w(i.symbolName);
                        o !== i.symbolName && (i.searchOptimizeTitle = o)
                    }
                    );
                    let s = X.default.compress(JSON.stringify(t));
                    return localStorage.setItem(H.symbol, s),
                    this.resetSymbols(t.symbols),
                    z(t.symbols)
                } else {
                    if (this.symbols)
                        return z(this.symbols);
                    {
                        let s = localStorage.getItem(H.symbol);
                        if (s) {
                            let i = X.default.decompress(s)
                              , o = JSON.parse(i);
                            return this.resetSymbols(t.symbols),
                            z(o)
                        }
                    }
                }
            }
            )).subscribe()
        }
        updateSymbolIsin(e) {
            let t = this.symbolsSubject.value?.map(i => i.symbolIsin)
              , s = e.filter(i => !t.includes(i));
            s?.length && this.getSome(s).subscribe()
        }
        getSome(e) {
            return this.httpService.post(this.mtsPath + this.apiUrls.symbol + "symbols/some", {
                body: {
                    isins: e
                }
            }).pipe(te(1), D(t => {
                if (t && t?.symbols && t?.symbols?.length > 0) {
                    let s = localStorage.getItem(H.symbol);
                    if (s) {
                        let i = X.default.decompress(s)
                          , o = JSON.parse(i);
                        if (o) {
                            o.symbols = this.uniqueBy([...o?.symbols ?? [], ...t?.symbols ?? []], "symbolIsin");
                            let r = X.default.compress(JSON.stringify(o));
                            localStorage.setItem(H.symbol, r),
                            this.resetSymbols(o.symbols)
                        }
                    }
                    return z(t.symbols)
                }
            }
            ))
        }
        uniqueBy(e, t) {
            return e.reduce( (s, i) => (s.findIndex(r => r[t] === i[t]) === -1 && s.push(i),
            s), [])
        }
        sectors() {
            let e = localStorage.getItem("sectors")
              , t = `${this.mtsPath}${this.apiUrls.symbol}sectors/sieve`
              , s = e ? 1e4 : 0
              , i = {
                page: 0,
                pageSize: 1e3
            };
            return this.httpService.post(t, {
                body: i
            }).pipe(Ke(s), R(o => o?.records), D(o => localStorage.setItem("sectors", JSON.stringify(o))))
        }
        calculateLastTradedPriceVar(e, t) {
            return e - (t ?? 0)
        }
        calculateClosingPriceVarPercent(e, t, s) {
            return t === 0 || !t || !s || s === 0 ? 0 : e > 0 && t > 0 ? Math.round((e - t) / t * 1e4) / 100 : 0
        }
        resetSymbols(e) {
            this.defaultSymbols = e.filter(t => ["IRT3SATF0001", "IRTKMOFD0001", "IRT1ARAM0001", "IRT3AVNF0001", "IRT1STIL0001", "IRT3TVAF0001", "IRT1KHOD0001", "IRT1SIMF0001"].includes(t.symbolIsin)),
            this.symbols = e
        }
        getCategoryByIsin(e) {
            let t = ["IRO1", "IRO3", "IRO7", "IRO8"]
              , s = ["IRR1", "IRR3", "IRR5", "IRR7"]
              , i = ["IRT1", "IRT3", "IRTE", "IRTK"]
              , o = ["IRK1"]
              , r = ["IRO6"]
              , n = ["IRB1", "IRB3", "IRB4", "IRB5", "IRB6", "IRB8"]
              , l = ["IRS4", "IRS5", "IRSA"]
              , p = ["IRO9", "IROA"]
              , b = ["IROF", "IROB"];
            return t.indexOf(e.substring(0, 4)) >= 0 ? y.Stock : s.indexOf(e.substring(0, 4)) >= 0 ? y.Precedence : i.indexOf(e.substring(0, 4)) >= 0 ? y.ETF : o.indexOf(e.substring(0, 4)) >= 0 ? y.CommodityDeposit : r.indexOf(e.substring(0, 4)) >= 0 ? y.HousingBonds : n.indexOf(e.substring(0, 4)) >= 0 ? y.DebtPapers : l.indexOf(e.substring(0, 4)) >= 0 ? y.SubsidiaryPapers : p.indexOf(e.substring(0, 4)) >= 0 ? y.callOption : b.indexOf(e.substring(0, 4)) >= 0 ? y.putOption : y.Rest
        }
        setSymbol(e) {
            return E(this, null, function*() {
                let t = [];
                for (let s of e) {
                    let i = yield this.getSymbol(s.symbolIsin);
                    t.push(M(x({}, s), {
                        symbolName: i?.symbolName
                    }))
                }
                return t
            })
        }
    }
    ;
    m.\u0275fac = function(t) {
        return new (t || m)
    }
    ,
    m.\u0275prov = $({
        token: m,
        factory: m.\u0275fac,
        providedIn: "root"
    });
    let a = m;
    return a
}
)();
var Ms = ( () => {
    let m = class m {
        constructor(e, t, s, i, o) {
            this.lsService = e,
            this.symbolService = t,
            this.trackerService = s,
            this.deviceService = i,
            this.marketDataService = o,
            this.stockIsinMapper = {},
            this.changeActiveIsinEventRaised = !1,
            this.defaultIsin = localStorage.getItem(H.defaultIsin) || "IRT3SATF0001",
            this.activeSymbolSub = new B(null),
            this.activeSymbolObs$ = this.activeSymbolSub.asObservable(),
            this.subs = [],
            this.setActiveIsin = (r, {openPopup: n=!0}={}) => {
                this.changeActiveIsinEventRaised = n,
                this.activeStockIsin = r
            }
            ,
            this.setDefaultIsinAtStartup(),
            this.mapStockIsinsToNames(),
            this.lsService.resetLsManually$.pipe(ue(r => r)).subscribe( () => {
                this.subscribeToActiveSymbol()
            }
            )
        }
        get activeStockIsin() {
            return this.activeSymbolIsin
        }
        set activeStockIsin(e) {
            e !== this.activeSymbolIsin && (this.activeSymbolIsin ? (this.trackerService.endTimer(le.symbol, this.activeSymbolIsin),
            this.unsubscribeBySymbolIsinChange().then( () => {
                this.getMarketData(e)
            }
            )) : this.getMarketData(e))
        }
        getMarketData(e) {
            this.setSymbolData(e)
        }
        ngOnDestroy() {
            this.subs.forEach(e => e.unsubscribe())
        }
        setDefaultIsinAtStartup() {
            let e = this.deviceService.deviceType$.pipe(Ge(t => t === Fe.Unknown), te(1), D(t => {
                t === Fe.Desktop && (this.activeStockIsin = this.defaultIsin)
            }
            ), se( () => e.unsubscribe())).subscribe();
            this.subs.push(e)
        }
        setSymbolData(e) {
            return E(this, null, function*() {
                let t = yield this.symbolService.getSymbol(e?.toUpperCase());
                t && (this.activeSymbolIsin = e,
                this.activeSymbolSub.next({
                    symbol: t,
                    marketData: x({}, q)
                }),
                localStorage.setItem(H.defaultIsin, this.activeSymbolIsin),
                this.trackerService.counter(le.symbol, this.activeSymbolIsin, t),
                this.trackerService.startTimer(le.symbol, this.activeSymbolIsin, t),
                this.marketDataService.callMarketDataIfLsNotConnected( () => this.getActiveSymbolMarketData()),
                this.subscribeToActiveSymbol())
            })
        }
        subscribeToActiveSymbol() {
            this.lsService.subscribeToLs(pe.ActiveStock, this.activeSymbolIsin).subscribe(e => {
                if (e.inst === this.activeSymbolIsin) {
                    this.marketDataService.lsDataIsReceived(this.getActiveSymbolMarketData.name),
                    this.activeSymbolLsSubId = e.subId;
                    let t = Ie(e.val);
                    t.closingPriceVarPercent = this.symbolService.calculateClosingPriceVarPercent(t.closingPrice, t.feeOfPreviousDaysClosingPrice, t.totalNumberOfSharesTraded) || 0;
                    let s = this.activeSymbolSub.getValue()?.symbol;
                    this.activeSymbolSub.next({
                        symbol: s,
                        marketData: t
                    })
                }
            }
            )
        }
        getActiveSymbolMarketData() {
            let e = this.marketDataService.GetMarketData(9, this.activeStockIsin).pipe(D(t => {
                let s = this.activeSymbolSub.getValue()
                  , i = this.activeSymbolSub.getValue()?.symbol
                  , o = s.symbol || i
                  , r = s.marketData ?? q;
                r.lastTradedPrice = t.lastTradedPrice,
                r.feeOfPreviousDaysClosingPrice = t.feeOfPreviousDaysClosingPrice,
                r.lastTradedPriceVar = this.symbolService.calculateLastTradedPriceVar(t.lastTradedPrice, t.feeOfPreviousDaysClosingPrice),
                r.lastTradedPriceVarPercent = t.priceVar,
                r.stateColor = be(t.stateCode),
                r.closingPrice = t.closingPrice,
                r.closingPriceVarPercent = this.symbolService.calculateClosingPriceVarPercent(t.closingPrice, t.feeOfPreviousDaysClosingPrice, t.totalNumberOfSharesTraded),
                r.totalNumberOfSharesTraded = t.totalNumberOfSharesTraded,
                r.stateCode = t.stateCode,
                r.minDailyPrice = t.lowAllowedPrice,
                r.maxDailyPrice = t.highAllowedPrice,
                this.activeSymbolSub.next({
                    symbol: o,
                    marketData: r
                })
            }
            ), ye( (t, s) => s), se( () => e.unsubscribe())).subscribe()
        }
        unsubscribeBySymbolIsinChange() {
            return E(this, null, function*() {
                this.lsService.unsubscribeSchemaById(this.activeSymbolLsSubId),
                this.subs.forEach(e => e.unsubscribe())
            })
        }
        mapStockIsinsToNames() {
            return E(this, null, function*() {
                let e = yield this.symbolService.getSymbols();
                for (let t = 0; t < e.length; t++) {
                    let s = e[t];
                    this.stockIsinMapper[s.symbolIsin] = {
                        name: s.symbolName,
                        title: s.title
                    }
                }
            })
        }
        callTrackerService() {
            this.activeSymbolIsin && this.trackerService.endTimer(le.symbol, this.activeSymbolIsin)
        }
    }
    ;
    m.\u0275fac = function(t) {
        return new (t || m)(O(ge),O(ee),O(Ot),O(Bt),O(Ne))
    }
    ,
    m.\u0275prov = $({
        token: m,
        factory: m.\u0275fac,
        providedIn: "root"
    });
    let a = m;
    return a
}
)();
var Et = $e(Xt());
var he = "RecentSearch"
  , At = ( () => {
    let m = class m {
        setFunds(e) {
            this.funds = [...e]
        }
        resetSearchListStatus() {
            this.selectedSector.set(null),
            this.selectedIndex.set(-1),
            this.categoryNavigating.next(null)
        }
        resetKeyboardNavigation() {
            this.selectedIndex.set(-1),
            this.categoryNavigating.next(null)
        }
        openMarketWatchCategorySelector(e) {
            this.marketWatchCategorySelector.update( () => x({}, e))
        }
        set sortKey(e) {
            this._sortKey = e,
            this.sortKeySubject.next(e),
            this.needSort.next(e)
        }
        get sortKey() {
            return this._sortKey
        }
        setSelectedSearchedSymbol(e) {
            this.selectedSearchedSymbol.next(e)
        }
        needToResortList() {
            this.sortKeySubject.value !== j.BySymbolName && this.needSort.next(this.sortKeySubject.value)
        }
        closeAllItemToolbars(e) {
            this.closeAllToolbars.next(e)
        }
        openNoteManagementHandler(e) {
            this.openNoteManagement.next(e)
        }
        openConditionalToolsHandler(e) {
            this.openConditionalTools.next(e)
        }
        constructor(e, t) {
            this.localStorage = e,
            this.symbolService = t,
            this.symbols = [],
            this.carSymbols = [],
            this.funds = [],
            this.selectedIndex = _(-1),
            this.selectedIndex$ = ne(this.selectedIndex),
            this.keyDown = new U,
            this.keyDown$ = this.keyDown.asObservable(),
            this.keyUp = new U,
            this.keyUp$ = this.keyUp.asObservable(),
            this.selectNextCategory = new U,
            this.selectNextCategory$ = this.selectNextCategory.asObservable(),
            this.categoryNavigating = new B(null),
            this.selectedSector = _(null),
            this.selectedSector$ = ne(this.selectedSector),
            this.titleExceptionList = ["IRT3TAZF0001"],
            this._sortKey = j.ByTotalTradeValue,
            this.marketWatchCategorySelector = _(null),
            this.marketWatchCategorySelector$ = ne(this.marketWatchCategorySelector),
            this._recentSymbols = this.localStorage.getItem(he) ? JSON.parse(this.localStorage.getItem(he)) : [],
            this.recentListSymbols = _(JSON.parse(this.localStorage.getItem(he) || "[]")),
            this.recentListSymbols$ = ne(this.recentListSymbols),
            this._sectorSymbolsFilterActive = !1,
            this._sortByDescending = !0,
            this.selectedSearchedSymbol = new B(null),
            this.selectedSearchedSymbol$ = this.selectedSearchedSymbol.asObservable(),
            this.sortKeySubject = new B(this._sortKey),
            this.needSort = new U,
            this.needSort$ = this.needSort.asObservable(),
            this.closeAllToolbars = new B(null),
            this.closeAllToolbars$ = this.closeAllToolbars.asObservable(),
            this.openNoteManagement = new U,
            this.openNoteManagement$ = this.openNoteManagement.asObservable(),
            this.openConditionalTools = new U,
            this.openConditionalTools$ = this.openConditionalTools.asObservable(),
            this.specialScoreSymbolIsins = ["IRT3AVNF0001", "IRT1STIL0001", "IRT1ARAM0001", "IRT3SATF0001", "IRTKMOFD0001", "IRT3TVAF0001", "IRT1KHOD0001", "IRT1SIMF0001"],
            this.getStocks()
        }
        get defaultSearchSymbols() {
            let e = [...this.recentSymbols];
            return this.symbolService.defaultSymbols.forEach(t => {
                this.recentSymbols.some(s => s.symbolIsin === t.symbolIsin) || e.push(this.convertISymbolToISearchSymbol(t))
            }
            ),
            e.forEach( (t, s) => {
                t.listIndex = t.searchCategoryCode + "-" + s.toString()
            }
            ),
            e
        }
        get defaultSearchSymbolsWithCategory() {
            let e = [...this.recentSymbols]
              , t = new Map;
            return this.symbolService.defaultSymbols.forEach(s => {
                this.recentSymbols.some(i => i.symbolIsin === s.symbolIsin) || e.push(this.convertISymbolToISearchSymbol(s))
            }
            ),
            e.forEach( (s, i) => {
                s.listIndex = (s.searchCategoryCode ?? 0) + "-" + i.toString()
            }
            ),
            t.set(y.Default, e),
            t
        }
        get sectorStocksFilterActive() {
            return this._sectorSymbolsFilterActive
        }
        get sortByDescending() {
            return this._sortByDescending
        }
        get recentSymbols() {
            return this._recentSymbols.forEach(e => {
                e.symbolNameInnerHtml = e.symbolName,
                e.symbolTitleInnerHtml = e.title,
                e.swipeState || (e.swipeState = new Pe("",Ae.None))
            }
            ),
            this._recentSymbols
        }
        set recentSymbols(e) {
            this._recentSymbols = e,
            this.recentListSymbols.set(e),
            e && e.length > 0 ? this.localStorage.setItem(he, JSON.stringify(e)) : this.localStorage.removeItem(he)
        }
        toggleFilterActive() {
            this._sectorSymbolsFilterActive = !this._sectorSymbolsFilterActive
        }
        toggleSortDirection() {
            this._sortByDescending = !this._sortByDescending,
            this.sortKeySubject.next(this.sortKey),
            this.needSort.next(this.sortKey)
        }
        getStocks() {
            this.symbolService.symbols$.subscribe(e => {
                e && (this.symbols = [],
                e.forEach(t => {
                    t.symbolIsin === "IRT1STIL0001" && (t.title = "\u0635\u0646\u062F\u0648\u0642 \u0633 \u0635\u0646\u0627\u06CC\u0639 \u0641\u0644\u0632\u0627\u062A \u0645\u0641\u06CC\u062F- \u0628\u062E\u0634\u06CC"),
                    this.symbols.push(this.convertISymbolToISearchSymbol(t))
                }
                ))
            }
            )
        }
        setHighlightForSearchedWords(e, t, s, i) {
            if (s = ae(e.symbolNameInnerHtml).indexOf(ae(t), s),
            i = ae(e.symbolTitleInnerHtml).indexOf(ae(t), i),
            s >= 0) {
                let o = e.symbolNameInnerHtml.split("").splice(s, t.length).join("");
                e.symbolNameInnerHtml = e.symbolNameInnerHtml.substring(0, s) + e.symbolNameInnerHtml.substring(s).replace(o, `<span class="text-primary ${e.searchCategoryName === y.cars ? "commodity-exchange-info-description-highlight" : ""} ">${o}</span>`)
            }
            if (i >= 0) {
                let o = e.symbolTitleInnerHtml.split("").splice(i, t.length).join("");
                e.symbolTitleInnerHtml = e.symbolTitleInnerHtml.substring(0, i) + e.symbolTitleInnerHtml.substring(i).replace(o, `<span class="text-primary ${e.searchCategoryName === y.cars ? "commodity-exchange-info-description-highlight" : ""} ">${o}</span>`)
            }
            return {
                symbol: e,
                lastSearchedNameIndex: s,
                lastSearchedTitleIndex: i
            }
        }
        filterOptionSymbols(e=!0) {
            return this.symbols.filter(t => e ? !0 : !fe(t.marketUnit))
        }
        searchStocks(e, t, s, i, o, r=!0) {
            let n = this.getAllWords(e)
              , l = [...[...i ? this.funds : [], ...o ? this.carSymbols : [], ...this.filterOptionSymbols(r)].filter(p => this.simpleFilter(e, p) && p.isActive)];
            return l.length === 0 && (l = [...[...i ? this.funds : [], ...o ? this.carSymbols : [], ...this.filterOptionSymbols(r)].filter(p => this.advancedFilter(e, p, n))]),
            l = Se(l, "symbolName"),
            l.filter( (p, b, I) => I.findIndex(T => T.symbolIsin === p.symbolIsin) === b).map(p => {
                let b = this.scoreToSearchedSymbols(p, n)
                  , I = {
                    symbol: b,
                    lastSearchedNameIndex: 0,
                    lastSearchedTitleIndex: 0
                };
                b.symbolNameInnerHtml = b.symbolName,
                b.symbolTitleInnerHtml = b.title;
                for (let T of n)
                    I = this.setHighlightForSearchedWords(I.symbol, T, I.lastSearchedNameIndex, I.lastSearchedTitleIndex);
                return I.symbol
            }
            ).sort( (p, b) => b.shareDueDateScore - p.shareDueDateScore || b.score - p.score || b.searchCount - p.searchCount).slice(t, t + s)
        }
        searchStocksByCategoryResult(e, t, s, i, o) {
            let r = this.searchStocks(e, t, s, i, o);
            return this.orderByCategory(r)
        }
        orderByCategory(e, t=!1) {
            let s = new Map
              , i = new Map;
            e.forEach(n => {
                s.has(n.searchCategoryName) || s.set(n.searchCategoryName, []);
                let l = s.get(n.searchCategoryName);
                l.push(n),
                s.set(n.searchCategoryName, l),
                n.searchCategoryCode = Ve.get(n.searchCategoryName).toString()
            }
            );
            for (let n of s.keys())
                i.set(n, s.get(n)[0].score + +ve[Object.keys(y)[Object.values(y).indexOf(n)]]);
            let o = new Map;
            if (t)
                for (let n of Object.values(y))
                    s.get(n) && o.set(n, s.get(n));
            else {
                i[Symbol.iterator] = function*() {
                    yield*We([...this.entries()].sort( (n, l) => l[1] - n[1]))
                }
                ;
                for (let[n] of i)
                    s.get(n) && o.set(n, s.get(n))
            }
            let r = 0;
            return o.forEach(n => {
                n.forEach(l => {
                    l.listIndex = l.searchCategoryCode + "-" + r.toString(),
                    r++
                }
                )
            }
            ),
            o
        }
        addStockToRecentByIsin(e) {
            let t = this.symbolService.symbols.find(s => s.symbolIsin === e);
            this.addStockToRecent(t)
        }
        updateSearchedStockByIsin(e) {
            this.increaseSearchCount(e)
        }
        addStockToRecent(e) {
            if (this.recentSymbols?.findIndex(i => i.symbolIsin === e.symbolIsin) > -1)
                return;
            e.symbolTitleInnerHtml = e.title,
            e.symbolNameInnerHtml = e.symbolName,
            this.recentSymbols = [e, ...this.recentSymbols],
            this.recentSymbols.length > 3 && (this.recentSymbols = this.recentSymbols.slice(0, 3))
        }
        clearRecentSymbols() {
            this.recentSymbols = []
        }
        isTextSymbolIsin(e) {
            if (e.startsWith("I") && e.length === 1 || e.startsWith("IR"))
                return !0
        }
        searchBySymbolIsin(e) {
            let t = [];
            return e && (t = [...this.symbols.filter(s => s.symbolIsin.startsWith(e)).map(s => M(x({}, s), {
                score: 1
            })).slice(0, 100)]),
            t?.length > 0 ? t : []
        }
        searchBySymbolIsinFullModel(e) {
            let t = [];
            return e && (t = [...this.symbols.filter(s => s.symbolIsin.startsWith(e))].map(s => M(x({}, s), {
                score: 1
            })).slice(0, 100)),
            t?.length > 0 ? t : []
        }
        batchSearchBySymbolIsins(e) {
            let t = [];
            return e && e.length > 0 && (t = [...this.symbols.filter(s => e.includes(s.symbolIsin)).map( (s, i) => M(x({}, s), {
                score: 1,
                listIndex: i.toString(),
                symbolNameInnerHtml: s.symbolName,
                symbolTitleInnerHtml: s.title
            }))]),
            t?.length > 0 ? t : []
        }
        searchBySymbolIsinCategorySplitted(e) {
            let t = this.searchBySymbolIsinFullModel(e);
            return t?.length > 0 ? this.orderByCategory(t) : null
        }
        searchBySectorCategorySplitted(e) {
            let t = [...this.symbols.filter(s => s.sector?.trim() === e.sectorCode).map(s => M(x({}, s), {
                score: 1,
                symbolNameInnerHtml: s.symbolName,
                symbolTitleInnerHtml: s.title
            }))];
            if (t?.length > 0) {
                let s = this.orderByCategory(t, !0);
                return s = this.sortSearchResult(s),
                s
            }
            return null
        }
        searchBySectorCategory(e) {
            return [...this.symbols.filter(t => t.sector?.trim() === e.sectorCode).map(t => M(x({}, t), {
                score: 1,
                symbolNameInnerHtml: t.symbolName,
                symbolTitleInnerHtml: t.title
            }))]
        }
        splitSearchResultByCategories(e) {
            if (e?.length > 0) {
                let t = this.orderByCategory(e, !0);
                return this.sortSearchResult(t)
            }
            return null
        }
        getSearchResultAsRecords(e, t=0) {
            let s = {}
              , i = 0
              , o = 0;
            for (let[r,n] of e) {
                let l = Ve.get(r).toString();
                s[l] || (s[l] = {
                    searchCategoryCode: l.toString(),
                    searchCategoryName: r,
                    symbolIsin: l,
                    isHeaderItem: !0,
                    itemsCount: n.length,
                    listIndex: i.toString(),
                    score: n[0].score + +ve[Object.keys(y)[Object.values(y).indexOf(r)]],
                    type: "group"
                },
                o = i,
                i++),
                n.forEach( (p, b) => {
                    s[p.symbolIsin] = M(x({}, p), {
                        listIndex: i.toString(),
                        searchCategoryCode: l,
                        visible: t > 0 ? i - o <= t : !0,
                        hasMore: t > 0 ? i - o === t : !1,
                        type: "symbol"
                    }),
                    i++
                }
                )
            }
            return s
        }
        sortSearchResult(e) {
            let t = new Map;
            for (let s of e.keys()) {
                let i = e.get(s);
                switch (this.sortKey) {
                case j.ByLastTradePriceVar:
                    {
                        i.sort(this.predicateByWithThen("priceVar", "totalNumberOfSharesTraded", this.sortByDescending)),
                        i.sort(this.sortByActiveColor("stateColor"));
                        break
                    }
                case j.BySymbolName:
                    {
                        i = Se(i, "symbolName", this.sortByDescending);
                        break
                    }
                case j.ByTotalTradeValue:
                    {
                        i.sort(this.predicateBy("totalNumberOfSharesTraded", this.sortByDescending)),
                        i.sort(this.sortByActiveColor("stateColor"));
                        break
                    }
                }
                t.set(s, i)
            }
            return t
        }
        sortRecordsSearchResult(e) {
            let t = {}
              , s = 0;
            for (let i of Object.values(e).filter(o => o.type === "group").sort( (o, r) => r.score - o.score)) {
                t[i.symbolIsin] = i.listIndex,
                s++;
                let o = Object.values(e).filter(r => r.type === "symbol" && r.searchCategoryCode === i.searchCategoryCode);
                switch (this.sortKey) {
                case j.ByLastTradePriceVar:
                    {
                        o.sort(this.predicateByWithThen("priceVar", "totalNumberOfSharesTraded", this.sortByDescending)),
                        o.sort(this.sortByActiveColor("stateColor"));
                        break
                    }
                case j.BySymbolName:
                    {
                        o = Se(o, "symbolName", this.sortByDescending);
                        break
                    }
                case j.ByTotalTradeValue:
                    {
                        o.sort(this.predicateBy("totalNumberOfSharesTraded", this.sortByDescending)),
                        o.sort(this.sortByActiveColor("stateColor"));
                        break
                    }
                }
                o.forEach(r => {
                    t[r.symbolIsin] = s.toString(),
                    s++
                }
                )
            }
            return t
        }
        predicateBy(e, t=!1) {
            return (s, i) => (s[e] - i[e]) * (t ? -1 : 1)
        }
        predicateByWithThen(e, t, s=!1) {
            return (i, o) => {
                let r = 0;
                return i[e] > o[e] ? r = 1 : i[e] < o[e] && (r = -1),
                r === 0 && (i[t] < o[t] ? r = -1 : i[t] > o[t] ? r = 1 : r = 0),
                r * (s ? -1 : 1)
            }
        }
        sortByActiveColor(e) {
            return (t, s) => {
                if (t[e] === re && s[e] !== re)
                    return -1;
                if (t[e] === _e && s[e] !== _e)
                    return 1;
                if (t[e] === re && s[e] === re)
                    return 0
            }
        }
        predicateByDesc(e) {
            return (t, s) => s[e] - t[e]
        }
        increaseSearchCount(e) {
            let t = this.symbols.findIndex(s => s.symbolIsin === e);
            t > -1 && this.symbols[t].searchCount++
        }
        getAllWords(e) {
            let s = e.split(" ").reduce( (i, o) => {
                if (o !== "\u200C" && o !== "") {
                    let r = o.replace("\u200C", "");
                    i[r] = !0
                }
                return i
            }
            , {});
            return Object.keys(s)
        }
        convertISymbolToISearchSymbol(e) {
            return M(x({}, e), {
                searchCount: 0,
                titleWords: e.title.split(" "),
                symbolNameInnerHtml: e.symbolName,
                symbolTitleInnerHtml: e.title,
                titleCorrected: e.title,
                searchCategoryName: this.symbolService.getCategoryByIsin(e.symbolIsin),
                swipeState: new Pe("",Ae.None)
            })
        }
        scoreToSearchedSymbols(e, t) {
            return e.searchCategoryName === y.cars || (e.score = t.length === 1 ? this.getSingleWordSearchScoreForStock(e, t[0]) : this.getMultiWordSearchScoreForStock(e, t)),
            e
        }
        getSingleWordSearchScoreForStock(e, t) {
            let we = e.symbolName.toString().indexOf(t)
              , Te = e.title.toString().indexOf(t)
              , xe = w(e.symbolName.toString()).indexOf(w(t))
              , ke = w(e.title.toString()).indexOf(w(t))
              , Pt = e.symbolName === t ? 5e3 : 0
              , Ft = we === 0 ? 2e3 : 0
              , jt = we > 0 ? 1e3 - we * 100 - Math.abs(e.symbolName.length - t.length) : 0
              , Vt = Pt + Ft + jt
              , Lt = w(e.symbolName) === w(t) ? 800 : 0
              , Ht = xe === 0 ? 150 : 0
              , $t = xe > 0 ? 50 - xe * 4 - Math.abs(e.symbolName.length - t.length) : 0
              , Wt = Lt + Ht + $t
              , Ut = e.title === t ? 1e3 : 0
              , Kt = Te === 0 ? 200 : 0
              , Gt = Te > 0 ? 100 - Te * 3 : 0
              , zt = Ut + Kt + Gt
              , Jt = w(e.title) === w(t) ? 100 : 0
              , Qt = ke === 0 ? 10 : 0
              , Zt = ke > 0 ? 5 - ke * 2 : 0
              , Yt = Jt + Qt + Zt;
            return e.shareDueDateScore = (e.shareDueDate ? +(0,
            Et.default)(e.shareDueDate).format("YYYYMMDD") : 0) * -1,
            Vt + zt + Wt + Yt + (e.symbolGroup === Dt ? 1e4 : 0) + (this.specialScoreSymbolIsins.includes(e.symbolIsin) ? 200 : 0) + (vt(e.symbolName) ? wt(e.symbolName) : 0)
        }
        getMultiWordSearchScoreForStock(e, t) {
            let s = 0;
            for (let i of t)
                s = s + this.getSingleWordSearchScoreForStock(e, i);
            return s
        }
        advancedFilter(e, t, s) {
            let i = new RegExp(e)
              , o = new RegExp(w(e))
              , r = s.length
              , n = i.test(t.symbolName);
            if (n || s.length === 1 && (i = new RegExp(s[0]),
            o = new RegExp(w(s[0])),
            t.searchOptimizeTitle && (n = i.test(t.titleCorrected) && !this.titleExceptionList.includes(t.symbolIsin),
            n) || (n = i.test(t.symbolName) || i.test(t.titleCorrected) && !this.titleExceptionList.includes(t.symbolIsin) || o.test(t.symbolName) || o.test(t.titleCorrected) && !this.titleExceptionList.includes(t.symbolIsin),
            n)))
                return n;
            for (let l = 0; l < r; l++)
                i = new RegExp(s[l]),
                o = new RegExp(w(s[l])),
                n = n || i.test(t.symbolName) || i.test(t.titleCorrected) && !this.titleExceptionList.includes(t.symbolIsin) || o.test(t.symbolName) || o.test(t.titleCorrected) && !this.titleExceptionList.includes(t.symbolIsin);
            return i = new RegExp(s.join(" ")),
            o = new RegExp(w(s.join(" "))),
            n = n || i.test(t.searchOptimizeTitle) || i.test(t.symbolName) || i.test(t.titleCorrected) && !this.titleExceptionList.includes(t.symbolIsin) || o.test(t.searchOptimizeTitle) || o.test(t.symbolName) || o.test(t.titleCorrected) && !this.titleExceptionList.includes(t.symbolIsin),
            n
        }
        simpleFilter(e, t) {
            let s = new RegExp(e)
              , i = new RegExp(w(e))
              , o = s.test(t.symbolName) || i.test(w(t.symbolName)) || s.test(t.titleCorrected) && !this.titleExceptionList.includes(t.symbolIsin);
            return o
        }
    }
    ;
    m.\u0275fac = function(t) {
        return new (t || m)(O(xt),O(ee))
    }
    ,
    m.\u0275prov = $({
        token: m,
        factory: m.\u0275fac,
        providedIn: "root"
    });
    let a = m;
    return a
}
)();
var ss = ["searchInput"];
function is(a, m) {
    if (a & 1) {
        let k = ie();
        F(0, "span", 4),
        Z("click", function() {
            K(k);
            let t = Y();
            return G(t.onClearSearchClicked())
        }),
        tt(1, "svg-icon", 5),
        L()
    }
    if (a & 2) {
        let k, e, t = Y();
        P(),
        Q((k = t.spanStateClass()) == null ? null : k.class),
        J("iconName", (e = t.spanStateClass()) == null ? null : e.icon)
    }
}
function os(a, m) {
    a & 1 && (F(0, "span", 3),
    oe(1, "\u0646\u062A\u06CC\u062C\u0647\u200C\u0627\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F!"),
    L())
}
var He = ( () => {
    let m = class m {
        constructor(e) {
            this.searchService = e,
            this.searchInput = Ze("searchInput"),
            this.valueChanged = W(),
            this.clearClicked = W(),
            this.resultGenerated = W(),
            this.resultGeneratedCategorySplitted = W(),
            this.arrowDown = W(),
            this.arrowUp = W(),
            this.enterPressed = W(),
            this.placeHolder = A("\u062C\u0633\u062A\u062C\u0648\u06CC \u0646\u0645\u0627\u062F"),
            this.selectedSymbolName = A(""),
            this.isMobile = A(!0),
            this.showNothingFoundText = A(!0),
            this.searchByCategorySplitted = A(!1),
            this.includeFunds = A(!1),
            this.includeCars = A(!1),
            this.showDefaults = A(!1),
            this.showOptionSymbols = A(!0),
            this.clear = A(void 0),
            this.spanStates = {
                loading: {
                    icon: "loading",
                    class: "spin"
                },
                close: {
                    icon: "close",
                    class: ""
                }
            },
            this.spanStateClass = _(this.spanStates.close),
            this.searchInputControl = new St,
            this.searchResult = _([]),
            this.searchResultByCategorySplitted = _(new Map),
            this.showClearButton = _(!1),
            ht( () => {
                this.clear() && this.onClearSearchClicked()
            }
            )
        }
        ngOnInit() {
            this.applyInputSubscription()
        }
        ngOnDestroy() {
            this.removeInputSubscription()
        }
        applyInputSubscription() {
            this.subInputChange = this.searchInputControl.valueChanges.pipe(D(e => {
                if (e?.length === 0) {
                    if (this.searchResult.set([]),
                    this.searchResultByCategorySplitted.set(new Map),
                    this.showDefaults()) {
                        this.searchByCategorySplitted() ? this.resultGeneratedCategorySplitted.emit(this.searchService.defaultSearchSymbolsWithCategory) : this.resultGenerated.emit(this.searchService.defaultSearchSymbols),
                        this.spanStateClass.set(this.spanStates.close);
                        return
                    }
                    this.searchByCategorySplitted() ? this.resultGeneratedCategorySplitted.emit(this.searchResultByCategorySplitted()) : this.resultGenerated.emit(this.searchResult()),
                    this.spanStateClass.set(this.spanStates.close)
                }
                this.valueChanged.emit(e),
                this.spanStateClass.set(this.spanStates.loading),
                this.showClearButton.set(e?.length > 0)
            }
            ), R(e => {
                if (e && !this.searchService.isTextSymbolIsin(e)) {
                    let t = Ct(e, !0);
                    return t = Nt(t),
                    e !== t && this.searchInputControl.setValue(t),
                    t
                }
                return e
            }
            ), Ue(500)).subscribe(e => {
                this.onSearchChange(e)
            }
            )
        }
        removeInputSubscription() {
            this.subInputChange.unsubscribe()
        }
        setInputSearchValue(e) {
            this.subInputChange?.unsubscribe(),
            this.searchInputControl.setValue(e),
            this.showClearButton.set(e?.length > 0),
            this.onSearchChange(e),
            this.applyInputSubscription()
        }
        ngAfterViewInit() {
            this.isMobile() ? Tt( () => this.searchInput().nativeElement.blur(), 1) : this.searchInput().nativeElement.focus(),
            this.showDefaults() && (this.resultGenerated.emit(this.searchService.defaultSearchSymbols),
            this.resultGeneratedCategorySplitted.emit(this.searchService.defaultSearchSymbolsWithCategory))
        }
        onSearchChange(e) {
            if (!e) {
                if (this.searchResult.set([]),
                this.searchResultByCategorySplitted.set(new Map),
                this.showDefaults()) {
                    this.searchByCategorySplitted() ? this.resultGeneratedCategorySplitted.emit(this.searchService.defaultSearchSymbolsWithCategory) : this.resultGenerated.emit(this.searchService.defaultSearchSymbols),
                    this.spanStateClass.set(this.spanStates.close);
                    return
                }
                this.searchByCategorySplitted() ? this.resultGeneratedCategorySplitted.emit(this.searchResultByCategorySplitted()) : this.resultGenerated.emit(this.searchResult()),
                this.spanStateClass.set(this.spanStates.close);
                return
            }
            this.searchService.isTextSymbolIsin(e) ? this.searchByCategorySplitted() ? this.searchResultByCategorySplitted.set(this.searchService.searchBySymbolIsinCategorySplitted(e)) : this.searchResult.set(this.searchService.searchBySymbolIsin(e)) : this.searchByCategorySplitted() ? this.searchResultByCategorySplitted.set(this.searchService.searchStocksByCategoryResult(e, 0, 100, this.includeFunds(), this.includeCars())) : this.searchResult.set(this.searchService.searchStocks(e, 0, 100, this.includeFunds(), this.includeCars(), this.showOptionSymbols())),
            this.resultGenerated.emit(this.searchResult()),
            this.resultGeneratedCategorySplitted.emit(this.searchResultByCategorySplitted()),
            this.spanStateClass.set(this.spanStates.close)
        }
        onClearSearchClicked() {
            this.onClearText(),
            this.inputFocus(),
            this.inputFocus(),
            this.clearClicked.emit()
        }
        inputFocus() {
            this.searchInput()?.nativeElement.focus()
        }
        onClearText() {
            this.showClearButton.set(!1),
            this.searchInputControl.setValue("")
        }
        arrowup() {
            this.arrowUp.emit()
        }
        arrowdown() {
            this.arrowDown.emit()
        }
        enter(e) {
            this.enterPressed.emit(e)
        }
    }
    ;
    m.\u0275fac = function(t) {
        return new (t || m)(Qe(At))
    }
    ,
    m.\u0275cmp = de({
        type: m,
        selectors: [["lib-search-symbol-input"]],
        viewQuery: function(t, s) {
            t & 1 && nt(s.searchInput, ss, 5),
            t & 2 && at()
        },
        inputs: {
            placeHolder: [1, "placeHolder"],
            selectedSymbolName: [1, "selectedSymbolName"],
            isMobile: [1, "isMobile"],
            showNothingFoundText: [1, "showNothingFoundText"],
            searchByCategorySplitted: [1, "searchByCategorySplitted"],
            includeFunds: [1, "includeFunds"],
            includeCars: [1, "includeCars"],
            showDefaults: [1, "showDefaults"],
            showOptionSymbols: [1, "showOptionSymbols"],
            clear: [1, "clear"]
        },
        outputs: {
            valueChanged: "valueChanged",
            clearClicked: "clearClicked",
            resultGenerated: "resultGenerated",
            resultGeneratedCategorySplitted: "resultGeneratedCategorySplitted",
            arrowDown: "arrowDown",
            arrowUp: "arrowUp",
            enterPressed: "enterPressed"
        },
        decls: 4,
        vars: 5,
        consts: [["searchInput", ""], [1, "cup", "position-absolute", "px-2", "text-muted", 2, "top", "6px", "left", "0"], ["data-cy", "layout-search-input", "autofocus", "", "autocomplete", "off", "type", "text", "id", "searchInputControl", 1, "form-control", "pe-5", 3, "keydown.arrowup", "keydown.arrowdown", "keydown.enter", "formControl", "placeholder", "value"], [1, "text-danger", "d-block", "small", "mt-1"], [1, "cup", "position-absolute", "px-2", "text-muted", 2, "top", "6px", "left", "0", 3, "click"], ["width", "18", "height", "18", 3, "iconName"]],
        template: function(t, s) {
            if (t & 1) {
                let i = ie();
                Me(0, is, 2, 3, "span", 1),
                F(1, "input", 2, 0),
                Z("keydown.arrowup", function() {
                    return K(i),
                    G(s.arrowup())
                })("keydown.arrowdown", function() {
                    return K(i),
                    G(s.arrowdown())
                })("keydown.enter", function(r) {
                    return K(i),
                    G(s.enter(r))
                }),
                L(),
                Me(3, os, 2, 0, "span", 3)
            }
            if (t & 2) {
                let i, o = lt(2);
                Re(s.showClearButton() ? 0 : -1),
                P(),
                J("formControl", s.searchInputControl)("placeholder", s.placeHolder())("value", s.selectedSymbolName()),
                P(2),
                Re(s.showNothingFoundText() && s.spanStateClass() === s.spanStates.close && !(((i = s.searchResult()) == null ? null : i.length) !== 0 || ((i = s.searchResultByCategorySplitted()) == null ? null : i.size) !== 0) && o.value.length > 0 ? 3 : -1)
            }
        },
        dependencies: [ft, dt, pt, gt, bt, yt],
        encapsulation: 2,
        changeDetection: 0
    });
    let a = m;
    return a
}
)();
var rs = a => ({
    active: a
});
function ns(a, m) {
    if (a & 1) {
        let k = ie();
        F(0, "div", 2)(1, "div", 3),
        Z("click", function(t) {
            let s = K(k).$implicit;
            return Y().onSearchedStockClicked(s),
            G(t.stopPropagation())
        }),
        F(2, "span", 4),
        oe(3),
        L(),
        F(4, "small", 5),
        oe(5),
        L()()()
    }
    if (a & 2) {
        let k = m.$implicit
          , e = m.$index
          , t = Y();
        P(),
        st("id", e),
        J("ngClass", ct(4, rs, t.symbolNavigateIndex === e)),
        P(2),
        De(k.symbolName),
        P(2),
        De(k.title)
    }
}
var li = ( () => {
    let m = class m {
        constructor() {
            this.hostClass = "d-block",
            this.isMobile = !0,
            this.showNothingFoundText = !0,
            this.dropDownClass = "",
            this.dropDownStyle = "",
            this.inputClass = "",
            this.showOptionSymbols = !0,
            this.placeHolder = "\u062C\u0633\u062A\u062C\u0648\u06CC \u0646\u0645\u0627\u062F",
            this.fillSymbolNameBySelect = !1,
            this.selectedSymbol = new Oe,
            this.clearClicked = new Oe,
            this.searchResult = [],
            this.selectedSymbolName = "",
            this.symbolNavigateIndex = -1,
            this.stockIsSelected = !1
        }
        onResultChanged(e) {
            this.searchResult = e,
            this.symbolNavigateIndex = -1
        }
        onInputValueChanged(e) {
            e.length === 0 && (this.stockIsSelected = !1)
        }
        onClearClicked() {
            this.clearClicked.emit()
        }
        onSearchedStockClicked(e) {
            this.selectStockHandler(e)
        }
        arrowup() {
            this.isMobile || (this.symbolNavigateIndex > 0 ? this.symbolNavigateIndex -= 1 : this.symbolNavigateIndex = 0,
            this.scrollToViewByIndex(this.symbolNavigateIndex.toString()))
        }
        arrowdown() {
            this.isMobile || (this.symbolNavigateIndex < this.searchResult.length - 1 ? this.symbolNavigateIndex += 1 : this.symbolNavigateIndex = this.searchResult.length - 1,
            this.scrollToViewByIndex(this.symbolNavigateIndex.toString()))
        }
        scrollToViewByIndex(e) {
            setTimeout( () => {
                document.getElementById(e)?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center"
                })
            }
            , 10)
        }
        enter(e) {
            if (this.stockIsSelected || e.preventDefault(),
            this.searchResult && this.searchResult.length > 0) {
                let t = this.searchResult[this.symbolNavigateIndex];
                this.selectStockHandler(t)
            }
        }
        selectStockHandler(e) {
            e && (this.selectedSymbolName = e.symbolName,
            this.stockIsSelected = !0,
            this.selectedSymbol.emit(e),
            this.fillSymbolNameBySelect && this.searchInput.setInputSearchValue(e.symbolName),
            this.searchResult = [])
        }
        setInputText(e) {
            e.length > 0 && (this.selectedSymbolName = e,
            this.searchInput.setInputSearchValue(e),
            this.searchResult = [])
        }
        clearInputText() {
            this.searchInput.onClearText()
        }
        reset() {
            this.searchInput.onClearText(),
            this.stockIsSelected = !1,
            this.searchResult = [],
            this.selectedSymbolName = "",
            this.symbolNavigateIndex = -1
        }
        trackBy(e, t) {
            return e
        }
    }
    ;
    m.\u0275fac = function(t) {
        return new (t || m)
    }
    ,
    m.\u0275cmp = de({
        type: m,
        selectors: [["lib-search-symbol"]],
        viewQuery: function(t, s) {
            if (t & 1 && it(He, 7),
            t & 2) {
                let i;
                ot(i = rt()) && (s.searchInput = i.first)
            }
        },
        hostVars: 2,
        hostBindings: function(t, s) {
            t & 2 && Q(s.hostClass)
        },
        inputs: {
            clear: "clear",
            isMobile: "isMobile",
            showNothingFoundText: "showNothingFoundText",
            dropDownClass: "dropDownClass",
            dropDownStyle: "dropDownStyle",
            inputClass: "inputClass",
            showOptionSymbols: "showOptionSymbols",
            placeHolder: "placeHolder",
            fillSymbolNameBySelect: "fillSymbolNameBySelect"
        },
        outputs: {
            selectedSymbol: "selectedSymbol",
            clearClicked: "clearClicked"
        },
        decls: 5,
        vars: 13,
        consts: [[1, "position-relative", 3, "valueChanged", "resultGenerated", "arrowUp", "arrowDown", "enterPressed", "clearClicked", "id", "selectedSymbolName", "placeHolder", "isMobile", "showNothingFoundText", "showOptionSymbols", "clear"], [1, "overflow-hidden", "overflow-y-auto", "flex-grow-1", "list-group", "list-group-flush"], ["data-cy", "search-symbol-item", 1, "list-group-item"], [1, "d-flex", "flex-column", "cup", 3, "click", "ngClass", "id"], [1, "fw-bold"], [1, "text-secondary"]],
        template: function(t, s) {
            t & 1 && (F(0, "lib-search-symbol-input", 0),
            Z("valueChanged", function(o) {
                return s.onInputValueChanged(o)
            })("resultGenerated", function(o) {
                return s.onResultChanged(o)
            })("arrowUp", function() {
                return s.arrowup()
            })("arrowDown", function() {
                return s.arrowdown()
            })("enterPressed", function(o) {
                return s.enter(o)
            })("clearClicked", function() {
                return s.onClearClicked()
            }),
            L(),
            F(1, "div")(2, "div", 1),
            Xe(3, ns, 6, 6, "div", 2, qe),
            L()()),
            t & 2 && (Q(s.inputClass),
            J("id", "searchInputControl")("selectedSymbolName", s.selectedSymbolName)("placeHolder", s.placeHolder)("isMobile", s.isMobile)("showNothingFoundText", s.showNothingFoundText)("showOptionSymbols", s.showOptionSymbols)("clear", s.clear),
            P(),
            Ye(s.dropDownStyle),
            Q(s.dropDownClass),
            P(2),
            et(s.searchResult))
        },
        dependencies: [He, ut, mt],
        encapsulation: 2,
        changeDetection: 0
    });
    let a = m;
    return a
}
)();
var di = ( () => {
    let m = class m {
        constructor(e, t, s) {
            this.lsService = e,
            this.symbolService = t,
            this.marketDataService = s,
            this.activeSymbolSub = new B(null),
            this.activeSymbolObs$ = this.activeSymbolSub.asObservable(),
            this.subs = []
        }
        get activeStockIsin() {
            return this.activeSymbolIsin
        }
        set activeStockIsin(e) {
            this.activeSymbolLsSubId ? this.unsubscribeBySymbolIsinChange().then( () => {
                this.getMarketData(e)
            }
            ) : this.getMarketData(e)
        }
        getMarketData(e) {
            this.activeSymbolIsin = e,
            this.setSymbolData(),
            this.marketDataService.callMarketDataIfLsNotConnected( () => this.getStockDetailsMarketData()),
            this.subscribeToActiveSymbolLS()
        }
        ngOnDestroy() {
            this.subs.forEach(e => e.unsubscribe())
        }
        setSymbolData() {
            return E(this, null, function*() {
                let e = yield this.symbolService.getSymbol(this.activeSymbolIsin.toUpperCase());
                this.activeSymbolSub.next({
                    symbol: e,
                    marketData: q
                })
            })
        }
        subscribeToActiveSymbolLS() {
            this.lsService.subscribeToLs(pe.ActiveStock, this.activeSymbolIsin).subscribe(e => {
                if (e.inst === this.activeSymbolIsin) {
                    this.marketDataService.lsDataIsReceived(this.getStockDetailsMarketData.name),
                    this.activeSymbolLsSubId = e.subId;
                    let t = Ie(e.val);
                    t.closingPriceVarPercent = this.symbolService.calculateClosingPriceVarPercent(t.closingPrice, t.feeOfPreviousDaysClosingPrice, t.totalNumberOfSharesTraded) || 0;
                    let s = this.activeSymbolSub.getValue()?.symbol;
                    this.activeSymbolSub.next({
                        symbol: s,
                        marketData: t
                    })
                }
            }
            )
        }
        unsubscribeBySymbolIsinChange() {
            return E(this, null, function*() {
                this.activeSymbolLsSubId && this.lsService.unsubscribeSchemaById(this.activeSymbolLsSubId),
                this.subs.forEach(e => e.unsubscribe())
            })
        }
        getStockDetailsMarketData() {
            let e = this.marketDataService.GetMarketData(9, this.activeStockIsin).pipe(D(t => {
                let s = this.activeSymbolSub.getValue()
                  , i = this.activeSymbolSub.getValue()?.symbol
                  , o = s.symbol || i
                  , r = s.marketData ?? q;
                r.lastTradedPrice = t.lastTradedPrice,
                r.feeOfPreviousDaysClosingPrice = t.feeOfPreviousDaysClosingPrice,
                r.lastTradedPriceVar = this.symbolService.calculateLastTradedPriceVar(t.lastTradedPrice, t.feeOfPreviousDaysClosingPrice),
                r.lastTradedPriceVarPercent = t.priceVar,
                r.stateColor = be(t.stateCode),
                r.closingPrice = t.closingPrice,
                r.closingPriceVarPercent = this.symbolService.calculateClosingPriceVarPercent(t.closingPrice, t.feeOfPreviousDaysClosingPrice, t.totalNumberOfSharesTraded),
                r.totalNumberOfSharesTraded = t.totalNumberOfSharesTraded,
                r.stateCode = t.stateCode,
                this.activeSymbolSub.next({
                    symbol: o,
                    marketData: r
                })
            }
            ), ye( (t, s) => s), se( () => e.unsubscribe())).subscribe()
        }
    }
    ;
    m.\u0275fac = function(t) {
        return new (t || m)(O(ge),O(ee),O(Ne))
    }
    ,
    m.\u0275prov = $({
        token: m,
        factory: m.\u0275fac,
        providedIn: "root"
    });
    let a = m;
    return a
}
)();
export {Dt as a, es as b, y as c, ms as d, us as e, ys as f, Ve as g, ee as h, di as i, Ms as j, At as k, He as l, li as m};
//# sourceMappingURL=chunk-O3BOZ3M4.js.map
