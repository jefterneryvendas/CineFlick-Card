! function(e) {
    var t = {};

    function a(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = t, a.d = function(e, t, o) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (a.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) a.d(o, n, function(t) {
                return e[t]
            }.bind(null, n));
        return o
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 0)
}([function(e, t) {
    ea.hooks.addAction("init", "ea", (function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/eael-adv-accordion.default", (function(e, t) {
            var a = window.location.hash.substr(1);
            a = "safari" === a ? "eael-safari" : a;
            var o = !1,
                n = e.find(".eael-adv-accordion"),
                i = e.find(".eael-accordion-header"),
                s = n.data("accordion-type"),
                r = n.data("toogle-speed"),
                c = n.data("custom-id-offset"),
                d = n.data("scroll-on-click"),
                l = n.data("scroll-speed");
            (a || "yes" === d) && i.each((function() {
                "yes" === d && t(this).attr("data-scroll", t(this).offset().top), a && t(this).attr("id") == a && (o = !0, t(this).addClass("show-this active"), t(this).next().slideDown(r))
            })), !1 === o && i.each((function() {
                t(this).hasClass("active-default") && (t(this).addClass("show-this active"), t(this).next().slideDown(r))
            })), i.unbind("click"), i.click((function(e) {
                e.preventDefault();
                var a = t(this);
                if (setTimeout((function(e) {
                        t(".eael-accordion-header").removeClass("triggered")
                    }), 70), !a.hasClass("triggered")) {
                    if ("accordion" === s ? a.hasClass("show-this") ? (a.removeClass("show-this active"), a.next().slideUp(r)) : (a.parent().parent().find(".eael-accordion-header").removeClass("show-this active"), a.parent().parent().find(".eael-accordion-content").slideUp(r), a.toggleClass("show-this active"), a.next().slideToggle(r)) : a.hasClass("show-this") ? (a.removeClass("show-this active"), a.next().slideUp(r)) : (a.addClass("show-this active"), a.next().slideDown(r)), "yes" === d && a.hasClass("active")) {
                        var o = c ? parseFloat(c) : 0;
                        t("html, body").animate({
                            scrollTop: t(this).data("scroll") - o
                        }, l)
                    }
                    setTimeout((function() {
                        a.addClass("triggered"), ea.hooks.doAction("widgets.reinit", a.parent()), ea.hooks.doAction("ea-advanced-accordion-triggered", a.next())
                    }), 50)
                }
            })), e.on("keydown", ".eael-accordion-header", (function(e) {
                13 !== e.which && 32 !== e.which || t(this).trigger("click")
            }))
        }))
    }))
}]);