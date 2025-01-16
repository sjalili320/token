import {a as ae, b as K, c as le} from "./chunk-Y3TWWRWU.js";
import {a as Ie} from "./chunk-5YLBCFDT.js";
import {e as Q} from "./chunk-KW67K7GE.js";
import {n as we} from "./chunk-VTNMJBW4.js";
import {C as Oe, K as oe, M as be, N as re, O as Se, e as he, f as J, g as X, i as te, p as P, q as ie, r as ne, s as ye} from "./chunk-3R47PHPO.js";
import {j as G} from "./chunk-O3BOZ3M4.js";
import {Bc as $, Cc as U, bb as R, cb as z, k as ge} from "./chunk-OFJ5SZPL.js";
import {Ac as r, Bc as h, Fb as a, Fc as g, Gb as b, H as ue, Hc as f, Ia as Ce, Ic as d, Lc as Z, Mb as A, Pd as j, Qd as fe, Rd as ve, T as _e, Ub as k, Va as E, Vc as T, Vd as ee, Wc as c, Xc as y, Yb as H, Yc as O, Zc as xe, _b as x, _d as M, a as me, ae as q, b as pe, db as u, eb as _, fd as D, gd as w, ld as C, mb as B, mc as W, md as v, nc as m, nd as I, ne as N, oc as Y, pd as F, rc as L, re as V, uc as p, xc as de, yc as ce, zc as o} from "./chunk-K3475DQT.js";
function Fe(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "li", 4),
        f("removeStockConditionEventEmitter", function(n) {
            u(e);
            let s = d();
            return _(s.onRemoveStockConditionClicked(n))
        })("editStockConditionEventEmitter", function(n) {
            u(e);
            let s = d();
            return _(s.onEditStockConditionClicked(n))
        }),
        r()
    }
    if (t & 2) {
        let e = l.$implicit
          , i = l.index;
        m("itemIndex", i)("stockCondition", e)
    }
}
function Pe(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "div", 5),
        f("click", function() {
            u(e);
            let n = d();
            return _(n.addNewCondition())
        }),
        h(1, "svg-icon", 6),
        c(2, ` \u0645\u062F\u06CC\u0631\u06CC\u062A \u0647\u0634\u062F\u0627\u0631 \u0627\u06CC\u0646 \u0646\u0645\u0627\u062F
`),
        r()
    }
    if (t & 2) {
        let e = d();
        a(),
        m("iconName", e.icons.Bell)
    }
}
function Be(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "div", 7),
        h(1, "svg-icon", 8),
        c(2, " \u0647\u0634\u062F\u0627\u0631\u06CC \u062A\u0639\u0631\u06CC\u0641 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A "),
        o(3, "button", 9),
        f("click", function() {
            u(e);
            let n = d();
            return _(n.addNewCondition())
        }),
        c(4, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0647\u0634\u062F\u0627\u0631"),
        r()()
    }
    if (t & 2) {
        let e = d();
        a(),
        m("iconName", e.icons.BellAdd)
    }
}
var ni = ( () => {
    let l = class l {
        constructor(i, n) {
            this.conditionalNotificationService = i,
            this.layoutService = n,
            this.icons = N,
            this.openEditor = new B
        }
        get activeIsinStockConditions() {
            return this.conditionalNotificationService.getSortedStockConditions(this.symbolIsin)
        }
        addNewCondition() {
            this.openEditor.emit(this.symbolIsin)
        }
        onRemoveStockConditionClicked(i) {
            this.conditionalNotificationService.removeStockCondition(i)
        }
        onEditStockConditionClicked(i) {
            this.layoutService.openConditionalTools(this.symbolIsin, i)
        }
    }
    ;
    l.\u0275fac = function(n) {
        return new (n || l)(b(we),b(K))
    }
    ,
    l.\u0275cmp = k({
        type: l,
        selectors: [["symbol-conditional"]],
        inputs: {
            symbolIsin: "symbolIsin"
        },
        outputs: {
            openEditor: "openEditor"
        },
        decls: 4,
        vars: 3,
        consts: [[1, "list-group", "list-group-flush", "p-0", "m-0", "overflow-auto", 2, "padding-bottom", "1px !important"], ["class", "list-group-item bg-principal d-flex align-items-center p-2", "d-stock-condition-list-item", "", 3, "itemIndex", "stockCondition", "removeStockConditionEventEmitter", "editStockConditionEventEmitter", 4, "ngFor", "ngForOf"], ["class", "mt-1 py-1 px-2 text-body text-opacity-50 text-center cup", 3, "click", 4, "ngIf"], ["class", "d-flex flex-column justify-content-center align-items-center text-muted h-100", 4, "ngIf"], ["d-stock-condition-list-item", "", 1, "list-group-item", "bg-principal", "d-flex", "align-items-center", "p-2", 3, "removeStockConditionEventEmitter", "editStockConditionEventEmitter", "itemIndex", "stockCondition"], [1, "mt-1", "py-1", "px-2", "text-body", "text-opacity-50", "text-center", "cup", 3, "click"], ["width", "20", "height", "20", 1, "me-1", 3, "iconName"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-muted", "h-100"], ["width", "36", "height", "36", 1, "mb-2", 3, "iconName"], [1, "btn", "btn-sm", "btn-outline-secondary", "mt-3", 3, "click"]],
        template: function(n, s) {
            n & 1 && (o(0, "ul", 0),
            x(1, Fe, 1, 2, "li", 1),
            r(),
            x(2, Pe, 3, 1, "div", 2)(3, Be, 5, 1, "div", 3)),
            n & 2 && (a(),
            m("ngForOf", s.activeIsinStockConditions),
            a(),
            m("ngIf", s.activeIsinStockConditions.length),
            a(),
            m("ngIf", !s.activeIsinStockConditions.length))
        },
        dependencies: [Ie, fe, ve, V],
        encapsulation: 2
    });
    let t = l;
    return t
}
)();
var Ae = ["order-list-draft-item", ""]
  , Ne = (t, l) => [t, l];
function He(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 22),
        f("click", function() {
            u(e);
            let n = d(4);
            return _(n.sendDraftBtnClickHandler())
        }),
        r()
    }
    if (t & 2) {
        let e = d(4);
        m("iconName", e.icons.Send)
    }
}
function je(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 18),
        f("click", function() {
            u(e);
            let n = d(3);
            return _(n.copyDraftBtnClickHandler())
        }),
        r(),
        o(1, "svg-icon", 19),
        f("click", function() {
            u(e);
            let n = d(3);
            return _(n.onEditBtnClickedHandler())
        }),
        r(),
        x(2, He, 1, 1, "svg-icon", 20),
        o(3, "svg-icon", 21),
        f("click", function() {
            u(e);
            let n = d(3);
            return _(n.onDeleteBtnClickedHandler())
        }),
        r()
    }
    if (t & 2) {
        let e = d(3);
        m("iconName", e.icons.Copy),
        a(),
        m("iconName", e.icons.Edit),
        a(),
        p(e.order.IsSendAndCopyValid ? 2 : -1),
        a(),
        m("iconName", e.icons.Delete)
    }
}
function Me(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "div", 17)(1, "div", 23)(2, "span", 24),
        c(3, "\u0642\u06CC\u0645\u062A:"),
        r(),
        o(4, "span", 25),
        c(5),
        C(6, "number"),
        r()(),
        o(7, "div", 23)(8, "span", 24),
        c(9, "\u062A\u0639\u062F\u0627\u062F:"),
        r(),
        o(10, "span", 25),
        c(11),
        C(12, "number"),
        r()(),
        o(13, "div", 26)(14, "button", 27),
        f("click", function(n) {
            return u(e),
            d(3).closeConfirmation(),
            _(n.stopPropagation())
        }),
        c(15, " \u0627\u0646\u0635\u0631\u0627\u0641 "),
        r(),
        o(16, "button", 28),
        f("click", function(n) {
            u(e);
            let s = d(3);
            return _(s.confirmationType() === s.ConfirmationTypes.SEND ? s.sendDraftHandler(n) : s.deleteDraftHandler(n))
        }),
        c(17, " \u062A\u0627\u06CC\u06CC\u062F "),
        r()()()
    }
    if (t & 2) {
        let e = d(3);
        a(5),
        O("", v(6, 2, e.order.price), " \u0631\u06CC\u0627\u0644\u0621\u0621"),
        a(6),
        y(v(12, 4, e.order.quantity))
    }
}
function qe(t, l) {
    if (t & 1 && (o(0, "div")(1, "div", 12),
    x(2, je, 4, 4),
    r(),
    o(3, "div", 13)(4, "small", 14),
    c(5, "\u062A\u0639\u062F\u0627\u062F:"),
    r(),
    o(6, "span", 15),
    c(7),
    C(8, "number"),
    r()(),
    o(9, "div", 16),
    c(10),
    C(11, "jdate"),
    C(12, "eDigit"),
    r(),
    x(13, Me, 18, 6, "div", 17),
    r()),
    t & 2) {
        let e = d(2);
        a(2),
        p(e.toolbarIsActive ? -1 : 2),
        a(5),
        y(v(8, 4, e.order.quantity)),
        a(3),
        O(" ", v(12, 9, I(11, 6, e.order.createDateTime, "time")), " "),
        a(3),
        p(e.confirmationType() !== null ? 13 : -1)
    }
}
function Re(t, l) {
    if (t & 1 && (o(0, "div", 3),
    h(1, "svg-icon", 4, 0),
    o(3, "div", 5)(4, "div", 6)(5, "div", 7),
    c(6),
    r(),
    h(7, "span", 8),
    r(),
    o(8, "div", 9),
    h(9, "div", 10),
    r(),
    o(10, "span", 11),
    c(11),
    C(12, "number"),
    r()()(),
    x(13, qe, 14, 11, "ng-template", null, 1, F)),
    t & 2) {
        let e, i = T(14), n = d();
        m("ngClass", w(8, Ne, (e = n.order.sideClass) !== null && e !== void 0 ? e : "", (e = n.order.StateClass) !== null && e !== void 0 ? e : "")),
        a(),
        m("iconName", n.icons.MenuVertical)("autoClose", !1)("ngbPopover", i),
        a(5),
        y(n.order.symbolName),
        a(5),
        y(v(12, 6, n.order.price))
    }
}
function ze(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "div", 31)(1, "div", 46)(2, "span", 47),
        c(3, "\u0642\u06CC\u0645\u062A:"),
        r(),
        o(4, "span", 48),
        c(5),
        C(6, "number"),
        o(7, "span", 49),
        c(8, "\u0631\u06CC\u0627\u0644\u0621\u0621"),
        r()()(),
        o(9, "div", 46)(10, "span", 47),
        c(11, "\u062A\u0639\u062F\u0627\u062F:"),
        r(),
        o(12, "span", 48),
        c(13),
        C(14, "number"),
        r()(),
        o(15, "div", 50)(16, "button", 51),
        f("click", function(n) {
            return u(e),
            d(2).closeConfirmation(),
            _(n.stopPropagation())
        }),
        c(17, " \u0627\u0646\u0635\u0631\u0627\u0641 "),
        r(),
        o(18, "button", 52),
        f("click", function(n) {
            u(e);
            let s = d(2);
            return _(s.confirmationType() === s.ConfirmationTypes.SEND ? s.sendDraftHandler(n) : s.deleteDraftHandler(n))
        }),
        c(19, " \u062A\u0627\u06CC\u06CC\u062F "),
        r()()()
    }
    if (t & 2) {
        let e = d(2);
        a(5),
        O("", v(6, 2, e.order.price), " "),
        a(8),
        y(v(14, 4, e.order.quantity))
    }
}
function $e(t, l) {
    if (t & 1 && (o(0, "div", 34),
    h(1, "input", 53)(2, "label", 54),
    r()),
    t & 2) {
        let e = d(2);
        a(),
        m("checked", e.isChecked ? "false" : "")("id", e.order.id),
        a(),
        m("for", e.order.id)
    }
}
function Ue(t, l) {
    if (t & 1 && h(0, "svg-icon", 37),
    t & 2) {
        let e = d(2);
        Z("title", e.order.ValidityDateTitle),
        m("iconName", e.icons.Sandglass)
    }
}
function Je(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 58),
        f("click", function(n) {
            return u(e),
            d(3).sendDraftBtnClickHandler(),
            _(n.stopPropagation())
        }),
        r()
    }
    if (t & 2) {
        let e = d(3);
        m("iconName", e.icons.Send)
    }
}
function Ge(t, l) {
    if (t & 1) {
        let e = g();
        h(0, "span"),
        o(1, "svg-icon", 59),
        f("click", function(n) {
            return u(e),
            d(3).copyDraftBtnClickHandler(),
            _(n.stopPropagation())
        }),
        r()
    }
    if (t & 2) {
        let e = d(3);
        a(),
        m("iconName", e.icons.Copy)
    }
}
function Qe(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 60),
        f("click", function(n) {
            return u(e),
            d(3).onEditBtnClickedHandler(),
            _(n.stopPropagation())
        }),
        r()
    }
    if (t & 2) {
        let e = d(3);
        m("iconName", e.icons.Edit)
    }
}
function Ke(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 61),
        f("click", function(n) {
            return u(e),
            d(3).onDeleteBtnClickedHandler(),
            _(n.stopPropagation())
        }),
        r()
    }
    if (t & 2) {
        let e = d(3);
        m("iconName", e.icons.Delete)
    }
}
function We(t, l) {
    if (t & 1 && x(0, Je, 1, 1, "svg-icon", 55)(1, Ge, 2, 1)(2, Qe, 1, 1, "svg-icon", 56)(3, Ke, 1, 1, "svg-icon", 57),
    t & 2) {
        let e = d(2);
        p(e.order.IsSendAndCopyValid ? 0 : -1),
        a(),
        p(e.order.IsSendAndCopyValid ? 1 : -1),
        a(),
        p(e.order.IsEditValid ? 2 : -1),
        a(),
        p(e.order.IsDeleteValid ? 3 : -1)
    }
}
function Xe(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "div", 29),
        f("click", function() {
            u(e);
            let n = d();
            return _(n.itemClickHandler())
        }),
        o(1, "div", 30),
        x(2, ze, 20, 6, "div", 31),
        o(3, "div", 32)(4, "div", 33),
        x(5, $e, 3, 3, "div", 34),
        o(6, "h6", 35),
        c(7),
        r()(),
        o(8, "div", 36),
        x(9, Ue, 1, 2, "svg-icon", 37),
        o(10, "div", 38)(11, "span", 39),
        c(12),
        r(),
        x(13, We, 4, 4),
        r()()(),
        o(14, "div", 40)(15, "span", 41),
        c(16),
        C(17, "number"),
        r()(),
        o(18, "div", 42)(19, "span", 43),
        c(20),
        C(21, "number"),
        r(),
        o(22, "span", 44)(23, "small", 45),
        c(24),
        C(25, "jdate"),
        C(26, "eDigit"),
        r()()()()()
    }
    if (t & 2) {
        let e, i = d();
        m("ngClass", w(19, Ne, (e = i.order.sideClass) !== null && e !== void 0 ? e : "", (e = i.order.StateClass) !== null && e !== void 0 ? e : "")),
        a(2),
        p(i.confirmationType() !== null ? 2 : -1),
        a(3),
        p(i.toolbarIsActive ? 5 : -1),
        a(2),
        O(" ", i.order == null ? null : i.order.symbolName, " "),
        a(2),
        p(i.order.IsOrderValidToDate ? 9 : -1),
        a(3),
        y(i.order.validityType !== i.validityType.Day ? i.order.ValidityDateTitle : ""),
        a(),
        p(i.toolbarIsActive ? -1 : 13),
        a(3),
        O("", v(17, 10, i.order.quantity), " "),
        a(4),
        O("", v(21, 12, i.order.price), " "),
        a(4),
        y(v(26, 17, I(25, 14, i.order.createDateTime, "time")))
    }
}
var hi = ( () => {
    let l = class l extends Q {
        constructor(i, n, s) {
            super(null, s, null, null, null),
            this.omsFacade = i,
            this.draftFacade = n,
            this.activeSymbolService = s,
            this.icons = N,
            this.editOrderEvent = new B,
            this.OrderConstants = P,
            this.validityType = te,
            this.popupOrderService = E(le),
            this.settingFacadeService = E(oe),
            this.layoutService = E(K)
        }
        closeConfirmation() {
            this.confirmationType.set(null)
        }
        openConfirmation(i) {
            this.confirmationType.set(i)
        }
        sendDraftHandler(i) {
            i?.stopPropagation(),
            this.closeConfirmation(),
            this.omsFacade.create(this.order, !0)
        }
        deleteDraftHandler(i) {
            i?.stopPropagation(),
            this.closeConfirmation(),
            this.draftFacade.delete(this.order.id)
        }
        sendDraftBtnClickHandler() {
            this.settingFacadeService.getSettings().orderConfirmation ? this.openConfirmation(X.SEND) : this.sendDraftHandler()
        }
        copyDraftBtnClickHandler() {
            this.draftFacade.create(this.order)
        }
        onEditBtnClickedHandler() {
            this.layoutService.baseLayout == ae.TABULAR_ORDER ? (this.draftFacade.updateState(this.order.id, {
                easyState: J.GridEditMode
            }),
            this.popupOrderService.openPopup({
                isin: this.order.symbolIsin
            }, null, this.order)) : (this.draftFacade.updateState(this.order.id, {
                easyState: J.EditMode
            }),
            this.editOrderEvent.emit(this.order))
        }
        onDeleteBtnClickedHandler() {
            setTimeout( () => {
                this.settingFacadeService.getSettings().orderConfirmation ? this.openConfirmation(X.DELETE) : this.deleteDraftHandler()
            }
            , 50)
        }
        itemClickHandler() {
            this.toolbarIsActive ? this.checkboxChanged.emit({
                id: this.order.id,
                type: ne.draft
            }) : super.desktopItemClickHandler(this.order.symbolIsin)
        }
    }
    ;
    l.\u0275fac = function(n) {
        return new (n || l)(b(re),b(Oe),b(G))
    }
    ,
    l.\u0275cmp = k({
        type: l,
        selectors: [["", "order-list-draft-item", ""]],
        inputs: {
            order: "order"
        },
        outputs: {
            editOrderEvent: "editOrderEvent"
        },
        features: [H],
        attrs: Ae,
        decls: 2,
        vars: 1,
        consts: [["p2", "ngbPopover"], ["popContent", ""], [1, "stock", "shadow-sm", "user-select-none", "draft", 3, "ngClass"], [1, "stock", "d-flex", "align-items-center", "py-1", "pe-1", "shadow-sm", "user-select-none", "draft", 3, "ngClass"], ["placement", "right", 1, "", 3, "iconName", "autoClose", "ngbPopover"], [1, "flex-grow-1"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "order-stock-symbol", "flex-grow-1", "text-truncate"], [1, "mdi", "line-height-none", 2, "font-size", "13px"], [1, "progress", "my-1"], ["aria-valuemax", "100", "aria-valuemin", "0", "aria-valuenow", "25", "role", "progressbar", 1, "progress-bar"], [1, "order-price", "small", "fw-bold"], [1, "stock-actions", "text-nowrap", "mb-3", "d-flex", "justify-content-end"], [1, "mb-1"], [1, "text-muted"], [1, "fw-bold", "ms-1"], [1, "text-muted", "small", "text-nowrap"], [1, "confirm-order", "position-absolute", "full-offset", "text-center", "z-2", "d-flex", "flex-column", "justify-content-center"], ["title", "\u06A9\u067E\u06CC", "width", "18", "height", "18", 1, "icon", "text-muted", "p-1", 3, "click", "iconName"], ["title", "\u0648\u06CC\u0631\u0627\u06CC\u0634", "width", "18", "height", "18", 1, "icon", "text-muted", "p-1", 3, "click", "iconName"], ["title", "\u0627\u0631\u0633\u0627\u0644", "width", "18", "height", "18", 1, "icon", "text-muted", "p-1", 3, "iconName"], ["title", "\u062D\u0630\u0641", "width", "18", "height", "18", 1, "icon", "text-muted", "p-1", 3, "click", "iconName"], ["title", "\u0627\u0631\u0633\u0627\u0644", "width", "18", "height", "18", 1, "icon", "text-muted", "p-1", 3, "click", "iconName"], [1, "row"], [1, "col", "text-end", "pe-0", "me-1"], [1, "col", "text-start", "ps-0"], [1, "mt-1", "w-100"], [1, "btn", "btn-sm", "py-1", "w-50", "btn-outline-light", 3, "click"], [1, "btn", "btn-sm", "py-1", "w-50", "btn-global", 3, "click"], [1, "stock", "shadow-sm", "user-select-none", "draft", 3, "click", "ngClass"], [1, "p-2", "bg-principal", "rounded", "position-relative"], [1, "text-white", "confirm-order", "position-absolute", "full-offset", "text-center", "z-2", "d-flex", "flex-column", "justify-content-center"], [1, "order-stock-symbol", "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "mb-0"], [1, "form-check", "form-check-reverse"], [1, "mb-0"], [1, "d-flex", "align-items-center", "ps-3"], ["width", "20", "height", "20", 1, "icon", "px-1", "text-muted", 3, "iconName", "title"], [1, "stock-actions", "align-items-center", "justify-content-end"], [1, "small", "px-2"], [1, "d-flex", "justify-content-between"], ["data-cy", "draft-quantity"], [1, "d-flex", "justify-content-between", "align-items-center"], ["data-cy", "draft-price", 1, "order-price"], [1, "ms-auto"], [1, "order-date", "text-muted"], [1, "d-flex", "justify-content-between", "px-1"], [1, "col", "text-start"], [1, "col", "text-end"], [1, "text-opacity-50", "text-white"], [1, "mt-1", "w-100", "d-flex", "gap-1", "px-1"], [1, "btn", "btn-sm", "py-1", "btn-outline-light", "w-50", 3, "click"], [1, "btn", "btn-sm", "py-1", "btn-global", "w-50", 3, "click"], ["data-cy", "order-list-item-check-input", "type", "checkbox", 1, "form-check-input", 3, "checked", "id"], [1, "form-check-label", "pe-none", 3, "for"], ["width", "18", "height", "18", "data-cy", "send-btn", "title", "\u0627\u0631\u0633\u0627\u0644", 1, "icon", "px-1", "text-muted", 3, "iconName"], ["width", "18", "height", "18", "data-cy", "edit-btn", "title", "\u0648\u06CC\u0631\u0627\u06CC\u0634", 1, "icon", "px-1", "text-muted", 3, "iconName"], ["width", "18", "height", "18", "data-cy", "delete-btn", "title", "\u062D\u0630\u0641", 1, "icon", "px-1", "text-muted", 3, "iconName"], ["width", "18", "height", "18", "data-cy", "send-btn", "title", "\u0627\u0631\u0633\u0627\u0644", 1, "icon", "px-1", "text-muted", 3, "click", "iconName"], ["width", "18", "height", "18", "data-cy", "copy-btn", "title", "\u06A9\u067E\u06CC", 1, "icon", "px-1", "text-muted", 3, "click", "iconName"], ["width", "18", "height", "18", "data-cy", "edit-btn", "title", "\u0648\u06CC\u0631\u0627\u06CC\u0634", 1, "icon", "px-1", "text-muted", 3, "click", "iconName"], ["width", "18", "height", "18", "data-cy", "delete-btn", "title", "\u062D\u0630\u0641", 1, "icon", "px-1", "text-muted", 3, "click", "iconName"]],
        template: function(n, s) {
            n & 1 && x(0, Re, 15, 11)(1, Xe, 27, 22, "div", 2),
            n & 2 && p(s.collapseMode ? 0 : 1)
        },
        dependencies: [q, j, M, z, R, U, $, V],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = l;
    return t
}
)();
var Ye = ["order-list-offline-order-item", ""]
  , Ze = (t, l) => ({
    "bs-tooltip-bottom": t,
    "bs-tooltip-top": l
})
  , et = t => ({
    opacity: 1,
    top: t
});
function tt(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "div")(1, "div", 13)(2, "svg-icon", 14),
        f("click", function() {
            u(e);
            let n = d(2);
            return _(n.deleteBtnClickedHandler())
        }),
        r()(),
        o(3, "div", 15)(4, "small", 16),
        c(5, "\u062A\u0639\u062F\u0627\u062F:"),
        r(),
        o(6, "span", 17),
        c(7),
        C(8, "number"),
        r()(),
        o(9, "div", 18),
        c(10),
        C(11, "jdate"),
        C(12, "eDigit"),
        r()()
    }
    if (t & 2) {
        let e = l.orderEntryDate
          , i = d(2);
        a(2),
        m("iconName", i.icons.Delete),
        a(5),
        y(v(8, 3, i.order.quantity)),
        a(3),
        O(" ", v(12, 8, I(11, 5, e, "time")), " ")
    }
}
function it(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "div", 4),
        f("mouseenter", function(n) {
            u(e);
            let s = d();
            return _(s.showTooltipEvent(n, s.order.StateNotificationText))
        })("mouseleave", function() {
            u(e);
            let n = d();
            return _(n.hideTooltipEvent())
        }),
        h(1, "svg-icon", 5, 0),
        o(3, "div", 6)(4, "div", 7)(5, "div", 8),
        c(6),
        r(),
        h(7, "span", 9),
        r(),
        o(8, "div", 10),
        h(9, "div", 11),
        r(),
        o(10, "span", 12),
        c(11),
        C(12, "number"),
        r()()(),
        x(13, tt, 13, 10, "ng-template", null, 1, F)
    }
    if (t & 2) {
        let e = T(14)
          , i = d();
        a(),
        m("iconName", i.icons.MenuVertical)("autoClose", !1)("ngbPopover", e),
        a(5),
        y(i.order.symbolName),
        a(5),
        y(v(12, 5, i.order.price))
    }
}
function nt(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 35),
        f("click", function(n) {
            return u(e),
            d(2).deleteBtnClickedHandler(),
            _(n.stopPropagation())
        }),
        r()
    }
    if (t & 2) {
        let e = d(2);
        m("iconName", e.icons.Delete)
    }
}
function ot(t, l) {
    if (t & 1 && h(0, "svg-icon", 36),
    t & 2) {
        let e = d(2);
        L(e.order.StateNotificationColorClass),
        m("iconName", e.icons.Alert)
    }
}
function rt(t, l) {
    if (t & 1 && (o(0, "span"),
    c(1),
    C(2, "number"),
    r()),
    t & 2) {
        let e = d(2);
        a(),
        y(e.order.quantity ? v(2, 1, e.order.quantity) : "\u0633\u0642\u0641 \u062A\u0639\u062F\u0627\u062F")
    }
}
function at(t, l) {
    if (t & 1 && (o(0, "span"),
    c(1),
    C(2, "number"),
    r()),
    t & 2) {
        let e = d(2);
        a(),
        y(v(2, 1, e.order.quantity))
    }
}
function lt(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "div", 19),
        f("click", function() {
            u(e);
            let n = d();
            return _(n.itemClickHandler())
        })("mouseenter", function(n) {
            u(e);
            let s = d();
            return _(s.showTooltipEvent(n, s.order.StateNotificationText))
        })("mouseleave", function() {
            u(e);
            let n = d();
            return _(n.hideTooltipEvent())
        }),
        o(1, "div", 20)(2, "div", 21)(3, "div", 22)(4, "h6", 23),
        c(5),
        o(6, "span", 24),
        c(7, "(\u0622\u0641\u0644\u0627\u06CC\u0646)"),
        r()()(),
        o(8, "div", 25),
        h(9, "span", 26),
        o(10, "div", 27),
        x(11, nt, 1, 1, "svg-icon", 28)(12, ot, 1, 3, "svg-icon", 29),
        r()()(),
        o(13, "div", 30),
        x(14, rt, 3, 3, "span")(15, at, 3, 3, "span"),
        r(),
        o(16, "div", 31)(17, "span", 32),
        c(18),
        C(19, "number"),
        r(),
        o(20, "span", 33)(21, "small", 34),
        c(22),
        C(23, "jdate"),
        C(24, "eDigit"),
        r()()()()()
    }
    if (t & 2) {
        let e = d();
        L(e.order.StateClass),
        a(5),
        O(" ", e.order == null ? null : e.order.symbolName, " "),
        a(4),
        L(e.order.StateNotificationClass),
        a(2),
        p(e.showButtons ? 11 : -1),
        a(),
        p(e.order.IsOfflineError ? 12 : -1),
        a(2),
        p(e.order.quantity ? 15 : 14),
        a(4),
        O("", v(19, 10, e.order.price), " "),
        a(4),
        y(v(24, 15, I(23, 12, e.order.createDateTime, "time")))
    }
}
function dt(t, l) {
    if (t & 1 && (o(0, "div", 3)(1, "div", 37)(2, "small", 38),
    c(3, "\u0648\u0636\u0639\u06CC\u062A :"),
    r(),
    c(4),
    r()()),
    t & 2) {
        let e = d();
        m("ngClass", w(3, Ze, !e.tooltipOnTop, e.tooltipOnTop))("ngStyle", D(6, et, e.tooltipPosition + "px")),
        a(4),
        O(" ", e.tooltipLabel, " ")
    }
}
var Vi = ( () => {
    let l = class l extends Q {
        constructor(i, n) {
            super(null, i, null, null, null),
            this.activeSymbolService = i,
            this.offlineFacade = n,
            this.icons = N,
            this.OrderConstants = P,
            this.AggregateState = ie,
            this.showStateNotificationText = A(!1),
            this.tooltipOnTop = !1,
            this.showTooltip = !1,
            this.tooltipLabel = "",
            this.tooltipPosition = 0
        }
        deleteBtnClickedHandler() {
            this.offlineFacade.delete(this.order.id)
        }
        itemClickHandler() {
            this.toolbarIsActive || super.desktopItemClickHandler(this.order.symbolIsin)
        }
        onShowStateNotificationTextClicked() {
            this.showStateNotificationText.update(i => !i)
        }
        showTooltipEvent(i, n) {
            let S = (i.target || i.srcElement || i.currentTarget).getBoundingClientRect();
            this.tooltipOnTop = window.innerHeight - S.bottom < 80,
            this.tooltipLabel = n,
            this.tooltipPosition = this.tooltipOnTop ? S.top - 30 : S.bottom,
            this.showTooltip = !0
        }
        hideTooltipEvent() {
            this.showTooltip = !1
        }
    }
    ;
    l.\u0275fac = function(n) {
        return new (n || l)(b(G),b(Se))
    }
    ,
    l.\u0275cmp = k({
        type: l,
        selectors: [["", "order-list-offline-order-item", ""]],
        inputs: {
            order: "order"
        },
        features: [H],
        attrs: Ye,
        decls: 3,
        vars: 2,
        consts: [["p2", "ngbPopover"], ["popContent", ""], [1, "stock", "shadow-sm", "user-select-none", "buy", "offline", 3, "class"], ["data-cy", "order-list-item-tooltip", "role", "tooltip", 1, "tooltip", "bs-tooltip-auto", "position-absolute", "text-wrap", 3, "ngClass", "ngStyle"], [1, "stock", "d-flex", "align-items-center", "py-1", "pe-1", "shadow-sm", "user-select-none", "offline", 3, "mouseenter", "mouseleave"], ["placement", "right", 1, "", 3, "iconName", "autoClose", "ngbPopover"], [1, "flex-grow-1"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "order-stock-symbol", "flex-grow-1", "text-truncate"], [1, "mdi", "line-height-none", 2, "font-size", "13px"], [1, "progress", "my-1"], ["aria-valuemax", "100", "aria-valuemin", "0", "aria-valuenow", "25", "role", "progressbar", 1, "progress-bar"], [1, "order-price", "small", "fw-bold"], [1, "stock-actions", "text-nowrap", "mb-3", "d-flex", "justify-content-end"], ["title", "\u062D\u0630\u0641", "width", "18", "height", "18", 1, "icon", "p-1", "text-muted", 3, "click", "iconName"], [1, "mb-1"], [1, "text-muted"], [1, "fw-bold", "ms-1"], [1, "text-muted", "small", "text-nowrap"], [1, "stock", "shadow-sm", "user-select-none", "buy", "offline", 3, "click", "mouseenter", "mouseleave"], [1, "p-2", "bg-principal", "rounded", "position-relative"], [1, "order-stock-symbol", "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "mb-0"], [1, "mb-0"], [1, "small", "text-muted"], [1, "d-flex", "align-items-center", "ps-3"], [1, "ms-1", "line-height-none"], [1, "stock-actions", "align-items-center", "justify-content-end"], ["title", "\u062D\u0630\u0641", "width", "18", "height", "18", 1, "text-muted", "icon", "px-1", 3, "iconName"], ["data-cy", "state-notification", "width", "20", "height", "20", 1, "ms-1", 3, "iconName", "class"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "order-price"], [1, "ms-auto"], [1, "order-date", "text-muted"], ["title", "\u062D\u0630\u0641", "width", "18", "height", "18", 1, "text-muted", "icon", "px-1", 3, "click", "iconName"], ["data-cy", "state-notification", "width", "20", "height", "20", 1, "ms-1", 3, "iconName"], ["data-cy", "order-list-item-tooltip-text", 1, "tooltip-inner"], ["data-cy", "", 1, "text-secondary"]],
        template: function(n, s) {
            n & 1 && x(0, it, 15, 7)(1, lt, 25, 17, "div", 2)(2, dt, 5, 8, "div", 3),
            n & 2 && (p(s.collapseMode ? 0 : 1),
            a(2),
            p(s.showTooltip ? 2 : -1))
        },
        dependencies: [R, z, q, j, ee, M, U, $, V],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = l;
    return t
}
)();
var ct = ["order-list-oms-order-item", ""]
  , Ve = (t, l) => l == null ? null : l.orderId
  , Le = (t, l) => [t, l]
  , st = t => ({
    width: t
})
  , mt = t => ({
    spin: t
})
  , pt = (t, l) => ({
    "mb-1": t,
    "opacity-4": l
})
  , ut = t => [t]
  , _t = t => ({
    "bg-primary": t
})
  , Ct = (t, l) => ({
    "bs-tooltip-bottom": t,
    "bs-tooltip-top": l
})
  , xt = t => ({
    opacity: 1,
    top: t
});
function ft(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 24),
        f("click", function() {
            u(e);
            let n = d(4);
            return _(n.onEditBtnClickedHandler())
        }),
        r()
    }
    if (t & 2) {
        let e = d(4);
        m("iconName", e.icons.Edit)
    }
}
function vt(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 25),
        f("click", function() {
            u(e);
            let n = d(4);
            return _(n.onDeleteBtnClickedHandler())
        }),
        c(1, " >"),
        r()
    }
    if (t & 2) {
        let e = d(4);
        m("iconName", e.icons.Delete)
    }
}
function gt(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 21),
        f("click", function() {
            u(e);
            let n = d(3);
            return _(n.cloneOrderHandler())
        }),
        r(),
        x(1, ft, 1, 1, "svg-icon", 22)(2, vt, 2, 1, "svg-icon", 23)
    }
    if (t & 2) {
        let e = d(3);
        m("iconName", e.icons.CloseBox),
        a(),
        p(e.order.IsEditValid ? 1 : -1),
        a(),
        p(e.order.IsDeleteValid ? 2 : -1)
    }
}
function ht(t, l) {
    if (t & 1 && (o(0, "div", 16)(1, "small", 17),
    c(2, "\u062C\u0627\u06CC\u06AF\u0627\u0647 \u0644\u062D\u0638\u0647\u200C\u0627\u06CC:"),
    r(),
    o(3, "span", 18),
    c(4),
    C(5, "number"),
    r()()),
    t & 2) {
        let e = d(3);
        a(4),
        y(v(5, 1, e.order.orderPlace))
    }
}
function yt(t, l) {
    if (t & 1 && (o(0, "div", 16)(1, "small", 17),
    c(2, "\u062D\u062C\u0645 \u067E\u06CC\u0634 \u0631\u0648:"),
    r(),
    o(3, "span", 18),
    c(4),
    C(5, "number"),
    r()()),
    t & 2) {
        let e = d(3);
        a(4),
        y(v(5, 1, e.order.volumeAhead))
    }
}
function Ot(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "div", 20)(1, "div", 26)(2, "span", 27),
        c(3, "\u0642\u06CC\u0645\u062A:"),
        r(),
        o(4, "span", 28),
        c(5),
        C(6, "number"),
        r()(),
        o(7, "div", 26)(8, "span", 27),
        c(9, "\u062A\u0639\u062F\u0627\u062F:"),
        r(),
        o(10, "span", 28),
        c(11),
        C(12, "number"),
        r()(),
        o(13, "div", 29)(14, "button", 30),
        f("click", function(n) {
            return u(e),
            d(3).deleteOrderHandler(),
            _(n.stopPropagation())
        }),
        c(15, " \u062A\u0627\u06CC\u06CC\u062F "),
        r(),
        o(16, "button", 31),
        f("click", function(n) {
            return u(e),
            d(3).closeConfirmation(),
            _(n.stopPropagation())
        }),
        c(17, " \u0627\u0646\u0635\u0631\u0627\u0641 "),
        r()()()
    }
    if (t & 2) {
        let e = d(3);
        a(5),
        O("", v(6, 2, e.order.price), " \u0631\u06CC\u0627\u0644\u0621\u0621"),
        a(6),
        y(v(12, 4, e.order.quantity))
    }
}
function bt(t, l) {
    if (t & 1 && (o(0, "div")(1, "div", 15),
    x(2, gt, 3, 3),
    r(),
    o(3, "div", 16)(4, "small", 17),
    c(5, "\u062A\u0639\u062F\u0627\u062F:"),
    r(),
    o(6, "span", 18),
    c(7),
    C(8, "number"),
    r()(),
    x(9, ht, 6, 3, "div", 16)(10, yt, 6, 3, "div", 16),
    o(11, "div", 19),
    c(12),
    C(13, "jdate"),
    C(14, "eDigit"),
    r(),
    x(15, Ot, 18, 6, "div", 20),
    r()),
    t & 2) {
        let e = d(2);
        a(2),
        p(e.toolbarIsActive ? -1 : 2),
        a(5),
        y(v(8, 6, e.order.quantity)),
        a(2),
        p(e.order.orderPlace ? 9 : -1),
        a(),
        p(e.order.volumeAhead ? 10 : -1),
        a(2),
        O(" ", v(14, 11, I(13, 8, e.order.createDateTime, "time")), " "),
        a(3),
        p(e.confirmationType() !== null ? 15 : -1)
    }
}
function St(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "div", 6),
        f("mouseenter", function(n) {
            u(e);
            let s = d();
            return _(s.showTooltipEvent(n, s.order.StateNotificationText))
        })("mouseleave", function() {
            u(e);
            let n = d();
            return _(n.hideTooltipEvent())
        }),
        h(1, "svg-icon", 7, 0),
        o(3, "div", 8)(4, "div", 9)(5, "div", 10),
        c(6),
        r(),
        h(7, "span", 11),
        r(),
        o(8, "div", 12),
        h(9, "div", 13),
        r(),
        o(10, "span", 14),
        c(11),
        C(12, "number"),
        r()()(),
        x(13, bt, 16, 13, "ng-template", null, 1, F)
    }
    if (t & 2) {
        let e, i, n = T(14), s = d();
        m("ngClass", w(10, Le, (e = s.order == null ? null : s.order.sideClass) !== null && e !== void 0 ? e : "", (e = s.order == null ? null : s.order.StateClass) !== null && e !== void 0 ? e : "")),
        a(),
        m("iconName", s.icons.MenuVertical)("autoClose", "outside")("ngbPopover", n),
        a(5),
        y(s.order.symbolName),
        a(),
        m("ngClass", (i = s.order == null ? null : s.order.StateNotificationClass) !== null && i !== void 0 ? i : ""),
        a(2),
        m("ngStyle", D(13, st, s.order.ExecutedQuantity * 100 / s.order.quantity + "%")),
        a(2),
        y(v(12, 8, s.order.price))
    }
}
function wt(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "div", 20)(1, "div", 26)(2, "span", 27),
        c(3, "\u0642\u06CC\u0645\u062A:"),
        r(),
        o(4, "span", 28),
        c(5),
        C(6, "number"),
        r()(),
        o(7, "div", 26)(8, "span", 27),
        c(9, "\u062A\u0639\u062F\u0627\u062F:"),
        r(),
        o(10, "span", 28),
        c(11),
        C(12, "number"),
        r()(),
        o(13, "div", 29)(14, "button", 30),
        f("click", function(n) {
            return u(e),
            d(2).deleteOrderHandler(),
            _(n.stopPropagation())
        }),
        c(15, " \u062A\u0627\u06CC\u06CC\u062F "),
        r(),
        o(16, "button", 31),
        f("click", function(n) {
            return u(e),
            d(2).closeConfirmation(),
            _(n.stopPropagation())
        }),
        c(17, " \u0627\u0646\u0635\u0631\u0627\u0641 "),
        r()()()
    }
    if (t & 2) {
        let e = d(2);
        a(5),
        O("", v(6, 2, e.order.price), " \u0631\u06CC\u0627\u0644\u0621\u0621"),
        a(6),
        y(v(12, 4, e.order.quantity))
    }
}
function It(t, l) {
    if (t & 1 && (o(0, "div", 36),
    h(1, "input", 61)(2, "label", 62),
    r()),
    t & 2) {
        let e = d(2);
        a(),
        m("checked", e.isChecked ? "false" : "")("id", e.order.id),
        a(),
        m("for", e.order.id)
    }
}
function Et(t, l) {
    if (t & 1 && h(0, "svg-icon", 39),
    t & 2) {
        let e = d(2);
        Z("title", e.order.validityType !== e.validityType.Day ? e.order.ValidityDateTitle : ""),
        m("iconName", e.icons.Sandglass)
    }
}
function kt(t, l) {
    if (t & 1 && h(0, "svg-icon", 40),
    t & 2) {
        let e = d(2);
        m("iconName", e.icons.Alert)
    }
}
function Tt(t, l) {
    if (t & 1 && h(0, "svg-icon", 41),
    t & 2) {
        let e = d(2);
        m("iconName", e.icons.Alert)
    }
}
function Dt(t, l) {
    if (t & 1 && h(0, "svg-icon", 63),
    t & 2) {
        let e = d(2);
        L(e.order == null ? null : e.order.StateNotificationColorClass),
        m("iconName", e.order.StateNotificationIconClass)("ngClass", D(5, mt, (e.order == null ? null : e.order.StateNotificationIconClass) === "loading")),
        W("data-cy", "state-notification-" + e.order.StateNotificationIconClass)
    }
}
function Nt(t, l) {
    t & 1 && (o(0, "span", 45),
    c(1, " \u0645\u0646\u0642\u0636\u06CC \u0634\u062F\u0647"),
    r())
}
function Vt(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 64),
        f("click", function(n) {
            return u(e),
            d(2).cloneOrderHandler(),
            _(n.stopPropagation())
        }),
        r()
    }
    if (t & 2) {
        let e = d(2);
        m("iconName", e.icons.Copy)
    }
}
function Lt(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 67),
        f("click", function(n) {
            return u(e),
            d(3).onEditBtnClickedHandler(),
            _(n.stopPropagation())
        }),
        r()
    }
    if (t & 2) {
        let e = d(3);
        m("iconName", e.icons.Edit)
    }
}
function Ft(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 68),
        f("click", function(n) {
            return u(e),
            d(3).onDeleteBtnClickedHandler(),
            _(n.stopPropagation())
        }),
        r()
    }
    if (t & 2) {
        let e = d(3);
        m("iconName", e.icons.Delete)
    }
}
function Pt(t, l) {
    if (t & 1 && x(0, Lt, 1, 1, "svg-icon", 65)(1, Ft, 1, 1, "svg-icon", 66),
    t & 2) {
        let e = d(2);
        p(e.showButtons && e.order.IsEditValid ? 0 : -1),
        a(),
        p(e.order.IsDeleteValid ? 1 : -1)
    }
}
function Bt(t, l) {
    t & 1 && h(0, "div", 52)
}
function At(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 69, 3),
        f("click", function(n) {
            u(e);
            let s = T(1);
            return d(2).onOrderPositionBtnClicked(s),
            _(n.stopPropagation())
        }),
        r()
    }
    if (t & 2) {
        d();
        let e = T(39)
          , i = d();
        m("triggers", "manual")("autoClose", "outside")("ngbPopover", e)("iconName", i.icons.InfoBox)
    }
}
function Ht(t, l) {
    if (t & 1 && (o(0, "span", 71),
    c(1),
    r()),
    t & 2) {
        let e = d(3);
        a(),
        y((+(e.order == null ? null : e.order.orderPlace)).toLocaleString())
    }
}
function jt(t, l) {
    if (t & 1 && (o(0, "span", 72),
    c(1),
    r()),
    t & 2) {
        let e = d(3);
        a(),
        y(e.order == null ? null : e.order.volumeAhead.toLocaleString())
    }
}
function Mt(t, l) {
    if (t & 1 && (o(0, "div", 70)(1, "div")(2, "small", 17),
    c(3, "\u062C\u0627\u06CC\u06AF\u0627\u0647 \u0644\u062D\u0638\u0647\u200C\u0627\u06CC:"),
    r(),
    x(4, Ht, 2, 1, "span", 71),
    r(),
    o(5, "div", 16)(6, "small", 17),
    c(7, "\u062D\u062C\u0645 \u067E\u06CC\u0634 \u0631\u0648:"),
    r(),
    x(8, jt, 2, 1, "span", 72),
    r()()),
    t & 2) {
        let e = d(2);
        a(4),
        p(+(e.order == null ? null : e.order.orderPlace) ? 4 : -1),
        a(4),
        p(e.order != null && e.order.volumeAhead ? 8 : -1)
    }
}
function qt(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "svg-icon", 73),
        f("click", function() {
            u(e);
            let n = d(2);
            return _(n.showTradesHandler())
        }),
        r()
    }
    if (t & 2) {
        let e = d(2);
        m("iconName", e.icons.MenuHorizontal)
    }
}
function Rt(t, l) {
    if (t & 1 && (o(0, "span", 49),
    c(1),
    C(2, "number"),
    r()),
    t & 2) {
        let e = d().$implicit
          , i = d(3);
        a(),
        xe("(", i.fixTradePercent(e.quantity / i.order.quantity * 100), "%) ", v(2, 2, e.quantity), " ")
    }
}
function zt(t, l) {
    if (t & 1 && h(0, "div", 82),
    t & 2) {
        let e = l.$implicit
          , i = d().$implicit
          , n = d(3);
        Y("width", D(6, ut, e.quantity / n.order.quantity * 100), "%"),
        m("ngClass", D(8, _t, e.tradeNumber === i.tradeNumber)),
        W("aria-valuenow", n.fixTradePercent(e.quantity / n.order.quantity * 100))("aria-valuemin", n.fixTradePercent(e.quantity / n.order.quantity * 100))("aria-valuemax", n.fixTradePercent(e.quantity / n.order.quantity * 100))
    }
}
function $t(t, l) {
    if (t & 1 && (o(0, "div", 74)(1, "div", 75)(2, "div", 47)(3, "span", 76),
    c(4),
    C(5, "number"),
    r(),
    x(6, Rt, 3, 4, "span", 49),
    r(),
    o(7, "div", 77),
    de(8, zt, 1, 10, "div", 78, Ve),
    r()(),
    o(10, "div", 79)(11, "small", 80),
    c(12),
    C(13, "jdate"),
    r(),
    h(14, "svg-icon", 81),
    r()()),
    t & 2) {
        let e = l.$implicit
          , i = l.$index
          , n = d(3);
        m("ngClass", w(11, pt, i < (n.order.trades == null ? null : n.order.trades.length) - 1, e.isCancel)),
        W("title", e.isCancel ? "\u062D\u0630\u0641 \u062F\u0631 \u062F\u0633\u062A\u0647 \u0645\u0639\u0627\u0645\u0644\u0627\u062A" : "\u0627\u0646\u062C\u0627\u0645 \u0634\u062F"),
        a(4),
        O(" ", v(5, 6, e.price), " "),
        a(2),
        p(n.order.quantity > 0 ? 6 : -1),
        a(2),
        ce(n.order.trades),
        a(4),
        y(I(13, 8, e.dateTime, "justTime")),
        a(2),
        m("iconName", n.icons.Clock)
    }
}
function Ut(t, l) {
    if (t & 1 && (o(0, "div", 60),
    de(1, $t, 15, 14, "div", 74, Ve),
    r()),
    t & 2) {
        let e = d(2);
        a(),
        ce(e.order.trades)
    }
}
function Jt(t, l) {
    if (t & 1) {
        let e = g();
        o(0, "div", 32),
        f("mouseenter", function(n) {
            u(e);
            let s = d();
            return _(s.showTooltipEvent(n, s.order.StateNotificationText))
        })("mouseleave", function() {
            u(e);
            let n = d();
            return _(n.hideTooltipEvent())
        })("click", function() {
            u(e);
            let n = d();
            return _(n.itemClickHandler())
        }),
        o(1, "div", 33),
        x(2, wt, 18, 6, "div", 20),
        o(3, "div", 34)(4, "div", 35),
        x(5, It, 3, 3, "div", 36),
        o(6, "h6", 37),
        c(7),
        r()(),
        o(8, "div", 38),
        x(9, Et, 1, 2, "svg-icon", 39)(10, kt, 1, 1, "svg-icon", 40)(11, Tt, 1, 1, "svg-icon", 41)(12, Dt, 1, 7, "svg-icon", 42),
        o(13, "div", 43)(14, "span", 44),
        c(15),
        r(),
        x(16, Nt, 2, 0, "span", 45)(17, Vt, 1, 1, "svg-icon", 46)(18, Pt, 2, 2),
        r()()(),
        o(19, "div", 47)(20, "span", 48),
        c(21),
        C(22, "number"),
        r(),
        o(23, "span", 49),
        c(24),
        r()(),
        o(25, "div", 50),
        h(26, "div", 51),
        x(27, Bt, 1, 0, "div", 52),
        r(),
        o(28, "div", 53)(29, "span", 54),
        c(30),
        C(31, "number"),
        r(),
        o(32, "span", 55)(33, "small", 56),
        c(34),
        C(35, "jdate"),
        C(36, "eDigit"),
        r(),
        x(37, At, 2, 4, "svg-icon", 57)(38, Mt, 9, 2, "ng-template", null, 2, F),
        r()(),
        o(40, "div", 58),
        x(41, qt, 1, 1, "svg-icon", 59),
        r(),
        x(42, Ut, 3, 0, "div", 60),
        r()()
    }
    if (t & 2) {
        let e, i = d();
        m("ngClass", w(36, Le, (e = i.order == null ? null : i.order.sideClass) !== null && e !== void 0 ? e : "", (e = i.order == null ? null : i.order.StateClass) !== null && e !== void 0 ? e : "")),
        a(),
        W("data-cy", "oms-order-list-item-" + (i.order == null ? null : i.order.symbolName)),
        a(),
        p(i.confirmationType() !== null ? 2 : -1),
        a(3),
        p(i.toolbarIsActive && i.order.IsDeleteValid ? 5 : -1),
        a(),
        Y("text-decoration", i.order.AggregateState === i.AggregateState.Supervisor ? "line-through" : "none"),
        a(),
        O(" ", i.order == null ? null : i.order.symbolName, " "),
        a(2),
        p(i.order.IsOrderValidToDate ? 9 : -1),
        a(),
        p(i.order.showSupervisorSymbol() ? 10 : -1),
        a(),
        p(i.order.orderFrom === i.From.System ? 11 : -1),
        a(),
        p(i.order.StateNotificationIconClass != null && i.order.StateNotificationIconClass.length ? 12 : -1),
        a(3),
        y(i.order.validityType !== i.validityType.Day ? i.order.ValidityDateTitle : ""),
        a(),
        p(i.order.orderFrom === i.From.System ? 16 : -1),
        a(),
        p(i.showButtons ? 17 : -1),
        a(),
        p(i.toolbarIsActive ? -1 : 18),
        a(3),
        O("", v(22, 27, i.order.quantity), " "),
        a(3),
        O(" ", i.order.OrderExecutedLabel, " "),
        a(2),
        Y("width", i.order.ExecutedQuantity * 100 / i.order.quantity, "%"),
        a(),
        p(i.order.IsOrderPartiallyExecuted ? 27 : -1),
        a(3),
        O("", v(31, 29, i.order.price), " "),
        a(3),
        L(i.order != null && i.order.isOpenOrder ? "hasOrderPlace" : ""),
        a(),
        y(v(36, 34, I(35, 31, i.order.createDateTime, "time"))),
        a(3),
        p(i.order.isOpenOrder ? 37 : -1),
        a(4),
        p((i.order.trades == null ? null : i.order.trades.length) > 0 ? 41 : -1),
        a(),
        p(i.showTrades() && (i.order.trades == null ? null : i.order.trades.length) > 0 ? 42 : -1)
    }
}
function Gt(t, l) {
    if (t & 1 && (o(0, "div", 5)(1, "div", 83)(2, "small", 84),
    c(3, "\u0648\u0636\u0639\u06CC\u062A \u0633\u0641\u0627\u0631\u0634:"),
    r(),
    c(4),
    r()()),
    t & 2) {
        let e = d();
        m("ngClass", w(3, Ct, !e.tooltipOnTop, e.tooltipOnTop))("ngStyle", D(6, xt, e.tooltipPosition + "px")),
        a(4),
        O(" ", e.tooltipLabel, " ")
    }
}
var en = ( () => {
    let l = class l extends Q {
        constructor(i, n, s, S) {
            super(null, S, i, null, null),
            this.router = i,
            this.orderService = n,
            this.omsFacade = s,
            this.activeSymbolService = S,
            this.editOrderEvent = new B,
            this.OrderConstants = P,
            this.validityType = te,
            this.showStateNotificationText = A(!1),
            this.From = he,
            this.errorShowCount = A(0),
            this.showTrades = A(!1),
            this.AggregateState = ie,
            this.icons = N,
            this.popupOrderService = E(le),
            this.settingFacadeService = E(oe),
            this.layoutService = E(K),
            this.tooltipOnTop = !1,
            this.showTooltip = !1,
            this.tooltipLabel = "",
            this.tooltipPosition = 0
        }
        onEditBtnClickedHandler() {
            this.layoutService.baseLayout == ae.TABULAR_ORDER ? (this.omsFacade.updateState(this.order.id, {
                easyState: J.GridEditMode
            }),
            this.popupOrderService.openPopup({
                isin: this.order.symbolIsin
            }, null, this.order)) : (this.omsFacade.updateState(this.order.id, {
                easyState: J.EditMode
            }),
            this.editOrderEvent.emit(this.order))
        }
        onDeleteBtnClickedHandler() {
            setTimeout( () => {
                this.settingFacadeService.getSettings().orderConfirmation && !this.order.IsInErrorState ? this.openConfirmation(X.DELETE) : this.deleteOrderHandler()
            }
            , 50)
        }
        closeConfirmation() {
            this.confirmationType.set(null)
        }
        openConfirmation(i) {
            this.confirmationType.set(i)
        }
        deleteOrderHandler(i) {
            i?.stopPropagation(),
            this.closeConfirmation(),
            this.omsFacade.delete(this.order.id)
        }
        itemClickHandler() {
            this.toolbarIsActive ? this.order.IsDeleteValid && this.checkboxChanged.emit({
                id: this.order.id,
                type: ne.oms
            }) : super.desktopItemClickHandler(this.order.symbolIsin)
        }
        stateNotificationTextClickHandler() {
            this.showStateNotificationText.update(i => !i),
            this.showStateNotificationText() && this.order.errorDescription && this.order.errorDescription.length > 0 && this.errorShowCount.update(i => i++)
        }
        showTradesHandler() {
            this.showTrades.update(i => !i)
        }
        fixTradePercent(i) {
            return (Math.round(i * 100) / 100).toFixed(0)
        }
        cloneOrderHandler() {
            this.orderService.updateOrderFromMarketDepthState({
                side: this.order.side === 0 ? "buy" : "sell",
                isin: this.order.symbolIsin,
                price: this.order.price,
                quantity: this.order.quantity,
                type: 9
            })
        }
        onOrderPositionBtnClicked(i) {
            i.isOpen() ? this.closePopoverAndUnsubscribeOrderPlace(i) : this.order.isOpenOrder && (i.open(this.order),
            this.omsFacade.getOmsOrderPlaceInfo([this.order.id]).pipe(ue(n => n.find(s => s.orderId == this.order.id)), _e(Boolean), Ce(n => {
                this.order = new ye(pe(me({}, this.order), {
                    orderPlace: n.orderPlace,
                    volumeAhead: n.volumeAhead
                }))
            }
            )).subscribe(),
            setTimeout( () => {}
            , P.TimeoutForClosingOrderPositionPopover))
        }
        closePopoverAndUnsubscribeOrderPlace(i) {
            i.isOpen() && i.close(this.order)
        }
        showTooltipEvent(i, n) {
            let S = (i.target || i.srcElement || i.currentTarget).getBoundingClientRect();
            this.tooltipOnTop = window.innerHeight - S.bottom < 80,
            this.tooltipLabel = n,
            this.tooltipPosition = this.tooltipOnTop ? S.top - 30 : S.bottom,
            this.showTooltip = !0
        }
        hideTooltipEvent() {
            this.showTooltip = !1
        }
    }
    ;
    l.\u0275fac = function(n) {
        return new (n || l)(b(ge),b(be),b(re),b(G))
    }
    ,
    l.\u0275cmp = k({
        type: l,
        selectors: [["", "order-list-oms-order-item", ""]],
        inputs: {
            order: "order"
        },
        outputs: {
            editOrderEvent: "editOrderEvent"
        },
        features: [H],
        attrs: ct,
        decls: 3,
        vars: 2,
        consts: [["p2", "ngbPopover"], ["popContent", ""], ["popContentExpandMode", ""], ["p1", "ngbPopover"], ["data-cy", "order-list-item-parent", 1, "stock", "shadow-sm", "user-select-none", "position-relative", 3, "ngClass"], ["data-cy", "order-list-item-tooltip", "role", "tooltip", 1, "tooltip", "bs-tooltip-auto", "position-absolute", "text-wrap", 3, "ngClass", "ngStyle"], [1, "stock", "d-flex", "align-items-center", "py-1", "pe-1", "shadow-sm", "user-select-none", 3, "mouseenter", "mouseleave", "ngClass"], ["placement", "right", 1, "", 3, "iconName", "autoClose", "ngbPopover"], [1, "flex-grow-1"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "order-stock-symbol", "flex-grow-1", "text-truncate"], [1, "mdi", "line-height-none", 2, "font-size", "13px", 3, "ngClass"], [1, "progress", "my-1"], ["aria-valuemax", "100", "aria-valuemin", "0", "aria-valuenow", "25", "role", "progressbar", 1, "progress-bar", 3, "ngStyle"], [1, "order-price", "small", "fw-bold"], [1, "stock-actions", "text-nowrap", "mb-3", "d-flex", "justify-content-end"], [1, "mb-1"], [1, "text-muted"], [1, "fw-bold", "ms-1"], [1, "text-muted", "small", "text-nowrap"], [1, "confirm-order", "position-absolute", "full-offset", "text-center", "z-2", "d-flex", "flex-column", "justify-content-center"], ["title", "\u06A9\u067E\u06CC", "width", "18", "height", "18", 1, "icon", "p-0", "text-muted", 3, "click", "iconName"], ["title", "\u0648\u06CC\u0631\u0627\u06CC\u0634", "width", "18", "height", "18", 1, "icon", "p-0", "text-muted", 3, "iconName"], ["width", "18", "height", "18", "title", "\u062D\u0630\u0641", 1, "icon", "p-0", "text-muted", 3, "iconName"], ["title", "\u0648\u06CC\u0631\u0627\u06CC\u0634", "width", "18", "height", "18", 1, "icon", "p-0", "text-muted", 3, "click", "iconName"], ["width", "18", "height", "18", "title", "\u062D\u0630\u0641", 1, "icon", "p-0", "text-muted", 3, "click", "iconName"], [1, "row"], [1, "col", "text-end", "pe-0", "me-1"], [1, "col", "text-start", "ps-0"], [1, "mt-1"], [1, "btn", "btn-sm", "py-1", "btn-global", "me-2", "px-4", 3, "click"], [1, "btn", "btn-sm", "py-1", "btn-outline-light", 3, "click"], ["data-cy", "order-list-item-parent", 1, "stock", "shadow-sm", "user-select-none", "position-relative", 3, "mouseenter", "mouseleave", "click", "ngClass"], [1, "p-2", "bg-principal", "row-list__item-content", "rounded", "position-relative"], [1, "order-stock-symbol", "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "mb-0"], [1, "form-check", "form-check-reverse"], [1, "mb-0"], [1, "d-flex", "align-items-center", "ps-3"], ["width", "20", "height", "20", "data-cy", "valid-to-date", 1, "icon", "px-1", "text-muted", 3, "iconName", "title"], ["width", "20", "height", "20", "data-cy", "broker-order", "title", "\u0633\u0641\u0627\u0631\u0634 \u0646\u0627\u0638\u0631", 1, "line-height-none", "text-muted", 3, "iconName"], ["width", "20", "height", "20", "data-cy", "expired", "title", " \u0645\u0646\u0642\u0636\u06CC \u0634\u062F\u0647", 1, "line-height-none", "text-danger", 3, "iconName"], ["width", "20", "height", "20", 1, "ms-1", 3, "iconName", "class", "ngClass"], [1, "stock-actions", "align-items-center", "justify-content-end"], [1, "small", "px-2"], [1, "small", "px-2", "text-danger"], ["width", "18", "height", "18", "data-cy", "copy-btn", "title", "\u06A9\u067E\u06CC", 1, "icon", "px-1", "text-muted", 3, "iconName"], [1, "d-flex", "justify-content-between"], ["data-cy", "order-list-item-quantity"], [1, "text-start"], [1, "progress", "my-1", "position-relative"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "z-1"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "position-absolute", "full-offset"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "order-price"], [1, "ms-auto"], [1, "order-date", "text-muted"], ["data-cy", "order-list-item-place-btn", "title", "\u062C\u0627\u06CC\u06AF\u0627\u0647 \u0633\u0641\u0627\u0631\u0634", "width", "18", "height", "18", 1, "icon", "px-1", "text-grey", "small", 3, "triggers", "autoClose", "ngbPopover", "iconName"], [1, "text-center", 2, "line-height", "0"], ["title", "\u062C\u0632\u0626\u06CC\u0627\u062A \u0645\u0639\u0627\u0645\u0644\u0627\u062A", "width", "20", "height", "20", 1, "cup", "d-inline-block", "position-relative", "text-muted", 3, "iconName"], [1, "p-2", "pb-1", "my-1", "bg-principal-3x", "rounded"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "id"], [1, "form-check-label", "pe-none", 3, "for"], ["width", "20", "height", "20", 1, "ms-1", 3, "iconName", "ngClass"], ["width", "18", "height", "18", "data-cy", "copy-btn", "title", "\u06A9\u067E\u06CC", 1, "icon", "px-1", "text-muted", 3, "click", "iconName"], ["width", "18", "height", "18", "data-cy", "edit-btn", "title", "\u0648\u06CC\u0631\u0627\u06CC\u0634", 1, "icon", "px-1", "text-muted", 3, "iconName"], ["width", "18", "height", "18", "data-cy", "delete-btn", "title", "\u062D\u0630\u0641", 1, "icon", "px-1", "text-muted", 3, "iconName"], ["width", "18", "height", "18", "data-cy", "edit-btn", "title", "\u0648\u06CC\u0631\u0627\u06CC\u0634", 1, "icon", "px-1", "text-muted", 3, "click", "iconName"], ["width", "18", "height", "18", "data-cy", "delete-btn", "title", "\u062D\u0630\u0641", 1, "icon", "px-1", "text-muted", 3, "click", "iconName"], ["data-cy", "order-list-item-place-btn", "title", "\u062C\u0627\u06CC\u06AF\u0627\u0647 \u0633\u0641\u0627\u0631\u0634", "width", "18", "height", "18", 1, "icon", "px-1", "text-grey", "small", 3, "click", "triggers", "autoClose", "ngbPopover", "iconName"], [1, "position-relative"], ["data-cy", "order-list-item-orderPlace", 1, "fw-bold", "ms-1"], ["data-cy", "order-list-item-volumeAhead", 1, "fw-bold", "ms-1"], ["title", "\u062C\u0632\u0626\u06CC\u0627\u062A \u0645\u0639\u0627\u0645\u0644\u0627\u062A", "width", "20", "height", "20", 1, "cup", "d-inline-block", "position-relative", "text-muted", 3, "click", "iconName"], [3, "ngClass"], [1, "p-2", "bg-principal", "rounded"], [1, "order-price", "text-primary"], [1, "progress", "done", "my-1"], ["role", "progressbar", 3, "ngClass", "width"], [1, "text-muted", "text-end", "mt-1"], [1, "order-date"], ["width", "16", "height", "16", 1, "", 3, "iconName"], ["role", "progressbar", 3, "ngClass"], ["data-cy", "order-list-item-tooltip-text", 1, "tooltip-inner"], ["data-cy", "", 1, "text-secondary"]],
        template: function(n, s) {
            n & 1 && x(0, St, 15, 15)(1, Jt, 43, 39, "div", 4)(2, Gt, 5, 8, "div", 5),
            n & 2 && (p(s.collapseMode ? 0 : 1),
            a(2),
            p(s.showTooltip ? 2 : -1))
        },
        dependencies: [q, j, ee, M, z, R, U, $, V],
        encapsulation: 2,
        changeDetection: 0
    });
    let t = l;
    return t
}
)();
export {ni as a, hi as b, Vi as c, en as d};
//# sourceMappingURL=chunk-67NDRJKX.js.map
