var ae = globalThis;
function ee(e) {
    return (ae.__Zone_symbol_prefix || "__zone_symbol__") + e
}
function dt() {
    let e = ae.performance;
    function n(j) {
        e && e.mark && e.mark(j)
    }
    function a(j, i) {
        e && e.measure && e.measure(j, i)
    }
    n("Zone");
    let Y = class Y {
        static assertZonePatched() {
            if (ae.Promise !== S.ZoneAwarePromise)
                throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
        }
        static get root() {
            let i = Y.current;
            for (; i.parent; )
                i = i.parent;
            return i
        }
        static get current() {
            return b.zone
        }
        static get currentTask() {
            return D
        }
        static __load_patch(i, s, o=!1) {
            if (S.hasOwnProperty(i)) {
                let p = ae[ee("forceDuplicateZoneCheck")] === !0;
                if (!o && p)
                    throw Error("Already loaded patch: " + i)
            } else if (!ae["__Zone_disable_" + i]) {
                let p = "Zone:" + i;
                n(p),
                S[i] = s(ae, Y, w),
                a(p, p)
            }
        }
        get parent() {
            return this._parent
        }
        get name() {
            return this._name
        }
        constructor(i, s) {
            this._parent = i,
            this._name = s ? s.name || "unnamed" : "<root>",
            this._properties = s && s.properties || {},
            this._zoneDelegate = new f(this,this._parent && this._parent._zoneDelegate,s)
        }
        get(i) {
            let s = this.getZoneWith(i);
            if (s)
                return s._properties[i]
        }
        getZoneWith(i) {
            let s = this;
            for (; s; ) {
                if (s._properties.hasOwnProperty(i))
                    return s;
                s = s._parent
            }
            return null
        }
        fork(i) {
            if (!i)
                throw new Error("ZoneSpec required!");
            return this._zoneDelegate.fork(this, i)
        }
        wrap(i, s) {
            if (typeof i != "function")
                throw new Error("Expecting function got: " + i);
            let o = this._zoneDelegate.intercept(this, i, s)
              , p = this;
            return function() {
                return p.runGuarded(o, this, arguments, s)
            }
        }
        run(i, s, o, p) {
            b = {
                parent: b,
                zone: this
            };
            try {
                return this._zoneDelegate.invoke(this, i, s, o, p)
            } finally {
                b = b.parent
            }
        }
        runGuarded(i, s=null, o, p) {
            b = {
                parent: b,
                zone: this
            };
            try {
                try {
                    return this._zoneDelegate.invoke(this, i, s, o, p)
                } catch (H) {
                    if (this._zoneDelegate.handleError(this, H))
                        throw H
                }
            } finally {
                b = b.parent
            }
        }
        runTask(i, s, o) {
            if (i.zone != this)
                throw new Error("A task can only be run in the zone of creation! (Creation: " + (i.zone || K).name + "; Execution: " + this.name + ")");
            let p = i
              , {type: H, data: {isPeriodic: M=!1, isRefreshable: se=!1}={}} = i;
            if (i.state === q && (H === z || H === g))
                return;
            let le = i.state != Z;
            le && p._transitionTo(Z, d);
            let ue = D;
            D = p,
            b = {
                parent: b,
                zone: this
            };
            try {
                H == g && i.data && !M && !se && (i.cancelFn = void 0);
                try {
                    return this._zoneDelegate.invokeTask(this, p, s, o)
                } catch (ne) {
                    if (this._zoneDelegate.handleError(this, ne))
                        throw ne
                }
            } finally {
                let ne = i.state;
                if (ne !== q && ne !== X)
                    if (H == z || M || se && ne === k)
                        le && p._transitionTo(d, Z, k);
                    else {
                        let h = p._zoneDelegates;
                        this._updateTaskCount(p, -1),
                        le && p._transitionTo(q, Z, q),
                        se && (p._zoneDelegates = h)
                    }
                b = b.parent,
                D = ue
            }
        }
        scheduleTask(i) {
            if (i.zone && i.zone !== this) {
                let o = this;
                for (; o; ) {
                    if (o === i.zone)
                        throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${i.zone.name}`);
                    o = o.parent
                }
            }
            i._transitionTo(k, q);
            let s = [];
            i._zoneDelegates = s,
            i._zone = this;
            try {
                i = this._zoneDelegate.scheduleTask(this, i)
            } catch (o) {
                throw i._transitionTo(X, k, q),
                this._zoneDelegate.handleError(this, o),
                o
            }
            return i._zoneDelegates === s && this._updateTaskCount(i, 1),
            i.state == k && i._transitionTo(d, k),
            i
        }
        scheduleMicroTask(i, s, o, p) {
            return this.scheduleTask(new E(G,i,s,o,p,void 0))
        }
        scheduleMacroTask(i, s, o, p, H) {
            return this.scheduleTask(new E(g,i,s,o,p,H))
        }
        scheduleEventTask(i, s, o, p, H) {
            return this.scheduleTask(new E(z,i,s,o,p,H))
        }
        cancelTask(i) {
            if (i.zone != this)
                throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (i.zone || K).name + "; Execution: " + this.name + ")");
            if (!(i.state !== d && i.state !== Z)) {
                i._transitionTo(V, d, Z);
                try {
                    this._zoneDelegate.cancelTask(this, i)
                } catch (s) {
                    throw i._transitionTo(X, V),
                    this._zoneDelegate.handleError(this, s),
                    s
                }
                return this._updateTaskCount(i, -1),
                i._transitionTo(q, V),
                i.runCount = -1,
                i
            }
        }
        _updateTaskCount(i, s) {
            let o = i._zoneDelegates;
            s == -1 && (i._zoneDelegates = null);
            for (let p = 0; p < o.length; p++)
                o[p]._updateTaskCount(i.type, s)
        }
    }
    ;
    Y.__symbol__ = ee;
    let t = Y
      , c = {
        name: "",
        onHasTask: (j, i, s, o) => j.hasTask(s, o),
        onScheduleTask: (j, i, s, o) => j.scheduleTask(s, o),
        onInvokeTask: (j, i, s, o, p, H) => j.invokeTask(s, o, p, H),
        onCancelTask: (j, i, s, o) => j.cancelTask(s, o)
    };
    class f {
        get zone() {
            return this._zone
        }
        constructor(i, s, o) {
            this._taskCounts = {
                microTask: 0,
                macroTask: 0,
                eventTask: 0
            },
            this._zone = i,
            this._parentDelegate = s,
            this._forkZS = o && (o && o.onFork ? o : s._forkZS),
            this._forkDlgt = o && (o.onFork ? s : s._forkDlgt),
            this._forkCurrZone = o && (o.onFork ? this._zone : s._forkCurrZone),
            this._interceptZS = o && (o.onIntercept ? o : s._interceptZS),
            this._interceptDlgt = o && (o.onIntercept ? s : s._interceptDlgt),
            this._interceptCurrZone = o && (o.onIntercept ? this._zone : s._interceptCurrZone),
            this._invokeZS = o && (o.onInvoke ? o : s._invokeZS),
            this._invokeDlgt = o && (o.onInvoke ? s : s._invokeDlgt),
            this._invokeCurrZone = o && (o.onInvoke ? this._zone : s._invokeCurrZone),
            this._handleErrorZS = o && (o.onHandleError ? o : s._handleErrorZS),
            this._handleErrorDlgt = o && (o.onHandleError ? s : s._handleErrorDlgt),
            this._handleErrorCurrZone = o && (o.onHandleError ? this._zone : s._handleErrorCurrZone),
            this._scheduleTaskZS = o && (o.onScheduleTask ? o : s._scheduleTaskZS),
            this._scheduleTaskDlgt = o && (o.onScheduleTask ? s : s._scheduleTaskDlgt),
            this._scheduleTaskCurrZone = o && (o.onScheduleTask ? this._zone : s._scheduleTaskCurrZone),
            this._invokeTaskZS = o && (o.onInvokeTask ? o : s._invokeTaskZS),
            this._invokeTaskDlgt = o && (o.onInvokeTask ? s : s._invokeTaskDlgt),
            this._invokeTaskCurrZone = o && (o.onInvokeTask ? this._zone : s._invokeTaskCurrZone),
            this._cancelTaskZS = o && (o.onCancelTask ? o : s._cancelTaskZS),
            this._cancelTaskDlgt = o && (o.onCancelTask ? s : s._cancelTaskDlgt),
            this._cancelTaskCurrZone = o && (o.onCancelTask ? this._zone : s._cancelTaskCurrZone),
            this._hasTaskZS = null,
            this._hasTaskDlgt = null,
            this._hasTaskDlgtOwner = null,
            this._hasTaskCurrZone = null;
            let p = o && o.onHasTask
              , H = s && s._hasTaskZS;
            (p || H) && (this._hasTaskZS = p ? o : c,
            this._hasTaskDlgt = s,
            this._hasTaskDlgtOwner = this,
            this._hasTaskCurrZone = this._zone,
            o.onScheduleTask || (this._scheduleTaskZS = c,
            this._scheduleTaskDlgt = s,
            this._scheduleTaskCurrZone = this._zone),
            o.onInvokeTask || (this._invokeTaskZS = c,
            this._invokeTaskDlgt = s,
            this._invokeTaskCurrZone = this._zone),
            o.onCancelTask || (this._cancelTaskZS = c,
            this._cancelTaskDlgt = s,
            this._cancelTaskCurrZone = this._zone))
        }
        fork(i, s) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, i, s) : new t(i,s)
        }
        intercept(i, s, o) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, i, s, o) : s
        }
        invoke(i, s, o, p, H) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, i, s, o, p, H) : s.apply(o, p)
        }
        handleError(i, s) {
            return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, i, s) : !0
        }
        scheduleTask(i, s) {
            let o = s;
            if (this._scheduleTaskZS)
                this._hasTaskZS && o._zoneDelegates.push(this._hasTaskDlgtOwner),
                o = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, i, s),
                o || (o = s);
            else if (s.scheduleFn)
                s.scheduleFn(s);
            else if (s.type == G)
                U(s);
            else
                throw new Error("Task is missing scheduleFn.");
            return o
        }
        invokeTask(i, s, o, p) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, i, s, o, p) : s.callback.apply(o, p)
        }
        cancelTask(i, s) {
            let o;
            if (this._cancelTaskZS)
                o = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, i, s);
            else {
                if (!s.cancelFn)
                    throw Error("Task is not cancelable");
                o = s.cancelFn(s)
            }
            return o
        }
        hasTask(i, s) {
            try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, i, s)
            } catch (o) {
                this.handleError(i, o)
            }
        }
        _updateTaskCount(i, s) {
            let o = this._taskCounts
              , p = o[i]
              , H = o[i] = p + s;
            if (H < 0)
                throw new Error("More tasks executed then were scheduled.");
            if (p == 0 || H == 0) {
                let M = {
                    microTask: o.microTask > 0,
                    macroTask: o.macroTask > 0,
                    eventTask: o.eventTask > 0,
                    change: i
                };
                this.hasTask(this._zone, M)
            }
        }
    }
    class E {
        constructor(i, s, o, p, H, M) {
            if (this._zone = null,
            this.runCount = 0,
            this._zoneDelegates = null,
            this._state = "notScheduled",
            this.type = i,
            this.source = s,
            this.data = p,
            this.scheduleFn = H,
            this.cancelFn = M,
            !o)
                throw new Error("callback is not defined");
            this.callback = o;
            let se = this;
            i === z && p && p.useG ? this.invoke = E.invokeTask : this.invoke = function() {
                return E.invokeTask.call(ae, se, this, arguments)
            }
        }
        static invokeTask(i, s, o) {
            i || (i = this),
            Q++;
            try {
                return i.runCount++,
                i.zone.runTask(i, s, o)
            } finally {
                Q == 1 && J(),
                Q--
            }
        }
        get zone() {
            return this._zone
        }
        get state() {
            return this._state
        }
        cancelScheduleRequest() {
            this._transitionTo(q, k)
        }
        _transitionTo(i, s, o) {
            if (this._state === s || this._state === o)
                this._state = i,
                i == q && (this._zoneDelegates = null);
            else
                throw new Error(`${this.type} '${this.source}': can not transition to '${i}', expecting state '${s}'${o ? " or '" + o + "'" : ""}, was '${this._state}'.`)
        }
        toString() {
            return this.data && typeof this.data.handleId < "u" ? this.data.handleId.toString() : Object.prototype.toString.call(this)
        }
        toJSON() {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            }
        }
    }
    let T = ee("setTimeout"), m = ee("Promise"), C = ee("then"), _ = [], P = !1, I;
    function x(j) {
        if (I || ae[m] && (I = ae[m].resolve(0)),
        I) {
            let i = I[C];
            i || (i = I.then),
            i.call(I, j)
        } else
            ae[T](j, 0)
    }
    function U(j) {
        Q === 0 && _.length === 0 && x(J),
        j && _.push(j)
    }
    function J() {
        if (!P) {
            for (P = !0; _.length; ) {
                let j = _;
                _ = [];
                for (let i = 0; i < j.length; i++) {
                    let s = j[i];
                    try {
                        s.zone.runTask(s, null, null)
                    } catch (o) {
                        w.onUnhandledError(o)
                    }
                }
            }
            w.microtaskDrainDone(),
            P = !1
        }
    }
    let K = {
        name: "NO ZONE"
    }
      , q = "notScheduled"
      , k = "scheduling"
      , d = "scheduled"
      , Z = "running"
      , V = "canceling"
      , X = "unknown"
      , G = "microTask"
      , g = "macroTask"
      , z = "eventTask"
      , S = {}
      , w = {
        symbol: ee,
        currentZoneFrame: () => b,
        onUnhandledError: W,
        microtaskDrainDone: W,
        scheduleMicroTask: U,
        showUncaughtError: () => !t[ee("ignoreConsoleErrorUncaughtError")],
        patchEventTarget: () => [],
        patchOnProperties: W,
        patchMethod: () => W,
        bindArguments: () => [],
        patchThen: () => W,
        patchMacroTask: () => W,
        patchEventPrototype: () => W,
        isIEOrEdge: () => !1,
        getGlobalObjects: () => {}
        ,
        ObjectDefineProperty: () => W,
        ObjectGetOwnPropertyDescriptor: () => {}
        ,
        ObjectCreate: () => {}
        ,
        ArraySlice: () => [],
        patchClass: () => W,
        wrapWithCurrentZone: () => W,
        filterProperties: () => [],
        attachOriginToPatched: () => W,
        _redefineProperty: () => W,
        patchCallbacks: () => W,
        nativeScheduleMicroTask: x
    }
      , b = {
        parent: null,
        zone: new t(null,null)
    }
      , D = null
      , Q = 0;
    function W() {}
    return a("Zone", "Zone"),
    t
}
function _t() {
    let e = globalThis
      , n = e[ee("forceDuplicateZoneCheck")] === !0;
    if (e.Zone && (n || typeof e.Zone.__symbol__ != "function"))
        throw new Error("Zone already loaded.");
    return e.Zone ??= dt(),
    e.Zone
}
var be = Object.getOwnPropertyDescriptor
  , Ae = Object.defineProperty
  , je = Object.getPrototypeOf
  , Et = Object.create
  , Tt = Array.prototype.slice
  , He = "addEventListener"
  , xe = "removeEventListener"
  , Le = ee(He)
  , Ie = ee(xe)
  , fe = "true"
  , he = "false"
  , Pe = ee("");
function Ve(e, n) {
    return Zone.current.wrap(e, n)
}
function Ge(e, n, a, t, c) {
    return Zone.current.scheduleMacroTask(e, n, a, t, c)
}
var A = ee
  , De = typeof window < "u"
  , pe = De ? window : void 0
  , $ = De && pe || globalThis
  , gt = "removeAttribute";
function Fe(e, n) {
    for (let a = e.length - 1; a >= 0; a--)
        typeof e[a] == "function" && (e[a] = Ve(e[a], n + "_" + a));
    return e
}
function yt(e, n) {
    let a = e.constructor.name;
    for (let t = 0; t < n.length; t++) {
        let c = n[t]
          , f = e[c];
        if (f) {
            let E = be(e, c);
            if (!tt(E))
                continue;
            e[c] = (T => {
                let m = function() {
                    return T.apply(this, Fe(arguments, a + "." + c))
                };
                return _e(m, T),
                m
            }
            )(f)
        }
    }
}
function tt(e) {
    return e ? e.writable === !1 ? !1 : !(typeof e.get == "function" && typeof e.set > "u") : !0
}
var nt = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope
  , Se = !("nw"in $) && typeof $.process < "u" && $.process.toString() === "[object process]"
  , Be = !Se && !nt && !!(De && pe.HTMLElement)
  , rt = typeof $.process < "u" && $.process.toString() === "[object process]" && !nt && !!(De && pe.HTMLElement)
  , Ce = {}
  , mt = A("enable_beforeunload")
  , Ye = function(e) {
    if (e = e || $.event,
    !e)
        return;
    let n = Ce[e.type];
    n || (n = Ce[e.type] = A("ON_PROPERTY" + e.type));
    let a = this || e.target || $, t = a[n], c;
    if (Be && a === pe && e.type === "error") {
        let f = e;
        c = t && t.call(this, f.message, f.filename, f.lineno, f.colno, f.error),
        c === !0 && e.preventDefault()
    } else
        c = t && t.apply(this, arguments),
        e.type === "beforeunload" && $[mt] && typeof c == "string" ? e.returnValue = c : c != null && !c && e.preventDefault();
    return c
};
function $e(e, n, a) {
    let t = be(e, n);
    if (!t && a && be(a, n) && (t = {
        enumerable: !0,
        configurable: !0
    }),
    !t || !t.configurable)
        return;
    let c = A("on" + n + "patched");
    if (e.hasOwnProperty(c) && e[c])
        return;
    delete t.writable,
    delete t.value;
    let f = t.get
      , E = t.set
      , T = n.slice(2)
      , m = Ce[T];
    m || (m = Ce[T] = A("ON_PROPERTY" + T)),
    t.set = function(C) {
        let _ = this;
        if (!_ && e === $ && (_ = $),
        !_)
            return;
        typeof _[m] == "function" && _.removeEventListener(T, Ye),
        E && E.call(_, null),
        _[m] = C,
        typeof C == "function" && _.addEventListener(T, Ye, !1)
    }
    ,
    t.get = function() {
        let C = this;
        if (!C && e === $ && (C = $),
        !C)
            return null;
        let _ = C[m];
        if (_)
            return _;
        if (f) {
            let P = f.call(this);
            if (P)
                return t.set.call(this, P),
                typeof C[gt] == "function" && C.removeAttribute(n),
                P
        }
        return null
    }
    ,
    Ae(e, n, t),
    e[c] = !0
}
function ot(e, n, a) {
    if (n)
        for (let t = 0; t < n.length; t++)
            $e(e, "on" + n[t], a);
    else {
        let t = [];
        for (let c in e)
            c.slice(0, 2) == "on" && t.push(c);
        for (let c = 0; c < t.length; c++)
            $e(e, t[c], a)
    }
}
var oe = A("originalInstance");
function ve(e) {
    let n = $[e];
    if (!n)
        return;
    $[A(e)] = n,
    $[e] = function() {
        let c = Fe(arguments, e);
        switch (c.length) {
        case 0:
            this[oe] = new n;
            break;
        case 1:
            this[oe] = new n(c[0]);
            break;
        case 2:
            this[oe] = new n(c[0],c[1]);
            break;
        case 3:
            this[oe] = new n(c[0],c[1],c[2]);
            break;
        case 4:
            this[oe] = new n(c[0],c[1],c[2],c[3]);
            break;
        default:
            throw new Error("Arg list too long.")
        }
    }
    ,
    _e($[e], n);
    let a = new n(function() {}
    ), t;
    for (t in a)
        e === "XMLHttpRequest" && t === "responseBlob" || function(c) {
            typeof a[c] == "function" ? $[e].prototype[c] = function() {
                return this[oe][c].apply(this[oe], arguments)
            }
            : Ae($[e].prototype, c, {
                set: function(f) {
                    typeof f == "function" ? (this[oe][c] = Ve(f, e + "." + c),
                    _e(this[oe][c], f)) : this[oe][c] = f
                },
                get: function() {
                    return this[oe][c]
                }
            })
        }(t);
    for (t in n)
        t !== "prototype" && n.hasOwnProperty(t) && ($[e][t] = n[t])
}
function de(e, n, a) {
    let t = e;
    for (; t && !t.hasOwnProperty(n); )
        t = je(t);
    !t && e[n] && (t = e);
    let c = A(n)
      , f = null;
    if (t && (!(f = t[c]) || !t.hasOwnProperty(c))) {
        f = t[c] = t[n];
        let E = t && be(t, n);
        if (tt(E)) {
            let T = a(f, c, n);
            t[n] = function() {
                return T(this, arguments)
            }
            ,
            _e(t[n], f)
        }
    }
    return f
}
function pt(e, n, a) {
    let t = null;
    function c(f) {
        let E = f.data;
        return E.args[E.cbIdx] = function() {
            f.invoke.apply(this, arguments)
        }
        ,
        t.apply(E.target, E.args),
        f
    }
    t = de(e, n, f => function(E, T) {
        let m = a(E, T);
        return m.cbIdx >= 0 && typeof T[m.cbIdx] == "function" ? Ge(m.name, T[m.cbIdx], m, c) : f.apply(E, T)
    }
    )
}
function _e(e, n) {
    e[A("OriginalDelegate")] = n
}
var Je = !1
  , Me = !1;
function kt() {
    try {
        let e = pe.navigator.userAgent;
        if (e.indexOf("MSIE ") !== -1 || e.indexOf("Trident/") !== -1)
            return !0
    } catch {}
    return !1
}
function vt() {
    if (Je)
        return Me;
    Je = !0;
    try {
        let e = pe.navigator.userAgent;
        (e.indexOf("MSIE ") !== -1 || e.indexOf("Trident/") !== -1 || e.indexOf("Edge/") !== -1) && (Me = !0)
    } catch {}
    return Me
}
function Ke(e) {
    return typeof e == "function"
}
function Qe(e) {
    return typeof e == "number"
}
var me = !1;
if (typeof window < "u")
    try {
        let e = Object.defineProperty({}, "passive", {
            get: function() {
                me = !0
            }
        });
        window.addEventListener("test", e, e),
        window.removeEventListener("test", e, e)
    } catch {
        me = !1
    }
var bt = {
    useG: !0
}
  , te = {}
  , st = {}
  , it = new RegExp("^" + Pe + "(\\w+)(true|false)$")
  , ct = A("propagationStopped");
function at(e, n) {
    let a = (n ? n(e) : e) + he
      , t = (n ? n(e) : e) + fe
      , c = Pe + a
      , f = Pe + t;
    te[e] = {},
    te[e][he] = c,
    te[e][fe] = f
}
function Pt(e, n, a, t) {
    let c = t && t.add || He
      , f = t && t.rm || xe
      , E = t && t.listeners || "eventListeners"
      , T = t && t.rmAll || "removeAllListeners"
      , m = A(c)
      , C = "." + c + ":"
      , _ = "prependListener"
      , P = "." + _ + ":"
      , I = function(k, d, Z) {
        if (k.isRemoved)
            return;
        let V = k.callback;
        typeof V == "object" && V.handleEvent && (k.callback = g => V.handleEvent(g),
        k.originalDelegate = V);
        let X;
        try {
            k.invoke(k, d, [Z])
        } catch (g) {
            X = g
        }
        let G = k.options;
        if (G && typeof G == "object" && G.once) {
            let g = k.originalDelegate ? k.originalDelegate : k.callback;
            d[f].call(d, Z.type, g, G)
        }
        return X
    };
    function x(k, d, Z) {
        if (d = d || e.event,
        !d)
            return;
        let V = k || d.target || e
          , X = V[te[d.type][Z ? fe : he]];
        if (X) {
            let G = [];
            if (X.length === 1) {
                let g = I(X[0], V, d);
                g && G.push(g)
            } else {
                let g = X.slice();
                for (let z = 0; z < g.length && !(d && d[ct] === !0); z++) {
                    let S = I(g[z], V, d);
                    S && G.push(S)
                }
            }
            if (G.length === 1)
                throw G[0];
            for (let g = 0; g < G.length; g++) {
                let z = G[g];
                n.nativeScheduleMicroTask( () => {
                    throw z
                }
                )
            }
        }
    }
    let U = function(k) {
        return x(this, k, !1)
    }
      , J = function(k) {
        return x(this, k, !0)
    };
    function K(k, d) {
        if (!k)
            return !1;
        let Z = !0;
        d && d.useG !== void 0 && (Z = d.useG);
        let V = d && d.vh
          , X = !0;
        d && d.chkDup !== void 0 && (X = d.chkDup);
        let G = !1;
        d && d.rt !== void 0 && (G = d.rt);
        let g = k;
        for (; g && !g.hasOwnProperty(c); )
            g = je(g);
        if (!g && k[c] && (g = k),
        !g || g[m])
            return !1;
        let z = d && d.eventNameToString, S = {}, w = g[m] = g[c], b = g[A(f)] = g[f], D = g[A(E)] = g[E], Q = g[A(T)] = g[T], W;
        d && d.prepend && (W = g[A(d.prepend)] = g[d.prepend]);
        function Y(r, u) {
            return !me && typeof r == "object" && r ? !!r.capture : !me || !u ? r : typeof r == "boolean" ? {
                capture: r,
                passive: !0
            } : r ? typeof r == "object" && r.passive !== !1 ? {
                ...r,
                passive: !0
            } : r : {
                passive: !0
            }
        }
        let j = function(r) {
            if (!S.isExisting)
                return w.call(S.target, S.eventName, S.capture ? J : U, S.options)
        }
          , i = function(r) {
            if (!r.isRemoved) {
                let u = te[r.eventName], v;
                u && (v = u[r.capture ? fe : he]);
                let R = v && r.target[v];
                if (R) {
                    for (let y = 0; y < R.length; y++)
                        if (R[y] === r) {
                            R.splice(y, 1),
                            r.isRemoved = !0,
                            r.removeAbortListener && (r.removeAbortListener(),
                            r.removeAbortListener = null),
                            R.length === 0 && (r.allRemoved = !0,
                            r.target[v] = null);
                            break
                        }
                }
            }
            if (r.allRemoved)
                return b.call(r.target, r.eventName, r.capture ? J : U, r.options)
        }
          , s = function(r) {
            return w.call(S.target, S.eventName, r.invoke, S.options)
        }
          , o = function(r) {
            return W.call(S.target, S.eventName, r.invoke, S.options)
        }
          , p = function(r) {
            return b.call(r.target, r.eventName, r.invoke, r.options)
        }
          , H = Z ? j : s
          , M = Z ? i : p
          , se = function(r, u) {
            let v = typeof u;
            return v === "function" && r.callback === u || v === "object" && r.originalDelegate === u
        }
          , le = d && d.diff ? d.diff : se
          , ue = Zone[A("UNPATCHED_EVENTS")]
          , ne = e[A("PASSIVE_EVENTS")];
        function h(r) {
            if (typeof r == "object" && r !== null) {
                let u = {
                    ...r
                };
                return r.signal && (u.signal = r.signal),
                u
            }
            return r
        }
        let l = function(r, u, v, R, y=!1, O=!1) {
            return function() {
                let N = this || e
                  , L = arguments[0];
                d && d.transferEventName && (L = d.transferEventName(L));
                let F = arguments[1];
                if (!F)
                    return r.apply(this, arguments);
                if (Se && L === "uncaughtException")
                    return r.apply(this, arguments);
                let B = !1;
                if (typeof F != "function") {
                    if (!F.handleEvent)
                        return r.apply(this, arguments);
                    B = !0
                }
                if (V && !V(r, F, N, arguments))
                    return;
                let Ee = me && !!ne && ne.indexOf(L) !== -1
                  , ie = h(Y(arguments[2], Ee))
                  , Te = ie?.signal;
                if (Te?.aborted)
                    return;
                if (ue) {
                    for (let ce = 0; ce < ue.length; ce++)
                        if (L === ue[ce])
                            return Ee ? r.call(N, L, F, ie) : r.apply(this, arguments)
                }
                let Oe = ie ? typeof ie == "boolean" ? !0 : ie.capture : !1
                  , Ue = ie && typeof ie == "object" ? ie.once : !1
                  , ht = Zone.current
                  , Ne = te[L];
                Ne || (at(L, z),
                Ne = te[L]);
                let ze = Ne[Oe ? fe : he]
                  , ge = N[ze]
                  , We = !1;
                if (ge) {
                    if (We = !0,
                    X) {
                        for (let ce = 0; ce < ge.length; ce++)
                            if (le(ge[ce], F))
                                return
                    }
                } else
                    ge = N[ze] = [];
                let we, qe = N.constructor.name, Xe = st[qe];
                Xe && (we = Xe[L]),
                we || (we = qe + u + (z ? z(L) : L)),
                S.options = ie,
                Ue && (S.options.once = !1),
                S.target = N,
                S.capture = Oe,
                S.eventName = L,
                S.isExisting = We;
                let ke = Z ? bt : void 0;
                ke && (ke.taskData = S),
                Te && (S.options.signal = void 0);
                let re = ht.scheduleEventTask(we, F, ke, v, R);
                if (Te) {
                    S.options.signal = Te;
                    let ce = () => re.zone.cancelTask(re);
                    r.call(Te, "abort", ce, {
                        once: !0
                    }),
                    re.removeAbortListener = () => Te.removeEventListener("abort", ce)
                }
                if (S.target = null,
                ke && (ke.taskData = null),
                Ue && (S.options.once = !0),
                !me && typeof re.options == "boolean" || (re.options = ie),
                re.target = N,
                re.capture = Oe,
                re.eventName = L,
                B && (re.originalDelegate = F),
                O ? ge.unshift(re) : ge.push(re),
                y)
                    return N
            }
        };
        return g[c] = l(w, C, H, M, G),
        W && (g[_] = l(W, P, o, M, G, !0)),
        g[f] = function() {
            let r = this || e
              , u = arguments[0];
            d && d.transferEventName && (u = d.transferEventName(u));
            let v = arguments[2]
              , R = v ? typeof v == "boolean" ? !0 : v.capture : !1
              , y = arguments[1];
            if (!y)
                return b.apply(this, arguments);
            if (V && !V(b, y, r, arguments))
                return;
            let O = te[u], N;
            O && (N = O[R ? fe : he]);
            let L = N && r[N];
            if (L)
                for (let F = 0; F < L.length; F++) {
                    let B = L[F];
                    if (le(B, y)) {
                        if (L.splice(F, 1),
                        B.isRemoved = !0,
                        L.length === 0 && (B.allRemoved = !0,
                        r[N] = null,
                        !R && typeof u == "string")) {
                            let Ee = Pe + "ON_PROPERTY" + u;
                            r[Ee] = null
                        }
                        return B.zone.cancelTask(B),
                        G ? r : void 0
                    }
                }
            return b.apply(this, arguments)
        }
        ,
        g[E] = function() {
            let r = this || e
              , u = arguments[0];
            d && d.transferEventName && (u = d.transferEventName(u));
            let v = []
              , R = lt(r, z ? z(u) : u);
            for (let y = 0; y < R.length; y++) {
                let O = R[y]
                  , N = O.originalDelegate ? O.originalDelegate : O.callback;
                v.push(N)
            }
            return v
        }
        ,
        g[T] = function() {
            let r = this || e
              , u = arguments[0];
            if (u) {
                d && d.transferEventName && (u = d.transferEventName(u));
                let v = te[u];
                if (v) {
                    let R = v[he]
                      , y = v[fe]
                      , O = r[R]
                      , N = r[y];
                    if (O) {
                        let L = O.slice();
                        for (let F = 0; F < L.length; F++) {
                            let B = L[F]
                              , Ee = B.originalDelegate ? B.originalDelegate : B.callback;
                            this[f].call(this, u, Ee, B.options)
                        }
                    }
                    if (N) {
                        let L = N.slice();
                        for (let F = 0; F < L.length; F++) {
                            let B = L[F]
                              , Ee = B.originalDelegate ? B.originalDelegate : B.callback;
                            this[f].call(this, u, Ee, B.options)
                        }
                    }
                }
            } else {
                let v = Object.keys(r);
                for (let R = 0; R < v.length; R++) {
                    let y = v[R]
                      , O = it.exec(y)
                      , N = O && O[1];
                    N && N !== "removeListener" && this[T].call(this, N)
                }
                this[T].call(this, "removeListener")
            }
            if (G)
                return this
        }
        ,
        _e(g[c], w),
        _e(g[f], b),
        Q && _e(g[T], Q),
        D && _e(g[E], D),
        !0
    }
    let q = [];
    for (let k = 0; k < a.length; k++)
        q[k] = K(a[k], t);
    return q
}
function lt(e, n) {
    if (!n) {
        let f = [];
        for (let E in e) {
            let T = it.exec(E)
              , m = T && T[1];
            if (m && (!n || m === n)) {
                let C = e[E];
                if (C)
                    for (let _ = 0; _ < C.length; _++)
                        f.push(C[_])
            }
        }
        return f
    }
    let a = te[n];
    a || (at(n),
    a = te[n]);
    let t = e[a[he]]
      , c = e[a[fe]];
    return t ? c ? t.concat(c) : t.slice() : c ? c.slice() : []
}
function wt(e, n) {
    let a = e.Event;
    a && a.prototype && n.patchMethod(a.prototype, "stopImmediatePropagation", t => function(c, f) {
        c[ct] = !0,
        t && t.apply(c, f)
    }
    )
}
function Rt(e, n) {
    n.patchMethod(e, "queueMicrotask", a => function(t, c) {
        Zone.current.scheduleMicroTask("queueMicrotask", c[0])
    }
    )
}
var Re = A("zoneTask");
function ye(e, n, a, t) {
    let c = null
      , f = null;
    n += t,
    a += t;
    let E = {};
    function T(C) {
        let _ = C.data;
        _.args[0] = function() {
            return C.invoke.apply(this, arguments)
        }
        ;
        let P = c.apply(e, _.args);
        return Qe(P) ? _.handleId = P : (_.handle = P,
        _.isRefreshable = Ke(P.refresh)),
        C
    }
    function m(C) {
        let {handle: _, handleId: P} = C.data;
        return f.call(e, _ ?? P)
    }
    c = de(e, n, C => function(_, P) {
        if (Ke(P[0])) {
            let I = {
                isRefreshable: !1,
                isPeriodic: t === "Interval",
                delay: t === "Timeout" || t === "Interval" ? P[1] || 0 : void 0,
                args: P
            }
              , x = P[0];
            P[0] = function() {
                try {
                    return x.apply(this, arguments)
                } finally {
                    let {handle: Z, handleId: V, isPeriodic: X, isRefreshable: G} = I;
                    !X && !G && (V ? delete E[V] : Z && (Z[Re] = null))
                }
            }
            ;
            let U = Ge(n, P[0], I, T, m);
            if (!U)
                return U;
            let {handleId: J, handle: K, isRefreshable: q, isPeriodic: k} = U.data;
            if (J)
                E[J] = U;
            else if (K && (K[Re] = U,
            q && !k)) {
                let d = K.refresh;
                K.refresh = function() {
                    let {zone: Z, state: V} = U;
                    return V === "notScheduled" ? (U._state = "scheduled",
                    Z._updateTaskCount(U, 1)) : V === "running" && (U._state = "scheduling"),
                    d.call(this)
                }
            }
            return K ?? J ?? U
        } else
            return C.apply(e, P)
    }
    ),
    f = de(e, a, C => function(_, P) {
        let I = P[0], x;
        Qe(I) ? (x = E[I],
        delete E[I]) : (x = I?.[Re],
        x ? I[Re] = null : x = I),
        x?.type ? x.cancelFn && x.zone.cancelTask(x) : C.apply(e, P)
    }
    )
}
function Ct(e, n) {
    let {isBrowser: a, isMix: t} = n.getGlobalObjects();
    if (!a && !t || !e.customElements || !("customElements"in e))
        return;
    let c = ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback", "formAssociatedCallback", "formDisabledCallback", "formResetCallback", "formStateRestoreCallback"];
    n.patchCallbacks(n, e.customElements, "customElements", "define", c)
}
function Dt(e, n) {
    if (Zone[n.symbol("patchEventTarget")])
        return;
    let {eventNames: a, zoneSymbolEventNames: t, TRUE_STR: c, FALSE_STR: f, ZONE_SYMBOL_PREFIX: E} = n.getGlobalObjects();
    for (let m = 0; m < a.length; m++) {
        let C = a[m]
          , _ = C + f
          , P = C + c
          , I = E + _
          , x = E + P;
        t[C] = {},
        t[C][f] = I,
        t[C][c] = x
    }
    let T = e.EventTarget;
    if (!(!T || !T.prototype))
        return n.patchEventTarget(e, n, [T && T.prototype]),
        !0
}
function St(e, n) {
    n.patchEventPrototype(e, n)
}
function ut(e, n, a) {
    if (!a || a.length === 0)
        return n;
    let t = a.filter(f => f.target === e);
    if (!t || t.length === 0)
        return n;
    let c = t[0].ignoreProperties;
    return n.filter(f => c.indexOf(f) === -1)
}
function et(e, n, a, t) {
    if (!e)
        return;
    let c = ut(e, n, a);
    ot(e, c, t)
}
function Ze(e) {
    return Object.getOwnPropertyNames(e).filter(n => n.startsWith("on") && n.length > 2).map(n => n.substring(2))
}
function Ot(e, n) {
    if (Se && !rt || Zone[e.symbol("patchEvents")])
        return;
    let a = n.__Zone_ignore_on_properties
      , t = [];
    if (Be) {
        let c = window;
        t = t.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
        let f = kt() ? [{
            target: c,
            ignoreProperties: ["error"]
        }] : [];
        et(c, Ze(c), a && a.concat(f), je(c))
    }
    t = t.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
    for (let c = 0; c < t.length; c++) {
        let f = n[t[c]];
        f && f.prototype && et(f.prototype, Ze(f.prototype), a)
    }
}
function Nt(e) {
    e.__load_patch("legacy", n => {
        let a = n[e.__symbol__("legacyPatch")];
        a && a()
    }
    ),
    e.__load_patch("timers", n => {
        let a = "set"
          , t = "clear";
        ye(n, a, t, "Timeout"),
        ye(n, a, t, "Interval"),
        ye(n, a, t, "Immediate")
    }
    ),
    e.__load_patch("requestAnimationFrame", n => {
        ye(n, "request", "cancel", "AnimationFrame"),
        ye(n, "mozRequest", "mozCancel", "AnimationFrame"),
        ye(n, "webkitRequest", "webkitCancel", "AnimationFrame")
    }
    ),
    e.__load_patch("blocking", (n, a) => {
        let t = ["alert", "prompt", "confirm"];
        for (let c = 0; c < t.length; c++) {
            let f = t[c];
            de(n, f, (E, T, m) => function(C, _) {
                return a.current.run(E, n, _, m)
            }
            )
        }
    }
    ),
    e.__load_patch("EventTarget", (n, a, t) => {
        St(n, t),
        Dt(n, t);
        let c = n.XMLHttpRequestEventTarget;
        c && c.prototype && t.patchEventTarget(n, t, [c.prototype])
    }
    ),
    e.__load_patch("MutationObserver", (n, a, t) => {
        ve("MutationObserver"),
        ve("WebKitMutationObserver")
    }
    ),
    e.__load_patch("IntersectionObserver", (n, a, t) => {
        ve("IntersectionObserver")
    }
    ),
    e.__load_patch("FileReader", (n, a, t) => {
        ve("FileReader")
    }
    ),
    e.__load_patch("on_property", (n, a, t) => {
        Ot(t, n)
    }
    ),
    e.__load_patch("customElements", (n, a, t) => {
        Ct(n, t)
    }
    ),
    e.__load_patch("XHR", (n, a) => {
        C(n);
        let t = A("xhrTask")
          , c = A("xhrSync")
          , f = A("xhrListener")
          , E = A("xhrScheduled")
          , T = A("xhrURL")
          , m = A("xhrErrorBeforeScheduled");
        function C(_) {
            let P = _.XMLHttpRequest;
            if (!P)
                return;
            let I = P.prototype;
            function x(w) {
                return w[t]
            }
            let U = I[Le]
              , J = I[Ie];
            if (!U) {
                let w = _.XMLHttpRequestEventTarget;
                if (w) {
                    let b = w.prototype;
                    U = b[Le],
                    J = b[Ie]
                }
            }
            let K = "readystatechange"
              , q = "scheduled";
            function k(w) {
                let b = w.data
                  , D = b.target;
                D[E] = !1,
                D[m] = !1;
                let Q = D[f];
                U || (U = D[Le],
                J = D[Ie]),
                Q && J.call(D, K, Q);
                let W = D[f] = () => {
                    if (D.readyState === D.DONE)
                        if (!b.aborted && D[E] && w.state === q) {
                            let j = D[a.__symbol__("loadfalse")];
                            if (D.status !== 0 && j && j.length > 0) {
                                let i = w.invoke;
                                w.invoke = function() {
                                    let s = D[a.__symbol__("loadfalse")];
                                    for (let o = 0; o < s.length; o++)
                                        s[o] === w && s.splice(o, 1);
                                    !b.aborted && w.state === q && i.call(w)
                                }
                                ,
                                j.push(w)
                            } else
                                w.invoke()
                        } else
                            !b.aborted && D[E] === !1 && (D[m] = !0)
                }
                ;
                return U.call(D, K, W),
                D[t] || (D[t] = w),
                z.apply(D, b.args),
                D[E] = !0,
                w
            }
            function d() {}
            function Z(w) {
                let b = w.data;
                return b.aborted = !0,
                S.apply(b.target, b.args)
            }
            let V = de(I, "open", () => function(w, b) {
                return w[c] = b[2] == !1,
                w[T] = b[1],
                V.apply(w, b)
            }
            )
              , X = "XMLHttpRequest.send"
              , G = A("fetchTaskAborting")
              , g = A("fetchTaskScheduling")
              , z = de(I, "send", () => function(w, b) {
                if (a.current[g] === !0 || w[c])
                    return z.apply(w, b);
                {
                    let D = {
                        target: w,
                        url: w[T],
                        isPeriodic: !1,
                        args: b,
                        aborted: !1
                    }
                      , Q = Ge(X, d, D, k, Z);
                    w && w[m] === !0 && !D.aborted && Q.state === q && Q.invoke()
                }
            }
            )
              , S = de(I, "abort", () => function(w, b) {
                let D = x(w);
                if (D && typeof D.type == "string") {
                    if (D.cancelFn == null || D.data && D.data.aborted)
                        return;
                    D.zone.cancelTask(D)
                } else if (a.current[G] === !0)
                    return S.apply(w, b)
            }
            )
        }
    }
    ),
    e.__load_patch("geolocation", n => {
        n.navigator && n.navigator.geolocation && yt(n.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
    }
    ),
    e.__load_patch("PromiseRejectionEvent", (n, a) => {
        function t(c) {
            return function(f) {
                lt(n, c).forEach(T => {
                    let m = n.PromiseRejectionEvent;
                    if (m) {
                        let C = new m(c,{
                            promise: f.promise,
                            reason: f.rejection
                        });
                        T.invoke(C)
                    }
                }
                )
            }
        }
        n.PromiseRejectionEvent && (a[A("unhandledPromiseRejectionHandler")] = t("unhandledrejection"),
        a[A("rejectionHandledHandler")] = t("rejectionhandled"))
    }
    ),
    e.__load_patch("queueMicrotask", (n, a, t) => {
        Rt(n, t)
    }
    )
}
function Lt(e) {
    e.__load_patch("ZoneAwarePromise", (n, a, t) => {
        let c = Object.getOwnPropertyDescriptor
          , f = Object.defineProperty;
        function E(h) {
            if (h && h.toString === Object.prototype.toString) {
                let l = h.constructor && h.constructor.name;
                return (l || "") + ": " + JSON.stringify(h)
            }
            return h ? h.toString() : Object.prototype.toString.call(h)
        }
        let T = t.symbol
          , m = []
          , C = n[T("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== !1
          , _ = T("Promise")
          , P = T("then")
          , I = "__creationTrace__";
        t.onUnhandledError = h => {
            if (t.showUncaughtError()) {
                let l = h && h.rejection;
                l ? console.error("Unhandled Promise rejection:", l instanceof Error ? l.message : l, "; Zone:", h.zone.name, "; Task:", h.task && h.task.source, "; Value:", l, l instanceof Error ? l.stack : void 0) : console.error(h)
            }
        }
        ,
        t.microtaskDrainDone = () => {
            for (; m.length; ) {
                let h = m.shift();
                try {
                    h.zone.runGuarded( () => {
                        throw h.throwOriginal ? h.rejection : h
                    }
                    )
                } catch (l) {
                    U(l)
                }
            }
        }
        ;
        let x = T("unhandledPromiseRejectionHandler");
        function U(h) {
            t.onUnhandledError(h);
            try {
                let l = a[x];
                typeof l == "function" && l.call(this, h)
            } catch {}
        }
        function J(h) {
            return h && h.then
        }
        function K(h) {
            return h
        }
        function q(h) {
            return M.reject(h)
        }
        let k = T("state")
          , d = T("value")
          , Z = T("finally")
          , V = T("parentPromiseValue")
          , X = T("parentPromiseState")
          , G = "Promise.then"
          , g = null
          , z = !0
          , S = !1
          , w = 0;
        function b(h, l) {
            return r => {
                try {
                    Y(h, l, r)
                } catch (u) {
                    Y(h, !1, u)
                }
            }
        }
        let D = function() {
            let h = !1;
            return function(r) {
                return function() {
                    h || (h = !0,
                    r.apply(null, arguments))
                }
            }
        }
          , Q = "Promise resolved with itself"
          , W = T("currentTaskTrace");
        function Y(h, l, r) {
            let u = D();
            if (h === r)
                throw new TypeError(Q);
            if (h[k] === g) {
                let v = null;
                try {
                    (typeof r == "object" || typeof r == "function") && (v = r && r.then)
                } catch (R) {
                    return u( () => {
                        Y(h, !1, R)
                    }
                    )(),
                    h
                }
                if (l !== S && r instanceof M && r.hasOwnProperty(k) && r.hasOwnProperty(d) && r[k] !== g)
                    i(r),
                    Y(h, r[k], r[d]);
                else if (l !== S && typeof v == "function")
                    try {
                        v.call(r, u(b(h, l)), u(b(h, !1)))
                    } catch (R) {
                        u( () => {
                            Y(h, !1, R)
                        }
                        )()
                    }
                else {
                    h[k] = l;
                    let R = h[d];
                    if (h[d] = r,
                    h[Z] === Z && l === z && (h[k] = h[X],
                    h[d] = h[V]),
                    l === S && r instanceof Error) {
                        let y = a.currentTask && a.currentTask.data && a.currentTask.data[I];
                        y && f(r, W, {
                            configurable: !0,
                            enumerable: !1,
                            writable: !0,
                            value: y
                        })
                    }
                    for (let y = 0; y < R.length; )
                        s(h, R[y++], R[y++], R[y++], R[y++]);
                    if (R.length == 0 && l == S) {
                        h[k] = w;
                        let y = r;
                        try {
                            throw new Error("Uncaught (in promise): " + E(r) + (r && r.stack ? `
` + r.stack : ""))
                        } catch (O) {
                            y = O
                        }
                        C && (y.throwOriginal = !0),
                        y.rejection = r,
                        y.promise = h,
                        y.zone = a.current,
                        y.task = a.currentTask,
                        m.push(y),
                        t.scheduleMicroTask()
                    }
                }
            }
            return h
        }
        let j = T("rejectionHandledHandler");
        function i(h) {
            if (h[k] === w) {
                try {
                    let l = a[j];
                    l && typeof l == "function" && l.call(this, {
                        rejection: h[d],
                        promise: h
                    })
                } catch {}
                h[k] = S;
                for (let l = 0; l < m.length; l++)
                    h === m[l].promise && m.splice(l, 1)
            }
        }
        function s(h, l, r, u, v) {
            i(h);
            let R = h[k]
              , y = R ? typeof u == "function" ? u : K : typeof v == "function" ? v : q;
            l.scheduleMicroTask(G, () => {
                try {
                    let O = h[d]
                      , N = !!r && Z === r[Z];
                    N && (r[V] = O,
                    r[X] = R);
                    let L = l.run(y, void 0, N && y !== q && y !== K ? [] : [O]);
                    Y(r, !0, L)
                } catch (O) {
                    Y(r, !1, O)
                }
            }
            , r)
        }
        let o = "function ZoneAwarePromise() { [native code] }"
          , p = function() {}
          , H = n.AggregateError;
        class M {
            static toString() {
                return o
            }
            static resolve(l) {
                return l instanceof M ? l : Y(new this(null), z, l)
            }
            static reject(l) {
                return Y(new this(null), S, l)
            }
            static withResolvers() {
                let l = {};
                return l.promise = new M( (r, u) => {
                    l.resolve = r,
                    l.reject = u
                }
                ),
                l
            }
            static any(l) {
                if (!l || typeof l[Symbol.iterator] != "function")
                    return Promise.reject(new H([],"All promises were rejected"));
                let r = []
                  , u = 0;
                try {
                    for (let y of l)
                        u++,
                        r.push(M.resolve(y))
                } catch {
                    return Promise.reject(new H([],"All promises were rejected"))
                }
                if (u === 0)
                    return Promise.reject(new H([],"All promises were rejected"));
                let v = !1
                  , R = [];
                return new M( (y, O) => {
                    for (let N = 0; N < r.length; N++)
                        r[N].then(L => {
                            v || (v = !0,
                            y(L))
                        }
                        , L => {
                            R.push(L),
                            u--,
                            u === 0 && (v = !0,
                            O(new H(R,"All promises were rejected")))
                        }
                        )
                }
                )
            }
            static race(l) {
                let r, u, v = new this( (O, N) => {
                    r = O,
                    u = N
                }
                );
                function R(O) {
                    r(O)
                }
                function y(O) {
                    u(O)
                }
                for (let O of l)
                    J(O) || (O = this.resolve(O)),
                    O.then(R, y);
                return v
            }
            static all(l) {
                return M.allWithCallback(l)
            }
            static allSettled(l) {
                return (this && this.prototype instanceof M ? this : M).allWithCallback(l, {
                    thenCallback: u => ({
                        status: "fulfilled",
                        value: u
                    }),
                    errorCallback: u => ({
                        status: "rejected",
                        reason: u
                    })
                })
            }
            static allWithCallback(l, r) {
                let u, v, R = new this( (L, F) => {
                    u = L,
                    v = F
                }
                ), y = 2, O = 0, N = [];
                for (let L of l) {
                    J(L) || (L = this.resolve(L));
                    let F = O;
                    try {
                        L.then(B => {
                            N[F] = r ? r.thenCallback(B) : B,
                            y--,
                            y === 0 && u(N)
                        }
                        , B => {
                            r ? (N[F] = r.errorCallback(B),
                            y--,
                            y === 0 && u(N)) : v(B)
                        }
                        )
                    } catch (B) {
                        v(B)
                    }
                    y++,
                    O++
                }
                return y -= 2,
                y === 0 && u(N),
                R
            }
            constructor(l) {
                let r = this;
                if (!(r instanceof M))
                    throw new Error("Must be an instanceof Promise.");
                r[k] = g,
                r[d] = [];
                try {
                    let u = D();
                    l && l(u(b(r, z)), u(b(r, S)))
                } catch (u) {
                    Y(r, !1, u)
                }
            }
            get[Symbol.toStringTag]() {
                return "Promise"
            }
            get[Symbol.species]() {
                return M
            }
            then(l, r) {
                let u = this.constructor?.[Symbol.species];
                (!u || typeof u != "function") && (u = this.constructor || M);
                let v = new u(p)
                  , R = a.current;
                return this[k] == g ? this[d].push(R, v, l, r) : s(this, R, v, l, r),
                v
            }
            catch(l) {
                return this.then(null, l)
            }
            finally(l) {
                let r = this.constructor?.[Symbol.species];
                (!r || typeof r != "function") && (r = M);
                let u = new r(p);
                u[Z] = Z;
                let v = a.current;
                return this[k] == g ? this[d].push(v, u, l, l) : s(this, v, u, l, l),
                u
            }
        }
        M.resolve = M.resolve,
        M.reject = M.reject,
        M.race = M.race,
        M.all = M.all;
        let se = n[_] = n.Promise;
        n.Promise = M;
        let le = T("thenPatched");
        function ue(h) {
            let l = h.prototype
              , r = c(l, "then");
            if (r && (r.writable === !1 || !r.configurable))
                return;
            let u = l.then;
            l[P] = u,
            h.prototype.then = function(v, R) {
                return new M( (O, N) => {
                    u.call(this, O, N)
                }
                ).then(v, R)
            }
            ,
            h[le] = !0
        }
        t.patchThen = ue;
        function ne(h) {
            return function(l, r) {
                let u = h.apply(l, r);
                if (u instanceof M)
                    return u;
                let v = u.constructor;
                return v[le] || ue(v),
                u
            }
        }
        return se && (ue(se),
        de(n, "fetch", h => ne(h))),
        Promise[a.__symbol__("uncaughtPromiseErrors")] = m,
        M
    }
    )
}
function It(e) {
    e.__load_patch("toString", n => {
        let a = Function.prototype.toString
          , t = A("OriginalDelegate")
          , c = A("Promise")
          , f = A("Error")
          , E = function() {
            if (typeof this == "function") {
                let _ = this[t];
                if (_)
                    return typeof _ == "function" ? a.call(_) : Object.prototype.toString.call(_);
                if (this === Promise) {
                    let P = n[c];
                    if (P)
                        return a.call(P)
                }
                if (this === Error) {
                    let P = n[f];
                    if (P)
                        return a.call(P)
                }
            }
            return a.call(this)
        };
        E[t] = a,
        Function.prototype.toString = E;
        let T = Object.prototype.toString
          , m = "[object Promise]";
        Object.prototype.toString = function() {
            return typeof Promise == "function" && this instanceof Promise ? m : T.call(this)
        }
    }
    )
}
function Mt(e, n, a, t, c) {
    let f = Zone.__symbol__(t);
    if (n[f])
        return;
    let E = n[f] = n[t];
    n[t] = function(T, m, C) {
        return m && m.prototype && c.forEach(function(_) {
            let P = `${a}.${t}::` + _
              , I = m.prototype;
            try {
                if (I.hasOwnProperty(_)) {
                    let x = e.ObjectGetOwnPropertyDescriptor(I, _);
                    x && x.value ? (x.value = e.wrapWithCurrentZone(x.value, P),
                    e._redefineProperty(m.prototype, _, x)) : I[_] && (I[_] = e.wrapWithCurrentZone(I[_], P))
                } else
                    I[_] && (I[_] = e.wrapWithCurrentZone(I[_], P))
            } catch {}
        }),
        E.call(n, T, m, C)
    }
    ,
    e.attachOriginToPatched(n[t], E)
}
function Zt(e) {
    e.__load_patch("util", (n, a, t) => {
        let c = Ze(n);
        t.patchOnProperties = ot,
        t.patchMethod = de,
        t.bindArguments = Fe,
        t.patchMacroTask = pt;
        let f = a.__symbol__("BLACK_LISTED_EVENTS")
          , E = a.__symbol__("UNPATCHED_EVENTS");
        n[E] && (n[f] = n[E]),
        n[f] && (a[f] = a[E] = n[f]),
        t.patchEventPrototype = wt,
        t.patchEventTarget = Pt,
        t.isIEOrEdge = vt,
        t.ObjectDefineProperty = Ae,
        t.ObjectGetOwnPropertyDescriptor = be,
        t.ObjectCreate = Et,
        t.ArraySlice = Tt,
        t.patchClass = ve,
        t.wrapWithCurrentZone = Ve,
        t.filterProperties = ut,
        t.attachOriginToPatched = _e,
        t._redefineProperty = Object.defineProperty,
        t.patchCallbacks = Mt,
        t.getGlobalObjects = () => ({
            globalSources: st,
            zoneSymbolEventNames: te,
            eventNames: c,
            isBrowser: Be,
            isMix: rt,
            isNode: Se,
            TRUE_STR: fe,
            FALSE_STR: he,
            ZONE_SYMBOL_PREFIX: Pe,
            ADD_EVENT_LISTENER_STR: He,
            REMOVE_EVENT_LISTENER_STR: xe
        })
    }
    )
}
function At(e) {
    Lt(e),
    It(e),
    Zt(e)
}
var ft = _t();
At(ft);
Nt(ft);
//# sourceMappingURL=polyfills-UVWUS6PV.js.map
