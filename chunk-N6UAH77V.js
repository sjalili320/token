import {h as wt, j as Tt} from "./chunk-O3BOZ3M4.js";
import {Bc as Te, Dc as Re, Hc as Ue, Ob as et, P as st, Pa as A, Q as se, Qa as ye, Ra as be, Sa as Le, Ta as Pe, Zb as _t, ca as Ze, dc as tt, k as ft, md as Me, nc as Oe, tb as O, wd as kt, xd as it, ya as Je} from "./chunk-OFJ5SZPL.js";
import {Ac as s, Bc as d, Cd as ke, Ea as Ge, Fb as l, Fc as D, Ga as Ee, Gb as y, H as J, Hc as T, Ia as U, Ic as p, Lc as Ne, Mb as E, Nb as ze, P as He, Pa as oe, Pd as Q, Q as Ce, T as Be, Tc as We, Ua as je, Ub as x, Uc as Xe, Vc as re, Wc as u, Xc as k, Xd as ge, Yc as w, Z as mt, Zc as vt, _b as f, _d as Ae, a as K, b as ae, db as I, ea as xe, eb as V, fb as Ye, fd as j, gd as De, hb as Se, hd as ht, ig as we, jg as bt, ld as _, lg as yt, mc as me, md as N, mg as xt, na as qe, nc as m, nd as G, ne as W, oc as ie, p as ct, pd as _e, pe as Ct, pg as St, q as Y, qb as b, qc as pt, qe as P, rc as ne, re as X, tc as ot, te as gt, uc as h, vc as $, xc as F, yc as B, z as dt, zc as a} from "./chunk-K3475DQT.js";
var lt = function(e) {
    return e.askqueue = "askqueue",
    e.bidqueue = "bidqueue",
    e
}(lt || {})
  , nt = function(e) {
    return e.positive = "text-success",
    e.negative = "text-danger",
    e
}(nt || {})
  , le = function(e) {
    return e.individualbuypower = "individualbuypower",
    e.netindividual = "netindividual",
    e.percapita = "percapita",
    e
}(le || {});
var pe = function(e) {
    return e.symbolSigns = "symbolSigns",
    e.dealValues = "dealValues",
    e.realBuyPower = "realBuyPower",
    e
}(pe || {});
var ve = function(e) {
    return e.OverallIndex = "OverallIndex",
    e.TotalEqualWeighted = "TotalEqualWeighted",
    e.OTCOverallIndex = "OTCOverallIndex",
    e
}(ve || {})
  , ti = function(e) {
    return e.OverallIndex = "IRX6XTPI0006",
    e.TotalEqualWeighted = "IRX6XTPI0026",
    e.OTCOverallIndex = "IRXZXOCI0006",
    e
}(ti || {})
  , ut = new Map([["IRXZXOCI0006", {
    apiKey: ve.OTCOverallIndex,
    title: "\u0634\u0627\u062E\u0635 \u0641\u0631\u0627\u0628\u0648\u0631\u0633 IFX"
}], ["IRX6XTPI0006", {
    apiKey: ve.OverallIndex,
    title: "\u0634\u0627\u062E\u0635 \u0628\u0648\u0631\u0633 TEDPIX"
}], ["IRX6XTPI0026", {
    apiKey: ve.TotalEqualWeighted,
    title: "\u0634\u0627\u062E\u0635 \u0647\u0645\u200C\u0648\u0632\u0646"
}]]);
function ii(e, r) {
    if (e & 1 && (a(0, "span", 5),
    u(1),
    _(2, "number"),
    _(3, "positiveNumber"),
    _(4, "number"),
    _(5, "positiveNumber"),
    s()),
    e & 2) {
        let i = p();
        ne(i.data().changeValue > 0 ? i.stateClass.positive : i.stateClass.negative),
        m("id", "market-view-index-chart-kind-" + i.data().isin + "-change-value"),
        me("data-cy", "market-view-index-chart-kind-" + i.data().isin + "-change-value"),
        l(),
        vt(" ", N(3, 9, G(2, 6, i.data().changeValue, "1.0-0")), " (", N(5, 14, G(4, 11, i.data().changePercent, "1.0-2")), "\u066A) ")
    }
}
var Mt = ( () => {
    let r = class r {
        constructor() {
            this.isMobile = b(!1),
            this.data = b(null),
            this.stateClass = {
                positive: nt.positive,
                negative: nt.negative
            }
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-bourse-analytics-data-category-item"]],
        inputs: {
            isMobile: [1, "isMobile"],
            data: [1, "data"]
        },
        decls: 9,
        vars: 14,
        consts: [[1, "chart-category-item-selectable", "d-flex", "flex-column", "align-items-center", "rounded", "py-2", "px-1", "h-100", "cup", 3, "id"], [1, "text-muted", "mb-1", 3, "id"], ["dir", "ltr", 1, "d-flex", "flex-column", "flex-md-row", "align-items-center", 3, "id"], [1, "text-body", "ms-1", 3, "id"], ["dir", "ltr", 3, "id", "class"], ["dir", "ltr", 3, "id"]],
        template: function(n, o) {
            n & 1 && (a(0, "div", 0)(1, "span", 1),
            u(2),
            s(),
            a(3, "div", 2)(4, "span", 3),
            u(5),
            _(6, "number"),
            _(7, "positiveNumber"),
            s(),
            f(8, ii, 6, 16, "span", 4),
            s()()),
            n & 2 && (m("id", "market-view-index-chart-kind-" + o.data().isin + "-div-container"),
            l(),
            m("id", "market-view-index-chart-kind-" + o.data().isin + "-title"),
            me("data-cy", "market-view-index-chart-kind-" + o.data().isin + "-title"),
            l(),
            k(o.data().title),
            l(),
            m("id", "market-view-index-chart-kind-" + o.data().isin + "-div-info"),
            l(),
            m("id", "market-view-index-chart-kind-" + o.data().isin + "-close-price"),
            me("data-cy", "market-view-index-chart-kind-" + o.data().isin + "-close-price"),
            l(),
            k(N(7, 12, G(6, 9, o.data().close, "1.0-0"))),
            l(3),
            h(o.data().changeValue !== 0 ? 8 : -1))
        },
        dependencies: [Ae, St],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var Ie = ( () => {
    let r = class r extends et {
        constructor() {
            super(...arguments),
            this.dataStore = []
        }
        getMarketView(t, n=null, o=null, c) {
            try {
                let C = v => {
                    let g = this.httpService.get(v).pipe(U(M => {
                        let H = this.dataStore.find(te => te.url === v);
                        this.calcLastUpdateTime(H),
                        H.observable.next(M),
                        n?.()
                    }
                    ), mt(M => (o?.(),
                    this.httpService.handleError(M))), qe( () => {
                        g.unsubscribe()
                    }
                    )).subscribe()
                }
                ;
                if (!this.dataStore.find(v => v.url === t))
                    this.dataStore.push({
                        url: t,
                        observable: new Y(void 0),
                        date: null
                    }),
                    C(t);
                else {
                    let v = this.dataStore.find(g => g.url === t);
                    this.readyToCallService(v?.date, c) ? C(t) : n?.()
                }
                return this.dataStore.find(v => v.url === t).observable
            } catch {
                o?.()
            }
        }
        calcLastUpdateTime(t) {
            let n = new Date
              , o = n.getDate();
            n.setDate(o),
            t.date = n
        }
        readyToCallService(t, n=2e4) {
            return t ? new Date().getTime() - (t?.getTime() ?? 0) > n : !0
        }
    }
    ;
    r.\u0275fac = ( () => {
        let t;
        return function(o) {
            return (t || (t = Se(r)))(o || r)
        }
    }
    )(),
    r.\u0275prov = oe({
        token: r,
        factory: r.\u0275fac,
        providedIn: "root"
    });
    let e = r;
    return e
}
)();
var ue = ( () => {
    let r = class r extends Ie {
        constructor(t) {
            super(),
            this.marketData = t,
            this.isLoading = new Y(!1),
            this.isLoading$ = this.isLoading.asObservable(),
            this.urlKeys = {
                BOURSE_VIEW: `${this.mtsPath + this.apiUrls.easy}market-live`,
                MARKET_TRADING: `${this.mtsPath + this.apiUrls.easy}market-live/market-trading`
            },
            this.mapLsRawDataToMarketIndicesQuotesLive = n => {
                let o = this.dataStore?.find(c => c.url === this.urlKeys.BOURSE_VIEW)?.observable?.value?.marketIndicesQuotesLive ?? [];
                o?.forEach(c => {
                    let C = n?.find(v => v.symbolIsin === c.isin);
                    C && (c.close = C.lastIndexValue,
                    c.changePercent = C.percentVariation,
                    c.changeValue = C.indexChanges)
                }
                ),
                this.updateMarketIndicesQuotesLive(o)
            }
            ,
            this.updateMarketIndicesQuotesLive = n => {
                this.dataStore?.find(o => o.url === this.urlKeys.BOURSE_VIEW).observable?.next(ae(K({}, this.dataStore?.find(o => o.url === this.urlKeys.BOURSE_VIEW)?.observable?.value), {
                    marketIndicesQuotesLive: [...n]
                }))
            }
        }
        subscribeToIndex() {
            this.marketDataSubscription = this.marketData?.indexes$?.subscribe(t => {
                if (t?.length === 0)
                    return this.mapLsRawDataToMarketIndicesQuotesLive(t)
            }
            )
        }
        unSubscribeToIndex() {
            this.marketDataSubscription?.unsubscribe()
        }
        getBourseData() {
            return this.getMarketView(this.urlKeys.BOURSE_VIEW, () => {
                this.isLoading.next(!1)
            }
            , () => {
                this.isLoading.next(!1),
                this.dataStore.find(t => t.url === this.urlKeys.BOURSE_VIEW)?.observable?.next({
                    noData: !0
                })
            }
            , 1e4)
        }
        getAnalyticsData(t, n) {
            let o = `${this.urlKeys.MARKET_TRADING}/${n}/${t}`;
            return this.getMarketView(o, null, null, 1e4)
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(je(tt))
    }
    ,
    r.\u0275prov = oe({
        token: r,
        factory: r.\u0275fac,
        providedIn: "root"
    });
    let e = r;
    return e
}
)();
var ce = ( () => {
    let r = class r extends Ie {
        constructor() {
            super(...arguments),
            this.urlKeys = {
                SYMBOL_SIGNS: `${this.mtsPath + this.apiUrls.easy}market-live/industries/positive-negative-symbols`,
                MOST_BUYIND: `${this.mtsPath + this.apiUrls.easy}market-live/industries/most-buyind`,
                DEAL_VALUES: `${this.mtsPath + this.apiUrls.easy}market-live/industries/total-trade-value`
            },
            this.selectedTab = new Y(pe.symbolSigns),
            this.isLoading = new Y(!1),
            this.isLoading$ = this.isLoading.asObservable()
        }
        getIndustrySymbolSignsData() {
            return this.isLoading.next(!0),
            this.getMarketView(this.urlKeys.SYMBOL_SIGNS, () => {
                this.isLoading.next(!1)
            }
            , () => {
                this.isLoading.next(!1),
                this.dataStore.find(t => t.url === this.urlKeys.SYMBOL_SIGNS).observable.next([])
            }
            , 1e4)
        }
        getIndustryDealValuesData() {
            return this.isLoading.next(!0),
            this.getMarketView(this.urlKeys.DEAL_VALUES, () => {
                this.isLoading.next(!1)
            }
            , () => {
                this.isLoading.next(!1),
                this.dataStore.find(t => t.url === this.urlKeys.DEAL_VALUES).observable.next([])
            }
            , 1e4)
        }
        getIndustryRealBuyPowerData() {
            return this.isLoading.next(!0),
            this.getMarketView(this.urlKeys.MOST_BUYIND, () => {
                this.isLoading.next(!1)
            }
            , () => {
                this.isLoading.next(!1),
                this.dataStore.find(t => t.url === this.urlKeys.MOST_BUYIND).observable.next([])
            }
            , 1e4)
        }
    }
    ;
    r.\u0275fac = ( () => {
        let t;
        return function(o) {
            return (t || (t = Se(r)))(o || r)
        }
    }
    )(),
    r.\u0275prov = oe({
        token: r,
        factory: r.\u0275fac,
        providedIn: "root"
    });
    let e = r;
    return e
}
)();
var de = ( () => {
    let r = class r extends Ie {
        constructor() {
            super(...arguments),
            this.urlKeys = {
                UNIVERSAL_ONS: `${this.mtsPath + this.apiUrls.easy}market-live/market-commodity-live/Ons`,
                UNIVERSAL_BASE_METAL: `${this.mtsPath + this.apiUrls.easy}market-live/market-commodity-live/BaseMetals`,
                UNIVERSAL_OIL_AND_ENERGY: `${this.mtsPath + this.apiUrls.easy}market-live/market-commodity-live/OilAndEnergy`,
                UNIVERSAL_COMMODITY_HISTORY: `${this.mtsPath + this.apiUrls.easy}market-live/market-commodity-history/`
            },
            this.isLoading = new Y(!1),
            this.isLoading$ = this.isLoading.asObservable(),
            this.selectedTab = new Y(void 0),
            this.selectedType = new Y(void 0),
            this.getMarketViewByResource = t => {
                this.isLoading.next(!0),
                this.selectedType.next(void 0),
                this.getMarketView(t, () => {
                    this.isLoading.next(!1)
                }
                , () => {
                    this.isLoading.next(!1)
                }
                , 2e3)
            }
            ,
            this.getCommodityHistory = (t, n) => {
                this.isLoading.next(!0);
                let o = `${this.urlKeys.UNIVERSAL_COMMODITY_HISTORY}${t}/${n}`;
                return this.getMarketView(o, () => {
                    this.isLoading.next(!1)
                }
                , () => {
                    this.isLoading.next(!1)
                }
                , 2e3)
            }
        }
    }
    ;
    r.\u0275fac = ( () => {
        let t;
        return function(o) {
            return (t || (t = Se(r)))(o || r)
        }
    }
    )(),
    r.\u0275prov = oe({
        token: r,
        factory: r.\u0275fac,
        providedIn: "root"
    });
    let e = r;
    return e
}
)();
var Ve = ( () => {
    let r = class r extends Ie {
        constructor(t, n) {
            super(),
            this.marketDataService = t,
            this.lsService = n,
            this.selectedTab = new Y(void 0),
            this.selectedTab$ = this.selectedTab.asObservable(),
            this.marketTopRank = this.createMarketStoreFunction(),
            this.isLoading = new Y(!1),
            this.isLoading$ = this.isLoading.asObservable(),
            this.urlKeys = {
                TOP_RANK_BUYING_QUEUE: `${this.mtsPath + this.apiUrls.easy}market-live/buying-queue`,
                TOP_RANK_BUYING_QUEUE_THRESHOLD: `${this.mtsPath + this.apiUrls.easy}market-live/buying-queue-threshold`,
                TOP_RANK_SELLING_QUEUE: `${this.mtsPath + this.apiUrls.easy}market-live/selling-queue`,
                TOP_RANK_SELLING_QUEUE_THRESHOLD: `${this.mtsPath + this.apiUrls.easy}market-live/selling-queue-threshold`,
                TOP_RANK_MOST_VIEW: `${this.mtsPath + this.apiUrls.easy}market-live/most-view`,
                TOP_RANK_MOST_DEMAND: `${this.mtsPath + this.apiUrls.easy}market-live/most-demand`,
                TOP_RANK_MOST_SUPPLY: `${this.mtsPath + this.apiUrls.easy}market-live/most-supply`,
                TOP_RANK_MOST_VALUE: `${this.mtsPath + this.apiUrls.easy}market-live/most-value`,
                TOP_RANK_MOST_VOLUME: `${this.mtsPath + this.apiUrls.easy}market-live/most-volume`,
                TOP_RANK_MOST_NATURAL_PERSON_TRADE: `${this.mtsPath + this.apiUrls.easy}market-live/most-natural-person-trade`
            },
            this.buyQueueDetailTabs = [{
                id: "buying-queue",
                key: this.urlKeys.TOP_RANK_BUYING_QUEUE,
                title: "\u0635\u0641 \u062E\u0631\u06CC\u062F"
            }, {
                id: "buying-queue-threshold",
                key: this.urlKeys.TOP_RANK_BUYING_QUEUE_THRESHOLD,
                title: "\u0622\u0633\u062A\u0627\u0646\u0647 \u0635\u0641 \u062E\u0631\u06CC\u062F"
            }],
            this.sellQueueDetailTabs = [{
                id: "selling-queue",
                key: this.urlKeys.TOP_RANK_SELLING_QUEUE,
                title: "\u0635\u0641 \u0641\u0631\u0648\u0634"
            }, {
                id: "selling-queue-threshold",
                key: this.urlKeys.TOP_RANK_SELLING_QUEUE_THRESHOLD,
                title: "\u0622\u0633\u062A\u0627\u0646\u0647 \u0635\u0641 \u0641\u0631\u0648\u0634"
            }],
            this.tabs = [{
                key: this.urlKeys.TOP_RANK_BUYING_QUEUE,
                title: "\u0635\u0641 \u062E\u0631\u06CC\u062F",
                details: this.buyQueueDetailTabs,
                id: "buying-queue"
            }, {
                key: this.urlKeys.TOP_RANK_SELLING_QUEUE,
                title: "\u0635\u0641 \u0641\u0631\u0648\u0634",
                details: this.sellQueueDetailTabs,
                id: "selling-queue"
            }, {
                key: this.urlKeys.TOP_RANK_MOST_VIEW,
                title: "\u0628\u0627\u0632\u062F\u06CC\u062F",
                id: "most-view"
            }, {
                key: this.urlKeys.TOP_RANK_MOST_SUPPLY,
                title: "\u0639\u0631\u0636\u0647",
                id: "most-supply"
            }, {
                key: this.urlKeys.TOP_RANK_MOST_DEMAND,
                title: "\u062A\u0642\u0627\u0636\u0627",
                id: "most-demand"
            }, {
                key: this.urlKeys.TOP_RANK_MOST_VALUE,
                title: "\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0647",
                id: "most-value"
            }, {
                key: this.urlKeys.TOP_RANK_MOST_VOLUME,
                title: " \u062D\u062C\u0645 \u0645\u0639\u0627\u0645\u0644\u0647",
                id: "most-volume"
            }, {
                key: this.urlKeys.TOP_RANK_MOST_NATURAL_PERSON_TRADE,
                title: "\u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC",
                id: "most-natural-person-trade"
            }],
            this.getMarketViewByResource = o => {
                this.isLoading.next(!0),
                this.getMarketView(o, () => {
                    this.isLoading.next(!1),
                    this.marketTopRank.set(o)
                }
                , () => {
                    this.isLoading.next(!1)
                }
                , 2e4)
            }
        }
        unsubscribeLs() {
            this.marketTopRank.unsubscribeFromLs()
        }
        createMarketStoreFunction() {
            let t, n, o, c = R => {
                t = R,
                n = this.dataStore.find(Z => Z.url === t),
                o = n.observable.value,
                n.observable.next(n.observable.value.map(Z => ({
                    symbolIsin: Z.symbolIsin,
                    symbolName: Z.symbolName,
                    stateCode: Z.stateCode
                }))),
                g(n.observable.value)
            }
            , C = [], v = () => {
                n.observable.next(o)
            }
            , g = R => {
                let Z = R.map(he => he.symbolIsin);
                te(),
                this.marketDataService.callMarketDataIfLsNotConnected( () => v()),
                M(Z),
                C = [...Z]
            }
            , M = R => {
                for (let Z of R)
                    this.lsService.subscribeToLs(st.MarketViewTopRank, Z).pipe(U( ({inst: he, val: ee}) => {
                        this.marketDataService.lsDataIsReceived(v.name);
                        let at = {
                            symbolIsin: he,
                            lastTradedPrice: +ee[se.MarketViewTopRankSchema.lastTradedPrice ?? 0],
                            totalNumberOfTrades: +ee[se.MarketViewTopRankSchema.totalNumberOfTrades ?? 0],
                            stateCode: ee[se.MarketViewTopRankSchema.stateCode],
                            stateColor: Ze(ee[se.MarketViewTopRankSchema.stateCode]),
                            totalNumberOfSharesTraded: ee[se.MarketViewTopRankSchema.totalNumberOfSharesTraded ?? 0],
                            totalTradeValue: +ee[se.MarketViewTopRankSchema.totalTradeValue ?? 0],
                            tradePriceVar: ee[se.MarketViewTopRankSchema.tradedPriceVar],
                            closePrice: +ee[se.MarketViewTopRankSchema.closePrice ?? 0],
                            yesterdayPrice: +ee[se.MarketViewTopRankSchema.feeOfPreviousDaysClosingPrice ?? 0],
                            topBuyVolume: +ee[se.MarketViewTopRankSchema.bestBuyLimitVolume ?? 0],
                            topSellVolume: +ee[se.MarketViewTopRankSchema.bestSellLimitVolume ?? 0]
                        };
                        H(at)
                    }
                    )).subscribe()
            }
            , H = R => {
                let Z = n.observable.value
                  , he = Z.findIndex(ee => ee.symbolIsin === R.symbolIsin);
                he > -1 && n.observable.next([...Z.slice(0, he), K(K({}, Z[he]), R), ...Z.slice(he + 1)])
            }
            , te = () => {
                for (let R of C)
                    this.lsService.unsubscribeSchema(st.MarketViewTopRank, R)
            }
            ;
            return {
                set: c,
                unsubscribeFromLs: te
            }
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(je(tt),je(_t))
    }
    ,
    r.\u0275prov = oe({
        token: r,
        factory: r.\u0275fac,
        providedIn: "root"
    });
    let e = r;
    return e
}
)();
var It = ( () => {
    let r = class r extends et {
        constructor() {
            super(...arguments),
            this.IndexHistoryUrl = `${this.mtsPath + this.apiUrls.easy}market-live/index`,
            this.mvDataCache = {},
            this.dataCacheClearIntervalSubs = {},
            this.GetWeeklyIndexTrend = (t=ve.OTCOverallIndex) => this.getMarketViewIndexHistory(O.weekly, t),
            this.GetMonthlyIndexTrend = (t=ve.OTCOverallIndex) => this.getMarketViewIndexHistory(O.monthly, t),
            this.Get3MonthsIndexTrend = (t=ve.OTCOverallIndex) => this.getMarketViewIndexHistory(O.tripleMonth, t),
            this.GetYearlyIndexTrend = (t=ve.OTCOverallIndex) => this.getMarketViewIndexHistory(O.yearly, t),
            this.Get3YearlyIndexTrend = (t=ve.OTCOverallIndex) => this.getMarketViewIndexHistory(O.tripleYear, t),
            this.getDailyIndex = (t=ve.OTCOverallIndex) => this.getMarketViewIndexHistory(O.daily, t)
        }
        dataIsCached(t, n) {
            this.mvDataCache[t] = n,
            this.dataCacheClearIntervalSubs[t] = Ce(3e4).pipe(xe(1), U( () => {
                this.mvDataCache[t] = null
            }
            )).subscribe()
        }
        getMarketViewIndexHistory(t, n) {
            let o = `${this.IndexHistoryUrl}/${n}/${t}`;
            return this.mvDataCache[t] ? dt(this.mvDataCache[t]) : this.httpService.get(o).pipe(U(c => this.dataIsCached(t + n, c)))
        }
    }
    ;
    r.\u0275fac = ( () => {
        let t;
        return function(o) {
            return (t || (t = Se(r)))(o || r)
        }
    }
    )(),
    r.\u0275prov = oe({
        token: r,
        factory: r.\u0275fac,
        providedIn: "root"
    });
    let e = r;
    return e
}
)();
var ni = e => ({
    active: e
})
  , ri = e => ({
    "content-loading": e
});
function ai(e, r) {
    if (e & 1 && (a(0, "span"),
    u(1),
    s()),
    e & 2) {
        let i, t = p();
        l(),
        k((i = t.type()) == null ? null : i.title)
    }
}
function oi(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "button", 5),
        T("click", function() {
            let n = I(i).$implicit
              , o = p();
            return V(o.changeSelectedTrendHandler(n.key))
        }),
        a(1, "small"),
        u(2),
        s()()
    }
    if (e & 2) {
        let i = r.$implicit
          , t = p();
        m("ngClass", j(2, ni, t.selectedTrend === i.key)),
        l(2),
        k(i.name)
    }
}
function si(e, r) {
    if (e & 1 && (a(0, "div", 3),
    d(1, "svg-icon", 6),
    u(2, " \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0646\u0645\u0648\u062F\u0627\u0631 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F "),
    s()),
    e & 2) {
        let i = p();
        m("ngClass", j(2, ri, i.loading())),
        l(),
        m("iconName", i.icons.InfoBox)
    }
}
var Vt = ( () => {
    let r = class r {
        constructor(t, n) {
            this.marketViewService = t,
            this.timeService = n,
            this.d3LineChart = ze(Me),
            this.isMobile = b(!0),
            this.showTitle = b(!1),
            this.zoomAble = b(!0),
            this.type = b(null),
            this.indexInfo = E([]),
            this.loading = E(!0),
            this.icons = W,
            this.types = ["line", "stackedline", "fullstackedline"],
            this.subs = [],
            this.outChartData = [],
            this.getDailyIndex = (o=this.type()?.apiKey, c=!1) => {
                let C = this.marketViewService.getDailyIndex(o).pipe(U(v => {
                    v && v.items && v.items.length && (new Date(v.items[0].dEven).getDate() === this.serverDate.getDate() ? this.dailyIndex = {
                        items: v.items.sort( (g, M) => +new Date(g.dEven) - +new Date(M.dEven)),
                        createDateTime: v.createDateTime,
                        id: v.id
                    } : this.dailyIndex = {
                        items: [],
                        createDateTime: v.createDateTime,
                        id: v.id
                    }),
                    this.setDailyIndexValues(this.dailyIndex?.items, c),
                    this.loading.set(!1)
                }
                )).subscribe();
                this.subs.push(C)
            }
            ,
            this.trendTypes = [{
                key: O.daily,
                name: "\u0631\u0648\u0632",
                getMethod: this.getDailyIndex
            }, {
                key: O.weekly,
                name: "\u0647\u0641\u062A\u0647",
                getMethod: this.marketViewService.GetWeeklyIndexTrend
            }, {
                key: O.monthly,
                name: "\u0645\u0627\u0647",
                getMethod: this.marketViewService.GetMonthlyIndexTrend
            }, {
                key: O.tripleMonth,
                name: "3\u0645\u0627\u0647",
                getMethod: this.marketViewService.Get3MonthsIndexTrend
            }, {
                key: O.yearly,
                name: "\u0633\u0627\u0644",
                getMethod: this.marketViewService.GetYearlyIndexTrend
            }, {
                key: O.tripleYear,
                name: "3\u0633\u0627\u0644",
                getMethod: this.marketViewService.Get3YearlyIndexTrend
            }],
            this.selectedTrend = this.trendTypes[0].key,
            ke( () => {
                this.type()?.apiKey && this.selectTrend(this.selectedTrend, this.type()?.apiKey)
            }
            )
        }
        ngOnInit() {
            let t = this.timeService.serverDateObs$.subscribe(n => {
                this.serverDate = n
            }
            );
            this.subs.push(t)
        }
        ngOnDestroy() {
            this.subs.forEach(t => t.unsubscribe())
        }
        setDailyIndexValues(t, n=!1) {
            if (this.indexInfo.set([]),
            (!t || !t.length) && !n) {
                this.selectedTrend = O.weekly,
                this.selectTrend(this.selectedTrend, this.type()?.apiKey);
                return
            }
            t.forEach(o => {
                let c = new Date(o.dEven).toLocaleTimeString("en-GB").split(":")
                  , C = `${c[0]}:${c[1]}`;
                C !== "00:00" && this.indexInfo.update(v => [...v, {
                    indexValue: Math.floor(o.value),
                    time: C
                }])
            }
            ),
            this.indexInfo.update(o => [...o].sort( (c, C) => +c.time.replace(":", "") - +C.time.replace(":", ""))),
            this.selectedTrend === O.daily && this.setChartData()
        }
        selectTrend(t, n, o=!1) {
            this.loading.set(!0),
            this.selectedTrend = t,
            this.indexInfo.set([]);
            let c = this.trendTypes.find(C => C.key === t).getMethod(n, o);
            t !== O.daily && c.pipe(xe(1), U(C => {
                this.indexInfo.set([]),
                C.items.forEach(v => {
                    this.indexInfo.update(g => [...g, {
                        time: Je.getFormattedJDate(new Date(v.dEven)),
                        indexValue: v.value
                    }]),
                    this.loading.set(!1)
                }
                ),
                this.setChartData()
            }
            )).subscribe()
        }
        setChartData() {
            this.outChartData = [],
            this.indexInfo().forEach(t => {
                this.outChartData.push({
                    d: t.time,
                    v: t.indexValue
                })
            }
            ),
            this.d3LineChart() && (this.d3LineChart().chartData = this.outChartData ?? [],
            this.d3LineChart().drawChart())
        }
        changeSelectedTrendHandler(t, n=this.type()?.apiKey) {
            this.selectTrend(t, n, !0)
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(It),y(Oe))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["index-chart"]],
        viewQuery: function(n, o) {
            n & 1 && We(o.d3LineChart, Me, 5),
            n & 2 && Xe()
        },
        inputs: {
            isMobile: [1, "isMobile"],
            showTitle: [1, "showTitle"],
            zoomAble: [1, "zoomAble"],
            type: [1, "type"]
        },
        decls: 8,
        vars: 5,
        consts: [[1, "d-flex", "justify-content-between", "align-items-center", "tabs", "gap-2"], [1, "d-flex", "tabs-holder", "bg-transparent", 2, "min-height", "0"], [1, "btn", "btn-sm", "tab", 2, "box-shadow", "none", 3, "ngClass"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-muted", 2, "height", "200px", 3, "ngClass"], ["chartId", "MarketViewLineChart", 3, "zoomable", "isMobile", "selectedTrend"], [1, "btn", "btn-sm", "tab", 2, "box-shadow", "none", 3, "click", "ngClass"], ["width", "36", "height", "36", 1, "mb-1", 3, "iconName"]],
        template: function(n, o) {
            if (n & 1 && (a(0, "div", 0)(1, "div"),
            f(2, ai, 2, 1, "span"),
            s(),
            a(3, "div", 1),
            F(4, oi, 3, 4, "button", 2, $),
            s()(),
            f(6, si, 3, 4, "div", 3),
            d(7, "lib-d3-line-chart", 4)),
            n & 2) {
                let c;
                l(2),
                h(o.showTitle() && o.type() !== null ? 2 : -1),
                l(2),
                B(o.trendTypes),
                l(2),
                h(!o.loading() && !((c = o.indexInfo()) != null && c.length) ? 6 : -1),
                l(),
                m("zoomable", o.zoomAble())("isMobile", o.isMobile())("selectedTrend", o.selectedTrend)
            }
        },
        dependencies: [Q, Me, X],
        styles: [`.options{padding:20px;background-color:#bfbfbf26;margin-top:20px}  .option{margin-top:10px}  .caption{font-size:18px;font-weight:500}  .option>span{margin-right:10px}  .option>.dx-widget{display:inline-block;vertical-align:middle}
/*# sourceMappingURL=index-chart.component-R47BFGSL.css.map */`],
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var li = e => ({
    active: e
});
function ui(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "market-view-bourse-analytics-data-category-item", 12),
        T("click", function() {
            let n = I(i).$implicit
              , o = p();
            return V(o.selectItemHandler(n.isin))
        }),
        s()
    }
    if (e & 2) {
        let i, t = r.$implicit, n = p();
        m("data", t)("isMobile", n.isMobile())("id", "market-view-index-chart-kind-" + t.isin)("ngClass", j(4, li, ((i = n.selectedChart()) == null ? null : i.isin) === t.isin))
    }
}
var Et = ( () => {
    let r = class r {
        constructor() {
            this.isMobile = b(!1),
            this.data = b([]),
            this.selectedChart = E(null),
            this.chartType = E(null),
            ke( () => {
                this.data().length && !this.selectedChart() ? this.selectedChart.set(this.data()[0]) : this.selectedChart() && (this.selectedChart.update(t => (t.value = this.data().find(n => n.isin === t.isin).value,
                t)),
                this.selectedChart.update(t => (t.volume = this.data().find(n => n.isin === t.isin).volume,
                t))),
                this.selectedChart() && this.chartType.set(K({}, ut.get(this.selectedChart().isin)))
            }
            )
        }
        selectItemHandler(t) {
            this.data().forEach(n => {
                n.isin === t && (this.selectedChart.set(n),
                this.chartType.set(ut.get(t)))
            }
            )
        }
        preventSwipe() {}
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-bourse-line-chart"]],
        inputs: {
            isMobile: [1, "isMobile"],
            data: [1, "data"]
        },
        decls: 27,
        vars: 18,
        consts: [[1, "mb-1"], [1, "bg-principal", "bg-principal-3x-dark", "rounded", "p-2", 3, "swipe"], [1, "d-block", "mb-2", 3, "zoomAble", "isMobile", "showTitle", "type"], [1, "align-items-center", "bg-principal-2x", "d-flex", "flex-wrap", "justify-content-around", "1justify-content-md-start", "p-1", "rounded-3"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "col-auto", "ml-sm-4"], [1, "text-muted", "me-1"], ["data-cy", "market-view-total-trade-value"], [1, "text-muted"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "col-auto"], ["data-cy", "market-view-total-trade-volume"], [1, "d-flex", "flex-wrap", "gap-1"], [1, "market-view-bourse-analytics-data-category-item", "flex-grow-1", 3, "data", "isMobile", "id", "ngClass"], [1, "market-view-bourse-analytics-data-category-item", "flex-grow-1", 3, "click", "data", "isMobile", "id", "ngClass"]],
        template: function(n, o) {
            if (n & 1 && (a(0, "div", 0)(1, "div", 1),
            T("swipe", function() {
                return o.preventSwipe()
            }),
            d(2, "index-chart", 2),
            a(3, "div", 3)(4, "div", 4)(5, "span", 5),
            u(6, "\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062A "),
            s(),
            a(7, "div")(8, "span", 6),
            u(9),
            _(10, "largeNumberPersian"),
            s(),
            a(11, "small", 7),
            u(12),
            _(13, "largeNumberPersianPostfix"),
            s()()(),
            a(14, "div", 8)(15, "span", 5),
            u(16, "\u062D\u062C\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062A "),
            s(),
            a(17, "div")(18, "span", 9),
            u(19),
            _(20, "largeNumberPersian"),
            s(),
            a(21, "small", 7),
            u(22),
            _(23, "largeNumberPersianPostfix"),
            s()()()()()(),
            a(24, "div", 10),
            F(25, ui, 1, 6, "market-view-bourse-analytics-data-category-item", 11, $),
            s()),
            n & 2) {
                let c, C, v, g;
                l(2),
                m("zoomAble", !1)("isMobile", o.isMobile())("showTitle", !0)("type", o.chartType()),
                l(7),
                w(" ", G(10, 8, (c = (c = o.selectedChart()) == null ? null : c.value) !== null && c !== void 0 ? c : 0, 2), " "),
                l(3),
                w("", N(13, 11, (C = (C = o.selectedChart()) == null ? null : C.value) !== null && C !== void 0 ? C : 0), " \u0631\u06CC\u0627\u0644 "),
                l(7),
                k(G(20, 13, (v = (v = o.selectedChart()) == null ? null : v.volume) !== null && v !== void 0 ? v : 0, 2)),
                l(3),
                w("", N(23, 16, (g = (g = o.selectedChart()) == null ? null : g.volume) !== null && g !== void 0 ? g : 0), " \u0633\u0647\u0645 "),
                l(3),
                B(o.data())
            }
        },
        dependencies: [Mt, Q, yt, bt, Vt],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var ci = (e, r, i) => ({
    "bg-success": e,
    "bg-gradient": r,
    "bg-danger": i
})
  , di = e => ({
    "text-muted": e
});
function mi(e, r) {
    if (e & 1 && (a(0, "a", 5),
    d(1, "svg-icon", 19),
    s()),
    e & 2) {
        let i = p(3)
          , t = re(3);
        m("ngbPopover", t),
        l(),
        m("iconName", i.icons.QuestionBox)
    }
}
function pi(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "span", 20),
        T("tap", function() {
            I(i),
            p(3);
            let n = re(3);
            return V(n)
        }),
        d(1, "svg-icon", 19),
        s()
    }
    if (e & 2) {
        let i = p(3)
          , t = re(3);
        m("autoClose", !0)("ngbPopover", t),
        l(),
        m("iconName", i.icons.QuestionBox)
    }
}
function vi(e, r) {
    if (e & 1 && (a(0, "div", 21),
    d(1, "div", 27),
    a(2, "small", 29),
    u(3),
    s()()),
    e & 2) {
        let i = p()
          , t = i.$implicit
          , n = i.$index
          , o = i.$count;
        l(3),
        k(n === o - 1 && t.count === 0 ? "" : "+")
    }
}
function hi(e, r) {
    if (e & 1 && (a(0, "div", 8),
    f(1, vi, 4, 1, "div", 21),
    a(2, "div", 22)(3, "div", 23)(4, "small", 24),
    u(5),
    s()(),
    d(6, "div", 25),
    s(),
    a(7, "div", 26),
    d(8, "div", 27),
    a(9, "small", 28),
    u(10),
    s()()()),
    e & 2) {
        let i = r.$implicit
          , t = r.$index
          , n = r.$count;
        l(),
        h(t === n - 1 ? 1 : -1),
        l(4),
        k((t === 0 || t === n - 1) && i.count === 0 ? "" : i.count),
        l(),
        pt("max-width: 50px" + i.from === -.5 ? `--direction: to left;
    --rgb-color-light-first: 200, 199, 204;
    --rgb-color-dark-first: 58, 57, 71;
    --rgb-alpha-first: 1;
    --rgb-color-light-end: 200, 199, 204;
    --rgb-color-dark-end: 58, 57, 71;
    --rgb-alpha-end: 1;` : i.to === .5 ? ` --direction: to right;
  --rgb-color-light-first: 200, 199, 204;
  --rgb-color-dark-first: 58, 57, 71;
  --rgb-alpha-first: 1;
  --rgb-color-light-end: 200, 199, 204;
  --rgb-color-dark-end: 58, 57, 71;
  --rgb-alpha-end: 1;` : ""),
        ne(i.class + "rounded-1 mb-2 w-100"),
        ie("height", (i == null ? null : i.count) === 1 ? .5 : i == null ? null : i.percent, "%"),
        m("ngClass", ht(11, ci, i.from >= .5, i.from === -.5 || i.to === .5, i.from < -.5)),
        l(3),
        m("ngClass", j(15, di, i.title !== "0")),
        l(),
        k(t === 0 && i.count === 0 ? "" : i.title)
    }
}
function fi(e, r) {
    if (e & 1 && (f(0, mi, 2, 2, "a", 5)(1, pi, 2, 3, "span", 6),
    a(2, "div", 7),
    F(3, hi, 11, 17, "div", 8, $),
    s(),
    a(5, "div", 9),
    d(6, "div", 10),
    a(7, "div", 11),
    d(8, "div", 12)(9, "div", 13),
    s(),
    d(10, "div", 14),
    s(),
    a(11, "div", 15)(12, "div")(13, "span", 16),
    u(14),
    s(),
    a(15, "span", 17),
    u(16, "\u0646\u0645\u0627\u062F\u200C\u0647\u0627\u06CC \u0645\u062B\u0628\u062A"),
    s()(),
    a(17, "div")(18, "span", 17),
    u(19, "\u0646\u0645\u0627\u062F\u200C\u0647\u0627\u06CC \u0645\u0646\u0641\u06CC"),
    s(),
    a(20, "span", 18),
    u(21),
    s()()()),
    e & 2) {
        let i, t, n = p(), o = p();
        h(o.isMobile() ? -1 : 0),
        l(),
        h(o.isMobile() ? 1 : -1),
        l(2),
        B(n.marketTickerPerformanceCount),
        l(3),
        ie("width", o.totalDataObserver().positivePercent + "%"),
        l(),
        ie("width", o.totalDataObserver().nonePercent + "%"),
        l(3),
        ie("width", o.totalDataObserver().negativePercent + "%"),
        l(4),
        k((i = o.totalDataObserver()) == null ? null : i.positive),
        l(7),
        k((t = o.totalDataObserver()) == null ? null : t.negative)
    }
}
function Ci(e, r) {
    if (e & 1 && (a(0, "div", 2)(1, "div", 30),
    d(2, "svg-icon", 31),
    a(3, "span"),
    u(4, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0646\u0645\u0627\u062F\u200C\u0647\u0627\u06CC \u0645\u062B\u0628\u062A \u0648 \u0645\u0646\u0641\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F"),
    s()(),
    a(5, "div", 32)(6, "div", 7)(7, "div", 8)(8, "div", 22)(9, "div", 23),
    d(10, "small", 33),
    s(),
    d(11, "div", 34),
    s(),
    a(12, "div", 26),
    d(13, "div", 27)(14, "small", 29),
    s()(),
    a(15, "div", 8)(16, "div", 22),
    d(17, "div", 23)(18, "div", 35),
    s(),
    a(19, "div", 26),
    d(20, "div", 27),
    a(21, "small", 29),
    u(22, "-7"),
    s()()(),
    a(23, "div", 8)(24, "div", 22),
    d(25, "div", 23)(26, "div", 35),
    s(),
    a(27, "div", 26),
    d(28, "div", 27),
    a(29, "small", 29),
    u(30, "-6"),
    s()()(),
    a(31, "div", 8)(32, "div", 22),
    d(33, "div", 23)(34, "div", 36),
    s(),
    a(35, "div", 26),
    d(36, "div", 27),
    a(37, "small", 29),
    u(38, "-5"),
    s()()(),
    a(39, "div", 8)(40, "div", 22),
    d(41, "div", 23)(42, "div", 36),
    s(),
    a(43, "div", 26),
    d(44, "div", 27),
    a(45, "small", 29),
    u(46, "-4"),
    s()()(),
    a(47, "div", 8)(48, "div", 22),
    d(49, "div", 23)(50, "div", 37),
    s(),
    a(51, "div", 26),
    d(52, "div", 27),
    a(53, "small", 29),
    u(54, "-3"),
    s()()(),
    a(55, "div", 8)(56, "div", 22),
    d(57, "div", 23)(58, "div", 38),
    s(),
    a(59, "div", 26),
    d(60, "div", 27),
    a(61, "small", 29),
    u(62, "-2"),
    s()()(),
    a(63, "div", 8)(64, "div", 22),
    d(65, "div", 23)(66, "div", 39),
    s(),
    a(67, "div", 26),
    d(68, "div", 27),
    a(69, "small", 29),
    u(70, "-1"),
    s()()(),
    a(71, "div", 8)(72, "div", 22),
    d(73, "div", 23)(74, "div", 37),
    s(),
    a(75, "div", 26),
    d(76, "div", 27),
    a(77, "small", 29),
    u(78, "-0.5"),
    s()()(),
    a(79, "div", 8)(80, "div", 22),
    d(81, "div", 23)(82, "div", 37),
    s(),
    a(83, "div", 26),
    d(84, "div", 27),
    a(85, "small", 40),
    u(86, "0"),
    s()()(),
    a(87, "div", 8)(88, "div", 22),
    d(89, "div", 23)(90, "div", 41),
    s(),
    a(91, "div", 26),
    d(92, "div", 27),
    a(93, "small", 29),
    u(94, "0.5"),
    s()()(),
    a(95, "div", 8)(96, "div", 22),
    d(97, "div", 23)(98, "div", 42),
    s(),
    a(99, "div", 26),
    d(100, "div", 27),
    a(101, "small", 29),
    u(102, "1"),
    s()()(),
    a(103, "div", 8)(104, "div", 22),
    d(105, "div", 23)(106, "div", 43),
    s(),
    a(107, "div", 26),
    d(108, "div", 27),
    a(109, "small", 29),
    u(110, "2"),
    s()()(),
    a(111, "div", 8)(112, "div", 22),
    d(113, "div", 23)(114, "div", 44),
    s(),
    a(115, "div", 26),
    d(116, "div", 27),
    a(117, "small", 29),
    u(118, "3"),
    s()()(),
    a(119, "div", 8)(120, "div", 22),
    d(121, "div", 23)(122, "div", 45),
    s(),
    a(123, "div", 26),
    d(124, "div", 27),
    a(125, "small", 29),
    u(126, "4"),
    s()()(),
    a(127, "div", 8)(128, "div", 22),
    d(129, "div", 23)(130, "div", 46),
    s(),
    a(131, "div", 26),
    d(132, "div", 27),
    a(133, "small", 29),
    u(134, "5"),
    s()()(),
    a(135, "div", 8)(136, "div", 22),
    d(137, "div", 23)(138, "div", 47),
    s(),
    a(139, "div", 26),
    d(140, "div", 27),
    a(141, "small", 29),
    u(142, "6"),
    s()()(),
    a(143, "div", 8)(144, "div", 21),
    d(145, "div", 27),
    a(146, "small", 29),
    u(147, "+"),
    s()(),
    a(148, "div", 22),
    d(149, "div", 23)(150, "div", 48),
    s(),
    a(151, "div", 26),
    d(152, "div", 27),
    a(153, "small", 29),
    u(154, "7"),
    s()()()(),
    a(155, "div", 9),
    d(156, "div", 49),
    a(157, "div", 50),
    d(158, "div", 51)(159, "div", 51),
    s(),
    d(160, "div", 52),
    s(),
    a(161, "div", 15)(162, "div")(163, "span", 17),
    u(164, "\u0646\u0645\u0627\u062F\u200C\u0647\u0627\u06CC \u0645\u062B\u0628\u062A"),
    s()(),
    a(165, "div")(166, "span", 17),
    u(167, "\u0646\u0645\u0627\u062F\u200C\u0647\u0627\u06CC \u0645\u0646\u0641\u06CC"),
    s()()()()()),
    e & 2) {
        let i = p(2);
        l(2),
        m("iconName", i.icons.Alert)
    }
}
function gi(e, r) {
    if (e & 1 && (a(0, "div", 4)(1, "div", 15)(2, "div")(3, "span", 53),
    u(4),
    s(),
    a(5, "span", 17),
    u(6, "\u0646\u0645\u0627\u062F\u200C\u0647\u0627\u06CC \u0635\u0641 \u062E\u0631\u06CC\u062F"),
    s()(),
    a(7, "div")(8, "span", 17),
    u(9, "\u0646\u0645\u0627\u062F\u200C\u0647\u0627\u06CC \u0635\u0641 \u0641\u0631\u0648\u0634"),
    s(),
    a(10, "span", 54),
    u(11),
    s()()(),
    a(12, "div", 9),
    d(13, "div", 55)(14, "div", 56),
    s(),
    a(15, "div", 57)(16, "div", 58)(17, "span", 59),
    u(18, "\u0627\u0631\u0632\u0634 \u0635\u0641 \u062E\u0631\u06CC\u062F "),
    s(),
    a(19, "span", 60),
    u(20),
    _(21, "largeNumber"),
    s()(),
    a(22, "div", 61)(23, "span", 59),
    u(24, "\u0627\u0631\u0632\u0634 \u0635\u0641 \u0641\u0631\u0648\u0634 "),
    s(),
    a(25, "span", 60),
    u(26),
    _(27, "largeNumber"),
    s()()()()),
    e & 2) {
        let i, t, n, o, c, C, v = p(2);
        l(4),
        k((i = v.askQueueObject()) == null ? null : i.count),
        l(7),
        k((t = v.bidQueueObject()) == null ? null : t.count),
        l(2),
        ie("width", ((n = v.askQueueObject()) == null ? null : n.value) / (((n = v.bidQueueObject()) == null ? null : n.value) + ((n = v.askQueueObject()) == null ? null : n.value)) * 100 + "%"),
        l(),
        ie("width", ((o = v.bidQueueObject()) == null ? null : o.value) / (((o = v.bidQueueObject()) == null ? null : o.value) + ((o = v.askQueueObject()) == null ? null : o.value)) * 100 + "%"),
        l(6),
        w("", G(21, 8, (c = v.askQueueObject()) == null ? null : c.value, 1), " "),
        l(6),
        w("", G(27, 11, (C = v.bidQueueObject()) == null ? null : C.value, 1), " ")
    }
}
function bi(e, r) {
    if (e & 1 && (a(0, "div", 2)(1, "div", 30),
    d(2, "svg-icon", 62),
    a(3, "span"),
    u(4, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0635\u0641\u200C\u0647\u0627\u06CC \u062E\u0631\u06CC\u062F \u0648 \u0641\u0631\u0648\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F"),
    s()(),
    a(5, "div", 32)(6, "div", 4)(7, "div", 15)(8, "div")(9, "span", 17),
    u(10, "\u0646\u0645\u0627\u062F\u0647\u0627\u06CC \u0635\u0641 \u062E\u0631\u06CC\u062F"),
    s()(),
    a(11, "div")(12, "span", 17),
    u(13, "\u0646\u0645\u0627\u062F\u0647\u0627\u06CC \u0635\u0641 \u0641\u0631\u0648\u0634"),
    s()()(),
    a(14, "div", 9),
    d(15, "div", 63)(16, "div", 64),
    s(),
    a(17, "div", 57)(18, "div", 58)(19, "span", 59),
    u(20, "\u0627\u0631\u0632\u0634 \u0635\u0641 \u062E\u0631\u06CC\u062F "),
    s()(),
    a(21, "div", 61)(22, "span", 59),
    u(23, "\u0627\u0631\u0632\u0634 \u0635\u0641 \u0641\u0631\u0648\u0634 "),
    s()()()()()()),
    e & 2) {
        let i = p(2);
        l(2),
        m("iconName", i.icons.Alert)
    }
}
function yi(e, r) {
    if (e & 1 && (a(0, "div", 1),
    f(1, fi, 22, 10)(2, Ci, 168, 1, "div", 2),
    s(),
    a(3, "div", 3),
    f(4, gi, 28, 14, "div", 4)(5, bi, 24, 1, "div", 2),
    s()),
    e & 2) {
        let i = p();
        l(),
        h(i.showBarChart() ? 1 : 2),
        l(3),
        h(i.showQueue() ? 4 : 5)
    }
}
function xi(e, r) {
    e & 1 && (a(0, "span", 67),
    u(1, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F "),
    s())
}
function Si(e, r) {
    e & 1 && (a(0, "a", 68),
    u(1, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F "),
    s())
}
function _i(e, r) {
    if (e & 1 && (a(0, "div", 65),
    u(1, "\u0646\u0645\u0627\u062F\u0647\u0627\u06CC \u0645\u062B\u0628\u062A \u0648 \u0645\u0646\u0641\u06CC"),
    s(),
    a(2, "div", 66),
    u(3, " \u0646\u0645\u0627\u06CC\u0634 \u062A\u0639\u062F\u0627\u062F \u0646\u0645\u0627\u062F\u0647\u0627\u06CC \u0628\u0627\u0632\u0627\u0631 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062F\u0631\u0635\u062F \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC \u062F\u0631 \u0628\u0627\u0632\u0647\u200C\u0647\u0627\u06CC \u0645\u062E\u062A\u0644\u0641 \u0645\u0648\u062C\u0648\u062F \u062F\u0631 \u0646\u0645\u0648\u062F\u0627\u0631. \u0646\u0645\u0627\u06CC\u0634 \u062A\u0639\u062F\u0627\u062F \u0646\u0645\u0627\u062F\u0647\u0627\u06CC \u0645\u062B\u0628\u062A\u060C \u062E\u0646\u062B\u06CC \u06CC\u0627 \u0645\u0646\u0641\u06CC \u062F\u0631 \u0628\u0627\u0632\u0627\u0631. "),
    s(),
    f(4, xi, 2, 0, "span", 67)(5, Si, 2, 0, "a", 68)),
    e & 2) {
        let i = p();
        l(4),
        h(i.isMobile() ? -1 : 4),
        l(),
        h(i.isMobile() ? 5 : -1)
    }
}
var Dt = ( () => {
    let r = class r {
        constructor(t, n) {
            this.marketViewBourseService = t,
            this.timeService = n,
            this.isMobile = b(!1),
            this.askQueueObject = E(null),
            this.bidQueueObject = E(null),
            this.showBarChart = E(!0),
            this.showQueue = E(!0),
            this.totalDataObserver = E({
                positive: 0,
                positivePercent: 0,
                none: 0,
                nonePercent: 0,
                negative: 0,
                negativePercent: 0
            }),
            this.icons = W,
            this.dataObserver = this.marketViewBourseService.dataStore.find(o => o.url === this.marketViewBourseService.urlKeys.BOURSE_VIEW).observable.pipe(J(o => {
                let c = M => {
                    let H = M[0];
                    for (let te = 1; te < M.length; te++)
                        H < M[te] && (H = M[te]);
                    return H
                }
                  , C = new Map([[-10, "opacity-9"], [-9, "opacity-9"], [-8, "opacity-9"], [-7, "opacity-9"], [-6, "opacity-9"], [-5, "opacity-8"], [-4, "opacity-8"], [-3, "opacity-6"], [-2, "opacity-4"], [-1, "opacity-3"], [.5, "opacity-3"], [1, "opacity-3"], [2, "opacity-4"], [3, "opacity-6"], [4, "opacity-8"], [5, "opacity-8"], [6, "opacity-9"], [7, "opacity-9"], [8, "opacity-9"], [9, "opacity-9"], [10, "opacity-9"]])
                  , v = M => {
                    let H = o.marketTickerPerformanceCount.map(S => ({
                        from: +S.from,
                        to: +S.to,
                        lastPriceSymbolCount: S.lastPriceSymbolCount,
                        closePriceSymbolCount: S.closePriceSymbolCount,
                        count: this.timeService.isMarketOpenSub.value ? S.lastPriceSymbolCount : S.closePriceSymbolCount,
                        percent: 100 * (this.timeService.isMarketOpenSub.value ? S.lastPriceSymbolCount : S.closePriceSymbolCount) / M | 0,
                        class: C.get(+S.from) ?? "",
                        title: S.from,
                        last: !1
                    })).sort( (S, q) => +S.from - +q.from)
                      , te = H.filter(S => +S.to <= -7).sort( (S, q) => +S.from - +q.from)
                      , R = H.filter(S => +S.from < 0 && +S.from >= -7).sort( (S, q) => +S.from - +q.from)
                      , Z = H.filter(S => +S.from >= 7).sort( (S, q) => +q.from - +S.from)
                      , he = H.filter(S => +S.from >= 0 && +S.to <= 7).sort( (S, q) => +q.from - +S.from)
                      , ee = te.reduce( (S, q) => ae(K({}, S), {
                        lastPriceSymbolCount: S.lastPriceSymbolCount + q.lastPriceSymbolCount,
                        closePriceSymbolCount: S.closePriceSymbolCount + q.closePriceSymbolCount,
                        count: S.count + q.count,
                        percent: S.percent + q.percent
                    }), {
                        from: -1e4,
                        to: -7,
                        lastPriceSymbolCount: 0,
                        closePriceSymbolCount: 0,
                        count: 0,
                        percent: 0,
                        class: C.get(-10) ?? "",
                        title: "-",
                        last: !1
                    })
                      , at = Z.reduce( (S, q) => ae(K({}, S), {
                        lastPriceSymbolCount: S.lastPriceSymbolCount + q.lastPriceSymbolCount,
                        closePriceSymbolCount: S.closePriceSymbolCount + q.closePriceSymbolCount,
                        count: S.count + q.count,
                        percent: S.percent + q.percent
                    }), {
                        from: 7,
                        to: 1e4,
                        lastPriceSymbolCount: 0,
                        closePriceSymbolCount: 0,
                        count: 0,
                        percent: 0,
                        class: C.get(10) ?? "",
                        title: "7",
                        last: !0
                    })
                      , fe = [];
                    return fe.push(ee),
                    R.forEach(S => {
                        fe.push(K({}, S))
                    }
                    ),
                    he.forEach(S => {
                        fe.push(K({}, S))
                    }
                    ),
                    fe.push(at),
                    fe = [...fe.sort( (S, q) => +S.from - +q.from)],
                    fe.length && (fe[fe.length - 1].last = !0),
                    fe
                }
                  , g = o.marketTickerPerformanceCount;
                if (g) {
                    let M = c(g.map(R => this.timeService.isMarketOpenSub.value ? R.lastPriceSymbolCount : R.closePriceSymbolCount))
                      , H = v(M)
                      , te = H.filter(R => +R.from >= .5 || +R.to <= -.5);
                    return this.showBarChart.set(this.timeService.isMarketOpenSub.value ? te.some(R => R.lastPriceSymbolCount > 0 || R.lastPriceSymbolCount > 0) : te.some(R => R.closePriceSymbolCount > 0 || R.closePriceSymbolCount > 0)),
                    ae(K({}, o), {
                        marketTickerPerformanceCount: [...H]
                    })
                }
                return this.showBarChart.set(!1),
                o
            }
            ))
        }
        ngOnInit() {
            this.dataObserver.pipe(Be(t => t !== void 0)).subscribe(t => {
                if (t) {
                    let n = (c, C) => c + C;
                    t.marketQueueCount?.map(c => {
                        c.type === lt.bidqueue ? this.askQueueObject.set(K({}, c)) : this.bidQueueObject.set(K({}, c))
                    }
                    ),
                    this.showQueue.set(t.marketQueueCount?.some(c => c.count > 0));
                    let o = t.marketTickerPerformanceCount?.map(c => c.count).reduce(n, 0);
                    this.totalDataObserver.set({
                        negative: t.marketTickerPerformanceCount?.filter(c => +c.from < -.5).map(c => c.count).reduce(n, 0),
                        negativePercent: 0,
                        none: t.marketTickerPerformanceCount?.filter(c => +c.from >= -.5 && +c.from < .5).map(c => c.count).reduce(n, 0),
                        nonePercent: 0,
                        positive: t.marketTickerPerformanceCount?.filter(c => +c.from >= .5).map(c => c.count).reduce(n, 0),
                        positivePercent: 0
                    }),
                    this.totalDataObserver.update(c => ae(K({}, c), {
                        negativePercent: 100 * c.negative / o,
                        nonePercent: 100 * c.none / o,
                        positivePercent: 100 * c.positive / o
                    }))
                }
            }
            )
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(ue),y(Oe))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-bourse-positive-negative-bar"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 4,
        vars: 3,
        consts: [["helpSignSymbols", ""], [1, "bg-principal", "bg-principal-3x-dark", "rounded", "p-3", "position-relative"], [1, "position-relative"], [1, "bg-principal", "bg-principal-3x-dark", "rounded", "p-3", "position-relative", "mt-2"], [1, "d-flex", "flex-column"], ["triggers", "mouseenter:mouseleave", "container", "body", "href", "https://learning.emofid.com/introducing-the-market-view-in-easy-trader/#symbols", "target", "_blank", 1, "position-absolute", "end-0", "top-0", "m-1", 3, "ngbPopover"], ["target", "_blank", 1, "position-absolute", "end-0", "top-0", "m-1", 3, "autoClose", "ngbPopover"], [1, "d-flex", "flex-row-reverse", "justify-content-between", 2, "height", "100px"], [1, "d-flex", "flex-fill"], [1, "d-flex", "my-1", 2, "height", "7px"], [1, "h-100", "flex-fill", "bg-gradient", "rounded-right", 2, "--direction", "to right", "--rgb-color-light-first", "200, 199, 204", "--rgb-color-dark-first", "42, 49, 57", "--rgb-alpha-first", "1", "--rgb-color-light-end", "27, 191, 137", "--rgb-color-dark-end", "27, 191, 137", "--rgb-alpha-end", "1"], [1, "h-100", "flex-fill", "mx-1", "d-flex"], [1, "h-100", "flex-fill", "bg-gradient", 2, "--direction", "to right", "--rgb-color-light-first", "200, 199, 204", "--rgb-color-dark-first", "42, 49, 57", "--rgb-alpha-first", "0.2", "--rgb-color-light-end", "200, 199, 204", "--rgb-color-dark-end", "42, 49, 57", "--rgb-alpha-end", "1"], [1, "h-100", "flex-fill", "bg-gradient", 2, "--direction", "to left", "--rgb-color-light-first", "200, 199, 204", "--rgb-color-dark-first", "42, 49, 57", "--rgb-alpha-first", "0.2", "--rgb-color-light-end", "200, 199, 204", "--rgb-color-dark-end", "42, 49, 57", "--rgb-alpha-end", "1"], [1, "h-100", "flex-fill", "bg-gradient", "rounded-left", 2, "--direction", "to left", "--rgb-color-light-first", "200, 199, 204", "--rgb-color-dark-first", "42, 49, 57", "--rgb-alpha-first", "1", "--rgb-color-light-end", "220, 53, 69", "--rgb-color-dark-end", "220, 53, 69", "--rgb-alpha-end", "1"], [1, "d-flex", "justify-content-between"], ["data-cy", "positive-isins", 1, "text-success"], [1, "text-muted"], ["data-cy", "negative-isins", 1, "text-danger"], ["width", "20", "height", "20", 1, "cup", "text-muted", 3, "iconName"], ["target", "_blank", 1, "position-absolute", "end-0", "top-0", "m-1", 3, "tap", "autoClose", "ngbPopover"], [1, "d-flex", "flex-column", "align-items-center", 2, "width", "10px"], [1, "d-flex", "flex-column", "flex-grow-1", "justify-content-end", "align-items-center", "position-relative", "mb-2", "pt-2"], [1, "position-relative", "flex-grow-1"], ["data-cy", "market-view-range-value", 1, "bottom-0", "end-50", "position-absolute", 2, "transform", "translateX(-50%)"], [3, "ngClass"], [1, "d-flex", "flex-column", "align-items-center", 2, "width", "5px"], [1, "flex-grow-1"], ["dir", "ltr", 3, "ngClass"], ["dir", "ltr", 1, "text-muted"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-muted", "position-absolute", "z-3", "full-offset"], ["width", "36", "height", "36", 1, "mb-2", 3, "iconName"], [1, "opacity-1"], [1, "bottom-0", "end-50", "position-absolute", 2, "transform", "translateX(-50%)"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "0%"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "2%"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "8%"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "41%"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "44%"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "23%"], ["dir", "ltr"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "29%"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "59%"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "100%"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "14%"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "38%"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "7%"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "11%"], [1, "rounded-1", "mb-2", "w-100", "bg-secondary", 2, "max-width", "50px", "height", "0.5%"], [1, "h-100", "flex-fill", "bg-secondary", "rounded-right", 2, "width", "55%"], [1, "h-100", "flex-fill", "mx-1", "d-flex", 2, "width", "17.3438%"], [1, "h-100", "flex-fill", "bg-secondary"], [1, "h-100", "flex-fill", "bg-secondary", "rounded-left", 2, "width", "27.6562%"], ["data-cy", "market-view-ask-queue-isins", 1, "text-success"], ["data-cy", "market-view-bid-queue-isins", 1, "text-danger"], [1, "h-100", "flex-fill", "bg-success", "me-1", "rounded-right"], [1, "h-100", "flex-fill", "bg-danger", "rounded-left"], [1, "row", "m-0", "justify-content-between"], [1, "col-auto", "me-4", "p-0", "d-flex", "flex-column", "flex-md-row"], [1, "text-muted", "me-1"], ["dir", "ltr", 1, "text-body"], [1, "col-auto", "p-0", "d-flex", "flex-column", "flex-md-row"], ["width", "36", "height", "36", 1, "", 3, "iconName"], [1, "h-100", "flex-fill", "bg-secondary", "me-1", "rounded-right", 2, "width", "61.2424%"], [1, "h-100", "flex-fill", "bg-secondary", "rounded-left", 2, "width", "78.7576%"], [1, "mb-1", "fw-bold", "text-center"], [1, "mb-2"], [1, "d-block", "small", "text-end", "text-primary", "mt-1"], ["href", "https://learning.emofid.com/introducing-the-market-view-in-easy-trader/#symbols", "helpSignSymbols", "", 1, "d-block", "small", "text-end", "text-primary", "mt-1"]],
        template: function(n, o) {
            if (n & 1 && (f(0, yi, 6, 2),
            _(1, "async"),
            f(2, _i, 6, 2, "ng-template", null, 0, _e)),
            n & 2) {
                let c;
                h((c = N(1, 1, o.dataObserver)) ? 0 : -1, c)
            }
        },
        dependencies: [ge, Te, Q, we, X],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
function ki(e, r) {
    if (e & 1 && d(0, "bar-chart", 0),
    e & 2) {
        let i = p();
        m("chartId", i.chartId())("isMobile", i.isMobile())("items", i.items())
    }
}
var Pt = ( () => {
    let r = class r {
        constructor(t) {
            this.marketViewBourseService = t,
            this.items = E([]),
            this.chartId = E("marketViewBourseViewBarChart"),
            this.isMobile = b(!1),
            this.chartType = b(null),
            this.selectedTimePeriod = O.monthly,
            P(Ct(this.chartType).pipe(Be(Boolean), Ee( () => He(0, 3e4)), Ee( () => this.getData())))
        }
        getData() {
            return this.marketViewBourseService.getAnalyticsData(this.selectedTimePeriod, this.chartType()).pipe(Ge(t => !t), xe(1), U(t => {
                this.items.update( () => t.map(n => ({
                    type: this.getType(n.type),
                    date: n.date,
                    val: n.val
                })))
            }
            ))
        }
        getType(t) {
            return t === le.individualbuypower ? it.IndividualBuyPower : t === le.netindividual ? it.NetIndividual : it.PerCapita
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(ue))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-bourse-bar-chart"]],
        inputs: {
            isMobile: [1, "isMobile"],
            chartType: [1, "chartType"]
        },
        decls: 1,
        vars: 1,
        consts: [[3, "chartId", "isMobile", "items"]],
        template: function(n, o) {
            n & 1 && f(0, ki, 1, 3, "bar-chart", 0),
            n & 2 && h(o.items().length ? 0 : -1)
        },
        dependencies: [kt],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var wi = e => ({
    active: e
});
function Ti(e, r) {
    if (e & 1 && (a(0, "a", 1),
    d(1, "svg-icon", 6),
    s()),
    e & 2) {
        let i = p(2)
          , t = re(2);
        m("ngbPopover", t),
        l(),
        m("iconName", i.icons.QuestionBox)
    }
}
function Mi(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "span", 7),
        T("tap", function() {
            I(i),
            p(2);
            let n = re(2);
            return V(n)
        }),
        d(1, "svg-icon", 6),
        s()
    }
    if (e & 2) {
        let i = p(2)
          , t = re(2);
        m("autoClose", !0)("ngbPopover", t),
        l(),
        m("iconName", i.icons.QuestionBox)
    }
}
function Ii(e, r) {
    if (e & 1 && (a(0, "div", 11),
    u(1),
    s()),
    e & 2) {
        let i = p().$implicit;
        m("id", "market-view-state-chart-kind-" + (i == null ? null : i.type) + "-value"),
        l(),
        w(" ", i == null ? null : i.value.toFixed(2), " ")
    }
}
function Vi(e, r) {
    if (e & 1 && (a(0, "div", 12)(1, "span", 11),
    u(2),
    s()()),
    e & 2) {
        let i = p().$implicit;
        m("id", "market-view-state-chart-kind-" + (i == null ? null : i.type) + "-div-value"),
        l(),
        m("id", "market-view-state-chart-kind-" + (i == null ? null : i.type) + "-value"),
        l(),
        w(" ", (i == null ? null : i.value) + "%", "")
    }
}
function Ei(e, r) {
    if (e & 1 && (a(0, "span", 11),
    u(1),
    _(2, "largeNumber"),
    s()),
    e & 2) {
        let i = p().$implicit;
        m("id", "market-view-state-chart-kind-" + (i == null ? null : i.type) + "-value"),
        l(),
        w(" ", G(2, 2, i == null ? null : i.value, 1), " ")
    }
}
function Di(e, r) {
    if (e & 1 && (a(0, "span", 13),
    u(1),
    s()),
    e & 2) {
        let i = p().$implicit;
        m("id", "market-view-state-chart-kind-" + (i == null ? null : i.type) + "-value-postfix"),
        l(),
        w(" ", " \u0631\u06CC\u0627\u0644\u0621\u0621 ", " ")
    }
}
function Pi(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "div", 8),
        T("click", function() {
            let n = I(i).$implicit
              , o = p(2);
            return V(o.changeChartType(n == null ? null : n.type))
        }),
        a(1, "div", 9)(2, "span", 10),
        u(3),
        s(),
        f(4, Ii, 2, 2, "div", 11)(5, Vi, 3, 3, "div", 12),
        a(6, "div", 12),
        f(7, Ei, 3, 5, "span", 11)(8, Di, 2, 2, "span", 13),
        s()()()
    }
    if (e & 2) {
        let i = r.$implicit
          , t = p(2);
        m("ngClass", j(11, wi, t.chartType() === (i == null ? null : i.type)))("id", "market-view-state-chart-kind-" + (i == null ? null : i.type) + "-div-container"),
        me("data-cy", "market-view-state-chart-kind-" + (i == null ? null : i.type) + "-div-container-div"),
        l(),
        m("id", "market-view-state-chart-kind-" + (i == null ? null : i.type) + "-div-container-div"),
        l(),
        m("id", "market-view-state-chart-kind-" + (i == null ? null : i.type) + "-title"),
        l(),
        k(i == null ? null : i.title),
        l(),
        h((i == null ? null : i.type) === t.MarketIndTradingTrendsTypes.individualbuypower ? 4 : -1),
        l(),
        h((i == null ? null : i.type) === t.MarketIndTradingTrendsTypes.netindividual ? 5 : -1),
        l(),
        m("id", "market-view-state-chart-kind-" + (i == null ? null : i.type) + "-div-value"),
        l(),
        h((i == null ? null : i.type) === t.MarketIndTradingTrendsTypes.percapita ? 7 : -1),
        l(),
        h((i == null ? null : i.type) === t.MarketIndTradingTrendsTypes.percapita ? 8 : -1)
    }
}
function Fi(e, r) {
    if (e & 1) {
        let i = D();
        f(0, Ti, 2, 2, "a", 1)(1, Mi, 2, 3, "span", 2),
        a(2, "market-view-bourse-bar-chart", 3),
        T("swipe", function() {
            I(i);
            let n = p();
            return V(n.preventSwipe())
        }),
        s(),
        a(3, "div", 4),
        F(4, Pi, 9, 13, "div", 5, $),
        s()
    }
    if (e & 2) {
        let i, t = p();
        h(t.isMobile() ? -1 : 0),
        l(),
        h(t.isMobile() ? 1 : -1),
        l(),
        m("chartType", t.chartType())("isMobile", t.isMobile()),
        l(2),
        B((i = t.dataObserver()) == null ? null : i.marketIndTradingTrends)
    }
}
function Bi(e, r) {
    e & 1 && (a(0, "span", 16),
    u(1, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F "),
    s())
}
function Ni(e, r) {
    e & 1 && (a(0, "a", 17),
    u(1, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F "),
    s())
}
function Ai(e, r) {
    if (e & 1 && (a(0, "div", 14),
    u(1, "\u062E\u0627\u0644\u0635 \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC"),
    s(),
    a(2, "div", 15),
    u(3, " \u0628\u0647 \u062A\u0641\u0627\u0636\u0644 \u0645\u062C\u0645\u0648\u0639 \u0627\u0631\u0632\u0634 \u062E\u0631\u06CC\u062F\u060C \u0627\u0632 \u0645\u062C\u0645\u0648\u0639 \u0627\u0631\u0632\u0634 \u0641\u0631\u0648\u0634 \u0627\u0641\u0631\u0627\u062F \u062D\u0642\u06CC\u0642\u06CC\u060C \u062E\u0627\u0644\u0635 \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC \u06AF\u0641\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F \u06A9\u0647 \u0628\u0635\u0648\u0631\u062A \u062F\u0631\u0635\u062F \u0642\u0627\u0628\u0644 \u0646\u0645\u0627\u06CC\u0634 \u0627\u0633\u062A. "),
    s(),
    a(4, "div", 14),
    u(5, "\u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC"),
    s(),
    a(6, "div", 15),
    u(7, "\u0628\u0647 \u062D\u0627\u0635\u0644 \u062A\u0642\u0633\u06CC\u0645 \u0633\u0631\u0627\u0646\u0647 \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC\u060C \u0628\u0647 \u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634 \u062D\u0642\u06CC\u0642\u06CC\u060C \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC \u06AF\u0641\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F."),
    s(),
    a(8, "div", 14),
    u(9, "\u0633\u0631\u0627\u0646\u0647 \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC"),
    s(),
    a(10, "div", 15),
    u(11, "\u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646 \u0627\u0631\u0632\u0634 \u0631\u06CC\u0627\u0644\u06CC \u0633\u0647\u0627\u0645\u06CC \u0627\u0633\u062A \u06A9\u0647 \u06A9\u062F\u0647\u0627\u06CC \u062D\u0642\u06CC\u0642\u06CC \u062E\u0631\u06CC\u062F\u0647\u200C\u0627\u0646\u062F."),
    s(),
    f(12, Bi, 2, 0, "span", 16)(13, Ni, 2, 0, "a", 17)),
    e & 2) {
        let i = p();
        l(12),
        h(i.isMobile() ? -1 : 12),
        l(),
        h(i.isMobile() ? 13 : -1)
    }
}
var Ft = ( () => {
    let r = class r {
        constructor(t) {
            this.marketViewBourseService = t,
            this.MarketIndTradingTrendsTypes = le,
            this.icons = W,
            this.isMobile = b(!1),
            this.chartType = E(le.netindividual),
            this.dataObserver = P(this.marketViewBourseService.dataStore.find(n => n.url === this.marketViewBourseService.urlKeys.BOURSE_VIEW).observable.pipe(J(n => (n.marketIndTradingTrends = n.marketIndTradingTrends?.slice(0, 3),
            n.marketIndTradingTrends = [n.marketIndTradingTrends?.find(o => o?.type === le.netindividual), n.marketIndTradingTrends?.find(o => o?.type === le.individualbuypower), n.marketIndTradingTrends?.find(o => o?.type === le.percapita)],
            n))))
        }
        changeChartType(t) {
            this.chartType.set(t)
        }
        preventSwipe() {}
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(ue))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-bourse-analytics-data"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 3,
        vars: 1,
        consts: [["helpBarChart", ""], ["triggers", "mouseenter:mouseleave", "container", "body", "href", "https://learning.emofid.com/introducing-the-market-view-in-easy-trader/#purchasepower", "target", "_blank", 1, "position-absolute", "end-0", "top-0", "m-1", 2, "z-index", "10", 3, "ngbPopover"], ["container", "body", 1, "position-absolute", "end-0", "top-0", "m-1", 2, "z-index", "10", 3, "autoClose", "ngbPopover"], [3, "swipe", "chartType", "isMobile"], [1, "d-flex", "flex-flow", "gap-1"], [1, "market-view-bourse-analytics-data-category-item", "flex-grow-1", 3, "ngClass", "id"], ["width", "20", "height", "20", 1, "text-muted", 3, "iconName"], ["container", "body", 1, "position-absolute", "end-0", "top-0", "m-1", 2, "z-index", "10", 3, "tap", "autoClose", "ngbPopover"], [1, "market-view-bourse-analytics-data-category-item", "flex-grow-1", 3, "click", "ngClass", "id"], [1, "chart-category-item-selectable", "d-flex", "flex-column", "align-items-center", "justify-content-center", "rounded", "py-2", "h-100", "cup", 3, "id"], [1, "text-muted", 3, "id"], ["dir", "ltr", 3, "id"], [3, "id"], ["dir", "ltr", 1, "p-1", "small", "text-muted", 3, "id"], [1, "mb-1", "fw-bold", "text-center"], [1, "mb-2"], [1, "d-block", "small", "text-end", "text-primary", "mt-1"], ["href", "https://learning.emofid.com/introducing-the-market-view-in-easy-trader/#purchasepower", 1, "d-block", "small", "text-end", "text-primary", "mt-1"]],
        template: function(n, o) {
            n & 1 && f(0, Fi, 6, 4)(1, Ai, 14, 2, "ng-template", null, 0, _e),
            n & 2 && h(o.dataObserver() ? 0 : -1)
        },
        dependencies: [Q, Te, we, Pt, X],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
function Li(e, r) {
    if (e & 1) {
        let i = D();
        d(0, "market-view-bourse-line-chart", 7)(1, "market-view-bourse-positive-negative-bar", 8),
        a(2, "market-view-bourse-analytics-data", 9),
        T("swipe", function() {
            I(i);
            let n = p(2);
            return V(n.preventSwipe())
        }),
        s()
    }
    if (e & 2) {
        let i = p(2);
        m("isMobile", i.isMobile())("data", i.data().marketIndicesQuotesLive),
        l(),
        m("isMobile", i.isMobile()),
        l(),
        m("isMobile", i.isMobile())
    }
}
function Oi(e, r) {
    if (e & 1 && (a(0, "div", 0),
    d(1, "svg-icon", 10),
    u(2, " \u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u062C\u0647\u062A \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F "),
    s()),
    e & 2) {
        let i = p(2);
        l(),
        m("iconName", i.icons.Alert)
    }
}
function Ri(e, r) {
    if (e & 1 && (f(0, Li, 3, 4)(1, Oi, 3, 1, "div", 0),
    a(2, "div", 1)(3, "a", 2)(4, "span", 3),
    u(5, "\u0628\u0627 \u0647\u0645\u06A9\u0627\u0631\u06CC "),
    s(),
    a(6, "div", 4),
    Ye(),
    a(7, "svg", 5),
    d(8, "path", 6),
    s(),
    u(9, " \u0628\u0648\u0631\u0633 \u0648\u06CC\u0648 "),
    s()()()),
    e & 2) {
        let i = p();
        h(i.data().noData !== !0 ? 0 : 1)
    }
}
var Bt = ( () => {
    let r = class r {
        constructor(t, n) {
            this.marketViewBourseService = t,
            this.timeService = n,
            this.icons = W,
            this.chartType = le.netindividual,
            this.isMobile = E(!1),
            this.serverDate = P(this.timeService.serverDateObs$),
            this.data = P(He(0, 3e4).pipe(Ee( () => this.marketViewBourseService.getBourseData().pipe(J(o => (o?.marketIndicesQuotesLive?.forEach(c => {
                new Date(c.indexTimeStamp).getDate() !== this.serverDate().getDate() && (c.changeValue = 0),
                new Date(c.marketActivityTimeStamp).getDate() !== this.serverDate().getDate() && (c.value = c.volume = 0)
            }
            ),
            o))))), {
                initialValue: null
            })
        }
        ngOnDestroy() {
            this.marketViewBourseService.unSubscribeToIndex()
        }
        ngOnInit() {
            this.marketViewBourseService.subscribeToIndex()
        }
        preventSwipe() {}
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(ue),y(Oe))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-bourse"]],
        decls: 1,
        vars: 1,
        consts: [[1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "h-100", "text-muted"], [1, "mt-2", "text-end"], ["href", "https://bv.emofid.com", "target", "_blank", 1, "d-inline-flex", "gap-1", "align-items-center", "my-2", "small"], [1, "text-secondary"], [1, "rounded", "bg-global", "text-global", "bg-opacity-10", "p-1"], ["width", "18", "height", "18", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3 0C1.34315 0 0 1.34315 0 3V11C0 12.6569 1.34315 14 3 14H11C12.6569 14 14 12.6569 14 11V3C14 1.34315 12.6569 0 11 0H3ZM10.8657 4.67923C11.1069 4.07182 11.3747 3.47905 11.7579 2.94705L9.5917 2.94707C9.5934 2.98409 9.59529 3.02111 9.59718 3.05814V3.05816L9.59719 3.05819L9.59719 3.05822C9.60133 3.1393 9.60548 3.22039 9.60754 3.30153C9.61484 3.58756 9.54994 3.86002 9.45057 4.12526C9.04896 5.19713 8.64717 6.26893 8.24537 7.34074L8.24272 7.34781L8.24123 7.35178L7.8237 8.46558L7.80037 8.52684L7.774 8.44342L7.77393 8.44321C7.75678 8.38901 7.74075 8.33837 7.72496 8.28766L7.40605 7.26369C7.07064 6.18681 6.73523 5.10993 6.40068 4.03277C6.31632 3.76114 6.25782 3.48421 6.26618 3.19694C6.26861 3.11316 6.27338 3.02932 6.29156 2.94705H3.259C3.30057 2.95092 3.34215 2.95463 3.38374 2.95834L3.38378 2.95834C3.47503 2.96648 3.56628 2.97462 3.65734 2.9845C4.00473 3.02216 4.3428 3.0994 4.66242 3.24549C5.09396 3.44272 5.44045 3.7341 5.63629 4.18259C5.78499 4.52314 5.81958 4.88165 5.78406 5.24936C5.73811 5.72511 5.52907 6.11185 5.16541 6.41398C5.0473 6.5121 4.91945 6.59582 4.77596 6.67389L4.81309 6.68976L4.81311 6.68977L4.81315 6.68979C4.838 6.70036 4.86004 6.70973 4.8818 6.71974C4.91646 6.73568 4.95087 6.75221 4.9848 6.76966C5.47743 7.023 5.84706 7.38992 6.01873 7.93462C6.12895 8.28436 6.1462 8.64305 6.10239 9.00618C6.04697 9.46554 5.8717 9.86631 5.53829 10.1884C5.1696 10.5445 4.71713 10.7266 4.22671 10.8264C3.98995 10.8746 3.75044 10.9014 3.50913 10.9163H3.67461L4.28423 10.9163C5.629 10.9163 6.97375 10.9162 8.31851 10.9175C8.36825 10.9175 8.39093 10.9043 8.41032 10.8555C8.85641 9.73178 9.30326 8.60841 9.7501 7.48504L9.75054 7.48392C10.1224 6.54908 10.4943 5.61424 10.8657 4.67923ZM2.34669 7.30899L2.34668 7.30899C2.34499 7.31036 2.34329 7.31173 2.34159 7.31281V9.74112C2.34743 9.74247 2.35325 9.74398 2.35907 9.74549L2.35908 9.7455C2.37154 9.74874 2.384 9.75198 2.39665 9.75357C2.56575 9.77479 2.73468 9.76811 2.90415 9.75469C3.13265 9.73658 3.35574 9.69444 3.56944 9.61012C4.19813 9.36204 4.43223 8.84398 4.31281 8.22959C4.24522 7.88184 4.01973 7.65357 3.71106 7.50462C3.28055 7.29687 2.82038 7.29028 2.35768 7.30301C2.35397 7.30311 2.35033 7.30605 2.34669 7.30899ZM2.34159 4.10951C2.34396 4.10828 2.34631 4.10671 2.34867 4.10514C2.35369 4.10179 2.35871 4.09844 2.36382 4.09832C2.70109 4.09025 3.03794 4.09131 3.35941 4.2158C3.64944 4.32811 3.88428 4.50871 3.96927 4.82458C4.11264 5.35737 3.93446 5.87094 3.36259 6.11215C3.04305 6.24693 2.70726 6.27117 2.36688 6.26614C2.36114 6.26606 2.35539 6.26621 2.34963 6.26637L2.34959 6.26637L2.34159 6.26656V4.10951Z", "fill", "currentColor"], [3, "isMobile", "data"], [1, "my-2", 3, "isMobile"], [1, "position-relative", 3, "swipe", "isMobile"], ["width", "36", "height", "36", 1, "mb-3", 3, "iconName"]],
        template: function(n, o) {
            n & 1 && f(0, Ri, 10, 1),
            n & 2 && h(o.data() ? 0 : -1)
        },
        dependencies: [Et, Dt, Ft, X],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var Ui = e => ({
    active: e
});
function $i(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "div", 2),
        T("click", function() {
            let n = I(i).$implicit
              , o = p();
            return V(o.changeTab(n))
        }),
        u(1),
        s()
    }
    if (e & 2) {
        let i = r.$implicit
          , t = p();
        m("id", "market-view-industry-tab-" + i.key)("ngClass", j(3, Ui, t.selectedTab() === i.key)),
        l(),
        w(" ", i.title, " ")
    }
}
var Nt = ( () => {
    let r = class r {
        constructor(t) {
            this.marketViewIndustryService = t,
            this.selectedTab = P(this.marketViewIndustryService.selectedTab),
            this.isMobile = b(!1),
            this.tabs = [{
                key: pe.symbolSigns,
                title: "\u0646\u0645\u0627\u062F\u0647\u0627\u06CC \u0645\u062B\u0628\u062A \u0648 \u0645\u0646\u0641\u06CC"
            }, {
                key: pe.dealValues,
                title: "\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062A"
            }, {
                key: pe.realBuyPower,
                title: "\u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC"
            }]
        }
        changeTab(t) {
            this.marketViewIndustryService.selectedTab.next(t.key)
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(ce))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-industry-tabs"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 3,
        vars: 0,
        consts: [[1, "tabs-handler-type2", "d-flex", "border-bottom", "flex-shrink-0", "bg-principal-3x", "bg-principal-4x-dark-mobile", "border-principal-4x", "border-opacity-25"], [1, "text-center", "p-2", "cup", "active", 3, "id", "ngClass"], [1, "text-center", "p-2", "cup", "active", 3, "click", "id", "ngClass"]],
        template: function(n, o) {
            n & 1 && (a(0, "div", 0),
            F(1, $i, 2, 5, "div", 1, $),
            s()),
            n & 2 && (l(),
            B(o.tabs))
        },
        dependencies: [Q],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var At = ( () => {
    let r = class r {
        constructor() {
            this.isMobile = b(!1),
            this.item = b(null)
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-industry-symbol-sign-item"]],
        inputs: {
            isMobile: [1, "isMobile"],
            item: [1, "item"]
        },
        decls: 15,
        vars: 9,
        consts: [[1, "col", "p-0"], [1, "d-flex", "justify-content-between"], [1, "flex-shrink-0", "d-inline-block", "text-center", 2, "width", "20px"], ["dir", "ltr", 1, "flex-grow-1", "my-1"], [1, "bg-success", "h-100", "rounded-1"], [1, "col-4", "p-0"], ["placement", "right", 1, "text-truncate", 3, "ngbTooltip", "title"], [1, "flex-grow-1", "my-1"], [1, "bg-danger", "h-100", "rounded-1"]],
        template: function(n, o) {
            n & 1 && (a(0, "div", 0)(1, "div", 1)(2, "span", 2),
            u(3),
            s(),
            a(4, "div", 3),
            d(5, "div", 4),
            s()()(),
            a(6, "div", 5)(7, "div", 6),
            u(8),
            s()(),
            a(9, "div", 0)(10, "div", 1)(11, "div", 7),
            d(12, "div", 8),
            s(),
            a(13, "span", 2),
            u(14),
            s()()()),
            n & 2 && (l(3),
            k(o.item().positiveCount),
            l(2),
            ie("width", o.item().positivePercent, "%"),
            l(2),
            Ne("title", o.item().industryName),
            m("ngbTooltip", o.isMobile() ? o.item().industryName : null),
            l(),
            w(" ", o.item().industryName, " "),
            l(4),
            ie("width", o.item().negativePercent, "%"),
            l(2),
            k(o.item().negativeCount))
        },
        dependencies: [Re],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
function ji(e, r) {
    if (e & 1 && d(0, "market-view-industry-symbol-sign-item", 8),
    e & 2) {
        let i = r.$implicit
          , t = p(3);
        m("isMobile", t.isMobile())("item", i)
    }
}
function Ki(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "div", 0)(1, "div", 2)(2, "div", 3),
        T("click", function() {
            I(i);
            let n = p(2);
            return V(n.sortChange(n.SortFields.positiveCount))
        }),
        u(3, " \u0646\u0645\u0627\u062F\u200C\u0647\u0627\u06CC \u0645\u062B\u0628\u062A "),
        d(4, "svg-icon", 4),
        s(),
        a(5, "div", 5),
        T("click", function() {
            I(i);
            let n = p(2);
            return V(n.sortChange(n.SortFields.industryName))
        }),
        a(6, "span"),
        u(7, "\u0635\u0646\u0639\u062A"),
        s(),
        d(8, "svg-icon", 4),
        s(),
        a(9, "div", 6),
        T("click", function() {
            I(i);
            let n = p(2);
            return V(n.sortChange(n.SortFields.negativeCount))
        }),
        u(10, " \u0646\u0645\u0627\u062F\u200C\u0647\u0627\u06CC \u0645\u0646\u0641\u06CC "),
        d(11, "svg-icon", 4),
        s()(),
        a(12, "div", 7),
        F(13, ji, 1, 2, "market-view-industry-symbol-sign-item", 8, $),
        s()()
    }
    if (e & 2) {
        let i = p()
          , t = p();
        l(4),
        ne("line-height-20px ms-1" + t.getIconClass(t.SortFields.positiveCount)),
        m("iconName", t.getIconName(t.SortFields.positiveCount)),
        l(4),
        ne("line-height-20px ms-1" + t.getIconClass(t.SortFields.industryName)),
        m("iconName", t.getIconName(t.SortFields.industryName)),
        l(3),
        ne("line-height-20px ms-1" + t.getIconClass(t.SortFields.negativeCount)),
        m("iconName", t.getIconName(t.SortFields.negativeCount)),
        l(2),
        B(i)
    }
}
function Qi(e, r) {
    if (e & 1 && (a(0, "div", 1),
    d(1, "svg-icon", 9),
    u(2, " \u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u062C\u0647\u062A \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F "),
    s()),
    e & 2) {
        let i = p(2);
        l(),
        m("iconName", i.icons.Alert)
    }
}
function Hi(e, r) {
    if (e & 1 && f(0, Ki, 15, 9, "div", 0)(1, Qi, 3, 1, "div", 1),
    e & 2) {
        let i = p();
        h(r.length || i.loading() ? 0 : 1)
    }
}
var $e = function(e) {
    return e.negativeCount = "negativeCount",
    e.positiveCount = "positiveCount",
    e.industryName = "industryName",
    e
}($e || {})
  , Lt = ( () => {
    let r = class r {
        get SortFields() {
            return $e
        }
        constructor(t, n) {
            this.marketViewIndustryService = t,
            this.userSortStorageService = n,
            this.icons = W,
            this.locationKey = "SymbolSignsIndustryList",
            this.currentSortState = new Y({
                field: $e.industryName,
                direction: A.asc
            }),
            this.isMobile = E(!1),
            this.loading = P(this.marketViewIndustryService.isLoading$),
            this.sortFieldTypes = new Map().set($e.positiveCount, new be(new Pe)).set($e.negativeCount, new be(new Pe)).set($e.industryName, new be(new Le)),
            this.subscriptions = [],
            this.SortState = {
                [A.none]: "sort",
                [A.asc]: "sort-up",
                [A.decs]: "sort-down"
            }
        }
        ngOnInit() {
            let t = this.userSortStorageService.getLocationSort(this.locationKey);
            t.field && t.sortDirection && this.currentSortState.next({
                field: t.field,
                direction: t.sortDirection
            }),
            this.obs$ = this.marketViewIndustryService.getIndustrySymbolSignsData().pipe(this.mapIndustryData());
            let n = Ce(6e4).pipe(U( () => {
                this.obs$ = this.marketViewIndustryService.getIndustrySymbolSignsData().pipe(this.mapIndustryData())
            }
            )).subscribe();
            this.subscriptions.push(n);
            let o = this.currentSortState.pipe(U(c => {
                this.userSortStorageService.setByKey({
                    sortDirection: c.direction,
                    locationKey: this.locationKey,
                    field: c.field
                }),
                this.obs$?.next(this.obs$?.destination._value)
            }
            )).subscribe();
            this.subscriptions.push(o)
        }
        mapIndustryData() {
            return J(t => {
                if (t) {
                    let n = g => {
                        let M = g[0];
                        for (let H = 1; H < g.length; H++)
                            M < g[H] && (M = g[H]);
                        return M
                    }
                      , o = g => t.map(M => ae(K({}, M), {
                        positivePercent: 100 * M.positiveCount / g | 0,
                        negativePercent: 100 * M.negativeCount / g | 0
                    }))
                      , c = n(t.map(g => g.negativeCount))
                      , C = n(t.map(g => g.positiveCount));
                    return o(c < C ? C : c).sort(this.sortFieldTypes.get(this.currentSortState.value.field).compareFunction(this.currentSortState.value.field, this.currentSortState.value.direction))
                } else
                    return []
            }
            )
        }
        ngOnDestroy() {
            this.subscriptions.forEach(t => t.unsubscribe())
        }
        sortChange(t) {
            let n = this.currentSortState.value.direction === A.none || this.currentSortState.value.direction === A.decs ? A.asc : A.decs;
            this.currentSortState.next({
                direction: n,
                field: t
            })
        }
        sortNameClass(t) {
            return t === this.currentSortState.value.field ? ye.get(this.currentSortState.value.direction) : ye.get(A.none)
        }
        getIconName(t) {
            return this.getSortState(t)
        }
        getIconClass(t) {
            return this.getSortState(t) === "sort" ? "text-muted" : "text-global"
        }
        getSortState(t) {
            return this.currentSortState.value.field === t && this.SortState[this.currentSortState.value.direction] || "sort"
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(ce),y(Ue))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["symbol-signs-industry-list"]],
        decls: 2,
        vars: 3,
        consts: [[1, "h-100", "overflow-hidden", "d-flex", "flex-column"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "h-100", "text-muted"], [1, "d-flex", "small", "text-center", "mx-0", "fw-bold", "text-muted", "user-select-none", "flex-shrink-0"], [1, "col-5", "col-md-3", "p-2", "d-flex", "align-items-center", "justify-content-center", "cup", 3, "click"], ["width", "20", "height", "20", 3, "iconName"], [1, "col-3", "col-md-6", "p-2", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "col-4", "col-md-3", "p-2", "d-flex", "align-items-center", "justify-content-center", "cup", 3, "click"], [1, "h-100", "overflow-auto", "bg-principal", "bg-principal-3x-dark-mobile", "py-2"], ["data-cy", "market-view-industry-symbol-sign-item", 1, "d-flex", "p-1", "gap-1", 3, "isMobile", "item"], ["width", "36", "height", "36", 1, "mb-3", 3, "iconName"]],
        template: function(n, o) {
            if (n & 1 && (f(0, Hi, 2, 1),
            _(1, "async")),
            n & 2) {
                let c;
                h((c = N(1, 1, o.obs$)) ? 0 : -1, c)
            }
        },
        dependencies: [ge, At, X],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var Ot = ( () => {
    let r = class r {
        constructor() {
            this.isMobile = b(!1),
            this.item = b(null)
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-industry-real-buy-power-item"]],
        inputs: {
            isMobile: [1, "isMobile"],
            item: [1, "item"]
        },
        decls: 7,
        vars: 6,
        consts: [[1, "col-5", "col-md-6"], ["placement", "left", 1, "text-truncate", 3, "title", "ngbTooltip"], ["dir", "ltr", 1, "col-4", "col-md-3", "px-0"], [1, "col-3"], [1, "rounded-1", "bg-global", 2, "height", "6px"]],
        template: function(n, o) {
            if (n & 1 && (a(0, "div", 0)(1, "div", 1),
            u(2),
            s()(),
            a(3, "div", 2),
            u(4),
            s(),
            a(5, "div", 3),
            d(6, "div", 4),
            s()),
            n & 2) {
                let c, C, v, g;
                l(),
                Ne("title", (c = o.item()) == null ? null : c.name),
                m("ngbTooltip", o.isMobile() ? (C = o.item()) == null ? null : C.name : null),
                l(),
                w(" ", (v = o.item()) == null ? null : v.name, " "),
                l(2),
                w(" ", (g = o.item()) == null || g.value == null ? null : g.value.toFixed(2), `
`),
                l(2),
                ie("width", o.item().percent, "%")
            }
        },
        dependencies: [Re],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
function qi(e, r) {
    return this.trackByFn
}
function Gi(e, r) {
    if (e & 1 && (a(0, "a", 8),
    d(1, "svg-icon", 12),
    s()),
    e & 2) {
        let i = p(3)
          , t = re(3);
        m("ngbPopover", t),
        l(),
        m("iconName", i.icons.QuestionBox)
    }
}
function Yi(e, r) {
    if (e & 1 && (a(0, "span", 9),
    d(1, "svg-icon", 12),
    s()),
    e & 2) {
        let i = p(3)
          , t = re(3);
        m("autoClose", !0)("ngbPopover", t),
        l(),
        m("iconName", i.icons.QuestionBox)
    }
}
function zi(e, r) {
    if (e & 1 && d(0, "market-view-industry-real-buy-power-item", 11),
    e & 2) {
        let i = r.$implicit
          , t = p(3);
        m("isMobile", t.isMobile())("item", i)
    }
}
function Wi(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "div", 1)(1, "div", 3)(2, "div", 4),
        T("click", function() {
            I(i);
            let n = p(2);
            return V(n.sortChange(n.SortFields.name))
        }),
        a(3, "span"),
        u(4, "\u0635\u0646\u0639\u062A"),
        s(),
        d(5, "svg-icon", 5),
        s(),
        a(6, "div", 6),
        T("click", function() {
            I(i);
            let n = p(2);
            return V(n.sortChange(n.SortFields.value))
        }),
        a(7, "span"),
        u(8, "\u0646\u0633\u0628\u062A"),
        s(),
        d(9, "svg-icon", 5),
        s(),
        a(10, "div", 7),
        f(11, Gi, 2, 2, "a", 8)(12, Yi, 2, 3, "span", 9),
        s()(),
        a(13, "div", 10),
        F(14, zi, 1, 2, "market-view-industry-real-buy-power-item", 11, qi, !0),
        _(16, "async"),
        s()()
    }
    if (e & 2) {
        let i = p(2);
        l(5),
        ot("ms-1 ", i.sortNameClass(i.SortFields.name), " ", i.getIconClass(i.SortFields.name), ""),
        m("iconName", i.getIconName(i.SortFields.name)),
        l(4),
        ot("ms-1 ", i.sortNameClass(i.SortFields.value), " ", i.getIconClass(i.SortFields.value), ""),
        m("iconName", i.getIconName(i.SortFields.value)),
        l(2),
        h(i.isMobile() ? -1 : 11),
        l(),
        h(i.isMobile() ? 12 : -1),
        l(2),
        B(N(16, 12, i.obs$))
    }
}
function Xi(e, r) {
    if (e & 1 && (a(0, "div", 2),
    d(1, "svg-icon", 13),
    u(2, " \u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u062C\u0647\u062A \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F "),
    s()),
    e & 2) {
        let i = p(2);
        l(),
        m("iconName", i.icons.Alert)
    }
}
function Zi(e, r) {
    if (e & 1 && (f(0, Wi, 17, 14, "div", 1),
    _(1, "async"),
    f(2, Xi, 3, 1, "div", 2)),
    e & 2) {
        let i = p();
        h(N(1, 1, i.obs$).length || i.loading() ? 0 : 2)
    }
}
function Ji(e, r) {
    e & 1 && (a(0, "span", 16),
    u(1, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F "),
    s())
}
function en(e, r) {
    e & 1 && (a(0, "a", 17),
    u(1, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F "),
    s())
}
function tn(e, r) {
    if (e & 1 && (a(0, "div", 14),
    u(1, "\u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC"),
    s(),
    a(2, "div", 15),
    u(3, "\u0628\u0647 \u062D\u0627\u0635\u0644 \u062A\u0642\u0633\u06CC\u0645 \u0633\u0631\u0627\u0646\u0647 \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC \u0628\u0647 \u0633\u0631\u0627\u0646\u0647 \u0641\u0631\u0648\u0634 \u062D\u0642\u06CC\u0642\u06CC \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u062D\u0642\u06CC\u0642\u06CC \u06AF\u0641\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F."),
    s(),
    f(4, Ji, 2, 0, "span", 16)(5, en, 2, 0, "a", 17)),
    e & 2) {
        let i = p();
        l(4),
        h(i.isMobile() ? -1 : 4),
        l(),
        h(i.isMobile() ? 5 : -1)
    }
}
var Ke = function(e) {
    return e.value = "value",
    e.name = "name",
    e
}(Ke || {})
  , Rt = ( () => {
    let r = class r {
        get SortFields() {
            return Ke
        }
        constructor(t, n) {
            this.marketViewIndustryService = t,
            this.userSortStorageService = n,
            this.icons = W,
            this.locationKey = "RealBuyPowerIndustryList",
            this.currentSortState = new Y({
                field: Ke.value,
                direction: A.asc
            }),
            this.isMobile = b(!1),
            this.loading = P(this.marketViewIndustryService.isLoading$),
            this.sortFieldTypes = new Map().set(Ke.name, new be(new Le)).set(Ke.value, new be(new Pe)),
            this.subscriptions = [],
            this.SortState = {
                [A.none]: "sort",
                [A.asc]: "sort-up",
                [A.decs]: "sort-down"
            }
        }
        ngOnInit() {
            let t = this.userSortStorageService.getLocationSort(this.locationKey);
            t.field && t.sortDirection && this.currentSortState.next({
                field: t.field,
                direction: t.sortDirection
            }),
            this.obs$ = this.marketViewIndustryService.getIndustryRealBuyPowerData().pipe(this.mapIndustryData());
            let n = Ce(6e4).pipe(U( () => {
                this.obs$ = this.marketViewIndustryService.getIndustryRealBuyPowerData().pipe(this.mapIndustryData())
            }
            )).subscribe();
            this.subscriptions.push(n);
            let o = this.currentSortState.pipe(U(c => {
                this.userSortStorageService.setByKey({
                    sortDirection: c.direction,
                    locationKey: this.locationKey,
                    field: c.field
                }),
                this.obs$?.next(this.obs$?.destination._value)
            }
            )).subscribe();
            this.subscriptions.push(o)
        }
        mapIndustryData() {
            return J(t => {
                if (t) {
                    let n = v => {
                        let g = v[0];
                        for (let M = 1; M < v.length; M++)
                            g < v[M] && (g = v[M]);
                        return g
                    }
                      , o = v => t.map(g => ae(K({}, g), {
                        value: g.value ?? 0,
                        percent: 100 * (g.value ?? 0) / v | 0
                    }))
                      , c = n(t.map(v => v.value));
                    return o(c).sort(this.sortFieldTypes.get(this.currentSortState.value.field).compareFunction(this.currentSortState.value.field, this.currentSortState.value.direction))
                } else
                    return []
            }
            )
        }
        ngOnDestroy() {
            this.subscriptions.forEach(t => t.unsubscribe())
        }
        sortChange(t) {
            let n = this.currentSortState.value.direction === A.none || this.currentSortState.value.direction === A.decs ? A.asc : A.decs;
            this.currentSortState.next({
                direction: n,
                field: t
            })
        }
        sortNameClass(t) {
            return t === this.currentSortState.value.field ? ye.get(this.currentSortState.value.direction) : ye.get(A.none)
        }
        trackByFn(t, n) {
            return n.isin
        }
        getIconName(t) {
            return this.getSortState(t)
        }
        getIconClass(t) {
            return this.getSortState(t) === "sort" ? "text-muted" : "text-global"
        }
        getSortState(t) {
            return this.currentSortState.value.field === t && this.SortState[this.currentSortState.value.direction] || "sort"
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(ce),y(Ue))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["real-buy-power-industry-list"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 4,
        vars: 3,
        consts: [["help", ""], [1, "h-100", "overflow-hidden", "d-flex", "flex-column"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "h-100", "text-muted"], [1, "d-flex", "small", "text-center", "mx-0", "fw-bold", "text-muted", "user-select-none", "flex-shrink-0"], [1, "col-5", "col-md-6", "p-2", "text-start", 3, "click"], ["width", "20", "height", "20", 3, "iconName"], [1, "col-4", "col-md-3", "px-0", "py-2", "d-flex", "align-items-center", "justify-content-start", "cup", 3, "click"], [1, "col-3", "col-md-3", "p-2", "text-end"], ["triggers", "mouseenter:mouseleave", "container", "body", "href", "https://learning.emofid.com/introducing-the-market-view-in-easy-trader/#purchasepower", "target", "_blank", 3, "ngbPopover"], ["container", "body", 3, "autoClose", "ngbPopover"], [1, "bg-principal", "list-group", "list-group-flush", "overflow-auto"], [1, "d-flex", "align-items-center", "list-group-item", 3, "isMobile", "item"], ["width", "18", "height", "18", 1, "cup", "text-muted", 3, "iconName"], ["width", "36", "height", "36", 1, "mb-3", 3, "iconName"], [1, "mb-1", "fw-bold", "text-center"], [1, "mb-2"], [1, "d-block", "small", "text-end", "text-primary", "mt-1"], ["href", "https://learning.emofid.com/introducing-the-market-view-in-easy-trader/#purchasepower", "target", "_blank", 1, "d-block", "small", "text-end", "text-primary", "mt-1"]],
        template: function(n, o) {
            n & 1 && (f(0, Zi, 3, 3),
            _(1, "async"),
            f(2, tn, 6, 2, "ng-template", null, 0, _e)),
            n & 2 && h(N(1, 1, o.obs$) ? 0 : -1)
        },
        dependencies: [ge, Te, Ot, X],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var Ut = ( () => {
    let r = class r {
        constructor() {
            this.isMobile = b(!1),
            this.item = b(null)
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-industry-deal-values-item"]],
        inputs: {
            isMobile: [1, "isMobile"],
            item: [1, "item"]
        },
        decls: 8,
        vars: 9,
        consts: [[1, "col-5", "col-md-6"], ["placement", "left", 1, "text-truncate", 3, "title", "ngbTooltip"], ["dir", "ltr", 1, "col-4", "col-md-3", "px-0"], [1, "col-3"], [1, "rounded-1", "bg-global", 2, "height", "6px", "width", "100%"]],
        template: function(n, o) {
            n & 1 && (a(0, "div", 0)(1, "div", 1),
            u(2),
            s()(),
            a(3, "div", 2),
            u(4),
            _(5, "largeNumber"),
            s(),
            a(6, "div", 3),
            d(7, "div", 4),
            s()),
            n & 2 && (l(),
            Ne("title", o.item().industryName),
            m("ngbTooltip", o.isMobile() ? o.item().industryName : null),
            l(),
            w(" ", o.item().industryName, " "),
            l(2),
            w(" ", G(5, 6, o.item().totalTradeValue, 1), `
`),
            l(3),
            ie("width", o.item().totalTradeChangePercent, "%"))
        },
        dependencies: [we, Re],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
function nn(e, r) {
    return this.trackByFn
}
function rn(e, r) {
    if (e & 1 && (a(0, "a", 9),
    d(1, "svg-icon", 13),
    s()),
    e & 2) {
        let i = p(3)
          , t = re(3);
        m("ngbPopover", t),
        l(),
        m("iconName", i.icons.QuestionBox)
    }
}
function an(e, r) {
    if (e & 1 && (a(0, "span", 10),
    d(1, "svg-icon", 13),
    s()),
    e & 2) {
        let i = p(3)
          , t = re(3);
        m("ngbPopover", t)("autoClose", !0),
        l(),
        m("iconName", i.icons.QuestionBox)
    }
}
function on(e, r) {
    if (e & 1 && d(0, "market-view-industry-deal-values-item", 12),
    e & 2) {
        let i = r.$implicit
          , t = p(3);
        m("isMobile", t.isMobile())("item", i)
    }
}
function sn(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "div", 1)(1, "div", 3)(2, "div", 4),
        T("click", function() {
            I(i);
            let n = p(2);
            return V(n.sortChange(n.SortFields.industryName))
        }),
        a(3, "span"),
        u(4, "\u0635\u0646\u0639\u062A"),
        s(),
        d(5, "svg-icon", 5),
        s(),
        a(6, "div", 6),
        T("click", function() {
            I(i);
            let n = p(2);
            return V(n.sortChange(n.SortFields.value))
        }),
        a(7, "span"),
        u(8, "\u0627\u0631\u0632\u0634"),
        s(),
        a(9, "span", 7),
        u(10, "(\u0631\u06CC\u0627\u0644\u0621\u0621)"),
        s(),
        d(11, "svg-icon", 5),
        s(),
        a(12, "div", 8),
        f(13, rn, 2, 2, "a", 9)(14, an, 2, 3, "span", 10),
        s()(),
        a(15, "div", 11),
        F(16, on, 1, 2, "market-view-industry-deal-values-item", 12, nn, !0),
        s()()
    }
    if (e & 2) {
        let i = p()
          , t = p();
        m("id", "deal-value-list"),
        l(5),
        ne(t.getIconClass(t.SortFields.industryName)),
        m("iconName", t.getIconName(t.SortFields.industryName)),
        l(6),
        ne(t.getIconClass(t.SortFields.value)),
        m("iconName", t.getIconName(t.SortFields.value)),
        l(2),
        h(t.isMobile() ? -1 : 13),
        l(),
        h(t.isMobile() ? 14 : -1),
        l(2),
        B(i)
    }
}
function ln(e, r) {
    if (e & 1 && (a(0, "div", 2),
    d(1, "svg-icon", 14),
    u(2, " \u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u062C\u0647\u062A \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F "),
    s()),
    e & 2) {
        let i = p(2);
        l(),
        m("iconName", i.icons.Alert)
    }
}
function un(e, r) {
    if (e & 1 && f(0, sn, 18, 9, "div", 1)(1, ln, 3, 1, "div", 2),
    e & 2) {
        let i = p();
        h(r.length || i.loading() ? 0 : 1)
    }
}
function cn(e, r) {
    e & 1 && (a(0, "span", 17),
    u(1, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F "),
    s())
}
function dn(e, r) {
    e & 1 && (a(0, "a", 18),
    u(1, " \u0628\u0631\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F "),
    s())
}
function mn(e, r) {
    if (e & 1 && (a(0, "div", 15),
    u(1, "\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062A"),
    s(),
    a(2, "div", 16),
    u(3, " \u0628\u0647 \u0645\u062C\u0645\u0648\u0639 \u0627\u0631\u0632\u0634 \u06A9\u0644 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647 \u0628\u0631 \u0631\u0648\u06CC \u0633\u0647\u0627\u0645 \u0634\u0631\u06A9\u062A\u200C\u0647\u0627\u06CC \u0647\u0631 \u0635\u0646\u0639\u062A \u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0635\u0646\u0639\u062A \u0645\u06CC\u200C\u06AF\u0648\u06CC\u0646\u062F. \u062F\u0631 \u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062A\u0646\u0647\u0627 \u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062E\u0631\u062F \u0645\u062D\u0627\u0633\u0628\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0628\u0644\u0648\u06A9\u06CC \u0628\u0647 \u062D\u0633\u0627\u0628 \u0646\u0645\u06CC\u200C\u0622\u06CC\u062F. "),
    s(),
    f(4, cn, 2, 0, "span", 17)(5, dn, 2, 0, "a", 18)),
    e & 2) {
        let i = p();
        l(4),
        h(i.isMobile() ? -1 : 4),
        l(),
        h(i.isMobile() ? 5 : -1)
    }
}
var Qe = function(e) {
    return e.value = "totalTradeValue",
    e.industryName = "industryName",
    e
}(Qe || {})
  , $t = ( () => {
    let r = class r {
        get SortFields() {
            return Qe
        }
        constructor(t, n) {
            this.marketViewIndustryService = t,
            this.userSortStorageService = n,
            this.icons = W,
            this.locationKey = "DealValueIndustryList",
            this.currentSortState = new Y({
                field: Qe.value,
                direction: A.asc
            }),
            this.isMobile = E(!1),
            this.loading = P(this.marketViewIndustryService.isLoading$),
            this.sortFieldTypes = new Map().set(Qe.industryName, new be(new Le)).set(Qe.value, new be(new Pe)),
            this.subscriptions = [],
            this.SortState = {
                [A.none]: "sort",
                [A.asc]: "sort-up",
                [A.decs]: "sort-down"
            }
        }
        ngOnInit() {
            let t = this.userSortStorageService.getLocationSort(this.locationKey);
            t.field && t.sortDirection && this.currentSortState.next({
                field: t.field,
                direction: t.sortDirection
            }),
            this.obs$ = this.marketViewIndustryService.getIndustryDealValuesData().pipe(this.mapIndustryData());
            let n = Ce(6e4).pipe(U( () => {
                this.obs$ = this.marketViewIndustryService.getIndustryDealValuesData().pipe(this.mapIndustryData())
            }
            )).subscribe();
            this.subscriptions.push(n);
            let o = this.currentSortState.pipe(U(c => {
                this.userSortStorageService.setByKey({
                    sortDirection: c.direction,
                    locationKey: this.locationKey,
                    field: c.field
                }),
                this.obs$?.next(this.obs$?.destination._value)
            }
            )).subscribe();
            this.subscriptions.push(o)
        }
        mapIndustryData() {
            return J(t => {
                if (t) {
                    let n = v => {
                        let g = v[0];
                        for (let M = 1; M < v.length; M++)
                            g < v[M] && (g = v[M]);
                        return g
                    }
                      , o = v => t.map(g => ae(K({}, g), {
                        totalTradeChangePercent: 100 * g.totalTradeValue / v | 0
                    }))
                      , c = n(t.map(v => v.totalTradeValue));
                    return o(c).sort(this.sortFieldTypes.get(this.currentSortState.value.field).compareFunction(this.currentSortState.value.field, this.currentSortState.value.direction))
                } else
                    return []
            }
            )
        }
        ngOnDestroy() {
            this.subscriptions.forEach(t => t.unsubscribe())
        }
        sortChange(t) {
            let n = this.currentSortState.value.direction === A.none || this.currentSortState.value.direction === A.decs ? A.asc : A.decs;
            this.currentSortState.next({
                direction: n,
                field: t
            })
        }
        sortNameClass(t) {
            return t === this.currentSortState.value.field ? ye.get(this.currentSortState.value.direction) : ye.get(A.none)
        }
        trackByFn(t, n) {
            return n.industryCode
        }
        getIconName(t) {
            return this.getSortState(t)
        }
        getIconClass(t) {
            return this.getSortState(t) === "sort" ? "text-muted" : "text-global"
        }
        getSortState(t) {
            return this.currentSortState.value.field === t && this.SortState[this.currentSortState.value.direction] || "sort"
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(ce),y(Ue))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["deal-value-industry-list"]],
        decls: 4,
        vars: 3,
        consts: [["help", ""], [1, "h-100", "overflow-hidden", "d-flex", "flex-column", 3, "id"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "h-100", "text-muted"], [1, "d-flex", "small", "text-center", "mx-0", "fw-bold", "text-muted", "user-select-none", "flex-shrink-0"], [1, "col-5", "col-md-6", "p-2", "text-start", 3, "click"], ["width", "20", "height", "20", 1, "line-height-20px", "ms-1", 3, "iconName"], [1, "col-4", "col-md-3", "px-0", "py-2", "d-flex", "align-items-center", "justify-content-start", "cup", 3, "click"], [1, "text-muted", "ms-1"], [1, "col-3", "col-md-3", "p-2", "text-end"], ["triggers", "mouseenter:mouseleave", "container", "body", "href", "https://learning.emofid.com/introducing-the-market-view-in-easy-trader/#tradevalue", "target", "_blank", 3, "ngbPopover"], ["container", "body", 3, "ngbPopover", "autoClose"], [1, "bg-principal", "list-group", "list-group-flush", "overflow-auto"], [1, "d-flex", "align-items-center", "list-group-item", 3, "isMobile", "item"], ["width", "18", "height", "18", 1, "cup", "text-muted", 3, "iconName"], ["width", "36", "height", "36", 1, "mb-3", 3, "iconName"], [1, "mb-1", "fw-bold", "text-center"], [1, "mb-2"], [1, "d-block", "small", "text-end", "text-primary", "mt-1"], ["href", "https://learning.emofid.com/introducing-the-market-view-in-easy-trader/#tradevalue", "target", "_blank", 1, "d-block", "small", "text-end", "text-primary", "mt-1"]],
        template: function(n, o) {
            if (n & 1 && (f(0, un, 2, 1),
            _(1, "async"),
            f(2, mn, 6, 2, "ng-template", null, 0, _e)),
            n & 2) {
                let c;
                h((c = N(1, 1, o.obs$)) ? 0 : -1, c)
            }
        },
        dependencies: [ge, Te, Ut, X],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
function pn(e, r) {
    if (e & 1 && d(0, "symbol-signs-industry-list", 1),
    e & 2) {
        let i = p();
        m("isMobile", i.isMobile())
    }
}
function vn(e, r) {
    if (e & 1 && d(0, "real-buy-power-industry-list", 2),
    e & 2) {
        let i = p();
        m("isMobile", i.isMobile())
    }
}
function hn(e, r) {
    if (e & 1 && d(0, "deal-value-industry-list", 2),
    e & 2) {
        let i = p();
        m("isMobile", i.isMobile())
    }
}
var jt = ( () => {
    let r = class r {
        constructor(t) {
            this.marketViewIndustryService = t,
            this.selectTab = P(this.marketViewIndustryService.selectedTab),
            this.isMobile = b(!1),
            this.symbolSigns = pe.symbolSigns,
            this.dealValues = pe.dealValues,
            this.realBuyPower = pe.realBuyPower
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(ce))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-industry"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 4,
        vars: 2,
        consts: [[1, "flex-shrink-0", 3, "isMobile"], [1, "h-100", "overflow-auto", "text-center", 3, "isMobile"], [1, "h-100", "overflow-auto", 3, "isMobile"]],
        template: function(n, o) {
            if (n & 1 && (d(0, "market-view-industry-tabs", 0),
            f(1, pn, 1, 1, "symbol-signs-industry-list", 1)(2, vn, 1, 1, "real-buy-power-industry-list", 2)(3, hn, 1, 1, "deal-value-industry-list", 2)),
            n & 2) {
                let c;
                m("isMobile", o.isMobile()),
                l(),
                h((c = o.selectTab()) === o.symbolSigns ? 1 : c === o.realBuyPower ? 2 : c === o.dealValues ? 3 : -1)
            }
        },
        dependencies: [Nt, Lt, Rt, $t],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
function Kt(e, r) {
    return this.trackByFn
}
var Qt = (e, r) => ({
    "text-success": e,
    "text-danger": r
})
  , Ht = (e, r) => ({
    "text-danger": e,
    "text-success": r
});
function Cn(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "div", 9),
        T("tap", function() {
            let n = I(i).$implicit
              , o = p(3);
            return V(o.handlerItemClick(n))
        }),
        a(1, "div", 10)(2, "div"),
        d(3, "symbol-state", 11),
        a(4, "span"),
        u(5),
        s()(),
        a(6, "div", 12)(7, "span", 13),
        u(8, "\u062A\u0639\u062F\u0627\u062F:"),
        s(),
        u(9),
        _(10, "number"),
        s()(),
        a(11, "div", 10)(12, "div"),
        u(13),
        _(14, "number"),
        s(),
        a(15, "div"),
        _(16, "number"),
        a(17, "span", 14),
        u(18),
        _(19, "largeNumber"),
        s()()(),
        a(20, "div", 10)(21, "div")(22, "small", 15),
        u(23),
        _(24, "undefinedDashNumber"),
        s(),
        a(25, "span"),
        u(26),
        _(27, "number"),
        s()(),
        a(28, "div")(29, "span", 16),
        u(30),
        s(),
        u(31),
        _(32, "number"),
        s()()()
    }
    if (e & 2) {
        let i = r.$implicit;
        l(3),
        m("stateColor", i.stateColor),
        l(2),
        k(i.symbolName),
        l(4),
        w(" ", i.totalNumberOfTrades ? N(10, 12, i.totalNumberOfTrades) : "-", " "),
        l(4),
        w(" ", i.totalNumberOfSharesTraded ? N(14, 14, i.totalNumberOfSharesTraded) : "-", " "),
        l(2),
        me("title", G(16, 16, i.totalTradeValue, "1.0-0")),
        l(3),
        k(i.totalTradeValue ? G(19, 19, i.totalTradeValue, 1) : "-"),
        l(4),
        m("ngClass", De(29, Qt, i.tradePriceVar > 0, i.tradePriceVar < 0)),
        l(),
        w("", G(24, 22, i.tradePriceVar, "1.0-2"), "%"),
        l(3),
        k(i.lastTradedPrice ? N(27, 25, i.lastTradedPrice) : "-"),
        l(3),
        m("ngClass", De(32, Ht, (i == null ? null : i.closingPriceVarPercent) < 0, (i == null ? null : i.closingPriceVarPercent) > 0)),
        l(),
        w(" ", (i == null ? null : i.totalNumberOfSharesTraded) > 0 ? i == null ? null : i.closingPriceVarPercent : 0, "% "),
        l(),
        w("", i.closePrice ? N(32, 27, i.closePrice) : "-", " ")
    }
}
function gn(e, r) {
    if (e & 1 && (a(0, "div", 1)(1, "div", 3)(2, "div", 4)(3, "span", 5)(4, "span"),
    u(5, "\u0646\u0645\u0627\u062F"),
    s(),
    d(6, "br"),
    a(7, "span"),
    u(8, "\u062A\u0639\u062F\u0627\u062F"),
    s()()(),
    a(9, "div", 4)(10, "span", 5)(11, "span"),
    u(12),
    s(),
    d(13, "br"),
    a(14, "span"),
    u(15, "\u0627\u0631\u0632\u0634"),
    s()()(),
    a(16, "div", 4)(17, "span", 5)(18, "span"),
    u(19, "\u0622\u062E\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A"),
    s(),
    d(20, "br"),
    a(21, "span"),
    u(22, "\u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC"),
    s()()()(),
    a(23, "div", 6)(24, "div", 7),
    F(25, Cn, 33, 35, "div", 8, Kt, !0),
    s()()()),
    e & 2) {
        let i = p(2);
        l(12),
        k(i.volumeTitle()),
        l(13),
        B(i.data())
    }
}
function bn(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "tr", 22),
        T("tap", function() {
            let n = I(i).$implicit
              , o = p(3);
            return V(o.handlerItemClick(n))
        }),
        a(1, "td"),
        d(2, "symbol-state", 11),
        a(3, "span"),
        u(4),
        s()(),
        a(5, "td"),
        u(6),
        _(7, "number"),
        s(),
        a(8, "td"),
        u(9),
        _(10, "number"),
        s(),
        a(11, "td"),
        _(12, "number"),
        a(13, "span", 14),
        u(14),
        _(15, "largeNumber"),
        s()(),
        a(16, "td")(17, "small", 15),
        u(18),
        _(19, "undefinedDashNumber"),
        s(),
        a(20, "span"),
        u(21),
        _(22, "number"),
        s()(),
        a(23, "td")(24, "span", 23),
        u(25),
        s(),
        u(26),
        _(27, "number"),
        s()()
    }
    if (e & 2) {
        let i = r.$implicit;
        l(2),
        m("stateColor", i.stateColor),
        l(2),
        k(i.symbolName),
        l(2),
        k(i.totalNumberOfTrades ? N(7, 12, i.totalNumberOfTrades) : "-"),
        l(3),
        k(i.totalNumberOfSharesTraded ? N(10, 14, i.totalNumberOfSharesTraded) : "-"),
        l(2),
        me("title", G(12, 16, i.totalTradeValue, "1.0-0")),
        l(3),
        k(i.totalTradeValue ? G(15, 19, i.totalTradeValue, 1) : "-"),
        l(3),
        m("ngClass", De(29, Qt, (i == null ? null : i.tradePriceVar) > 0, (i == null ? null : i.tradePriceVar) < 0)),
        l(),
        w("", G(19, 22, i == null ? null : i.tradePriceVar, "1.0-2"), "%"),
        l(3),
        k(i != null && i.lastTradedPrice ? N(22, 25, i == null ? null : i.lastTradedPrice) : "-"),
        l(3),
        m("ngClass", De(32, Ht, (i == null ? null : i.closingPriceVarPercent) < 0, (i == null ? null : i.closingPriceVarPercent) > 0)),
        l(),
        w(" ", (i == null ? null : i.totalNumberOfSharesTraded) > 0 ? i == null ? null : i.closingPriceVarPercent : 0, "% "),
        l(),
        w(" ", i.closePrice ? N(27, 27, i.closePrice) : "-", " ")
    }
}
function yn(e, r) {
    if (e & 1 && (a(0, "table", 2)(1, "thead")(2, "tr")(3, "th", 17),
    u(4, "\u0646\u0645\u0627\u062F"),
    s(),
    a(5, "th", 18),
    u(6, "\u0645\u0639\u0627\u0645\u0644\u0627\u062A"),
    s(),
    a(7, "th", 19),
    u(8, "\u0642\u06CC\u0645\u062A"),
    s()(),
    a(9, "tr")(10, "th", 20),
    u(11, "\u062A\u0639\u062F\u0627\u062F"),
    s(),
    a(12, "th", 20),
    u(13),
    s(),
    a(14, "th", 20),
    u(15, "\u0627\u0631\u0632\u0634"),
    s(),
    a(16, "th", 20),
    u(17, "\u0622\u062E\u0631\u06CC\u0646"),
    s(),
    a(18, "th", 20),
    u(19, "\u067E\u0627\u06CC\u0627\u0646\u06CC"),
    s()()(),
    a(20, "tbody"),
    F(21, bn, 28, 35, "tr", 21, Kt, !0),
    s()()),
    e & 2) {
        let i = p(2);
        l(13),
        k(i.volumeTitle()),
        l(8),
        B(i.data())
    }
}
function xn(e, r) {
    if (e & 1 && f(0, gn, 27, 1, "div", 1)(1, yn, 23, 1, "table", 2),
    e & 2) {
        let i = p();
        h(i.isMobile() ? 0 : -1),
        l(),
        h(i.isMobile() ? -1 : 1)
    }
}
function Sn(e, r) {
    if (e & 1 && (a(0, "div", 0),
    d(1, "svg-icon", 24),
    u(2, " \u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u062C\u0647\u062A \u0646\u0645\u0627\u06CC\u0634 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F "),
    s()),
    e & 2) {
        let i = p();
        l(),
        m("iconName", i.icons.Alert)
    }
}
var qt = ( () => {
    let r = class r {
        constructor(t, n, o) {
            this.activeSymbolService = t,
            this.topRankService = n,
            this.router = o,
            this.icons = W,
            this.isMobile = b(!1),
            this.data = b(null),
            this.volumeTitle = E("\u062D\u062C\u0645"),
            this.isLoading = P(this.topRankService.isLoading$),
            this.tabChangeSub = P(this.topRankService.selectedTab$),
            ke( () => {
                this.volumeTitle.set(this.getVolumeTitle(this.tabChangeSub()))
            }
            )
        }
        getVolumeTitle(t) {
            let {TOP_RANK_MOST_DEMAND: n, TOP_RANK_MOST_SUPPLY: o} = this.topRankService.urlKeys
              , c = this.topRankService.tabs.find(v => v.key === n)?.key
              , C = this.topRankService.tabs.find(v => v.key === o)?.key;
            return t === c ? "\u062D\u062C\u0645 \u062E\u0631\u06CC\u062F\u0627\u0631" : t === C ? "\u062D\u062C\u0645 \u0641\u0631\u0648\u0634\u0646\u062F\u0647" : "\u062D\u062C\u0645"
        }
        trackByFn(t, n) {
            return n.symbolIsin
        }
        handlerItemClick(t) {
            this.isMobile() ? this.router.navigate(["/stock-details", t.symbolIsin]) : this.activeSymbolService.setActiveIsin(t.symbolIsin)
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(Tt),y(Ve),y(ft))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-top-rank-list"]],
        inputs: {
            isMobile: [1, "isMobile"],
            data: [1, "data"]
        },
        decls: 2,
        vars: 1,
        consts: [[1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "h-100", "text-muted"], [1, "h-100", "overflow-hidden", "d-flex", "flex-column"], [1, "table", "table-striped", "table-hover", "bg-principal"], [1, "d-flex", "small", "text-center", "mx-0", "fw-bold", "text-muted", "user-select-none", "flex-shrink-0"], [1, "col-4", "py-1", "px-2", "d-flex", "align-items-center"], [1, "d-inline-block"], [1, "bg-principal", "list-group", "list-group-flush", "overflow-auto"], [1, "list-group", "list-group-flush"], ["data-cy", "market-view-top-rank-list-item", 1, "d-flex", "align-items-center", "list-group-item", "bg-principal", "bg-principal-3x-dark-mobile", "px-0", "py-1"], ["data-cy", "market-view-top-rank-list-item", 1, "d-flex", "align-items-center", "list-group-item", "bg-principal", "bg-principal-3x-dark-mobile", "px-0", "py-1", 3, "tap"], [1, "col-4", "px-1"], [3, "stateColor"], [1, "ps-1"], [1, "small", "text-muted", "me-1"], ["dir", "ltr"], ["dir", "ltr", 3, "ngClass"], ["dir", "ltr", "id", "symbol-header-closing-span-21", 1, "me-1", "small", 3, "ngClass"], ["rowspan", "2", 1, "align-middle", "py-1"], ["colspan", "3", 1, "py-1", "text-center"], ["colspan", "2", 1, "py-1", "text-center"], [1, "py-1"], ["data-cy", "market-view-top-rank-list-item", 1, "cup"], ["data-cy", "market-view-top-rank-list-item", 1, "cup", 3, "tap"], ["dir", "ltr", "id", "symbol-header-closing-span-2", 1, "me-1", "small", 3, "ngClass"], ["width", "36", "height", "36", 1, "mb-3", 3, "iconName"]],
        template: function(n, o) {
            if (n & 1 && f(0, xn, 2, 2)(1, Sn, 3, 1, "div", 0),
            n & 2) {
                let c;
                h((c = o.data()) != null && c.length || o.isLoading() ? 0 : 1)
            }
        },
        dependencies: [Ae, Q, gt, we, xt, X],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var _n = e => ({
    active: e
});
function kn(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "div", 4),
        T("click", function() {
            let n = I(i).$implicit
              , o = p();
            return o.selectedTab.set(n),
            V(o.changeTab(n))
        }),
        u(1),
        s()
    }
    if (e & 2) {
        let i = r.$implicit
          , t = p();
        m("id", "market-view-top-rank-" + i.id)("ngClass", j(3, _n, t.selectedTab().key === i.key)),
        l(),
        w(" ", i.title, " ")
    }
}
function wn(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "div", 6),
        T("click", function() {
            let n = I(i).$implicit
              , o = p(2);
            return V(o.changeTab(n))
        }),
        a(1, "label", 7),
        d(2, "input", 8),
        a(3, "span"),
        u(4),
        s()()()
    }
    if (e & 2) {
        let i = r.$implicit
          , t = p(2);
        l(),
        m("for", i.id),
        l(),
        m("id", i.id)("value", i.id)("checked", i.id === t.selectedTab().details[0].id),
        l(2),
        k(i.title)
    }
}
function Tn(e, r) {
    if (e & 1 && (a(0, "div", 3),
    F(1, wn, 5, 5, "div", 5, $),
    s()),
    e & 2) {
        let i = p();
        l(),
        B(i.selectedTab().details)
    }
}
var Gt = ( () => {
    let r = class r {
        constructor(t) {
            this.topRankService = t,
            this.selectedTab = E(this.topRankService.tabs[0])
        }
        ngOnInit() {
            this.changeTab(this.topRankService.tabs[0])
        }
        changeTab(t) {
            this.topRankService.selectedTab.value !== t.key && (this.topRankService.getMarketViewByResource(t.key),
            this.topRankService.selectedTab.next(t.key))
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(Ve))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-top-rank-tabs"]],
        decls: 5,
        vars: 1,
        consts: [[1, "scroll-horizontal-wrapper"], [1, "scroll-horizontal-inner", "tabs-handler-type2", "d-flex", "border-bottom", "border-principal-4x-dark", "bg-principal-4x-dark-mobile", "flex-shrink-0", "bg-principal-3x", "border-principal-4x", "border-opacity-25"], [1, "flex-fill", "text-center", "p-2", "cup", "d-flex", "align-items-center", "justify-content-center", 3, "id", "ngClass"], [1, "d-flex", "align-items-center", "p-2", "gap-4"], [1, "flex-fill", "text-center", "p-2", "cup", "d-flex", "align-items-center", "justify-content-center", 3, "click", "id", "ngClass"], [1, "radio-custom", "cup"], [1, "radio-custom", "cup", 3, "click"], [2, "margin-top", "2px", 3, "for"], ["type", "radio", "name", "radio", 1, "form-check-input", 3, "id", "value", "checked"]],
        template: function(n, o) {
            n & 1 && (a(0, "div", 0)(1, "div", 1),
            F(2, kn, 2, 5, "div", 2, $),
            s()(),
            f(4, Tn, 3, 0, "div", 3)),
            n & 2 && (l(2),
            B(o.topRankService.tabs),
            l(2),
            h(o.selectedTab().details ? 4 : -1))
        },
        dependencies: [Q],
        styles: [`.form-check[_ngcontent-%COMP%]{display:block;padding-right:1.5em;padding-left:0}.form-check-input[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:.25em;vertical-align:top;background-image:var(--bs-form-check-bg-image);background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid #495057;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;print-color-adjust:exact}.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{float:right;margin-right:-1.5em;margin-left:0}.form-check-input[_ngcontent-%COMP%]:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem #0d6efd40}.form-check-input[_ngcontent-%COMP%]:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input[_ngcontent-%COMP%]:checked[type=radio]{--bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e")}.form-check-input[type=radio][_ngcontent-%COMP%]{border-radius:50%}
/*# sourceMappingURL=market-view-top-rank-tabs.style-6RJORI2O.css.map */`],
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
function Mn(e, r) {
    if (e & 1 && (d(0, "market-view-top-rank-list", 0),
    _(1, "async")),
    e & 2) {
        let i = p();
        m("isMobile", i.isMobile())("data", N(1, 2, i.getObservable(i.selectedTab())))
    }
}
var Yt = ( () => {
    let r = class r {
        constructor(t, n) {
            this.topRankService = t,
            this.symbolService = n,
            this.isMobile = b(!1),
            this.selectedTab = P(this.topRankService.selectedTab)
        }
        ngOnDestroy() {
            this.pipeSubscription?.unsubscribe(),
            this.topRankService.unsubscribeLs()
        }
        getObservable(t) {
            return (this.dataObservable = this.topRankService.dataStore.find(n => n.url === t)?.observable).pipe(J(n => (n?.forEach(o => {
                o.stateColor = Ze(o.stateCode),
                o.symbolName = this.symbolService.symbols?.find(c => c.symbolIsin === o.symbolIsin)?.symbolName ?? o.symbolName,
                this.topRankService.selectedTab.value === this.topRankService.tabs.find(c => c.key === this.topRankService.urlKeys.TOP_RANK_MOST_DEMAND).key ? o.totalNumberOfSharesTraded = o.topBuyVolume : this.topRankService.selectedTab.value === this.topRankService.tabs.find(c => c.key === this.topRankService.urlKeys.TOP_RANK_MOST_SUPPLY).key && (o.totalNumberOfSharesTraded = o.topSellVolume),
                o.closingPriceVarPercent = this.symbolService.calculateClosingPriceVarPercent(o.closePrice, o.yesterdayPrice, o.totalNumberOfSharesTraded) || 0
            }
            ),
            n)))
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(Ve),y(wt))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-top-rank"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 2,
        vars: 1,
        consts: [[1, "flex-grow-1", "overflow-auto", "bg-principal", 3, "isMobile", "data"]],
        template: function(n, o) {
            n & 1 && (d(0, "market-view-top-rank-tabs"),
            f(1, Mn, 2, 4, "market-view-top-rank-list", 0)),
            n & 2 && (l(),
            h(o.selectedTab() ? 1 : -1))
        },
        dependencies: [ge, qt, Gt],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var In = e => ({
    active: e
});
function Vn(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "div", 2),
        T("click", function() {
            let n = I(i).$implicit
              , o = p();
            return V(o.changeTab(n))
        }),
        u(1),
        s()
    }
    if (e & 2) {
        let i = r.$implicit
          , t = p();
        m("id", "market-view-universal-" + i.id)("ngClass", j(3, In, t.selectedTab().key === i.key)),
        l(),
        w(" ", i.title, " ")
    }
}
var zt = ( () => {
    let r = class r {
        constructor(t) {
            this.universalService = t,
            this.isMobile = b(),
            this.tabs = [{
                key: this.universalService.urlKeys.UNIVERSAL_ONS,
                title: "\u0641\u0644\u0632\u0627\u062A \u06AF\u0631\u0627\u0646\u0628\u0647\u0627",
                id: "Ons"
            }, {
                key: this.universalService.urlKeys.UNIVERSAL_BASE_METAL,
                title: "\u0641\u0644\u0632\u0627\u062A \u0627\u0633\u0627\u0633\u06CC",
                id: "BaseMetals"
            }, {
                key: this.universalService.urlKeys.UNIVERSAL_OIL_AND_ENERGY,
                title: "\u0646\u0641\u062A \u0648 \u0627\u0646\u0631\u0698\u06CC",
                id: "OilAndEnergy"
            }],
            this.selectedTab = E(this.tabs[0])
        }
        ngOnInit() {
            this.changeTab(this.tabs[0])
        }
        ngOnDestroy() {
            this.dataInterval?.unsubscribe()
        }
        changeTab(t) {
            this.universalService.selectedTab.value !== t.key && (this.universalService.getMarketViewByResource(t.key),
            this.dataInterval?.unsubscribe(),
            this.dataInterval = Ce(6e4).pipe(U( () => {
                this.universalService.getMarketViewByResource(t.key)
            }
            )).subscribe(),
            this.selectedTab.set(t),
            this.universalService.selectedTab.next(t.key))
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(de))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-universal-tabs"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 3,
        vars: 0,
        consts: [[1, "tabs-handler-type2", "d-flex", "border-bottom", "flex-shrink-0", "bg-principal-3x", "border-principal-4x", "bg-principal-4x-dark-mobile", "border-opacity-25"], [1, "text-center", "p-2", "cup", 3, "id", "ngClass"], [1, "text-center", "p-2", "cup", 3, "click", "id", "ngClass"]],
        template: function(n, o) {
            n & 1 && (a(0, "div", 0),
            F(1, Vn, 2, 5, "div", 1, $),
            s()),
            n & 2 && (l(),
            B(o.tabs))
        },
        dependencies: [Q],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var En = (e, r) => ({
    "text-success": e,
    "text-danger": r
});
function Dn(e, r) {
    if (e & 1 && d(0, "svg-icon", 10),
    e & 2) {
        let i = p();
        ne(i.item().chperc > 0 ? "text-success" : "text-muted"),
        m("iconName", i.item().chperc > 0 ? "trending-up" : "trending-soso")
    }
}
function Pn(e, r) {
    if (e & 1 && d(0, "svg-icon", 9),
    e & 2) {
        let i = p();
        m("iconName", i.icons.TrendingDown)
    }
}
var Wt = ( () => {
    let r = class r {
        constructor(t) {
            this.marketViewUniversalService = t,
            this.icons = W,
            this.item = b(null),
            this.selected = b(!1)
        }
        changeType(t) {
            this.marketViewUniversalService.selectedType.next(t)
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(de))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-universal-list-item"]],
        inputs: {
            item: [1, "item"],
            selected: [1, "selected"]
        },
        decls: 15,
        vars: 15,
        consts: [[1, "d-flex", "justify-content-between", "align-items-center", "cup", 3, "click"], [1, "col", "p-0"], [1, "form-check", "form-check-reverse"], ["type", "radio", "name", "customRadio", 1, "form-check-input", "cup", 3, "id", "checked"], [1, "form-check-label", "cup", "ps-1", 3, "for"], [1, "col", "text-center", "p-0"], ["dir", "ltr", 3, "ngClass"], [1, "col", "text-end", "p-0"], ["width", "24", "height", "24", 1, "px-1", 3, "iconName", "class"], ["width", "24", "height", "24", 1, "px-1", "text-danger", 3, "iconName"], ["width", "24", "height", "24", 1, "px-1", 3, "iconName"]],
        template: function(n, o) {
            n & 1 && (a(0, "div", 0),
            T("click", function() {
                return o.changeType(o.item())
            }),
            a(1, "div", 1)(2, "div", 2),
            d(3, "input", 3),
            a(4, "label", 4),
            u(5),
            s()()(),
            a(6, "div", 5)(7, "span", 6),
            u(8),
            s()(),
            a(9, "div", 7)(10, "span"),
            u(11),
            _(12, "number"),
            s(),
            f(13, Dn, 1, 3, "svg-icon", 8)(14, Pn, 1, 1, "svg-icon", 9),
            s()()),
            n & 2 && (ne((o.selected(),
            "")),
            l(3),
            m("id", "customRadio-" + o.item().abbr)("checked", o.marketViewUniversalService.selectedType.value.abbr === o.item().abbr),
            l(),
            m("for", "customRadio-" + o.item().abbr),
            l(),
            k(o.item().nameFa),
            l(2),
            m("ngClass", De(12, En, o.item().chperc > 0, o.item().chperc < 0)),
            l(),
            w("", o.item().chperc, "%"),
            l(3),
            w("", N(12, 10, o.item().close), " "),
            l(2),
            h(o.item().chperc >= 0 ? 13 : o.item().chperc < 0 ? 14 : -1))
        },
        dependencies: [Ae, Q, X],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
function Fn(e, r) {
    if (e & 1 && d(0, "market-view-universal-list-item", 6),
    e & 2) {
        let i = r.$implicit
          , t = p();
        m("selected", t.marketViewUniversalService.selectedType.value.abbr === i.abbr)("item", i)
    }
}
var Xt = ( () => {
    let r = class r {
        constructor(t) {
            this.marketViewUniversalService = t,
            this.isMobile = b(!1),
            this.data = b(null),
            ke( () => {
                this.data()?.length && this.marketViewUniversalService.selectedType.value === void 0 && this.marketViewUniversalService.selectedType.next(this.data()[0])
            }
            )
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(de))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-universal-list"]],
        inputs: {
            isMobile: [1, "isMobile"],
            data: [1, "data"]
        },
        decls: 12,
        vars: 0,
        consts: [[1, "list-group", "list-group-flush", "bg-principal", "rounded", "p-2", "mt-2"], [1, "d-flex", "justify-content-between", "align-items-center", "text-muted", "my-2", "px-2"], [1, "col", "px-0"], [1, "col", "text-center", "px-0"], [1, "col", "text-end", "px-0"], [1, "text-muted"], ["data-cy", "market-view-universal-list-item", 1, "list-group-item", 3, "selected", "item"]],
        template: function(n, o) {
            n & 1 && (a(0, "div", 0)(1, "div", 1)(2, "div", 2),
            u(3, "\u06A9\u0627\u0645\u0648\u062F\u06CC\u062A\u06CC"),
            s(),
            a(4, "div", 3),
            u(5, "\u0628\u0627\u0632\u062F\u0647"),
            s(),
            a(6, "div", 4),
            u(7, " \u0622\u062E\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A "),
            a(8, "small", 5),
            u(9, "(\u062F\u0644\u0627\u0631)"),
            s()()(),
            F(10, Fn, 1, 2, "market-view-universal-list-item", 6, $),
            s()),
            n & 2 && (l(10),
            B(o.data()))
        },
        dependencies: [Wt],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var Bn = e => ({
    active: e
});
function Nn(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "button", 7),
        T("click", function() {
            let n = I(i).$implicit
              , o = p();
            return V(o.selectTrend(n.key))
        }),
        a(1, "small"),
        u(2),
        s()()
    }
    if (e & 2) {
        let i = r.$implicit
          , t = p();
        m("ngClass", j(2, Bn, t.selectedTrend() === i.key)),
        l(2),
        k(i.name)
    }
}
var Zt = ( () => {
    let r = class r {
        constructor(t) {
            this.marketViewUniversalService = t,
            this.isMobile = b(!1),
            this.d3LineChart = ze(Me),
            this.chartTypeObservable = new ct,
            this.trendTypes = [{
                key: O.daily,
                name: "\u0631\u0648\u0632"
            }, {
                key: O.weekly,
                name: "\u0647\u0641\u062A\u0647"
            }, {
                key: O.monthly,
                name: "\u0645\u0627\u0647"
            }, {
                key: O.tripleMonth,
                name: "3\u0645\u0627\u0647"
            }, {
                key: O.yearly,
                name: "\u0633\u0627\u0644"
            }, {
                key: O.tripleYear,
                name: "3\u0633\u0627\u0644"
            }],
            this.selectedTrend = E(O.weekly),
            this.selectedType = E(null),
            this.chartTypeObservable.subscribe({
                next: n => {
                    let o = this.marketViewUniversalService.getCommodityHistory(n.type, n.time).pipe(qe( () => {
                        o.unsubscribe()
                    }
                    ), Ge(c => !c), xe(1)).subscribe({
                        next: c => {
                            let C = [];
                            this.selectedTrend() !== O.daily ? c.forEach(v => {
                                let g = new Date(v.date)
                                  , M = Je.getFormattedJDate(g);
                                C.push({
                                    d: M,
                                    v: v.close
                                })
                            }
                            ) : c.forEach(v => {
                                let g = new Date(v.date).toTimeString().split(":")
                                  , M = `${g[0]}:${g[1]}`;
                                C.push({
                                    v: v.close,
                                    d: M
                                })
                            }
                            ),
                            C.sort( (v, g) => +v.d.replace(/\//g, "") - +g.d.replace(/\//g, "")),
                            setTimeout( () => {
                                this.d3LineChart().chartData = C,
                                this.d3LineChart().drawChart()
                            }
                            , 200)
                        }
                    })
                }
            })
        }
        ngAfterViewInit() {
            this.marketViewUniversalService.selectedType.subscribe({
                next: t => {
                    t && (this.selectedType.set(t),
                    this.chartTypeObservable.next({
                        type: t?.abbr,
                        time: this.selectedTrend()
                    }))
                }
            })
        }
        ngOnDestroy() {
            this.chartTypeObservable?.unsubscribe()
        }
        selectTrend(t) {
            this.selectedTrend.set(t),
            this.chartTypeObservable.next({
                type: this.selectedType()?.abbr,
                time: this.selectedTrend()
            })
        }
        preventSwipe() {}
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(de))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-universal-chart"]],
        viewQuery: function(n, o) {
            n & 1 && We(o.d3LineChart, Me, 5),
            n & 2 && Xe()
        },
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 12,
        vars: 5,
        consts: [[1, "d-flex", "justify-content-between", "align-items-center", "tabs"], [1, "px-1"], [1, "col-auto", "ms-auto", "pe-0"], [1, "tabs-holder", "bg-transparent", 2, "min-height", "0"], [1, "btn", "btn-sm", "tab", 2, "box-shadow", "none", 3, "ngClass"], [1, "py-2", "px-2", 3, "swipe"], ["chartId", "universal-chart", 3, "zoomable", "selectedTrend", "isMobile"], [1, "btn", "btn-sm", "tab", 2, "box-shadow", "none", 3, "click", "ngClass"]],
        template: function(n, o) {
            if (n & 1 && (a(0, "div", 0)(1, "div")(2, "span"),
            u(3),
            s(),
            a(4, "span", 1),
            u(5),
            s()(),
            a(6, "div", 2)(7, "div", 3),
            F(8, Nn, 3, 4, "button", 4, $),
            s()()(),
            a(10, "div", 5),
            T("swipe", function() {
                return o.preventSwipe()
            }),
            d(11, "lib-d3-line-chart", 6),
            s()),
            n & 2) {
                let c, C;
                l(3),
                k((c = o.selectedType()) == null ? null : c.nameFa),
                l(2),
                k((C = o.selectedType()) == null ? null : C.abbr),
                l(3),
                B(o.trendTypes),
                l(3),
                m("zoomable", !1)("selectedTrend", o.selectedTrend())("isMobile", o.isMobile())
            }
        },
        dependencies: [Q, Me],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
function An(e, r) {
    if (e & 1 && d(0, "market-view-universal-list", 3),
    e & 2) {
        let i = p();
        m("isMobile", i.isMobile())("data", i.switchSelectTab())
    }
}
var Jt = ( () => {
    let r = class r {
        constructor(t) {
            this.universalService = t,
            this.isMobile = b(),
            this.selectTab = P(this.universalService.selectedTab),
            this.switchSelectTab = P(this.universalService.selectedTab.pipe(J(n => this.universalService.dataStore.find(o => o.url === n)?.observable), Be(Boolean), Ee(n => n)))
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(de))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-universal"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 12,
        vars: 3,
        consts: [[3, "isMobile"], [1, "h-100", "overflow-auto", "p-2"], [1, "bg-principal", "bg-principal-3x-dark", "rounded", "p-2", "d-block", 3, "isMobile"], [3, "isMobile", "data"], [1, "mt-auto", "text-center"], ["href", "https://bv.emofid.com", "target", "_blank", 1, "d-inline-flex", "gap-1", "align-items-center", "my-2", "small"], [1, "text-secondary"], [1, "rounded", "bg-global", "text-global", "bg-opacity-10", "p-1"], ["width", "18", "height", "18", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3 0C1.34315 0 0 1.34315 0 3V11C0 12.6569 1.34315 14 3 14H11C12.6569 14 14 12.6569 14 11V3C14 1.34315 12.6569 0 11 0H3ZM10.8657 4.67923C11.1069 4.07182 11.3747 3.47905 11.7579 2.94705L9.5917 2.94707C9.5934 2.98409 9.59529 3.02111 9.59718 3.05814V3.05816L9.59719 3.05819L9.59719 3.05822C9.60133 3.1393 9.60548 3.22039 9.60754 3.30153C9.61484 3.58756 9.54994 3.86002 9.45057 4.12526C9.04896 5.19713 8.64717 6.26893 8.24537 7.34074L8.24272 7.34781L8.24123 7.35178L7.8237 8.46558L7.80037 8.52684L7.774 8.44342L7.77393 8.44321C7.75678 8.38901 7.74075 8.33837 7.72496 8.28766L7.40605 7.26369C7.07064 6.18681 6.73523 5.10993 6.40068 4.03277C6.31632 3.76114 6.25782 3.48421 6.26618 3.19694C6.26861 3.11316 6.27338 3.02932 6.29156 2.94705H3.259C3.30057 2.95092 3.34215 2.95463 3.38374 2.95834L3.38378 2.95834C3.47503 2.96648 3.56628 2.97462 3.65734 2.9845C4.00473 3.02216 4.3428 3.0994 4.66242 3.24549C5.09396 3.44272 5.44045 3.7341 5.63629 4.18259C5.78499 4.52314 5.81958 4.88165 5.78406 5.24936C5.73811 5.72511 5.52907 6.11185 5.16541 6.41398C5.0473 6.5121 4.91945 6.59582 4.77596 6.67389L4.81309 6.68976L4.81311 6.68977L4.81315 6.68979C4.838 6.70036 4.86004 6.70973 4.8818 6.71974C4.91646 6.73568 4.95087 6.75221 4.9848 6.76966C5.47743 7.023 5.84706 7.38992 6.01873 7.93462C6.12895 8.28436 6.1462 8.64305 6.10239 9.00618C6.04697 9.46554 5.8717 9.86631 5.53829 10.1884C5.1696 10.5445 4.71713 10.7266 4.22671 10.8264C3.98995 10.8746 3.75044 10.9014 3.50913 10.9163H3.67461L4.28423 10.9163C5.629 10.9163 6.97375 10.9162 8.31851 10.9175C8.36825 10.9175 8.39093 10.9043 8.41032 10.8555C8.85641 9.73178 9.30326 8.60841 9.7501 7.48504L9.75054 7.48392C10.1224 6.54908 10.4943 5.61424 10.8657 4.67923ZM2.34669 7.30899L2.34668 7.30899C2.34499 7.31036 2.34329 7.31173 2.34159 7.31281V9.74112C2.34743 9.74247 2.35325 9.74398 2.35907 9.74549L2.35908 9.7455C2.37154 9.74874 2.384 9.75198 2.39665 9.75357C2.56575 9.77479 2.73468 9.76811 2.90415 9.75469C3.13265 9.73658 3.35574 9.69444 3.56944 9.61012C4.19813 9.36204 4.43223 8.84398 4.31281 8.22959C4.24522 7.88184 4.01973 7.65357 3.71106 7.50462C3.28055 7.29687 2.82038 7.29028 2.35768 7.30301C2.35397 7.30311 2.35033 7.30605 2.34669 7.30899ZM2.34159 4.10951C2.34396 4.10828 2.34631 4.10671 2.34867 4.10514C2.35369 4.10179 2.35871 4.09844 2.36382 4.09832C2.70109 4.09025 3.03794 4.09131 3.35941 4.2158C3.64944 4.32811 3.88428 4.50871 3.96927 4.82458C4.11264 5.35737 3.93446 5.87094 3.36259 6.11215C3.04305 6.24693 2.70726 6.27117 2.36688 6.26614C2.36114 6.26606 2.35539 6.26621 2.34963 6.26637L2.34959 6.26637L2.34159 6.26656V4.10951Z", "fill", "currentColor"]],
        template: function(n, o) {
            n & 1 && (d(0, "market-view-universal-tabs", 0),
            a(1, "div", 1),
            d(2, "market-view-universal-chart", 2),
            f(3, An, 1, 2, "market-view-universal-list", 3),
            s(),
            a(4, "div", 4)(5, "a", 5)(6, "span", 6),
            u(7, "\u0628\u0627 \u0647\u0645\u06A9\u0627\u0631\u06CC "),
            s(),
            a(8, "div", 7),
            Ye(),
            a(9, "svg", 8),
            d(10, "path", 9),
            s(),
            u(11, " \u0628\u0648\u0631\u0633 \u0648\u06CC\u0648 "),
            s()()()),
            n & 2 && (m("isMobile", o.isMobile()),
            l(2),
            m("isMobile", o.isMobile()),
            l(),
            h(o.selectTab() ? 3 : -1))
        },
        dependencies: [zt, Xt, Zt],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
var Ln = e => ({
    active: e
})
  , rt = e => ({
    loading: e
});
function On(e, r) {
    if (e & 1) {
        let i = D();
        a(0, "li", 7),
        T("click", function() {
            let n = I(i).$implicit
              , o = p();
            return V(o.changeTab(n.key))
        }),
        a(1, "span", 8),
        u(2),
        s()()
    }
    if (e & 2) {
        let i = r.$implicit
          , t = p();
        m("id", "market-view-tabs-" + i.key),
        me("data-cy", "market-view-tabs-" + i.key),
        l(),
        m("ngClass", j(5, Ln, t.selectedTab() === i.key))("id", "market-view-tabs-span-" + i.key),
        l(),
        w(" ", i.title, " ")
    }
}
function Rn(e, r) {
    if (e & 1 && d(0, "market-view-bourse", 3),
    e & 2) {
        let i = p();
        m("isMobile", i.isMobile())("ngClass", j(2, rt, i.loadingView()))
    }
}
function Un(e, r) {
    if (e & 1 && d(0, "market-view-industry", 4),
    e & 2) {
        let i = p();
        m("isMobile", i.isMobile())("ngClass", j(2, rt, i.loadingIndustry()))
    }
}
function $n(e, r) {
    if (e & 1 && d(0, "market-view-top-rank", 5),
    e & 2) {
        let i = p();
        m("ngClass", j(2, rt, i.loadingTopRank()))("isMobile", i.isMobile())
    }
}
function jn(e, r) {
    if (e & 1 && d(0, "market-view-universal", 6),
    e & 2) {
        let i = p();
        m("ngClass", j(2, rt, i.loadingUniversal()))("isMobile", i.isMobile())
    }
}
var Bs = ( () => {
    let r = class r {
        constructor(t, n, o, c) {
            this.marketViewBourseService = t,
            this.marketViewIndustryService = n,
            this.marketViewTopRankService = o,
            this.marketViewUniversalService = c,
            this.isMobile = b(!1),
            this.loadingIndustry = P(this.marketViewIndustryService.isLoading$),
            this.loadingView = P(this.marketViewBourseService.isLoading$),
            this.loadingTopRank = P(this.marketViewTopRankService.isLoading$),
            this.loadingUniversal = P(this.marketViewUniversalService.isLoading$),
            this.tabs = [{
                key: "bourse-view",
                title: "\u0628\u0627\u0632\u0627\u0631 \u0628\u0648\u0631\u0633"
            }, {
                key: "industry-view",
                title: "\u0635\u0646\u0627\u06CC\u0639"
            }, {
                key: "top-rank-view",
                title: "\u0628\u06CC\u0634\u062A\u0631\u06CC\u0646\u200C\u0647\u0627"
            }, {
                key: "universal-view",
                title: "\u0628\u0627\u0632\u0627\u0631 \u062C\u0647\u0627\u0646\u06CC"
            }],
            this.selectedTab = E("bourse-view")
        }
        changeTab(t) {
            this.selectedTab.set(t)
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(ue),y(ce),y(Ve),y(de))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-orbis"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 8,
        vars: 1,
        consts: [[1, "tabs-handler", "d-flex", "align-items-center", "flex-shrink-0"], [1, "nav", "nav-tabs"], [1, "nav-item", 3, "id"], ["data-cy", "market-view-bourse", 1, "market-view-bourse", "d-flex", "flex-column", "h-100", "position-relative", "p-2", "overflow-auto", 3, "isMobile", "ngClass"], [1, "market-view-industry", "d-flex", "flex-column", "position-relative", "overflow-hidden", "h-100", 3, "isMobile", "ngClass"], [1, "market-view-top-rank", "d-flex", "flex-column", "position-relative", "overflow-hidden", "flex-grow-1", 3, "ngClass", "isMobile"], [1, "market-view-universal", "d-flex", "flex-column", "position-relative", "overflow-hidden", "flex-grow-1", 3, "ngClass", "isMobile"], [1, "nav-item", 3, "click", "id"], [1, "nav-link", 3, "ngClass", "id"]],
        template: function(n, o) {
            if (n & 1 && (a(0, "div", 0)(1, "ul", 1),
            F(2, On, 3, 7, "li", 2, $),
            s()(),
            f(4, Rn, 1, 4, "market-view-bourse", 3)(5, Un, 1, 4, "market-view-industry", 4)(6, $n, 1, 4, "market-view-top-rank", 5)(7, jn, 1, 4, "market-view-universal", 6)),
            n & 2) {
                let c;
                l(2),
                B(o.tabs),
                l(2),
                h((c = o.selectedTab()) === o.tabs[0].key ? 4 : c === o.tabs[1].key ? 5 : c === o.tabs[2].key ? 6 : c === o.tabs[3].key ? 7 : -1)
            }
        },
        dependencies: [Q, Bt, jt, Yt, Jt],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
function Kn(e, r) {
    if (e & 1 && (a(0, "div")(1, "span"),
    u(2),
    s(),
    a(3, "span"),
    u(4),
    s(),
    a(5, "span"),
    u(6),
    s(),
    a(7, "span"),
    u(8),
    s()()),
    e & 2) {
        let i, t, n, o, c = p();
        l(2),
        k((i = c.marketViewDataSignal()) == null || i.queueData == null ? null : i.queueData.buy),
        l(2),
        w(" - ", (t = c.marketViewDataSignal()) == null || t.queueData == null ? null : t.queueData.readyToBuy, " - "),
        l(2),
        w(" - ", (n = c.marketViewDataSignal()) == null || n.queueData == null ? null : n.queueData.readyToSell, " - "),
        l(2),
        k((o = c.marketViewDataSignal()) == null || o.queueData == null ? null : o.queueData.sell)
    }
}
var Us = ( () => {
    let r = class r {
        constructor(t) {
            this.marketViewBourseService = t,
            this.isMobile = b(!1),
            this.marketViewDataSignal = P(this.marketViewBourseService.dataStore.find(n => n.url === this.marketViewBourseService.urlKeys.BOURSE_VIEW).observable)
        }
    }
    ;
    r.\u0275fac = function(n) {
        return new (n || r)(y(ue))
    }
    ,
    r.\u0275cmp = x({
        type: r,
        selectors: [["market-view-bourse-queue"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 1,
        vars: 1,
        template: function(n, o) {
            n & 1 && f(0, Kn, 9, 4, "div"),
            n & 2 && h(o.marketViewDataSignal() ? 0 : -1)
        },
        encapsulation: 2,
        changeDetection: 0
    });
    let e = r;
    return e
}
)();
export {lt as a, nt as b, le as c, pe as d, ve as e, ti as f, ut as g, Mt as h, Ie as i, ue as j, ce as k, de as l, Ve as m, It as n, Vt as o, Et as p, Dt as q, Pt as r, Ft as s, Bt as t, Nt as u, At as v, Lt as w, Ot as x, Rt as y, Ut as z, $t as A, jt as B, qt as C, Gt as D, Yt as E, zt as F, Wt as G, Xt as H, Zt as I, Jt as J, Bs as K, Us as L};
//# sourceMappingURL=chunk-N6UAH77V.js.map
