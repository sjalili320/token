import {a as Hn} from "./chunk-NGCDLITE.js";
import {b as Fn, c as Ye, d as zn, e as Kn} from "./chunk-Y3TWWRWU.js";
import {h as En, n as Rn} from "./chunk-IPTAAT5T.js";
import {f as Gn, i as jn, n as Bn, p as jt, q as Ae, s as $n, u as Wn, w as Un, y as Zn} from "./chunk-3Z35ZEOH.js";
import {c as Dn, f as zt, q as An, s as On, t as Mn, x as Nn} from "./chunk-KW67K7GE.js";
import {V as Ln, W as Vn, X as Pn, b as fe, n as de, p as yr} from "./chunk-VTNMJBW4.js";
import {A as Qe, B as kn, C as Vt, K as qe, M as De, N as Pt, O as Rt, P as mi, f as _e, g as Pe, h as ui, p as ge, r as P} from "./chunk-3R47PHPO.js";
import {Qc as Ht, Rc as Gt} from "./chunk-6IVSCMHT.js";
import {f as Tn} from "./chunk-E4T36IQ3.js";
import {c as ce, e as In, g as Nt, h as Ft, j as Et, k as ne, l as Lt} from "./chunk-O3BOZ3M4.js";
import {$b as _n, A as cn, Ac as Mt, B as It, Dc as xn, G as Ue, Lb as gn, P as Se, Pb as Ke, Q as nt, Qb as fn, Rb as Sn, U as B, Ua as pn, X as un, Zb as Te, aa as Dt, ba as Ie, ca as ke, cb as Ze, dc as Ot, ed as wn, fb as At, hc as bn, ib as hn, k as le, na as li, nb as ci, nc as vn, pb as di, ra as mn, rb as ot, vb as Cn, zc as yn} from "./chunk-OFJ5SZPL.js";
import {$ as ve, Aa as Oi, Ac as u, Ad as L, Bb as Be, Bc as x, Bd as vt, Cc as ft, Cd as it, Dc as St, Ea as ut, Ec as Wi, Fa as Mi, Fb as l, Fc as w, Ga as Y, Gb as C, Gc as Ui, H as W, Ha as tt, Hc as h, I as wi, Ia as F, Ib as ti, Ic as d, Id as oi, Ig as dn, J as Ii, Jc as ii, Ka as Xt, Kb as Vi, Kc as ni, Lb as Pi, Lc as ye, Mb as I, Nb as ht, Nd as yt, O as pe, Pa as Ni, Pb as Ri, Pc as Zi, Pd as q, Qa as Fi, Qb as zi, Qc as Ki, Qd as on, R as et, Rc as Qi, Rd as xt, Sa as mt, Sc as ri, Sf as si, T as oe, Tc as _t, Tf as rt, Ub as M, Uc as $e, Uf as ue, Va as D, Vb as Hi, Vc as qi, Vd as sn, Wb as Ct, Wc as _, Wd as an, Wf as ai, Xc as xe, Yb as Gi, Yc as V, Z as ki, Zc as Yi, Zd as ln, _b as y, _d as wt, a as te, ae, b as ze, bg as Tt, ca as Ge, db as f, dd as Ji, ea as ct, eb as S, fd as U, g as vr, gd as Xi, ha as Ti, hd as en, i as He, ja as dt, jb as Ei, kb as Li, kd as tn, kg as ee, ld as se, m as xi, mb as je, mc as Q, md as he, nb as ei, nc as m, nd as bt, ne as j, oc as ji, oe as we, p as re, pb as ie, pc as Fe, pe as J, q as Je, qb as A, qe as N, rb as pt, rc as Ee, re as z, sc as gt, td as Ce, te as kt, ua as Di, uc as b, ud as nn, vc as Bi, wc as $i, xa as Ai, xc as Le, yc as Ve, yd as We, z as Xe, zc as c, zd as rn} from "./chunk-K3475DQT.js";
var Jn = ["*"]
  , xr = (i, r, o, e, t, n) => ({
    areaBefore: i,
    areaAfter: r,
    gutterNum: o,
    first: e,
    last: t,
    isDragged: n
});
function wr(i, r) {
    i & 1 && Wi(0)
}
function Ir(i, r) {
    if (i & 1 && (ft(0),
    y(1, wr, 1, 0, "ng-container", 5),
    St()),
    i & 2) {
        let o = r.$implicit
          , e = d(3)
          , t = e.$implicit
          , n = e.$index
          , s = e.$index
          , a = d();
        l(),
        m("ngTemplateOutlet", a.customGutter().template)("ngTemplateOutletContext", tn(3, xr, t, a._areas()[n + 1], n + 1, s === 0, n === a._areas().length - 2, a.draggedGutterIndex() === n))("ngTemplateOutletInjector", o)
    }
}
function kr(i, r) {
    if (i & 1 && y(0, Ir, 2, 10, "ng-container", 4),
    i & 2) {
        let o = d(2).$index;
        m("asSplitGutterDynamicInjector", o + 1)
    }
}
function Tr(i, r) {
    i & 1 && x(0, "div", 3)
}
function Dr(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 2, 0),
        h("asSplitCustomClick", function() {
            f(o);
            let t = d().$index
              , n = d();
            return S(n.gutterClicked(t))
        })("asSplitCustomDblClick", function() {
            f(o);
            let t = d().$index
              , n = d();
            return S(n.gutterDoubleClicked(t))
        })("asSplitCustomMouseDown", function(t) {
            f(o);
            let n = qi(1)
              , s = d().$index
              , a = d();
            return S(a.gutterMouseDown(t, n, s, s, s + 1))
        })("asSplitCustomKeyDown", function(t) {
            f(o);
            let n = d().$index
              , s = d();
            return S(s.gutterKeyDown(t, n, n, n + 1))
        }),
        y(2, kr, 1, 1, "ng-container")(3, Tr, 1, 0, "div", 3),
        u()
    }
    if (i & 2) {
        let o, e = d(), t = e.$implicit, n = e.$index, s = d();
        Fe("as-dragged", s.draggedGutterIndex() === n),
        m("ngStyle", s.getGutterGridStyle(n + 1))("asSplitCustomMultiClickThreshold", s.gutterDblClickDuration())("asSplitCustomClickDeltaInPx", s.gutterClickDeltaPx()),
        Q("aria-label", s.gutterAriaLabel())("aria-orientation", s.direction())("aria-valuemin", s.getAriaValue(t.minSize()))("aria-valuemax", s.getAriaValue(t.maxSize()))("aria-valuenow", s.getAriaValue(t._internalSize()))("aria-valuetext", s.getAriaAreaSizeText(t)),
        l(2),
        b((o = s.customGutter()) != null && o.template ? 2 : 3)
    }
}
function Ar(i, r) {
    if (i & 1 && y(0, Dr, 4, 12, "div", 1),
    i & 2) {
        let o = r.$index
          , e = r.$count;
        b(o !== e - 1 ? 0 : -1)
    }
}
function Or(i, r) {
    i & 1 && x(0, "div", 0)
}
function st(i) {
    if ((o => window.TouchEvent && i instanceof TouchEvent)(i)) {
        if (i.changedTouches.length === 0)
            return;
        let {clientX: o, clientY: e} = i.changedTouches[0];
        return {
            x: o,
            y: e
        }
    }
    if (i instanceof KeyboardEvent) {
        let o = i.target;
        return {
            x: o.offsetLeft + o.offsetWidth / 2,
            y: o.offsetTop + o.offsetHeight / 2
        }
    }
    return {
        x: i.clientX,
        y: i.clientY
    }
}
function Xn(i, r, o, e) {
    if (!e.contains(i.target) || !e.contains(r.target))
        return !1;
    let t = st(i)
      , n = st(r);
    return Math.abs(n.x - t.x) <= o && Math.abs(n.y - t.y) <= o
}
function Qn(i) {
    return et(pe(i, "mousedown").pipe(oe(r => r.button === 0)), pe(i, "touchstart", {
        passive: !1
    }))
}
function pi(i) {
    return et(pe(i, "mousemove"), pe(i, "touchmove"))
}
function $t(i, r=!1) {
    let o = et(pe(i, "mouseup"), pe(i, "touchend"));
    return r ? et(o, pe(i, "touchcancel")) : o
}
function hi(i, r) {
    return i.reduce( (o, e) => o + r(e), 0)
}
function Mr(i, r) {
    return i.reduce( (o, e, t) => {
        let[n,s] = r(e, t);
        return o[n] = s,
        o
    }
    , {})
}
function er(i) {
    return Object.entries(i).filter( ([,r]) => r).map( ([r]) => r).join(" ")
}
function Nr(i) {
    let r = L( () => I(i()))
      , o = () => r()();
    return o.set = e => vt(r).set(e),
    o.reset = () => vt( () => r().set(i())),
    o
}
function Ci() {
    return i => new xi(r => D(ei).runOutsideAngular( () => i.subscribe(r)))
}
var Bt = i => r => rn(r, i)
  , Fr = ( () => {
    let r = class r {
        constructor() {
            this.elementRef = D(pt),
            this.document = D(oi),
            this.multiClickThreshold = A.required({
                alias: "asSplitCustomMultiClickThreshold"
            }),
            this.deltaInPx = A.required({
                alias: "asSplitCustomClickDeltaInPx"
            }),
            this.mouseDown = ie({
                alias: "asSplitCustomMouseDown"
            }),
            this.click = ie({
                alias: "asSplitCustomClick"
            }),
            this.dblClick = ie({
                alias: "asSplitCustomDblClick"
            }),
            this.keyDown = ie({
                alias: "asSplitCustomKeyDown"
            }),
            pe(this.elementRef.nativeElement, "keydown").pipe(Ci(), we()).subscribe(t => this.keyDown.emit(t));
            let e = Qn(this.elementRef.nativeElement).pipe(Y(t => pi(this.document).pipe(oe(n => !Xn(t, n, this.deltaInPx(), this.elementRef.nativeElement)), ct(1), W( () => !0), tt($t(this.document)))));
            Qn(this.elementRef.nativeElement).pipe(F(t => this.mouseDown.emit(t)), Xt(), Oi( (t, {interval: n}) => n >= this.multiClickThreshold() ? 1 : t + 1, 0), Y(t => $t(this.elementRef.nativeElement).pipe(Xt(), ct(1), t === 2 ? W( () => t) : Ii( ({interval: n}) => n >= this.multiClickThreshold() ? Xe(t) : Xe(t).pipe(Ti(this.multiClickThreshold() - n))))), tt(e), Ai(), Ci(), we()).subscribe(t => {
                t === 1 ? this.click.emit() : t === 2 && this.dblClick.emit()
            }
            )
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)
    }
    ,
    r.\u0275dir = Ct({
        type: r,
        selectors: [["", "asSplitCustomEventsBehavior", ""]],
        inputs: {
            multiClickThreshold: [1, "asSplitCustomMultiClickThreshold", "multiClickThreshold"],
            deltaInPx: [1, "asSplitCustomClickDeltaInPx", "deltaInPx"]
        },
        outputs: {
            mouseDown: "asSplitCustomMouseDown",
            click: "asSplitCustomClick",
            dblClick: "asSplitCustomDblClick",
            keyDown: "asSplitCustomKeyDown"
        }
    });
    let i = r;
    return i
}
)();
function Er(i, r) {
    if (i.length === 0)
        return !0;
    let o = i.filter(t => t._internalSize() === "*");
    if (o.length > 1)
        return Ce() && console.warn("as-split: Maximum one * area is allowed"),
        !1;
    if (r === "pixel")
        return o.length === 1 ? !0 : (Ce() && console.warn("as-split: Pixel mode must have exactly one * area"),
        !1);
    let e = hi(i, t => {
        let n = t._internalSize();
        return n === "*" ? 0 : n
    }
    );
    return o.length === 1 ? e <= 100.1 ? !0 : (Ce() && console.warn("as-split: Percent areas must total 100%"),
    !1) : e < 99.9 || e > 100.1 ? (Ce() && console.warn("as-split: Percent areas must total 100%"),
    !1) : !0
}
var qn = ( () => {
    let r = class r {
        constructor(e) {
            this.template = e,
            this.gutterToHandleElementMap = new Map,
            this.gutterToExcludeDragElementMap = new Map
        }
        canStartDragging(e, t) {
            return this.gutterToExcludeDragElementMap.has(t) && this.gutterToExcludeDragElementMap.get(t).some(s => s.nativeElement.contains(e)) ? !1 : this.gutterToHandleElementMap.has(t) ? this.gutterToHandleElementMap.get(t).some(n => n.nativeElement.contains(e)) : !0
        }
        addToMap(e, t, n) {
            e.has(t) ? e.get(t).push(n) : e.set(t, [n])
        }
        removedFromMap(e, t, n) {
            let s = e.get(t);
            s.splice(s.indexOf(n), 1),
            s.length === 0 && e.delete(t)
        }
        static ngTemplateContextGuard(e, t) {
            return !0
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(ti))
    }
    ,
    r.\u0275dir = Ct({
        type: r,
        selectors: [["", "asSplitGutter", ""]]
    });
    let i = r;
    return i
}
)()
  , Lr = new mt("Gutter num")
  , Vr = ( () => {
    let r = class r {
        set gutterNum(e) {
            this.vcr.clear();
            let t = Ei.create({
                providers: [{
                    provide: Lr,
                    useValue: e
                }],
                parent: this.vcr.injector
            });
            this.vcr.createEmbeddedView(this.templateRef, {
                $implicit: t
            })
        }
        constructor(e, t) {
            this.vcr = e,
            this.templateRef = t
        }
        static ngTemplateContextGuard(e, t) {
            return !0
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(Pi),C(ti))
    }
    ,
    r.\u0275dir = Ct({
        type: r,
        selectors: [["", "asSplitGutterDynamicInjector", ""]],
        inputs: {
            gutterNum: [0, "asSplitGutterDynamicInjector", "gutterNum"]
        }
    });
    let i = r;
    return i
}
)()
  , Pr = {
    dir: "ltr",
    direction: "horizontal",
    disabled: !1,
    gutterDblClickDuration: 0,
    gutterSize: 11,
    gutterStep: 1,
    gutterClickDeltaPx: 2,
    restrictMove: !1,
    unit: "percent",
    useTransition: !1
}
  , Rr = new mt("angular-split-global-config",{
    providedIn: "root",
    factory: () => Pr
});
var gi = new mt("Split Area Contract")
  , zr = ( () => {
    let r = class r {
        get hostClassesBinding() {
            return this.hostClasses()
        }
        get hostDirBinding() {
            return this.dir()
        }
        constructor() {
            this.document = D(oi),
            this.renderer = D(Vi),
            this.elementRef = D(pt),
            this.ngZone = D(ei),
            this.defaultOptions = D(Rr),
            this.gutterMouseDownSubject = new re,
            this.dragProgressSubject = new re,
            this._areas = zi(gi),
            this.customGutter = Ri(qn),
            this.gutterSize = A(this.defaultOptions.gutterSize, {
                transform: Bt(this.defaultOptions.gutterSize)
            }),
            this.gutterStep = A(this.defaultOptions.gutterStep, {
                transform: Bt(this.defaultOptions.gutterStep)
            }),
            this.disabled = A(this.defaultOptions.disabled, {
                transform: We
            }),
            this.gutterClickDeltaPx = A(this.defaultOptions.gutterClickDeltaPx, {
                transform: Bt(this.defaultOptions.gutterClickDeltaPx)
            }),
            this.direction = A(this.defaultOptions.direction),
            this.dir = A(this.defaultOptions.dir),
            this.unit = A(this.defaultOptions.unit),
            this.gutterAriaLabel = A(),
            this.restrictMove = A(this.defaultOptions.restrictMove, {
                transform: We
            }),
            this.useTransition = A(this.defaultOptions.useTransition, {
                transform: We
            }),
            this.gutterDblClickDuration = A(this.defaultOptions.gutterDblClickDuration, {
                transform: Bt(this.defaultOptions.gutterDblClickDuration)
            }),
            this.gutterClick = ie(),
            this.gutterDblClick = ie(),
            this.dragStart = ie(),
            this.dragEnd = ie(),
            this.transitionEnd = ie(),
            this.dragProgress$ = this.dragProgressSubject.asObservable(),
            this.visibleAreas = L( () => this._areas().filter(e => e.visible())),
            this.gridTemplateColumnsStyle = L( () => {
                let e = []
                  , t = hi(this.visibleAreas(), a => {
                    let p = a._internalSize();
                    return p === "*" ? 0 : p
                }
                )
                  , n = this.visibleAreas().length
                  , s = 0;
                return this._areas().forEach( (a, p, g) => {
                    let v = this.unit()
                      , O = a._internalSize();
                    if (!a.visible())
                        e.push(v === "percent" || O === "*" ? "0fr" : "0px");
                    else {
                        if (v === "pixel") {
                            let K = O === "*" ? "1fr" : `${O}px`;
                            e.push(K)
                        } else {
                            let $ = `${O === "*" ? 100 - t : O}fr`;
                            e.push($)
                        }
                        s++
                    }
                    if (p === g.length - 1)
                        return;
                    let R = n - s;
                    a.visible() && R > 0 ? e.push(`${this.gutterSize()}px`) : e.push("0px")
                }
                ),
                this.direction() === "horizontal" ? `1fr / ${e.join(" ")}` : `${e.join(" ")} / 1fr`
            }
            ),
            this.hostClasses = L( () => er({
                [`as-${this.direction()}`]: !0,
                [`as-${this.unit()}`]: !0,
                "as-disabled": this.disabled(),
                "as-dragging": this._isDragging(),
                "as-transition": this.useTransition() && !this._isDragging()
            })),
            this.draggedGutterIndex = I(void 0),
            this._isDragging = L( () => this.draggedGutterIndex() !== void 0),
            it( () => {
                let e = this.visibleAreas()
                  , t = this.unit()
                  , n = e.every(s => s.size() === "auto");
                vt( () => {
                    if (t === "percent" && e.length > 1 && n) {
                        e.forEach(a => a._internalSize.set(100 / e.length));
                        return
                    }
                    if (e.forEach(a => a._internalSize.reset()),
                    !Er(e, t)) {
                        if (t === "percent") {
                            let a = 100 / e.length;
                            e.forEach(p => p._internalSize.set(a))
                        } else if (t === "pixel") {
                            let a = e.filter(p => p._internalSize() === "*");
                            a.length === 0 ? e[0]._internalSize.set("*") : a.length > 1 && a.filter( (p, g) => g !== 0).forEach(p => p._internalSize.set(100))
                        }
                    }
                }
                )
            }
            , {
                allowSignalWrites: !0
            }),
            it( () => {
                let e = this.gridTemplateColumnsStyle();
                this.renderer.setStyle(this.elementRef.nativeElement, "grid-template", e)
            }
            ),
            this.gutterMouseDownSubject.pipe(oe(e => !this.customGutter() || this.customGutter().canStartDragging(e.mouseDownEvent.target, e.gutterIndex + 1)), Y(e => pi(this.document).pipe(Mi(e.mouseDownEvent), Di(), ut( ([,t]) => Xn(e.mouseDownEvent, t, this.gutterClickDeltaPx(), e.gutterElement)), ct(1), tt($t(this.document, !0)), F( () => {
                this.ngZone.run( () => {
                    this.dragStart.emit(this.createDragInteractionEvent(e.gutterIndex)),
                    this.draggedGutterIndex.set(e.gutterIndex)
                }
                )
            }
            ), W( ([t]) => this.createDragStartContext(t, e.areaBeforeGutterIndex, e.areaAfterGutterIndex)), Y(t => pi(this.document).pipe(F(n => this.mouseDragMove(n, t)), tt($t(this.document, !0)), F({
                complete: () => this.ngZone.run( () => {
                    this.dragEnd.emit(this.createDragInteractionEvent(this.draggedGutterIndex())),
                    this.draggedGutterIndex.set(void 0)
                }
                )
            }))))), we()).subscribe(),
            pe(this.elementRef.nativeElement, "transitionend").pipe(oe(e => e.propertyName.startsWith("grid-template")), Ci(), we()).subscribe( () => this.ngZone.run( () => this.transitionEnd.emit(this.createAreaSizes())))
        }
        gutterClicked(e) {
            this.ngZone.run( () => this.gutterClick.emit(this.createDragInteractionEvent(e)))
        }
        gutterDoubleClicked(e) {
            this.ngZone.run( () => this.gutterDblClick.emit(this.createDragInteractionEvent(e)))
        }
        gutterMouseDown(e, t, n, s, a) {
            this.disabled() || (e.preventDefault(),
            e.stopPropagation(),
            this.gutterMouseDownSubject.next({
                mouseDownEvent: e,
                gutterElement: t,
                gutterIndex: n,
                areaBeforeGutterIndex: s,
                areaAfterGutterIndex: a
            }))
        }
        gutterKeyDown(e, t, n, s) {
            if (this.disabled())
                return;
            let a = 50
              , p = 10
              , g = 0
              , v = 0;
            if (this.direction() === "horizontal")
                switch (e.key) {
                case "ArrowLeft":
                    g -= a;
                    break;
                case "ArrowRight":
                    g += a;
                    break;
                case "PageUp":
                    this.dir() === "rtl" ? g -= a * p : g += a * p;
                    break;
                case "PageDown":
                    this.dir() === "rtl" ? g += a * p : g -= a * p;
                    break;
                default:
                    return
                }
            else
                switch (e.key) {
                case "ArrowUp":
                    v -= a;
                    break;
                case "ArrowDown":
                    v += a;
                    break;
                case "PageUp":
                    v -= a * p;
                    break;
                case "PageDown":
                    v += a * p;
                    break;
                default:
                    return
                }
            e.preventDefault(),
            e.stopPropagation();
            let O = st(e)
              , k = this.createDragStartContext(e, n, s);
            this.ngZone.run( () => {
                this.dragStart.emit(this.createDragInteractionEvent(t)),
                this.draggedGutterIndex.set(t)
            }
            ),
            this.dragMoveToPoint({
                x: O.x + g,
                y: O.y + v
            }, k),
            this.ngZone.run( () => {
                this.dragEnd.emit(this.createDragInteractionEvent(t)),
                this.draggedGutterIndex.set(void 0)
            }
            )
        }
        getGutterGridStyle(e) {
            let t = e * 2
              , n = `${t} / ${t}`;
            return {
                "grid-column": this.direction() === "horizontal" ? n : "1",
                "grid-row": this.direction() === "vertical" ? n : "1"
            }
        }
        getAriaAreaSizeText(e) {
            let t = e._internalSize();
            if (t !== "*")
                return `${t.toFixed(0)} ${this.unit()}`
        }
        getAriaValue(e) {
            return e === "*" ? void 0 : e
        }
        createDragInteractionEvent(e) {
            return {
                gutterNum: e + 1,
                sizes: this.createAreaSizes()
            }
        }
        createAreaSizes() {
            return this.visibleAreas().map(e => e._internalSize())
        }
        createDragStartContext(e, t, n) {
            let s = this.elementRef.nativeElement.getBoundingClientRect()
              , p = (this.direction() === "horizontal" ? s.width : s.height) - (this.visibleAreas().length - 1) * this.gutterSize()
              , g = this._areas().map(k => {
                if (this.unit() === "pixel")
                    return k._internalSize();
                {
                    let R = k._internalSize();
                    return R === "*" ? R : R / 100 * p
                }
            }
            )
              , v = Math.max(0, p - hi(g, k => k === "*" ? 0 : k))
              , O = g.map(k => k === "*" ? v : k);
            return {
                startEvent: e,
                areaBeforeGutterIndex: t,
                areaAfterGutterIndex: n,
                areasPixelSizes: O,
                totalAreasPixelSize: p,
                areaIndexToBoundaries: Mr(this._areas(), (k, R) => {
                    let K = T => T / 100 * p
                      , $ = this.unit() === "pixel" ? {
                        min: k._normalizedMinSize(),
                        max: k._normalizedMaxSize()
                    } : {
                        min: K(k._normalizedMinSize()),
                        max: K(k._normalizedMaxSize())
                    };
                    return [R.toString(), $]
                }
                )
            }
        }
        mouseDragMove(e, t) {
            e.preventDefault(),
            e.stopPropagation();
            let n = st(e);
            this.dragMoveToPoint(n, t)
        }
        dragMoveToPoint(e, t) {
            let n = st(t.startEvent)
              , s = this.direction() === "horizontal" ? e.x - n.x : e.y - n.y
              , a = this.direction() === "horizontal" && this.dir() === "rtl" ? -s : s
              , p = a > 0
              , g = Math.abs(Math.round(a / this.gutterStep()) * this.gutterStep())
              , v = [...t.areasPixelSizes]
              , O = v.map( (H, G) => G)
              , k = this.restrictMove() ? [t.areaBeforeGutterIndex] : O.slice(0, t.areaBeforeGutterIndex + 1).filter(H => this._areas()[H].visible()).reverse()
              , R = this.restrictMove() ? [t.areaAfterGutterIndex] : O.slice(t.areaAfterGutterIndex).filter(H => this._areas()[H].visible())
              , K = p ? R : k
              , $ = p ? k : R
              , T = g
              , Z = 0
              , E = 0;
            for (; T !== 0 && Z < K.length && E < $.length; ) {
                let H = K[Z]
                  , G = $[E]
                  , be = v[H]
                  , Oe = v[G]
                  , Me = t.areaIndexToBoundaries[H].min
                  , Ne = t.areaIndexToBoundaries[G].max
                  , at = be - Me
                  , lt = Ne - Oe
                  , Jt = Math.min(at, lt, T);
                v[H] -= Jt,
                v[G] += Jt,
                T -= Jt,
                v[H] === Me && Z++,
                v[G] === Ne && E++
            }
            this._areas().forEach( (H, G) => {
                if (H._internalSize() !== "*")
                    if (this.unit() === "pixel")
                        H._internalSize.set(v[G]);
                    else {
                        let be = v[G] / t.totalAreasPixelSize * 100;
                        H._internalSize.set(parseFloat(be.toFixed(10)))
                    }
            }
            ),
            this.dragProgressSubject.next(this.createDragInteractionEvent(this.draggedGutterIndex()))
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["as-split"]],
        contentQueries: function(t, n, s) {
            t & 1 && (ri(s, n._areas, gi, 4),
            ri(s, n.customGutter, qn, 5)),
            t & 2 && $e(2)
        },
        hostVars: 3,
        hostBindings: function(t, n) {
            t & 2 && (Ui("dir", n.hostDirBinding),
            Ee(n.hostClassesBinding))
        },
        inputs: {
            gutterSize: [1, "gutterSize"],
            gutterStep: [1, "gutterStep"],
            disabled: [1, "disabled"],
            gutterClickDeltaPx: [1, "gutterClickDeltaPx"],
            direction: [1, "direction"],
            dir: [1, "dir"],
            unit: [1, "unit"],
            gutterAriaLabel: [1, "gutterAriaLabel"],
            restrictMove: [1, "restrictMove"],
            useTransition: [1, "useTransition"],
            gutterDblClickDuration: [1, "gutterDblClickDuration"]
        },
        outputs: {
            gutterClick: "gutterClick",
            gutterDblClick: "gutterDblClick",
            dragStart: "dragStart",
            dragEnd: "dragEnd",
            transitionEnd: "transitionEnd"
        },
        exportAs: ["asSplit"],
        ngContentSelectors: Jn,
        decls: 3,
        vars: 0,
        consts: [["gutter", ""], ["role", "separator", "tabindex", "0", "asSplitCustomEventsBehavior", "", 1, "as-split-gutter", 3, "ngStyle", "as-dragged", "asSplitCustomMultiClickThreshold", "asSplitCustomClickDeltaInPx"], ["role", "separator", "tabindex", "0", "asSplitCustomEventsBehavior", "", 1, "as-split-gutter", 3, "asSplitCustomClick", "asSplitCustomDblClick", "asSplitCustomMouseDown", "asSplitCustomKeyDown", "ngStyle", "asSplitCustomMultiClickThreshold", "asSplitCustomClickDeltaInPx"], [1, "as-split-gutter-icon"], [4, "asSplitGutterDynamicInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext", "ngTemplateOutletInjector"]],
        template: function(t, n) {
            t & 1 && (ii(),
            ni(0),
            Le(1, Ar, 1, 1, null, null, $i)),
            t & 2 && (l(),
            Ve(n._areas()))
        },
        dependencies: [sn, Fr, Vr, an],
        styles: ['@property --as-gutter-background-color{syntax: "<color>"; inherits: true; initial-value: #eeeeee;}@property --as-gutter-icon-horizontal{syntax: "<url>"; inherits: true; initial-value: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==);}@property --as-gutter-icon-vertical{syntax: "<url>"; inherits: true; initial-value: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC);}@property --as-gutter-icon-disabled{syntax: "<url>"; inherits: true; initial-value: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==);}@property --as-transition-duration{syntax: "<time>"; inherits: true; initial-value: .3s;}@property --as-gutter-disabled-cursor{syntax: "*"; inherits: true; initial-value: default;}[_nghost-%COMP%]{--_as-gutter-background-color: var(--as-gutter-background-color, #eeeeee);--_as-gutter-icon-horizontal: var( --as-gutter-icon-horizontal, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==) );--_as-gutter-icon-vertical: var( --as-gutter-icon-vertical, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC) );--_as-gutter-icon-disabled: var( --as-gutter-icon-disabled, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==) );--_as-transition-duration: var(--as-transition-duration, .3s);--_as-gutter-disabled-cursor: var(--as-gutter-disabled-cursor, default)}[_nghost-%COMP%]{display:grid;overflow:hidden;height:100%;width:100%}.as-transition[_nghost-%COMP%]{transition:grid-template var(--_as-transition-duration)}.as-split-gutter[_ngcontent-%COMP%]{background-color:var(--_as-gutter-background-color);display:flex;align-items:center;justify-content:center;touch-action:none}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:col-resize;height:100%}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:row-resize;width:100%}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:var(--_as-gutter-disabled-cursor)}.as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:var(--_as-gutter-icon-horizontal)}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:var(--_as-gutter-icon-vertical)}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:var(--_as-gutter-icon-disabled)}'],
        changeDetection: 0
    });
    let i = r;
    return i
}
)()
  , tr = i => i == null || i === "*" ? "*" : +i
  , Hr = i => tr(i)
  , Yn = i => tr(i)
  , zs = ( () => {
    let r = class r {
        constructor() {
            this.split = D(zr),
            this.size = A("auto", {
                transform: Hr
            }),
            this.minSize = A("*", {
                transform: Yn
            }),
            this.maxSize = A("*", {
                transform: Yn
            }),
            this.lockSize = A(!1, {
                transform: We
            }),
            this.visible = A(!0, {
                transform: We
            }),
            this._internalSize = Nr(L( () => {
                if (!this.visible())
                    return 0;
                let e = this.size();
                return e === "auto" ? "*" : e
            }
            )),
            this._normalizedMinSize = L( () => this.normalizeMinSize()),
            this._normalizedMaxSize = L( () => this.normalizeMaxSize()),
            this.index = L( () => this.split._areas().findIndex(e => e === this)),
            this.gridAreaNum = L( () => this.index() * 2 + 1),
            this.hostClasses = L( () => er({
                "as-split-area": !0,
                "as-min": this.visible() && this._internalSize() === this._normalizedMinSize(),
                "as-max": this.visible() && this._internalSize() === this._normalizedMaxSize(),
                "as-hidden": !this.visible()
            }))
        }
        get hostClassesBinding() {
            return this.hostClasses()
        }
        get hostGridColumnStyleBinding() {
            return this.split.direction() === "horizontal" ? `${this.gridAreaNum()} / ${this.gridAreaNum()}` : void 0
        }
        get hostGridRowStyleBinding() {
            return this.split.direction() === "vertical" ? `${this.gridAreaNum()} / ${this.gridAreaNum()}` : void 0
        }
        get hostPositionStyleBinding() {
            return this.split._isDragging() ? "relative" : void 0
        }
        normalizeMinSize() {
            if (!this.visible())
                return 0;
            let t = this.normalizeSizeBoundary(this.minSize, 0)
              , n = this.size();
            return n !== "*" && n !== "auto" && n < t ? (Ce() && console.warn("as-split: size cannot be smaller than minSize"),
            0) : t
        }
        normalizeMaxSize() {
            if (!this.visible())
                return 1 / 0;
            let t = this.normalizeSizeBoundary(this.maxSize, 1 / 0)
              , n = this.size();
            return n !== "*" && n !== "auto" && n > t ? (Ce() && console.warn("as-split: size cannot be larger than maxSize"),
            1 / 0) : t
        }
        normalizeSizeBoundary(e, t) {
            let n = this.size()
              , s = this.lockSize()
              , a = e();
            return s ? (Ce() && a !== "*" && console.warn("as-split: lockSize overwrites maxSize/minSize"),
            n === "*" || n === "auto" ? (Ce() && console.warn("as-split: lockSize isn't supported on area with * size or without size"),
            t) : n) : a === "*" ? t : n === "*" || n === "auto" ? (Ce() && console.warn("as-split: maxSize/minSize not allowed on * or without size"),
            t) : a
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["as-split-area"]],
        hostVars: 8,
        hostBindings: function(t, n) {
            t & 2 && (Ee(n.hostClassesBinding),
            ji("grid-column", n.hostGridColumnStyleBinding)("grid-row", n.hostGridRowStyleBinding)("position", n.hostPositionStyleBinding))
        },
        inputs: {
            size: [1, "size"],
            minSize: [1, "minSize"],
            maxSize: [1, "maxSize"],
            lockSize: [1, "lockSize"],
            visible: [1, "visible"]
        },
        exportAs: ["asSplitArea"],
        features: [Ji([{
            provide: gi,
            useExisting: r
        }])],
        ngContentSelectors: Jn,
        decls: 2,
        vars: 1,
        consts: [[1, "as-iframe-fix"]],
        template: function(t, n) {
            t & 1 && (ii(),
            ni(0),
            y(1, Or, 1, 0, "div", 0)),
            t & 2 && (l(),
            b(n.split._isDragging() ? 1 : -1))
        },
        styles: ["[_nghost-%COMP%]{overflow-x:hidden;overflow-y:auto}.as-horizontal > [_nghost-%COMP%]{height:100%}.as-vertical > [_nghost-%COMP%]{width:100%}.as-iframe-fix[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}"],
        changeDetection: 0
    });
    let i = r;
    return i
}
)();
var Hs = ( () => {
    let r = class r {
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)
    }
    ,
    r.\u0275mod = Hi({
        type: r
    }),
    r.\u0275inj = Fi({});
    let i = r;
    return i
}
)();
function Gr(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 1),
        h("click", function(t) {
            return f(o),
            d().checkboxClicked(),
            S(t.stopPropagation())
        }),
        x(1, "input", 2)(2, "label", 3),
        u()
    }
    if (i & 2) {
        let o = d();
        l(),
        ye("id", o.order().id),
        m("checked", o.componentParent.isOrderSelected(o.order().id) ? "false" : ""),
        l(),
        ye("for", o.order().id)
    }
}
var ir = ( () => {
    let r = class r {
        constructor() {
            this.order = I(null)
        }
        agInit(e) {
            this.componentParent = e.context.componentParent,
            this.order.set(mi(e.value))
        }
        refresh(e) {
            return this.componentParent = e.context.componentParent,
            this.order.set(mi(e.value)),
            !0
        }
        checkboxClicked() {
            this.componentParent.checkboxChanged(this.order().id)
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["app-ag-order-checkbox-renderer"]],
        decls: 1,
        vars: 1,
        consts: [[1, "form-check", "form-check-reverse", 2, "line-height", "1.5"], [1, "form-check", "form-check-reverse", 2, "line-height", "1.5", 3, "click"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "id"], [1, "form-check-label", "pe-none", 3, "for"]],
        template: function(t, n) {
            if (t & 1 && y(0, Gr, 3, 3, "div", 0),
            t & 2) {
                let s;
                b((s = n.order()) != null && s.IsSelectable ? 0 : -1)
            }
        },
        dependencies: [ae],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = r;
    return i
}
)();
var jr = i => [i, "me-1"];
function Br(i, r) {
    if (i & 1 && x(0, "svg-icon", 3),
    i & 2) {
        let o, e, t, n = d();
        Ee(U(4, jr, (o = n.order()) == null ? null : o.StateNotificationColorClass)),
        m("iconName", (e = n.order()) == null ? null : e.StateNotificationIconClass),
        Q("data-cy", "grid-row-state-" + ((t = n.order()) == null ? null : t.id) + "-" + ((t = n.order()) == null ? null : t.StateNotificationIconClass))
    }
}
var Wt = ( () => {
    let r = class r {
        constructor() {
            this.order = I(null)
        }
        agInit(e) {
            this.order.set(e.value.order)
        }
        refresh(e) {
            return this.order.set(e.value.order),
            !0
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["app-ag-order-state"]],
        decls: 4,
        vars: 5,
        consts: [["width", "20", "height", "20", 3, "class", "iconName"], [3, "ngbTooltip"], [3, "ngClass"], ["width", "20", "height", "20", 3, "iconName"]],
        template: function(t, n) {
            if (t & 1 && (y(0, Br, 1, 6, "svg-icon", 0),
            c(1, "span", 1)(2, "span", 2),
            _(3),
            u()()),
            t & 2) {
                let s, a, p, g, v;
                b((s = n.order()) != null && s.StateNotificationIconClass ? 0 : -1),
                l(),
                m("ngbTooltip", (a = n.order()) == null ? null : a.StateNotificationText),
                l(),
                m("ngClass", (p = n.order()) == null ? null : p.StateNotificationColorClass),
                Q("data-cy", "grid-row-state-" + ((g = n.order()) == null ? null : g.id)),
                l(),
                xe((v = n.order()) == null ? null : v.StateNotificationText)
            }
        },
        dependencies: [ae, q, z, xn],
        styles: [`.tip{background-color:#fff!important;border-radius:10px}
/*# sourceMappingURL=ag-order-state-renderer.component-S7TT73BI.css.map */
`],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = r;
    return i
}
)();
var nr = "orders_grid_colState";
var Si = "-1"
  , _i = "12"
  , Ut = [{
    colId: Si,
    headerName: "",
    hide: !0,
    minWidth: 30,
    maxWidth: 30,
    sortable: !1,
    resizable: !1,
    pinned: "right",
    lockPosition: !0,
    cellRenderer: "AgOrderCheckboxRendererComponent",
    valueGetter: function(r) {
        return r.data
    }
}, {
    headerName: "",
    field: "details",
    cellClass: "cup",
    cellRenderer: "agGroupCellRenderer",
    hide: !1,
    minWidth: 25,
    maxWidth: 25,
    lockPosition: !0,
    pinned: "right",
    valueGetter: () => ""
}, {
    colId: "0",
    headerName: "id",
    field: "id",
    hide: !0,
    minWidth: 300,
    maxWidth: 430,
    sortable: !0,
    resizable: !0,
    pinned: "right",
    lockPosition: !0
}, {
    colId: "1",
    headerName: "\u0646\u0645\u0627\u062F",
    hide: !1,
    minWidth: 100,
    maxWidth: 130,
    sortable: !0,
    resizable: !0,
    pinned: "right",
    lockPosition: !0,
    headerComponent: "AgSymbolHeaderComponent",
    cellRenderer: "AgOrderSymbolRendererComponent",
    valueGetter: function(r) {
        return r.data
    },
    valueFormatter: i => i.data.symbolName,
    comparator: (i, r) => Dt(i.symbolName, r.symbolName)
}, {
    colId: "2",
    headerName: "\u0633\u0645\u062A",
    hide: !1,
    minWidth: 55,
    maxWidth: 80,
    sortable: !0,
    resizable: !0,
    pinned: "right",
    lockPosition: !0,
    cellRenderer: Hn,
    valueGetter: i => ({
        id: i?.data?.id,
        side: i?.data.side,
        isAlgo: i?.data?.referenceId
    }),
    comparator: (i, r) => i?.side - r?.side
}, {
    colId: "3",
    headerName: "\u0648\u0636\u0639\u06CC\u062A \u0633\u0641\u0627\u0631\u0634",
    hide: !1,
    minWidth: 180,
    enableCellChangeFlash: !0,
    sortable: !0,
    resizable: !0,
    cellRenderer: "AgOrderStateRendererComponent",
    valueGetter: function(r) {
        return {
            order: r.data,
            StateNotificationText: r.data.StateNotificationText
        }
    },
    comparator: (i, r) => Dt(i.StateNotificationText, r.StateNotificationText)
}, {
    colId: "4",
    headerName: "\u062A\u0639\u062F\u0627\u062F",
    field: "quantity",
    hide: !1,
    minWidth: 110,
    maxWidth: 110,
    sortable: !0,
    resizable: !0,
    valueFormatter: i => {
        let {orderModelType: r, quantity: o} = i.data;
        return r === P.offline && !o ? "\u0633\u0642\u0641 \u062A\u0639\u062F\u0627\u062F" : ee(o)
    }
    ,
    comparator: (i, r) => +i - +r
}, {
    colId: "5",
    headerName: "\u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647",
    hide: !1,
    minWidth: 110,
    maxWidth: 110,
    enableCellChangeFlash: !0,
    sortable: !0,
    resizable: !0,
    valueGetter: i => {
        let r = i.data?.orderModelType === P.algorithm ? i.data?.executedQuantity : i.data.ExecutedQuantity;
        return r >= 0 ? ee(r) : ""
    }
    ,
    comparator: (i, r) => +B(i) - +B(r)
}, {
    colId: "6",
    headerName: "\u0628\u0627\u0642\u06CC \u0645\u0627\u0646\u062F\u0647",
    hide: !1,
    minWidth: 110,
    maxWidth: 110,
    enableCellChangeFlash: !0,
    sortable: !0,
    resizable: !0,
    valueGetter: i => {
        let r = i.data?.orderModelType === P.algorithm ? i.data?.remainedQuantity : i.data.RemainingQuantity;
        return r >= 0 ? ee(r) : ""
    }
    ,
    comparator: (i, r) => +B(i) - +B(r)
}, {
    colId: "7",
    headerName: "\u0642\u06CC\u0645\u062A",
    field: "price",
    hide: !1,
    minWidth: 90,
    sortable: !0,
    resizable: !0,
    valueGetter: i => {
        let {isOffline: r, price: o} = i.data;
        return r && !o ? "\u0633\u0642\u0641 \u0642\u06CC\u0645\u062A" : ee(o)
    }
    ,
    comparator: (i, r) => +B(i) - +B(r)
}, {
    colId: "8",
    headerName: "\u062A\u0627\u0631\u06CC\u062E \u062B\u0628\u062A",
    hide: !1,
    minWidth: 150,
    sortable: !0,
    resizable: !0,
    valueGetter: i => {
        let r = i.data.createDateTime;
        return r ? {
            orderDate: r
        } : null
    }
    ,
    valueFormatter: i => {
        let r = new Ze
          , o = i.data.createDateTime;
        return o ? r.transform(o, "time") : null
    }
    ,
    comparator: (i, r) => {
        let o = i ? new Date(i.orderDate).getTime() : null
          , e = r ? new Date(r.orderDate).getTime() : null;
        return o && e ? o - e : o ? 1 : e ? -1 : 0
    }
}, {
    colId: "9",
    headerName: "\u062C\u0627\u06CC\u06AF\u0627\u0647 \u0644\u062D\u0638\u0647\u200C\u0627\u06CC",
    field: "orderPlace",
    hide: !1,
    minWidth: 110,
    sortable: !0,
    resizable: !0,
    valueGetter: i => i.data?.isOpenOrder ? ee(i.data.orderPlace) : "",
    comparator: (i, r) => +B(i) - +B(r)
}, {
    colId: "10",
    headerName: "\u062D\u062C\u0645 \u067E\u06CC\u0634 \u0631\u0648",
    field: "volumeAhead",
    hide: !1,
    minWidth: 110,
    sortable: !0,
    resizable: !0,
    valueGetter: i => i.data?.isOpenOrder ? ee(i.data.volumeAhead) : "",
    comparator: (i, r) => +B(i) - +B(r)
}, {
    colId: "11",
    headerName: "\u0627\u0639\u062A\u0628\u0627\u0631",
    hide: !1,
    minWidth: 120,
    resizable: !1,
    cellClass: "d-block text-center",
    valueGetter: i => i.data?.ValidityDateTitle
}, {
    colId: _i,
    headerName: "\u0639\u0645\u0644\u06CC\u0627\u062A",
    hide: !1,
    minWidth: 130,
    maxWidth: 130,
    resizable: !1,
    pinned: "left",
    lockPosition: !0,
    cellRenderer: "AgOrderOperationsRendererComponent",
    valueGetter: function(r) {
        return r.data
    }
}]
  , rr = [{
    colId: "8",
    headerName: "\u062A\u0627\u0631\u06CC\u062E \u062B\u0628\u062A",
    hide: !1,
    minWidth: 150,
    sortable: !0,
    resizable: !0,
    valueGetter: i => {
        let r = i.data.createDateTime;
        return r ? {
            orderDate: r
        } : null
    }
    ,
    valueFormatter: i => {
        let r = new Ze
          , o = i.data.createDateTime;
        return o ? r.transform(o, "time") : null
    }
    ,
    comparator: (i, r) => {
        let o = i ? new Date(i.orderDate).getTime() : null
          , e = r ? new Date(r.orderDate).getTime() : null;
        return o && e ? o - e : o ? 1 : e ? -1 : 0
    }
}, {
    colId: "0",
    headerName: "id",
    field: "id",
    hide: !0,
    minWidth: 300,
    maxWidth: 430,
    sortable: !0,
    resizable: !0,
    pinned: "right",
    lockPosition: !0
}, {
    colId: "3",
    headerName: "\u0648\u0636\u0639\u06CC\u062A \u0633\u0641\u0627\u0631\u0634",
    hide: !1,
    minWidth: 180,
    enableCellChangeFlash: !0,
    sortable: !0,
    resizable: !0,
    cellRenderer: Wt,
    valueGetter: function(r) {
        return {
            order: r.data,
            StateNotificationText: r.data.StateNotificationText
        }
    },
    comparator: (i, r) => Dt(i.StateNotificationText, r.StateNotificationText)
}, {
    colId: "4",
    headerName: "\u062A\u0639\u062F\u0627\u062F",
    field: "quantity",
    hide: !1,
    minWidth: 110,
    maxWidth: 110,
    sortable: !0,
    resizable: !0,
    valueFormatter: i => {
        let {orderModelType: r, quantity: o} = i.data;
        return r === P.offline && !o ? "\u0633\u0642\u0641 \u062A\u0639\u062F\u0627\u062F" : ee(o)
    }
    ,
    comparator: (i, r) => +i - +r
}, {
    colId: "5",
    headerName: "\u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647",
    hide: !1,
    minWidth: 110,
    maxWidth: 110,
    enableCellChangeFlash: !0,
    sortable: !0,
    resizable: !0,
    valueGetter: i => {
        let r = i.data?.orderModelType === P.algorithm ? i.data?.executedQuantity : i.data.ExecutedQuantity;
        return r >= 0 ? ee(r) : ""
    }
    ,
    comparator: (i, r) => +B(i) - +B(r)
}, {
    colId: "6",
    headerName: "\u0628\u0627\u0642\u06CC \u0645\u0627\u0646\u062F\u0647",
    hide: !1,
    minWidth: 110,
    maxWidth: 110,
    enableCellChangeFlash: !0,
    sortable: !0,
    resizable: !0,
    valueGetter: i => {
        let r = i.data?.orderModelType === P.algorithm ? i.data?.remainedQuantity : i.data.RemainingQuantity;
        return r >= 0 ? ee(r) : ""
    }
    ,
    comparator: (i, r) => +B(i) - +B(r)
}, {
    colId: "7",
    headerName: "\u0642\u06CC\u0645\u062A",
    field: "price",
    hide: !1,
    minWidth: 90,
    sortable: !0,
    resizable: !0,
    valueGetter: i => {
        let {isOffline: r, price: o} = i.data;
        return r && !o ? "\u0633\u0642\u0641 \u0642\u06CC\u0645\u062A" : ee(o)
    }
    ,
    comparator: (i, r) => +B(i) - +B(r)
}, {
    colId: "9",
    headerName: "\u062C\u0627\u06CC\u06AF\u0627\u0647 \u0644\u062D\u0638\u0647\u200C\u0627\u06CC",
    field: "orderPlace",
    hide: !1,
    minWidth: 110,
    sortable: !0,
    resizable: !0,
    valueGetter: i => i.data?.isOpenOrder ? ee(i.data.orderPlace) : "",
    comparator: (i, r) => +B(i) - +B(r)
}, {
    colId: "10",
    headerName: "\u062D\u062C\u0645 \u067E\u06CC\u0634 \u0631\u0648",
    field: "volumeAhead",
    hide: !1,
    minWidth: 110,
    sortable: !0,
    resizable: !0,
    valueGetter: i => i.data?.isOpenOrder ? ee(i.data.volumeAhead) : "",
    comparator: (i, r) => +B(i) - +B(r)
}]
  , Zt = [{
    colId: "1",
    headerName: "\u062A\u0627\u0631\u06CC\u062E \u062B\u0628\u062A",
    hide: !1,
    minWidth: 150,
    headerClass: "my-header-class",
    lockPosition: !0,
    sortable: !0,
    resizable: !0,
    valueFormatter: i => {
        let r = new Ze
          , o = i.data.dateTime;
        return o ? r.transform(o, "time") : null
    }
    ,
    comparator: (i, r) => {
        let o = i ? new Date(i.dateTime).getTime() : null
          , e = r ? new Date(r.dateTime).getTime() : null;
        return o && e ? o - e : o ? 1 : e ? -1 : 0
    }
}, {
    colId: "2",
    headerName: "\u062A\u0639\u062F\u0627\u062F",
    field: "quantity",
    hide: !1,
    sortable: !0,
    resizable: !0,
    valueFormatter: i => ee(i.data.quantity),
    comparator: (i, r) => +i - +r
}, {
    colId: "3",
    headerName: "\u0642\u06CC\u0645\u062A",
    field: "price",
    hide: !1,
    sortable: !0,
    resizable: !0,
    valueGetter: i => ee(i.data.price),
    comparator: (i, r) => +B(i) - +B(r)
}, {
    colId: "4",
    headerName: "\u062F\u0631\u0635\u062F",
    field: "percent",
    cellStyle: {
        direction: "ltr"
    },
    hide: !1,
    sortable: !0,
    resizable: !0,
    valueFormatter: i => ee(i.data.percent) + "%",
    comparator: (i, r) => +i - +r
}];
function Ur(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 4),
        h("click", function(t) {
            return f(o),
            d(2).sendDraft(),
            S(t.stopPropagation())
        }),
        u()
    }
    if (i & 2) {
        let o = d(2);
        m("iconName", o.icons.Check)
    }
}
function Zr(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 5),
        h("click", function(t) {
            return f(o),
            d(2).deleteOrder(),
            S(t.stopPropagation())
        }),
        u()
    }
    if (i & 2) {
        let o = d(2);
        m("iconName", o.icons.Check)
    }
}
function Kr(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "span"),
        y(1, Ur, 1, 1, "svg-icon", 1)(2, Zr, 1, 1, "svg-icon", 2),
        c(3, "svg-icon", 3),
        h("click", function(t) {
            return f(o),
            d().enableConfirmation(!1),
            S(t.stopPropagation())
        }),
        u()()
    }
    if (i & 2) {
        let o = d();
        l(),
        b(o.actionType() === o.ConfirmableActionType.SEND ? 1 : -1),
        l(),
        b(o.actionType() === o.ConfirmableActionType.DELETE ? 2 : -1),
        l(),
        m("iconName", o.icons.Close)
    }
}
function Qr(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 9),
        h("click", function(t) {
            return f(o),
            d(3).onAlgoEditBtnClicked(),
            S(t.stopPropagation())
        }),
        u()
    }
    if (i & 2) {
        let o = d(3);
        m("iconName", o.icons.Edit)
    }
}
function qr(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 10),
        h("click", function(t) {
            return f(o),
            d(3).onStopClick(),
            S(t.stopPropagation())
        }),
        u()
    }
    if (i & 2) {
        let o = d(3);
        m("iconName", o.icons.StopBox)
    }
}
function Yr(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 6),
        h("click", function(t) {
            return f(o),
            d(2).onOrderClick(),
            S(t.stopPropagation())
        }),
        u(),
        y(1, Qr, 1, 1, "svg-icon", 7)(2, qr, 1, 1, "svg-icon", 8)
    }
    if (i & 2) {
        let o, e, t = d(2);
        m("iconName", t.icons.ExternalLink),
        l(),
        b((o = t.order()) != null && o.IsEditValid ? 1 : -1),
        l(),
        b((e = t.order()) != null && e.IsDeleteValid ? 2 : -1)
    }
}
function Jr(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 14),
        h("click", function(t) {
            return f(o),
            d(3).onSendDraftBtnClicked(),
            S(t.stopPropagation())
        }),
        u()
    }
    if (i & 2) {
        let o = d(3);
        m("iconName", o.icons.Send)
    }
}
function Xr(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 15),
        h("click", function(t) {
            return f(o),
            d(3).cloneOrder(),
            S(t.stopPropagation())
        }),
        u()
    }
    if (i & 2) {
        let o = d(3);
        m("iconName", o.icons.Copy)
    }
}
function eo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 9),
        h("click", function(t) {
            return f(o),
            d(3).onEditBtnClicked(),
            S(t.stopPropagation())
        }),
        u()
    }
    if (i & 2) {
        let o = d(3);
        m("iconName", o.icons.Edit)
    }
}
function to(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 16),
        h("click", function(t) {
            return f(o),
            d(3).onDeleteBtnClicked(),
            S(t.stopPropagation())
        }),
        u()
    }
    if (i & 2) {
        let o = d(3);
        m("iconName", o.icons.Delete)
    }
}
function io(i, r) {
    if (i & 1 && y(0, Jr, 1, 1, "svg-icon", 11)(1, Xr, 1, 1, "svg-icon", 12)(2, eo, 1, 1, "svg-icon", 7)(3, to, 1, 1, "svg-icon", 13),
    i & 2) {
        let o, e, t, n = d(2);
        b(n.isSendAndCopyValid() ? 0 : -1),
        l(),
        b(((o = n.order()) == null ? null : o.orderModelType) !== n.OrderModelType.offline ? 1 : -1),
        l(),
        b((e = n.order()) != null && e.IsEditValid ? 2 : -1),
        l(),
        b((t = n.order()) != null && t.IsDeleteValid ? 3 : -1)
    }
}
function no(i, r) {
    if (i & 1 && (c(0, "div"),
    y(1, Yr, 3, 3)(2, io, 4, 4),
    u()),
    i & 2) {
        let o = d();
        l(),
        b(o.order().orderModelType === o.OrderModelType.algorithm ? 1 : 2)
    }
}
var sr = ( () => {
    let r = class r {
        constructor(e, t, n, s, a, p, g, v, O) {
            this.orderService = e,
            this.orderStore = t,
            this.draftFacade = n,
            this.omsFacade = s,
            this.popupOrderService = a,
            this.settingFacadeService = p,
            this.ipoFacade = g,
            this.modalService = v,
            this.offlineFacade = O,
            this.icons = j,
            this.router = D(le),
            this.algoFacade = D(Dn),
            this.order = I(null),
            this.showConfirmation = I(!1),
            this.actionToConfirm = I(""),
            this.actionType = I(null),
            this.ConfirmableActionType = Pe,
            this.OrderModelType = P,
            this.isSendAndCopyValid = L( () => this.order()?.orderModelType === P.draft ? this.order()?.IsSendAndCopyValid : !1),
            this.onStopClick = () => this.algoFacade.delete(this.order().id),
            this.onOrderClick = () => {
                this.algoFacade.selectAlgo(this.order().id),
                this.router.navigateByUrl(`/${It.ALGO_HISTORY_ROUTE}/${this.order().id}`)
            }
        }
        agInit(e) {
            this.order.set(e.value)
        }
        refresh(e) {
            return this.order.set(e.value),
            !0
        }
        cloneOrder() {
            this.order().orderModelType === P.draft ? this.onCopyDraftBtnClicked() : (this.orderService.updateOrderFromMarketDepthState({
                side: this.order().side === 0 ? "buy" : "sell",
                isin: this.order().symbolIsin,
                price: this.order().price,
                quantity: this.order().quantity,
                type: 9
            }),
            (this.order()?.orderState === ui.Error || this.order()?.orderState === ui.DeleteByNsc) && this.deleteOrder())
        }
        onCopyDraftBtnClicked() {
            this.draftFacade.create(this.order())
        }
        onDeleteBtnClicked() {
            setTimeout( () => {
                if (this.actionType.set(Pe.DELETE),
                this.settingFacadeService.getSettings().orderConfirmation) {
                    if (this.order().orderModelType === P.draft)
                        this.actionToConfirm.set(ge.ActionConfirmTexts.DeleteDraft);
                    else {
                        if (this.order().IsInErrorState) {
                            this.deleteOrder();
                            return
                        }
                        this.actionToConfirm.set(ge.ActionConfirmTexts.DeleteOrder)
                    }
                    this.enableConfirmation(!0)
                } else
                    this.deleteOrder()
            }
            , 50)
        }
        enableConfirmation(e) {
            this.showConfirmation.set(e)
        }
        deleteOrder() {
            this.enableConfirmation(!1);
            let e = this.order;
            e()?.orderModelType === P.offline ? this.offlineFacade.delete(this.order().id) : this.order().orderModelType === P.draft ? this.draftFacade.delete(this.order().id) : this.omsFacade.delete(this.order().id)
        }
        onEditBtnClicked() {
            let e = this.order;
            if (e()?.orderModelType === P.offline) {
                let p = this.ipoFacade.getIpoByIsin(e().symbolIsin)
                  , v = this.modalService.open(jn, {
                    scrollable: !0
                }).componentInstance;
                v.ipo.set(p),
                v.order.set(e);
                return
            }
            e()?.orderModelType === P.oms && this.omsFacade.updateState(e().id, {
                easyState: _e.GridEditMode
            }),
            e()?.orderModelType === P.draft && this.draftFacade.updateState(e().id, {
                easyState: _e.GridEditMode
            });
            let t = this.popupOrderService.popups.filter(p => p.orderInputData?.id !== null).map(p => p.orderInputData.id)
              , n = this.orderStore.getOrders(t).filter(p => p.easyState === _e.GridEditMode)
              , s = n.filter(p => p.orderModelType === P.oms).map(p => p.id);
            this.omsFacade.updateStates(s, {
                easyState: _e.Done
            });
            let a = n.filter(p => p.orderModelType === P.oms).map(p => p.id);
            this.draftFacade.updateStates(a, {
                easyState: _e.Done
            }),
            this.popupOrderService.openPopup({
                isin: this.order().symbolIsin
            }, null, this.order())
        }
        onAlgoEditBtnClicked() {
            this.algoFacade.updateState(this.order()?.id, {
                isEditMode: !0
            }),
            this.popupOrderService.openPopup({
                isin: this.order().symbolIsin
            }, null, this.order())
        }
        onSendDraftBtnClicked() {
            this.actionType.set(Pe.SEND),
            this.actionToConfirm.set(ge.ActionConfirmTexts.SendDraft),
            this.settingFacadeService.getSettings().orderConfirmation ? this.enableConfirmation(!0) : this.sendDraft()
        }
        sendDraft() {
            this.enableConfirmation(!1),
            this.omsFacade.create(this.order(), !0)
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(De),C(Qe),C(Vt),C(Pt),C(Ye),C(qe),C(Gn),C(Mt),C(Rt))
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["app-ag-order-operations-renderer"]],
        decls: 3,
        vars: 3,
        consts: [[1, "text-end"], ["data-cy", "send-confirm-btn", "title", "\u062A\u0627\u06CC\u06CC\u062F \u0627\u0631\u0633\u0627\u0644", "width", "18", "height", "18", 1, "icon", "text-success", "px-1", 3, "iconName"], ["data-cy", "delete-confirm-btn", "title", "\u062A\u0627\u06CC\u06CC\u062F \u062D\u0630\u0641", "width", "18", "height", "18", 1, "icon", "text-success", "px-1", 3, "iconName"], ["width", "18", "height", "18", "data-cy", "cancel-btn", "title", "\u0627\u0646\u0635\u0631\u0627\u0641", 1, "icon", "px-1", "text-danger", 3, "click", "iconName"], ["data-cy", "send-confirm-btn", "title", "\u062A\u0627\u06CC\u06CC\u062F \u0627\u0631\u0633\u0627\u0644", "width", "18", "height", "18", 1, "icon", "text-success", "px-1", 3, "click", "iconName"], ["data-cy", "delete-confirm-btn", "title", "\u062A\u0627\u06CC\u06CC\u062F \u062D\u0630\u0641", "width", "18", "height", "18", 1, "icon", "text-success", "px-1", 3, "click", "iconName"], ["title", "\u0633\u0641\u0627\u0631\u0634\u0627\u062A", "width", "18", "height", "18", 1, "icon", "px-1", "text-muted", 3, "click", "iconName"], ["data-cy", "edit-btn", "title", "\u0648\u06CC\u0631\u0627\u06CC\u0634", "width", "18", "height", "18", 1, "icon", "text-muted", "px-1", 3, "iconName"], ["title", "\u062A\u0648\u0642\u0641", "width", "18", "height", "18", 1, "icon", "px-1", "text-muted", 3, "iconName"], ["data-cy", "edit-btn", "title", "\u0648\u06CC\u0631\u0627\u06CC\u0634", "width", "18", "height", "18", 1, "icon", "text-muted", "px-1", 3, "click", "iconName"], ["title", "\u062A\u0648\u0642\u0641", "width", "18", "height", "18", 1, "icon", "px-1", "text-muted", 3, "click", "iconName"], ["data-cy", "send-btn", "title", "\u0627\u0631\u0633\u0627\u0644", "width", "18", "height", "18", 1, "icon", "text-muted", "px-1", 3, "iconName"], ["data-cy", "copy-btn", "title", "\u06A9\u067E\u06CC", "width", "18", "height", "18", 1, "icon", "px-1", "text-muted", 3, "iconName"], ["data-cy", "delete-btn", "title", "\u062D\u0630\u0641", "width", "18", "height", "18", 1, "icon", "px-1", "text-muted", 3, "iconName"], ["data-cy", "send-btn", "title", "\u0627\u0631\u0633\u0627\u0644", "width", "18", "height", "18", 1, "icon", "text-muted", "px-1", 3, "click", "iconName"], ["data-cy", "copy-btn", "title", "\u06A9\u067E\u06CC", "width", "18", "height", "18", 1, "icon", "px-1", "text-muted", 3, "click", "iconName"], ["data-cy", "delete-btn", "title", "\u062D\u0630\u0641", "width", "18", "height", "18", 1, "icon", "px-1", "text-muted", 3, "click", "iconName"]],
        template: function(t, n) {
            if (t & 1 && (c(0, "div", 0),
            y(1, Kr, 4, 3, "span")(2, no, 3, 1, "div"),
            u()),
            t & 2) {
                let s;
                Q("data-cy", "grid-row-operation-" + ((s = n.order()) == null ? null : s.id)),
                l(),
                b(n.showConfirmation() ? 1 : -1),
                l(),
                b(n.showConfirmation() ? -1 : 2)
            }
        },
        dependencies: [ae, z],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = r;
    return i
}
)();
var ar = ( () => {
    let r = class r {
        constructor() {
            this.order = I(null)
        }
        agInit(e) {
            this.order.set(e.value)
        }
        refresh(e) {
            return this.order.set(e.value),
            !0
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["app-ag-order-symbol-renderer"]],
        decls: 3,
        vars: 3,
        consts: [[1, "position-absolute", 2, "top", "0", "right", "0", "bottom", "0", "width", "4px", 3, "ngClass"]],
        template: function(t, n) {
            if (t & 1 && (c(0, "span"),
            _(1),
            u(),
            x(2, "span", 0)),
            t & 2) {
                let s, a, p;
                Q("data-cy", "order-grid-row-" + ((s = n.order()) == null ? null : s.id)),
                l(),
                xe((a = n.order()) == null ? null : a.symbolName),
                l(),
                m("ngClass", (p = n.order()) == null ? null : p.StateClass)
            }
        },
        dependencies: [q],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = r;
    return i
}
)();
var lr = ( () => {
    let r = class r {
        constructor() {
            this.orderStore = D(Qe),
            this.algoOrderStore = D(zt),
            this.gridOptions = {
                enableRtl: !0,
                columnDefs: Ut,
                defaultColDef: {
                    flex: 1,
                    sortable: !0,
                    cellStyle: {
                        "text-align": "center"
                    }
                },
                suppressContextMenu: !0
            },
            this.selectColDef = {
                [P.oms]: Zt,
                [P.algorithm]: rr
            },
            this.rowData = I([]),
            this.setRowData = e => this.rowData.set(e),
            this.getOrderTrade = e => e?.trades.map(t => ({
                dateTime: t.dateTime,
                quantity: t.quantity,
                price: t.price,
                percent: Math.round(t.quantity / e.quantity * 100)
            }))
        }
        agInit(e) {
            this.params = e,
            this.rowId = e.node.id,
            this.masterGridApi = e.api;
            let t = e.data.id
              , n = this.orderStore.getOmsOrder(t) || this.algoOrderStore.getAlgoOrder(t);
            if (this.gridOptions = ze(te({}, this.gridOptions), {
                columnDefs: this.selectColDef[n.orderModelType]
            }),
            n.orderModelType === P.oms) {
                let s = this.getOrderTrade(n);
                this.setRowData(s)
            } else if (n.orderModelType === P.algorithm) {
                let s = this.orderStore.omsOrders().filter(a => !!a.referenceId).filter(a => a.referenceId.includes(n?.referenceId));
                this.setRowData(s)
            }
        }
        refresh(e) {
            return this.params = e,
            !1
        }
        onGridReady(e) {
            let t = {
                id: this.rowId,
                api: e.api
            };
            this.masterGridApi.addDetailGridInfo(this.rowId, t)
        }
        ngOnDestroy() {
            this.masterGridApi.removeDetailGridInfo(this.rowId)
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["app-ag-order-detail-renderer"]],
        decls: 3,
        vars: 2,
        consts: [["agGrid", ""], [1, "ps-4", "pe-2", "py-2", "h-100", "overflow-hidden"], ["id", "detailGrid", 1, "ag-theme-balham", "flex-grow-1", "h-100", "overflow-hidden", 3, "gridReady", "rowData", "gridOptions"]],
        template: function(t, n) {
            if (t & 1) {
                let s = w();
                c(0, "div", 1)(1, "ag-grid-angular", 2, 0),
                h("gridReady", function(p) {
                    return f(s),
                    S(n.onGridReady(p))
                }),
                u()()
            }
            t & 2 && (l(),
            m("rowData", n.rowData())("gridOptions", n.gridOptions))
        },
        dependencies: [ae, Gt, Ht],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = r;
    return i
}
)();
var Kt = i => ({
    active: i
})
  , so = i => ({
    spin: i
})
  , cr = i => ({
    "text-primary": i
})
  , ao = i => ({
    loading: i
})
  , dr = i => ({
    disabled: i
});
function lo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 41),
        h("click", function() {
            f(o);
            let t = d(2);
            return S(t.selectAll())
        }),
        x(1, "svg-icon", 37),
        c(2, "small", 38),
        _(3, " \u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647"),
        u()()
    }
    if (i & 2) {
        let o = d(2);
        l(),
        m("iconName", o.icons.CheckboxEmpty)
    }
}
function co(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 42),
        h("click", function() {
            f(o);
            let t = d(2);
            return S(t.deselectAll())
        }),
        x(1, "svg-icon", 37),
        c(2, "small", 38),
        _(3, " \u0644\u063A\u0648 \u0627\u0646\u062A\u062E\u0627\u0628"),
        u()()
    }
    if (i & 2) {
        let o = d(2);
        l(),
        m("iconName", o.icons.CheckBox)
    }
}
function uo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 20),
        y(1, lo, 4, 1, "div", 34)(2, co, 4, 1, "div", 35),
        c(3, "div", 36),
        h("click", function(t) {
            return f(o),
            d().onDeleteSelectedOrdersClicked(),
            S(t.stopPropagation())
        }),
        x(4, "svg-icon", 37),
        c(5, "small", 38),
        _(6),
        u()(),
        c(7, "div", 39),
        h("click", function(t) {
            return f(o),
            d().onSendSelectedDraftsClicked(),
            S(t.stopPropagation())
        }),
        x(8, "svg-icon", 40),
        c(9, "small", 38),
        _(10),
        u()()()
    }
    if (i & 2) {
        let o = d();
        l(),
        b(o.allOrdersSelected() ? -1 : 1),
        l(),
        b(o.allOrdersSelected() ? 2 : -1),
        l(),
        m("ngClass", U(8, dr, !o.deleteToolbarActive())),
        l(),
        m("iconName", o.icons.Delete),
        l(2),
        V("\u062D\u0630\u0641 ", o.deleteOrdersCountLabel(), ""),
        l(),
        m("ngClass", U(10, dr, !o.sendToolbarActive())),
        l(),
        m("iconName", o.icons.Send),
        l(2),
        V("\u0627\u0631\u0633\u0627\u0644 ", o.sendDraftsCountLabel(), " ")
    }
}
function mo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "button", 46),
        h("click", function() {
            f(o);
            let t = d(2);
            return S(t.deleteSelectedOrders(!0))
        }),
        _(1, " \u062A\u0627\u06CC\u06CC\u062F "),
        u()
    }
}
function po(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "button", 46),
        h("click", function() {
            f(o);
            let t = d(2);
            return S(t.sendSelectedDrafts(!0))
        }),
        _(1, " \u062A\u0627\u06CC\u06CC\u062F "),
        u()
    }
}
function ho(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 31),
        _(1),
        c(2, "div", 43),
        y(3, mo, 2, 0, "button", 44)(4, po, 2, 0, "button", 44),
        c(5, "button", 45),
        h("click", function() {
            f(o);
            let t = d();
            return S(t.onCancelClicked())
        }),
        _(6, "\u0627\u0646\u0635\u0631\u0627\u0641"),
        u()()()
    }
    if (i & 2) {
        let o = d();
        l(),
        V(" ", o.confirmString(), " "),
        l(2),
        b(o.actionType() === 0 ? 3 : -1),
        l(),
        b(o.actionType() === 1 ? 4 : -1)
    }
}
function Co(i, r) {
    i & 1 && (c(0, "div", 33)(1, "div", 1)(2, "div", 47),
    _(3, "\u0641\u0639\u0627\u0644\u06CC\u062A \u0627\u0645\u0631\u0648\u0632"),
    u(),
    x(4, "today-activity", 48),
    u()()),
    i & 2 && (l(4),
    m("isMobile", !1))
}
var rl = ( () => {
    let r = class r {
        isOrderSelected(e) {
            return this.selectedOrderIds().some(t => t === e)
        }
        setToolbarActive(e) {
            this.toolbarActive.set(e);
            let t = this.getGridColumns().find(n => n.colId === Si);
            t && (this.orderGridApi?.setColumnVisible(t.colId, this.toolbarActive()),
            this.orderGridApi?.setColumnVisible(_i, !this.toolbarActive()),
            this.orderGridApi?.destroyCalled || this.orderGridApi.sizeColumnsToFit())
        }
        getGridColumns() {
            return this.gridReady ? this.orderGridApi.getColumns() : null
        }
        get colState() {
            let e = this.accountService.userAccountInfo?.value;
            return e ? e.customerIsin + "_" + nr : null
        }
        constructor(e, t, n, s, a, p, g, v, O, k, R, K, $) {
            this.agGridService = e,
            this.storageService = t,
            this.accountService = n,
            this.moneyService = s,
            this.activeSymbolService = a,
            this.notificationService = p,
            this.popupOrderService = g,
            this.settingFacadeService = v,
            this.orderFacade = O,
            this.omsFacade = k,
            this.draftFacade = R,
            this.orderStore = K,
            this.offlineFacade = $,
            this.icons = j,
            this.algoOrderFacade = D(An),
            this.algoOrderStore = D(zt),
            this.filterInitialValue = {
                searchInput: "",
                showDone: !0,
                showDraft: !0,
                showGreen: !0,
                showRed: !0
            },
            this.todayActivityActive = I(!1),
            this.confirmString = I(""),
            this.showConfirmation = I(!1),
            this.actionType = I(null),
            this.orderGridOptions = I(null),
            this.frameworkComponents = {
                AgOrderOperationsRendererComponent: sr,
                AgOrderCheckboxRendererComponent: ir,
                AgOrderSymbolRendererComponent: ar,
                AgSymbolHeaderComponent: zn,
                AgOrderStateRendererComponent: Wt
            },
            this.gridReady = !1,
            this.columnSelectionActive = !1,
            this.DEFAULT_SORT_STATE = [{
                colId: "8",
                sort: "desc"
            }],
            this.DETAIL_DEFAULT_SORT_STATE = [{
                colId: "1",
                sort: "desc"
            }],
            this.ordersData = [],
            this.activeTab = me,
            this.selectedTab = I(me.AllOrdersTabSelected),
            this.subs = [],
            this.activeStockChangeSubject = new re,
            this.activeStockChange$ = this.activeStockChangeSubject.asObservable(),
            this.selectedOrderIds = I([]),
            this.selectableOrders = L( () => this.filteredOrder().filter(T => Nn(T))),
            this.selectedSelectableOrders = L( () => this.selectableOrders().filter(T => this.selectedOrderIds().find(Z => Z === T.id))),
            this.selectedSelectableDrafts = L( () => this.selectedSelectableOrders().filter(T => T.orderModelType === P.draft && T.easyState === _e.Done)),
            this.allOrdersSelected = L( () => this.selectedSelectableOrders().length === this.selectableOrders().length),
            this.sendDraftsCountLabel = L( () => this.selectedSelectableDrafts().length > 0 ? "(" + li(this.selectedSelectableDrafts().length.toString()) + ")" : ""),
            this.deleteOrdersCountLabel = L( () => this.selectedOrderIds().length > 0 ? "(" + li(this.selectedOrderIds().length.toString()) + ")" : ""),
            this.toolbarActive = I(!1),
            this.sendToolbarActive = L( () => this.selectedSelectableOrders().some(T => T.orderModelType === P.draft && T.easyState === _e.Done)),
            this.deleteToolbarActive = L( () => this.selectedSelectableOrders().length > 0),
            this.newColDef = [{
                colId: "1",
                headerName: "date",
                hide: !1,
                minWidth: 150,
                headerClass: "my-header-class",
                lockPosition: !0,
                sortable: !0,
                resizable: !0
            }, {
                colId: "2",
                headerName: "quantity",
                field: "quantity",
                hide: !1,
                sortable: !0,
                resizable: !0
            }, {
                colId: "3",
                headerName: "price",
                field: "price",
                hide: !1,
                sortable: !0,
                resizable: !0
            }, {
                colId: "4",
                headerName: "percent",
                field: "percent",
                cellStyle: {
                    direction: "ltr"
                },
                hide: !1,
                sortable: !0,
                resizable: !0
            }],
            this.agDetailCellRendererParams = {
                detailGridOptions: {
                    enableRtl: !0,
                    suppressContextMenu: !0,
                    columnDefs: Zt,
                    defaultColDef: {
                        flex: 1,
                        sortable: !0,
                        cellStyle: {
                            "text-align": "center"
                        }
                    }
                },
                getDetailRowData: T => {
                    let Z = T.data.id
                      , E = this.orderStore.getOrder(Z);
                    if (!E?.trades?.length)
                        return;
                    let H = E?.trades.map(G => ({
                        dateTime: G.dateTime,
                        quantity: G.quantity,
                        price: G.price,
                        percent: Math.round(G.quantity / E.quantity * 100)
                    }));
                    T.successCallback(H)
                }
            },
            this.greenLightClass = "circle",
            this.redLightClass = "circle",
            this.yellowLightClass = "circle",
            this.blueLightClass = "circle",
            this.filterObject = I(this.filterInitialValue),
            this.filteredOrder$ = J(this.filterObject).pipe(Y(T => this.selectedTab() === me.None ? this.orderStore.toggleFilter$(T) : this.orderStore.tabFilter$(T)), F( () => this.setClasses())),
            this.filteredAlgoOrder$ = J(this.filterObject).pipe(Y(T => this.selectedTab() === me.None ? this.algoOrderFacade.toggleFilter$(T) : this.algoOrderFacade.tabFilter$(T))),
            this.filteredOrder = N(this.filteredOrder$.pipe(ve(this.filteredAlgoOrder$), W( ([T,Z]) => [...T, ...Z]), W(T => T.sort( (Z, E) => new Date(E.createDateTime).getTime() - new Date(Z.createDateTime).getTime())))),
            this.allOrdersCount = N(this.getOrdersCount({
                showDraft: !0,
                showDone: !0,
                showRed: !0,
                showGreen: !0
            })),
            this.draftOrdersCount = N(this.getOrdersCount({
                showDraft: !0,
                showDone: !1,
                showRed: !1,
                showGreen: !1
            })),
            this.openOrdersCount = N(this.getOrdersCount({
                showDraft: !1,
                showDone: !1,
                showRed: !0,
                showGreen: !0,
                hideErrorStates: !0
            })),
            this.doneOrdersCount = N(this.getOrdersCount({
                showDraft: !1,
                showDone: !0,
                showRed: !0,
                showGreen: !0
            })),
            this.getRowId = function(T) {
                return T.data.id
            }
            ,
            N(this.orderStore.batchDeleted$.pipe(F( () => this.closeToolbar()))),
            N(this.orderStore.batchCreated$.pipe(F( () => this.closeToolbar()))),
            N(this.orderStore.createdOmsOrder$.pipe(F( () => this.omsFacade.checkOrderPlacesToUpdate())))
        }
        ngOnInit() {
            this.initGrid(),
            this.subscribeForInternalActiveStockChanges(),
            this.subscribeToStoreForUpdatingSelectedOrders()
        }
        subscribeToStoreForUpdatingSelectedOrders() {
            let e = this.orderStore.getOrders$().subscribe(t => {
                let n = t.map(s => s.id);
                this.selectedOrderIds.update(s => [...s.filter(a => n.includes(a))])
            }
            );
            this.subs.push(e)
        }
        ngOnDestroy() {
            this.columnSelectionActive = !1,
            this.unsubscribeSubscriptions(),
            this.omsFacade.stopOrderPlaces()
        }
        unsubscribeSubscriptions() {
            this.subs.forEach(e => e.unsubscribe())
        }
        initGrid() {
            this.buildGridOptions()
        }
        subscribeForInternalActiveStockChanges() {
            let e = this.activeStockChange$.pipe(Ge(200)).subscribe(t => {
                this.setActiveStock(t)
            }
            );
            this.subs.push(e)
        }
        buildGridOptions() {
            this.orderGridOptions.set({
                context: {
                    componentParent: this
                },
                columnDefs: Ut,
                rowDragManaged: !1,
                suppressRowDrag: !1,
                enableRtl: !0,
                groupHeaderHeight: 0,
                suppressMovableColumns: !0,
                alwaysShowHorizontalScroll: !0,
                getContextMenuItems: e => this.agGridService.getContextMenuItemsForOrdersGrid(e, this),
                suppressColumnMoveAnimation: !0,
                navigateToNextCell: e => this.rowNavigation(e),
                noRowsOverlayComponent: un,
                masterDetail: !0,
                detailRowHeight: 150,
                detailCellRenderer: lr,
                isRowMaster: e => {
                    let t = e.id
                      , n = this.orderStore.getOmsOrder(t) || this.algoOrderStore.getAlgoOrder(t);
                    return n.orderModelType === P.oms ? n?.trades?.length > 0 : n.orderModelType === P.algorithm ? this.orderStore.omsOrders().filter(a => !!a.referenceId).filter(a => a.referenceId.includes(n?.referenceId))?.length > 0 : !1
                }
            })
        }
        onGridReady(e) {
            window.addEventListener("resize", () => {
                e.api?.destroyCalled || e.api.sizeColumnsToFit()
            }
            ),
            this.orderGridApi = e.api,
            this.columnSelectionActive = !1,
            this.restoreState(),
            this.gridReady = !0,
            setTimeout( () => {
                e.api?.destroyCalled || e.api.sizeColumnsToFit()
            }
            , 1e3),
            this.reloadOrders()
        }
        headerSearchSymbolChanged(e) {
            this.onSearchOrders(e)
        }
        reloadOrders() {
            setTimeout( () => {}
            , ge.TimeoutForStoppingReloadButton),
            this.orderFacade.load({
                checkOrderPlace: !0
            }),
            this.deselectAll(),
            this.moneyService.reloadBalance()
        }
        saveColumnState() {
            if (this.orderGridOptions() === null || this.orderGridOptions() === void 0)
                return;
            let e = JSON.stringify(this.orderGridApi.getColumnState());
            this.colState && this.storageService.setItem(this.colState, e)
        }
        restoreState() {
            let e = this.orderGridApi.getColumnState();
            e && e.every(t => t.sort === null) && this.orderGridApi.applyColumnState({
                state: this.DEFAULT_SORT_STATE,
                applyOrder: !1
            })
        }
        toggleColumnSelectionActive() {
            this.columnSelectionActive = !this.columnSelectionActive
        }
        checkboxChanged(e) {
            let t = this.orderStore.getOrders().map(s => s.id);
            this.selectedOrderIds.update(s => [...s.filter(a => t.includes(a))]),
            this.isOrderSelected(e) ? this.selectedOrderIds.update(s => [...s.filter(a => a !== e)]) : this.selectableOrders().find(a => a.id === e) && this.selectedOrderIds.update(a => [e, ...a])
        }
        selectAll() {
            this.selectedOrderIds.set(this.selectableOrders().map(e => e.id))
        }
        deselectAll() {
            this.selectedOrderIds.set([])
        }
        closeToolbar() {
            this.deselectAll(),
            this.setToolbarActive(!1)
        }
        onCellClicked(e) {
            if (this.toolbarActive())
                e.data && e.data.id && this.checkboxChanged(e.data.id);
            else {
                let t = e.data.symbolIsin;
                this.activeStockChangeSubject.next(t)
            }
        }
        onToolbarIconClicked() {
            this.setToolbarActive(!this.toolbarActive())
        }
        onSearchOrders(e) {
            e ? this.updateFilter({
                searchInput: mn(e, !0)
            }) : this.updateFilter({
                searchInput: ""
            })
        }
        onSendSelectedDraftsClicked() {
            this.settingFacadeService.getSettings().orderConfirmation ? (this.actionType.set(Pe.SEND),
            this.confirmString.set(ge.ActionConfirmTexts.SendSelectedDrafts),
            this.showConfirmation.set(!0)) : this.sendSelectedDrafts(!1)
        }
        sendSelectedDrafts(e) {
            setTimeout( () => {
                this.showConfirmation.set(!1);
                let n = this.selectedSelectableDrafts();
                n.length === 0 ? this.notificationService.alert(ge.Messages.NoDraftIsSelectedForSend, di.warning) : (n.some(s => s.side === ot.Buy) && this.updateFilter({
                    showGreen: !0
                }),
                n.some(s => s.side === ot.Sell) && this.updateFilter({
                    showRed: !0
                }),
                this.closeToolbar(),
                this.draftFacade.batchCreate(n.map(s => s.id), !0))
            }
            , e ? Ue : 0)
        }
        onDeleteSelectedOrdersClicked() {
            this.settingFacadeService.getSettings().orderConfirmation ? (this.actionType.set(Pe.DELETE),
            this.confirmString.set(ge.ActionConfirmTexts.DeleteSelectedOrders),
            this.showConfirmation.set(!0)) : this.deleteSelectedOrders(!1)
        }
        deleteSelectedOrders(e) {
            setTimeout( () => {
                this.showConfirmation.set(!1);
                let n = this.selectedSelectableOrders().map(s => s.id);
                if (n.length === 0) {
                    this.notificationService.alert(ge.Messages.NoOrderIsSelectedForDelete, di.warning);
                    return
                }
                this.draftFacade.batchDelete(n)
            }
            , e ? Ue : 0)
        }
        onCancelClicked() {
            setTimeout( () => {
                this.showConfirmation.set(!1)
            }
            , Ue)
        }
        setActiveStock(e) {
            this.activeSymbolService.setActiveIsin(e)
        }
        rowNavigation(e) {
            let t = e.previousCellPosition, n = e.nextCellPosition, s = "ArrowUp", a = "ArrowDown", p = "ArrowLeft", g = "ArrowRight", v, O = this.orderGridApi;
            switch (e.key) {
            case a:
                t = e.previousCellPosition,
                O.forEachNode(k => {
                    t.rowIndex + 1 === k.rowIndex && (k.setSelected(!0),
                    v = k.data.symbolIsin)
                }
                );
                break;
            case s:
                t = e.previousCellPosition,
                O.forEachNode(k => {
                    t.rowIndex - 1 === k.rowIndex && (k.setSelected(!0),
                    v = k.data.symbolIsin)
                }
                );
                break;
            case p:
            case g:
                break;
            default:
                throw "this will never happen, navigation is always one of the 4 keys above"
            }
            return v && this.activeStockChangeSubject.next(v),
            n
        }
        toggleTodayActivity() {
            this.todayActivityActive.set(!this.todayActivityActive())
        }
        setClasses() {
            this.greenLightClass = this.omsFacade.getFilterLightClass(this.filterObject().showGreen),
            this.redLightClass = this.omsFacade.getFilterLightClass(this.filterObject().showRed),
            this.yellowLightClass = this.omsFacade.getFilterLightClass(this.filterObject().showDraft),
            this.blueLightClass = this.omsFacade.getFilterLightClass(this.filterObject().showDone)
        }
        toggleColorFilters(e) {
            if (!e)
                return;
            this.selectedTab.set(me.None);
            let t = te({}, this.filterObject());
            t[e] = !t[e],
            this.updateFilter(t),
            this.setClasses()
        }
        updateFilter(e) {
            this.filterObject.update(t => te(te({}, t), e))
        }
        getOrdersCount(e) {
            let t = this.orderStore.tabFilter$(e).pipe(W(s => e?.hideErrorStates && s.filter(a => !a?.IsInErrorState) || s))
              , n = this.algoOrderFacade.tabFilter$(e);
            return wi({
                orders: t,
                algoOrders: n
            }).pipe(W( ({orders: s, algoOrders: a}) => [...s, ...a]), W(s => s?.length ?? 0))
        }
        changeTabFilter(e) {
            e && (this.selectedTab.set(e),
            this.updateFilter(go[this.selectedTab()]))
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(Kn),C(gn),C(Sn),C(Tn),C(Et),C(bn),C(Ye),C(qe),C(kn),C(Pt),C(Vt),C(Qe),C(Rt))
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["d-orders-grid"]],
        decls: 45,
        vars: 42,
        consts: [[1, "position-relative", "h-100"], [1, "d-flex", "flex-column", "h-100"], [1, "d-flex", "flex-shrink-0"], [1, "flex-grow-1", "d-flex", "overflow-hidden", 2, "min-height", "37px"], [1, "tabs", "me-1", "position-relative", "1overflow-hidden"], [1, "tabs-holder", "d-flex", "align-items-center", "bg-principal", "h-100", "p-1", "position-relative", "rounded-top"], [1, "d-inline-flex", "items-scroller", "text-nowrap", "overflow-hidden", "gap-1"], ["data-cy", "order-grid-tab-all-order", 1, "tab", "rounded", "d-flex", "align-items-center", 3, "click", "ngClass"], [1, "d-flex", "align-items-center"], [1, "badge", "ms-2", "text-light", 2, "font-style", "normal", "background-color", "#d770ad"], ["data-cy", "order-grid-tab-open-order", 1, "tab", "rounded", "d-flex", "align-items-center", 3, "click", "ngClass"], [1, "badge", "ms-2", "text-light", 2, "font-style", "normal", "background-color", "#967adc"], ["data-cy", "order-grid-tab-done-order", 1, "tab", "rounded", "d-flex", "align-items-center", 3, "click", "ngClass"], [1, "badge", "bg-primary", "ms-2", 2, "font-style", "normal"], ["data-cy", "order-grid-tab-draft-order", 1, "tab", "rounded", "d-flex", "align-items-center", 3, "click", "ngClass"], [1, "badge", "bg-warning", "ms-2", 2, "font-style", "normal"], [1, "curve-after"], [1, "rounded", "bg-principal", "mb-1", "px-1", "d-flex", "align-items-center", "position-relative", "z-1"], ["width", "18", "height", "18", "title", "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0645\u062C\u062F\u062F", "data-cy", "order-grid-reload-btn", 1, "text-secondary", "icon", 3, "click", "iconName", "ngClass"], ["width", "18", "height", "18", "data-cy", "order-grid-toolbar-btn", "title", "\u0627\u0646\u062A\u062E\u0627\u0628 \u0633\u0641\u0627\u0631\u0634\u200C", 1, "icon", "text-secondary", 3, "click", "iconName", "ngClass"], [1, "toolbar", "rounded", "bg-principal", "mb-1", "px-1", "d-flex", "align-items-center", "position-relative", "z-1", "text-nowrap", "ms-1"], [1, "d-flex", "mb-1", "gap-1"], ["data-cy", "order-grid-today-activity", "title", "\u0641\u0639\u0627\u0644\u06CC\u062A \u0627\u0645\u0631\u0648\u0632", 1, "rounded", "bg-principal", "px-1", "d-flex", "align-items-center", "position-relative", "z-1", 3, "click"], ["width", "20", "height", "20", 1, "icon", "text-secondary", 3, "iconName", "ngClass"], [1, "rounded", "bg-principal", "px-1", "d-flex", "align-items-center"], ["data-cy", "order-grid-toggle-done-order", "width", "18", "height", "18", "title", "\u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647 (F4)", 1, "icon", "text-primary", 3, "click", "iconName"], ["data-cy", "order-grid-toggle-draft-order", "width", "18", "height", "18", "title", "\u067E\u06CC\u0634\u200C\u0646\u0648\u06CC\u0633 (F3)", 1, "icon", "text-warning", 3, "click", "iconName"], ["data-cy", "order-grid-toggle-sell-order", "width", "18", "height", "18", "title", "\u0641\u0631\u0648\u0634 (F2)", 1, "icon", "text-danger", 3, "click", "iconName"], ["data-cy", "order-grid-toggle-buy-order", "width", "18", "height", "18", "title", "\u062E\u0631\u06CC\u062F (F1)", 1, "icon", "text-success", 3, "click", "iconName"], [1, "d-flex", "bg-principal", "h-100", "rounded", "overflow-hidden", "p-2", 2, "border-top-right-radius", "0 !important"], [1, "flex-grow-1", "position-relative", "overflow-hidden", "rounded", 3, "ngClass"], [1, "confirm-order", "d-flex", "flex-column", "justify-content-center", "position-absolute", "full-offset", "text-center", "p-2", "z-2"], ["data-cy", "order-grid", "animateRows", "", "rowSelection", "single", 1, "ag-theme-balham", "flex-grow-1", 3, "gridReady", "cellClicked", "gridOptions", "rowData", "components", "getRowId", "detailCellRendererParams"], [1, "bg-principal-2x", "rounded", "ms-2", "position-relative", "flex-shrink-0", 2, "width", "310px"], ["data-cy", "order-grid-all-order-selected", 1, "col", "text-center", "px-1", "cup"], ["data-cy", "order-grid-all-order-deSelected", 1, "col", "text-center", "px-1", "cup"], ["data-cy", "order-grid-delete-order", 1, "col", "text-center", "px-1", "cup", 3, "click", "ngClass"], ["width", "20", "height", "20", 1, "text-primary", 3, "iconName"], [1, "fw-light"], ["data-cy", "order-grid-send-order", 1, "col", "text-center", "px-1", "cup", 3, "click", "ngClass"], ["width", "20", "height", "20", 1, "text-primary", "me-1", 3, "iconName"], ["data-cy", "order-grid-all-order-selected", 1, "col", "text-center", "px-1", "cup", 3, "click"], ["data-cy", "order-grid-all-order-deSelected", 1, "col", "text-center", "px-1", "cup", 3, "click"], [1, "mt-1"], [1, "btn", "btn-sm", "py-1", "btn-global", "me-2", "px-4"], [1, "btn", "btn-sm", "py-1", "btn-outline-light", 3, "click"], [1, "btn", "btn-sm", "py-1", "btn-global", "me-2", "px-4", 3, "click"], [1, "fw-bold", "mb-2", "px-2", "pt-2"], [1, "h-100", "overflow-auto", "px-2", "pb-2", 3, "isMobile"]],
        template: function(t, n) {
            t & 1 && (c(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7),
            h("click", function() {
                return n.changeTabFilter(n.activeTab.AllOrdersTabSelected)
            }),
            c(8, "span", 8),
            _(9, " \u06A9\u0644 \u0633\u0641\u0627\u0631\u0634\u0627\u062A "),
            c(10, "i", 9),
            _(11),
            u()()(),
            c(12, "div", 10),
            h("click", function() {
                return n.reloadOrders(),
                n.changeTabFilter(n.activeTab.OpenOrdersTabSelected)
            }),
            c(13, "span", 8),
            _(14, " \u0633\u0641\u0627\u0631\u0634\u0627\u062A \u0628\u0627\u0632 "),
            c(15, "i", 11),
            _(16),
            u()()(),
            c(17, "div", 12),
            h("click", function() {
                return n.changeTabFilter(n.activeTab.DoneOrdersTabSelected)
            }),
            c(18, "span", 8),
            _(19, " \u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647 "),
            c(20, "i", 13),
            _(21),
            u()()(),
            c(22, "div", 14),
            h("click", function() {
                return n.changeTabFilter(n.activeTab.DraftOrdersTabSelected)
            }),
            c(23, "span", 8),
            _(24, " \u067E\u06CC\u0634\u200C\u0646\u0648\u06CC\u0633 "),
            c(25, "i", 15),
            _(26),
            u()()()()(),
            x(27, "span", 16),
            u(),
            c(28, "div", 17)(29, "svg-icon", 18),
            h("click", function() {
                return n.reloadOrders()
            }),
            u(),
            c(30, "svg-icon", 19),
            h("click", function() {
                return n.onToolbarIconClicked()
            }),
            u()(),
            y(31, uo, 11, 12, "div", 20),
            u(),
            c(32, "div", 21)(33, "div", 22),
            h("click", function() {
                return n.toggleTodayActivity()
            }),
            x(34, "svg-icon", 23),
            u(),
            c(35, "div", 24)(36, "svg-icon", 25),
            h("click", function() {
                return n.toggleColorFilters("showDone")
            }),
            u(),
            c(37, "svg-icon", 26),
            h("click", function() {
                return n.toggleColorFilters("showDraft")
            }),
            u(),
            c(38, "svg-icon", 27),
            h("click", function() {
                return n.toggleColorFilters("showRed")
            }),
            u(),
            c(39, "svg-icon", 28),
            h("click", function() {
                return n.toggleColorFilters("showGreen")
            }),
            u()()()(),
            c(40, "div", 29)(41, "div", 30),
            y(42, ho, 7, 3, "div", 31),
            c(43, "ag-grid-angular", 32),
            h("gridReady", function(a) {
                return n.onGridReady(a)
            })("cellClicked", function(a) {
                return n.onCellClicked(a)
            }),
            u()(),
            y(44, Co, 5, 1, "div", 33),
            u()()()),
            t & 2 && (l(7),
            m("ngClass", U(26, Kt, n.selectedTab() === n.activeTab.AllOrdersTabSelected)),
            l(4),
            V(" ", n.allOrdersCount(), ""),
            l(),
            m("ngClass", U(28, Kt, n.selectedTab() === n.activeTab.OpenOrdersTabSelected)),
            l(4),
            V(" ", n.openOrdersCount(), ""),
            l(),
            m("ngClass", U(30, Kt, n.selectedTab() === n.activeTab.DoneOrdersTabSelected)),
            l(4),
            V(" ", n.doneOrdersCount(), ""),
            l(),
            m("ngClass", U(32, Kt, n.selectedTab() === n.activeTab.DraftOrdersTabSelected)),
            l(4),
            V(" ", n.draftOrdersCount(), ""),
            l(3),
            m("iconName", n.icons.refresh)("ngClass", U(34, so, n.orderStore.loading())),
            l(),
            m("iconName", n.icons.CheckBoxGroup)("ngClass", U(36, cr, n.toolbarActive())),
            l(),
            b(n.toolbarActive() ? 31 : -1),
            l(3),
            m("iconName", n.icons.History)("ngClass", U(38, cr, n.todayActivityActive())),
            l(2),
            m("iconName", n.blueLightClass),
            l(),
            m("iconName", n.yellowLightClass),
            l(),
            m("iconName", n.redLightClass),
            l(),
            m("iconName", n.greenLightClass),
            l(2),
            m("ngClass", U(40, ao, n.orderStore.loading())),
            l(),
            b(n.showConfirmation() ? 42 : -1),
            l(),
            m("gridOptions", n.orderGridOptions())("rowData", n.filteredOrder())("components", n.frameworkComponents)("getRowId", n.getRowId),
            l(),
            b(n.todayActivityActive() ? 44 : -1))
        },
        dependencies: [ae, q, Gt, Ht, On, z],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = r;
    return i
}
)()
  , me = function(i) {
    return i[i.None = 0] = "None",
    i[i.AllOrdersTabSelected = 1] = "AllOrdersTabSelected",
    i[i.OpenOrdersTabSelected = 2] = "OpenOrdersTabSelected",
    i[i.DoneOrdersTabSelected = 3] = "DoneOrdersTabSelected",
    i[i.DraftOrdersTabSelected = 4] = "DraftOrdersTabSelected",
    i
}(me || {})
  , go = {
    [me.AllOrdersTabSelected]: {
        showDraft: !0,
        showDone: !0,
        showRed: !0,
        showGreen: !0
    },
    [me.DoneOrdersTabSelected]: {
        showDraft: !1,
        showDone: !0,
        showRed: !0,
        showGreen: !0
    },
    [me.OpenOrdersTabSelected]: {
        showDraft: !1,
        showDone: !1,
        showRed: !0,
        showGreen: !0
    },
    [me.DraftOrdersTabSelected]: {
        showDraft: !0,
        showDone: !1,
        showRed: !1,
        showGreen: !1
    },
    [me.None]: {
        showDraft: !1,
        showDone: !1,
        showRed: !1,
        showGreen: !1
    }
};
var So = ["desktopAddToWatchTemp"]
  , ur = i => ({
    cup: i
})
  , _o = (i, r) => ({
    "text-danger": i,
    "text-success": r
})
  , bo = (i, r, o) => ({
    cup: i,
    "text-danger": r,
    "text-success": o
});
function vo(i, r) {
    if (i & 1 && x(0, "svg-icon", 3),
    i & 2) {
        let o = d();
        m("iconName", o.icons.StarCheckFill)
    }
}
function yo(i, r) {
    if (i & 1 && x(0, "svg-icon", 4),
    i & 2) {
        let o = d();
        m("iconName", o.icons.Star)
    }
}
function xo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 26),
        h("click", function() {
            f(o);
            let t = d();
            return S(t.onShowCautionAgreementModalBtnClicked())
        }),
        u()
    }
    if (i & 2) {
        let o = d();
        m("iconName", o.icons.Alert)
    }
}
function wo(i, r) {
    i & 1 && (c(0, "small", 16),
    _(1, "0 (0%)"),
    u())
}
function Io(i, r) {
    if (i & 1 && (c(0, "small", 16),
    _(1),
    se(2, "number"),
    se(3, "number"),
    u()),
    i & 2) {
        let o, e = d();
        l(),
        Yi(" ", he(2, 2, ((o = e.marketData()) == null ? null : o.totalNumberOfSharesTraded) > 0 ? (o = e.marketData()) == null ? null : o.lastTradedPriceVar : 0), " (", bt(3, 4, ((o = e.marketData()) == null ? null : o.totalNumberOfSharesTraded) > 0 ? (o = e.marketData()) == null ? null : o.lastTradedPriceVarPercent : 0, "1.2-2"), "%) ")
    }
}
function ko(i, r) {
    if (i & 1 && (c(0, "div", 17)(1, "div", 27)(2, "span", 19),
    _(3, "NAV \u0627\u0628\u0637\u0627\u0644:"),
    u(),
    c(4, "span"),
    _(5),
    se(6, "number"),
    u()(),
    c(7, "div", 22)(8, "span", 23),
    _(9, "P/NAV:"),
    u(),
    c(10, "span", 24),
    _(11),
    u()()()),
    i & 2) {
        let o = d();
        l(5),
        V("", he(6, 2, o.sCancelNav()), " "),
        l(6),
        xe(o.sPriceToCancelNav())
    }
}
function To(i, r) {
    if (i & 1 && (c(0, "div", 25)(1, "div", 27)(2, "span", 19),
    _(3, "\u0642\u06CC\u0645\u062A \u0627\u0639\u0645\u0627\u0644:"),
    u(),
    c(4, "span", 28),
    _(5),
    se(6, "number"),
    u()(),
    c(7, "div", 22)(8, "span", 23),
    _(9, "\u062A\u0627\u0631\u06CC\u062E \u0633\u0631\u0631\u0633\u06CC\u062F:"),
    u(),
    c(10, "span", 29),
    _(11),
    se(12, "jdate"),
    u()()()),
    i & 2) {
        let o = d();
        l(5),
        V("", he(6, 2, o.optionSymbolDetails().strikePrice), " "),
        l(6),
        V(" ", he(12, 4, o.optionSymbolDetails().shareDueDate), "")
    }
}
var bl = ( () => {
    let r = class r extends wn {
        constructor(e, t, n, s, a, p, g, v, O, k, R, K, $, T, Z) {
            super(),
            this.lsService = e,
            this.searchService = t,
            this.router = n,
            this.marketDataService = s,
            this.marketWatchStoreFacade = a,
            this.activeSymbolService = p,
            this.marketManager = g,
            this.noteFacadeService = v,
            this.conditionalNotificationService = O,
            this.symbolService = k,
            this.orderService = R,
            this.titleService = K,
            this.timeService = $,
            this.modalNgService = T,
            this.cautionModalService = Z,
            this.icons = j,
            this.isModal = A(!1),
            this.noteOpener = ie(),
            this.conditionalToolsOpener = ie(),
            this.desktopAddToWatchPanel = ht("desktopAddToWatchTemp"),
            this._activeStockIsin = I(""),
            this.activeStockIsin = A(),
            this.isTimeOfMarket = !0,
            this.tabTitle = "EasyTrader",
            this.otherSubs = [],
            this.activeStockSubs = [],
            this.symbol = I(null),
            this.symbol$ = J(this.symbol),
            this.marketData = I(null),
            this.marketData$ = J(this.marketData),
            this.cautionAgreementModalIsVisible = I(!1),
            this.optionSymbolDetails = I(null),
            this.isInCurrentWatchSymbols = N(this.symbol$.pipe(Y(E => this.marketWatchStoreFacade.isSymbolExistsInMarketWatch$(E?.symbolIsin)))),
            this.showNAVvalues = L( () => hn.get(this.symbol()?.marketUnit)?.allowShowNAVvalueInSymbolHeader),
            this.browserTabTitle$ = this.marketData$.pipe(oe(Boolean), ve(this.timeService.isMarketOpen$.pipe(dt())), W( ([E,H]) => {
                if (E?.totalNumberOfSharesTraded !== void 0 && E?.closingPrice !== void 0 && E?.lastTradedPrice !== void 0) {
                    let G = H && E?.totalNumberOfSharesTraded > 0
                      , be = G ? E?.lastTradedPrice : E?.closingPrice
                      , Oe = G ? E?.lastTradedPriceVarPercent : E?.closingPriceVarPercent
                      , Me = "";
                    if (Oe !== void 0 && E?.totalNumberOfSharesTraded > 0 && (Me = `(%${Oe.toString().replace("-", "")}${Oe >= 0 ? "" : "-"})`),
                    be) {
                        let Ne = `${this.symbol()?.symbolName} ${Me} ${ee(be)}`;
                        Ne !== this.tabTitle && (this.tabTitle = Ne,
                        this.titleService.titleSubject.next({
                            route: It.MAIN_ROUTE,
                            title: this.tabTitle
                        }))
                    }
                }
            }
            )),
            this.sCancelNav = I(void 0),
            this.sPriceToCancelNav = I(void 0),
            this.hasNote = L( () => this.symbol() ? this.noteFacadeService.hasNote(this.symbol()?.symbolIsin) : !1),
            this.itemConditionClass = L( () => this.symbol() ? this.conditionalNotificationService.getStockConditionFigureClass(this.symbol()?.symbolIsin) : "bell-add"),
            N(this.browserTabTitle$),
            it( () => {
                this.activeStockIsin() && (this._activeStockIsin() ? (this._activeStockIsin.set(this.activeStockIsin()),
                this.ngOnDestroy(),
                this.ngOnInit()) : this._activeStockIsin.set(this.activeStockIsin()))
            }
            )
        }
        ngOnInit() {
            this.isModal() ? this.getSymbolDataForModalDesktop() : this.getSymbolDataForDesktop()
        }
        ngOnDestroy() {
            this.symbolLsSubId && this.lsService.unsubscribeSchemaById(this.symbolLsSubId),
            this.otherSubs.forEach(e => e.unsubscribe()),
            this.activeStockSubs.forEach(e => e.unsubscribe())
        }
        stockMarketData(e) {
            this.marketDataService.GetStockInfo(e).pipe(ve(this.marketData$)).subscribe( ([t,n]) => {
                let {cancelNav: s, lastTradedPrice: a} = t || {}
                  , p = En(n?.navRedemption ?? s, n?.lastTradedPrice ?? a);
                this.sCancelNav.update( () => n?.navRedemption ?? s),
                this.sPriceToCancelNav.update( () => p)
            }
            )
        }
        getSymbolDataForDesktop() {
            let e = this.activeSymbolService.activeSymbolObs$.pipe(ut(t => !t), F(t => {
                t?.symbol && (this.cancelApiCallIfDataReceivedFromLS(t.marketData),
                this.symbol.set(t.symbol),
                this.marketData.set(t.marketData),
                this.showNAVvalues() && this._activeStockIsin() !== this.symbol().symbolIsin && this.stockMarketData(this.symbol().symbolIsin),
                t && this._activeStockIsin() !== this.symbol()?.symbolIsin && (this._activeStockIsin.set(t.symbol.symbolIsin),
                this.init()),
                this.optionSymbolDetails.set(pn(t.symbol.marketUnit) ? {
                    strikePrice: t.symbol.strikePrice,
                    shareDueDate: t.symbol.shareDueDate
                } : null))
            }
            )).subscribe();
            this.otherSubs.push(e)
        }
        getSymbolDataForModalDesktop() {
            return He(this, null, function*() {
                yield this.getSymbolData(),
                yield this.stockMarketData(this.symbol().symbolIsin),
                this.getSymbolHeaderData(),
                this.init()
            })
        }
        getSymbolData() {
            return He(this, null, function*() {
                this.symbol.set(yield this.symbolService.getSymbol(this._activeStockIsin().toUpperCase()))
            })
        }
        getSymbolHeaderData() {
            let e = this.lsService.subscribeToLs(Se.ActiveStock, this._activeStockIsin()).subscribe(t => He(this, null, function*() {
                this.symbolLsSubId = t.subId,
                this.marketData.set(_n(t.val)),
                this.cancelApiCallIfDataReceivedFromLS(this.marketData()),
                yield this.marketData.update(n => (n.closingPriceVarPercent = this.symbolService.calculateClosingPriceVarPercent(n.closingPrice, n.feeOfPreviousDaysClosingPrice, n.totalNumberOfSharesTraded) || 0,
                te({}, n)))
            }));
            this.activeStockSubs.push(e)
        }
        init() {
            this.marketDataService.callMarketDataIfLsNotConnected( () => this.getSymbolHeaderMarketData())
        }
        cancelApiCallIfDataReceivedFromLS(e) {
            e.lastTradedPrice > 0 && this.marketDataService.lsDataIsReceived(this.getSymbolHeaderMarketData.name)
        }
        getSymbolHeaderMarketData() {
            let e = this.marketDataService.GetMarketData(9, this._activeStockIsin()).subscribe({
                next: t => {
                    this.marketData() || this.marketData.set(Cn),
                    this.marketData.update(n => (n.lastTradedPrice = t.lastTradedPrice,
                    n.feeOfPreviousDaysClosingPrice = t.feeOfPreviousDaysClosingPrice,
                    n.lastTradedPriceVar = this.symbolService.calculateLastTradedPriceVar(t.lastTradedPrice, t.feeOfPreviousDaysClosingPrice),
                    n.lastTradedPriceVarPercent = t.priceVar,
                    n.stateColor = ke(t.stateCode),
                    n.closingPrice = t.closingPrice,
                    n.closingPriceVarPercent = this.symbolService.calculateClosingPriceVarPercent(t.closingPrice, t.feeOfPreviousDaysClosingPrice, t.totalNumberOfSharesTraded),
                    n.totalNumberOfSharesTraded = t.totalNumberOfSharesTraded,
                    te({}, n)))
                }
            });
            this.activeStockSubs.push(e)
        }
        openWatches() {
            this.marketManager.setSymbol(this.symbol()),
            this.marketManager.setShowCategoryOverlay(!0);
            let e = this.modalNgService.open(Zn);
            e.componentInstance.isMobile = !1
        }
        onNoteClick() {
            this.noteOpener.emit(this._activeStockIsin())
        }
        addStockCondition() {
            this.conditionalToolsOpener.emit(this._activeStockIsin())
        }
        onOpenEasyChart() {
            this.router.navigate([]).then( () => {
                window.open("/easy-chart/" + this.symbol().symbolIsin, "_blank")
            }
            )
        }
        onShowCautionAgreementModalBtnClicked() {
            this.cautionModalService.checkCaution({
                symbolIsin: this._activeStockIsin(),
                showAlways: !0
            })
        }
        openOrderForm(e) {
            let t = {
                isin: this.symbol().symbolIsin,
                side: ue.BUY,
                quantity: null,
                price: e,
                type: 2
            };
            this.orderService.updateOrderFromMarketDepthState(t)
        }
        openDetailOrderItems() {
            this.modalNgService.open(Rn, {
                scrollable: !0
            })
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(Te),C(ne),C(le),C(Ot),C(Ae),C(Et),C(Un),C(fe),C(de),C(Ft),C(De),C(fn),C(vn),C(Mt),C(Mn))
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["symbol-header"]],
        viewQuery: function(t, n) {
            t & 1 && _t(n.desktopAddToWatchPanel, So, 5),
            t & 2 && $e()
        },
        inputs: {
            isModal: [1, "isModal"],
            activeStockIsin: [1, "activeStockIsin"]
        },
        outputs: {
            noteOpener: "noteOpener",
            conditionalToolsOpener: "conditionalToolsOpener"
        },
        features: [Gi],
        decls: 39,
        vars: 34,
        consts: [[1, "px-2"], [1, "d-flex", "stock-add-to-watchlist"], [1, "d-flex", "align-items-center", "justify-content-center", "pe-2", "stock-add-button", "cup", 3, "click"], ["width", "24", "height", "24", "data-cy", "symbol-header-market-watch-btn-star-check-fill", "title", "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0646\u0645\u0627\u062F \u062F\u0631 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646", 1, "text-primary", 3, "iconName"], ["width", "24", "height", "24", "data-cy", "symbol-header-market-watch-btn-star", "title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0627\u062F \u0628\u0647 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646", 1, "text-secondary", 3, "iconName"], [1, "d-flex", "flex-grow-1", "align-items-center", "py-2"], [1, "position-relative", 2, "bottom", "7px", 3, "stateColor"], [1, "flex-grow-1", "text-truncate", 3, "title"], ["id", "symbol-header-div", 1, "d-flex", "align-items-center"], ["id", "symbol-header-h5", "data-cy", "symbol-header-symbol-name", 1, "mb-0", "text-truncate"], ["width", "20", "height", "20", 1, "text-danger", "ms-1", "cup", 3, "iconName"], ["id", "symbol-header-title", 1, "symbol-info-title", "text-muted"], ["dir", "ltr", "id", "symbol-header-last-div", 1, "d-flex", "align-items-center", "h5", "text-end", "mb-0", "flex-shrink-0", 3, "click"], ["data-cy", "symbol-header-last-span", "id", "symbol-header-last-span", 1, "ms-1", 3, "ngClass"], ["id", "symbol-header-last-small", 3, "ngClass"], ["id", "symbol-header-last-inner-div"], ["id", "symbol-header-last-inner-small"], [1, "closing-price", "d-flex", "align-items-center", "justify-content-between", "p-2", "border-top"], ["id", "symbol-header-closing-div", 1, "text-nowrap", 3, "click"], ["id", "symbol-header-closing-span-1", 1, "text-muted"], ["dir", "ltr", "id", "symbol-header-closing-span-2", 1, "me-1", 3, "ngClass"], ["data-cy", "symbol-header-closing-price", 3, "ngClass"], ["id", "symbol-header-volume-div", 1, "d-flex", "align-items-center"], ["id", "symbol-header-volume-span-1", 1, "text-muted", "me-1"], ["dir", "ltr", "id", "symbol-header-volume-span-2", 1, "d-block"], [1, "d-flex", "justify-content-between", "p-2"], ["width", "20", "height", "20", 1, "text-danger", "ms-1", "cup", 3, "click", "iconName"], ["id", "symbol-header-closing-div", 1, "no-wrap"], ["data-cy", "symbol-header-strikePrice"], ["data-cy", "symbol-header-shareDueDate", "dir", "ltr", "id", "symbol-header-volume-span-2", 1, "d-block"]],
        template: function(t, n) {
            if (t & 1 && (c(0, "div", 0)(1, "div", 1)(2, "div", 2),
            h("click", function() {
                return n.openWatches()
            }),
            y(3, vo, 1, 1, "svg-icon", 3)(4, yo, 1, 1, "svg-icon", 4),
            u(),
            c(5, "div", 5),
            x(6, "symbol-state", 6),
            c(7, "div", 7)(8, "div", 8)(9, "h5", 9),
            _(10),
            u(),
            y(11, xo, 1, 1, "svg-icon", 10),
            u(),
            c(12, "small", 11),
            _(13),
            u()(),
            c(14, "div", 12),
            h("click", function() {
                let a;
                return ((a = n.symbol()) == null ? null : a.canBuy) && n.openOrderForm((a = n.marketData()) == null ? null : a.lastTradedPrice)
            }),
            c(15, "span", 13),
            _(16),
            se(17, "number"),
            u(),
            c(18, "small", 14)(19, "div", 15),
            y(20, wo, 2, 0, "small", 16)(21, Io, 4, 7, "small", 16),
            u()()()()()(),
            c(22, "div", 17)(23, "div", 18),
            h("click", function() {
                let a;
                return ((a = n.symbol()) == null ? null : a.canBuy) && n.openOrderForm((a = n.marketData()) == null ? null : a.closingPrice)
            }),
            c(24, "span", 19),
            _(25, "\u0642\u06CC\u0645\u062A \u067E\u0627\u06CC\u0627\u0646\u06CC:"),
            u(),
            c(26, "span", 20),
            _(27),
            u(),
            c(28, "span", 21),
            _(29),
            se(30, "number"),
            u()(),
            c(31, "div", 22)(32, "span", 23),
            _(33, "\u062D\u062C\u0645:"),
            u(),
            c(34, "span", 24),
            _(35),
            se(36, "number"),
            u()()(),
            y(37, ko, 12, 4, "div", 17)(38, To, 13, 6, "div", 25)),
            t & 2) {
                let s, a, p, g, v, O, k, R, K, $, T, Z, E, H;
                l(3),
                b(n.isInCurrentWatchSymbols() ? 3 : 4),
                l(3),
                m("stateColor", (s = n.marketData()) == null ? null : s.stateColor),
                l(),
                ye("title", (a = n.symbol()) == null ? null : a.title),
                l(3),
                V(" ", (p = n.symbol()) == null ? null : p.symbolName, " "),
                l(),
                b((g = n.symbol()) != null && g.manner || (g = n.symbol()) != null && g.isCaution ? 11 : -1),
                l(2),
                xe((v = n.symbol()) == null ? null : v.title),
                l(2),
                m("ngClass", U(23, ur, (O = n.symbol()) == null ? null : O.canBuy)),
                l(),
                V(" ", he(17, 17, (k = n.marketData()) == null ? null : k.lastTradedPrice), " "),
                l(2),
                m("ngClass", Xi(25, _o, ((R = n.marketData()) == null ? null : R.lastTradedPriceVarPercent) < 0, ((R = n.marketData()) == null ? null : R.lastTradedPriceVarPercent) > 0)),
                l(2),
                b(((K = n.marketData()) == null ? null : K.totalNumberOfSharesTraded) === 0 ? 20 : 21),
                l(6),
                m("ngClass", en(28, bo, ($ = n.symbol()) == null ? null : $.canBuy, (($ = n.marketData()) == null ? null : $.closingPriceVarPercent) < 0, (($ = n.marketData()) == null ? null : $.closingPriceVarPercent) > 0)),
                l(),
                V(" (", ((T = n.marketData()) == null ? null : T.totalNumberOfSharesTraded) > 0 ? (T = n.marketData()) == null ? null : T.closingPriceVarPercent : 0, "%) "),
                l(),
                m("ngClass", U(32, ur, (Z = n.symbol()) == null ? null : Z.canBuy)),
                l(),
                V(" ", he(30, 19, (E = n.marketData()) == null ? null : E.closingPrice), " "),
                l(6),
                xe(he(36, 21, (H = n.marketData()) == null ? null : H.totalNumberOfSharesTraded)),
                l(2),
                b(n.showNAVvalues() ? 37 : -1),
                l(),
                b(n.optionSymbolDetails() ? 38 : -1)
            }
        },
        dependencies: [q, kt, wt, yn, z, Ze],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = r;
    return i
}
)();
var mr = vr(yr());
var Pl = ( () => {
    let r = class r {
        constructor() {
            this.marketWatchStoreFacade = D(Ae),
            this.marketWatchFacade = D(jt),
            this.noteFacadeService = D(fe),
            this.conditionService = D(de),
            this.orderService = D(De),
            this.layoutService = D(Fn),
            this.popupService = D(Ye),
            this.router = D(le),
            this.symbolService = D(Ft),
            this.loading = new Je(!0),
            this.loading$ = this.loading.asObservable(),
            this.reload = new re,
            this.reload$ = this.reload.asObservable(),
            this._showFilter = new Je(!1),
            this.showFilter$ = this._showFilter.asObservable(),
            this.initial = {
                type: $n.None,
                item: void 0
            },
            this.selectedItem = new Je(this.initial),
            this.selectedItem$ = this.selectedItem.asObservable(),
            this.isColumnActive = new re,
            this.isColumnActive$ = this.isColumnActive.asObservable(),
            this.showColumnIcon = new re,
            this.showColumnIcon$ = this.showColumnIcon.asObservable(),
            this.columnStates = new Je([]),
            this.columnStates$ = this.columnStates.asObservable(),
            this.updateColumnState = e => this.columnStates.next(e),
            this.columnVisibility = new re,
            this.columnVisibility$ = this.columnVisibility.asObservable(),
            this.columnPinability = new re,
            this.columnPinability$ = this.columnPinability.asObservable(),
            this.columnStatesReset = new re,
            this.columnStatesReset$ = this.columnStatesReset.asObservable()
        }
        setOrToggleShowFilter(e) {
            this._showFilter.next(e ?? !this._showFilter.value)
        }
        restoreCustomRowSort(e, t, n) {
            if (e?.getColumnState()?.every(a => a.sort === null) && n[t]) {
                let a = n[t]
                  , p = Array.from(new Set(a))
                  , g = this.gridItems(e)
                  , v = p.map(k => {
                    let R = e?.getRowNode(k);
                    if (R?.data)
                        return R.data
                }
                ).filter(Boolean)
                  , O = g.filter(k => !v.map(R => R.symbolIsin).includes(k.symbolIsin));
                v.push(...O),
                mr.default.isEqual(g, v) || (e?.applyTransactionAsync({
                    remove: g
                }),
                e?.applyTransactionAsync({
                    add: v
                }))
            }
        }
        gridItems(e) {
            let t = [];
            return e?.forEachNode(n => {
                let s = n?.data;
                t.push(s)
            }
            ),
            t.filter(Boolean)
        }
        categoryMenu(e) {
            return this.marketWatchStoreFacade.getCategoriesAsArray().map(n => ({
                name: n.name,
                checked: n.categorySymbolIsins.includes(e),
                action: () => {
                    n.categorySymbolIsins.includes(e) ? this.marketWatchFacade.removeSymbolsFromCategory(n.id, [e]) : this.marketWatchFacade.addSymbolToCategory(n.id, e)
                }
            }))
        }
        contextMenu(e, t, n=void 0) {
            let {symbolIsin: s, symbolName: a, canBuy: p, canSell: g, asset: v=0, liquidAsset: O=0} = e?.data || {}
              , k = this.noteFacadeService.hasNote(s)
              , R = this.conditionService.getStockConditionFigureClass(s)
              , K = this.categoryMenu(s)
              , $ = {
                name: "\u062E\u0631\u06CC\u062F",
                action: () => {
                    p && this.orderService.updateOrderFromMarketDepthState({
                        isin: s,
                        side: ue.BUY,
                        type: 5
                    })
                }
                ,
                icon: `<svg class="${p ? " text-success " : " text-muted"} "
	 				width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9562 2L11 2H13L13.0438 2C14.4068 1.99999 15.4908 1.99999 16.3654 2.07144C17.261 2.14462 18.0247 2.29768 18.7239 2.65396C19.8529 3.2292 20.7708 4.14708 21.346 5.27606C21.7023 5.9753 21.8554 6.73898 21.9286 7.63458C22 8.50914 22 9.59313 22 10.9561V10.9562V11V13.0001V13.0439V13.044C22 14.407 22 15.491 21.9286 16.3655C21.8554 17.2611 21.7023 18.0248 21.346 18.7241C20.7708 19.853 19.8529 20.7709 18.7239 21.3462C18.0247 21.7024 17.261 21.8555 16.3654 21.9287C15.4909 22.0001 14.4069 22.0001 13.0439 22.0001H13.0438H13H11H10.9562H10.9561C9.59313 22.0001 8.50914 22.0001 7.63458 21.9287C6.73898 21.8555 5.9753 21.7024 5.27606 21.3462C4.14708 20.7709 3.2292 19.853 2.65396 18.7241C2.29768 18.0248 2.14462 17.2611 2.07144 16.3655C1.99999 15.491 1.99999 14.4069 2 13.0439L2 13.0001V11L2 10.9562C1.99999 9.5932 1.99999 8.50917 2.07144 7.63458C2.14462 6.73898 2.29768 5.9753 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C5.9753 2.29768 6.73898 2.14462 7.63458 2.07144C8.50917 1.99999 9.5932 1.99999 10.9562 2ZM13 8.00007C13 7.44778 12.5524 7.00004 12.0001 7C11.4478 6.99996 11 7.44764 11 7.99993L10.9998 11L8.00001 11C7.44773 11 7.00001 11.4477 7 12C6.99999 12.5523 7.4477 13 7.99998 13L10.9998 13L11 16.0001C11 16.5524 11.4478 17 12.0001 17C12.5524 17 13 16.5522 13 15.9999L12.9998 13L16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11L12.9998 11L13 8.00007Z" fill="currentColor"></path>
					</svg>`,
                cssClasses: [p ? "text-start" : "text-muted", "bold"]
            }
              , T = {
                name: [t].includes(Ie.Portfolio) ? "\u0641\u0631\u0648\u0634 \u06A9\u0644 \u062F\u0627\u0631\u0627\u06CC\u06CC" : "\u0641\u0631\u0648\u0634",
                action: () => {
                    g && this.orderService.updateOrderFromMarketDepthState({
                        isin: s,
                        side: ue.SELL,
                        quantity: t === Ie.Portfolio ? v : O,
                        type: 5
                    })
                }
                ,
                icon: `<svg class="${g ? "  text-danger " : " text-muted"}" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9562 2H11H13H13.0438H13.0438C14.4068 1.99999 15.4908 1.99999 16.3654 2.07144C17.261 2.14462 18.0247 2.29768 18.7239 2.65396C19.8529 3.2292 20.7708 4.14708 21.346 5.27606C21.7023 5.9753 21.8554 6.73898 21.9286 7.63458C22 8.50914 22 9.59313 22 10.9561V10.9562V11V13.0001V13.0439V13.044C22 14.407 22 15.491 21.9286 16.3655C21.8554 17.2611 21.7023 18.0248 21.346 18.7241C20.7708 19.853 19.8529 20.7709 18.7239 21.3462C18.0247 21.7024 17.261 21.8555 16.3654 21.9287C15.4909 22.0001 14.4069 22.0001 13.0439 22.0001H13.0438H13H11H10.9562H10.9561C9.59313 22.0001 8.50914 22.0001 7.63458 21.9287C6.73898 21.8555 5.9753 21.7024 5.27606 21.3462C4.14708 20.7709 3.2292 19.853 2.65396 18.7241C2.29768 18.0248 2.14462 17.2611 2.07144 16.3655C1.99999 15.491 1.99999 14.4069 2 13.0439V13.0439V13.0001V11V10.9562V10.9562C1.99999 9.59319 1.99999 8.50917 2.07144 7.63458C2.14462 6.73898 2.29768 5.9753 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C5.9753 2.29768 6.73898 2.14462 7.63458 2.07144C8.50917 1.99999 9.59319 1.99999 10.9562 2H10.9562ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z" fill="currentColor"></path>
					</svg>`,
                cssClasses: [g ? "text-start" : "text-muted", "bold"]
            }
              , Z = {
                name: "\u0639\u0645\u0642 \u0628\u0627\u0632\u0627\u0631",
                action: () => {
                    this.popupService.openPopup({
                        isin: s,
                        name: a,
                        side: ot.Sell,
                        canBuy: p,
                        canSell: g
                    })
                }
                ,
                icon: `<svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C12.5523 1 13 1.44772 13 2V2.49688C13 2.49792 13 2.49896 13 2.5V21.5C13 21.501 13 21.5021 13 21.5031V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H6.4H6.36392H6.3639H6.36388H6.36386C5.97479 21 5.62468 21 5.33338 20.9762C5.02141 20.9508 4.68993 20.8931 4.36503 20.7275C3.89462 20.4878 3.51217 20.1054 3.27249 19.635C3.10694 19.3101 3.04925 18.9786 3.02376 18.6666C2.99996 18.3753 2.99998 18.0252 3 17.6361L3.00001 17.6V17.4L3 17.3639C2.99998 16.9748 2.99996 16.6247 3.02376 16.3334C3.03408 16.2071 3.04966 16.0777 3.07553 15.9469C2.84193 15.9115 2.60173 15.8481 2.36503 15.7275C1.89462 15.4878 1.51217 15.1054 1.27249 14.635C1.10694 14.3101 1.04925 13.9786 1.02376 13.6666C0.999964 13.3753 0.999981 13.0253 1 12.6362V12.6362V12.6361L1.00001 12.6V11.4L1 11.3639V11.3638V11.3638C0.999981 10.9747 0.999964 10.6247 1.02376 10.3334C1.04925 10.0214 1.10694 9.68993 1.27249 9.36502C1.51217 8.89462 1.89462 8.51217 2.36503 8.27248C2.68993 8.10694 3.02141 8.04925 3.33338 8.02376C3.62469 7.99996 3.97483 7.99998 4.36392 8L4.40001 8H6.06556C6.04553 7.88723 6.03268 7.77574 6.02376 7.66663C5.99996 7.37531 5.99998 7.02518 6 6.63609L6.00001 6.6V6.4L6 6.36391C5.99998 5.97482 5.99996 5.62469 6.02376 5.33337C6.04925 5.0214 6.10694 4.68993 6.27249 4.36502C6.51217 3.89462 6.89462 3.51217 7.36503 3.27248C7.68993 3.10694 8.02141 3.04925 8.33338 3.02376C8.62469 2.99996 8.97483 2.99998 9.36392 3L9.40001 3H11V2C11 1.44772 11.4477 1 12 1ZM15 21H19.6H19.6361H19.6361H19.6361H19.6361C20.0252 21 20.3753 21 20.6666 20.9762C20.9786 20.9508 21.3101 20.8931 21.635 20.7275C22.1054 20.4878 22.4878 20.1054 22.7275 19.635C22.8931 19.3101 22.9508 18.9786 22.9762 18.6666C23 18.3753 23 18.0252 23 17.6361V17.6V17.4V17.3639C23 16.9748 23 16.6247 22.9762 16.3334C22.9508 16.0214 22.8931 15.6899 22.7275 15.365C22.4878 14.8946 22.1054 14.5122 21.635 14.2725C21.3101 14.1069 20.9786 14.0492 20.6666 14.0238C20.3753 14 20.0252 14 19.6361 14L19.6 14H18.9345C18.9545 13.8872 18.9673 13.7757 18.9762 13.6666C19 13.3753 19 13.0252 19 12.6362V12.6362V12.6361V12.6361V12.6361V12.6V11.4V11.3639V11.3639V11.3639V11.3638V11.3638C19 10.9748 19 10.6247 18.9762 10.3334C18.9659 10.2071 18.9503 10.0777 18.9245 9.94685C19.1581 9.91148 19.3983 9.84812 19.635 9.72752C20.1054 9.48783 20.4878 9.10538 20.7275 8.63498C20.8931 8.31007 20.9508 7.9786 20.9762 7.66663C21 7.37531 21 7.02517 21 6.63607V6.6V6.4V6.36393C21 5.97483 21 5.62469 20.9762 5.33337C20.9508 5.0214 20.8931 4.68993 20.7275 4.36502C20.4878 3.89462 20.1054 3.51217 19.635 3.27248C19.3101 3.10694 18.9786 3.04925 18.6666 3.02376C18.3753 2.99996 18.0252 2.99998 17.6361 3L17.6 3H15V5H17.6C18.0365 5 18.3038 5.00078 18.5038 5.01712C18.5969 5.02473 18.6533 5.03429 18.6875 5.04235C18.7038 5.04618 18.7138 5.04939 18.7192 5.05133L18.7252 5.05368L18.727 5.0545C18.8211 5.10243 18.8976 5.17892 18.9455 5.273C18.9457 5.27341 18.9468 5.27559 18.9487 5.28079C18.9506 5.2862 18.9538 5.29622 18.9577 5.3125C18.9657 5.34673 18.9753 5.40308 18.9829 5.49623C18.9992 5.6962 19 5.96346 19 6.4V6.6C19 7.03654 18.9992 7.3038 18.9829 7.50377C18.9753 7.59692 18.9657 7.65327 18.9577 7.6875C18.9538 7.70378 18.9506 7.7138 18.9487 7.71921C18.9468 7.72441 18.9457 7.72659 18.9455 7.72699C18.8976 7.82108 18.8211 7.89757 18.727 7.9455L18.7246 7.94661L18.7192 7.94867C18.7138 7.95061 18.7038 7.95382 18.6875 7.95765C18.6533 7.96571 18.5969 7.97527 18.5038 7.98288C18.3038 7.99922 18.0365 8 17.6 8H15.7074L15.6361 8L15.6 8H15V10H15.6C16.0365 10 16.3038 10.0008 16.5038 10.0171C16.5969 10.0247 16.6533 10.0343 16.6875 10.0423C16.7038 10.0462 16.7138 10.0494 16.7192 10.0513L16.7253 10.0537L16.727 10.0545C16.8211 10.1024 16.8976 10.1789 16.9455 10.273L16.9466 10.2755L16.9487 10.2808C16.9506 10.2862 16.9538 10.2962 16.9577 10.3125C16.9657 10.3467 16.9753 10.4031 16.9829 10.4962C16.9992 10.6962 17 10.9635 17 11.4V12.6C17 13.0365 16.9992 13.3038 16.9829 13.5038C16.9753 13.5969 16.9657 13.6533 16.9577 13.6875C16.9538 13.7038 16.9506 13.7138 16.9487 13.7192C16.9468 13.7244 16.9457 13.7266 16.9455 13.727C16.8976 13.8211 16.8211 13.8976 16.727 13.9455C16.7268 13.9456 16.7261 13.946 16.7247 13.9465C16.7235 13.9471 16.7217 13.9478 16.7192 13.9487C16.7138 13.9506 16.7038 13.9538 16.6875 13.9577C16.6533 13.9657 16.5969 13.9753 16.5038 13.9829C16.3038 13.9992 16.0365 14 15.6 14H15V16H15.6L15.6361 16L15.7051 16H19.6C20.0365 16 20.3038 16.0008 20.5038 16.0171C20.5969 16.0247 20.6533 16.0343 20.6875 16.0423C20.7038 16.0462 20.7138 16.0494 20.7192 16.0513C20.7244 16.0532 20.7266 16.0543 20.727 16.0545C20.8211 16.1024 20.8976 16.1789 20.9455 16.273C20.9457 16.2734 20.9468 16.2756 20.9487 16.2808C20.9506 16.2862 20.9538 16.2962 20.9577 16.3125C20.9657 16.3467 20.9753 16.4031 20.9829 16.4962C20.9992 16.6962 21 16.9635 21 17.4V17.6C21 18.0365 20.9992 18.3038 20.9829 18.5038C20.9753 18.5969 20.9657 18.6533 20.9577 18.6875C20.9557 18.6959 20.9539 18.7026 20.9523 18.7079C20.9509 18.7129 20.9496 18.7166 20.9487 18.7192C20.9468 18.7244 20.9457 18.7266 20.9455 18.727C20.8976 18.8211 20.8211 18.8976 20.727 18.9455L20.7251 18.9464L20.7192 18.9487C20.7138 18.9506 20.7038 18.9538 20.6875 18.9577C20.6533 18.9657 20.5969 18.9753 20.5038 18.9829C20.3038 18.9992 20.0365 19 19.6 19H15V21ZM9.40001 5H11V8H9.4C8.96346 8 8.6962 7.99922 8.49624 7.98288C8.40309 7.97527 8.34673 7.96571 8.3125 7.95765C8.29622 7.95382 8.28621 7.95061 8.28079 7.94867C8.27559 7.94682 8.27341 7.94571 8.27301 7.9455C8.17893 7.89757 8.10244 7.82108 8.0545 7.72699C8.0543 7.72659 8.05319 7.72441 8.05133 7.71921C8.0494 7.7138 8.04619 7.70378 8.04235 7.6875C8.03429 7.65327 8.02473 7.59692 8.01712 7.50377C8.00078 7.3038 8.00001 7.03654 8.00001 6.6V6.4C8.00001 5.96346 8.00078 5.6962 8.01712 5.49623C8.02473 5.40308 8.03429 5.34673 8.04235 5.3125C8.04619 5.29622 8.0494 5.2862 8.05133 5.28079C8.05319 5.27559 8.0543 5.27341 8.0545 5.273C8.10244 5.17892 8.17893 5.10243 8.27301 5.0545C8.27341 5.05429 8.27559 5.05318 8.28079 5.05133C8.28621 5.04939 8.29622 5.04618 8.3125 5.04235C8.34673 5.03429 8.40309 5.02473 8.49624 5.01712C8.6962 5.00078 8.96347 5 9.40001 5ZM9.4 10H11V14H6.40001L6.36392 14H6.3639L6.29045 14H4.4C3.96346 14 3.6962 13.9992 3.49624 13.9829C3.40309 13.9753 3.34673 13.9657 3.3125 13.9577C3.29622 13.9538 3.28621 13.9506 3.28079 13.9487C3.27559 13.9468 3.27341 13.9457 3.27301 13.9455C3.17893 13.8976 3.10244 13.8211 3.0545 13.727L3.05375 13.7254L3.05133 13.7192C3.0494 13.7138 3.04618 13.7038 3.04235 13.6875C3.03429 13.6533 3.02473 13.5969 3.01712 13.5038C3.00078 13.3038 3.00001 13.0365 3.00001 12.6V11.4C3.00001 10.9635 3.00078 10.6962 3.01712 10.4962C3.02473 10.4031 3.03429 10.3467 3.04235 10.3125C3.04618 10.2962 3.0494 10.2862 3.05133 10.2808L3.05368 10.2748L3.0545 10.273C3.10244 10.1789 3.17893 10.1024 3.27301 10.0545C3.27341 10.0543 3.27559 10.0532 3.28079 10.0513C3.28621 10.0494 3.29622 10.0462 3.3125 10.0423C3.34673 10.0343 3.40309 10.0247 3.49624 10.0171C3.6962 10.0008 3.96346 10 4.40001 10H9.29494L9.36392 10L9.4 10ZM6.40001 16H11V19H6.4C5.96346 19 5.6962 18.9992 5.49624 18.9829C5.40309 18.9753 5.34673 18.9657 5.3125 18.9577C5.29622 18.9538 5.28621 18.9506 5.28079 18.9487C5.27559 18.9468 5.27341 18.9457 5.27301 18.9455C5.17893 18.8976 5.10244 18.8211 5.0545 18.727C5.0543 18.7266 5.05319 18.7244 5.05133 18.7192C5.0494 18.7138 5.04619 18.7038 5.04235 18.6875C5.03429 18.6533 5.02473 18.5969 5.01712 18.5038C5.00078 18.3038 5.00001 18.0365 5.00001 17.6V17.4C5.00001 16.9635 5.00078 16.6962 5.01712 16.4962C5.02473 16.4031 5.03429 16.3467 5.04235 16.3125C5.04619 16.2962 5.0494 16.2862 5.05133 16.2808C5.05319 16.2756 5.0543 16.2734 5.0545 16.273C5.10244 16.1789 5.17893 16.1024 5.27301 16.0545C5.27341 16.0543 5.27559 16.0532 5.28079 16.0513C5.28621 16.0494 5.29622 16.0462 5.3125 16.0423C5.34673 16.0343 5.40309 16.0247 5.49624 16.0171C5.6962 16.0008 5.96347 16 6.40001 16Z" fill="currentColor"></path>
					</svg>`
            }
              , E = {
                name: "\u0627\u06CC\u0632\u06CC\u200C\u0686\u0627\u0631\u062A",
                action: () => {
                    this.router.navigate([]).then( () => {
                        window.open("/easy-chart/" + s, "_blank")
                    }
                    )
                }
                ,
                icon: `<svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5682 2L18.6001 2.00001H19.4001L19.432 2C19.6844 1.99997 19.9302 1.99994 20.1383 2.01695C20.3669 2.03563 20.6366 2.07969 20.9081 2.21799C21.2844 2.40974 21.5904 2.7157 21.7821 3.09202C21.9204 3.36345 21.9645 3.63318 21.9831 3.86178C22.0002 4.06993 22.0001 4.31572 22.0001 4.56811L22.0001 4.60001V5.40001L22.0001 5.4319C22.0001 5.68429 22.0002 5.93008 21.9831 6.13824C21.9645 6.36683 21.9204 6.63656 21.7821 6.90799C21.5904 7.28431 21.2844 7.59027 20.9081 7.78202C20.6366 7.92032 20.3669 7.96438 20.1383 7.98306C19.9302 8.00007 19.6844 8.00004 19.432 8.00001L19.4001 8.00001H18.6001L18.5682 8.00001C18.4045 8.00003 18.2437 8.00005 18.094 7.99542L14.7244 14.125C14.7154 14.1413 14.706 14.1574 14.6961 14.1732L14.6792 14.2003L14.6792 14.2003L14.6791 14.2004C14.5454 14.4144 14.4152 14.6228 14.2905 14.7903C14.1535 14.9742 13.9731 15.1796 13.712 15.3365C13.35 15.554 12.9283 15.6513 12.5076 15.6144C12.2041 15.5878 11.952 15.4822 11.7483 15.3769C11.5628 15.281 11.3543 15.1507 11.1403 15.0169L11.1403 15.0169L11.1133 15L9.6537 14.0878C9.43098 13.9486 9.31125 13.8746 9.22115 13.8274L9.2118 13.8226L9.20442 13.8301C9.13509 13.9014 9.04685 14.006 8.88567 14.1994L5.23795 18.8934C5.51735 19.1601 5.83562 19.3866 6.18404 19.5641C6.55435 19.7528 7.02552 19.8723 7.79744 19.9353C8.58104 19.9993 9.58337 20.0001 11 20.0001H12C13.4166 20.0001 14.419 19.9993 15.2026 19.9353C15.9745 19.8723 16.4457 19.7528 16.816 19.5641C17.5686 19.1807 18.1805 18.5687 18.564 17.8161C18.7527 17.4458 18.8721 16.9746 18.9352 16.2027C18.9992 15.4191 19 14.4168 19 13.0001V11C19 10.4477 19.4477 10 20 10C20.5523 10 21 10.4477 21 11V13.0001V13.0439V13.044C21 14.407 21 15.491 20.9286 16.3655C20.8554 17.2611 20.7023 18.0248 20.346 18.7241C19.7708 19.853 18.8529 20.7709 17.7239 21.3462C17.0247 21.7024 16.261 21.8555 15.3654 21.9287C14.4909 22.0001 13.4069 22.0001 12.0439 22.0001H12.0438H12H11H10.9562H10.9561C9.59313 22.0001 8.50914 22.0001 7.63458 21.9287C6.73898 21.8555 5.9753 21.7024 5.27606 21.3462C4.42909 20.9146 3.70093 20.2902 3.14712 19.5285C3.13855 19.5172 3.13026 19.5057 3.12222 19.494C2.94784 19.2506 2.79115 18.9933 2.65396 18.7241C2.29768 18.0248 2.14462 17.2611 2.07144 16.3655C1.99999 15.491 1.99999 14.4069 2 13.0439L2 13.0001V12L2 11.9562C1.99999 10.5932 1.99999 9.50917 2.07144 8.63458C2.14462 7.73898 2.29768 6.9753 2.65396 6.27606C3.2292 5.14708 4.14708 4.2292 5.27606 3.65396C5.9753 3.29768 6.73898 3.14462 7.63458 3.07144C8.50917 2.99999 9.5932 2.99999 10.9562 3L11 3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H11C9.58337 5 8.58104 5.00078 7.79744 5.0648C7.02552 5.12787 6.55435 5.24729 6.18404 5.43597C5.43139 5.81947 4.81947 6.43139 4.43597 7.18404C4.24729 7.55435 4.12787 8.02552 4.0648 8.79744C4.00078 9.58104 4 10.5834 4 12V13.0001C4 14.4168 4.00078 15.4191 4.0648 16.2027C4.09041 16.5162 4.12532 16.7801 4.17039 17.0078L7.31693 12.9587C7.32391 12.9497 7.33104 12.9408 7.33832 12.9321L7.3569 12.9098C7.4991 12.7391 7.63943 12.5707 7.77049 12.4359C7.91597 12.2863 8.10003 12.1241 8.34774 12.0057C8.69533 11.8397 9.08349 11.7775 9.46555 11.8268C9.73781 11.8619 9.96331 11.9585 10.1482 12.0553C10.3148 12.1424 10.5007 12.2586 10.6891 12.3764L10.6891 12.3764L10.7137 12.3918L12.1733 13.304C12.4247 13.4612 12.5627 13.5465 12.6667 13.6002L12.6784 13.6063L12.6864 13.5957C12.754 13.5049 12.8374 13.3734 12.9853 13.1369L16.3158 7.07852C16.2806 7.02349 16.2479 6.96659 16.2181 6.90799C16.0798 6.63656 16.0357 6.36683 16.017 6.13824C16 5.93009 16.0001 5.68431 16.0001 5.43194V5.4319L16.0001 5.40001V4.60001L16.0001 4.56811V4.56807C16.0001 4.3157 16 4.06992 16.017 3.86178C16.0357 3.63318 16.0798 3.36345 16.2181 3.09202C16.4098 2.7157 16.7158 2.40974 17.0921 2.21799C17.3635 2.07969 17.6333 2.03563 17.8619 2.01695C18.07 1.99994 18.3158 1.99997 18.5682 2L18.5682 2ZM18.0115 4.01145L18.0104 4.02464C18.0009 4.14122 18.0001 4.30348 18.0001 4.60001V5.40001C18.0001 5.69653 18.0009 5.85879 18.0104 5.97537L18.0115 5.98856L18.0247 5.9897C18.1413 5.99923 18.3036 6.00001 18.6001 6.00001H19.4001C19.6966 6.00001 19.8589 5.99923 19.9755 5.9897L19.9886 5.98856L19.9898 5.97537C19.9993 5.85879 20.0001 5.69653 20.0001 5.40001V4.60001C20.0001 4.30348 19.9993 4.14122 19.9898 4.02464L19.9886 4.01145L19.9755 4.01031C19.8589 4.00078 19.6966 4.00001 19.4001 4.00001H18.6001C18.3036 4.00001 18.1413 4.00078 18.0247 4.01031L18.0115 4.01145Z" fill="currentColor"></path>
						</svg>`,
                cssClasses: [[Ie.Portfolio, Ie.Realtime].includes(t) ? "portfolio-contexmenu-chart-opener" : t === Ie.MarketWatch ? "market-watch-contexmenu-chart-opener" : t === Ie.EasyFilter ? "easy-filter-contexmenu-chart-opener" : "no-type"]
            }
              , H = {
                name: "\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646",
                subMenu: K,
                icon: `<svg class="text-secondary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7436 2.1615C12.2741 1.93314 11.7258 1.93314 11.2563 2.1615C10.9949 2.28865 10.8158 2.47493 10.6964 2.61481C10.5848 2.74555 10.4654 2.90979 10.3481 3.07113L10.3481 3.07115L10.331 3.09464L9.61017 4.08584C9.25555 4.57344 9.10093 4.7854 8.94075 4.98089C7.86804 6.29013 6.44788 7.27034 4.8433 7.809C4.60371 7.88943 4.35069 7.95883 3.76902 8.11747L3.72401 8.12968C3.57399 8.1703 3.39543 8.21864 3.24585 8.28649C2.25318 8.73675 1.80386 9.89897 2.2355 10.8999C2.30054 11.0507 2.40014 11.2066 2.48382 11.3375L2.50892 11.3769L2.84095 11.8986C3.60071 13.0925 3.9292 13.6127 4.17896 14.1567C4.54785 14.9601 4.79636 15.8135 4.91647 16.6893C4.9978 17.2823 4.99993 17.8975 4.99993 19.3127L4.99993 19.3442C4.99991 19.6335 4.99989 19.9024 5.0161 20.1243C5.03296 20.355 5.07256 20.6444 5.21611 20.9275C5.52815 21.5429 6.13538 21.954 6.82267 22.0152C7.13887 22.0433 7.42223 21.9726 7.64274 21.9026C7.85475 21.8353 8.10442 21.7354 8.37296 21.6279L8.4023 21.6162L10.3716 20.8285C10.8843 20.6234 11.1338 20.0414 10.9286 19.5286C10.7235 19.0158 10.1416 18.7664 9.62878 18.9715L7.65951 19.7592C7.35152 19.8824 7.17092 19.954 7.03728 19.9964L7.01284 20.004L7.01078 19.9785C7.00056 19.8386 6.99993 19.6444 6.99993 19.3127L6.99993 19.2324C6.99997 17.9197 6.99999 17.1619 6.89793 16.4176C6.75112 15.3471 6.44739 14.3041 5.99652 13.3221C5.68306 12.6394 5.27615 12 4.5714 10.8927L4.52828 10.8249L4.19624 10.3031C4.13771 10.2111 4.10408 10.1581 4.08043 10.1188L4.07452 10.1089L4.08557 10.1055C4.12954 10.0923 4.19008 10.0757 4.29525 10.047L4.32845 10.0379C4.86782 9.89085 5.17905 9.80597 5.47979 9.70501C7.44094 9.04666 9.1767 7.84862 10.4878 6.24844C10.6889 6.00304 10.8786 5.74214 11.2074 5.28997L11.2276 5.26218L11.9485 4.27098L11.9999 4.20034L12.0513 4.27098L12.6493 5.09322L12.6766 5.13071C13.1201 5.74056 13.376 6.09246 13.6538 6.41797C14.8994 7.87735 16.505 8.98556 18.3113 9.63258C18.7142 9.77689 19.1339 9.89137 19.8614 10.0898L19.9062 10.102C20.0267 10.1348 20.0938 10.1533 20.1424 10.1683L20.1521 10.1713L20.1487 10.1808C20.1313 10.2286 20.1056 10.2933 20.0592 10.4093L19.9715 10.6286C19.7664 11.1414 20.0158 11.7234 20.5286 11.9285C21.0414 12.1336 21.6233 11.8842 21.8284 11.3714L21.9162 11.1521L21.9356 11.1037L21.9356 11.1036C22.0024 10.9379 22.0832 10.7371 22.1202 10.5411C22.2867 9.66003 21.8464 8.77587 21.043 8.37777C20.8643 8.28922 20.6552 8.23271 20.4828 8.1861L20.4324 8.17244C19.6479 7.95847 19.3067 7.8647 18.9857 7.74973C17.5079 7.22035 16.1942 6.31363 15.1751 5.1196C14.9538 4.86028 14.7451 4.57453 14.2668 3.91687L13.6688 3.09464L13.6517 3.07117C13.5344 2.90982 13.415 2.74556 13.3034 2.61481C13.184 2.47493 13.0049 2.28865 12.7436 2.1615ZM12.2417 3.88682L12.2395 3.88899C12.2409 3.88747 12.2417 3.88679 12.2417 3.88682ZM11.7604 3.88899L11.7582 3.88682C11.7582 3.88679 11.7589 3.88747 11.7604 3.88899ZM18.9999 14.0001C19 13.4478 18.5523 13.0001 18 13C17.4477 13 17 13.4477 16.9999 14L16.9997 17.0001L13.9999 17C13.4477 17 12.9999 17.4477 12.9999 18C12.9999 18.5523 13.4476 19 13.9999 19L16.9997 19.0001L16.9999 22.0001C17 22.5524 17.4477 23.0001 18 23C18.5523 23 19 22.5523 18.9999 22L18.9997 19.0001L21.9999 19C22.5522 19 22.9999 18.5523 22.9999 18C22.9999 17.4477 22.5522 17 21.9999 17L18.9997 17.0001L18.9999 14.0001Z" fill="currentColor"></path>
					</svg>`
            }
              , G = {
                name: "\u06CC\u0627\u062F\u062F\u0627\u0634\u062A",
                action: () => {
                    this.layoutService.openNoteManagement(s)
                }
                ,
                icon: `<svg class="${k ? "text-violet" : "text-secondary"}"
			width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3416 7.31671C15.3897 7.22057 15.453 7.13282 15.529 7.05682L20.5449 2.04086C21.0735 1.51226 21.9305 1.51226 22.4591 2.04086C22.9877 2.56945 22.9877 3.42647 22.4591 3.95507L17.4432 8.97103C17.3672 9.04703 17.2794 9.11028 17.1833 9.15835L14.3587 10.5707C14.0971 10.7015 13.9663 10.7668 13.8908 10.7447C13.8256 10.7255 13.7745 10.6744 13.7553 10.6092C13.7332 10.5337 13.7985 10.4029 13.9293 10.1413L15.3416 7.31671ZM8 14.0001C7.44772 14.0001 7 13.5523 7 13.0001C7 12.4478 7.44772 12.0001 8 12.0001H11C11.5523 12.0001 12 12.4478 12 13.0001C12 13.5523 11.5523 14.0001 11 14.0001H8ZM8 18C7.44772 18 7 17.5523 7 17C7 16.4477 7.44772 16 8 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8ZM8.8 3.00011L8.7587 3.00011H8.7587C7.95373 3.0001 7.28937 3.00009 6.74818 3.04431C6.18608 3.09023 5.66937 3.1888 5.18404 3.43609C4.43139 3.81958 3.81947 4.4315 3.43598 5.18415C3.18868 5.66949 3.09012 6.18619 3.04419 6.74829C2.99998 7.28948 2.99999 7.95383 3 8.7588V8.75882V8.80011V16.2002V16.2415V16.2416C2.99999 17.0465 2.99998 17.7109 3.04419 18.2521C3.09012 18.8142 3.18868 19.3309 3.43598 19.8162C3.81947 20.5688 4.43139 21.1808 5.18404 21.5643C5.66937 21.8116 6.18608 21.9101 6.74818 21.956C7.28937 22.0003 7.95372 22.0003 8.75868 22.0002H8.8H15.2H15.2413C16.0463 22.0003 16.7106 22.0003 17.2518 21.956C17.8139 21.9101 18.3306 21.8116 18.816 21.5643C19.5686 21.1808 20.1805 20.5688 20.564 19.8162C20.8113 19.3309 20.9099 18.8142 20.9558 18.2521C21 17.7109 21 17.0465 21 16.2416V16.2002V11C21 10.4477 20.5523 9.99999 20 9.99999C19.4477 9.99999 19 10.4477 19 11V16.2002C19 17.0568 18.9992 17.6391 18.9624 18.0892C18.9266 18.5276 18.8617 18.7518 18.782 18.9082C18.5903 19.2845 18.2843 19.5905 17.908 19.7823C17.7516 19.8619 17.5274 19.9269 17.089 19.9627C16.6389 19.9995 16.0566 20.0002 15.2 20.0002H8.8C7.94342 20.0002 7.36113 19.9995 6.91104 19.9627C6.47262 19.9269 6.24842 19.8619 6.09202 19.7823C5.7157 19.5905 5.40974 19.2845 5.21799 18.9082C5.1383 18.7518 5.07337 18.5276 5.03755 18.0892C5.00078 17.6391 5 17.0568 5 16.2002V8.80011C5 7.94353 5.00078 7.36124 5.03755 6.91115C5.07337 6.47274 5.1383 6.24853 5.21799 6.09213C5.40974 5.71581 5.7157 5.40985 6.09202 5.2181C6.24842 5.13841 6.47262 5.07349 6.91104 5.03767C7.36113 5.00089 7.94342 5.00011 8.8 5.00011H14C14.5523 5.00011 15 4.5524 15 4.00011C15 3.44783 14.5523 3.00011 14 3.00011H8.8Z" fill="currentColor"></path>
			</svg>`
            }
              , be = {
                name: "\u0647\u0634\u062F\u0627\u0631 \u062F\u0631\u0648\u0646 \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0627\u06CC",
                action: () => {
                    this.layoutService.openConditionalTools(s)
                }
                ,
                icon: `<svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0248 1.5C12.5771 1.5 13.0248 1.94772 13.0248 2.5C13.0248 3.92383 11.8829 4.87531 10.7867 5.15449C8.76333 5.66981 7.21844 7.421 7.03778 9.58869C7.0357 9.61359 7.03269 9.63839 7.02876 9.66306L6.68522 11.8182C6.54413 13.453 6.09482 15.0464 5.36092 16.5142L5.118 17H11.5041L11.568 17H11.5681L11.6 17H12H12.4L12.4319 17H12.4319L12.4959 17H18.8998L18.6364 16.4598C18.4599 16.0979 18.3007 15.7286 18.1589 15.3532C17.9639 14.8365 18.2247 14.2595 18.7414 14.0644C19.2581 13.8694 19.835 14.1301 20.0301 14.6468C20.15 14.9646 20.2848 15.277 20.4341 15.5833L20.8377 16.4111L20.8515 16.4393C20.9323 16.605 21.0201 16.7848 21.0802 16.9434C21.1435 17.1102 21.2342 17.394 21.1822 17.7296C21.1194 18.1353 20.893 18.4975 20.5559 18.7317C20.277 18.9256 19.9822 18.9684 19.8046 18.9847C19.6357 19.0001 19.4356 19.0001 19.2513 19H19.2513L19.2198 19H14.9918C15 19.1752 15 19.3696 15 19.568V19.5681V19.5681L15 19.6V20.4L15 20.4319V20.4319C15 20.6843 15 20.9301 14.983 21.1382C14.9643 21.3668 14.9203 21.6366 14.782 21.908C14.5902 22.2843 14.2843 22.5903 13.9079 22.782C13.6365 22.9203 13.3668 22.9644 13.1382 22.9831C12.9301 23.0001 12.6843 23 12.4319 23H12.4319H12.4319L12.4 23H11.6L11.5681 23H11.568H11.568C11.3156 23 11.0699 23.0001 10.8617 22.9831C10.6331 22.9644 10.3634 22.9203 10.092 22.782C9.71566 22.5903 9.4097 22.2843 9.21796 21.908C9.07966 21.6366 9.03559 21.3668 9.01691 21.1382C8.99991 20.9301 8.99994 20.6843 8.99997 20.4319V20.4319L8.99997 20.4V19.6L8.99997 19.5681V19.5681C8.99994 19.3696 8.99992 19.1752 9.00818 19H4.7944L4.76276 19H4.7627C4.57651 19.0001 4.37489 19.0001 4.20493 18.9846C4.02672 18.9682 3.72952 18.9252 3.44927 18.7292C3.11117 18.4927 2.8854 18.1274 2.82509 17.7192C2.77511 17.3809 2.86951 17.0959 2.93463 16.9292C2.99673 16.7702 3.08696 16.5898 3.17029 16.4233L3.18443 16.395L3.57206 15.6197C4.19788 14.3681 4.57913 13.0085 4.69536 11.614C4.69743 11.5891 4.70044 11.5643 4.70437 11.5396L5.04802 9.38383C5.3162 6.36525 7.4737 3.93442 10.2931 3.21636C10.8026 3.08661 11.0248 2.73306 11.0248 2.5C11.0248 1.94772 11.4725 1.5 12.0248 1.5ZM12 19H12.4C12.6965 19 12.8587 19.0008 12.9753 19.0103L12.9885 19.0114L12.9897 19.0246C12.9992 19.1412 13 19.3035 13 19.6V20.4C13 20.6965 12.9992 20.8588 12.9897 20.9754L12.9885 20.9886L12.9753 20.9897C12.8587 20.9992 12.6965 21 12.4 21H11.6C11.3034 21 11.1412 20.9992 11.0246 20.9897L11.0114 20.9886L11.0103 20.9754C11.0007 20.8588 11 20.6965 11 20.4V19.6C11 19.3035 11.0007 19.1412 11.0103 19.0246L11.0114 19.0114L11.0246 19.0103C11.1412 19.0008 11.3034 19 11.6 19H12ZM19 3.00007C19 2.44778 18.5523 2.00004 18 2C17.4478 1.99996 17 2.44765 17 2.99993L16.9998 6.00005L14 6C13.4477 5.99999 13 6.4477 13 6.99998C13 7.55227 13.4477 7.99999 14 8L16.9998 8.00005L17 11.0001C17 11.5524 17.4478 12 18 12C18.5523 12 19 11.5522 19 10.9999L18.9998 8.00005L22 8C22.5523 7.99999 23 7.55227 23 6.99998C23 6.4477 22.5522 5.99999 22 6L18.9998 6.00005L19 3.00007Z" fill="currentColor"></path>
						</svg>`
            }
              , Oe = {
                name: "\u06A9\u062F\u0627\u0644",
                action: () => {
                    At(a)
                }
                ,
                icon: `<svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1144 4.00668C12.663 4.06999 13.0565 4.56607 12.9932 5.11472L11.4932 18.1147C11.4299 18.6634 10.9338 19.0568 10.3851 18.9935C9.83649 18.9302 9.44304 18.4341 9.50635 17.8855L11.0063 4.88547C11.0697 4.33682 11.5657 3.94338 12.1144 4.00668ZM8.62696 4.0083C9.17478 4.07842 9.56203 4.57935 9.49191 5.12717L7.85319 17.9296L7.84354 18.0054C7.79911 18.3545 7.76065 18.6568 7.67306 18.9266C7.33445 19.9695 6.4538 20.7447 5.37631 20.9481C5.0976 21.0007 4.79284 21.0005 4.44086 21.0002L4.36451 21.0002L4.26579 21.0003C3.82538 21.0007 3.44855 21.001 3.12203 20.9281C1.84976 20.6439 0.906621 19.5706 0.788362 18.2723C0.758012 17.9392 0.806788 17.5655 0.863793 17.1288L0.876541 17.0309L1.67496 10.8716C1.74596 10.3239 2.24752 9.9375 2.79522 10.0085C3.34292 10.0795 3.72937 10.5811 3.65837 11.1288L2.85995 17.288C2.78336 17.8788 2.77268 18.0093 2.78012 18.0909C2.81954 18.5237 3.13391 18.8814 3.55801 18.9762C3.63802 18.994 3.76877 19.0002 4.36451 19.0002C4.83641 19.0002 4.93606 18.9959 5.00523 18.9828C5.36439 18.915 5.65794 18.6567 5.77081 18.309C5.79254 18.2421 5.80946 18.1438 5.86938 17.6757L7.50809 4.87324C7.57821 4.32542 8.07915 3.93817 8.62696 4.0083ZM19.0876 4.00009C17.2146 4.00009 16.1983 6.19137 17.4082 7.62118L20.1763 10.8926C20.686 11.4949 20.9379 12.2738 20.8773 13.0605L20.6453 16.0768C20.6052 16.5978 20.1708 17.0001 19.6483 17.0001H18.2932L18.7272 13.3547C18.9396 11.5699 17.5456 10.0001 15.7482 10.0001H14.8337C14.2815 10.0001 13.8337 10.4478 13.8337 11.0001C13.8337 11.5524 14.2815 12.0001 14.8337 12.0001H15.7482C16.3473 12.0001 16.812 12.5234 16.7412 13.1183L16.2791 17.0001H13.8337C13.2815 17.0001 12.8337 17.4478 12.8337 18.0001C12.8337 18.5524 13.2815 19.0001 13.8337 19.0001H17.1671H19.6483C21.2159 19.0001 22.5192 17.7932 22.6394 16.2302L22.8714 13.2139C22.9723 11.9027 22.5525 10.6046 21.7031 9.6007L18.9349 6.32928C18.8249 6.1993 18.9173 6.00009 19.0876 6.00009H22.0003C22.5526 6.00009 23.0003 5.55238 23.0003 5.00009C23.0003 4.44781 22.5526 4.00009 22.0003 4.00009H19.0876Z" fill="currentColor"></path>
				</svg>`
            }
              , Me = {
                name: "TSE",
                action: () => He(this, null, function*() {
                    let lt = yield this.symbolService.getSymbol(s);
                    lt.insCode && window.open(`http://www.tsetmc.com/Loader.aspx?ParTree=151311&i=${lt.insCode}`, "_blank")
                }),
                icon: `<svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2L11.9299 2H11.9298C11.0677 1.99997 10.5584 1.99996 10.1179 2.04334C5.84486 2.4642 2.4642 5.84486 2.04334 10.1179C1.99996 10.5584 1.99997 11.0678 2 11.9299V11.9299L2 12.0001L2 12.0702V12.0702C1.99997 12.9324 1.99996 13.4418 2.04334 13.8823C2.4642 18.1553 5.84486 21.5359 10.1179 21.9568C10.5584 22.0002 11.0678 22.0002 11.9299 22.0001H12H12.0701C12.9322 22.0002 13.4416 22.0002 13.8822 21.9568C18.1552 21.5359 21.5358 18.1553 21.9567 13.8823C22.0001 13.4418 22 12.9323 22 12.0702V12.0001V11.93C22 11.0678 22.0001 10.5584 21.9567 10.1179C21.5358 5.84486 18.1552 2.4642 13.8822 2.04334C13.4416 1.99996 12.9323 1.99997 12.0702 2H12.0701L12 2ZM10.3139 4.03371C10.6438 4.00122 11.0475 4 12 4C12.9525 4 13.3562 4.00122 13.6861 4.03371C17.0096 4.36104 19.639 6.99045 19.9663 10.3139C19.9988 10.6438 20 11.0476 20 12.0001C20 12.9526 19.9988 13.3563 19.9663 13.6862C19.639 17.0097 17.0096 19.6391 13.6861 19.9664C13.3562 19.9989 12.9525 20.0001 12 20.0001C11.0475 20.0001 10.6438 19.9989 10.3139 19.9664C6.99045 19.6391 4.36104 17.0097 4.03371 13.6862C4.00122 13.3563 4 12.9526 4 12.0001C4 11.0476 4.00122 10.6438 4.03371 10.3139C4.36104 6.99045 6.99045 4.36104 10.3139 4.03371ZM12.9735 5.77126C12.8673 5.3194 12.4642 5 12 5C11.5359 5 11.1327 5.3194 11.0265 5.77126C10.4161 8.369 8.369 10.4161 5.77126 11.0265C5.3194 11.1327 5 11.5359 5 12C5 12.4642 5.3194 12.8673 5.77126 12.9735C8.369 13.5839 10.4161 15.631 11.0265 18.2287C11.1327 18.6806 11.5359 19 12 19C12.4642 19 12.8673 18.6806 12.9735 18.2287C13.5839 15.631 15.631 13.5839 18.2287 12.9735C18.6806 12.8673 19 12.4642 19 12C19 11.5359 18.6806 11.1327 18.2287 11.0265C15.631 10.4161 13.5839 8.369 12.9735 5.77126ZM12 15.3181C11.2042 13.9426 10.0575 12.7958 8.68192 12C10.0575 11.2042 11.2042 10.0575 12 8.68192C12.7958 10.0575 13.9426 11.2042 15.3181 12C13.9426 12.7958 12.7958 13.9426 12 15.3181Z" fill="currentColor"></path>
						</svg>`
            }
              , Ne = {
                name: "\u062D\u0630\u0641",
                action: () => {
                    this.marketWatchFacade.removeSymbolsFromCategory(n.id, [s])
                }
                ,
                icon: `<svg class="text-secondary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1359 20C15.6578 20 15.9923 19.9993 16.2482 19.9794C16.4917 19.9605 16.5853 19.9284 16.6341 19.9056C16.8116 19.8224 16.9608 19.6889 17.0631 19.5216C17.0912 19.4756 17.1334 19.3861 17.1791 19.1462C17.2271 18.8941 17.2648 18.5617 17.3224 18.0429L18 11.9446L18 9.5C18 8.94771 18.4477 8.5 19 8.5C19.5523 8.5 20 8.94771 20 9.5V12C20 12.0369 19.998 12.0738 19.9939 12.1104L19.3102 18.2638L19.3062 18.2995C19.2537 18.7723 19.2081 19.1828 19.1438 19.5205C19.0755 19.8788 18.9736 20.2308 18.7695 20.5647C18.4627 21.0666 18.0151 21.4672 17.4824 21.7167C17.128 21.8827 16.7669 21.9451 16.4032 21.9734C16.0605 22 15.6476 22 15.1719 22H15.1718L15.1359 22H11.2518C11.2254 22 11.1987 22 11.1719 22H11.1718H11.1359H9.5C9.49934 22 9.49868 22 9.49803 22H8.86414L8.82817 22H8.82806C8.3524 22 7.93949 22 7.5968 21.9734C7.2331 21.9451 6.87198 21.8827 6.51758 21.7167C5.98488 21.4672 5.53729 21.0666 5.23047 20.5647C5.02636 20.2308 4.9245 19.8788 4.85623 19.5205C4.7919 19.1828 4.74631 18.7724 4.6938 18.2996L4.68982 18.2638L4.00612 12.1104C4.00204 12.0738 4 12.0369 4 12L4 9.5C4 8.94772 4.44771 8.5 5 8.5C5.55228 8.5 6 8.94772 6 9.5V11.9446L6.67759 18.0429C6.73523 18.5617 6.77287 18.8941 6.8209 19.1462C6.8666 19.3861 6.9088 19.4756 6.93688 19.5216C7.03915 19.6889 7.18835 19.8224 7.36592 19.9056C7.41467 19.9284 7.50833 19.9605 7.75183 19.9794C8.00771 19.9993 8.34219 20 8.86414 20L9.5 20H11.1359C11.15 20 11.164 20 11.1778 20C11.6759 19.9999 11.9992 19.9988 12.2482 19.9794C12.4917 19.9605 12.5853 19.9284 12.6341 19.9056C12.8117 19.8224 12.9608 19.6889 13.0631 19.5216C13.0912 19.4756 13.1334 19.3861 13.1791 19.1462C13.2271 18.8941 13.2648 18.5617 13.3224 18.0429L14 11.9446L14 9.5C14 8.94771 14.4477 8.5 15 8.5C15.5523 8.5 16 8.94771 16 9.5L16 12C16 12.0369 15.998 12.0738 15.9939 12.1104L15.3102 18.2638L15.3062 18.2996C15.2537 18.7724 15.2081 19.1828 15.1438 19.5205C15.113 19.6819 15.0754 19.8422 15.0247 20H15.1359ZM11.6 7.00001L11.5681 7.00001L11.5062 7.00001L4 7.00001C3.44772 7.00001 3 6.55229 3 6.00001C3 5.44772 3.44772 5.00001 4 5.00001L9.00821 5.00001C8.99995 4.82478 8.99997 4.63038 9 4.4319L9 4.40001V3.60001L9 3.56811C8.99997 3.31573 8.99994 3.06994 9.01695 2.86178C9.03562 2.63318 9.07969 2.36345 9.21799 2.09202C9.40974 1.7157 9.7157 1.40974 10.092 1.21799C10.3634 1.0797 10.6332 1.03563 10.8618 1.01695C11.0699 0.999946 11.3156 0.999974 11.568 1L11.5681 1L11.6 1.00001L12.4 1.00001L12.4319 1L12.432 1C12.6844 0.999974 12.9301 0.999946 13.1382 1.01695C13.3668 1.03563 13.6366 1.0797 13.908 1.21799C14.2843 1.40974 14.5903 1.7157 14.782 2.09203C14.9203 2.36345 14.9644 2.63318 14.9831 2.86178C15.0001 3.06994 15 3.31574 15 3.56813L15 3.60001V4.40001L15 4.43189V4.43192C15 4.63039 15.0001 4.82479 14.9918 5.00001L20 5.00001C20.5523 5.00001 21 5.44772 21 6.00001C21 6.55229 20.5523 7.00001 20 7.00001L12.4939 7.00001L12.4319 7.00001L12.4 7.00001H11.6ZM11.0103 4.97537L11.0115 4.98856L11.0246 4.9897C11.1412 4.99923 11.3035 5.00001 11.6 5.00001H12.4C12.6965 5.00001 12.8588 4.99923 12.9754 4.9897L12.9885 4.98856L12.9897 4.97537C12.9992 4.85879 13 4.69654 13 4.40001V3.60001C13 3.30348 12.9992 3.14123 12.9897 3.02464L12.9886 3.01146L12.9754 3.01031C12.8588 3.00078 12.6965 3.00001 12.4 3.00001L11.6 3.00001C11.3035 3.00001 11.1412 3.00078 11.0246 3.01031L11.0114 3.01146L11.0103 3.02464C11.0008 3.14123 11 3.30348 11 3.60001L11 4.40001C11 4.69653 11.0008 4.85879 11.0103 4.97537Z" fill="currentColor"/>
				</svg>`
            }
              , at = [$, T, "separator", Z, E, H, G, be, "separator", Oe, Me];
            return t === Ie.MarketWatch && at.push("separator", Ne),
            at
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)
    }
    ,
    r.\u0275prov = Ni({
        token: r,
        factory: r.\u0275fac,
        providedIn: "root"
    });
    let i = r;
    return i
}
)();
var pr = ( () => {
    let r = class r {
        get currentSortKey() {
            return this.searchService.sortKey
        }
        set currentSortKey(e) {
            this.searchService.sortKey = e
        }
        get sortDirectionClass() {
            return this.searchService.sortByDescending ? ci.Descending : ci.Ascending
        }
        constructor(e) {
            this.searchService = e
        }
        order(e) {
            this.currentSortKey = e,
            this.searchService.needSort.next(this.currentSortKey)
        }
        sortDirectionClicked() {
            this.searchService.toggleSortDirection()
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(ne))
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["lib-search-panel-sort-options"]],
        decls: 15,
        vars: 4,
        consts: [[1, "filter-handler", "d-flex", "align-items-center", "justify-content-between", "p-2", "flex-shrink-0", "border-bottom"], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-check", "form-check-reverse", "me-3"], ["type", "radio", "id", "customRadio2", "name", "customRadio", 1, "form-check-input", "cup", 3, "click", "checked"], ["for", "customRadio2", 1, "form-check-label", "cup"], ["type", "radio", "id", "customRadio3", "name", "customRadio", 1, "form-check-input", "cup", 3, "click", "checked"], ["for", "customRadio3", 1, "form-check-label", "cup"], ["type", "radio", "id", "customRadio1", "name", "customRadio", 1, "form-check-input", "cup", 3, "click", "checked"], ["for", "customRadio1", 1, "form-check-label", "cup"], ["width", "24", "height", "24", 1, "text-muted", "cup", 3, "click", "iconName"]],
        template: function(t, n) {
            t & 1 && (c(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "input", 3),
            h("click", function() {
                return n.order("byTotalTradeValue")
            }),
            u(),
            c(4, "label", 4),
            _(5, "\u062D\u062C\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062A"),
            u()(),
            c(6, "div", 2)(7, "input", 5),
            h("click", function() {
                return n.order("bySymbolName")
            }),
            u(),
            c(8, "label", 6),
            _(9, "\u0646\u0627\u0645 \u0646\u0645\u0627\u062F"),
            u()(),
            c(10, "div", 2)(11, "input", 7),
            h("click", function() {
                return n.order("byLastTradePriceVar")
            }),
            u(),
            c(12, "label", 8),
            _(13, "\u062F\u0631\u0635\u062F\u200C \u062A\u063A\u06CC\u06CC\u0631"),
            u()()(),
            c(14, "svg-icon", 9),
            h("click", function() {
                return n.sortDirectionClicked()
            }),
            u()()),
            t & 2 && (l(3),
            m("checked", n.currentSortKey === "byTotalTradeValue"),
            l(4),
            m("checked", n.currentSortKey === "bySymbolName"),
            l(4),
            m("checked", n.currentSortKey === "byLastTradePriceVar"),
            l(3),
            m("iconName", n.sortDirectionClass))
        },
        dependencies: [z],
        encapsulation: 2
    });
    let i = r;
    return i
}
)();
function Do(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 6),
        h("click", function() {
            f(o);
            let t = d(2);
            return S(t.activeNotePanel(t.symbolIsin))
        }),
        u()
    }
    if (i & 2) {
        let o = d(2);
        m("iconName", o.icons.Note)
    }
}
function Ao(i, r) {
    if (i & 1 && y(0, Do, 1, 1, "svg-icon", 5),
    i & 2) {
        let o = d();
        m("ngIf", !o.noteService.hasNote(o.symbolIsin))
    }
}
function Oo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 8),
        h("click", function() {
            f(o);
            let t = d(2);
            return S(t.activeNotePanel(t.symbolIsin))
        }),
        u()
    }
    if (i & 2) {
        let o = d(2);
        m("iconName", o.icons.NoteFill)
    }
}
function Mo(i, r) {
    if (i & 1 && y(0, Oo, 1, 1, "svg-icon", 7),
    i & 2) {
        let o = d();
        m("ngIf", o.noteService.hasNote(o.symbolIsin))
    }
}
var hr = ( () => {
    let r = class r {
        constructor(e, t, n) {
            this.noteFacadeService = e,
            this.router = t,
            this.conditionalNotificationService = n,
            this.icons = j,
            this.symbolIsin = ""
        }
        activeNotePanel(e) {
            this.noteFacadeService.navigateToNoteManagement(e)
        }
        activeConditionalPanel(e) {
            setTimeout( () => {
                this.router.navigate(["/menu/conditional", e])
            }
            , Ue)
        }
        getItemConditionClass(e) {
            return this.conditionalNotificationService.getStockConditionFigureClass(e)
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(fe),C(le),C(de))
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["lib-search-panel-item-swipe-right"]],
        inputs: {
            symbolIsin: "symbolIsin"
        },
        decls: 6,
        vars: 4,
        consts: [[1, "metadata", "metadata-left", "d-flex"], ["type", "button", 1, "metadata-item", "d-flex", "align-items-center", "justify-content-center", "bg-transparent", "border-0", "position-relative", "ripple", 3, "tap"], ["width", "24", "height", "24", "title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", 1, "px-2", "cup", 3, "iconName"], ["width", "24", "height", "24", "title", "\u0646\u0645\u0627\u06CC\u0634 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", 1, "text-violet", "px-2", "cup", 3, "iconName"], ["width", "24", "height", "24", "title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u0647\u0634\u062F\u0627\u0631", 3, "iconName", "ngClass"], ["width", "24", "height", "24", "class", "px-2 cup", "title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", 3, "iconName", "click", 4, "ngIf"], ["width", "24", "height", "24", "title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", 1, "px-2", "cup", 3, "click", "iconName"], ["width", "24", "height", "24", "class", "text-violet px-2 cup", "title", "\u0646\u0645\u0627\u06CC\u0634 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", 3, "iconName", "click", 4, "ngIf"], ["width", "24", "height", "24", "title", "\u0646\u0645\u0627\u06CC\u0634 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", 1, "text-violet", "px-2", "cup", 3, "click", "iconName"]],
        template: function(t, n) {
            if (t & 1 && (c(0, "div", 0)(1, "button", 1),
            h("tap", function() {
                return n.activeNotePanel(n.symbolIsin)
            }),
            y(2, Ao, 1, 1, "svg-icon", 2)(3, Mo, 1, 1, "svg-icon", 3),
            u(),
            c(4, "button", 1),
            h("tap", function() {
                return n.activeConditionalPanel(n.symbolIsin)
            }),
            x(5, "svg-icon", 4),
            u()()),
            t & 2) {
                let s, a;
                l(2),
                b(n.noteFacadeService.hasNote(n.symbolIsin) ? -1 : 2),
                l(),
                b(n.noteFacadeService.hasNote(n.symbolIsin) ? 3 : -1),
                l(2),
                m("iconName", (s = n.getItemConditionClass(n.symbolIsin)) == null ? null : s.iconName)("ngClass", (a = n.getItemConditionClass(n.symbolIsin)) == null ? null : a.class)
            }
        },
        dependencies: [q, xt, z],
        encapsulation: 2
    });
    let i = r;
    return i
}
)();
function No(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 3),
        h("click", function() {
            f(o);
            let t = d();
            return S(t.openToolbar())
        }),
        u()
    }
    if (i & 2) {
        let o = d();
        m("iconName", o.icons.MenuVertical)
    }
}
function Fo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 15),
        h("click", function() {
            f(o);
            let t = d(2);
            return S(t.activeNotePanel())
        }),
        u()
    }
    if (i & 2) {
        let o = d(2);
        m("iconName", o.icons.Note)
    }
}
function Eo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 16),
        h("click", function() {
            f(o);
            let t = d(2);
            return S(t.activeNotePanel())
        }),
        u()
    }
    if (i & 2) {
        let o = d(2);
        m("iconName", o.icons.Note)
    }
}
function Lo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 17),
        h("click", function() {
            f(o);
            let t = d(2);
            return S(t.activeConditionalPanel())
        }),
        u()
    }
    if (i & 2) {
        let o = d(2);
        m("iconName", o.icons.BellAdd)("ngClass", o.getItemConditionClass())
    }
}
function Vo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "svg-icon", 18),
        h("click", function() {
            f(o);
            let t = d(2);
            return S(t.activeConditionalPanel())
        }),
        u()
    }
    if (i & 2) {
        let o = d(2);
        m("iconName", o.icons.BellAdd)("ngClass", o.getItemConditionClass())
    }
}
function Po(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 2)(1, "span", 4),
        h("click", function() {
            f(o);
            let t = d();
            return S(t.onCodalClick())
        }),
        x(2, "svg-icon", 5),
        u(),
        c(3, "span", 6),
        h("click", function() {
            f(o);
            let t = d();
            return S(t.onTseClick())
        }),
        x(4, "svg-icon", 5),
        u(),
        y(5, Fo, 1, 1, "svg-icon", 7)(6, Eo, 1, 1, "svg-icon", 8)(7, Lo, 1, 2, "svg-icon", 9)(8, Vo, 1, 2, "svg-icon", 10),
        c(9, "svg-icon", 11),
        h("click", function() {
            f(o);
            let t = d();
            return S(t.onOpenEasyChart())
        }),
        u(),
        c(10, "button", 12),
        h("click", function() {
            f(o);
            let t = d();
            return S(t.symbol().canBuy && t.onBuyBtnClicked())
        }),
        _(11, " \u062E\u0631\u06CC\u062F "),
        u(),
        c(12, "button", 13),
        h("click", function() {
            f(o);
            let t = d();
            return S(t.symbol().canSell && t.onSellBtnClicked())
        }),
        _(13, " \u0641\u0631\u0648\u0634 "),
        u(),
        c(14, "svg-icon", 14),
        h("click", function() {
            f(o);
            let t = d();
            return S(t.closeToolbar())
        }),
        u()()
    }
    if (i & 2) {
        let o = d();
        l(2),
        m("iconName", o.icons.Codal),
        l(2),
        m("iconName", o.icons.TseTmc),
        l(),
        b(o.hasNote() ? 6 : 5),
        l(2),
        b(o.pendingOrNotifiedUnseenConditionExistsForStock() ? 8 : 7),
        l(2),
        m("iconName", o.icons.EasyChart),
        l(),
        m("disabled", !o.symbol().canBuy),
        l(2),
        m("disabled", !o.symbol().canSell),
        l(2),
        m("iconName", o.icons.Close)
    }
}
var Cr = ( () => {
    let r = class r {
        constructor(e, t, n, s, a) {
            this.noteFacadeService = e,
            this.router = t,
            this.searchSymbolService = n,
            this.orderService = s,
            this.conditionalNotificationService = a,
            this.icons = j,
            this.symbol = A(void 0),
            this.showToolbar = I(!1),
            this.hasNote = N(J(this.symbol).pipe(Y( () => this.noteFacadeService.hasNote$(this.symbol()?.symbolIsin))))
        }
        ngOnDestroy() {
            this.closeToolbarSubscription.unsubscribe()
        }
        ngOnInit() {
            this.closeToolbarSubscription = this.searchSymbolService.closeAllToolbars$.subscribe(e => {
                e !== this.symbol()?.symbolIsin && this.closeToolbar()
            }
            )
        }
        onCodalClick() {
            At(this.symbol().symbolName)
        }
        onTseClick() {
            window.open(`http://www.tsetmc.com/Loader.aspx?ParTree=151311&i=${this.symbol().insCode}`, "_blank")
        }
        pendingOrNotifiedUnseenConditionExistsForStock() {
            return this.conditionalNotificationService.pendingOrNotifiedUnseenConditionExistsForStock(this.symbol()?.symbolIsin)
        }
        onOpenEasyChart() {
            this.router.navigate([]).then( () => {
                window.open("/easy-chart/" + this.symbol().symbolIsin, "_blank")
            }
            )
        }
        activeNotePanel() {
            this.searchSymbolService.openNoteManagementHandler(this.symbol().symbolIsin)
        }
        activeConditionalPanel() {
            this.searchSymbolService.openConditionalToolsHandler(this.symbol().symbolIsin)
        }
        getItemConditionClass() {
            return this.conditionalNotificationService.getStockConditionFigureClass(this.symbol().symbolIsin)
        }
        onBuyBtnClicked() {
            this.orderService.updateOrderFromMarketDepthState({
                isin: this.symbol().symbolIsin,
                side: ue.BUY,
                type: 8
            })
        }
        onSellBtnClicked() {
            this.orderService.updateOrderFromMarketDepthState({
                isin: this.symbol().symbolIsin,
                side: ue.SELL,
                type: 8
            })
        }
        openToolbar() {
            this.showToolbar.set(!0),
            this.searchSymbolService.closeAllItemToolbars(this.symbol().symbolIsin)
        }
        closeToolbar() {
            this.showToolbar.set(!1)
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(fe),C(le),C(ne),C(De),C(de))
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["lib-search-panel-item-desktop-toolbar"]],
        inputs: {
            symbol: [1, "symbol"]
        },
        decls: 3,
        vars: 1,
        consts: [[1, "more-actions"], ["width", "22", "height", "22", 1, "me-1", "text-secondary", 3, "iconName"], [1, "position-absolute", "more-actions-content", "z-1", "align-items-center", "px-3", "d-flex", 2, "left", "0", "bottom", "0", "top", "0"], ["width", "22", "height", "22", 1, "me-1", "text-secondary", 3, "click", "iconName"], ["title", "\u06A9\u062F\u0627\u0644", 1, "px-2", "cup", 2, "line-height", "2", 3, "click"], ["width", "22", "height", "22", 1, "text-secondary", 3, "iconName"], ["title", "TSE", 1, "px-2", "cup", 2, "line-height", "2", 3, "click"], ["width", "22", "height", "22", "title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", 1, "text-muted", "px-2", "cup", 3, "iconName"], ["width", "22", "height", "22", "title", "\u0646\u0645\u0627\u06CC\u0634 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", 1, "text-violet", "px-2", "cup", 3, "iconName"], ["width", "22", "height", "22", "title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u0647\u0634\u062F\u0627\u0631", 1, "text-muted", "px-2", "cup", 3, "iconName", "ngClass"], ["width", "22", "height", "22", "title", "\u0646\u0645\u0627\u06CC\u0634 \u0647\u0634\u062F\u0627\u0631", 1, "text-warning", "px-2", "cup", 3, "iconName", "ngClass"], ["width", "22", "height", "22", "title", "\u0627\u06CC\u0632\u06CC\u200C\u0686\u0627\u0631\u062A", 1, "px-2", "text-muted", "cup", "search-panel-chart-opener", 3, "click", "iconName"], ["type", "button", "title", "\u06A9\u0644\u06CC\u062F +", 1, "btn", "btn-sm", "btn-outline-success", "ms-2", 3, "click", "disabled"], ["type", "button", "title", "\u06A9\u0644\u06CC\u062F -", 1, "btn", "btn-sm", "btn-outline-danger", "ms-2", 3, "click", "disabled"], ["width", "22", "height", "22", "title", "\u0628\u0633\u062A\u0646", 1, "pe-0", "ps-2", "text-muted", "cup", 3, "click", "iconName"], ["width", "22", "height", "22", "title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", 1, "text-muted", "px-2", "cup", 3, "click", "iconName"], ["width", "22", "height", "22", "title", "\u0646\u0645\u0627\u06CC\u0634 \u06CC\u0627\u062F\u062F\u0627\u0634\u062A", 1, "text-violet", "px-2", "cup", 3, "click", "iconName"], ["width", "22", "height", "22", "title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u0647\u0634\u062F\u0627\u0631", 1, "text-muted", "px-2", "cup", 3, "click", "iconName", "ngClass"], ["width", "22", "height", "22", "title", "\u0646\u0645\u0627\u06CC\u0634 \u0647\u0634\u062F\u0627\u0631", 1, "text-warning", "px-2", "cup", 3, "click", "iconName", "ngClass"]],
        template: function(t, n) {
            t & 1 && (c(0, "div", 0),
            y(1, No, 1, 1, "svg-icon", 1)(2, Po, 15, 8, "div", 2),
            u()),
            t & 2 && (l(),
            b(n.showToolbar() ? 2 : 1))
        },
        dependencies: [q, z],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = r;
    return i
}
)();
function Ro(i, r) {
    if (i & 1 && x(0, "svg-icon", 1),
    i & 2) {
        let o = d();
        m("iconName", o.icons.NoteFill)
    }
}
function zo(i, r) {
    if (i & 1 && x(0, "span", 2),
    i & 2) {
        let o = d();
        m("ngClass", o.getItemConditionClass(o.symbolIsin()))
    }
}
var gr = ( () => {
    let r = class r {
        constructor(e, t) {
            this.noteFacadeService = e,
            this.conditionalNotificationService = t,
            this.icons = j,
            this.symbolIsin = A("")
        }
        getItemConditionClass(e) {
            return this.conditionalNotificationService.getStockConditionFigureClass(e)
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(fe),C(de))
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["lib-search-panel-item-mobile-toolbar"]],
        inputs: {
            symbolIsin: [1, "symbolIsin"]
        },
        decls: 3,
        vars: 2,
        consts: [[1, "position-absolute", "full-offset", "d-flex", "flex-column", "justify-content-center", "me-1", 2, "right", "auto !important"], ["width", "12", "height", "12", 1, "text-violet", 2, "left", "7px", "top", "17px", 3, "iconName"], [1, "mdi", 2, "left", "7px", "bottom", "17px", 3, "ngClass"]],
        template: function(t, n) {
            t & 1 && (c(0, "div", 0),
            y(1, Ro, 1, 1, "svg-icon", 1)(2, zo, 1, 1, "span", 2),
            u()),
            t & 2 && (l(),
            b(n.symbolIsin() && n.noteFacadeService.hasNote(n.symbolIsin()) ? 1 : -1),
            l(),
            b(n.symbolIsin() && n.conditionalNotificationService.pendingOrNotifiedUnseenConditionExistsForStock(n.symbolIsin()) ? 2 : -1))
        },
        dependencies: [q, z],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = r;
    return i
}
)();
var Go = i => ({
    active: i
});
function jo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 11)(1, "div", 12),
        h("tap", function() {
            let t;
            f(o);
            let n = d();
            return S(((t = n.item()) == null ? null : t.canBuy) && n.buy(n.item()))
        }),
        _(2, " \u062E\u0631\u06CC\u062F "),
        u(),
        c(3, "div", 12),
        h("tap", function() {
            let t;
            f(o);
            let n = d();
            return S(((t = n.item()) == null ? null : t.canSell) && n.sell(n.item()))
        }),
        _(4, " \u0641\u0631\u0648\u0634 "),
        u()(),
        x(5, "lib-search-panel-item-swipe-right", 13)
    }
    if (i & 2) {
        let o, e, t, n = d();
        l(),
        gt("metadata-item d-flex align-items-center justify-content-center bg-success text-body ", (o = n.item()) != null && o.canBuy ? "" : " disabled ", ""),
        l(2),
        gt("metadata-item d-flex align-items-center justify-content-center bg-danger text-body ", (e = n.item()) != null && e.canSell ? "" : " disabled ", ""),
        l(2),
        m("symbolIsin", (t = n.item()) == null ? null : t.symbolIsin)
    }
}
function Bo(i, r) {
    if (i & 1 && x(0, "symbol-state", 6),
    i & 2) {
        let o, e = d();
        ye("stateColor", (o = e.item()) == null ? null : o.stateColor)
    }
}
function $o(i, r) {
    if (i & 1 && (c(0, "small", 15),
    _(1),
    u()),
    i & 2) {
        let o, e, t = d(2);
        m("colorizeNumber", (o = t.item()) == null ? null : o.priceVar),
        l(),
        V("", (e = t.item()) == null ? null : e.priceVar, "%")
    }
}
function Wo(i, r) {
    if (i & 1 && (c(0, "div", 9)(1, "div", 14),
    y(2, $o, 2, 2, "small", 15),
    _(3),
    se(4, "number"),
    u()()),
    i & 2) {
        let o, e, t = d();
        l(2),
        b(((o = t.item()) == null ? null : o.priceVar) !== null && ((o = t.item()) == null ? null : o.priceVar) !== void 0 ? 2 : -1),
        l(),
        V(" ", he(4, 2, (e = t.item()) == null ? null : e.lastTradedPrice), " ")
    }
}
function Uo(i, r) {
    if (i & 1 && x(0, "svg-icon", 17),
    i & 2) {
        let o, e, t = d(2);
        m("iconName", t.icons.StarCheckFill),
        Q("data-cy-item-key", (o = t.item()) == null ? null : o.symbolName)("data-cy", "search-panel-item-check-fill-" + ((e = t.item()) == null ? null : e.symbolName))
    }
}
function Zo(i, r) {
    if (i & 1 && x(0, "svg-icon", 18),
    i & 2) {
        let o, e, t = d(2);
        m("iconName", t.icons.Star),
        Q("data-cy-item-key", (o = t.item()) == null ? null : o.symbolName)("data-cy", "search-panel-item-star-" + ((e = t.item()) == null ? null : e.symbolName))
    }
}
function Ko(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div")(1, "span", 16),
        h("click", function(t) {
            f(o);
            let n = d();
            return n.openWatches(n.item()),
            S(t.stopPropagation())
        }),
        y(2, Uo, 1, 3, "svg-icon", 17)(3, Zo, 1, 3, "svg-icon", 18),
        u()()
    }
    if (i & 2) {
        let o = d();
        l(2),
        b(o.isInCurrentWatchSymbols() ? 2 : o.isInCurrentWatchSymbols() ? -1 : 3)
    }
}
function Qo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div")(1, "svg-icon", 19),
        h("tap", function() {
            f(o);
            let t = d();
            return S(t.activateSymbolOnTap(t.item()))
        }),
        u()()
    }
    if (i & 2) {
        let o, e = d();
        l(),
        Fe("commodity-exchange-icon", ((o = e.item()) == null ? null : o.searchCategoryName) === e.carCategoryName),
        m("iconName", e.icons.Link)
    }
}
function qo(i, r) {
    if (i & 1 && x(0, "lib-search-panel-item-mobile-toolbar", 13),
    i & 2) {
        let o, e = d(2);
        m("symbolIsin", (o = e.item()) == null ? null : o.symbolIsin)
    }
}
function Yo(i, r) {
    if (i & 1 && x(0, "lib-search-panel-item-desktop-toolbar", 20),
    i & 2) {
        let o = d(2);
        m("symbol", o.item())
    }
}
function Jo(i, r) {
    if (i & 1 && y(0, qo, 1, 1, "lib-search-panel-item-mobile-toolbar", 13)(1, Yo, 1, 1, "lib-search-panel-item-desktop-toolbar", 20),
    i & 2) {
        let o = d();
        b(o.isMobile() ? 0 : 1)
    }
}
function Xo(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 21),
        h("click", function() {
            let t;
            f(o);
            let n = d();
            return S(n.hasMoreClicked.emit((t = n.item()) == null ? null : t.searchCategoryName))
        }),
        c(1, "span", 22),
        _(2, "\u0628\u06CC\u0634\u062A\u0631"),
        u()()
    }
}
var Yt = ( () => {
    let r = class r {
        constructor(e, t, n, s, a, p) {
            this.searchService = e,
            this.settingFacadeService = t,
            this.deviceService = n,
            this.marketWatchStoreFacade = s,
            this.swipeService = a,
            this.router = p,
            this.icons = j,
            this.hasMore = A(),
            this.hasMoreClicked = ie(),
            this.symbol = A(),
            this.symbol$ = J(this.symbol),
            this.item = I(null),
            this.isMobile = A(!0),
            this.showMarketData = A(!1),
            this.activeIndex$ = J(this.searchService.selectedIndex),
            this.activeSymbolHandler = ie(),
            this.SwipeState = ai,
            this.SymbolCategory = ce,
            this.isiOS = this.deviceService.isiOS,
            this.preItemIdString = "searchPanelItem-",
            this.isInCurrentWatchSymbols = N(this.symbol$.pipe(Y(g => this.marketWatchStoreFacade.isSymbolExistsInMarketWatch$(g?.symbolIsin)))),
            this.checkActive = N(this.searchService.selectedIndex$.pipe(oe( () => this.searchService.categoryNavigating?.value !== null && !!this.item()?.searchCategoryName), W(g => {
                let v = this.searchService.categoryNavigating.value === Nt.get(this.item()?.searchCategoryName) && this.item()?.listIndex === this.searchService.categoryNavigating?.value + "-" + g;
                return v && this.scrollToViewByIndex(this.item()?.listIndex),
                v
            }
            ))),
            N(this.symbol$.pipe(F(g => this.item.set(g))))
        }
        get swipedIsin() {
            return this.item() && this.item()?.symbolIsin !== this.swipeService.swipeIsin && this.item()?.swipeState?.swipeState !== ai.None && this.swipeService.onResetSwipe(this.item()?.swipeState),
            this.swipeService.swipeIsin
        }
        buy(e) {
            this.searchService.addStockToRecent(e);
            let t = this.settingFacadeService.getSettings().buyQuantity;
            this.router.navigate(["/stock-details", e.symbolIsin, ue.BUY, t])
        }
        sell(e) {
            this.searchService.addStockToRecent(e);
            let t = this.settingFacadeService.getSettings().buyQuantity;
            this.router.navigate(["/stock-details", e.symbolIsin, ue.SELL, t])
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
        openWatches(e) {
            this.searchService.openMarketWatchCategorySelector(e)
        }
        swipe(e, t) {
            if (this.swipeService.swipeIsin = t.symbolIsin,
            !(t.searchCategoryName === ce.funds || t.searchCategoryName === ce.cars))
                switch (e) {
                case si.RIGHT:
                    this.item()?.swipeState.swipeSideClass === rt.LEFT ? this.swipeService.onResetSwipe(this.item()?.swipeState) : this.item()?.swipeState.swipeSideClass === rt.RIGHT || this.swipeService.onSwipeRight(this.item()?.swipeState);
                    break;
                case si.LEFT:
                    this.item()?.swipeState.swipeSideClass === rt.RIGHT ? this.swipeService.onResetSwipe(this.item()?.swipeState) : this.item()?.swipeState.swipeSideClass === rt.LEFT || this.swipeService.onSwipeLeft(this.item()?.swipeState);
                    break;
                default:
                    this.swipeService.onResetSwipe(this.item()?.swipeState);
                    break
                }
        }
        activateSymbolOnTap(e) {
            if (e.searchCategoryName === ce.cars) {
                window.open("https://learning.emofid.com/buying-car-from-commodity-exchange", "_blank");
                return
            } else
                e.searchCategoryName !== ce.funds && (this.searchService.addStockToRecent(e),
                this.searchService.updateSearchedStockByIsin(e.symbolIsin));
            this.searchService.setSelectedSearchedSymbol(e)
        }
        changeActiveIndexHandler(e) {
            e && this.searchService.selectedIndex.set(+e)
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(ne),C(qe),C(Ke),C(Ae),C(Tt),C(le))
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["lib-search-panel-item"]],
        inputs: {
            hasMore: [1, "hasMore"],
            symbol: [1, "symbol"],
            isMobile: [1, "isMobile"],
            showMarketData: [1, "showMarketData"]
        },
        outputs: {
            hasMoreClicked: "hasMoreClicked",
            activeSymbolHandler: "activeSymbolHandler"
        },
        decls: 15,
        vars: 26,
        consts: [[3, "id"], [1, "row-list__item-content", "flex-grow-1", "d-flex", "justify-content-between", "align-items-center", "py-1", "px-2", 3, "mouseenter", "swipeleft", "swiperight", "id", "ngClass"], [1, "flex-grow-1", 3, "tap"], [1, "d-flex"], [1, "col", "px-1", "text-truncate"], [1, "d-flex", "align-items-baseline"], [3, "stateColor"], [1, "d-block", 3, "innerHTML"], [1, "text-muted", 3, "innerHTML"], [1, "col-auto", "flex-shrink-0", "d-flex", "align-items-center", "ps-0", "pe-1", "ms-auto"], [1, "p-2", "text-center", "text-primary", "cup"], [1, "metadata", "metadata-right", "d-flex"], [3, "tap"], [3, "symbolIsin"], [1, "mb-0", "text-nowrap", "d-flex", "justify-content-between", "align-items-center"], [1, "me-1", 2, "direction", "ltr", 3, "colorizeNumber"], [1, "px-2", "cup", 3, "click"], ["width", "24", "height", "24", "title", "\u0645\u062F\u06CC\u0631\u06CC\u062A \u0646\u0645\u0627\u062F \u062F\u0631 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646", 1, "text-primary", 3, "iconName"], ["width", "24", "height", "24", "title", "\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0627\u062F \u0628\u0647 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646", 1, "text-muted", 3, "iconName"], ["title", "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u062E\u0631\u06CC\u062F \u0628\u0648\u0631\u0633 \u06A9\u0627\u0644\u0627 -\u062E\u0648\u062F\u0631\u0648", "width", "24", "height", "24", 1, "px-2", "cup", "text-muted", 3, "tap", "iconName"], [3, "symbol"], [1, "p-2", "text-center", "text-primary", "cup", 3, "click"], [1, "btn", "btn-sm", "btn-outline-primary", "px-5"]],
        template: function(t, n) {
            if (t & 1 && (c(0, "div", 0),
            y(1, jo, 6, 7),
            c(2, "div", 1),
            h("mouseenter", function() {
                let a;
                return n.changeActiveIndexHandler((a = n.item()) == null ? null : a.listIndex)
            })("swipeleft", function(a) {
                return n.swipe(a.type, n.item())
            })("swiperight", function(a) {
                return n.swipe(a.type, n.item())
            }),
            c(3, "div", 2),
            h("tap", function() {
                return n.activateSymbolOnTap(n.item())
            }),
            c(4, "div", 3)(5, "div", 4)(6, "div", 5),
            y(7, Bo, 1, 1, "symbol-state", 6),
            x(8, "b", 7),
            u(),
            x(9, "small", 8),
            u(),
            y(10, Wo, 5, 4, "div", 9),
            u()(),
            y(11, Ko, 4, 1, "div")(12, Qo, 2, 3, "div")(13, Jo, 2, 1),
            u()(),
            y(14, Xo, 3, 0, "div", 10)),
            t & 2) {
                let s, a, p, g, v, O, k, R, K, $, T, Z, E, H, G;
                gt("row-list__item d-flex ", (s = n.item()) == null || s.swipeState == null ? null : s.swipeState.swipeSideClass, ""),
                m("id", n.preItemIdString + ((a = n.item()) == null ? null : a.listIndex)),
                Q("data-isin", (p = n.item()) == null ? null : p.symbolIsin),
                l(),
                b(n.isMobile() && n.swipedIsin === ((g = n.item()) == null ? null : g.symbolIsin) && (!n.isiOS || ((g = n.item()) == null ? null : g.swipeState.swipeState) !== n.SwipeState.None) ? 1 : -1),
                l(),
                ye("id", (v = n.item()) == null ? null : v.listIndex),
                m("ngClass", U(24, Go, n.checkActive())),
                Q("data-cy", n.preItemIdString + ((O = n.item()) == null ? null : O.listIndex)),
                l(3),
                Fe("commodity-exchange-info-container", ((k = n.item()) == null ? null : k.searchCategoryName) === n.SymbolCategory.cars),
                l(),
                Q("data-cy", "search-item-name-" + ((R = n.item()) == null ? null : R.symbolName)),
                l(),
                b(n.showMarketData() ? 7 : -1),
                l(),
                Fe("commodity-exchange-info-name", ((K = n.item()) == null ? null : K.searchCategoryName) === n.SymbolCategory.cars),
                m("innerHTML", ($ = n.item()) == null ? null : $.symbolNameInnerHtml, Be),
                l(),
                Fe("commodity-exchange-info-description", ((T = n.item()) == null ? null : T.searchCategoryName) === n.SymbolCategory.cars),
                m("innerHTML", (Z = n.item()) == null ? null : Z.symbolTitleInnerHtml, Be),
                l(),
                b(n.showMarketData() ? 10 : -1),
                l(),
                b(((E = n.item()) == null ? null : E.searchCategoryName) !== n.SymbolCategory.funds && ((E = n.item()) == null ? null : E.searchCategoryName) !== n.SymbolCategory.cars ? 11 : -1),
                l(),
                b(((H = n.item()) == null ? null : H.searchCategoryName) === n.SymbolCategory.cars ? 12 : -1),
                l(),
                b(((G = n.item()) == null ? null : G.searchCategoryName) !== n.SymbolCategory.funds && ((G = n.item()) == null ? null : G.searchCategoryName) !== n.SymbolCategory.cars ? 13 : -1),
                l(),
                b(n.hasMore() ? 14 : -1)
            }
        },
        dependencies: [hr, q, kt, Cr, gr, wt, dn, z],
        encapsulation: 2
    });
    let i = r;
    return i
}
)();
var es = (i, r) => r.symbolIsin;
function ts(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 0)(1, "span"),
        _(2, "\u062C\u0633\u062A\u062C\u0648\u06CC \u0627\u062E\u06CC\u0631"),
        u(),
        c(3, "span", 2),
        h("click", function() {
            f(o);
            let t = d();
            return S(t.onClearRecentSymbols())
        }),
        _(4, "\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 "),
        x(5, "svg-icon", 3),
        u()()
    }
    if (i & 2) {
        let o = d();
        l(5),
        m("iconName", o.icons.Close)
    }
}
function is(i, r) {
    if (i & 1 && x(0, "lib-search-panel-item", 1),
    i & 2) {
        let o = r.$implicit
          , e = d();
        m("symbol", o)("isMobile", e.isMobile)("showMarketData", !0)
    }
}
var fr = ( () => {
    let r = class r {
        constructor(e, t, n, s) {
            this.searchService = e,
            this.lsService = t,
            this.swipeService = n,
            this.deviceService = s,
            this.icons = j,
            this.isMobile = !1,
            this.subs = [],
            this.currentSwipedIsin = "",
            this.recentSymbolStates = N(this.searchService.recentListSymbols$)
        }
        ngOnInit() {
            this.swipeService.swipeIsin = "",
            this.getRecentSearchData()
        }
        ngOnDestroy() {
            this.unsubscribeRecentFromLs(),
            this.subs.forEach(e => e.unsubscribe())
        }
        onClearRecentSymbols() {
            setTimeout( () => {
                this.unsubscribeRecentFromLs(),
                this.searchService.clearRecentSymbols()
            }
            , 200)
        }
        subscribeToLs(e) {
            if (e)
                for (let t of e) {
                    let n = t
                      , a = this.lsService.subscribeToLs(Se.RecentSearch, n.symbolIsin).pipe(F(p => this.updateItemsInfo(n, p))).subscribe();
                    this.subs.push(a)
                }
        }
        updateItemsInfo(e, t) {
            this.searchService.recentListSymbols.update(n => {
                let s = [];
                if (n?.length > 0) {
                    s = [...n];
                    let a = s.findIndex(p => p.symbolIsin === e.symbolIsin);
                    t.name === nt.RecentSearchSchema.LastTradedPrice && (s[a].lastTradedPrice = Number(t.val)),
                    t.name === nt.RecentSearchSchema.lastTradedPriceVar && (s[a].priceVar = Number(t.val)),
                    t.name === nt.RecentSearchSchema.TotalNumberOfSharesTraded && (s[a].totalNumberOfSharesTraded = Number(t.val)),
                    t.name === nt.RecentSearchSchema.SymbolStateId && (s[a].stateColor = ke(t.val))
                }
                return s
            }
            )
        }
        unsubscribeRecentFromLs() {
            if (this.searchService?.recentSymbols?.length !== 0)
                for (let e of this.searchService.recentSymbols)
                    this.lsService.unsubscribeSchema(Se.RecentSearch, e.symbolIsin)
        }
        getRecentSearchData() {
            this.searchService.recentSymbols && this.subscribeToLs(this.searchService.recentSymbols)
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(ne),C(Te),C(Tt),C(Ke))
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["lib-search-panel-recent-list"]],
        inputs: {
            isMobile: "isMobile"
        },
        decls: 3,
        vars: 1,
        consts: [[1, "d-flex", "justify-content-between", "align-items-center", "p-2", "mt-1", "flex-shrink-0"], [1, "list-group-item", "p-0", 3, "symbol", "isMobile", "showMarketData"], [1, "text-body", "text-opacity-50", "cup", 3, "click"], ["width", "12", "height", "12", 3, "iconName"]],
        template: function(t, n) {
            if (t & 1 && (y(0, ts, 6, 1, "div", 0),
            Le(1, is, 1, 3, "lib-search-panel-item", 1, es)),
            t & 2) {
                let s;
                b(((s = n.recentSymbolStates()) == null ? null : s.length) > 0 ? 0 : -1),
                l(),
                Ve(n.recentSymbolStates())
            }
        },
        dependencies: [Yt, z],
        encapsulation: 2
    });
    let i = r;
    return i
}
)();
function ns(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "li", 2)(1, "a", 3),
        h("click", function() {
            let t = f(o).$implicit
              , n = d();
            return S(n.onSectorSelect(t))
        }),
        x(2, "svg-icon", 4),
        _(3),
        u()()
    }
    if (i & 2) {
        let o = r.$implicit;
        m("id", "search-panel-sector-" + o.sectorCode),
        l(),
        m("id", "search-panel-sector-" + o.sectorCode + "-a"),
        l(),
        m("iconName", o.sectorIcon)("id", "search-panel-sector-" + o.sectorCode + "-span"),
        l(),
        V(" ", o.sectorName, " ")
    }
}
var Sr = ( () => {
    let r = class r {
        constructor(e, t) {
            this.searchService = e,
            this.location = t,
            this.stockSectors = In
        }
        onSectorSelect(e) {
            this.searchService.selectedSector.set(e)
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(ne),C(yt))
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["lib-search-panel-sector-container"]],
        decls: 2,
        vars: 1,
        consts: [[1, "list-unstyled", "p-1", "d-flex", "flex-wrap", "position-relative", "z-1"], ["class", "col-4 col-sm-3 p-1 text-center", 3, "id", 4, "ngFor", "ngForOf"], [1, "col-4", "col-sm-3", "p-1", "text-center", 3, "id"], [1, "d-flex", "flex-column", "gap-1", "align-items-center", "justify-content-center", "rounded", "p-2", "py-3", "bg-principal", "bg-principal-4x-dark", "bg-principal-hover", "sector-item", "cup", "text-body", 2, "max-height", "70px", 3, "click", "id"], ["width", "24", "height", "24", 1, "text-muted", 3, "iconName", "id"]],
        template: function(t, n) {
            t & 1 && (c(0, "ul", 0),
            y(1, ns, 4, 5, "li", 1),
            u()),
            t & 2 && (l(),
            m("ngForOf", n.stockSectors))
        },
        dependencies: [on, z],
        encapsulation: 2
    });
    let i = r;
    return i
}
)();
var rs = ["viewport"];
function os(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 5),
        h("click", function() {
            f(o);
            let t = d().$implicit
              , n = d();
            return S(n.showOrHideData(t.symbolIsin))
        }),
        _(1),
        x(2, "svg-icon", 6),
        u()
    }
    if (i & 2) {
        let o = d().$implicit
          , e = d();
        l(),
        V(" ", o.searchCategoryName, " "),
        l(),
        Ee(e.categoryClass(o.symbolIsin)),
        m("iconName", e.icons.ChevronUp)
    }
}
function ss(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "lib-search-panel-item", 7),
        h("hasMoreClicked", function(t) {
            f(o);
            let n = d(2);
            return S(n.showMoreHandler(t))
        }),
        u()
    }
    if (i & 2) {
        let o = d().$implicit
          , e = d();
        m("hasMore", o.hasMore && e.isCategoryExpand(o.searchCategoryName))("symbol", o)("isMobile", e.isMobile())("showMarketData", e.showMarketData())
    }
}
function as(i, r) {
    if (i & 1 && (ft(0),
    y(1, os, 3, 4, "div", 3)(2, ss, 1, 4, "lib-search-panel-item", 4),
    St()),
    i & 2) {
        let o = r.$implicit;
        l(),
        b(o.type === "group" ? 1 : 2)
    }
}
var _r = ( () => {
    let r = class r {
        constructor() {
            this.lsService = D(Te),
            this.cdkVirtualScrollViewport = ht.required("viewport"),
            this.cdkVirtualScrollViewport$ = J(this.cdkVirtualScrollViewport),
            this.isMobile = A(!0),
            this.showMarketData = A(!0),
            this.showMarketData$ = J(this.showMarketData),
            this.searchInputExists = A(!1),
            this.searchResults = A({}),
            this.icons = j,
            this.categoryStates = I([]),
            this.stickyHeader = I(null),
            this.categoryStates$ = J(this.categoryStates),
            this.searchResults$ = J(this.searchResults).pipe(W(e => Object.values(e)?.sort( (t, n) => +t.listIndex - +n.listIndex) ?? []), F(e => {
                this.sortedData.set(e),
                this.cdkVirtualScrollViewport().checkViewportSize()
            }
            )),
            this.sortedData = I([]),
            this.finalList$ = J(this.sortedData).pipe(W(e => e.filter(t => t.type === "group" || t.type === "symbol" && t.visible))),
            this.finalList = N(this.finalList$),
            this.visibleIndexes = I({
                start: -1,
                end: -1
            }),
            this.connectedItems = new Set,
            N(this.searchResults$.pipe(F(e => {
                this.categoryStates.set(e.filter(t => t.type === "group").map(t => ({
                    name: t.searchCategoryName,
                    itemId: t.symbolIsin,
                    isExpand: !0,
                    listIndex: t.listIndex,
                    hasMore: t.itemsCount > 5 && !!this.searchInputExists()
                })))
            }
            ))),
            N(this.cdkVirtualScrollViewport$.pipe(Y(e => e.renderedRangeStream?.pipe(F(t => {
                this.onScrolledIndexChange(t)
            }
            ))))),
            N(this.categoryStates$.pipe(Ge(200), F( () => this.cdkVirtualScrollViewport().checkViewportSize()))),
            N(this.showMarketData$.pipe(F(e => {
                !e && this.unSubAllConnectedItem()
            }
            )))
        }
        ngOnDestroy() {
            this.unSubAllConnectedItem()
        }
        unSubAllConnectedItem() {
            this.connectedItems.forEach(e => {
                this.lsService.unsubscribeSchema(Se.Search, e)
            }
            )
        }
        identify(e) {
            return e
        }
        categoryClass(e) {
            return this.categoryStates().find(t => t.itemId === e)?.isExpand ? "" : "rotate-180"
        }
        onScrolledIndexChange(e) {
            let {start: t, end: n} = e;
            this.visibleIndexes.update(s => {
                for (let a = t; a <= n; a++)
                    this.onItemVisible(a);
                if (s.start !== -1 && s.end !== -1)
                    for (let a = s.start; a <= s.end; a++)
                        (a < t || a > n) && this.onItemInvisible(a);
                return {
                    start: t,
                    end: n
                }
            }
            )
        }
        onItemVisible(e) {
            let t = this.getItemId(e);
            t && !this.connectedItems.has(t) && (this.connectedItems.add(t),
            this.lsService.subscribeToLs(Se.Search, t).subscribe(n => {
                this.updateItemsInfo(t, n)
            }
            ))
        }
        onItemInvisible(e) {
            let t = this.getItemId(e);
            t && this.connectedItems.has(t) && (this.connectedItems.delete(t),
            this.lsService.unsubscribeSchema(Se.Search, t))
        }
        getItemId(e) {
            let t = this.sortedData()[e];
            return t?.type === "symbol" && t?.visible ? this.sortedData()?.[e].symbolIsin : null
        }
        updateItemsInfo(e, t) {
            this.sortedData.update(n => {
                let s = n.findIndex(a => a.symbolIsin === e);
                return s > -1 && (n[s] = ze(te({}, n[s]), {
                    lastTradedPrice: Number(t.val["last-trade-price"]),
                    priceVar: Number(t.val["price-variation"]),
                    totalNumberOfSharesTraded: Number(t.val["total-number-of-shares-traded"]),
                    stateColor: ke(t.val["state-code"])
                })),
                [...n]
            }
            )
        }
        isCategoryExpand(e) {
            return this.categoryStates().find(n => n.name === e)?.isExpand
        }
        showMoreHandler(e) {
            this.sortedData.update(t => (t.filter(n => n.searchCategoryName === e).forEach(n => {
                n.type === "symbol" && (n.visible = !0,
                n.hasMore = !1)
            }
            ),
            [...t]))
        }
        showOrHideData(e) {
            this.categoryStates.update(t => (t.forEach(n => {
                n.itemId === e && (n.isExpand = !n.isExpand,
                this.sortedData.update(s => (s.filter(a => a.searchCategoryName === n.name).forEach(a => {
                    a.type === "symbol" && (a.visible = n.isExpand,
                    a.hasMore)
                }
                ),
                [...s])))
            }
            ),
            [...t]))
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["lib-search-flat-result-list"]],
        viewQuery: function(t, n) {
            t & 1 && _t(n.cdkVirtualScrollViewport, rs, 5),
            t & 2 && $e()
        },
        inputs: {
            isMobile: [1, "isMobile"],
            showMarketData: [1, "showMarketData"],
            searchInputExists: [1, "searchInputExists"],
            searchResults: [1, "searchResults"]
        },
        decls: 3,
        vars: 3,
        consts: [["viewport", ""], ["itemSize", "59", 1, "list-group", "list-group-flush", "overflow-auto", 2, "height", "100%"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [1, "fs-7", "fw-bold", "d-flex", "justify-content-between", "search-category-list", "flex-shrink-0", "bg-principal-2x", "border-principal-6x-dark", "border-principal-4x-dark-mobile", "border-bottom", "border-principal-3x", "mb-0", "p-2", "top-0", "z-2", "cup"], [1, "list-group-item", "p-0", 3, "hasMore", "symbol", "isMobile", "showMarketData"], [1, "fs-7", "fw-bold", "d-flex", "justify-content-between", "search-category-list", "flex-shrink-0", "bg-principal-2x", "border-principal-6x-dark", "border-principal-4x-dark-mobile", "border-bottom", "border-principal-3x", "mb-0", "p-2", "top-0", "z-2", "cup", 3, "click"], ["width", "20", "height", "20", 3, "iconName"], [1, "list-group-item", "p-0", 3, "hasMoreClicked", "hasMore", "symbol", "isMobile", "showMarketData"]],
        template: function(t, n) {
            t & 1 && (c(0, "cdk-virtual-scroll-viewport", 1, 0),
            y(2, as, 3, 1, "ng-container", 2),
            u()),
            t & 2 && (l(2),
            m("cdkVirtualForOf", n.finalList())("cdkVirtualForTrackBy", n.identify)("cdkVirtualForTemplateCacheSize", 0))
        },
        dependencies: [ae, z, Yt, Vn, Pn, Ln],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = r;
    return i
}
)();
var ls = ["searchInput"]
  , cs = i => ({
    active: i
});
function ds(i, r) {
    i & 1 && x(0, "lib-search-panel-sort-options")
}
function us(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 11),
        h("click", function() {
            f(o);
            let t = d();
            return S(t.activeWatchPanel = !1)
        }),
        u()
    }
    if (i & 2) {
        let o = d();
        m("ngClass", U(1, cs, o.activeWatchPanel))
    }
}
function ms(i, r) {
    if (i & 1 && x(0, "lib-search-panel-recent-list", 12),
    i & 2) {
        let o = d();
        m("isMobile", o.isMobile)
    }
}
function ps(i, r) {
    if (i & 1 && (c(0, "span", 15),
    _(1, "\u0628\u0627\u0632\u06AF\u0634\u062A "),
    x(2, "svg-icon", 16),
    u()),
    i & 2) {
        let o = d(2);
        l(2),
        m("iconName", o.icons.ChevronLeft)
    }
}
function hs(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 13),
        h("click", function() {
            f(o);
            let t = d();
            return S(t.isAnySectorSelected && t.returnToSectors())
        }),
        _(1),
        y(2, ps, 3, 1, "span", 14),
        u()
    }
    if (i & 2) {
        let o = d();
        l(),
        V(" ", o.isAnySectorSelected ? o.selectedSector == null ? null : o.selectedSector.sectorName : "\u0635\u0646\u0627\u06CC\u0639 \u0645\u0646\u062A\u062E\u0628", " "),
        l(),
        m("ngIf", o.isAnySectorSelected && !o.searchInputExists)
    }
}
function Cs(i, r) {
    i & 1 && x(0, "lib-search-panel-sector-container", 9)
}
function gs(i, r) {
    if (i & 1 && x(0, "lib-search-flat-result-list", 17),
    i & 2) {
        let o = d();
        m("showMarketData", !o.searchInputExists)("searchResults", o.searchResultDictionary())("searchInputExists", o.searchInputExists)("isMobile", o.isMobile)
    }
}
var a0 = ( () => {
    let r = class r {
        constructor(e, t, n, s, a, p) {
            this.searchService = e,
            this.marketDataService = t,
            this.deviceService = n,
            this.conditionalNotificationService = s,
            this.lsService = a,
            this.location = p,
            this.icons = j,
            this.preItemIdString = "searchPanelItem-",
            this.searchValue = new je,
            this.selectSymbol = new je,
            this.openNoteManagement = new je,
            this.openConditionalTools = new je,
            this.marketWatchAddToCategorySelector = new je,
            this.isMobile = !0,
            this.subs = [],
            this.lastSearchValue = "",
            this.searchResultDictionary = I({}),
            this.searchListSize = L( () => Object.keys(this.searchResultDictionary() ?? {}).length),
            this.activeWatchPanel = !1,
            this.stockWatchCategoryList = [],
            this.keyInx = -1,
            this.maxSymbols = 0,
            N(this.searchService.selectedSector$.pipe(oe(Boolean), F(g => {
                g !== null && this.location.go(`/${cn.SEARCH_ROUTE}/${g.sectorCode}`)
            }
            ), F(this.scrollToTop), W(g => this.searchService.searchBySectorCategory(g)), oe(g => !!g && g.length > 0), Y(g => (this.searchResultDictionary.set(this.searchService.getSearchResultAsRecords(this.searchService.splitSearchResultByCategories(g))),
            this.getMarketDataForAllArrayItems(g))), F( () => {
                this.selectFirstCategoryForKeyboardNavigation()
            }
            ))),
            N(this.searchService.needSort$.pipe(Ge(Object.keys(this.searchResultDictionary()).length > 100 ? 1e3 : 200), F( () => {
                let g = this.searchService.sortRecordsSearchResult(this.searchResultDictionary());
                this.searchResultDictionary.update(v => (Object.entries(g).forEach( ([O,k]) => {
                    v[O].listIndex = k
                }
                ),
                te({}, v)))
            }
            ))),
            N(this.searchService.marketWatchCategorySelector$.pipe(oe(Boolean), F(g => {
                this.marketWatchAddToCategorySelector.emit(g)
            }
            )))
        }
        getMarketDataForAllArrayItems(e) {
            return Xe(e).pipe(Y(t => {
                if (!t || t.length > 0)
                    return this.getMarketDataForIsins(t)
            }
            ))
        }
        getMarketDataForIsins(e) {
            let t = e.map(n => n.symbolIsin);
            return this.marketDataService.GetMarketData(2, t).pipe(F(n => {
                this.searchResultDictionary.update(s => (n.forEach(a => {
                    s[a.symbolIsin] = ze(te({}, s[a.symbolIsin]), {
                        type: "symbol",
                        priceVar: a.priceVar,
                        lastTradedPrice: a.lastTradedPrice,
                        stateCode: a.stateCode,
                        totalNumberOfSharesTraded: a.totalNumberOfSharesTraded,
                        stateColor: ke(a.stateCode)
                    })
                }
                ),
                te({}, s)))
            }
            ), ki( () => []))
        }
        get selectedSector() {
            return this.searchService.selectedSector()
        }
        get sectorStocksFilterActive() {
            return this.searchService.sectorStocksFilterActive
        }
        get searchInputExists() {
            return this.lastSearchValue?.length > 0
        }
        get isAnySectorSelected() {
            return this.searchService.selectedSector() !== null
        }
        ngOnInit() {
            this.isMobile && this.setViewPortHeight(),
            this.subscribedToSelectedSearchedSymbol(),
            this.subscribedToOpenConditionalForm(),
            this.subscribedToOpenNot()
        }
        ngOnDestroy() {
            this.subs.forEach(e => e.unsubscribe()),
            this.searchService.setSelectedSearchedSymbol(null),
            this.searchService.resetSearchListStatus()
        }
        onClearSearchClicked() {
            this.lastSearchValue = ""
        }
        onClearSearch() {
            if (this.searchResultDictionary.set({}),
            this.isAnySectorSelected && !this.searchInputExists) {
                let e = this.searchService.selectedSector();
                this.searchService.selectedSector.set(null),
                this.searchService.selectedSector.set(te({}, e)),
                this.searchService.resetSearchListStatus()
            }
        }
        searchInputValueChanged(e) {
            this.lastSearchValue = e
        }
        onSearchChangeWithCategorySplit(e) {
            this.scrollToTop(),
            e.size > 0 ? (this.searchResultDictionary.set(this.searchService.getSearchResultAsRecords(e, 5)),
            this.selectFirstCategoryForKeyboardNavigation()) : this.onClearSearch()
        }
        subscribedToSelectedSearchedSymbol() {
            let e = this.searchService.selectedSearchedSymbol$.pipe(F(t => {
                t && this.activateStock(t)
            }
            )).subscribe();
            this.subs.push(e)
        }
        subscribedToOpenNot() {
            let e = this.searchService.openNoteManagement$.pipe(F(t => {
                t?.length > 0 && this.activeNotePanel(t),
                t = null
            }
            )).subscribe();
            this.subs.push(e)
        }
        subscribedToOpenConditionalForm() {
            let e = this.searchService.openConditionalTools$.pipe(F(t => {
                t?.length > 0 && this.activeConditionalPanel(t),
                t = null
            }
            )).subscribe();
            this.subs.push(e)
        }
        setViewPortHeight() {
            this.main = document.getElementById("root");
            let e = this.main.getBoundingClientRect().height;
            this.main.style.height = `${e}px`
        }
        returnToSectors() {
            this.location.go("/"),
            this.searchService.resetSearchListStatus(),
            this.searchService.sectorStocksFilterActive && this.searchService.toggleFilterActive(),
            this.scrollToTop(),
            this.searchResultDictionary.set({})
        }
        onSectorStocksFilterActiveClick() {
            this.searchService.toggleFilterActive()
        }
        scrollToTop() {
            document.getElementsByClassName("search-content")[0].scrollTop = 0
        }
        activateStock(e) {
            this.selectSymbol.emit(e)
        }
        activeNotePanel(e) {
            this.openNoteManagement.emit(e)
        }
        activeConditionalPanel(e) {
            this.openConditionalTools.emit(e)
        }
        checkActive(e) {
            return e === this.keyInx ? (document.getElementById(e.toString())?.scrollIntoView(!1),
            !0) : !1
        }
        arrowUp() {
            this.isMobile || this.searchService.keyUp.next(!0)
        }
        arrowDown() {
            this.isMobile || this.searchService.keyDown.next(!0)
        }
        enter() {
            if (Object.keys(this.searchResultDictionary()).length > 0) {
                let e = Object.values(this.searchResultDictionary()).find(t => t.type === "symbol" && t.listIndex === this.searchService.categoryNavigating.value + "-" + this.searchService.selectedIndex());
                if (e && e.type === "symbol") {
                    this.searchService.addStockToRecent(e),
                    this.activateStock(e);
                    return
                }
            }
        }
        selectFirstCategoryForKeyboardNavigation() {
            this.searchService.resetKeyboardNavigation(),
            this.searchService.categoryNavigating.next(Nt.get(Object.values(this.searchResultDictionary())[0].searchCategoryName)),
            this.searchInput.inputFocus()
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)(C(ne),C(Ot),C(Ke),C(de),C(Te),C(yt))
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["lib-search-panel"]],
        viewQuery: function(t, n) {
            if (t & 1 && Zi(ls, 5),
            t & 2) {
                let s;
                Ki(s = Qi()) && (n.searchInput = s.first)
            }
        },
        inputs: {
            isMobile: "isMobile"
        },
        outputs: {
            searchValue: "searchValue",
            selectSymbol: "selectSymbol",
            openNoteManagement: "openNoteManagement",
            openConditionalTools: "openConditionalTools",
            marketWatchAddToCategorySelector: "marketWatchAddToCategorySelector"
        },
        decls: 11,
        vars: 11,
        consts: [["searchInput", ""], [1, "search-panel", "h-100", "cup", "d-flex", "flex-column"], [1, "search-filter", "p-2", "position-relative", "bg-principal", "bg-principal-4x-dark", "bg-principal-2x-mobile", "bg-principal-2x-dark-mobile", "border-bottom"], ["data-cy", "search-panel-symbol-input", "autofocus", "", 1, "position-relative", 3, "resultGeneratedCategorySplitted", "valueChanged", "clearClicked", "arrowUp", "arrowDown", "enterPressed", "includeFunds", "includeCars", "searchByCategorySplitted", "isMobile", "showNothingFoundText"], [4, "ngIf"], [1, "row-list", "search-list", "search-content", "d-flex", "flex-column", "overflow-auto", "h-100"], ["class", "overlay", 3, "ngClass", "click", 4, "ngIf"], ["data-cy", "search-panel-recent-list", "class", "list-group list-group-flush", 3, "isMobile", 4, "ngIf"], ["class", "px-2 pt-2 d-flex justify-content-between align-items-center mt-2 sector-header flex-shrink-0", 3, "click", 4, "ngIf"], ["data-cy", "search-panel-sector-container"], ["class", "list-group list-group-flush h-100", "data-cy", "search-panel-result-list", 3, "showMarketData", "searchResults", "searchInputExists", "isMobile", 4, "ngIf"], [1, "overlay", 3, "click", "ngClass"], ["data-cy", "search-panel-recent-list", 1, "list-group", "list-group-flush", 3, "isMobile"], [1, "px-2", "pt-2", "d-flex", "justify-content-between", "align-items-center", "mt-2", "sector-header", "flex-shrink-0", 3, "click"], ["class", "text-muted cup", 4, "ngIf"], [1, "text-muted", "cup"], ["width", "18", "height", "18", 1, "", 3, "iconName"], ["data-cy", "search-panel-result-list", 1, "list-group", "list-group-flush", "h-100", 3, "showMarketData", "searchResults", "searchInputExists", "isMobile"]],
        template: function(t, n) {
            if (t & 1) {
                let s = w();
                c(0, "div", 1)(1, "div", 2)(2, "lib-search-symbol-input", 3, 0),
                h("resultGeneratedCategorySplitted", function(p) {
                    return f(s),
                    S(n.onSearchChangeWithCategorySplit(p))
                })("valueChanged", function(p) {
                    return f(s),
                    S(n.searchInputValueChanged(p))
                })("clearClicked", function() {
                    return f(s),
                    S(n.onClearSearchClicked())
                })("arrowUp", function() {
                    return f(s),
                    S(n.arrowUp())
                })("arrowDown", function() {
                    return f(s),
                    S(n.arrowDown())
                })("enterPressed", function() {
                    return f(s),
                    S(n.enter())
                }),
                u()(),
                y(4, ds, 1, 0, "lib-search-panel-sort-options", 4),
                c(5, "div", 5),
                y(6, us, 1, 3, "div", 6)(7, ms, 1, 1, "lib-search-panel-recent-list", 7)(8, hs, 3, 2, "div", 8)(9, Cs, 1, 0, "lib-search-panel-sector-container", 9)(10, gs, 1, 4, "lib-search-flat-result-list", 10),
                u()()
            }
            t & 2 && (l(2),
            m("includeFunds", !0)("includeCars", !0)("searchByCategorySplitted", !0)("isMobile", n.isMobile)("showNothingFoundText", !n.isMobile),
            l(2),
            m("ngIf", n.sectorStocksFilterActive && n.isAnySectorSelected && !n.searchInputExists),
            l(2),
            m("ngIf", n.isMobile),
            l(),
            m("ngIf", !n.searchInputExists && !n.isAnySectorSelected),
            l(),
            m("ngIf", !n.searchInputExists),
            l(),
            b(!n.searchInputExists && !n.isAnySectorSelected ? 9 : -1),
            l(),
            m("ngIf", n.searchInputExists || n.searchListSize() > 0))
        },
        dependencies: [Lt, xt, pr, q, fr, Sr, z, _r],
        encapsulation: 2
    });
    let i = r;
    return i
}
)();
var fs = (i, r) => r.symbolIsin
  , Ss = i => ({
    "list-group-item--active": i
});
function _s(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "div", 2),
        h("click", function() {
            f(o);
            let t = d().$implicit
              , n = d();
            return S(n.handleExpandability(t.key))
        }),
        _(1),
        x(2, "svg-icon", 3),
        u()
    }
    if (i & 2) {
        let o = d().$implicit;
        l(),
        V(" ", o.key, " "),
        l(),
        m("iconName", !(o == null || o.value == null) && o.value.expanded ? "chevron-up" : "chevron-down")
    }
}
function bs(i, r) {
    if (i & 1 && x(0, "svg-icon", 9),
    i & 2) {
        let o = d().$implicit
          , e = d(3);
        m("iconName", e.icons.Loading),
        Q("data-cy", "mw-symbol-list-btn-loading-" + (o == null ? null : o.symbolIsin))
    }
}
function vs(i, r) {
    if (i & 1 && x(0, "svg-icon", 10),
    i & 2) {
        let o = d().$implicit
          , e = d(3);
        m("iconName", e.icons.CheckBox),
        Q("data-cy", "mw-symbol-list-btn-checkbox-" + (o == null ? null : o.symbolIsin))
    }
}
function ys(i, r) {
    if (i & 1 && x(0, "svg-icon", 11),
    i & 2) {
        let o = d().$implicit
          , e = d(3);
        m("iconName", e.icons.PlusBox),
        Q("data-cy", "mw-symbol-list-btn-plus-" + (o == null ? null : o.symbolIsin))
    }
}
function xs(i, r) {
    if (i & 1) {
        let o = w();
        c(0, "li", 5),
        h("click", function() {
            let t = f(o).$implicit
              , n = d(2).$implicit
              , s = d();
            return S(s.handleSymbolClick(n == null ? null : n.key, t))
        }),
        c(1, "div", 6),
        x(2, "span", 7)(3, "small", 8),
        u(),
        y(4, bs, 1, 2, "svg-icon", 9)(5, vs, 1, 2, "svg-icon", 10)(6, ys, 1, 2, "svg-icon", 11),
        u()
    }
    if (i & 2) {
        let o = r.$implicit
          , e = d(3);
        m("id", o.listIndex)("ngClass", U(6, Ss, e.listIndex() === o.listIndex)),
        Q("data-cy", "mw-symbol-list-" + o.symbolIsin),
        l(2),
        m("innerHTML", o == null ? null : o.symbolNameInnerHtml, Be),
        l(),
        m("innerHTML", o == null ? null : o.symbolTitleInnerHtml, Be),
        l(),
        b(o != null && o.loading ? 4 : !(o != null && o.loading) && (o != null && o.isInCategory) ? 5 : !(o != null && o.loading) && !(o != null && o.isInCategory) ? 6 : -1)
    }
}
function ws(i, r) {
    if (i & 1 && (c(0, "ul", 1),
    Le(1, xs, 7, 8, "li", 4, fs),
    u()),
    i & 2) {
        let o = d().$implicit;
        l(),
        Ve(o == null || o.value == null ? null : o.value.symbols)
    }
}
function Is(i, r) {
    if (i & 1 && y(0, _s, 3, 2, "div", 0)(1, ws, 3, 0, "ul", 1),
    i & 2) {
        let o = r.$implicit;
        b(!(o == null || o.value == null) && o.value.expandable ? 0 : -1),
        l(),
        b(!(o == null || o.value == null) && o.value.expanded ? 1 : -1)
    }
}
var br = ( () => {
    let r = class r {
        constructor() {
            this.icons = j,
            this.marketWatchStoreFacade = D(Ae),
            this.cdr = D(nn),
            this.marketWatchFacade = D(jt),
            this.marketWatchManagerService = D(Wn),
            this.destroyRef = D(Li),
            this.listIndex = A.required(),
            this.sSymbols = I(void 0),
            this.keyValueOrder = () => 0
        }
        set searchedSymbols(e) {
            this.sSymbols.set(e)
        }
        ngOnInit() {
            this.indexEmitter.subscribe(e => {
                let t = this.sSymbols().entries();
                for (let[n,s] of t) {
                    let a = s.symbols.find(p => p.listIndex === e);
                    if (a) {
                        this.handleSymbolClick(n, a);
                        break
                    }
                }
            }
            ),
            this.marketWatchManagerService.symbolAddedToCategory$.pipe(we(this.destroyRef)).subscribe( ({key: e, symbolIsins: t}) => {
                this.changeLoading(e, t, !1),
                this.changeIsInCategory(e, t, !0)
            }
            ),
            this.marketWatchManagerService.symbolsRemovedFromCategory$.pipe(we(this.destroyRef)).subscribe( ({key: e, symbolIsins: t}) => {
                for (let n of t)
                    this.changeLoading(e, n, !1),
                    this.changeIsInCategory(e, n, !1)
            }
            )
        }
        handleSymbolClick(e, t) {
            t.loading || (t.isInCategory ? this.remove(e, t) : this.add(e, t))
        }
        add(e, {symbolIsin: t}) {
            this.changeLoading(e, t, !0),
            this.marketWatchFacade.addSymbolToCategory(this.marketWatchStoreFacade.getSelectedCategoryId(), t, e)
        }
        remove(e, {symbolIsin: t}) {
            this.changeLoading(e, t, !0),
            this.marketWatchFacade.removeSymbolsFromCategory(this.marketWatchStoreFacade.getSelectedCategoryId(), [t], e)
        }
        handleExpandability(e) {
            this.sSymbols.update(t => {
                let n = t.get(e);
                return n.expanded = !n.expanded,
                new Map(t)
            }
            )
        }
        changeLoading(e, t, n) {
            this.sSymbols.update(s => {
                let a = s.get(e)
                  , p = a?.symbols?.find(g => g.symbolIsin === t);
                if (p) {
                    p.loading = n;
                    let g = a.symbols.findIndex(v => v.symbolIsin === t);
                    a.symbols.splice(g, 1, p),
                    s.delete(e),
                    s.set(e, a)
                }
                return s
            }
            ),
            this.cdr.detectChanges()
        }
        changeIsInCategory(e, t, n) {
            this.sSymbols.update(s => {
                let a = s.get(e)
                  , p = a.symbols.find(g => g.symbolIsin === t);
                if (p) {
                    p.isInCategory = n;
                    let g = a.symbols.findIndex(v => v.symbolIsin === t);
                    a.symbols.splice(g, 1, p),
                    s.delete(e),
                    s.set(e, a)
                }
                return s
            }
            ),
            this.cdr.detectChanges()
        }
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["lib-market-watch-symbol-list"]],
        inputs: {
            listIndex: [1, "listIndex"],
            searchedSymbols: "searchedSymbols",
            indexEmitter: "indexEmitter"
        },
        decls: 3,
        vars: 3,
        consts: [[1, "d-flex", "justify-content-between", "align-items-center", "text-body-tertiary", "cup", "position-sticky", "top-0", "z-1", "py-1", "px-2", "bg-principal-3x", "rounded-2", "mt-1"], [1, "p-0", "m-0", "list-group", "list-group-flush"], [1, "d-flex", "justify-content-between", "align-items-center", "text-body-tertiary", "cup", "position-sticky", "top-0", "z-1", "py-1", "px-2", "bg-principal-3x", "rounded-2", "mt-1", 3, "click"], ["width", "20", "height", "20", 3, "iconName"], [1, "list-group-item", "d-flex", "align-items-center", "py-2", "px-0", "cup", "overflow-hidden", 3, "id", "ngClass"], [1, "list-group-item", "d-flex", "align-items-center", "py-2", "px-0", "cup", "overflow-hidden", 3, "click", "id", "ngClass"], [1, "flex-grow-1", "text-truncate"], [1, "d-block", "fw-bold", 3, "innerHTML"], [1, "text-muted", 3, "innerHTML"], ["width", "24", "height", "24", 1, "text-muted", "spin", 3, "iconName"], ["width", "24", "height", "24", 1, "text-primary", 3, "iconName"], ["width", "24", "height", "24", 1, "text-muted", 3, "iconName"]],
        template: function(t, n) {
            t & 1 && (Le(0, Is, 2, 2, null, null, Bi),
            se(2, "keyvalue")),
            t & 2 && Ve(bt(2, 0, n.sSymbols(), n.keyValueOrder))
        },
        dependencies: [q, ln, z],
        styles: [`.list-group-item--active[_ngcontent-%COMP%]{background-color:#00000008!important}
/*# sourceMappingURL=market-watch-symbol-list.component-4PC7LD7R.css.map */`],
        changeDetection: 0
    });
    let i = r;
    return i
}
)();
function ks(i, r) {
    if (i & 1 && (c(0, "header", 0),
    _(1, " \u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0627\u062F \u0628\u0647 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646 "),
    c(2, "span", 4),
    _(3),
    u()()),
    i & 2) {
        let o, e = d();
        l(3),
        V("\xA0 ", (o = e.marketWatchStore.categories()[e.marketWatchStore.selectedCategoryId()]) == null ? null : o.name, " \xA0")
    }
}
var Ts = new Map([[ce.Default, []]])
  , O0 = ( () => {
    let r = class r {
        constructor() {
            this.icons = j,
            this.marketWatchStore = D(Bn),
            this.searchSymbolService = D(ne),
            this.isMobile = A.required(),
            this.searchedData = I(Ts),
            this.searchedData$ = J(this.searchedData),
            this.defaultList$ = this.marketWatchStore.selectedCategoryId$.pipe(dt(), ve(this.searchedData$), W( ([e]) => {
                let t = this.searchSymbolService.batchSearchBySymbolIsins(this.marketWatchStore.categories()[e]?.categorySymbolIsins);
                return new Map([[ce.Default, t.length > 0 ? t : this.searchSymbolService.defaultSearchSymbols]])
            }
            )),
            this.defaultList = N(this.defaultList$),
            this.listData = N(this.defaultList$.pipe(ve(this.searchedData$, this.marketWatchStore.selectedCategoryId$), W( ([e,t,n]) => {
                let s = t.has(ce.Default) && t.get(ce.Default)?.length > 0;
                return this.computedSymbols(this.marketWatchStore.categories()[n]?.categorySymbolIsins, new Map(s ? e : t))
            }
            ))),
            this.listIndex = I(-1),
            this.totalSymbols = L( () => {
                let e = 0;
                return this.listData()?.forEach(t => {
                    e += t.symbols.length
                }
                ),
                e
            }
            ),
            this.indexEmitter = new re
        }
        computedSymbols(e, t) {
            let n = new Map
              , s = 0;
            return t.forEach( (a, p) => {
                let g = a.map( (O, k) => ({
                    symbolIsin: O.symbolIsin,
                    symbolNameInnerHtml: O.symbolNameInnerHtml,
                    symbolTitleInnerHtml: O.symbolTitleInnerHtml,
                    isInCategory: e?.includes(O.symbolIsin),
                    loading: !1,
                    listIndex: s + k
                }));
                s += g.length;
                let v = {
                    title: p,
                    size: a.length,
                    expandable: p != ce.Default,
                    expanded: !0,
                    loading: !1,
                    symbols: g
                };
                n.set(p, v)
            }
            ),
            n
        }
        handleEnter() {
            this.indexEmitter.next(this.listIndex())
        }
        handleArrowUp() {
            this.isMobile() || (this.listIndex.update(e => e > 0 ? e - 1 : 0),
            this.scrollToViewByIndex(this.listIndex().toString()))
        }
        handleArrowDown() {
            this.isMobile() || (this.listIndex.update(e => e < this.totalSymbols() - 1 ? e + 1 : this.totalSymbols() - 1),
            this.scrollToViewByIndex(this.listIndex().toString()))
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
    }
    ;
    r.\u0275fac = function(t) {
        return new (t || r)
    }
    ,
    r.\u0275cmp = M({
        type: r,
        selectors: [["lib-market-watch-symbol-overlay"]],
        inputs: {
            isMobile: [1, "isMobile"]
        },
        decls: 4,
        vars: 7,
        consts: [[1, "p-3", "text-center", "position-relative"], ["autofocus", "", 1, "mx-3", "mx-lg-0", "position-relative", 3, "arrowDown", "arrowUp", "enterPressed", "resultGeneratedCategorySplitted", "isMobile", "showDefaults", "searchByCategorySplitted"], [1, "flex-grow-1", "overflow-auto", "mt-2", "px-3", "px-lg-0"], [3, "searchedSymbols", "listIndex", "indexEmitter"], [1, "text-primary"]],
        template: function(t, n) {
            t & 1 && (y(0, ks, 4, 1, "header", 0),
            c(1, "lib-search-symbol-input", 1),
            h("arrowDown", function() {
                return n.handleArrowDown()
            })("arrowUp", function() {
                return n.handleArrowUp()
            })("enterPressed", function() {
                return n.handleEnter()
            })("resultGeneratedCategorySplitted", function(a) {
                return n.searchedData.set(a)
            }),
            u(),
            c(2, "div", 2),
            x(3, "lib-market-watch-symbol-list", 3),
            u()),
            t & 2 && (b(n.isMobile() ? 0 : -1),
            l(),
            m("isMobile", n.isMobile())("showDefaults", !0)("searchByCategorySplitted", !0),
            l(2),
            m("searchedSymbols", n.listData())("listIndex", n.listIndex())("indexEmitter", n.indexEmitter))
        },
        dependencies: [br, Lt],
        encapsulation: 2,
        changeDetection: 0
    });
    let i = r;
    return i
}
)();
export {zr as a, zs as b, Hs as c, rl as d, a0 as e, O0 as f, bl as g, Pl as h};
//# sourceMappingURL=chunk-JIF6FC2D.js.map
