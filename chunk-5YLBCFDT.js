import {n as M} from "./chunk-VTNMJBW4.js";
import {cb as H} from "./chunk-OFJ5SZPL.js";
import {Ac as s, Bb as k, Bc as f, Fb as n, Gb as _, Hc as d, Ic as m, Lc as h, Pd as w, Rd as T, Ub as D, Wc as S, Xc as g, _b as u, ae as x, fd as E, ld as N, mb as C, mc as v, md as y, nc as o, ne as L, rc as I, re as b, zc as c} from "./chunk-K3475DQT.js";
var A = ["d-stock-condition-list-item", ""]
  , F = t => ({
    "rotate-180": t
});
function P(t, e) {
    if (t & 1 && (c(0, "span", 11),
    S(1),
    s()),
    t & 2) {
        let r = m();
        n(),
        g(r.stockCondition.name)
    }
}
function j(t, e) {
    if (t & 1 && f(0, "span", 12),
    t & 2) {
        let r = m();
        o("innerHTML", r.stockConditionDescriptionHtml, k)
    }
}
function z(t, e) {
    if (t & 1 && (c(0, "div", 13),
    f(1, "div", 14),
    s()),
    t & 2) {
        let r = m();
        n(),
        o("innerHTML", r.stockConditionDescriptionHtml, k)
    }
}
var W = ( () => {
    let e = class e {
        get stockConditionDescription() {
            return this.conditionalNotificationService.getStockConditionDescription(this.stockCondition)
        }
        get stockConditionDescriptionHtml() {
            return this.conditionalNotificationService.getStockConditionDescriptionHtml(this.stockCondition)
        }
        get stockConditionIconName() {
            return this.conditionalNotificationService.getStockConditionIconNameInConditionsPage(this.stockCondition)
        }
        get stockConditionIconClasses() {
            return this.conditionalNotificationService.getStockConditionIconClassesInConditionsPage(this.stockCondition)
        }
        get stockConditionStateDescription() {
            return this.conditionalNotificationService.getStockConditionStateDescription(this.stockCondition)
        }
        constructor(p) {
            this.conditionalNotificationService = p,
            this.icons = L,
            this.showDescription = !1,
            this.removeStockConditionEventEmitter = new C,
            this.editStockConditionEventEmitter = new C
        }
        showConditionDescription() {
            this.showDescription = !this.showDescription,
            this.showDescription && this.flagNotifiedConditionAsSeen()
        }
        flagNotifiedConditionAsSeen() {
            this.conditionalNotificationService.isConditionNotifiedAndUnseen(this.stockCondition) && this.conditionalNotificationService.flagNotifiedConditionAsSeen(this.stockCondition)
        }
        onRemoveStockConditionClicked() {
            this.removeStockConditionEventEmitter.emit(this.stockCondition.id)
        }
        onEditStockConditionClicked() {
            this.editStockConditionEventEmitter.emit(this.stockCondition.id)
        }
    }
    ;
    e.\u0275fac = function(a) {
        return new (a || e)(_(M))
    }
    ,
    e.\u0275cmp = D({
        type: e,
        selectors: [["", "d-stock-condition-list-item", ""]],
        inputs: {
            stockCondition: "stockCondition",
            itemIndex: "itemIndex"
        },
        outputs: {
            removeStockConditionEventEmitter: "removeStockConditionEventEmitter",
            editStockConditionEventEmitter: "editStockConditionEventEmitter"
        },
        attrs: A,
        decls: 13,
        vars: 19,
        consts: [[1, "w-100"], [1, "d-flex", "align-items-center", "cup"], [1, "flex-grow-1", "overflow-hidden", "cup", "user-select-none", 3, "click", "title"], ["class", "d-block", 4, "ngIf"], ["class", "text-truncate mb-1 d-block", 3, "innerHTML", 4, "ngIf"], [1, "text-muted"], ["width", "20", "height", "20", 3, "click", "iconName", "title"], ["width", "20", "height", "20", "title", "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0647\u0634\u062F\u0627\u0631", 1, "text-secondary", "icon", 3, "click", "iconName"], ["width", "20", "height", "20", "title", "\u062D\u0630\u0641 \u0647\u0634\u062F\u0627\u0631", 1, "px-1", "text-secondary", "icon", 3, "click", "iconName"], ["width", "20", "height", "20", 1, "px-1", "text-secondary", 3, "click", "iconName", "ngClass"], ["class", "d-flex align-items-center mt-1 rounded text-body-tertiary", 4, "ngIf"], [1, "d-block"], [1, "text-truncate", "mb-1", "d-block", 3, "innerHTML"], [1, "d-flex", "align-items-center", "mt-1", "rounded", "text-body-tertiary"], [3, "innerHTML"]],
        template: function(a, i) {
            a & 1 && (c(0, "div", 0)(1, "div", 1)(2, "div", 2),
            d("click", function() {
                return i.showConditionDescription()
            }),
            u(3, P, 2, 1, "span", 3)(4, j, 1, 1, "span", 4),
            c(5, "small", 5),
            S(6),
            N(7, "jdate"),
            s()(),
            c(8, "svg-icon", 6),
            d("click", function() {
                return i.flagNotifiedConditionAsSeen()
            }),
            s(),
            c(9, "svg-icon", 7),
            d("click", function() {
                return i.onEditStockConditionClicked()
            }),
            s(),
            c(10, "svg-icon", 8),
            d("click", function() {
                return i.onRemoveStockConditionClicked()
            }),
            s(),
            c(11, "svg-icon", 9),
            d("click", function() {
                return i.showConditionDescription()
            }),
            s()(),
            u(12, z, 2, 1, "div", 10),
            s()),
            a & 2 && (n(2),
            h("title", i.stockConditionDescription),
            n(),
            o("ngIf", i.stockCondition.name),
            n(),
            o("ngIf", !i.stockCondition.name),
            n(2),
            g(y(7, 15, i.stockCondition == null ? null : i.stockCondition.creationDateTime)),
            n(2),
            I(i.stockConditionIconClasses),
            h("title", i.stockConditionStateDescription),
            o("iconName", i.stockConditionIconName),
            n(),
            o("iconName", i.icons.Edit),
            v("data-cy", "edit-conditional-btn-" + i.stockCondition.id),
            n(),
            o("iconName", i.icons.Delete),
            v("data-cy", "delete-conditional-btn-" + i.stockCondition.id),
            n(),
            o("iconName", i.icons.ChevronDown)("ngClass", E(17, F, i.showDescription)),
            n(),
            o("ngIf", i.showDescription))
        },
        dependencies: [x, w, T, H, b],
        encapsulation: 2
    });
    let t = e;
    return t
}
)();
export {W as a};
//# sourceMappingURL=chunk-5YLBCFDT.js.map
