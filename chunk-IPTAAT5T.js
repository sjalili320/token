import {k as wn} from "./chunk-N6UAH77V.js";
import {$ as Vn, Q as Mn, Y as Fn, _ as En, b as In, n as An, p as Ga, s as Pn} from "./chunk-VTNMJBW4.js";
import {H as Tn, M as ei, p as kn} from "./chunk-3R47PHPO.js";
import {c as Qe, d as Jt, f as Ci, g as rt, h as ge, j as Kt} from "./chunk-O3BOZ3M4.js";
import {Ac as Xt, B as Ut, Ba as Mt, Bc as Ye, Dc as Xe, Ea as ot, Fb as pn, G as Qi, Hc as vn, K as Pt, L as Ge, Lb as hn, Ob as xe, P as re, Pa as je, Q as ie, Qa as mi, Ra as Qt, Sa as sn, Ta as di, Ua as He, Va as cn, Xa as pi, Ya as zt, Zb as Ee, ac as Cn, ad as St, ca as rn, cb as un, da as ln, dc as Ae, ed as _n, fb as mn, gb as ft, hb as hi, ib as Te, k as Ue, kd as xn, md as qt, rb as Wt, rc as bn, sb as dn, tb as ae, tc as yn, td as Dn, ub as _e, vb as Gt, vc as gn, wd as Zt, xc as fn, xd as Ve, y as Hi, ya as ce, yc as Sn, zc as Yt} from "./chunk-OFJ5SZPL.js";
import {$ as ke, $d as $t, $e as Xi, Aa as Vi, Ac as s, Ad as K, Af as Zi, Ba as Nt, Bc as C, Bd as it, Bf as ci, Cb as pt, Cd as ue, Cg as on, Fa as Oi, Fb as l, Fc as I, Ga as E, Gb as ee, Gf as Ji, H as F, Hc as b, Hf as Ki, Ia as X, Ib as li, Ic as d, Ig as Ht, Jf as ui, Mb as T, Mc as Ui, Mf as en, Nb as Le, Nf as jt, Of as tn, P as Me, Pa as Ce, Pd as Y, Q as Mi, T as L, Tc as $e, Ua as Ni, Ub as O, Uc as We, Uf as ye, Va as $, Vc as oe, Vd as Fe, Ve as si, Wc as u, We as Gi, X as Fi, Xc as N, Yb as Bi, Yc as k, Ye as nt, Z as me, Ze as Re, _b as S, _d as Q, _e as Yi, a as J, aa as It, ae as te, af as Ct, b as De, bf as bt, ca as wt, cf as yt, db as g, dd as Ri, ea as Ot, eb as f, ed as de, ef as qi, fb as tt, fd as D, g as Wa, gb as Li, gd as pe, ha as ct, hb as Ie, hd as At, ig as ve, ja as ut, jd as ht, ka as mt, kb as Lt, kg as nn, l as Et, ld as M, mc as we, md as G, na as et, nc as m, nd as ne, ne as R, oa as Ei, oc as Ne, oe as zi, of as gt, p as Ai, pb as B, pc as $i, pd as be, pe as V, q as Oe, qb as _, qe as A, rc as Be, re as j, sc as Bt, sg as an, ta as fe, te as Wi, ua as dt, uc as y, ud as ji, v as Vt, vc as Se, vf as Rt, xc as z, xf as at, y as Pi, yc as W, z as se, zc as r} from "./chunk-K3475DQT.js";
var On = ( () => {
    let o = class o extends xe {
        constructor() {
            super(...arguments),
            this.trendUrl = `${this.mtsPath + this.apiUrls.easy}CandleChart`
        }
        getTodayCandle(e) {
            let t = `${this.trendUrl}/GetTodayTrend/${e}`;
            return this.httpService.get(t)
        }
        getWeeklyCandle(e) {
            let t = `${this.trendUrl}/GetWeeklyTrend/${e}`;
            return this.httpService.get(t)
        }
        getMonthCandle(e) {
            let t = `${this.trendUrl}/GetMonthTrend/${e}`;
            return this.httpService.get(t)
        }
        get3MonthsCandle(e) {
            let t = `${this.trendUrl}/Get3MonthsTrend/${e}`;
            return this.httpService.get(t)
        }
        getYearCandle(e) {
            let t = `${this.trendUrl}/GetYearTrend/${e}`;
            return this.httpService.get(t)
        }
    }
    ;
    o.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = Ie(o)))(a || o)
        }
    }
    )(),
    o.\u0275prov = Ce({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let i = o;
    return i
}
)();
var Nn = ( () => {
    let o = class o extends xe {
        constructor() {
            super(...arguments),
            this.trendUrl = `${this.mtsPath + this.apiUrls.easy}SymbolChart`,
            this.selectedTrendChangeSub = new Oe(ae.daily),
            this.selectedTrendChange$ = this.selectedTrendChangeSub.asObservable(),
            this.candleChartDataChangeSub = new Ai,
            this.candleChartDataChange$ = this.candleChartDataChangeSub.asObservable()
        }
        getWeeklyTrend(e) {
            let t = `${this.trendUrl}/GetWeeklyTrend/${e}`;
            return this.httpService.get(t)
        }
        getMonthTrend(e) {
            let t = `${this.trendUrl}/GetMonthTrend/${e}`;
            return this.httpService.get(t)
        }
        get3MonthsTrend(e) {
            let t = `${this.trendUrl}/Get3MonthsTrend/${e}`;
            return this.httpService.get(t)
        }
        getYearTrend(e) {
            let t = `${this.trendUrl}/GetYearTrend/${e}`;
            return this.httpService.get(t)
        }
    }
    ;
    o.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = Ie(o)))(a || o)
        }
    }
    )(),
    o.\u0275prov = Ce({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let i = o;
    return i
}
)();
var Ln = [{
    key: ae.daily,
    name: "\u0631\u0648\u0632",
    id: "trend-type-day"
}, {
    key: ae.weekly,
    name: "\u0647\u0641\u062A\u0647",
    id: "trend-type-week"
}, {
    key: ae.monthly,
    name: "\u0645\u0627\u0647",
    id: "trend-type-month"
}, {
    key: ae.tripleMonth,
    name: "3\u0645\u0627\u0647",
    id: "trend-type-3month"
}, {
    key: ae.yearly,
    name: "\u0633\u0627\u0644",
    id: "trend-type-year"
}]
  , Bn = [{
    key: "line",
    name: "\u062E\u0637\u06CC",
    icon: "chart-line",
    id: "chart-type-line"
}, {
    key: "candle",
    name: "\u0634\u0645\u0639\u06CC",
    icon: "candle",
    id: "chart-type-candle"
}];
var Xa = gt("~s")
  , qa = ci("%Y/%m/%d")
  , Za = ci("%H:%M")
  , $n = ( () => {
    let o = class o {
        constructor() {
            this.isMobile = _(!0),
            this.isChartZoomed = B(),
            this.selectedTrendChange = _(),
            this.candleChartDataChange = _(),
            this.candleChartData = [],
            this.selectedTrend = ae.daily,
            this.firstChange = !0,
            this.subs = [],
            this.margin = {
                top: 20,
                right: 20,
                bottom: 30,
                left: 70
            },
            this.isOnresize = !1,
            ue( () => {
                this.isOnresize = !1,
                this.selectedTrend = this.selectedTrendChange()
            }
            ),
            ue( () => {
                this.isOnresize = !1,
                this.candleChartData = this.candleChartDataChange(),
                this.drawChart()
            }
            )
        }
        ngAfterViewInit() {
            this.createResizeObserve()
        }
        drawChart() {
            let e = document.getElementById("candleChart-area");
            e && (this.totalWidth = e.parentElement.clientWidth,
            this.w = this.totalWidth - this.margin.left - this.margin.right,
            this.h = 200 - this.margin.top - this.margin.bottom,
            this.calTicksValue(),
            this.extent = [[0, 0], [this.w, this.h]],
            this.focusLeft = this.isMobile ? 10 : -10,
            this.defaultTextPosition = this.isMobile ? -128 : 92,
            this.firstChange && (this.firstChange = !1,
            this.initialChart()),
            this.draw())
        }
        draw() {
            if (this.hideDefaultText(),
            this.cleanChartBody(),
            !!this.candleChartData) {
                if (!this.candleChartData.length) {
                    this.cleanChart(),
                    this.showDefaultText();
                    return
                }
                this.prepareData(this.candleChartData)
            }
        }
        cleanChart() {
            this.gX && this.gX.selectAll("text").remove(),
            this.gY && this.gY.selectAll("text").remove()
        }
        calTicksValue() {
            this.selectedTrend === ae.daily ? this.ticksValue = this.totalWidth > 450 ? 10 : 5 : this.ticksValue = this.totalWidth > 410 ? 5 : 3
        }
        createZoomable() {
            this.zoom = en().scaleExtent([1, 100]).translateExtent(this.extent).extent(this.extent).on("zoom", this.zoomed.bind(this)).on("zoom.end", this.zoomEnd.bind(this)),
            this.svg.call(this.zoom)
        }
        zoomed(e) {
            if (!this.candleChartData.length)
                return;
            this.isChartZoomed.emit(!0);
            let t = e.transform
              , a = t.rescaleX(this.xScale)
              , c = function() {
                qi(".xAxis .tick text").each(function(p, h) {
                    h.innerHTML === "" && (h.parentNode.style.display = "none")
                })
            };
            this.gX.call(Ct(a).ticks(this.ticksValue).tickFormat(this.getTickFormat.bind(this))).call(p => {
                p.selectAll(".tick text").attr("x", "0")
            }
            ).call(this.tickLine.bind(this)),
            this.rectCandle.attr("x", (p, h) => a(h) - this.xBand.bandwidth() * t.k / 2).attr("width", this.xBand.bandwidth() * t.k),
            this.lineCandle.attr("x", (p, h) => a(h) - this.xBand.bandwidth() / 2 + this.xBand.bandwidth() * .5).attr("width", .2),
            c()
        }
        zoomEnd(e) {
            if (!this.candleChartData.length)
                return;
            let a = e.transform.rescaleX(this.xScale);
            clearTimeout(this.resizeTimer),
            this.resizeTimer = setTimeout( () => {
                let c = new Date(this.xDateScale(Math.floor(a.domain()[0])))
                  , p = new Date(this.xDateScale(Math.floor(a.domain()[1])))
                  , h = this.prices.filter(P => P.Date >= c && P.Date <= p)
                  , x = +Re(h, P => P.Low)
                  , U = +nt(h, P => P.High)
                  , H = Math.floor((U - x) * .1);
                this.yScale.domain([x - H, U + H]),
                this.rectCandle.transition().duration(800).attr("y", P => this.yScale(Math.max(P.Open, P.Close))).attr("height", P => P.Open === P.Close ? 1 : this.yScale(Math.min(P.Open, P.Close)) - this.yScale(Math.max(P.Open, P.Close))),
                this.lineCandle.transition().duration(800).attr("y", P => this.yScale(P.High)).attr("height", P => P.High === P.Low ? 1 : this.yScale(Math.min(P.High, P.Low)) - this.yScale(Math.max(P.High, P.Low))),
                this.gY.transition().duration(800).call(bt(this.yScale).ticks(5).tickFormat(this.formatAbbreviation.bind(this))).call(this.tickText.bind(this)).call(this.tickLine.bind(this))
            }
            , 500)
        }
        createRectCandle() {
            this.rectCandle = this.chartBody.selectAll(".rectCandle").data(this.prices).enter().append("rect").attr("x", (e, t) => this.xScale(t) - this.xBand.bandwidth()).attr("class", "candle").attr("y", e => this.yScale(Math.max(e.Open, e.Close))).attr("width", this.xBand.bandwidth()).attr("height", e => e.Open === e.Close ? 1 : this.yScale(Math.min(e.Open, e.Close)) - this.yScale(Math.max(e.Open, e.Close))).attr("fill", this.getFillColor.bind(this)).attr("stroke", this.getColor.bind(this)).attr("stroke-width", "1").on("mouseover", this.mouseover.bind(this)).on("mouseout", this.mouseout.bind(this)).on("mousemove", this.mousemove.bind(this))
        }
        mouseover() {
            this.tooltipDiv.style("opacity", 1)
        }
        mouseout() {
            this.tooltipDiv.style("opacity", 0)
        }
        mousemove(e) {
            let t = e.currentTarget.__data__
              , a = this.selectedTrend === ae.daily ? "Time: " + t.OriginDate : "Date: " + t.OriginDate;
            ["Open", "Close", "High", "Low"].forEach(function(c) {
                a += "<br>" + c + ": " + t[c].toString().withSeparator()
            }),
            this.tooltipDiv.style("left", e.pageX - 45 + "px").style("border-color", e.currentTarget.attributes.stroke.value).style("top", e.pageY - 120 + "px").html(a.trim())
        }
        createLineCandle() {
            this.lineCandle = this.chartBody.selectAll(".lineCandle").data(this.prices).enter().append("rect").attr("x", (e, t) => this.xScale(t) - this.xBand.bandwidth() / 2).attr("class", "candle").attr("y", e => this.yScale(e.High)).attr("width", .2).attr("height", e => this.yScale(Math.min(e.High, e.Low)) - this.yScale(Math.max(e.High, e.Low))).attr("fill", this.getFillColor.bind(this)).attr("stroke", this.getColor.bind(this)).attr("stroke-width", "1").on("mouseover", this.mouseover.bind(this)).on("mouseout", this.mouseout.bind(this)).on("mousemove", this.mousemove.bind(this))
        }
        formatAbbreviation(e) {
            if (Number.parseFloat(this.yMax) - Number.parseFloat(this.yMin) <= 100)
                return e.toString().withSeparator();
            let a = Xa(e);
            switch (a[a.length - 1]) {
            case "k":
                return a.slice(0, -1) + "K";
            case "m":
                return a.slice(0, -1) + "M";
            case "g":
            case "G":
                return a.slice(0, -1) + "B";
            default:
                return a
            }
        }
        tickText(e) {
            e.selectAll(".tick text").attr("x", -40)
        }
        tickLine(e) {
            e.selectAll(".tick line").attr("stroke-width", "0px")
        }
        getColor(e) {
            return e.Open > e.Close ? "#d63939" : "#319b64"
        }
        getFillColor(e) {
            return e.Open > e.Close ? "#d63939" : "#319b64"
        }
        getTickFormat(e) {
            if (e === void 0 || e < 0 || e > this.dates.length - 1 || (e = this.dates[e],
            !e))
                return "";
            if (this.selectedTrend === ae.daily)
                return e.getHours().toString().padStart(2, "0") + ":" + e.getMinutes().toString().padStart(2, "0");
            {
                let t = e.toLocaleDateString("en-US").split("/");
                return ce.getFormattedJDate(new Date(t[2],t[0],t[1]))
            }
        }
        showDefaultText() {
            this.defaultText.text("\u062F\u0627\u062F\u0647 \u0627\u06CC \u062C\u0647\u062A \u0646\u0645\u0627\u06CC\u0634 \u06CC\u0627\u0641\u062A \u0646\u0634\u062F")
        }
        createDefaultText() {
            this.defaultText = this.svg.append("text").text("").attr("id", "defaultText").attr("y", 80).attr("x", this.w / 2 + this.defaultTextPosition).attr("font-size", this.isMobile ? 12 : 14).attr("fill", "#6c757d").attr("font-weight", "400")
        }
        hideDefaultText() {
            this.defaultText.text("")
        }
        initialChart() {
            this.createSvg(),
            this.createMainRect(),
            this.createDefaultText(),
            this.createTooltipDiv(),
            this.createChartBody(),
            this.createXAxisGroup(),
            this.createYAxisGroup()
        }
        createChartBody() {
            this.chartBody = this.svg.append("g").attr("class", "chartBody").attr("clip-path", "url(#clip)")
        }
        cleanChartBody() {
            this.chartBody.selectAll("*").remove()
        }
        createMainRect() {
            this.rect = this.svg.append("rect").attr("id", "rect").attr("width", this.w).attr("height", this.h).style("fill", "none").style("pointer-events", "all").attr("clip-path", "url(#clip)")
        }
        createTooltipDiv() {
            this.tooltipDiv = yt("body").append("div").attr("id", "tooltipDiv").attr("class", "tooltip").style("font-size", "12px").style("font-family", "IRANSansX").style("position", "absolute").style("text-align", "center").style("width", "auto").style("height", "auto").style("padding", "2px").style("background", "rgb(255,255,255)").style("color", "#222222").style("border", "solid 1px").style("border-radius", "8px").style("pointer-events", "none").style("opacity", 0)
        }
        createXAxisGroup() {
            this.gX = this.svg.append("g").attr("class", "axis x-axis").attr("transform", "translate(0," + this.h + ")").attr("font-size", 10).style("font-family", "IRANSansX")
        }
        createYAxisGroup() {
            this.gY = this.svg.append("g").attr("class", "axis y-axis").attr("font-size", 11).style("font-family", "IRANSansX")
        }
        createSvg() {
            this.svg = yt("#candleChart-area").append("svg").attr("id", "candlestickChart").attr("width", this.w + this.margin.left + this.margin.right - this.focusLeft).attr("height", this.h + this.margin.top + this.margin.bottom).append("g").attr("transform", "translate(" + (this.margin.left + this.focusLeft) + "," + this.margin.top + ")"),
            this.defs = this.svg.append("defs").append("clipPath").attr("id", "clip").append("rect").attr("width", this.w).attr("height", this.h)
        }
        prepareData(e) {
            this.isOnresize || (this.prices = e.map( (c, p) => {
                if (this.selectedTrend === ae.daily)
                    return {
                        Date: Za(c.t),
                        OriginDate: c.t,
                        Open: c.o,
                        High: c.h,
                        Low: c.l,
                        Close: c.c,
                        Index: p
                    };
                {
                    let h = ce.jDateToDate(c.t)
                      , x = h.getFullYear() + "/" + h.getMonth() + "/" + h.getDate();
                    return {
                        Date: qa(x),
                        OriginDate: c.t,
                        Open: c.o,
                        High: c.h,
                        Low: c.l,
                        Close: c.c,
                        Index: p
                    }
                }
            }
            )),
            this.dates = this.prices.map(c => c.Date),
            this.xScale = at().domain([-1, this.dates.length]).range([0, this.w]),
            this.xDateScale = Zi().domain([0, this.dates.length]).range(this.dates);
            let t = Yi(-1, this.dates.length).map(c => c.toString());
            this.xBand = Rt().domain(t).range([0, this.w]).padding(.7),
            this.xAxis = Ct(this.xScale).ticks(this.ticksValue).tickFormat(this.getTickFormat.bind(this)),
            this.yMin = Re(this.prices.map(c => c.Low)),
            this.yMax = nt(this.prices.map(c => c.High));
            let a = [this.yMin, this.yMax];
            this.yScale = at().domain(a).range([this.h, 0]).nice(),
            this.yAxis = bt(this.yScale).ticks(5).tickFormat(this.formatAbbreviation.bind(this)),
            this.gX.call(this.xAxis).call(c => {
                c.selectAll(".tick text").attr("x", "0")
            }
            ).call(this.tickLine.bind(this)),
            this.gY.call(this.yAxis).call(this.tickText.bind(this)).call(this.tickLine.bind(this)),
            this.gY.select("path").style("opacity", "0"),
            this.gX.select("path").style("opacity", "0"),
            this.isOnresize = !1,
            this.createLineCandle(),
            this.createRectCandle(),
            this.createZoomable()
        }
        onResized() {
            this.svg && yt("#candlestickChart").remove(),
            this.firstChange = !0,
            this.isOnresize = !0,
            this.drawChart()
        }
        createResizeObserve() {
            let e = document.getElementById("candleChart-area");
            new ResizeObserver( () => {
                this.onResized()
            }
            ).observe(e)
        }
        numberWithCommas(e) {
            return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["lib-d3-candlestick-chart"]],
        inputs: {
            isMobile: [1, "isMobile"],
            selectedTrendChange: [1, "selectedTrendChange"],
            candleChartDataChange: [1, "candleChartDataChange"]
        },
        outputs: {
            isChartZoomed: "isChartZoomed"
        },
        decls: 2,
        vars: 0,
        consts: [[2, "width", "100%"], ["id", "candleChart-area"]],
        template: function(t, a) {
            t & 1 && (r(0, "div", 0),
            C(1, "div", 1),
            s())
        },
        styles: [`#tooltipDiv[_ngcontent-%COMP%]{position:absolute;text-align:center;width:auto;height:auto;padding:2px;font:12px sans-serif;background:#000c;color:#fff;border:0px;border-radius:8px;pointer-events:none}
/*# sourceMappingURL=d3-candlestick-chart.component-DBFJGFGU.css.map */`],
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var Un = (i, o) => o.id
  , Rn = i => ({
    active: i
});
function Ja(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "button", 7),
        b("click", function() {
            let t = g(n).$implicit
              , a = d();
            return f(a.changeChartPeriod(t.key))
        }),
        r(1, "small", 8),
        u(2),
        s()()
    }
    if (i & 2) {
        let n = o.$implicit
          , e = d();
        m("ngClass", D(4, Rn, e.selectedChartPeriod() === n.key))("id", n.id + "-button"),
        l(),
        m("id", n.id + "-small"),
        l(),
        N(n.name)
    }
}
function Ka(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "button", 7),
        b("click", function() {
            let t = g(n).$implicit
              , a = d();
            return f(a.changeChartType(t.key))
        }),
        C(1, "svg-icon", 9),
        s()
    }
    if (i & 2) {
        let n = o.$implicit
          , e = d();
        m("ngClass", D(5, Rn, e.selectedChartType() === n.key))("id", n.id + "-button"),
        we("title", n.name),
        l(),
        m("iconName", n.icon)("id", n.id + "-i")
    }
}
function eo(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "lib-d3-line-chart", 10),
        b("isChartZoomed", function(t) {
            g(n);
            let a = d();
            return f(a.changeFocusedOnTrendChart(t))
        }),
        s()
    }
    if (i & 2) {
        let n = d();
        m("isMobile", n.isMobile())("zoomable", !1)("selectedTrend", n.selectedChartPeriod())
    }
}
function to(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "lib-d3-candlestick-chart", 11),
        b("isChartZoomed", function(t) {
            g(n);
            let a = d();
            return f(a.changeFocusedOnTrendChart(t))
        }),
        s()
    }
    if (i & 2) {
        let n = d();
        m("selectedTrendChange", n.selectedTrendChange())("candleChartDataChange", n.candleChartDataChange())("isMobile", n.isMobile())
    }
}
function io(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 12),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.goToEasyChart())
        }),
        C(1, "svg-icon", 13),
        r(2, "small"),
        u(3, "\u0627\u06CC\u0632\u06CC\u200C\u0686\u0627\u0631\u062A"),
        s()()
    }
    if (i & 2) {
        let n = d();
        we("title", "\u0627\u06CC\u0632\u06CC\u200C\u0686\u0627\u0631\u062A"),
        l(),
        m("iconName", n.icons.EasyChart)
    }
}
var jn = ( () => {
    let o = class o {
        constructor() {
            this.icons = R,
            this.TrendChartPeriodsInfo = Ln,
            this.ChartTypesInfo = Bn,
            this.d3LineChart = Le(qt),
            this.isMobile = _(!0),
            this.activeStockIsin = _(),
            this.showEasyChartBtn = _(),
            this.loadingEvent = B(),
            this.router = $(Ue),
            this.trendChartService = $(Nn),
            this.candleChartService = $(On),
            this.marketDataService = $(Ae),
            this.symbolService = $(ge),
            this.line = dn.line,
            this.selectedTrendChange = A(this.trendChartService.selectedTrendChange$),
            this.candleChartDataChange = A(this.trendChartService.candleChartDataChange$),
            this.isFocusedOnTrendChart = T(!1),
            this.selectedChartPeriod = T(ae.daily),
            this.selectedChartType = T(_e.line),
            this._activeStockIsin = T(""),
            this.lineChartData = T([]),
            this.candleChartData = T([]),
            this.chartOptionChanges = K( () => ({
                chartPeriod: this.selectedChartPeriod(),
                chartType: this.selectedChartType()
            })),
            this.chartOptionWithActiveIsin = K( () => {
                let {chartPeriod: e, chartType: t} = this.chartOptionChanges();
                return {
                    chartPeriod: e,
                    chartType: t,
                    activeStockIsin: this._activeStockIsin()
                }
            }
            ),
            this.chartOptionWithStockInfo = K( () => {
                let {chartPeriod: e, chartType: t} = this.chartOptionChanges();
                return {
                    chartPeriod: e,
                    chartType: t,
                    stockInfoMarketData: this.stockInfoMarketData()
                }
            }
            ),
            this.updateTrendChart$ = V(this.chartOptionWithActiveIsin).pipe(L(e => e.activeStockIsin?.length > 0), E(e => this.makeUpdateTrendChart$(e))),
            this.stockInfoMarketData$ = V(this._activeStockIsin).pipe(L(Boolean), E(e => this.getStockInfoMarketData$(e))),
            this.updateTrendChart = A(this.updateTrendChart$),
            this.stockInfoMarketData = A(this.stockInfoMarketData$),
            this.trendChartDataObs = {
                [ae.daily + _e.line]: e => Me(0, 12e4).pipe(E( () => this.candleChartService.getTodayCandle(e))),
                [ae.daily + _e.candle]: e => Me(0, 12e4).pipe(E( () => this.candleChartService.getTodayCandle(e))),
                [ae.weekly + _e.line]: e => this.trendChartService.getWeeklyTrend(e),
                [ae.weekly + _e.candle]: e => this.candleChartService.getWeeklyCandle(e),
                [ae.monthly + _e.line]: e => this.trendChartService.getMonthTrend(e),
                [ae.monthly + _e.candle]: e => this.candleChartService.getMonthCandle(e),
                [ae.tripleMonth + _e.line]: e => this.trendChartService.get3MonthsTrend(e),
                [ae.tripleMonth + _e.candle]: e => this.candleChartService.get3MonthsCandle(e),
                [ae.yearly + _e.line]: e => this.trendChartService.getYearTrend(e),
                [ae.yearly + _e.candle]: e => this.candleChartService.getYearCandle(e)
            },
            this.TrendChartDailyAction = [X(e => {
                e?.chartDataItem?.length && (this.candleChartData.set(e?.chartDataItem),
                this.lineChartData.set(e.chartDataItem.map(t => ({
                    d: t.t,
                    v: t.c
                })))),
                this.trendChartService.candleChartDataChangeSub.next(e?.chartDataItem ?? []),
                this.d3LineChart() && (this.d3LineChart().chartData = e?.chartDataItem?.map(t => ({
                    d: t.t,
                    v: t.c
                })),
                this.d3LineChart().drawChart())
            }
            )],
            this.TrendChartLineAction = [X(e => {
                this.lineChartData.set(e.chartDataItem),
                this.checkIfTodayInfoNeedToAddToHistoricalTrend(this.selectedChartPeriod(), this.selectedChartType(), this.lineChartData(), this.stockInfoMarketData())
            }
            ), X( () => {
                this.d3LineChart().chartData = this.lineChartData(),
                this.d3LineChart().drawChart()
            }
            )],
            this.TrendChartCandleAction = [X(e => {
                this.candleChartData.set(e.chartDataItem),
                this.checkIfTodayInfoNeedToAddToCandleTrend(this.selectedChartPeriod(), this.selectedChartType(), this.candleChartData(), this.stockInfoMarketData()),
                this.trendChartService.candleChartDataChangeSub.next(this.candleChartData() ?? [])
            }
            )],
            this.activeIsinDefaultPeriod = {
                IRT3AVNF0001: ae.weekly
            },
            ue( () => {
                this.activeStockIsin() && (this._activeStockIsin.set(this.activeStockIsin()),
                this.symbolService.symbolByIsin[this.activeStockIsin()]?.marketUnit === Pt.ETFFix ? this.changeChartPeriod(ae.weekly) : this.changeChartPeriod(ae.daily))
            }
            )
        }
        changeFocusedOnTrendChart(e) {
            this.isFocusedOnTrendChart.update( () => e)
        }
        changeChartType(e) {
            this.selectedChartType.set(e)
        }
        changeChartPeriod(e) {
            this.lineChartData.set([]),
            this.candleChartData.set([]),
            this.selectedChartPeriod.set(e),
            this.trendChartService.selectedTrendChangeSub.next(e)
        }
        goToEasyChart() {
            return this.isMobile() ? this.router.navigate([`/${Ut.MENU_ROUTE}/${Ut.EASY_CHART_ROUTE}/${this._activeStockIsin()}`]) : this.router.navigate([]).then( () => {
                window.open(`/${Ut.EASY_CHART_ROUTE}/${this._activeStockIsin()}`, "_blank")
            }
            )
        }
        checkIfTodayInfoNeedToAddToHistoricalTrend(e, t, a, c) {
            try {
                if (c && e !== ae.daily && t === _e.line) {
                    let p = new Date(c?.tradeDate);
                    if (a?.length && +c?.lastTradedPrice && p) {
                        let h = a[a.length - 1].d;
                        p.setHours(0, 0, 0, 0) > ce.jDateToDate(h).setHours(0, 0, 0, 0) && this.lineChartData.update(x => [...x, {
                            d: ce.getFormattedJDate(p),
                            v: +c.lastTradedPrice
                        }])
                    }
                }
            } catch {
                return null
            }
        }
        checkIfTodayInfoNeedToAddToCandleTrend(e, t, a, c) {
            if (c && e !== ae.daily && t === _e.candle) {
                let p = new Date(c?.tradeDate);
                if (a?.length && +c?.lastTradedPrice && p) {
                    let h = a[a.length - 1].t;
                    p.setHours(0, 0, 0, 0) > ce.jDateToDate(h).setHours(0, 0, 0, 0) && this.candleChartData.update( () => [...a, {
                        t: ce.getFormattedJDate(p),
                        o: +c.firstTradedPrice,
                        h: +c.highPrice,
                        l: +c.lowPrice,
                        c: +c.lastTradedPrice
                    }])
                }
            }
        }
        customizeTooltip(e) {
            let t = e.point.data;
            return {
                text: `${t.v.toLocaleString()} 
\r ${t.d}`
            }
        }
        getStockInfoMarketData$(e) {
            return this.marketDataService.GetStockInfo(e).pipe(X(t => {
                this.checkIfTodayInfoNeedToAddToHistoricalTrend(this.selectedChartPeriod(), this.selectedChartType(), this.lineChartData(), t)
            }
            ))
        }
        makeUpdateTrendChart$(e) {
            let t = this.trendChartDataObs[e.chartPeriod + e.chartType](e.activeStockIsin);
            if (e.chartPeriod === ae.daily)
                return t.pipe(Et.apply(this, this.TrendChartDailyAction));
            if (this.selectedChartType() === _e.line)
                return t.pipe(Et.apply(this, this.TrendChartLineAction));
            if (this.selectedChartType() === _e.candle)
                return t.pipe(Et.apply(this, this.TrendChartCandleAction))
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["d3-trend-chart"]],
        viewQuery: function(t, a) {
            t & 1 && $e(a.d3LineChart, qt, 5),
            t & 2 && We()
        },
        inputs: {
            isMobile: [1, "isMobile"],
            activeStockIsin: [1, "activeStockIsin"],
            showEasyChartBtn: [1, "showEasyChartBtn"]
        },
        outputs: {
            loadingEvent: "loadingEvent"
        },
        decls: 11,
        vars: 2,
        consts: [[1, "d-flex", "justify-content-between", "align-items-center", "tabs"], [1, "d-flex", "tabs-holder", 2, "min-height", "auto"], ["type", "button", 1, "btn", "btn-sm", "tab", 3, "ngClass", "id"], [1, "w-100"], ["chartId", "trendLineChart", 3, "isMobile", "zoomable", "selectedTrend"], [3, "selectedTrendChange", "candleChartDataChange", "isMobile"], [1, "bg-principal-3x", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "bg-principal-hover", "rounded-2", "p-2", "text-body", "text-center", "w-100", "mt-2", "cup"], ["type", "button", 1, "btn", "btn-sm", "tab", 3, "click", "ngClass", "id"], [3, "id"], ["width", "20", "height", "20", 1, "", 3, "iconName", "id"], ["chartId", "trendLineChart", 3, "isChartZoomed", "isMobile", "zoomable", "selectedTrend"], [3, "isChartZoomed", "selectedTrendChange", "candleChartDataChange", "isMobile"], [1, "bg-principal-3x", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "bg-principal-hover", "rounded-2", "p-2", "text-body", "text-center", "w-100", "mt-2", "cup", 3, "click"], ["width", "18", "height", "18", 1, "line-height-18px", "text-secondary", 3, "iconName"]],
        template: function(t, a) {
            t & 1 && (r(0, "div", 0)(1, "div", 1),
            z(2, Ja, 3, 6, "button", 2, Un),
            s(),
            r(4, "div", 1),
            z(5, Ka, 2, 7, "button", 2, Un),
            s()(),
            r(7, "div", 3),
            S(8, eo, 1, 3, "lib-d3-line-chart", 4)(9, to, 1, 3, "lib-d3-candlestick-chart", 5),
            s(),
            S(10, io, 4, 2, "div", 6)),
            t & 2 && (l(2),
            W(a.TrendChartPeriodsInfo),
            l(3),
            W(a.ChartTypesInfo),
            l(3),
            y(a.selectedChartType() === "line" ? 8 : 9),
            l(2),
            y(a.showEasyChartBtn() ? 10 : -1))
        },
        dependencies: [Y, qt, $n, j],
        styles: [`#trendLineChart[_ngcontent-%COMP%], #trendLineChart[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%!important;margin:0!important}
/*# sourceMappingURL=d3-trend-chart.component-O5ZYI6WX.css.map */`],
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var no = (i, o) => o.id;
function ao(i, o) {
    if (i & 1 && (r(0, "div", 4)(1, "div", 5)(2, "div", 6),
    u(3),
    s(),
    r(4, "small", 7),
    u(5),
    M(6, "jdate"),
    s()()()),
    i & 2) {
        let n = o.$implicit;
        l(3),
        k(" ", n.content, " "),
        l(2),
        N(G(6, 2, n.createDateTime))
    }
}
function oo(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 3),
        b("scroll", function(t) {
            g(n);
            let a = d();
            return f(a.onScroll(t))
        }),
        z(1, ao, 7, 4, "div", 4, no),
        s()
    }
    if (i & 2) {
        let n, e = d();
        l(),
        W((n = e.selectedSymbolNotes()) == null ? null : n.notes)
    }
}
function ro(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 8),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.addNewNote())
        }),
        C(1, "svg-icon", 9),
        u(2, " \u0645\u062F\u06CC\u0631\u06CC\u062A \u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627\u06CC \u0627\u06CC\u0646 \u0646\u0645\u0627\u062F "),
        s()
    }
    if (i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.Edit)
    }
}
function lo(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 2),
        C(1, "svg-icon", 10),
        u(2, " \u0646\u0645\u0627\u062F \u0641\u0627\u0642\u062F \u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u0645\u06CC\u200C\u0628\u0627\u0634\u062F "),
        r(3, "button", 11),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.addNewNote())
        }),
        u(4, " \u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A "),
        s()()
    }
    if (i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.Note)
    }
}
var h0 = ( () => {
    let o = class o {
        onScroll(e) {
            this.scrollTopValue.emit(e.target.scrollTop)
        }
        constructor(e, t) {
            this.router = e,
            this.noteFacadeService = t,
            this.icons = R,
            this.symbolIsin = _(),
            this.isMobile = _(void 0),
            this.openEditor = B(),
            this.scrollTopValue = B(),
            this.selectedSymbolNotes$ = V(this.symbolIsin).pipe(L(a => !!a && a.length > 10), E(a => this.noteFacadeService.selectedSymbolNotes(a))),
            this.selectedSymbolNotes = A(this.selectedSymbolNotes$)
        }
        addNewNote() {
            this.isMobile() ? this.router.navigate(["/menu/note-management", this.symbolIsin()]) : this.openEditor.emit(this.symbolIsin())
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)(ee(Ue),ee(In))
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["symbol-notes"]],
        inputs: {
            symbolIsin: [1, "symbolIsin"],
            isMobile: [1, "isMobile"]
        },
        outputs: {
            openEditor: "openEditor",
            scrollTopValue: "scrollTopValue"
        },
        decls: 3,
        vars: 3,
        consts: [[1, "list-group", "list-group-flush", "overflow-auto", "rounded"], [1, "mt-auto", "py-1", "px-2", "text-body", "text-opacity-50", "text-center", "cup"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-muted", "h-100"], [1, "list-group", "list-group-flush", "overflow-auto", "rounded", 3, "scroll"], [1, "list-group-item", "d-flex", "bg-principal", "w-100"], [1, "d-flex", "align-items-center", "w-100"], [1, "flex-grow-1", 2, "white-space", "pre-line", "text-align", "justify"], [1, "text-muted"], [1, "mt-auto", "py-1", "px-2", "text-body", "text-opacity-50", "text-center", "cup", 3, "click"], ["width", "20", "height", "20", 1, "me-1", 3, "iconName"], ["width", "36", "height", "36", 1, "mb-2", 3, "iconName"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "mt-3", 3, "click"]],
        template: function(t, a) {
            if (t & 1 && S(0, oo, 3, 0, "div", 0)(1, ro, 3, 1, "div", 1)(2, lo, 5, 1, "div", 2),
            t & 2) {
                let c, p, h;
                y(a.selectedSymbolNotes() && ((c = a.selectedSymbolNotes()) == null ? null : c.notes.length) > 0 ? 0 : -1),
                l(),
                y(a.selectedSymbolNotes() && ((p = a.selectedSymbolNotes()) == null ? null : p.notes.length) > 0 ? 1 : -1),
                l(),
                y(!a.selectedSymbolNotes() || a.selectedSymbolNotes() && ((h = a.selectedSymbolNotes()) == null ? null : h.notes.length) === 0 ? 2 : -1)
            }
        },
        dependencies: [un, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var zn = Wa(Ga());
function so(i, o) {
    if (i & 1 && C(0, "div", 9),
    i & 2) {
        let n = d();
        m("isMobile", n.isMobile())("symbol", n.finalData())
    }
}
function co(i, o) {
    if (i & 1 && C(0, "svg-icon", 11),
    i & 2) {
        let n, e, t = d();
        m("iconName", t.icons.StarCheckFill),
        we("data-cy", "same-group-list-item-check-fill-" + ((n = t.finalData()) == null ? null : n.symbolName))("data-cy-item-key", (e = t.finalData()) == null ? null : e.symbolName)
    }
}
function uo(i, o) {
    if (i & 1 && C(0, "svg-icon", 12),
    i & 2) {
        let n, e, t = d();
        m("iconName", t.icons.Star),
        we("data-cy-item-key", (n = t.finalData()) == null ? null : n.symbolName)("data-cy", "same-group-list-item-star-" + ((e = t.finalData()) == null ? null : e.symbolName))
    }
}
var Hn = ( () => {
    let o = class o {
        constructor(e, t, a) {
            this.router = e,
            this.desktopActiveSymbolService = t,
            this.lsService = a,
            this.icons = R,
            this.openMarketWatchCategorySelector = B(),
            this.marketData = _(),
            this.categories = _(),
            this.categories$ = V(this.categories),
            this.marketData$ = V(this.marketData),
            this.isMobile = _(!1),
            this.sameGroupLs$ = V(this.marketData).pipe(ct(10), L(c => !!c), E(c => this.lsService.subscribeToLs(re.SameGroup, c.symbolIsin).pipe(F(Cn), F(p => J(J({}, c), p))))),
            this.finalData$ = V(this.marketData).pipe(fe(this.sameGroupLs$)),
            this.finalData = A(this.finalData$.pipe(ke(this.categories$), F( ([c,p]) => {
                let h = p?.flatMap(x => x.categorySymbolIsins) ?? [];
                return De(J({}, c), {
                    isInCurrentWatchSymbols: h.some(x => x === c.symbolIsin)
                })
            }
            ))),
            A(this.categories$)
        }
        itemTaped(e) {
            this.isMobile() ? this.router.navigate(["/stock-details", e]) : this.desktopActiveSymbolService.setActiveIsin(this.finalData().symbolIsin)
        }
        openWatches(e) {
            this.openMarketWatchCategorySelector.emit(e)
        }
        ngOnDestroy() {
            this.lsService.unsubscribeSchema(re.SameGroup, this.finalData().symbolIsin)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)(ee(Ue),ee(Kt),ee(Ee))
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["symbol-same-group-item"]],
        inputs: {
            marketData: [1, "marketData"],
            categories: [1, "categories"],
            isMobile: [1, "isMobile"]
        },
        outputs: {
            openMarketWatchCategorySelector: "openMarketWatchCategorySelector"
        },
        decls: 21,
        vars: 22,
        consts: [[1, "d-flex", "align-items-center", "py-2"], [1, "d-flex", "align-items-center", "flex-grow-1", 3, "tap"], [1, "col", "d-inline-block", "align-items-center", "px-1", "text-truncate", 2, "min-width", "90px"], [3, "stateColor"], [1, "col", "px-1"], [3, "appHighlighter"], [1, "col", "d-flex", "flex-column", "align-items-center", "px-1"], ["dir", "ltr"], [1, "col", "align-self-stretch", "px-1", 2, "min-width", "100px"], ["symbol-candle", "", 1, "w-100", "priceChart_centerline-wrapper", 3, "isMobile", "symbol"], [1, "col-auto", "px-1", "cup", 3, "click"], ["width", "24", "height", "24", "title", "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0646\u0645\u0627\u062F \u062F\u0631 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646", 1, "text-primary", "px-2", 3, "iconName"], ["width", "24", "height", "24", "title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0627\u062F \u0628\u0647 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646", 1, "text-muted", "px-2", 3, "iconName"]],
        template: function(t, a) {
            if (t & 1 && (r(0, "div", 0)(1, "div", 1),
            b("tap", function() {
                let p;
                return a.itemTaped((p = a.finalData()) == null ? null : p.symbolIsin)
            }),
            r(2, "div", 2),
            C(3, "symbol-state", 3),
            u(4),
            s(),
            r(5, "div", 4)(6, "span", 5),
            u(7),
            M(8, "number"),
            s()(),
            r(9, "div", 6)(10, "span"),
            u(11),
            M(12, "number"),
            s(),
            r(13, "span", 7),
            u(14),
            M(15, "number"),
            s()()(),
            r(16, "div", 8),
            S(17, so, 1, 2, "div", 9),
            s(),
            r(18, "div", 10),
            b("click", function(p) {
                return a.openWatches(a.finalData()),
                p.stopPropagation()
            }),
            S(19, co, 1, 3, "svg-icon", 11)(20, uo, 1, 3, "svg-icon", 12),
            s()()),
            t & 2) {
                let c, p, h, x, U, H, P, le, Je, kt, Tt, Ke;
                l(2),
                we("data-cy", "same-symbol-group-list-item-name-" + ((c = a.finalData()) == null ? null : c.symbolName)),
                l(),
                m("stateColor", (p = a.finalData()) == null ? null : p.stateColor),
                l(),
                k(" ", (h = a.finalData()) == null ? null : h.symbolName, " "),
                l(2),
                m("appHighlighter", (x = a.finalData()) == null ? null : x.totalNumberOfSharesTraded),
                l(),
                k(" ", G(8, 15, (U = a.finalData()) == null ? null : U.totalNumberOfSharesTraded), " "),
                l(4),
                N(G(12, 17, (H = a.finalData()) == null ? null : H.lastTradedPrice)),
                l(2),
                $i("text-success", ((P = a.finalData()) == null ? null : P.lastTradedPriceVarPercent) > 0)("text-body", ((le = a.finalData()) == null ? null : le.lastTradedPriceVarPercent) === 0)("text-danger", ((Je = a.finalData()) == null ? null : Je.lastTradedPriceVarPercent) < 0),
                l(),
                k(" ", ne(15, 19, (kt = a.finalData()) == null ? null : kt.lastTradedPriceVarPercent, "1.0-2"), "% "),
                l(3),
                y(((Tt = a.finalData()) == null ? null : Tt.totalNumberOfSharesTraded) > 0 ? 17 : -1),
                l(2),
                y((Ke = a.finalData()) != null && Ke.isInCurrentWatchSymbols ? 19 : (Ke = a.finalData()) != null && Ke.isInCurrentWatchSymbols ? -1 : 20)
            }
        },
        dependencies: [Wi, Q, Dn, on, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var mo = (i, o) => o.symbolIsin
  , po = i => ({
    loading: i
});
function ho(i, o) {
    if (i & 1 && (r(0, "div", 7)(1, "div", 10),
    u(2),
    s(),
    r(3, "div", 11)(4, "div", 12)(5, "div")(6, "span"),
    u(7, "\u0646\u0645\u0627\u062F \u0645\u062B\u0628\u062A"),
    s(),
    r(8, "span", 13),
    u(9),
    s()(),
    r(10, "div")(11, "span"),
    u(12, "\u0646\u0645\u0627\u062F \u0645\u0646\u0641\u06CC"),
    s(),
    r(13, "span", 14),
    u(14),
    s()()(),
    r(15, "div", 15),
    C(16, "div", 16)(17, "div", 17),
    s()()()),
    i & 2) {
        let n = d();
        l(2),
        k(" ", n.sectorSigns().industryName, " "),
        l(7),
        N(n.sectorSigns().positiveCount),
        l(5),
        N(n.sectorSigns().negativeCount),
        l(2),
        Ne("width", n.sectorSigns().positiveCount * 100 / (n.sectorSigns().positiveCount + n.sectorSigns().zeroCount + n.sectorSigns().negativeCount), "%"),
        l(),
        Ne("width", n.sectorSigns().negativeCount * 100 / (n.sectorSigns().positiveCount + n.sectorSigns().zeroCount + n.sectorSigns().negativeCount), "%")
    }
}
function Co(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "symbol-same-group-item", 21),
        b("openMarketWatchCategorySelector", function(t) {
            g(n);
            let a = d(3);
            return f(a.openMarketWatchCategorySelector(t))
        }),
        s()
    }
    if (i & 2) {
        let n = o.$implicit
          , e = d(3);
        m("categories", e.categories())("marketData", n)("isMobile", e.isMobile())
    }
}
function bo(i, o) {
    if (i & 1 && (r(0, "div", 19),
    z(1, Co, 1, 3, "symbol-same-group-item", 20, mo),
    s()),
    i & 2) {
        let n = d().$implicit;
        l(),
        W(n[1])
    }
}
function yo(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 18),
        b("click", function() {
            let t = g(n).$implicit
              , a = d();
            return f(a.handleCategoryExpansion(t[0]))
        }),
        u(1),
        C(2, "svg-icon", 2),
        s(),
        S(3, bo, 3, 0, "div", 19)
    }
    if (i & 2) {
        let n = o.$implicit
          , e = d();
        l(),
        k(" ", n[0], " "),
        l(),
        Be(e.getExpansionIconClass(n[0])),
        m("iconName", e.icons.ChevronDown),
        l(),
        y(e.getExpansionIconState(n[0]) ? 3 : -1)
    }
}
var vt = function(i) {
    return i.symbolName = "symbolName",
    i.totalNumberOfSharesTraded = "totalNumberOfSharesTraded",
    i.lastTradedPriceVarPercent = "lastTradedPriceVarPercent",
    i.stateColor = "stateColor",
    i
}(vt || {})
  , U0 = ( () => {
    let o = class o {
        constructor() {
            this.icons = R,
            this.symbolInfo = _(),
            this.isMobile = _(!1),
            this.scrollTopValue = B(),
            this.marketWatchAddToCategorySelector = B(),
            this.categories = _(),
            this.categories$ = V(this.categories),
            this.symbolService = $(ge),
            this.marketViewIndustryService = $(wn),
            this.marketDataService = $(Ae),
            this.userSortStorageService = $(vn),
            this.lsService = $(Ee),
            this.loading = T(!0),
            this.locationKey = "SymbolSameGroup",
            this.categoryStates = [],
            this.lsDataReceived = !1,
            this.sortFieldTypes = new Map().set(vt.symbolName, new Qt(new sn)).set(vt.totalNumberOfSharesTraded, new Qt(new di)).set(vt.lastTradedPriceVarPercent, new Qt(new di)),
            this.currentSortState$ = new Oe({
                field: vt.totalNumberOfSharesTraded,
                direction: je.asc
            }),
            this.sameGroupData$ = V(this.symbolInfo).pipe(L(t => !!t && t.symbolIsin.length > 10), X( () => {
                this.categoryStates = []
            }
            ), F(t => this.symbolService.getSameSymbols(t.symbolIsin, t.sector)), F(t => t.filter(a => !He(a.marketUnit)))),
            this.sameGroupGetDetailsFromApi$ = this.sameGroupData$.pipe(L( () => !this.lsDataReceived), E(t => Pi(t).pipe(Fi(50, 50))), It(t => this.marketDataService.GetMarketData(0, t.flatMap(a => a.symbolIsin)).pipe(F(a => (t.forEach(c => {
                let p = a.find(h => h.symbolIsin === c.symbolIsin);
                c.lastTradedPriceVarPercent = +p.priceVar,
                c.lastTradedPrice = +p.lastTradedPrice,
                c.stateColor = rn(p.stateCode),
                c.bestBuyLimitPrice = p.bestBuyPrice,
                c.bestSellLimitPrice = p.bestSellPrice,
                c.totalNumberOfSharesTraded = +p.totalNumberOfSharesTraded,
                c.maxDailyTradedPrice = +p.highPrice,
                c.minDailyTradedPrice = +p.lowPrice,
                c.minDailyPrice = +p.lowAllowedPrice,
                c.maxDailyPrice = +p.highAllowedPrice,
                c.feeOfPreviousDaysClosingPrice = +p.feeOfPreviousDaysClosingPrice,
                c.firstTradedPrice = +p.firstTradedPrice
            }
            ),
            t)))), Vi( (t, a) => [...t, ...a], []), X( () => {
                this.loading.set(!1)
            }
            )),
            this.sameGroupMapWithCategory$ = this.sameGroupData$.pipe(fe(this.sameGroupGetDetailsFromApi$), F(t => Object.entries(zn.groupBy([...t], "searchCategoryName")).sort( (a, c) => {
                if (rt.get(a[0]) > rt.get(c[0]))
                    return 1;
                if (rt.get(a[0]) === rt.get(c[0]))
                    return 0;
                if (rt.get(a[0]) < rt.get(c[0]))
                    return -1
            }
            )), X(t => {
                for (let a of t.map(c => c[0]))
                    this.categoryStates.push({
                        name: a,
                        isExpand: !0
                    })
            }
            )),
            this.sameGroupMapWithCategorySorted$ = this.sameGroupMapWithCategory$.pipe(ke(this.currentSortState$), X( ([,t]) => {
                this.userSortStorageService.setByKey({
                    sortDirection: t.direction,
                    locationKey: this.locationKey,
                    field: t.field
                })
            }
            ), F( ([t,a]) => {
                for (let c of t.map(p => p[0])) {
                    let p = t.find(H => H[0] === c)[1]
                      , h = t.findIndex(H => H[0] === c)
                      , x = [...p].filter(H => H.totalNumberOfSharesTraded !== 0).sort(this.sortFieldTypes.get(a.field).compareFunction(a.field, a.direction))
                      , U = [...p].filter(H => H.totalNumberOfSharesTraded === 0).sort(this.sortFieldTypes.get(a.field).compareFunction(a.field, a.direction));
                    t[h] = [c, [...x, ...U]]
                }
                return t
            }
            )),
            this.currentSortState = A(this.currentSortState$),
            this.sameGroupMapWithCategorySorted = A(this.sameGroupMapWithCategorySorted$),
            this.sectorSigns$ = V(this.symbolInfo).pipe(E(t => this.marketViewIndustryService.getIndustrySymbolSignsData().pipe(F(a => Te.get(t.marketUnit).allowToShowSameGroupSignSection ? a?.find(c => c.industryCode.trim() === t.sector.trim()) : null)))),
            this.sectorSigns = A(this.sectorSigns$),
            this.SortState = {
                [je.none]: "sort",
                [je.asc]: "sort-up",
                [je.decs]: "sort-down"
            };
            let e = this.userSortStorageService.getLocationSort(this.locationKey);
            e.field && e.sortDirection && this.currentSortState$.next({
                field: e.field,
                direction: e.sortDirection
            })
        }
        onScroll(e) {
            this.scrollTopValue.emit(e.target.scrollTop)
        }
        handleCategoryExpansion(e) {
            this.categoryStates.find(t => t.name === e).isExpand = !this.categoryStates.find(t => t.name === e)?.isExpand
        }
        getExpansionIconClass(e) {
            return this.categoryStates.find(t => t.name === e)?.isExpand ? "rotate-180" : ""
        }
        getExpansionIconState(e) {
            return this.categoryStates.find(t => t.name === e)?.isExpand
        }
        get SortFields() {
            return vt
        }
        handleSortChange(e) {
            let t = this.currentSortState().direction === je.none || this.currentSortState().direction === je.decs ? je.asc : je.decs;
            this.currentSortState$.next({
                direction: t,
                field: e
            })
        }
        getSortNameClass(e) {
            return e === this.currentSortState().field ? mi.get(this.currentSortState().direction) : mi.get(je.none)
        }
        getIconName(e) {
            return this.getSortState(e)
        }
        getIconClass(e) {
            return this.getSortState(e) === "sort" ? "text-muted" : "text-global"
        }
        getSortState(e) {
            return this.currentSortState().field === e && this.SortState[this.currentSortState().direction] || "sort"
        }
        openMarketWatchCategorySelector(e) {
            this.marketWatchAddToCategorySelector.emit(e)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["symbol-same-group"]],
        inputs: {
            symbolInfo: [1, "symbolInfo"],
            isMobile: [1, "isMobile"],
            categories: [1, "categories"]
        },
        outputs: {
            scrollTopValue: "scrollTopValue",
            marketWatchAddToCategorySelector: "marketWatchAddToCategorySelector"
        },
        decls: 25,
        vars: 17,
        consts: [[1, "position-sticky", "top-0", "z-30", "border-bottom", "d-flex", "justify-content-between", "bg-principal", "small", "text-center", "px-3", "py-1", "fw-bold", "text-muted", "user-select-none", "border-top", "border-principal-3x"], [1, "text-start", "d-flex", "align-items-center", 3, "tap"], ["width", "20", "height", "20", 3, "iconName"], [1, "d-flex", "align-items-center", "justify-content-center", 3, "tap"], [1, "d-inline-block"], [1, "d-flex", "align-items-center", "justify-content-center"], ["width", "24", "height", "24", 1, "px-2", 3, "iconName"], [1, "bg-principal-3x", "px-2", "pt-2", "z-30"], [1, "symbol-detail-inset-shadow", "d-flex", "flex-column", "overflow-auto", "h-100", "position-relative", 3, "ngClass"], [1, "px-2", 3, "scroll"], [1, "fw-bold", "flex-shrink-0", "px-2", "pb-1", "text-center"], [1, "bg-principal", "p-2", "rounded"], [1, "d-flex", "justify-content-between", "text-secondary"], [1, "text-success"], [1, "text-danger"], [1, "d-flex", "w-100", "gap-1", 2, "height", "5px"], [1, "bg-success", "rounded", "rounded-1", "h-100"], [1, "bg-danger", "rounded", "rounded-1", "h-100"], [1, "fw-bold", "d-flex", "justify-content-between", "search-category-list", "flex-shrink-0", "p-2", "position-sticky", "cup", "bg-principal-3x", "z-20", 2, "top", "0", 3, "click"], [1, "list-group", "list-group-flush", "bg-principal", "rounded", "mb-1", "position-relative"], [1, "list-group-item", "p-0", "symbol-same-group-item", "bg-principal-dark-mobile", 3, "categories", "marketData", "isMobile"], [1, "list-group-item", "p-0", "symbol-same-group-item", "bg-principal-dark-mobile", 3, "openMarketWatchCategorySelector", "categories", "marketData", "isMobile"]],
        template: function(t, a) {
            t & 1 && (r(0, "div", 0)(1, "div", 1),
            b("tap", function() {
                return a.handleSortChange(a.SortFields.symbolName)
            }),
            r(2, "span"),
            u(3, "\u0646\u0645\u0627\u062F"),
            s(),
            C(4, "svg-icon", 2),
            s(),
            r(5, "div", 1),
            b("tap", function() {
                return a.handleSortChange(a.SortFields.totalNumberOfSharesTraded)
            }),
            r(6, "span"),
            u(7, "\u062D\u062C\u0645"),
            s(),
            C(8, "svg-icon", 2),
            s(),
            r(9, "div", 3),
            b("tap", function() {
                return a.handleSortChange(a.SortFields.lastTradedPriceVarPercent)
            }),
            r(10, "span", 4),
            u(11, " \u0622\u062E\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A "),
            C(12, "br"),
            u(13, " \u062F\u0631\u0635\u062F \u062A\u063A\u06CC\u06CC\u0631 "),
            s(),
            C(14, "svg-icon", 2),
            s(),
            r(15, "div", 5)(16, "div", 4),
            u(17, "\u06A9\u0646\u062F\u0644 \u0631\u0648\u0632"),
            s()(),
            r(18, "div"),
            C(19, "svg-icon", 6),
            s()(),
            S(20, ho, 18, 7, "div", 7),
            r(21, "div", 8)(22, "div", 9),
            b("scroll", function(p) {
                return a.onScroll(p)
            }),
            z(23, yo, 4, 6, null, null, Se),
            s()()),
            t & 2 && (l(4),
            Bt("line-height-20px ms-1 ", a.getIconClass(a.SortFields.symbolName), ""),
            m("iconName", a.getIconName(a.SortFields.symbolName)),
            l(4),
            Bt("line-height-20px ms-1 ", a.getIconClass(a.SortFields.totalNumberOfSharesTraded), ""),
            m("iconName", a.getIconName(a.SortFields.totalNumberOfSharesTraded)),
            l(6),
            Bt("line-height-20px ms-1 ", a.getIconClass(a.SortFields.lastTradedPriceVarPercent), ""),
            m("iconName", a.getIconName(a.SortFields.lastTradedPriceVarPercent)),
            l(5),
            m("iconName", a.icons.Blank),
            l(),
            y(a.sectorSigns() ? 20 : -1),
            l(),
            m("ngClass", D(15, po, a.loading())),
            l(2),
            W(a.sameGroupMapWithCategorySorted()))
        },
        dependencies: [Y, j, Hn],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var Wn = ( () => {
    let o = class o {
        constructor() {
            this.changeTabSubject = new Oe(void 0),
            this.changeTab$ = this.changeTabSubject.asObservable(),
            this.changeTab = e => this.changeTabSubject.next(e)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275prov = Ce({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let i = o;
    return i
}
)();
var go = (i, o) => o.tab
  , Gn = i => ({
    active: i
});
function fo(i, o) {
    if (i & 1 && C(0, "svg-icon", 2),
    i & 2) {
        let n = d(2).$implicit;
        m("id", n.htmlId + "-icon")("iconName", n.icon)
    }
}
function So(i, o) {
    if (i & 1 && (r(0, "span", 4),
    u(1, "\u062C\u062F\u06CC\u062F"),
    s()),
    i & 2) {
        let n = d(2).$implicit;
        m("id", n.htmlId + "-new-lbl")
    }
}
function vo(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 1),
        b("click", function() {
            g(n);
            let t = d().$implicit
              , a = d();
            return f(a.tabClickHandler.emit(t.tab))
        }),
        S(1, fo, 1, 2, "svg-icon", 2),
        r(2, "div", 3),
        u(3),
        S(4, So, 2, 1, "span", 4),
        C(5, "svg-icon", 5),
        s()()
    }
    if (i & 2) {
        let n = d().$implicit
          , e = d();
        Be("d-flex align-items-center gap-3 ps-3 py-1 " + n.htmlId),
        m("ngClass", D(14, Gn, e.selectedTabId() === n.tab))("id", n.htmlId),
        l(),
        y(n != null && n.icon ? 1 : -1),
        l(),
        Be("flex-grow-1 d-flex align-items-center justify-content-between border-bottom border-principal-3x border-principal-7x-dark py-2 pe-2 " + n.htmlId),
        m("id", n.htmlId + "-lbl"),
        l(),
        k(" ", n.title, " "),
        l(),
        y(n != null && n.newBadge ? 4 : -1),
        l(),
        Be("text-secondary text-opacity-50 " + n.htmlId),
        m("iconName", e.icons.ChevronLeft)("id", n.htmlId + "-icon-chevron")
    }
}
function _o(i, o) {
    if (i & 1 && C(0, "svg-icon", 6),
    i & 2) {
        let n = d(2).$implicit;
        m("id", n.htmlId + "-icon")("iconName", n.icon)
    }
}
function xo(i, o) {
    if (i & 1 && (r(0, "span", 7),
    u(1, "\u062C\u062F\u06CC\u062F"),
    s()),
    i & 2) {
        let n = d(2).$implicit;
        m("id", n.htmlId + "-new-lbl")
    }
}
function Do(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 1),
        b("click", function() {
            g(n);
            let t = d().$implicit
              , a = d();
            return f(a.tabClickHandler.emit(t.tab))
        }),
        S(1, _o, 1, 2, "svg-icon", 6),
        r(2, "div", 3),
        u(3),
        S(4, xo, 2, 1, "span", 7),
        s()()
    }
    if (i & 2) {
        let n = d().$implicit
          , e = d();
        Be("d-flex align-items-center ps-3 " + n.htmlId),
        m("ngClass", D(10, Gn, e.selectedTabId() === n.tab))("id", n.htmlId),
        l(),
        y(n != null && n.icon ? 1 : -1),
        l(),
        Be("flex-grow-1 d-flex gap-3 align-items-center justify-content-between border-bottom border-principal-3x border-principal-7x-dark py-2 pe-3 " + n.htmlId),
        m("id", n.htmlId + "-lbl"),
        l(),
        k(" ", n.title, " "),
        l(),
        y(n != null && n.newBadge ? 4 : -1)
    }
}
function ko(i, o) {
    if (i & 1 && S(0, vo, 6, 16, "div", 0)(1, Do, 5, 12, "div", 0),
    i & 2) {
        let n = d();
        y(n.isMobile() ? 0 : 1)
    }
}
function To(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 12),
        b("click", function() {
            g(n);
            let t = d(2);
            return f(t.TSEClickHandler.emit())
        }),
        C(1, "svg-icon", 13),
        r(2, "div"),
        u(3, "TSE"),
        s()()
    }
    if (i & 2) {
        let n = d(2);
        l(),
        m("iconName", n.icons.TseTmc)
    }
}
function Io(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 8),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.codalClickHandler.emit())
        }),
        C(1, "svg-icon", 9),
        r(2, "div", 10),
        u(3, " \u06A9\u062F\u0627\u0644 "),
        s()(),
        S(4, To, 4, 1, "div", 11)
    }
    if (i & 2) {
        let n, e = d();
        l(),
        m("iconName", e.icons.Codal),
        l(3),
        y((n = e.symbol()) != null && n.insCode ? 4 : -1)
    }
}
var Si = ( () => {
    let o = class o {
        constructor() {
            this.icons = R,
            this.isMobile = _(!1),
            this.tabs = _([]),
            this.selectedTabId = _(),
            this.symbol = _(),
            this.tabClickHandler = B(),
            this.TSEClickHandler = B(),
            this.codalClickHandler = B()
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["symbol-details-more-tabs"]],
        inputs: {
            isMobile: [1, "isMobile"],
            tabs: [1, "tabs"],
            selectedTabId: [1, "selectedTabId"],
            symbol: [1, "symbol"]
        },
        outputs: {
            tabClickHandler: "tabClickHandler",
            TSEClickHandler: "TSEClickHandler",
            codalClickHandler: "codalClickHandler"
        },
        decls: 3,
        vars: 1,
        consts: [["ngbDropdownItem", "", 3, "ngClass", "class", "id"], ["ngbDropdownItem", "", 3, "click", "ngClass", "id"], ["width", "22", "height", "22", 1, "text-secondary", 3, "id", "iconName"], [3, "id"], [1, "text-warning", "small", "ms-auto", "me-2", 3, "id"], ["width", "22", "height", "22", 3, "iconName", "id"], ["width", "22", "height", "22", 1, "text-body-secondary", 3, "id", "iconName"], [1, "bg-warning", "border", "border-2", "border-principal", "ms-auto", "px-1", "rounded-4", "small", "text-warning", "text-white", 3, "id"], ["ngbDropdownItem", "", "id", "desktop-dropdown-symbol-header-item-codal", 1, "ps-3", 3, "click"], ["width", "20", "height", "20", "id", "symbol-header-dropdown-item-inner-4", 1, "text-body-secondary", 3, "iconName"], [1, "align-items-center", "border-bottom", "border-principal-3x", "border-principal-7x-dark", "d-flex", "flex-grow-1", "gap-3", "justify-content-between", "pe-3", "py-2", "symbol-detail-tab-conditionalAlerts"], ["ngbDropdownItem", "", "id", "symbol-header-dropdown-item-5", 1, "ps-3", 2, "line-height", "2"], ["ngbDropdownItem", "", "id", "symbol-header-dropdown-item-5", 1, "ps-3", 2, "line-height", "2", 3, "click"], ["width", "20", "height", "20", "id", "symbol-header-dropdown-item-inner-5", 1, "text-body-secondary", 3, "iconName"]],
        template: function(t, a) {
            t & 1 && (z(0, ko, 2, 1, null, null, go),
            S(2, Io, 5, 2)),
            t & 2 && (W(a.tabs()),
            l(2),
            y(a.isMobile() ? -1 : 2))
        },
        dependencies: [te, Y, Yt, yn, j],
        styles: [`.dropdown-item[_ngcontent-%COMP%]:last-child   .border-bottom[_ngcontent-%COMP%]{border:none!important}
/*# sourceMappingURL=symbol-details-more-tabs.component-BZ6UJCEF.css.map */`],
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var wo = ["moreTabs"]
  , Ao = (i, o) => o.tab
  , Yn = i => ({
    active: i
});
function Po(i, o) {
    if (i & 1 && C(0, "i", 16),
    i & 2) {
        let n = d(2);
        m("ngClass", n.unreadMessage().state)
    }
}
function Mo(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 11),
        b("click", function() {
            let t = g(n).$implicit
              , a = d();
            return f(a.selectTabHandler(t.tab))
        }),
        r(1, "span", 12)(2, "div", 13)(3, "div", 14),
        C(4, "svg-icon", 15),
        s(),
        S(5, Po, 1, 1, "i", 16),
        s(),
        r(6, "span", 17),
        u(7),
        s()()()
    }
    if (i & 2) {
        let n, e, t, a = o.$implicit, c = d();
        m("ngClass", D(14, Yn, ((n = c.selectedTab()) == null ? null : n.tab) === a.tab))("id", "symbol-detail-" + a.tab),
        we("data-cy", a.htmlId),
        l(),
        m("id", "symbol-detail-" + a.tab + "-span"),
        l(),
        m("id", "symbol-detail-" + a.tab + "-div"),
        l(),
        m("id", "symbol-detail-" + a.tab + "-div-inner"),
        l(),
        m("iconName", ((e = c.selectedTab()) == null ? null : e.tab) === a.tab ? a.iconFill : a.icon)("classList", a.htmlId)("id", a.htmlId + "-" + a.tab),
        l(),
        y(a != null && a.hasBadge && ((t = c.unreadMessage()) != null && t.count) ? 5 : -1),
        l(),
        Be("tab-text " + a.htmlId),
        m("id", a.htmlId + "-span"),
        l(),
        N(a.title)
    }
}
function Fo(i, o) {
    i & 1 && C(0, "i", 8)
}
function Eo(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 10)(1, "symbol-details-more-tabs", 18),
        b("tabClickHandler", function(t) {
            g(n);
            let a = d();
            return f(a.selectTabHandler(t))
        })("TSEClickHandler", function() {
            g(n);
            let t = d();
            return f(t.openTse())
        })("codalClickHandler", function() {
            g(n);
            let t = d();
            return f(t.openCodal())
        }),
        s()()
    }
    if (i & 2) {
        let n, e, t = d();
        l(),
        m("isMobile", t.isMobile())("symbol", t.symbol())("selectedTabId", (n = t.selectedTab()) == null ? null : n.tab)("tabs", (e = t.tabs()) == null ? null : e.slice(4))
    }
}
var uc = ( () => {
    let o = class o {
        constructor(e, t, a, c, p) {
            this.overlayService = e,
            this.messageFacade = t,
            this.symbolService = a,
            this.sidePanelServiceService = c,
            this.router = p,
            this.symbolDetailTabService = $(Wn),
            this.icons = R,
            this.isMobile = _(!1),
            this.easyChartUrl = _(""),
            this.moreTabs = Le.required("moreTabs", {
                read: li
            }),
            this.marketUnitUiState = T(new hi(Pt.None)),
            this.symbolIsin = _(""),
            this.marketUnitCode = _(),
            this.unreadMessage = A(V(this.symbolIsin).pipe(L(Boolean), ke(this.messageFacade.getUnreadMessageState$()), E( ([h]) => this.messageFacade.getUnreadMessagesStateBySymbolIsin$(h)))),
            this.tabs = K( () => this.marketUnitUiState()?.allowedTabs && Object.values(this.marketUnitUiState()?.allowedTabs)),
            this.symbol = A(V(this.symbolIsin).pipe(L(Boolean), ke(this.symbolService.getSymbolsStream()), F( ([h,x]) => x.find(U => U.symbolIsin === h)))),
            this.symbolTabType = ft,
            this.selectedTab = T(new hi(Pt.None).AllTabs[0]),
            this.selectedTab$ = V(this.selectedTab),
            A(V(this.marketUnitCode).pipe(ke(V(this.symbolIsin)), X( ([h]) => {
                this.marketUnitUiState.set(Te.get(h)),
                this.selectedTab.set(this.marketUnitUiState()?.AllTabs?.[0])
            }
            ), E( () => this.symbolService.isOptionParentSymbol(this.symbolIsin())), X(h => this.marketUnitUiState()?.setTabs(h)))),
            A(this.symbolDetailTabService.changeTab$.pipe(X(h => this.selectTabHandler(h))))
        }
        selectTabHandler(e) {
            if (e === ft.EasyChart && this.openEasyChart(),
            this.marketUnitUiState()?.allowedTabs?.[e]?.newBadge) {
                let t = JSON.parse(localStorage.getItem("symbolDetailsTabNewBadgeState") ?? "{}");
                t[this.marketUnitUiState()?.allowedTabs?.[e].name] = !1,
                localStorage.setItem("symbolDetailsTabNewBadgeState", JSON.stringify(t)),
                this.symbolService.isOptionParentSymbol(this.symbolIsin()).pipe(Ot(1)).subscribe( () => {
                    this.marketUnitUiState().setTabs(!1)
                }
                )
            }
            e === ft.OptionChain && this.openOptionChain(),
            this.selectedTab.set(this.marketUnitUiState()?.allowedTabs?.[e])
        }
        openCodal() {
            mn(this.symbol().symbolName)
        }
        openTse() {
            this.symbol()?.insCode && window.open(`http://www.tsetmc.com/Loader.aspx?ParTree=151311&i=${this.symbol()?.insCode}`, "_blank")
        }
        openEasyChart() {
            window.open(this.easyChartUrl(), this.isMobile() ? "_self" : "_blank")
        }
        openMoreOptions() {
            this.isMobile() && this.overlayService.showOverlay({
                component: Si,
                input: [{
                    inputName: "isMobile",
                    inputValue: !0
                }, {
                    inputName: "tabs",
                    inputValue: Object.values(this.marketUnitUiState()?.allowedTabs)?.slice(4)
                }, {
                    inputName: "selectedTabId",
                    inputValue: this.selectedTab()?.tab
                }],
                output: [{
                    outputName: "tabClickHandler",
                    closeForm: !0,
                    outputCallBack: e => {
                        this.selectTabHandler(e)
                    }
                }],
                option: {
                    componentName: "SymbolDetailsMoreTabsComponent"
                }
            }, !1)
        }
        openOptionChain() {
            this.isMobile() ? this.router.navigate(["menu/option/chain", this.symbolIsin()]) : this.sidePanelServiceService.openSidePanelFromRoute({
                sidePanel: Hi.Option,
                data: {
                    optionTab: Pn.Chain,
                    symbolIsin: this.symbolIsin()
                }
            })
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)(ee(xn),ee(Mn),ee(ge),ee(bn),ee(Ue))
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["symbol-detail-tabs"]],
        viewQuery: function(t, a) {
            t & 1 && $e(a.moreTabs, wo, 5, li),
            t & 2 && We()
        },
        inputs: {
            isMobile: [1, "isMobile"],
            easyChartUrl: [1, "easyChartUrl"],
            symbolIsin: [1, "symbolIsin"],
            marketUnitCode: [1, "marketUnitCode"]
        },
        decls: 13,
        vars: 6,
        consts: [[1, "tabs", "symbol-detail-tabs", "bg-principal", "d-flex", "align-items-center", "flex-shrink-0", "pt-2", "px-2", "position-relative", "shadow-sm", "z-10", "border-bottom", "border-principal", "border-principal-4x-dark-mobile"], [1, "tabs-holder", "d-flex", "align-items-center", "flex-grow-1", "no-wrap", "gap-2"], [1, "tab", "col", 3, "ngClass", "id"], ["ngbDropdown", "", "container", "body", "id", "layout2-dropdown-div", 1, "tab", "col", 3, "ngClass"], ["ngbDropdownToggle", "", 1, "tab-content", 3, "click"], [1, "position-relative", "text-center"], [1, "tab-content-icon-holder"], ["width", "20", "height", "20", 1, "", 3, "iconName"], [1, "badge-comment", "bg-warning"], [1, "tab-text"], ["ngbDropdownMenu", "", "id", "layout2-dropdown-inner-div", 1, "text-start"], [1, "tab", "col", 3, "click", "ngClass", "id"], [1, "tab-content", 3, "id"], [1, "position-relative", "text-center", 3, "id"], [1, "tab-content-icon-holder", 3, "id"], ["width", "20", "height", "20", 3, "iconName", "classList", "id"], [1, "badge-comment", 3, "ngClass"], [3, "id"], [3, "tabClickHandler", "TSEClickHandler", "codalClickHandler", "isMobile", "symbol", "selectedTabId", "tabs"]],
        template: function(t, a) {
            if (t & 1 && (r(0, "div", 0)(1, "div", 1),
            z(2, Mo, 8, 16, "div", 2, Ao),
            r(4, "div", 3)(5, "span", 4),
            b("click", function() {
                return a.openMoreOptions()
            }),
            r(6, "div", 5)(7, "div", 6),
            C(8, "svg-icon", 7),
            s(),
            S(9, Fo, 1, 0, "i", 8),
            s(),
            r(10, "span", 9),
            u(11, "\u0628\u06CC\u0634\u062A\u0631"),
            s()(),
            S(12, Eo, 2, 4, "div", 10),
            s()()()),
            t & 2) {
                let c, p, h;
                l(2),
                W((c = a.tabs()) == null ? null : c.slice(a.symbolTabType.Details, a.symbolTabType.Calculator)),
                l(2),
                m("ngClass", D(4, Yn, ((p = a.selectedTab()) == null ? null : p.tab) > a.symbolTabType.Calculator)),
                l(4),
                m("iconName", a.icons.MenuHorizontal),
                l(),
                y((h = a.marketUnitUiState()) != null && h.showNewBadgeOnMoreTabs ? 9 : -1),
                l(3),
                y(a.isMobile() ? -1 : 12)
            }
        },
        dependencies: [te, Y, Yt, Sn, fn, gn, Si, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var qe = ( () => {
    let o = class o extends xe {
        constructor() {
            super(),
            this.details = {
                isin: "",
                highAllowed: 0,
                lowAllowed: 0,
                yesterday: 0
            },
            this.buySheets = [],
            this.sellSheets = [],
            this.subscriptions = [],
            this.numberOfSubscriptions = [],
            this.lsService = $(St),
            this.activeSymbolService = $(Kt),
            this.sheetsData = new Oe({
                buy: [],
                sell: []
            }),
            this.stockDepthDetails = new Oe({
                isin: "",
                highAllowed: 0,
                lowAllowed: 0,
                yesterday: 0
            }),
            this.stockDepthDetails.subscribe(e => {
                this.details.yesterday = e.yesterday,
                this.details.highAllowed = e.highAllowed,
                this.details.lowAllowed = e.lowAllowed
            }
            ),
            this.activeSymbolService.activeSymbolObs$.subscribe(e => {
                this.numberOfSubscriptions.forEach(t => {
                    t.isin !== e.symbol.symbolIsin && this.unSubscribeAll(t.isin)
                }
                )
            }
            )
        }
        getMarketSheetAggregateData(e) {
            return this.httpService.get(`${this.mtsPath + this.apiUrls.marketSheet}sum/${e}`)
        }
        getData(e) {
            let t = this.numberOfSubscriptions.find(a => a.isin === e);
            if (t && t.count > 0) {
                t.count++;
                return
            }
            this.numberOfSubscriptions.push({
                isin: e,
                count: 1
            }),
            this.subscribeOnLsConnectionOrPollData(e),
            this.getDataFromApiAtStart(e).subscribe()
        }
        unSubscribe(e) {
            let t = this.numberOfSubscriptions.find(a => a.isin === e);
            t && t.count === 1 ? this.unSubscribeAll(e) : t && t.count > 1 && t.count--
        }
        getDataFromApiAtStart(e) {
            return this.getAllMarketSheets(e).pipe(Ot(1), X( () => this.clear()), X(a => {
                a.buySheets.forEach(c => {
                    this.buySheets.find(p => p.price === c.price) || this.buySheets.push(c)
                }
                ),
                a.sellSheets.forEach(c => {
                    this.sellSheets.find(p => p.price === c.price) || this.sellSheets.push(c)
                }
                ),
                this.sortBuySheets(),
                this.sortSellSheets(),
                this.dispatchNextData()
            }
            ), me( () => se(null)))
        }
        unSubscribeAll(e) {
            this.clear(),
            this.subscriptions.forEach(t => {
                t.unsubscribe()
            }
            ),
            this.lsService.unsubscribeSchema(re.MarketSheetChartBuy, e),
            this.lsService.unsubscribeSchema(re.MarketSheetChartSell, e),
            this.numberOfSubscriptions = [],
            this.refreshIntervalForLs && this.refreshIntervalForLs.unsubscribe()
        }
        subscribeOnLsConnectionOrPollData(e) {
            let t = this.lsService.lsConnected$.subscribe(a => {
                this.refreshIntervalForLs || (a ? this.subscribeToLs(e) : this.pollingData(e))
            }
            );
            this.subscriptions.push(t)
        }
        pollingData(e) {
            this.refreshIntervalForLs = Mi(2e3).pipe(X( () => {
                this.getAllMarketSheets(e).pipe(X(t => {
                    this.sellSheets = t.sellSheets,
                    this.buySheets = t.buySheets,
                    this.dispatchNextData()
                }
                )).subscribe()
            }
            )).subscribe()
        }
        getAllMarketSheets(e) {
            return this.httpService.get(`${this.mtsPath + this.apiUrls.marketSheet}all/${e}`)
        }
        subscribeToLs(e) {
            this.lsService.subscribeToLsBySchema(re.MarketSheetChartBuy, e).subscribe(t => {
                t.name === "meta" && this.buySheetMessageHandler(t)
            }
            ),
            this.lsService.subscribeToLsBySchema(re.MarketSheetChartSell, e).subscribe(t => {
                t.name === "meta" && this.sellSheetMessageHandler(t)
            }
            )
        }
        buySheetMessageHandler(e) {
            e.val && (this.handleMessage(e.val, this.buySheets, Wt.Buy),
            this.dispatchNextData())
        }
        sellSheetMessageHandler(e) {
            e.val && (this.handleMessage(e.val, this.sellSheets, Wt.Sell),
            this.dispatchNextData())
        }
        handleMessage(e, t, a) {
            this.deserializeLSMessage(e).forEach(p => {
                let h = {
                    amount: p.a,
                    price: p.p,
                    volume: p.v
                };
                switch (p.cmd) {
                case "add":
                    this.addOrReplace(h, t, a);
                    break;
                case "del":
                    this.deleteItemFromList(h, t);
                    break;
                case "upd":
                    this.addOrReplace(h, t, a);
                    break;
                default:
                    break
                }
            }
            ),
            this.dispatchNextData()
        }
        deserializeLSMessage(e) {
            let t = [];
            return e.split("$").forEach(c => {
                if (c) {
                    let p = c.split(":")
                      , h = p[0]
                      , x = p[1].split("|");
                    t.push(...x.map(U => ({
                        cmd: h,
                        a: h !== "del" ? +U.split(" ")[0] : void 0,
                        p: h !== "del" ? +U.split(" ")[1] : +U,
                        v: h !== "del" ? +U.split(" ")[2] : void 0
                    })))
                }
            }
            ),
            t
        }
        addOrReplace(e, t, a) {
            this.replaceItemToList(e, t) < 0 && this.addToList(e, t, a)
        }
        addToList(e, t, a) {
            t.push(e),
            a === Wt.Buy ? this.sortBuySheets() : this.sortSellSheets()
        }
        replaceItemToList(e, t) {
            let a = t.findIndex(c => c.price === e.price);
            return a > -1 && t.splice(a, 1, e),
            a
        }
        deleteItemFromList(e, t) {
            let a = t.findIndex(c => c.price === e.price);
            a > -1 && t.splice(a, 1)
        }
        sortBuySheets() {
            this.buySheets.sort(this.descendingComparer.bind(this))
        }
        sortSellSheets() {
            this.sellSheets.sort(this.ascendingComparer.bind(this))
        }
        descendingComparer(e, t) {
            let a = t.price - e.price;
            if (a !== 0)
                return a
        }
        ascendingComparer(e, t) {
            let a = e.price - t.price;
            if (a !== 0)
                return a
        }
        dispatchNextData() {
            this.sheetsData.next({
                buy: this.buySheets,
                sell: this.sellSheets
            })
        }
        clear() {
            this.buySheets = [],
            this.sellSheets = []
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275prov = Ce({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let i = o;
    return i
}
)();
function Vo(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "a", 8),
        b("tap", function() {
            g(n),
            d();
            let t = oe(18);
            return f(t)
        }),
        C(1, "svg-icon", 9),
        s()
    }
    if (i & 2) {
        let n = d()
          , e = oe(18);
        m("ngbPopover", e),
        l(),
        m("iconName", n.icons.QuestionBox)
    }
}
function Oo(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "svg-icon", 10),
        b("tap", function() {
            g(n),
            d();
            let t = oe(18);
            return f(t)
        }),
        s()
    }
    if (i & 2) {
        let n = d()
          , e = oe(18);
        m("iconName", n.icons.QuestionBox)("ngbPopover", e)
    }
}
function No(i, o) {
    i & 1 && (r(0, "span", 12),
    u(1, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F "),
    s())
}
function Lo(i, o) {
    i & 1 && (r(0, "a", 13),
    u(1, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F "),
    s())
}
function Bo(i, o) {
    if (i & 1 && (r(0, "div", 11),
    u(1, " \u0645\u0642\u0627\u062F\u06CC\u0631 \u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u062F\u0631 \u0627\u06CC\u0646 \u0628\u062E\u0634\u060C \u062C\u0645\u0639 \u06A9\u0644 \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u0628\u0627\u0632 \u062F\u0631 \u0622\u0633\u062A\u0627\u0646\u0647 \u0645\u062C\u0627\u0632 \u0633\u0647\u0645 \u0627\u0633\u062A. "),
    S(2, No, 2, 0, "span", 12)(3, Lo, 2, 0, "a", 13),
    s()),
    i & 2) {
        let n = d();
        l(2),
        y(n.isMobile() ? 3 : 2)
    }
}
var qn = ( () => {
    let o = class o {
        constructor() {
            this.icons = R,
            this.isMobile = _(!1),
            this.marketSheetService = $(qe),
            this.marketSheetLsService = $(St),
            this.activeSymbolIsin = _(""),
            this._activeSymbolIsin = T(""),
            this.marketSheetFirstInit$ = V(this._activeSymbolIsin).pipe(F( () => ({
                buyCount: 0,
                sellCount: 0,
                buyVolume: 0,
                sellVolume: 0
            }))),
            this.marketSheetLSData$ = V(this._activeSymbolIsin).pipe(L(e => !!e), E(e => this.subscribeToMarketSheet(e))),
            this.marketSheetApi$ = V(this._activeSymbolIsin).pipe(ct(1), L(e => !!e), E(e => this.getMarketSheetDataFromApi(e)), me( () => se({
                buyCount: 0,
                sellCount: 0,
                buyVolume: 0,
                sellVolume: 0
            }))),
            this.marketSheet$ = this.marketSheetFirstInit$.pipe(fe(this.marketSheetApi$, this.marketSheetLSData$)),
            this.marketSheet = A(this.marketSheet$),
            ue( () => {
                this.activeSymbolIsin() && this._activeSymbolIsin() !== this.activeSymbolIsin() && (this._activeSymbolIsin.set(this.activeSymbolIsin()),
                this.unsubscribeLs())
            }
            )
        }
        subscribeToMarketSheet(e) {
            return this.marketSheetLsService.subscribeToLsBySchema(re.MarketSheet, e).pipe(F(t => ({
                buyCount: +t?.val[ie.MarketSheetSchema.BuyCount],
                sellCount: +t?.val[ie.MarketSheetSchema.SellCount],
                buyVolume: +t?.val[ie.MarketSheetSchema.BuyVolume],
                sellVolume: +t?.val[ie.MarketSheetSchema.SellVolume]
            })))
        }
        getMarketSheetDataFromApi(e) {
            return this.marketSheetService.getMarketSheetAggregateData(e).pipe(F(t => ({
                buyCount: t.buyCount,
                sellCount: t.sellCount,
                buyVolume: t.buyVolume,
                sellVolume: t.sellVolume
            })))
        }
        unsubscribeLs() {
            this.marketSheetLsService.unsubscribeSchema(re.MarketSheet, this._activeSymbolIsin())
        }
        ngOnDestroy() {
            this.unsubscribeLs()
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["lib-market-depth-aggregates"]],
        inputs: {
            isMobile: [1, "isMobile"],
            activeSymbolIsin: [1, "activeSymbolIsin"]
        },
        decls: 19,
        vars: 13,
        consts: [["risk", ""], [1, "market-depth-separator", "small", "text-body", "text-opacity-50"], ["href", "http://mfid.ir/mazane", "target", "_blank", "triggers", "mouseenter:mouseleave", 1, "text-muted", "cup", "order-1", "px-2", "position-relative", 2, "left", "-0.5rem", 3, "ngbPopover"], ["width", "18", "height", "18", "triggers", "mouseenter:mouseleave", 1, "text-muted", "cup", "order-1", "px-2", "position-relative", 2, "left", "-0.5rem", 3, "iconName", "ngbPopover"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-1"], [1, "text-center", 2, "width", "10%"], [1, "px-1", "text-success"], [1, "ms-auto", "px-1", "text-danger"], ["href", "http://mfid.ir/mazane", "target", "_blank", "triggers", "mouseenter:mouseleave", 1, "text-muted", "cup", "order-1", "px-2", "position-relative", 2, "left", "-0.5rem", 3, "tap", "ngbPopover"], ["width", "18", "height", "18", 3, "iconName"], ["width", "18", "height", "18", "triggers", "mouseenter:mouseleave", 1, "text-muted", "cup", "order-1", "px-2", "position-relative", 2, "left", "-0.5rem", 3, "tap", "iconName", "ngbPopover"], [1, "mb-2", "text-justify"], [1, "d-block", "small", "text-end", "text-primary", "mt-1"], ["href", "http://mfid.ir/mazane", "target", "_blank", 1, "d-block", "small", "text-end", "text-primary", "mt-1"]],
        template: function(t, a) {
            if (t & 1 && (r(0, "div", 1),
            u(1, " \u06A9\u0644 "),
            S(2, Vo, 2, 2, "a", 2)(3, Oo, 1, 2, "svg-icon", 3),
            s(),
            r(4, "div", 4)(5, "div", 5),
            u(6),
            M(7, "number"),
            s(),
            r(8, "div", 6),
            u(9),
            M(10, "number"),
            s(),
            r(11, "div", 7),
            u(12),
            M(13, "number"),
            s(),
            r(14, "div", 5),
            u(15),
            M(16, "number"),
            s()(),
            S(17, Bo, 4, 1, "ng-template", null, 0, be)),
            t & 2) {
                let c, p, h, x;
                l(2),
                y(a.isMobile() ? 3 : 2),
                l(4),
                k(" ", G(7, 5, (c = a.marketSheet()) == null ? null : c.buyCount), " "),
                l(3),
                N(G(10, 7, (p = a.marketSheet()) == null ? null : p.buyVolume)),
                l(3),
                k(" ", G(13, 9, (h = a.marketSheet()) == null ? null : h.sellVolume), " "),
                l(3),
                k(" ", G(16, 11, (x = a.marketSheet()) == null ? null : x.sellCount), " ")
            }
        },
        dependencies: [te, Q, Ye, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var ti = i => ({
    disabled: i
})
  , Zn = i => ({
    width: i
})
  , $o = i => ({
    "d-flex align-items-baseline": i
})
  , Jn = (i, o) => ({
    "text-success": i,
    "text-danger": o
});
function Uo(i, o) {
    if (i & 1 && (r(0, "span", 11),
    u(1),
    M(2, "percent"),
    s()),
    i & 2) {
        let n, e, t = d().$implicit, a = d();
        m("ngClass", pe(5, Jn, t.bestBuyLimitPrice > ((n = a.marketData()) == null ? null : n.feeOfPreviousDaysClosingPrice), t.bestBuyLimitPrice < ((n = a.marketData()) == null ? null : n.feeOfPreviousDaysClosingPrice))),
        l(),
        k(" ", ne(2, 2, (t.bestBuyLimitPrice - ((e = a.marketData()) == null ? null : e.feeOfPreviousDaysClosingPrice)) / ((e = a.marketData()) == null ? null : e.feeOfPreviousDaysClosingPrice), "1.1-2"), " ")
    }
}
function Ro(i, o) {
    if (i & 1 && (r(0, "span", 11),
    u(1),
    M(2, "percent"),
    s()),
    i & 2) {
        let n, e, t = d().$implicit, a = d();
        m("ngClass", pe(5, Jn, t.bestSellLimitPrice > ((n = a.marketData()) == null ? null : n.feeOfPreviousDaysClosingPrice), t.bestSellLimitPrice < ((n = a.marketData()) == null ? null : n.feeOfPreviousDaysClosingPrice))),
        l(),
        k(" ", ne(2, 2, (t.bestSellLimitPrice - ((e = a.marketData()) == null ? null : e.feeOfPreviousDaysClosingPrice)) / ((e = a.marketData()) == null ? null : e.feeOfPreviousDaysClosingPrice), "1.1-2"), " ")
    }
}
function jo(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "tr")(1, "td", 10),
        u(2),
        M(3, "number"),
        s(),
        r(4, "td", 11)(5, "div", 12),
        C(6, "div", 13),
        r(7, "div", 14)(8, "span", 15, 0),
        b("tap", function() {
            let t = g(n).$implicit
              , a = oe(9)
              , c = d();
            return a.open(),
            f(c.onMakeOrderOnPriceClick("buy", t.bestBuyLimitPrice))
        }),
        u(10),
        M(11, "number"),
        s(),
        r(12, "span", 16),
        b("tap", function() {
            let t = g(n)
              , a = t.$implicit
              , c = t.$index
              , p = d();
            return f(p.onMakeOrderOnQuantityClick("buy", c, a.bestBuyLimitPrice))
        }),
        u(13),
        M(14, "number"),
        s(),
        S(15, Uo, 3, 8, "ng-template", null, 1, be),
        s()()(),
        r(17, "td", 11)(18, "div", 17),
        C(19, "div", 13),
        r(20, "div", 14)(21, "span", 18),
        b("tap", function() {
            let t = g(n).$implicit
              , a = d();
            return f(a.onMakeOrderOnPriceClick("sell", t.bestSellLimitPrice))
        }),
        u(22),
        M(23, "number"),
        s(),
        r(24, "span", 16),
        b("tap", function() {
            let t = g(n)
              , a = t.$implicit
              , c = t.$index
              , p = d();
            return f(p.onMakeOrderOnQuantityClick("sell", c, a.bestSellLimitPrice))
        }),
        u(25),
        M(26, "number"),
        s(),
        S(27, Ro, 3, 8, "ng-template", null, 2, be),
        s()()(),
        r(29, "td", 10),
        u(30),
        M(31, "number"),
        s()()
    }
    if (i & 2) {
        let n, e, t, a, c = o.$implicit, p = oe(16), h = oe(28), x = d();
        l(),
        m("ngClass", D(35, ti, c.bestBuyLimitPrice > ((n = x.marketData()) == null ? null : n.maxDailyPrice) || c.bestBuyLimitPrice < ((n = x.marketData()) == null ? null : n.minDailyPrice))),
        l(),
        k(" ", ne(3, 17, c.numberOfOrdersAtBestBuy, "1.0-0"), " "),
        l(2),
        m("ngClass", D(37, ti, c.bestBuyLimitPrice > ((e = x.marketData()) == null ? null : e.maxDailyPrice) || c.bestBuyLimitPrice < ((e = x.marketData()) == null ? null : e.minDailyPrice))),
        l(2),
        m("ngStyle", D(39, Zn, x.maxQuantity() ? c.bestBuyLimitQuantity * 100 / x.maxQuantity() + "%" : "0%")),
        l(2),
        m("ngClass", D(41, $o, x.isMobile()))("triggers", x.isMobile() ? "click:blur" : "mouseenter:mouseleave")("ngbTooltip", p),
        l(2),
        k(" ", ne(11, 20, c.bestBuyLimitPrice, "1.0-0"), " "),
        l(3),
        k(" ", ne(14, 23, c.bestBuyLimitQuantity, "1.0-0"), " "),
        l(4),
        m("ngClass", D(43, ti, c.bestSellLimitPrice > ((t = x.marketData()) == null ? null : t.maxDailyPrice) || c.bestSellLimitPrice < ((t = x.marketData()) == null ? null : t.minDailyPrice))),
        l(2),
        m("ngStyle", D(45, Zn, x.maxQuantity() ? c.bestSellLimitQuantity * 100 / x.maxQuantity() + "%" : "0%")),
        l(2),
        m("triggers", x.isMobile() ? "click:blur" : "mouseenter:mouseleave")("ngbTooltip", h),
        l(),
        k(" ", ne(23, 26, c.bestSellLimitPrice, "1.0-0"), " "),
        l(3),
        k(" ", ne(26, 29, c.bestSellLimitQuantity, "1.0-0"), " "),
        l(4),
        m("ngClass", D(47, ti, c.bestSellLimitPrice > ((a = x.marketData()) == null ? null : a.maxDailyPrice) || c.bestSellLimitPrice < ((a = x.marketData()) == null ? null : a.minDailyPrice))),
        l(),
        k(" ", ne(31, 32, c.numberOfOrdersAtBestSell, "1.0-0"), " ")
    }
}
var Kn = ( () => {
    let o = class o {
        constructor() {
            this.isMobile = _(!1),
            this.activeSymbolIsin = _(),
            this.marketDataInput = _(),
            this.loadingEvent = B(),
            this.makeOrderOnQuantityClick = B(),
            this.makeOrderOnPriceClick = B(),
            this.marketSheetService = $(qe),
            this.lsService = $(Ee),
            this.marketDataService = $(Ae),
            this._activeSymbolIsin = T(""),
            this.marketData = T(J({}, Gt)),
            this.lsDataSymbolIsin = "",
            this.maxQuantity = K( () => Math.max(...this.depthValues().map(e => e.bestBuyLimitQuantity), ...this.depthValues().map(e => e.bestSellLimitQuantity))),
            this.depthValueFirstInit$ = V(this._activeSymbolIsin).pipe(F( () => {
                let e = {
                    bestBuyLimitQuantity: 0,
                    bestBuyLimitPrice: 0,
                    bestSellLimitPrice: 0,
                    bestSellLimitQuantity: 0,
                    numberOfOrdersAtBestSell: 0,
                    numberOfOrdersAtBestBuy: 0
                }
                  , t = Array(5).fill(J({}, e));
                return this.loadingEvent.emit(!0),
                t
            }
            )),
            this.depthValueApi$ = V(this._activeSymbolIsin).pipe(wt(3e3), L(e => !!e && e.length > 10), ke(this.lsService.lsConnectedSubject.pipe(X( () => {
                this.lsDataSymbolIsin = ""
            }
            ), L(e => !e), ut())), F( ([e]) => e), E( () => Me(7e3, 7e3)), L( () => this.lsDataSymbolIsin !== this._activeSymbolIsin()), E( () => (this.loadingEvent.emit(!1),
            this.getBestLimitFromAPI(this._activeSymbolIsin())))),
            this.depthValueLsObservable$ = this.depthValueFirstInit$.pipe(ct(1), E( () => this.getBestLimitFromLS())),
            this.depthValues$ = this.depthValueFirstInit$.pipe(fe(this.depthValueLsObservable$, this.depthValueApi$), L(e => !!e && e !== Vt)),
            this.depthValues = A(this.depthValues$),
            ue( () => {
                let e = it( () => this._activeSymbolIsin());
                this.activeSymbolIsin() && e !== this.activeSymbolIsin() && (e && this.destroyDataFlow(e),
                this._activeSymbolIsin.set(this.activeSymbolIsin()),
                this.updateMarketSheetsDataService())
            }
            ),
            ue( () => {
                this.marketDataInput() && (this.marketData.set(this.marketDataInput()),
                this.updateMarketSheetsDataService())
            }
            )
        }
        getBestLimitFromLS() {
            return this.lsService.subscribeToLs(re.BestLimit, this._activeSymbolIsin()).pipe(F(e => {
                if (e.inst === this._activeSymbolIsin())
                    return this.lsDataSymbolIsin = e.inst,
                    this.loadingEvent.emit(!1),
                    this.mapLsDataToProperData(e)
            }
            ))
        }
        getBestLimitFromAPI(e=this._activeSymbolIsin()) {
            return this.marketDataService.GetSymbolDetailsMarketDepth(e).pipe(F(t => this.mapApiDataToProperData(t)))
        }
        updateMarketSheetsDataService() {
            this.marketSheetService.stockDepthDetails.next({
                isin: this._activeSymbolIsin(),
                highAllowed: this.marketData()?.maxDailyPrice,
                lowAllowed: this.marketData()?.minDailyPrice,
                yesterday: this.marketData()?.feeOfPreviousDaysClosingPrice
            })
        }
        destroyDataFlow(e) {
            this.lsService.unsubscribeSchema(re.BestLimit, e)
        }
        mapApiDataToProperData(e) {
            if (!e)
                return;
            let t = this.depthValues();
            for (let a = 0; a < e.queues.length; a++)
                t[a] = {
                    bestBuyLimitQuantity: +e.queues[a]?.bestBuyQuantity,
                    bestBuyLimitPrice: +e.queues[a].bestBuyPrice,
                    bestSellLimitPrice: +e.queues[a].bestSellPrice,
                    bestSellLimitQuantity: +e.queues[a].bestSellQuantity,
                    numberOfOrdersAtBestBuy: +e.queues[a].noBestBuy,
                    numberOfOrdersAtBestSell: +e.queues[a].noBestSell
                };
            return this.marketData.set(De(J({}, e), {
                maxDailyPrice: e.highAllowedPrice,
                minDailyPrice: e.lowAllowedPrice,
                firstTradedPrice: e.firstPrice,
                maxDailyTradedPrice: e.highPrice,
                minDailyTradedPrice: e.lowPrice
            })),
            [...t]
        }
        mapLsDataToProperData(e) {
            let t = [];
            if (e.inst === this._activeSymbolIsin())
                if (e.val)
                    for (let a = 1; a < 6; a++)
                        t.push({
                            bestBuyLimitPrice: e.val["buy-price-" + a] ?? 0,
                            bestSellLimitPrice: e.val["sell-price-" + a] ?? 0,
                            bestBuyLimitQuantity: e.val["buy-volume-" + a] ?? 0,
                            bestSellLimitQuantity: e.val["sell-volume-" + a] ?? 0,
                            numberOfOrdersAtBestBuy: e.val["buy-order-count-" + a] ?? 0,
                            numberOfOrdersAtBestSell: e.val["sell-order-count-" + a] ?? 0
                        });
                else
                    for (let a = 0; a < 5; a++)
                        t.push({
                            bestBuyLimitQuantity: 0,
                            bestBuyLimitPrice: 0,
                            bestSellLimitPrice: 0,
                            bestSellLimitQuantity: 0,
                            numberOfOrdersAtBestSell: 0,
                            numberOfOrdersAtBestBuy: 0
                        });
            return [...t]
        }
        ngOnDestroy() {
            this.destroyDataFlow(this._activeSymbolIsin())
        }
        calculateQuantityFromOrderDepth(e, t) {
            let a = 0;
            for (let c = 0; c <= e; c++)
                t === ye.BUY && (a += +this.depthValues()[c].bestBuyLimitQuantity),
                t === ye.SELL && (a += +this.depthValues()[c].bestSellLimitQuantity);
            return a
        }
        revertSide(e) {
            if (e === ye.BUY)
                return ye.SELL;
            if (e === ye.SELL)
                return ye.BUY
        }
        onMakeOrderOnPriceClick(e, t) {
            let a = this.revertSide(e)
              , c = {
                isin: this._activeSymbolIsin(),
                side: a,
                quantity: null,
                price: t,
                type: 2
            };
            this.makeOrderOnPriceClick.emit(c)
        }
        onMakeOrderOnQuantityClick(e, t, a, c) {
            let p = this.revertSide(e);
            c || (c = this.calculateQuantityFromOrderDepth(t, e));
            let h = {
                isin: this._activeSymbolIsin(),
                side: p,
                quantity: c,
                price: a,
                type: 2
            };
            this.makeOrderOnQuantityClick.emit(h)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["market-depth-best-limit"]],
        inputs: {
            isMobile: [1, "isMobile"],
            activeSymbolIsin: [1, "activeSymbolIsin"],
            marketDataInput: [1, "marketDataInput"]
        },
        outputs: {
            loadingEvent: "loadingEvent",
            makeOrderOnQuantityClick: "makeOrderOnQuantityClick",
            makeOrderOnPriceClick: "makeOrderOnPriceClick"
        },
        decls: 30,
        vars: 2,
        consts: [["t", "ngbTooltip"], ["buyTipContent", ""], ["sellTipContent", ""], [1, "rounded-top", "bg-principal", "p-2"], [1, "market-depth"], [1, "w-100"], ["width", "10%"], [1, "text-muted", "text-center"], [1, "d-flex", "justify-content-between", "p-2"], [3, "isMobile", "activeSymbolIsin"], [1, "text-center", 3, "ngClass"], [3, "ngClass"], [1, "progress", "bid"], [1, "progress-bar", 3, "ngStyle"], [1, "data", "d-flex", "justify-content-between", "align-items-center"], ["data-cy", "best-buy-limit-price", "placement", "right", 1, "taptext", "cup", 3, "tap", "ngClass", "triggers", "ngbTooltip"], [1, "taptext", "cup", 3, "tap"], [1, "progress", "ask"], ["data-cy", "best-sell-limit-price", "placement", "left", 1, "taptext", "cup", 3, "tap", "triggers", "ngbTooltip"]],
        template: function(t, a) {
            t & 1 && (r(0, "div", 3)(1, "div", 4)(2, "table", 5)(3, "colgroup"),
            C(4, "col", 6)(5, "col")(6, "col")(7, "col", 6),
            s(),
            r(8, "thead")(9, "tr")(10, "th", 7),
            u(11, "\u062A\u0639\u062F\u0627\u062F"),
            s(),
            r(12, "th", 7)(13, "div", 8)(14, "span"),
            u(15, "\u062D\u062C\u0645"),
            s(),
            r(16, "span"),
            u(17, " \u0642\u06CC\u0645\u062A "),
            s()()(),
            r(18, "th", 7)(19, "div", 8)(20, "span"),
            u(21, "\u0642\u06CC\u0645\u062A "),
            s(),
            r(22, "span"),
            u(23, "\u062D\u062C\u0645"),
            s()()(),
            r(24, "th", 7),
            u(25, "\u062A\u0639\u062F\u0627\u062F"),
            s()()(),
            r(26, "tbody"),
            z(27, jo, 32, 49, "tr", null, Se),
            s()(),
            C(29, "lib-market-depth-aggregates", 9),
            s()()),
            t & 2 && (l(27),
            W(a.depthValues()),
            l(2),
            m("isMobile", a.isMobile())("activeSymbolIsin", a._activeSymbolIsin()))
        },
        dependencies: [te, Y, Fe, Q, $t, qn, Xe],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var Ho = i => ({
    disabled: i
})
  , Qo = i => ({
    "rotate-180": i
})
  , zo = i => ({
    "--candlestick-bg": i
})
  , Wo = i => ({
    showTooltip: i
})
  , Go = (i, o, n) => ({
    "badge-arrow-left": i,
    "badge-arrow-right": o,
    "d-none": n
})
  , Yo = (i, o) => ({
    "text-danger": i,
    "text-success": o
})
  , Xo = (i, o, n) => ({
    "text-danger": i,
    "text-success": o,
    "d-none": n
})
  , ea = i => ({
    left: i
});
function qo(i, o) {
    if (i & 1 && (r(0, "div", 4),
    u(1),
    M(2, "number"),
    s()),
    i & 2) {
        let n, e = d();
        l(),
        k(" ", ne(2, 1, (n = e.marketData()) == null ? null : n.minDailyPrice, "1.0-0"), " ")
    }
}
function Zo(i, o) {
    if (i & 1 && (r(0, "div", 15),
    u(1),
    M(2, "number"),
    s()),
    i & 2) {
        let n, e, t, a = d();
        Ne("left", ((n = a.yesterdayPositions()) == null ? null : n.left) + "%")("right", ((e = a.yesterdayPositions()) == null ? null : e.right) + "%"),
        l(),
        k(" ", ne(2, 5, (t = a.marketData()) == null ? null : t.feeOfPreviousDaysClosingPrice, "1.0-0"), " ")
    }
}
function Jo(i, o) {
    if (i & 1 && (r(0, "div", 6),
    u(1),
    M(2, "number"),
    s()),
    i & 2) {
        let n, e = d();
        l(),
        k(" ", ne(2, 1, (n = e.marketData()) == null ? null : n.maxDailyPrice, "1.0-0"), " ")
    }
}
function Ko(i, o) {
    if (i & 1 && (r(0, "div", 22),
    u(1),
    M(2, "number"),
    r(3, "span", 21),
    u(4),
    M(5, "number"),
    s()()),
    i & 2) {
        let n, e, t, a = d(3);
        l(),
        k(" ", ne(2, 3, (n = a.tooltip()) == null ? null : n.tooltipPrice, "1.0-0"), " "),
        l(2),
        m("ngClass", At(9, Xo, ((e = a.tooltip()) == null ? null : e.tooltipPercent) < 0, ((e = a.tooltip()) == null ? null : e.tooltipPercent) > 0, !a.showMobileTooltip())),
        l(),
        k(" (", ne(5, 6, (t = a.tooltip()) == null ? null : t.tooltipPercent, "1.0-1"), "%) ")
    }
}
function er(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 18),
        S(1, Ko, 6, 13, "div", 22),
        r(2, "input", 23),
        b("input", function() {
            g(n);
            let t = d(2);
            return t.setMobileTooltipLabel(),
            f(t.editMobileOrderPriceBySwipeRangeBar())
        })("mouseleave", function() {
            g(n);
            let t = d(2);
            return f(t.hideMobileTooltip())
        }),
        s()()
    }
    if (i & 2) {
        let n, e, t, a, c = d(2);
        l(),
        y(c.showMobileTooltip() ? 1 : -1),
        l(),
        m("min", c.isOption() ? 0 : (n = c.marketData()) == null ? null : n.minDailyPrice)("max", c.isOption() ? ((e = c.marketData()) == null ? null : e.feeOfPreviousDaysClosingPrice) * 2 : (e = c.marketData()) == null ? null : e.maxDailyPrice)("value", (((t = c.marketData()) == null ? null : t.maxDailyPrice) + ((t = c.marketData()) == null ? null : t.minDailyPrice)) / 2)("step", (a = c.symbolDataInput()) == null ? null : a.minDealablePrice)
    }
}
function tr(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 7)(1, "div", 16),
        C(2, "div", 17),
        s(),
        S(3, er, 3, 5, "div", 18),
        r(4, "div", 19),
        b("mouseenter", function() {
            g(n);
            let t = d();
            return f(t.showDesktopTooltip.set(!0))
        })("mousemove", function(t) {
            g(n);
            let a = d();
            return f(a.setDesktopTooltipLabel(t))
        })("mouseleave", function() {
            g(n);
            let t = d();
            return f(t.hideDesktopTooltip())
        }),
        r(5, "div", 20),
        u(6),
        M(7, "number"),
        r(8, "span", 21),
        u(9),
        M(10, "number"),
        s()()()()
    }
    if (i & 2) {
        let n, e, t, a, c, p = d();
        m("ngStyle", D(23, zo, ((n = p.marketData()) == null ? null : n.lastTradedPrice) >= ((n = p.marketData()) == null ? null : n.firstTradedPrice) ? " #1bbf89" : "#db524b")),
        l(),
        Ne("left", p.candleParent().left + "%")("right", p.candleParent().right + "%"),
        l(),
        Ne("left", p.candleBody().left + "%")("right", p.candleBody().right + "%"),
        l(),
        y(p.isMobile() ? 3 : -1),
        l(),
        m("id", p.candlestickId)("ngClass", D(25, Wo, p.showDesktopTooltip())),
        l(),
        m("id", p.tooltipId)("ngClass", At(27, Go, ((e = p.tooltip()) == null ? null : e.tooltipPosition) === "left", ((e = p.tooltip()) == null ? null : e.tooltipPosition) === "right", !p.showDesktopTooltip())),
        l(),
        k(" ", ne(7, 17, (t = p.tooltip()) == null ? null : t.tooltipPrice, "1.0-0"), " "),
        l(2),
        m("ngClass", pe(31, Yo, ((a = p.tooltip()) == null ? null : a.tooltipPercent) < 0, ((a = p.tooltip()) == null ? null : a.tooltipPercent) > 0)),
        l(),
        k(" (", ne(10, 20, (c = p.tooltip()) == null ? null : c.tooltipPercent, "1.0-1"), "%) ")
    }
}
function ir(i, o) {
    if (i & 1 && C(0, "svg-icon", 8),
    i & 2) {
        let n = d();
        m("iconName", n.icons.GestureTap)
    }
}
function nr(i, o) {
    if (i & 1 && (r(0, "div", 24),
    M(1, "number"),
    C(2, "svg-icon", 25),
    s(),
    r(3, "div", 26),
    M(4, "number"),
    C(5, "svg-icon", 25),
    s()),
    i & 2) {
        let n, e, t, a, c = d();
        m("ngStyle", D(12, ea, c.isMobile() ? c.lastPercent() + "%" : "calc(" + c.lastPercent() + "% - 5px)"))("ngbTooltip", "\u0622\u062E\u0631\u06CC\u0646: " + G(1, 8, (n = c.marketData()) == null ? null : n.lastTradedPrice))("placement", ((e = c.marketData()) == null ? null : e.lastTradedPrice) >= ((e = c.marketData()) == null ? null : e.feeOfPreviousDaysClosingPrice) ? "left" : "right"),
        l(2),
        m("iconName", c.icons.CaretDownFill),
        l(),
        m("ngStyle", D(14, ea, c.isMobile() ? c.closingPercent() + "%" : "calc(" + c.closingPercent() + "% - 5px)"))("ngbTooltip", "\u067E\u0627\u06CC\u0627\u0646\u06CC: " + G(4, 10, (t = c.marketData()) == null ? null : t.closingPrice))("placement", ((a = c.marketData()) == null ? null : a.closingPrice) >= ((a = c.marketData()) == null ? null : a.feeOfPreviousDaysClosingPrice) ? "left" : "right"),
        l(2),
        m("iconName", c.icons.CaretUpFill)
    }
}
function ar(i, o) {
    if (i & 1 && (r(0, "div", 10)(1, "div", 27)(2, "span", 28),
    u(3, "\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646:"),
    s(),
    u(4),
    M(5, "number"),
    s(),
    r(6, "div", 29)(7, "span", 28),
    u(8),
    s(),
    u(9),
    M(10, "number"),
    s(),
    r(11, "div", 30)(12, "span", 28),
    u(13),
    s(),
    u(14),
    M(15, "number"),
    s(),
    r(16, "div", 31)(17, "span", 28),
    u(18, "\u06A9\u0645\u062A\u0631\u06CC\u0646:"),
    s(),
    u(19),
    M(20, "number"),
    s()()),
    i & 2) {
        let n, e, t, a, c, p, h = d();
        l(4),
        k(" ", G(5, 6, (n = h.marketData()) == null ? null : n.maxDailyTradedPrice), " "),
        l(4),
        k("", ((e = h.marketData()) == null ? null : e.firstTradedPrice) > ((e = h.marketData()) == null ? null : e.lastTradedPrice) ? "\u0627\u0648\u0644\u06CC\u0646" : "\u0622\u062E\u0631\u06CC\u0646", ":"),
        l(),
        k(" ", G(10, 8, ((t = h.marketData()) == null ? null : t.firstTradedPrice) > ((t = h.marketData()) == null ? null : t.lastTradedPrice) ? (t = h.marketData()) == null ? null : t.firstTradedPrice : (t = h.marketData()) == null ? null : t.lastTradedPrice), " "),
        l(4),
        k("", ((a = h.marketData()) == null ? null : a.firstTradedPrice) > ((a = h.marketData()) == null ? null : a.lastTradedPrice) ? "\u0622\u062E\u0631\u06CC\u0646" : "\u0627\u0648\u0644\u06CC\u0646", ":"),
        l(),
        k(" ", G(15, 10, ((c = h.marketData()) == null ? null : c.firstTradedPrice) > ((c = h.marketData()) == null ? null : c.lastTradedPrice) ? (c = h.marketData()) == null ? null : c.lastTradedPrice : (c = h.marketData()) == null ? null : c.firstTradedPrice), " "),
        l(5),
        k(" ", G(20, 12, (p = h.marketData()) == null ? null : p.minDailyTradedPrice), " ")
    }
}
function or(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "svg-icon", 32),
        b("tap", function() {
            g(n),
            d();
            let t = oe(16);
            return f(t)
        }),
        s()
    }
    if (i & 2) {
        let n = d()
          , e = oe(16);
        m("iconName", n.icons.QuestionBox)("ngbPopover", e)
    }
}
function rr(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "a", 33),
        b("tap", function() {
            g(n),
            d();
            let t = oe(16);
            return f(t)
        }),
        C(1, "svg-icon", 34),
        s()
    }
    if (i & 2) {
        let n = d()
          , e = oe(16);
        m("ngbPopover", e),
        l(),
        m("iconName", n.icons.QuestionBox)
    }
}
function lr(i, o) {
    i & 1 && (r(0, "a", 35),
    C(1, "div", 36),
    r(2, "span", 37),
    u(3, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F "),
    s()())
}
var ta = "swipeExists"
  , ia = ( () => {
    let o = class o {
        constructor() {
            this.icons = R,
            this.isMobile = _(!1),
            this.activeSymbolIsin = _(""),
            this.marketData = _(),
            this.symbolDataInput = _(),
            this.makeOrderOnPriceChartClick = B(),
            this.isOption = K( () => He(this.symbolDataInput()?.marketUnit)),
            this.swipeExists = T(!localStorage.getItem(ta)),
            this.tooltip = T({
                tooltipPosition: "",
                tooltipPrice: 0,
                tooltipPercent: 0
            }),
            this.showDesktopTooltip = T(!1),
            this.showMobileTooltip = T(!1),
            this.candleStickTipsToggle = T(!1),
            this.closingPercent = K( () => {
                let e = 50;
                if (this.marketData()?.minDailyPrice === this.marketData()?.maxDailyPrice)
                    return e;
                let t = this.isOption() ? 0 : this.marketData()?.minDailyPrice
                  , a = this.isOption() ? this.marketData()?.feeOfPreviousDaysClosingPrice * 2 : this.marketData()?.maxDailyPrice;
                return this.marketData()?.closingPrice && this.marketData()?.closingPrice > 0 && t >= 0 && a >= 0 && (e = (this.marketData()?.closingPrice - t) * 100 / (a - t)),
                e > 100 && (e = 100),
                e < 0 && (e = 0),
                e
            }
            ),
            this.lastPercent = K( () => {
                let e = 50;
                if (this.marketData()?.minDailyPrice === this.marketData()?.maxDailyPrice)
                    return e;
                let t = this.isOption() ? 0 : this.marketData()?.minDailyPrice
                  , a = this.isOption() ? this.marketData()?.feeOfPreviousDaysClosingPrice * 2 : this.marketData()?.maxDailyPrice;
                return this.marketData()?.lastTradedPrice && this.marketData()?.lastTradedPrice > 0 && t >= 0 && a >= 0 && (e = (this.marketData()?.lastTradedPrice - t) * 100 / (a - t)),
                e > 100 && (e = 100),
                e < 0 && (e = 0),
                e
            }
            ),
            this.yesterdayPositions = K( () => {
                if (this.isOption())
                    return {
                        left: 50,
                        right: 50
                    };
                if (this.marketData()?.feeOfPreviousDaysClosingPrice && this.marketData()?.feeOfPreviousDaysClosingPrice > 0 && this.marketData()?.minDailyPrice && this.marketData()?.maxDailyPrice && this.marketData()?.feeOfPreviousDaysClosingPrice - this.marketData()?.maxDailyPrice <= 0 && this.marketData()?.minDailyPrice - this.marketData()?.feeOfPreviousDaysClosingPrice <= 0) {
                    let e = (this.marketData()?.maxDailyPrice + this.marketData()?.minDailyPrice) / 2;
                    return this.marketData()?.feeOfPreviousDaysClosingPrice < e ? {
                        right: 100 - (this.marketData()?.feeOfPreviousDaysClosingPrice - this.marketData()?.minDailyPrice) * 100 / (e - this.marketData()?.minDailyPrice),
                        left: 0
                    } : this.marketData()?.feeOfPreviousDaysClosingPrice > e ? {
                        left: 100 - (this.marketData()?.maxDailyPrice - this.marketData()?.feeOfPreviousDaysClosingPrice) * 100 / (this.marketData()?.maxDailyPrice - e),
                        right: 0
                    } : {
                        left: 0,
                        right: 0
                    }
                }
            }
            ),
            this.percents = K( () => ({
                lowPercent: (this.marketData()?.minDailyTradedPrice - this.marketData()?.feeOfPreviousDaysClosingPrice) * 100 / this.marketData()?.feeOfPreviousDaysClosingPrice,
                highPercent: (this.marketData()?.maxDailyTradedPrice - this.marketData()?.feeOfPreviousDaysClosingPrice) * 100 / this.marketData()?.feeOfPreviousDaysClosingPrice
            })),
            this.candleParent = K( () => this.marketData()?.minDailyPrice === this.marketData()?.maxDailyPrice ? {
                right: 50,
                left: 50
            } : this.isOption() ? {
                right: (this.marketData()?.feeOfPreviousDaysClosingPrice * 2 - this.marketData()?.maxDailyTradedPrice) / (this.marketData()?.feeOfPreviousDaysClosingPrice * 2) * 100,
                left: this.marketData()?.minDailyTradedPrice / (this.marketData()?.feeOfPreviousDaysClosingPrice * 2) * 100
            } : {
                right: (this.marketData()?.maxDailyPrice - this.marketData()?.maxDailyTradedPrice) / (this.marketData()?.maxDailyPrice - this.marketData()?.minDailyPrice) * 100,
                left: (this.marketData()?.minDailyTradedPrice - this.marketData()?.minDailyPrice) / (this.marketData()?.maxDailyPrice - this.marketData()?.minDailyPrice) * 100
            }),
            this.candleBody = K( () => this.marketData()?.minDailyPrice === this.marketData()?.maxDailyPrice ? {
                right: 50,
                left: 50
            } : {
                left: ((this.marketData()?.firstTradedPrice > this.marketData()?.lastTradedPrice ? this.marketData()?.lastTradedPrice : this.marketData()?.firstTradedPrice) - this.marketData()?.minDailyTradedPrice) / (this.marketData()?.maxDailyTradedPrice - this.marketData()?.minDailyTradedPrice) * 100,
                right: (this.marketData()?.maxDailyTradedPrice - (this.marketData()?.firstTradedPrice > this.marketData()?.lastTradedPrice ? this.marketData()?.firstTradedPrice : this.marketData()?.lastTradedPrice)) / (this.marketData()?.maxDailyTradedPrice - this.marketData()?.minDailyTradedPrice) * 100
            }),
            this.candlestickId = "candlestickId-" + Math.random().toString(36).slice(2, 10),
            this.tooltipId = "tooltip-" + Math.random().toString(36).slice(2, 10),
            this.orderService = $(ei)
        }
        editMobileOrderPriceBySwipeRangeBar() {
            this.orderService.updateOrderFromMarketDepthState({
                isin: this.activeSymbolIsin(),
                side: ye.BUY,
                quantity: null,
                price: this.tooltip().tooltipPrice,
                type: 1,
                justOverWrite: !0
            })
        }
        onMakeOrderOnPriceChartClickHandler() {
            let e = {
                isin: this.activeSymbolIsin(),
                side: ye.BUY,
                quantity: null,
                price: this.tooltip().tooltipPrice,
                type: 2
            };
            this.makeOrderOnPriceChartClick.emit(e)
        }
        setDesktopTooltipLabel(e) {
            this.showDesktopTooltip.set(!0);
            let t = document.getElementById(this.candlestickId).getBoundingClientRect()
              , a = t.width - 1
              , c = this.isOption() ? 0 : this.marketData()?.minDailyPrice
              , p = this.isOption() ? this.marketData()?.feeOfPreviousDaysClosingPrice * 2 : this.marketData()?.maxDailyPrice
              , h = p - c;
            this.tooltip.update(x => (x.tooltipPrice = Math.floor(((e.clientX - t.left) * h / a + c) / this.symbolDataInput()?.minDealablePrice) * this.symbolDataInput()?.minDealablePrice,
            J({}, x))),
            this.tooltip.update(x => (x.tooltipPrice = x.tooltipPrice < c ? Math.ceil(c / this.symbolDataInput()?.minDealablePrice) * this.symbolDataInput()?.minDealablePrice : x.tooltipPrice,
            J({}, x))),
            this.tooltip.update(x => (x.tooltipPrice = x.tooltipPrice > p ? Math.floor(p / this.symbolDataInput()?.minDealablePrice) * this.symbolDataInput()?.minDealablePrice : x.tooltipPrice,
            J({}, x))),
            this.tooltip.update(x => (x.tooltipPercent = (x.tooltipPrice - this.marketData()?.feeOfPreviousDaysClosingPrice) / this.marketData()?.feeOfPreviousDaysClosingPrice * 100,
            J({}, x))),
            setTimeout( () => {
                let x = document.getElementById(this.tooltipId)
                  , U = document.getElementById(this.tooltipId).getBoundingClientRect();
                e.clientX < a / 2 + t.left ? (x.style.left = e.clientX - t.left + "px",
                this.tooltip.update(H => (H.tooltipPosition = "right",
                J({}, H)))) : (x.style.left = e.clientX - t.left - U.width + "px",
                this.tooltip.update(H => (H.tooltipPosition = "left",
                J({}, H))))
            }
            )
        }
        setMobileTooltipLabel() {
            let e = this.isOption() ? 0 : this.marketData()?.minDailyPrice
              , t = this.isOption() ? this.marketData()?.feeOfPreviousDaysClosingPrice * 2 : this.marketData()?.maxDailyPrice;
            this.showMobileTooltip.set(!0),
            this.swipeExists && (this.swipeExists.set(!1),
            localStorage.setItem(ta, "true"));
            let a = document.getElementById("range-input");
            this.tooltip.update(c => (c.tooltipPrice = +a.value,
            J({}, c))),
            this.tooltip.update(c => (c.tooltipPercent = (c.tooltipPrice - this.marketData()?.feeOfPreviousDaysClosingPrice) / this.marketData()?.feeOfPreviousDaysClosingPrice * 100,
            J({}, c))),
            setTimeout( () => {
                let c = document.getElementById("range-tooltip")
                  , p = c.getBoundingClientRect()
                  , h = (e + t) / 2
                  , x = (this.tooltip().tooltipPrice - e) * 100 / (t - e);
                this.tooltip().tooltipPrice > h ? (c.style.left = `calc(${x}% - ${p.width}px)`,
                c.style.right = "initial",
                c.classList.add("badge-arrow-left"),
                c.classList.remove("badge-arrow-right")) : (c.style.right = `calc(${100 - x}% - ${p.width}px)`,
                c.style.left = "initial",
                c.classList.add("badge-arrow-right"),
                c.classList.remove("badge-arrow-left"))
            }
            )
        }
        hideMobileTooltip() {
            this.showMobileTooltip.set(!1)
        }
        hideDesktopTooltip() {
            this.showDesktopTooltip.set(!1)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["symbol-detail-candle"]],
        inputs: {
            isMobile: [1, "isMobile"],
            activeSymbolIsin: [1, "activeSymbolIsin"],
            marketData: [1, "marketData"],
            symbolDataInput: [1, "symbolDataInput"]
        },
        outputs: {
            makeOrderOnPriceChartClick: "makeOrderOnPriceChartClick"
        },
        decls: 17,
        vars: 15,
        consts: [["candle", ""], [1, "rounded", "bg-principal", "pt-3", "px-3", "mb-2", "position-relative"], ["id", "priceChart", 1, "price-chart", "d-flex", "flex-column", "justify-content-end", "1mb-3", "1mb-md-4", "pt-4", 3, "click"], [1, "progress", 3, "ngClass"], ["id", "minPrice", 1, "point", "min-price"], ["id", "prevPrice", 1, "point", "prev-price", 3, "left", "right"], ["id", "maxPrice", 1, "point", "max-price"], [1, "candlestick", 3, "ngStyle"], ["width", "24", "height", "24", 1, "position-absolute", "right-50", "text-muted", 2, "margin-right", "5px", "margin-top", "2px", 3, "iconName"], [1, "candlestick-tips", "position-relative", "mt-3", "ml-3", 2, "z-index", "10", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-center"], ["width", "20", "height", "20", "id", "market-depth-chevron-id", 1, "text-muted", "mr-3", 3, "iconName", "ngClass"], ["width", "18", "height", "18", "popoverClass", "candle-popover", "triggers", "click:blur", "container", "body", 1, "text-muted", "cup", "position-absolute", "bottom-0", "z-10", "px-2", 2, "left", "0", 3, "iconName", "ngbPopover"], ["href", "https://learning.emofid.com/candle-in-orbis/", "target", "_blank", "popoverClass", "candle-popover", "triggers", "mouseenter:mouseleave", "container", "body", 1, "text-muted", "cup", "position-absolute", "z-10", "px-2", 2, "left", "-5px", "bottom", "2px", 3, "ngbPopover"], ["id", "prevPrice", 1, "point", "prev-price"], [1, "candlestick-shadow"], [1, "candlestick-realbody"], ["id", "range-bar", 1, "position-relative"], [1, "candlestick-tooltip", 3, "mouseenter", "mousemove", "mouseleave", "id", "ngClass"], ["dir", "ltr", 1, "badge", "position-absolute", 2, "bottom", "10px", "z-index", "10", 3, "id", "ngClass"], [3, "ngClass"], ["id", "range-tooltip", "dir", "ltr", 1, "badge", "position-absolute", 2, "bottom", "11px", "z-index", "10"], ["id", "range-input", "type", "range", "dir", "ltr", 1, "range-bar", 3, "input", "mouseleave", "min", "max", "value", "step"], [1, "pointer", 3, "ngStyle", "ngbTooltip", "placement"], ["width", "10", "height", "10", 3, "iconName"], [1, "pointer", "last", 3, "ngStyle", "ngbTooltip", "placement"], [1, "high-price", "tips-right"], [1, "text-muted", "small"], [1, "open-price", "tips-left"], [1, "close-price", "tips-right"], [1, "low-price", "tips-left"], ["width", "18", "height", "18", "popoverClass", "candle-popover", "triggers", "click:blur", "container", "body", 1, "text-muted", "cup", "position-absolute", "bottom-0", "z-10", "px-2", 2, "left", "0", 3, "tap", "iconName", "ngbPopover"], ["href", "https://learning.emofid.com/candle-in-orbis/", "target", "_blank", "popoverClass", "candle-popover", "triggers", "mouseenter:mouseleave", "container", "body", 1, "text-muted", "cup", "position-absolute", "z-10", "px-2", 2, "left", "-5px", "bottom", "2px", 3, "tap", "ngbPopover"], ["width", "18", "height", "18", 1, "", 3, "iconName"], ["href", "https://learning.emofid.com/candle-in-orbis/", "target", "_blank"], [1, "candle-popover-img"], [1, "d-block", "small", "text-end", "text-primary", "mt-1"]],
        template: function(t, a) {
            if (t & 1) {
                let c = I();
                r(0, "div", 1)(1, "div", 2),
                b("click", function() {
                    return g(c),
                    f(a.onMakeOrderOnPriceChartClickHandler())
                }),
                r(2, "div", 3),
                S(3, qo, 3, 4, "div", 4)(4, Zo, 3, 8, "div", 5)(5, Jo, 3, 4, "div", 6)(6, tr, 11, 34, "div", 7)(7, ir, 1, 1, "svg-icon", 8)(8, nr, 6, 16),
                s(),
                r(9, "div", 9),
                b("click", function(h) {
                    return g(c),
                    h.stopPropagation(),
                    f(a.candleStickTipsToggle.set(!a.candleStickTipsToggle()))
                }),
                S(10, ar, 21, 14, "div", 10),
                r(11, "div", 11),
                C(12, "svg-icon", 12),
                s()()(),
                S(13, or, 1, 2, "svg-icon", 13)(14, rr, 2, 2, "a", 14),
                s(),
                S(15, lr, 4, 0, "ng-template", null, 0, be)
            }
            if (t & 2) {
                let c, p, h, x;
                l(2),
                m("ngClass", D(11, Ho, ((c = a.marketData()) == null ? null : c.totalNumberOfSharesTraded) <= 0)),
                l(),
                y(a.isOption() ? -1 : 3),
                l(),
                y(((p = a.marketData()) == null ? null : p.feeOfPreviousDaysClosingPrice) < ((p = a.marketData()) == null ? null : p.maxDailyPrice) && ((p = a.marketData()) == null ? null : p.feeOfPreviousDaysClosingPrice) > ((p = a.marketData()) == null ? null : p.minDailyPrice) ? 4 : -1),
                l(),
                y(a.isOption() ? -1 : 5),
                l(),
                y(((h = a.marketData()) == null ? null : h.totalNumberOfSharesTraded) > 0 ? 6 : -1),
                l(),
                y(a.isMobile() && a.swipeExists() ? 7 : -1),
                l(),
                y(((x = a.marketData()) == null ? null : x.totalNumberOfSharesTraded) > 0 ? 8 : -1),
                l(2),
                y(a.candleStickTipsToggle() ? 10 : -1),
                l(2),
                m("iconName", a.icons.ChevronDown)("ngClass", D(13, Qo, a.candleStickTipsToggle())),
                l(),
                y(a.isMobile() ? 13 : 14)
            }
        },
        dependencies: [te, Y, Fe, Q, Xe, Ye, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var sr = i => ({
    "position-relative loading": i
})
  , na = ( () => {
    let o = class o {
        constructor() {
            this.isModal = _(!1),
            this.isMobile = _(!1),
            this.activeSymbolIsin = _(""),
            this.marketDataInput = _(),
            this.symbolDataInput = _(),
            this.makeOrderOnPriceChartClick = B(),
            this.makeOrderOnPriceClick = B(),
            this.makeOrderOnQuantityClick = B(),
            this.loadingBestLimit = T(!0)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["lib-market-depth"]],
        inputs: {
            isModal: [1, "isModal"],
            isMobile: [1, "isMobile"],
            activeSymbolIsin: [1, "activeSymbolIsin"],
            marketDataInput: [1, "marketDataInput"],
            symbolDataInput: [1, "symbolDataInput"]
        },
        outputs: {
            makeOrderOnPriceChartClick: "makeOrderOnPriceChartClick",
            makeOrderOnPriceClick: "makeOrderOnPriceClick",
            makeOrderOnQuantityClick: "makeOrderOnQuantityClick"
        },
        decls: 2,
        vars: 10,
        consts: [[3, "makeOrderOnPriceChartClick", "isMobile", "activeSymbolIsin", "marketData", "symbolDataInput"], [3, "loadingEvent", "makeOrderOnPriceClick", "makeOrderOnQuantityClick", "ngClass", "activeSymbolIsin", "isMobile", "marketDataInput"]],
        template: function(t, a) {
            t & 1 && (r(0, "symbol-detail-candle", 0),
            b("makeOrderOnPriceChartClick", function(p) {
                return a.makeOrderOnPriceChartClick.emit(p)
            }),
            s(),
            r(1, "market-depth-best-limit", 1),
            b("loadingEvent", function(p) {
                return a.loadingBestLimit.set(p)
            })("makeOrderOnPriceClick", function(p) {
                return a.makeOrderOnPriceClick.emit(p)
            })("makeOrderOnQuantityClick", function(p) {
                return a.makeOrderOnQuantityClick.emit(p)
            }),
            s()),
            t & 2 && (m("isMobile", a.isMobile())("activeSymbolIsin", a.activeSymbolIsin())("marketData", a.marketDataInput())("symbolDataInput", a.symbolDataInput()),
            l(),
            m("ngClass", D(8, sr, a.loadingBestLimit()))("activeSymbolIsin", a.activeSymbolIsin())("isMobile", a.isMobile())("marketDataInput", a.marketDataInput()))
        },
        dependencies: [te, Y, Kn, ia],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var aa = ( () => {
    let o = class o extends xe {
        indTradingTrendUrl() {
            return `${this.mtsPath}${this.apiUrls.easy}symbol-analysis/ind-inst`
        }
        getIndTradingTrend(e) {
            let t = `${this.indTradingTrendUrl()}?isin=${e}`;
            return this.httpService.get(t).pipe(F(a => a[0]))
        }
    }
    ;
    o.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = Ie(o)))(a || o)
        }
    }
    )(),
    o.\u0275prov = Ce({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let i = o;
    return i
}
)();
var _t = i => ({
    width: i
})
  , cr = (i, o) => ({
    "text-danger": i,
    "text-success": o
});
function ur(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 0),
        C(1, "svg-icon", 1),
        u(2, " \u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A "),
        r(3, "button", 2),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.load(t.currentSymbol()))
        }),
        C(4, "svg-icon", 3),
        u(5, " \u062A\u0644\u0627\u0634 \u0645\u062C\u062F\u062F "),
        s()()
    }
    if (i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.Alert),
        l(3),
        m("iconName", n.icons.refresh)
    }
}
function mr(i, o) {
    if (i & 1 && (r(0, "div", 4),
    C(1, "svg-icon", 5),
    u(2, ` \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062D\u0642\u06CC\u0642\u06CC \u0648 \u062D\u0642\u0648\u0642\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F
`),
    s()),
    i & 2) {
        let n = d(2);
        l(),
        m("iconName", n.icons.InfoBox)
    }
}
function dr(i, o) {
    if (i & 1 && (r(0, "div", 6)(1, "div", 18)(2, "span", 19),
    u(3, "\u0648\u0631\u0648\u062F \u067E\u0648\u0644 \u062D\u0642\u06CC\u0642\u06CC"),
    s(),
    r(4, "span", 20),
    M(5, "number"),
    u(6),
    M(7, "largeNumber"),
    s()()()),
    i & 2) {
        let n, e, t, a = d(3);
        l(4),
        m("ngClass", pe(10, cr, ((n = a.pooyaIndInst()) == null ? null : n.diffValInd) < 0, ((n = a.pooyaIndInst()) == null ? null : n.diffValInd) > 0))("ngbTooltip", ne(5, 4, (e = a.pooyaIndInst()) == null ? null : e.diffValInd, "1.0-0"))("triggers", a.isMobile ? "click:blur" : "mouseenter:mouseleave"),
        l(2),
        k(" ", ne(7, 7, (t = (t = a.pooyaIndInst()) == null ? null : t.diffValInd) !== null && t !== void 0 ? t : 0, 1), " ")
    }
}
function pr(i, o) {
    if (i & 1 && (S(0, dr, 8, 13, "div", 6),
    r(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "div", 10)(5, "span"),
    u(6),
    M(7, "number"),
    s(),
    r(8, "div", 11),
    C(9, "div", 12),
    s(),
    r(10, "span"),
    u(11),
    M(12, "largeNumber"),
    r(13, "span", 13),
    u(14),
    s()()()(),
    r(15, "div", 13),
    u(16, "\u062D\u0642\u06CC\u0642\u06CC"),
    s(),
    r(17, "div", 14)(18, "div", 10)(19, "span"),
    u(20),
    M(21, "number"),
    s(),
    r(22, "div", 11),
    C(23, "div", 15),
    s(),
    r(24, "span"),
    u(25),
    M(26, "largeNumber"),
    r(27, "span", 13),
    u(28),
    s()()()()(),
    r(29, "div", 8)(30, "div", 9)(31, "div", 10)(32, "span"),
    u(33),
    M(34, "number"),
    s(),
    r(35, "div", 11),
    C(36, "div", 12),
    s(),
    r(37, "span"),
    u(38),
    M(39, "largeNumber"),
    r(40, "span", 13),
    u(41),
    s()()(),
    C(42, "div", 16),
    s(),
    r(43, "div", 13),
    u(44, "\u062D\u0642\u0648\u0642\u06CC"),
    s(),
    r(45, "div", 14)(46, "div", 10)(47, "span"),
    u(48),
    M(49, "number"),
    s(),
    r(50, "div", 11),
    C(51, "div", 15),
    s(),
    r(52, "span"),
    u(53),
    M(54, "largeNumber"),
    r(55, "span", 13),
    u(56),
    s()()(),
    r(57, "div", 17),
    C(58, "div"),
    s()()()()),
    i & 2) {
        let n, e, t, a, c, p, h, x, U, H, P, le, Je, kt, Tt, Ke, Ti, Ii, wi, he = d(2);
        y((n = he.MarketUnitUiStateMap.get((n = he.symbolData()) == null ? null : n.marketUnit)) != null && n.allowShowIndInstWidget ? 0 : -1),
        l(6),
        N(G(7, 19, (e = he.indInstData()) == null ? null : e.buyIndNumber)),
        l(3),
        m("ngStyle", D(35, _t, ((t = he.indInstPercents()) == null ? null : t.buyIndPercent) + "%")),
        l(2),
        k("", G(12, 21, (a = he.indInstData()) == null ? null : a.buyIndVolume), " "),
        l(3),
        k("(", (c = he.indInstPercents()) == null ? null : c.buyIndPercent, "%)"),
        l(6),
        N(G(21, 23, (p = he.indInstData()) == null ? null : p.sellIndNumber)),
        l(3),
        m("ngStyle", D(37, _t, ((h = he.indInstPercents()) == null ? null : h.sellIndPercent) + "%")),
        l(2),
        k("", G(26, 25, (x = he.indInstData()) == null ? null : x.sellIndVolume), " "),
        l(3),
        k("(", (U = he.indInstPercents()) == null ? null : U.sellIndPercent, "%)"),
        l(5),
        N(G(34, 27, (H = he.indInstData()) == null ? null : H.buyInsNumber)),
        l(3),
        m("ngStyle", D(39, _t, ((P = he.indInstPercents()) == null ? null : P.buyInsPercent) + "%")),
        l(2),
        k("", G(39, 29, (le = he.indInstData()) == null ? null : le.buyInsVolume), " "),
        l(3),
        k("(", (Je = he.indInstPercents()) == null ? null : Je.buyInsPercent, "%)"),
        l(),
        m("ngStyle", D(41, _t, ((kt = he.indInstPercents()) == null ? null : kt.buyInsPercent) + "%")),
        l(6),
        N(G(49, 31, (Tt = he.indInstData()) == null ? null : Tt.sellInsNumber)),
        l(3),
        m("ngStyle", D(43, _t, ((Ke = he.indInstPercents()) == null ? null : Ke.sellInsPercent) + "%")),
        l(2),
        k("", G(54, 33, (Ti = he.indInstData()) == null ? null : Ti.sellInsVolume), " "),
        l(3),
        k("(", (Ii = he.indInstPercents()) == null ? null : Ii.sellInsPercent, "%)"),
        l(),
        m("ngStyle", D(45, _t, ((wi = he.indInstPercents()) == null ? null : wi.sellInsPercent) + "%"))
    }
}
function hr(i, o) {
    if (i & 1 && S(0, mr, 3, 1, "div", 4)(1, pr, 59, 47),
    i & 2) {
        let n = d();
        y(!n.lastDataForToday() && !n.skeletonState() ? 0 : -1),
        l(),
        y(n.skeletonState() || n.lastDataForToday() ? 1 : -1)
    }
}
var oa = ( () => {
    let o = class o {
        constructor() {
            this.icons = R,
            this.MarketUnitUiStateMap = Te,
            this.loading = B(),
            this.isMobile = _(!1),
            this.symbolData = _(null),
            this.symbolData$ = V(this.symbolData).pipe(L(Boolean), mt("symbolIsin"), X(e => this.load(e)), Nt()),
            this.currentSymbol = T(null),
            this.lsDataReceivedIsin = "",
            this.errorState = T(!1),
            this.skeletonState = K( () => !this.indInstData()?.date),
            this.marketDataService = $(Ae),
            this.lsService = $(Ee),
            this.indInsService = $(aa),
            this.symbolService = $(ge),
            this.firstInitData$ = this.symbolData$.pipe(F(e => ({
                isin: e.symbolIsin,
                sellIndVolume: 0,
                sellIndNumber: 0,
                sellInsVolume: 0,
                sellInsNumber: 0,
                buyIndVolume: 0,
                buyIndNumber: 0,
                buyInsVolume: 0,
                buyInsNumber: 0
            }))),
            this.lsData$ = this.symbolData$.pipe(E(e => this.subscribeToLs(e.symbolIsin))),
            this.lsData = A(this.lsData$),
            this.marketDataIndInst$ = this.symbolData$.pipe(ke(Me(3e3)), L( ([e]) => e.symbolIsin !== this.lsDataReceivedIsin), E( ([e]) => this.getIndInstFromMarketData(e.symbolIsin))),
            this.marketDataIndInst = A(this.marketDataIndInst$),
            this.indInstData$ = this.firstInitData$.pipe(fe(this.lsData$, this.marketDataIndInst$), L(e => !!e)),
            this.indInstData = A(this.indInstData$),
            this.pooyaIndInst$ = this.symbolData$.pipe(ke(Me(0, 6e4)), E( ([e]) => Te.get(e.marketUnit)?.allowShowIndInstWidget ? this.indInsService.getIndTradingTrend(e.symbolIsin).pipe(F(t => He(e.marketUnit) ? De(J({}, t), {
                diffValInd: t.diffValInd * +e.csize
            }) : t), me( () => (this.errorState.set(!0),
            se(null)))) : Vt)),
            this.pooyaIndInst = A(this.pooyaIndInst$),
            this.lastDataForToday = K( () => {
                let e = new Date;
                return this.indInstData()?.date?.toDateString() === e.toDateString()
            }
            ),
            this.indInstPercents = K( () => !this.symbolData()?.symbolIsin?.length || !this.indInstData() ? {
                buyIndPercent: 0,
                buyInsPercent: 0,
                sellIndPercent: 0,
                sellInsPercent: 0
            } : {
                buyIndPercent: Mt(this.indInstData()?.buyIndVolume, this.indInstData()?.buyIndVolume + this.indInstData()?.buyInsVolume),
                buyInsPercent: Mt(this.indInstData()?.buyInsVolume, this.indInstData()?.buyIndVolume + this.indInstData()?.buyInsVolume),
                sellIndPercent: Mt(this.indInstData()?.sellIndVolume, this.indInstData()?.sellIndVolume + this.indInstData()?.sellInsVolume),
                sellInsPercent: Mt(this.indInstData()?.sellInsVolume, this.indInstData().sellIndVolume + this.indInstData().sellInsVolume)
            })
        }
        load(e) {
            this.currentSymbol()?.symbolIsin?.length > 0 && this.unsubscribeToLs(this.currentSymbol()?.symbolIsin),
            e?.symbolIsin && e?.symbolIsin !== this.currentSymbol()?.symbolIsin && (this.loading.emit(!0),
            this.currentSymbol.set(null),
            this.currentSymbol.set(e))
        }
        ngOnDestroy() {
            this.unsubscribeToLs(this.currentSymbol()?.symbolIsin)
        }
        unsubscribeToLs(e) {
            this.lsService.unsubscribeSchema(re.TradeVolume, e)
        }
        getIndInstFromMarketData(e) {
            return this.marketDataService.GetSymbolDetailsIndInstTrade(e).pipe(me( () => (this.errorState.set(!0),
            se(null))), et( () => {
                this.loading.emit(!1)
            }
            ), L(t => !!t), F(t => ({
                isin: e,
                sellIndNumber: +t.indSellNumber,
                sellIndVolume: +t.indSellVolume,
                sellInsNumber: +t.insSellNumber,
                sellInsVolume: +t.insSellVolume,
                buyIndNumber: +t.indBuyNumber,
                buyIndVolume: +t.indBuyVolume,
                buyInsNumber: +t.insBuyNumber,
                buyInsVolume: +t.insBuyVolume,
                date: ce.getDateWithTimeFromNumber(t.date)
            })))
        }
        subscribeToLs(e) {
            return this.lsService.subscribeToLs(re.TradeVolume, e).pipe(L(t => t.inst === e), F(t => t.val), X( () => {
                this.lsDataReceivedIsin = e
            }
            ), X( () => {
                this.loading.emit(!1),
                this.errorState.set(!1)
            }
            ), F(t => ({
                isin: e,
                buyIndNumber: parseInt(t[ie.TradeVolumeSchema.buyCountPerson]),
                buyIndVolume: parseInt(t[ie.TradeVolumeSchema.buyVolumePerson]),
                sellIndNumber: parseInt(t[ie.TradeVolumeSchema.sellCountPerson]),
                sellIndVolume: parseInt(t[ie.TradeVolumeSchema.sellVolumePerson]),
                buyInsNumber: parseInt(t[ie.TradeVolumeSchema.buyCountLegal]),
                sellInsVolume: parseInt(t[ie.TradeVolumeSchema.sellVolumeLegal]),
                sellInsNumber: parseInt(t[ie.TradeVolumeSchema.sellCountLegal]),
                buyInsVolume: parseInt(t[ie.TradeVolumeSchema.buyVolumeLegal]),
                date: ce.ticksToDate(t[ie.TradeVolumeSchema.timestamp])
            })))
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["lib-ind-inst-chart"]],
        inputs: {
            isMobile: [1, "isMobile"],
            symbolData: [1, "symbolData"]
        },
        outputs: {
            loading: "loading"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "d-flex", "flex-column", "align-items-center", "gap-2"], ["width", "36", "height", "36", 1, "text-secondary", "mb-3", 3, "iconName"], [1, "btn", "btn-sm", "btn-outline-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], ["width", "20", "height", "20", 3, "iconName"], [1, "d-flex", "flex-column", "gap-2", "align-items-center", "justify-content-center", "text-secondary", "w-100"], ["width", "36", "height", "36", 1, "", 3, "iconName"], [1, "mb-2", "list-group", "list-group-flush"], [1, "bar-chart", "small", "w-100"], [1, "d-flex", "align-items-center", "gap-3", "mb-1"], ["dir", "ltr", 1, "w-50"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-center", "bar-chart__item", "gap-1"], [1, "progress", "w-100"], [1, "progress-bar", "bg-success", 3, "ngStyle"], [1, "text-muted"], [1, "w-50"], [1, "progress-bar", "bg-danger", 3, "ngStyle"], [1, "bar-chart__left", "sell", 3, "ngStyle"], [1, "bar-chart__left", "buy", 3, "ngStyle"], [1, "border-principal-3x", "border-principal-4x-dark", "border-principal-7x-dark-mobile", "d-flex", "justify-content-between", "list-group-item", "px-0", "py-1", "bg-transparent"], [1, "text-secondary"], ["dir", "ltr", "container", "body", "tooltipClass", "ltr", "placement", "top", 3, "ngClass", "ngbTooltip", "triggers"]],
        template: function(t, a) {
            t & 1 && S(0, ur, 6, 2, "div", 0)(1, hr, 2, 2),
            t & 2 && y(a.errorState() ? 0 : 1)
        },
        dependencies: [te, Y, Fe, Q, ve, Xe, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var v = function(i) {
    return i[i.flow = 0] = "flow",
    i[i.marketUnit = 1] = "marketUnit",
    i[i.industry = 2] = "industry",
    i[i.pe = 3] = "pe",
    i[i.gpe = 4] = "gpe",
    i[i.dps = 5] = "dps",
    i[i.eps = 6] = "eps",
    i[i.lastCalculatedTradeTime = 7] = "lastCalculatedTradeTime",
    i[i.totalTradeValue = 8] = "totalTradeValue",
    i[i.totalNumberOfSharesTraded = 9] = "totalNumberOfSharesTraded",
    i[i.volume30Avg = 10] = "volume30Avg",
    i[i.volume90Avg = 11] = "volume90Avg",
    i[i.basisVolume = 12] = "basisVolume",
    i[i.minDealableCount = 13] = "minDealableCount",
    i[i.minDealablePrice = 14] = "minDealablePrice",
    i[i.tomorrowThresholdAllowPrices = 15] = "tomorrowThresholdAllowPrices",
    i[i.subscriptionNav = 16] = "subscriptionNav",
    i[i.cancelNav = 17] = "cancelNav",
    i[i.priceToCancelNav = 18] = "priceToCancelNav",
    i[i.cancelNavDate = 19] = "cancelNavDate",
    i[i.shareDueDate = 20] = "shareDueDate",
    i[i.baseSymbolName = 21] = "baseSymbolName",
    i[i.priorityType = 22] = "priorityType",
    i[i.maturityDate = 23] = "maturityDate",
    i[i.notionalValue = 24] = "notionalValue",
    i[i.lastTradedPrice = 25] = "lastTradedPrice",
    i[i.closingPrice = 26] = "closingPrice",
    i
}(v || {})
  , w = new Map([[v.flow, {
    label: "\u0628\u0627\u0632\u0627\u0631",
    value: "flow",
    dir: null
}], [v.marketUnit, {
    label: "\u0646\u0648\u0639 \u0633\u0647\u0645",
    value: "marketUnitTitle",
    dir: null
}], [v.industry, {
    label: "\u0635\u0646\u0639\u062A",
    value: "industryShortName",
    dir: null
}], [v.pe, {
    label: "P/E",
    value: "pe",
    dir: "rtl"
}], [v.gpe, {
    label: "P/E \u06AF\u0631\u0648\u0647",
    value: "gpe",
    dir: null
}], [v.dps, {
    label: "DPS",
    value: "dps",
    dir: "rtl"
}], [v.eps, {
    label: "EPS",
    value: "eps",
    dir: "ltr",
    tooltip: "epsTooltip"
}], [v.lastCalculatedTradeTime, {
    label: "\u0622\u062E\u0631\u06CC\u0646 \u0645\u0639\u0627\u0645\u0644\u0647",
    value: "lastCalculatedTradeTime",
    dir: null,
    tooltip: "tradeDate"
}], [v.totalTradeValue, {
    label: "\u0627\u0631\u0632\u0634",
    value: "totalTradeValue",
    dir: "ltr",
    tooltip: "totalTradeValueTooltip"
}], [v.totalNumberOfSharesTraded, {
    label: "\u062D\u062C\u0645",
    value: "totalNumberOfSharesTraded",
    dir: "ltr",
    tooltip: "totalNumberOfSharesTradedTooltip"
}], [v.volume30Avg, {
    label: "\u062D\u062C\u0645\u200C\u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646 1 \u0645\u0627\u0647",
    value: "volume30Avg",
    dir: "ltr"
}], [v.volume90Avg, {
    label: "\u062D\u062C\u0645\u200C\u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646 3 \u0645\u0627\u0647",
    value: "volume90Avg",
    dir: "ltr"
}], [v.basisVolume, {
    label: "\u062D\u062C\u0645 \u0645\u0628\u0646\u0627",
    value: "basisVolume",
    dir: "ltr"
}], [v.minDealableCount, {
    label: "\u0645\u0636\u0631\u0628 \u062D\u062C\u0645",
    value: "minDealableCount",
    dir: "ltr"
}], [v.minDealablePrice, {
    label: "\u0645\u0636\u0631\u0628 \u0642\u06CC\u0645\u062A",
    value: "minDealablePrice",
    dir: "ltr"
}], [v.tomorrowThresholdAllowPrices, {
    label: "\u0622\u0633\u062A\u0627\u0646\u0647 \u0641\u0631\u062F\u0627",
    value: "tomorrowThresholdAllowPrices",
    dir: "ltr"
}], [v.subscriptionNav, {
    label: "NAV \u0635\u062F\u0648\u0631",
    value: "subscriptionNav",
    dir: null
}], [v.cancelNav, {
    label: "NAV \u0627\u0628\u0637\u0627\u0644",
    value: "cancelNav",
    dir: null
}], [v.priceToCancelNav, {
    label: "P/NAV",
    value: "priceToCancelNav",
    dir: null
}], [v.cancelNavDate, {
    label: "\u0632\u0645\u0627\u0646 \u0627\u0639\u0644\u0627\u0645 NAV",
    value: "cancelNavDate",
    dir: null
}], [v.shareDueDate, {
    label: "\u062A\u0627\u0631\u06CC\u062E \u0633\u0631\u0631\u0633\u06CC\u062F",
    value: "shareDueDate",
    dir: null
}], [v.baseSymbolName, {
    label: "\u0646\u0645\u0627\u062F \u067E\u0627\u06CC\u0647",
    value: "baseSymbolName",
    dir: null
}], [v.priorityType, {
    label: "\u0646\u0648\u0639 \u062D\u0642 \u062A\u0642\u062F\u0645",
    value: "priorityType",
    dir: null
}], [v.maturityDate, {
    label: "\u0645\u0647\u0644\u062A \u0627\u0633\u062A\u0641\u0627\u062F\u0647",
    value: "maturityDate",
    dir: null
}], [v.notionalValue, {
    label: "\u0627\u0631\u0632\u0634 \u0645\u0641\u0647\u0648\u0645\u06CC",
    value: "notionalValue",
    dir: "ltr",
    tooltip: "notionalValueTooltip"
}], [v.lastTradedPrice, {
    label: "\u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC",
    value: "lastTradedPrice",
    dir: "ltr"
}], [v.lastTradedPrice, {
    label: "\u0622\u062E\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A",
    value: "lastTradedPrice",
    dir: "ltr"
}], [v.closingPrice, {
    label: "\u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC",
    value: "closingPrice",
    dir: "ltr"
}]])
  , ra = new Map([[Qe.Stock, {
    rows: [[w.get(v.flow), w.get(v.totalTradeValue)], [w.get(v.marketUnit), w.get(v.totalNumberOfSharesTraded)], [w.get(v.industry), w.get(v.volume30Avg)], [w.get(v.pe), w.get(v.volume90Avg)], [w.get(v.gpe), w.get(v.basisVolume)], [w.get(v.dps), w.get(v.minDealableCount)], [w.get(v.eps), w.get(v.minDealablePrice)], [w.get(v.lastCalculatedTradeTime), w.get(v.tomorrowThresholdAllowPrices)]]
}], [Qe.ETF, {
    rows: [[w.get(v.flow), w.get(v.totalNumberOfSharesTraded)], [w.get(v.marketUnit), w.get(v.totalTradeValue)], [w.get(v.subscriptionNav), w.get(v.tomorrowThresholdAllowPrices)], [w.get(v.cancelNav), w.get(v.minDealableCount)], [w.get(v.priceToCancelNav), w.get(v.minDealablePrice)], [w.get(v.cancelNavDate), w.get(v.lastCalculatedTradeTime)]]
}], [Qe.DebtPapers, {
    rows: [[w.get(v.flow), w.get(v.totalNumberOfSharesTraded)], [w.get(v.marketUnit), w.get(v.totalTradeValue)], [w.get(v.minDealableCount), w.get(v.tomorrowThresholdAllowPrices)], [w.get(v.minDealablePrice), w.get(v.lastCalculatedTradeTime)]]
}], [Qe.commodityExchangeCertificate, {
    rows: [[w.get(v.flow), w.get(v.totalNumberOfSharesTraded)], [w.get(v.marketUnit), w.get(v.totalTradeValue)], [w.get(v.shareDueDate), w.get(v.minDealableCount)], [w.get(v.lastCalculatedTradeTime), w.get(v.minDealablePrice)], [null, w.get(v.tomorrowThresholdAllowPrices)]]
}], [Qe.Precedence, {
    rows: [[w.get(v.flow), w.get(v.totalNumberOfSharesTraded)], [w.get(v.marketUnit), w.get(v.totalTradeValue)], [w.get(v.baseSymbolName), w.get(v.basisVolume)], [w.get(v.priorityType), w.get(v.minDealableCount)], [w.get(v.maturityDate), w.get(v.minDealablePrice)], [w.get(v.lastCalculatedTradeTime), w.get(v.tomorrowThresholdAllowPrices)]]
}], [Qe.HousingBonds, {
    rows: [[w.get(v.flow), w.get(v.totalTradeValue)], [w.get(v.marketUnit), w.get(v.totalNumberOfSharesTraded)], [w.get(v.shareDueDate), w.get(v.basisVolume)], [w.get(v.lastCalculatedTradeTime), w.get(v.tomorrowThresholdAllowPrices)]]
}], [Qe.callOption, {
    rows: [[w.get(v.flow), w.get(v.totalTradeValue)], [w.get(v.marketUnit), w.get(v.notionalValue)], [w.get(v.industry), w.get(v.totalNumberOfSharesTraded)], [w.get(v.lastCalculatedTradeTime), w.get(v.volume30Avg)]]
}], [Qe.putOption, {
    rows: [[w.get(v.flow), w.get(v.totalTradeValue)], [w.get(v.marketUnit), w.get(v.notionalValue)], [w.get(v.industry), w.get(v.totalNumberOfSharesTraded)], [w.get(v.lastCalculatedTradeTime), w.get(v.volume30Avg)]]
}]]);
function la(i, o) {
    return i ? (+(o ?? 0) / (i ?? 0)).toFixed(3) ?? "0" : "-"
}
var Cr = i => ({
    "bg-principal-2x bg-principal-3x-dark-mobile": i
});
function br(i, o) {
    if (i & 1 && (r(0, "div", 4)(1, "div", 5)(2, "span", 6),
    u(3),
    s(),
    r(4, "span", 7),
    u(5),
    s()(),
    r(6, "div", 5)(7, "span", 8),
    u(8),
    s(),
    r(9, "span", 7),
    u(10),
    s()()()),
    i & 2) {
        let n, e, t, a, c = o.$implicit, p = o.$index, h = d(2);
        m("ngClass", D(9, Cr, p % 2 !== 0)),
        l(3),
        k("", c[0] == null ? null : c[0].label, " "),
        l(),
        m("dir", c[0] == null ? null : c[0].dir),
        we("title", (n = h.symbolData()[c[0] == null ? null : c[0].tooltip]) !== null && n !== void 0 && n ? h.symbolData()[c[0] == null ? null : c[0].tooltip] : ""),
        l(),
        k(" ", (e = h.symbolData()[c[0] == null ? null : c[0].value]) !== null && e !== void 0 && e ? h.symbolData()[c[0] == null ? null : c[0].value] : "", " "),
        l(3),
        k("", c[1] == null ? null : c[1].label, " "),
        l(),
        m("dir", c[1] == null ? null : c[1].dir),
        we("title", (t = h.symbolData()[c[1] == null ? null : c[1].tooltip]) !== null && t !== void 0 && t ? h.symbolData()[c[1] == null ? null : c[1].tooltip] : ""),
        l(),
        k(" ", (a = h.symbolData()[c[1] == null ? null : c[1].value]) !== null && a !== void 0 && a ? h.symbolData()[c[1] == null ? null : c[1].value] : "", " ")
    }
}
function yr(i, o) {
    if (i & 1 && (r(0, "div", 0)(1, "div", 2)(2, "div", 3),
    z(3, br, 11, 11, "div", 4, Se),
    s()()()),
    i & 2) {
        let n, e = d();
        l(3),
        W((n = e.template()) == null ? null : n.rows)
    }
}
function gr(i, o) {
    if (i & 1 && (r(0, "div", 1),
    C(1, "svg-icon", 9),
    r(2, "span"),
    u(3, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F"),
    s()()),
    i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.InfoBox)
    }
}
var sa = ( () => {
    let o = class o {
        constructor() {
            this.icons = R,
            this._activeStockIsin = T(""),
            this.activeStockIsin = _(),
            this.marketDataInput = _(),
            this.marketDataService = $(Ae),
            this.symbolService = $(ge),
            this.isEtf = K( () => this._activeStockIsin() ? this._activeStockIsin().toUpperCase().startsWith("IRT") : !1),
            this.lsSymbolData = T(J({}, Gt)),
            this.localStorageSymbolData$ = V(this._activeStockIsin).pipe(E(e => this.symbolService.getSymbolStream(e))),
            this.localStorageBaseSymbolData$ = V(this._activeStockIsin).pipe(E(e => (e = this.replaceAt(e, 2, "O"),
            e = this.replaceAt(e, 9, "0"),
            this.symbolService.getSymbolStream(e)))),
            this.localStorageBaseSymbolData = A(this.localStorageBaseSymbolData$),
            this.localStorageSymbolData = A(this.localStorageSymbolData$),
            this.optionStorageBaseSymbolData$ = V(this.localStorageSymbolData).pipe(E(e => this.symbolService.getOptionBaseSymbolStream(e?.baseIsin))),
            this.optionStorageBaseSymbolData = A(this.optionStorageBaseSymbolData$),
            this.apiSymbolData$ = V(this._activeStockIsin).pipe(L(e => !!e), E(e => this.getMarketDataFromApi(e))),
            this.apiSymbolData = A(this.apiSymbolData$),
            this.apiOptionBaseSymbolData$ = V(this.optionStorageBaseSymbolData).pipe(L(e => !!e), E(e => this.getMarketDataFromApi(e.symbolIsin))),
            this.apiOptionBaseSymbolData = A(this.apiOptionBaseSymbolData$),
            this.template$ = this.localStorageSymbolData$.pipe(F(e => this.makeTemplate(e))),
            this.template = A(this.template$),
            this.symbolData = K( () => {
                let e = ce.getJDateWithTimeFromNumberSetTimeZone(this.lsSymbolData()?.navDate ?? this.apiSymbolData()?.cancelNavDate, !0)
                  , t = ""
                  , a = this.lsSymbolData()?.navDate ?? this.apiSymbolData()?.cancelNavDate;
                if (a?.length) {
                    let c = new Date(Date.now()).toISOString().split("T")[0].replaceAll("-", "").replaceAll("-", "/");
                    t = ce.getJDateWithTimeFromNumberSetTimeZone(a, a.substring(0, 8) === c)
                }
                return {
                    industryShortName: Jt.find(c => +c.code.toString() == +this.localStorageSymbolData()?.sector.trim())?.shortName,
                    basisVolume: nn(+this.localStorageSymbolData()?.baseVol),
                    symbolGroup: this.localStorageSymbolData()?.symbolGroup,
                    flow: Ge.symbolFlow[+this.localStorageSymbolData()?.flow],
                    marketUnitTitle: Ge.symbolMarketUnit[+this.localStorageSymbolData()?.marketUnit],
                    minDealablePrice: this.localStorageSymbolData()?.minDealablePrice,
                    minDealableCount: this.localStorageSymbolData()?.minDealableCount,
                    eps: ot(this.apiSymbolData()?.eps) ? "-" : new Q("en-US").transform(this.apiSymbolData()?.eps, "1.0-0"),
                    epsTooltip: "(TTM) \u0628\u0631 \u0645\u0628\u0646\u0627\u06CC \u0633\u0648\u062F \u0648 \u0632\u06CC\u0627\u0646 \u06F1\u06F2 \u0645\u0627\u0647 \u0627\u062E\u06CC\u0631 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F",
                    dps: ot(this.apiSymbolData()?.dps) ? "-" : new Q("en-US").transform(this.apiSymbolData()?.dps, "1.0-0"),
                    e30: this.apiSymbolData()?.e30,
                    cancelNav: ot(this.lsSymbolData()?.navRedemption ?? this.apiSymbolData()?.cancelNav) ? "-" : new Q("en-US").transform(this.lsSymbolData()?.navRedemption ?? this.apiSymbolData()?.cancelNav, "1.0-0"),
                    fYear: this.apiSymbolData()?.fYear,
                    floatPercent: this.apiSymbolData()?.floatPercent * 100,
                    volume90Avg: new ve().transform(this.apiSymbolData()?.volume90Avg, 1),
                    volume30Avg: new ve().transform(this.apiSymbolData()?.volume30AVG, 1),
                    gpe: ot(this.apiSymbolData()?.gpe) ? "-" : new Q("en-US").transform(this.apiSymbolData()?.gpe, "1.0-2"),
                    firstTradedPrice: this.lsSymbolData()?.firstTradedPrice ?? this.apiSymbolData()?.firstTradedPrice,
                    totalNumberOfTrades: this.lsSymbolData()?.totalNumberOfTrades ?? this.apiSymbolData()?.totalNumberOfTrades,
                    totalTradeValue: new ve().transform(this.lsSymbolData()?.totalTradeValue ?? this.apiSymbolData()?.totalTradeValue, 1),
                    totalTradeValueTooltip: new Q("en-US").transform(this.lsSymbolData()?.totalTradeValue ?? this.apiSymbolData()?.totalTradeValue, "1.0-0"),
                    closingPrice: +(this.lsSymbolData()?.closingPrice ?? this.apiSymbolData()?.closingPrice),
                    highAllowedPrice: +(this.lsSymbolData()?.maxDailyPrice ?? this.apiSymbolData()?.highAllowedPrice),
                    lowAllowedPrice: +(this.lsSymbolData()?.minDailyPrice ?? this.apiSymbolData()?.lowAllowedPrice),
                    feeOfPreviousDaysClosingPrice: +(this.lsSymbolData()?.feeOfPreviousDaysClosingPrice ?? this.apiSymbolData()?.feeOfPreviousDaysClosingPrice),
                    lastTradedPrice: +(this.lsSymbolData()?.lastTradedPrice ?? this.apiSymbolData()?.lastTradedPrice),
                    totalNumberOfSharesTraded: new ve().transform(+(this.lsSymbolData()?.totalNumberOfSharesTraded ?? this.apiSymbolData()?.totalNumberOfSharesTraded), 1),
                    totalNumberOfSharesTradedTooltip: new Q("en-US").transform(+(this.lsSymbolData()?.totalNumberOfSharesTraded ?? this.apiSymbolData()?.totalNumberOfSharesTraded), "1.0-0"),
                    symbolState: ln(this.lsSymbolData()?.stateCode),
                    priceToCancelNav: la(this.lsSymbolData()?.navRedemption ?? this.apiSymbolData()?.cancelNav, this.lsSymbolData()?.lastTradedPrice ?? this.apiSymbolData()?.lastTradedPrice),
                    subscriptionNav: ot(+(this.lsSymbolData()?.navSubscription ?? this.apiSymbolData()?.subscriptionNav)) ? "-" : new Q("en-US").transform(+(this.lsSymbolData()?.navSubscription ?? this.apiSymbolData()?.subscriptionNav), "1.0-0"),
                    pe: ot(this.apiSymbolData()?.eps) ? "-" : new Q("en-US").transform(this.apiSymbolData()?.eps > 0 ? +(this.lsSymbolData()?.closingPrice ?? this.apiSymbolData()?.closingPrice) / this.apiSymbolData()?.eps : 0, "1.0-2"),
                    lastCalculatedTradeTime: +(this.lsSymbolData()?.totalNumberOfSharesTraded ?? this.apiSymbolData()?.totalNumberOfSharesTraded) > 0 ? this.lsSymbolData()?.tradeDate.length > 1 ? ce.getTimeFromNumber(this.lsSymbolData()?.tradeDate) : this.apiSymbolData()?.tradeDate ? ce.getFormattedJTime(this.apiSymbolData()?.tradeDate) : "" : this.lsSymbolData()?.tradeDate.length > 1 ? ce.getJDateWithTimeFromNumber(this.lsSymbolData()?.tradeDate) : this.apiSymbolData()?.tradeDate ? ce.getJDate(this.apiSymbolData()?.tradeDate) : "",
                    tradeDate: this.lsSymbolData()?.tradeDate.length > 1 ? ce.getJDateWithTimeFromNumber(this.lsSymbolData()?.tradeDate) : this.apiSymbolData()?.tradeDate ? ce.getJDate(this.apiSymbolData()?.tradeDate) : "",
                    cancelNavDate: t,
                    cancelNavTime: e && e.length > 3 ? e : "",
                    baseSymbolName: this.localStorageBaseSymbolData()?.symbolName,
                    tomorrowThresholdAllowPrices: this.calculateTomorrowThresholdAllowPrices(),
                    priorityType: this.localStorageSymbolData()?.priorityStock?.priorityType ? Ge.PriorityTypeToText[this.localStorageSymbolData()?.priorityStock?.priorityType] : "",
                    shareDueDate: this.localStorageSymbolData()?.shareDueDate ? ce.getJDate(this.localStorageSymbolData()?.shareDueDate) : "",
                    maturityDate: this.localStorageSymbolData()?.priorityStock?.maturityDate ? ce.getJDate(this.localStorageSymbolData()?.priorityStock?.maturityDate) : "",
                    notionalValue: new ve().transform(this.apiOptionBaseSymbolData()?.closingPrice * this.localStorageSymbolData()?.csize * +(this.lsSymbolData()?.totalNumberOfSharesTraded ?? this.apiSymbolData()?.totalNumberOfSharesTraded), 1),
                    notionalValueTooltip: new Q("en-US").transform(this.apiOptionBaseSymbolData()?.closingPrice * this.localStorageSymbolData()?.csize * +(this.lsSymbolData()?.totalNumberOfSharesTraded ?? this.apiSymbolData()?.totalNumberOfSharesTraded), "1.0-0")
                }
            }
            ),
            ue( () => {
                this.activeStockIsin() && it( () => this._activeStockIsin()) !== this.activeStockIsin() && this._activeStockIsin.set(this.activeStockIsin())
            }
            ),
            ue( () => {
                this.marketDataInput() && this.lsSymbolData.set(this.marketDataInput())
            }
            )
        }
        calculateTomorrowThresholdAllowPrices() {
            let e = +(this.lsSymbolData()?.feeOfPreviousDaysClosingPrice ?? this.apiSymbolData()?.feeOfPreviousDaysClosingPrice)
              , t = +(this.lsSymbolData()?.maxDailyPrice ?? this.apiSymbolData()?.highAllowedPrice)
              , a = +(this.lsSymbolData()?.minDailyPrice ?? this.apiSymbolData()?.lowAllowedPrice)
              , c = +(this.lsSymbolData()?.closingPrice ?? this.apiSymbolData()?.closingPrice)
              , p = this.localStorageSymbolData()?.minDealablePrice;
            if (e) {
                let h = (t - e) / e
                  , x = (e - a) / e
                  , U = Math.ceil(c * (1 - x))
                  , H = U % p
                  , P = Math.floor(c * (1 + h))
                  , le = P % p;
                return `${(U + (H !== 0 ? p - H : 0)).toLocaleString()} -
			 ${(P - le).toLocaleString()}`
            }
            return ""
        }
        makeTemplate(e) {
            if (!e)
                return;
            let t = null;
            for (let a of Ci.keys())
                if (Ci.get(a).includes(e.marketUnit)) {
                    t = a;
                    break
                }
            return ra.get(t)
        }
        replaceAt(e, t, a) {
            return e.substring(0, t) + a + e.substring(t + a.length)
        }
        getMarketDataFromApi(e) {
            return this.marketDataService.GetStockInfo(e).pipe(F(t => De(J({}, t), {
                floatPercent: t?.floatPercent * 100,
                lastTradeTime: ce.getFormattedJTime(t?.tradeDate)
            })))
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["lib-symbol-info"]],
        inputs: {
            activeStockIsin: [1, "activeStockIsin"],
            marketDataInput: [1, "marketDataInput"]
        },
        decls: 2,
        vars: 1,
        consts: [[1, "position-relative"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-muted", "w-100"], [1, "d-flex", "w-100"], [1, "d-flex", "flex-column", "rounded", "rounded-2", "flex-grow-1"], [1, "d-flex", "justify-content-between", "align-items-center", "px-2", "py-1", "rounded-2", "gap-3", 3, "ngClass"], [1, "col", "d-flex", "justify-content-between"], [1, "text-body-tertiary", "d-inline-block", "text-start", "me-1", "small", "t"], [1, "text-end", 3, "dir"], [1, "text-muted", "d-inline-block", "text-start", "me-1", "small"], ["width", "48", "height", "48", 1, "", 3, "iconName"]],
        template: function(t, a) {
            if (t & 1 && S(0, yr, 5, 0, "div", 0)(1, gr, 4, 1, "div", 1),
            t & 2) {
                let c;
                y((c = a.template()) != null && c.rows.length ? 0 : 1)
            }
        },
        dependencies: [te, Y, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var fr = (i, o) => o.title
  , ca = i => ({
    width: i
});
function Sr(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 0),
        C(1, "svg-icon", 1),
        u(2, " \u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A "),
        r(3, "button", 2),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.reload(t.activeStockIsin()))
        }),
        C(4, "svg-icon", 3),
        u(5, " \u062A\u0644\u0627\u0634 \u0645\u062C\u062F\u062F "),
        s()()
    }
    if (i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.Alert),
        l(3),
        m("iconName", n.icons.refresh)
    }
}
function vr(i, o) {
    if (i & 1 && (r(0, "div", 4)(1, "div", 6)(2, "div", 7)(3, "span", 8),
    u(4, "\u062A\u0627\u0631\u06CC\u062E \u0633\u0631\u0631\u0633\u06CC\u062F"),
    s(),
    r(5, "span", 9),
    u(6),
    s()(),
    r(7, "div", 7)(8, "span", 8),
    u(9, "\u0641\u0627\u0635\u0644\u0647 \u062A\u0627 \u0633\u0631\u0631\u0633\u06CC\u062F"),
    s(),
    r(10, "span", 9),
    u(11),
    s()(),
    r(12, "div", 7)(13, "span", 10),
    u(14, "\u0628\u0627\u0632\u062F\u0647 \u062A\u0627 \u0633\u0631\u0631\u0633\u06CC\u062F"),
    s(),
    r(15, "span", 11),
    u(16),
    M(17, "number"),
    s()()()()),
    i & 2) {
        let n, e, t, a = d(2);
        l(6),
        N((n = a.returnDataApi()) == null ? null : n.maturityDay),
        l(5),
        N((e = a.returnDataApi()) == null ? null : e.daysToMaturity),
        l(5),
        k("", ne(17, 3, ((t = a.returnDataApi()) == null ? null : t.returnToMaturity) * 100, "1.0-2"), "%")
    }
}
function _r(i, o) {
    if (i & 1 && (r(0, "div", 12)(1, "div", 13),
    C(2, "div", 14),
    r(3, "span", 15),
    u(4),
    s()(),
    r(5, "div", 16),
    u(6),
    s(),
    r(7, "div", 17),
    C(8, "div", 18),
    r(9, "span", 19),
    u(10),
    s()()()),
    i & 2) {
        let n = o.$implicit;
        l(2),
        m("ngStyle", D(5, ca, n.widthRight + "%")),
        l(2),
        N(n.labelRight),
        l(2),
        k(" ", n.title, " "),
        l(2),
        m("ngStyle", D(7, ca, n.widthLeft + "%")),
        l(2),
        N(n.labelLeft)
    }
}
function xr(i, o) {
    if (i & 1 && (r(0, "div", 5),
    z(1, _r, 11, 9, "div", 12, fr),
    s()),
    i & 2) {
        let n = d(2);
        l(),
        W(n.returnArray())
    }
}
function Dr(i, o) {
    if (i & 1 && S(0, vr, 18, 6, "div", 4)(1, xr, 3, 0, "div", 5),
    i & 2) {
        let n, e = d();
        y(e.isBond() && e.returnDataApi() ? 0 : e.returnArray() && ((n = e.returnArray()) == null ? null : n.length) > 0 ? 1 : -1)
    }
}
var ua = ( () => {
    let o = class o {
        constructor() {
            this.icons = R,
            this.notAvailableSymbol = "--",
            this.activeStockIsin = _(),
            this.loading = B(),
            this.activeStockIsin$ = V(this.activeStockIsin).pipe(ut()),
            this.mdService = $(Ae),
            this.errorState = T(!1),
            this.returnDataFirstInit$ = this.activeStockIsin$.pipe(F( () => [{
                title: "\u06CC\u06A9\u200C\u0645\u0627\u0647\u0647",
                value: "0",
                widthLeft: 0,
                labelLeft: "0",
                widthRight: 0,
                labelRight: "0"
            }, {
                title: "\u0633\u0647\u200C\u0645\u0627\u0647\u0647",
                value: "0",
                widthLeft: 0,
                labelLeft: "0",
                widthRight: 0,
                labelRight: "0"
            }, {
                title: "\u06CC\u06A9\u200C\u0633\u0627\u0644\u0647",
                value: "0",
                widthLeft: 0,
                labelLeft: "0",
                widthRight: 0,
                labelRight: "0"
            }])),
            this.returnDataApi$ = this.activeStockIsin$.pipe(L(Boolean), E(e => this.getReturnChartData(e)), L(Boolean), Nt()),
            this.returnDataApi = A(this.returnDataApi$),
            this.returnDataApiMapToArray$ = this.returnDataApi$.pipe(L(e => !!e), L( () => !this.activeStockIsin()?.toUpperCase()?.startsWith("IRB")), F(e => {
                if (this.isBond())
                    return null;
                let t = e?.e30 === null ? this.notAvailableSymbol : e?.e30 * 100
                  , a = e?.e90 === null ? this.notAvailableSymbol : e?.e90 * 100
                  , c = e?.e360 === null ? this.notAvailableSymbol : e?.e360 * 100;
                e?.e30 !== null && Math.abs(+t) > 100 && (t = Math.round(+t)),
                e?.e90 !== null && Math.abs(+a) > 100 && (a = Math.round(+a)),
                e?.e360 !== null && Math.abs(+c) > 100 && (c = Math.round(+c));
                let p = (Math.max(Math.abs(e?.e30), Math.abs(e?.e90), Math.abs(e?.e360)) + .5) * 100;
                return [{
                    title: "\u06CC\u06A9\u200C\u0645\u0627\u0647\u0647",
                    value: t.toString(),
                    widthLeft: this.calculateLeftWidth(t, p),
                    labelLeft: this.calculateLeftLabel(t),
                    widthRight: this.calculateRightWidth(t, p),
                    labelRight: this.calculateRightLabel(t)
                }, {
                    title: "\u0633\u0647\u200C\u0645\u0627\u0647\u0647",
                    value: a.toString(),
                    widthLeft: this.calculateLeftWidth(a, p),
                    labelLeft: this.calculateLeftLabel(a),
                    widthRight: this.calculateRightWidth(a, p),
                    labelRight: this.calculateRightLabel(a)
                }, {
                    title: "\u06CC\u06A9\u200C\u0633\u0627\u0644\u0647",
                    value: c.toString(),
                    widthLeft: this.calculateLeftWidth(c, p),
                    labelLeft: this.calculateLeftLabel(c),
                    widthRight: this.calculateRightWidth(c, p),
                    labelRight: this.calculateRightLabel(c)
                }]
            }
            )),
            this.returnArray = A(this.returnDataFirstInit$.pipe(fe(this.returnDataApiMapToArray$))),
            this.isBond = K( () => this.activeStockIsin()?.toUpperCase()?.startsWith("IRB")),
            A(this.activeStockIsin$.pipe(X( () => this.reload())))
        }
        calculateLeftWidth(e, t) {
            return e === this.notAvailableSymbol || +e > 0 ? 0 : -e / t * 100
        }
        calculateLeftLabel(e) {
            return e === this.notAvailableSymbol ? this.notAvailableSymbol : +e.toString() < 0 ? Number((+e).toFixed(2)) + "%" : ""
        }
        calculateRightWidth(e, t) {
            return e === this.notAvailableSymbol || +e <= 0 ? 0 : +e.toString() / t * 100
        }
        calculateRightLabel(e) {
            return e === this.notAvailableSymbol ? this.notAvailableSymbol : +e.toString() >= 0 ? Number((+e).toFixed(2)) + "%" : ""
        }
        getReturnChartData(e) {
            return this.mdService.getReturnChartData(e).pipe(X( () => this.loading.emit(!1)), me( () => (this.loading.emit(!1),
            this.errorState.set(!0),
            se(null))))
        }
        reload() {
            this.loading.emit(!0),
            this.errorState.set(!1)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["lib-return-chart"]],
        inputs: {
            activeStockIsin: [1, "activeStockIsin"]
        },
        outputs: {
            loading: "loading"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "d-flex", "flex-column", "align-items-center", "gap-2"], ["width", "36", "height", "36", 1, "text-secondary", "mb-3", 3, "iconName"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], ["width", "20", "height", "20", 3, "iconName"], [1, "d-flex", "align-items-center"], [1, "bar-chart", "w-100"], [1, "d-flex", "justify-content-around", "align-items-center", "bg-principal-3x", "rounded", "w-100", "p-3"], [1, "text-center"], [1, "d-block", "mb-2", "text-muted"], [1, "d-block"], ["dir", "rtl", 1, "d-block", "mb-2", "text-muted"], ["dir", "rtl", 1, "d-block"], [1, "d-flex", "align-items-center", "w-100", "my-1", "gap-3", "small"], ["dir", "ltr", 1, "progress", "w-50", "position-relative", "bg-principal-3x", "bg-principal-4x-dark", 2, "height", "14px"], [1, "progress-bar", "bg-success", "rounded-4", 3, "ngStyle"], [1, "position-absolute", "full-offset", "text-center", "z-1"], [1, "mx-2", "text-muted", 2, "min-width", "35px"], [1, "progress", "w-50", "position-relative", "bg-principal-3x", "bg-principal-4x-dark", 2, "height", "14px"], [1, "progress-bar", "bg-danger", "rounded-4", 3, "ngStyle"], ["dir", "ltr", 1, "position-absolute", "full-offset", "text-center", "z-1"]],
        template: function(t, a) {
            t & 1 && S(0, Sr, 6, 2, "div", 0)(1, Dr, 2, 1),
            t & 2 && y(a.errorState() ? 0 : 1)
        },
        dependencies: [Fe, Q, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var vi = "sdColumnSortState-"
  , Ft = vi + "20240929"
  , Z = function(i) {
    return i[i.MarketDepth = 0] = "MarketDepth",
    i[i.ContractInfo = 1] = "ContractInfo",
    i[i.BaseSymbolInfo = 2] = "BaseSymbolInfo",
    i[i.TrendChart = 3] = "TrendChart",
    i[i.IndInsChart = 4] = "IndInsChart",
    i[i.TradingChart = 5] = "TradingChart",
    i[i.Analytics = 6] = "Analytics",
    i[i.ReturnChart = 7] = "ReturnChart",
    i[i.SymbolInfo = 8] = "SymbolInfo",
    i
}(Z || {});
var ii = [{
    index: Z.MarketDepth,
    id: Z.MarketDepth,
    name: Z[Z.MarketDepth],
    pinned: !0,
    title: "\u062A\u0627\u0628\u0644\u0648",
    isExpand: !0
}, {
    index: Z.ContractInfo,
    id: Z.ContractInfo,
    name: Z[Z.ContractInfo],
    pinned: !1,
    title: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0642\u0631\u0627\u0631\u062F\u0627\u062F",
    isExpand: !0
}, {
    index: Z.BaseSymbolInfo,
    id: Z.BaseSymbolInfo,
    name: Z[Z.BaseSymbolInfo],
    pinned: !1,
    title: "\u0646\u0645\u0627\u062F \u067E\u0627\u06CC\u0647",
    isExpand: !0
}, {
    index: Z.TrendChart,
    id: Z.TrendChart,
    name: Z[Z.TrendChart],
    pinned: !1,
    title: "\u0646\u0645\u0648\u062F\u0627\u0631",
    isExpand: !0
}, {
    index: Z.IndInsChart,
    id: Z.IndInsChart,
    name: Z[Z.IndInsChart],
    pinned: !1,
    title: "\u062D\u0642\u06CC\u0642\u06CC \u0648 \u062D\u0642\u0648\u0642\u06CC",
    isExpand: !0
}, {
    index: Z.TradingChart,
    id: Z.TradingChart,
    name: Z[Z.TradingChart],
    pinned: !1,
    title: "\u0631\u0648\u0646\u062F \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062D\u0642\u06CC\u0642\u06CC",
    isExpand: !0
}, {
    index: Z.Analytics,
    id: Z.Analytics,
    name: Z[Z.Analytics],
    pinned: !1,
    title: "\u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u0646\u0645\u0627\u062F",
    isExpand: !0
}, {
    index: Z.ReturnChart,
    id: Z.ReturnChart,
    name: Z[Z.ReturnChart],
    pinned: !1,
    title: "\u0628\u0627\u0632\u062F\u0647\u06CC",
    isExpand: !0
}, {
    index: Z.SymbolInfo,
    id: Z.SymbolInfo,
    name: Z[Z.SymbolInfo],
    pinned: !1,
    title: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u062A\u06A9\u0645\u06CC\u0644\u06CC",
    isExpand: !0
}];
var kr = (i, o) => o.label
  , Tr = i => ({
    "bg-principal-2x bg-principal-3x-dark-mobile": i
});
function Ir(i, o) {
    if (i & 1 && (r(0, "span", 12),
    u(1),
    s()),
    i & 2) {
        let n = d().$implicit;
        m("colorizeNumber", n == null ? null : n.percent)("ngClass", n == null ? null : n.class),
        l(),
        k(" (", n == null ? null : n.percent, "%) ")
    }
}
function wr(i, o) {
    if (i & 1 && (r(0, "div", 8)(1, "span", 9),
    u(2),
    s(),
    r(3, "div", 10)(4, "span", 11),
    u(5),
    S(6, Ir, 2, 3, "span", 12),
    s()()()),
    i & 2) {
        let n, e = o.$implicit;
        l(2),
        k("", e == null ? null : e.label, " "),
        l(2),
        m("dir", e == null ? null : e.dir),
        l(),
        k(" ", ((n = e == null ? null : e.value) !== null && n !== void 0 ? n : null) !== null ? e == null ? null : e.value : "", " "),
        l(),
        y(e != null && e.percent ? 6 : -1)
    }
}
function Ar(i, o) {
    if (i & 1 && (r(0, "div", 4),
    z(1, wr, 7, 4, "div", 8, kr),
    s()),
    i & 2) {
        let n = o.$implicit
          , e = o.$index;
        m("ngClass", D(1, Tr, e % 2 !== 0)),
        l(),
        W(n)
    }
}
function Pr(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 1)(1, "div", 2)(2, "div", 3),
        z(3, Ar, 3, 3, "div", 4, Se),
        s()()(),
        r(5, "div", 5),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.openPopUpSymbol())
        }),
        C(6, "svg-icon", 6),
        r(7, "small", 7),
        u(8, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0646\u0645\u0627\u062F \u067E\u0627\u06CC\u0647"),
        s()()
    }
    if (i & 2) {
        let n = d();
        l(3),
        W(n.data()),
        l(3),
        m("iconName", n.icons.ExternalLink)
    }
}
function Mr(i, o) {
    if (i & 1 && (r(0, "div", 0),
    C(1, "svg-icon", 13),
    r(2, "span"),
    u(3, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F"),
    s()()),
    i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.InfoBox)
    }
}
var ma = ( () => {
    let o = class o {
        constructor() {
            this.symbolService = $(ge),
            this.lsService = $(Ee),
            this.icons = R,
            this.activeStockIsin = _(""),
            this.openBaseSymbolDetail = B(),
            this.baseSymbol$ = V(this.activeStockIsin).pipe(L(e => e?.length > 0), E(e => this.symbolService.getSymbolStream(e)), E(e => this.symbolService.getOptionBaseSymbolStream(e?.baseIsin)), F(e => ({
                symbol: e,
                symbolIsin: e.symbolIsin,
                industryShortName: Jt.find(t => +t.code.toString() == +e?.sector.trim())?.shortName,
                flow: Ge.symbolFlow[+e?.flow]
            }))),
            this.baseSymbol = A(this.baseSymbol$),
            this.optionBaseSymbolLsMarketData$ = this.baseSymbol$.pipe(L(Boolean), E(e => this.lsService.subscribeToLs(re.BaseSymbolInfo, e?.symbolIsin)), F(e => ({
                lastTradedPrice: e.val[ie.BaseSymbolSchema.lastTradedPrice],
                tradedPriceVar: e.val[ie.BaseSymbolSchema.tradedPriceVar],
                closingPrice: e.val[ie.BaseSymbolSchema.closingPrice],
                totalNumberOfSharesTraded: e.val[ie.BaseSymbolSchema.totalNumberOfSharesTraded],
                totalTradeValue: e.val[ie.BaseSymbolSchema.totalTradeValue],
                feeOfPreviousDaysClosingPrice: e.val[ie.BaseSymbolSchema.feeOfPreviousDaysClosingPrice],
                closingPriceVarPercent: this.symbolService.calculateClosingPriceVarPercent(e.val[ie.BaseSymbolSchema.closingPrice], e.val[ie.BaseSymbolSchema.feeOfPreviousDaysClosingPrice], e.val[ie.BaseSymbolSchema.totalNumberOfSharesTraded]) || 0
            }))),
            this.optionBaseSymbolUnsubscribe$ = this.baseSymbol$.pipe(L(Boolean), dt(), F( ([e]) => this.lsService.unsubscribeSchema(re.ContractInfo, e?.symbolIsin))),
            this.optionBaseSymbolLsMarketData = A(this.optionBaseSymbolLsMarketData$),
            this.data = K( () => [[{
                label: "\u0622\u062E\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A",
                value: new Q("en-US").transform(this.optionBaseSymbolLsMarketData()?.lastTradedPrice),
                dir: "ltr",
                percent: this.optionBaseSymbolLsMarketData()?.tradedPriceVar,
                class: this.optionBaseSymbolLsMarketData()?.tradedPriceVar > 0 ? "text-success" : "text-danger"
            }, {
                label: "\u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC",
                value: new Q("en-US").transform(this.optionBaseSymbolLsMarketData()?.closingPrice),
                percent: this.optionBaseSymbolLsMarketData()?.closingPriceVarPercent,
                dir: "ltr",
                class: this.optionBaseSymbolLsMarketData()?.closingPriceVarPercent > 0 ? "text-success" : "text-danger"
            }], [{
                label: "\u062D\u062C\u0645",
                value: new Q("en-US").transform(this.optionBaseSymbolLsMarketData()?.totalNumberOfSharesTraded, "1.0-0"),
                dir: "ltr",
                percent: null,
                class: ""
            }, {
                label: "\u0627\u0631\u0632\u0634",
                value: new ve().transform(this.optionBaseSymbolLsMarketData()?.totalTradeValue, 1),
                percent: null,
                dir: "ltr",
                class: ""
            }], [{
                label: "\u0628\u0627\u0632\u0627\u0631",
                value: this.baseSymbol()?.flow,
                dir: "ltr",
                percent: null,
                class: ""
            }, {
                label: "\u0635\u0646\u0639\u062A",
                value: this.baseSymbol()?.industryShortName,
                percent: null,
                dir: "ltr",
                class: ""
            }]])
        }
        openPopUpSymbol() {
            this.openBaseSymbolDetail.emit(this.baseSymbol()?.symbol)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["base-symbol-info"]],
        inputs: {
            activeStockIsin: [1, "activeStockIsin"]
        },
        outputs: {
            openBaseSymbolDetail: "openBaseSymbolDetail"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-muted", "w-100"], [1, "position-relative"], [1, "d-flex", "w-100"], [1, "d-flex", "flex-column", "rounded", "rounded-2", "flex-grow-1"], [1, "d-flex", "justify-content-between", "align-items-center", "px-2", "py-1", "rounded-2", "gap-3", 3, "ngClass"], ["id", "base-info-btn", 1, "rounded-2", "bg-principal-3x", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "flex-grow-1", "text-center", "bg-principal-hover", "cup", "p-2", "text-body", 3, "click"], ["id", "base-info-icon", "width", "18", "height", "18", 1, "text-secondary", 3, "iconName"], ["id", "base-info-lbl"], [1, "col", "d-flex", "justify-content-between"], [1, "text-body-tertiary", "d-inline-block", "text-start", "me-1", "small", "t"], ["dir", "ltr", 1, "d-flex", "gap-1"], [1, "text-end", 3, "dir"], [1, "small", 3, "colorizeNumber", "ngClass"], ["width", "48", "height", "48", 1, "", 3, "iconName"]],
        template: function(t, a) {
            t & 1 && S(0, Pr, 9, 1)(1, Mr, 4, 1, "div", 0),
            t & 2 && y(0)
        },
        dependencies: [te, Y, j, Ht],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var ni = ( () => {
    let o = class o {
        constructor(e) {
            this.localStorageService = e,
            this.columnState = new Oe(void 0),
            this.columnState$ = this.columnState.asObservable().pipe(L(Boolean));
            let t = [];
            for (let c = 0, p = localStorage.length; c < p; ++c)
                localStorage.key(c).includes(vi) && localStorage.key(c) !== Ft && t.push(localStorage.key(c));
            t?.forEach(c => localStorage.removeItem(c));
            let a = JSON.parse(e.getItem(Ft));
            this.columnState.next(a || [...ii]),
            this.columnState$.subscribe(c => {
                this.updateOrders(c)
            }
            )
        }
        getPosition(e) {
            let a = this.columnState.value.find(c => c.id == e);
            return a ? a.index : -1
        }
        getTitle(e) {
            return this.columnState.value.find(c => c.id == e).title
        }
        updateOrders(e) {
            this.localStorageService.setItem(Ft, JSON.stringify(e))
        }
        changeVisibilityItem(e) {
            let t = this.columnState.value
              , a = t.find(c => c.id == e);
            a.isExpand = !a.isExpand,
            this.localStorageService.setItem(Ft, JSON.stringify(t))
        }
        getVisibilityItem(e) {
            return this.columnState.value.find(c => c.id == e).isExpand
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)(Ni(hn))
    }
    ,
    o.\u0275prov = Ce({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let i = o;
    return i
}
)();
var Fr = (i, o) => o == null ? null : o.key
  , Er = (i, o) => ({
    loading: i,
    "d-none": o
})
  , Vr = (i, o) => ({
    " active ": i,
    "text-secondary": o
});
function Or(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "button", 5),
        b("click", function() {
            let t = g(n).$implicit
              , a = d(2);
            return f(a.changeChart(t.key))
        }),
        C(1, "svg-icon", 6),
        s()
    }
    if (i & 2) {
        let n = o.$implicit
          , e = d(2);
        m("ngClass", pe(3, Vr, e.selectedChart() === n.key, e.selectedChart() !== n.key)),
        we("title", n.name),
        l(),
        m("iconName", n.icon)
    }
}
function Nr(i, o) {
    if (i & 1 && (r(0, "div", 1),
    z(1, Or, 2, 6, "button", 4, Fr),
    s()),
    i & 2) {
        let n = d();
        l(),
        W(n.chartTypes())
    }
}
function Lr(i, o) {
    if (i & 1 && (r(0, "div", 3),
    C(1, "svg-icon", 7),
    r(2, "span"),
    u(3, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F"),
    s()()),
    i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.InfoBox)
    }
}
var ai = ( () => {
    let o = class o {
        constructor(e, t, a, c) {
            this.router = e,
            this.marketSheetService = t,
            this.orderService = a,
            this.settingStore = c,
            this.icons = R,
            this.onlyShow = _(void 0),
            this.activeStockIsinInput = _(),
            this.status = T(!0),
            this.loading = T(!0),
            this.selectedChart = T("line"),
            this.unique = T(this.uuid()),
            this.chartTypes = T([{
                name: "\u062E\u0637\u06CC",
                key: "line",
                icon: "chart-line"
            }, {
                name: "\u0645\u06CC\u0644\u0647\u200C\u0627\u06CC",
                key: "bar",
                icon: "chart-bar"
            }]),
            this.activeStockIsin = "",
            this.subscribedToLS = !1,
            this.data = [],
            this.depth = {
                buy: [],
                sell: []
            },
            this.margins = {
                top: 10,
                right: 15,
                bottom: 25,
                left: 15
            },
            this.subscriptions = [],
            this.formatPrice = gt(","),
            this.formatVolume = gt("~s"),
            this.theme = "light",
            this.colors = {
                light: {
                    buy: {
                        fill: "rgba(14,193,132,0.2)",
                        stroke: "#1bbf89",
                        bar: "#8ddfc4"
                    },
                    sell: {
                        fill: "rgba(219,66,66,0.2)",
                        stroke: "#d5302a",
                        bar: "#eda8a5"
                    }
                },
                dark: {
                    buy: {
                        fill: "rgba(27, 191, 137, 0.5)",
                        stroke: "#1bbf89",
                        bar: "#267864"
                    },
                    sell: {
                        fill: "rgba(219, 82, 75, 0.5)",
                        stroke: "#d5302a",
                        bar: "#864145"
                    }
                }
            },
            this.filterData = p => !0,
            ue( () => {
                this.activeStockIsinInput() && (this.activeStockIsin = this.activeStockIsinInput(),
                this.getData())
            }
            )
        }
        get chartType() {
            return this.onlyShow() ?? this.selectedChart()
        }
        ngOnInit() {
            let e = this.marketSheetService.sheetsData.pipe(wt(1e3)).pipe(X(this.setDepthValuesFromServiceResponse.bind(this))).subscribe();
            this.subscriptions.push(e),
            this.subscribeToSettings(),
            setTimeout(this.selectRootDom.bind(this), 100)
        }
        ngOnDestroy() {
            this.subscriptions.forEach(e => e.unsubscribe()),
            this.marketSheetService.unSubscribe(this.activeStockIsin)
        }
        reload() {
            this.getData()
        }
        changeChart(e) {
            this.selectedChart.update( () => e),
            this.createChart()
        }
        getData() {
            this.loading.set(!0),
            this.activeStockIsin && this.subscribeToMarketSheetChart(this.activeStockIsin)
        }
        subscribeToMarketSheetChart(e) {
            this.subscribedToLS && this.marketSheetService.unSubscribe(this.activeStockIsin),
            this.activeStockIsin = e,
            this.marketSheetService.getData(e),
            this.subscribedToLS = !0
        }
        subscribeToSettings() {
            let e = this.settingStore.setting$.pipe(X(this.onChangeTheme.bind(this))).subscribe();
            this.subscriptions.push(e)
        }
        setDepthValuesFromServiceResponse(e) {
            this.depth = {
                sell: [],
                buy: []
            };
            let t = {
                sell: 0,
                buy: 0
            };
            e.buy.forEach(a => {
                t.buy += a.volume,
                this.depth.buy.unshift(De(J({}, a), {
                    aggregated: t.buy
                }))
            }
            ),
            e.sell.forEach(a => {
                t.sell += a.volume,
                this.depth.sell.push(De(J({}, a), {
                    aggregated: t.sell
                }))
            }
            ),
            this.depthDetailsSub?.unsubscribe(),
            this.depthDetailsSub = this.marketSheetService.stockDepthDetails.pipe(wt(1e3)).pipe(X(this.setDepthDetails.bind(this))).subscribe(),
            this.subscriptions.push(this.depthDetailsSub)
        }
        setDepthDetails(e) {
            this.highAllowed = e.highAllowed,
            this.lowAllowed = e.lowAllowed,
            this.yesterday = e.yesterday,
            this.filterData = t => t.price >= e.lowAllowed && t.price <= e.highAllowed,
            this.depth.buy = this.depth.buy.filter(this.filterData.bind(this)),
            this.depth.sell = this.depth.sell.filter(this.filterData.bind(this)),
            this.data = [...this.depth.buy, ...this.depth.sell],
            this.status.update( () => !!this.data.length),
            this.status() && (this.loading.set(!1),
            this.createChart())
        }
        onChangeTheme(e) {
            this.theme === "light" !== e.lightTheme && (this.theme = e.lightTheme ? "light" : "dark",
            this.rootDOM && this.createChart())
        }
        selectRootDom() {
            this.rootDOM = yt(`#market-depth-chart-${this.unique()}`),
            new ResizeObserver(this.onResizeDepthChart()).observe(this.rootDOM.node())
        }
        createRootDom() {
            this.dimension = this.rootDOM.node().getBoundingClientRect(),
            this.svg?.remove(),
            this.svg = this.rootDOM.append("svg")
        }
        getDomain(e) {
            return Gi(this.data.map(t => +t[e]))
        }
        createChart() {
            if (this.createRootDom(),
            !this.dimension.width)
                return;
            let e = this.dimension.width - this.margins.left - this.margins.right
              , t = this.dimension.height - this.margins.top - this.margins.bottom;
            this.rootGroup = this.svg.attr("width", this.dimension.width).attr("height", this.dimension.height).append("g").attr("transform", `translate(${this.margins.left},${this.margins.top})`),
            this.domainX = this.getDomain("price"),
            this.x = at().domain(this.domainX).range([0, e]),
            this.chartType === "line" ? this.drawLineChart(e, t) : this.chartType === "bar" && this.drawBarChart(e, t),
            this.drawAxis(e, t),
            this.renderIndicators(),
            this.renderTooltip(e, t),
            this.loading.set(!1)
        }
        drawLineChart(e, t) {
            this.domainY = this.getDomain("aggregated"),
            this.y = at().domain(this.domainY).range([t, 0]),
            this.drawArea(this.depth.buy, this.colors[this.theme].buy),
            this.drawArea(this.depth.sell, this.colors[this.theme].sell)
        }
        drawBarChart(e, t) {
            let a = this.data.map(c => c.price);
            this.bandX = Rt().domain(a).range([0, e]).padding(.05),
            this.domainY = this.getDomain("volume"),
            this.y = at().domain([0, this.domainY[1]]).range([t, 0]),
            this.drawBars(this.depth.buy, this.colors[this.theme].buy),
            this.drawBars(this.depth.sell, this.colors[this.theme].sell)
        }
        drawAxis(e, t) {
            let a = this.chartType === "bar" ? this.bandX : this.x
              , c = this.rootGroup.append("g").raise().attr("transform", `translate(0, ${t})`)
              , p = this.rootGroup.append("g").raise().call(Xi(this.y).tickFormat(this.formatVolume))
              , h = this.rootGroup.append("g").raise().attr("transform", `translate(${e},0)`);
            if (this.chartType === "line")
                c.call(Ct(a).ticks(6)),
                h.call(bt(this.y).tickFormat(this.formatVolume));
            else if (this.chartType === "bar") {
                let {length: x} = this.data
                  , U = Math.round(x / 6)
                  , H = x % U
                  , P = this.data.length > 6 ? this.data.map( (le, Je) => Je % U === Math.floor(H / 2) ? le.price : void 0).filter(le => le) : this.data.map(le => le.price);
                c.call(Ct(a).tickValues(P).tickFormat(this.formatPrice)),
                h.style("stroke-dasharray", "4").style("opacity", .2).call(bt(this.y).tickFormat( () => "").tickSize(e))
            }
            c.select(".domain").style("opacity", .2),
            h.select(".domain").style("opacity", .2),
            p.select(".domain").style("opacity", .2)
        }
        drawArea(e, t) {
            this.rootGroup.append("path").datum(e).attr("fill", t.fill).attr("stroke", "none").attr("d", Ki().x(a => this.x(a.price)).y0(this.y(Re(this.domainY))).y1(a => this.y(a.aggregated)).curve(ui)),
            this.rootGroup.append("path").datum(e).attr("fill", "none").attr("stroke", t.stroke).attr("stroke-width", 1.5).attr("d", Ji().x(a => this.x(a.price)).y(a => this.y(a.aggregated)).curve(ui))
        }
        drawBars(e, t) {
            this.rootGroup.selectAll("bars").data(e).join("rect").attr("x", a => this.bandX(a.price)).attr("y", a => this.y(a.volume)).attr("width", this.bandX.bandwidth()).attr("height", a => this.y(0) - this.y(a.volume)).attr("fill", t.bar)
        }
        renderTooltip(e, t) {
            this.focus = this.svg.append("g").attr("transform", `translate(${this.margins.left},${this.margins.top})`).attr("class", "market-depth-focus").style("display", "none"),
            this.focusNode = this.focus.append("circle").attr("r", 3),
            this.vLine = this.focus.append("line").attr("y1", this.y(Re(this.domainY))).attr("y2", this.y(nt(this.domainY))).call(this.lineDasharrayStyle.bind(this)),
            this.priceText = this.focus.append("g"),
            this.priceText.append("rect").attr("x", -25).attr("y", -15).attr("width", 50).attr("height", 20).style("fill", "#d1d1d1"),
            this.priceText.append("text").style("text-anchor", "middle").style("fill", "#000"),
            this.hLine = this.focus.append("line").attr("x1", this.x(Re(this.domainX))).attr("x2", this.x(nt(this.domainX))).call(this.lineDasharrayStyle.bind(this)),
            this.volumeText = this.focus.append("g"),
            this.volumeText.append("rect").attr("x", -55).attr("width", 60).attr("height", 20).style("fill", "#d1d1d1"),
            this.volumeText.append("text").style("text-anchor", "end").style("fill", "#000"),
            this.svg.append("rect").attr("class", "market-depth-overlay").attr("width", e).attr("height", t).attr("x", this.margins.left).attr("y", this.margins.top).style("cursor", "pointer").on("mouseout", this.mouseout.bind(this)).on("mousemove", this.mousemove.bind(this)).on("click", this.makeOrderOnPriceChartClick.bind(this))
        }
        mouseout() {
            this.focus.style("display", "none"),
            this.tooltipPrice = void 0
        }
        mousemove(e) {
            this.focus.style("display", null);
            let t = e.offsetX - this.margins.left
              , a = e.offsetY - this.margins.top
              , {d: c, coords: p, coordsMin: h} = this.getHoverData(t);
            this.tooltipPrice = c.x,
            this.focusNode.attr("transform", `translate(${p.x},${p.y})`),
            this.vLine.attr("x1", p.x).attr("x2", p.x),
            this.hLine.attr("y1", p.y).attr("y2", p.y);
            let x = 8 * `${c.x}`.length;
            this.priceText.attr("transform", `translate(${p.x}, ${h.y + 15})`),
            this.priceText.select("rect").attr("width", x).attr("x", -x / 2),
            this.priceText.select("text").text(this.formatPrice(c.x));
            let U = gt(".2s")(c.y)
              , H = 8 * U.length + 10;
            this.volumeText.attr("transform", `translate(${h.x}, ${p.y})`),
            this.volumeText.select("rect").attr("width", H).attr("x", -H / 2 - 10),
            this.volumeText.select("text").text(U),
            a > 50 ? (this.volumeText.select("text").attr("dy", "-0.6em"),
            this.volumeText.select("rect").attr("y", -22)) : (this.volumeText.select("text").attr("dy", "1.2em"),
            this.volumeText.select("rect").attr("y", 0))
        }
        getHoverData(e) {
            if (this.chartType === "line") {
                let t = si(le => le.price)
                  , a = this.x.invert(e)
                  , c = t.center(this.data, a)
                  , p = this.data[c > 0 ? c - 1 : c]
                  , h = this.data[c]
                  , x = a - p?.price > h?.price - a ? h : p
                  , U = {
                    x: x.price,
                    y: x.aggregated
                }
                  , H = {
                    x: this.x(U.x),
                    y: this.y(U.y)
                }
                  , P = {
                    x: 30,
                    y: this.y(Re(this.domainY))
                };
                return {
                    d: U,
                    coords: H,
                    coordsMin: P
                }
            } else if (this.chartType === "bar") {
                let t = this.bandX.step()
                  , a = null;
                for (let x = 0; x < this.data.length; x++) {
                    let U = this.data[x]
                      , H = this.bandX(U.price);
                    if (x < this.data.length - 1) {
                        let P = this.bandX(this.data[x + 1].price);
                        if (H <= e && e <= P) {
                            a = U;
                            break
                        }
                    } else
                        e < this.bandX(this.data[0].price) ? a = this.data[0] : a = U
                }
                let c = {
                    x: a.price,
                    y: a.volume
                }
                  , p = {
                    x: this.bandX(c.x) + t / 2,
                    y: this.y(c.y)
                }
                  , h = {
                    x: 100,
                    y: this.y(Re(this.domainY))
                };
                return {
                    d: c,
                    coords: p,
                    coordsMin: h
                }
            }
        }
        renderIndicators() {
            let e;
            if (this.chartType === "line")
                e = this.x(this.yesterday);
            else if (this.chartType === "bar") {
                let h = si(P => P)
                  , x = this.bandX.domain()
                  , U = this.bandX.step()
                  , H = h.center(x, this.yesterday);
                e = this.bandX(this.yesterday) ?? this.bandX(x[H]),
                e += U / 2
            }
            let t = this.rootGroup.append("g")
              , [a,c] = this.domainX
              , p = c - a;
            this.yesterday - a >= p * .1 && c - this.yesterday <= p * .9 && (t.append("line").attr("x1", e).attr("x2", e).attr("y1", this.y(Re(this.domainY))).attr("y2", 15).call(this.lineDasharrayStyle.bind(this)),
            t.append("text").attr("x", e).attr("y", this.y(nt(this.domainY))).text(this.formatPrice(this.yesterday)).style("text-anchor", "middle").style("fill", "currentColor"))
        }
        lineDasharrayStyle(e) {
            e.style("stroke-dasharray", 5).style("stroke-width", 1).style("opacity", .2).style("stroke", "currentColor")
        }
        makeOrderOnPriceChartClick() {
            if (!this.tooltipPrice)
                return;
            this.orderService.orderOverlayChangeState(!0),
            this.router.routerState.snapshot.url.split("/").findIndex(a => a === kn.EditModeInUrl) < 0 ? this.orderService.updateOrderFromMarketDepthState({
                isin: this.activeStockIsin,
                side: ye.BUY,
                quantity: null,
                price: this.tooltipPrice,
                type: 1
            }) : this.orderService.updateOrderFromMarketDepthState({
                quantity: null,
                price: this.tooltipPrice,
                type: 3
            })
        }
        onResizeDepthChart() {
            let e = !0, t;
            return () => {
                if (e) {
                    e = !1;
                    return
                }
                clearTimeout(t),
                t = window.setTimeout(this.createChart.bind(this), 200)
            }
        }
        uuid() {
            return "xxxxxxxx".replace(/[xy]/g, e => {
                let t = Math.random() * 16 | 0;
                return (e === "x" ? t : t & 3 | 8).toString(16)
            }
            )
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)(ee(Ue),ee(qe),ee(ei),ee(Tn))
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["lib-market-depth-chart"]],
        inputs: {
            onlyShow: [1, "onlyShow"],
            activeStockIsinInput: [1, "activeStockIsinInput"]
        },
        decls: 4,
        vars: 8,
        consts: [[1, "market-depth-chart", "position-relative", "tabs", 3, "ngClass"], [1, "d-flex", "flex-row-reverse", "mb-2", "gap-1", "tabs-holder", "bg-transparent"], [3, "id"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-muted", "w-100", "py-5", "border-top"], ["type", "button", 1, "btn", "btn-sm", "tab", 3, "ngClass"], ["type", "button", 1, "btn", "btn-sm", "tab", 3, "click", "ngClass"], ["width", "18", "height", "18", 3, "iconName"], ["width", "48", "height", "48", 1, "", 3, "iconName"]],
        template: function(t, a) {
            t & 1 && (r(0, "div", 0),
            S(1, Nr, 3, 0, "div", 1),
            C(2, "figure", 2),
            s(),
            S(3, Lr, 4, 1, "div", 3)),
            t & 2 && (m("ngClass", pe(5, Er, a.loading(), !a.status())),
            l(),
            y(a.onlyShow() ? -1 : 1),
            l(),
            Ui("id", "market-depth-chart-", a.unique(), ""),
            l(),
            y(a.status() ? -1 : 3))
        },
        dependencies: [Y, j],
        styles: [`.market-depth-chart figure{width:100%;height:250px;margin:0;direction:ltr}.market-depth-chart svg{overflow:visible}.market-depth-chart g{font-family:IRANSansX}.market-depth-chart .market-depth-overlay{position:relative;fill:none;pointer-events:all;z-index:1}.market-depth-chart .market-depth-focus circle{fill:#4f6883}.market-depth-chart .market-depth-focus text{font-size:12px}.market-depth-chart .market-depth-tooltip{fill:#fff;stroke:#888}.market-depth-chart .market-depth-tooltip-value,.market-depth-chart .market-depth-tooltip-volume{direction:rtl}
/*# sourceMappingURL=market-depth-chart-library.component-4ZVN2AC6.css.map */
`],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var Br = (i, o, n) => ({
    "text-warning": i,
    "text-success": o,
    "text-danger": n
});
function $r(i, o) {
    i & 1 && (tt(),
    r(0, "svg", 4),
    C(1, "use", 6),
    s())
}
function Ur(i, o) {
    if (i & 1 && C(0, "svg-icon", 5),
    i & 2) {
        let n = d();
        m("iconName", n.icons.LsConnect)
    }
}
var pa = ( () => {
    let o = class o {
        constructor(e) {
            this.ls = e,
            this.icons = R,
            this.lsStatus = T(0),
            this.subs = []
        }
        ngOnInit() {
            this.getLsConnectionState()
        }
        ngOnDestroy() {
            this.subs.forEach(e => e.unsubscribe())
        }
        getLsConnectionState() {
            let e = this.ls.connectionState$.subscribe(t => {
                this.lsStatus.set(t)
            }
            );
            this.subs.push(e)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)(ee(St))
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["ls-marketsheet-connection-state"]],
        decls: 7,
        vars: 7,
        consts: [[1, "d-none"], ["id", "ls-not-connect", "width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M22.7071 2.70711C23.0976 2.31658 23.0976 1.68342 22.7071 1.29289C22.3166 0.902369 21.6834 0.902369 21.2929 1.29289L19.5 3.08579L17.7071 1.29289C17.3166 0.902369 16.6834 0.902369 16.2929 1.29289C15.9024 1.68342 15.9024 2.31658 16.2929 2.70711L18.0858 4.5L16.2929 6.29289C15.9024 6.68342 15.9024 7.31658 16.2929 7.70711C16.6834 8.09763 17.3166 8.09763 17.7071 7.70711L19.5 5.91421L21.2929 7.70711C21.6834 8.09763 22.3166 8.09763 22.7071 7.70711C23.0976 7.31658 23.0976 6.68342 22.7071 6.29289L20.9142 4.5L22.7071 2.70711ZM19.9833 12.0262C19.9995 11.7893 20 11.4796 20 11C20 10.4477 20.4477 10 21 10C21.5523 10 22 10.4477 22 11V11.032C22 11.4706 22 11.8491 21.9787 12.1624C21.9561 12.4922 21.9066 12.8221 21.7716 13.1481C21.4672 13.8831 20.8831 14.4672 20.1481 14.7716C19.8221 14.9066 19.4922 14.9561 19.1624 14.9787C18.8491 15 18.4707 15 18.032 15H18.032H18H13V16.0082C13.0476 16.0105 13.0938 16.0133 13.1382 16.0169C13.3668 16.0356 13.6366 16.0797 13.908 16.218C14.2843 16.4097 14.5903 16.7157 14.782 17.092C14.9203 17.3634 14.9644 17.6332 14.9831 17.8618C14.9867 17.9062 14.9895 17.9524 14.9918 18H21C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20H14.9918C14.9895 20.0476 14.9867 20.0938 14.9831 20.1382C14.9644 20.3668 14.9203 20.6366 14.782 20.908C14.5903 21.2843 14.2843 21.5903 13.908 21.782C13.6366 21.9203 13.3668 21.9644 13.1382 21.9831C12.9301 22.0001 12.6843 22 12.4319 22L12.4 22H11.6L11.5681 22C11.3157 22 11.0699 22.0001 10.8618 21.9831C10.6332 21.9644 10.3634 21.9203 10.092 21.782C9.7157 21.5903 9.40974 21.2843 9.21799 20.908C9.07969 20.6366 9.03562 20.3668 9.01695 20.1382C9.01332 20.0938 9.01046 20.0476 9.00821 20H3C2.44772 20 2 19.5523 2 19C2 18.4477 2.44772 18 3 18H9.00821C9.01046 17.9524 9.01332 17.9062 9.01695 17.8618C9.03562 17.6332 9.07969 17.3634 9.21799 17.092C9.40974 16.7157 9.7157 16.4097 10.092 16.218C10.3634 16.0797 10.6332 16.0356 10.8618 16.0169C10.9062 16.0133 10.9524 16.0105 11 16.0082V15H6.2H6.16148H6.16145C5.6343 15 5.17954 15 4.80497 14.9694C4.40963 14.9371 4.01641 14.8658 3.63803 14.673C3.07354 14.3854 2.6146 13.9265 2.32698 13.362C2.13419 12.9836 2.06287 12.5904 2.03057 12.195C1.99997 11.8205 1.99998 11.3657 2 10.8386V10.8386V10.8V8.2V8.16143V8.16142C1.99998 7.63428 1.99997 7.17953 2.03057 6.80497C2.06287 6.40963 2.13419 6.01641 2.32698 5.63803C2.6146 5.07354 3.07354 4.6146 3.63803 4.32698C4.01641 4.13419 4.40963 4.06287 4.80497 4.03057C5.17954 3.99996 5.6343 3.99998 6.16144 4H6.16145H6.16145H6.16145H6.16146L6.2 4H13.5C14.0523 4 14.5 4.44771 14.5 5C14.5 5.55228 14.0523 6 13.5 6H6.2C5.62345 6 5.25118 6.00078 4.96784 6.02393C4.69618 6.04612 4.59546 6.0838 4.54601 6.10899C4.35785 6.20487 4.20487 6.35785 4.109 6.54601C4.0838 6.59545 4.04613 6.69617 4.02393 6.96783C4.00078 7.25117 4 7.62345 4 8.2V10.8C4 11.3766 4.00078 11.7488 4.02393 12.0322C4.04613 12.3038 4.0838 12.4045 4.109 12.454C4.20487 12.6422 4.35785 12.7951 4.54601 12.891C4.59546 12.9162 4.69618 12.9539 4.96784 12.9761C5.25118 12.9992 5.62345 13 6.2 13H11.999H12H12.001L18 13C18.4796 13 18.7893 12.9995 19.0262 12.9833C19.2542 12.9677 19.3411 12.9411 19.3827 12.9239C19.6277 12.8224 19.8224 12.6277 19.9239 12.3827C19.9411 12.3411 19.9677 12.2542 19.9833 12.0262ZM11.0115 18.0114L11.0103 18.0246C11.0008 18.1412 11 18.3035 11 18.6V19V19.4C11 19.6965 11.0008 19.8588 11.0103 19.9754L11.0115 19.9886L11.0246 19.9897C11.1412 19.9992 11.3035 20 11.6 20H12.4C12.6965 20 12.8588 19.9992 12.9754 19.9897L12.9886 19.9886L12.9897 19.9754C12.9992 19.8588 13 19.6965 13 19.4V19V18.6C13 18.3035 12.9992 18.1412 12.9897 18.0246L12.9886 18.0114L12.9754 18.0103C12.8588 18.0008 12.6965 18 12.4 18H12H11.6C11.3035 18 11.1412 18.0008 11.0246 18.0103L11.0115 18.0114ZM6 9C6 8.73478 6.10536 8.48043 6.2929 8.29289C6.48043 8.10536 6.73479 8 7 8H8C8.26522 8 8.51957 8.10536 8.70711 8.29289C8.89465 8.48043 9 8.73478 9 9V10C9 10.5523 8.55229 11 8 11H7C6.44772 11 6 10.5523 6 10V9Z", "fill", "currentColor"], [3, "title", "ngClass"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["width", "18", "height", "18", 3, "iconName"], ["href", "#ls-not-connect"]],
        template: function(t, a) {
            t & 1 && (tt(),
            r(0, "svg", 0)(1, "symbol", 1),
            u(2, " > "),
            C(3, "path", 2),
            s()(),
            Li(),
            r(4, "span", 3),
            S(5, $r, 2, 0, ":svg:svg", 4)(6, Ur, 1, 1, "svg-icon", 5),
            s()),
            t & 2 && (l(4),
            m("title", a.lsStatus() === 1 ? "\u062F\u0631\u062D\u0627\u0644 \u0627\u062A\u0635\u0627\u0644" : a.lsStatus() === 2 ? "\u0645\u062A\u0635\u0644" : "\u0642\u0637\u0639\u061B \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u0631\u0648\u0632 \u0646\u0628\u0627\u0634\u062F")("ngClass", At(3, Br, a.lsStatus() === 1, a.lsStatus() === 2, a.lsStatus() !== 1 && a.lsStatus() !== 2)),
            l(),
            y(a.lsStatus() !== 1 && a.lsStatus() !== 2 ? 5 : a.lsStatus() === 1 || a.lsStatus() === 2 ? 6 : -1))
        },
        dependencies: [Y, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var Rr = ["marketDepthAllModal"]
  , ha = (i, o) => o == null ? null : o.price
  , Ca = i => ({
    active: i
})
  , jr = (i, o) => ({
    "flex-column": i,
    "overflow-hidden": o
})
  , Hr = i => ({
    loading: i
})
  , oi = i => ({
    disabled: i
})
  , ya = i => ({
    width: i
})
  , ga = (i, o) => ({
    "text-success": i,
    "text-danger": o
});
function Qr(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 9)(1, "ul", 12)(2, "li", 13)(3, "span", 14),
        b("click", function() {
            g(n);
            let t = d(2);
            return f(t.selectedTab.set("allDepth"))
        }),
        u(4, " \u0647\u0645\u0647 \u0645\u0638\u0646\u0647\u200C\u0647\u0627 "),
        s()(),
        r(5, "li", 15),
        b("click", function() {
            g(n);
            let t = d(2);
            return f(t.selectedTab.set("charts"))
        }),
        r(6, "span", 16),
        u(7, " \u0646\u0645\u0648\u062F\u0627\u0631 \u0639\u0645\u0642 \u0628\u0627\u0632\u0627\u0631 "),
        s()()()()
    }
    if (i & 2) {
        let n = d(2);
        l(3),
        m("ngClass", D(2, Ca, n.selectedTab() === "allDepth")),
        l(3),
        m("ngClass", D(4, Ca, n.selectedTab() === "charts"))
    }
}
function zr(i, o) {
    if (i & 1 && (r(0, "span", 29),
    u(1),
    M(2, "percent"),
    s()),
    i & 2) {
        let n = d().$implicit
          , e = d(4);
        m("ngClass", pe(5, ga, (n == null ? null : n.price) > e.marketSheetService.details.yesterday, (n == null ? null : n.price) < e.marketSheetService.details.yesterday)),
        l(),
        k(" ", ne(2, 2, ((n == null ? null : n.price) - e.marketSheetService.details.yesterday) / e.marketSheetService.details.yesterday, "1.1-2"), " ")
    }
}
function Wr(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "tr")(1, "td", 27),
        u(2),
        s(),
        r(3, "td", 28),
        u(4),
        M(5, "number"),
        s(),
        r(6, "td", 29)(7, "div", 30),
        C(8, "div", 31),
        r(9, "div", 32)(10, "span", 33),
        b("tap", function() {
            let t = g(n).$implicit
              , a = d(4);
            return f(a.onMakeOrderOnPriceClickHandler("buy", t == null ? null : t.price))
        }),
        u(11),
        M(12, "number"),
        s(),
        r(13, "span", 34),
        b("tap", function() {
            let t = g(n)
              , a = t.$implicit
              , c = t.$index
              , p = d(4);
            return f(p.onMakeOrderOnQuantityClickHandler("buy", c, a == null ? null : a.price))
        }),
        u(14),
        M(15, "number"),
        s(),
        S(16, zr, 3, 8, "ng-template", null, 1, be),
        s()()()()
    }
    if (i & 2) {
        let n = o.$implicit
          , e = o.$index
          , t = oe(17)
          , a = d(4);
        l(2),
        N(e + 1),
        l(),
        m("ngClass", D(17, oi, (n == null ? null : n.price) > a.marketSheetService.details.highAllowed || (n == null ? null : n.price) < a.marketSheetService.details.lowAllowed)),
        l(),
        k(" ", ne(5, 8, n == null ? null : n.amount, "1.0-0"), " "),
        l(2),
        m("ngClass", D(19, oi, (n == null ? null : n.price) > a.marketSheetService.details.highAllowed || (n == null ? null : n.price) < a.marketSheetService.details.lowAllowed)),
        l(2),
        m("ngStyle", D(21, ya, (n == null ? null : n.volume) * 100 / a.maxQuantity() + "%")),
        l(2),
        m("ngbTooltip", t),
        l(),
        k(" ", ne(12, 11, n == null ? null : n.price, "1.0-0"), " "),
        l(3),
        k(" ", ne(15, 14, n == null ? null : n.volume, "1.0-0"), " ")
    }
}
function Gr(i, o) {
    if (i & 1 && (r(0, "span", 29),
    u(1),
    M(2, "percent"),
    s()),
    i & 2) {
        let n = d().$implicit
          , e = d(4);
        m("ngClass", pe(5, ga, (n == null ? null : n.price) > e.marketSheetService.details.yesterday, (n == null ? null : n.price) < e.marketSheetService.details.yesterday)),
        l(),
        k(" ", ne(2, 2, ((n == null ? null : n.price) - e.marketSheetService.details.yesterday) / e.marketSheetService.details.yesterday, "1.1-2"), " ")
    }
}
function Yr(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "tr")(1, "td", 29)(2, "div", 35),
        C(3, "div", 31),
        r(4, "div", 32)(5, "span", 36),
        b("tap", function() {
            let t = g(n).$implicit
              , a = d(4);
            return f(a.onMakeOrderOnPriceClickHandler("sell", t == null ? null : t.price))
        }),
        u(6),
        M(7, "number"),
        s(),
        r(8, "span", 34),
        b("tap", function() {
            let t = g(n)
              , a = t.$implicit
              , c = t.$index
              , p = d(4);
            return f(p.onMakeOrderOnQuantityClickHandler("sell", c, a == null ? null : a.price))
        }),
        u(9),
        M(10, "number"),
        s(),
        S(11, Gr, 3, 8, "ng-template", null, 2, be),
        s()()(),
        r(13, "td", 28),
        u(14),
        M(15, "number"),
        s(),
        r(16, "td", 27),
        u(17),
        s()()
    }
    if (i & 2) {
        let n = o.$implicit
          , e = o.$index
          , t = oe(12)
          , a = d(4);
        l(),
        m("ngClass", D(17, oi, (n == null ? null : n.price) > a.marketSheetService.details.highAllowed || (n == null ? null : n.price) < a.marketSheetService.details.lowAllowed)),
        l(2),
        m("ngStyle", D(19, ya, (n == null ? null : n.volume) * 100 / a.maxQuantity() + "%")),
        l(2),
        m("ngbTooltip", t),
        l(),
        k(" ", ne(7, 8, n == null ? null : n.price, "1.0-0"), " "),
        l(3),
        k(" ", ne(10, 11, n == null ? null : n.volume, "1.0-0"), " "),
        l(4),
        m("ngClass", D(21, oi, (n == null ? null : n.price) > a.marketSheetService.details.highAllowed || (n == null ? null : n.price) < a.marketSheetService.details.lowAllowed)),
        l(),
        k(" ", ne(15, 14, n == null ? null : n.amount, "1.0-0"), " "),
        l(3),
        N(e + 1)
    }
}
function Xr(i, o) {
    if (i & 1 && (r(0, "div", 18)(1, "div", 20)(2, "div", 21)(3, "table", 22)(4, "colgroup"),
    C(5, "col", 23)(6, "col", 23)(7, "col"),
    s(),
    r(8, "thead")(9, "tr")(10, "th", 24)(11, "small"),
    u(12, "\u0631\u062F\u06CC\u0641"),
    s()(),
    r(13, "th", 25),
    u(14, "\u062A\u0639\u062F\u0627\u062F"),
    s(),
    r(15, "th", 25)(16, "div", 26)(17, "span"),
    u(18, "\u062D\u062C\u0645"),
    s(),
    r(19, "span"),
    u(20, " \u0642\u06CC\u0645\u062A "),
    s()()()()(),
    r(21, "tbody"),
    z(22, Wr, 18, 23, "tr", null, ha),
    s()(),
    r(24, "table", 22)(25, "colgroup"),
    C(26, "col")(27, "col", 23)(28, "col", 23),
    s(),
    r(29, "thead")(30, "tr")(31, "th", 25)(32, "div", 26)(33, "span"),
    u(34, "\u0642\u06CC\u0645\u062A "),
    s(),
    r(35, "span"),
    u(36, "\u062D\u062C\u0645"),
    s()()(),
    r(37, "th", 25),
    u(38, "\u062A\u0639\u062F\u0627\u062F"),
    s(),
    r(39, "th", 24)(40, "small"),
    u(41, "\u0631\u062F\u06CC\u0641"),
    s()()()(),
    r(42, "tbody"),
    z(43, Yr, 18, 23, "tr", null, ha),
    s()()()()()),
    i & 2) {
        let n, e, t = d(3);
        m("ngClass", D(1, Hr, t.loadingData() || t.loadingRlc())),
        l(22),
        W((n = t.sheetDepthRows()) == null ? null : n.buy),
        l(21),
        W((e = t.sheetDepthRows()) == null ? null : e.sell)
    }
}
function qr(i, o) {
    if (i & 1 && (r(0, "div", 19)(1, "div", 37),
    C(2, "lib-market-depth-chart", 38)(3, "lib-market-depth-chart", 38),
    s(),
    r(4, "div", 39)(5, "div", 40)(6, "span"),
    u(7, "\u062D\u062C\u0645 \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u062E\u0631\u06CC\u062F"),
    s(),
    r(8, "span", 41),
    u(9),
    M(10, "largeNumber"),
    s()(),
    r(11, "div", 40)(12, "span"),
    u(13, "\u062D\u062C\u0645 \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u0641\u0631\u0648\u0634"),
    s(),
    r(14, "span", 41),
    u(15),
    M(16, "largeNumber"),
    s()(),
    r(17, "div", 40)(18, "span"),
    u(19, "\u062A\u0639\u062F\u0627\u062F \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u062E\u0631\u06CC\u062F"),
    s(),
    r(20, "span", 41),
    u(21),
    M(22, "number"),
    s()(),
    r(23, "div", 40)(24, "span"),
    u(25, "\u062A\u0639\u062F\u0627\u062F \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u0641\u0631\u0648\u0634"),
    s(),
    r(26, "span", 41),
    u(27),
    M(28, "number"),
    s()(),
    r(29, "div", 40)(30, "span"),
    u(31, "\u0627\u0631\u0632\u0634 \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u062E\u0631\u06CC\u062F"),
    s(),
    r(32, "span", 41),
    u(33),
    M(34, "largeNumber"),
    s()(),
    r(35, "div", 40)(36, "span"),
    u(37, "\u0627\u0631\u0632\u0634 \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u0641\u0631\u0648\u0634"),
    s(),
    r(38, "span", 41),
    u(39),
    M(40, "largeNumber"),
    s()(),
    r(41, "div", 40)(42, "span"),
    u(43, "\u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646 \u0648\u0632\u0646\u06CC \u0642\u06CC\u0645\u062A \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u062E\u0631\u06CC\u062F"),
    s(),
    r(44, "span", 41),
    u(45),
    M(46, "largeNumber"),
    s()(),
    r(47, "div", 40)(48, "span"),
    u(49, "\u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646 \u0648\u0632\u0646\u06CC \u0642\u06CC\u0645\u062A \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u0641\u0631\u0648\u0634"),
    s(),
    r(50, "span", 41),
    u(51),
    M(52, "largeNumber"),
    s()()()()),
    i & 2) {
        let n = d(3);
        l(2),
        m("activeStockIsinInput", n.activeStockIsin())("onlyShow", "line"),
        l(),
        m("activeStockIsinInput", n.activeStockIsin())("onlyShow", "bar"),
        l(6),
        N(G(10, 12, n.ordersInfo().buy.volume)),
        l(6),
        N(G(16, 14, n.ordersInfo().sell.volume)),
        l(6),
        N(G(22, 16, n.ordersInfo().buy.amount)),
        l(6),
        N(G(28, 18, n.ordersInfo().sell.amount)),
        l(6),
        N(G(34, 20, n.ordersInfo().buy.value)),
        l(6),
        N(G(40, 22, n.ordersInfo().sell.value)),
        l(6),
        N(G(46, 24, n.ordersInfo().buy.averagePrice)),
        l(6),
        N(G(52, 26, n.ordersInfo().sell.averagePrice))
    }
}
function Zr(i, o) {
    if (i & 1 && (r(0, "div", 10)(1, "div", 17),
    S(2, Xr, 45, 3, "div", 18)(3, qr, 53, 28, "div", 19),
    s()()),
    i & 2) {
        let n = d(2);
        l(),
        m("ngClass", pe(3, jr, n.isMobile(), !n.isMobile())),
        l(),
        y(!n.isMobile() || n.isMobile() && n.selectedTab() === "allDepth" ? 2 : -1),
        l(),
        y(n.showAllInfo() && !n.isMobile() || n.isMobile() && n.selectedTab() === "charts" ? 3 : -1)
    }
}
function Jr(i, o) {
    if (i & 1 && (r(0, "div", 11),
    C(1, "svg-icon", 42),
    u(2, " \u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u062C\u0647\u062A \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F "),
    s()),
    i & 2) {
        let n = d(2);
        l(),
        m("iconName", n.icons.Alert)
    }
}
function Kr(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 3)(1, "span", 4),
        u(2, "\u0645\u0638\u0646\u0647\u200C\u0647\u0627\u06CC \u0639\u0645\u0642 \u0628\u0627\u0632\u0627\u0631 "),
        r(3, "span", 5),
        u(4),
        s()(),
        r(5, "div", 6),
        C(6, "ls-marketsheet-connection-state", 7),
        r(7, "svg-icon", 8),
        b("click", function(t) {
            return g(n),
            d().closeBtnClickedHandler(),
            f(t.stopPropagation())
        }),
        s()()(),
        S(8, Qr, 8, 6, "div", 9)(9, Zr, 4, 6, "div", 10)(10, Jr, 3, 1, "div", 11)
    }
    if (i & 2) {
        let n, e = d();
        l(4),
        N(e.symbolName()),
        l(3),
        m("iconName", e.icons.Close),
        l(),
        y(e.isMobile() ? 8 : -1),
        l(),
        y(!((n = e.sheetDepthRows()) == null || n.buy == null) && n.buy.length || !((n = e.sheetDepthRows()) == null || n.sell == null) && n.sell.length ? 9 : 10)
    }
}
var ba = {
    volume: 0,
    amount: 0,
    value: 0,
    averagePrice: 0,
    valuePercent: 0
}
  , fa = ( () => {
    let o = class o extends _n {
        constructor(e, t) {
            super(),
            this.marketSheetService = e,
            this.symbolService = t,
            this.icons = R,
            this.marketDepthAllModal = Le("marketDepthAllModal"),
            this.marketDepthAllClose = B(),
            this.makeOrderOnPriceClick = B(),
            this.makeOrderOnQuantityClick = B(),
            this.activeStockIsin = _(""),
            this.showAllInfo = _(!1),
            this.isMobile = _(!1),
            this.selectedTab = T("allDepth"),
            this.sheetDepthRows$ = V(this.activeStockIsin).pipe(E( () => this.marketSheetService.sheetsData.pipe(F(a => ({
                buy: a.buy.filter(c => c?.price <= this.marketSheetService.details.highAllowed && c?.price >= this.marketSheetService.details.lowAllowed),
                sell: a.sell.filter(c => c?.price <= this.marketSheetService.details.highAllowed && c?.price >= this.marketSheetService.details.lowAllowed)
            }))))),
            this.sheetDepthRows = A(this.sheetDepthRows$),
            this.maxQuantity = K( () => Math.max(...this.sheetDepthRows().buy.map(a => a.volume), ...this.sheetDepthRows().sell.map(a => a.volume))),
            this.symbolName$ = V(this.activeStockIsin).pipe(E(a => this.symbolService.getSymbolStream(a)), F(a => a?.symbolName)),
            this.symbolName = A(this.symbolName$),
            this.loadingData = T(!1),
            this.loadingRlc = T(!1),
            this.stockDepthDetails$ = V(this.activeStockIsin).pipe(E( () => this.marketSheetService.stockDepthDetails)),
            this.stockDepthDetails = A(this.stockDepthDetails$),
            this.symbolData$ = V(this.activeStockIsin).pipe(E(a => this.symbolService.getSymbolStream(a))),
            this.symbolData = A(this.symbolData$),
            this.ordersInfo = K( () => {
                let a = this.symbolData()?.marketUnit
                  , {highAllowed: c, lowAllowed: p} = this.stockDepthDetails()
                  , h = J({}, ba)
                  , x = He(a) ? this.symbolData()?.csize : 1;
                h.volume = this.sheetDepthRows().buy.filter(P => P.price >= p && P.price <= c).reduce( (P, le) => le.volume + P, 0),
                h.amount = this.sheetDepthRows().buy.filter(P => P.price >= p && P.price <= c).reduce( (P, le) => le.amount + P, 0),
                h.value = this.sheetDepthRows().buy.filter(P => P.price >= p && P.price <= c).reduce( (P, le) => le.price * le.volume + P, 0) * x,
                h.averagePrice = h.volume ? h.value / (h.volume * x) : 0;
                let U = J({}, ba);
                U.volume = this.sheetDepthRows().sell.filter(P => P.price >= p && P.price <= c).reduce( (P, le) => le.volume + P, 0),
                U.amount = this.sheetDepthRows().sell.filter(P => P.price >= p && P.price <= c).reduce( (P, le) => le.amount + P, 0),
                U.value = this.sheetDepthRows().sell.filter(P => P.price >= p && P.price <= c).reduce( (P, le) => le.price * le.volume + P, 0) * x,
                U.averagePrice = U.volume ? U.value / (U.volume * x) : 0;
                let H = U.value + h.value;
                return h.valuePercent = H ? Math.round(h.value / H * 1e3) / 10 : 0,
                U.valuePercent = H ? Math.round(U.value / H * 1e3) / 10 : 0,
                {
                    buy: h,
                    sell: U
                }
            }
            )
        }
        ngOnInit() {
            this.loadingData.set(!0),
            this.loadingRlc.set(!0),
            Me(500).subscribe( () => {
                this.loadingData.set(!1),
                this.loadingRlc.set(!1)
            }
            ),
            this.marketSheetService.getData(this.activeStockIsin()),
            this.openModalWithDelay()
        }
        ngOnDestroy() {
            this.marketSheetService.unSubscribe(this.activeStockIsin())
        }
        openModalWithDelay() {
            setTimeout( () => {
                this.openModal()
            }
            , Qi)
        }
        openModal() {
            let e = {
                keyboard: !1,
                scrollable: !0,
                backdrop: "static",
                size: "lg"
            };
            this.modalService.open(this.marketDepthAllModal(), e).result.then( () => {}
            , () => {
                this.doAfterCloseOperations()
            }
            )
        }
        closeModal() {
            this.modalService.dismissAll()
        }
        closeBtnClickedHandler() {
            this.closeModal()
        }
        onMakeOrderOnPriceClickHandler(e, t) {
            let a = this.revertSide(e)
              , c = {
                isin: this.activeStockIsin(),
                side: a,
                quantity: null,
                price: t,
                type: 2
            };
            this.makeOrderOnPriceClick.emit(c),
            this.closeModal()
        }
        onMakeOrderOnQuantityClickHandler(e, t, a) {
            let c = this.revertSide(e)
              , p = this.calculateQuantityFromOrderDepth(t, e)
              , h = {
                isin: this.activeStockIsin(),
                side: c,
                quantity: p,
                price: a,
                type: 2
            };
            this.makeOrderOnQuantityClick.emit(h),
            this.closeModal()
        }
        revertSide(e) {
            if (e === ye.BUY)
                return ye.SELL;
            if (e === ye.SELL)
                return ye.BUY
        }
        calculateQuantityFromOrderDepth(e, t) {
            if (t === ye.BUY)
                return this.sheetDepthRows().buy.map(a => a?.volume).filter( (a, c) => c <= e).reduce( (a, c) => a + c, 0);
            if (t === ye.SELL)
                return this.sheetDepthRows().sell.map(a => a?.volume).filter( (a, c) => c <= e).reduce( (a, c) => a + c, 0)
        }
        doAfterCloseOperations() {
            this.marketDepthAllClose.emit(!0)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)(ee(qe),ee(ge))
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["lib-market-depth-all"]],
        viewQuery: function(t, a) {
            t & 1 && $e(a.marketDepthAllModal, Rr, 5),
            t & 2 && We()
        },
        inputs: {
            activeStockIsin: [1, "activeStockIsin"],
            showAllInfo: [1, "showAllInfo"],
            isMobile: [1, "isMobile"]
        },
        outputs: {
            marketDepthAllClose: "marketDepthAllClose",
            makeOrderOnPriceClick: "makeOrderOnPriceClick",
            makeOrderOnQuantityClick: "makeOrderOnQuantityClick"
        },
        features: [Bi],
        decls: 2,
        vars: 0,
        consts: [["marketDepthAllModal", ""], ["buyTipContent", ""], ["sellTipContent", ""], [1, "modal-header", "align-items-center", "bg-principal-2x-dark", "bg-principal-3x-dark-mobile", "d-flex", "justify-content-between"], [1, "modal-title"], [1, "text-primary"], [1, "d-flex", "justify-content-center", "align-items-baseline"], [1, "px-2", "position-relative"], ["width", "18", "height", "18", "aria-label", "Close", 1, "icon", "text-secondary", 3, "click", "iconName"], [1, "tabs-handler", "d-flex", "align-items-center", "position-static", "border-bottom", "bg-principal-2x-dark", "bg-principal-3x-dark-mobile"], [1, "modal-body", "market-data", "p-0", "d-flex", "flex-column", "bg-principal-2x-dark", "bg-principal-3x-dark-mobile", 2, "min-height", "400px", "--top-offset", "200px"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "py-5", "text-muted"], [1, "nav", "nav-tabs"], [1, "nav-item"], [1, "nav-link", "active", 3, "click", "ngClass"], [1, "nav-item", 3, "click"], [1, "nav-link", 3, "ngClass"], [1, "d-flex", "h-100", 3, "ngClass"], [1, "col", "overflow-auto", "position-relative", 3, "ngClass"], [1, "col", "overflow-auto", "border-start", "d-flex", "flex-column"], [1, "market-depth", "p-2"], [1, "d-flex", "align-items-start"], [1, "flex-grow-1"], ["width", "10%"], [1, "text-muted", "text-center", "px-1"], [1, "text-muted", "text-center"], [1, "d-flex", "justify-content-between", "p-2"], [1, "line"], [1, "text-center", 3, "ngClass"], [3, "ngClass"], [1, "progress", "bid"], [1, "progress-bar", 3, "ngStyle"], [1, "data", "d-flex", "justify-content-between", "align-items-center"], ["placement", "right", 1, "taptext", "cup", 3, "tap", "ngbTooltip"], [1, "taptext", "cup", 3, "tap"], [1, "progress", "ask"], ["placement", "left", 1, "taptext", "cup", 3, "tap", "ngbTooltip"], [1, "my-2"], [1, "market-depth-chart-class", 3, "activeStockIsinInput", "onlyShow"], [1, "mt-auto"], [1, "border-top", "px-3", "py-2", "d-flex", "justify-content-between"], ["dir", "ltr"], ["width", "36", "height", "36", 1, "mb-3", 3, "iconName"]],
        template: function(t, a) {
            t & 1 && S(0, Kr, 11, 4, "ng-template", null, 0, be)
        },
        dependencies: [Y, Fe, Q, Xe, $t, ve, ai, pa, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var Sa = ( () => {
    let o = class o extends xe {
        get optionOrderUrl() {
            return this.mtsPath + this.apiUrls.option
        }
        getContractForSymbol(e) {
            return this.httpService.get(`${this.mtsPath + this.apiUrls.option}Contracts/${e}/symbol`)
        }
        getUnderlyingAsset(e, t) {
            return this.httpService.get(`${this.optionOrderUrl}contracts/underlying-asset/${e}?endDate=${t}`).pipe(F(a => ({
                baseIsin: a.baseIsin,
                maxOpenPosition: a.maxOpenPosition,
                lowLimitOpenPosition: a.lowLimitOpenPosition,
                sumOpenPositions: a.sumOpenPositions,
                isRequestAllowed: a.isRequestAllowed
            })), me( () => se(null)))
        }
    }
    ;
    o.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = Ie(o)))(a || o)
        }
    }
    )(),
    o.\u0275prov = Ce({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let i = o;
    return i
}
)();
var el = i => ({
    "bg-principal-2x bg-principal-3x-dark-mobile": i
});
function tl(i, o) {
    if (i & 1 && (r(0, "div", 9)(1, "span"),
    u(2),
    s(),
    r(3, "span", 11),
    u(4),
    s()()),
    i & 2) {
        let n, e = d().$implicit;
        l(2),
        k(" ", (n = e[1] == null ? null : e[1].value) !== null && n !== void 0 && n ? e[1] == null ? null : e[1].value : "", " "),
        l(),
        m("colorizeNumber", e[1] == null ? null : e[1].percent)("ngClass", e[0] == null ? null : e[0].class),
        l(),
        k(" (", e[1] == null ? null : e[1].percent, "%) ")
    }
}
function il(i, o) {
    if (i & 1 && (r(0, "span", 10),
    u(1),
    s()),
    i & 2) {
        let n, e = d().$implicit;
        m("dir", e[1] == null ? null : e[1].dir),
        l(),
        k(" ", (n = e[1] == null ? null : e[1].value) !== null && n !== void 0 && n ? e[1] == null ? null : e[1].value : "", " ")
    }
}
function nl(i, o) {
    if (i & 1 && (r(0, "div", 4)(1, "div", 5)(2, "span", 6),
    u(3),
    s(),
    r(4, "span", 7),
    u(5),
    s()(),
    r(6, "div", 5)(7, "span", 8),
    u(8),
    s(),
    S(9, tl, 5, 4, "div", 9)(10, il, 2, 2, "span", 10),
    s()()),
    i & 2) {
        let n, e = o.$implicit, t = o.$index;
        m("ngClass", D(7, el, t % 2 !== 0)),
        l(3),
        k("", e[0] == null ? null : e[0].label, " "),
        l(),
        m("dir", e[0] == null ? null : e[0].dir)("ngClass", e[0] == null ? null : e[0].class),
        l(),
        k(" ", (n = e[0] == null ? null : e[0].value) !== null && n !== void 0 && n ? e[0] == null ? null : e[0].value : "", " "),
        l(3),
        k("", e[1] == null ? null : e[1].label, " "),
        l(),
        y(e[1] != null && e[1].percent ? 9 : 10)
    }
}
function al(i, o) {
    if (i & 1 && (r(0, "div", 0)(1, "div", 2)(2, "div", 3),
    z(3, nl, 11, 9, "div", 4, Se),
    s()()()),
    i & 2) {
        let n = d();
        l(3),
        W(n.data())
    }
}
function ol(i, o) {
    if (i & 1 && (r(0, "div", 1),
    C(1, "svg-icon", 12),
    r(2, "span"),
    u(3, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F"),
    s()()),
    i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.InfoBox)
    }
}
var va = ( () => {
    let o = class o {
        constructor() {
            this.symbolService = $(ge),
            this.symbolContractInfoService = $(Sa),
            this.marketDataService = $(Ae),
            this.lsService = $(Ee),
            this.icons = R,
            this.activeStockIsin = _(""),
            this.data = K( () => {
                let e = [[{
                    label: "\u0646\u0648\u0639",
                    value: Ge.symbolMarketUnit[+this.localStorageSymbolData()?.marketUnit],
                    percent: null,
                    dir: "rtl",
                    class: ""
                }, {
                    label: "\u0642\u06CC\u0645\u062A \u0627\u0639\u0645\u0627\u0644",
                    value: new Q("en-US").transform(this.localStorageSymbolData()?.strikePrice),
                    percent: null,
                    dir: "rtl",
                    class: ""
                }], [{
                    label: "\u0627\u0646\u062F\u0627\u0632\u0647 \u0642\u0631\u0627\u0631\u062F\u0627\u062F",
                    value: this.localStorageSymbolData()?.csize,
                    percent: null,
                    dir: "rtl",
                    class: ""
                }, {
                    label: "\u0642\u06CC\u0645\u062A \u0633\u0631 \u0628\u0647 \u0633\u0631",
                    value: new Q("en-US").transform(cn(this.localStorageSymbolData()?.marketUnit) ? this.localStorageSymbolData()?.strikePrice + this.marketData()?.lastTradedPrice : this.localStorageSymbolData()?.strikePrice - this.marketData()?.lastTradedPrice),
                    dir: "ltr",
                    percent: null,
                    class: ""
                }], [{
                    label: "\u0648\u0636\u0639\u06CC\u062A \u0642\u0631\u0627\u0631\u062F\u0627\u062F",
                    value: zt(this.localStorageSymbolData()?.marketUnit, this.localStorageSymbolData()?.strikePrice, this.optionBaseSymbolLsMarketData()?.val["last-trade-price"]),
                    dir: "ltr",
                    percent: null,
                    class: zt(this.localStorageSymbolData()?.marketUnit, this.localStorageSymbolData()?.strikePrice, this.optionBaseSymbolLsMarketData()?.val["last-trade-price"]) === pi.ITM && "text-success" || zt(this.localStorageSymbolData()?.marketUnit, this.localStorageSymbolData()?.strikePrice, this.optionBaseSymbolLsMarketData()?.val["last-trade-price"]) === pi.OTM && "text-danger"
                }, {
                    label: "\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062A",
                    value: new ve().transform(this.marketData()?.totalTradeValue, 1),
                    dir: "ltr",
                    percent: null,
                    class: ""
                }], [{
                    label: "\u0645\u0648\u0642\u0639\u06CC\u062A \u0628\u0627\u0632",
                    value: new Q("en-US").transform(this.optionContractInfoLsData()?.openPositions ?? this.optionContractInfo()?.openPositions),
                    dir: "ltr",
                    percent: null,
                    class: ""
                }, {
                    label: "\u0627\u0631\u0632\u0634 \u0645\u0641\u0647\u0648\u0645\u06CC",
                    value: new ve().transform(this.marketData()?.totalNumberOfSharesTraded * this.optionBaseSymbolLsMarketData()?.val[ie.ContractInfoSchema.closingPrice] * this.localStorageSymbolData()?.csize, 1),
                    dir: "ltr",
                    percent: null,
                    class: ""
                }]];
                return this.underlyingAsset() && (e.push([{
                    label: "\u0633\u0642\u0641 \u0645\u0648\u0642\u0639\u06CC\u062A\u200C\u0647\u0627",
                    value: this.underlyingAsset()?.maxOpenPosition ? new Q("en-US").transform(this.underlyingAsset()?.maxOpenPosition) : "-",
                    dir: "ltr",
                    percent: null,
                    class: ""
                }, {
                    label: "\u062D\u062F \u067E\u0627\u06CC\u06CC\u0646 \u0645\u0648\u0642\u0639\u06CC\u062A\u200C\u0647\u0627",
                    value: this.underlyingAsset()?.lowLimitOpenPosition ? new Q("en-US").transform(this.underlyingAsset()?.lowLimitOpenPosition) : "-",
                    dir: "ltr",
                    percent: null,
                    class: ""
                }]),
                e.push([{
                    label: "\u0645\u0648\u0642\u0639\u06CC\u062A \u0628\u0627\u0632 \u0647\u0645 \u06AF\u0631\u0648\u0647",
                    value: this.underlyingAsset()?.sumOpenPositions ? new Q("en-US").transform(this.underlyingAsset()?.sumOpenPositions) : "-",
                    dir: "ltr",
                    percent: null,
                    class: ""
                }, {
                    label: "\u0633\u0641\u0627\u0631\u0634 \u0641\u0632\u0627\u06CC\u0646\u062F\u0647",
                    value: this.underlyingAsset()?.isRequestAllowed ? "\u0645\u062C\u0627\u0632" : "\u0645\u0645\u0646\u0648\u0639",
                    dir: "ltr",
                    percent: null,
                    class: ""
                }])),
                e = [...e, [{
                    label: "\u0633\u0642\u0641 \u062D\u0642\u06CC\u0642\u06CC",
                    value: new Q("en-US").transform(this.optionContractInfoLsData()?.maxCOP ?? this.optionContractInfo()?.maxCOP),
                    dir: "ltr",
                    percent: null,
                    class: ""
                }, {
                    label: "\u0633\u0642\u0641 \u062D\u0642\u0648\u0642\u06CC",
                    value: new Q("en-US").transform(this.optionContractInfoLsData()?.maxCAOP ?? this.optionContractInfo()?.maxCAOP),
                    dir: "ltr",
                    percent: null,
                    class: ""
                }], [{
                    label: "\u0648\u062C\u0647 \u062A\u0636\u0645\u06CC\u0646 \u0644\u0627\u0632\u0645",
                    value: new Q("en-US").transform(this.optionContractInfoLsData()?.requiredMargin ?? this.optionContractInfo()?.requiredMargin),
                    dir: "ltr",
                    percent: null,
                    class: ""
                }, {
                    label: "\u0648\u062C\u0647 \u062A\u0636\u0645\u06CC\u0646 \u0627\u0648\u0644\u06CC\u0647",
                    value: new Q("en-US").transform(this.optionContractInfoLsData()?.initialMargin ?? this.optionContractInfo()?.initialMargin),
                    dir: "ltr",
                    percent: null,
                    class: ""
                }], [{
                    label: "\u062A\u0633\u0648\u06CC\u0647 \u0646\u0642\u062F\u06CC",
                    value: ce.getFormattedJDate(new Date(this.optionContractInfo()?.cashSettlementDate)),
                    dir: "ltr",
                    percent: null,
                    class: ""
                }, {
                    label: "\u062A\u0633\u0648\u06CC\u0647 \u0641\u06CC\u0632\u06CC\u06A9\u06CC",
                    value: ce.getFormattedJDate(new Date(this.optionContractInfo()?.physicalSettlementDate)),
                    dir: "ltr",
                    percent: null,
                    class: ""
                }]],
                e
            }
            ),
            this.localStorageSymbolData$ = V(this.activeStockIsin).pipe(E(e => this.symbolService.getSymbolStream(e))),
            this.localStorageSymbolData = A(this.localStorageSymbolData$),
            this.optionStorageBaseSymbolData$ = V(this.localStorageSymbolData).pipe(E(e => this.symbolService.getOptionBaseSymbolStream(e?.baseIsin))),
            this.marketData$ = this.localStorageSymbolData$.pipe(L(e => !!e), E(e => this.marketDataService.GetMarketData(3, e.symbolIsin)), F(e => ({
                lastTradedPrice: +e.lastTradedPrice,
                totalTradeValue: +e.totalTradeValue,
                tradedPriceVar: +e.priceVar,
                totalNumberOfSharesTraded: +e.totalNumberOfSharesTraded,
                closingPrice: +e.closingPrice
            }))),
            this.contractLsData$ = this.localStorageSymbolData$.pipe(L(e => !!e), E(e => this.lsService.subscribeToLs(re.ContractInfo, e?.symbolIsin)), F(e => ({
                lastTradedPrice: +e.val[ie.ContractInfoSchema.lastTradedPrice],
                totalTradeValue: +e.val[ie.ContractInfoSchema.totalTradeValue],
                tradedPriceVar: +e.val[ie.ContractInfoSchema.tradedPriceVar],
                totalNumberOfSharesTraded: +e.val[ie.ContractInfoSchema.totalNumberOfSharesTraded],
                closingPrice: +e.val[ie.ContractInfoSchema.closingPrice]
            }))),
            this.contractLsDataLsUnsubscribe$ = this.localStorageSymbolData$.pipe(L(e => !!e), dt(), F( ([e]) => this.lsService.unsubscribeSchema(re.ContractInfo, e?.symbolIsin))),
            this.marketData = A(this.marketData$.pipe(fe(this.contractLsData$))),
            this.optionStorageBaseSymbolData = A(this.optionStorageBaseSymbolData$),
            this.optionBaseSymbolLsMarketData$ = V(this.optionStorageBaseSymbolData).pipe(L(e => !!e), E(e => this.lsService.subscribeToLs(re.ContractInfo, e?.symbolIsin))),
            this.optionBaseSymbolUnsubscribe$ = V(this.optionStorageBaseSymbolData).pipe(L(e => !!e), dt(), F( ([e]) => this.lsService.unsubscribeSchema(re.ContractInfo, e?.symbolIsin))),
            this.optionBaseSymbolLsMarketData = A(this.optionBaseSymbolLsMarketData$),
            this.optionContractInfo$ = V(this.activeStockIsin).pipe(L(e => !!e), E(e => this.getContractInfo(e))),
            this.optionContractInfo = A(this.optionContractInfo$),
            this.optionContractInfoLsData$ = V(this.optionContractInfo).pipe(L(e => !!e?.contractIsin), E(e => this.lsService.subscribeToLs(re.OptionContract, e?.contractIsin).pipe(F(t => {
                let {[ie.OptionContractSchema.initialMargin]: a, [ie.OptionContractSchema.maintenanceMargin]: c, [ie.OptionContractSchema.openPositions]: p, [ie.OptionContractSchema.requiredMargin]: h} = t.val;
                return {
                    initialMargin: a,
                    maintenanceMargin: c,
                    openPositions: p,
                    requiredMargin: h
                }
            }
            )))),
            this.optionContractInfoLsData = A(this.optionContractInfoLsData$),
            this.contractLsUnsubscribe$ = V(this.optionContractInfoLsData).pipe(L(e => !!e?.contractIsin), dt(), F( ([e]) => this.lsService.unsubscribeSchema(re.OptionContract, e?.contractIsin))),
            this.getUnderlyingAsset$ = this.optionContractInfo$.pipe(L(Boolean), E(e => this.symbolContractInfoService.getUnderlyingAsset(e.baseIsin, e.physicalSettlementDate))),
            this.underlyingAsset = A(this.getUnderlyingAsset$),
            A(this.contractLsUnsubscribe$),
            A(this.optionBaseSymbolUnsubscribe$),
            A(this.contractLsDataLsUnsubscribe$)
        }
        ngOnDestroy() {
            this.lsService.unsubscribeSchema(re.ContractInfo, this.optionStorageBaseSymbolData()?.symbolIsin),
            this.lsService.unsubscribeSchema(re.ContractInfo, this.localStorageSymbolData()?.symbolIsin),
            this.lsService.unsubscribeSchema(re.OptionContract, this.optionContractInfo()?.contractIsin)
        }
        getContractInfo(e) {
            return this.symbolContractInfoService.getContractForSymbol(e)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["symbol-contract-info"]],
        inputs: {
            activeStockIsin: [1, "activeStockIsin"]
        },
        decls: 2,
        vars: 1,
        consts: [[1, "position-relative"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-muted", "w-100"], [1, "d-flex", "w-100"], [1, "d-flex", "flex-column", "rounded", "rounded-2", "flex-grow-1"], [1, "d-flex", "justify-content-between", "align-items-center", "px-2", "py-1", "rounded-2", "gap-3", 3, "ngClass"], [1, "col", "d-flex", "justify-content-between"], [1, "text-body-tertiary", "d-inline-block", "text-start", "me-1", "small", "t"], [1, "text-end", 3, "dir", "ngClass"], [1, "text-muted", "d-inline-block", "text-start", "me-1", "small"], ["dir", "ltr", 1, "d-flex", "gap-1"], [1, "text-end", 3, "dir"], [1, "small", 3, "colorizeNumber", "ngClass"], ["width", "48", "height", "48", 1, "", 3, "iconName"]],
        template: function(t, a) {
            t & 1 && S(0, al, 5, 0, "div", 0)(1, ol, 4, 1, "div", 1),
            t & 2 && y(0)
        },
        dependencies: [te, Y, Ht, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
function rl(i, o) {
    if (i & 1 && C(0, "svg-icon", 0),
    i & 2) {
        let n = d();
        m("iconName", n.icons.Lock)
    }
}
function ll(i, o) {
    if (i & 1 && C(0, "svg-icon", 0),
    i & 2) {
        let n = d();
        m("iconName", n.icons.Drag)
    }
}
var _a = ( () => {
    let o = class o {
        constructor() {
            this.icons = R,
            this.column = _(void 0)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["symbol-details-column-alignment-list-item"]],
        inputs: {
            column: [1, "column"]
        },
        decls: 4,
        vars: 2,
        consts: [["width", "24", "height", "24", 1, "text-muted", "me-2", 2, "cursor", "move", 3, "iconName"], [1, "flex-grow-1", 2, "height", "33px", "line-height", "33px"]],
        template: function(t, a) {
            if (t & 1 && (S(0, rl, 1, 1, "svg-icon", 0)(1, ll, 1, 1, "svg-icon", 0),
            r(2, "span", 1),
            u(3),
            s()),
            t & 2) {
                let c, p;
                y((c = a.column()) != null && c.pinned ? 0 : (c = a.column()) != null && c.pinned ? -1 : 1),
                l(3),
                N((p = a.column()) == null ? null : p.title)
            }
        },
        dependencies: [te, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
function sl(i, o) {
    if (i & 1 && C(0, "symbol-details-column-alignment-list-item", 1),
    i & 2) {
        let n = o.$implicit;
        m("column", n)
    }
}
function cl(i, o) {
    if (i & 1 && C(0, "symbol-details-column-alignment-list-item", 4),
    i & 2) {
        let n = o.$implicit;
        m("cdkDragDisabled", n.pinned)("column", n)
    }
}
var xa = ( () => {
    let o = class o {
        constructor() {
            this.columns = _.required(),
            this.columnChange = B(),
            this.pinnedColumns = T(void 0),
            this.nonPinnedColumns = T(void 0),
            ue( () => {
                this.columns().forEach( (a, c) => {
                    a.index = c + 1
                }
                );
                let e = this.columns().filter(a => a.pinned)
                  , t = this.columns().filter(a => !a.pinned);
                this.pinnedColumns.update( () => e),
                this.nonPinnedColumns.update( () => t)
            }
            )
        }
        drop(e) {
            let t = this.nonPinnedColumns();
            Fn(t, e.previousIndex, e.currentIndex),
            t.forEach( (a, c) => {
                a.index = c + 1
            }
            ),
            this.columnChange.emit([...this.pinnedColumns(), ...t])
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["symbol-details-column-alignment-list"]],
        inputs: {
            columns: [1, "columns"]
        },
        outputs: {
            columnChange: "columnChange"
        },
        decls: 7,
        vars: 0,
        consts: [[1, "list-group", "list-group-flush"], [1, "d-block", "list-group-item", "list-group-item-action", "p-1", "d-flex", "align-items-center", "justify-content-between", "text-body", "bg-principal", "bg-principal-2x-dark", "bg-principal-hover", 3, "column"], [1, "list-group-item", "p-0"], ["cdkDropList", "", 1, "list-group", "list-group-flush", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "d-block", "list-group-item", "list-group-item-action", "p-1", "d-flex", "align-items-center", "justify-content-between", "text-body", "bg-principal", "bg-principal-2x-dark", "bg-principal-hover", 3, "cdkDragDisabled", "column"]],
        template: function(t, a) {
            t & 1 && (r(0, "div", 0),
            z(1, sl, 1, 1, "symbol-details-column-alignment-list-item", 1, Se),
            C(3, "div", 2),
            s(),
            r(4, "div", 3),
            b("cdkDropListDropped", function(p) {
                return a.drop(p)
            }),
            z(5, cl, 1, 2, "symbol-details-column-alignment-list-item", 4, Se),
            s()),
            t & 2 && (l(),
            W(a.pinnedColumns()),
            l(4),
            W(a.nonPinnedColumns()))
        },
        dependencies: [te, Vn, En, _a],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var Da = ( () => {
    let o = class o {
        constructor(e, t) {
            this.modalService = e,
            this.sdManager = t,
            this.icons = R,
            this.columns = T([]),
            this.destroyRef = $(Lt)
        }
        ngOnInit() {
            this.sdManager.columnState$.pipe(zi(this.destroyRef)).pipe(Ei()).subscribe(e => {
                this.columns.update( () => e)
            }
            )
        }
        ngOnDestroy() {
            this.sdManager.columnState.next(this.columns())
        }
        handleAlignment(e) {
            this.columns.update( () => e),
            this.sdManager.columnState.next(this.columns())
        }
        handleReset() {
            this.columns.update( () => [...ii]),
            this.sdManager.columnState.next(this.columns())
        }
        handleClose() {
            this.modalService.dismissAll()
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)(ee(Xt),ee(ni))
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["symbol-details-column-alignment"]],
        decls: 12,
        vars: 3,
        consts: [[1, "modal-header", "justify-content-between"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "m-0", 3, "click"], [1, "modal-body"], [1, "text-muted", "d-flex", "align-items-start", "gap-2"], ["width", "18", "height", "18", 1, "line-height-18px", 3, "iconName"], [3, "columnChange", "columns"], [1, "modal-footer", "link-opacity-75-hover", "link-secondary", "justify-content-center", "cup", 3, "click"], ["width", "18", "height", "18", 1, "px-1", "cup", "me-1", "line-height-18px", "cup", 3, "iconName"]],
        template: function(t, a) {
            t & 1 && (r(0, "div", 0)(1, "span", 1),
            u(2, "\u0686\u06CC\u062F\u0645\u0627\u0646 \u0633\u062A\u0648\u0646 \u0647\u0627"),
            s(),
            r(3, "button", 2),
            b("click", function() {
                return a.handleClose()
            }),
            s()(),
            r(4, "div", 3)(5, "p", 4),
            C(6, "svg-icon", 5),
            u(7, " \u062C\u0647\u062A \u0627\u0646\u062A\u062E\u0627\u0628 \u0686\u06CC\u062F\u0645\u0627\u0646 \u0633\u062A\u0648\u0646 \u0647\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0646\u0645\u0627\u062F\u060C \u0639\u0646\u0627\u0648\u06CC\u0646 \u0631\u0627 \u062C\u0627\u0628\u062C\u0627 \u06A9\u0646\u06CC\u062F "),
            s(),
            r(8, "symbol-details-column-alignment-list", 6),
            b("columnChange", function(p) {
                return a.handleAlignment(p)
            }),
            s()(),
            r(9, "div", 7),
            b("click", function() {
                return a.handleReset()
            }),
            C(10, "svg-icon", 8),
            u(11, ` \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u067E\u06CC\u0634\u200C\u0641\u0631\u0636
`),
            s()),
            t & 2 && (l(6),
            m("iconName", a.icons.InfoBox),
            l(2),
            m("columns", a.columns()),
            l(2),
            m("iconName", a.icons.Restore))
        },
        dependencies: [te, xa, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var _i = new Map([["strongsell", 1], ["sell", 2], ["neutral", 3], ["buy", 4], ["strongbuy", 5]])
  , lt = class {
}
  , xt = class {
}
  , xi = ["\u0627\u0631\u0632\u0634 \u06AF\u0630\u0627\u0631\u06CC \u0646\u0633\u0628\u06CC", "\u0641\u0631\u0648\u0634 \u0645\u0627\u0647\u0627\u0646\u0647", "\u06A9\u0627\u0631\u0627\u06CC\u06CC", "\u0633\u0648\u062F\u0622\u0648\u0631\u06CC", "\u0639\u0645\u0644\u06A9\u0631\u062F \u0633\u0647\u0627\u0645\u062F\u0627\u0631\u0627\u0646", "\u0631\u06CC\u0633\u06A9 \u0645\u0627\u0644\u06CC", "\u0641\u0631\u0648\u0634 \u0645\u0627\u0647\u0627\u0646\u0647", "\u0631\u06CC\u0633\u06A9 \u0628\u0627\u0632\u0627\u0631", "\u0645\u0648\u0645\u0646\u062A\u0648\u0645", "\u0646\u0642\u062F \u0634\u0648\u0646\u062F\u06AF\u06CC"];
var Dt = ( () => {
    let o = class o extends xe {
        trendUrl() {
            return `${this.mtsPath}${this.apiUrls.easy}symbol-analysis/ind-trading-trend`
        }
        fundamentalUrl() {
            return `${this.mtsPath}${this.apiUrls.easy}symbol-analysis/fundamental-analysis`
        }
        technicalUrl() {
            return `${this.mtsPath}${this.apiUrls.easy}symbol-analysis/technical-analysis`
        }
        financialStatsUrl() {
            return `${this.mtsPath}${this.apiUrls.easy}symbol-analysis/financial-stats`
        }
        individualTrendChart(e) {
            let t = `${this.trendUrl()}?isin=${e}`;
            return this.httpService.get(t)
        }
        getFundamentalScore(e) {
            let t = `${this.fundamentalUrl()}?isin=${e}`;
            return this.httpService.get(t).pipe(F(a => (a.total && (a.total.score = (a?.total?.score ?? 0) / 2,
            a.item.forEach(c => {
                c.score = Math.round((c?.score ?? 0) / 2 * 10) / 10
            }
            )),
            J({}, a))))
        }
        getFinancialStats(e, t, a) {
            let c = `${this.financialStatsUrl()}?isin=${e}${t ? "&metric=" + t : ""}${a ? "&interval=" + a : ""}`;
            return this.httpService.get(c).pipe(F(p => p.map(h => (h.value,
            h))))
        }
        getTechnicalScore(e) {
            let t = `${this.technicalUrl()}?isin=${e}`;
            return this.httpService.get(t).pipe(F(a => (a?.totalScore && (a.totalScore.state = a?.totalScore?.state.toLowerCase(),
            a.totalScore.score = _i.get(a?.totalScore?.state),
            a.categoryScore.forEach(c => {
                c.state = c.state.toLowerCase(),
                c.score = _i.get(c.state)
            }
            )),
            a)))
        }
    }
    ;
    o.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = Ie(o)))(a || o)
        }
    }
    )(),
    o.\u0275prov = Ce({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let i = o;
    return i
}
)();
var ml = (i, o) => o.type
  , dl = (i, o) => ({
    "disabled opacity-4": i,
    active: o
});
function pl(i, o) {
    if (i & 1 && (r(0, "span", 5),
    u(1),
    s()),
    i & 2) {
        let n, e = d().$implicit;
        l(),
        N((n = e == null || e.value == null ? null : e.value.toFixed(2)) !== null && n !== void 0 ? n : "-")
    }
}
function hl(i, o) {
    if (i & 1 && (r(0, "span", 5),
    u(1),
    s()),
    i & 2) {
        let n = d().$implicit;
        l(),
        k(" ", (n == null ? null : n.value) === null || (n == null ? null : n.value) === void 0 ? "-%" : (n == null ? null : n.value) + "%", "")
    }
}
function Cl(i, o) {
    if (i & 1 && (r(0, "div")(1, "span", 5),
    u(2),
    M(3, "largeNumber"),
    s(),
    r(4, "span", 6),
    u(5),
    s()()),
    i & 2) {
        let n = d().$implicit;
        l(2),
        k("", n != null && n.value ? ne(3, 2, n == null ? null : n.value, 1) : "-", " "),
        l(3),
        k(" ", " \u0631\u06CC\u0627\u0644\u0621\u0621 ", " ")
    }
}
function bl(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 2),
        b("click", function() {
            let t = g(n).$implicit
              , a = d();
            return f(a.handleChartType(t))
        }),
        r(1, "div", 3)(2, "span", 4),
        u(3),
        s(),
        S(4, pl, 2, 1, "span", 5)(5, hl, 2, 1, "span", 5)(6, Cl, 6, 5, "div"),
        s()()
    }
    if (i & 2) {
        let n, e = o.$implicit, t = d();
        m("ngClass", pe(4, dl, (e == null ? null : e.value) === null || (e == null ? null : e.value) === void 0, t.chartType === (e == null ? null : e.type)))("id", "market-view-state-chart-kind-" + (e == null ? null : e.type) + "-div-container"),
        l(3),
        N(e == null ? null : e.title),
        l(),
        y((n = e == null ? null : e.type) === t.ChartType.IndividualBuyPower ? 4 : n === t.ChartType.NetIndividual ? 5 : n === t.ChartType.PerCapita ? 6 : -1)
    }
}
var ka = ( () => {
    let o = class o {
        constructor() {
            this.ChartType = Ve,
            this.chartType = _.required(),
            this.chartTypes = _.required(),
            this.chartTypeChange = B()
        }
        handleChartType(e) {
            this.chartTypeChange.emit(e.type)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["individual-trading-trend-bar-chart-type"]],
        inputs: {
            chartType: [1, "chartType"],
            chartTypes: [1, "chartTypes"]
        },
        outputs: {
            chartTypeChange: "chartTypeChange"
        },
        decls: 3,
        vars: 0,
        consts: [[1, "d-flex", "flex-flow", "gap-1"], [1, "market-view-bourse-analytics-data-category-item", "flex-grow-1", 3, "ngClass", "id"], [1, "market-view-bourse-analytics-data-category-item", "flex-grow-1", 3, "click", "ngClass", "id"], [1, "chart-category-item-selectable", "d-flex", "flex-column", "align-items-center", "justify-content-center", "bg-principal-3x", "bg-principal-4x-dark", "bg-principal-dark-mobile", "rounded", "py-2", "h-100", "cup"], [1, "text-muted"], ["dir", "ltr"], ["dir", "ltr", 1, "p-1", "small", "text-muted"]],
        template: function(t, a) {
            t & 1 && (r(0, "div", 0),
            z(1, bl, 7, 7, "div", 1, ml),
            s()),
            t & 2 && (l(),
            W(a.chartTypes()))
        },
        dependencies: [Y, ve],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
function yl(i, o) {
    if (i & 1 && C(0, "bar-chart", 1),
    i & 2) {
        let n = d();
        m("chartId", n.chartId())("isMobile", !0)("barWidth", 6)("items", n.items())
    }
}
var Ta = ( () => {
    let o = class o {
        constructor() {
            this.isMobile = _(),
            this.items = _.required(),
            this.chartId = _.required()
        }
        preventSwipe() {}
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["individual-trading-trend-bar-chart"]],
        inputs: {
            isMobile: [1, "isMobile"],
            items: [1, "items"],
            chartId: [1, "chartId"]
        },
        decls: 2,
        vars: 1,
        consts: [[3, "swipe"], [3, "chartId", "isMobile", "barWidth", "items"]],
        template: function(t, a) {
            t & 1 && (r(0, "div", 0),
            b("swipe", function() {
                return a.preventSwipe()
            }),
            S(1, yl, 1, 4, "bar-chart", 1),
            s()),
            t & 2 && (l(),
            y(a.items().length ? 1 : -1))
        },
        dependencies: [Zt],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
function gl(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 0),
        C(1, "svg-icon", 1),
        u(2, " \u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A "),
        r(3, "button", 2),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.reload(t.symbolIsin()))
        }),
        C(4, "svg-icon", 3),
        u(5, " \u062A\u0644\u0627\u0634 \u0645\u062C\u062F\u062F "),
        s()()
    }
    if (i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.Alert),
        l(3),
        m("iconName", n.icons.refresh)
    }
}
function fl(i, o) {
    if (i & 1) {
        let n = I();
        C(0, "individual-trading-trend-bar-chart", 4),
        r(1, "individual-trading-trend-bar-chart-type", 5),
        b("chartTypeChange", function(t) {
            g(n);
            let a = d();
            return f(a.handleChartType(t))
        }),
        s()
    }
    if (i & 2) {
        let n = d();
        m("isMobile", n.isMobile())("chartId", n.chartId())("items", n.selectedChartItems()),
        l(),
        m("chartType", n.chartType())("chartTypes", n.chartTypes())
    }
}
var ri = [{
    title: "\u062E\u0627\u0644\u0635 \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC",
    type: Ve.NetIndividual,
    value: 0
}, {
    title: "\u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC",
    type: Ve.IndividualBuyPower,
    value: 0
}, {
    title: "\u0633\u0631\u0627\u0646\u0647 \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC",
    type: Ve.PerCapita,
    value: 0
}]
  , Ia = ( () => {
    let o = class o {
        constructor() {
            this.icons = R,
            this.isMobile = _(),
            this.symbolIsin = T(""),
            this.errorState = T(!1),
            this.symbolIsinInput = _.required(),
            this.chartId = _.required(),
            this.loading = B(),
            this.symbolAnalysisService = $(Dt),
            this.chartType = T(Ve.PerCapita),
            this.chartsData$ = V(this.symbolIsin).pipe(L(Boolean), E(e => Me(0, 6e4).pipe(E( () => this.loadChart(e))))),
            this.chartsData = A(this.chartsData$),
            this.chartTypes = K( () => {
                let e = this.chartsData()?.individualBuyPower?.find(c => +c?.date?.replaceAll("/", "") === Math.max(...this.chartsData().individualBuyPower.map(p => +p?.date?.replaceAll("/", ""))))?.val
                  , t = Math.round(this.chartsData()?.netIndividual?.find(c => +c?.date?.replaceAll("/", "") === Math.max(...this.chartsData().netIndividual.map(p => +p?.date?.replaceAll("/", ""))))?.val)
                  , a = this.chartsData()?.perCapita?.find(c => +c?.date?.replaceAll("/", "") === Math.max(...this.chartsData().perCapita.map(p => +p?.date?.replaceAll("/", ""))))?.val;
                return ri[0].value = isNaN(t) ? null : t,
                ri[1].value = isNaN(e) ? null : e,
                ri[2].value = isNaN(a) ? null : a,
                [...ri]
            }
            ),
            this.selectedChartItems = K( () => this.chartType() === Ve.NetIndividual ? this.chartsData()?.netIndividual : this.chartType() === Ve.PerCapita ? this.chartsData()?.perCapita : this.chartsData()?.individualBuyPower),
            ue( () => {
                this.symbolIsinInput()?.length && (this.symbolIsin.set(this.symbolIsinInput()),
                this.loading.emit(!0),
                this.errorState.set(!1))
            }
            )
        }
        loadChart(e) {
            return this.symbolAnalysisService.individualTrendChart(e).pipe(F(t => {
                if (this.loading.emit(!1),
                this.errorState.set(!1),
                !t.length)
                    return {};
                t.sort( (h, x) => h.date.localeCompare(x.date));
                let a = t.filter(h => h.type === Ve.IndividualBuyPower)
                  , c = t.filter(h => h.type === Ve.NetIndividual).map(h => De(J({}, h), {
                    val: h.val * 100
                }))
                  , p = t.filter(h => h.type === Ve.PerCapita);
                return {
                    individualBuyPower: a,
                    netIndividual: c,
                    perCapita: p
                }
            }
            ), me( () => (this.errorState.set(!0),
            this.loading.emit(!1),
            se(null))))
        }
        handleChartType(e) {
            this.chartType.update( () => e)
        }
        reload(e) {
            this.loading.emit(!0),
            this.symbolIsin.set(null),
            this.symbolIsin.set(e)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["individual-trading-trend"]],
        inputs: {
            isMobile: [1, "isMobile"],
            symbolIsinInput: [1, "symbolIsinInput"],
            chartId: [1, "chartId"]
        },
        outputs: {
            loading: "loading"
        },
        decls: 2,
        vars: 2,
        consts: [[1, "d-flex", "flex-column", "align-items-center", "gap-2"], ["width", "36", "height", "36", 1, "text-secondary", "mb-3", 3, "iconName"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], ["width", "20", "height", "20", 3, "iconName"], [1, "bg-principal", 3, "isMobile", "chartId", "items"], [3, "chartTypeChange", "chartType", "chartTypes"]],
        template: function(t, a) {
            if (t & 1 && S(0, gl, 6, 2, "div", 0)(1, fl, 2, 5),
            t & 2) {
                let c;
                y(a.errorState() ? 0 : -1),
                l(),
                y(!a.errorState() && ((c = a.selectedChartItems()) != null && c.length) ? 1 : -1)
            }
        },
        dependencies: [Ta, ka, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var wa = i => ({
    "opacity-3": i
})
  , Aa = () => ({
    from: 1,
    to: 2,
    color: "#DA514D"
})
  , Pa = () => ({
    from: 2,
    to: 3,
    color: "#FDB85D"
})
  , Ma = () => ({
    from: 3,
    to: 4,
    color: "#F4D644"
})
  , Fa = () => ({
    from: 4,
    to: 5,
    color: "#A1CF6F"
})
  , Ea = () => ({
    from: 5,
    to: 6,
    color: "#26BE8C"
})
  , Va = (i, o, n, e, t) => [i, o, n, e, t];
function Sl(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 2),
        C(1, "svg-icon", 7),
        u(2, " \u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A "),
        r(3, "button", 8),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.reload())
        }),
        C(4, "svg-icon", 9),
        u(5, " \u062A\u0644\u0627\u0634 \u0645\u062C\u062F\u062F "),
        s()()
    }
    if (i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.Alert),
        l(3),
        m("iconName", n.icons.refresh)
    }
}
function vl(i, o) {
    if (i & 1 && (r(0, "div", 3),
    C(1, "svg-icon", 7),
    u(2, " \u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F "),
    s()),
    i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.InfoBox)
    }
}
function _l(i, o) {
    if (i & 1 && (r(0, "div", 10),
    C(1, "gauge-chart", 12),
    r(2, "div", 13),
    u(3, "\u0646\u0645\u0631\u0647 \u0639\u0645\u0644\u06A9\u0631\u062F \u0628\u0646\u06CC\u0627\u062F\u06CC"),
    s()()),
    i & 2) {
        let n, e, t = d(2);
        m("ngClass", D(7, wa, !(!((n = t.fundamentalAnalysisResponse()) == null || n.total == null) && n.total.score))),
        l(),
        m("chartId", "fundamentalAnalysis-widget-gauge-chart")("showNeedle", !1)("value", (e = t.fundamentalAnalysisResponse()) == null || e.total == null ? null : e.total.score)("colorValueArray", ht(14, Va, de(9, Aa), de(10, Pa), de(11, Ma), de(12, Fa), de(13, Ea)))("maxValue", 5)("minValue", 0)
    }
}
function xl(i, o) {
    if (i & 1 && (r(0, "div", 11),
    C(1, "gauge-chart", 12),
    r(2, "div", 13),
    u(3, "\u0646\u0645\u0631\u0647 \u0639\u0645\u0644\u06A9\u0631\u062F \u062A\u06A9\u0646\u06CC\u06A9\u0627\u0644"),
    s()()),
    i & 2) {
        let n, e, t = d(2);
        m("ngClass", D(7, wa, !(!((n = t.technicalAnalysisResponse()) == null || n.totalScore == null) && n.totalScore.score))),
        l(),
        m("chartId", "technicalAnalysis-widget-gauge-chart")("showNeedle", !1)("value", (e = t.technicalAnalysisResponse()) == null || e.totalScore == null ? null : e.totalScore.score)("colorValueArray", ht(14, Va, de(9, Aa), de(10, Pa), de(11, Ma), de(12, Fa), de(13, Ea)))("maxValue", 5)("minValue", 0)
    }
}
function Dl(i, o) {
    if (i & 1 && S(0, _l, 4, 20, "div", 10)(1, xl, 4, 20, "div", 11),
    i & 2) {
        let n, e, t = d();
        y(t.fundamentalAnalysisResponse() !== null && ((n = t.fundamentalAnalysisResponse()) == null || n.total == null ? null : n.total.score) !== null ? 0 : -1),
        l(),
        y(t.technicalAnalysisResponse() !== null && ((e = t.technicalAnalysisResponse()) == null || e.totalScore == null ? null : e.totalScore.score) !== null ? 1 : -1)
    }
}
var Oa = ( () => {
    let o = class o {
        constructor() {
            this.icons = R,
            this.symbolData = _(null),
            this.symbolData$ = V(this.symbolData).pipe(mt("symbolIsin")),
            this.changeTabToAnalytics = B(),
            this.loading = B(),
            this.errorState = T(!1),
            this.symbolAnalysisService = $(Dt),
            this.destroyRef = $(Lt),
            this.fundamentalAnalysisFirstInit$ = this.symbolData$.pipe(F( () => {
                let e = new xt;
                return e.total = {
                    score: 0
                },
                e
            }
            )),
            this.fundamentalAnalysisApi$ = this.symbolData$.pipe(E(e => Te.get(e?.marketUnit).allowToCallFundamentalAnalysis ? this.symbolAnalysisService.getFundamentalScore(e?.symbolIsin).pipe(X( () => this.loading.emit(!1)), me( () => (this.loading.emit(!1),
            this.errorState.set(!0),
            se(null)))) : (this.loading.emit(!1),
            se(null)))),
            this.fundamentalAnalysisResponse$ = this.fundamentalAnalysisFirstInit$.pipe(fe(this.fundamentalAnalysisApi$)),
            this.fundamentalAnalysisResponse = A(this.fundamentalAnalysisResponse$),
            this.technicalAnalysisFirstInit$ = this.symbolData$.pipe(F( () => {
                let e = new lt;
                return e.totalScore = {
                    score: 0
                },
                e
            }
            )),
            this.technicalAnalysisApi$ = this.symbolData$.pipe(Oi(null), E(e => e ? Te.get(e?.marketUnit).allowToCallTechnicalAnalysis ? this.symbolAnalysisService.getTechnicalScore(e?.symbolIsin).pipe(X( () => this.loading.emit(!1)), me( () => (this.errorState.set(!0),
            this.loading.emit(!1),
            se(null)))) : (this.loading.emit(!1),
            se(null)) : se(new lt))),
            this.technicalAnalysisResponse$ = this.technicalAnalysisFirstInit$.pipe(fe(this.technicalAnalysisApi$)),
            this.technicalAnalysisResponse = A(this.technicalAnalysisResponse$),
            this.emptyState = A(this.fundamentalAnalysisResponse$.pipe(ke(this.technicalAnalysisResponse$), F( ([e,t]) => e === null && t?.totalScore === null))),
            A(this.symbolData$.pipe(X( () => this.reload())))
        }
        showFullAnalyticsComponent() {
            this.changeTabToAnalytics.emit()
        }
        reload() {
            this.loading.emit(!0),
            this.errorState.set(!1)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["symbol-analytics-widget"]],
        inputs: {
            symbolData: [1, "symbolData"]
        },
        outputs: {
            changeTabToAnalytics: "changeTabToAnalytics",
            loading: "loading"
        },
        decls: 10,
        vars: 2,
        consts: [[1, "p-3"], [1, "row", "justify-content-center", "position-relative"], [1, "d-flex", "flex-column", "align-items-center", "gap-2"], [1, "d-flex", "flex-column", "align-items-center", "gap-2", "text-muted"], [1, "px-2", "pb-2"], [1, "bg-principal-3x", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "bg-principal-hover", "rounded-2", "p-2", "text-body", "text-center", "w-100", "mt-2", "cup", 3, "click"], ["width", "18", "height", "18", "id", "analytics-more-detail-navigator", 1, "line-height-18px", "text-secondary", 3, "iconName"], ["width", "36", "height", "36", 1, "text-secondary", "mb-3", 3, "iconName"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], ["width", "20", "height", "20", 3, "iconName"], [1, "col-5", "offset-1", 3, "ngClass"], [1, "col-5", 3, "ngClass"], [1, "gauge-chart", 3, "chartId", "showNeedle", "value", "colorValueArray", "maxValue", "minValue"], [1, "text-center", "text-secondary", "small", "mt-3"]],
        template: function(t, a) {
            t & 1 && (r(0, "div", 0)(1, "div", 1),
            S(2, Sl, 6, 2, "div", 2)(3, vl, 3, 1, "div", 3)(4, Dl, 2, 2),
            s()(),
            r(5, "div", 4)(6, "div", 5),
            b("click", function() {
                return a.showFullAnalyticsComponent()
            }),
            C(7, "svg-icon", 6),
            r(8, "small"),
            u(9, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631"),
            s()()()),
            t & 2 && (l(2),
            y(a.errorState() ? 2 : a.emptyState() ? 3 : 4),
            l(5),
            m("iconName", a.icons.SymbolCheck))
        },
        dependencies: [te, Y, jt, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var kl = ["depthChartScroll"]
  , Tl = ["depthComponentScroll"]
  , Il = ["marketDepthComponent"]
  , ze = i => ({
    order: i
})
  , wl = i => ({
    "text-primary": i
})
  , Ze = i => ({
    "rotate-180": i
});
function Al(i, o) {
    if (i & 1 && C(0, "lib-market-depth-chart", 12),
    i & 2) {
        let n = d();
        m("activeStockIsinInput", n._activeStockIsin())
    }
}
function Pl(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "lib-market-depth-all", 33),
        b("makeOrderOnPriceClick", function(t) {
            g(n);
            let a = d();
            return f(a.makeOrderOnPriceClick.emit(t))
        })("makeOrderOnQuantityClick", function(t) {
            g(n);
            let a = d();
            return f(a.makeOrderOnQuantityClick.emit(t))
        })("marketDepthAllClose", function() {
            g(n);
            let t = d();
            return f(t.showAllDepths.set(!1))
        }),
        s()
    }
    if (i & 2) {
        let n = d();
        m("isMobile", n.isMobile())("activeStockIsin", n._activeStockIsin())("showAllInfo", !0)
    }
}
function Ml(i, o) {
    if (i & 1 && C(0, "d3-trend-chart", 23),
    i & 2) {
        let n = d();
        m("activeStockIsin", n._activeStockIsin())("isMobile", n.isMobile())("showEasyChartBtn", n.showEasyChartBtn())
    }
}
function Fl(i, o) {
    if (i & 1 && C(0, "svg-icon", 27),
    i & 2) {
        let n = d();
        m("iconName", n.icons.Loading)
    }
}
function El(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "lib-ind-inst-chart", 34),
        b("loading", function(t) {
            g(n);
            let a = d();
            return f(a.setLoaderState("indInstChartLibraryComponentLoading", t))
        }),
        s()
    }
    if (i & 2) {
        let n = d();
        m("isMobile", n.isMobile())("symbolData", n.symbolData())
    }
}
function Vl(i, o) {
    if (i & 1 && C(0, "svg-icon", 27),
    i & 2) {
        let n = d(2);
        m("iconName", n.icons.Loading)
    }
}
function Ol(i, o) {
    i & 1 && C(0, "div", 42)
}
function Nl(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 41),
        S(1, Ol, 1, 0, "div", 42),
        r(2, "individual-trading-trend", 43),
        b("loading", function(t) {
            g(n);
            let a = d(2);
            return f(a.setLoaderState("individualTradingTrendComponentLoading", t))
        }),
        s()()
    }
    if (i & 2) {
        let n = d(2);
        l(),
        y(n.loadingObject().individualTradingTrendComponentLoading ? 1 : -1),
        l(),
        m("isMobile", n.isMobile())("chartId", n._activeStockIsin())("symbolIsinInput", n._activeStockIsin())
    }
}
function Ll(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 30)(1, "div", 35)(2, "div", 36)(3, "span", 37),
        u(4),
        s(),
        r(5, "svg-icon", 38),
        b("click", function() {
            g(n);
            let t = d();
            return f(!t.isMobile() && t.openLink("https://learning.emofid.com/symbol-details-in-orbis/"))
        })("tap", function() {
            g(n),
            d();
            let t = oe(45);
            return f(t)
        }),
        s()(),
        r(6, "div", 39),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.sdManagerService.changeVisibilityItem(t.ColumnName.TradingChart))
        }),
        S(7, Vl, 1, 1, "svg-icon", 27),
        C(8, "svg-icon", 40),
        s()(),
        S(9, Nl, 3, 4, "div", 41),
        s()
    }
    if (i & 2) {
        let n = d()
          , e = oe(45);
        m("ngStyle", D(9, ze, n.sdManagerService.getPosition(n.ColumnName.TradingChart))),
        l(4),
        N(n.sdManagerService.getTitle(n.ColumnName.TradingChart)),
        l(),
        m("iconName", n.icons.QuestionBox)("triggers", n.isMobile() ? "click:blur" : "mouseenter:mouseleave")("ngbPopover", e),
        l(2),
        y(n.loadingObject().individualTradingTrendComponentLoading ? 7 : -1),
        l(),
        m("ngClass", D(11, Ze, !n.sdManagerService.getVisibilityItem(n.ColumnName.TradingChart)))("iconName", n.icons.ChevronUp),
        l(),
        y(n.sdManagerService.getVisibilityItem(n.ColumnName.TradingChart) ? 9 : -1)
    }
}
function Bl(i, o) {
    if (i & 1 && C(0, "svg-icon", 27),
    i & 2) {
        let n = d(2);
        m("iconName", n.icons.Loading)
    }
}
function $l(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "symbol-analytics-widget", 48),
        b("changeTabToAnalytics", function() {
            g(n);
            let t = d(2);
            return f(t.changeTabHandler(t.symbolTabType.Analytics))
        })("loading", function(t) {
            g(n);
            let a = d(2);
            return f(a.setLoaderState("symbolAnalyticsWidgetLoading", t))
        }),
        s()
    }
    if (i & 2) {
        let n = d(2);
        m("symbolData", n.symbolData())
    }
}
function Ul(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 24)(1, "div", 19)(2, "div", 36)(3, "span", 37),
        u(4),
        s(),
        r(5, "svg-icon", 44),
        b("tap", function() {
            g(n),
            d();
            let t = oe(47);
            return f(t)
        }),
        s()(),
        r(6, "div", 45),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.sdManagerService.changeVisibilityItem(t.ColumnName.Analytics))
        }),
        S(7, Bl, 1, 1, "svg-icon", 27),
        C(8, "svg-icon", 46),
        s()(),
        S(9, $l, 1, 1, "symbol-analytics-widget", 47),
        s()
    }
    if (i & 2) {
        let n = d()
          , e = oe(47);
        m("ngStyle", D(9, ze, n.sdManagerService.getPosition(n.ColumnName.Analytics))),
        l(4),
        N(n.sdManagerService.getTitle(n.ColumnName.Analytics)),
        l(),
        m("iconName", n.icons.QuestionBox)("triggers", n.isMobile() ? "click:blur" : "mouseenter:mouseleave")("ngbPopover", e),
        l(2),
        y(n.loadingObject().symbolAnalyticsWidgetLoading ? 7 : -1),
        l(),
        m("ngClass", D(11, Ze, !n.sdManagerService.getVisibilityItem(n.ColumnName.Analytics)))("iconName", n.icons.ChevronUp),
        l(),
        y(n.sdManagerService.getVisibilityItem(n.ColumnName.Analytics) ? 9 : -1)
    }
}
function Rl(i, o) {
    if (i & 1 && C(0, "svg-icon", 27),
    i & 2) {
        let n = d(2);
        m("iconName", n.icons.Loading)
    }
}
function jl(i, o) {
    if (i & 1 && C(0, "symbol-contract-info", 49),
    i & 2) {
        let n = d(2);
        m("activeStockIsin", n._activeStockIsin())
    }
}
function Hl(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 24)(1, "div", 19)(2, "div", 36)(3, "span", 37),
        u(4),
        s(),
        r(5, "svg-icon", 38),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.openLink("https://learning.emofid.com/option-symbol-details-in-easytrader/"))
        })("tap", function() {
            g(n),
            d();
            let t = oe(49);
            return f(t)
        }),
        s()(),
        r(6, "div", 45),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.sdManagerService.changeVisibilityItem(t.ColumnName.ContractInfo))
        }),
        S(7, Rl, 1, 1, "svg-icon", 27),
        C(8, "svg-icon", 46),
        s()(),
        S(9, jl, 1, 1, "symbol-contract-info", 49),
        s()
    }
    if (i & 2) {
        let n = d()
          , e = oe(49);
        m("ngStyle", D(9, ze, n.sdManagerService.getPosition(n.ColumnName.ContractInfo))),
        l(4),
        N(n.sdManagerService.getTitle(n.ColumnName.ContractInfo)),
        l(),
        m("iconName", n.icons.QuestionBox)("triggers", n.isMobile() ? "click:blur" : "mouseenter:mouseleave")("ngbPopover", e),
        l(2),
        y(n.loadingObject().contractInfoComponentLoading ? 7 : -1),
        l(),
        m("ngClass", D(11, Ze, !n.sdManagerService.getVisibilityItem(n.ColumnName.ContractInfo)))("iconName", n.icons.ChevronUp),
        l(),
        y(n.sdManagerService.getVisibilityItem(n.ColumnName.ContractInfo) ? 9 : -1)
    }
}
function Ql(i, o) {
    if (i & 1 && C(0, "svg-icon", 27),
    i & 2) {
        let n = d(2);
        m("iconName", n.icons.Loading)
    }
}
function zl(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "base-symbol-info", 51),
        b("openBaseSymbolDetail", function(t) {
            g(n);
            let a = d(2);
            return f(a.openBaseSymbolDetailHandler(t))
        }),
        s()
    }
    if (i & 2) {
        let n = d(2);
        m("activeStockIsin", n._activeStockIsin())
    }
}
function Wl(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 24)(1, "div", 19)(2, "div", 36)(3, "span", 37),
        u(4),
        s()(),
        r(5, "div", 45),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.sdManagerService.changeVisibilityItem(t.ColumnName.BaseSymbolInfo))
        }),
        S(6, Ql, 1, 1, "svg-icon", 27),
        C(7, "svg-icon", 46),
        s()(),
        S(8, zl, 1, 1, "base-symbol-info", 50),
        s()
    }
    if (i & 2) {
        let n = d();
        m("ngStyle", D(6, ze, n.sdManagerService.getPosition(n.ColumnName.BaseSymbolInfo))),
        l(4),
        N(n.sdManagerService.getTitle(n.ColumnName.BaseSymbolInfo) + " (" + n.baseIsinName() + ")"),
        l(2),
        y(n.loadingObject().contractInfoComponentLoading ? 6 : -1),
        l(),
        m("ngClass", D(8, Ze, !n.sdManagerService.getVisibilityItem(n.ColumnName.BaseSymbolInfo)))("iconName", n.icons.ChevronUp),
        l(),
        y(n.sdManagerService.getVisibilityItem(n.ColumnName.BaseSymbolInfo) ? 8 : -1)
    }
}
function Gl(i, o) {
    if (i & 1 && C(0, "svg-icon", 53),
    i & 2) {
        let n = d(2);
        m("iconName", n.icons.Loading)
    }
}
function Yl(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "lib-return-chart", 56),
        b("loading", function(t) {
            g(n);
            let a = d(2);
            return f(a.setLoaderState("returnChartLibraryComponentLoading", t))
        }),
        s()
    }
    if (i & 2) {
        let n = d(2);
        m("activeStockIsin", n._activeStockIsin())
    }
}
function Xl(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 24)(1, "div", 19)(2, "span", 20),
        u(3),
        s(),
        r(4, "div", 52),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.sdManagerService.changeVisibilityItem(t.ColumnName.ReturnChart))
        }),
        S(5, Gl, 1, 1, "svg-icon", 53),
        C(6, "svg-icon", 54),
        s()(),
        S(7, Yl, 1, 1, "lib-return-chart", 55),
        s()
    }
    if (i & 2) {
        let n = d();
        m("ngStyle", D(6, ze, n.sdManagerService.getPosition(n.ColumnName.ReturnChart))),
        l(3),
        N(n.sdManagerService.getTitle(n.ColumnName.ReturnChart)),
        l(2),
        y(n.loadingObject().returnChartLibraryComponentLoading ? 5 : -1),
        l(),
        m("ngClass", D(8, Ze, !n.sdManagerService.getVisibilityItem(n.ColumnName.ReturnChart)))("iconName", n.icons.ChevronUp),
        l(),
        y(n.sdManagerService.getVisibilityItem(n.ColumnName.ReturnChart) ? 7 : -1)
    }
}
function ql(i, o) {
    if (i & 1 && C(0, "lib-symbol-info", 59),
    i & 2) {
        let n = d(2);
        m("activeStockIsin", n._activeStockIsin())("marketDataInput", n.marketData())
    }
}
function Zl(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 24)(1, "div", 19)(2, "span", 20),
        u(3),
        s(),
        r(4, "div", 57),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.sdManagerService.changeVisibilityItem(t.ColumnName.SymbolInfo))
        }),
        C(5, "svg-icon", 58),
        s()(),
        S(6, ql, 1, 2, "lib-symbol-info", 59),
        s()
    }
    if (i & 2) {
        let n = d();
        m("ngStyle", D(5, ze, n.sdManagerService.getPosition(n.ColumnName.SymbolInfo))),
        l(3),
        N(n.sdManagerService.getTitle(n.ColumnName.SymbolInfo)),
        l(2),
        m("ngClass", D(7, Ze, !n.sdManagerService.getVisibilityItem(n.ColumnName.SymbolInfo)))("iconName", n.icons.ChevronUp),
        l(),
        y(n.sdManagerService.getVisibilityItem(n.ColumnName.SymbolInfo) ? 6 : -1)
    }
}
function Jl(i, o) {
    i & 1 && (r(0, "div", 60),
    u(1, "\u0633\u0631\u0627\u0646\u0647 \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC"),
    s(),
    r(2, "p", 61),
    u(3, " \u0627\u0631\u0632\u0634 \u0631\u06CC\u0627\u0644\u06CC \u0633\u0647\u0627\u0645\u06CC \u0627\u0633\u062A \u06A9\u0647 \u0647\u0631 \u06A9\u062F \u062D\u0642\u06CC\u0642\u06CC \u0628\u0647 \u0635\u0648\u0631\u062A \u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646 \u062E\u0631\u06CC\u062F\u0647 \u0627\u0633\u062A \u0648 \u0627\u0632 \u0641\u0631\u0645\u0648\u0644 \u0645\u062C\u0645\u0648\u0639 \u0627\u0631\u0632\u0634 \u062D\u0642\u06CC\u0642\u06CC \u062A\u0642\u0633\u06CC\u0645 \u0628\u0631 \u062A\u0639\u062F\u0627\u062F \u062E\u0631\u06CC\u062F\u0627\u0631 \u062D\u0642\u06CC\u0642\u06CC \u0645\u062D\u0627\u0633\u0628\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F. "),
    s(),
    r(4, "div", 60),
    u(5, "\u200C\u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC"),
    s(),
    r(6, "p", 61),
    u(7, "\u0628\u0647 \u062D\u0627\u0635\u0644 \u062A\u0642\u0633\u06CC\u0645 \u0633\u0631\u0627\u0646\u0647 \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC \u0628\u0631 \u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634 \u062D\u0642\u06CC\u0642\u06CC \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC \u06AF\u0641\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F."),
    s(),
    r(8, "div", 60),
    u(9, "\u062E\u0627\u0644\u0635 \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC"),
    s(),
    r(10, "p", 61),
    u(11, "\u0627\u0632 \u062A\u0641\u0627\u0636\u0644 \u062F\u0631\u0635\u062F \u062D\u062C\u0645 \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC \u0648 \u062F\u0631\u0635\u062F \u062D\u062C\u0645 \u0641\u0631\u0648\u0634 \u062D\u0642\u06CC\u0642\u06CC \u0645\u062D\u0627\u0633\u0628\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F."),
    s(),
    r(12, "a", 62),
    u(13, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F"),
    s()),
    i & 2 && (l(12),
    m("href", "https://learning.emofid.com/symbol-details-in-orbis/", pt))
}
function Kl(i, o) {
    i & 1 && (r(0, "p", 61),
    u(1, " \u0627\u06CC\u0646 \u0634\u0627\u062E\u0635 \u0647\u0627 \u0635\u0631\u0641\u0627 \u0648\u0636\u0639\u06CC\u062A \u062A\u06A9\u0646\u06CC\u06A9\u0627\u0644 \u0648 \u0628\u0646\u06CC\u0627\u062F\u06CC \u0634\u0631\u06A9\u062A \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06AF\u0630\u0634\u062A\u0647 \u0628\u0631\u0631\u0633\u06CC \u0645\u06CC\u200C\u06A9\u0646\u062F. \u0634\u0631\u06A9\u062A \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC \u0645\u0641\u06CC\u062F \u0648 \u0634\u0631\u06A9\u062A \u067E\u0631\u062F\u0627\u0632\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0627\u0644\u06CC \u067E\u0648\u06CC\u0627\u060C \u0645\u0633\u0626\u0648\u0644\u06CC\u062A\u06CC \u062F\u0631 \u062E\u0635\u0648\u0635 \u0645\u0639\u0627\u0645\u0644\u0627\u062A\u06CC \u06A9\u0647 \u0628\u0631 \u0627\u06CC\u0646 \u0627\u0633\u0627\u0633 \u0627\u0646\u062C\u0627\u0645 \u0634\u0648\u062F\u060C \u0646\u062F\u0627\u0631\u062F "),
    s())
}
function es(i, o) {
    i & 1 && (r(0, "a", 62),
    u(1, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F"),
    s()),
    i & 2 && m("href", "https://learning.emofid.com/option-symbol-details-in-easytrader/", pt)
}
var Yp = ( () => {
    let o = class o {
        constructor(e, t, a, c) {
            this.sdManagerService = e,
            this.modalNgService = t,
            this.symbolService = a,
            this.cdr = c,
            this.icons = R,
            this._activeStockIsin = T(""),
            this.activeStockIsin = _(),
            this.marketData = _(null),
            this.isMobile = _(!1),
            this.changeTabsEmitter = B(),
            this.symbolData = _(void 0),
            this.allDepthsModalClose = B(),
            this.orderFromDesktopMarketDepthInsidePopupEventEmitter = B(),
            this.makeOrderOnPriceClick = B(),
            this.makeOrderOnPriceChartClick = B(),
            this.makeOrderOnQuantityClick = B(),
            this.scrollTopValue = B(),
            this.openBaseSymbolDetail = B(),
            this.marketDepthChartIsOpen = T(!1),
            this.marketDepthChartRef = Le("depthChartScroll"),
            this.depthComponentScroll = Le("depthComponentScroll"),
            this.marketDepthComponent = Le("marketDepthComponent"),
            this.ColumnName = Z,
            this.symbolTabType = ft,
            this.widgetStates = T(null),
            this.showAnalytics = T(!1),
            this.showContractInfo = T(!1),
            this.showBaseIsinInfo = T(!1),
            this.showIndividualTradingTrend = T(!1),
            this.showSymbolInfoSection = T(!0),
            this.showReturnChartSection = T(!0),
            this.showEasyChartBtn = T(!0),
            this.loadingObject = T({
                symbolAnalyticsWidgetLoading: !1,
                individualTradingTrendComponentLoading: !1,
                returnChartLibraryComponentLoading: !1,
                indInstChartLibraryComponentLoading: !1,
                contractInfoComponentLoading: !1
            }),
            this.baseSymbolData$ = V(this._activeStockIsin).pipe(L(p => p?.length > 0), E(p => this.symbolService.getSymbolStream(p)), E(p => this.symbolService.getOptionBaseSymbolStream(p?.baseIsin)), L(p => !!p), F(p => p.symbolName)),
            this.baseIsinName = A(this.baseSymbolData$),
            this.showAllDepths = T(!1),
            ue( () => {
                if (this.activeStockIsin()) {
                    this.activeStockIsin() !== it( () => this._activeStockIsin()) && this.marketDepthChartIsOpen.set(!1),
                    this._activeStockIsin.set(this.activeStockIsin());
                    let p = Te.get(it( () => this.symbolData()).marketUnit);
                    p && (this.showAnalytics.set(p?.allowAnalyticsTab),
                    this.showContractInfo.set(p?.allowContractInfo),
                    this.showBaseIsinInfo.set(p?.allowBasicIsinInfo),
                    this.showIndividualTradingTrend.set(p?.allowToShowIndividualTradingTrend),
                    this.showSymbolInfoSection.set(p?.allowToShowSymbolInfoSection),
                    this.showReturnChartSection.set(p?.allowToShowReturnChartSection),
                    this.showEasyChartBtn.set(!He(p.marketUnit)))
                }
            }
            )
        }
        toggleMarketDepthChart() {
            this.marketDepthChartIsOpen.set(!this.marketDepthChartIsOpen()),
            this.marketDepthChartIsOpen() ? this.marketDepthChartRef().nativeElement?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            }) : this.depthComponentScroll().nativeElement?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
        preventSwipe() {}
        openAllDepthsModal() {
            this.showAllDepths.set(!0)
        }
        changeTabHandler(e) {
            this.changeTabsEmitter.emit(e)
        }
        openDetailOrderItems() {
            this.modalNgService.open(Da, {
                scrollable: !0
            })
        }
        setLoaderState(e, t) {
            this.loadingObject.update(a => (a[e] = t,
            J({}, a)))
        }
        openLink(e) {
            window.open(e, "_blank")
        }
        onScroll(e) {
            this.scrollTopValue.emit(e.target.scrollTop)
        }
        openBaseSymbolDetailHandler(e) {
            this.openBaseSymbolDetail.emit(e)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)(ee(ni),ee(Xt),ee(ge),ee(ji))
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["lib-symbol-information-container"]],
        viewQuery: function(t, a) {
            t & 1 && ($e(a.marketDepthChartRef, kl, 5),
            $e(a.depthComponentScroll, Tl, 5),
            $e(a.marketDepthComponent, Il, 5)),
            t & 2 && We(3)
        },
        inputs: {
            activeStockIsin: [1, "activeStockIsin"],
            marketData: [1, "marketData"],
            isMobile: [1, "isMobile"],
            symbolData: [1, "symbolData"]
        },
        outputs: {
            changeTabsEmitter: "changeTabsEmitter",
            allDepthsModalClose: "allDepthsModalClose",
            orderFromDesktopMarketDepthInsidePopupEventEmitter: "orderFromDesktopMarketDepthInsidePopupEventEmitter",
            makeOrderOnPriceClick: "makeOrderOnPriceClick",
            makeOrderOnPriceChartClick: "makeOrderOnPriceChartClick",
            makeOrderOnQuantityClick: "makeOrderOnQuantityClick",
            scrollTopValue: "scrollTopValue",
            openBaseSymbolDetail: "openBaseSymbolDetail"
        },
        features: [Ri([])],
        decls: 50,
        vars: 40,
        consts: [["depthComponentScroll", ""], ["marketDepthComponent", ""], ["depthChartScroll", ""], ["individualTradingTrendInfo", ""], ["symbolAnalyticsWidgetInfo", ""], ["contractInfoWidgetInfo", ""], [1, "symbol-detail-inset-shadow", "d-flex", "flex-column", "h-100"], [1, "p-2", "overflow-auto", "h-100", "d-flex", "flex-column", "gap-2", 3, "scroll"], [1, "market-data-holder", "overflow-hidden", "flex-shrink-0", 3, "ngStyle"], [1, "d-flex", "flex-column", "market-data", "position-relative", "bg-principal-3x-mobile", "bg-principal-3x-dark-mobile"], [3, "makeOrderOnPriceClick", "makeOrderOnPriceChartClick", "makeOrderOnQuantityClick", "isMobile", "activeSymbolIsin", "marketDataInput", "symbolDataInput"], [1, "px-2", "bg-principal"], [1, "d-block", 3, "activeStockIsinInput"], [1, "d-flex", "gap-2", "bg-principal", "pb-2", "px-2", "rounded-bottom"], [1, "rounded-2", "bg-principal-3x", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "flex-grow-1", "text-center", "bg-principal-hover", "cup", "p-2", "text-body", 3, "click"], ["width", "18", "height", "18", 1, "line-height-18px", "text-secondary", 3, "iconName"], [1, "rounded-2", "bg-principal-3x", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "flex-grow-1", "text-center", "bg-principal-hover", "cup", "p-2", "text-body", 3, "click", "ngClass"], ["makeOrderOnPriceClick", "", 3, "isMobile", "activeStockIsin", "showAllInfo"], [1, "bg-principal", "rounded", "overflow-hidden", "flex-shrink-0", "position-relative", 3, "swipe", "ngStyle"], [1, "bg-principal", "bg-principal-4x-dark", "shadow-sm", "d-flex", "align-items-center", "cup", "ps-2"], [1, "fw-bold", "p-2"], [1, "flex-grow-1", "text-end", "p-2", "trendchart-change-widget-visibility-handler", 3, "click"], ["width", "24", "height", "24", 1, "text-secondary", "ms-auto", "d-inline-block", "trendchart-change-widget-visibility-handler", 3, "ngClass", "iconName"], [1, "d-block", "p-2", 2, "min-height", "80px", 3, "activeStockIsin", "isMobile", "showEasyChartBtn"], [1, "bg-principal", "rounded", "overflow-hidden", "flex-shrink-0", 3, "ngStyle"], [1, "symbol-detail-card-header", "shadow-sm", "d-flex", "align-items-center", "cup", "bg-principal", "bg-principal-4x-dark", "ps-2"], [1, "flex-grow-1", "text-end", "p-2", "indinschart-change-widget-visibility-handler", 3, "click"], ["width", "24", "height", "24", 1, "spin", 3, "iconName"], ["width", "24", "height", "24", 1, "text-secondary", "ms-auto", "indinschart-change-widget-visibility-handler", "d-inline-block", 3, "ngClass", "iconName"], [1, "flex-shrink-0", "p-3", "d-block", 2, "min-height", "80px", 3, "isMobile", "symbolData"], [1, "rounded", "overflow-hidden", "flex-shrink-0", 3, "ngStyle"], [1, "bg-principal-2x", "bg-principal-hover", "align-self-center", "px-3", "rounded", "text-center", "cup", "py-2", "symbol-detail-widget-sort-modal", 2, "order", "10", 3, "click"], ["width", "20", "height", "20", 1, "line-height-20px", "me-1", "symbol-detail-widget-sort-modal", "text-secondary", 3, "iconName"], ["makeOrderOnPriceClick", "", 3, "makeOrderOnPriceClick", "makeOrderOnQuantityClick", "marketDepthAllClose", "isMobile", "activeStockIsin", "showAllInfo"], [1, "flex-shrink-0", "p-3", "d-block", 2, "min-height", "80px", 3, "loading", "isMobile", "symbolData"], [1, "bg-principal", "bg-principal-4x-dark", "shadow-sm", "d-flex", "align-items-center", "cup", "position-relative", "z-3", "ps-2"], [1, "p-2"], [1, "fw-bold"], ["width", "18", "height", "18", "container", "body", 1, "text-primary", 3, "click", "tap", "iconName", "triggers", "ngbPopover"], [1, "flex-grow-1", "text-end", "p-2", "tradingchart-change-widget-visibility-handler", 3, "click"], ["width", "24", "height", "24", 1, "text-secondary", "ms-auto", "tradingchart-change-widget-visibility-handler", "d-inline-block", 3, "ngClass", "iconName"], [1, "position-relative"], [1, "bg-principal", "opacity-5", "w-100", "h-100", "position-absolute", 2, "min-height", "130px", "top", "0", "z-index", "5"], [1, "position-relative", 2, "min-height", "80px", 3, "loading", "isMobile", "chartId", "symbolIsinInput"], ["width", "18", "height", "18", "container", "body", 1, "text-primary", 3, "tap", "iconName", "triggers", "ngbPopover"], [1, "flex-grow-1", "text-end", "p-2", "analytics-change-widget-visibility-handler", 3, "click"], ["width", "24", "height", "24", 1, "text-secondary", "ms-auto", "analytics-change-widget-visibility-handler", "d-inline-block", 3, "ngClass", "iconName"], [2, "min-height", "100px", 3, "symbolData"], [2, "min-height", "100px", 3, "changeTabToAnalytics", "loading", "symbolData"], [1, "d-block", "p-2", 2, "min-height", "80px", 3, "activeStockIsin"], ["data-cy", "base-symbol-info-container", 1, "d-block", "p-2", 2, "min-height", "80px", 3, "activeStockIsin"], ["data-cy", "base-symbol-info-container", 1, "d-block", "p-2", 2, "min-height", "80px", 3, "openBaseSymbolDetail", "activeStockIsin"], [1, "flex-grow-1", "text-end", "p-2", "returnchart-change-widget-visibility-handler", 3, "click"], ["width", "24", "height", "24", 1, "spin", "ms-auto", "text-secondary", 3, "iconName"], ["width", "24", "height", "24", 1, "text-secondary", "ms-auto", "flex-grow-1", "text-end", "returnchart-change-widget-visibility-handler", "d-inline-block", 3, "ngClass", "iconName"], [1, "d-flex", "flex-column", "justify-content-center", "flex-grow-1", "flex-shrink-0", "p-3", 2, "min-height", "80px", 3, "activeStockIsin"], [1, "d-flex", "flex-column", "justify-content-center", "flex-grow-1", "flex-shrink-0", "p-3", 2, "min-height", "80px", 3, "loading", "activeStockIsin"], [1, "flex-grow-1", "text-end", "p-2", "symbolinfo-change-widget-visibility-handler", 3, "click"], ["width", "24", "height", "24", 1, "text-secondary", "ms-auto", "d-inline-block", "symbolinfo-change-widget-visibility-handler", 3, "ngClass", "iconName"], [1, "d-block", "p-2", 2, "min-height", "80px", 3, "activeStockIsin", "marketDataInput"], [1, "mb-1", "text-justify", "fw-bold"], [1, "text-justify"], ["target", "_blank", 3, "href"]],
        template: function(t, a) {
            if (t & 1) {
                let c = I();
                r(0, "div", 6)(1, "div", 7),
                b("scroll", function(h) {
                    return g(c),
                    f(a.onScroll(h))
                }),
                r(2, "div", 8)(3, "div", 9, 0)(5, "lib-market-depth", 10, 1),
                b("makeOrderOnPriceClick", function(h) {
                    return g(c),
                    f(a.makeOrderOnPriceClick.emit(h))
                })("makeOrderOnPriceChartClick", function(h) {
                    return g(c),
                    f(a.makeOrderOnPriceChartClick.emit(h))
                })("makeOrderOnQuantityClick", function(h) {
                    return g(c),
                    f(a.makeOrderOnQuantityClick.emit(h))
                }),
                s()(),
                r(7, "div", 11, 2),
                S(9, Al, 1, 1, "lib-market-depth-chart", 12),
                s(),
                r(10, "div", 13)(11, "div", 14),
                b("click", function() {
                    return g(c),
                    f(a.openAllDepthsModal())
                }),
                C(12, "svg-icon", 15),
                r(13, "small"),
                u(14, "\u0646\u0645\u0627\u06CC\u0634 \u0647\u0645\u0647 \u0645\u0638\u0646\u0647\u200C\u0647\u0627"),
                s()(),
                r(15, "div", 16),
                b("click", function() {
                    return g(c),
                    f(a.toggleMarketDepthChart())
                }),
                C(16, "svg-icon", 15),
                r(17, "small"),
                u(18, "\u0646\u0645\u0627\u06CC\u0634 \u0646\u0645\u0648\u062F\u0627\u0631 \u0639\u0645\u0642"),
                s()()()(),
                S(19, Pl, 1, 3, "lib-market-depth-all", 17),
                r(20, "div", 18),
                b("swipe", function() {
                    return g(c),
                    f(a.preventSwipe())
                }),
                r(21, "div", 19)(22, "span", 20),
                u(23),
                s(),
                r(24, "div", 21),
                b("click", function() {
                    return g(c),
                    f(a.sdManagerService.changeVisibilityItem(a.ColumnName.TrendChart))
                }),
                C(25, "svg-icon", 22),
                s()(),
                S(26, Ml, 1, 3, "d3-trend-chart", 23),
                s(),
                r(27, "div", 24)(28, "div", 25)(29, "span", 20),
                u(30),
                s(),
                r(31, "div", 26),
                b("click", function() {
                    return g(c),
                    f(a.sdManagerService.changeVisibilityItem(a.ColumnName.IndInsChart))
                }),
                S(32, Fl, 1, 1, "svg-icon", 27),
                C(33, "svg-icon", 28),
                s()(),
                S(34, El, 1, 2, "lib-ind-inst-chart", 29),
                s(),
                S(35, Ll, 10, 13, "div", 30)(36, Ul, 10, 13, "div", 24)(37, Hl, 10, 13, "div", 24)(38, Wl, 9, 10, "div", 24)(39, Xl, 8, 10, "div", 24)(40, Zl, 7, 9, "div", 24),
                r(41, "div", 31),
                b("click", function() {
                    return g(c),
                    f(a.openDetailOrderItems())
                }),
                C(42, "svg-icon", 32),
                u(43, " \u062A\u0631\u062A\u06CC\u0628 \u0646\u0645\u0627\u06CC\u0634 \u062C\u0632\u0626\u06CC\u0627\u062A "),
                s()(),
                S(44, Jl, 14, 1, "ng-template", null, 3, be)(46, Kl, 2, 0, "ng-template", null, 4, be)(48, es, 2, 1, "ng-template", null, 5, be),
                s()
            }
            t & 2 && (l(2),
            m("ngStyle", D(28, ze, a.sdManagerService.getPosition(a.ColumnName.MarketDepth))),
            l(3),
            m("isMobile", a.isMobile())("activeSymbolIsin", a._activeStockIsin())("marketDataInput", a.marketData())("symbolDataInput", a.symbolData()),
            l(4),
            y(a.marketDepthChartIsOpen() ? 9 : -1),
            l(3),
            m("iconName", a.icons.MarketSheet),
            l(3),
            m("ngClass", D(30, wl, a.marketDepthChartIsOpen())),
            l(),
            m("iconName", a.icons.MarketDepth),
            l(3),
            y(a.showAllDepths() ? 19 : -1),
            l(),
            m("ngStyle", D(32, ze, a.sdManagerService.getPosition(a.ColumnName.TrendChart))),
            l(3),
            N(a.sdManagerService.getTitle(a.ColumnName.TrendChart)),
            l(2),
            m("ngClass", D(34, Ze, !a.sdManagerService.getVisibilityItem(a.ColumnName.TrendChart)))("iconName", a.icons.ChevronUp),
            l(),
            y(a.sdManagerService.getVisibilityItem(a.ColumnName.TrendChart) ? 26 : -1),
            l(),
            m("ngStyle", D(36, ze, a.sdManagerService.getPosition(a.ColumnName.IndInsChart))),
            l(3),
            N(a.sdManagerService.getTitle(a.ColumnName.IndInsChart)),
            l(2),
            y(a.loadingObject().indInstChartLibraryComponentLoading ? 32 : -1),
            l(),
            m("ngClass", D(38, Ze, !a.sdManagerService.getVisibilityItem(a.ColumnName.IndInsChart)))("iconName", a.icons.ChevronUp),
            l(),
            y(a.sdManagerService.getVisibilityItem(a.ColumnName.IndInsChart) ? 34 : -1),
            l(),
            y(a.showIndividualTradingTrend() ? 35 : -1),
            l(),
            y(a.showAnalytics() ? 36 : -1),
            l(),
            y(a.showContractInfo() ? 37 : -1),
            l(),
            y(a.showBaseIsinInfo() ? 38 : -1),
            l(),
            y(a.showReturnChartSection() ? 39 : -1),
            l(),
            y(a.showSymbolInfoSection() ? 40 : -1),
            l(2),
            m("iconName", a.icons.EditOrder))
        },
        dependencies: [te, Y, Fe, Ia, ai, oa, sa, ua, na, jn, Oa, fa, Ye, va, j, ma],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var Na = ( () => {
    let o = class o extends xe {
        corporateActionsUrl() {
            return `${this.mtsPath}${this.apiUrls.easy}symbol-analysis/corporate-action`
        }
        getCorporateActions(e) {
            let t = `${this.corporateActionsUrl()}?isin=${e}`;
            return this.httpService.get(t)
        }
    }
    ;
    o.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = Ie(o)))(a || o)
        }
    }
    )(),
    o.\u0275prov = Ce({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let i = o;
    return i
}
)();
var La = (i, o) => o.date
  , ts = i => ({
    loading: i
})
  , Ba = i => ({
    "rotate-180": i
})
  , Di = (i, o) => ({
    "text-success": i,
    "text-danger": o
});
function is(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 1),
        C(1, "svg-icon", 8),
        u(2, " \u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A "),
        r(3, "button", 9),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.load(t._activeStockIsin()))
        }),
        C(4, "svg-icon", 10),
        u(5, " \u062A\u0644\u0627\u0634 \u0645\u062C\u062F\u062F "),
        s()()
    }
    if (i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.Alert),
        l(3),
        m("iconName", n.icons.refresh)
    }
}
function ns(i, o) {
    if (i & 1 && (r(0, "tr", 19)(1, "td"),
    u(2),
    s(),
    r(3, "td", 20),
    u(4),
    M(5, "number"),
    s(),
    r(6, "td", 20),
    u(7),
    M(8, "number"),
    s()()),
    i & 2) {
        let n = o.$implicit;
        l(2),
        N(n.date),
        l(),
        m("ngClass", pe(9, Di, n.eps > 0, n.eps < 0)),
        l(),
        k(" ", G(5, 5, n.eps), " "),
        l(2),
        m("ngClass", pe(12, Di, n.dps > 0, n.dps < 0)),
        l(),
        k(" ", G(8, 7, n.dps), " ")
    }
}
function as(i, o) {
    if (i & 1 && (r(0, "table", 17)(1, "thead")(2, "tr")(3, "th", 18),
    u(4, "\u062A\u0627\u0631\u06CC\u062E"),
    s(),
    r(5, "th", 18),
    u(6, "\u0645\u0642\u062F\u0627\u0631 \u0633\u0648\u062F"),
    s(),
    r(7, "th", 18),
    u(8, "\u0633\u0648\u062F \u062A\u0642\u0633\u06CC\u0645 \u0634\u062F\u0647"),
    s()()(),
    r(9, "tbody"),
    z(10, ns, 9, 15, "tr", 19, La),
    s()()),
    i & 2) {
        let n, e = d(4);
        l(10),
        W((n = e.symbolCorporateActions()) == null ? null : n.dividend)
    }
}
function os(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "span", 14),
        u(4, "\u062A\u0642\u0633\u06CC\u0645 \u0633\u0648\u062F"),
        s()(),
        r(5, "div", 15),
        b("click", function() {
            g(n);
            let t = d(3);
            return f(t.changeVisibilityItem("dividend"))
        }),
        C(6, "svg-icon", 16),
        s()(),
        S(7, as, 12, 0, "table", 17),
        s()
    }
    if (i & 2) {
        let n = d(3);
        l(6),
        m("iconName", n.icons.ChevronDown)("ngClass", D(3, Ba, n.CorporateActionSections().get("dividend"))),
        l(),
        y(n.CorporateActionSections().get("dividend") ? 7 : -1)
    }
}
function rs(i, o) {
    if (i & 1 && (r(0, "tr", 19)(1, "td"),
    u(2),
    s(),
    r(3, "td"),
    u(4),
    s(),
    r(5, "td", 20),
    u(6),
    s()()),
    i & 2) {
        let n = o.$implicit;
        l(2),
        N(n.date),
        l(2),
        N(n.capitalRaiseType),
        l(),
        m("ngClass", pe(4, Di, n.perc > 0, n.perc < 0)),
        l(),
        k(" ", n.perc, "% ")
    }
}
function ls(i, o) {
    if (i & 1 && (r(0, "table", 17)(1, "thead")(2, "tr")(3, "th", 18),
    u(4, "\u062A\u0627\u0631\u06CC\u062E"),
    s(),
    r(5, "th", 18),
    u(6, "\u0646\u0648\u0639"),
    s(),
    r(7, "th", 18),
    u(8, "\u062F\u0631\u0635\u062F"),
    s()()(),
    r(9, "tbody"),
    z(10, rs, 7, 7, "tr", 19, La),
    s()()),
    i & 2) {
        let n, e = d(4);
        l(10),
        W((n = e.symbolCorporateActions()) == null ? null : n.capitalRaise)
    }
}
function ss(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "span", 14),
        u(4, "\u0627\u0641\u0632\u0627\u06CC\u0634 \u0633\u0631\u0645\u0627\u06CC\u0647"),
        s()(),
        r(5, "div", 15),
        b("click", function() {
            g(n);
            let t = d(3);
            return f(t.changeVisibilityItem("capitalRaise"))
        }),
        C(6, "svg-icon", 16),
        s()(),
        S(7, ls, 12, 0, "table", 17),
        s()
    }
    if (i & 2) {
        let n = d(3);
        l(6),
        m("iconName", n.icons.ChevronDown)("ngClass", D(3, Ba, n.CorporateActionSections().get("capitalRaise"))),
        l(),
        y(n.CorporateActionSections().get("capitalRaise") ? 7 : -1)
    }
}
function cs(i, o) {
    if (i & 1 && S(0, os, 8, 5, "div", 11)(1, ss, 8, 5, "div", 11),
    i & 2) {
        let n, e, t = d(2);
        y((n = t.symbolCorporateActions()) != null && n.dividend ? 0 : -1),
        l(),
        y((e = t.symbolCorporateActions()) != null && e.capitalRaise ? 1 : -1)
    }
}
function us(i, o) {
    if (i & 1 && S(0, cs, 2, 2),
    i & 2) {
        let n = d();
        y(!n.errorState() && n.symbolCorporateActions() ? 0 : -1)
    }
}
var sh = ( () => {
    let o = class o {
        onScroll(e) {
            this.scrollTopValue.emit(e.target.scrollTop)
        }
        constructor() {
            this.icons = R,
            this.CorporateActionSections = T(new Map([["capitalRaise", !0], ["dividend", !0], ["assemblyInvitation", !0]])),
            this.activeStockIsin = _(),
            this.activeStockIsin$ = V(this.activeStockIsin).pipe(ut(), X( () => {
                this.load()
            }
            )),
            this.scrollTopValue = B(),
            this.errorState = T(!1),
            this.loading = T(!0),
            this.symbolCorporateActionsService = $(Na),
            this.symbolCorporateActions$ = this.activeStockIsin$.pipe(E(e => this.symbolCorporateActionsObs = this.symbolCorporateActionsService.getCorporateActions(e).pipe(F(t => (t.assemblyInvitation = [...t.assemblyInvitation?.slice(0, 5) ?? []],
            t.capitalRaise = [...t.capitalRaise?.slice(0, 5) ?? []],
            t.dividend = [...t.dividend?.slice(0, 5) ?? []],
            t)), me( () => (this.errorState.set(!0),
            se(null))), et( () => this.loading.set(!1))))),
            this.symbolCorporateActions = A(this.symbolCorporateActions$),
            A(this.activeStockIsin$)
        }
        changeVisibilityItem(e) {
            this.CorporateActionSections.update(t => t.set(e, !t.get(e)))
        }
        load() {
            this.loading.set(!0),
            this.errorState.set(!1)
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["corporate-actions"]],
        inputs: {
            activeStockIsin: [1, "activeStockIsin"]
        },
        outputs: {
            scrollTopValue: "scrollTopValue"
        },
        decls: 11,
        vars: 4,
        consts: [[1, "d-flex", "flex-column", "p-2", "gap-2", "h-100", 3, "scroll", "ngClass"], [1, "d-flex", "flex-column", "align-items-center", "gap-2"], [1, "mt-auto", "text-center"], ["href", "https://bv.emofid.com", "target", "_blank", 1, "d-inline-flex", "gap-1", "align-items-center", "my-2", "small"], [1, "text-secondary"], [1, "rounded", "bg-global", "text-global", "bg-opacity-10", "p-1"], ["width", "18", "height", "18", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3 0C1.34315 0 0 1.34315 0 3V11C0 12.6569 1.34315 14 3 14H11C12.6569 14 14 12.6569 14 11V3C14 1.34315 12.6569 0 11 0H3ZM10.8657 4.67923C11.1069 4.07182 11.3747 3.47905 11.7579 2.94705L9.5917 2.94707C9.5934 2.98409 9.59529 3.02111 9.59718 3.05814V3.05816L9.59719 3.05819L9.59719 3.05822C9.60133 3.1393 9.60548 3.22039 9.60754 3.30153C9.61484 3.58756 9.54994 3.86002 9.45057 4.12526C9.04896 5.19713 8.64717 6.26893 8.24537 7.34074L8.24272 7.34781L8.24123 7.35178L7.8237 8.46558L7.80037 8.52684L7.774 8.44342L7.77393 8.44321C7.75678 8.38901 7.74075 8.33837 7.72496 8.28766L7.40605 7.26369C7.07064 6.18681 6.73523 5.10993 6.40068 4.03277C6.31632 3.76114 6.25782 3.48421 6.26618 3.19694C6.26861 3.11316 6.27338 3.02932 6.29156 2.94705H3.259C3.30057 2.95092 3.34215 2.95463 3.38374 2.95834L3.38378 2.95834C3.47503 2.96648 3.56628 2.97462 3.65734 2.9845C4.00473 3.02216 4.3428 3.0994 4.66242 3.24549C5.09396 3.44272 5.44045 3.7341 5.63629 4.18259C5.78499 4.52314 5.81958 4.88165 5.78406 5.24936C5.73811 5.72511 5.52907 6.11185 5.16541 6.41398C5.0473 6.5121 4.91945 6.59582 4.77596 6.67389L4.81309 6.68976L4.81311 6.68977L4.81315 6.68979C4.838 6.70036 4.86004 6.70973 4.8818 6.71974C4.91646 6.73568 4.95087 6.75221 4.9848 6.76966C5.47743 7.023 5.84706 7.38992 6.01873 7.93462C6.12895 8.28436 6.1462 8.64305 6.10239 9.00618C6.04697 9.46554 5.8717 9.86631 5.53829 10.1884C5.1696 10.5445 4.71713 10.7266 4.22671 10.8264C3.98995 10.8746 3.75044 10.9014 3.50913 10.9163H3.67461L4.28423 10.9163C5.629 10.9163 6.97375 10.9162 8.31851 10.9175C8.36825 10.9175 8.39093 10.9043 8.41032 10.8555C8.85641 9.73178 9.30326 8.60841 9.7501 7.48504L9.75054 7.48392C10.1224 6.54908 10.4943 5.61424 10.8657 4.67923ZM2.34669 7.30899L2.34668 7.30899C2.34499 7.31036 2.34329 7.31173 2.34159 7.31281V9.74112C2.34743 9.74247 2.35325 9.74398 2.35907 9.74549L2.35908 9.7455C2.37154 9.74874 2.384 9.75198 2.39665 9.75357C2.56575 9.77479 2.73468 9.76811 2.90415 9.75469C3.13265 9.73658 3.35574 9.69444 3.56944 9.61012C4.19813 9.36204 4.43223 8.84398 4.31281 8.22959C4.24522 7.88184 4.01973 7.65357 3.71106 7.50462C3.28055 7.29687 2.82038 7.29028 2.35768 7.30301C2.35397 7.30311 2.35033 7.30605 2.34669 7.30899ZM2.34159 4.10951C2.34396 4.10828 2.34631 4.10671 2.34867 4.10514C2.35369 4.10179 2.35871 4.09844 2.36382 4.09832C2.70109 4.09025 3.03794 4.09131 3.35941 4.2158C3.64944 4.32811 3.88428 4.50871 3.96927 4.82458C4.11264 5.35737 3.93446 5.87094 3.36259 6.11215C3.04305 6.24693 2.70726 6.27117 2.36688 6.26614C2.36114 6.26606 2.35539 6.26621 2.34963 6.26637L2.34959 6.26637L2.34159 6.26656V4.10951Z", "fill", "currentColor"], ["width", "36", "height", "36", 1, "text-secondary", "mb-3", 3, "iconName"], [1, "btn", "btn-sm", "btn-outline-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], ["width", "20", "height", "20", 1, "", 3, "iconName"], [1, "bg-principal", "rounded", "overflow-hidden", "flex-shrink-0"], [1, "bg-principal", "bg-principal-4x-dark", "shadow-sm", "d-flex", "align-items-center", "cup", "ps-2"], [1, "p-2"], [1, "fw-bold"], [1, "flex-grow-1", "text-end", "p-2", "cup", 3, "click"], ["width", "24", "height", "24", 1, "text-secondary", "d-inline-block", 3, "iconName", "ngClass"], [1, "table", "mb-0", "text-center", 2, "--bs-table-bg", "var(--color-principal)"], [1, "bg-principal-2x"], ["dir", "ltr"], [3, "ngClass"]],
        template: function(t, a) {
            t & 1 && (r(0, "div", 0),
            b("scroll", function(p) {
                return a.onScroll(p)
            }),
            S(1, is, 6, 2, "div", 1)(2, us, 1, 1),
            r(3, "div", 2)(4, "a", 3)(5, "span", 4),
            u(6, "\u0628\u0627 \u0647\u0645\u06A9\u0627\u0631\u06CC "),
            s(),
            r(7, "div", 5),
            tt(),
            r(8, "svg", 6),
            C(9, "path", 7),
            s(),
            u(10, " \u0628\u0648\u0631\u0633 \u0648\u06CC\u0648 "),
            s()()()()),
            t & 2 && (m("ngClass", D(2, ts, a.loading())),
            l(),
            y(a.errorState() ? 1 : 2))
        },
        dependencies: [te, Y, Q, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var $a = ( () => {
    let o = class o extends xe {
        quotesHistoryUrl() {
            return `${this.mtsPath}${this.apiUrls.easy}symbol-analysis/quotes-History`
        }
        getQuotesHistory(e) {
            let t = `${this.quotesHistoryUrl()}?isin=${e}`;
            return this.httpService.get(t)
        }
    }
    ;
    o.\u0275fac = ( () => {
        let e;
        return function(a) {
            return (e || (e = Ie(o)))(a || o)
        }
    }
    )(),
    o.\u0275prov = Ce({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let i = o;
    return i
}
)();
var ds = (i, o) => ({
    "text-danger": i,
    "text-success": o
});
function ps(i, o) {
    if (i & 1 && (r(0, "div", 4)(1, "div", 6),
    u(2),
    s(),
    r(3, "div", 7)(4, "span", 8),
    u(5, " ("),
    r(6, "span"),
    u(7),
    s(),
    u(8, "%) "),
    s(),
    u(9),
    M(10, "priceNumber"),
    s()()),
    i & 2) {
        let n = o.$implicit;
        l(2),
        N(n == null ? null : n.dateTimeLocal),
        l(2),
        m("ngClass", pe(6, ds, (n == null ? null : n.changePercent) < 0, (n == null ? null : n.changePercent) > 0)),
        l(3),
        N(n == null ? null : n.changePercent),
        l(2),
        k(" ", G(10, 4, n == null ? null : n.close), " ")
    }
}
function hs(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 5)(1, "button", 9),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.loadMore())
        }),
        u(2, "\u0628\u06CC\u0634\u062A\u0631"),
        s()()
    }
}
var gh = ( () => {
    let o = class o {
        constructor(e) {
            this.symbolQuotesHistoryService = e,
            this._activeStockIsin = T(""),
            this.activeStockIsin = _(),
            this.data$ = null,
            this.data = A(this.data$),
            ue( () => {
                this.activeStockIsin() && this._activeStockIsin() !== this.activeStockIsin() && (this._activeStockIsin.set(this.activeStockIsin()),
                this.getCorporateActions())
            }
            )
        }
        getCorporateActions() {
            this.symbolQuotesHistoryService.getQuotesHistory(this._activeStockIsin()).subscribe(e => {
                this.data$ = null,
                this.symbolQuotesHistory = e.sort( (t, a) => +a.dateTimeLocal.replaceAll("-", "") - +t.dateTimeLocal.replaceAll("-", "")).map(t => De(J({}, t), {
                    dateTimeLocal: ce.getFormattedJDate(new Date(t.dateTimeLocal))
                })),
                this.data$ = new pn(this.symbolQuotesHistory,20)
            }
            )
        }
        loadMore() {
            this.data$.loadMore()
        }
        reset() {
            this.data$.reload()
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)(ee($a))
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["quotes-history"]],
        inputs: {
            activeStockIsin: [1, "activeStockIsin"]
        },
        decls: 10,
        vars: 1,
        consts: [[1, "d-flex", "flex-column", "h-100"], [1, "d-flex", "bg-principal", "shadow-sm"], [1, "flex-grow-1", "p-2", "text-center", "text-secondary"], [1, "px-2", "pt-2", "list-group", "overflow-auto", "list-group-flush", "rounded"], [1, "d-flex", "list-group-item", "bg-principal", "text-center"], [1, "text-center", "my-2"], [1, "flex-grow-1"], [1, "flex-grow-1", "d-flex", "justify-content-center", "gap-1"], ["dir", "ltr", 1, "d-inline-block", 3, "ngClass"], ["type", "button", 1, "btn", "btn-outline-primary", "px-4", 3, "click"]],
        template: function(t, a) {
            if (t & 1 && (r(0, "div", 0)(1, "div", 1)(2, "span", 2),
            u(3, "\u062A\u0627\u0631\u06CC\u062E"),
            s(),
            r(4, "span", 2),
            u(5, "\u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC"),
            s()(),
            r(6, "div", 3),
            z(7, ps, 11, 9, "div", 4, Se),
            s(),
            S(9, hs, 3, 0, "div", 5),
            s()),
            t & 2) {
                let c;
                l(7),
                W(a.data()),
                l(2),
                y((c = a.data()) != null && c.hasMore$ ? 9 : -1)
            }
        },
        dependencies: [te, Y, an],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
var Cs = i => ({
    loading: i
})
  , ki = i => ({
    "rotate-180": i
})
  , Ua = () => ({
    from: 1,
    to: 2,
    color: "#DA514D"
})
  , Ra = () => ({
    from: 2,
    to: 3,
    color: "#FDB85D"
})
  , ja = () => ({
    from: 3,
    to: 4,
    color: "#F4D644"
})
  , Ha = () => ({
    from: 4,
    to: 5,
    color: "#A1CF6F"
})
  , Qa = () => ({
    from: 5,
    to: 6,
    color: "#26BE8C"
})
  , za = (i, o, n, e, t) => [i, o, n, e, t]
  , st = i => ({
    active: i
});
function bs(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 4),
        C(1, "svg-icon", 12),
        u(2, " \u062E\u0637\u0627 \u062F\u0631 \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A "),
        r(3, "button", 13),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.reload(t.symbol()))
        }),
        C(4, "svg-icon", 14),
        u(5, " \u062A\u0644\u0627\u0634 \u0645\u062C\u062F\u062F "),
        s()()
    }
    if (i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.Alert),
        l(3),
        m("iconName", n.icons.refresh)
    }
}
function ys(i, o) {
    if (i & 1 && (r(0, "div", 22)(1, "div", 23)(2, "div", 24),
    u(3, "\u0646\u0645\u0631\u0647 \u062A\u06A9\u0646\u06CC\u06A9\u0627\u0644"),
    s(),
    r(4, "div", 25),
    C(5, "gauge-chart", 26),
    s()()(),
    r(6, "div", 27)(7, "div", 28)(8, "div", 29)(9, "div", 30)(10, "div", 31)(11, "div", 32),
    u(12),
    s()()(),
    r(13, "div", 33),
    u(14, "\u0627\u0646\u062F\u06CC\u06A9\u0627\u062A\u0648\u0631"),
    s()(),
    r(15, "div", 29)(16, "div", 30)(17, "div", 31)(18, "div", 32),
    u(19),
    s()()(),
    r(20, "div", 33),
    u(21, "\u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646 \u0645\u062A\u062D\u0631\u06A9"),
    s()()()()),
    i & 2) {
        let n, e, t, a = d(3);
        l(5),
        m("chartId", "technicalAnalysis-gauge-chart")("showNeedle", !1)("value", (n = a.technicalAnalysisResponse()) == null || n.totalScore == null ? null : n.totalScore.score)("colorValueArray", ht(17, za, de(12, Ua), de(13, Ra), de(14, ja), de(15, Ha), de(16, Qa)))("maxValue", 5)("minValue", 0),
        l(6),
        Ne("width", a.indicatorScore() * 20, "%"),
        l(),
        k(" ", (e = a.indicatorScore()) !== null && e !== void 0 ? e : 0, " "),
        l(6),
        Ne("width", a.movingAverageScore() * 20, "%"),
        l(),
        k(" ", (t = a.movingAverageScore()) !== null && t !== void 0 ? t : 0, " ")
    }
}
function gs(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "span", 18),
        u(4, "\u062A\u06A9\u0646\u06CC\u06A9\u0627\u0644"),
        s(),
        r(5, "svg-icon", 19),
        b("click", function() {
            g(n);
            let t = d(2);
            return f(!t.isMobile() && t.openLink("https://learning.emofid.com/symbol-evaluation-in-orbis/"))
        })("tap", function() {
            g(n),
            d(2);
            let t = oe(12);
            return f(t)
        }),
        s()(),
        r(6, "div", 20),
        b("click", function() {
            g(n);
            let t = d(2);
            return f(t.changeVisibilityItem("technical"))
        }),
        C(7, "svg-icon", 21),
        s()(),
        S(8, ys, 22, 23),
        s()
    }
    if (i & 2) {
        let n = d(2)
          , e = oe(12);
        l(5),
        m("iconName", n.icons.QuestionBox)("triggers", n.isMobile() ? "click:blur" : "mouseenter:mouseleave")("ngbPopover", e),
        l(2),
        m("iconName", n.icons.ChevronDown)("ngClass", D(6, ki, n.SymbolAnalysisSections().get("technical"))),
        l(),
        y(n.SymbolAnalysisSections().get("technical") ? 8 : -1)
    }
}
function fs(i, o) {
    if (i & 1 && (r(0, "span", 50),
    u(1),
    s()),
    i & 2) {
        let n = d().$implicit;
        l(),
        N(n.score)
    }
}
function Ss(i, o) {
    if (i & 1 && (r(0, "div", 29)(1, "div", 30)(2, "div", 47)(3, "div", 48)(4, "span", 49),
    u(5),
    s()(),
    S(6, fs, 2, 1, "span", 50),
    s()(),
    r(7, "div", 33),
    u(8),
    s()()),
    i & 2) {
        let n = o.$implicit;
        l(3),
        Ne("width", n.score * 20, "%"),
        l(2),
        N(n.score * 20 >= 20 ? n.score : ""),
        l(),
        y(n.score * 20 < 20 ? 6 : -1),
        l(2),
        N(n.title)
    }
}
function vs(i, o) {
    if (i & 1 && (r(0, "div", 44),
    z(1, Ss, 9, 5, "div", 29, Se),
    s(),
    r(3, "div", 45),
    C(4, "svg-icon", 46),
    u(5, " \u0645\u0628\u0646\u0627\u06CC \u0645\u062D\u0627\u0633\u0628\u0647 \u0646\u0645\u0631\u0627\u062A \u0627\u0632 5 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F. "),
    s()),
    i & 2) {
        let n, e = d(4);
        l(),
        W((n = e.fundamentalAnalysisResponse()) == null ? null : n.item),
        l(3),
        m("iconName", e.icons.InfoBox)
    }
}
function _s(i, o) {
    if (i & 1 && C(0, "spider-chart", 43),
    i & 2) {
        let n, e = d(4);
        m("chartId", "spider-Chart")("chartData", (n = e.fundamentalAnalysisResponse()) == null ? null : n.item)
    }
}
function xs(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 22)(1, "div", 23)(2, "div", 24),
        u(3, "\u0646\u0645\u0631\u0647 \u0628\u0646\u06CC\u0627\u062F\u06CC"),
        s(),
        r(4, "div", 25),
        C(5, "gauge-chart", 36),
        s()()(),
        r(6, "div", 27)(7, "div", 37)(8, "span"),
        u(9, "\u0634\u0627\u062E\u0635 \u0628\u0646\u06CC\u0627\u062F\u06CC"),
        s(),
        r(10, "div", 38)(11, "button", 39),
        b("click", function() {
            g(n);
            let t = d(3);
            return f(t.changeSpiderChart.set("radar"))
        }),
        C(12, "svg-icon", 40),
        s(),
        r(13, "button", 41),
        b("click", function() {
            g(n);
            let t = d(3);
            return f(t.changeSpiderChart.set("bar"))
        }),
        C(14, "svg-icon", 42),
        s()()(),
        S(15, vs, 6, 1)(16, _s, 1, 2, "spider-chart", 43),
        s()
    }
    if (i & 2) {
        let n, e = d(3);
        l(5),
        m("chartId", "fundamentalAnalysis-gauge-chart")("showNeedle", !1)("value", (n = e.fundamentalAnalysisResponse()) == null || n.total == null ? null : n.total.score)("colorValueArray", ht(16, za, de(11, Ua), de(12, Ra), de(13, ja), de(14, Ha), de(15, Qa)))("maxValue", 5)("minValue", 0),
        l(6),
        m("ngClass", D(22, st, e.changeSpiderChart() === "radar")),
        l(),
        m("iconName", e.icons.ChartSpider),
        l(),
        m("ngClass", D(24, st, e.changeSpiderChart() === "bar")),
        l(),
        m("iconName", e.icons.ChartBar),
        l(),
        y(e.changeSpiderChart() === "bar" ? 15 : 16)
    }
}
function Ds(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 15)(1, "div", 34)(2, "div", 17)(3, "span", 18),
        u(4, "\u0628\u0646\u06CC\u0627\u062F\u06CC"),
        s(),
        r(5, "svg-icon", 35),
        b("tap", function() {
            g(n),
            d(2);
            let t = oe(14);
            return f(t)
        })("click", function() {
            g(n);
            let t = d(2);
            return f(!t.isMobile() && t.openLink("https://learning.emofid.com/symbol-evaluation-in-orbis/"))
        }),
        s()(),
        r(6, "div", 20),
        b("click", function() {
            g(n);
            let t = d(2);
            return f(t.changeVisibilityItem("fundamental"))
        }),
        C(7, "svg-icon", 21),
        s()(),
        S(8, xs, 17, 26),
        s()
    }
    if (i & 2) {
        let n = d(2)
          , e = oe(14);
        l(5),
        m("iconName", n.icons.QuestionBox)("triggers", n.isMobile() ? "click:blur" : "mouseenter:mouseleave")("ngbPopover", e),
        l(2),
        m("iconName", n.icons.ChevronDown)("ngClass", D(6, ki, n.SymbolAnalysisSections().get("fundamental"))),
        l(),
        y(n.SymbolAnalysisSections().get("fundamental") ? 8 : -1)
    }
}
function ks(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 22)(1, "div", 52)(2, "div", 53)(3, "button", 54),
        b("click", function() {
            g(n);
            let t = d(3);
            return f(t.changeZarayebChartParamsHandler("interval", "Quarterly"))
        }),
        r(4, "small"),
        u(5, "\u0641\u0635\u0644"),
        s()(),
        r(6, "button", 55),
        b("click", function() {
            g(n);
            let t = d(3);
            return f(t.changeZarayebChartParamsHandler("interval", "Yearly"))
        }),
        r(7, "small"),
        u(8, "\u0633\u0627\u0644"),
        s()()(),
        r(9, "div", 53)(10, "button", 54),
        b("click", function() {
            g(n);
            let t = d(3);
            return f(t.changeZarayebChartParamsHandler("metrics", "earningPerShareTTM"))
        }),
        r(11, "small"),
        u(12, "EPS"),
        s()(),
        r(13, "button", 55),
        b("click", function() {
            g(n);
            let t = d(3);
            return f(t.changeZarayebChartParamsHandler("metrics", "p2s"))
        }),
        r(14, "small"),
        u(15, "P/S"),
        s()(),
        r(16, "button", 55),
        b("click", function() {
            g(n);
            let t = d(3);
            return f(t.changeZarayebChartParamsHandler("metrics", "p2e"))
        }),
        r(17, "small"),
        u(18, "P/E"),
        s()()()(),
        C(19, "bar-chart", 56),
        s()
    }
    if (i & 2) {
        let n = d(3);
        l(3),
        m("ngClass", D(12, st, n.zarayebChartParams().interval === "Quarterly")),
        l(3),
        m("ngClass", D(14, st, n.zarayebChartParams().interval === "Yearly")),
        l(4),
        m("ngClass", D(16, st, n.zarayebChartParams().metrics === "earningPerShareTTM")),
        l(3),
        m("ngClass", D(18, st, n.zarayebChartParams().metrics === "p2s")),
        l(3),
        m("ngClass", D(20, st, n.zarayebChartParams().metrics === "p2e")),
        l(3),
        m("height", 170)("barColor", "var(--bs-global-600)")("barThickness", "20")("chartId", "zarayeb-chart")("showAllDates", !0)("barWidth", 6)("items", n.financialStatsResponse())
    }
}
function Ts(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 15)(1, "div", 34)(2, "div", 17)(3, "span", 18),
        u(4, "\u0636\u0631\u0627\u06CC\u0628 \u0628\u0646\u06CC\u0627\u062F\u06CC"),
        s(),
        r(5, "svg-icon", 51),
        b("tap", function() {
            g(n),
            d(2);
            let t = oe(16);
            return f(t)
        }),
        s()(),
        r(6, "div", 20),
        b("click", function() {
            g(n);
            let t = d(2);
            return f(t.changeVisibilityItem("zarayeb"))
        }),
        C(7, "svg-icon", 21),
        s()(),
        S(8, ks, 20, 22, "div", 22),
        s()
    }
    if (i & 2) {
        let n = d(2)
          , e = oe(16);
        l(5),
        m("iconName", n.icons.QuestionBox)("triggers", n.isMobile() ? "click:blur" : "mouseenter:mouseleave")("ngbPopover", e),
        l(2),
        m("iconName", n.icons.ChevronDown)("ngClass", D(6, ki, n.SymbolAnalysisSections().get("zarayeb"))),
        l(),
        y(n.SymbolAnalysisSections().get("zarayeb") ? 8 : -1)
    }
}
function Is(i, o) {
    if (i & 1 && S(0, gs, 9, 8, "div", 15)(1, Ds, 9, 8, "div", 15)(2, Ts, 9, 8, "div", 15),
    i & 2) {
        let n, e = d();
        y(e.technicalAnalysisResponse() ? 0 : -1),
        l(),
        y(e.fundamentalAnalysisResponse() ? 1 : -1),
        l(),
        y((n = e.financialStatsResponse()) != null && n.length ? 2 : -1)
    }
}
function ws(i, o) {
    i & 1 && (r(0, "div", 57),
    u(1, " \u0634\u0627\u062E\u0635 \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u062A\u06A9\u0646\u06CC\u06A9\u0627\u0644 \u0628\u06CC\u0634 \u0627\u0632 70 \u0627\u0646\u062F\u06CC\u06A9\u0627\u062A\u0648\u0631 \u0648 \u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646 \u0645\u062A\u062D\u0631\u06A9 \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u06CC\u0646 \u0634\u0627\u062E\u0635 \u0635\u0631\u0641\u0627 \u0648\u0636\u0639\u06CC\u062A \u062A\u06A9\u0646\u06CC\u06A9\u0627\u0644 \u0634\u0631\u06A9\u062A \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06AF\u0630\u0634\u062A\u0647 \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u0645\u06CC \u06A9\u0646\u062F \u0648 \u0646\u0628\u0627\u06CC\u062F \u0628\u0647 \u062A\u0646\u0647\u0627\u06CC\u06CC \u0645\u0628\u0646\u0627\u06CC \u062A\u0635\u0645\u06CC\u0645 \u06AF\u06CC\u0631\u06CC \u0642\u0631\u0627\u0631 \u06AF\u06CC\u0631\u062F. \u0634\u0631\u06A9\u062A \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC \u0645\u0641\u06CC\u062F \u0648 \u0634\u0631\u06A9\u062A \u067E\u0631\u062F\u0627\u0632\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0627\u0644\u06CC \u067E\u0648\u06CC\u0627\u060C \u0645\u0633\u0626\u0648\u0644\u06CC\u062A\u06CC \u062F\u0631 \u062E\u0635\u0648\u0635 \u0645\u0639\u0627\u0645\u0644\u0627\u062A\u06CC \u06A9\u0647 \u0628\u0631 \u0627\u06CC\u0646 \u0627\u0633\u0627\u0633 \u0627\u0646\u062C\u0627\u0645 \u0634\u0648\u062F \u0646\u062F\u0627\u0631\u062F. "),
    s(),
    r(2, "a", 58),
    u(3, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F"),
    s()),
    i & 2 && (l(2),
    m("href", "https://learning.emofid.com/symbol-evaluation-in-orbis", pt))
}
function As(i, o) {
    i & 1 && (r(0, "div", 57),
    u(1, " \u0628\u0631\u0627\u06CC \u0645\u062D\u0627\u0633\u0628\u0647 \u0627\u06CC\u0646 \u0634\u0627\u062E\u0635 \u0627\u0632 \u0628\u06CC\u0634 \u0627\u0632 50 \u0646\u0633\u0628\u062A \u0645\u0627\u0644\u06CC\u060C \u062F\u0631 9 \u0628\u062E\u0634 \u0645\u062E\u062A\u0644\u0641 \u0632\u06CC\u0631 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u062F\u0631 \u0627\u06CC\u0646 \u0631\u0648\u0634 \u0627\u0628\u062A\u062F\u0627 \u0634\u0631\u06A9\u062A \u0647\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0646\u0633\u0628\u062A \u0647\u0627\u06CC \u0645\u062E\u062A\u0644\u0641 \u0648 \u0633\u067E\u0633 \u062F\u0631 \u0647\u0631 \u0628\u062E\u0634 \u0631\u062A\u0628\u0647 \u0628\u0646\u062F\u06CC \u0645\u06CC \u0634\u0648\u0646\u062F. \u062F\u0631 \u0646\u0647\u0627\u06CC\u062A \u0627\u0632 \u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646 \u0631\u062A\u0628\u0647 \u0634\u0631\u06A9\u062A \u0647\u0627 \u062F\u0631 \u0628\u062E\u0634 \u0647\u0627\u06CC \u0645\u062E\u062A\u0644\u0641\u060C \u0646\u0645\u0631\u0647 \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u06A9\u0644\u06CC \u0634\u0631\u06A9\u062A \u0645\u062D\u0627\u0633\u0628\u0647 \u0645\u06CC \u0634\u0648\u062F. \u0627\u06CC\u0646 \u0634\u0627\u062E\u0635 \u0635\u0631\u0641\u0627 \u0648\u0636\u0639\u06CC\u062A \u0628\u0646\u06CC\u0627\u062F\u06CC \u0634\u0631\u06A9\u062A \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06AF\u0630\u0634\u062A\u0647 \u0627\u0631\u0632\u06CC\u0627\u0628\u06CC \u0645\u06CC \u06A9\u0646\u062F \u0648 \u0646\u0628\u0627\u06CC\u062F \u0628\u0647 \u062A\u0646\u0647\u0627\u06CC\u06CC \u0645\u0628\u0646\u0627\u06CC \u062A\u0635\u0645\u06CC\u0645 \u06AF\u06CC\u0631\u06CC \u0642\u0631\u0627\u0631 \u06AF\u06CC\u0631\u062F. \u0634\u0631\u06A9\u062A \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC \u0645\u0641\u06CC\u062F \u0648 \u0634\u0631\u06A9\u062A \u067E\u0631\u062F\u0627\u0632\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0627\u0644\u06CC \u067E\u0648\u06CC\u0627\u060C \u0645\u0633\u0626\u0648\u0644\u06CC\u062A\u06CC \u062F\u0631 \u062E\u0635\u0648\u0635 \u0645\u0639\u0627\u0645\u0644\u0627\u062A\u06CC \u06A9\u0647 \u0628\u0631 \u0627\u06CC\u0646 \u0627\u0633\u0627\u0633 \u0627\u0646\u062C\u0627\u0645 \u0634\u0648\u062F\u060C \u0646\u062F\u0627\u0631\u062F. "),
    s(),
    r(2, "a", 58),
    u(3, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F"),
    s()),
    i & 2 && (l(2),
    m("href", "https://learning.emofid.com/symbol-evaluation-in-orbis", pt))
}
function Ps(i, o) {
    i & 1 && (r(0, "div", 59)(1, "div", 60),
    u(2, "EPS"),
    s(),
    r(3, "div", 61),
    u(4, "\u0633\u0648\u062F \u0648 \u0632\u06CC\u0627\u0646 \u0645\u062D\u0642\u0642 \u0634\u062F\u0647 \u062F\u0631 \u0627\u0646\u062A\u0647\u0627\u06CC \u0628\u0627\u0632\u0647 \u0632\u0645\u0627\u0646\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647 (\u0633\u0627\u0644\u0627\u0646\u0647 \u06CC\u0627 \u0641\u0635\u0644\u06CC)"),
    s()(),
    r(5, "div", 59)(6, "div", 60),
    u(7, "P/S"),
    s(),
    r(8, "div", 61),
    u(9, "\u0642\u06CC\u0645\u062A \u062A\u0642\u0633\u06CC\u0645 \u0628\u0631 \u0641\u0631\u0648\u0634"),
    s()(),
    r(10, "div", 59)(11, "div", 60),
    u(12, "P/E"),
    s(),
    r(13, "div", 61),
    u(14, "\u0642\u06CC\u0645\u062A \u062A\u0642\u0633\u06CC\u0645 \u0628\u0631 \u0633\u0648\u062F \u0645\u062D\u0642\u0642 \u0634\u062F\u0647 \u0633\u0647\u0627\u0645"),
    s()())
}
function Ms(i, o) {
    if (i & 1) {
        let n = I();
        r(0, "div", 11)(1, "svg-icon", 62),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.handleRiskMessage())
        }),
        s(),
        r(2, "div", 63),
        u(3, "\u0628\u06CC\u0627\u0646\u06CC\u0647 \u0631\u06CC\u0633\u06A9"),
        s(),
        r(4, "div", 57),
        u(5, " \u0627\u06CC\u0646 \u0634\u0627\u062E\u0635 \u0647\u0627 \u0635\u0631\u0641\u0627 \u0648\u0636\u0639\u06CC\u062A \u062A\u06A9\u0646\u06CC\u06A9\u0627\u0644 \u0648 \u0628\u0646\u06CC\u0627\u062F\u06CC \u0634\u0631\u06A9\u062A \u0631\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06AF\u0630\u0634\u062A\u0647 \u0628\u0631\u0631\u0633\u06CC \u0645\u06CC\u200C\u06A9\u0646\u062F. \u0634\u0631\u06A9\u062A \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC \u0645\u0641\u06CC\u062F \u0648 \u0634\u0631\u06A9\u062A \u067E\u0631\u062F\u0627\u0632\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0627\u0644\u06CC \u067E\u0648\u06CC\u0627\u060C \u0645\u0633\u0626\u0648\u0644\u06CC\u062A\u06CC \u062F\u0631 \u062E\u0635\u0648\u0635 \u0645\u0639\u0627\u0645\u0644\u0627\u062A\u06CC \u06A9\u0647 \u0628\u0631 \u0627\u06CC\u0646 \u0627\u0633\u0627\u0633 \u0627\u0646\u062C\u0627\u0645 \u0634\u0648\u062F\u060C \u0646\u062F\u0627\u0631\u062F. "),
        s(),
        r(6, "div", 64)(7, "button", 65),
        b("click", function() {
            g(n);
            let t = d();
            return f(t.handleRiskMessage())
        }),
        u(8, "\u0645\u062A\u0648\u062C\u0647 \u0634\u062F\u0645"),
        s()()()
    }
    if (i & 2) {
        let n = d();
        l(),
        m("iconName", n.icons.Close)
    }
}
var Eh = ( () => {
    let o = class o {
        onScroll(e) {
            this.scrollTopValue.emit(e.target.scrollTop)
        }
        constructor(e, t) {
            this.symbolAnalysisService = e,
            this.conditionalNotificationService = t,
            this.icons = R,
            this.isMobile = _(!1),
            this.symbolData = _(),
            this.scrollTopValue = B(),
            this.errorState = T(!1),
            this.loading = T(!0),
            this.symbol = T(null),
            this.symbol$ = V(this.symbol).pipe(L(Boolean), mt("symbolIsin")),
            this.SymbolAnalysisSections = T(new Map([["technical", !0], ["fundamental", !0], ["zarayeb", !0]])),
            this.showAnalyticsRiskModal = T(!1),
            this.changeSpiderChart = T("bar"),
            this.zarayebChartParams = T({
                interval: "Quarterly",
                metrics: "p2e",
                isin: this.symbol()?.symbolIsin ?? null
            }),
            this.fundamentalAnalysisResponse$ = this.symbol$.pipe(It(a => a ? Te.get(a?.marketUnit).allowToCallFundamentalAnalysis ? this.symbolAnalysisService.getFundamentalScore(a?.symbolIsin).pipe(me( () => (this.errorState.set(!0),
            se(null))), F(c => (c.item = c.item.sort(function(p, h) {
                return xi.indexOf(p.title) - xi.indexOf(h.title)
            }),
            c)), et( () => this.loading.set(!1))) : se(null) : se(new xt))),
            this.technicalAnalysisResponse$ = this.symbol$.pipe(It(a => a ? Te.get(a?.marketUnit).allowToCallTechnicalAnalysis ? this.symbolAnalysisService.getTechnicalScore(a?.symbolIsin).pipe(me( () => (this.errorState.set(!0),
            se(null))), et( () => this.loading.set(!1))) : se(null) : se(new lt))),
            this.financialStatsResponse$ = V(this.zarayebChartParams).pipe(L(a => !!a.isin && !!a.metrics && !!a.interval), E(a => this.zarayebChartLoad(a.isin, a.metrics, a.interval).pipe(me( () => (this.errorState.set(!0),
            se(null)))))),
            this.fundamentalAnalysisResponse = A(this.fundamentalAnalysisResponse$),
            this.technicalAnalysisResponse = A(this.technicalAnalysisResponse$),
            this.financialStatsResponse = A(this.financialStatsResponse$),
            this.indicatorScore = K( () => this.technicalAnalysisResponse()?.categoryScore?.find(a => a.cat === "indicator")?.score),
            this.movingAverageScore = K( () => this.technicalAnalysisResponse()?.categoryScore?.find(a => a.cat === "movingaverage")?.score),
            ue( () => {
                this.symbolData() && this.reload(this.symbolData())
            }
            )
        }
        ngOnInit() {
            this.conditionalNotificationService.showAnalyticsRiskModalSubject.value && this.showAnalyticsRiskModal.set(!0)
        }
        zarayebChartLoad(e, t, a) {
            return this.symbolAnalysisService.getFinancialStats(e, t, a).pipe(F(c => c.filter(p => p.type.toLowerCase() !== "TickerGroup".toLowerCase()).map(p => ({
                date: p.date,
                val: p.value
            }))))
        }
        changeVisibilityItem(e) {
            this.SymbolAnalysisSections.update(t => t.set(e, !t.get(e)))
        }
        reload(e) {
            this.loading.set(!0),
            this.errorState.set(!1),
            this.symbol.set(null),
            setTimeout( () => {
                this.symbol.set(e),
                this.changeZarayebChartParamsHandler("isin", e.symbolIsin)
            }
            , 0)
        }
        changeZarayebChartParamsHandler(e, t) {
            this.zarayebChartParams.update(a => (a[e] = t,
            J({}, a)))
        }
        handleRiskMessage() {
            localStorage.setItem("analyticsRiskModal", "0"),
            this.conditionalNotificationService.showAnalyticsRiskModalSubject.next(!1),
            this.showAnalyticsRiskModal.set(!1)
        }
        openLink(e) {
            window.open(e, "_blank")
        }
    }
    ;
    o.\u0275fac = function(t) {
        return new (t || o)(ee(Dt),ee(An))
    }
    ,
    o.\u0275cmp = O({
        type: o,
        selectors: [["symbol-analysis"]],
        inputs: {
            isMobile: [1, "isMobile"],
            symbolData: [1, "symbolData"]
        },
        outputs: {
            scrollTopValue: "scrollTopValue"
        },
        decls: 18,
        vars: 5,
        consts: [["technicalAnalysisInfo", ""], ["fundamentalAnalysisInfo", ""], ["barChartInfo", ""], [1, "position-relative", "p-2", "d-flex", "flex-column", "gap-2", "h-100", 3, "scroll", "ngClass"], [1, "d-flex", "flex-column", "align-items-center", "gap-2", "justify-content-center", "h-100"], [1, "text-center", "mt-auto"], ["href", "https://bv.emofid.com", "target", "_blank", 1, "d-inline-flex", "gap-1", "align-items-center", "my-2", "small"], [1, "text-secondary"], [1, "rounded", "bg-global", "text-global", "bg-opacity-10", "p-1"], ["width", "18", "height", "18", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3 0C1.34315 0 0 1.34315 0 3V11C0 12.6569 1.34315 14 3 14H11C12.6569 14 14 12.6569 14 11V3C14 1.34315 12.6569 0 11 0H3ZM10.8657 4.67923C11.1069 4.07182 11.3747 3.47905 11.7579 2.94705L9.5917 2.94707C9.5934 2.98409 9.59529 3.02111 9.59718 3.05814V3.05816L9.59719 3.05819L9.59719 3.05822C9.60133 3.1393 9.60548 3.22039 9.60754 3.30153C9.61484 3.58756 9.54994 3.86002 9.45057 4.12526C9.04896 5.19713 8.64717 6.26893 8.24537 7.34074L8.24272 7.34781L8.24123 7.35178L7.8237 8.46558L7.80037 8.52684L7.774 8.44342L7.77393 8.44321C7.75678 8.38901 7.74075 8.33837 7.72496 8.28766L7.40605 7.26369C7.07064 6.18681 6.73523 5.10993 6.40068 4.03277C6.31632 3.76114 6.25782 3.48421 6.26618 3.19694C6.26861 3.11316 6.27338 3.02932 6.29156 2.94705H3.259C3.30057 2.95092 3.34215 2.95463 3.38374 2.95834L3.38378 2.95834C3.47503 2.96648 3.56628 2.97462 3.65734 2.9845C4.00473 3.02216 4.3428 3.0994 4.66242 3.24549C5.09396 3.44272 5.44045 3.7341 5.63629 4.18259C5.78499 4.52314 5.81958 4.88165 5.78406 5.24936C5.73811 5.72511 5.52907 6.11185 5.16541 6.41398C5.0473 6.5121 4.91945 6.59582 4.77596 6.67389L4.81309 6.68976L4.81311 6.68977L4.81315 6.68979C4.838 6.70036 4.86004 6.70973 4.8818 6.71974C4.91646 6.73568 4.95087 6.75221 4.9848 6.76966C5.47743 7.023 5.84706 7.38992 6.01873 7.93462C6.12895 8.28436 6.1462 8.64305 6.10239 9.00618C6.04697 9.46554 5.8717 9.86631 5.53829 10.1884C5.1696 10.5445 4.71713 10.7266 4.22671 10.8264C3.98995 10.8746 3.75044 10.9014 3.50913 10.9163H3.67461L4.28423 10.9163C5.629 10.9163 6.97375 10.9162 8.31851 10.9175C8.36825 10.9175 8.39093 10.9043 8.41032 10.8555C8.85641 9.73178 9.30326 8.60841 9.7501 7.48504L9.75054 7.48392C10.1224 6.54908 10.4943 5.61424 10.8657 4.67923ZM2.34669 7.30899L2.34668 7.30899C2.34499 7.31036 2.34329 7.31173 2.34159 7.31281V9.74112C2.34743 9.74247 2.35325 9.74398 2.35907 9.74549L2.35908 9.7455C2.37154 9.74874 2.384 9.75198 2.39665 9.75357C2.56575 9.77479 2.73468 9.76811 2.90415 9.75469C3.13265 9.73658 3.35574 9.69444 3.56944 9.61012C4.19813 9.36204 4.43223 8.84398 4.31281 8.22959C4.24522 7.88184 4.01973 7.65357 3.71106 7.50462C3.28055 7.29687 2.82038 7.29028 2.35768 7.30301C2.35397 7.30311 2.35033 7.30605 2.34669 7.30899ZM2.34159 4.10951C2.34396 4.10828 2.34631 4.10671 2.34867 4.10514C2.35369 4.10179 2.35871 4.09844 2.36382 4.09832C2.70109 4.09025 3.03794 4.09131 3.35941 4.2158C3.64944 4.32811 3.88428 4.50871 3.96927 4.82458C4.11264 5.35737 3.93446 5.87094 3.36259 6.11215C3.04305 6.24693 2.70726 6.27117 2.36688 6.26614C2.36114 6.26606 2.35539 6.26621 2.34963 6.26637L2.34959 6.26637L2.34159 6.26656V4.10951Z", "fill", "currentColor"], [1, "alert", "alert-warning", "m-2", "p-4", "position-absolute", "rounded", "shadow-lg", "z-10", 2, "top", "20%"], ["width", "36", "height", "36", 1, "text-secondary", "mb-3", 3, "iconName"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", "d-flex", "align-items-center", "gap-1", 3, "click"], ["width", "20", "height", "20", 3, "iconName"], [1, "bg-principal", "rounded", "overflow-hidden", "flex-shrink-0"], [1, "bg-principal", "bg-principal-4x-dark", "shadow-sm", "d-flex", "align-items-center", "cup", "ps-2"], [1, "d-flex", "gap-1", "p-2"], [1, "fw-bold"], ["width", "18", "height", "18", "container", "body", 1, "text-primary", 3, "click", "tap", "iconName", "triggers", "ngbPopover"], [1, "flex-grow-1", "text-end", "p-2", 3, "click"], ["width", "24", "height", "24", 1, "text-secondary", "ms-auto", "flex-grow-1", "text-end", "d-inline-block", 3, "iconName", "ngClass"], [1, "p-3"], [1, "row", "align-items-center"], [1, "col-7"], [1, "col-5"], [1, "d-inline-flex", "gauge-chart", "w-100", 3, "chartId", "showNeedle", "value", "colorValueArray", "maxValue", "minValue"], [1, "p-3", "border-top"], [1, "d-table", "w-100", 2, "border-spacing", "0.5rem"], [1, "d-table-row"], [1, "d-table-cell", "w-100"], ["dir", "ltr", 1, "progress", "w-100", "bg-principal-4x-dark", 2, "height", "14px"], [1, "progress-bar", "bg-global-600", "rounded-5", "align-items-end", "px-2"], [1, "d-table-cell", "text-nowrap"], [1, "shadow-sm", "d-flex", "align-items-center", "cup", "bg-principal-4x-dark", "ps-2"], ["width", "18", "height", "18", "container", "body", 1, "text-primary", 3, "tap", "click", "iconName", "triggers", "ngbPopover"], [1, "gauge-chart", "w-100", 3, "chartId", "showNeedle", "value", "colorValueArray", "maxValue", "minValue"], [1, "tabs", "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "justify-content-end", "tabs-holder", "align-items-center"], ["type", "button", "title", "\u0631\u0627\u062F\u0627\u0631\u06CC", 1, "btn", "btn-sm", "tab", "symbol-analytics-change-chart-to-radar", 3, "click", "ngClass"], ["width", "20", "height", "20", 1, "symbol-analytics-change-chart-to-radar", 3, "iconName"], ["type", "button", "title", "\u0645\u06CC\u0644\u0647 \u0627\u06CC", 1, "btn", "btn-sm", "tab", "symbol-analytics-change-chart-to-bar", 3, "click", "ngClass"], ["width", "20", "height", "20", 1, "symbol-analytics-change-chart-to-bar", 3, "iconName"], [3, "chartId", "chartData"], [1, "d-table", "mt-2", "w-100", 2, "border-spacing", "0.5rem"], [1, "text-secondary", "small"], ["width", "18", "height", "18", 1, "line-height-18px", "me-1", 3, "iconName"], ["dir", "ltr", 1, "progress", "align-items-center", "w-100", "bg-principal-4x-dark", 2, "height", "14px"], [1, "progress-bar", "h-100", "bg-global-600", "rounded-5", "align-items-end", "px-2"], [1, "position-relative", 2, "top", "1px"], [1, "text-body", "me-1"], ["width", "18", "height", "18", "container", "body", 1, "text-primary", 3, "tap", "iconName", "triggers", "ngbPopover"], [1, "tabs", "d-flex", "justify-content-between"], [1, "justify-content-end", "tabs-holder", "align-items-center"], ["type", "button", 1, "btn", "btn-sm", "tab", "active", 3, "click", "ngClass"], ["type", "button", 1, "btn", "btn-sm", "tab", 3, "click", "ngClass"], [3, "height", "barColor", "barThickness", "chartId", "showAllDates", "barWidth", "items"], [1, "mb-2", "text-justify"], ["target", "_blank", 3, "href"], [1, "d-flex", "mb-2", "gap-2"], [1, "text-justify", "fw-bold"], [1, "text-justify"], ["width", "24", "height", "24", 1, "p-3", "position-absolute", "cup", 2, "left", "0", "top", "0", 3, "click", "iconName"], [1, "fw-bold", "mb-2"], [1, "text-center"], ["type", "button", 1, "btn", "btn-warning", 3, "click"]],
        template: function(t, a) {
            if (t & 1) {
                let c = I();
                r(0, "div", 3),
                b("scroll", function(h) {
                    return g(c),
                    f(a.onScroll(h))
                }),
                S(1, bs, 6, 2, "div", 4)(2, Is, 3, 3),
                r(3, "div", 5)(4, "a", 6)(5, "span", 7),
                u(6, "\u0628\u0627 \u0647\u0645\u06A9\u0627\u0631\u06CC "),
                s(),
                r(7, "div", 8),
                tt(),
                r(8, "svg", 9),
                C(9, "path", 10),
                s(),
                u(10, " \u0628\u0648\u0631\u0633 \u0648\u06CC\u0648 "),
                s()()(),
                S(11, ws, 4, 1, "ng-template", null, 0, be)(13, As, 4, 1, "ng-template", null, 1, be)(15, Ps, 15, 0, "ng-template", null, 2, be)(17, Ms, 9, 1, "div", 11),
                s()
            }
            t & 2 && (m("ngClass", D(3, Cs, a.loading())),
            l(),
            y(a.errorState() ? 1 : 2),
            l(16),
            y(a.showAnalyticsRiskModal() ? 17 : -1))
        },
        dependencies: [te, Y, jt, tn, Zt, Ye, j],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = o;
    return i
}
)();
export {jn as a, h0 as b, U0 as c, Wn as d, uc as e, na as f, oa as g, la as h, sa as i, ua as j, Z as k, ma as l, ni as m, Da as n, ai as o, fa as p, va as q, Yp as r, sh as s, gh as t, Eh as u};
//# sourceMappingURL=chunk-IPTAAT5T.js.map
