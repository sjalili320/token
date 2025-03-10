import {Ac as r, Bc as S, Fb as l, Ic as m, Mb as y, Pd as E, Ub as h, Wc as v, Yc as g, _b as x, _d as I, ae as w, gd as A, ld as q, mc as V, md as D, nc as c, ne as N, re as F, uc as p, zc as a} from "./chunk-K3475DQT.js";
var M = (t, i) => ({
    "text-success": t,
    "text-danger": i
});
function T(t, i) {
    if (t & 1 && (a(0, "div", 1),
    S(1, "svg-icon", 3),
    r()),
    t & 2) {
        let o = m();
        l(),
        c("iconName", o.icons.SmartAssistantGradient)
    }
}
function b(t, i) {
    if (t & 1 && (a(0, "div"),
    v(1),
    q(2, "number"),
    r()),
    t & 2) {
        let o, e = m();
        l(),
        g(" ", D(2, 1, (o = e.Value()) == null ? null : o.quantity), " ")
    }
}
var H = ( () => {
    let i = class i {
        constructor() {
            this.icons = N,
            this.Value = y(void 0)
        }
        refresh(e) {
            return this.Value.update( () => ({
                id: e.value?.id,
                side: e.value?.side,
                isAlgo: e.value?.isAlgo ?? !1,
                quantity: e.value?.quantity
            })),
            !0
        }
        agInit(e) {
            this.Value.update( () => ({
                id: e.value?.id,
                side: e.value?.side,
                isAlgo: e.value?.isAlgo ?? !1,
                quantity: e.value?.quantity
            }))
        }
    }
    ;
    i.\u0275fac = function(u) {
        return new (u || i)
    }
    ,
    i.\u0275cmp = h({
        type: i,
        selectors: [["app-ag-order-side-render"]],
        decls: 5,
        vars: 8,
        consts: [[1, "d-flex", "gap-2"], [1, "col-3", "text-end"], [1, "col", "text-start", 3, "ngClass"], ["width", "18", "height", "18", 3, "iconName"]],
        template: function(u, n) {
            if (u & 1 && (a(0, "div", 0),
            x(1, T, 2, 1, "div", 1)(2, b, 3, 3, "div"),
            a(3, "div", 2),
            v(4),
            r()()),
            u & 2) {
                let f, d, s, _, C;
                l(),
                p((f = n.Value()) != null && f.isAlgo ? 1 : -1),
                l(),
                p(((d = n.Value()) == null ? null : d.quantity) !== null && ((d = n.Value()) == null ? null : d.quantity) > 0 ? 2 : -1),
                l(),
                c("ngClass", A(5, M, ((s = n.Value()) == null ? null : s.side) === 0, ((s = n.Value()) == null ? null : s.side) === 1)),
                V("data-cy", "grid-row-side-" + ((_ = n.Value()) == null ? null : _.id)),
                l(),
                g(" ", ((C = n.Value()) == null ? null : C.side) === 0 ? "\u062E\u0631\u06CC\u062F" : "\u0641\u0631\u0648\u0634", " ")
            }
        },
        dependencies: [w, E, I, F],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = i;
    return t
}
)();
export {H as a};
//# sourceMappingURL=chunk-NGCDLITE.js.map
