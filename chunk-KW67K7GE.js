import {A as le, B as Re, C as mi, K as ut, N as pi, S as yi, T as Ue, U as P, W as gi, Y as Si, Z as Y, a as ui, f as mt, g as Le, h as pe, ha as Ci, m as ci, p as z, q as Qe, r as U, s as di, z as lt} from "./chunk-3R47PHPO.js";
import {a as fe, b as st, c as se, e as fi, f as hi, g as ie, h as vi, j as Ae, k as bi} from "./chunk-E4T36IQ3.js";
import {b as pt, h as ae, j as at} from "./chunk-O3BOZ3M4.js";
import {$b as ti, $c as ai, B as Lt, Fc as oi, G as je, Gc as ni, Ia as it, Kc as Z, L as $e, Lc as si, Mc as ot, Ob as rt, P as me, Pb as ei, Q as Qt, Ua as zt, Vc as De, Wc as ne, Zb as _e, _c as X, bb as Kt, ca as et, cb as Yt, dc as ii, ed as li, hc as we, k as Ye, kd as nt, na as dt, nc as ri, pb as G, qb as Zt, ra as qt, rb as _, ua as Gt, va as Jt, vb as Xt, ya as tt} from "./chunk-OFJ5SZPL.js";
import {$ as K, Ac as m, Ad as ce, Bb as It, Bc as k, Fb as d, Fc as te, Ga as A, Gb as T, H as g, Hc as $, Ia as E, Ic as I, La as Ee, Lc as At, Mb as C, Nb as _t, P as bt, Pa as M, Pc as Mt, Pd as ve, Qc as Tt, Rc as Et, Sf as Ie, T as he, Tc as Ft, Tf as Se, Ua as J, Ub as Q, Uc as kt, Uf as Ve, Va as S, Wc as y, Wf as Ut, Xc as ue, Yb as wt, Yc as V, Z as ee, Zc as Pt, Zf as Ht, _b as j, _d as be, a as h, ae as oe, b as O, bg as Wt, db as W, eb as q, f as Bi, fd as Bt, gd as Nt, ha as Ge, hb as ze, kb as xt, kg as Xe, ld as L, ma as Je, mb as Fe, mc as Dt, md as R, nc as w, nd as jt, ne as xe, oa as Ce, oe as Rt, pb as Ot, pd as $t, pe as ge, q as vt, qb as ye, qe as B, rc as Ke, re as Oe, sc as ke, te as Ze, uc as F, ud as Vt, vc as Pe, xc as Be, yc as Ne, z as D, zc as c} from "./chunk-K3475DQT.js";
var xi = ( () => {
    let i = class i extends rt {
        constructor() {
            super(...arguments),
            this.symbolService = S(ae),
            this.mapData = e => new Y(O(h({}, e), {
                id: e.id?.toString(),
                quantity: e.volume,
                createDateTime: e.submitDateTime,
                executedQuantity: e.volumeDone,
                executingQuantity: e.volumeRemained,
                value: e.volumeDone * e.price,
                averagePrice: e.priceAverage,
                executedValue: e.valueDone,
                executedPercent: Math.round(e.volumeDone / e.volume * 100),
                executingPercent: Math.round(e.volumeRemained / e?.volume * 100),
                symbolName: this.symbolService?.symbolByIsin?.[e.symbolIsin]?.symbolName
            }))
        }
        get algoUrl() {
            return this.mtsPath + this.apiUrls.algo
        }
        get algoHistoryUrl() {
            return this.mtsPath + this.apiUrls.algoHistory
        }
        getHistory(e) {
            let t = {
                page: e.page + 1,
                size: e.size,
                history: !0
            };
            return e?.from && (t.from = e.from),
            e?.to && (t.to = e.to),
            +e?.side >= 0 && (t.side = e.side),
            +e?.state > 0 && (t.state = e.state.toString()),
            e?.symbolIsin && (t.symbolIsin = e.symbolIsin),
            e?.referenceId && (t.referenceId = e.referenceId),
            this.httpService.post(this.algoHistoryUrl, {
                body: t,
                guestUserRestriction: !0
            }).pipe(g(o => {
                let a = o.orderItemDto.map(this.mapData);
                return O(h({}, o), {
                    orderItemDto: a
                })
            }
            ), ee( () => D({
                orderItemDto: [],
                totalCount: 0
            })))
        }
        get() {
            return this.httpService.post(this.algoHistoryUrl, {
                body: {},
                guestUserRestriction: !0
            }).pipe(g(e => [...e.orderItemDto]), g(e => e.map(this.mapData)), ee( () => D([])))
        }
        post(e) {
            return this.httpService.post(this.algoUrl, {
                body: {
                    request: e
                },
                guestUserRestriction: !0
            }).pipe(g(t => O(h({}, t), {
                id: t?.id?.toString(),
                isSuccessful: !!t?.id
            })), ee( ({error: t}) => D({
                isSuccessful: !1,
                message: typeof t == "string" ? t : "\u062E\u0637\u0627 \u062F\u0631 \u062B\u0628\u062A \u0633\u0641\u0627\u0631\u0634"
            })))
        }
        put(e) {
            let t = {
                orders: [e]
            };
            return this.httpService.put(this.algoUrl, {
                body: {
                    request: t
                },
                guestUserRestriction: !0
            }).pipe(g(o => O(h({}, o), {
                isSuccessful: !0
            })), ee( ({error: o}) => D({
                isSuccessful: !1,
                message: typeof o == "string" ? o : "\u062E\u0637\u0627 \u062F\u0631 \u062B\u0628\u062A \u0633\u0641\u0627\u0631\u0634"
            })))
        }
        delete(e) {
            return this.httpService.delete(`${this.algoUrl}`, {
                body: {
                    request: {
                        ids: [+e]
                    }
                },
                guestUserRestriction: !0
            }).pipe(g( () => ({
                isSuccessful: !0
            })), ee( ({error: t}) => D({
                isSuccessful: !1,
                message: typeof t == "string" ? t : "\u062E\u0637\u0627 \u062F\u0631 \u062A\u0648\u0642\u0641 \u0633\u0641\u0627\u0631\u0634"
            })))
        }
    }
    ;
    i.\u0275fac = ( () => {
        let e;
        return function(o) {
            return (e || (e = ze(i)))(o || i)
        }
    }
    )(),
    i.\u0275prov = M({
        token: i,
        factory: i.\u0275fac,
        providedIn: "root"
    });
    let r = i;
    return r
}
)();
var p = si({
    source: "algo",
    events: O(h({}, ui), {
        add: Z(),
        set: Z(),
        update: Z(),
        createAlgo: Z(),
        updateAlgo: Z(),
        requestDone: Z(),
        stopAlgo: Z(),
        stoppedAlgo: Z(),
        deletedAlgo: Z(),
        loadHistory: ot(),
        setHistory: Z(),
        selectAlgo: Z(),
        unSelectAlgo: ot(),
        subscribeToLS: ot()
    })
});
var Oi = ( () => {
    let i = class i extends Re {
        constructor() {
            super(),
            this.orderLsNewService = S(yi),
            this.orderFacade = S(Re),
            it( () => this.store.dispatch(p.subscribeToLS()), 500),
            B(this.orderLsNewService.loadAlgo$.pipe(E(e => e && this.load()))),
            B(this.orderFacade.loadAlgo$.pipe(E(e => e && this.load())))
        }
        load() {
            this.store.dispatch(p.load())
        }
        delete(e) {
            this.store.dispatch(p.stopAlgo({
                id: e
            }))
        }
        algoStopped(e) {
            this.store.dispatch(p.stoppedAlgo({
                id: e
            }))
        }
        updateState(e, t) {
            this.store.dispatch(p.update({
                id: e,
                changes: t
            }))
        }
        updateStates(e, t) {
            let o = e.map(a => ({
                id: a,
                changes: t
            }));
            this.store.dispatch(p.updateMany({
                values: o
            }))
        }
        deleteState(e) {
            this.store.dispatch(p.delete({
                id: e
            }))
        }
        selectAlgo(e) {
            this.store.dispatch(p.selectAlgo({
                id: e
            }))
        }
        unSelectAlgo() {
            this.store.dispatch(p.unSelectAlgo())
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)
    }
    ,
    i.\u0275prov = M({
        token: i,
        factory: i.\u0275fac,
        providedIn: "root"
    });
    let r = i;
    return r
}
)();
var de = fi()
  , $i = de.getInitialState({
    loading: !1,
    history: []
});
function Ii(r, i) {
    return Vi(r, i)
}
var Vi = ai($i, X(p.load, r => O(h({}, r), {
    loading: !0
})), X(p.loadHistory, r => O(h({}, r), {
    loading: !0
})), X(p.loaded, r => O(h({}, r), {
    loading: !1
})), X(p.loadedError, r => O(h({}, r), {
    loading: !1
})), X(p.set, (r, {value: i}) => {
    let n = i.map(e => new Y(O(h({}, e), {
        referenceId: `AT-${e.id}-`
    })));
    return de.setAll(n, r)
}
), X(p.add, (r, {value: i}) => {
    let n = Object.values(r.entities).findIndex(t => t.id === i.id)
      , e = new Y(O(h({}, i), {
        referenceId: `AT-${i.id}-`
    }));
    if (n < 0)
        return de.addOne(e, r)
}
), X(p.update, (r, {id: i, changes: n}) => {
    try {
        let e = Object.values(r.entities).find(a => a.id === i)
          , t = de.removeOne(i, r)
          , o = new Y(O(h(h({}, e), n), {
            state: e.state === Ue.WaitForStop && n.state === P.Running ? e.state : n.state,
            referenceId: `AT-${i}-`
        }));
        return de.addOne(o, t)
    } catch {
        return r
    }
}
), X(p.delete, (r, {id: i}) => de.removeOne(i, r)), X(p.deleteMany, (r, {ids: i}) => de.removeMany(i, r)), X(p.selectAlgo, (r, {id: i}) => O(h({}, r), {
    selectedId: i
})), X(p.unSelectAlgo, r => O(h({}, r), {
    selectedId: void 0
})))
  , Xr = de.getSelectors().selectAll
  , eo = de.getSelectors().selectEntities;
var oo = {
    algoState: Ii
};
var re = {};
Bi(re, {
    algoOmsOrders: () => Li,
    asd: () => Ri,
    getAlgoOpenOrders: () => Wi,
    getAlgoOrder: () => Ui,
    getAlgoOrderDetail: () => Hi,
    getAlgoOrdersNeedToGetLatestForm: () => yt,
    getAllAlgoOrders: () => Me,
    getLoading: () => Qi,
    getSelectedAlgoId: () => ht
});
var ft = r => r.algoState
  , Me = ne(ft, r => Object.values(r?.entities))
  , Li = ne(lt.AlgoOmsOrders, r => r)
  , Qi = ne(ft, r => Object.values(r?.loading))
  , Ri = ne(lt.AlgoOmsOrders, r => r)
  , ht = ne(ft, r => r.selectedId)
  , Ui = r => ne(Me, i => {
    let n = i.find(e => e.id === r);
    return new Y(h({}, n))
}
)
  , Hi = r => ne(lt.AlgoOmsOrders, i => i.filter(n => n.referenceId === r))
  , Wi = r => ne(Me, i => i.filter(n => n.symbolIsin === r && n.IsDeleteValid))
  , yt = () => ne(Me, r => r.filter(i => Si.includes(i.state)));
var _i = ( () => {
    let i = class i {
        getOrdersNeedToFetchLatestFormFromApi$() {
            return this.store.select(yt())
        }
        constructor(e) {
            this.store = e,
            this.SelectedAlgId$ = this.store.select(ht),
            this.allAlgoOrders$ = this.store.select(Me)
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)(J(De))
    }
    ,
    i.\u0275prov = M({
        token: i,
        factory: i.\u0275fac,
        providedIn: "root"
    });
    let r = i;
    return r
}
)();
var zi = ( () => {
    let i = class i {
        constructor(e, t, o, a, u, f, v, b) {
            this.actions$ = e,
            this.lsService = t,
            this.symbolService = o,
            this.algoService = a,
            this.notificationService = u,
            this.unleashService = f,
            this.algoFacade = v,
            this.algoStore = b,
            this.loadAlgoOrder$ = fe( () => this.actions$.pipe(se(p.load), K(this.unleashService.isFeatureEnabled$(Zt.algo).pipe(Ce(Boolean))), A( () => this.algoService.get().pipe(g(l => this.updateSymbolName(l)), g(l => p.set({
                value: l
            })), ee(l => (this.notifyError(l.error),
            D(p.empty()))))))),
            this.createAlgoOrder$ = fe( () => this.actions$.pipe(se(p.createAlgo), Je( ({newValue: l, sendingValue: s, popUpId: x}) => this.algoService.post(s).pipe(E(H => {
                H?.isSuccessful || this.notifyError(H.message)
            }
            ), A(H => H?.isSuccessful ? [p.add({
                value: O(h({}, l), {
                    id: H.id.toString()
                })
            }), p.requestDone({
                value: H,
                popUpId: x
            })] : D(p.empty())), ee( () => (this.notifyError("\u062E\u0637\u0627 \u062F\u0631 \u062B\u0628\u062A \u0633\u0641\u0627\u0631\u0634"),
            D(p.empty()))))))),
            this.updateAlgoOrder$ = fe( () => this.actions$.pipe(se(p.updateAlgo), Je( ({newValue: l, sendingValue: s, popUpId: x}) => this.algoService.put(s).pipe(E(H => {
                H?.isSuccessful || this.notifyError(H.message)
            }
            ), A(H => {
                return H?.isSuccessful && this.notifySuccess("\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0633\u0641\u0627\u0631\u0634 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F"),
                [p.update({
                    id: l.id,
                    changes: O(h({}, l), {
                        isEditMode: !1
                    })
                }), p.requestDone({
                    value: H,
                    popUpId: x
                })];
                return D(p.empty())
            }
            ), ee( () => (this.notifyError("\u062E\u0637\u0627 \u062F\u0631 \u062B\u0628\u062A \u0633\u0641\u0627\u0631\u0634"),
            D(p.empty()))))))),
            this.stopAlgoOrder$ = fe( () => this.actions$.pipe(se(p.stopAlgo), Je( ({id: l, popUpId: s}) => this.algoService.delete(l).pipe(E(x => {
                x?.isSuccessful || this.notifyError(x.message)
            }
            ), A(x => x?.isSuccessful ? [p.update({
                id: l,
                changes: {
                    state: Ue.WaitForStop
                }
            }), p.requestDone({
                value: x,
                popUpId: s
            })] : D(p.empty())), ee( () => (this.notifyError("\u062E\u0637\u0627 \u062F\u0631 \u062A\u0648\u0642\u0641 \u0633\u0641\u0627\u0631\u0634"),
            D(p.empty()))))))),
            this.addedAlgoOrder$ = fe( () => this.actions$.pipe(se(p.requestDone), A( () => bt(1e4).pipe(Ee(this.algoStore.getOrdersNeedToFetchLatestFormFromApi$()), g( ([,l]) => l.length ? p.load() : p.empty()))))),
            this.stoppedAlgoOrder$ = fe( () => this.actions$.pipe(se(p.stoppedAlgo), Ge(2e3), g( ({id: l}) => p.update({
                id: l,
                changes: {
                    state: P.Stop
                }
            })))),
            this.subscribeToLS$ = fe( () => this.actions$.pipe(se(p.subscribeToLS), A( () => this.lsService.subscribeToLs(me.AlgoParent)), g( ({val: l}) => this.mapData(JSON.parse(l))), E(l => {
                l.state === P.OnBoard && this.notifySuccess("\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0633\u0641\u0627\u0631\u0634 \u0647\u0648\u0634\u0645\u0646\u062F \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062B\u0628\u062A \u06AF\u0631\u062F\u06CC\u062F"),
                l.state === P.Stop && (l.state = Ue.DisableBeforeStop,
                this.algoFacade.algoStopped(l.id),
                this.notifySuccess("\u0633\u0641\u0627\u0631\u0634 \u0645\u062A\u0648\u0642\u0641 \u0634\u062F")),
                l.state === P.Error && this.notifyError(gi[l?.descriptionCode] ?? "\u062B\u0628\u062A \u0633\u0641\u0627\u0631\u0634 \u0628\u0627 \u062E\u0637\u0627 \u0645\u0648\u0627\u062C\u0647 \u0634\u062F")
            }
            ), Ee(this.algoStore.allAlgoOrders$), g( ([l,s]) => s.some(x => x.id === l.id) ? p.update({
                id: l.id,
                changes: O(h({}, l), {
                    createDateTime: l.createDateTime?.replace("Z", "")
                })
            }) : p.add({
                value: O(h({}, l), {
                    createDateTime: l.createDateTime?.replace("Z", "")
                })
            })))),
            this.mapData = l => new Y(O(h({}, l), {
                id: l.id?.toString(),
                quantity: l.volume,
                createDateTime: l.submitDateTime,
                executedQuantity: l.volumeDone,
                executingQuantity: l.volumeRemained,
                remainedQuantity: l.volumeRemained,
                value: l.volumeDone * l.price,
                executedValue: l.valueDone,
                executedPercent: Math.round(l.volumeDone / l.volume),
                executingPercent: Math.round(l.volumeRemained / l?.volume * 100),
                symbolName: this.symbolService?.symbolByIsin?.[l.symbolIsin]?.symbolName
            }))
        }
        notifyError(e) {
            this.notificationService.alert(e, G.danger)
        }
        notifySuccess(e) {
            this.notificationService.alert(e, G.success)
        }
        updateSymbolName(e) {
            return e.map(t => O(h({}, t), {
                symbolName: this.symbolService?.symbolByIsin?.[t.symbolIsin]?.symbolName
            }))
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)(J(st),J(_e),J(ae),J(xi),J(we),J(oi),J(Oi),J(_i))
    }
    ,
    i.\u0275prov = M({
        token: i,
        factory: i.\u0275fac,
        providedIn: "root"
    });
    let r = i;
    return r
}
)()
  , yo = [zi];
var ct = ( () => {
    let i = class i {
        getAlgoOrderDetails(e) {
            return this.store.select(re.getAlgoOrderDetail(e))
        }
        getAlgoOpenOrders(e) {
            return this.store.selectSignal(re.getAlgoOpenOrders(e))()
        }
        getAlgoOrderById(e) {
            return this.store.selectSignal(re.getAlgoOrder(e))()
        }
        getAlgoOrder(e) {
            return this.store.selectSignal(re.getAlgoOrder(e))()
        }
        constructor(e, t) {
            this.store = e,
            this.actions$ = t,
            this.orderStore = S(le),
            this.SelectedAlgId$ = this.store.select(re.getSelectedAlgoId),
            this.allAlgoOrders$ = this.store.select(re.getAllAlgoOrders),
            this.Loading = this.store.selectSignal(re.getLoading),
            this.algoRequestDone$ = this.actions$.pipe(se(p.requestDone), g(o => ({
                order: o?.value,
                popUpId: o?.popUpId
            })))
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)(J(De),J(st))
    }
    ,
    i.\u0275prov = M({
        token: i,
        factory: i.\u0275fac,
        providedIn: "root"
    });
    let r = i;
    return r
}
)();
var jo = (r, i, n, e, t, o, a=0) => {
    if (!e || isNaN(e) || e === 0)
        return n;
    let u = 0;
    return r === _.Buy && (u = Math.floor(i / (e * (1 + t) + a))),
    r === _.Sell ? o < n ? o : n : n < u ? n : u
}
  , $o = (r, i, n, e, t=0, o=1) => {
    if (!n || isNaN(n) || n === 0)
        return 0;
    switch (r) {
    case _.Buy:
        return Math.floor(i / (n * (1 + e) + t) / o);
    case _.Sell:
        return Math.ceil(i / (n * (1 - e)) / o);
    default:
        return 0
    }
}
  , wi = (r, i, n, e, t=0, o=1) => {
    if (!n || isNaN(n) || n === 0)
        return 0;
    switch (r) {
    case _.Buy:
        return Math.ceil(i * (n * (1 + e) + t) * o);
    case _.Sell:
        return Math.floor(i * (n * (1 - e)) * o);
    default:
        return 0
    }
}
  , Vo = (r, i, n, e=0) => Math.round((1 + n) / (1 - i) * r) + e
  , Lo = (r, i, n, e=1) => Math.round(r * i * n * e)
  , Qo = (r, i=0) => Math.round(r * i)
  , Ro = (r, i, n, e, t=0) => {
    switch (r) {
    case _.Buy:
        return Math.round((1 + e) * i * n) + n * t;
    case _.Sell:
        return Math.round((1 - e) * i * n);
    default:
        return 0
    }
}
  , Uo = (r, i, n, e, t, o, a=1) => {
    if (i === 0)
        return 0;
    if (e === void 0 || e === _.Sell)
        return n * i + r * i * a;
    if (o + i <= t)
        return 0;
    let u = Math.abs(t - o - i);
    return n * u + u * r * a
}
  , Ho = (r, i) => {
    let n = 5e6;
    return $e.BazarPayehMarketUnits.includes(r.marketUnit) && (n = 5e7),
    $e.EtfMarketUnits.includes(r.marketUnit) && (n = 1e6),
    Math.ceil(n / (i + r.hidePrice))
}
  , Wo = (r, i, n, e) => {
    let a = 0;
    return r.owner === pt.IFB ? a = Math.ceil(5e4 / (i * (1 - e))) : r.owner === pt.TSE && (a = Math.ceil(5e6 / (i * (1 - e)))),
    n < a ? n : a
}
;
var Ki = 1e8
  , Yi = 2e11
  , Di = ( () => {
    let i = class i {
        constructor() {
            this.algoOrderStore = S(ct)
        }
        doBasicAlgoValidations(e, t) {
            let o = this.algoOrderStore.getAlgoOpenOrders(e.symbolIsin);
            if (o = o?.filter(u => u.id !== e.id && u.side === e.side),
            o?.length)
                return {
                    successful: !1,
                    errorMessage: "\u0628\u0631\u0627\u06CC \u0627\u06CC\u0646 \u0646\u0645\u0627\u062F \u06CC\u06A9 \u0633\u0641\u0627\u0631\u0634 \u0647\u0648\u0634\u0645\u0646\u062F \u0641\u0639\u0627\u0644 \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F"
                };
            if (!e)
                return {
                    successful: !1,
                    errorMessage: z.ValidationMessages.OrderIsNotValid
                };
            if (!e.price)
                return {
                    successful: !1,
                    errorMessage: z.ValidationMessages.PriceIsEmpty
                };
            if (isNaN(e.price) || e.price <= 0)
                return {
                    successful: !1,
                    errorMessage: z.ValidationMessages.PriceIsNotValid
                };
            if (!e.quantity)
                return {
                    successful: !1,
                    errorMessage: t ? "\u0628\u0648\u062F\u062C\u0647 \u0633\u0641\u0627\u0631\u0634 \u06A9\u0627\u0641\u06CC \u0646\u0645\u06CC\u200C\u0628\u0627\u0634\u062F" : z.ValidationMessages.QuantityIsEmpty
                };
            if (isNaN(e.quantity) || e.quantity <= 0)
                return {
                    successful: !1,
                    errorMessage: z.ValidationMessages.QuantityIsNotValid
                };
            let a = wi(e.side, e.quantity, e.price, e.commission);
            return a < Ki ? {
                successful: !1,
                errorMessage: "\u062D\u062F\u0627\u0642\u0644 \u0627\u0631\u0632\u0634 \u0633\u0641\u0627\u0631\u0634 \u0647\u0648\u0634\u0645\u0646\u062F 10 \u0645\u06CC\u0644\u06CC\u0648\u0646 \u062A\u0648\u0645\u0627\u0646 \u0627\u0633\u062A"
            } : a > Yi ? {
                successful: !1,
                errorMessage: "\u062D\u062F\u0627\u06A9\u062B\u0631 \u0627\u0631\u0632\u0634 \u0633\u0641\u0627\u0631\u0634 \u0647\u0648\u0634\u0645\u0646\u062F 20 \u0645\u06CC\u0644\u06CC\u0627\u0631\u062F \u062A\u0648\u0645\u0627\u0646 \u0627\u0633\u062A"
            } : {
                successful: !0,
                errorMessage: ""
            }
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)
    }
    ,
    i.\u0275prov = M({
        token: i,
        factory: i.\u0275fac,
        providedIn: "root"
    });
    let r = i;
    return r
}
)();
var Ai = ( () => {
    let i = class i {
        constructor() {
            this.store = S(De),
            this.algoOrderStore = S(ct),
            this.algoOrderValidation = S(Di),
            this.orderNotificationService = S(ni),
            this.orderStore = S(le)
        }
        create(e, t, o) {
            let a = this.algoOrderValidation.doBasicAlgoValidations(e, t);
            if (!a.successful)
                return this.orderNotificationService.notifyError(a.errorMessage);
            let u = {
                price: e.price,
                volume: e.quantity,
                side: e.side,
                symbolIsin: e.symbolIsin
            };
            this.store.dispatch(p.createAlgo({
                newValue: e,
                sendingValue: u,
                popUpId: o
            }))
        }
        update(e, t, o) {
            let a = this.algoOrderValidation.doBasicAlgoValidations(e, t);
            if (!a.successful)
                return this.orderNotificationService.notifyError(a.errorMessage);
            let u = {
                id: e.id,
                price: e.price.toString(),
                volume: e.quantity
            };
            this.store.dispatch(p.updateAlgo({
                newValue: e,
                sendingValue: u,
                popUpId: o
            }))
        }
        getAlgoOrder(e) {
            return this.algoOrderStore.allAlgoOrders$.pipe(K(this.orderStore.algoOmsOrders$), A( ([t,o]) => {
                let a = t.find(v => v.id === e);
                if (!a)
                    return;
                let u = o.filter(v => v.referenceId.includes(a.referenceId))
                  , f = this.calculateAlgoOrderSummary(a, u);
                return D(new Y(O(h(h({}, a), f), {
                    details: u
                })))
            }
            ))
        }
        getAlgoOrderById(e) {
            return this.algoOrderStore.getAlgoOrderById(e)
        }
        tabFilter$(e) {
            let t = g(u => e.showDone && e.showDraft ? u : e?.showDraft ? u.filter(f => f.orderModelType === U.draft) : e?.showDraft === !1 ? u.filter(f => f.orderModelType !== U.draft) : u)
              , o = g(u => e.showDone && e.showDraft ? u : e?.showDone ? u.filter(f => [P.Done, P.Stop].includes(f.state)) : e?.showDone === !1 ? u.filter(f => ![P.Done, P.Stop].includes(f.state)) : u)
              , a = g(u => e?.searchInput ? u.filter(f => f.symbolName.includes(e?.searchInput)) : u);
            return this.getAlgoOrdersWithDetails$().pipe(t, o, a).pipe(g(u => u.filter(f => ![P.Error, P.Stop].includes(f.state) || f.state === P.Stop && f.executedQuantity)))
        }
        toggleFilter$(e) {
            let t = g(v => e?.showGreen === !1 ? v.filter(b => b.side !== _.Buy) : v)
              , o = g(v => e?.showRed === !1 ? v.filter(b => b.side !== _.Sell) : v)
              , a = g(v => e?.showDone === !1 ? v.filter(b => ![P.Done, P.Stop].includes(b.state)) : v)
              , u = g(v => e?.searchInput ? v.filter(b => b.symbolName.includes(e?.searchInput)) : v)
              , f = g(v => e?.symbolIsin ? v.filter(b => b.symbolIsin === e?.symbolIsin) : v);
            return this.getAlgoOrdersWithDetails$().pipe(t, o, a, u, f).pipe(g(v => v.filter(b => ![P.Error, P.Stop].includes(b.state) || b.state === P.Stop && b.executedQuantity)))
        }
        getAlgoOrdersWithDetails$() {
            return this.algoOrderStore.allAlgoOrders$.pipe(K(this.orderStore.algoOmsOrders$), A( ([e,t]) => {
                let o = e.map(a => {
                    let u = t.filter(v => v.referenceId.includes(a.referenceId))
                      , f = this.calculateAlgoOrderSummary(a, u);
                    return new Y(O(h(h({}, a), f), {
                        details: u
                    }))
                }
                );
                return D(o)
            }
            ))
        }
        getSelectedAlgoOrder() {
            return this.getAlgoOrdersWithDetails$().pipe(K(this.algoOrderStore.SelectedAlgId$), A( ([e,t]) => D(e.find(o => o.id === t) ?? null)))
        }
        getOrders$(e) {
            return this.getAlgoOrdersWithDetails$().pipe(g(t => {
                let o = [...t];
                return e && (o = o.filter(a => e.map(u => u.trim()).includes(a.id.trim()))),
                o
            }
            ))
        }
        getAlgoOrderSummary$(e) {
            return this.algoOrderStore.allAlgoOrders$.pipe(K(this.orderStore.algoOmsOrders$), A( ([t,o]) => {
                let a = t.find(f => f.id === e);
                if (!a)
                    return;
                let u = o.filter(f => f.referenceId.includes(a.referenceId));
                return D(this.calculateAlgoOrderSummary(a, u))
            }
            ))
        }
        calculateAlgoOrderSummary(e, t) {
            let o = t.map(u => u.ExecutedQuantity * u.price).reduce( (u, f) => u + f, 0)
              , a = e.quantity - e.executedQuantity;
            return {
                executedQuantity: e.executedQuantity,
                executingQuantity: e.executingQuantity,
                remainedQuantity: a,
                executedValue: o,
                value: e?.quantity * e?.price,
                averagePrice: e.averagePrice,
                executedPercent: Math.round(e.executedQuantity / e?.quantity * 100),
                executingPercent: Math.round(e.executingQuantity / e?.quantity * 100)
            }
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)
    }
    ,
    i.\u0275prov = M({
        token: i,
        factory: i.\u0275fac,
        providedIn: "root"
    });
    let r = i;
    return r
}
)();
var pn = ( () => {
    let i = class i extends rt {
        getTrades(e) {
            return this.httpService.get(this.mtsPath + this.apiUrls.easy + "orderHistory/trades/", {
                options: {
                    headers: {
                        "order-id": e
                    }
                }
            })
        }
        get(e, t=!0) {
            return this.httpService.post(this.mtsPath + this.apiUrls.easy + "orderHistory/orderReport", {
                body: {
                    sieveModel: e,
                    searchTadbir: t
                }
            })
        }
    }
    ;
    i.\u0275fac = ( () => {
        let e;
        return function(o) {
            return (e || (e = ze(i)))(o || i)
        }
    }
    )(),
    i.\u0275prov = M({
        token: i,
        factory: i.\u0275fac,
        providedIn: "root"
    });
    let r = i;
    return r
}
)();
function fn(r) {
    return r && (/^\d/.test(r) && Gt(r) ? z.OmsErrorCodeToDescription[r.slice(0, r.indexOf(":"))] : /^\d/.test(r) && Jt(r) ? r.slice(r.indexOf(":") + 1) : r)
}
var Xi = (r, i) => ({
    "text-danger": r,
    "text-success": i
});
function er(r, i) {
    if (r & 1 && k(0, "svg-icon", 5),
    r & 2) {
        let n = I();
        w("iconName", n.icons.Alert)
    }
}
function tr(r, i) {
    if (r & 1 && (c(0, "small", 6),
    y(1),
    m()),
    r & 2) {
        let n, e = I();
        d(),
        ue((n = e.Symbol()) == null ? null : n.title)
    }
}
function ir(r, i) {
    r & 1 && (c(0, "small", 11),
    y(1, "0 (0%)"),
    m())
}
function rr(r, i) {
    if (r & 1 && (c(0, "small", 11),
    y(1),
    L(2, "number"),
    L(3, "number"),
    m()),
    r & 2) {
        let n, e = I();
        d(),
        Pt(" ", R(2, 2, ((n = e.marketData()) == null ? null : n.totalNumberOfSharesTraded) > 0 ? (n = e.marketData()) == null ? null : n.lastTradedPriceVar : 0), " (", jt(3, 4, ((n = e.marketData()) == null ? null : n.totalNumberOfSharesTraded) > 0 ? (n = e.marketData()) == null ? null : n.lastTradedPriceVarPercent : 0, "1.2-2"), "%) ")
    }
}
var Mi = ( () => {
    let i = class i {
        constructor(e, t, o) {
            this.superMarketDataService = e,
            this.superLsService = t,
            this.superSymbolService = o,
            this.icons = xe,
            this.showTitle = !0,
            this.symbolIsin = ye.required(),
            this.symbolIsin$ = ge(this.symbolIsin).pipe(he(Boolean)),
            this.marketData = C(null),
            this.Symbol = B(this.symbolIsin$.pipe(A(a => this.superSymbolService.getSymbolStream(a)))),
            this.drawerSubs = []
        }
        ngAfterViewInit() {
            this.superMarketDataService.callMarketDataIfLsNotConnected( () => this.getStockDetailsMarketData()),
            this.getSymbolHeaderData()
        }
        ngOnDestroy() {
            this.drawerSubs.forEach(e => e.unsubscribe()),
            this.superLsService.unsubscribeSchema(me.SymbolHeader, this.symbolIsin())
        }
        getSymbolHeaderData() {
            let e = this.superLsService.subscribeToLs(me.SymbolHeader, this.symbolIsin()).subscribe(t => {
                this.marketData.set(ti(t.val)),
                this.cancelApiCallIfDataReceivedFromLS(this.marketData()),
                this.marketData.update(o => (o.closingPriceVarPercent = this.superSymbolService.calculateClosingPriceVarPercent(o.closingPrice, o.feeOfPreviousDaysClosingPrice, o.totalNumberOfSharesTraded) || 0,
                h({}, o)))
            }
            );
            this.drawerSubs.push(e)
        }
        cancelApiCallIfDataReceivedFromLS(e) {
            e.lastTradedPrice > 0 && this.superMarketDataService.lsDataIsReceived(this.getStockDetailsMarketData.name)
        }
        getStockDetailsMarketData() {
            let e = this.superMarketDataService.GetMarketData(9, this.symbolIsin()).subscribe({
                next: t => {
                    this.marketData() || this.marketData.set(Xt),
                    this.marketData.update(o => (o.lastTradedPrice = t.lastTradedPrice,
                    o.feeOfPreviousDaysClosingPrice = t.feeOfPreviousDaysClosingPrice,
                    o.lastTradedPriceVar = this.superSymbolService.calculateLastTradedPriceVar(t.lastTradedPrice, t.feeOfPreviousDaysClosingPrice),
                    o.lastTradedPriceVarPercent = t.priceVar,
                    o.stateColor = et(t.stateCode),
                    o.closingPrice = t.closingPrice,
                    o.totalNumberOfSharesTraded = t.totalNumberOfSharesTraded,
                    h({}, o)))
                }
            });
            this.drawerSubs.push(e)
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)(T(ii),T(_e),T(ae))
    }
    ,
    i.\u0275cmp = Q({
        type: i,
        selectors: [["order-drawer-market-data"]],
        inputs: {
            showTitle: "showTitle",
            symbolIsin: [1, "symbolIsin"]
        },
        decls: 16,
        vars: 13,
        consts: [[1, "d-flex", "flex-grow-1", "align-items-center", "py-2"], [3, "stateColor"], [1, "flex-grow-1", "text-truncate", 3, "title"], ["id", "symbol-header-div", 1, "d-flex", "align-items-center"], ["id", "symbol-header-h5", 1, "h5", "mb-0", "text-truncate"], ["width", "20", "height", "20", 1, "text-danger", "ms-1", "cup", 3, "iconName"], ["id", "symbol-header-title", 1, "symbol-info-title", "text-muted"], ["dir", "ltr", "id", "symbol-header-last-div", 1, "d-flex", "align-items-center", "h5", "text-end", "mb-0", "flex-shrink-0", 2, "font-size", "1rem"], ["id", "symbol-header-last-span", 1, "ms-1"], ["id", "symbol-header-last-small", 3, "ngClass"], ["id", "symbol-header-last-inner-div"], ["id", "symbol-header-last-inner-small"]],
        template: function(t, o) {
            if (t & 1 && (c(0, "div", 0),
            k(1, "symbol-state", 1),
            c(2, "div", 2)(3, "div", 3)(4, "div", 4),
            y(5),
            m(),
            j(6, er, 1, 1, "svg-icon", 5),
            m(),
            j(7, tr, 2, 1, "small", 6),
            m(),
            c(8, "div", 7)(9, "span", 8),
            y(10),
            L(11, "number"),
            m(),
            c(12, "small", 9)(13, "div", 10),
            j(14, ir, 2, 0, "small", 11)(15, rr, 4, 7, "small", 11),
            m()()()()),
            t & 2) {
                let a, u, f, v, b, l, s;
                d(),
                w("stateColor", (a = o.marketData()) == null ? null : a.stateColor),
                d(),
                At("title", (u = o.Symbol()) == null ? null : u.title),
                d(3),
                ue((f = o.Symbol()) == null ? null : f.symbolName),
                d(),
                F((v = o.Symbol()) != null && v.manner || (v = o.Symbol()) != null && v.isCaution ? 6 : -1),
                d(),
                F(o.showTitle ? 7 : -1),
                d(3),
                V(" ", R(11, 8, (b = o.marketData()) == null ? null : b.lastTradedPrice), " "),
                d(2),
                w("ngClass", Nt(10, Xi, ((l = o.marketData()) == null ? null : l.lastTradedPriceVarPercent) < 0, ((l = o.marketData()) == null ? null : l.lastTradedPriceVarPercent) > 0)),
                d(2),
                F(((s = o.marketData()) == null ? null : s.totalNumberOfSharesTraded) === 0 ? 14 : 15)
            }
        },
        dependencies: [oe, ve, be, Ze, Oe],
        encapsulation: 2
    });
    let r = i;
    return r
}
)();
var or = r => ({
    loading: r
});
function nr(r, i) {
    if (r & 1 && (c(0, "li", 2)(1, "span", 5),
    y(2),
    m(),
    c(3, "span"),
    y(4),
    m()()),
    r & 2) {
        let n = i.$implicit;
        d(2),
        ue(n.label),
        d(),
        ke("line-height-18px d-flex gap-1 ", n.class, ""),
        d(),
        ue(n.value)
    }
}
function sr(r, i) {
    if (r & 1 && (c(0, "li", 2)(1, "span", 5),
    y(2, "\u062C\u0627\u06CC\u06AF\u0627\u0647 \u0644\u062D\u0638\u0647\u200C\u0627\u06CC"),
    m(),
    c(3, "span", 6),
    y(4),
    L(5, "number"),
    m()(),
    c(6, "li", 2)(7, "span", 5),
    y(8, "\u062D\u062C\u0645 \u067E\u06CC\u0634 \u0631\u0648"),
    m(),
    c(9, "span", 7),
    y(10),
    L(11, "number"),
    m()()),
    r & 2) {
        let n = I();
        d(3),
        Ke(n.orderPlaceClass()),
        d(),
        ue(R(5, 6, n.order.orderPlace)),
        d(5),
        Ke(n.orderPlaceClass()),
        d(),
        ue(R(11, 8, n.order.volumeAhead))
    }
}
function ar(r, i) {
    if (r & 1) {
        let n = te();
        c(0, "div", 4),
        y(1),
        c(2, "div", 8)(3, "button", 9),
        $("click", function() {
            W(n);
            let t = I();
            return q(t.confirmHandler(t.showConfirm()))
        }),
        k(4, "svg-icon", 10),
        m(),
        c(5, "button", 11),
        $("click", function() {
            W(n);
            let t = I();
            return q(t.cancelHandler())
        }),
        k(6, "svg-icon", 10),
        m()()()
    }
    if (r & 2) {
        let n, e = I();
        d(),
        V(" ", (n = e.showConfirm()) == null ? null : n.confirmText, " "),
        d(),
        w("ngClass", Bt(4, or, e.showLoading())),
        d(2),
        w("iconName", e.icons.Check),
        d(2),
        w("iconName", e.icons.Close)
    }
}
function lr(r, i) {
    if (r & 1) {
        let n = te();
        c(0, "button", 13),
        $("click", function() {
            let t = W(n).$implicit
              , o = I(2);
            return q(o.buttonClickedHandler(t))
        }),
        k(1, "svg-icon", 10),
        c(2, "span", 14),
        y(3),
        m()()
    }
    if (r & 2) {
        let n = i.$implicit;
        ke("", n.class, " btn btn-outline-primary w-100 "),
        Dt("data-cy", "button-" + (n == null ? null : n.iconName)),
        d(),
        Ke(n.class),
        w("iconName", n == null ? null : n.iconName),
        d(2),
        ue(n.text)
    }
}
function ur(r, i) {
    if (r & 1 && Be(0, lr, 4, 8, "button", 12, Pe),
    r & 2) {
        let n = I();
        Ne(n.actionButtons)
    }
}
var Te = ( () => {
    let i = class i {
        constructor() {
            this.icons = xe,
            this.showConfirm = C(null),
            this.showLoading = C(!1),
            this.OrderModelType = U,
            this.orderPlaceClass = C("")
        }
        buttonClickedHandler(e) {
            e.needConfirm ? this.showConfirm.set(e) : this.confirmHandler(e)
        }
        confirmHandler(e) {
            e.outputCallBack(null)
        }
        cancelHandler() {
            this.showConfirm.set(null)
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)
    }
    ,
    i.\u0275cmp = Q({
        type: i,
        selectors: [["order-drawer-tools"]],
        inputs: {
            order: "order",
            actionButtons: "actionButtons",
            information: "information"
        },
        decls: 8,
        vars: 3,
        consts: [[3, "symbolIsin"], [1, "list-group", "list-group-flush", "p-0", "m-0"], [1, "list-group-item", "d-flex", "justify-content-between", "px-0"], ["data-cy", "order-drawer-tools-buttons", 1, "d-flex", "justify-content-between", "mb-3", "gap-1"], [1, "align-items-center", "bg-principal-2x", "d-flex", "flex-grow-1", "p-2", "rounded-1"], [1, "text-secondary"], ["data-cy", "order-drawer-orderPlace"], ["data-cy", "order-drawer-volumeAhead"], [1, "d-flex", "justify-content-around", "gap-1", "ms-auto", 3, "ngClass"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], ["width", "20", "height", "20", 3, "iconName"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], ["type", "button", 3, "class"], ["type", "button", 3, "click"], [1, "small", "d-inline-block", 2, "min-width", "40px"]],
        template: function(t, o) {
            t & 1 && (k(0, "order-drawer-market-data", 0),
            c(1, "ul", 1),
            Be(2, nr, 5, 5, "li", 2, Pe),
            j(4, sr, 12, 10),
            m(),
            c(5, "div", 3),
            j(6, ar, 7, 6, "div", 4)(7, ur, 2, 0),
            m()),
            t & 2 && (w("symbolIsin", o.order == null ? null : o.order.symbolIsin),
            d(2),
            Ne(o.information),
            d(2),
            F(o.order.orderModelType === o.OrderModelType.oms && (o.order != null && o.order.isOpenOrder) ? 4 : -1),
            d(2),
            F(o.showConfirm() !== null ? 6 : 7))
        },
        dependencies: [oe, ve, be, Mi, Oe],
        encapsulation: 2,
        changeDetection: 0
    });
    let r = i;
    return r
}
)();
var Ti = ( () => {
    let i = class i {
        set information(e) {
            this._information.set(e)
        }
        constructor(e, t, o) {
            this.omsFacade = e,
            this.store = t,
            this.overlayService = o,
            this.buttons = C([]),
            this._information = C([]),
            this.destroyRef = S(xt)
        }
        ngOnDestroy() {
            this.omsFacade.stopOrderPlaces()
        }
        ngAfterViewInit() {
            this.store.getOmsOrder$(this.order.id).pipe(Rt(this.destroyRef)).subscribe(e => {
                this.order = e,
                ci(this.order) || this.overlayService.hideOverlay(),
                this._information.set([{
                    label: "\u0646\u0648\u0639",
                    value: this.order.OrderTypeTitle,
                    class: this.order.OrderTypeTitleClass
                }, {
                    label: "\u0648\u0636\u0639\u06CC\u062A",
                    value: this.order.StateNotificationText,
                    class: this.order.StateNotificationClass
                }, {
                    label: "\u062A\u0639\u062F\u0627\u062F",
                    value: Xe(this.order.quantity),
                    class: ""
                }, {
                    label: "\u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647",
                    value: Xe(this.order.ExecutedQuantity),
                    class: ""
                }, {
                    label: "\u0642\u06CC\u0645\u062A",
                    value: Xe(this.order.price),
                    class: ""
                }, {
                    label: "\u0632\u0645\u0627\u0646 \u062B\u0628\u062A",
                    value: new Kt().transform(new Yt().transform(this.order.createDateTime, "time")),
                    class: ""
                }, {
                    label: "\u0627\u0639\u062A\u0628\u0627\u0631",
                    value: this.order.ValidityDateTitle,
                    class: ""
                }]);
                let t = [];
                this.actionButtons.length && (t.push(this.actionButtons.find(o => o.text === "\u06A9\u067E\u06CC")),
                this.order.IsEditValid && t.push(this.actionButtons.find(o => o.text === "\u0648\u06CC\u0631\u0627\u06CC\u0634")),
                this.buttons.set(t),
                this.order.IsDeleteValid ? t.push(this.actionButtons.find(o => o.text === "\u062D\u0630\u0641")) : this.orderDrawerToolsComponent.cancelHandler())
            }
            ),
            this.order?.isOpenOrder && this.omsFacade.getOrderPlacesAndSubscribeToLs([this.order.id])
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)(T(pi),T(le),T(nt))
    }
    ,
    i.\u0275cmp = Q({
        type: i,
        selectors: [["oms-order-drawer-tools"]],
        viewQuery: function(t, o) {
            if (t & 1 && Mt(Te, 7),
            t & 2) {
                let a;
                Tt(a = Et()) && (o.orderDrawerToolsComponent = a.first)
            }
        },
        inputs: {
            order: "order",
            actionButtons: "actionButtons",
            information: "information"
        },
        decls: 1,
        vars: 3,
        consts: [[3, "order", "actionButtons", "information"]],
        template: function(t, o) {
            t & 1 && k(0, "order-drawer-tools", 0),
            t & 2 && w("order", o.order)("actionButtons", o.buttons())("information", o._information())
        },
        dependencies: [oe, Te],
        encapsulation: 2
    });
    let r = i;
    return r
}
)();
var ss = ( () => {
    let i = class i {
        swipe(e, t) {
            switch (this.resetSwipe.emit(t),
            e) {
            case Ie.RIGHT:
                this.swipeableObj.swipeSideClass === Se.LEFT ? this.parentSwipeService.onResetSwipe(this.swipeableObj) : (this.parentSwipeService.onSwipeRight(this.swipeableObj),
                setTimeout( () => {
                    this.superCdr.markForCheck()
                }
                , 10));
                break;
            case Ie.LEFT:
                this.swipeableObj.swipeSideClass === Se.RIGHT ? this.parentSwipeService.onResetSwipe(this.swipeableObj) : (this.parentSwipeService.onSwipeLeft(this.swipeableObj),
                setTimeout( () => {
                    this.superCdr.markForCheck()
                }
                , 10));
                break;
            default:
                this.parentSwipeService.onResetSwipe(this.swipeableObj);
                break
            }
        }
        desktopItemClickHandler(e) {
            this.symbolService.setActiveIsin(e)
        }
        mobileItemClickHandler(e) {
            this.toolbarIsActive || this.route.navigate(["/stock-details", e])
        }
        constructor(e, t, o, a, u) {
            this.parentSwipeService = e,
            this.symbolService = t,
            this.route = o,
            this.superCdr = a,
            this.superOverlayService = u,
            this.toolbarIsActive = !1,
            this.isChecked = !1,
            this.showButtons = !0,
            this.collapseMode = !1,
            this.resetSwipe = new Fe,
            this.holdEvent = new Fe,
            this.deleteOrderEvent = new Fe,
            this.checkboxChanged = new Fe,
            this.enableSwipe = !0,
            this.swipeableObj = new Ht("",Ut.None),
            this.drawerCallbacks = [],
            this.confirmationType = C(null),
            this.ConfirmationTypes = Le,
            this.itemDrawerComponents = new Map([[U.oms, {
                name: "OmsOrderDrawerToolsComponent",
                component: Ti
            }], [U.draft, {
                name: "OrderDrawerToolsComponent",
                component: Te
            }], [U.offline, {
                name: "OrderDrawerToolsComponent",
                component: Te
            }]])
        }
        openDrawerToolsHandler(e, t, o) {
            this.superOverlayService.showOverlay({
                component: this.itemDrawerComponents.get(e.orderModelType).component,
                input: [{
                    inputName: "order",
                    inputValue: e
                }, {
                    inputName: "actionButtons",
                    inputValue: t
                }, {
                    inputName: "information",
                    inputValue: o
                }],
                class: 'class="d-flex flex-column h-100 px-3',
                option: {
                    componentName: this.itemDrawerComponents.get(e.orderModelType).name
                }
            })
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)(T(Wt),T(at),T(Ye),T(Vt),T(nt))
    }
    ,
    i.\u0275cmp = Q({
        type: i,
        selectors: [["list-item-base-component"]],
        inputs: {
            toolbarIsActive: "toolbarIsActive",
            isChecked: "isChecked",
            showButtons: "showButtons",
            collapseMode: "collapseMode"
        },
        outputs: {
            resetSwipe: "resetSwipe",
            holdEvent: "holdEvent",
            deleteOrderEvent: "deleteOrderEvent",
            checkboxChanged: "checkboxChanged",
            enableSwipe: "enableSwipe"
        },
        decls: 0,
        vars: 0,
        template: function(t, o) {},
        dependencies: [oe],
        encapsulation: 2,
        changeDetection: 0
    });
    let r = i;
    return r
}
)();
var Cs = ( () => {
    let i = class i {
        constructor() {
            this.superOrderStore = S(le),
            this.superTimeService = S(ri),
            this.superDraftFacade = S(mi),
            this.superOrderFacade = S(Re),
            this.superNotificationService = S(we),
            this.superMoneyService = S(hi),
            this.superSettingFacadeService = S(ut),
            this.algoOrderFacade = S(Ai),
            this.filterInitialValue = {
                searchInput: "",
                showDone: !0,
                showDraft: !0,
                showGreen: !0,
                showRed: !0
            },
            this.orderIdForEdit = C(void 0),
            this.filterPanel = C(!1),
            this.showOutOfOrderTimeNotify = C(!1),
            this.greenLightClass = C(void 0),
            this.redLightClass = C(void 0),
            this.yellowLightClass = C(void 0),
            this.blueLightClass = C(void 0),
            this.showConfirmation = C(!1),
            this.toolbarActive = C(!1),
            this.subscriptions = [],
            this.actionType = C(void 0),
            this.confirmString = C(""),
            this.selectedOrderIds = C([]),
            this.selectableOmsOrders = C([]),
            this.selectableDrafts = C([]),
            this.selectedOMSOrders = ce( () => this.selectedOrderIds().length ? this.superOrderStore.getOrders(this.selectedOrderIds().map(e => e.id)).filter(e => e.orderModelType === U.oms) : []),
            this.selectedDrafts = ce( () => this.selectedOrderIds().length ? this.superOrderStore.getOrders(this.selectedOrderIds().map(e => e.id)).filter(e => e.orderModelType === U.draft) : []),
            this.allOrdersSelected = ce( () => this.selectedOrderIds().length > 0 && this.selectedOrderIds().length === this.selectableOmsOrders().length + this.selectableDrafts().length),
            this.deleteToolbarActive = ce( () => this.selectedOrderIds().length > 0),
            this.deleteOrdersCountLabel = ce( () => this.selectedOrderIds().length > 0 ? "(" + dt(this.selectedOrderIds().length.toString()) + ")" : ""),
            this.sendToolbarNotActive = ce( () => this.selectedOMSOrders().some(e => e.easyState !== mt.Done)),
            this.sendDraftsCountLabel = ce( () => this.selectedDrafts().length > 0 ? "(" + dt(this.selectedDrafts().length.toString()) + ")" : ""),
            this.filterObject = C(this.filterInitialValue),
            this.filteredOrder$ = ge(this.filterObject).pipe(A(e => this.superOrderStore.toggleFilter$(e).pipe(g(t => t.filter(o => o.id !== this.orderIdForEdit())), E(t => {
                this.selectableOmsOrders.set(t.filter(o => o.IsDeleteValid && o.orderModelType === U.oms).map(o => ({
                    id: o.id,
                    type: o.orderModelType
                }))),
                this.selectableDrafts.set(t.filter(o => o.IsSelectable && o.orderModelType === U.draft).map(o => ({
                    id: o.id,
                    type: o.orderModelType
                })))
            }
            )))),
            this.filteredAlgoOrder$ = ge(this.filterObject).pipe(A(e => this.algoOrderFacade.toggleFilter$(e)), g(e => e.filter(t => !t.isEditMode && t.id !== this.orderIdForEdit()))),
            this.filteredOrder = B(this.filteredOrder$.pipe(K(this.filteredAlgoOrder$), g( ([e,t]) => [...e, ...t]), g(e => e.sort( (t, o) => new Date(o.createDateTime).getTime() - new Date(t.createDateTime).getTime())))),
            this.filterIcon = ce( () => {
                let e = ""
                  , t = "";
                return (!this.filterObject().showRed || !this.filterObject().showGreen || !this.filterObject().showDraft || !this.filterObject().showDone || this.filterObject().searchInput !== "") && (t = ""),
                e = this.filterPanel() ? `filter-off${t}` : `filter${t}`,
                e
            }
            ),
            B(this.superOrderStore.batchDeleted$.pipe(E( () => this.closeToolbar()))),
            B(this.superOrderStore.batchCreated$.pipe(E( () => this.closeToolbar())))
        }
        onSearchOrders(e) {
            this.filterObject.update(t => {
                let o = h({}, t);
                return o.searchInput = e ? qt(e) : "",
                o
            }
            )
        }
        toggleColorFilters(e) {
            this.filterObject.update(t => {
                let o = h({}, t);
                return o[e] = !o[e],
                o
            }
            ),
            this.setClasses()
        }
        resetFilters() {
            this.filterObject.set(this.filterInitialValue)
        }
        onClockChange() {
            this.superTimeService.showMarketOpenTimeSub.getValue() !== null && this.showOutOfOrderTimeNotify.set(!this.superTimeService.showMarketOpenTimeSub.getValue())
        }
        setClasses() {
            this.greenLightClass.set(this.superOrderFacade.getFilterLightClass(this.filterObject().showGreen)),
            this.redLightClass.set(this.superOrderFacade.getFilterLightClass(this.filterObject().showRed)),
            this.yellowLightClass.set(this.superOrderFacade.getFilterLightClass(this.filterObject().showDraft)),
            this.blueLightClass.set(this.superOrderFacade.getFilterLightClass(this.filterObject().showDone))
        }
        sendSelectedDrafts(e) {
            setTimeout( () => {
                this.showConfirmation.set(!1),
                this.selectedDrafts().length === 0 ? this.superNotificationService.alert(z.Messages.NoDraftIsSelectedForSend, G.warning) : (this.selectedDrafts().some(o => o.side === _.Buy) && (this.filterObject().showGreen = !0),
                this.selectedDrafts().some(o => o.side === _.Sell) && (this.filterObject().showRed = !0),
                this.superDraftFacade.batchCreate(this.selectedOrderIds().map(o => o.id), !0))
            }
            , e ? je : 0)
        }
        closeToolbar() {
            this.deselectAll(),
            this.toolbarActive.set(!1)
        }
        deselectAll() {
            this.selectedOrderIds.set([])
        }
        toggleFilterPanel() {
            this.filterPanel.update(e => !e),
            this.toolbarActive.set(!1),
            this.filterPanel || this.resetFilters()
        }
        isOrderSelected(e) {
            return this.selectedOrderIds().some(t => t.id === e)
        }
        selectAll() {
            this.selectedOrderIds.set([...this.selectableOmsOrders(), ...this.selectableDrafts()])
        }
        checkboxChanged(e) {
            this.isOrderSelected(e.id) ? this.selectedOrderIds.update(o => {
                let a = o.findIndex(u => u.id === e.id);
                return o.splice(a, 1),
                [...o]
            }
            ) : this.selectedOrderIds.update(o => [...o, e])
        }
        onReloadBtnClicked() {
            this.deselectAll(),
            this.superOrderFacade.load(),
            this.superMoneyService.reloadBalance()
        }
        onClearSearchClicked() {
            this.onSearchOrders("")
        }
        onSendSelectedDraftsClicked() {
            this.superSettingFacadeService.getSettings().orderConfirmation ? (this.actionType.set(Le.SEND),
            this.confirmString.set(z.ActionConfirmTexts.SendSelectedDrafts),
            this.showConfirmation.set(!0)) : this.sendSelectedDrafts(!1)
        }
        onDeleteSelectedOrdersClicked() {
            this.superSettingFacadeService.getSettings().orderConfirmation ? (this.actionType.set(Le.DELETE),
            this.confirmString.set(z.ActionConfirmTexts.DeleteSelectedOrders),
            this.showConfirmation.set(!0)) : this.deleteSelectedOrders(!1)
        }
        deleteSelectedOrders(e) {
            setTimeout( () => {
                this.showConfirmation.set(!1);
                let o = this.selectedOrderIds().map(a => a.id);
                if (o.length === 0) {
                    this.superNotificationService.alert(z.Messages.NoOrderIsSelectedForDelete, G.warning);
                    return
                }
                this.superDraftFacade.batchDelete(o)
            }
            , e ? je : 0)
        }
        track(e, t) {
            return t.id
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)
    }
    ,
    i.\u0275cmp = Q({
        type: i,
        selectors: [["order-list-base"]],
        decls: 0,
        vars: 0,
        template: function(t, o) {},
        dependencies: [oe],
        encapsulation: 2,
        changeDetection: 0
    });
    let r = i;
    return r
}
)();
var dr = ["today-activity-item", ""];
function mr(r, i) {
    if (r & 1) {
        let n = te();
        c(0, "div", 1)(1, "div", 22),
        $("tap", function() {
            W(n);
            let t = I();
            return q(t.buy())
        }),
        y(2, " \u062E\u0631\u06CC\u062F "),
        m(),
        c(3, "div", 23),
        $("tap", function() {
            W(n);
            let t = I();
            return q(t.sell())
        }),
        y(4, " \u0641\u0631\u0648\u0634 "),
        m()()
    }
}
var Ei = ( () => {
    let i = class i {
        constructor(e, t, o, a) {
            this.settingFacadeService = e,
            this.router = t,
            this.activeSymbolService = o,
            this.symbolService = a,
            this.resetSwipe = Ot(),
            this.isMobile = ye(),
            this.portfolioItem = ye.required(),
            this.subs = [],
            this.swipeSideClass = C(void 0),
            this.meanBuyTradePrice = C(void 0),
            this.meanSellTradePrice = C(void 0)
        }
        set resetSwipeDetected(e) {
            this.portfolioItem().symbolIsin !== e && this.swipeSideClass.set("")
        }
        ngOnDestroy() {
            this.subs.forEach(e => e.unsubscribe())
        }
        ngOnInit() {
            this.updateTradePrice()
        }
        updateTradePrice() {
            let e = this.symbolService.symbolByIsin[this.portfolioItem()?.symbolIsin];
            this.meanBuyTradePrice.set(Math.round(this.portfolioItem()?.meanBuyTradePrice * (1 + +e.buyCommission))),
            this.meanSellTradePrice.set(Math.round(this.portfolioItem()?.meanSellTradePrice * (1 - +e.sellCommission)))
        }
        swipe(e) {
            switch (this.resetSwipe.emit(this.portfolioItem()?.symbolIsin),
            e) {
            case Ie.RIGHT:
                this.swipeSideClass() === Se.LEFT && this.swipeSideClass.set("");
                break;
            case Ie.LEFT:
                this.swipeSideClass() === Se.RIGHT ? this.swipeSideClass.set("") : this.swipeSideClass.set(Se.LEFT);
                break;
            default:
                this.swipeSideClass.set("");
                break
            }
        }
        buy() {
            let e = this.settingFacadeService.getSettings()?.buyQuantity;
            this.router.navigate(["/stock-details", this.portfolioItem()?.symbolIsin, Ve.BUY, e])
        }
        sell() {
            let e = this.settingFacadeService.getSettings()?.sellQuantity;
            this.router.navigate(["/stock-details", this.portfolioItem()?.symbolIsin, Ve.SELL, e])
        }
        click() {
            this.isMobile ? this.router.navigate(["/stock-details", this.portfolioItem()?.symbolIsin]) : this.activeSymbolService.setActiveIsin(this.portfolioItem()?.symbolIsin)
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)(T(ut),T(Ye),T(at),T(ae))
    }
    ,
    i.\u0275cmp = Q({
        type: i,
        selectors: [["", "today-activity-item", ""]],
        inputs: {
            isMobile: [1, "isMobile"],
            portfolioItem: [1, "portfolioItem"],
            resetSwipeDetected: "resetSwipeDetected"
        },
        outputs: {
            resetSwipe: "resetSwipe"
        },
        attrs: dr,
        decls: 61,
        vars: 35,
        consts: [[1, "row-list__item", "stock", "overflow-hidden", "border-0", "mb-2", 3, "click", "ngClass"], [1, "metadata", "metadata-right", "d-flex"], [1, "row-list__item-content", "p-2", "position-relative", 2, "z-index", "1", 3, "swipeleft", "swiperight"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "fw-bold", "text-truncate"], [3, "stateColor"], [1, "text-nowrap"], [1, "text-muted"], [1, "d-flex", "justify-content-between", "mb-1"], [2, "width", "35px"], [1, "d-flex", "flex-grow-1", "text-center", "small"], [1, "w-50"], [1, "mb-1"], [1, "d-flex", "align-items-center"], [1, "small", "text-muted", "text-end", "me-1", 2, "width", "35px"], [1, "d-flex", "flex-grow-1"], [1, "today-activity-cell", "p-1_2", "pt-1", "pb-0", "w-50", "text-center", 2, "border-radius", "0 0.25rem 0 0", 3, "ngClass"], [1, "today-activity-cell", "p-1_2", "pt-1", "pb-0", "w-50", "text-center", 2, "margin-right", "1px", "border-radius", "0.25rem 0 0 0", 3, "ngClass"], [1, "d-flex", "align-items-center", "small", 2, "margin-top", "1px"], [1, "text-muted", "text-end", "me-1", "opacity-6", 2, "width", "35px"], [1, "today-activity-cell", "p-1_2", "pb-0", "w-50", "text-center", "text-muted", 2, "border-radius", "0 0 0.25rem 0"], [1, "today-activity-cell", "p-1_2", "pb-0", "w-50", "text-center", "text-muted", 2, "margin-right", "1px", "border-radius", "0 0 0 0.25rem"], [1, "w-100", "d-flex", "align-items-center", "justify-content-center", "position-relative", "bg-success", "text-body", 3, "tap"], [1, "w-100", "d-flex", "align-items-center", "justify-content-center", "position-relative", "bg-danger", "text-body", 3, "tap"]],
        template: function(t, o) {
            if (t & 1 && (c(0, "div", 0),
            $("click", function() {
                return o.click()
            }),
            j(1, mr, 5, 0, "div", 1),
            c(2, "div", 2),
            $("swipeleft", function(u) {
                return o.swipe(u.type)
            })("swiperight", function(u) {
                return o.swipe(u.type)
            }),
            c(3, "div", 3)(4, "div", 4),
            k(5, "symbol-state", 5),
            y(6),
            m(),
            c(7, "div", 6)(8, "small", 7),
            y(9, "\u062F\u0627\u0631\u0627\u06CC\u06CC:"),
            m(),
            y(10),
            L(11, "number"),
            m()(),
            c(12, "div", 8),
            k(13, "div", 9),
            c(14, "div", 10)(15, "div", 11),
            y(16, "\u0645\u0639\u0627\u0645\u0644\u0647 \u0627\u0645\u0631\u0648\u0632"),
            m(),
            c(17, "div", 11),
            y(18, "\u0633\u0641\u0627\u0631\u0634 \u0628\u0627\u0632"),
            m()()(),
            c(19, "div", 12)(20, "div", 13)(21, "div", 14),
            y(22, "\u062E\u0631\u06CC\u062F"),
            m(),
            c(23, "div", 15)(24, "div", 16),
            y(25),
            L(26, "number"),
            m(),
            c(27, "div", 17),
            y(28),
            L(29, "number"),
            m()()(),
            c(30, "div", 18)(31, "div", 19),
            y(32, "\u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646"),
            m(),
            c(33, "div", 15)(34, "div", 20),
            y(35),
            L(36, "number"),
            m(),
            c(37, "div", 21),
            y(38),
            L(39, "number"),
            m()()()(),
            c(40, "div")(41, "div", 13)(42, "div", 14),
            y(43, "\u0641\u0631\u0648\u0634"),
            m(),
            c(44, "div", 15)(45, "div", 16),
            y(46),
            L(47, "number"),
            m(),
            c(48, "div", 17),
            y(49),
            L(50, "number"),
            m()()(),
            c(51, "div", 18)(52, "div", 19),
            y(53, "\u0645\u06CC\u0627\u0646\u06AF\u06CC\u0646"),
            m(),
            c(54, "div", 15)(55, "div", 20),
            y(56),
            L(57, "number"),
            m(),
            c(58, "div", 21),
            y(59),
            L(60, "number"),
            m()()()()()()),
            t & 2) {
                let a, u, f, v, b, l, s, x, H, He, Ct, We, qe;
                w("ngClass", o.swipeSideClass()),
                d(),
                F(o.isMobile() ? 1 : -1),
                d(4),
                w("stateColor", (a = o.portfolioItem()) == null ? null : a.stateColor),
                d(),
                V(" ", (u = o.portfolioItem()) == null ? null : u.symbolName, " "),
                d(4),
                V(" ", R(11, 17, (f = o.portfolioItem()) == null ? null : f.asset), " "),
                d(14),
                w("ngClass", ((v = o.portfolioItem()) == null ? null : v.tradedBuyQuantity) > 0 ? "text-success" : "text-muted"),
                d(),
                V(" ", ((b = o.portfolioItem()) == null ? null : b.tradedBuyQuantity) > 0 ? R(26, 19, (b = o.portfolioItem()) == null ? null : b.tradedBuyQuantity) : "-", " "),
                d(2),
                w("ngClass", ((l = o.portfolioItem()) == null ? null : l.openBuyQuantity) > 0 ? "text-success" : "text-muted"),
                d(),
                V(" ", ((s = o.portfolioItem()) == null ? null : s.openBuyQuantity) > 0 ? R(29, 21, (s = o.portfolioItem()) == null ? null : s.openBuyQuantity) : "-", " "),
                d(7),
                V(" ", o.meanBuyTradePrice() > 0 ? R(36, 23, o.meanBuyTradePrice()) : "-", " "),
                d(3),
                V(" ", ((x = o.portfolioItem()) == null ? null : x.meanBuyOrderPrice) > 0 ? R(39, 25, (x = o.portfolioItem()) == null ? null : x.meanBuyOrderPrice) : "-", " "),
                d(7),
                w("ngClass", ((H = o.portfolioItem()) == null ? null : H.tradedSellQuantity) > 0 ? "text-danger" : "text-muted"),
                d(),
                V(" ", ((He = o.portfolioItem()) == null ? null : He.tradedSellQuantity) > 0 ? R(47, 27, (He = o.portfolioItem()) == null ? null : He.tradedSellQuantity) : "-", " "),
                d(2),
                w("ngClass", ((Ct = o.portfolioItem()) == null ? null : Ct.openSellQuantity) > 0 ? "text-danger" : "text-muted"),
                d(),
                V(" ", ((We = o.portfolioItem()) == null ? null : We.openSellQuantity) > 0 ? R(50, 29, (We = o.portfolioItem()) == null ? null : We.openSellQuantity) : "-", " "),
                d(7),
                V(" ", o.meanSellTradePrice() > 0 ? R(57, 31, o.meanSellTradePrice()) : "-", " "),
                d(3),
                V(" ", ((qe = o.portfolioItem()) == null ? null : qe.meanSellOrderPrice) > 0 ? R(60, 33, (qe = o.portfolioItem()) == null ? null : qe.meanSellOrderPrice) : "-", " ")
            }
        },
        dependencies: [Ze, ve, be],
        encapsulation: 2,
        changeDetection: 0
    });
    let r = i;
    return r
}
)();
var Fi = ( () => {
    let i = class i {
        constructor() {
            this.loading = C(!0)
        }
        loadStart() {
            this.loading.set(!0)
        }
        loadEnd() {
            this.loading.set(!1)
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)
    }
    ,
    i.\u0275prov = M({
        token: i,
        factory: i.\u0275fac,
        providedIn: "root"
    });
    let r = i;
    return r
}
)();
var ki = ( () => {
    let i = class i {
        constructor() {
            this.portfolioFacadeService = S(Ci),
            this.orderStore = S(le),
            this.todayActivityData$ = this.orderStore.omsOrders$.pipe(K(this.portfolioFacadeService.getPortfolioItemsAsEntities$()), A( ([e,t]) => {
                let o = e.filter(f => f.orderModelType === U.oms).map(f => new di(h({}, f)))
                  , a = Array.from(new Set(o.map(f => f.symbolIsin)))
                  , u = [];
                return a.forEach(f => {
                    let v = t[f]
                      , b = o.find(s => s.symbolIsin === f)
                      , l = {
                        symbolIsin: b?.symbolIsin,
                        symbolName: b?.symbolName,
                        asset: v?.asset ?? 0,
                        meanBuyOrderPrice: 0,
                        meanSellOrderPrice: 0,
                        meanBuyTradePrice: 0,
                        meanSellTradePrice: 0,
                        openBuyQuantity: 0,
                        openSellQuantity: 0,
                        tradedBuyQuantity: 0,
                        tradedSellQuantity: 0,
                        stateCode: v?.stateCode ?? ""
                    };
                    l.tradedBuyQuantity = o.filter(s => s.symbolIsin === b.symbolIsin && s.side === _.Buy && s.AggregateState === Qe.Done).map(s => s.quantity).reduce( (s, x) => s + x, 0),
                    l.tradedSellQuantity = o.filter(s => s.symbolIsin === b.symbolIsin && s.side === _.Sell && s.AggregateState === Qe.Done).map(s => s.quantity).reduce( (s, x) => s + x, 0),
                    l.openBuyQuantity = o.filter(s => s.symbolIsin === b.symbolIsin && s.side === _.Buy && s.isOpenOrder).map(s => s.quantity).reduce( (s, x) => s + x, 0),
                    l.meanBuyOrderPrice = o.filter(s => s.symbolIsin === b.symbolIsin && s.side === _.Buy && s.isOpenOrder).map(s => s.quantity * s.price).reduce( (s, x) => s + x, 0) / l.openBuyQuantity || 0,
                    l.openSellQuantity = o.filter(s => s.symbolIsin === b.symbolIsin && s.side === _.Sell && s.isOpenOrder).map(s => s.quantity).reduce( (s, x) => s + x, 0),
                    l.meanSellOrderPrice = o.filter(s => s.symbolIsin === b.symbolIsin && s.side === _.Sell && s.isOpenOrder).map(s => s.quantity * s.price).reduce( (s, x) => s + x, 0) / l.openSellQuantity || 0,
                    l.meanBuyTradePrice = o.filter(s => s.symbolIsin === b.symbolIsin && s.side === _.Buy && s.AggregateState === Qe.Done).map(s => s.quantity * s.price).reduce( (s, x) => s + x, 0) / l.tradedBuyQuantity || 0,
                    l.meanSellTradePrice = o.filter(s => s.symbolIsin === b.symbolIsin && s.side === _.Sell && s.AggregateState === Qe.Done).map(s => s.quantity * s.price).reduce( (s, x) => s + x, 0) / l.tradedSellQuantity || 0,
                    u.push(h({}, l))
                }
                ),
                D([...u])
            }
            ))
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)
    }
    ,
    i.\u0275prov = M({
        token: i,
        factory: i.\u0275fac,
        providedIn: "root"
    });
    let r = i;
    return r
}
)();
function pr(r, i) {
    if (r & 1 && (c(0, "div"),
    k(1, "svg-icon", 3),
    y(2, " \u0641\u0639\u0627\u0644\u06CC\u062A\u06CC \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F "),
    m()),
    r & 2) {
        let n = I();
        ke("d-flex flex-column justify-content-center align-items-center t h-100 opacity-5 ", n.isMobile() ? "text-body" : "text-light", ""),
        d(),
        w("iconName", n.icons.BasketError)
    }
}
function fr(r, i) {
    if (r & 1) {
        let n = te();
        c(0, "div", 4),
        $("resetSwipe", function(t) {
            W(n);
            let o = I();
            return q(o.resetSwipe(t))
        }),
        m()
    }
    if (r & 2) {
        let n = i.$implicit
          , e = I();
        w("isMobile", e.isMobile())("portfolioItem", n)("resetSwipeDetected", e.resetSwipeDetectedFromIsin)
    }
}
var Zs = ( () => {
    let i = class i {
        constructor() {
            this.icons = xe,
            this.todayActivityFacade = S(ki),
            this.todayActivityService = S(Fi),
            this.lsService = S(_e),
            this.isMobile = ye(!0),
            this.subs = [],
            this.resetSwipeDetectedFromIsin = C(void 0),
            this.reload$ = new vt(!0),
            this.portfolioItems = C([]),
            B(this.todayActivityFacade.todayActivityData$.pipe(E(e => {
                this.portfolioItems.set([...e].toSort( (t, o) => o.tradedSellQuantity + o.tradedBuyQuantity + o.openSellQuantity + o.openBuyQuantity - (t.tradedSellQuantity + t.tradedBuyQuantity + t.openSellQuantity + t.openBuyQuantity)))
            }
            ), E( ([e]) => {
                this.todayActivityService.loadEnd(),
                this.unsubscribeLs(e),
                this.subscribeToLs(e)
            }
            )))
        }
        updatePortfolioItem(e) {
            this.portfolioItems.update(t => {
                let o = t.findIndex(a => a.symbolIsin === e.symbolIsin);
                return t.replaceByIndex(o, h(h({}, t[o]), e))
            }
            )
        }
        ngOnDestroy() {
            this.subs.forEach(e => e.unsubscribe()),
            this.unsubscribeLs(this.portfolioItems())
        }
        unsubscribeLs(e) {
            e?.forEach(t => {
                this.lsService.unsubscribeSchema(me.TodayActivity, t.symbolIsin)
            }
            )
        }
        reload() {
            this.reload$.next(!0),
            this.todayActivityService.loadStart()
        }
        resetSwipe(e) {
            this.resetSwipeDetectedFromIsin.set(e)
        }
        subscribeToLs(e) {
            e?.forEach(t => {
                this.lsService.subscribeToLs(me.TodayActivity, t.symbolIsin).subscribe(o => {
                    o.name === Qt.TodayActivity.SymbolStateId && o.val && this.updatePortfolioItem(O(h({}, t), {
                        stateColor: et(o.val)
                    }))
                }
                )
            }
            )
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)
    }
    ,
    i.\u0275cmp = Q({
        type: i,
        selectors: [["today-activity"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 4,
        vars: 1,
        consts: [[1, "row-list", "stocks", "today-activity", "h-100"], [3, "class"], ["data-cy", "today-activity-item", "today-activity-item", "", 3, "isMobile", "portfolioItem", "resetSwipeDetected"], ["width", "48", "height", "48", 1, "mb-3", 3, "iconName"], ["data-cy", "today-activity-item", "today-activity-item", "", 3, "resetSwipe", "isMobile", "portfolioItem", "resetSwipeDetected"]],
        template: function(t, o) {
            if (t & 1 && (c(0, "div", 0),
            j(1, pr, 3, 4, "div", 1),
            Be(2, fr, 1, 3, "div", 2, Pe),
            m()),
            t & 2) {
                let a;
                d(),
                F((a = o.portfolioItems()) != null && a.length ? -1 : 1),
                d(),
                Ne(o.portfolioItems())
            }
        },
        dependencies: [Ei, Oe],
        styles: [`.stocks[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{margin-top:1px}
/*# sourceMappingURL=today-activity.component-FINUOAFK.css.map */`],
        changeDetection: 0
    });
    let r = i;
    return r
}
)();
var Pi = ( () => {
    let i = class i {
        constructor() {
            this.symbolService = S(ae),
            this.agreementStore = S(vi),
            this.contractStore = S(bi),
            this.userDeviceService = S(ei),
            this.notificationService = S(we),
            this._CautionModal = C(void 0),
            this.checkCaution = e => this._CautionModal.update( () => h({}, e)),
            this.CautionModal$ = ge(this._CautionModal).pipe(he(Boolean)),
            this.CautionData$ = this.CautionModal$.pipe(g(e => ({
                caution: e,
                symbol: this.symbolService.symbolByIsin[e.symbolIsin]
            }))),
            this.Notify$ = this.CautionData$.pipe(A( ({symbol: e}) => $e.BazarPayehMarketUnits.includes(e.marketUnit) ? this.agreementStore.baseMarketAgreementStatus$.pipe(Ce(), g(t => hr[t])) : e.isCaution ? this.agreementStore.cautionAgreementStatus$.pipe(Ce(), g(t => yr[t])) : zt(e.marketUnit) ? this.contractStore.optionBuyContractState$.pipe(Ce(), g(t => gr[t])) : D(void 0)), E(e => {
                e && this.notificationService.alert(e.message, e.type, !1, this.userDeviceService.getDeviceMenuRoot() + `/${Lt.AGREEMENT_ROUTE}`)
            }
            )),
            this.ShowModal$ = this.Notify$.pipe(he(e => !e), Ee(this.CautionData$), g( ([,{caution: e, symbol: t}]) => e?.showAlways ? !0 : e?.side === Ve.BUY && !!t?.manner || !!t?.isCaution ? !this.isMannerAccepted(t) : !1)),
            this.Manner$ = this.CautionData$.pipe(A(e => this.symbolService.manners$.pipe(g(t => t?.find(o => o?.id === e.symbol?.manner))))),
            this.Symbol = B(this.CautionData$.pipe(g(e => e.symbol))),
            this.Manner = B(this.Manner$),
            this.ShowModal = B(this.ShowModal$.pipe(E(e => {
                e || this._CautionModal()?.onAccept?.()
            }
            ))),
            this.CautionModal = B(this.CautionModal$)
        }
        isMannerAccepted(e) {
            let t = localStorage.getItem("AcceptedManners");
            return t ? JSON.parse(t).some(a => a.mannerId === e?.manner && a.date === tt.getJDate(new Date)) : !1
        }
        onMannerAccept() {
            let e = localStorage.getItem("AcceptedManners")
              , t = [];
            e && (t = JSON.parse(e),
            t = t.filter(o => o.date === tt.getJDate(new Date))),
            t.push({
                date: tt.getJDate(new Date),
                mannerId: this.Symbol()?.manner
            }),
            localStorage.setItem("AcceptedManners", JSON.stringify(t)),
            this._CautionModal()?.onAccept?.()
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)
    }
    ,
    i.\u0275prov = M({
        token: i,
        factory: i.\u0275fac,
        providedIn: "root"
    });
    let r = i;
    return r
}
)()
  , hr = {
    [ie.Unseen]: {
        type: G.warning,
        message: "\u062A\u0648\u0627\u0641\u0642\u0646\u0627\u0645\u0647 \u0631\u06CC\u0633\u06A9 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062F\u0631 \u0628\u0627\u0632\u0627\u0631 \u067E\u0627\u06CC\u0647 \u0631\u0627 \u0627\u0632 \u0642\u0633\u0645\u062A \u062A\u0648\u0627\u0641\u0642\u0646\u0627\u0645\u0647 \u0647\u0627 \u062A\u0627\u06CC\u06CC\u062F \u06A9\u0646\u06CC\u062F"
    },
    [ie.Inactive]: {
        type: G.danger,
        message: "\u0634\u0645\u0627 \u0628\u0647 \u062F\u0644\u06CC\u0644 \u0646\u067E\u0630\u06CC\u0631\u0641\u062A\u0646 \u062A\u0648\u0627\u0641\u0642\u0646\u0627\u0645\u0647 \u0631\u06CC\u0633\u06A9 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062F\u0631 \u0628\u0627\u0632\u0627\u0631 \u067E\u0627\u06CC\u0647 \u0627\u0645\u06A9\u0627\u0646 \u0645\u0639\u0627\u0645\u0644\u0647 \u0646\u062F\u0627\u0631\u06CC\u062F. \u0628\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F "
    },
    [ie.Confirm]: void 0,
    [ie.PendingForReview]: void 0,
    [ie.Rejected]: void 0
}
  , yr = {
    [ie.Unseen]: {
        type: G.warning,
        message: "\u062A\u0648\u0627\u0641\u0642\u0646\u0627\u0645\u0647 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062A\u062D\u062A \u0627\u062D\u062A\u06CC\u0627\u0637 \u0631\u0627 \u0627\u0632 \u0642\u0633\u0645\u062A \u062A\u0648\u0627\u0641\u0642\u0646\u0627\u0645\u0647 \u0647\u0627 \u062A\u0627\u06CC\u06CC\u062F \u06A9\u0646\u06CC\u062F"
    },
    [ie.Inactive]: {
        type: G.danger,
        message: "\u0634\u0645\u0627 \u0628\u0647 \u062F\u0644\u06CC\u0644 \u0646\u067E\u0630\u06CC\u0631\u0641\u062A\u0646 \u062A\u0648\u0627\u0641\u0642\u0646\u0627\u0645\u0647 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062A\u062D\u062A \u0627\u062D\u062A\u06CC\u0627\u0637 \u0627\u0645\u06A9\u0627\u0646 \u0645\u0639\u0627\u0645\u0644\u0647 \u0646\u062F\u0627\u0631\u06CC\u062F. \u0628\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F "
    },
    [ie.Confirm]: void 0,
    [ie.PendingForReview]: void 0,
    [ie.Rejected]: void 0
}
  , gr = {
    [Ae.Unseen]: {
        type: G.danger,
        message: "\u0634\u0645\u0627 \u0628\u0647 \u0628\u0627\u0632\u0627\u0631 \u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062F\u0633\u062A\u0631\u0633\u06CC \u0646\u062F\u0627\u0631\u06CC\u062F!. \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u062F\u0633\u062A\u0631\u0633\u06CC \u0627\u0628\u062A\u062F\u0627 \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u0627\u0632 \u0642\u0633\u0645\u062A \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0647\u0627\u060C \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0645\u0631\u0628\u0648\u0637\u0647 \u0631\u0627 \u0627\u0645\u0636\u0627 \u06A9\u0646\u06CC\u062F"
    },
    [Ae.PendingForReview]: {
        type: G.danger,
        message: "\u0645\u0634\u062A\u0631\u06CC \u06AF\u0631\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062F\u0633\u062A\u0631\u0633\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0633\u0631\u0648\u06CC\u0633 \u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062A\u0648\u0633\u0637 \u06A9\u0627\u0631\u0634\u0646\u0627\u0633\u0627\u0646 \u0645\u0627 \u062F\u0631 \u062D\u0627\u0644 \u0628\u0631\u0631\u0633\u06CC\u200C \u0645\u06CC\u200C\u0628\u0627\u0634\u062F"
    },
    [Ae.Rejected]: {
        type: G.danger,
        message: "\u0645\u0634\u062A\u0631\u06CC \u06AF\u0631\u0627\u0645\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062F\u0633\u062A\u0631\u0633\u06CC \u0634\u0645\u0627 \u0628\u0647 \u0633\u0631\u0648\u06CC\u0633 \u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062A\u0648\u0633\u0637 \u06A9\u0627\u0631\u0634\u0646\u0627\u0633\u0627\u0646 \u0645\u0627 \u0631\u062F \u0634\u062F\u0647 \u0627\u0633\u062A"
    },
    [Ae.Confirm]: void 0,
    [Ae.Inactive]: {
        type: G.danger,
        message: "\u0634\u0645\u0627 \u0628\u0647 \u0628\u0627\u0632\u0627\u0631 \u0627\u062E\u062A\u06CC\u0627\u0631 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062F\u0633\u062A\u0631\u0633\u06CC \u0646\u062F\u0627\u0631\u06CC\u062F!. \u0628\u0631\u0627\u06CC \u0627\u06CC\u062C\u0627\u062F \u062F\u0633\u062A\u0631\u0633\u06CC \u0627\u0628\u062A\u062F\u0627 \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u0627\u0632 \u0642\u0633\u0645\u062A \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0647\u0627\u060C \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0645\u0631\u0628\u0648\u0637\u0647 \u0631\u0627 \u0627\u0645\u0636\u0627 \u06A9\u0646\u06CC\u062F"
    }
};
var Cr = ["cautionModalContent"];
function vr(r, i) {
    r & 1 && (c(0, "span", 2),
    y(1, " \u067E\u0630\u06CC\u0631\u0634 \u0627\u0637\u0644\u0627\u0639 \u0627\u0632 \u0627\u0628\u0647\u0627\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062A\u062D\u062A \u0627\u062D\u062A\u06CC\u0627\u0637 "),
    m())
}
function br(r, i) {
    if (r & 1 && (c(0, "span", 2),
    y(1),
    m()),
    r & 2) {
        let n, e = I(2);
        d(),
        V(" ", (n = e.CautionData().manner) == null ? null : n.name, " ")
    }
}
function xr(r, i) {
    if (r & 1) {
        let n = te();
        c(0, "button", 7),
        $("click", function(t) {
            return W(n),
            I(2).closeBtnClicked(),
            q(t.stopPropagation())
        }),
        k(1, "span", 8),
        m()
    }
}
function Or(r, i) {
    r & 1 && (c(0, "div", 5)(1, "p"),
    y(2, " \u06A9\u0627\u0631\u0628\u0631 \u06AF\u0631\u0627\u0645\u06CC\u060C \u062E\u0648\u0627\u0647\u0634\u0645\u0646\u062F\u06CC\u0645 \u067E\u06CC\u0634 \u0627\u0632 \u062E\u0631\u06CC\u062F \u0648\u0631\u0642\u0647 \u062A\u062D\u062A \u0627\u062D\u062A\u06CC\u0627\u0637 \u0645\u062A\u0646 \u0632\u06CC\u0631 \u0631\u0627 \u062D\u062A\u0645\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u0646\u0645\u0627\u06CC\u06CC\u062F :"),
    k(3, "br"),
    y(4, "\u0627\u06CC\u0646\u062C\u0627\u0646\u0628 \u0627\u0642\u0631\u0627\u0631 \u0645\u06CC\u200C\u0646\u0645\u0627\u06CC\u0645 \u060C\u0627\u0632 \u0648\u0636\u0639\u06CC\u062A \u0634\u0641\u0627\u0641\u06CC\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u0646\u0645\u0627\u062F\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0627\u0632 \u0633\u0645\u062A \u0645\u0631\u0627\u062C\u0639 \u0630\u06CC\u0635\u0644\u0627\u062D \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0646\u0645\u0627\u062F\u0647\u0627\u06CC \u0645\u0639\u0627\u0645\u0644\u0627\u062A\u06CC \u062A\u062D\u062A \u0627\u062D\u062A\u06CC\u0627\u0637 \u0627\u0639\u0644\u0627\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F \u0627\u0637\u0644\u0627\u0639 \u062F\u0627\u0631\u0645. \u0648 \u0628\u0627 \u0622\u06AF\u0627\u0647\u06CC \u0627\u0632 \u0627\u0637\u0644\u0627\u0639\u06CC\u0647\u200C\u0647\u0627\u06CC \u0645\u0646\u062A\u0634\u0631\u0647 \u062F\u0631 \u062E\u0635\u0648\u0635 \u0627\u064A\u0646 \u0634\u0631\u06A9\u062A\u200C\u0647\u0627 \u062F\u0631 \u0633\u0627\u0645\u0627\u0646\u0647 \u0631\u0633\u0645\u06CC \u0627\u0641\u0634\u0627\u06CC \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0634\u0631\u06A9\u062A\u200C\u0647\u0627\u06CC \u062B\u0628\u062A \u0634\u062F\u0647 \u0646\u0632\u062F \u0633\u0627\u0632\u0645\u0627\u0646 \u0628\u0648\u0631\u0633 \u0648 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0627\u0631 (\u06A9\u062F\u0627\u0644) \u0648 \u0627\u0637\u0644\u0627\u0639 \u0627\u0632 \u0627\u0628\u0647\u0627\u0645 \u062F\u0631 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0627\u064A\u0646 \u0634\u0631\u06A9\u062A\u200C\u0647\u0627\u060C \u0627\u0642\u062F\u0627\u0645 \u0628\u0647 \u0645\u0639\u0627\u0645\u0644\u0647 \u0645\u06CC\u200C\u200C\u06A9\u0646\u0645."),
    k(5, "br"),
    y(6, ' \u0645\u0634\u062A\u0631\u06CC \u06AF\u0631\u0627\u0645\u06CC! \u0645\u0639\u0627\u0645\u0644\u0647 \u0646\u0645\u0627\u062F\u0647\u0627\u06CC \u0645\u0639\u0627\u0645\u0644\u0627\u062A\u06CC \u062A\u062D\u062A \u0627\u062D\u062A\u06CC\u0627\u0637 \u0628\u0647 \u062F\u0644\u06CC\u0644 \u0627\u0628\u0647\u0627\u0645\u0627\u062A \u0645\u0648\u0636\u0648\u0639 \u0645\u0627\u062F\u0647 19 \u0645\u06A9\u0631\u0631 1 \u062F\u0633\u062A\u0648\u0631\u0627\u0644\u0639\u0645\u0644 \u0627\u062C\u0631\u0627\u064A\u06CC \u0646\u062D\u0648\u0647 \u0627\u0646\u062C\u0627\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062F\u0631 \u0628\u0648\u0631\u0633 \u0627\u0648\u0631\u0627\u0642 \u0628\u0647\u0627\u062F\u0627\u0631 \u062A\u0647\u0631\u0627\u0646/ \u0645\u0627\u062F\u0647 12 \u0645\u06A9\u0631\u0631 4 \u062F\u0633\u062A\u0648\u0631\u0627\u0644\u0639\u0645\u0644 \u0627\u062C\u0631\u0627\u064A\u06CC \u0646\u062D\u0648\u0647 \u0627\u0646\u062C\u0627\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u062F\u0631 \u0641\u0631\u0627 \u0628\u0648\u0631\u0633 \u0627\u06CC\u0631\u0627\u0646 \u0628\u0647 \u0635\u0648\u0631\u062A "\u0645\u0639\u0627\u0645\u0644\u0647 \u062A\u062D\u062A \u0627\u062D\u062A\u06CC\u0627\u0637" \u0627\u0646\u062C\u0627\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F. '),
    m()())
}
function Ir(r, i) {
    if (r & 1 && k(0, "div", 6),
    r & 2) {
        let n, e = I(2);
        w("innerHTML", (n = e.CautionData().manner) == null ? null : n.description, It)
    }
}
function _r(r, i) {
    if (r & 1) {
        let n = te();
        c(0, "div", 9)(1, "div", 10)(2, "button", 11),
        $("click", function() {
            W(n);
            let t = I(3);
            return q(t.closeModal())
        }),
        y(3, " \u0627\u0646\u0635\u0631\u0627\u0641 "),
        m(),
        c(4, "button", 12),
        $("click", function() {
            W(n);
            let t = I(3);
            return q(t.buttonClicked())
        }),
        y(5, " \u0645\u0648\u0627\u0641\u0642\u062A \u0645\u06CC\u200C\u0646\u0645\u0627\u06CC\u0645 "),
        m()()()
    }
}
function wr(r, i) {
    if (r & 1) {
        let n = te();
        c(0, "div", 9)(1, "div", 13)(2, "button", 11),
        $("click", function() {
            W(n);
            let t = I(3);
            return q(t.closeModal())
        }),
        y(3, " \u0627\u0646\u0635\u0631\u0627\u0641 "),
        m(),
        c(4, "button", 14),
        $("click", function() {
            W(n);
            let t = I(3);
            return q(t.buttonClicked())
        }),
        y(5, " \u0645\u0648\u0627\u0641\u0642\u062A \u0645\u06CC\u200C\u0646\u0645\u0627\u06CC\u0645 "),
        m()()()
    }
}
function Dr(r, i) {
    if (r & 1 && (c(0, "div"),
    j(1, _r, 6, 0, "div", 9)(2, wr, 6, 0, "div", 9),
    m()),
    r & 2) {
        let n, e, t = I(2);
        d(),
        F((n = t.CautionData().caution) != null && n.isMobile ? 1 : -1),
        d(),
        F((e = t.CautionData().caution) != null && e.isMobile ? -1 : 2)
    }
}
function Ar(r, i) {
    if (r & 1 && (c(0, "div", 1),
    j(1, vr, 2, 0, "span", 2)(2, br, 2, 1, "span", 2)(3, xr, 2, 0, "button", 3),
    m(),
    c(4, "div", 4),
    j(5, Or, 7, 0, "div", 5)(6, Ir, 1, 1, "div", 6),
    m(),
    j(7, Dr, 3, 2, "div")),
    r & 2) {
        let n, e, t, o, a, u, f = I();
        d(),
        F((n = f.CautionData().symbol) != null && n.isCaution ? 1 : -1),
        d(),
        F((e = f.CautionData().symbol) != null && e.manner ? 2 : -1),
        d(),
        F((t = f.CautionData().caution) != null && t.acceptButton ? -1 : 3),
        d(2),
        F((o = f.CautionData().symbol) != null && o.isCaution ? 5 : -1),
        d(),
        F((a = f.CautionData().symbol) != null && a.manner ? 6 : -1),
        d(),
        F((u = f.CautionData().caution) != null && u.acceptButton ? 7 : -1)
    }
}
var va = ( () => {
    let i = class i extends li {
        constructor(e) {
            super(),
            this.cautionModalService = e,
            this.cautionModalContent = _t("cautionModalContent"),
            this.CautionData = B(this.cautionModalService.CautionData$.pipe(K(this.cautionModalService.Manner$), g( ([{caution: t, symbol: o},a]) => ({
                caution: t,
                symbol: o,
                manner: a
            })))),
            B(this.cautionModalService.ShowModal$.pipe(he(Boolean), Ge(je), E( () => this.openCautionModals())))
        }
        openCautionModals() {
            let e = {
                backdrop: "static",
                keyboard: !1
            };
            this.openModal(this.cautionModalContent(), e)
        }
        closeBtnClicked() {
            this.closeModal()
        }
        buttonClicked() {
            this.closeModal(),
            it( () => this.cautionModalService.onMannerAccept(), 300)
        }
    }
    ;
    i.\u0275fac = function(t) {
        return new (t || i)(T(Pi))
    }
    ,
    i.\u0275cmp = Q({
        type: i,
        selectors: [["lib-caution-modal"]],
        viewQuery: function(t, o) {
            t & 1 && Ft(o.cautionModalContent, Cr, 5),
            t & 2 && kt()
        },
        features: [wt],
        decls: 2,
        vars: 0,
        consts: [["cautionModalContent", ""], [1, "modal-header", "d-flex", "justify-content-between", "align-items-center"], [1, "modal-title", "fw-bolder"], ["type", "button", "aria-label", "Close", 1, "btn-close", "m-0"], [1, "modal-body"], [1, "text-justify"], [1, "text-justify", 3, "innerHTML"], ["type", "button", "aria-label", "Close", 1, "btn-close", "m-0", 3, "click"], ["aria-hidden", "true"], [1, "modal-footer"], [1, "d-flex", "gap-2", "m-0", "w-100"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", "flex-grow-1", 3, "click"], [1, "m-0", "d-flex", "gap-2"], ["data-cy", "caution-modal-confirm-btn", "type", "button", 1, "btn", "btn-success", 3, "click"]],
        template: function(t, o) {
            t & 1 && j(0, Ar, 8, 6, "ng-template", null, 0, $t)
        },
        encapsulation: 2,
        changeDetection: 0
    });
    let r = i;
    return r
}
)();
var Mr = r => {
    let i = 0;
    return r.trades?.forEach(n => {
        n.isCancel || (i += n.quantity)
    }
    ),
    i
}
  , Tr = r => {
    if (!r)
        return null;
    let i = +r.orderState;
    return i === pe.OrderExecuted || i === pe.PartiallyExecutedAndExpired || i === pe.PartiallyExecutedAndCanceled || i === pe.PartiallyExecutedAndError || Mr(r) > 0 && (i === pe.Cancel || i === pe.Modify || i === pe.PartiallyExecutedAndModified)
}
;
var La = r => r && r.isOffline ? !1 : r && r.isDraft ? !0 : !Tr(r);
export {oo as a, xi as b, Oi as c, yo as d, ss as e, ct as f, jo as g, $o as h, wi as i, Vo as j, Lo as k, Qo as l, Ro as m, Uo as n, Ho as o, Wo as p, Ai as q, Cs as r, Zs as s, Pi as t, va as u, pn as v, fn as w, La as x};
//# sourceMappingURL=chunk-KW67K7GE.js.map
