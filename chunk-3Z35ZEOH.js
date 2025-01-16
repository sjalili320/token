import {m as tu} from "./chunk-KW67K7GE.js";
import {b as wt, c as pt, d as ou, e as ai, f as uu, h as ke, i as au, j as ru, k as su, l as Ce, m as lu, n as cu, o as du, p as Nt} from "./chunk-RLY667LZ.js";
import {$ as yu, Q as pu, Y as fu, Z as Cu, _ as hu, b as iu, n as mu, p as ha} from "./chunk-VTNMJBW4.js";
import {A as qe, O as ui, b as Go, c as Vn, f as Ko, h as On, la as nu, r as Yo, s as Qo, t as dt, u as en, v as zt, y as eu} from "./chunk-3R47PHPO.js";
import {a as We, b as oi, c as $e, e as Gt, f as mt} from "./chunk-E4T36IQ3.js";
import {a as Jo, c as Ui, d as Zo, h as nt, k as Xo} from "./chunk-O3BOZ3M4.js";
import {$c as Ht, A as Dn, Ac as ti, B as Yn, Bc as ni, Db as Nn, Ec as Ke, Fc as zo, Gb as Pn, Ia as Bo, Kb as Qn, Kc as fe, Lb as Jn, Lc as It, Mb as ji, Mc as Re, Na as jt, O as Mn, Ob as ct, P as Oi, Pb as jo, Q as pe, Rb as at, Sb as Zn, Vc as Ae, Wc as we, Xb as Uo, Zb as Xn, _c as ve, ca as $i, cb as Ut, db as Ro, dc as ei, ed as _n, hc as Ie, i as To, k as St, kd as ye, ld as At, md as ii, nc as Tt, ob as Wo, pa as Vo, pb as G, qb as $o, qd as gn, rb as Lt, rc as pn, tb as qo, tc as fn, uc as Lo, vc as Cn, wb as qi, xc as hn, y as cn, ya as tt, yc as yn, za as Oo, zc as Ho} from "./chunk-OFJ5SZPL.js";
import {$ as Ct, A as ao, Ac as r, Ad as ee, Ae as Ne, Bb as Wt, Bc as _, Ca as zn, Cb as Gn, Cd as Zt, Ce as Se, Dg as No, Ee as Io, Fa as co, Fb as s, Fc as I, Ga as Je, Gb as U, Gc as ho, Ge as Ao, H as k, Hc as h, He as Fe, I as wn, Ia as V, Ic as d, Ig as mn, J as an, Ja as En, Jc as yo, Kc as _o, Ke as Xe, La as vt, Lc as He, Le as wo, Mb as E, Me as ko, Mg as Po, N as ro, Nb as it, Ne as Eo, P as rn, Pa as X, Pc as go, Pd as z, Pe as Do, Q as so, Qc as vo, Qe as Mo, Rb as ot, Rc as bo, Rd as Fo, Re as Te, Se as et, T as Ve, Tc as ut, Te as he, Ua as Bt, Ub as N, Uc as bt, Va as y, Vc as Mt, Wc as l, Wf as Ri, Xc as T, Xd as xt, Yb as sn, Yc as F, Z as H, Zc as $t, Zf as Wi, _b as C, _d as se, a as P, ae as le, b as W, db as g, ea as Ln, eb as v, ed as Vi, fb as Pi, fd as q, g as Mi, gb as mo, gd as Oe, ha as lo, hb as Rt, hd as xo, he as ln, id as Kn, ja as Hn, jc as fo, jd as So, k as uo, kb as ht, kc as Co, ld as S, ma as st, mb as po, mc as Ze, md as A, na as me, nc as m, nd as ze, ne as O, ng as Xt, oa as kn, oe as Ge, p as Ot, pb as J, pc as Jt, pd as qt, pe as oe, pg as Ft, q as De, qb as w, qe as M, rc as Y, re as B, te as Bi, uc as f, ue as dn, v as gt, vc as Me, ve as lt, we as R, xc as ne, xe as Be, y as Ni, yc as ie, ye as xe, z as Z, zc as a} from "./chunk-K3475DQT.js";
var tn = t => t?.marketWatchState
  , _u = t => t.marketWatchMarketDataState?.entities
  , gu = we(_u, t => t)
  , vn = we(tn, t => t?.entities)
  , Li = we(tn, t => Object.values(t?.entities))
  , vu = we(vn, t => !!Object.values(t)?.length)
  , S6 = we(tn, t => t?.symbols)
  , bu = we(tn, _u, (t, o) => {
    let u;
    for (let e in t?.symbols)
        u[e] = P(P({}, t?.symbols[e]), o[e]);
    return u
}
)
  , xu = we(tn, t => t?.loading)
  , Su = we(tn, t => t?.tabType)
  , ri = we(tn, t => t?.selectedCategoryId)
  , F6 = we(ri, vn, (t, o) => o && t?.length > 0 ? o[t]?.categorySymbolIsins : [])
  , Fu = we(vn, t => Object.values(t).toSort( (o, u) => o.order - u.order).toSort( (o, u) => +u.isDefault - +o.isDefault));
var Hi = Mi(ha());
var bn = ( () => {
    let o = class o {
        constructor() {
            this.store = y(Ae),
            this.symbolService = y(nt),
            this.noteFacadeService = y(iu),
            this.messageFacade = y(pu),
            this.conditionService = y(mu),
            this.loading$ = this.store.select(xu),
            this.categories$ = this.store.select(vn),
            this.categories = this.store.selectSignal(vn),
            this.categoriesArray = this.store.selectSignal(Li),
            this.categoriesArray$ = this.store.select(Li),
            this.marketWatchMarketData$ = this.store.select(gu),
            this.marketWatchMarketData = M(this.marketWatchMarketData$),
            this.getMarketWatchSymbolsWithSymbolData$ = this.store.select(bu),
            this.getMarketWatchSymbolsWithSymbolData = M(this.getMarketWatchSymbolsWithSymbolData$),
            this.selectedCategoryId = this.store.selectSignal(ri),
            this.selectedCategoryId$ = this.store.select(ri),
            this.hasCategory = this.store.selectSignal(vu),
            this.sortedCategories = this.store.selectSignal(Fu),
            this.tabType = this.store.selectSignal(Su),
            this.selectedCategorySymbols$ = wn([this.selectedCategoryId$.pipe(Ve(Boolean)), this.categories$, this.noteFacadeService.userCountNotes$, this.messageFacade.messageCountObs$, this.conditionService.stockConditionSetCountObs$, this.symbolService.getSymbolsStream()]).pipe(k( ([e,n,i,c,p]) => {
                let b = n[e]?.categorySymbolIsins?.map(x => {
                    let D = p ? p.get(x) : void 0
                      , j = this.symbolService.symbolByIsin[x];
                    return {
                        id: (0,
                        Hi.uniqueId)(),
                        symbolName: j?.symbolName ?? x,
                        symbolIsin: x,
                        canBuy: j?.canBuy,
                        canSell: j?.canSell,
                        insCode: j?.insCode,
                        baseVolume: +(j?.baseVol ?? 0),
                        hasNote: i ? !!i.get(x) : !1,
                        hasMessage: c ? !!c.get(x) : !1,
                        hasAlarm: D ? !!D.count : !1,
                        alarmClass: D?.class || ""
                    }
                }
                ) || [];
                return {
                    id: e,
                    symbols: [...b]
                }
            }
            )),
            this.selectedCategorySymbols = M(this.selectedCategorySymbols$),
            this.allCategorySymbols$ = wn([this.categories$, this.symbolService.getSymbolsStream()]).pipe(k( ([e,n]) => {
                let i = [];
                for (let c in e) {
                    let p = e[c]?.categorySymbolIsins.map(b => {
                        let x = n?.find(D => D.symbolIsin === b);
                        return {
                            id: (0,
                            Hi.uniqueId)(),
                            symbolName: x?.symbolName ?? b,
                            symbolIsin: b,
                            canBuy: x?.canBuy,
                            canSell: x?.canSell,
                            insCode: x?.insCode,
                            baseVolume: +(x?.baseVol ?? 0)
                        }
                    }
                    ) || [];
                    i.push({
                        category: e[c],
                        symbols: [...p]
                    })
                }
                return i
            }
            )),
            this.allCategorySymbols = M(this.allCategorySymbols$)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var Bn = ( () => {
    let o = class o {
        constructor() {
            this.marketWatchStore = y(bn)
        }
        getCategoriesAsArray$() {
            return this.marketWatchStore.categoriesArray$
        }
        getCategoriesAsArray() {
            return this.marketWatchStore.categoriesArray() || []
        }
        getSortedCategories() {
            return this.marketWatchStore.sortedCategories() || []
        }
        getCategories$() {
            return this.marketWatchStore.categories$
        }
        getCategories() {
            return this.marketWatchStore.categories()
        }
        getSelectedCategoryId() {
            return this.marketWatchStore.selectedCategoryId() ?? ""
        }
        getSelectedCategoryId$() {
            return this.marketWatchStore.selectedCategoryId$
        }
        getSelectedCategory() {
            return this.marketWatchStore.selectedCategorySymbols()
        }
        getSelectedCategory$() {
            return this.marketWatchStore.selectedCategorySymbols$
        }
        getCategoriesWithFullSymbols$() {
            return this.marketWatchStore.allCategorySymbols$
        }
        getCategoriesWithFullSymbols() {
            return this.marketWatchStore.allCategorySymbols()
        }
        getMarketWatchMarketData$() {
            return this.marketWatchStore.marketWatchMarketData$
        }
        getMarketWatchMarketData() {
            return this.marketWatchStore.marketWatchMarketData()
        }
        getTabType() {
            return this.marketWatchStore.tabType()
        }
        hasCategory() {
            return this.marketWatchStore.hasCategory()
        }
        loading$() {
            return this.marketWatchStore.loading$
        }
        isSymbolExistsInMarketWatch$(e) {
            return this.marketWatchStore.categoriesArray$.pipe(k(n => n.map(i => i.categorySymbolIsins).flat().some(i => i === e)))
        }
        isSymbolExistsInSelectedMarketWatch$(e) {
            this.marketWatchStore.selectedCategorySymbols$.pipe(k(n => n.symbols.map(i => i.symbolIsin).some(i => i === e)))
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var si = ( () => {
    let o = class o {
        constructor() {
            this.symbol = E(void 0),
            this.symbolObs$ = oe(this.symbol).pipe(Ve(Boolean)),
            this.showCategoryOverlay = E(!1),
            this.showCategoryOverlayObs$ = oe(this.showCategoryOverlay),
            this.category = E(void 0),
            this.categoryObs$ = oe(this.category).pipe(Ve(Boolean)),
            this.showSymbolOverlay = E(!1),
            this.showSymbolOverlayObs$ = oe(this.showSymbolOverlay),
            this.showNewCatSection = E(!1),
            this.showNewCatSectionObs$ = oe(this.showNewCatSection)
        }
        setSymbol(e) {
            this.symbol.set(e)
        }
        setShowCategoryOverlay(e) {
            this.showCategoryOverlay.set(e)
        }
        setCategory(e) {
            this.category.set(e)
        }
        setShowSymbolOverlay(e) {
            this.showSymbolOverlay.set(e)
        }
        setShowNewCatSection(e) {
            this.showNewCatSection.set(e)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var xn = It({
    source: "MarketWatchMarketData",
    events: {
        upsertMarketDataItem: fe(),
        upsertMarketData: fe()
    }
});
var ud = ( () => {
    let o = class o {
        constructor() {
            this.store = y(Ae),
            this.lsService = y(Xn),
            this.marketDataService = y(ei),
            this.userDeviceService = y(jo),
            this.marketWatchStore = y(bn),
            this.symbolService = y(nt),
            this.timeService = y(Tt)
        }
        updateMarketDataItemStore(e) {
            this.store.dispatch(xn.upsertMarketDataItem({
                marketWatchMarketDataItem: e
            }))
        }
        upsertMarketDataItemsStore(e) {
            this.store.dispatch(xn.upsertMarketData({
                marketWatchMarketDataItems: e
            }))
        }
        getMarketDataWithApi(e) {
            let n = new Date().getTime()
              , i = [];
            return this.getStockDetailsMarketData(e).pipe(vt(this.marketWatchStore.marketWatchMarketData$), Je( ([c,p]) => Ni(c).pipe(k(b => ({
                apiItem: b,
                lastLsUpdateTime: p[b.symbolISIN]?.lsUpdatedTimestamp
            })))), k( ({apiItem: c, lastLsUpdateTime: p}) => {
                if (!p || p < n) {
                    let {closingPrice: b, feeOfPreviousDaysClosingPrice: x, totalNumberOfSharesTraded: D} = c
                      , j = W(P({}, c), {
                        symbolIsin: c.symbolISIN,
                        lastTradedPriceVarPercent: c.priceVar,
                        bestBuyLimitPrice: c.bestBuyPrice,
                        bestSellLimitPrice: c.bestSellPrice,
                        minDailyPrice: c.lowAllowedPrice,
                        maxDailyPrice: c.highAllowedPrice,
                        stateColor: $i(c.stateCode),
                        closingPriceVarPercent: qi(b, x, D) || 0
                    });
                    i.push(j)
                }
                return i
            }
            ), me( () => {
                this.upsertMarketDataItemsStore(i)
            }
            ))
        }
        getMarketDataWithLs(e) {
            return this.lsService.connectionState$.pipe(k(n => n === Mn.Connected ? Mn.Connected : Mn.Disconnected), Hn(), Ve(n => n === Mn.Connected && e.length > 0), Ln(1), Je( () => Ni(e).pipe(an(n => this.subscribeItemToLs(n)))))
        }
        subscribeItemToLs(e) {
            return this.lsService.subscribeToLs(Oi.MarketWatch, e).pipe(k(n => nu(n.val)), V(n => {
                n.symbolISIN = e;
                let {closingPrice: i, feeOfPreviousDaysClosingPrice: c, totalNumberOfSharesTraded: p} = n;
                this.updateMarketDataItemStore(W(P({}, n), {
                    symbolIsin: n.symbolISIN,
                    stateColor: $i(n.stateCode),
                    closingPriceVarPercent: qi(i, c, p) || 0,
                    lsUpdatedTimestamp: new Date().getTime()
                }))
            }
            ))
        }
        getStockDetailsMarketData(e) {
            return this.marketDataService.GetMarketData(0, e)
        }
        unsubscribeFromLs(e) {
            e.map(n => this.lsService.unsubscribeSchema(Oi.MarketWatch, n))
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var re = It({
    source: "MarketWatch",
    events: {
        loading: Re(),
        loaderEnd: Re(),
        loaderStart: Re(),
        loadCategoriesSuccess: fe(),
        categoryAdded: fe(),
        categoriesUpdated: fe(),
        categoryDeleted: fe(),
        selectedCategoryChanged: fe(),
        tabTypeChanged: fe(),
        apiMarketDataLoaded: fe(),
        updateSymbolData: fe(),
        symbolAddedToCategory: fe(),
        symbolRemovedFromCategory: fe()
    }
})
  , de = It({
    source: "MarketWatchApi",
    events: {
        loadCategories: Re(),
        loadedError: Re(),
        getMarketDataFromApi: fe(),
        addCategory: fe(),
        updateCategories: fe(),
        deleteCategory: fe(),
        addSymbolToCategory: fe(),
        addBatchSymbolToCategory: fe(),
        removeSymbolsFromCategory: fe()
    }
});
var yt = ( () => {
    let o = class o {
        constructor() {
            this.store = y(Ae),
            this.lsService = y(Xn)
        }
        loadCategories() {
            this.store.dispatch(de.loadCategories())
        }
        addCategory(e) {
            this.store.dispatch(re.loading()),
            this.store.dispatch(de.addCategory({
                category: e
            }))
        }
        updateCategories(e) {
            this.store.dispatch(de.updateCategories({
                categories: e
            }))
        }
        deleteCategory(e) {
            this.store.dispatch(de.deleteCategory({
                id: e
            }))
        }
        addSymbolToCategory(e, n, i) {
            this.store.dispatch(de.addSymbolToCategory({
                categoryId: e,
                newSymbolIsin: n,
                key: i
            }))
        }
        addBatchSymbolToCategory(e, n) {
            this.store.dispatch(de.addBatchSymbolToCategory({
                categoryId: e,
                newSymbolIsins: n
            }))
        }
        removeSymbolsFromCategory(e, n, i) {
            this.store.dispatch(de.removeSymbolsFromCategory({
                key: i,
                categoryId: e,
                removedSymbolIsins: n
            }))
        }
        changeSelectedCategory(e) {
            this.store.dispatch(re.selectedCategoryChanged({
                id: e
            }))
        }
        changeTabType(e) {
            this.store.dispatch(re.tabTypeChanged({
                tabType: e
            }))
        }
        updateSymbolDataInStore(e, n) {
            this.store.dispatch(re.updateSymbolData({
                symbolIsin: e,
                changes: n
            }))
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
function Tu(t) {
    return t.find(o => o.isDefault)
}
function _a(t) {
    return t.symbolIsin
}
var zi = Gt({
    selectId: _a
})
  , ga = zi.getInitialState();
function Iu(t, o) {
    return va(t, o)
}
var va = Ht(ga, ve(xn.upsertMarketDataItem, (t, {marketWatchMarketDataItem: o}) => zi.upsertOne(o, t)), ve(xn.upsertMarketData, (t, {marketWatchMarketDataItems: o}) => zi.upsertMany(o, t)));
var Q = function(t) {
    return t[t.SymbolName = 0] = "SymbolName",
    t[t.TradedVolume = 1] = "TradedVolume",
    t[t.TradedPrice = 2] = "TradedPrice",
    t[t.LastTradedPrice = 3] = "LastTradedPrice",
    t[t.ClosingPrice = 4] = "ClosingPrice",
    t[t.SupplyDemandPrice = 5] = "SupplyDemandPrice",
    t[t.SymbolCandle = 6] = "SymbolCandle",
    t[t.TradedValue = 7] = "TradedValue",
    t[t.TradedAmount = 8] = "TradedAmount",
    t[t.BasicVolume = 9] = "BasicVolume",
    t
}(Q || {});
var Rn = function(t) {
    return t[t.None = 0] = "None",
    t[t.Category = 1] = "Category",
    t[t.IPO = 2] = "IPO",
    t
}(Rn || {});
var Ye = function(t) {
    return t[t.None = 0] = "None",
    t[t.SymbolName = 1] = "SymbolName",
    t[t.TotalNumberOfSharesTraded = 2] = "TotalNumberOfSharesTraded",
    t[t.LastTradedPricePercentVar = 3] = "LastTradedPricePercentVar",
    t[t.ClosingPricePercentVar = 4] = "ClosingPricePercentVar",
    t[t.LastTradedPricePercentVariation = 5] = "LastTradedPricePercentVariation",
    t[t.ClosingPricePercentVariation = 6] = "ClosingPricePercentVariation",
    t[t.SellLimitPrice = 7] = "SellLimitPrice",
    t[t.BuyLimitPrice = 8] = "BuyLimitPrice",
    t[t.TotalTradeValue = 9] = "TotalTradeValue",
    t[t.TotalNumberOfTrades = 10] = "TotalNumberOfTrades",
    t[t.BaseVolume = 11] = "BaseVolume",
    t
}(Ye || {})
  , li = function(t) {
    return t[t.None = 0] = "None",
    t[t.ASC = 1] = "ASC",
    t[t.DESC = 2] = "DESC",
    t
}(li || {});
var Kt = Gt({
    selectId: t => t.id
})
  , ba = Kt.getInitialState({
    loading: null,
    selectedCategoryId: "",
    symbols: {},
    tabType: Rn.Category
});
function Au(t, o) {
    return xa(t, o)
}
var xa = Ht(ba, ve(re.loading, t => W(P({}, t), {
    loading: !0
})), ve(re.loaderEnd, t => W(P({}, t), {
    loading: !1
})), ve(re.loaderStart, t => W(P({}, t), {
    loading: !0
})), ve(de.loadedError, t => W(P({}, t), {
    loading: !1
})), ve(re.loadCategoriesSuccess, (t, {categories: o}) => {
    let u = Kt.setAll(o, t);
    return W(P({}, u), {
        loading: !1
    })
}
), ve(re.categoryAdded, (t, {newCategory: o}) => {
    if (!!!t.entities[o.id]) {
        let e = P({}, t);
        return o.isDefault && (e = Kt.map(n => W(P({}, n), {
            isDefault: !1
        }), e)),
        e = Kt.addOne(o, e),
        W(P({}, e), {
            loading: !1,
            selectedCategoryId: o.id
        })
    }
    return P({}, t)
}
), ve(re.categoriesUpdated, (t, {categories: o}) => {
    let u = o.map(e => ({
        id: e.id,
        changes: e
    }));
    return Kt.updateMany(u, t)
}
), ve(re.categoryDeleted, (t, {id: o}) => {
    let u = Kt.removeOne(o, t)
      , e = u.ids.map(i => P({}, u.entities[i]))
      , n = Tu(e)?.id;
    return W(P({}, u), {
        selectedCategoryId: n || e[0]?.id
    })
}
), ve(re.selectedCategoryChanged, (t, {id: o}) => W(P({}, t), {
    tabType: Rn.Category,
    selectedCategoryId: o
})), ve(re.tabTypeChanged, (t, {tabType: o}) => W(P({}, t), {
    tabType: o,
    selectedCategoryId: null
})), ve(re.symbolAddedToCategory, (t, {model: o}) => {
    let u = {
        id: o.categoryId,
        changes: {
            categorySymbolIsins: o.symbolIsins
        }
    };
    return Kt.updateOne(u, t)
}
), ve(re.symbolRemovedFromCategory, (t, {model: o}) => {
    let {categoryId: u, symbolIsins: e} = o
      , i = t.entities[u].categorySymbolIsins.filter(p => !e.includes(p))
      , c = {
        id: u,
        changes: {
            categorySymbolIsins: i
        }
    };
    return Kt.updateOne(c, t)
}
));
var qd = {
    marketWatchState: Au,
    marketWatchMarketDataState: Iu
};
var ci = [{
    index: Q.SymbolName,
    id: Q.SymbolName,
    name: Q[Q.SymbolName],
    pinned: !0,
    visible: !0,
    sortable: !0,
    titles: ["\u0646\u0645\u0627\u062F"],
    props: {
        firstValue: "symbolName"
    },
    sortTypes: [Ye.SymbolName],
    lsSchema: [pe.MarketWatchSchema.stateCode]
}, {
    index: Q.TradedVolume,
    id: Q.TradedVolume,
    name: Q[Q.TradedVolume],
    pinned: !1,
    visible: !0,
    sortable: !0,
    titles: ["\u062D\u062C\u0645"],
    props: {
        firstValue: "totalNumberOfSharesTraded"
    },
    sortTypes: [Ye.TotalNumberOfSharesTraded],
    lsSchema: [pe.MarketWatchSchema.totalNumberOfSharesTraded]
}, {
    index: Q.TradedPrice,
    id: Q.TradedPrice,
    name: Q[Q.TradedPrice],
    pinned: !1,
    visible: !0,
    sortable: !0,
    titles: ["\u0622\u062E\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A", "\u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC"],
    props: {
        firstValue: "lastTradedPrice",
        firstVariation: "lastTradedPriceVarPercent",
        secondValue: "closingPrice",
        secondVariation: "closingPriceVarPercent"
    },
    sortTypes: [Ye.LastTradedPricePercentVar, Ye.ClosingPricePercentVar],
    lsSchema: [pe.MarketWatchSchema.closingPrice, pe.MarketWatchSchema.feeOfPreviousDaysClosingPrice, pe.MarketWatchSchema.lastTradedPrice, pe.MarketWatchSchema.lastTradedPriceVarPercent, pe.MarketWatchSchema.totalNumberOfSharesTraded]
}, {
    index: Q.SupplyDemandPrice,
    id: Q.SupplyDemandPrice,
    name: Q[Q.SupplyDemandPrice],
    pinned: !1,
    visible: !0,
    sortable: !0,
    titles: ["\u0639\u0631\u0636\u0647", "\u062A\u0642\u0627\u0636\u0627"],
    props: {
        firstValue: "bestSellLimitPrice",
        secondValue: "bestBuyLimitPrice"
    },
    sortTypes: [Ye.SellLimitPrice, Ye.BuyLimitPrice],
    lsSchema: [pe.MarketWatchSchema.bestBuyLimitPrice, pe.MarketWatchSchema.bestSellLimitPrice]
}, {
    index: Q.LastTradedPrice,
    id: Q.LastTradedPrice,
    name: Q[Q.LastTradedPrice],
    pinned: !1,
    visible: !1,
    sortable: !0,
    titles: ["\u0622\u062E\u0631\u06CC\u0646 \u0642\u06CC\u0645\u062A"],
    props: {
        firstValue: "lastTradedPrice",
        firstVariation: "lastTradedPriceVarPercent"
    },
    sortTypes: [Ye.LastTradedPricePercentVariation],
    lsSchema: [pe.MarketWatchSchema.lastTradedPrice, pe.MarketWatchSchema.lastTradedPriceVarPercent, pe.MarketWatchSchema.totalNumberOfSharesTraded]
}, {
    index: Q.ClosingPrice,
    id: Q.ClosingPrice,
    name: Q[Q.ClosingPrice],
    pinned: !1,
    visible: !1,
    sortable: !0,
    titles: ["\u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC"],
    props: {
        firstValue: "closingPrice",
        firstVariation: "closingPriceVarPercent"
    },
    sortTypes: [Ye.ClosingPricePercentVariation],
    lsSchema: [pe.MarketWatchSchema.closingPrice, pe.MarketWatchSchema.feeOfPreviousDaysClosingPrice, pe.MarketWatchSchema.totalNumberOfSharesTraded]
}, {
    index: Q.TradedValue,
    id: Q.TradedValue,
    name: Q[Q.TradedValue],
    pinned: !1,
    visible: !1,
    sortable: !0,
    titles: ["\u0627\u0631\u0632\u0634 \u0645\u0639\u0627\u0645\u0644\u0627\u062A"],
    props: {
        firstValue: "totalTradeValue"
    },
    sortTypes: [Ye.TotalTradeValue],
    lsSchema: [pe.MarketWatchSchema.totalTradeValue]
}, {
    index: Q.BasicVolume,
    id: Q.BasicVolume,
    name: Q[Q.BasicVolume],
    pinned: !1,
    visible: !1,
    sortable: !0,
    titles: ["\u062D\u062C\u0645 \u0645\u0628\u0646\u0627"],
    props: {
        firstValue: "baseVolume"
    },
    sortTypes: [Ye.BaseVolume],
    lsSchema: []
}, {
    index: Q.TradedAmount,
    id: Q.TradedAmount,
    name: Q[Q.TradedAmount],
    pinned: !1,
    visible: !1,
    sortable: !0,
    titles: ["\u062A\u0639\u062F\u0627\u062F \u0645\u0639\u0627\u0645\u0644\u0627\u062A"],
    props: {
        firstValue: "totalNumberOfTrades"
    },
    sortTypes: [Ye.TotalNumberOfTrades],
    lsSchema: [pe.MarketWatchSchema.totalNumberOfTrades]
}, {
    index: Q.SymbolCandle,
    id: Q.SymbolCandle,
    name: Q[Q.SymbolCandle],
    pinned: !1,
    visible: !1,
    sortable: !1,
    titles: ["\u06A9\u0646\u062F\u0644 \u0631\u0648\u0632"],
    props: {},
    sortTypes: [],
    lsSchema: [pe.MarketWatchSchema.minDailyPrice, pe.MarketWatchSchema.maxDailyPrice, pe.MarketWatchSchema.minDailyTradedPrice, pe.MarketWatchSchema.maxDailyTradedPrice, pe.MarketWatchSchema.firstTradedPrice, pe.MarketWatchSchema.lastTradedPrice, pe.MarketWatchSchema.totalNumberOfSharesTraded]
}]
  , wu = {
    isHelpVisible: !0,
    isBannerVisible: !0,
    sortState: {
        dir: li.None,
        type: Ye.None
    },
    mobileColumnsState: [...ci],
    desktopColumnsState: [],
    desktopRowsState: {}
};
var ku = "marketWatch"
  , Eu = "mwColumnSortState"
  , Du = "mwCustomColumnSortState"
  , Mu = "mwColumnVisibilityState-20230729"
  , Nu = "marketWatchCategories"
  , Pu = "mwHelper"
  , Vu = "mwBanner";
var Ou = ( () => {
    let o = class o extends ct {
        get url() {
            return `${this.mtsPath + this.apiUrls.easy}MarketWatch`
        }
        constructor() {
            super(),
            this.accountService = y(at)
        }
        loadCategories(e) {
            let n = Nu + e;
            return this.httpService.get(this.url, {
                maxRetryAttempts: 3
            }).pipe(k(i => (i || []).map(c => ({
                id: c.id.trim(),
                isDefault: c.isDefault,
                name: c.name,
                order: c.order,
                createDateTime: new Date(c.createDateTime),
                categorySymbolIsins: c.watchCategorySymbols.map(p => p.symbolIsin) || []
            }))))
        }
        createCategory(e) {
            return this.httpService.post(this.url, {
                body: e
            }).pipe(k(n => ({
                createDateTime: new Date,
                id: n.id,
                isDefault: e.isDefault,
                name: e.name,
                order: e.order,
                categorySymbolIsins: [],
                categorySymbols: []
            })))
        }
        updateCategories(e) {
            return this.httpService.put(this.url, {
                body: {
                    categories: e
                }
            })
        }
        deleteCategories(e) {
            return this.httpService.delete(this.url, {
                body: {
                    ids: e
                }
            })
        }
        addSymbolToCategory(e) {
            return this.httpService.post(`${this.url}/symbols`, {
                body: e
            })
        }
        removeSymbolsFromCategory(e) {
            return this.httpService.delete(`${this.url}/symbols`, {
                body: e
            })
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var nn = ( () => {
    let o = class o {
        constructor() {
            this.symbolAddedToCategorySub = new Ot,
            this.symbolAddedToCategory$ = this.symbolAddedToCategorySub.asObservable(),
            this.symbolsRemovedFromCategorySub = new Ot,
            this.symbolsRemovedFromCategory$ = this.symbolsRemovedFromCategorySub.asObservable(),
            this.newCategoryAdded = new Ot,
            this.newCategoryAdded$ = this.newCategoryAdded.asObservable()
        }
        broadcastSymbolAdditionToCategory(e, n) {
            this.symbolAddedToCategorySub.next({
                key: e,
                symbolIsins: n
            })
        }
        broadcastSymbolsRemovalFromCategory(e, n) {
            this.symbolsRemovedFromCategorySub.next({
                key: e,
                symbolIsins: n
            })
        }
        newCategoryAddedToStore(e) {
            this.newCategoryAdded.next(e)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var gm = ( () => {
    let o = class o {
        constructor() {
            this.localStorageService = y(Jn),
            this.accountService = y(at),
            this.storageKey = M(this.accountService.userAccountInfo$.pipe(k(e => ku + (e.customerIsin ?? "1129")))),
            this._storageData = E(this.retrieveDataFromLocalStorage(this.storageKey()) || wu),
            this.storageData = this._storageData.asReadonly(),
            this.storageData$ = oe(this._storageData),
            this.retrieveDataFromLocalStorage(this.storageKey()) || this.syncOldMarketWatchStorage()
        }
        set(e, n) {
            this._storageData.update(i => W(P({}, i), {
                [e]: n
            })),
            this.saveDataToLocalStorage()
        }
        retrieveDataFromLocalStorage(e) {
            let n = this.localStorageService.getItem(e);
            return JSON.parse(n)
        }
        saveDataToLocalStorage() {
            let e = JSON.stringify(this._storageData());
            this.localStorageService.setItem(this.storageKey(), e)
        }
        setDefaultDesktopMarketColsState(e) {
            this.storageData().desktopColumnsState.length || this.set("desktopColumnsState", e)
        }
        syncOldMarketWatchStorage() {
            let e = this.retrieveDataFromLocalStorage(Mu)
              , n = this.retrieveDataFromLocalStorage(Du)
              , i = this.retrieveDataFromLocalStorage(Eu)
              , c = this.retrieveDataFromLocalStorage(Pu)
              , p = this.retrieveDataFromLocalStorage(Vu);
            e = this.mapOldMobileColsStateToNew(e);
            let b = this.mapOldDesktopRowSortNew(n);
            this.set("mobileColumnsState", e ?? ci),
            this.set("sortState", i),
            this.set("isHelpVisible", c),
            this.set("isBannerVisible", p),
            this.set("desktopRowsState", b ?? null)
        }
        mapOldMobileColsStateToNew(e) {
            return e?.map(n => {
                let i = ci.find(c => c.id === n.id);
                return W(P({}, n), {
                    props: i.props,
                    sortable: i.sortable,
                    sortTypes: i.sortTypes
                })
            }
            )
        }
        mapOldDesktopRowSortNew(e) {
            let n;
            return e?.forEach(i => {
                n[i.id] = i.symbolIsins
            }
            ),
            n
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var Bu = ( () => {
    let o = class o {
        constructor() {
            this.actions$ = y(oi),
            this.modalService = y(Ke),
            this.symbolService = y(nt),
            this.marketWatchStore = y(bn),
            this.marketWatchService = y(Ou),
            this.marketDataService = y(ei),
            this.marketWatchManagerService = y(nn),
            this.notificationService = y(Ie),
            this.accountService = y(at),
            this.store = y(Ae),
            this.finishLoading$ = We( () => this.actions$.pipe($e(re.loadCategoriesSuccess, de.loadedError), k( () => re.loaderEnd()), H( () => Z(re.loaderEnd())))),
            this.loadCategories$ = We( () => this.actions$.pipe($e(de.loadCategories), En(1e3, null, {
                leading: !0,
                trailing: !1
            }), st( () => (this.store.dispatch(re.loaderStart()),
            this.marketWatchService.loadCategories("").pipe(Ct(this.symbolService.symbolIsReceived$.pipe(Ve(Boolean))), k( ([e]) => (e = e.map(n => W(P({}, n), {
                categorySymbolIsins: n.categorySymbolIsins.filter(i => this.symbolService.symbolByIsin[i])
            })),
            re.loadCategoriesSuccess({
                categories: e
            }))), H( () => Z(de.loadedError()))))))),
            this.getMarketDataFromApi$ = We( () => this.actions$.pipe($e(de.getMarketDataFromApi), st( ({symbolIsinList: e}) => {
                let n = new Date().getTime();
                return e?.length ? this.marketDataService.GetMarketData(0, e).pipe(k(i => re.apiMarketDataLoaded({
                    marketData: i,
                    apiCallTimestamp: n
                })), H( () => Z(de.loadedError()))) : Z()
            }
            ))),
            this.newCategoryAdded$ = We( () => this.actions$.pipe($e(re.categoryAdded), V(e => {
                this.marketWatchManagerService.newCategoryAddedToStore(e.newCategory.id)
            }
            )), {
                dispatch: !1
            }),
            this.addCategory$ = We( () => this.actions$.pipe($e(de.addCategory), st( ({category: e}) => this.marketWatchService.createCategory(e).pipe(V( () => this.modalService.dismissAll()), k(n => re.categoryAdded({
                newCategory: n
            })), H(n => (n instanceof Nn && this.notificationService.alert(n.error, G.danger),
            Z(de.loadedError()))))))),
            this.updateCategories$ = We( () => this.actions$.pipe($e(de.updateCategories), st( ({categories: e}) => this.marketWatchService.updateCategories(e).pipe(V( () => this.modalService.dismissAll()), k( () => re.categoriesUpdated({
                categories: e
            })), H( () => Z(de.loadedError())))))),
            this.deleteCategory$ = We( () => this.actions$.pipe($e(de.deleteCategory), st( ({id: e}) => this.marketWatchService.deleteCategories([e]).pipe(k( () => re.categoryDeleted({
                id: e
            })), H( () => Z(de.loadedError())))))),
            this.addSymbolToCategory$ = We( () => this.actions$.pipe($e(de.addSymbolToCategory), vt(this.marketWatchStore.categories$), st( ([{key: e, categoryId: n, newSymbolIsin: i},c]) => {
                let p = {
                    categoryId: n,
                    symbolIsins: [...c[n].categorySymbolIsins, i]
                };
                return this.marketWatchService.addSymbolToCategory(p).pipe(k( () => (this.marketWatchManagerService.broadcastSymbolAdditionToCategory(e, i),
                re.symbolAddedToCategory({
                    model: p
                }))), H(b => (b instanceof Nn && this.notificationService.alert(b.error, G.danger),
                Z(de.loadedError()))))
            }
            ))),
            this.addBatchSymbolToCategory$ = We( () => this.actions$.pipe($e(de.addBatchSymbolToCategory), vt(this.marketWatchStore.categories$), st( ([{categoryId: e, newSymbolIsins: n},i]) => {
                let c = {
                    categoryId: e,
                    symbolIsins: [...i[e].categorySymbolIsins, ...n]
                };
                return this.marketWatchService.addSymbolToCategory(c).pipe(k( () => re.symbolAddedToCategory({
                    model: c
                })), H(p => (p instanceof Nn && this.notificationService.alert(p.error, G.danger),
                Z(de.loadedError()))))
            }
            ))),
            this.removeSymbolsFromCategory$ = We( () => this.actions$.pipe($e(de.removeSymbolsFromCategory), an( ({key: e, categoryId: n, removedSymbolIsins: i}) => {
                let c = {
                    categoryId: n,
                    symbolIsins: [...i]
                };
                return this.marketWatchService.removeSymbolsFromCategory(c).pipe(k( () => (this.marketWatchManagerService.broadcastSymbolsRemovalFromCategory(e, i),
                re.symbolRemovedFromCategory({
                    model: c
                }))), H(p => (p instanceof Nn && this.notificationService.alert(p.error, G.danger),
                Z(de.loadedError()))))
            }
            )))
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var Um = [Bu];
var Fa = (t, o) => o.id
  , Ta = t => ({
    "order--1": t
});
function Ia(t, o) {
    if (t & 1 && _(0, "svg-icon", 4),
    t & 2) {
        let u = d(2);
        m("iconName", u.icons.PinFill)
    }
}
function Aa(t, o) {
    if (t & 1 && (a(0, "span", 5),
    _(1, "svg-icon", 7),
    r()),
    t & 2) {
        let u = d(2);
        s(),
        m("iconName", u.icons.Loading)
    }
}
function wa(t, o) {
    if (t & 1 && _(0, "svg-icon", 9),
    t & 2) {
        let u = d(2).$implicit
          , e = d();
        m("iconName", e.icons.CheckBox),
        Ze("data-cy", "market-watch-category-list-item-checkbox-" + (u == null ? null : u.name))
    }
}
function ka(t, o) {
    if (t & 1 && _(0, "svg-icon", 10),
    t & 2) {
        let u = d(2).$implicit
          , e = d();
        m("iconName", e.icons.PlusBox),
        Ze("data-cy", "market-watch-category-list-item-plus-" + (u == null ? null : u.name))
    }
}
function Ea(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "span", 8),
        h("click", function() {
            g(u);
            let n = d().$implicit
              , i = d();
            return v(i.handleCategory(n))
        }),
        C(1, wa, 1, 2, "svg-icon", 9)(2, ka, 1, 2, "svg-icon", 10),
        r()
    }
    if (t & 2) {
        let u = d().$implicit
          , e = d();
        s(),
        f(e.include(u) ? 1 : e.include(u) ? -1 : 2)
    }
}
function Da(t, o) {
    if (t & 1 && (a(0, "li", 1)(1, "div", 2)(2, "span", 3),
    l(3),
    r(),
    C(4, Ia, 1, 1, "svg-icon", 4),
    r(),
    C(5, Aa, 2, 1, "span", 5)(6, Ea, 3, 1, "span", 6),
    r()),
    t & 2) {
        let u = o.$implicit;
        m("ngClass", q(5, Ta, u == null ? null : u.isDefault)),
        s(2),
        Ze("data-cy", "market-watch-category-list-item-name-" + (u == null ? null : u.name)),
        s(),
        F(" ", u == null ? null : u.name, ""),
        s(),
        f(u != null && u.isDefault ? 4 : -1),
        s(),
        f(u.changeState ? 5 : 6)
    }
}
var Ru = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.marketWatchFacade = y(yt),
            this.notificationService = y(Ie),
            this.symbol = w.required(),
            this.categories = w.required()
        }
        include(e) {
            return e.categorySymbolIsins.includes(this.symbol()?.symbolIsin)
        }
        handleCategory(e) {
            e.changeState = !0,
            this.include(e) ? this.marketWatchFacade.removeSymbolsFromCategory(e.id, [this.symbol().symbolIsin]) : this.marketWatchFacade.addSymbolToCategory(e.id, this.symbol().symbolIsin)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["market-watch-category-list"]],
        inputs: {
            symbol: [1, "symbol"],
            categories: [1, "categories"]
        },
        decls: 3,
        vars: 0,
        consts: [[1, "p-0", "m-0", "list-group", "list-group-flush", "d-flex", "flex-column"], [1, "list-group-item", "d-flex", "align-items-center", "py-2", "px-0", "cup", "overflow-hidden", 3, "ngClass"], [1, "flex-grow-1", "d-flex", "align-items-center"], [1, "d-block", "fw-bold"], ["width", "12", "height", "12", 1, "text-primary", "ms-1", 3, "iconName"], [1, "ps-2"], [1, "ps-2", "cup"], ["width", "24", "height", "24", 1, "spin", "text-secondary", "px-2", 3, "iconName"], [1, "ps-2", "cup", 3, "click"], ["width", "24", "height", "24", "title", "\u062D\u0630\u0641 \u0627\u0632 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646", 1, "text-primary", "px-2", 3, "iconName"], ["width", "24", "height", "24", "title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646", 1, "text-muted", "px-2", 3, "iconName"]],
        template: function(n, i) {
            n & 1 && (a(0, "ul", 0),
            ne(1, Da, 7, 7, "li", 1, Fa),
            r()),
            n & 2 && (s(),
            ie(i.categories()))
        },
        dependencies: [z, B],
        encapsulation: 2
    });
    let t = o;
    return t
}
)();
function Ma(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u0646\u0627\u0645 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"),
    r())
}
function Na(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u0646\u0627\u0645 \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u0642\u0644 \u062F\u0648 \u062D\u0631\u0641 \u0628\u0627\u0634\u062F"),
    r())
}
function Pa(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u0646\u0627\u0645 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646 \u0637\u0648\u0644\u0627\u0646\u06CC \u0627\u0633\u062A"),
    r())
}
function Va(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u0646\u0627\u0645 \u0646\u0627\u0645\u0639\u062A\u0628\u0631"),
    r())
}
function Oa(t, o) {
    if (t & 1 && (a(0, "div", 7),
    C(1, Ma, 2, 0, "div")(2, Na, 2, 0, "div")(3, Pa, 2, 0, "div")(4, Va, 2, 0, "div"),
    r()),
    t & 2) {
        let u = d();
        s(),
        f(u.getError("name", "required") ? 1 : -1),
        s(),
        f(u.getError("name", "minlength") ? 2 : -1),
        s(),
        f(u.getError("name", "maxlength") ? 3 : -1),
        s(),
        f(u.getError("name", "noWhitespace", "minlength") ? 4 : -1)
    }
}
var Wu = ( () => {
    let o = class o {
        constructor() {
            this.fb = y(Te),
            this.modalService = y(ti),
            this.notificationService = y(Ie),
            this.marketWatchFacade = y(yt),
            this.marketWatchManagerService = y(nn),
            this.form = this.fb.group({
                name: ["", [R.required, R.minLength(2), R.maxLength(30), jt.noWhitespace]]
            }),
            M(this.marketWatchManagerService.newCategoryAdded$.pipe(V(e => {
                this.marketWatchFacade.addSymbolToCategory(e, this.symbol?.symbolIsin),
                this.handleClose()
            }
            )))
        }
        handleSubmit() {
            if (this.form.invalid)
                return;
            let {name: e=""} = this.form.value
              , n = {
                order: this.ordinal,
                name: e.trim()
            };
            this.marketWatchFacade.addCategory(n)
        }
        handleClose() {
            this.modalService.dismissAll()
        }
        showError(e) {
            let n = this.form.controls[e];
            return n.invalid && (n.dirty || n.touched)
        }
        getError(e, n, i) {
            return i ? this.form.controls[e].errors[n] && !this.form.controls[e].errors[i] : this.form.controls[e].errors[n]
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["mobile-market-watch-category-add"]],
        inputs: {
            symbol: "symbol",
            ordinal: "ordinal"
        },
        decls: 15,
        vars: 3,
        consts: [[3, "ngSubmit", "formGroup"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["type", "text", "data-cy", "mobile-market-watch-category-add-modal-input", "name", "name", "placeholder", "\u0646\u0627\u0645 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646", "formControlName", "name", "autocomplete", "off", 1, "form-control"], [1, "text-primary", "mt-2"], [1, "modal-footer"], [1, "m-0", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "submit", "data-cy", "mobile-market-watch-category-add-modal-submit-btn", 1, "btn", "btn-success", "px-5", 3, "disabled"]],
        template: function(n, i) {
            n & 1 && (a(0, "form", 0),
            h("ngSubmit", function() {
                return i.handleSubmit()
            }),
            a(1, "div", 1)(2, "span", 2),
            l(3, "\u0627\u0641\u0632\u0648\u062F\u0646 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646 \u062C\u062F\u06CC\u062F"),
            r(),
            a(4, "button", 3),
            h("click", function() {
                return i.handleClose()
            }),
            _(5, "span", 4),
            r()(),
            a(6, "div", 5),
            _(7, "input", 6),
            C(8, Oa, 5, 4, "div", 7),
            r(),
            a(9, "div", 8)(10, "div", 9)(11, "button", 10),
            h("click", function() {
                return i.handleClose()
            }),
            l(12, "\u0627\u0646\u0635\u0631\u0627\u0641"),
            r(),
            a(13, "button", 11),
            l(14, " \u062B\u0628\u062A "),
            r()()()()),
            n & 2 && (m("formGroup", i.form),
            s(8),
            f(i.showError("name") ? 8 : -1),
            s(5),
            m("disabled", i.form.invalid))
        },
        dependencies: [he, Se, lt, Be, xe, Fe, Xe],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
function Ba(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u0646\u0627\u0645 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"),
    r())
}
function Ra(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u0646\u0627\u0645 \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u0642\u0644 \u062F\u0648 \u062D\u0631\u0641 \u0628\u0627\u0634\u062F"),
    r())
}
function Wa(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u0646\u0627\u0645 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646 \u0637\u0648\u0644\u0627\u0646\u06CC \u0627\u0633\u062A"),
    r())
}
function $a(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u0646\u0627\u0645 \u0646\u0627\u0645\u0639\u062A\u0628\u0631"),
    r())
}
function qa(t, o) {
    if (t & 1 && (a(0, "div", 7),
    C(1, Ba, 2, 0, "div")(2, Ra, 2, 0, "div")(3, Wa, 2, 0, "div")(4, $a, 2, 0, "div"),
    r()),
    t & 2) {
        let u = d();
        s(),
        f(u.getError("name", "required") ? 1 : -1),
        s(),
        f(u.getError("name", "minlength") ? 2 : -1),
        s(),
        f(u.getError("name", "maxlength") ? 3 : -1),
        s(),
        f(u.getError("name", "noWhitespace", "minlength") ? 4 : -1)
    }
}
var $u = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.fb = y(Te),
            this.marketWatchFacade = y(yt),
            this.marketWatchManagerService = y(nn),
            this.marketWatchOverlayNewManagerService = y(si),
            this.symbol = w.required(),
            this.ordinal = w.required(),
            this.form = this.fb.group({
                name: ["", [R.required, R.minLength(2), R.maxLength(30), jt.noWhitespace]]
            }),
            M(this.marketWatchManagerService.newCategoryAdded$.pipe(V(e => {
                this.marketWatchFacade.addSymbolToCategory(e, this.symbol()?.symbolIsin),
                this.handleClose()
            }
            )))
        }
        handleSubmit() {
            if (this.form.invalid)
                return;
            let {name: e=""} = this.form.value
              , n = {
                order: this.ordinal(),
                name: e.trim()
            };
            this.marketWatchFacade.addCategory(n)
        }
        handleClose() {
            this.marketWatchOverlayNewManagerService.setShowNewCatSection(!1)
        }
        showError(e) {
            let n = this.form.controls[e];
            return n.invalid && (n.dirty || n.touched)
        }
        getError(e, n, i) {
            return i ? this.form.controls[e].errors[n] && !this.form.controls[e].errors[i] : this.form.controls[e].errors[n]
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["desktop-market-watch-category-add"]],
        inputs: {
            symbol: [1, "symbol"],
            ordinal: [1, "ordinal"]
        },
        decls: 16,
        vars: 5,
        consts: [[3, "ngSubmit", "formGroup"], [1, "mx-2", "mb-2", "px-2", "pb-2"], [1, "row", "m-0", "align-items-center"], ["for", "name", 1, "col-sm-3", "col-form-label", "p-0"], [1, "col-sm-9", "p-0"], ["data-cy", "desktop-market-watch-category-add-modal-input", "type", "text", "name", "name", "placeholder", "\u0646\u0627\u0645 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646", "formControlName", "name", "autocomplete", "off", 1, "form-control"], [1, "row"], [1, "col-sm-9", "ms-auto", "text-primary", "mt-2"], [1, "mt-2", "text-end"], ["type", "submit", "data-cy", "desktop-market-watch-category-add-modal-submit-btn", 1, "btn", "btn-success", "btn-sm", "me-1", 3, "disabled"], ["width", "18", "height", "18", 1, "me-1", 3, "iconName"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-sm", 3, "click"]],
        template: function(n, i) {
            n & 1 && (a(0, "form", 0),
            h("ngSubmit", function() {
                return i.handleSubmit()
            }),
            a(1, "div", 1)(2, "div", 2)(3, "label", 3),
            l(4, "\u0646\u0627\u0645 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646"),
            r(),
            a(5, "div", 4),
            _(6, "input", 5),
            r()(),
            a(7, "div", 6),
            C(8, qa, 5, 4, "div", 7),
            r(),
            a(9, "div", 8)(10, "button", 9),
            _(11, "svg-icon", 10),
            l(12, " \u062B\u0628\u062A "),
            r(),
            a(13, "button", 11),
            h("click", function() {
                return i.handleClose()
            }),
            _(14, "svg-icon", 10),
            l(15, " \u0627\u0646\u0635\u0631\u0627\u0641 "),
            r()()()()),
            n & 2 && (m("formGroup", i.form),
            s(8),
            f(i.showError("name") ? 8 : -1),
            s(2),
            m("disabled", i.form.invalid),
            s(),
            m("iconName", i.icons.Check),
            s(3),
            m("iconName", i.icons.Close))
        },
        dependencies: [he, Se, lt, Be, xe, Fe, Xe, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
function ja(t, o) {
    if (t & 1 && (a(0, "div", 8),
    _(1, "desktop-market-watch-category-add", 10),
    r()),
    t & 2) {
        let u = d();
        s(),
        m("symbol", u.symbol())("ordinal", u.ordinal())
    }
}
function Ua(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 9)(1, "button", 11),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.handleModalClose())
        }),
        l(2, " \u0628\u0633\u062A\u0646 \u067E\u0646\u062C\u0631\u0647 "),
        r()()
    }
}
var Gp = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.modalService = y(ti),
            this.marketStore = y(Bn),
            this.overlayService = y(ye),
            this.marketManager = y(si),
            this.isMobile = !1,
            this.sub = new uo,
            this.symbol = M(this.marketManager.symbolObs$),
            this.categories$ = this.marketStore.getCategoriesAsArray$().pipe(k(e => [...e.map(n => W(P({}, n), {
                changeState: !1
            })) || []].sort( (n, i) => n.isDefault ? -1 : i.isDefault ? 1 : n.order - i.order))),
            this.categories = M(this.categories$),
            this.ordinal = ee( () => Math.max(...this.categories().map(e => e.order), 0) + 1),
            this.showDesktopForm = E(!1),
            M(this.marketManager.showNewCatSectionObs$.pipe(V(e => {
                this.showDesktopForm.set(e)
            }
            )))
        }
        ngOnDestroy() {
            this.isMobile && this.marketManager.setShowCategoryOverlay(!1),
            this.marketManager.setShowNewCatSection(!1)
        }
        handleModalClose() {
            this.modalService.dismissAll(),
            this.isMobile && (this.marketManager.setShowCategoryOverlay(!1),
            this.overlayService.hideOverlay())
        }
        handleNewCategory() {
            if (this.isMobile) {
                let e = this.modalService.open(Wu);
                e.componentInstance.symbol = this.symbol(),
                e.componentInstance.ordinal = this.ordinal()
            } else
                this.marketManager.setShowNewCatSection(!0)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["market-watch-category"]],
        inputs: {
            isMobile: "isMobile"
        },
        decls: 14,
        vars: 8,
        consts: [[1, "d-flex", "flex-column", "h-100"], [1, "d-flex", "justify-content-center", "px-3", "pt-3", "text-center"], [1, "text-primary"], [1, "flex-grow-1", "overflow-hidden", "d-flex", "flex-column", "mt-2"], [1, "overflow-auto", "px-3"], [3, "symbol", "categories"], ["data-cy", "new-category-btn-from-isin-modal", 1, "text-center", "pt-2", "pb-3", "text-reserve-50", "cup", 3, "click"], ["width", "20", "height", "20", 1, "text-secondary", 3, "iconName"], [1, "modal-body", "overflow-hidden", "flex-shrink-0"], [1, "modal-footer"], [3, "symbol", "ordinal"], ["type", "button", "data-cy", "market-watch-category-modal-close", 1, "btn", "btn-outline-secondary", 3, "click"]],
        template: function(n, i) {
            if (n & 1 && (a(0, "div", 0)(1, "header", 1),
            l(2, " \u0627\u0641\u0632\u0648\u062F\u0646 "),
            a(3, "span", 2),
            l(4),
            r(),
            l(5, " \u0628\u0647 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646 ... "),
            r(),
            a(6, "div", 3)(7, "div", 4),
            _(8, "market-watch-category-list", 5),
            r(),
            a(9, "div", 6),
            h("click", function() {
                return i.handleNewCategory()
            }),
            _(10, "svg-icon", 7),
            l(11, " \u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646 \u062C\u062F\u06CC\u062F "),
            r()(),
            C(12, ja, 2, 2, "div", 8)(13, Ua, 3, 0, "div", 9),
            r()),
            n & 2) {
                let c;
                Y(i.isMobile ? "overflow-hidden" : ""),
                s(4),
                F("\xA0 ", (c = i.symbol()) == null ? null : c.symbolName, " \xA0"),
                s(4),
                m("symbol", i.symbol())("categories", i.categories()),
                s(2),
                m("iconName", i.icons.WatchListAdd),
                s(2),
                f(!i.isMobile && i.showDesktopForm() ? 12 : -1),
                s(),
                f(i.isMobile ? -1 : 13)
            }
        },
        dependencies: [Ru, $u, B],
        styles: [`market-watch-category{height:100%!important}
/*# sourceMappingURL=market-watch-category.component-SNAR6K2Y.css.map */
`],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var La = ["nameInput"]
  , Ha = t => ({
    "pe-none opacity-3": t
});
function za(t, o) {
    if (t & 1 && _(0, "input", 13, 0),
    t & 2) {
        let u = d(2);
        m("formControl", u.nameControl)
    }
}
function Ga(t, o) {
    if (t & 1 && (a(0, "span", 14),
    l(1),
    r()),
    t & 2) {
        let u = d().$implicit;
        m("id", u.id),
        s(),
        F(" ", u.name, " ")
    }
}
function Ka(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 16)(1, "span", 17),
        l(2, "\u062F\u06CC\u062F\u0647 \u0628\u0627\u0646 \u062D\u0630\u0641 \u0634\u0648\u062F\u061F"),
        r(),
        a(3, "svg-icon", 18),
        h("click", function() {
            g(u);
            let n = d().$implicit
              , i = d();
            return v(i.deleteCategory(n.id))
        }),
        r(),
        a(4, "svg-icon", 19),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.deletableCategoryId.set(null))
        }),
        r()()
    }
    if (t & 2) {
        let u = d().$implicit
          , e = d();
        s(3),
        m("iconName", e.icons.Check),
        Ze("data-cy", "delete-category-confirm-btn-" + u.name),
        s(),
        m("iconName", e.icons.Close)
    }
}
function Ya(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "svg-icon", 23),
        h("click", function() {
            g(u);
            let n = d(2).$implicit
              , i = d();
            return v(i.finalizeEdit(n))
        }),
        r(),
        a(1, "svg-icon", 23),
        h("click", function() {
            g(u);
            let n = d(3);
            return v(n.finalizeEdit(null))
        }),
        r()
    }
    if (t & 2) {
        let u = d(2).$implicit
          , e = d();
        m("iconName", e.icons.Check),
        Ze("data-cy", "confirm-edit-category-btn-" + u.name),
        s(),
        m("iconName", e.icons.Close),
        Ze("data-cy", "cancel-edit-category-btn-" + u.name)
    }
}
function Qa(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "svg-icon", 23),
        h("click", function() {
            g(u);
            let n = d(2).$implicit
              , i = d();
            return v(i.makeEditable(n))
        }),
        r()
    }
    if (t & 2) {
        let u = d(2).$implicit
          , e = d();
        m("iconName", e.icons.Edit),
        Ze("data-cy", "edit-category-btn-" + u.name)
    }
}
function Ja(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "svg-icon", 20),
        h("click", function() {
            g(u);
            let n = d().$implicit
              , i = d();
            return v(i.makeDefault(n))
        }),
        r(),
        C(1, Ya, 2, 4)(2, Qa, 1, 2, "svg-icon", 21),
        a(3, "svg-icon", 22),
        h("click", function() {
            g(u);
            let n = d().$implicit
              , i = d();
            return v(i.deletableCategoryId.set(n.id))
        }),
        r()
    }
    if (t & 2) {
        let u = d().$implicit
          , e = d();
        m("iconName", u.isDefault ? "pin-fill" : "pin"),
        s(),
        f(u.id === e.editableCategoryId() ? 1 : 2),
        s(2),
        m("iconName", e.icons.Delete)("ngClass", q(5, Ha, u.id === e.editableCategoryId())),
        Ze("data-cy", "delete-category-btn-" + u.name)
    }
}
function Za(t, o) {
    if (t & 1 && (a(0, "div", 7),
    _(1, "svg-icon", 12),
    C(2, za, 2, 1, "input", 13)(3, Ga, 2, 2, "span", 14),
    a(4, "div", 15),
    C(5, Ka, 5, 3, "div", 16)(6, Ja, 4, 7),
    r()()),
    t & 2) {
        let u = o.$implicit
          , e = d();
        s(),
        m("iconName", e.icons.Drag),
        s(),
        f(u.id === e.editableCategoryId() ? 2 : 3),
        s(3),
        f(u.id === e.deletableCategoryId() ? 5 : 6)
    }
}
var Xa = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.categoryOrder = E([]),
            this.editableCategoryId = E(null),
            this.deletableCategoryId = E(null),
            this.nameControl = new Ne("",[R.required, R.minLength(2), R.maxLength(30), jt.noWhitespace]),
            this.modalService = y(Ke),
            this.marketWatchStoreFacade = y(Bn),
            this.marketWatchFacade = y(yt),
            M(this.marketWatchStoreFacade.getCategoriesAsArray$().pipe(V(e => {
                this.categoryOrder.set([...e.sort( (n, i) => n.order - i.order)])
            }
            )))
        }
        makeEditable(e) {
            this.editableCategoryId.set(e.id),
            this.nameControl.setValue(e.name),
            setTimeout( () => {
                this.inputRef.nativeElement.focus()
            }
            , 200)
        }
        finalizeEdit(e) {
            this.editableCategoryId.set(null),
            this.categoryOrder.update(n => [...n.map(i => i.id !== e.id ? i : W(P({}, i), {
                name: this.nameControl.value
            }))])
        }
        makeDefault(e) {
            this.categoryOrder.update(n => [...n.map(i => W(P({}, i), {
                isDefault: i.id === e.id
            }))])
        }
        handleUpdateSubmit() {
            let e = this.categoryOrder().map( (n, i) => ({
                order: i,
                id: n.id,
                name: n.name,
                isDefault: n.isDefault
            }));
            this.marketWatchFacade.updateCategories(e)
        }
        deleteCategory(e) {
            this.marketWatchFacade.deleteCategory(e),
            this.deletableCategoryId.set(null)
        }
        closeModal() {
            this.modalService.dismissAll()
        }
        handleDrop(e) {
            let n = [...this.categoryOrder()];
            fu(n, e.previousIndex, e.currentIndex),
            this.categoryOrder.set([...n])
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["market-watch-category-edit"]],
        viewQuery: function(n, i) {
            if (n & 1 && go(La, 5),
            n & 2) {
                let c;
                vo(c = bo()) && (i.inputRef = c.first)
            }
        },
        decls: 15,
        vars: 1,
        consts: [["nameInput", ""], [1, "modal-header", "d-flex", "justify-content-between"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "me-0", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["cdkDropList", "", "data-cy", "edit-market-watch-container", 1, "list-group", "list-group-flush", 3, "cdkDropListDropped"], ["cdkDrag", "", 1, "list-group-item", "list-group-item-action", "p-1", "d-flex", "align-items-center", "justify-content-between", "text-body"], [1, "modal-footer"], [1, "m-0", "d-flex", "gap-2"], ["data-cy", "mw-edit-modal-confirm-btn", "type", "button", 1, "btn", "btn-success", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["width", "24", "height", "24", "cdkDragHandle", "", 1, "text-muted", "me-2", "opacity-5", "cursor-move", 3, "iconName"], ["type", "text", "name", "name", "placeholder", "\u0646\u0627\u0645 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646", 1, "form-control", 3, "formControl"], [1, "flex-grow-1", 2, "height", "33px", "line-height", "33px", 3, "id"], [1, "d-flex", "text-secondary"], [1, "d-flex", "align-items-center"], [1, "flex-grow-1", "text-warning", "px-2"], ["width", "20", "height", "20", "title", "\u0628\u0644\u0647", 1, "icon", "px-2", "cup", "text-success", 3, "click", "iconName"], ["width", "20", "height", "20", "title", "\u062E\u06CC\u0631", 1, "icon", "px-2", "cup", "text-danger", 3, "click", "iconName"], ["width", "18", "height", "18", 1, "cup", "px-3", 3, "click", "iconName"], ["width", "20", "height", "20", 1, "px-3", "cup", 3, "iconName"], ["width", "20", "height", "20", 1, "px-3", "cup", 3, "click", "iconName", "ngClass"], ["width", "20", "height", "20", 1, "px-3", "cup", 3, "click", "iconName"]],
        template: function(n, i) {
            n & 1 && (a(0, "div", 1)(1, "span", 2),
            l(2, "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646"),
            r(),
            a(3, "button", 3),
            h("click", function() {
                return i.closeModal()
            }),
            _(4, "span", 4),
            r()(),
            a(5, "div", 5)(6, "div", 6),
            h("cdkDropListDropped", function(p) {
                return i.handleDrop(p)
            }),
            ne(7, Za, 7, 3, "div", 7, Me),
            r()(),
            a(9, "div", 8)(10, "div", 9)(11, "button", 10),
            h("click", function() {
                return i.handleUpdateSubmit()
            }),
            l(12, " \u062B\u0628\u062A \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A "),
            r(),
            a(13, "button", 11),
            h("click", function() {
                return i.closeModal()
            }),
            l(14, "\u0627\u0646\u0635\u0631\u0627\u0641"),
            r()()()),
            n & 2 && (s(7),
            ie(i.categoryOrder()),
            s(4),
            m("disabled", !!i.editableCategoryId() || !!i.deletableCategoryId()))
        },
        dependencies: [he, lt, Be, Ao, z, hu, Cu, yu, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
function e0(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u0646\u0627\u0645 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"),
    r())
}
function t0(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u0646\u0627\u0645 \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u0642\u0644 \u062F\u0648 \u062D\u0631\u0641 \u0628\u0627\u0634\u062F"),
    r())
}
function n0(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u0646\u0627\u0645 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646 \u0637\u0648\u0644\u0627\u0646\u06CC \u0627\u0633\u062A"),
    r())
}
function i0(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u0646\u0627\u0645 \u0646\u0627\u0645\u0639\u062A\u0628\u0631"),
    r())
}
function o0(t, o) {
    if (t & 1 && (a(0, "div", 17),
    C(1, e0, 2, 0, "div", 18)(2, t0, 2, 0, "div", 18)(3, n0, 2, 0, "div", 18)(4, i0, 2, 0, "div", 18),
    r()),
    t & 2) {
        let u = d();
        s(),
        m("ngIf", u.getError("name", "required")),
        s(),
        m("ngIf", u.getError("name", "minlength")),
        s(),
        m("ngIf", u.getError("name", "maxlength")),
        s(),
        m("ngIf", u.getError("name", "noWhitespace", "minlength"))
    }
}
var u0 = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.order = w(),
            this.fb = y(Te),
            this.modalService = y(Ke),
            this.marketWatchFacade = y(yt),
            this.form = this.fb.group({
                name: ["", [R.required, R.minLength(2), R.maxLength(30), jt.noWhitespace]],
                isDefault: !1
            })
        }
        handleSubmit() {
            let e = {
                order: this.order(),
                name: this.form.get("name")?.value.trim() || "",
                isDefault: this.form.get("isDefault")?.value || !1
            };
            this.marketWatchFacade.addCategory(e)
        }
        closeModal() {
            this.modalService.dismissAll()
        }
        showError(e) {
            let n = this.form.controls[e];
            return n.invalid && (n.dirty || n.touched)
        }
        getError(e, n, i) {
            return i ? this.form.controls[e].errors[n] && !this.form.controls[e].errors[i] : this.form.controls[e].errors[n]
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["market-watch-category-add"]],
        inputs: {
            order: [1, "order"]
        },
        decls: 22,
        vars: 6,
        consts: [[3, "ngSubmit", "formGroup"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "me-0", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["data-cy", "mw-add-modal-input", "type", "text", "name", "name", "placeholder", "\u0646\u0627\u0645 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646", "formControlName", "name", "autocomplete", "off", 1, "form-control"], ["class", "text-primary mt-2", 4, "ngIf"], [1, "ios7-switch", "mt-2", "d-flex", "align-items-center"], ["type", "checkbox", "formControlName", "isDefault"], [1, "h4", "mb-0", "me-1"], ["width", "12", "height", "12", 1, "text-body", "ms-1", 3, "iconName"], [1, "modal-footer"], [1, "m-0", "d-flex", "gap-2"], ["data-cy", "mw-add-category-modal-btn", "type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["width", "18", "height", "18", 1, "me-1", 3, "iconName"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "text-primary", "mt-2"], [4, "ngIf"]],
        template: function(n, i) {
            n & 1 && (a(0, "form", 0),
            h("ngSubmit", function() {
                return i.handleSubmit()
            }),
            a(1, "div", 1)(2, "span", 2),
            l(3, "\u0627\u0641\u0632\u0648\u062F\u0646 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646 \u062C\u062F\u06CC\u062F"),
            r(),
            a(4, "button", 3),
            h("click", function() {
                return i.closeModal()
            }),
            _(5, "span", 4),
            r()(),
            a(6, "div", 5),
            _(7, "input", 6),
            C(8, o0, 5, 4, "div", 7),
            a(9, "label", 8),
            _(10, "input", 9)(11, "span", 10),
            l(12, " \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646 \u067E\u06CC\u0634\u200C\u0641\u0631\u0636 "),
            _(13, "svg-icon", 11),
            r()(),
            a(14, "div", 12)(15, "div", 13)(16, "button", 14),
            _(17, "svg-icon", 15),
            l(18, " \u062B\u0628\u062A "),
            r(),
            a(19, "button", 16),
            h("click", function() {
                return i.closeModal()
            }),
            _(20, "svg-icon", 15),
            l(21, " \u0627\u0646\u0635\u0631\u0627\u0641 "),
            r()()()()),
            n & 2 && (m("formGroup", i.form),
            s(8),
            m("ngIf", i.showError("name")),
            s(5),
            m("iconName", i.icons.PinFill),
            s(3),
            m("disabled", i.form.invalid),
            s(),
            m("iconName", i.icons.Check),
            s(3),
            m("iconName", i.icons.Close))
        },
        dependencies: [he, Se, lt, dn, Be, xe, Fe, Xe, Fo, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var te = function(t) {
    return t[t.IPO = 0] = "IPO",
    t[t.IpoSubscription = 1] = "IpoSubscription",
    t
}(te || {})
  , qu = {
    [te.IPO]: "\u0639\u0631\u0636\u0647 \u0627\u0648\u0644\u06CC\u0647",
    [te.IpoSubscription]: "\u067E\u0630\u06CC\u0631\u0647 \u200C\u0646\u0648\u06CC\u0633\u06CC"
}
  , Qe = function(t) {
    return t[t.openOfflineOrderForm = 0] = "openOfflineOrderForm",
    t[t.openBuyOrderForm = 1] = "openBuyOrderForm",
    t[t.showOfflineRequest = 2] = "showOfflineRequest",
    t[t.showSymbolDetail = 3] = "showSymbolDetail",
    t[t.showOrderRequest = 4] = "showOrderRequest",
    t[t.openOrderHistory = 5] = "openOrderHistory",
    t
}(Qe || {});
var je = function(t) {
    return t[t.Main = 0] = "Main",
    t[t.SellPenalty = 1] = "SellPenalty",
    t[t.Custom = 2] = "Custom",
    t
}(je || {})
  , ae = function(t) {
    return t[t.Buy = 0] = "Buy",
    t[t.Sell = 1] = "Sell",
    t[t.All = 2] = "All",
    t
}(ae || {})
  , Sn = {
    accountNumber: "",
    bankTitle: "\u0627\u0636\u0627\u0641\u0647 \u0634\u062F\u0646 \u0628\u0647 \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F",
    iban: null,
    constIban: "-99999"
}
  , ce = function(t) {
    return t[t.NotStarted = 0] = "NotStarted",
    t[t.InProgress = 1] = "InProgress",
    t[t.Done = 2] = "Done",
    t[t.Failed = 3] = "Failed",
    t[t.Canceled = 4] = "Canceled",
    t
}(ce || {})
  , _e = function(t) {
    return t[t.None = 1] = "None",
    t[t.Buy = 2] = "Buy",
    t[t.Sell = 3] = "Sell",
    t[t.Increase = 4] = "Increase",
    t[t.Confirm = 5] = "Confirm",
    t
}(_e || {})
  , ft = function(t) {
    return t.Fund = "Fund",
    t.FundDetail = "FundDetail",
    t.Transaction = "Transaction",
    t.NoneEtf = "NoneEtf",
    t
}(ft || {})
  , di = function(t) {
    return t[t.Employer = 1] = "Employer",
    t[t.Employee = 2] = "Employee",
    t[t.Personal = 3] = "Personal",
    t
}(di || {})
  , Ee = function(t) {
    return t[t.Bigger = 0] = "Bigger",
    t[t.InRange = 1] = "InRange",
    t[t.Smaller = 2] = "Smaller",
    t[t.WithoutTime = 3] = "WithoutTime",
    t
}(Ee || {});
var ge = ( () => {
    let o = class o {
    }
    ;
    o.WithoutDetailFunds = [11277],
    o.FundName = {
        11132: "\u0627\u0645\u06CC\u062F \u062A\u0648\u0633\u0639\u0647",
        10600: "\u067E\u06CC\u0634\u062A\u0627\u0632",
        10762: "\u0645\u0645\u062A\u0627\u0632",
        10851: "\u067E\u06CC\u0634\u0631\u0648",
        11562: "\u0646\u0627\u0645\u06CC",
        12021: "\u062A\u0636\u0645\u06CC\u0646",
        11277: "\u062D\u0627\u0645\u06CC",
        12033: "\u062A\u0648\u0627\u0646",
        12217: "\u0635\u0646\u062F\u0648\u0642 \u0622\u062A\u06CC\u0647 \u0645\u0641\u06CC\u062F"
    },
    o.FundIcon = {
        10600: "fund-pishtaz",
        10851: "fund-pishro",
        11132: "fund-omid",
        10762: "fund-momtaz",
        11562: "fund-nami",
        12021: "fund-tazmin",
        11277: "fund-hami",
        12033: "fund-tavan",
        12217: "fund-atiyeh"
    },
    o.TransactionStateClass = {
        1: "fund-detail-tree-st-current",
        2: "fund-detail-tree-st-done",
        3: "fund-detail-tree-st-reject",
        4: "fund-detail-tree-st-remove"
    };
    let t = o;
    return t
}
)()
  , ju = [{
    value: 5e7,
    label: "50",
    unit: "\u0645\u06CC\u0644\u06CC\u0648\u0646"
}, {
    value: 1e8,
    label: "100",
    unit: "\u0645\u06CC\u0644\u06CC\u0648\u0646"
}, {
    value: 2e8,
    label: "200",
    unit: "\u0645\u06CC\u0644\u06CC\u0648\u0646"
}, {
    value: 5e8,
    label: "500",
    unit: "\u0645\u06CC\u0644\u06CC\u0648\u0646"
}, {
    value: 1e9,
    label: "1",
    unit: "\u0645\u06CC\u0644\u06CC\u0627\u0631\u062F"
}, {
    value: 2e9,
    label: "2",
    unit: "\u0645\u06CC\u0644\u06CC\u0627\u0631\u062F"
}];
var Uu = ( () => {
    let o = class o extends ct {
        funds() {
            return this.httpService.get(this.mtsPath + this.apiUrls.fund + "funds/")
        }
        assets() {
            return this.httpService.get(this.mtsPath + this.apiUrls.fund + "assets/")
        }
        banksInfo() {
            return this.httpService.get(this.mtsPath + this.apiUrls.fund + "bank-info/")
        }
        transactions(e="", n) {
            let i = new ln;
            return i = i.append("page", n.page),
            i = i.append("size", n.size),
            this.httpService.get(this.mtsPath + this.apiUrls.fund + "transactions/" + e, {
                options: {
                    params: i
                }
            })
        }
        issuanceTransactions(e="", n) {
            let i = new ln;
            return i = i.append("page", n.page),
            i = i.append("size", n.size),
            this.httpService.get(this.mtsPath + this.apiUrls.fund + "issuanceTransactions/" + e, {
                options: {
                    params: i
                }
            })
        }
        allTransactions(e="", n, i) {
            let c = new ln;
            return c = c.append("page", n.page.toString()),
            c = c.append("size", n.size.toString()),
            e !== "" && (c = c.append("fundCode", e),
            c = c.append("nationalCode", i)),
            this.httpService.get(this.mtsPath + this.apiUrls.fund + "allTransactions/", {
                options: {
                    params: c
                }
            })
        }
        redemptionTransactions(e="", n) {
            let i = new ln;
            return i = i.append("page", n.page),
            i = i.append("size", n.size),
            this.httpService.get(this.mtsPath + this.apiUrls.fund + "redemptionTransactions/" + e, {
                options: {
                    params: i
                }
            })
        }
        indexAverage(e) {
            return this.httpService.post(this.mtsPath + this.apiUrls.easy + "marketView/IndexAverageForDateRange", {
                body: {
                    days: e
                }
            })
        }
        navHistory(e) {
            let n = new ln;
            return n = n.append("fromDate", e.fromDate),
            n = n.append("toDate", e.toDate),
            this.httpService.get(`${this.mtsPath + this.apiUrls.fund}fund/${e.fundCode}/nav-history`, {
                options: {
                    params: n
                }
            })
        }
        issuance(e) {
            return this.httpService.post(this.mtsPath + this.apiUrls.fund + "issuance", {
                body: e
            })
        }
        cancel(e) {
            return this.httpService.post(this.mtsPath + this.apiUrls.fund + "cancel", {
                body: {
                    requestId: e
                }
            })
        }
        cancelRedemption(e) {
            return this.httpService.post(this.mtsPath + this.apiUrls.fund + "cancelRedemption", {
                body: e
            })
        }
        redeem(e) {
            return this.httpService.post(this.mtsPath + this.apiUrls.fund + "redeem", {
                body: e
            }).pipe(H(n => ao( () => n)))
        }
        agreement(e) {
            return this.httpService.post(this.mtsPath + this.apiUrls.fund + "agreement", {
                body: e
            })
        }
        consultationRequest() {
            return this.httpService.post(this.mtsPath + this.apiUrls.crm + "consultation-request", {
                body: {}
            })
        }
    }
    ;
    o.\u0275fac = ( () => {
        let e;
        return function(i) {
            return (e || (e = Rt(o)))(i || o)
        }
    }
    )(),
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var Et = ( () => {
    let o = class o extends ct {
        constructor() {
            super(...arguments),
            this.unleashService = y(zo)
        }
        getPaymentOptions() {
            return this.unleashService.isFeatureEnabled$($o.payment_v2).pipe(Je(e => this.httpService.get(this.mtsPath + this.apiUrls.easy + (e ? "payment/payment-options-v2" : "payment/payment-options")).pipe(k(n => this.setPaymentDaysLabels(n)), k(n => this.setIsT0Valid(n)), k(n => this.filterPaymentDays(n)), k(n => this.sortPaymentDays(n)), k(n => this.addWalletToPaymentOptions(n)), k(n => this.filterBankAccounts(n)), k(n => this.addBourseKalaAccount(n)))))
        }
        setPaymentDaysLabels(e) {
            return e.paymentDays.map(n => {
                n.value = n.value > 0 ? n.value : 0,
                n.text = n.settlementType === ke.settlementT0 ? "\u0627\u0645\u0631\u0648\u0632" : tt.getJDateLongWithDay(n.date)
            }
            ),
            e
        }
        setIsT0Valid(e) {
            return e.bankAccounts.map(i => {
                i.isT0Valid = n(i.shebaNumber)
            }
            ),
            e;
            function n(i) {
                return ["017", "012", "018", "057", "019"].includes((i ?? "-").slice(4, 7))
            }
        }
        filterPaymentDays(e) {
            return e.paymentDays = e.paymentDays.filter(n => ![ke.settlementT4].includes(n.settlementType)),
            e.todayIsHoliday && (e.paymentDays = e.paymentDays.filter(n => ![ke.settlementT0].includes(n.settlementType))),
            e
        }
        sortPaymentDays(e) {
            return e.paymentDays = e.paymentDays.sort( (n, i) => n.settlementType - i.settlementType),
            e
        }
        addWalletToPaymentOptions(e) {
            e.bankAccounts.push(du);
            let n = {
                date: "\u0627\u0645\u0631\u0648\u0632(\u0622\u0646\u06CC)",
                value: null,
                settlementType: ke.settlement_Wallet,
                text: "\u0622\u0646\u06CC _"
            };
            return e.paymentDays.unshift(n),
            e
        }
        filterBankAccounts(e) {
            return W(P({}, e), {
                bankAccounts: e.bankAccounts.filter(n => !!n.isActive)
            })
        }
        addBourseKalaAccount(e) {
            return e.hasImeWallet ? W(P({}, e), {
                bankAccounts: [...e.bankAccounts, Nt]
            }) : e
        }
        getPayments(e) {
            return this.httpService.post(this.mtsPath + this.apiUrls.easy + "payment/payments", {
                body: e,
                guestUserRestriction: !0
            })
        }
        cancelPayment(e) {
            return this.httpService.post(`${this.mtsPath + this.apiUrls.easy}payment/cancel-payment`, {
                body: {
                    id: e
                },
                guestUserRestriction: !0
            })
        }
        getBanks() {
            return this.httpService.getCached("Banks", `${this.mtsPath + this.apiUrls.easy}payment/all-banks`, {
                guestUserRestriction: !0
            }).pipe(k(e => e?.map(n => new ru(P({}, n)))))
        }
        postPayment(e) {
            return this.httpService.post(this.mtsPath + this.apiUrls.easy + "payment/payment", {
                body: e,
                guestUserRestriction: !0
            })
        }
        postBourseKala(e) {
            return this.httpService.post(this.mtsPath + this.apiUrls.easy + "payment/payment-to-ime", {
                body: {
                    value: e
                },
                guestUserRestriction: !0
            })
        }
        addBankAccount(e) {
            return this.httpService.post(this.mtsPath + this.apiUrls.easy + "payment/bank-account", {
                body: e,
                guestUserRestriction: !0
            })
        }
    }
    ;
    o.\u0275fac = ( () => {
        let e;
        return function(i) {
            return (e || (e = Rt(o)))(i || o)
        }
    }
    )(),
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var r0 = (t, o) => o.id
  , s0 = t => ({
    loading: t
});
function l0(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "button", 24),
        h("click", function() {
            let n = g(u).$implicit
              , i = d();
            return v(i.selectBankHandler(n))
        }),
        a(1, "span", 25),
        _(2, "svg-icon", 26),
        a(3, "span", 27),
        l(4),
        r()()()
    }
    if (t & 2) {
        let u = o.$implicit;
        s(2),
        m("iconName", u == null ? null : u.icon),
        s(2),
        F("", u.title, " ")
    }
}
function c0(t, o) {
    if (t & 1 && (a(0, "div"),
    l(1),
    r()),
    t & 2) {
        let u = d(2);
        s(),
        T(u.StaticPaymentConstModel.SelectBankName)
    }
}
function d0(t, o) {
    if (t & 1 && (a(0, "div", 11),
    C(1, c0, 2, 1, "div"),
    r()),
    t & 2) {
        let u = d();
        s(),
        f(u.form.controls.bankId.errors.required ? 1 : -1)
    }
}
function m0(t, o) {
    if (t & 1 && (a(0, "div"),
    l(1),
    r()),
    t & 2) {
        let u = d(2);
        s(),
        F(" ", u.StaticPaymentConstModel.InsertAccountNumber, " ")
    }
}
function p0(t, o) {
    if (t & 1 && (a(0, "div", 11),
    C(1, m0, 2, 1, "div"),
    r()),
    t & 2) {
        let u = d();
        s(),
        f(u.form.controls.accountNumber.errors.required ? 1 : -1)
    }
}
function f0(t, o) {
    if (t & 1 && (a(0, "div"),
    l(1),
    r()),
    t & 2) {
        let u = d(2);
        s(),
        F(" ", u.shebaNumberRemaining(), " ")
    }
}
function C0(t, o) {
    if (t & 1 && (a(0, "div", 11),
    C(1, f0, 2, 1, "div"),
    r()),
    t & 2) {
        let u = d();
        s(),
        f(u.form.controls.shebaNumber.errors && u.form.controls.shebaNumber.errors.minlength || !u.shebaLengthIsCorrect() ? 1 : -1)
    }
}
function h0(t, o) {
    if (t & 1 && (a(0, "div", 17)(1, "div"),
    l(2),
    r()()),
    t & 2) {
        let u = d();
        s(2),
        T(u.StaticPaymentConstModel.ShebaIsIncorrect)
    }
}
var Lu = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.isMobile = ot(void 0),
            this.updatePaymentOptions = J(),
            this.StaticPaymentConstModel = Ce,
            this.fb = y(Te),
            this.modalService = y(Ke),
            this.paymentService = y(Et),
            this.notification = y(Ie),
            this.destroyRef = y(ht),
            this.banks = E([]),
            this.selectedBankText = E(Ce.SelectBankName),
            this.loadingModal = E(!1),
            this.shebaLengthIsCorrect = E(!1),
            this.shebaNumberRemaining = E(""),
            this.form = this.fb.group({
                bankId: [null, R.required],
                accountNumber: ["", R.required],
                shebaNumber: ["", [R.required, R.minLength(24), R.maxLength(24), this.ValidateSheba]]
            })
        }
        ngOnInit() {
            this.getBanks(),
            this.checkShebaInChange()
        }
        closeModalHandler() {
            this.form.reset(),
            this.modalService.dismissAll(),
            this.updatePaymentOptions.emit(!0)
        }
        addBankAccountHandler() {
            this.loadingModal.set(!0),
            this.removeCharactersFromAccountAndSheba("accountNumber"),
            this.removeCharactersFromAccountAndSheba("shebaNumber");
            let e = this.form.value;
            this.paymentService.addBankAccount(e).pipe(V(n => this.handleAddingBankAccountResponse(n)), H( () => {
                this.notification.alert(Ce.ErrorBasic, G.danger)
            }
            ), me( () => this.loadingModal.set(!1))).subscribe()
        }
        handleAddingBankAccountResponse(e) {
            this.loadingModal.set(!1),
            e.isSuccessful ? (this.notification.alert(e.description, G.success),
            this.closeModalHandler(),
            this.updatePaymentOptions.emit(!0)) : this.notification.alert(e.description, G.danger)
        }
        removeCharactersFromAccountAndSheba(e) {
            let n = this.form.get(e);
            n.value && n.setValue(n.value.replace(/\D/g, "", ""))
        }
        selectBankHandler(e) {
            this.form.get("bankId").setValue(e.id),
            this.selectedBankText.set(e.title),
            document.getElementById("accountNumber")?.focus()
        }
        getBanks() {
            this.loadingModal.set(!0),
            this.paymentService.getBanks().pipe(Ge(this.destroyRef), V(e => {
                e && this.banks.set(e)
            }
            ), H( () => {
                this.notification.alert(Ce.ErrorBasic, G.danger)
            }
            ), me( () => this.loadingModal.set(!1))).subscribe()
        }
        ValidateSheba(e) {
            if (e.value && e.value.length === 24) {
                let n = e.value + "1827";
                if (n = n.slice(2) + n.slice(0, 2),
                BigInt(n) % BigInt(97) !== BigInt(1))
                    return {
                        shebaInvalid: !0
                    }
            }
            return null
        }
        checkShebaInChange() {
            this.form.valueChanges.pipe(Hn( (e, n) => JSON.stringify(e) === JSON.stringify(n))).subscribe( () => {
                this.shebaLengthIsCorrect.set(this.checkShebaLengthIsCorrect()),
                this.shebaNumberRemaining.set(this.calculateShebaNumberRemainingChars())
            }
            )
        }
        checkShebaLengthIsCorrect() {
            let e = this.form.get("shebaNumber").value;
            if (e)
                return this.form.get("shebaNumber").setValue(e.replace(/\D/g, "")),
                !(String(this.form.get("shebaNumber").value).length < 24)
        }
        calculateShebaNumberRemainingChars() {
            return `${24 - String(this.form.get("shebaNumber").value).length} ${Ce.ShebaCounterRemaining}`
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["add-bank-account-modal"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        outputs: {
            isMobile: "isMobileChange",
            updatePaymentOptions: "updatePaymentOptions"
        },
        decls: 36,
        vars: 17,
        consts: [[1, "modal-header", "align-items-center", "d-flex", "justify-content-between"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "p-0", "m-0", 3, "click"], ["autocomplete", "off", 3, "ngSubmit", "formGroup", "ngClass"], [1, "modal-body", "pb-5"], [1, "form-group", "mb-2"], ["ngbDropdown", "", "dir", "rtl", "placement", "bottom-right", 1, "flex-grow-1"], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "form-select", "form-select-lg", "text-start"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 1, "w-100", "shadow", "rounded-3"], [1, "list-group", "list-group-flush"], ["type", "button", "ngbDropdownItem", "", 1, "list-group-item", "list-group-item-action", "py-2"], [1, "text-primary", "mt-1", "small"], ["type", "text", "value", "", "inputmode", "numeric", "numbersOnly", "", "id", "accountNumber", "formControlName", "accountNumber", "dir", "ltr", "placeholder", "\u0634\u0645\u0627\u0631\u0647 \u062D\u0633\u0627\u0628", 1, "form-control", "form-control-lg", "text-end", "number-input"], [1, "form-group", "mb-0"], [1, "d-flex", "align-items-center"], ["type", "text", "inputmode", "numeric", "numbersOnly", "", "id", "shebaNumber", "maxlength", "24", "placeholder", "\u0634\u0645\u0627\u0631\u0647 \u0634\u0628\u0627", "minlength", "24", "formControlName", "shebaNumber", "dir", "ltr", 1, "text-end", "form-control", "form-control-lg", "number-input"], [1, "ms-2"], [1, "text-danger", "mt-2"], [1, "mt-3", "mb-0", "p-0", "text-global", "list-unstyled"], ["width", "18", "height", "18", 1, "", 3, "iconName"], [1, "modal-footer"], [1, "m-0", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-success", "px-4", 3, "disabled"], ["type", "button", "ngbDropdownItem", "", 1, "list-group-item", "list-group-item-action", "py-2", 3, "click"], [1, "d-flex", "gap-1", "align-items-center"], ["width", "24", "height", "24", 3, "iconName"], [1, "fw-bold"]],
        template: function(n, i) {
            n & 1 && (a(0, "div", 0)(1, "span", 1),
            l(2),
            r(),
            a(3, "button", 2),
            h("click", function() {
                return i.closeModalHandler()
            }),
            r()(),
            a(4, "form", 3),
            h("ngSubmit", function() {
                return i.addBankAccountHandler()
            }),
            a(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "button", 7),
            l(9),
            S(10, "positiveNumber"),
            r(),
            a(11, "div", 8)(12, "div", 9),
            ne(13, l0, 5, 2, "button", 10, r0),
            r()()(),
            C(15, d0, 2, 1, "div", 11),
            r(),
            a(16, "div", 5),
            _(17, "input", 12),
            C(18, p0, 2, 1, "div", 11),
            r(),
            a(19, "div", 13)(20, "div", 14),
            _(21, "input", 15),
            a(22, "span", 16),
            l(23, "IR"),
            r()(),
            C(24, C0, 2, 1, "div", 11)(25, h0, 3, 1, "div", 17),
            a(26, "ul", 18)(27, "li"),
            _(28, "svg-icon", 19),
            l(29),
            r()()()(),
            a(30, "div", 20)(31, "div", 21)(32, "button", 22),
            h("click", function() {
                return i.closeModalHandler()
            }),
            l(33),
            r(),
            a(34, "button", 23),
            l(35),
            r()()()()),
            n & 2 && (s(2),
            T(i.StaticPaymentConstModel.AddBankAccount),
            s(2),
            m("formGroup", i.form)("ngClass", q(15, s0, i.loadingModal())),
            s(5),
            F(" ", A(10, 13, i.selectedBankText()), " "),
            s(4),
            ie(i.banks()),
            s(2),
            f(i.form.controls.bankId.invalid && (i.form.controls.accountNumber.dirty || i.form.controls.accountNumber.touched) ? 15 : -1),
            s(3),
            f(i.form.controls.accountNumber.invalid && (i.form.controls.accountNumber.dirty || i.form.controls.accountNumber.touched) ? 18 : -1),
            s(6),
            f(i.form.controls.shebaNumber.dirty || i.form.controls.shebaNumber.touched ? 24 : -1),
            s(),
            f((i.form.controls.shebaNumber.dirty || i.form.controls.shebaNumber.touched) && i.form.controls.shebaNumber.errors && i.form.controls.shebaNumber.errors.shebaInvalid ? 25 : -1),
            s(3),
            m("iconName", i.icons.InfoBox),
            s(),
            F(" ", i.StaticPaymentConstModel.AccountMustBeForUser, " "),
            s(4),
            F(" ", i.StaticPaymentConstModel.ButtonCancel, " "),
            s(),
            m("disabled", !i.form.valid),
            s(),
            F(" ", i.StaticPaymentConstModel.ButtonRegister, " "))
        },
        dependencies: [le, z, yn, he, Se, lt, Be, xe, Do, Mo, Fe, Xe, Ft, fn, Cn, hn, No, B],
        styles: [`.number-input[_ngcontent-%COMP%]{text-align:left!important}.number-input[_ngcontent-%COMP%]::placeholder{text-align:right!important}
/*# sourceMappingURL=add-bank-account-modal.component-XWS247PG.css.map */`],
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var y0 = t => ({
    "rotate-180": t
});
function _0(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "svg-icon", 6),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.showRemoveConfirm.set(!1))
        }),
        r()
    }
    if (t & 2) {
        let u = d(2);
        m("iconName", u.icons.Close)
    }
}
function g0(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 1),
        _(1, "svg-icon", 2),
        l(2, " \u0622\u06CC\u0627 \u0627\u0632 \u062D\u0630\u0641 \u0627\u06CC\u0646 \u0645\u0648\u0631\u062F \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062F\u0627\u0631\u06CC\u062F\u061F "),
        a(3, "div", 3),
        C(4, _0, 1, 1, "svg-icon", 4),
        a(5, "svg-icon", 5),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.cancelPaymentHandler())
        }),
        r()()()
    }
    if (t & 2) {
        let u = d();
        s(),
        m("iconName", u.icons.Alert),
        s(3),
        f(u.cancelLoading() ? -1 : 4),
        s(),
        m("iconName", u.cancelLoading() ? "loading" : "check")("ngClass", u.cancelLoading() ? "spin" : "text-success")
    }
}
function v0(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "svg-icon", 13),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.showRemoveConfirm.set(!0))
        }),
        r()
    }
    if (t & 2) {
        let u = d(2);
        m("iconName", u.icons.Delete)
    }
}
function b0(t, o) {
    if (t & 1 && (a(0, "div", 16)(1, "div", 17),
    l(2, "\u067E\u06CC\u0627\u0645 \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631:"),
    r(),
    l(3),
    r()),
    t & 2) {
        let u = d(3);
        s(3),
        F(" ", u.item().brokerMessage, " ")
    }
}
function x0(t, o) {
    if (t & 1 && (a(0, "div", 14)(1, "div", 15),
    l(2, "\u062D\u0633\u0627\u0628 \u0628\u0627\u0646\u06A9\u06CC:"),
    r(),
    l(3),
    r(),
    C(4, b0, 4, 1, "div", 16)),
    t & 2) {
        let u = d(2);
        s(3),
        F(" ", u.item().accountNumber, " "),
        s(),
        f(u.item().brokerMessage ? 4 : -1)
    }
}
function S0(t, o) {
    if (t & 1 && (a(0, "div", 7)(1, "svg-icon", 8),
    l(2, " >"),
    r(),
    a(3, "span", 9),
    l(4),
    S(5, "jdateLong"),
    S(6, "positiveNumber"),
    r(),
    a(7, "span", 10),
    l(8),
    S(9, "number"),
    S(10, "positiveNumber"),
    a(11, "span", 9),
    l(12, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()(),
    C(13, v0, 1, 1, "svg-icon", 11),
    _(14, "svg-icon", 12),
    r(),
    C(15, x0, 5, 2)),
    t & 2) {
        let u, e, n, i, c = d();
        s(),
        He("title", c.paymentStateToText((u = c.item()) == null ? null : u.state)),
        m("iconName", c.getIcon((e = c.item()) == null ? null : e.state).icon)("ngClass", c.getIcon((n = c.item()) == null ? null : n.state).class),
        s(3),
        T(A(6, 12, ze(5, 9, (i = c.item()) == null ? null : i.requestForDate, !0))),
        s(4),
        F("", A(10, 16, A(9, 14, c.item().requestedAmount)), " "),
        s(5),
        f(c.item().cancellable ? 13 : -1),
        s(),
        m("iconName", c.icons.ChevronDown)("ngClass", q(18, y0, c.showTooltip())),
        s(),
        f(c.showTooltip() ? 15 : -1)
    }
}
var Hu = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.item = w.required(),
            this.reloadPayments = J(),
            this.PaymentStateType = su,
            this.showRemoveConfirm = E(!1),
            this.cancelLoading = E(!1),
            this.showTooltip = E(!1),
            this.paymentService = y(Et),
            this.notificationService = y(Ie)
        }
        toggleTooltipHandler() {
            this.showTooltip.update(e => !e)
        }
        paymentStateToText(e) {
            return cu[+e]
        }
        getIcon(e) {
            return lu[+e]
        }
        cancelPaymentHandler() {
            this.cancelLoading.set(!0),
            this.paymentService.cancelPayment(this.item().requestedId).pipe(V( () => this.cancelSuccessCleanUps()), H( () => (this.notificationService.alert(Ce.ErrorBasic, G.danger),
            Z(null))), me( () => this.cancelLoading.set(!1))).subscribe()
        }
        cancelSuccessCleanUps() {
            this.showRemoveConfirm.set(!1),
            this.reloadPayments.emit(),
            this.notificationService.alert(Ce.HistoryDeletedSuccessfully, G.success)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["payment-history-item"]],
        inputs: {
            item: [1, "item"]
        },
        outputs: {
            reloadPayments: "reloadPayments"
        },
        decls: 3,
        vars: 1,
        consts: [[1, "payments__item", "p-1", "cup", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "p-1", "px-2", "gap-3"], ["width", "20", "height", "20", 1, "text-warning", 3, "iconName"], [1, "ms-auto"], ["width", "24", "height", "24", 1, "text-danger", "me-2", "pe-0", "ps-2", "cup", 3, "iconName"], ["width", "24", "height", "24", "data-cy", "cancel-payment-confirm", 1, "ps-2", 3, "click", "iconName", "ngClass"], ["width", "24", "height", "24", 1, "text-danger", "me-2", "pe-0", "ps-2", "cup", 3, "click", "iconName"], [1, "d-flex", "align-items-center", "justify-content-between", "gap-2"], ["width", "20", "height", "20", 1, "px-2", 3, "iconName", "ngClass", "title"], [1, "text-secondary"], [1, "text-body", "flex-grow-1", "text-end"], ["width", "20", "height", "20", "data-cy", "cancel-payment-btn", 1, "text-muted", "text-hover-danger", "px-2", "text-center", 3, "iconName"], ["width", "24", "height", "24", 1, "text-secondary", "px-2", "my-1", 3, "iconName", "ngClass"], ["width", "20", "height", "20", "data-cy", "cancel-payment-btn", 1, "text-muted", "text-hover-danger", "px-2", "text-center", 3, "click", "iconName"], [1, "d-flex", "ms-5", "no-wrap"], [1, "text-body", "me-1"], [1, "d-flex", "ms-5"], [1, "text-body", "me-1", "no-wrap"]],
        template: function(n, i) {
            n & 1 && (a(0, "div", 0),
            h("click", function() {
                return i.toggleTooltipHandler()
            }),
            C(1, g0, 6, 4, "div", 1)(2, S0, 16, 20),
            r()),
            n & 2 && (s(),
            f(i.showRemoveConfirm() ? 1 : 2))
        },
        dependencies: [le, z, se, Ft, Ro, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var F0 = (t, o) => o.requestedId;
function T0(t, o) {
    if (t & 1 && (a(0, "div", 0),
    _(1, "svg-icon", 2),
    l(2, " \u062A\u0627\u0631\u06CC\u062E\u0686\u0647 \u0628\u0631\u062F\u0627\u0634\u062A \u0648\u062C\u0647 "),
    r()),
    t & 2) {
        let u = d();
        s(),
        m("iconName", u.icons.History)
    }
}
function I0(t, o) {
    if (t & 1 && (a(0, "div", 3),
    _(1, "svg-icon", 4),
    a(2, "p"),
    l(3, "\u062F\u0631 \u062D\u0627\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A"),
    r()()),
    t & 2) {
        let u = d(2);
        s(),
        m("iconName", u.icons.Loading)
    }
}
function A0(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 3)(1, "p"),
        l(2, "\u062E\u0637\u0627 \u062F\u0631 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A"),
        r(),
        a(3, "button", 5),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.getPayments())
        }),
        l(4, "\u062A\u0644\u0627\u0634 \u0645\u062C\u062F\u062F"),
        r()()
    }
}
function w0(t, o) {
    if (t & 1 && (a(0, "div", 1),
    C(1, I0, 4, 1, "div", 3)(2, A0, 5, 0, "div", 3),
    r()),
    t & 2) {
        let u = d();
        s(),
        f(u.loadingPaymentHistory() ? 1 : u.retryLoadingPaymentHistory() ? 2 : -1)
    }
}
function k0(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "payment-history-item", 9),
        h("reloadPayments", function() {
            g(u);
            let n = d(2);
            return v(n.reloadPaymentsHandler())
        }),
        r()
    }
    if (t & 2) {
        let u = o.$implicit;
        m("item", u)
    }
}
function E0(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 8)(1, "button", 10),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.loadMore())
        }),
        l(2, "\u0646\u0645\u0627\u06CC\u0634 \u0628\u06CC\u0634\u062A\u0631"),
        r()()
    }
}
function D0(t, o) {
    if (t & 1 && (a(0, "div", 6),
    ne(1, k0, 1, 1, "payment-history-item", 7, F0),
    r(),
    C(3, E0, 3, 0, "div", 8)),
    t & 2) {
        let u = d();
        s(),
        ie(u.paymentHistory()),
        s(2),
        f(u.hasMore() ? 3 : -1)
    }
}
var mi = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.reloadPaymentOptions = J(),
            this.destroyRef$ = y(ht),
            this.paymentHistory = E([]),
            this.loadingMore = E(!1),
            this.loadingPaymentHistory = E(!1),
            this.retryLoadingPaymentHistory = E(!1),
            this.hasMore = E(!1),
            this.pageSize = E({
                page: 0,
                size: 15
            }),
            this.paymentService = y(Et),
            this.NotificationService = y(Ie)
        }
        ngOnInit() {
            this.getPayments()
        }
        loadMore() {
            this.loadingMore.set(!0),
            this.pageSize.update(e => W(P({}, e), {
                page: e.page + 1,
                size: 15
            })),
            this.paymentService.getPayments(this.pageSize()).pipe(V(e => this.addToPayments(e)), H( () => {
                this.loadingMore.set(!1),
                this.NotificationService.alert(Ce.ServerError, G.danger)
            }
            )).subscribe()
        }
        addToPayments(e) {
            this.paymentHistory.update(n => [...n, ...e]),
            this.checkForMore(e.length),
            this.loadingMore.set(!1)
        }
        checkForMore(e) {
            this.hasMore.set(e === this.pageSize().size)
        }
        getPayments() {
            this.loadingPaymentHistory.set(!0),
            this.paymentService.getPayments(this.pageSize()).pipe(H( () => {
                this.loadingPaymentHistory.set(!1),
                this.retryLoadingPaymentHistory.set(!0)
            }
            )).subscribe(e => {
                this.checkMoreAndLoading(e)
            }
            )
        }
        checkMoreAndLoading(e) {
            this.loadingPaymentHistory.set(!1),
            this.retryLoadingPaymentHistory.set(!1),
            this.paymentHistory.set(e),
            this.checkForMore(e.length),
            this.loadingPaymentHistory.set(!1)
        }
        reloadPaymentsHandler() {
            this.getPayments(),
            this.reloadPaymentOptions.emit()
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["payment-history"]],
        outputs: {
            reloadPaymentOptions: "reloadPaymentOptions"
        },
        decls: 3,
        vars: 2,
        consts: [[1, "text-secondary", "px-3", "mt-3", "mb-2"], [1, "d-flex", "flex-column", "align-items-center", "mb-4", "text-muted"], ["width", "24", "height", "24", 1, "", 3, "iconName"], [1, "text-center", "mt-3"], ["width", "36", "height", "36", 1, "spin", 3, "iconName"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "list-group", "list-group-flush", "p-0", "mb-0", "payments"], ["data-cy", "payment-history-item", 1, "list-group-item", "bg-principal", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "bg-principal-hover", "p-0", 3, "item"], [1, "py-3", "text-center"], ["data-cy", "payment-history-item", 1, "list-group-item", "bg-principal", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "bg-principal-hover", "p-0", 3, "reloadPayments", "item"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]],
        template: function(n, i) {
            if (n & 1 && C(0, T0, 3, 1, "div", 0)(1, w0, 3, 1, "div", 1)(2, D0, 4, 1),
            n & 2) {
                let c;
                f(i.paymentHistory() && ((c = i.paymentHistory()) == null ? null : c.length) > 0 ? 0 : -1),
                s(),
                f(i.loadingPaymentHistory() || i.retryLoadingPaymentHistory() ? 1 : 2)
            }
        },
        dependencies: [le, Hu, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var M0 = (t, o) => o == null ? null : o.id
  , N0 = t => ({
    "payment-day-disabled": t
});
function P0(t, o) {
    t & 1 && (a(0, "div", 3),
    l(1, "\u062D\u0633\u0627\u0628 \u0645\u0642\u0635\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"),
    r())
}
function V0(t, o) {
    t & 1 && (a(0, "span", 12),
    l(1, " \u0641\u0639\u0627\u0644 \u0646\u0634\u062F\u0647"),
    r())
}
function O0(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "button", 10),
        h("click", function() {
            g(u);
            let n = d().$implicit
              , i = d();
            return v(i.changeSelectedBankAccountHandler(n))
        }),
        a(1, "span", 11),
        l(2),
        C(3, V0, 2, 0, "span", 12),
        r(),
        a(4, "span"),
        l(5),
        S(6, "positiveNumber"),
        r()()
    }
    if (t & 2) {
        let u = d().$implicit
          , e = d();
        m("ngClass", q(6, N0, (e.walletIsNotActive() || e.walletNeedsVerify()) && u.id === e.WalletConstants.BankAccountId)),
        s(2),
        F("", u.bankTitle, " "),
        s(),
        f(u.id === e.WalletConstants.BankAccountId && e.walletIsNotActive() ? 3 : -1),
        s(2),
        F(" ", A(6, 4, u.bankAccountCode), " ")
    }
}
function B0(t, o) {
    if (t & 1 && C(0, O0, 7, 8, "button", 9),
    t & 2) {
        let u = o.$implicit
          , e = d();
        f(u.id === e.WalletConstants.BankAccountId && e.showWallet() || u.id !== e.WalletConstants.BankAccountId ? 0 : -1)
    }
}
var pi = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.WalletConstants = pt,
            this.paymentOptions = w(void 0),
            this.walletIsNotActive = w(void 0),
            this.walletNeedsVerify = w(void 0),
            this.showWallet = w(void 0),
            this.isFormSubmitted = w(void 0),
            this.openBankAccountModal = J(),
            this.selectBankAccount = J(),
            this.selectedBank = w(void 0),
            this.brokerAccountDDText = E(Ce.SelectBankAccount)
        }
        openAddBankAccountModalHandler() {
            this.openBankAccountModal.emit()
        }
        changeSelectedBankAccountHandler(e) {
            if (this.selectBankAccount.emit(e ?? null),
            !e)
                this.brokerAccountDDText.set(Ce.SelectBankAccount);
            else
                switch (e.id) {
                case pt.BankAccountId:
                    this.brokerAccountDDText.set(`${e.bankTitle}  ${e.bankAccountCode && e.bankAccountCode.length > 1 ? e?.bankAccountCode.replace(/(\d+)-(\d+)-(\d+)-(\d+)/g, "$4-$3-$2-$1") : Ce.WalletCardNotActive}`);
                    break;
                case Nt.id:
                    this.brokerAccountDDText.set(e.bankTitle);
                    break;
                default:
                    this.brokerAccountDDText.set(`\u0628\u0627\u0646\u06A9  ${e.bankTitle} - ${e?.bankAccountCode?.replace(/[-\s]/g, "")}`);
                    break
                }
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["payment-user-bank-accounts"]],
        inputs: {
            paymentOptions: [1, "paymentOptions"],
            walletIsNotActive: [1, "walletIsNotActive"],
            walletNeedsVerify: [1, "walletNeedsVerify"],
            showWallet: [1, "showWallet"],
            isFormSubmitted: [1, "isFormSubmitted"],
            selectedBank: [1, "selectedBank"]
        },
        outputs: {
            openBankAccountModal: "openBankAccountModal",
            selectBankAccount: "selectBankAccount"
        },
        decls: 14,
        vars: 5,
        consts: [[1, "d-flex", "gap-2", "mb-2"], ["ngbDropdown", "", "dir", "rtl", "placement", "bottom-right", 1, "flex-grow-1", 2, "width", "calc(100% - 44px)"], ["data-cy", "payment-user-banks-dd", "type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "form-select", "form-select-lg", "text-start", "text-truncate", "form-invalid"], [1, "invalid-feedback"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 1, "bg-principal", "w-100", "py-0"], [1, "w-100", "shadow", "overflow-auto", "rounded-3", 2, "max-height", "180px"], [1, "list-group", "list-group-flush"], ["title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u0634\u0645\u0627\u0631\u0647 \u062D\u0633\u0627\u0628", 1, "btn", "btn-success", "flex-shrink-0", "align-self-start", 3, "click"], ["width", "20", "height", "20", 3, "iconName"], ["data-cy", "payment-user-bank", "type", "button", "ngbDropdownItem", "", 1, "list-group-item", "list-group-item-action", "p-2", "d-flex", "justify-content-between", "align-items-center", 3, "ngClass"], ["data-cy", "payment-user-bank", "type", "button", "ngbDropdownItem", "", 1, "list-group-item", "list-group-item-action", "p-2", "d-flex", "justify-content-between", "align-items-center", 3, "click", "ngClass"], [1, "fw-bold"], [1, "text-warning", "small", "ms-1"]],
        template: function(n, i) {
            if (n & 1 && (a(0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "span"),
            l(4, "\xA0"),
            r(),
            l(5),
            r(),
            C(6, P0, 2, 0, "div", 3),
            a(7, "div", 4)(8, "div", 5)(9, "div", 6),
            ne(10, B0, 1, 1, null, null, M0),
            r()()()(),
            a(12, "div", 7),
            h("click", function() {
                return i.openAddBankAccountModalHandler()
            }),
            _(13, "svg-icon", 8),
            r()()),
            n & 2) {
                let c;
                s(2),
                Jt("form-invalid", i.isFormSubmitted() && !i.selectedBank()),
                s(3),
                F(" ", i.brokerAccountDDText(), " "),
                s(),
                f(i.isFormSubmitted() && !i.selectedBank() ? 6 : -1),
                s(4),
                ie((c = i.paymentOptions()) == null ? null : c.bankAccounts),
                s(3),
                m("iconName", i.icons.CardAdd)
            }
        },
        dependencies: [le, z, Ft, hn, yn, fn, Cn, B],
        styles: [`.payment-day-disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.text-reverse[_ngcontent-%COMP%]{margin-right:2px;margin-left:3px}.custom-radio[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]:active:before{background-color:#0c3299!important}.top-order[_ngcontent-%COMP%]{top:0!important}
/*# sourceMappingURL=payment-user-bank-accounts.component-5TWAZHOW.css.map */`],
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var R0 = (t, o) => o == null ? null : o.date
  , W0 = t => ({
    "payment-day-disabled pe-none": t
})
  , $0 = t => ({
    "bg-principal bg-principal-3x-dark bg-principal-4x-dark-mobile rounded-bottom py-1 px-2 mx-3 border-top": t
});
function q0(t, o) {
    if (t & 1 && (_(0, "div", 13),
    S(1, "positiveNumber")),
    t & 2) {
        let u = d(2).$implicit;
        m("innerHTML", A(1, 1, u.tooltip), Wt)
    }
}
function j0(t, o) {
    t & 1 && (a(0, "small", 14),
    l(1, "\u0645\u0641\u06CC\u062F \u06A9\u0627\u0631\u062A"),
    r())
}
function U0(t, o) {
    t & 1 && (a(0, "small", 15),
    l(1, "\u0645\u0641\u06CC\u062F \u06A9\u0627\u0631\u062A \u0641\u0639\u0627\u0644 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A!"),
    r())
}
function L0(t, o) {
    if (t & 1 && C(0, j0, 2, 0, "small", 14)(1, U0, 2, 0, "small", 15),
    t & 2) {
        let u = d(3);
        f(u.walletIsNotActive() ? 1 : 0)
    }
}
function H0(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "span", 16),
        h("click", function(n) {
            g(u);
            let i = d(2).$implicit
              , c = d();
            return v(c.onSelectPaymentValueHandler(n, i.value))
        }),
        l(1, "\u062A\u0627 \u0633\u0642\u0641 "),
        a(2, "span", 10),
        l(3),
        S(4, "number"),
        S(5, "positiveNumber"),
        r(),
        l(6, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
        r()
    }
    if (t & 2) {
        let u = d(2)
          , e = u.$implicit
          , n = u.$index;
        m("id", "payment-day-" + n + "-span"),
        s(3),
        T(A(5, 4, A(4, 2, e.value)))
    }
}
function z0(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 17)(1, "button", 18),
        h("click", function() {
            g(u);
            let n = d(4);
            return v(n.openWalletHandler())
        }),
        l(2, " \u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC \u0645\u062C\u062F\u062F "),
        r()()
    }
}
function G0(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 17)(1, "button", 18),
        h("click", function() {
            g(u);
            let n = d(4);
            return v(n.openWalletHandler())
        }),
        l(2, " \u0641\u0639\u0627\u0644\u200C\u0633\u0627\u0632\u06CC "),
        r()()
    }
}
function K0(t, o) {
    if (t & 1 && C(0, z0, 3, 0, "div", 17)(1, G0, 3, 0, "div", 17),
    t & 2) {
        let u = d(3);
        f(u.walletNeedsVerify() ? 0 : u.walletIsNotActive() ? 1 : -1)
    }
}
function Y0(t, o) {
    if (t & 1 && (a(0, "div", 12)(1, "div", 15),
    _(2, "svg-icon", 19),
    a(3, "small"),
    l(4),
    r()()()),
    t & 2) {
        let u = d(3);
        m("ngClass", q(3, $0, u.PaymentConsts.TodayPaymentTooltip)),
        s(2),
        m("iconName", u.icons.Alert),
        s(2),
        T(u.PaymentConsts.TodayPaymentTooltip)
    }
}
function Q0(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 4)(1, "div", 5, 0),
        h("click", function() {
            g(u);
            let n = d().$implicit
              , i = d();
            return v(!n.disabled && i.selectPaymentDayHandler(n))
        })("mouseenter", function() {
            g(u);
            let n = Mt(2)
              , i = d().$implicit
              , c = d();
            return v(i.settlementType === c.SettlementType.settlementT1 && (i == null ? null : i.tooltip) && n.open())
        })("mouseleave", function() {
            g(u);
            let n = Mt(2);
            return v(n.close())
        }),
        C(3, q0, 2, 3, "ng-template", null, 1, qt),
        a(5, "div", 6)(6, "label", 7)(7, "input", 8),
        h("change", function() {
            g(u);
            let n = d().$implicit
              , i = d();
            return v(i.selectPaymentDayHandler(n))
        }),
        r(),
        _(8, "span"),
        r(),
        a(9, "div", 9)(10, "span", 10),
        l(11),
        S(12, "positiveNumber"),
        r(),
        C(13, L0, 2, 1),
        r(),
        C(14, H0, 7, 6, "span", 11),
        r(),
        C(15, K0, 2, 1),
        r(),
        C(16, Y0, 5, 5, "div", 12),
        r()
    }
    if (t & 2) {
        let u, e = Mt(4), n = d(), i = n.$implicit, c = n.$index, p = d();
        Jt("form-invalid", p.isFormSubmitted() && !p.selectedPaymentDay()),
        s(),
        Jt("form-invalid", p.isFormSubmitted() && !p.selectedPaymentDay() && !i.disabled),
        m("id", "payment-day-" + c)("ngbPopover", e),
        s(4),
        m("id", "payment-day-" + c + "-div")("ngClass", q(21, W0, i.disabled)),
        s(),
        He("for", i.date),
        m("id", "payment-day-" + c + "-label"),
        s(),
        He("value", i.date),
        He("id", i.date),
        m("checked", i.checked)("disabled", i.disabled),
        s(4),
        F(" ", A(12, 19, i.text), " "),
        s(2),
        f(i.settlementType === p.SettlementType.settlement_Wallet ? 13 : -1),
        s(),
        f(i.settlementType !== p.SettlementType.settlement_Wallet || i.settlementType === p.SettlementType.settlement_Wallet && !p.walletIsNotActive() && !p.walletNeedsVerify() ? 14 : -1),
        s(),
        f(i.settlementType === p.SettlementType.settlement_Wallet ? 15 : -1),
        s(),
        f(i.settlementType === p.SettlementType.settlementT0 && p.selectedBank() && p.selectedBank().id !== p.WalletConstants.BankAccountId && p.selectedBank().id !== p.BourseKalaInfo.id && !((u = p.selectedBank()) != null && u.isT0Valid) ? 16 : -1)
    }
}
function J0(t, o) {
    if (t & 1 && C(0, Q0, 17, 23, "div", 3),
    t & 2) {
        let u = o.$implicit
          , e = d();
        f(u.settlementType !== e.SettlementType.settlement_Wallet || u.settlementType === e.SettlementType.settlement_Wallet && e.showWallet() ? 0 : -1)
    }
}
var fi = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.SettlementType = ke,
            this.PaymentConsts = Ce,
            this.BourseKalaInfo = Nt,
            this.WalletConstants = pt,
            this.isMobile = w(!0),
            this.paymentOptions = w(void 0),
            this.walletNeedsVerify = w(void 0),
            this.walletIsNotActive = w(void 0),
            this.showWallet = w(void 0),
            this.isFormSubmitted = w(void 0),
            this.selectedPaymentDay = w(void 0),
            this.selectedBank = w(void 0),
            this.selectPaymentDay = J(),
            this.setPrice = J(),
            this.router = y(St),
            this.sidePanelServiceService = y(pn)
        }
        selectPaymentDayHandler(e) {
            this.selectPaymentDay.emit(e)
        }
        onSelectPaymentValueHandler(e, n) {
            e.stopPropagation(),
            this.setPrice.emit(n)
        }
        openWalletHandler() {
            this.isMobile() ? this.router.navigateByUrl(`/menu/${Yn.WALLET_CARD_ROUTE}`) : this.sidePanelServiceService.openSidePanelFromRoute({
                sidePanel: cn.WalletCard
            })
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["payment-user-payment-days"]],
        inputs: {
            isMobile: [1, "isMobile"],
            paymentOptions: [1, "paymentOptions"],
            walletNeedsVerify: [1, "walletNeedsVerify"],
            walletIsNotActive: [1, "walletIsNotActive"],
            showWallet: [1, "showWallet"],
            isFormSubmitted: [1, "isFormSubmitted"],
            selectedPaymentDay: [1, "selectedPaymentDay"],
            selectedBank: [1, "selectedBank"]
        },
        outputs: {
            selectPaymentDay: "selectPaymentDay",
            setPrice: "setPrice"
        },
        decls: 4,
        vars: 0,
        consts: [["popover", "ngbPopover"], ["popContent", ""], [1, "invalid-feedback"], ["data-cy", "payment-user-payment-days-item", 1, "payment-user-payment-days-item", 3, "form-invalid"], ["data-cy", "payment-user-payment-days-item", 1, "payment-user-payment-days-item"], ["triggers", "manual", "popover-class", "increase-popover-width", 1, "payment-day", "p-2", "rounded-3", "bg-principal", "bg-principal-4x-dark", "bg-principal-hover", "cup", "position-relative", "border", "form-invalid", 3, "click", "mouseenter", "mouseleave", "id", "ngbPopover"], [1, "radio-custom", "align-items-center", "gap-2", 3, "id", "ngClass"], [1, "m-0", 3, "for", "id"], ["data-cy", "payment-user-payment-days-item-input", "type", "radio", 1, "custom-control-input", 3, "change", "checked", "value", "disabled", "id"], [1, "flex-grow-1"], [1, "text-body"], [1, "icon", "d-flex", "gap-1", "text-secondary", 3, "id"], [3, "ngClass"], [3, "innerHTML"], [1, "text-global"], [1, "text-primary"], [1, "icon", "d-flex", "gap-1", "text-secondary", 3, "click", "id"], [1, "position-absolute", "full-offset", "p-2", "text-end"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "py-0", "top-order", 3, "click"], ["width", "18", "height", "18", 1, "", 3, "iconName"]],
        template: function(n, i) {
            if (n & 1 && (ne(0, J0, 1, 1, null, null, R0),
            a(2, "div", 2),
            l(3, "\u062A\u0627\u0631\u06CC\u062E \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"),
            r()),
            n & 2) {
                let c;
                ie((c = i.paymentOptions()) == null ? null : c.paymentDays)
            }
        },
        dependencies: [le, z, se, Ft, ni, B],
        styles: [`.payment-day-disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.payment-user-payment-days-item[_ngcontent-%COMP%] + .payment-user-payment-days-item[_ngcontent-%COMP%]{margin-top:.5rem}
/*# sourceMappingURL=payment-user-payment-days.component-FKRHME4W.css.map */`],
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var Z0 = ["myForm"]
  , X0 = () => [import("./chunk-SSSIYTIF.js").then(t => t.PaymentAttentionComponent)]
  , er = t => ({
    loading: t
})
  , tr = () => ({
    selected: !0
})
  , nr = () => ({
    "input-highlight": !0
})
  , ir = t => ({
    "pe-none": t
})
  , or = t => ({
    spin: t
});
function ur(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 2)(1, "p"),
        l(2, "\u062E\u0637\u0627 \u062F\u0631 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A"),
        r(),
        a(3, "button", 4),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.reload(!1))
        }),
        l(4, "\u062A\u0644\u0627\u0634 \u0645\u062C\u062F\u062F"),
        r()()
    }
}
function ar(t, o) {
    t & 1 && (a(0, "div", 15),
    l(1, "\u0645\u0628\u0644\u063A \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F"),
    r())
}
function rr(t, o) {
    if (t & 1 && (a(0, "div", 16),
    l(1),
    r()),
    t & 2) {
        let u = d(2);
        s(),
        T(u.valueInPersian())
    }
}
function sr(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "form", 5, 0),
        h("ngSubmit", function() {
            g(u);
            let n = d();
            return v(n.submitFormHandler())
        }),
        a(2, "div")(3, "div", 6),
        l(4, "\u0648\u0627\u0631\u06CC\u0632 \u0628\u0647:"),
        r(),
        a(5, "payment-user-bank-accounts", 7),
        h("openBankAccountModal", function() {
            g(u);
            let n = d();
            return v(n.openAddBankAccountModalHandler())
        })("selectBankAccount", function(n) {
            g(u);
            let i = d();
            return v(i.selectBankAccountHandler(n))
        }),
        r(),
        a(6, "div", 6),
        l(7, "\u062A\u0627\u0631\u06CC\u062E \u0628\u0631\u062F\u0627\u0634\u062A:"),
        r(),
        _(8, "div", 8),
        a(9, "payment-user-payment-days", 9),
        h("setPrice", function(n) {
            g(u);
            let i = d();
            return v(i.onSelectPaymentValueHandler(n))
        })("selectPaymentDay", function(n) {
            g(u);
            let i = d();
            return v(i.onSelectPaymentDayHandler(n))
        }),
        r()(),
        a(10, "div", 10)(11, "div", 11)(12, "span", 12),
        l(13, "\u0645\u0628\u0644\u063A"),
        r(),
        a(14, "custom-number-box", 13),
        h("tap", function() {
            g(u);
            let n = d();
            return v(n.onValueTapHandler())
        })("touchstart", function() {
            g(u);
            let n = d();
            return v(n.onValueTapHandler())
        }),
        r(),
        a(15, "span", 14),
        l(16, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
        r()(),
        C(17, ar, 2, 0, "div", 15)(18, rr, 2, 1, "div", 16),
        r(),
        a(19, "button", 17)(20, "span", 18),
        l(21, " \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A "),
        r(),
        _(22, "svg-icon", 19),
        r()()
    }
    if (t & 2) {
        let u, e, n, i = Mt(1), c = d();
        m("formGroup", c.form),
        s(5),
        m("paymentOptions", c.paymentOptions())("walletIsNotActive", c.walletIsNotActive())("walletNeedsVerify", c.walletNeedsVerify())("showWallet", c.showWallet())("selectedBank", c.selectedBank())("isFormSubmitted", i.submitted),
        s(4),
        m("paymentOptions", c.paymentOptions())("isMobile", c.isMobile())("walletNeedsVerify", c.walletNeedsVerify())("walletIsNotActive", c.walletIsNotActive())("showWallet", c.showWallet())("selectedPaymentDay", c.selectedPaymentDay())("selectedBank", c.selectedBank())("isFormSubmitted", i.submitted),
        s(2),
        Jt("form-invalid", i.submitted && ((u = c.form.get("value")) == null ? null : u.invalid)),
        m("ngClass", Vi(26, tr)),
        s(3),
        m("focusInInit", !0)("form", c.form)("readOnly", c.isMobile())("ngClass", Vi(27, nr)),
        s(3),
        f(i.submitted && (!((e = c.form.get("value")) == null || e.errors == null) && e.errors.required) ? 17 : -1),
        s(),
        f(c.valueInPersian() && (!i.submitted || (n = c.form.get("value")) != null && n.valid) ? 18 : -1),
        s(),
        m("ngClass", q(28, ir, c.loadingPaymentButton())),
        s(3),
        m("ngClass", q(30, or, c.loadingPaymentButton()))
    }
}
function lr(t, o) {
    if (t & 1 && _(0, "payment-attention", 20),
    t & 2) {
        let u = d();
        m("paymentOptions", u.paymentOptions())("selectedBank", u.selectedBank())
    }
}
var Ci = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.WalletConstants = pt,
            this.SettlementType = ke,
            this.paymentUserBankAccountsComponent = it(pi),
            this.paymentUserPaymentDaysComponent = it(fi),
            this.myForm = it("myForm"),
            this.keyboardAction = J(),
            this.openBankAccountModal = J(),
            this.updateHistory = J(),
            this.isMobile = w(void 0),
            this.destroyRef = y(ht),
            this.notificationService = y(Ie),
            this.paymentService = y(Et),
            this.moneyService = y(mt),
            this.walletService = y(uu),
            this.fb = y(Te),
            this.loading = E(!1),
            this.loadError = E(!1),
            this.loadingPaymentButton = E(!1),
            this.paymentOptions = E(null),
            this.walletNeedsVerify = E(!1),
            this.walletIsNotActive = E(!1),
            this.showWallet = E(!1),
            this.walletUserInfo = E(null),
            this.valueInPersian = ee( () => this.value() && Oo(+this.value()?.toString().replace(/,/g, ""))),
            this.form = this.fb.group({
                value: ["", [R.required, R.min(1)]],
                bankAccountId: ["", [R.required]],
                paymentDay: ["", [R.required]]
            }),
            this.value = M(this.form.get("value").valueChanges.pipe(Ge(this.destroyRef))),
            this.selectedBank = M(this.form.get("bankAccountId").valueChanges.pipe(Ge(this.destroyRef), k(e => this.paymentOptions()?.bankAccounts?.find(n => n.id === +e)))),
            this.selectedPaymentDay = M(this.form.get("paymentDay").valueChanges.pipe(Ge(this.destroyRef), k(e => e == null ? null : this.paymentOptions()?.paymentDays?.find(n => n.settlementType === +e))))
        }
        ngOnInit() {
            this.isMobile() && this.onValueTapHandler(),
            this.getPaymentOptions()
        }
        reload(e=!0) {
            e && this.clearFormAndScroll(!1),
            this.getPaymentOptions()
        }
        getPaymentOptions() {
            let e = this.paymentService.getPaymentOptions().pipe(V(p => {
                this.loadError.set(!1),
                this.paymentOptions.set(p),
                this.paymentOptions()?.bankAccounts?.length === 1 && this.selectBankAccountHandler(this.paymentOptions()?.bankAccounts?.[0]),
                this.loading.set(!1)
            }
            ), H( () => (this.notificationService.alert(Ce.ServerError, G.danger),
            this.loadError.set(!0),
            Z(null))), me( () => {
                this.loading.set(!1)
            }
            ))
              , n = this.walletService.getWalletUserInfo().pipe(V(p => {
                p && this.setWalletUserInfo(p.data ?? p)
            }
            ), H( () => (this.notificationService.alert(Ce.WalletInfoError, G.danger),
            Z(null))))
              , i = this.walletService.getWalletBalance().pipe(V(p => this.setWalletBalanceInPaymentOptions(p)), H( () => (this.notificationService.alert(Ce.ServerError, G.danger),
            Z(null))))
              , c = this.moneyService.doReloadBalance();
            e.pipe(Ge(this.destroyRef), an( () => ro([n, i, c]))).subscribe()
        }
        selectBankAccountHandler(e) {
            this.form.get("bankAccountId").setValue(e?.id.toString()),
            e?.id === pt.BankAccountId ? this.selectWalletBankAccount() : this.selectNoneWalletBankAccount()
        }
        onSelectPaymentDayHandler(e) {
            this.form.get("paymentDay").setValue(e?.settlementType.toString()),
            this.paymentOptions.update(n => (n.paymentDays.forEach(i => {
                i.checked = i.date === e.date
            }
            ),
            P({}, n))),
            e?.settlementType === ke.settlement_Wallet ? this.setSelectedBank(pt.BankAccountId) : this.selectedBank()?.id === pt.BankAccountId && this.setSelectedBank(null)
        }
        submitFormHandler() {
            if (!this.form.valid)
                return;
            this.loadingPaymentButton.set(!0);
            let e = new au;
            e.bankId = this.selectedBank()?.id,
            e.paymentDay = this.paymentOptions()?.paymentDays?.find(n => n.checked).date,
            e.value = this.form.get("value").value,
            this.selectedBank()?.id === pt.BankAccountId ? this.postWalletDeposit(e) : this.selectedBank()?.id === Nt.id ? this.postBourseKala(+e.value) : this.postPayment(e)
        }
        openAddBankAccountModalHandler() {
            this.openBankAccountModal.emit()
        }
        onValueTapHandler() {
            this.isMobile() && this.keyboardAction.emit({
                controlId: "value",
                formGroup: this.form
            })
        }
        setWalletBalanceInPaymentOptions(e) {
            if (e.result === wt.REVERIFY || e.result === wt.AccessWithdraw) {
                this.walletNeedsVerify.set(!0),
                this.disableWallet();
                return
            }
            let n = this.moneyService.calculatorBrokerAccountBalance()
              , i = n < 0 ? 0 : n < ai ? n : ai;
            this.paymentOptions()?.paymentDays && this.paymentOptions.update(c => (this.paymentOptions().paymentDays.find(p => p.settlementType === ke.settlement_Wallet).value = i,
            P({}, c)))
        }
        setWalletUserInfo(e) {
            if (e)
                if (this.walletUserInfo.set(e),
                this.showWallet.set(this.walletService.isWalletMenuVisible()),
                (!this.walletUserInfo()?.status || this.walletUserInfo()?.status !== "CARD_VERIFIED_OTP") && (this.walletIsNotActive.set(!0),
                this.disableWallet()),
                e.result === wt.SUCCESS) {
                    let n = this.paymentOptions()?.bankAccounts?.find(i => i.id === pt.BankAccountId);
                    n?.bankAccountCode && (n.bankAccountCode = e?.card ? Vo(e.card, 4).join("-") : null)
                } else
                    (e.result === wt.REVERIFY || e.result === wt.AccessWithdraw) && (this.walletNeedsVerify.set(!0),
                    this.disableWallet())
        }
        disableWallet() {
            this.paymentOptions.update(e => {
                let n = this.paymentOptions()?.paymentDays?.find(i => i.settlementType === ke.settlement_Wallet);
                return n && (n.disabled = !0),
                P({}, e)
            }
            )
        }
        selectWalletBankAccount() {
            this.form.get("paymentDay").setValue(ke.settlement_Wallet.toString()),
            this.paymentOptions.update(e => (e?.paymentDays?.forEach(n => {
                n.settlementType === ke.settlement_Wallet ? (n.checked = !0,
                n.disabled = !1) : (n.checked = !1,
                n.disabled = !0)
            }
            ),
            P({}, e)))
        }
        selectNoneWalletBankAccount() {
            this.selectedPaymentDay()?.settlementType === ke.settlement_Wallet && this.form.get("paymentDay").setValue(null),
            this.paymentOptions.update(e => (e?.paymentDays?.forEach(n => {
                n.settlementType === ke.settlement_Wallet ? (n.checked = !1,
                n.disabled = !0) : (n.disabled = !1,
                this.selectedBank()?.id === Nt.id ? n.settlementType === ke.settlementT0 ? (n.checked = !0,
                this.form.get("paymentDay").setValue(n?.settlementType.toString())) : (n.checked = !1,
                n.disabled = !0) : n.settlementType === ke.settlementT0 && !this.paymentOptions()?.bankAccounts?.find(i => i.id === this.selectedBank()?.id)?.isT0Valid && (n.checked = !1,
                n.disabled = !0))
            }
            ),
            P({}, e)))
        }
        postWalletDeposit(e) {
            let n = this.paymentOptions()?.paymentDays?.find(p => p.settlementType === ke.settlement_Wallet).value
              , i = +e.value;
            if (n > ai) {
                this.notificationService.alert(ou.toWalletCard, G.danger),
                this.loadingPaymentButton.set(!1);
                return
            }
            if (n < i) {
                this.notificationService.alert(Ce.WalletBalanceShortage, G.danger),
                this.loadingPaymentButton.set(!1);
                return
            }
            let c = {
                amount: i?.toString()
            };
            this.walletService.walletDeposit(c).pipe(V(p => this.onWalletDepositResponseActions(p)), me( () => this.loadingPaymentButton.set(!1)), H(p => this.walletService.handledServiceError(p))).subscribe()
        }
        onWalletDepositResponseActions(e) {
            e.result === wt.SUCCESS ? (this.notificationService.alert(Ce.WalletSuccessDeposit, G.success),
            this.getPaymentOptions(),
            this.clearFormAndScroll(!1)) : [wt.AccessWithdraw, wt.REVERIFY].includes(e.result) ? this.notificationService.alert(Ce.WalletReactive, G.danger) : e.result === wt.TimeIssue ? this.notificationService.alert(e.description, G.danger) : this.notificationService.alert(Ce.WalletDepositError, G.danger)
        }
        postPayment(e) {
            this.paymentService.postPayment(e).pipe(V(n => this.postPaymentResult(n)), me( () => this.loadingPaymentButton.set(!1))).subscribe()
        }
        postBourseKala(e) {
            this.paymentService.postBourseKala(e).pipe(V(n => this.postPaymentResult(n)), me( () => this.loadingPaymentButton.set(!1))).subscribe()
        }
        postPaymentResult(e) {
            this.loadingPaymentButton.set(!1),
            e.isSuccessful ? (this.getPaymentOptions(),
            this.notificationService.alert(e.description, G.success),
            this.clearFormAndScroll(!0)) : this.notificationService.alert(e.description, G.danger)
        }
        clearFormAndScroll(e) {
            this.form.get("value").setValue(null),
            this.loadingPaymentButton.set(!1),
            this.form.reset(),
            this.myForm()?.resetForm(),
            this.setSelectedBank(null),
            this.uncheckAllPaymentDays(),
            e && (this.updateHistory.emit(),
            document.getElementById("value")?.scrollIntoView({
                behavior: "smooth"
            })),
            this.isMobile() && this.keyboardAction.emit({
                keyboardClose: !0
            })
        }
        uncheckAllPaymentDays() {
            this.form.get("paymentDay").setValue(null),
            this.paymentOptions.update(e => (e?.paymentDays?.forEach(n => {
                n.checked = !1
            }
            ),
            P({}, e)))
        }
        onSelectPaymentValueHandler(e) {
            this.form.get("value").setValue(e.toString())
        }
        setSelectedBank(e) {
            this.paymentUserBankAccountsComponent().changeSelectedBankAccountHandler(this.paymentOptions()?.bankAccounts?.find(n => n.id === e))
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["payment-info"]],
        viewQuery: function(n, i) {
            n & 1 && (ut(i.paymentUserBankAccountsComponent, pi, 5),
            ut(i.paymentUserPaymentDaysComponent, fi, 5),
            ut(i.myForm, Z0, 5)),
            n & 2 && bt(3)
        },
        inputs: {
            isMobile: [1, "isMobile"]
        },
        outputs: {
            keyboardAction: "keyboardAction",
            openBankAccountModal: "openBankAccountModal",
            updateHistory: "updateHistory"
        },
        decls: 6,
        vars: 5,
        consts: [["myForm", "ngForm"], [1, "px-3", "position-relative", "was-validated", 3, "ngClass"], [1, "text-center", "mt-3"], [3, "formGroup"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "mb-1", "text-secondary"], [3, "openBankAccountModal", "selectBankAccount", "paymentOptions", "walletIsNotActive", "walletNeedsVerify", "showWallet", "selectedBank", "isFormSubmitted"], [1, "position-relative"], ["data-cy", "payment-user-payment-days-container", 3, "setPrice", "selectPaymentDay", "paymentOptions", "isMobile", "walletNeedsVerify", "walletIsNotActive", "showWallet", "selectedPaymentDay", "selectedBank", "isFormSubmitted"], [1, "form-group"], ["id", "value", 1, "d-flex", "align-items-center", "mt-3", "input-index", "form-control", "form-control-lg", 3, "ngClass"], [1, "text-secondary", "position-absolute", 2, "pointer-events", "none"], ["id", "value", "valueChangeEvent", "keyup", 1, "ps-3", "flex-grow-1", 3, "tap", "touchstart", "focusInInit", "form", "readOnly", "ngClass"], [1, "text-secondary", "d-flex", "justify-content-center", "align-items-center", "ps-2"], [1, "invalid-feedback"], [1, "mt-1", "mb-2"], ["type", "submit", "data-cy", "payment-submit-btn", "id", "payment-accept", 1, "btn", "btn-success", "d-block", "w-100", "mt-2", 3, "ngClass"], [1, "text-center"], ["title", "\u062A\u0627\u06CC\u06CC\u062F", "width", "18", "height", "18", "ic", "icons.Loading", 3, "ngClass"], [3, "paymentOptions", "selectedBank"]],
        template: function(n, i) {
            n & 1 && (a(0, "div", 1),
            C(1, ur, 5, 0, "div", 2)(2, sr, 23, 32, "form", 3)(3, lr, 1, 2),
            fo(4, 3, X0),
            r()),
            n & 2 && (m("ngClass", q(3, er, i.loading())),
            s(),
            f(i.loadError() ? 1 : 2),
            s(3),
            Co(i.paymentOptions()))
        },
        dependencies: [le, z, et, Se, xe, he, Fe, pi, fi, At],
        styles: [`.payment-day-disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.text-reverse[_ngcontent-%COMP%]{margin-right:2px;margin-left:3px}.custom-radio[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]:active:before{background-color:#0c3299!important}.top-order[_ngcontent-%COMP%]{top:0!important}
/*# sourceMappingURL=payment-info.component-XUK3NCR3.css.map */`],
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var vf = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.isMobile = w(!0),
            this.toggleEasyKeyboardEvent = new po,
            this.paymentInfo = it(Ci),
            this.paymentHistoryComponent = it(mi),
            this.destroyRef$ = y(ht),
            this.easyKeyboardService = y(Zn),
            this.modalService = y(Ke),
            this.router = y(St),
            this.showEasyKeyboard = !1
        }
        ngOnInit() {
            this.modalService.dismissAll(),
            this.subscribeToEasyKeyboardState(),
            this.subscribeToRouterForOpeningBankAccountModal()
        }
        getPaymentOptions() {
            this.paymentInfo().reload(),
            this.paymentHistoryComponent().getPayments()
        }
        closeEasyKeyboard() {
            this.toggleEasyKeyboard(!1)
        }
        openKeyboard(e, n) {
            this.easyKeyboardInputControl = n.get(e),
            this.toggleEasyKeyboard(!0, e)
        }
        keyboardChangeStatus(e) {
            this.isMobile() && (e.keyboardClose ? this.closeEasyKeyboard() : this.openKeyboard(e.controlId, e.formGroup))
        }
        toggleEasyKeyboard(e, n) {
            this.toggleEasyKeyboardEvent.emit(new Wo(e,n))
        }
        subscribeToRouterForOpeningBankAccountModal() {
            this.router.url.toString().indexOf(Yn.BANK_ACCOUNT_ROUTE) > 0 && this.openBankAccountModal()
        }
        openBankAccountModal() {
            let n = this.modalService.open(Lu, {
                scrollable: !0
            }).componentInstance;
            n.isMobile.set(this.isMobile()),
            n.updatePaymentOptions.subscribe(i => i && this.getPaymentOptions())
        }
        updateHistory() {
            this.paymentHistoryComponent().getPayments()
        }
        subscribeToEasyKeyboardState() {
            this.easyKeyboardService.easyKeyboardState$.pipe(V(e => this.showEasyKeyboard = e), Ge(this.destroyRef$)).subscribe()
        }
        back() {
            this.showEasyKeyboard ? this.easyKeyboardService.changeState(!1) : this.router.navigate(["/menu"])
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["lib-payment"]],
        viewQuery: function(n, i) {
            n & 1 && (ut(i.paymentInfo, Ci, 5),
            ut(i.paymentHistoryComponent, mi, 5)),
            n & 2 && bt(2)
        },
        inputs: {
            isMobile: [1, "isMobile"]
        },
        outputs: {
            toggleEasyKeyboardEvent: "toggleEasyKeyboardEvent"
        },
        decls: 3,
        vars: 1,
        consts: [[1, "payment", "flex-grow-1"], [3, "keyboardAction", "openBankAccountModal", "updateHistory", "isMobile"], [3, "reloadPaymentOptions"]],
        template: function(n, i) {
            n & 1 && (a(0, "div", 0)(1, "payment-info", 1),
            h("keyboardAction", function(p) {
                return i.keyboardChangeStatus(p)
            })("openBankAccountModal", function() {
                return i.openBankAccountModal()
            })("updateHistory", function() {
                return i.updateHistory()
            }),
            r(),
            a(2, "payment-history", 2),
            h("reloadPaymentOptions", function() {
                return i.getPaymentOptions()
            }),
            r()()),
            n & 2 && (s(),
            m("isMobile", i.isMobile()))
        },
        dependencies: [mi, Ci],
        styles: [`.payment-day-disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.payment-day-disabled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}[_ngcontent-%COMP%]::-webkit-input-placeholder{text-align:right}input[_ngcontent-%COMP%]:-moz-placeholder{text-align:right}.payment[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}
/*# sourceMappingURL=payment.component-OA2LJZSF.css.map */`],
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var ue = ( () => {
    let o = class o extends ct {
        constructor(e, n, i, c, p, b, x) {
            super(),
            this.fundsService = e,
            this.notificationService = n,
            this.loadingService = i,
            this.localStorage = c,
            this.timeService = p,
            this.moneyPaymentService = b,
            this.searchSymbolService = x,
            this.sub = void 0,
            this.hasTransaction = !1,
            this.transactionReload = new De(!1),
            this.fundsSubject = new De(JSON.parse(this.localStorage.getItem(Qn.funds)) || []),
            this.otherFundsSubject = new De([]),
            this.userFundsSubject = new De([]),
            this.assetsValueSubject = new De(0),
            this.overlaySubject = new De(!1),
            this.transactionIssuanceSubject = new De([]),
            this.transactionRedemptionSubject = new De([]),
            this.transactionIssuance$ = this.transactionIssuanceSubject.asObservable(),
            this.transactionRedemption$ = this.transactionRedemptionSubject.asObservable(),
            this.transactionAllSubject = new De([]),
            this.transactionAll$ = this.transactionAllSubject.asObservable(),
            this.assetsValue$ = this.assetsValueSubject.asObservable(),
            this.funds$ = this.fundsSubject.asObservable(),
            this.otherFunds$ = this.otherFundsSubject.asObservable(),
            this.userFunds$ = this.userFundsSubject.asObservable(),
            this.showOverlay$ = this.overlaySubject.asObservable(),
            this.loading$ = this.loadingService.loading$,
            this.retryLoading$ = this.loadingService.retryLoading$,
            this.fundPageSubject = new De({
                name: ft.Fund
            }),
            this.fundPageState$ = this.fundPageSubject.pipe(zn()),
            this.perviousFundPage = [{
                name: ft.Fund
            }],
            this.fundPopup$ = new De({
                popupType: _e.None
            }),
            this.fundPopupObs$ = this.fundPopup$.asObservable(),
            this.noneEtfs = E([]),
            this.thirdPartyFunds = E(null),
            this.thirdPartyFunds$ = oe(this.thirdPartyFunds),
            this._banksInfo = [],
            this.navDateSorter = (D, j) => j.navDate < D.navDate ? 1 : -1,
            this.defaultFunds = () => {
                let D = [];
                for (let[j,K] of Object.entries(ge.FundName))
                    D.push({
                        description: "",
                        details: [],
                        agreementData: [],
                        name: K,
                        title: "",
                        code: j,
                        redemptionNav: 0,
                        issuanceNav: 0,
                        lastSync: null,
                        totalAsset: 0,
                        totalInvestor: 0,
                        issuanceStaticWage: 0,
                        redemtionstaticwage: 0,
                        penalties: [],
                        progressPercents: [{
                            name: "\u0647\u0641\u062A\u06AF\u06CC",
                            value: 0,
                            days: 7
                        }, {
                            name: "\u0645\u0627\u0647\u0627\u0646\u0647",
                            value: 0,
                            days: 31
                        }, {
                            name: "3 \u0645\u0627\u0647",
                            value: 0,
                            days: 90
                        }, {
                            name: "\u06CC\u06A9 \u0633\u0627\u0644",
                            value: 0,
                            days: 365
                        }],
                        profitInfo: null,
                        isTemporary: !0
                    });
                return D
            }
            ,
            this.timeService.serverDateObs$.subscribe(D => this.serverDate = D),
            M(this.funds$.pipe(Ct(oe(this.noneEtfs)), k( ([D,j]) => {
                let K = D ? D.map(Le => this.convertFundsToSymbol(Le)) : []
                  , L = j ? j.map(Le => this.convertNonToSymbol(Le)) : [];
                this.searchSymbolService.setFunds([...K, ...L])
            }
            )))
        }
        addToFunds(e, n) {
            this.thirdPartyFunds.update(i => ((i ?? {})[e] = n,
            i))
        }
        loadFundData() {
            let e = wn([this.loadAllFund(), this.loadUserFunds()]).pipe(k( ([n,i]) => {
                let c = i.map(b => {
                    let x = n.find(D => D.code === b.fundCode);
                    return W(P({}, b), {
                        name: x?.name,
                        lastSync: x?.lastSync,
                        title: x?.title,
                        progressPercents: x?.progressPercents
                    })
                }
                );
                return {
                    allFund: n.map(b => W(P({}, b), {
                        details: b.description.split(",")
                    })),
                    userFund: c
                }
            }
            ), V(n => {
                !n.allFund.length && !n.userFund.length && this.loadingService.retryLoadingOn()
            }
            ), V(n => {
                this.fundsSubject.next(n.allFund),
                this.hasTransaction = n.allFund.some(c => c.hasTransaction),
                n.allFund = n.allFund.filter(c => !n.userFund.map(p => p.fundCode).includes(c.code)),
                this.otherFundsSubject.next(n.allFund);
                let i = this.fundPageSubject.value;
                if (i.activeFund && i.name !== ft.NoneEtf) {
                    let c = this.fundsSubject.value.find(p => p.code === i.activeFund.code);
                    this.fundPageSubject.next(W(P({}, i), {
                        activeFund: c
                    }))
                }
            }
            ), V(n => {
                let i = n.userFund.map(c => c.amount).reduce( (c, p) => c + p, 0);
                this.assetsValueSubject.next(i),
                this.userFundsSubject.next(n.userFund)
            }
            ), zn(1));
            return this.loadingService.showLoaderUntilComplete(e)
        }
        changeFundPage(e, n) {
            this.perviousFundPage.push(this.fundPageSubject.value),
            this.fundPageSubject.next({
                name: e,
                activeFund: n
            })
        }
        backFundPage() {
            this.fundPageSubject.next(this.perviousFundPage.pop())
        }
        banksInfo() {
            return this._banksInfo?.length ? Z(this._banksInfo) : this.moneyPaymentService.getPaymentOptions().pipe(k(e => e?.bankAccounts.filter(n => n.shebaNumber != "")), k(e => e?.map(n => ({
                bankTitle: n.bankTitle,
                iban: n.shebaNumber,
                accountNumber: n.bankAccountCode
            }))), V(e => {
                this._banksInfo = e
            }
            ))
        }
        loadAllFund(e={
            hasErrorNotify: !0
        }) {
            return this.fundsService.funds().pipe(k(n => n.map(i => W(P({}, i), {
                logo: ge.FundIcon[i.code]
            }))), V(n => {
                this.localStorage.setItem(Qn.funds, JSON.stringify(n))
            }
            ), H(n => (e.hasErrorNotify && this.notificationService.alert(n.error?.detail ?? "\u0646\u0645\u0627\u06CC\u0634 \u0635\u0646\u062F\u0648\u0642\u200C\u0647\u0627\u06CC \u0645\u0641\u06CC\u062F \u0628\u0627 \u062E\u0637\u0627 \u0645\u0648\u0627\u062C\u0647 \u0634\u062F", G.danger),
            Z([]))))
        }
        loadUserFunds() {
            return this.fundsService.assets().pipe(k(e => e.map(n => W(P({}, n), {
                logo: ge.FundIcon[n.fundCode],
                date: tt.getFormattedJDate(new Date(n.lastSync))
            }))), H(e => (this.notificationService.alert(e.error?.detail ?? "\u0646\u0645\u0627\u06CC\u0634 \u0635\u0646\u062F\u0648\u0642 \u0647\u0627\u06CC \u0645\u0646 \u0628\u0627 \u062E\u0637\u0627 \u0645\u0648\u0627\u062C\u0647 \u0634\u062F", G.danger),
            Z([]))))
        }
        reloadTransactions() {
            this.transactionReload.next(!0)
        }
        loadIssuanceTransactions(e, n) {
            let i = this.fundsService.issuanceTransactions(e, n).pipe(k(c => c.map(p => this.issuanceTransactionsInfo(p))), V(c => {
                this.transactionIssuanceSubject.next([...this.transactionIssuanceSubject.value, ...c])
            }
            ), H(c => (this.notificationService.alert(c.error?.detail ?? "\u0646\u0645\u0627\u06CC\u0634 \u062A\u0631\u0627\u06A9\u0646\u0634 \u0647\u0627\u06CC \u062E\u0631\u06CC\u062F \u0628\u0627 \u062E\u0637\u0627 \u0645\u0648\u0627\u062C\u0647 \u0634\u062F", G.danger),
            Z([]))));
            return this.loadingService.showLoaderUntilComplete(i)
        }
        issuanceTransactionsInfo(e) {
            return W(P({}, e), {
                logo: ge.FundIcon[e.fundCode],
                fundName: this.fundsSubject.value.find(n => n.code === e.fundCode)?.name ?? ge.FundName[e.fundCode],
                request: W(P({}, e.request), {
                    stateClass: ge.TransactionStateClass[e.request.status]
                }),
                issueFinancialResult: W(P({}, e.issueFinancialResult), {
                    stateClass: e.issueFinancialResult?.status ? ge.TransactionStateClass[e.issueFinancialResult.status] : ""
                }),
                fundResult: W(P({}, e.fundResult), {
                    stateClass: ge.TransactionStateClass[e.fundResult.status]
                }),
                issueRemain: W(P({}, e.issueRemain), {
                    stateClass: e.issueFinancialResult?.status ? ge.TransactionStateClass[e.fundResult.status === ce.InProgress ? ce.NotStarted : e.fundResult.status] : ""
                })
            })
        }
        loadAllTransactions(e, n, i) {
            let c = this.fundsService.allTransactions(e, n, i).pipe(k(p => p?.item.map(b => b.issuanceItem ? this.issuanceTransactionsInfo(b.issuanceItem) : this.redemptionTransactionsInfo(b.redemptionItem))), V(p => {
                this.transactionAllSubject.next([...this.transactionAllSubject.value, ...p])
            }
            ), H(p => (this.notificationService.alert(p.error?.detail ?? "\u0646\u0645\u0627\u06CC\u0634 \u0647\u0645\u0647 \u062A\u0631\u0627\u06A9\u0646\u0634 \u0647\u0627\u06CC  \u0628\u0627 \u062E\u0637\u0627 \u0645\u0648\u0627\u062C\u0647 \u0634\u062F", G.danger),
            Z([]))));
            return this.loadingService.showLoaderUntilComplete(c)
        }
        loadRedemptionTransactions(e, n) {
            let i = this.fundsService.redemptionTransactions(e, n).pipe(k(c => c.map(p => this.redemptionTransactionsInfo(p))), V(c => {
                this.transactionRedemptionSubject.next([...this.transactionRedemptionSubject.value, ...c])
            }
            ), H(c => (this.notificationService.alert(c.error?.detail ?? "\u0646\u0645\u0627\u06CC\u0634 \u062A\u0631\u0627\u06A9\u0646\u0634 \u0647\u0627\u06CC \u0641\u0631\u0648\u0634 \u0628\u0627 \u062E\u0637\u0627 \u0645\u0648\u0627\u062C\u0647 \u0634\u062F", G.danger),
            Z([]))));
            return this.loadingService.showLoaderUntilComplete(i)
        }
        redemptionTransactionsInfo(e) {
            return W(P({}, e), {
                logo: ge.FundIcon[e.fundCode],
                fundName: this.fundsSubject.value.find(n => n.code === e.fundCode)?.name ?? ge.FundName[e.fundCode],
                request: W(P({}, e.request), {
                    stateClass: ge.TransactionStateClass[e.request.status]
                }),
                result: W(P({}, e.result), {
                    stateClass: e.result?.status ? ge.TransactionStateClass[e.result.status] : ""
                })
            })
        }
        indexAverage(e) {
            return this.fundsService.indexAverage(e).pipe(zn())
        }
        navHistory(e, n, i) {
            return this.fundsService.navHistory(e).pipe(k(c => c.sort(this.navDateSorter).map(p => ({
                d: tt.getFormattedJDate(new Date(p.navDate)),
                v: p.issuanceNav,
                v2: p.redemptionNav
            }))), k(c => {
                if (i) {
                    for (let p = 0; p < n.length; p++) {
                        let b = tt.getFormattedJDate(new Date(n[p].rateDate))
                          , x = tt.getFormattedJDate(new Date(n[p + 1]?.rateDate))
                          , D = this.findIndexByDate(c, b)
                          , j = x ? this.findIndexByDate(c, x) : null;
                        this.calculateNavAdjustSplitRate(n, p),
                        j != null ? this.updateValues(c, D, j) : this.updateValuesAfterLast(c, n)
                    }
                    return c
                } else
                    return c
            }
            ), H(c => this.customCatchError(c)))
        }
        findIndexByDate(e, n) {
            return e.findIndex(i => i.d === n)
        }
        calculateNavAdjustSplitRate(e, n) {
            this.navAdjustSettingSplitRate = [];
            for (let i = n; i < e.length; i++)
                this.navAdjustSettingSplitRate.push(e[i].splitRate)
        }
        updateValues(e, n, i) {
            for (let c = n; c <= i - 1; c++)
                this.currentValues = e[c].v,
                this.currentValues = this.currentValues / +this.navAdjustSettingSplitRate[this.navAdjustSettingSplitRate.length - 1],
                e[c].v = +this.currentValues.toFixed()
        }
        updateValuesAfterLast(e, n) {
            let i = this.findIndexByDate(e, tt.getFormattedJDate(new Date(n[0].rateDate)));
            this.navAdjustSettingSplitRate.push(this.navAdjustSettingSplitRate[0]);
            for (let c = 0; c <= i - 1; c++) {
                this.currentValues = e[c].v;
                for (let p of this.navAdjustSettingSplitRate)
                    this.currentValues = this.currentValues / +p;
                e[c].v = +this.currentValues.toFixed()
            }
        }
        showFundDetail(e) {
            let n = this.fundsSubject.value.find(i => i.code === e && !i.isTemporary) ?? {
                name: "",
                code: "",
                logo: ""
            };
            this.changeFundPage(ft.FundDetail, n)
        }
        showEtf(e) {
            let n = JSON.parse(this.localStorage.getItem(Qn.funds)) || [];
            if (n.length) {
                let i = n.find(c => c.code === e && !c.isTemporary) ?? {
                    name: "",
                    code: "",
                    logo: ""
                };
                this.changeFundPage(ft.FundDetail, i)
            }
        }
        showNoneEtf(e) {
            this.changeFundPage(ft.NoneEtf, {
                code: e
            })
        }
        showTransactions() {
            this.changeFundPage(ft.Transaction, this.fundPageSubject.value?.activeFund)
        }
        resetFundPages() {
            this.perviousFundPage = [],
            this.fundPageSubject.next({
                name: ft.Fund
            })
        }
        createIssuance(e) {
            let n = this.fundsService.issuance(e).pipe(V( () => {
                this.notificationService.alert("\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062B\u0628\u062A \u0634\u062F", G.success)
            }
            ), H(i => (this.handleErrorNotify(i),
            gt)));
            return this.loadingService.showLoaderUntilComplete(n)
        }
        cancelIssuance(e) {
            let n = this.fundsService.cancel(e).pipe(V( () => {
                this.notificationService.alert("\u0644\u063A\u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F", G.success)
            }
            ), H(i => (this.handleErrorNotify(i),
            gt)));
            return this.loadingService.showLoaderUntilComplete(n)
        }
        roundingUpward(e, n) {
            let i = this.calculateFundTotalIssuancePrice(e, n).toString()
              , c = i.toString().slice(0, i.length - 3)
              , p = i.slice(-3)
              , b = c + "." + p;
            return +(Math.ceil(+b) + "000")
        }
        redemptionIssuance(e) {
            let n = this.fundsService.redeem(e).pipe(V( () => {
                this.notificationService.alert("\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0628\u0637\u0627\u0644 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062B\u0628\u062A \u0634\u062F", G.success)
            }
            ), H(i => (this.handleErrorNotify(i),
            gt)));
            return this.loadingService.showLoaderUntilComplete(n)
        }
        cancelRedemptionIssuance(e) {
            let n = this.fundsService.cancelRedemption(e).pipe(V( () => {
                this.notificationService.alert("\u0644\u063A\u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0628\u0637\u0627\u0644 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F", G.success)
            }
            ), H(i => (this.handleErrorNotify(i),
            gt)));
            return this.loadingService.showLoaderUntilComplete(n)
        }
        agreement(e) {
            let n = this.fundsService.agreement(e).pipe(H( () => gt));
            return this.loadingService.showLoaderUntilComplete(n)
        }
        consultationRequest() {
            return this.fundsService.consultationRequest().pipe(V( () => this.notificationService.alert("\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062B\u0628\u062A \u0634\u062F", G.success)), H(n => (this.handleErrorNotify(n),
            gt)))
        }
        showOverlay() {
            this.overlaySubject.next(!0)
        }
        hideOverlay() {
            this.overlaySubject.next(!1),
            this.updateFundPopup(_e.None)
        }
        calculateFundTotalIssuancePrice(e, n) {
            if (n)
                return e?.issuanceNav;
            let i = Math.ceil(e?.issuanceNav * +(e?.nextNavEstimate ?? 1.1) + +(e?.issuanceStaticWage ?? 0));
            return i > 1e6 ? i : 1e6
        }
        calculateCountOfAssetToBuyByPrice(e, n, i) {
            if (n -= +(e?.issuanceStaticWage ?? 0),
            i)
                return Math.floor(n / e.issuanceNav);
            let c = +(e?.nextNavEstimate ?? 1.1);
            return Math.floor(n / (e.issuanceNav * c))
        }
        customCatchError(e) {
            return this.handleErrorNotify(e),
            this.httpService.handleError(e)
        }
        handleErrorNotify(e, n="\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0627 \u062E\u0637\u0627 \u0645\u0648\u0627\u062C\u0647 \u0634\u062F") {
            let i = n;
            e?.error?.detail ? i = e.error.detail : typeof e.error == "string" && (i = e.error),
            this.notificationService.alert(i, G.danger)
        }
        updateFundPopup(e, n="") {
            this.fundPopup$.next({
                popupType: e,
                value: n
            })
        }
        showNotify(e, n) {
            this.notificationService.alert(e, n)
        }
        convertFundsToSymbol(e) {
            return {
                symbolIsin: e.code,
                symbolName: e.name,
                searchCount: 0,
                titleWords: [],
                symbolNameInnerHtml: e.name,
                symbolTitleInnerHtml: "\u0635\u0646\u062F\u0648\u0642 \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644\u06CC \u0645\u0641\u06CC\u062F",
                titleCorrected: "\u0635\u0646\u062F\u0648\u0642 \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644\u06CC \u0645\u0641\u06CC\u062F",
                title: "\u0635\u0646\u062F\u0648\u0642 \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644\u06CC \u0645\u0641\u06CC\u062F",
                sector: "",
                searchCategoryName: Ui.funds,
                swipeState: new Wi("",Ri.None)
            }
        }
        convertNonToSymbol(e) {
            return {
                symbolIsin: e.fundCode,
                symbolName: e.fundName,
                searchCount: 0,
                titleWords: [],
                symbolNameInnerHtml: e.fundName,
                symbolTitleInnerHtml: "\u0635\u0646\u062F\u0648\u0642 \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644\u06CC \u0645\u0641\u06CC\u062F",
                titleCorrected: "\u0635\u0646\u062F\u0648\u0642 \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644\u06CC \u0645\u0641\u06CC\u062F",
                title: "\u0635\u0646\u062F\u0648\u0642 \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644\u06CC \u0645\u0641\u06CC\u062F",
                sector: "",
                searchCategoryName: Ui.funds,
                swipeState: new Wi("",Ri.None),
                symbolGroup: Jo
            }
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(Bt(Uu),Bt(Ie),Bt(Uo),Bt(Jn),Bt(Tt),Bt(Et),Bt(Xo))
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var mr = t => ({
    "opacity-5 pe-none": t
})
  , Gi = t => ({
    "bg-global": t
});
function pr(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 2),
        h("click", function() {
            let n = g(u).$implicit
              , i = d();
            return v(i.onNonEtfItemClick(n))
        }),
        a(1, "div", 3)(2, "div", 4),
        _(3, "div", 5),
        a(4, "div", 6)(5, "span"),
        l(6),
        r()()(),
        a(7, "div", 7)(8, "span", 8),
        l(9),
        r(),
        a(10, "div")(11, "small"),
        l(12),
        r()()()(),
        _(13, "svg-icon", 9),
        r()
    }
    if (t & 2) {
        let u = o.$implicit
          , e = d();
        m("ngClass", q(10, mr, u.dateStatus !== e.DateStatus.InRange))("id", "all-funds-ipo-" + u.fundCode),
        s(3),
        Y(u == null ? null : u.logo),
        m("ngClass", q(12, Gi, !(u != null && u.logo))),
        s(3),
        T(u == null ? null : u.fundName),
        s(3),
        F(" ", u.distanceToDate, " "),
        s(3),
        $t(" ", u.startTime, " \u062A\u0627 ", u.endTime, " "),
        s(),
        m("iconName", e.icons.ChevronLeft)
    }
}
function fr(t, o) {
    if (t & 1 && (a(0, "div", 16)(1, "span", 17),
    l(2),
    r(),
    a(3, "span", 18),
    l(4),
    S(5, "number"),
    r()()),
    t & 2) {
        let u = o.$implicit;
        s(2),
        T(u.name),
        s(),
        m("colorizeNumber", u.value),
        s(),
        T(+u.value == 0 ? "--" : ze(5, 3, u.value, "1.0-2") + "%")
    }
}
function Cr(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 10),
        h("click", function() {
            let n = g(u).$implicit
              , i = d();
            return v(i.onItemClick(n.code))
        }),
        a(1, "div", 3)(2, "div", 4)(3, "div", 11),
        _(4, "svg-icon", 12),
        r(),
        a(5, "div", 13)(6, "span"),
        l(7),
        r(),
        a(8, "span", 14),
        l(9),
        r()()(),
        a(10, "div", 15),
        ne(11, fr, 6, 6, "div", 16, Me),
        r()(),
        _(13, "svg-icon", 9),
        r()
    }
    if (t & 2) {
        let u = o.$implicit
          , e = d();
        m("id", "all-funds-" + u.code),
        Ze("data-cy", "all-funds-" + u.code),
        s(3),
        Y(u.logo),
        m("ngClass", q(10, Gi, !u.logo)),
        s(),
        m("iconName", u.logo)("ngClass", q(12, Gi, !u.logo)),
        s(3),
        T(u.name),
        s(2),
        T(u.title),
        s(2),
        ie(u.progressPercents.slice(1, 4)),
        s(2),
        m("iconName", e.icons.ChevronLeft)
    }
}
var zu = ( () => {
    let o = class o {
        constructor(e) {
            this.fundsFacade = e,
            this.DateStatus = Ee,
            this.icons = O,
            this.index = -1,
            this.showDetail = !1,
            this.isMobile = w(!1),
            this.funds = w.required(),
            this.noneEtfFunds = M(this.fundsFacade.thirdPartyFunds$.pipe(k(this.extractNonEtfFunds)))
        }
        extractNonEtfFunds(e) {
            return e?.ipo || []
        }
        onNonEtfItemClick(e) {
            e.dateStatus === Ee.InRange && this.fundsFacade.showNoneEtf(e.fundCode)
        }
        onItemClick(e) {
            this.fundsFacade.showFundDetail(e)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(ue))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["all-funds-item"]],
        inputs: {
            isMobile: [1, "isMobile"],
            funds: [1, "funds"]
        },
        decls: 4,
        vars: 0,
        consts: [[1, "bg-principal", "bg-principal-hover", "bg-principal-7x-dark", "bg-principal-3x-dark-mobile", "rounded", "mb-2", "p-3", "d-flex", "justify-content-between", "align-items-center", "fs-7", "cup", 3, "ngClass", "id"], [1, "bg-principal", "bg-principal-hover", "bg-principal-7x-dark", "bg-principal-3x-dark-mobile", "rounded", "mb-2", "p-3", "d-flex", "justify-content-between", "align-items-center", "fs-7", "cup", 3, "id"], [1, "bg-principal", "bg-principal-hover", "bg-principal-7x-dark", "bg-principal-3x-dark-mobile", "rounded", "mb-2", "p-3", "d-flex", "justify-content-between", "align-items-center", "fs-7", "cup", 3, "click", "ngClass", "id"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-grow-1"], [1, "d-flex", "align-items-center", "justify-content-between", "fs-6", 2, "min-width", "110px"], [1, "me-2", "flex-shrink-0", 2, "width", "35px", "height", "35px", 3, "ngClass"], [1, "me-auto", "fs-7"], [1, "text-muted", "ms-auto", "me-2", "text-center"], [1, "badge", "bg-warning", "d-inline-block"], ["width", "20", "height", "20", 1, "", 3, "iconName"], [1, "bg-principal", "bg-principal-hover", "bg-principal-7x-dark", "bg-principal-3x-dark-mobile", "rounded", "mb-2", "p-3", "d-flex", "justify-content-between", "align-items-center", "fs-7", "cup", 3, "click", "id"], [1, "me-2", "d-flex", "justify-content-center", "align-items-center", "flex-shrink-0", 2, "border-radius", "10px", "padding", "2px", 3, "ngClass"], ["width", "32", "height", "32", 1, "text-white", 3, "iconName", "ngClass"], [1, "me-auto", "d-flex", "flex-column"], [1, "small", "text-secondary"], [1, "flex-grow-1", "d-flex", "align-items-center", "justify-content-around"], [1, "text-center"], [1, "d-block"], ["dir", "ltr", 3, "colorizeNumber"]],
        template: function(n, i) {
            n & 1 && (ne(0, pr, 14, 14, "div", 0, Me),
            ne(2, Cr, 14, 14, "div", 1, Me)),
            n & 2 && (ie(i.noneEtfFunds()),
            s(2),
            ie(i.funds()))
        },
        dependencies: [z, se, mn, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
function hr(t, o) {
    t & 1 && (a(0, "span"),
    l(1, "\u0633\u0627\u06CC\u0631"),
    r())
}
function yr(t, o) {
    if (t & 1 && (a(0, "span"),
    C(1, hr, 2, 0, "span"),
    l(2, " \u0635\u0646\u062F\u0648\u0642\u200C\u0647\u0627\u06CC \u0645\u0641\u06CC\u062F"),
    r()),
    t & 2) {
        let u = d(3);
        s(),
        f(u.userFundsSignal().length ? 1 : -1)
    }
}
function _r(t, o) {
    if (t & 1 && (a(0, "div", 0),
    C(1, yr, 3, 1, "span"),
    _(2, "svg-icon", 1),
    r()),
    t & 2) {
        let u = d(2);
        s(),
        f(u.userFundsSignal() ? 1 : -1),
        s(),
        m("iconName", u.icons.Loading)("ngClass", u.fundsFacade.loading$ ? "d-none" : "d-inline-block")
    }
}
function gr(t, o) {
    if (t & 1 && (a(0, "div", 2)(1, "div", 4),
    _(2, "svg-icon", 5),
    a(3, "span", 6),
    l(4, " \u062F\u0631 \u062D\u0627\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A"),
    r()()()),
    t & 2) {
        let u = d(3);
        s(2),
        m("iconName", u.icons.Loading)
    }
}
function vr(t, o) {
    if (t & 1 && (a(0, "div", 3),
    _(1, "all-funds-item", 7),
    r()),
    t & 2) {
        let u = d(3);
        s(),
        m("isMobile", u.isMobile())("funds", u.fundFacadeSignal())
    }
}
function br(t, o) {
    if (t & 1 && C(0, gr, 5, 1, "div", 2)(1, vr, 2, 2, "div", 3),
    t & 2) {
        let u = d(2);
        f(u.userFundsSignal().length && !u.fundFacadeSignal().length && u.loadingSignal() ? 0 : -1),
        s(),
        f(u.fundFacadeSignal().length ? 1 : -1)
    }
}
function xr(t, o) {
    if (t & 1 && C(0, _r, 3, 3, "div", 0)(1, br, 2, 2),
    t & 2) {
        let u = d();
        f(u.fundFacadeSignal().length ? 0 : -1),
        s(),
        f(u.userFundsSignal() ? 1 : -1)
    }
}
var Gu = ( () => {
    let o = class o {
        constructor(e) {
            this.fundsFacade = e,
            this.icons = O,
            this.isMobile = w(!1),
            this.fundFacadeSignal = M(this.fundsFacade.otherFunds$),
            this.userFundsSignal = M(this.fundsFacade.userFunds$),
            this.loadingSignal = M(this.fundsFacade.loading$)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(ue))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["all-funds"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 1,
        vars: 1,
        consts: [[1, "fw-bold", "fs-7", "mb-2", "d-flex", "align-items-center", "justify-content-between"], ["width", "18", "height", "18", 1, "spin", 3, "iconName", "ngClass"], [1, "d-flex", "flex-column", "align-items-center", "mb-4", "text-muted", "p-3"], [1, "overflow-hidden", "position-relative"], [1, "text-center"], ["width", "24", "height", "24", 1, "spin", 3, "iconName"], [1, "h6", "mb-0"], [3, "isMobile", "funds"]],
        template: function(n, i) {
            n & 1 && C(0, xr, 2, 2),
            n & 2 && f(i.fundFacadeSignal() ? 0 : -1)
        },
        dependencies: [z, zu, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var Sr = t => ({
    "px-3 py-3": t
})
  , Fn = ( () => {
    let o = class o {
        constructor(e, n, i, c) {
            this.router = e,
            this.sidePanelServiceService = n,
            this.overlayService = i,
            this.fundsFacade = c,
            this.icons = O,
            this.IncreaseValues = w(null),
            this.fund = ee( () => this.IncreaseValues()?.fund),
            this.value = ee( () => this.IncreaseValues()?.value),
            this.originValue = ee( () => this.IncreaseValues()?.originValue),
            this.isNoneEtfSubscription = ee( () => this.IncreaseValues()?.isNoneEtfSubscription),
            this.isMobile = w(!1)
        }
        onIncreaseClick() {
            let e = 0;
            e = this.value(),
            e = e > 5e8 ? 5e8 : e,
            this.isMobile() ? this.router.navigateByUrl(`/menu/${Dn.RECEIPT_ROUTE}/${e}`) : this.sidePanelServiceService.openSidePanelFromRoute({
                sidePanel: cn.MoneyReceipt,
                value: e.toString()
            })
        }
        onReturnClick() {
            this.isMobile() ? this.overlayService.showOverlay({
                component: Dt,
                input: [{
                    inputName: "isMobile",
                    inputValue: !0
                }, {
                    inputName: "buyValues",
                    inputValue: {
                        fund: this.fund(),
                        value: this.originValue(),
                        isNoneEtfSubscription: this.isNoneEtfSubscription()
                    }
                }],
                option: {
                    componentName: "FundBuyComponent"
                }
            }) : this.fundsFacade.updateFundPopup(_e.Buy, {
                fund: this.fund(),
                value: this.originValue(),
                isNoneEtfSubscription: this.isNoneEtfSubscription()
            })
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(St),U(pn),U(ye),U(ue))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["fund-increase"]],
        inputs: {
            IncreaseValues: [1, "IncreaseValues"],
            isMobile: [1, "isMobile"]
        },
        decls: 11,
        vars: 4,
        consts: [[3, "ngClass"], [1, "h6", "text-center", "mb-4"], [1, "d-flex", "mt-3"], [1, "btn", "btn-outline-success", "flex-grow-1", "me-2", 3, "click"], ["width", "24", "height", "24", 1, "text-success", 3, "iconName"], [1, "btn", "btn-outline-secondary", "px-4", 3, "click"]],
        template: function(n, i) {
            n & 1 && (a(0, "div", 0)(1, "div", 1),
            l(2, "\u0627\u0641\u0632\u0627\u06CC\u0634 \u0645\u0648\u062C\u0648\u062F\u06CC"),
            r(),
            a(3, "p"),
            l(4, "\u0645\u0628\u0644\u063A \u062F\u0631\u062E\u0648\u0627\u0633\u062A\u06CC \u0634\u0645\u0627 \u0628\u0631\u0627\u06CC \u0635\u062F\u0648\u0631 \u0648\u0627\u062D\u062F\u200C\u0647\u0627\u06CC \u0635\u0646\u062F\u0648\u0642 \u0628\u06CC\u0634 \u0627\u0632 \u0645\u0648\u062C\u0648\u062F\u06CC \u0634\u0645\u0627\u0633\u062A. \u0627\u0628\u062A\u062F\u0627 \u0645\u0648\u062C\u0648\u062F\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u06CC\u062F."),
            r(),
            a(5, "div", 2)(6, "button", 3),
            h("click", function() {
                return i.onIncreaseClick()
            }),
            _(7, "svg-icon", 4),
            l(8, " \u0648\u0627\u0631\u06CC\u0632 \u0648\u062C\u0647 "),
            r(),
            a(9, "button", 5),
            h("click", function() {
                return i.onReturnClick()
            }),
            l(10, "\u0628\u0627\u0632\u06AF\u0634\u062A"),
            r()()()),
            n & 2 && (m("ngClass", q(2, Sr, i.isMobile())),
            s(7),
            m("iconName", i.icons.Settle))
        },
        dependencies: [z, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var Tr = (t, o) => o == null ? null : o.iban
  , Ir = t => ({
    "px-3 py-3": t
})
  , Ar = t => ({
    selected: t
})
  , wr = t => ({
    "input-highlight": t
})
  , kr = (t, o, u, e) => ({
    "btn-outline-warning": t,
    "btn-danger": o,
    "btn-outline-secondary opacity-6": u,
    "pe-none": e
});
function Er(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "svg-icon", 26),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.closeForm())
        }),
        r()
    }
    if (t & 2) {
        let u = d();
        m("iconName", u.icons.Close)
    }
}
function Dr(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "button", 27),
        h("click", function() {
            let n = g(u).$implicit
              , i = d();
            return v(i.changeSelectedBank(n))
        }),
        l(1),
        a(2, "small", 28),
        l(3),
        r()()
    }
    if (t & 2) {
        let u, e = o.$implicit;
        s(),
        F(" ", e.bankTitle, " "),
        s(2),
        T((u = e.iban) !== null && u !== void 0 ? u : "")
    }
}
function Mr(t, o) {
    t & 1 && (a(0, "small", 15),
    l(1, "* \u062D\u0633\u0627\u0628 \u0645\u0642\u0635\u062F \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A"),
    r())
}
var Wn = ( () => {
    let o = class o {
        constructor(e, n, i, c) {
            this.fb = e,
            this.fundsFacade = n,
            this.moneyService = i,
            this.overlayService = c,
            this.icons = O,
            this.iban = ee( () => this.sellValues().iban),
            this.fund = ee( () => this.sellValues().fund),
            this.banksInfo = E([]),
            this.bankTitle = E("\u062D\u0633\u0627\u0628 \u0645\u0642\u0635\u062F \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"),
            this.sellValues = w.required(),
            this.isMobile = w(!1),
            this.fund$ = oe(this.fund).pipe(Ve(Boolean)),
            this.subs = [],
            this.currentAssetPropertyCount$ = new De(0),
            this.currentInputSelectedName = E(""),
            this.sellForm = this.fb.group({
                value: new Ne(null,[R.required, R.min(1), this.sellCountMaxValueValidator.bind(this)]),
                iban: new Ne(null,R.required)
            }),
            M(this.fund$.pipe(Je(p => this.fundsFacade.userFunds$.pipe(k(b => this.findAssetByFundCode(b, p?.code)), V(b => this.updateAssetCount(b)))))),
            this.getBanksInfo(),
            Zt( () => {
                this.sellValues() && (this.onSelectValue(this.sellValues()?.value),
                console.log(this.fund()))
            }
            ),
            Zt( () => {
                if (this.banksInfo()?.length === 1) {
                    this.changeSelectedBank(this.banksInfo()[0]);
                    return
                }
                if (this.iban() && this.banksInfo().length) {
                    let p = this.banksInfo().find(b => b.iban === this.iban());
                    p && this.changeSelectedBank(p)
                }
                console.log(this.fund())
            }
            )
        }
        getBanksInfo() {
            this.fundsFacade.banksInfo().pipe(Ln(1), V(e => {
                let n = [...e];
                e.findIndex(c => c.constIban == Sn.constIban) === -1 && n.unshift(Sn),
                this.banksInfo.set(n ?? [])
            }
            )).subscribe()
        }
        changeSelectedBank(e) {
            this.sellForm.get("iban").setValue(e.iban ?? Sn.constIban);
            let n = e.accountNumber.trim() ? `${e.bankTitle} - ${e.accountNumber}` : `${e.bankTitle}`;
            n.length > 50 && (n = n.slice(0, 50) + "..."),
            this.bankTitle.set(n)
        }
        onValueTap(e) {
            this.currentInputSelectedName.set(e)
        }
        onBlur() {
            this.currentInputSelectedName.set("")
        }
        onSelectValue(e) {
            this.sellForm.get("value").setValue(e)
        }
        findAssetByFundCode(e, n) {
            return e.find(i => i.fundCode === n)
        }
        updateAssetCount(e) {
            e && this.currentAssetPropertyCount$.next(e.count)
        }
        onSellBtnClicked() {
            this.sellForm.valid && (this.isMobile() ? this.overlayService.showOverlay({
                component: Qt,
                input: [{
                    inputName: "isMobile",
                    inputValue: !0
                }, {
                    inputName: "confirmValues",
                    inputValue: {
                        fund: this.fund(),
                        fundSide: ae.Sell,
                        value: this.sellForm.value.value,
                        isNoneEtfSubscription: !1,
                        iban: this.sellForm.value.iban === Sn.constIban ? null : this.sellForm.value.iban
                    }
                }],
                option: {
                    componentName: "FundOperationConfirmComponent"
                }
            }) : this.showPopup(_e.Confirm, {
                fund: this.fund(),
                fundSide: ae.Sell,
                value: this.sellForm.value.value,
                isNoneEtfSubscription: !1,
                iban: this.sellForm.value.iban === Sn.constIban ? null : this.sellForm.value.iban
            }))
        }
        get sellFormValidatorText() {
            return this.sellForm?.get("value")?.errors?.maxValidator ? "\u062A\u0639\u062F\u0627\u062F \u0628\u06CC\u0634\u062A\u0631 \u0627\u0632 \u0645\u0642\u062F\u0627\u0631 \u062F\u0627\u0631\u0627\u06CC\u06CC \u0627\u0633\u062A" : this.sellForm?.get("value")?.value === "" ? "\u062A\u0639\u062F\u0627\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F" : ""
        }
        closeForm() {
            this.isMobile() ? this.overlayService.hideOverlay() : this.fundsFacade.hideOverlay(),
            this.sellForm.patchValue({
                value: null
            })
        }
        showPopup(e, n) {
            e === _e.None ? this.subs.push(rn(300).subscribe( () => this.fundsFacade.updateFundPopup(e))) : this.fundsFacade.updateFundPopup(e, n)
        }
        sellCountMaxValueValidator(e) {
            if (e.value !== null) {
                let n = this.currentAssetPropertyCount$?.value;
                if (n && e.value > n)
                    return {
                        maxValidator: !0
                    }
            }
            return null
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(Te),U(ue),U(mt),U(ye))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["fund-sell"]],
        inputs: {
            sellValues: [1, "sellValues"],
            isMobile: [1, "isMobile"]
        },
        decls: 63,
        vars: 42,
        consts: [[1, "pt-3", 3, "ngSubmit", "formGroup", "ngClass"], ["width", "24", "height", "24", 1, "p-3", "position-absolute", "cup", 2, "left", "0", "top", "0", 3, "iconName"], [1, "h6", "text-center", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-global", "fs-6"], [1, "text-muted", "ms-1"], [1, "text-global", 3, "click"], [1, "text-muted"], [1, "text-global"], ["ngbDropdown", "", "dir", "rtl", "placement", "bottom-right", 1, "mt-2"], ["type", "button", "ngbDropdownToggle", "", 1, "form-select", "form-select-lg", "text-start", "d-flex"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 1, "w-100", "bg-principal", "py-0"], [1, "w-100", "shadow", "overflow-auto", "rounded-3", 2, "max-height", "180px"], [1, "list-group", "list-group-flush", "w-100"], ["type", "button", "ngbDropdownItem", "", 1, "dropdown-item", "list-group-item", "list-group-item-action", "py-2", "text-start", "d-flex", "align-items-baseline"], [1, "text-danger"], [1, "d-flex", "mt-2", "flex-shrink-0"], [1, "d-flex", "w-100"], [1, "form-control", "form-control-lg", "d-flex", "align-items-center", "input-index", "h-auto", 3, "ngClass"], [1, "text-secondary", "position-absolute", 2, "pointer-events", "none"], ["id", "value", 1, "py-1", "ps-3", "flex-grow-1", 3, "tap", "blurEvent", "form", "ngClass"], [1, "text-secondary", "ps-1", "d-flex", "justify-content-center", "align-items-center"], [1, "form-text", "text-muted"], [1, "cup", "fw-bold", "px-2", "py-1", "text-decoration", 3, "click"], [1, "alert", "alert-global", "mt-2"], ["type", "submit", 1, "btn", "flex-grow-1", 3, "ngClass"], ["width", "24", "height", "24", 1, "p-3", "position-absolute", "cup", 2, "left", "0", "top", "0", 3, "click", "iconName"], ["type", "button", "ngbDropdownItem", "", 1, "dropdown-item", "list-group-item", "list-group-item-action", "py-2", "text-start", "d-flex", "align-items-baseline", 3, "click"], [1, "ms-auto"]],
        template: function(n, i) {
            if (n & 1 && (a(0, "form", 0),
            h("ngSubmit", function() {
                return i.onSellBtnClicked()
            }),
            C(1, Er, 1, 1, "svg-icon", 1),
            a(2, "div", 2),
            l(3),
            r(),
            a(4, "div", 3)(5, "div"),
            l(6, "\u0642\u06CC\u0645\u062A \u06A9\u0646\u0648\u0646\u06CC \u0627\u0628\u0637\u0627\u0644 \u0647\u0631 \u0648\u0627\u062D\u062F"),
            r(),
            a(7, "div")(8, "span", 4),
            l(9),
            S(10, "number"),
            r(),
            a(11, "span", 5),
            l(12, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
            r()()(),
            a(13, "div", 3)(14, "div"),
            l(15, "\u062A\u0639\u062F\u0627\u062F \u06A9\u0644 \u0648\u0627\u062D\u062F \u0647\u0627"),
            r(),
            a(16, "div")(17, "span", 6),
            h("click", function() {
                return i.onSelectValue(i.currentAssetPropertyCount$.value)
            }),
            l(18),
            S(19, "async"),
            S(20, "number"),
            r(),
            a(21, "span", 7),
            l(22, "\u0648\u0627\u062D\u062F"),
            r()()(),
            a(23, "div", 3)(24, "div"),
            l(25, "\u0645\u0639\u0627\u062F\u0644 \u062D\u062F\u0648\u062F\u06CC"),
            r(),
            a(26, "div")(27, "span", 8),
            l(28),
            S(29, "number"),
            r(),
            a(30, "span", 5),
            l(31, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
            r()()(),
            a(32, "div", 9)(33, "button", 10),
            l(34),
            S(35, "positiveNumber"),
            r(),
            a(36, "div", 11)(37, "div", 12)(38, "div", 13),
            ne(39, Dr, 4, 2, "button", 14, Tr),
            r()()()(),
            C(41, Mr, 2, 0, "small", 15),
            a(42, "div", 16)(43, "div", 17)(44, "div", 18)(45, "span", 19),
            l(46, "\u062A\u0639\u062F\u0627\u062F"),
            r(),
            a(47, "custom-number-box", 20),
            h("tap", function() {
                return i.onValueTap("sellValue")
            })("blurEvent", function() {
                return i.onBlur()
            }),
            r(),
            a(48, "small", 21),
            l(49, "\u0648\u0627\u062D\u062F"),
            r()()()(),
            a(50, "p")(51, "small", 22),
            l(52, "\u062D\u062F\u0627\u06A9\u062B\u0631 \u0648\u0627\u062D\u062F \u0642\u0627\u0628\u0644 \u0627\u0628\u0637\u0627\u0644 "),
            a(53, "span", 23),
            h("click", function() {
                return i.onSelectValue(i.currentAssetPropertyCount$.value)
            }),
            l(54),
            S(55, "async"),
            S(56, "number"),
            r(),
            l(57, " \u0648\u0627\u062D\u062F \u0627\u0633\u062A"),
            r()(),
            a(58, "div", 24),
            l(59),
            r(),
            a(60, "div", 16)(61, "button", 25),
            l(62),
            r()()()),
            n & 2) {
                let c, p, b;
                m("formGroup", i.sellForm)("ngClass", q(31, Ir, i.isMobile())),
                s(),
                f(i.isMobile() ? -1 : 1),
                s(2),
                F("\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0628\u0637\u0627\u0644 \u0635\u0646\u062F\u0648\u0642 ", (c = i.fund()) == null ? null : c.name, ""),
                s(6),
                T(A(10, 17, (p = i.fund()) == null ? null : p.redemptionNav)),
                s(9),
                T(A(20, 21, A(19, 19, i.currentAssetPropertyCount$))),
                s(10),
                F(" ", A(29, 23, i.sellForm.value.value > 0 ? i.sellForm.value.value * i.fund().redemptionNav - +i.fund().redemtionstaticwage : 0), ""),
                s(6),
                F(" ", A(35, 25, i.bankTitle()), " "),
                s(5),
                ie(i.banksInfo()),
                s(2),
                f(i.banksInfo().length && !i.sellForm.value.iban ? 41 : -1),
                s(3),
                m("ngClass", q(33, Ar, i.currentInputSelectedName() === "sellValue")),
                s(3),
                m("form", i.sellForm)("ngClass", q(35, wr, i.currentInputSelectedName() === "sellValue")),
                s(7),
                T(A(56, 29, A(55, 27, i.currentAssetPropertyCount$))),
                s(5),
                $t(" \u0645\u0628\u0644\u063A \u0646\u0647\u0627\u06CC\u06CC \u0647\u0631 \u0648\u0627\u062D\u062F \u0628\u0631 \u0627\u0633\u0627\u0633 \u0642\u06CC\u0645\u062A \u0627\u0628\u0637\u0627\u0644 ", (b = i.fund()) == null || b.limitDay == null ? null : b.limitDay.minRedemption, " \u062A\u0627 ", (b = i.fund()) == null || b.limitDay == null ? null : b.limitDay.maxRedemption, " \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC \u0628\u0639\u062F \u0645\u062D\u0627\u0633\u0628\u0647 \u0634\u062F\u0647 \u0648 \u062F\u0631 \u0647\u0645\u0627\u0646 \u0631\u0648\u0632 \u0628\u0647 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u0648\u0627\u0631\u06CC\u0632 \u062E\u0648\u0627\u0647\u062F \u0634\u062F. "),
                s(2),
                m("ngClass", Kn(37, kr, i.sellForm.invalid && (i.sellForm.controls.value.dirty || i.sellForm.controls.value.touched), i.sellForm.valid, i.sellForm.invalid && !(i.sellForm.controls.value.dirty || i.sellForm.controls.value.touched), i.sellForm.invalid)),
                s(),
                F(" ", i.sellForm.invalid && i.sellFormValidatorText && (i.sellForm.controls.value.dirty || i.sellForm.controls.value.touched) ? i.sellFormValidatorText : "\u062A\u0627\u06CC\u06CC\u062F \u0648 \u0627\u062F\u0627\u0645\u0647", " ")
            }
        },
        dependencies: [z, xt, se, et, Se, xe, he, Fe, At, Ho, yn, hn, Cn, fn, Lo, Ft, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
function Nr(t, o) {
    return this.trackByFn
}
var Pr = t => ({
    loading: t
});
function Vr(t, o) {
    t & 1 && (a(0, "span", 1),
    l(1, "\u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644 \u0635\u0646\u062F\u0648\u0642\u200C\u0647\u0627\u06CC \u0645\u0641\u06CC\u062F"),
    r())
}
function Or(t, o) {
    t & 1 && (a(0, "span", 1),
    l(1, " \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u06A9\u0627\u0631\u0645\u0632\u062F \u0627\u0628\u0637\u0627\u0644 \u0632\u0648\u062F\u0647\u0646\u06AF\u0627\u0645 "),
    r())
}
function Br(t, o) {
    if (t & 1 && (a(0, "span", 1),
    l(1),
    r()),
    t & 2) {
        let u = d();
        s(),
        T(u.agreementData().title)
    }
}
function Rr(t, o) {
    t & 1 && (a(0, "p"),
    l(1, "\u0627\u06CC\u0646 \u062A\u0648\u0627\u0641\u0642 \u0646\u0627\u0645\u0647 \u0628\u0631 \u0645\u0628\u0646\u0627\u06CC \u0642\u0648\u0627\u0646\u06CC\u0646 \u0633\u0627\u0632\u0645\u0627\u0646 \u0628\u0648\u0631\u0633 \u0648 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0631\u060C \u062A\u0648\u0633\u0637 \u0645\u0634\u062A\u0631\u06CC\u0627\u0646\u060C \u0628\u0627 \u0634\u0631\u062D \u0632\u06CC\u0631 \u0645\u0648\u0631\u062F \u0645\u0648\u0627\u0641\u0642\u062A \u0642\u0631\u0627\u0631 \u0645\u06CC\u200C\u06AF\u06CC\u0631\u062F\u061B"),
    r(),
    a(2, "ul", 5)(3, "li", 6),
    l(4, " \u0647\u062F\u0641 \u0627\u0632 \u062A\u0634\u06A9\u06CC\u0644 \u0635\u0646\u062F\u0648\u0642\u060C \u062C\u0645\u0639 \u0622\u0648\u0631\u06CC \u0648\u062C\u0648\u0647 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u0627\u0646 \u0648 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u062F\u0631 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0631\u06CC \u0627\u0633\u062A \u06A9\u0647 \u062E\u0635\u0648\u0635\u06CC\u0627\u062A \u0622\u0646 \u062F\u0631 \u0627\u0633\u0627\u0633\u0646\u0627\u0645\u0647 \u0648 \u0627\u0645\u06CC\u062F \u0646\u0627\u0645\u0647 \u0635\u0646\u062F\u0648\u0642 \u0630\u06A9\u0631 \u0634\u062F\u0647 \u0627\u0633\u062A. "),
    r(),
    a(5, "li", 6),
    l(6, " \u062A\u06A9\u0645\u06CC\u0644 \u0648 \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631/\u067E\u0630\u06CC\u0631\u0647 \u0646\u0648\u06CC\u0633\u06CC \u0648 \u0627\u0628\u0637\u0627\u0644 \u062F\u0631 \u0635\u0646\u062F\u0648\u0642 \u0628\u0647 \u0645\u0646\u0632\u0644\u0647 \u0642\u0628\u0648\u0644 \u0645\u0641\u0627\u062F \u0627\u0633\u0627\u0633\u0646\u0627\u0645\u0647 \u0648 \u0627\u0645\u06CC\u062F \u0646\u0627\u0645\u0647 \u0635\u0646\u062F\u0648\u0642 \u0648 \u067E\u0630\u06CC\u0631\u0634 \u062A\u0645\u0627\u0645\u06CC \u0631\u06CC\u0633\u06A9 \u0647\u0627\u06CC \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u0627\u062D\u062A\u0645\u0627\u0644\u06CC\u060C \u0645\u0646\u062F\u0631\u062C \u062F\u0631 \u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0645\u0630\u06A9\u0648\u0631 \u0627\u0633\u062A. "),
    r(),
    a(7, "li", 6),
    l(8, " \u0635\u062F\u0648\u0631 \u06A9\u0644\u06CC\u0647 \u0648\u0627\u062D\u062F\u0647\u0627\u06CC \u0635\u0646\u062F\u0648\u0642 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u0627\u0632 \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u0645\u0634\u062A\u0631\u06CC \u0646\u0632\u062F \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC \u0635\u0648\u0631\u062A \u0645\u06CC \u067E\u0630\u06CC\u0631\u062F\u060C \u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631 \u0628\u0647 \u0645\u0646\u0632\u0644\u0647 \u0645\u062C\u0648\u0632 \u062C\u0647\u062A \u0628\u0631\u062F\u0627\u0634\u062A \u0627\u0632 \u062D\u0633\u0627\u0628 \u0645\u0634\u062A\u0631\u06CC \u0646\u0632\u062F \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC\u060C \u0628\u0627\u0628\u062A \u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u062D\u0633\u0627\u0628 \u0635\u0646\u062F\u0648\u0642 \u0622\u062A\u06CC\u0647 \u0645\u0641\u06CC\u062F \u0645\u06CC \u0628\u0627\u0634\u062F. "),
    r(),
    a(9, "li", 6),
    l(10, " \u062F\u0631 \u0635\u0648\u0631\u062A \u062A\u06A9\u0645\u06CC\u0644 \u0633\u0642\u0641 \u0648\u0627\u062D\u062F\u0647\u0627\u06CC \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u0635\u0646\u062F\u0648\u0642\u060C \u0645\u0628\u0644\u063A \u0648\u0627\u0631\u06CC\u0632 \u0634\u062F\u0647 \u062C\u0647\u062A \u0634\u0631\u06A9\u062A \u062F\u0631 \u067E\u0630\u06CC\u0631\u0647 \u0646\u0648\u06CC\u0633\u06CC \u062A\u0648\u0633\u0637 \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC \u0628\u0647 \u06CC\u06A9\u06CC \u0627\u0632 \u062D\u0633\u0627\u0628 \u0647\u0627\u06CC \u0645\u0639\u0631\u0641\u06CC \u0634\u062F\u0647 \u0645\u0634\u062A\u0631\u06CC \u0646\u0632\u062F \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631 \u0648\u0627\u0631\u06CC\u0632 \u0645\u06CC \u0634\u0648\u062F. "),
    r(),
    a(11, "li", 6),
    l(12, " \u062F\u0631 \u0645\u0648\u0627\u0631\u062F\u06CC \u06A9\u0647 \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627\u06CC \u0627\u062C\u062A\u0646\u0627\u0628 \u0646\u0627\u067E\u0630\u06CC\u0631 \u0648 \u062E\u0627\u0631\u062C \u0627\u0632 \u06A9\u0646\u062A\u0631\u0644 \u0631\u062E \u062F\u0647\u062F \u0648 \u0633\u0627\u0645\u0627\u0646\u0647 \u0642\u0627\u062F\u0631 \u0628\u0647 \u0627\u0631\u0627\u0626\u0647 \u062E\u062F\u0645\u0627\u062A \u0646\u0628\u0627\u0634\u062F\u060C \u0645\u0633\u0626\u0648\u0644\u06CC\u062A\u06CC \u0645\u062A\u0648\u062C\u0647 \u0633\u0627\u0645\u0627\u0646\u0647 \u0648 \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC \u0646\u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F. "),
    r(),
    a(13, "li", 6),
    l(14, " \u0644\u0627\u0632\u0645 \u0628\u0647 \u0630\u06A9\u0631 \u0627\u0633\u062A \u06A9\u0647 \u067E\u0630\u06CC\u0631\u0647\u200C\u0646\u0648\u06CC\u0633\u06CC \u0627\u06CC\u0646 \u0635\u0646\u062F\u0648\u0642 \u0628\u062F\u0648\u0646 \u06A9\u0627\u0631\u0645\u0632\u062F \u0635\u062F\u0648\u0631 \u0627\u0646\u062C\u0627\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648\u0644\u06CC \u0627\u0628\u0637\u0627\u0644 \u0632\u0648\u062F\u0647\u0646\u06AF\u0627\u0645 \u0648\u0627\u062D\u062F\u0647\u0627\u06CC \u0622\u0646 \u0645\u0634\u0645\u0648\u0644 \u06A9\u0627\u0631\u0645\u0632\u062F \u0627\u0628\u0637\u0627\u0644 \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F. \u0628\u0631\u0627\u06CC \u06A9\u0633\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0647 \u0633\u0627\u06CC\u062A "),
    a(15, "a", 7),
    l(16, " \u0635\u0646\u062F\u0648\u0642 \u0622\u062A\u06CC\u0647 \u0645\u0641\u06CC\u062F "),
    r(),
    l(17, " \u0645\u0631\u0627\u062C\u0639\u0647 \u06A9\u0646\u06CC\u062F. "),
    r()())
}
function Wr(t, o) {
    t & 1 && (a(0, "p"),
    l(1, " \u0627\u06CC\u0646 \u062A\u0648\u0627\u0641\u0642\u200C\u0646\u0627\u0645\u0647 \u0628\u0631 \u0645\u0628\u0646\u0627\u06CC \u0642\u0648\u0627\u0646\u06CC\u0646 \u0633\u0627\u0632\u0645\u0627\u0646 \u0628\u0648\u0631\u0633 \u0648 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0631\u060C \u062A\u0648\u0633\u0637 \u0645\u0634\u062A\u0631\u06CC\u0627\u0646\u060C \u0628\u0627 \u0634\u0631\u062D \u0645\u0648\u0631\u062F \u0632\u06CC\u0631 \u0645\u0648\u0631\u062F \u0645\u0648\u0627\u0641\u0642\u062A \u0642\u0631\u0627\u0631 \u0645\u06CC\u200C\u06AF\u06CC\u0631\u062F: "),
    r(),
    a(2, "ul", 5)(3, "li", 6),
    l(4, " \u0647\u062F\u0641 \u0627\u0632 \u062A\u0634\u06A9\u06CC\u0644 \u0635\u0646\u062F\u0648\u0642\u060C \u062C\u0645\u0639 \u0622\u0648\u0631\u06CC \u0648\u062C\u0648\u0647 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u0627\u0646 \u0648 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u062F\u0631 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0631\u06CC \u0627\u0633\u062A \u06A9\u0647 \u062E\u0635\u0648\u0635\u06CC\u0627\u062A \u0622\u0646 \u062F\u0631 \u0627\u0633\u0627\u0633\u0646\u0627\u0645\u0647 \u0648 \u0627\u0645\u06CC\u062F \u0646\u0627\u0645\u0647 \u0635\u0646\u062F\u0648\u0642 \u0630\u06A9\u0631 \u0634\u062F\u0647 \u0627\u0633\u062A. "),
    r(),
    a(5, "li", 6),
    l(6, " \u062A\u06A9\u0645\u06CC\u0644 \u0648 \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644 \u062F\u0631 \u0635\u0646\u062F\u0648\u0642 \u0628\u0647 \u0645\u0646\u0632\u0644\u0647 \u0642\u0628\u0648\u0644 \u0645\u0641\u0627\u062F \u0627\u0633\u0627\u0633\u0646\u0627\u0645\u0647 \u0648 \u0627\u0645\u06CC\u062F \u0646\u0627\u0645\u0647 \u0635\u0646\u062F\u0648\u0642 \u0648 \u067E\u0630\u06CC\u0631\u0634 \u062A\u0645\u0627\u0645\u06CC \u0631\u06CC\u0633\u06A9 \u0647\u0627\u06CC \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u0627\u062D\u062A\u0645\u0627\u0644\u06CC\u060C \u0645\u0646\u062F\u0631\u062C \u062F\u0631 \u0645\u0633\u062A\u0646\u062F\u0627\u062A \u0645\u0630\u06A9\u0648\u0631 \u0627\u0633\u062A. \u0635\u062F\u0648\u0631 \u06A9\u0644\u06CC\u0647 \u0648\u0627\u062D\u062F\u0647\u0627\u06CC \u0635\u0646\u062F\u0648\u0642\u200C\u0647\u0627\u06CC \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u0627\u0632 \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u06A9\u0627\u0631\u0628\u0631 \u0646\u0632\u062F \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC \u0635\u0648\u0631\u062A \u0645\u06CC\u200C\u067E\u0630\u06CC\u0631\u062F. "),
    r(),
    a(7, "li", 6),
    l(8, "\u0627\u0646\u0648\u0627\u0639 \u0631\u06CC\u0633\u06A9\u200C\u0647\u0627\u06CC \u0641\u0631\u0627\u0631\u0648\u06CC \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u062F\u0631 \u0647\u0631 \u0635\u0646\u062F\u0648\u0642\u060C \u062F\u0631 \u0627\u0645\u06CC\u062F \u0646\u0627\u0645\u0647 \u0622\u0646 \u0635\u0646\u062F\u0648\u0642 \u062A\u0648\u0636\u06CC\u062D \u062F\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A."),
    r(),
    a(9, "li", 6),
    l(10, " \u0647\u0632\u06CC\u0646\u0647 \u0628\u0647 \u06A9\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0646\u06CC\u0631\u0648\u0647\u0627\u06CC \u0645\u062A\u062E\u0635\u0635\u060C \u06AF\u0631\u062F\u0622\u0648\u0631\u06CC \u0648 \u062A\u062D\u0644\u06CC\u0644 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0648 \u06AF\u0632\u06CC\u0646\u0634 \u0633\u0628\u062F \u0628\u0647\u06CC\u0646\u0647 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0631 \u0628\u06CC\u0646 \u0647\u0645\u0647 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u0627\u0646 \u062A\u0642\u0633\u06CC\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u0633\u0631\u0627\u0646\u0647 \u0647\u0632\u06CC\u0646\u0647 \u06A9\u0627\u0647\u0634 \u0645\u06CC\u200C\u06CC\u0627\u0628\u062F. "),
    r(),
    a(11, "li", 6),
    l(12, "\u0627\u0645\u06A9\u0627\u0646 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u0645\u062A\u0646\u0648\u0639 \u062A\u0631 \u062F\u0627\u0631\u0627\u06CC\u06CC\u200C\u0647\u0627 \u0641\u0631\u0627\u0647\u0645 \u0634\u062F\u0647 \u0648 \u062F\u0631 \u0646\u062A\u06CC\u062C\u0647 \u0631\u06CC\u0633\u06A9 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u06A9\u0627\u0647\u0634 \u0645\u06CC\u200C\u06CC\u0627\u0628\u062F."),
    r(),
    a(13, "li", 6),
    l(14, " \u0645\u0634\u062A\u0631\u06CC \u0628\u0627 \u062A\u0648\u062C\u0647 \u0628\u0647 \u0642\u0627\u0646\u0648\u0646 \u0645\u0628\u0627\u0631\u0632\u0647 \u0628\u0627 \u067E\u0648\u0644 \u0634\u0648\u06CC\u06CC \u0645\u0635\u0648\u0628 \u0634\u0648\u0631\u0627\u06CC \u0627\u0633\u0644\u0627\u0645\u06CC \u0645\u0648\u0631\u062E 1368/11/02 \u0648 \u0622\u06CC\u06CC\u0646 \u0646\u0627\u0645\u0647\u200C\u0647\u0627 \u0648 \u062F\u0633\u062A\u0648\u0631\u0627\u0644\u0639\u0645\u0644 \u0647\u0627\u06CC \u0627\u062C\u0631\u0627\u06CC\u06CC \u0622\u0646\u060C \u0628\u062F\u06CC\u0646 \u0648\u0633\u06CC\u0644\u0647 \u0645\u062A\u0639\u0647\u062F \u0648 \u0645\u0644\u062A\u0632\u0645 \u0645\u06CC \u0634\u0648\u062F\u060C \u0636\u0645\u0646 \u0631\u0639\u0627\u06CC\u062A \u0645\u0648\u0627\u062F \u0642\u0627\u0646\u0648\u0646 \u06CC\u0627\u062F \u0634\u062F\u0647 \u0648 \u0645\u0642\u0631\u0631\u0627\u062A \u0645\u0631\u0628\u0648\u0637\u0647\u060C \u0627\u0632 \u0647\u0631 \u06AF\u0648\u0646\u0647 \u0627\u0642\u062F\u0627\u0645\u06CC \u06A9\u0647 \u0645\u0646\u062C\u0631 \u0628\u0647 \u067E\u0648\u0644\u0634\u0648\u06CC\u06CC \u0648 \u0639\u0645\u0644\u06CC\u0627\u062A \u0645\u0634\u06A9\u0648\u06A9 \u06AF\u0631\u062F\u062F \u062E\u0648\u062F\u062F\u0627\u0631\u06CC \u0646\u0645\u0648\u062F\u0647 \u0648 \u0647\u0645\u0686\u0646\u06CC\u0646 \u0628\u0647 \u0627\u0634\u062E\u0627\u0635 \u062B\u0627\u0644\u062B \u0627\u062C\u0627\u0632\u0647 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u062F\u0631 \u0633\u0627\u0645\u0627\u0646\u0647 \u0631\u0627 \u0646\u062F\u0647\u062F. "),
    r(),
    a(15, "li", 6),
    l(16, " \u0639\u0645\u0644\u06CC\u0627\u062A \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644 \u0627\u06CC\u0646\u062A\u0631\u0646\u062A\u06CC \u0645\u0634\u0645\u0648\u0644 \u06A9\u0644\u06CC\u0647 \u0635\u0646\u062F\u0648\u0642\u200C\u0647\u0627\u06CC \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u0645\u062C\u0648\u0632 \u062F\u0627\u0631 \u0627\u0632 \u0633\u0648\u06CC \u0633\u0627\u0632\u0645\u0627\u0646 \u0628\u0648\u0631\u0633 \u0648 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0631 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F \u06A9\u0647 \u062F\u0631 \u0633\u0627\u0645\u0627\u0646\u0647 \u0639\u0631\u0636\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A. \u0627\u0632 \u0647\u0645\u06CC\u0646 \u0631\u0648\u060C \u06A9\u0644\u06CC\u0647 \u0645\u0642\u0631\u0631\u0627\u062A \u0648 \u062F\u0633\u062A\u0648\u0631\u0627\u0644\u0639\u0645\u0644\u200C\u0647\u0627\u06CC \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644 \u0648\u0627\u062D\u062F\u0647\u0627\u06CC \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u0645\u0646\u062A\u0634\u0631\u0647 \u0627\u0632 \u0633\u0648\u0631\u06CC \u0633\u0627\u0632\u0645\u0627\u0646 \u0628\u0648\u0631\u0633 \u0648 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0631 \u062F\u0631 \u0627\u06CC\u0646 \u062E\u0635\u0648\u0635\u060C \u0634\u0627\u0645\u0644 \u0641\u0631\u0622\u06CC\u0646\u062F \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644 \u0627\u06CC\u0646\u062A\u0631\u0646\u062A\u06CC \u062F\u0631 \u0633\u0627\u0645\u0627\u0646\u0647 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F. "),
    r(),
    a(17, "li", 6),
    l(18, " \u062F\u0631 \u0645\u0648\u0627\u0631\u062F\u06CC \u06A9\u0647 \u0631\u0648\u06CC\u062F\u0627\u062F\u0647\u0627\u06CC \u0627\u062C\u062A\u0646\u0627\u0628 \u0646\u0627\u067E\u0630\u06CC\u0631 \u0648 \u0622\u0646\u0686\u0647 \u06A9\u0647 \u062E\u0627\u0631\u062C \u0627\u0632 \u06A9\u0646\u062A\u0631\u0644 \u0633\u0627\u0645\u0627\u0646\u0647 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F\u060C \u0633\u0627\u0645\u0627\u0646\u0647 \u0642\u0627\u062F\u0631 \u0628\u0647 \u0627\u0631\u0627\u0626\u0647 \u062E\u062F\u0645\u0627\u062A \u0646\u0628\u0627\u0634\u062F\u060C \u0645\u0633\u0626\u0648\u0644\u06CC\u062A\u06CC \u0645\u062A\u0648\u062C\u0647 \u0633\u0627\u0645\u0627\u0646\u0647 \u0646\u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F. "),
    r(),
    a(19, "li", 6),
    l(20, " \u0645\u0634\u062A\u0631\u06CC \u0645\u062A\u0639\u0647\u062F \u0645\u06CC\u200C\u0634\u0648\u062F \u06A9\u0647 \u062A\u0645\u0627\u0645 \u0633\u0647\u0645 \u062D\u0633\u0627\u0628 \u0628\u0627\u0646\u06A9\u06CC \u0645\u0639\u0631\u0641\u06CC \u0634\u062F\u0647 \u0628\u0647 \u0646\u0627\u0645 \u0648\u06CC \u0645\u06CC\u200C\u0628\u0627\u0634\u062F\u060C \u0627\u06AF\u0631 \u0628\u0647 \u0647\u0631 \u062F\u0644\u06CC\u0644\u06CC \u0648\u062C\u0647 \u0633\u0648\u062F \u0648\u0627\u0631\u06CC\u0632\u06CC \u0628\u0647 \u0627\u06CC\u0646 \u062D\u0633\u0627\u0628\u060C \u0645\u063A\u0627\u06CC\u0631 \u0628\u0627 \u0627\u06CC\u0646 \u0628\u0646\u062F \u0628\u0627\u0634\u062F\u060C \u062F\u0631 \u0627\u06CC\u0646 \u0635\u0648\u0631\u062A \u0647\u06CC\u0686 \u0645\u0633\u0626\u0648\u0644\u06CC\u062A\u06CC \u0645\u062A\u0648\u062C\u0647 \u0633\u0627\u0645\u0627\u0646\u0647 \u0646\u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F. "),
    r(),
    a(21, "li", 6),
    l(22, " \u0645\u0637\u0627\u0628\u0642 \u0642\u0648\u0627\u0646\u06CC\u0646 \u0648 \u0645\u0642\u0631\u0631\u0627\u062A \u0633\u0627\u0632\u0645\u0627\u0646 \u0628\u0648\u0631\u0633 \u0648 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0631 \u062A\u0647\u0631\u0627\u0646\u060C \u0642\u06CC\u0645\u062A \u0635\u062F\u0648\u0631 \u0648\u0627\u062D\u062F\u0647\u0627\u06CC \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u062F\u0631 \u0632\u0645\u0627\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A .\u0635\u062F\u0648\u0631 \u0635\u0646\u062F\u0648\u0642 \u0645\u0628\u0646\u0627\u06CC \u0645\u062D\u0627\u0633\u0628\u0647 \u0646\u0628\u0648\u062F\u0647 \u0648 \u0642\u06CC\u0645\u062A \u0646\u0647\u0627\u06CC\u06CC \u0635\u062F\u0648\u0631 \u0647\u0631 \u0648\u0627\u062D\u062F \u062F\u0631 \u0632\u0645\u0627\u0646 \u062A\u0627\u06CC\u06CC\u062F \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062A\u0648\u0633\u0637 \u0645\u062F\u06CC\u0631 \u0635\u0646\u062F\u0648\u0642 \u0645\u0639\u06CC\u0646 \u0645\u06CC\u200C\u06AF\u0631\u062F\u062F. "),
    r(),
    a(23, "li", 6),
    l(24, " \u0628\u0627\u0642\u06CC \u0645\u0627\u0646\u062F\u0647 \u0645\u0628\u0644\u063A \u0648\u0627\u0631\u06CC\u0632 \u0634\u062F\u0647 \u062C\u0647\u062A \u0635\u062F\u0648\u0631 \u0648\u0627\u062D\u062F\u0647\u0627\u06CC \u0635\u0646\u062F\u0648\u0642 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u067E\u0633 \u0627\u0632 \u062A\u0627\u06CC\u06CC\u062F \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0648 \u0635\u062F\u0648\u0631 \u0648\u0627\u062D\u062F\u0647\u0627\u060C \u0637\u06CC \u062F\u0648 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC \u0628\u0647 \u062D\u0633\u0627\u0628 \u0645\u0639\u0631\u0641\u06CC \u0634\u062F\u0647 \u06A9\u0627\u0631\u0628\u0631 \u062F\u0631 \u0635\u0646\u062F\u0648\u0642 \u0645\u0631\u0628\u0648\u0637\u0647 \u0648\u0627\u0631\u06CC\u0632 \u0645\u06CC\u200C\u06AF\u0631\u062F\u062F. (\u062A\u0648\u062C\u0647: \u0628\u0627\u0642\u06CC \u0645\u0627\u0646\u062F\u0647 \u0645\u0628\u0644\u063A \u0648\u0627\u0631\u06CC\u0632 \u0634\u062F\u0647 \u0628\u0631\u0627\u06CC \u0635\u0646\u062F\u0648\u0642\u200C\u0647\u0627\u06CC \u0627\u0645\u06CC\u062F \u062A\u0648\u0633\u0639\u0647 \u0648 \u0646\u0627\u0645\u06CC \u0628\u0627 \u0633\u0648\u062F \u0645\u0627\u0647\u0627\u0646\u0647 \u0635\u0646\u062F\u0648\u0642 \u0628\u0647 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631 \u067E\u0631\u062F\u0627\u062E\u062A \u06CC\u0627 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u0645\u062C\u062F\u062F \u0645\u06CC\u200C\u0634\u0648\u062F.) "),
    r(),
    a(25, "li", 6),
    l(26, " \u0635\u062F\u0648\u0631 \u06A9\u0644\u06CC\u0647 \u0648\u0627\u062D\u062F\u0647\u0627\u06CC \u0635\u0646\u062F\u0648\u0642 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u0627\u0632 \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u0645\u0634\u062A\u0631\u06CC \u0646\u0632\u062F \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC \u0635\u0648\u0631\u062A \u0645\u06CC \u067E\u0630\u06CC\u0631\u062F\u060C \u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631 \u0628\u0647 \u0645\u0646\u0632\u0644\u0647 \u0645\u062C\u0648\u0632 \u062C\u0647\u062A \u0628\u0631\u062F\u0627\u0634\u062A \u0627\u0632 \u062D\u0633\u0627\u0628 \u0645\u0634\u062A\u0631\u06CC \u0646\u0632\u062F \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC\u060C \u0628\u0627\u0628\u062A \u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u062D\u0633\u0627\u0628 \u0635\u0646\u062F\u0648\u0642 \u0645\u06CC \u0628\u0627\u0634\u062F "),
    r()())
}
function $r(t, o) {
    if (t & 1 && (a(0, "div", 10)(1, "span"),
    l(2),
    r(),
    a(3, "span", 12),
    l(4),
    S(5, "number"),
    r()()),
    t & 2) {
        let u = o.$implicit;
        s(2),
        T(u.durationOfRedemption),
        s(2),
        F("", ze(5, 2, u.percent, "1.0-2"), "%")
    }
}
function qr(t, o) {
    if (t & 1 && (a(0, "p"),
    l(1),
    r(),
    a(2, "div", 8)(3, "span"),
    l(4, "\u0641\u0627\u0635\u0644\u0647 \u062A\u0627\u0631\u06CC\u062E \u062E\u0631\u06CC\u062F \u0648 \u0641\u0631\u0648\u0634"),
    r(),
    a(5, "span"),
    l(6, "\u062F\u0631\u0635\u062F \u06A9\u0633\u0631 \u0627\u0632 \u06A9\u0644 \u0642\u06CC\u0645\u062A"),
    r()(),
    a(7, "div", 9),
    ne(8, $r, 6, 5, "div", 10, Nr, !0),
    r(),
    a(10, "p", 11),
    l(11, "\u0627\u0628\u0637\u0627\u0644 \u0648\u0627\u062D\u062F\u0647\u0627\u06CC \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u0628\u0647 \u062A\u0631\u062A\u06CC\u0628 \u062A\u0627\u0631\u06CC\u062E \u0648 \u0627\u0632 \u0642\u062F\u06CC\u0645\u06CC\u200C\u062A\u0631\u06CC\u0646 \u0648\u0627\u062D\u062F\u0647\u0627\u06CC \u062E\u0631\u06CC\u062F\u0627\u0631\u06CC \u0634\u062F\u0647 \u0635\u0648\u0631\u062A \u0645\u06CC\u200C\u067E\u0630\u06CC\u0631\u062F."),
    r()),
    t & 2) {
        let u, e = d(2);
        s(),
        F(" \u0628\u0631 \u0627\u0633\u0627\u0633 \u0627\u0645\u06CC\u062F \u0646\u0627\u0645\u0647 \u0635\u0646\u062F\u0648\u0642 ", (u = e.fundPageStateSignal().activeFund) == null ? null : u.name, " (\u062B\u0628\u062A \u0634\u062F\u0647 \u0646\u0632\u062F \u0633\u0627\u0632\u0645\u0627\u0646 \u0628\u0648\u0631\u0633 \u0648 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0631)\u060C \u062F\u0631 \u0635\u0648\u0631\u062A \u0641\u0631\u0648\u0634 \u0632\u0648\u062F\u0647\u0646\u06AF\u0627\u0645 \u0648\u0627\u062D\u062F\u0647\u0627\u06CC \u0635\u0646\u062F\u0648\u0642 \u062A\u0648\u0633\u0637 \u062E\u0631\u06CC\u062F\u0627\u0631\u060C \u06A9\u0627\u0631\u0645\u0632\u062F\u06CC \u0628\u0631 \u0627\u0633\u0627\u0633 \u0641\u0627\u0635\u0644\u0647 \u0632\u0645\u0627\u0646\u06CC \u0645\u06CC\u0627\u0646 \u062E\u0631\u06CC\u062F \u0648 \u0641\u0631\u0648\u0634 \u0648\u0627\u062D\u062F\u0647\u0627\u06CC \u0635\u0646\u062F\u0648\u0642\u060C \u0637\u0628\u0642 \u062C\u062F\u0648\u0644 \u0632\u06CC\u0631 \u0645\u062D\u0627\u0633\u0628\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F. "),
        s(7),
        ie(e.fund().penalties)
    }
}
function jr(t, o) {
    if (t & 1 && C(0, qr, 12, 1),
    t & 2) {
        let u = d();
        f(u.fundPageStateSignal() ? 0 : -1)
    }
}
function Ur(t, o) {
    if (t & 1 && _(0, "div", 3),
    t & 2) {
        let u = d();
        m("innerHTML", u.agreementData().description, Wt)
    }
}
function Lr(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "button", 14),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.buttonClicked())
        }),
        l(1, "\u0645\u0648\u0627\u0641\u0642\u062A \u0645\u06CC\u200C\u0646\u0645\u0627\u06CC\u0645"),
        r(),
        a(2, "button", 15),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.closeBtnClicked())
        }),
        l(3, "\u0627\u0646\u0635\u0631\u0627\u0641"),
        r()
    }
}
function Hr(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "button", 16),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.closeBtnClicked())
        }),
        l(1, "\u0628\u0633\u062A\u0646"),
        r()
    }
}
function zr(t, o) {
    if (t & 1 && (a(0, "div", 4),
    C(1, Lr, 4, 0)(2, Hr, 2, 0, "button", 13),
    r()),
    t & 2) {
        let u = d();
        s(),
        f(u.isNonEtf() ? -1 : 1),
        s(),
        f(u.isNonEtf() ? 2 : -1)
    }
}
function Gr(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "button", 14),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.buttonClicked())
        }),
        l(1, "\u0645\u0648\u0627\u0641\u0642\u062A \u0645\u06CC\u200C\u0646\u0645\u0627\u06CC\u0645"),
        r(),
        a(2, "button", 15),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.closeBtnClicked())
        }),
        l(3, "\u0627\u0646\u0635\u0631\u0627\u0641"),
        r()
    }
}
function Kr(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "button", 18),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.closeBtnClicked())
        }),
        l(1, "\u0628\u0633\u062A\u0646"),
        r()
    }
}
function Yr(t, o) {
    if (t & 1 && (a(0, "div", 4),
    C(1, Gr, 4, 0)(2, Kr, 2, 0, "button", 17),
    r()),
    t & 2) {
        let u = d();
        s(),
        f(u.isNonEtf() ? -1 : 1),
        s(),
        f(u.isNonEtf() ? 2 : -1)
    }
}
var Ki = ( () => {
    let o = class o extends _n {
        constructor(e) {
            super(),
            this.fundsFacade = e,
            this.confirmModalClosedEmitter = J(),
            this.closeBtnClick = J(),
            this.btnClicked = new Ot,
            this.fundPageStateSignal = M(this.fundsFacade.fundPageState$),
            this.loadingSignal = M(this.fundsFacade.loading$),
            this.isMobile = w(!1),
            this.fundAgreementType = w(null),
            this.agreementData = w(null),
            this.fund = w(null),
            this.isNonEtf = w(!1),
            this.trackByFn = n => n.id
        }
        ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe()
        }
        closeBtnClicked() {
            this.closeBtnClick.emit(!0)
        }
        buttonClicked(e) {
            if (this.btnClicked.next(e),
            this.confirmModalClosedEmitter.emit(!0),
            this.fund()) {
                this.agreement({
                    fundCode: this.fund().code,
                    agreementType: this.fundAgreementType(),
                    agreementId: this.agreementData()?.id
                });
                return
            }
            this.fundsFacade.fundPageState$.pipe(V(n => {
                let i = {
                    fundCode: n?.activeFund?.code,
                    agreementType: this.fundAgreementType()
                };
                this.agreement(i)
            }
            )).subscribe()
        }
        agreement(e) {
            this.fundsFacade.agreement(e).subscribe()
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(ue))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["fund-confirm-modal"]],
        inputs: {
            isMobile: [1, "isMobile"],
            fundAgreementType: [1, "fundAgreementType"],
            agreementData: [1, "agreementData"],
            fund: [1, "fund"],
            isNonEtf: [1, "isNonEtf"]
        },
        outputs: {
            confirmModalClosedEmitter: "confirmModalClosedEmitter",
            closeBtnClick: "closeBtnClick"
        },
        features: [sn],
        decls: 11,
        vars: 10,
        consts: [[1, "align-items-center", "p-3", "fs-6", "fw-bold", 3, "ngClass"], [1, "fw-bolder"], [1, "d-flex", "overflow-auto", "h-100", "flex-column", "p-3"], [1, "d-flex", "flex-column", "h-100", "overflow-hidden", "text-justify", 3, "innerHTML"], [1, "m-0", "d-flex", "gap-2", "p-3"], [1, "ps-3", "pe-0", "m-0"], [1, "mb-3"], ["href", "https://atiyehfund.com/AboutFund/FundProspectus"], [1, "d-flex", "text-muted", "justify-content-between"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "bg-transparent"], [1, "mt-3"], [1, "text-base"], ["type", "button", 1, "btn", "btn-outline-secondary", "flex-grow-1"], ["type", "button", 1, "btn", "btn-success", "flex-grow-1", 3, "click"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-secondary", "flex-grow-1", 3, "click"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]],
        template: function(n, i) {
            if (n & 1 && (a(0, "div", 0),
            C(1, Vr, 2, 0, "span", 1)(2, Or, 2, 0, "span", 1)(3, Br, 2, 1, "span", 1),
            r(),
            a(4, "div", 2),
            C(5, Rr, 18, 0)(6, Wr, 27, 0)(7, jr, 1, 1)(8, Ur, 1, 1, "div", 3),
            r(),
            C(9, zr, 3, 2, "div", 4)(10, Yr, 3, 2, "div", 4)),
            n & 2) {
                let c;
                m("ngClass", q(8, Pr, i.loadingSignal())),
                s(),
                f((c = i.fundAgreementType()) === 0 ? 1 : c === 1 ? 2 : c === 2 ? 3 : -1),
                s(4),
                f(i.fundAgreementType() === 0 && i.isNonEtf() ? 5 : -1),
                s(),
                f(i.fundAgreementType() === 0 && !i.isNonEtf() ? 6 : -1),
                s(),
                f(i.fundAgreementType() === 1 ? 7 : -1),
                s(),
                f(i.fundAgreementType() === 2 ? 8 : -1),
                s(),
                f(i.isMobile() ? 9 : -1),
                s(),
                f(i.isMobile() ? -1 : 10)
            }
        },
        dependencies: [z, se],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var Qr = (t, o) => ({
    loading: t,
    "px-3 py-3": o
})
  , Jr = (t, o) => ({
    "btn-success": t,
    "btn-danger": o
});
function Zr(t, o) {
    if (t & 1 && (a(0, "div", 14),
    l(1),
    r(),
    a(2, "div", 15)(3, "span", 16),
    l(4, "\u0627\u0628\u0637\u0627\u0644"),
    a(5, "b"),
    l(6),
    r(),
    l(7),
    r(),
    a(8, "div")(9, "span", 17),
    l(10),
    S(11, "number"),
    r(),
    a(12, "span", 18),
    l(13, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()(),
    a(14, "div", 19)(15, "div", 20),
    l(16, " \u0642\u06CC\u0645\u062A \u06A9\u0646\u0648\u0646\u06CC \u0627\u0628\u0637\u0627\u0644 \u0647\u0631 \u0648\u0627\u062D\u062F"),
    a(17, "span", 21),
    l(18),
    S(19, "number"),
    a(20, "span", 18),
    l(21, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()(),
    a(22, "div", 20),
    l(23, " \u06A9\u0627\u0631\u0645\u0632\u062F \u062B\u0627\u0628\u062A"),
    a(24, "span", 21),
    l(25),
    S(26, "number"),
    a(27, "span", 18),
    l(28, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()()()),
    t & 2) {
        let u, e, n, i, c, p = d(2);
        s(),
        F("\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0628\u0637\u0627\u0644 \u0635\u0646\u062F\u0648\u0642 ", (u = p.fund()) == null ? null : u.name, ""),
        s(5),
        F(" ", p.value(), " "),
        s(),
        F(" \u0648\u0627\u062D\u062F ", (e = p.fund()) == null ? null : e.name, " "),
        s(3),
        F("\u0645\u0639\u0627\u062F\u0644 \u062D\u062F\u0648\u062F\u06CC ", A(11, 6, +((n = (n = p.fund()) == null ? null : n.redemptionNav) !== null && n !== void 0 ? n : 0) * p.value() - +((n = (n = p.fund()) == null ? null : n.redemtionstaticwage) !== null && n !== void 0 ? n : 0)), ""),
        s(8),
        T(A(19, 8, (i = (i = p.fund()) == null ? null : i.redemptionNav) !== null && i !== void 0 ? i : 0)),
        s(7),
        T(A(26, 10, (c = (c = p.fund()) == null ? null : c.redemtionstaticwage) !== null && c !== void 0 ? c : 0))
    }
}
function Xr(t, o) {
    if (t & 1 && (a(0, "div", 14),
    l(1),
    r(),
    a(2, "div", 15)(3, "span", 16),
    l(4, "\u0645\u0628\u0644\u063A"),
    a(5, "b"),
    l(6),
    S(7, "number"),
    r(),
    l(8, " \u0631\u06CC\u0627\u0644\u0621\u0621 "),
    r(),
    a(9, "div")(10, "span", 17),
    l(11),
    r(),
    a(12, "small", 18),
    l(13, " \u062A\u0648\u0645\u0627\u0646 "),
    r()()(),
    a(14, "div", 19)(15, "div", 20),
    l(16),
    a(17, "span", 21),
    l(18),
    S(19, "number"),
    r()(),
    a(20, "div", 20),
    l(21),
    a(22, "span", 21),
    l(23),
    S(24, "number"),
    a(25, "span", 18),
    l(26, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()(),
    a(27, "div", 20),
    l(28, " \u06A9\u0627\u0631\u0645\u0632\u062F \u062B\u0627\u0628\u062A"),
    a(29, "span", 21),
    l(30),
    S(31, "number"),
    a(32, "span", 18),
    l(33, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()()()),
    t & 2) {
        let u, e, n, i = d(2);
        s(),
        F("\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631 \u0635\u0646\u062F\u0648\u0642 ", (u = i.fund()) == null ? null : u.name, ""),
        s(5),
        F(" ", A(7, 8, i.value()), ""),
        s(5),
        F(" ", i.valuePersian(), " "),
        s(5),
        F(" ", i.isNoneEtfSubscription() ? "\u062A\u0639\u062F\u0627\u062F \u0648\u0627\u062D\u062F" : "\u062A\u0639\u062F\u0627\u062F \u0648\u0627\u062D\u062F \u062D\u062F\u0648\u062F\u06CC", ""),
        s(2),
        F("", A(19, 10, i.fundsFacade.calculateCountOfAssetToBuyByPrice(i.fund(), i.value(), i.isNoneEtfSubscription())), " \u0648\u0627\u062D\u062F"),
        s(3),
        F(" ", i.isNoneEtfSubscription() ? "\u0642\u06CC\u0645\u062A \u0647\u0631 \u0648\u0627\u062D\u062F" : "\u0642\u06CC\u0645\u062A \u06A9\u0646\u0648\u0646\u06CC \u0635\u062F\u0648\u0631 \u0647\u0631 \u0648\u0627\u062D\u062F", " "),
        s(2),
        T(A(24, 12, (e = i.fund()) == null ? null : e.issuanceNav)),
        s(7),
        T(A(31, 14, (n = i.fund()) == null ? null : n.issuanceStaticWage))
    }
}
function es(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 9)(1, "div", 4)(2, "input", 22),
        h("click", function(n) {
            g(u);
            let i = d(2);
            return v(i.onPenaltyCheckBoxClick(n))
        }),
        r(),
        _(3, "label", 23),
        r(),
        a(4, "div", 7),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.openPenaltyConfirmModal())
        }),
        l(5, " \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u062C\u0631\u06CC\u0645\u0647 "),
        a(6, "a", 8),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.showPenaltyConfirmWithoutAction())
        }),
        l(7, "\u0627\u0628\u0637\u0627\u0644 \u0632\u0648\u062F\u0647\u0646\u06AF\u0627\u0645"),
        r(),
        l(8, " \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u0646\u0645\u0648\u062F\u0647 \u0648 \u0645\u06CC\u200C\u067E\u0630\u06CC\u0631\u0645 "),
        r()()
    }
}
function ts(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 10)(1, "div", 4)(2, "input", 24),
        h("click", function(n) {
            let i = g(u).$implicit
              , c = d(2);
            return v(c.onCustomCheckBoxClick(n, i))
        }),
        r(),
        _(3, "label", 25),
        r(),
        a(4, "div", 26),
        h("click", function() {
            let n = g(u).$implicit
              , i = d(2);
            return v(i.openCustomConfirmModal(n))
        }),
        r()()
    }
    if (t & 2) {
        let u = o.$implicit;
        s(2),
        He("id", u.id),
        He("formControlName", u.id),
        s(),
        He("for", u.id),
        s(),
        m("innerHTML", u.subject, Wt)
    }
}
function ns(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "form", 2),
        S(1, "async"),
        h("ngSubmit", function() {
            g(u);
            let n = d();
            return v(n.onConfirm())
        }),
        a(2, "div"),
        C(3, Zr, 29, 12)(4, Xr, 34, 16),
        a(5, "div", 3)(6, "div", 4)(7, "input", 5),
        h("click", function(n) {
            g(u);
            let i = d();
            return v(i.onMainCheckBoxClick(n))
        }),
        r(),
        _(8, "label", 6),
        r(),
        a(9, "div", 7),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.openMainConfirmModal())
        }),
        l(10, " \u062A\u0645\u0627\u0645\u06CC \u0628\u0646\u062F\u0647\u0627\u06CC "),
        a(11, "a", 8),
        h("click", function(n) {
            g(u);
            let i = d();
            return v(i.showMainConfirmWithoutAction(n))
        }),
        l(12, "\u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0648 \u0645\u0641\u0627\u062F \u0622\u0646"),
        r(),
        l(13, " \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u0646\u0645\u0648\u062F\u0647 \u0648 \u0645\u06CC\u200C\u067E\u0630\u06CC\u0631\u0645 "),
        r()(),
        C(14, es, 9, 0, "div", 9),
        ne(15, ts, 5, 4, "div", 10, Me),
        a(17, "div", 11)(18, "button", 12),
        l(19),
        r(),
        a(20, "button", 13),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.onReturnClick())
        }),
        l(21, "\u0628\u0627\u0632\u06AF\u0634\u062A"),
        r()()()()
    }
    if (t & 2) {
        let u, e = d();
        m("formGroup", e.confirmForm)("ngClass", Oe(12, Qr, !e.confirmModalIsVisible() && A(1, 10, e.fundsFacade.loading$), e.isMobile())),
        s(2),
        Y(e.isMobile() ? "p-0" : "p-3"),
        s(),
        f(e.fundSide() === e.FundSide.Sell ? 3 : -1),
        s(),
        f(e.fundSide() === e.FundSide.Buy ? 4 : -1),
        s(10),
        f(!((u = e.fund()) == null || u.penalties == null) && u.penalties.length || e.isNoneEtfSubscription() ? 14 : -1),
        s(),
        ie(e.fields),
        s(3),
        m("disabled", !e.formIsValid())("ngClass", Oe(15, Jr, e.fundSide() === e.FundSide.Buy, e.fundSide() === e.FundSide.Sell)),
        s(),
        F(" ", e.fundSide() === e.FundSide.Sell ? "\u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0628\u0637\u0627\u0644" : "\u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631", " ")
    }
}
function is(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "fund-confirm-modal", 27),
        h("closeBtnClick", function() {
            g(u);
            let n = d();
            return v(n.closeBtnClick())
        })("confirmModalClosedEmitter", function(n) {
            g(u);
            let i = d();
            return v(i.onConfirmModalClosed(n))
        }),
        r()
    }
    if (t & 2) {
        let u = d();
        m("isMobile", u.isMobile())("isNonEtf", u.isNoneEtfSubscription())("fund", u.fund())("agreementData", u.fundAgreementData())("fundAgreementType", u.fundAgreementType())
    }
}
var Qt = ( () => {
    let o = class o {
        constructor(e, n, i) {
            this.formBuilder = e,
            this.fundsFacade = n,
            this.overlayService = i,
            this.isMobile = w(!1),
            this.confirmValues = w(null),
            this.closeEmitter = J(),
            this.returnEmitter = J(),
            this.confirmModalIsVisible = E(!1),
            this.fundAgreementType = E(null),
            this.fundAgreementData = E(null),
            this.fund = ee( () => this.confirmValues()?.fund),
            this.fundSide = ee( () => this.confirmValues()?.fundSide),
            this.isNoneEtfSubscription = ee( () => this.confirmValues()?.isNoneEtfSubscription),
            this.value = ee( () => this.confirmValues()?.value),
            this.iban = ee( () => this.confirmValues()?.iban),
            this.valuePersian = ee( () => {
                if (this.fundSide() === ae.Buy)
                    return this.value() > 10 ? Xt(Math.floor(this.value() / 10)) : ""
            }
            ),
            this.fund$ = oe(this.fund),
            this.fields = [],
            this.subs = [],
            this.confirmForm = this.formBuilder.group({
                mainConfirm: [null, [R.requiredTrue]],
                penaltyConfirm: [null]
            }),
            this.processFund = () => {
                this.fund()?.agreementData?.forEach(c => {
                    let p = this.createAgreementItem(c);
                    this.fields.push(p),
                    this.confirmForm.addControl(p.id, new Ne(null,[R.requiredTrue]))
                }
                )
            }
            ,
            M(this.fund$.pipe(Ve(Boolean), V(this.processFund)))
        }
        createAgreementItem(e) {
            return {
                id: e.id,
                subject: e.subject,
                title: e.title,
                description: e.description
            }
        }
        ngOnInit() {
            this.fund()?.penalties?.length && (this.confirmForm.controls.penaltyConfirm.setValidators([R.requiredTrue]),
            this.confirmForm.controls.penaltyConfirm.updateValueAndValidity())
        }
        ngOnDestroy() {
            this.subs.forEach(e => e.unsubscribe())
        }
        get FundSide() {
            return ae
        }
        onConfirm() {
            this.fundSide() === ae.Buy ? this.buyFund() : this.sellFund()
        }
        onReturnClick() {
            this.isMobile() ? this.updateMobileOverlay(this.fundSide(), {
                fund: this.fund(),
                value: this.value(),
                iban: this.iban(),
                isNoneEtfSubscription: this.isNoneEtfSubscription()
            }) : this.updateDesktopOverlay(this.fundSide(), {
                fund: this.fund(),
                value: this.value(),
                iban: this.iban(),
                isNoneEtfSubscription: this.isNoneEtfSubscription()
            })
        }
        updateMobileOverlay(e, n) {
            let i = e === ae.Buy ? gn.FundBuy : gn.FundSell;
            this.overlayService.showOverlay({
                component: this.getComponent(i),
                input: [{
                    inputName: "isMobile",
                    inputValue: !0
                }, {
                    inputName: this.getInputName(i),
                    inputValue: n
                }],
                option: {
                    componentName: this.getComponentName(i)
                }
            })
        }
        getComponent(e) {
            return e === gn.FundBuy ? Dt : Wn
        }
        getComponentName(e) {
            return e === gn.FundBuy ? "FundBuyComponent" : "FundSellComponent"
        }
        getInputName(e) {
            return e === gn.FundBuy ? "buyValues" : "sellValues"
        }
        updateDesktopOverlay(e, n) {
            let i = e === ae.Buy ? _e.Buy : _e.Sell;
            this.fundsFacade.updateFundPopup(i, n)
        }
        showMainConfirmWithoutAction(e) {
            this.isNoneEtfSubscription() && (e.stopPropagation(),
            e.preventDefault(),
            this.fundAgreementType.set(je.Main),
            this.confirmModalIsVisible.set(!0),
            this.overlayService.showOverlay({
                component: Ki,
                input: [{
                    inputName: "isMobile",
                    inputValue: !0
                }, {
                    inputName: "confirmValues",
                    inputValue: {
                        isNonEtf: this.isNoneEtfSubscription(),
                        fund: this.fund(),
                        agreementData: this.fundAgreementData(),
                        fundAgreementType: this.fundAgreementType()
                    }
                }],
                option: {
                    componentName: "FundConfirmModalComponent"
                }
            }))
        }
        showPenaltyConfirmWithoutAction() {
            this.isNoneEtfSubscription() && (this.fundAgreementType.set(je.SellPenalty),
            this.confirmModalIsVisible.set(!0))
        }
        openMainConfirmModal() {
            if (this.confirmForm.get("mainConfirm")?.disabled)
                return;
            if (this.confirmForm.value.mainConfirm) {
                this.confirmForm.patchValue({
                    mainConfirm: !1
                });
                return
            }
            if (this.fundAgreementType.set(je.Main),
            this.fundAgreementData.set(null),
            this.isNoneEtfSubscription()) {
                this.agreement({
                    fundCode: this.fund()?.code,
                    agreementType: this.fundAgreementType()
                });
                return
            }
            this.confirmModalIsVisible.set(!0)
        }
        openPenaltyConfirmModal() {
            if (this.confirmModalIsVisible.set(!0),
            this.confirmForm.get("penaltyConfirm")?.disabled)
                return;
            if (this.confirmForm.value.penaltyConfirm) {
                this.confirmForm.patchValue({
                    penaltyConfirm: !1
                });
                return
            }
            if (this.fundAgreementType.set(je.SellPenalty),
            this.fundAgreementData.set(null),
            this.isNoneEtfSubscription()) {
                this.agreement({
                    fundCode: this.fund().code,
                    agreementType: this.fundAgreementType()
                });
                return
            }
            this.confirmModalIsVisible.set(!0)
        }
        openCustomConfirmModal(e) {
            if (this.confirmModalIsVisible.set(!0),
            this.confirmForm.get(e.id)?.disabled)
                return;
            if (this.confirmForm.value[e.id]) {
                this.confirmForm.patchValue({
                    [e.id]: !1
                });
                return
            }
            if (this.fundAgreementType.set(je.Custom),
            this.fundAgreementData.set({
                id: e.id,
                subject: e.subject,
                title: e.title,
                description: e.description
            }),
            this.isNoneEtfSubscription()) {
                this.agreement({
                    fundCode: this.fund().code,
                    agreementType: this.fundAgreementType(),
                    agreementId: this.fundAgreementData().id
                });
                return
            }
        }
        agreement(e) {
            this.fundsFacade.agreement(e).pipe(me( () => this.onConfirmModalClosed(!0))).subscribe()
        }
        onConfirmModalClosed(e) {
            this.fundAgreementType() === je.Main ? (this.confirmForm.patchValue({
                mainConfirm: e
            }),
            e && this.confirmForm.get("mainConfirm")?.disable()) : this.fundAgreementType() === je.SellPenalty ? (this.confirmForm.patchValue({
                penaltyConfirm: e
            }),
            e && this.confirmForm.get("penaltyConfirm")?.disable()) : this.fundAgreementType() === je.Custom && (this.confirmForm.patchValue({
                [this.fundAgreementData().id]: e
            }),
            e && this.confirmForm.get(this.fundAgreementData().id)?.disable()),
            this.confirmModalIsVisible.set(!1)
        }
        onMainCheckBoxClick(e) {
            e.stopPropagation(),
            e.preventDefault(),
            e.target.checked && (this.fundAgreementType.set(je.Main),
            this.agreement({
                fundCode: this.fund().code,
                agreementType: je.Main
            }))
        }
        onPenaltyCheckBoxClick(e) {
            e.stopPropagation(),
            e.preventDefault(),
            e.target.checked && (this.fundAgreementType.set(je.SellPenalty),
            this.agreement({
                fundCode: this.fund().code,
                agreementType: je.SellPenalty
            }))
        }
        onCustomCheckBoxClick(e, n) {
            e.stopPropagation(),
            e.preventDefault(),
            e.target.checked && (this.fundAgreementType.set(je.Custom),
            this.fundAgreementData.set({
                id: n.id,
                subject: n.subject,
                title: n.title,
                description: n.description
            }),
            this.agreement({
                fundCode: this.fund().code,
                agreementType: je.Custom,
                agreementId: n.id
            }))
        }
        sellFund() {
            let e = {
                fundCode: this.fund().code,
                count: this.value(),
                iban: this.iban()
            }
              , n = this.fundsFacade.redemptionIssuance(e).subscribe( () => {
                this.isMobile() ? this.overlayService.hideOverlay() : this.fundsFacade.hideOverlay()
            }
            );
            this.subs.push(n)
        }
        buyFund() {
            let e = {
                fundCode: this.fund().code,
                amount: this.value(),
                effectedDate: new Date
            }
              , n = this.fundsFacade.createIssuance(e).pipe(V( () => {
                this.loadFundData(),
                this.isMobile() ? this.overlayService.hideOverlay() : this.fundsFacade.hideOverlay()
            }
            )).subscribe();
            this.subs.push(n)
        }
        loadFundData() {
            let e = this.fundsFacade.loadFundData().subscribe();
            this.subs.push(e)
        }
        formIsValid() {
            let e = this.confirmForm.get("mainConfirm").value;
            this.fund()?.penalties?.length && (e = e && this.confirmForm.get("penaltyConfirm").value);
            let n = this.fields.reduce( (i, c) => i && this.confirmForm.get(c.id).value, !0);
            return e && n
        }
        closeBtnClick() {
            this.confirmModalIsVisible.set(!1)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(Te),U(ue),U(ye))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["fund-operation-confirm"]],
        hostVars: 2,
        hostBindings: function(n, i) {
            n & 2 && Y("d-flex flex-column h-100 overflow-hidden")
        },
        inputs: {
            isMobile: [1, "isMobile"],
            confirmValues: [1, "confirmValues"]
        },
        outputs: {
            closeEmitter: "closeEmitter",
            returnEmitter: "returnEmitter"
        },
        decls: 2,
        vars: 2,
        consts: [["data-cy", "operation-confirm-form", 3, "formGroup", "ngClass"], [1, "d-flex", "flex-column", "h-100", "overflow-hidden", 3, "isMobile", "isNonEtf", "fund", "agreementData", "fundAgreementType"], ["data-cy", "operation-confirm-form", 3, "ngSubmit", "formGroup", "ngClass"], ["id", "test1", 1, "d-flex", "my-2"], [1, "form-check", "form-check-reverse"], ["data-cy", "fund-operation-mainConfirm", "type", "checkbox", "id", "mainConfirm", "formControlName", "mainConfirm", 1, "form-check-input", 3, "click"], ["for", "mainConfirm", 1, "form-check-label", "p-1", "d-flex", "justify-content-center", "align-items-center"], [3, "click"], [1, "cup", "px-1", 3, "click"], ["id", "test2", 1, "d-flex"], [1, "d-flex", "my-2"], [1, "d-flex", "mt-3"], ["data-cy", "btn-fund-operation-confirm", 1, "btn", "flex-grow-1", "me-2", 3, "disabled", "ngClass"], ["type", "button", 1, "btn", "btn-outline-secondary", "px-4", 3, "click"], [1, "h6", "text-center", "mb-4"], [1, "text-center"], [1, "fw-bold", "fs-6"], [1, "text-muted"], [1, "text-muted", "ms-1"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "bg-transparent"], [1, "text-base"], ["data-cy", "fund-operation-penaltyConfirm", "type", "checkbox", "id", "penaltyConfirm", "formControlName", "penaltyConfirm", 1, "form-check-input", 3, "click"], ["for", "penaltyConfirm", 1, "form-check-label", "p-1", "d-flex", "justify-content-center", "align-items-center"], ["data-cy", "fund-operation-customConfirm", "type", "checkbox", 1, "form-check-input", 3, "click", "id", "formControlName"], [1, "form-check-label", "p-1", "d-flex", "justify-content-center", "align-items-center", 3, "for"], [3, "click", "innerHTML"], [1, "d-flex", "flex-column", "h-100", "overflow-hidden", 3, "closeBtnClick", "confirmModalClosedEmitter", "isMobile", "isNonEtf", "fund", "agreementData", "fundAgreementType"]],
        template: function(n, i) {
            n & 1 && C(0, ns, 22, 18, "form", 0)(1, is, 1, 5, "fund-confirm-modal", 1),
            n & 2 && (f(i.confirmModalIsVisible() ? -1 : 0),
            s(),
            f(i.confirmModalIsVisible() ? 1 : -1))
        },
        dependencies: [z, se, et, Se, dn, Be, xe, he, Fe, Xe, Ki, xt],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var os = (t, o) => o.value
  , us = t => ({
    "px-3 py-3": t
})
  , as = t => ({
    selected: t
})
  , rs = t => ({
    "input-highlight": t
})
  , ss = (t, o, u, e) => ({
    "btn-outline-warning": t,
    "btn-success": o,
    "btn-outline-secondary opacity-6": u,
    "pe-none": e
});
function ls(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "svg-icon", 25),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.closeForm())
        }),
        r()
    }
    if (t & 2) {
        let u = d();
        m("iconName", u.icons.Close)
    }
}
function cs(t, o) {
    if (t & 1 && (a(0, "span", 17),
    l(1),
    a(2, "small"),
    l(3, "\u062A\u0648\u0645\u0627\u0646"),
    r()()),
    t & 2) {
        let u = d();
        s(),
        F(" ", u.buyFormInstantValuePersian, " ")
    }
}
function ds(t, o) {
    t & 1 && _(0, "span", 18)
}
function ms(t, o) {
    if (t & 1 && (a(0, "p", 19),
    _(1, "svg-icon", 26),
    l(2),
    r()),
    t & 2) {
        let u, e = d();
        s(),
        m("iconName", e.icons.InfoBox),
        s(),
        $t(" \u0641\u0631\u0622\u06CC\u0646\u062F \u0635\u062F\u0648\u0631 \u0648\u0627\u062D\u062F\u200C\u0647\u0627\u06CC \u0635\u0646\u062F\u0648\u0642 \u0628\u06CC\u0646 ", (u = e.fund()) == null || u.limitDay == null ? null : u.limitDay.minIssuance, " \u062A\u0627 ", (u = e.fund()) == null || u.limitDay == null ? null : u.limitDay.maxIssuance, " \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC \u0632\u0645\u0627\u0646 \u062E\u0648\u0627\u0647\u062F \u0628\u0631\u062F. ")
    }
}
function ps(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 27),
        h("click", function() {
            let n = g(u).$implicit
              , i = d();
            return v(i.onSelectSuggestionHandler(n.value))
        }),
        a(1, "span", 28)(2, "span", 29),
        l(3),
        r(),
        a(4, "div", 30)(5, "span"),
        l(6),
        r(),
        a(7, "span", 31),
        l(8, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
        r()()()()
    }
    if (t & 2) {
        let u = o.$implicit;
        s(3),
        T(u.label),
        s(3),
        T(u.unit + " ")
    }
}
var Dt = ( () => {
    let o = class o {
        constructor(e, n, i, c, p, b) {
            this.fb = e,
            this.fundsFacade = n,
            this.router = i,
            this.moneyService = c,
            this.sidePanelServiceService = p,
            this.overlayService = b,
            this.isMobile = w(!1),
            this.buyValues = w.required(),
            this.moneyInfoSignal = M(this.moneyService.moneyInfo),
            this.fund = ee( () => this.buyValues()?.fund),
            this.isNoneEtfSubscription = ee( () => this.buyValues()?.isNoneEtfSubscription),
            this.valuePurchasingPower = ee( () => this.moneyInfoSignal().buyPower - this.moneyInfoSignal().credit - this.moneyInfoSignal().avandCredit),
            this.FundMoneySuggestion = ju,
            this.icons = O,
            this.subs = [],
            this.currentInputSelectedName = "",
            this.buyFormInstantValuePersian = "",
            this.buyForm = this.fb.group({
                value: new Ne(null,[R.required, this.buyAmountMinValueValidator.bind(this)])
            }),
            Zt( () => {
                this.buyValues() && this.onSelectValue(this.buyValues()?.value)
            }
            )
        }
        ngOnInit() {
            this.onBuyTextBoxValueChange(),
            this.fundTotalIssuancePrice = this.fundsFacade.roundingUpward(this.fund(), this.isNoneEtfSubscription())
        }
        onBuyTextBoxValueChange() {
            let e = this.buyForm.get("value").valueChanges.subscribe(n => {
                if (n == null)
                    return;
                let i = +n.toString().replace(/,/g, "");
                i < this.fundsFacade.calculateFundTotalIssuancePrice(this.fund(), this.isNoneEtfSubscription()) && this.buyForm.controls.value.setErrors({
                    incorrect: !0
                }),
                this.buyFormInstantValuePersian = i > 10 ? Xt(Math.floor(i / 10)) : ""
            }
            );
            this.subs.push(e)
        }
        onValueTap(e) {
            this.currentInputSelectedName = e
        }
        onBlur() {
            this.currentInputSelectedName = ""
        }
        get buyFormValidatorText() {
            return this.buyForm?.get("value")?.errors?.minValidator ? "\u0645\u0628\u0644\u063A \u06A9\u0645\u062A\u0631 \u0627\u0632 \u062D\u062F \u0645\u062C\u0627\u0632 \u0627\u0633\u062A" : this.buyForm?.get("value")?.value === "" ? "\u0645\u0628\u0644\u063A \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F" : ""
        }
        onSelectValue(e) {
            this.buyForm.get("value").setValue(e)
        }
        onIncreaseClick() {
            this.isMobile() ? this.router.navigateByUrl(`/menu/${Dn.RECEIPT_ROUTE}/0`) : this.sidePanelServiceService.openSidePanelFromRoute({
                sidePanel: cn.MoneyReceipt,
                value: "0"
            })
        }
        onBuyBtnClicked() {
            if (this.buyForm.valid)
                if (this.buyForm.value.value > this.valuePurchasingPower()) {
                    let e = this.buyForm.value.value - this.valuePurchasingPower();
                    this.isMobile() ? this.overlayService.showOverlay({
                        component: Fn,
                        input: [{
                            inputName: "isMobile",
                            inputValue: !0
                        }, {
                            inputName: "IncreaseValues",
                            inputValue: {
                                fund: this.fund(),
                                value: e,
                                originValue: this.buyForm.value.value,
                                isNoneEtfSubscription: this.isNoneEtfSubscription()
                            }
                        }],
                        option: {
                            componentName: "FundIncreaseComponent"
                        }
                    }) : this.showPopup(_e.Increase, {
                        fund: this.fund(),
                        value: e,
                        originValue: this.buyForm.value.value,
                        isNoneEtfSubscription: this.isNoneEtfSubscription()
                    })
                } else
                    this.isMobile() ? this.overlayService.showOverlay({
                        component: Qt,
                        input: [{
                            inputName: "isMobile",
                            inputValue: !0
                        }, {
                            inputName: "confirmValues",
                            inputValue: {
                                fund: this.fund(),
                                fundSide: ae.Buy,
                                value: this.buyForm.value.value,
                                isNoneEtfSubscription: this.isNoneEtfSubscription()
                            }
                        }],
                        option: {
                            componentName: "FundOperationConfirmComponent"
                        }
                    }) : this.showPopup(_e.Confirm, {
                        fund: this.fund(),
                        fundSide: ae.Buy,
                        value: this.buyForm.value.value,
                        isNoneEtfSubscription: this.isNoneEtfSubscription()
                    })
        }
        closeForm() {
            this.isMobile() ? this.overlayService.hideOverlay() : this.fundsFacade.hideOverlay(),
            this.buyForm.patchValue({
                value: null
            })
        }
        showPopup(e, n) {
            e === _e.None ? this.subs.push(rn(300).subscribe( () => this.fundsFacade.updateFundPopup(e))) : this.fundsFacade.updateFundPopup(e, n)
        }
        buyAmountMinValueValidator(e) {
            if (e.value !== null) {
                let n = this.fundsFacade.calculateFundTotalIssuancePrice(this.fund(), this.isNoneEtfSubscription());
                if (e.value < n)
                    return {
                        minValidator: !0
                    }
            }
            return null
        }
        onSelectSuggestionHandler(e) {
            this.buyForm.get("value").setValue(e.toString())
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(Te),U(ue),U(St),U(mt),U(pn),U(ye))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["fund-buy"]],
        inputs: {
            isMobile: [1, "isMobile"],
            buyValues: [1, "buyValues"]
        },
        decls: 48,
        vars: 33,
        consts: [[1, "pt-3", 3, "ngSubmit", "formGroup", "ngClass"], ["width", "24", "height", "24", 1, "p-3", "position-absolute", "cup", 2, "left", "0", "top", "0", 3, "iconName"], [1, "d-flex", "align-items-center", "justify-content-around", "text-body", "text-opacity-50", "mb-4"], [1, "h6", "mb-4", "text-body"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-global", "fs-7"], [1, "text-muted", "ms-1"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], ["title", "\u0627\u0641\u0632\u0627\u06CC\u0634 \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F", "width", "24", "height", "24", 1, "text-success", "pe-2", "cup", 3, "click", "iconName"], ["data-cy", "accountBalance", 1, "text-global", "fs-7", 3, "click"], [1, "text-secondary"], [1, "form-control", "form-control-lg", "d-flex", "align-items-center", "input-index", "h-auto", 3, "ngClass"], [1, "text-secondary", "position-absolute", 2, "pointer-events", "none"], ["id", "value", 1, "py-1", "ps-3", "flex-grow-1", 3, "tap", "blurEvent", "form", "ngClass"], [1, "text-secondary", "ps-1", "d-flex", "justify-content-center", "align-items-center"], [1, "form-text", "text-secondary", "small", "mb-1"], ["data-cy", "minimum-issue-price", 1, "cup", "fw-bold", "px-2", "py-1", "text-decoration", 3, "click"], [1, "fw-bold", "text-body", "d-block"], [1, "fw-bold", "text-body"], [1, "mb-0", "mt-1"], [1, "mb-3", "mt-2"], [1, "mb-1", "text-secondary", "text-nowrap", "mb-1"], [1, "d-flex", "gap-1", "flex-wrap"], [1, "bg-principal-2x", "bg-principal-hover", "p-1", "rounded", "cup", "text-nowrap"], ["data-cy", "btn-fund-buy-continue", "type", "submit", 1, "btn", "flex-grow-1", "mt-1", "w-100", 3, "ngClass"], ["width", "24", "height", "24", 1, "p-3", "position-absolute", "cup", 2, "left", "0", "top", "0", 3, "click", "iconName"], ["width", "20", "height", "20", 1, "", 3, "iconName"], [1, "bg-principal-2x", "bg-principal-hover", "p-1", "rounded", "cup", "text-nowrap", 3, "click"], [1, "text-body", "flex-grow-1", "text-end", "d-flex", "gap-1", "px-1"], [1, "fw-bold"], [1, "text-secondary", "small"], [1, "position-relative", 2, "top", "2px"]],
        template: function(n, i) {
            if (n & 1 && (a(0, "form", 0),
            h("ngSubmit", function() {
                return i.onBuyBtnClicked()
            }),
            C(1, ls, 1, 1, "svg-icon", 1),
            a(2, "div", 2)(3, "div", 3),
            l(4),
            r()(),
            a(5, "div", 4)(6, "div"),
            l(7, "\u0642\u06CC\u0645\u062A \u06A9\u0646\u0648\u0646\u06CC \u0635\u062F\u0648\u0631 \u0647\u0631 \u0648\u0627\u062D\u062F"),
            r(),
            a(8, "div")(9, "span", 5),
            l(10),
            S(11, "number"),
            r(),
            a(12, "span", 6),
            l(13, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
            r()()(),
            a(14, "div", 7)(15, "div"),
            l(16, "\u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u0635\u0646\u062F\u0648\u0642"),
            r(),
            a(17, "div")(18, "svg-icon", 8),
            h("click", function() {
                return i.onIncreaseClick()
            }),
            r(),
            a(19, "span", 9),
            h("click", function() {
                return i.onSelectValue(i.valuePurchasingPower())
            }),
            l(20),
            S(21, "number"),
            r(),
            a(22, "span", 10),
            l(23, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
            r()()(),
            a(24, "div", 11)(25, "span", 12),
            l(26, "\u0645\u0628\u0644\u063A"),
            r(),
            a(27, "custom-number-box", 13),
            h("tap", function() {
                return i.onValueTap("buyValue")
            })("blurEvent", function() {
                return i.onBlur()
            }),
            r(),
            a(28, "span", 14),
            l(29, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
            r()(),
            a(30, "p", 15),
            l(31, " \u062D\u062F\u0627\u0642\u0644 \u0645\u0628\u0644\u063A \u0635\u062F\u0648\u0631 "),
            a(32, "span", 16),
            h("click", function() {
                return i.onSelectValue(i.fundsFacade.roundingUpward(i.fund(), i.isNoneEtfSubscription()))
            }),
            l(33),
            S(34, "number"),
            r(),
            l(35, " \u0631\u06CC\u0627\u0644\u0621\u0621 \u0627\u0633\u062A "),
            r(),
            a(36, "div"),
            C(37, cs, 4, 1, "span", 17)(38, ds, 1, 0, "span", 18),
            r(),
            C(39, ms, 3, 3, "p", 19),
            a(40, "div", 20)(41, "div", 21),
            l(42, "\u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u067E\u0631 \u062A\u06A9\u0631\u0627\u0631:"),
            r(),
            a(43, "div", 22),
            ne(44, ps, 9, 2, "div", 23, os),
            r()(),
            a(46, "button", 24),
            l(47),
            r()()),
            n & 2) {
                let c, p;
                m("formGroup", i.buyForm)("ngClass", q(22, us, i.isMobile())),
                s(),
                f(i.isMobile() ? -1 : 1),
                s(3),
                F("\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631 \u0635\u0646\u062F\u0648\u0642 ", (c = i.fund()) == null ? null : c.name, ""),
                s(6),
                T(A(11, 16, (p = i.fund()) == null ? null : p.issuanceNav)),
                s(8),
                m("iconName", i.icons.PlusBox),
                s(2),
                T(A(21, 18, i.valuePurchasingPower())),
                s(4),
                m("ngClass", q(24, as, i.currentInputSelectedName === "buyValue")),
                s(3),
                m("form", i.buyForm)("ngClass", q(26, rs, i.currentInputSelectedName === "buyValue")),
                s(6),
                T(A(34, 20, i.fundTotalIssuancePrice)),
                s(4),
                f(i.buyFormInstantValuePersian ? 37 : -1),
                s(),
                f(i.buyFormInstantValuePersian ? -1 : 38),
                s(),
                f(i.isNoneEtfSubscription() ? -1 : 39),
                s(5),
                ie(i.FundMoneySuggestion),
                s(2),
                m("ngClass", Kn(28, ss, i.buyForm.invalid && (i.buyForm.controls.value.dirty || i.buyForm.controls.value.touched), i.buyForm.valid, i.buyForm.invalid && !(i.buyForm.controls.value.dirty || i.buyForm.controls.value.touched), i.buyForm.invalid)),
                s(),
                F(" ", i.buyForm.invalid && i.buyFormValidatorText && (i.buyForm.controls.value.dirty || i.buyForm.controls.value.touched) ? i.buyFormValidatorText : "\u062A\u0627\u06CC\u06CC\u062F \u0648 \u0627\u062F\u0627\u0645\u0647", " ")
            }
        },
        dependencies: [z, se, et, Se, xe, he, Fe, At, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
function fs(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "svg-icon", 7),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.onClose())
        }),
        r()
    }
    if (t & 2) {
        let u = d();
        m("iconName", u.icons.Close)
    }
}
var Yi = ( () => {
    let o = class o {
        constructor(e, n, i) {
            this.fundsFacade = e,
            this.accountService = n,
            this.notificationService = i,
            this.consultKey = "FundConsult_" + this.accountService?.userAccountInfo?.value?.customerIsin,
            this.icons = O,
            this.isMobile = w(!1),
            this.loading = E(!1),
            this.closeEvent = J()
        }
        onRequest() {
            let e = localStorage.getItem(this.consultKey);
            if (e && e === new Date().toDateString()) {
                this.notificationService.alert("\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062B\u0628\u062A \u0634\u062F", G.success);
                return
            }
            this.loading.set(!0),
            this.fundsFacade.consultationRequest().pipe(me( () => this.loading.set(!1))).subscribe( () => {
                localStorage.setItem(this.consultKey, new Date().toDateString())
            }
            )
        }
        onClose() {
            this.closeEvent.emit()
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(ue),U(at),U(Ie))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["fund-consult"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        outputs: {
            closeEvent: "closeEvent"
        },
        decls: 14,
        vars: 4,
        consts: [[1, "bg-principal", "bg-principal-4x-dark", "rounded-top", "p-3", "shadow-lg"], ["data-cy", "back_consult", "width", "24", "height", "24", 1, "p-3", "position-absolute", "cup", "end-0", "top-0", 3, "iconName"], [1, "fw-bold", "text-center", "h6", "mb-4"], [1, "d-flex"], [1, "btn", "btn-global", "flex-grow-1", "me-2", "d-flex", "align-items-center", "justify-content-center", 3, "click"], ["width", "18", "height", "18", 1, "spin", "me-1", 3, "iconName"], ["data-cy", "back_consult", 1, "btn", "btn-outline-secondary", "px-4", 3, "click"], ["data-cy", "back_consult", "width", "24", "height", "24", 1, "p-3", "position-absolute", "cup", "end-0", "top-0", 3, "click", "iconName"]],
        template: function(n, i) {
            n & 1 && (a(0, "div", 0),
            C(1, fs, 1, 1, "svg-icon", 1),
            a(2, "div", 2),
            l(3, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0645\u0634\u0627\u0648\u0631\u0647"),
            r(),
            a(4, "p"),
            l(5, "\u062C\u0647\u062A \u062F\u0631\u06CC\u0627\u0641\u062A \u0645\u0634\u0627\u0648\u0631\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u0648 \u06A9\u0633\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 \u0645\u0648\u0631\u062F \u0635\u0646\u062F\u0648\u0642 \u0647\u0627 \u0645\u06CC \u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0627 \u0645\u0627 \u062F\u0631 \u062A\u0645\u0627\u0633 \u0628\u0627\u0634\u06CC\u062F"),
            r(),
            a(6, "p"),
            l(7, "\u0645\u0634\u0627\u0648\u0631\u0627\u0646 \u0645\u0641\u06CC\u062F \u062F\u0631 \u0627\u0648\u0644\u06CC\u0646 \u0641\u0631\u0635\u062A \u0637\u06CC \u062F\u0648 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC \u0622\u06CC\u0646\u062F\u0647 \u0627\u0632 \u0633\u0627\u0639\u062A 9 \u0627\u0644\u06CC 18 \u0628\u0627 \u0634\u0645\u0627 \u062A\u0645\u0627\u0633 \u062E\u0648\u0627\u0647\u0646\u062F \u06AF\u0631\u0641\u062A"),
            r(),
            a(8, "div", 3)(9, "button", 4),
            h("click", function() {
                return i.onRequest()
            }),
            _(10, "svg-icon", 5),
            l(11, " \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0645\u0634\u0627\u0648\u0631\u0647 "),
            r(),
            a(12, "button", 6),
            h("click", function() {
                return i.onClose()
            }),
            l(13, "\u0628\u0627\u0632\u06AF\u0634\u062A"),
            r()()()),
            n & 2 && (s(),
            f(i.isMobile() ? -1 : 1),
            s(9),
            Y(i.loading() ? "d-inline-block" : "d-none"),
            m("iconName", i.icons.Loading))
        },
        dependencies: [B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var Cs = t => ({
    loading: t
})
  , hs = t => ({
    selected: t
})
  , ys = t => ({
    "input-highlight": t
})
  , _s = (t, o) => ({
    "fund-overlay--show": t,
    "": o
});
function gs(t, o) {
    if (t & 1 && l(0),
    t & 2) {
        let u = d();
        F(" ", u.fund().description, " ")
    }
}
function vs(t, o) {
    if (t & 1 && (a(0, "div", 4)(1, "span", 38),
    l(2, "\u0627\u0631\u0632\u0634 \u06A9\u0646\u0648\u0646\u06CC"),
    r(),
    a(3, "div", 39),
    l(4),
    S(5, "async"),
    S(6, "number"),
    a(7, "span", 38),
    l(8, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()()),
    t & 2) {
        let u = d(2);
        s(4),
        F(" ", A(6, 3, A(5, 1, u.currentAssetValue$)), " ")
    }
}
function bs(t, o) {
    if (t & 1 && (a(0, "li", 21),
    l(1),
    S(2, "number"),
    a(3, "span", 40),
    l(4),
    S(5, "number"),
    a(6, "span", 41),
    l(7, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()()),
    t & 2) {
        let u, e, n = d(3);
        s(),
        F(" \u0635\u062F\u0648\u0631 \u0634\u062E\u0635\u06CC (", A(2, 2, (u = n.currentAsset()) == null ? null : u.personalShareAmount), " \u0648\u0627\u062D\u062F)"),
        s(3),
        T(A(5, 4, ((e = n.currentAsset()) == null ? null : e.personalShareAmount) * ((e = n.currentAsset()) == null ? null : e.nav)))
    }
}
function xs(t, o) {
    if (t & 1 && (a(0, "div", 5)(1, "div", 20)(2, "li", 21),
    l(3),
    S(4, "number"),
    a(5, "span", 40),
    l(6),
    S(7, "number"),
    a(8, "span", 41),
    l(9, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()(),
    a(10, "li", 21),
    l(11),
    S(12, "number"),
    a(13, "span", 40),
    l(14),
    S(15, "number"),
    a(16, "span", 41),
    l(17, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()(),
    C(18, bs, 8, 6, "li", 21),
    r()()),
    t & 2) {
        let u, e, n, i, c, p = d(2);
        s(3),
        F(" \u0635\u062F\u0648\u0631 \u062A\u0648\u0633\u0637 \u06A9\u0627\u0631\u0641\u0631\u0645\u0627 (", A(4, 5, (u = p.currentAsset()) == null ? null : u.employerShareAmount), " \u0648\u0627\u062D\u062F)"),
        s(3),
        T(A(7, 7, ((e = p.currentAsset()) == null ? null : e.employerShareAmount) * ((e = p.currentAsset()) == null ? null : e.nav))),
        s(5),
        F(" \u0635\u062F\u0648\u0631 \u062A\u0648\u0633\u0637 \u06A9\u0627\u0631\u0645\u0646\u062F (", A(12, 9, (n = p.currentAsset()) == null ? null : n.employeeShareAmount), " \u0648\u0627\u062D\u062F)"),
        s(3),
        T(A(15, 11, ((i = p.currentAsset()) == null ? null : i.employeeShareAmount) * ((i = p.currentAsset()) == null ? null : i.nav))),
        s(4),
        f((c = p.currentAsset()) != null && c.personalShareAmount ? 18 : -1)
    }
}
function Ss(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "select", 42),
        h("change", function(n) {
            g(u);
            let i = d(2);
            return v(i.onOptionItemChartChange(n.currentTarget.value))
        }),
        a(1, "option", 32),
        l(2, "\u062A\u0639\u062F\u06CC\u0644 \u0634\u062F\u0647"),
        r(),
        a(3, "option", 32),
        l(4, "\u062A\u0639\u062F\u06CC\u0644 \u0646\u0634\u062F\u0647"),
        r()()
    }
    t & 2 && (s(),
    m("value", 0),
    s(2),
    m("value", 1))
}
function Fs(t, o) {
    if (t & 1 && (a(0, "option", 13),
    l(1),
    r()),
    t & 2) {
        let u = o.$implicit
          , e = d(2);
        m("value", u.name)("selected", u.name === e.optionDefaultName()),
        s(),
        F(" ", u.name, " ")
    }
}
function Ts(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 43),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.onTransaction())
        }),
        l(1),
        _(2, "svg-icon", 44),
        r()
    }
    if (t & 2) {
        let u = d(2);
        s(),
        F(" \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u0635\u0646\u062F\u0648\u0642 ", u.fund().name, " "),
        s(),
        m("iconName", u.icons.ChevronLeft)
    }
}
function Is(t, o) {
    if (t & 1 && (a(0, "div", 46)(1, "div", 47),
    _(2, "svg-icon", 48),
    a(3, "div"),
    l(4),
    r()()()),
    t & 2) {
        let u = o.$implicit
          , e = d(3);
        s(2),
        m("iconName", e.icons.CircleMedium),
        s(2),
        T(u)
    }
}
function As(t, o) {
    if (t & 1 && (a(0, "div", 18),
    l(1, " \u0648\u06CC\u0698\u06AF\u06CC \u0647\u0627\u06CC \u0635\u0646\u062F\u0648\u0642 "),
    a(2, "span"),
    l(3),
    r()(),
    a(4, "div", 19)(5, "div", 45),
    ne(6, Is, 5, 2, "div", 46, Me),
    r()()),
    t & 2) {
        let u = d(2);
        s(3),
        T(u.fund().name),
        s(3),
        ie(u.fund().details)
    }
}
function ws(t, o) {
    if (t & 1 && (a(0, "li", 21),
    l(1, " \u0642\u06CC\u0645\u062A \u06A9\u0646\u0648\u0646\u06CC \u0635\u062F\u0648\u0631 \u0647\u0631 \u0648\u0627\u062D\u062F"),
    a(2, "span", 40),
    l(3),
    S(4, "number"),
    a(5, "span", 41),
    l(6, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()()),
    t & 2) {
        let u = d(2);
        s(3),
        T(ze(4, 1, u.fund().issuanceNav, "1.0-0"))
    }
}
function ks(t, o) {
    if (t & 1 && (a(0, "li", 21),
    l(1, " \u0642\u06CC\u0645\u062A \u06A9\u0646\u0648\u0646\u06CC \u0627\u0628\u0637\u0627\u0644 \u0647\u0631 \u0648\u0627\u062D\u062F"),
    a(2, "span", 40),
    l(3),
    S(4, "number"),
    a(5, "span", 41),
    l(6, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()()),
    t & 2) {
        let u = d(2);
        s(3),
        T(ze(4, 1, u.fund().redemptionNav, "1.0-0"))
    }
}
function Es(t, o) {
    if (t & 1 && (a(0, "li", 21),
    l(1, " \u062A\u0627\u0631\u06CC\u062E \u0645\u062D\u0627\u0633\u0628\u0647 \u0633\u0648\u062F \u0646\u0642\u062F\u06CC"),
    a(2, "span", 40),
    l(3),
    r()()),
    t & 2) {
        let u = d(2);
        s(3),
        T(u.fund().profitInfo.calculateProfitDateDesc)
    }
}
function Ds(t, o) {
    if (t & 1 && (a(0, "li", 21),
    l(1, " \u062A\u0627\u0631\u06CC\u062E \u0648\u0627\u0631\u06CC\u0632 \u0633\u0648\u062F \u0646\u0642\u062F\u06CC"),
    a(2, "span", 40),
    l(3),
    r()()),
    t & 2) {
        let u = d(2);
        s(3),
        T(u.fund().profitInfo.payProfitDateDesc)
    }
}
function Ms(t, o) {
    if (t & 1 && (a(0, "li", 21),
    l(1, " \u062A\u0639\u062F\u0627\u062F \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u0627\u0646"),
    a(2, "span", 40),
    l(3),
    S(4, "number"),
    a(5, "small", 41),
    l(6, "\u0646\u0641\u0631"),
    r()()()),
    t & 2) {
        let u = d(2);
        s(3),
        T(ze(4, 1, u.fund().totalInvestor, "1.0-0"))
    }
}
function Ns(t, o) {
    if (t & 1 && (a(0, "li", 21),
    l(1, " \u062F\u0627\u0631\u0627\u06CC\u06CC \u062A\u062D\u062A \u0645\u062F\u06CC\u0631\u06CC\u062A"),
    a(2, "span", 40),
    l(3),
    S(4, "number"),
    a(5, "span", 41),
    l(6, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()()),
    t & 2) {
        let u = d(2);
        s(3),
        T(ze(4, 1, u.fund().totalAsset, "1.0-0"))
    }
}
function Ps(t, o) {
    if (t & 1 && (a(0, "option", 32),
    l(1),
    r()),
    t & 2) {
        let u = o.$implicit;
        m("value", u.value),
        s(),
        F(" ", u.name, " ")
    }
}
function Vs(t, o) {
    if (t & 1 && (a(0, "span", 33),
    l(1),
    a(2, "small"),
    l(3, "\u062A\u0648\u0645\u0627\u0646"),
    r()()),
    t & 2) {
        let u = d(2);
        s(),
        F("", u.instantValuePersian(), " ")
    }
}
function Os(t, o) {
    if (t & 1 && (a(0, "div", 34)(1, "div", 49)(2, "label", 50),
    l(3, "\u0646\u062A\u06CC\u062C\u0647 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC"),
    r(),
    a(4, "span", 51)(5, "span", 52),
    l(6),
    S(7, "number"),
    r(),
    a(8, "span"),
    l(9, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()(),
    a(10, "div")(11, "label", 50),
    l(12, "\u0628\u0627\u0632\u062F\u0647\u06CC"),
    r(),
    a(13, "span", 53),
    l(14),
    S(15, "number"),
    r()()()),
    t & 2) {
        let u = o;
        s(6),
        T(ze(7, 3, u.amount, "1.0-0")),
        s(7),
        m("colorizeNumber", u.percent),
        s(),
        F("", ze(15, 6, u.percent, "1.0-2"), "%")
    }
}
function Bs(t, o) {
    if (t & 1) {
        let u = I();
        C(0, vs, 9, 5, "div", 4),
        S(1, "async"),
        C(2, xs, 19, 13, "div", 5),
        a(3, "div", 6)(4, "div", 7),
        l(5, "\u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0642\u06CC\u0645\u062A"),
        r(),
        C(6, Ss, 5, 2, "select", 8),
        r(),
        a(7, "div", 9),
        h("swiperight", function() {
            g(u);
            let n = d();
            return v(n.swipeTabs())
        }),
        _(8, "lib-d3-line-chart", 10),
        r(),
        a(9, "div", 11)(10, "select", 12),
        h("change", function(n) {
            g(u);
            let i = d();
            return v(i.onOptionItemChange(n.currentTarget.value))
        }),
        ne(11, Fs, 2, 3, "option", 13, Me),
        r(),
        a(13, "div", 14)(14, "div", 15),
        l(15, " \u0628\u0627\u0632\u062F\u0647 \u0635\u0646\u062F\u0648\u0642"),
        a(16, "span", 16),
        l(17),
        r()(),
        a(18, "div"),
        l(19, " \u0628\u0627\u0632\u062F\u0647 \u0634\u0627\u062E\u0635"),
        a(20, "span", 16),
        S(21, "async"),
        l(22),
        S(23, "async"),
        r()()()(),
        C(24, Ts, 3, 2, "div", 17)(25, As, 8, 1),
        a(26, "div", 18),
        l(27, " \u062C\u0632\u0626\u06CC\u0627\u062A \u0635\u0646\u062F\u0648\u0642 "),
        a(28, "span"),
        l(29),
        r()(),
        a(30, "div", 19)(31, "div", 20),
        C(32, ws, 7, 4, "li", 21)(33, ks, 7, 4, "li", 21)(34, Es, 4, 1, "li", 21)(35, Ds, 4, 1, "li", 21)(36, Ms, 7, 4, "li", 21)(37, Ns, 7, 4, "li", 21),
        r()(),
        a(38, "form", 22)(39, "div", 23)(40, "div", 24)(41, "div", 25)(42, "label", 26),
        l(43, "\u0645\u0628\u0644\u063A \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC"),
        r(),
        a(44, "div", 27)(45, "span", 28),
        l(46, "\u0645\u0628\u0644\u063A"),
        r(),
        a(47, "custom-number-box", 29),
        h("tap", function() {
            g(u);
            let n = d();
            return v(n.onValueTap("forecastValue"))
        })("blurEvent", function() {
            g(u);
            let n = d();
            return v(n.onBlur())
        }),
        r()()(),
        a(48, "div", 30)(49, "label", 26),
        l(50, "\u0645\u062F\u062A \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC"),
        r(),
        a(51, "select", 31),
        h("change", function() {
            g(u);
            let n = d();
            return v(n.onForecastOptionChange())
        }),
        ne(52, Ps, 2, 2, "option", 32, Me),
        r()()(),
        C(54, Vs, 4, 1, "span", 33)(55, Os, 16, 9, "div", 34),
        S(56, "async"),
        r()(),
        a(57, "a", 35)(58, "span", 15),
        l(59),
        r(),
        a(60, "span", 36),
        l(61, " \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 "),
        _(62, "svg-icon", 37),
        r()()
    }
    if (t & 2) {
        let u, e, n, i, c, p, b, x, D, j, K, L = d();
        f(A(1, 30, L.currentAssetValue$) ? 0 : -1),
        s(2),
        f((u = L.currentAsset()) != null && u.employerShareAmount ? 2 : -1),
        s(4),
        f(L.showSelectBox() ? 6 : -1),
        s(),
        m("ngClass", q(38, Cs, L.loading())),
        s(),
        m("isMobile", L.isMobile())("selectedTrend", L.selectedTrend)("tooltipType", 1),
        s(2),
        m("value", (e = L.fund().progressPercents[2]) == null ? null : e.name),
        s(),
        ie(L.fund().progressPercents),
        s(5),
        m("colorizeNumber", L.optionItemChangeSignal()),
        s(),
        F("", L.optionItemChangeSignal(), "%"),
        s(3),
        m("colorizeNumber", A(21, 32, L.indexAverage$)),
        s(2),
        F("", A(23, 34, L.indexAverage$), "%"),
        s(2),
        f((n = L.fund()) != null && n.hasTransaction ? 24 : -1),
        s(),
        f(L.fund().details && L.fund().details.length > 0 ? 25 : -1),
        s(4),
        T(L.fund().name),
        s(3),
        f((i = L.fund()) != null && i.issuanceNav ? 32 : -1),
        s(),
        f((c = L.fund()) != null && c.redemptionNav ? 33 : -1),
        s(),
        f(!((p = L.fund()) == null || p.profitInfo == null) && p.profitInfo.calculateProfitDateDesc ? 34 : -1),
        s(),
        f(!((b = L.fund()) == null || b.profitInfo == null) && b.profitInfo.payProfitDateDesc ? 35 : -1),
        s(),
        f((x = L.fund()) != null && x.totalInvestor ? 36 : -1),
        s(),
        f((D = L.fund()) != null && D.totalAsset ? 37 : -1),
        s(),
        m("formGroup", L.forecastForm),
        s(6),
        m("ngClass", q(40, hs, L.currentInputSelectedName() === "forecastValue")),
        s(3),
        m("form", L.forecastForm)("ngClass", q(42, ys, L.currentInputSelectedName() === "forecastValue")),
        s(5),
        ie(L.fund().progressPercents),
        s(2),
        f(L.instantValuePersian() ? 54 : -1),
        s(),
        f((j = A(56, 36, L.forecastValues$)) ? 55 : -1, j),
        s(2),
        He("href", (K = L.fund()) == null ? null : K.website, Gn),
        s(2),
        F(" \u0622\u0634\u0646\u0627\u06CC\u06CC \u0628\u0627 \u0635\u0646\u062F\u0648\u0642 \u0645\u0641\u06CC\u062F ", L.fund().name, ""),
        s(3),
        m("iconName", L.icons.ChevronLeft)
    }
}
function Rs(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "button", 56),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.openBuyForm())
        }),
        l(1, " \u0635\u062F\u0648\u0631 \u0635\u0646\u062F\u0648\u0642 "),
        r()
    }
}
function Ws(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "button", 57),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.openSellForm())
        }),
        l(1, " \u0627\u0628\u0637\u0627\u0644 \u0635\u0646\u062F\u0648\u0642 "),
        r()
    }
}
function $s(t, o) {
    if (t & 1 && (a(0, "div", 2),
    C(1, Rs, 2, 0, "button", 54)(2, Ws, 2, 0, "button", 55),
    r()),
    t & 2) {
        let u = d();
        s(),
        f(u.fund().code !== u._NamiFundCode() ? 1 : -1),
        s(),
        f(u.isPossibleToSell$ ? 2 : -1)
    }
}
function qs(t, o) {
    if (t & 1 && _(0, "fund-buy", 62),
    t & 2) {
        let u, e = d(2);
        Y(e.isMobile() ? "p-0" : "p-3"),
        m("isMobile", e.isMobile())("buyValues", (u = e.fundPopup$()) == null ? null : u.value)
    }
}
function js(t, o) {
    if (t & 1 && _(0, "fund-sell", 63),
    t & 2) {
        let u, e = d(2);
        Y(e.isMobile() ? "p-0" : "p-3"),
        m("isMobile", e.isMobile())("sellValues", (u = e.fundPopup$()) == null ? null : u.value)
    }
}
function Us(t, o) {
    if (t & 1 && _(0, "fund-increase", 64),
    t & 2) {
        let u = d(2);
        Y(u.isMobile() ? "p-0" : "p-3"),
        m("isMobile", u.isMobile())("IncreaseValues", u.fundPopup$().value)
    }
}
function Ls(t, o) {
    if (t & 1 && _(0, "fund-operation-confirm", 61),
    t & 2) {
        let u = d(2);
        m("isMobile", u.isMobile())("confirmValues", u.fundPopup$().value)
    }
}
function Hs(t, o) {
    if (t & 1 && (a(0, "div", 3),
    S(1, "async"),
    S(2, "async"),
    C(3, qs, 1, 4, "fund-buy", 58)(4, js, 1, 4, "fund-sell", 59)(5, Us, 1, 4, "fund-increase", 60)(6, Ls, 1, 2, "fund-operation-confirm", 61),
    r()),
    t & 2) {
        let u, e = d();
        m("ngClass", Oe(6, _s, A(1, 2, e.fundsFacade.showOverlay$), A(2, 4, e.fundsFacade.showOverlay$) === !1)),
        s(3),
        f((u = e.fundPopup$().popupType) === e.FundPopupType.Buy ? 3 : u === e.FundPopupType.Sell ? 4 : u === e.FundPopupType.Increase ? 5 : u === e.FundPopupType.Confirm ? 6 : -1)
    }
}
var Yu = ( () => {
    let o = class o {
        constructor() {
            this.FundPopupType = _e,
            this.fb = y(Te),
            this.fundsFacade = y(ue),
            this.moneyService = y(mt),
            this.overlayService = y(ye),
            this.userService = y(ji),
            this.d3LineChart = it(ii),
            this.fund = w(null),
            this.isMobile = w(!1),
            this.showSelectBox = E(!1),
            this.hasNavAdjust = E(!0),
            this.currentAsset = E(null),
            this.optionItemChangeSignal = E(0),
            this.loading = E(!1),
            this.currentInputSelectedName = E(""),
            this.instantValuePersian = E(""),
            this.optionDefaultName = E(""),
            this._NamiFundCode = E("11562"),
            this.fundPopup$ = M(this.fundsFacade.fundPopup$),
            this.isWithoutDetail = ee( () => ge.WithoutDetailFunds.includes(this.fund()?.code)),
            this.currentAssetPropertyCount$ = new De(0),
            this.currentAssetValue$ = new De(0),
            this.forecastValues$ = new De({
                percent: 0,
                amount: 0
            }),
            this.perviousIndexAverageValue = 0,
            this.icons = O,
            this.selectedTrend = qo.weekly,
            this.forecastForm = this.fb.group({
                value: [0],
                percent: [0]
            }),
            this.buyForm2 = this.fb.group({
                value: new Ne(null,[R.required, this.buyAmountMinValueValidator.bind(this)])
            }),
            this.chartData = [],
            this.subs = [],
            this.buyFormInstantValuePersian = "",
            this.isPossibleToSell$ = () => this.fundsFacade.userFunds$.pipe(k(e => e.some(n => n.fundCode === this.fund().code)))
        }
        buyAmountMinValueValidator(e) {
            if (e.value !== null) {
                let n = this.fundsFacade.calculateFundTotalIssuancePrice(this.fund(), !1);
                if (e.value < n)
                    return {
                        minValidator: !0
                    }
            }
            return null
        }
        ngOnDestroy() {
            this.subs.forEach(e => e.unsubscribe())
        }
        ngAfterViewInit() {
            if (this.fund()) {
                this.fund()?.navAdjustSetting.length && this.showSelectBox.set(!0);
                let e = this.fund()?.progressPercents[3] ?? this.fund()?.progressPercents[0];
                this.forecastValues$.next({
                    percent: e.value,
                    amount: 0
                }),
                this.forecastForm.patchValue({
                    percent: e.value
                }),
                this.fundsFacade.userFunds$.pipe(k(n => n.find(i => i.fundCode === this.fund()?.code)), V(n => this.currentAssetValue$.next(n?.amount ?? 0))).subscribe(),
                this.drawChart(this.fund()?.code, e.days),
                this.changeData(e)
            }
        }
        ngOnInit() {
            this.optionDefaultName.set(this.fund()?.progressPercents[3]?.name ?? ""),
            this.onForecastValueChange(),
            this.onBuyTextBoxValueChange();
            let e = this.fundsFacade.userFunds$.subscribe(n => {
                if (n) {
                    let i = n.find(c => c.fundCode === this.fund()?.code);
                    i && (this.currentAssetPropertyCount$.next(i.count),
                    this.currentAsset.set(i))
                }
            }
            );
            this.subs.push(e)
        }
        onValueTap(e) {
            this.currentInputSelectedName.set(e)
        }
        onBlur() {
            this.currentInputSelectedName.set("")
        }
        onOptionItemChange(e) {
            this.progressPercentsName = e;
            let n = this.fund()?.progressPercents.find(i => i.name === e);
            this.changeData(n),
            this.drawChart(this.fund()?.code, n.days)
        }
        onForecastValueChange() {
            let e = this.forecastForm.get("value").valueChanges.subscribe(n => {
                if (n == null)
                    return;
                let i = +n.toString().replace(/,/g, "");
                i < this.fundsFacade.calculateFundTotalIssuancePrice(this.fund(), !1) && this.buyForm2.controls.value.setErrors({
                    incorrect: !0
                }),
                this.instantValuePersian.set(i > 10 ? Xt(Math.floor(i / 10)) : ""),
                this.calculateForecast(i, this.forecastForm.value.percent)
            }
            );
            this.subs.push(e)
        }
        onForecastOptionChange() {
            let e = this.forecastForm.value;
            this.calculateForecast(e.value, e.percent)
        }
        calculateForecast(e, n) {
            let i = 0;
            e && (i = +e * +n / 100 + +e),
            this.forecastValues$.next({
                percent: +n,
                amount: i
            })
        }
        changeData(e) {
            this.optionItemChangeSignal.set(e?.value),
            this.indexAverage$ = this.fundsFacade.indexAverage(e?.days).pipe(co(this.perviousIndexAverageValue), V(n => this.perviousIndexAverageValue = n))
        }
        drawChart(e, n) {
            let i = new Date
              , c = new Date(i.setDate(i.getDate() - n)).toLocaleDateString("en-CA")
              , p = new Date().toLocaleDateString("en-CA");
            this.loading.set(!0);
            let b = this.fundsFacade.navHistory({
                fromDate: c,
                toDate: p,
                fundCode: e
            }, this.fund()?.navAdjustSetting, this.hasNavAdjust()).pipe(me( () => this.loading.set(!1)), V(x => {
                this.d3LineChart && (this.d3LineChart().chartData = x,
                this.d3LineChart().drawChart())
            }
            ), H(x => (this.d3LineChart && (this.d3LineChart().chartData = [],
            this.d3LineChart().drawChart()),
            Z(null)))).subscribe();
            this.subs.push(b)
        }
        showPopup(e, n) {
            e === _e.None ? this.subs.push(rn(300).subscribe( () => this.fundsFacade.updateFundPopup(e, n))) : this.fundsFacade.updateFundPopup(e, n)
        }
        openSellForm() {
            this.isMobile() ? this.overlayService.showOverlay({
                component: Wn,
                input: [{
                    inputName: "isMobile",
                    inputValue: !0
                }, {
                    inputName: "sellValues",
                    inputValue: {
                        fund: this.fund()
                    }
                }],
                option: {
                    componentName: "FundSellComponent"
                }
            }) : (this.fundsFacade.showOverlay(),
            this.showPopup(_e.Sell, {
                fund: this.fund()
            }),
            this.lastFormSelected = ae.Sell)
        }
        openBuyForm() {
            this.isMobile() ? this.overlayService.showOverlay({
                component: Dt,
                input: [{
                    inputName: "isMobile",
                    inputValue: !0
                }, {
                    inputName: "buyValues",
                    inputValue: {
                        fund: this.fund()
                    }
                }],
                option: {
                    componentName: "FundBuyComponent"
                }
            }) : (this.fundsFacade.showOverlay(),
            this.showPopup(_e.Buy, {
                fund: this.fund()
            }),
            this.lastFormSelected = ae.Buy)
        }
        onTransaction() {
            this.fundsFacade.showTransactions()
        }
        onBuyTextBoxValueChange() {
            let e = this.buyForm2.get("value").valueChanges.subscribe(n => {
                if (n == null)
                    return;
                let i = +n.toString().replace(/,/g, "");
                i < this.fundsFacade.calculateFundTotalIssuancePrice(this.fund(), !1) && this.buyForm2.controls.value.setErrors({
                    incorrect: !0
                }),
                this.buyFormInstantValuePersian = i > 10 ? Xt(Math.floor(i / 10)) : ""
            }
            );
            this.subs.push(e)
        }
        swipeTabs() {}
        onOptionItemChartChange(e) {
            this.hasNavAdjust.set(e === "0");
            let n = this.progressPercentsName ?? "\u0633\u0627\u0644 \u0627\u062E\u06CC\u0631"
              , i = this.fund()?.progressPercents.find(c => c.name === n);
            this.changeData(i),
            this.drawChart(this.fund()?.code, i.days)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["fund-detail"]],
        viewQuery: function(n, i) {
            n & 1 && ut(i.d3LineChart, ii, 5),
            n & 2 && bt()
        },
        inputs: {
            fund: [1, "fund"],
            isMobile: [1, "isMobile"]
        },
        decls: 6,
        vars: 3,
        consts: [[1, "d-flex", "flex-column", "h-100"], [1, "flex-grow-1", "overflow-auto", "p-2"], [1, "d-flex", "p-2", "mt-2", "flex-shrink-0", "bg-principal", "mt-auto", "shadow", "border-top"], [1, "d-flex", "flex-column", "bg-principal", "bg-principal-4x-dark", "fund-overlay", "fund-overlay--show", "overflow-hidden", "rounded-top-4", "shadow-lg", "z-2", 2, "max-height", "90%", 3, "ngClass"], [1, "text-center"], [1, "bg-principal", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "d-flex", "flex-column", "justify-content-between", "my-4", "px-3", "py-2", "rounded"], [1, "d-flex", "justify-content-between", "align-items-center", "gap-2"], [1, "fw-bold", "fs-7"], [1, "form-select", "w-auto", "cup"], [1, "position-relative", 3, "swiperight", "ngClass"], ["chartId", "FundLineChart", 1, "mb-3", "d-block", 2, "min-height", "210px", 3, "isMobile", "selectedTrend", "tooltipType"], [1, "bg-principal", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "rounded", "mb-4", "p-3", "d-flex", "justify-content-between", "align-items-center", "fs-7"], [1, "form-select", "me-3", "w-auto", "cup", 3, "change", "value"], [3, "value", "selected"], [1, "align-self-sm-center", "d-flex", "flex-row", "flex-wrap", "flex-grow-1", "justify-content-between"], [1, "me-3"], ["dir", "ltr", 1, "text-success", "ms-1", 3, "colorizeNumber"], ["data-cy", "fund-detail-transactions-btn", 1, "align-items-center", "bg-principal-2x", "bg-principal-hover", "bg-principal-7x-dark", "bg-principal-4x-dark-mobile", "cup", "d-flex", "fs-7", "justify-content-between", "px-3", "py-2", "mb-4", "rounded"], [1, "fw-bold", "fs-7", "mb-2"], [1, "bg-principal", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "d-flex", "flex-column", "justify-content-between", "mb-4", "px-3", "py-2", "rounded"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "bg-transparent", "px-0"], [2, "display", "none", 3, "formGroup"], [1, "bg-principal", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "rounded", "mb-4", "p-3"], [1, "d-flex", "flex-column", "flex-sm-row", "justify-content-around", "align-items-sm-center"], [1, "flex-grow-1", "ml-sm-3"], ["for", "amount", 1, "mb-1"], [1, "form-control", "form-control-lg", "d-flex", "align-items-center", "input-index", 3, "ngClass"], [1, "text-secondary", "position-absolute", 2, "pointer-events", "none"], ["id", "value", 1, "py-1", "ps-3", "flex-grow-1", 3, "tap", "blurEvent", "form", "ngClass"], [1, "col-sm-4", "p-0", "mt-2", "mt-sm-0"], ["id", "percent", "formControlName", "percent", "id", "fund-detail-forcast-option", 1, "form-select", 3, "change"], [3, "value"], [1, "fw-bold", "text-body"], [1, "align-items-center", "d-flex", "flex-row", "flex-wrap", "mt-2", "justify-content-between"], ["target", "_blank", "id", "fund-detail-introduction", 1, "align-items-start", "bg-global", "bg-gradient", "cup", "d-flex", "flex-wrap", "fs-7", "justify-content-between", "mt-3", "p-3", "rounded", "text-light", 3, "href"], [1, "align-self-end", "opacity-6", "small", "ms-auto"], ["width", "18", "height", "18", 1, "", 3, "iconName"], [1, "text-secondary"], [1, "fs-5", "text-base"], [1, "text-base", "fs-7"], [1, "text-muted", "ms-1"], [1, "form-select", "w-auto", "cup", 3, "change"], ["data-cy", "fund-detail-transactions-btn", 1, "align-items-center", "bg-principal-2x", "bg-principal-hover", "bg-principal-7x-dark", "bg-principal-4x-dark-mobile", "cup", "d-flex", "fs-7", "justify-content-between", "px-3", "py-2", "mb-4", "rounded", 3, "click"], ["width", "20", "height", "20", 1, "", 3, "iconName"], [1, "row", "m-0"], [1, "col-12", "col-sm-6", "text-base", "fs-7", "px-0", "py-1"], [1, "d-flex", "px-1"], ["width", "18", "height", "18", 3, "iconName"], [1, "flex-grow-1", "me-3"], [1, "m-0"], [1, "ms-2"], [1, "fs-6", "me-1"], ["dir", "ltr", 1, "ms-2", "text-success", 3, "colorizeNumber"], ["data-cy", "issue-nav-btn", 1, "btn", "btn-outline-success", "flex-grow-1", "me-1"], [1, "btn", "btn-outline-danger", "flex-grow-1", "mt-0", "ms-1"], ["data-cy", "issue-nav-btn", 1, "btn", "btn-outline-success", "flex-grow-1", "me-1", 3, "click"], [1, "btn", "btn-outline-danger", "flex-grow-1", "mt-0", "ms-1", 3, "click"], [3, "isMobile", "class", "buyValues"], [3, "isMobile", "class", "sellValues"], [3, "isMobile", "class", "IncreaseValues"], [3, "isMobile", "confirmValues"], [3, "isMobile", "buyValues"], [3, "isMobile", "sellValues"], [3, "isMobile", "IncreaseValues"]],
        template: function(n, i) {
            n & 1 && (a(0, "div", 0)(1, "div", 1),
            C(2, gs, 1, 1)(3, Bs, 63, 44),
            r(),
            C(4, $s, 3, 2, "div", 2),
            r(),
            C(5, Hs, 7, 9, "div", 3)),
            n & 2 && (s(2),
            f(i.isWithoutDetail() ? 2 : 3),
            s(2),
            f(i.userService.isGuestUser ? -1 : 4),
            s(),
            f(!i.isMobile() && i.fundPopup$() ? 5 : -1))
        },
        dependencies: [z, se, xt, et, Se, ko, Eo, wo, Be, xe, he, Fe, Xe, Dt, Fn, Wn, Qt, At, mn, B, ii],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var zs = ["cancelRequestTemplate"]
  , Qu = (t, o) => [t, o];
function Gs(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "span", 13),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.openModal())
        }),
        _(1, "svg-icon", 14),
        a(2, "span", 15),
        l(3, "\u0644\u063A\u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A"),
        r()()
    }
    if (t & 2) {
        let u = d();
        s(),
        m("iconName", u.icons.Delete)
    }
}
function Ks(t, o) {
    t & 1 && (a(0, "span"),
    l(1, "\u0644\u063A\u0648 \u0634\u062F\u0647"),
    r())
}
function Ys(t, o) {
    if (t & 1 && (a(0, "div", 3)(1, "div"),
    l(2, "\u0645\u0628\u0644\u063A \u0648\u0627\u0631\u06CC\u0632\u06CC"),
    r(),
    a(3, "div")(4, "span", 16),
    l(5),
    S(6, "number"),
    r(),
    a(7, "span", 11),
    l(8, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()()),
    t & 2) {
        let u, e = d();
        s(5),
        T(A(6, 1, (u = e.transaction()) == null || u.request == null ? null : u.request.amount))
    }
}
function Qs(t, o) {
    if (t & 1 && (a(0, "div", 3)(1, "div"),
    l(2, "\u0634\u0645\u0627\u0631\u0647 \u067E\u06CC\u06AF\u06CC\u0631\u06CC"),
    r(),
    a(3, "div")(4, "span", 16),
    l(5),
    r()()()),
    t & 2) {
        let u, e = d();
        s(5),
        T((u = (u = e.transaction()) == null || u.request == null ? null : u.request.requestId) !== null && u !== void 0 ? u : "-")
    }
}
function Js(t, o) {
    if (t & 1 && (a(0, "span", 6),
    l(1),
    S(2, "jdate"),
    r()),
    t & 2) {
        let u, e = d();
        s(),
        T(A(2, 1, (u = e.transaction().issueFinancialResult) == null ? null : u.approveDate))
    }
}
function Zs(t, o) {
    t & 1 && (a(0, "span", 8),
    l(1, "\u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645"),
    r())
}
function Xs(t, o) {
    t & 1 && (a(0, "span", 9),
    l(1, " \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0631\u062F \u0634\u062F\u0647"),
    r())
}
function el(t, o) {
    t & 1 && (a(0, "div"),
    l(1, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0634\u0645\u0627 \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E \u0641\u0648\u0642 \u062A\u0648\u0633\u0637 \u0648\u0627\u062D\u062F \u0645\u0627\u0644\u06CC \u062A\u0627\u06CC\u06CC\u062F \u0634\u062F\u0647 \u0648 \u0628\u0647 \u062D\u0633\u0627\u0628 \u0635\u0646\u062F\u0648\u0642 \u0648\u0627\u0631\u06CC\u0632 \u06AF\u0631\u062F\u06CC\u062F."),
    r())
}
function tl(t, o) {
    if (t & 1 && (a(0, "div"),
    l(1),
    r()),
    t & 2) {
        let u, e = d();
        s(),
        F(" ", (u = e.transaction()) == null || u.issueFinancialResult == null ? null : u.issueFinancialResult.failedReason, " ")
    }
}
function nl(t, o) {
    if (t & 1 && (a(0, "span", 6),
    l(1),
    S(2, "jdate"),
    r()),
    t & 2) {
        let u, e = d();
        s(),
        T(A(2, 1, (u = e.transaction()) == null || u.fundResult == null ? null : u.fundResult.approvedDate))
    }
}
function il(t, o) {
    t & 1 && (a(0, "span", 8),
    l(1, "\u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645"),
    r())
}
function ol(t, o) {
    t & 1 && (a(0, "span", 9),
    l(1, "\u0646\u0627\u0645\u0648\u0641\u0642"),
    r())
}
function ul(t, o) {
    t & 1 && (a(0, "div", 11),
    l(1, " \u0646\u062A\u06CC\u062C\u0647 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0634\u0645\u0627 \u062A\u0627 \u062F\u0648 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC \u067E\u0633 \u0627\u0632 \u062A\u0627\u06CC\u06CC\u062F \u0648\u0627\u062D\u062F \u0645\u0627\u0644\u06CC \u062F\u0631 \u0627\u06CC\u0646 \u0628\u062E\u0634 \u0642\u0627\u0628\u0644 \u0645\u0634\u0627\u0647\u062F\u0647 \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F. "),
    r())
}
function al(t, o) {
    if (t & 1 && (a(0, "div")(1, "div", 3)(2, "div"),
    l(3, "\u0634\u0645\u0627\u0631\u0647 \u062F\u0631\u062E\u0648\u0627\u0633\u062A"),
    r(),
    a(4, "div")(5, "span", 16),
    l(6),
    r()()(),
    a(7, "div", 3)(8, "div"),
    l(9, "\u062A\u0639\u062F\u0627\u062F \u0646\u0647\u0627\u06CC\u06CC \u0648\u0627\u062D\u062F\u0647\u0627"),
    r(),
    a(10, "div")(11, "span", 16),
    l(12),
    S(13, "number"),
    r(),
    a(14, "small", 11),
    l(15, "\u0648\u0627\u062D\u062F"),
    r()()(),
    a(16, "div", 3)(17, "div"),
    l(18, "\u0645\u0628\u0644\u063A \u0646\u0647\u0627\u06CC\u06CC \u0647\u0631 \u0648\u0627\u062D\u062F"),
    r(),
    a(19, "div")(20, "span", 16),
    l(21),
    S(22, "number"),
    r(),
    a(23, "span", 11),
    l(24, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()(),
    a(25, "div", 3)(26, "div"),
    l(27, "\u0645\u0628\u0644\u063A \u06A9\u0644"),
    r(),
    a(28, "div")(29, "span", 16),
    l(30),
    S(31, "number"),
    r(),
    a(32, "span", 11),
    l(33, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()()()),
    t & 2) {
        let u, e, n, i, c = d();
        s(6),
        T((u = c.transaction()) == null || u.fundResult == null ? null : u.fundResult.requestId),
        s(6),
        T(A(13, 4, (e = c.transaction()) == null || e.fundResult == null ? null : e.fundResult.approvedCount)),
        s(9),
        T(A(22, 6, ((n = c.transaction()) == null || n.fundResult == null ? null : n.fundResult.approvedAmount) / ((n = c.transaction()) == null || n.fundResult == null ? null : n.fundResult.approvedCount))),
        s(9),
        T(A(31, 8, (i = c.transaction()) == null || i.fundResult == null ? null : i.fundResult.approvedAmount))
    }
}
function rl(t, o) {
    t & 1 && (a(0, "p", 12),
    l(1, " \u0645\u0628\u0644\u063A \u0628\u0627\u0642\u06CC\u0645\u0627\u0646\u062F\u0647 \u0635\u062F\u0648\u0631 \u067E\u0633 \u0627\u0632 \u067E\u0627\u06CC\u0627\u0646 \u0639\u0645\u0644\u06CC\u0627\u062A \u0635\u062F\u0648\u0631 \u0648\u0627\u062D\u062F\u0647\u0627 \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u0633\u0648\u062F \u0648\u0627\u0631\u06CC\u0632\u06CC \u062F\u0648\u0631\u0647 \u062C\u0627\u0631\u06CC \u0628\u0647 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u0648\u0627\u0631\u06CC\u0632 \u06CC\u0627 \u0645\u062C\u062F\u062F\u0627 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u062E\u0648\u0627\u0647\u062F \u0634\u062F. "),
    r())
}
function sl(t, o) {
    t & 1 && (a(0, "p", 12),
    l(1, " \u0645\u0628\u0644\u063A \u0628\u0627\u0642\u06CC\u0645\u0627\u0646\u062F\u0647 \u0635\u062F\u0648\u0631 \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u0633\u0648\u062F \u0648\u0627\u0631\u06CC\u0632\u06CC \u062F\u0648\u0631\u0647 \u062C\u0627\u0631\u06CC \u0628\u0647 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u0648\u0627\u0631\u06CC\u0632 \u06CC\u0627 \u0645\u062C\u062F\u062F\u0627 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u062E\u0648\u0627\u0647\u062F \u0634\u062F. "),
    r())
}
function ll(t, o) {
    if (t & 1 && (a(0, "div", 3)(1, "div", 17),
    l(2, "\u0645\u0628\u0644\u063A \u0628\u0627\u0642\u06CC\u0645\u0627\u0646\u062F\u0647"),
    r(),
    a(3, "div")(4, "span", 16),
    l(5),
    S(6, "number"),
    r(),
    a(7, "span", 11),
    l(8, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()()),
    t & 2) {
        let u, e = d();
        s(5),
        T(A(6, 1, (u = e.transaction()) == null || u.issueRemain == null ? null : u.issueRemain.remainAmount))
    }
}
function cl(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 18)(1, "span", 19),
        l(2, " \u0644\u063A\u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631"),
        r(),
        a(3, "button", 20),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.closeModal())
        }),
        _(4, "span", 21),
        r()(),
        a(5, "div", 22),
        l(6, " \u0645\u0627\u06CC\u0644 \u0628\u0647 \u0644\u063A\u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0648 \u0628\u0627\u0632\u06AF\u0634\u062A \u0645\u0628\u0644\u063A \u067E\u0631\u062F\u0627\u062E\u062A\u06CC \u0628\u0647 \u0645\u0648\u062C\u0648\u062F\u06CC \u062E\u0648\u062F \u0647\u0633\u062A\u06CC\u062F\u061F "),
        a(7, "div", 23),
        _(8, "svg-icon", 24),
        l(9, " \u0644\u063A\u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0641\u0642\u0637 \u062A\u0627 \u0642\u0628\u0644 \u0627\u0632 \u062A\u0627\u06CC\u06CC\u062F \u0648\u0627\u062D\u062F \u0645\u0627\u0644\u06CC \u0627\u0645\u06A9\u0627\u0646 \u067E\u0630\u06CC\u0631 \u0627\u0633\u062A. "),
        r()(),
        a(10, "div", 25)(11, "div", 26)(12, "button", 27),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.closeModal())
        }),
        l(13, "\u0628\u0627\u0632\u06AF\u0634\u062A"),
        r(),
        a(14, "button", 28),
        h("click", function() {
            let n;
            g(u);
            let i = d();
            return i.closeModal(),
            v(i.cancelRequest((n = i.transaction().request) == null ? null : n.requestId))
        }),
        l(15, " \u0644\u063A\u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631 "),
        r()()()
    }
    if (t & 2) {
        let u = d();
        s(8),
        m("iconName", u.icons.InfoBox)
    }
}
var Ju = ( () => {
    let o = class o extends _n {
        constructor(e) {
            super(),
            this.fundFacade = e,
            this.cancelRequestTemplate = it("cancelRequestTemplate"),
            this.transaction = w(null),
            this.canceledState = J(),
            this.loading = !1,
            this.icons = O
        }
        get FundTransactionStatus() {
            return ce
        }
        cancelRequest(e) {
            this.loading = !0,
            this.fundFacade.cancelIssuance(e).pipe(me( () => this.loading = !1)).subscribe( () => {
                this.transaction().request.status = ce.Canceled,
                this.transaction().request.stateClass = ge.TransactionStateClass[this.transaction().request.status],
                this.canceledState.emit()
            }
            )
        }
        openModal() {
            this.modalService.open(this.cancelRequestTemplate())
        }
        closeModal() {
            this.modalService.dismissAll()
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(ue))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["user-fund-transaction-item-buy"]],
        viewQuery: function(n, i) {
            n & 1 && ut(i.cancelRequestTemplate, zs, 5),
            n & 2 && bt()
        },
        inputs: {
            transaction: [1, "transaction"]
        },
        outputs: {
            canceledState: "canceledState"
        },
        features: [sn],
        decls: 48,
        vars: 34,
        consts: [["cancelRequestTemplate", ""], [1, "fund-detail-tree", "px-3"], [1, "pb-2", "ps-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "fs-7", "fund-detail-tree-item"], [1, "iconFund"], [1, "text-body-tertiary", "small", "d-block"], ["data-cy", "buy-transaction-cancel-btn cup"], [1, "text-warning"], [1, "text-danger"], [1, "d-flex", "justify-content-between", "align-items-center", "text-body-tertiary"], [1, "text-body-tertiary"], [1, "mb-0"], ["data-cy", "buy-transaction-cancel-btn cup", 3, "click"], ["data-cy", "buy-transaction-cancel-btn", "width", "18", "height", "18", 1, "text-danger", "cup", 3, "iconName"], [1, "text-danger", "cup"], [1, "text-global", "fs-7"], [1, ""], [1, "modal-header", "align-items-center", "d-flex", "justify-content-between"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "m-0", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "py-4"], [1, "text-global", "mt-3"], ["width", "18", "height", "18", 1, "", 3, "iconName"], [1, "modal-footer"], [1, "m-0", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["data-cy", "buy-transaction-cancel-confirm-btn", "type", "button", 1, "btn", "btn-danger", 3, "click"]],
        template: function(n, i) {
            if (n & 1 && (a(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4),
            _(4, "span", 5),
            a(5, "div"),
            l(6, " \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631 "),
            a(7, "span", 6),
            l(8),
            S(9, "jdate"),
            r()()(),
            C(10, Gs, 4, 1, "span", 7)(11, Ks, 2, 0, "span"),
            r(),
            C(12, Ys, 9, 3, "div", 3)(13, Qs, 6, 1, "div", 3),
            r(),
            a(14, "div", 2)(15, "div", 3)(16, "div", 4),
            _(17, "span", 5),
            a(18, "div"),
            l(19, " \u062A\u0627\u06CC\u06CC\u062F \u0648\u0627\u062D\u062F \u0645\u0627\u0644\u06CC "),
            C(20, Js, 3, 3, "span", 6),
            r()(),
            C(21, Zs, 2, 0, "span", 8)(22, Xs, 2, 0, "span", 9),
            r(),
            a(23, "div", 10),
            C(24, el, 2, 0, "div")(25, tl, 2, 1, "div"),
            r()(),
            a(26, "div", 2)(27, "div", 3)(28, "div", 4),
            _(29, "span", 5),
            a(30, "div"),
            l(31, " \u0639\u0645\u0644\u06CC\u0627\u062A \u0635\u062F\u0648\u0631 \u0648\u0627\u062D\u062F\u0647\u0627 "),
            C(32, nl, 3, 3, "span", 6),
            r()(),
            C(33, il, 2, 0, "span", 8)(34, ol, 2, 0, "span", 9),
            r(),
            C(35, ul, 2, 0, "div", 11)(36, al, 34, 10, "div"),
            r(),
            a(37, "div", 2)(38, "div", 3)(39, "div", 4),
            _(40, "span", 5),
            l(41, " \u0628\u0627\u0632\u06AF\u0634\u062A \u0645\u0628\u0644\u063A \u0628\u0627\u0642\u06CC\u0645\u0627\u0646\u062F\u0647 "),
            r()(),
            a(42, "div", 11),
            C(43, rl, 2, 0, "p", 12)(44, sl, 2, 0, "p", 12),
            r(),
            C(45, ll, 9, 3, "div", 3),
            r()(),
            C(46, cl, 16, 1, "ng-template", null, 0, qt)),
            n & 2) {
                let c, p, b, x, D, j, K, L, Le, _t, An, xi, Si, Fi, Ti, Ii, Ai, un, wi, ki, Ei, Di;
                s(),
                Y((c = i.transaction()) == null || c.request == null ? null : c.request.stateClass),
                s(7),
                T(A(9, 26, (p = i.transaction()) == null || p.request == null ? null : p.request.requestDate)),
                s(2),
                f(!Oe(28, Qu, i.FundTransactionStatus.Failed, i.FundTransactionStatus.Canceled).includes((b = i.transaction()) == null || b.request == null ? null : b.request.status) && Oe(31, Qu, i.FundTransactionStatus.InProgress, i.FundTransactionStatus.NotStarted).includes((b = i.transaction()) == null || b.issueFinancialResult == null ? null : b.issueFinancialResult.status) ? 10 : -1),
                s(),
                f(((x = i.transaction()) == null || x.request == null ? null : x.request.status) === i.FundTransactionStatus.Canceled ? 11 : -1),
                s(),
                f(!((D = i.transaction()) == null || D.request == null) && D.request.amount ? 12 : -1),
                s(),
                f(!((j = i.transaction()) == null || j.request == null) && j.request.requestId ? 13 : -1),
                s(),
                Y((K = i.transaction()) == null || K.issueFinancialResult == null ? null : K.issueFinancialResult.stateClass),
                s(6),
                f(((L = i.transaction()) == null || L.issueFinancialResult == null ? null : L.issueFinancialResult.status) === i.FundTransactionStatus.Done ? 20 : -1),
                s(),
                f(((Le = i.transaction()) == null || Le.issueFinancialResult == null ? null : Le.issueFinancialResult.status) === i.FundTransactionStatus.InProgress ? 21 : -1),
                s(),
                f(((_t = i.transaction()) == null || _t.issueFinancialResult == null ? null : _t.issueFinancialResult.status) === i.FundTransactionStatus.Failed ? 22 : -1),
                s(2),
                f(((An = i.transaction()) == null || An.issueFinancialResult == null ? null : An.issueFinancialResult.status) === i.FundTransactionStatus.Done ? 24 : -1),
                s(),
                f(((xi = i.transaction()) == null || xi.issueFinancialResult == null ? null : xi.issueFinancialResult.status) === i.FundTransactionStatus.Failed ? 25 : -1),
                s(),
                Y((Si = i.transaction()) == null || Si.fundResult == null ? null : Si.fundResult.stateClass),
                s(6),
                f(((Fi = i.transaction()) == null || Fi.fundResult == null ? null : Fi.fundResult.status) === i.FundTransactionStatus.Done ? 32 : -1),
                s(),
                f(((Ti = i.transaction()) == null || Ti.fundResult == null ? null : Ti.fundResult.status) === i.FundTransactionStatus.InProgress ? 33 : -1),
                s(),
                f(((Ii = i.transaction()) == null || Ii.fundResult == null ? null : Ii.fundResult.status) === i.FundTransactionStatus.Failed ? 34 : -1),
                s(),
                f(!((Ai = i.transaction()) == null || Ai.fundResult == null) && Ai.fundResult.approvedAmount ? -1 : 35),
                s(),
                f(((un = i.transaction()) == null || un.fundResult == null ? null : un.fundResult.status) === i.FundTransactionStatus.Done && (!((un = i.transaction()) == null || un.fundResult == null) && un.fundResult.approvedAmount) ? 36 : -1),
                s(),
                Y((wi = i.transaction()) == null || wi.issueRemain == null ? null : wi.issueRemain.stateClass),
                s(6),
                f(((ki = i.transaction()) == null || ki.fundResult == null ? null : ki.fundResult.status) !== i.FundTransactionStatus.Done ? 43 : -1),
                s(),
                f(((Ei = i.transaction()) == null || Ei.fundResult == null ? null : Ei.fundResult.status) === i.FundTransactionStatus.Done ? 44 : -1),
                s(),
                f(((Di = i.transaction()) == null || Di.fundResult == null ? null : Di.fundResult.status) === i.FundTransactionStatus.Done ? 45 : -1)
            }
        },
        dependencies: [se, Ut, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var dl = ["cancelRequestTemplate"]
  , Zu = (t, o) => [t, o];
function ml(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "span", 11),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.openModal())
        }),
        _(1, "svg-icon", 12),
        a(2, "span", 9),
        l(3, "\u0644\u063A\u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A"),
        r()()
    }
    if (t & 2) {
        let u = d();
        s(),
        m("iconName", u.icons.Delete)
    }
}
function pl(t, o) {
    t & 1 && (a(0, "span"),
    l(1, "\u0644\u063A\u0648 \u0634\u062F\u0647"),
    r())
}
function fl(t, o) {
    if (t & 1 && (a(0, "div", 3)(1, "div"),
    l(2, "\u062A\u0639\u062F\u0627\u062F"),
    r(),
    a(3, "div")(4, "span", 7),
    l(5),
    S(6, "number"),
    r(),
    a(7, "small", 13),
    l(8, "\u0648\u0627\u062D\u062F"),
    r()()()),
    t & 2) {
        let u = d();
        s(5),
        T(A(6, 1, u.transaction().request.count))
    }
}
function Cl(t, o) {
    if (t & 1 && (a(0, "div", 3)(1, "div"),
    l(2, "\u0634\u0645\u0627\u0631\u0647 \u0634\u0628\u0627"),
    r(),
    a(3, "div")(4, "span", 7),
    l(5),
    r()()()),
    t & 2) {
        let u, e = d();
        s(5),
        T((u = e.transaction().request) == null ? null : u.iban)
    }
}
function hl(t, o) {
    if (t & 1 && (a(0, "span", 6),
    l(1),
    S(2, "jdate"),
    r()),
    t & 2) {
        let u, e = d();
        s(),
        T(A(2, 1, (u = e.transaction().result) == null ? null : u.confirmtDate))
    }
}
function yl(t, o) {
    t & 1 && (a(0, "span", 8),
    l(1, "\u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645"),
    r())
}
function _l(t, o) {
    t & 1 && (a(0, "span", 9),
    l(1, "\u0646\u0627\u0645\u0648\u0641\u0642"),
    r())
}
function gl(t, o) {
    t & 1 && (a(0, "div", 10),
    l(1, " \u0646\u062A\u06CC\u062C\u0647 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0634\u0645\u0627 \u062A\u0627 \u062F\u0648 \u0631\u0648\u0632 \u06A9\u0627\u0631\u06CC \u067E\u0633 \u0627\u0632 \u062A\u0627\u06CC\u06CC\u062F \u0648\u0627\u062D\u062F \u0645\u0627\u0644\u06CC \u062F\u0631 \u0627\u06CC\u0646 \u0628\u062E\u0634 \u0642\u0627\u0628\u0644 \u0645\u0634\u0627\u0647\u062F\u0647 \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F. "),
    r())
}
function vl(t, o) {
    if (t & 1 && (a(0, "div")(1, "div", 3)(2, "div"),
    l(3, "\u062A\u0639\u062F\u0627\u062F \u0646\u0647\u0627\u06CC\u06CC \u0648\u0627\u062D\u062F\u0647\u0627"),
    r(),
    a(4, "div")(5, "span", 7),
    l(6),
    S(7, "number"),
    r(),
    a(8, "small", 13),
    l(9, "\u0648\u0627\u062D\u062F"),
    r()()(),
    a(10, "div", 3)(11, "div"),
    l(12, "\u0642\u06CC\u0645\u062A \u0646\u0647\u0627\u06CC\u06CC \u0647\u0631 \u0648\u0627\u062D\u062F"),
    r(),
    a(13, "div")(14, "span", 7),
    l(15),
    S(16, "number"),
    r(),
    a(17, "span", 13),
    l(18, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()(),
    a(19, "div", 3)(20, "div"),
    l(21, "\u0645\u0628\u0644\u063A \u06A9\u0644"),
    r(),
    a(22, "div")(23, "span", 7),
    l(24),
    S(25, "number"),
    r(),
    a(26, "span", 13),
    l(27, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()()()),
    t & 2) {
        let u = d();
        s(6),
        T(A(7, 3, u.transaction().result.approvedCount)),
        s(9),
        T(A(16, 5, u.transaction().result.approvedAmount / u.transaction().result.approvedCount)),
        s(9),
        T(A(25, 7, u.transaction().result.approvedAmount))
    }
}
function bl(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 14)(1, "span", 15),
        l(2, " \u0644\u063A\u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0628\u0637\u0627\u0644"),
        r(),
        a(3, "button", 16),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.closeModal())
        }),
        _(4, "span", 17),
        r()(),
        a(5, "div", 18),
        l(6, " \u0622\u06CC\u0627 \u0645\u0627\u06CC\u0644 \u0628\u0647 \u0644\u063A\u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0628\u0637\u0627\u0644 \u0648\u0627\u062D\u062F \u0647\u0627 \u0647\u0633\u062A\u06CC\u062F\u061F "),
        a(7, "div", 19),
        _(8, "svg-icon", 20),
        l(9, " \u0644\u063A\u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0641\u0642\u0637 \u062A\u0627 \u0642\u0628\u0644 \u0627\u0632 \u062A\u0627\u06CC\u06CC\u062F \u0648\u0627\u062D\u062F \u0645\u0627\u0644\u06CC \u0627\u0645\u06A9\u0627\u0646 \u067E\u0630\u06CC\u0631 \u0627\u0633\u062A. "),
        r()(),
        a(10, "div", 21)(11, "div", 22)(12, "button", 23),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.closeModal())
        }),
        l(13, "\u0628\u0627\u0632\u06AF\u0634\u062A"),
        r(),
        a(14, "button", 24),
        h("click", function() {
            let n;
            g(u);
            let i = d();
            return i.closeModal(),
            v(i.cancelRequest((n = i.transaction().request) == null ? null : n.requestId))
        }),
        l(15, " \u0644\u063A\u0648 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0628\u0637\u0627\u0644 "),
        r()()()
    }
    if (t & 2) {
        let u = d();
        s(8),
        m("iconName", u.icons.InfoBox)
    }
}
var Xu = ( () => {
    let o = class o extends _n {
        constructor(e) {
            super(),
            this.fundFacade = e,
            this.cancelRequestTemplate = it("cancelRequestTemplate"),
            this.transaction = w(null),
            this.canceledState = J(),
            this.loading = !1,
            this.icons = O
        }
        get FundTransactionStatus() {
            return ce
        }
        cancelRequest(e) {
            this.loading = !0;
            let n = {
                requestId: +e,
                fundCode: this.transaction().fundCode
            };
            this.fundFacade.cancelRedemptionIssuance(n).pipe(me( () => this.loading = !1)).subscribe( () => {
                this.transaction().request.status = ce.Canceled,
                this.transaction().request.stateClass = ge.TransactionStateClass[this.transaction().request.status],
                this.transaction().result.status = ce.NotStarted,
                this.transaction().result.stateClass = ge.TransactionStateClass[this.transaction().result.status],
                this.canceledState.emit()
            }
            )
        }
        openModal() {
            this.modalService.open(this.cancelRequestTemplate())
        }
        closeModal() {
            this.modalService.dismissAll()
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(ue))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["user-fund-transaction-item-sell"]],
        viewQuery: function(n, i) {
            n & 1 && ut(i.cancelRequestTemplate, dl, 5),
            n & 2 && bt()
        },
        inputs: {
            transaction: [1, "transaction"]
        },
        outputs: {
            canceledState: "canceledState"
        },
        features: [sn],
        decls: 38,
        vars: 24,
        consts: [["cancelRequestTemplate", ""], [1, "fund-detail-tree", "px-3"], [1, "pb-2", "ps-4"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "fs-7", "fund-detail-tree-item"], [1, "iconFund"], [1, "text-body-tertiary", "small", "d-block"], [1, "text-global", "fs-7"], [1, "text-warning"], [1, "text-danger"], [1, "text-muted"], [3, "click"], ["width", "18", "height", "18", 1, "cup", "text-danger", 3, "iconName"], [1, "text-body-tertiary"], [1, "modal-header", "align-items-center"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", "m-0", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "py-4"], [1, "text-global", "mt-3"], ["width", "18", "height", "18", 1, "", 3, "iconName"], [1, "modal-footer"], [1, "m-0", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
        template: function(n, i) {
            if (n & 1 && (a(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4),
            _(4, "span", 5),
            a(5, "div"),
            l(6, " \u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0628\u0637\u0627\u0644 "),
            a(7, "span", 6),
            l(8),
            S(9, "jdate"),
            r()()(),
            C(10, ml, 4, 1, "span")(11, pl, 2, 0, "span"),
            r(),
            C(12, fl, 9, 3, "div", 3),
            a(13, "div", 3)(14, "div"),
            l(15, "\u0634\u0645\u0627\u0631\u0647 \u062F\u0631\u062E\u0648\u0627\u0633\u062A"),
            r(),
            a(16, "div")(17, "span", 7),
            l(18),
            r()()(),
            a(19, "div", 3)(20, "div"),
            l(21, "\u062D\u0633\u0627\u0628 \u0645\u0642\u0635\u062F"),
            r(),
            a(22, "div")(23, "span", 7),
            l(24),
            r()()(),
            C(25, Cl, 6, 1, "div", 3),
            r(),
            a(26, "div", 2)(27, "div", 3)(28, "div", 4),
            _(29, "span", 5),
            l(30, " \u0627\u0628\u0637\u0627\u0644 \u0648\u0627\u062D\u062F\u0647\u0627 "),
            r(),
            C(31, hl, 3, 3, "span", 6)(32, yl, 2, 0, "span", 8)(33, _l, 2, 0, "span", 9),
            r(),
            C(34, gl, 2, 0, "div", 10)(35, vl, 28, 9, "div"),
            r()(),
            C(36, bl, 16, 1, "ng-template", null, 0, qt)),
            n & 2) {
                let c, p, b, x, D;
                s(),
                Y((c = i.transaction().request) == null ? null : c.stateClass),
                s(7),
                T(A(9, 16, (p = i.transaction().request) == null ? null : p.requestDate)),
                s(2),
                f(!Oe(18, Zu, i.FundTransactionStatus.Failed, i.FundTransactionStatus.Canceled).includes(i.transaction().request.status) && Oe(21, Zu, i.FundTransactionStatus.InProgress, i.FundTransactionStatus.NotStarted).includes(i.transaction().result.status) ? 10 : -1),
                s(),
                f(i.transaction().request.status === i.FundTransactionStatus.Canceled ? 11 : -1),
                s(),
                f(i.transaction().request.count ? 12 : -1),
                s(6),
                T(i.transaction().request.requestId),
                s(6),
                T((b = i.transaction().request) != null && b.bankName ? (b = i.transaction().request) == null ? null : b.bankName : "\u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC"),
                s(),
                f((x = i.transaction().request) != null && x.iban ? 25 : -1),
                s(),
                Y((D = i.transaction().result) == null ? null : D.stateClass),
                s(5),
                f(i.transaction().result.status === i.FundTransactionStatus.Done ? 31 : -1),
                s(),
                f(i.transaction().result.status === i.FundTransactionStatus.InProgress ? 32 : -1),
                s(),
                f(i.transaction().result.status === i.FundTransactionStatus.Failed ? 33 : -1),
                s(),
                f(i.transaction().result.approvedAmount ? -1 : 34),
                s(),
                f(i.transaction().result.status === i.FundTransactionStatus.Done && i.transaction().result.approvedAmount ? 35 : -1)
            }
        },
        dependencies: [le, se, B, Ut],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var xl = t => ({
    hasBuyOrSell: t
})
  , Sl = (t, o) => ({
    "border-success": t,
    "border-danger": o
})
  , Fl = t => ({
    "rotate-180": t
});
function Tl(t, o) {
    t & 1 && (a(0, "span", 6),
    l(1, "\u0635\u062F\u0648\u0631"),
    r())
}
function Il(t, o) {
    t & 1 && (a(0, "span", 7),
    l(1, "\u0627\u0628\u0637\u0627\u0644"),
    r())
}
function Al(t, o) {
    t & 1 && (a(0, "span", 8),
    l(1, "(\u0633\u0647\u0645 \u06A9\u0627\u0631\u0645\u0646\u062F)"),
    r())
}
function wl(t, o) {
    t & 1 && (a(0, "span", 8),
    l(1, "(\u0633\u0647\u0645 \u06A9\u0627\u0631\u0641\u0631\u0645\u0627)"),
    r())
}
function kl(t, o) {
    if (t & 1 && (a(0, "div", 10)(1, "span", 13),
    l(2),
    S(3, "number"),
    a(4, "span", 14),
    l(5, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()(),
    a(6, "span", 15),
    l(7),
    r()()),
    t & 2) {
        let u, e = d();
        s(2),
        F("", A(3, 4, (u = e.transaction().request) == null ? null : u.amount), " "),
        s(4),
        Y(e.currentStyle()),
        s(),
        T(e.currentState())
    }
}
function El(t, o) {
    if (t & 1 && (a(0, "div", 10)(1, "span", 13),
    l(2),
    S(3, "number"),
    a(4, "span", 14),
    l(5, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()(),
    a(6, "span", 15),
    l(7),
    r()()),
    t & 2) {
        let u, e = d();
        s(2),
        F("", A(3, 4, (u = e.transaction().request) == null ? null : u.amount), " "),
        s(4),
        Y(e.currentStyle()),
        s(),
        T(e.currentState())
    }
}
function Dl(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "user-fund-transaction-item-buy", 17),
        h("canceledState", function() {
            g(u);
            let n = d(2);
            return v(n.onCanceledRequest())
        }),
        r()
    }
    if (t & 2) {
        let u = d(2);
        m("transaction", u.transaction())
    }
}
function Ml(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "user-fund-transaction-item-sell", 17),
        h("canceledState", function() {
            g(u);
            let n = d(2);
            return v(n.onCanceledRequest())
        }),
        r()
    }
    if (t & 2) {
        let u = d(2);
        m("transaction", u.transaction())
    }
}
function Nl(t, o) {
    if (t & 1 && C(0, Dl, 1, 1, "user-fund-transaction-item-buy", 16)(1, Ml, 1, 1, "user-fund-transaction-item-sell", 16),
    t & 2) {
        let u, e, n = d();
        f((u = n.transaction()) != null && u.issueFinancialResult ? 0 : -1),
        s(),
        f((e = n.transaction()) != null && e.issueFinancialResult ? -1 : 1)
    }
}
var ea = ( () => {
    let o = class o {
        constructor() {
            this.isMobile = w(!1),
            this.side = w(ae),
            this.transaction = w(null),
            this.currentState = E(""),
            this.currentStyle = E(""),
            this.loading = !1,
            this.icons = O,
            this.PensionFundType = di
        }
        ngOnInit() {
            this.transaction()?.issueFinancialResult ? this.checkBuyTransaction() : this.checkSellTransaction()
        }
        onCanceledRequest() {
            this.currentState.set("\u0644\u063A\u0648 \u0634\u062F\u0647"),
            this.currentStyle.set("text-secondary")
        }
        checkBuyTransaction() {
            if ([ce.InProgress].includes(this.transaction()?.request?.status)) {
                this.currentState.set("\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u062A\u0627\u06CC\u06CC\u062F"),
                this.currentStyle.set("text-warning");
                return
            }
            if ([ce.Failed, ce.Canceled].includes(this.transaction().request?.status)) {
                this.currentState.set("\u0644\u063A\u0648 \u0634\u062F\u0647"),
                this.currentStyle.set("text-secondary");
                return
            }
            if ([ce.InProgress].includes(this.transaction().issueFinancialResult?.status)) {
                this.currentState.set("\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u062A\u0627\u06CC\u06CC\u062F"),
                this.currentStyle.set("text-warning");
                return
            }
            if ([ce.Failed, ce.Canceled].includes(this.transaction().issueFinancialResult?.status)) {
                this.currentState.set("\u0646\u0627\u06CC\u06CC\u062F \u0646\u0634\u062F\u0647"),
                this.currentStyle.set("text-danger");
                return
            }
            if ([ce.InProgress].includes(this.transaction().fundResult?.status)) {
                this.currentState.set("\u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645"),
                this.currentStyle.set("text-warning");
                return
            }
            if ([ce.Failed, ce.Canceled].includes(this.transaction().fundResult?.status)) {
                this.currentState.set("\u0646\u0627\u0645\u0648\u0641\u0642"),
                this.currentStyle.set("text-danger");
                return
            }
            if ([ce.Done].includes(this.transaction().fundResult?.status)) {
                this.currentState.set("\u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647"),
                this.currentStyle.set("text-success");
                return
            }
        }
        checkSellTransaction() {
            if ([ce.InProgress].includes(this.transaction()?.request?.status)) {
                this.currentState.set("\u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645"),
                this.currentStyle.set("text-warning");
                return
            }
            if ([ce.Failed, ce.Canceled].includes(this.transaction()?.request?.status)) {
                this.currentState.set("\u0644\u063A\u0648 \u0634\u062F\u0647"),
                this.currentStyle.set("text-secondary");
                return
            }
            if ([ce.InProgress].includes(this.transaction().result?.status)) {
                this.currentState.set("\u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062C\u0627\u0645"),
                this.currentStyle.set("text-warning");
                return
            }
            if ([ce.Done].includes(this.transaction().result?.status)) {
                this.currentState.set("\u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647"),
                this.currentStyle.set("text-success");
                return
            }
            if ([ce.Failed, ce.Canceled].includes(this.transaction().result?.status)) {
                this.currentState.set("\u0646\u0627\u0645\u0648\u0641\u0642"),
                this.currentStyle.set("text-danger");
                return
            }
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["user-fund-transaction-item"]],
        inputs: {
            isMobile: [1, "isMobile"],
            side: [1, "side"],
            transaction: [1, "transaction"]
        },
        decls: 25,
        vars: 24,
        consts: [[1, "bg-principal", "bg-principal-7x-dark", "bg-principal-3x-dark-mobile", "bg-principal-hover", "rounded", "mb-2", 3, "ngClass"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "px-3", "py-2"], [1, "border", "border-2", "border-success", "me-2", "flex-shrink-0", "overflow-hidden", 2, "border-radius", "12px", "padding", "3px", 3, "ngClass"], ["width", "28", "height", "28", 1, "text-white", "p-1", 2, "border-radius", "8px", 3, "iconName"], [1, "me-auto"], [1, "text-body-tertiary"], [1, "text-success", "fw-bold"], [1, "text-danger", "fw-bold"], [1, "text-body-tertiary", "small", "fw-bold"], [1, "fs-6"], [1, "text-end"], ["data-cy", "transaction-show-detail-btn", 1, "d-flex", "align-items-center", "justify-content-between", "px-3", "py-2", "cup", 3, "click"], ["width", "20", "height", "20", 1, "", 3, "iconName", "ngClass"], [1, "text-base", "fw-bold", "d-block", "fs-6"], [1, "text-body-tertiary", "fw-normal", "small"], [1, "small"], [3, "transaction"], [3, "canceledState", "transaction"]],
        template: function(n, i) {
            if (n & 1 && (a(0, "div", 0)(1, "div", 1)(2, "div", 2),
            _(3, "svg-icon", 3),
            r(),
            a(4, "div", 4)(5, "div")(6, "span", 5),
            l(7, "\u0633\u0641\u0627\u0631\u0634"),
            r(),
            C(8, Tl, 2, 0, "span", 6)(9, Il, 2, 0, "span", 7)(10, Al, 2, 0, "span", 8)(11, wl, 2, 0, "span", 8),
            r(),
            a(12, "div", 9),
            l(13),
            r()(),
            C(14, kl, 8, 6, "div", 10)(15, El, 8, 6, "div", 10),
            r(),
            a(16, "div", 11),
            h("click", function() {
                return i.transaction().showDetails = !i.transaction().showDetails
            }),
            a(17, "div", 5),
            l(18),
            S(19, "jdate"),
            r(),
            a(20, "div")(21, "span"),
            l(22, "\u062C\u0632\u0626\u06CC\u0627\u062A"),
            r(),
            _(23, "svg-icon", 12),
            r()(),
            C(24, Nl, 2, 2),
            r()),
            n & 2) {
                let c, p, b, x, D, j, K, L, Le;
                m("ngClass", q(17, xl, (c = i.transaction()) == null ? null : c.issueFinancialResult)),
                s(2),
                m("ngClass", Oe(19, Sl, (p = i.transaction()) == null ? null : p.issueFinancialResult, !((p = i.transaction()) != null && p.issueFinancialResult))),
                s(),
                Y(i.transaction().logo),
                m("iconName", i.transaction().logo),
                s(5),
                f((b = i.transaction()) != null && b.issueFinancialResult ? 8 : 9),
                s(2),
                f(((x = i.transaction()) == null || x.fundResult == null ? null : x.fundResult.pensionFundType) === i.PensionFundType.Employee || ((x = i.transaction()) == null || x.result == null ? null : x.result.pensionFundType) === i.PensionFundType.Employee ? 10 : -1),
                s(),
                f(((D = i.transaction()) == null || D.fundResult == null ? null : D.fundResult.pensionFundType) === i.PensionFundType.Employer || ((D = i.transaction()) == null || D.result == null ? null : D.result.pensionFundType) === i.PensionFundType.Employer ? 11 : -1),
                s(2),
                T(i.transaction().fundName),
                s(),
                f((j = i.transaction()) != null && j.issueFinancialResult ? 14 : -1),
                s(),
                f((K = i.transaction()) != null && K.issueFinancialResult ? -1 : 15),
                s(3),
                F("\u062A\u0627\u0631\u06CC\u062E \u062A\u0631\u0627\u06A9\u0646\u0634: ", A(19, 15, (L = i.transaction().request) == null ? null : L.requestDate), ""),
                s(5),
                m("iconName", i.icons.ChevronDown)("ngClass", q(22, Fl, (Le = i.transaction()) == null ? null : Le.showDetails)),
                s(),
                f(i.transaction().showDetails ? 24 : -1)
            }
        },
        dependencies: [z, Ju, Xu, B, se, Ut],
        styles: [`.disabledDiv[_ngcontent-%COMP%]{pointer-events:none!important;opacity:.4!important}[class*=border-].border-success[_ngcontent-%COMP%]{border-color:#1bbf89!important}[class*=border-].border-danger[_ngcontent-%COMP%]{border-color:#db524b!important}
/*# sourceMappingURL=user-fund-transaction-item.component-VPMIFH2H.css.map */`],
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
function Pl(t, o) {
    return this.trackByFn
}
var Qi = t => ({
    active: t
})
  , Ji = t => ({
    loading: t
});
function Vl(t, o) {
    if (t & 1 && _(0, "user-fund-transaction-item", 6),
    t & 2) {
        let u = o.$implicit;
        m("transaction", u)
    }
}
function Ol(t, o) {
    if (t & 1 && _(0, "svg-icon", 10),
    t & 2) {
        let u = d(4);
        m("iconName", u.icons.Loading)
    }
}
function Bl(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 7)(1, "button", 9),
        h("click", function() {
            g(u);
            let n = d(3);
            return v(n.loadMore())
        }),
        l(2, " \u0628\u06CC\u0634\u062A\u0631 "),
        C(3, Ol, 1, 1, "svg-icon", 10),
        r()()
    }
    if (t & 2) {
        let u = d(3);
        s(),
        m("disabled", u.loadingMore()),
        s(2),
        f(u.loadingMore() ? 3 : -1)
    }
}
function Rl(t, o) {
    if (t & 1 && (a(0, "div", 8),
    _(1, "svg-icon", 11),
    l(2, " \u062A\u0631\u0627\u06A9\u0646\u0634\u06CC \u062C\u0647\u062A \u0646\u0645\u0627\u06CC\u0634 \u06CC\u0627\u0641\u062A \u0646\u0634\u062F "),
    r()),
    t & 2) {
        let u = d(3);
        s(),
        m("iconName", u.icons.TransactionBox)
    }
}
function Wl(t, o) {
    if (t & 1 && (a(0, "div", 5),
    ne(1, Vl, 1, 1, "user-fund-transaction-item", 6, Pl, !0),
    C(3, Bl, 4, 2, "div", 7)(4, Rl, 3, 1, "div", 8),
    r()),
    t & 2) {
        let u = d(2);
        s(),
        ie(u.transactionIssuance()),
        s(2),
        f(u.hasMore() ? 3 : -1),
        s(),
        f(!u.loading() && !u.transactionIssuance().length ? 4 : -1)
    }
}
function $l(t, o) {
    if (t & 1 && (a(0, "div", 4),
    C(1, Wl, 5, 2, "div", 5),
    r()),
    t & 2) {
        let u = d();
        m("ngClass", q(2, Ji, u.loading())),
        s(),
        f(u.transactionIssuance() ? 1 : -1)
    }
}
function ql(t, o) {
    if (t & 1 && _(0, "user-fund-transaction-item", 6),
    t & 2) {
        let u = o.$implicit;
        m("transaction", u)
    }
}
function jl(t, o) {
    if (t & 1 && _(0, "svg-icon", 12),
    t & 2) {
        let u = d(4);
        m("iconName", u.icons.Loading)
    }
}
function Ul(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 7)(1, "button", 9),
        h("click", function() {
            g(u);
            let n = d(3);
            return v(n.loadMore())
        }),
        l(2, " \u0628\u06CC\u0634\u062A\u0631 "),
        C(3, jl, 1, 1, "svg-icon", 12),
        r()()
    }
    if (t & 2) {
        let u = d(3);
        s(),
        m("disabled", u.loadingMore()),
        s(2),
        f(u.loadingMore() ? 3 : -1)
    }
}
function Ll(t, o) {
    if (t & 1 && (a(0, "div", 8),
    _(1, "svg-icon", 11),
    l(2, " \u062A\u0631\u0627\u06A9\u0646\u0634\u06CC \u062C\u0647\u062A \u0646\u0645\u0627\u06CC\u0634 \u06CC\u0627\u0641\u062A \u0646\u0634\u062F "),
    r()),
    t & 2) {
        let u = d(3);
        s(),
        m("iconName", u.icons.TransactionBox)
    }
}
function Hl(t, o) {
    if (t & 1 && (a(0, "div", 5),
    ne(1, ql, 1, 1, "user-fund-transaction-item", 6, Me),
    C(3, Ul, 4, 2, "div", 7)(4, Ll, 3, 1, "div", 8),
    r()),
    t & 2) {
        let u = d(2);
        s(),
        ie(u.transactionRedemption()),
        s(2),
        f(u.hasMore() ? 3 : -1),
        s(),
        f(!u.loading() && !u.transactionRedemption().length ? 4 : -1)
    }
}
function zl(t, o) {
    if (t & 1 && (a(0, "div", 4),
    C(1, Hl, 5, 2, "div", 5),
    r()),
    t & 2) {
        let u = d();
        m("ngClass", q(2, Ji, u.loading())),
        s(),
        f(u.transactionRedemption() ? 1 : -1)
    }
}
function Gl(t, o) {
    if (t & 1 && _(0, "user-fund-transaction-item", 6),
    t & 2) {
        let u = o.$implicit;
        m("transaction", u)
    }
}
function Kl(t, o) {
    if (t & 1 && _(0, "svg-icon", 12),
    t & 2) {
        let u = d(4);
        m("iconName", u.icons.Loading)
    }
}
function Yl(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 7)(1, "button", 9),
        h("click", function() {
            g(u);
            let n = d(3);
            return v(n.loadMore())
        }),
        l(2, " \u0628\u06CC\u0634\u062A\u0631 "),
        C(3, Kl, 1, 1, "svg-icon", 12),
        r()()
    }
    if (t & 2) {
        let u = d(3);
        s(),
        m("disabled", u.loadingMore()),
        s(2),
        f(u.loadingMore() ? 3 : -1)
    }
}
function Ql(t, o) {
    if (t & 1 && (a(0, "div", 8),
    _(1, "svg-icon", 11),
    l(2, " \u062A\u0631\u0627\u06A9\u0646\u0634\u06CC \u062C\u0647\u062A \u0646\u0645\u0627\u06CC\u0634 \u06CC\u0627\u0641\u062A \u0646\u0634\u062F "),
    r()),
    t & 2) {
        let u = d(3);
        s(),
        m("iconName", u.icons.TransactionBox)
    }
}
function Jl(t, o) {
    if (t & 1 && (a(0, "div", 5),
    ne(1, Gl, 1, 1, "user-fund-transaction-item", 6, Me),
    C(3, Yl, 4, 2, "div", 7)(4, Ql, 3, 1, "div", 8),
    r()),
    t & 2) {
        let u = d(2);
        s(),
        ie(u.transactionAll()),
        s(2),
        f(u.hasMore() ? 3 : -1),
        s(),
        f(!u.loading() && !u.transactionAll().length ? 4 : -1)
    }
}
function Zl(t, o) {
    if (t & 1 && (a(0, "div", 4),
    C(1, Jl, 5, 2, "div", 5),
    r()),
    t & 2) {
        let u = d();
        m("ngClass", q(2, Ji, u.loading())),
        s(),
        f(u.transactionAll() ? 1 : -1)
    }
}
var ta = ( () => {
    let o = class o {
        constructor(e, n) {
            this.fundFacade = e,
            this.accountService = n,
            this.transactionAll = M(this.fundFacade.transactionAll$),
            this.transactionRedemption = M(this.fundFacade.transactionRedemption$),
            this.transactionIssuance = M(this.fundFacade.transactionIssuance$),
            this.hasMore = E(!1),
            this.loadingMore = E(!1),
            this.loading = E(!0),
            this.fundCode = ot(""),
            this.icons = O,
            this.destroyRef = y(ht),
            this.side = ae.All,
            this.pageSize = 10,
            this.loadOption = {
                page: 0,
                size: this.pageSize
            },
            this.subs = [],
            this.destroyRef$ = y(ht),
            this.trackByFn = i => i.id
        }
        get FundSide() {
            return ae
        }
        ngOnInit() {
            this.fundFacade.fundPageState$.pipe(Ge(this.destroyRef)).subscribe(e => {
                this.fundCode.set(e.activeFund?.code)
            }
            ),
            this.fundFacade.transactionReload.pipe(Ge(this.destroyRef)).subscribe( () => {
                this.refreshData(),
                this.loadData()
            }
            )
        }
        loadData() {
            this.side === ae.Buy ? this.loadIssuanceTransactions() : this.side === ae.Sell ? this.loadRedemptionTransactions() : this.side === ae.All && this.loadAllTransactions()
        }
        loadAllTransactions() {
            this.loading.set(!this.loadingMore()),
            this.accountService.userAccountInfo.pipe(Je(e => this.fundFacade.loadAllTransactions(this.fundCode(), this.loadOption, e?.nationalId)), V(e => this.checkForMore(e.length)), H( () => (this.loading.set(!1),
            this.loadingMore.set(!1),
            Z(null))), Ge(this.destroyRef$)).subscribe()
        }
        loadIssuanceTransactions() {
            this.loading.set(!this.loadingMore()),
            this.fundFacade.loadIssuanceTransactions(this.fundCode(), this.loadOption).pipe(V(e => this.checkForMore(e.length)), me( () => {
                this.loading.set(!1),
                this.loadingMore.set(!1)
            }
            ), Ge(this.destroyRef)).subscribe()
        }
        loadRedemptionTransactions() {
            this.loading.set(!this.loadingMore()),
            this.fundFacade.loadRedemptionTransactions(this.fundCode(), this.loadOption).pipe(V(e => this.checkForMore(e.length)), me( () => {
                this.loading.set(!1),
                this.loadingMore.set(!1)
            }
            ), Ge(this.destroyRef)).subscribe()
        }
        loadMore() {
            this.loadingMore.set(!0),
            this.loadOption.page += 1,
            this.loadData()
        }
        checkForMore(e) {
            this.loading.set(!1),
            this.loadingMore.set(!1),
            e === this.loadOption.size ? this.hasMore.set(!0) : this.hasMore.set(!1)
        }
        onBuyClick() {
            this.side !== ae.Buy && (this.refreshData(),
            this.side = ae.Buy,
            this.loadIssuanceTransactions())
        }
        onSellClick() {
            this.side !== ae.Sell && (this.refreshData(),
            this.side = ae.Sell,
            this.loadRedemptionTransactions())
        }
        onAllClick() {
            this.side !== ae.All && (this.refreshData(),
            this.side = ae.All,
            this.loadAllTransactions())
        }
        refreshData() {
            this.hasMore.set(!1),
            this.loadOption = {
                page: 0,
                size: this.pageSize
            },
            this.fundFacade.transactionIssuanceSubject.next([]),
            this.fundFacade.transactionRedemptionSubject.next([]),
            this.fundFacade.transactionAllSubject.next([])
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(ue),U(at))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["user-fund-transactions"]],
        inputs: {
            fundCode: [1, "fundCode"]
        },
        outputs: {
            fundCode: "fundCodeChange"
        },
        decls: 14,
        vars: 12,
        consts: [[1, "tabs-handler", "d-flex", "align-items-center", "flex-shrink-0", "px-2"], [1, "nav", "nav-tabs", "flex-grow-1", "gap-1"], [1, "nav-item", "text-center"], [1, "nav-link", "m-0", 3, "click", "ngClass"], [1, "overflow-hidden", "position-relative", "h-100", 3, "ngClass"], [1, "overflow-auto", "px-2", "pt-2", "h-100"], [3, "transaction"], [1, "my-2", "mx-auto", "text-center", 2, "min-width", "50%"], [1, "align-items-center", "d-flex", "flex-column", "h-100", "justify-content-center", "text-center", "text-muted"], [1, "btn", "btn-sm", "btn-outline-primary", "px-5", 3, "click", "disabled"], ["width", "18", "height", "18", 1, "spin", "ms-1", 3, "iconName"], ["width", "48", "height", "48", 1, "mb-2", 3, "iconName"], ["width", "18", "height", "18", 1, "spin", "ms-1", "loading", 3, "iconName"]],
        template: function(n, i) {
            n & 1 && (a(0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "span", 3),
            h("click", function() {
                return i.onAllClick()
            }),
            l(4, " \u0647\u0645\u0647 "),
            r()(),
            a(5, "li", 2)(6, "span", 3),
            h("click", function() {
                return i.onBuyClick()
            }),
            l(7, " \u0635\u062F\u0648\u0631 "),
            r()(),
            a(8, "li", 2)(9, "span", 3),
            h("click", function() {
                return i.onSellClick()
            }),
            l(10, " \u0627\u0628\u0637\u0627\u0644 "),
            r()()()(),
            C(11, $l, 2, 4, "div", 4)(12, zl, 2, 4, "div", 4)(13, Zl, 2, 4, "div", 4)),
            n & 2 && (s(3),
            m("ngClass", q(6, Qi, i.side === i.FundSide.All)),
            s(3),
            m("ngClass", q(8, Qi, i.side === i.FundSide.Buy)),
            s(3),
            m("ngClass", q(10, Qi, i.side === i.FundSide.Sell)),
            s(2),
            f(i.side === i.FundSide.Buy ? 11 : -1),
            s(),
            f(i.side === i.FundSide.Sell ? 12 : -1),
            s(),
            f(i.side === i.FundSide.All ? 13 : -1))
        },
        dependencies: [z, ea, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var Xl = (t, o) => ({
    "fund-overlay--show": t,
    "": o
});
function ec(t, o) {
    if (t & 1 && _(0, "fund-buy", 15),
    t & 2) {
        let u = d(2);
        Y(u.isMobile() ? "p-0" : "p-3"),
        m("isMobile", u.isMobile())("buyValues", u.fundPopup().value)
    }
}
function tc(t, o) {
    if (t & 1 && _(0, "fund-increase", 16),
    t & 2) {
        let u, e = d(2);
        Y(e.isMobile() ? "p-0" : "p-3"),
        m("isMobile", e.isMobile())("IncreaseValues", (u = e.fundPopup()) == null ? null : u.value)
    }
}
function nc(t, o) {
    if (t & 1 && _(0, "fund-operation-confirm", 14),
    t & 2) {
        let u, e = d(2);
        m("isMobile", e.isMobile())("confirmValues", (u = e.fundPopup()) == null ? null : u.value)
    }
}
function ic(t, o) {
    if (t & 1 && (a(0, "div", 11),
    C(1, ec, 1, 4, "fund-buy", 12)(2, tc, 1, 4, "fund-increase", 13)(3, nc, 1, 2, "fund-operation-confirm", 14),
    r()),
    t & 2) {
        let u = d();
        m("ngClass", Oe(4, Xl, u.showOverlay(), u.showOverlay() === !1)),
        s(),
        f(u.fundPopup().popupType === u.FundPopupType.Buy ? 1 : -1),
        s(),
        f(u.fundPopup().popupType === u.FundPopupType.Increase ? 2 : -1),
        s(),
        f(u.fundPopup().popupType === u.FundPopupType.Confirm ? 3 : -1)
    }
}
var na = ( () => {
    let o = class o {
        constructor(e, n) {
            this.fundFacade = e,
            this.overlayService = n,
            this.fundCode = w.required(),
            this.fund$ = oe(this.fundCode()).pipe(Ct(this.fundFacade.thirdPartyFunds$), k( ([i,c]) => (this.fundFacade.backFundPage(),
            c?.ipo.find(p => p.code === i)))),
            this.isMobile = w(!1),
            this.fund = M(this.fund$),
            this.fundPopup = M(this.fundFacade.fundPopupObs$),
            this.showOverlay = M(this.fundFacade.showOverlay$),
            this.FundPopupType = _e,
            this.FundSide = ae
        }
        openBuyForm() {
            this.isMobile() ? this.overlayService.showOverlay({
                component: Dt,
                input: [{
                    inputName: "isMobile",
                    inputValue: !0
                }, {
                    inputName: "buyValues",
                    inputValue: {
                        fund: this.fund(),
                        isNoneEtfSubscription: !0
                    }
                }],
                option: {
                    componentName: "FundBuyComponent"
                }
            }) : (this.fundFacade.showOverlay(),
            this.showPopup(_e.Buy, {
                fund: this.fund(),
                isNoneEtfSubscription: !0
            }),
            this.lastFormSelected = ae.Buy)
        }
        showPopup(e, n) {
            this.fundFacade.updateFundPopup(e, n)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(ue),U(ye))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["none-etf-subscription-fund"]],
        inputs: {
            fundCode: [1, "fundCode"],
            isMobile: [1, "isMobile"]
        },
        decls: 15,
        vars: 5,
        consts: [[1, "h-100", "d-flex", "flex-column"], [1, "pt-3", "px-3", "mb-3", "overflow-auto"], [1, "mb-3", "text-center"], [1, "fw-bold"], [1, "text-center", "mb-3", "mx-auto"], ["id", "ItemPreview"], ["media", "(max-width: 500px)", 1, "img-fluid", "rounded", 3, "srcset"], [1, "img-fluid", "rounded", 3, "src"], [1, "text-justify", 3, "innerHTML"], [1, "d-flex", "p-2", "mt-2", "flex-shrink-0", "mt-auto"], [1, "btn", "btn-outline-success", "flex-grow-1", 3, "click"], [1, "fund-overlay", "bg-principal", "bg-principal-4x-dark", "rounded-top-4", "shadow-lg", "z-2", 3, "ngClass"], [3, "class", "isMobile", "buyValues"], [3, "isMobile", "class", "IncreaseValues"], [1, "d-flex", "flex-column", "h-100", "overflow-hidden", 3, "isMobile", "confirmValues"], [3, "isMobile", "buyValues"], [3, "isMobile", "IncreaseValues"]],
        template: function(n, i) {
            if (n & 1 && (a(0, "div", 0)(1, "div", 1)(2, "div", 2),
            l(3, " \u067E\u0630\u06CC\u0631\u0647 \u0646\u0648\u06CC\u0633\u06CC \u0635\u0646\u062F\u0648\u0642 \u0635\u062F\u0648\u0631 \u0648 \u0627\u0628\u0637\u0627\u0644\u06CC "),
            a(4, "span", 3),
            l(5),
            r()(),
            a(6, "div", 4)(7, "picture", 5),
            _(8, "source", 6)(9, "img", 7),
            r()(),
            _(10, "div", 8),
            r(),
            a(11, "div", 9)(12, "button", 10),
            h("click", function() {
                return i.openBuyForm()
            }),
            l(13, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0635\u062F\u0648\u0631 \u0635\u0646\u062F\u0648\u0642"),
            r()()(),
            C(14, ic, 4, 7, "div", 11)),
            n & 2) {
                let c, p, b, x;
                s(5),
                T((c = i.fund()) == null ? null : c.name),
                s(3),
                He("srcset", "data:image/png;base64," + ((p = i.fund()) == null ? null : p.mobileImage)),
                s(),
                He("src", "data:image/png;base64," + ((b = i.fund()) == null ? null : b.image), Gn),
                s(),
                m("innerHTML", (x = i.fund()) == null ? null : x.description, Wt),
                s(4),
                f(!i.isMobile() && i.fundPopup() ? 14 : -1)
            }
        },
        dependencies: [z, et, he, Qt, Dt, Fn],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var ia = t => ({
    "bg-global": t
});
function oc(t, o) {
    if (t & 1 && (a(0, "div", 3)(1, "span", 5),
    l(2, "\u0627\u0631\u0632\u0634 \u0635\u0646\u062F\u0648\u0642\u200C\u0647\u0627"),
    r(),
    a(3, "div", 6)(4, "span", 7),
    l(5),
    S(6, "number"),
    r(),
    a(7, "span", 5),
    l(8, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()()()),
    t & 2) {
        let u = d();
        s(5),
        T(A(6, 1, u.assetsValueSignal()))
    }
}
function uc(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 4),
        Pi(),
        a(1, "svg", 8),
        l(2, " > "),
        _(3, "use", 9),
        r(),
        mo(),
        a(4, "div", 10),
        l(5, "\u062E\u0637\u0627 \u062F\u0631 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A"),
        r(),
        a(6, "button", 11),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.reloadData())
        }),
        l(7, "\u062A\u0644\u0627\u0634 \u0645\u062C\u062F\u062F"),
        r()()
    }
}
function ac(t, o) {
    if (t & 1 && (a(0, "div", 12)(1, "div", 3),
    _(2, "svg-icon", 15),
    a(3, "span", 16),
    l(4, " \u062F\u0631 \u062D\u0627\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A"),
    r()()()),
    t & 2) {
        let u = d(2);
        s(2),
        m("iconName", u.icons.Loading)
    }
}
function rc(t, o) {
    if (t & 1 && (a(0, "div", 13),
    l(1, " \u0635\u0646\u062F\u0648\u0642 \u0647\u0627\u06CC \u0645\u0646 "),
    _(2, "svg-icon", 17),
    r()),
    t & 2) {
        let u = d(2);
        s(2),
        Y(u.fundsFacade.loading$ ? "d-none" : "d-inline-block"),
        m("iconName", u.icons.Loading)
    }
}
function sc(t, o) {
    if (t & 1 && (a(0, "div", 29)(1, "span", 31),
    l(2),
    r(),
    a(3, "span", 32),
    l(4),
    S(5, "number"),
    r()()),
    t & 2) {
        let u = o.$implicit;
        s(2),
        T(u.name),
        s(),
        m("colorizeNumber", u.value),
        s(),
        T(+u.value == 0 ? "--" : ze(5, 3, u.value, "1.0-2") + "%")
    }
}
function lc(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 18),
        h("click", function() {
            let n = g(u).$implicit
              , i = d(2);
            return v(i.onItemClick(n.fundCode))
        }),
        a(1, "div", 19)(2, "div", 20)(3, "div", 21),
        _(4, "svg-icon", 22),
        r(),
        a(5, "div", 23)(6, "span"),
        l(7),
        r(),
        a(8, "span", 24),
        l(9),
        r()(),
        a(10, "div", 25)(11, "div")(12, "span", 26),
        l(13),
        S(14, "number"),
        r(),
        a(15, "span", 5),
        l(16, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
        r()(),
        a(17, "div", 27)(18, "span"),
        l(19),
        S(20, "number"),
        r(),
        a(21, "span", 5),
        l(22, "\u0648\u0627\u062D\u062F"),
        r()()()(),
        a(23, "div", 28),
        ne(24, sc, 6, 6, "div", 29, Me),
        a(26, "div", 30)(27, "span", 31),
        l(28, "\u062A\u0627\u0631\u06CC\u062E \u0628\u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062F\u0627\u0631\u0627\u06CC\u06CC"),
        r(),
        l(29),
        S(30, "jdate"),
        r()()()()
    }
    if (t & 2) {
        let u = o.$implicit;
        Ze("data-cy", "user-funds-" + u.fundCode),
        s(),
        m("id", "user-funds-" + u.fundCode),
        s(2),
        Y(u.logo),
        m("ngClass", q(18, ia, !u.logo)),
        s(),
        m("iconName", u.logo)("ngClass", q(20, ia, !u.logo)),
        s(3),
        T(u.name),
        s(2),
        T(u.title),
        s(4),
        T(A(14, 12, u.amount)),
        s(6),
        T(A(20, 14, u.count)),
        s(5),
        ie(u == null || u.progressPercents == null ? null : u.progressPercents.slice(1, 4)),
        s(5),
        F(" ", A(30, 16, u == null ? null : u.lastSync), " ")
    }
}
function cc(t, o) {
    if (t & 1 && (C(0, ac, 5, 1, "div", 12),
    S(1, "async"),
    C(2, rc, 3, 3, "div", 13),
    ne(3, lc, 31, 22, "div", 14, Me)),
    t & 2) {
        let u = d();
        f(A(1, 2, !u.userFundsSignal() && u.fundsFacade.loading$) ? 0 : -1),
        s(2),
        f(u.userFundsSignal().length ? 2 : -1),
        s(),
        ie(u.userFundsSignal())
    }
}
var oa = ( () => {
    let o = class o {
        constructor(e) {
            this.fundsFacade = e,
            this.icons = O,
            this.assetsValueSignal = M(this.fundsFacade.assetsValue$.pipe(k(n => Math.round(+n)))),
            this.userFundsSignal = M(this.fundsFacade.userFunds$.pipe(k(this.roundUserFunds))),
            this.retryLoading = M(this.fundsFacade.retryLoading$)
        }
        roundUserFunds(e) {
            return e?.map(n => W(P({}, n), {
                amount: Math.round(+n.amount)
            })) || []
        }
        onItemClick(e) {
            this.fundsFacade.showFundDetail(e)
        }
        reloadData() {
            this.subscription = this.fundsFacade.loadFundData().subscribe()
        }
        show(e) {
            return !!e.progressPercents?.slice(1, 4).reduce( (n, i) => n + +i.value, 0)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(ue))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["user-funds"]],
        decls: 7,
        vars: 3,
        consts: [[1, "d-none"], ["id", "fundsFacadeAlert", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M12 0.87793C12.3069 0.87793 12.6962 0.911609 13.0241 1.0307C13.7791 1.30489 14.1225 1.7131 14.5027 2.16498L14.5326 2.20051C15.6287 3.50221 17.1301 5.52401 18.8638 8.49604C21.001 12.1599 22.0535 15.2888 22.5574 17.2397L22.5658 17.2722C22.6183 17.4752 22.6807 17.7162 22.705 17.9698C22.7334 18.2669 22.7093 18.5485 22.6388 18.8651C22.571 19.1697 22.4068 19.4939 22.2702 19.7251C22.1337 19.9564 21.9291 20.2568 21.6951 20.4632C21.4621 20.6687 21.2385 20.8247 20.978 20.942C20.7521 21.0437 20.5262 21.1015 20.3486 21.1469L20.3486 21.1469L20.3188 21.1546C18.6852 21.5737 16.033 21.9999 12 21.9999C7.96696 21.9999 5.31484 21.5737 3.68119 21.1546L3.65143 21.1469C3.47377 21.1015 3.24787 21.0437 3.02198 20.942C2.76146 20.8247 2.53785 20.6687 2.3049 20.4632C2.07091 20.2568 1.86634 19.9564 1.72976 19.7251C1.59318 19.4939 1.42895 19.1697 1.36117 18.8651C1.29072 18.5485 1.26655 18.2669 1.29498 17.9698C1.31926 17.7162 1.38164 17.4752 1.43421 17.2722L1.44261 17.2397C1.94651 15.2888 2.99896 12.1599 5.13622 8.49604C6.86989 5.52401 8.37131 3.50221 9.46744 2.20051L9.49733 2.16498C9.8775 1.7131 10.2209 1.30489 10.9759 1.0307C11.3038 0.911609 11.6931 0.87793 12 0.87793ZM11.6591 2.91054C11.6576 2.91096 11.6574 2.911 11.6586 2.91056C11.5094 2.96477 11.4439 3.00963 11.3855 3.06007C11.2981 3.13551 11.2065 3.24026 10.9973 3.48875C9.97906 4.69794 8.54299 6.62512 6.86377 9.50378C4.83238 12.9862 3.84405 15.9396 3.37906 17.7399C3.31457 17.9895 3.2935 18.0808 3.28588 18.1604C3.28117 18.2096 3.27951 18.2762 3.31197 18.4241L3.31284 18.4265L3.31285 18.4265C3.3154 18.4339 3.32386 18.4583 3.34309 18.501C3.37013 18.561 3.40763 18.6332 3.45189 18.7081C3.49616 18.7831 3.5413 18.8508 3.58079 18.9035C3.6089 18.9409 3.62617 18.9601 3.63137 18.9659L3.63304 18.9678C3.75701 19.0766 3.813 19.1048 3.84312 19.1184C3.89547 19.1419 3.95816 19.1608 4.17826 19.2173C5.62402 19.5883 8.10611 19.9999 12 19.9999C15.8939 19.9999 18.376 19.5883 19.8217 19.2173C20.0418 19.1608 20.1045 19.1419 20.1569 19.1184C20.187 19.1048 20.243 19.0766 20.367 18.9678C20.3669 18.9678 20.3675 18.9672 20.3686 18.9659C20.3738 18.9601 20.3911 18.9409 20.4192 18.9035C20.4587 18.8508 20.5038 18.7831 20.5481 18.7081C20.5924 18.6332 20.6299 18.561 20.6569 18.501C20.6761 18.4582 20.6846 18.4338 20.6871 18.4265L20.688 18.4241C20.7205 18.2762 20.7188 18.2096 20.7141 18.1604C20.7065 18.0808 20.6854 17.9895 20.6209 17.7399C20.1559 15.9396 19.1676 12.9862 17.1362 9.50378C15.457 6.62512 14.0209 4.69794 13.0027 3.48875C12.7935 3.24026 12.7019 3.13551 12.6145 3.06007C12.5561 3.00963 12.4906 2.96477 12.3414 2.91056C12.3419 2.91076 12.3422 2.91086 12.3422 2.91087C12.3421 2.91088 12.3417 2.91077 12.3409 2.91054C12.3344 2.90881 12.3035 2.90049 12.2432 2.89255C12.1741 2.88346 12.0899 2.87793 12 2.87793C11.9101 2.87793 11.8259 2.88346 11.7568 2.89255C11.6965 2.90049 11.6656 2.90881 11.6591 2.91054ZM10.5 15.9999C10.5 15.4476 10.9477 14.9999 11.5 14.9999H12.5C13.0523 14.9999 13.5 15.4476 13.5 15.9999V16.9999C13.5 17.5522 13.0523 17.9999 12.5 17.9999H11.5C10.9477 17.9999 10.5 17.5522 10.5 16.9999V15.9999ZM13 6.99991C13 6.44762 12.5523 5.99991 12 5.99991C11.4477 5.99991 11 6.44762 11 6.99991V12.4999C11 13.0522 11.4477 13.4999 12 13.4999C12.5523 13.4999 13 13.0522 13 12.4999V6.99991Z", "fill", "currentColor"], [1, "text-center"], [1, "p-3", "text-center", "h-100", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "text-body-tertiary"], [1, "fs-5", "text-base"], [1, "fw-bold"], ["width", "36", "height", "36", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "text-muted", "mb-2"], ["href", "#fundsFacadeAlert"], [1, "h6"], [1, "btn", "btn-outline-primary", "mt-2", 3, "click"], [1, "d-flex", "flex-column", "align-items-center", "mb-4", "text-muted", "p-3"], [1, "fw-bold", "fs-7", "mb-2", "d-flex", "align-items-center", "justify-content-between"], [1, "cup"], ["width", "36", "height", "36", 1, "spin", 3, "iconName"], [1, "h6", "mb-0"], ["width", "18", "height", "18", 1, "spin", 3, "iconName"], [1, "cup", 3, "click"], [1, "bg-principal", "bg-principal-hover", "bg-principal-4x-dark", "bg-principal-3x-dark-mobile", "rounded", "mb-2", 3, "id"], [1, "d-flex", "align-items-center", "justify-content-between", "border-bottom", "px-3", "py-2", "fs-6"], [1, "me-2", "d-flex", "justify-content-center", "align-items-center", "flex-shrink-0", 2, "border-radius", "10px", "padding", "2px", 3, "ngClass"], ["width", "32", "height", "32", 1, "text-white", 3, "iconName", "ngClass"], [1, "me-auto", "d-flex", "flex-column"], [1, "small", "text-body-tertiary"], [1, "d-flex", "flex-column"], [1, "text-base", "fw-bold"], [1, "small", "text-end"], [1, "d-flex", "align-items-center", "justify-content-between", "px-3", "py-2"], [1, "text-center", "px-1"], [1, "text-body-tertiary", "ms-3", "text-center"], [1, "d-block"], ["dir", "ltr", 3, "colorizeNumber"]],
        template: function(n, i) {
            n & 1 && (Pi(),
            a(0, "svg", 0)(1, "symbol", 1),
            l(2, " > "),
            _(3, "path", 2),
            r()(),
            C(4, oc, 9, 3, "div", 3)(5, uc, 8, 0, "div", 4)(6, cc, 5, 4)),
            n & 2 && (s(4),
            f(i.assetsValueSignal() ? 4 : -1),
            s(),
            f(i.retryLoading() ? 5 : -1),
            s(),
            f(i.userFundsSignal() ? 6 : -1))
        },
        dependencies: [z, xt, le, se, mn, Ut, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var dc = t => ({
    backdropShow: t
})
  , mc = (t, o) => ({
    "": t,
    "fund-overlay--show": o
});
function pc(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 14),
        h("click", function() {
            g(u);
            let n = d(3);
            return v(n.openTransaction())
        }),
        l(1, " \u062A\u0631\u0627\u06A9\u0646\u0634\u200C\u0647\u0627\u06CC \u0645\u0646 "),
        _(2, "svg-icon", 15),
        r()
    }
    if (t & 2) {
        let u = d(3);
        s(2),
        m("iconName", u.icons.ChevronLeft)
    }
}
function fc(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 1),
        _(1, "user-funds", 6),
        C(2, pc, 3, 1, "div", 7),
        _(3, "all-funds", 8),
        a(4, "a", 9)(5, "span", 10),
        l(6, "\u0622\u0634\u0646\u0627\u06CC\u06CC \u0628\u0627 \u0635\u0646\u062F\u0648\u0642\u200C\u0647\u0627\u06CC \u0645\u0641\u06CC\u062F"),
        r(),
        a(7, "span", 11),
        l(8, " \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0628\u06CC\u0634\u062A\u0631 "),
        _(9, "svg-icon", 12),
        r()(),
        a(10, "div", 13),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.onShowConsult())
        }),
        a(11, "span", 10),
        l(12, "\u0645\u0634\u0627\u0648\u0631\u0647 \u0633\u0631\u0645\u0627\u06CC\u0647 \u06AF\u0630\u0627\u0631\u06CC \u062F\u0631 \u0635\u0646\u062F\u0648\u0642\u200C\u0647\u0627"),
        r(),
        a(13, "span", 11),
        l(14, " \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0645\u0634\u0627\u0648\u0631\u0647 "),
        _(15, "svg-icon", 12),
        r()()()
    }
    if (t & 2) {
        let u = d(2);
        s(),
        m("isMobile", u.isMobile()),
        s(),
        f(u.fundsFacade.hasTransaction ? 2 : -1),
        s(),
        m("isMobile", u.isMobile()),
        s(6),
        m("iconName", u.icons.ChevronLeft),
        s(6),
        m("iconName", u.icons.ChevronLeft)
    }
}
function Cc(t, o) {
    if (t & 1 && _(0, "fund-detail", 2),
    t & 2) {
        let u = d(2);
        m("isMobile", u.isMobile())("fund", u.fundPageState().activeFund)
    }
}
function hc(t, o) {
    t & 1 && _(0, "user-fund-transactions", 3)
}
function yc(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 4)(1, "fund-consult", 16),
        h("closeEvent", function() {
            g(u);
            let n = d(2);
            return v(n.onConsultClose())
        }),
        r()()
    }
    if (t & 2) {
        let u = d(2);
        m("ngClass", Oe(2, mc, !u.showConsult(), u.showConsult())),
        s(),
        m("isMobile", !1)
    }
}
function _c(t, o) {
    if (t & 1 && _(0, "none-etf-subscription-fund", 5),
    t & 2) {
        let u, e = d(2);
        m("isMobile", e.isMobile())("fundCode", (u = e.fundPageState().activeFund) == null ? null : u.code)
    }
}
function gc(t, o) {
    if (t & 1 && C(0, fc, 16, 5, "div", 1)(1, Cc, 1, 2, "fund-detail", 2)(2, hc, 1, 0, "user-fund-transactions", 3)(3, yc, 2, 5, "div", 4)(4, _c, 1, 2, "none-etf-subscription-fund", 5),
    t & 2) {
        let u = d();
        f(u.fundPageState().name === u.FundPageName.Fund ? 0 : -1),
        s(),
        f(u.fundPageState().name === u.FundPageName.FundDetail ? 1 : -1),
        s(),
        f(u.fundPageState().name === u.FundPageName.Transaction ? 2 : -1),
        s(),
        f(u.isMobile() ? -1 : 3),
        s(),
        f(u.fundPageState().name === u.FundPageName.NoneEtf ? 4 : -1)
    }
}
var _3 = ( () => {
    let o = class o {
        get FundPageName() {
            return ft
        }
        constructor(e, n, i, c, p) {
            this.easyKeyboardService = e,
            this.router = n,
            this.fundsFacade = i,
            this.route = c,
            this.overlayService = p,
            this.isMobile = w(!1),
            this.fundCode = ot(""),
            this.fundPageState = M(this.fundsFacade.fundPageState$),
            this.showConsult = E(!1),
            this.icons = O,
            this.showEasyKeyboard = !1,
            this.currentInputSelectedName = "",
            this.subs = []
        }
        ngOnDestroy() {
            this.fundsFacade.hideOverlay(),
            this.subs.forEach(e => {
                e.unsubscribe()
            }
            )
        }
        ngOnInit() {
            this.checkFundCode()
        }
        back() {
            this.showEasyKeyboard ? this.easyKeyboardService.changeState(!1) : this.router.navigate(["/menu"])
        }
        openTransaction() {
            this.fundsFacade.showTransactions()
        }
        onShowConsult() {
            this.isMobile() ? this.overlayService.showOverlay({
                component: Yi,
                input: [{
                    inputName: "isMobile",
                    inputValue: !0
                }],
                output: [{
                    outputName: "closeEvent",
                    closeForm: !0
                }],
                option: {
                    componentName: "FundConsultComponent"
                }
            }) : (this.fundsFacade.showOverlay(),
            this.showConsult.set(!0))
        }
        onConsultClose() {
            this.showConsult.set(!1),
            this.fundsFacade.hideOverlay()
        }
        checkFundCode() {
            if (this.fundCode()) {
                this.redirectToEtfOrNonEtf(this.fundCode());
                return
            }
            let e = this.route.params.pipe(V(n => {
                n.fundCode && (this.fundCode.set(n.fundCode),
                this.redirectToEtfOrNonEtf(this.fundCode()))
            }
            )).subscribe();
            this.subs.push(e)
        }
        redirectToEtfOrNonEtf(e) {
            this.fundsFacade.thirdPartyFunds$.pipe(kn(n => n !== void 0), V(n => {
                if (!e)
                    return;
                n?.ipo?.map(c => c.code).includes(e) ? this.fundsFacade.showNoneEtf(e) : this.fundsFacade.showEtf(this.fundCode())
            }
            )).subscribe()
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)(U(Zn),U(St),U(ue),U(To),U(ye))
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["fund"]],
        inputs: {
            isMobile: [1, "isMobile"],
            fundCode: [1, "fundCode"]
        },
        outputs: {
            fundCode: "fundCodeChange"
        },
        decls: 3,
        vars: 6,
        consts: [[1, "fund-backdrop", "overflow-hidden", "h-100", 3, "ngClass"], [1, "h-100", "overflow-auto", "p-2", "d-flex", "flex-column"], [3, "isMobile", "fund"], [1, "d-flex", "flex-column", "h-100"], [1, "fund-overlay", "bg-principal", "bg-principal-4x-dark", "rounded-top-4", "p-3", "shadow-lg", "z-2", 3, "ngClass"], [1, "h-100", "d-flex", "flex-column", 3, "isMobile", "fundCode"], [1, "mb-4", 3, "isMobile"], ["data-cy", "fund-all-transactions", 1, "align-items-center", "bg-principal-hover", "bg-principal-2x", "bg-principal-7x-dark", "bg-principal-3x-dark-mobile", "cup", "d-flex", "fs-7", "justify-content-between", "px-3", "py-2", "mb-4", "rounded", "flex-shrink-0"], [1, "mb-3", 3, "isMobile"], ["href", "https://learning.emofid.com/video/what-do-we-learn-in-the-investment-fund-course/", "target", "_blank", "id", "fund-introduction-investment", 1, "align-items-start", "flex-shrink-0", "bg-global", "bg-gradient", "cup", "d-flex", "fs-7", "justify-content-between", "mt-auto", "p-3", "rounded", "text-light", "flex-wrap"], [1, "me-3"], [1, "align-self-end", "opacity-6", "small", "ms-auto"], ["width", "18", "height", "18", 1, "", 3, "iconName"], ["id", "fund-consultation-investment", 1, "align-items-start", "flex-shrink-0", "bg-global-700", "bg-gradient", "cup", "d-flex", "fs-7", "justify-content-between", "mt-2", "p-3", "rounded", "text-light", "flex-wrap", 3, "click"], ["data-cy", "fund-all-transactions", 1, "align-items-center", "bg-principal-hover", "bg-principal-2x", "bg-principal-7x-dark", "bg-principal-3x-dark-mobile", "cup", "d-flex", "fs-7", "justify-content-between", "px-3", "py-2", "mb-4", "rounded", "flex-shrink-0", 3, "click"], ["width", "20", "height", "20", 1, "", 3, "iconName"], [3, "closeEvent", "isMobile"]],
        template: function(n, i) {
            n & 1 && (a(0, "div", 0),
            S(1, "async"),
            C(2, gc, 5, 5),
            r()),
            n & 2 && (m("ngClass", q(4, dc, A(1, 2, i.fundsFacade.showOverlay$))),
            s(2),
            f(i.fundPageState() ? 2 : -1))
        },
        dependencies: [z, xt, Gu, ta, Yi, na, oa, B, Yu],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
function ua(t, o) {
    if (t.ipoType === te.IpoSubscription)
        return {
            canOrder: !0,
            message: ""
        };
    if (t.dateStatus !== Ee.InRange)
        return {
            canOrder: !1,
            message: ""
        };
    if (o !== void 0) {
        if (o === 0)
            return {
                canOrder: !1,
                messageType: G.danger,
                message: "\u0628\u0631\u0627\u06CC \u062E\u0631\u06CC\u062F \u0639\u0631\u0636\u0647 \u0627\u0648\u0644\u06CC\u0647 \u0627\u0628\u062A\u062F\u0627 \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u0631\u0627 \u0634\u0627\u0631\u0698 \u06A9\u0646\u06CC\u062F"
            };
        if (o < t.maxMoneyNeeded)
            return {
                share: Math.floor(o / ((1 + t.commission) * t.maxPrice)),
                canOrder: !0,
                messageType: G.warning,
                message: `\u062A\u0639\u062F\u0627\u062F \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u06CC \u0628\u0647 \u0645\u06CC\u0632\u0627\u0646 \u0645\u0627\u0646\u062F\u0647 \u0634\u0645\u0627 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F\u060C \u062C\u0647\u062A \u062E\u0631\u06CC\u062F ${t.share} \u0633\u0647\u0645\u060C \u0645\u0627\u0646\u062F\u0647 \u062E\u0648\u062F \u0631\u0627 \u0634\u0627\u0631\u0698 \u0646\u0645\u0627\u06CC\u06CC\u062F `
            }
    }
    return {
        canOrder: !0,
        message: ""
    }
}
var Zi = t => t.ipoState
  , Xi = we(Zi, t => t ? Object?.values(t?.entities) : [])
  , eo = we(Zi, t => t?.entities)
  , to = we(Zi, t => t?.loading);
var hi = ( () => {
    let o = class o {
        constructor() {
            this.store = y(Ae),
            this.mappedIpos$ = this.store.select(Xi),
            this.mappedIpos = this.store.selectSignal(Xi),
            this.allIpoEntities$ = this.store.select(eo),
            this.allIpoEntities = this.store.selectSignal(eo),
            this.ipos = M(this.mappedIpos$.pipe(k(e => e.filter(n => n.ipoType === te.IPO) || []))),
            this.ipos$ = oe(this.ipos),
            this.ipoSubscriptions = M(this.mappedIpos$.pipe(k(e => e.filter(n => n.ipoType === te.IpoSubscription) || []))),
            this.ipoSubscriptions$ = oe(this.ipoSubscriptions),
            this.ipoLoading$ = this.store.select(to),
            this.ipoLoading = this.store.selectSignal(to)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var yi = ( () => {
    let o = class o extends ct {
        constructor() {
            super(...arguments),
            this.timeService = y(Tt),
            this.symbolService = y(nt),
            this.fundFacade = y(ue),
            this.ipoStore = y(hi),
            this.orderStore = y(qe),
            this.lastIpoApiCallDate = 0,
            this.serverDate = M(this.timeService.serverDateObs$),
            this.openSymbolDetail = new Ot,
            this.openSymbolDetail$ = this.openSymbolDetail.asObservable()
        }
        get ipoUrl() {
            return `${this.mtsPath + this.apiUrls.easy}MarketWatch/ipos`
        }
        getIpoAndNoneEtf(e=!1) {
            let n = new Date().getTime() / 1e3;
            return e || n - this.lastIpoApiCallDate > 5 ? (this.lastIpoApiCallDate = n,
            this.httpService.get(this.ipoUrl).pipe(k(i => (this.fundFacade.noneEtfs.set(i.noneEtfSubscriptions),
            {
                ipos: i.ipos,
                noneEtf: i.noneEtfSubscriptions
            })), H( () => (this.fundFacade.noneEtfs.set([]),
            gt)))) : gt
        }
    }
    ;
    o.\u0275fac = ( () => {
        let e;
        return function(i) {
            return (e || (e = Rt(o)))(i || o)
        }
    }
    )(),
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var on = Mi(Po());
var $n = (t, o, u, e, n) => {
    if (!e || e === "-")
        return Ee.WithoutTime;
    u || (u = o);
    let i, c, p, b;
    n ? (i = parseInt(e.substring(0, e.indexOf(":"))),
    c = parseInt(e.substring(e.indexOf(":") + 1)),
    p = parseInt(n.substring(0, n.indexOf(":"))),
    b = parseInt(n.substring(n.lastIndexOf(":") + 1))) : (i = parseInt(e.substring(0, e.indexOf(":"))),
    c = parseInt(e.substring(e.indexOf(":") + 1, e.indexOf("-"))),
    p = parseInt(e.substring(e.indexOf("-") + 1, e.lastIndexOf(":"))),
    b = parseInt(e.substring(e.lastIndexOf(":") + 1)));
    let x = on.default.from(o, "fa", "YYYY/M/D").toDate();
    x.setHours(i, c, 0, 0);
    let D = on.default.from(u, "fa", "YYYY/M/D").toDate();
    if (D.setHours(p, b, 0, 0),
    t.getTime() < x.getTime())
        return Ee.Smaller;
    if (t.getTime() > D.getTime())
        return Ee.Bigger;
    {
        let j = new Date(t);
        j.setHours(i, c, 0, 0);
        let K = new Date(t);
        return K.setHours(p, b, 0, 0),
        t < j || t > K ? Ee.Smaller : Ee.InRange
    }
}
  , qn = (t, o, u, e, n=te.IPO) => {
    let i = n === te.IPO ? "\u0639\u0631\u0636\u0647" : "\u067E\u0630\u06CC\u0631\u0647 \u0646\u0648\u06CC\u0633\u06CC"
      , {ipoDateState: c, dateDifferInDays: p, ipoTimeState: b, timeDifferInSeconds: x} = bc({
        start: on.default.from(t, "fa", "YYYY/M/D").toDate().getTime(),
        end: o ? on.default.from(o, "fa", "YYYY/M/D").toDate().getTime() : null
    }, {
        start: on.default.from(u ?? "00:00", "fa", "hh:mm").toDate().getTime(),
        end: on.default.from(e ?? "00:00", "fa", "hh:mm").toDate().getTime()
    })
      , D = {
        summaryTitle: "-",
        dateTitle: "\u0637\u0628\u0642 \u067E\u06CC\u0627\u0645 \u0646\u0627\u0638\u0631...",
        timeTitle: "\u0637\u0628\u0642 \u067E\u06CC\u0627\u0645 \u0646\u0627\u0638\u0631...",
        distanceTitle: "-",
        class: "",
        ipoDateState: c,
        dateDifferInDays: p,
        ipoTimeState: b,
        timeDifferInSeconds: x
    };
    return (u?.length > 0 || e?.length > 0) && (D.timeTitle = `${u?.length > 0 ? u : ""}${e?.length > 0 ? " \u062A\u0627 " + e : ""}`),
    (t?.length > 0 || o?.length > 0) && (D.dateTitle = `${t?.length > 0 ? t : ""}${o?.length > 0 ? " \u062A\u0627 " + o : ""}`),
    c === be.beforeDateRange && p > 0 ? (n === te.IPO ? D.summaryTitle = `${t} (${p} \u0631\u0648\u0632 \u062A\u0627 ${i} )` : D.summaryTitle = `${t} - ${o}`,
    D.distanceTitle = `(${p} \u0631\u0648\u0632 \u0645\u0627\u0646\u062F\u0647)`) : c === be.inDateRange ? u.length ? b === Pe.beforeTimeRange ? (D.summaryTitle = `\u0627\u0645\u0631\u0648\u0632, \u0633\u0627\u0639\u062A (${u}${e ? " - " + e : ""})`,
    D.distanceTitle = "\u0627\u0645\u0631\u0648\u0632") : b === Pe.inTimeRange ? (D.summaryTitle = `\u062F\u0631 \u062D\u0627\u0644 ${i}`,
    D.distanceTitle = `\u062F\u0631 \u062D\u0627\u0644 ${i}`,
    D.class = "text-success") : b === Pe.afterTimeRange && (D.summaryTitle = `\u0641\u0631\u062F\u0627, \u0633\u0627\u0639\u062A (${u}${e ? " - " + e : ""})`,
    D.distanceTitle = `\u0641\u0631\u062F\u0627, \u0633\u0627\u0639\u062A (${u}${e ? " - " + e : ""})`) : (D.summaryTitle = "\u0627\u0645\u0631\u0648\u0632, \u062A\u0627 \u0633\u0627\u0639\u0627\u062A\u06CC \u062F\u06CC\u06AF\u0631",
    D.distanceTitle = "\u0627\u0645\u0631\u0648\u0632, \u062A\u0627 \u0633\u0627\u0639\u0627\u062A\u06CC \u062F\u06CC\u06AF\u0631") : c === be.afterDateRange && (D.summaryTitle = `\u0627\u062A\u0645\u0627\u0645 ${i}`,
    D.distanceTitle = `\u0627\u062A\u0645\u0627\u0645 ${i}`),
    D
}
  , bc = (t, o) => {
    let u, e, n = new Date().setHours(0, 0, 0, 0), i = 0, c = new Date().getTime(), p = 0;
    if (n >= t.start)
        if (t.end && n <= t.end)
            if (u = isNaN(t.end) ? be.beforeDateRange : be.inDateRange,
            i = Math.round(Math.abs(t.end - n) / (1e3 * 3600 * 24)),
            o.start && c >= o.start)
                if (!o.end || c <= o.end)
                    e = Pe.inTimeRange;
                else {
                    e = Pe.afterTimeRange;
                    let b = new Date(n);
                    b.setDate(b.getDate() + 1);
                    let x = b.getTime();
                    if (x > t.end)
                        u = be.afterDateRange,
                        i = 0;
                    else if (x <= t.end) {
                        u = be.inDateRange;
                        let D = new Date(o.start);
                        D.setDate(D.getDate() + 1);
                        let j = D.getTime();
                        p = Math.floor(Math.abs(j - c) / 1e3)
                    }
                }
            else
                u = be.inDateRange,
                e = Pe.beforeTimeRange,
                p = isNaN(o.start) ? 3600 : Math.floor(Math.abs(o.start - c) / 1e3);
        else
            u = be.afterDateRange,
            i = Math.round(Math.abs(t.end - n) / (1e3 * 3600 * 24)),
            e = Pe.hasNoTime;
    else
        u = be.beforeDateRange,
        i = Math.round(Math.abs(t.start - n) / (1e3 * 3600 * 24)),
        e = Pe.beforeTimeRange;
    return {
        ipoDateState: u,
        dateDifferInDays: i,
        ipoTimeState: e,
        timeDifferInSeconds: p
    }
}
  , be = function(t) {
    return t[t.hasNoDate = 0] = "hasNoDate",
    t[t.beforeDateRange = 1] = "beforeDateRange",
    t[t.inDateRange = 2] = "inDateRange",
    t[t.afterDateRange = 3] = "afterDateRange",
    t
}(be || {})
  , Pe = function(t) {
    return t[t.hasNoTime = 0] = "hasNoTime",
    t[t.beforeTimeRange = 1] = "beforeTimeRange",
    t[t.inTimeRange = 2] = "inTimeRange",
    t[t.betweenTwoRange = 3] = "betweenTwoRange",
    t[t.afterTimeRange = 4] = "afterTimeRange",
    t
}(Pe || {});
var jn = class extends Pn {
    isSatisfiedBy(o) {
        return !!o.orderId && o.orderId?.length > 0 || o.state !== en.Offline
    }
}
  , _i = class extends Pn {
    isSatisfiedBy(o) {
        return o.state === en.Error
    }
}
;
var gi = class extends Pn {
    isSatisfiedBy(o) {
        return o.relatedMeta.distanceToDate.ipoTimeState === Pe.inTimeRange
    }
}
  , vi = class extends Pn {
    isSatisfiedBy(o) {
        let u = new Date().setHours(0, 0, 0, 0), e;
        try {
            e = o.sentDateTime?.length > 0 ? new Date(o.sentDateTime).setHours(0, 0, 0, 0) : void 0
        } catch {
            e = void 0
        }
        return !!e && e === u
    }
}
;
var aa = ( () => {
    let o = class o extends ct {
        constructor() {
            super(...arguments),
            this.orderStore = y(qe),
            this.store = y(Ae),
            this.symbolService = y(nt),
            this.offlineIposSub = E([]),
            this.offlineIposObs$ = oe(this.offlineIposSub)
        }
        get offlineIpoUrl() {
            return `${this.mtsPath + this.apiUrls.easy}offline-ipo`
        }
        getAllOfflineOrders(e) {
            return e.length <= 0 ? Z([]) : this.getOfflineIpo(e.map(n => n.symbolIsin)).pipe(k(n => n.filter(i => e.map(c => c.symbolIsin).includes(i.symbolIsin)).map(i => W(P({}, i), {
                relatedMeta: e.find(c => c.symbolIsin === i.symbolIsin)
            })).filter(this.validIpoOfflineOrders).map(i => new eu({
                symbolIsin: i.symbolIsin,
                createDateTime: i.createDateTime,
                side: Lt.Buy,
                id: i.id,
                easyState: Ko.Done,
                errorDescription: "",
                orderModelType: Yo.offline,
                price: i.price,
                quantity: i.quantity,
                state: i.state,
                errorType: i.errorType,
                symbolName: e.find(c => c.symbolIsin === i.symbolIsin).symbolName
            }))))
        }
        getOfflineIpo(e) {
            return this.httpService.get(`${this.offlineIpoUrl}/${e.join(",")}`).pipe(k(n => (n.forEach(i => i.offlineSendStrategy = i.sendStrategy),
            n)))
        }
        validIpoOfflineOrders(e) {
            let n = new jn().not()
              , i = new jn().and(new _i().and(new gi().and(new vi)));
            return n.or(i).isSatisfiedBy(e)
        }
    }
    ;
    o.\u0275fac = ( () => {
        let e;
        return function(i) {
            return (e || (e = Rt(o)))(i || o)
        }
    }
    )(),
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var Ue = It({
    source: "IpoReducer",
    events: {
        empty: Re(),
        loadingStart: Re(),
        loadingEnd: Re(),
        loadSuccess: fe(),
        loadedError: Re()
    }
})
  , Tn = It({
    source: "IpoApi",
    events: {
        loadIposAndNoneEtfs: Re(),
        silentReloadIposAndNoneEtfs: Re()
    }
});
var ra = t => t.noneEtfState
  , no = we(ra, t => t ? Object?.values(t?.entities) : [])
  , io = we(ra, t => t?.entities);
var sa = ( () => {
    let o = class o {
        constructor() {
            this.store = y(Ae),
            this.nonEtfEntities$ = this.store.select(io),
            this.nonEtfEntities = this.store.selectSignal(io),
            this.nonEtfs$ = this.store.select(no),
            this.nonEtfs = this.store.selectSignal(no),
            this.mappedNonEtfs = M(this.nonEtfs$)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var In = ( () => {
    let o = class o {
        constructor() {
            this.store = y(Ae),
            this.moneyService = y(mt),
            this.ipoStore = y(hi),
            this.noneEtfStore = y(sa),
            this.timeService = y(Tt),
            this.orderStore = y(qe),
            this.hasIpo = M(this.ipoStore.ipos$.pipe(k(e => !!e && !!e.length))),
            this.hasIpo$ = oe(this.hasIpo),
            this.hasIpoSubscription = M(this.ipoStore.ipoSubscriptions$.pipe(k(e => !!e && !!e.length))),
            this.hasIpoSubscription$ = oe(this.hasIpoSubscription),
            this.hasNonEtfs = M(this.noneEtfStore.nonEtfs$.pipe(k(e => !!e && !!e.length))),
            this.hasNonEtfs$ = oe(this.hasNonEtfs)
        }
        validateIpoOrder(e) {
            let {accountBalance: n} = this.moneyService;
            return ua(e, n)
        }
        loadIposAndNoneEtfs(e=!1) {
            this.store.dispatch(e ? Tn.silentReloadIposAndNoneEtfs() : Tn.loadIposAndNoneEtfs())
        }
        getIpoByIsin(e) {
            return this.ipoStore.allIpoEntities()?.[e]
        }
        getNonEtfsByCode$(e) {
            return this.noneEtfStore.nonEtfEntities$.pipe(k(n => n[e]))
        }
        getNonEtfsByCode(e) {
            return this.noneEtfStore.nonEtfEntities()[e]
        }
        getNonEtfs() {
            return this.noneEtfStore.nonEtfs()
        }
        getNonEtfs$() {
            return this.noneEtfStore.nonEtfs$
        }
        getAllTypesOfIpos$(e=!1) {
            return this.ipoStore.mappedIpos$.pipe(this.includeServerDate(e), Ct(this.orderStore.omsOrders$, this.orderStore.offlineOrders$), k( ([n,i,c]) => {
                let p = [];
                return n.forEach(b => {
                    let x = P({}, b);
                    x.status = "\u062F\u0631\u062E\u0648\u0627\u0633\u062A\u06CC \u062B\u0628\u062A \u0646\u0634\u062F\u0647",
                    x.orderStatusClass = "",
                    x.isInOrders = !1;
                    let D = i.map(K => new Qo(P({}, K))).filter(K => K.symbolIsin === b.symbolIsin && K.side === Lt.Buy && (K.isOpenOrder || K.IsDoneOrder || K.orderState === On.PartiallyExecution))
                      , j = c.find(K => K.symbolIsin === b.symbolIsin);
                    if (D?.length > 1)
                        x.isInOrders = !0,
                        x.status = "\u0633\u0641\u0627\u0631\u0634\u0627\u062A \u062B\u0628\u062A \u0634\u062F\u0647",
                        x.statusDescription = "",
                        x.orderStatusClass = "text-warning ";
                    else if (j)
                        switch (x.isInOrders = !0,
                        j.state) {
                        case en.Offline:
                            x.status = "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062B\u0628\u062A \u0634\u062F\u0647",
                            x.statusDescription = "",
                            x.orderStatusClass = "text-violet ";
                            break;
                        case en.IsSent:
                            x.status = "\u062F\u0631 \u062D\u0627\u0644 \u0627\u0631\u0633\u0627\u0644",
                            x.statusDescription = "",
                            x.orderStatusClass = "text-violet ";
                            break;
                        case en.Error:
                            x.status = "\u062E\u0637\u0627",
                            x.statusDescription = j.StateNotificationText || "",
                            x.orderStatusClass = "text-danger ";
                            break;
                        default:
                            x.status = "",
                            x.statusDescription = "",
                            x.orderStatusClass = "",
                            x.isInOrders = !1
                        }
                    else
                        D?.length > 0 && (D?.some(K => K.IsDoneOrder || K.orderState === On.PartiallyExecution) ? (x.status = `${b.ipoType === te.IPO ? D?.map(K => K.ExecutedQuantity)?.reduce( (K, L) => K + L, 0) : ""} \u0633\u0647\u0645 \u062A\u062E\u0635\u06CC\u0635 \u062F\u0627\u062F\u0647 \u0634\u062F`,
                        x.statusDescription = "",
                        x.orderStatusClass = "text-success",
                        x.isInOrders = !0) : D?.some(K => K.isOpenOrder) && (x.status = "\u0633\u0641\u0627\u0631\u0634 \u062B\u0628\u062A \u0634\u062F",
                        x.statusDescription = "",
                        x.orderStatusClass = "text-warning",
                        x.isInOrders = !0));
                    p.push(P({}, x))
                }
                ),
                p
            }
            ))
        }
        getAll() {
            return this.ipoStore.mappedIpos()
        }
        getIpos$(e=!1) {
            return this.ipoStore.ipos$.pipe(this.includeServerDate(e))
        }
        getIpoSubscription() {
            return this.ipoStore.ipoSubscriptions()
        }
        getIpoSubscription$(e=!1) {
            return this.ipoStore.ipoSubscriptions$.pipe(this.includeServerDate(e))
        }
        getIpoLoadingState$() {
            return this.ipoStore.ipoLoading$
        }
        getOfflineOrderLoadingState$() {
            return this.ipoStore.ipoLoading$
        }
        getIpoLoadingState() {
            return this.ipoStore.ipoLoading()
        }
        includeServerDate(e) {
            return n => e ? n.pipe(Ct(this.timeService.serverDateObs$), k( ([i,c]) => [...[...i.map(b => W(P({}, b), {
                distanceToDate: qn(b.pureDate, b.pureDateEnd, b.startTime, b.endTime, b.ipoType),
                dateStatus: $n(c, b.pureDate, b.pureDateEnd, b.time)
            }))]])) : n
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var Vt = It({
    source: "noneEftReducer",
    events: {
        empty: Re(),
        loadSuccess: fe(),
        loadedError: Re()
    }
});
var la = Gt({
    selectId: t => t.fundCode
})
  , Sc = la.getInitialState({
    nonEtfs: []
});
function ca(t, o) {
    return Fc(t, o)
}
var Fc = Ht(Sc, ve(Vt.loadSuccess, (t, {noneEtfs: o}) => la.upsertMany(o, t)));
var da = Gt({
    selectId: t => t.symbolIsin
})
  , Tc = da.getInitialState({
    loading: !1
});
function ma(t, o) {
    return Ic(t, o)
}
var Ic = Ht(Tc, ve(Ue.loadSuccess, (t, {ipos: o}) => da.setAll(o, t)), ve(Ue.loadingStart, t => W(P({}, t), {
    loading: !0
})), ve(Ue.loadingEnd, t => W(P({}, t), {
    loading: !1
})));
var p_ = {
    ipoState: ma,
    noneEtfState: ca
};
var Un = Mi(Po());
var Ac = ( () => {
    let o = class o {
        constructor() {
            this.actions$ = y(oi),
            this.symbolService = y(nt),
            this.ipoService = y(yi),
            this.fundsFacade = y(ue),
            this.timeService = y(Tt),
            this.OfflineIpoFacade = y(pa),
            this.store = y(Ae),
            this.stopLoader$ = We( () => this.actions$.pipe($e(Ue.empty, Ue.loadSuccess, Vt.loadSuccess, Vt.empty), k( () => Ue.loadingEnd()), H( () => Z(Ue.loadingEnd())))),
            this.loadIpoAndNoneEtf$ = We( () => this.actions$.pipe($e(Tn.loadIposAndNoneEtfs), vt(this.timeService.serverDateObs$), En(1e3, null), st( ([,e]) => (this.store.dispatch(Ue.loadingStart()),
            this.symbolService.symbolsByIsin$.pipe(kn(Boolean), Je(n => this.ipoService.getIpoAndNoneEtf(!0).pipe(Je(i => {
                if (!i)
                    return Z(Ue.empty(), Vt.empty());
                let {mappedIpos: c, mappedNoneEtfs: p} = this.mapData(i.ipos, i.noneEtf, n, e);
                return Z(Ue.loadSuccess({
                    ipos: c || []
                }), Vt.loadSuccess({
                    noneEtfs: p || []
                }), Vn.load())
            }
            ), H( () => Z(Ue.loadedError()))))))))),
            this.loadOfflineIpos$ = We( () => this.actions$.pipe($e(Vn.load, Go.set), st( () => this.OfflineIpoFacade.getAll()), k(e => Vn.set({
                values: e
            })))),
            this.silentReloadIpoAndNoneEtf$ = We( () => this.actions$.pipe($e(Tn.silentReloadIposAndNoneEtfs), vt(this.timeService.serverDateObs$), En(1e3, null), st( ([,e]) => this.symbolService.symbolsByIsin$.pipe(kn(Boolean), Je(n => this.ipoService.getIpoAndNoneEtf(!0).pipe(Je(i => {
                if (!i)
                    return Z(Ue.empty(), Vt.empty());
                let {mappedIpos: c, mappedNoneEtfs: p} = this.mapData(i.ipos, i.noneEtf, n, e);
                return Z(Ue.loadSuccess({
                    ipos: c || []
                }), Vt.loadSuccess({
                    noneEtfs: p || []
                }), Vn.load())
            }
            ), H( () => Z(Ue.loadedError()))))))))
        }
        mapData(e, n, i, c) {
            let p = this.mapIpos(e || [], i, c)
              , b = this.mapNoneEtfs(n, c);
            return this.SendNoneEtfToFunds(b),
            {
                mappedIpos: p,
                mappedNoneEtfs: b
            }
        }
        mapNoneEtfs(e, n) {
            let i = [];
            for (let c of e) {
                let p = c.date ? `${tt.getJDayOfWeek(Un.default.from(c.date, "fa", "YYYY/M/D").day())} ${c.date}` : ""
                  , b = c.toDate ? `${tt.getJDayOfWeek(Un.default.from(c.toDate, "fa", "YYYY/M/D").day())} ${c.toDate}` : ""
                  , x = c.time && c.time !== "-" ? c.time.substring(0, c.time.lastIndexOf("-")) : ""
                  , D = c.time && c.time !== "-" ? c.time.substring(c.time.lastIndexOf("-") + 1) : ""
                  , j = qn(c.date, c.toDate, x, D, te.IpoSubscription)
                  , K = $n(n, c.date, c.toDate, c.time);
                i.push(W(P({}, c), {
                    date: p,
                    endDate: b,
                    pureDate: c.date,
                    pureDateEnd: c.toDate,
                    description: c.description,
                    logo: ge.FundIcon[c.fundCode],
                    distanceToDate: j,
                    startTime: x,
                    endTime: D,
                    ipoType: void 0,
                    dateStatus: K
                }))
            }
            return i
        }
        mapIpos(e, n, i) {
            let c = [];
            for (let p of e) {
                p.date = p.date.trim(),
                p.toDate = p.toDate.trim();
                let b = n[p.symbolIsin]
                  , x = p.date.length > 1 ? `${tt.getJDayOfWeek(Un.default.from(p.date, "fa", "YYYY/M/D").day())} ${p.date}` : ""
                  , D = p.toDate.length > 1 ? `${tt.getJDayOfWeek(Un.default.from(p.toDate, "fa", "YYYY/M/D").day())} ${p.toDate}` : ""
                  , j = p.time && p.time !== "-" ? p.time.substring(0, p.time.lastIndexOf("-")) : ""
                  , K = p.time && p.time !== "-" ? p.time.substring(p.time.lastIndexOf("-") + 1) : ""
                  , L = qn(p.date, p.toDate, j, K, p.ipoType)
                  , Le = $n(i, p.date, p.toDate, p.time)
                  , _t = tu(Lt.Buy, p.maxPrice, p.share, +b?.buyCommission || 0)
                  , An = p.share && p.minPrice ? zt.MaxMoneyNeeded : p.description ? zt.WithDescription : zt.Unknown;
                c.push(W(P({}, p), {
                    date: x.trim(),
                    endDate: D,
                    pureDate: p.date.trim(),
                    pureDateEnd: p.toDate.trim(),
                    symbolFullName: b?.title || "",
                    commission: +b?.buyCommission || 0,
                    startTime: j,
                    endTime: K,
                    ipoTypeTitle: qu[p.ipoType],
                    distanceToDate: L,
                    dateStatus: Le,
                    maxMoneyNeeded: _t,
                    pureTime: p.time,
                    priceTextStatus: An
                }))
            }
            return c
        }
        SendNoneEtfToFunds(e) {
            let n = e.filter(i => i?.dateStatus === Ee.InRange).map(i => W(P({}, i), {
                issuanceNav: i.issuanceNav,
                code: i.fundCode,
                issuanceStaticWage: i.issuanceStaticWage,
                name: i.fundName,
                penalties: [{
                    order: 1,
                    durationOfRedemption: "30 \u0631\u0648\u0632 \u06CC\u0627 \u06A9\u0645\u062A\u0631",
                    percent: "5"
                }, {
                    order: 2,
                    durationOfRedemption: "\u0628\u06CC\u0634 \u0627\u0632 30 \u0631\u0648\u0632 \u0648 \u0628\u0631\u0627\u0628\u0631 \u06CC\u0627 \u06A9\u0645\u062A\u0631 \u0627\u0632 60 \u0631\u0648\u0632",
                    percent: "4"
                }, {
                    order: 3,
                    durationOfRedemption: "\u0628\u06CC\u0634 \u0627\u0632 60 \u0631\u0648\u0632 \u0648 \u0628\u0631\u0627\u0628\u0631 \u06CC\u0627 \u06A9\u0645\u062A\u0631 \u0627\u0632 90 \u0631\u0648\u0632",
                    percent: "3"
                }, {
                    order: 4,
                    durationOfRedemption: "\u0628\u06CC\u0634 \u0627\u0632 90 \u0631\u0648\u0632 \u0648 \u0628\u0631\u0627\u0628\u0631 \u06CC\u0627 \u06A9\u0645\u062A\u0631 \u0627\u0632 120 \u0631\u0648\u0632",
                    percent: "2"
                }, {
                    order: 5,
                    durationOfRedemption: "\u0628\u06CC\u0634 \u0627\u0632 120 \u0631\u0648\u0632 \u0648 \u0628\u0631\u0627\u0628\u0631 \u06CC\u0627 \u06A9\u0645\u062A\u0631 \u0627\u0632 150 \u0631\u0648\u0632",
                    percent: "1"
                }],
                image: i.image,
                mobileImage: i.mobileImage ?? i.image
            }));
            this.fundsFacade.addToFunds("ipo", n)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)()
  , D_ = [Ac];
var pa = ( () => {
    let o = class o {
        constructor() {
            this.offlineIpoService = y(aa),
            this.ipoFacade = y(In),
            this.store = y(Ae)
        }
        getAll(e=this.ipoFacade.getAll()) {
            return this.offlineIpoService.getAllOfflineOrders(e)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275prov = X({
        token: o,
        factory: o.\u0275fac,
        providedIn: "root"
    });
    let t = o;
    return t
}
)();
var wc = (t, o, u) => ({
    "h-auto": t,
    "h-100": o,
    "border-danger": u
})
  , kc = (t, o, u, e, n) => ({
    "h-auto": t,
    "h-100": o,
    "opacity-5": u,
    "pe-none": e,
    "border-danger": n
});
function Ec(t, o) {
    t & 1 && (a(0, "div", 6),
    l(1, "\u0639\u062F\u062F \u0631\u0627 \u0628\u0647\u200C\u062F\u0631\u0633\u062A\u06CC \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F."),
    r())
}
function Dc(t, o) {
    t & 1 && (a(0, "div", 2),
    l(1, "\u0642\u06CC\u0645\u062A"),
    r())
}
function Mc(t, o) {
    t & 1 && (a(0, "div", 2),
    l(1, "\u0642\u06CC\u0645\u062A (\u062B\u0627\u0628\u062A)"),
    r())
}
function Nc(t, o) {
    t & 1 && (a(0, "div", 6),
    l(1, "\u0639\u062F\u062F \u0631\u0627 \u0628\u0647\u200C\u062F\u0631\u0633\u062A\u06CC \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F."),
    r())
}
var fa = ( () => {
    let o = class o {
        constructor() {
            this.form = w(),
            this.ipo = w(),
            this.isMobile = w.required(),
            this.priceChange = J(),
            this.quantityChange = J(),
            this.valueTap = J(),
            this.sDisabled = ee( () => this.ipo()?.minPrice === this.ipo()?.maxPrice),
            this.IpoType = te,
            this.onValueTap = e => {
                Bo( () => this.valueTap.emit({
                    inputName: e,
                    inputControl: this.form().get(e)
                }))
            }
        }
        handleQuantityChange(e) {
            this.form()?.value?.quantity !== e && this.quantityChange.emit(e)
        }
        handlePriceChange(e) {
            this.form()?.value?.price !== e && this.priceChange.emit(e)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["offline-ipo-order-form-values"]],
        inputs: {
            form: [1, "form"],
            ipo: [1, "ipo"],
            isMobile: [1, "isMobile"]
        },
        outputs: {
            priceChange: "priceChange",
            quantityChange: "quantityChange",
            valueTap: "valueTap"
        },
        decls: 15,
        vars: 21,
        consts: [[1, "d-flex", "mt-2", "gap-2", 2, "min-height", "50px"], [1, "flex-grow-1"], [1, "text-body-secondary"], [1, "order-form-field"], [1, "d-flex", "form-control", "bg-transparent", "border-secondary", 3, "ngClass"], ["id", "quantity", 1, "d-flex", "align-items-center", "px-1", "flex-grow-1", "fs-6", 3, "tap", "valueChanged", "form", "readOnly", "roundOnStep"], [1, "text-danger", "mt-1", "small"], ["id", "price", 1, "d-flex", "align-items-center", "px-1", "flex-grow-1", "fs-6", 3, "tap", "valueChanged", "form", "roundOnStep", "placeholder"]],
        template: function(n, i) {
            if (n & 1 && (a(0, "div", 0)(1, "div", 1)(2, "div", 2),
            l(3, "\u062A\u0639\u062F\u0627\u062F"),
            r(),
            a(4, "div", 3)(5, "div", 4)(6, "custom-number-box", 5),
            h("tap", function() {
                return i.onValueTap("quantity")
            })("valueChanged", function(p) {
                return i.handleQuantityChange(p.value)
            }),
            r()()(),
            C(7, Ec, 2, 0, "div", 6),
            r(),
            a(8, "div", 1),
            C(9, Dc, 2, 0, "div", 2)(10, Mc, 2, 0, "div", 2),
            a(11, "div", 3)(12, "div", 4)(13, "custom-number-box", 7),
            h("tap", function() {
                return i.onValueTap("price")
            })("valueChanged", function(p) {
                return i.handlePriceChange(p.value)
            }),
            r()()(),
            C(14, Nc, 2, 0, "div", 6),
            r()()),
            n & 2) {
                let c, p, b, x, D, j;
                s(5),
                m("ngClass", xo(11, wc, (c = i.ipo()) == null ? null : c.share, !((c = i.ipo()) != null && c.share), (c = i.form()) == null || c.controls == null || c.controls.quantity == null ? null : c.controls.quantity.errors)),
                s(),
                m("form", i.form())("readOnly", i.isMobile())("roundOnStep", !0),
                s(),
                f(!((p = i.form()) == null || p.controls == null || p.controls.quantity == null) && p.controls.quantity.errors && (!((p = i.form()) == null || p.controls == null || p.controls.quantity == null) && p.controls.quantity.dirty) ? 7 : -1),
                s(2),
                f(((b = i.ipo()) == null ? null : b.ipoType) === i.IpoType.IPO ? 9 : 10),
                s(3),
                m("ngClass", So(15, kc, !i.sDisabled(), i.sDisabled(), i.sDisabled(), i.sDisabled(), (x = i.form()) == null || x.controls == null || x.controls.price == null ? null : x.controls.price.errors)),
                s(),
                m("form", i.form())("roundOnStep", !0)("placeholder", "\u0627\u0632 " + ((D = i.ipo()) == null ? null : D.minPrice) + " \u062A\u0627 " + ((D = i.ipo()) == null ? null : D.maxPrice)),
                s(),
                f(!((j = i.form()) == null || j.controls == null || j.controls.price == null) && j.controls.price.errors ? 14 : -1)
            }
        },
        dependencies: [z, At],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
function Pc(t, o) {
    if (t & 1 && (_(0, "svg-icon", 8),
    a(1, "div", 9),
    l(2, " \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0634\u0645\u0627 \u062F\u0631 \u0628\u0627\u0632\u0647 \u0632\u0645\u0627\u0646\u06CC \u0627\u0639\u0644\u0627\u0645\u06CC \u0627\u0632 \u0633\u0648\u06CC \u0646\u0627\u0638\u0631 \u0628\u0627\u0632\u0627\u0631\u060C \u0627\u0631\u0633\u0627\u0644 \u0645\u06CC\u200C\u0634\u0648\u062F. \u062F\u0631 \u0635\u0648\u0631\u062A \u06A9\u0627\u0641\u06CC \u0646\u0628\u0648\u062F\u0646 \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F\u060C \u0633\u0641\u0627\u0631\u0634 \u0645\u062A\u0646\u0627\u0633\u0628 \u0628\u0627 \u0645\u0627\u0646\u062F\u0647 \u062F\u0631 \u0632\u0645\u0627\u0646 \u0639\u0631\u0636\u0647 \u0627\u0631\u0633\u0627\u0644 \u0645\u06CC\u200C\u06AF\u0631\u062F\u062F. "),
    a(3, "div", 11),
    l(4, " \u0628\u0646\u0627\u0628\u0631\u0627\u06CC\u0646 \u0627\u0632 \u06A9\u0627\u0641\u06CC \u0628\u0648\u062F\u0646 \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u062E\u0648\u062F \u067E\u06CC\u0634 \u0627\u0632 \u0639\u0631\u0636\u0647\u060C \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062D\u0627\u0635\u0644 \u0646\u0645\u0627\u06CC\u06CC\u062F. "),
    r()()),
    t & 2) {
        let u = d();
        m("iconName", u.icons.CircleMedium)
    }
}
function Vc(t, o) {
    if (t & 1 && (_(0, "svg-icon", 8),
    a(1, "div", 9),
    l(2, " \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0634\u0645\u0627 \u062F\u0631 \u0628\u0627\u0632\u0647 \u0632\u0645\u0627\u0646\u06CC \u0627\u0639\u0644\u0627\u0645\u06CC \u0627\u0632 \u0633\u0648\u06CC \u0646\u0627\u0638\u0631 \u0628\u0627\u0632\u0627\u0631\u060C \u0627\u0631\u0633\u0627\u0644 \u0645\u06CC\u200C\u0634\u0648\u062F. \u062F\u0631 \u0635\u0648\u0631\u062A \u06A9\u0627\u0641\u06CC \u0646\u0628\u0648\u062F\u0646 \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F\u060C \u0633\u0641\u0627\u0631\u0634 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u0646\u0645\u06CC\u200C\u06AF\u0631\u062F\u062F. "),
    a(3, "div", 11),
    l(4, " \u0628\u0646\u0627\u0628\u0631\u0627\u06CC\u0646 \u0627\u0632 \u06A9\u0627\u0641\u06CC \u0628\u0648\u062F\u0646 \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u062E\u0648\u062F \u067E\u06CC\u0634 \u0627\u0632 \u0639\u0631\u0636\u0647\u060C \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062D\u0627\u0635\u0644 \u0646\u0645\u0627\u06CC\u06CC\u062F. "),
    r()()),
    t & 2) {
        let u = d();
        m("iconName", u.icons.CircleMedium)
    }
}
var oo = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.ipoTextType = w(),
            this.ipoType = w(),
            this.overlayService = y(ye),
            this.IpoType = te
        }
        closeModal() {
            this.overlayService.hideOverlay()
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["offline-ipo-order-rules"]],
        inputs: {
            ipoTextType: [1, "ipoTextType"],
            ipoType: [1, "ipoType"]
        },
        decls: 16,
        vars: 4,
        consts: [[1, "p-3", "p-md-0"], [1, "w-100", "d-flex", "flex-column", "gap-3", "align-items-center"], [1, "text-warning", "bg-warning", "bg-opacity-10", "rounded", "p-2"], ["width", "32", "height", "32", 3, "iconName"], [1, "fw-bold", "fs-6", "mb-3"], [1, "p-0", "d-flex", "flex-column", "gap-3"], [1, "d-flex", "text-start"], [1, "mt-2", "d-flex"], ["width", "14", "height", "14", 3, "iconName"], [1, "mb-0"], ["type", "button", 1, "w-100", "btn", "btn-global", "d-md-none", 3, "click"], [1, "fw-bold", "d-inline"]],
        template: function(n, i) {
            n & 1 && (a(0, "div", 0)(1, "div", 1)(2, "div", 2),
            _(3, "svg-icon", 3),
            r(),
            a(4, "div", 4),
            l(5),
            r()(),
            a(6, "ul", 5)(7, "li", 6),
            C(8, Pc, 5, 1)(9, Vc, 5, 1),
            r(),
            a(10, "li", 7),
            _(11, "svg-icon", 8),
            a(12, "p", 9),
            l(13, " \u0644\u0627\u0632\u0645 \u0628\u0647 \u062A\u0648\u0636\u06CC\u062D \u0627\u0633\u062A \u0628\u0627 \u062A\u0648\u062C\u0647 \u0628\u0647 \u0641\u0631\u0622\u06CC\u0646\u062F\u0647\u0627\u06CC \u0633\u06CC\u0633\u062A\u0645\u06CC \u0648 \u0645\u0634\u06A9\u0644\u0627\u062A \u0627\u062D\u062A\u0645\u0627\u0644\u06CC \u0646\u0631\u0645\u200C\u0627\u0641\u0632\u0627\u0631\u060C \u0627\u0646\u062A\u062E\u0627\u0628 \u0627\u06CC\u0646 \u06AF\u0632\u06CC\u0646\u0647 \u0628\u0647 \u0645\u0646\u0632\u0644\u0647 \u062A\u0636\u0645\u06CC\u0646 \u062E\u0631\u06CC\u062F \u062A\u0648\u0633\u0637 \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC \u0645\u0641\u06CC\u062F \u0646\u0645\u06CC\u200C\u0628\u0627\u0634\u062F \u0648 \u06A9\u0627\u0631\u06AF\u0632\u0627\u0631\u06CC \u0645\u0633\u0626\u0648\u0644\u06CC\u062A\u06CC \u062F\u0631 \u0645\u0648\u0631\u062F \u062A\u0636\u0645\u06CC\u0646 \u062B\u0628\u062A \u0633\u0641\u0627\u0631\u0634 \u0646\u062E\u0648\u0627\u0647\u062F \u062F\u0627\u0634\u062A. "),
            r()()(),
            a(14, "button", 10),
            h("click", function() {
                return i.closeModal()
            }),
            l(15, "\u0645\u062A\u0648\u062C\u0647 \u0634\u062F\u0645"),
            r()()),
            n & 2 && (s(3),
            m("iconName", i.icons.Alert),
            s(2),
            F("\u0628\u06CC\u0627\u0646\u06CC\u0647 \u0631\u06CC\u0633\u06A9 ", i.ipoTextType(), ""),
            s(3),
            f(i.ipoType() === i.IpoType.IPO ? 8 : 9),
            s(3),
            m("iconName", i.icons.CircleMedium))
        },
        dependencies: [le, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var Oc = [[["", "rest-of-list", ""]]]
  , Bc = ["[rest-of-list]"];
function Rc(t, o) {
    if (t & 1 && (a(0, "div", 8)(1, "span", 6),
    l(2, "\u0648\u0636\u0639\u06CC\u062A"),
    r(),
    a(3, "span", 11),
    l(4),
    r()()),
    t & 2) {
        let u, e, n = d();
        s(3),
        m("ngClass", (u = n.ipo()) == null ? null : u.orderStatusClass),
        s(),
        F(" (", ((e = n.ipo()) == null ? null : e.status) + ((e = n.ipo()) != null && e.statusDescription ? "\u060C " + ((e = n.ipo()) == null ? null : e.statusDescription) : ""), ") ")
    }
}
function Wc(t, o) {
    if (t & 1 && (a(0, "span", 6),
    l(1, "\u062A\u0627\u0631\u06CC\u062E \u0639\u0631\u0636\u0647"),
    r(),
    a(2, "span", 12),
    l(3),
    r()),
    t & 2) {
        let u, e, n = d();
        s(2),
        Y("text-body-secondary " + ((u = n.ipo()) == null ? null : u.distanceToDate.class)),
        s(),
        F(" ", (e = n.ipo()) == null ? null : e.distanceToDate.summaryTitle, " ")
    }
}
function $c(t, o) {
    if (t & 1 && (a(0, "span", 6),
    l(1, "\u0628\u0627\u0632\u0647 \u067E\u0630\u06CC\u0631\u0647 \u0646\u0648\u06CC\u0633\u06CC"),
    r(),
    a(2, "span"),
    l(3),
    r()),
    t & 2) {
        let u, e, n = d();
        s(2),
        Y("text-body-emphasis fw-bold " + ((u = n.ipo()) == null ? null : u.distanceToDate.class)),
        s(),
        F(" ", (e = n.ipo()) == null ? null : e.distanceToDate.dateTitle, " ")
    }
}
function qc(t, o) {
    if (t & 1 && (a(0, "div", 8)(1, "span", 6),
    l(2, "\u0633\u0627\u0639\u062A \u067E\u0630\u06CC\u0631\u0647\u200C \u0646\u0648\u06CC\u0633\u06CC"),
    r(),
    a(3, "span", 9),
    l(4),
    r()(),
    a(5, "div", 8)(6, "span", 6),
    l(7, "\u0641\u0627\u0635\u0644\u0647 \u062A\u0627 \u0639\u0631\u0636\u0647"),
    r(),
    a(8, "span", 13),
    l(9),
    r()()),
    t & 2) {
        let u, e, n = d();
        s(4),
        F(" ", (u = n.ipo()) == null ? null : u.distanceToDate.timeTitle, " "),
        s(5),
        F(" ", (e = n.ipo()) == null ? null : e.distanceToDate.distanceTitle, " ")
    }
}
function jc(t, o) {
    if (t & 1 && (a(0, "span", 5),
    l(1),
    S(2, "number"),
    r(),
    a(3, "span", 14),
    l(4, "\u0633\u0647\u0645"),
    r()),
    t & 2) {
        let u, e = d(2);
        s(),
        F(" ", A(2, 1, (u = e.ipo()) == null ? null : u.share), " ")
    }
}
function Uc(t, o) {
    t & 1 && (a(0, "span", 14),
    l(1, "\u0637\u0628\u0642 \u067E\u06CC\u0627\u0645 \u0646\u0627\u0638\u0631"),
    r())
}
function Lc(t, o) {
    if (t & 1 && (a(0, "div", 8)(1, "span", 6),
    l(2, "\u0633\u0647\u0645\u06CC\u0647 \u0647\u0631 \u0641\u0631\u062F"),
    r(),
    a(3, "span", 6),
    C(4, jc, 5, 3)(5, Uc, 2, 0, "span", 14),
    r()()),
    t & 2) {
        let u, e = d();
        s(4),
        f(((u = e.ipo()) == null ? null : u.share) > 0 ? 4 : 5)
    }
}
function Hc(t, o) {
    t & 1 && (a(0, "span", 6),
    l(1, "\u062F\u0627\u0645\u0646\u0647 \u0642\u06CC\u0645\u062A"),
    r())
}
function zc(t, o) {
    t & 1 && (a(0, "span", 6),
    l(1, "\u0642\u06CC\u0645\u062A \u067E\u0630\u06CC\u0631\u0647 \u0646\u0648\u06CC\u0633\u06CC"),
    r())
}
function Gc(t, o) {
    if (t & 1 && (a(0, "span", 5),
    l(1),
    S(2, "number"),
    r()),
    t & 2) {
        let u, e = d(2);
        s(),
        T(A(2, 1, (u = e.ipo()) == null ? null : u.minPrice))
    }
}
function Kc(t, o) {
    if (t & 1 && (a(0, "span", 5),
    l(1),
    S(2, "number"),
    S(3, "number"),
    r()),
    t & 2) {
        let u, e = d(2);
        s(),
        $t("", A(2, 2, (u = e.ipo()) == null ? null : u.minPrice), " - ", A(3, 4, (u = e.ipo()) == null ? null : u.maxPrice), "")
    }
}
function Yc(t, o) {
    if (t & 1 && (C(0, Gc, 3, 3, "span", 5)(1, Kc, 4, 6, "span", 5),
    a(2, "span", 14),
    l(3, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()),
    t & 2) {
        let u = d();
        f(u.sIsEqualPrice() ? 0 : 1)
    }
}
function Qc(t, o) {
    t & 1 && (a(0, "span", 10),
    l(1, "\u0637\u0628\u0642 \u067E\u06CC\u0627\u0645 \u0646\u0627\u0638\u0631"),
    r())
}
function Jc(t, o) {
    if (t & 1 && (a(0, "span", 5),
    l(1),
    S(2, "number"),
    r(),
    a(3, "span", 14),
    l(4, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r()),
    t & 2) {
        let u = d(2);
        s(),
        T(A(2, 1, u.calculatedMaxValue()))
    }
}
function Zc(t, o) {
    t & 1 && (a(0, "span", 10),
    l(1, "\u0637\u0628\u0642 \u067E\u06CC\u0627\u0645 \u0646\u0627\u0638\u0631"),
    r())
}
function Xc(t, o) {
    if (t & 1 && (a(0, "div", 8)(1, "span", 6),
    l(2, "\u062D\u062F\u0627\u06A9\u062B\u0631 \u0646\u0642\u062F\u06CC\u0646\u06AF\u06CC \u0644\u0627\u0632\u0645"),
    r(),
    a(3, "div"),
    C(4, Jc, 5, 3)(5, Zc, 2, 0, "span", 10),
    r()()),
    t & 2) {
        let u = d();
        s(4),
        f(u.calculatedMaxValue() > 0 ? 4 : 5)
    }
}
var bi = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.symbolService = y(nt),
            this.ipoService = y(yi),
            this.ipo = w(),
            this.openSymbolDetail = J(),
            this.ipoSymbolState = ee( () => {
                let e = this.symbolService?.symbolByIsin?.[this.ipo()?.symbolIsin] ?? null;
                return {
                    stateDescription: "",
                    color: "red",
                    sectorName: Zo.find(n => n.code === +e?.sector?.trim())?.shortName ?? "-"
                }
            }
            ),
            this.sIsEqualPrice = ee( () => this.ipo()?.minPrice === this.ipo()?.maxPrice),
            this.sShowNeededPrice = ee( () => this.ipo()?.ipoType === te.IPO),
            this.calculatedMaxValue = ee( () => Math.round((1 + this.ipo()?.commission) * (this.ipo()?.maxPrice ?? this.ipo()?.minPrice) * this.ipo()?.share)),
            this.IpoType = te
        }
        goToSYmbolDetail() {
            this.ipoService.openSymbolDetail.next(this.ipo()?.symbolIsin)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["ipo-item-details"]],
        inputs: {
            ipo: [1, "ipo"]
        },
        outputs: {
            openSymbolDetail: "openSymbolDetail"
        },
        ngContentSelectors: Bc,
        decls: 29,
        vars: 12,
        consts: [[1, "list-group", "list-group-flush", "py-1", "px-3", "border-bottom", "border-emphasis", "border-opacity-10"], [1, "d-flex", "list-group-item", "align-items-center", "justify-content-between", "px-0", "cup", 3, "click"], [1, "d-flex", "align-items-center", "gap-1"], [3, "stateColor"], [1, "d-flex", "flex-column"], [1, "fw-bold"], [1, "text-body-secondary"], ["width", "18", "height", "18", 1, "text-body-secondary", 3, "iconName"], [1, "d-flex", "justify-content-between", "list-group-item", "px-0"], [1, "text-body-emphasis", "fw-bold"], [1, "ms-1", "text-body-tertiary"], [3, "ngClass"], ["text-body-secondary", ""], [1, "text-body-secondary", "fw-bold"], [1, "text-body-tertiary"]],
        template: function(n, i) {
            if (n & 1 && (yo(Oc),
            a(0, "div", 0)(1, "div", 1),
            h("click", function() {
                return i.goToSYmbolDetail()
            }),
            a(2, "div", 2),
            _(3, "symbol-state", 3),
            a(4, "div", 4)(5, "div", 5),
            l(6),
            r(),
            a(7, "span", 6),
            l(8),
            r()()(),
            _(9, "svg-icon", 7),
            r(),
            C(10, Rc, 5, 2, "div", 8),
            a(11, "div", 8)(12, "span", 6),
            l(13, "\u0635\u0646\u0639\u062A"),
            r(),
            a(14, "span", 9),
            l(15),
            r()(),
            a(16, "div", 8),
            C(17, Wc, 4, 3)(18, $c, 4, 3),
            r(),
            C(19, qc, 10, 2)(20, Lc, 6, 1, "div", 8),
            a(21, "div", 8),
            C(22, Hc, 2, 0, "span", 6)(23, zc, 2, 0, "span", 6),
            a(24, "div"),
            C(25, Yc, 4, 1)(26, Qc, 2, 0, "span", 10),
            r()(),
            C(27, Xc, 6, 1, "div", 8),
            _o(28),
            r()),
            n & 2) {
                let c, p, b, x, D, j, K, L, Le, _t;
                s(3),
                m("stateColor", (c = i.ipoSymbolState()) == null ? null : c.color),
                s(3),
                F(" ", (p = i.ipo()) == null ? null : p.symbolName, " "),
                s(2),
                T((b = i.ipo()) == null ? null : b.symbolFullName),
                s(),
                m("iconName", i.icons.ChevronLeft),
                s(),
                f((x = i.ipo()) != null && x.isInOrders ? 10 : -1),
                s(5),
                F(" ", (D = i.ipoSymbolState()) == null ? null : D.sectorName, " "),
                s(2),
                f(((j = i.ipo()) == null ? null : j.ipoType) === i.IpoType.IPO ? 17 : 18),
                s(2),
                f(((K = i.ipo()) == null ? null : K.ipoType) === i.IpoType.IpoSubscription ? 19 : -1),
                s(),
                f(((L = i.ipo()) == null ? null : L.ipoType) === i.IpoType.IPO ? 20 : -1),
                s(2),
                f(((Le = i.ipo()) == null ? null : Le.ipoType) === i.IpoType.IPO ? 22 : 23),
                s(3),
                f(((_t = i.ipo()) == null ? null : _t.maxPrice) > 0 || ((_t = i.ipo()) == null ? null : _t.minPrice) > 0 ? 25 : 26),
                s(2),
                f(i.sShowNeededPrice() ? 27 : -1)
            }
        },
        dependencies: [le, z, se, Bi, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
function e6(t, o) {
    if (t & 1 && (a(0, "div", 8)(1, "div", 17)(2, "label"),
    _(3, "input", 18),
    a(4, "span"),
    l(5, "\u062E\u0631\u06CC\u062F \u062F\u0631 \u0633\u0642\u0641 \u0642\u06CC\u0645\u062A \u0648 \u0628\u0627 \u062D\u062F\u0627\u06A9\u062B\u0631 \u0633\u0647\u0645\u06CC\u0647"),
    r()()(),
    a(6, "p", 19),
    l(7, " \u062F\u0631 \u0635\u0648\u0631\u062A \u0646\u0627\u06A9\u0627\u0641\u06CC \u0628\u0648\u062F\u0646 \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F\u060C \u0633\u0641\u0627\u0631\u0634 \u0645\u062A\u0646\u0627\u0633\u0628 \u0628\u0627 \u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u062F\u0631 \u0632\u0645\u0627\u0646 \u0639\u0631\u0636\u0647 \u0627\u0631\u0633\u0627\u0644 \u0645\u06CC\u200C\u06AF\u0631\u062F\u062F. "),
    r()()),
    t & 2) {
        let u = d();
        s(3),
        m("value", u.OfflineSendStrategy.SendOnBuyPower)
    }
}
function t6(t, o) {
    if (t & 1 && (a(0, "div", 20)(1, "label"),
    _(2, "input", 21),
    a(3, "span"),
    l(4, "\u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0639\u062F\u0627\u062F \u0648 \u0642\u06CC\u0645\u062A"),
    r()()()),
    t & 2) {
        let u = d(2);
        s(2),
        m("formGroup", u.form)("value", u.OfflineSendStrategy.SendOnInputMoneyAmount),
        s(),
        Y(u.sShowSecondCheckbox() ? "" : "text-muted")
    }
}
function n6(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "offline-ipo-order-form-values", 22),
        h("valueTap", function(n) {
            g(u);
            let i = d(2);
            return v(i.onValueTap(n))
        })("priceChange", function(n) {
            g(u);
            let i = d(2);
            return v(i.handlePriceChange(n))
        })("quantityChange", function(n) {
            g(u);
            let i = d(2);
            return v(i.handleQuantityChange(n))
        }),
        r(),
        a(1, "div", 23)(2, "span", 24),
        l(3, "\u062C\u0645\u0639 \u06A9\u0644"),
        r(),
        a(4, "div")(5, "span", 25),
        l(6),
        S(7, "number"),
        r(),
        a(8, "span", 26),
        l(9, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
        r()()()
    }
    if (t & 2) {
        let u = d(2);
        m("isMobile", u.isMobile())("form", u.form)("ipo", u.ipo()),
        s(6),
        T(A(7, 4, u.sCalculatedValue()))
    }
}
function i6(t, o) {
    if (t & 1 && C(0, t6, 5, 4, "div", 20)(1, n6, 10, 6),
    t & 2) {
        let u = d();
        f(u.sShowFirstCheckbox() && u.sShowSecondCheckbox() ? 0 : -1),
        s(),
        f(u.showPriceForm() ? 1 : -1)
    }
}
function o6(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "span", 27),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.showRulesHandler())
        }),
        l(1),
        r()
    }
    if (t & 2) {
        let u, e = d();
        s(),
        F("\u0628\u06CC\u0627\u0646\u06CC\u0647 \u0631\u06CC\u0633\u06A9 ", (u = e.ipo()) == null ? null : u.ipoTypeTitle, "")
    }
}
function u6(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "span", 28, 1),
        h("click", function() {
            g(u);
            let n = Mt(1)
              , i = d();
            return v(i.showRulesHandler(n))
        }),
        l(2),
        r()
    }
    if (t & 2) {
        let u, e = d(), n = Mt(22);
        m("ngbPopover", n)("triggers", "click:blur")("container", "body"),
        s(2),
        F("\u0628\u06CC\u0627\u0646\u06CC\u0647 \u0631\u06CC\u0633\u06A9 ", (u = e.ipo()) == null ? null : u.ipoTypeTitle, "")
    }
}
function a6(t, o) {
    if (t & 1 && _(0, "offline-ipo-order-rules", 29),
    t & 2) {
        let u = d();
        m("ipoTextType", u.ipo().ipoTypeTitle)("ipoType", u.ipo().ipoType)
    }
}
var Dg = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.fb = y(Te),
            this.notificationService = y(Ie),
            this.orderStore = y(qe),
            this.offlineFacade = y(ui),
            this.accountService = y(at),
            this.moneyService = y(mt),
            this.overlayService = y(ye),
            this.keyboardState = J(),
            this.IpoType = te,
            this.OfflineSendStrategy = dt,
            this.OfflineIpoPriceTextStatus = zt,
            this.fullName = M(this.accountService.userAccountInfo$.pipe(k(e => e.userFullName))),
            this.mobile = M(this.accountService.userAccountInfo$.pipe(k(e => e.phoneNumber))),
            this.isMobile = ot(),
            this.ipo = ot(),
            this.ipo$ = oe(this.ipo),
            this.order = ot(null),
            this.order$ = oe(this.order),
            this.closeHandler = J(),
            this.sIpoTextType = ee( () => this.ipo()?.ipoType === te.IPO ? "\u0639\u0631\u0636\u0647" : "\u067E\u0630\u06CC\u0631\u0647 \u0646\u0648\u06CC\u0633\u06CC"),
            this.sShowFirstCheckbox = ee( () => this.ipo()?.ipoType !== te.IpoSubscription),
            this.sShowSecondCheckbox = ee( () => {
                let e = !0;
                return this.ipo()?.ipoType === te.IpoSubscription ? e = !0 : e = ![this.ipo()?.minPrice, this.ipo()?.maxPrice, this.ipo()?.share].includes(0),
                e || this.form.controls.strategy.disable(),
                e
            }
            ),
            this.sCalculatedValue = E(void 0),
            this.showPriceForm = E(!1),
            this.form = this.fb.group({
                strategy: new Ne(dt.SendOnBuyPower,[R.required]),
                price: [0, [this.checkValueIsRequired( () => +this.form.get("strategy").value != 0, R.compose([R.min(0), R.max(0)]))]],
                quantity: [],
                acceptRules: new Ne(!0,R.requiredTrue)
            }),
            M(this.orderStore.offlineAdded$.pipe(V( () => {
                this.closeHandler.emit()
            }
            ))),
            M(this.form?.valueChanges.pipe(vt(this.ipo$), V( ([e,n]) => {
                this.calculateValue(),
                this.showPriceForm.set(n.ipoType === te.IpoSubscription || e.strategy !== dt.SendOnBuyPower)
            }
            ))),
            M(this.ipo$.pipe(Ve(Boolean), Ct(this.order$), V( ([e,n]) => {
                let i = e.share ? R.compose([R.required, R.min(1), R.max(e.share)]) : R.compose([R.required, R.min(1)]);
                e.ipoType === te.IPO ? (this.form.setControl("quantity", new Ne(1,this.checkValueIsRequired( () => +this.form.get("strategy").value != 0, i))),
                this.form.setControl("price", new Ne(e.minPrice,this.checkValueIsRequired( () => +this.form.get("strategy").value != 0, R.compose([R.min(e.minPrice), R.max(e.maxPrice)]))))) : (this.form.setControl("quantity", new Ne(1,this.checkValueIsRequired( () => +this.form.get("strategy").value != 0, i))),
                this.form.setControl("price", new Ne(e.minPrice,this.checkValueIsRequired( () => +this.form.get("strategy").value != 0, R.compose([R.min(e.minPrice), R.max(e.minPrice)])))),
                this.form.controls.price.disable({
                    emitEvent: !0
                })),
                n ? (this.showPriceForm.set(e?.ipoType === te.IpoSubscription || !!n.price),
                this.form.patchValue({
                    price: this.showPriceForm() ? n?.price : this.ipo()?.maxPrice,
                    quantity: this.showPriceForm() ? n?.quantity : this.ipo()?.share,
                    strategy: this.showPriceForm() ? dt.SendOnInputMoneyAmount : dt.SendOnBuyPower
                })) : this.form.patchValue({
                    price: this.ipo()?.maxPrice,
                    quantity: e?.ipoType === te.IpoSubscription ? void 0 : e?.share,
                    strategy: e?.ipoType === te.IpoSubscription ? dt.SendOnInputMoneyAmount : dt.SendOnBuyPower
                })
            }
            ))),
            M(this.order$)
        }
        calculateValue() {
            let {price: e=0, quantity: n=0} = this.form.getRawValue();
            this.sCalculatedValue.set(Math.round((1 + this.ipo()?.commission) * e * n))
        }
        isPriceValid() {
            let e = this.form?.value?.price;
            return e || e === 0 ? e <= this.ipo()?.maxPrice && e >= this.ipo()?.minPrice : !1
        }
        isQuantityValid() {
            let e = this.form?.value?.quantity;
            return e || e === 0 ? (e <= this.ipo()?.share || !this.ipo()?.share) && e >= 1 : !1
        }
        formValue() {
            return {
                minPrice: this.ipo()?.minPrice,
                maxPrice: this.ipo()?.maxPrice,
                minQuantity: 1,
                maxQuantity: this.ipo()?.share,
                isPriceValid: this.isPriceValid(),
                isQuantityValid: this.isQuantityValid()
            }
        }
        handleSubmit() {
            if (this.form.invalid)
                return;
            (this.moneyService.accountBalance || 0) < this.sCalculatedValue() && this.notificationService.alert(`\u0642\u062F\u0631\u062A \u062E\u0631\u06CC\u062F \u06A9\u0627\u0641\u06CC \u0646\u06CC\u0633\u062A\u060C \u062C\u0647\u062A \u0627\u0646\u062C\u0627\u0645 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062E\u0631\u06CC\u062F\u060C \u067E\u06CC\u0634 \u0627\u0632 \u0634\u0631\u0648\u0639 ${this.sIpoTextType()}\u060C \u0646\u0633\u0628\u062A \u0628\u0647 \u062A\u06A9\u0645\u06CC\u0644 \u0648\u062C\u0647 \u0627\u0642\u062F\u0627\u0645 \u0646\u0645\u0627\u06CC\u06CC\u062F`, G.warning),
            this.order() ? this.handleUpdate() : this.handleCreate()
        }
        handleCreate() {
            let {price: e, quantity: n, strategy: i} = this.form.value
              , c = {
                fullName: this.fullName(),
                mobile: this.mobile(),
                symbolIsin: this.ipo()?.symbolIsin,
                symbolName: this.ipo()?.symbolName,
                offlineSendStrategy: dt.SendOnBuyPower
            };
            i === dt.SendOnInputMoneyAmount && (c.price = e,
            c.quantity = n),
            this.offlineFacade.create(c)
        }
        handleUpdate() {
            let {price: e, quantity: n, strategy: i} = this.form.value
              , c = {
                orderId: this.order().id,
                symbolIsin: this.ipo()?.symbolIsin,
                symbolName: this.ipo()?.symbolName,
                offlineSendStrategy: dt.SendOnBuyPower,
                createDateTime: this.order().createDateTime?.toString()
            };
            i === dt.SendOnInputMoneyAmount && (c.price = e,
            c.quantity = n),
            this.offlineFacade.update(c)
        }
        checkValueIsRequired(e, n) {
            return i => i.parent && e() ? n(i) : null
        }
        handlePriceChange(e) {
            this.form.patchValue({
                price: e
            })
        }
        handleQuantityChange(e) {
            this.form.patchValue({
                quantity: e
            })
        }
        showRulesHandler(e=null) {
            this.isMobile() ? this.overlayService.showOverlay({
                component: oo,
                input: [{
                    inputName: "ipoTextType",
                    inputValue: this.ipo().ipoTypeTitle
                }, {
                    inputName: "ipoType",
                    inputValue: this.ipo().ipoType
                }],
                option: {
                    componentName: "OfflineIpoOrderRulesComponent"
                }
            }) : e.open()
        }
        onValueTap(e) {
            this.keyboardState.emit(P({}, e))
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["offline-ipo-order-form"]],
        inputs: {
            isMobile: [1, "isMobile"],
            ipo: [1, "ipo"],
            order: [1, "order"]
        },
        outputs: {
            keyboardState: "keyboardState",
            isMobile: "isMobileChange",
            ipo: "ipoChange",
            order: "orderChange",
            closeHandler: "closeHandler"
        },
        decls: 23,
        vars: 9,
        consts: [["orderRulesTooltip", ""], ["rulesPopOver", "ngbPopover"], [1, "d-flex", "flex-column", "h-100", "overflow-x-hidden", 3, "ngSubmit", "formGroup", "ngClass"], [3, "ipo"], [1, "px-3", "h-100", "list-group", "list-group-flush", "border-top", "border-5", "border-opacity-025", "border-emphasis"], [1, "d-flex", "gap-2", "mt-3"], ["width", "20", "height", "20", 3, "iconName"], [1, "text-center", "fw-bold", "mt-1"], [1, "list-group-item", "px-0", "mb-2", "pt-2"], [1, "d-flex", "flex-column", "w-100", "shadow", "p-3", "mt-3"], [1, "d-flex"], [1, "d-flex", "align-items-center", "gap-1", "mb-1"], [1, "form-check"], ["id", "acceptRules", "type", "checkbox", "formControlName", "acceptRules", 1, "form-check-input"], [1, "cup", "text-global", "text-decoration-underline"], [1, "cup", "text-global", "text-decoration-underline", "mb-1", 3, "ngbPopover", "triggers", "container"], ["data-cy", "ipo-offline-submit-btn", "type", "submit", 1, "btn", "btn-global", "w-100", 3, "disabled"], [1, "radio-custom", "mb-1", "mt-2"], ["formControlName", "strategy", "name", "strategy", "type", "radio", 1, "form-check-input", 3, "value"], [1, "small", "text-muted", "ms-4", "ps-2", "mb-0"], [1, "radio-custom", "mt-2"], ["formControlName", "strategy", "name", "strategy", "type", "radio", 1, "form-check-input", 3, "formGroup", "value"], [1, "offline-ipo-order-form-values", 3, "valueTap", "priceChange", "quantityChange", "isMobile", "form", "ipo"], [1, "d-flex", "justify-content-between", "py-2"], [1, "text-body-secondary"], [1, "fw-boldfw-bold"], [1, "text-body-tertiary"], [1, "cup", "text-global", "text-decoration-underline", 3, "click"], [1, "cup", "text-global", "text-decoration-underline", "mb-1", 3, "click", "ngbPopover", "triggers", "container"], [3, "ipoTextType", "ipoType"]],
        template: function(n, i) {
            if (n & 1) {
                let c = I();
                a(0, "form", 2),
                h("ngSubmit", function() {
                    return g(c),
                    v(i.handleSubmit())
                }),
                _(1, "ipo-item-details", 3),
                a(2, "div", 4)(3, "div", 5),
                _(4, "svg-icon", 6),
                a(5, "div", 7),
                l(6, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062E\u0631\u06CC\u062F"),
                r()(),
                C(7, e6, 8, 1, "div", 8)(8, i6, 2, 2),
                r(),
                a(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "label"),
                _(14, "input", 13),
                r()(),
                a(15, "label"),
                C(16, o6, 2, 1, "span", 14)(17, u6, 3, 4, "span", 15),
                l(18, " \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06A9\u0631\u062F\u0647\u200C\u0627\u0645."),
                r()()(),
                a(19, "button", 16),
                l(20),
                r()()(),
                C(21, a6, 1, 2, "ng-template", null, 0, qt)
            }
            n & 2 && (m("formGroup", i.form)("ngClass", i.isMobile() ? "overflow-y-scroll" : "overflow-y-hidden"),
            s(),
            m("ipo", i.ipo()),
            s(3),
            m("iconName", i.icons.Basket),
            s(3),
            f(i.sShowFirstCheckbox() ? 7 : -1),
            s(),
            f(i.sShowSecondCheckbox() ? 8 : -1),
            s(8),
            f(i.isMobile() ? 16 : 17),
            s(3),
            m("disabled", i.form.invalid),
            s(),
            F(" ", i.order() ? "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u062F\u0631\u062E\u0648\u0627\u0633\u062A" : "\u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062E\u0631\u06CC\u062F", " "))
        },
        dependencies: [et, Se, lt, dn, Io, Be, xe, he, Fe, Xe, se, fa, B, bi, oo, ni, z],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var Ug = ( () => {
    let o = class o {
        constructor() {
            this.ipoFacade = y(In),
            this.orderStore = y(qe),
            this.data = M(this.ipoFacade.getAllTypesOfIpos$(!0)),
            this.data$ = this.ipoFacade.getAllTypesOfIpos$(!0),
            this.loading = M(this.ipoFacade.getIpoLoadingState$()),
            this.hasDescription = ee( () => this.data()?.map(e => e.description).some(Boolean) || !1),
            M(so(1e3 * 300).pipe(V( () => {
                this.ipoFacade.loadIposAndNoneEtfs(!0)
            }
            )))
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["lib-ipo-container"]],
        decls: 0,
        vars: 0,
        template: function(n, i) {},
        dependencies: [le],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var Ca = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.offlineFacade = y(ui),
            this.overlayService = y(ye),
            this.modalService = y(Ke),
            this.offlineOrderId = w(void 0),
            this.closeHandler = J()
        }
        cancelDelete() {
            this.closeHandler.emit()
        }
        deleteOfflineOrderHandler() {
            this.offlineFacade.delete(this.offlineOrderId()),
            this.overlayService.hideOverlay(),
            this.modalService.dismissAll(),
            this.closeHandler.emit()
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["offline-ipo-order-delete-confirm"]],
        inputs: {
            offlineOrderId: [1, "offlineOrderId"]
        },
        outputs: {
            closeHandler: "closeHandler"
        },
        decls: 12,
        vars: 1,
        consts: [[1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "p-3", "bg-body", "bg-principal-4x-dark", "bg-pran", "rounded"], [1, "text-danger", "bg-danger", "bg-opacity-10", "p-2", "rounded", "mb-3"], ["width", "30", "height", "30", 3, "iconName"], [1, "h6", "fw-bold"], [1, "text-body-tertiary", "text-center"], [1, "d-flex", "w-100", "mt-3", "gap-2", 2, "height", "36px"], ["type", "button", 1, "d-flex", "justify-content-center", "align-items-center", "flex-grow-1", "btn", "btn-danger", "rounded", 3, "click"], ["type", "button", 1, "w-25", "fw-bold", "d-flex", "justify-content-center", "align-items-center", "bg-emphasis", "bg-opacity-05", "rounded", "border-0", 3, "click"]],
        template: function(n, i) {
            n & 1 && (a(0, "div", 0)(1, "div", 1),
            _(2, "svg-icon", 2),
            r(),
            a(3, "div", 3),
            l(4, "\u0627\u0632 \u062D\u0630\u0641 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062F\u0627\u0631\u06CC\u062F\u061F"),
            r(),
            a(5, "div", 4),
            l(6, "\u062F\u0631 \u0635\u0648\u0631\u062A \u062D\u0630\u0641\u060C \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062E\u0631\u06CC\u062F \u0639\u0631\u0636\u0647 \u0627\u0648\u0644\u06CC\u0647 \u0634\u0645\u0627 \u0628\u0635\u0648\u0631\u062A \u06A9\u0644\u06CC \u0644\u063A\u0648 \u062E\u0648\u0627\u0647\u062F \u0634\u062F."),
            r(),
            a(7, "div", 5)(8, "button", 6),
            h("click", function() {
                return i.deleteOfflineOrderHandler()
            }),
            l(9, " \u062D\u0630\u0641 \u062F\u0631\u062E\u0648\u0627\u0633\u062A "),
            r(),
            a(10, "button", 7),
            h("click", function() {
                return i.cancelDelete()
            }),
            l(11, " \u0627\u0646\u0635\u0631\u0627\u0641 "),
            r()()()),
            n & 2 && (s(2),
            m("iconName", i.icons.Delete))
        },
        dependencies: [le, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
function r6(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "svg-icon", 10),
        h("click", function() {
            g(u);
            let n = d(2);
            return v(n.closeButtonClickHandler())
        }),
        r()
    }
    if (t & 2) {
        let u = d(2);
        m("iconName", u.icons.Close)
    }
}
function s6(t, o) {
    t & 1 && (a(0, "span"),
    l(1, "\u062D\u062F\u0627\u06A9\u062B\u0631 \u0633\u0647\u0645\u06CC\u0647"),
    r())
}
function l6(t, o) {
    t & 1 && (a(0, "span", 12),
    l(1, " \u0633\u0647\u0645 "),
    r())
}
function c6(t, o) {
    if (t & 1 && (a(0, "span")(1, "span", 11),
    l(2),
    S(3, "number"),
    r(),
    C(4, l6, 2, 0, "span", 12),
    r()),
    t & 2) {
        let u, e, n = d(2);
        s(2),
        F(" ", ((u = n.offlineOrder()) == null ? null : u.quantity) > 0 ? A(3, 2, (u = n.offlineOrder()) == null ? null : u.quantity) : "-", " "),
        s(2),
        f(((e = n.offlineOrder()) == null ? null : e.quantity) > 0 ? 4 : -1)
    }
}
function d6(t, o) {
    t & 1 && (a(0, "span"),
    l(1, "\u0633\u0642\u0641 \u0642\u06CC\u0645\u062A"),
    r())
}
function m6(t, o) {
    t & 1 && (a(0, "span", 12),
    l(1, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
    r())
}
function p6(t, o) {
    if (t & 1 && (a(0, "div")(1, "span", 13),
    l(2),
    S(3, "number"),
    r(),
    C(4, m6, 2, 0, "span", 12),
    r()),
    t & 2) {
        let u, e, n = d(2);
        s(2),
        F(" ", ((u = n.offlineOrder()) == null ? null : u.price) > 0 ? A(3, 2, (u = n.offlineOrder()) == null ? null : u.price) : "-", " "),
        s(2),
        f(((e = n.offlineOrder()) == null ? null : e.price) > 0 ? 4 : -1)
    }
}
function f6(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "div", 1)(1, "div", 2),
        l(2),
        r(),
        C(3, r6, 1, 1, "svg-icon", 3),
        r(),
        a(4, "div")(5, "ipo-item-details", 4)(6, "div", 5)(7, "span", 6),
        l(8, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062E\u0631\u06CC\u062F (\u062A\u0639\u062F\u0627\u062F)"),
        r(),
        C(9, s6, 2, 0, "span")(10, c6, 5, 4, "span"),
        r(),
        a(11, "div", 7)(12, "div", 6),
        l(13, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062E\u0631\u06CC\u062F (\u0642\u06CC\u0645\u062A)"),
        r(),
        C(14, d6, 2, 0, "span")(15, p6, 5, 4, "div"),
        r()(),
        a(16, "div")(17, "button", 8),
        h("click", function() {
            g(u);
            let n = d();
            return v(n.deleteOfflineOrderHandler())
        }),
        _(18, "svg-icon", 9),
        a(19, "div"),
        l(20, "\u062D\u0630\u0641 \u062F\u0631\u062E\u0648\u0627\u0633\u062A"),
        r()()()()
    }
    if (t & 2) {
        let u, e, n, i = d();
        s(2),
        T("\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062E\u0631\u06CC\u062F " + ((u = i.ipoItem()) == null ? null : u.ipoTypeTitle)),
        s(),
        f(i.isMobile() ? -1 : 3),
        s(),
        Y(i.isMobile() ? "px-0 pb-3" : "modal-body pt-0 px-0"),
        s(),
        m("ipo", i.ipoItem()),
        s(4),
        f(!((e = i.offlineOrder()) != null && e.quantity) && ((e = i.offlineOrder()) == null ? null : e.quantity) !== 0 ? 9 : 10),
        s(5),
        f(((n = i.offlineOrder()) == null ? null : n.price) === null || ((n = i.offlineOrder()) == null ? null : n.price) === void 0 ? 14 : 15),
        s(2),
        Y((i.isMobile(),
        "px-3")),
        s(2),
        m("iconName", i.icons.Delete)
    }
}
function C6(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "offline-ipo-order-delete-confirm", 14),
        h("closeHandler", function() {
            g(u);
            let n = d();
            return v(n.showConfirmDelete.set(!1))
        }),
        r()
    }
    if (t & 2) {
        let u, e = d();
        Y(e.isMobile() ? "" : "position-absolute bg-base bg-opacity-50 d-flex justify-content-center align-items-center w-100  top-0 bottom-0 rounded py-2  "),
        m("offlineOrderId", (u = e.offlineOrder()) == null ? null : u.id)
    }
}
var pv = ( () => {
    let o = class o {
        constructor() {
            this.icons = O,
            this.orderStore = y(qe),
            this.overlayService = y(ye),
            this.modalService = y(Ke),
            this.id = "offline-ipo-order-details-id",
            this.myClass = "position-relative",
            this.ipoItem = ot(null),
            this.isMobile = ot(!1),
            this.offlineOrder = E(null),
            this.showConfirmDelete = E(null),
            this.showConfirmDelete$ = oe(this.showConfirmDelete),
            M(this.showConfirmDelete$.pipe(Ve(e => e !== null), V( () => {
                this.overlayService.changeOverLayVisibility(!1)
            }
            ), lo(250), V( () => {
                this.overlayService.changeOverLayVisibility(!0)
            }
            ))),
            Zt( () => {
                this.offlineOrder.set(this.orderStore.getOfflineOrder(this.ipoItem().symbolIsin))
            }
            )
        }
        deleteOfflineOrderHandler() {
            this.showConfirmDelete.set(!0)
        }
        closeButtonClickHandler() {
            this.modalService.dismissAll()
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["offline-ipo-order-details"]],
        hostVars: 3,
        hostBindings: function(n, i) {
            n & 2 && (ho("id", i.id),
            Y(i.myClass))
        },
        inputs: {
            ipoItem: [1, "ipoItem"],
            isMobile: [1, "isMobile"]
        },
        outputs: {
            ipoItem: "ipoItemChange",
            isMobile: "isMobileChange"
        },
        decls: 2,
        vars: 2,
        consts: [[3, "class", "offlineOrderId"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "w-100", "d-flex", "justify-content-center", "fs-6"], ["width", "24", "height", "24", 1, "cup", 3, "iconName"], [3, "ipo"], ["rest-of-list", "", 1, "list-group-item", "px-0", "d-flex", "justify-content-between"], [1, "text-body-secondary"], ["rest-of-list", "", 1, "px-1", "py-2", "d-flex", "justify-content-between"], ["type", "button", 1, "w-100", "btn", "btn-outline-danger", "mt-2", "d-flex", "gap-1", "justify-content-center", "rounded-3", 3, "click"], ["width", "20", "height", "20", 3, "iconName"], ["width", "24", "height", "24", 1, "cup", 3, "click", "iconName"], [1, "text-body-secondary", "fw-bold"], [1, "text-body-tertiary"], [1, "fw-bold"], [3, "closeHandler", "offlineOrderId"]],
        template: function(n, i) {
            n & 1 && C(0, f6, 21, 10)(1, C6, 1, 3, "offline-ipo-order-delete-confirm", 0),
            n & 2 && (f(!i.showConfirmDelete() || i.showConfirmDelete() && !i.isMobile() ? 0 : -1),
            s(),
            f(i.showConfirmDelete() ? 1 : -1))
        },
        dependencies: [le, se, bi, B, Ca],
        styles: [`.modal-content{width:100%}
/*# sourceMappingURL=offline-ipo-order-details.component-S6LXUDJH.css.map */
`],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
var h6 = ["ipo-item", ""]
  , Sv = ( () => {
    let o = class o {
        constructor() {
            this.orderStore = y(qe),
            this.itemData = w.required(),
            this.itemData$ = oe(this.itemData),
            this.ipoData = M(this.itemData$),
            this.clickActionCallback = new Map([[Qe.openOfflineOrderForm, () => {
                this.handleOfflineOrder()
            }
            ], [Qe.openBuyOrderForm, () => {
                this.handleBuy()
            }
            ], [Qe.showOfflineRequest, () => {
                this.showOfflineRequest()
            }
            ], [Qe.showSymbolDetail, () => {
                this.showSymbolDetail()
            }
            ], [Qe.showOrderRequest, () => {
                this.showOrderRequest()
            }
            ], [Qe.openOrderHistory, () => {
                this.openOrderHistory()
            }
            ]]),
            this.DateStatus = Ee,
            this.OfflineIpoPriceTextStatus = zt
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["", "ipo-item", ""]],
        inputs: {
            itemData: [1, "itemData"]
        },
        attrs: h6,
        decls: 0,
        vars: 0,
        template: function(n, i) {},
        dependencies: [le],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
function y6(t, o) {
    if (t & 1 && _(0, "svg-icon", 3),
    t & 2) {
        let u = d(3);
        m("iconName", u.icons.Loading)
    }
}
function _6(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "button", 2),
        h("click", function(n) {
            let i;
            g(u);
            let c = d(2);
            return c.clickActionHandler.emit((i = c.buttonInfo()) == null ? null : i.ipoItemAction),
            v(n.stopPropagation())
        }),
        l(1),
        C(2, y6, 1, 1, "svg-icon", 3),
        r()
    }
    if (t & 2) {
        let u, e = d(2);
        m("disabled", e.orderStore.offlineLoading()),
        s(),
        F(" ", (u = e.buttonInfo()) == null ? null : u.text, " "),
        s(),
        f(e.orderStore.offlineLoading() ? 2 : -1)
    }
}
function g6(t, o) {
    if (t & 1 && _(0, "svg-icon", 3),
    t & 2) {
        let u = d(3);
        m("iconName", u.icons.Loading)
    }
}
function v6(t, o) {
    if (t & 1) {
        let u = I();
        a(0, "button", 4),
        h("click", function(n) {
            let i;
            g(u);
            let c = d(2);
            return c.clickActionHandler.emit((i = c.buttonInfo()) == null ? null : i.ipoItemAction),
            v(n.stopPropagation())
        }),
        l(1),
        C(2, g6, 1, 1, "svg-icon", 3),
        r()
    }
    if (t & 2) {
        let u, e = d(2);
        m("disabled", e.orderStore.offlineLoading()),
        s(),
        F(" ", (u = e.buttonInfo()) == null ? null : u.text, " "),
        s(),
        f(e.orderStore.offlineLoading() ? 2 : -1)
    }
}
function b6(t, o) {
    if (t & 1 && C(0, _6, 3, 3, "button", 0)(1, v6, 3, 3, "button", 1),
    t & 2) {
        let u = d();
        f(u.isMobile() ? 0 : 1)
    }
}
var Bv = ( () => {
    let o = class o {
        openBuyOrderForm() {
            this.buttonInfo.set({
                ipoItemAction: Qe.openBuyOrderForm,
                text: "\u062B\u0628\u062A \u0633\u0641\u0627\u0631\u0634"
            })
        }
        openOfflineOrderForm() {
            this.buttonInfo.set({
                ipoItemAction: Qe.openOfflineOrderForm,
                text: "\u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A"
            })
        }
        showSymbolDetail() {
            this.buttonInfo.set({
                ipoItemAction: Qe.showSymbolDetail,
                text: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0646\u0645\u0627\u062F"
            })
        }
        showOfflineRequest() {
            this.buttonInfo.set({
                ipoItemAction: Qe.showOfflineRequest,
                text: "\u0645\u0634\u0627\u0647\u062F\u0647 \u062F\u0631\u062E\u0648\u0627\u0633\u062A"
            })
        }
        showOrderRequest() {
            this.isMobile() ? this.buttonInfo.set({
                ipoItemAction: Qe.showOrderRequest,
                text: "\u0645\u0634\u0627\u0647\u062F\u0647 \u0633\u0641\u0627\u0631\u0634"
            }) : this.showSymbolDetail()
        }
        openOrderHistory() {
            this.buttonInfo.set({
                ipoItemAction: Qe.openOrderHistory,
                text: "\u0645\u0634\u0627\u0647\u062F\u0647 \u0633\u0641\u0627\u0631\u0634\u0627\u062A"
            })
        }
        constructor() {
            this.icons = O,
            this.orderStore = y(qe),
            this.ipo = w(),
            this.isMobile = w(),
            this.clickActionHandler = J(),
            this.buttonInfo = E(null),
            this.ipo$ = oe(this.ipo).pipe(V(e => {
                let n = this.orderStore.getOmsOrdersByIsin(e?.symbolIsin).filter(c => c.side === Lt.Buy && (c.isOpenOrder || c.IsDoneOrder || c.orderState === On.PartiallyExecution))
                  , i = !!this.orderStore.getOfflineOrder(e?.symbolIsin);
                if (e?.ipoType === te.IPO)
                    e?.isInOrders ? n?.length > 0 ? n.length > 1 ? this.openOrderHistory() : this.showOrderRequest() : i ? this.showOfflineRequest() : this.showSymbolDetail() : e?.distanceToDate.ipoDateState === be.inDateRange && e?.distanceToDate.ipoTimeState === Pe.inTimeRange ? this.openBuyOrderForm() : e?.distanceToDate.ipoDateState === be.hasNoDate || e?.distanceToDate.ipoDateState === be.beforeDateRange || e?.distanceToDate.ipoDateState === be.inDateRange && e?.distanceToDate.ipoTimeState === Pe.beforeTimeRange ? e?.hasOfflineOrdering ? this.openOfflineOrderForm() : this.showSymbolDetail() : e?.distanceToDate.ipoDateState === be.afterDateRange && this.showSymbolDetail();
                else if (e?.ipoType === te.IpoSubscription)
                    if (i)
                        i && this.showOfflineRequest();
                    else
                        switch (e?.distanceToDate.ipoDateState) {
                        case be.inDateRange:
                            switch (e?.distanceToDate.ipoTimeState) {
                            case Pe.afterTimeRange:
                            case Pe.beforeTimeRange:
                                {
                                    e?.hasOfflineOrdering ? this.openOfflineOrderForm() : n.length > 1 ? this.openOrderHistory() : this.showSymbolDetail();
                                    break
                                }
                            case Pe.inTimeRange:
                                {
                                    this.openBuyOrderForm();
                                    break
                                }
                            case Pe.hasNoTime:
                                e?.hasOfflineOrdering ? this.openOfflineOrderForm() : n.length > 1 ? this.openOrderHistory() : this.showSymbolDetail()
                            }
                            break;
                        case be.hasNoDate:
                        case be.beforeDateRange:
                            {
                                e?.hasOfflineOrdering ? this.openOfflineOrderForm() : n.length > 1 ? this.openOrderHistory() : this.showSymbolDetail();
                                break
                            }
                        case be.afterDateRange:
                            n.length > 1 ? this.openOrderHistory() : this.showSymbolDetail();
                            break
                        }
            }
            )),
            this.DateStatus = Ee,
            M(this.ipo$)
        }
    }
    ;
    o.\u0275fac = function(n) {
        return new (n || o)
    }
    ,
    o.\u0275cmp = N({
        type: o,
        selectors: [["ipo-item-button"]],
        inputs: {
            ipo: [1, "ipo"],
            isMobile: [1, "isMobile"]
        },
        outputs: {
            clickActionHandler: "clickActionHandler"
        },
        decls: 1,
        vars: 1,
        consts: [["type", "button", 1, "w-100", "btn", "btn-outline-global", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline-global", "d-flex", "flex-shrink-0", "justify-content-center", "align-items-center", 2, "width", "125px", "height", "36px", 3, "disabled"], ["type", "button", 1, "w-100", "btn", "btn-outline-global", 3, "click", "disabled"], ["width", "24", "height", "24", 1, "spin", 3, "iconName"], ["type", "button", 1, "btn", "btn-outline-global", "d-flex", "flex-shrink-0", "justify-content-center", "align-items-center", 2, "width", "125px", "height", "36px", 3, "click", "disabled"]],
        template: function(n, i) {
            if (n & 1 && C(0, b6, 2, 1),
            n & 2) {
                let c;
                f(((c = i.buttonInfo()) == null || c.text == null ? null : c.text.length) > 0 ? 0 : -1)
            }
        },
        dependencies: [le, B],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = o;
    return t
}
)();
export {vf as a, ft as b, ue as c, _3 as d, yi as e, In as f, p_ as g, D_ as h, Dg as i, Ug as j, pv as k, Sv as l, Bv as m, bn as n, ud as o, yt as p, Bn as q, Tu as r, Rn as s, qd as t, nn as u, gm as v, si as w, Um as x, Gp as y, Xa as z, u0 as A};
//# sourceMappingURL=chunk-3Z35ZEOH.js.map
