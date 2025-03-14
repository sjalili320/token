var RA = Object.create;
var ac = Object.defineProperty
  , LA = Object.defineProperties
  , VA = Object.getOwnPropertyDescriptor
  , jA = Object.getOwnPropertyDescriptors
  , BA = Object.getOwnPropertyNames
  , sc = Object.getOwnPropertySymbols
  , A_ = Object.getPrototypeOf
  , Sp = Object.prototype.hasOwnProperty
  , P_ = Object.prototype.propertyIsEnumerable
  , HA = Reflect.get;
var Ep = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e)
  , UA = e => {
    throw TypeError(e)
}
;
var O_ = (e, t, n) => t in e ? ac(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Te = (e, t) => {
    for (var n in t ||= {})
        Sp.call(t, n) && O_(e, n, t[n]);
    if (sc)
        for (var n of sc(t))
            P_.call(t, n) && O_(e, n, t[n]);
    return e
}
  , We = (e, t) => LA(e, jA(t));
var uc = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e,{
    get: (t, n) => (typeof require < "u" ? require : t)[n]
}) : e)(function(e) {
    if (typeof require < "u")
        return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported')
});
var $A = (e, t) => {
    var n = {};
    for (var r in e)
        Sp.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && sc)
        for (var r of sc(e))
            t.indexOf(r) < 0 && P_.call(e, r) && (n[r] = e[r]);
    return n
}
;
var Tp = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t),
t.exports)
  , k6 = (e, t) => {
    for (var n in t)
        ac(e, n, {
            get: t[n],
            enumerable: !0
        })
}
  , YA = (e, t, n, r) => {
    if (t && typeof t == "object" || typeof t == "function")
        for (let i of BA(t))
            !Sp.call(e, i) && i !== n && ac(e, i, {
                get: () => t[i],
                enumerable: !(r = VA(t, i)) || r.enumerable
            });
    return e
}
;
var kp = (e, t, n) => (n = e != null ? RA(A_(e)) : {},
YA(t || !e || !e.__esModule ? ac(n, "default", {
    value: e,
    enumerable: !0
}) : n, e));
var N6 = (e, t, n) => HA(A_(e), n, t);
var Io = (e, t, n) => new Promise( (r, i) => {
    var o = l => {
        try {
            a(n.next(l))
        } catch (c) {
            i(c)
        }
    }
      , s = l => {
        try {
            a(n.throw(l))
        } catch (c) {
            i(c)
        }
    }
      , a = l => l.done ? r(l.value) : Promise.resolve(l.value).then(o, s);
    a((n = n.apply(e, t)).next())
}
)
  , WA = function(e, t) {
    this[0] = e,
    this[1] = t
};
var O6 = e => {
    var t = e[Ep("asyncIterator")], n = !1, r, i = {};
    return t == null ? (t = e[Ep("iterator")](),
    r = o => i[o] = s => t[o](s)) : (t = t.call(e),
    r = o => i[o] = s => {
        if (n) {
            if (n = !1,
            o === "throw")
                throw s;
            return s
        }
        return n = !0,
        {
            done: !1,
            value: new WA(new Promise(a => {
                var l = t[o](s);
                l instanceof Object || UA("Object expected"),
                a(l)
            }
            ),1)
        }
    }
    ),
    i[Ep("iterator")] = () => i,
    r("next"),
    "throw"in t ? r("throw") : i.throw = o => {
        throw o
    }
    ,
    "return"in t && r("return"),
    i
}
;
var np = Tp( (P0, Ba) => {
    (function(e, t) {
        typeof P0 == "object" && typeof Ba < "u" ? Ba.exports = t() : typeof define == "function" && define.amd ? define(t) : e.moment = t()
    }
    )(P0, function() {
        "use strict";
        var e;
        function t() {
            return e.apply(null, arguments)
        }
        function n(u) {
            e = u
        }
        function r(u) {
            return u instanceof Array || Object.prototype.toString.call(u) === "[object Array]"
        }
        function i(u) {
            return u != null && Object.prototype.toString.call(u) === "[object Object]"
        }
        function o(u, d) {
            return Object.prototype.hasOwnProperty.call(u, d)
        }
        function s(u) {
            if (Object.getOwnPropertyNames)
                return Object.getOwnPropertyNames(u).length === 0;
            var d;
            for (d in u)
                if (o(u, d))
                    return !1;
            return !0
        }
        function a(u) {
            return u === void 0
        }
        function l(u) {
            return typeof u == "number" || Object.prototype.toString.call(u) === "[object Number]"
        }
        function c(u) {
            return u instanceof Date || Object.prototype.toString.call(u) === "[object Date]"
        }
        function f(u, d) {
            var h = [], g, _ = u.length;
            for (g = 0; g < _; ++g)
                h.push(d(u[g], g));
            return h
        }
        function p(u, d) {
            for (var h in d)
                o(d, h) && (u[h] = d[h]);
            return o(d, "toString") && (u.toString = d.toString),
            o(d, "valueOf") && (u.valueOf = d.valueOf),
            u
        }
        function m(u, d, h, g) {
            return l_(u, d, h, g, !0).utc()
        }
        function y() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidEra: null,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                era: null,
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }
        }
        function v(u) {
            return u._pf == null && (u._pf = y()),
            u._pf
        }
        var w;
        Array.prototype.some ? w = Array.prototype.some : w = function(u) {
            var d = Object(this), h = d.length >>> 0, g;
            for (g = 0; g < h; g++)
                if (g in d && u.call(this, d[g], g, d))
                    return !0;
            return !1
        }
        ;
        function x(u) {
            var d = null
              , h = !1
              , g = u._d && !isNaN(u._d.getTime());
            if (g && (d = v(u),
            h = w.call(d.parsedDateParts, function(_) {
                return _ != null
            }),
            g = d.overflow < 0 && !d.empty && !d.invalidEra && !d.invalidMonth && !d.invalidWeekday && !d.weekdayMismatch && !d.nullInput && !d.invalidFormat && !d.userInvalidated && (!d.meridiem || d.meridiem && h),
            u._strict && (g = g && d.charsLeftOver === 0 && d.unusedTokens.length === 0 && d.bigHour === void 0)),
            Object.isFrozen == null || !Object.isFrozen(u))
                u._isValid = g;
            else
                return g;
            return u._isValid
        }
        function D(u) {
            var d = m(NaN);
            return u != null ? p(v(d), u) : v(d).userInvalidated = !0,
            d
        }
        var I = t.momentProperties = []
          , T = !1;
        function M(u, d) {
            var h, g, _, C = I.length;
            if (a(d._isAMomentObject) || (u._isAMomentObject = d._isAMomentObject),
            a(d._i) || (u._i = d._i),
            a(d._f) || (u._f = d._f),
            a(d._l) || (u._l = d._l),
            a(d._strict) || (u._strict = d._strict),
            a(d._tzm) || (u._tzm = d._tzm),
            a(d._isUTC) || (u._isUTC = d._isUTC),
            a(d._offset) || (u._offset = d._offset),
            a(d._pf) || (u._pf = v(d)),
            a(d._locale) || (u._locale = d._locale),
            C > 0)
                for (h = 0; h < C; h++)
                    g = I[h],
                    _ = d[g],
                    a(_) || (u[g] = _);
            return u
        }
        function S(u) {
            M(this, u),
            this._d = new Date(u._d != null ? u._d.getTime() : NaN),
            this.isValid() || (this._d = new Date(NaN)),
            T === !1 && (T = !0,
            t.updateOffset(this),
            T = !1)
        }
        function E(u) {
            return u instanceof S || u != null && u._isAMomentObject != null
        }
        function R(u) {
            t.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + u)
        }
        function Z(u, d) {
            var h = !0;
            return p(function() {
                if (t.deprecationHandler != null && t.deprecationHandler(null, u),
                h) {
                    var g = [], _, C, k, Q = arguments.length;
                    for (C = 0; C < Q; C++) {
                        if (_ = "",
                        typeof arguments[C] == "object") {
                            _ += `
[` + C + "] ";
                            for (k in arguments[0])
                                o(arguments[0], k) && (_ += k + ": " + arguments[0][k] + ", ");
                            _ = _.slice(0, -2)
                        } else
                            _ = arguments[C];
                        g.push(_)
                    }
                    R(u + `
Arguments: ` + Array.prototype.slice.call(g).join("") + `
` + new Error().stack),
                    h = !1
                }
                return d.apply(this, arguments)
            }, d)
        }
        var ve = {};
        function we(u, d) {
            t.deprecationHandler != null && t.deprecationHandler(u, d),
            ve[u] || (R(d),
            ve[u] = !0)
        }
        t.suppressDeprecationWarnings = !1,
        t.deprecationHandler = null;
        function V(u) {
            return typeof Function < "u" && u instanceof Function || Object.prototype.toString.call(u) === "[object Function]"
        }
        function xe(u) {
            var d, h;
            for (h in u)
                o(u, h) && (d = u[h],
                V(d) ? this[h] = d : this["_" + h] = d);
            this._config = u,
            this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }
        function $(u, d) {
            var h = p({}, u), g;
            for (g in d)
                o(d, g) && (i(u[g]) && i(d[g]) ? (h[g] = {},
                p(h[g], u[g]),
                p(h[g], d[g])) : d[g] != null ? h[g] = d[g] : delete h[g]);
            for (g in u)
                o(u, g) && !o(d, g) && i(u[g]) && (h[g] = p({}, h[g]));
            return h
        }
        function b(u) {
            u != null && this.set(u)
        }
        var H;
        Object.keys ? H = Object.keys : H = function(u) {
            var d, h = [];
            for (d in u)
                o(u, d) && h.push(d);
            return h
        }
        ;
        var N = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        };
        function W(u, d, h) {
            var g = this._calendar[u] || this._calendar.sameElse;
            return V(g) ? g.call(d, h) : g
        }
        function X(u, d, h) {
            var g = "" + Math.abs(u)
              , _ = d - g.length
              , C = u >= 0;
            return (C ? h ? "+" : "" : "-") + Math.pow(10, Math.max(0, _)).toString().substr(1) + g
        }
        var te = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
          , de = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
          , be = {}
          , Oe = {};
        function z(u, d, h, g) {
            var _ = g;
            typeof g == "string" && (_ = function() {
                return this[g]()
            }
            ),
            u && (Oe[u] = _),
            d && (Oe[d[0]] = function() {
                return X(_.apply(this, arguments), d[1], d[2])
            }
            ),
            h && (Oe[h] = function() {
                return this.localeData().ordinal(_.apply(this, arguments), u)
            }
            )
        }
        function nt(u) {
            return u.match(/\[[\s\S]/) ? u.replace(/^\[|\]$/g, "") : u.replace(/\\/g, "")
        }
        function rt(u) {
            var d = u.match(te), h, g;
            for (h = 0,
            g = d.length; h < g; h++)
                Oe[d[h]] ? d[h] = Oe[d[h]] : d[h] = nt(d[h]);
            return function(_) {
                var C = "", k;
                for (k = 0; k < g; k++)
                    C += V(d[k]) ? d[k].call(_, u) : d[k];
                return C
            }
        }
        function Dt(u, d) {
            return u.isValid() ? (d = xt(d, u.localeData()),
            be[d] = be[d] || rt(d),
            be[d](u)) : u.localeData().invalidDate()
        }
        function xt(u, d) {
            var h = 5;
            function g(_) {
                return d.longDateFormat(_) || _
            }
            for (de.lastIndex = 0; h >= 0 && de.test(u); )
                u = u.replace(de, g),
                de.lastIndex = 0,
                h -= 1;
            return u
        }
        var Ht = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        function G(u) {
            var d = this._longDateFormat[u]
              , h = this._longDateFormat[u.toUpperCase()];
            return d || !h ? d : (this._longDateFormat[u] = h.match(te).map(function(g) {
                return g === "MMMM" || g === "MM" || g === "DD" || g === "dddd" ? g.slice(1) : g
            }).join(""),
            this._longDateFormat[u])
        }
        var Ce = "Invalid date";
        function Ie() {
            return this._invalidDate
        }
        var A = "%d"
          , Jt = /\d{1,2}/;
        function $e(u) {
            return this._ordinal.replace("%d", u)
        }
        var on = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            w: "a week",
            ww: "%d weeks",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        };
        function sn(u, d, h, g) {
            var _ = this._relativeTime[h];
            return V(_) ? _(u, d, h, g) : _.replace(/%d/i, u)
        }
        function Zr(u, d) {
            var h = this._relativeTime[u > 0 ? "future" : "past"];
            return V(h) ? h(d) : h.replace(/%s/i, d)
        }
        var Ua = {
            D: "date",
            dates: "date",
            date: "date",
            d: "day",
            days: "day",
            day: "day",
            e: "weekday",
            weekdays: "weekday",
            weekday: "weekday",
            E: "isoWeekday",
            isoweekdays: "isoWeekday",
            isoweekday: "isoWeekday",
            DDD: "dayOfYear",
            dayofyears: "dayOfYear",
            dayofyear: "dayOfYear",
            h: "hour",
            hours: "hour",
            hour: "hour",
            ms: "millisecond",
            milliseconds: "millisecond",
            millisecond: "millisecond",
            m: "minute",
            minutes: "minute",
            minute: "minute",
            M: "month",
            months: "month",
            month: "month",
            Q: "quarter",
            quarters: "quarter",
            quarter: "quarter",
            s: "second",
            seconds: "second",
            second: "second",
            gg: "weekYear",
            weekyears: "weekYear",
            weekyear: "weekYear",
            GG: "isoWeekYear",
            isoweekyears: "isoWeekYear",
            isoweekyear: "isoWeekYear",
            w: "week",
            weeks: "week",
            week: "week",
            W: "isoWeek",
            isoweeks: "isoWeek",
            isoweek: "isoWeek",
            y: "year",
            years: "year",
            year: "year"
        };
        function Un(u) {
            return typeof u == "string" ? Ua[u] || Ua[u.toLowerCase()] : void 0
        }
        function ip(u) {
            var d = {}, h, g;
            for (g in u)
                o(u, g) && (h = Un(g),
                h && (d[h] = u[g]));
            return d
        }
        var KT = {
            date: 9,
            day: 11,
            weekday: 11,
            isoWeekday: 11,
            dayOfYear: 4,
            hour: 13,
            millisecond: 16,
            minute: 14,
            month: 8,
            quarter: 7,
            second: 15,
            weekYear: 1,
            isoWeekYear: 1,
            week: 5,
            isoWeek: 5,
            year: 1
        };
        function ek(u) {
            var d = [], h;
            for (h in u)
                o(u, h) && d.push({
                    unit: h,
                    priority: KT[h]
                });
            return d.sort(function(g, _) {
                return g.priority - _.priority
            }),
            d
        }
        var $0 = /\d/, En = /\d\d/, Y0 = /\d{3}/, op = /\d{4}/, Ul = /[+-]?\d{6}/, it = /\d\d?/, W0 = /\d\d\d\d?/, z0 = /\d\d\d\d\d\d?/, $l = /\d{1,3}/, sp = /\d{1,4}/, Yl = /[+-]?\d{1,6}/, Cs = /\d+/, Wl = /[+-]?\d+/, tk = /Z|[+-]\d\d:?\d\d/gi, zl = /Z|[+-]\d\d(?::?\d\d)?/gi, nk = /[+-]?\d+(\.\d{1,3})?/, $a = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ms = /^[1-9]\d?/, ap = /^([1-9]\d|\d)/, Gl;
        Gl = {};
        function J(u, d, h) {
            Gl[u] = V(d) ? d : function(g, _) {
                return g && h ? h : d
            }
        }
        function rk(u, d) {
            return o(Gl, u) ? Gl[u](d._strict, d._locale) : new RegExp(ik(u))
        }
        function ik(u) {
            return Qr(u.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(d, h, g, _, C) {
                return h || g || _ || C
            }))
        }
        function Qr(u) {
            return u.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        function $n(u) {
            return u < 0 ? Math.ceil(u) || 0 : Math.floor(u)
        }
        function Se(u) {
            var d = +u
              , h = 0;
            return d !== 0 && isFinite(d) && (h = $n(d)),
            h
        }
        var up = {};
        function Ye(u, d) {
            var h, g = d, _;
            for (typeof u == "string" && (u = [u]),
            l(d) && (g = function(C, k) {
                k[d] = Se(C)
            }
            ),
            _ = u.length,
            h = 0; h < _; h++)
                up[u[h]] = g
        }
        function Ya(u, d) {
            Ye(u, function(h, g, _, C) {
                _._w = _._w || {},
                d(h, _._w, _, C)
            })
        }
        function ok(u, d, h) {
            d != null && o(up, u) && up[u](d, h._a, h, u)
        }
        function ql(u) {
            return u % 4 === 0 && u % 100 !== 0 || u % 400 === 0
        }
        var Kt = 0
          , Xr = 1
          , Cr = 2
          , It = 3
          , Zn = 4
          , Jr = 5
          , Co = 6
          , sk = 7
          , ak = 8;
        z("Y", 0, 0, function() {
            var u = this.year();
            return u <= 9999 ? X(u, 4) : "+" + u
        }),
        z(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }),
        z(0, ["YYYY", 4], 0, "year"),
        z(0, ["YYYYY", 5], 0, "year"),
        z(0, ["YYYYYY", 6, !0], 0, "year"),
        J("Y", Wl),
        J("YY", it, En),
        J("YYYY", sp, op),
        J("YYYYY", Yl, Ul),
        J("YYYYYY", Yl, Ul),
        Ye(["YYYYY", "YYYYYY"], Kt),
        Ye("YYYY", function(u, d) {
            d[Kt] = u.length === 2 ? t.parseTwoDigitYear(u) : Se(u)
        }),
        Ye("YY", function(u, d) {
            d[Kt] = t.parseTwoDigitYear(u)
        }),
        Ye("Y", function(u, d) {
            d[Kt] = parseInt(u, 10)
        });
        function Wa(u) {
            return ql(u) ? 366 : 365
        }
        t.parseTwoDigitYear = function(u) {
            return Se(u) + (Se(u) > 68 ? 1900 : 2e3)
        }
        ;
        var G0 = bs("FullYear", !0);
        function uk() {
            return ql(this.year())
        }
        function bs(u, d) {
            return function(h) {
                return h != null ? (q0(this, u, h),
                t.updateOffset(this, d),
                this) : za(this, u)
            }
        }
        function za(u, d) {
            if (!u.isValid())
                return NaN;
            var h = u._d
              , g = u._isUTC;
            switch (d) {
            case "Milliseconds":
                return g ? h.getUTCMilliseconds() : h.getMilliseconds();
            case "Seconds":
                return g ? h.getUTCSeconds() : h.getSeconds();
            case "Minutes":
                return g ? h.getUTCMinutes() : h.getMinutes();
            case "Hours":
                return g ? h.getUTCHours() : h.getHours();
            case "Date":
                return g ? h.getUTCDate() : h.getDate();
            case "Day":
                return g ? h.getUTCDay() : h.getDay();
            case "Month":
                return g ? h.getUTCMonth() : h.getMonth();
            case "FullYear":
                return g ? h.getUTCFullYear() : h.getFullYear();
            default:
                return NaN
            }
        }
        function q0(u, d, h) {
            var g, _, C, k, Q;
            if (!(!u.isValid() || isNaN(h))) {
                switch (g = u._d,
                _ = u._isUTC,
                d) {
                case "Milliseconds":
                    return void (_ ? g.setUTCMilliseconds(h) : g.setMilliseconds(h));
                case "Seconds":
                    return void (_ ? g.setUTCSeconds(h) : g.setSeconds(h));
                case "Minutes":
                    return void (_ ? g.setUTCMinutes(h) : g.setMinutes(h));
                case "Hours":
                    return void (_ ? g.setUTCHours(h) : g.setHours(h));
                case "Date":
                    return void (_ ? g.setUTCDate(h) : g.setDate(h));
                case "FullYear":
                    break;
                default:
                    return
                }
                C = h,
                k = u.month(),
                Q = u.date(),
                Q = Q === 29 && k === 1 && !ql(C) ? 28 : Q,
                _ ? g.setUTCFullYear(C, k, Q) : g.setFullYear(C, k, Q)
            }
        }
        function lk(u) {
            return u = Un(u),
            V(this[u]) ? this[u]() : this
        }
        function ck(u, d) {
            if (typeof u == "object") {
                u = ip(u);
                var h = ek(u), g, _ = h.length;
                for (g = 0; g < _; g++)
                    this[h[g].unit](u[h[g].unit])
            } else if (u = Un(u),
            V(this[u]))
                return this[u](d);
            return this
        }
        function dk(u, d) {
            return (u % d + d) % d
        }
        var _t;
        Array.prototype.indexOf ? _t = Array.prototype.indexOf : _t = function(u) {
            var d;
            for (d = 0; d < this.length; ++d)
                if (this[d] === u)
                    return d;
            return -1
        }
        ;
        function lp(u, d) {
            if (isNaN(u) || isNaN(d))
                return NaN;
            var h = dk(d, 12);
            return u += (d - h) / 12,
            h === 1 ? ql(u) ? 29 : 28 : 31 - h % 7 % 2
        }
        z("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }),
        z("MMM", 0, 0, function(u) {
            return this.localeData().monthsShort(this, u)
        }),
        z("MMMM", 0, 0, function(u) {
            return this.localeData().months(this, u)
        }),
        J("M", it, Ms),
        J("MM", it, En),
        J("MMM", function(u, d) {
            return d.monthsShortRegex(u)
        }),
        J("MMMM", function(u, d) {
            return d.monthsRegex(u)
        }),
        Ye(["M", "MM"], function(u, d) {
            d[Xr] = Se(u) - 1
        }),
        Ye(["MMM", "MMMM"], function(u, d, h, g) {
            var _ = h._locale.monthsParse(u, g, h._strict);
            _ != null ? d[Xr] = _ : v(h).invalidMonth = u
        });
        var fk = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
          , Z0 = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
          , Q0 = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
          , hk = $a
          , pk = $a;
        function mk(u, d) {
            return u ? r(this._months) ? this._months[u.month()] : this._months[(this._months.isFormat || Q0).test(d) ? "format" : "standalone"][u.month()] : r(this._months) ? this._months : this._months.standalone
        }
        function gk(u, d) {
            return u ? r(this._monthsShort) ? this._monthsShort[u.month()] : this._monthsShort[Q0.test(d) ? "format" : "standalone"][u.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }
        function yk(u, d, h) {
            var g, _, C, k = u.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                g = 0; g < 12; ++g)
                    C = m([2e3, g]),
                    this._shortMonthsParse[g] = this.monthsShort(C, "").toLocaleLowerCase(),
                    this._longMonthsParse[g] = this.months(C, "").toLocaleLowerCase();
            return h ? d === "MMM" ? (_ = _t.call(this._shortMonthsParse, k),
            _ !== -1 ? _ : null) : (_ = _t.call(this._longMonthsParse, k),
            _ !== -1 ? _ : null) : d === "MMM" ? (_ = _t.call(this._shortMonthsParse, k),
            _ !== -1 ? _ : (_ = _t.call(this._longMonthsParse, k),
            _ !== -1 ? _ : null)) : (_ = _t.call(this._longMonthsParse, k),
            _ !== -1 ? _ : (_ = _t.call(this._shortMonthsParse, k),
            _ !== -1 ? _ : null))
        }
        function vk(u, d, h) {
            var g, _, C;
            if (this._monthsParseExact)
                return yk.call(this, u, d, h);
            for (this._monthsParse || (this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = []),
            g = 0; g < 12; g++) {
                if (_ = m([2e3, g]),
                h && !this._longMonthsParse[g] && (this._longMonthsParse[g] = new RegExp("^" + this.months(_, "").replace(".", "") + "$","i"),
                this._shortMonthsParse[g] = new RegExp("^" + this.monthsShort(_, "").replace(".", "") + "$","i")),
                !h && !this._monthsParse[g] && (C = "^" + this.months(_, "") + "|^" + this.monthsShort(_, ""),
                this._monthsParse[g] = new RegExp(C.replace(".", ""),"i")),
                h && d === "MMMM" && this._longMonthsParse[g].test(u))
                    return g;
                if (h && d === "MMM" && this._shortMonthsParse[g].test(u))
                    return g;
                if (!h && this._monthsParse[g].test(u))
                    return g
            }
        }
        function X0(u, d) {
            if (!u.isValid())
                return u;
            if (typeof d == "string") {
                if (/^\d+$/.test(d))
                    d = Se(d);
                else if (d = u.localeData().monthsParse(d),
                !l(d))
                    return u
            }
            var h = d
              , g = u.date();
            return g = g < 29 ? g : Math.min(g, lp(u.year(), h)),
            u._isUTC ? u._d.setUTCMonth(h, g) : u._d.setMonth(h, g),
            u
        }
        function J0(u) {
            return u != null ? (X0(this, u),
            t.updateOffset(this, !0),
            this) : za(this, "Month")
        }
        function _k() {
            return lp(this.year(), this.month())
        }
        function wk(u) {
            return this._monthsParseExact ? (o(this, "_monthsRegex") || K0.call(this),
            u ? this._monthsShortStrictRegex : this._monthsShortRegex) : (o(this, "_monthsShortRegex") || (this._monthsShortRegex = hk),
            this._monthsShortStrictRegex && u ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }
        function Dk(u) {
            return this._monthsParseExact ? (o(this, "_monthsRegex") || K0.call(this),
            u ? this._monthsStrictRegex : this._monthsRegex) : (o(this, "_monthsRegex") || (this._monthsRegex = pk),
            this._monthsStrictRegex && u ? this._monthsStrictRegex : this._monthsRegex)
        }
        function K0() {
            function u(_e, Ae) {
                return Ae.length - _e.length
            }
            var d = [], h = [], g = [], _, C, k, Q;
            for (_ = 0; _ < 12; _++)
                C = m([2e3, _]),
                k = Qr(this.monthsShort(C, "")),
                Q = Qr(this.months(C, "")),
                d.push(k),
                h.push(Q),
                g.push(Q),
                g.push(k);
            d.sort(u),
            h.sort(u),
            g.sort(u),
            this._monthsRegex = new RegExp("^(" + g.join("|") + ")","i"),
            this._monthsShortRegex = this._monthsRegex,
            this._monthsStrictRegex = new RegExp("^(" + h.join("|") + ")","i"),
            this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")","i")
        }
        function xk(u, d, h, g, _, C, k) {
            var Q;
            return u < 100 && u >= 0 ? (Q = new Date(u + 400,d,h,g,_,C,k),
            isFinite(Q.getFullYear()) && Q.setFullYear(u)) : Q = new Date(u,d,h,g,_,C,k),
            Q
        }
        function Ga(u) {
            var d, h;
            return u < 100 && u >= 0 ? (h = Array.prototype.slice.call(arguments),
            h[0] = u + 400,
            d = new Date(Date.UTC.apply(null, h)),
            isFinite(d.getUTCFullYear()) && d.setUTCFullYear(u)) : d = new Date(Date.UTC.apply(null, arguments)),
            d
        }
        function Zl(u, d, h) {
            var g = 7 + d - h
              , _ = (7 + Ga(u, 0, g).getUTCDay() - d) % 7;
            return -_ + g - 1
        }
        function e_(u, d, h, g, _) {
            var C = (7 + h - g) % 7, k = Zl(u, g, _), Q = 1 + 7 * (d - 1) + C + k, _e, Ae;
            return Q <= 0 ? (_e = u - 1,
            Ae = Wa(_e) + Q) : Q > Wa(u) ? (_e = u + 1,
            Ae = Q - Wa(u)) : (_e = u,
            Ae = Q),
            {
                year: _e,
                dayOfYear: Ae
            }
        }
        function qa(u, d, h) {
            var g = Zl(u.year(), d, h), _ = Math.floor((u.dayOfYear() - g - 1) / 7) + 1, C, k;
            return _ < 1 ? (k = u.year() - 1,
            C = _ + Kr(k, d, h)) : _ > Kr(u.year(), d, h) ? (C = _ - Kr(u.year(), d, h),
            k = u.year() + 1) : (k = u.year(),
            C = _),
            {
                week: C,
                year: k
            }
        }
        function Kr(u, d, h) {
            var g = Zl(u, d, h)
              , _ = Zl(u + 1, d, h);
            return (Wa(u) - g + _) / 7
        }
        z("w", ["ww", 2], "wo", "week"),
        z("W", ["WW", 2], "Wo", "isoWeek"),
        J("w", it, Ms),
        J("ww", it, En),
        J("W", it, Ms),
        J("WW", it, En),
        Ya(["w", "ww", "W", "WW"], function(u, d, h, g) {
            d[g.substr(0, 1)] = Se(u)
        });
        function Ck(u) {
            return qa(u, this._week.dow, this._week.doy).week
        }
        var Mk = {
            dow: 0,
            doy: 6
        };
        function bk() {
            return this._week.dow
        }
        function Ik() {
            return this._week.doy
        }
        function Ek(u) {
            var d = this.localeData().week(this);
            return u == null ? d : this.add((u - d) * 7, "d")
        }
        function Sk(u) {
            var d = qa(this, 1, 4).week;
            return u == null ? d : this.add((u - d) * 7, "d")
        }
        z("d", 0, "do", "day"),
        z("dd", 0, 0, function(u) {
            return this.localeData().weekdaysMin(this, u)
        }),
        z("ddd", 0, 0, function(u) {
            return this.localeData().weekdaysShort(this, u)
        }),
        z("dddd", 0, 0, function(u) {
            return this.localeData().weekdays(this, u)
        }),
        z("e", 0, 0, "weekday"),
        z("E", 0, 0, "isoWeekday"),
        J("d", it),
        J("e", it),
        J("E", it),
        J("dd", function(u, d) {
            return d.weekdaysMinRegex(u)
        }),
        J("ddd", function(u, d) {
            return d.weekdaysShortRegex(u)
        }),
        J("dddd", function(u, d) {
            return d.weekdaysRegex(u)
        }),
        Ya(["dd", "ddd", "dddd"], function(u, d, h, g) {
            var _ = h._locale.weekdaysParse(u, g, h._strict);
            _ != null ? d.d = _ : v(h).invalidWeekday = u
        }),
        Ya(["d", "e", "E"], function(u, d, h, g) {
            d[g] = Se(u)
        });
        function Tk(u, d) {
            return typeof u != "string" ? u : isNaN(u) ? (u = d.weekdaysParse(u),
            typeof u == "number" ? u : null) : parseInt(u, 10)
        }
        function kk(u, d) {
            return typeof u == "string" ? d.weekdaysParse(u) % 7 || 7 : isNaN(u) ? null : u
        }
        function cp(u, d) {
            return u.slice(d, 7).concat(u.slice(0, d))
        }
        var Nk = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
          , t_ = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
          , Ok = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
          , Ak = $a
          , Pk = $a
          , Fk = $a;
        function Rk(u, d) {
            var h = r(this._weekdays) ? this._weekdays : this._weekdays[u && u !== !0 && this._weekdays.isFormat.test(d) ? "format" : "standalone"];
            return u === !0 ? cp(h, this._week.dow) : u ? h[u.day()] : h
        }
        function Lk(u) {
            return u === !0 ? cp(this._weekdaysShort, this._week.dow) : u ? this._weekdaysShort[u.day()] : this._weekdaysShort
        }
        function Vk(u) {
            return u === !0 ? cp(this._weekdaysMin, this._week.dow) : u ? this._weekdaysMin[u.day()] : this._weekdaysMin
        }
        function jk(u, d, h) {
            var g, _, C, k = u.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                g = 0; g < 7; ++g)
                    C = m([2e3, 1]).day(g),
                    this._minWeekdaysParse[g] = this.weekdaysMin(C, "").toLocaleLowerCase(),
                    this._shortWeekdaysParse[g] = this.weekdaysShort(C, "").toLocaleLowerCase(),
                    this._weekdaysParse[g] = this.weekdays(C, "").toLocaleLowerCase();
            return h ? d === "dddd" ? (_ = _t.call(this._weekdaysParse, k),
            _ !== -1 ? _ : null) : d === "ddd" ? (_ = _t.call(this._shortWeekdaysParse, k),
            _ !== -1 ? _ : null) : (_ = _t.call(this._minWeekdaysParse, k),
            _ !== -1 ? _ : null) : d === "dddd" ? (_ = _t.call(this._weekdaysParse, k),
            _ !== -1 || (_ = _t.call(this._shortWeekdaysParse, k),
            _ !== -1) ? _ : (_ = _t.call(this._minWeekdaysParse, k),
            _ !== -1 ? _ : null)) : d === "ddd" ? (_ = _t.call(this._shortWeekdaysParse, k),
            _ !== -1 || (_ = _t.call(this._weekdaysParse, k),
            _ !== -1) ? _ : (_ = _t.call(this._minWeekdaysParse, k),
            _ !== -1 ? _ : null)) : (_ = _t.call(this._minWeekdaysParse, k),
            _ !== -1 || (_ = _t.call(this._weekdaysParse, k),
            _ !== -1) ? _ : (_ = _t.call(this._shortWeekdaysParse, k),
            _ !== -1 ? _ : null))
        }
        function Bk(u, d, h) {
            var g, _, C;
            if (this._weekdaysParseExact)
                return jk.call(this, u, d, h);
            for (this._weekdaysParse || (this._weekdaysParse = [],
            this._minWeekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._fullWeekdaysParse = []),
            g = 0; g < 7; g++) {
                if (_ = m([2e3, 1]).day(g),
                h && !this._fullWeekdaysParse[g] && (this._fullWeekdaysParse[g] = new RegExp("^" + this.weekdays(_, "").replace(".", "\\.?") + "$","i"),
                this._shortWeekdaysParse[g] = new RegExp("^" + this.weekdaysShort(_, "").replace(".", "\\.?") + "$","i"),
                this._minWeekdaysParse[g] = new RegExp("^" + this.weekdaysMin(_, "").replace(".", "\\.?") + "$","i")),
                this._weekdaysParse[g] || (C = "^" + this.weekdays(_, "") + "|^" + this.weekdaysShort(_, "") + "|^" + this.weekdaysMin(_, ""),
                this._weekdaysParse[g] = new RegExp(C.replace(".", ""),"i")),
                h && d === "dddd" && this._fullWeekdaysParse[g].test(u))
                    return g;
                if (h && d === "ddd" && this._shortWeekdaysParse[g].test(u))
                    return g;
                if (h && d === "dd" && this._minWeekdaysParse[g].test(u))
                    return g;
                if (!h && this._weekdaysParse[g].test(u))
                    return g
            }
        }
        function Hk(u) {
            if (!this.isValid())
                return u != null ? this : NaN;
            var d = za(this, "Day");
            return u != null ? (u = Tk(u, this.localeData()),
            this.add(u - d, "d")) : d
        }
        function Uk(u) {
            if (!this.isValid())
                return u != null ? this : NaN;
            var d = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return u == null ? d : this.add(u - d, "d")
        }
        function $k(u) {
            if (!this.isValid())
                return u != null ? this : NaN;
            if (u != null) {
                var d = kk(u, this.localeData());
                return this.day(this.day() % 7 ? d : d - 7)
            } else
                return this.day() || 7
        }
        function Yk(u) {
            return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || dp.call(this),
            u ? this._weekdaysStrictRegex : this._weekdaysRegex) : (o(this, "_weekdaysRegex") || (this._weekdaysRegex = Ak),
            this._weekdaysStrictRegex && u ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }
        function Wk(u) {
            return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || dp.call(this),
            u ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (o(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Pk),
            this._weekdaysShortStrictRegex && u ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }
        function zk(u) {
            return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || dp.call(this),
            u ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (o(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Fk),
            this._weekdaysMinStrictRegex && u ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }
        function dp() {
            function u(an, ii) {
                return ii.length - an.length
            }
            var d = [], h = [], g = [], _ = [], C, k, Q, _e, Ae;
            for (C = 0; C < 7; C++)
                k = m([2e3, 1]).day(C),
                Q = Qr(this.weekdaysMin(k, "")),
                _e = Qr(this.weekdaysShort(k, "")),
                Ae = Qr(this.weekdays(k, "")),
                d.push(Q),
                h.push(_e),
                g.push(Ae),
                _.push(Q),
                _.push(_e),
                _.push(Ae);
            d.sort(u),
            h.sort(u),
            g.sort(u),
            _.sort(u),
            this._weekdaysRegex = new RegExp("^(" + _.join("|") + ")","i"),
            this._weekdaysShortRegex = this._weekdaysRegex,
            this._weekdaysMinRegex = this._weekdaysRegex,
            this._weekdaysStrictRegex = new RegExp("^(" + g.join("|") + ")","i"),
            this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")","i"),
            this._weekdaysMinStrictRegex = new RegExp("^(" + d.join("|") + ")","i")
        }
        function fp() {
            return this.hours() % 12 || 12
        }
        function Gk() {
            return this.hours() || 24
        }
        z("H", ["HH", 2], 0, "hour"),
        z("h", ["hh", 2], 0, fp),
        z("k", ["kk", 2], 0, Gk),
        z("hmm", 0, 0, function() {
            return "" + fp.apply(this) + X(this.minutes(), 2)
        }),
        z("hmmss", 0, 0, function() {
            return "" + fp.apply(this) + X(this.minutes(), 2) + X(this.seconds(), 2)
        }),
        z("Hmm", 0, 0, function() {
            return "" + this.hours() + X(this.minutes(), 2)
        }),
        z("Hmmss", 0, 0, function() {
            return "" + this.hours() + X(this.minutes(), 2) + X(this.seconds(), 2)
        });
        function n_(u, d) {
            z(u, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), d)
            })
        }
        n_("a", !0),
        n_("A", !1);
        function r_(u, d) {
            return d._meridiemParse
        }
        J("a", r_),
        J("A", r_),
        J("H", it, ap),
        J("h", it, Ms),
        J("k", it, Ms),
        J("HH", it, En),
        J("hh", it, En),
        J("kk", it, En),
        J("hmm", W0),
        J("hmmss", z0),
        J("Hmm", W0),
        J("Hmmss", z0),
        Ye(["H", "HH"], It),
        Ye(["k", "kk"], function(u, d, h) {
            var g = Se(u);
            d[It] = g === 24 ? 0 : g
        }),
        Ye(["a", "A"], function(u, d, h) {
            h._isPm = h._locale.isPM(u),
            h._meridiem = u
        }),
        Ye(["h", "hh"], function(u, d, h) {
            d[It] = Se(u),
            v(h).bigHour = !0
        }),
        Ye("hmm", function(u, d, h) {
            var g = u.length - 2;
            d[It] = Se(u.substr(0, g)),
            d[Zn] = Se(u.substr(g)),
            v(h).bigHour = !0
        }),
        Ye("hmmss", function(u, d, h) {
            var g = u.length - 4
              , _ = u.length - 2;
            d[It] = Se(u.substr(0, g)),
            d[Zn] = Se(u.substr(g, 2)),
            d[Jr] = Se(u.substr(_)),
            v(h).bigHour = !0
        }),
        Ye("Hmm", function(u, d, h) {
            var g = u.length - 2;
            d[It] = Se(u.substr(0, g)),
            d[Zn] = Se(u.substr(g))
        }),
        Ye("Hmmss", function(u, d, h) {
            var g = u.length - 4
              , _ = u.length - 2;
            d[It] = Se(u.substr(0, g)),
            d[Zn] = Se(u.substr(g, 2)),
            d[Jr] = Se(u.substr(_))
        });
        function qk(u) {
            return (u + "").toLowerCase().charAt(0) === "p"
        }
        var Zk = /[ap]\.?m?\.?/i
          , Qk = bs("Hours", !0);
        function Xk(u, d, h) {
            return u > 11 ? h ? "pm" : "PM" : h ? "am" : "AM"
        }
        var i_ = {
            calendar: N,
            longDateFormat: Ht,
            invalidDate: Ce,
            ordinal: A,
            dayOfMonthOrdinalParse: Jt,
            relativeTime: on,
            months: fk,
            monthsShort: Z0,
            week: Mk,
            weekdays: Nk,
            weekdaysMin: Ok,
            weekdaysShort: t_,
            meridiemParse: Zk
        }, lt = {}, Za = {}, Qa;
        function Jk(u, d) {
            var h, g = Math.min(u.length, d.length);
            for (h = 0; h < g; h += 1)
                if (u[h] !== d[h])
                    return h;
            return g
        }
        function o_(u) {
            return u && u.toLowerCase().replace("_", "-")
        }
        function Kk(u) {
            for (var d = 0, h, g, _, C; d < u.length; ) {
                for (C = o_(u[d]).split("-"),
                h = C.length,
                g = o_(u[d + 1]),
                g = g ? g.split("-") : null; h > 0; ) {
                    if (_ = Ql(C.slice(0, h).join("-")),
                    _)
                        return _;
                    if (g && g.length >= h && Jk(C, g) >= h - 1)
                        break;
                    h--
                }
                d++
            }
            return Qa
        }
        function eN(u) {
            return !!(u && u.match("^[^/\\\\]*$"))
        }
        function Ql(u) {
            var d = null, h;
            if (lt[u] === void 0 && typeof Ba < "u" && Ba && Ba.exports && eN(u))
                try {
                    d = Qa._abbr,
                    h = uc,
                    h("./locale/" + u),
                    Si(d)
                } catch {
                    lt[u] = null
                }
            return lt[u]
        }
        function Si(u, d) {
            var h;
            return u && (a(d) ? h = ei(u) : h = hp(u, d),
            h ? Qa = h : typeof console < "u" && console.warn && console.warn("Locale " + u + " not found. Did you forget to load it?")),
            Qa._abbr
        }
        function hp(u, d) {
            if (d !== null) {
                var h, g = i_;
                if (d.abbr = u,
                lt[u] != null)
                    we("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                    g = lt[u]._config;
                else if (d.parentLocale != null)
                    if (lt[d.parentLocale] != null)
                        g = lt[d.parentLocale]._config;
                    else if (h = Ql(d.parentLocale),
                    h != null)
                        g = h._config;
                    else
                        return Za[d.parentLocale] || (Za[d.parentLocale] = []),
                        Za[d.parentLocale].push({
                            name: u,
                            config: d
                        }),
                        null;
                return lt[u] = new b($(g, d)),
                Za[u] && Za[u].forEach(function(_) {
                    hp(_.name, _.config)
                }),
                Si(u),
                lt[u]
            } else
                return delete lt[u],
                null
        }
        function tN(u, d) {
            if (d != null) {
                var h, g, _ = i_;
                lt[u] != null && lt[u].parentLocale != null ? lt[u].set($(lt[u]._config, d)) : (g = Ql(u),
                g != null && (_ = g._config),
                d = $(_, d),
                g == null && (d.abbr = u),
                h = new b(d),
                h.parentLocale = lt[u],
                lt[u] = h),
                Si(u)
            } else
                lt[u] != null && (lt[u].parentLocale != null ? (lt[u] = lt[u].parentLocale,
                u === Si() && Si(u)) : lt[u] != null && delete lt[u]);
            return lt[u]
        }
        function ei(u) {
            var d;
            if (u && u._locale && u._locale._abbr && (u = u._locale._abbr),
            !u)
                return Qa;
            if (!r(u)) {
                if (d = Ql(u),
                d)
                    return d;
                u = [u]
            }
            return Kk(u)
        }
        function nN() {
            return H(lt)
        }
        function pp(u) {
            var d, h = u._a;
            return h && v(u).overflow === -2 && (d = h[Xr] < 0 || h[Xr] > 11 ? Xr : h[Cr] < 1 || h[Cr] > lp(h[Kt], h[Xr]) ? Cr : h[It] < 0 || h[It] > 24 || h[It] === 24 && (h[Zn] !== 0 || h[Jr] !== 0 || h[Co] !== 0) ? It : h[Zn] < 0 || h[Zn] > 59 ? Zn : h[Jr] < 0 || h[Jr] > 59 ? Jr : h[Co] < 0 || h[Co] > 999 ? Co : -1,
            v(u)._overflowDayOfYear && (d < Kt || d > Cr) && (d = Cr),
            v(u)._overflowWeeks && d === -1 && (d = sk),
            v(u)._overflowWeekday && d === -1 && (d = ak),
            v(u).overflow = d),
            u
        }
        var rN = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
          , iN = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
          , oN = /Z|[+-]\d\d(?::?\d\d)?/
          , Xl = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
          , mp = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
          , sN = /^\/?Date\((-?\d+)/i
          , aN = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
          , uN = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60
        };
        function s_(u) {
            var d, h, g = u._i, _ = rN.exec(g) || iN.exec(g), C, k, Q, _e, Ae = Xl.length, an = mp.length;
            if (_) {
                for (v(u).iso = !0,
                d = 0,
                h = Ae; d < h; d++)
                    if (Xl[d][1].exec(_[1])) {
                        k = Xl[d][0],
                        C = Xl[d][2] !== !1;
                        break
                    }
                if (k == null) {
                    u._isValid = !1;
                    return
                }
                if (_[3]) {
                    for (d = 0,
                    h = an; d < h; d++)
                        if (mp[d][1].exec(_[3])) {
                            Q = (_[2] || " ") + mp[d][0];
                            break
                        }
                    if (Q == null) {
                        u._isValid = !1;
                        return
                    }
                }
                if (!C && Q != null) {
                    u._isValid = !1;
                    return
                }
                if (_[4])
                    if (oN.exec(_[4]))
                        _e = "Z";
                    else {
                        u._isValid = !1;
                        return
                    }
                u._f = k + (Q || "") + (_e || ""),
                yp(u)
            } else
                u._isValid = !1
        }
        function lN(u, d, h, g, _, C) {
            var k = [cN(u), Z0.indexOf(d), parseInt(h, 10), parseInt(g, 10), parseInt(_, 10)];
            return C && k.push(parseInt(C, 10)),
            k
        }
        function cN(u) {
            var d = parseInt(u, 10);
            return d <= 49 ? 2e3 + d : d <= 999 ? 1900 + d : d
        }
        function dN(u) {
            return u.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }
        function fN(u, d, h) {
            if (u) {
                var g = t_.indexOf(u)
                  , _ = new Date(d[0],d[1],d[2]).getDay();
                if (g !== _)
                    return v(h).weekdayMismatch = !0,
                    h._isValid = !1,
                    !1
            }
            return !0
        }
        function hN(u, d, h) {
            if (u)
                return uN[u];
            if (d)
                return 0;
            var g = parseInt(h, 10)
              , _ = g % 100
              , C = (g - _) / 100;
            return C * 60 + _
        }
        function a_(u) {
            var d = aN.exec(dN(u._i)), h;
            if (d) {
                if (h = lN(d[4], d[3], d[2], d[5], d[6], d[7]),
                !fN(d[1], h, u))
                    return;
                u._a = h,
                u._tzm = hN(d[8], d[9], d[10]),
                u._d = Ga.apply(null, u._a),
                u._d.setUTCMinutes(u._d.getUTCMinutes() - u._tzm),
                v(u).rfc2822 = !0
            } else
                u._isValid = !1
        }
        function pN(u) {
            var d = sN.exec(u._i);
            if (d !== null) {
                u._d = new Date(+d[1]);
                return
            }
            if (s_(u),
            u._isValid === !1)
                delete u._isValid;
            else
                return;
            if (a_(u),
            u._isValid === !1)
                delete u._isValid;
            else
                return;
            u._strict ? u._isValid = !1 : t.createFromInputFallback(u)
        }
        t.createFromInputFallback = Z("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(u) {
            u._d = new Date(u._i + (u._useUTC ? " UTC" : ""))
        });
        function Is(u, d, h) {
            return u ?? d ?? h
        }
        function mN(u) {
            var d = new Date(t.now());
            return u._useUTC ? [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()] : [d.getFullYear(), d.getMonth(), d.getDate()]
        }
        function gp(u) {
            var d, h, g = [], _, C, k;
            if (!u._d) {
                for (_ = mN(u),
                u._w && u._a[Cr] == null && u._a[Xr] == null && gN(u),
                u._dayOfYear != null && (k = Is(u._a[Kt], _[Kt]),
                (u._dayOfYear > Wa(k) || u._dayOfYear === 0) && (v(u)._overflowDayOfYear = !0),
                h = Ga(k, 0, u._dayOfYear),
                u._a[Xr] = h.getUTCMonth(),
                u._a[Cr] = h.getUTCDate()),
                d = 0; d < 3 && u._a[d] == null; ++d)
                    u._a[d] = g[d] = _[d];
                for (; d < 7; d++)
                    u._a[d] = g[d] = u._a[d] == null ? d === 2 ? 1 : 0 : u._a[d];
                u._a[It] === 24 && u._a[Zn] === 0 && u._a[Jr] === 0 && u._a[Co] === 0 && (u._nextDay = !0,
                u._a[It] = 0),
                u._d = (u._useUTC ? Ga : xk).apply(null, g),
                C = u._useUTC ? u._d.getUTCDay() : u._d.getDay(),
                u._tzm != null && u._d.setUTCMinutes(u._d.getUTCMinutes() - u._tzm),
                u._nextDay && (u._a[It] = 24),
                u._w && typeof u._w.d < "u" && u._w.d !== C && (v(u).weekdayMismatch = !0)
            }
        }
        function gN(u) {
            var d, h, g, _, C, k, Q, _e, Ae;
            d = u._w,
            d.GG != null || d.W != null || d.E != null ? (C = 1,
            k = 4,
            h = Is(d.GG, u._a[Kt], qa(ot(), 1, 4).year),
            g = Is(d.W, 1),
            _ = Is(d.E, 1),
            (_ < 1 || _ > 7) && (_e = !0)) : (C = u._locale._week.dow,
            k = u._locale._week.doy,
            Ae = qa(ot(), C, k),
            h = Is(d.gg, u._a[Kt], Ae.year),
            g = Is(d.w, Ae.week),
            d.d != null ? (_ = d.d,
            (_ < 0 || _ > 6) && (_e = !0)) : d.e != null ? (_ = d.e + C,
            (d.e < 0 || d.e > 6) && (_e = !0)) : _ = C),
            g < 1 || g > Kr(h, C, k) ? v(u)._overflowWeeks = !0 : _e != null ? v(u)._overflowWeekday = !0 : (Q = e_(h, g, _, C, k),
            u._a[Kt] = Q.year,
            u._dayOfYear = Q.dayOfYear)
        }
        t.ISO_8601 = function() {}
        ,
        t.RFC_2822 = function() {}
        ;
        function yp(u) {
            if (u._f === t.ISO_8601) {
                s_(u);
                return
            }
            if (u._f === t.RFC_2822) {
                a_(u);
                return
            }
            u._a = [],
            v(u).empty = !0;
            var d = "" + u._i, h, g, _, C, k, Q = d.length, _e = 0, Ae, an;
            for (_ = xt(u._f, u._locale).match(te) || [],
            an = _.length,
            h = 0; h < an; h++)
                C = _[h],
                g = (d.match(rk(C, u)) || [])[0],
                g && (k = d.substr(0, d.indexOf(g)),
                k.length > 0 && v(u).unusedInput.push(k),
                d = d.slice(d.indexOf(g) + g.length),
                _e += g.length),
                Oe[C] ? (g ? v(u).empty = !1 : v(u).unusedTokens.push(C),
                ok(C, g, u)) : u._strict && !g && v(u).unusedTokens.push(C);
            v(u).charsLeftOver = Q - _e,
            d.length > 0 && v(u).unusedInput.push(d),
            u._a[It] <= 12 && v(u).bigHour === !0 && u._a[It] > 0 && (v(u).bigHour = void 0),
            v(u).parsedDateParts = u._a.slice(0),
            v(u).meridiem = u._meridiem,
            u._a[It] = yN(u._locale, u._a[It], u._meridiem),
            Ae = v(u).era,
            Ae !== null && (u._a[Kt] = u._locale.erasConvertYear(Ae, u._a[Kt])),
            gp(u),
            pp(u)
        }
        function yN(u, d, h) {
            var g;
            return h == null ? d : u.meridiemHour != null ? u.meridiemHour(d, h) : (u.isPM != null && (g = u.isPM(h),
            g && d < 12 && (d += 12),
            !g && d === 12 && (d = 0)),
            d)
        }
        function vN(u) {
            var d, h, g, _, C, k, Q = !1, _e = u._f.length;
            if (_e === 0) {
                v(u).invalidFormat = !0,
                u._d = new Date(NaN);
                return
            }
            for (_ = 0; _ < _e; _++)
                C = 0,
                k = !1,
                d = M({}, u),
                u._useUTC != null && (d._useUTC = u._useUTC),
                d._f = u._f[_],
                yp(d),
                x(d) && (k = !0),
                C += v(d).charsLeftOver,
                C += v(d).unusedTokens.length * 10,
                v(d).score = C,
                Q ? C < g && (g = C,
                h = d) : (g == null || C < g || k) && (g = C,
                h = d,
                k && (Q = !0));
            p(u, h || d)
        }
        function _N(u) {
            if (!u._d) {
                var d = ip(u._i)
                  , h = d.day === void 0 ? d.date : d.day;
                u._a = f([d.year, d.month, h, d.hour, d.minute, d.second, d.millisecond], function(g) {
                    return g && parseInt(g, 10)
                }),
                gp(u)
            }
        }
        function wN(u) {
            var d = new S(pp(u_(u)));
            return d._nextDay && (d.add(1, "d"),
            d._nextDay = void 0),
            d
        }
        function u_(u) {
            var d = u._i
              , h = u._f;
            return u._locale = u._locale || ei(u._l),
            d === null || h === void 0 && d === "" ? D({
                nullInput: !0
            }) : (typeof d == "string" && (u._i = d = u._locale.preparse(d)),
            E(d) ? new S(pp(d)) : (c(d) ? u._d = d : r(h) ? vN(u) : h ? yp(u) : DN(u),
            x(u) || (u._d = null),
            u))
        }
        function DN(u) {
            var d = u._i;
            a(d) ? u._d = new Date(t.now()) : c(d) ? u._d = new Date(d.valueOf()) : typeof d == "string" ? pN(u) : r(d) ? (u._a = f(d.slice(0), function(h) {
                return parseInt(h, 10)
            }),
            gp(u)) : i(d) ? _N(u) : l(d) ? u._d = new Date(d) : t.createFromInputFallback(u)
        }
        function l_(u, d, h, g, _) {
            var C = {};
            return (d === !0 || d === !1) && (g = d,
            d = void 0),
            (h === !0 || h === !1) && (g = h,
            h = void 0),
            (i(u) && s(u) || r(u) && u.length === 0) && (u = void 0),
            C._isAMomentObject = !0,
            C._useUTC = C._isUTC = _,
            C._l = h,
            C._i = u,
            C._f = d,
            C._strict = g,
            wN(C)
        }
        function ot(u, d, h, g) {
            return l_(u, d, h, g, !1)
        }
        var xN = Z("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var u = ot.apply(null, arguments);
            return this.isValid() && u.isValid() ? u < this ? this : u : D()
        })
          , CN = Z("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var u = ot.apply(null, arguments);
            return this.isValid() && u.isValid() ? u > this ? this : u : D()
        });
        function c_(u, d) {
            var h, g;
            if (d.length === 1 && r(d[0]) && (d = d[0]),
            !d.length)
                return ot();
            for (h = d[0],
            g = 1; g < d.length; ++g)
                (!d[g].isValid() || d[g][u](h)) && (h = d[g]);
            return h
        }
        function MN() {
            var u = [].slice.call(arguments, 0);
            return c_("isBefore", u)
        }
        function bN() {
            var u = [].slice.call(arguments, 0);
            return c_("isAfter", u)
        }
        var IN = function() {
            return Date.now ? Date.now() : +new Date
        }
          , Xa = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
        function EN(u) {
            var d, h = !1, g, _ = Xa.length;
            for (d in u)
                if (o(u, d) && !(_t.call(Xa, d) !== -1 && (u[d] == null || !isNaN(u[d]))))
                    return !1;
            for (g = 0; g < _; ++g)
                if (u[Xa[g]]) {
                    if (h)
                        return !1;
                    parseFloat(u[Xa[g]]) !== Se(u[Xa[g]]) && (h = !0)
                }
            return !0
        }
        function SN() {
            return this._isValid
        }
        function TN() {
            return Qn(NaN)
        }
        function Jl(u) {
            var d = ip(u)
              , h = d.year || 0
              , g = d.quarter || 0
              , _ = d.month || 0
              , C = d.week || d.isoWeek || 0
              , k = d.day || 0
              , Q = d.hour || 0
              , _e = d.minute || 0
              , Ae = d.second || 0
              , an = d.millisecond || 0;
            this._isValid = EN(d),
            this._milliseconds = +an + Ae * 1e3 + _e * 6e4 + Q * 1e3 * 60 * 60,
            this._days = +k + C * 7,
            this._months = +_ + g * 3 + h * 12,
            this._data = {},
            this._locale = ei(),
            this._bubble()
        }
        function Kl(u) {
            return u instanceof Jl
        }
        function vp(u) {
            return u < 0 ? Math.round(-1 * u) * -1 : Math.round(u)
        }
        function kN(u, d, h) {
            var g = Math.min(u.length, d.length), _ = Math.abs(u.length - d.length), C = 0, k;
            for (k = 0; k < g; k++)
                (h && u[k] !== d[k] || !h && Se(u[k]) !== Se(d[k])) && C++;
            return C + _
        }
        function d_(u, d) {
            z(u, 0, 0, function() {
                var h = this.utcOffset()
                  , g = "+";
                return h < 0 && (h = -h,
                g = "-"),
                g + X(~~(h / 60), 2) + d + X(~~h % 60, 2)
            })
        }
        d_("Z", ":"),
        d_("ZZ", ""),
        J("Z", zl),
        J("ZZ", zl),
        Ye(["Z", "ZZ"], function(u, d, h) {
            h._useUTC = !0,
            h._tzm = _p(zl, u)
        });
        var NN = /([\+\-]|\d\d)/gi;
        function _p(u, d) {
            var h = (d || "").match(u), g, _, C;
            return h === null ? null : (g = h[h.length - 1] || [],
            _ = (g + "").match(NN) || ["-", 0, 0],
            C = +(_[1] * 60) + Se(_[2]),
            C === 0 ? 0 : _[0] === "+" ? C : -C)
        }
        function wp(u, d) {
            var h, g;
            return d._isUTC ? (h = d.clone(),
            g = (E(u) || c(u) ? u.valueOf() : ot(u).valueOf()) - h.valueOf(),
            h._d.setTime(h._d.valueOf() + g),
            t.updateOffset(h, !1),
            h) : ot(u).local()
        }
        function Dp(u) {
            return -Math.round(u._d.getTimezoneOffset())
        }
        t.updateOffset = function() {}
        ;
        function ON(u, d, h) {
            var g = this._offset || 0, _;
            if (!this.isValid())
                return u != null ? this : NaN;
            if (u != null) {
                if (typeof u == "string") {
                    if (u = _p(zl, u),
                    u === null)
                        return this
                } else
                    Math.abs(u) < 16 && !h && (u = u * 60);
                return !this._isUTC && d && (_ = Dp(this)),
                this._offset = u,
                this._isUTC = !0,
                _ != null && this.add(_, "m"),
                g !== u && (!d || this._changeInProgress ? m_(this, Qn(u - g, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                t.updateOffset(this, !0),
                this._changeInProgress = null)),
                this
            } else
                return this._isUTC ? g : Dp(this)
        }
        function AN(u, d) {
            return u != null ? (typeof u != "string" && (u = -u),
            this.utcOffset(u, d),
            this) : -this.utcOffset()
        }
        function PN(u) {
            return this.utcOffset(0, u)
        }
        function FN(u) {
            return this._isUTC && (this.utcOffset(0, u),
            this._isUTC = !1,
            u && this.subtract(Dp(this), "m")),
            this
        }
        function RN() {
            if (this._tzm != null)
                this.utcOffset(this._tzm, !1, !0);
            else if (typeof this._i == "string") {
                var u = _p(tk, this._i);
                u != null ? this.utcOffset(u) : this.utcOffset(0, !0)
            }
            return this
        }
        function LN(u) {
            return this.isValid() ? (u = u ? ot(u).utcOffset() : 0,
            (this.utcOffset() - u) % 60 === 0) : !1
        }
        function VN() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }
        function jN() {
            if (!a(this._isDSTShifted))
                return this._isDSTShifted;
            var u = {}, d;
            return M(u, this),
            u = u_(u),
            u._a ? (d = u._isUTC ? m(u._a) : ot(u._a),
            this._isDSTShifted = this.isValid() && kN(u._a, d.toArray()) > 0) : this._isDSTShifted = !1,
            this._isDSTShifted
        }
        function BN() {
            return this.isValid() ? !this._isUTC : !1
        }
        function HN() {
            return this.isValid() ? this._isUTC : !1
        }
        function f_() {
            return this.isValid() ? this._isUTC && this._offset === 0 : !1
        }
        var UN = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
          , $N = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function Qn(u, d) {
            var h = u, g = null, _, C, k;
            return Kl(u) ? h = {
                ms: u._milliseconds,
                d: u._days,
                M: u._months
            } : l(u) || !isNaN(+u) ? (h = {},
            d ? h[d] = +u : h.milliseconds = +u) : (g = UN.exec(u)) ? (_ = g[1] === "-" ? -1 : 1,
            h = {
                y: 0,
                d: Se(g[Cr]) * _,
                h: Se(g[It]) * _,
                m: Se(g[Zn]) * _,
                s: Se(g[Jr]) * _,
                ms: Se(vp(g[Co] * 1e3)) * _
            }) : (g = $N.exec(u)) ? (_ = g[1] === "-" ? -1 : 1,
            h = {
                y: Mo(g[2], _),
                M: Mo(g[3], _),
                w: Mo(g[4], _),
                d: Mo(g[5], _),
                h: Mo(g[6], _),
                m: Mo(g[7], _),
                s: Mo(g[8], _)
            }) : h == null ? h = {} : typeof h == "object" && ("from"in h || "to"in h) && (k = YN(ot(h.from), ot(h.to)),
            h = {},
            h.ms = k.milliseconds,
            h.M = k.months),
            C = new Jl(h),
            Kl(u) && o(u, "_locale") && (C._locale = u._locale),
            Kl(u) && o(u, "_isValid") && (C._isValid = u._isValid),
            C
        }
        Qn.fn = Jl.prototype,
        Qn.invalid = TN;
        function Mo(u, d) {
            var h = u && parseFloat(u.replace(",", "."));
            return (isNaN(h) ? 0 : h) * d
        }
        function h_(u, d) {
            var h = {};
            return h.months = d.month() - u.month() + (d.year() - u.year()) * 12,
            u.clone().add(h.months, "M").isAfter(d) && --h.months,
            h.milliseconds = +d - +u.clone().add(h.months, "M"),
            h
        }
        function YN(u, d) {
            var h;
            return u.isValid() && d.isValid() ? (d = wp(d, u),
            u.isBefore(d) ? h = h_(u, d) : (h = h_(d, u),
            h.milliseconds = -h.milliseconds,
            h.months = -h.months),
            h) : {
                milliseconds: 0,
                months: 0
            }
        }
        function p_(u, d) {
            return function(h, g) {
                var _, C;
                return g !== null && !isNaN(+g) && (we(d, "moment()." + d + "(period, number) is deprecated. Please use moment()." + d + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                C = h,
                h = g,
                g = C),
                _ = Qn(h, g),
                m_(this, _, u),
                this
            }
        }
        function m_(u, d, h, g) {
            var _ = d._milliseconds
              , C = vp(d._days)
              , k = vp(d._months);
            u.isValid() && (g = g ?? !0,
            k && X0(u, za(u, "Month") + k * h),
            C && q0(u, "Date", za(u, "Date") + C * h),
            _ && u._d.setTime(u._d.valueOf() + _ * h),
            g && t.updateOffset(u, C || k))
        }
        var WN = p_(1, "add")
          , zN = p_(-1, "subtract");
        function g_(u) {
            return typeof u == "string" || u instanceof String
        }
        function GN(u) {
            return E(u) || c(u) || g_(u) || l(u) || ZN(u) || qN(u) || u === null || u === void 0
        }
        function qN(u) {
            var d = i(u) && !s(u), h = !1, g = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], _, C, k = g.length;
            for (_ = 0; _ < k; _ += 1)
                C = g[_],
                h = h || o(u, C);
            return d && h
        }
        function ZN(u) {
            var d = r(u)
              , h = !1;
            return d && (h = u.filter(function(g) {
                return !l(g) && g_(u)
            }).length === 0),
            d && h
        }
        function QN(u) {
            var d = i(u) && !s(u), h = !1, g = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], _, C;
            for (_ = 0; _ < g.length; _ += 1)
                C = g[_],
                h = h || o(u, C);
            return d && h
        }
        function XN(u, d) {
            var h = u.diff(d, "days", !0);
            return h < -6 ? "sameElse" : h < -1 ? "lastWeek" : h < 0 ? "lastDay" : h < 1 ? "sameDay" : h < 2 ? "nextDay" : h < 7 ? "nextWeek" : "sameElse"
        }
        function JN(u, d) {
            arguments.length === 1 && (arguments[0] ? GN(arguments[0]) ? (u = arguments[0],
            d = void 0) : QN(arguments[0]) && (d = arguments[0],
            u = void 0) : (u = void 0,
            d = void 0));
            var h = u || ot()
              , g = wp(h, this).startOf("day")
              , _ = t.calendarFormat(this, g) || "sameElse"
              , C = d && (V(d[_]) ? d[_].call(this, h) : d[_]);
            return this.format(C || this.localeData().calendar(_, this, ot(h)))
        }
        function KN() {
            return new S(this)
        }
        function eO(u, d) {
            var h = E(u) ? u : ot(u);
            return this.isValid() && h.isValid() ? (d = Un(d) || "millisecond",
            d === "millisecond" ? this.valueOf() > h.valueOf() : h.valueOf() < this.clone().startOf(d).valueOf()) : !1
        }
        function tO(u, d) {
            var h = E(u) ? u : ot(u);
            return this.isValid() && h.isValid() ? (d = Un(d) || "millisecond",
            d === "millisecond" ? this.valueOf() < h.valueOf() : this.clone().endOf(d).valueOf() < h.valueOf()) : !1
        }
        function nO(u, d, h, g) {
            var _ = E(u) ? u : ot(u)
              , C = E(d) ? d : ot(d);
            return this.isValid() && _.isValid() && C.isValid() ? (g = g || "()",
            (g[0] === "(" ? this.isAfter(_, h) : !this.isBefore(_, h)) && (g[1] === ")" ? this.isBefore(C, h) : !this.isAfter(C, h))) : !1
        }
        function rO(u, d) {
            var h = E(u) ? u : ot(u), g;
            return this.isValid() && h.isValid() ? (d = Un(d) || "millisecond",
            d === "millisecond" ? this.valueOf() === h.valueOf() : (g = h.valueOf(),
            this.clone().startOf(d).valueOf() <= g && g <= this.clone().endOf(d).valueOf())) : !1
        }
        function iO(u, d) {
            return this.isSame(u, d) || this.isAfter(u, d)
        }
        function oO(u, d) {
            return this.isSame(u, d) || this.isBefore(u, d)
        }
        function sO(u, d, h) {
            var g, _, C;
            if (!this.isValid())
                return NaN;
            if (g = wp(u, this),
            !g.isValid())
                return NaN;
            switch (_ = (g.utcOffset() - this.utcOffset()) * 6e4,
            d = Un(d),
            d) {
            case "year":
                C = ec(this, g) / 12;
                break;
            case "month":
                C = ec(this, g);
                break;
            case "quarter":
                C = ec(this, g) / 3;
                break;
            case "second":
                C = (this - g) / 1e3;
                break;
            case "minute":
                C = (this - g) / 6e4;
                break;
            case "hour":
                C = (this - g) / 36e5;
                break;
            case "day":
                C = (this - g - _) / 864e5;
                break;
            case "week":
                C = (this - g - _) / 6048e5;
                break;
            default:
                C = this - g
            }
            return h ? C : $n(C)
        }
        function ec(u, d) {
            if (u.date() < d.date())
                return -ec(d, u);
            var h = (d.year() - u.year()) * 12 + (d.month() - u.month()), g = u.clone().add(h, "months"), _, C;
            return d - g < 0 ? (_ = u.clone().add(h - 1, "months"),
            C = (d - g) / (g - _)) : (_ = u.clone().add(h + 1, "months"),
            C = (d - g) / (_ - g)),
            -(h + C) || 0
        }
        t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
        t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        function aO() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }
        function uO(u) {
            if (!this.isValid())
                return null;
            var d = u !== !0
              , h = d ? this.clone().utc() : this;
            return h.year() < 0 || h.year() > 9999 ? Dt(h, d ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : V(Date.prototype.toISOString) ? d ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Dt(h, "Z")) : Dt(h, d ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }
        function lO() {
            if (!this.isValid())
                return "moment.invalid(/* " + this._i + " */)";
            var u = "moment", d = "", h, g, _, C;
            return this.isLocal() || (u = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone",
            d = "Z"),
            h = "[" + u + '("]',
            g = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            _ = "-MM-DD[T]HH:mm:ss.SSS",
            C = d + '[")]',
            this.format(h + g + _ + C)
        }
        function cO(u) {
            u || (u = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
            var d = Dt(this, u);
            return this.localeData().postformat(d)
        }
        function dO(u, d) {
            return this.isValid() && (E(u) && u.isValid() || ot(u).isValid()) ? Qn({
                to: this,
                from: u
            }).locale(this.locale()).humanize(!d) : this.localeData().invalidDate()
        }
        function fO(u) {
            return this.from(ot(), u)
        }
        function hO(u, d) {
            return this.isValid() && (E(u) && u.isValid() || ot(u).isValid()) ? Qn({
                from: this,
                to: u
            }).locale(this.locale()).humanize(!d) : this.localeData().invalidDate()
        }
        function pO(u) {
            return this.to(ot(), u)
        }
        function y_(u) {
            var d;
            return u === void 0 ? this._locale._abbr : (d = ei(u),
            d != null && (this._locale = d),
            this)
        }
        var v_ = Z("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(u) {
            return u === void 0 ? this.localeData() : this.locale(u)
        });
        function __() {
            return this._locale
        }
        var tc = 1e3
          , Es = 60 * tc
          , nc = 60 * Es
          , w_ = (365 * 400 + 97) * 24 * nc;
        function Ss(u, d) {
            return (u % d + d) % d
        }
        function D_(u, d, h) {
            return u < 100 && u >= 0 ? new Date(u + 400,d,h) - w_ : new Date(u,d,h).valueOf()
        }
        function x_(u, d, h) {
            return u < 100 && u >= 0 ? Date.UTC(u + 400, d, h) - w_ : Date.UTC(u, d, h)
        }
        function mO(u) {
            var d, h;
            if (u = Un(u),
            u === void 0 || u === "millisecond" || !this.isValid())
                return this;
            switch (h = this._isUTC ? x_ : D_,
            u) {
            case "year":
                d = h(this.year(), 0, 1);
                break;
            case "quarter":
                d = h(this.year(), this.month() - this.month() % 3, 1);
                break;
            case "month":
                d = h(this.year(), this.month(), 1);
                break;
            case "week":
                d = h(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                d = h(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                d = h(this.year(), this.month(), this.date());
                break;
            case "hour":
                d = this._d.valueOf(),
                d -= Ss(d + (this._isUTC ? 0 : this.utcOffset() * Es), nc);
                break;
            case "minute":
                d = this._d.valueOf(),
                d -= Ss(d, Es);
                break;
            case "second":
                d = this._d.valueOf(),
                d -= Ss(d, tc);
                break
            }
            return this._d.setTime(d),
            t.updateOffset(this, !0),
            this
        }
        function gO(u) {
            var d, h;
            if (u = Un(u),
            u === void 0 || u === "millisecond" || !this.isValid())
                return this;
            switch (h = this._isUTC ? x_ : D_,
            u) {
            case "year":
                d = h(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                d = h(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case "month":
                d = h(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                d = h(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                d = h(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                d = h(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                d = this._d.valueOf(),
                d += nc - Ss(d + (this._isUTC ? 0 : this.utcOffset() * Es), nc) - 1;
                break;
            case "minute":
                d = this._d.valueOf(),
                d += Es - Ss(d, Es) - 1;
                break;
            case "second":
                d = this._d.valueOf(),
                d += tc - Ss(d, tc) - 1;
                break
            }
            return this._d.setTime(d),
            t.updateOffset(this, !0),
            this
        }
        function yO() {
            return this._d.valueOf() - (this._offset || 0) * 6e4
        }
        function vO() {
            return Math.floor(this.valueOf() / 1e3)
        }
        function _O() {
            return new Date(this.valueOf())
        }
        function wO() {
            var u = this;
            return [u.year(), u.month(), u.date(), u.hour(), u.minute(), u.second(), u.millisecond()]
        }
        function DO() {
            var u = this;
            return {
                years: u.year(),
                months: u.month(),
                date: u.date(),
                hours: u.hours(),
                minutes: u.minutes(),
                seconds: u.seconds(),
                milliseconds: u.milliseconds()
            }
        }
        function xO() {
            return this.isValid() ? this.toISOString() : null
        }
        function CO() {
            return x(this)
        }
        function MO() {
            return p({}, v(this))
        }
        function bO() {
            return v(this).overflow
        }
        function IO() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }
        z("N", 0, 0, "eraAbbr"),
        z("NN", 0, 0, "eraAbbr"),
        z("NNN", 0, 0, "eraAbbr"),
        z("NNNN", 0, 0, "eraName"),
        z("NNNNN", 0, 0, "eraNarrow"),
        z("y", ["y", 1], "yo", "eraYear"),
        z("y", ["yy", 2], 0, "eraYear"),
        z("y", ["yyy", 3], 0, "eraYear"),
        z("y", ["yyyy", 4], 0, "eraYear"),
        J("N", xp),
        J("NN", xp),
        J("NNN", xp),
        J("NNNN", LO),
        J("NNNNN", VO),
        Ye(["N", "NN", "NNN", "NNNN", "NNNNN"], function(u, d, h, g) {
            var _ = h._locale.erasParse(u, g, h._strict);
            _ ? v(h).era = _ : v(h).invalidEra = u
        }),
        J("y", Cs),
        J("yy", Cs),
        J("yyy", Cs),
        J("yyyy", Cs),
        J("yo", jO),
        Ye(["y", "yy", "yyy", "yyyy"], Kt),
        Ye(["yo"], function(u, d, h, g) {
            var _;
            h._locale._eraYearOrdinalRegex && (_ = u.match(h._locale._eraYearOrdinalRegex)),
            h._locale.eraYearOrdinalParse ? d[Kt] = h._locale.eraYearOrdinalParse(u, _) : d[Kt] = parseInt(u, 10)
        });
        function EO(u, d) {
            var h, g, _, C = this._eras || ei("en")._eras;
            for (h = 0,
            g = C.length; h < g; ++h) {
                switch (typeof C[h].since) {
                case "string":
                    _ = t(C[h].since).startOf("day"),
                    C[h].since = _.valueOf();
                    break
                }
                switch (typeof C[h].until) {
                case "undefined":
                    C[h].until = 1 / 0;
                    break;
                case "string":
                    _ = t(C[h].until).startOf("day").valueOf(),
                    C[h].until = _.valueOf();
                    break
                }
            }
            return C
        }
        function SO(u, d, h) {
            var g, _, C = this.eras(), k, Q, _e;
            for (u = u.toUpperCase(),
            g = 0,
            _ = C.length; g < _; ++g)
                if (k = C[g].name.toUpperCase(),
                Q = C[g].abbr.toUpperCase(),
                _e = C[g].narrow.toUpperCase(),
                h)
                    switch (d) {
                    case "N":
                    case "NN":
                    case "NNN":
                        if (Q === u)
                            return C[g];
                        break;
                    case "NNNN":
                        if (k === u)
                            return C[g];
                        break;
                    case "NNNNN":
                        if (_e === u)
                            return C[g];
                        break
                    }
                else if ([k, Q, _e].indexOf(u) >= 0)
                    return C[g]
        }
        function TO(u, d) {
            var h = u.since <= u.until ? 1 : -1;
            return d === void 0 ? t(u.since).year() : t(u.since).year() + (d - u.offset) * h
        }
        function kO() {
            var u, d, h, g = this.localeData().eras();
            for (u = 0,
            d = g.length; u < d; ++u)
                if (h = this.clone().startOf("day").valueOf(),
                g[u].since <= h && h <= g[u].until || g[u].until <= h && h <= g[u].since)
                    return g[u].name;
            return ""
        }
        function NO() {
            var u, d, h, g = this.localeData().eras();
            for (u = 0,
            d = g.length; u < d; ++u)
                if (h = this.clone().startOf("day").valueOf(),
                g[u].since <= h && h <= g[u].until || g[u].until <= h && h <= g[u].since)
                    return g[u].narrow;
            return ""
        }
        function OO() {
            var u, d, h, g = this.localeData().eras();
            for (u = 0,
            d = g.length; u < d; ++u)
                if (h = this.clone().startOf("day").valueOf(),
                g[u].since <= h && h <= g[u].until || g[u].until <= h && h <= g[u].since)
                    return g[u].abbr;
            return ""
        }
        function AO() {
            var u, d, h, g, _ = this.localeData().eras();
            for (u = 0,
            d = _.length; u < d; ++u)
                if (h = _[u].since <= _[u].until ? 1 : -1,
                g = this.clone().startOf("day").valueOf(),
                _[u].since <= g && g <= _[u].until || _[u].until <= g && g <= _[u].since)
                    return (this.year() - t(_[u].since).year()) * h + _[u].offset;
            return this.year()
        }
        function PO(u) {
            return o(this, "_erasNameRegex") || Cp.call(this),
            u ? this._erasNameRegex : this._erasRegex
        }
        function FO(u) {
            return o(this, "_erasAbbrRegex") || Cp.call(this),
            u ? this._erasAbbrRegex : this._erasRegex
        }
        function RO(u) {
            return o(this, "_erasNarrowRegex") || Cp.call(this),
            u ? this._erasNarrowRegex : this._erasRegex
        }
        function xp(u, d) {
            return d.erasAbbrRegex(u)
        }
        function LO(u, d) {
            return d.erasNameRegex(u)
        }
        function VO(u, d) {
            return d.erasNarrowRegex(u)
        }
        function jO(u, d) {
            return d._eraYearOrdinalRegex || Cs
        }
        function Cp() {
            var u = [], d = [], h = [], g = [], _, C, k, Q, _e, Ae = this.eras();
            for (_ = 0,
            C = Ae.length; _ < C; ++_)
                k = Qr(Ae[_].name),
                Q = Qr(Ae[_].abbr),
                _e = Qr(Ae[_].narrow),
                d.push(k),
                u.push(Q),
                h.push(_e),
                g.push(k),
                g.push(Q),
                g.push(_e);
            this._erasRegex = new RegExp("^(" + g.join("|") + ")","i"),
            this._erasNameRegex = new RegExp("^(" + d.join("|") + ")","i"),
            this._erasAbbrRegex = new RegExp("^(" + u.join("|") + ")","i"),
            this._erasNarrowRegex = new RegExp("^(" + h.join("|") + ")","i")
        }
        z(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }),
        z(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        });
        function rc(u, d) {
            z(0, [u, u.length], 0, d)
        }
        rc("gggg", "weekYear"),
        rc("ggggg", "weekYear"),
        rc("GGGG", "isoWeekYear"),
        rc("GGGGG", "isoWeekYear"),
        J("G", Wl),
        J("g", Wl),
        J("GG", it, En),
        J("gg", it, En),
        J("GGGG", sp, op),
        J("gggg", sp, op),
        J("GGGGG", Yl, Ul),
        J("ggggg", Yl, Ul),
        Ya(["gggg", "ggggg", "GGGG", "GGGGG"], function(u, d, h, g) {
            d[g.substr(0, 2)] = Se(u)
        }),
        Ya(["gg", "GG"], function(u, d, h, g) {
            d[g] = t.parseTwoDigitYear(u)
        });
        function BO(u) {
            return C_.call(this, u, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
        }
        function HO(u) {
            return C_.call(this, u, this.isoWeek(), this.isoWeekday(), 1, 4)
        }
        function UO() {
            return Kr(this.year(), 1, 4)
        }
        function $O() {
            return Kr(this.isoWeekYear(), 1, 4)
        }
        function YO() {
            var u = this.localeData()._week;
            return Kr(this.year(), u.dow, u.doy)
        }
        function WO() {
            var u = this.localeData()._week;
            return Kr(this.weekYear(), u.dow, u.doy)
        }
        function C_(u, d, h, g, _) {
            var C;
            return u == null ? qa(this, g, _).year : (C = Kr(u, g, _),
            d > C && (d = C),
            zO.call(this, u, d, h, g, _))
        }
        function zO(u, d, h, g, _) {
            var C = e_(u, d, h, g, _)
              , k = Ga(C.year, 0, C.dayOfYear);
            return this.year(k.getUTCFullYear()),
            this.month(k.getUTCMonth()),
            this.date(k.getUTCDate()),
            this
        }
        z("Q", 0, "Qo", "quarter"),
        J("Q", $0),
        Ye("Q", function(u, d) {
            d[Xr] = (Se(u) - 1) * 3
        });
        function GO(u) {
            return u == null ? Math.ceil((this.month() + 1) / 3) : this.month((u - 1) * 3 + this.month() % 3)
        }
        z("D", ["DD", 2], "Do", "date"),
        J("D", it, Ms),
        J("DD", it, En),
        J("Do", function(u, d) {
            return u ? d._dayOfMonthOrdinalParse || d._ordinalParse : d._dayOfMonthOrdinalParseLenient
        }),
        Ye(["D", "DD"], Cr),
        Ye("Do", function(u, d) {
            d[Cr] = Se(u.match(it)[0])
        });
        var M_ = bs("Date", !0);
        z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        J("DDD", $l),
        J("DDDD", Y0),
        Ye(["DDD", "DDDD"], function(u, d, h) {
            h._dayOfYear = Se(u)
        });
        function qO(u) {
            var d = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return u == null ? d : this.add(u - d, "d")
        }
        z("m", ["mm", 2], 0, "minute"),
        J("m", it, ap),
        J("mm", it, En),
        Ye(["m", "mm"], Zn);
        var ZO = bs("Minutes", !1);
        z("s", ["ss", 2], 0, "second"),
        J("s", it, ap),
        J("ss", it, En),
        Ye(["s", "ss"], Jr);
        var QO = bs("Seconds", !1);
        z("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }),
        z(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }),
        z(0, ["SSS", 3], 0, "millisecond"),
        z(0, ["SSSS", 4], 0, function() {
            return this.millisecond() * 10
        }),
        z(0, ["SSSSS", 5], 0, function() {
            return this.millisecond() * 100
        }),
        z(0, ["SSSSSS", 6], 0, function() {
            return this.millisecond() * 1e3
        }),
        z(0, ["SSSSSSS", 7], 0, function() {
            return this.millisecond() * 1e4
        }),
        z(0, ["SSSSSSSS", 8], 0, function() {
            return this.millisecond() * 1e5
        }),
        z(0, ["SSSSSSSSS", 9], 0, function() {
            return this.millisecond() * 1e6
        }),
        J("S", $l, $0),
        J("SS", $l, En),
        J("SSS", $l, Y0);
        var Ti, b_;
        for (Ti = "SSSS"; Ti.length <= 9; Ti += "S")
            J(Ti, Cs);
        function XO(u, d) {
            d[Co] = Se(("0." + u) * 1e3)
        }
        for (Ti = "S"; Ti.length <= 9; Ti += "S")
            Ye(Ti, XO);
        b_ = bs("Milliseconds", !1),
        z("z", 0, 0, "zoneAbbr"),
        z("zz", 0, 0, "zoneName");
        function JO() {
            return this._isUTC ? "UTC" : ""
        }
        function KO() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }
        var P = S.prototype;
        P.add = WN,
        P.calendar = JN,
        P.clone = KN,
        P.diff = sO,
        P.endOf = gO,
        P.format = cO,
        P.from = dO,
        P.fromNow = fO,
        P.to = hO,
        P.toNow = pO,
        P.get = lk,
        P.invalidAt = bO,
        P.isAfter = eO,
        P.isBefore = tO,
        P.isBetween = nO,
        P.isSame = rO,
        P.isSameOrAfter = iO,
        P.isSameOrBefore = oO,
        P.isValid = CO,
        P.lang = v_,
        P.locale = y_,
        P.localeData = __,
        P.max = CN,
        P.min = xN,
        P.parsingFlags = MO,
        P.set = ck,
        P.startOf = mO,
        P.subtract = zN,
        P.toArray = wO,
        P.toObject = DO,
        P.toDate = _O,
        P.toISOString = uO,
        P.inspect = lO,
        typeof Symbol < "u" && Symbol.for != null && (P[Symbol.for("nodejs.util.inspect.custom")] = function() {
            return "Moment<" + this.format() + ">"
        }
        ),
        P.toJSON = xO,
        P.toString = aO,
        P.unix = vO,
        P.valueOf = yO,
        P.creationData = IO,
        P.eraName = kO,
        P.eraNarrow = NO,
        P.eraAbbr = OO,
        P.eraYear = AO,
        P.year = G0,
        P.isLeapYear = uk,
        P.weekYear = BO,
        P.isoWeekYear = HO,
        P.quarter = P.quarters = GO,
        P.month = J0,
        P.daysInMonth = _k,
        P.week = P.weeks = Ek,
        P.isoWeek = P.isoWeeks = Sk,
        P.weeksInYear = YO,
        P.weeksInWeekYear = WO,
        P.isoWeeksInYear = UO,
        P.isoWeeksInISOWeekYear = $O,
        P.date = M_,
        P.day = P.days = Hk,
        P.weekday = Uk,
        P.isoWeekday = $k,
        P.dayOfYear = qO,
        P.hour = P.hours = Qk,
        P.minute = P.minutes = ZO,
        P.second = P.seconds = QO,
        P.millisecond = P.milliseconds = b_,
        P.utcOffset = ON,
        P.utc = PN,
        P.local = FN,
        P.parseZone = RN,
        P.hasAlignedHourOffset = LN,
        P.isDST = VN,
        P.isLocal = BN,
        P.isUtcOffset = HN,
        P.isUtc = f_,
        P.isUTC = f_,
        P.zoneAbbr = JO,
        P.zoneName = KO,
        P.dates = Z("dates accessor is deprecated. Use date instead.", M_),
        P.months = Z("months accessor is deprecated. Use month instead", J0),
        P.years = Z("years accessor is deprecated. Use year instead", G0),
        P.zone = Z("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", AN),
        P.isDSTShifted = Z("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", jN);
        function eA(u) {
            return ot(u * 1e3)
        }
        function tA() {
            return ot.apply(null, arguments).parseZone()
        }
        function I_(u) {
            return u
        }
        var Le = b.prototype;
        Le.calendar = W,
        Le.longDateFormat = G,
        Le.invalidDate = Ie,
        Le.ordinal = $e,
        Le.preparse = I_,
        Le.postformat = I_,
        Le.relativeTime = sn,
        Le.pastFuture = Zr,
        Le.set = xe,
        Le.eras = EO,
        Le.erasParse = SO,
        Le.erasConvertYear = TO,
        Le.erasAbbrRegex = FO,
        Le.erasNameRegex = PO,
        Le.erasNarrowRegex = RO,
        Le.months = mk,
        Le.monthsShort = gk,
        Le.monthsParse = vk,
        Le.monthsRegex = Dk,
        Le.monthsShortRegex = wk,
        Le.week = Ck,
        Le.firstDayOfYear = Ik,
        Le.firstDayOfWeek = bk,
        Le.weekdays = Rk,
        Le.weekdaysMin = Vk,
        Le.weekdaysShort = Lk,
        Le.weekdaysParse = Bk,
        Le.weekdaysRegex = Yk,
        Le.weekdaysShortRegex = Wk,
        Le.weekdaysMinRegex = zk,
        Le.isPM = qk,
        Le.meridiem = Xk;
        function ic(u, d, h, g) {
            var _ = ei()
              , C = m().set(g, d);
            return _[h](C, u)
        }
        function E_(u, d, h) {
            if (l(u) && (d = u,
            u = void 0),
            u = u || "",
            d != null)
                return ic(u, d, h, "month");
            var g, _ = [];
            for (g = 0; g < 12; g++)
                _[g] = ic(u, g, h, "month");
            return _
        }
        function Mp(u, d, h, g) {
            typeof u == "boolean" ? (l(d) && (h = d,
            d = void 0),
            d = d || "") : (d = u,
            h = d,
            u = !1,
            l(d) && (h = d,
            d = void 0),
            d = d || "");
            var _ = ei(), C = u ? _._week.dow : 0, k, Q = [];
            if (h != null)
                return ic(d, (h + C) % 7, g, "day");
            for (k = 0; k < 7; k++)
                Q[k] = ic(d, (k + C) % 7, g, "day");
            return Q
        }
        function nA(u, d) {
            return E_(u, d, "months")
        }
        function rA(u, d) {
            return E_(u, d, "monthsShort")
        }
        function iA(u, d, h) {
            return Mp(u, d, h, "weekdays")
        }
        function oA(u, d, h) {
            return Mp(u, d, h, "weekdaysShort")
        }
        function sA(u, d, h) {
            return Mp(u, d, h, "weekdaysMin")
        }
        Si("en", {
            eras: [{
                since: "0001-01-01",
                until: 1 / 0,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD"
            }, {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC"
            }],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(u) {
                var d = u % 10
                  , h = Se(u % 100 / 10) === 1 ? "th" : d === 1 ? "st" : d === 2 ? "nd" : d === 3 ? "rd" : "th";
                return u + h
            }
        }),
        t.lang = Z("moment.lang is deprecated. Use moment.locale instead.", Si),
        t.langData = Z("moment.langData is deprecated. Use moment.localeData instead.", ei);
        var ti = Math.abs;
        function aA() {
            var u = this._data;
            return this._milliseconds = ti(this._milliseconds),
            this._days = ti(this._days),
            this._months = ti(this._months),
            u.milliseconds = ti(u.milliseconds),
            u.seconds = ti(u.seconds),
            u.minutes = ti(u.minutes),
            u.hours = ti(u.hours),
            u.months = ti(u.months),
            u.years = ti(u.years),
            this
        }
        function S_(u, d, h, g) {
            var _ = Qn(d, h);
            return u._milliseconds += g * _._milliseconds,
            u._days += g * _._days,
            u._months += g * _._months,
            u._bubble()
        }
        function uA(u, d) {
            return S_(this, u, d, 1)
        }
        function lA(u, d) {
            return S_(this, u, d, -1)
        }
        function T_(u) {
            return u < 0 ? Math.floor(u) : Math.ceil(u)
        }
        function cA() {
            var u = this._milliseconds, d = this._days, h = this._months, g = this._data, _, C, k, Q, _e;
            return u >= 0 && d >= 0 && h >= 0 || u <= 0 && d <= 0 && h <= 0 || (u += T_(bp(h) + d) * 864e5,
            d = 0,
            h = 0),
            g.milliseconds = u % 1e3,
            _ = $n(u / 1e3),
            g.seconds = _ % 60,
            C = $n(_ / 60),
            g.minutes = C % 60,
            k = $n(C / 60),
            g.hours = k % 24,
            d += $n(k / 24),
            _e = $n(k_(d)),
            h += _e,
            d -= T_(bp(_e)),
            Q = $n(h / 12),
            h %= 12,
            g.days = d,
            g.months = h,
            g.years = Q,
            this
        }
        function k_(u) {
            return u * 4800 / 146097
        }
        function bp(u) {
            return u * 146097 / 4800
        }
        function dA(u) {
            if (!this.isValid())
                return NaN;
            var d, h, g = this._milliseconds;
            if (u = Un(u),
            u === "month" || u === "quarter" || u === "year")
                switch (d = this._days + g / 864e5,
                h = this._months + k_(d),
                u) {
                case "month":
                    return h;
                case "quarter":
                    return h / 3;
                case "year":
                    return h / 12
                }
            else
                switch (d = this._days + Math.round(bp(this._months)),
                u) {
                case "week":
                    return d / 7 + g / 6048e5;
                case "day":
                    return d + g / 864e5;
                case "hour":
                    return d * 24 + g / 36e5;
                case "minute":
                    return d * 1440 + g / 6e4;
                case "second":
                    return d * 86400 + g / 1e3;
                case "millisecond":
                    return Math.floor(d * 864e5) + g;
                default:
                    throw new Error("Unknown unit " + u)
                }
        }
        function ni(u) {
            return function() {
                return this.as(u)
            }
        }
        var N_ = ni("ms")
          , fA = ni("s")
          , hA = ni("m")
          , pA = ni("h")
          , mA = ni("d")
          , gA = ni("w")
          , yA = ni("M")
          , vA = ni("Q")
          , _A = ni("y")
          , wA = N_;
        function DA() {
            return Qn(this)
        }
        function xA(u) {
            return u = Un(u),
            this.isValid() ? this[u + "s"]() : NaN
        }
        function bo(u) {
            return function() {
                return this.isValid() ? this._data[u] : NaN
            }
        }
        var CA = bo("milliseconds")
          , MA = bo("seconds")
          , bA = bo("minutes")
          , IA = bo("hours")
          , EA = bo("days")
          , SA = bo("months")
          , TA = bo("years");
        function kA() {
            return $n(this.days() / 7)
        }
        var ri = Math.round
          , Ts = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            w: null,
            M: 11
        };
        function NA(u, d, h, g, _) {
            return _.relativeTime(d || 1, !!h, u, g)
        }
        function OA(u, d, h, g) {
            var _ = Qn(u).abs()
              , C = ri(_.as("s"))
              , k = ri(_.as("m"))
              , Q = ri(_.as("h"))
              , _e = ri(_.as("d"))
              , Ae = ri(_.as("M"))
              , an = ri(_.as("w"))
              , ii = ri(_.as("y"))
              , ki = C <= h.ss && ["s", C] || C < h.s && ["ss", C] || k <= 1 && ["m"] || k < h.m && ["mm", k] || Q <= 1 && ["h"] || Q < h.h && ["hh", Q] || _e <= 1 && ["d"] || _e < h.d && ["dd", _e];
            return h.w != null && (ki = ki || an <= 1 && ["w"] || an < h.w && ["ww", an]),
            ki = ki || Ae <= 1 && ["M"] || Ae < h.M && ["MM", Ae] || ii <= 1 && ["y"] || ["yy", ii],
            ki[2] = d,
            ki[3] = +u > 0,
            ki[4] = g,
            NA.apply(null, ki)
        }
        function AA(u) {
            return u === void 0 ? ri : typeof u == "function" ? (ri = u,
            !0) : !1
        }
        function PA(u, d) {
            return Ts[u] === void 0 ? !1 : d === void 0 ? Ts[u] : (Ts[u] = d,
            u === "s" && (Ts.ss = d - 1),
            !0)
        }
        function FA(u, d) {
            if (!this.isValid())
                return this.localeData().invalidDate();
            var h = !1, g = Ts, _, C;
            return typeof u == "object" && (d = u,
            u = !1),
            typeof u == "boolean" && (h = u),
            typeof d == "object" && (g = Object.assign({}, Ts, d),
            d.s != null && d.ss == null && (g.ss = d.s - 1)),
            _ = this.localeData(),
            C = OA(this, !h, g, _),
            h && (C = _.pastFuture(+this, C)),
            _.postformat(C)
        }
        var Ip = Math.abs;
        function ks(u) {
            return (u > 0) - (u < 0) || +u
        }
        function oc() {
            if (!this.isValid())
                return this.localeData().invalidDate();
            var u = Ip(this._milliseconds) / 1e3, d = Ip(this._days), h = Ip(this._months), g, _, C, k, Q = this.asSeconds(), _e, Ae, an, ii;
            return Q ? (g = $n(u / 60),
            _ = $n(g / 60),
            u %= 60,
            g %= 60,
            C = $n(h / 12),
            h %= 12,
            k = u ? u.toFixed(3).replace(/\.?0+$/, "") : "",
            _e = Q < 0 ? "-" : "",
            Ae = ks(this._months) !== ks(Q) ? "-" : "",
            an = ks(this._days) !== ks(Q) ? "-" : "",
            ii = ks(this._milliseconds) !== ks(Q) ? "-" : "",
            _e + "P" + (C ? Ae + C + "Y" : "") + (h ? Ae + h + "M" : "") + (d ? an + d + "D" : "") + (_ || g || u ? "T" : "") + (_ ? ii + _ + "H" : "") + (g ? ii + g + "M" : "") + (u ? ii + k + "S" : "")) : "P0D"
        }
        var Pe = Jl.prototype;
        Pe.isValid = SN,
        Pe.abs = aA,
        Pe.add = uA,
        Pe.subtract = lA,
        Pe.as = dA,
        Pe.asMilliseconds = N_,
        Pe.asSeconds = fA,
        Pe.asMinutes = hA,
        Pe.asHours = pA,
        Pe.asDays = mA,
        Pe.asWeeks = gA,
        Pe.asMonths = yA,
        Pe.asQuarters = vA,
        Pe.asYears = _A,
        Pe.valueOf = wA,
        Pe._bubble = cA,
        Pe.clone = DA,
        Pe.get = xA,
        Pe.milliseconds = CA,
        Pe.seconds = MA,
        Pe.minutes = bA,
        Pe.hours = IA,
        Pe.days = EA,
        Pe.weeks = kA,
        Pe.months = SA,
        Pe.years = TA,
        Pe.humanize = FA,
        Pe.toISOString = oc,
        Pe.toString = oc,
        Pe.toJSON = oc,
        Pe.locale = y_,
        Pe.localeData = __,
        Pe.toIsoString = Z("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", oc),
        Pe.lang = v_,
        z("X", 0, 0, "unix"),
        z("x", 0, 0, "valueOf"),
        J("x", Wl),
        J("X", nk),
        Ye("X", function(u, d, h) {
            h._d = new Date(parseFloat(u) * 1e3)
        }),
        Ye("x", function(u, d, h) {
            h._d = new Date(Se(u))
        });
        return t.version = "2.30.1",
        n(ot),
        t.fn = P,
        t.min = MN,
        t.max = bN,
        t.now = IN,
        t.utc = m,
        t.unix = eA,
        t.months = nA,
        t.isDate = c,
        t.locale = Si,
        t.invalid = D,
        t.duration = Qn,
        t.isMoment = E,
        t.weekdays = iA,
        t.parseZone = tA,
        t.localeData = ei,
        t.isDuration = Kl,
        t.monthsShort = rA,
        t.weekdaysMin = sA,
        t.defineLocale = hp,
        t.updateLocale = tN,
        t.locales = nN,
        t.weekdaysShort = oA,
        t.normalizeUnits = Un,
        t.relativeTimeRounding = AA,
        t.relativeTimeThreshold = PA,
        t.calendarFormat = XN,
        t.prototype = P,
        t.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM"
        },
        t
    })
}
);
var R0 = Tp( (F0, kT) => {
    (function(e, t) {
        typeof F0 == "object" && typeof kT < "u" && typeof uc == "function" ? t(np()) : typeof define == "function" && define.amd ? define(["../moment"], t) : t(e.moment)
    }
    )(F0, function(e) {
        "use strict";
        var t = {
            1: "\u06F1",
            2: "\u06F2",
            3: "\u06F3",
            4: "\u06F4",
            5: "\u06F5",
            6: "\u06F6",
            7: "\u06F7",
            8: "\u06F8",
            9: "\u06F9",
            0: "\u06F0"
        }
          , n = {
            "\u06F1": "1",
            "\u06F2": "2",
            "\u06F3": "3",
            "\u06F4": "4",
            "\u06F5": "5",
            "\u06F6": "6",
            "\u06F7": "7",
            "\u06F8": "8",
            "\u06F9": "9",
            "\u06F0": "0"
        }
          , r = e.defineLocale("fa", {
            months: "\u0698\u0627\u0646\u0648\u06CC\u0647_\u0641\u0648\u0631\u06CC\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06CC\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06CC\u0647_\u0627\u0648\u062A_\u0633\u067E\u062A\u0627\u0645\u0628\u0631_\u0627\u06A9\u062A\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062F\u0633\u0627\u0645\u0628\u0631".split("_"),
            monthsShort: "\u0698\u0627\u0646\u0648\u06CC\u0647_\u0641\u0648\u0631\u06CC\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06CC\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06CC\u0647_\u0627\u0648\u062A_\u0633\u067E\u062A\u0627\u0645\u0628\u0631_\u0627\u06A9\u062A\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062F\u0633\u0627\u0645\u0628\u0631".split("_"),
            weekdays: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
            weekdaysShort: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
            weekdaysMin: "\u06CC_\u062F_\u0633_\u0686_\u067E_\u062C_\u0634".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function(i) {
                return /بعد از ظهر/.test(i)
            },
            meridiem: function(i, o, s) {
                return i < 12 ? "\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631" : "\u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631"
            },
            calendar: {
                sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062A] LT",
                nextDay: "[\u0641\u0631\u062F\u0627 \u0633\u0627\u0639\u062A] LT",
                nextWeek: "dddd [\u0633\u0627\u0639\u062A] LT",
                lastDay: "[\u062F\u06CC\u0631\u0648\u0632 \u0633\u0627\u0639\u062A] LT",
                lastWeek: "dddd [\u067E\u06CC\u0634] [\u0633\u0627\u0639\u062A] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "\u062F\u0631 %s",
                past: "%s \u067E\u06CC\u0634",
                s: "\u0686\u0646\u062F \u062B\u0627\u0646\u06CC\u0647",
                ss: "%d \u062B\u0627\u0646\u06CC\u0647",
                m: "\u06CC\u06A9 \u062F\u0642\u06CC\u0642\u0647",
                mm: "%d \u062F\u0642\u06CC\u0642\u0647",
                h: "\u06CC\u06A9 \u0633\u0627\u0639\u062A",
                hh: "%d \u0633\u0627\u0639\u062A",
                d: "\u06CC\u06A9 \u0631\u0648\u0632",
                dd: "%d \u0631\u0648\u0632",
                M: "\u06CC\u06A9 \u0645\u0627\u0647",
                MM: "%d \u0645\u0627\u0647",
                y: "\u06CC\u06A9 \u0633\u0627\u0644",
                yy: "%d \u0633\u0627\u0644"
            },
            preparse: function(i) {
                return i.replace(/[۰-۹]/g, function(o) {
                    return n[o]
                }).replace(/،/g, ",")
            },
            postformat: function(i) {
                return i.replace(/\d/g, function(o) {
                    return t[o]
                }).replace(/,/g, "\u060C")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%d\u0645",
            week: {
                dow: 6,
                doy: 12
            }
        });
        return r
    })
}
);
var QT = Tp( (B_e, ZT) => {
    ZT.exports = U;
    var ye = np();
    R0();
    var V0 = /(\[[^\[]*\])|(\\)?j(Mo|MM?M?M?|Do|DDDo|DD?D?D?|w[o|w]?|YYYYY|YYYY|YY|gg(ggg?)?|)|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g
      , OT = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g
      , AT = /\d\d?/
      , PT = /\d{1,3}/
      , FT = /\d{3}/
      , RT = /\d{1,4}/
      , LT = /[+\-]?\d{1,6}/
      , VT = /[0-9]*["a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i
      , q5 = /Z|[\+\-]\d\d:?\d\d/i
      , Z5 = /T/i
      , Q5 = /[\+\-]?\d+(\.\d{1,3})?/
      , X5 = {
        jm: "jmonth",
        jmonths: "jmonth",
        jy: "jyear",
        jyears: "jyear"
    }
      , L0 = {}
      , jT = "DDD w M D".split(" ")
      , BT = "M D w".split(" ")
      , jl = {
        Jalali: 1,
        Gregorian: 2
    }
      , qr = {
        jM: function() {
            return this.jMonth() + 1
        },
        jMMM: function(e) {
            return this.localeData().jMonthsShort(this, e)
        },
        jMMMM: function(e) {
            return this.localeData().jMonths(this, e)
        },
        jD: function() {
            return this.jDate()
        },
        jDDD: function() {
            return this.jDayOfYear()
        },
        jw: function() {
            return this.jWeek()
        },
        jYY: function() {
            return Ei(this.jYear() % 100, 2)
        },
        jYYYY: function() {
            return Ei(this.jYear(), 4)
        },
        jYYYYY: function() {
            return Ei(this.jYear(), 5)
        },
        jgg: function() {
            return Ei(this.jWeekYear() % 100, 2)
        },
        jgggg: function() {
            return this.jWeekYear()
        },
        jggggg: function() {
            return Ei(this.jWeekYear(), 5)
        }
    };
    function HT(e, t) {
        return function(n) {
            return Ei(e.call(this, n), t)
        }
    }
    function J5(e, t) {
        return function(n) {
            return this.localeData().ordinal(e.call(this, n), t)
        }
    }
    (function() {
        for (var e; jT.length; )
            e = jT.pop(),
            qr["j" + e + "o"] = J5(qr["j" + e], e);
        for (; BT.length; )
            e = BT.pop(),
            qr["j" + e + e] = HT(qr["j" + e], 2);
        qr.jDDDD = HT(qr.jDDD, 3)
    }
    )();
    function j0(e, t) {
        var n;
        for (n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }
    function Ei(e, t) {
        for (var n = e + ""; n.length < t; )
            n = "0" + n;
        return n
    }
    function K5(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }
    function UT(e) {
        for (var t = 0; t < e.length; t++)
            (!t || e[t - 1] !== "j" && e[t - 1] !== e[t]) && (e[t] === "Y" || e[t] === "M" || e[t] === "D" || e[t] === "g") && (e = e.slice(0, t) + "j" + e.slice(t));
        return e
    }
    function e6(e) {
        switch (e) {
        case "week":
            return "jWeek";
        case "year":
            return "jYear";
        case "month":
            return "jMonth";
        case "months":
            return "jMonths";
        case "monthName":
            return "jMonthsShort";
        case "monthsShort":
            return "jMonthsShort"
        }
        return e
    }
    function xs(e, t) {
        if (xr(t) && (e = e6(e)),
        e) {
            var n = e.toLowerCase();
            n.startsWith("j") && (e = X5[n] || n),
            e === "jday" ? e = "day" : e === "jd" && (e = "d")
        }
        return e
    }
    function B0(e, t, n, r) {
        var i = e._d;
        e._isUTC ? e._d = new Date(Date.UTC(t, n, r, i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds())) : e._d = new Date(t,n,r,i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds())
    }
    function $T(e) {
        function t() {}
        return t.prototype = e,
        new t
    }
    function t6(e) {
        return Object.getPrototypeOf ? Object.getPrototypeOf(e) : "".__proto__ ? e.__proto__ : e.constructor.prototype
    }
    j0(t6(ye.localeData()), {
        _jMonths: ["Farvardin", "Ordibehesht", "Khordaad", "Tir", "Mordaad", "Shahrivar", "Mehr", "Aabaan", "Aazar", "Dey", "Bahman", "Esfand"],
        jMonths: function(e) {
            return e ? this._jMonths[e.jMonth()] : this._jMonths
        },
        _jMonthsShort: ["Far", "Ord", "Kho", "Tir", "Amo", "Sha", "Meh", "Aab", "Aaz", "Dey", "Bah", "Esf"],
        jMonthsShort: function(e) {
            return e ? this._jMonthsShort[e.jMonth()] : this._jMonthsShort
        },
        jMonthsParse: function(e) {
            var t, n, r;
            for (this._jMonthsParse || (this._jMonthsParse = []),
            t = 0; t < 12; t += 1)
                if (this._jMonthsParse[t] || (n = U([2e3, (2 + t) % 12, 25]),
                r = "^" + this.jMonths(n, "") + "|^" + this.jMonthsShort(n, ""),
                this._jMonthsParse[t] = new RegExp(r.replace(".", ""),"i")),
                this._jMonthsParse[t].test(e))
                    return t
        }
    });
    function n6(e) {
        var t = e.match(V0), n = t.length, r;
        for (r = 0; r < n; r += 1)
            qr[t[r]] && (t[r] = qr[t[r]]);
        return function(i) {
            var o = "";
            for (r = 0; r < n; r += 1)
                o += t[r]instanceof Function ? "[" + t[r].call(i, e) + "]" : t[r];
            return o
        }
    }
    function YT(e, t) {
        switch (e) {
        case "jDDDD":
            return FT;
        case "jYYYY":
            return RT;
        case "jYYYYY":
            return LT;
        case "jDDD":
            return PT;
        case "jMMM":
        case "jMMMM":
            return VT;
        case "jMM":
        case "jDD":
        case "jYY":
        case "jM":
        case "jD":
            return AT;
        case "DDDD":
            return FT;
        case "YYYY":
            return RT;
        case "YYYYY":
            return LT;
        case "S":
        case "SS":
        case "SSS":
        case "DDD":
            return PT;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
            return VT;
        case "a":
        case "A":
            return ye.localeData(t._l)._meridiemParse;
        case "X":
            return Q5;
        case "Z":
        case "ZZ":
            return q5;
        case "T":
            return Z5;
        case "MM":
        case "DD":
        case "YY":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
            return AT;
        default:
            return new RegExp(e.replace("\\", ""))
        }
    }
    function Xt(e) {
        return e == null
    }
    function r6(e, t, n) {
        var r, i = n._a;
        switch (e) {
        case "jM":
        case "jMM":
            i[1] = Xt(t) ? 0 : ~~t - 1;
            break;
        case "jMMM":
        case "jMMMM":
            r = ye.localeData(n._l).jMonthsParse(t),
            Xt(r) ? n._isValid = !1 : i[1] = r;
            break;
        case "jD":
        case "jDD":
        case "jDDD":
        case "jDDDD":
            Xt(t) || (i[2] = ~~t);
            break;
        case "jYY":
            i[0] = ~~t + (~~t > 47 ? 1300 : 1400);
            break;
        case "jYYYY":
        case "jYYYYY":
            i[0] = ~~t
        }
        Xt(t) && (n._isValid = !1)
    }
    function i6(e) {
        var t, n, r = e._a[0], i = e._a[1], o = e._a[2];
        if (!(Xt(r) && Xt(i) && Xt(o)))
            return r = Xt(r) ? 0 : r,
            i = Xt(i) ? 0 : i,
            o = Xt(o) ? 1 : o,
            (o < 1 || o > U.jDaysInMonth(r, i) || i < 0 || i > 11) && (e._isValid = !1),
            t = Hl(r, i, o),
            n = rp(t.gy, t.gm, t.gd),
            e._jDiff = 0,
            ~~n.jy !== r && (e._jDiff += 1),
            ~~n.jm !== i && (e._jDiff += 1),
            ~~n.jd !== o && (e._jDiff += 1),
            [t.gy, t.gm, t.gd]
    }
    function o6(e) {
        var t = e._f.match(V0), n = e._i + "", r = t.length, i, o, s;
        for (e._a = [],
        i = 0; i < r; i += 1)
            o = t[i],
            s = (YT(o, e).exec(n) || [])[0],
            s && (n = n.slice(n.indexOf(s) + s.length)),
            qr[o] && r6(o, s, e);
        return n && (e._il = n),
        i6(e)
    }
    function s6(e, t) {
        var n = e._f.length, r, i, o, s, a, l;
        if (n === 0)
            return Bl(new Date(NaN));
        for (r = 0; r < n; r += 1)
            i = e._f[r],
            a = 0,
            o = Bl(e._i, i, e._l, e._strict, t),
            o.isValid() && (a += o._jDiff,
            o._il && (a += o._il.length),
            (Xt(l) || a < l) && (l = a,
            s = o));
        return s
    }
    function a6(e) {
        var t = e._i + "", n = "", r = "", i = e._f.match(V0), o = i.length, s, a, l;
        for (s = 0; s < o; s += 1)
            a = i[s],
            l = (YT(a, e).exec(t) || [])[0],
            l && (t = t.slice(t.indexOf(l) + l.length)),
            qr[a]instanceof Function || (r += a,
            l && (n += l));
        e._i = n,
        e._f = r
    }
    function WT(e, t, n) {
        var r = n - t, i = n - e.day(), o;
        return i > r && (i -= 7),
        i < r - 7 && (i += 7),
        o = U(e).add(i, "d"),
        {
            week: Math.ceil(o.jDayOfYear() / 7),
            year: o.jYear()
        }
    }
    function xr(e) {
        return e && e.calSystem === jl.Jalali || ye.justUseJalali && e.calSystem !== jl.Gregorian
    }
    function u6(e, t, n) {
        return ye.justUseJalali || t && t.calSystem === jl.Jalali
    }
    function Bl(e, t, n, r, i) {
        typeof n == "boolean" && (i = i || r,
        r = n,
        n = void 0),
        ye.ISO_8601 === t && (t = "YYYY-MM-DDTHH:mm:ss.SSSZ");
        let o = u6(t, this, e);
        e && typeof e == "string" && !t && o && !ye.useGregorianParser && (e = e.replace(/\//g, "-"),
        /\d{4}\-\d{2}\-\d{2}/.test(e) ? t = "jYYYY-jMM-jDD" : /\d{4}\-\d{2}\-\d{1}/.test(e) ? t = "jYYYY-jMM-jD" : /\d{4}\-\d{1}\-\d{1}/.test(e) ? t = "jYYYY-jM-jD" : /\d{4}\-\d{1}\-\d{2}/.test(e) ? t = "jYYYY-jM-jDD" : /\d{4}\-W\d{2}\-\d{2}/.test(e) ? t = "jYYYY-jW-jDD" : /\d{4}\-\d{3}/.test(e) ? t = "jYYYY-jDDD" : /\d{8}/.test(e) ? t = "jYYYYjMMjDD" : /\d{4}W\d{2}\d{1}/.test(e) ? t = "jYYYYjWWjD" : /\d{4}W\d{2}/.test(e) ? t = "jYYYYjWW" : /\d{4}\d{3}/.test(e) && (t = "jYYYYjDDD")),
        t && o && (t = UT(t)),
        t && typeof t == "string" && (t = zT(t, ye));
        var s = {
            _i: e,
            _f: t,
            _l: n,
            _strict: r,
            _isUTC: i
        }, a, l, c, f = e, p = t;
        if (t) {
            if (K5(t))
                return s6(s, i);
            a = o6(s),
            a6(s),
            a && (t = "YYYY-MM-DD-" + s._f,
            e = Ei(a[0], 4) + "-" + Ei(a[1] + 1, 2) + "-" + Ei(a[2], 2) + "-" + s._i)
        }
        return i ? l = ye.utc(e, t, n, r) : l = ye(e, t, n, r),
        (s._isValid === !1 || e && e._isAMomentObject && !e._isValid) && (l._isValid = !1),
        l._jDiff = s._jDiff || 0,
        c = $T(U.fn),
        j0(c, l),
        r && c.isValid() && (c._isValid = c.format(p) === f),
        e && e.calSystem && (c.calSystem = e.calSystem),
        c
    }
    function U(e, t, n, r) {
        return Bl(e, t, n, r, !1)
    }
    j0(U, ye);
    U.fn = $T(ye.fn);
    U.utc = function(e, t, n, r) {
        return Bl(e, t, n, r, !0)
    }
    ;
    U.unix = function(e) {
        return Bl(e * 1e3)
    }
    ;
    function zT(e, t) {
        for (var n = 5, r = function(i) {
            return t.localeData().longDateFormat(i) || i
        }; n > 0 && OT.test(e); )
            n -= 1,
            e = e.replace(OT, r);
        return e
    }
    U.fn.format = function(e) {
        e = e || U.defaultFormat,
        e && (xr(this) && (e = UT(e)),
        e = zT(e, this),
        L0[e] || (L0[e] = n6(e)),
        e = L0[e](this));
        var t = ye.fn.format.call(this, e);
        return t
    }
    ;
    U.fn.year = function(e) {
        return xr(this) ? U.fn.jYear.call(this, e) : ye.fn.year.call(this, e)
    }
    ;
    U.fn.jYear = function(e) {
        var t, n, r;
        return typeof e == "number" ? (n = Ha(this),
        t = Math.min(n.jd, U.jDaysInMonth(e, n.jm)),
        r = Hl(e, n.jm, t),
        B0(this, r.gy, r.gm, r.gd),
        ye.updateOffset(this),
        this) : Ha(this).jy
    }
    ;
    U.fn.month = function(e) {
        return xr(this) ? U.fn.jMonth.call(this, e) : ye.fn.month.call(this, e)
    }
    ;
    U.fn.jMonth = function(e) {
        var t, n, r;
        return Xt(e) ? Ha(this).jm : typeof e == "string" && (e = this.localeData().jMonthsParse(e),
        typeof e != "number") ? this : (n = Ha(this),
        t = Math.min(n.jd, U.jDaysInMonth(n.jy, e)),
        this.jYear(n.jy + tt(e, 12)),
        e = Hn(e, 12),
        e < 0 && (e += 12,
        this.jYear(this.jYear() - 1)),
        r = Hl(this.jYear(), e, t),
        B0(this, r.gy, r.gm, r.gd),
        ye.updateOffset(this),
        this)
    }
    ;
    U.fn.date = function(e) {
        return xr(this) ? U.fn.jDate.call(this, e) : ye.fn.date.call(this, e)
    }
    ;
    function Ha(e) {
        var t = e._d;
        return e._isUTC ? rp(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()) : rp(t.getFullYear(), t.getMonth(), t.getDate())
    }
    U.fn.jDate = function(e) {
        var t, n;
        return typeof e == "number" ? (t = Ha(this),
        n = Hl(t.jy, t.jm, e),
        B0(this, n.gy, n.gm, n.gd),
        ye.updateOffset(this),
        this) : Ha(this).jd
    }
    ;
    U.fn.jDay = function(e) {
        return typeof e == "number" ? ye.fn.day.call(this, e - 1) : (ye.fn.day.call(this) + 1) % 7
    }
    ;
    U.fn.diff = function(e, t, n) {
        if (!xr(this))
            return ye.fn.diff.call(this, e, t, n);
        var r;
        switch (t) {
        case "year":
            r = i(this, e) / 12;
            break;
        case "month":
            r = i(this, e);
            break;
        case "quarter":
            r = i(this, e) / 3;
            break;
        default:
            r = ye.fn.diff.call(this, e, t, n)
        }
        return n ? r : r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
        function i(o, s) {
            if (o.date() < s.date())
                return -i(s, o);
            var a = (s.jYear() - o.jYear()) * 12 + (s.jMonth() - o.jMonth()), l = o.clone().add(a, "months"), c, f;
            return s - l < 0 ? (c = o.clone().add(a - 1, "months"),
            f = (s - l) / (l - c)) : (c = o.clone().add(a + 1, "months"),
            f = (s - l) / (c - l)),
            -(a + f) || 0
        }
    }
    ;
    U.fn.dayOfYear = function(e) {
        return xr(this) ? U.fn.jDayOfYear.call(this, e) : ye.fn.dayOfYear.call(this, e)
    }
    ;
    U.fn.jDayOfYear = function(e) {
        var t = Math.round((U(this).startOf("day") - U(this).startOf("jYear")) / 864e5) + 1;
        return Xt(e) ? t : this.add(e - t, "d")
    }
    ;
    U.fn.week = function(e) {
        return xr(this) ? U.fn.jWeek.call(this, e) : ye.fn.week.call(this, e)
    }
    ;
    U.fn.jWeek = function(e) {
        var t = WT(this, 6, 12).week;
        return Xt(e) ? t : this.add((e - t) * 7, "d")
    }
    ;
    U.fn.weekYear = function(e) {
        return xr(this) ? U.fn.jWeekYear.call(this, e) : ye.fn.weekYear.call(this, e)
    }
    ;
    U.fn.jWeekYear = function(e) {
        var t = WT(this, 6, 12).year;
        return Xt(e) ? t : this.add(e - t, "jyear")
    }
    ;
    U.fn.add = function(e, t) {
        var n;
        return !Xt(t) && !isNaN(+t) && (n = e,
        e = t,
        t = n),
        t = xs(t, this),
        (t === "jweek" || t === "isoweek") && (t = "week"),
        t === "jyear" ? this.jYear(this.jYear() + e) : t === "jmonth" ? this.jMonth(this.jMonth() + e) : ye.fn.add.call(this, e, t),
        this
    }
    ;
    U.fn.subtract = function(e, t) {
        var n;
        return !Xt(t) && !isNaN(+t) && (n = e,
        e = t,
        t = n),
        t = xs(t, this),
        t === "jyear" ? this.jYear(this.jYear() - e) : t === "jmonth" ? this.jMonth(this.jMonth() - e) : ye.fn.subtract.call(this, e, t),
        this
    }
    ;
    U.fn.startOf = function(e) {
        var t = xs(e, this);
        return t === "jweek" ? this.startOf("day").subtract(this.jDay(), "day") : (t === "jyear" && (this.jMonth(0),
        t = "jmonth"),
        t === "jmonth" && (this.jDate(1),
        t = "day"),
        t === "day" ? (this.hours(0),
        this.minutes(0),
        this.seconds(0),
        this.milliseconds(0),
        this) : ye.fn.startOf.call(this, e))
    }
    ;
    U.fn.endOf = function(e) {
        return e = xs(e, this),
        e === void 0 || e === "milisecond" ? this : this.startOf(e).add(1, e).subtract(1, "ms")
    }
    ;
    U.fn.isSame = function(e, t) {
        return t = xs(t, this),
        t === "jyear" || t === "jmonth" ? ye.fn.isSame.call(this.clone().startOf(t), e.clone().startOf(t)) : ye.fn.isSame.call(this, e, t)
    }
    ;
    U.fn.isBefore = function(e, t) {
        return t = xs(t, this),
        t === "jyear" || t === "jmonth" ? ye.fn.isBefore.call(this.clone().startOf(t), e.clone().startOf(t)) : ye.fn.isBefore.call(this, e, t)
    }
    ;
    U.fn.isAfter = function(e, t) {
        return t = xs(t, this),
        t === "jyear" || t === "jmonth" ? ye.fn.isAfter.call(this.clone().startOf(t), e.clone().startOf(t)) : ye.fn.isAfter.call(this, e, t)
    }
    ;
    U.fn.clone = function() {
        return U(this)
    }
    ;
    U.fn.doAsJalali = function() {
        return this.calSystem = jl.Jalali,
        this
    }
    ;
    U.fn.doAsGregorian = function() {
        return this.calSystem = jl.Gregorian,
        this
    }
    ;
    U.fn.jYears = U.fn.jYear;
    U.fn.jMonths = U.fn.jMonth;
    U.fn.jDates = U.fn.jDate;
    U.fn.jWeeks = U.fn.jWeek;
    U.fn.daysInMonth = function() {
        return xr(this) ? this.jDaysInMonth() : ye.fn.daysInMonth.call(this)
    }
    ;
    U.fn.jDaysInMonth = function() {
        var e = this.jMonth()
          , t = this.jYear();
        return e < 6 ? 31 : e < 11 || U.jIsLeapYear(t) ? 30 : 29
    }
    ;
    U.fn.isLeapYear = function() {
        return xr(this) ? this.jIsLeapYear() : ye.fn.isLeapYear.call(this)
    }
    ;
    U.fn.jIsLeapYear = function() {
        var e = this.jYear();
        return GT(e)
    }
    ;
    U.fn.locale = function(e) {
        return e && ye.changeCalendarSystemByItsLocale && (e === "fa" ? this.doAsJalali() : this.doAsGregorian()),
        ye.fn.locale.call(this, e)
    }
    ;
    U.locale = function(e, t) {
        return e && ye.changeCalendarSystemByItsLocale && (e === "fa" ? this.useJalaliSystemPrimarily(t) : this.useJalaliSystemSecondary()),
        ye.locale.call(this, e)
    }
    ;
    U.from = function(e, t, n) {
        var r = U.locale();
        U.locale(t);
        var i = U(e, n);
        return i.locale(r),
        U.locale(r),
        i
    }
    ;
    U.bindCalendarSystemAndLocale = function() {
        ye.changeCalendarSystemByItsLocale = !0
    }
    ;
    U.unBindCalendarSystemAndLocale = function() {
        ye.changeCalendarSystemByItsLocale = !1
    }
    ;
    U.useJalaliSystemPrimarily = function(e) {
        ye.justUseJalali = !0;
        var t = !1;
        e && (t = e.useGregorianParser),
        ye.useGregorianParser = t
    }
    ;
    U.useJalaliSystemSecondary = function() {
        ye.justUseJalali = !1
    }
    ;
    U.jDaysInMonth = function(e, t) {
        return e += tt(t, 12),
        t = Hn(t, 12),
        t < 0 && (t += 12,
        e -= 1),
        t < 6 ? 31 : t < 11 || U.jIsLeapYear(e) ? 30 : 29
    }
    ;
    U.jIsLeapYear = GT;
    ye.updateLocale("fa", {
        months: "\u0698\u0627\u0646\u0648\u06CC\u0647_\u0641\u0648\u0631\u06CC\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06CC\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06CC\u0647_\u0627\u0648\u062A_\u0633\u067E\u062A\u0627\u0645\u0628\u0631_\u0627\u06A9\u062A\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062F\u0633\u0627\u0645\u0628\u0631".split("_"),
        monthsShort: "\u0698\u0627\u0646\u0648\u06CC\u0647_\u0641\u0648\u0631\u06CC\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06CC\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06CC\u0647_\u0627\u0648\u062A_\u0633\u067E\u062A\u0627\u0645\u0628\u0631_\u0627\u06A9\u062A\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062F\u0633\u0627\u0645\u0628\u0631".split("_"),
        weekdays: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
        weekdaysShort: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
        weekdaysMin: "\u06CC_\u062F_\u0633_\u0686_\u067E_\u062C_\u0634".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "jYYYY/jMM/jDD",
            LL: "jD jMMMM jYYYY",
            LLL: "jD jMMMM jYYYY LT",
            LLLL: "dddd\u060C jD jMMMM jYYYY LT"
        },
        calendar: {
            sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062A] LT",
            nextDay: "[\u0641\u0631\u062F\u0627 \u0633\u0627\u0639\u062A] LT",
            nextWeek: "dddd [\u0633\u0627\u0639\u062A] LT",
            lastDay: "[\u062F\u06CC\u0631\u0648\u0632 \u0633\u0627\u0639\u062A] LT",
            lastWeek: "dddd [\u06CC \u067E\u06CC\u0634 \u0633\u0627\u0639\u062A] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "\u062F\u0631 %s",
            past: "%s \u067E\u06CC\u0634",
            s: "\u0686\u0646\u062F \u062B\u0627\u0646\u06CC\u0647",
            m: "1 \u062F\u0642\u06CC\u0642\u0647",
            mm: "%d \u062F\u0642\u06CC\u0642\u0647",
            h: "1 \u0633\u0627\u0639\u062A",
            hh: "%d \u0633\u0627\u0639\u062A",
            d: "1 \u0631\u0648\u0632",
            dd: "%d \u0631\u0648\u0632",
            M: "1 \u0645\u0627\u0647",
            MM: "%d \u0645\u0627\u0647",
            y: "1 \u0633\u0627\u0644",
            yy: "%d \u0633\u0627\u0644"
        },
        ordinal: "%d\u0645",
        preparse: function(e) {
            return e
        },
        postformat: function(e) {
            return e
        },
        week: {
            dow: 6,
            doy: 12
        },
        meridiem: function(e) {
            return e < 12 ? "\u0642.\u0638" : "\u0628.\u0638"
        },
        jMonths: "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646_\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A_\u062E\u0631\u062F\u0627\u062F_\u062A\u06CC\u0631_\u0645\u0631\u062F\u0627\u062F_\u0634\u0647\u0631\u06CC\u0648\u0631_\u0645\u0647\u0631_\u0622\u0628\u0627\u0646_\u0622\u0630\u0631_\u062F\u06CC_\u0628\u0647\u0645\u0646_\u0627\u0633\u0641\u0646\u062F".split("_"),
        jMonthsShort: "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646_\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A_\u062E\u0631\u062F\u0627\u062F_\u062A\u06CC\u0631_\u0645\u0631\u062F\u0627\u062F_\u0634\u0647\u0631\u06CC\u0648\u0631_\u0645\u0647\u0631_\u0622\u0628\u0627\u0646_\u0622\u0630\u0631_\u062F\u06CC_\u0628\u0647\u0645\u0646_\u0627\u0633\u0641\u0646\u062F".split("_")
    });
    U.bindCalendarSystemAndLocale();
    ye.locale("en");
    U.jConvert = {
        toJalali: rp,
        toGregorian: Hl
    };
    function rp(e, t, n) {
        var r = l6(e, t + 1, n);
        return r.jm -= 1,
        r
    }
    function Hl(e, t, n) {
        var r = c6(e, t + 1, n);
        return r.gm -= 1,
        r
    }
    function tt(e, t) {
        return ~~(e / t)
    }
    function Hn(e, t) {
        return e - ~~(e / t) * t
    }
    function l6(e, t, n) {
        return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(),
        t = e.getMonth() + 1,
        e = e.getFullYear()),
        f6(U0(e, t, n))
    }
    function c6(e, t, n) {
        return qT(d6(e, t, n))
    }
    function GT(e) {
        return H0(e).leap === 0
    }
    function H0(e) {
        var t = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178], n = t.length, r = e + 621, i = -14, o = t[0], s, a, l, c, f, p, m;
        if (e < o || e >= t[n - 1])
            throw new Error("Invalid Jalali year " + e);
        for (m = 1; m < n && (s = t[m],
        a = s - o,
        !(e < s)); m += 1)
            i = i + tt(a, 33) * 8 + tt(Hn(a, 33), 4),
            o = s;
        return p = e - o,
        i = i + tt(p, 33) * 8 + tt(Hn(p, 33) + 3, 4),
        Hn(a, 33) === 4 && a - p === 4 && (i += 1),
        c = tt(r, 4) - tt((tt(r, 100) + 1) * 3, 4) - 150,
        f = 20 + i - c,
        a - p < 6 && (p = p - a + tt(a + 4, 33) * 33),
        l = Hn(Hn(p + 1, 33) - 1, 4),
        l === -1 && (l = 4),
        {
            leap: l,
            gy: r,
            march: f
        }
    }
    function d6(e, t, n) {
        var r = H0(e);
        return U0(r.gy, 3, r.march) + (t - 1) * 31 - tt(t, 7) * (t - 7) + n - 1
    }
    function f6(e) {
        var t = qT(e).gy, n = t - 621, r = H0(n), i = U0(t, 3, r.march), o, s, a;
        if (a = e - i,
        a >= 0) {
            if (a <= 185)
                return s = 1 + tt(a, 31),
                o = Hn(a, 31) + 1,
                {
                    jy: n,
                    jm: s,
                    jd: o
                };
            a -= 186
        } else
            n -= 1,
            a += 179,
            r.leap === 1 && (a += 1);
        return s = 7 + tt(a, 30),
        o = Hn(a, 30) + 1,
        {
            jy: n,
            jm: s,
            jd: o
        }
    }
    function U0(e, t, n) {
        var r = tt((e + tt(t - 8, 6) + 100100) * 1461, 4) + tt(153 * Hn(t + 9, 12) + 2, 5) + n - 34840408;
        return r = r - tt(tt(e + 100100 + tt(t - 8, 6), 100) * 3, 4) + 752,
        r
    }
    function qT(e) {
        var t, n, r, i, o;
        return t = 4 * e + 139361631,
        t = t + tt(tt(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908,
        n = tt(Hn(t, 1461), 4) * 5 + 308,
        r = tt(Hn(n, 153), 5) + 1,
        i = Hn(tt(n, 153), 12) + 1,
        o = tt(t, 1461) - 100100 + tt(8 - i, 6),
        {
            gy: o,
            gm: i,
            gd: r
        }
    }
}
);
function Fp(e, t) {
    return Object.is(e, t)
}
var Et = null
  , Ja = !1
  , Rp = 1
  , Ut = Symbol("SIGNAL");
function Me(e) {
    let t = Et;
    return Et = e,
    t
}
function F_() {
    return Et
}
function zA() {
    return Ja
}
var Eo = {
    version: 0,
    lastCleanEpoch: 0,
    dirty: !1,
    producerNode: void 0,
    producerLastReadVersion: void 0,
    producerIndexOfThis: void 0,
    nextProducerIndex: 0,
    liveConsumerNode: void 0,
    liveConsumerIndexOfThis: void 0,
    consumerAllowSignalWrites: !1,
    consumerIsAlwaysLive: !1,
    producerMustRecompute: () => !1,
    producerRecomputeValue: () => {}
    ,
    consumerMarkedDirty: () => {}
    ,
    consumerOnSignalRead: () => {}
};
function eu(e) {
    if (Ja)
        throw new Error("");
    if (Et === null)
        return;
    Et.consumerOnSignalRead(e);
    let t = Et.nextProducerIndex++;
    if (dc(Et),
    t < Et.producerNode.length && Et.producerNode[t] !== e && Ka(Et)) {
        let n = Et.producerNode[t];
        cc(n, Et.producerIndexOfThis[t])
    }
    Et.producerNode[t] !== e && (Et.producerNode[t] = e,
    Et.producerIndexOfThis[t] = Ka(Et) ? j_(e, Et, t) : 0),
    Et.producerLastReadVersion[t] = e.version
}
function GA() {
    Rp++
}
function Lp(e) {
    if (!(Ka(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === Rp)) {
        if (!e.producerMustRecompute(e) && !nu(e)) {
            Ap(e);
            return
        }
        e.producerRecomputeValue(e),
        Ap(e)
    }
}
function R_(e) {
    if (e.liveConsumerNode === void 0)
        return;
    let t = Ja;
    Ja = !0;
    try {
        for (let n of e.liveConsumerNode)
            n.dirty || V_(n)
    } finally {
        Ja = t
    }
}
function L_() {
    return Et?.consumerAllowSignalWrites !== !1
}
function V_(e) {
    e.dirty = !0,
    R_(e),
    e.consumerMarkedDirty?.(e)
}
function Ap(e) {
    e.dirty = !1,
    e.lastCleanEpoch = Rp
}
function Ns(e) {
    return e && (e.nextProducerIndex = 0),
    Me(e)
}
function tu(e, t) {
    if (Me(t),
    !(!e || e.producerNode === void 0 || e.producerIndexOfThis === void 0 || e.producerLastReadVersion === void 0)) {
        if (Ka(e))
            for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
                cc(e.producerNode[n], e.producerIndexOfThis[n]);
        for (; e.producerNode.length > e.nextProducerIndex; )
            e.producerNode.pop(),
            e.producerLastReadVersion.pop(),
            e.producerIndexOfThis.pop()
    }
}
function nu(e) {
    dc(e);
    for (let t = 0; t < e.producerNode.length; t++) {
        let n = e.producerNode[t]
          , r = e.producerLastReadVersion[t];
        if (r !== n.version || (Lp(n),
        r !== n.version))
            return !0
    }
    return !1
}
function Os(e) {
    if (dc(e),
    Ka(e))
        for (let t = 0; t < e.producerNode.length; t++)
            cc(e.producerNode[t], e.producerIndexOfThis[t]);
    e.producerNode.length = e.producerLastReadVersion.length = e.producerIndexOfThis.length = 0,
    e.liveConsumerNode && (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0)
}
function j_(e, t, n) {
    if (B_(e),
    e.liveConsumerNode.length === 0 && H_(e))
        for (let r = 0; r < e.producerNode.length; r++)
            e.producerIndexOfThis[r] = j_(e.producerNode[r], e, r);
    return e.liveConsumerIndexOfThis.push(n),
    e.liveConsumerNode.push(t) - 1
}
function cc(e, t) {
    if (B_(e),
    e.liveConsumerNode.length === 1 && H_(e))
        for (let r = 0; r < e.producerNode.length; r++)
            cc(e.producerNode[r], e.producerIndexOfThis[r]);
    let n = e.liveConsumerNode.length - 1;
    if (e.liveConsumerNode[t] = e.liveConsumerNode[n],
    e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n],
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length) {
        let r = e.liveConsumerIndexOfThis[t]
          , i = e.liveConsumerNode[t];
        dc(i),
        i.producerIndexOfThis[r] = t
    }
}
function Ka(e) {
    return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0
}
function dc(e) {
    e.producerNode ??= [],
    e.producerIndexOfThis ??= [],
    e.producerLastReadVersion ??= []
}
function B_(e) {
    e.liveConsumerNode ??= [],
    e.liveConsumerIndexOfThis ??= []
}
function H_(e) {
    return e.producerNode !== void 0
}
function Vp(e) {
    let t = Object.create(qA);
    t.computation = e;
    let n = () => {
        if (Lp(t),
        eu(t),
        t.value === lc)
            throw t.error;
        return t.value
    }
    ;
    return n[Ut] = t,
    n
}
var Np = Symbol("UNSET")
  , Op = Symbol("COMPUTING")
  , lc = Symbol("ERRORED")
  , qA = We(Te({}, Eo), {
    value: Np,
    dirty: !0,
    error: null,
    equal: Fp,
    producerMustRecompute(e) {
        return e.value === Np || e.value === Op
    },
    producerRecomputeValue(e) {
        if (e.value === Op)
            throw new Error("Detected cycle in computations.");
        let t = e.value;
        e.value = Op;
        let n = Ns(e), r;
        try {
            r = e.computation()
        } catch (i) {
            r = lc,
            e.error = i
        } finally {
            tu(e, n)
        }
        if (t !== Np && t !== lc && r !== lc && e.equal(t, r)) {
            e.value = t;
            return
        }
        e.value = r,
        e.version++
    }
});
function ZA() {
    throw new Error
}
var U_ = ZA;
function $_() {
    U_()
}
function Y_(e) {
    U_ = e
}
var QA = null;
function W_(e) {
    let t = Object.create(jp);
    t.value = e;
    let n = () => (eu(t),
    t.value);
    return n[Ut] = t,
    n
}
function ru(e, t) {
    L_() || $_(),
    e.equal(e.value, t) || (e.value = t,
    XA(e))
}
function z_(e, t) {
    L_() || $_(),
    ru(e, t(e.value))
}
var jp = We(Te({}, Eo), {
    equal: Fp,
    value: void 0
});
function XA(e) {
    e.version++,
    GA(),
    R_(e),
    QA?.()
}
function G_(e, t, n) {
    let r = Object.create(JA);
    n && (r.consumerAllowSignalWrites = !0),
    r.fn = e,
    r.schedule = t;
    let i = l => {
        r.cleanupFn = l
    }
    ;
    function o(l) {
        return l.fn === null && l.schedule === null
    }
    function s(l) {
        o(l) || (Os(l),
        l.cleanupFn(),
        l.fn = null,
        l.schedule = null,
        l.cleanupFn = Pp)
    }
    let a = () => {
        if (r.fn === null)
            return;
        if (zA())
            throw new Error("Schedulers cannot synchronously execute watches while scheduling.");
        if (r.dirty = !1,
        r.hasRun && !nu(r))
            return;
        r.hasRun = !0;
        let l = Ns(r);
        try {
            r.cleanupFn(),
            r.cleanupFn = Pp,
            r.fn(i)
        } finally {
            tu(r, l)
        }
    }
    ;
    return r.ref = {
        notify: () => V_(r),
        run: a,
        cleanup: () => r.cleanupFn(),
        destroy: () => s(r),
        [Ut]: r
    },
    r.ref
}
var Pp = () => {}
  , JA = We(Te({}, Eo), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !1,
    consumerMarkedDirty: e => {
        e.schedule !== null && e.schedule(e.ref)
    }
    ,
    hasRun: !1,
    cleanupFn: Pp
});
function oe(e) {
    return typeof e == "function"
}
function Mr(e) {
    let n = e(r => {
        Error.call(r),
        r.stack = new Error().stack
    }
    );
    return n.prototype = Object.create(Error.prototype),
    n.prototype.constructor = n,
    n
}
var fc = Mr(e => function(n) {
    e(this),
    this.message = n ? `${n.length} errors occurred during unsubscription:
${n.map( (r, i) => `${i + 1}) ${r.toString()}`).join(`
  `)}` : "",
    this.name = "UnsubscriptionError",
    this.errors = n
}
);
function Xn(e, t) {
    if (e) {
        let n = e.indexOf(t);
        0 <= n && e.splice(n, 1)
    }
}
var ct = class e {
    constructor(t) {
        this.initialTeardown = t,
        this.closed = !1,
        this._parentage = null,
        this._finalizers = null
    }
    unsubscribe() {
        let t;
        if (!this.closed) {
            this.closed = !0;
            let {_parentage: n} = this;
            if (n)
                if (this._parentage = null,
                Array.isArray(n))
                    for (let o of n)
                        o.remove(this);
                else
                    n.remove(this);
            let {initialTeardown: r} = this;
            if (oe(r))
                try {
                    r()
                } catch (o) {
                    t = o instanceof fc ? o.errors : [o]
                }
            let {_finalizers: i} = this;
            if (i) {
                this._finalizers = null;
                for (let o of i)
                    try {
                        q_(o)
                    } catch (s) {
                        t = t ?? [],
                        s instanceof fc ? t = [...t, ...s.errors] : t.push(s)
                    }
            }
            if (t)
                throw new fc(t)
        }
    }
    add(t) {
        var n;
        if (t && t !== this)
            if (this.closed)
                q_(t);
            else {
                if (t instanceof e) {
                    if (t.closed || t._hasParent(this))
                        return;
                    t._addParent(this)
                }
                (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t)
            }
    }
    _hasParent(t) {
        let {_parentage: n} = this;
        return n === t || Array.isArray(n) && n.includes(t)
    }
    _addParent(t) {
        let {_parentage: n} = this;
        this._parentage = Array.isArray(n) ? (n.push(t),
        n) : n ? [n, t] : t
    }
    _removeParent(t) {
        let {_parentage: n} = this;
        n === t ? this._parentage = null : Array.isArray(n) && Xn(n, t)
    }
    remove(t) {
        let {_finalizers: n} = this;
        n && Xn(n, t),
        t instanceof e && t._removeParent(this)
    }
}
;
ct.EMPTY = ( () => {
    let e = new ct;
    return e.closed = !0,
    e
}
)();
var Bp = ct.EMPTY;
function hc(e) {
    return e instanceof ct || e && "closed"in e && oe(e.remove) && oe(e.add) && oe(e.unsubscribe)
}
function q_(e) {
    oe(e) ? e() : e.unsubscribe()
}
var Jn = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1
};
var As = {
    setTimeout(e, t, ...n) {
        let {delegate: r} = As;
        return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n)
    },
    clearTimeout(e) {
        let {delegate: t} = As;
        return (t?.clearTimeout || clearTimeout)(e)
    },
    delegate: void 0
};
function pc(e) {
    As.setTimeout( () => {
        let {onUnhandledError: t} = Jn;
        if (t)
            t(e);
        else
            throw e
    }
    )
}
function Sn() {}
var Z_ = Hp("C", void 0, void 0);
function Q_(e) {
    return Hp("E", void 0, e)
}
function X_(e) {
    return Hp("N", e, void 0)
}
function Hp(e, t, n) {
    return {
        kind: e,
        value: t,
        error: n
    }
}
var So = null;
function Ps(e) {
    if (Jn.useDeprecatedSynchronousErrorHandling) {
        let t = !So;
        if (t && (So = {
            errorThrown: !1,
            error: null
        }),
        e(),
        t) {
            let {errorThrown: n, error: r} = So;
            if (So = null,
            n)
                throw r
        }
    } else
        e()
}
function J_(e) {
    Jn.useDeprecatedSynchronousErrorHandling && So && (So.errorThrown = !0,
    So.error = e)
}
var To = class extends ct {
    constructor(t) {
        super(),
        this.isStopped = !1,
        t ? (this.destination = t,
        hc(t) && t.add(this)) : this.destination = tP
    }
    static create(t, n, r) {
        return new Kn(t,n,r)
    }
    next(t) {
        this.isStopped ? $p(X_(t), this) : this._next(t)
    }
    error(t) {
        this.isStopped ? $p(Q_(t), this) : (this.isStopped = !0,
        this._error(t))
    }
    complete() {
        this.isStopped ? $p(Z_, this) : (this.isStopped = !0,
        this._complete())
    }
    unsubscribe() {
        this.closed || (this.isStopped = !0,
        super.unsubscribe(),
        this.destination = null)
    }
    _next(t) {
        this.destination.next(t)
    }
    _error(t) {
        try {
            this.destination.error(t)
        } finally {
            this.unsubscribe()
        }
    }
    _complete() {
        try {
            this.destination.complete()
        } finally {
            this.unsubscribe()
        }
    }
}
  , KA = Function.prototype.bind;
function Up(e, t) {
    return KA.call(e, t)
}
var Yp = class {
    constructor(t) {
        this.partialObserver = t
    }
    next(t) {
        let {partialObserver: n} = this;
        if (n.next)
            try {
                n.next(t)
            } catch (r) {
                mc(r)
            }
    }
    error(t) {
        let {partialObserver: n} = this;
        if (n.error)
            try {
                n.error(t)
            } catch (r) {
                mc(r)
            }
        else
            mc(t)
    }
    complete() {
        let {partialObserver: t} = this;
        if (t.complete)
            try {
                t.complete()
            } catch (n) {
                mc(n)
            }
    }
}
  , Kn = class extends To {
    constructor(t, n, r) {
        super();
        let i;
        if (oe(t) || !t)
            i = {
                next: t ?? void 0,
                error: n ?? void 0,
                complete: r ?? void 0
            };
        else {
            let o;
            this && Jn.useDeprecatedNextContext ? (o = Object.create(t),
            o.unsubscribe = () => this.unsubscribe(),
            i = {
                next: t.next && Up(t.next, o),
                error: t.error && Up(t.error, o),
                complete: t.complete && Up(t.complete, o)
            }) : i = t
        }
        this.destination = new Yp(i)
    }
}
;
function mc(e) {
    Jn.useDeprecatedSynchronousErrorHandling ? J_(e) : pc(e)
}
function eP(e) {
    throw e
}
function $p(e, t) {
    let {onStoppedNotification: n} = Jn;
    n && As.setTimeout( () => n(e, t))
}
var tP = {
    closed: !0,
    next: Sn,
    error: eP,
    complete: Sn
};
var Fs = typeof Symbol == "function" && Symbol.observable || "@@observable";
function St(e) {
    return e
}
function Wp(...e) {
    return zp(e)
}
function zp(e) {
    return e.length === 0 ? St : e.length === 1 ? e[0] : function(n) {
        return e.reduce( (r, i) => i(r), n)
    }
}
var pe = ( () => {
    class e {
        constructor(n) {
            n && (this._subscribe = n)
        }
        lift(n) {
            let r = new e;
            return r.source = this,
            r.operator = n,
            r
        }
        subscribe(n, r, i) {
            let o = rP(n) ? n : new Kn(n,r,i);
            return Ps( () => {
                let {operator: s, source: a} = this;
                o.add(s ? s.call(o, a) : a ? this._subscribe(o) : this._trySubscribe(o))
            }
            ),
            o
        }
        _trySubscribe(n) {
            try {
                return this._subscribe(n)
            } catch (r) {
                n.error(r)
            }
        }
        forEach(n, r) {
            return r = K_(r),
            new r( (i, o) => {
                let s = new Kn({
                    next: a => {
                        try {
                            n(a)
                        } catch (l) {
                            o(l),
                            s.unsubscribe()
                        }
                    }
                    ,
                    error: o,
                    complete: i
                });
                this.subscribe(s)
            }
            )
        }
        _subscribe(n) {
            var r;
            return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)
        }
        [Fs]() {
            return this
        }
        pipe(...n) {
            return zp(n)(this)
        }
        toPromise(n) {
            return n = K_(n),
            new n( (r, i) => {
                let o;
                this.subscribe(s => o = s, s => i(s), () => r(o))
            }
            )
        }
    }
    return e.create = t => new e(t),
    e
}
)();
function K_(e) {
    var t;
    return (t = e ?? Jn.Promise) !== null && t !== void 0 ? t : Promise
}
function nP(e) {
    return e && oe(e.next) && oe(e.error) && oe(e.complete)
}
function rP(e) {
    return e && e instanceof To || nP(e) && hc(e)
}
function Gp(e) {
    return oe(e?.lift)
}
function j(e) {
    return t => {
        if (Gp(t))
            return t.lift(function(n) {
                try {
                    return e(n, this)
                } catch (r) {
                    this.error(r)
                }
            });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}
function L(e, t, n, r, i) {
    return new iu(e,t,n,r,i)
}
var iu = class extends To {
    constructor(t, n, r, i, o, s) {
        super(t),
        this.onFinalize = o,
        this.shouldUnsubscribe = s,
        this._next = n ? function(a) {
            try {
                n(a)
            } catch (l) {
                t.error(l)
            }
        }
        : super._next,
        this._error = i ? function(a) {
            try {
                i(a)
            } catch (l) {
                t.error(l)
            } finally {
                this.unsubscribe()
            }
        }
        : super._error,
        this._complete = r ? function() {
            try {
                r()
            } catch (a) {
                t.error(a)
            } finally {
                this.unsubscribe()
            }
        }
        : super._complete
    }
    unsubscribe() {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            let {closed: n} = this;
            super.unsubscribe(),
            !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this))
        }
    }
}
;
function qp() {
    return j( (e, t) => {
        let n = null;
        e._refCount++;
        let r = L(t, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount) {
                n = null;
                return
            }
            let i = e._connection
              , o = n;
            n = null,
            i && (!o || i === o) && i.unsubscribe(),
            t.unsubscribe()
        }
        );
        e.subscribe(r),
        r.closed || (n = e.connect())
    }
    )
}
var ou = class extends pe {
    constructor(t, n) {
        super(),
        this.source = t,
        this.subjectFactory = n,
        this._subject = null,
        this._refCount = 0,
        this._connection = null,
        Gp(t) && (this.lift = t.lift)
    }
    _subscribe(t) {
        return this.getSubject().subscribe(t)
    }
    getSubject() {
        let t = this._subject;
        return (!t || t.isStopped) && (this._subject = this.subjectFactory()),
        this._subject
    }
    _teardown() {
        this._refCount = 0;
        let {_connection: t} = this;
        this._subject = this._connection = null,
        t?.unsubscribe()
    }
    connect() {
        let t = this._connection;
        if (!t) {
            t = this._connection = new ct;
            let n = this.getSubject();
            t.add(this.source.subscribe(L(n, void 0, () => {
                this._teardown(),
                n.complete()
            }
            , r => {
                this._teardown(),
                n.error(r)
            }
            , () => this._teardown()))),
            t.closed && (this._connection = null,
            t = ct.EMPTY)
        }
        return t
    }
    refCount() {
        return qp()(this)
    }
}
;
var Rs = {
    schedule(e) {
        let t = requestAnimationFrame
          , n = cancelAnimationFrame
          , {delegate: r} = Rs;
        r && (t = r.requestAnimationFrame,
        n = r.cancelAnimationFrame);
        let i = t(o => {
            n = void 0,
            e(o)
        }
        );
        return new ct( () => n?.(i))
    },
    requestAnimationFrame(...e) {
        let {delegate: t} = Rs;
        return (t?.requestAnimationFrame || requestAnimationFrame)(...e)
    },
    cancelAnimationFrame(...e) {
        let {delegate: t} = Rs;
        return (t?.cancelAnimationFrame || cancelAnimationFrame)(...e)
    },
    delegate: void 0
};
var ew = Mr(e => function() {
    e(this),
    this.name = "ObjectUnsubscribedError",
    this.message = "object unsubscribed"
}
);
var st = ( () => {
    class e extends pe {
        constructor() {
            super(),
            this.closed = !1,
            this.currentObservers = null,
            this.observers = [],
            this.isStopped = !1,
            this.hasError = !1,
            this.thrownError = null
        }
        lift(n) {
            let r = new gc(this,this);
            return r.operator = n,
            r
        }
        _throwIfClosed() {
            if (this.closed)
                throw new ew
        }
        next(n) {
            Ps( () => {
                if (this._throwIfClosed(),
                !this.isStopped) {
                    this.currentObservers || (this.currentObservers = Array.from(this.observers));
                    for (let r of this.currentObservers)
                        r.next(n)
                }
            }
            )
        }
        error(n) {
            Ps( () => {
                if (this._throwIfClosed(),
                !this.isStopped) {
                    this.hasError = this.isStopped = !0,
                    this.thrownError = n;
                    let {observers: r} = this;
                    for (; r.length; )
                        r.shift().error(n)
                }
            }
            )
        }
        complete() {
            Ps( () => {
                if (this._throwIfClosed(),
                !this.isStopped) {
                    this.isStopped = !0;
                    let {observers: n} = this;
                    for (; n.length; )
                        n.shift().complete()
                }
            }
            )
        }
        unsubscribe() {
            this.isStopped = this.closed = !0,
            this.observers = this.currentObservers = null
        }
        get observed() {
            var n;
            return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0
        }
        _trySubscribe(n) {
            return this._throwIfClosed(),
            super._trySubscribe(n)
        }
        _subscribe(n) {
            return this._throwIfClosed(),
            this._checkFinalizedStatuses(n),
            this._innerSubscribe(n)
        }
        _innerSubscribe(n) {
            let {hasError: r, isStopped: i, observers: o} = this;
            return r || i ? Bp : (this.currentObservers = null,
            o.push(n),
            new ct( () => {
                this.currentObservers = null,
                Xn(o, n)
            }
            ))
        }
        _checkFinalizedStatuses(n) {
            let {hasError: r, thrownError: i, isStopped: o} = this;
            r ? n.error(i) : o && n.complete()
        }
        asObservable() {
            let n = new pe;
            return n.source = this,
            n
        }
    }
    return e.create = (t, n) => new gc(t,n),
    e
}
)()
  , gc = class extends st {
    constructor(t, n) {
        super(),
        this.destination = t,
        this.source = n
    }
    next(t) {
        var n, r;
        (r = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || r === void 0 || r.call(n, t)
    }
    error(t) {
        var n, r;
        (r = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || r === void 0 || r.call(n, t)
    }
    complete() {
        var t, n;
        (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t)
    }
    _subscribe(t) {
        var n, r;
        return (r = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && r !== void 0 ? r : Bp
    }
}
;
var Ni = class extends st {
    constructor(t) {
        super(),
        this._value = t
    }
    get value() {
        return this.getValue()
    }
    _subscribe(t) {
        let n = super._subscribe(t);
        return !n.closed && t.next(this._value),
        n
    }
    getValue() {
        let {hasError: t, thrownError: n, _value: r} = this;
        if (t)
            throw n;
        return this._throwIfClosed(),
        r
    }
    next(t) {
        super.next(this._value = t)
    }
}
;
var su = {
    now() {
        return (su.delegate || Date).now()
    },
    delegate: void 0
};
var ko = class extends st {
    constructor(t=1 / 0, n=1 / 0, r=su) {
        super(),
        this._bufferSize = t,
        this._windowTime = n,
        this._timestampProvider = r,
        this._buffer = [],
        this._infiniteTimeWindow = !0,
        this._infiniteTimeWindow = n === 1 / 0,
        this._bufferSize = Math.max(1, t),
        this._windowTime = Math.max(1, n)
    }
    next(t) {
        let {isStopped: n, _buffer: r, _infiniteTimeWindow: i, _timestampProvider: o, _windowTime: s} = this;
        n || (r.push(t),
        !i && r.push(o.now() + s)),
        this._trimBuffer(),
        super.next(t)
    }
    _subscribe(t) {
        this._throwIfClosed(),
        this._trimBuffer();
        let n = this._innerSubscribe(t)
          , {_infiniteTimeWindow: r, _buffer: i} = this
          , o = i.slice();
        for (let s = 0; s < o.length && !t.closed; s += r ? 1 : 2)
            t.next(o[s]);
        return this._checkFinalizedStatuses(t),
        n
    }
    _trimBuffer() {
        let {_bufferSize: t, _timestampProvider: n, _buffer: r, _infiniteTimeWindow: i} = this
          , o = (i ? 1 : 2) * t;
        if (t < 1 / 0 && o < r.length && r.splice(0, r.length - o),
        !i) {
            let s = n.now()
              , a = 0;
            for (let l = 1; l < r.length && r[l] <= s; l += 2)
                a = l;
            a && r.splice(0, a + 1)
        }
    }
}
;
var yc = class extends ct {
    constructor(t, n) {
        super()
    }
    schedule(t, n=0) {
        return this
    }
}
;
var au = {
    setInterval(e, t, ...n) {
        let {delegate: r} = au;
        return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n)
    },
    clearInterval(e) {
        let {delegate: t} = au;
        return (t?.clearInterval || clearInterval)(e)
    },
    delegate: void 0
};
var br = class extends yc {
    constructor(t, n) {
        super(t, n),
        this.scheduler = t,
        this.work = n,
        this.pending = !1
    }
    schedule(t, n=0) {
        var r;
        if (this.closed)
            return this;
        this.state = t;
        let i = this.id
          , o = this.scheduler;
        return i != null && (this.id = this.recycleAsyncId(o, i, n)),
        this.pending = !0,
        this.delay = n,
        this.id = (r = this.id) !== null && r !== void 0 ? r : this.requestAsyncId(o, this.id, n),
        this
    }
    requestAsyncId(t, n, r=0) {
        return au.setInterval(t.flush.bind(t, this), r)
    }
    recycleAsyncId(t, n, r=0) {
        if (r != null && this.delay === r && this.pending === !1)
            return n;
        n != null && au.clearInterval(n)
    }
    execute(t, n) {
        if (this.closed)
            return new Error("executing a cancelled action");
        this.pending = !1;
        let r = this._execute(t, n);
        if (r)
            return r;
        this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
    }
    _execute(t, n) {
        let r = !1, i;
        try {
            this.work(t)
        } catch (o) {
            r = !0,
            i = o || new Error("Scheduled action threw falsy error")
        }
        if (r)
            return this.unsubscribe(),
            i
    }
    unsubscribe() {
        if (!this.closed) {
            let {id: t, scheduler: n} = this
              , {actions: r} = n;
            this.work = this.state = this.scheduler = null,
            this.pending = !1,
            Xn(r, this),
            t != null && (this.id = this.recycleAsyncId(n, t, null)),
            this.delay = null,
            super.unsubscribe()
        }
    }
}
;
var iP = 1, Zp, Qp = {};
function tw(e) {
    return e in Qp ? (delete Qp[e],
    !0) : !1
}
var nw = {
    setImmediate(e) {
        let t = iP++;
        return Qp[t] = !0,
        Zp || (Zp = Promise.resolve()),
        Zp.then( () => tw(t) && e()),
        t
    },
    clearImmediate(e) {
        tw(e)
    }
};
var {setImmediate: oP, clearImmediate: sP} = nw
  , uu = {
    setImmediate(...e) {
        let {delegate: t} = uu;
        return (t?.setImmediate || oP)(...e)
    },
    clearImmediate(e) {
        let {delegate: t} = uu;
        return (t?.clearImmediate || sP)(e)
    },
    delegate: void 0
};
var vc = class extends br {
    constructor(t, n) {
        super(t, n),
        this.scheduler = t,
        this.work = n
    }
    requestAsyncId(t, n, r=0) {
        return r !== null && r > 0 ? super.requestAsyncId(t, n, r) : (t.actions.push(this),
        t._scheduled || (t._scheduled = uu.setImmediate(t.flush.bind(t, void 0))))
    }
    recycleAsyncId(t, n, r=0) {
        var i;
        if (r != null ? r > 0 : this.delay > 0)
            return super.recycleAsyncId(t, n, r);
        let {actions: o} = t;
        n != null && ((i = o[o.length - 1]) === null || i === void 0 ? void 0 : i.id) !== n && (uu.clearImmediate(n),
        t._scheduled === n && (t._scheduled = void 0))
    }
}
;
var Ls = class e {
    constructor(t, n=e.now) {
        this.schedulerActionCtor = t,
        this.now = n
    }
    schedule(t, n=0, r) {
        return new this.schedulerActionCtor(this,t).schedule(r, n)
    }
}
;
Ls.now = su.now;
var Ir = class extends Ls {
    constructor(t, n=Ls.now) {
        super(t, n),
        this.actions = [],
        this._active = !1
    }
    flush(t) {
        let {actions: n} = this;
        if (this._active) {
            n.push(t);
            return
        }
        let r;
        this._active = !0;
        do
            if (r = t.execute(t.state, t.delay))
                break;
        while (t = n.shift());
        if (this._active = !1,
        r) {
            for (; t = n.shift(); )
                t.unsubscribe();
            throw r
        }
    }
}
;
var _c = class extends Ir {
    flush(t) {
        this._active = !0;
        let n = this._scheduled;
        this._scheduled = void 0;
        let {actions: r} = this, i;
        t = t || r.shift();
        do
            if (i = t.execute(t.state, t.delay))
                break;
        while ((t = r[0]) && t.id === n && r.shift());
        if (this._active = !1,
        i) {
            for (; (t = r[0]) && t.id === n && r.shift(); )
                t.unsubscribe();
            throw i
        }
    }
}
;
var aP = new _c(vc);
var $t = new Ir(br)
  , rw = $t;
var wc = class extends br {
    constructor(t, n) {
        super(t, n),
        this.scheduler = t,
        this.work = n
    }
    schedule(t, n=0) {
        return n > 0 ? super.schedule(t, n) : (this.delay = n,
        this.state = t,
        this.scheduler.flush(this),
        this)
    }
    execute(t, n) {
        return n > 0 || this.closed ? super.execute(t, n) : this._execute(t, n)
    }
    requestAsyncId(t, n, r=0) {
        return r != null && r > 0 || r == null && this.delay > 0 ? super.requestAsyncId(t, n, r) : (t.flush(this),
        0)
    }
}
;
var Dc = class extends Ir {
}
;
var uP = new Dc(wc);
var xc = class extends br {
    constructor(t, n) {
        super(t, n),
        this.scheduler = t,
        this.work = n
    }
    requestAsyncId(t, n, r=0) {
        return r !== null && r > 0 ? super.requestAsyncId(t, n, r) : (t.actions.push(this),
        t._scheduled || (t._scheduled = Rs.requestAnimationFrame( () => t.flush(void 0))))
    }
    recycleAsyncId(t, n, r=0) {
        var i;
        if (r != null ? r > 0 : this.delay > 0)
            return super.recycleAsyncId(t, n, r);
        let {actions: o} = t;
        n != null && ((i = o[o.length - 1]) === null || i === void 0 ? void 0 : i.id) !== n && (Rs.cancelAnimationFrame(n),
        t._scheduled = void 0)
    }
}
;
var Cc = class extends Ir {
    flush(t) {
        this._active = !0;
        let n = this._scheduled;
        this._scheduled = void 0;
        let {actions: r} = this, i;
        t = t || r.shift();
        do
            if (i = t.execute(t.state, t.delay))
                break;
        while ((t = r[0]) && t.id === n && r.shift());
        if (this._active = !1,
        i) {
            for (; (t = r[0]) && t.id === n && r.shift(); )
                t.unsubscribe();
            throw i
        }
    }
}
;
var lP = new Cc(xc);
var Tn = new pe(e => e.complete());
function Mc(e) {
    return e && oe(e.schedule)
}
function Xp(e) {
    return e[e.length - 1]
}
function Er(e) {
    return oe(Xp(e)) ? e.pop() : void 0
}
function wn(e) {
    return Mc(Xp(e)) ? e.pop() : void 0
}
function bc(e, t) {
    return typeof Xp(e) == "number" ? e.pop() : t
}
function $7(e, t, n, r) {
    var i = arguments.length, o = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, s;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        o = Reflect.decorate(e, t, n, r);
    else
        for (var a = e.length - 1; a >= 0; a--)
            (s = e[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, n, o) : s(t, n)) || o);
    return i > 3 && o && Object.defineProperty(t, n, o),
    o
}
function ow(e, t, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function(s) {
            s(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, s) {
        function a(f) {
            try {
                c(r.next(f))
            } catch (p) {
                s(p)
            }
        }
        function l(f) {
            try {
                c(r.throw(f))
            } catch (p) {
                s(p)
            }
        }
        function c(f) {
            f.done ? o(f.value) : i(f.value).then(a, l)
        }
        c((r = r.apply(e, t || [])).next())
    }
    )
}
function iw(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , n = t && e[t]
      , r = 0;
    if (n)
        return n.call(e);
    if (e && typeof e.length == "number")
        return {
            next: function() {
                return e && r >= e.length && (e = void 0),
                {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function No(e) {
    return this instanceof No ? (this.v = e,
    this) : new No(e)
}
function sw(e, t, n) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []), i, o = [];
    return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype),
    a("next"),
    a("throw"),
    a("return", s),
    i[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    i;
    function s(y) {
        return function(v) {
            return Promise.resolve(v).then(y, p)
        }
    }
    function a(y, v) {
        r[y] && (i[y] = function(w) {
            return new Promise(function(x, D) {
                o.push([y, w, x, D]) > 1 || l(y, w)
            }
            )
        }
        ,
        v && (i[y] = v(i[y])))
    }
    function l(y, v) {
        try {
            c(r[y](v))
        } catch (w) {
            m(o[0][3], w)
        }
    }
    function c(y) {
        y.value instanceof No ? Promise.resolve(y.value.v).then(f, p) : m(o[0][2], y)
    }
    function f(y) {
        l("next", y)
    }
    function p(y) {
        l("throw", y)
    }
    function m(y, v) {
        y(v),
        o.shift(),
        o.length && l(o[0][0], o[0][1])
    }
}
function aw(e) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof iw == "function" ? iw(e) : e[Symbol.iterator](),
    n = {},
    r("next"),
    r("throw"),
    r("return"),
    n[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    n);
    function r(o) {
        n[o] = e[o] && function(s) {
            return new Promise(function(a, l) {
                s = e[o](s),
                i(a, l, s.done, s.value)
            }
            )
        }
    }
    function i(o, s, a, l) {
        Promise.resolve(l).then(function(c) {
            o({
                value: c,
                done: a
            })
        }, s)
    }
}
var Vs = e => e && typeof e.length == "number" && typeof e != "function";
function Ic(e) {
    return oe(e?.then)
}
function Ec(e) {
    return oe(e[Fs])
}
function Sc(e) {
    return Symbol.asyncIterator && oe(e?.[Symbol.asyncIterator])
}
function Tc(e) {
    return new TypeError(`You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
}
function cP() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}
var kc = cP();
function Nc(e) {
    return oe(e?.[kc])
}
function Oc(e) {
    return sw(this, arguments, function*() {
        let n = e.getReader();
        try {
            for (; ; ) {
                let {value: r, done: i} = yield No(n.read());
                if (i)
                    return yield No(void 0);
                yield yield No(r)
            }
        } finally {
            n.releaseLock()
        }
    })
}
function Ac(e) {
    return oe(e?.getReader)
}
function ie(e) {
    if (e instanceof pe)
        return e;
    if (e != null) {
        if (Ec(e))
            return dP(e);
        if (Vs(e))
            return fP(e);
        if (Ic(e))
            return hP(e);
        if (Sc(e))
            return uw(e);
        if (Nc(e))
            return pP(e);
        if (Ac(e))
            return mP(e)
    }
    throw Tc(e)
}
function dP(e) {
    return new pe(t => {
        let n = e[Fs]();
        if (oe(n.subscribe))
            return n.subscribe(t);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    }
    )
}
function fP(e) {
    return new pe(t => {
        for (let n = 0; n < e.length && !t.closed; n++)
            t.next(e[n]);
        t.complete()
    }
    )
}
function hP(e) {
    return new pe(t => {
        e.then(n => {
            t.closed || (t.next(n),
            t.complete())
        }
        , n => t.error(n)).then(null, pc)
    }
    )
}
function pP(e) {
    return new pe(t => {
        for (let n of e)
            if (t.next(n),
            t.closed)
                return;
        t.complete()
    }
    )
}
function uw(e) {
    return new pe(t => {
        gP(e, t).catch(n => t.error(n))
    }
    )
}
function mP(e) {
    return uw(Oc(e))
}
function gP(e, t) {
    var n, r, i, o;
    return ow(this, void 0, void 0, function*() {
        try {
            for (n = aw(e); r = yield n.next(),
            !r.done; ) {
                let s = r.value;
                if (t.next(s),
                t.closed)
                    return
            }
        } catch (s) {
            i = {
                error: s
            }
        } finally {
            try {
                r && !r.done && (o = n.return) && (yield o.call(n))
            } finally {
                if (i)
                    throw i.error
            }
        }
        t.complete()
    })
}
function Tt(e, t, n, r=0, i=!1) {
    let o = t.schedule(function() {
        n(),
        i ? e.add(this.schedule(null, r)) : this.unsubscribe()
    }, r);
    if (e.add(o),
    !i)
        return o
}
function lu(e, t=0) {
    return j( (n, r) => {
        n.subscribe(L(r, i => Tt(r, e, () => r.next(i), t), () => Tt(r, e, () => r.complete(), t), i => Tt(r, e, () => r.error(i), t)))
    }
    )
}
function Pc(e, t=0) {
    return j( (n, r) => {
        r.add(e.schedule( () => n.subscribe(r), t))
    }
    )
}
function lw(e, t) {
    return ie(e).pipe(Pc(t), lu(t))
}
function cw(e, t) {
    return ie(e).pipe(Pc(t), lu(t))
}
function dw(e, t) {
    return new pe(n => {
        let r = 0;
        return t.schedule(function() {
            r === e.length ? n.complete() : (n.next(e[r++]),
            n.closed || this.schedule())
        })
    }
    )
}
function fw(e, t) {
    return new pe(n => {
        let r;
        return Tt(n, t, () => {
            r = e[kc](),
            Tt(n, t, () => {
                let i, o;
                try {
                    ({value: i, done: o} = r.next())
                } catch (s) {
                    n.error(s);
                    return
                }
                o ? n.complete() : n.next(i)
            }
            , 0, !0)
        }
        ),
        () => oe(r?.return) && r.return()
    }
    )
}
function Fc(e, t) {
    if (!e)
        throw new Error("Iterable cannot be null");
    return new pe(n => {
        Tt(n, t, () => {
            let r = e[Symbol.asyncIterator]();
            Tt(n, t, () => {
                r.next().then(i => {
                    i.done ? n.complete() : n.next(i.value)
                }
                )
            }
            , 0, !0)
        }
        )
    }
    )
}
function hw(e, t) {
    return Fc(Oc(e), t)
}
function pw(e, t) {
    if (e != null) {
        if (Ec(e))
            return lw(e, t);
        if (Vs(e))
            return dw(e, t);
        if (Ic(e))
            return cw(e, t);
        if (Sc(e))
            return Fc(e, t);
        if (Nc(e))
            return fw(e, t);
        if (Ac(e))
            return hw(e, t)
    }
    throw Tc(e)
}
function Ft(e, t) {
    return t ? pw(e, t) : ie(e)
}
function Yn(...e) {
    let t = wn(e);
    return Ft(e, t)
}
function Jp(e, t) {
    let n = oe(e) ? e : () => e
      , r = i => i.error(n());
    return new pe(t ? i => t.schedule(r, 0, i) : r)
}
var Oi = class e {
    constructor(t, n, r) {
        this.kind = t,
        this.value = n,
        this.error = r,
        this.hasValue = t === "N"
    }
    observe(t) {
        return Kp(this, t)
    }
    do(t, n, r) {
        let {kind: i, value: o, error: s} = this;
        return i === "N" ? t?.(o) : i === "E" ? n?.(s) : r?.()
    }
    accept(t, n, r) {
        var i;
        return oe((i = t) === null || i === void 0 ? void 0 : i.next) ? this.observe(t) : this.do(t, n, r)
    }
    toObservable() {
        let {kind: t, value: n, error: r} = this
          , i = t === "N" ? Yn(n) : t === "E" ? Jp( () => r) : t === "C" ? Tn : 0;
        if (!i)
            throw new TypeError(`Unexpected notification kind ${t}`);
        return i
    }
    static createNext(t) {
        return new e("N",t)
    }
    static createError(t) {
        return new e("E",void 0,t)
    }
    static createComplete() {
        return e.completeNotification
    }
}
;
Oi.completeNotification = new Oi("C");
function Kp(e, t) {
    var n, r, i;
    let {kind: o, value: s, error: a} = e;
    if (typeof o != "string")
        throw new TypeError('Invalid notification, missing "kind"');
    o === "N" ? (n = t.next) === null || n === void 0 || n.call(t, s) : o === "E" ? (r = t.error) === null || r === void 0 || r.call(t, a) : (i = t.complete) === null || i === void 0 || i.call(t)
}
function yP(e) {
    return !!e && (e instanceof pe || oe(e.lift) && oe(e.subscribe))
}
var er = Mr(e => function() {
    e(this),
    this.name = "EmptyError",
    this.message = "no elements in sequence"
}
);
function vP(e, t) {
    let n = typeof t == "object";
    return new Promise( (r, i) => {
        let o = !1, s;
        e.subscribe({
            next: a => {
                s = a,
                o = !0
            }
            ,
            error: i,
            complete: () => {
                o ? r(s) : n ? r(t.defaultValue) : i(new er)
            }
        })
    }
    )
}
function _P(e, t) {
    let n = typeof t == "object";
    return new Promise( (r, i) => {
        let o = new Kn({
            next: s => {
                r(s),
                o.unsubscribe()
            }
            ,
            error: i,
            complete: () => {
                n ? r(t.defaultValue) : i(new er)
            }
        });
        e.subscribe(o)
    }
    )
}
var wP = Mr(e => function(n) {
    e(this),
    this.name = "NotFoundError",
    this.message = n
}
);
function Rc(e) {
    return e instanceof Date && !isNaN(e)
}
var DP = Mr(e => function(n=null) {
    e(this),
    this.message = "Timeout has occurred",
    this.name = "TimeoutError",
    this.info = n
}
);
function xP(e, t) {
    let {first: n, each: r, with: i=CP, scheduler: o=t ?? $t, meta: s=null} = Rc(e) ? {
        first: e
    } : typeof e == "number" ? {
        each: e
    } : e;
    if (n == null && r == null)
        throw new TypeError("No timeout provided.");
    return j( (a, l) => {
        let c, f, p = null, m = 0, y = v => {
            f = Tt(l, o, () => {
                try {
                    c.unsubscribe(),
                    ie(i({
                        meta: s,
                        lastValue: p,
                        seen: m
                    })).subscribe(l)
                } catch (w) {
                    l.error(w)
                }
            }
            , v)
        }
        ;
        c = a.subscribe(L(l, v => {
            f?.unsubscribe(),
            m++,
            l.next(p = v),
            r > 0 && y(r)
        }
        , void 0, void 0, () => {
            f?.closed || f?.unsubscribe(),
            p = null
        }
        )),
        !m && y(n != null ? typeof n == "number" ? n : +n - o.now() : r)
    }
    )
}
function CP(e) {
    throw new DP(e)
}
function ft(e, t) {
    return j( (n, r) => {
        let i = 0;
        n.subscribe(L(r, o => {
            r.next(e.call(t, o, i++))
        }
        ))
    }
    )
}
var {isArray: MP} = Array;
function bP(e, t) {
    return MP(t) ? e(...t) : e(t)
}
function Ai(e) {
    return ft(t => bP(e, t))
}
var {isArray: IP} = Array
  , {getPrototypeOf: EP, prototype: SP, keys: TP} = Object;
function Lc(e) {
    if (e.length === 1) {
        let t = e[0];
        if (IP(t))
            return {
                args: t,
                keys: null
            };
        if (kP(t)) {
            let n = TP(t);
            return {
                args: n.map(r => t[r]),
                keys: n
            }
        }
    }
    return {
        args: e,
        keys: null
    }
}
function kP(e) {
    return e && typeof e == "object" && EP(e) === SP
}
function Vc(e, t) {
    return e.reduce( (n, r, i) => (n[r] = t[i],
    n), {})
}
function em(...e) {
    let t = wn(e)
      , n = Er(e)
      , {args: r, keys: i} = Lc(e);
    if (r.length === 0)
        return Ft([], t);
    let o = new pe(tm(r, t, i ? s => Vc(i, s) : St));
    return n ? o.pipe(Ai(n)) : o
}
function tm(e, t, n=St) {
    return r => {
        mw(t, () => {
            let {length: i} = e
              , o = new Array(i)
              , s = i
              , a = i;
            for (let l = 0; l < i; l++)
                mw(t, () => {
                    let c = Ft(e[l], t)
                      , f = !1;
                    c.subscribe(L(r, p => {
                        o[l] = p,
                        f || (f = !0,
                        a--),
                        a || r.next(n(o.slice()))
                    }
                    , () => {
                        --s || r.complete()
                    }
                    ))
                }
                , r)
        }
        , r)
    }
}
function mw(e, t, n) {
    e ? Tt(n, e, t) : t()
}
function gw(e, t, n, r, i, o, s, a) {
    let l = []
      , c = 0
      , f = 0
      , p = !1
      , m = () => {
        p && !l.length && !c && t.complete()
    }
      , y = w => c < r ? v(w) : l.push(w)
      , v = w => {
        o && t.next(w),
        c++;
        let x = !1;
        ie(n(w, f++)).subscribe(L(t, D => {
            i?.(D),
            o ? y(D) : t.next(D)
        }
        , () => {
            x = !0
        }
        , void 0, () => {
            if (x)
                try {
                    for (c--; l.length && c < r; ) {
                        let D = l.shift();
                        s ? Tt(t, s, () => v(D)) : v(D)
                    }
                    m()
                } catch (D) {
                    t.error(D)
                }
        }
        ))
    }
    ;
    return e.subscribe(L(t, y, () => {
        p = !0,
        m()
    }
    )),
    () => {
        a?.()
    }
}
function Wn(e, t, n=1 / 0) {
    return oe(t) ? Wn( (r, i) => ft( (o, s) => t(r, o, i, s))(ie(e(r, i))), n) : (typeof t == "number" && (n = t),
    j( (r, i) => gw(r, i, e, n)))
}
function Sr(e=1 / 0) {
    return Wn(St, e)
}
function yw() {
    return Sr(1)
}
function Pi(...e) {
    return yw()(Ft(e, wn(e)))
}
function NP(e) {
    return new pe(t => {
        ie(e()).subscribe(t)
    }
    )
}
function nm(...e) {
    let t = Er(e)
      , {args: n, keys: r} = Lc(e)
      , i = new pe(o => {
        let {length: s} = n;
        if (!s) {
            o.complete();
            return
        }
        let a = new Array(s)
          , l = s
          , c = s;
        for (let f = 0; f < s; f++) {
            let p = !1;
            ie(n[f]).subscribe(L(o, m => {
                p || (p = !0,
                c--),
                a[f] = m
            }
            , () => l--, void 0, () => {
                (!l || !p) && (c || o.next(r ? Vc(r, a) : a),
                o.complete())
            }
            ))
        }
    }
    );
    return t ? i.pipe(Ai(t)) : i
}
var OP = ["addListener", "removeListener"]
  , AP = ["addEventListener", "removeEventListener"]
  , PP = ["on", "off"];
function rm(e, t, n, r) {
    if (oe(n) && (r = n,
    n = void 0),
    r)
        return rm(e, t, n).pipe(Ai(r));
    let[i,o] = LP(e) ? AP.map(s => a => e[s](t, a, n)) : FP(e) ? OP.map(vw(e, t)) : RP(e) ? PP.map(vw(e, t)) : [];
    if (!i && Vs(e))
        return Wn(s => rm(s, t, n))(ie(e));
    if (!i)
        throw new TypeError("Invalid event target");
    return new pe(s => {
        let a = (...l) => s.next(1 < l.length ? l : l[0]);
        return i(a),
        () => o(a)
    }
    )
}
function vw(e, t) {
    return n => r => e[n](t, r)
}
function FP(e) {
    return oe(e.addListener) && oe(e.removeListener)
}
function RP(e) {
    return oe(e.on) && oe(e.off)
}
function LP(e) {
    return oe(e.addEventListener) && oe(e.removeEventListener)
}
function un(e=0, t, n=rw) {
    let r = -1;
    return t != null && (Mc(t) ? n = t : r = t),
    new pe(i => {
        let o = Rc(e) ? +e - n.now() : e;
        o < 0 && (o = 0);
        let s = 0;
        return n.schedule(function() {
            i.closed || (i.next(s++),
            0 <= r ? this.schedule(void 0, r) : i.complete())
        }, o)
    }
    )
}
function VP(e=0, t=$t) {
    return e < 0 && (e = 0),
    un(e, e, t)
}
function jP(...e) {
    let t = wn(e)
      , n = bc(e, 1 / 0)
      , r = e;
    return r.length ? r.length === 1 ? ie(r[0]) : Sr(n)(Ft(r, t)) : Tn
}
var BP = new pe(Sn);
var {isArray: HP} = Array;
function Fi(e) {
    return e.length === 1 && HP(e[0]) ? e[0] : e
}
function Tr(e, t) {
    return j( (n, r) => {
        let i = 0;
        n.subscribe(L(r, o => e.call(t, o, i++) && r.next(o)))
    }
    )
}
function UP(...e) {
    return e = Fi(e),
    e.length === 1 ? ie(e[0]) : new pe($P(e))
}
function $P(e) {
    return t => {
        let n = [];
        for (let r = 0; n && !t.closed && r < e.length; r++)
            n.push(ie(e[r]).subscribe(L(t, i => {
                if (n) {
                    for (let o = 0; o < n.length; o++)
                        o !== r && n[o].unsubscribe();
                    n = null
                }
                t.next(i)
            }
            )))
    }
}
function YP(...e) {
    let t = Er(e)
      , n = Fi(e);
    return n.length ? new pe(r => {
        let i = n.map( () => [])
          , o = n.map( () => !1);
        r.add( () => {
            i = o = null
        }
        );
        for (let s = 0; !r.closed && s < n.length; s++)
            ie(n[s]).subscribe(L(r, a => {
                if (i[s].push(a),
                i.every(l => l.length)) {
                    let l = i.map(c => c.shift());
                    r.next(t ? t(...l) : l),
                    i.some( (c, f) => !c.length && o[f]) && r.complete()
                }
            }
            , () => {
                o[s] = !0,
                !i[s].length && r.complete()
            }
            ));
        return () => {
            i = o = null
        }
    }
    ) : Tn
}
function _w(e) {
    return j( (t, n) => {
        let r = !1
          , i = null
          , o = null
          , s = !1
          , a = () => {
            if (o?.unsubscribe(),
            o = null,
            r) {
                r = !1;
                let c = i;
                i = null,
                n.next(c)
            }
            s && n.complete()
        }
          , l = () => {
            o = null,
            s && n.complete()
        }
        ;
        t.subscribe(L(n, c => {
            r = !0,
            i = c,
            o || ie(e(c)).subscribe(o = L(n, a, l))
        }
        , () => {
            s = !0,
            (!r || !o || o.closed) && n.complete()
        }
        ))
    }
    )
}
function WP(e, t=$t) {
    return _w( () => un(e, t))
}
function zP(e, t=null) {
    return t = t ?? e,
    j( (n, r) => {
        let i = []
          , o = 0;
        n.subscribe(L(r, s => {
            let a = null;
            o++ % t === 0 && i.push([]);
            for (let l of i)
                l.push(s),
                e <= l.length && (a = a ?? [],
                a.push(l));
            if (a)
                for (let l of a)
                    Xn(i, l),
                    r.next(l)
        }
        , () => {
            for (let s of i)
                r.next(s);
            r.complete()
        }
        , void 0, () => {
            i = null
        }
        ))
    }
    )
}
function GP(e, ...t) {
    var n, r;
    let i = (n = wn(t)) !== null && n !== void 0 ? n : $t
      , o = (r = t[0]) !== null && r !== void 0 ? r : null
      , s = t[1] || 1 / 0;
    return j( (a, l) => {
        let c = []
          , f = !1
          , p = v => {
            let {buffer: w, subs: x} = v;
            x.unsubscribe(),
            Xn(c, v),
            l.next(w),
            f && m()
        }
          , m = () => {
            if (c) {
                let v = new ct;
                l.add(v);
                let x = {
                    buffer: [],
                    subs: v
                };
                c.push(x),
                Tt(v, i, () => p(x), e)
            }
        }
        ;
        o !== null && o >= 0 ? Tt(l, i, m, o, !0) : f = !0,
        m();
        let y = L(l, v => {
            let w = c.slice();
            for (let x of w) {
                let {buffer: D} = x;
                D.push(v),
                s <= D.length && p(x)
            }
        }
        , () => {
            for (; c?.length; )
                l.next(c.shift().buffer);
            y?.unsubscribe(),
            l.complete(),
            l.unsubscribe()
        }
        , void 0, () => c = null);
        a.subscribe(y)
    }
    )
}
function cu(e) {
    return j( (t, n) => {
        let r = null, i = !1, o;
        r = t.subscribe(L(n, void 0, void 0, s => {
            o = ie(e(s, cu(e)(t))),
            r ? (r.unsubscribe(),
            r = null,
            o.subscribe(n)) : i = !0
        }
        )),
        i && (r.unsubscribe(),
        r = null,
        o.subscribe(n))
    }
    )
}
function jc(e, t, n, r, i) {
    return (o, s) => {
        let a = n
          , l = t
          , c = 0;
        o.subscribe(L(s, f => {
            let p = c++;
            l = a ? e(l, f, p) : (a = !0,
            f),
            r && s.next(l)
        }
        , i && ( () => {
            a && s.next(l),
            s.complete()
        }
        )))
    }
}
function qP(e, t) {
    return j(jc(e, t, arguments.length >= 2, !1, !0))
}
function im(...e) {
    let t = Er(e);
    return t ? Wp(im(...e), Ai(t)) : j( (n, r) => {
        tm([n, ...Fi(e)])(r)
    }
    )
}
function ww(...e) {
    return im(...e)
}
function Bc(e, t) {
    return oe(t) ? Wn(e, t, 1) : Wn(e, 1)
}
function Dw(e) {
    return new pe(t => e.subscribe(t))
}
var ZP = {
    connector: () => new st
};
function Hc(e, t=ZP) {
    let {connector: n} = t;
    return j( (r, i) => {
        let o = n();
        ie(e(Dw(o))).subscribe(i),
        i.add(r.subscribe(o))
    }
    )
}
function QP(e) {
    return j( (t, n) => {
        let r = !1
          , i = null
          , o = null
          , s = () => {
            if (o?.unsubscribe(),
            o = null,
            r) {
                r = !1;
                let a = i;
                i = null,
                n.next(a)
            }
        }
        ;
        t.subscribe(L(n, a => {
            o?.unsubscribe(),
            r = !0,
            i = a,
            o = L(n, s, Sn),
            ie(e(a)).subscribe(o)
        }
        , () => {
            s(),
            n.complete()
        }
        , void 0, () => {
            i = o = null
        }
        ))
    }
    )
}
function xw(e, t=$t) {
    return j( (n, r) => {
        let i = null
          , o = null
          , s = null
          , a = () => {
            if (i) {
                i.unsubscribe(),
                i = null;
                let c = o;
                o = null,
                r.next(c)
            }
        }
        ;
        function l() {
            let c = s + e
              , f = t.now();
            if (f < c) {
                i = this.schedule(void 0, c - f),
                r.add(i);
                return
            }
            a()
        }
        n.subscribe(L(r, c => {
            o = c,
            s = t.now(),
            i || (i = t.schedule(l, e),
            r.add(i))
        }
        , () => {
            a(),
            r.complete()
        }
        , void 0, () => {
            o = i = null
        }
        ))
    }
    )
}
function du(e) {
    return j( (t, n) => {
        let r = !1;
        t.subscribe(L(n, i => {
            r = !0,
            n.next(i)
        }
        , () => {
            r || n.next(e),
            n.complete()
        }
        ))
    }
    )
}
function Ri(e) {
    return e <= 0 ? () => Tn : j( (t, n) => {
        let r = 0;
        t.subscribe(L(n, i => {
            ++r <= e && (n.next(i),
            e <= r && n.complete())
        }
        ))
    }
    )
}
function om() {
    return j( (e, t) => {
        e.subscribe(L(t, Sn))
    }
    )
}
function sm(e) {
    return ft( () => e)
}
function am(e, t) {
    return t ? n => Pi(t.pipe(Ri(1), om()), n.pipe(am(e))) : Wn( (n, r) => ie(e(n, r)).pipe(Ri(1), sm(n)))
}
function Cw(e, t=$t) {
    let n = un(e, t);
    return am( () => n)
}
function XP() {
    return j( (e, t) => {
        e.subscribe(L(t, n => Kp(n, t)))
    }
    )
}
function Uc(e, t=St) {
    return e = e ?? JP,
    j( (n, r) => {
        let i, o = !0;
        n.subscribe(L(r, s => {
            let a = t(s);
            (o || !e(i, a)) && (o = !1,
            i = a,
            r.next(s))
        }
        ))
    }
    )
}
function JP(e, t) {
    return e === t
}
function KP(e, t) {
    return Uc( (n, r) => t ? t(n[e], r[e]) : n[e] === r[e])
}
function $c(e=eF) {
    return j( (t, n) => {
        let r = !1;
        t.subscribe(L(n, i => {
            r = !0,
            n.next(i)
        }
        , () => r ? n.complete() : n.error(e())))
    }
    )
}
function eF() {
    return new er
}
function Mw(...e) {
    return t => Pi(t, Yn(...e))
}
function um(e, t) {
    return t ? n => n.pipe(um( (r, i) => ie(e(r, i)).pipe(ft( (o, s) => t(r, o, i, s))))) : j( (n, r) => {
        let i = 0
          , o = null
          , s = !1;
        n.subscribe(L(r, a => {
            o || (o = L(r, void 0, () => {
                o = null,
                s && r.complete()
            }
            ),
            ie(e(a, i++)).subscribe(o))
        }
        , () => {
            s = !0,
            !o && r.complete()
        }
        ))
    }
    )
}
function fu(e) {
    return j( (t, n) => {
        try {
            t.subscribe(n)
        } finally {
            n.add(e)
        }
    }
    )
}
function bw(e, t) {
    let n = arguments.length >= 2;
    return r => r.pipe(e ? Tr( (i, o) => e(i, o, r)) : St, Ri(1), n ? du(t) : $c( () => new er))
}
function tF(e, t, n, r) {
    return j( (i, o) => {
        let s;
        !t || typeof t == "function" ? s = t : {duration: n, element: s, connector: r} = t;
        let a = new Map
          , l = v => {
            a.forEach(v),
            v(o)
        }
          , c = v => l(w => w.error(v))
          , f = 0
          , p = !1
          , m = new iu(o,v => {
            try {
                let w = e(v)
                  , x = a.get(w);
                if (!x) {
                    a.set(w, x = r ? r() : new st);
                    let D = y(w, x);
                    if (o.next(D),
                    n) {
                        let I = L(x, () => {
                            x.complete(),
                            I?.unsubscribe()
                        }
                        , void 0, void 0, () => a.delete(w));
                        m.add(ie(n(D)).subscribe(I))
                    }
                }
                x.next(s ? s(v) : v)
            } catch (w) {
                c(w)
            }
        }
        , () => l(v => v.complete()),c, () => a.clear(), () => (p = !0,
        f === 0));
        i.subscribe(m);
        function y(v, w) {
            let x = new pe(D => {
                f++;
                let I = w.subscribe(D);
                return () => {
                    I.unsubscribe(),
                    --f === 0 && p && m.unsubscribe()
                }
            }
            );
            return x.key = v,
            x
        }
    }
    )
}
function lm(e) {
    return e <= 0 ? () => Tn : j( (t, n) => {
        let r = [];
        t.subscribe(L(n, i => {
            r.push(i),
            e < r.length && r.shift()
        }
        , () => {
            for (let i of r)
                n.next(i);
            n.complete()
        }
        , void 0, () => {
            r = null
        }
        ))
    }
    )
}
function nF(e, t) {
    let n = arguments.length >= 2;
    return r => r.pipe(e ? Tr( (i, o) => e(i, o, r)) : St, lm(1), n ? du(t) : $c( () => new er))
}
function rF() {
    return j( (e, t) => {
        e.subscribe(L(t, n => {
            t.next(Oi.createNext(n))
        }
        , () => {
            t.next(Oi.createComplete()),
            t.complete()
        }
        , n => {
            t.next(Oi.createError(n)),
            t.complete()
        }
        ))
    }
    )
}
function Iw(...e) {
    let t = wn(e)
      , n = bc(e, 1 / 0);
    return e = Fi(e),
    j( (r, i) => {
        Sr(n)(Ft([r, ...e], t)).subscribe(i)
    }
    )
}
function Ew(...e) {
    return Iw(...e)
}
function Sw(e, t) {
    let n = oe(e) ? e : () => e;
    return oe(t) ? Hc(t, {
        connector: n
    }) : r => new ou(r,n)
}
function Tw() {
    return j( (e, t) => {
        let n, r = !1;
        e.subscribe(L(t, i => {
            let o = n;
            n = i,
            r && t.next([o, i]),
            r = !0
        }
        ))
    }
    )
}
function iF(...e) {
    let t = e.length;
    if (t === 0)
        throw new Error("list of properties cannot be empty.");
    return ft(n => {
        let r = n;
        for (let i = 0; i < t; i++) {
            let o = r?.[e[i]];
            if (typeof o < "u")
                r = o;
            else
                return
        }
        return r
    }
    )
}
function oF(e) {
    return e ? t => Hc(e)(t) : t => Sw(new st)(t)
}
function sF(e) {
    let t = 1 / 0, n;
    return e != null && (typeof e == "object" ? {count: t=1 / 0, delay: n} = e : t = e),
    t <= 0 ? () => Tn : j( (r, i) => {
        let o = 0, s, a = () => {
            if (s?.unsubscribe(),
            s = null,
            n != null) {
                let c = typeof n == "number" ? un(n) : ie(n(o))
                  , f = L(i, () => {
                    f.unsubscribe(),
                    l()
                }
                );
                c.subscribe(f)
            } else
                l()
        }
        , l = () => {
            let c = !1;
            s = r.subscribe(L(i, void 0, () => {
                ++o < t ? s ? a() : c = !0 : i.complete()
            }
            )),
            c && a()
        }
        ;
        l()
    }
    )
}
function cm(e=1 / 0) {
    let t;
    e && typeof e == "object" ? t = e : t = {
        count: e
    };
    let {count: n=1 / 0, delay: r, resetOnSuccess: i=!1} = t;
    return n <= 0 ? St : j( (o, s) => {
        let a = 0, l, c = () => {
            let f = !1;
            l = o.subscribe(L(s, p => {
                i && (a = 0),
                s.next(p)
            }
            , void 0, p => {
                if (a++ < n) {
                    let m = () => {
                        l ? (l.unsubscribe(),
                        l = null,
                        c()) : f = !0
                    }
                    ;
                    if (r != null) {
                        let y = typeof r == "number" ? un(r) : ie(r(p, a))
                          , v = L(s, () => {
                            v.unsubscribe(),
                            m()
                        }
                        , () => {
                            s.complete()
                        }
                        );
                        y.subscribe(v)
                    } else
                        m()
                } else
                    s.error(p)
            }
            )),
            f && (l.unsubscribe(),
            l = null,
            c())
        }
        ;
        c()
    }
    )
}
function aF(e) {
    return j( (t, n) => {
        let r, i = !1, o, s = () => {
            r = t.subscribe(L(n, void 0, void 0, a => {
                o || (o = new st,
                ie(e(o)).subscribe(L(n, () => r ? s() : i = !0))),
                o && o.next(a)
            }
            )),
            i && (r.unsubscribe(),
            r = null,
            i = !1,
            s())
        }
        ;
        s()
    }
    )
}
function kw(e, t) {
    return j(jc(e, t, arguments.length >= 2, !0))
}
function fm(e={}) {
    let {connector: t= () => new st, resetOnError: n=!0, resetOnComplete: r=!0, resetOnRefCountZero: i=!0} = e;
    return o => {
        let s, a, l, c = 0, f = !1, p = !1, m = () => {
            a?.unsubscribe(),
            a = void 0
        }
        , y = () => {
            m(),
            s = l = void 0,
            f = p = !1
        }
        , v = () => {
            let w = s;
            y(),
            w?.unsubscribe()
        }
        ;
        return j( (w, x) => {
            c++,
            !p && !f && m();
            let D = l = l ?? t();
            x.add( () => {
                c--,
                c === 0 && !p && !f && (a = dm(v, i))
            }
            ),
            D.subscribe(x),
            !s && c > 0 && (s = new Kn({
                next: I => D.next(I),
                error: I => {
                    p = !0,
                    m(),
                    a = dm(y, n, I),
                    D.error(I)
                }
                ,
                complete: () => {
                    f = !0,
                    m(),
                    a = dm(y, r),
                    D.complete()
                }
            }),
            ie(w).subscribe(s))
        }
        )(o)
    }
}
function dm(e, t, ...n) {
    if (t === !0) {
        e();
        return
    }
    if (t === !1)
        return;
    let r = new Kn({
        next: () => {
            r.unsubscribe(),
            e()
        }
    });
    return ie(t(...n)).subscribe(r)
}
function Nw(e, t, n) {
    let r, i = !1;
    return e && typeof e == "object" ? {bufferSize: r=1 / 0, windowTime: t=1 / 0, refCount: i=!1, scheduler: n} = e : r = e ?? 1 / 0,
    fm({
        connector: () => new ko(r,t,n),
        resetOnError: !0,
        resetOnComplete: !1,
        resetOnRefCountZero: i
    })
}
function Ow(e) {
    return Tr( (t, n) => e <= n)
}
function Aw(e) {
    return j( (t, n) => {
        let r = !1
          , i = 0;
        t.subscribe(L(n, o => (r || (r = !e(o, i++))) && n.next(o)))
    }
    )
}
function Pw(...e) {
    let t = wn(e);
    return j( (n, r) => {
        (t ? Pi(e, n, t) : Pi(e, n)).subscribe(r)
    }
    )
}
function Li(e, t) {
    return j( (n, r) => {
        let i = null
          , o = 0
          , s = !1
          , a = () => s && !i && r.complete();
        n.subscribe(L(r, l => {
            i?.unsubscribe();
            let c = 0
              , f = o++;
            ie(e(l, f)).subscribe(i = L(r, p => r.next(t ? t(l, p, f, c++) : p), () => {
                i = null,
                a()
            }
            ))
        }
        , () => {
            s = !0,
            a()
        }
        ))
    }
    )
}
function Yc(e) {
    return j( (t, n) => {
        ie(e).subscribe(L(n, () => n.complete(), Sn)),
        !n.closed && t.subscribe(n)
    }
    )
}
function kr(e, t, n) {
    let r = oe(e) || t || n ? {
        next: e,
        error: t,
        complete: n
    } : e;
    return r ? j( (i, o) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        i.subscribe(L(o, l => {
            var c;
            (c = r.next) === null || c === void 0 || c.call(r, l),
            o.next(l)
        }
        , () => {
            var l;
            a = !1,
            (l = r.complete) === null || l === void 0 || l.call(r),
            o.complete()
        }
        , l => {
            var c;
            a = !1,
            (c = r.error) === null || c === void 0 || c.call(r, l),
            o.error(l)
        }
        , () => {
            var l, c;
            a && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)),
            (c = r.finalize) === null || c === void 0 || c.call(r)
        }
        ))
    }
    ) : St
}
function Fw(e, t) {
    return j( (n, r) => {
        let {leading: i=!0, trailing: o=!1} = t ?? {}
          , s = !1
          , a = null
          , l = null
          , c = !1
          , f = () => {
            l?.unsubscribe(),
            l = null,
            o && (y(),
            c && r.complete())
        }
          , p = () => {
            l = null,
            c && r.complete()
        }
          , m = v => l = ie(e(v)).subscribe(L(r, f, p))
          , y = () => {
            if (s) {
                s = !1;
                let v = a;
                a = null,
                r.next(v),
                !c && m(v)
            }
        }
        ;
        n.subscribe(L(r, v => {
            s = !0,
            a = v,
            !(l && !l.closed) && (i ? y() : m(v))
        }
        , () => {
            c = !0,
            !(o && s && l && !l.closed) && r.complete()
        }
        ))
    }
    )
}
function uF(e, t=$t, n) {
    let r = un(e, t);
    return Fw( () => r, n)
}
function lF(e=$t) {
    return j( (t, n) => {
        let r = e.now();
        t.subscribe(L(n, i => {
            let o = e.now()
              , s = o - r;
            r = o,
            n.next(new hm(i,s))
        }
        ))
    }
    )
}
var hm = class {
    constructor(t, n) {
        this.value = t,
        this.interval = n
    }
}
;
function Rw(...e) {
    let t = Er(e);
    return j( (n, r) => {
        let i = e.length
          , o = new Array(i)
          , s = e.map( () => !1)
          , a = !1;
        for (let l = 0; l < i; l++)
            ie(e[l]).subscribe(L(r, c => {
                o[l] = c,
                !a && !s[l] && (s[l] = !0,
                (a = s.every(St)) && (s = null))
            }
            , Sn));
        n.subscribe(L(r, l => {
            if (a) {
                let c = [l, ...o];
                r.next(t ? t(...c) : c)
            }
        }
        ))
    }
    )
}
var jD = "https://g.co/ng/security#xss"
  , ce = class extends Error {
    code;
    constructor(t, n) {
        super(Bg(t, n)),
        this.code = t
    }
}
;
function Bg(e, t) {
    return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`
}
var jd = Symbol("InputSignalNode#UNSET")
  , BD = We(Te({}, jp), {
    transformFn: void 0,
    applyValueToInputSignal(e, t) {
        ru(e, t)
    }
});
function HD(e, t) {
    let n = Object.create(BD);
    n.value = e,
    n.transformFn = t?.transform;
    function r() {
        if (eu(n),
        n.value === jd)
            throw new ce(-950,!1);
        return n.value
    }
    return r[Ut] = n,
    r
}
function Tu(e) {
    return {
        toString: e
    }.toString()
}
var Wc = "__parameters__";
function cF(e) {
    return function(...n) {
        if (e) {
            let r = e(...n);
            for (let i in r)
                this[i] = r[i]
        }
    }
}
function Hg(e, t, n) {
    return Tu( () => {
        let r = cF(t);
        function i(...o) {
            if (this instanceof i)
                return r.apply(this, o),
                this;
            let s = new i(...o);
            return a.annotation = s,
            a;
            function a(l, c, f) {
                let p = l.hasOwnProperty(Wc) ? l[Wc] : Object.defineProperty(l, Wc, {
                    value: []
                })[Wc];
                for (; p.length <= f; )
                    p.push(null);
                return (p[f] = p[f] || []).push(s),
                l
            }
        }
        return n && (i.prototype = Object.create(n.prototype)),
        i.prototype.ngMetadataName = e,
        i.annotationCls = i,
        i
    }
    )
}
var ji = globalThis;
function qe(e) {
    for (let t in e)
        if (e[t] === qe)
            return t;
    throw Error("Could not find renamed property on target object.")
}
function dF(e, t) {
    for (let n in t)
        t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
}
function dn(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return "[" + e.map(dn).join(", ") + "]";
    if (e == null)
        return "" + e;
    if (e.overriddenName)
        return `${e.overriddenName}`;
    if (e.name)
        return `${e.name}`;
    let t = e.toString();
    if (t == null)
        return "" + t;
    let n = t.indexOf(`
`);
    return n === -1 ? t : t.substring(0, n)
}
function Tm(e, t) {
    return e == null || e === "" ? t === null ? "" : t : t == null || t === "" ? e : e + " " + t
}
var fF = qe({
    __forward_ref__: qe
});
function Ct(e) {
    return e.__forward_ref__ = Ct,
    e.toString = function() {
        return dn(this())
    }
    ,
    e
}
function ln(e) {
    return UD(e) ? e() : e
}
function UD(e) {
    return typeof e == "function" && e.hasOwnProperty(fF) && e.__forward_ref__ === Ct
}
function me(e) {
    return {
        token: e.token,
        providedIn: e.providedIn || null,
        factory: e.factory,
        value: void 0
    }
}
function qi(e) {
    return {
        providers: e.providers || [],
        imports: e.imports || []
    }
}
function Bd(e) {
    return Lw(e, $D) || Lw(e, YD)
}
function jee(e) {
    return Bd(e) !== null
}
function Lw(e, t) {
    return e.hasOwnProperty(t) ? e[t] : null
}
function hF(e) {
    let t = e && (e[$D] || e[YD]);
    return t || null
}
function Vw(e) {
    return e && (e.hasOwnProperty(jw) || e.hasOwnProperty(pF)) ? e[jw] : null
}
var $D = qe({
    \u0275prov: qe
})
  , jw = qe({
    \u0275inj: qe
})
  , YD = qe({
    ngInjectableDef: qe
})
  , pF = qe({
    ngInjectorDef: qe
})
  , ue = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) {
        this._desc = t,
        this.\u0275prov = void 0,
        typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = me({
            token: this,
            providedIn: n.providedIn || "root",
            factory: n.factory
        }))
    }
    get multi() {
        return this
    }
    toString() {
        return `InjectionToken ${this._desc}`
    }
}
;
function WD(e) {
    return e && !!e.\u0275providers
}
var mF = qe({
    \u0275cmp: qe
})
  , gF = qe({
    \u0275dir: qe
})
  , yF = qe({
    \u0275pipe: qe
})
  , vF = qe({
    \u0275mod: qe
})
  , sd = qe({
    \u0275fac: qe
})
  , yu = qe({
    __NG_ELEMENT_ID__: qe
})
  , Bw = qe({
    __NG_ENV_ID__: qe
});
function nr(e) {
    return typeof e == "string" ? e : e == null ? "" : String(e)
}
function _F(e) {
    return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : nr(e)
}
function wF(e, t) {
    let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
    throw new ce(-200,e)
}
function Ug(e, t) {
    throw new ce(-201,!1)
}
var ke = function(e) {
    return e[e.Default = 0] = "Default",
    e[e.Host = 1] = "Host",
    e[e.Self = 2] = "Self",
    e[e.SkipSelf = 4] = "SkipSelf",
    e[e.Optional = 8] = "Optional",
    e
}(ke || {}), km;
function zD() {
    return km
}
function Dn(e) {
    let t = km;
    return km = e,
    t
}
function GD(e, t, n) {
    let r = Bd(e);
    if (r && r.providedIn == "root")
        return r.value === void 0 ? r.value = r.factory() : r.value;
    if (n & ke.Optional)
        return null;
    if (t !== void 0)
        return t;
    Ug(e, "Injector")
}
var DF = {}, vu = DF, Nm = "__NG_DI_FLAG__", ad = "ngTempTokenPath", xF = "ngTokenPath", CF = /\n/gm, MF = "\u0275", Hw = "__source", $s;
function bF() {
    return $s
}
function Vi(e) {
    let t = $s;
    return $s = e,
    t
}
function IF(e, t=ke.Default) {
    if ($s === void 0)
        throw new ce(-203,!1);
    return $s === null ? GD(e, void 0, t) : $s.get(e, t & ke.Optional ? null : void 0, t)
}
function ze(e, t=ke.Default) {
    return (zD() || IF)(ln(e), t)
}
function Y(e, t=ke.Default) {
    return ze(e, Hd(t))
}
function Hd(e) {
    return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4)
}
function Om(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = ln(e[n]);
        if (Array.isArray(r)) {
            if (r.length === 0)
                throw new ce(900,!1);
            let i, o = ke.Default;
            for (let s = 0; s < r.length; s++) {
                let a = r[s]
                  , l = EF(a);
                typeof l == "number" ? l === -1 ? i = a.token : o |= l : i = a
            }
            t.push(ze(i, o))
        } else
            t.push(ze(r))
    }
    return t
}
function $g(e, t) {
    return e[Nm] = t,
    e.prototype[Nm] = t,
    e
}
function EF(e) {
    return e[Nm]
}
function SF(e, t, n, r) {
    let i = e[ad];
    throw t[Hw] && i.unshift(t[Hw]),
    e.message = TF(`
` + e.message, i, n, r),
    e[xF] = i,
    e[ad] = null,
    e
}
function TF(e, t, n, r=null) {
    e = e && e.charAt(0) === `
` && e.charAt(1) == MF ? e.slice(2) : e;
    let i = dn(t);
    if (Array.isArray(t))
        i = t.map(dn).join(" -> ");
    else if (typeof t == "object") {
        let o = [];
        for (let s in t)
            if (t.hasOwnProperty(s)) {
                let a = t[s];
                o.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : dn(a)))
            }
        i = `{${o.join(", ")}}`
    }
    return `${n}${r ? "(" + r + ")" : ""}[${i}]: ${e.replace(CF, `
  `)}`
}
var Bee = $g(Hg("Inject", e => ({
    token: e
})), -1)
  , qD = $g(Hg("Optional"), 8);
var ZD = $g(Hg("SkipSelf"), 4);
function Po(e, t) {
    let n = e.hasOwnProperty(sd);
    return n ? e[sd] : null
}
function kF(e, t, n) {
    if (e.length !== t.length)
        return !1;
    for (let r = 0; r < e.length; r++) {
        let i = e[r]
          , o = t[r];
        if (n && (i = n(i),
        o = n(o)),
        o !== i)
            return !1
    }
    return !0
}
function NF(e) {
    return e.flat(Number.POSITIVE_INFINITY)
}
function Yg(e, t) {
    e.forEach(n => Array.isArray(n) ? Yg(n, t) : t(n))
}
function QD(e, t, n) {
    t >= e.length ? e.push(n) : e.splice(t, 0, n)
}
function ud(e, t) {
    return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
}
function OF(e, t) {
    let n = [];
    for (let r = 0; r < e; r++)
        n.push(t);
    return n
}
function Uw(e, t, n) {
    let r = e.length - n;
    for (; t < r; )
        e[t] = e[t + n],
        t++;
    for (; n--; )
        e.pop()
}
function XD(e, t, n, r) {
    let i = e.length;
    if (i == t)
        e.push(n, r);
    else if (i === 1)
        e.push(r, e[0]),
        e[0] = n;
    else {
        for (i--,
        e.push(e[i - 1], e[i]); i > t; ) {
            let o = i - 2;
            e[i] = e[o],
            i--
        }
        e[t] = n,
        e[t + 1] = r
    }
}
function na(e, t, n) {
    let r = ku(e, t);
    return r >= 0 ? e[r | 1] = n : (r = ~r,
    XD(e, r, t, n)),
    r
}
function pm(e, t) {
    let n = ku(e, t);
    if (n >= 0)
        return e[n | 1]
}
function ku(e, t) {
    return AF(e, t, 1)
}
function AF(e, t, n) {
    let r = 0
      , i = e.length >> n;
    for (; i !== r; ) {
        let o = r + (i - r >> 1)
          , s = e[o << n];
        if (t === s)
            return o << n;
        s > t ? i = o : r = o + 1
    }
    return ~(i << n)
}
var Gs = {}
  , cn = []
  , ld = new ue("")
  , JD = new ue("",-1)
  , KD = new ue("")
  , cd = class {
    get(t, n=vu) {
        if (n === vu) {
            let r = new Error(`NullInjectorError: No provider for ${dn(t)}!`);
            throw r.name = "NullInjectorError",
            r
        }
        return n
    }
}
;
function ex(e, t) {
    let n = e[vF] || null;
    if (!n && t === !0)
        throw new Error(`Type ${dn(e)} does not have '\u0275mod' property.`);
    return n
}
function Ar(e) {
    return e[mF] || null
}
function Wg(e) {
    return e[gF] || null
}
function zg(e) {
    return e[yF] || null
}
function PF(e) {
    let t = Ar(e) || Wg(e) || zg(e);
    return t !== null ? t.standalone : !1
}
function Gg(e) {
    return {
        \u0275providers: e
    }
}
function FF(...e) {
    return {
        \u0275providers: qg(!0, e),
        \u0275fromNgModule: !0
    }
}
function qg(e, ...t) {
    let n = [], r = new Set, i, o = s => {
        n.push(s)
    }
    ;
    return Yg(t, s => {
        let a = s;
        Am(a, o, [], r) && (i ||= [],
        i.push(a))
    }
    ),
    i !== void 0 && tx(i, o),
    n
}
function tx(e, t) {
    for (let n = 0; n < e.length; n++) {
        let {ngModule: r, providers: i} = e[n];
        Zg(i, o => {
            t(o, r)
        }
        )
    }
}
function Am(e, t, n, r) {
    if (e = ln(e),
    !e)
        return !1;
    let i = null
      , o = Vw(e)
      , s = !o && Ar(e);
    if (!o && !s) {
        let l = e.ngModule;
        if (o = Vw(l),
        o)
            i = l;
        else
            return !1
    } else {
        if (s && !s.standalone)
            return !1;
        i = e
    }
    let a = r.has(i);
    if (s) {
        if (a)
            return !1;
        if (r.add(i),
        s.dependencies) {
            let l = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
            for (let c of l)
                Am(c, t, n, r)
        }
    } else if (o) {
        if (o.imports != null && !a) {
            r.add(i);
            let c;
            try {
                Yg(o.imports, f => {
                    Am(f, t, n, r) && (c ||= [],
                    c.push(f))
                }
                )
            } finally {}
            c !== void 0 && tx(c, t)
        }
        if (!a) {
            let c = Po(i) || ( () => new i);
            t({
                provide: i,
                useFactory: c,
                deps: cn
            }, i),
            t({
                provide: KD,
                useValue: i,
                multi: !0
            }, i),
            t({
                provide: ld,
                useValue: () => ze(i),
                multi: !0
            }, i)
        }
        let l = o.providers;
        if (l != null && !a) {
            let c = e;
            Zg(l, f => {
                t(f, c)
            }
            )
        }
    } else
        return !1;
    return i !== e && e.providers !== void 0
}
function Zg(e, t) {
    for (let n of e)
        WD(n) && (n = n.\u0275providers),
        Array.isArray(n) ? Zg(n, t) : t(n)
}
var RF = qe({
    provide: String,
    useValue: qe
});
function nx(e) {
    return e !== null && typeof e == "object" && RF in e
}
function LF(e) {
    return !!(e && e.useExisting)
}
function VF(e) {
    return !!(e && e.useFactory)
}
function qs(e) {
    return typeof e == "function"
}
function jF(e) {
    return !!e.useClass
}
var rx = new ue(""), Jc = {}, BF = {}, mm;
function Ud() {
    return mm === void 0 && (mm = new cd),
    mm
}
var ir = class {
}
  , _u = class extends ir {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() {
        return this._destroyed
    }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, r, i) {
        super(),
        this.parent = n,
        this.source = r,
        this.scopes = i,
        Fm(t, s => this.processProvider(s)),
        this.records.set(JD, js(void 0, this)),
        i.has("environment") && this.records.set(ir, js(void 0, this));
        let o = this.records.get(rx);
        o != null && typeof o.value == "string" && this.scopes.add(o.value),
        this.injectorDefTypes = new Set(this.get(KD, cn, ke.Self))
    }
    destroy() {
        pu(this),
        this._destroyed = !0;
        let t = Me(null);
        try {
            for (let r of this._ngOnDestroyHooks)
                r.ngOnDestroy();
            let n = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (let r of n)
                r()
        } finally {
            this.records.clear(),
            this._ngOnDestroyHooks.clear(),
            this.injectorDefTypes.clear(),
            Me(t)
        }
    }
    onDestroy(t) {
        return pu(this),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
    }
    runInContext(t) {
        pu(this);
        let n = Vi(this), r = Dn(void 0), i;
        try {
            return t()
        } finally {
            Vi(n),
            Dn(r)
        }
    }
    get(t, n=vu, r=ke.Default) {
        if (pu(this),
        t.hasOwnProperty(Bw))
            return t[Bw](this);
        r = Hd(r);
        let i, o = Vi(this), s = Dn(void 0);
        try {
            if (!(r & ke.SkipSelf)) {
                let l = this.records.get(t);
                if (l === void 0) {
                    let c = WF(t) && Bd(t);
                    c && this.injectableDefInScope(c) ? l = js(Pm(t), Jc) : l = null,
                    this.records.set(t, l)
                }
                if (l != null)
                    return this.hydrate(t, l)
            }
            let a = r & ke.Self ? Ud() : this.parent;
            return n = r & ke.Optional && n === vu ? null : n,
            a.get(t, n)
        } catch (a) {
            if (a.name === "NullInjectorError") {
                if ((a[ad] = a[ad] || []).unshift(dn(t)),
                o)
                    throw a;
                return SF(a, t, "R3InjectorError", this.source)
            } else
                throw a
        } finally {
            Dn(s),
            Vi(o)
        }
    }
    resolveInjectorInitializers() {
        let t = Me(null), n = Vi(this), r = Dn(void 0), i;
        try {
            let o = this.get(ld, cn, ke.Self);
            for (let s of o)
                s()
        } finally {
            Vi(n),
            Dn(r),
            Me(t)
        }
    }
    toString() {
        let t = []
          , n = this.records;
        for (let r of n.keys())
            t.push(dn(r));
        return `R3Injector[${t.join(", ")}]`
    }
    processProvider(t) {
        t = ln(t);
        let n = qs(t) ? t : ln(t && t.provide)
          , r = UF(t);
        if (!qs(t) && t.multi === !0) {
            let i = this.records.get(n);
            i || (i = js(void 0, Jc, !0),
            i.factory = () => Om(i.multi),
            this.records.set(n, i)),
            n = t,
            i.multi.push(t)
        }
        this.records.set(n, r)
    }
    hydrate(t, n) {
        let r = Me(null);
        try {
            return n.value === Jc && (n.value = BF,
            n.value = n.factory()),
            typeof n.value == "object" && n.value && YF(n.value) && this._ngOnDestroyHooks.add(n.value),
            n.value
        } finally {
            Me(r)
        }
    }
    injectableDefInScope(t) {
        if (!t.providedIn)
            return !1;
        let n = ln(t.providedIn);
        return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n)
    }
    removeOnDestroy(t) {
        let n = this._onDestroyHooks.indexOf(t);
        n !== -1 && this._onDestroyHooks.splice(n, 1)
    }
}
;
function Pm(e) {
    let t = Bd(e)
      , n = t !== null ? t.factory : Po(e);
    if (n !== null)
        return n;
    if (e instanceof ue)
        throw new ce(204,!1);
    if (e instanceof Function)
        return HF(e);
    throw new ce(204,!1)
}
function HF(e) {
    if (e.length > 0)
        throw new ce(204,!1);
    let n = hF(e);
    return n !== null ? () => n.factory(e) : () => new e
}
function UF(e) {
    if (nx(e))
        return js(void 0, e.useValue);
    {
        let t = ix(e);
        return js(t, Jc)
    }
}
function ix(e, t, n) {
    let r;
    if (qs(e)) {
        let i = ln(e);
        return Po(i) || Pm(i)
    } else if (nx(e))
        r = () => ln(e.useValue);
    else if (VF(e))
        r = () => e.useFactory(...Om(e.deps || []));
    else if (LF(e))
        r = () => ze(ln(e.useExisting));
    else {
        let i = ln(e && (e.useClass || e.provide));
        if ($F(e))
            r = () => new i(...Om(e.deps));
        else
            return Po(i) || Pm(i)
    }
    return r
}
function pu(e) {
    if (e.destroyed)
        throw new ce(205,!1)
}
function js(e, t, n=!1) {
    return {
        factory: e,
        value: t,
        multi: n ? [] : void 0
    }
}
function $F(e) {
    return !!e.deps
}
function YF(e) {
    return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
}
function WF(e) {
    return typeof e == "function" || typeof e == "object" && e instanceof ue
}
function Fm(e, t) {
    for (let n of e)
        Array.isArray(n) ? Fm(n, t) : n && WD(n) ? Fm(n.\u0275providers, t) : t(n)
}
function $d(e, t) {
    e instanceof _u && pu(e);
    let n, r = Vi(e), i = Dn(void 0);
    try {
        return t()
    } finally {
        Vi(r),
        Dn(i)
    }
}
function ox() {
    return zD() !== void 0 || bF() != null
}
function Zi(e) {
    if (!ox())
        throw new ce(-203,!1)
}
function zF(e) {
    return typeof e == "function"
}
var ui = 0
  , ae = 1
  , le = 2
  , Yt = 3
  , rr = 4
  , Mn = 5
  , Zs = 6
  , dd = 7
  , en = 8
  , Nn = 9
  , oi = 10
  , at = 11
  , wu = 12
  , $w = 13
  , ra = 14
  , On = 15
  , Fo = 16
  , Bs = 17
  , si = 18
  , Yd = 19
  , sx = 20
  , Hi = 21
  , Kc = 22
  , Ro = 23
  , kn = 24
  , ht = 25
  , ax = 1
  , fd = 6
  , Lo = 7
  , hd = 8
  , Qs = 9
  , tn = 10
  , pd = function(e) {
    return e[e.None = 0] = "None",
    e[e.HasTransplantedViews = 2] = "HasTransplantedViews",
    e
}(pd || {});
function Ui(e) {
    return Array.isArray(e) && typeof e[ax] == "object"
}
function li(e) {
    return Array.isArray(e) && e[ax] === !0
}
function Qg(e) {
    return (e.flags & 4) !== 0
}
function Wd(e) {
    return e.componentOffset > -1
}
function zd(e) {
    return (e.flags & 1) === 1
}
function $i(e) {
    return !!e.template
}
function Rm(e) {
    return (e[le] & 512) !== 0
}
function GF(e) {
    return (e[le] & 256) === 256
}
var Lm = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, r) {
        this.previousValue = t,
        this.currentValue = n,
        this.firstChange = r
    }
    isFirstChange() {
        return this.firstChange
    }
}
;
function ux(e, t, n, r) {
    t !== null ? t.applyValueToInputSignal(t, r) : e[n] = r
}
var nn = ( () => {
    let e = () => lx;
    return e.ngInherit = !0,
    e
}
)();
function lx(e) {
    return e.type.prototype.ngOnChanges && (e.setInput = ZF),
    qF
}
function qF() {
    let e = dx(this)
      , t = e?.current;
    if (t) {
        let n = e.previous;
        if (n === Gs)
            e.previous = t;
        else
            for (let r in t)
                n[r] = t[r];
        e.current = null,
        this.ngOnChanges(t)
    }
}
function ZF(e, t, n, r, i) {
    let o = this.declaredInputs[r]
      , s = dx(e) || QF(e, {
        previous: Gs,
        current: null
    })
      , a = s.current || (s.current = {})
      , l = s.previous
      , c = l[o];
    a[o] = new Lm(c && c.currentValue,n,l === Gs),
    ux(e, t, i, n)
}
var cx = "__ngSimpleChanges__";
function dx(e) {
    return e[cx] || null
}
function QF(e, t) {
    return e[cx] = t
}
var Yw = null;
var Nr = function(e, t, n) {
    Yw?.(e, t, n)
}
  , fx = "svg"
  , XF = "math";
function Pr(e) {
    for (; Array.isArray(e); )
        e = e[ui];
    return e
}
function hx(e, t) {
    return Pr(t[e])
}
function zn(e, t) {
    return Pr(t[e.index])
}
function Nu(e, t) {
    return e.data[t]
}
function Gd(e, t) {
    return e[t]
}
function Qi(e, t) {
    let n = t[e];
    return Ui(n) ? n : n[ui]
}
function JF(e) {
    return (e[le] & 4) === 4
}
function Xg(e) {
    return (e[le] & 128) === 128
}
function KF(e) {
    return li(e[Yt])
}
function Fr(e, t) {
    return t == null ? null : e[t]
}
function px(e) {
    e[Bs] = 0
}
function Jg(e) {
    e[le] & 1024 || (e[le] |= 1024,
    Xg(e) && Ou(e))
}
function eR(e, t) {
    for (; e > 0; )
        t = t[ra],
        e--;
    return t
}
function qd(e) {
    return !!(e[le] & 9216 || e[kn]?.dirty)
}
function Vm(e) {
    e[oi].changeDetectionScheduler?.notify(9),
    e[le] & 64 && (e[le] |= 1024),
    qd(e) && Ou(e)
}
function Ou(e) {
    e[oi].changeDetectionScheduler?.notify(0);
    let t = Vo(e);
    for (; t !== null && !(t[le] & 8192 || (t[le] |= 8192,
    !Xg(t))); )
        t = Vo(t)
}
function Kg(e, t) {
    if ((e[le] & 256) === 256)
        throw new ce(911,!1);
    e[Hi] === null && (e[Hi] = []),
    e[Hi].push(t)
}
function mx(e, t) {
    if (e[Hi] === null)
        return;
    let n = e[Hi].indexOf(t);
    n !== -1 && e[Hi].splice(n, 1)
}
function Vo(e) {
    let t = e[Yt];
    return li(t) ? t[Yt] : t
}
var De = {
    lFrame: Cx(null),
    bindingsEnabled: !0,
    skipHydrationRootTNode: null
};
var jm = !1;
function tR() {
    return De.lFrame.elementDepthCount
}
function nR() {
    De.lFrame.elementDepthCount++
}
function rR() {
    De.lFrame.elementDepthCount--
}
function gx() {
    return De.bindingsEnabled
}
function yx() {
    return De.skipHydrationRootTNode !== null
}
function iR(e) {
    return De.skipHydrationRootTNode === e
}
function oR() {
    De.skipHydrationRootTNode = null
}
function K() {
    return De.lFrame.lView
}
function Ze() {
    return De.lFrame.tView
}
function fe(e) {
    return De.lFrame.contextLView = e,
    e[en]
}
function he(e) {
    return De.lFrame.contextLView = null,
    e
}
function Mt() {
    let e = vx();
    for (; e !== null && e.type === 64; )
        e = e.parent;
    return e
}
function vx() {
    return De.lFrame.currentTNode
}
function sR() {
    let e = De.lFrame
      , t = e.currentTNode;
    return e.isParent ? t : t.parent
}
function Xi(e, t) {
    let n = De.lFrame;
    n.currentTNode = e,
    n.isParent = t
}
function ey() {
    return De.lFrame.isParent
}
function ty() {
    De.lFrame.isParent = !1
}
function aR() {
    return De.lFrame.contextLView
}
function _x() {
    return jm
}
function md(e) {
    let t = jm;
    return jm = e,
    t
}
function Rr() {
    let e = De.lFrame
      , t = e.bindingRootIndex;
    return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex),
    t
}
function wx() {
    return De.lFrame.bindingIndex
}
function uR(e) {
    return De.lFrame.bindingIndex = e
}
function Ji() {
    return De.lFrame.bindingIndex++
}
function Zd(e) {
    let t = De.lFrame
      , n = t.bindingIndex;
    return t.bindingIndex = t.bindingIndex + e,
    n
}
function lR() {
    return De.lFrame.inI18n
}
function cR(e, t) {
    let n = De.lFrame;
    n.bindingIndex = n.bindingRootIndex = e,
    Bm(t)
}
function dR() {
    return De.lFrame.currentDirectiveIndex
}
function Bm(e) {
    De.lFrame.currentDirectiveIndex = e
}
function fR(e) {
    let t = De.lFrame.currentDirectiveIndex;
    return t === -1 ? null : e[t]
}
function ny() {
    return De.lFrame.currentQueryIndex
}
function Qd(e) {
    De.lFrame.currentQueryIndex = e
}
function hR(e) {
    let t = e[ae];
    return t.type === 2 ? t.declTNode : t.type === 1 ? e[Mn] : null
}
function Dx(e, t, n) {
    if (n & ke.SkipSelf) {
        let i = t
          , o = e;
        for (; i = i.parent,
        i === null && !(n & ke.Host); )
            if (i = hR(o),
            i === null || (o = o[ra],
            i.type & 10))
                break;
        if (i === null)
            return !1;
        t = i,
        e = o
    }
    let r = De.lFrame = xx();
    return r.currentTNode = t,
    r.lView = e,
    !0
}
function ry(e) {
    let t = xx()
      , n = e[ae];
    De.lFrame = t,
    t.currentTNode = n.firstChild,
    t.lView = e,
    t.tView = n,
    t.contextLView = e,
    t.bindingIndex = n.bindingStartIndex,
    t.inI18n = !1
}
function xx() {
    let e = De.lFrame
      , t = e === null ? null : e.child;
    return t === null ? Cx(e) : t
}
function Cx(e) {
    let t = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: e,
        child: null,
        inI18n: !1
    };
    return e !== null && (e.child = t),
    t
}
function Mx() {
    let e = De.lFrame;
    return De.lFrame = e.parent,
    e.currentTNode = null,
    e.lView = null,
    e
}
var bx = Mx;
function iy() {
    let e = Mx();
    e.isParent = !0,
    e.tView = null,
    e.selectedIndex = -1,
    e.contextLView = null,
    e.elementDepthCount = 0,
    e.currentDirectiveIndex = -1,
    e.currentNamespace = null,
    e.bindingRootIndex = -1,
    e.bindingIndex = -1,
    e.currentQueryIndex = 0
}
function pR(e) {
    return (De.lFrame.contextLView = eR(e, De.lFrame.contextLView))[en]
}
function Lr() {
    return De.lFrame.selectedIndex
}
function jo(e) {
    De.lFrame.selectedIndex = e
}
function qo() {
    let e = De.lFrame;
    return Nu(e.tView, e.selectedIndex)
}
function or() {
    De.lFrame.currentNamespace = fx
}
function Ki() {
    mR()
}
function mR() {
    De.lFrame.currentNamespace = null
}
function gR() {
    return De.lFrame.currentNamespace
}
var Ix = !0;
function Xd() {
    return Ix
}
function Jd(e) {
    Ix = e
}
function yR(e, t, n) {
    let {ngOnChanges: r, ngOnInit: i, ngDoCheck: o} = t.type.prototype;
    if (r) {
        let s = lx(t);
        (n.preOrderHooks ??= []).push(e, s),
        (n.preOrderCheckHooks ??= []).push(e, s)
    }
    i && (n.preOrderHooks ??= []).push(0 - e, i),
    o && ((n.preOrderHooks ??= []).push(e, o),
    (n.preOrderCheckHooks ??= []).push(e, o))
}
function Kd(e, t) {
    for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
        let o = e.data[n].type.prototype
          , {ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: l, ngAfterViewChecked: c, ngOnDestroy: f} = o;
        s && (e.contentHooks ??= []).push(-n, s),
        a && ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
        l && (e.viewHooks ??= []).push(-n, l),
        c && ((e.viewHooks ??= []).push(n, c),
        (e.viewCheckHooks ??= []).push(n, c)),
        f != null && (e.destroyHooks ??= []).push(n, f)
    }
}
function ed(e, t, n) {
    Ex(e, t, 3, n)
}
function td(e, t, n, r) {
    (e[le] & 3) === n && Ex(e, t, n, r)
}
function gm(e, t) {
    let n = e[le];
    (n & 3) === t && (n &= 16383,
    n += 1,
    e[le] = n)
}
function Ex(e, t, n, r) {
    let i = r !== void 0 ? e[Bs] & 65535 : 0
      , o = r ?? -1
      , s = t.length - 1
      , a = 0;
    for (let l = i; l < s; l++)
        if (typeof t[l + 1] == "number") {
            if (a = t[l],
            r != null && a >= r)
                break
        } else
            t[l] < 0 && (e[Bs] += 65536),
            (a < o || o == -1) && (vR(e, n, t, l),
            e[Bs] = (e[Bs] & 4294901760) + l + 2),
            l++
}
function Ww(e, t) {
    Nr(4, e, t);
    let n = Me(null);
    try {
        t.call(e)
    } finally {
        Me(n),
        Nr(5, e, t)
    }
}
function vR(e, t, n, r) {
    let i = n[r] < 0
      , o = n[r + 1]
      , s = i ? -n[r] : n[r]
      , a = e[s];
    i ? e[le] >> 14 < e[Bs] >> 16 && (e[le] & 3) === t && (e[le] += 16384,
    Ww(a, o)) : Ww(a, o)
}
var Ys = -1
  , Bo = class {
    factory;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, r) {
        this.factory = t,
        this.canSeeViewProviders = n,
        this.injectImpl = r
    }
}
;
function _R(e) {
    return e instanceof Bo
}
function wR(e) {
    return (e.flags & 8) !== 0
}
function DR(e) {
    return (e.flags & 16) !== 0
}
function Hm(e, t, n) {
    let r = 0;
    for (; r < n.length; ) {
        let i = n[r];
        if (typeof i == "number") {
            if (i !== 0)
                break;
            r++;
            let o = n[r++]
              , s = n[r++]
              , a = n[r++];
            e.setAttribute(t, s, a, o)
        } else {
            let o = i
              , s = n[++r];
            xR(o) ? e.setProperty(t, o, s) : e.setAttribute(t, o, s),
            r++
        }
    }
    return r
}
function Sx(e) {
    return e === 3 || e === 4 || e === 6
}
function xR(e) {
    return e.charCodeAt(0) === 64
}
function Du(e, t) {
    if (!(t === null || t.length === 0))
        if (e === null || e.length === 0)
            e = t.slice();
        else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
                let i = t[r];
                typeof i == "number" ? n = i : n === 0 || (n === -1 || n === 2 ? zw(e, n, i, null, t[++r]) : zw(e, n, i, null, null))
            }
        }
    return e
}
function zw(e, t, n, r, i) {
    let o = 0
      , s = e.length;
    if (t === -1)
        s = -1;
    else
        for (; o < e.length; ) {
            let a = e[o++];
            if (typeof a == "number") {
                if (a === t) {
                    s = -1;
                    break
                } else if (a > t) {
                    s = o - 1;
                    break
                }
            }
        }
    for (; o < e.length; ) {
        let a = e[o];
        if (typeof a == "number")
            break;
        if (a === n) {
            if (r === null) {
                i !== null && (e[o + 1] = i);
                return
            } else if (r === e[o + 1]) {
                e[o + 2] = i;
                return
            }
        }
        o++,
        r !== null && o++,
        i !== null && o++
    }
    s !== -1 && (e.splice(s, 0, t),
    o = s + 1),
    e.splice(o++, 0, n),
    r !== null && e.splice(o++, 0, r),
    i !== null && e.splice(o++, 0, i)
}
var ym = {}
  , Ws = class {
    injector;
    parentInjector;
    constructor(t, n) {
        this.injector = t,
        this.parentInjector = n
    }
    get(t, n, r) {
        r = Hd(r);
        let i = this.injector.get(t, ym, r);
        return i !== ym || n === ym ? i : this.parentInjector.get(t, n, r)
    }
}
;
function Tx(e) {
    return e !== Ys
}
function gd(e) {
    return e & 32767
}
function CR(e) {
    return e >> 16
}
function yd(e, t) {
    let n = CR(e)
      , r = t;
    for (; n > 0; )
        r = r[ra],
        n--;
    return r
}
var Um = !0;
function vd(e) {
    let t = Um;
    return Um = e,
    t
}
var MR = 256
  , kx = MR - 1
  , Nx = 5
  , bR = 0
  , Or = {};
function IR(e, t, n) {
    let r;
    typeof n == "string" ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(yu) && (r = n[yu]),
    r == null && (r = n[yu] = bR++);
    let i = r & kx
      , o = 1 << i;
    t.data[e + (i >> Nx)] |= o
}
function _d(e, t) {
    let n = Ox(e, t);
    if (n !== -1)
        return n;
    let r = t[ae];
    r.firstCreatePass && (e.injectorIndex = t.length,
    vm(r.data, e),
    vm(t, null),
    vm(r.blueprint, null));
    let i = oy(e, t)
      , o = e.injectorIndex;
    if (Tx(i)) {
        let s = gd(i)
          , a = yd(i, t)
          , l = a[ae].data;
        for (let c = 0; c < 8; c++)
            t[o + c] = a[s + c] | l[s + c]
    }
    return t[o + 8] = i,
    o
}
function vm(e, t) {
    e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
}
function Ox(e, t) {
    return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex
}
function oy(e, t) {
    if (e.parent && e.parent.injectorIndex !== -1)
        return e.parent.injectorIndex;
    let n = 0
      , r = null
      , i = t;
    for (; i !== null; ) {
        if (r = Lx(i),
        r === null)
            return Ys;
        if (n++,
        i = i[ra],
        r.injectorIndex !== -1)
            return r.injectorIndex | n << 16
    }
    return Ys
}
function $m(e, t, n) {
    IR(e, t, n)
}
function ER(e, t) {
    if (t === "class")
        return e.classes;
    if (t === "style")
        return e.styles;
    let n = e.attrs;
    if (n) {
        let r = n.length
          , i = 0;
        for (; i < r; ) {
            let o = n[i];
            if (Sx(o))
                break;
            if (o === 0)
                i = i + 2;
            else if (typeof o == "number")
                for (i++; i < r && typeof n[i] == "string"; )
                    i++;
            else {
                if (o === t)
                    return n[i + 1];
                i = i + 2
            }
        }
    }
    return null
}
function Ax(e, t, n) {
    if (n & ke.Optional || e !== void 0)
        return e;
    Ug(t, "NodeInjector")
}
function Px(e, t, n, r) {
    if (n & ke.Optional && r === void 0 && (r = null),
    !(n & (ke.Self | ke.Host))) {
        let i = e[Nn]
          , o = Dn(void 0);
        try {
            return i ? i.get(t, r, n & ke.Optional) : GD(t, r, n & ke.Optional)
        } finally {
            Dn(o)
        }
    }
    return Ax(r, t, n)
}
function Fx(e, t, n, r=ke.Default, i) {
    if (e !== null) {
        if (t[le] & 2048 && !(r & ke.Self)) {
            let s = NR(e, t, n, r, Or);
            if (s !== Or)
                return s
        }
        let o = Rx(e, t, n, r, Or);
        if (o !== Or)
            return o
    }
    return Px(t, n, r, i)
}
function Rx(e, t, n, r, i) {
    let o = TR(n);
    if (typeof o == "function") {
        if (!Dx(t, e, r))
            return r & ke.Host ? Ax(i, n, r) : Px(t, n, r, i);
        try {
            let s;
            if (s = o(r),
            s == null && !(r & ke.Optional))
                Ug(n);
            else
                return s
        } finally {
            bx()
        }
    } else if (typeof o == "number") {
        let s = null
          , a = Ox(e, t)
          , l = Ys
          , c = r & ke.Host ? t[On][Mn] : null;
        for ((a === -1 || r & ke.SkipSelf) && (l = a === -1 ? oy(e, t) : t[a + 8],
        l === Ys || !qw(r, !1) ? a = -1 : (s = t[ae],
        a = gd(l),
        t = yd(l, t))); a !== -1; ) {
            let f = t[ae];
            if (Gw(o, a, f.data)) {
                let p = SR(a, t, n, s, r, c);
                if (p !== Or)
                    return p
            }
            l = t[a + 8],
            l !== Ys && qw(r, t[ae].data[a + 8] === c) && Gw(o, a, t) ? (s = f,
            a = gd(l),
            t = yd(l, t)) : a = -1
        }
    }
    return i
}
function SR(e, t, n, r, i, o) {
    let s = t[ae]
      , a = s.data[e + 8]
      , l = r == null ? Wd(a) && Um : r != s && (a.type & 3) !== 0
      , c = i & ke.Host && o === a
      , f = nd(a, s, n, l, c);
    return f !== null ? Ho(t, s, f, a) : Or
}
function nd(e, t, n, r, i) {
    let o = e.providerIndexes
      , s = t.data
      , a = o & 1048575
      , l = e.directiveStart
      , c = e.directiveEnd
      , f = o >> 20
      , p = r ? a : a + f
      , m = i ? a + f : c;
    for (let y = p; y < m; y++) {
        let v = s[y];
        if (y < l && n === v || y >= l && v.type === n)
            return y
    }
    if (i) {
        let y = s[l];
        if (y && $i(y) && y.type === n)
            return l
    }
    return null
}
function Ho(e, t, n, r) {
    let i = e[n]
      , o = t.data;
    if (_R(i)) {
        let s = i;
        s.resolving && wF(_F(o[n]));
        let a = vd(s.canSeeViewProviders);
        s.resolving = !0;
        let l, c = s.injectImpl ? Dn(s.injectImpl) : null, f = Dx(e, r, ke.Default);
        try {
            i = e[n] = s.factory(void 0, o, e, r),
            t.firstCreatePass && n >= r.directiveStart && yR(n, o[n], t)
        } finally {
            c !== null && Dn(c),
            vd(a),
            s.resolving = !1,
            bx()
        }
    }
    return i
}
function TR(e) {
    if (typeof e == "string")
        return e.charCodeAt(0) || 0;
    let t = e.hasOwnProperty(yu) ? e[yu] : void 0;
    return typeof t == "number" ? t >= 0 ? t & kx : kR : t
}
function Gw(e, t, n) {
    let r = 1 << e;
    return !!(n[t + (e >> Nx)] & r)
}
function qw(e, t) {
    return !(e & ke.Self) && !(e & ke.Host && t)
}
var Ao = class {
    _tNode;
    _lView;
    constructor(t, n) {
        this._tNode = t,
        this._lView = n
    }
    get(t, n, r) {
        return Fx(this._tNode, this._lView, t, Hd(r), n)
    }
}
;
function kR() {
    return new Ao(Mt(),K())
}
function An(e) {
    return Tu( () => {
        let t = e.prototype.constructor
          , n = t[sd] || Ym(t)
          , r = Object.prototype
          , i = Object.getPrototypeOf(e.prototype).constructor;
        for (; i && i !== r; ) {
            let o = i[sd] || Ym(i);
            if (o && o !== n)
                return o;
            i = Object.getPrototypeOf(i)
        }
        return o => new o
    }
    )
}
function Ym(e) {
    return UD(e) ? () => {
        let t = Ym(ln(e));
        return t && t()
    }
    : Po(e)
}
function NR(e, t, n, r, i) {
    let o = e
      , s = t;
    for (; o !== null && s !== null && s[le] & 2048 && !(s[le] & 512); ) {
        let a = Rx(o, s, n, r | ke.Self, Or);
        if (a !== Or)
            return a;
        let l = o.parent;
        if (!l) {
            let c = s[sx];
            if (c) {
                let f = c.get(n, Or, r);
                if (f !== Or)
                    return f
            }
            l = Lx(s),
            s = s[ra]
        }
        o = l
    }
    return i
}
function Lx(e) {
    let t = e[ae]
      , n = t.type;
    return n === 2 ? t.declTNode : n === 1 ? e[Mn] : null
}
function OR(e) {
    return ER(Mt(), e)
}
function Zw(e, t=null, n=null, r) {
    let i = Vx(e, t, n, r);
    return i.resolveInjectorInitializers(),
    i
}
function Vx(e, t=null, n=null, r, i=new Set) {
    let o = [n || cn, FF(e)];
    return r = r || (typeof e == "object" ? void 0 : dn(e)),
    new _u(o,t || Ud(),r || null,i)
}
var Cn = class e {
    static THROW_IF_NOT_FOUND = vu;
    static NULL = new cd;
    static create(t, n) {
        if (Array.isArray(t))
            return Zw({
                name: ""
            }, n, t, "");
        {
            let r = t.name ?? "";
            return Zw({
                name: r
            }, t.parent, t.providers, r)
        }
    }
    static \u0275prov = me({
        token: e,
        providedIn: "any",
        factory: () => ze(JD)
    });
    static __NG_ELEMENT_ID__ = -1
}
;
var AR = new ue("");
AR.__NG_ELEMENT_ID__ = e => {
    let t = Mt();
    if (t === null)
        throw new ce(204,!1);
    if (t.type & 2)
        return t.value;
    if (e & ke.Optional)
        return null;
    throw new ce(204,!1)
}
;
var jx = !1
  , Pn = ( () => {
    class e {
        static __NG_ELEMENT_ID__ = PR;
        static __NG_ENV_ID__ = n => n
    }
    return e
}
)()
  , wd = class extends Pn {
    _lView;
    constructor(t) {
        super(),
        this._lView = t
    }
    onDestroy(t) {
        return Kg(this._lView, t),
        () => mx(this._lView, t)
    }
}
;
function PR() {
    return new wd(K())
}
var Uo = class {
}
  , sy = new ue("",{
    providedIn: "root",
    factory: () => !1
});
var Bx = new ue("")
  , Hx = new ue("")
  , ci = ( () => {
    class e {
        taskId = 0;
        pendingTasks = new Set;
        get _hasPendingTasks() {
            return this.hasPendingTasks.value
        }
        hasPendingTasks = new Ni(!1);
        add() {
            this._hasPendingTasks || this.hasPendingTasks.next(!0);
            let n = this.taskId++;
            return this.pendingTasks.add(n),
            n
        }
        has(n) {
            return this.pendingTasks.has(n)
        }
        remove(n) {
            this.pendingTasks.delete(n),
            this.pendingTasks.size === 0 && this._hasPendingTasks && this.hasPendingTasks.next(!1)
        }
        ngOnDestroy() {
            this.pendingTasks.clear(),
            this._hasPendingTasks && this.hasPendingTasks.next(!1)
        }
        static \u0275prov = me({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)();
var Wm = class extends st {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t=!1) {
        super(),
        this.__isAsync = t,
        ox() && (this.destroyRef = Y(Pn, {
            optional: !0
        }) ?? void 0,
        this.pendingTasks = Y(ci, {
            optional: !0
        }) ?? void 0)
    }
    emit(t) {
        let n = Me(null);
        try {
            super.next(t)
        } finally {
            Me(n)
        }
    }
    subscribe(t, n, r) {
        let i = t
          , o = n || ( () => null)
          , s = r;
        if (t && typeof t == "object") {
            let l = t;
            i = l.next?.bind(l),
            o = l.error?.bind(l),
            s = l.complete?.bind(l)
        }
        this.__isAsync && (o = this.wrapInTimeout(o),
        i && (i = this.wrapInTimeout(i)),
        s && (s = this.wrapInTimeout(s)));
        let a = super.subscribe({
            next: i,
            error: o,
            complete: s
        });
        return t instanceof ct && t.add(a),
        a
    }
    wrapInTimeout(t) {
        return n => {
            let r = this.pendingTasks?.add();
            setTimeout( () => {
                t(n),
                r !== void 0 && this.pendingTasks?.remove(r)
            }
            )
        }
    }
}
  , dt = Wm;
function xu(...e) {}
function Ux(e) {
    let t, n;
    function r() {
        e = xu;
        try {
            n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n),
            t !== void 0 && clearTimeout(t)
        } catch {}
    }
    return t = setTimeout( () => {
        e(),
        r()
    }
    ),
    typeof requestAnimationFrame == "function" && (n = requestAnimationFrame( () => {
        e(),
        r()
    }
    )),
    () => r()
}
function Qw(e) {
    return queueMicrotask( () => e()),
    () => {
        e = xu
    }
}
var ay = "isAngularZone"
  , Dd = ay + "_ID"
  , FR = 0
  , Nt = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new dt(!1);
    onMicrotaskEmpty = new dt(!1);
    onStable = new dt(!1);
    onError = new dt(!1);
    constructor(t) {
        let {enableLongStackTrace: n=!1, shouldCoalesceEventChangeDetection: r=!1, shouldCoalesceRunChangeDetection: i=!1, scheduleInRootZone: o=jx} = t;
        if (typeof Zone > "u")
            throw new ce(908,!1);
        Zone.assertZonePatched();
        let s = this;
        s._nesting = 0,
        s._outer = s._inner = Zone.current,
        Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)),
        n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        s.shouldCoalesceEventChangeDetection = !i && r,
        s.shouldCoalesceRunChangeDetection = i,
        s.callbackScheduled = !1,
        s.scheduleInRootZone = o,
        VR(s)
    }
    static isInAngularZone() {
        return typeof Zone < "u" && Zone.current.get(ay) === !0
    }
    static assertInAngularZone() {
        if (!e.isInAngularZone())
            throw new ce(909,!1)
    }
    static assertNotInAngularZone() {
        if (e.isInAngularZone())
            throw new ce(909,!1)
    }
    run(t, n, r) {
        return this._inner.run(t, n, r)
    }
    runTask(t, n, r, i) {
        let o = this._inner
          , s = o.scheduleEventTask("NgZoneEvent: " + i, t, RR, xu, xu);
        try {
            return o.runTask(s, n, r)
        } finally {
            o.cancelTask(s)
        }
    }
    runGuarded(t, n, r) {
        return this._inner.runGuarded(t, n, r)
    }
    runOutsideAngular(t) {
        return this._outer.run(t)
    }
}
  , RR = {};
function uy(e) {
    if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
        try {
            e._nesting++,
            e.onMicrotaskEmpty.emit(null)
        } finally {
            if (e._nesting--,
            !e.hasPendingMicrotasks)
                try {
                    e.runOutsideAngular( () => e.onStable.emit(null))
                } finally {
                    e.isStable = !0
                }
        }
}
function LR(e) {
    if (e.isCheckStableRunning || e.callbackScheduled)
        return;
    e.callbackScheduled = !0;
    function t() {
        Ux( () => {
            e.callbackScheduled = !1,
            zm(e),
            e.isCheckStableRunning = !0,
            uy(e),
            e.isCheckStableRunning = !1
        }
        )
    }
    e.scheduleInRootZone ? Zone.root.run( () => {
        t()
    }
    ) : e._outer.run( () => {
        t()
    }
    ),
    zm(e)
}
function VR(e) {
    let t = () => {
        LR(e)
    }
      , n = FR++;
    e._inner = e._inner.fork({
        name: "angular",
        properties: {
            [ay]: !0,
            [Dd]: n,
            [Dd + n]: !0
        },
        onInvokeTask: (r, i, o, s, a, l) => {
            if (jR(l))
                return r.invokeTask(o, s, a, l);
            try {
                return Xw(e),
                r.invokeTask(o, s, a, l)
            } finally {
                (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(),
                Jw(e)
            }
        }
        ,
        onInvoke: (r, i, o, s, a, l, c) => {
            try {
                return Xw(e),
                r.invoke(o, s, a, l, c)
            } finally {
                e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !BR(l) && t(),
                Jw(e)
            }
        }
        ,
        onHasTask: (r, i, o, s) => {
            r.hasTask(o, s),
            i === o && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask,
            zm(e),
            uy(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask))
        }
        ,
        onHandleError: (r, i, o, s) => (r.handleError(o, s),
        e.runOutsideAngular( () => e.onError.emit(s)),
        !1)
    })
}
function zm(e) {
    e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1
}
function Xw(e) {
    e._nesting++,
    e.isStable && (e.isStable = !1,
    e.onUnstable.emit(null))
}
function Jw(e) {
    e._nesting--,
    uy(e)
}
var Gm = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new dt;
    onMicrotaskEmpty = new dt;
    onStable = new dt;
    onError = new dt;
    run(t, n, r) {
        return t.apply(n, r)
    }
    runGuarded(t, n, r) {
        return t.apply(n, r)
    }
    runOutsideAngular(t) {
        return t()
    }
    runTask(t, n, r, i) {
        return t.apply(n, r)
    }
}
;
function jR(e) {
    return $x(e, "__ignore_ng_zone__")
}
function BR(e) {
    return $x(e, "__scheduler_tick__")
}
function $x(e, t) {
    return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0
}
var Yi = class {
    _console = console;
    handleError(t) {
        this._console.error("ERROR", t)
    }
}
  , HR = new ue("",{
    providedIn: "root",
    factory: () => {
        let e = Y(Nt)
          , t = Y(Yi);
        return n => e.runOutsideAngular( () => t.handleError(n))
    }
})
  , xd = class {
    destroyed = !1;
    listeners = null;
    errorHandler = Y(Yi, {
        optional: !0
    });
    destroyRef = Y(Pn);
    constructor() {
        this.destroyRef.onDestroy( () => {
            this.destroyed = !0,
            this.listeners = null
        }
        )
    }
    subscribe(t) {
        if (this.destroyed)
            throw new ce(953,!1);
        return (this.listeners ??= []).push(t),
        {
            unsubscribe: () => {
                let n = this.listeners?.indexOf(t);
                n !== void 0 && n !== -1 && this.listeners?.splice(n, 1)
            }
        }
    }
    emit(t) {
        if (this.destroyed)
            throw new ce(953,!1);
        if (this.listeners === null)
            return;
        let n = Me(null);
        try {
            for (let r of this.listeners)
                try {
                    r(t)
                } catch (i) {
                    this.errorHandler?.handleError(i)
                }
        } finally {
            Me(n)
        }
    }
}
;
function Au(e) {
    return new xd
}
function Kw(e, t) {
    return HD(e, t)
}
function UR(e) {
    return HD(jd, e)
}
var F = (Kw.required = UR,
Kw);
function $R() {
    return ia(Mt(), K())
}
function ia(e, t) {
    return new Ne(zn(e, t))
}
var Ne = ( () => {
    class e {
        nativeElement;
        constructor(n) {
            this.nativeElement = n
        }
        static __NG_ELEMENT_ID__ = $R
    }
    return e
}
)();
function Yx(e) {
    return e instanceof Ne ? e.nativeElement : e
}
function YR() {
    return this._results[Symbol.iterator]()
}
var qm = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() {
        return this._changes ??= new st
    }
    constructor(t=!1) {
        this._emitDistinctChangesOnly = t
    }
    get(t) {
        return this._results[t]
    }
    map(t) {
        return this._results.map(t)
    }
    filter(t) {
        return this._results.filter(t)
    }
    find(t) {
        return this._results.find(t)
    }
    reduce(t, n) {
        return this._results.reduce(t, n)
    }
    forEach(t) {
        this._results.forEach(t)
    }
    some(t) {
        return this._results.some(t)
    }
    toArray() {
        return this._results.slice()
    }
    toString() {
        return this._results.toString()
    }
    reset(t, n) {
        this.dirty = !1;
        let r = NF(t);
        (this._changesDetected = !kF(this._results, r, n)) && (this._results = r,
        this.length = r.length,
        this.last = r[this.length - 1],
        this.first = r[0])
    }
    notifyOnChanges() {
        this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this)
    }
    onDirty(t) {
        this._onDirty = t
    }
    setDirty() {
        this.dirty = !0,
        this._onDirty?.()
    }
    destroy() {
        this._changes !== void 0 && (this._changes.complete(),
        this._changes.unsubscribe())
    }
    [Symbol.iterator] = YR
}
;
function Wx(e) {
    return (e.flags & 128) === 128
}
var zx = function(e) {
    return e[e.OnPush = 0] = "OnPush",
    e[e.Default = 1] = "Default",
    e
}(zx || {})
  , Gx = new Map
  , WR = 0;
function zR() {
    return WR++
}
function GR(e) {
    Gx.set(e[Yd], e)
}
function Zm(e) {
    Gx.delete(e[Yd])
}
var eD = "__ngContext__";
function Wi(e, t) {
    Ui(t) ? (e[eD] = t[Yd],
    GR(t)) : e[eD] = t
}
function qx(e) {
    return Qx(e[wu])
}
function Zx(e) {
    return Qx(e[rr])
}
function Qx(e) {
    for (; e !== null && !li(e); )
        e = e[rr];
    return e
}
var Qm;
function Hee(e) {
    Qm = e
}
function Xx() {
    if (Qm !== void 0)
        return Qm;
    if (typeof document < "u")
        return document;
    throw new ce(210,!1)
}
var Uee = new ue("",{
    providedIn: "root",
    factory: () => qR
})
  , qR = "ng"
  , ZR = new ue("")
  , ef = new ue("",{
    providedIn: "platform",
    factory: () => "unknown"
});
var $ee = new ue("")
  , Yee = new ue("",{
    providedIn: "root",
    factory: () => Xx().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null
});
var QR = "h"
  , XR = "b";
var JR = "di"
  , Jx = "s";
var Kx = !1
  , KR = new ue("",{
    providedIn: "root",
    factory: () => Kx
});
var e2 = new ue("");
var ly = function(e) {
    return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION",
    e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER",
    e
}(ly || {})
  , tf = new ue("")
  , tD = new Set;
function Fn(e) {
    tD.has(e) || (tD.add(e),
    performance?.mark?.("mark_feature_usage", {
        detail: {
            feature: e
        }
    }))
}
var Hs = function(e) {
    return e[e.EarlyRead = 0] = "EarlyRead",
    e[e.Write = 1] = "Write",
    e[e.MixedReadWrite = 2] = "MixedReadWrite",
    e[e.Read = 3] = "Read",
    e
}(Hs || {})
  , eC = ( () => {
    class e {
        impl = null;
        execute() {
            this.impl?.execute()
        }
        static \u0275prov = me({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)()
  , t2 = [Hs.EarlyRead, Hs.Write, Hs.MixedReadWrite, Hs.Read]
  , n2 = ( () => {
    class e {
        ngZone = Y(Nt);
        scheduler = Y(Uo);
        errorHandler = Y(Yi, {
            optional: !0
        });
        sequences = new Set;
        deferredRegistrations = new Set;
        executing = !1;
        constructor() {
            Y(tf, {
                optional: !0
            })
        }
        execute() {
            this.executing = !0;
            for (let n of t2)
                for (let r of this.sequences)
                    if (!(r.erroredOrDestroyed || !r.hooks[n]))
                        try {
                            r.pipelinedValue = this.ngZone.runOutsideAngular( () => this.maybeTrace( () => r.hooks[n](r.pipelinedValue), r.snapshot))
                        } catch (i) {
                            r.erroredOrDestroyed = !0,
                            this.errorHandler?.handleError(i)
                        }
            this.executing = !1;
            for (let n of this.sequences)
                n.afterRun(),
                n.once && (this.sequences.delete(n),
                n.destroy());
            for (let n of this.deferredRegistrations)
                this.sequences.add(n);
            this.deferredRegistrations.size > 0 && this.scheduler.notify(8),
            this.deferredRegistrations.clear()
        }
        register(n) {
            this.executing ? this.deferredRegistrations.add(n) : (this.sequences.add(n),
            this.scheduler.notify(7))
        }
        unregister(n) {
            this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0,
            n.pipelinedValue = void 0,
            n.once = !0) : (this.sequences.delete(n),
            this.deferredRegistrations.delete(n))
        }
        maybeTrace(n, r) {
            return r ? r.run(ly.AFTER_NEXT_RENDER, n) : n()
        }
        static \u0275prov = me({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)()
  , Xm = class {
    impl;
    hooks;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, r, i, o=null) {
        this.impl = t,
        this.hooks = n,
        this.once = r,
        this.snapshot = o,
        this.unregisterOnDestroy = i?.onDestroy( () => this.destroy())
    }
    afterRun() {
        this.erroredOrDestroyed = !1,
        this.pipelinedValue = void 0,
        this.snapshot?.dispose(),
        this.snapshot = null
    }
    destroy() {
        this.impl.unregister(this),
        this.unregisterOnDestroy?.()
    }
}
;
function r2(e, t) {
    !t?.injector && Zi(r2);
    let n = t?.injector ?? Y(Cn);
    return Fn("NgAfterRender"),
    tC(e, n, t, !1)
}
function i2(e, t) {
    !t?.injector && Zi(i2);
    let n = t?.injector ?? Y(Cn);
    return Fn("NgAfterNextRender"),
    tC(e, n, t, !0)
}
function o2(e, t) {
    if (e instanceof Function) {
        let n = [void 0, void 0, void 0, void 0];
        return n[t] = e,
        n
    } else
        return [e.earlyRead, e.write, e.mixedReadWrite, e.read]
}
function tC(e, t, n, r) {
    let i = t.get(eC);
    i.impl ??= t.get(n2);
    let o = t.get(tf, null, {
        optional: !0
    })
      , s = n?.phase ?? Hs.MixedReadWrite
      , a = n?.manualCleanup !== !0 ? t.get(Pn) : null
      , l = new Xm(i.impl,o2(e, s),r,a,o?.snapshot(null));
    return i.impl.register(l),
    l
}
var xn = function(e) {
    return e[e.NOT_STARTED = 0] = "NOT_STARTED",
    e[e.IN_PROGRESS = 1] = "IN_PROGRESS",
    e[e.COMPLETE = 2] = "COMPLETE",
    e[e.FAILED = 3] = "FAILED",
    e
}(xn || {})
  , nD = 0
  , s2 = 1
  , gt = function(e) {
    return e[e.Placeholder = 0] = "Placeholder",
    e[e.Loading = 1] = "Loading",
    e[e.Complete = 2] = "Complete",
    e[e.Error = 3] = "Error",
    e
}(gt || {})
  , Cd = function(e) {
    return e[e.Initial = -1] = "Initial",
    e
}(Cd || {})
  , zs = 0
  , nf = 1
  , mu = 2
  , zc = 3
  , a2 = 4
  , u2 = 5
  , l2 = 6
  , c2 = 7
  , _m = 8
  , d2 = 9
  , nC = function(e) {
    return e[e.Manual = 0] = "Manual",
    e[e.Playthrough = 1] = "Playthrough",
    e
}(nC || {});
function rC(e, t, n) {
    let r = oC(e);
    t[r] === null && (t[r] = []),
    t[r].push(n)
}
function rd(e, t) {
    let n = oC(e)
      , r = t[n];
    if (r !== null) {
        for (let i of r)
            i();
        t[n] = null
    }
}
function iC(e) {
    rd(1, e),
    rd(0, e),
    rd(2, e)
}
function oC(e) {
    let t = a2;
    return e === 1 ? t = u2 : e === 2 && (t = d2),
    t
}
function rf(e) {
    return e + 1
}
function oa(e, t) {
    let n = e[ae]
      , r = rf(t.index);
    return e[r]
}
function f2(e, t, n) {
    let r = e[ae]
      , i = rf(t);
    e[i] = n
}
function sa(e, t) {
    let n = rf(t.index);
    return e.data[n]
}
function h2(e, t, n) {
    let r = rf(t);
    e.data[r] = n
}
function p2(e, t, n) {
    let r = t[ae]
      , i = sa(r, n);
    switch (e) {
    case gt.Complete:
        return i.primaryTmplIndex;
    case gt.Loading:
        return i.loadingTmplIndex;
    case gt.Error:
        return i.errorTmplIndex;
    case gt.Placeholder:
        return i.placeholderTmplIndex;
    default:
        return null
    }
}
function Jm(e, t) {
    return t === gt.Placeholder ? e.placeholderBlockConfig?.[nD] ?? null : t === gt.Loading ? e.loadingBlockConfig?.[nD] ?? null : null
}
function sC(e) {
    return e.loadingBlockConfig?.[s2] ?? null
}
function rD(e, t) {
    if (!e || e.length === 0)
        return t;
    let n = new Set(e);
    for (let r of t)
        n.add(r);
    return e.length === n.size ? e : Array.from(n)
}
function m2(e, t) {
    let n = t.primaryTmplIndex + ht;
    return Nu(e, n)
}
var g2 = new ue("");
var y2 = () => null;
function cy(e, t, n=!1) {
    return y2(e, t, n)
}
function v2(e) {
    return e.get(e2, !1, {
        optional: !0
    })
}
var Cu = function(e) {
    return e[e.Emulated = 0] = "Emulated",
    e[e.None = 2] = "None",
    e[e.ShadowDom = 3] = "ShadowDom",
    e
}(Cu || {}), Gc;
function _2() {
    if (Gc === void 0 && (Gc = null,
    ji.trustedTypes))
        try {
            Gc = ji.trustedTypes.createPolicy("angular", {
                createHTML: e => e,
                createScript: e => e,
                createScriptURL: e => e
            })
        } catch {}
    return Gc
}
function of(e) {
    return _2()?.createHTML(e) || e
}
var qc;
function aC() {
    if (qc === void 0 && (qc = null,
    ji.trustedTypes))
        try {
            qc = ji.trustedTypes.createPolicy("angular#unsafe-bypass", {
                createHTML: e => e,
                createScript: e => e,
                createScriptURL: e => e
            })
        } catch {}
    return qc
}
function iD(e) {
    return aC()?.createHTML(e) || e
}
function oD(e) {
    return aC()?.createScriptURL(e) || e
}
var Md = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) {
        this.changingThisBreaksApplicationSecurity = t
    }
    toString() {
        return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${jD})`
    }
}
;
function Zo(e) {
    return e instanceof Md ? e.changingThisBreaksApplicationSecurity : e
}
function dy(e, t) {
    let n = w2(e);
    if (n != null && n !== t) {
        if (n === "ResourceURL" && t === "URL")
            return !0;
        throw new Error(`Required a safe ${t}, got a ${n} (see ${jD})`)
    }
    return n === t
}
function w2(e) {
    return e instanceof Md && e.getTypeName() || null
}
function D2(e) {
    let t = new eg(e);
    return x2() ? new Km(t) : t
}
var Km = class {
    inertDocumentHelper;
    constructor(t) {
        this.inertDocumentHelper = t
    }
    getInertBodyElement(t) {
        t = "<body><remove></remove>" + t;
        try {
            let n = new window.DOMParser().parseFromString(of(t), "text/html").body;
            return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(),
            n)
        } catch {
            return null
        }
    }
}
  , eg = class {
    defaultDoc;
    inertDocument;
    constructor(t) {
        this.defaultDoc = t,
        this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")
    }
    getInertBodyElement(t) {
        let n = this.inertDocument.createElement("template");
        return n.innerHTML = of(t),
        n
    }
}
;
function x2() {
    try {
        return !!new window.DOMParser().parseFromString(of(""), "text/html")
    } catch {
        return !1
    }
}
var C2 = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function uC(e) {
    return e = String(e),
    e.match(C2) ? e : "unsafe:" + e
}
function di(e) {
    let t = {};
    for (let n of e.split(","))
        t[n] = !0;
    return t
}
function Pu(...e) {
    let t = {};
    for (let n of e)
        for (let r in n)
            n.hasOwnProperty(r) && (t[r] = !0);
    return t
}
var lC = di("area,br,col,hr,img,wbr")
  , cC = di("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr")
  , dC = di("rp,rt")
  , M2 = Pu(dC, cC)
  , b2 = Pu(cC, di("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"))
  , I2 = Pu(dC, di("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"))
  , sD = Pu(lC, b2, I2, M2)
  , fC = di("background,cite,href,itemtype,longdesc,poster,src,xlink:href")
  , E2 = di("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")
  , S2 = di("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")
  , T2 = Pu(fC, E2, S2)
  , k2 = di("script,style,template")
  , tg = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) {
        let n = t.firstChild
          , r = !0
          , i = [];
        for (; n; ) {
            if (n.nodeType === Node.ELEMENT_NODE ? r = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0,
            r && n.firstChild) {
                i.push(n),
                n = A2(n);
                continue
            }
            for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let o = O2(n);
                if (o) {
                    n = o;
                    break
                }
                n = i.pop()
            }
        }
        return this.buf.join("")
    }
    startElement(t) {
        let n = aD(t).toLowerCase();
        if (!sD.hasOwnProperty(n))
            return this.sanitizedSomething = !0,
            !k2.hasOwnProperty(n);
        this.buf.push("<"),
        this.buf.push(n);
        let r = t.attributes;
        for (let i = 0; i < r.length; i++) {
            let o = r.item(i)
              , s = o.name
              , a = s.toLowerCase();
            if (!T2.hasOwnProperty(a)) {
                this.sanitizedSomething = !0;
                continue
            }
            let l = o.value;
            fC[a] && (l = uC(l)),
            this.buf.push(" ", s, '="', uD(l), '"')
        }
        return this.buf.push(">"),
        !0
    }
    endElement(t) {
        let n = aD(t).toLowerCase();
        sD.hasOwnProperty(n) && !lC.hasOwnProperty(n) && (this.buf.push("</"),
        this.buf.push(n),
        this.buf.push(">"))
    }
    chars(t) {
        this.buf.push(uD(t))
    }
}
;
function N2(e, t) {
    return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY
}
function O2(e) {
    let t = e.nextSibling;
    if (t && e !== t.previousSibling)
        throw hC(t);
    return t
}
function A2(e) {
    let t = e.firstChild;
    if (t && N2(e, t))
        throw hC(t);
    return t
}
function aD(e) {
    let t = e.nodeName;
    return typeof t == "string" ? t : "FORM"
}
function hC(e) {
    return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)
}
var P2 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
  , F2 = /([^\#-~ |!])/g;
function uD(e) {
    return e.replace(/&/g, "&amp;").replace(P2, function(t) {
        let n = t.charCodeAt(0)
          , r = t.charCodeAt(1);
        return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";"
    }).replace(F2, function(t) {
        return "&#" + t.charCodeAt(0) + ";"
    }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
var Zc;
function R2(e, t) {
    let n = null;
    try {
        Zc = Zc || D2(e);
        let r = t ? String(t) : "";
        n = Zc.getInertBodyElement(r);
        let i = 5
          , o = r;
        do {
            if (i === 0)
                throw new Error("Failed to sanitize html because the input is unstable");
            i--,
            r = o,
            o = n.innerHTML,
            n = Zc.getInertBodyElement(r)
        } while (r !== o);
        let a = new tg().sanitizeChildren(lD(n) || n);
        return of(a)
    } finally {
        if (n) {
            let r = lD(n) || n;
            for (; r.firstChild; )
                r.firstChild.remove()
        }
    }
}
function lD(e) {
    return "content"in e && L2(e) ? e.content : null
}
function L2(e) {
    return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"
}
var sf = function(e) {
    return e[e.NONE = 0] = "NONE",
    e[e.HTML = 1] = "HTML",
    e[e.STYLE = 2] = "STYLE",
    e[e.SCRIPT = 3] = "SCRIPT",
    e[e.URL = 4] = "URL",
    e[e.RESOURCE_URL = 5] = "RESOURCE_URL",
    e
}(sf || {});
function Wee(e) {
    let t = fy();
    return t ? iD(t.sanitize(sf.HTML, e) || "") : dy(e, "HTML") ? iD(Zo(e)) : R2(Xx(), nr(e))
}
function V2(e) {
    let t = fy();
    return t ? t.sanitize(sf.URL, e) || "" : dy(e, "URL") ? Zo(e) : uC(nr(e))
}
function j2(e) {
    let t = fy();
    if (t)
        return oD(t.sanitize(sf.RESOURCE_URL, e) || "");
    if (dy(e, "ResourceURL"))
        return oD(Zo(e));
    throw new ce(904,!1)
}
function B2(e, t) {
    return t === "src" && (e === "embed" || e === "frame" || e === "iframe" || e === "media" || e === "script") || t === "href" && (e === "base" || e === "link") ? j2 : V2
}
function zee(e, t, n) {
    return B2(t, n)(e)
}
function fy() {
    let e = K();
    return e && e[oi].sanitizer
}
var H2 = /^>|^->|<!--|-->|--!>|<!-$/g
  , U2 = /(<|>)/g
  , $2 = "\u200B$1\u200B";
function Y2(e) {
    return e.replace(H2, t => t.replace(U2, $2))
}
function pC(e) {
    return e.ownerDocument.defaultView
}
function sr(e) {
    return e.ownerDocument
}
function mC(e) {
    return e instanceof Function ? e() : e
}
var zi = function(e) {
    return e[e.None = 0] = "None",
    e[e.SignalBased = 1] = "SignalBased",
    e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform",
    e
}(zi || {}), Mu = function(e) {
    return e[e.Important = 1] = "Important",
    e[e.DashCase = 2] = "DashCase",
    e
}(Mu || {}), W2;
function hy(e, t) {
    return W2(e, t)
}
function Us(e, t, n, r, i) {
    if (r != null) {
        let o, s = !1;
        li(r) ? o = r : Ui(r) && (s = !0,
        r = r[ui]);
        let a = Pr(r);
        e === 0 && n !== null ? i == null ? wC(t, n, a) : bd(t, n, a, i || null, !0) : e === 1 && n !== null ? bd(t, n, a, i || null, !0) : e === 2 ? oL(t, a, s) : e === 3 && t.destroyNode(a),
        o != null && aL(t, e, o, n, i)
    }
}
function z2(e, t) {
    return e.createText(t)
}
function G2(e, t, n) {
    e.setValue(t, n)
}
function q2(e, t) {
    return e.createComment(Y2(t))
}
function gC(e, t, n) {
    return e.createElement(t, n)
}
function Z2(e, t) {
    yC(e, t),
    t[ui] = null,
    t[Mn] = null
}
function Q2(e, t, n, r, i, o) {
    r[ui] = i,
    r[Mn] = t,
    lf(e, r, n, 1, i, o)
}
function yC(e, t) {
    t[oi].changeDetectionScheduler?.notify(10),
    lf(e, t, t[at], 2, null, null)
}
function X2(e) {
    let t = e[wu];
    if (!t)
        return wm(e[ae], e);
    for (; t; ) {
        let n = null;
        if (Ui(t))
            n = t[wu];
        else {
            let r = t[tn];
            r && (n = r)
        }
        if (!n) {
            for (; t && !t[rr] && t !== e; )
                Ui(t) && wm(t[ae], t),
                t = t[Yt];
            t === null && (t = e),
            Ui(t) && wm(t[ae], t),
            n = t && t[rr]
        }
        t = n
    }
}
function J2(e, t, n, r) {
    let i = tn + r
      , o = n.length;
    r > 0 && (n[i - 1][rr] = t),
    r < o - tn ? (t[rr] = n[i],
    QD(n, tn + r, t)) : (n.push(t),
    t[rr] = null),
    t[Yt] = n;
    let s = t[Fo];
    s !== null && n !== s && vC(s, t);
    let a = t[si];
    a !== null && a.insertView(e),
    Vm(t),
    t[le] |= 128
}
function vC(e, t) {
    let n = e[Qs]
      , r = t[Yt];
    if (Ui(r))
        e[le] |= pd.HasTransplantedViews;
    else {
        let i = r[Yt][On];
        t[On] !== i && (e[le] |= pd.HasTransplantedViews)
    }
    n === null ? e[Qs] = [t] : n.push(t)
}
function py(e, t) {
    let n = e[Qs]
      , r = n.indexOf(t);
    n.splice(r, 1)
}
function bu(e, t) {
    if (e.length <= tn)
        return;
    let n = tn + t
      , r = e[n];
    if (r) {
        let i = r[Fo];
        i !== null && i !== e && py(i, r),
        t > 0 && (e[n - 1][rr] = r[rr]);
        let o = ud(e, tn + t);
        Z2(r[ae], r);
        let s = o[si];
        s !== null && s.detachView(o[ae]),
        r[Yt] = null,
        r[rr] = null,
        r[le] &= -129
    }
    return r
}
function af(e, t) {
    if (!(t[le] & 256)) {
        let n = t[at];
        n.destroyNode && lf(e, t, n, 3, null, null),
        X2(t)
    }
}
function wm(e, t) {
    if (t[le] & 256)
        return;
    let n = Me(null);
    try {
        t[le] &= -129,
        t[le] |= 256,
        t[kn] && Os(t[kn]),
        eL(e, t),
        K2(e, t),
        t[ae].type === 1 && t[at].destroy();
        let r = t[Fo];
        if (r !== null && li(t[Yt])) {
            r !== t[Yt] && py(r, t);
            let i = t[si];
            i !== null && i.detachView(e)
        }
        Zm(t)
    } finally {
        Me(n)
    }
}
function K2(e, t) {
    let n = e.cleanup
      , r = t[dd];
    if (n !== null)
        for (let s = 0; s < n.length - 1; s += 2)
            if (typeof n[s] == "string") {
                let a = n[s + 3];
                a >= 0 ? r[a]() : r[-a].unsubscribe(),
                s += 2
            } else {
                let a = r[n[s + 1]];
                n[s].call(a)
            }
    r !== null && (t[dd] = null);
    let i = t[Hi];
    if (i !== null) {
        t[Hi] = null;
        for (let s = 0; s < i.length; s++) {
            let a = i[s];
            a()
        }
    }
    let o = t[Ro];
    if (o !== null) {
        t[Ro] = null;
        for (let s of o)
            s.destroy()
    }
}
function eL(e, t) {
    let n;
    if (e != null && (n = e.destroyHooks) != null)
        for (let r = 0; r < n.length; r += 2) {
            let i = t[n[r]];
            if (!(i instanceof Bo)) {
                let o = n[r + 1];
                if (Array.isArray(o))
                    for (let s = 0; s < o.length; s += 2) {
                        let a = i[o[s]]
                          , l = o[s + 1];
                        Nr(4, a, l);
                        try {
                            l.call(a)
                        } finally {
                            Nr(5, a, l)
                        }
                    }
                else {
                    Nr(4, i, o);
                    try {
                        o.call(i)
                    } finally {
                        Nr(5, i, o)
                    }
                }
            }
        }
}
function _C(e, t, n) {
    return tL(e, t.parent, n)
}
function tL(e, t, n) {
    let r = t;
    for (; r !== null && r.type & 168; )
        t = r,
        r = t.parent;
    if (r === null)
        return n[ui];
    {
        let {componentOffset: i} = r;
        if (i > -1) {
            let {encapsulation: o} = e.data[r.directiveStart + i];
            if (o === Cu.None || o === Cu.Emulated)
                return null
        }
        return zn(r, n)
    }
}
function bd(e, t, n, r, i) {
    e.insertBefore(t, n, r, i)
}
function wC(e, t, n) {
    e.appendChild(t, n)
}
function cD(e, t, n, r, i) {
    r !== null ? bd(e, t, n, r, i) : wC(e, t, n)
}
function DC(e, t) {
    return e.parentNode(t)
}
function nL(e, t) {
    return e.nextSibling(t)
}
function xC(e, t, n) {
    return iL(e, t, n)
}
function rL(e, t, n) {
    return e.type & 40 ? zn(e, n) : null
}
var iL = rL, dD;
function uf(e, t, n, r) {
    let i = _C(e, r, t)
      , o = t[at]
      , s = r.parent || t[Mn]
      , a = xC(s, r, t);
    if (i != null)
        if (Array.isArray(n))
            for (let l = 0; l < n.length; l++)
                cD(o, i, n[l], a, !1);
        else
            cD(o, i, n, a, !1);
    dD !== void 0 && dD(o, r, t, n, i)
}
function gu(e, t) {
    if (t !== null) {
        let n = t.type;
        if (n & 3)
            return zn(t, e);
        if (n & 4)
            return ng(-1, e[t.index]);
        if (n & 8) {
            let r = t.child;
            if (r !== null)
                return gu(e, r);
            {
                let i = e[t.index];
                return li(i) ? ng(-1, i) : Pr(i)
            }
        } else {
            if (n & 128)
                return gu(e, t.next);
            if (n & 32)
                return hy(t, e)() || Pr(e[t.index]);
            {
                let r = CC(e, t);
                if (r !== null) {
                    if (Array.isArray(r))
                        return r[0];
                    let i = Vo(e[On]);
                    return gu(i, r)
                } else
                    return gu(e, t.next)
            }
        }
    }
    return null
}
function CC(e, t) {
    if (t !== null) {
        let r = e[On][Mn]
          , i = t.projection;
        return r.projection[i]
    }
    return null
}
function ng(e, t) {
    let n = tn + e + 1;
    if (n < t.length) {
        let r = t[n]
          , i = r[ae].firstChild;
        if (i !== null)
            return gu(r, i)
    }
    return t[Lo]
}
function oL(e, t, n) {
    e.removeChild(null, t, n)
}
function my(e, t, n, r, i, o, s) {
    for (; n != null; ) {
        if (n.type === 128) {
            n = n.next;
            continue
        }
        let a = r[n.index]
          , l = n.type;
        if (s && t === 0 && (a && Wi(Pr(a), r),
        n.flags |= 2),
        (n.flags & 32) !== 32)
            if (l & 8)
                my(e, t, n.child, r, i, o, !1),
                Us(t, e, i, a, o);
            else if (l & 32) {
                let c = hy(n, r), f;
                for (; f = c(); )
                    Us(t, e, i, f, o);
                Us(t, e, i, a, o)
            } else
                l & 16 ? MC(e, t, r, n, i, o) : Us(t, e, i, a, o);
        n = s ? n.projectionNext : n.next
    }
}
function lf(e, t, n, r, i, o) {
    my(n, r, e.firstChild, t, i, o, !1)
}
function sL(e, t, n) {
    let r = t[at]
      , i = _C(e, n, t)
      , o = n.parent || t[Mn]
      , s = xC(o, n, t);
    MC(r, 0, t, n, i, s)
}
function MC(e, t, n, r, i, o) {
    let s = n[On]
      , l = s[Mn].projection[r.projection];
    if (Array.isArray(l))
        for (let c = 0; c < l.length; c++) {
            let f = l[c];
            Us(t, e, i, f, o)
        }
    else {
        let c = l
          , f = s[Yt];
        Wx(r) && (c.flags |= 128),
        my(e, t, c, f, i, o, !0)
    }
}
function aL(e, t, n, r, i) {
    let o = n[Lo]
      , s = Pr(n);
    o !== s && Us(t, e, r, o, i);
    for (let a = tn; a < n.length; a++) {
        let l = n[a];
        lf(l[ae], l, e, t, r, o)
    }
}
function uL(e, t, n, r, i) {
    if (t)
        i ? e.addClass(n, r) : e.removeClass(n, r);
    else {
        let o = r.indexOf("-") === -1 ? void 0 : Mu.DashCase;
        i == null ? e.removeStyle(n, r, o) : (typeof i == "string" && i.endsWith("!important") && (i = i.slice(0, -10),
        o |= Mu.Important),
        e.setStyle(n, r, i, o))
    }
}
function lL(e, t, n) {
    e.setAttribute(t, "style", n)
}
function bC(e, t, n) {
    n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n)
}
function IC(e, t, n) {
    let {mergedAttrs: r, classes: i, styles: o} = n;
    r !== null && Hm(e, t, r),
    i !== null && bC(e, t, i),
    o !== null && lL(e, t, o)
}
function cL(e, t, n) {
    let r = e.length;
    for (; ; ) {
        let i = e.indexOf(t, n);
        if (i === -1)
            return i;
        if (i === 0 || e.charCodeAt(i - 1) <= 32) {
            let o = t.length;
            if (i + o === r || e.charCodeAt(i + o) <= 32)
                return i
        }
        n = i + 1
    }
}
var EC = "ng-template";
function dL(e, t, n, r) {
    let i = 0;
    if (r) {
        for (; i < t.length && typeof t[i] == "string"; i += 2)
            if (t[i] === "class" && cL(t[i + 1].toLowerCase(), n, 0) !== -1)
                return !0
    } else if (gy(e))
        return !1;
    if (i = t.indexOf(1, i),
    i > -1) {
        let o;
        for (; ++i < t.length && typeof (o = t[i]) == "string"; )
            if (o.toLowerCase() === n)
                return !0
    }
    return !1
}
function gy(e) {
    return e.type === 4 && e.value !== EC
}
function fL(e, t, n) {
    let r = e.type === 4 && !n ? EC : e.value;
    return t === r
}
function hL(e, t, n) {
    let r = 4
      , i = e.attrs
      , o = i !== null ? gL(i) : 0
      , s = !1;
    for (let a = 0; a < t.length; a++) {
        let l = t[a];
        if (typeof l == "number") {
            if (!s && !tr(r) && !tr(l))
                return !1;
            if (s && tr(l))
                continue;
            s = !1,
            r = l | r & 1;
            continue
        }
        if (!s)
            if (r & 4) {
                if (r = 2 | r & 1,
                l !== "" && !fL(e, l, n) || l === "" && t.length === 1) {
                    if (tr(r))
                        return !1;
                    s = !0
                }
            } else if (r & 8) {
                if (i === null || !dL(e, i, l, n)) {
                    if (tr(r))
                        return !1;
                    s = !0
                }
            } else {
                let c = t[++a]
                  , f = pL(l, i, gy(e), n);
                if (f === -1) {
                    if (tr(r))
                        return !1;
                    s = !0;
                    continue
                }
                if (c !== "") {
                    let p;
                    if (f > o ? p = "" : p = i[f + 1].toLowerCase(),
                    r & 2 && c !== p) {
                        if (tr(r))
                            return !1;
                        s = !0
                    }
                }
            }
    }
    return tr(r) || s
}
function tr(e) {
    return (e & 1) === 0
}
function pL(e, t, n, r) {
    if (t === null)
        return -1;
    let i = 0;
    if (r || !n) {
        let o = !1;
        for (; i < t.length; ) {
            let s = t[i];
            if (s === e)
                return i;
            if (s === 3 || s === 6)
                o = !0;
            else if (s === 1 || s === 2) {
                let a = t[++i];
                for (; typeof a == "string"; )
                    a = t[++i];
                continue
            } else {
                if (s === 4)
                    break;
                if (s === 0) {
                    i += 4;
                    continue
                }
            }
            i += o ? 1 : 2
        }
        return -1
    } else
        return yL(t, e)
}
function SC(e, t, n=!1) {
    for (let r = 0; r < t.length; r++)
        if (hL(e, t[r], n))
            return !0;
    return !1
}
function mL(e) {
    let t = e.attrs;
    if (t != null) {
        let n = t.indexOf(5);
        if (!(n & 1))
            return t[n + 1]
    }
    return null
}
function gL(e) {
    for (let t = 0; t < e.length; t++) {
        let n = e[t];
        if (Sx(n))
            return t
    }
    return e.length
}
function yL(e, t) {
    let n = e.indexOf(4);
    if (n > -1)
        for (n++; n < e.length; ) {
            let r = e[n];
            if (typeof r == "number")
                return -1;
            if (r === t)
                return n;
            n++
        }
    return -1
}
function vL(e, t) {
    e: for (let n = 0; n < t.length; n++) {
        let r = t[n];
        if (e.length === r.length) {
            for (let i = 0; i < e.length; i++)
                if (e[i] !== r[i])
                    continue e;
            return !0
        }
    }
    return !1
}
function fD(e, t) {
    return e ? ":not(" + t.trim() + ")" : t
}
function _L(e) {
    let t = e[0]
      , n = 1
      , r = 2
      , i = ""
      , o = !1;
    for (; n < e.length; ) {
        let s = e[n];
        if (typeof s == "string")
            if (r & 2) {
                let a = e[++n];
                i += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]"
            } else
                r & 8 ? i += "." + s : r & 4 && (i += " " + s);
        else
            i !== "" && !tr(s) && (t += fD(o, i),
            i = ""),
            r = s,
            o = o || !tr(r);
        n++
    }
    return i !== "" && (t += fD(o, i)),
    t
}
function wL(e) {
    return e.map(_L).join(",")
}
function DL(e) {
    let t = []
      , n = []
      , r = 1
      , i = 2;
    for (; r < e.length; ) {
        let o = e[r];
        if (typeof o == "string")
            i === 2 ? o !== "" && t.push(o, e[++r]) : i === 8 && n.push(o);
        else {
            if (!tr(i))
                break;
            i = o
        }
        r++
    }
    return {
        attrs: t,
        classes: n
    }
}
var Wt = {};
function se(e=1) {
    TC(Ze(), K(), Lr() + e, !1)
}
function TC(e, t, n, r) {
    if (!r)
        if ((t[le] & 3) === 3) {
            let o = e.preOrderCheckHooks;
            o !== null && ed(t, o, n)
        } else {
            let o = e.preOrderHooks;
            o !== null && td(t, o, 0, n)
        }
    jo(n)
}
function O(e, t=ke.Default) {
    let n = K();
    if (n === null)
        return ze(e, t);
    let r = Mt();
    return Fx(r, n, ln(e), t)
}
function Gee() {
    let e = "invalid";
    throw new Error(e)
}
function kC(e, t, n, r, i, o) {
    let s = Me(null);
    try {
        let a = null;
        i & zi.SignalBased && (a = t[r][Ut]),
        a !== null && a.transformFn !== void 0 && (o = a.transformFn(o)),
        i & zi.HasDecoratorInputTransform && (o = e.inputTransforms[r].call(t, o)),
        e.setInput !== null ? e.setInput(t, a, o, n, r) : ux(t, a, r, o)
    } finally {
        Me(s)
    }
}
function xL(e, t) {
    let n = e.hostBindingOpCodes;
    if (n !== null)
        try {
            for (let r = 0; r < n.length; r++) {
                let i = n[r];
                if (i < 0)
                    jo(~i);
                else {
                    let o = i
                      , s = n[++r]
                      , a = n[++r];
                    cR(s, o);
                    let l = t[o];
                    a(2, l)
                }
            }
        } finally {
            jo(-1)
        }
}
function cf(e, t, n, r, i, o, s, a, l, c, f) {
    let p = t.blueprint.slice();
    return p[ui] = i,
    p[le] = r | 4 | 128 | 8 | 64 | 1024,
    (c !== null || e && e[le] & 2048) && (p[le] |= 2048),
    px(p),
    p[Yt] = p[ra] = e,
    p[en] = n,
    p[oi] = s || e && e[oi],
    p[at] = a || e && e[at],
    p[Nn] = l || e && e[Nn] || null,
    p[Mn] = o,
    p[Yd] = zR(),
    p[Zs] = f,
    p[sx] = c,
    p[On] = t.type == 2 ? e[On] : p,
    p
}
function Qo(e, t, n, r, i) {
    let o = e.data[t];
    if (o === null)
        o = CL(e, t, n, r, i),
        lR() && (o.flags |= 32);
    else if (o.type & 64) {
        o.type = n,
        o.value = r,
        o.attrs = i;
        let s = sR();
        o.injectorIndex = s === null ? -1 : s.injectorIndex
    }
    return Xi(o, !0),
    o
}
function CL(e, t, n, r, i) {
    let o = vx()
      , s = ey()
      , a = s ? o : o && o.parent
      , l = e.data[t] = TL(e, a, n, t, r, i);
    return e.firstChild === null && (e.firstChild = l),
    o !== null && (s ? o.child == null && l.parent !== null && (o.child = l) : o.next === null && (o.next = l,
    l.prev = o)),
    l
}
function NC(e, t, n, r) {
    if (n === 0)
        return -1;
    let i = t.length;
    for (let o = 0; o < n; o++)
        t.push(r),
        e.blueprint.push(r),
        e.data.push(null);
    return i
}
function OC(e, t, n, r, i) {
    let o = Lr()
      , s = r & 2;
    try {
        jo(-1),
        s && t.length > ht && TC(e, t, ht, !1),
        Nr(s ? 2 : 0, i),
        n(r, i)
    } finally {
        jo(o),
        Nr(s ? 3 : 1, i)
    }
}
function yy(e, t, n) {
    if (Qg(t)) {
        let r = Me(null);
        try {
            let i = t.directiveStart
              , o = t.directiveEnd;
            for (let s = i; s < o; s++) {
                let a = e.data[s];
                if (a.contentQueries) {
                    let l = n[s];
                    a.contentQueries(1, l, s)
                }
            }
        } finally {
            Me(r)
        }
    }
}
function vy(e, t, n) {
    gx() && (FL(e, t, n, zn(n, t)),
    (n.flags & 64) === 64 && FC(e, t, n))
}
function _y(e, t, n=zn) {
    let r = t.localNames;
    if (r !== null) {
        let i = t.index + 1;
        for (let o = 0; o < r.length; o += 2) {
            let s = r[o + 1]
              , a = s === -1 ? n(t, e) : e[s];
            e[i++] = a
        }
    }
}
function AC(e) {
    let t = e.tView;
    return t === null || t.incompleteFirstPass ? e.tView = wy(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t
}
function wy(e, t, n, r, i, o, s, a, l, c, f) {
    let p = ht + r
      , m = p + i
      , y = ML(p, m)
      , v = typeof c == "function" ? c() : c;
    return y[ae] = {
        type: e,
        blueprint: y,
        template: n,
        queries: null,
        viewQuery: a,
        declTNode: t,
        data: y.slice().fill(null, p),
        bindingStartIndex: p,
        expandoStartIndex: m,
        hostBindingOpCodes: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: typeof o == "function" ? o() : o,
        pipeRegistry: typeof s == "function" ? s() : s,
        firstChild: null,
        schemas: l,
        consts: v,
        incompleteFirstPass: !1,
        ssrId: f
    }
}
function ML(e, t) {
    let n = [];
    for (let r = 0; r < t; r++)
        n.push(r < e ? null : Wt);
    return n
}
function bL(e, t, n, r) {
    let o = r.get(KR, Kx) || n === Cu.ShadowDom
      , s = e.selectRootElement(t, o);
    return IL(s),
    s
}
function IL(e) {
    EL(e)
}
var EL = () => null;
function SL(e, t, n, r) {
    let i = jC(t);
    i.push(n),
    e.firstCreatePass && BC(e).push(r, i.length - 1)
}
function TL(e, t, n, r, i, o) {
    let s = t ? t.injectorIndex : -1
      , a = 0;
    return yx() && (a |= 128),
    {
        type: n,
        index: r,
        insertBeforeIndex: null,
        injectorIndex: s,
        directiveStart: -1,
        directiveEnd: -1,
        directiveStylingLast: -1,
        componentOffset: -1,
        propertyBindings: null,
        flags: a,
        providerIndexes: 0,
        value: i,
        attrs: o,
        mergedAttrs: null,
        localNames: null,
        initialInputs: void 0,
        inputs: null,
        outputs: null,
        tView: null,
        next: null,
        prev: null,
        projectionNext: null,
        child: null,
        parent: t,
        projection: null,
        styles: null,
        stylesWithoutHost: null,
        residualStyles: void 0,
        classes: null,
        classesWithoutHost: null,
        residualClasses: void 0,
        classBindings: 0,
        styleBindings: 0
    }
}
function hD(e, t, n, r, i) {
    for (let o in t) {
        if (!t.hasOwnProperty(o))
            continue;
        let s = t[o];
        if (s === void 0)
            continue;
        r ??= {};
        let a, l = zi.None;
        Array.isArray(s) ? (a = s[0],
        l = s[1]) : a = s;
        let c = o;
        if (i !== null) {
            if (!i.hasOwnProperty(o))
                continue;
            c = i[o]
        }
        e === 0 ? pD(r, n, c, a, l) : pD(r, n, c, a)
    }
    return r
}
function pD(e, t, n, r, i) {
    let o;
    e.hasOwnProperty(n) ? (o = e[n]).push(t, r) : o = e[n] = [t, r],
    i !== void 0 && o.push(i)
}
function kL(e, t, n) {
    let r = t.directiveStart
      , i = t.directiveEnd
      , o = e.data
      , s = t.attrs
      , a = []
      , l = null
      , c = null;
    for (let f = r; f < i; f++) {
        let p = o[f]
          , m = n ? n.get(p) : null
          , y = m ? m.inputs : null
          , v = m ? m.outputs : null;
        l = hD(0, p.inputs, f, l, y),
        c = hD(1, p.outputs, f, c, v);
        let w = l !== null && s !== null && !gy(t) ? zL(l, f, s) : null;
        a.push(w)
    }
    l !== null && (l.hasOwnProperty("class") && (t.flags |= 8),
    l.hasOwnProperty("style") && (t.flags |= 16)),
    t.initialInputs = a,
    t.inputs = l,
    t.outputs = c
}
function NL(e) {
    return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e
}
function Fu(e, t, n, r, i, o, s, a) {
    let l = zn(t, n), c = t.inputs, f;
    !a && c != null && (f = c[r]) ? (xy(e, n, f, r, i),
    Wd(t) && OL(n, t.index)) : t.type & 3 ? (r = NL(r),
    i = s != null ? s(i, t.value || "", r) : i,
    o.setProperty(l, r, i)) : t.type & 12
}
function OL(e, t) {
    let n = Qi(t, e);
    n[le] & 16 || (n[le] |= 64)
}
function Dy(e, t, n, r) {
    if (gx()) {
        let i = r === null ? null : {
            "": -1
        }, o = LL(e, n), s, a;
        o === null ? s = a = null : [s,a] = o,
        s !== null && PC(e, t, n, s, i, a),
        i && VL(n, r, i)
    }
    n.mergedAttrs = Du(n.mergedAttrs, n.attrs)
}
function PC(e, t, n, r, i, o) {
    for (let c = 0; c < r.length; c++)
        $m(_d(n, t), e, r[c].type);
    BL(n, e.data.length, r.length);
    for (let c = 0; c < r.length; c++) {
        let f = r[c];
        f.providersResolver && f.providersResolver(f)
    }
    let s = !1
      , a = !1
      , l = NC(e, t, r.length, null);
    for (let c = 0; c < r.length; c++) {
        let f = r[c];
        n.mergedAttrs = Du(n.mergedAttrs, f.hostAttrs),
        HL(e, n, t, l, f),
        jL(l, f, i),
        f.contentQueries !== null && (n.flags |= 4),
        (f.hostBindings !== null || f.hostAttrs !== null || f.hostVars !== 0) && (n.flags |= 64);
        let p = f.type.prototype;
        !s && (p.ngOnChanges || p.ngOnInit || p.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index),
        s = !0),
        !a && (p.ngOnChanges || p.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index),
        a = !0),
        l++
    }
    kL(e, n, o)
}
function AL(e, t, n, r, i) {
    let o = i.hostBindings;
    if (o) {
        let s = e.hostBindingOpCodes;
        s === null && (s = e.hostBindingOpCodes = []);
        let a = ~t.index;
        PL(s) != a && s.push(a),
        s.push(n, r, o)
    }
}
function PL(e) {
    let t = e.length;
    for (; t > 0; ) {
        let n = e[--t];
        if (typeof n == "number" && n < 0)
            return n
    }
    return 0
}
function FL(e, t, n, r) {
    let i = n.directiveStart
      , o = n.directiveEnd;
    Wd(n) && UL(t, n, e.data[i + n.componentOffset]),
    e.firstCreatePass || _d(n, t),
    Wi(r, t);
    let s = n.initialInputs;
    for (let a = i; a < o; a++) {
        let l = e.data[a]
          , c = Ho(t, e, a, n);
        if (Wi(c, t),
        s !== null && WL(t, a - i, c, l, n, s),
        $i(l)) {
            let f = Qi(n.index, t);
            f[en] = Ho(t, e, a, n)
        }
    }
}
function FC(e, t, n) {
    let r = n.directiveStart
      , i = n.directiveEnd
      , o = n.index
      , s = dR();
    try {
        jo(o);
        for (let a = r; a < i; a++) {
            let l = e.data[a]
              , c = t[a];
            Bm(a),
            (l.hostBindings !== null || l.hostVars !== 0 || l.hostAttrs !== null) && RL(l, c)
        }
    } finally {
        jo(-1),
        Bm(s)
    }
}
function RL(e, t) {
    e.hostBindings !== null && e.hostBindings(1, t)
}
function LL(e, t) {
    let n = e.directiveRegistry
      , r = null
      , i = null;
    if (n)
        for (let o = 0; o < n.length; o++) {
            let s = n[o];
            if (SC(t, s.selectors, !1))
                if (r || (r = []),
                $i(s))
                    if (s.findHostDirectiveDefs !== null) {
                        let a = [];
                        i = i || new Map,
                        s.findHostDirectiveDefs(s, a, i),
                        r.unshift(...a, s);
                        let l = a.length;
                        rg(e, t, l)
                    } else
                        r.unshift(s),
                        rg(e, t, 0);
                else
                    i = i || new Map,
                    s.findHostDirectiveDefs?.(s, r, i),
                    r.push(s)
        }
    return r === null ? null : [r, i]
}
function rg(e, t, n) {
    t.componentOffset = n,
    (e.components ??= []).push(t.index)
}
function VL(e, t, n) {
    if (t) {
        let r = e.localNames = [];
        for (let i = 0; i < t.length; i += 2) {
            let o = n[t[i + 1]];
            if (o == null)
                throw new ce(-301,!1);
            r.push(t[i], o)
        }
    }
}
function jL(e, t, n) {
    if (n) {
        if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++)
                n[t.exportAs[r]] = e;
        $i(t) && (n[""] = e)
    }
}
function BL(e, t, n) {
    e.flags |= 1,
    e.directiveStart = t,
    e.directiveEnd = t + n,
    e.providerIndexes = t
}
function HL(e, t, n, r, i) {
    e.data[r] = i;
    let o = i.factory || (i.factory = Po(i.type, !0))
      , s = new Bo(o,$i(i),O);
    e.blueprint[r] = s,
    n[r] = s,
    AL(e, t, r, NC(e, n, i.hostVars, Wt), i)
}
function RC(e) {
    let t = 16;
    return e.signals ? t = 4096 : e.onPush && (t = 64),
    t
}
function UL(e, t, n) {
    let r = zn(t, e)
      , i = AC(n)
      , o = e[oi].rendererFactory
      , s = df(e, cf(e, i, null, RC(n), r, t, null, o.createRenderer(r, n), null, null, null));
    e[t.index] = s
}
function $L(e, t, n, r, i, o) {
    let s = zn(e, t);
    YL(t[at], s, o, e.value, n, r, i)
}
function YL(e, t, n, r, i, o, s) {
    if (o == null)
        e.removeAttribute(t, i, n);
    else {
        let a = s == null ? nr(o) : s(o, r || "", i);
        e.setAttribute(t, i, a, n)
    }
}
function WL(e, t, n, r, i, o) {
    let s = o[t];
    if (s !== null)
        for (let a = 0; a < s.length; ) {
            let l = s[a++]
              , c = s[a++]
              , f = s[a++]
              , p = s[a++];
            kC(r, n, l, c, f, p)
        }
}
function zL(e, t, n) {
    let r = null
      , i = 0;
    for (; i < n.length; ) {
        let o = n[i];
        if (o === 0) {
            i += 4;
            continue
        } else if (o === 5) {
            i += 2;
            continue
        }
        if (typeof o == "number")
            break;
        if (e.hasOwnProperty(o)) {
            r === null && (r = []);
            let s = e[o];
            for (let a = 0; a < s.length; a += 3)
                if (s[a] === t) {
                    r.push(o, s[a + 1], s[a + 2], n[i + 1]);
                    break
                }
        }
        i += 2
    }
    return r
}
function LC(e, t, n, r) {
    return [e, !0, 0, t, null, r, null, n, null, null]
}
function VC(e, t) {
    let n = e.contentQueries;
    if (n !== null) {
        let r = Me(null);
        try {
            for (let i = 0; i < n.length; i += 2) {
                let o = n[i]
                  , s = n[i + 1];
                if (s !== -1) {
                    let a = e.data[s];
                    Qd(o),
                    a.contentQueries(2, t[s], s)
                }
            }
        } finally {
            Me(r)
        }
    }
}
function df(e, t) {
    return e[wu] ? e[$w][rr] = t : e[wu] = t,
    e[$w] = t,
    t
}
function ig(e, t, n) {
    Qd(0);
    let r = Me(null);
    try {
        t(e, n)
    } finally {
        Me(r)
    }
}
function jC(e) {
    return e[dd] ??= []
}
function BC(e) {
    return e.cleanup ??= []
}
function ff(e, t) {
    let n = e[Nn]
      , r = n ? n.get(Yi, null) : null;
    r && r.handleError(t)
}
function xy(e, t, n, r, i) {
    for (let o = 0; o < n.length; ) {
        let s = n[o++]
          , a = n[o++]
          , l = n[o++]
          , c = t[s]
          , f = e.data[s];
        kC(f, c, r, a, l, i)
    }
}
function Cy(e, t, n) {
    let r = hx(t, e);
    G2(e[at], r, n)
}
function GL(e, t) {
    let n = Qi(t, e)
      , r = n[ae];
    qL(r, n);
    let i = n[ui];
    i !== null && n[Zs] === null && (n[Zs] = cy(i, n[Nn])),
    My(r, n, n[en])
}
function qL(e, t) {
    for (let n = t.length; n < e.blueprint.length; n++)
        t.push(e.blueprint[n])
}
function My(e, t, n) {
    ry(t);
    try {
        let r = e.viewQuery;
        r !== null && ig(1, r, n);
        let i = e.template;
        i !== null && OC(e, t, i, 1, n),
        e.firstCreatePass && (e.firstCreatePass = !1),
        t[si]?.finishViewCreation(e),
        e.staticContentQueries && VC(e, t),
        e.staticViewQueries && ig(2, e.viewQuery, n);
        let o = e.components;
        o !== null && ZL(t, o)
    } catch (r) {
        throw e.firstCreatePass && (e.incompleteFirstPass = !0,
        e.firstCreatePass = !1),
        r
    } finally {
        t[le] &= -5,
        iy()
    }
}
function ZL(e, t) {
    for (let n = 0; n < t.length; n++)
        GL(e, t[n])
}
function aa(e, t, n, r) {
    let i = Me(null);
    try {
        let o = t.tView
          , a = e[le] & 4096 ? 4096 : 16
          , l = cf(e, o, n, a, null, t, null, null, r?.injector ?? null, r?.embeddedViewInjector ?? null, r?.dehydratedView ?? null)
          , c = e[t.index];
        l[Fo] = c;
        let f = e[si];
        return f !== null && (l[si] = f.createEmbeddedView(o)),
        My(o, l, n),
        l
    } finally {
        Me(i)
    }
}
function HC(e, t) {
    let n = tn + t;
    if (n < e.length)
        return e[n]
}
function $o(e, t) {
    return !t || t.firstChild === null || Wx(e)
}
function ua(e, t, n, r=!0) {
    let i = t[ae];
    if (J2(i, t, e, n),
    r) {
        let s = ng(n, e)
          , a = t[at]
          , l = DC(a, e[Lo]);
        l !== null && Q2(i, e[Mn], a, t, l, s)
    }
    let o = t[Zs];
    o !== null && o.firstChild !== null && (o.firstChild = null)
}
function by(e, t) {
    let n = bu(e, t);
    return n !== void 0 && af(n[ae], n),
    n
}
function Id(e, t, n, r, i=!1) {
    for (; n !== null; ) {
        if (n.type === 128) {
            n = i ? n.projectionNext : n.next;
            continue
        }
        let o = t[n.index];
        o !== null && r.push(Pr(o)),
        li(o) && QL(o, r);
        let s = n.type;
        if (s & 8)
            Id(e, t, n.child, r);
        else if (s & 32) {
            let a = hy(n, t), l;
            for (; l = a(); )
                r.push(l)
        } else if (s & 16) {
            let a = CC(t, n);
            if (Array.isArray(a))
                r.push(...a);
            else {
                let l = Vo(t[On]);
                Id(l[ae], l, a, r, !0)
            }
        }
        n = i ? n.projectionNext : n.next
    }
    return r
}
function QL(e, t) {
    for (let n = tn; n < e.length; n++) {
        let r = e[n]
          , i = r[ae].firstChild;
        i !== null && Id(r[ae], r, i, t)
    }
    e[Lo] !== e[ui] && t.push(e[Lo])
}
var UC = [];
function XL(e) {
    return e[kn] ?? JL(e)
}
function JL(e) {
    let t = UC.pop() ?? Object.create(eV);
    return t.lView = e,
    t
}
function KL(e) {
    e.lView[kn] !== e && (e.lView = null,
    UC.push(e))
}
var eV = We(Te({}, Eo), {
    consumerIsAlwaysLive: !0,
    consumerMarkedDirty: e => {
        Ou(e.lView)
    }
    ,
    consumerOnSignalRead() {
        this.lView[kn] = this
    }
});
function tV(e) {
    let t = e[kn] ?? Object.create(nV);
    return t.lView = e,
    t
}
var nV = We(Te({}, Eo), {
    consumerIsAlwaysLive: !0,
    consumerMarkedDirty: e => {
        let t = Vo(e.lView);
        for (; t && !$C(t[ae]); )
            t = Vo(t);
        t && Jg(t)
    }
    ,
    consumerOnSignalRead() {
        this.lView[kn] = this
    }
});
function $C(e) {
    return e.type !== 2
}
function YC(e) {
    if (e[Ro] === null)
        return;
    let t = !0;
    for (; t; ) {
        let n = !1;
        for (let r of e[Ro])
            r.dirty && (n = !0,
            r.zone === null || Zone.current === r.zone ? r.run() : r.zone.run( () => r.run()));
        t = n && !!(e[le] & 8192)
    }
}
var rV = 100;
function WC(e, t=!0, n=0) {
    let i = e[oi].rendererFactory
      , o = !1;
    o || i.begin?.();
    try {
        iV(e, n)
    } catch (s) {
        throw t && ff(e, s),
        s
    } finally {
        o || i.end?.()
    }
}
function iV(e, t) {
    let n = _x();
    try {
        md(!0),
        og(e, t);
        let r = 0;
        for (; qd(e); ) {
            if (r === rV)
                throw new ce(103,!1);
            r++,
            og(e, 1)
        }
    } finally {
        md(n)
    }
}
function oV(e, t, n, r) {
    let i = t[le];
    if ((i & 256) === 256)
        return;
    let o = !1
      , s = !1;
    ry(t);
    let a = !0
      , l = null
      , c = null;
    o || ($C(e) ? (c = XL(t),
    l = Ns(c)) : F_() === null ? (a = !1,
    c = tV(t),
    l = Ns(c)) : t[kn] && (Os(t[kn]),
    t[kn] = null));
    try {
        px(t),
        uR(e.bindingStartIndex),
        n !== null && OC(e, t, n, 2, r);
        let f = (i & 3) === 3;
        if (!o)
            if (f) {
                let y = e.preOrderCheckHooks;
                y !== null && ed(t, y, null)
            } else {
                let y = e.preOrderHooks;
                y !== null && td(t, y, 0, null),
                gm(t, 0)
            }
        if (s || sV(t),
        YC(t),
        zC(t, 0),
        e.contentQueries !== null && VC(e, t),
        !o)
            if (f) {
                let y = e.contentCheckHooks;
                y !== null && ed(t, y)
            } else {
                let y = e.contentHooks;
                y !== null && td(t, y, 1),
                gm(t, 1)
            }
        xL(e, t);
        let p = e.components;
        p !== null && qC(t, p, 0);
        let m = e.viewQuery;
        if (m !== null && ig(2, m, r),
        !o)
            if (f) {
                let y = e.viewCheckHooks;
                y !== null && ed(t, y)
            } else {
                let y = e.viewHooks;
                y !== null && td(t, y, 2),
                gm(t, 2)
            }
        if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1),
        t[Kc]) {
            for (let y of t[Kc])
                y();
            t[Kc] = null
        }
        o || (t[le] &= -73)
    } catch (f) {
        throw o || Ou(t),
        f
    } finally {
        c !== null && (tu(c, l),
        a && KL(c)),
        iy()
    }
}
function zC(e, t) {
    for (let n = qx(e); n !== null; n = Zx(n))
        for (let r = tn; r < n.length; r++) {
            let i = n[r];
            GC(i, t)
        }
}
function sV(e) {
    for (let t = qx(e); t !== null; t = Zx(t)) {
        if (!(t[le] & pd.HasTransplantedViews))
            continue;
        let n = t[Qs];
        for (let r = 0; r < n.length; r++) {
            let i = n[r];
            Jg(i)
        }
    }
}
function aV(e, t, n) {
    let r = Qi(t, e);
    GC(r, n)
}
function GC(e, t) {
    Xg(e) && og(e, t)
}
function og(e, t) {
    let r = e[ae]
      , i = e[le]
      , o = e[kn]
      , s = !!(t === 0 && i & 16);
    if (s ||= !!(i & 64 && t === 0),
    s ||= !!(i & 1024),
    s ||= !!(o?.dirty && nu(o)),
    s ||= !1,
    o && (o.dirty = !1),
    e[le] &= -9217,
    s)
        oV(r, e, r.template, e[en]);
    else if (i & 8192) {
        YC(e),
        zC(e, 1);
        let a = r.components;
        a !== null && qC(e, a, 1)
    }
}
function qC(e, t, n) {
    for (let r = 0; r < t.length; r++)
        aV(e, t[r], n)
}
function hf(e, t) {
    let n = _x() ? 64 : 1088;
    for (e[oi].changeDetectionScheduler?.notify(t); e; ) {
        e[le] |= n;
        let r = Vo(e);
        if (Rm(e) && !r)
            return e;
        e = r
    }
    return null
}
var Yo = class {
    _lView;
    _cdRefInjectingView;
    notifyErrorHandler;
    _appRef = null;
    _attachedToViewContainer = !1;
    get rootNodes() {
        let t = this._lView
          , n = t[ae];
        return Id(n, t, n.firstChild, [])
    }
    constructor(t, n, r=!0) {
        this._lView = t,
        this._cdRefInjectingView = n,
        this.notifyErrorHandler = r
    }
    get context() {
        return this._lView[en]
    }
    get dirty() {
        return !!(this._lView[le] & 9280) || !!this._lView[kn]?.dirty
    }
    set context(t) {
        this._lView[en] = t
    }
    get destroyed() {
        return (this._lView[le] & 256) === 256
    }
    destroy() {
        if (this._appRef)
            this._appRef.detachView(this);
        else if (this._attachedToViewContainer) {
            let t = this._lView[Yt];
            if (li(t)) {
                let n = t[hd]
                  , r = n ? n.indexOf(this) : -1;
                r > -1 && (bu(t, r),
                ud(n, r))
            }
            this._attachedToViewContainer = !1
        }
        af(this._lView[ae], this._lView)
    }
    onDestroy(t) {
        Kg(this._lView, t)
    }
    markForCheck() {
        hf(this._cdRefInjectingView || this._lView, 4)
    }
    markForRefresh() {
        Jg(this._cdRefInjectingView || this._lView)
    }
    detach() {
        this._lView[le] &= -129
    }
    reattach() {
        Vm(this._lView),
        this._lView[le] |= 128
    }
    detectChanges() {
        this._lView[le] |= 1024,
        WC(this._lView, this.notifyErrorHandler)
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
        if (this._appRef)
            throw new ce(902,!1);
        this._attachedToViewContainer = !0
    }
    detachFromAppRef() {
        this._appRef = null;
        let t = Rm(this._lView)
          , n = this._lView[Fo];
        n !== null && !t && py(n, this._lView),
        yC(this._lView[ae], this._lView)
    }
    attachToAppRef(t) {
        if (this._attachedToViewContainer)
            throw new ce(902,!1);
        this._appRef = t;
        let n = Rm(this._lView)
          , r = this._lView[Fo];
        r !== null && !n && vC(r, this._lView),
        Vm(this._lView)
    }
}
  , ai = ( () => {
    class e {
        static __NG_ELEMENT_ID__ = cV
    }
    return e
}
)()
  , uV = ai
  , lV = class extends uV {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    constructor(t, n, r) {
        super(),
        this._declarationLView = t,
        this._declarationTContainer = n,
        this.elementRef = r
    }
    get ssrId() {
        return this._declarationTContainer.tView?.ssrId || null
    }
    createEmbeddedView(t, n) {
        return this.createEmbeddedViewImpl(t, n)
    }
    createEmbeddedViewImpl(t, n, r) {
        let i = aa(this._declarationLView, this._declarationTContainer, t, {
            embeddedViewInjector: n,
            dehydratedView: r
        });
        return new Yo(i)
    }
}
;
function cV() {
    return pf(Mt(), K())
}
function pf(e, t) {
    return e.type & 4 ? new lV(t,e,ia(e, t)) : null
}
var Zee = new RegExp(`^(\\d+)*(${XR}|${QR})*(.*)`);
var dV = () => null;
function Xs(e, t) {
    return dV(e, t)
}
var sg = class {
}
  , Ed = class {
}
  , ag = class {
    resolveComponentFactory(t) {
        throw Error(`No component factory found for ${dn(t)}.`)
    }
}
  , Js = class {
    static NULL = new ag
}
  , Sd = class {
}
  , yt = ( () => {
    class e {
        destroyNode = null;
        static __NG_ELEMENT_ID__ = () => fV()
    }
    return e
}
)();
function fV() {
    let e = K()
      , t = Mt()
      , n = Qi(t.index, e);
    return (Ui(n) ? n : e)[at]
}
var hV = ( () => {
    class e {
        static \u0275prov = me({
            token: e,
            providedIn: "root",
            factory: () => null
        })
    }
    return e
}
)();
function Td(e, t, n) {
    let r = n ? e.styles : null
      , i = n ? e.classes : null
      , o = 0;
    if (t !== null)
        for (let s = 0; s < t.length; s++) {
            let a = t[s];
            if (typeof a == "number")
                o = a;
            else if (o == 1)
                i = Tm(i, a);
            else if (o == 2) {
                let l = a
                  , c = t[++s];
                r = Tm(r, l + ": " + c + ";")
            }
        }
    n ? e.styles = r : e.stylesWithoutHost = r,
    n ? e.classes = i : e.classesWithoutHost = i
}
var kd = class extends Js {
    ngModule;
    constructor(t) {
        super(),
        this.ngModule = t
    }
    resolveComponentFactory(t) {
        let n = Ar(t);
        return new Wo(n,this.ngModule)
    }
}
;
function mD(e, t) {
    let n = [];
    for (let r in e) {
        if (!e.hasOwnProperty(r))
            continue;
        let i = e[r];
        if (i === void 0)
            continue;
        let o = Array.isArray(i)
          , s = o ? i[0] : i
          , a = o ? i[1] : zi.None;
        t ? n.push({
            propName: s,
            templateName: r,
            isSignal: (a & zi.SignalBased) !== 0
        }) : n.push({
            propName: s,
            templateName: r
        })
    }
    return n
}
function pV(e) {
    let t = e.toLowerCase();
    return t === "svg" ? fx : t === "math" ? XF : null
}
var Wo = class extends Ed {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    get inputs() {
        let t = this.componentDef
          , n = t.inputTransforms
          , r = mD(t.inputs, !0);
        if (n !== null)
            for (let i of r)
                n.hasOwnProperty(i.propName) && (i.transform = n[i.propName]);
        return r
    }
    get outputs() {
        return mD(this.componentDef.outputs, !1)
    }
    constructor(t, n) {
        super(),
        this.componentDef = t,
        this.ngModule = n,
        this.componentType = t.type,
        this.selector = wL(t.selectors),
        this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [],
        this.isBoundToModule = !!n
    }
    create(t, n, r, i) {
        let o = Me(null);
        try {
            i = i || this.ngModule;
            let s = i instanceof ir ? i : i?.injector;
            s && this.componentDef.getStandaloneInjector !== null && (s = this.componentDef.getStandaloneInjector(s) || s);
            let a = s ? new Ws(t,s) : t
              , l = a.get(Sd, null);
            if (l === null)
                throw new ce(407,!1);
            let c = a.get(hV, null)
              , f = a.get(Uo, null)
              , p = {
                rendererFactory: l,
                sanitizer: c,
                changeDetectionScheduler: f
            }
              , m = l.createRenderer(null, this.componentDef)
              , y = this.componentDef.selectors[0][0] || "div"
              , v = r ? bL(m, r, this.componentDef.encapsulation, a) : gC(m, y, pV(y))
              , w = 512;
            this.componentDef.signals ? w |= 4096 : this.componentDef.onPush || (w |= 16);
            let x = null;
            v !== null && (x = cy(v, a, !0));
            let D = wy(0, null, null, 1, 0, null, null, null, null, null, null)
              , I = cf(null, D, null, w, null, null, p, m, a, null, x);
            ry(I);
            let T, M, S = null;
            try {
                let E = this.componentDef, R, Z = null;
                E.findHostDirectiveDefs ? (R = [],
                Z = new Map,
                E.findHostDirectiveDefs(E, R, Z),
                R.push(E)) : R = [E];
                let ve = mV(I, v);
                S = gV(ve, v, E, R, I, p, m),
                M = Nu(D, ht),
                v && _V(m, E, v, r),
                n !== void 0 && wV(M, this.ngContentSelectors, n),
                T = vV(S, E, R, Z, I, [DV]),
                My(D, I, null)
            } catch (E) {
                throw S !== null && Zm(S),
                Zm(I),
                E
            } finally {
                iy()
            }
            return new ug(this.componentType,T,ia(M, I),I,M)
        } finally {
            Me(o)
        }
    }
}
  , ug = class extends sg {
    location;
    _rootLView;
    _tNode;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    previousInputValues = null;
    constructor(t, n, r, i, o) {
        super(),
        this.location = r,
        this._rootLView = i,
        this._tNode = o,
        this.instance = n,
        this.hostView = this.changeDetectorRef = new Yo(i,void 0,!1),
        this.componentType = t
    }
    setInput(t, n) {
        let r = this._tNode.inputs, i;
        if (r !== null && (i = r[t])) {
            if (this.previousInputValues ??= new Map,
            this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
                return;
            let o = this._rootLView;
            xy(o[ae], o, i, t, n),
            this.previousInputValues.set(t, n);
            let s = Qi(this._tNode.index, o);
            hf(s, 1)
        }
    }
    get injector() {
        return new Ao(this._tNode,this._rootLView)
    }
    destroy() {
        this.hostView.destroy()
    }
    onDestroy(t) {
        this.hostView.onDestroy(t)
    }
}
;
function mV(e, t) {
    let n = e[ae]
      , r = ht;
    return e[r] = t,
    Qo(n, r, 2, "#host", null)
}
function gV(e, t, n, r, i, o, s) {
    let a = i[ae];
    yV(r, e, t, s);
    let l = null;
    t !== null && (l = cy(t, i[Nn]));
    let c = o.rendererFactory.createRenderer(t, n)
      , f = cf(i, AC(n), null, RC(n), i[e.index], e, o, c, null, null, l);
    return a.firstCreatePass && rg(a, e, r.length - 1),
    df(i, f),
    i[e.index] = f
}
function yV(e, t, n, r) {
    for (let i of e)
        t.mergedAttrs = Du(t.mergedAttrs, i.hostAttrs);
    t.mergedAttrs !== null && (Td(t, t.mergedAttrs, !0),
    n !== null && IC(r, n, t))
}
function vV(e, t, n, r, i, o) {
    let s = Mt()
      , a = i[ae]
      , l = zn(s, i);
    PC(a, i, s, n, null, r);
    for (let f = 0; f < n.length; f++) {
        let p = s.directiveStart + f
          , m = Ho(i, a, p, s);
        Wi(m, i)
    }
    FC(a, i, s),
    l && Wi(l, i);
    let c = Ho(i, a, s.directiveStart + s.componentOffset, s);
    if (e[en] = i[en] = c,
    o !== null)
        for (let f of o)
            f(c, t);
    return yy(a, s, i),
    c
}
function _V(e, t, n, r) {
    if (r)
        Hm(e, n, ["ng-version", "19.0.5"]);
    else {
        let {attrs: i, classes: o} = DL(t.selectors[0]);
        i && Hm(e, n, i),
        o && o.length > 0 && bC(e, n, o.join(" "))
    }
}
function wV(e, t, n) {
    let r = e.projection = [];
    for (let i = 0; i < t.length; i++) {
        let o = n[i];
        r.push(o != null && o.length ? Array.from(o) : null)
    }
}
function DV() {
    let e = Mt();
    Kd(K()[ae], e)
}
var ar = ( () => {
    class e {
        static __NG_ELEMENT_ID__ = xV
    }
    return e
}
)();
function xV() {
    let e = Mt();
    return QC(e, K())
}
var CV = ar
  , ZC = class extends CV {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, r) {
        super(),
        this._lContainer = t,
        this._hostTNode = n,
        this._hostLView = r
    }
    get element() {
        return ia(this._hostTNode, this._hostLView)
    }
    get injector() {
        return new Ao(this._hostTNode,this._hostLView)
    }
    get parentInjector() {
        let t = oy(this._hostTNode, this._hostLView);
        if (Tx(t)) {
            let n = yd(t, this._hostLView)
              , r = gd(t)
              , i = n[ae].data[r + 8];
            return new Ao(i,n)
        } else
            return new Ao(null,this._hostLView)
    }
    clear() {
        for (; this.length > 0; )
            this.remove(this.length - 1)
    }
    get(t) {
        let n = gD(this._lContainer);
        return n !== null && n[t] || null
    }
    get length() {
        return this._lContainer.length - tn
    }
    createEmbeddedView(t, n, r) {
        let i, o;
        typeof r == "number" ? i = r : r != null && (i = r.index,
        o = r.injector);
        let s = Xs(this._lContainer, t.ssrId)
          , a = t.createEmbeddedViewImpl(n || {}, o, s);
        return this.insertImpl(a, i, $o(this._hostTNode, s)),
        a
    }
    createComponent(t, n, r, i, o) {
        let s = t && !zF(t), a;
        if (s)
            a = n;
        else {
            let v = n || {};
            a = v.index,
            r = v.injector,
            i = v.projectableNodes,
            o = v.environmentInjector || v.ngModuleRef
        }
        let l = s ? t : new Wo(Ar(t))
          , c = r || this.parentInjector;
        if (!o && l.ngModule == null) {
            let w = (s ? c : this.parentInjector).get(ir, null);
            w && (o = w)
        }
        let f = Ar(l.componentType ?? {})
          , p = Xs(this._lContainer, f?.id ?? null)
          , m = p?.firstChild ?? null
          , y = l.create(c, i, m, o);
        return this.insertImpl(y.hostView, a, $o(this._hostTNode, p)),
        y
    }
    insert(t, n) {
        return this.insertImpl(t, n, !0)
    }
    insertImpl(t, n, r) {
        let i = t._lView;
        if (KF(i)) {
            let a = this.indexOf(t);
            if (a !== -1)
                this.detach(a);
            else {
                let l = i[Yt]
                  , c = new ZC(l,l[Mn],l[Yt]);
                c.detach(c.indexOf(t))
            }
        }
        let o = this._adjustIndex(n)
          , s = this._lContainer;
        return ua(s, i, o, r),
        t.attachToViewContainerRef(),
        QD(Dm(s), o, t),
        t
    }
    move(t, n) {
        return this.insert(t, n)
    }
    indexOf(t) {
        let n = gD(this._lContainer);
        return n !== null ? n.indexOf(t) : -1
    }
    remove(t) {
        let n = this._adjustIndex(t, -1)
          , r = bu(this._lContainer, n);
        r && (ud(Dm(this._lContainer), n),
        af(r[ae], r))
    }
    detach(t) {
        let n = this._adjustIndex(t, -1)
          , r = bu(this._lContainer, n);
        return r && ud(Dm(this._lContainer), n) != null ? new Yo(r) : null
    }
    _adjustIndex(t, n=0) {
        return t ?? this.length + n
    }
}
;
function gD(e) {
    return e[hd]
}
function Dm(e) {
    return e[hd] || (e[hd] = [])
}
function QC(e, t) {
    let n, r = t[e.index];
    return li(r) ? n = r : (n = LC(r, t, null, e),
    t[e.index] = n,
    df(t, n)),
    bV(n, t, e, r),
    new ZC(n,e,t)
}
function MV(e, t) {
    let n = e[at]
      , r = n.createComment("")
      , i = zn(t, e)
      , o = DC(n, i);
    return bd(n, o, r, nL(n, i), !1),
    r
}
var bV = EV
  , IV = () => !1;
function XC(e, t, n) {
    return IV(e, t, n)
}
function EV(e, t, n, r) {
    if (e[Lo])
        return;
    let i;
    n.type & 8 ? i = Pr(r) : i = MV(t, n),
    e[Lo] = i
}
var lg = class e {
    queryList;
    matches = null;
    constructor(t) {
        this.queryList = t
    }
    clone() {
        return new e(this.queryList)
    }
    setDirty() {
        this.queryList.setDirty()
    }
}
  , cg = class e {
    queries;
    constructor(t=[]) {
        this.queries = t
    }
    createEmbeddedView(t) {
        let n = t.queries;
        if (n !== null) {
            let r = t.contentQueries !== null ? t.contentQueries[0] : n.length
              , i = [];
            for (let o = 0; o < r; o++) {
                let s = n.getByIndex(o)
                  , a = this.queries[s.indexInDeclarationView];
                i.push(a.clone())
            }
            return new e(i)
        }
        return null
    }
    insertView(t) {
        this.dirtyQueriesWithMatches(t)
    }
    detachView(t) {
        this.dirtyQueriesWithMatches(t)
    }
    finishViewCreation(t) {
        this.dirtyQueriesWithMatches(t)
    }
    dirtyQueriesWithMatches(t) {
        for (let n = 0; n < this.queries.length; n++)
            Ey(t, n).matches !== null && this.queries[n].setDirty()
    }
}
  , Nd = class {
    flags;
    read;
    predicate;
    constructor(t, n, r=null) {
        this.flags = n,
        this.read = r,
        typeof t == "string" ? this.predicate = OV(t) : this.predicate = t
    }
}
  , dg = class e {
    queries;
    constructor(t=[]) {
        this.queries = t
    }
    elementStart(t, n) {
        for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n)
    }
    elementEnd(t) {
        for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t)
    }
    embeddedTView(t) {
        let n = null;
        for (let r = 0; r < this.length; r++) {
            let i = n !== null ? n.length : 0
              , o = this.getByIndex(r).embeddedTView(t, i);
            o && (o.indexInDeclarationView = r,
            n !== null ? n.push(o) : n = [o])
        }
        return n !== null ? new e(n) : null
    }
    template(t, n) {
        for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n)
    }
    getByIndex(t) {
        return this.queries[t]
    }
    get length() {
        return this.queries.length
    }
    track(t) {
        this.queries.push(t)
    }
}
  , fg = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n=-1) {
        this.metadata = t,
        this._declarationNodeIndex = n
    }
    elementStart(t, n) {
        this.isApplyingToNode(n) && this.matchTNode(t, n)
    }
    elementEnd(t) {
        this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
    }
    template(t, n) {
        this.elementStart(t, n)
    }
    embeddedTView(t, n) {
        return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0,
        this.addMatch(-t.index, n),
        new e(this.metadata)) : null
    }
    isApplyingToNode(t) {
        if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
            let n = this._declarationNodeIndex
              , r = t.parent;
            for (; r !== null && r.type & 8 && r.index !== n; )
                r = r.parent;
            return n === (r !== null ? r.index : -1)
        }
        return this._appliesToNextNode
    }
    matchTNode(t, n) {
        let r = this.metadata.predicate;
        if (Array.isArray(r))
            for (let i = 0; i < r.length; i++) {
                let o = r[i];
                this.matchTNodeWithReadOption(t, n, SV(n, o)),
                this.matchTNodeWithReadOption(t, n, nd(n, t, o, !1, !1))
            }
        else
            r === ai ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, nd(n, t, r, !1, !1))
    }
    matchTNodeWithReadOption(t, n, r) {
        if (r !== null) {
            let i = this.metadata.read;
            if (i !== null)
                if (i === Ne || i === ar || i === ai && n.type & 4)
                    this.addMatch(n.index, -2);
                else {
                    let o = nd(n, t, i, !1, !1);
                    o !== null && this.addMatch(n.index, o)
                }
            else
                this.addMatch(n.index, r)
        }
    }
    addMatch(t, n) {
        this.matches === null ? this.matches = [t, n] : this.matches.push(t, n)
    }
}
;
function SV(e, t) {
    let n = e.localNames;
    if (n !== null) {
        for (let r = 0; r < n.length; r += 2)
            if (n[r] === t)
                return n[r + 1]
    }
    return null
}
function TV(e, t) {
    return e.type & 11 ? ia(e, t) : e.type & 4 ? pf(e, t) : null
}
function kV(e, t, n, r) {
    return n === -1 ? TV(t, e) : n === -2 ? NV(e, t, r) : Ho(e, e[ae], n, t)
}
function NV(e, t, n) {
    if (n === Ne)
        return ia(t, e);
    if (n === ai)
        return pf(t, e);
    if (n === ar)
        return QC(t, e)
}
function JC(e, t, n, r) {
    let i = t[si].queries[r];
    if (i.matches === null) {
        let o = e.data
          , s = n.matches
          , a = [];
        for (let l = 0; s !== null && l < s.length; l += 2) {
            let c = s[l];
            if (c < 0)
                a.push(null);
            else {
                let f = o[c];
                a.push(kV(t, f, s[l + 1], n.metadata.read))
            }
        }
        i.matches = a
    }
    return i.matches
}
function hg(e, t, n, r) {
    let i = e.queries.getByIndex(n)
      , o = i.matches;
    if (o !== null) {
        let s = JC(e, t, i, n);
        for (let a = 0; a < o.length; a += 2) {
            let l = o[a];
            if (l > 0)
                r.push(s[a / 2]);
            else {
                let c = o[a + 1]
                  , f = t[-l];
                for (let p = tn; p < f.length; p++) {
                    let m = f[p];
                    m[Fo] === m[Yt] && hg(m[ae], m, c, r)
                }
                if (f[Qs] !== null) {
                    let p = f[Qs];
                    for (let m = 0; m < p.length; m++) {
                        let y = p[m];
                        hg(y[ae], y, c, r)
                    }
                }
            }
        }
    }
    return r
}
function Iy(e, t) {
    return e[si].queries[t].queryList
}
function KC(e, t, n) {
    let r = new qm((n & 4) === 4);
    return SL(e, t, r, r.destroy),
    (t[si] ??= new cg).queries.push(new lg(r)) - 1
}
function eM(e, t, n) {
    let r = Ze();
    return r.firstCreatePass && (nM(r, new Nd(e,t,n), -1),
    (t & 2) === 2 && (r.staticViewQueries = !0)),
    KC(r, K(), t)
}
function tM(e, t, n, r) {
    let i = Ze();
    if (i.firstCreatePass) {
        let o = Mt();
        nM(i, new Nd(t,n,r), o.index),
        AV(i, e),
        (n & 2) === 2 && (i.staticContentQueries = !0)
    }
    return KC(i, K(), n)
}
function OV(e) {
    return e.split(",").map(t => t.trim())
}
function nM(e, t, n) {
    e.queries === null && (e.queries = new dg),
    e.queries.track(new fg(t,n))
}
function AV(e, t) {
    let n = e.contentQueries || (e.contentQueries = [])
      , r = n.length ? n[n.length - 1] : -1;
    t !== r && n.push(e.queries.length - 1, t)
}
function Ey(e, t) {
    return e.queries.getByIndex(t)
}
function rM(e, t) {
    let n = e[ae]
      , r = Ey(n, t);
    return r.crossesNgTemplate ? hg(n, e, t, []) : JC(n, e, r, t)
}
function PV(e) {
    return typeof e == "function" && e[Ut] !== void 0
}
function Fe(e, t) {
    Fn("NgSignals");
    let n = W_(e)
      , r = n[Ut];
    return t?.equal && (r.equal = t.equal),
    n.set = i => ru(r, i),
    n.update = i => z_(r, i),
    n.asReadonly = iM.bind(n),
    n
}
function iM() {
    let e = this[Ut];
    if (e.readonlyFn === void 0) {
        let t = () => this();
        t[Ut] = e,
        e.readonlyFn = t
    }
    return e.readonlyFn
}
function oM(e) {
    return PV(e) && typeof e.set == "function"
}
function Sy(e, t, n) {
    let r, i = Vp( () => {
        r._dirtyCounter();
        let o = FV(r, e);
        if (t && o === void 0)
            throw new ce(-951,!1);
        return o
    }
    );
    return r = i[Ut],
    r._dirtyCounter = Fe(0),
    r._flatValue = void 0,
    i
}
function sM(e) {
    return Sy(!0, !1, e)
}
function aM(e) {
    return Sy(!0, !0, e)
}
function uM(e) {
    return Sy(!1, !1, e)
}
function lM(e, t) {
    let n = e[Ut];
    n._lView = K(),
    n._queryIndex = t,
    n._queryList = Iy(n._lView, t),
    n._queryList.onDirty( () => n._dirtyCounter.update(r => r + 1))
}
function FV(e, t) {
    let n = e._lView
      , r = e._queryIndex;
    if (n === void 0 || r === void 0 || n[le] & 4)
        return t ? void 0 : cn;
    let i = Iy(n, r)
      , o = rM(n, r);
    return i.reset(o, Yx),
    t ? i.first : i._changesDetected || e._flatValue === void 0 ? e._flatValue = i.toArray() : e._flatValue
}
function yD(e, t) {
    return sM(t)
}
function RV(e, t) {
    return aM(t)
}
var la = (yD.required = RV,
yD);
function Xee(e, t) {
    return uM(t)
}
function vD(e, t) {
    return sM(t)
}
function LV(e, t) {
    return aM(t)
}
var Jee = (vD.required = LV,
vD);
function Kee(e, t) {
    return uM(t)
}
function cM(e, t) {
    let n = Object.create(BD)
      , r = new xd;
    n.value = e;
    function i() {
        return eu(n),
        _D(n.value),
        n.value
    }
    return i[Ut] = n,
    i.asReadonly = iM.bind(i),
    i.set = o => {
        n.equal(n.value, o) || (ru(n, o),
        r.emit(o))
    }
    ,
    i.update = o => {
        _D(n.value),
        i.set(o(n.value))
    }
    ,
    i.subscribe = r.subscribe.bind(r),
    i.destroyRef = r.destroyRef,
    i
}
function _D(e) {
    if (e === jd)
        throw new ce(952,!1)
}
function wD(e, t) {
    return cM(e, t)
}
function VV(e) {
    return cM(jd, e)
}
var mf = (wD.required = VV,
wD);
var Gi = class {
}
  , pg = class {
}
;
var mg = class extends Gi {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new kd(this);
    constructor(t, n, r, i=!0) {
        super(),
        this.ngModuleType = t,
        this._parent = n;
        let o = ex(t);
        this._bootstrapComponents = mC(o.bootstrap),
        this._r3Injector = Vx(t, n, [{
            provide: Gi,
            useValue: this
        }, {
            provide: Js,
            useValue: this.componentFactoryResolver
        }, ...r], dn(t), new Set(["environment"])),
        i && this.resolveInjectorInitializers()
    }
    resolveInjectorInitializers() {
        this._r3Injector.resolveInjectorInitializers(),
        this.instance = this._r3Injector.get(this.ngModuleType)
    }
    get injector() {
        return this._r3Injector
    }
    destroy() {
        let t = this._r3Injector;
        !t.destroyed && t.destroy(),
        this.destroyCbs.forEach(n => n()),
        this.destroyCbs = null
    }
    onDestroy(t) {
        this.destroyCbs.push(t)
    }
}
  , gg = class extends pg {
    moduleType;
    constructor(t) {
        super(),
        this.moduleType = t
    }
    create(t) {
        return new mg(this.moduleType,t,[])
    }
}
;
var Od = class extends Gi {
    injector;
    componentFactoryResolver = new kd(this);
    instance = null;
    constructor(t) {
        super();
        let n = new _u([...t.providers, {
            provide: Gi,
            useValue: this
        }, {
            provide: Js,
            useValue: this.componentFactoryResolver
        }],t.parent || Ud(),t.debugName,new Set(["environment"]));
        this.injector = n,
        t.runEnvironmentInitializers && n.resolveInjectorInitializers()
    }
    destroy() {
        this.injector.destroy()
    }
    onDestroy(t) {
        this.injector.onDestroy(t)
    }
}
;
function dM(e, t, n=null) {
    return new Od({
        providers: e,
        parent: t,
        debugName: n,
        runEnvironmentInitializers: !0
    }).injector
}
var jV = ( () => {
    class e {
        _injector;
        cachedInjectors = new Map;
        constructor(n) {
            this._injector = n
        }
        getOrCreateStandaloneInjector(n) {
            if (!n.standalone)
                return null;
            if (!this.cachedInjectors.has(n)) {
                let r = qg(!1, n.type)
                  , i = r.length > 0 ? dM([r], this._injector, `Standalone[${n.type.name}]`) : null;
                this.cachedInjectors.set(n, i)
            }
            return this.cachedInjectors.get(n)
        }
        ngOnDestroy() {
            try {
                for (let n of this.cachedInjectors.values())
                    n !== null && n.destroy()
            } finally {
                this.cachedInjectors.clear()
            }
        }
        static \u0275prov = me({
            token: e,
            providedIn: "environment",
            factory: () => new e(ze(ir))
        })
    }
    return e
}
)();
function Ge(e) {
    return Tu( () => {
        let t = fM(e)
          , n = We(Te({}, t), {
            decls: e.decls,
            vars: e.vars,
            template: e.template,
            consts: e.consts || null,
            ngContentSelectors: e.ngContentSelectors,
            onPush: e.changeDetection === zx.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            dependencies: t.standalone && e.dependencies || null,
            getStandaloneInjector: t.standalone ? i => i.get(jV).getOrCreateStandaloneInjector(n) : null,
            getExternalStyles: null,
            signals: e.signals ?? !1,
            data: e.data || {},
            encapsulation: e.encapsulation || Cu.Emulated,
            styles: e.styles || cn,
            _: null,
            schemas: e.schemas || null,
            tView: null,
            id: ""
        });
        t.standalone && Fn("NgStandalone"),
        hM(n);
        let r = e.dependencies;
        return n.directiveDefs = xD(r, !1),
        n.pipeDefs = xD(r, !0),
        n.id = UV(n),
        n
    }
    )
}
function BV(e) {
    return Ar(e) || Wg(e)
}
function HV(e) {
    return e !== null
}
function eo(e) {
    return Tu( () => ({
        type: e.type,
        bootstrap: e.bootstrap || cn,
        declarations: e.declarations || cn,
        imports: e.imports || cn,
        exports: e.exports || cn,
        transitiveCompileScopes: null,
        schemas: e.schemas || null,
        id: e.id || null
    }))
}
function DD(e, t) {
    if (e == null)
        return Gs;
    let n = {};
    for (let r in e)
        if (e.hasOwnProperty(r)) {
            let i = e[r], o, s, a = zi.None;
            Array.isArray(i) ? (a = i[0],
            o = i[1],
            s = i[2] ?? o) : (o = i,
            s = i),
            t ? (n[o] = a !== zi.None ? [r, a] : r,
            t[o] = s) : n[o] = r
        }
    return n
}
function ee(e) {
    return Tu( () => {
        let t = fM(e);
        return hM(t),
        t
    }
    )
}
function Re(e) {
    return {
        type: e.type,
        name: e.name,
        factory: null,
        pure: e.pure !== !1,
        standalone: e.standalone ?? !0,
        onDestroy: e.type.prototype.ngOnDestroy || null
    }
}
function fM(e) {
    let t = {};
    return {
        type: e.type,
        providersResolver: null,
        factory: null,
        hostBindings: e.hostBindings || null,
        hostVars: e.hostVars || 0,
        hostAttrs: e.hostAttrs || null,
        contentQueries: e.contentQueries || null,
        declaredInputs: t,
        inputTransforms: null,
        inputConfig: e.inputs || Gs,
        exportAs: e.exportAs || null,
        standalone: e.standalone ?? !0,
        signals: e.signals === !0,
        selectors: e.selectors || cn,
        viewQuery: e.viewQuery || null,
        features: e.features || null,
        setInput: null,
        findHostDirectiveDefs: null,
        hostDirectives: null,
        inputs: DD(e.inputs, t),
        outputs: DD(e.outputs),
        debugInfo: null
    }
}
function hM(e) {
    e.features?.forEach(t => t(e))
}
function xD(e, t) {
    if (!e)
        return null;
    let n = t ? zg : BV;
    return () => (typeof e == "function" ? e() : e).map(r => n(r)).filter(HV)
}
function UV(e) {
    let t = 0
      , n = typeof e.consts == "function" ? "" : e.consts
      , r = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery];
    for (let o of r.join("|"))
        t = Math.imul(31, t) + o.charCodeAt(0) << 0;
    return t += 2147483648,
    "c" + t
}
function $V(e) {
    return Object.getPrototypeOf(e.prototype).constructor
}
function pt(e) {
    let t = $V(e.type)
      , n = !0
      , r = [e];
    for (; t; ) {
        let i;
        if ($i(e))
            i = t.\u0275cmp || t.\u0275dir;
        else {
            if (t.\u0275cmp)
                throw new ce(903,!1);
            i = t.\u0275dir
        }
        if (i) {
            if (n) {
                r.push(i);
                let s = e;
                s.inputs = Qc(e.inputs),
                s.inputTransforms = Qc(e.inputTransforms),
                s.declaredInputs = Qc(e.declaredInputs),
                s.outputs = Qc(e.outputs);
                let a = i.hostBindings;
                a && qV(e, a);
                let l = i.viewQuery
                  , c = i.contentQueries;
                if (l && zV(e, l),
                c && GV(e, c),
                YV(e, i),
                dF(e.outputs, i.outputs),
                $i(i) && i.data.animation) {
                    let f = e.data;
                    f.animation = (f.animation || []).concat(i.data.animation)
                }
            }
            let o = i.features;
            if (o)
                for (let s = 0; s < o.length; s++) {
                    let a = o[s];
                    a && a.ngInherit && a(e),
                    a === pt && (n = !1)
                }
        }
        t = Object.getPrototypeOf(t)
    }
    WV(r)
}
function YV(e, t) {
    for (let n in t.inputs) {
        if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
            continue;
        let r = t.inputs[n];
        if (r !== void 0 && (e.inputs[n] = r,
        e.declaredInputs[n] = t.declaredInputs[n],
        t.inputTransforms !== null)) {
            let i = Array.isArray(r) ? r[0] : r;
            if (!t.inputTransforms.hasOwnProperty(i))
                continue;
            e.inputTransforms ??= {},
            e.inputTransforms[i] = t.inputTransforms[i]
        }
    }
}
function WV(e) {
    let t = 0
      , n = null;
    for (let r = e.length - 1; r >= 0; r--) {
        let i = e[r];
        i.hostVars = t += i.hostVars,
        i.hostAttrs = Du(i.hostAttrs, n = Du(n, i.hostAttrs))
    }
}
function Qc(e) {
    return e === Gs ? {} : e === cn ? [] : e
}
function zV(e, t) {
    let n = e.viewQuery;
    n ? e.viewQuery = (r, i) => {
        t(r, i),
        n(r, i)
    }
    : e.viewQuery = t
}
function GV(e, t) {
    let n = e.contentQueries;
    n ? e.contentQueries = (r, i, o) => {
        t(r, i, o),
        n(r, i, o)
    }
    : e.contentQueries = t
}
function qV(e, t) {
    let n = e.hostBindings;
    n ? e.hostBindings = (r, i) => {
        t(r, i),
        n(r, i)
    }
    : e.hostBindings = t
}
function ZV(e) {
    let t = e.inputConfig
      , n = {};
    for (let r in t)
        if (t.hasOwnProperty(r)) {
            let i = t[r];
            Array.isArray(i) && i[3] && (n[r] = i[3])
        }
    e.inputTransforms = n
}
function pM(e) {
    return Ty(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1
}
function QV(e, t) {
    if (Array.isArray(e))
        for (let n = 0; n < e.length; n++)
            t(e[n]);
    else {
        let n = e[Symbol.iterator](), r;
        for (; !(r = n.next()).done; )
            t(r.value)
    }
}
function Ty(e) {
    return e !== null && (typeof e == "function" || typeof e == "object")
}
function Xo(e, t, n) {
    return e[t] = n
}
function ky(e, t) {
    return e[t]
}
function fn(e, t, n) {
    let r = e[t];
    return Object.is(r, n) ? !1 : (e[t] = n,
    !0)
}
function Ks(e, t, n, r) {
    let i = fn(e, t, n);
    return fn(e, t + 1, r) || i
}
function XV(e, t, n, r, i) {
    let o = Ks(e, t, n, r);
    return fn(e, t + 2, i) || o
}
function gf(e, t, n, r, i, o) {
    let s = Ks(e, t, n, r);
    return Ks(e, t + 2, i, o) || s
}
function JV(e) {
    return (e.flags & 32) === 32
}
function KV(e, t, n, r, i, o, s, a, l) {
    let c = t.consts
      , f = Qo(t, e, 4, s || null, a || null);
    Dy(t, n, f, Fr(c, l)),
    Kd(t, f);
    let p = f.tView = wy(2, f, r, i, o, t.directiveRegistry, t.pipeRegistry, null, t.schemas, c, null);
    return t.queries !== null && (t.queries.template(t, f),
    p.queries = t.queries.embeddedTView(f)),
    f
}
function Iu(e, t, n, r, i, o, s, a, l, c) {
    let f = n + ht
      , p = t.firstCreatePass ? KV(f, t, e, r, i, o, s, a, l) : t.data[f];
    Xi(p, !1);
    let m = ej(t, e, p, n);
    Xd() && uf(t, e, m, p),
    Wi(m, e);
    let y = LC(m, e, m, p);
    return e[f] = y,
    df(e, y),
    XC(y, p, e),
    zd(p) && vy(t, e, p),
    l != null && _y(e, p, c),
    p
}
function Ot(e, t, n, r, i, o, s, a) {
    let l = K()
      , c = Ze()
      , f = Fr(c.consts, o);
    return Iu(l, c, e, t, n, r, i, f, s, a),
    Ot
}
var ej = tj;
function tj(e, t, n, r) {
    return Jd(!0),
    t[at].createComment("")
}
function nj(e, t) {
    let n = t.get(oj)
      , r = () => n.remove(e);
    return n.add(e),
    r
}
var rj = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout
  , ij = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout
  , oj = ( () => {
    class e {
        executingCallbacks = !1;
        idleId = null;
        current = new Set;
        deferred = new Set;
        ngZone = Y(Nt);
        requestIdleCallbackFn = rj().bind(globalThis);
        cancelIdleCallbackFn = ij().bind(globalThis);
        add(n) {
            (this.executingCallbacks ? this.deferred : this.current).add(n),
            this.idleId === null && this.scheduleIdleCallback()
        }
        remove(n) {
            let {current: r, deferred: i} = this;
            r.delete(n),
            i.delete(n),
            r.size === 0 && i.size === 0 && this.cancelIdleCallback()
        }
        scheduleIdleCallback() {
            let n = () => {
                this.cancelIdleCallback(),
                this.executingCallbacks = !0;
                for (let r of this.current)
                    r();
                if (this.current.clear(),
                this.executingCallbacks = !1,
                this.deferred.size > 0) {
                    for (let r of this.deferred)
                        this.current.add(r);
                    this.deferred.clear(),
                    this.scheduleIdleCallback()
                }
            }
            ;
            this.idleId = this.requestIdleCallbackFn( () => this.ngZone.run(n))
        }
        cancelIdleCallback() {
            this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId),
            this.idleId = null)
        }
        ngOnDestroy() {
            this.cancelIdleCallback(),
            this.current.clear(),
            this.deferred.clear()
        }
        static \u0275prov = me({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)();
function sj(e, t, n) {
    let r = n.get(aj)
      , i = () => r.remove(t);
    return r.add(e, t),
    i
}
var aj = ( () => {
    class e {
        executingCallbacks = !1;
        timeoutId = null;
        invokeTimerAt = null;
        current = [];
        deferred = [];
        add(n, r) {
            let i = this.executingCallbacks ? this.deferred : this.current;
            this.addToQueue(i, Date.now() + n, r),
            this.scheduleTimer()
        }
        remove(n) {
            let {current: r, deferred: i} = this;
            this.removeFromQueue(r, n) === -1 && this.removeFromQueue(i, n),
            r.length === 0 && i.length === 0 && this.clearTimeout()
        }
        addToQueue(n, r, i) {
            let o = n.length;
            for (let s = 0; s < n.length; s += 2)
                if (n[s] > r) {
                    o = s;
                    break
                }
            XD(n, o, r, i)
        }
        removeFromQueue(n, r) {
            let i = -1;
            for (let o = 0; o < n.length; o += 2)
                if (n[o + 1] === r) {
                    i = o;
                    break
                }
            return i > -1 && Uw(n, i, 2),
            i
        }
        scheduleTimer() {
            let n = () => {
                this.clearTimeout(),
                this.executingCallbacks = !0;
                let i = [...this.current]
                  , o = Date.now();
                for (let a = 0; a < i.length; a += 2) {
                    let l = i[a]
                      , c = i[a + 1];
                    if (l <= o)
                        c();
                    else
                        break
                }
                let s = -1;
                for (let a = 0; a < this.current.length && this.current[a] <= o; a += 2)
                    s = a + 1;
                if (s >= 0 && Uw(this.current, 0, s + 1),
                this.executingCallbacks = !1,
                this.deferred.length > 0) {
                    for (let a = 0; a < this.deferred.length; a += 2) {
                        let l = this.deferred[a]
                          , c = this.deferred[a + 1];
                        this.addToQueue(this.current, l, c)
                    }
                    this.deferred.length = 0
                }
                this.scheduleTimer()
            }
            ;
            if (this.current.length > 0) {
                let i = Date.now()
                  , o = this.current[0];
                if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - o > 16) {
                    this.clearTimeout();
                    let s = Math.max(o - i, 16);
                    this.invokeTimerAt = o,
                    this.timeoutId = setTimeout(n, s)
                }
            }
        }
        clearTimeout() {
            this.timeoutId !== null && (clearTimeout(this.timeoutId),
            this.timeoutId = null)
        }
        ngOnDestroy() {
            this.clearTimeout(),
            this.current.length = 0,
            this.deferred.length = 0
        }
        static \u0275prov = me({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)()
  , uj = ( () => {
    class e {
        cachedInjectors = new Map;
        getOrCreateInjector(n, r, i, o) {
            if (!this.cachedInjectors.has(n)) {
                let s = i.length > 0 ? dM(i, r, o) : null;
                this.cachedInjectors.set(n, s)
            }
            return this.cachedInjectors.get(n)
        }
        ngOnDestroy() {
            try {
                for (let n of this.cachedInjectors.values())
                    n !== null && n.destroy()
            } finally {
                this.cachedInjectors.clear()
            }
        }
        static \u0275prov = me({
            token: e,
            providedIn: "environment",
            factory: () => new e
        })
    }
    return e
}
)();
var lj = new ue("");
function xm(e, t, n) {
    return e.get(uj).getOrCreateInjector(t, e, n, "")
}
function cj(e, t, n) {
    if (e instanceof Ws) {
        let i = e.injector
          , o = e.parentInjector
          , s = xm(o, t, n);
        return new Ws(i,s)
    }
    let r = e.get(ir);
    if (r !== e) {
        let i = xm(r, t, n);
        return new Ws(e,i)
    }
    return xm(e, t, n)
}
function Bi(e, t, n, r=!1) {
    let i = n[Yt]
      , o = i[ae];
    if (GF(i))
        return;
    let s = oa(i, t)
      , a = s[nf]
      , l = s[c2];
    if (!(l !== null && e < l) && MD(a, e) && MD(s[zs] ?? -1, e)) {
        let c = sa(o, t)
          , p = !r && !0 && (sC(c) !== null || Jm(c, gt.Loading) !== null || Jm(c, gt.Placeholder)) ? yg : mM;
        try {
            p(e, s, n, t, i)
        } catch (m) {
            ff(i, m)
        }
    }
}
function dj(e, t) {
    return e[fd]?.find(n => n.data[Jx] === t[nf]) ?? null
}
function mM(e, t, n, r, i) {
    let o = p2(e, i, r);
    if (o !== null) {
        t[nf] = e;
        let s = i[ae]
          , a = o + ht
          , l = Nu(s, a)
          , c = 0;
        by(n, c);
        let f;
        if (e === gt.Complete) {
            let y = sa(s, r)
              , v = y.providers;
            v && v.length > 0 && (f = cj(i[Nn], y, v))
        }
        let p = dj(n, t);
        n[fd] = null;
        let m = aa(i, l, null, {
            injector: f,
            dehydratedView: p
        });
        if (ua(n, m, c, $o(l, p)),
        hf(m, 2),
        (e === gt.Complete || e === gt.Error) && Array.isArray(t[_m])) {
            for (let y of t[_m])
                y();
            t[_m] = null
        }
    }
}
function fj(e, t, n, r, i) {
    let o = Date.now()
      , s = i[ae]
      , a = sa(s, r);
    if (t[mu] === null || t[mu] <= o) {
        t[mu] = null;
        let l = sC(a)
          , c = t[zc] !== null;
        if (e === gt.Loading && l !== null && !c) {
            t[zs] = e;
            let f = CD(l, t, r, n, i);
            t[zc] = f
        } else {
            e > gt.Loading && c && (t[zc](),
            t[zc] = null,
            t[zs] = null),
            mM(e, t, n, r, i);
            let f = Jm(a, e);
            f !== null && (t[mu] = o + f,
            CD(f, t, r, n, i))
        }
    } else
        t[zs] = e
}
function CD(e, t, n, r, i) {
    return sj(e, () => {
        let s = t[zs];
        t[mu] = null,
        t[zs] = null,
        s !== null && Bi(s, n, r)
    }
    , i[Nn])
}
function MD(e, t) {
    return e < t
}
function gM(e, t) {
    let n = e[t.index];
    Bi(gt.Placeholder, t, n)
}
function bD(e, t, n) {
    e.loadingPromise.then( () => {
        e.loadingState === xn.COMPLETE ? Bi(gt.Complete, t, n) : e.loadingState === xn.FAILED && Bi(gt.Error, t, n)
    }
    )
}
var yg = null;
function ete(e, t, n, r) {
    let i = e.consts;
    n != null && (t.placeholderBlockConfig = Fr(i, n)),
    r != null && (t.loadingBlockConfig = Fr(i, r)),
    yg === null && (yg = fj)
}
var tte = ( () => {
    class e {
        log(n) {
            console.log(n)
        }
        warn(n) {
            console.warn(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac,
            providedIn: "platform"
        })
    }
    return e
}
)();
var hj = new ue("")
  , pj = new ue("")
  , nte = ( () => {
    class e {
        _ngZone;
        registry;
        _isZoneStable = !0;
        _callbacks = [];
        taskTrackingZone = null;
        constructor(n, r, i) {
            this._ngZone = n,
            this.registry = r,
            Ny || (gj(i),
            i.addToWindow(r)),
            this._watchAngularEvents(),
            n.run( () => {
                this.taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone")
            }
            )
        }
        _watchAngularEvents() {
            this._ngZone.onUnstable.subscribe({
                next: () => {
                    this._isZoneStable = !1
                }
            }),
            this._ngZone.runOutsideAngular( () => {
                this._ngZone.onStable.subscribe({
                    next: () => {
                        Nt.assertNotInAngularZone(),
                        queueMicrotask( () => {
                            this._isZoneStable = !0,
                            this._runCallbacksIfReady()
                        }
                        )
                    }
                })
            }
            )
        }
        isStable() {
            return this._isZoneStable && !this._ngZone.hasPendingMacrotasks
        }
        _runCallbacksIfReady() {
            if (this.isStable())
                queueMicrotask( () => {
                    for (; this._callbacks.length !== 0; ) {
                        let n = this._callbacks.pop();
                        clearTimeout(n.timeoutId),
                        n.doneCb()
                    }
                }
                );
            else {
                let n = this.getPendingTasks();
                this._callbacks = this._callbacks.filter(r => r.updateCb && r.updateCb(n) ? (clearTimeout(r.timeoutId),
                !1) : !0)
            }
        }
        getPendingTasks() {
            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n => ({
                source: n.source,
                creationLocation: n.creationLocation,
                data: n.data
            })) : []
        }
        addCallback(n, r, i) {
            let o = -1;
            r && r > 0 && (o = setTimeout( () => {
                this._callbacks = this._callbacks.filter(s => s.timeoutId !== o),
                n()
            }
            , r)),
            this._callbacks.push({
                doneCb: n,
                timeoutId: o,
                updateCb: i
            })
        }
        whenStable(n, r, i) {
            if (i && !this.taskTrackingZone)
                throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
            this.addCallback(n, r, i),
            this._runCallbacksIfReady()
        }
        registerApplication(n) {
            this.registry.registerApplication(n, this)
        }
        unregisterApplication(n) {
            this.registry.unregisterApplication(n)
        }
        findProviders(n, r, i) {
            return []
        }
        static \u0275fac = function(r) {
            return new (r || e)(ze(Nt),ze(mj),ze(pj))
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , mj = ( () => {
    class e {
        _applications = new Map;
        registerApplication(n, r) {
            this._applications.set(n, r)
        }
        unregisterApplication(n) {
            this._applications.delete(n)
        }
        unregisterAllApplications() {
            this._applications.clear()
        }
        getTestability(n) {
            return this._applications.get(n) || null
        }
        getAllTestabilities() {
            return Array.from(this._applications.values())
        }
        getAllRootElements() {
            return Array.from(this._applications.keys())
        }
        findTestabilityInTree(n, r=!0) {
            return Ny?.findTestabilityInTree(this, n, r) ?? null
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac,
            providedIn: "platform"
        })
    }
    return e
}
)();
function gj(e) {
    Ny = e
}
var Ny;
function ca(e) {
    return !!e && typeof e.then == "function"
}
function Oy(e) {
    return !!e && typeof e.subscribe == "function"
}
var yj = new ue("");
var yM = ( () => {
    class e {
        resolve;
        reject;
        initialized = !1;
        done = !1;
        donePromise = new Promise( (n, r) => {
            this.resolve = n,
            this.reject = r
        }
        );
        appInits = Y(yj, {
            optional: !0
        }) ?? [];
        injector = Y(Cn);
        constructor() {}
        runInitializers() {
            if (this.initialized)
                return;
            let n = [];
            for (let i of this.appInits) {
                let o = $d(this.injector, i);
                if (ca(o))
                    n.push(o);
                else if (Oy(o)) {
                    let s = new Promise( (a, l) => {
                        o.subscribe({
                            complete: a,
                            error: l
                        })
                    }
                    );
                    n.push(s)
                }
            }
            let r = () => {
                this.done = !0,
                this.resolve()
            }
            ;
            Promise.all(n).then( () => {
                r()
            }
            ).catch(i => {
                this.reject(i)
            }
            ),
            n.length === 0 && r(),
            this.initialized = !0
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , vM = ( () => {
    class e {
        static \u0275prov = me({
            token: e,
            providedIn: "root",
            factory: () => new Ad
        })
    }
    return e
}
)()
  , Ad = class {
    queuedEffectCount = 0;
    queues = new Map;
    schedule(t) {
        this.enqueue(t)
    }
    enqueue(t) {
        let n = t.zone;
        this.queues.has(n) || this.queues.set(n, new Set);
        let r = this.queues.get(n);
        r.has(t) || (this.queuedEffectCount++,
        r.add(t))
    }
    flush() {
        for (; this.queuedEffectCount > 0; )
            for (let[t,n] of this.queues)
                t === null ? this.flushQueue(n) : t.run( () => this.flushQueue(n))
    }
    flushQueue(t) {
        for (let n of t)
            t.delete(n),
            this.queuedEffectCount--,
            n.run()
    }
}
  , _M = new ue("");
function vj() {
    Y_( () => {
        throw new ce(600,!1)
    }
    )
}
function _j(e) {
    return e.isBoundToModule
}
var wj = 10;
function Dj(e, t, n) {
    try {
        let r = n();
        return ca(r) ? r.catch(i => {
            throw t.runOutsideAngular( () => e.handleError(i)),
            i
        }
        ) : r
    } catch (r) {
        throw t.runOutsideAngular( () => e.handleError(r)),
        r
    }
}
var zo = ( () => {
    class e {
        _runningTick = !1;
        _destroyed = !1;
        _destroyListeners = [];
        _views = [];
        internalErrorHandler = Y(HR);
        afterRenderManager = Y(eC);
        zonelessEnabled = Y(sy);
        rootEffectScheduler = Y(vM);
        dirtyFlags = 0;
        deferredDirtyFlags = 0;
        tracingSnapshot = null;
        externalTestViews = new Set;
        afterTick = new st;
        get allViews() {
            return [...this.externalTestViews.keys(), ...this._views]
        }
        get destroyed() {
            return this._destroyed
        }
        componentTypes = [];
        components = [];
        isStable = Y(ci).hasPendingTasks.pipe(ft(n => !n));
        constructor() {
            Y(tf, {
                optional: !0
            })
        }
        whenStable() {
            let n;
            return new Promise(r => {
                n = this.isStable.subscribe({
                    next: i => {
                        i && r()
                    }
                })
            }
            ).finally( () => {
                n.unsubscribe()
            }
            )
        }
        _injector = Y(ir);
        _rendererFactory = null;
        get injector() {
            return this._injector
        }
        bootstrap(n, r) {
            let i = n instanceof Ed;
            if (!this._injector.get(yM).done) {
                let m = !i && PF(n)
                  , y = !1;
                throw new ce(405,y)
            }
            let s;
            i ? s = n : s = this._injector.get(Js).resolveComponentFactory(n),
            this.componentTypes.push(s.componentType);
            let a = _j(s) ? void 0 : this._injector.get(Gi)
              , l = r || s.selector
              , c = s.create(Cn.NULL, [], l, a)
              , f = c.location.nativeElement
              , p = c.injector.get(hj, null);
            return p?.registerApplication(f),
            c.onDestroy( () => {
                this.detachView(c.hostView),
                id(this.components, c),
                p?.unregisterApplication(f)
            }
            ),
            this._loadComponent(c),
            c
        }
        tick() {
            this.zonelessEnabled || (this.dirtyFlags |= 1),
            this._tick()
        }
        _tick = () => {
            if (this.tracingSnapshot !== null) {
                let r = this.tracingSnapshot;
                this.tracingSnapshot = null,
                r.run(ly.CHANGE_DETECTION, this._tick),
                r.dispose();
                return
            }
            if (this._runningTick)
                throw new ce(101,!1);
            let n = Me(null);
            try {
                this._runningTick = !0,
                this.synchronize()
            } catch (r) {
                this.internalErrorHandler(r)
            } finally {
                this._runningTick = !1,
                Me(n),
                this.afterTick.next()
            }
        }
        ;
        synchronize() {
            this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(Sd, null, {
                optional: !0
            })),
            this.dirtyFlags |= this.deferredDirtyFlags,
            this.deferredDirtyFlags = 0;
            let n = 0;
            for (; this.dirtyFlags !== 0 && n++ < wj; )
                this.synchronizeOnce()
        }
        synchronizeOnce() {
            if (this.dirtyFlags |= this.deferredDirtyFlags,
            this.deferredDirtyFlags = 0,
            this.dirtyFlags & 16 && (this.dirtyFlags &= -17,
            this.rootEffectScheduler.flush()),
            this.dirtyFlags & 7) {
                let n = !!(this.dirtyFlags & 1);
                this.dirtyFlags &= -8,
                this.dirtyFlags |= 8;
                for (let {_lView: r, notifyErrorHandler: i} of this.allViews)
                    xj(r, i, n, this.zonelessEnabled);
                if (this.dirtyFlags &= -5,
                this.syncDirtyFlagsWithViews(),
                this.dirtyFlags & 23)
                    return
            } else
                this._rendererFactory?.begin?.(),
                this._rendererFactory?.end?.();
            this.dirtyFlags & 8 && (this.dirtyFlags &= -9,
            this.afterRenderManager.execute()),
            this.syncDirtyFlagsWithViews()
        }
        syncDirtyFlagsWithViews() {
            if (this.allViews.some( ({_lView: n}) => qd(n))) {
                this.dirtyFlags |= 2;
                return
            } else
                this.dirtyFlags &= -8
        }
        attachView(n) {
            let r = n;
            this._views.push(r),
            r.attachToAppRef(this)
        }
        detachView(n) {
            let r = n;
            id(this._views, r),
            r.detachFromAppRef()
        }
        _loadComponent(n) {
            this.attachView(n.hostView),
            this.tick(),
            this.components.push(n),
            this._injector.get(_M, []).forEach(i => i(n))
        }
        ngOnDestroy() {
            if (!this._destroyed)
                try {
                    this._destroyListeners.forEach(n => n()),
                    this._views.slice().forEach(n => n.destroy())
                } finally {
                    this._destroyed = !0,
                    this._views = [],
                    this._destroyListeners = []
                }
        }
        onDestroy(n) {
            return this._destroyListeners.push(n),
            () => id(this._destroyListeners, n)
        }
        destroy() {
            if (this._destroyed)
                throw new ce(406,!1);
            let n = this._injector;
            n.destroy && !n.destroyed && n.destroy()
        }
        get viewCount() {
            return this._views.length
        }
        warnIfDestroyed() {}
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function id(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
function xj(e, t, n, r) {
    if (!n && !qd(e))
        return;
    WC(e, t, n && !r ? 0 : 1)
}
function Cj(e) {
    let t = K()
      , n = Mt();
    if (gM(t, n),
    !wM(0, t))
        return;
    let r = t[Nn]
      , i = oa(t, n)
      , o = e( () => DM(0, t, n), r);
    rC(0, i, o)
}
function Mj(e, t, n) {
    let r = t[Nn]
      , i = t[ae];
    if (e.loadingState !== xn.NOT_STARTED)
        return e.loadingPromise ?? Promise.resolve();
    let o = oa(t, n)
      , s = m2(i, e);
    e.loadingState = xn.IN_PROGRESS,
    rd(1, o);
    let a = e.dependencyResolverFn
      , l = r.get(ci)
      , c = l.add();
    return a ? (e.loadingPromise = Promise.allSettled(a()).then(f => {
        let p = !1
          , m = []
          , y = [];
        for (let v of f)
            if (v.status === "fulfilled") {
                let w = v.value
                  , x = Ar(w) || Wg(w);
                if (x)
                    m.push(x);
                else {
                    let D = zg(w);
                    D && y.push(D)
                }
            } else {
                p = !0;
                break
            }
        if (e.loadingPromise = null,
        l.remove(c),
        p) {
            if (e.loadingState = xn.FAILED,
            e.errorTmplIndex === null) {
                let v = ""
                  , w = new ce(750,!1);
                ff(t, w)
            }
        } else {
            e.loadingState = xn.COMPLETE;
            let v = s.tView;
            if (m.length > 0) {
                v.directiveRegistry = rD(v.directiveRegistry, m);
                let w = m.map(D => D.type)
                  , x = qg(!1, ...w);
                e.providers = x
            }
            y.length > 0 && (v.pipeRegistry = rD(v.pipeRegistry, y))
        }
    }
    ),
    e.loadingPromise) : (e.loadingPromise = Promise.resolve().then( () => {
        e.loadingPromise = null,
        e.loadingState = xn.COMPLETE,
        l.remove(c)
    }
    ),
    e.loadingPromise)
}
function wM(e, t) {
    return t[Nn].get(lj, null, {
        optional: !0
    })?.behavior !== nC.Manual
}
function DM(e, t, n) {
    let r = t[ae]
      , i = t[n.index];
    if (!wM(e, t))
        return;
    let o = oa(t, n)
      , s = sa(r, n);
    switch (iC(o),
    s.loadingState) {
    case xn.NOT_STARTED:
        Bi(gt.Loading, n, i),
        Mj(s, t, n),
        s.loadingState === xn.IN_PROGRESS && bD(s, n, i);
        break;
    case xn.IN_PROGRESS:
        Bi(gt.Loading, n, i),
        bD(s, n, i);
        break;
    case xn.COMPLETE:
        Bi(gt.Complete, n, i);
        break;
    case xn.FAILED:
        Bi(gt.Error, n, i);
        break;
    default:
    }
}
function xM(e, t, n) {
    return e === 0 ? ID(t, n) : e === 2 ? !ID(t, n) : !0
}
function ID(e, t) {
    let n = e[Nn]
      , r = sa(e[ae], t)
      , i = v2(n)
      , o = r.flags !== null && (r.flags & 1) === 1
      , a = oa(e, t)[l2] !== null;
    return !(o && a && i)
}
function rte(e, t, n, r, i, o, s, a, l, c) {
    let f = K()
      , p = Ze()
      , m = e + ht
      , y = Iu(f, p, e, null, 0, 0)
      , v = f[Nn];
    if (p.firstCreatePass) {
        Fn("NgDefer");
        let S = {
            primaryTmplIndex: t,
            loadingTmplIndex: r ?? null,
            placeholderTmplIndex: i ?? null,
            errorTmplIndex: o ?? null,
            placeholderBlockConfig: null,
            loadingBlockConfig: null,
            dependencyResolverFn: n ?? null,
            loadingState: xn.NOT_STARTED,
            loadingPromise: null,
            providers: null,
            hydrateTriggers: null,
            prefetchTriggers: null,
            flags: c ?? 0
        };
        l?.(p, S, a, s),
        h2(p, m, S)
    }
    let w = f[m];
    XC(w, y, f);
    let x = null
      , D = null;
    if (w[fd]?.length > 0) {
        let S = w[fd][0].data;
        D = S[JR] ?? null,
        x = S[Jx]
    }
    let I = [null, Cd.Initial, null, null, null, null, D, x, null, null];
    f2(f, m, I);
    let T = null;
    D !== null && (T = v.get(g2),
    T.add(D, {
        lView: f,
        tNode: y,
        lContainer: w
    }));
    let M = () => {
        iC(I),
        D !== null && T?.cleanup([D])
    }
    ;
    rC(0, I, () => mx(f, M)),
    Kg(f, M)
}
function ite(e) {
    let t = K()
      , n = qo();
    if (!xM(0, t, n))
        return;
    let r = Ji();
    if (fn(t, r, e)) {
        let i = Me(null);
        try {
            let o = !!e
              , a = oa(t, n)[nf];
            o === !1 && a === Cd.Initial ? gM(t, n) : o === !0 && (a === Cd.Initial || a === gt.Placeholder) && DM(0, t, n)
        } finally {
            Me(i)
        }
    }
}
function ote() {
    let e = K()
      , t = Mt();
    xM(0, e, t) && Cj(nj)
}
function Jo(e, t, n, r) {
    let i = K()
      , o = Ji();
    if (fn(i, o, t)) {
        let s = Ze()
          , a = qo();
        $L(a, i, e, t, n, r)
    }
    return Jo
}
function Ay(e, t, n, r) {
    return fn(e, Ji(), n) ? t + nr(n) + r : Wt
}
function Py(e, t, n, r, i, o) {
    let s = wx()
      , a = Ks(e, s, n, i);
    return Zd(2),
    a ? t + nr(n) + r + nr(i) + o : Wt
}
function CM(e, t, n, r, i, o, s, a, l, c) {
    let f = wx()
      , p = gf(e, f, n, i, s, l);
    return Zd(4),
    p ? t + nr(n) + r + nr(i) + o + nr(s) + a + nr(l) + c : Wt
}
function Xc(e, t) {
    return e << 17 | t << 2
}
function Go(e) {
    return e >> 17 & 32767
}
function bj(e) {
    return (e & 2) == 2
}
function Ij(e, t) {
    return e & 131071 | t << 17
}
function vg(e) {
    return e | 2
}
function ea(e) {
    return (e & 131068) >> 2
}
function Cm(e, t) {
    return e & -131069 | t << 2
}
function Ej(e) {
    return (e & 1) === 1
}
function _g(e) {
    return e | 1
}
function Sj(e, t, n, r, i, o) {
    let s = o ? t.classBindings : t.styleBindings
      , a = Go(s)
      , l = ea(s);
    e[r] = n;
    let c = !1, f;
    if (Array.isArray(n)) {
        let p = n;
        f = p[1],
        (f === null || ku(p, f) > 0) && (c = !0)
    } else
        f = n;
    if (i)
        if (l !== 0) {
            let m = Go(e[a + 1]);
            e[r + 1] = Xc(m, a),
            m !== 0 && (e[m + 1] = Cm(e[m + 1], r)),
            e[a + 1] = Ij(e[a + 1], r)
        } else
            e[r + 1] = Xc(a, 0),
            a !== 0 && (e[a + 1] = Cm(e[a + 1], r)),
            a = r;
    else
        e[r + 1] = Xc(l, 0),
        a === 0 ? a = r : e[l + 1] = Cm(e[l + 1], r),
        l = r;
    c && (e[r + 1] = vg(e[r + 1])),
    ED(e, f, r, !0),
    ED(e, f, r, !1),
    Tj(t, f, e, r, o),
    s = Xc(a, l),
    o ? t.classBindings = s : t.styleBindings = s
}
function Tj(e, t, n, r, i) {
    let o = i ? e.residualClasses : e.residualStyles;
    o != null && typeof t == "string" && ku(o, t) >= 0 && (n[r + 1] = _g(n[r + 1]))
}
function ED(e, t, n, r) {
    let i = e[n + 1]
      , o = t === null
      , s = r ? Go(i) : ea(i)
      , a = !1;
    for (; s !== 0 && (a === !1 || o); ) {
        let l = e[s]
          , c = e[s + 1];
        kj(l, t) && (a = !0,
        e[s + 1] = r ? _g(c) : vg(c)),
        s = r ? Go(c) : ea(c)
    }
    a && (e[n + 1] = r ? vg(i) : _g(i))
}
function kj(e, t) {
    return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? ku(e, t) >= 0 : !1
}
var kt = {
    textEnd: 0,
    key: 0,
    keyEnd: 0,
    value: 0,
    valueEnd: 0
};
function MM(e) {
    return e.substring(kt.key, kt.keyEnd)
}
function Nj(e) {
    return e.substring(kt.value, kt.valueEnd)
}
function Oj(e) {
    return EM(e),
    bM(e, ta(e, 0, kt.textEnd))
}
function bM(e, t) {
    let n = kt.textEnd;
    return n === t ? -1 : (t = kt.keyEnd = Pj(e, kt.key = t, n),
    ta(e, t, n))
}
function Aj(e) {
    return EM(e),
    IM(e, ta(e, 0, kt.textEnd))
}
function IM(e, t) {
    let n = kt.textEnd
      , r = kt.key = ta(e, t, n);
    return n === r ? -1 : (r = kt.keyEnd = Fj(e, r, n),
    r = SD(e, r, n, 58),
    r = kt.value = ta(e, r, n),
    r = kt.valueEnd = Rj(e, r, n),
    SD(e, r, n, 59))
}
function EM(e) {
    kt.key = 0,
    kt.keyEnd = 0,
    kt.value = 0,
    kt.valueEnd = 0,
    kt.textEnd = e.length
}
function ta(e, t, n) {
    for (; t < n && e.charCodeAt(t) <= 32; )
        t++;
    return t
}
function Pj(e, t, n) {
    for (; t < n && e.charCodeAt(t) > 32; )
        t++;
    return t
}
function Fj(e, t, n) {
    let r;
    for (; t < n && ((r = e.charCodeAt(t)) === 45 || r === 95 || (r & -33) >= 65 && (r & -33) <= 90 || r >= 48 && r <= 57); )
        t++;
    return t
}
function SD(e, t, n, r) {
    return t = ta(e, t, n),
    t < n && t++,
    t
}
function Rj(e, t, n) {
    let r = -1
      , i = -1
      , o = -1
      , s = t
      , a = s;
    for (; s < n; ) {
        let l = e.charCodeAt(s++);
        if (l === 59)
            return a;
        l === 34 || l === 39 ? a = s = TD(e, l, s, n) : t === s - 4 && o === 85 && i === 82 && r === 76 && l === 40 ? a = s = TD(e, 41, s, n) : l > 32 && (a = s),
        o = i,
        i = r,
        r = l & -33
    }
    return a
}
function TD(e, t, n, r) {
    let i = -1
      , o = n;
    for (; o < r; ) {
        let s = e.charCodeAt(o++);
        if (s == t && i !== 92)
            return o;
        s == 92 && i === 92 ? i = 0 : i = s
    }
    throw new Error
}
function He(e, t, n) {
    let r = K()
      , i = Ji();
    if (fn(r, i, t)) {
        let o = Ze()
          , s = qo();
        Fu(o, s, r, e, t, r[at], n, !1)
    }
    return He
}
function wg(e, t, n, r, i) {
    let o = t.inputs
      , s = i ? "class" : "style";
    xy(e, n, o[s], s, r)
}
function SM(e, t, n) {
    return TM(e, t, n, !1),
    SM
}
function ur(e, t) {
    return TM(e, t, null, !0),
    ur
}
function Lj(e) {
    yf(OM, Vj, e, !1)
}
function Vj(e, t) {
    for (let n = Aj(t); n >= 0; n = IM(t, n))
        OM(e, MM(t), Nj(t))
}
function lr(e) {
    yf(Yj, Fy, e, !0)
}
function Fy(e, t) {
    for (let n = Oj(t); n >= 0; n = bM(t, n))
        na(e, MM(t), !0)
}
function TM(e, t, n, r) {
    let i = K()
      , o = Ze()
      , s = Zd(2);
    if (o.firstUpdatePass && NM(o, e, s, r),
    t !== Wt && fn(i, s, t)) {
        let a = o.data[Lr()];
        AM(o, a, i, i[at], e, i[s + 1] = zj(t, n), r, s)
    }
}
function yf(e, t, n, r) {
    let i = Ze()
      , o = Zd(2);
    i.firstUpdatePass && NM(i, null, o, r);
    let s = K();
    if (n !== Wt && fn(s, o, n)) {
        let a = i.data[Lr()];
        if (PM(a, r) && !kM(i, o)) {
            let l = r ? a.classesWithoutHost : a.stylesWithoutHost;
            l !== null && (n = Tm(l, n || "")),
            wg(i, a, s, n, r)
        } else
            Wj(i, a, s, s[at], s[o + 1], s[o + 1] = $j(e, t, n), r, o)
    }
}
function kM(e, t) {
    return t >= e.expandoStartIndex
}
function NM(e, t, n, r) {
    let i = e.data;
    if (i[n + 1] === null) {
        let o = i[Lr()]
          , s = kM(e, n);
        PM(o, r) && t === null && !s && (t = !1),
        t = jj(i, o, t, r),
        Sj(i, o, t, n, s, r)
    }
}
function jj(e, t, n, r) {
    let i = fR(e)
      , o = r ? t.residualClasses : t.residualStyles;
    if (i === null)
        (r ? t.classBindings : t.styleBindings) === 0 && (n = Mm(null, e, t, n, r),
        n = Eu(n, t.attrs, r),
        o = null);
    else {
        let s = t.directiveStylingLast;
        if (s === -1 || e[s] !== i)
            if (n = Mm(i, e, t, n, r),
            o === null) {
                let l = Bj(e, t, r);
                l !== void 0 && Array.isArray(l) && (l = Mm(null, e, t, l[1], r),
                l = Eu(l, t.attrs, r),
                Hj(e, t, r, l))
            } else
                o = Uj(e, t, r)
    }
    return o !== void 0 && (r ? t.residualClasses = o : t.residualStyles = o),
    n
}
function Bj(e, t, n) {
    let r = n ? t.classBindings : t.styleBindings;
    if (ea(r) !== 0)
        return e[Go(r)]
}
function Hj(e, t, n, r) {
    let i = n ? t.classBindings : t.styleBindings;
    e[Go(i)] = r
}
function Uj(e, t, n) {
    let r, i = t.directiveEnd;
    for (let o = 1 + t.directiveStylingLast; o < i; o++) {
        let s = e[o].hostAttrs;
        r = Eu(r, s, n)
    }
    return Eu(r, t.attrs, n)
}
function Mm(e, t, n, r, i) {
    let o = null
      , s = n.directiveEnd
      , a = n.directiveStylingLast;
    for (a === -1 ? a = n.directiveStart : a++; a < s && (o = t[a],
    r = Eu(r, o.hostAttrs, i),
    o !== e); )
        a++;
    return e !== null && (n.directiveStylingLast = a),
    r
}
function Eu(e, t, n) {
    let r = n ? 1 : 2
      , i = -1;
    if (t !== null)
        for (let o = 0; o < t.length; o++) {
            let s = t[o];
            typeof s == "number" ? i = s : i === r && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
            na(e, s, n ? !0 : t[++o]))
        }
    return e === void 0 ? null : e
}
function $j(e, t, n) {
    if (n == null || n === "")
        return cn;
    let r = []
      , i = Zo(n);
    if (Array.isArray(i))
        for (let o = 0; o < i.length; o++)
            e(r, i[o], !0);
    else if (typeof i == "object")
        for (let o in i)
            i.hasOwnProperty(o) && e(r, o, i[o]);
    else
        typeof i == "string" && t(r, i);
    return r
}
function OM(e, t, n) {
    na(e, t, Zo(n))
}
function Yj(e, t, n) {
    let r = String(t);
    r !== "" && !r.includes(" ") && na(e, r, n)
}
function Wj(e, t, n, r, i, o, s, a) {
    i === Wt && (i = cn);
    let l = 0
      , c = 0
      , f = 0 < i.length ? i[0] : null
      , p = 0 < o.length ? o[0] : null;
    for (; f !== null || p !== null; ) {
        let m = l < i.length ? i[l + 1] : void 0, y = c < o.length ? o[c + 1] : void 0, v = null, w;
        f === p ? (l += 2,
        c += 2,
        m !== y && (v = p,
        w = y)) : p === null || f !== null && f < p ? (l += 2,
        v = f) : (c += 2,
        v = p,
        w = y),
        v !== null && AM(e, t, n, r, v, w, s, a),
        f = l < i.length ? i[l] : null,
        p = c < o.length ? o[c] : null
    }
}
function AM(e, t, n, r, i, o, s, a) {
    if (!(t.type & 3))
        return;
    let l = e.data
      , c = l[a + 1]
      , f = Ej(c) ? kD(l, t, n, i, ea(c), s) : void 0;
    if (!Pd(f)) {
        Pd(o) || bj(c) && (o = kD(l, null, n, i, a, s));
        let p = hx(Lr(), n);
        uL(r, s, p, i, o)
    }
}
function kD(e, t, n, r, i, o) {
    let s = t === null, a;
    for (; i > 0; ) {
        let l = e[i]
          , c = Array.isArray(l)
          , f = c ? l[1] : l
          , p = f === null
          , m = n[i + 1];
        m === Wt && (m = p ? cn : void 0);
        let y = p ? pm(m, r) : f === r ? m : void 0;
        if (c && !Pd(y) && (y = pm(l, r)),
        Pd(y) && (a = y,
        s))
            return a;
        let v = e[i + 1];
        i = s ? Go(v) : ea(v)
    }
    if (t !== null) {
        let l = o ? t.residualClasses : t.residualStyles;
        l != null && (a = pm(l, r))
    }
    return a
}
function Pd(e) {
    return e !== void 0
}
function zj(e, t) {
    return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = dn(Zo(e)))),
    e
}
function PM(e, t) {
    return (e.flags & (t ? 8 : 16)) !== 0
}
function ste(e, t, n) {
    let r = K()
      , i = Ay(r, e, t, n);
    yf(na, Fy, i, !0)
}
function ate(e, t, n, r, i) {
    let o = K()
      , s = Py(o, e, t, n, r, i);
    yf(na, Fy, s, !0)
}
var Dg = class {
    destroy(t) {}
    updateValue(t, n) {}
    swap(t, n) {
        let r = Math.min(t, n)
          , i = Math.max(t, n)
          , o = this.detach(i);
        if (i - r > 1) {
            let s = this.detach(r);
            this.attach(r, o),
            this.attach(i, s)
        } else
            this.attach(r, o)
    }
    move(t, n) {
        this.attach(n, this.detach(t))
    }
}
;
function bm(e, t, n, r, i) {
    return e === n && Object.is(t, r) ? 1 : Object.is(i(e, t), i(n, r)) ? -1 : 0
}
function Gj(e, t, n) {
    let r, i, o = 0, s = e.length - 1, a = void 0;
    if (Array.isArray(t)) {
        let l = t.length - 1;
        for (; o <= s && o <= l; ) {
            let c = e.at(o)
              , f = t[o]
              , p = bm(o, c, o, f, n);
            if (p !== 0) {
                p < 0 && e.updateValue(o, f),
                o++;
                continue
            }
            let m = e.at(s)
              , y = t[l]
              , v = bm(s, m, l, y, n);
            if (v !== 0) {
                v < 0 && e.updateValue(s, y),
                s--,
                l--;
                continue
            }
            let w = n(o, c)
              , x = n(s, m)
              , D = n(o, f);
            if (Object.is(D, x)) {
                let I = n(l, y);
                Object.is(I, w) ? (e.swap(o, s),
                e.updateValue(s, y),
                l--,
                s--) : e.move(s, o),
                e.updateValue(o, f),
                o++;
                continue
            }
            if (r ??= new Fd,
            i ??= OD(e, o, s, n),
            xg(e, r, o, D))
                e.updateValue(o, f),
                o++,
                s++;
            else if (i.has(D))
                r.set(w, e.detach(o)),
                s--;
            else {
                let I = e.create(o, t[o]);
                e.attach(o, I),
                o++,
                s++
            }
        }
        for (; o <= l; )
            ND(e, r, n, o, t[o]),
            o++
    } else if (t != null) {
        let l = t[Symbol.iterator]()
          , c = l.next();
        for (; !c.done && o <= s; ) {
            let f = e.at(o)
              , p = c.value
              , m = bm(o, f, o, p, n);
            if (m !== 0)
                m < 0 && e.updateValue(o, p),
                o++,
                c = l.next();
            else {
                r ??= new Fd,
                i ??= OD(e, o, s, n);
                let y = n(o, p);
                if (xg(e, r, o, y))
                    e.updateValue(o, p),
                    o++,
                    s++,
                    c = l.next();
                else if (!i.has(y))
                    e.attach(o, e.create(o, p)),
                    o++,
                    s++,
                    c = l.next();
                else {
                    let v = n(o, f);
                    r.set(v, e.detach(o)),
                    s--
                }
            }
        }
        for (; !c.done; )
            ND(e, r, n, e.length, c.value),
            c = l.next()
    }
    for (; o <= s; )
        e.destroy(e.detach(s--));
    r?.forEach(l => {
        e.destroy(l)
    }
    )
}
function xg(e, t, n, r) {
    return t !== void 0 && t.has(r) ? (e.attach(n, t.get(r)),
    t.delete(r),
    !0) : !1
}
function ND(e, t, n, r, i) {
    if (xg(e, t, r, n(r, i)))
        e.updateValue(r, i);
    else {
        let o = e.create(r, i);
        e.attach(r, o)
    }
}
function OD(e, t, n, r) {
    let i = new Set;
    for (let o = t; o <= n; o++)
        i.add(r(o, e.at(o)));
    return i
}
var Fd = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) {
        return this.kvMap.has(t)
    }
    delete(t) {
        if (!this.has(t))
            return !1;
        let n = this.kvMap.get(t);
        return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)),
        this._vMap.delete(n)) : this.kvMap.delete(t),
        !0
    }
    get(t) {
        return this.kvMap.get(t)
    }
    set(t, n) {
        if (this.kvMap.has(t)) {
            let r = this.kvMap.get(t);
            this._vMap === void 0 && (this._vMap = new Map);
            let i = this._vMap;
            for (; i.has(r); )
                r = i.get(r);
            i.set(r, n)
        } else
            this.kvMap.set(t, n)
    }
    forEach(t) {
        for (let[n,r] of this.kvMap)
            if (t(r, n),
            this._vMap !== void 0) {
                let i = this._vMap;
                for (; i.has(r); )
                    r = i.get(r),
                    t(r, n)
            }
    }
}
;
function mt(e, t) {
    Fn("NgControlFlow");
    let n = K()
      , r = Ji()
      , i = n[r] !== Wt ? n[r] : -1
      , o = i !== -1 ? Rd(n, ht + i) : void 0
      , s = 0;
    if (fn(n, r, e)) {
        let a = Me(null);
        try {
            if (o !== void 0 && by(o, s),
            e !== -1) {
                let l = ht + e
                  , c = Rd(n, l)
                  , f = Ig(n[ae], l)
                  , p = Xs(c, f.tView.ssrId)
                  , m = aa(n, f, t, {
                    dehydratedView: p
                });
                ua(c, m, s, $o(f, p))
            }
        } finally {
            Me(a)
        }
    } else if (o !== void 0) {
        let a = HC(o, s);
        a !== void 0 && (a[en] = t)
    }
}
var Cg = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, r) {
        this.lContainer = t,
        this.$implicit = n,
        this.$index = r
    }
    get $count() {
        return this.lContainer.length - tn
    }
}
;
function Vr(e) {
    return e
}
function ute(e, t) {
    return t
}
var Mg = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, r) {
        this.hasEmptyBlock = t,
        this.trackByFn = n,
        this.liveCollection = r
    }
}
;
function jr(e, t, n, r, i, o, s, a, l, c, f, p, m) {
    Fn("NgControlFlow");
    let y = K()
      , v = Ze()
      , w = l !== void 0
      , x = K()
      , D = a ? s.bind(x[On][en]) : s
      , I = new Mg(w,D);
    x[ht + e] = I,
    Iu(y, v, e + 1, t, n, r, i, Fr(v.consts, o)),
    w && Iu(y, v, e + 2, l, c, f, p, Fr(v.consts, m))
}
var bg = class extends Dg {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, r) {
        super(),
        this.lContainer = t,
        this.hostLView = n,
        this.templateTNode = r
    }
    get length() {
        return this.lContainer.length - tn
    }
    at(t) {
        return this.getLView(t)[en].$implicit
    }
    attach(t, n) {
        let r = n[Zs];
        this.needsIndexUpdate ||= t !== this.length,
        ua(this.lContainer, n, t, $o(this.templateTNode, r))
    }
    detach(t) {
        return this.needsIndexUpdate ||= t !== this.length - 1,
        qj(this.lContainer, t)
    }
    create(t, n) {
        let r = Xs(this.lContainer, this.templateTNode.tView.ssrId)
          , i = aa(this.hostLView, this.templateTNode, new Cg(this.lContainer,n,t), {
            dehydratedView: r
        });
        return this.operationsCounter?.recordCreate(),
        i
    }
    destroy(t) {
        af(t[ae], t),
        this.operationsCounter?.recordDestroy()
    }
    updateValue(t, n) {
        this.getLView(t)[en].$implicit = n
    }
    reset() {
        this.needsIndexUpdate = !1,
        this.operationsCounter?.reset()
    }
    updateIndexes() {
        if (this.needsIndexUpdate)
            for (let t = 0; t < this.length; t++)
                this.getLView(t)[en].$index = t
    }
    getLView(t) {
        return Zj(this.lContainer, t)
    }
}
;
function Br(e) {
    let t = Me(null)
      , n = Lr();
    try {
        let r = K()
          , i = r[ae]
          , o = r[n]
          , s = n + 1
          , a = Rd(r, s);
        if (o.liveCollection === void 0) {
            let c = Ig(i, s);
            o.liveCollection = new bg(a,r,c)
        } else
            o.liveCollection.reset();
        let l = o.liveCollection;
        if (Gj(l, e, o.trackByFn),
        l.updateIndexes(),
        o.hasEmptyBlock) {
            let c = Ji()
              , f = l.length === 0;
            if (fn(r, c, f)) {
                let p = n + 2
                  , m = Rd(r, p);
                if (f) {
                    let y = Ig(i, p)
                      , v = Xs(m, y.tView.ssrId)
                      , w = aa(r, y, void 0, {
                        dehydratedView: v
                    });
                    ua(m, w, 0, $o(y, v))
                } else
                    by(m, 0)
            }
        }
    } finally {
        Me(t)
    }
}
function Rd(e, t) {
    return e[t]
}
function qj(e, t) {
    return bu(e, t)
}
function Zj(e, t) {
    return HC(e, t)
}
function Ig(e, t) {
    return Nu(e, t)
}
function Qj(e, t, n, r, i, o) {
    let s = t.consts
      , a = Fr(s, i)
      , l = Qo(t, e, 2, r, a);
    return Dy(t, n, l, Fr(s, o)),
    l.attrs !== null && Td(l, l.attrs, !1),
    l.mergedAttrs !== null && Td(l, l.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, l),
    l
}
function B(e, t, n, r) {
    let i = K()
      , o = Ze()
      , s = ht + e
      , a = i[at]
      , l = o.firstCreatePass ? Qj(s, o, i, t, n, r) : o.data[s]
      , c = Xj(o, i, l, a, t, e);
    i[s] = c;
    let f = zd(l);
    return Xi(l, !0),
    IC(a, c, l),
    !JV(l) && Xd() && uf(o, i, c, l),
    tR() === 0 && Wi(c, i),
    nR(),
    f && (vy(o, i, l),
    yy(o, l, i)),
    r !== null && _y(i, l),
    B
}
function ne() {
    let e = Mt();
    ey() ? ty() : (e = e.parent,
    Xi(e, !1));
    let t = e;
    iR(t) && oR(),
    rR();
    let n = Ze();
    return n.firstCreatePass && (Kd(n, e),
    Qg(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null && wR(t) && wg(n, t, K(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null && DR(t) && wg(n, t, K(), t.stylesWithoutHost, !1),
    ne
}
function Ue(e, t, n, r) {
    return B(e, t, n, r),
    ne(),
    Ue
}
var Xj = (e, t, n, r, i, o) => (Jd(!0),
gC(r, i, gR()));
function Jj(e, t, n, r, i) {
    let o = t.consts
      , s = Fr(o, r)
      , a = Qo(t, e, 8, "ng-container", s);
    s !== null && Td(a, s, !0);
    let l = Fr(o, i);
    return Dy(t, n, a, l),
    t.queries !== null && t.queries.elementStart(t, a),
    a
}
function FM(e, t, n) {
    let r = K()
      , i = Ze()
      , o = e + ht
      , s = i.firstCreatePass ? Jj(o, i, r, t, n) : i.data[o];
    Xi(s, !0);
    let a = eB(i, r, s, e);
    return r[o] = a,
    Xd() && uf(i, r, a, s),
    Wi(a, r),
    zd(s) && (vy(i, r, s),
    yy(i, s, r)),
    n != null && _y(r, s),
    FM
}
function RM() {
    let e = Mt()
      , t = Ze();
    return ey() ? ty() : (e = e.parent,
    Xi(e, !1)),
    t.firstCreatePass && (Kd(t, e),
    Qg(e) && t.queries.elementEnd(e)),
    RM
}
function Kj(e, t, n) {
    return FM(e, t, n),
    RM(),
    Kj
}
var eB = (e, t, n, r) => (Jd(!0),
q2(t[at], ""));
function rn() {
    return K()
}
function tB(e, t, n) {
    let r = K()
      , i = Ji();
    if (fn(r, i, t)) {
        let o = Ze()
          , s = qo();
        Fu(o, s, r, e, t, r[at], n, !0)
    }
    return tB
}
var Oo = void 0;
function nB(e) {
    let t = e
      , n = Math.floor(Math.abs(e))
      , r = e.toString().replace(/^[^.]*\.?/, "").length;
    return n === 1 && r === 0 ? 1 : 5
}
var rB = ["en", [["a", "p"], ["AM", "PM"], Oo], [["AM", "PM"], Oo, Oo], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Oo, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Oo, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", Oo, "{1} 'at' {0}", Oo], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", nB]
  , Im = {};
function Rn(e) {
    let t = iB(e)
      , n = AD(t);
    if (n)
        return n;
    let r = t.split("-")[0];
    if (n = AD(r),
    n)
        return n;
    if (r === "en")
        return rB;
    throw new ce(701,!1)
}
function AD(e) {
    return e in Im || (Im[e] = ji.ng && ji.ng.common && ji.ng.common.locales && ji.ng.common.locales[e]),
    Im[e]
}
var vt = function(e) {
    return e[e.LocaleId = 0] = "LocaleId",
    e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat",
    e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone",
    e[e.DaysFormat = 3] = "DaysFormat",
    e[e.DaysStandalone = 4] = "DaysStandalone",
    e[e.MonthsFormat = 5] = "MonthsFormat",
    e[e.MonthsStandalone = 6] = "MonthsStandalone",
    e[e.Eras = 7] = "Eras",
    e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek",
    e[e.WeekendRange = 9] = "WeekendRange",
    e[e.DateFormat = 10] = "DateFormat",
    e[e.TimeFormat = 11] = "TimeFormat",
    e[e.DateTimeFormat = 12] = "DateTimeFormat",
    e[e.NumberSymbols = 13] = "NumberSymbols",
    e[e.NumberFormats = 14] = "NumberFormats",
    e[e.CurrencyCode = 15] = "CurrencyCode",
    e[e.CurrencySymbol = 16] = "CurrencySymbol",
    e[e.CurrencyName = 17] = "CurrencyName",
    e[e.Currencies = 18] = "Currencies",
    e[e.Directionality = 19] = "Directionality",
    e[e.PluralCase = 20] = "PluralCase",
    e[e.ExtraData = 21] = "ExtraData",
    e
}(vt || {});
function iB(e) {
    return e.toLowerCase().replace(/_/g, "-")
}
var Ld = "en-US";
var oB = Ld;
function sB(e) {
    typeof e == "string" && (oB = e.toLowerCase().replace(/_/g, "-"))
}
var aB = (e, t, n) => {}
;
function re(e, t, n, r) {
    let i = K()
      , o = Ze()
      , s = Mt();
    return LM(o, i, i[at], s, e, t, r),
    re
}
function uB(e, t, n, r) {
    let i = e.cleanup;
    if (i != null)
        for (let o = 0; o < i.length - 1; o += 2) {
            let s = i[o];
            if (s === n && i[o + 1] === r) {
                let a = t[dd]
                  , l = i[o + 2];
                return a.length > l ? a[l] : null
            }
            typeof s == "string" && (o += 2)
        }
    return null
}
function LM(e, t, n, r, i, o, s) {
    let a = zd(r)
      , c = e.firstCreatePass && BC(e)
      , f = t[en]
      , p = jC(t)
      , m = !0;
    if (r.type & 3 || s) {
        let w = zn(r, t)
          , x = s ? s(w) : w
          , D = p.length
          , I = s ? M => s(Pr(M[r.index])) : r.index
          , T = null;
        if (!s && a && (T = uB(e, t, i, r.index)),
        T !== null) {
            let M = T.__ngLastListenerFn__ || T;
            M.__ngNextListenerFn__ = o,
            T.__ngLastListenerFn__ = o,
            m = !1
        } else {
            o = FD(r, t, f, o),
            aB(w, i, o);
            let M = n.listen(x, i, o);
            p.push(o, M),
            c && c.push(i, I, D, D + 1)
        }
    } else
        o = FD(r, t, f, o);
    let y = r.outputs, v;
    if (m && y !== null && (v = y[i])) {
        let w = v.length;
        if (w)
            for (let x = 0; x < w; x += 2) {
                let D = v[x]
                  , I = v[x + 1]
                  , S = t[D][I].subscribe(o)
                  , E = p.length;
                p.push(o, S),
                c && c.push(i, r.index, E, -(E + 1))
            }
    }
}
function PD(e, t, n, r) {
    let i = Me(null);
    try {
        return Nr(6, t, n),
        n(r) !== !1
    } catch (o) {
        return ff(e, o),
        !1
    } finally {
        Nr(7, t, n),
        Me(i)
    }
}
function FD(e, t, n, r) {
    return function i(o) {
        if (o === Function)
            return r;
        let s = e.componentOffset > -1 ? Qi(e.index, t) : t;
        hf(s, 5);
        let a = PD(t, n, r, o)
          , l = i.__ngNextListenerFn__;
        for (; l; )
            a = PD(t, n, l, o) && a,
            l = l.__ngNextListenerFn__;
        return a
    }
}
function q(e=1) {
    return pR(e)
}
function lB(e, t) {
    let n = null
      , r = mL(e);
    for (let i = 0; i < t.length; i++) {
        let o = t[i];
        if (o === "*") {
            n = i;
            continue
        }
        if (r === null ? SC(e, o, !0) : vL(r, o))
            return i
    }
    return n
}
function to(e) {
    let t = K()[On][Mn];
    if (!t.projection) {
        let n = e ? e.length : 1
          , r = t.projection = OF(n, null)
          , i = r.slice()
          , o = t.child;
        for (; o !== null; ) {
            if (o.type !== 128) {
                let s = e ? lB(o, e) : 0;
                s !== null && (i[s] ? i[s].projectionNext = o : r[s] = o,
                i[s] = o)
            }
            o = o.next
        }
    }
}
function cr(e, t=0, n, r, i, o) {
    let s = K()
      , a = Ze()
      , l = r ? e + 1 : null;
    l !== null && Iu(s, a, l, r, i, o, null, n);
    let c = Qo(a, ht + e, 16, null, n || null);
    c.projection === null && (c.projection = t),
    ty();
    let p = !s[Zs] || yx();
    s[On][Mn].projection[c.projection] === null && l !== null ? cB(s, a, l) : p && (c.flags & 32) !== 32 && sL(a, s, c)
}
function cB(e, t, n) {
    let r = ht + n
      , i = t.data[r]
      , o = e[r]
      , s = Xs(o, i.tView.ssrId)
      , a = aa(e, i, void 0, {
        dehydratedView: s
    });
    ua(o, a, 0, $o(i, s))
}
function dr(e, t, n) {
    return VM(e, "", t, "", n),
    dr
}
function VM(e, t, n, r, i) {
    let o = K()
      , s = Ay(o, t, n, r);
    if (s !== Wt) {
        let a = Ze()
          , l = qo();
        Fu(a, l, o, e, s, o[at], i, !1)
    }
    return VM
}
function dB(e, t, n, r, i, o, s) {
    let a = K()
      , l = Py(a, t, n, r, i, o);
    if (l !== Wt) {
        let c = Ze()
          , f = qo();
        Fu(c, f, a, e, l, a[at], s, !1)
    }
    return dB
}
function lte(e, t, n, r) {
    tM(e, t, n, r)
}
function cte(e, t, n) {
    eM(e, t, n)
}
function dte(e) {
    let t = K()
      , n = Ze()
      , r = ny();
    Qd(r + 1);
    let i = Ey(n, r);
    if (e.dirty && JF(t) === ((i.metadata.flags & 2) === 2)) {
        if (i.matches === null)
            e.reset([]);
        else {
            let o = rM(t, r);
            e.reset(o, Yx),
            e.notifyOnChanges()
        }
        return !0
    }
    return !1
}
function fte() {
    return Iy(K(), ny())
}
function hte(e, t, n, r, i) {
    lM(t, tM(e, n, r, i))
}
function da(e, t, n, r) {
    lM(e, eM(t, n, r))
}
function fa(e=1) {
    Qd(ny() + e)
}
function jM(e, t, n, r) {
    n >= e.data.length && (e.data[n] = null,
    e.blueprint[n] = null),
    t[n] = r
}
function Ry(e) {
    let t = aR();
    return Gd(t, ht + e)
}
function BM(e, t, n, r, i, o, s, a, l) {
    let c = K()
      , f = CM(c, e, t, n, r, i, o, s, a, l);
    Lj(f)
}
function Ke(e, t="") {
    let n = K()
      , r = Ze()
      , i = e + ht
      , o = r.firstCreatePass ? Qo(r, i, 1, t, null) : r.data[i]
      , s = fB(r, n, o, t, e);
    n[i] = s,
    Xd() && uf(r, n, s, o),
    Xi(o, !1)
}
var fB = (e, t, n, r, i) => (Jd(!0),
z2(t[at], r));
function Rt(e) {
    return no("", e, ""),
    Rt
}
function no(e, t, n) {
    let r = K()
      , i = Ay(r, e, t, n);
    return i !== Wt && Cy(r, Lr(), i),
    no
}
function hB(e, t, n, r, i) {
    let o = K()
      , s = Py(o, e, t, n, r, i);
    return s !== Wt && Cy(o, Lr(), s),
    hB
}
function pB(e, t, n, r, i, o, s, a, l) {
    let c = K()
      , f = CM(c, e, t, n, r, i, o, s, a, l);
    return f !== Wt && Cy(c, Lr(), f),
    pB
}
function mB(e, t, n) {
    oM(t) && (t = t());
    let r = K()
      , i = Ji();
    if (fn(r, i, t)) {
        let o = Ze()
          , s = qo();
        Fu(o, s, r, e, t, r[at], n, !1)
    }
    return mB
}
function pte(e, t) {
    let n = oM(e);
    return n && e.set(t),
    n
}
function gB(e, t) {
    let n = K()
      , r = Ze()
      , i = Mt();
    return LM(r, n, n[at], i, e, t),
    gB
}
var yB = {};
function vB(e) {
    let t = Ze()
      , n = K()
      , r = e + ht
      , i = Qo(t, r, 128, null, null);
    return Xi(i, !1),
    jM(t, n, r, yB),
    vB
}
function _B(e, t, n) {
    let r = Ze();
    if (r.firstCreatePass) {
        let i = $i(e);
        Eg(n, r.data, r.blueprint, i, !0),
        Eg(t, r.data, r.blueprint, i, !1)
    }
}
function Eg(e, t, n, r, i) {
    if (e = ln(e),
    Array.isArray(e))
        for (let o = 0; o < e.length; o++)
            Eg(e[o], t, n, r, i);
    else {
        let o = Ze()
          , s = K()
          , a = Mt()
          , l = qs(e) ? e : ln(e.provide)
          , c = ix(e)
          , f = a.providerIndexes & 1048575
          , p = a.directiveStart
          , m = a.providerIndexes >> 20;
        if (qs(e) || !e.multi) {
            let y = new Bo(c,i,O)
              , v = Sm(l, t, i ? f : f + m, p);
            v === -1 ? ($m(_d(a, s), o, l),
            Em(o, e, t.length),
            t.push(l),
            a.directiveStart++,
            a.directiveEnd++,
            i && (a.providerIndexes += 1048576),
            n.push(y),
            s.push(y)) : (n[v] = y,
            s[v] = y)
        } else {
            let y = Sm(l, t, f + m, p)
              , v = Sm(l, t, f, f + m)
              , w = y >= 0 && n[y]
              , x = v >= 0 && n[v];
            if (i && !x || !i && !w) {
                $m(_d(a, s), o, l);
                let D = xB(i ? DB : wB, n.length, i, r, c);
                !i && x && (n[v].providerFactory = D),
                Em(o, e, t.length, 0),
                t.push(l),
                a.directiveStart++,
                a.directiveEnd++,
                i && (a.providerIndexes += 1048576),
                n.push(D),
                s.push(D)
            } else {
                let D = HM(n[i ? v : y], c, !i && r);
                Em(o, e, y > -1 ? y : v, D)
            }
            !i && r && x && n[v].componentProviders++
        }
    }
}
function Em(e, t, n, r) {
    let i = qs(t)
      , o = jF(t);
    if (i || o) {
        let l = (o ? ln(t.useClass) : t).prototype.ngOnDestroy;
        if (l) {
            let c = e.destroyHooks || (e.destroyHooks = []);
            if (!i && t.multi) {
                let f = c.indexOf(n);
                f === -1 ? c.push(n, [r, l]) : c[f + 1].push(r, l)
            } else
                c.push(n, l)
        }
    }
}
function HM(e, t, n) {
    return n && e.componentProviders++,
    e.multi.push(t) - 1
}
function Sm(e, t, n, r) {
    for (let i = n; i < r; i++)
        if (t[i] === e)
            return i;
    return -1
}
function wB(e, t, n, r) {
    return Sg(this.multi, [])
}
function DB(e, t, n, r) {
    let i = this.multi, o;
    if (this.providerFactory) {
        let s = this.providerFactory.componentProviders
          , a = Ho(n, n[ae], this.providerFactory.index, r);
        o = a.slice(0, s),
        Sg(i, o);
        for (let l = s; l < a.length; l++)
            o.push(a[l])
    } else
        o = [],
        Sg(i, o);
    return o
}
function Sg(e, t) {
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        t.push(r())
    }
    return t
}
function xB(e, t, n, r, i) {
    let o = new Bo(e,n,O);
    return o.multi = [],
    o.index = t,
    o.componentProviders = 0,
    HM(o, i, r && !n),
    o
}
function Lt(e, t=[]) {
    return n => {
        n.providersResolver = (r, i) => _B(r, i ? i(e) : e, t)
    }
}
function mte(e, t, n) {
    let r = Rr() + e
      , i = K();
    return i[r] === Wt ? Xo(i, r, n ? t.call(n) : t()) : ky(i, r)
}
function gte(e, t, n, r) {
    return UM(K(), Rr(), e, t, n, r)
}
function yte(e, t, n, r, i) {
    return $M(K(), Rr(), e, t, n, r, i)
}
function vf(e, t, n, r, i, o) {
    return YM(K(), Rr(), e, t, n, r, i, o)
}
function vte(e, t, n, r, i, o, s) {
    return CB(K(), Rr(), e, t, n, r, i, o, s)
}
function _te(e, t, n, r, i, o, s, a) {
    let l = Rr() + e
      , c = K()
      , f = gf(c, l, n, r, i, o);
    return fn(c, l + 4, s) || f ? Xo(c, l + 5, a ? t.call(a, n, r, i, o, s) : t(n, r, i, o, s)) : ky(c, l + 5)
}
function wte(e, t, n, r, i, o, s, a, l) {
    let c = Rr() + e
      , f = K()
      , p = gf(f, c, n, r, i, o);
    return Ks(f, c + 4, s, a) || p ? Xo(f, c + 6, l ? t.call(l, n, r, i, o, s, a) : t(n, r, i, o, s, a)) : ky(f, c + 6)
}
function _f(e, t) {
    let n = e[t];
    return n === Wt ? void 0 : n
}
function UM(e, t, n, r, i, o) {
    let s = t + n;
    return fn(e, s, i) ? Xo(e, s + 1, o ? r.call(o, i) : r(i)) : _f(e, s + 1)
}
function $M(e, t, n, r, i, o, s) {
    let a = t + n;
    return Ks(e, a, i, o) ? Xo(e, a + 2, s ? r.call(s, i, o) : r(i, o)) : _f(e, a + 2)
}
function YM(e, t, n, r, i, o, s, a) {
    let l = t + n;
    return XV(e, l, i, o, s) ? Xo(e, l + 3, a ? r.call(a, i, o, s) : r(i, o, s)) : _f(e, l + 3)
}
function CB(e, t, n, r, i, o, s, a, l) {
    let c = t + n;
    return gf(e, c, i, o, s, a) ? Xo(e, c + 4, l ? r.call(l, i, o, s, a) : r(i, o, s, a)) : _f(e, c + 4)
}
function wf(e, t) {
    let n = Ze(), r, i = e + ht;
    n.firstCreatePass ? (r = MB(t, n.pipeRegistry),
    n.data[i] = r,
    r.onDestroy && (n.destroyHooks ??= []).push(i, r.onDestroy)) : r = n.data[i];
    let o = r.factory || (r.factory = Po(r.type, !0)), s, a = Dn(O);
    try {
        let l = vd(!1)
          , c = o();
        return vd(l),
        jM(n, K(), i, c),
        c
    } finally {
        Dn(a)
    }
}
function MB(e, t) {
    if (t)
        for (let n = t.length - 1; n >= 0; n--) {
            let r = t[n];
            if (e === r.name)
                return r
        }
}
function WM(e, t, n) {
    let r = e + ht
      , i = K()
      , o = Gd(i, r);
    return Ly(i, r) ? UM(i, Rr(), t, o.transform, n, o) : o.transform(n)
}
function zM(e, t, n, r) {
    let i = e + ht
      , o = K()
      , s = Gd(o, i);
    return Ly(o, i) ? $M(o, Rr(), t, s.transform, n, r, s) : s.transform(n, r)
}
function Dte(e, t, n, r, i) {
    let o = e + ht
      , s = K()
      , a = Gd(s, o);
    return Ly(s, o) ? YM(s, Rr(), t, a.transform, n, r, i, a) : a.transform(n, r, i)
}
function Ly(e, t) {
    return e[ae].data[t].pure
}
function xte(e, t) {
    return pf(e, t)
}
var Su = class {
    full;
    major;
    minor;
    patch;
    constructor(t) {
        this.full = t;
        let n = t.split(".");
        this.major = n[0],
        this.minor = n[1],
        this.patch = n.slice(2).join(".")
    }
}
  , Cte = new Su("19.0.5")
  , Tg = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) {
        this.ngModuleFactory = t,
        this.componentFactories = n
    }
}
  , Mte = ( () => {
    class e {
        compileModuleSync(n) {
            return new gg(n)
        }
        compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n))
        }
        compileModuleAndAllComponentsSync(n) {
            let r = this.compileModuleSync(n)
              , i = ex(n)
              , o = mC(i.declarations).reduce( (s, a) => {
                let l = Ar(a);
                return l && s.push(new Wo(l)),
                s
            }
            , []);
            return new Tg(r,o)
        }
        compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n))
        }
        clearCache() {}
        clearCacheFor(n) {}
        getModuleId(n) {}
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var bB = ( () => {
    class e {
        zone = Y(Nt);
        changeDetectionScheduler = Y(Uo);
        applicationRef = Y(zo);
        _onMicrotaskEmptySubscription;
        initialize() {
            this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
                next: () => {
                    this.changeDetectionScheduler.runningTick || this.zone.run( () => {
                        this.applicationRef.tick()
                    }
                    )
                }
            }))
        }
        ngOnDestroy() {
            this._onMicrotaskEmptySubscription?.unsubscribe()
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , IB = new ue("",{
    factory: () => !1
});
function GM({ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n}) {
    return e ??= () => new Nt(We(Te({}, qM()), {
        scheduleInRootZone: n
    })),
    [{
        provide: Nt,
        useFactory: e
    }, {
        provide: ld,
        multi: !0,
        useFactory: () => {
            let r = Y(bB, {
                optional: !0
            });
            return () => r.initialize()
        }
    }, {
        provide: ld,
        multi: !0,
        useFactory: () => {
            let r = Y(EB);
            return () => {
                r.initialize()
            }
        }
    }, t === !0 ? {
        provide: Bx,
        useValue: !0
    } : [], {
        provide: Hx,
        useValue: n ?? jx
    }]
}
function bte(e) {
    let t = e?.ignoreChangesOutsideZone
      , n = e?.scheduleInRootZone
      , r = GM({
        ngZoneFactory: () => {
            let i = qM(e);
            return i.scheduleInRootZone = n,
            i.shouldCoalesceEventChangeDetection && Fn("NgZone_CoalesceEvent"),
            new Nt(i)
        }
        ,
        ignoreChangesOutsideZone: t,
        scheduleInRootZone: n
    });
    return Gg([{
        provide: IB,
        useValue: !0
    }, {
        provide: sy,
        useValue: !1
    }, r])
}
function qM(e) {
    return {
        enableLongStackTrace: !1,
        shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
        shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1
    }
}
var EB = ( () => {
    class e {
        subscription = new ct;
        initialized = !1;
        zone = Y(Nt);
        pendingTasks = Y(ci);
        initialize() {
            if (this.initialized)
                return;
            this.initialized = !0;
            let n = null;
            !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()),
            this.zone.runOutsideAngular( () => {
                this.subscription.add(this.zone.onStable.subscribe( () => {
                    Nt.assertNotInAngularZone(),
                    queueMicrotask( () => {
                        n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n),
                        n = null)
                    }
                    )
                }
                ))
            }
            ),
            this.subscription.add(this.zone.onUnstable.subscribe( () => {
                Nt.assertInAngularZone(),
                n ??= this.pendingTasks.add()
            }
            ))
        }
        ngOnDestroy() {
            this.subscription.unsubscribe()
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var SB = ( () => {
    class e {
        appRef = Y(zo);
        taskService = Y(ci);
        ngZone = Y(Nt);
        zonelessEnabled = Y(sy);
        tracing = Y(tf, {
            optional: !0
        });
        disableScheduling = Y(Bx, {
            optional: !0
        }) ?? !1;
        zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
        schedulerTickApplyArgs = [{
            data: {
                __scheduler_tick__: !0
            }
        }];
        subscriptions = new ct;
        angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Dd) : null;
        scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (Y(Hx, {
            optional: !0
        }) ?? !1);
        cancelScheduledCallback = null;
        useMicrotaskScheduler = !1;
        runningTick = !1;
        pendingRenderTaskId = null;
        constructor() {
            this.subscriptions.add(this.appRef.afterTick.subscribe( () => {
                this.runningTick || this.cleanup()
            }
            )),
            this.subscriptions.add(this.ngZone.onUnstable.subscribe( () => {
                this.runningTick || this.cleanup()
            }
            )),
            this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof Gm || !this.zoneIsDefined)
        }
        notify(n) {
            if (!this.zonelessEnabled && n === 5)
                return;
            let r = !1;
            switch (n) {
            case 0:
                {
                    this.appRef.dirtyFlags |= 2;
                    break
                }
            case 3:
            case 2:
            case 4:
            case 5:
            case 1:
                {
                    this.appRef.dirtyFlags |= 4;
                    break
                }
            case 8:
                {
                    this.appRef.deferredDirtyFlags |= 8;
                    break
                }
            case 6:
                {
                    this.appRef.dirtyFlags |= 2,
                    r = !0;
                    break
                }
            case 13:
                {
                    this.appRef.dirtyFlags |= 16,
                    r = !0;
                    break
                }
            case 14:
                {
                    this.appRef.dirtyFlags |= 2,
                    r = !0;
                    break
                }
            case 12:
                {
                    r = !0;
                    break
                }
            case 10:
            case 9:
            case 7:
            case 11:
            default:
                this.appRef.dirtyFlags |= 8
            }
            if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null,
            !this.shouldScheduleTick(r))
                return;
            let i = this.useMicrotaskScheduler ? Qw : Ux;
            this.pendingRenderTaskId = this.taskService.add(),
            this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run( () => i( () => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular( () => i( () => this.tick()))
        }
        shouldScheduleTick(n) {
            return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Dd + this.angularZoneId))
        }
        tick() {
            if (this.runningTick || this.appRef.destroyed)
                return;
            if (this.appRef.dirtyFlags === 0) {
                this.cleanup();
                return
            }
            !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1);
            let n = this.taskService.add();
            try {
                this.ngZone.run( () => {
                    this.runningTick = !0,
                    this.appRef._tick()
                }
                , void 0, this.schedulerTickApplyArgs)
            } catch (r) {
                throw this.taskService.remove(n),
                r
            } finally {
                this.cleanup()
            }
            this.useMicrotaskScheduler = !0,
            Qw( () => {
                this.useMicrotaskScheduler = !1,
                this.taskService.remove(n)
            }
            )
        }
        ngOnDestroy() {
            this.subscriptions.unsubscribe(),
            this.cleanup()
        }
        cleanup() {
            if (this.runningTick = !1,
            this.cancelScheduledCallback?.(),
            this.cancelScheduledCallback = null,
            this.pendingRenderTaskId !== null) {
                let n = this.pendingRenderTaskId;
                this.pendingRenderTaskId = null,
                this.taskService.remove(n)
            }
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function TB() {
    return typeof $localize < "u" && $localize.locale || Ld
}
var ha = new ue("",{
    providedIn: "root",
    factory: () => Y(ha, ke.Optional | ke.SkipSelf) || TB()
});
var kg = new ue("")
  , kB = new ue("");
function hu(e) {
    return !e.moduleRef
}
function NB(e) {
    let t = hu(e) ? e.r3Injector : e.moduleRef.injector
      , n = t.get(Nt);
    return n.run( () => {
        hu(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers();
        let r = t.get(Yi, null), i;
        if (n.runOutsideAngular( () => {
            i = n.onError.subscribe({
                next: o => {
                    r.handleError(o)
                }
            })
        }
        ),
        hu(e)) {
            let o = () => t.destroy()
              , s = e.platformInjector.get(kg);
            s.add(o),
            t.onDestroy( () => {
                i.unsubscribe(),
                s.delete(o)
            }
            )
        } else {
            let o = () => e.moduleRef.destroy()
              , s = e.platformInjector.get(kg);
            s.add(o),
            e.moduleRef.onDestroy( () => {
                id(e.allPlatformModules, e.moduleRef),
                i.unsubscribe(),
                s.delete(o)
            }
            )
        }
        return Dj(r, n, () => {
            let o = t.get(yM);
            return o.runInitializers(),
            o.donePromise.then( () => {
                let s = t.get(ha, Ld);
                if (sB(s || Ld),
                !t.get(kB, !0))
                    return hu(e) ? t.get(zo) : (e.allPlatformModules.push(e.moduleRef),
                    e.moduleRef);
                if (hu(e)) {
                    let l = t.get(zo);
                    return e.rootComponent !== void 0 && l.bootstrap(e.rootComponent),
                    l
                } else
                    return OB(e.moduleRef, e.allPlatformModules),
                    e.moduleRef
            }
            )
        }
        )
    }
    )
}
function OB(e, t) {
    let n = e.injector.get(zo);
    if (e._bootstrapComponents.length > 0)
        e._bootstrapComponents.forEach(r => n.bootstrap(r));
    else if (e.instance.ngDoBootstrap)
        e.instance.ngDoBootstrap(n);
    else
        throw new ce(-403,!1);
    t.push(e)
}
var od = null;
function AB(e=[], t) {
    return Cn.create({
        name: t,
        providers: [{
            provide: rx,
            useValue: "platform"
        }, {
            provide: kg,
            useValue: new Set([ () => od = null])
        }, ...e]
    })
}
function PB(e=[]) {
    if (od)
        return od;
    let t = AB(e);
    return od = t,
    vj(),
    FB(t),
    t
}
function FB(e) {
    let t = e.get(ZR, null);
    $d(e, () => {
        t?.forEach(n => n())
    }
    )
}
function Ite() {
    return !1
}
var ro = ( () => {
    class e {
        static __NG_ELEMENT_ID__ = RB
    }
    return e
}
)();
function RB(e) {
    return LB(Mt(), K(), (e & 16) === 16)
}
function LB(e, t, n) {
    if (Wd(e) && !n) {
        let r = Qi(e.index, t);
        return new Yo(r,r)
    } else if (e.type & 175) {
        let r = t[On];
        return new Yo(r,t)
    }
    return null
}
var Ng = class {
    constructor() {}
    supports(t) {
        return pM(t)
    }
    create(t) {
        return new Og(t)
    }
}
  , VB = (e, t) => t
  , Og = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) {
        this._trackByFn = t || VB
    }
    forEachItem(t) {
        let n;
        for (n = this._itHead; n !== null; n = n._next)
            t(n)
    }
    forEachOperation(t) {
        let n = this._itHead
          , r = this._removalsHead
          , i = 0
          , o = null;
        for (; n || r; ) {
            let s = !r || n && n.currentIndex < RD(r, i, o) ? n : r
              , a = RD(s, i, o)
              , l = s.currentIndex;
            if (s === r)
                i--,
                r = r._nextRemoved;
            else if (n = n._next,
            s.previousIndex == null)
                i++;
            else {
                o || (o = []);
                let c = a - i
                  , f = l - i;
                if (c != f) {
                    for (let m = 0; m < c; m++) {
                        let y = m < o.length ? o[m] : o[m] = 0
                          , v = y + m;
                        f <= v && v < c && (o[m] = y + 1)
                    }
                    let p = s.previousIndex;
                    o[p] = f - c
                }
            }
            a !== l && t(s, a, l)
        }
    }
    forEachPreviousItem(t) {
        let n;
        for (n = this._previousItHead; n !== null; n = n._nextPrevious)
            t(n)
    }
    forEachAddedItem(t) {
        let n;
        for (n = this._additionsHead; n !== null; n = n._nextAdded)
            t(n)
    }
    forEachMovedItem(t) {
        let n;
        for (n = this._movesHead; n !== null; n = n._nextMoved)
            t(n)
    }
    forEachRemovedItem(t) {
        let n;
        for (n = this._removalsHead; n !== null; n = n._nextRemoved)
            t(n)
    }
    forEachIdentityChange(t) {
        let n;
        for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
            t(n)
    }
    diff(t) {
        if (t == null && (t = []),
        !pM(t))
            throw new ce(900,!1);
        return this.check(t) ? this : null
    }
    onDestroy() {}
    check(t) {
        this._reset();
        let n = this._itHead, r = !1, i, o, s;
        if (Array.isArray(t)) {
            this.length = t.length;
            for (let a = 0; a < this.length; a++)
                o = t[a],
                s = this._trackByFn(a, o),
                n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, o, s, a),
                r = !0) : (r && (n = this._verifyReinsertion(n, o, s, a)),
                Object.is(n.item, o) || this._addIdentityChange(n, o)),
                n = n._next
        } else
            i = 0,
            QV(t, a => {
                s = this._trackByFn(i, a),
                n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, i),
                r = !0) : (r && (n = this._verifyReinsertion(n, a, s, i)),
                Object.is(n.item, a) || this._addIdentityChange(n, a)),
                n = n._next,
                i++
            }
            ),
            this.length = i;
        return this._truncate(n),
        this.collection = t,
        this.isDirty
    }
    get isDirty() {
        return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null
    }
    _reset() {
        if (this.isDirty) {
            let t;
            for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
                t._nextPrevious = t._next;
            for (t = this._additionsHead; t !== null; t = t._nextAdded)
                t.previousIndex = t.currentIndex;
            for (this._additionsHead = this._additionsTail = null,
            t = this._movesHead; t !== null; t = t._nextMoved)
                t.previousIndex = t.currentIndex;
            this._movesHead = this._movesTail = null,
            this._removalsHead = this._removalsTail = null,
            this._identityChangesHead = this._identityChangesTail = null
        }
    }
    _mismatch(t, n, r, i) {
        let o;
        return t === null ? o = this._itTail : (o = t._prev,
        this._remove(t)),
        t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null),
        t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
        this._reinsertAfter(t, o, i)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(r, i),
        t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
        this._moveAfter(t, o, i)) : t = this._addAfter(new Ag(n,r), o, i)),
        t
    }
    _verifyReinsertion(t, n, r, i) {
        let o = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(r, null);
        return o !== null ? t = this._reinsertAfter(o, t._prev, i) : t.currentIndex != i && (t.currentIndex = i,
        this._addToMoves(t, i)),
        t
    }
    _truncate(t) {
        for (; t !== null; ) {
            let n = t._next;
            this._addToRemovals(this._unlink(t)),
            t = n
        }
        this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null)
    }
    _reinsertAfter(t, n, r) {
        this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
        let i = t._prevRemoved
          , o = t._nextRemoved;
        return i === null ? this._removalsHead = o : i._nextRemoved = o,
        o === null ? this._removalsTail = i : o._prevRemoved = i,
        this._insertAfter(t, n, r),
        this._addToMoves(t, r),
        t
    }
    _moveAfter(t, n, r) {
        return this._unlink(t),
        this._insertAfter(t, n, r),
        this._addToMoves(t, r),
        t
    }
    _addAfter(t, n, r) {
        return this._insertAfter(t, n, r),
        this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t,
        t
    }
    _insertAfter(t, n, r) {
        let i = n === null ? this._itHead : n._next;
        return t._next = i,
        t._prev = n,
        i === null ? this._itTail = t : i._prev = t,
        n === null ? this._itHead = t : n._next = t,
        this._linkedRecords === null && (this._linkedRecords = new Vd),
        this._linkedRecords.put(t),
        t.currentIndex = r,
        t
    }
    _remove(t) {
        return this._addToRemovals(this._unlink(t))
    }
    _unlink(t) {
        this._linkedRecords !== null && this._linkedRecords.remove(t);
        let n = t._prev
          , r = t._next;
        return n === null ? this._itHead = r : n._next = r,
        r === null ? this._itTail = n : r._prev = n,
        t
    }
    _addToMoves(t, n) {
        return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t),
        t
    }
    _addToRemovals(t) {
        return this._unlinkedRecords === null && (this._unlinkedRecords = new Vd),
        this._unlinkedRecords.put(t),
        t.currentIndex = null,
        t._nextRemoved = null,
        this._removalsTail === null ? (this._removalsTail = this._removalsHead = t,
        t._prevRemoved = null) : (t._prevRemoved = this._removalsTail,
        this._removalsTail = this._removalsTail._nextRemoved = t),
        t
    }
    _addIdentityChange(t, n) {
        return t.item = n,
        this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t,
        t
    }
}
  , Ag = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) {
        this.item = t,
        this.trackById = n
    }
}
  , Pg = class {
    _head = null;
    _tail = null;
    add(t) {
        this._head === null ? (this._head = this._tail = t,
        t._nextDup = null,
        t._prevDup = null) : (this._tail._nextDup = t,
        t._prevDup = this._tail,
        t._nextDup = null,
        this._tail = t)
    }
    get(t, n) {
        let r;
        for (r = this._head; r !== null; r = r._nextDup)
            if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t))
                return r;
        return null
    }
    remove(t) {
        let n = t._prevDup
          , r = t._nextDup;
        return n === null ? this._head = r : n._nextDup = r,
        r === null ? this._tail = n : r._prevDup = n,
        this._head === null
    }
}
  , Vd = class {
    map = new Map;
    put(t) {
        let n = t.trackById
          , r = this.map.get(n);
        r || (r = new Pg,
        this.map.set(n, r)),
        r.add(t)
    }
    get(t, n) {
        let r = t
          , i = this.map.get(r);
        return i ? i.get(t, n) : null
    }
    remove(t) {
        let n = t.trackById;
        return this.map.get(n).remove(t) && this.map.delete(n),
        t
    }
    get isEmpty() {
        return this.map.size === 0
    }
    clear() {
        this.map.clear()
    }
}
;
function RD(e, t, n) {
    let r = e.previousIndex;
    if (r === null)
        return r;
    let i = 0;
    return n && r < n.length && (i = n[r]),
    r + t + i
}
var Fg = class {
    constructor() {}
    supports(t) {
        return t instanceof Map || Ty(t)
    }
    create() {
        return new Rg
    }
}
  , Rg = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    _removalsTail = null;
    get isDirty() {
        return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null
    }
    forEachItem(t) {
        let n;
        for (n = this._mapHead; n !== null; n = n._next)
            t(n)
    }
    forEachPreviousItem(t) {
        let n;
        for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
            t(n)
    }
    forEachChangedItem(t) {
        let n;
        for (n = this._changesHead; n !== null; n = n._nextChanged)
            t(n)
    }
    forEachAddedItem(t) {
        let n;
        for (n = this._additionsHead; n !== null; n = n._nextAdded)
            t(n)
    }
    forEachRemovedItem(t) {
        let n;
        for (n = this._removalsHead; n !== null; n = n._nextRemoved)
            t(n)
    }
    diff(t) {
        if (!t)
            t = new Map;
        else if (!(t instanceof Map || Ty(t)))
            throw new ce(900,!1);
        return this.check(t) ? this : null
    }
    onDestroy() {}
    check(t) {
        this._reset();
        let n = this._mapHead;
        if (this._appendAfter = null,
        this._forEach(t, (r, i) => {
            if (n && n.key === i)
                this._maybeAddToChanges(n, r),
                this._appendAfter = n,
                n = n._next;
            else {
                let o = this._getOrCreateRecordForKey(i, r);
                n = this._insertBeforeOrAppend(n, o)
            }
        }
        ),
        n) {
            n._prev && (n._prev._next = null),
            this._removalsHead = n;
            for (let r = n; r !== null; r = r._nextRemoved)
                r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                r._nextRemoved = r._next,
                r.previousValue = r.currentValue,
                r.currentValue = null,
                r._prev = null,
                r._next = null
        }
        return this._changesTail && (this._changesTail._nextChanged = null),
        this._additionsTail && (this._additionsTail._nextAdded = null),
        this.isDirty
    }
    _insertBeforeOrAppend(t, n) {
        if (t) {
            let r = t._prev;
            return n._next = t,
            n._prev = r,
            t._prev = n,
            r && (r._next = n),
            t === this._mapHead && (this._mapHead = n),
            this._appendAfter = t,
            t
        }
        return this._appendAfter ? (this._appendAfter._next = n,
        n._prev = this._appendAfter) : this._mapHead = n,
        this._appendAfter = n,
        null
    }
    _getOrCreateRecordForKey(t, n) {
        if (this._records.has(t)) {
            let i = this._records.get(t);
            this._maybeAddToChanges(i, n);
            let o = i._prev
              , s = i._next;
            return o && (o._next = s),
            s && (s._prev = o),
            i._next = null,
            i._prev = null,
            i
        }
        let r = new Lg(t);
        return this._records.set(t, r),
        r.currentValue = n,
        this._addToAdditions(r),
        r
    }
    _reset() {
        if (this.isDirty) {
            let t;
            for (this._previousMapHead = this._mapHead,
            t = this._previousMapHead; t !== null; t = t._next)
                t._nextPrevious = t._next;
            for (t = this._changesHead; t !== null; t = t._nextChanged)
                t.previousValue = t.currentValue;
            for (t = this._additionsHead; t != null; t = t._nextAdded)
                t.previousValue = t.currentValue;
            this._changesHead = this._changesTail = null,
            this._additionsHead = this._additionsTail = null,
            this._removalsHead = null
        }
    }
    _maybeAddToChanges(t, n) {
        Object.is(n, t.currentValue) || (t.previousValue = t.currentValue,
        t.currentValue = n,
        this._addToChanges(t))
    }
    _addToAdditions(t) {
        this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t,
        this._additionsTail = t)
    }
    _addToChanges(t) {
        this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t,
        this._changesTail = t)
    }
    _forEach(t, n) {
        t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(r => n(t[r], r))
    }
}
  , Lg = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) {
        this.key = t
    }
}
;
function LD() {
    return new Vy([new Ng])
}
var Vy = ( () => {
    class e {
        factories;
        static \u0275prov = me({
            token: e,
            providedIn: "root",
            factory: LD
        });
        constructor(n) {
            this.factories = n
        }
        static create(n, r) {
            if (r != null) {
                let i = r.factories.slice();
                n = n.concat(i)
            }
            return new e(n)
        }
        static extend(n) {
            return {
                provide: e,
                useFactory: r => e.create(n, r || LD()),
                deps: [[e, new ZD, new qD]]
            }
        }
        find(n) {
            let r = this.factories.find(i => i.supports(n));
            if (r != null)
                return r;
            throw new ce(901,!1)
        }
    }
    return e
}
)();
function VD() {
    return new Df([new Fg])
}
var Df = ( () => {
    class e {
        static \u0275prov = me({
            token: e,
            providedIn: "root",
            factory: VD
        });
        factories;
        constructor(n) {
            this.factories = n
        }
        static create(n, r) {
            if (r) {
                let i = r.factories.slice();
                n = n.concat(i)
            }
            return new e(n)
        }
        static extend(n) {
            return {
                provide: e,
                useFactory: r => e.create(n, r || VD()),
                deps: [[e, new ZD, new qD]]
            }
        }
        find(n) {
            let r = this.factories.find(i => i.supports(n));
            if (r)
                return r;
            throw new ce(901,!1)
        }
    }
    return e
}
)();
var Ete = ( () => {
    class e {
        constructor(n) {}
        static \u0275fac = function(r) {
            return new (r || e)(ze(zo))
        }
        ;
        static \u0275mod = eo({
            type: e
        });
        static \u0275inj = qi({})
    }
    return e
}
)();
function Ste(e) {
    try {
        let {rootComponent: t, appProviders: n, platformProviders: r} = e
          , i = PB(r)
          , o = [GM({}), {
            provide: Uo,
            useExisting: SB
        }, ...n || []]
          , s = new Od({
            providers: o,
            parent: i,
            debugName: "",
            runEnvironmentInitializers: !1
        });
        return NB({
            r3Injector: s.injector,
            platformInjector: i,
            rootComponent: t
        })
    } catch (t) {
        return Promise.reject(t)
    }
}
function xf(e) {
    return typeof e == "boolean" ? e : e != null && e !== "false"
}
function jB(e, t=NaN) {
    return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t
}
function io(e, t) {
    Fn("NgSignals");
    let n = Vp(e);
    return t?.equal && (n[Ut].equal = t.equal),
    n
}
function hn(e) {
    let t = Me(null);
    try {
        return e()
    } finally {
        Me(t)
    }
}
var ZM = ( () => {
    class e {
        view;
        node;
        constructor(n, r) {
            this.view = n,
            this.node = r
        }
        static __NG_ELEMENT_ID__ = BB
    }
    return e
}
)();
function BB() {
    return new ZM(K(),Mt())
}
var HB = !1
  , UB = ( () => {
    class e extends Ad {
        pendingTasks = Y(ci);
        taskId = null;
        schedule(n) {
            super.schedule(n),
            this.taskId === null && (this.taskId = this.pendingTasks.add(),
            queueMicrotask( () => this.flush()))
        }
        flush() {
            try {
                super.flush()
            } finally {
                this.taskId !== null && (this.pendingTasks.remove(this.taskId),
                this.taskId = null)
            }
        }
        static \u0275prov = me({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)()
  , Vg = class {
    scheduler;
    effectFn;
    zone;
    injector;
    unregisterOnDestroy;
    watcher;
    constructor(t, n, r, i, o, s) {
        this.scheduler = t,
        this.effectFn = n,
        this.zone = r,
        this.injector = o,
        this.watcher = G_(a => this.runEffect(a), () => this.schedule(), s),
        this.unregisterOnDestroy = i?.onDestroy( () => this.destroy())
    }
    runEffect(t) {
        try {
            this.effectFn(t)
        } catch (n) {
            this.injector.get(Yi, null, {
                optional: !0
            })?.handleError(n)
        }
    }
    run() {
        this.watcher.run()
    }
    schedule() {
        this.scheduler.schedule(this)
    }
    destroy() {
        this.watcher.destroy(),
        this.unregisterOnDestroy?.()
    }
}
;
function $B() {}
function QM(e, t) {
    Fn("NgSignals"),
    !t?.injector && Zi($B);
    let n = t?.injector ?? Y(Cn)
      , r = t?.manualCleanup !== !0 ? n.get(Pn) : null
      , i = new Vg(n.get(UB),e,typeof Zone > "u" ? null : Zone.current,r,n,t?.allowSignalWrites ?? !1)
      , o = n.get(ro, null, {
        optional: !0
    });
    return !o || !(o._lView[le] & 8) ? i.watcher.notify() : (o._lView[Kc] ??= []).push(i.watcher.notify),
    i
}
var YB = HB;
var jg = class {
    [Ut];
    constructor(t) {
        this[Ut] = t
    }
    destroy() {
        this[Ut].destroy()
    }
}
;
function pn(e, t) {
    if (YB)
        return QM(e, t);
    Fn("NgSignals"),
    !t?.injector && Zi(pn);
    let n = t?.injector ?? Y(Cn), r = t?.manualCleanup !== !0 ? n.get(Pn) : null, i, o = n.get(ZM, null, {
        optional: !0
    }), s = n.get(Uo);
    return o !== null && !t?.forceRoot ? (i = GB(o.view, s, e),
    r instanceof wd && r._lView === o.view && (r = null)) : i = qB(e, n.get(vM), s),
    i.injector = n,
    r !== null && (i.onDestroyFn = r.onDestroy( () => i.destroy())),
    new jg(i)
}
var XM = We(Te({}, Eo), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !0,
    dirty: !0,
    hasRun: !1,
    cleanupFns: void 0,
    zone: null,
    onDestroyFn: xu,
    run() {
        if (this.dirty = !1,
        this.hasRun && !nu(this))
            return;
        this.hasRun = !0;
        let e = r => (this.cleanupFns ??= []).push(r)
          , t = Ns(this)
          , n = md(!1);
        try {
            this.maybeCleanup(),
            this.fn(e)
        } finally {
            md(n),
            tu(this, t)
        }
    },
    maybeCleanup() {
        if (this.cleanupFns?.length)
            try {
                for (; this.cleanupFns.length; )
                    this.cleanupFns.pop()()
            } finally {
                this.cleanupFns = []
            }
    }
})
  , WB = We(Te({}, XM), {
    consumerMarkedDirty() {
        this.scheduler.schedule(this),
        this.notifier.notify(13)
    },
    destroy() {
        Os(this),
        this.onDestroyFn(),
        this.maybeCleanup()
    }
})
  , zB = We(Te({}, XM), {
    consumerMarkedDirty() {
        this.view[le] |= 8192,
        Ou(this.view),
        this.notifier.notify(14)
    },
    destroy() {
        Os(this),
        this.onDestroyFn(),
        this.maybeCleanup(),
        this.view[Ro]?.delete(this)
    }
});
function GB(e, t, n) {
    let r = Object.create(zB);
    return r.view = e,
    r.zone = typeof Zone < "u" ? Zone.current : null,
    r.notifier = t,
    r.fn = n,
    e[Ro] ??= new Set,
    e[Ro].add(r),
    r.consumerMarkedDirty(r),
    r
}
function qB(e, t, n) {
    let r = Object.create(WB);
    return r.fn = e,
    r.scheduler = t,
    r.notifier = n,
    r.zone = typeof Zone < "u" ? Zone.current : null,
    r.scheduler.schedule(r),
    r.notifier.notify(13),
    r
}
function Tte(e, t) {
    let n = Ar(e)
      , r = t.elementInjector || Ud();
    return new Wo(n).create(r, t.projectableNodes, t.hostElement, t.environmentInjector)
}
function kte(e) {
    let t = Ar(e);
    if (!t)
        return null;
    let n = new Wo(t);
    return {
        get selector() {
            return n.selector
        },
        get type() {
            return n.componentType
        },
        get inputs() {
            return n.inputs
        },
        get outputs() {
            return n.outputs
        },
        get ngContentSelectors() {
            return n.ngContentSelectors
        },
        get isStandalone() {
            return t.standalone
        },
        get isSignal() {
            return t.signals
        }
    }
}
var ab = null;
function pa() {
    return ab
}
function Xte(e) {
    ab ??= e
}
var JM = class {
}
;
var Lu = new ue("")
  , Xy = ( () => {
    class e {
        historyGo(n) {
            throw new Error("")
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: () => Y(ZB),
            providedIn: "platform"
        })
    }
    return e
}
)()
  , Jte = new ue("")
  , ZB = ( () => {
    class e extends Xy {
        _location;
        _history;
        _doc = Y(Lu);
        constructor() {
            super(),
            this._location = window.location,
            this._history = window.history
        }
        getBaseHrefFromDOM() {
            return pa().getBaseHref(this._doc)
        }
        onPopState(n) {
            let r = pa().getGlobalEventTarget(this._doc, "window");
            return r.addEventListener("popstate", n, !1),
            () => r.removeEventListener("popstate", n)
        }
        onHashChange(n) {
            let r = pa().getGlobalEventTarget(this._doc, "window");
            return r.addEventListener("hashchange", n, !1),
            () => r.removeEventListener("hashchange", n)
        }
        get href() {
            return this._location.href
        }
        get protocol() {
            return this._location.protocol
        }
        get hostname() {
            return this._location.hostname
        }
        get port() {
            return this._location.port
        }
        get pathname() {
            return this._location.pathname
        }
        get search() {
            return this._location.search
        }
        get hash() {
            return this._location.hash
        }
        set pathname(n) {
            this._location.pathname = n
        }
        pushState(n, r, i) {
            this._history.pushState(n, r, i)
        }
        replaceState(n, r, i) {
            this._history.replaceState(n, r, i)
        }
        forward() {
            this._history.forward()
        }
        back() {
            this._history.back()
        }
        historyGo(n=0) {
            this._history.go(n)
        }
        getState() {
            return this._history.state
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: () => new e,
            providedIn: "platform"
        })
    }
    return e
}
)();
function Jy(e, t) {
    if (e.length == 0)
        return t;
    if (t.length == 0)
        return e;
    let n = 0;
    return e.endsWith("/") && n++,
    t.startsWith("/") && n++,
    n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + "/" + t
}
function KM(e) {
    let t = e.match(/#|\?|$/)
      , n = t && t.index || e.length
      , r = n - (e[n - 1] === "/" ? 1 : 0);
    return e.slice(0, r) + e.slice(n)
}
function hi(e) {
    return e && e[0] !== "?" ? "?" + e : e
}
var Ff = ( () => {
    class e {
        historyGo(n) {
            throw new Error("")
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: () => Y(QB),
            providedIn: "root"
        })
    }
    return e
}
)()
  , ub = new ue("")
  , QB = ( () => {
    class e extends Ff {
        _platformLocation;
        _baseHref;
        _removeListenerFns = [];
        constructor(n, r) {
            super(),
            this._platformLocation = n,
            this._baseHref = r ?? this._platformLocation.getBaseHrefFromDOM() ?? Y(Lu).location?.origin ?? ""
        }
        ngOnDestroy() {
            for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()()
        }
        onPopState(n) {
            this._removeListenerFns.push(this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n))
        }
        getBaseHref() {
            return this._baseHref
        }
        prepareExternalUrl(n) {
            return Jy(this._baseHref, n)
        }
        path(n=!1) {
            let r = this._platformLocation.pathname + hi(this._platformLocation.search)
              , i = this._platformLocation.hash;
            return i && n ? `${r}${i}` : r
        }
        pushState(n, r, i, o) {
            let s = this.prepareExternalUrl(i + hi(o));
            this._platformLocation.pushState(n, r, s)
        }
        replaceState(n, r, i, o) {
            let s = this.prepareExternalUrl(i + hi(o));
            this._platformLocation.replaceState(n, r, s)
        }
        forward() {
            this._platformLocation.forward()
        }
        back() {
            this._platformLocation.back()
        }
        getState() {
            return this._platformLocation.getState()
        }
        historyGo(n=0) {
            this._platformLocation.historyGo?.(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)(ze(Xy),ze(ub, 8))
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , Kte = ( () => {
    class e extends Ff {
        _platformLocation;
        _baseHref = "";
        _removeListenerFns = [];
        constructor(n, r) {
            super(),
            this._platformLocation = n,
            r != null && (this._baseHref = r)
        }
        ngOnDestroy() {
            for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()()
        }
        onPopState(n) {
            this._removeListenerFns.push(this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n))
        }
        getBaseHref() {
            return this._baseHref
        }
        path(n=!1) {
            let r = this._platformLocation.hash ?? "#";
            return r.length > 0 ? r.substring(1) : r
        }
        prepareExternalUrl(n) {
            let r = Jy(this._baseHref, n);
            return r.length > 0 ? "#" + r : r
        }
        pushState(n, r, i, o) {
            let s = this.prepareExternalUrl(i + hi(o));
            s.length == 0 && (s = this._platformLocation.pathname),
            this._platformLocation.pushState(n, r, s)
        }
        replaceState(n, r, i, o) {
            let s = this.prepareExternalUrl(i + hi(o));
            s.length == 0 && (s = this._platformLocation.pathname),
            this._platformLocation.replaceState(n, r, s)
        }
        forward() {
            this._platformLocation.forward()
        }
        back() {
            this._platformLocation.back()
        }
        getState() {
            return this._platformLocation.getState()
        }
        historyGo(n=0) {
            this._platformLocation.historyGo?.(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)(ze(Xy),ze(ub, 8))
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , XB = ( () => {
    class e {
        _subject = new st;
        _basePath;
        _locationStrategy;
        _urlChangeListeners = [];
        _urlChangeSubscription = null;
        constructor(n) {
            this._locationStrategy = n;
            let r = this._locationStrategy.getBaseHref();
            this._basePath = e3(KM(eb(r))),
            this._locationStrategy.onPopState(i => {
                this._subject.next({
                    url: this.path(!0),
                    pop: !0,
                    state: i.state,
                    type: i.type
                })
            }
            )
        }
        ngOnDestroy() {
            this._urlChangeSubscription?.unsubscribe(),
            this._urlChangeListeners = []
        }
        path(n=!1) {
            return this.normalize(this._locationStrategy.path(n))
        }
        getState() {
            return this._locationStrategy.getState()
        }
        isCurrentPathEqualTo(n, r="") {
            return this.path() == this.normalize(n + hi(r))
        }
        normalize(n) {
            return e.stripTrailingSlash(KB(this._basePath, eb(n)))
        }
        prepareExternalUrl(n) {
            return n && n[0] !== "/" && (n = "/" + n),
            this._locationStrategy.prepareExternalUrl(n)
        }
        go(n, r="", i=null) {
            this._locationStrategy.pushState(i, "", n, r),
            this._notifyUrlChangeListeners(this.prepareExternalUrl(n + hi(r)), i)
        }
        replaceState(n, r="", i=null) {
            this._locationStrategy.replaceState(i, "", n, r),
            this._notifyUrlChangeListeners(this.prepareExternalUrl(n + hi(r)), i)
        }
        forward() {
            this._locationStrategy.forward()
        }
        back() {
            this._locationStrategy.back()
        }
        historyGo(n=0) {
            this._locationStrategy.historyGo?.(n)
        }
        onUrlChange(n) {
            return this._urlChangeListeners.push(n),
            this._urlChangeSubscription ??= this.subscribe(r => {
                this._notifyUrlChangeListeners(r.url, r.state)
            }
            ),
            () => {
                let r = this._urlChangeListeners.indexOf(n);
                this._urlChangeListeners.splice(r, 1),
                this._urlChangeListeners.length === 0 && (this._urlChangeSubscription?.unsubscribe(),
                this._urlChangeSubscription = null)
            }
        }
        _notifyUrlChangeListeners(n="", r) {
            this._urlChangeListeners.forEach(i => i(n, r))
        }
        subscribe(n, r, i) {
            return this._subject.subscribe({
                next: n,
                error: r ?? void 0,
                complete: i ?? void 0
            })
        }
        static normalizeQueryParams = hi;
        static joinWithSlash = Jy;
        static stripTrailingSlash = KM;
        static \u0275fac = function(r) {
            return new (r || e)(ze(Ff))
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: () => JB(),
            providedIn: "root"
        })
    }
    return e
}
)();
function JB() {
    return new XB(ze(Ff))
}
function KB(e, t) {
    if (!e || !t.startsWith(e))
        return t;
    let n = t.substring(e.length);
    return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t
}
function eb(e) {
    return e.replace(/\/index.html$/, "")
}
function e3(e) {
    if (new RegExp("^(https?:)?//").test(e)) {
        let[,n] = e.split(/\/\/[^\/]+/);
        return n
    }
    return e
}
var Ky = function(e) {
    return e[e.Decimal = 0] = "Decimal",
    e[e.Percent = 1] = "Percent",
    e[e.Currency = 2] = "Currency",
    e[e.Scientific = 3] = "Scientific",
    e
}(Ky || {});
var mn = function(e) {
    return e[e.Format = 0] = "Format",
    e[e.Standalone = 1] = "Standalone",
    e
}(mn || {})
  , Qe = function(e) {
    return e[e.Narrow = 0] = "Narrow",
    e[e.Abbreviated = 1] = "Abbreviated",
    e[e.Wide = 2] = "Wide",
    e[e.Short = 3] = "Short",
    e
}(Qe || {})
  , Ln = function(e) {
    return e[e.Short = 0] = "Short",
    e[e.Medium = 1] = "Medium",
    e[e.Long = 2] = "Long",
    e[e.Full = 3] = "Full",
    e
}(Ln || {})
  , zt = {
    Decimal: 0,
    Group: 1,
    List: 2,
    PercentSign: 3,
    PlusSign: 4,
    MinusSign: 5,
    Exponential: 6,
    SuperscriptingExponent: 7,
    PerMille: 8,
    Infinity: 9,
    NaN: 10,
    TimeSeparator: 11,
    CurrencyDecimal: 12,
    CurrencyGroup: 13
};
function t3(e) {
    return Rn(e)[vt.LocaleId]
}
function n3(e, t, n) {
    let r = Rn(e)
      , i = [r[vt.DayPeriodsFormat], r[vt.DayPeriodsStandalone]]
      , o = Gn(i, t);
    return Gn(o, n)
}
function r3(e, t, n) {
    let r = Rn(e)
      , i = [r[vt.DaysFormat], r[vt.DaysStandalone]]
      , o = Gn(i, t);
    return Gn(o, n)
}
function i3(e, t, n) {
    let r = Rn(e)
      , i = [r[vt.MonthsFormat], r[vt.MonthsStandalone]]
      , o = Gn(i, t);
    return Gn(o, n)
}
function o3(e, t) {
    let r = Rn(e)[vt.Eras];
    return Gn(r, t)
}
function Cf(e, t) {
    let n = Rn(e);
    return Gn(n[vt.DateFormat], t)
}
function Mf(e, t) {
    let n = Rn(e);
    return Gn(n[vt.TimeFormat], t)
}
function bf(e, t) {
    let r = Rn(e)[vt.DateTimeFormat];
    return Gn(r, t)
}
function hr(e, t) {
    let n = Rn(e)
      , r = n[vt.NumberSymbols][t];
    if (typeof r > "u") {
        if (t === zt.CurrencyDecimal)
            return n[vt.NumberSymbols][zt.Decimal];
        if (t === zt.CurrencyGroup)
            return n[vt.NumberSymbols][zt.Group]
    }
    return r
}
function lb(e, t) {
    return Rn(e)[vt.NumberFormats][t]
}
function cb(e) {
    if (!e[vt.ExtraData])
        throw new Error(`Missing extra locale data for the locale "${e[vt.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)
}
function s3(e) {
    let t = Rn(e);
    return cb(t),
    (t[vt.ExtraData][2] || []).map(r => typeof r == "string" ? jy(r) : [jy(r[0]), jy(r[1])])
}
function a3(e, t, n) {
    let r = Rn(e);
    cb(r);
    let i = [r[vt.ExtraData][0], r[vt.ExtraData][1]]
      , o = Gn(i, t) || [];
    return Gn(o, n) || []
}
function Gn(e, t) {
    for (let n = t; n > -1; n--)
        if (typeof e[n] < "u")
            return e[n];
    throw new Error("Locale data API: locale data undefined")
}
function jy(e) {
    let[t,n] = e.split(":");
    return {
        hours: +t,
        minutes: +n
    }
}
var u3 = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/
  , If = {}
  , l3 = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/
  , pi = function(e) {
    return e[e.Short = 0] = "Short",
    e[e.ShortGMT = 1] = "ShortGMT",
    e[e.Long = 2] = "Long",
    e[e.Extended = 3] = "Extended",
    e
}(pi || {})
  , Be = function(e) {
    return e[e.FullYear = 0] = "FullYear",
    e[e.Month = 1] = "Month",
    e[e.Date = 2] = "Date",
    e[e.Hours = 3] = "Hours",
    e[e.Minutes = 4] = "Minutes",
    e[e.Seconds = 5] = "Seconds",
    e[e.FractionalSeconds = 6] = "FractionalSeconds",
    e[e.Day = 7] = "Day",
    e
}(Be || {})
  , je = function(e) {
    return e[e.DayPeriods = 0] = "DayPeriods",
    e[e.Days = 1] = "Days",
    e[e.Months = 2] = "Months",
    e[e.Eras = 3] = "Eras",
    e
}(je || {});
function c3(e, t, n, r) {
    let i = _3(e);
    t = fi(n, t) || t;
    let s = [], a;
    for (; t; )
        if (a = l3.exec(t),
        a) {
            s = s.concat(a.slice(1));
            let f = s.pop();
            if (!f)
                break;
            t = f
        } else {
            s.push(t);
            break
        }
    let l = i.getTimezoneOffset();
    r && (l = fb(r, l),
    i = v3(i, r, !0));
    let c = "";
    return s.forEach(f => {
        let p = g3(f);
        c += p ? p(i, n, l) : f === "''" ? "'" : f.replace(/(^'|'$)/g, "").replace(/''/g, "'")
    }
    ),
    c
}
function Nf(e, t, n) {
    let r = new Date(0);
    return r.setFullYear(e, t, n),
    r.setHours(0, 0, 0),
    r
}
function fi(e, t) {
    let n = t3(e);
    if (If[n] ??= {},
    If[n][t])
        return If[n][t];
    let r = "";
    switch (t) {
    case "shortDate":
        r = Cf(e, Ln.Short);
        break;
    case "mediumDate":
        r = Cf(e, Ln.Medium);
        break;
    case "longDate":
        r = Cf(e, Ln.Long);
        break;
    case "fullDate":
        r = Cf(e, Ln.Full);
        break;
    case "shortTime":
        r = Mf(e, Ln.Short);
        break;
    case "mediumTime":
        r = Mf(e, Ln.Medium);
        break;
    case "longTime":
        r = Mf(e, Ln.Long);
        break;
    case "fullTime":
        r = Mf(e, Ln.Full);
        break;
    case "short":
        let i = fi(e, "shortTime")
          , o = fi(e, "shortDate");
        r = Ef(bf(e, Ln.Short), [i, o]);
        break;
    case "medium":
        let s = fi(e, "mediumTime")
          , a = fi(e, "mediumDate");
        r = Ef(bf(e, Ln.Medium), [s, a]);
        break;
    case "long":
        let l = fi(e, "longTime")
          , c = fi(e, "longDate");
        r = Ef(bf(e, Ln.Long), [l, c]);
        break;
    case "full":
        let f = fi(e, "fullTime")
          , p = fi(e, "fullDate");
        r = Ef(bf(e, Ln.Full), [f, p]);
        break
    }
    return r && (If[n][t] = r),
    r
}
function Ef(e, t) {
    return t && (e = e.replace(/\{([^}]+)}/g, function(n, r) {
        return t != null && r in t ? t[r] : n
    })),
    e
}
function fr(e, t, n="-", r, i) {
    let o = "";
    (e < 0 || i && e <= 0) && (i ? e = -e + 1 : (e = -e,
    o = n));
    let s = String(e);
    for (; s.length < t; )
        s = "0" + s;
    return r && (s = s.slice(s.length - t)),
    o + s
}
function d3(e, t) {
    return fr(e, 3).substring(0, t)
}
function bt(e, t, n=0, r=!1, i=!1) {
    return function(o, s) {
        let a = f3(e, o);
        if ((n > 0 || a > -n) && (a += n),
        e === Be.Hours)
            a === 0 && n === -12 && (a = 12);
        else if (e === Be.FractionalSeconds)
            return d3(a, t);
        let l = hr(s, zt.MinusSign);
        return fr(a, t, l, r, i)
    }
}
function f3(e, t) {
    switch (e) {
    case Be.FullYear:
        return t.getFullYear();
    case Be.Month:
        return t.getMonth();
    case Be.Date:
        return t.getDate();
    case Be.Hours:
        return t.getHours();
    case Be.Minutes:
        return t.getMinutes();
    case Be.Seconds:
        return t.getSeconds();
    case Be.FractionalSeconds:
        return t.getMilliseconds();
    case Be.Day:
        return t.getDay();
    default:
        throw new Error(`Unknown DateType value "${e}".`)
    }
}
function et(e, t, n=mn.Format, r=!1) {
    return function(i, o) {
        return h3(i, o, e, t, n, r)
    }
}
function h3(e, t, n, r, i, o) {
    switch (n) {
    case je.Months:
        return i3(t, i, r)[e.getMonth()];
    case je.Days:
        return r3(t, i, r)[e.getDay()];
    case je.DayPeriods:
        let s = e.getHours()
          , a = e.getMinutes();
        if (o) {
            let c = s3(t)
              , f = a3(t, i, r)
              , p = c.findIndex(m => {
                if (Array.isArray(m)) {
                    let[y,v] = m
                      , w = s >= y.hours && a >= y.minutes
                      , x = s < v.hours || s === v.hours && a < v.minutes;
                    if (y.hours < v.hours) {
                        if (w && x)
                            return !0
                    } else if (w || x)
                        return !0
                } else if (m.hours === s && m.minutes === a)
                    return !0;
                return !1
            }
            );
            if (p !== -1)
                return f[p]
        }
        return n3(t, i, r)[s < 12 ? 0 : 1];
    case je.Eras:
        return o3(t, r)[e.getFullYear() <= 0 ? 0 : 1];
    default:
        let l = n;
        throw new Error(`unexpected translation type ${l}`)
    }
}
function Sf(e) {
    return function(t, n, r) {
        let i = -1 * r
          , o = hr(n, zt.MinusSign)
          , s = i > 0 ? Math.floor(i / 60) : Math.ceil(i / 60);
        switch (e) {
        case pi.Short:
            return (i >= 0 ? "+" : "") + fr(s, 2, o) + fr(Math.abs(i % 60), 2, o);
        case pi.ShortGMT:
            return "GMT" + (i >= 0 ? "+" : "") + fr(s, 1, o);
        case pi.Long:
            return "GMT" + (i >= 0 ? "+" : "") + fr(s, 2, o) + ":" + fr(Math.abs(i % 60), 2, o);
        case pi.Extended:
            return r === 0 ? "Z" : (i >= 0 ? "+" : "") + fr(s, 2, o) + ":" + fr(Math.abs(i % 60), 2, o);
        default:
            throw new Error(`Unknown zone width "${e}"`)
        }
    }
}
var p3 = 0
  , kf = 4;
function m3(e) {
    let t = Nf(e, p3, 1).getDay();
    return Nf(e, 0, 1 + (t <= kf ? kf : kf + 7) - t)
}
function db(e) {
    let t = e.getDay()
      , n = t === 0 ? -3 : kf - t;
    return Nf(e.getFullYear(), e.getMonth(), e.getDate() + n)
}
function By(e, t=!1) {
    return function(n, r) {
        let i;
        if (t) {
            let o = new Date(n.getFullYear(),n.getMonth(),1).getDay() - 1
              , s = n.getDate();
            i = 1 + Math.floor((s + o) / 7)
        } else {
            let o = db(n)
              , s = m3(o.getFullYear())
              , a = o.getTime() - s.getTime();
            i = 1 + Math.round(a / 6048e5)
        }
        return fr(i, e, hr(r, zt.MinusSign))
    }
}
function Tf(e, t=!1) {
    return function(n, r) {
        let o = db(n).getFullYear();
        return fr(o, e, hr(r, zt.MinusSign), t)
    }
}
var Hy = {};
function g3(e) {
    if (Hy[e])
        return Hy[e];
    let t;
    switch (e) {
    case "G":
    case "GG":
    case "GGG":
        t = et(je.Eras, Qe.Abbreviated);
        break;
    case "GGGG":
        t = et(je.Eras, Qe.Wide);
        break;
    case "GGGGG":
        t = et(je.Eras, Qe.Narrow);
        break;
    case "y":
        t = bt(Be.FullYear, 1, 0, !1, !0);
        break;
    case "yy":
        t = bt(Be.FullYear, 2, 0, !0, !0);
        break;
    case "yyy":
        t = bt(Be.FullYear, 3, 0, !1, !0);
        break;
    case "yyyy":
        t = bt(Be.FullYear, 4, 0, !1, !0);
        break;
    case "Y":
        t = Tf(1);
        break;
    case "YY":
        t = Tf(2, !0);
        break;
    case "YYY":
        t = Tf(3);
        break;
    case "YYYY":
        t = Tf(4);
        break;
    case "M":
    case "L":
        t = bt(Be.Month, 1, 1);
        break;
    case "MM":
    case "LL":
        t = bt(Be.Month, 2, 1);
        break;
    case "MMM":
        t = et(je.Months, Qe.Abbreviated);
        break;
    case "MMMM":
        t = et(je.Months, Qe.Wide);
        break;
    case "MMMMM":
        t = et(je.Months, Qe.Narrow);
        break;
    case "LLL":
        t = et(je.Months, Qe.Abbreviated, mn.Standalone);
        break;
    case "LLLL":
        t = et(je.Months, Qe.Wide, mn.Standalone);
        break;
    case "LLLLL":
        t = et(je.Months, Qe.Narrow, mn.Standalone);
        break;
    case "w":
        t = By(1);
        break;
    case "ww":
        t = By(2);
        break;
    case "W":
        t = By(1, !0);
        break;
    case "d":
        t = bt(Be.Date, 1);
        break;
    case "dd":
        t = bt(Be.Date, 2);
        break;
    case "c":
    case "cc":
        t = bt(Be.Day, 1);
        break;
    case "ccc":
        t = et(je.Days, Qe.Abbreviated, mn.Standalone);
        break;
    case "cccc":
        t = et(je.Days, Qe.Wide, mn.Standalone);
        break;
    case "ccccc":
        t = et(je.Days, Qe.Narrow, mn.Standalone);
        break;
    case "cccccc":
        t = et(je.Days, Qe.Short, mn.Standalone);
        break;
    case "E":
    case "EE":
    case "EEE":
        t = et(je.Days, Qe.Abbreviated);
        break;
    case "EEEE":
        t = et(je.Days, Qe.Wide);
        break;
    case "EEEEE":
        t = et(je.Days, Qe.Narrow);
        break;
    case "EEEEEE":
        t = et(je.Days, Qe.Short);
        break;
    case "a":
    case "aa":
    case "aaa":
        t = et(je.DayPeriods, Qe.Abbreviated);
        break;
    case "aaaa":
        t = et(je.DayPeriods, Qe.Wide);
        break;
    case "aaaaa":
        t = et(je.DayPeriods, Qe.Narrow);
        break;
    case "b":
    case "bb":
    case "bbb":
        t = et(je.DayPeriods, Qe.Abbreviated, mn.Standalone, !0);
        break;
    case "bbbb":
        t = et(je.DayPeriods, Qe.Wide, mn.Standalone, !0);
        break;
    case "bbbbb":
        t = et(je.DayPeriods, Qe.Narrow, mn.Standalone, !0);
        break;
    case "B":
    case "BB":
    case "BBB":
        t = et(je.DayPeriods, Qe.Abbreviated, mn.Format, !0);
        break;
    case "BBBB":
        t = et(je.DayPeriods, Qe.Wide, mn.Format, !0);
        break;
    case "BBBBB":
        t = et(je.DayPeriods, Qe.Narrow, mn.Format, !0);
        break;
    case "h":
        t = bt(Be.Hours, 1, -12);
        break;
    case "hh":
        t = bt(Be.Hours, 2, -12);
        break;
    case "H":
        t = bt(Be.Hours, 1);
        break;
    case "HH":
        t = bt(Be.Hours, 2);
        break;
    case "m":
        t = bt(Be.Minutes, 1);
        break;
    case "mm":
        t = bt(Be.Minutes, 2);
        break;
    case "s":
        t = bt(Be.Seconds, 1);
        break;
    case "ss":
        t = bt(Be.Seconds, 2);
        break;
    case "S":
        t = bt(Be.FractionalSeconds, 1);
        break;
    case "SS":
        t = bt(Be.FractionalSeconds, 2);
        break;
    case "SSS":
        t = bt(Be.FractionalSeconds, 3);
        break;
    case "Z":
    case "ZZ":
    case "ZZZ":
        t = Sf(pi.Short);
        break;
    case "ZZZZZ":
        t = Sf(pi.Extended);
        break;
    case "O":
    case "OO":
    case "OOO":
    case "z":
    case "zz":
    case "zzz":
        t = Sf(pi.ShortGMT);
        break;
    case "OOOO":
    case "ZZZZ":
    case "zzzz":
        t = Sf(pi.Long);
        break;
    default:
        return null
    }
    return Hy[e] = t,
    t
}
function fb(e, t) {
    e = e.replace(/:/g, "");
    let n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
    return isNaN(n) ? t : n
}
function y3(e, t) {
    return e = new Date(e.getTime()),
    e.setMinutes(e.getMinutes() + t),
    e
}
function v3(e, t, n) {
    let r = n ? -1 : 1
      , i = e.getTimezoneOffset()
      , o = fb(t, i);
    return y3(e, r * (o - i))
}
function _3(e) {
    if (tb(e))
        return e;
    if (typeof e == "number" && !isNaN(e))
        return new Date(e);
    if (typeof e == "string") {
        if (e = e.trim(),
        /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)) {
            let[i,o=1,s=1] = e.split("-").map(a => +a);
            return Nf(i, o - 1, s)
        }
        let n = parseFloat(e);
        if (!isNaN(e - n))
            return new Date(n);
        let r;
        if (r = e.match(u3))
            return w3(r)
    }
    let t = new Date(e);
    if (!tb(t))
        throw new Error(`Unable to convert "${e}" into a date`);
    return t
}
function w3(e) {
    let t = new Date(0)
      , n = 0
      , r = 0
      , i = e[8] ? t.setUTCFullYear : t.setFullYear
      , o = e[8] ? t.setUTCHours : t.setHours;
    e[9] && (n = Number(e[9] + e[10]),
    r = Number(e[9] + e[11])),
    i.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
    let s = Number(e[4] || 0) - n
      , a = Number(e[5] || 0) - r
      , l = Number(e[6] || 0)
      , c = Math.floor(parseFloat("0." + (e[7] || 0)) * 1e3);
    return o.call(t, s, a, l, c),
    t
}
function tb(e) {
    return e instanceof Date && !isNaN(e.valueOf())
}
var D3 = /^(\d+)?\.((\d+)(-(\d+))?)?$/
  , nb = 22
  , Of = "."
  , Ru = "0"
  , x3 = ";"
  , C3 = ","
  , Uy = "#";
var M3 = "%";
function hb(e, t, n, r, i, o, s=!1) {
    let a = ""
      , l = !1;
    if (!isFinite(e))
        a = hr(n, zt.Infinity);
    else {
        let c = S3(e);
        s && (c = E3(c));
        let f = t.minInt
          , p = t.minFrac
          , m = t.maxFrac;
        if (o) {
            let I = o.match(D3);
            if (I === null)
                throw new Error(`${o} is not a valid digit info`);
            let T = I[1]
              , M = I[3]
              , S = I[5];
            T != null && (f = $y(T)),
            M != null && (p = $y(M)),
            S != null ? m = $y(S) : M != null && p > m && (m = p)
        }
        T3(c, p, m);
        let y = c.digits
          , v = c.integerLen
          , w = c.exponent
          , x = [];
        for (l = y.every(I => !I); v < f; v++)
            y.unshift(0);
        for (; v < 0; v++)
            y.unshift(0);
        v > 0 ? x = y.splice(v, y.length) : (x = y,
        y = [0]);
        let D = [];
        for (y.length >= t.lgSize && D.unshift(y.splice(-t.lgSize, y.length).join("")); y.length > t.gSize; )
            D.unshift(y.splice(-t.gSize, y.length).join(""));
        y.length && D.unshift(y.join("")),
        a = D.join(hr(n, r)),
        x.length && (a += hr(n, i) + x.join("")),
        w && (a += hr(n, zt.Exponential) + "+" + w)
    }
    return e < 0 && !l ? a = t.negPre + a + t.negSuf : a = t.posPre + a + t.posSuf,
    a
}
function b3(e, t, n) {
    let r = lb(t, Ky.Percent)
      , i = pb(r, hr(t, zt.MinusSign));
    return hb(e, i, t, zt.Group, zt.Decimal, n, !0).replace(new RegExp(M3,"g"), hr(t, zt.PercentSign))
}
function I3(e, t, n) {
    let r = lb(t, Ky.Decimal)
      , i = pb(r, hr(t, zt.MinusSign));
    return hb(e, i, t, zt.Group, zt.Decimal, n)
}
function pb(e, t="-") {
    let n = {
        minInt: 1,
        minFrac: 0,
        maxFrac: 0,
        posPre: "",
        posSuf: "",
        negPre: "",
        negSuf: "",
        gSize: 0,
        lgSize: 0
    }
      , r = e.split(x3)
      , i = r[0]
      , o = r[1]
      , s = i.indexOf(Of) !== -1 ? i.split(Of) : [i.substring(0, i.lastIndexOf(Ru) + 1), i.substring(i.lastIndexOf(Ru) + 1)]
      , a = s[0]
      , l = s[1] || "";
    n.posPre = a.substring(0, a.indexOf(Uy));
    for (let f = 0; f < l.length; f++) {
        let p = l.charAt(f);
        p === Ru ? n.minFrac = n.maxFrac = f + 1 : p === Uy ? n.maxFrac = f + 1 : n.posSuf += p
    }
    let c = a.split(C3);
    if (n.gSize = c[1] ? c[1].length : 0,
    n.lgSize = c[2] || c[1] ? (c[2] || c[1]).length : 0,
    o) {
        let f = i.length - n.posPre.length - n.posSuf.length
          , p = o.indexOf(Uy);
        n.negPre = o.substring(0, p).replace(/'/g, ""),
        n.negSuf = o.slice(p + f).replace(/'/g, "")
    } else
        n.negPre = t + n.posPre,
        n.negSuf = n.posSuf;
    return n
}
function E3(e) {
    if (e.digits[0] === 0)
        return e;
    let t = e.digits.length - e.integerLen;
    return e.exponent ? e.exponent += 2 : (t === 0 ? e.digits.push(0, 0) : t === 1 && e.digits.push(0),
    e.integerLen += 2),
    e
}
function S3(e) {
    let t = Math.abs(e) + "", n = 0, r, i, o, s, a;
    for ((i = t.indexOf(Of)) > -1 && (t = t.replace(Of, "")),
    (o = t.search(/e/i)) > 0 ? (i < 0 && (i = o),
    i += +t.slice(o + 1),
    t = t.substring(0, o)) : i < 0 && (i = t.length),
    o = 0; t.charAt(o) === Ru; o++)
        ;
    if (o === (a = t.length))
        r = [0],
        i = 1;
    else {
        for (a--; t.charAt(a) === Ru; )
            a--;
        for (i -= o,
        r = [],
        s = 0; o <= a; o++,
        s++)
            r[s] = Number(t.charAt(o))
    }
    return i > nb && (r = r.splice(0, nb - 1),
    n = i - 1,
    i = 1),
    {
        digits: r,
        exponent: n,
        integerLen: i
    }
}
function T3(e, t, n) {
    if (t > n)
        throw new Error(`The minimum number of digits after fraction (${t}) is higher than the maximum (${n}).`);
    let r = e.digits
      , i = r.length - e.integerLen
      , o = Math.min(Math.max(t, i), n)
      , s = o + e.integerLen
      , a = r[s];
    if (s > 0) {
        r.splice(Math.max(e.integerLen, s));
        for (let p = s; p < r.length; p++)
            r[p] = 0
    } else {
        i = Math.max(0, i),
        e.integerLen = 1,
        r.length = Math.max(1, s = o + 1),
        r[0] = 0;
        for (let p = 1; p < s; p++)
            r[p] = 0
    }
    if (a >= 5)
        if (s - 1 < 0) {
            for (let p = 0; p > s; p--)
                r.unshift(0),
                e.integerLen++;
            r.unshift(1),
            e.integerLen++
        } else
            r[s - 1]++;
    for (; i < Math.max(0, o); i++)
        r.push(0);
    let l = o !== 0
      , c = t + e.integerLen
      , f = r.reduceRight(function(p, m, y, v) {
        return m = m + p,
        v[y] = m < 10 ? m : m - 10,
        l && (v[y] === 0 && y >= c ? v.pop() : l = !1),
        m >= 10 ? 1 : 0
    }, 0);
    f && (r.unshift(f),
    e.integerLen++)
}
function $y(e) {
    let t = parseInt(e);
    if (isNaN(t))
        throw new Error("Invalid integer literal when parsing " + e);
    return t
}
function mb(e, t) {
    t = encodeURIComponent(t);
    for (let n of e.split(";")) {
        let r = n.indexOf("=")
          , [i,o] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
        if (i.trim() === t)
            return decodeURIComponent(o)
    }
    return null
}
var Yy = /\s+/
  , rb = []
  , Rf = ( () => {
    class e {
        _ngEl;
        _renderer;
        initialClasses = rb;
        rawClass;
        stateMap = new Map;
        constructor(n, r) {
            this._ngEl = n,
            this._renderer = r
        }
        set klass(n) {
            this.initialClasses = n != null ? n.trim().split(Yy) : rb
        }
        set ngClass(n) {
            this.rawClass = typeof n == "string" ? n.trim().split(Yy) : n
        }
        ngDoCheck() {
            for (let r of this.initialClasses)
                this._updateState(r, !0);
            let n = this.rawClass;
            if (Array.isArray(n) || n instanceof Set)
                for (let r of n)
                    this._updateState(r, !0);
            else if (n != null)
                for (let r of Object.keys(n))
                    this._updateState(r, !!n[r]);
            this._applyStateDiff()
        }
        _updateState(n, r) {
            let i = this.stateMap.get(n);
            i !== void 0 ? (i.enabled !== r && (i.changed = !0,
            i.enabled = r),
            i.touched = !0) : this.stateMap.set(n, {
                enabled: r,
                changed: !0,
                touched: !0
            })
        }
        _applyStateDiff() {
            for (let n of this.stateMap) {
                let r = n[0]
                  , i = n[1];
                i.changed ? (this._toggleClass(r, i.enabled),
                i.changed = !1) : i.touched || (i.enabled && this._toggleClass(r, !1),
                this.stateMap.delete(r)),
                i.touched = !1
            }
        }
        _toggleClass(n, r) {
            n = n.trim(),
            n.length > 0 && n.split(Yy).forEach(i => {
                r ? this._renderer.addClass(this._ngEl.nativeElement, i) : this._renderer.removeClass(this._ngEl.nativeElement, i)
            }
            )
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(Ne),O(yt))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "ngClass", ""]],
            inputs: {
                klass: [0, "class", "klass"],
                ngClass: "ngClass"
            }
        })
    }
    return e
}
)();
var Wy = class {
    $implicit;
    ngForOf;
    index;
    count;
    constructor(t, n, r, i) {
        this.$implicit = t,
        this.ngForOf = n,
        this.index = r,
        this.count = i
    }
    get first() {
        return this.index === 0
    }
    get last() {
        return this.index === this.count - 1
    }
    get even() {
        return this.index % 2 === 0
    }
    get odd() {
        return !this.even
    }
}
  , ene = ( () => {
    class e {
        _viewContainer;
        _template;
        _differs;
        set ngForOf(n) {
            this._ngForOf = n,
            this._ngForOfDirty = !0
        }
        set ngForTrackBy(n) {
            this._trackByFn = n
        }
        get ngForTrackBy() {
            return this._trackByFn
        }
        _ngForOf = null;
        _ngForOfDirty = !0;
        _differ = null;
        _trackByFn;
        constructor(n, r, i) {
            this._viewContainer = n,
            this._template = r,
            this._differs = i
        }
        set ngForTemplate(n) {
            n && (this._template = n)
        }
        ngDoCheck() {
            if (this._ngForOfDirty) {
                this._ngForOfDirty = !1;
                let n = this._ngForOf;
                if (!this._differ && n)
                    if (0)
                        try {} catch {}
                    else
                        this._differ = this._differs.find(n).create(this.ngForTrackBy)
            }
            if (this._differ) {
                let n = this._differ.diff(this._ngForOf);
                n && this._applyChanges(n)
            }
        }
        _applyChanges(n) {
            let r = this._viewContainer;
            n.forEachOperation( (i, o, s) => {
                if (i.previousIndex == null)
                    r.createEmbeddedView(this._template, new Wy(i.item,this._ngForOf,-1,-1), s === null ? void 0 : s);
                else if (s == null)
                    r.remove(o === null ? void 0 : o);
                else if (o !== null) {
                    let a = r.get(o);
                    r.move(a, s),
                    ib(a, i)
                }
            }
            );
            for (let i = 0, o = r.length; i < o; i++) {
                let a = r.get(i).context;
                a.index = i,
                a.count = o,
                a.ngForOf = this._ngForOf
            }
            n.forEachIdentityChange(i => {
                let o = r.get(i.currentIndex);
                ib(o, i)
            }
            )
        }
        static ngTemplateContextGuard(n, r) {
            return !0
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(ar),O(ai),O(Vy))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
                ngForOf: "ngForOf",
                ngForTrackBy: "ngForTrackBy",
                ngForTemplate: "ngForTemplate"
            }
        })
    }
    return e
}
)();
function ib(e, t) {
    e.context.$implicit = t.item
}
var tne = ( () => {
    class e {
        _viewContainer;
        _context = new zy;
        _thenTemplateRef = null;
        _elseTemplateRef = null;
        _thenViewRef = null;
        _elseViewRef = null;
        constructor(n, r) {
            this._viewContainer = n,
            this._thenTemplateRef = r
        }
        set ngIf(n) {
            this._context.$implicit = this._context.ngIf = n,
            this._updateView()
        }
        set ngIfThen(n) {
            ob("ngIfThen", n),
            this._thenTemplateRef = n,
            this._thenViewRef = null,
            this._updateView()
        }
        set ngIfElse(n) {
            ob("ngIfElse", n),
            this._elseTemplateRef = n,
            this._elseViewRef = null,
            this._updateView()
        }
        _updateView() {
            this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(),
            this._elseViewRef = null,
            this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(),
            this._thenViewRef = null,
            this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
        }
        static ngIfUseIfTypeGuard;
        static ngTemplateGuard_ngIf;
        static ngTemplateContextGuard(n, r) {
            return !0
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(ar),O(ai))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "ngIf", ""]],
            inputs: {
                ngIf: "ngIf",
                ngIfThen: "ngIfThen",
                ngIfElse: "ngIfElse"
            }
        })
    }
    return e
}
)()
  , zy = class {
    $implicit = null;
    ngIf = null
}
;
function ob(e, t) {
    if (!!!(!t || t.createEmbeddedView))
        throw new Error(`${e} must be a TemplateRef, but received '${dn(t)}'.`)
}
var Af = class {
    _viewContainerRef;
    _templateRef;
    _created = !1;
    constructor(t, n) {
        this._viewContainerRef = t,
        this._templateRef = n
    }
    create() {
        this._created = !0,
        this._viewContainerRef.createEmbeddedView(this._templateRef)
    }
    destroy() {
        this._created = !1,
        this._viewContainerRef.clear()
    }
    enforceState(t) {
        t && !this._created ? this.create() : !t && this._created && this.destroy()
    }
}
  , gb = ( () => {
    class e {
        _defaultViews = [];
        _defaultUsed = !1;
        _caseCount = 0;
        _lastCaseCheckIndex = 0;
        _lastCasesMatched = !1;
        _ngSwitch;
        set ngSwitch(n) {
            this._ngSwitch = n,
            this._caseCount === 0 && this._updateDefaultCases(!0)
        }
        _addCase() {
            return this._caseCount++
        }
        _addDefault(n) {
            this._defaultViews.push(n)
        }
        _matchCase(n) {
            let r = n === this._ngSwitch;
            return this._lastCasesMatched ||= r,
            this._lastCaseCheckIndex++,
            this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched),
            this._lastCaseCheckIndex = 0,
            this._lastCasesMatched = !1),
            r
        }
        _updateDefaultCases(n) {
            if (this._defaultViews.length > 0 && n !== this._defaultUsed) {
                this._defaultUsed = n;
                for (let r of this._defaultViews)
                    r.enforceState(n)
            }
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "ngSwitch", ""]],
            inputs: {
                ngSwitch: "ngSwitch"
            }
        })
    }
    return e
}
)()
  , nne = ( () => {
    class e {
        ngSwitch;
        _view;
        ngSwitchCase;
        constructor(n, r, i) {
            this.ngSwitch = i,
            i._addCase(),
            this._view = new Af(n,r)
        }
        ngDoCheck() {
            this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(ar),O(ai),O(gb, 9))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "ngSwitchCase", ""]],
            inputs: {
                ngSwitchCase: "ngSwitchCase"
            }
        })
    }
    return e
}
)()
  , rne = ( () => {
    class e {
        constructor(n, r, i) {
            i._addDefault(new Af(n,r))
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(ar),O(ai),O(gb, 9))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "ngSwitchDefault", ""]]
        })
    }
    return e
}
)();
var Lf = ( () => {
    class e {
        _ngEl;
        _differs;
        _renderer;
        _ngStyle = null;
        _differ = null;
        constructor(n, r, i) {
            this._ngEl = n,
            this._differs = r,
            this._renderer = i
        }
        set ngStyle(n) {
            this._ngStyle = n,
            !this._differ && n && (this._differ = this._differs.find(n).create())
        }
        ngDoCheck() {
            if (this._differ) {
                let n = this._differ.diff(this._ngStyle);
                n && this._applyChanges(n)
            }
        }
        _setStyle(n, r) {
            let[i,o] = n.split(".")
              , s = i.indexOf("-") === -1 ? void 0 : Mu.DashCase;
            r != null ? this._renderer.setStyle(this._ngEl.nativeElement, i, o ? `${r}${o}` : r, s) : this._renderer.removeStyle(this._ngEl.nativeElement, i, s)
        }
        _applyChanges(n) {
            n.forEachRemovedItem(r => this._setStyle(r.key, null)),
            n.forEachAddedItem(r => this._setStyle(r.key, r.currentValue)),
            n.forEachChangedItem(r => this._setStyle(r.key, r.currentValue))
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(Ne),O(Df),O(yt))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "ngStyle", ""]],
            inputs: {
                ngStyle: "ngStyle"
            }
        })
    }
    return e
}
)()
  , ine = ( () => {
    class e {
        _viewContainerRef;
        _viewRef = null;
        ngTemplateOutletContext = null;
        ngTemplateOutlet = null;
        ngTemplateOutletInjector = null;
        constructor(n) {
            this._viewContainerRef = n
        }
        ngOnChanges(n) {
            if (this._shouldRecreateView(n)) {
                let r = this._viewContainerRef;
                if (this._viewRef && r.remove(r.indexOf(this._viewRef)),
                !this.ngTemplateOutlet) {
                    this._viewRef = null;
                    return
                }
                let i = this._createContextForwardProxy();
                this._viewRef = r.createEmbeddedView(this.ngTemplateOutlet, i, {
                    injector: this.ngTemplateOutletInjector ?? void 0
                })
            }
        }
        _shouldRecreateView(n) {
            return !!n.ngTemplateOutlet || !!n.ngTemplateOutletInjector
        }
        _createContextForwardProxy() {
            return new Proxy({},{
                set: (n, r, i) => this.ngTemplateOutletContext ? Reflect.set(this.ngTemplateOutletContext, r, i) : !1,
                get: (n, r, i) => {
                    if (this.ngTemplateOutletContext)
                        return Reflect.get(this.ngTemplateOutletContext, r, i)
                }
            })
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(ar))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "ngTemplateOutlet", ""]],
            inputs: {
                ngTemplateOutletContext: "ngTemplateOutletContext",
                ngTemplateOutlet: "ngTemplateOutlet",
                ngTemplateOutletInjector: "ngTemplateOutletInjector"
            },
            features: [nn]
        })
    }
    return e
}
)();
function Vf(e, t) {
    return new ce(2100,!1)
}
var Gy = class {
    createSubscription(t, n) {
        return hn( () => t.subscribe({
            next: n,
            error: r => {
                throw r
            }
        }))
    }
    dispose(t) {
        hn( () => t.unsubscribe())
    }
}
  , qy = class {
    createSubscription(t, n) {
        return t.then(n, r => {
            throw r
        }
        )
    }
    dispose(t) {}
}
  , k3 = new qy
  , N3 = new Gy
  , one = ( () => {
    class e {
        _ref;
        _latestValue = null;
        markForCheckOnValueUpdate = !0;
        _subscription = null;
        _obj = null;
        _strategy = null;
        constructor(n) {
            this._ref = n
        }
        ngOnDestroy() {
            this._subscription && this._dispose(),
            this._ref = null
        }
        transform(n) {
            if (!this._obj) {
                if (n)
                    try {
                        this.markForCheckOnValueUpdate = !1,
                        this._subscribe(n)
                    } finally {
                        this.markForCheckOnValueUpdate = !0
                    }
                return this._latestValue
            }
            return n !== this._obj ? (this._dispose(),
            this.transform(n)) : this._latestValue
        }
        _subscribe(n) {
            this._obj = n,
            this._strategy = this._selectStrategy(n),
            this._subscription = this._strategy.createSubscription(n, r => this._updateLatestValue(n, r))
        }
        _selectStrategy(n) {
            if (ca(n))
                return k3;
            if (Oy(n))
                return N3;
            throw Vf(e, n)
        }
        _dispose() {
            this._strategy.dispose(this._subscription),
            this._latestValue = null,
            this._subscription = null,
            this._obj = null
        }
        _updateLatestValue(n, r) {
            n === this._obj && (this._latestValue = r,
            this.markForCheckOnValueUpdate && this._ref?.markForCheck())
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(ro, 16))
        }
        ;
        static \u0275pipe = Re({
            name: "async",
            type: e,
            pure: !1
        })
    }
    return e
}
)();
var O3 = "mediumDate"
  , A3 = new ue("")
  , P3 = new ue("")
  , sne = ( () => {
    class e {
        locale;
        defaultTimezone;
        defaultOptions;
        constructor(n, r, i) {
            this.locale = n,
            this.defaultTimezone = r,
            this.defaultOptions = i
        }
        transform(n, r, i, o) {
            if (n == null || n === "" || n !== n)
                return null;
            try {
                let s = r ?? this.defaultOptions?.dateFormat ?? O3
                  , a = i ?? this.defaultOptions?.timezone ?? this.defaultTimezone ?? void 0;
                return c3(n, s, o || this.locale, a)
            } catch (s) {
                throw Vf(e, s.message)
            }
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(ha, 16),O(A3, 24),O(P3, 24))
        }
        ;
        static \u0275pipe = Re({
            name: "date",
            type: e,
            pure: !0
        })
    }
    return e
}
)();
function F3(e, t) {
    return {
        key: e,
        value: t
    }
}
var ane = ( () => {
    class e {
        differs;
        constructor(n) {
            this.differs = n
        }
        differ;
        keyValues = [];
        compareFn = sb;
        transform(n, r=sb) {
            if (!n || !(n instanceof Map) && typeof n != "object")
                return null;
            this.differ ??= this.differs.find(n).create();
            let i = this.differ.diff(n)
              , o = r !== this.compareFn;
            return i && (this.keyValues = [],
            i.forEachItem(s => {
                this.keyValues.push(F3(s.key, s.currentValue))
            }
            )),
            (i || o) && (r && this.keyValues.sort(r),
            this.compareFn = r),
            this.keyValues
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(Df, 16))
        }
        ;
        static \u0275pipe = Re({
            name: "keyvalue",
            type: e,
            pure: !1
        })
    }
    return e
}
)();
function sb(e, t) {
    let n = e.key
      , r = t.key;
    if (n === r)
        return 0;
    if (n === void 0)
        return 1;
    if (r === void 0)
        return -1;
    if (n === null)
        return 1;
    if (r === null)
        return -1;
    if (typeof n == "string" && typeof r == "string")
        return n < r ? -1 : 1;
    if (typeof n == "number" && typeof r == "number")
        return n - r;
    if (typeof n == "boolean" && typeof r == "boolean")
        return n < r ? -1 : 1;
    let i = String(n)
      , o = String(r);
    return i == o ? 0 : i < o ? -1 : 1
}
var yb = ( () => {
    class e {
        _locale;
        constructor(n) {
            this._locale = n
        }
        transform(n, r, i) {
            if (!vb(n))
                return null;
            i ||= this._locale;
            try {
                let o = _b(n);
                return I3(o, i, r)
            } catch (o) {
                throw Vf(e, o.message)
            }
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(ha, 16))
        }
        ;
        static \u0275pipe = Re({
            name: "number",
            type: e,
            pure: !0
        })
    }
    return e
}
)()
  , une = ( () => {
    class e {
        _locale;
        constructor(n) {
            this._locale = n
        }
        transform(n, r, i) {
            if (!vb(n))
                return null;
            i ||= this._locale;
            try {
                let o = _b(n);
                return b3(o, i, r)
            } catch (o) {
                throw Vf(e, o.message)
            }
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(ha, 16))
        }
        ;
        static \u0275pipe = Re({
            name: "percent",
            type: e,
            pure: !0
        })
    }
    return e
}
)();
function vb(e) {
    return !(e == null || e === "" || e !== e)
}
function _b(e) {
    if (typeof e == "string" && !isNaN(Number(e) - parseFloat(e)))
        return Number(e);
    if (typeof e != "number")
        throw new Error(`${e} is not a number`);
    return e
}
var oo = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275mod = eo({
            type: e
        });
        static \u0275inj = qi({})
    }
    return e
}
)()
  , R3 = "browser"
  , L3 = "server";
function V3(e) {
    return e === R3
}
function j3(e) {
    return e === L3
}
var lne = ( () => {
    class e {
        static \u0275prov = me({
            token: e,
            providedIn: "root",
            factory: () => V3(Y(ef)) ? new Zy(Y(Lu),window) : new Qy
        })
    }
    return e
}
)()
  , Zy = class {
    document;
    window;
    offset = () => [0, 0];
    constructor(t, n) {
        this.document = t,
        this.window = n
    }
    setOffset(t) {
        Array.isArray(t) ? this.offset = () => t : this.offset = t
    }
    getScrollPosition() {
        return [this.window.scrollX, this.window.scrollY]
    }
    scrollToPosition(t) {
        this.window.scrollTo(t[0], t[1])
    }
    scrollToAnchor(t) {
        let n = B3(this.document, t);
        n && (this.scrollToElement(n),
        n.focus())
    }
    setHistoryScrollRestoration(t) {
        this.window.history.scrollRestoration = t
    }
    scrollToElement(t) {
        let n = t.getBoundingClientRect()
          , r = n.left + this.window.pageXOffset
          , i = n.top + this.window.pageYOffset
          , o = this.offset();
        this.window.scrollTo(r - o[0], i - o[1])
    }
}
;
function B3(e, t) {
    let n = e.getElementById(t) || e.getElementsByName(t)[0];
    if (n)
        return n;
    if (typeof e.createTreeWalker == "function" && e.body && typeof e.body.attachShadow == "function") {
        let r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT)
          , i = r.currentNode;
        for (; i; ) {
            let o = i.shadowRoot;
            if (o) {
                let s = o.getElementById(t) || o.querySelector(`[name="${t}"]`);
                if (s)
                    return s
            }
            i = r.nextNode()
        }
    }
    return null
}
var Qy = class {
    setOffset(t) {}
    getScrollPosition() {
        return [0, 0]
    }
    scrollToPosition(t) {}
    scrollToAnchor(t) {}
    setHistoryScrollRestoration(t) {}
}
  , Pf = class {
}
;
var mi = {
    Empty: "",
    Restore: "restore",
    EditColumns: "edit-columns",
    Symbols: "symbols",
    Filter: "filter",
    Save: "save",
    Magnify: "magnify",
    Delete: "delete",
    ChevronDown: "chevron-down",
    ChevronLeft: "chevron-left",
    CircleSmall: "circle-small",
    ChevronRight: "chevron-right",
    SmartAssistantGradient: "smart-assistant-gradient",
    refresh: "refresh",
    Plus: "plus",
    Sandglass: "sandglass",
    Edit: "edit",
    Bell: "bell",
    EyeOff: "eye-off",
    Eye: "eye",
    Copy: "copy",
    Loading: "loading",
    ChevronUp: "chevron-up",
    History: "history",
    Support: "support",
    DotsGrid: "dots-grid",
    CircleMedium: "circle-medium",
    MarketSheet: "market-sheet",
    MarketDepth: "market-depth",
    Account: "account",
    Settle: "settle",
    AccountEdit: "account-edit",
    Lock: "lock",
    Contract: "contract",
    Sync: "sync",
    Device: "device",
    Logout: "logout",
    Fullscreen: "fullscreen",
    CommentSmile: "comment-smile",
    Phone: "phone",
    Telegram: "telegram",
    Instagram: "instagram",
    CommentSearch: "comment-search",
    Note: "note",
    EasyChart: "easychart",
    TseTmc: "tsetmc",
    Pin: "pin",
    ExternalLink: "external-link",
    Send: "send",
    Calendar: "calendar",
    ListSelect: "list-select",
    Setting: "setting",
    MenuVertical: "menu-vertical",
    Link: "link",
    MenuHorizontal: "menu-horizontal",
    SoldSymbols: "sold-symbols",
    Sort: "sort",
    Blank: "blank",
    SettingRestore: "setting-restore",
    Time: "time",
    Star: "star",
    Chrome: "chrome",
    GooglePlay: "google_play",
    Angry: "angry",
    AngryFill: "angry-fill",
    Happy: "happy",
    HappyFill: "happy-fill",
    Neutral: "neutral",
    NeutralFill: "neutral-fill",
    Sad: "sad",
    SadFill: "sad-fill",
    AgentChange: "agent-change",
    CommentLoad: "comment-load",
    Circle: "circle",
    Incognito: "incognito",
    PassRecovery: "pass-recovery",
    FilterOff: "filter-off",
    Drag: "drag",
    ChartBar: "chart-bar",
    ChartLine: "chart-line",
    Candle: "candle",
    SortDescending: "sort-descending",
    SortAscending: "sort-ascending",
    AccountStar: "account-star",
    Bank: "bank",
    TransactionClock: "transaction-clock",
    TransactionError: "transaction-error",
    TransactionClose: "transaction-close",
    TransactionCheck: "transaction-check",
    SymbolDetail: "symbol-detail",
    Calculator: "calculator",
    Codal: "codal",
    BellRing: "bell-ring",
    PhoneRotate: "phone-rotate",
    AccountError: "account-error",
    ConnectionOff: "connection-off",
    TrendingDown: "trending-down",
    CommentError: "comment-error",
    SmartAssistant: "smart-assistant",
    SortUp: "sort-up",
    SortDown: "sort-down",
    Backspace: "backspace",
    KeyboardClose: "keyboard-close",
    Mofidlogo: "mofidlogo",
    LogoDarkLight: "Logo-darkLight",
    GestureTap: "gesture-tap",
    LsConnect: "ls-connect",
    ChartSpider: "chart-spider",
    SymbolCheck: "symbol-check",
    EditOrder: "edit-order",
    Pdf: "pdf",
    CardBlocking: "card-blocking",
    CardManage: "card-manage",
    Attachment: "attachment",
    LockOpen: "lock-open",
    Switch: "switch",
    Basket: "basket",
    Clock: "clock",
    Excel: "excel",
    Check: "check",
    Close: "close",
    Alert: "alert",
    Option: "option",
    Transactions: "transactions",
    CardTransfer: "card-transfer",
    SameIndustry: "same-industry",
    SameIndustryFill: "same-industry-fill",
    CommentLoadFill: "comment-load-fill",
    BasketFill: "basket-fill",
    SymbolDetailFill: "symbol-detail-fill",
    Android: "android",
    Apple: "apple",
    CheckboxEmpty: "check-box-empty",
    PlusBox: "plus-box",
    MinusBox: "minus-box",
    QuestionBox: "question-box",
    TransactionBox: "transaction-box",
    CloseBox: "close-box",
    StopBox: "stop-box",
    AlertBox: "alert-box",
    PlayBox: "play-box",
    MenuBox: "menu-box",
    EnergyExchange: "energy-exchange",
    CheckBoxGroup: "check-box-group",
    CheckBox: "check-box",
    HomeBox: "home-box",
    InfoBox: "info-box",
    MofidBox: "mofid-box",
    Blocked: "blocked",
    Computer: "computer",
    TrendingSOSO: "trending-soso",
    TrendingUp: "trending-up",
    excited: "excited",
    ExcitedFill: "excited-fill",
    FilterOffFill: "filter-off-fill",
    CheckBoxFill: "check-box-fill",
    BellRingFill: "bell-ring-fill",
    PlusBoxFill: "plus-box-fill",
    MinusBoxFill: "minus-box-fill",
    NoteFill: "note-fill",
    EasyFill: "easy-fill",
    LockFill: "lock-fill",
    CaretDownFill: "caret-down-fill",
    CaretUpFill: "caret-up-fill",
    PinFill: "pin-fill",
    InfoBoxFill: "info-box-fill",
    StarCheckFill: "star-check-fill",
    StarFill: "star-fill",
    CalculatorFill: "calculator-fill",
    Metal: "metal",
    Car: "car",
    Chemical: "chemical",
    Cement: "cement",
    Oil: "oil",
    Investment: "investment",
    Extraction: "extraction",
    Building: "building",
    Diamond: "diamond",
    Insurance: "insurance",
    Medicine: "medicine",
    Food: "food",
    Sugar: "sugar",
    Agriculture: "agriculture",
    Transportation: "transportation",
    Contracting: "contracting",
    Tile: "tile",
    Construction: "construction",
    Wheel: "wheel",
    ElectricalDevices: "electrical-devices",
    Electricity: "electricity",
    HomeFacilities: "home-facilities",
    Safe: "safe",
    BankAyandeh: "ayandeh",
    BankEghtesad: "enovin",
    BankIranZamin: "iranzamin",
    BankParsian: "parsian",
    BankPasargad: "pasargad",
    BankPost: "post",
    BankTejarat: "tejarat",
    BankTosee: "tosee",
    BankTaavon: "tosee_taavon",
    BankToseeSaderat: "tosee_saderat",
    BankKhavarmianeh: "khavar_mianeh",
    BankDey: "dey",
    BankResalat: "resalat",
    BankRefah: "refah",
    BankSaman: "saman",
    BankSepah: "sepah",
    BankSarmayeh: "sarmayeh",
    BankSina: "sina",
    BankShahr: "shahr",
    BankSaderat: "saderat",
    BankSanaatMadan: "sanaat_maadan",
    BankMehr: "mehr",
    BankKaarAfarin: "kaarafarin",
    BankKeshavarzi: "keshavarzi",
    BankGardeshgari: "gardeshgari",
    BankMaskan: "maskan",
    BankMellat: "mellat",
    BankMelli: "melli",
    BankMelal: "melal",
    BankNoor: "noor",
    Ap: "asan-pardakht",
    Behpardakht: "behpardakht-mellat",
    Pasargad: "pep-pasargad",
    Saman: "sep-saman",
    Parsian: "pec-parsian",
    Melli: "sadad-melli",
    MofidCard: "mofidcart",
    StarError: "star-error",
    ClockError: "clock-error",
    BasketError: "basket-error",
    PortfolioError: "portfolio-error",
    SaveError: "save-error",
    BellAdd: "bell-add",
    FilterAdd: "filter-add",
    WatchListAdd: "watchlist-add",
    StarAdd: "star-add",
    NoteAdd: "note-add",
    CardAdd: "card-add",
    Marketmap: "marketmap",
    MarketView: "market-view",
    Withdraw: "withdraw",
    SadadMelli: "sadad-melli",
    Both: "both",
    Put: "put",
    Call: "call"
};
function ev(e) {
    e || (Zi(ev),
    e = Y(Pn));
    let t = new pe(n => e.onDestroy(n.next.bind(n)));
    return n => n.pipe(Yc(t))
}
function Ko(e, t) {
    !t?.injector && Zi(Ko);
    let n = t?.injector ?? Y(Cn)
      , r = new ko(1)
      , i = pn( () => {
        let o;
        try {
            o = e()
        } catch (s) {
            hn( () => r.error(s));
            return
        }
        hn( () => r.next(o))
    }
    , {
        injector: n,
        manualCleanup: !0
    });
    return n.get(Pn).onDestroy( () => {
        i.destroy(),
        r.complete()
    }
    ),
    r.asObservable()
}
function Vu(e, t) {
    let n = !t?.manualCleanup;
    n && !t?.injector && Zi(Vu);
    let r = n ? t?.injector?.get(Pn) ?? Y(Pn) : null, i = H3(t?.equal), o;
    t?.requireSync ? o = Fe({
        kind: 0
    }, {
        equal: i
    }) : o = Fe({
        kind: 1,
        value: t?.initialValue
    }, {
        equal: i
    });
    let s = e.subscribe({
        next: a => o.set({
            kind: 1,
            value: a
        }),
        error: a => {
            if (t?.rejectErrors)
                throw a;
            o.set({
                kind: 2,
                error: a
            })
        }
    });
    if (t?.requireSync && o().kind === 0)
        throw new ce(601,!1);
    return r?.onDestroy(s.unsubscribe.bind(s)),
    io( () => {
        let a = o();
        switch (a.kind) {
        case 1:
            return a.value;
        case 2:
            throw a.error;
        case 0:
            throw new ce(601,!1)
        }
    }
    , {
        equal: t?.equal
    })
}
function H3(e=Object.is) {
    return (t, n) => t.kind === 1 && n.kind === 1 && e(t.value, n.value)
}
var Bu = class {
}
  , Bf = class {
}
  , gi = class e {
    headers;
    normalizedNames = new Map;
    lazyInit;
    lazyUpdate = null;
    constructor(t) {
        t ? typeof t == "string" ? this.lazyInit = () => {
            this.headers = new Map,
            t.split(`
`).forEach(n => {
                let r = n.indexOf(":");
                if (r > 0) {
                    let i = n.slice(0, r)
                      , o = n.slice(r + 1).trim();
                    this.addHeaderEntry(i, o)
                }
            }
            )
        }
        : typeof Headers < "u" && t instanceof Headers ? (this.headers = new Map,
        t.forEach( (n, r) => {
            this.addHeaderEntry(r, n)
        }
        )) : this.lazyInit = () => {
            this.headers = new Map,
            Object.entries(t).forEach( ([n,r]) => {
                this.setHeaderEntries(n, r)
            }
            )
        }
        : this.headers = new Map
    }
    has(t) {
        return this.init(),
        this.headers.has(t.toLowerCase())
    }
    get(t) {
        this.init();
        let n = this.headers.get(t.toLowerCase());
        return n && n.length > 0 ? n[0] : null
    }
    keys() {
        return this.init(),
        Array.from(this.normalizedNames.values())
    }
    getAll(t) {
        return this.init(),
        this.headers.get(t.toLowerCase()) || null
    }
    append(t, n) {
        return this.clone({
            name: t,
            value: n,
            op: "a"
        })
    }
    set(t, n) {
        return this.clone({
            name: t,
            value: n,
            op: "s"
        })
    }
    delete(t, n) {
        return this.clone({
            name: t,
            value: n,
            op: "d"
        })
    }
    maybeSetNormalizedName(t, n) {
        this.normalizedNames.has(n) || this.normalizedNames.set(n, t)
    }
    init() {
        this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(),
        this.lazyInit = null,
        this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)),
        this.lazyUpdate = null))
    }
    copyFrom(t) {
        t.init(),
        Array.from(t.headers.keys()).forEach(n => {
            this.headers.set(n, t.headers.get(n)),
            this.normalizedNames.set(n, t.normalizedNames.get(n))
        }
        )
    }
    clone(t) {
        let n = new e;
        return n.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this,
        n.lazyUpdate = (this.lazyUpdate || []).concat([t]),
        n
    }
    applyUpdate(t) {
        let n = t.name.toLowerCase();
        switch (t.op) {
        case "a":
        case "s":
            let r = t.value;
            if (typeof r == "string" && (r = [r]),
            r.length === 0)
                return;
            this.maybeSetNormalizedName(t.name, n);
            let i = (t.op === "a" ? this.headers.get(n) : void 0) || [];
            i.push(...r),
            this.headers.set(n, i);
            break;
        case "d":
            let o = t.value;
            if (!o)
                this.headers.delete(n),
                this.normalizedNames.delete(n);
            else {
                let s = this.headers.get(n);
                if (!s)
                    return;
                s = s.filter(a => o.indexOf(a) === -1),
                s.length === 0 ? (this.headers.delete(n),
                this.normalizedNames.delete(n)) : this.headers.set(n, s)
            }
            break
        }
    }
    addHeaderEntry(t, n) {
        let r = t.toLowerCase();
        this.maybeSetNormalizedName(t, r),
        this.headers.has(r) ? this.headers.get(r).push(n) : this.headers.set(r, [n])
    }
    setHeaderEntries(t, n) {
        let r = (Array.isArray(n) ? n : [n]).map(o => o.toString())
          , i = t.toLowerCase();
        this.headers.set(i, r),
        this.maybeSetNormalizedName(t, i)
    }
    forEach(t) {
        this.init(),
        Array.from(this.normalizedNames.keys()).forEach(n => t(this.normalizedNames.get(n), this.headers.get(n)))
    }
}
;
var nv = class {
    encodeKey(t) {
        return Db(t)
    }
    encodeValue(t) {
        return Db(t)
    }
    decodeKey(t) {
        return decodeURIComponent(t)
    }
    decodeValue(t) {
        return decodeURIComponent(t)
    }
}
;
function U3(e, t) {
    let n = new Map;
    return e.length > 0 && e.replace(/^\?/, "").split("&").forEach(i => {
        let o = i.indexOf("=")
          , [s,a] = o == -1 ? [t.decodeKey(i), ""] : [t.decodeKey(i.slice(0, o)), t.decodeValue(i.slice(o + 1))]
          , l = n.get(s) || [];
        l.push(a),
        n.set(s, l)
    }
    ),
    n
}
var $3 = /%(\d[a-f0-9])/gi
  , Y3 = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/"
};
function Db(e) {
    return encodeURIComponent(e).replace($3, (t, n) => Y3[n] ?? t)
}
function jf(e) {
    return `${e}`
}
var ao = class e {
    map;
    encoder;
    updates = null;
    cloneFrom = null;
    constructor(t={}) {
        if (this.encoder = t.encoder || new nv,
        t.fromString) {
            if (t.fromObject)
                throw new Error("Cannot specify both fromString and fromObject.");
            this.map = U3(t.fromString, this.encoder)
        } else
            t.fromObject ? (this.map = new Map,
            Object.keys(t.fromObject).forEach(n => {
                let r = t.fromObject[n]
                  , i = Array.isArray(r) ? r.map(jf) : [jf(r)];
                this.map.set(n, i)
            }
            )) : this.map = null
    }
    has(t) {
        return this.init(),
        this.map.has(t)
    }
    get(t) {
        this.init();
        let n = this.map.get(t);
        return n ? n[0] : null
    }
    getAll(t) {
        return this.init(),
        this.map.get(t) || null
    }
    keys() {
        return this.init(),
        Array.from(this.map.keys())
    }
    append(t, n) {
        return this.clone({
            param: t,
            value: n,
            op: "a"
        })
    }
    appendAll(t) {
        let n = [];
        return Object.keys(t).forEach(r => {
            let i = t[r];
            Array.isArray(i) ? i.forEach(o => {
                n.push({
                    param: r,
                    value: o,
                    op: "a"
                })
            }
            ) : n.push({
                param: r,
                value: i,
                op: "a"
            })
        }
        ),
        this.clone(n)
    }
    set(t, n) {
        return this.clone({
            param: t,
            value: n,
            op: "s"
        })
    }
    delete(t, n) {
        return this.clone({
            param: t,
            value: n,
            op: "d"
        })
    }
    toString() {
        return this.init(),
        this.keys().map(t => {
            let n = this.encoder.encodeKey(t);
            return this.map.get(t).map(r => n + "=" + this.encoder.encodeValue(r)).join("&")
        }
        ).filter(t => t !== "").join("&")
    }
    clone(t) {
        let n = new e({
            encoder: this.encoder
        });
        return n.cloneFrom = this.cloneFrom || this,
        n.updates = (this.updates || []).concat(t),
        n
    }
    init() {
        this.map === null && (this.map = new Map),
        this.cloneFrom !== null && (this.cloneFrom.init(),
        this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))),
        this.updates.forEach(t => {
            switch (t.op) {
            case "a":
            case "s":
                let n = (t.op === "a" ? this.map.get(t.param) : void 0) || [];
                n.push(jf(t.value)),
                this.map.set(t.param, n);
                break;
            case "d":
                if (t.value !== void 0) {
                    let r = this.map.get(t.param) || []
                      , i = r.indexOf(jf(t.value));
                    i !== -1 && r.splice(i, 1),
                    r.length > 0 ? this.map.set(t.param, r) : this.map.delete(t.param)
                } else {
                    this.map.delete(t.param);
                    break
                }
            }
        }
        ),
        this.cloneFrom = this.updates = null)
    }
}
;
var rv = class {
    map = new Map;
    set(t, n) {
        return this.map.set(t, n),
        this
    }
    get(t) {
        return this.map.has(t) || this.map.set(t, t.defaultValue()),
        this.map.get(t)
    }
    delete(t) {
        return this.map.delete(t),
        this
    }
    has(t) {
        return this.map.has(t)
    }
    keys() {
        return this.map.keys()
    }
}
;
function W3(e) {
    switch (e) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
        return !1;
    default:
        return !0
    }
}
function xb(e) {
    return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer
}
function Cb(e) {
    return typeof Blob < "u" && e instanceof Blob
}
function Mb(e) {
    return typeof FormData < "u" && e instanceof FormData
}
function z3(e) {
    return typeof URLSearchParams < "u" && e instanceof URLSearchParams
}
var ju = class e {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    constructor(t, n, r, i) {
        this.url = n,
        this.method = t.toUpperCase();
        let o;
        if (W3(this.method) || i ? (this.body = r !== void 0 ? r : null,
        o = i) : o = r,
        o && (this.reportProgress = !!o.reportProgress,
        this.withCredentials = !!o.withCredentials,
        o.responseType && (this.responseType = o.responseType),
        o.headers && (this.headers = o.headers),
        o.context && (this.context = o.context),
        o.params && (this.params = o.params),
        this.transferCache = o.transferCache),
        this.headers ??= new gi,
        this.context ??= new rv,
        !this.params)
            this.params = new ao,
            this.urlWithParams = n;
        else {
            let s = this.params.toString();
            if (s.length === 0)
                this.urlWithParams = n;
            else {
                let a = n.indexOf("?")
                  , l = a === -1 ? "?" : a < n.length - 1 ? "&" : "";
                this.urlWithParams = n + l + s
            }
        }
    }
    serializeBody() {
        return this.body === null ? null : typeof this.body == "string" || xb(this.body) || Cb(this.body) || Mb(this.body) || z3(this.body) ? this.body : this.body instanceof ao ? this.body.toString() : typeof this.body == "object" || typeof this.body == "boolean" || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
    }
    detectContentTypeHeader() {
        return this.body === null || Mb(this.body) ? null : Cb(this.body) ? this.body.type || null : xb(this.body) ? null : typeof this.body == "string" ? "text/plain" : this.body instanceof ao ? "application/x-www-form-urlencoded;charset=UTF-8" : typeof this.body == "object" || typeof this.body == "number" || typeof this.body == "boolean" ? "application/json" : null
    }
    clone(t={}) {
        let n = t.method || this.method
          , r = t.url || this.url
          , i = t.responseType || this.responseType
          , o = t.transferCache ?? this.transferCache
          , s = t.body !== void 0 ? t.body : this.body
          , a = t.withCredentials ?? this.withCredentials
          , l = t.reportProgress ?? this.reportProgress
          , c = t.headers || this.headers
          , f = t.params || this.params
          , p = t.context ?? this.context;
        return t.setHeaders !== void 0 && (c = Object.keys(t.setHeaders).reduce( (m, y) => m.set(y, t.setHeaders[y]), c)),
        t.setParams && (f = Object.keys(t.setParams).reduce( (m, y) => m.set(y, t.setParams[y]), f)),
        new e(n,r,s,{
            params: f,
            headers: c,
            context: p,
            reportProgress: l,
            responseType: i,
            withCredentials: a,
            transferCache: o
        })
    }
}
  , uo = function(e) {
    return e[e.Sent = 0] = "Sent",
    e[e.UploadProgress = 1] = "UploadProgress",
    e[e.ResponseHeader = 2] = "ResponseHeader",
    e[e.DownloadProgress = 3] = "DownloadProgress",
    e[e.Response = 4] = "Response",
    e[e.User = 5] = "User",
    e
}(uo || {})
  , Hu = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    constructor(t, n=200, r="OK") {
        this.headers = t.headers || new gi,
        this.status = t.status !== void 0 ? t.status : n,
        this.statusText = t.statusText || r,
        this.url = t.url || null,
        this.ok = this.status >= 200 && this.status < 300
    }
}
  , Hf = class e extends Hu {
    constructor(t={}) {
        super(t)
    }
    type = uo.ResponseHeader;
    clone(t={}) {
        return new e({
            headers: t.headers || this.headers,
            status: t.status !== void 0 ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0
        })
    }
}
  , Uu = class e extends Hu {
    body;
    constructor(t={}) {
        super(t),
        this.body = t.body !== void 0 ? t.body : null
    }
    type = uo.Response;
    clone(t={}) {
        return new e({
            body: t.body !== void 0 ? t.body : this.body,
            headers: t.headers || this.headers,
            status: t.status !== void 0 ? t.status : this.status,
            statusText: t.statusText || this.statusText,
            url: t.url || this.url || void 0
        })
    }
}
  , so = class extends Hu {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(t) {
        super(t, 0, "Unknown Error"),
        this.status >= 200 && this.status < 300 ? this.message = `Http failure during parsing for ${t.url || "(unknown url)"}` : this.message = `Http failure response for ${t.url || "(unknown url)"}: ${t.status} ${t.statusText}`,
        this.error = t.error || null
    }
}
  , Tb = 200
  , G3 = 204;
function tv(e, t) {
    return {
        body: t,
        headers: e.headers,
        context: e.context,
        observe: e.observe,
        params: e.params,
        reportProgress: e.reportProgress,
        responseType: e.responseType,
        withCredentials: e.withCredentials,
        transferCache: e.transferCache
    }
}
var sv = ( () => {
    class e {
        handler;
        constructor(n) {
            this.handler = n
        }
        request(n, r, i={}) {
            let o;
            if (n instanceof ju)
                o = n;
            else {
                let l;
                i.headers instanceof gi ? l = i.headers : l = new gi(i.headers);
                let c;
                i.params && (i.params instanceof ao ? c = i.params : c = new ao({
                    fromObject: i.params
                })),
                o = new ju(n,r,i.body !== void 0 ? i.body : null,{
                    headers: l,
                    context: i.context,
                    params: c,
                    reportProgress: i.reportProgress,
                    responseType: i.responseType || "json",
                    withCredentials: i.withCredentials,
                    transferCache: i.transferCache
                })
            }
            let s = Yn(o).pipe(Bc(l => this.handler.handle(l)));
            if (n instanceof ju || i.observe === "events")
                return s;
            let a = s.pipe(Tr(l => l instanceof Uu));
            switch (i.observe || "body") {
            case "body":
                switch (o.responseType) {
                case "arraybuffer":
                    return a.pipe(ft(l => {
                        if (l.body !== null && !(l.body instanceof ArrayBuffer))
                            throw new Error("Response is not an ArrayBuffer.");
                        return l.body
                    }
                    ));
                case "blob":
                    return a.pipe(ft(l => {
                        if (l.body !== null && !(l.body instanceof Blob))
                            throw new Error("Response is not a Blob.");
                        return l.body
                    }
                    ));
                case "text":
                    return a.pipe(ft(l => {
                        if (l.body !== null && typeof l.body != "string")
                            throw new Error("Response is not a string.");
                        return l.body
                    }
                    ));
                case "json":
                default:
                    return a.pipe(ft(l => l.body))
                }
            case "response":
                return a;
            default:
                throw new Error(`Unreachable: unhandled observe type ${i.observe}}`)
            }
        }
        delete(n, r={}) {
            return this.request("DELETE", n, r)
        }
        get(n, r={}) {
            return this.request("GET", n, r)
        }
        head(n, r={}) {
            return this.request("HEAD", n, r)
        }
        jsonp(n, r) {
            return this.request("JSONP", n, {
                params: new ao().append(r, "JSONP_CALLBACK"),
                observe: "body",
                responseType: "json"
            })
        }
        options(n, r={}) {
            return this.request("OPTIONS", n, r)
        }
        patch(n, r, i={}) {
            return this.request("PATCH", n, tv(i, r))
        }
        post(n, r, i={}) {
            return this.request("POST", n, tv(i, r))
        }
        put(n, r, i={}) {
            return this.request("PUT", n, tv(i, r))
        }
        static \u0275fac = function(r) {
            return new (r || e)(ze(Bu))
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , q3 = /^\)\]\}',?\n/
  , Z3 = "X-Request-URL";
function bb(e) {
    if (e.url)
        return e.url;
    let t = Z3.toLocaleLowerCase();
    return e.headers.get(t)
}
var Q3 = ( () => {
    class e {
        fetchImpl = Y(iv, {
            optional: !0
        })?.fetch ?? ( (...n) => globalThis.fetch(...n));
        ngZone = Y(Nt);
        handle(n) {
            return new pe(r => {
                let i = new AbortController;
                return this.doRequest(n, i.signal, r).then(ov, o => r.error(new so({
                    error: o
                }))),
                () => i.abort()
            }
            )
        }
        doRequest(n, r, i) {
            return Io(this, null, function*() {
                let o = this.createRequestInit(n), s;
                try {
                    let y = this.ngZone.runOutsideAngular( () => this.fetchImpl(n.urlWithParams, Te({
                        signal: r
                    }, o)));
                    X3(y),
                    i.next({
                        type: uo.Sent
                    }),
                    s = yield y
                } catch (y) {
                    i.error(new so({
                        error: y,
                        status: y.status ?? 0,
                        statusText: y.statusText,
                        url: n.urlWithParams,
                        headers: y.headers
                    }));
                    return
                }
                let a = new gi(s.headers)
                  , l = s.statusText
                  , c = bb(s) ?? n.urlWithParams
                  , f = s.status
                  , p = null;
                if (n.reportProgress && i.next(new Hf({
                    headers: a,
                    status: f,
                    statusText: l,
                    url: c
                })),
                s.body) {
                    let y = s.headers.get("content-length"), v = [], w = s.body.getReader(), x = 0, D, I, T = typeof Zone < "u" && Zone.current;
                    yield this.ngZone.runOutsideAngular( () => Io(this, null, function*() {
                        for (; ; ) {
                            let {done: S, value: E} = yield w.read();
                            if (S)
                                break;
                            if (v.push(E),
                            x += E.length,
                            n.reportProgress) {
                                I = n.responseType === "text" ? (I ?? "") + (D ??= new TextDecoder).decode(E, {
                                    stream: !0
                                }) : void 0;
                                let R = () => i.next({
                                    type: uo.DownloadProgress,
                                    total: y ? +y : void 0,
                                    loaded: x,
                                    partialText: I
                                });
                                T ? T.run(R) : R()
                            }
                        }
                    }));
                    let M = this.concatChunks(v, x);
                    try {
                        let S = s.headers.get("Content-Type") ?? "";
                        p = this.parseBody(n, M, S)
                    } catch (S) {
                        i.error(new so({
                            error: S,
                            headers: new gi(s.headers),
                            status: s.status,
                            statusText: s.statusText,
                            url: bb(s) ?? n.urlWithParams
                        }));
                        return
                    }
                }
                f === 0 && (f = p ? Tb : 0),
                f >= 200 && f < 300 ? (i.next(new Uu({
                    body: p,
                    headers: a,
                    status: f,
                    statusText: l,
                    url: c
                })),
                i.complete()) : i.error(new so({
                    error: p,
                    headers: a,
                    status: f,
                    statusText: l,
                    url: c
                }))
            })
        }
        parseBody(n, r, i) {
            switch (n.responseType) {
            case "json":
                let o = new TextDecoder().decode(r).replace(q3, "");
                return o === "" ? null : JSON.parse(o);
            case "text":
                return new TextDecoder().decode(r);
            case "blob":
                return new Blob([r],{
                    type: i
                });
            case "arraybuffer":
                return r.buffer
            }
        }
        createRequestInit(n) {
            let r = {}
              , i = n.withCredentials ? "include" : void 0;
            if (n.headers.forEach( (o, s) => r[o] = s.join(",")),
            n.headers.has("Accept") || (r.Accept = "application/json, text/plain, */*"),
            !n.headers.has("Content-Type")) {
                let o = n.detectContentTypeHeader();
                o !== null && (r["Content-Type"] = o)
            }
            return {
                body: n.serializeBody(),
                method: n.method,
                headers: r,
                credentials: i
            }
        }
        concatChunks(n, r) {
            let i = new Uint8Array(r)
              , o = 0;
            for (let s of n)
                i.set(s, o),
                o += s.length;
            return i
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , iv = class {
}
;
function ov() {}
function X3(e) {
    e.then(ov, ov)
}
function kb(e, t) {
    return t(e)
}
function J3(e, t) {
    return (n, r) => t.intercept(n, {
        handle: i => e(i, r)
    })
}
function K3(e, t, n) {
    return (r, i) => $d(n, () => t(r, o => e(o, i)))
}
var eH = new ue("")
  , av = new ue("")
  , tH = new ue("")
  , Nb = new ue("",{
    providedIn: "root",
    factory: () => !0
});
function nH() {
    let e = null;
    return (t, n) => {
        e === null && (e = (Y(eH, {
            optional: !0
        }) ?? []).reduceRight(J3, kb));
        let r = Y(ci);
        if (Y(Nb)) {
            let o = r.add();
            return e(t, n).pipe(fu( () => r.remove(o)))
        } else
            return e(t, n)
    }
}
var Ib = ( () => {
    class e extends Bu {
        backend;
        injector;
        chain = null;
        pendingTasks = Y(ci);
        contributeToStability = Y(Nb);
        constructor(n, r) {
            super(),
            this.backend = n,
            this.injector = r
        }
        handle(n) {
            if (this.chain === null) {
                let r = Array.from(new Set([...this.injector.get(av), ...this.injector.get(tH, [])]));
                this.chain = r.reduceRight( (i, o) => K3(i, o, this.injector), kb)
            }
            if (this.contributeToStability) {
                let r = this.pendingTasks.add();
                return this.chain(n, i => this.backend.handle(i)).pipe(fu( () => this.pendingTasks.remove(r)))
            } else
                return this.chain(n, r => this.backend.handle(r))
        }
        static \u0275fac = function(r) {
            return new (r || e)(ze(Bf),ze(ir))
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)();
var rH = /^\)\]\}',?\n/;
function iH(e) {
    return "responseURL"in e && e.responseURL ? e.responseURL : /^X-Request-URL:/m.test(e.getAllResponseHeaders()) ? e.getResponseHeader("X-Request-URL") : null
}
var Eb = ( () => {
    class e {
        xhrFactory;
        constructor(n) {
            this.xhrFactory = n
        }
        handle(n) {
            if (n.method === "JSONP")
                throw new ce(-2800,!1);
            let r = this.xhrFactory;
            return (r.\u0275loadImpl ? Ft(r.\u0275loadImpl()) : Yn(null)).pipe(Li( () => new pe(o => {
                let s = r.build();
                if (s.open(n.method, n.urlWithParams),
                n.withCredentials && (s.withCredentials = !0),
                n.headers.forEach( (w, x) => s.setRequestHeader(w, x.join(","))),
                n.headers.has("Accept") || s.setRequestHeader("Accept", "application/json, text/plain, */*"),
                !n.headers.has("Content-Type")) {
                    let w = n.detectContentTypeHeader();
                    w !== null && s.setRequestHeader("Content-Type", w)
                }
                if (n.responseType) {
                    let w = n.responseType.toLowerCase();
                    s.responseType = w !== "json" ? w : "text"
                }
                let a = n.serializeBody()
                  , l = null
                  , c = () => {
                    if (l !== null)
                        return l;
                    let w = s.statusText || "OK"
                      , x = new gi(s.getAllResponseHeaders())
                      , D = iH(s) || n.url;
                    return l = new Hf({
                        headers: x,
                        status: s.status,
                        statusText: w,
                        url: D
                    }),
                    l
                }
                  , f = () => {
                    let {headers: w, status: x, statusText: D, url: I} = c()
                      , T = null;
                    x !== G3 && (T = typeof s.response > "u" ? s.responseText : s.response),
                    x === 0 && (x = T ? Tb : 0);
                    let M = x >= 200 && x < 300;
                    if (n.responseType === "json" && typeof T == "string") {
                        let S = T;
                        T = T.replace(rH, "");
                        try {
                            T = T !== "" ? JSON.parse(T) : null
                        } catch (E) {
                            T = S,
                            M && (M = !1,
                            T = {
                                error: E,
                                text: T
                            })
                        }
                    }
                    M ? (o.next(new Uu({
                        body: T,
                        headers: w,
                        status: x,
                        statusText: D,
                        url: I || void 0
                    })),
                    o.complete()) : o.error(new so({
                        error: T,
                        headers: w,
                        status: x,
                        statusText: D,
                        url: I || void 0
                    }))
                }
                  , p = w => {
                    let {url: x} = c()
                      , D = new so({
                        error: w,
                        status: s.status || 0,
                        statusText: s.statusText || "Unknown Error",
                        url: x || void 0
                    });
                    o.error(D)
                }
                  , m = !1
                  , y = w => {
                    m || (o.next(c()),
                    m = !0);
                    let x = {
                        type: uo.DownloadProgress,
                        loaded: w.loaded
                    };
                    w.lengthComputable && (x.total = w.total),
                    n.responseType === "text" && s.responseText && (x.partialText = s.responseText),
                    o.next(x)
                }
                  , v = w => {
                    let x = {
                        type: uo.UploadProgress,
                        loaded: w.loaded
                    };
                    w.lengthComputable && (x.total = w.total),
                    o.next(x)
                }
                ;
                return s.addEventListener("load", f),
                s.addEventListener("error", p),
                s.addEventListener("timeout", p),
                s.addEventListener("abort", p),
                n.reportProgress && (s.addEventListener("progress", y),
                a !== null && s.upload && s.upload.addEventListener("progress", v)),
                s.send(a),
                o.next({
                    type: uo.Sent
                }),
                () => {
                    s.removeEventListener("error", p),
                    s.removeEventListener("abort", p),
                    s.removeEventListener("load", f),
                    s.removeEventListener("timeout", p),
                    n.reportProgress && (s.removeEventListener("progress", y),
                    a !== null && s.upload && s.upload.removeEventListener("progress", v)),
                    s.readyState !== s.DONE && s.abort()
                }
            }
            )))
        }
        static \u0275fac = function(r) {
            return new (r || e)(ze(Pf))
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , Ob = new ue("")
  , oH = "XSRF-TOKEN"
  , sH = new ue("",{
    providedIn: "root",
    factory: () => oH
})
  , aH = "X-XSRF-TOKEN"
  , uH = new ue("",{
    providedIn: "root",
    factory: () => aH
})
  , Uf = class {
}
  , lH = ( () => {
    class e {
        doc;
        platform;
        cookieName;
        lastCookieString = "";
        lastToken = null;
        parseCount = 0;
        constructor(n, r, i) {
            this.doc = n,
            this.platform = r,
            this.cookieName = i
        }
        getToken() {
            if (this.platform === "server")
                return null;
            let n = this.doc.cookie || "";
            return n !== this.lastCookieString && (this.parseCount++,
            this.lastToken = mb(n, this.cookieName),
            this.lastCookieString = n),
            this.lastToken
        }
        static \u0275fac = function(r) {
            return new (r || e)(ze(Lu),ze(ef),ze(sH))
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)();
function cH(e, t) {
    let n = e.url.toLowerCase();
    if (!Y(Ob) || e.method === "GET" || e.method === "HEAD" || n.startsWith("http://") || n.startsWith("https://"))
        return t(e);
    let r = Y(Uf).getToken()
      , i = Y(uH);
    return r != null && !e.headers.has(i) && (e = e.clone({
        headers: e.headers.set(i, r)
    })),
    t(e)
}
var Ab = function(e) {
    return e[e.Interceptors = 0] = "Interceptors",
    e[e.LegacyInterceptors = 1] = "LegacyInterceptors",
    e[e.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration",
    e[e.NoXsrfProtection = 3] = "NoXsrfProtection",
    e[e.JsonpSupport = 4] = "JsonpSupport",
    e[e.RequestsMadeViaParent = 5] = "RequestsMadeViaParent",
    e[e.Fetch = 6] = "Fetch",
    e
}(Ab || {});
function dH(e, t) {
    return {
        \u0275kind: e,
        \u0275providers: t
    }
}
function Pne(...e) {
    let t = [sv, Eb, Ib, {
        provide: Bu,
        useExisting: Ib
    }, {
        provide: Bf,
        useFactory: () => Y(Q3, {
            optional: !0
        }) ?? Y(Eb)
    }, {
        provide: av,
        useValue: cH,
        multi: !0
    }, {
        provide: Ob,
        useValue: !0
    }, {
        provide: Uf,
        useClass: lH
    }];
    for (let n of e)
        t.push(...n.\u0275providers);
    return Gg(t)
}
var Sb = new ue("");
function Fne() {
    return dH(Ab.LegacyInterceptors, [{
        provide: Sb,
        useFactory: nH
    }, {
        provide: av,
        useExisting: Sb,
        multi: !0
    }])
}
var Pb = ( () => {
    let t = class t {
        get(r) {
            return this.images.get(r)
        }
        set(r, i) {
            this.images.set(r, i)
        }
        fetchSvg(r, i) {
            if (!i)
                return Yn(this.defaultSvg);
            let o = this.get(i);
            if (o)
                return Yn(o);
            let s = `/assets/images/${r}${i}.svg`;
            return Ft(fetch(s).then(a => a.text())).pipe(cm({
                count: 1,
                delay: 2e3
            }), cu( () => Yn(this.defaultSvg)), kr(a => this.set(i, a)))
        }
        getAllSvg() {
            return Io(this, null, function*() {
                let r = [];
                for (let i in mi)
                    r.push(this.fetchSvg("easyIconFamily/", mi[i]));
                un(3e3).pipe(Li( () => r), Sr()).subscribe()
            })
        }
        constructor() {
            this.http = Y(sv),
            this.images = new Map,
            this.defaultSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6865 4.05282C16.0445 4.00038 15.2283 3.99999 14.1 4L9.89996 4.00003C8.77161 4.00004 7.95542 4.00043 7.3135 4.05289C6.67742 4.10486 6.2566 4.20545 5.91102 4.38153C5.73248 4.4725 5.563 4.57816 5.4041 4.69698L12 11.2929L18.5959 4.69694C18.437 4.5781 18.2675 4.47243 18.089 4.38145C17.7434 4.20537 17.3225 4.10478 16.6865 4.05282ZM11.2929 12L4.69698 5.40408C4.57814 5.56301 4.47246 5.73252 4.38147 5.91109C4.20539 6.25668 4.10481 6.67749 4.05284 7.31357C4.00039 7.95549 4 8.77168 4 9.90003V14.1C4 15.2284 4.00039 16.0446 4.05284 16.6865C4.10481 17.3226 4.20539 17.7434 4.38148 18.089C4.47245 18.2676 4.57811 18.437 4.69693 18.596L11.2929 12ZM12 12.7071L18.5959 19.303C18.437 19.4219 18.2675 19.5275 18.089 19.6185C17.7434 19.7946 17.3226 19.8952 16.6865 19.9471C16.0446 19.9996 15.2284 20 14.1 20L9.90004 20C8.77168 20 7.95548 19.9997 7.31355 19.9472C6.67746 19.8952 6.25664 19.7947 5.91105 19.6186C5.73248 19.5276 5.56296 19.4219 5.40403 19.3031L12 12.7071ZM19.303 18.5959L12.7071 12L19.303 5.40405C19.4219 5.56296 19.5275 5.73246 19.6185 5.91101C19.7946 6.2566 19.8952 6.67742 19.9472 7.31351C19.9996 7.95544 20 8.77164 20 9.9V14.1C20 15.2283 19.9996 16.0445 19.9472 16.6865C19.8952 17.3225 19.7946 17.7434 19.6185 18.0889C19.5275 18.2675 19.4219 18.437 19.303 18.5959ZM16.7679 3.05614C17.4658 3.11316 18.0329 3.23056 18.5429 3.49044C19.3897 3.92187 20.0781 4.61028 20.5095 5.45702C20.7694 5.96708 20.8868 6.53414 20.9438 7.23208C21 7.91946 21 8.77637 21 9.87731V9.87734V9.87736V9.9V14.1V14.1226V14.1227V14.1227C21 15.2236 21 16.0805 20.9438 16.7679C20.8868 17.4658 20.7694 18.0329 20.5095 18.5429C20.0781 19.3897 19.3897 20.0781 18.543 20.5095C18.0329 20.7694 17.4659 20.8868 16.7679 20.9438C16.0806 21 15.2237 21 14.1228 21H14.1227H14.1227H14.1L9.90005 21H9.87742H9.8773C8.77639 21 7.91949 21 7.23212 20.9439C6.53419 20.8869 5.96712 20.7695 5.45706 20.5096C4.61033 20.0782 3.92191 19.3897 3.49048 18.543C3.23059 18.033 3.11318 17.4659 3.05616 16.768C3 16.0806 3 15.2236 3 14.1227V14.1227V14.1V9.90003V9.8774V9.87739C3 8.77645 3 7.91952 3.05616 7.23214C3.11318 6.53421 3.23058 5.96715 3.49047 5.4571C3.92189 4.61037 4.6103 3.92196 5.45702 3.49053C5.96708 3.23064 6.53414 3.11323 7.23206 3.05621C7.91945 3.00004 8.77637 3.00004 9.87732 3.00003L9.89995 3.00003L14.1 3L14.1226 3C15.2235 2.99999 16.0805 2.99998 16.7679 3.05614Z" fill="currentColor"/>
	</svg>`,
            this.getAllSvg()
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275prov = me({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
var lo = ( () => {
    let t = class t {
        constructor(r, i) {
            this.el = r,
            this.svgIcon = i,
            this.width = F(),
            this.height = F(),
            this.iconName = F.required(),
            this.iconFolder = F("easyIconFamily/"),
            this.iconName$ = Ko(this.iconName),
            this.prepareSvg = o => {
                if (!o)
                    return;
                let s = this.width() ? "width=" + this.width() : ""
                  , a = this.height() ? "height=" + this.height() : "";
                return o = o.replace("<svg", `<svg  ${s} ${a} `),
                o
            }
            ,
            Vu(this.iconName$.pipe(Li( () => this.svgIcon.fetchSvg(this.iconFolder(), this.iconName())), ft(this.prepareSvg), kr(o => this.el.nativeElement.innerHTML = o)))
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(O(Ne),O(Pb))
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["svg-icon"]],
        hostAttrs: [1, "lh-1"],
        inputs: {
            width: [1, "width"],
            height: [1, "height"],
            iconName: [1, "iconName"],
            iconFolder: [1, "iconFolder"]
        },
        decls: 0,
        vars: 0,
        template: function(i, o) {},
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
function hH(e, t) {
    if (e & 1) {
        let n = rn();
        B(0, "div", 3),
        re("click", function() {
            let i = fe(n)
              , o = i.$implicit
              , s = i.$index
              , a = q();
            return he(a.clearSpecificFilter(s, o))
        }),
        B(1, "span"),
        Ke(2),
        B(3, "b"),
        Ke(4),
        ne()(),
        Ue(5, "svg-icon", 4),
        ne()
    }
    if (e & 2) {
        let n = t.$implicit
          , r = q();
        se(2),
        no("", n.filterTitle, ": "),
        se(2),
        Rt(n.valueTitle),
        se(),
        He("iconName", r.icons.Close)
    }
}
function pH(e, t) {
    if (e & 1) {
        let n = rn();
        B(0, "span", 5),
        re("click", function() {
            fe(n);
            let i = q();
            return he(i.clearAllFilters())
        }),
        Ue(1, "svg-icon", 6),
        Ke(2, " \u062D\u0630\u0641 \u0641\u06CC\u0644\u062A\u0631 "),
        ne()
    }
    if (e & 2) {
        let n = q();
        se(),
        He("iconName", n.icons.Delete)
    }
}
var nre = ( () => {
    let t = class t {
        constructor() {
            this.icons = mi,
            this.removeFilter = Au(),
            this.clearAllFIlters = Au(),
            this.filterLabels = F([])
        }
        clearSpecificFilter(r, i) {
            this.removeFilter.emit(We(Te({}, i), {
                index: r
            }))
        }
        clearAllFilters() {
            this.clearAllFIlters.emit()
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["filter-labels"]],
        inputs: {
            filterLabels: [1, "filterLabels"]
        },
        outputs: {
            removeFilter: "removeFilter",
            clearAllFIlters: "clearAllFIlters"
        },
        decls: 4,
        vars: 1,
        consts: [[1, "d-flex", "flex-wrap", "align-items-center", "px-3", "px-lg-0"], [1, "bg-principal", "bg-principal-hover", "rounded-sm", "p-1", "me-1", "my-1", "small", "cup"], [1, "text-danger", "ms-1", "my-1", "cup"], [1, "bg-principal", "bg-principal-hover", "rounded-sm", "p-1", "me-1", "my-1", "small", "cup", 3, "click"], ["width", "12", "height", "12", 1, "opacity-3", 3, "iconName"], [1, "text-danger", "ms-1", "my-1", "cup", 3, "click"], ["width", "20", "height", "20", 1, "line-height-18px", 3, "iconName"]],
        template: function(i, o) {
            i & 1 && (B(0, "div", 0),
            jr(1, hH, 6, 3, "div", 1, Vr),
            Ot(3, pH, 3, 1, "span", 2),
            ne()),
            i & 2 && (se(),
            Br(o.filterLabels()),
            se(2),
            mt(o.filterLabels.length > 0 ? 3 : -1))
        },
        dependencies: [oo, lo],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var mH = (e, t, n) => ({
    "bg-warning": e,
    "bg-success": t,
    "bg-danger": n
})
  , lre = ( () => {
    let t = class t {
        constructor() {
            this.stateId = F(),
            this.stateCode = F(),
            this.stateColor = F("")
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["symbol-state"]],
        inputs: {
            stateId: [1, "stateId"],
            stateCode: [1, "stateCode"],
            stateColor: [1, "stateColor"]
        },
        decls: 1,
        vars: 5,
        consts: [[1, "me-1", 2, "display", "inline-block", "width", "10px", "height", "10px", "border-radius", "3px", "font-size", "0", "line-height", "1", 3, "ngClass"]],
        template: function(i, o) {
            i & 1 && Ue(0, "span", 0),
            i & 2 && He("ngClass", vf(1, mH, o.stateColor() === "yellow" || o.stateId() === "2" || o.stateId() === "3" || o.stateId() === "4", o.stateColor() === "green" || o.stateId() === "1", o.stateColor() === "red" || o.stateId() === "0" || o.stateId() === "5" || o.stateId() === "6" || o.stateId() === "7" || o.stateId() === "8"))
        },
        dependencies: [Rf],
        styles: [`[_nghost-%COMP%]{font-size:0;line-height:1;display:inline-block}
/*# sourceMappingURL=symbol-state.component-A6MSVYMC.css.map */`],
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var Yb = ( () => {
    class e {
        _renderer;
        _elementRef;
        onChange = n => {}
        ;
        onTouched = () => {}
        ;
        constructor(n, r) {
            this._renderer = n,
            this._elementRef = r
        }
        setProperty(n, r) {
            this._renderer.setProperty(this._elementRef.nativeElement, n, r)
        }
        registerOnTouched(n) {
            this.onTouched = n
        }
        registerOnChange(n) {
            this.onChange = n
        }
        setDisabledState(n) {
            this.setProperty("disabled", n)
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(yt),O(Ne))
        }
        ;
        static \u0275dir = ee({
            type: e
        })
    }
    return e
}
)()
  , es = ( () => {
    class e extends Yb {
        static \u0275fac = ( () => {
            let n;
            return function(i) {
                return (n || (n = An(e)))(i || e)
            }
        }
        )();
        static \u0275dir = ee({
            type: e,
            features: [pt]
        })
    }
    return e
}
)()
  , Ur = new ue("")
  , gH = {
    provide: Ur,
    useExisting: Ct( () => yH),
    multi: !0
}
  , yH = ( () => {
    class e extends es {
        writeValue(n) {
            this.setProperty("checked", n)
        }
        static \u0275fac = ( () => {
            let n;
            return function(i) {
                return (n || (n = An(e)))(i || e)
            }
        }
        )();
        static \u0275dir = ee({
            type: e,
            selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
            hostBindings: function(r, i) {
                r & 1 && re("change", function(s) {
                    return i.onChange(s.target.checked)
                })("blur", function() {
                    return i.onTouched()
                })
            },
            standalone: !1,
            features: [Lt([gH]), pt]
        })
    }
    return e
}
)()
  , vH = {
    provide: Ur,
    useExisting: Ct( () => Jf),
    multi: !0
};
function _H() {
    let e = pa() ? pa().getUserAgent() : "";
    return /android (\d+)/.test(e.toLowerCase())
}
var wH = new ue("")
  , Jf = ( () => {
    class e extends Yb {
        _compositionMode;
        _composing = !1;
        constructor(n, r, i) {
            super(n, r),
            this._compositionMode = i,
            this._compositionMode == null && (this._compositionMode = !_H())
        }
        writeValue(n) {
            let r = n ?? "";
            this.setProperty("value", r)
        }
        _handleInput(n) {
            (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(n)
        }
        _compositionStart() {
            this._composing = !0
        }
        _compositionEnd(n) {
            this._composing = !1,
            this._compositionMode && this.onChange(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(yt),O(Ne),O(wH, 8))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
            hostBindings: function(r, i) {
                r & 1 && re("input", function(s) {
                    return i._handleInput(s.target.value)
                })("blur", function() {
                    return i.onTouched()
                })("compositionstart", function() {
                    return i._compositionStart()
                })("compositionend", function(s) {
                    return i._compositionEnd(s.target.value)
                })
            },
            standalone: !1,
            features: [Lt([vH]), pt]
        })
    }
    return e
}
)();
function co(e) {
    return e == null || (typeof e == "string" || Array.isArray(e)) && e.length === 0
}
function Wb(e) {
    return e != null && typeof e.length == "number"
}
var $r = new ue("")
  , ts = new ue("")
  , DH = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  , Fb = class {
    static min(t) {
        return xH(t)
    }
    static max(t) {
        return CH(t)
    }
    static required(t) {
        return zb(t)
    }
    static requiredTrue(t) {
        return MH(t)
    }
    static email(t) {
        return bH(t)
    }
    static minLength(t) {
        return Gb(t)
    }
    static maxLength(t) {
        return qb(t)
    }
    static pattern(t) {
        return IH(t)
    }
    static nullValidator(t) {
        return Yf(t)
    }
    static compose(t) {
        return e1(t)
    }
    static composeAsync(t) {
        return t1(t)
    }
}
;
function xH(e) {
    return t => {
        if (co(t.value) || co(e))
            return null;
        let n = parseFloat(t.value);
        return !isNaN(n) && n < e ? {
            min: {
                min: e,
                actual: t.value
            }
        } : null
    }
}
function CH(e) {
    return t => {
        if (co(t.value) || co(e))
            return null;
        let n = parseFloat(t.value);
        return !isNaN(n) && n > e ? {
            max: {
                max: e,
                actual: t.value
            }
        } : null
    }
}
function zb(e) {
    return co(e.value) ? {
        required: !0
    } : null
}
function MH(e) {
    return e.value === !0 ? null : {
        required: !0
    }
}
function bH(e) {
    return co(e.value) || DH.test(e.value) ? null : {
        email: !0
    }
}
function Gb(e) {
    return t => co(t.value) || !Wb(t.value) ? null : t.value.length < e ? {
        minlength: {
            requiredLength: e,
            actualLength: t.value.length
        }
    } : null
}
function qb(e) {
    return t => Wb(t.value) && t.value.length > e ? {
        maxlength: {
            requiredLength: e,
            actualLength: t.value.length
        }
    } : null
}
function IH(e) {
    if (!e)
        return Yf;
    let t, n;
    return typeof e == "string" ? (n = "",
    e.charAt(0) !== "^" && (n += "^"),
    n += e,
    e.charAt(e.length - 1) !== "$" && (n += "$"),
    t = new RegExp(n)) : (n = e.toString(),
    t = e),
    r => {
        if (co(r.value))
            return null;
        let i = r.value;
        return t.test(i) ? null : {
            pattern: {
                requiredPattern: n,
                actualValue: i
            }
        }
    }
}
function Yf(e) {
    return null
}
function Zb(e) {
    return e != null
}
function Qb(e) {
    return ca(e) ? Ft(e) : e
}
function Xb(e) {
    let t = {};
    return e.forEach(n => {
        t = n != null ? Te(Te({}, t), n) : t
    }
    ),
    Object.keys(t).length === 0 ? null : t
}
function Jb(e, t) {
    return t.map(n => n(e))
}
function EH(e) {
    return !e.validate
}
function Kb(e) {
    return e.map(t => EH(t) ? t : n => t.validate(n))
}
function e1(e) {
    if (!e)
        return null;
    let t = e.filter(Zb);
    return t.length == 0 ? null : function(n) {
        return Xb(Jb(n, t))
    }
}
function hv(e) {
    return e != null ? e1(Kb(e)) : null
}
function t1(e) {
    if (!e)
        return null;
    let t = e.filter(Zb);
    return t.length == 0 ? null : function(n) {
        let r = Jb(n, t).map(Qb);
        return nm(r).pipe(ft(Xb))
    }
}
function pv(e) {
    return e != null ? t1(Kb(e)) : null
}
function Rb(e, t) {
    return e === null ? [t] : Array.isArray(e) ? [...e, t] : [e, t]
}
function n1(e) {
    return e._rawValidators
}
function r1(e) {
    return e._rawAsyncValidators
}
function uv(e) {
    return e ? Array.isArray(e) ? e : [e] : []
}
function Wf(e, t) {
    return Array.isArray(e) ? e.includes(t) : e === t
}
function Lb(e, t) {
    let n = uv(t);
    return uv(e).forEach(i => {
        Wf(n, i) || n.push(i)
    }
    ),
    n
}
function Vb(e, t) {
    return uv(t).filter(n => !Wf(e, n))
}
var zf = class {
    get value() {
        return this.control ? this.control.value : null
    }
    get valid() {
        return this.control ? this.control.valid : null
    }
    get invalid() {
        return this.control ? this.control.invalid : null
    }
    get pending() {
        return this.control ? this.control.pending : null
    }
    get disabled() {
        return this.control ? this.control.disabled : null
    }
    get enabled() {
        return this.control ? this.control.enabled : null
    }
    get errors() {
        return this.control ? this.control.errors : null
    }
    get pristine() {
        return this.control ? this.control.pristine : null
    }
    get dirty() {
        return this.control ? this.control.dirty : null
    }
    get touched() {
        return this.control ? this.control.touched : null
    }
    get status() {
        return this.control ? this.control.status : null
    }
    get untouched() {
        return this.control ? this.control.untouched : null
    }
    get statusChanges() {
        return this.control ? this.control.statusChanges : null
    }
    get valueChanges() {
        return this.control ? this.control.valueChanges : null
    }
    get path() {
        return null
    }
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators = [];
    _rawAsyncValidators = [];
    _setValidators(t) {
        this._rawValidators = t || [],
        this._composedValidatorFn = hv(this._rawValidators)
    }
    _setAsyncValidators(t) {
        this._rawAsyncValidators = t || [],
        this._composedAsyncValidatorFn = pv(this._rawAsyncValidators)
    }
    get validator() {
        return this._composedValidatorFn || null
    }
    get asyncValidator() {
        return this._composedAsyncValidatorFn || null
    }
    _onDestroyCallbacks = [];
    _registerOnDestroy(t) {
        this._onDestroyCallbacks.push(t)
    }
    _invokeOnDestroyCallbacks() {
        this._onDestroyCallbacks.forEach(t => t()),
        this._onDestroyCallbacks = []
    }
    reset(t=void 0) {
        this.control && this.control.reset(t)
    }
    hasError(t, n) {
        return this.control ? this.control.hasError(t, n) : !1
    }
    getError(t, n) {
        return this.control ? this.control.getError(t, n) : null
    }
}
  , gn = class extends zf {
    name;
    get formDirective() {
        return null
    }
    get path() {
        return null
    }
}
  , Hr = class extends zf {
    _parent = null;
    name = null;
    valueAccessor = null
}
  , Gf = class {
    _cd;
    constructor(t) {
        this._cd = t
    }
    get isTouched() {
        return this._cd?.control?._touched?.(),
        !!this._cd?.control?.touched
    }
    get isUntouched() {
        return !!this._cd?.control?.untouched
    }
    get isPristine() {
        return this._cd?.control?._pristine?.(),
        !!this._cd?.control?.pristine
    }
    get isDirty() {
        return !!this._cd?.control?.dirty
    }
    get isValid() {
        return this._cd?.control?._status?.(),
        !!this._cd?.control?.valid
    }
    get isInvalid() {
        return !!this._cd?.control?.invalid
    }
    get isPending() {
        return !!this._cd?.control?.pending
    }
    get isSubmitted() {
        return this._cd?._submitted?.(),
        !!this._cd?.submitted
    }
}
  , SH = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending"
}
  , Ire = We(Te({}, SH), {
    "[class.ng-submitted]": "isSubmitted"
})
  , i1 = ( () => {
    class e extends Gf {
        constructor(n) {
            super(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(Hr, 2))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
            hostVars: 14,
            hostBindings: function(r, i) {
                r & 2 && ur("ng-untouched", i.isUntouched)("ng-touched", i.isTouched)("ng-pristine", i.isPristine)("ng-dirty", i.isDirty)("ng-valid", i.isValid)("ng-invalid", i.isInvalid)("ng-pending", i.isPending)
            },
            standalone: !1,
            features: [pt]
        })
    }
    return e
}
)()
  , Ere = ( () => {
    class e extends Gf {
        constructor(n) {
            super(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(gn, 10))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
            hostVars: 16,
            hostBindings: function(r, i) {
                r & 2 && ur("ng-untouched", i.isUntouched)("ng-touched", i.isTouched)("ng-pristine", i.isPristine)("ng-dirty", i.isDirty)("ng-valid", i.isValid)("ng-invalid", i.isInvalid)("ng-pending", i.isPending)("ng-submitted", i.isSubmitted)
            },
            standalone: !1,
            features: [pt]
        })
    }
    return e
}
)();
var $u = "VALID"
  , $f = "INVALID"
  , ma = "PENDING"
  , Yu = "DISABLED"
  , fo = class {
}
  , qf = class extends fo {
    value;
    source;
    constructor(t, n) {
        super(),
        this.value = t,
        this.source = n
    }
}
  , zu = class extends fo {
    pristine;
    source;
    constructor(t, n) {
        super(),
        this.pristine = t,
        this.source = n
    }
}
  , Gu = class extends fo {
    touched;
    source;
    constructor(t, n) {
        super(),
        this.touched = t,
        this.source = n
    }
}
  , ga = class extends fo {
    status;
    source;
    constructor(t, n) {
        super(),
        this.status = t,
        this.source = n
    }
}
  , lv = class extends fo {
    source;
    constructor(t) {
        super(),
        this.source = t
    }
}
  , cv = class extends fo {
    source;
    constructor(t) {
        super(),
        this.source = t
    }
}
;
function mv(e) {
    return (Kf(e) ? e.validators : e) || null
}
function TH(e) {
    return Array.isArray(e) ? hv(e) : e || null
}
function gv(e, t) {
    return (Kf(t) ? t.asyncValidators : e) || null
}
function kH(e) {
    return Array.isArray(e) ? pv(e) : e || null
}
function Kf(e) {
    return e != null && !Array.isArray(e) && typeof e == "object"
}
function o1(e, t, n) {
    let r = e.controls;
    if (!(t ? Object.keys(r) : r).length)
        throw new ce(1e3,"");
    if (!r[n])
        throw new ce(1001,"")
}
function s1(e, t, n) {
    e._forEachChild( (r, i) => {
        if (n[i] === void 0)
            throw new ce(1002,"")
    }
    )
}
var ya = class {
    _pendingDirty = !1;
    _hasOwnPendingAsyncValidator = null;
    _pendingTouched = !1;
    _onCollectionChange = () => {}
    ;
    _updateOn;
    _parent = null;
    _asyncValidationSubscription;
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators;
    _rawAsyncValidators;
    value;
    constructor(t, n) {
        this._assignValidators(t),
        this._assignAsyncValidators(n)
    }
    get validator() {
        return this._composedValidatorFn
    }
    set validator(t) {
        this._rawValidators = this._composedValidatorFn = t
    }
    get asyncValidator() {
        return this._composedAsyncValidatorFn
    }
    set asyncValidator(t) {
        this._rawAsyncValidators = this._composedAsyncValidatorFn = t
    }
    get parent() {
        return this._parent
    }
    get status() {
        return hn(this.statusReactive)
    }
    set status(t) {
        hn( () => this.statusReactive.set(t))
    }
    _status = io( () => this.statusReactive());
    statusReactive = Fe(void 0);
    get valid() {
        return this.status === $u
    }
    get invalid() {
        return this.status === $f
    }
    get pending() {
        return this.status == ma
    }
    get disabled() {
        return this.status === Yu
    }
    get enabled() {
        return this.status !== Yu
    }
    errors;
    get pristine() {
        return hn(this.pristineReactive)
    }
    set pristine(t) {
        hn( () => this.pristineReactive.set(t))
    }
    _pristine = io( () => this.pristineReactive());
    pristineReactive = Fe(!0);
    get dirty() {
        return !this.pristine
    }
    get touched() {
        return hn(this.touchedReactive)
    }
    set touched(t) {
        hn( () => this.touchedReactive.set(t))
    }
    _touched = io( () => this.touchedReactive());
    touchedReactive = Fe(!1);
    get untouched() {
        return !this.touched
    }
    _events = new st;
    events = this._events.asObservable();
    valueChanges;
    statusChanges;
    get updateOn() {
        return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
    }
    setValidators(t) {
        this._assignValidators(t)
    }
    setAsyncValidators(t) {
        this._assignAsyncValidators(t)
    }
    addValidators(t) {
        this.setValidators(Lb(t, this._rawValidators))
    }
    addAsyncValidators(t) {
        this.setAsyncValidators(Lb(t, this._rawAsyncValidators))
    }
    removeValidators(t) {
        this.setValidators(Vb(t, this._rawValidators))
    }
    removeAsyncValidators(t) {
        this.setAsyncValidators(Vb(t, this._rawAsyncValidators))
    }
    hasValidator(t) {
        return Wf(this._rawValidators, t)
    }
    hasAsyncValidator(t) {
        return Wf(this._rawAsyncValidators, t)
    }
    clearValidators() {
        this.validator = null
    }
    clearAsyncValidators() {
        this.asyncValidator = null
    }
    markAsTouched(t={}) {
        let n = this.touched === !1;
        this.touched = !0;
        let r = t.sourceControl ?? this;
        this._parent && !t.onlySelf && this._parent.markAsTouched(We(Te({}, t), {
            sourceControl: r
        })),
        n && t.emitEvent !== !1 && this._events.next(new Gu(!0,r))
    }
    markAllAsTouched(t={}) {
        this.markAsTouched({
            onlySelf: !0,
            emitEvent: t.emitEvent,
            sourceControl: this
        }),
        this._forEachChild(n => n.markAllAsTouched(t))
    }
    markAsUntouched(t={}) {
        let n = this.touched === !0;
        this.touched = !1,
        this._pendingTouched = !1;
        let r = t.sourceControl ?? this;
        this._forEachChild(i => {
            i.markAsUntouched({
                onlySelf: !0,
                emitEvent: t.emitEvent,
                sourceControl: r
            })
        }
        ),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, r),
        n && t.emitEvent !== !1 && this._events.next(new Gu(!1,r))
    }
    markAsDirty(t={}) {
        let n = this.pristine === !0;
        this.pristine = !1;
        let r = t.sourceControl ?? this;
        this._parent && !t.onlySelf && this._parent.markAsDirty(We(Te({}, t), {
            sourceControl: r
        })),
        n && t.emitEvent !== !1 && this._events.next(new zu(!1,r))
    }
    markAsPristine(t={}) {
        let n = this.pristine === !1;
        this.pristine = !0,
        this._pendingDirty = !1;
        let r = t.sourceControl ?? this;
        this._forEachChild(i => {
            i.markAsPristine({
                onlySelf: !0,
                emitEvent: t.emitEvent
            })
        }
        ),
        this._parent && !t.onlySelf && this._parent._updatePristine(t, r),
        n && t.emitEvent !== !1 && this._events.next(new zu(!0,r))
    }
    markAsPending(t={}) {
        this.status = ma;
        let n = t.sourceControl ?? this;
        t.emitEvent !== !1 && (this._events.next(new ga(this.status,n)),
        this.statusChanges.emit(this.status)),
        this._parent && !t.onlySelf && this._parent.markAsPending(We(Te({}, t), {
            sourceControl: n
        }))
    }
    disable(t={}) {
        let n = this._parentMarkedDirty(t.onlySelf);
        this.status = Yu,
        this.errors = null,
        this._forEachChild(i => {
            i.disable(We(Te({}, t), {
                onlySelf: !0
            }))
        }
        ),
        this._updateValue();
        let r = t.sourceControl ?? this;
        t.emitEvent !== !1 && (this._events.next(new qf(this.value,r)),
        this._events.next(new ga(this.status,r)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(We(Te({}, t), {
            skipPristineCheck: n
        }), this),
        this._onDisabledChange.forEach(i => i(!0))
    }
    enable(t={}) {
        let n = this._parentMarkedDirty(t.onlySelf);
        this.status = $u,
        this._forEachChild(r => {
            r.enable(We(Te({}, t), {
                onlySelf: !0
            }))
        }
        ),
        this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: t.emitEvent
        }),
        this._updateAncestors(We(Te({}, t), {
            skipPristineCheck: n
        }), this),
        this._onDisabledChange.forEach(r => r(!1))
    }
    _updateAncestors(t, n) {
        this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t),
        t.skipPristineCheck || this._parent._updatePristine({}, n),
        this._parent._updateTouched({}, n))
    }
    setParent(t) {
        this._parent = t
    }
    getRawValue() {
        return this.value
    }
    updateValueAndValidity(t={}) {
        if (this._setInitialStatus(),
        this._updateValue(),
        this.enabled) {
            let r = this._cancelExistingSubscription();
            this.errors = this._runValidator(),
            this.status = this._calculateStatus(),
            (this.status === $u || this.status === ma) && this._runAsyncValidator(r, t.emitEvent)
        }
        let n = t.sourceControl ?? this;
        t.emitEvent !== !1 && (this._events.next(new qf(this.value,n)),
        this._events.next(new ga(this.status,n)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent && !t.onlySelf && this._parent.updateValueAndValidity(We(Te({}, t), {
            sourceControl: n
        }))
    }
    _updateTreeValidity(t={
        emitEvent: !0
    }) {
        this._forEachChild(n => n._updateTreeValidity(t)),
        this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: t.emitEvent
        })
    }
    _setInitialStatus() {
        this.status = this._allControlsDisabled() ? Yu : $u
    }
    _runValidator() {
        return this.validator ? this.validator(this) : null
    }
    _runAsyncValidator(t, n) {
        if (this.asyncValidator) {
            this.status = ma,
            this._hasOwnPendingAsyncValidator = {
                emitEvent: n !== !1
            };
            let r = Qb(this.asyncValidator(this));
            this._asyncValidationSubscription = r.subscribe(i => {
                this._hasOwnPendingAsyncValidator = null,
                this.setErrors(i, {
                    emitEvent: n,
                    shouldHaveEmitted: t
                })
            }
            )
        }
    }
    _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
            let t = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
            return this._hasOwnPendingAsyncValidator = null,
            t
        }
        return !1
    }
    setErrors(t, n={}) {
        this.errors = t,
        this._updateControlsErrors(n.emitEvent !== !1, this, n.shouldHaveEmitted)
    }
    get(t) {
        let n = t;
        return n == null || (Array.isArray(n) || (n = n.split(".")),
        n.length === 0) ? null : n.reduce( (r, i) => r && r._find(i), this)
    }
    getError(t, n) {
        let r = n ? this.get(n) : this;
        return r && r.errors ? r.errors[t] : null
    }
    hasError(t, n) {
        return !!this.getError(t, n)
    }
    get root() {
        let t = this;
        for (; t._parent; )
            t = t._parent;
        return t
    }
    _updateControlsErrors(t, n, r) {
        this.status = this._calculateStatus(),
        t && this.statusChanges.emit(this.status),
        (t || r) && this._events.next(new ga(this.status,n)),
        this._parent && this._parent._updateControlsErrors(t, n, r)
    }
    _initObservables() {
        this.valueChanges = new dt,
        this.statusChanges = new dt
    }
    _calculateStatus() {
        return this._allControlsDisabled() ? Yu : this.errors ? $f : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(ma) ? ma : this._anyControlsHaveStatus($f) ? $f : $u
    }
    _anyControlsHaveStatus(t) {
        return this._anyControls(n => n.status === t)
    }
    _anyControlsDirty() {
        return this._anyControls(t => t.dirty)
    }
    _anyControlsTouched() {
        return this._anyControls(t => t.touched)
    }
    _updatePristine(t, n) {
        let r = !this._anyControlsDirty()
          , i = this.pristine !== r;
        this.pristine = r,
        this._parent && !t.onlySelf && this._parent._updatePristine(t, n),
        i && this._events.next(new zu(this.pristine,n))
    }
    _updateTouched(t={}, n) {
        this.touched = this._anyControlsTouched(),
        this._events.next(new Gu(this.touched,n)),
        this._parent && !t.onlySelf && this._parent._updateTouched(t, n)
    }
    _onDisabledChange = [];
    _registerOnCollectionChange(t) {
        this._onCollectionChange = t
    }
    _setUpdateStrategy(t) {
        Kf(t) && t.updateOn != null && (this._updateOn = t.updateOn)
    }
    _parentMarkedDirty(t) {
        let n = this._parent && this._parent.dirty;
        return !t && !!n && !this._parent._anyControlsDirty()
    }
    _find(t) {
        return null
    }
    _assignValidators(t) {
        this._rawValidators = Array.isArray(t) ? t.slice() : t,
        this._composedValidatorFn = TH(this._rawValidators)
    }
    _assignAsyncValidators(t) {
        this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t,
        this._composedAsyncValidatorFn = kH(this._rawAsyncValidators)
    }
}
  , va = class extends ya {
    constructor(t, n, r) {
        super(mv(n), gv(r, n)),
        this.controls = t,
        this._initObservables(),
        this._setUpdateStrategy(n),
        this._setUpControls(),
        this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: !!this.asyncValidator
        })
    }
    controls;
    registerControl(t, n) {
        return this.controls[t] ? this.controls[t] : (this.controls[t] = n,
        n.setParent(this),
        n._registerOnCollectionChange(this._onCollectionChange),
        n)
    }
    addControl(t, n, r={}) {
        this.registerControl(t, n),
        this.updateValueAndValidity({
            emitEvent: r.emitEvent
        }),
        this._onCollectionChange()
    }
    removeControl(t, n={}) {
        this.controls[t] && this.controls[t]._registerOnCollectionChange( () => {}
        ),
        delete this.controls[t],
        this.updateValueAndValidity({
            emitEvent: n.emitEvent
        }),
        this._onCollectionChange()
    }
    setControl(t, n, r={}) {
        this.controls[t] && this.controls[t]._registerOnCollectionChange( () => {}
        ),
        delete this.controls[t],
        n && this.registerControl(t, n),
        this.updateValueAndValidity({
            emitEvent: r.emitEvent
        }),
        this._onCollectionChange()
    }
    contains(t) {
        return this.controls.hasOwnProperty(t) && this.controls[t].enabled
    }
    setValue(t, n={}) {
        s1(this, !0, t),
        Object.keys(t).forEach(r => {
            o1(this, !0, r),
            this.controls[r].setValue(t[r], {
                onlySelf: !0,
                emitEvent: n.emitEvent
            })
        }
        ),
        this.updateValueAndValidity(n)
    }
    patchValue(t, n={}) {
        t != null && (Object.keys(t).forEach(r => {
            let i = this.controls[r];
            i && i.patchValue(t[r], {
                onlySelf: !0,
                emitEvent: n.emitEvent
            })
        }
        ),
        this.updateValueAndValidity(n))
    }
    reset(t={}, n={}) {
        this._forEachChild( (r, i) => {
            r.reset(t ? t[i] : null, {
                onlySelf: !0,
                emitEvent: n.emitEvent
            })
        }
        ),
        this._updatePristine(n, this),
        this._updateTouched(n, this),
        this.updateValueAndValidity(n)
    }
    getRawValue() {
        return this._reduceChildren({}, (t, n, r) => (t[r] = n.getRawValue(),
        t))
    }
    _syncPendingControls() {
        let t = this._reduceChildren(!1, (n, r) => r._syncPendingControls() ? !0 : n);
        return t && this.updateValueAndValidity({
            onlySelf: !0
        }),
        t
    }
    _forEachChild(t) {
        Object.keys(this.controls).forEach(n => {
            let r = this.controls[n];
            r && t(r, n)
        }
        )
    }
    _setUpControls() {
        this._forEachChild(t => {
            t.setParent(this),
            t._registerOnCollectionChange(this._onCollectionChange)
        }
        )
    }
    _updateValue() {
        this.value = this._reduceValue()
    }
    _anyControls(t) {
        for (let[n,r] of Object.entries(this.controls))
            if (this.contains(n) && t(r))
                return !0;
        return !1
    }
    _reduceValue() {
        let t = {};
        return this._reduceChildren(t, (n, r, i) => ((r.enabled || this.disabled) && (n[i] = r.value),
        n))
    }
    _reduceChildren(t, n) {
        let r = t;
        return this._forEachChild( (i, o) => {
            r = n(r, i, o)
        }
        ),
        r
    }
    _allControlsDisabled() {
        for (let t of Object.keys(this.controls))
            if (this.controls[t].enabled)
                return !1;
        return Object.keys(this.controls).length > 0 || this.disabled
    }
    _find(t) {
        return this.controls.hasOwnProperty(t) ? this.controls[t] : null
    }
}
;
var dv = class extends va {
}
;
var ns = new ue("CallSetDisabledState",{
    providedIn: "root",
    factory: () => Qu
})
  , Qu = "always";
function eh(e, t) {
    return [...t.path, e]
}
function Zu(e, t, n=Qu) {
    yv(e, t),
    t.valueAccessor.writeValue(e.value),
    (e.disabled || n === "always") && t.valueAccessor.setDisabledState?.(e.disabled),
    OH(e, t),
    PH(e, t),
    AH(e, t),
    NH(e, t)
}
function Zf(e, t, n=!0) {
    let r = () => {}
    ;
    t.valueAccessor && (t.valueAccessor.registerOnChange(r),
    t.valueAccessor.registerOnTouched(r)),
    Xf(e, t),
    e && (t._invokeOnDestroyCallbacks(),
    e._registerOnCollectionChange( () => {}
    ))
}
function Qf(e, t) {
    e.forEach(n => {
        n.registerOnValidatorChange && n.registerOnValidatorChange(t)
    }
    )
}
function NH(e, t) {
    if (t.valueAccessor.setDisabledState) {
        let n = r => {
            t.valueAccessor.setDisabledState(r)
        }
        ;
        e.registerOnDisabledChange(n),
        t._registerOnDestroy( () => {
            e._unregisterOnDisabledChange(n)
        }
        )
    }
}
function yv(e, t) {
    let n = n1(e);
    t.validator !== null ? e.setValidators(Rb(n, t.validator)) : typeof n == "function" && e.setValidators([n]);
    let r = r1(e);
    t.asyncValidator !== null ? e.setAsyncValidators(Rb(r, t.asyncValidator)) : typeof r == "function" && e.setAsyncValidators([r]);
    let i = () => e.updateValueAndValidity();
    Qf(t._rawValidators, i),
    Qf(t._rawAsyncValidators, i)
}
function Xf(e, t) {
    let n = !1;
    if (e !== null) {
        if (t.validator !== null) {
            let i = n1(e);
            if (Array.isArray(i) && i.length > 0) {
                let o = i.filter(s => s !== t.validator);
                o.length !== i.length && (n = !0,
                e.setValidators(o))
            }
        }
        if (t.asyncValidator !== null) {
            let i = r1(e);
            if (Array.isArray(i) && i.length > 0) {
                let o = i.filter(s => s !== t.asyncValidator);
                o.length !== i.length && (n = !0,
                e.setAsyncValidators(o))
            }
        }
    }
    let r = () => {}
    ;
    return Qf(t._rawValidators, r),
    Qf(t._rawAsyncValidators, r),
    n
}
function OH(e, t) {
    t.valueAccessor.registerOnChange(n => {
        e._pendingValue = n,
        e._pendingChange = !0,
        e._pendingDirty = !0,
        e.updateOn === "change" && a1(e, t)
    }
    )
}
function AH(e, t) {
    t.valueAccessor.registerOnTouched( () => {
        e._pendingTouched = !0,
        e.updateOn === "blur" && e._pendingChange && a1(e, t),
        e.updateOn !== "submit" && e.markAsTouched()
    }
    )
}
function a1(e, t) {
    e._pendingDirty && e.markAsDirty(),
    e.setValue(e._pendingValue, {
        emitModelToViewChange: !1
    }),
    t.viewToModelUpdate(e._pendingValue),
    e._pendingChange = !1
}
function PH(e, t) {
    let n = (r, i) => {
        t.valueAccessor.writeValue(r),
        i && t.viewToModelUpdate(r)
    }
    ;
    e.registerOnChange(n),
    t._registerOnDestroy( () => {
        e._unregisterOnChange(n)
    }
    )
}
function u1(e, t) {
    e == null,
    yv(e, t)
}
function FH(e, t) {
    return Xf(e, t)
}
function vv(e, t) {
    if (!e.hasOwnProperty("model"))
        return !1;
    let n = e.model;
    return n.isFirstChange() ? !0 : !Object.is(t, n.currentValue)
}
function RH(e) {
    return Object.getPrototypeOf(e.constructor) === es
}
function l1(e, t) {
    e._syncPendingControls(),
    t.forEach(n => {
        let r = n.control;
        r.updateOn === "submit" && r._pendingChange && (n.viewToModelUpdate(r._pendingValue),
        r._pendingChange = !1)
    }
    )
}
function _v(e, t) {
    if (!t)
        return null;
    Array.isArray(t);
    let n, r, i;
    return t.forEach(o => {
        o.constructor === Jf ? n = o : RH(o) ? r = o : i = o
    }
    ),
    i || r || n || null
}
function LH(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
var VH = {
    provide: gn,
    useExisting: Ct( () => jH)
}
  , Wu = Promise.resolve()
  , jH = ( () => {
    class e extends gn {
        callSetDisabledState;
        get submitted() {
            return hn(this.submittedReactive)
        }
        _submitted = io( () => this.submittedReactive());
        submittedReactive = Fe(!1);
        _directives = new Set;
        form;
        ngSubmit = new dt;
        options;
        constructor(n, r, i) {
            super(),
            this.callSetDisabledState = i,
            this.form = new va({},hv(n),pv(r))
        }
        ngAfterViewInit() {
            this._setUpdateStrategy()
        }
        get formDirective() {
            return this
        }
        get control() {
            return this.form
        }
        get path() {
            return []
        }
        get controls() {
            return this.form.controls
        }
        addControl(n) {
            Wu.then( () => {
                let r = this._findContainer(n.path);
                n.control = r.registerControl(n.name, n.control),
                Zu(n.control, n, this.callSetDisabledState),
                n.control.updateValueAndValidity({
                    emitEvent: !1
                }),
                this._directives.add(n)
            }
            )
        }
        getControl(n) {
            return this.form.get(n.path)
        }
        removeControl(n) {
            Wu.then( () => {
                let r = this._findContainer(n.path);
                r && r.removeControl(n.name),
                this._directives.delete(n)
            }
            )
        }
        addFormGroup(n) {
            Wu.then( () => {
                let r = this._findContainer(n.path)
                  , i = new va({});
                u1(i, n),
                r.registerControl(n.name, i),
                i.updateValueAndValidity({
                    emitEvent: !1
                })
            }
            )
        }
        removeFormGroup(n) {
            Wu.then( () => {
                let r = this._findContainer(n.path);
                r && r.removeControl(n.name)
            }
            )
        }
        getFormGroup(n) {
            return this.form.get(n.path)
        }
        updateModel(n, r) {
            Wu.then( () => {
                this.form.get(n.path).setValue(r)
            }
            )
        }
        setValue(n) {
            this.control.setValue(n)
        }
        onSubmit(n) {
            return this.submittedReactive.set(!0),
            l1(this.form, this._directives),
            this.ngSubmit.emit(n),
            n?.target?.method === "dialog"
        }
        onReset() {
            this.resetForm()
        }
        resetForm(n=void 0) {
            this.form.reset(n),
            this.submittedReactive.set(!1)
        }
        _setUpdateStrategy() {
            this.options && this.options.updateOn != null && (this.form._updateOn = this.options.updateOn)
        }
        _findContainer(n) {
            return n.pop(),
            n.length ? this.form.get(n) : this.form
        }
        static \u0275fac = function(r) {
            return new (r || e)(O($r, 10),O(ts, 10),O(ns, 8))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
            hostBindings: function(r, i) {
                r & 1 && re("submit", function(s) {
                    return i.onSubmit(s)
                })("reset", function() {
                    return i.onReset()
                })
            },
            inputs: {
                options: [0, "ngFormOptions", "options"]
            },
            outputs: {
                ngSubmit: "ngSubmit"
            },
            exportAs: ["ngForm"],
            standalone: !1,
            features: [Lt([VH]), pt]
        })
    }
    return e
}
)();
function jb(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
function Bb(e) {
    return typeof e == "object" && e !== null && Object.keys(e).length === 2 && "value"in e && "disabled"in e
}
var qu = class extends ya {
    defaultValue = null;
    _onChange = [];
    _pendingValue;
    _pendingChange = !1;
    constructor(t=null, n, r) {
        super(mv(n), gv(r, n)),
        this._applyFormState(t),
        this._setUpdateStrategy(n),
        this._initObservables(),
        this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: !!this.asyncValidator
        }),
        Kf(n) && (n.nonNullable || n.initialValueIsDefault) && (Bb(t) ? this.defaultValue = t.value : this.defaultValue = t)
    }
    setValue(t, n={}) {
        this.value = this._pendingValue = t,
        this._onChange.length && n.emitModelToViewChange !== !1 && this._onChange.forEach(r => r(this.value, n.emitViewToModelChange !== !1)),
        this.updateValueAndValidity(n)
    }
    patchValue(t, n={}) {
        this.setValue(t, n)
    }
    reset(t=this.defaultValue, n={}) {
        this._applyFormState(t),
        this.markAsPristine(n),
        this.markAsUntouched(n),
        this.setValue(this.value, n),
        this._pendingChange = !1
    }
    _updateValue() {}
    _anyControls(t) {
        return !1
    }
    _allControlsDisabled() {
        return this.disabled
    }
    registerOnChange(t) {
        this._onChange.push(t)
    }
    _unregisterOnChange(t) {
        jb(this._onChange, t)
    }
    registerOnDisabledChange(t) {
        this._onDisabledChange.push(t)
    }
    _unregisterOnDisabledChange(t) {
        jb(this._onDisabledChange, t)
    }
    _forEachChild(t) {}
    _syncPendingControls() {
        return this.updateOn === "submit" && (this._pendingDirty && this.markAsDirty(),
        this._pendingTouched && this.markAsTouched(),
        this._pendingChange) ? (this.setValue(this._pendingValue, {
            onlySelf: !0,
            emitModelToViewChange: !1
        }),
        !0) : !1
    }
    _applyFormState(t) {
        Bb(t) ? (this.value = this._pendingValue = t.value,
        t.disabled ? this.disable({
            onlySelf: !0,
            emitEvent: !1
        }) : this.enable({
            onlySelf: !0,
            emitEvent: !1
        })) : this.value = this._pendingValue = t
    }
}
;
var BH = e => e instanceof qu
  , HH = ( () => {
    class e extends gn {
        _parent;
        ngOnInit() {
            this._checkParentType(),
            this.formDirective.addFormGroup(this)
        }
        ngOnDestroy() {
            this.formDirective && this.formDirective.removeFormGroup(this)
        }
        get control() {
            return this.formDirective.getFormGroup(this)
        }
        get path() {
            return eh(this.name == null ? this.name : this.name.toString(), this._parent)
        }
        get formDirective() {
            return this._parent ? this._parent.formDirective : null
        }
        _checkParentType() {}
        static \u0275fac = ( () => {
            let n;
            return function(i) {
                return (n || (n = An(e)))(i || e)
            }
        }
        )();
        static \u0275dir = ee({
            type: e,
            standalone: !1,
            features: [pt]
        })
    }
    return e
}
)();
var UH = {
    provide: Hr,
    useExisting: Ct( () => wv)
}
  , Hb = Promise.resolve()
  , wv = ( () => {
    class e extends Hr {
        _changeDetectorRef;
        callSetDisabledState;
        control = new qu;
        static ngAcceptInputType_isDisabled;
        _registered = !1;
        viewModel;
        name = "";
        isDisabled;
        model;
        options;
        update = new dt;
        constructor(n, r, i, o, s, a) {
            super(),
            this._changeDetectorRef = s,
            this.callSetDisabledState = a,
            this._parent = n,
            this._setValidators(r),
            this._setAsyncValidators(i),
            this.valueAccessor = _v(this, o)
        }
        ngOnChanges(n) {
            if (this._checkForErrors(),
            !this._registered || "name"in n) {
                if (this._registered && (this._checkName(),
                this.formDirective)) {
                    let r = n.name.previousValue;
                    this.formDirective.removeControl({
                        name: r,
                        path: this._getPath(r)
                    })
                }
                this._setUpControl()
            }
            "isDisabled"in n && this._updateDisabled(n),
            vv(n, this.viewModel) && (this._updateValue(this.model),
            this.viewModel = this.model)
        }
        ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this)
        }
        get path() {
            return this._getPath(this.name)
        }
        get formDirective() {
            return this._parent ? this._parent.formDirective : null
        }
        viewToModelUpdate(n) {
            this.viewModel = n,
            this.update.emit(n)
        }
        _setUpControl() {
            this._setUpdateStrategy(),
            this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this),
            this._registered = !0
        }
        _setUpdateStrategy() {
            this.options && this.options.updateOn != null && (this.control._updateOn = this.options.updateOn)
        }
        _isStandalone() {
            return !this._parent || !!(this.options && this.options.standalone)
        }
        _setUpStandalone() {
            Zu(this.control, this, this.callSetDisabledState),
            this.control.updateValueAndValidity({
                emitEvent: !1
            })
        }
        _checkForErrors() {
            this._isStandalone() || this._checkParentType(),
            this._checkName()
        }
        _checkParentType() {}
        _checkName() {
            this.options && this.options.name && (this.name = this.options.name),
            !this._isStandalone() && this.name
        }
        _updateValue(n) {
            Hb.then( () => {
                this.control.setValue(n, {
                    emitViewToModelChange: !1
                }),
                this._changeDetectorRef?.markForCheck()
            }
            )
        }
        _updateDisabled(n) {
            let r = n.isDisabled.currentValue
              , i = r !== 0 && xf(r);
            Hb.then( () => {
                i && !this.control.disabled ? this.control.disable() : !i && this.control.disabled && this.control.enable(),
                this._changeDetectorRef?.markForCheck()
            }
            )
        }
        _getPath(n) {
            return this._parent ? eh(n, this._parent) : [n]
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(gn, 9),O($r, 10),O(ts, 10),O(Ur, 10),O(ro, 8),O(ns, 8))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
            inputs: {
                name: "name",
                isDisabled: [0, "disabled", "isDisabled"],
                model: [0, "ngModel", "model"],
                options: [0, "ngModelOptions", "options"]
            },
            outputs: {
                update: "ngModelChange"
            },
            exportAs: ["ngModel"],
            standalone: !1,
            features: [Lt([UH]), pt, nn]
        })
    }
    return e
}
)()
  , Tre = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
            hostAttrs: ["novalidate", ""],
            standalone: !1
        })
    }
    return e
}
)()
  , $H = {
    provide: Ur,
    useExisting: Ct( () => YH),
    multi: !0
}
  , YH = ( () => {
    class e extends es {
        writeValue(n) {
            let r = n ?? "";
            this.setProperty("value", r)
        }
        registerOnChange(n) {
            this.onChange = r => {
                n(r == "" ? null : parseFloat(r))
            }
        }
        static \u0275fac = ( () => {
            let n;
            return function(i) {
                return (n || (n = An(e)))(i || e)
            }
        }
        )();
        static \u0275dir = ee({
            type: e,
            selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
            hostBindings: function(r, i) {
                r & 1 && re("input", function(s) {
                    return i.onChange(s.target.value)
                })("blur", function() {
                    return i.onTouched()
                })
            },
            standalone: !1,
            features: [Lt([$H]), pt]
        })
    }
    return e
}
)()
  , WH = {
    provide: Ur,
    useExisting: Ct( () => GH),
    multi: !0
};
var zH = ( () => {
    class e {
        _accessors = [];
        add(n, r) {
            this._accessors.push([n, r])
        }
        remove(n) {
            for (let r = this._accessors.length - 1; r >= 0; --r)
                if (this._accessors[r][1] === n) {
                    this._accessors.splice(r, 1);
                    return
                }
        }
        select(n) {
            this._accessors.forEach(r => {
                this._isSameGroup(r, n) && r[1] !== n && r[1].fireUncheck(n.value)
            }
            )
        }
        _isSameGroup(n, r) {
            return n[0].control ? n[0]._parent === r._control._parent && n[1].name === r.name : !1
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , GH = ( () => {
    class e extends es {
        _registry;
        _injector;
        _state;
        _control;
        _fn;
        setDisabledStateFired = !1;
        onChange = () => {}
        ;
        name;
        formControlName;
        value;
        callSetDisabledState = Y(ns, {
            optional: !0
        }) ?? Qu;
        constructor(n, r, i, o) {
            super(n, r),
            this._registry = i,
            this._injector = o
        }
        ngOnInit() {
            this._control = this._injector.get(Hr),
            this._checkName(),
            this._registry.add(this._control, this)
        }
        ngOnDestroy() {
            this._registry.remove(this)
        }
        writeValue(n) {
            this._state = n === this.value,
            this.setProperty("checked", this._state)
        }
        registerOnChange(n) {
            this._fn = n,
            this.onChange = () => {
                n(this.value),
                this._registry.select(this)
            }
        }
        setDisabledState(n) {
            (this.setDisabledStateFired || n || this.callSetDisabledState === "whenDisabledForLegacyCode") && this.setProperty("disabled", n),
            this.setDisabledStateFired = !0
        }
        fireUncheck(n) {
            this.writeValue(n)
        }
        _checkName() {
            this.name && this.formControlName && (this.name,
            this.formControlName),
            !this.name && this.formControlName && (this.name = this.formControlName)
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(yt),O(Ne),O(zH),O(Cn))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
            hostBindings: function(r, i) {
                r & 1 && re("change", function() {
                    return i.onChange()
                })("blur", function() {
                    return i.onTouched()
                })
            },
            inputs: {
                name: "name",
                formControlName: "formControlName",
                value: "value"
            },
            standalone: !1,
            features: [Lt([WH]), pt]
        })
    }
    return e
}
)()
  , qH = {
    provide: Ur,
    useExisting: Ct( () => Dv),
    multi: !0
}
  , Dv = ( () => {
    class e extends es {
        writeValue(n) {
            this.setProperty("value", parseFloat(n))
        }
        registerOnChange(n) {
            this.onChange = r => {
                n(r == "" ? null : parseFloat(r))
            }
        }
        static \u0275fac = ( () => {
            let n;
            return function(i) {
                return (n || (n = An(e)))(i || e)
            }
        }
        )();
        static \u0275dir = ee({
            type: e,
            selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
            hostBindings: function(r, i) {
                r & 1 && re("change", function(s) {
                    return i.onChange(s.target.value)
                })("input", function(s) {
                    return i.onChange(s.target.value)
                })("blur", function() {
                    return i.onTouched()
                })
            },
            standalone: !1,
            features: [Lt([qH]), pt]
        })
    }
    return e
}
)()
  , xv = new ue("")
  , ZH = {
    provide: Hr,
    useExisting: Ct( () => QH)
}
  , QH = ( () => {
    class e extends Hr {
        _ngModelWarningConfig;
        callSetDisabledState;
        viewModel;
        form;
        set isDisabled(n) {}
        model;
        update = new dt;
        static _ngModelWarningSentOnce = !1;
        _ngModelWarningSent = !1;
        constructor(n, r, i, o, s) {
            super(),
            this._ngModelWarningConfig = o,
            this.callSetDisabledState = s,
            this._setValidators(n),
            this._setAsyncValidators(r),
            this.valueAccessor = _v(this, i)
        }
        ngOnChanges(n) {
            if (this._isControlChanged(n)) {
                let r = n.form.previousValue;
                r && Zf(r, this, !1),
                Zu(this.form, this, this.callSetDisabledState),
                this.form.updateValueAndValidity({
                    emitEvent: !1
                })
            }
            vv(n, this.viewModel) && (this.form.setValue(this.model),
            this.viewModel = this.model)
        }
        ngOnDestroy() {
            this.form && Zf(this.form, this, !1)
        }
        get path() {
            return []
        }
        get control() {
            return this.form
        }
        viewToModelUpdate(n) {
            this.viewModel = n,
            this.update.emit(n)
        }
        _isControlChanged(n) {
            return n.hasOwnProperty("form")
        }
        static \u0275fac = function(r) {
            return new (r || e)(O($r, 10),O(ts, 10),O(Ur, 10),O(xv, 8),O(ns, 8))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "formControl", ""]],
            inputs: {
                form: [0, "formControl", "form"],
                isDisabled: [0, "disabled", "isDisabled"],
                model: [0, "ngModel", "model"]
            },
            outputs: {
                update: "ngModelChange"
            },
            exportAs: ["ngForm"],
            standalone: !1,
            features: [Lt([ZH]), pt, nn]
        })
    }
    return e
}
)()
  , XH = {
    provide: gn,
    useExisting: Ct( () => c1)
}
  , c1 = ( () => {
    class e extends gn {
        callSetDisabledState;
        get submitted() {
            return hn(this._submittedReactive)
        }
        set submitted(n) {
            this._submittedReactive.set(n)
        }
        _submitted = io( () => this._submittedReactive());
        _submittedReactive = Fe(!1);
        _oldForm;
        _onCollectionChange = () => this._updateDomValue();
        directives = [];
        form = null;
        ngSubmit = new dt;
        constructor(n, r, i) {
            super(),
            this.callSetDisabledState = i,
            this._setValidators(n),
            this._setAsyncValidators(r)
        }
        ngOnChanges(n) {
            this._checkFormPresent(),
            n.hasOwnProperty("form") && (this._updateValidators(),
            this._updateDomValue(),
            this._updateRegistrations(),
            this._oldForm = this.form)
        }
        ngOnDestroy() {
            this.form && (Xf(this.form, this),
            this.form._onCollectionChange === this._onCollectionChange && this.form._registerOnCollectionChange( () => {}
            ))
        }
        get formDirective() {
            return this
        }
        get control() {
            return this.form
        }
        get path() {
            return []
        }
        addControl(n) {
            let r = this.form.get(n.path);
            return Zu(r, n, this.callSetDisabledState),
            r.updateValueAndValidity({
                emitEvent: !1
            }),
            this.directives.push(n),
            r
        }
        getControl(n) {
            return this.form.get(n.path)
        }
        removeControl(n) {
            Zf(n.control || null, n, !1),
            LH(this.directives, n)
        }
        addFormGroup(n) {
            this._setUpFormContainer(n)
        }
        removeFormGroup(n) {
            this._cleanUpFormContainer(n)
        }
        getFormGroup(n) {
            return this.form.get(n.path)
        }
        addFormArray(n) {
            this._setUpFormContainer(n)
        }
        removeFormArray(n) {
            this._cleanUpFormContainer(n)
        }
        getFormArray(n) {
            return this.form.get(n.path)
        }
        updateModel(n, r) {
            this.form.get(n.path).setValue(r)
        }
        onSubmit(n) {
            return this._submittedReactive.set(!0),
            l1(this.form, this.directives),
            this.ngSubmit.emit(n),
            this.form._events.next(new lv(this.control)),
            n?.target?.method === "dialog"
        }
        onReset() {
            this.resetForm()
        }
        resetForm(n=void 0) {
            this.form.reset(n),
            this._submittedReactive.set(!1),
            this.form._events.next(new cv(this.form))
        }
        _updateDomValue() {
            this.directives.forEach(n => {
                let r = n.control
                  , i = this.form.get(n.path);
                r !== i && (Zf(r || null, n),
                BH(i) && (Zu(i, n, this.callSetDisabledState),
                n.control = i))
            }
            ),
            this.form._updateTreeValidity({
                emitEvent: !1
            })
        }
        _setUpFormContainer(n) {
            let r = this.form.get(n.path);
            u1(r, n),
            r.updateValueAndValidity({
                emitEvent: !1
            })
        }
        _cleanUpFormContainer(n) {
            if (this.form) {
                let r = this.form.get(n.path);
                r && FH(r, n) && r.updateValueAndValidity({
                    emitEvent: !1
                })
            }
        }
        _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
            this._oldForm && this._oldForm._registerOnCollectionChange( () => {}
            )
        }
        _updateValidators() {
            yv(this.form, this),
            this._oldForm && Xf(this._oldForm, this)
        }
        _checkFormPresent() {
            this.form
        }
        static \u0275fac = function(r) {
            return new (r || e)(O($r, 10),O(ts, 10),O(ns, 8))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "formGroup", ""]],
            hostBindings: function(r, i) {
                r & 1 && re("submit", function(s) {
                    return i.onSubmit(s)
                })("reset", function() {
                    return i.onReset()
                })
            },
            inputs: {
                form: [0, "formGroup", "form"]
            },
            outputs: {
                ngSubmit: "ngSubmit"
            },
            exportAs: ["ngForm"],
            standalone: !1,
            features: [Lt([XH]), pt, nn]
        })
    }
    return e
}
)()
  , JH = {
    provide: gn,
    useExisting: Ct( () => d1)
}
  , d1 = ( () => {
    class e extends HH {
        name = null;
        constructor(n, r, i) {
            super(),
            this._parent = n,
            this._setValidators(r),
            this._setAsyncValidators(i)
        }
        _checkParentType() {
            h1(this._parent)
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(gn, 13),O($r, 10),O(ts, 10))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "formGroupName", ""]],
            inputs: {
                name: [0, "formGroupName", "name"]
            },
            standalone: !1,
            features: [Lt([JH]), pt]
        })
    }
    return e
}
)()
  , KH = {
    provide: gn,
    useExisting: Ct( () => f1)
}
  , f1 = ( () => {
    class e extends gn {
        _parent;
        name = null;
        constructor(n, r, i) {
            super(),
            this._parent = n,
            this._setValidators(r),
            this._setAsyncValidators(i)
        }
        ngOnInit() {
            this._checkParentType(),
            this.formDirective.addFormArray(this)
        }
        ngOnDestroy() {
            this.formDirective && this.formDirective.removeFormArray(this)
        }
        get control() {
            return this.formDirective.getFormArray(this)
        }
        get formDirective() {
            return this._parent ? this._parent.formDirective : null
        }
        get path() {
            return eh(this.name == null ? this.name : this.name.toString(), this._parent)
        }
        _checkParentType() {
            h1(this._parent)
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(gn, 13),O($r, 10),O(ts, 10))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "formArrayName", ""]],
            inputs: {
                name: [0, "formArrayName", "name"]
            },
            standalone: !1,
            features: [Lt([KH]), pt]
        })
    }
    return e
}
)();
function h1(e) {
    return !(e instanceof d1) && !(e instanceof c1) && !(e instanceof f1)
}
var eU = {
    provide: Hr,
    useExisting: Ct( () => tU)
}
  , tU = ( () => {
    class e extends Hr {
        _ngModelWarningConfig;
        _added = !1;
        viewModel;
        control;
        name = null;
        set isDisabled(n) {}
        model;
        update = new dt;
        static _ngModelWarningSentOnce = !1;
        _ngModelWarningSent = !1;
        constructor(n, r, i, o, s) {
            super(),
            this._ngModelWarningConfig = s,
            this._parent = n,
            this._setValidators(r),
            this._setAsyncValidators(i),
            this.valueAccessor = _v(this, o)
        }
        ngOnChanges(n) {
            this._added || this._setUpControl(),
            vv(n, this.viewModel) && (this.viewModel = this.model,
            this.formDirective.updateModel(this, this.model))
        }
        ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this)
        }
        viewToModelUpdate(n) {
            this.viewModel = n,
            this.update.emit(n)
        }
        get path() {
            return eh(this.name == null ? this.name : this.name.toString(), this._parent)
        }
        get formDirective() {
            return this._parent ? this._parent.formDirective : null
        }
        _checkParentType() {}
        _setUpControl() {
            this._checkParentType(),
            this.control = this.formDirective.addControl(this),
            this._added = !0
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(gn, 13),O($r, 10),O(ts, 10),O(Ur, 10),O(xv, 8))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["", "formControlName", ""]],
            inputs: {
                name: [0, "formControlName", "name"],
                isDisabled: [0, "disabled", "isDisabled"],
                model: [0, "ngModel", "model"]
            },
            outputs: {
                update: "ngModelChange"
            },
            standalone: !1,
            features: [Lt([eU]), pt, nn]
        })
    }
    return e
}
)()
  , nU = {
    provide: Ur,
    useExisting: Ct( () => m1),
    multi: !0
};
function p1(e, t) {
    return e == null ? `${t}` : (t && typeof t == "object" && (t = "Object"),
    `${e}: ${t}`.slice(0, 50))
}
function rU(e) {
    return e.split(":")[0]
}
var m1 = ( () => {
    class e extends es {
        value;
        _optionMap = new Map;
        _idCounter = 0;
        set compareWith(n) {
            this._compareWith = n
        }
        _compareWith = Object.is;
        writeValue(n) {
            this.value = n;
            let r = this._getOptionId(n)
              , i = p1(r, n);
            this.setProperty("value", i)
        }
        registerOnChange(n) {
            this.onChange = r => {
                this.value = this._getOptionValue(r),
                n(this.value)
            }
        }
        _registerOption() {
            return (this._idCounter++).toString()
        }
        _getOptionId(n) {
            for (let r of this._optionMap.keys())
                if (this._compareWith(this._optionMap.get(r), n))
                    return r;
            return null
        }
        _getOptionValue(n) {
            let r = rU(n);
            return this._optionMap.has(r) ? this._optionMap.get(r) : n
        }
        static \u0275fac = ( () => {
            let n;
            return function(i) {
                return (n || (n = An(e)))(i || e)
            }
        }
        )();
        static \u0275dir = ee({
            type: e,
            selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
            hostBindings: function(r, i) {
                r & 1 && re("change", function(s) {
                    return i.onChange(s.target.value)
                })("blur", function() {
                    return i.onTouched()
                })
            },
            inputs: {
                compareWith: "compareWith"
            },
            standalone: !1,
            features: [Lt([nU]), pt]
        })
    }
    return e
}
)()
  , kre = ( () => {
    class e {
        _element;
        _renderer;
        _select;
        id;
        constructor(n, r, i) {
            this._element = n,
            this._renderer = r,
            this._select = i,
            this._select && (this.id = this._select._registerOption())
        }
        set ngValue(n) {
            this._select != null && (this._select._optionMap.set(this.id, n),
            this._setElementValue(p1(this.id, n)),
            this._select.writeValue(this._select.value))
        }
        set value(n) {
            this._setElementValue(n),
            this._select && this._select.writeValue(this._select.value)
        }
        _setElementValue(n) {
            this._renderer.setProperty(this._element.nativeElement, "value", n)
        }
        ngOnDestroy() {
            this._select && (this._select._optionMap.delete(this.id),
            this._select.writeValue(this._select.value))
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(Ne),O(yt),O(m1, 9))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["option"]],
            inputs: {
                ngValue: "ngValue",
                value: "value"
            },
            standalone: !1
        })
    }
    return e
}
)()
  , iU = {
    provide: Ur,
    useExisting: Ct( () => g1),
    multi: !0
};
function Ub(e, t) {
    return e == null ? `${t}` : (typeof t == "string" && (t = `'${t}'`),
    t && typeof t == "object" && (t = "Object"),
    `${e}: ${t}`.slice(0, 50))
}
function oU(e) {
    return e.split(":")[0]
}
var g1 = ( () => {
    class e extends es {
        value;
        _optionMap = new Map;
        _idCounter = 0;
        set compareWith(n) {
            this._compareWith = n
        }
        _compareWith = Object.is;
        writeValue(n) {
            this.value = n;
            let r;
            if (Array.isArray(n)) {
                let i = n.map(o => this._getOptionId(o));
                r = (o, s) => {
                    o._setSelected(i.indexOf(s.toString()) > -1)
                }
            } else
                r = (i, o) => {
                    i._setSelected(!1)
                }
                ;
            this._optionMap.forEach(r)
        }
        registerOnChange(n) {
            this.onChange = r => {
                let i = []
                  , o = r.selectedOptions;
                if (o !== void 0) {
                    let s = o;
                    for (let a = 0; a < s.length; a++) {
                        let l = s[a]
                          , c = this._getOptionValue(l.value);
                        i.push(c)
                    }
                } else {
                    let s = r.options;
                    for (let a = 0; a < s.length; a++) {
                        let l = s[a];
                        if (l.selected) {
                            let c = this._getOptionValue(l.value);
                            i.push(c)
                        }
                    }
                }
                this.value = i,
                n(i)
            }
        }
        _registerOption(n) {
            let r = (this._idCounter++).toString();
            return this._optionMap.set(r, n),
            r
        }
        _getOptionId(n) {
            for (let r of this._optionMap.keys())
                if (this._compareWith(this._optionMap.get(r)._value, n))
                    return r;
            return null
        }
        _getOptionValue(n) {
            let r = oU(n);
            return this._optionMap.has(r) ? this._optionMap.get(r)._value : n
        }
        static \u0275fac = ( () => {
            let n;
            return function(i) {
                return (n || (n = An(e)))(i || e)
            }
        }
        )();
        static \u0275dir = ee({
            type: e,
            selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
            hostBindings: function(r, i) {
                r & 1 && re("change", function(s) {
                    return i.onChange(s.target)
                })("blur", function() {
                    return i.onTouched()
                })
            },
            inputs: {
                compareWith: "compareWith"
            },
            standalone: !1,
            features: [Lt([iU]), pt]
        })
    }
    return e
}
)()
  , Nre = ( () => {
    class e {
        _element;
        _renderer;
        _select;
        id;
        _value;
        constructor(n, r, i) {
            this._element = n,
            this._renderer = r,
            this._select = i,
            this._select && (this.id = this._select._registerOption(this))
        }
        set ngValue(n) {
            this._select != null && (this._value = n,
            this._setElementValue(Ub(this.id, n)),
            this._select.writeValue(this._select.value))
        }
        set value(n) {
            this._select ? (this._value = n,
            this._setElementValue(Ub(this.id, n)),
            this._select.writeValue(this._select.value)) : this._setElementValue(n)
        }
        _setElementValue(n) {
            this._renderer.setProperty(this._element.nativeElement, "value", n)
        }
        _setSelected(n) {
            this._renderer.setProperty(this._element.nativeElement, "selected", n)
        }
        ngOnDestroy() {
            this._select && (this._select._optionMap.delete(this.id),
            this._select.writeValue(this._select.value))
        }
        static \u0275fac = function(r) {
            return new (r || e)(O(Ne),O(yt),O(g1, 9))
        }
        ;
        static \u0275dir = ee({
            type: e,
            selectors: [["option"]],
            inputs: {
                ngValue: "ngValue",
                value: "value"
            },
            standalone: !1
        })
    }
    return e
}
)();
function y1(e) {
    return typeof e == "number" ? e : parseInt(e, 10)
}
var Cv = ( () => {
    class e {
        _validator = Yf;
        _onChange;
        _enabled;
        ngOnChanges(n) {
            if (this.inputName in n) {
                let r = this.normalizeInput(n[this.inputName].currentValue);
                this._enabled = this.enabled(r),
                this._validator = this._enabled ? this.createValidator(r) : Yf,
                this._onChange && this._onChange()
            }
        }
        validate(n) {
            return this._validator(n)
        }
        registerOnValidatorChange(n) {
            this._onChange = n
        }
        enabled(n) {
            return n != null
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275dir = ee({
            type: e,
            features: [nn]
        })
    }
    return e
}
)();
var sU = {
    provide: $r,
    useExisting: Ct( () => aU),
    multi: !0
};
var aU = ( () => {
    class e extends Cv {
        required;
        inputName = "required";
        normalizeInput = xf;
        createValidator = n => zb;
        enabled(n) {
            return n
        }
        static \u0275fac = ( () => {
            let n;
            return function(i) {
                return (n || (n = An(e)))(i || e)
            }
        }
        )();
        static \u0275dir = ee({
            type: e,
            selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
            hostVars: 1,
            hostBindings: function(r, i) {
                r & 2 && Jo("required", i._enabled ? "" : null)
            },
            inputs: {
                required: "required"
            },
            standalone: !1,
            features: [Lt([sU]), pt]
        })
    }
    return e
}
)();
var uU = {
    provide: $r,
    useExisting: Ct( () => lU),
    multi: !0
}
  , lU = ( () => {
    class e extends Cv {
        minlength;
        inputName = "minlength";
        normalizeInput = n => y1(n);
        createValidator = n => Gb(n);
        static \u0275fac = ( () => {
            let n;
            return function(i) {
                return (n || (n = An(e)))(i || e)
            }
        }
        )();
        static \u0275dir = ee({
            type: e,
            selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
            hostVars: 1,
            hostBindings: function(r, i) {
                r & 2 && Jo("minlength", i._enabled ? i.minlength : null)
            },
            inputs: {
                minlength: "minlength"
            },
            standalone: !1,
            features: [Lt([uU]), pt]
        })
    }
    return e
}
)()
  , cU = {
    provide: $r,
    useExisting: Ct( () => dU),
    multi: !0
}
  , dU = ( () => {
    class e extends Cv {
        maxlength;
        inputName = "maxlength";
        normalizeInput = n => y1(n);
        createValidator = n => qb(n);
        static \u0275fac = ( () => {
            let n;
            return function(i) {
                return (n || (n = An(e)))(i || e)
            }
        }
        )();
        static \u0275dir = ee({
            type: e,
            selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
            hostVars: 1,
            hostBindings: function(r, i) {
                r & 2 && Jo("maxlength", i._enabled ? i.maxlength : null)
            },
            inputs: {
                maxlength: "maxlength"
            },
            standalone: !1,
            features: [Lt([cU]), pt]
        })
    }
    return e
}
)();
var v1 = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275mod = eo({
            type: e
        });
        static \u0275inj = qi({})
    }
    return e
}
)()
  , fv = class extends ya {
    constructor(t, n, r) {
        super(mv(n), gv(r, n)),
        this.controls = t,
        this._initObservables(),
        this._setUpdateStrategy(n),
        this._setUpControls(),
        this.updateValueAndValidity({
            onlySelf: !0,
            emitEvent: !!this.asyncValidator
        })
    }
    controls;
    at(t) {
        return this.controls[this._adjustIndex(t)]
    }
    push(t, n={}) {
        this.controls.push(t),
        this._registerControl(t),
        this.updateValueAndValidity({
            emitEvent: n.emitEvent
        }),
        this._onCollectionChange()
    }
    insert(t, n, r={}) {
        this.controls.splice(t, 0, n),
        this._registerControl(n),
        this.updateValueAndValidity({
            emitEvent: r.emitEvent
        })
    }
    removeAt(t, n={}) {
        let r = this._adjustIndex(t);
        r < 0 && (r = 0),
        this.controls[r] && this.controls[r]._registerOnCollectionChange( () => {}
        ),
        this.controls.splice(r, 1),
        this.updateValueAndValidity({
            emitEvent: n.emitEvent
        })
    }
    setControl(t, n, r={}) {
        let i = this._adjustIndex(t);
        i < 0 && (i = 0),
        this.controls[i] && this.controls[i]._registerOnCollectionChange( () => {}
        ),
        this.controls.splice(i, 1),
        n && (this.controls.splice(i, 0, n),
        this._registerControl(n)),
        this.updateValueAndValidity({
            emitEvent: r.emitEvent
        }),
        this._onCollectionChange()
    }
    get length() {
        return this.controls.length
    }
    setValue(t, n={}) {
        s1(this, !1, t),
        t.forEach( (r, i) => {
            o1(this, !1, i),
            this.at(i).setValue(r, {
                onlySelf: !0,
                emitEvent: n.emitEvent
            })
        }
        ),
        this.updateValueAndValidity(n)
    }
    patchValue(t, n={}) {
        t != null && (t.forEach( (r, i) => {
            this.at(i) && this.at(i).patchValue(r, {
                onlySelf: !0,
                emitEvent: n.emitEvent
            })
        }
        ),
        this.updateValueAndValidity(n))
    }
    reset(t=[], n={}) {
        this._forEachChild( (r, i) => {
            r.reset(t[i], {
                onlySelf: !0,
                emitEvent: n.emitEvent
            })
        }
        ),
        this._updatePristine(n, this),
        this._updateTouched(n, this),
        this.updateValueAndValidity(n)
    }
    getRawValue() {
        return this.controls.map(t => t.getRawValue())
    }
    clear(t={}) {
        this.controls.length < 1 || (this._forEachChild(n => n._registerOnCollectionChange( () => {}
        )),
        this.controls.splice(0),
        this.updateValueAndValidity({
            emitEvent: t.emitEvent
        }))
    }
    _adjustIndex(t) {
        return t < 0 ? t + this.length : t
    }
    _syncPendingControls() {
        let t = this.controls.reduce( (n, r) => r._syncPendingControls() ? !0 : n, !1);
        return t && this.updateValueAndValidity({
            onlySelf: !0
        }),
        t
    }
    _forEachChild(t) {
        this.controls.forEach( (n, r) => {
            t(n, r)
        }
        )
    }
    _updateValue() {
        this.value = this.controls.filter(t => t.enabled || this.disabled).map(t => t.value)
    }
    _anyControls(t) {
        return this.controls.some(n => n.enabled && t(n))
    }
    _setUpControls() {
        this._forEachChild(t => this._registerControl(t))
    }
    _allControlsDisabled() {
        for (let t of this.controls)
            if (t.enabled)
                return !1;
        return this.controls.length > 0 || this.disabled
    }
    _registerControl(t) {
        t.setParent(this),
        t._registerOnCollectionChange(this._onCollectionChange)
    }
    _find(t) {
        return this.at(t) ?? null
    }
}
;
function $b(e) {
    return !!e && (e.asyncValidators !== void 0 || e.validators !== void 0 || e.updateOn !== void 0)
}
var Ore = ( () => {
    class e {
        useNonNullable = !1;
        get nonNullable() {
            let n = new e;
            return n.useNonNullable = !0,
            n
        }
        group(n, r=null) {
            let i = this._reduceControls(n)
              , o = {};
            return $b(r) ? o = r : r !== null && (o.validators = r.validator,
            o.asyncValidators = r.asyncValidator),
            new va(i,o)
        }
        record(n, r=null) {
            let i = this._reduceControls(n);
            return new dv(i,r)
        }
        control(n, r, i) {
            let o = {};
            return this.useNonNullable ? ($b(r) ? o = r : (o.validators = r,
            o.asyncValidators = i),
            new qu(n,We(Te({}, o), {
                nonNullable: !0
            }))) : new qu(n,r,i)
        }
        array(n, r, i) {
            let o = n.map(s => this._createControl(s));
            return new fv(o,r,i)
        }
        _reduceControls(n) {
            let r = {};
            return Object.keys(n).forEach(i => {
                r[i] = this._createControl(n[i])
            }
            ),
            r
        }
        _createControl(n) {
            if (n instanceof qu)
                return n;
            if (n instanceof ya)
                return n;
            if (Array.isArray(n)) {
                let r = n[0]
                  , i = n.length > 1 ? n[1] : null
                  , o = n.length > 2 ? n[2] : null;
                return this.control(r, i, o)
            } else
                return this.control(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = me({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var _1 = ( () => {
    class e {
        static withConfig(n) {
            return {
                ngModule: e,
                providers: [{
                    provide: ns,
                    useValue: n.callSetDisabledState ?? Qu
                }]
            }
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275mod = eo({
            type: e
        });
        static \u0275inj = qi({
            imports: [v1]
        })
    }
    return e
}
)()
  , Are = ( () => {
    class e {
        static withConfig(n) {
            return {
                ngModule: e,
                providers: [{
                    provide: xv,
                    useValue: n.warnOnNgModelWithFormControl ?? "always"
                }, {
                    provide: ns,
                    useValue: n.callSetDisabledState ?? Qu
                }]
            }
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275mod = eo({
            type: e
        });
        static \u0275inj = qi({
            imports: [v1]
        })
    }
    return e
}
)();
function hU(e, t) {
    if (e & 1 && (B(0, "output", 1),
    Ke(1),
    ne()),
    e & 2) {
        let n = q();
        dr("for", n.inputBId()),
        se(),
        Rt(n.inputB())
    }
}
function pU(e, t) {
    if (e & 1 && (B(0, "output", 1),
    Ke(1),
    ne()),
    e & 2) {
        let n = q();
        dr("for", n.inputAId()),
        se(),
        Rt(n.inputA())
    }
}
var jre = ( () => {
    let t = class t {
        constructor() {
            this.unique = this.uuid(),
            this.isMobile = F(!1),
            this.range = F(),
            this.defaultRange = F(),
            this.increment = F(),
            this.rangeIndicatorColor = F("#ecebe9"),
            this.rangeBackgroundColor = F("#fff"),
            this.inputAId = F(`a-${this.unique}`),
            this.inputBId = F(`b-${this.unique}`),
            this.showLabels = F(!0),
            this.changeEvent = Au(),
            this.inputA = Fe(0),
            this.inputB = Fe(0),
            this.indices = Fe([0, 0]),
            this.options = [],
            this.datalistId = `l-${this.unique}`
        }
        ngOnInit() {
            this.options = this.createRange(),
            this.indices.set([0, this.options.length - 1]),
            this.inputA.set(this.defaultRange()?.[0] ?? this.range()?.[0]),
            this.inputB.set(this.defaultRange()?.[1] ?? this.range()?.[1])
        }
        changeInput(r, i) {
            this.indices.update(o => (o[i] = this.options.findIndex(s => s === r),
            o)),
            this.changeEvent.emit([this.inputA(), this.inputB()])
        }
        createRange() {
            let r = [];
            for (let i = 0; i <= +this.range()?.[1] - +this.range()?.[0]; i++)
                r.push(+this.range()?.[0] + i * +this.increment());
            return r
        }
        selectRange(r) {
            this.inputA.set(r[0]),
            this.inputB.set(r[1])
        }
        uuid() {
            return "xxxxxxxx".replace(/[xy]/g, r => {
                let i = Math.random() * 16 | 0;
                return (r === "x" ? i : i & 3 | 8).toString(16)
            }
            )
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["lib-range-slider"]],
        inputs: {
            isMobile: [1, "isMobile"],
            range: [1, "range"],
            defaultRange: [1, "defaultRange"],
            increment: [1, "increment"],
            rangeIndicatorColor: [1, "rangeIndicatorColor"],
            rangeBackgroundColor: [1, "rangeBackgroundColor"],
            inputAId: [1, "inputAId"],
            inputBId: [1, "inputBId"],
            showLabels: [1, "showLabels"]
        },
        outputs: {
            changeEvent: "changeEvent"
        },
        decls: 5,
        vars: 17,
        consts: [["dir", "ltr", 1, "wrapper"], [3, "for"], ["type", "range", 3, "ngModelChange", "id", "min", "max", "ngModel"], ["type", "range", 3, "ngModelChange", "id", "min", "max", "step", "ngModel"]],
        template: function(i, o) {
            if (i & 1 && (B(0, "div", 0),
            Ot(1, hU, 2, 2, "output", 1),
            B(2, "input", 2),
            re("ngModelChange", function(a) {
                return o.inputB.set(a),
                o.changeInput(a, 1)
            }),
            ne(),
            B(3, "input", 3),
            re("ngModelChange", function(a) {
                return o.inputA.set(a),
                o.changeInput(a, 0)
            }),
            ne(),
            Ot(4, pU, 2, 2, "output", 1),
            ne()),
            i & 2) {
                let s, a, l, c;
                BM(`
	--a:`, o.indices[1], `;
	--b:`, o.indices[0], `;
	--range-indicator-color:`, o.rangeIndicatorColor(), `;
	--range-background-color:`, o.rangeBackgroundColor(), ""),
                se(),
                mt(o.showLabels() ? 1 : -1),
                se(),
                dr("id", o.inputBId()),
                dr("min", (s = o.range()) == null ? null : s[0]),
                dr("max", (a = o.range()) == null ? null : a[1]),
                He("ngModel", o.inputB()),
                se(),
                dr("id", o.inputAId()),
                dr("min", (l = o.range()) == null ? null : l[0]),
                dr("max", (c = o.range()) == null ? null : c[1]),
                dr("step", o.increment()),
                He("ngModel", o.inputA()),
                se(),
                mt(o.showLabels() ? 4 : -1)
            }
        },
        dependencies: [_1, Jf, Dv, i1, wv],
        styles: [`.wrapper[_ngcontent-%COMP%]{position:relative;height:1rem;width:215px}.wrapper[_ngcontent-%COMP%]:before, .wrapper[_ngcontent-%COMP%]:after{height:1rem;border-radius:1rem;width:175px;position:absolute;right:20px;content:"";z-index:0}.wrapper[_ngcontent-%COMP%]:before{background:var(--range-background-color, #fff)}.wrapper[_ngcontent-%COMP%]:after{background:var(--range-indicator-color, #ecebe9);--mask: linear-gradient(90deg, red calc(var(--a) * 17.5px), transparent 0), linear-gradient(90deg, red calc(var(--b) * 17.5px), transparent 0);-webkit-mask:var(--mask);-webkit-mask-composite:xor;mask:var(--mask);mask-composite:exclude}.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   output[_ngcontent-%COMP%]{position:absolute;height:1rem}.wrapper[_ngcontent-%COMP%]   output[_ngcontent-%COMP%]{right:0;-webkit-user-select:none;user-select:none}.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] ~ output[_ngcontent-%COMP%]{right:unset;left:-2px}.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{right:20px;width:175px;background:none;pointer-events:none;z-index:1}.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-slider-thumb, .wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-slider-runnable-track{-webkit-appearance:none}.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-slider-runnable-track{border:none;padding:0;width:100%;height:1rem;background:none;color:transparent}.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-range-track{border:none;padding:0;width:100%;height:1rem;background:none;color:transparent}.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-slider-thumb{box-sizing:border-box;margin-top:-.25rem;border:none;width:1.5rem;height:1.5rem;border-radius:50%;box-shadow:0 1px .125em #4f688380,0 1px .25em #4f688380;background:#e3e8f1;transition:none;pointer-events:auto;cursor:pointer}.wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-range-thumb{box-sizing:border-box;margin-top:0;border:none;width:1.5rem;height:1.5rem;border-radius:50%;box-shadow:0 1px .125em #4f688380,0 1px .25em #4f688380;background:#e3e8f1;transition:none;pointer-events:auto;cursor:pointer}
/*# sourceMappingURL=range-slider.component-BZWTFIEA.css.map */`],
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
function Vn(e, t) {
    return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}
function Mv(e, t) {
    return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}
function rs(e) {
    let t, n, r;
    e.length !== 2 ? (t = Vn,
    n = (a, l) => Vn(e(a), l),
    r = (a, l) => e(a) - l) : (t = e === Vn || e === Mv ? e : mU,
    n = e,
    r = e);
    function i(a, l, c=0, f=a.length) {
        if (c < f) {
            if (t(l, l) !== 0)
                return f;
            do {
                let p = c + f >>> 1;
                n(a[p], l) < 0 ? c = p + 1 : f = p
            } while (c < f)
        }
        return c
    }
    function o(a, l, c=0, f=a.length) {
        if (c < f) {
            if (t(l, l) !== 0)
                return f;
            do {
                let p = c + f >>> 1;
                n(a[p], l) <= 0 ? c = p + 1 : f = p
            } while (c < f)
        }
        return c
    }
    function s(a, l, c=0, f=a.length) {
        let p = i(a, l, c, f - 1);
        return p > c && r(a[p - 1], l) > -r(a[p], l) ? p - 1 : p
    }
    return {
        left: i,
        center: s,
        right: o
    }
}
function mU() {
    return 0
}
function Xu(e) {
    return e === null ? NaN : +e
}
var w1 = rs(Vn)
  , D1 = w1.right
  , gU = w1.left
  , yU = rs(Xu).center
  , is = D1;
function x1(e, t) {
    let n, r;
    if (t === void 0)
        for (let i of e)
            i != null && (n === void 0 ? i >= i && (n = r = i) : (n > i && (n = i),
            r < i && (r = i)));
    else {
        let i = -1;
        for (let o of e)
            (o = t(o, ++i, e)) != null && (n === void 0 ? o >= o && (n = r = o) : (n > o && (n = o),
            r < o && (r = o)))
    }
    return [n, r]
}
var _a = class extends Map {
    constructor(t, n=wU) {
        if (super(),
        Object.defineProperties(this, {
            _intern: {
                value: new Map
            },
            _key: {
                value: n
            }
        }),
        t != null)
            for (let[r,i] of t)
                this.set(r, i)
    }
    get(t) {
        return super.get(C1(this, t))
    }
    has(t) {
        return super.has(C1(this, t))
    }
    set(t, n) {
        return super.set(vU(this, t), n)
    }
    delete(t) {
        return super.delete(_U(this, t))
    }
}
;
function C1({_intern: e, _key: t}, n) {
    let r = t(n);
    return e.has(r) ? e.get(r) : n
}
function vU({_intern: e, _key: t}, n) {
    let r = t(n);
    return e.has(r) ? e.get(r) : (e.set(r, n),
    n)
}
function _U({_intern: e, _key: t}, n) {
    let r = t(n);
    return e.has(r) && (n = e.get(r),
    e.delete(r)),
    n
}
function wU(e) {
    return e !== null && typeof e == "object" ? e.valueOf() : e
}
function bv(e, t) {
    return Array.from(t, n => e[n])
}
function M1(e, ...t) {
    if (typeof e[Symbol.iterator] != "function")
        throw new TypeError("values is not iterable");
    e = Array.from(e);
    let[n] = t;
    if (n && n.length !== 2 || t.length > 1) {
        let r = Uint32Array.from(e, (i, o) => o);
        return t.length > 1 ? (t = t.map(i => e.map(i)),
        r.sort( (i, o) => {
            for (let s of t) {
                let a = Iv(s[i], s[o]);
                if (a)
                    return a
            }
        }
        )) : (n = e.map(n),
        r.sort( (i, o) => Iv(n[i], n[o]))),
        bv(e, r)
    }
    return e.sort(DU(n))
}
function DU(e=Vn) {
    if (e === Vn)
        return Iv;
    if (typeof e != "function")
        throw new TypeError("compare is not a function");
    return (t, n) => {
        let r = e(t, n);
        return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0)
    }
}
function Iv(e, t) {
    return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0)
}
var xU = Math.sqrt(50)
  , CU = Math.sqrt(10)
  , MU = Math.sqrt(2);
function th(e, t, n) {
    let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), s = o >= xU ? 10 : o >= CU ? 5 : o >= MU ? 2 : 1, a, l, c;
    return i < 0 ? (c = Math.pow(10, -i) / s,
    a = Math.round(e * c),
    l = Math.round(t * c),
    a / c < e && ++a,
    l / c > t && --l,
    c = -c) : (c = Math.pow(10, i) * s,
    a = Math.round(e / c),
    l = Math.round(t / c),
    a * c < e && ++a,
    l * c > t && --l),
    l < a && .5 <= n && n < 2 ? th(e, t, n * 2) : [a, l, c]
}
function nh(e, t, n) {
    if (t = +t,
    e = +e,
    n = +n,
    !(n > 0))
        return [];
    if (e === t)
        return [e];
    let r = t < e
      , [i,o,s] = r ? th(t, e, n) : th(e, t, n);
    if (!(o >= i))
        return [];
    let a = o - i + 1
      , l = new Array(a);
    if (r)
        if (s < 0)
            for (let c = 0; c < a; ++c)
                l[c] = (o - c) / -s;
        else
            for (let c = 0; c < a; ++c)
                l[c] = (o - c) * s;
    else if (s < 0)
        for (let c = 0; c < a; ++c)
            l[c] = (i + c) / -s;
    else
        for (let c = 0; c < a; ++c)
            l[c] = (i + c) * s;
    return l
}
function Ju(e, t, n) {
    return t = +t,
    e = +e,
    n = +n,
    th(e, t, n)[2]
}
function wa(e, t, n) {
    t = +t,
    e = +e,
    n = +n;
    let r = t < e
      , i = r ? Ju(t, e, n) : Ju(e, t, n);
    return (r ? -1 : 1) * (i < 0 ? 1 / -i : i)
}
function b1(e, t) {
    let n;
    if (t === void 0)
        for (let r of e)
            r != null && (n < r || n === void 0 && r >= r) && (n = r);
    else {
        let r = -1;
        for (let i of e)
            (i = t(i, ++r, e)) != null && (n < i || n === void 0 && i >= i) && (n = i)
    }
    return n
}
function I1(e, t) {
    let n;
    if (t === void 0)
        for (let r of e)
            r != null && (n > r || n === void 0 && r >= r) && (n = r);
    else {
        let r = -1;
        for (let i of e)
            (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i)
    }
    return n
}
function Ev(e, t, n=Xu) {
    if (!(!(r = e.length) || isNaN(t = +t))) {
        if (t <= 0 || r < 2)
            return +n(e[0], 0, e);
        if (t >= 1)
            return +n(e[r - 1], r - 1, e);
        var r, i = (r - 1) * t, o = Math.floor(i), s = +n(e[o], o, e), a = +n(e[o + 1], o + 1, e);
        return s + (a - s) * (i - o)
    }
}
function Da(e, t, n) {
    e = +e,
    t = +t,
    n = (i = arguments.length) < 2 ? (t = e,
    e = 0,
    1) : i < 3 ? 1 : +n;
    for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(i); ++r < i; )
        o[r] = e + r * n;
    return o
}
function E1(e) {
    return e
}
var Sv = 1
  , rh = 2
  , Tv = 3
  , Ku = 4
  , S1 = 1e-6;
function bU(e) {
    return "translate(" + e + ",0)"
}
function IU(e) {
    return "translate(0," + e + ")"
}
function EU(e) {
    return t => +e(t)
}
function SU(e, t) {
    return t = Math.max(0, e.bandwidth() - t * 2) / 2,
    e.round() && (t = Math.round(t)),
    n => +e(n) + t
}
function TU() {
    return !this.__axis
}
function kv(e, t) {
    var n = []
      , r = null
      , i = null
      , o = 6
      , s = 6
      , a = 3
      , l = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5
      , c = e === Sv || e === Ku ? -1 : 1
      , f = e === Ku || e === rh ? "x" : "y"
      , p = e === Sv || e === Tv ? bU : IU;
    function m(y) {
        var v = r ?? (t.ticks ? t.ticks.apply(t, n) : t.domain())
          , w = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : E1)
          , x = Math.max(o, 0) + a
          , D = t.range()
          , I = +D[0] + l
          , T = +D[D.length - 1] + l
          , M = (t.bandwidth ? SU : EU)(t.copy(), l)
          , S = y.selection ? y.selection() : y
          , E = S.selectAll(".domain").data([null])
          , R = S.selectAll(".tick").data(v, t).order()
          , Z = R.exit()
          , ve = R.enter().append("g").attr("class", "tick")
          , we = R.select("line")
          , V = R.select("text");
        E = E.merge(E.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")),
        R = R.merge(ve),
        we = we.merge(ve.append("line").attr("stroke", "currentColor").attr(f + "2", c * o)),
        V = V.merge(ve.append("text").attr("fill", "currentColor").attr(f, c * x).attr("dy", e === Sv ? "0em" : e === Tv ? "0.71em" : "0.32em")),
        y !== S && (E = E.transition(y),
        R = R.transition(y),
        we = we.transition(y),
        V = V.transition(y),
        Z = Z.transition(y).attr("opacity", S1).attr("transform", function(xe) {
            return isFinite(xe = M(xe)) ? p(xe + l) : this.getAttribute("transform")
        }),
        ve.attr("opacity", S1).attr("transform", function(xe) {
            var $ = this.parentNode.__axis;
            return p(($ && isFinite($ = $(xe)) ? $ : M(xe)) + l)
        })),
        Z.remove(),
        E.attr("d", e === Ku || e === rh ? s ? "M" + c * s + "," + I + "H" + l + "V" + T + "H" + c * s : "M" + l + "," + I + "V" + T : s ? "M" + I + "," + c * s + "V" + l + "H" + T + "V" + c * s : "M" + I + "," + l + "H" + T),
        R.attr("opacity", 1).attr("transform", function(xe) {
            return p(M(xe) + l)
        }),
        we.attr(f + "2", c * o),
        V.attr(f, c * x).text(w),
        S.filter(TU).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === rh ? "start" : e === Ku ? "end" : "middle"),
        S.each(function() {
            this.__axis = M
        })
    }
    return m.scale = function(y) {
        return arguments.length ? (t = y,
        m) : t
    }
    ,
    m.ticks = function() {
        return n = Array.from(arguments),
        m
    }
    ,
    m.tickArguments = function(y) {
        return arguments.length ? (n = y == null ? [] : Array.from(y),
        m) : n.slice()
    }
    ,
    m.tickValues = function(y) {
        return arguments.length ? (r = y == null ? null : Array.from(y),
        m) : r && r.slice()
    }
    ,
    m.tickFormat = function(y) {
        return arguments.length ? (i = y,
        m) : i
    }
    ,
    m.tickSize = function(y) {
        return arguments.length ? (o = s = +y,
        m) : o
    }
    ,
    m.tickSizeInner = function(y) {
        return arguments.length ? (o = +y,
        m) : o
    }
    ,
    m.tickSizeOuter = function(y) {
        return arguments.length ? (s = +y,
        m) : s
    }
    ,
    m.tickPadding = function(y) {
        return arguments.length ? (a = +y,
        m) : a
    }
    ,
    m.offset = function(y) {
        return arguments.length ? (l = +y,
        m) : l
    }
    ,
    m
}
function kU(e) {
    return kv(rh, e)
}
function NU(e) {
    return kv(Tv, e)
}
function OU(e) {
    return kv(Ku, e)
}
var AU = {
    value: () => {}
};
function k1() {
    for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
        if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
            throw new Error("illegal type: " + r);
        n[r] = []
    }
    return new ih(n)
}
function ih(e) {
    this._ = e
}
function PU(e, t) {
    return e.trim().split(/^|\s+/).map(function(n) {
        var r = ""
          , i = n.indexOf(".");
        if (i >= 0 && (r = n.slice(i + 1),
        n = n.slice(0, i)),
        n && !t.hasOwnProperty(n))
            throw new Error("unknown type: " + n);
        return {
            type: n,
            name: r
        }
    })
}
ih.prototype = k1.prototype = {
    constructor: ih,
    on: function(e, t) {
        var n = this._, r = PU(e + "", n), i, o = -1, s = r.length;
        if (arguments.length < 2) {
            for (; ++o < s; )
                if ((i = (e = r[o]).type) && (i = FU(n[i], e.name)))
                    return i;
            return
        }
        if (t != null && typeof t != "function")
            throw new Error("invalid callback: " + t);
        for (; ++o < s; )
            if (i = (e = r[o]).type)
                n[i] = T1(n[i], e.name, t);
            else if (t == null)
                for (i in n)
                    n[i] = T1(n[i], e.name, null);
        return this
    },
    copy: function() {
        var e = {}
          , t = this._;
        for (var n in t)
            e[n] = t[n].slice();
        return new ih(e)
    },
    call: function(e, t) {
        if ((i = arguments.length - 2) > 0)
            for (var n = new Array(i), r = 0, i, o; r < i; ++r)
                n[r] = arguments[r + 2];
        if (!this._.hasOwnProperty(e))
            throw new Error("unknown type: " + e);
        for (o = this._[e],
        r = 0,
        i = o.length; r < i; ++r)
            o[r].value.apply(t, n)
    },
    apply: function(e, t, n) {
        if (!this._.hasOwnProperty(e))
            throw new Error("unknown type: " + e);
        for (var r = this._[e], i = 0, o = r.length; i < o; ++i)
            r[i].value.apply(t, n)
    }
};
function FU(e, t) {
    for (var n = 0, r = e.length, i; n < r; ++n)
        if ((i = e[n]).name === t)
            return i.value
}
function T1(e, t, n) {
    for (var r = 0, i = e.length; r < i; ++r)
        if (e[r].name === t) {
            e[r] = AU,
            e = e.slice(0, r).concat(e.slice(r + 1));
            break
        }
    return n != null && e.push({
        name: t,
        value: n
    }),
    e
}
var yi = k1;
var oh = "http://www.w3.org/1999/xhtml"
  , Nv = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: oh,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
function vi(e) {
    var t = e += ""
      , n = t.indexOf(":");
    return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)),
    Nv.hasOwnProperty(t) ? {
        space: Nv[t],
        local: e
    } : e
}
function RU(e) {
    return function() {
        var t = this.ownerDocument
          , n = this.namespaceURI;
        return n === oh && t.documentElement.namespaceURI === oh ? t.createElement(e) : t.createElementNS(n, e)
    }
}
function LU(e) {
    return function() {
        return this.ownerDocument.createElementNS(e.space, e.local)
    }
}
function sh(e) {
    var t = vi(e);
    return (t.local ? LU : RU)(t)
}
function VU() {}
function os(e) {
    return e == null ? VU : function() {
        return this.querySelector(e)
    }
}
function N1(e) {
    typeof e != "function" && (e = os(e));
    for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
        for (var o = t[i], s = o.length, a = r[i] = new Array(s), l, c, f = 0; f < s; ++f)
            (l = o[f]) && (c = e.call(l, l.__data__, f, o)) && ("__data__"in l && (c.__data__ = l.__data__),
            a[f] = c);
    return new ut(r,this._parents)
}
function el(e) {
    return e == null ? [] : Array.isArray(e) ? e : Array.from(e)
}
function jU() {
    return []
}
function tl(e) {
    return e == null ? jU : function() {
        return this.querySelectorAll(e)
    }
}
function BU(e) {
    return function() {
        return el(e.apply(this, arguments))
    }
}
function O1(e) {
    typeof e == "function" ? e = BU(e) : e = tl(e);
    for (var t = this._groups, n = t.length, r = [], i = [], o = 0; o < n; ++o)
        for (var s = t[o], a = s.length, l, c = 0; c < a; ++c)
            (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)),
            i.push(l));
    return new ut(r,i)
}
function nl(e) {
    return function() {
        return this.matches(e)
    }
}
function ah(e) {
    return function(t) {
        return t.matches(e)
    }
}
var HU = Array.prototype.find;
function UU(e) {
    return function() {
        return HU.call(this.children, e)
    }
}
function $U() {
    return this.firstElementChild
}
function A1(e) {
    return this.select(e == null ? $U : UU(typeof e == "function" ? e : ah(e)))
}
var YU = Array.prototype.filter;
function WU() {
    return Array.from(this.children)
}
function zU(e) {
    return function() {
        return YU.call(this.children, e)
    }
}
function P1(e) {
    return this.selectAll(e == null ? WU : zU(typeof e == "function" ? e : ah(e)))
}
function F1(e) {
    typeof e != "function" && (e = nl(e));
    for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
        for (var o = t[i], s = o.length, a = r[i] = [], l, c = 0; c < s; ++c)
            (l = o[c]) && e.call(l, l.__data__, c, o) && a.push(l);
    return new ut(r,this._parents)
}
function uh(e) {
    return new Array(e.length)
}
function R1() {
    return new ut(this._enter || this._groups.map(uh),this._parents)
}
function rl(e, t) {
    this.ownerDocument = e.ownerDocument,
    this.namespaceURI = e.namespaceURI,
    this._next = null,
    this._parent = e,
    this.__data__ = t
}
rl.prototype = {
    constructor: rl,
    appendChild: function(e) {
        return this._parent.insertBefore(e, this._next)
    },
    insertBefore: function(e, t) {
        return this._parent.insertBefore(e, t)
    },
    querySelector: function(e) {
        return this._parent.querySelector(e)
    },
    querySelectorAll: function(e) {
        return this._parent.querySelectorAll(e)
    }
};
function L1(e) {
    return function() {
        return e
    }
}
function GU(e, t, n, r, i, o) {
    for (var s = 0, a, l = t.length, c = o.length; s < c; ++s)
        (a = t[s]) ? (a.__data__ = o[s],
        r[s] = a) : n[s] = new rl(e,o[s]);
    for (; s < l; ++s)
        (a = t[s]) && (i[s] = a)
}
function qU(e, t, n, r, i, o, s) {
    var a, l, c = new Map, f = t.length, p = o.length, m = new Array(f), y;
    for (a = 0; a < f; ++a)
        (l = t[a]) && (m[a] = y = s.call(l, l.__data__, a, t) + "",
        c.has(y) ? i[a] = l : c.set(y, l));
    for (a = 0; a < p; ++a)
        y = s.call(e, o[a], a, o) + "",
        (l = c.get(y)) ? (r[a] = l,
        l.__data__ = o[a],
        c.delete(y)) : n[a] = new rl(e,o[a]);
    for (a = 0; a < f; ++a)
        (l = t[a]) && c.get(m[a]) === l && (i[a] = l)
}
function ZU(e) {
    return e.__data__
}
function V1(e, t) {
    if (!arguments.length)
        return Array.from(this, ZU);
    var n = t ? qU : GU
      , r = this._parents
      , i = this._groups;
    typeof e != "function" && (e = L1(e));
    for (var o = i.length, s = new Array(o), a = new Array(o), l = new Array(o), c = 0; c < o; ++c) {
        var f = r[c]
          , p = i[c]
          , m = p.length
          , y = QU(e.call(f, f && f.__data__, c, r))
          , v = y.length
          , w = a[c] = new Array(v)
          , x = s[c] = new Array(v)
          , D = l[c] = new Array(m);
        n(f, p, w, x, D, y, t);
        for (var I = 0, T = 0, M, S; I < v; ++I)
            if (M = w[I]) {
                for (I >= T && (T = I + 1); !(S = x[T]) && ++T < v; )
                    ;
                M._next = S || null
            }
    }
    return s = new ut(s,r),
    s._enter = a,
    s._exit = l,
    s
}
function QU(e) {
    return typeof e == "object" && "length"in e ? e : Array.from(e)
}
function j1() {
    return new ut(this._exit || this._groups.map(uh),this._parents)
}
function B1(e, t, n) {
    var r = this.enter()
      , i = this
      , o = this.exit();
    return typeof e == "function" ? (r = e(r),
    r && (r = r.selection())) : r = r.append(e + ""),
    t != null && (i = t(i),
    i && (i = i.selection())),
    n == null ? o.remove() : n(o),
    r && i ? r.merge(i).order() : i
}
function H1(e) {
    for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, o = r.length, s = Math.min(i, o), a = new Array(i), l = 0; l < s; ++l)
        for (var c = n[l], f = r[l], p = c.length, m = a[l] = new Array(p), y, v = 0; v < p; ++v)
            (y = c[v] || f[v]) && (m[v] = y);
    for (; l < i; ++l)
        a[l] = n[l];
    return new ut(a,this._parents)
}
function U1() {
    for (var e = this._groups, t = -1, n = e.length; ++t < n; )
        for (var r = e[t], i = r.length - 1, o = r[i], s; --i >= 0; )
            (s = r[i]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o),
            o = s);
    return this
}
function $1(e) {
    e || (e = XU);
    function t(p, m) {
        return p && m ? e(p.__data__, m.__data__) : !p - !m
    }
    for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var s = n[o], a = s.length, l = i[o] = new Array(a), c, f = 0; f < a; ++f)
            (c = s[f]) && (l[f] = c);
        l.sort(t)
    }
    return new ut(i,this._parents).order()
}
function XU(e, t) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}
function Y1() {
    var e = arguments[0];
    return arguments[0] = this,
    e.apply(null, arguments),
    this
}
function W1() {
    return Array.from(this)
}
function z1() {
    for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
        for (var r = e[t], i = 0, o = r.length; i < o; ++i) {
            var s = r[i];
            if (s)
                return s
        }
    return null
}
function G1() {
    let e = 0;
    for (let t of this)
        ++e;
    return e
}
function q1() {
    return !this.node()
}
function Z1(e) {
    for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
        for (var i = t[n], o = 0, s = i.length, a; o < s; ++o)
            (a = i[o]) && e.call(a, a.__data__, o, i);
    return this
}
function JU(e) {
    return function() {
        this.removeAttribute(e)
    }
}
function KU(e) {
    return function() {
        this.removeAttributeNS(e.space, e.local)
    }
}
function e$(e, t) {
    return function() {
        this.setAttribute(e, t)
    }
}
function t$(e, t) {
    return function() {
        this.setAttributeNS(e.space, e.local, t)
    }
}
function n$(e, t) {
    return function() {
        var n = t.apply(this, arguments);
        n == null ? this.removeAttribute(e) : this.setAttribute(e, n)
    }
}
function r$(e, t) {
    return function() {
        var n = t.apply(this, arguments);
        n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n)
    }
}
function Q1(e, t) {
    var n = vi(e);
    if (arguments.length < 2) {
        var r = this.node();
        return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n)
    }
    return this.each((t == null ? n.local ? KU : JU : typeof t == "function" ? n.local ? r$ : n$ : n.local ? t$ : e$)(n, t))
}
function lh(e) {
    return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView
}
function i$(e) {
    return function() {
        this.style.removeProperty(e)
    }
}
function o$(e, t, n) {
    return function() {
        this.style.setProperty(e, t, n)
    }
}
function s$(e, t, n) {
    return function() {
        var r = t.apply(this, arguments);
        r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n)
    }
}
function X1(e, t, n) {
    return arguments.length > 1 ? this.each((t == null ? i$ : typeof t == "function" ? s$ : o$)(e, t, n ?? "")) : ho(this.node(), e)
}
function ho(e, t) {
    return e.style.getPropertyValue(t) || lh(e).getComputedStyle(e, null).getPropertyValue(t)
}
function a$(e) {
    return function() {
        delete this[e]
    }
}
function u$(e, t) {
    return function() {
        this[e] = t
    }
}
function l$(e, t) {
    return function() {
        var n = t.apply(this, arguments);
        n == null ? delete this[e] : this[e] = n
    }
}
function J1(e, t) {
    return arguments.length > 1 ? this.each((t == null ? a$ : typeof t == "function" ? l$ : u$)(e, t)) : this.node()[e]
}
function K1(e) {
    return e.trim().split(/^|\s+/)
}
function Ov(e) {
    return e.classList || new eI(e)
}
function eI(e) {
    this._node = e,
    this._names = K1(e.getAttribute("class") || "")
}
eI.prototype = {
    add: function(e) {
        var t = this._names.indexOf(e);
        t < 0 && (this._names.push(e),
        this._node.setAttribute("class", this._names.join(" ")))
    },
    remove: function(e) {
        var t = this._names.indexOf(e);
        t >= 0 && (this._names.splice(t, 1),
        this._node.setAttribute("class", this._names.join(" ")))
    },
    contains: function(e) {
        return this._names.indexOf(e) >= 0
    }
};
function tI(e, t) {
    for (var n = Ov(e), r = -1, i = t.length; ++r < i; )
        n.add(t[r])
}
function nI(e, t) {
    for (var n = Ov(e), r = -1, i = t.length; ++r < i; )
        n.remove(t[r])
}
function c$(e) {
    return function() {
        tI(this, e)
    }
}
function d$(e) {
    return function() {
        nI(this, e)
    }
}
function f$(e, t) {
    return function() {
        (t.apply(this, arguments) ? tI : nI)(this, e)
    }
}
function rI(e, t) {
    var n = K1(e + "");
    if (arguments.length < 2) {
        for (var r = Ov(this.node()), i = -1, o = n.length; ++i < o; )
            if (!r.contains(n[i]))
                return !1;
        return !0
    }
    return this.each((typeof t == "function" ? f$ : t ? c$ : d$)(n, t))
}
function h$() {
    this.textContent = ""
}
function p$(e) {
    return function() {
        this.textContent = e
    }
}
function m$(e) {
    return function() {
        var t = e.apply(this, arguments);
        this.textContent = t ?? ""
    }
}
function iI(e) {
    return arguments.length ? this.each(e == null ? h$ : (typeof e == "function" ? m$ : p$)(e)) : this.node().textContent
}
function g$() {
    this.innerHTML = ""
}
function y$(e) {
    return function() {
        this.innerHTML = e
    }
}
function v$(e) {
    return function() {
        var t = e.apply(this, arguments);
        this.innerHTML = t ?? ""
    }
}
function oI(e) {
    return arguments.length ? this.each(e == null ? g$ : (typeof e == "function" ? v$ : y$)(e)) : this.node().innerHTML
}
function _$() {
    this.nextSibling && this.parentNode.appendChild(this)
}
function sI() {
    return this.each(_$)
}
function w$() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
}
function aI() {
    return this.each(w$)
}
function uI(e) {
    var t = typeof e == "function" ? e : sh(e);
    return this.select(function() {
        return this.appendChild(t.apply(this, arguments))
    })
}
function D$() {
    return null
}
function lI(e, t) {
    var n = typeof e == "function" ? e : sh(e)
      , r = t == null ? D$ : typeof t == "function" ? t : os(t);
    return this.select(function() {
        return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null)
    })
}
function x$() {
    var e = this.parentNode;
    e && e.removeChild(this)
}
function cI() {
    return this.each(x$)
}
function C$() {
    var e = this.cloneNode(!1)
      , t = this.parentNode;
    return t ? t.insertBefore(e, this.nextSibling) : e
}
function M$() {
    var e = this.cloneNode(!0)
      , t = this.parentNode;
    return t ? t.insertBefore(e, this.nextSibling) : e
}
function dI(e) {
    return this.select(e ? M$ : C$)
}
function fI(e) {
    return arguments.length ? this.property("__data__", e) : this.node().__data__
}
function b$(e) {
    return function(t) {
        e.call(this, t, this.__data__)
    }
}
function I$(e) {
    return e.trim().split(/^|\s+/).map(function(t) {
        var n = ""
          , r = t.indexOf(".");
        return r >= 0 && (n = t.slice(r + 1),
        t = t.slice(0, r)),
        {
            type: t,
            name: n
        }
    })
}
function E$(e) {
    return function() {
        var t = this.__on;
        if (t) {
            for (var n = 0, r = -1, i = t.length, o; n < i; ++n)
                o = t[n],
                (!e.type || o.type === e.type) && o.name === e.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++r] = o;
            ++r ? t.length = r : delete this.__on
        }
    }
}
function S$(e, t, n) {
    return function() {
        var r = this.__on, i, o = b$(t);
        if (r) {
            for (var s = 0, a = r.length; s < a; ++s)
                if ((i = r[s]).type === e.type && i.name === e.name) {
                    this.removeEventListener(i.type, i.listener, i.options),
                    this.addEventListener(i.type, i.listener = o, i.options = n),
                    i.value = t;
                    return
                }
        }
        this.addEventListener(e.type, o, n),
        i = {
            type: e.type,
            name: e.name,
            value: t,
            listener: o,
            options: n
        },
        r ? r.push(i) : this.__on = [i]
    }
}
function hI(e, t, n) {
    var r = I$(e + ""), i, o = r.length, s;
    if (arguments.length < 2) {
        var a = this.node().__on;
        if (a) {
            for (var l = 0, c = a.length, f; l < c; ++l)
                for (i = 0,
                f = a[l]; i < o; ++i)
                    if ((s = r[i]).type === f.type && s.name === f.name)
                        return f.value
        }
        return
    }
    for (a = t ? S$ : E$,
    i = 0; i < o; ++i)
        this.each(a(r[i], t, n));
    return this
}
function pI(e, t, n) {
    var r = lh(e)
      , i = r.CustomEvent;
    typeof i == "function" ? i = new i(t,n) : (i = r.document.createEvent("Event"),
    n ? (i.initEvent(t, n.bubbles, n.cancelable),
    i.detail = n.detail) : i.initEvent(t, !1, !1)),
    e.dispatchEvent(i)
}
function T$(e, t) {
    return function() {
        return pI(this, e, t)
    }
}
function k$(e, t) {
    return function() {
        return pI(this, e, t.apply(this, arguments))
    }
}
function mI(e, t) {
    return this.each((typeof t == "function" ? k$ : T$)(e, t))
}
function *gI() {
    for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
        for (var r = e[t], i = 0, o = r.length, s; i < o; ++i)
            (s = r[i]) && (yield s)
}
var il = [null];
function ut(e, t) {
    this._groups = e,
    this._parents = t
}
function yI() {
    return new ut([[document.documentElement]],il)
}
function N$() {
    return this
}
ut.prototype = yI.prototype = {
    constructor: ut,
    select: N1,
    selectAll: O1,
    selectChild: A1,
    selectChildren: P1,
    filter: F1,
    data: V1,
    enter: R1,
    exit: j1,
    join: B1,
    merge: H1,
    selection: N$,
    order: U1,
    sort: $1,
    call: Y1,
    nodes: W1,
    node: z1,
    size: G1,
    empty: q1,
    each: Z1,
    attr: Q1,
    style: X1,
    property: J1,
    classed: rI,
    text: iI,
    html: oI,
    raise: sI,
    lower: aI,
    append: uI,
    insert: lI,
    remove: cI,
    clone: dI,
    datum: fI,
    on: hI,
    dispatch: mI,
    [Symbol.iterator]: gI
};
var _i = yI;
function wt(e) {
    return typeof e == "string" ? new ut([[document.querySelector(e)]],[document.documentElement]) : new ut([[e]],il)
}
function vI(e) {
    let t;
    for (; t = e.sourceEvent; )
        e = t;
    return e
}
function qn(e, t) {
    if (e = vI(e),
    t === void 0 && (t = e.currentTarget),
    t) {
        var n = t.ownerSVGElement || t;
        if (n.createSVGPoint) {
            var r = n.createSVGPoint();
            return r.x = e.clientX,
            r.y = e.clientY,
            r = r.matrixTransform(t.getScreenCTM().inverse()),
            [r.x, r.y]
        }
        if (t.getBoundingClientRect) {
            var i = t.getBoundingClientRect();
            return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop]
        }
    }
    return [e.pageX, e.pageY]
}
function O$(e) {
    return typeof e == "string" ? new ut([document.querySelectorAll(e)],[document.documentElement]) : new ut([el(e)],il)
}
var _I = {
    passive: !1
}
  , ss = {
    capture: !0,
    passive: !1
};
function ch(e) {
    e.stopImmediatePropagation()
}
function po(e) {
    e.preventDefault(),
    e.stopImmediatePropagation()
}
function ol(e) {
    var t = e.document.documentElement
      , n = wt(e).on("dragstart.drag", po, ss);
    "onselectstart"in t ? n.on("selectstart.drag", po, ss) : (t.__noselect = t.style.MozUserSelect,
    t.style.MozUserSelect = "none")
}
function sl(e, t) {
    var n = e.document.documentElement
      , r = wt(e).on("dragstart.drag", null);
    t && (r.on("click.drag", po, ss),
    setTimeout(function() {
        r.on("click.drag", null)
    }, 0)),
    "onselectstart"in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect,
    delete n.__noselect)
}
var al = e => () => e;
function ul(e, {sourceEvent: t, subject: n, target: r, identifier: i, active: o, x: s, y: a, dx: l, dy: c, dispatch: f}) {
    Object.defineProperties(this, {
        type: {
            value: e,
            enumerable: !0,
            configurable: !0
        },
        sourceEvent: {
            value: t,
            enumerable: !0,
            configurable: !0
        },
        subject: {
            value: n,
            enumerable: !0,
            configurable: !0
        },
        target: {
            value: r,
            enumerable: !0,
            configurable: !0
        },
        identifier: {
            value: i,
            enumerable: !0,
            configurable: !0
        },
        active: {
            value: o,
            enumerable: !0,
            configurable: !0
        },
        x: {
            value: s,
            enumerable: !0,
            configurable: !0
        },
        y: {
            value: a,
            enumerable: !0,
            configurable: !0
        },
        dx: {
            value: l,
            enumerable: !0,
            configurable: !0
        },
        dy: {
            value: c,
            enumerable: !0,
            configurable: !0
        },
        _: {
            value: f
        }
    })
}
ul.prototype.on = function() {
    var e = this._.on.apply(this._, arguments);
    return e === this._ ? this : e
}
;
function A$(e) {
    return !e.ctrlKey && !e.button
}
function P$() {
    return this.parentNode
}
function F$(e, t) {
    return t ?? {
        x: e.x,
        y: e.y
    }
}
function R$() {
    return navigator.maxTouchPoints || "ontouchstart"in this
}
function L$() {
    var e = A$, t = P$, n = F$, r = R$, i = {}, o = yi("start", "drag", "end"), s = 0, a, l, c, f, p = 0;
    function m(M) {
        M.on("mousedown.drag", y).filter(r).on("touchstart.drag", x).on("touchmove.drag", D, _I).on("touchend.drag touchcancel.drag", I).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
    }
    function y(M, S) {
        if (!(f || !e.call(this, M, S))) {
            var E = T(this, t.call(this, M, S), M, S, "mouse");
            E && (wt(M.view).on("mousemove.drag", v, ss).on("mouseup.drag", w, ss),
            ol(M.view),
            ch(M),
            c = !1,
            a = M.clientX,
            l = M.clientY,
            E("start", M))
        }
    }
    function v(M) {
        if (po(M),
        !c) {
            var S = M.clientX - a
              , E = M.clientY - l;
            c = S * S + E * E > p
        }
        i.mouse("drag", M)
    }
    function w(M) {
        wt(M.view).on("mousemove.drag mouseup.drag", null),
        sl(M.view, c),
        po(M),
        i.mouse("end", M)
    }
    function x(M, S) {
        if (e.call(this, M, S)) {
            var E = M.changedTouches, R = t.call(this, M, S), Z = E.length, ve, we;
            for (ve = 0; ve < Z; ++ve)
                (we = T(this, R, M, S, E[ve].identifier, E[ve])) && (ch(M),
                we("start", M, E[ve]))
        }
    }
    function D(M) {
        var S = M.changedTouches, E = S.length, R, Z;
        for (R = 0; R < E; ++R)
            (Z = i[S[R].identifier]) && (po(M),
            Z("drag", M, S[R]))
    }
    function I(M) {
        var S = M.changedTouches, E = S.length, R, Z;
        for (f && clearTimeout(f),
        f = setTimeout(function() {
            f = null
        }, 500),
        R = 0; R < E; ++R)
            (Z = i[S[R].identifier]) && (ch(M),
            Z("end", M, S[R]))
    }
    function T(M, S, E, R, Z, ve) {
        var we = o.copy(), V = qn(ve || E, S), xe, $, b;
        if ((b = n.call(M, new ul("beforestart",{
            sourceEvent: E,
            target: m,
            identifier: Z,
            active: s,
            x: V[0],
            y: V[1],
            dx: 0,
            dy: 0,
            dispatch: we
        }), R)) != null)
            return xe = b.x - V[0] || 0,
            $ = b.y - V[1] || 0,
            function H(N, W, X) {
                var te = V, de;
                switch (N) {
                case "start":
                    i[Z] = H,
                    de = s++;
                    break;
                case "end":
                    delete i[Z],
                    --s;
                case "drag":
                    V = qn(X || W, S),
                    de = s;
                    break
                }
                we.call(N, M, new ul(N,{
                    sourceEvent: W,
                    subject: b,
                    target: m,
                    identifier: Z,
                    active: de,
                    x: V[0] + xe,
                    y: V[1] + $,
                    dx: V[0] - te[0],
                    dy: V[1] - te[1],
                    dispatch: we
                }), R)
            }
    }
    return m.filter = function(M) {
        return arguments.length ? (e = typeof M == "function" ? M : al(!!M),
        m) : e
    }
    ,
    m.container = function(M) {
        return arguments.length ? (t = typeof M == "function" ? M : al(M),
        m) : t
    }
    ,
    m.subject = function(M) {
        return arguments.length ? (n = typeof M == "function" ? M : al(M),
        m) : n
    }
    ,
    m.touchable = function(M) {
        return arguments.length ? (r = typeof M == "function" ? M : al(!!M),
        m) : r
    }
    ,
    m.on = function() {
        var M = o.on.apply(o, arguments);
        return M === o ? m : M
    }
    ,
    m.clickDistance = function(M) {
        return arguments.length ? (p = (M = +M) * M,
        m) : Math.sqrt(p)
    }
    ,
    m
}
function dh(e, t, n) {
    e.prototype = t.prototype = n,
    n.constructor = e
}
function Av(e, t) {
    var n = Object.create(e.prototype);
    for (var r in t)
        n[r] = t[r];
    return n
}
function dl() {}
var ll = .7
  , ph = 1 / ll
  , xa = "\\s*([+-]?\\d+)\\s*"
  , cl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*"
  , Yr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
  , V$ = /^#([0-9a-f]{3,8})$/
  , j$ = new RegExp(`^rgb\\(${xa},${xa},${xa}\\)$`)
  , B$ = new RegExp(`^rgb\\(${Yr},${Yr},${Yr}\\)$`)
  , H$ = new RegExp(`^rgba\\(${xa},${xa},${xa},${cl}\\)$`)
  , U$ = new RegExp(`^rgba\\(${Yr},${Yr},${Yr},${cl}\\)$`)
  , $$ = new RegExp(`^hsl\\(${cl},${Yr},${Yr}\\)$`)
  , Y$ = new RegExp(`^hsla\\(${cl},${Yr},${Yr},${cl}\\)$`)
  , wI = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
dh(dl, mr, {
    copy(e) {
        return Object.assign(new this.constructor, this, e)
    },
    displayable() {
        return this.rgb().displayable()
    },
    hex: DI,
    formatHex: DI,
    formatHex8: W$,
    formatHsl: z$,
    formatRgb: xI,
    toString: xI
});
function DI() {
    return this.rgb().formatHex()
}
function W$() {
    return this.rgb().formatHex8()
}
function z$() {
    return SI(this).formatHsl()
}
function xI() {
    return this.rgb().formatRgb()
}
function mr(e) {
    var t, n;
    return e = (e + "").trim().toLowerCase(),
    (t = V$.exec(e)) ? (n = t[1].length,
    t = parseInt(t[1], 16),
    n === 6 ? CI(t) : n === 3 ? new bn(t >> 8 & 15 | t >> 4 & 240,t >> 4 & 15 | t & 240,(t & 15) << 4 | t & 15,1) : n === 8 ? fh(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? fh(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = j$.exec(e)) ? new bn(t[1],t[2],t[3],1) : (t = B$.exec(e)) ? new bn(t[1] * 255 / 100,t[2] * 255 / 100,t[3] * 255 / 100,1) : (t = H$.exec(e)) ? fh(t[1], t[2], t[3], t[4]) : (t = U$.exec(e)) ? fh(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = $$.exec(e)) ? II(t[1], t[2] / 100, t[3] / 100, 1) : (t = Y$.exec(e)) ? II(t[1], t[2] / 100, t[3] / 100, t[4]) : wI.hasOwnProperty(e) ? CI(wI[e]) : e === "transparent" ? new bn(NaN,NaN,NaN,0) : null
}
function CI(e) {
    return new bn(e >> 16 & 255,e >> 8 & 255,e & 255,1)
}
function fh(e, t, n, r) {
    return r <= 0 && (e = t = n = NaN),
    new bn(e,t,n,r)
}
function G$(e) {
    return e instanceof dl || (e = mr(e)),
    e ? (e = e.rgb(),
    new bn(e.r,e.g,e.b,e.opacity)) : new bn
}
function mo(e, t, n, r) {
    return arguments.length === 1 ? G$(e) : new bn(e,t,n,r ?? 1)
}
function bn(e, t, n, r) {
    this.r = +e,
    this.g = +t,
    this.b = +n,
    this.opacity = +r
}
dh(bn, mo, Av(dl, {
    brighter(e) {
        return e = e == null ? ph : Math.pow(ph, e),
        new bn(this.r * e,this.g * e,this.b * e,this.opacity)
    },
    darker(e) {
        return e = e == null ? ll : Math.pow(ll, e),
        new bn(this.r * e,this.g * e,this.b * e,this.opacity)
    },
    rgb() {
        return this
    },
    clamp() {
        return new bn(us(this.r),us(this.g),us(this.b),mh(this.opacity))
    },
    displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
    },
    hex: MI,
    formatHex: MI,
    formatHex8: q$,
    formatRgb: bI,
    toString: bI
}));
function MI() {
    return `#${as(this.r)}${as(this.g)}${as(this.b)}`
}
function q$() {
    return `#${as(this.r)}${as(this.g)}${as(this.b)}${as((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
}
function bI() {
    let e = mh(this.opacity);
    return `${e === 1 ? "rgb(" : "rgba("}${us(this.r)}, ${us(this.g)}, ${us(this.b)}${e === 1 ? ")" : `, ${e})`}`
}
function mh(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
}
function us(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0))
}
function as(e) {
    return e = us(e),
    (e < 16 ? "0" : "") + e.toString(16)
}
function II(e, t, n, r) {
    return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN),
    new pr(e,t,n,r)
}
function SI(e) {
    if (e instanceof pr)
        return new pr(e.h,e.s,e.l,e.opacity);
    if (e instanceof dl || (e = mr(e)),
    !e)
        return new pr;
    if (e instanceof pr)
        return e;
    e = e.rgb();
    var t = e.r / 255
      , n = e.g / 255
      , r = e.b / 255
      , i = Math.min(t, n, r)
      , o = Math.max(t, n, r)
      , s = NaN
      , a = o - i
      , l = (o + i) / 2;
    return a ? (t === o ? s = (n - r) / a + (n < r) * 6 : n === o ? s = (r - t) / a + 2 : s = (t - n) / a + 4,
    a /= l < .5 ? o + i : 2 - o - i,
    s *= 60) : a = l > 0 && l < 1 ? 0 : s,
    new pr(s,a,l,e.opacity)
}
function TI(e, t, n, r) {
    return arguments.length === 1 ? SI(e) : new pr(e,t,n,r ?? 1)
}
function pr(e, t, n, r) {
    this.h = +e,
    this.s = +t,
    this.l = +n,
    this.opacity = +r
}
dh(pr, TI, Av(dl, {
    brighter(e) {
        return e = e == null ? ph : Math.pow(ph, e),
        new pr(this.h,this.s,this.l * e,this.opacity)
    },
    darker(e) {
        return e = e == null ? ll : Math.pow(ll, e),
        new pr(this.h,this.s,this.l * e,this.opacity)
    },
    rgb() {
        var e = this.h % 360 + (this.h < 0) * 360
          , t = isNaN(e) || isNaN(this.s) ? 0 : this.s
          , n = this.l
          , r = n + (n < .5 ? n : 1 - n) * t
          , i = 2 * n - r;
        return new bn(Pv(e >= 240 ? e - 240 : e + 120, i, r),Pv(e, i, r),Pv(e < 120 ? e + 240 : e - 120, i, r),this.opacity)
    },
    clamp() {
        return new pr(EI(this.h),hh(this.s),hh(this.l),mh(this.opacity))
    },
    displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
    },
    formatHsl() {
        let e = mh(this.opacity);
        return `${e === 1 ? "hsl(" : "hsla("}${EI(this.h)}, ${hh(this.s) * 100}%, ${hh(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`
    }
}));
function EI(e) {
    return e = (e || 0) % 360,
    e < 0 ? e + 360 : e
}
function hh(e) {
    return Math.max(0, Math.min(1, e || 0))
}
function Pv(e, t, n) {
    return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255
}
function Fv(e, t, n, r, i) {
    var o = e * e
      , s = o * e;
    return ((1 - 3 * e + 3 * o - s) * t + (4 - 6 * o + 3 * s) * n + (1 + 3 * e + 3 * o - 3 * s) * r + s * i) / 6
}
function kI(e) {
    var t = e.length - 1;
    return function(n) {
        var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1,
        t - 1) : Math.floor(n * t)
          , i = e[r]
          , o = e[r + 1]
          , s = r > 0 ? e[r - 1] : 2 * i - o
          , a = r < t - 1 ? e[r + 2] : 2 * o - i;
        return Fv((n - r / t) * t, s, i, o, a)
    }
}
function NI(e) {
    var t = e.length;
    return function(n) {
        var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t)
          , i = e[(r + t - 1) % t]
          , o = e[r % t]
          , s = e[(r + 1) % t]
          , a = e[(r + 2) % t];
        return Fv((n - r / t) * t, i, o, s, a)
    }
}
var fl = e => () => e;
function Z$(e, t) {
    return function(n) {
        return e + n * t
    }
}
function Q$(e, t, n) {
    return e = Math.pow(e, n),
    t = Math.pow(t, n) - e,
    n = 1 / n,
    function(r) {
        return Math.pow(e + r * t, n)
    }
}
function OI(e) {
    return (e = +e) == 1 ? gh : function(t, n) {
        return n - t ? Q$(t, n, e) : fl(isNaN(t) ? n : t)
    }
}
function gh(e, t) {
    var n = t - e;
    return n ? Z$(e, n) : fl(isNaN(e) ? t : e)
}
var ls = function e(t) {
    var n = OI(t);
    function r(i, o) {
        var s = n((i = mo(i)).r, (o = mo(o)).r)
          , a = n(i.g, o.g)
          , l = n(i.b, o.b)
          , c = gh(i.opacity, o.opacity);
        return function(f) {
            return i.r = s(f),
            i.g = a(f),
            i.b = l(f),
            i.opacity = c(f),
            i + ""
        }
    }
    return r.gamma = e,
    r
}(1);
function AI(e) {
    return function(t) {
        var n = t.length, r = new Array(n), i = new Array(n), o = new Array(n), s, a;
        for (s = 0; s < n; ++s)
            a = mo(t[s]),
            r[s] = a.r || 0,
            i[s] = a.g || 0,
            o[s] = a.b || 0;
        return r = e(r),
        i = e(i),
        o = e(o),
        a.opacity = 1,
        function(l) {
            return a.r = r(l),
            a.g = i(l),
            a.b = o(l),
            a + ""
        }
    }
}
var X$ = AI(kI)
  , J$ = AI(NI);
function PI(e, t) {
    t || (t = []);
    var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
    return function(o) {
        for (i = 0; i < n; ++i)
            r[i] = e[i] * (1 - o) + t[i] * o;
        return r
    }
}
function FI(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView)
}
function RI(e, t) {
    var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = new Array(r), o = new Array(n), s;
    for (s = 0; s < r; ++s)
        i[s] = wi(e[s], t[s]);
    for (; s < n; ++s)
        o[s] = t[s];
    return function(a) {
        for (s = 0; s < r; ++s)
            o[s] = i[s](a);
        return o
    }
}
function LI(e, t) {
    var n = new Date;
    return e = +e,
    t = +t,
    function(r) {
        return n.setTime(e * (1 - r) + t * r),
        n
    }
}
function Gt(e, t) {
    return e = +e,
    t = +t,
    function(n) {
        return e * (1 - n) + t * n
    }
}
function VI(e, t) {
    var n = {}, r = {}, i;
    (e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {});
    for (i in t)
        i in e ? n[i] = wi(e[i], t[i]) : r[i] = t[i];
    return function(o) {
        for (i in n)
            r[i] = n[i](o);
        return r
    }
}
var Lv = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
  , Rv = new RegExp(Lv.source,"g");
function K$(e) {
    return function() {
        return e
    }
}
function e4(e) {
    return function(t) {
        return e(t) + ""
    }
}
function hl(e, t) {
    var n = Lv.lastIndex = Rv.lastIndex = 0, r, i, o, s = -1, a = [], l = [];
    for (e = e + "",
    t = t + ""; (r = Lv.exec(e)) && (i = Rv.exec(t)); )
        (o = i.index) > n && (o = t.slice(n, o),
        a[s] ? a[s] += o : a[++s] = o),
        (r = r[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null,
        l.push({
            i: s,
            x: Gt(r, i)
        })),
        n = Rv.lastIndex;
    return n < t.length && (o = t.slice(n),
    a[s] ? a[s] += o : a[++s] = o),
    a.length < 2 ? l[0] ? e4(l[0].x) : K$(t) : (t = l.length,
    function(c) {
        for (var f = 0, p; f < t; ++f)
            a[(p = l[f]).i] = p.x(c);
        return a.join("")
    }
    )
}
function wi(e, t) {
    var n = typeof t, r;
    return t == null || n === "boolean" ? fl(t) : (n === "number" ? Gt : n === "string" ? (r = mr(t)) ? (t = r,
    ls) : hl : t instanceof mr ? ls : t instanceof Date ? LI : FI(t) ? PI : Array.isArray(t) ? RI : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? VI : Gt)(e, t)
}
function Vv(e, t) {
    return e = +e,
    t = +t,
    function(n) {
        return Math.round(e * (1 - n) + t * n)
    }
}
var jI = 180 / Math.PI
  , yh = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function jv(e, t, n, r, i, o) {
    var s, a, l;
    return (s = Math.sqrt(e * e + t * t)) && (e /= s,
    t /= s),
    (l = e * n + t * r) && (n -= e * l,
    r -= t * l),
    (a = Math.sqrt(n * n + r * r)) && (n /= a,
    r /= a,
    l /= a),
    e * r < t * n && (e = -e,
    t = -t,
    l = -l,
    s = -s),
    {
        translateX: i,
        translateY: o,
        rotate: Math.atan2(t, e) * jI,
        skewX: Math.atan(l) * jI,
        scaleX: s,
        scaleY: a
    }
}
var vh;
function BI(e) {
    let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
    return t.isIdentity ? yh : jv(t.a, t.b, t.c, t.d, t.e, t.f)
}
function HI(e) {
    return e == null ? yh : (vh || (vh = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    vh.setAttribute("transform", e),
    (e = vh.transform.baseVal.consolidate()) ? (e = e.matrix,
    jv(e.a, e.b, e.c, e.d, e.e, e.f)) : yh)
}
function UI(e, t, n, r) {
    function i(c) {
        return c.length ? c.pop() + " " : ""
    }
    function o(c, f, p, m, y, v) {
        if (c !== p || f !== m) {
            var w = y.push("translate(", null, t, null, n);
            v.push({
                i: w - 4,
                x: Gt(c, p)
            }, {
                i: w - 2,
                x: Gt(f, m)
            })
        } else
            (p || m) && y.push("translate(" + p + t + m + n)
    }
    function s(c, f, p, m) {
        c !== f ? (c - f > 180 ? f += 360 : f - c > 180 && (c += 360),
        m.push({
            i: p.push(i(p) + "rotate(", null, r) - 2,
            x: Gt(c, f)
        })) : f && p.push(i(p) + "rotate(" + f + r)
    }
    function a(c, f, p, m) {
        c !== f ? m.push({
            i: p.push(i(p) + "skewX(", null, r) - 2,
            x: Gt(c, f)
        }) : f && p.push(i(p) + "skewX(" + f + r)
    }
    function l(c, f, p, m, y, v) {
        if (c !== p || f !== m) {
            var w = y.push(i(y) + "scale(", null, ",", null, ")");
            v.push({
                i: w - 4,
                x: Gt(c, p)
            }, {
                i: w - 2,
                x: Gt(f, m)
            })
        } else
            (p !== 1 || m !== 1) && y.push(i(y) + "scale(" + p + "," + m + ")")
    }
    return function(c, f) {
        var p = []
          , m = [];
        return c = e(c),
        f = e(f),
        o(c.translateX, c.translateY, f.translateX, f.translateY, p, m),
        s(c.rotate, f.rotate, p, m),
        a(c.skewX, f.skewX, p, m),
        l(c.scaleX, c.scaleY, f.scaleX, f.scaleY, p, m),
        c = f = null,
        function(y) {
            for (var v = -1, w = m.length, x; ++v < w; )
                p[(x = m[v]).i] = x.x(y);
            return p.join("")
        }
    }
}
var Bv = UI(BI, "px, ", "px)", "deg)")
  , Hv = UI(HI, ", ", ")", ")");
var t4 = 1e-12;
function $I(e) {
    return ((e = Math.exp(e)) + 1 / e) / 2
}
function n4(e) {
    return ((e = Math.exp(e)) - 1 / e) / 2
}
function r4(e) {
    return ((e = Math.exp(2 * e)) - 1) / (e + 1)
}
var Uv = function e(t, n, r) {
    function i(o, s) {
        var a = o[0], l = o[1], c = o[2], f = s[0], p = s[1], m = s[2], y = f - a, v = p - l, w = y * y + v * v, x, D;
        if (w < t4)
            D = Math.log(m / c) / t,
            x = function(R) {
                return [a + R * y, l + R * v, c * Math.exp(t * R * D)]
            }
            ;
        else {
            var I = Math.sqrt(w)
              , T = (m * m - c * c + r * w) / (2 * c * n * I)
              , M = (m * m - c * c - r * w) / (2 * m * n * I)
              , S = Math.log(Math.sqrt(T * T + 1) - T)
              , E = Math.log(Math.sqrt(M * M + 1) - M);
            D = (E - S) / t,
            x = function(R) {
                var Z = R * D
                  , ve = $I(S)
                  , we = c / (n * I) * (ve * r4(t * Z + S) - n4(S));
                return [a + we * y, l + we * v, c * ve / $I(t * Z + S)]
            }
        }
        return x.duration = D * 1e3 * t / Math.SQRT2,
        x
    }
    return i.rho = function(o) {
        var s = Math.max(.001, +o)
          , a = s * s
          , l = a * a;
        return e(s, a, l)
    }
    ,
    i
}(Math.SQRT2, 2, 4);
var Ca = 0, ml = 0, pl = 0, WI = 1e3, _h, gl, wh = 0, cs = 0, Dh = 0, yl = typeof performance == "object" && performance.now ? performance : Date, zI = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
    setTimeout(e, 17)
}
;
function _l() {
    return cs || (zI(i4),
    cs = yl.now() + Dh)
}
function i4() {
    cs = 0
}
function vl() {
    this._call = this._time = this._next = null
}
vl.prototype = Ma.prototype = {
    constructor: vl,
    restart: function(e, t, n) {
        if (typeof e != "function")
            throw new TypeError("callback is not a function");
        n = (n == null ? _l() : +n) + (t == null ? 0 : +t),
        !this._next && gl !== this && (gl ? gl._next = this : _h = this,
        gl = this),
        this._call = e,
        this._time = n,
        $v()
    },
    stop: function() {
        this._call && (this._call = null,
        this._time = 1 / 0,
        $v())
    }
};
function Ma(e, t, n) {
    var r = new vl;
    return r.restart(e, t, n),
    r
}
function GI() {
    _l(),
    ++Ca;
    for (var e = _h, t; e; )
        (t = cs - e._time) >= 0 && e._call.call(void 0, t),
        e = e._next;
    --Ca
}
function YI() {
    cs = (wh = yl.now()) + Dh,
    Ca = ml = 0;
    try {
        GI()
    } finally {
        Ca = 0,
        s4(),
        cs = 0
    }
}
function o4() {
    var e = yl.now()
      , t = e - wh;
    t > WI && (Dh -= t,
    wh = e)
}
function s4() {
    for (var e, t = _h, n, r = 1 / 0; t; )
        t._call ? (r > t._time && (r = t._time),
        e = t,
        t = t._next) : (n = t._next,
        t._next = null,
        t = e ? e._next = n : _h = n);
    gl = e,
    $v(r)
}
function $v(e) {
    if (!Ca) {
        ml && (ml = clearTimeout(ml));
        var t = e - cs;
        t > 24 ? (e < 1 / 0 && (ml = setTimeout(YI, e - yl.now() - Dh)),
        pl && (pl = clearInterval(pl))) : (pl || (wh = yl.now(),
        pl = setInterval(o4, WI)),
        Ca = 1,
        zI(YI))
    }
}
function xh(e, t, n) {
    var r = new vl;
    return t = t == null ? 0 : +t,
    r.restart(i => {
        r.stop(),
        e(i + t)
    }
    , t, n),
    r
}
var a4 = yi("start", "end", "cancel", "interrupt")
  , u4 = []
  , QI = 0
  , qI = 1
  , Mh = 2
  , Ch = 3
  , ZI = 4
  , bh = 5
  , wl = 6;
function go(e, t, n, r, i, o) {
    var s = e.__transition;
    if (!s)
        e.__transition = {};
    else if (n in s)
        return;
    l4(e, n, {
        name: t,
        index: r,
        group: i,
        on: a4,
        tween: u4,
        time: o.time,
        delay: o.delay,
        duration: o.duration,
        ease: o.ease,
        timer: null,
        state: QI
    })
}
function Dl(e, t) {
    var n = At(e, t);
    if (n.state > QI)
        throw new Error("too late; already scheduled");
    return n
}
function qt(e, t) {
    var n = At(e, t);
    if (n.state > Ch)
        throw new Error("too late; already running");
    return n
}
function At(e, t) {
    var n = e.__transition;
    if (!n || !(n = n[t]))
        throw new Error("transition not found");
    return n
}
function l4(e, t, n) {
    var r = e.__transition, i;
    r[t] = n,
    n.timer = Ma(o, 0, n.time);
    function o(c) {
        n.state = qI,
        n.timer.restart(s, n.delay, n.time),
        n.delay <= c && s(c - n.delay)
    }
    function s(c) {
        var f, p, m, y;
        if (n.state !== qI)
            return l();
        for (f in r)
            if (y = r[f],
            y.name === n.name) {
                if (y.state === Ch)
                    return xh(s);
                y.state === ZI ? (y.state = wl,
                y.timer.stop(),
                y.on.call("interrupt", e, e.__data__, y.index, y.group),
                delete r[f]) : +f < t && (y.state = wl,
                y.timer.stop(),
                y.on.call("cancel", e, e.__data__, y.index, y.group),
                delete r[f])
            }
        if (xh(function() {
            n.state === Ch && (n.state = ZI,
            n.timer.restart(a, n.delay, n.time),
            a(c))
        }),
        n.state = Mh,
        n.on.call("start", e, e.__data__, n.index, n.group),
        n.state === Mh) {
            for (n.state = Ch,
            i = new Array(m = n.tween.length),
            f = 0,
            p = -1; f < m; ++f)
                (y = n.tween[f].value.call(e, e.__data__, n.index, n.group)) && (i[++p] = y);
            i.length = p + 1
        }
    }
    function a(c) {
        for (var f = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l),
        n.state = bh,
        1), p = -1, m = i.length; ++p < m; )
            i[p].call(e, f);
        n.state === bh && (n.on.call("end", e, e.__data__, n.index, n.group),
        l())
    }
    function l() {
        n.state = wl,
        n.timer.stop(),
        delete r[t];
        for (var c in r)
            return;
        delete e.__transition
    }
}
function yo(e, t) {
    var n = e.__transition, r, i, o = !0, s;
    if (n) {
        t = t == null ? null : t + "";
        for (s in n) {
            if ((r = n[s]).name !== t) {
                o = !1;
                continue
            }
            i = r.state > Mh && r.state < bh,
            r.state = wl,
            r.timer.stop(),
            r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group),
            delete n[s]
        }
        o && delete e.__transition
    }
}
function XI(e) {
    return this.each(function() {
        yo(this, e)
    })
}
function c4(e, t) {
    var n, r;
    return function() {
        var i = qt(this, e)
          , o = i.tween;
        if (o !== n) {
            r = n = o;
            for (var s = 0, a = r.length; s < a; ++s)
                if (r[s].name === t) {
                    r = r.slice(),
                    r.splice(s, 1);
                    break
                }
        }
        i.tween = r
    }
}
function d4(e, t, n) {
    var r, i;
    if (typeof n != "function")
        throw new Error;
    return function() {
        var o = qt(this, e)
          , s = o.tween;
        if (s !== r) {
            i = (r = s).slice();
            for (var a = {
                name: t,
                value: n
            }, l = 0, c = i.length; l < c; ++l)
                if (i[l].name === t) {
                    i[l] = a;
                    break
                }
            l === c && i.push(a)
        }
        o.tween = i
    }
}
function JI(e, t) {
    var n = this._id;
    if (e += "",
    arguments.length < 2) {
        for (var r = At(this.node(), n).tween, i = 0, o = r.length, s; i < o; ++i)
            if ((s = r[i]).name === e)
                return s.value;
        return null
    }
    return this.each((t == null ? c4 : d4)(n, e, t))
}
function ba(e, t, n) {
    var r = e._id;
    return e.each(function() {
        var i = qt(this, r);
        (i.value || (i.value = {}))[t] = n.apply(this, arguments)
    }),
    function(i) {
        return At(i, r).value[t]
    }
}
function Ih(e, t) {
    var n;
    return (typeof t == "number" ? Gt : t instanceof mr ? ls : (n = mr(t)) ? (t = n,
    ls) : hl)(e, t)
}
function f4(e) {
    return function() {
        this.removeAttribute(e)
    }
}
function h4(e) {
    return function() {
        this.removeAttributeNS(e.space, e.local)
    }
}
function p4(e, t, n) {
    var r, i = n + "", o;
    return function() {
        var s = this.getAttribute(e);
        return s === i ? null : s === r ? o : o = t(r = s, n)
    }
}
function m4(e, t, n) {
    var r, i = n + "", o;
    return function() {
        var s = this.getAttributeNS(e.space, e.local);
        return s === i ? null : s === r ? o : o = t(r = s, n)
    }
}
function g4(e, t, n) {
    var r, i, o;
    return function() {
        var s, a = n(this), l;
        return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e),
        l = a + "",
        s === l ? null : s === r && l === i ? o : (i = l,
        o = t(r = s, a)))
    }
}
function y4(e, t, n) {
    var r, i, o;
    return function() {
        var s, a = n(this), l;
        return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local),
        l = a + "",
        s === l ? null : s === r && l === i ? o : (i = l,
        o = t(r = s, a)))
    }
}
function KI(e, t) {
    var n = vi(e)
      , r = n === "transform" ? Hv : Ih;
    return this.attrTween(e, typeof t == "function" ? (n.local ? y4 : g4)(n, r, ba(this, "attr." + e, t)) : t == null ? (n.local ? h4 : f4)(n) : (n.local ? m4 : p4)(n, r, t))
}
function v4(e, t) {
    return function(n) {
        this.setAttribute(e, t.call(this, n))
    }
}
function _4(e, t) {
    return function(n) {
        this.setAttributeNS(e.space, e.local, t.call(this, n))
    }
}
function w4(e, t) {
    var n, r;
    function i() {
        var o = t.apply(this, arguments);
        return o !== r && (n = (r = o) && _4(e, o)),
        n
    }
    return i._value = t,
    i
}
function D4(e, t) {
    var n, r;
    function i() {
        var o = t.apply(this, arguments);
        return o !== r && (n = (r = o) && v4(e, o)),
        n
    }
    return i._value = t,
    i
}
function eE(e, t) {
    var n = "attr." + e;
    if (arguments.length < 2)
        return (n = this.tween(n)) && n._value;
    if (t == null)
        return this.tween(n, null);
    if (typeof t != "function")
        throw new Error;
    var r = vi(e);
    return this.tween(n, (r.local ? w4 : D4)(r, t))
}
function x4(e, t) {
    return function() {
        Dl(this, e).delay = +t.apply(this, arguments)
    }
}
function C4(e, t) {
    return t = +t,
    function() {
        Dl(this, e).delay = t
    }
}
function tE(e) {
    var t = this._id;
    return arguments.length ? this.each((typeof e == "function" ? x4 : C4)(t, e)) : At(this.node(), t).delay
}
function M4(e, t) {
    return function() {
        qt(this, e).duration = +t.apply(this, arguments)
    }
}
function b4(e, t) {
    return t = +t,
    function() {
        qt(this, e).duration = t
    }
}
function nE(e) {
    var t = this._id;
    return arguments.length ? this.each((typeof e == "function" ? M4 : b4)(t, e)) : At(this.node(), t).duration
}
function I4(e, t) {
    if (typeof t != "function")
        throw new Error;
    return function() {
        qt(this, e).ease = t
    }
}
function rE(e) {
    var t = this._id;
    return arguments.length ? this.each(I4(t, e)) : At(this.node(), t).ease
}
function E4(e, t) {
    return function() {
        var n = t.apply(this, arguments);
        if (typeof n != "function")
            throw new Error;
        qt(this, e).ease = n
    }
}
function iE(e) {
    if (typeof e != "function")
        throw new Error;
    return this.each(E4(this._id, e))
}
function oE(e) {
    typeof e != "function" && (e = nl(e));
    for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
        for (var o = t[i], s = o.length, a = r[i] = [], l, c = 0; c < s; ++c)
            (l = o[c]) && e.call(l, l.__data__, c, o) && a.push(l);
    return new yn(r,this._parents,this._name,this._id)
}
function sE(e) {
    if (e._id !== this._id)
        throw new Error;
    for (var t = this._groups, n = e._groups, r = t.length, i = n.length, o = Math.min(r, i), s = new Array(r), a = 0; a < o; ++a)
        for (var l = t[a], c = n[a], f = l.length, p = s[a] = new Array(f), m, y = 0; y < f; ++y)
            (m = l[y] || c[y]) && (p[y] = m);
    for (; a < r; ++a)
        s[a] = t[a];
    return new yn(s,this._parents,this._name,this._id)
}
function S4(e) {
    return (e + "").trim().split(/^|\s+/).every(function(t) {
        var n = t.indexOf(".");
        return n >= 0 && (t = t.slice(0, n)),
        !t || t === "start"
    })
}
function T4(e, t, n) {
    var r, i, o = S4(t) ? Dl : qt;
    return function() {
        var s = o(this, e)
          , a = s.on;
        a !== r && (i = (r = a).copy()).on(t, n),
        s.on = i
    }
}
function aE(e, t) {
    var n = this._id;
    return arguments.length < 2 ? At(this.node(), n).on.on(e) : this.each(T4(n, e, t))
}
function k4(e) {
    return function() {
        var t = this.parentNode;
        for (var n in this.__transition)
            if (+n !== e)
                return;
        t && t.removeChild(this)
    }
}
function uE() {
    return this.on("end.remove", k4(this._id))
}
function lE(e) {
    var t = this._name
      , n = this._id;
    typeof e != "function" && (e = os(e));
    for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
        for (var a = r[s], l = a.length, c = o[s] = new Array(l), f, p, m = 0; m < l; ++m)
            (f = a[m]) && (p = e.call(f, f.__data__, m, a)) && ("__data__"in f && (p.__data__ = f.__data__),
            c[m] = p,
            go(c[m], t, n, m, c, At(f, n)));
    return new yn(o,this._parents,t,n)
}
function cE(e) {
    var t = this._name
      , n = this._id;
    typeof e != "function" && (e = tl(e));
    for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
        for (var l = r[a], c = l.length, f, p = 0; p < c; ++p)
            if (f = l[p]) {
                for (var m = e.call(f, f.__data__, p, l), y, v = At(f, n), w = 0, x = m.length; w < x; ++w)
                    (y = m[w]) && go(y, t, n, w, m, v);
                o.push(m),
                s.push(f)
            }
    return new yn(o,s,t,n)
}
var N4 = _i.prototype.constructor;
function dE() {
    return new N4(this._groups,this._parents)
}
function O4(e, t) {
    var n, r, i;
    return function() {
        var o = ho(this, e)
          , s = (this.style.removeProperty(e),
        ho(this, e));
        return o === s ? null : o === n && s === r ? i : i = t(n = o, r = s)
    }
}
function fE(e) {
    return function() {
        this.style.removeProperty(e)
    }
}
function A4(e, t, n) {
    var r, i = n + "", o;
    return function() {
        var s = ho(this, e);
        return s === i ? null : s === r ? o : o = t(r = s, n)
    }
}
function P4(e, t, n) {
    var r, i, o;
    return function() {
        var s = ho(this, e)
          , a = n(this)
          , l = a + "";
        return a == null && (l = a = (this.style.removeProperty(e),
        ho(this, e))),
        s === l ? null : s === r && l === i ? o : (i = l,
        o = t(r = s, a))
    }
}
function F4(e, t) {
    var n, r, i, o = "style." + t, s = "end." + o, a;
    return function() {
        var l = qt(this, e)
          , c = l.on
          , f = l.value[o] == null ? a || (a = fE(t)) : void 0;
        (c !== n || i !== f) && (r = (n = c).copy()).on(s, i = f),
        l.on = r
    }
}
function hE(e, t, n) {
    var r = (e += "") == "transform" ? Bv : Ih;
    return t == null ? this.styleTween(e, O4(e, r)).on("end.style." + e, fE(e)) : typeof t == "function" ? this.styleTween(e, P4(e, r, ba(this, "style." + e, t))).each(F4(this._id, e)) : this.styleTween(e, A4(e, r, t), n).on("end.style." + e, null)
}
function R4(e, t, n) {
    return function(r) {
        this.style.setProperty(e, t.call(this, r), n)
    }
}
function L4(e, t, n) {
    var r, i;
    function o() {
        var s = t.apply(this, arguments);
        return s !== i && (r = (i = s) && R4(e, s, n)),
        r
    }
    return o._value = t,
    o
}
function pE(e, t, n) {
    var r = "style." + (e += "");
    if (arguments.length < 2)
        return (r = this.tween(r)) && r._value;
    if (t == null)
        return this.tween(r, null);
    if (typeof t != "function")
        throw new Error;
    return this.tween(r, L4(e, t, n ?? ""))
}
function V4(e) {
    return function() {
        this.textContent = e
    }
}
function j4(e) {
    return function() {
        var t = e(this);
        this.textContent = t ?? ""
    }
}
function mE(e) {
    return this.tween("text", typeof e == "function" ? j4(ba(this, "text", e)) : V4(e == null ? "" : e + ""))
}
function B4(e) {
    return function(t) {
        this.textContent = e.call(this, t)
    }
}
function H4(e) {
    var t, n;
    function r() {
        var i = e.apply(this, arguments);
        return i !== n && (t = (n = i) && B4(i)),
        t
    }
    return r._value = e,
    r
}
function gE(e) {
    var t = "text";
    if (arguments.length < 1)
        return (t = this.tween(t)) && t._value;
    if (e == null)
        return this.tween(t, null);
    if (typeof e != "function")
        throw new Error;
    return this.tween(t, H4(e))
}
function yE() {
    for (var e = this._name, t = this._id, n = Eh(), r = this._groups, i = r.length, o = 0; o < i; ++o)
        for (var s = r[o], a = s.length, l, c = 0; c < a; ++c)
            if (l = s[c]) {
                var f = At(l, t);
                go(l, e, n, c, s, {
                    time: f.time + f.delay + f.duration,
                    delay: 0,
                    duration: f.duration,
                    ease: f.ease
                })
            }
    return new yn(r,this._parents,e,n)
}
function vE() {
    var e, t, n = this, r = n._id, i = n.size();
    return new Promise(function(o, s) {
        var a = {
            value: s
        }
          , l = {
            value: function() {
                --i === 0 && o()
            }
        };
        n.each(function() {
            var c = qt(this, r)
              , f = c.on;
            f !== e && (t = (e = f).copy(),
            t._.cancel.push(a),
            t._.interrupt.push(a),
            t._.end.push(l)),
            c.on = t
        }),
        i === 0 && o()
    }
    )
}
var U4 = 0;
function yn(e, t, n, r) {
    this._groups = e,
    this._parents = t,
    this._name = n,
    this._id = r
}
function _E(e) {
    return _i().transition(e)
}
function Eh() {
    return ++U4
}
var Di = _i.prototype;
yn.prototype = _E.prototype = {
    constructor: yn,
    select: lE,
    selectAll: cE,
    selectChild: Di.selectChild,
    selectChildren: Di.selectChildren,
    filter: oE,
    merge: sE,
    selection: dE,
    transition: yE,
    call: Di.call,
    nodes: Di.nodes,
    node: Di.node,
    size: Di.size,
    empty: Di.empty,
    each: Di.each,
    on: aE,
    attr: KI,
    attrTween: eE,
    style: hE,
    styleTween: pE,
    text: mE,
    textTween: gE,
    remove: uE,
    tween: JI,
    delay: tE,
    duration: nE,
    ease: rE,
    easeVarying: iE,
    end: vE,
    [Symbol.iterator]: Di[Symbol.iterator]
};
function Sh(e) {
    return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2
}
function wE(e) {
    return (Math.pow(2, -10 * e) - .0009765625) * 1.0009775171065494
}
function $4(e) {
    return 1 - wE(e)
}
var W4 = {
    time: null,
    delay: 0,
    duration: 250,
    ease: Sh
};
function z4(e, t) {
    for (var n; !(n = e.__transition) || !(n = n[t]); )
        if (!(e = e.parentNode))
            throw new Error(`transition ${t} not found`);
    return n
}
function DE(e) {
    var t, n;
    e instanceof yn ? (t = e._id,
    e = e._name) : (t = Eh(),
    (n = W4).time = _l(),
    e = e == null ? null : e + "");
    for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
        for (var s = r[o], a = s.length, l, c = 0; c < a; ++c)
            (l = s[c]) && go(l, e, t, c, s, n || z4(l, t));
    return new yn(r,this._parents,e,t)
}
_i.prototype.interrupt = XI;
_i.prototype.transition = DE;
var {abs: Dce, max: xce, min: Cce} = Math;
function xE(e) {
    return [+e[0], +e[1]]
}
function G4(e) {
    return [xE(e[0]), xE(e[1])]
}
var Mce = {
    name: "x",
    handles: ["w", "e"].map(Yv),
    input: function(e, t) {
        return e == null ? null : [[+e[0], t[0][1]], [+e[1], t[1][1]]]
    },
    output: function(e) {
        return e && [e[0][0], e[1][0]]
    }
}
  , bce = {
    name: "y",
    handles: ["n", "s"].map(Yv),
    input: function(e, t) {
        return e == null ? null : [[t[0][0], +e[0]], [t[1][0], +e[1]]]
    },
    output: function(e) {
        return e && [e[0][1], e[1][1]]
    }
}
  , Ice = {
    name: "xy",
    handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(Yv),
    input: function(e) {
        return e == null ? null : G4(e)
    },
    output: function(e) {
        return e
    }
};
function Yv(e) {
    return {
        type: e
    }
}
var Wv = Math.PI
  , zv = 2 * Wv
  , ds = 1e-6
  , q4 = zv - ds;
function CE(e) {
    this._ += e[0];
    for (let t = 1, n = e.length; t < n; ++t)
        this._ += arguments[t] + e[t]
}
function Z4(e) {
    let t = Math.floor(e);
    if (!(t >= 0))
        throw new Error(`invalid digits: ${e}`);
    if (t > 15)
        return CE;
    let n = 10 ** t;
    return function(r) {
        this._ += r[0];
        for (let i = 1, o = r.length; i < o; ++i)
            this._ += Math.round(arguments[i] * n) / n + r[i]
    }
}
var fs = class {
    constructor(t) {
        this._x0 = this._y0 = this._x1 = this._y1 = null,
        this._ = "",
        this._append = t == null ? CE : Z4(t)
    }
    moveTo(t, n) {
        this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`
    }
    closePath() {
        this._x1 !== null && (this._x1 = this._x0,
        this._y1 = this._y0,
        this._append`Z`)
    }
    lineTo(t, n) {
        this._append`L${this._x1 = +t},${this._y1 = +n}`
    }
    quadraticCurveTo(t, n, r, i) {
        this._append`Q${+t},${+n},${this._x1 = +r},${this._y1 = +i}`
    }
    bezierCurveTo(t, n, r, i, o, s) {
        this._append`C${+t},${+n},${+r},${+i},${this._x1 = +o},${this._y1 = +s}`
    }
    arcTo(t, n, r, i, o) {
        if (t = +t,
        n = +n,
        r = +r,
        i = +i,
        o = +o,
        o < 0)
            throw new Error(`negative radius: ${o}`);
        let s = this._x1
          , a = this._y1
          , l = r - t
          , c = i - n
          , f = s - t
          , p = a - n
          , m = f * f + p * p;
        if (this._x1 === null)
            this._append`M${this._x1 = t},${this._y1 = n}`;
        else if (m > ds)
            if (!(Math.abs(p * l - c * f) > ds) || !o)
                this._append`L${this._x1 = t},${this._y1 = n}`;
            else {
                let y = r - s
                  , v = i - a
                  , w = l * l + c * c
                  , x = y * y + v * v
                  , D = Math.sqrt(w)
                  , I = Math.sqrt(m)
                  , T = o * Math.tan((Wv - Math.acos((w + m - x) / (2 * D * I))) / 2)
                  , M = T / I
                  , S = T / D;
                Math.abs(M - 1) > ds && this._append`L${t + M * f},${n + M * p}`,
                this._append`A${o},${o},0,0,${+(p * y > f * v)},${this._x1 = t + S * l},${this._y1 = n + S * c}`
            }
    }
    arc(t, n, r, i, o, s) {
        if (t = +t,
        n = +n,
        r = +r,
        s = !!s,
        r < 0)
            throw new Error(`negative radius: ${r}`);
        let a = r * Math.cos(i)
          , l = r * Math.sin(i)
          , c = t + a
          , f = n + l
          , p = 1 ^ s
          , m = s ? i - o : o - i;
        this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > ds || Math.abs(this._y1 - f) > ds) && this._append`L${c},${f}`,
        r && (m < 0 && (m = m % zv + zv),
        m > q4 ? this._append`A${r},${r},0,1,${p},${t - a},${n - l}A${r},${r},0,1,${p},${this._x1 = c},${this._y1 = f}` : m > ds && this._append`A${r},${r},0,${+(m >= Wv)},${p},${this._x1 = t + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`)
    }
    rect(t, n, r, i) {
        this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`
    }
    toString() {
        return this._
    }
}
;
function ME() {
    return new fs
}
ME.prototype = fs.prototype;
function bE(e) {
    let t = +this._x.call(null, e)
      , n = +this._y.call(null, e);
    return IE(this.cover(t, n), t, n, e)
}
function IE(e, t, n, r) {
    if (isNaN(t) || isNaN(n))
        return e;
    var i, o = e._root, s = {
        data: r
    }, a = e._x0, l = e._y0, c = e._x1, f = e._y1, p, m, y, v, w, x, D, I;
    if (!o)
        return e._root = s,
        e;
    for (; o.length; )
        if ((w = t >= (p = (a + c) / 2)) ? a = p : c = p,
        (x = n >= (m = (l + f) / 2)) ? l = m : f = m,
        i = o,
        !(o = o[D = x << 1 | w]))
            return i[D] = s,
            e;
    if (y = +e._x.call(null, o.data),
    v = +e._y.call(null, o.data),
    t === y && n === v)
        return s.next = o,
        i ? i[D] = s : e._root = s,
        e;
    do
        i = i ? i[D] = new Array(4) : e._root = new Array(4),
        (w = t >= (p = (a + c) / 2)) ? a = p : c = p,
        (x = n >= (m = (l + f) / 2)) ? l = m : f = m;
    while ((D = x << 1 | w) === (I = (v >= m) << 1 | y >= p));
    return i[I] = o,
    i[D] = s,
    e
}
function EE(e) {
    var t, n, r = e.length, i, o, s = new Array(r), a = new Array(r), l = 1 / 0, c = 1 / 0, f = -1 / 0, p = -1 / 0;
    for (n = 0; n < r; ++n)
        isNaN(i = +this._x.call(null, t = e[n])) || isNaN(o = +this._y.call(null, t)) || (s[n] = i,
        a[n] = o,
        i < l && (l = i),
        i > f && (f = i),
        o < c && (c = o),
        o > p && (p = o));
    if (l > f || c > p)
        return this;
    for (this.cover(l, c).cover(f, p),
    n = 0; n < r; ++n)
        IE(this, s[n], a[n], e[n]);
    return this
}
function SE(e, t) {
    if (isNaN(e = +e) || isNaN(t = +t))
        return this;
    var n = this._x0
      , r = this._y0
      , i = this._x1
      , o = this._y1;
    if (isNaN(n))
        i = (n = Math.floor(e)) + 1,
        o = (r = Math.floor(t)) + 1;
    else {
        for (var s = i - n || 1, a = this._root, l, c; n > e || e >= i || r > t || t >= o; )
            switch (c = (t < r) << 1 | e < n,
            l = new Array(4),
            l[c] = a,
            a = l,
            s *= 2,
            c) {
            case 0:
                i = n + s,
                o = r + s;
                break;
            case 1:
                n = i - s,
                o = r + s;
                break;
            case 2:
                i = n + s,
                r = o - s;
                break;
            case 3:
                n = i - s,
                r = o - s;
                break
            }
        this._root && this._root.length && (this._root = a)
    }
    return this._x0 = n,
    this._y0 = r,
    this._x1 = i,
    this._y1 = o,
    this
}
function TE() {
    var e = [];
    return this.visit(function(t) {
        if (!t.length)
            do
                e.push(t.data);
            while (t = t.next)
    }),
    e
}
function kE(e) {
    return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
}
function Vt(e, t, n, r, i) {
    this.node = e,
    this.x0 = t,
    this.y0 = n,
    this.x1 = r,
    this.y1 = i
}
function NE(e, t, n) {
    var r, i = this._x0, o = this._y0, s, a, l, c, f = this._x1, p = this._y1, m = [], y = this._root, v, w;
    for (y && m.push(new Vt(y,i,o,f,p)),
    n == null ? n = 1 / 0 : (i = e - n,
    o = t - n,
    f = e + n,
    p = t + n,
    n *= n); v = m.pop(); )
        if (!(!(y = v.node) || (s = v.x0) > f || (a = v.y0) > p || (l = v.x1) < i || (c = v.y1) < o))
            if (y.length) {
                var x = (s + l) / 2
                  , D = (a + c) / 2;
                m.push(new Vt(y[3],x,D,l,c), new Vt(y[2],s,D,x,c), new Vt(y[1],x,a,l,D), new Vt(y[0],s,a,x,D)),
                (w = (t >= D) << 1 | e >= x) && (v = m[m.length - 1],
                m[m.length - 1] = m[m.length - 1 - w],
                m[m.length - 1 - w] = v)
            } else {
                var I = e - +this._x.call(null, y.data)
                  , T = t - +this._y.call(null, y.data)
                  , M = I * I + T * T;
                if (M < n) {
                    var S = Math.sqrt(n = M);
                    i = e - S,
                    o = t - S,
                    f = e + S,
                    p = t + S,
                    r = y.data
                }
            }
    return r
}
function OE(e) {
    if (isNaN(f = +this._x.call(null, e)) || isNaN(p = +this._y.call(null, e)))
        return this;
    var t, n = this._root, r, i, o, s = this._x0, a = this._y0, l = this._x1, c = this._y1, f, p, m, y, v, w, x, D;
    if (!n)
        return this;
    if (n.length)
        for (; ; ) {
            if ((v = f >= (m = (s + l) / 2)) ? s = m : l = m,
            (w = p >= (y = (a + c) / 2)) ? a = y : c = y,
            t = n,
            !(n = n[x = w << 1 | v]))
                return this;
            if (!n.length)
                break;
            (t[x + 1 & 3] || t[x + 2 & 3] || t[x + 3 & 3]) && (r = t,
            D = x)
        }
    for (; n.data !== e; )
        if (i = n,
        !(n = n.next))
            return this;
    return (o = n.next) && delete n.next,
    i ? (o ? i.next = o : delete i.next,
    this) : t ? (o ? t[x] = o : delete t[x],
    (n = t[0] || t[1] || t[2] || t[3]) && n === (t[3] || t[2] || t[1] || t[0]) && !n.length && (r ? r[D] = n : this._root = n),
    this) : (this._root = o,
    this)
}
function AE(e) {
    for (var t = 0, n = e.length; t < n; ++t)
        this.remove(e[t]);
    return this
}
function PE() {
    return this._root
}
function FE() {
    var e = 0;
    return this.visit(function(t) {
        if (!t.length)
            do
                ++e;
            while (t = t.next)
    }),
    e
}
function RE(e) {
    var t = [], n, r = this._root, i, o, s, a, l;
    for (r && t.push(new Vt(r,this._x0,this._y0,this._x1,this._y1)); n = t.pop(); )
        if (!e(r = n.node, o = n.x0, s = n.y0, a = n.x1, l = n.y1) && r.length) {
            var c = (o + a) / 2
              , f = (s + l) / 2;
            (i = r[3]) && t.push(new Vt(i,c,f,a,l)),
            (i = r[2]) && t.push(new Vt(i,o,f,c,l)),
            (i = r[1]) && t.push(new Vt(i,c,s,a,f)),
            (i = r[0]) && t.push(new Vt(i,o,s,c,f))
        }
    return this
}
function LE(e) {
    var t = [], n = [], r;
    for (this._root && t.push(new Vt(this._root,this._x0,this._y0,this._x1,this._y1)); r = t.pop(); ) {
        var i = r.node;
        if (i.length) {
            var o, s = r.x0, a = r.y0, l = r.x1, c = r.y1, f = (s + l) / 2, p = (a + c) / 2;
            (o = i[0]) && t.push(new Vt(o,s,a,f,p)),
            (o = i[1]) && t.push(new Vt(o,f,a,l,p)),
            (o = i[2]) && t.push(new Vt(o,s,p,f,c)),
            (o = i[3]) && t.push(new Vt(o,f,p,l,c))
        }
        n.push(r)
    }
    for (; r = n.pop(); )
        e(r.node, r.x0, r.y0, r.x1, r.y1);
    return this
}
function VE(e) {
    return e[0]
}
function jE(e) {
    return arguments.length ? (this._x = e,
    this) : this._x
}
function BE(e) {
    return e[1]
}
function HE(e) {
    return arguments.length ? (this._y = e,
    this) : this._y
}
function xl(e, t, n) {
    var r = new Gv(t ?? VE,n ?? BE,NaN,NaN,NaN,NaN);
    return e == null ? r : r.addAll(e)
}
function Gv(e, t, n, r, i, o) {
    this._x = e,
    this._y = t,
    this._x0 = n,
    this._y0 = r,
    this._x1 = i,
    this._y1 = o,
    this._root = void 0
}
function UE(e) {
    for (var t = {
        data: e.data
    }, n = t; e = e.next; )
        n = n.next = {
            data: e.data
        };
    return t
}
var vn = xl.prototype = Gv.prototype;
vn.copy = function() {
    var e = new Gv(this._x,this._y,this._x0,this._y0,this._x1,this._y1), t = this._root, n, r;
    if (!t)
        return e;
    if (!t.length)
        return e._root = UE(t),
        e;
    for (n = [{
        source: t,
        target: e._root = new Array(4)
    }]; t = n.pop(); )
        for (var i = 0; i < 4; ++i)
            (r = t.source[i]) && (r.length ? n.push({
                source: r,
                target: t.target[i] = new Array(4)
            }) : t.target[i] = UE(r));
    return e
}
;
vn.add = bE;
vn.addAll = EE;
vn.cover = SE;
vn.data = TE;
vn.extent = kE;
vn.find = NE;
vn.remove = OE;
vn.removeAll = AE;
vn.root = PE;
vn.size = FE;
vn.visit = RE;
vn.visitAfter = LE;
vn.x = jE;
vn.y = HE;
function jn(e) {
    return function() {
        return e
    }
}
function Cl(e) {
    return (e() - .5) * 1e-6
}
function $E() {
    let e = 1;
    return () => (e = (1664525 * e + 1013904223) % 4294967296) / 4294967296
}
function YE(e) {
    return e.x
}
function WE(e) {
    return e.y
}
var Q4 = 10
  , X4 = Math.PI * (3 - Math.sqrt(5));
function J4(e) {
    var t, n = 1, r = .001, i = 1 - Math.pow(r, 1 / 300), o = 0, s = .6, a = new Map, l = Ma(p), c = yi("tick", "end"), f = $E();
    e == null && (e = []);
    function p() {
        m(),
        c.call("tick", t),
        n < r && (l.stop(),
        c.call("end", t))
    }
    function m(w) {
        var x, D = e.length, I;
        w === void 0 && (w = 1);
        for (var T = 0; T < w; ++T)
            for (n += (o - n) * i,
            a.forEach(function(M) {
                M(n)
            }),
            x = 0; x < D; ++x)
                I = e[x],
                I.fx == null ? I.x += I.vx *= s : (I.x = I.fx,
                I.vx = 0),
                I.fy == null ? I.y += I.vy *= s : (I.y = I.fy,
                I.vy = 0);
        return t
    }
    function y() {
        for (var w = 0, x = e.length, D; w < x; ++w) {
            if (D = e[w],
            D.index = w,
            D.fx != null && (D.x = D.fx),
            D.fy != null && (D.y = D.fy),
            isNaN(D.x) || isNaN(D.y)) {
                var I = Q4 * Math.sqrt(.5 + w)
                  , T = w * X4;
                D.x = I * Math.cos(T),
                D.y = I * Math.sin(T)
            }
            (isNaN(D.vx) || isNaN(D.vy)) && (D.vx = D.vy = 0)
        }
    }
    function v(w) {
        return w.initialize && w.initialize(e, f),
        w
    }
    return y(),
    t = {
        tick: m,
        restart: function() {
            return l.restart(p),
            t
        },
        stop: function() {
            return l.stop(),
            t
        },
        nodes: function(w) {
            return arguments.length ? (e = w,
            y(),
            a.forEach(v),
            t) : e
        },
        alpha: function(w) {
            return arguments.length ? (n = +w,
            t) : n
        },
        alphaMin: function(w) {
            return arguments.length ? (r = +w,
            t) : r
        },
        alphaDecay: function(w) {
            return arguments.length ? (i = +w,
            t) : +i
        },
        alphaTarget: function(w) {
            return arguments.length ? (o = +w,
            t) : o
        },
        velocityDecay: function(w) {
            return arguments.length ? (s = 1 - w,
            t) : 1 - s
        },
        randomSource: function(w) {
            return arguments.length ? (f = w,
            a.forEach(v),
            t) : f
        },
        force: function(w, x) {
            return arguments.length > 1 ? (x == null ? a.delete(w) : a.set(w, v(x)),
            t) : a.get(w)
        },
        find: function(w, x, D) {
            var I = 0, T = e.length, M, S, E, R, Z;
            for (D == null ? D = 1 / 0 : D *= D,
            I = 0; I < T; ++I)
                R = e[I],
                M = w - R.x,
                S = x - R.y,
                E = M * M + S * S,
                E < D && (Z = R,
                D = E);
            return Z
        },
        on: function(w, x) {
            return arguments.length > 1 ? (c.on(w, x),
            t) : c.on(w)
        }
    }
}
function K4() {
    var e, t, n, r, i = jn(-30), o, s = 1, a = 1 / 0, l = .81;
    function c(y) {
        var v, w = e.length, x = xl(e, YE, WE).visitAfter(p);
        for (r = y,
        v = 0; v < w; ++v)
            t = e[v],
            x.visit(m)
    }
    function f() {
        if (e) {
            var y, v = e.length, w;
            for (o = new Array(v),
            y = 0; y < v; ++y)
                w = e[y],
                o[w.index] = +i(w, y, e)
        }
    }
    function p(y) {
        var v = 0, w, x, D = 0, I, T, M;
        if (y.length) {
            for (I = T = M = 0; M < 4; ++M)
                (w = y[M]) && (x = Math.abs(w.value)) && (v += w.value,
                D += x,
                I += x * w.x,
                T += x * w.y);
            y.x = I / D,
            y.y = T / D
        } else {
            w = y,
            w.x = w.data.x,
            w.y = w.data.y;
            do
                v += o[w.data.index];
            while (w = w.next)
        }
        y.value = v
    }
    function m(y, v, w, x) {
        if (!y.value)
            return !0;
        var D = y.x - t.x
          , I = y.y - t.y
          , T = x - v
          , M = D * D + I * I;
        if (T * T / l < M)
            return M < a && (D === 0 && (D = Cl(n),
            M += D * D),
            I === 0 && (I = Cl(n),
            M += I * I),
            M < s && (M = Math.sqrt(s * M)),
            t.vx += D * y.value * r / M,
            t.vy += I * y.value * r / M),
            !0;
        if (y.length || M >= a)
            return;
        (y.data !== t || y.next) && (D === 0 && (D = Cl(n),
        M += D * D),
        I === 0 && (I = Cl(n),
        M += I * I),
        M < s && (M = Math.sqrt(s * M)));
        do
            y.data !== t && (T = o[y.data.index] * r / M,
            t.vx += D * T,
            t.vy += I * T);
        while (y = y.next)
    }
    return c.initialize = function(y, v) {
        e = y,
        n = v,
        f()
    }
    ,
    c.strength = function(y) {
        return arguments.length ? (i = typeof y == "function" ? y : jn(+y),
        f(),
        c) : i
    }
    ,
    c.distanceMin = function(y) {
        return arguments.length ? (s = y * y,
        c) : Math.sqrt(s)
    }
    ,
    c.distanceMax = function(y) {
        return arguments.length ? (a = y * y,
        c) : Math.sqrt(a)
    }
    ,
    c.theta = function(y) {
        return arguments.length ? (l = y * y,
        c) : Math.sqrt(l)
    }
    ,
    c
}
function e8(e) {
    var t = jn(.1), n, r, i;
    typeof e != "function" && (e = jn(e == null ? 0 : +e));
    function o(a) {
        for (var l = 0, c = n.length, f; l < c; ++l)
            f = n[l],
            f.vx += (i[l] - f.x) * r[l] * a
    }
    function s() {
        if (n) {
            var a, l = n.length;
            for (r = new Array(l),
            i = new Array(l),
            a = 0; a < l; ++a)
                r[a] = isNaN(i[a] = +e(n[a], a, n)) ? 0 : +t(n[a], a, n)
        }
    }
    return o.initialize = function(a) {
        n = a,
        s()
    }
    ,
    o.strength = function(a) {
        return arguments.length ? (t = typeof a == "function" ? a : jn(+a),
        s(),
        o) : t
    }
    ,
    o.x = function(a) {
        return arguments.length ? (e = typeof a == "function" ? a : jn(+a),
        s(),
        o) : e
    }
    ,
    o
}
function t8(e) {
    var t = jn(.1), n, r, i;
    typeof e != "function" && (e = jn(e == null ? 0 : +e));
    function o(a) {
        for (var l = 0, c = n.length, f; l < c; ++l)
            f = n[l],
            f.vy += (i[l] - f.y) * r[l] * a
    }
    function s() {
        if (n) {
            var a, l = n.length;
            for (r = new Array(l),
            i = new Array(l),
            a = 0; a < l; ++a)
                r[a] = isNaN(i[a] = +e(n[a], a, n)) ? 0 : +t(n[a], a, n)
        }
    }
    return o.initialize = function(a) {
        n = a,
        s()
    }
    ,
    o.strength = function(a) {
        return arguments.length ? (t = typeof a == "function" ? a : jn(+a),
        s(),
        o) : t
    }
    ,
    o.y = function(a) {
        return arguments.length ? (e = typeof a == "function" ? a : jn(+a),
        s(),
        o) : e
    }
    ,
    o
}
function zE(e) {
    return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10)
}
function hs(e, t) {
    if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
        return null;
    var n, r = e.slice(0, n);
    return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)]
}
function Wr(e) {
    return e = hs(Math.abs(e)),
    e ? e[1] : NaN
}
function GE(e, t) {
    return function(n, r) {
        for (var i = n.length, o = [], s = 0, a = e[0], l = 0; i > 0 && a > 0 && (l + a + 1 > r && (a = Math.max(1, r - l)),
        o.push(n.substring(i -= a, i + a)),
        !((l += a + 1) > r)); )
            a = e[s = (s + 1) % e.length];
        return o.reverse().join(t)
    }
}
function qE(e) {
    return function(t) {
        return t.replace(/[0-9]/g, function(n) {
            return e[+n]
        })
    }
}
var n8 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function vo(e) {
    if (!(t = n8.exec(e)))
        throw new Error("invalid format: " + e);
    var t;
    return new Th({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10]
    })
}
vo.prototype = Th.prototype;
function Th(e) {
    this.fill = e.fill === void 0 ? " " : e.fill + "",
    this.align = e.align === void 0 ? ">" : e.align + "",
    this.sign = e.sign === void 0 ? "-" : e.sign + "",
    this.symbol = e.symbol === void 0 ? "" : e.symbol + "",
    this.zero = !!e.zero,
    this.width = e.width === void 0 ? void 0 : +e.width,
    this.comma = !!e.comma,
    this.precision = e.precision === void 0 ? void 0 : +e.precision,
    this.trim = !!e.trim,
    this.type = e.type === void 0 ? "" : e.type + ""
}
Th.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type
}
;
function ZE(e) {
    e: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
        switch (e[n]) {
        case ".":
            r = i = n;
            break;
        case "0":
            r === 0 && (r = n),
            i = n;
            break;
        default:
            if (!+e[n])
                break e;
            r > 0 && (r = 0);
            break
        }
    return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e
}
var qv;
function QE(e, t) {
    var n = hs(e, t);
    if (!n)
        return e + "";
    var r = n[0]
      , i = n[1]
      , o = i - (qv = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1
      , s = r.length;
    return o === s ? r : o > s ? r + new Array(o - s + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + hs(e, Math.max(0, t + o - 1))[0]
}
function Zv(e, t) {
    var n = hs(e, t);
    if (!n)
        return e + "";
    var r = n[0]
      , i = n[1];
    return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
}
var Qv = {
    "%": (e, t) => (e * 100).toFixed(t),
    b: e => Math.round(e).toString(2),
    c: e => e + "",
    d: zE,
    e: (e, t) => e.toExponential(t),
    f: (e, t) => e.toFixed(t),
    g: (e, t) => e.toPrecision(t),
    o: e => Math.round(e).toString(8),
    p: (e, t) => Zv(e * 100, t),
    r: Zv,
    s: QE,
    X: e => Math.round(e).toString(16).toUpperCase(),
    x: e => Math.round(e).toString(16)
};
function Xv(e) {
    return e
}
var XE = Array.prototype.map
  , JE = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function KE(e) {
    var t = e.grouping === void 0 || e.thousands === void 0 ? Xv : GE(XE.call(e.grouping, Number), e.thousands + "")
      , n = e.currency === void 0 ? "" : e.currency[0] + ""
      , r = e.currency === void 0 ? "" : e.currency[1] + ""
      , i = e.decimal === void 0 ? "." : e.decimal + ""
      , o = e.numerals === void 0 ? Xv : qE(XE.call(e.numerals, String))
      , s = e.percent === void 0 ? "%" : e.percent + ""
      , a = e.minus === void 0 ? "\u2212" : e.minus + ""
      , l = e.nan === void 0 ? "NaN" : e.nan + "";
    function c(p) {
        p = vo(p);
        var m = p.fill
          , y = p.align
          , v = p.sign
          , w = p.symbol
          , x = p.zero
          , D = p.width
          , I = p.comma
          , T = p.precision
          , M = p.trim
          , S = p.type;
        S === "n" ? (I = !0,
        S = "g") : Qv[S] || (T === void 0 && (T = 12),
        M = !0,
        S = "g"),
        (x || m === "0" && y === "=") && (x = !0,
        m = "0",
        y = "=");
        var E = w === "$" ? n : w === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : ""
          , R = w === "$" ? r : /[%p]/.test(S) ? s : ""
          , Z = Qv[S]
          , ve = /[defgprs%]/.test(S);
        T = T === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
        function we(V) {
            var xe = E, $ = R, b, H, N;
            if (S === "c")
                $ = Z(V) + $,
                V = "";
            else {
                V = +V;
                var W = V < 0 || 1 / V < 0;
                if (V = isNaN(V) ? l : Z(Math.abs(V), T),
                M && (V = ZE(V)),
                W && +V == 0 && v !== "+" && (W = !1),
                xe = (W ? v === "(" ? v : a : v === "-" || v === "(" ? "" : v) + xe,
                $ = (S === "s" ? JE[8 + qv / 3] : "") + $ + (W && v === "(" ? ")" : ""),
                ve) {
                    for (b = -1,
                    H = V.length; ++b < H; )
                        if (N = V.charCodeAt(b),
                        48 > N || N > 57) {
                            $ = (N === 46 ? i + V.slice(b + 1) : V.slice(b)) + $,
                            V = V.slice(0, b);
                            break
                        }
                }
            }
            I && !x && (V = t(V, 1 / 0));
            var X = xe.length + V.length + $.length
              , te = X < D ? new Array(D - X + 1).join(m) : "";
            switch (I && x && (V = t(te + V, te.length ? D - $.length : 1 / 0),
            te = ""),
            y) {
            case "<":
                V = xe + V + $ + te;
                break;
            case "=":
                V = xe + te + V + $;
                break;
            case "^":
                V = te.slice(0, X = te.length >> 1) + xe + V + $ + te.slice(X);
                break;
            default:
                V = te + xe + V + $;
                break
            }
            return o(V)
        }
        return we.toString = function() {
            return p + ""
        }
        ,
        we
    }
    function f(p, m) {
        var y = c((p = vo(p),
        p.type = "f",
        p))
          , v = Math.max(-8, Math.min(8, Math.floor(Wr(m) / 3))) * 3
          , w = Math.pow(10, -v)
          , x = JE[8 + v / 3];
        return function(D) {
            return y(w * D) + x
        }
    }
    return {
        format: c,
        formatPrefix: f
    }
}
var kh, Nh, Oh;
Jv({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
});
function Jv(e) {
    return kh = KE(e),
    Nh = kh.format,
    Oh = kh.formatPrefix,
    kh
}
function Kv(e) {
    return Math.max(0, -Wr(Math.abs(e)))
}
function e0(e, t) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Wr(t) / 3))) * 3 - Wr(Math.abs(e)))
}
function t0(e, t) {
    return e = Math.abs(e),
    t = Math.abs(t) - e,
    Math.max(0, Wr(t) - Wr(e)) + 1
}
function r8(e) {
    var t = 0
      , n = e.children
      , r = n && n.length;
    if (!r)
        t = 1;
    else
        for (; --r >= 0; )
            t += n[r].value;
    e.value = t
}
function eS() {
    return this.eachAfter(r8)
}
function tS(e, t) {
    let n = -1;
    for (let r of this)
        e.call(t, r, ++n, this);
    return this
}
function nS(e, t) {
    for (var n = this, r = [n], i, o, s = -1; n = r.pop(); )
        if (e.call(t, n, ++s, this),
        i = n.children)
            for (o = i.length - 1; o >= 0; --o)
                r.push(i[o]);
    return this
}
function rS(e, t) {
    for (var n = this, r = [n], i = [], o, s, a, l = -1; n = r.pop(); )
        if (i.push(n),
        o = n.children)
            for (s = 0,
            a = o.length; s < a; ++s)
                r.push(o[s]);
    for (; n = i.pop(); )
        e.call(t, n, ++l, this);
    return this
}
function iS(e, t) {
    let n = -1;
    for (let r of this)
        if (e.call(t, r, ++n, this))
            return r
}
function oS(e) {
    return this.eachAfter(function(t) {
        for (var n = +e(t.data) || 0, r = t.children, i = r && r.length; --i >= 0; )
            n += r[i].value;
        t.value = n
    })
}
function sS(e) {
    return this.eachBefore(function(t) {
        t.children && t.children.sort(e)
    })
}
function aS(e) {
    for (var t = this, n = i8(t, e), r = [t]; t !== n; )
        t = t.parent,
        r.push(t);
    for (var i = r.length; e !== n; )
        r.splice(i, 0, e),
        e = e.parent;
    return r
}
function i8(e, t) {
    if (e === t)
        return e;
    var n = e.ancestors()
      , r = t.ancestors()
      , i = null;
    for (e = n.pop(),
    t = r.pop(); e === t; )
        i = e,
        e = n.pop(),
        t = r.pop();
    return i
}
function uS() {
    for (var e = this, t = [e]; e = e.parent; )
        t.push(e);
    return t
}
function lS() {
    return Array.from(this)
}
function cS() {
    var e = [];
    return this.eachBefore(function(t) {
        t.children || e.push(t)
    }),
    e
}
function dS() {
    var e = this
      , t = [];
    return e.each(function(n) {
        n !== e && t.push({
            source: n.parent,
            target: n
        })
    }),
    t
}
function *fS() {
    var e = this, t, n = [e], r, i, o;
    do
        for (t = n.reverse(),
        n = []; e = t.pop(); )
            if (yield e,
            r = e.children)
                for (i = 0,
                o = r.length; i < o; ++i)
                    n.push(r[i]);
    while (n.length)
}
function Ah(e, t) {
    e instanceof Map ? (e = [void 0, e],
    t === void 0 && (t = a8)) : t === void 0 && (t = s8);
    for (var n = new Ml(e), r, i = [n], o, s, a, l; r = i.pop(); )
        if ((s = t(r.data)) && (l = (s = Array.from(s)).length))
            for (r.children = s,
            a = l - 1; a >= 0; --a)
                i.push(o = s[a] = new Ml(s[a])),
                o.parent = r,
                o.depth = r.depth + 1;
    return n.eachBefore(l8)
}
function o8() {
    return Ah(this).eachBefore(u8)
}
function s8(e) {
    return e.children
}
function a8(e) {
    return Array.isArray(e) ? e[1] : null
}
function u8(e) {
    e.data.value !== void 0 && (e.value = e.data.value),
    e.data = e.data.data
}
function l8(e) {
    var t = 0;
    do
        e.height = t;
    while ((e = e.parent) && e.height < ++t)
}
function Ml(e) {
    this.data = e,
    this.depth = this.height = 0,
    this.parent = null
}
Ml.prototype = Ah.prototype = {
    constructor: Ml,
    count: eS,
    each: tS,
    eachAfter: rS,
    eachBefore: nS,
    find: iS,
    sum: oS,
    sort: sS,
    path: aS,
    ancestors: uS,
    descendants: lS,
    leaves: cS,
    links: dS,
    copy: o8,
    [Symbol.iterator]: fS
};
function hS(e) {
    return e == null ? null : n0(e)
}
function n0(e) {
    if (typeof e != "function")
        throw new Error;
    return e
}
function xi() {
    return 0
}
function _o(e) {
    return function() {
        return e
    }
}
function Ia() {
    let e = 1;
    return () => (e = (1664525 * e + 1013904223) % 4294967296) / 4294967296
}
function pS(e) {
    return typeof e == "object" && "length"in e ? e : Array.from(e)
}
function mS(e, t) {
    let n = e.length, r, i;
    for (; n; )
        i = t() * n-- | 0,
        r = e[n],
        e[n] = e[i],
        e[i] = r;
    return e
}
function c8(e) {
    return i0(e, Ia())
}
function i0(e, t) {
    for (var n = 0, r = (e = mS(Array.from(e), t)).length, i = [], o, s; n < r; )
        o = e[n],
        s && gS(s, o) ? ++n : (s = f8(i = d8(i, o)),
        n = 0);
    return s
}
function d8(e, t) {
    var n, r;
    if (r0(t, e))
        return [t];
    for (n = 0; n < e.length; ++n)
        if (Ph(t, e[n]) && r0(bl(e[n], t), e))
            return [e[n], t];
    for (n = 0; n < e.length - 1; ++n)
        for (r = n + 1; r < e.length; ++r)
            if (Ph(bl(e[n], e[r]), t) && Ph(bl(e[n], t), e[r]) && Ph(bl(e[r], t), e[n]) && r0(yS(e[n], e[r], t), e))
                return [e[n], e[r], t];
    throw new Error
}
function Ph(e, t) {
    var n = e.r - t.r
      , r = t.x - e.x
      , i = t.y - e.y;
    return n < 0 || n * n < r * r + i * i
}
function gS(e, t) {
    var n = e.r - t.r + Math.max(e.r, t.r, 1) * 1e-9
      , r = t.x - e.x
      , i = t.y - e.y;
    return n > 0 && n * n > r * r + i * i
}
function r0(e, t) {
    for (var n = 0; n < t.length; ++n)
        if (!gS(e, t[n]))
            return !1;
    return !0
}
function f8(e) {
    switch (e.length) {
    case 1:
        return h8(e[0]);
    case 2:
        return bl(e[0], e[1]);
    case 3:
        return yS(e[0], e[1], e[2])
    }
}
function h8(e) {
    return {
        x: e.x,
        y: e.y,
        r: e.r
    }
}
function bl(e, t) {
    var n = e.x
      , r = e.y
      , i = e.r
      , o = t.x
      , s = t.y
      , a = t.r
      , l = o - n
      , c = s - r
      , f = a - i
      , p = Math.sqrt(l * l + c * c);
    return {
        x: (n + o + l / p * f) / 2,
        y: (r + s + c / p * f) / 2,
        r: (p + i + a) / 2
    }
}
function yS(e, t, n) {
    var r = e.x
      , i = e.y
      , o = e.r
      , s = t.x
      , a = t.y
      , l = t.r
      , c = n.x
      , f = n.y
      , p = n.r
      , m = r - s
      , y = r - c
      , v = i - a
      , w = i - f
      , x = l - o
      , D = p - o
      , I = r * r + i * i - o * o
      , T = I - s * s - a * a + l * l
      , M = I - c * c - f * f + p * p
      , S = y * v - m * w
      , E = (v * M - w * T) / (S * 2) - r
      , R = (w * x - v * D) / S
      , Z = (y * T - m * M) / (S * 2) - i
      , ve = (m * D - y * x) / S
      , we = R * R + ve * ve - 1
      , V = 2 * (o + E * R + Z * ve)
      , xe = E * E + Z * Z - o * o
      , $ = -(Math.abs(we) > 1e-6 ? (V + Math.sqrt(V * V - 4 * we * xe)) / (2 * we) : xe / V);
    return {
        x: r + E + R * $,
        y: i + Z + ve * $,
        r: $
    }
}
function vS(e, t, n) {
    var r = e.x - t.x, i, o, s = e.y - t.y, a, l, c = r * r + s * s;
    c ? (o = t.r + n.r,
    o *= o,
    l = e.r + n.r,
    l *= l,
    o > l ? (i = (c + l - o) / (2 * c),
    a = Math.sqrt(Math.max(0, l / c - i * i)),
    n.x = e.x - i * r - a * s,
    n.y = e.y - i * s + a * r) : (i = (c + o - l) / (2 * c),
    a = Math.sqrt(Math.max(0, o / c - i * i)),
    n.x = t.x + i * r - a * s,
    n.y = t.y + i * s + a * r)) : (n.x = t.x + n.r,
    n.y = t.y)
}
function _S(e, t) {
    var n = e.r + t.r - 1e-6
      , r = t.x - e.x
      , i = t.y - e.y;
    return n > 0 && n * n > r * r + i * i
}
function wS(e) {
    var t = e._
      , n = e.next._
      , r = t.r + n.r
      , i = (t.x * n.r + n.x * t.r) / r
      , o = (t.y * n.r + n.y * t.r) / r;
    return i * i + o * o
}
function Fh(e) {
    this._ = e,
    this.next = null,
    this.previous = null
}
function o0(e, t) {
    if (!(o = (e = pS(e)).length))
        return 0;
    var n, r, i, o, s, a, l, c, f, p, m;
    if (n = e[0],
    n.x = 0,
    n.y = 0,
    !(o > 1))
        return n.r;
    if (r = e[1],
    n.x = -r.r,
    r.x = n.r,
    r.y = 0,
    !(o > 2))
        return n.r + r.r;
    vS(r, n, i = e[2]),
    n = new Fh(n),
    r = new Fh(r),
    i = new Fh(i),
    n.next = i.previous = r,
    r.next = n.previous = i,
    i.next = r.previous = n;
    e: for (l = 3; l < o; ++l) {
        vS(n._, r._, i = e[l]),
        i = new Fh(i),
        c = r.next,
        f = n.previous,
        p = r._.r,
        m = n._.r;
        do
            if (p <= m) {
                if (_S(c._, i._)) {
                    r = c,
                    n.next = r,
                    r.previous = n,
                    --l;
                    continue e
                }
                p += c._.r,
                c = c.next
            } else {
                if (_S(f._, i._)) {
                    n = f,
                    n.next = r,
                    r.previous = n,
                    --l;
                    continue e
                }
                m += f._.r,
                f = f.previous
            }
        while (c !== f.next);
        for (i.previous = n,
        i.next = r,
        n.next = r.previous = r = i,
        s = wS(n); (i = i.next) !== r; )
            (a = wS(i)) < s && (n = i,
            s = a);
        r = n.next
    }
    for (n = [r._],
    i = r; (i = i.next) !== r; )
        n.push(i._);
    for (i = i0(n, t),
    l = 0; l < o; ++l)
        n = e[l],
        n.x -= i.x,
        n.y -= i.y;
    return i.r
}
function p8(e) {
    return o0(e, Ia()),
    e
}
function m8(e) {
    return Math.sqrt(e.value)
}
function g8() {
    var e = null
      , t = 1
      , n = 1
      , r = xi;
    function i(o) {
        let s = Ia();
        return o.x = t / 2,
        o.y = n / 2,
        e ? o.eachBefore(DS(e)).eachAfter(s0(r, .5, s)).eachBefore(xS(1)) : o.eachBefore(DS(m8)).eachAfter(s0(xi, 1, s)).eachAfter(s0(r, o.r / Math.min(t, n), s)).eachBefore(xS(Math.min(t, n) / (2 * o.r))),
        o
    }
    return i.radius = function(o) {
        return arguments.length ? (e = hS(o),
        i) : e
    }
    ,
    i.size = function(o) {
        return arguments.length ? (t = +o[0],
        n = +o[1],
        i) : [t, n]
    }
    ,
    i.padding = function(o) {
        return arguments.length ? (r = typeof o == "function" ? o : _o(+o),
        i) : r
    }
    ,
    i
}
function DS(e) {
    return function(t) {
        t.children || (t.r = Math.max(0, +e(t) || 0))
    }
}
function s0(e, t, n) {
    return function(r) {
        if (i = r.children) {
            var i, o, s = i.length, a = e(r) * t || 0, l;
            if (a)
                for (o = 0; o < s; ++o)
                    i[o].r += a;
            if (l = o0(i, n),
            a)
                for (o = 0; o < s; ++o)
                    i[o].r -= a;
            r.r = l + a
        }
    }
}
function xS(e) {
    return function(t) {
        var n = t.parent;
        t.r *= e,
        n && (t.x = n.x + e * t.x,
        t.y = n.y + e * t.y)
    }
}
function CS(e) {
    e.x0 = Math.round(e.x0),
    e.y0 = Math.round(e.y0),
    e.x1 = Math.round(e.x1),
    e.y1 = Math.round(e.y1)
}
function MS(e, t, n, r, i) {
    for (var o = e.children, s, a = -1, l = o.length, c = e.value && (r - t) / e.value; ++a < l; )
        s = o[a],
        s.y0 = n,
        s.y1 = i,
        s.x0 = t,
        s.x1 = t += s.value * c
}
function bS(e, t, n, r, i) {
    for (var o = e.children, s, a = -1, l = o.length, c = e.value && (i - n) / e.value; ++a < l; )
        s = o[a],
        s.x0 = t,
        s.x1 = r,
        s.y0 = n,
        s.y1 = n += s.value * c
}
var y8 = (1 + Math.sqrt(5)) / 2;
function v8(e, t, n, r, i, o) {
    for (var s = [], a = t.children, l, c, f = 0, p = 0, m = a.length, y, v, w = t.value, x, D, I, T, M, S, E; f < m; ) {
        y = i - n,
        v = o - r;
        do
            x = a[p++].value;
        while (!x && p < m);
        for (D = I = x,
        S = Math.max(v / y, y / v) / (w * e),
        E = x * x * S,
        M = Math.max(I / E, E / D); p < m; ++p) {
            if (x += c = a[p].value,
            c < D && (D = c),
            c > I && (I = c),
            E = x * x * S,
            T = Math.max(I / E, E / D),
            T > M) {
                x -= c;
                break
            }
            M = T
        }
        s.push(l = {
            value: x,
            dice: y < v,
            children: a.slice(f, p)
        }),
        l.dice ? MS(l, n, r, i, w ? r += v * x / w : o) : bS(l, n, r, w ? n += y * x / w : i, o),
        w -= x,
        f = p
    }
    return s
}
var IS = function e(t) {
    function n(r, i, o, s, a) {
        v8(t, r, i, o, s, a)
    }
    return n.ratio = function(r) {
        return e((r = +r) > 1 ? r : 1)
    }
    ,
    n
}(y8);
function _8() {
    var e = IS
      , t = !1
      , n = 1
      , r = 1
      , i = [0]
      , o = xi
      , s = xi
      , a = xi
      , l = xi
      , c = xi;
    function f(m) {
        return m.x0 = m.y0 = 0,
        m.x1 = n,
        m.y1 = r,
        m.eachBefore(p),
        i = [0],
        t && m.eachBefore(CS),
        m
    }
    function p(m) {
        var y = i[m.depth]
          , v = m.x0 + y
          , w = m.y0 + y
          , x = m.x1 - y
          , D = m.y1 - y;
        x < v && (v = x = (v + x) / 2),
        D < w && (w = D = (w + D) / 2),
        m.x0 = v,
        m.y0 = w,
        m.x1 = x,
        m.y1 = D,
        m.children && (y = i[m.depth + 1] = o(m) / 2,
        v += c(m) - y,
        w += s(m) - y,
        x -= a(m) - y,
        D -= l(m) - y,
        x < v && (v = x = (v + x) / 2),
        D < w && (w = D = (w + D) / 2),
        e(m, v, w, x, D))
    }
    return f.round = function(m) {
        return arguments.length ? (t = !!m,
        f) : t
    }
    ,
    f.size = function(m) {
        return arguments.length ? (n = +m[0],
        r = +m[1],
        f) : [n, r]
    }
    ,
    f.tile = function(m) {
        return arguments.length ? (e = n0(m),
        f) : e
    }
    ,
    f.padding = function(m) {
        return arguments.length ? f.paddingInner(m).paddingOuter(m) : f.paddingInner()
    }
    ,
    f.paddingInner = function(m) {
        return arguments.length ? (o = typeof m == "function" ? m : _o(+m),
        f) : o
    }
    ,
    f.paddingOuter = function(m) {
        return arguments.length ? f.paddingTop(m).paddingRight(m).paddingBottom(m).paddingLeft(m) : f.paddingTop()
    }
    ,
    f.paddingTop = function(m) {
        return arguments.length ? (s = typeof m == "function" ? m : _o(+m),
        f) : s
    }
    ,
    f.paddingRight = function(m) {
        return arguments.length ? (a = typeof m == "function" ? m : _o(+m),
        f) : a
    }
    ,
    f.paddingBottom = function(m) {
        return arguments.length ? (l = typeof m == "function" ? m : _o(+m),
        f) : l
    }
    ,
    f.paddingLeft = function(m) {
        return arguments.length ? (c = typeof m == "function" ? m : _o(+m),
        f) : c
    }
    ,
    f
}
function w8(e, t, n, r, i) {
    var o = e.children, s, a = o.length, l, c = new Array(a + 1);
    for (c[0] = l = s = 0; s < a; ++s)
        c[s + 1] = l += o[s].value;
    f(0, a, e.value, t, n, r, i);
    function f(p, m, y, v, w, x, D) {
        if (p >= m - 1) {
            var I = o[p];
            I.x0 = v,
            I.y0 = w,
            I.x1 = x,
            I.y1 = D;
            return
        }
        for (var T = c[p], M = y / 2 + T, S = p + 1, E = m - 1; S < E; ) {
            var R = S + E >>> 1;
            c[R] < M ? S = R + 1 : E = R
        }
        M - c[S - 1] < c[S] - M && p + 1 < S && --S;
        var Z = c[S] - T
          , ve = y - Z;
        if (x - v > D - w) {
            var we = y ? (v * ve + x * Z) / y : x;
            f(p, S, Z, v, w, we, D),
            f(S, m, ve, we, w, x, D)
        } else {
            var V = y ? (w * ve + D * Z) / y : D;
            f(p, S, Z, v, w, x, V),
            f(S, m, ve, v, V, x, D)
        }
    }
}
function In(e, t) {
    switch (arguments.length) {
    case 0:
        break;
    case 1:
        this.range(e);
        break;
    default:
        this.range(t).domain(e);
        break
    }
    return this
}
var ES = Symbol("implicit");
function Rh() {
    var e = new _a
      , t = []
      , n = []
      , r = ES;
    function i(o) {
        let s = e.get(o);
        if (s === void 0) {
            if (r !== ES)
                return r;
            e.set(o, s = t.push(o) - 1)
        }
        return n[s % n.length]
    }
    return i.domain = function(o) {
        if (!arguments.length)
            return t.slice();
        t = [],
        e = new _a;
        for (let s of o)
            e.has(s) || e.set(s, t.push(s) - 1);
        return i
    }
    ,
    i.range = function(o) {
        return arguments.length ? (n = Array.from(o),
        i) : n.slice()
    }
    ,
    i.unknown = function(o) {
        return arguments.length ? (r = o,
        i) : r
    }
    ,
    i.copy = function() {
        return Rh(t, n).unknown(r)
    }
    ,
    In.apply(i, arguments),
    i
}
function Lh() {
    var e = Rh().unknown(void 0), t = e.domain, n = e.range, r = 0, i = 1, o, s, a = !1, l = 0, c = 0, f = .5;
    delete e.unknown;
    function p() {
        var m = t().length
          , y = i < r
          , v = y ? i : r
          , w = y ? r : i;
        o = (w - v) / Math.max(1, m - l + c * 2),
        a && (o = Math.floor(o)),
        v += (w - v - o * (m - l)) * f,
        s = o * (1 - l),
        a && (v = Math.round(v),
        s = Math.round(s));
        var x = Da(m).map(function(D) {
            return v + o * D
        });
        return n(y ? x.reverse() : x)
    }
    return e.domain = function(m) {
        return arguments.length ? (t(m),
        p()) : t()
    }
    ,
    e.range = function(m) {
        return arguments.length ? ([r,i] = m,
        r = +r,
        i = +i,
        p()) : [r, i]
    }
    ,
    e.rangeRound = function(m) {
        return [r,i] = m,
        r = +r,
        i = +i,
        a = !0,
        p()
    }
    ,
    e.bandwidth = function() {
        return s
    }
    ,
    e.step = function() {
        return o
    }
    ,
    e.round = function(m) {
        return arguments.length ? (a = !!m,
        p()) : a
    }
    ,
    e.padding = function(m) {
        return arguments.length ? (l = Math.min(1, c = +m),
        p()) : l
    }
    ,
    e.paddingInner = function(m) {
        return arguments.length ? (l = Math.min(1, m),
        p()) : l
    }
    ,
    e.paddingOuter = function(m) {
        return arguments.length ? (c = +m,
        p()) : c
    }
    ,
    e.align = function(m) {
        return arguments.length ? (f = Math.max(0, Math.min(1, m)),
        p()) : f
    }
    ,
    e.copy = function() {
        return Lh(t(), [r, i]).round(a).paddingInner(l).paddingOuter(c).align(f)
    }
    ,
    In.apply(p(), arguments)
}
function SS(e) {
    var t = e.copy;
    return e.padding = e.paddingOuter,
    delete e.paddingInner,
    delete e.paddingOuter,
    e.copy = function() {
        return SS(t())
    }
    ,
    e
}
function D8() {
    return SS(Lh.apply(null, arguments).paddingInner(1))
}
function a0(e) {
    return function() {
        return e
    }
}
function u0(e) {
    return +e
}
var TS = [0, 1];
function gr(e) {
    return e
}
function l0(e, t) {
    return (t -= e = +e) ? function(n) {
        return (n - e) / t
    }
    : a0(isNaN(t) ? NaN : .5)
}
function x8(e, t) {
    var n;
    return e > t && (n = e,
    e = t,
    t = n),
    function(r) {
        return Math.max(e, Math.min(t, r))
    }
}
function C8(e, t, n) {
    var r = e[0]
      , i = e[1]
      , o = t[0]
      , s = t[1];
    return i < r ? (r = l0(i, r),
    o = n(s, o)) : (r = l0(r, i),
    o = n(o, s)),
    function(a) {
        return o(r(a))
    }
}
function M8(e, t, n) {
    var r = Math.min(e.length, t.length) - 1
      , i = new Array(r)
      , o = new Array(r)
      , s = -1;
    for (e[r] < e[0] && (e = e.slice().reverse(),
    t = t.slice().reverse()); ++s < r; )
        i[s] = l0(e[s], e[s + 1]),
        o[s] = n(t[s], t[s + 1]);
    return function(a) {
        var l = is(e, a, 1, r) - 1;
        return o[l](i[l](a))
    }
}
function Ea(e, t) {
    return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())
}
function c0() {
    var e = TS, t = TS, n = wi, r, i, o, s = gr, a, l, c;
    function f() {
        var m = Math.min(e.length, t.length);
        return s !== gr && (s = x8(e[0], e[m - 1])),
        a = m > 2 ? M8 : C8,
        l = c = null,
        p
    }
    function p(m) {
        return m == null || isNaN(m = +m) ? o : (l || (l = a(e.map(r), t, n)))(r(s(m)))
    }
    return p.invert = function(m) {
        return s(i((c || (c = a(t, e.map(r), Gt)))(m)))
    }
    ,
    p.domain = function(m) {
        return arguments.length ? (e = Array.from(m, u0),
        f()) : e.slice()
    }
    ,
    p.range = function(m) {
        return arguments.length ? (t = Array.from(m),
        f()) : t.slice()
    }
    ,
    p.rangeRound = function(m) {
        return t = Array.from(m),
        n = Vv,
        f()
    }
    ,
    p.clamp = function(m) {
        return arguments.length ? (s = m ? !0 : gr,
        f()) : s !== gr
    }
    ,
    p.interpolate = function(m) {
        return arguments.length ? (n = m,
        f()) : n
    }
    ,
    p.unknown = function(m) {
        return arguments.length ? (o = m,
        p) : o
    }
    ,
    function(m, y) {
        return r = m,
        i = y,
        f()
    }
}
function Il() {
    return c0()(gr, gr)
}
function d0(e, t, n, r) {
    var i = wa(e, t, n), o;
    switch (r = vo(r ?? ",f"),
    r.type) {
    case "s":
        {
            var s = Math.max(Math.abs(e), Math.abs(t));
            return r.precision == null && !isNaN(o = e0(i, s)) && (r.precision = o),
            Oh(r, s)
        }
    case "":
    case "e":
    case "g":
    case "p":
    case "r":
        {
            r.precision == null && !isNaN(o = t0(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = o - (r.type === "e"));
            break
        }
    case "f":
    case "%":
        {
            r.precision == null && !isNaN(o = Kv(i)) && (r.precision = o - (r.type === "%") * 2);
            break
        }
    }
    return Nh(r)
}
function El(e) {
    var t = e.domain;
    return e.ticks = function(n) {
        var r = t();
        return nh(r[0], r[r.length - 1], n ?? 10)
    }
    ,
    e.tickFormat = function(n, r) {
        var i = t();
        return d0(i[0], i[i.length - 1], n ?? 10, r)
    }
    ,
    e.nice = function(n) {
        n == null && (n = 10);
        var r = t(), i = 0, o = r.length - 1, s = r[i], a = r[o], l, c, f = 10;
        for (a < s && (c = s,
        s = a,
        a = c,
        c = i,
        i = o,
        o = c); f-- > 0; ) {
            if (c = Ju(s, a, n),
            c === l)
                return r[i] = s,
                r[o] = a,
                t(r);
            if (c > 0)
                s = Math.floor(s / c) * c,
                a = Math.ceil(a / c) * c;
            else if (c < 0)
                s = Math.ceil(s * c) / c,
                a = Math.floor(a * c) / c;
            else
                break;
            l = c
        }
        return e
    }
    ,
    e
}
function Ci() {
    var e = Il();
    return e.copy = function() {
        return Ea(e, Ci())
    }
    ,
    In.apply(e, arguments),
    El(e)
}
function f0(e, t) {
    e = e.slice();
    var n = 0, r = e.length - 1, i = e[n], o = e[r], s;
    return o < i && (s = n,
    n = r,
    r = s,
    s = i,
    i = o,
    o = s),
    e[n] = t.floor(i),
    e[r] = t.ceil(o),
    e
}
function kS(e) {
    return function(t) {
        return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
    }
}
function b8(e) {
    return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e)
}
function I8(e) {
    return e < 0 ? -e * e : e * e
}
function E8(e) {
    var t = e(gr, gr)
      , n = 1;
    function r() {
        return n === 1 ? e(gr, gr) : n === .5 ? e(b8, I8) : e(kS(n), kS(1 / n))
    }
    return t.exponent = function(i) {
        return arguments.length ? (n = +i,
        r()) : n
    }
    ,
    El(t)
}
function h0() {
    var e = E8(c0());
    return e.copy = function() {
        return Ea(e, h0()).exponent(e.exponent())
    }
    ,
    In.apply(e, arguments),
    e
}
function p0() {
    var e = [], t = [], n = [], r;
    function i() {
        var s = 0
          , a = Math.max(1, t.length);
        for (n = new Array(a - 1); ++s < a; )
            n[s - 1] = Ev(e, s / a);
        return o
    }
    function o(s) {
        return s == null || isNaN(s = +s) ? r : t[is(n, s)]
    }
    return o.invertExtent = function(s) {
        var a = t.indexOf(s);
        return a < 0 ? [NaN, NaN] : [a > 0 ? n[a - 1] : e[0], a < n.length ? n[a] : e[e.length - 1]]
    }
    ,
    o.domain = function(s) {
        if (!arguments.length)
            return e.slice();
        e = [];
        for (let a of s)
            a != null && !isNaN(a = +a) && e.push(a);
        return e.sort(Vn),
        i()
    }
    ,
    o.range = function(s) {
        return arguments.length ? (t = Array.from(s),
        i()) : t.slice()
    }
    ,
    o.unknown = function(s) {
        return arguments.length ? (r = s,
        o) : r
    }
    ,
    o.quantiles = function() {
        return n.slice()
    }
    ,
    o.copy = function() {
        return p0().domain(e).range(t).unknown(r)
    }
    ,
    In.apply(o, arguments)
}
function m0() {
    var e = 0, t = 1, n = 1, r = [.5], i = [0, 1], o;
    function s(l) {
        return l != null && l <= l ? i[is(r, l, 0, n)] : o
    }
    function a() {
        var l = -1;
        for (r = new Array(n); ++l < n; )
            r[l] = ((l + 1) * t - (l - n) * e) / (n + 1);
        return s
    }
    return s.domain = function(l) {
        return arguments.length ? ([e,t] = l,
        e = +e,
        t = +t,
        a()) : [e, t]
    }
    ,
    s.range = function(l) {
        return arguments.length ? (n = (i = Array.from(l)).length - 1,
        a()) : i.slice()
    }
    ,
    s.invertExtent = function(l) {
        var c = i.indexOf(l);
        return c < 0 ? [NaN, NaN] : c < 1 ? [e, r[0]] : c >= n ? [r[n - 1], t] : [r[c - 1], r[c]]
    }
    ,
    s.unknown = function(l) {
        return arguments.length && (o = l),
        s
    }
    ,
    s.thresholds = function() {
        return r.slice()
    }
    ,
    s.copy = function() {
        return m0().domain([e, t]).range(i).unknown(o)
    }
    ,
    In.apply(El(s), arguments)
}
var g0 = new Date
  , y0 = new Date;
function Xe(e, t, n, r) {
    function i(o) {
        return e(o = arguments.length === 0 ? new Date : new Date(+o)),
        o
    }
    return i.floor = o => (e(o = new Date(+o)),
    o),
    i.ceil = o => (e(o = new Date(o - 1)),
    t(o, 1),
    e(o),
    o),
    i.round = o => {
        let s = i(o)
          , a = i.ceil(o);
        return o - s < a - o ? s : a
    }
    ,
    i.offset = (o, s) => (t(o = new Date(+o), s == null ? 1 : Math.floor(s)),
    o),
    i.range = (o, s, a) => {
        let l = [];
        if (o = i.ceil(o),
        a = a == null ? 1 : Math.floor(a),
        !(o < s) || !(a > 0))
            return l;
        let c;
        do
            l.push(c = new Date(+o)),
            t(o, a),
            e(o);
        while (c < o && o < s);
        return l
    }
    ,
    i.filter = o => Xe(s => {
        if (s >= s)
            for (; e(s),
            !o(s); )
                s.setTime(s - 1)
    }
    , (s, a) => {
        if (s >= s)
            if (a < 0)
                for (; ++a <= 0; )
                    for (; t(s, -1),
                    !o(s); )
                        ;
            else
                for (; --a >= 0; )
                    for (; t(s, 1),
                    !o(s); )
                        ;
    }
    ),
    n && (i.count = (o, s) => (g0.setTime(+o),
    y0.setTime(+s),
    e(g0),
    e(y0),
    Math.floor(n(g0, y0))),
    i.every = o => (o = Math.floor(o),
    !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? s => r(s) % o === 0 : s => i.count(0, s) % o === 0) : i)),
    i
}
var Sl = Xe( () => {}
, (e, t) => {
    e.setTime(+e + t)
}
, (e, t) => t - e);
Sl.every = e => (e = Math.floor(e),
!isFinite(e) || !(e > 0) ? null : e > 1 ? Xe(t => {
    t.setTime(Math.floor(t / e) * e)
}
, (t, n) => {
    t.setTime(+t + n * e)
}
, (t, n) => (n - t) / e) : Sl);
var fpe = Sl.range;
var zr = Xe(e => {
    e.setTime(e - e.getMilliseconds())
}
, (e, t) => {
    e.setTime(+e + t * 1e3)
}
, (e, t) => (t - e) / 1e3, e => e.getUTCSeconds())
  , NS = zr.range;
var Sa = Xe(e => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * 1e3)
}
, (e, t) => {
    e.setTime(+e + t * 6e4)
}
, (e, t) => (t - e) / 6e4, e => e.getMinutes())
  , S8 = Sa.range
  , Vh = Xe(e => {
    e.setUTCSeconds(0, 0)
}
, (e, t) => {
    e.setTime(+e + t * 6e4)
}
, (e, t) => (t - e) / 6e4, e => e.getUTCMinutes())
  , T8 = Vh.range;
var Ta = Xe(e => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * 1e3 - e.getMinutes() * 6e4)
}
, (e, t) => {
    e.setTime(+e + t * 36e5)
}
, (e, t) => (t - e) / 36e5, e => e.getHours())
  , k8 = Ta.range
  , jh = Xe(e => {
    e.setUTCMinutes(0, 0, 0)
}
, (e, t) => {
    e.setTime(+e + t * 36e5)
}
, (e, t) => (t - e) / 36e5, e => e.getUTCHours())
  , N8 = jh.range;
var Mi = Xe(e => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 864e5, e => e.getDate() - 1)
  , O8 = Mi.range
  , kl = Xe(e => {
    e.setUTCHours(0, 0, 0, 0)
}
, (e, t) => {
    e.setUTCDate(e.getUTCDate() + t)
}
, (e, t) => (t - e) / 864e5, e => e.getUTCDate() - 1)
  , A8 = kl.range
  , Bh = Xe(e => {
    e.setUTCHours(0, 0, 0, 0)
}
, (e, t) => {
    e.setUTCDate(e.getUTCDate() + t)
}
, (e, t) => (t - e) / 864e5, e => Math.floor(e / 864e5))
  , P8 = Bh.range;
function gs(e) {
    return Xe(t => {
        t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7),
        t.setHours(0, 0, 0, 0)
    }
    , (t, n) => {
        t.setDate(t.getDate() + n * 7)
    }
    , (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 6048e5)
}
var bi = gs(0)
  , ka = gs(1)
  , AS = gs(2)
  , PS = gs(3)
  , wo = gs(4)
  , FS = gs(5)
  , RS = gs(6)
  , LS = bi.range
  , F8 = ka.range
  , R8 = AS.range
  , L8 = PS.range
  , V8 = wo.range
  , j8 = FS.range
  , B8 = RS.range;
function ys(e) {
    return Xe(t => {
        t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7),
        t.setUTCHours(0, 0, 0, 0)
    }
    , (t, n) => {
        t.setUTCDate(t.getUTCDate() + n * 7)
    }
    , (t, n) => (n - t) / 6048e5)
}
var vs = ys(0)
  , Na = ys(1)
  , VS = ys(2)
  , jS = ys(3)
  , Do = ys(4)
  , BS = ys(5)
  , HS = ys(6)
  , US = vs.range
  , H8 = Na.range
  , U8 = VS.range
  , $8 = jS.range
  , Y8 = Do.range
  , W8 = BS.range
  , z8 = HS.range;
var Oa = Xe(e => {
    e.setDate(1),
    e.setHours(0, 0, 0, 0)
}
, (e, t) => {
    e.setMonth(e.getMonth() + t)
}
, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, e => e.getMonth())
  , G8 = Oa.range
  , Hh = Xe(e => {
    e.setUTCDate(1),
    e.setUTCHours(0, 0, 0, 0)
}
, (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t)
}
, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, e => e.getUTCMonth())
  , q8 = Hh.range;
var Bn = Xe(e => {
    e.setMonth(0, 1),
    e.setHours(0, 0, 0, 0)
}
, (e, t) => {
    e.setFullYear(e.getFullYear() + t)
}
, (e, t) => t.getFullYear() - e.getFullYear(), e => e.getFullYear());
Bn.every = e => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Xe(t => {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e),
    t.setMonth(0, 1),
    t.setHours(0, 0, 0, 0)
}
, (t, n) => {
    t.setFullYear(t.getFullYear() + n * e)
}
);
var Z8 = Bn.range
  , yr = Xe(e => {
    e.setUTCMonth(0, 1),
    e.setUTCHours(0, 0, 0, 0)
}
, (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t)
}
, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), e => e.getUTCFullYear());
yr.every = e => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Xe(t => {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
    t.setUTCMonth(0, 1),
    t.setUTCHours(0, 0, 0, 0)
}
, (t, n) => {
    t.setUTCFullYear(t.getUTCFullYear() + n * e)
}
);
var Q8 = yr.range;
function YS(e, t, n, r, i, o) {
    let s = [[zr, 1, 1e3], [zr, 5, 5 * 1e3], [zr, 15, 15 * 1e3], [zr, 30, 30 * 1e3], [o, 1, 6e4], [o, 5, 5 * 6e4], [o, 15, 15 * 6e4], [o, 30, 30 * 6e4], [i, 1, 36e5], [i, 3, 3 * 36e5], [i, 6, 6 * 36e5], [i, 12, 12 * 36e5], [r, 1, 864e5], [r, 2, 2 * 864e5], [n, 1, 6048e5], [t, 1, 2592e6], [t, 3, 3 * 2592e6], [e, 1, 31536e6]];
    function a(c, f, p) {
        let m = f < c;
        m && ([c,f] = [f, c]);
        let y = p && typeof p.range == "function" ? p : l(c, f, p)
          , v = y ? y.range(c, +f + 1) : [];
        return m ? v.reverse() : v
    }
    function l(c, f, p) {
        let m = Math.abs(f - c) / p
          , y = rs( ([,,x]) => x).right(s, m);
        if (y === s.length)
            return e.every(wa(c / 31536e6, f / 31536e6, p));
        if (y === 0)
            return Sl.every(Math.max(wa(c, f, p), 1));
        let[v,w] = s[m / s[y - 1][2] < s[y][2] / m ? y - 1 : y];
        return v.every(w)
    }
    return [a, l]
}
var [J8,K8] = YS(yr, Hh, vs, Bh, jh, Vh)
  , [v0,_0] = YS(Bn, Oa, bi, Mi, Ta, Sa);
function w0(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);
        return t.setFullYear(e.y),
        t
    }
    return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)
}
function D0(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        return t.setUTCFullYear(e.y),
        t
    }
    return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L))
}
function Nl(e, t, n) {
    return {
        y: e,
        m: t,
        d: n,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    }
}
function x0(e) {
    var t = e.dateTime
      , n = e.date
      , r = e.time
      , i = e.periods
      , o = e.days
      , s = e.shortDays
      , a = e.months
      , l = e.shortMonths
      , c = Ol(i)
      , f = Al(i)
      , p = Ol(o)
      , m = Al(o)
      , y = Ol(s)
      , v = Al(s)
      , w = Ol(a)
      , x = Al(a)
      , D = Ol(l)
      , I = Al(l)
      , T = {
        a: W,
        A: X,
        b: te,
        B: de,
        c: null,
        d: QS,
        e: QS,
        f: xY,
        g: OY,
        G: PY,
        H: _Y,
        I: wY,
        j: DY,
        L: tT,
        m: CY,
        M: MY,
        p: be,
        q: Oe,
        Q: KS,
        s: eT,
        S: bY,
        u: IY,
        U: EY,
        V: SY,
        w: TY,
        W: kY,
        x: null,
        X: null,
        y: NY,
        Y: AY,
        Z: FY,
        "%": JS
    }
      , M = {
        a: z,
        A: nt,
        b: rt,
        B: Dt,
        c: null,
        d: XS,
        e: XS,
        f: jY,
        g: ZY,
        G: XY,
        H: RY,
        I: LY,
        j: VY,
        L: rT,
        m: BY,
        M: HY,
        p: xt,
        q: Ht,
        Q: KS,
        s: eT,
        S: UY,
        u: $Y,
        U: YY,
        V: WY,
        w: zY,
        W: GY,
        x: null,
        X: null,
        y: qY,
        Y: QY,
        Z: JY,
        "%": JS
    }
      , S = {
        a: we,
        A: V,
        b: xe,
        B: $,
        c: b,
        d: qS,
        e: qS,
        f: mY,
        g: GS,
        G: zS,
        H: ZS,
        I: ZS,
        j: dY,
        L: pY,
        m: cY,
        M: fY,
        p: ve,
        q: lY,
        Q: yY,
        s: vY,
        S: hY,
        u: iY,
        U: oY,
        V: sY,
        w: rY,
        W: aY,
        x: H,
        X: N,
        y: GS,
        Y: zS,
        Z: uY,
        "%": gY
    };
    T.x = E(n, T),
    T.X = E(r, T),
    T.c = E(t, T),
    M.x = E(n, M),
    M.X = E(r, M),
    M.c = E(t, M);
    function E(G, Ce) {
        return function(Ie) {
            var A = [], Jt = -1, $e = 0, on = G.length, sn, Zr, Ua;
            for (Ie instanceof Date || (Ie = new Date(+Ie)); ++Jt < on; )
                G.charCodeAt(Jt) === 37 && (A.push(G.slice($e, Jt)),
                (Zr = WS[sn = G.charAt(++Jt)]) != null ? sn = G.charAt(++Jt) : Zr = sn === "e" ? " " : "0",
                (Ua = Ce[sn]) && (sn = Ua(Ie, Zr)),
                A.push(sn),
                $e = Jt + 1);
            return A.push(G.slice($e, Jt)),
            A.join("")
        }
    }
    function R(G, Ce) {
        return function(Ie) {
            var A = Nl(1900, void 0, 1), Jt = Z(A, G, Ie += "", 0), $e, on;
            if (Jt != Ie.length)
                return null;
            if ("Q"in A)
                return new Date(A.Q);
            if ("s"in A)
                return new Date(A.s * 1e3 + ("L"in A ? A.L : 0));
            if (Ce && !("Z"in A) && (A.Z = 0),
            "p"in A && (A.H = A.H % 12 + A.p * 12),
            A.m === void 0 && (A.m = "q"in A ? A.q : 0),
            "V"in A) {
                if (A.V < 1 || A.V > 53)
                    return null;
                "w"in A || (A.w = 1),
                "Z"in A ? ($e = D0(Nl(A.y, 0, 1)),
                on = $e.getUTCDay(),
                $e = on > 4 || on === 0 ? Na.ceil($e) : Na($e),
                $e = kl.offset($e, (A.V - 1) * 7),
                A.y = $e.getUTCFullYear(),
                A.m = $e.getUTCMonth(),
                A.d = $e.getUTCDate() + (A.w + 6) % 7) : ($e = w0(Nl(A.y, 0, 1)),
                on = $e.getDay(),
                $e = on > 4 || on === 0 ? ka.ceil($e) : ka($e),
                $e = Mi.offset($e, (A.V - 1) * 7),
                A.y = $e.getFullYear(),
                A.m = $e.getMonth(),
                A.d = $e.getDate() + (A.w + 6) % 7)
            } else
                ("W"in A || "U"in A) && ("w"in A || (A.w = "u"in A ? A.u % 7 : "W"in A ? 1 : 0),
                on = "Z"in A ? D0(Nl(A.y, 0, 1)).getUTCDay() : w0(Nl(A.y, 0, 1)).getDay(),
                A.m = 0,
                A.d = "W"in A ? (A.w + 6) % 7 + A.W * 7 - (on + 5) % 7 : A.w + A.U * 7 - (on + 6) % 7);
            return "Z"in A ? (A.H += A.Z / 100 | 0,
            A.M += A.Z % 100,
            D0(A)) : w0(A)
        }
    }
    function Z(G, Ce, Ie, A) {
        for (var Jt = 0, $e = Ce.length, on = Ie.length, sn, Zr; Jt < $e; ) {
            if (A >= on)
                return -1;
            if (sn = Ce.charCodeAt(Jt++),
            sn === 37) {
                if (sn = Ce.charAt(Jt++),
                Zr = S[sn in WS ? Ce.charAt(Jt++) : sn],
                !Zr || (A = Zr(G, Ie, A)) < 0)
                    return -1
            } else if (sn != Ie.charCodeAt(A++))
                return -1
        }
        return A
    }
    function ve(G, Ce, Ie) {
        var A = c.exec(Ce.slice(Ie));
        return A ? (G.p = f.get(A[0].toLowerCase()),
        Ie + A[0].length) : -1
    }
    function we(G, Ce, Ie) {
        var A = y.exec(Ce.slice(Ie));
        return A ? (G.w = v.get(A[0].toLowerCase()),
        Ie + A[0].length) : -1
    }
    function V(G, Ce, Ie) {
        var A = p.exec(Ce.slice(Ie));
        return A ? (G.w = m.get(A[0].toLowerCase()),
        Ie + A[0].length) : -1
    }
    function xe(G, Ce, Ie) {
        var A = D.exec(Ce.slice(Ie));
        return A ? (G.m = I.get(A[0].toLowerCase()),
        Ie + A[0].length) : -1
    }
    function $(G, Ce, Ie) {
        var A = w.exec(Ce.slice(Ie));
        return A ? (G.m = x.get(A[0].toLowerCase()),
        Ie + A[0].length) : -1
    }
    function b(G, Ce, Ie) {
        return Z(G, t, Ce, Ie)
    }
    function H(G, Ce, Ie) {
        return Z(G, n, Ce, Ie)
    }
    function N(G, Ce, Ie) {
        return Z(G, r, Ce, Ie)
    }
    function W(G) {
        return s[G.getDay()]
    }
    function X(G) {
        return o[G.getDay()]
    }
    function te(G) {
        return l[G.getMonth()]
    }
    function de(G) {
        return a[G.getMonth()]
    }
    function be(G) {
        return i[+(G.getHours() >= 12)]
    }
    function Oe(G) {
        return 1 + ~~(G.getMonth() / 3)
    }
    function z(G) {
        return s[G.getUTCDay()]
    }
    function nt(G) {
        return o[G.getUTCDay()]
    }
    function rt(G) {
        return l[G.getUTCMonth()]
    }
    function Dt(G) {
        return a[G.getUTCMonth()]
    }
    function xt(G) {
        return i[+(G.getUTCHours() >= 12)]
    }
    function Ht(G) {
        return 1 + ~~(G.getUTCMonth() / 3)
    }
    return {
        format: function(G) {
            var Ce = E(G += "", T);
            return Ce.toString = function() {
                return G
            }
            ,
            Ce
        },
        parse: function(G) {
            var Ce = R(G += "", !1);
            return Ce.toString = function() {
                return G
            }
            ,
            Ce
        },
        utcFormat: function(G) {
            var Ce = E(G += "", M);
            return Ce.toString = function() {
                return G
            }
            ,
            Ce
        },
        utcParse: function(G) {
            var Ce = R(G += "", !0);
            return Ce.toString = function() {
                return G
            }
            ,
            Ce
        }
    }
}
var WS = {
    "-": "",
    _: " ",
    0: "0"
}
  , jt = /^\s*\d+/
  , eY = /^%/
  , tY = /[\\^$*+?|[\]().{}]/g;
function Ve(e, t, n) {
    var r = e < 0 ? "-" : ""
      , i = (r ? -e : e) + ""
      , o = i.length;
    return r + (o < n ? new Array(n - o + 1).join(t) + i : i)
}
function nY(e) {
    return e.replace(tY, "\\$&")
}
function Ol(e) {
    return new RegExp("^(?:" + e.map(nY).join("|") + ")","i")
}
function Al(e) {
    return new Map(e.map( (t, n) => [t.toLowerCase(), n]))
}
function rY(e, t, n) {
    var r = jt.exec(t.slice(n, n + 1));
    return r ? (e.w = +r[0],
    n + r[0].length) : -1
}
function iY(e, t, n) {
    var r = jt.exec(t.slice(n, n + 1));
    return r ? (e.u = +r[0],
    n + r[0].length) : -1
}
function oY(e, t, n) {
    var r = jt.exec(t.slice(n, n + 2));
    return r ? (e.U = +r[0],
    n + r[0].length) : -1
}
function sY(e, t, n) {
    var r = jt.exec(t.slice(n, n + 2));
    return r ? (e.V = +r[0],
    n + r[0].length) : -1
}
function aY(e, t, n) {
    var r = jt.exec(t.slice(n, n + 2));
    return r ? (e.W = +r[0],
    n + r[0].length) : -1
}
function zS(e, t, n) {
    var r = jt.exec(t.slice(n, n + 4));
    return r ? (e.y = +r[0],
    n + r[0].length) : -1
}
function GS(e, t, n) {
    var r = jt.exec(t.slice(n, n + 2));
    return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3),
    n + r[0].length) : -1
}
function uY(e, t, n) {
    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
    return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")),
    n + r[0].length) : -1
}
function lY(e, t, n) {
    var r = jt.exec(t.slice(n, n + 1));
    return r ? (e.q = r[0] * 3 - 3,
    n + r[0].length) : -1
}
function cY(e, t, n) {
    var r = jt.exec(t.slice(n, n + 2));
    return r ? (e.m = r[0] - 1,
    n + r[0].length) : -1
}
function qS(e, t, n) {
    var r = jt.exec(t.slice(n, n + 2));
    return r ? (e.d = +r[0],
    n + r[0].length) : -1
}
function dY(e, t, n) {
    var r = jt.exec(t.slice(n, n + 3));
    return r ? (e.m = 0,
    e.d = +r[0],
    n + r[0].length) : -1
}
function ZS(e, t, n) {
    var r = jt.exec(t.slice(n, n + 2));
    return r ? (e.H = +r[0],
    n + r[0].length) : -1
}
function fY(e, t, n) {
    var r = jt.exec(t.slice(n, n + 2));
    return r ? (e.M = +r[0],
    n + r[0].length) : -1
}
function hY(e, t, n) {
    var r = jt.exec(t.slice(n, n + 2));
    return r ? (e.S = +r[0],
    n + r[0].length) : -1
}
function pY(e, t, n) {
    var r = jt.exec(t.slice(n, n + 3));
    return r ? (e.L = +r[0],
    n + r[0].length) : -1
}
function mY(e, t, n) {
    var r = jt.exec(t.slice(n, n + 6));
    return r ? (e.L = Math.floor(r[0] / 1e3),
    n + r[0].length) : -1
}
function gY(e, t, n) {
    var r = eY.exec(t.slice(n, n + 1));
    return r ? n + r[0].length : -1
}
function yY(e, t, n) {
    var r = jt.exec(t.slice(n));
    return r ? (e.Q = +r[0],
    n + r[0].length) : -1
}
function vY(e, t, n) {
    var r = jt.exec(t.slice(n));
    return r ? (e.s = +r[0],
    n + r[0].length) : -1
}
function QS(e, t) {
    return Ve(e.getDate(), t, 2)
}
function _Y(e, t) {
    return Ve(e.getHours(), t, 2)
}
function wY(e, t) {
    return Ve(e.getHours() % 12 || 12, t, 2)
}
function DY(e, t) {
    return Ve(1 + Mi.count(Bn(e), e), t, 3)
}
function tT(e, t) {
    return Ve(e.getMilliseconds(), t, 3)
}
function xY(e, t) {
    return tT(e, t) + "000"
}
function CY(e, t) {
    return Ve(e.getMonth() + 1, t, 2)
}
function MY(e, t) {
    return Ve(e.getMinutes(), t, 2)
}
function bY(e, t) {
    return Ve(e.getSeconds(), t, 2)
}
function IY(e) {
    var t = e.getDay();
    return t === 0 ? 7 : t
}
function EY(e, t) {
    return Ve(bi.count(Bn(e) - 1, e), t, 2)
}
function nT(e) {
    var t = e.getDay();
    return t >= 4 || t === 0 ? wo(e) : wo.ceil(e)
}
function SY(e, t) {
    return e = nT(e),
    Ve(wo.count(Bn(e), e) + (Bn(e).getDay() === 4), t, 2)
}
function TY(e) {
    return e.getDay()
}
function kY(e, t) {
    return Ve(ka.count(Bn(e) - 1, e), t, 2)
}
function NY(e, t) {
    return Ve(e.getFullYear() % 100, t, 2)
}
function OY(e, t) {
    return e = nT(e),
    Ve(e.getFullYear() % 100, t, 2)
}
function AY(e, t) {
    return Ve(e.getFullYear() % 1e4, t, 4)
}
function PY(e, t) {
    var n = e.getDay();
    return e = n >= 4 || n === 0 ? wo(e) : wo.ceil(e),
    Ve(e.getFullYear() % 1e4, t, 4)
}
function FY(e) {
    var t = e.getTimezoneOffset();
    return (t > 0 ? "-" : (t *= -1,
    "+")) + Ve(t / 60 | 0, "0", 2) + Ve(t % 60, "0", 2)
}
function XS(e, t) {
    return Ve(e.getUTCDate(), t, 2)
}
function RY(e, t) {
    return Ve(e.getUTCHours(), t, 2)
}
function LY(e, t) {
    return Ve(e.getUTCHours() % 12 || 12, t, 2)
}
function VY(e, t) {
    return Ve(1 + kl.count(yr(e), e), t, 3)
}
function rT(e, t) {
    return Ve(e.getUTCMilliseconds(), t, 3)
}
function jY(e, t) {
    return rT(e, t) + "000"
}
function BY(e, t) {
    return Ve(e.getUTCMonth() + 1, t, 2)
}
function HY(e, t) {
    return Ve(e.getUTCMinutes(), t, 2)
}
function UY(e, t) {
    return Ve(e.getUTCSeconds(), t, 2)
}
function $Y(e) {
    var t = e.getUTCDay();
    return t === 0 ? 7 : t
}
function YY(e, t) {
    return Ve(vs.count(yr(e) - 1, e), t, 2)
}
function iT(e) {
    var t = e.getUTCDay();
    return t >= 4 || t === 0 ? Do(e) : Do.ceil(e)
}
function WY(e, t) {
    return e = iT(e),
    Ve(Do.count(yr(e), e) + (yr(e).getUTCDay() === 4), t, 2)
}
function zY(e) {
    return e.getUTCDay()
}
function GY(e, t) {
    return Ve(Na.count(yr(e) - 1, e), t, 2)
}
function qY(e, t) {
    return Ve(e.getUTCFullYear() % 100, t, 2)
}
function ZY(e, t) {
    return e = iT(e),
    Ve(e.getUTCFullYear() % 100, t, 2)
}
function QY(e, t) {
    return Ve(e.getUTCFullYear() % 1e4, t, 4)
}
function XY(e, t) {
    var n = e.getUTCDay();
    return e = n >= 4 || n === 0 ? Do(e) : Do.ceil(e),
    Ve(e.getUTCFullYear() % 1e4, t, 4)
}
function JY() {
    return "+0000"
}
function JS() {
    return "%"
}
function KS(e) {
    return +e
}
function eT(e) {
    return Math.floor(+e / 1e3)
}
var Aa, Uh, oT, sT, aT;
C0({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function C0(e) {
    return Aa = x0(e),
    Uh = Aa.format,
    oT = Aa.parse,
    sT = Aa.utcFormat,
    aT = Aa.utcParse,
    Aa
}
function KY(e) {
    return new Date(e)
}
function e5(e) {
    return e instanceof Date ? +e : +new Date(+e)
}
function uT(e, t, n, r, i, o, s, a, l, c) {
    var f = Il()
      , p = f.invert
      , m = f.domain
      , y = c(".%L")
      , v = c(":%S")
      , w = c("%I:%M")
      , x = c("%I %p")
      , D = c("%a %d")
      , I = c("%b %d")
      , T = c("%B")
      , M = c("%Y");
    function S(E) {
        return (l(E) < E ? y : a(E) < E ? v : s(E) < E ? w : o(E) < E ? x : r(E) < E ? i(E) < E ? D : I : n(E) < E ? T : M)(E)
    }
    return f.invert = function(E) {
        return new Date(p(E))
    }
    ,
    f.domain = function(E) {
        return arguments.length ? m(Array.from(E, e5)) : m().map(KY)
    }
    ,
    f.ticks = function(E) {
        var R = m();
        return e(R[0], R[R.length - 1], E ?? 10)
    }
    ,
    f.tickFormat = function(E, R) {
        return R == null ? S : c(R)
    }
    ,
    f.nice = function(E) {
        var R = m();
        return (!E || typeof E.range != "function") && (E = t(R[0], R[R.length - 1], E ?? 10)),
        E ? m(f0(R, E)) : f
    }
    ,
    f.copy = function() {
        return Ea(f, uT(e, t, n, r, i, o, s, a, l, c))
    }
    ,
    f
}
function lT() {
    return In.apply(uT(v0, _0, Bn, Oa, bi, Mi, Ta, Sa, zr, Uh).domain([new Date(2e3,0,1), new Date(2e3,0,2)]), arguments)
}
var $h = mo()
  , t5 = Math.PI / 3
  , n5 = Math.PI * 2 / 3;
function r5(e) {
    var t;
    return e = (.5 - e) * Math.PI,
    $h.r = 255 * (t = Math.sin(e)) * t,
    $h.g = 255 * (t = Math.sin(e + t5)) * t,
    $h.b = 255 * (t = Math.sin(e + n5)) * t,
    $h + ""
}
function Ee(e) {
    return function() {
        return e
    }
}
var M0 = Math.abs
  , Zt = Math.atan2
  , xo = Math.cos
  , cT = Math.max
  , Yh = Math.min
  , vr = Math.sin
  , _s = Math.sqrt
  , _n = 1e-12
  , Pa = Math.PI
  , Pl = Pa / 2
  , Fa = 2 * Pa;
function dT(e) {
    return e > 1 ? 0 : e < -1 ? Pa : Math.acos(e)
}
function b0(e) {
    return e >= 1 ? Pl : e <= -1 ? -Pl : Math.asin(e)
}
function Ra(e) {
    let t = 3;
    return e.digits = function(n) {
        if (!arguments.length)
            return t;
        if (n == null)
            t = null;
        else {
            let r = Math.floor(n);
            if (!(r >= 0))
                throw new RangeError(`invalid digits: ${n}`);
            t = r
        }
        return e
    }
    ,
    () => new fs(t)
}
function i5(e) {
    return e.innerRadius
}
function o5(e) {
    return e.outerRadius
}
function s5(e) {
    return e.startAngle
}
function a5(e) {
    return e.endAngle
}
function u5(e) {
    return e && e.padAngle
}
function l5(e, t, n, r, i, o, s, a) {
    var l = n - e
      , c = r - t
      , f = s - i
      , p = a - o
      , m = p * l - f * c;
    if (!(m * m < _n))
        return m = (f * (t - o) - p * (e - i)) / m,
        [e + m * l, t + m * c]
}
function Wh(e, t, n, r, i, o, s) {
    var a = e - n
      , l = t - r
      , c = (s ? o : -o) / _s(a * a + l * l)
      , f = c * l
      , p = -c * a
      , m = e + f
      , y = t + p
      , v = n + f
      , w = r + p
      , x = (m + v) / 2
      , D = (y + w) / 2
      , I = v - m
      , T = w - y
      , M = I * I + T * T
      , S = i - o
      , E = m * w - v * y
      , R = (T < 0 ? -1 : 1) * _s(cT(0, S * S * M - E * E))
      , Z = (E * T - I * R) / M
      , ve = (-E * I - T * R) / M
      , we = (E * T + I * R) / M
      , V = (-E * I + T * R) / M
      , xe = Z - x
      , $ = ve - D
      , b = we - x
      , H = V - D;
    return xe * xe + $ * $ > b * b + H * H && (Z = we,
    ve = V),
    {
        cx: Z,
        cy: ve,
        x01: -f,
        y01: -p,
        x11: Z * (i / S - 1),
        y11: ve * (i / S - 1)
    }
}
function zh() {
    var e = i5
      , t = o5
      , n = Ee(0)
      , r = null
      , i = s5
      , o = a5
      , s = u5
      , a = null
      , l = Ra(c);
    function c() {
        var f, p, m = +e.apply(this, arguments), y = +t.apply(this, arguments), v = i.apply(this, arguments) - Pl, w = o.apply(this, arguments) - Pl, x = M0(w - v), D = w > v;
        if (a || (a = f = l()),
        y < m && (p = y,
        y = m,
        m = p),
        !(y > _n))
            a.moveTo(0, 0);
        else if (x > Fa - _n)
            a.moveTo(y * xo(v), y * vr(v)),
            a.arc(0, 0, y, v, w, !D),
            m > _n && (a.moveTo(m * xo(w), m * vr(w)),
            a.arc(0, 0, m, w, v, D));
        else {
            var I = v, T = w, M = v, S = w, E = x, R = x, Z = s.apply(this, arguments) / 2, ve = Z > _n && (r ? +r.apply(this, arguments) : _s(m * m + y * y)), we = Yh(M0(y - m) / 2, +n.apply(this, arguments)), V = we, xe = we, $, b;
            if (ve > _n) {
                var H = b0(ve / m * vr(Z))
                  , N = b0(ve / y * vr(Z));
                (E -= H * 2) > _n ? (H *= D ? 1 : -1,
                M += H,
                S -= H) : (E = 0,
                M = S = (v + w) / 2),
                (R -= N * 2) > _n ? (N *= D ? 1 : -1,
                I += N,
                T -= N) : (R = 0,
                I = T = (v + w) / 2)
            }
            var W = y * xo(I)
              , X = y * vr(I)
              , te = m * xo(S)
              , de = m * vr(S);
            if (we > _n) {
                var be = y * xo(T), Oe = y * vr(T), z = m * xo(M), nt = m * vr(M), rt;
                if (x < Pa)
                    if (rt = l5(W, X, z, nt, be, Oe, te, de)) {
                        var Dt = W - rt[0]
                          , xt = X - rt[1]
                          , Ht = be - rt[0]
                          , G = Oe - rt[1]
                          , Ce = 1 / vr(dT((Dt * Ht + xt * G) / (_s(Dt * Dt + xt * xt) * _s(Ht * Ht + G * G))) / 2)
                          , Ie = _s(rt[0] * rt[0] + rt[1] * rt[1]);
                        V = Yh(we, (m - Ie) / (Ce - 1)),
                        xe = Yh(we, (y - Ie) / (Ce + 1))
                    } else
                        V = xe = 0
            }
            R > _n ? xe > _n ? ($ = Wh(z, nt, W, X, y, xe, D),
            b = Wh(be, Oe, te, de, y, xe, D),
            a.moveTo($.cx + $.x01, $.cy + $.y01),
            xe < we ? a.arc($.cx, $.cy, xe, Zt($.y01, $.x01), Zt(b.y01, b.x01), !D) : (a.arc($.cx, $.cy, xe, Zt($.y01, $.x01), Zt($.y11, $.x11), !D),
            a.arc(0, 0, y, Zt($.cy + $.y11, $.cx + $.x11), Zt(b.cy + b.y11, b.cx + b.x11), !D),
            a.arc(b.cx, b.cy, xe, Zt(b.y11, b.x11), Zt(b.y01, b.x01), !D))) : (a.moveTo(W, X),
            a.arc(0, 0, y, I, T, !D)) : a.moveTo(W, X),
            !(m > _n) || !(E > _n) ? a.lineTo(te, de) : V > _n ? ($ = Wh(te, de, be, Oe, m, -V, D),
            b = Wh(W, X, z, nt, m, -V, D),
            a.lineTo($.cx + $.x01, $.cy + $.y01),
            V < we ? a.arc($.cx, $.cy, V, Zt($.y01, $.x01), Zt(b.y01, b.x01), !D) : (a.arc($.cx, $.cy, V, Zt($.y01, $.x01), Zt($.y11, $.x11), !D),
            a.arc(0, 0, m, Zt($.cy + $.y11, $.cx + $.x11), Zt(b.cy + b.y11, b.cx + b.x11), D),
            a.arc(b.cx, b.cy, V, Zt(b.y11, b.x11), Zt(b.y01, b.x01), !D))) : a.arc(0, 0, m, S, M, D)
        }
        if (a.closePath(),
        f)
            return a = null,
            f + "" || null
    }
    return c.centroid = function() {
        var f = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2
          , p = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Pa / 2;
        return [xo(p) * f, vr(p) * f]
    }
    ,
    c.innerRadius = function(f) {
        return arguments.length ? (e = typeof f == "function" ? f : Ee(+f),
        c) : e
    }
    ,
    c.outerRadius = function(f) {
        return arguments.length ? (t = typeof f == "function" ? f : Ee(+f),
        c) : t
    }
    ,
    c.cornerRadius = function(f) {
        return arguments.length ? (n = typeof f == "function" ? f : Ee(+f),
        c) : n
    }
    ,
    c.padRadius = function(f) {
        return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Ee(+f),
        c) : r
    }
    ,
    c.startAngle = function(f) {
        return arguments.length ? (i = typeof f == "function" ? f : Ee(+f),
        c) : i
    }
    ,
    c.endAngle = function(f) {
        return arguments.length ? (o = typeof f == "function" ? f : Ee(+f),
        c) : o
    }
    ,
    c.padAngle = function(f) {
        return arguments.length ? (s = typeof f == "function" ? f : Ee(+f),
        c) : s
    }
    ,
    c.context = function(f) {
        return arguments.length ? (a = f ?? null,
        c) : a
    }
    ,
    c
}
var bme = Array.prototype.slice;
function La(e) {
    return typeof e == "object" && "length"in e ? e : Array.from(e)
}
function fT(e) {
    this._context = e
}
fT.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(),
        this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e,
        t = +t,
        this._point) {
        case 0:
            this._point = 1,
            this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
            break;
        case 1:
            this._point = 2;
        default:
            this._context.lineTo(e, t);
            break
        }
    }
};
function ws(e) {
    return new fT(e)
}
function Gh(e) {
    return e[0]
}
function qh(e) {
    return e[1]
}
function Ds(e, t) {
    var n = Ee(!0)
      , r = null
      , i = ws
      , o = null
      , s = Ra(a);
    e = typeof e == "function" ? e : e === void 0 ? Gh : Ee(e),
    t = typeof t == "function" ? t : t === void 0 ? qh : Ee(t);
    function a(l) {
        var c, f = (l = La(l)).length, p, m = !1, y;
        for (r == null && (o = i(y = s())),
        c = 0; c <= f; ++c)
            !(c < f && n(p = l[c], c, l)) === m && ((m = !m) ? o.lineStart() : o.lineEnd()),
            m && o.point(+e(p, c, l), +t(p, c, l));
        if (y)
            return o = null,
            y + "" || null
    }
    return a.x = function(l) {
        return arguments.length ? (e = typeof l == "function" ? l : Ee(+l),
        a) : e
    }
    ,
    a.y = function(l) {
        return arguments.length ? (t = typeof l == "function" ? l : Ee(+l),
        a) : t
    }
    ,
    a.defined = function(l) {
        return arguments.length ? (n = typeof l == "function" ? l : Ee(!!l),
        a) : n
    }
    ,
    a.curve = function(l) {
        return arguments.length ? (i = l,
        r != null && (o = i(r)),
        a) : i
    }
    ,
    a.context = function(l) {
        return arguments.length ? (l == null ? r = o = null : o = i(r = l),
        a) : r
    }
    ,
    a
}
function c5(e, t, n) {
    var r = null
      , i = Ee(!0)
      , o = null
      , s = ws
      , a = null
      , l = Ra(c);
    e = typeof e == "function" ? e : e === void 0 ? Gh : Ee(+e),
    t = typeof t == "function" ? t : t === void 0 ? Ee(0) : Ee(+t),
    n = typeof n == "function" ? n : n === void 0 ? qh : Ee(+n);
    function c(p) {
        var m, y, v, w = (p = La(p)).length, x, D = !1, I, T = new Array(w), M = new Array(w);
        for (o == null && (a = s(I = l())),
        m = 0; m <= w; ++m) {
            if (!(m < w && i(x = p[m], m, p)) === D)
                if (D = !D)
                    y = m,
                    a.areaStart(),
                    a.lineStart();
                else {
                    for (a.lineEnd(),
                    a.lineStart(),
                    v = m - 1; v >= y; --v)
                        a.point(T[v], M[v]);
                    a.lineEnd(),
                    a.areaEnd()
                }
            D && (T[m] = +e(x, m, p),
            M[m] = +t(x, m, p),
            a.point(r ? +r(x, m, p) : T[m], n ? +n(x, m, p) : M[m]))
        }
        if (I)
            return a = null,
            I + "" || null
    }
    function f() {
        return Ds().defined(i).curve(s).context(o)
    }
    return c.x = function(p) {
        return arguments.length ? (e = typeof p == "function" ? p : Ee(+p),
        r = null,
        c) : e
    }
    ,
    c.x0 = function(p) {
        return arguments.length ? (e = typeof p == "function" ? p : Ee(+p),
        c) : e
    }
    ,
    c.x1 = function(p) {
        return arguments.length ? (r = p == null ? null : typeof p == "function" ? p : Ee(+p),
        c) : r
    }
    ,
    c.y = function(p) {
        return arguments.length ? (t = typeof p == "function" ? p : Ee(+p),
        n = null,
        c) : t
    }
    ,
    c.y0 = function(p) {
        return arguments.length ? (t = typeof p == "function" ? p : Ee(+p),
        c) : t
    }
    ,
    c.y1 = function(p) {
        return arguments.length ? (n = p == null ? null : typeof p == "function" ? p : Ee(+p),
        c) : n
    }
    ,
    c.lineX0 = c.lineY0 = function() {
        return f().x(e).y(t)
    }
    ,
    c.lineY1 = function() {
        return f().x(e).y(n)
    }
    ,
    c.lineX1 = function() {
        return f().x(r).y(t)
    }
    ,
    c.defined = function(p) {
        return arguments.length ? (i = typeof p == "function" ? p : Ee(!!p),
        c) : i
    }
    ,
    c.curve = function(p) {
        return arguments.length ? (s = p,
        o != null && (a = s(o)),
        c) : s
    }
    ,
    c.context = function(p) {
        return arguments.length ? (p == null ? o = a = null : a = s(o = p),
        c) : o
    }
    ,
    c
}
function hT(e, t) {
    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}
function pT(e) {
    return e
}
function d5() {
    var e = pT
      , t = hT
      , n = null
      , r = Ee(0)
      , i = Ee(Fa)
      , o = Ee(0);
    function s(a) {
        var l, c = (a = La(a)).length, f, p, m = 0, y = new Array(c), v = new Array(c), w = +r.apply(this, arguments), x = Math.min(Fa, Math.max(-Fa, i.apply(this, arguments) - w)), D, I = Math.min(Math.abs(x) / c, o.apply(this, arguments)), T = I * (x < 0 ? -1 : 1), M;
        for (l = 0; l < c; ++l)
            (M = v[y[l] = l] = +e(a[l], l, a)) > 0 && (m += M);
        for (t != null ? y.sort(function(S, E) {
            return t(v[S], v[E])
        }) : n != null && y.sort(function(S, E) {
            return n(a[S], a[E])
        }),
        l = 0,
        p = m ? (x - c * T) / m : 0; l < c; ++l,
        w = D)
            f = y[l],
            M = v[f],
            D = w + (M > 0 ? M * p : 0) + T,
            v[f] = {
                data: a[f],
                index: l,
                value: M,
                startAngle: w,
                endAngle: D,
                padAngle: I
            };
        return v
    }
    return s.value = function(a) {
        return arguments.length ? (e = typeof a == "function" ? a : Ee(+a),
        s) : e
    }
    ,
    s.sortValues = function(a) {
        return arguments.length ? (t = a,
        n = null,
        s) : t
    }
    ,
    s.sort = function(a) {
        return arguments.length ? (n = a,
        t = null,
        s) : n
    }
    ,
    s.startAngle = function(a) {
        return arguments.length ? (r = typeof a == "function" ? a : Ee(+a),
        s) : r
    }
    ,
    s.endAngle = function(a) {
        return arguments.length ? (i = typeof a == "function" ? a : Ee(+a),
        s) : i
    }
    ,
    s.padAngle = function(a) {
        return arguments.length ? (o = typeof a == "function" ? a : Ee(+a),
        s) : o
    }
    ,
    s
}
var mT = Zh(ws);
function gT(e) {
    this._curve = e
}
gT.prototype = {
    areaStart: function() {
        this._curve.areaStart()
    },
    areaEnd: function() {
        this._curve.areaEnd()
    },
    lineStart: function() {
        this._curve.lineStart()
    },
    lineEnd: function() {
        this._curve.lineEnd()
    },
    point: function(e, t) {
        this._curve.point(t * Math.sin(e), t * -Math.cos(e))
    }
};
function Zh(e) {
    function t(n) {
        return new gT(e(n))
    }
    return t._curve = e,
    t
}
function f5(e) {
    var t = e.curve;
    return e.angle = e.x,
    delete e.x,
    e.radius = e.y,
    delete e.y,
    e.curve = function(n) {
        return arguments.length ? t(Zh(n)) : t()._curve
    }
    ,
    e
}
function Qh() {
    return f5(Ds().curve(mT))
}
function I0() {}
function yT(e) {
    this._context = e
}
yT.prototype = {
    areaStart: I0,
    areaEnd: I0,
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        this._point && this._context.closePath()
    },
    point: function(e, t) {
        e = +e,
        t = +t,
        this._point ? this._context.lineTo(e, t) : (this._point = 1,
        this._context.moveTo(e, t))
    }
};
function Xh(e) {
    return new yT(e)
}
function vT(e) {
    return e < 0 ? -1 : 1
}
function _T(e, t, n) {
    var r = e._x1 - e._x0
      , i = t - e._x1
      , o = (e._y1 - e._y0) / (r || i < 0 && -0)
      , s = (n - e._y1) / (i || r < 0 && -0)
      , a = (o * i + s * r) / (r + i);
    return (vT(o) + vT(s)) * Math.min(Math.abs(o), Math.abs(s), .5 * Math.abs(a)) || 0
}
function wT(e, t) {
    var n = e._x1 - e._x0;
    return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t
}
function E0(e, t, n) {
    var r = e._x0
      , i = e._y0
      , o = e._x1
      , s = e._y1
      , a = (o - r) / 3;
    e._context.bezierCurveTo(r + a, i + a * t, o - a, s - a * n, o, s)
}
function Jh(e) {
    this._context = e
}
Jh.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN,
        this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
        case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
        case 3:
            E0(this, this._t0, wT(this, this._t0));
            break
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(),
        this._line = 1 - this._line
    },
    point: function(e, t) {
        var n = NaN;
        if (e = +e,
        t = +t,
        !(e === this._x1 && t === this._y1)) {
            switch (this._point) {
            case 0:
                this._point = 1,
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3,
                E0(this, wT(this, n = _T(this, e, t)), n);
                break;
            default:
                E0(this, this._t0, n = _T(this, e, t));
                break
            }
            this._x0 = this._x1,
            this._x1 = e,
            this._y0 = this._y1,
            this._y1 = t,
            this._t0 = n
        }
    }
};
function h5(e) {
    this._context = new DT(e)
}
(h5.prototype = Object.create(Jh.prototype)).point = function(e, t) {
    Jh.prototype.point.call(this, t, e)
}
;
function DT(e) {
    this._context = e
}
DT.prototype = {
    moveTo: function(e, t) {
        this._context.moveTo(t, e)
    },
    closePath: function() {
        this._context.closePath()
    },
    lineTo: function(e, t) {
        this._context.lineTo(t, e)
    },
    bezierCurveTo: function(e, t, n, r, i, o) {
        this._context.bezierCurveTo(t, e, r, n, o, i)
    }
};
function p5(e) {
    return new Jh(e)
}
var Fl = e => () => e;
function S0(e, {sourceEvent: t, target: n, transform: r, dispatch: i}) {
    Object.defineProperties(this, {
        type: {
            value: e,
            enumerable: !0,
            configurable: !0
        },
        sourceEvent: {
            value: t,
            enumerable: !0,
            configurable: !0
        },
        target: {
            value: n,
            enumerable: !0,
            configurable: !0
        },
        transform: {
            value: r,
            enumerable: !0,
            configurable: !0
        },
        _: {
            value: i
        }
    })
}
function _r(e, t, n) {
    this.k = e,
    this.x = t,
    this.y = n
}
_r.prototype = {
    constructor: _r,
    scale: function(e) {
        return e === 1 ? this : new _r(this.k * e,this.x,this.y)
    },
    translate: function(e, t) {
        return e === 0 & t === 0 ? this : new _r(this.k,this.x + this.k * e,this.y + this.k * t)
    },
    apply: function(e) {
        return [e[0] * this.k + this.x, e[1] * this.k + this.y]
    },
    applyX: function(e) {
        return e * this.k + this.x
    },
    applyY: function(e) {
        return e * this.k + this.y
    },
    invert: function(e) {
        return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k]
    },
    invertX: function(e) {
        return (e - this.x) / this.k
    },
    invertY: function(e) {
        return (e - this.y) / this.k
    },
    rescaleX: function(e) {
        return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e))
    },
    rescaleY: function(e) {
        return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e))
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
    }
};
var Rl = new _r(1,0,0);
T0.prototype = _r.prototype;
function T0(e) {
    for (; !e.__zoom; )
        if (!(e = e.parentNode))
            return Rl;
    return e.__zoom
}
function Kh(e) {
    e.stopImmediatePropagation()
}
function Va(e) {
    e.preventDefault(),
    e.stopImmediatePropagation()
}
function m5(e) {
    return (!e.ctrlKey || e.type === "wheel") && !e.button
}
function g5() {
    var e = this;
    return e instanceof SVGElement ? (e = e.ownerSVGElement || e,
    e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal,
    [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]]
}
function xT() {
    return this.__zoom || Rl
}
function y5(e) {
    return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1)
}
function v5() {
    return navigator.maxTouchPoints || "ontouchstart"in this
}
function _5(e, t, n) {
    var r = e.invertX(t[0][0]) - n[0][0]
      , i = e.invertX(t[1][0]) - n[1][0]
      , o = e.invertY(t[0][1]) - n[0][1]
      , s = e.invertY(t[1][1]) - n[1][1];
    return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), s > o ? (o + s) / 2 : Math.min(0, o) || Math.max(0, s))
}
function w5() {
    var e = m5, t = g5, n = _5, r = y5, i = v5, o = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Uv, c = yi("start", "zoom", "end"), f, p, m, y = 500, v = 150, w = 0, x = 10;
    function D(b) {
        b.property("__zoom", xT).on("wheel.zoom", Z, {
            passive: !1
        }).on("mousedown.zoom", ve).on("dblclick.zoom", we).filter(i).on("touchstart.zoom", V).on("touchmove.zoom", xe).on("touchend.zoom touchcancel.zoom", $).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
    }
    D.transform = function(b, H, N, W) {
        var X = b.selection ? b.selection() : b;
        X.property("__zoom", xT),
        b !== X ? S(b, H, N, W) : X.interrupt().each(function() {
            E(this, arguments).event(W).start().zoom(null, typeof H == "function" ? H.apply(this, arguments) : H).end()
        })
    }
    ,
    D.scaleBy = function(b, H, N, W) {
        D.scaleTo(b, function() {
            var X = this.__zoom.k
              , te = typeof H == "function" ? H.apply(this, arguments) : H;
            return X * te
        }, N, W)
    }
    ,
    D.scaleTo = function(b, H, N, W) {
        D.transform(b, function() {
            var X = t.apply(this, arguments)
              , te = this.__zoom
              , de = N == null ? M(X) : typeof N == "function" ? N.apply(this, arguments) : N
              , be = te.invert(de)
              , Oe = typeof H == "function" ? H.apply(this, arguments) : H;
            return n(T(I(te, Oe), de, be), X, s)
        }, N, W)
    }
    ,
    D.translateBy = function(b, H, N, W) {
        D.transform(b, function() {
            return n(this.__zoom.translate(typeof H == "function" ? H.apply(this, arguments) : H, typeof N == "function" ? N.apply(this, arguments) : N), t.apply(this, arguments), s)
        }, null, W)
    }
    ,
    D.translateTo = function(b, H, N, W, X) {
        D.transform(b, function() {
            var te = t.apply(this, arguments)
              , de = this.__zoom
              , be = W == null ? M(te) : typeof W == "function" ? W.apply(this, arguments) : W;
            return n(Rl.translate(be[0], be[1]).scale(de.k).translate(typeof H == "function" ? -H.apply(this, arguments) : -H, typeof N == "function" ? -N.apply(this, arguments) : -N), te, s)
        }, W, X)
    }
    ;
    function I(b, H) {
        return H = Math.max(o[0], Math.min(o[1], H)),
        H === b.k ? b : new _r(H,b.x,b.y)
    }
    function T(b, H, N) {
        var W = H[0] - N[0] * b.k
          , X = H[1] - N[1] * b.k;
        return W === b.x && X === b.y ? b : new _r(b.k,W,X)
    }
    function M(b) {
        return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2]
    }
    function S(b, H, N, W) {
        b.on("start.zoom", function() {
            E(this, arguments).event(W).start()
        }).on("interrupt.zoom end.zoom", function() {
            E(this, arguments).event(W).end()
        }).tween("zoom", function() {
            var X = this
              , te = arguments
              , de = E(X, te).event(W)
              , be = t.apply(X, te)
              , Oe = N == null ? M(be) : typeof N == "function" ? N.apply(X, te) : N
              , z = Math.max(be[1][0] - be[0][0], be[1][1] - be[0][1])
              , nt = X.__zoom
              , rt = typeof H == "function" ? H.apply(X, te) : H
              , Dt = l(nt.invert(Oe).concat(z / nt.k), rt.invert(Oe).concat(z / rt.k));
            return function(xt) {
                if (xt === 1)
                    xt = rt;
                else {
                    var Ht = Dt(xt)
                      , G = z / Ht[2];
                    xt = new _r(G,Oe[0] - Ht[0] * G,Oe[1] - Ht[1] * G)
                }
                de.zoom(null, xt)
            }
        })
    }
    function E(b, H, N) {
        return !N && b.__zooming || new R(b,H)
    }
    function R(b, H) {
        this.that = b,
        this.args = H,
        this.active = 0,
        this.sourceEvent = null,
        this.extent = t.apply(b, H),
        this.taps = 0
    }
    R.prototype = {
        event: function(b) {
            return b && (this.sourceEvent = b),
            this
        },
        start: function() {
            return ++this.active === 1 && (this.that.__zooming = this,
            this.emit("start")),
            this
        },
        zoom: function(b, H) {
            return this.mouse && b !== "mouse" && (this.mouse[1] = H.invert(this.mouse[0])),
            this.touch0 && b !== "touch" && (this.touch0[1] = H.invert(this.touch0[0])),
            this.touch1 && b !== "touch" && (this.touch1[1] = H.invert(this.touch1[0])),
            this.that.__zoom = H,
            this.emit("zoom"),
            this
        },
        end: function() {
            return --this.active === 0 && (delete this.that.__zooming,
            this.emit("end")),
            this
        },
        emit: function(b) {
            var H = wt(this.that).datum();
            c.call(b, this.that, new S0(b,{
                sourceEvent: this.sourceEvent,
                target: D,
                type: b,
                transform: this.that.__zoom,
                dispatch: c
            }), H)
        }
    };
    function Z(b, ...H) {
        if (!e.apply(this, arguments))
            return;
        var N = E(this, H).event(b)
          , W = this.__zoom
          , X = Math.max(o[0], Math.min(o[1], W.k * Math.pow(2, r.apply(this, arguments))))
          , te = qn(b);
        if (N.wheel)
            (N.mouse[0][0] !== te[0] || N.mouse[0][1] !== te[1]) && (N.mouse[1] = W.invert(N.mouse[0] = te)),
            clearTimeout(N.wheel);
        else {
            if (W.k === X)
                return;
            N.mouse = [te, W.invert(te)],
            yo(this),
            N.start()
        }
        Va(b),
        N.wheel = setTimeout(de, v),
        N.zoom("mouse", n(T(I(W, X), N.mouse[0], N.mouse[1]), N.extent, s));
        function de() {
            N.wheel = null,
            N.end()
        }
    }
    function ve(b, ...H) {
        if (m || !e.apply(this, arguments))
            return;
        var N = b.currentTarget
          , W = E(this, H, !0).event(b)
          , X = wt(b.view).on("mousemove.zoom", Oe, !0).on("mouseup.zoom", z, !0)
          , te = qn(b, N)
          , de = b.clientX
          , be = b.clientY;
        ol(b.view),
        Kh(b),
        W.mouse = [te, this.__zoom.invert(te)],
        yo(this),
        W.start();
        function Oe(nt) {
            if (Va(nt),
            !W.moved) {
                var rt = nt.clientX - de
                  , Dt = nt.clientY - be;
                W.moved = rt * rt + Dt * Dt > w
            }
            W.event(nt).zoom("mouse", n(T(W.that.__zoom, W.mouse[0] = qn(nt, N), W.mouse[1]), W.extent, s))
        }
        function z(nt) {
            X.on("mousemove.zoom mouseup.zoom", null),
            sl(nt.view, W.moved),
            Va(nt),
            W.event(nt).end()
        }
    }
    function we(b, ...H) {
        if (e.apply(this, arguments)) {
            var N = this.__zoom
              , W = qn(b.changedTouches ? b.changedTouches[0] : b, this)
              , X = N.invert(W)
              , te = N.k * (b.shiftKey ? .5 : 2)
              , de = n(T(I(N, te), W, X), t.apply(this, H), s);
            Va(b),
            a > 0 ? wt(this).transition().duration(a).call(S, de, W, b) : wt(this).call(D.transform, de, W, b)
        }
    }
    function V(b, ...H) {
        if (e.apply(this, arguments)) {
            var N = b.touches, W = N.length, X = E(this, H, b.changedTouches.length === W).event(b), te, de, be, Oe;
            for (Kh(b),
            de = 0; de < W; ++de)
                be = N[de],
                Oe = qn(be, this),
                Oe = [Oe, this.__zoom.invert(Oe), be.identifier],
                X.touch0 ? !X.touch1 && X.touch0[2] !== Oe[2] && (X.touch1 = Oe,
                X.taps = 0) : (X.touch0 = Oe,
                te = !0,
                X.taps = 1 + !!f);
            f && (f = clearTimeout(f)),
            te && (X.taps < 2 && (p = Oe[0],
            f = setTimeout(function() {
                f = null
            }, y)),
            yo(this),
            X.start())
        }
    }
    function xe(b, ...H) {
        if (this.__zooming) {
            var N = E(this, H).event(b), W = b.changedTouches, X = W.length, te, de, be, Oe;
            for (Va(b),
            te = 0; te < X; ++te)
                de = W[te],
                be = qn(de, this),
                N.touch0 && N.touch0[2] === de.identifier ? N.touch0[0] = be : N.touch1 && N.touch1[2] === de.identifier && (N.touch1[0] = be);
            if (de = N.that.__zoom,
            N.touch1) {
                var z = N.touch0[0]
                  , nt = N.touch0[1]
                  , rt = N.touch1[0]
                  , Dt = N.touch1[1]
                  , xt = (xt = rt[0] - z[0]) * xt + (xt = rt[1] - z[1]) * xt
                  , Ht = (Ht = Dt[0] - nt[0]) * Ht + (Ht = Dt[1] - nt[1]) * Ht;
                de = I(de, Math.sqrt(xt / Ht)),
                be = [(z[0] + rt[0]) / 2, (z[1] + rt[1]) / 2],
                Oe = [(nt[0] + Dt[0]) / 2, (nt[1] + Dt[1]) / 2]
            } else if (N.touch0)
                be = N.touch0[0],
                Oe = N.touch0[1];
            else
                return;
            N.zoom("touch", n(T(de, be, Oe), N.extent, s))
        }
    }
    function $(b, ...H) {
        if (this.__zooming) {
            var N = E(this, H).event(b), W = b.changedTouches, X = W.length, te, de;
            for (Kh(b),
            m && clearTimeout(m),
            m = setTimeout(function() {
                m = null
            }, y),
            te = 0; te < X; ++te)
                de = W[te],
                N.touch0 && N.touch0[2] === de.identifier ? delete N.touch0 : N.touch1 && N.touch1[2] === de.identifier && delete N.touch1;
            if (N.touch1 && !N.touch0 && (N.touch0 = N.touch1,
            delete N.touch1),
            N.touch0)
                N.touch0[1] = this.__zoom.invert(N.touch0[0]);
            else if (N.end(),
            N.taps === 2 && (de = qn(de, this),
            Math.hypot(p[0] - de[0], p[1] - de[1]) < x)) {
                var be = wt(this).on("dblclick.zoom");
                be && be.apply(this, arguments)
            }
        }
    }
    return D.wheelDelta = function(b) {
        return arguments.length ? (r = typeof b == "function" ? b : Fl(+b),
        D) : r
    }
    ,
    D.filter = function(b) {
        return arguments.length ? (e = typeof b == "function" ? b : Fl(!!b),
        D) : e
    }
    ,
    D.touchable = function(b) {
        return arguments.length ? (i = typeof b == "function" ? b : Fl(!!b),
        D) : i
    }
    ,
    D.extent = function(b) {
        return arguments.length ? (t = typeof b == "function" ? b : Fl([[+b[0][0], +b[0][1]], [+b[1][0], +b[1][1]]]),
        D) : t
    }
    ,
    D.scaleExtent = function(b) {
        return arguments.length ? (o[0] = +b[0],
        o[1] = +b[1],
        D) : [o[0], o[1]]
    }
    ,
    D.translateExtent = function(b) {
        return arguments.length ? (s[0][0] = +b[0][0],
        s[1][0] = +b[1][0],
        s[0][1] = +b[0][1],
        s[1][1] = +b[1][1],
        D) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]]
    }
    ,
    D.constrain = function(b) {
        return arguments.length ? (n = b,
        D) : n
    }
    ,
    D.duration = function(b) {
        return arguments.length ? (a = +b,
        D) : a
    }
    ,
    D.interpolate = function(b) {
        return arguments.length ? (l = b,
        D) : l
    }
    ,
    D.on = function() {
        var b = c.on.apply(c, arguments);
        return b === c ? D : b
    }
    ,
    D.clickDistance = function(b) {
        return arguments.length ? (w = (b = +b) * b,
        D) : Math.sqrt(w)
    }
    ,
    D.tapDistance = function(b) {
        return arguments.length ? (x = +b,
        D) : x
    }
    ,
    D
}
var D5 = ["chart"]
  , dye = ( () => {
    let t = class t {
        constructor() {
            this.showNeedle = F(!0),
            this.chartId = F("gauge-chart"),
            this.value = F(null),
            this.minValue = F(0),
            this.maxValue = F(180),
            this.colorValueArray = F([]),
            this.chart = la.required("chart"),
            this.svg = null,
            this.innerElement = null,
            this.resizeObserver = ResizeObserver && new ResizeObserver( () => {
                this.chart()?.nativeElement && this.value() && (this.initBaseChart(),
                this.initChart(this.value() ?? 0))
            }
            ),
            pn( () => {
                this.value() && (this.initBaseChart(),
                this.initChart(this.value() ?? 0))
            }
            ),
            pn( () => {
                this.resizeObserver?.observe(this.chart()?.nativeElement)
            }
            )
        }
        initBaseChart() {
            let {width: r} = this.chart()?.nativeElement?.getBoundingClientRect() ?? {
                height: 50,
                width: 100
            }
              , i = {
                panel: {
                    startAngle: -90,
                    endAngle: 90
                },
                sections: [...this.colorValueArray()]
            }
              , o = Math.floor(r / 2)
              , s = Math.floor(o - o / 6);
            this.svg?.remove(),
            wt(`#svg-${this.chartId()}`).empty() ? this.svg = wt(`#${this.chartId()}`).append("svg").attr("id", "svg-" + this.chartId()).attr("width", "100%").attr("height", r / 2) : this.svg = wt(`#${this.chartId()}`),
            this.innerElement = this.svg.append("g").attr("id", "group-" + this.chartId()).attr("transform", `translate(${r / 2},${r / 2})`);
            let a = Ci().domain([this.minValue(), this.maxValue()]).range([i.panel.startAngle, i.panel.endAngle])
              , l = zh().outerRadius(o).innerRadius(s).startAngle(this.deg2rad(a(this.minValue()))).endAngle(this.deg2rad(a(this.maxValue()))).cornerRadius(10);
            this.innerElement.append("path").attr("class", "arc").attr("d", l).attr("class", "gauge-chart-bg")
        }
        initChart(r) {
            let {width: i} = this.chart()?.nativeElement?.getBoundingClientRect() ?? {
                height: 50,
                width: 100
            }
              , o = {
                panel: {
                    startAngle: -90,
                    endAngle: 90
                },
                sections: [...this.colorValueArray()]
            }
              , s = Math.floor(i / 2)
              , a = Math.floor(s - s / 6)
              , l = this.chartId();
            wt(`#${l}`)?.select("#valueArc-" + l)?.remove(),
            wt(`#${l}`)?.select("#text-" + l)?.remove();
            let c = Ci().domain([this.minValue(), this.maxValue()]).range([o.panel.startAngle, o.panel.endAngle])
              , f = zh().outerRadius(s).innerRadius(a).startAngle(this.deg2rad(c(this.minValue()))).endAngle(y => this.deg2rad(c(+y))).cornerRadius(10);
            function p(y) {
                return function(v) {
                    return f(wi(0, y)(v))
                }
            }
            this.innerElement.append("path").attr("id", "valueArc-" + l).attr("fill", this.getColorByValue(r)).transition().duration(1e3).attrTween("d", () => p(r)),
            this.innerElement.append("g").style("text-anchor", "middle").attr("y", -5).append("text").attr("id", "text-" + l).attr("class", "gauge-chart-text-lg").style("font-weight", "bold").style("font-size", "24px").text(+r.toFixed(1)).append("tspan").style("font-weight", "normal").style("font-size", "14px").attr("class", "gauge-chart-text-lg opacity-8").text("/" + this.maxValue())
        }
        getColorByValue(r) {
            return this.colorValueArray().find(i => i.from <= r && r < i.to)?.color ?? "#fff"
        }
        deg2rad(r) {
            return Math.PI / 180 * r
        }
        ngOnDestroy() {
            this.resizeObserver?.disconnect()
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["gauge-chart"]],
        viewQuery: function(i, o) {
            i & 1 && da(o.chart, D5, 5),
            i & 2 && fa()
        },
        inputs: {
            showNeedle: [1, "showNeedle"],
            chartId: [1, "chartId"],
            value: [1, "value"],
            minValue: [1, "minValue"],
            maxValue: [1, "maxValue"],
            colorValueArray: [1, "colorValueArray"]
        },
        decls: 2,
        vars: 1,
        consts: [["chart", ""], [1, "w-100", "text-center", 3, "id"]],
        template: function(i, o) {
            i & 1 && Ue(0, "div", 1, 0),
            i & 2 && He("id", o.chartId())
        },
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var x5 = ["chart"]
  , _ye = ( () => {
    let t = class t {
        constructor() {
            this.chartId = F("spider-chart"),
            this.maxValue = F(5),
            this.linesCount = F(10),
            this.chartData = F(),
            this.chart = la("chart"),
            this.svg = null,
            this.componentReady$ = new Ni(!1),
            this.chartValue$ = new Ni(null),
            this.destroyRef = Y(Pn),
            pn( () => {
                this.chartData() && this.chartValue$.next(this.chartData())
            }
            ),
            em([this.componentReady$, this.chartValue$]).pipe(ev(this.destroyRef)).subscribe( ([r,i]) => {
                r && i && this.initChart(i)
            }
            )
        }
        createResizeObserve() {
            new ResizeObserver( () => {
                this.svg.remove(),
                this.chartValue$.next([...this.chartValue$.value])
            }
            ).observe(document.getElementById(this.chartId()))
        }
        initChart(r) {
            let {width: i, height: o} = this.chart()?.nativeElement?.getBoundingClientRect() ?? {
                width: 180,
                height: 80
            }
              , s = wt(`#${this.chartId()}`);
            this.svg = s.append("svg").attr("width", "100%").attr("height", "100%");
            let a = Math.min(i - 100, o - 100) / 2
              , l = this.svg.append("g").attr("transform", `translate(${i / 2}, ${o / 2})`);
            this.renderGrid(r, a, l),
            this.renderAxes(r, a, l)
        }
        ngAfterViewInit() {
            this.componentReady$.next(!0),
            this.createResizeObserve()
        }
        renderAxes(r, i, o) {
            new N0(r,o,i,this.maxValue()).render()
        }
        renderGrid(r, i, o) {
            new k0(r,o,i,this.linesCount()).render()
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["spider-chart"]],
        viewQuery: function(i, o) {
            i & 1 && da(o.chart, x5, 5),
            i & 2 && fa()
        },
        inputs: {
            chartId: [1, "chartId"],
            maxValue: [1, "maxValue"],
            linesCount: [1, "linesCount"],
            chartData: [1, "chartData"]
        },
        decls: 2,
        vars: 1,
        consts: [["chart", ""], [2, "height", "345px", "text-align", "center", 3, "id"]],
        template: function(i, o) {
            i & 1 && Ue(0, "div", 1, 0),
            i & 2 && He("id", o.chartId())
        },
        dependencies: [oo],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)()
  , k0 = class {
    constructor(t, n, r, i) {
        this.data = [],
        this.data = t,
        this.radius = r,
        this.container = n,
        this.lineCount = i
    }
    polygonCurve(t) {
        let n = Math.PI * 2 / this.data.length
          , r = Math.PI / 2;
        return Ds().curve(Xh).x( (o, s) => t * Math.cos(s * n - r)).y( (o, s) => t * Math.sin(s * n - r))(this.data.map(o => [o.score, o.score]))
    }
    render() {
        let t = this.radius / this.lineCount;
        this.container.selectAll("path").data(Da(this.lineCount)).join("path").attr("d", n => this.polygonCurve((n + 1) * t)).style("stroke", "var(--bs-body-color)").style("stroke-width", "1px").style("opacity", .2).style("fill", "transparent")
    }
}
  , N0 = class {
    constructor(t, n, r, i) {
        this.data = [],
        this.labels = null,
        this.maxValue = null,
        this.data = t,
        this.radius = r,
        this.container = n,
        this.maxValue = i
    }
    render() {
        let t = Math.PI * 2 / this.data.length
          , n = Math.PI / 2
          , r = Ci([0, this.maxValue], [0, this.radius])
          , i = Qh().curve(Xh).radius(s => r(s)).angle( (s, a) => a * t);
        this.container.selectAll("line").data(this.data).join("line").attr("fill", "#EBEBEB").attr("x1", 0).attr("y1", 0).attr("x2", (s, a) => this.radius * Math.cos(a * t - n)).attr("y2", (s, a) => this.radius * Math.sin(a * t - n)).style("stroke-width", "1px").style("fill-opacity", .5),
        this.container.append("path").data([this.data.map(s => s.score)]).attr("d", s => i(s)).attr("stroke", "#B3D8D5").attr("stroke-width", "2px").attr("fill", "#B3D8D5").attr("fill-opacity", .2),
        this.container.selectAll("circle").data(this.data).join("circle").attr("r", 5).attr("fill", "var(--bs-global-600)").attr("cx", (s, a) => r(s.score) * Math.cos(t * a - n)).attr("cy", (s, a) => r(s.score) * Math.sin(t * a - n)).style("fill-opacity", 1).on("mouseover", (s, a) => {
            this.showLabels.bind(this)(a)
        }
        ).on("mouseout", this.removeLabels.bind(this)),
        this.container.append("g").selectAll("text").data(this.data).join("text").attr("x", (s, a) => Math.round(this.radius * 1.1 * Math.cos(a * t - n))).attr("y", (s, a) => Math.round(this.radius * 1.1 * Math.sin(a * t - n))).style("font-size", "12px").style("direction", "rtl").style("text-anchor", (s, a) => {
            let l = Math.round(this.radius * 1.1 * Math.cos(a * t - n));
            if (l === 0)
                return "middle";
            if (l > 0)
                return "end";
            if (l < 0)
                return "start"
        }
        ).attr("fill", "var(--bs-body-color)").text(s => s.title).on("mouseover", (s, a) => {
            this.showLabels.bind(this)(a)
        }
        ).on("mouseout", this.removeLabels.bind(this))
    }
    showLabels(t) {
        let n = Math.PI * 2 / this.data.length
          , r = Math.PI / 2
          , i = Ci([0, this.maxValue], [0, this.radius]);
        this.labels = this.container.append("g");
        let o = this.data.findIndex(s => s.title === t.title);
        this.labels.selectAll("rect").data(this.data.filter(s => s.title === t.title)).join("rect").attr("width", 40).attr("height", 20).attr("rx", 3).attr("fill", "var(--bs-global-600)").style("background", "rgb(255,255,255)").attr("x", s => i(s.score) * Math.cos(n * o - r) - 20).attr("y", s => i(s.score) * Math.sin(n * o - r) - 25),
        this.labels.selectAll("text").data(this.data.filter(s => s.title === t.title)).join("text").text(s => Math.round(s.score * 10) / 10).style("text-anchor", "middle").attr("fill", "white").attr("font-size", 12).attr("x", s => i(s.score) * Math.cos(n * o - r)).attr("y", s => i(s.score) * Math.sin(n * o - r) - 11)
    }
    removeLabels() {
        this.labels?.remove()
    }
}
;
var C5 = ["*"]
  , M5 = (e, t, n) => ({
    top: e,
    left: t,
    minWidth: n
});
function b5(e, t) {
    if (e & 1) {
        let n = rn();
        B(0, "li", 3),
        re("click", function() {
            let i = fe(n).$index
              , o = q(3);
            return he(o.onMenuItemClick(i))
        }),
        Ke(1),
        ne()
    }
    if (e & 2) {
        let n = t.$implicit;
        lr(n == null ? null : n.class),
        se(),
        no(" ", n.label, " ")
    }
}
function I5(e, t) {
    if (e & 1 && (B(0, "ul", 1),
    jr(1, b5, 2, 3, "li", 2, Vr),
    ne()),
    e & 2) {
        let n = q(2);
        se(),
        Br(n.menuItems())
    }
}
function E5(e, t) {
    if (e & 1 && (B(0, "div", 0),
    Ot(1, I5, 3, 0, "ul", 1),
    cr(2),
    ne()),
    e & 2) {
        let n, r = q();
        He("ngStyle", vf(2, M5, r.yPos + "px", r.xPos + "px", r.minWidth() + "px")),
        se(),
        mt((n = r.menuItems()) != null && n.length ? 1 : -1)
    }
}
var Iye = ( () => {
    let t = class t {
        constructor() {
            this.menuItems = F([]),
            this.id = F.required(),
            this.minWidth = F(170),
            this.isVisible = !1,
            this.xPos = 0,
            this.yPos = 0
        }
        hideMenu() {
            this.isVisible = !1
        }
        showMenu(r) {
            document.getElementById(this.id()).parentElement.contains(r.target) && (this.isVisible = !0,
            this.xPos = document.body.clientWidth - r.clientX > this.minWidth() ? r.clientX : r.clientX - 150,
            this.yPos = r.clientY)
        }
        onMenuItemClick(r) {
            try {
                this.isVisible = !1,
                this.menuItems()[r]?.action?.()
            } catch {}
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["app-context-menu"]],
        hostBindings: function(i, o) {
            i & 1 && re("click", function() {
                return o.hideMenu()
            }, !1, sr)("contextmenu", function(a) {
                return o.showMenu(a)
            }, !1, sr)
        },
        inputs: {
            menuItems: [1, "menuItems"],
            id: [1, "id"],
            minWidth: [1, "minWidth"]
        },
        ngContentSelectors: C5,
        decls: 1,
        vars: 1,
        consts: [[1, "context-menu", "rounded", 3, "ngStyle"], [1, ""], [1, "border-bottom", 3, "class"], [1, "border-bottom", 3, "click"]],
        template: function(i, o) {
            i & 1 && (to(),
            Ot(0, E5, 3, 6, "div", 0)),
            i & 2 && mt(o.isVisible ? 0 : -1)
        },
        dependencies: [oo, Lf],
        styles: [`.context-menu[_ngcontent-%COMP%]{position:fixed;background:var();border-radius:.5rem;box-shadow:0 2px 10px #0003;z-index:1000;border-style:solid;border-width:1px}.context-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:0!important;padding:0!important}.context-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 12px;cursor:pointer}.context-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#eee}
/*# sourceMappingURL=context-menu.component-5BHSJ3UL.css.map */`],
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var S5 = [[["", 8, "card-title"]], [["", 8, "card-value"]]]
  , T5 = [".card-title", ".card-value"]
  , Sye = ( () => {
    let t = class t {
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["carousel-card"]],
        ngContentSelectors: T5,
        decls: 2,
        vars: 0,
        template: function(i, o) {
            i & 1 && (to(S5),
            cr(0),
            cr(1, 1))
        },
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var MT = ( () => {
    let t = class t {
        constructor() {
            this.swipedId = Fe(null),
            this.swipedId$ = Ko(this.swipedId)
        }
        addToSwipedItems(r) {
            this.swipedId.set(r)
        }
        resetAll() {
            this.swipedId.set(null)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275prov = me({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
var bT = {
    LEFT: "swipeleft",
    RIGHT: "swiperight",
    NONE: "none"
}
  , Ii = {
    LEFT: "swiped-row-left",
    RIGHT: "swiped-row-right"
}
  , Pye = {
    BUY: "buy",
    SELL: "sell"
}
  , Fye = {
    EDIT: "Edit",
    DELETE: "Delete"
}
  , Bt = function(e) {
    return e[e.None = 1] = "None",
    e[e.Left = 2] = "Left",
    e[e.Right = 3] = "Right",
    e
}(Bt || {})
  , Vl = 0
  , O0 = 0
  , Ll = class {
    constructor(t, n) {
        this.stateSideDictionary = new Map([[Bt.None, () => {
            this.reset()
        }
        ], [Bt.Left, () => {
            this.swipedLeft()
        }
        ], [Bt.Right, () => {
            this.swipedRight()
        }
        ]]),
        this.leftSide = "d-none",
        this.rightSide = "d-none",
        this.swipeState = Bt.None,
        this.swipeSideClass = t,
        this.swipeState = n
    }
    swipedLeft() {
        this.changeSideClass("d-none", "")
    }
    swipedRight() {
        this.changeSideClass("", "d-none")
    }
    reset() {
        this.changeSideClass("d-none", "d-none")
    }
    changeSideClass(t, n) {
        this.leftSide = "",
        this.rightSide = "",
        this.leftSide = t,
        this.rightSide = n
    }
    changeSide(t) {
        let n = Te({}, O5);
        switch (t) {
        case bT.RIGHT:
            this.swipeSideClass !== Ii.LEFT && (n = Te({}, k5));
            break;
        case bT.LEFT:
            this.swipeSideClass !== Ii.RIGHT && (n = Te({}, N5));
            break
        }
        return this.swipeSideClass = n.swipeSideClass,
        this.swipeState = n.swipeState,
        this.stateSideDictionary.get(this.swipeState)(),
        this.swipeSideClass
    }
}
  , k5 = {
    swipeSideClass: Ii.RIGHT,
    swipeState: Bt.Right
}
  , N5 = {
    swipeSideClass: Ii.LEFT,
    swipeState: Bt.Left
}
  , O5 = {
    swipeSideClass: "",
    swipeState: Bt.None
};
var jye = ( () => {
    let t = class t {
        constructor() {
            this.swipeIsin = ""
        }
        onResetSwipe(r) {
            r.swipeSideClass = "",
            setTimeout( () => {
                r.swipeState = Bt.None
            }
            , O0)
        }
        onSwipeLeft(r) {
            r.swipeState = Bt.Left,
            setTimeout( () => {
                r.swipeSideClass = Ii.LEFT
            }
            , Vl)
        }
        onSwipeRight(r) {
            r.swipeState = Bt.Right,
            setTimeout( () => {
                r.swipeSideClass = Ii.RIGHT
            }
            , Vl)
        }
        onResetSwipeableItem(r) {
            r.swipeSideClass = "",
            setTimeout( () => {
                r.swipeState = Bt.None
            }
            , O0)
        }
        onSwipeLeftSwipeableItem(r) {
            r.swipeState = Bt.Left,
            setTimeout( () => {
                r.swipeSideClass = Ii.LEFT
            }
            , Vl)
        }
        onSwipeRightSwipeableItem(r) {
            r.swipeState = Bt.Right,
            setTimeout( () => {
                r.swipeSideClass = Ii.RIGHT
            }
            , Vl)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275prov = me({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
var A5 = ["swipeable-item", ""]
  , P5 = [[["", 8, "right-section-swipeable"]], [["", 8, "left-section-swipeable"]], [["", 8, "main-content"]]]
  , F5 = [".right-section-swipeable", ".left-section-swipeable", ".main-content"]
  , eve = ( () => {
    let t = class t {
        onSwipeleft(r) {
            this.handleSwipe(r.type)
        }
        onSwiperight(r) {
            this.handleSwipe(r.type)
        }
        constructor() {
            this.id = F.required(),
            this.swipeCondition = F.required(),
            this.swipeableItemService = Y(MT),
            this.swipeableState = new Ll("",Bt.None),
            this.containerClass = F(""),
            this.containerClass$ = Ko(this.containerClass),
            this.swipeSideClass = Fe(""),
            Vu(this.containerClass$.pipe(kr(r => {
                this.hostClass = `${r}`
            }
            )))
        }
        ngOnInit() {
            this.subscription = this.swipeableItemService.swipedId$.pipe(kr(r => {
                r !== this.id() && (this.swipeableState = new Ll("",Bt.None),
                this.swipeSideClass.set(""))
            }
            )).subscribe()
        }
        ngOnDestroy() {
            this.subscription?.unsubscribe()
        }
        handleSwipe(r) {
            this.swipeCondition() && (this.swipeableItemService.addToSwipedItems(this.id()),
            this.swipeSideClass.set(this.swipeableState.changeSide(r)))
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["", "swipeable-item", ""]],
        hostVars: 2,
        hostBindings: function(i, o) {
            i & 1 && re("swipeleft", function(a) {
                return o.onSwipeleft(a)
            })("swiperight", function(a) {
                return o.onSwiperight(a)
            }),
            i & 2 && lr(o.hostClass)
        },
        inputs: {
            id: [1, "id"],
            swipeCondition: [1, "swipeCondition"],
            containerClass: [1, "containerClass"]
        },
        attrs: A5,
        ngContentSelectors: F5,
        decls: 7,
        vars: 5,
        consts: [[1, "d-flex", "justify-content-between", "position-absolute", "w-100", "h-100"], [1, "metadata", "metadata-right", "d-flex"], [1, "metadata", "metadata-left", "d-flex", "gap-1", "align-items-center", "ms-auto"], [1, "bg-principal", "bg-principal-3x-dark", "d-block", "shadow-sm", "d-flex", "fs-8", "w-100", "flex-shrink-0", "text-nowrap", "position-relative", "z-1", "swipe-transition", 3, "ngClass"]],
        template: function(i, o) {
            i & 1 && (to(P5),
            B(0, "div", 0)(1, "div", 1),
            cr(2),
            ne(),
            B(3, "div", 2),
            cr(4, 1),
            ne()(),
            B(5, "div", 3),
            cr(6, 2),
            ne()),
            i & 2 && (se(),
            lr(o.swipeableState == null ? null : o.swipeableState.rightSide),
            se(2),
            lr(o.swipeableState == null ? null : o.swipeableState.leftSide),
            se(2),
            He("ngClass", o.swipeSideClass()))
        },
        dependencies: [Rf],
        styles: [`.metadata[_ngcontent-%COMP%]{padding:1px}.swipe-transition[_ngcontent-%COMP%]{transition:transform .2s ease;transform:translateZ(0)}.swiped-row-left[_ngcontent-%COMP%]{transform:translate3d(-9.8rem,0,0)}.swiped-row-right[_ngcontent-%COMP%]{transform:translate3d(9.8rem,0,0)}.metadata-item[_ngcontent-%COMP%]{width:4.5rem;height:100%}.metadata-item.disabled[_ngcontent-%COMP%]{background-color:rgba(var(--bs-emphasis-color-rgb),.1)!important;opacity:.5}
/*# sourceMappingURL=swipeable-item.component-JK3ORR4V.css.map */`]
    });
    let e = t;
    return e
}
)();
var rve = ( () => {
    let t = class t {
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["empty-result-warning"]],
        decls: 5,
        vars: 1,
        consts: [[1, "align-items-center", "d-flex", "flex-column", "justify-content-center", "text-center", "text-muted", "gap-2", "py-4"], [1, "rounded", "bg-secondary", "bg-opacity-10", "d-inline-flex", "p-2"], ["width", "36", "height", "36", 1, "text-secondary", 3, "iconName"], [1, "fw-bold"]],
        template: function(i, o) {
            i & 1 && (B(0, "div", 0)(1, "div", 1),
            Ue(2, "svg-icon", 2),
            ne(),
            B(3, "div", 3),
            Ke(4, "\u0646\u062A\u06CC\u062C\u0647\u200C\u0627\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F!"),
            ne()()),
            i & 2 && (se(2),
            He("iconName", "alert-box"))
        },
        dependencies: [lo],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var R5 = ["*"];
function L5(e, t) {
    if (e & 1 && Ue(0, "svg-icon", 1),
    e & 2) {
        let n = q();
        He("iconName", n.icons.Save)
    }
}
var Cve = ( () => {
    let t = class t {
        constructor() {
            this.icons = mi,
            this.class = F(""),
            this.label = F(""),
            this.type = F("button"),
            this.color = F(),
            this.outline = F(!1),
            this.size = F(),
            this.loading = F(!1)
        }
        getClass() {
            let i = "btn-" + (this.outline() ? "outline-" : "") + (this.color() ?? "primary")
              , o = this.size() ? "btn-" + this.size() : "";
            return `${i} ${o} ${this.class()}`
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["ui-button"]],
        inputs: {
            class: [1, "class"],
            label: [1, "label"],
            type: [1, "type"],
            color: [1, "color"],
            outline: [1, "outline"],
            size: [1, "size"],
            loading: [1, "loading"]
        },
        ngContentSelectors: R5,
        decls: 4,
        vars: 5,
        consts: [[1, "btn", 3, "type"], ["width", "18", "height", "18", 1, "spinner-grow", "ms-1", 3, "iconName"]],
        template: function(i, o) {
            i & 1 && (to(),
            B(0, "button", 0),
            Ot(1, L5, 1, 1, "svg-icon", 1),
            cr(2),
            Ke(3),
            ne()),
            i & 2 && (lr(o.getClass()),
            He("type", o.type()),
            se(),
            mt(o.loading() ? 1 : -1),
            se(2),
            no(" ", o.label(), `
`))
        },
        dependencies: [oo, lo],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var IT = {
    KMB: "KMB",
    MB: "MB",
    B: "B"
};
var ET = ( () => {
    let t = class t extends yb {
        transform(r, i, o) {
            return r === 0 || r === "0" ? "0" : !r || isNaN(r) ? "-" : Object.values(IT).includes(i) ? V5(r, i) : super.transform(r, i, o)
        }
    }
    ;
    t.\u0275fac = ( () => {
        let r;
        return function(o) {
            return (r || (r = An(t)))(o || t)
        }
    }
    )(),
    t.\u0275pipe = Re({
        name: "number",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)()
  , V5 = (e, t) => (e = Math.round(e),
t === "KMB" && e >= 1e3 && e < 1e6 ? `${(Math.ceil(e / 100) / 10).toString()} K` : t !== "B" && e >= 1e6 && e < 1e9 ? `${(Math.ceil(e / 1e3) / 1e3).toString()} M` : e >= 1e9 ? `${(Math.ceil(e / 1e6) / 1e3).toString()} B` : (+e).toLocaleString());
var Ave = ( () => {
    let t = class t {
        constructor() {
            this.digitFormat = Fe(""),
            this.value = F(),
            this.format = F(),
            this.minDigit = F(void 0),
            this.maxDigit = F(void 0),
            pn( () => {
                (this.minDigit() !== void 0 || this.maxDigit() !== void 0) && this.digitFormat.update( () => `1.${this.minDigit() ?? 0}-${this.maxDigit() ?? 3}`)
            }
            )
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["ui-number"]],
        inputs: {
            value: [1, "value"],
            format: [1, "format"],
            minDigit: [1, "minDigit"],
            maxDigit: [1, "maxDigit"]
        },
        decls: 2,
        vars: 4,
        template: function(i, o) {
            if (i & 1 && (Ke(0),
            wf(1, "number")),
            i & 2) {
                let s;
                Rt(zM(1, 1, o.value(), (s = o.format()) !== null && s !== void 0 ? s : o.digitFormat()))
            }
        },
        dependencies: [ET],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var Rve = ( () => {
    let t = class t {
        transform(r, i=0) {
            let o = ""
              , s = Math.abs(Math.floor(r));
            return r == null ? "" : (i == 0 ? s < 1e9 ? o = s.toLocaleString() : o = `${(s / 1e6).toLocaleString()} M` : i == 1 && (s < 1e6 ? o = (+s).toLocaleString() : s >= 1e6 && s < 1e9 ? o = `${(Math.ceil(s / 1e3) / 1e3).toLocaleString()} M` : o = `${(Math.ceil(s / 1e6) / 1e3).toLocaleString()} B`),
            `${r < 0 ? "-" : ""}${o}`)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "largeNumber",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)();
var jve = ( () => {
    let t = class t {
        transform(r, i=0) {
            let o = ""
              , s = Math.abs(Math.floor(r));
            return r == null ? "" : (i == 0 ? s < 1e9 ? o = s.toLocaleString() : o = `${(s / 1e6).toLocaleString()} \u0645\u06CC\u0644\u06CC\u0648\u0646 ` : i == 1 ? s < 1e6 ? o = (+s).toLocaleString() : s >= 1e6 && s < 1e9 ? o = `${ep((Math.ceil(s / 1e3) / 1e3).toFixed(1))} \u0645\u06CC\u0644\u06CC\u0648\u0646 ` : o = `${ep((Math.ceil(s / 1e6) / 1e3).toFixed(1))} \u0645\u06CC\u0644\u06CC\u0627\u0631\u062F ` : i == 2 && (s < 1e6 ? o = (+s).toLocaleString() : s >= 1e6 && s < 1e9 ? o = `${ep((Math.ceil(s / 1e3) / 1e3).toFixed(1))}` : o = `${ep((Math.ceil(s / 1e6) / 1e3).toFixed(1))}`),
            `${r < 0 ? "-" : ""}${o}`)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "largeNumberPersian",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)()
  , ep = e => e == null ? "" : (+e).toLocaleString();
var Uve = ( () => {
    let t = class t {
        transform(r) {
            let i = ""
              , o = Math.abs(Math.floor(r));
            return r == null ? "" : (o >= 1e3 && o < 1e6 ? i = "\u0647\u0632\u0627\u0631" : o >= 1e6 && o < 1e9 ? i = "\u0645\u06CC\u0644\u06CC\u0648\u0646" : i = "\u0645\u06CC\u0644\u06CC\u0627\u0631\u062F",
            i)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "largeNumberPersianPostfix",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)();
var Yve = ( () => {
    let t = class t {
        transform(r, i) {
            if (r == null || Number.isNaN(r))
                return "-";
            let o, s, a;
            if (i) {
                let c = i.split(".");
                if (o = c[0],
                c.length > 1) {
                    let f = c[1].split("-");
                    f.length > 0 ? (s = f[0],
                    a = f[1]) : s = f[0]
                }
            }
            return r.toLocaleString(void 0, {
                minimumIntegerDigits: o,
                minimumFractionDigits: s,
                maximumFractionDigits: a
            })
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "undefinedDashNumber",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)();
var tp = " \u0648 "
  , ST = "\u0635\u0641\u0631"
  , j5 = "\u0645\u0646\u0641\u06CC "
  , Dr = [["", "\u06CC\u06A9", "\u062F\u0648", "\u0633\u0647", "\u0686\u0647\u0627\u0631", "\u067E\u0646\u062C", "\u0634\u0634", "\u0647\u0641\u062A", "\u0647\u0634\u062A", "\u0646\u0647"], ["\u062F\u0647", "\u06CC\u0627\u0632\u062F\u0647", "\u062F\u0648\u0627\u0632\u062F\u0647", "\u0633\u06CC\u0632\u062F\u0647", "\u0686\u0647\u0627\u0631\u062F\u0647", "\u067E\u0627\u0646\u0632\u062F\u0647", "\u0634\u0627\u0646\u0632\u062F\u0647", "\u0647\u0641\u062F\u0647", "\u0647\u062C\u062F\u0647", "\u0646\u0648\u0632\u062F\u0647", "\u0628\u06CC\u0633\u062A"], ["", "", "\u0628\u06CC\u0633\u062A", "\u0633\u06CC", "\u0686\u0647\u0644", "\u067E\u0646\u062C\u0627\u0647", "\u0634\u0635\u062A", "\u0647\u0641\u062A\u0627\u062F", "\u0647\u0634\u062A\u0627\u062F", "\u0646\u0648\u062F"], ["", "\u06CC\u06A9\u0635\u062F", "\u062F\u0648\u06CC\u0633\u062A", "\u0633\u06CC\u0635\u062F", "\u0686\u0647\u0627\u0631\u0635\u062F", "\u067E\u0627\u0646\u0635\u062F", "\u0634\u0634\u0635\u062F", "\u0647\u0641\u062A\u0635\u062F", "\u0647\u0634\u062A\u0635\u062F", "\u0646\u0647\u0635\u062F"], ["", " \u0647\u0632\u0627\u0631", " \u0645\u06CC\u0644\u06CC\u0648\u0646", " \u0645\u06CC\u0644\u06CC\u0627\u0631\u062F", " \u0628\u06CC\u0644\u06CC\u0648\u0646", " \u0628\u06CC\u0644\u06CC\u0627\u0631\u062F", " \u062A\u0631\u06CC\u0644\u06CC\u0648\u0646", " \u062A\u0631\u06CC\u0644\u06CC\u0627\u0631\u062F", " \u06A9\u0648\u0622\u062F\u0631\u06CC\u0644\u06CC\u0648\u0646", " \u06A9\u0627\u062F\u0631\u06CC\u0644\u06CC\u0627\u0631\u062F", " \u06A9\u0648\u06CC\u0646\u062A\u06CC\u0644\u06CC\u0648\u0646", " \u06A9\u0648\u0627\u0646\u062A\u06CC\u0646\u06CC\u0627\u0631\u062F", " \u0633\u06A9\u0633\u062A\u06CC\u0644\u06CC\u0648\u0646", " \u0633\u06A9\u0633\u062A\u06CC\u0644\u06CC\u0627\u0631\u062F", " \u0633\u067E\u062A\u06CC\u0644\u06CC\u0648\u0646", " \u0633\u067E\u062A\u06CC\u0644\u06CC\u0627\u0631\u062F", " \u0627\u06A9\u062A\u06CC\u0644\u06CC\u0648\u0646", " \u0627\u06A9\u062A\u06CC\u0644\u06CC\u0627\u0631\u062F", " \u0646\u0627\u0646\u06CC\u0644\u06CC\u0648\u0646", " \u0646\u0627\u0646\u06CC\u0644\u06CC\u0627\u0631\u062F", " \u062F\u0633\u06CC\u0644\u06CC\u0648\u0646", " \u062F\u0633\u06CC\u0644\u06CC\u0627\u0631\u062F"]]
  , B5 = ["", "\u062F\u0647\u0645", "\u0635\u062F\u0645", "\u0647\u0632\u0627\u0631\u0645", "\u062F\u0647\u200C\u0647\u0632\u0627\u0631\u0645", "\u0635\u062F\u200C\u0647\u0632\u0627\u0631\u0645", "\u0645\u06CC\u0644\u06CC\u0648\u0646\u0648\u0645", "\u062F\u0647\u200C\u0645\u06CC\u0644\u06CC\u0648\u0646\u0648\u0645", "\u0635\u062F\u0645\u06CC\u0644\u06CC\u0648\u0646\u0648\u0645", "\u0645\u06CC\u0644\u06CC\u0627\u0631\u062F\u0645", "\u062F\u0647\u200C\u0645\u06CC\u0644\u06CC\u0627\u0631\u062F\u0645", "\u0635\u062F\u200C\u200C\u0645\u06CC\u0644\u06CC\u0627\u0631\u062F\u0645"]
  , H5 = e => {
    let t = e;
    return typeof t == "number" && (t = t.toString()),
    t.length % 3 === 1 ? t = `00${t}` : t.length % 3 === 2 && (t = `0${t}`),
    t.replace(/\d{3}(?=\d)/g, "$&*").split("*")
}
  , U5 = e => {
    if (parseInt(e, 0) === 0)
        return "";
    let t = parseInt(e, 0);
    if (t < 10)
        return Dr[0][t];
    if (t <= 20)
        return Dr[1][t - 10];
    if (t < 100) {
        let a = t % 10
          , l = (t - a) / 10;
        return a > 0 ? Dr[2][l] + tp + Dr[0][a] : Dr[2][l]
    }
    let n = t % 10
      , r = (t - t % 100) / 100
      , i = (t - (r * 100 + n)) / 10
      , o = [Dr[3][r]]
      , s = i * 10 + n;
    return s === 0 || (s < 10 ? o.push(Dr[0][s]) : s <= 20 ? o.push(Dr[1][s - 10]) : (o.push(Dr[2][i]),
    n > 0 && o.push(Dr[0][n]))),
    o.join(tp)
}
  , $5 = e => (e = e.replace(/0*$/, ""),
e === "" ? "" : (e.length > 11 && (e = e.substr(0, 11)),
" \u0645\u0645\u06CC\u0632 " + ja(e) + " " + B5[e.length]))
  , ja = e => {
    e = e.toString().replace(/[^0-9.-]/g, "");
    let t = !1
      , n = parseFloat(e);
    if (isNaN(n) || n === 0)
        return ST;
    n < 0 && (t = !0,
    e = e.replace(/-/g, ""));
    let r = ""
      , i = e
      , o = e.indexOf(".");
    if (o > -1 && (i = e.substring(0, o),
    r = e.substring(o + 1, e.length)),
    i.length > 66)
        return "\u062E\u0627\u0631\u062C \u0627\u0632 \u0645\u062D\u062F\u0648\u062F\u0647";
    let s = H5(i)
      , a = [];
    for (let l = 0; l < s.length; l += 1) {
        let c = U5(s[l]);
        c !== "" && a.push(c + Dr[4][s.length - (l + 1)])
    }
    return r.length > 0 && (r = $5(r)),
    (t ? j5 : "") + a.join(tp) + r
}
;
String.prototype.toPersianLetter = function() {
    return ja(this)
}
;
Number.prototype.toPersianLetter = function() {
    return ja(parseFloat(this).toString())
}
;
String.prototype.num2persian = function() {
    return ja(this)
}
;
Number.prototype.num2persian = function() {
    return ja(parseFloat(this).toString())
}
;
var A0 = ja;
var qve = ( () => {
    let t = class t {
        transform(r, i=0) {
            return r ? i === 0 ? A0(Math.floor(r)) + " \u0631\u06CC\u0627\u0644" : A0(Math.floor(r / 10)) + " \u062A\u0648\u0645\u0627\u0646" : null
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "numberToPersianWords",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)();
var Qve = ( () => {
    let t = class t {
        transform(r) {
            return r || null
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "positiveNumber",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)();
var Y5 = 1e6
  , W5 = 1e12
  , Jve = ( () => {
    let t = class t {
        transform(r) {
            if ([void 0, null, NaN].includes(r))
                return "-";
            let i = ""
              , o = Math.abs(Math.floor(r));
            return r < W5 ? i = o.toLocaleString() : (o = Math.trunc(o / Y5),
            i = `${o.toLocaleString()} M`),
            `${r < 0 ? "-" : ""}${i}`
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "priceNumber",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)();
var z5 = 1e3
  , TT = 1e6
  , G5 = 1e9
  , e0e = ( () => {
    let t = class t {
        transform(r, i) {
            if ([void 0, null, NaN].includes(r))
                return "-";
            let o = ""
              , s = Math.abs(Math.floor(r));
            return r < TT ? o = s.toLocaleString() : r < G5 ? (s = Math.trunc(s / z5),
            o = `${s.toLocaleString()} K`) : (s = Math.trunc(s / TT),
            o = `${s.toLocaleString()} M`),
            i !== void 0 ? o === "-" ? "" : o.split(" ")[i] : o
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "shrankPriceNumber",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)();
var NT = kp(np())
  , i0e = kp(R0());
var o0e = ( () => {
    let t = class t {
        transform(r) {
            return (0,
            NT.default)(r).locale("fa").fromNow()
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "jmoment",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)();
var a0e = ( () => {
    let t = class t {
        transform(r, i) {
            if (!r)
                return "";
            let o = 10
              , s = 0
              , a = 0
              , l = r;
            for (; s < i && a < o; )
                l *= 10,
                Math.trunc(l) !== 0 && s++,
                a++;
            return r.toFixed(a)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "minNonZeroFractionalNumbers",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)();
var l0e = ( () => {
    let t = class t {
        transform(r) {
            if (!r)
                return 0;
            if (r > 100)
                return Math.round(r);
            try {
                return +r == 0 ? 0 : r.toString().split(".")[1]?.length > 2 ? Math.trunc(++r * 100) / 100 : r
            } catch {
                return 0
            }
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "normalPercent",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)();
var d0e = ( () => {
    let t = class t {
        transform(r) {
            return r && Math.round(+r)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "math",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)();
var E0e = ( () => {
    let t = class t {
        constructor(r, i) {
            this.element = r,
            this.renderer = i
        }
        ngOnChanges(r) {
            this.blink && r.value && !r.value.firstChange && r.value.previousValue !== void 0 && r.value.currentValue !== void 0 && r.value.currentValue !== r.value.previousValue && (this.renderer.addClass(this.element.nativeElement, "text-primary"),
            setTimeout( () => this.renderer.removeClass(this.element.nativeElement, "text-primary"), 1e3))
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(O(Ne),O(yt))
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["", "blink", ""]],
        inputs: {
            blink: "blink",
            value: "value"
        },
        features: [nn]
    });
    let e = t;
    return e
}
)();
var O0e = ( () => {
    let t = class t {
        constructor() {
            this.isHoldingMouseBtn = !1,
            this.sliderRef = Y(Ne)
        }
        get sliderElement() {
            return this.sliderRef.nativeElement
        }
        handleMouseDown(r) {
            this.sliderRef && (this.isHoldingMouseBtn = !0,
            this.sliderElement.classList.add("active"),
            this.dragStartX = r.pageX - this.sliderElement.offsetLeft,
            this.scrollLeft = this.sliderElement.scrollLeft)
        }
        handleMouseLeave() {
            this.sliderRef && (this.isHoldingMouseBtn = !1,
            this.sliderElement.classList.remove("active"))
        }
        handleMouseUp() {
            this.sliderRef && (this.isHoldingMouseBtn = !1,
            this.sliderElement.classList.remove("active"))
        }
        handleMouseMove(r) {
            if (!this.sliderRef || !this.isHoldingMouseBtn)
                return;
            r.preventDefault();
            let o = (r.pageX - this.sliderElement.offsetLeft - this.dragStartX) * 1;
            this.sliderElement.scrollLeft = this.scrollLeft - o
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["", "slidable", ""]],
        hostBindings: function(i, o) {
            i & 1 && re("mousedown", function(a) {
                return o.handleMouseDown(a)
            })("mouseleave", function() {
                return o.handleMouseLeave()
            })("mouseup", function() {
                return o.handleMouseUp()
            })("mousemove", function(a) {
                return o.handleMouseMove(a)
            })
        }
    });
    let e = t;
    return e
}
)();
var P0e = ( () => {
    let t = class t {
        constructor(r, i) {
            this.element = r,
            this.renderer = i
        }
        ngOnChanges(r) {
            this.boldBlink && r.value && !r.value.firstChange && r.value.previousValue !== void 0 && r.value.currentValue !== void 0 && r.value.currentValue !== r.value.previousValue && (this.renderer.addClass(this.element.nativeElement, "fw-bold"),
            setTimeout( () => this.renderer.removeClass(this.element.nativeElement, "fw-bold"), 1e3))
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(O(Ne),O(yt))
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["", "boldBlink", ""]],
        inputs: {
            boldBlink: "boldBlink",
            value: "value"
        },
        features: [nn]
    });
    let e = t;
    return e
}
)();
var R0e = ( () => {
    let t = class t {
        constructor(r, i) {
            this.renderer = r,
            this.el = i,
            this._elementClass = []
        }
        ngOnChanges(r) {
            r.inputValue && (this.renderer.addClass(this.el.nativeElement, "text-primary"),
            setTimeout( () => {
                this.renderer.removeClass(this.el.nativeElement, "text-primary")
            }
            , 1e3))
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(O(yt),O(Ne))
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["", "appHighlighter", ""]],
        inputs: {
            inputValue: [0, "appHighlighter", "inputValue"]
        },
        features: [nn]
    });
    let e = t;
    return e
}
)();
var V0e = ( () => {
    let t = class t {
        constructor(r) {
            this._el = r
        }
        onInputChange(r) {
            let i = this._el.nativeElement.value
              , o = i.replace(/([^0-9۰-۹]*)/g, "");
            this._el.nativeElement.value = o,
            i !== this._el.nativeElement.value && r.stopPropagation()
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(O(Ne))
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["input", "numbersOnly", ""]],
        hostBindings: function(i, o) {
            i & 1 && re("input", function(a) {
                return o.onInputChange(a)
            })
        }
    });
    let e = t;
    return e
}
)();
var Y0e = ( () => {
    let t = class t {
        constructor(r) {
            this.elementRef = r,
            this.prevPosition = 0,
            this.clickOutside = new dt
        }
        onClick(r, i) {
            if (!i)
                return;
            this.elementRef.nativeElement.contains(i) || this.clickOutside.emit(r)
        }
        onRightClick(r, i) {
            if (!i)
                return;
            this.elementRef.nativeElement.contains(i) || this.clickOutside.emit(r)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(O(Ne))
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["", "clickOutside", ""]],
        hostBindings: function(i, o) {
            i & 1 && re("click", function(a) {
                return o.onClick(a, a.target)
            }, !1, sr)("contextmenu", function(a) {
                return o.onRightClick(a, a.target)
            }, !1, sr)
        },
        outputs: {
            clickOutside: "clickOutside"
        }
    });
    let e = t;
    return e
}
)();
var Q0e = ( () => {
    let t = class t {
        constructor(r, i) {
            this.renderer = r,
            this.overlay_management = i,
            this.prevPosition = 0,
            this.overlayHeight = 0,
            this.scrollTop = 0,
            this.isPartOfHeader = !1,
            this.swipeHide = new dt
        }
        onTouchstart(r) {
            let i = this.overlay_management.nativeElement.getElementsByClassName("overflow-auto")[0];
            this.isPartOfHeader = r?.srcElement?.tagName == "HEADER" || r.srcElement.getElementsByTagName("header")?.length,
            this.scrollTop = i?.scrollTop ?? 0,
            !(this.scrollTop > 0 && !this.isPartOfHeader) && (this.prevPosition = r.changedTouches[0].clientY,
            this.overlayHeight = this.overlay_management.nativeElement.offsetHeight)
        }
        onTouchmove(r) {
            if (r?.target?.type == "range" || this.scrollTop > 0 && !this.isPartOfHeader)
                return;
            let i = this.overlay_management.nativeElement.offsetHeight
              , o = this.prevPosition - r.changedTouches[0].clientY
              , s = i + o;
            s = s > this.overlayHeight ? this.overlayHeight : s,
            (i < this.overlayHeight || i === this.overlayHeight && o < 0) && this.renderer.setStyle(this.overlay_management.nativeElement, "height", `${s}px`),
            this.prevPosition = r.changedTouches[0].clientY
        }
        onTouchend() {
            let r = this.overlay_management.nativeElement.offsetHeight;
            !this.overlay_management.nativeElement.classList.contains("disable-hide") && r < this.overlayHeight / 1.2 ? (this.swipeHide.emit(!0),
            setTimeout( () => {
                this.renderer.removeStyle(this.overlay_management.nativeElement, "height")
            }
            , 500)) : this.renderer.removeStyle(this.overlay_management.nativeElement, "height")
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(O(yt),O(Ne))
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["", "swipeUpDown", ""]],
        hostBindings: function(i, o) {
            i & 1 && re("touchstart", function(a) {
                return o.onTouchstart(a)
            })("touchmove", function(a) {
                return o.onTouchmove(a)
            })("touchend", function(a) {
                return o.onTouchend(a)
            })
        },
        outputs: {
            swipeHide: "swipeHide"
        }
    });
    let e = t;
    return e
}
)();
var n_e = ( () => {
    let t = class t {
        constructor(r) {
            this.elementRef = r,
            this.prevPosition = 0,
            this.touchOutside = new dt
        }
        onTouchstart(r) {
            this.prevPosition = r.changedTouches[0].clientY
        }
        onTouchend(r, i) {
            if (!i)
                return;
            !this.elementRef.nativeElement.contains(i) && r.changedTouches[0].clientY > this.prevPosition + 5 && this.touchOutside.emit(r)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(O(Ne))
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["", "touchOutside", ""]],
        hostBindings: function(i, o) {
            i & 1 && re("touchstart", function(a) {
                return o.onTouchstart(a)
            }, !1, sr)("touchend", function(a) {
                return o.onTouchend(a, a.target)
            }, !1, sr)
        },
        outputs: {
            touchOutside: "touchOutside"
        }
    });
    let e = t;
    return e
}
)();
var u_e = ( () => {
    let t = class t {
        constructor() {
            this.prevPosition = 0,
            this.overlayHeight = 0,
            this.prevScrollPos = 0,
            this.currentScrollPos = 0,
            this.isPartOfHeader = !1,
            this.swipeHide = new dt,
            this.headersCount = 1,
            setTimeout( () => {
                this.headers = document.getElementsByClassName("visibility-in-scroll"),
                this.headersHeight = [this.getHeaderHeight(this.headers, 0), this.getHeaderHeight(this.headers, 1), this.getHeaderHeight(this.headers, 2)],
                this.headersHeight.length = this.headers?.length,
                this.headersParent = document.getElementsByClassName("holder-visibility-in-scroll")[0],
                this.symbolHeaderElement = document.getElementsByClassName("symbol-header")[0],
                this.headersCount = this.headers?.length ?? 1;
                let r = getComputedStyle(this.headersParent, "").getPropertyValue("padding-top");
                this.headersParentHeight = this.headersParent.offsetHeight - +r.match(/\d+/)[0] + 10
            }
            , 100)
        }
        onScrollChange(r) {
            let i = r.target.scrollTop;
            this.prevScrollPos < i ? (i > this.headersHeight[this.headersCount - 1] && this.headers[this.headersCount - 1]?.classList?.add("visibility-in-scroll-hide"),
            i > this.headersHeight[this.headersCount - 2] && this.headers[this.headersCount - 2]?.classList?.add("visibility-in-scroll-hide"),
            i > this.headersHeight[this.headersCount - 3] && this.headers[this.headersCount - 3]?.classList?.add("visibility-in-scroll-hide"),
            i > this.headersParentHeight && (this.headersParent?.classList?.add("pe-none"),
            this.symbolHeaderElement?.classList?.add("shadow-sm"))) : (this.headersParent?.classList?.remove("pe-none"),
            this.symbolHeaderElement?.classList?.remove("shadow-sm"),
            this.headers[2]?.classList?.remove("visibility-in-scroll-hide"),
            this.headers[1]?.classList?.remove("visibility-in-scroll-hide"),
            this.headers[0]?.classList?.remove("visibility-in-scroll-hide")),
            this.prevScrollPos = i
        }
        getHeaderHeight(r, i) {
            let o = 10;
            for (let s = i; s < r.length; s++)
                o += r[s]?.offsetHeight ?? 0;
            return o
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["", "scrollUpDown", ""]],
        hostBindings: function(i, o) {
            i & 1 && re("scroll", function(a) {
                return o.onScrollChange(a)
            })
        },
        outputs: {
            swipeHide: "swipeHide"
        }
    });
    let e = t;
    return e
}
)();
var c_e = ( () => {
    let t = class t {
        constructor(r, i) {
            this.renderer = r,
            this.el = i
        }
        ngOnChanges(r) {
            if (r.colorizeNumber) {
                let i = +r.colorizeNumber.currentValue?.toString().replaceAll(",", "");
                i > 0 ? (this.renderer.removeClass(this.el.nativeElement, "text-danger"),
                this.renderer.removeClass(this.el.nativeElement, "text-muted"),
                this.renderer.addClass(this.el.nativeElement, "text-success")) : i < 0 ? (this.renderer.removeClass(this.el.nativeElement, "text-success"),
                this.renderer.removeClass(this.el.nativeElement, "text-muted"),
                this.renderer.addClass(this.el.nativeElement, "text-danger")) : i === 0 && (this.renderer.removeClass(this.el.nativeElement, "text-success"),
                this.renderer.removeClass(this.el.nativeElement, "text-danger"),
                this.renderer.addClass(this.el.nativeElement, "text-muted"))
            } else
                this.renderer.removeClass(this.el.nativeElement, "text-danger"),
                this.renderer.removeClass(this.el.nativeElement, "text-success")
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(O(yt),O(Ne))
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["", "colorizeNumber", ""]],
        inputs: {
            colorizeNumber: "colorizeNumber"
        },
        features: [nn]
    });
    let e = t;
    return e
}
)();
var m_e = ( () => {
    let t = class t {
        constructor(r, i) {
            this.renderer = r,
            this.overlay_management = i,
            this.swipeOnTap = F(!1),
            this.swipeSide = F("Left-Right"),
            this.multiSwipe = F(!1),
            this.swipeWidth = F(void 0),
            this.swipeWithPercent = F(.35),
            this.maxSwipe = 0,
            this.prevPosition = 0,
            this.firstTouchX = 0,
            this.firstTouchY = 0,
            this.diff = 0,
            this.swipeLeft = void 0
        }
        ngOnInit() {
            this.maxSwipe = Math.round(this.swipeWidth() ?? this.overlay_management.nativeElement.clientWidth * this.swipeWithPercent())
        }
        onTouchstart(r) {
            let i = r.target.closest("[swipeable]");
            if (!i)
                return;
            !this.multiSwipe() && this.element && this.element?.id !== i.id && (this.lastSwipedElement = this.element),
            this.element = i,
            this.element.style.transitionDuration = "0s";
            let {clientX: o, clientY: s} = r.changedTouches[0];
            this.firstTouchX = this.prevPosition = o,
            this.firstTouchY = s
        }
        onTouchmove(r) {
            let {clientX: i, clientY: o} = r.changedTouches[0]
              , s = +this.element.style.transform.slice(12, this.element.style.transform.indexOf("px"));
            if (s <= 0 && this.swipeSide() === "Right" && this.firstTouchX - i > 0 || s >= 0 && this.swipeSide() === "Left" && this.firstTouchX - i < 0 || !this.element || (this.swipeLeft === void 0 && (this.swipeLeft = Math.abs(this.firstTouchX - i) > Math.abs(this.firstTouchY - o)),
            !this.swipeLeft))
                return;
            let a = this.prevPosition - i
              , l = this.element.style.transform
              , c = +l.slice(12, l.indexOf("px"));
            Math.abs(c - a) < this.maxSwipe && (this.element.style.transform = `translate3d(${c - a}px, 0px, 0px)`),
            this.prevPosition = i
        }
        onTouchend(r) {
            let {clientX: i, clientY: o} = r.changedTouches[0];
            if (!this.element)
                return;
            this.lastSwipedElement && (this.lastSwipedElement.style.transitionDuration = "0.3s",
            this.lastSwipedElement.style.transform = "translate3d(0px, 0px, 0px)",
            this.lastSwipedElement = void 0),
            this.element.style.transitionDuration = "0.3s";
            let s = +this.element.style.transform.slice(12, this.element.style.transform.indexOf("px"));
            s > 0 ? this.firstTouchX < this.prevPosition && this.swipeSide() !== "Left" ? this.element.style.transform = `translate3d(${this.maxSwipe}px, 0px, 0px)` : this.element.style.transform = "translate3d(0px, 0px, 0px)" : s < 0 ? this.firstTouchX > this.prevPosition && this.swipeSide() !== "Right" ? this.element.style.transform = `translate3d(-${this.maxSwipe}px, 0px, 0px)` : this.element.style.transform = "translate3d(0px, 0px, 0px)" : this.swipeOnTap() && this.firstTouchX - i === 0 && this.firstTouchY - o === 0 && (this.swipeSide() === "Left" ? this.element.style.transform = `translate3d(-${this.maxSwipe}px, 0px, 0px)` : this.element.style.transform = `translate3d(${this.maxSwipe}px, 0px, 0px)`),
            this.swipeLeft = void 0,
            setTimeout( () => {
                this.element.style.transitionDuration = "0s"
            }
            , 200)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(O(yt),O(Ne))
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["", "swipeRightLeft", ""]],
        hostBindings: function(i, o) {
            i & 1 && re("touchstart", function(a) {
                return o.onTouchstart(a)
            })("touchmove", function(a) {
                return o.onTouchmove(a)
            })("touchend", function(a) {
                return o.onTouchend(a)
            })
        },
        inputs: {
            swipeOnTap: [1, "swipeOnTap"],
            swipeSide: [1, "swipeSide"],
            multiSwipe: [1, "multiSwipe"],
            swipeWidth: [1, "swipeWidth"],
            swipeWithPercent: [1, "swipeWithPercent"]
        }
    });
    let e = t;
    return e
}
)();
var y_e = ( () => {
    let t = class t {
        constructor(r) {
            this.viewContainerRef = r
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(O(ar))
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["", "appDynamic", ""]]
    });
    let e = t;
    return e
}
)();
var __e = ( () => {
    let t = class t {
        onClick(r) {
            r?.stopPropagation?.(),
            r?.srcEvent?.stopPropagation?.()
        }
        onTap(r) {
            r.stopPropagation?.(),
            r?.srcEvent?.stopPropagation?.()
        }
        onMousedown(r) {
            return r.stopPropagation(),
            !1
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275dir = ee({
        type: t,
        selectors: [["", "click-stop-propagation", ""]],
        hostBindings: function(i, o) {
            i & 1 && re("click", function(a) {
                return o.onClick(a)
            })("tap", function(a) {
                return o.onTap(a)
            })("mousedown", function(a) {
                return o.onMousedown(a)
            })
        }
    });
    let e = t;
    return e
}
)();
var Je = kp(QT());
var XT = ( () => {
    let t = class t {
        constructor() {
            this.months = ["\u0641\u0631\u0648\u0631\u062F\u06CC\u0646", "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A", "\u062E\u0631\u062F\u0627\u062F", "\u062A\u06CC\u0631", "\u0645\u0631\u062F\u0627\u062F", "\u0634\u0647\u0631\u06CC\u0648\u0631", "\u0645\u0647\u0631", "\u0622\u0628\u0627\u0646", "\u0622\u0630\u0631", "\u062F\u06CC", "\u0628\u0647\u0645\u0646", "\u0627\u0633\u0641\u0646\u062F"]
        }
        transform(r) {
            return this.months[r]
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275pipe = Re({
        name: "monthText",
        type: t,
        pure: !0
    });
    let e = t;
    return e
}
)();
function h6(e, t) {
    if (e & 1) {
        let n = rn();
        B(0, "div", 19),
        re("click", function() {
            let i = fe(n).$implicit
              , o = q(2);
            return he(o.yearClick(i))
        }),
        B(1, "span"),
        Ke(2),
        ne()()
    }
    if (e & 2) {
        let n = t.$implicit;
        ur("today", n.isYearOfTodayDate)("selected", n.isYearOfSelectedDate)("disabled", n.isYearDisabled),
        se(2),
        Rt(n.value)
    }
}
function p6(e, t) {
    if (e & 1 && (B(0, "div", 11)(1, "div", 17),
    jr(2, h6, 3, 7, "div", 18, Vr),
    ne()()),
    e & 2) {
        let n = q();
        se(2),
        Br(n.years())
    }
}
function m6(e, t) {
    if (e & 1) {
        let n = rn();
        B(0, "div", 21),
        re("click", function() {
            let i = fe(n).$implicit
              , o = q(2);
            return he(o.monthClick(i))
        }),
        B(1, "span"),
        Ke(2),
        wf(3, "monthText"),
        ne()()
    }
    if (e & 2) {
        let n = t.$implicit;
        ur("today", n.isMonthOfTodayDate)("selected", n.isMonthOfSelectedDate)("disabled", n.isMonthDisabled),
        se(2),
        Rt(WM(3, 7, n.indexValue))
    }
}
function g6(e, t) {
    if (e & 1 && (B(0, "div", 12)(1, "div", 17),
    jr(2, m6, 4, 9, "div", 20, Vr),
    ne()()),
    e & 2) {
        let n = q();
        se(2),
        Br(n.months())
    }
}
function y6(e, t) {
    if (e & 1 && (B(0, "div", 23)(1, "span"),
    Ke(2),
    ne()()),
    e & 2) {
        let n = t.$implicit;
        se(2),
        Rt(n)
    }
}
function v6(e, t) {
    if (e & 1) {
        let n = rn();
        B(0, "div", 26),
        re("click", function() {
            let i = fe(n).$implicit
              , o = q(3);
            return he(o.dayClick(i))
        }),
        B(1, "span"),
        Ke(2),
        ne()()
    }
    if (e & 2) {
        let n = t.$implicit;
        ur("other-month", !n.isDayInCurrentMonth)("today", n.isDayOfTodayDate)("selected", n.isDayOfSelectedDate)("disabled", n.isDayDisabled),
        se(2),
        Rt(n.value)
    }
}
function _6(e, t) {
    if (e & 1 && jr(0, v6, 3, 9, "div", 25, Vr),
    e & 2) {
        let n = t.$implicit;
        Br(n)
    }
}
function w6(e, t) {
    if (e & 1 && (B(0, "div", 13)(1, "div", 22),
    jr(2, y6, 3, 1, "div", 23, Vr),
    ne(),
    B(4, "div", 24),
    jr(5, _6, 2, 0, null, null, Vr),
    ne()()),
    e & 2) {
        let n = q();
        se(2),
        Br(n.weekDays()),
        se(3),
        Br(n.days())
    }
}
function D6(e, t) {
    if (e & 1) {
        let n = rn();
        B(0, "div", 34)(1, "div", 29),
        re("click", function() {
            fe(n);
            let i = q(2);
            return he(i.increaseSecond())
        })("mousedown", function() {
            fe(n);
            let i = q(2);
            return he(i.setIncreaseSecondInterval())
        })("mouseup", function() {
            fe(n);
            let i = q(2);
            return he(i.clearIncreaseSecondInterval())
        })("touchstart", function() {
            fe(n);
            let i = q(2);
            return he(i.setIncreaseSecondInterval())
        })("touchend", function() {
            fe(n);
            let i = q(2);
            return he(i.clearIncreaseSecondInterval())
        })("touchcancel", function() {
            fe(n);
            let i = q(2);
            return he(i.clearIncreaseSecondInterval())
        }),
        or(),
        B(2, "svg", 30),
        Ue(3, "polygon", 31),
        ne()(),
        Ki(),
        B(4, "div")(5, "span"),
        Ke(6),
        ne()(),
        B(7, "div", 29),
        re("click", function() {
            fe(n);
            let i = q(2);
            return he(i.decreaseSecond())
        })("mousedown", function() {
            fe(n);
            let i = q(2);
            return he(i.setDecreaseSecondInterval())
        })("mouseup", function() {
            fe(n);
            let i = q(2);
            return he(i.clearDecreaseSecondInterval())
        })("touchstart", function() {
            fe(n);
            let i = q(2);
            return he(i.setDecreaseSecondInterval())
        })("touchend", function() {
            fe(n);
            let i = q(2);
            return he(i.clearDecreaseSecondInterval())
        })("touchcancel", function() {
            fe(n);
            let i = q(2);
            return he(i.clearDecreaseSecondInterval())
        }),
        or(),
        B(8, "svg", 30),
        Ue(9, "polygon", 32),
        ne()()()
    }
    if (e & 2) {
        let n = q(2);
        se(6),
        Rt(n.secondText())
    }
}
function x6(e, t) {
    if (e & 1) {
        let n = rn();
        B(0, "div", 35)(1, "div", 36),
        re("click", function() {
            fe(n);
            let i = q(2);
            return he(i.toggleAmPm())
        }),
        or(),
        B(2, "svg", 30),
        Ue(3, "polygon", 31),
        ne()(),
        Ki(),
        B(4, "div")(5, "span"),
        Ke(6),
        ne()(),
        B(7, "div", 36),
        re("click", function() {
            fe(n);
            let i = q(2);
            return he(i.toggleAmPm())
        }),
        or(),
        B(8, "svg", 30),
        Ue(9, "polygon", 32),
        ne()()()
    }
    if (e & 2) {
        let n = q(2);
        se(6),
        Rt(n.amPmText())
    }
}
function C6(e, t) {
    if (e & 1) {
        let n = rn();
        B(0, "div", 27)(1, "div", 28)(2, "div", 29),
        re("click", function() {
            fe(n);
            let i = q();
            return he(i.increaseHour())
        })("mousedown", function() {
            fe(n);
            let i = q();
            return he(i.setIncreaseHourInterval())
        })("mouseup", function() {
            fe(n);
            let i = q();
            return he(i.clearIncreaseHourInterval())
        })("touchstart", function() {
            fe(n);
            let i = q();
            return he(i.setIncreaseHourInterval())
        })("touchend", function() {
            fe(n);
            let i = q();
            return he(i.clearIncreaseHourInterval())
        })("touchcancel", function() {
            fe(n);
            let i = q();
            return he(i.clearIncreaseHourInterval())
        }),
        or(),
        B(3, "svg", 30),
        Ue(4, "polygon", 31),
        ne()(),
        Ki(),
        B(5, "div")(6, "span"),
        Ke(7),
        ne()(),
        B(8, "div", 29),
        re("click", function() {
            fe(n);
            let i = q();
            return he(i.decreaseHour())
        })("mousedown", function() {
            fe(n);
            let i = q();
            return he(i.setDecreaseHourInterval())
        })("mouseup", function() {
            fe(n);
            let i = q();
            return he(i.clearDecreaseHourInterval())
        })("touchstart", function() {
            fe(n);
            let i = q();
            return he(i.setDecreaseHourInterval())
        })("touchend", function() {
            fe(n);
            let i = q();
            return he(i.clearDecreaseHourInterval())
        })("touchcancel", function() {
            fe(n);
            let i = q();
            return he(i.clearDecreaseHourInterval())
        }),
        or(),
        B(9, "svg", 30),
        Ue(10, "polygon", 32),
        ne()()(),
        Ki(),
        B(11, "div", 33)(12, "div", 29),
        re("click", function() {
            fe(n);
            let i = q();
            return he(i.increaseMinute())
        })("mousedown", function() {
            fe(n);
            let i = q();
            return he(i.setIncreaseMinuteInterval())
        })("mouseup", function() {
            fe(n);
            let i = q();
            return he(i.clearIncreaseMinuteInterval())
        })("touchstart", function() {
            fe(n);
            let i = q();
            return he(i.setIncreaseMinuteInterval())
        })("touchend", function() {
            fe(n);
            let i = q();
            return he(i.clearIncreaseMinuteInterval())
        })("touchcancel", function() {
            fe(n);
            let i = q();
            return he(i.clearIncreaseMinuteInterval())
        }),
        or(),
        B(13, "svg", 30),
        Ue(14, "polygon", 31),
        ne()(),
        Ki(),
        B(15, "div")(16, "span"),
        Ke(17),
        ne()(),
        B(18, "div", 29),
        re("click", function() {
            fe(n);
            let i = q();
            return he(i.decreaseMinute())
        })("mousedown", function() {
            fe(n);
            let i = q();
            return he(i.setDecreaseMinuteInterval())
        })("mouseup", function() {
            fe(n);
            let i = q();
            return he(i.clearDecreaseMinuteInterval())
        })("touchstart", function() {
            fe(n);
            let i = q();
            return he(i.setDecreaseMinuteInterval())
        })("touchend", function() {
            fe(n);
            let i = q();
            return he(i.clearDecreaseMinuteInterval())
        })("touchcancel", function() {
            fe(n);
            let i = q();
            return he(i.clearDecreaseMinuteInterval())
        }),
        or(),
        B(19, "svg", 30),
        Ue(20, "polygon", 32),
        ne()()(),
        Ot(21, D6, 10, 1, "div", 34)(22, x6, 10, 1, "div", 35),
        ne()
    }
    if (e & 2) {
        let n = q();
        ur("include-second", n.timeShowSecond())("include-12-hour", n.timeMeridian()),
        se(7),
        Rt(n.hourText()),
        se(4),
        ur("the-divider", n.timeShowSecond()),
        se(6),
        Rt(n.minuteText()),
        se(4),
        mt(n.timeShowSecond() ? 21 : -1),
        se(),
        mt(n.timeMeridian() ? 22 : -1)
    }
}
function M6(e, t) {
    if (e & 1) {
        let n = rn();
        B(0, "div", 37),
        re("click", function() {
            fe(n);
            let i = q();
            return he(i.selectToday())
        }),
        B(1, "span", 38),
        Ke(2, "\u0627\u0645\u0631\u0648\u0632"),
        ne()()
    }
}
var JT = ( () => {
    let t = class t {
        constructor(r) {
            this.cdr = r,
            this.id = Fe(void 0),
            this.containerInlineStyle = Fe({}),
            this.weekDays = Fe(void 0),
            this.viewDateTitle = Fe(""),
            this.viewModes = Fe(["day"]),
            this.currentViewMode = Fe(0),
            this.years = Fe([]),
            this.months = Fe([]),
            this.days = Fe([]),
            this.hour = 0,
            this.minute = 0,
            this.second = 0,
            this.hourText = Fe(""),
            this.minuteText = Fe(""),
            this.secondText = Fe(""),
            this.amPmText = Fe(""),
            this.fastTimeChangeTimeOut = 345,
            this.fastTimeChangeInterval = 123,
            this.wasInsideClick = !1,
            this._input = null,
            this.input = F(null),
            this._dateValue = "",
            this.dateValue = F(""),
            this.dateInitValue = F(!0),
            this.dateIsGregorian = F(!1),
            this.dateFormat = F("jYYYY/jM/jDD"),
            this.dateGregorianFormat = F("YYYY-MM-DD"),
            this.dateMin = F(null),
            this.dateMax = F(null),
            this.dateOnInit = F( () => {}
            ),
            this.dateOnSelect = F( () => {}
            ),
            this.timeEnable = F(!0),
            this.timeShowSecond = F(!0),
            this.timeMeridian = F(!1),
            this.uiTheme = F("default"),
            this.uiIsVisible = mf(!1),
            this.uiHideOnOutsideClick = F(!0),
            this.uiHideAfterSelectDate = F(!0),
            this.uiAutoPosition = F(!1),
            this.uiPositionOffset = F([0, 0]),
            this.uiContainerWidth = F(""),
            this.uiYearView = F(!0),
            this.uiMonthView = F(!0),
            this.uiInitViewMode = F("day"),
            this.uiTodayBtnEnable = F(!0),
            pn( () => {
                this.timeEnable() !== void 0 && (this.setTime(),
                this.seTimeText())
            }
            ),
            pn( () => {
                this.timeMeridian() !== void 0 && this.seTimeText()
            }
            ),
            pn( () => {
                this.checkViewModes(this.uiYearView(), this.uiMonthView())
            }
            ),
            pn( () => {
                this._input = this.input()
            }
            )
        }
        ngOnInit() {
            setTimeout( () => {
                Je.default.locale("fa"),
                this.setId(),
                this.setWeekDays(),
                this.setViewModes(),
                this.setInitViewMode(),
                this.setToday(),
                this.setDateInitValue(),
                this.setSelectedDate(),
                this.setViewDate(),
                this.setTime(),
                this.seTimeText(),
                this.setInputValue(),
                this.lockInputValue(),
                this.setShowOnInputFocus(),
                this.cdr.markForCheck()
            }
            , 100)
        }
        ngOnDestroy() {
            this._input && (this._input.removeEventListener("focus", this.inputEventFocusListener),
            this._input.removeEventListener("input", this.inputEventInputListener))
        }
        setId() {
            this.id.set("ng-persian-datepicker-" + Math.random().toString(36).slice(2, 10))
        }
        setWeekDays() {
            let r = Je.default.weekdaysMin();
            r.unshift(r.pop()),
            this.weekDays.set(r)
        }
        setViewModes() {
            this.viewModes.set(["day"]),
            this.uiMonthView() && this.viewModes.update(r => (r.push("month"),
            r)),
            this.uiYearView() && this.viewModes.update(r => (r.push("year"),
            r)),
            this.viewModes().length <= this.currentViewMode() && this.currentViewMode.set(0)
        }
        setInitViewMode() {
            let r = this.viewModes().indexOf(this.uiInitViewMode());
            r >= 0 && this.currentViewMode.set(r)
        }
        checkViewModes(r, i) {
            let o = 1;
            r && o++,
            i && o++,
            o !== this.viewModes().length && this.setViewModes()
        }
        setToday() {
            this.today = (0,
            Je.default)()
        }
        setDateInitValue() {
            this.dateValue() || !this.dateInitValue() || (this._dateValue = this.today.valueOf(),
            this.selectedDate = (0,
            Je.default)(this._dateValue),
            this.dateOnInit()(String(this.selectedDate.format(this.dateFormat())), String(this.selectedDate.format(this.dateGregorianFormat())), Number(this.selectedDate.valueOf())))
        }
        setSelectedDate() {
            this.dateValue() && (this._dateValue = this.dateValue(),
            typeof this._dateValue == "string" && (this.dateIsGregorian() ? this._dateValue = (0,
            Je.default)(this._dateValue, this.dateGregorianFormat()).valueOf() : this._dateValue = (0,
            Je.default)(this._dateValue, this.dateFormat()).valueOf()),
            this.selectedDate = (0,
            Je.default)(this._dateValue))
        }
        setViewDate() {
            this._dateValue ? this.viewDate = this.dateMax() && this.selectedDate.valueOf() > this.dateMax().valueOf() ? (0,
            Je.default)(this.dateMax()) : (0,
            Je.default)(this.selectedDate) : this.viewDate = this.dateMax() ? (0,
            Je.default)(this.dateMax()).endOf("jYear") : (0,
            Je.default)(this.today),
            this.onChangeViewDate()
        }
        onChangeViewDate() {
            this.viewDate.startOf("jMonth"),
            this.setYears(),
            this.setMonths(),
            this.setDays(),
            this.setViewDateTitle(),
            this.cdr.markForCheck()
        }
        setYears() {
            let r = []
              , i = (0,
            Je.default)(this.viewDate);
            i.startOf("jYear"),
            i.add(-6, "jYear");
            for (let o = 0; o < 12; o++) {
                let s = [i.valueOf(), i.jYear()];
                r.push({
                    timestamp: s[0],
                    value: s[1],
                    isYearOfTodayDate: this.isYearOfTodayDate(s),
                    isYearOfSelectedDate: this.isYearOfSelectedDate(s),
                    isYearDisabled: this.isYearDisabled(s)
                }),
                i.add(1, "jYear")
            }
            this.years.set(r)
        }
        setMonths() {
            let r = []
              , i = (0,
            Je.default)(this.viewDate);
            i.startOf("jYear");
            for (let o = 0; o < 12; o++) {
                let s = [i.valueOf(), i.jYear(), i.jMonth()];
                r.push({
                    timestamp: s[0],
                    year: s[1],
                    indexValue: s[2],
                    isMonthOfTodayDate: this.isMonthOfToday(s),
                    isMonthOfSelectedDate: this.isMonthOfSelectedDate(s),
                    isMonthDisabled: this.isMonthDisabled(s)
                }),
                i.add(1, "jMonth")
            }
            this.months.set(r)
        }
        setDays() {
            this.days.set([]);
            let r = []
              , i = []
              , o = []
              , s = (0,
            Je.default)(this.viewDate)
              , a = (0,
            Je.default)(this.viewDate)
              , l = (0,
            Je.default)(this.viewDate);
            s.add(-1, "jMonth"),
            l.add(1, "jMonth");
            let c = Je.default.jDaysInMonth(a.jYear(), a.jMonth())
              , f = Je.default.jDaysInMonth(s.jYear(), s.jMonth())
              , p = Je.default.jDaysInMonth(l.jYear(), l.jMonth());
            for (let m = 0; m < f; m++)
                r.push([s.valueOf(), s.jYear(), s.jMonth(), s.jDate()]),
                s.add(1, "day");
            for (let m = 0; m < c; m++)
                i.push([a.valueOf(), a.jYear(), a.jMonth(), a.jDate()]),
                a.add(1, "day");
            for (let m = 0; m < p; m++)
                o.push([l.valueOf(), l.jYear(), l.jMonth(), l.jDate()]),
                l.add(1, "day");
            for (let m = 0; m < 6; m++) {
                let y = [];
                for (let v = 0; v < 7; v++) {
                    let w = this.viewDate.day() === 6 ? 0 : this.viewDate.day() + 1
                      , x = m * 7 + v - w
                      , D = null;
                    x < 0 ? (x = r.length - (w - v),
                    D = r[x]) : x >= i.length ? (x = x - i.length,
                    D = o[x]) : D = i[x],
                    y.push({
                        timestamp: D[0],
                        year: D[1],
                        monthIndex: D[2],
                        value: D[3],
                        isDayInCurrentMonth: this.isDayInCurrentMonth(D),
                        isDayOfTodayDate: this.isDayOfTodayDate(D),
                        isDayOfSelectedDate: this.isDayOfSelectedDate(D),
                        isDayDisabled: this.isDayDisabled(D)
                    })
                }
                this.days.update(v => (v.push(y),
                v))
            }
        }
        setViewDateTitle() {
            let r = this.viewDate.jYear();
            switch (this.viewModes()[this.currentViewMode()]) {
            case "day":
                this.viewDateTitle.set(this.viewDate.format("jMMMM") + " " + r.toString());
                break;
            case "month":
                this.viewDateTitle.set(r.toString());
                break;
            case "year":
                this.viewDateTitle.set((r - 6).toString() + "-" + (r + 5).toString());
                break
            }
        }
        setTime() {
            if (this.selectedDate) {
                this.hour = this.selectedDate.hour(),
                this.minute = this.selectedDate.minute(),
                this.second = this.selectedDate.second();
                return
            }
            this.hour = this.today?.hour() || 0,
            this.minute = this.today?.minute() || 0,
            this.second = this.today?.second() || 0
        }
        seTimeText() {
            this.setHourText(),
            this.setMinuteText(),
            this.setSecondText(),
            this.setAmPmText()
        }
        setHourText() {
            let r = this.hour;
            if (!this.timeMeridian()) {
                this.hourText.set(r.toString().padStart(2, "0"));
                return
            }
            if (r === 0) {
                this.hourText.set("12".padStart(2, "0"));
                return
            }
            if (r > 12) {
                this.hourText.set((r - 12).toString().padStart(2, "0"));
                return
            }
            this.hourText.set(r.toString().padStart(2, "0"))
        }
        setMinuteText() {
            this.minuteText.set(this.minute.toString().padStart(2, "0"))
        }
        setSecondText() {
            this.secondText.set(this.second.toString().padStart(2, "0"))
        }
        setAmPmText() {
            if (this.hour >= 12) {
                this.amPmText.set("PM");
                return
            }
            this.amPmText.set("AM")
        }
        setInputValue(r=!0) {
            this._input && this._dateValue && (this._input.value = (0,
            Je.default)(this._dateValue).format(this.dateFormat()),
            r && this._input.dispatchEvent(new Event("input")))
        }
        lockInputValue() {
            this._input && (this.inputEventInputListener = () => {
                this.setInputValue(!1)
            }
            ,
            this._input.addEventListener("input", this.inputEventInputListener))
        }
        setShowOnInputFocus() {
            this._input && (this._input.setAttribute("data-datepicker-id", this.id()),
            this.inputEventFocusListener = () => {
                this.calcInputPositionAndSize(),
                setTimeout( () => {
                    this.uiIsVisible.set(!0),
                    this.cdr.markForCheck()
                }
                , 100)
            }
            ,
            this._input.addEventListener("focus", this.inputEventFocusListener))
        }
        skipViewDate(r, i) {
            i === 1 ? this.viewDate.add(r, "jYear") : i === 2 && this.viewDate.add(r, "jMonth")
        }
        navigate(r=!0) {
            let i = 1;
            switch (r || (i = i * -1),
            this.viewModes()[this.currentViewMode()]) {
            case "day":
                this.skipViewDate(i, 2);
                break;
            case "month":
                this.skipViewDate(i, 1);
                break;
            case "year":
                this.skipViewDate(i * 12, 1);
                break
            }
            this.onChangeViewDate()
        }
        nextViewMode() {
            if (this.viewModes().length !== 1) {
                if (this.viewModes().length <= this.currentViewMode() + 1) {
                    this.currentViewMode.set(0),
                    this.setViewDateTitle();
                    return
                }
                this.currentViewMode.update(r => ++r),
                this.setViewDateTitle()
            }
        }
        selectToday() {
            this.setToday(),
            this.preventClose = !0,
            this.changeSelectedDate(this.today)
        }
        yearClick(r) {
            if (r.isYearDisabled)
                return;
            this.viewDate = (0,
            Je.default)(r.timestamp);
            let i = this.viewModes().indexOf("month");
            i === -1 && (i = this.viewModes().indexOf("day")),
            this.currentViewMode.set(i),
            this.onChangeViewDate()
        }
        monthClick(r) {
            r.isMonthDisabled || (this.viewDate = (0,
            Je.default)(r.timestamp),
            this.currentViewMode.set(this.viewModes().indexOf("day")),
            this.onChangeViewDate())
        }
        dayClick(r) {
            r.isDayDisabled || this.changeSelectedDate((0,
            Je.default)(r.timestamp))
        }
        isYearOfTodayDate(r) {
            return this.today.jYear() === r[1]
        }
        isYearOfSelectedDate(r) {
            return this.selectedDate ? r[1] === this.selectedDate.jYear() : !1
        }
        isYearDisabled(r) {
            return !this.isDateInRange(r[0], !0, !1)
        }
        isMonthOfToday(r) {
            return this.today.jYear() === r[1] && this.today.jMonth() === r[2]
        }
        isMonthOfSelectedDate(r) {
            return this.selectedDate ? r[1] === this.selectedDate.jYear() && r[2] === this.selectedDate.jMonth() : !1
        }
        isMonthDisabled(r) {
            return !this.isDateInRange(r[0], !1, !0)
        }
        isDayInCurrentMonth(r) {
            return r[1] === this.viewDate.jYear() && r[2] === this.viewDate.jMonth()
        }
        isDayOfTodayDate(r) {
            return r[1] === this.today.jYear() && r[2] === this.today.jMonth() && r[3] === this.today.jDate()
        }
        isDayOfSelectedDate(r) {
            return this.selectedDate ? r[1] === this.selectedDate.jYear() && r[2] === this.selectedDate.jMonth() && r[3] === this.selectedDate.jDate() : !1
        }
        isDayDisabled(r) {
            return !this.isDateInRange(r[0], !1, !1)
        }
        isDateInRange(r, i, o) {
            let s = [];
            if (this.dateMin()) {
                let a = (0,
                Je.default)(this.dateMin());
                i && a.startOf("jYear"),
                o && a.startOf("jMonth"),
                s.push(a.valueOf() <= r)
            }
            if (this.dateMax()) {
                let a = (0,
                Je.default)(this.dateMax());
                i && a.startOf("jYear"),
                o && a.startOf("jMonth"),
                s.push(a.valueOf() >= r)
            }
            return s.indexOf(!1) === -1
        }
        changeSelectedDate(r) {
            this.selectedDate = (0,
            Je.default)(r),
            this.onChangeSelectedDate()
        }
        onChangeSelectedDate() {
            this.timeEnable() ? (this.selectedDate.hour(this.hour),
            this.selectedDate.minute(this.minute),
            this.selectedDate.second(this.second)) : (this.setToday(),
            this.selectedDate.hour(this.today.hour()),
            this.selectedDate.minute(this.today.minute()),
            this.selectedDate.second(this.today.second())),
            this._dateValue = this.selectedDate.valueOf(),
            this.setInputValue(),
            this.uiHideAfterSelectDate() && !this.preventClose ? (this.uiIsVisible.set(!1),
            this.cdr.markForCheck()) : this.preventClose = !1,
            this.setViewDate(),
            this.dateOnSelect()(String(this.selectedDate.format(this.dateFormat())), String(this.selectedDate.format(this.dateGregorianFormat())), Number(this.selectedDate.valueOf()))
        }
        increaseHour() {
            this.hour + 1 === 24 ? this.hour = 0 : this.hour++,
            this.onTimeChange()
        }
        decreaseHour() {
            this.hour - 1 === -1 ? this.hour = 23 : this.hour--,
            this.onTimeChange()
        }
        increaseMinute() {
            this.minute + 1 === 60 ? this.minute = 0 : this.minute++,
            this.onTimeChange()
        }
        decreaseMinute() {
            this.minute - 1 === -1 ? this.minute = 59 : this.minute--,
            this.onTimeChange()
        }
        increaseSecond() {
            this.second + 1 === 60 ? this.second = 0 : this.second++,
            this.onTimeChange()
        }
        decreaseSecond() {
            this.second - 1 === -1 ? this.second = 59 : this.second--,
            this.onTimeChange()
        }
        toggleAmPm() {
            this.hour < 12 ? this.hour += 12 : this.hour -= 12,
            this.onTimeChange()
        }
        onTimeChange() {
            this.preventClose = !0,
            this.seTimeText(),
            this.changeSelectedDate(this.selectedDate)
        }
        setIncreaseHourInterval() {
            this.increaseHourTimeout = setTimeout( () => {
                this.increaseHourInterval = setInterval( () => {
                    this.increaseHour()
                }
                , this.fastTimeChangeInterval)
            }
            , this.fastTimeChangeTimeOut)
        }
        clearIncreaseHourInterval() {
            clearTimeout(this.increaseHourTimeout),
            clearInterval(this.increaseHourInterval)
        }
        setDecreaseHourInterval() {
            this.decreaseHourTimeout = setTimeout( () => {
                this.decreaseHourInterval = setInterval( () => {
                    this.decreaseHour()
                }
                , this.fastTimeChangeInterval)
            }
            , this.fastTimeChangeTimeOut)
        }
        clearDecreaseHourInterval() {
            clearTimeout(this.decreaseHourTimeout),
            clearInterval(this.decreaseHourInterval)
        }
        setIncreaseMinuteInterval() {
            this.increaseMinuteTimeout = setTimeout( () => {
                this.increaseMinuteInterval = setInterval( () => {
                    this.increaseMinute()
                }
                , this.fastTimeChangeInterval)
            }
            , this.fastTimeChangeTimeOut)
        }
        clearIncreaseMinuteInterval() {
            clearTimeout(this.increaseMinuteTimeout),
            clearInterval(this.increaseMinuteInterval)
        }
        setDecreaseMinuteInterval() {
            this.decreaseMinuteTimeout = setTimeout( () => {
                this.decreaseMinuteInterval = setInterval( () => {
                    this.decreaseMinute()
                }
                , this.fastTimeChangeInterval)
            }
            , this.fastTimeChangeTimeOut)
        }
        clearDecreaseMinuteInterval() {
            clearTimeout(this.decreaseMinuteTimeout),
            clearInterval(this.decreaseMinuteInterval)
        }
        setIncreaseSecondInterval() {
            this.increaseSecondTimeout = setTimeout( () => {
                this.increaseSecondInterval = setInterval( () => {
                    this.increaseSecond()
                }
                , this.fastTimeChangeInterval)
            }
            , this.fastTimeChangeTimeOut)
        }
        clearIncreaseSecondInterval() {
            clearTimeout(this.increaseSecondTimeout),
            clearInterval(this.increaseSecondInterval)
        }
        setDecreaseSecondInterval() {
            this.decreaseSecondTimeout = setTimeout( () => {
                this.decreaseSecondInterval = setInterval( () => {
                    this.decreaseSecond()
                }
                , this.fastTimeChangeInterval)
            }
            , this.fastTimeChangeTimeOut)
        }
        clearDecreaseSecondInterval() {
            clearTimeout(this.decreaseSecondTimeout),
            clearInterval(this.decreaseSecondInterval)
        }
        setContainerInlineStyle() {
            if (!this.uiAutoPosition())
                return;
            let r = {
                width: "200px"
            }
              , i = {};
            if (this._input) {
                let {top: o, bottom: s, height: a, x: l} = this._input.getBoundingClientRect()
                  , c = o
                  , f = window.innerHeight - s;
                c > f ? i = {
                    position: "fixed",
                    bottom: f + a + "px",
                    left: l + "px"
                } : i = {
                    position: "fixed",
                    top: c + "px",
                    left: l + "px"
                }
            }
            this.uiContainerWidth() && (r.width = this.uiContainerWidth()),
            this.containerInlineStyle.set(Object.assign(r, i))
        }
        calcInputPositionAndSize() {
            if (!this._input)
                return;
            this.inputPosition = [0, 0];
            let r = this._input;
            for (; r; )
                this.inputPosition[0] += r.offsetTop || 0,
                this.inputPosition[1] += r.offsetLeft || 0,
                r = r.offsetParent;
            this.inputSize = [0, 0],
            this.inputSize[0] = this._input.getBoundingClientRect().width,
            this.inputSize[1] = this._input.getBoundingClientRect().height,
            this.setContainerInlineStyle(),
            this.cdr.markForCheck()
        }
        onInsideClick() {
            this.wasInsideClick = !0,
            this.cdr.markForCheck()
        }
        onOutsideClick(r) {
            let i = this.wasInsideClick;
            this.wasInsideClick = !1,
            !i && (!this.uiHideOnOutsideClick() || this._input && r.target.getAttribute("data-datepicker-id") === this.id() || (this.uiIsVisible.set(!1),
            this.cdr.markForCheck()))
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(O(ro))
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["persian-datepicker"]],
        hostBindings: function(i, o) {
            i & 1 && re("resize", function() {
                return o.calcInputPositionAndSize()
            }, !1, pC)("click", function() {
                return o.onInsideClick()
            })("click", function(a) {
                return o.onOutsideClick(a)
            }, !1, sr)
        },
        inputs: {
            input: [1, "input"],
            dateValue: [1, "dateValue"],
            dateInitValue: [1, "dateInitValue"],
            dateIsGregorian: [1, "dateIsGregorian"],
            dateFormat: [1, "dateFormat"],
            dateGregorianFormat: [1, "dateGregorianFormat"],
            dateMin: [1, "dateMin"],
            dateMax: [1, "dateMax"],
            dateOnInit: [1, "dateOnInit"],
            dateOnSelect: [1, "dateOnSelect"],
            timeEnable: [1, "timeEnable"],
            timeShowSecond: [1, "timeShowSecond"],
            timeMeridian: [1, "timeMeridian"],
            uiTheme: [1, "uiTheme"],
            uiIsVisible: [1, "uiIsVisible"],
            uiHideOnOutsideClick: [1, "uiHideOnOutsideClick"],
            uiHideAfterSelectDate: [1, "uiHideAfterSelectDate"],
            uiAutoPosition: [1, "uiAutoPosition"],
            uiPositionOffset: [1, "uiPositionOffset"],
            uiContainerWidth: [1, "uiContainerWidth"],
            uiYearView: [1, "uiYearView"],
            uiMonthView: [1, "uiMonthView"],
            uiInitViewMode: [1, "uiInitViewMode"],
            uiTodayBtnEnable: [1, "uiTodayBtnEnable"]
        },
        outputs: {
            uiIsVisible: "uiIsVisibleChange"
        },
        decls: 20,
        vars: 22,
        consts: [[1, "datepicker-outer-container", "rounded", "shadow", "overflow-hidden", "p-3", 2, "z-index", "10", 3, "ngStyle"], [1, "datepicker-inner-container"], [1, "content-container", "navigation-container", "d-flex"], [1, "go-back", "dp-btn", 3, "click"], [1, "d-block", "h-100", "w-100"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 240.823 240.823", 0, "xml", "space", "preserve"], ["d", `M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
            l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
            C187.881,124.315,187.881,116.495,183.189,111.816z`], [1, "switch-view", "dp-btn", 3, "click"], [1, "d-block", "h-100", "w-100", "d-flex", "align-items-center", "justify-content-center"], [1, "go-forward", "dp-btn", 3, "click"], ["d", `M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179
              l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816
              C52.942,116.507,52.942,124.327,57.633,129.007z`], [1, "years-container"], [1, "months-container"], [1, "days-container"], [1, "content-container", "time-container", 3, "include-second", "include-12-hour"], [1, "the-toolbox", "text-center"], [1, "the-item", "dp-btn", "w-100"], [1, "content-container"], [1, "year-col", "three-col-per-row", "dp-btn", 3, "today", "selected", "disabled"], [1, "year-col", "three-col-per-row", "dp-btn", 3, "click"], [1, "month-col", "three-col-per-row", "dp-btn", 3, "today", "selected", "disabled"], [1, "month-col", "three-col-per-row", "dp-btn", 3, "click"], [1, "content-container", "week-days"], [1, "day-col"], [1, "content-container", "month-days"], [1, "day-col", "dp-btn", 3, "other-month", "today", "selected", "disabled"], [1, "day-col", "dp-btn", 3, "click"], [1, "content-container", "time-container"], [1, "time-col", "hour-col", "the-divider"], [3, "click", "mousedown", "mouseup", "touchstart", "touchend", "touchcancel"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 255 255", 0, "xml", "space", "preserve"], ["points", "0,191.25 127.5,63.75 255,191.25"], ["points", "0,63.75 127.5,191.25 255,63.75"], [1, "time-col", "minute-col"], [1, "time-col", "second-col"], [1, "time-col", "time-in-12-hour-format-col"], [3, "click"], [1, "the-item", "dp-btn", "w-100", 3, "click"], [1, "d-block", "w-100", "h-100"]],
        template: function(i, o) {
            i & 1 && (B(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3),
            re("click", function() {
                return o.navigate(!1)
            }),
            B(4, "span", 4),
            or(),
            B(5, "svg", 5),
            Ue(6, "path", 6),
            ne()()(),
            Ki(),
            B(7, "div", 7),
            re("click", function() {
                return o.nextViewMode()
            }),
            B(8, "span", 8),
            Ke(9),
            ne()(),
            B(10, "div", 9),
            re("click", function() {
                return o.navigate(!0)
            }),
            B(11, "span", 4),
            or(),
            B(12, "svg", 5),
            Ue(13, "path", 10),
            ne()()()(),
            Ot(14, p6, 4, 0, "div", 11)(15, g6, 4, 0, "div", 12)(16, w6, 7, 0, "div", 13)(17, C6, 23, 10, "div", 14),
            Ki(),
            B(18, "div", 15),
            Ot(19, M6, 3, 0, "div", 16),
            ne()()()),
            i & 2 && (ur("theme-default", o.uiTheme() === "default")("theme-blue", o.uiTheme() === "blue")("theme-gray", o.uiTheme() === "gray")("theme-dark", o.uiTheme() === "dark")("theme-black", o.uiTheme() === "black")("manual-position", !o.uiAutoPosition())("hide", !o.uiIsVisible()),
            He("ngStyle", o.containerInlineStyle()),
            Jo("data-datepicker-id", o.id()),
            se(9),
            Rt(o.viewDateTitle()),
            se(5),
            mt(o.viewModes()[o.currentViewMode()] === "year" ? 14 : -1),
            se(),
            mt(o.viewModes()[o.currentViewMode()] === "month" ? 15 : -1),
            se(),
            mt(o.viewModes()[o.currentViewMode()] === "day" ? 16 : -1),
            se(),
            mt(o.timeEnable() ? 17 : -1),
            se(2),
            mt(o.uiTodayBtnEnable() ? 19 : -1))
        },
        dependencies: [Lf, XT],
        styles: [`.datepicker-outer-container.theme-default[_ngcontent-%COMP%]{background:#fff;color:#333;box-shadow:0 5px 10px #0003;border:1px solid #cccccc}.datepicker-outer-container.theme-default[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-forward[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .datepicker-outer-container.theme-default[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#333}.datepicker-outer-container.theme-default[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{background:#007be6!important;color:#fff!important}.datepicker-outer-container.theme-default[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff!important}.datepicker-outer-container.theme-default[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.today[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#333;color:#fff}.datepicker-outer-container.theme-default[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.selected[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#005299;color:#fff}.datepicker-outer-container.theme-default[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#f1f1f1!important;color:#ccc!important;cursor:not-allowed!important}.datepicker-outer-container.theme-default[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.other-month[_ngcontent-%COMP%]{color:#ccc}.datepicker-outer-container.theme-default[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]{background:#f9f9f9;border-top-color:#f1f1f1}.datepicker-outer-container.theme-default[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ccc}.datepicker-outer-container.theme-default[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#807f7f}.datepicker-outer-container.theme-blue[_ngcontent-%COMP%]{background:#1a3347;color:#fff;box-shadow:0 5px 10px #0003}.datepicker-outer-container.theme-blue[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-forward[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .datepicker-outer-container.theme-blue[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.datepicker-outer-container.theme-blue[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{background:#0095c6!important;color:#fff!important}.datepicker-outer-container.theme-blue[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff!important}.datepicker-outer-container.theme-blue[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.today[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#fff;color:#1a3347}.datepicker-outer-container.theme-blue[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.selected[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#0085b2;color:#fff}.datepicker-outer-container.theme-blue[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#204b6e!important;color:#00aae2!important;cursor:not-allowed!important}.datepicker-outer-container.theme-blue[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.other-month[_ngcontent-%COMP%]{color:#00aae2}.datepicker-outer-container.theme-blue[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]{background:#204b6e;border-top-color:#204b6e}.datepicker-outer-container.theme-blue[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ccc}.datepicker-outer-container.theme-blue[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#807f7f}.datepicker-outer-container.theme-gray[_ngcontent-%COMP%]{background:#556270;color:#fff;box-shadow:0 5px 10px #0003}.datepicker-outer-container.theme-gray[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-forward[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .datepicker-outer-container.theme-gray[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.datepicker-outer-container.theme-gray[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{background:#393939!important;color:#fff!important}.datepicker-outer-container.theme-gray[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff!important}.datepicker-outer-container.theme-gray[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.today[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#fff;color:#556270}.datepicker-outer-container.theme-gray[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.selected[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#c44d58;color:#fff}.datepicker-outer-container.theme-gray[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#393939!important;color:#ccc!important;cursor:not-allowed!important}.datepicker-outer-container.theme-gray[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.other-month[_ngcontent-%COMP%]{color:#ccc}.datepicker-outer-container.theme-gray[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]{background:#444;border-top-color:#393939}.datepicker-outer-container.theme-gray[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ccc}.datepicker-outer-container.theme-gray[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#807f7f}.datepicker-outer-container.theme-dark[_ngcontent-%COMP%]{background:#2d2d30;color:#fff;box-shadow:0 5px 10px #0003}.datepicker-outer-container.theme-dark[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-forward[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .datepicker-outer-container.theme-dark[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.datepicker-outer-container.theme-dark[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{background:#393939!important;color:#fff!important}.datepicker-outer-container.theme-dark[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff!important}.datepicker-outer-container.theme-dark[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.today[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#fff;color:#2d2d2d}.datepicker-outer-container.theme-dark[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.selected[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#d68e3a;color:#fff}.datepicker-outer-container.theme-dark[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#393939!important;color:#ccc!important;cursor:not-allowed!important}.datepicker-outer-container.theme-dark[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.other-month[_ngcontent-%COMP%]{color:#ccc}.datepicker-outer-container.theme-dark[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]{background:#393939;border-top-color:#393939}.datepicker-outer-container.theme-dark[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ccc}.datepicker-outer-container.theme-dark[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#807f7f}.datepicker-outer-container.theme-black[_ngcontent-%COMP%]{background:#222;color:#fff;box-shadow:0 5px 10px #0003}.datepicker-outer-container.theme-black[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-forward[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .datepicker-outer-container.theme-black[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.datepicker-outer-container.theme-black[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{background:#393939!important;color:#fff!important}.datepicker-outer-container.theme-black[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff!important}.datepicker-outer-container.theme-black[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.today[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#fff;color:#222}.datepicker-outer-container.theme-black[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.selected[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#f26161;color:#fff}.datepicker-outer-container.theme-black[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background:#393939!important;color:#ccc!important;cursor:not-allowed!important}.datepicker-outer-container.theme-black[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .dp-btn.other-month[_ngcontent-%COMP%]{color:#ccc}.datepicker-outer-container.theme-black[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]{background:#444;border-top-color:#393939}.datepicker-outer-container.theme-black[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#ccc}.datepicker-outer-container.theme-black[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#807f7f}.datepicker-outer-container[_ngcontent-%COMP%]{direction:rtl;display:inline-block;vertical-align:top;min-width:200px;max-width:300px;font-size:12px;padding:8px 3px;-webkit-user-select:none;user-select:none;text-align:center}.datepicker-outer-container.hide[_ngcontent-%COMP%]{display:none}.datepicker-outer-container.manual-position[_ngcontent-%COMP%]{width:100%}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{margin-bottom:8px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-forward[_ngcontent-%COMP%], .datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .switch-view[_ngcontent-%COMP%], .datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;height:24px;cursor:pointer}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-forward[_ngcontent-%COMP%], .datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]{width:15%;position:relative}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-forward[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .go-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:12px;height:12px;position:absolute;top:calc(50% - 6px);right:calc(50% - 6px)}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .switch-view[_ngcontent-%COMP%]{width:66%;margin:0 2%;font-weight:700}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .navigation-container[_ngcontent-%COMP%]   .switch-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:sub}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .days-container[_ngcontent-%COMP%]   .day-col[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:14.2857142857%}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .days-container[_ngcontent-%COMP%]   .day-col[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;padding:3px 0;margin:2px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .days-container[_ngcontent-%COMP%]   .week-days[_ngcontent-%COMP%]   .day-col[_ngcontent-%COMP%]{font-weight:700}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .days-container[_ngcontent-%COMP%]   .month-days[_ngcontent-%COMP%]   .day-col[_ngcontent-%COMP%]{cursor:pointer}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .three-col-per-row[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:33.3333333333%;margin:1px 0;cursor:pointer}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .three-col-per-row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;padding:9px 0;margin:2px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]{padding:5px;border-top-width:1px;border-top-style:solid;direction:ltr}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;width:50%;position:relative;cursor:pointer}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transition:all .1s ease}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:12px;height:12px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container[_ngcontent-%COMP%]   .time-col.the-divider[_ngcontent-%COMP%]:after{content:":";position:absolute;top:33%;right:0}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container.include-second[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]{width:33.3333333333%}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container.include-second.include-12-hour[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]{width:25%}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .time-container.include-12-hour[_ngcontent-%COMP%]   .time-col[_ngcontent-%COMP%]{width:33.3333333333%}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .the-toolbox[_ngcontent-%COMP%]{text-align:right}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .the-toolbox[_ngcontent-%COMP%]   .the-item[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;min-width:50px;cursor:pointer;font-weight:700;margin-left:5px;text-align:center}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .the-toolbox[_ngcontent-%COMP%]   .the-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{padding:3px 5px}.datepicker-outer-container[_ngcontent-%COMP%]   .datepicker-inner-container[_ngcontent-%COMP%]   .the-toolbox[_ngcontent-%COMP%]   .the-item[_ngcontent-%COMP%]:last-child{margin-left:0}.dp-btn[_ngcontent-%COMP%], .dp-btn[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{border-radius:.25rem}
/*# sourceMappingURL=ng-persian-datepicker.component-XHTPTJAH.css.map */`],
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var Z_e = ( () => {
    let t = class t {
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275prov = me({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
var b6 = ["input"];
function I6(e, t) {
    if (e & 1) {
        let n = rn();
        B(0, "svg-icon", 8),
        re("click", function() {
            fe(n);
            let i = q(2);
            return he(i.clearFromDate())
        }),
        ne()
    }
    if (e & 2) {
        let n = q(2);
        He("iconName", n.icons.Close)
    }
}
function E6(e, t) {
    if (e & 1 && (B(0, "div", 1)(1, "div", 2),
    Ue(2, "input", 3, 0),
    Ot(4, I6, 1, 1, "svg-icon", 4),
    ne(),
    B(5, "div", 5)(6, "div", 6),
    Ue(7, "persian-datepicker", 7),
    ne()()()),
    e & 2) {
        let n = Ry(3)
          , r = q();
        se(2),
        He("readOnly", r.readOnly()),
        se(2),
        mt(!r.required() && (n != null && n.value) ? 4 : -1),
        se(3),
        lr(r.datePickerClass()),
        He("dateInitValue", r.defaultValue())("dateValue", r.dateValue())("timeEnable", !1)("input", n)
    }
}
function S6(e, t) {
    if (e & 1) {
        let n = rn();
        B(0, "svg-icon", 13),
        re("click", function() {
            fe(n);
            let i = q(2);
            return he(i.clearFromDate())
        }),
        ne()
    }
    if (e & 2) {
        let n = q(2);
        He("iconName", n.icons.Close)
    }
}
function T6(e, t) {
    if (e & 1 && (B(0, "div")(1, "div", 9),
    Ue(2, "input", 10, 0),
    Ot(4, S6, 1, 1, "svg-icon", 11),
    ne(),
    Ue(5, "persian-datepicker", 12),
    ne()),
    e & 2) {
        let n = Ry(3)
          , r = q();
        se(4),
        mt(!r.required() && n.value ? 4 : -1),
        se(),
        lr(r.datePickerClass()),
        He("timeEnable", !1)("input", n)("dateInitValue", r.defaultValue())("dateValue", r.dateValue())("uiAutoPosition", !0)("uiContainerWidth", "300")
    }
}
var rwe = ( () => {
    let t = class t {
        constructor() {
            this.icons = mi,
            this.input = la("input"),
            this.defaultValue = F(!1),
            this.dateValue = mf(),
            this.isMobile = F(),
            this.required = F(!0),
            this.datePickerClass = F(""),
            this.readOnly = F()
        }
        clearFromDate() {
            this.input().nativeElement.value = ""
        }
        getValue() {
            return this.input()?.nativeElement?.value
        }
        setValue(r) {
            this.input().nativeElement.value = r
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = Ge({
        type: t,
        selectors: [["custom-date-picker"]],
        viewQuery: function(i, o) {
            i & 1 && da(o.input, b6, 5),
            i & 2 && fa()
        },
        inputs: {
            defaultValue: [1, "defaultValue"],
            dateValue: [1, "dateValue"],
            isMobile: [1, "isMobile"],
            required: [1, "required"],
            datePickerClass: [1, "datePickerClass"],
            readOnly: [1, "readOnly"]
        },
        outputs: {
            dateValue: "dateValueChange"
        },
        decls: 2,
        vars: 2,
        consts: [["input", ""], [1, "h-100"], [1, "h-100", "position-relative"], ["autocomplete", "off", "type", "text", "placeholder", "\u062A\u0627\u0631\u06CC\u062E", 1, "form-control", "h-100", 3, "readOnly"], ["width", "18", "height", "18", 1, "position-absolute", "cup", "text-muted", 2, "left", "4px", "top", "62%", "margin-top", "-14px", 3, "iconName"], [1, "datepicker-overlay"], [1, "datepicker-container"], [3, "dateInitValue", "dateValue", "timeEnable", "input"], ["width", "18", "height", "18", 1, "position-absolute", "cup", "text-muted", 2, "left", "4px", "top", "62%", "margin-top", "-14px", 3, "click", "iconName"], [1, "position-relative"], ["id", "datepicker", "autocomplete", "off", "type", "text", "placeholder", "\u062A\u0627\u0631\u06CC\u062E", "readonly", "", 1, "form-control"], ["width", "20", "height", "20", 1, "position-absolute", "cup", "p-1", "text-muted", 2, "left", "4px", "top", "50%", "margin-top", "-14px", 3, "iconName"], [3, "timeEnable", "input", "dateInitValue", "dateValue", "uiAutoPosition", "uiContainerWidth"], ["width", "20", "height", "20", 1, "position-absolute", "cup", "p-1", "text-muted", 2, "left", "4px", "top", "50%", "margin-top", "-14px", 3, "click", "iconName"]],
        template: function(i, o) {
            i & 1 && Ot(0, E6, 8, 8, "div", 1)(1, T6, 6, 9, "div"),
            i & 2 && (mt(o.isMobile() ? -1 : 0),
            se(),
            mt(o.isMobile() ? 1 : -1))
        },
        dependencies: [JT, lo],
        styles: [`custom-date-picker.is-invalid.form-control[_ngcontent-%COMP%]{background-color:#f5f5f9;padding-right:calc(1.5em + .75rem)!important;background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}
/*# sourceMappingURL=custom-date-picker.component-PD5LRY6S.css.map */`],
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
export {Te as a, We as b, uc as c, $A as d, Tp as e, k6 as f, kp as g, N6 as h, Io as i, O6 as j, ct as k, Wp as l, pe as m, qp as n, ou as o, st as p, Ni as q, ko as r, aP as s, uP as t, lP as u, Tn as v, $7 as w, lu as x, Ft as y, Yn as z, Jp as A, yP as B, er as C, vP as D, _P as E, wP as F, xP as G, ft as H, em as I, Wn as J, Sr as K, Pi as L, NP as M, nm as N, rm as O, un as P, VP as Q, jP as R, BP as S, Tr as T, UP as U, YP as V, WP as W, zP as X, GP as Y, cu as Z, qP as _, ww as $, Bc as aa, QP as ba, xw as ca, du as da, Ri as ea, om as fa, sm as ga, Cw as ha, XP as ia, Uc as ja, KP as ka, Mw as la, um as ma, fu as na, bw as oa, tF as pa, lm as qa, nF as ra, rF as sa, Ew as ta, Tw as ua, iF as va, oF as wa, sF as xa, cm as ya, aF as za, kw as Aa, fm as Ba, Nw as Ca, Ow as Da, Aw as Ea, Pw as Fa, Li as Ga, Yc as Ha, kr as Ia, uF as Ja, lF as Ka, Rw as La, ce as Ma, ji as Na, Ct as Oa, me as Pa, qi as Qa, jee as Ra, ue as Sa, ke as Ta, ze as Ua, Y as Va, Bee as Wa, qD as Xa, ZD as Ya, Gg as Za, FF as _a, rx as $a, ir as ab, $d as bb, nn as cb, fe as db, he as eb, or as fb, Ki as gb, An as hb, OR as ib, Cn as jb, Pn as kb, ci as lb, dt as mb, Nt as nb, Yi as ob, Au as pb, F as qb, Ne as rb, Hee as sb, Uee as tb, ZR as ub, ef as vb, $ee as wb, Yee as xb, r2 as yb, i2 as zb, Cu as Ab, Wee as Bb, V2 as Cb, zee as Db, Mu as Eb, se as Fb, O as Gb, Gee as Hb, ai as Ib, Sd as Jb, yt as Kb, ar as Lb, Fe as Mb, la as Nb, Xee as Ob, Jee as Pb, Kee as Qb, mf as Rb, pg as Sb, dM as Tb, Ge as Ub, eo as Vb, ee as Wb, Re as Xb, pt as Yb, ZV as Zb, Ot as _b, ete as $b, tte as ac, hj as bc, pj as cc, nte as dc, mj as ec, ca as fc, yj as gc, _M as hc, zo as ic, rte as jc, ite as kc, ote as lc, Jo as mc, He as nc, SM as oc, ur as pc, Lj as qc, lr as rc, ste as sc, ate as tc, mt as uc, Vr as vc, ute as wc, jr as xc, Br as yc, B as zc, ne as Ac, Ue as Bc, FM as Cc, RM as Dc, Kj as Ec, rn as Fc, tB as Gc, re as Hc, q as Ic, to as Jc, cr as Kc, dr as Lc, VM as Mc, dB as Nc, lte as Oc, cte as Pc, dte as Qc, fte as Rc, hte as Sc, da as Tc, fa as Uc, Ry as Vc, Ke as Wc, Rt as Xc, no as Yc, hB as Zc, pB as _c, mB as $c, pte as ad, gB as bd, vB as cd, Lt as dd, mte as ed, gte as fd, yte as gd, vf as hd, vte as id, _te as jd, wte as kd, wf as ld, WM as md, zM as nd, Dte as od, xte as pd, Cte as qd, Mte as rd, bte as sd, Ite as td, ro as ud, Vy as vd, Ete as wd, Ste as xd, xf as yd, jB as zd, io as Ad, hn as Bd, pn as Cd, Tte as Dd, kte as Ed, pa as Fd, Xte as Gd, JM as Hd, Lu as Id, Jte as Jd, Ff as Kd, QB as Ld, Kte as Md, XB as Nd, mb as Od, Rf as Pd, ene as Qd, tne as Rd, gb as Sd, nne as Td, rne as Ud, Lf as Vd, ine as Wd, one as Xd, sne as Yd, ane as Zd, yb as _d, une as $d, oo as ae, R3 as be, V3 as ce, j3 as de, lne as ee, Pf as fe, gi as ge, ao as he, so as ie, sv as je, eH as ke, Pne as le, Fne as me, mi as ne, ev as oe, Ko as pe, Vu as qe, lo as re, nre as se, lre as te, yH as ue, Jf as ve, Fb as we, i1 as xe, Ere as ye, jH as ze, qu as Ae, wv as Be, Tre as Ce, YH as De, GH as Ee, Dv as Fe, QH as Ge, c1 as He, d1 as Ie, f1 as Je, tU as Ke, m1 as Le, kre as Me, Nre as Ne, aU as Oe, lU as Pe, dU as Qe, Ore as Re, _1 as Se, Are as Te, jre as Ue, rs as Ve, x1 as We, M1 as Xe, b1 as Ye, I1 as Ze, Da as _e, kU as $e, NU as af, OU as bf, wt as cf, qn as df, O$ as ef, L$ as ff, mo as gf, wi as hf, xh as if, $4 as jf, J4 as kf, K4 as lf, e8 as mf, t8 as nf, Nh as of, Ah as pf, c8 as qf, p8 as rf, g8 as sf, _8 as tf, w8 as uf, Lh as vf, D8 as wf, Ci as xf, h0 as yf, p0 as zf, m0 as Af, oT as Bf, lT as Cf, r5 as Df, zh as Ef, ws as Ff, Ds as Gf, c5 as Hf, d5 as If, p5 as Jf, Rl as Kf, T0 as Lf, w5 as Mf, dye as Nf, _ye as Of, Iye as Pf, Sye as Qf, MT as Rf, bT as Sf, Ii as Tf, Pye as Uf, Fye as Vf, Bt as Wf, Vl as Xf, O0 as Yf, Ll as Zf, k5 as _f, N5 as $f, O5 as ag, jye as bg, eve as cg, rve as dg, Cve as eg, ET as fg, V5 as gg, Ave as hg, Rve as ig, jve as jg, ep as kg, Uve as lg, Yve as mg, A0 as ng, qve as og, Qve as pg, Y5 as qg, W5 as rg, Jve as sg, e0e as tg, np as ug, o0e as vg, a0e as wg, l0e as xg, d0e as yg, E0e as zg, O0e as Ag, P0e as Bg, R0e as Cg, V0e as Dg, Y0e as Eg, Q0e as Fg, n_e as Gg, u_e as Hg, c_e as Ig, m_e as Jg, y_e as Kg, __e as Lg, QT as Mg, JT as Ng, Z_e as Og, rwe as Pg};
//# sourceMappingURL=chunk-K3475DQT.js.map
