import {$a as Ke, $c as Ye, Ec as Xt, Fc as ue, Ja as Kt, Jc as Zt, Kc as re, Lc as ze, Mb as zt, Mc as le, Ob as we, P as Bt, Q as Rt, Rb as Yt, Tc as Qt, Vc as G, Wc as O, Xc as mt, Yc as dt, Zb as Jt, _c as K, hc as ae, hd as en, pb as ve, ya as qt} from "./chunk-OFJ5SZPL.js";
import {Ac as d, Ae as Ut, Bb as Pe, Bc as L, Ce as Pt, E as Ae, Fb as C, Fc as B, Ga as Ve, H as N, Hc as I, He as Lt, Ia as Ce, Ic as h, J as ct, Ke as Dt, Mb as te, Mc as De, Pa as M, Pd as ce, Q as bt, Qa as Ne, Qe as Ht, R as at, Re as Gt, Sa as ee, T as se, Te as Wt, Ua as v, Ub as H, Va as y, Vb as Le, Wc as x, Xc as Ee, Xd as jt, Yc as ne, Z as ge, _b as q, a as A, b as V, ca as xt, db as w, ea as _t, eb as F, fa as At, fd as He, gd as lt, hb as $e, hd as Tt, i as J, ia as Et, kb as Ue, ld as kt, m as yt, ma as Re, mb as Ft, md as Mt, nc as E, ne as Ge, ob as It, oe as We, p as xe, pa as ut, pb as X, q as st, qb as D, qe as ie, re as qe, sa as wt, td as Ot, uc as P, ve as Vt, we as je, xc as Me, xe as Nt, y as St, yc as Oe, ye as $t, z as _e, zc as p} from "./chunk-K3475DQT.js";
var $n = {
    dispatch: !0,
    functional: !1,
    useEffectsErrorHandler: !0
}
  , Xe = "__@ngrx/effects_create__";
function ye(e, t={}) {
    let r = t.functional ? e : e()
      , n = A(A({}, $n), t);
    return Object.defineProperty(r, Xe, {
        value: n
    }),
    r
}
function Un(e) {
    return Object.getOwnPropertyNames(e).filter(n => e[n] && e[n].hasOwnProperty(Xe) ? e[n][Xe].hasOwnProperty("dispatch") : !1).map(n => {
        let i = e[n][Xe];
        return A({
            propertyName: n
        }, i)
    }
    )
}
function Pn(e) {
    return Un(e)
}
function on(e) {
    return Object.getPrototypeOf(e)
}
function Ln(e) {
    return !!e.constructor && e.constructor.name !== "Object" && e.constructor.name !== "Function"
}
function sn(e) {
    return typeof e == "function"
}
function tn(e) {
    return e.filter(sn)
}
function Dn(e) {
    return e instanceof ee || sn(e)
}
function Hn(e, t, r) {
    let n = on(e)
      , o = !!n && n.constructor.name !== "Object" ? n.constructor.name : null
      , l = Pn(e).map( ({propertyName: S, dispatch: R, useEffectsErrorHandler: be}) => {
        let Y = typeof e[S] == "function" ? e[S]() : e[S]
          , Q = be ? r(Y, t) : Y;
        return R === !1 ? Q.pipe(At()) : Q.pipe(wt()).pipe(N(ke => ({
            effect: e[S],
            notification: ke,
            propertyName: S,
            sourceName: o,
            sourceInstance: e
        })))
    }
    );
    return at(...l)
}
var Gn = 10;
function cn(e, t, r=Gn) {
    return e.pipe(ge(n => (t && t.handleError(n),
    r <= 1 ? e : cn(e, t, r - 1))))
}
var Qe = ( () => {
    let t = class t extends yt {
        constructor(n) {
            super(),
            n && (this.source = n)
        }
        lift(n) {
            let i = new t;
            return i.source = this,
            i.operator = n,
            i
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(v(Qt))
    }
    ,
    t.\u0275prov = M({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
function Se(...e) {
    return se(t => e.some(r => typeof r == "string" ? r === t.type : r.type === t.type))
}
var an = new ee("@ngrx/effects Internal Root Guard")
  , Je = new ee("@ngrx/effects User Provided Effects")
  , pt = new ee("@ngrx/effects Internal Root Effects")
  , un = new ee("@ngrx/effects Internal Root Effects Instances")
  , nn = new ee("@ngrx/effects Internal Feature Effects")
  , ln = new ee("@ngrx/effects Internal Feature Effects Instance Groups")
  , Wn = new ee("@ngrx/effects Effects Error Handler",{
    providedIn: "root",
    factory: () => cn
})
  , mn = "@ngrx/effects/init"
  , sr = Zt(mn);
function qn(e, t) {
    if (e.notification.kind === "N") {
        let r = e.notification.value;
        !Kn(r) && t.handleError(new Error(`Effect ${zn(e)} dispatched an invalid action: ${Yn(r)}`))
    }
}
function Kn(e) {
    return typeof e != "function" && e && e.type && typeof e.type == "string"
}
function zn({propertyName: e, sourceInstance: t, sourceName: r}) {
    let n = typeof t[e] == "function";
    return !!r ? `"${r}.${String(e)}${n ? "()" : ""}"` : `"${String(e)}()"`
}
function Yn(e) {
    try {
        return JSON.stringify(e)
    } catch {
        return e
    }
}
var Jn = "ngrxOnIdentifyEffects";
function Xn(e) {
    return ft(e, Jn)
}
var Zn = "ngrxOnRunEffects";
function Qn(e) {
    return ft(e, Zn)
}
var ei = "ngrxOnInitEffects";
function ti(e) {
    return ft(e, ei)
}
function ft(e, t) {
    return e && t in e && typeof e[t] == "function"
}
var dn = ( () => {
    let t = class t extends xe {
        constructor(n, i) {
            super(),
            this.errorHandler = n,
            this.effectsErrorHandler = i
        }
        addEffects(n) {
            this.next(n)
        }
        toActions() {
            return this.pipe(ut(n => Ln(n) ? on(n) : n), ct(n => n.pipe(ut(ni))), ct(n => {
                let i = n.pipe(Re(l => ii(this.errorHandler, this.effectsErrorHandler)(l)), N(l => (qn(l, this.errorHandler),
                l.notification)), se(l => l.kind === "N" && l.value != null), Et())
                  , o = n.pipe(_t(1), se(ti), N(l => l.ngrxOnInitEffects()));
                return at(i, o)
            }
            ))
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(v(It),v(Wn))
    }
    ,
    t.\u0275prov = M({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
function ni(e) {
    return Xn(e) ? e.ngrxOnIdentifyEffects() : ""
}
function ii(e, t) {
    return r => {
        let n = Hn(r, e, t);
        return Qn(r) ? r.ngrxOnRunEffects(n) : n
    }
}
var pn = ( () => {
    let t = class t {
        get isStarted() {
            return !!this.effectsSubscription
        }
        constructor(n, i) {
            this.effectSources = n,
            this.store = i,
            this.effectsSubscription = null
        }
        start() {
            this.effectsSubscription || (this.effectsSubscription = this.effectSources.toActions().subscribe(this.store))
        }
        ngOnDestroy() {
            this.effectsSubscription && (this.effectsSubscription.unsubscribe(),
            this.effectsSubscription = null)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(v(dn),v(G))
    }
    ,
    t.\u0275prov = M({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)()
  , fn = ( () => {
    let t = class t {
        constructor(n, i, o, l, S, R, be) {
            this.sources = n,
            i.start();
            for (let Y of l)
                n.addEffects(Y);
            o.dispatch({
                type: mn
            })
        }
        addEffects(n) {
            this.sources.addEffects(n)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(v(dn),v(pn),v(G),v(un),v(mt, 8),v(dt, 8),v(an, 8))
    }
    ,
    t.\u0275mod = Le({
        type: t
    }),
    t.\u0275inj = Ne({});
    let e = t;
    return e
}
)()
  , ri = ( () => {
    let t = class t {
        constructor(n, i, o, l) {
            let S = i.flat();
            for (let R of S)
                n.addEffects(R)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(v(fn),v(ln),v(mt, 8),v(dt, 8))
    }
    ,
    t.\u0275mod = Le({
        type: t
    }),
    t.\u0275inj = Ne({});
    let e = t;
    return e
}
)()
  , cr = ( () => {
    let t = class t {
        static forFeature(...n) {
            let i = n.flat()
              , o = tn(i);
            return {
                ngModule: ri,
                providers: [o, {
                    provide: nn,
                    multi: !0,
                    useValue: i
                }, {
                    provide: Je,
                    multi: !0,
                    useValue: []
                }, {
                    provide: ln,
                    multi: !0,
                    useFactory: rn,
                    deps: [nn, Je]
                }]
            }
        }
        static forRoot(...n) {
            let i = n.flat()
              , o = tn(i);
            return {
                ngModule: fn,
                providers: [o, {
                    provide: pt,
                    useValue: [i]
                }, {
                    provide: an,
                    useFactory: oi
                }, {
                    provide: Je,
                    multi: !0,
                    useValue: []
                }, {
                    provide: un,
                    useFactory: rn,
                    deps: [pt, Je]
                }]
            }
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275mod = Le({
        type: t
    }),
    t.\u0275inj = Ne({});
    let e = t;
    return e
}
)();
function rn(e, t) {
    let r = [];
    for (let n of e)
        r.push(...n);
    for (let n of t)
        r.push(...n);
    return r.map(n => Dn(n) ? y(n) : n)
}
function oi() {
    let e = y(pn, {
        optional: !0,
        skipSelf: !0
    })
      , t = y(pt, {
        self: !0
    });
    if (!(t.length === 1 && t[0].length === 0) && e)
        throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");
    return "guarded"
}
var hr = ( () => {
    let t = class t extends we {
        constructor() {
            super(),
            this.moneyInfo = new st({
                buyPower: 0,
                buyPower1: 0,
                buyPower0: 0,
                blockedBalance: 0,
                balance: 0,
                credit: 0,
                avandCredit: 0
            }),
            this.moneyInfo$ = this.moneyInfo.asObservable(),
            this.reloadBalanceSubject = new xe,
            this.reloadBalanceObs$ = this.reloadBalanceSubject.asObservable(),
            this.lsService = y(Jt),
            this.userService = y(zt),
            this.accountBalanceSubject = new st(0),
            this.accountBalance$ = this.accountBalanceSubject.asObservable(),
            this.reloadBalanceObs$.pipe(xt(1e3)).subscribe( () => {
                this.doReloadBalance().subscribe()
            }
            )
        }
        get accountBalance() {
            return this.buyPower
        }
        set BuyPower(n) {
            this.buyPower = n,
            this.accountBalanceSubject.next(n)
        }
        reloadBalance() {
            this.reloadBalanceSubject.next(!0)
        }
        subscribeLsForBalanceChanges() {
            this.subscribeToLs(),
            this.lsService.resetLsManually$.pipe(se(n => n)).subscribe( () => {
                this.subscribeToLs()
            }
            )
        }
        subscribeToLs() {
            this.lsService.subscribeToLs(Bt.Money).subscribe(n => {
                if (n.name === Rt.MoneySchema.meta) {
                    let i = JSON.parse(n.val);
                    this.moneyInfo.next(V(A({}, this.moneyInfo.value), {
                        buyPower: parseFloat(i.buyPower),
                        blockedBalance: parseFloat(i.block),
                        balance: parseFloat(i.T2),
                        credit: parseFloat(i.credit),
                        avandCredit: parseFloat(i.avandCredit)
                    })),
                    this.buyPower = parseFloat(i.buyPower),
                    this.BuyPower = parseFloat(i.buyPower),
                    this.blockedBalance = parseFloat(i.block),
                    this.balance = parseFloat(i.T2),
                    this.credit = parseFloat(i.credit),
                    this.avandCredit = parseFloat(i.avandCredit)
                }
            }
            )
        }
        getRemain() {
            return this.httpService.get(this.mtsPath + this.apiUrls.oms + "money/")
        }
        getAssurance() {
            return this.httpService.get(this.mtsPath + this.apiUrls.tbs + "AssuranceAndAssetInfo")
        }
        doReloadBalance() {
            return this.userService.isEasy2User || this.userService.isGuestUser ? St([]) : this.getRemain().pipe(Ce(n => {
                this.BuyPower = +n.buyPower,
                this.moneyInfo.next(V(A({}, this.moneyInfo.value), {
                    buyPower: +n.buyPower,
                    blockedBalance: n.blocked,
                    balance: n.balance,
                    credit: n.credit,
                    buyPower1: +n.buyPower1,
                    buyPower0: +n.buyPower0,
                    avandCredit: +n.avandCredit
                })),
                this.buyPower = +n.buyPower,
                this.blockedBalance = n.blocked,
                this.balance = n.balance,
                this.credit = n.credit,
                this.buyPower1 = +n.buyPower1,
                this.buyPower0 = +n.buyPower0,
                this.avandCredit = +n.avandCredit
            }
            ), Ce(n => {
                n.credit > 0 && this.getAssurance().subscribe(i => {
                    this.totalAssuranceValue = i.totalAssuranceValue
                }
                )
            }
            ))
        }
        calculatorBrokerAccountBalance() {
            let i = Math.min(this.buyPower0 ?? 0, this.buyPower1 ?? 0, this.buyPower ?? 0) - (this.credit || 0);
            return Math.max(i, 0)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275prov = M({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
var _ = ze({
    source: "Agreement",
    events: {
        loaderStart: le(),
        loaderEnd: le(),
        load: re(),
        set: re(),
        agreementStatusUpdated: re(),
        updateAgreementStatus: re()
    }
});
var T = function(e) {
    return e[e.Confirm = 0] = "Confirm",
    e[e.Rejected = 1] = "Rejected",
    e[e.PendingForReview = 2] = "PendingForReview",
    e[e.Inactive = 3] = "Inactive",
    e[e.Unseen = 4] = "Unseen",
    e
}(T || {})
  , Z = function(e) {
    return e.Hami = "Hami",
    e.Wallet = "WalletContract",
    e.Caution = "CodalCautionTransaction",
    e.BasicMarketRisk = "BasicMarketRisk",
    e
}(Z || {})
  , et = function(e) {
    return e.Avand = "AvandContract",
    e.OptionSell = "ShortSellEasyTrader",
    e.OptionBuy = "TradeOptionContractEasyTrader",
    e
}(et || {});
var tt = e => e.agreementState
  , Fe = O(tt, e => e.agreements)
  , gn = O(tt, e => e.agreements.filter(t => t.status === T.Confirm || t.status === T.Inactive))
  , Cn = O(tt, e => e.agreements.filter(t => t.status === T.Unseen))
  , vn = O(tt, e => e.loading)
  , yn = e => O(Fe, t => t.find(r => r.id === e))
  , ht = O(Fe, e => e.find(t => t.codeName === Z.Caution)?.status ?? T.Unseen)
  , gt = O(Fe, e => e.find(t => t.codeName === Z.BasicMarketRisk)?.status ?? T.Unseen)
  , Sn = O(Fe, e => e.find(t => t.codeName === Z.Hami)?.status ?? T.Unseen);
var me = ( () => {
    let t = class t {
        cautionAgreementStatus() {
            return J(this, null, function*() {
                return yield Ae(this.store.select(ht))
            })
        }
        baseMarketAgreementStatus() {
            return J(this, null, function*() {
                return yield Ae(this.store.select(gt))
            })
        }
        getAgreementById(n) {
            return J(this, null, function*() {
                return yield Ae(this.store.select(yn(n)))
            })
        }
        constructor(n) {
            this.store = n,
            this.unleashService = y(ue),
            this.agreements$ = this.store.select(Fe),
            this.agreements = ie(this.agreements$),
            this.loading = ie(this.store.select(vn)),
            this.userRequiredAgreements = ie(this.store.select(Cn)),
            this.userAgreements = ie(this.store.select(gn)),
            this.cautionAgreementStatus$ = this.store.select(ht),
            this.baseMarketAgreementStatus$ = this.store.select(gt),
            this.hamiAgreementStatus$ = this.store.select(Sn)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(v(G))
    }
    ,
    t.\u0275prov = M({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
var de = ( () => {
    let t = class t {
        constructor(n, i, o) {
            this.store = n,
            this.notificationService = i,
            this.agreementStore = o
        }
        loadAgreements(n=!1) {
            this.store.dispatch(_.load({
                hardReload: n
            }))
        }
        setAgreementState(n) {
            this.store.dispatch(_.updateAgreementStatus({
                agreementDto: n
            }))
        }
        toggleAgreementState(n) {
            return J(this, null, function*() {
                (yield this.agreementStore.getAgreementById(n)).status == T.Confirm ? this.store.dispatch(_.updateAgreementStatus({
                    agreementDto: {
                        agreementId: n,
                        agreementState: T.Inactive
                    }
                })) : this.store.dispatch(_.updateAgreementStatus({
                    agreementDto: {
                        agreementId: n,
                        agreementState: T.Confirm
                    }
                }))
            })
        }
        alertForUpdateState(n, i) {
            n.agreementState == T.Confirm && (i && this.notificationService.alert("\u062A\u0648\u0627\u0641\u0642\u200C\u0646\u0627\u0645\u0647 \u062A\u0627\u06CC\u06CC\u062F \u0634\u062F", ve.success),
            !i && this.notificationService.alert("\u062E\u0637\u0627 \u062F\u0631 \u062A\u0627\u06CC\u06CC\u062F \u062A\u0648\u0627\u0641\u0642\u200C\u0646\u0627\u0645\u0647", ve.danger)),
            n.agreementState == T.Inactive && (i && this.notificationService.alert("\u062A\u0648\u0627\u0641\u0642\u200C\u0646\u0627\u0645\u0647 \u0631\u062F \u0634\u062F", ve.success),
            !i && this.notificationService.alert("\u062E\u0637\u0627 \u062F\u0631 \u0631\u062F \u062A\u0648\u0627\u0641\u0642\u200C\u0646\u0627\u0645\u0647", ve.danger))
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(v(G),v(ae),v(me))
    }
    ,
    t.\u0275prov = M({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
var z = ze({
    source: "contract",
    events: {
        load: le(),
        loadedError: le(),
        empty: le(),
        requestDone: le(),
        set: re(),
        update: re(),
        upsert: re()
    }
});
var U = function(e) {
    return e[e.Confirm = 0] = "Confirm",
    e[e.Rejected = 1] = "Rejected",
    e[e.PendingForReview = 2] = "PendingForReview",
    e[e.Inactive = 3] = "Inactive",
    e[e.Unseen = 4] = "Unseen",
    e
}(U || {})
  , xn = {
    [U.Confirm]: "\u062A\u0627\u06CC\u06CC\u062F \u0634\u062F\u0647",
    [U.PendingForReview]: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0631\u0631\u0633\u06CC",
    [U.Rejected]: "\u0631\u062F \u0634\u062F\u0647",
    [U.Inactive]: "\u063A\u06CC\u0631 \u0641\u0639\u0627\u0644",
    [U.Unseen]: "\u062F\u06CC\u062F\u0647 \u0646\u0634\u062F\u0647"
}
  , _n = {
    [U.Unseen]: "text-secondary bg-secondary",
    [U.Inactive]: "text-secondary bg-secondary",
    [U.Confirm]: "text-success bg-success",
    [U.PendingForReview]: "text-warning bg-warning",
    [U.Rejected]: "text-danger bg-danger"
};
var nt = ( () => {
    let t = class t extends we {
        get url() {
            return `${this.mtsPath + this.apiUrls.contract}contract`
        }
        get() {
            return this.httpService.get(this.url).pipe(N(n => n.map(i => (i.status ??= U.Unseen,
            i))))
        }
        requestOtpWithDomain(n, i) {
            return this.httpService.post(`${this.url}/otp`, {
                body: {
                    contractType: n,
                    domain: i
                }
            })
        }
        verifyContract(n) {
            return this.httpService.post(`${this.url}/add`, {
                body: A({}, n)
            })
        }
    }
    ;
    t.\u0275fac = ( () => {
        let n;
        return function(o) {
            return (n || (n = $e(t)))(o || t)
        }
    }
    )(),
    t.\u0275prov = M({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
var Ie = ( () => {
    let t = class t {
        constructor(n, i) {
            this.store = n,
            this.contractService = i,
            this.walletAgreementStatusChanged = new xe
        }
        loadContracts() {
            this.store.dispatch(z.load())
        }
        requestOtp(n, i) {
            return this.contractService.requestOtpWithDomain(n.codeName, i)
        }
        verifyContract(n, i) {
            return this.contractService.verifyContract({
                id: n.id,
                token: i?.toString()
            })
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(v(G),v(nt))
    }
    ,
    t.\u0275prov = M({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
var Ct = e => e.contractState
  , it = O(Ct, e => Object.values(e.entities).filter(t => t.codeName !== Z.Wallet))
  , En = e => O(Ct, t => t.entities[e])
  , wn = O(it, e => e.find(t => t.codeName === et.OptionBuy)?.status)
  , Fn = O(it, e => e.find(t => t.codeName === et.OptionSell)?.status)
  , vt = O(Ct, e => Object.values(e.entities).find(t => t.codeName === Z.Wallet));
var Te = ( () => {
    let t = class t {
        getContractById(n) {
            return this.store.selectSignal(En(n))
        }
        walletCardAgreement() {
            return J(this, null, function*() {
                return yield Ae(this.store.select(vt))
            })
        }
        constructor(n) {
            this.store = n,
            this.unleashService = y(ue),
            this.contracts$ = this.store.select(it),
            this.contracts = ie(this.contracts$),
            this.optionBuyContractState$ = this.store.select(wn),
            this.optionSellContractState$ = this.store.select(Fn),
            this.walletCardContract$ = this.store.select(vt)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(v(G))
    }
    ,
    t.\u0275prov = M({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
var to = ( () => {
    let t = class t {
        constructor(n, i, o, l, S) {
            this.actions$ = n,
            this.contractService = i,
            this.agreementFacade = o,
            this.store = l,
            this.unleashService = S,
            this.loadingAgreements$ = ye( () => this.actions$.pipe(Se(z.load), Ve( () => this.contractService.get().pipe(N(R => z.set({
                values: R
            }))))))
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(v(Qe),v(nt),v(Ie),v(Te),v(ue))
    }
    ,
    t.\u0275prov = M({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
function di() {
    return {
        ids: [],
        entities: {}
    }
}
function pi() {
    function e(t={}) {
        return Object.assign(di(), t)
    }
    return {
        getInitialState: e
    }
}
function fi() {
    function e(t) {
        let r = l => l.ids
          , n = l => l.entities
          , i = O(r, n, (l, S) => l.map(R => S[R]))
          , o = O(r, l => l.length);
        return t ? {
            selectIds: O(t, r),
            selectEntities: O(t, n),
            selectAll: O(t, i),
            selectTotal: O(t, o)
        } : {
            selectIds: r,
            selectEntities: n,
            selectAll: i,
            selectTotal: o
        }
    }
    return {
        getSelectors: e
    }
}
var m = function(e) {
    return e[e.EntitiesOnly = 0] = "EntitiesOnly",
    e[e.Both = 1] = "Both",
    e[e.None = 2] = "None",
    e
}(m || {});
function k(e) {
    return function(r, n) {
        let i = {
            ids: [...n.ids],
            entities: A({}, n.entities)
        }
          , o = e(r, i);
        return o === m.Both ? Object.assign({}, n, i) : o === m.EntitiesOnly ? V(A({}, n), {
            entities: i.entities
        }) : n
    }
}
function oe(e, t) {
    let r = t(e);
    return Ot() && r === void 0 && console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", e, "The `selectId` implementation:", t.toString()),
    r
}
function In(e) {
    function t(g, a) {
        let c = oe(g, e);
        return c in a.entities ? m.None : (a.ids.push(c),
        a.entities[c] = g,
        m.Both)
    }
    function r(g, a) {
        let c = !1;
        for (let s of g)
            c = t(s, a) !== m.None || c;
        return c ? m.Both : m.None
    }
    function n(g, a) {
        return a.ids = [],
        a.entities = {},
        r(g, a),
        m.Both
    }
    function i(g, a) {
        let c = oe(g, e);
        return c in a.entities ? (a.entities[c] = g,
        m.EntitiesOnly) : (a.ids.push(c),
        a.entities[c] = g,
        m.Both)
    }
    function o(g, a) {
        let c = g.map(s => i(s, a));
        switch (!0) {
        case c.some(s => s === m.Both):
            return m.Both;
        case c.some(s => s === m.EntitiesOnly):
            return m.EntitiesOnly;
        default:
            return m.None
        }
    }
    function l(g, a) {
        return S([g], a)
    }
    function S(g, a) {
        let s = (g instanceof Array ? g : a.ids.filter(u => g(a.entities[u]))).filter(u => u in a.entities).map(u => delete a.entities[u]).length > 0;
        return s && (a.ids = a.ids.filter(u => u in a.entities)),
        s ? m.Both : m.None
    }
    function R(g) {
        return Object.assign({}, g, {
            ids: [],
            entities: {}
        })
    }
    function be(g, a, c) {
        let s = c.entities[a.id]
          , u = Object.assign({}, s, a.changes)
          , f = oe(u, e)
          , b = f !== a.id;
        return b && (g[a.id] = f,
        delete c.entities[a.id]),
        c.entities[f] = u,
        b
    }
    function Y(g, a) {
        return Q([g], a)
    }
    function Q(g, a) {
        let c = {};
        return g = g.filter(u => u.id in a.entities),
        g.length > 0 ? g.filter(f => be(c, f, a)).length > 0 ? (a.ids = a.ids.map(f => c[f] || f),
        m.Both) : m.EntitiesOnly : m.None
    }
    function fe(g, a) {
        let s = a.ids.reduce( (u, f) => {
            let b = g(a.entities[f]);
            return b !== a.entities[f] && u.push({
                id: f,
                changes: b
            }),
            u
        }
        , []).filter( ({id: u}) => u in a.entities);
        return Q(s, a)
    }
    function ke({map: g, id: a}, c) {
        let s = c.entities[a];
        if (!s)
            return m.None;
        let u = g(s);
        return Y({
            id: a,
            changes: u
        }, c)
    }
    function ot(g, a) {
        return Be([g], a)
    }
    function Be(g, a) {
        let c = []
          , s = [];
        for (let b of g) {
            let j = oe(b, e);
            j in a.entities ? s.push({
                id: j,
                changes: b
            }) : c.push(b)
        }
        let u = Q(s, a)
          , f = r(c, a);
        switch (!0) {
        case (f === m.None && u === m.None):
            return m.None;
        case (f === m.Both || u === m.Both):
            return m.Both;
        default:
            return m.EntitiesOnly
        }
    }
    return {
        removeAll: R,
        addOne: k(t),
        addMany: k(r),
        setAll: k(n),
        setOne: k(i),
        setMany: k(o),
        updateOne: k(Y),
        updateMany: k(Q),
        upsertOne: k(ot),
        upsertMany: k(Be),
        removeOne: k(l),
        removeMany: k(S),
        map: k(fe),
        mapOne: k(ke)
    }
}
function hi(e, t) {
    let {removeOne: r, removeMany: n, removeAll: i} = In(e);
    function o(c, s) {
        return l([c], s)
    }
    function l(c, s) {
        let u = c.filter(f => !(oe(f, e)in s.entities));
        return u.length === 0 ? m.None : (a(u, s),
        m.Both)
    }
    function S(c, s) {
        return s.entities = {},
        s.ids = [],
        l(c, s),
        m.Both
    }
    function R(c, s) {
        let u = oe(c, e);
        return u in s.entities ? (s.ids = s.ids.filter(f => f !== u),
        a([c], s),
        m.Both) : o(c, s)
    }
    function be(c, s) {
        let u = c.map(f => R(f, s));
        switch (!0) {
        case u.some(f => f === m.Both):
            return m.Both;
        case u.some(f => f === m.EntitiesOnly):
            return m.EntitiesOnly;
        default:
            return m.None
        }
    }
    function Y(c, s) {
        return fe([c], s)
    }
    function Q(c, s, u) {
        if (!(s.id in u.entities))
            return !1;
        let f = u.entities[s.id]
          , b = Object.assign({}, f, s.changes)
          , j = oe(b, e);
        return delete u.entities[s.id],
        c.push(b),
        j !== s.id
    }
    function fe(c, s) {
        let u = []
          , f = c.filter(b => Q(u, b, s)).length > 0;
        if (u.length === 0)
            return m.None;
        {
            let b = s.ids
              , j = [];
            return s.ids = s.ids.filter( (W, he) => W in s.entities ? !0 : (j.push(he),
            !1)),
            a(u, s),
            !f && j.every(W => s.ids[W] === b[W]) ? m.EntitiesOnly : m.Both
        }
    }
    function ke(c, s) {
        let u = s.ids.reduce( (f, b) => {
            let j = c(s.entities[b]);
            return j !== s.entities[b] && f.push({
                id: b,
                changes: j
            }),
            f
        }
        , []);
        return fe(u, s)
    }
    function ot({map: c, id: s}, u) {
        let f = u.entities[s];
        if (!f)
            return m.None;
        let b = c(f);
        return Y({
            id: s,
            changes: b
        }, u)
    }
    function Be(c, s) {
        return g([c], s)
    }
    function g(c, s) {
        let u = []
          , f = [];
        for (let W of c) {
            let he = oe(W, e);
            he in s.entities ? f.push({
                id: he,
                changes: W
            }) : u.push(W)
        }
        let b = fe(f, s)
          , j = l(u, s);
        switch (!0) {
        case (j === m.None && b === m.None):
            return m.None;
        case (j === m.Both || b === m.Both):
            return m.Both;
        default:
            return m.EntitiesOnly
        }
    }
    function a(c, s) {
        c.sort(t);
        let u = []
          , f = 0
          , b = 0;
        for (; f < c.length && b < s.ids.length; ) {
            let j = c[f]
              , W = oe(j, e)
              , he = s.ids[b]
              , Nn = s.entities[he];
            t(j, Nn) <= 0 ? (u.push(W),
            f++) : (u.push(he),
            b++)
        }
        f < c.length ? s.ids = u.concat(c.slice(f).map(e)) : s.ids = u.concat(s.ids.slice(b)),
        c.forEach( (j, W) => {
            s.entities[e(j)] = j
        }
        )
    }
    return {
        removeOne: r,
        removeMany: n,
        removeAll: i,
        addOne: k(o),
        updateOne: k(Y),
        upsertOne: k(Be),
        setAll: k(S),
        setOne: k(R),
        setMany: k(be),
        addMany: k(l),
        updateMany: k(fe),
        upsertMany: k(g),
        map: k(ke),
        mapOne: k(ot)
    }
}
function Tn(e={}) {
    let {selectId: t, sortComparer: r} = {
        selectId: e.selectId ?? (l => l.id),
        sortComparer: e.sortComparer ?? !1
    }
      , n = pi()
      , i = fi()
      , o = r ? hi(t, r) : In(t);
    return A(A(A({
        selectId: t,
        sortComparer: r
    }, n), i), o)
}
var rt = Tn()
  , gi = rt.getInitialState({
    loading: !1
});
function Ci(e, t) {
    return vi(e, t)
}
var vi = Ye(gi, K(z.load, e => V(A({}, e), {
    loading: !0
})), K(z.loadedError, e => V(A({}, e), {
    loading: !1
})), K(z.update, (e, t) => rt.updateOne(t, e)), K(z.upsert, (e, {value: t}) => rt.upsertOne(t, e)), K(z.set, (e, {values: t}) => rt.setAll(t, V(A({}, e), {
    loading: !1
}))))
  , lo = {
    contractState: Ci
};
var kn = ( () => {
    let t = class t extends we {
        get url() {
            return `${this.mtsPath + this.apiUrls.contract}Agreements`
        }
        get() {
            return this.httpService.get(this.url)
        }
        updateState(n) {
            let i = "add";
            return n.agreementState === T.Inactive && (i = "terminate"),
            this.httpService.post(`${this.url}/${i}`, {
                body: {
                    id: n.agreementId
                }
            })
        }
    }
    ;
    t.\u0275fac = ( () => {
        let n;
        return function(o) {
            return (n || (n = $e(t)))(o || t)
        }
    }
    )(),
    t.\u0275prov = M({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
var yo = ( () => {
    let t = class t {
        constructor(n, i, o, l) {
            this.actions$ = n,
            this.agreementService = i,
            this.agreementFacade = o,
            this.store = l,
            this.startLoader$ = ye( () => this.actions$.pipe(Se(_.load, _.updateAgreementStatus), N( () => _.loaderStart()), ge( () => _e(_.loaderEnd())))),
            this.stopLoader$ = ye( () => this.actions$.pipe(Se(_.set, _.agreementStatusUpdated), N( () => _.loaderEnd()), ge( () => _e(_.loaderEnd())))),
            this.loadingAgreements$ = ye( () => this.actions$.pipe(Se(_.load), Ve( () => this.store.agreements()?.length > 0 ? _e(_.loaderEnd()) : this.agreementService.get().pipe(N(S => _.set({
                agreements: S
            })))), ge( () => _e(_.loaderEnd())))),
            this.setAgreementState$ = ye( () => this.actions$.pipe(Se(_.updateAgreementStatus), Re(S => this.agreementService.updateState(S.agreementDto).pipe(Ce( () => {
                this.agreementFacade.alertForUpdateState(S.agreementDto, !0)
            }
            ), N( () => _.agreementStatusUpdated({
                agreementDto: S.agreementDto
            })), ge( () => (this.agreementFacade.alertForUpdateState(S.agreementDto, !1),
            _e(_.loaderEnd())))))))
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)(v(Qe),v(kn),v(de),v(me))
    }
    ,
    t.\u0275prov = M({
        token: t,
        factory: t.\u0275fac,
        providedIn: "root"
    });
    let e = t;
    return e
}
)();
var Si = {
    agreements: [],
    loading: !1
};
function bi(e, t) {
    return xi(e, t)
}
var xi = Ye(Si, K(_.loaderStart, e => V(A({}, e), {
    loading: !0
})), K(_.loaderEnd, e => V(A({}, e), {
    loading: !1
})), K(_.set, (e, {agreements: t}) => V(A({}, e), {
    agreements: t
})), K(_.agreementStatusUpdated, (e, {agreementDto: t}) => {
    let r = e.agreements.map(n => (n.id === t.agreementId && (n = V(A({}, n), {
        status: t.agreementState
    })),
    n));
    return V(A({}, e), {
        agreements: r
    })
}
))
  , _o = {
    agreementState: bi
};
function _i(e, t) {
    if (e & 1) {
        let r = B();
        p(0, "div", 4)(1, "button", 5),
        I("click", function() {
            w(r);
            let i = h();
            return F(i.accept())
        }),
        x(2, "\u0645\u06CC\u200C\u067E\u0630\u06CC\u0631\u0645"),
        d(),
        p(3, "button", 6),
        I("click", function() {
            w(r);
            let i = h();
            return F(i.decline())
        }),
        x(4, "\u0646\u0645\u06CC\u200C\u067E\u0630\u06CC\u0631\u0645"),
        d()()
    }
}
var Mn = ( () => {
    let t = class t {
        constructor() {
            this.selectedAgreement = D(void 0),
            this.back = X(),
            this.CustomerAgreementStateType = T,
            this.agreementFacade = y(de)
        }
        accept() {
            this.agreementFacade.setAgreementState({
                agreementId: this.selectedAgreement()?.id,
                agreementState: T.Confirm
            }),
            this.back.emit(!0)
        }
        decline() {
            this.agreementFacade.setAgreementState({
                agreementId: this.selectedAgreement()?.id,
                agreementState: T.Inactive
            }),
            this.back.emit(!0)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = H({
        type: t,
        selectors: [["agreement-item"]],
        inputs: {
            selectedAgreement: [1, "selectedAgreement"]
        },
        outputs: {
            back: "back"
        },
        decls: 6,
        vars: 3,
        consts: [[1, "d-flex", "flex-column", "h-100", "overflow-hidden"], [1, "p-3", "overflow-auto", "flex-grow-1"], [1, "mb-3"], [1, "text-justify", 3, "innerHTML"], [1, "p-3", "text-end", "bg-principal-2x", "border-top"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "me-2", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"]],
        template: function(i, o) {
            if (i & 1 && (p(0, "div", 0)(1, "div", 1)(2, "h6", 2),
            x(3),
            d(),
            L(4, "div", 3),
            d(),
            q(5, _i, 5, 0, "div", 4),
            d()),
            i & 2) {
                let l, S, R;
                C(3),
                Ee((l = o.selectedAgreement()) == null ? null : l.title),
                C(),
                E("innerHTML", (S = o.selectedAgreement()) == null ? null : S.text, Pe),
                C(),
                P(((R = o.selectedAgreement()) == null ? null : R.status) === o.CustomerAgreementStateType.Unseen ? 5 : -1)
            }
        },
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var On = (e, t) => t.id;
function Ai(e, t) {
    if (e & 1) {
        let r = B();
        p(0, "div", 1)(1, "div", 2),
        I("click", function() {
            let i = w(r).$implicit
              , o = h();
            return F(o.handleSelectAgreement(i.id))
        }),
        p(2, "div", 3),
        x(3),
        d(),
        p(4, "small", 4),
        x(5, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0646\u0634\u062F\u0647"),
        d()()()
    }
    if (e & 2) {
        let r = t.$implicit;
        C(3),
        ne(" ", r.title, " ")
    }
}
function Ei(e, t) {
    if (e & 1) {
        let r = B();
        p(0, "label", 9),
        I("click", function() {
            w(r);
            let i = h().$implicit
              , o = h();
            return F(o.checkChangeStatePossible(i.id))
        }),
        p(1, "input", 10),
        I("change", function() {
            w(r);
            let i = h().$implicit
              , o = h();
            return F(o.agreementStatusChange(i.id))
        }),
        d(),
        L(2, "span", 11),
        d()
    }
    if (e & 2) {
        let r = h().$implicit
          , n = h();
        C(),
        De("id", "id", r.id, ""),
        E("disabled", n.unChangeableAgreement(r.id))("checked", r.status === n.CustomerAgreementStateType.Confirm)
    }
}
function wi(e, t) {
    if (e & 1) {
        let r = B();
        p(0, "input", 12),
        I("change", function() {
            w(r);
            let i = h().$implicit
              , o = h();
            return F(o.agreementStatusChange(i.id))
        }),
        d(),
        p(1, "label", 13),
        I("click", function() {
            w(r);
            let i = h().$implicit
              , o = h();
            return F(o.checkChangeStatePossible(i.id))
        }),
        d()
    }
    if (e & 2) {
        let r = h().$implicit
          , n = h();
        De("id", "id", r.id, ""),
        E("disabled", n.unChangeableAgreement(r.id))("checked", r.status === n.CustomerAgreementStateType.Confirm),
        C(),
        De("for", "id", r.id, "")
    }
}
function Fi(e, t) {
    if (e & 1) {
        let r = B();
        p(0, "div", 1)(1, "div", 5)(2, "div", 6),
        I("click", function() {
            let i = w(r).$implicit
              , o = h();
            return F(o.handleSelectAgreement(i.id))
        }),
        x(3),
        d(),
        p(4, "div", 7),
        q(5, Ei, 3, 4, "label", 8)(6, wi, 2, 6),
        d()()()
    }
    if (e & 2) {
        let r = t.$implicit
          , n = h();
        C(3),
        ne(" ", r.title, " "),
        C(2),
        P(n.isAndroid() ? 6 : 5)
    }
}
var jn = ( () => {
    let t = class t {
        constructor() {
            this.isAndroid = D(!1),
            this.backActive = X(),
            this.selectAgreement = X(),
            this.CustomerAgreementStateType = T,
            this.agreementFacade = y(de),
            this.notificationService = y(ae),
            this.agreementStore = y(me)
        }
        unChangeableAgreement(n) {
            return n === Z.Hami
        }
        handleSelectAgreement(n) {
            this.selectAgreement.emit(n)
        }
        agreementStatusChange(n) {
            this.unChangeableAgreement(n) || this.agreementFacade.toggleAgreementState(n)
        }
        checkChangeStatePossible(n) {
            this.unChangeableAgreement(n) && this.notificationService.alert("\u0627\u0645\u06A9\u0627\u0646 \u062A\u063A\u06CC\u06CC\u0631 \u0648\u0636\u0639\u06CC\u062A \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F\u060C \u0628\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F", ve.info)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = H({
        type: t,
        selectors: [["agreement-list"]],
        inputs: {
            isAndroid: [1, "isAndroid"]
        },
        outputs: {
            backActive: "backActive",
            selectAgreement: "selectAgreement"
        },
        decls: 5,
        vars: 0,
        consts: [[1, "list-group", "list-group-flush"], [1, "list-group-item", "bg-principal", "bg-principal-3x-dark", 2, "min-height", "0"], [1, "d-flex", "align-items-center", "cup", "py-2", 3, "click"], [1, "text-truncate", "flex-grow-1"], [1, "text-warning"], [1, "d-flex", "align-items-center", "py-2", "cup"], [1, "text-truncate", "flex-grow-1", "cup", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-between", "ms-2"], [1, "ios7-switch", "mb-0"], [1, "ios7-switch", "mb-0", 3, "click"], ["type", "checkbox", 3, "change", "disabled", "checked", "id"], [1, "h4", "mb-0"], ["type", "checkbox", 1, "switch-input", 3, "change", "disabled", "id", "checked"], [1, "switch-label", 3, "click", "for"]],
        template: function(i, o) {
            i & 1 && (p(0, "div", 0),
            Me(1, Ai, 6, 1, "div", 1, On),
            Me(3, Fi, 7, 2, "div", 1, On),
            d()),
            i & 2 && (C(),
            Oe(o.agreementStore.userRequiredAgreements()),
            C(2),
            Oe(o.agreementStore.userAgreements()))
        },
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var Ii = (e, t) => t.id;
function Ti(e, t) {
    if (e & 1) {
        let r = B();
        p(0, "div", 2),
        I("click", function() {
            let i = w(r).$implicit
              , o = h();
            return F(o.handleSelectContract(i.id))
        }),
        p(1, "div", 3)(2, "div", 4),
        x(3),
        d(),
        p(4, "span", 5),
        x(5),
        d(),
        L(6, "svg-icon", 6),
        d()()
    }
    if (e & 2) {
        let r = t.$implicit
          , n = h();
        C(3),
        ne(" ", r.title, " "),
        C(),
        E("ngClass", n.ContractStateToClass[r.status]),
        C(),
        Ee(n.ContractStateToText[r.status]),
        C(),
        E("iconName", n.icons.ChevronLeft)
    }
}
var Bn = ( () => {
    let t = class t {
        constructor() {
            this.icons = Ge,
            this.isAndroid = D(!1),
            this.ContractStateToText = xn,
            this.ContractStateToClass = _n,
            this.backActive = X(),
            this.selectContract = X(),
            this.contractStore = y(Te)
        }
        handleSelectContract(n) {
            this.selectContract.emit(n)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = H({
        type: t,
        selectors: [["contract-list"]],
        inputs: {
            isAndroid: [1, "isAndroid"]
        },
        outputs: {
            backActive: "backActive",
            selectContract: "selectContract"
        },
        decls: 3,
        vars: 0,
        consts: [[1, "list-group", "list-group-flush"], [1, "list-group-item", "bg-principal", "bg-principal-3x-dark", "cup", 2, "min-height", "0"], [1, "list-group-item", "bg-principal", "bg-principal-3x-dark", "cup", 2, "min-height", "0", 3, "click"], [1, "d-flex", "align-items-center", "py-2", "gap-2"], [1, "text-truncate", "flex-grow-1", "cup"], [1, "rounded", "p-1", "bg-opacity-10", 3, "ngClass"], ["width", "24", "height", "24", 1, "text-secondary", 3, "iconName"]],
        template: function(i, o) {
            i & 1 && (p(0, "div", 0),
            Me(1, Ti, 7, 4, "div", 1, Ii),
            d()),
            i & 2 && (C(),
            Oe(o.contractStore.contracts()))
        },
        dependencies: [ce, qe],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var ki = (e, t, r) => [e, t, r]
  , Mi = (e, t) => [e, t]
  , Oi = (e, t) => ({
    "btn-secondary": e,
    "btn-global": t
});
function ji(e, t) {
    if (e & 1) {
        let r = B();
        p(0, "div", 2)(1, "input", 3),
        I("change", function(i) {
            w(r);
            let o = h(2);
            return F(o.checkBoxChanged(i))
        }),
        d(),
        p(2, "label", 4),
        x(3, " \u062A\u0645\u0627\u0645 \u0628\u0646\u062F\u0647\u0627\u06CC \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0648 \u0645\u0641\u0627\u062F \u0622\u0646 \u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u0646\u0645\u0648\u062F\u0647\u200C\u0627\u0645 \u0648 \u0645\u06CC\u200C\u067E\u0630\u06CC\u0631\u0645."),
        d()(),
        p(4, "button", 5),
        I("click", function() {
            w(r);
            let i = h(2);
            return F(i.confirm())
        }),
        x(5, " \u062A\u0627\u06CC\u06CC\u062F \u0648 \u0627\u062F\u0627\u0645\u0647 \u0642\u0631\u0627\u0631\u062F\u0627\u062F "),
        d()
    }
    if (e & 2) {
        let r = h(2);
        C(4),
        E("ngClass", lt(2, Oi, !r.checkBoxValue(), r.checkBoxValue()))("disabled", !r.checkBoxValue())
    }
}
function Bi(e, t) {
    e & 1 && (p(0, "div"),
    x(1, "\u062C\u0647\u062A \u067E\u06CC\u06AF\u06CC\u0631\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u0632\u06CC\u0631 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F."),
    d(),
    p(2, "div"),
    x(3, "0218800"),
    d())
}
function Ri(e, t) {
    if (e & 1 && (p(0, "div", 1),
    q(1, ji, 6, 5)(2, Bi, 4, 0),
    d()),
    e & 2) {
        let r, n, i = h();
        C(),
        P(lt(2, Mi, i.contractConfirmStateType.Unseen, i.contractConfirmStateType.Inactive).includes((r = i.selectedContract()) == null ? null : r.status) ? 1 : -1),
        C(),
        P(((n = i.selectedContract()) == null ? null : n.status) === i.contractConfirmStateType.Rejected ? 2 : -1)
    }
}
var Rn = ( () => {
    let t = class t {
        constructor() {
            this.confirmContract = new Ft,
            this.selectedContract = D(null),
            this.contractConfirmStateType = U,
            this.contractFacade = y(Ie),
            this.notificationService = y(ae),
            this.environment = y(Ke),
            this.checkBoxValue = te(!1)
        }
        checkBoxChanged(n) {
            let i = n.target;
            this.checkBoxValue.set(i.checked)
        }
        confirm() {
            this.contractFacade.requestOtp(this.selectedContract(), this.environment.appUrl.split("//")[1]).subscribe({
                next: () => {
                    this.confirmContract.emit(!0)
                }
                ,
                error: n => {
                    (n?.error ?? n) === "\u0627\u0639\u062A\u0628\u0627\u0631 \u062A\u0648\u06A9\u0646  \u0642\u0628\u0644\u06CC \u0634\u0645\u0627 \u0628\u0631\u0642\u0631\u0627\u0631 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F." ? this.confirmContract.emit(!0) : this.notificationService.alertError("\u0627\u0645\u0636\u0627\u06CC \u062A\u0648\u0627\u0641\u0642\u0646\u0627\u0645\u0647 \u0645\u0648\u0641\u0642\u06CC\u062A \u0622\u0645\u06CC\u0632 \u0646\u0628\u0648\u062F")
                }
            })
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = H({
        type: t,
        selectors: [["contract-item"]],
        inputs: {
            selectedContract: [1, "selectedContract"]
        },
        outputs: {
            confirmContract: "confirmContract"
        },
        decls: 2,
        vars: 6,
        consts: [[1, "flex-grow-1", "overflow-auto", "p-3", "text-justify", 3, "innerHTML"], [1, "bg-principal", "p-3"], [1, "form-check", "form-check-reverse", "fs-5", "mb-3"], ["type", "checkbox", "id", "check", 1, "form-check-input", 3, "change"], ["for", "check", 1, "form-check-label", "fs-7"], [1, "btn", "w-100", 3, "click", "ngClass", "disabled"]],
        template: function(i, o) {
            if (i & 1 && (L(0, "div", 0),
            q(1, Ri, 3, 5, "div", 1)),
            i & 2) {
                let l, S;
                E("innerHTML", (l = o.selectedContract()) == null ? null : l.text, Pe),
                C(),
                P(Tt(2, ki, o.contractConfirmStateType.Unseen, o.contractConfirmStateType.Rejected, o.contractConfirmStateType.Inactive).includes((S = o.selectedContract()) == null ? null : S.status) ? 1 : -1)
            }
        },
        dependencies: [ce],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var Vi = e => ({
    "pe-none": e
});
function Ni(e, t) {
    if (e & 1 && (p(0, "div", 8)(1, "span"),
    x(2),
    d(),
    x(3, " \u062A\u0627 \u0627\u0631\u0633\u0627\u0644 \u0645\u062C\u062F\u062F \u0631\u0645\u0632 "),
    d()),
    e & 2) {
        let r = h();
        C(2),
        ne("(", r.counter(), ")")
    }
}
function $i(e, t) {
    if (e & 1) {
        let r = B();
        p(0, "div", 11),
        I("click", function() {
            w(r);
            let i = h();
            return F(i.sendOtp())
        }),
        x(1, " \u0627\u0631\u0633\u0627\u0644 \u0645\u062C\u062F\u062F \u0631\u0645\u0632 "),
        L(2, "svg-icon", 12),
        d()
    }
    if (e & 2) {
        let r = h();
        C(2),
        E("iconName", r.icons.ChevronLeft)
    }
}
var Vn = ( () => {
    let t = class t {
        constructor() {
            this.icons = Ge,
            this.otpExpireTime = 120,
            this.otpLength = 6,
            this.destroyRef = y(Ue),
            this.environment = y(Ke),
            this.confirmedOtp = X(),
            this.accountService = y(Yt),
            this.modalService = y(Xt),
            this.selectedContract = D(null),
            this.notificationService = y(ae),
            this.loading = te(!1),
            this.timeLeft = te(this.otpExpireTime),
            this.fb = y(Gt),
            this.form = this.fb.group({
                otp: new Ut(void 0,[je.required, je.maxLength(this.otpLength), je.minLength(this.otpLength), je.pattern("^[0-9]*$")])
            }),
            this.counter$ = bt(1e3).pipe(We(this.destroyRef), se( () => this.timeLeft() > 0), N( () => (this.timeLeft.update(n => --n),
            qt.getformatTime(this.timeLeft())))),
            this.counter = ie(this.counter$),
            this.contractFacade = y(Ie),
            "OTPCredential"in window && this.listenForOTPCredential()
        }
        listenForOTPCredential() {
            navigator.credentials.get({
                otp: {
                    transport: ["sms"]
                }
            }).then(n => {
                n && n.code && (this.form.patchValue({
                    otp: n.code
                }),
                this.submit())
            }
            )
        }
        submit() {
            this.loading.set(!0),
            this.form.valid && this.contractFacade.verifyContract(this.selectedContract(), this.form.get("otp").value).subscribe({
                next: () => {
                    this.loading.set(!1),
                    this.contractFacade.loadContracts(),
                    this.confirmedOtp.emit(!0),
                    this.modalService.open(en).componentInstance.updateMessage("\u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062B\u0628\u062A \u0634\u062F")
                }
                ,
                error: n => {
                    this.loading.set(!1),
                    this.notificationService.alertError(n.error ?? n)
                }
            })
        }
        sendOtp() {
            this.contractFacade.requestOtp(this.selectedContract(), this.environment.appUrl.split("//")[1]).subscribe({
                next: () => {
                    this.timeLeft.set(this.otpExpireTime)
                }
                ,
                error: n => {
                    (n?.error ?? n) === "\u0627\u0639\u062A\u0628\u0627\u0631 \u062A\u0648\u06A9\u0646  \u0642\u0628\u0644\u06CC \u0634\u0645\u0627 \u0628\u0631\u0642\u0631\u0627\u0631 \u0645\u06CC\u200C\u0628\u0627\u0634\u062F." && this.timeLeft.set(this.otpExpireTime),
                    this.notificationService.alertError(n.error ?? n)
                }
            })
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = H({
        type: t,
        selectors: [["contract-otp"]],
        inputs: {
            selectedContract: [1, "selectedContract"]
        },
        outputs: {
            confirmedOtp: "confirmedOtp"
        },
        decls: 21,
        vars: 16,
        consts: [[1, "p-3"], [1, "fw-bold", "mb-3"], [1, "mb-2"], [3, "submit", "formGroup"], ["formControlName", "otp", 1, "form-control", "form-control-lg", 3, "maxlength", "placeholder"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "mt-2"], [1, "text-secondary", "d-flex", "align-items-center", "gap-1"], ["width", "12", "height", "12", 3, "iconName"], [1, "text-secondary"], [1, "text-global", "d-flex", "gap-1", "cup"], ["type", "submit", 1, "btn", "btn-global", "w-100", 3, "ngClass", "disabled"], [1, "text-global", "d-flex", "gap-1", "cup", 3, "click"], ["width", "18", "height", "18", 1, "", 3, "iconName"]],
        template: function(i, o) {
            if (i & 1 && (p(0, "div", 0)(1, "div", 1),
            x(2),
            d(),
            p(3, "div", 2),
            x(4),
            kt(5, "async"),
            d(),
            p(6, "form", 3),
            I("submit", function() {
                return o.submit()
            }),
            L(7, "input", 4),
            p(8, "div", 5)(9, "div")(10, "div", 6),
            L(11, "svg-icon", 7),
            x(12),
            d(),
            p(13, "div", 6),
            L(14, "svg-icon", 7),
            x(15, " \u0631\u0645\u0632 \u0641\u0642\u0637 \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 \u0627\u0639\u062F\u0627\u062F \u0628\u0627\u0634\u062F "),
            d()(),
            p(16, "div"),
            q(17, Ni, 4, 1, "div", 8)(18, $i, 3, 1, "div", 9),
            d()(),
            p(19, "button", 10),
            x(20, " \u0627\u0645\u0636\u0627\u06CC \u0642\u0631\u0627\u0631\u062F\u0627\u062F "),
            d()()()),
            i & 2) {
                let l, S;
                C(2),
                Ee(" \u0627\u0645\u0636\u0627\u06CC \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9 " + ((l = o.selectedContract()) == null ? null : l.title)),
                C(2),
                ne(" \u0631\u0645\u0632 \u06CC\u06A9\u0628\u0627\u0631 \u0645\u0635\u0631\u0641 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062C\u0647\u062A \u0627\u0645\u0636\u0627\u06CC \u0642\u0631\u0627\u0631\u062F\u0627\u062F \u0628\u0647 \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644 ", (S = Mt(5, 12, o.accountService.userAccountInfo$)) == null ? null : S.phoneNumber, " \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F. "),
                C(2),
                E("formGroup", o.form),
                C(),
                E("maxlength", o.otpLength)("placeholder", "\u0631\u0645\u0632 " + o.otpLength + " \u0631\u0642\u0645\u06CC"),
                C(4),
                E("iconName", o.icons.CircleSmall),
                C(),
                ne(" \u0637\u0648\u0644 \u0631\u0645\u0632 ", o.otpLength, " \u0631\u0642\u0645 \u0627\u0633\u062A "),
                C(2),
                E("iconName", o.icons.CircleSmall),
                C(3),
                P(o.counter() && o.timeLeft() !== 0 ? 17 : -1),
                C(),
                P(o.timeLeft() === 0 ? 18 : -1),
                C(),
                E("ngClass", He(14, Vi, o.loading()))("disabled", !o.form.dirty || (o.form == null ? null : o.form.invalid) || o.timeLeft() === 0)
            }
        },
        dependencies: [jt, Wt, Pt, Vt, Nt, $t, Ht, Lt, Dt, ce, qe],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
var Ui = ["agreement", ""]
  , Pi = e => ({
    loading: e
});
function Li(e, t) {
    if (e & 1) {
        let r = B();
        p(0, "div", 4),
        x(1, "\u062A\u0648\u0627\u0641\u0642\u0646\u0627\u0645\u0647\u200C\u0647\u0627"),
        d(),
        p(2, "agreement-list", 5),
        I("selectAgreement", function(i) {
            w(r);
            let o = h();
            return F(o.setSelectedAgreement(i))
        }),
        d(),
        p(3, "div", 4),
        x(4, "\u0642\u0631\u0627\u0631\u062F\u0627\u062F\u0647\u0627"),
        d(),
        p(5, "contract-list", 6),
        I("selectContract", function(i) {
            w(r);
            let o = h();
            return F(o.setSelectedContract(i))
        }),
        d()
    }
    if (e & 2) {
        let r = h();
        C(2),
        E("isAndroid", r.isAndroid()),
        C(3),
        E("isAndroid", r.isAndroid())
    }
}
function Di(e, t) {
    if (e & 1) {
        let r = B();
        p(0, "agreement-item", 7),
        I("back", function() {
            w(r);
            let i = h();
            return F(i.onResetAgreement())
        }),
        d()
    }
    if (e & 2) {
        let r = h();
        E("selectedAgreement", r.selectedAgreement())
    }
}
function Hi(e, t) {
    if (e & 1) {
        let r = B();
        p(0, "contract-otp", 8),
        I("confirmedOtp", function() {
            w(r);
            let i = h();
            return F(i.onResetContract())
        }),
        d()
    }
    if (e & 2) {
        let r = h();
        E("selectedContract", r.selectedContract())
    }
}
function Gi(e, t) {
    if (e & 1) {
        let r = B();
        p(0, "contract-item", 9),
        I("confirmContract", function() {
            w(r);
            let i = h();
            return F(i.confirmContract())
        })("back", function() {
            w(r);
            let i = h();
            return F(i.onResetContract())
        }),
        d()
    }
    if (e & 2) {
        let r = h();
        E("selectedContract", r.selectedContract())
    }
}
var pe = function(e) {
    return e[e.List = 0] = "List",
    e[e.AgreementItem = 1] = "AgreementItem",
    e[e.ContractItem = 2] = "ContractItem",
    e[e.ContractOtp = 3] = "ContractOtp",
    e
}(pe || {})
  , $s = ( () => {
    let t = class t {
        constructor() {
            this.isAndroid = D(!1),
            this.CustomerAgreementStateType = T,
            this.selectedAgreement = te(null),
            this.selectedContract = te(null),
            this.destroyRef = y(Ue),
            this.agreementFacade = y(de),
            this.agreementStore = y(me),
            this.contractStore = y(Te),
            this.unleashService = y(ue),
            this.getAgreementFromUrl$ = Kt("agreementId"),
            this.activeComponent = te(pe.List),
            this.AgreementActiveComponent = pe
        }
        ngOnInit() {
            this.getAgreements(),
            this.checkUrlAgreementId()
        }
        checkUrlAgreementId() {
            this.getAgreementFromUrl$.pipe(We(this.destroyRef), Ce(n => {
                this.setSelectedAgreement(n)
            }
            )).subscribe()
        }
        getAgreements() {
            this.agreementFacade.loadAgreements()
        }
        setSelectedAgreement(n) {
            return J(this, null, function*() {
                let i = yield this.agreementStore.getAgreementById(n);
                this.selectedAgreement.set(i),
                this.activeComponent.set(pe.AgreementItem)
            })
        }
        setSelectedContract(n) {
            let i = this.contractStore.getContractById(n);
            this.selectedContract.set(i()),
            this.activeComponent.set(pe.ContractItem)
        }
        onResetAgreement() {
            this.selectedAgreement.set(null),
            this.activeComponent.set(pe.List)
        }
        onResetContract() {
            this.selectedContract.set(null),
            this.activeComponent.set(pe.List)
        }
        confirmContract() {
            this.activeComponent.set(pe.ContractOtp)
        }
    }
    ;
    t.\u0275fac = function(i) {
        return new (i || t)
    }
    ,
    t.\u0275cmp = H({
        type: t,
        selectors: [["", "agreement", ""]],
        inputs: {
            isAndroid: [1, "isAndroid"]
        },
        attrs: Ui,
        decls: 5,
        vars: 4,
        consts: [[1, "h-100", 3, "ngClass"], [3, "selectedAgreement"], [3, "selectedContract"], [1, "h-100", "d-flex", "flex-column", "overflow-hidden", 3, "selectedContract"], [1, "text-secondary", "mb-1", "mt-2", "mx-3"], [3, "selectAgreement", "isAndroid"], [3, "selectContract", "isAndroid"], [3, "back", "selectedAgreement"], [3, "confirmedOtp", "selectedContract"], [1, "h-100", "d-flex", "flex-column", "overflow-hidden", 3, "confirmContract", "back", "selectedContract"]],
        template: function(i, o) {
            if (i & 1 && (p(0, "div", 0),
            q(1, Li, 6, 2)(2, Di, 1, 1, "agreement-item", 1)(3, Hi, 1, 1, "contract-otp", 2)(4, Gi, 1, 1, "contract-item", 3),
            d()),
            i & 2) {
                let l;
                E("ngClass", He(2, Pi, o.agreementStore.loading())),
                C(),
                P((l = o.activeComponent()) === o.AgreementActiveComponent.List ? 1 : l === o.AgreementActiveComponent.AgreementItem ? 2 : l === o.AgreementActiveComponent.ContractOtp ? 3 : l === o.AgreementActiveComponent.ContractItem ? 4 : -1)
            }
        },
        dependencies: [ce, Mn, jn, Bn, Rn, Vn],
        encapsulation: 2,
        changeDetection: 0
    });
    let e = t;
    return e
}
)();
export {ye as a, Qe as b, Se as c, cr as d, Tn as e, hr as f, T as g, me as h, de as i, U as j, Te as k, Ie as l, to as m, lo as n, $s as o, yo as p, _o as q};
//# sourceMappingURL=chunk-E4T36IQ3.js.map
