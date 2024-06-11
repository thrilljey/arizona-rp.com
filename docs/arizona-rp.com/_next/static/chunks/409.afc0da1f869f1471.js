(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[409], {
    6406: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return J
            }
        });
        var i = n(5893);
        n(8891);
        var a = n(7294)
          , o = n(5090)
          , r = n(4184)
          , s = n.n(r)
          , c = n(5675)
          , p = n.n(c)
          , l = n(2165)
          , u = n(7741)
          , _ = n.n(u);
        let d = e=>{
            let {map: t, data: n} = e
              , [o,r] = (0,
            a.useState)(!1)
              , [c,u] = (0,
            a.useState)([])
              , d = e=>{
                e.stopPropagation(),
                r(!o)
            }
              , g = e=>{
                if (t && t) {
                    let n = t.getAllLayers()[e];
                    if (n) {
                        let t = n.getProperties().visible;
                        n.setVisible(!t),
                        c.includes(e) ? u(c.filter(t=>t !== e)) : u([...c, e])
                    }
                }
            }
            ;
            return (0,
            a.useEffect)(()=>{
                if (t) {
                    let e = ()=>{
                        r(!1)
                    }
                    ;
                    return t.on("movestart", e),
                    window.addEventListener("click", e),
                    ()=>{
                        window.removeEventListener("click", e)
                    }
                }
            }
            , [t]),
            (0,
            i.jsxs)("button", {
                className: _().button,
                onClick: e=>{
                    d(e)
                }
                ,
                children: [(0,
                i.jsx)("div", {
                    className: s()(_().button_image, {
                        [_().button_image_opened]: o
                    }),
                    children: (0,
                    i.jsx)(p(), {
                        src: l.Z,
                        alt: "arrowDown",
                        fill: !0
                    })
                }), (0,
                i.jsx)("ul", {
                    className: s()(_().groups, {
                        [_().visible]: o
                    }),
                    onClick: e=>{
                        e.stopPropagation()
                    }
                    ,
                    children: n.filter(e=>!!e.data.length).map((e,t)=>(0,
                    i.jsxs)("li", {
                        className: _().group,
                        onClick: ()=>{
                            g(t + 1)
                        }
                        ,
                        children: [(0,
                        i.jsx)("div", {
                            className: s()(_().group_image, {
                                [_().group_image_checked]: !c.includes(t + 1)
                            })
                        }), (0,
                        i.jsx)("span", {
                            children: e.title
                        })]
                    }, e.title))
                })]
            })
        }
        ;
        var g = n(381)
          , m = n.n(g)
          , f = n(2241)
          , v = n(1090)
          , h = n(1624)
          , w = n(3223)
          , y = n(188)
          , b = n(1162)
          , x = n(2884)
          , E = n(6835)
          , M = n(8087)
          , S = n(1826)
          , C = n(1332)
          , j = n(7539)
          , k = n(3388)
          , T = n(4756)
          , Z = n(6258);
        let N = [0, 0]
          , P = new E.kv({
            code: "pixels",
            units: "pixels",
            extent: [0, -262, 262, 0]
        })
          , B = (e,t)=>(0,
        E.bU)([(e + 3e3) * .032, (t - 3e3) * .032], P)
          , L = ()=>new b.Z({
            zIndex: 0,
            source: new S.Z({
                url: "https://pc.rod-ins.com/resource/web/arizona/map/{z}/{x}/{y}.png",
                wrapX: !1,
                projection: P,
                tileSize: 262
            }),
            extent: [0, -262, 262, 0]
        })
          , O = ()=>new f.ZP({
            center: N,
            zoom: 2,
            minZoom: 2,
            maxZoom: 5,
            projection: P,
            extent: [0, -192, 192, 0],
            smoothExtentConstraint: !1
        })
          , R = (e,t)=>{
            let n = t === T.g2.HOUSES ? "house" : "business";
            return "/map/icon/".concat(n, "_").concat(e.hasAuction && X(e, !0) ? 2 : "The State" === e.owner ? 1 : 0, ".png")
        }
          , A = (e,t)=>{
            let n = window.innerWidth < 2048 ? 16 : window.innerWidth / 2048 * 16
              , i = {
                image: new C.Z({
                    crossOrigin: "anonymous",
                    src: R(e, t),
                    width: n,
                    height: n
                })
            }
              , a = new j.ZP(i);
            return a
        }
          , z = (e,t)=>{
            t.filter(e=>!!e.data.length).forEach(t=>{
                let n = new M.Z({
                    features: t.data.map(e=>{
                        let n = new v.Z({
                            geometry: new y.Z(B(e.lx, e.ly)),
                            id: e.id,
                            type: t.type,
                            name: e.name,
                            owner: "The State" === e.owner ? null : e.owner,
                            icon: R(e, t.type),
                            hasAuction: e.hasAuction,
                            auMinBet: e.auMinBet,
                            auTimeEnd: e.auTimeEnd,
                            auStartPrice: e.auStartPrice
                        });
                        return n.setStyle(A(e, t.type)),
                        n
                    }
                    )
                })
                  , i = new x.Z;
                i.setSource(n),
                e.addLayer(i)
            }
            )
        }
          , X = (e,t)=>{
            let n = m()(new Date);
            if (t) {
                let t = m()(1e3 * e.auTimeEnd)
                  , i = t.diff(n);
                return i > 0
            }
            let i = m()(1e3 * e.get("auTimeEnd"))
              , a = i.diff(n)
              , o = i.diff(n, "days")
              , r = i.diff(n, "hours") - 24 * o
              , s = i.diff(n, "minutes") - (1440 * o + 60 * r)
              , c = "".concat(o ? "".concat(o, "д. ") : "").concat(r ? "".concat(r, "ч. ") : "").concat(s ? "".concat(s, "м. ") : "");
            return {
                auTimeOut: c,
                auTimeOutSeconds: a
            }
        }
          , F = ()=>{
            let e;
            let t = new h.Z({
                target: "map",
                controls: [],
                layers: [L()],
                view: O()
            })
              , n = document.getElementById("popup")
              , i = document.getElementById("popupContent")
              , a = new w.Z({
                element: n,
                positioning: "bottom-center",
                stopEvent: !1
            });
            function o() {
                i && (i.style.display = "none",
                a.setPosition(void 0))
            }
            return t.addOverlay(a),
            t.on("pointermove", function(r) {
                let s = t.forEachFeatureAtPixel(r.pixel, function(e) {
                    return e
                });
                if (!i || !n)
                    return;
                if (!s) {
                    t.getTargetElement().style.cursor = "grab",
                    o();
                    return
                }
                let c = s.getGeometry().getCoordinates();
                if (!a.getPosition() || JSON.stringify(c) !== JSON.stringify(e)) {
                    e = c,
                    a.setPosition(c);
                    let o = X(s);
                    i.style.transform = "translateX(0)",
                    n.style.transform = "translateX(0)",
                    i.classList.remove(_().popup_content_nobefore),
                    i.classList.remove(_().popup_content_nomargin);
                    let r = s.get("type") === T.g2.HOUSES ? "№ ".concat(s.get("id") - k.CJ) : s.get("name")
                      , p = s.get("owner")
                      , l = s.get("hasAuction") && o.auTimeOutSeconds > 0
                      , u = l ? "<ul>\n        <li>Стартовая цена: ".concat((0,
                    Z.be)(s.get("auStartPrice")), " $</li>\n        <li>Минимальная ставка: ").concat((0,
                    Z.be)(s.get("auMinBet")), " $</li>\n        <li>Завершается через: ").concat(o.auTimeOut, "</li>\n        </ul>") : "";
                    i.innerHTML = "<div>".concat('<div style="margin-bottom: 0.25rem">'.concat(r, "</div>")).concat(l ? "<span>Владелец: На аукционе</span>" : p ? "<span>Владелец: ".concat(p, "</span>") : "<span>Владелец: нет</span>").concat(u, "</div>"),
                    i.style.display = "block";
                    let d = i.getBoundingClientRect().left - t.getTargetElement().getBoundingClientRect().left
                      , g = i.getBoundingClientRect().top - t.getTargetElement().getBoundingClientRect().top
                      , m = i.getBoundingClientRect().right - t.getTargetElement().getBoundingClientRect().right;
                    if (d < 0 && (i.style.transform = "translateX(".concat(-d, "px)"),
                    i.classList.add(_().popup_content_nobefore)),
                    m > 0 && (i.style.transform = "translateX(".concat(-m, "px)"),
                    i.classList.add(_().popup_content_nobefore)),
                    g < 0) {
                        let e = n.clientHeight
                          , t = i.childNodes;
                        i.classList.add(_().popup_content_nomargin),
                        i.style.transform = "translateY(".concat(-e, "px)"),
                        n.style.transform = "rotate(180deg)",
                        t && (t[0].style.transform = "rotate(180deg)")
                    }
                    t.getTargetElement().style.cursor = "pointer"
                }
            }),
            t.on("movestart", ()=>{
                o()
            }
            ),
            t
        }
          , H = e=>{
            let {data: t} = e
              , [n,r] = (0,
            a.useState)(!1)
              , [s,c] = (0,
            a.useState)();
            return (0,
            a.useEffect)(()=>{
                if (t && !s) {
                    let e = F();
                    c(e)
                }
                s && !n && t && (z(s, t),
                r(!0))
            }
            , [t, s]),
            (0,
            i.jsx)("div", {
                className: _().map,
                children: t ? (0,
                i.jsxs)(i.Fragment, {
                    children: [(0,
                    i.jsx)("div", {
                        className: _().map_inner,
                        id: "map"
                    }), (0,
                    i.jsx)("div", {
                        id: "popup",
                        className: _().popup,
                        children: (0,
                        i.jsx)("div", {
                            id: "popupContent",
                            className: _().popup_content
                        })
                    }), (0,
                    i.jsx)(d, {
                        map: s,
                        data: t
                    })]
                }) : (0,
                i.jsx)(o.p9, {
                    classNames: _().preloader
                })
            })
        }
        ;
        var J = H
    },
    7741: function(e) {
        e.exports = {
            map: "interactiveMap_map__SnBlY",
            map_inner: "interactiveMap_map_inner__1fQqk",
            preloader: "interactiveMap_preloader__b8GsY",
            bg: "interactiveMap_bg__Cy880",
            icon: "interactiveMap_icon__vVkzi",
            button: "interactiveMap_button__R_9s_",
            button_image: "interactiveMap_button_image__FPuoc",
            button_image_opened: "interactiveMap_button_image_opened__oxf5Z",
            popup: "interactiveMap_popup__y7OAQ",
            popup_content: "interactiveMap_popup_content__ZwLjh",
            popup_content_nobefore: "interactiveMap_popup_content_nobefore__nRVLZ",
            popup_content_nomargin: "interactiveMap_popup_content_nomargin__wpk8l",
            groups: "interactiveMap_groups__Tcges",
            group: "interactiveMap_group__EqQP_",
            group_image: "interactiveMap_group_image__cmBb9",
            group_image_checked: "interactiveMap_group_image_checked__WLTTp",
            visible: "interactiveMap_visible__SCFvJ"
        }
    }
}]);
