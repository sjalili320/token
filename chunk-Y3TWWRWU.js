import {p as D1, q as P1} from "./chunk-3Z35ZEOH.js";
import {c as F1, q as _1} from "./chunk-KW67K7GE.js";
import {b as N1, n as z1} from "./chunk-VTNMJBW4.js";
import {A as V1, C as I1, M as O1, N as k1, f as D, l as M1, r as x} from "./chunk-3R47PHPO.js";
import {h as x1, j as H1} from "./chunk-O3BOZ3M4.js";
import {C as n1, Lb as S1, Ob as v1, Rb as b1, ba as S, fb as f1, ja as y1, k as r1, oa as L1, rb as g1, rc as w1, y as N} from "./chunk-OFJ5SZPL.js";
import {Ac as M, Ae as u1, Bc as T, Cd as a1, Fb as y, Fc as _, Ga as Y, Ge as h1, Hc as O, Ia as m, Ic as L, Mb as w, Nb as X, Pa as b, Se as p1, Tc as t1, Te as m1, Ua as d, Ub as e1, Uc as o1, Uf as Z, Va as F, Wc as i1, Xc as s1, _b as B, a as l, b as u, ca as K, db as H, ea as G, eb as V, i as W, na as q, nc as I, ne as z, oa as Q, p as f, q as v, qe as l1, re as C1, uc as E, ve as c1, xe as d1, z as J, zc as g} from "./chunk-K3475DQT.js";
var R = function(r) {
    return r[r.STACK_ORDER = 0] = "STACK_ORDER",
    r[r.TABULAR_ORDER = 1] = "TABULAR_ORDER",
    r
}(R || {})
  , P = class {
    constructor() {
        this.baseLayout = R.STACK_ORDER,
        this.selectedLayout = "layout2",
        this.collapseMode = new j(!1),
        this.closeMode = new U(!1,!1),
        this.layout1Config = B1,
        this.layout2Config = R1,
        this.layout3Config = T1,
        this.tabularOrderSizeByPercent = E1
    }
}
;
var j = class {
    constructor(a) {
        this.stackOrderCollapse = a
    }
}
  , U = class {
    constructor(a, C) {
        this.stackOrderClose = a,
        this.userStatusbarClose = C
    }
}
  , R1 = {
    columns: [{
        size: "*",
        rows: [{
            size: "60"
        }, {
            size: "40"
        }]
    }, {
        size: "400"
    }]
}
  , B1 = {
    rows: [{
        size: "40"
    }, {
        size: "30",
        columns: [{
            size: "34"
        }, {
            size: "40"
        }, {
            size: "26"
        }]
    }, {
        size: "30"
    }]
}
  , E1 = {
    tv: 30,
    ef: 30,
    oh: 30,
    tr: 30
}
  , T1 = {
    columns: [{
        size: "*",
        rows: [{
            size: "40"
        }, {
            size: "30"
        }, {
            size: "30"
        }]
    }, {
        size: "400"
    }]
}
  , A = class {
    constructor(a) {
        this.layoutModel = a
    }
}
;
var A1 = ( () => {
    let a = class a extends v1 {
        get url() {
            return `${this.mtsPath + this.apiUrls.easy}Layout`
        }
        get layoutModel() {
            if (this._layoutModel)
                return l({}, this._layoutModel);
            let e = localStorage.getItem(this.layoutModelKey);
            return e ? JSON.parse(e) : new P
        }
        set layoutModel(e) {
            this.setLayoutModelLocally(e),
            this.saveLayoutSub.next(!0)
        }
        set selectedLayout(e) {
            this.layoutModel = u(l({}, this.layoutModel), {
                selectedLayout: e
            })
        }
        get selectedLayout() {
            return this.layoutModel.selectedLayout
        }
        get collapseMode() {
            return this.layoutModel.collapseMode
        }
        set collapseMode(e) {
            this.layoutModel = u(l({}, this.layoutModel), {
                collapseMode: e
            })
        }
        get closeMode() {
            return this.layoutModel.closeMode
        }
        set closeMode(e) {
            this.layoutModel = u(l({}, this.layoutModel), {
                closeMode: e
            })
        }
        closeOrderListLocally() {
            let e = l({}, this.closeMode);
            e.stackOrderClose = !0,
            this.setLayoutModelLocally(u(l({}, this.layoutModel), {
                closeMode: e
            }))
        }
        setLayoutFromLocalStorage() {
            let e = localStorage.getItem(this.layoutModelKey);
            e && this.setLayoutModelLocally(l({}, JSON.parse(e)))
        }
        get layout1Config() {
            return this.layoutModel.layout1Config
        }
        set layout1Config(e) {
            this.layoutModel = u(l({}, this.layoutModel), {
                layout1Config: e
            })
        }
        get layout2Config() {
            return this.layoutModel.layout2Config
        }
        set layout2Config(e) {
            this.layoutModel = u(l({}, this.layoutModel), {
                layout2Config: e
            })
        }
        get layout3Config() {
            return this.layoutModel.layout3Config
        }
        set layout3Config(e) {
            this.layoutModel = u(l({}, this.layoutModel), {
                layout3Config: e
            })
        }
        get baseLayout() {
            return this.layoutModel.baseLayout
        }
        set baseLayout(e) {
            this.layoutModel = u(l({}, this.layoutModel), {
                baseLayout: e
            })
        }
        get ordersGridEnabled() {
            return this.baseLayout === R.TABULAR_ORDER
        }
        get tabularOrderSizeByPercent() {
            return this.layoutModel.tabularOrderSizeByPercent
        }
        set tabularOrderSizeByPercent(e) {
            this.layoutModel = u(l({}, this.layoutModel), {
                tabularOrderSizeByPercent: e
            })
        }
        get isHome() {
            return !n1.find(t => this.router.url.replace("/", "").includes(t))
        }
        get layoutModelKey() {
            return "layoutModelKey_" + this.accountService?.userAccountInfo?.value?.customerIsin
        }
        constructor() {
            super(),
            this.accountService = F(b1),
            this.sidePanelServiceService = F(w1),
            this.router = F(r1),
            this.portfolioWatchContainerActiveIndex = 0,
            this.homePageComponentTabIndex$ = new v(this.portfolioWatchContainerActiveIndex),
            this.__layoutModel = w(void 0),
            this.LayoutModel = this.__layoutModel.asReadonly(),
            this.changeLayoutSubject = new v(null),
            this.changeLayout$ = this.changeLayoutSubject.asObservable(),
            this.layouts = ["layout1", "layout2", "layout3"],
            this.stackOrderCollapseSub = new v(this.collapseMode.stackOrderCollapse),
            this.stackOrderCollapse$ = this.stackOrderCollapseSub.asObservable(),
            this.stackOrderCloseModeSub = new v(this.closeMode.stackOrderClose),
            this.stackOrderCloseMode$ = this.stackOrderCloseModeSub.asObservable(),
            this.userStatusbarCloseSub = new v(this.closeMode.userStatusbarClose),
            this.userStatusbarClose$ = this.userStatusbarCloseSub.asObservable(),
            this.saveLayoutSub = new f,
            this.saveLayout$ = this.saveLayoutSub.asObservable(),
            this.receiveLayoutFromBackendSub = new f,
            this.receiveLayoutFromBackend$ = this.receiveLayoutFromBackendSub.asObservable(),
            this.gridResized = new f,
            this.gridResized$ = this.gridResized.asObservable(),
            this.getLayoutOnStartup(),
            this.subscribeToSaveLayout()
        }
        getLayoutOnStartup() {
            let e = this.accountService?.userAccountInfo$.pipe(Q(Boolean), q( () => e.unsubscribe())).subscribe( () => {
                this.getLayout()
            }
            )
        }
        getLayout() {
            this.loadLayoutFromBackend().pipe(G(1), m(e => {
                e ? (this.receiveLayoutFromBackendSub.next(e),
                this.setLayoutModelLocally(e)) : this.setLayoutModelLocally(this.layoutModel)
            }
            )).subscribe({
                error: () => this.setLayoutModelLocally(this.layoutModel)
            })
        }
        loadLayoutFromBackend() {
            return this.httpService.get(this.url).pipe(m( () => {
                this.resetSymbolDetailLayout3()
            }
            ), Y(e => {
                let t = JSON.parse(e.layoutModel);
                return J(t)
            }
            ))
        }
        setLayoutModelLocally(e) {
            this._layoutModel = l({}, e),
            this.__layoutModel.set(l({}, e)),
            this.changeLayoutSubject.next(e.selectedLayout)
        }
        subscribeToSaveLayout() {
            this.saveLayout$.pipe(m( () => localStorage.setItem(this.layoutModelKey, JSON.stringify(this.layoutModel))), K(1e4), m( () => {
                this.saveLayoutToBackend().subscribe( () => {
                    localStorage.setItem(this.layoutModelKey, JSON.stringify(this.layoutModel))
                }
                )
            }
            )).subscribe()
        }
        saveLayoutToBackend() {
            let e = new A(JSON.stringify(this.layoutModel));
            return this.httpService.post(this.url, {
                body: e
            })
        }
        changeStackOrderCollapse(e) {
            this.changeStackOrderCloseMode(!1),
            this.collapseMode = u(l({}, this.collapseMode), {
                stackOrderCollapse: e
            })
        }
        changeStackOrderCloseMode(e) {
            this.closeMode = u(l({}, this.closeMode), {
                stackOrderClose: e
            }),
            this.gridResized.next(!0)
        }
        changeUserStatusbarCloseMode(e) {
            this.closeMode = u(l({}, this.closeMode), {
                userStatusbarClose: e
            })
        }
        openNoteManagement(e) {
            this.sidePanelServiceService.openSidePanelFromRoute({
                sidePanel: N.Note,
                value: e
            })
        }
        openConditionalTools(e, t) {
            this.sidePanelServiceService.openSidePanelFromRoute({
                sidePanel: N.Conditional,
                data: {
                    conditionId: t
                },
                value: e
            })
        }
        showSearchPanel() {
            this.sidePanelServiceService.openSidePanelFromRoute({
                sidePanel: N.Search
            })
        }
        changeLayout() {
            let e = this.layouts.indexOf(this.selectedLayout);
            e + 1 < this.layouts.length ? this.selectedLayout = this.layouts[e + 1] : this.selectedLayout = this.layouts[0]
        }
        selectLayout(e) {
            this.selectedLayout = this.layouts[e]
        }
        symbolDetailLayout1ChangeState() {
            this.layout1Config.rows[1].size > 0 ? this.layout1Config.rows[1].size = 0 : this.layout1Config.rows[1].size = 400,
            this.layout1Config.rows[0].size = "*"
        }
        symbolDetailLayout2ChangeState() {
            this.layout2Config.columns[1].size > 0 ? this.layout2Config.columns[1].size = 0 : this.layout2Config.columns[1].size = 400,
            this.layout2Config.columns[0].rows[0].size = "*",
            this.gridResized.next(!0)
        }
        symbolDetailLayout3ChangeState() {
            this.layout3Config.columns[1].size > 0 ? this.layout3Config.columns[1].size = 0 : this.layout3Config.columns[1].size = 400,
            this.layout3Config.columns[0].rows[0].size = "*",
            this.layout3Config.columns[0].rows[1].size = "*",
            this.gridResized.next(!0)
        }
        resetSymbolDetailLayout1() {
            this.layout1Config.rows[1].size = 400,
            this.layout1Config.rows[0].size = "*"
        }
        resetSymbolDetailLayout2() {
            this.layout2Config.columns[1].size = 400,
            this.layout2Config.columns[0].rows[0].size = "*"
        }
        resetSymbolDetailLayout3() {
            this.layout3Config.columns[1].size = 400,
            this.layout3Config.columns[0].rows[0].size = "*",
            this.layout3Config.columns[0].rows[1].size = "*"
        }
        closeSymbolDetailsLocally() {
            this.selectedLayout === "layout1" ? this.layout1Config.rows[1].size = 0 : this.selectedLayout === "layout2" ? this.layout2Config.columns[1].size = 0 : this.selectedLayout === "layout3" && (this.layout3Config.columns[1].size = 0)
        }
    }
    ;
    a.\u0275fac = function(t) {
        return new (t || a)
    }
    ,
    a.\u0275prov = b({
        token: a,
        factory: a.\u0275fac,
        providedIn: "root"
    });
    let r = a;
    return r
}
)();
var C0 = ( () => {
    let a = class a {
        constructor(e, t, i, o, s, n, c, h) {
            this.orderService = e,
            this.omsFacade = t,
            this.algoFacade = i,
            this.algoOrderFacade = o,
            this.draftFacade = s,
            this.orderStore = n,
            this.layoutService = c,
            this.activeSymbolService = h,
            this.popups = [],
            this.basePosition = 0,
            this.showCaution = !1,
            this.changeExistingOrderPopUpFieldsSubject = new f,
            this.popupArrayChanged = new f
        }
        get popupExists() {
            return this.popups.length > 0
        }
        get selectedPopup() {
            return this.popups.find(e => e.isSelected)
        }
        get isHome() {
            return this.layoutService.isHome
        }
        get ordersGridEnabled() {
            return this.layoutService.ordersGridEnabled
        }
        openPopup(e, t=null, i=null) {
            let o = L1()
              , s = this.popups.length
              , n = u(l({}, e), {
                id: o,
                isCaution: !1
            });
            this.setPosition(n),
            this.select(n),
            s >= 4 ? this.popups.splice(0, 1, n) : this.popups.push(n),
            this.popupArrayChanged.next(!0),
            (t || i) && this.makeOrEditOrderInPopup(n, t, i)
        }
        setPosition(e) {
            this.basePosition += 20,
            e.x = this.basePosition,
            e.y = this.basePosition
        }
        closePopup(e) {
            let t = this.popups.find(s => s.id === e);
            if (t.orderInputData?.orderTabType === M1.Algo) {
                let s = this.algoOrderFacade.getAlgoOrderById(t.orderInputData?.id);
                this.algoFacade.updateState(s.id, {
                    isEditMode: !1
                })
            } else {
                let s = this.orderStore.getOrder(t.orderInputData?.id ?? t.id);
                s?.easyState === D.GridEditMode && (s.orderModelType === x.oms ? this.omsFacade.updateState(s.id, {
                    easyState: D.Done
                }) : s.orderModelType === x.draft && this.draftFacade.updateState(s.id, {
                    easyState: D.Done
                }))
            }
            let i = this.popups.findIndex(s => s.id === e);
            this.popups.splice(i, 1),
            this.popupArrayChanged.next(!0),
            this.popups.length === 0 && (this.basePosition = 0)
        }
        closeAllPopups() {
            for (let e = 0; e < this.popups.length; e++)
                this.popups.splice(e, 1),
                this.popups.length === 0 && (this.basePosition = 0);
            this.popupArrayChanged.next(!0)
        }
        select(e) {
            this.popups.forEach(t => t.isSelected = !1),
            e.isSelected = !0
        }
        makeOrder(e, t, i=null, o=null) {
            let s = t.isin;
            this.ordersGridEnabled ? (t.showOrderForm = !1,
            setTimeout( () => {
                t.showOrderForm = !0,
                t.orderInputData = this.orderService.getDefaultOrderInputData(e, i, o, s),
                t.orderInputData.popUpId = t.id
            }
            , 0)) : this.orderService.updateOrderFromMarketDepthState({
                isin: s,
                side: e,
                type: 7
            })
        }
        makeOrChangeExistingOrder(e, t, i=null, o=null) {
            let s = t.isin;
            this.ordersGridEnabled ? (this.setActiveStock(s),
            t.showOrderForm = !1,
            setTimeout( () => {
                t.showOrderForm = !0,
                t.orderInputData = this.orderService.getDefaultOrderInputData(e, i, o, s),
                t.orderInputData.popUpId = t.id
            }
            , 0)) : this.orderService.updateOrderFromMarketDepthState({
                isin: s,
                price: o,
                quantity: i,
                side: e,
                type: 2
            })
        }
        makeOrderForSelectedPopup(e) {
            this.selectedPopup && this.makeOrder(e, this.selectedPopup)
        }
        editOrder(e, t) {
            e.showOrderForm = !1,
            setTimeout( () => {
                e.showOrderForm = !0,
                e.orderInputData = this.orderService.getOrderDataForEdit(t),
                e.orderInputData.popUpId = e.id
            }
            , 0)
        }
        setActiveStock(e) {
            this.activeSymbolService.setActiveIsin(e.toUpperCase())
        }
        makeOrEditOrderInPopup(e, t, i) {
            this.isHome && (e.hideMarketDepth = !0),
            t ? this.makeOrder(t.side, e, t.quantity, t.price) : i && this.editOrder(e, i)
        }
    }
    ;
    a.\u0275fac = function(t) {
        return new (t || a)(d(O1),d(k1),d(F1),d(_1),d(I1),d(V1),d(A1),d(H1))
    }
    ,
    a.\u0275prov = b({
        token: a,
        factory: a.\u0275fac,
        providedIn: "root"
    });
    let r = a;
    return r
}
)();
var U1 = ["searchSymbolInput"];
function $1(r, a) {
    if (r & 1) {
        let C = _();
        g(0, "div", 2),
        T(1, "input", 3, 0),
        g(3, "svg-icon", 4),
        O("click", function() {
            H(C);
            let t = L();
            return V(t.onSearchActive(!1))
        }),
        M()()
    }
    if (r & 2) {
        let C = L();
        y(),
        I("formControl", C.searchCtrl),
        y(2),
        I("iconName", C.icons.Close)
    }
}
function W1(r, a) {
    if (r & 1) {
        let C = _();
        g(0, "div", 7)(1, "div", 8),
        O("click", function() {
            H(C);
            let t = L(2);
            return V(t.onSortRequested())
        }),
        T(2, "svg-icon", 9),
        M()()
    }
    if (r & 2) {
        let C = L(2);
        y(2),
        I("iconName", C.sortState() === "asc" ? C.icons.SortDown : C.icons.SortUp)
    }
}
function J1(r, a) {
    if (r & 1) {
        let C = _();
        g(0, "div", 5),
        O("click", function() {
            H(C);
            let t = L();
            return V(t.onSortRequested())
        }),
        i1(1),
        M(),
        g(2, "svg-icon", 6),
        O("click", function() {
            H(C);
            let t = L();
            return V(t.onSearchActive(!0))
        }),
        M(),
        B(3, W1, 3, 1, "div", 7)
    }
    if (r & 2) {
        let C, e = L();
        y(),
        s1((C = e.params()) == null ? null : C.displayName),
        y(),
        I("iconName", e.icons.Magnify),
        y(),
        E(e.sortState() ? 3 : -1)
    }
}
var S0 = ( () => {
    let a = class a {
        constructor() {
            this.icons = z,
            this.params = w(void 0),
            this.sortState = w(""),
            this.searchCtrl = new u1(""),
            this.searchActive = w(!1),
            this.searchSymbolInput = X("searchSymbolInput"),
            l1(this.searchCtrl.valueChanges.pipe(m(e => {
                this.searchActive() && this.params()?.context.componentParent.headerSearchSymbolChanged(e)
            }
            ))),
            a1( () => {
                this.searchSymbolInput()?.nativeElement.focus()
            }
            )
        }
        agInit(e) {
            this.params.set(e),
            this.listenerFunctionRef = this.onSortChanged.bind(this),
            this.params().column.addEventListener("sortChanged", this.listenerFunctionRef),
            this.onSortChanged()
        }
        refresh() {
            return !0
        }
        ngOnDestroy() {
            this.params()?.column.removeEventListener("sortChanged", this.listenerFunctionRef)
        }
        onSortChanged() {
            this.params()?.column.isSortAscending() ? this.sortState.set("asc") : this.params()?.column.isSortDescending() ? this.sortState.set("desc") : this.sortState.set("")
        }
        onSortRequested() {
            this.params()?.progressSort()
        }
        onSearchActive(e) {
            this.searchActive.set(e),
            e || (this.searchCtrl.setValue(""),
            this.params()?.context.componentParent.headerSearchSymbolChanged(null))
        }
    }
    ;
    a.\u0275fac = function(t) {
        return new (t || a)
    }
    ,
    a.\u0275cmp = e1({
        type: a,
        selectors: [["app-symbol-header"]],
        viewQuery: function(t, i) {
            t & 1 && t1(i.searchSymbolInput, U1, 5),
            t & 2 && o1()
        },
        decls: 3,
        vars: 1,
        consts: [["searchSymbolInput", ""], [1, "d-flex", "align-items-center", "justify-content-between", "px-2"], [1, "d-flex", "align-items-center"], ["data-cy", "order-grid-symbol-search", "type", "text", "placeholder", "\u062C\u0633\u062A\u062C\u0648", 1, "border-0", "h-100", "ps-2", "bg-principal", "w-auto", "border", "text-body", 2, "max-width", "65px", 3, "formControl"], ["width", "12", "height", "12", 1, "px-2", "cup", 3, "click", "iconName"], [1, "customHeaderLabel", "cup", 3, "click"], ["width", "12", "height", "18", "data-cy", "order-grid-symbol-search-btn", 1, "ps-2", "cup", 3, "click", "iconName"], [1, "ag-header-cell-label"], [1, "ag-header-icon", "ms-2", "position-absolute", 2, "left", "4px", "bottom", "7px", 3, "click"], ["width", "16", "height", "16", "unselectable", "on", 1, "text-muted", 3, "iconName"]],
        template: function(t, i) {
            t & 1 && (g(0, "div", 1),
            B(1, $1, 4, 2, "div", 2)(2, J1, 4, 3),
            M()),
            t & 2 && (y(),
            E(i.searchActive() ? 1 : 2))
        },
        dependencies: [p1, c1, d1, m1, h1, C1],
        styles: ["/*# sourceMappingURL=ag-symbol-header.component-2WHPB5CM.css.map */"],
        changeDetection: 0
    });
    let r = a;
    return r
}
)();
var k0 = ( () => {
    let a = class a {
        get categoriesMenu() {
            let e = this.data?.symbolIsin || this.data?.symbolISIN;
            return this.marketWatchStoreFacade.getCategoriesAsArray().map(i => {
                let o = {
                    name: i.name,
                    checked: i.categorySymbolIsins.includes(e),
                    action: () => {
                        o.checked ? this.marketWatchFacade.removeSymbolsFromCategory(i.id, [e]) : this.marketWatchFacade.addSymbolToCategory(i.id, e)
                    }
                };
                return o
            }
            )
        }
        get noteIcon() {
            return this.noteFacadeService.hasNote(this.data?.symbolISIN || this.data?.symbolIsin) ? '<svg-icon class ="text-violet px-1 text-secondary " style = "opacity: 1" width="20" height="20" [iconName]="icons.NoteFill"></svg-icon>' : '<svg-icon class =" px-1 text-secondary  style = "opacity: 1" width="20" height="20" [iconName]="icons.Note"></svg-icon>'
        }
        constructor(e, t, i, o, s, n) {
            this.storageService = e,
            this.noteFacadeService = t,
            this.marketWatchFacade = i,
            this.marketWatchStoreFacade = o,
            this.symbolService = s,
            this.conditionalNotificationService = n,
            this.icons = z
        }
        getContextMenuItems(e, t, i) {
            let o = t
              , s = i == S.OptionMarketView
              , n = i == S.OptionMarketView;
            o.data = this.data = e.node?.data,
            o.data.canBuy = o.data.canBuy || !0,
            o.data.canSell = o.data.canSell || !0;
            let c = o.data?.symbolISIN || o.data?.symbolIsin;
            c = c.toUpperCase();
            let h = [{
                name: "\u062E\u0631\u06CC\u062F",
                action: () => {
                    o.data?.canBuy && o.orderService.updateOrderFromMarketDepthState({
                        isin: c,
                        side: Z.BUY,
                        type: 5
                    })
                }
                ,
                icon: `<svg class="${o.data?.canBuy ? " text-success " : " text-muted"} "
	 				width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9562 2L11 2H13L13.0438 2C14.4068 1.99999 15.4908 1.99999 16.3654 2.07144C17.261 2.14462 18.0247 2.29768 18.7239 2.65396C19.8529 3.2292 20.7708 4.14708 21.346 5.27606C21.7023 5.9753 21.8554 6.73898 21.9286 7.63458C22 8.50914 22 9.59313 22 10.9561V10.9562V11V13.0001V13.0439V13.044C22 14.407 22 15.491 21.9286 16.3655C21.8554 17.2611 21.7023 18.0248 21.346 18.7241C20.7708 19.853 19.8529 20.7709 18.7239 21.3462C18.0247 21.7024 17.261 21.8555 16.3654 21.9287C15.4909 22.0001 14.4069 22.0001 13.0439 22.0001H13.0438H13H11H10.9562H10.9561C9.59313 22.0001 8.50914 22.0001 7.63458 21.9287C6.73898 21.8555 5.9753 21.7024 5.27606 21.3462C4.14708 20.7709 3.2292 19.853 2.65396 18.7241C2.29768 18.0248 2.14462 17.2611 2.07144 16.3655C1.99999 15.491 1.99999 14.4069 2 13.0439L2 13.0001V11L2 10.9562C1.99999 9.5932 1.99999 8.50917 2.07144 7.63458C2.14462 6.73898 2.29768 5.9753 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C5.9753 2.29768 6.73898 2.14462 7.63458 2.07144C8.50917 1.99999 9.5932 1.99999 10.9562 2ZM13 8.00007C13 7.44778 12.5524 7.00004 12.0001 7C11.4478 6.99996 11 7.44764 11 7.99993L10.9998 11L8.00001 11C7.44773 11 7.00001 11.4477 7 12C6.99999 12.5523 7.4477 13 7.99998 13L10.9998 13L11 16.0001C11 16.5524 11.4478 17 12.0001 17C12.5524 17 13 16.5522 13 15.9999L12.9998 13L16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11L12.9998 11L13 8.00007Z" fill="currentColor"></path>
					</svg>
					`,
                cssClasses: [o.data?.canBuy ? "text-start" : "text-muted", "bold"]
            }, {
                name: i == S.Portfolio ? "\u0641\u0631\u0648\u0634 \u06A9\u0644 \u062F\u0627\u0631\u0627\u06CC\u06CC" : "\u0641\u0631\u0648\u0634",
                action: () => {
                    o.data?.canSell && o.orderService.updateOrderFromMarketDepthState({
                        isin: c,
                        side: Z.SELL,
                        quantity: o.data.asset,
                        type: 5
                    })
                }
                ,
                icon: `<svg class="${o.data?.canSell ? "  text-danger " : " text-muted"}" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9562 2H11H13H13.0438H13.0438C14.4068 1.99999 15.4908 1.99999 16.3654 2.07144C17.261 2.14462 18.0247 2.29768 18.7239 2.65396C19.8529 3.2292 20.7708 4.14708 21.346 5.27606C21.7023 5.9753 21.8554 6.73898 21.9286 7.63458C22 8.50914 22 9.59313 22 10.9561V10.9562V11V13.0001V13.0439V13.044C22 14.407 22 15.491 21.9286 16.3655C21.8554 17.2611 21.7023 18.0248 21.346 18.7241C20.7708 19.853 19.8529 20.7709 18.7239 21.3462C18.0247 21.7024 17.261 21.8555 16.3654 21.9287C15.4909 22.0001 14.4069 22.0001 13.0439 22.0001H13.0438H13H11H10.9562H10.9561C9.59313 22.0001 8.50914 22.0001 7.63458 21.9287C6.73898 21.8555 5.9753 21.7024 5.27606 21.3462C4.14708 20.7709 3.2292 19.853 2.65396 18.7241C2.29768 18.0248 2.14462 17.2611 2.07144 16.3655C1.99999 15.491 1.99999 14.4069 2 13.0439V13.0439V13.0001V11V10.9562V10.9562C1.99999 9.59319 1.99999 8.50917 2.07144 7.63458C2.14462 6.73898 2.29768 5.9753 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C5.9753 2.29768 6.73898 2.14462 7.63458 2.07144C8.50917 1.99999 9.59319 1.99999 10.9562 2H10.9562ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z" fill="currentColor"></path>
					</svg>`,
                cssClasses: [o.data?.canSell ? "text-start" : "text-muted", "bold"]
            }, "separator", {
                name: "\u0639\u0645\u0642 \u0628\u0627\u0632\u0627\u0631",
                action: () => {
                    o.popupOrderService.openPopup({
                        isin: o.data?.symbolISIN || o.data?.symbolIsin,
                        name: o.data.symbolFa,
                        side: g1.Sell,
                        canBuy: o.data.canBuy,
                        canSell: o.data.canSell
                    })
                }
                ,
                icon: `<svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C12.5523 1 13 1.44772 13 2V2.49688C13 2.49792 13 2.49896 13 2.5V21.5C13 21.501 13 21.5021 13 21.5031V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H6.4H6.36392H6.3639H6.36388H6.36386C5.97479 21 5.62468 21 5.33338 20.9762C5.02141 20.9508 4.68993 20.8931 4.36503 20.7275C3.89462 20.4878 3.51217 20.1054 3.27249 19.635C3.10694 19.3101 3.04925 18.9786 3.02376 18.6666C2.99996 18.3753 2.99998 18.0252 3 17.6361L3.00001 17.6V17.4L3 17.3639C2.99998 16.9748 2.99996 16.6247 3.02376 16.3334C3.03408 16.2071 3.04966 16.0777 3.07553 15.9469C2.84193 15.9115 2.60173 15.8481 2.36503 15.7275C1.89462 15.4878 1.51217 15.1054 1.27249 14.635C1.10694 14.3101 1.04925 13.9786 1.02376 13.6666C0.999964 13.3753 0.999981 13.0253 1 12.6362V12.6362V12.6361L1.00001 12.6V11.4L1 11.3639V11.3638V11.3638C0.999981 10.9747 0.999964 10.6247 1.02376 10.3334C1.04925 10.0214 1.10694 9.68993 1.27249 9.36502C1.51217 8.89462 1.89462 8.51217 2.36503 8.27248C2.68993 8.10694 3.02141 8.04925 3.33338 8.02376C3.62469 7.99996 3.97483 7.99998 4.36392 8L4.40001 8H6.06556C6.04553 7.88723 6.03268 7.77574 6.02376 7.66663C5.99996 7.37531 5.99998 7.02518 6 6.63609L6.00001 6.6V6.4L6 6.36391C5.99998 5.97482 5.99996 5.62469 6.02376 5.33337C6.04925 5.0214 6.10694 4.68993 6.27249 4.36502C6.51217 3.89462 6.89462 3.51217 7.36503 3.27248C7.68993 3.10694 8.02141 3.04925 8.33338 3.02376C8.62469 2.99996 8.97483 2.99998 9.36392 3L9.40001 3H11V2C11 1.44772 11.4477 1 12 1ZM15 21H19.6H19.6361H19.6361H19.6361H19.6361C20.0252 21 20.3753 21 20.6666 20.9762C20.9786 20.9508 21.3101 20.8931 21.635 20.7275C22.1054 20.4878 22.4878 20.1054 22.7275 19.635C22.8931 19.3101 22.9508 18.9786 22.9762 18.6666C23 18.3753 23 18.0252 23 17.6361V17.6V17.4V17.3639C23 16.9748 23 16.6247 22.9762 16.3334C22.9508 16.0214 22.8931 15.6899 22.7275 15.365C22.4878 14.8946 22.1054 14.5122 21.635 14.2725C21.3101 14.1069 20.9786 14.0492 20.6666 14.0238C20.3753 14 20.0252 14 19.6361 14L19.6 14H18.9345C18.9545 13.8872 18.9673 13.7757 18.9762 13.6666C19 13.3753 19 13.0252 19 12.6362V12.6362V12.6361V12.6361V12.6361V12.6V11.4V11.3639V11.3639V11.3639V11.3638V11.3638C19 10.9748 19 10.6247 18.9762 10.3334C18.9659 10.2071 18.9503 10.0777 18.9245 9.94685C19.1581 9.91148 19.3983 9.84812 19.635 9.72752C20.1054 9.48783 20.4878 9.10538 20.7275 8.63498C20.8931 8.31007 20.9508 7.9786 20.9762 7.66663C21 7.37531 21 7.02517 21 6.63607V6.6V6.4V6.36393C21 5.97483 21 5.62469 20.9762 5.33337C20.9508 5.0214 20.8931 4.68993 20.7275 4.36502C20.4878 3.89462 20.1054 3.51217 19.635 3.27248C19.3101 3.10694 18.9786 3.04925 18.6666 3.02376C18.3753 2.99996 18.0252 2.99998 17.6361 3L17.6 3H15V5H17.6C18.0365 5 18.3038 5.00078 18.5038 5.01712C18.5969 5.02473 18.6533 5.03429 18.6875 5.04235C18.7038 5.04618 18.7138 5.04939 18.7192 5.05133L18.7252 5.05368L18.727 5.0545C18.8211 5.10243 18.8976 5.17892 18.9455 5.273C18.9457 5.27341 18.9468 5.27559 18.9487 5.28079C18.9506 5.2862 18.9538 5.29622 18.9577 5.3125C18.9657 5.34673 18.9753 5.40308 18.9829 5.49623C18.9992 5.6962 19 5.96346 19 6.4V6.6C19 7.03654 18.9992 7.3038 18.9829 7.50377C18.9753 7.59692 18.9657 7.65327 18.9577 7.6875C18.9538 7.70378 18.9506 7.7138 18.9487 7.71921C18.9468 7.72441 18.9457 7.72659 18.9455 7.72699C18.8976 7.82108 18.8211 7.89757 18.727 7.9455L18.7246 7.94661L18.7192 7.94867C18.7138 7.95061 18.7038 7.95382 18.6875 7.95765C18.6533 7.96571 18.5969 7.97527 18.5038 7.98288C18.3038 7.99922 18.0365 8 17.6 8H15.7074L15.6361 8L15.6 8H15V10H15.6C16.0365 10 16.3038 10.0008 16.5038 10.0171C16.5969 10.0247 16.6533 10.0343 16.6875 10.0423C16.7038 10.0462 16.7138 10.0494 16.7192 10.0513L16.7253 10.0537L16.727 10.0545C16.8211 10.1024 16.8976 10.1789 16.9455 10.273L16.9466 10.2755L16.9487 10.2808C16.9506 10.2862 16.9538 10.2962 16.9577 10.3125C16.9657 10.3467 16.9753 10.4031 16.9829 10.4962C16.9992 10.6962 17 10.9635 17 11.4V12.6C17 13.0365 16.9992 13.3038 16.9829 13.5038C16.9753 13.5969 16.9657 13.6533 16.9577 13.6875C16.9538 13.7038 16.9506 13.7138 16.9487 13.7192C16.9468 13.7244 16.9457 13.7266 16.9455 13.727C16.8976 13.8211 16.8211 13.8976 16.727 13.9455C16.7268 13.9456 16.7261 13.946 16.7247 13.9465C16.7235 13.9471 16.7217 13.9478 16.7192 13.9487C16.7138 13.9506 16.7038 13.9538 16.6875 13.9577C16.6533 13.9657 16.5969 13.9753 16.5038 13.9829C16.3038 13.9992 16.0365 14 15.6 14H15V16H15.6L15.6361 16L15.7051 16H19.6C20.0365 16 20.3038 16.0008 20.5038 16.0171C20.5969 16.0247 20.6533 16.0343 20.6875 16.0423C20.7038 16.0462 20.7138 16.0494 20.7192 16.0513C20.7244 16.0532 20.7266 16.0543 20.727 16.0545C20.8211 16.1024 20.8976 16.1789 20.9455 16.273C20.9457 16.2734 20.9468 16.2756 20.9487 16.2808C20.9506 16.2862 20.9538 16.2962 20.9577 16.3125C20.9657 16.3467 20.9753 16.4031 20.9829 16.4962C20.9992 16.6962 21 16.9635 21 17.4V17.6C21 18.0365 20.9992 18.3038 20.9829 18.5038C20.9753 18.5969 20.9657 18.6533 20.9577 18.6875C20.9557 18.6959 20.9539 18.7026 20.9523 18.7079C20.9509 18.7129 20.9496 18.7166 20.9487 18.7192C20.9468 18.7244 20.9457 18.7266 20.9455 18.727C20.8976 18.8211 20.8211 18.8976 20.727 18.9455L20.7251 18.9464L20.7192 18.9487C20.7138 18.9506 20.7038 18.9538 20.6875 18.9577C20.6533 18.9657 20.5969 18.9753 20.5038 18.9829C20.3038 18.9992 20.0365 19 19.6 19H15V21ZM9.40001 5H11V8H9.4C8.96346 8 8.6962 7.99922 8.49624 7.98288C8.40309 7.97527 8.34673 7.96571 8.3125 7.95765C8.29622 7.95382 8.28621 7.95061 8.28079 7.94867C8.27559 7.94682 8.27341 7.94571 8.27301 7.9455C8.17893 7.89757 8.10244 7.82108 8.0545 7.72699C8.0543 7.72659 8.05319 7.72441 8.05133 7.71921C8.0494 7.7138 8.04619 7.70378 8.04235 7.6875C8.03429 7.65327 8.02473 7.59692 8.01712 7.50377C8.00078 7.3038 8.00001 7.03654 8.00001 6.6V6.4C8.00001 5.96346 8.00078 5.6962 8.01712 5.49623C8.02473 5.40308 8.03429 5.34673 8.04235 5.3125C8.04619 5.29622 8.0494 5.2862 8.05133 5.28079C8.05319 5.27559 8.0543 5.27341 8.0545 5.273C8.10244 5.17892 8.17893 5.10243 8.27301 5.0545C8.27341 5.05429 8.27559 5.05318 8.28079 5.05133C8.28621 5.04939 8.29622 5.04618 8.3125 5.04235C8.34673 5.03429 8.40309 5.02473 8.49624 5.01712C8.6962 5.00078 8.96347 5 9.40001 5ZM9.4 10H11V14H6.40001L6.36392 14H6.3639L6.29045 14H4.4C3.96346 14 3.6962 13.9992 3.49624 13.9829C3.40309 13.9753 3.34673 13.9657 3.3125 13.9577C3.29622 13.9538 3.28621 13.9506 3.28079 13.9487C3.27559 13.9468 3.27341 13.9457 3.27301 13.9455C3.17893 13.8976 3.10244 13.8211 3.0545 13.727L3.05375 13.7254L3.05133 13.7192C3.0494 13.7138 3.04618 13.7038 3.04235 13.6875C3.03429 13.6533 3.02473 13.5969 3.01712 13.5038C3.00078 13.3038 3.00001 13.0365 3.00001 12.6V11.4C3.00001 10.9635 3.00078 10.6962 3.01712 10.4962C3.02473 10.4031 3.03429 10.3467 3.04235 10.3125C3.04618 10.2962 3.0494 10.2862 3.05133 10.2808L3.05368 10.2748L3.0545 10.273C3.10244 10.1789 3.17893 10.1024 3.27301 10.0545C3.27341 10.0543 3.27559 10.0532 3.28079 10.0513C3.28621 10.0494 3.29622 10.0462 3.3125 10.0423C3.34673 10.0343 3.40309 10.0247 3.49624 10.0171C3.6962 10.0008 3.96346 10 4.40001 10H9.29494L9.36392 10L9.4 10ZM6.40001 16H11V19H6.4C5.96346 19 5.6962 18.9992 5.49624 18.9829C5.40309 18.9753 5.34673 18.9657 5.3125 18.9577C5.29622 18.9538 5.28621 18.9506 5.28079 18.9487C5.27559 18.9468 5.27341 18.9457 5.27301 18.9455C5.17893 18.8976 5.10244 18.8211 5.0545 18.727C5.0543 18.7266 5.05319 18.7244 5.05133 18.7192C5.0494 18.7138 5.04619 18.7038 5.04235 18.6875C5.03429 18.6533 5.02473 18.5969 5.01712 18.5038C5.00078 18.3038 5.00001 18.0365 5.00001 17.6V17.4C5.00001 16.9635 5.00078 16.6962 5.01712 16.4962C5.02473 16.4031 5.03429 16.3467 5.04235 16.3125C5.04619 16.2962 5.0494 16.2862 5.05133 16.2808C5.05319 16.2756 5.0543 16.2734 5.0545 16.273C5.10244 16.1789 5.17893 16.1024 5.27301 16.0545C5.27341 16.0543 5.27559 16.0532 5.28079 16.0513C5.28621 16.0494 5.29622 16.0462 5.3125 16.0423C5.34673 16.0343 5.40309 16.0247 5.49624 16.0171C5.6962 16.0008 5.96347 16 6.40001 16Z" fill="currentColor"></path>
					</svg>`
            }, {
                name: "\u0627\u06CC\u0632\u06CC\u200C\u0686\u0627\u0631\u062A",
                action: () => {
                    let p = o.data?.symbolISIN || o.data?.symbolIsin;
                    o.router.navigate([]).then( () => {
                        window.open("/easy-chart/" + p, "_blank")
                    }
                    )
                }
                ,
                icon: `<svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5682 2L18.6001 2.00001H19.4001L19.432 2C19.6844 1.99997 19.9302 1.99994 20.1383 2.01695C20.3669 2.03563 20.6366 2.07969 20.9081 2.21799C21.2844 2.40974 21.5904 2.7157 21.7821 3.09202C21.9204 3.36345 21.9645 3.63318 21.9831 3.86178C22.0002 4.06993 22.0001 4.31572 22.0001 4.56811L22.0001 4.60001V5.40001L22.0001 5.4319C22.0001 5.68429 22.0002 5.93008 21.9831 6.13824C21.9645 6.36683 21.9204 6.63656 21.7821 6.90799C21.5904 7.28431 21.2844 7.59027 20.9081 7.78202C20.6366 7.92032 20.3669 7.96438 20.1383 7.98306C19.9302 8.00007 19.6844 8.00004 19.432 8.00001L19.4001 8.00001H18.6001L18.5682 8.00001C18.4045 8.00003 18.2437 8.00005 18.094 7.99542L14.7244 14.125C14.7154 14.1413 14.706 14.1574 14.6961 14.1732L14.6792 14.2003L14.6792 14.2003L14.6791 14.2004C14.5454 14.4144 14.4152 14.6228 14.2905 14.7903C14.1535 14.9742 13.9731 15.1796 13.712 15.3365C13.35 15.554 12.9283 15.6513 12.5076 15.6144C12.2041 15.5878 11.952 15.4822 11.7483 15.3769C11.5628 15.281 11.3543 15.1507 11.1403 15.0169L11.1403 15.0169L11.1133 15L9.6537 14.0878C9.43098 13.9486 9.31125 13.8746 9.22115 13.8274L9.2118 13.8226L9.20442 13.8301C9.13509 13.9014 9.04685 14.006 8.88567 14.1994L5.23795 18.8934C5.51735 19.1601 5.83562 19.3866 6.18404 19.5641C6.55435 19.7528 7.02552 19.8723 7.79744 19.9353C8.58104 19.9993 9.58337 20.0001 11 20.0001H12C13.4166 20.0001 14.419 19.9993 15.2026 19.9353C15.9745 19.8723 16.4457 19.7528 16.816 19.5641C17.5686 19.1807 18.1805 18.5687 18.564 17.8161C18.7527 17.4458 18.8721 16.9746 18.9352 16.2027C18.9992 15.4191 19 14.4168 19 13.0001V11C19 10.4477 19.4477 10 20 10C20.5523 10 21 10.4477 21 11V13.0001V13.0439V13.044C21 14.407 21 15.491 20.9286 16.3655C20.8554 17.2611 20.7023 18.0248 20.346 18.7241C19.7708 19.853 18.8529 20.7709 17.7239 21.3462C17.0247 21.7024 16.261 21.8555 15.3654 21.9287C14.4909 22.0001 13.4069 22.0001 12.0439 22.0001H12.0438H12H11H10.9562H10.9561C9.59313 22.0001 8.50914 22.0001 7.63458 21.9287C6.73898 21.8555 5.9753 21.7024 5.27606 21.3462C4.42909 20.9146 3.70093 20.2902 3.14712 19.5285C3.13855 19.5172 3.13026 19.5057 3.12222 19.494C2.94784 19.2506 2.79115 18.9933 2.65396 18.7241C2.29768 18.0248 2.14462 17.2611 2.07144 16.3655C1.99999 15.491 1.99999 14.4069 2 13.0439L2 13.0001V12L2 11.9562C1.99999 10.5932 1.99999 9.50917 2.07144 8.63458C2.14462 7.73898 2.29768 6.9753 2.65396 6.27606C3.2292 5.14708 4.14708 4.2292 5.27606 3.65396C5.9753 3.29768 6.73898 3.14462 7.63458 3.07144C8.50917 2.99999 9.5932 2.99999 10.9562 3L11 3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H11C9.58337 5 8.58104 5.00078 7.79744 5.0648C7.02552 5.12787 6.55435 5.24729 6.18404 5.43597C5.43139 5.81947 4.81947 6.43139 4.43597 7.18404C4.24729 7.55435 4.12787 8.02552 4.0648 8.79744C4.00078 9.58104 4 10.5834 4 12V13.0001C4 14.4168 4.00078 15.4191 4.0648 16.2027C4.09041 16.5162 4.12532 16.7801 4.17039 17.0078L7.31693 12.9587C7.32391 12.9497 7.33104 12.9408 7.33832 12.9321L7.3569 12.9098C7.4991 12.7391 7.63943 12.5707 7.77049 12.4359C7.91597 12.2863 8.10003 12.1241 8.34774 12.0057C8.69533 11.8397 9.08349 11.7775 9.46555 11.8268C9.73781 11.8619 9.96331 11.9585 10.1482 12.0553C10.3148 12.1424 10.5007 12.2586 10.6891 12.3764L10.6891 12.3764L10.7137 12.3918L12.1733 13.304C12.4247 13.4612 12.5627 13.5465 12.6667 13.6002L12.6784 13.6063L12.6864 13.5957C12.754 13.5049 12.8374 13.3734 12.9853 13.1369L16.3158 7.07852C16.2806 7.02349 16.2479 6.96659 16.2181 6.90799C16.0798 6.63656 16.0357 6.36683 16.017 6.13824C16 5.93009 16.0001 5.68431 16.0001 5.43194V5.4319L16.0001 5.40001V4.60001L16.0001 4.56811V4.56807C16.0001 4.3157 16 4.06992 16.017 3.86178C16.0357 3.63318 16.0798 3.36345 16.2181 3.09202C16.4098 2.7157 16.7158 2.40974 17.0921 2.21799C17.3635 2.07969 17.6333 2.03563 17.8619 2.01695C18.07 1.99994 18.3158 1.99997 18.5682 2L18.5682 2ZM18.0115 4.01145L18.0104 4.02464C18.0009 4.14122 18.0001 4.30348 18.0001 4.60001V5.40001C18.0001 5.69653 18.0009 5.85879 18.0104 5.97537L18.0115 5.98856L18.0247 5.9897C18.1413 5.99923 18.3036 6.00001 18.6001 6.00001H19.4001C19.6966 6.00001 19.8589 5.99923 19.9755 5.9897L19.9886 5.98856L19.9898 5.97537C19.9993 5.85879 20.0001 5.69653 20.0001 5.40001V4.60001C20.0001 4.30348 19.9993 4.14122 19.9898 4.02464L19.9886 4.01145L19.9755 4.01031C19.8589 4.00078 19.6966 4.00001 19.4001 4.00001H18.6001C18.3036 4.00001 18.1413 4.00078 18.0247 4.01031L18.0115 4.01145Z" fill="currentColor"></path>
						</svg>`,
                cssClasses: [i == S.Portfolio ? "portfolio-contexmenu-chart-opener" : i == S.EasyFilter ? "easy-filter-contexmenu-chart-opener" : s ? "d-none" : "no"]
            }, {
                name: "\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u062F\u06CC\u062F\u0647\u200C\u0628\u0627\u0646",
                subMenu: this.categoriesMenu,
                icon: `<svg class="text-secondary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7436 2.1615C12.2741 1.93314 11.7258 1.93314 11.2563 2.1615C10.9949 2.28865 10.8158 2.47493 10.6964 2.61481C10.5848 2.74555 10.4654 2.90979 10.3481 3.07113L10.3481 3.07115L10.331 3.09464L9.61017 4.08584C9.25555 4.57344 9.10093 4.7854 8.94075 4.98089C7.86804 6.29013 6.44788 7.27034 4.8433 7.809C4.60371 7.88943 4.35069 7.95883 3.76902 8.11747L3.72401 8.12968C3.57399 8.1703 3.39543 8.21864 3.24585 8.28649C2.25318 8.73675 1.80386 9.89897 2.2355 10.8999C2.30054 11.0507 2.40014 11.2066 2.48382 11.3375L2.50892 11.3769L2.84095 11.8986C3.60071 13.0925 3.9292 13.6127 4.17896 14.1567C4.54785 14.9601 4.79636 15.8135 4.91647 16.6893C4.9978 17.2823 4.99993 17.8975 4.99993 19.3127L4.99993 19.3442C4.99991 19.6335 4.99989 19.9024 5.0161 20.1243C5.03296 20.355 5.07256 20.6444 5.21611 20.9275C5.52815 21.5429 6.13538 21.954 6.82267 22.0152C7.13887 22.0433 7.42223 21.9726 7.64274 21.9026C7.85475 21.8353 8.10442 21.7354 8.37296 21.6279L8.4023 21.6162L10.3716 20.8285C10.8843 20.6234 11.1338 20.0414 10.9286 19.5286C10.7235 19.0158 10.1416 18.7664 9.62878 18.9715L7.65951 19.7592C7.35152 19.8824 7.17092 19.954 7.03728 19.9964L7.01284 20.004L7.01078 19.9785C7.00056 19.8386 6.99993 19.6444 6.99993 19.3127L6.99993 19.2324C6.99997 17.9197 6.99999 17.1619 6.89793 16.4176C6.75112 15.3471 6.44739 14.3041 5.99652 13.3221C5.68306 12.6394 5.27615 12 4.5714 10.8927L4.52828 10.8249L4.19624 10.3031C4.13771 10.2111 4.10408 10.1581 4.08043 10.1188L4.07452 10.1089L4.08557 10.1055C4.12954 10.0923 4.19008 10.0757 4.29525 10.047L4.32845 10.0379C4.86782 9.89085 5.17905 9.80597 5.47979 9.70501C7.44094 9.04666 9.1767 7.84862 10.4878 6.24844C10.6889 6.00304 10.8786 5.74214 11.2074 5.28997L11.2276 5.26218L11.9485 4.27098L11.9999 4.20034L12.0513 4.27098L12.6493 5.09322L12.6766 5.13071C13.1201 5.74056 13.376 6.09246 13.6538 6.41797C14.8994 7.87735 16.505 8.98556 18.3113 9.63258C18.7142 9.77689 19.1339 9.89137 19.8614 10.0898L19.9062 10.102C20.0267 10.1348 20.0938 10.1533 20.1424 10.1683L20.1521 10.1713L20.1487 10.1808C20.1313 10.2286 20.1056 10.2933 20.0592 10.4093L19.9715 10.6286C19.7664 11.1414 20.0158 11.7234 20.5286 11.9285C21.0414 12.1336 21.6233 11.8842 21.8284 11.3714L21.9162 11.1521L21.9356 11.1037L21.9356 11.1036C22.0024 10.9379 22.0832 10.7371 22.1202 10.5411C22.2867 9.66003 21.8464 8.77587 21.043 8.37777C20.8643 8.28922 20.6552 8.23271 20.4828 8.1861L20.4324 8.17244C19.6479 7.95847 19.3067 7.8647 18.9857 7.74973C17.5079 7.22035 16.1942 6.31363 15.1751 5.1196C14.9538 4.86028 14.7451 4.57453 14.2668 3.91687L13.6688 3.09464L13.6517 3.07117C13.5344 2.90982 13.415 2.74556 13.3034 2.61481C13.184 2.47493 13.0049 2.28865 12.7436 2.1615ZM12.2417 3.88682L12.2395 3.88899C12.2409 3.88747 12.2417 3.88679 12.2417 3.88682ZM11.7604 3.88899L11.7582 3.88682C11.7582 3.88679 11.7589 3.88747 11.7604 3.88899ZM18.9999 14.0001C19 13.4478 18.5523 13.0001 18 13C17.4477 13 17 13.4477 16.9999 14L16.9997 17.0001L13.9999 17C13.4477 17 12.9999 17.4477 12.9999 18C12.9999 18.5523 13.4476 19 13.9999 19L16.9997 19.0001L16.9999 22.0001C17 22.5524 17.4477 23.0001 18 23C18.5523 23 19 22.5523 18.9999 22L18.9997 19.0001L21.9999 19C22.5522 19 22.9999 18.5523 22.9999 18C22.9999 17.4477 22.5522 17 21.9999 17L18.9997 17.0001L18.9999 14.0001Z" fill="currentColor"></path>
					</svg>`
            }, {
                name: "\u06CC\u0627\u062F\u062F\u0627\u0634\u062A",
                action: () => {
                    o.layoutService.openNoteManagement(o.data?.symbolISIN || o.data?.symbolIsin)
                }
                ,
                icon: `<svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3416 7.31671C15.3897 7.22057 15.453 7.13282 15.529 7.05682L20.5449 2.04086C21.0735 1.51226 21.9305 1.51226 22.4591 2.04086C22.9877 2.56945 22.9877 3.42647 22.4591 3.95507L17.4432 8.97103C17.3672 9.04703 17.2794 9.11028 17.1833 9.15835L14.3587 10.5707C14.0971 10.7015 13.9663 10.7668 13.8908 10.7447C13.8256 10.7255 13.7745 10.6744 13.7553 10.6092C13.7332 10.5337 13.7985 10.4029 13.9293 10.1413L15.3416 7.31671ZM8 14.0001C7.44772 14.0001 7 13.5523 7 13.0001C7 12.4478 7.44772 12.0001 8 12.0001H11C11.5523 12.0001 12 12.4478 12 13.0001C12 13.5523 11.5523 14.0001 11 14.0001H8ZM8 18C7.44772 18 7 17.5523 7 17C7 16.4477 7.44772 16 8 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8ZM8.8 3.00011L8.7587 3.00011H8.7587C7.95373 3.0001 7.28937 3.00009 6.74818 3.04431C6.18608 3.09023 5.66937 3.1888 5.18404 3.43609C4.43139 3.81958 3.81947 4.4315 3.43598 5.18415C3.18868 5.66949 3.09012 6.18619 3.04419 6.74829C2.99998 7.28948 2.99999 7.95383 3 8.7588V8.75882V8.80011V16.2002V16.2415V16.2416C2.99999 17.0465 2.99998 17.7109 3.04419 18.2521C3.09012 18.8142 3.18868 19.3309 3.43598 19.8162C3.81947 20.5688 4.43139 21.1808 5.18404 21.5643C5.66937 21.8116 6.18608 21.9101 6.74818 21.956C7.28937 22.0003 7.95372 22.0003 8.75868 22.0002H8.8H15.2H15.2413C16.0463 22.0003 16.7106 22.0003 17.2518 21.956C17.8139 21.9101 18.3306 21.8116 18.816 21.5643C19.5686 21.1808 20.1805 20.5688 20.564 19.8162C20.8113 19.3309 20.9099 18.8142 20.9558 18.2521C21 17.7109 21 17.0465 21 16.2416V16.2002V11C21 10.4477 20.5523 9.99999 20 9.99999C19.4477 9.99999 19 10.4477 19 11V16.2002C19 17.0568 18.9992 17.6391 18.9624 18.0892C18.9266 18.5276 18.8617 18.7518 18.782 18.9082C18.5903 19.2845 18.2843 19.5905 17.908 19.7823C17.7516 19.8619 17.5274 19.9269 17.089 19.9627C16.6389 19.9995 16.0566 20.0002 15.2 20.0002H8.8C7.94342 20.0002 7.36113 19.9995 6.91104 19.9627C6.47262 19.9269 6.24842 19.8619 6.09202 19.7823C5.7157 19.5905 5.40974 19.2845 5.21799 18.9082C5.1383 18.7518 5.07337 18.5276 5.03755 18.0892C5.00078 17.6391 5 17.0568 5 16.2002V8.80011C5 7.94353 5.00078 7.36124 5.03755 6.91115C5.07337 6.47274 5.1383 6.24853 5.21799 6.09213C5.40974 5.71581 5.7157 5.40985 6.09202 5.2181C6.24842 5.13841 6.47262 5.07349 6.91104 5.03767C7.36113 5.00089 7.94342 5.00011 8.8 5.00011H14C14.5523 5.00011 15 4.5524 15 4.00011C15 3.44783 14.5523 3.00011 14 3.00011H8.8Z" fill="currentColor"></path>
			</svg>`
            }, {
                name: "\u0647\u0634\u062F\u0627\u0631 \u062F\u0631\u0648\u0646 \u0628\u0631\u0646\u0627\u0645\u0647\u200C\u0627\u06CC",
                action: () => {
                    o.layoutService.openConditionalTools(c)
                }
                ,
                icon: `<svg class="text-secondary ${this.conditionalNotificationService.getStockConditionFigureClass(c)}" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0248 1.5C12.5771 1.5 13.0248 1.94772 13.0248 2.5C13.0248 3.92383 11.8829 4.87531 10.7867 5.15449C8.76333 5.66981 7.21844 7.421 7.03778 9.58869C7.0357 9.61359 7.03269 9.63839 7.02876 9.66306L6.68522 11.8182C6.54413 13.453 6.09482 15.0464 5.36092 16.5142L5.118 17H11.5041L11.568 17H11.5681L11.6 17H12H12.4L12.4319 17H12.4319L12.4959 17H18.8998L18.6364 16.4598C18.4599 16.0979 18.3007 15.7286 18.1589 15.3532C17.9639 14.8365 18.2247 14.2595 18.7414 14.0644C19.2581 13.8694 19.835 14.1301 20.0301 14.6468C20.15 14.9646 20.2848 15.277 20.4341 15.5833L20.8377 16.4111L20.8515 16.4393C20.9323 16.605 21.0201 16.7848 21.0802 16.9434C21.1435 17.1102 21.2342 17.394 21.1822 17.7296C21.1194 18.1353 20.893 18.4975 20.5559 18.7317C20.277 18.9256 19.9822 18.9684 19.8046 18.9847C19.6357 19.0001 19.4356 19.0001 19.2513 19H19.2513L19.2198 19H14.9918C15 19.1752 15 19.3696 15 19.568V19.5681V19.5681L15 19.6V20.4L15 20.4319V20.4319C15 20.6843 15 20.9301 14.983 21.1382C14.9643 21.3668 14.9203 21.6366 14.782 21.908C14.5902 22.2843 14.2843 22.5903 13.9079 22.782C13.6365 22.9203 13.3668 22.9644 13.1382 22.9831C12.9301 23.0001 12.6843 23 12.4319 23H12.4319H12.4319L12.4 23H11.6L11.5681 23H11.568H11.568C11.3156 23 11.0699 23.0001 10.8617 22.9831C10.6331 22.9644 10.3634 22.9203 10.092 22.782C9.71566 22.5903 9.4097 22.2843 9.21796 21.908C9.07966 21.6366 9.03559 21.3668 9.01691 21.1382C8.99991 20.9301 8.99994 20.6843 8.99997 20.4319V20.4319L8.99997 20.4V19.6L8.99997 19.5681V19.5681C8.99994 19.3696 8.99992 19.1752 9.00818 19H4.7944L4.76276 19H4.7627C4.57651 19.0001 4.37489 19.0001 4.20493 18.9846C4.02672 18.9682 3.72952 18.9252 3.44927 18.7292C3.11117 18.4927 2.8854 18.1274 2.82509 17.7192C2.77511 17.3809 2.86951 17.0959 2.93463 16.9292C2.99673 16.7702 3.08696 16.5898 3.17029 16.4233L3.18443 16.395L3.57206 15.6197C4.19788 14.3681 4.57913 13.0085 4.69536 11.614C4.69743 11.5891 4.70044 11.5643 4.70437 11.5396L5.04802 9.38383C5.3162 6.36525 7.4737 3.93442 10.2931 3.21636C10.8026 3.08661 11.0248 2.73306 11.0248 2.5C11.0248 1.94772 11.4725 1.5 12.0248 1.5ZM12 19H12.4C12.6965 19 12.8587 19.0008 12.9753 19.0103L12.9885 19.0114L12.9897 19.0246C12.9992 19.1412 13 19.3035 13 19.6V20.4C13 20.6965 12.9992 20.8588 12.9897 20.9754L12.9885 20.9886L12.9753 20.9897C12.8587 20.9992 12.6965 21 12.4 21H11.6C11.3034 21 11.1412 20.9992 11.0246 20.9897L11.0114 20.9886L11.0103 20.9754C11.0007 20.8588 11 20.6965 11 20.4V19.6C11 19.3035 11.0007 19.1412 11.0103 19.0246L11.0114 19.0114L11.0246 19.0103C11.1412 19.0008 11.3034 19 11.6 19H12ZM19 3.00007C19 2.44778 18.5523 2.00004 18 2C17.4478 1.99996 17 2.44765 17 2.99993L16.9998 6.00005L14 6C13.4477 5.99999 13 6.4477 13 6.99998C13 7.55227 13.4477 7.99999 14 8L16.9998 8.00005L17 11.0001C17 11.5524 17.4478 12 18 12C18.5523 12 19 11.5522 19 10.9999L18.9998 8.00005L22 8C22.5523 7.99999 23 7.55227 23 6.99998C23 6.4477 22.5522 5.99999 22 6L18.9998 6.00005L19 3.00007Z" fill="currentColor"></path>
						</svg>`
            }, "separator", {
                name: "\u06A9\u062F\u0627\u0644",
                action: () => {
                    let p = y1(o.data.symbolFa || o.data.symbolName);
                    f1(p)
                }
                ,
                icon: `<svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1144 4.00668C12.663 4.06999 13.0565 4.56607 12.9932 5.11472L11.4932 18.1147C11.4299 18.6634 10.9338 19.0568 10.3851 18.9935C9.83649 18.9302 9.44304 18.4341 9.50635 17.8855L11.0063 4.88547C11.0697 4.33682 11.5657 3.94338 12.1144 4.00668ZM8.62696 4.0083C9.17478 4.07842 9.56203 4.57935 9.49191 5.12717L7.85319 17.9296L7.84354 18.0054C7.79911 18.3545 7.76065 18.6568 7.67306 18.9266C7.33445 19.9695 6.4538 20.7447 5.37631 20.9481C5.0976 21.0007 4.79284 21.0005 4.44086 21.0002L4.36451 21.0002L4.26579 21.0003C3.82538 21.0007 3.44855 21.001 3.12203 20.9281C1.84976 20.6439 0.906621 19.5706 0.788362 18.2723C0.758012 17.9392 0.806788 17.5655 0.863793 17.1288L0.876541 17.0309L1.67496 10.8716C1.74596 10.3239 2.24752 9.9375 2.79522 10.0085C3.34292 10.0795 3.72937 10.5811 3.65837 11.1288L2.85995 17.288C2.78336 17.8788 2.77268 18.0093 2.78012 18.0909C2.81954 18.5237 3.13391 18.8814 3.55801 18.9762C3.63802 18.994 3.76877 19.0002 4.36451 19.0002C4.83641 19.0002 4.93606 18.9959 5.00523 18.9828C5.36439 18.915 5.65794 18.6567 5.77081 18.309C5.79254 18.2421 5.80946 18.1438 5.86938 17.6757L7.50809 4.87324C7.57821 4.32542 8.07915 3.93817 8.62696 4.0083ZM19.0876 4.00009C17.2146 4.00009 16.1983 6.19137 17.4082 7.62118L20.1763 10.8926C20.686 11.4949 20.9379 12.2738 20.8773 13.0605L20.6453 16.0768C20.6052 16.5978 20.1708 17.0001 19.6483 17.0001H18.2932L18.7272 13.3547C18.9396 11.5699 17.5456 10.0001 15.7482 10.0001H14.8337C14.2815 10.0001 13.8337 10.4478 13.8337 11.0001C13.8337 11.5524 14.2815 12.0001 14.8337 12.0001H15.7482C16.3473 12.0001 16.812 12.5234 16.7412 13.1183L16.2791 17.0001H13.8337C13.2815 17.0001 12.8337 17.4478 12.8337 18.0001C12.8337 18.5524 13.2815 19.0001 13.8337 19.0001H17.1671H19.6483C21.2159 19.0001 22.5192 17.7932 22.6394 16.2302L22.8714 13.2139C22.9723 11.9027 22.5525 10.6046 21.7031 9.6007L18.9349 6.32928C18.8249 6.1993 18.9173 6.00009 19.0876 6.00009H22.0003C22.5526 6.00009 23.0003 5.55238 23.0003 5.00009C23.0003 4.44781 22.5526 4.00009 22.0003 4.00009H19.0876Z" fill="currentColor"></path>
				</svg>`,
                cssClasses: n ? ["d-none"] : void 0
            }, {
                name: "TSE",
                action: () => W(this, null, function*() {
                    let p = yield this.symbolService.getSymbol(o.data?.symbolISIN?.toUpperCase() || o.data?.symbolIsin?.toUpperCase());
                    p.insCode && window.open(`http://www.tsetmc.com/Loader.aspx?ParTree=151311&i=${p.insCode}`, "_blank")
                }),
                icon: `<svg class="text-secondary" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2L11.9299 2H11.9298C11.0677 1.99997 10.5584 1.99996 10.1179 2.04334C5.84486 2.4642 2.4642 5.84486 2.04334 10.1179C1.99996 10.5584 1.99997 11.0678 2 11.9299V11.9299L2 12.0001L2 12.0702V12.0702C1.99997 12.9324 1.99996 13.4418 2.04334 13.8823C2.4642 18.1553 5.84486 21.5359 10.1179 21.9568C10.5584 22.0002 11.0678 22.0002 11.9299 22.0001H12H12.0701C12.9322 22.0002 13.4416 22.0002 13.8822 21.9568C18.1552 21.5359 21.5358 18.1553 21.9567 13.8823C22.0001 13.4418 22 12.9323 22 12.0702V12.0001V11.93C22 11.0678 22.0001 10.5584 21.9567 10.1179C21.5358 5.84486 18.1552 2.4642 13.8822 2.04334C13.4416 1.99996 12.9323 1.99997 12.0702 2H12.0701L12 2ZM10.3139 4.03371C10.6438 4.00122 11.0475 4 12 4C12.9525 4 13.3562 4.00122 13.6861 4.03371C17.0096 4.36104 19.639 6.99045 19.9663 10.3139C19.9988 10.6438 20 11.0476 20 12.0001C20 12.9526 19.9988 13.3563 19.9663 13.6862C19.639 17.0097 17.0096 19.6391 13.6861 19.9664C13.3562 19.9989 12.9525 20.0001 12 20.0001C11.0475 20.0001 10.6438 19.9989 10.3139 19.9664C6.99045 19.6391 4.36104 17.0097 4.03371 13.6862C4.00122 13.3563 4 12.9526 4 12.0001C4 11.0476 4.00122 10.6438 4.03371 10.3139C4.36104 6.99045 6.99045 4.36104 10.3139 4.03371ZM12.9735 5.77126C12.8673 5.3194 12.4642 5 12 5C11.5359 5 11.1327 5.3194 11.0265 5.77126C10.4161 8.369 8.369 10.4161 5.77126 11.0265C5.3194 11.1327 5 11.5359 5 12C5 12.4642 5.3194 12.8673 5.77126 12.9735C8.369 13.5839 10.4161 15.631 11.0265 18.2287C11.1327 18.6806 11.5359 19 12 19C12.4642 19 12.8673 18.6806 12.9735 18.2287C13.5839 15.631 15.631 13.5839 18.2287 12.9735C18.6806 12.8673 19 12.4642 19 12C19 11.5359 18.6806 11.1327 18.2287 11.0265C15.631 10.4161 13.5839 8.369 12.9735 5.77126ZM12 15.3181C11.2042 13.9426 10.0575 12.7958 8.68192 12C10.0575 11.2042 11.2042 10.0575 12 8.68192C12.7958 10.0575 13.9426 11.2042 15.3181 12C13.9426 12.7958 12.7958 13.9426 12 15.3181Z" fill="currentColor"></path>
						</svg>`
            }];
            return i == S.MarketWatch && h.push("separator", {
                name: "\u062D\u0630\u0641",
                action: () => {
                    o.marketWatchService.deleteStockFromWatch(o.data?.symbolISIN || o.data?.symbolIsin, o.data.currentCategoryId).pipe(m( () => o.mwsService.checkForWatchChange(!0))).subscribe()
                }
                ,
                icon: `<svg class="text-secondary" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1359 20C15.6578 20 15.9923 19.9993 16.2482 19.9794C16.4917 19.9605 16.5853 19.9284 16.6341 19.9056C16.8116 19.8224 16.9608 19.6889 17.0631 19.5216C17.0912 19.4756 17.1334 19.3861 17.1791 19.1462C17.2271 18.8941 17.2648 18.5617 17.3224 18.0429L18 11.9446L18 9.5C18 8.94771 18.4477 8.5 19 8.5C19.5523 8.5 20 8.94771 20 9.5V12C20 12.0369 19.998 12.0738 19.9939 12.1104L19.3102 18.2638L19.3062 18.2995C19.2537 18.7723 19.2081 19.1828 19.1438 19.5205C19.0755 19.8788 18.9736 20.2308 18.7695 20.5647C18.4627 21.0666 18.0151 21.4672 17.4824 21.7167C17.128 21.8827 16.7669 21.9451 16.4032 21.9734C16.0605 22 15.6476 22 15.1719 22H15.1718L15.1359 22H11.2518C11.2254 22 11.1987 22 11.1719 22H11.1718H11.1359H9.5C9.49934 22 9.49868 22 9.49803 22H8.86414L8.82817 22H8.82806C8.3524 22 7.93949 22 7.5968 21.9734C7.2331 21.9451 6.87198 21.8827 6.51758 21.7167C5.98488 21.4672 5.53729 21.0666 5.23047 20.5647C5.02636 20.2308 4.9245 19.8788 4.85623 19.5205C4.7919 19.1828 4.74631 18.7724 4.6938 18.2996L4.68982 18.2638L4.00612 12.1104C4.00204 12.0738 4 12.0369 4 12L4 9.5C4 8.94772 4.44771 8.5 5 8.5C5.55228 8.5 6 8.94772 6 9.5V11.9446L6.67759 18.0429C6.73523 18.5617 6.77287 18.8941 6.8209 19.1462C6.8666 19.3861 6.9088 19.4756 6.93688 19.5216C7.03915 19.6889 7.18835 19.8224 7.36592 19.9056C7.41467 19.9284 7.50833 19.9605 7.75183 19.9794C8.00771 19.9993 8.34219 20 8.86414 20L9.5 20H11.1359C11.15 20 11.164 20 11.1778 20C11.6759 19.9999 11.9992 19.9988 12.2482 19.9794C12.4917 19.9605 12.5853 19.9284 12.6341 19.9056C12.8117 19.8224 12.9608 19.6889 13.0631 19.5216C13.0912 19.4756 13.1334 19.3861 13.1791 19.1462C13.2271 18.8941 13.2648 18.5617 13.3224 18.0429L14 11.9446L14 9.5C14 8.94771 14.4477 8.5 15 8.5C15.5523 8.5 16 8.94771 16 9.5L16 12C16 12.0369 15.998 12.0738 15.9939 12.1104L15.3102 18.2638L15.3062 18.2996C15.2537 18.7724 15.2081 19.1828 15.1438 19.5205C15.113 19.6819 15.0754 19.8422 15.0247 20H15.1359ZM11.6 7.00001L11.5681 7.00001L11.5062 7.00001L4 7.00001C3.44772 7.00001 3 6.55229 3 6.00001C3 5.44772 3.44772 5.00001 4 5.00001L9.00821 5.00001C8.99995 4.82478 8.99997 4.63038 9 4.4319L9 4.40001V3.60001L9 3.56811C8.99997 3.31573 8.99994 3.06994 9.01695 2.86178C9.03562 2.63318 9.07969 2.36345 9.21799 2.09202C9.40974 1.7157 9.7157 1.40974 10.092 1.21799C10.3634 1.0797 10.6332 1.03563 10.8618 1.01695C11.0699 0.999946 11.3156 0.999974 11.568 1L11.5681 1L11.6 1.00001L12.4 1.00001L12.4319 1L12.432 1C12.6844 0.999974 12.9301 0.999946 13.1382 1.01695C13.3668 1.03563 13.6366 1.0797 13.908 1.21799C14.2843 1.40974 14.5903 1.7157 14.782 2.09203C14.9203 2.36345 14.9644 2.63318 14.9831 2.86178C15.0001 3.06994 15 3.31574 15 3.56813L15 3.60001V4.40001L15 4.43189V4.43192C15 4.63039 15.0001 4.82479 14.9918 5.00001L20 5.00001C20.5523 5.00001 21 5.44772 21 6.00001C21 6.55229 20.5523 7.00001 20 7.00001L12.4939 7.00001L12.4319 7.00001L12.4 7.00001H11.6ZM11.0103 4.97537L11.0115 4.98856L11.0246 4.9897C11.1412 4.99923 11.3035 5.00001 11.6 5.00001H12.4C12.6965 5.00001 12.8588 4.99923 12.9754 4.9897L12.9885 4.98856L12.9897 4.97537C12.9992 4.85879 13 4.69654 13 4.40001V3.60001C13 3.30348 12.9992 3.14123 12.9897 3.02464L12.9886 3.01146L12.9754 3.01031C12.8588 3.00078 12.6965 3.00001 12.4 3.00001L11.6 3.00001C11.3035 3.00001 11.1412 3.00078 11.0246 3.01031L11.0114 3.01146L11.0103 3.02464C11.0008 3.14123 11 3.30348 11 3.60001L11 4.40001C11 4.69653 11.0008 4.85879 11.0103 4.97537Z" fill="currentColor"/>
				</svg>`
            }),
            h
        }
        getContextMenuItemsForOrdersGrid(e, t) {
            if (!e?.node?.data)
                return;
            let i = e.node.data
              , o = i?.symbolIsin?.toUpperCase()
              , s = t.orderStore.getOrder(i?.id)
              , n = [];
            return s && (s.IsEditValid && n.push({
                name: "\u0648\u06CC\u0631\u0627\u06CC\u0634",
                action: function() {
                    t.popupOrderService.openPopup({
                        isin: o
                    }, null, s)
                },
                icon: '<svg-icon class="px-1 text-success " width="20" height="20" [iconName]="icons.Edit"></svg-icon>',
                cssClasses: ["empty", "bold"]
            }),
            s.IsDeleteValid && n.push({
                name: "\u062D\u0630\u0641",
                action: function() {
                    s.orderModelType === x.draft ? t.draftFacade.delete(s.id) : s.orderModelType === x.offline ? t.offlineFacade.delete(s.id) : t.omsFacade.delete(s.id)
                },
                icon: '<svg-icon width="20" height="20" [iconName]="icons.Delete" class="px-1 text-danger"></svg-icon>'
            }),
            n.length > 0 && n.push("separator"),
            n.push({
                name: "\u0639\u0645\u0642 \u0628\u0627\u0632\u0627\u0631",
                action: function() {
                    t.popupOrderService.openPopup({
                        isin: i.symbolIsin,
                        name: i.symbolName
                    })
                },
                icon: '<svg-icon class="text-secondary px-1" width="20" height="20" [iconName]="icons.ChartBar"></svg-icon>'
            })),
            n
        }
        rowDragEvent(e, t, i) {
            let o = JSON.parse(this.storageService.getItem(i)) ?? []
              , s = o.findIndex(h => h.id == t)
              , n = e.overIndex < 0 ? o[s].isins.length + e.overIndex : e.overIndex
              , c = e.node.id;
            o[s].isins.splice(n, 0, o[s].isins.splice(o[s].isins.findIndex(h => h == c), 1)[0]),
            this.storageService.setItem(i, JSON.stringify(o))
        }
        reArrangeCustomSortState(e, t, i, o, s, n=!0) {
            let c = JSON.parse(this.storageService.getItem(o)) ?? []
              , h = {
                id: i,
                isins: s
            }
              , p = c.find(k => k.id == i);
            p ? this.addOrRemoveCategoryIsins(p, h) : c.push(h),
            this.storageService.setItem(o, JSON.stringify(c)),
            n && setTimeout( () => {
                this.useCustomSort(e, t, i, o)
            }
            , 100)
        }
        addOrRemoveCategoryIsins(e, t) {
            e.isins.push(...t.isins.filter(i => !e.isins.includes(i))),
            e.isins = e.isins.filter(i => t.isins.includes(i))
        }
        useCustomSort(e, t, i, o) {
            if (e?.destroyCalled)
                return;
            let s = t.getColumnState();
            if (s && s.every(n => n.sort == null)) {
                let n = JSON.parse(this.storageService.getItem(o)) || [];
                if (n && n.length > 0) {
                    t.applyColumnState({
                        defaultState: {
                            sort: null
                        }
                    });
                    let c = []
                      , h = n.find(p => p.id == i).isins;
                    for (let p of h) {
                        let k = e.getRowNode(p);
                        k?.data && c.push(k.data)
                    }
                    e.setRowData([]),
                    e.applyTransaction({
                        add: c
                    })
                }
            }
        }
    }
    ;
    a.\u0275fac = function(t) {
        return new (t || a)(d(S1),d(N1),d(D1),d(P1),d(x1),d(z1))
    }
    ,
    a.\u0275prov = b({
        token: a,
        factory: a.\u0275fac,
        providedIn: "root"
    });
    let r = a;
    return r
}
)();
export {R as a, A1 as b, C0 as c, S0 as d, k0 as e};
//# sourceMappingURL=chunk-Y3TWWRWU.js.map
