/* VimeoPlayer - v4.41.10 - 2025-07-02 - https://player.vimeo.com/NOTICE.txt */
const e = {
        MANIFEST: "manifest",
        SEGMENT: "segment"
    },
    t = {
        method: "GET",
        async: !0,
        retry: 0,
        throwHttpErrors: !0,
        headers: {},
        hooks: {
            beforeRequest: [],
            beforeRetry: [],
            afterResponse: []
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300
        },
        retryStatus: function(e) {
            return [408, 413, 429].includes(e) || e >= 500 && e < 600
        }
    };

function n(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function r(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object")
}

function i(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
}

function o(e, t) {
    return e.get(r(e, t))
}

function s(e, t, n) {
    i(e, t), t.set(e, n)
}

function a(e, t, n) {
    return e.set(r(e, t), n), n
}

function u(e, t) {
    i(e, t), t.add(e)
}

function c(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, S(r.key), r)
    }
}

function l(e, t, n) {
    return t && c(e.prototype, t), n && c(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function d(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = b(e)) || t && e && "number" == typeof e.length) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function h(e, t, n) {
    return (t = S(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function f(e) {
    return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }, f(e)
}

function p(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, E(e, t)
}

function _() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
    } catch (e) {}
    return (_ = function() {
        return !!e
    })()
}

function m(e) {
    if (null == e) throw new TypeError("Cannot destructure " + e)
}

function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? v(Object(n), !0).forEach((function(t) {
            h(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function y(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
            if ({}.hasOwnProperty.call(e, r)) {
                if (t.includes(r)) continue;
                n[r] = e[r]
            }
        return n
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
}

function E(e, t) {
    return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
    }, E(e, t)
}

function T(e) {
    return function(e) {
        if (Array.isArray(e)) return n(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }(e) || b(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function S(e) {
    var t = function(e) {
        if ("object" != typeof e || !e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(e);
    return "symbol" == typeof t ? t : t + ""
}

function b(e, t) {
    if (e) {
        if ("string" == typeof e) return n(e, t);
        var r = {}.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
    }
}

function A(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return A = function(e) {
        if (null === e || ! function(e) {
                try {
                    return -1 !== Function.toString.call(e).indexOf("[native code]")
                } catch (xp) {
                    return "function" == typeof e
                }
            }(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
        }

        function n() {
            return function(e, t, n) {
                if (_()) return Reflect.construct.apply(null, arguments);
                var r = [null];
                r.push.apply(r, t);
                var i = new(e.bind.apply(e, r));
                return n && E(i, n.prototype), i
            }(e, arguments, f(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), E(n, e)
    }, A(e)
}

function w(e) {
    return e.filter(((e, t, n) => n.indexOf(e) === t))
}

function I(e, t) {
    return e.reduce(((e, n, r, i) => e.concat(t(n, r, i))), [])
}

function R(e) {
    return (t, ...n) => (n.forEach((n => {
        for (const r in n) {
            const i = Object.getOwnPropertyDescriptor(n, r);
            Object.defineProperty(t, r, Object.assign(i, e))
        }
    })), t)
}
const k = R({
        enumerable: !1,
        configurable: !0,
        writeable: !1
    }),
    P = R({
        enumerable: !1,
        configurable: !1,
        writeable: !1
    }),
    D = R({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    }),
    O = e => new Promise((t => setTimeout(t, e)));

function L(e) {
    e.substring(0, e.lastIndexOf("/") + 1)
}
const C = (e, t = !1) => new Promise(((n, r) => {
        if (t) {
            const t = document.querySelector(`script[src="${e}"]`);
            if (t && !t.dataset.error) return void setTimeout(n, 0)
        }
        const i = document.createElement("script");
        i.src = e, i.addEventListener("load", n), i.addEventListener("error", (e => {
            i.dataset.error = "true", r(e.error)
        })), document.head.appendChild(i)
    })),
    N = e => Math.pow(e, 2),
    M = e => Math.sqrt(e),
    x = (e, t) => {
        const n = (n, ...r) => {
                [`%c${e}`, t].concat(r)
            },
            r = e => (...t) => {
                n.apply(void 0, [e].concat(t))
            },
            i = r("log"),
            o = (...e) => {
                i.apply(void 0, e)
            };
        return Object.assign(o, {
            log: i,
            warn: r("warn"),
            error: r("error")
        }), o
    };

function U(e, ...t) {
    return t.reduce(((e, t) => (Object.keys(t || {}).forEach((n => {
        const r = e[n],
            i = t[n];
        r && void 0 === i || (Array.isArray(i) ? e[n] = (r || []).concat(i) : (e => e && "object" == typeof e)(i) ? e[n] = U({}, r, i) : e[n] = i)
    })), e)), e)
}
const F = (e = !1) => e ? window.MediaSource : j,
    j = void 0 !== window.ManagedMediaSource ? window.ManagedMediaSource : window.MediaSource,
    V = navigator.userAgent.toLowerCase(),
    B = ["googlebot", "google-inspectiontool"],
    H = ["bingbot", "bingpreview", "yandex", "slurp", "facebookexternalhit", "msnbot", "feedly", "parse.ly"];

function X(e) {
    e = e.toLowerCase();
    const t = new RegExp(e).test(V);
    return "safari" === e ? t && new RegExp("version").test(V) : t
}

function W(e) {
    const t = document.createElement("div"),
        n = e.charAt(0).toUpperCase() + e.slice(1),
        r = (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ");
    for (let i in r) {
        const e = r[i];
        if (void 0 !== t.style[e]) return e
    }
    return e
}
const q = !!X("android") && (parseFloat(V.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0),
    G = window.devicePixelRatio || 1,
    K = !(!X("windows phone") && !X("iemobile")) && (parseFloat(V.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || !0),
    Y = !!X("msie") && parseFloat(V.replace(/^.*msie (\d+).*$/, "$1")),
    $ = !!X("trident") && parseFloat(V.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4,
    z = X("ipad;") || X("iphone;") || X("ipod touch;") ? parseFloat(V.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2")) : navigator.userAgent.includes("Mac") && "ontouchend" in document,
    Q = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)/i.test(navigator.userAgent),
    J = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
    Z = X("opera") || X("opr"),
    ee = /^Mozilla\/5\.0 \(.* Mac OS X.*\(KHTML, like Gecko\)(?: Mobile\/[\S]*|)$/i.test(V),
    te = (X("safari") || Q) && X("apple") && !X("chrome") && !X("android");

function ne(e) {
    if (!te) return !1;
    const t = e.split("."),
        n = function() {
            if (!X("safari")) return [];
            const e = V.split(" ").find((function(e) {
                return /version\//.test(e)
            }));
            return e ? e.replace("version/", "").split(".").map((function(e) {
                return parseInt(e, 10)
            })) : []
        }();
    for (let r = 0; r < 3; r++) {
        const e = parseInt(t[r], 10) || 0,
            i = n[r] || 0;
        if (e < i) return !0;
        if (e > i) return !1
    }
    return !0
}
const re = {
        autoplayPolicy: ne("11"),
        hevc: ne("11"),
        dolbyVision: ne("14.1"),
        spatial: ne("11.0.2"),
        fullscreenRequiresDataLoaded: ne("17.2")
    },
    ie = {
        airPlay: "WebKitPlaybackTargetAvailabilityEvent" in window,
        android: q,
        appleMail: ee,
        hasAutoplayPolicy: q || z || re.autoplayPolicy || function() {
            if (!X("chrome")) return [];
            const e = V.split(" ").find((function(e) {
                return z ? /CriOS\//.test(e) : /chrome\//.test(e)
            }));
            return e ? e.replace("chrome/", "").split(".").map((function(e) {
                return parseInt(e, 10)
            })) : []
        }()[0] >= 66,
        iOS: z,
        iPadOS: J,
        mobileAndroid: q && X("mobile"),
        browser: {
            bb10: X("bb10"),
            chrome: X("chrome"),
            firefox: X("firefox"),
            ie: Y || $,
            edge: X("edge"),
            opera: Z,
            safari: te,
            chromium: "chrome" in window && !X("crios"),
            webKit: te || X("crios")
        },
        mse: j,
        devicePixelRatio: G,
        iPhone: X("iphone;") || X("ipod touch;") || X("ipod;"),
        iPad: X("ipad;"),
        iPadNonRetina: X("ipad;") && G < 2,
        mac: X("mac os"),
        navigatorConnection: window.navigator.connection,
        pictureInPictureSupportType: function() {
            if ("pictureInPictureEnabled" in document) return "pip-api";
            const e = document.createElement("video");
            return !("function" != typeof e.webkitSetPresentationMode || !e.webkitSupportsPresentationMode("picture-in-picture")) && "webkit-presentation-mode"
        }(),
        pointerEvents: window.navigator.pointerEnabled || window.navigator.msPointerEnabled || !1,
        passiveEvents: function() {
            let e = !1;
            try {
                const t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
            } catch (Np) {}
            return e
        }(),
        svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || X("windows phone") || window.navigator.maxTouchPoints > 1 || window.navigator.msMaxTouchPoints || !1,
        transformProperty: W("transform"),
        transitionProperty: W("transition"),
        webp: function() {
            const e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")
        }(),
        windowsPhone: K,
        mediaCapabilities: "mediaCapabilities" in navigator,
        webShare: "canShare" in navigator && "share" in navigator,
        isGoogleBot: (() => {
            const e = V.toLowerCase();
            return B.some((t => e.includes(t)))
        })(),
        isCrawler: (() => {
            const e = V.toLowerCase();
            return H.some((t => e.includes(t)))
        })(),
        storageAccessAPI: "requestStorageAccess" in document && "hasStorageAccess" in document,
        clipboardAPI: "clipboard" in navigator && "write" in navigator.clipboard,
        videoContentPreload: !X("iphone"),
        intersectionObserver: "IntersectionObserver" in window
    },
    oe = e => {
        ie.mse = e
    },
    se = /mac os x 10_13/.test(V),
    ae = ie.iOS && ie.iOS >= 11,
    ue = "undefined" != typeof matchMedia && (matchMedia("(color-gamut: p3)").matches && screen.pixelDepth > 24 || matchMedia("(dynamic-range: high), (video-dynamic-range: high)").matches);
ie.hevc = function(e = "hvc1") {
    return void 0 !== j ? j.isTypeSupported(`video/mp4; codecs="${e}"`) : re.hevc && (se || ae)
}("hvc1.2.4.H150.90"), ie.hdr = ue, ie.dolbyVision = function() {
    const e = 'video/mp4; codecs="dvh1"';
    let t = void 0 !== j && j.isTypeSupported(e);
    if (!t) {
        const n = document.createElement("video");
        "canPlayType" in n && (t = "probably" === n.canPlayType(e))
    }
    return !((J || ie.iOS) && !re.dolbyVision) && t
}(), ie.vp9hdr = (window.matchMedia("(color-gamut: p3)").matches || window.matchMedia("(color-gamut: rec2020)").matches) && screen.colorDepth >= 48 && (j.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.00"') || j.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.01"') || j.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.00"') || j.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.01"')), ie.av1 = void 0 !== j && j.isTypeSupported('video/mp4; codecs="av01.0.31M.08.0.110.01.01.01.0"'), ie.webvr = !(!window.navigator || !("getVRDisplays" in window.navigator)), ie.webxr = !!(window.navigator && "xr" in window.navigator && "supportsSession" in window.navigator.xr), ie.spatialPlayback = !!ie.mse, ie.stereoscopic = ie.spatialPlayback && ie.mobileAndroid, ie.fullscreenRequiresDataLoaded = ie.iOS >= 17 || ie.iPadOS && re.fullscreenRequiresDataLoaded;
const ce = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }
}((function(e) {
    return new Promise((t => {
        const {
            cleanup: n
        } = le(e, (e => {
            e && (t(), n())
        }))
    }))
}));

function le(e, t) {
    let n = !0,
        r = !0;

    function i() {
        return r = n && "visible" === document.visibilityState, r
    }
    if (!ie.intersectionObserver) return null == t || t(!0), {
        cleanup: () => {},
        isInView: !0
    };
    const o = new IntersectionObserver((e => {
        const [o] = e;
        n = !(null == o || !o.isIntersecting), i(), null == t || t(r)
    }), {
        threshold: .5
    });
    o.observe(e);
    const s = () => {
        i(), null == t || t(r)
    };
    return document.addEventListener("visibilitychange", s), {
        cleanup: () => {
            o.disconnect(), document.removeEventListener("visibilitychange", s)
        },
        get isInView() {
            return r
        }
    }
}

function de() {
    let e, t, n = new Promise(((n, r) => {
        e = n, t = r
    }));
    return Object.assign(n, {
        resolve: e,
        reject: t
    }), n
}

function he(e, t) {
    if (!t || !t.length) return 0;
    if (1 === t.length && t.end(0) - t.start(0) < 1e-6) return 0;
    let n = 0;
    for (let r = t.length - 1; r >= 0 && t.end(r) > e; --r) n += t.end(r) - Math.max(t.start(r), e);
    return n
}

function fe(e, t) {
    let n = e;
    for (let r = 0; r < t.length; r++)
        if (t.start(r) <= e && t.end(r) >= e) {
            n = t.end(r);
            break
        }
    return n - e
}

function pe() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function _e() {
    return Math.trunc(pe() / 1e3)
}

function me(e) {
    return _e() - e
}

function ve(e) {
    return pe() - e
}
const ge = e => Math.trunc(Date.now() / 1e3) - e;

function ye(e) {
    try {
        const t = new URLSearchParams;
        return Object.entries(e).forEach((([e, n]) => {
            void 0 !== n && t.append(e, String(n))
        })), t.toString()
    } catch (Np) {
        return ""
    }
}

function Ee(e) {
    if ("string" != typeof e) return {};
    try {
        const t = new URLSearchParams(e),
            n = {};
        return t.forEach(((e, t) => {
            n[t] = e
        })), n
    } catch (Np) {
        return {}
    }
}

function Te(e) {
    try {
        return new URL(e)
    } catch (t) {
        return {}
    }
}
const Se = (e, t, n = !1) => {
        try {
            const r = new URL(e);
            return Object.entries(t).forEach((([e, t]) => {
                var i;
                n && void 0 === t || r.searchParams.set(e, null !== (i = null == t ? void 0 : t.toString()) && void 0 !== i ? i : "")
            })), r.toString()
        } catch (Np) {
            return e
        }
    },
    be = e => {
        try {
            const {
                username: t,
                password: n,
                host: r
            } = new URL(e);
            return r ? t || n ? `${t}:${n}@${r}` : r : null
        } catch (Np) {
            return null
        }
    };

function Ae() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e => (e ^ 16 * Math.random() >> e / 4).toString(16)))
}

function we(e, t) {
    this.headers = {}, this.perfTimings = {}, U(this, t), this.ok = 2 == (this.status / 100 | 0), this.body = e, this.text = () => Promise.resolve(e), this.json = () => Promise.resolve(JSON.parse(e)), this.blob = () => Promise.resolve(new Blob([e])), this.arrayBuffer = () => Promise.resolve(e), this.clone = () => new we(e, this), this.isVimeoResponse = !0
}
let Ie = function(e) {
        function t() {
            var t;
            return (t = e.call(this, "The operation was aborted.") || this).name = "AbortError", t
        }
        return p(t, e), t
    }(A(Error)),
    Re = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t.statusText) || this).name = "HTTPError", n.response = t, n
        }
        return p(t, e), t
    }(A(Error)),
    ke = function(e) {
        function t() {
            var t;
            return (t = e.call(this, "A network error occurred.") || this).name = "NetworkError", t
        }
        return p(t, e), t
    }(A(Error)),
    Pe = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, "Request timed out.") || this).name = "TimeoutError", n.timeoutMs = t, n
        }
        return p(t, e), t
    }(A(Error));

function De(e, t) {
    let {
        url: n,
        method: r,
        body: i,
        onDownloadProgress: o
    } = e, s = 100;
    return new Promise((function(a, u) {
        const c = t ? new t : new XMLHttpRequest,
            l = window.performance;
        c.open(r.toUpperCase(), n, e.async), e.timeout && (c.timeout = e.timeout), c.onload = function() {
            if (0 === c.status && (!c.responseURL || 0 !== c.responseURL.indexOf("file:"))) return;
            const e = {};
            c.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, ((t, n, r) => {
                e[n] = e[n] ? `${e[n]},${r}` : r
            }));
            let t = {};
            if (window.performance && void 0 !== window.performance.getEntriesByType) {
                const e = window.performance.getEntriesByType("resource");
                if (e.length && e.length >= s && ("function" == typeof l.clearResourceTimings && l.clearResourceTimings(), "function" == typeof l.setResourceTimingBufferSize && (l.setResourceTimingBufferSize(500), s = 500)), e.length) {
                    const n = e.filter((e => e.name === c.responseURL)).sort(((e, t) => e.connectStart - t.connectStart));
                    n.length && (t = n[n.length - 1].toJSON())
                }
            }
            a(new we(c.response, {
                headers: e,
                statusText: c.statusText,
                status: c.status,
                url: c.responseURL,
                perfTimings: t
            }))
        }, c.onabort = function() {
            u(new Ie)
        }, c.onerror = function() {
            u(new ke)
        }, c.ontimeout = function() {
            u(new Pe(e.timeout))
        }, "function" == typeof o && c.addEventListener("progress", o);
        for (let t in e.headers) c.setRequestHeader(t, e.headers[t]);
        e.withCredentials && (c.withCredentials = !0), e.responseType && (c.responseType = e.responseType), e.abort = c.abort.bind(c), c.send(i || null)
    }))
}

function Oe() {}

function Le(e, t, n) {
    if (!e.s) {
        if (n instanceof Ce) {
            if (!n.s) return void(n.o = Le.bind(null, e, t));
            1 & t && (t = n.s), n = n.v
        }
        if (n && n.then) return void n.then(Le.bind(null, e, t), Le.bind(null, e, 2));
        e.s = t, e.v = n;
        const r = e.o;
        r && r(e)
    }
}
const Ce = function() {
    function e() {}
    return e.prototype.then = function(t, n) {
        const r = new e,
            i = this.s;
        if (i) {
            const e = 1 & i ? t : n;
            if (e) {
                try {
                    Le(r, 1, e(this.v))
                } catch (Np) {
                    Le(r, 2, Np)
                }
                return r
            }
            return this
        }
        return this.o = function(e) {
            try {
                const i = e.v;
                1 & e.s ? Le(r, 1, t ? t(i) : i) : n ? Le(r, 1, n(i)) : Le(r, 2, i)
            } catch (Np) {
                Le(r, 2, Np)
            }
        }, r
    }, e
}();

function Ne(e) {
    return e instanceof Ce && 1 & e.s
}

function Me(e) {
    const t = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (Np) {
                return Promise.reject(Np)
            }
        }
    }((function(r) {
        return function(e, t) {
            try {
                var n = e()
            } catch (Np) {
                return t(Np)
            }
            return n && n.then ? n.then(void 0, t) : n
        }(r, (function(i) {
            let o = !1;
            const s = function(t) {
                if (!e.retryAbortErrors && t instanceof Ie) return 0;
                if (t instanceof Pe) return 0;
                if (n >= e.retry) return 0;
                if (t instanceof Re) {
                    if (!e.retryStatus(t.response.status)) return 0;
                    const n = function(e) {
                        const t = "retry-after".toLowerCase();
                        for (const n in e)
                            if (n.toLowerCase() === t) return e[n];
                        return null
                    }(t.response.headers);
                    if (n && e.retryStatus(t.response.status)) {
                        let e = Number(n);
                        return isNaN(e) ? e = Date.parse(n) - Date.now() : e *= 1e3, e
                    }
                    if (413 === t.response.status) return 0
                }
                return .3 * 2 ** (n - 1) * 1e3
            }(i);
            return n++,
                function(a, u) {
                    var c = function() {
                        if (0 !== s && n > 0) return function(e, t) {
                            return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
                        }(O(s), (function() {
                            var s;
                            const a = (null == e || null == (s = e.hooks) ? void 0 : s.beforeRetry) || [];
                            return function(e, t) {
                                return e && e.then ? e.then(t) : t(e)
                            }(function(e, t, n) {
                                var r, i, o = -1;
                                return function s(a) {
                                    try {
                                        for (; ++o < e.length && (!n || !n());)
                                            if ((a = t(o)) && a.then) {
                                                if (!Ne(a)) return void a.then(s, i || (i = Le.bind(null, r = new Ce, 2)));
                                                a = a.v
                                            }
                                        r ? Le(r, 1, a) : r = a
                                    } catch (Np) {
                                        Le(r || (r = new Ce), 2, Np)
                                    }
                                }(), r
                            }(a, (function(t) {
                                return function(e) {
                                    if (!void 0) return e && e.then ? e.then(Oe) : Promise.resolve()
                                }((0, a[t])(e, i, n))
                            })), (function() {
                                const e = t(r);
                                return o = !0, e
                            }))
                        }))
                    }();
                    return c && c.then ? c.then(u) : u(c)
                }(0, (function(t) {
                    if (o) return t;
                    if (e.throwHttpErrors) throw i
                }))
        }))
    }));
    let n = 0;
    return t
}

function xe(e, t) {
    const n = e.then.bind(e);
    return Object.assign(e, {
        abort: t,
        then: (...e) => xe(n.apply(void 0, e), t)
    })
}

function Ue(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Fe(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }
}

function je(e, t, n) {
    if (!e.s) {
        if (n instanceof Ve) {
            if (!n.s) return void(n.o = je.bind(null, e, t));
            1 & t && (t = n.s), n = n.v
        }
        if (n && n.then) return void n.then(je.bind(null, e, t), je.bind(null, e, 2));
        e.s = t, e.v = n;
        const r = e.o;
        r && r(e)
    }
}
const Ve = function() {
    function e() {}
    return e.prototype.then = function(t, n) {
        const r = new e,
            i = this.s;
        if (i) {
            const e = 1 & i ? t : n;
            if (e) {
                try {
                    je(r, 1, e(this.v))
                } catch (Np) {
                    je(r, 2, Np)
                }
                return r
            }
            return this
        }
        return this.o = function(e) {
            try {
                const i = e.v;
                1 & e.s ? je(r, 1, t ? t(i) : i) : n ? je(r, 1, n(i)) : je(r, 2, i)
            } catch (Np) {
                je(r, 2, Np)
            }
        }, r
    }, e
}();

function Be(e) {
    return e instanceof Ve && 1 & e.s
}

function He(e, t, n) {
    var r, i, o = -1;
    return function s(a) {
        try {
            for (; ++o < e.length && (!n || !n());)
                if ((a = t(o)) && a.then) {
                    if (!Be(a)) return void a.then(s, i || (i = je.bind(null, r = new Ve, 2)));
                    a = a.v
                }
            r ? je(r, 1, a) : r = a
        } catch (Np) {
            je(r || (r = new Ve), 2, Np)
        }
    }(), r
}

function Xe(e, t) {
    return e && e.then ? e.then(t) : t(e)
}
const We = ["get", "post", "put", "patch", "head", "delete"],
    qe = {
        json: "application/json",
        text: "text/plain",
        arrayBuffer: "*/*",
        blob: "*/*"
    },
    Ge = ["get"];

function Ke(e, t) {
    const n = Fe((function() {
        let e = !1,
            n = !1;
        const r = t.hooks.beforeRequest || [];
        return Xe(He(r, (function(i) {
            return Ue((0, r[i])(t), (function(r) {
                if (r instanceof Ye) return t = r, void(n = !0);
                if (null != r && r.isVimeoResponse) {
                    const n = Promise.resolve(r).then($e(t));
                    return e = !0, n
                }
            }))
        }), (function() {
            return n || e
        })), (function(n) {
            return e ? n : De(t).then($e(t))
        }))
    }));
    t = new Ye(e, t);
    const {
        method: r,
        json: i,
        jwt: o,
        searchParams: s
    } = t;
    i && (t.headers["Content-Type"] = qe.json, t.body = JSON.stringify(i)), o && (t.headers.Authorization = `jwt ${o}`), s && (t.url = Se(t.url, s));
    const a = -1 !== Ge.indexOf(r.toLowerCase()) ? Me(t)(n) : n();
    for (const u in qe) a[u] = Fe((function() {
        return t.headers["Content-Type"] = qe[u], Ue(a, (function(e) {
            return e.clone()[u]()
        }))
    }));
    return xe(a, (() => t.abort()))
}

function Ye(e, n) {
    U(this, t, e = "string" == typeof e ? {
        url: e
    } : e, n)
}

function $e(e) {
    const {
        validateStatus: t,
        throwHttpErrors: n,
        hooks: r
    } = e;
    return Fe((function(i) {
        const o = r.afterResponse || [];
        return Xe(He(o, (function(t) {
            return Ue((0, o[t])(e, i.clone()), (function(e) {
                e instanceof we && (i = e)
            }))
        })), (function() {
            if (!t || t(i.status)) return i;
            if (n) throw new Re(i);
            return i
        }))
    }))
}
We.forEach((function(e) {
    return Ke[e] = (t, n) => Ke(t, g({
        method: e
    }, n)), Ke[e]
}));
const {
    get: ze,
    post: Qe,
    put: Je,
    patch: Ze,
    head: et
} = Ke, tt = {
    ARRAY_BUFFER: "arraybuffer"
};
var nt = Object.freeze({
        __proto__: null,
        ContentTypes: e,
        defaults: t,
        requestMethods: We,
        responseTypes: qe,
        retryMethods: Ge,
        request: Ke,
        Request: Ye,
        get: ze,
        post: Qe,
        put: Je,
        patch: Ze,
        head: et,
        Response: we,
        ResponseTypes: tt,
        AbortError: Ie,
        HTTPError: Re,
        NetworkError: ke,
        TimeoutError: Pe,
        xhr: De
    }),
    rt = Array.isArray,
    it = "object" == typeof global && global && global.Object === Object && global,
    ot = "object" == typeof self && self && self.Object === Object && self,
    st = it || ot || Function("return this")(),
    at = st.Symbol,
    ut = Object.prototype,
    ct = ut.hasOwnProperty,
    lt = ut.toString,
    dt = at ? at.toStringTag : void 0,
    ht = Object.prototype.toString,
    ft = at ? at.toStringTag : void 0;

function pt(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : ft && ft in Object(e) ? function(e) {
        var t = ct.call(e, dt),
            n = e[dt];
        try {
            e[dt] = void 0;
            var r = !0
        } catch (Np) {}
        var i = lt.call(e);
        return r && (t ? e[dt] = n : delete e[dt]), i
    }(e) : function(e) {
        return ht.call(e)
    }(e)
}

function _t(e) {
    return null != e && "object" == typeof e
}

function mt(e) {
    return "symbol" == typeof e || _t(e) && "[object Symbol]" == pt(e)
}
var vt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    gt = /^\w*$/;

function yt(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t)
}

function Et(e) {
    if (!yt(e)) return !1;
    var t = pt(e);
    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
}
var Tt = st["__core-js_shared__"],
    St = function() {
        var e = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }(),
    bt = Function.prototype.toString;

function At(e) {
    if (null != e) {
        try {
            return bt.call(e)
        } catch (Np) {}
        try {
            return e + ""
        } catch (Np) {}
    }
    return ""
}
var wt = /^\[object .+?Constructor\]$/,
    It = Function.prototype,
    Rt = Object.prototype,
    kt = It.toString,
    Pt = Rt.hasOwnProperty,
    Dt = RegExp("^" + kt.call(Pt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Ot(e, t) {
    var n = function(e, t) {
        return null == e ? void 0 : e[t]
    }(e, t);
    return function(e) {
        return !(!yt(e) || function(e) {
            return !!St && St in e
        }(e)) && (Et(e) ? Dt : wt).test(At(e))
    }(n) ? n : void 0
}
var Lt = Ot(Object, "create"),
    Ct = Object.prototype.hasOwnProperty,
    Nt = Object.prototype.hasOwnProperty;

function Mt(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function xt(e, t) {
    return e === t || e != e && t != t
}

function Ut(e, t) {
    for (var n = e.length; n--;)
        if (xt(e[n][0], t)) return n;
    return -1
}
Mt.prototype.clear = function() {
    this.__data__ = Lt ? Lt(null) : {}, this.size = 0
}, Mt.prototype.delete = function(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t
}, Mt.prototype.get = function(e) {
    var t = this.__data__;
    if (Lt) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n
    }
    return Ct.call(t, e) ? t[e] : void 0
}, Mt.prototype.has = function(e) {
    var t = this.__data__;
    return Lt ? void 0 !== t[e] : Nt.call(t, e)
}, Mt.prototype.set = function(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = Lt && void 0 === t ? "__lodash_hash_undefined__" : t, this
};
var Ft = Array.prototype.splice;

function jt(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
jt.prototype.clear = function() {
    this.__data__ = [], this.size = 0
}, jt.prototype.delete = function(e) {
    var t = this.__data__,
        n = Ut(t, e);
    return !(n < 0 || (n == t.length - 1 ? t.pop() : Ft.call(t, n, 1), --this.size, 0))
}, jt.prototype.get = function(e) {
    var t = this.__data__,
        n = Ut(t, e);
    return n < 0 ? void 0 : t[n][1]
}, jt.prototype.has = function(e) {
    return Ut(this.__data__, e) > -1
}, jt.prototype.set = function(e, t) {
    var n = this.__data__,
        r = Ut(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
};
var Vt = Ot(st, "Map");

function Bt(e, t) {
    var n = e.__data__;
    return function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
}

function Ht(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function Xt(e, t) {
    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
    var n = function n() {
        var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            o = n.cache;
        if (o.has(i)) return o.get(i);
        var s = e.apply(this, r);
        return n.cache = o.set(i, s) || o, s
    };
    return n.cache = new(Xt.Cache || Ht), n
}
Ht.prototype.clear = function() {
    this.size = 0, this.__data__ = {
        hash: new Mt,
        map: new(Vt || jt),
        string: new Mt
    }
}, Ht.prototype.delete = function(e) {
    var t = Bt(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
}, Ht.prototype.get = function(e) {
    return Bt(this, e).get(e)
}, Ht.prototype.has = function(e) {
    return Bt(this, e).has(e)
}, Ht.prototype.set = function(e, t) {
    var n = Bt(this, e),
        r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this
}, Xt.Cache = Ht;
var Wt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    qt = /\\(\\)?/g,
    Gt = function() {
        var e = Xt((function(e) {
                var t = [];
                return 46 === e.charCodeAt(0) && t.push(""), e.replace(Wt, (function(e, n, r, i) {
                    t.push(r ? i.replace(qt, "$1") : n || e)
                })), t
            }), (function(e) {
                return 500 === t.size && t.clear(), e
            })),
            t = e.cache;
        return e
    }(),
    Kt = at ? at.prototype : void 0,
    Yt = Kt ? Kt.toString : void 0;

function $t(e) {
    if ("string" == typeof e) return e;
    if (rt(e)) return function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
        return i
    }(e, $t) + "";
    if (mt(e)) return Yt ? Yt.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}

function zt(e) {
    return null == e ? "" : $t(e)
}

function Qt(e, t) {
    return rt(e) ? e : function(e, t) {
        if (rt(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !mt(e)) || gt.test(e) || !vt.test(e) || null != t && e in Object(t)
    }(e, t) ? [e] : Gt(zt(e))
}

function Jt(e) {
    if ("string" == typeof e || mt(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}

function Zt(e, t) {
    for (var n = 0, r = (t = Qt(t, e)).length; null != e && n < r;) e = e[Jt(t[n++])];
    return n && n == r ? e : void 0
}

function en(e, t, n) {
    var r = null == e ? void 0 : Zt(e, t);
    return void 0 === r ? n : r
}
var tn = "object" == typeof global && global && global.Object === Object && global,
    nn = "object" == typeof self && self && self.Object === Object && self,
    rn = (tn || nn || Function("return this")()).Symbol,
    on = Object.prototype,
    sn = on.hasOwnProperty,
    an = on.toString,
    un = rn ? rn.toStringTag : void 0,
    cn = Object.prototype.toString,
    ln = rn ? rn.toStringTag : void 0;
var dn = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }(Object.getPrototypeOf, Object),
    hn = Function.prototype,
    fn = Object.prototype,
    pn = hn.toString,
    _n = fn.hasOwnProperty,
    mn = pn.call(Object),
    vn = function() {
        var e, t = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()).Symbol;
        return "function" == typeof t ? t.observable ? e = t.observable : (e = t("observable"), t.observable = e) : e = "@@observable", e
    }(),
    gn = "@@redux/INIT";

function yn(e, t, n) {
    var r;
    if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
        if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
        return n(yn)(e, t)
    }
    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
    var i = e,
        o = t,
        s = [],
        a = s,
        u = !1;

    function c() {
        a === s && (a = s.slice())
    }

    function l() {
        return o
    }

    function d(e) {
        if ("function" != typeof e) throw new Error("Expected listener to be a function.");
        var t = !0;
        return c(), a.push(e),
            function() {
                if (t) {
                    t = !1, c();
                    var n = a.indexOf(e);
                    a.splice(n, 1)
                }
            }
    }

    function h(e) {
        if (! function(e) {
                if (! function(e) {
                        return null != e && "object" == typeof e
                    }(e) || "[object Object]" != function(e) {
                        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : ln && ln in Object(e) ? function(e) {
                            var t = sn.call(e, un),
                                n = e[un];
                            try {
                                e[un] = void 0;
                                var r = !0
                            } catch (Np) {}
                            var i = an.call(e);
                            return r && (t ? e[un] = n : delete e[un]), i
                        }(e) : function(e) {
                            return cn.call(e)
                        }(e)
                    }(e)) return !1;
                var t = dn(e);
                if (null === t) return !0;
                var n = _n.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && pn.call(n) == mn
            }(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
            u = !0, o = i(o, e)
        } finally {
            u = !1
        }
        for (var t = s = a, n = 0; n < t.length; n++)(0, t[n])();
        return e
    }
    return h({
        type: gn
    }), (r = {
        dispatch: h,
        subscribe: d,
        getState: l,
        replaceReducer: function(e) {
            if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
            i = e, h({
                type: gn
            })
        }
    })[vn] = function() {
        var e, t = d;
        return (e = {
            subscribe: function(e) {
                if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");

                function n() {
                    e.next && e.next(l())
                }
                return n(), {
                    unsubscribe: t(n)
                }
            }
        })[vn] = function() {
            return this
        }, e
    }, r
}

function En() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length ? function(e) {
        return e
    } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }))
}
var Tn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
};

function Sn() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(e) {
        return function(n, r, i) {
            var o, s = e(n, r, i),
                a = s.dispatch,
                u = {
                    getState: s.getState,
                    dispatch: function(e) {
                        return a(e)
                    }
                };
            return o = t.map((function(e) {
                return e(u)
            })), a = En.apply(void 0, o)(s.dispatch), Tn({}, s, {
                dispatch: a
            })
        }
    }
}
var bn = new WeakMap,
    An = new WeakMap;
let wn = function() {
    function e() {
        s(this, bn, Object.create(null)), s(this, An, void 0), h(this, "eventNames", (() => Object.keys(o(bn, this)))), h(this, "fire", ((e, ...t) => {
            if (!e) throw new Error("Tried to fire an undefined event.");
            if (e in o(bn, this)) {
                const n = o(bn, this)[e].slice(0);
                for (let e = 0, r = n.length; e < r; e++)
                    if (n[e].apply(this, t), o(An, this)) {
                        a(An, this, !1);
                        break
                    }
            }
            return this
        })), h(this, "halt", (() => (a(An, this, !0), this))), h(this, "on", ((e, t, n) => {
            const r = [].concat(e);
            for (let i = 0, s = r.length; i < s; i++) {
                const e = r[i];
                if (!e) throw new Error("Tried to listen for an undefined event.");
                o(bn, this)[e] || (o(bn, this)[e] = []), n ? o(bn, this)[e].unshift(t) : o(bn, this)[e].push(t)
            }
            return this
        })), h(this, "once", ((e, t, n) => {
            const r = (...n) => {
                this.off(e, r), t.apply(this, n)
            };
            return r.handler = t, this.on(e, r, n)
        })), h(this, "off", ((e, t) => {
            if (!e) return a(bn, this, Object.create(null)), this;
            const n = [].concat(e);
            for (let r = 0, i = n.length; r < i; r++) {
                const e = n[r];
                if (!e) throw new Error("Tried to remove an undefined event.");
                if (e in o(bn, this)) {
                    const n = o(bn, this)[e];
                    if (t) {
                        let r = n.indexOf(t);
                        if (-1 === r)
                            for (let e = 0, i = n.length; e < i; e++)
                                if (n[e].handler === t) {
                                    r = e;
                                    break
                                }
                        if (-1 === r) return this;
                        n.splice(r, 1), 0 === n.length && delete o(bn, this)[e]
                    } else delete o(bn, this)[e]
                }
            }
            return this
        })), h(this, "prependOn", ((e, t) => this.on(e, t, !0)))
    }
    return e.extend = function(t) {
        return Object.assign(t, new e), t
    }, e
}();

function In(e) {
    var t = this.__data__ = new jt(e);
    this.size = t.size
}
In.prototype.clear = function() {
    this.__data__ = new jt, this.size = 0
}, In.prototype.delete = function(e) {
    var t = this.__data__,
        n = t.delete(e);
    return this.size = t.size, n
}, In.prototype.get = function(e) {
    return this.__data__.get(e)
}, In.prototype.has = function(e) {
    return this.__data__.has(e)
}, In.prototype.set = function(e, t) {
    var n = this.__data__;
    if (n instanceof jt) {
        var r = n.__data__;
        if (!Vt || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new Ht(r)
    }
    return n.set(e, t), this.size = n.size, this
};
var Rn = function() {
    try {
        var e = Ot(Object, "defineProperty");
        return e({}, "", {}), e
    } catch (Np) {}
}();

function kn(e, t, n) {
    "__proto__" == t && Rn ? Rn(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
var Pn = Object.prototype.hasOwnProperty;

function Dn(e, t, n) {
    var r = e[t];
    Pn.call(e, t) && xt(r, n) && (void 0 !== n || t in e) || kn(e, t, n)
}

function On(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s;) {
        var a = t[o],
            u = r ? r(n[a], e[a], a, n, e) : void 0;
        void 0 === u && (u = e[a]), i ? kn(n, a, u) : Dn(n, a, u)
    }
    return n
}

function Ln(e) {
    return _t(e) && "[object Arguments]" == pt(e)
}
var Cn = Object.prototype,
    Nn = Cn.hasOwnProperty,
    Mn = Cn.propertyIsEnumerable,
    xn = Ln(function() {
        return arguments
    }()) ? Ln : function(e) {
        return _t(e) && Nn.call(e, "callee") && !Mn.call(e, "callee")
    },
    Un = "object" == typeof exports && exports && !exports.nodeType && exports,
    Fn = Un && "object" == typeof module && module && !module.nodeType && module,
    jn = Fn && Fn.exports === Un ? st.Buffer : void 0,
    Vn = (jn ? jn.isBuffer : void 0) || function() {
        return !1
    },
    Bn = /^(?:0|[1-9]\d*)$/;

function Hn(e, t) {
    var n = typeof e;
    return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && Bn.test(e)) && e > -1 && e % 1 == 0 && e < t
}

function Xn(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
}
var Wn = {};

function qn(e) {
    return function(t) {
        return e(t)
    }
}
Wn["[object Float32Array]"] = Wn["[object Float64Array]"] = Wn["[object Int8Array]"] = Wn["[object Int16Array]"] = Wn["[object Int32Array]"] = Wn["[object Uint8Array]"] = Wn["[object Uint8ClampedArray]"] = Wn["[object Uint16Array]"] = Wn["[object Uint32Array]"] = !0, Wn["[object Arguments]"] = Wn["[object Array]"] = Wn["[object ArrayBuffer]"] = Wn["[object Boolean]"] = Wn["[object DataView]"] = Wn["[object Date]"] = Wn["[object Error]"] = Wn["[object Function]"] = Wn["[object Map]"] = Wn["[object Number]"] = Wn["[object Object]"] = Wn["[object RegExp]"] = Wn["[object Set]"] = Wn["[object String]"] = Wn["[object WeakMap]"] = !1;
var Gn = "object" == typeof exports && exports && !exports.nodeType && exports,
    Kn = Gn && "object" == typeof module && module && !module.nodeType && module,
    Yn = Kn && Kn.exports === Gn && it.process,
    $n = function() {
        try {
            return Kn && Kn.require && Kn.require("util").types || Yn && Yn.binding && Yn.binding("util")
        } catch (Np) {}
    }(),
    zn = $n && $n.isTypedArray,
    Qn = zn ? qn(zn) : function(e) {
        return _t(e) && Xn(e.length) && !!Wn[pt(e)]
    },
    Jn = Object.prototype.hasOwnProperty;

function Zn(e, t) {
    var n = rt(e),
        r = !n && xn(e),
        i = !n && !r && Vn(e),
        o = !n && !r && !i && Qn(e),
        s = n || r || i || o,
        a = s ? function(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }(e.length, String) : [],
        u = a.length;
    for (var c in e) !t && !Jn.call(e, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Hn(c, u)) || a.push(c);
    return a
}
var er = Object.prototype;

function tr(e) {
    var t = e && e.constructor;
    return e === ("function" == typeof t && t.prototype || er)
}

function nr(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var rr = nr(Object.keys, Object),
    ir = Object.prototype.hasOwnProperty;

function or(e) {
    if (!tr(e)) return rr(e);
    var t = [];
    for (var n in Object(e)) ir.call(e, n) && "constructor" != n && t.push(n);
    return t
}

function sr(e) {
    return null != e && Xn(e.length) && !Et(e)
}

function ar(e) {
    return sr(e) ? Zn(e) : or(e)
}
var ur = Object.prototype.hasOwnProperty;

function cr(e) {
    return sr(e) ? Zn(e, !0) : function(e) {
        if (!yt(e)) return function(e) {
            var t = [];
            if (null != e)
                for (var n in Object(e)) t.push(n);
            return t
        }(e);
        var t = tr(e),
            n = [];
        for (var r in e)("constructor" != r || !t && ur.call(e, r)) && n.push(r);
        return n
    }(e)
}
var lr = "object" == typeof exports && exports && !exports.nodeType && exports,
    dr = lr && "object" == typeof module && module && !module.nodeType && module,
    hr = dr && dr.exports === lr ? st.Buffer : void 0,
    fr = hr ? hr.allocUnsafe : void 0;

function pr(e, t) {
    if (t) return e.slice();
    var n = e.length,
        r = fr ? fr(n) : new e.constructor(n);
    return e.copy(r), r
}

function _r(e, t) {
    var n = -1,
        r = e.length;
    for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
    return t
}

function mr() {
    return []
}
var vr = Object.prototype.propertyIsEnumerable,
    gr = Object.getOwnPropertySymbols,
    yr = gr ? function(e) {
        return null == e ? [] : (e = Object(e), function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
                var s = e[n];
                t(s) && (o[i++] = s)
            }
            return o
        }(gr(e), (function(t) {
            return vr.call(e, t)
        })))
    } : mr;

function Er(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
    return e
}
var Tr = nr(Object.getPrototypeOf, Object),
    Sr = Object.getOwnPropertySymbols ? function(e) {
        for (var t = []; e;) Er(t, yr(e)), e = Tr(e);
        return t
    } : mr;

function br(e, t, n) {
    var r = t(e);
    return rt(e) ? r : Er(r, n(e))
}

function Ar(e) {
    return br(e, ar, yr)
}

function wr(e) {
    return br(e, cr, Sr)
}
var Ir = Ot(st, "DataView"),
    Rr = Ot(st, "Promise"),
    kr = Ot(st, "Set"),
    Pr = Ot(st, "WeakMap"),
    Dr = "[object Map]",
    Or = "[object Promise]",
    Lr = "[object Set]",
    Cr = "[object WeakMap]",
    Nr = "[object DataView]",
    Mr = At(Ir),
    xr = At(Vt),
    Ur = At(Rr),
    Fr = At(kr),
    jr = At(Pr),
    Vr = pt;
(Ir && Vr(new Ir(new ArrayBuffer(1))) != Nr || Vt && Vr(new Vt) != Dr || Rr && Vr(Rr.resolve()) != Or || kr && Vr(new kr) != Lr || Pr && Vr(new Pr) != Cr) && (Vr = function(e) {
    var t = pt(e),
        n = "[object Object]" == t ? e.constructor : void 0,
        r = n ? At(n) : "";
    if (r) switch (r) {
        case Mr:
            return Nr;
        case xr:
            return Dr;
        case Ur:
            return Or;
        case Fr:
            return Lr;
        case jr:
            return Cr
    }
    return t
});
var Br = Vr,
    Hr = Object.prototype.hasOwnProperty,
    Xr = st.Uint8Array;

function Wr(e) {
    var t = new e.constructor(e.byteLength);
    return new Xr(t).set(new Xr(e)), t
}
var qr = /\w*$/,
    Gr = at ? at.prototype : void 0,
    Kr = Gr ? Gr.valueOf : void 0;

function Yr(e, t) {
    var n = t ? Wr(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length)
}
var $r = Object.create,
    zr = function() {
        function e() {}
        return function(t) {
            if (!yt(t)) return {};
            if ($r) return $r(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = void 0, n
        }
    }();

function Qr(e) {
    return "function" != typeof e.constructor || tr(e) ? {} : zr(Tr(e))
}
var Jr = $n && $n.isMap,
    Zr = Jr ? qn(Jr) : function(e) {
        return _t(e) && "[object Map]" == Br(e)
    },
    ei = $n && $n.isSet,
    ti = ei ? qn(ei) : function(e) {
        return _t(e) && "[object Set]" == Br(e)
    },
    ni = "[object Arguments]",
    ri = "[object Function]",
    ii = "[object Object]",
    oi = {};

function si(e, t, n, r, i, o) {
    var s, a = 1 & t,
        u = 2 & t,
        c = 4 & t;
    if (n && (s = i ? n(e, r, i, o) : n(e)), void 0 !== s) return s;
    if (!yt(e)) return e;
    var l = rt(e);
    if (l) {
        if (s = function(e) {
                var t = e.length,
                    n = new e.constructor(t);
                return t && "string" == typeof e[0] && Hr.call(e, "index") && (n.index = e.index, n.input = e.input), n
            }(e), !a) return _r(e, s)
    } else {
        var d = Br(e),
            h = d == ri || "[object GeneratorFunction]" == d;
        if (Vn(e)) return pr(e, a);
        if (d == ii || d == ni || h && !i) {
            if (s = u || h ? {} : Qr(e), !a) return u ? function(e, t) {
                return On(e, Sr(e), t)
            }(e, function(e, t) {
                return e && On(t, cr(t), e)
            }(s, e)) : function(e, t) {
                return On(e, yr(e), t)
            }(e, function(e, t) {
                return e && On(t, ar(t), e)
            }(s, e))
        } else {
            if (!oi[d]) return i ? e : {};
            s = function(e, t, n) {
                var r = e.constructor;
                switch (t) {
                    case "[object ArrayBuffer]":
                        return Wr(e);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new r(+e);
                    case "[object DataView]":
                        return function(e, t) {
                            var n = t ? Wr(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.byteLength)
                        }(e, n);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return Yr(e, n);
                    case "[object Map]":
                    case "[object Set]":
                        return new r;
                    case "[object Number]":
                    case "[object String]":
                        return new r(e);
                    case "[object RegExp]":
                        return function(e) {
                            var t = new e.constructor(e.source, qr.exec(e));
                            return t.lastIndex = e.lastIndex, t
                        }(e);
                    case "[object Symbol]":
                        return function(e) {
                            return Kr ? Object(Kr.call(e)) : {}
                        }(e)
                }
            }(e, d, a)
        }
    }
    o || (o = new In);
    var f = o.get(e);
    if (f) return f;
    o.set(e, s), ti(e) ? e.forEach((function(r) {
        s.add(si(r, t, n, r, e, o))
    })) : Zr(e) && e.forEach((function(r, i) {
        s.set(i, si(r, t, n, i, e, o))
    }));
    var p = l ? void 0 : (c ? u ? wr : Ar : u ? cr : ar)(e);
    return function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n););
    }(p || e, (function(r, i) {
        p && (r = e[i = r]), Dn(s, i, si(r, t, n, i, e, o))
    })), s
}

function ai(e) {
    return si(e, 5)
}

function ui(e, t, n) {
    switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
    }
    return e.apply(t, n)
}

function ci(e) {
    return e
}
oi[ni] = oi["[object Array]"] = oi["[object ArrayBuffer]"] = oi["[object DataView]"] = oi["[object Boolean]"] = oi["[object Date]"] = oi["[object Float32Array]"] = oi["[object Float64Array]"] = oi["[object Int8Array]"] = oi["[object Int16Array]"] = oi["[object Int32Array]"] = oi["[object Map]"] = oi["[object Number]"] = oi[ii] = oi["[object RegExp]"] = oi["[object Set]"] = oi["[object String]"] = oi["[object Symbol]"] = oi["[object Uint8Array]"] = oi["[object Uint8ClampedArray]"] = oi["[object Uint16Array]"] = oi["[object Uint32Array]"] = !0, oi["[object Error]"] = oi[ri] = oi["[object WeakMap]"] = !1;
var li = Math.max;

function di(e, t, n) {
    return t = li(void 0 === t ? e.length - 1 : t, 0),
        function() {
            for (var r = arguments, i = -1, o = li(r.length - t, 0), s = Array(o); ++i < o;) s[i] = r[t + i];
            i = -1;
            for (var a = Array(t + 1); ++i < t;) a[i] = r[i];
            return a[t] = n(s), ui(e, this, a)
        }
}

function hi(e) {
    return function() {
        return e
    }
}
var fi = Rn ? function(e, t) {
        return Rn(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: hi(t),
            writable: !0
        })
    } : ci,
    pi = Date.now,
    _i = function(e) {
        var t = 0,
            n = 0;
        return function() {
            var r = pi(),
                i = 16 - (r - n);
            if (n = r, i > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }(fi);

function mi(e, t) {
    return _i(di(e, t, ci), e + "")
}

function vi(e, t, n) {
    (void 0 !== n && !xt(e[t], n) || void 0 === n && !(t in e)) && kn(e, t, n)
}
var gi = function(e, t, n) {
        for (var r = -1, i = Object(e), o = n(e), s = o.length; s--;) {
            var a = o[++r];
            if (!1 === t(i[a], a, i)) break
        }
        return e
    },
    yi = Function.prototype,
    Ei = Object.prototype,
    Ti = yi.toString,
    Si = Ei.hasOwnProperty,
    bi = Ti.call(Object);

function Ai(e) {
    if (!_t(e) || "[object Object]" != pt(e)) return !1;
    var t = Tr(e);
    if (null === t) return !0;
    var n = Si.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n instanceof n && Ti.call(n) == bi
}

function wi(e, t) {
    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
}

function Ii(e, t, n, r, i) {
    e !== t && gi(t, (function(o, s) {
        if (i || (i = new In), yt(o)) ! function(e, t, n, r, i, o, s) {
            var a = wi(e, n),
                u = wi(t, n),
                c = s.get(u);
            if (c) vi(e, n, c);
            else {
                var l = o ? o(a, u, n + "", e, t, s) : void 0,
                    d = void 0 === l;
                if (d) {
                    var h = rt(u),
                        f = !h && Vn(u),
                        p = !h && !f && Qn(u);
                    l = u, h || f || p ? rt(a) ? l = a : function(e) {
                        return _t(e) && sr(e)
                    }(a) ? l = _r(a) : f ? (d = !1, l = pr(u, !0)) : p ? (d = !1, l = Yr(u, !0)) : l = [] : Ai(u) || xn(u) ? (l = a, xn(a) ? l = function(e) {
                        return On(e, cr(e))
                    }(a) : yt(a) && !Et(a) || (l = Qr(u))) : d = !1
                }
                d && (s.set(u, l), i(l, u, r, o, s), s.delete(u)), vi(e, n, l)
            }
        }(e, t, s, n, Ii, r, i);
        else {
            var a = r ? r(wi(e, s), o, s + "", e, t, i) : void 0;
            void 0 === a && (a = o), vi(e, s, a)
        }
    }), cr)
}

function Ri(e, t, n, r, i, o) {
    return yt(e) && yt(t) && (o.set(t, e), Ii(e, t, void 0, Ri, o), o.delete(t)), e
}

function ki(e) {
    return mi((function(t, n) {
        var r = -1,
            i = n.length,
            o = i > 1 ? n[i - 1] : void 0,
            s = i > 2 ? n[2] : void 0;
        for (o = e.length > 3 && "function" == typeof o ? (i--, o) : void 0, s && function(e, t, n) {
                if (!yt(n)) return !1;
                var r = typeof t;
                return !!("number" == r ? sr(n) && Hn(t, n.length) : "string" == r && t in n) && xt(n[t], e)
            }(n[0], n[1], s) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++r < i;) {
            var a = n[r];
            a && e(t, a, r, o)
        }
        return t
    }))
}
var Pi = ki((function(e, t, n, r) {
        Ii(e, t, n, r)
    })),
    Di = mi((function(e) {
        return e.push(void 0, Ri), ui(Pi, void 0, e)
    }));
let Oi = function(e) {
    function t(t) {
        var n;
        return (n = e.call(this) || this)._available = !1, n._active = !1, n._video = t, n
    }
    p(t, e);
    var n = t.prototype;
    return n.showPicker = function() {}, n.getFile = function() {
        const e = this.constructor.displayName.replace("ExternalDisplay", "");
        if (this._video.externalDisplayFiles[e]) return this._video.externalDisplayFiles[e];
        const t = this.constructor.supportedVideoTypes,
            n = this._video.files.filter((e => -1 !== t.indexOf(e.mime))).sort(((e, n) => e.mime === n.mime ? e.priority - n.priority : t.indexOf(e.mime) - t.indexOf(n.mime)));
        if (!n.length) throw new Error(`No files available for ${this.constructor.displayName} external display.`);
        return n[0]
    }, l(t, [{
        key: "active",
        get: function() {
            return this._active
        }
    }, {
        key: "available",
        get: function() {
            return this._available
        }
    }, {
        key: "element",
        get: function() {
            return document.createElement("div")
        }
    }], [{
        key: "displayName",
        get: function() {
            return "ExternalDisplay"
        }
    }, {
        key: "supported",
        get: function() {
            return !1
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return []
        }
    }])
}(wn);
const Li = {
        ABORT: "abort",
        CAN_PLAY: "canplay",
        CAN_PLAY_THROUGH: "canplaythrough",
        DURATION_CHANGE: "durationchange",
        EMPTIED: "emptied",
        ENDED: "ended",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        ERROR: "error",
        LOADED_DATA: "loadeddata",
        LOADED_METADATA: "loadedmetadata",
        LOAD_START: "loadstart",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PROGRESS: "progress",
        RATE_CHANGE: "ratechange",
        RESIZE: "resize",
        SEEKED: "seeked",
        SEEKING: "seeking",
        STALLED: "stalled",
        SUSPEND: "suspend",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting",
        WEBKIT_BEGIN_FULLSCREEN: "webkitbeginfullscreen",
        WEBKIT_END_FULLSCREEN: "webkitendfullscreen",
        WEBKIT_PRESENTATION_MODE_CHANGED: "webkitpresentationmodechanged"
    },
    Ci = {
        ADD_TRACK: "addtrack",
        REMOVE_TRACK: "removetrack",
        CHANGE: "change"
    },
    Ni = {
        AVAILABLE: "externaldisplayavailable",
        UNAVAILABLE: "externaldisplayunavailable",
        ACTIVATED: "externaldisplayactivated",
        DEACTIVATED: "externaldisplaydeactivated"
    },
    Mi = {
        AIRPLAY_AVAILABLE: "available",
        AIRPLAY_UNAVAILABLE: "unavailable",
        AIRPLAY_ACTIVATED: "activated",
        AIRPLAY_DEACTIVATED: "deactivated"
    },
    xi = {
        SCANNER_CHANGE: "scannerchange",
        SCANNER_ERROR: "scannererror",
        FILE_ERROR: "fileerror",
        FILE_SRC_UPDATE: "filesrcupdate",
        DOWNLOAD_START: "downloadstart",
        DOWNLOAD_END: "downloadend",
        DOWNLOAD_ERROR: "downloaderror",
        DOWNLOAD_TIMEOUT: "downloadtimeout",
        DRM_AUTH_FAILURE: "drmauthfailure",
        DRM_AUTH_SUCCESS: "drmauthsuccess",
        DRM_FAILURE: "drmfailure",
        DRM_KEY_SWITCH: "drmkeyswitch",
        DRM_OUTPUT_RESTRICTED: "drmoutputrestricted",
        EME_UNSUPPORTED: "emeunsupported",
        CURRENT_FILE_CHANGE: "currentfilechange",
        MEDIA_URL_EXPIRED: "mediaurlexpired",
        MEDIA_URL_BAD_REQUEST: "mediaurlbadrequest",
        STREAM_CHANGE: "streamchange",
        STREAM_CHANGE_START: "streamchangestart",
        STREAM_UPDATED: "streamupdated",
        STREAM_BUFFER_START: "streambufferstart",
        STREAM_BUFFER_END: "streambufferend",
        AVAILABLE_STREAMS_CHANGED: "availablestreamschanged",
        MEDIA_CAPABILITY_STREAMS_UNSUPPORTED: "mediacapabilitystreamsunsupported",
        DROPPED_FRAMES: "droppedframes",
        BANDWIDTH: "bandwidth",
        STREAM_TARGET_CHANGE: "streamtargetchange",
        CUE_POINT: "cuepoint",
        BUFFER_OCCUPANCY: "bufferoccupancy",
        MANIFEST_TIMEOUT: "manifesttimeout",
        MANIFEST_LOADED: "manifestloaded",
        STREAMS_LOADED: "streamsloaded",
        TEXT_SRC_UPDATE: "texttracksrcupdate",
        TEXT_TRACKS_AVAILABLE: "texttracksavailable",
        AV_DURATION_MISMATCH: "avdurationmismatch",
        BUFFER_STARTED: "bufferstarted",
        BUFFER_ENDED: "bufferended",
        QUOTA_EXCEEDED_ERROR: "quotaexceedederror",
        CHAPTER_CUES_UPDATED: "chaptercuesupdated",
        APPEND_BUFFER_END: "appendbufferend",
        DROPPED_FRAME_PERCENT_EXCEEDED: "droppedframepercentexceeded",
        LOAD_SEGMENT_FAILED: "loadsegmentfailed",
        AUDIO_TRACK_CHANGED: "audiotrackchanged",
        SEGMENT_CUES_LOADED: "segmentcuesloaded"
    },
    Ui = {
        STREAM_ONLINE: "livestreamonline",
        STREAM_OFFLINE: "livestreamoffline",
        BUFFER_GAP_JUMP: "livebuffergapjump",
        BUFFER_GAP_JUMP_PREVENT: "livebuffergapjumpprevent",
        STALL_JUMP: "livestalljump",
        LATENCY_UPDATED: "latencyupdated"
    },
    Fi = {
        CAMERA_UPDATE: "cameraupdate",
        CAMERA_CHANGE: "camerachange",
        MOTION_START: "motionstart",
        MOTION_END: "motionend",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        WEBVR_ENTER: "entervr",
        WEBVR_EXIT: "exitvr",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
        AMBISONIC_UNSUPPORTED: "ambisonicunsupported"
    },
    ji = {
        MEDIASESSION_PLAY: "mediasessionplay",
        MEDIASESSION_PAUSE: "mediasessionpause",
        MEDIASESSION_SEEK_FORWARD: "mediasessionseekforward",
        MEDIASESSION_SEEK_TO: "mediasessionseekto",
        MEDIASESSION_SEEK_BACKWARD: "mediasessionseekbackward"
    },
    Vi = Object.assign({}, Li, Ci, Ni, Mi, xi, Fi, Ui, ji);
var Bi = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function Hi(e, t, n) {
    return e(n = {
        path: t,
        exports: {},
        require: function(e, t) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(null == t && n.path)
        }
    }, n.exports), n.exports
}
var Xi = Hi((function(e, t) {
    /*! For license information please see hls-parser.min.js.LICENSE.txt */
    self,
    e.exports = function() {
        return e = {
                851: (e, t, n) => {
                    var r = n(771),
                        i = r.getOptions,
                        o = r.setOptions,
                        s = n(463),
                        a = n(367),
                        u = n(890);
                    e.exports = {
                        parse: s,
                        stringify: a,
                        types: u,
                        getOptions: i,
                        setOptions: o
                    }
                },
                463: (e, t, n) => {
                    function r(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var s, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, s = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (u) throw s
                                }
                            }
                        }
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || o(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function o(e, t) {
                        if (e) {
                            if ("string" == typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                        }
                    }

                    function s(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    var a = n(771),
                        u = n(890),
                        c = u.Rendition,
                        l = u.Variant,
                        d = u.SessionData,
                        h = u.Key,
                        f = u.MediaInitializationSection,
                        p = u.DateRange,
                        _ = u.SpliceInfo,
                        m = u.MasterPlaylist,
                        v = u.MediaPlaylist,
                        g = u.Segment,
                        y = u.PartialSegment,
                        E = u.RenditionReport;

                    function T(e) {
                        return a.trim(e, '"')
                    }

                    function S(e) {
                        var t = a.splitAt(e, ",");
                        return {
                            duration: a.toNumber(t[0]),
                            title: decodeURIComponent(escape(t[1]))
                        }
                    }

                    function b(e) {
                        var t = a.splitAt(e, "@");
                        return {
                            length: a.toNumber(t[0]),
                            offset: t[1] ? a.toNumber(t[1]) : -1
                        }
                    }

                    function A(e, t) {
                        t.IV && e.compatibleVersion < 2 && (e.compatibleVersion = 2), (t.KEYFORMAT || t.KEYFORMATVERSIONS) && e.compatibleVersion < 5 && (e.compatibleVersion = 5)
                    }

                    function w(e) {
                        var t = a.splitByCommaWithPreservingQuotes(e),
                            n = {};
                        return t.forEach((function(e) {
                            var t, r, o = i(a.splitAt(e, "="), 2),
                                s = o[0],
                                u = o[1],
                                c = T(u);
                            switch (s) {
                                case "URI":
                                    n[s] = c;
                                    break;
                                case "START-DATE":
                                case "END-DATE":
                                    n[s] = new Date(c);
                                    break;
                                case "IV":
                                    n[s] = (t = c, 16 !== (r = a.hexToByteSequence(t)).length && a.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), r);
                                    break;
                                case "BYTERANGE":
                                    n[s] = b(c);
                                    break;
                                case "RESOLUTION":
                                    n[s] = function(e) {
                                        var t = a.splitAt(e, "x");
                                        return {
                                            width: a.toNumber(t[0]),
                                            height: a.toNumber(t[1])
                                        }
                                    }(c);
                                    break;
                                case "END-ON-NEXT":
                                case "DEFAULT":
                                case "AUTOSELECT":
                                case "FORCED":
                                case "PRECISE":
                                case "CAN-BLOCK-RELOAD":
                                case "INDEPENDENT":
                                case "GAP":
                                    n[s] = "YES" === c;
                                    break;
                                case "DURATION":
                                case "PLANNED-DURATION":
                                case "BANDWIDTH":
                                case "AVERAGE-BANDWIDTH":
                                case "FRAME-RATE":
                                case "TIME-OFFSET":
                                case "CAN-SKIP-UNTIL":
                                case "HOLD-BACK":
                                case "PART-HOLD-BACK":
                                case "PART-TARGET":
                                case "BYTERANGE-START":
                                case "BYTERANGE-LENGTH":
                                case "LAST-MSN":
                                case "LAST-PART":
                                case "SKIPPED-SEGMENTS":
                                    n[s] = a.toNumber(c);
                                    break;
                                default:
                                    s.startsWith("SCTE35-") ? n[s] = a.hexToByteSequence(c) : s.startsWith("X-") ? n[s] = function(e) {
                                        return e.startsWith('"') ? T(e) : e.startsWith("0x") || e.startsWith("0X") ? a.hexToByteSequence(e) : a.toNumber(e)
                                    }(u) : n[s] = c
                            }
                        })), n
                    }

                    function I() {
                        a.INVALIDPLAYLIST("The file contains both media and master playlist tags.")
                    }

                    function R(e, t, n) {
                        var i, o = (i = t.attributes, new c({
                                type: i.TYPE,
                                uri: i.URI,
                                groupId: i["GROUP-ID"],
                                language: i.LANGUAGE,
                                assocLanguage: i["ASSOC-LANGUAGE"],
                                name: i.NAME,
                                isDefault: i.DEFAULT,
                                autoselect: i.AUTOSELECT,
                                forced: i.FORCED,
                                instreamId: i["INSTREAM-ID"],
                                characteristics: i.CHARACTERISTICS,
                                channels: i.CHANNELS
                            })),
                            s = e[a.camelify(n)],
                            u = function(e, t) {
                                var n, i = !1,
                                    o = r(e);
                                try {
                                    for (o.s(); !(n = o.n()).done;) {
                                        var s = n.value;
                                        if (s.name === t.name) return "All EXT-X-MEDIA tags in the same Group MUST have different NAME attributes.";
                                        s.isDefault && (i = !0)
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                                return i && t.isDefault ? "EXT-X-MEDIA A Group MUST NOT have more than one member with a DEFAULT attribute of YES." : ""
                            }(s, o);
                        u && a.INVALIDPLAYLIST(u), s.push(o), o.isDefault && (e.currentRenditions[a.camelify(n)] = s.length - 1)
                    }

                    function k(e, t, n, i, o) {
                        var s, u = new l({
                                uri: n,
                                bandwidth: t.BANDWIDTH,
                                averageBandwidth: t["AVERAGE-BANDWIDTH"],
                                codecs: t.CODECS,
                                resolution: t.RESOLUTION,
                                frameRate: t["FRAME-RATE"],
                                hdcpLevel: t["HDCP-LEVEL"]
                            }),
                            c = r(e);
                        try {
                            for (c.s(); !(s = c.n()).done;) {
                                var d = s.value;
                                if ("EXT-X-MEDIA" === d.name) {
                                    var h = d.attributes,
                                        f = h.TYPE;
                                    if (f && h["GROUP-ID"] || a.INVALIDPLAYLIST("EXT-X-MEDIA TYPE attribute is REQUIRED."), t[f] === h["GROUP-ID"] && (R(u, d, f), "CLOSED-CAPTIONS" === f)) {
                                        var p, _ = r(u.closedCaptions);
                                        try {
                                            for (_.s(); !(p = _.n()).done;) {
                                                var m = p.value.instreamId;
                                                if (m && m.startsWith("SERVICE") && o.compatibleVersion < 7) {
                                                    o.compatibleVersion = 7;
                                                    break
                                                }
                                            }
                                        } catch (e) {
                                            _.e(e)
                                        } finally {
                                            _.f()
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        return function(e, t, n) {
                            ["AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((function(r) {
                                "CLOSED-CAPTIONS" === r && "NONE" === e[r] ? (n.isClosedCaptionsNone = !0, t.closedCaptions = []) : e[r] && !t[a.camelify(r)].find((function(t) {
                                    return t.groupId === e[r]
                                })) && a.INVALIDPLAYLIST("".concat(r, " attribute MUST match the value of the GROUP-ID attribute of an EXT-X-MEDIA tag whose TYPE attribute is ").concat(r, "."))
                            }))
                        }(t, u, o), u.isIFrameOnly = i, u
                    }

                    function P(e, t) {
                        if (e.method !== t.method) return !1;
                        if (e.uri !== t.uri) return !1;
                        if (e.iv) {
                            if (!t.iv) return !1;
                            if (e.iv.length !== t.iv.length) return !1;
                            for (var n = 0; n < e.iv.length; n++)
                                if (e.iv[n] !== t.iv[n]) return !1
                        } else if (t.iv) return !1;
                        return e.format === t.format && e.formatVersion === t.formatVersion
                    }

                    function D(e, t, n, r, i, o, s) {
                        for (var u = new g({
                                uri: t,
                                mediaSequenceNumber: i,
                                discontinuitySequence: o
                            }), c = !1, l = !1, d = function(t) {
                                var n = e[t],
                                    r = n.name,
                                    i = n.value,
                                    o = n.attributes;
                                if ("EXTINF" === r) !Number.isInteger(i.duration) && s.compatibleVersion < 3 && (s.compatibleVersion = 3), Math.round(i.duration) > s.targetDuration && a.INVALIDPLAYLIST("EXTINF duration, when rounded to the nearest integer, MUST be less than or equal to the target duration"), u.duration = i.duration, u.title = i.title;
                                else if ("EXT-X-BYTERANGE" === r) s.compatibleVersion < 4 && (s.compatibleVersion = 4), u.byterange = i;
                                else if ("EXT-X-DISCONTINUITY" === r) u.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-DISCONTINUITY must appear before the first EXT-X-PART tag of the Parent Segment."), u.discontinuity = !0;
                                else if ("EXT-X-KEY" === r) u.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-KEY must appear before the first EXT-X-PART tag of the Parent Segment."), A(s, o), u.key = new h({
                                    method: o.METHOD,
                                    uri: o.URI,
                                    iv: o.IV,
                                    format: o.KEYFORMAT,
                                    formatVersion: o.KEYFORMATVERSIONS
                                });
                                else if ("EXT-X-MAP" === r) u.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-MAP must appear before the first EXT-X-PART tag of the Parent Segment."), s.compatibleVersion < 5 && (s.compatibleVersion = 5), s.hasMap = !0, u.map = new f({
                                    uri: o.URI,
                                    byterange: o.BYTERANGE
                                });
                                else if ("EXT-X-PROGRAM-DATE-TIME" === r) u.programDateTime = i;
                                else if ("EXT-X-DATERANGE" === r) {
                                    var d = {};
                                    Object.keys(o).forEach((function(e) {
                                        (e.startsWith("SCTE35-") || e.startsWith("X-")) && (d[e] = o[e])
                                    })), u.dateRange = new p({
                                        id: o.ID,
                                        classId: o.CLASS,
                                        start: o["START-DATE"],
                                        end: o["END-DATE"],
                                        duration: o.DURATION,
                                        plannedDuration: o["PLANNED-DURATION"],
                                        endOnNext: o["END-ON-NEXT"],
                                        attributes: d
                                    })
                                } else if ("EXT-X-CUE-OUT" === r) u.markers.push(new _({
                                    type: "OUT",
                                    duration: i
                                }));
                                else if ("EXT-X-CUE-IN" === r) u.markers.push(new _({
                                    type: "IN"
                                }));
                                else if ("EXT-X-CUE-OUT-CONT" === r || "EXT-X-CUE" === r || "EXT-OATCLS-SCTE35" === r || "EXT-X-ASSET" === r || "EXT-X-SCTE35" === r) u.markers.push(new _({
                                    type: "RAW",
                                    tagName: r,
                                    value: i
                                }));
                                else if ("EXT-X-PRELOAD-HINT" !== r || o.TYPE)
                                    if ("EXT-X-PRELOAD-HINT" === r && "PART" === o.TYPE && l) a.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist.");
                                    else if ("EXT-X-PART" !== r && "EXT-X-PRELOAD-HINT" !== r || o.URI) {
                                    if ("EXT-X-PRELOAD-HINT" === r && "MAP" === o.TYPE) c && a.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist."), c = !0, s.hasMap = !0, u.map = new f({
                                        hint: !0,
                                        uri: o.URI,
                                        byterange: {
                                            length: o["BYTERANGE-LENGTH"],
                                            offset: o["BYTERANGE-START"] || 0
                                        }
                                    });
                                    else if ("EXT-X-PART" === r || "EXT-X-PRELOAD-HINT" === r && "PART" === o.TYPE) {
                                        "EXT-X-PART" !== r || o.DURATION || a.INVALIDPLAYLIST("EXT-X-PART: DURATION attribute is mandatory"), "EXT-X-PRELOAD-HINT" === r && (l = !0);
                                        var m = new y({
                                            hint: "EXT-X-PRELOAD-HINT" === r,
                                            uri: o.URI,
                                            byterange: "EXT-X-PART" === r ? o.BYTERANGE : {
                                                length: o["BYTERANGE-LENGTH"],
                                                offset: o["BYTERANGE-START"] || 0
                                            },
                                            duration: o.DURATION,
                                            independent: o.INDEPENDENT,
                                            gap: o.GAP
                                        });
                                        u.parts.push(m)
                                    }
                                } else a.INVALIDPLAYLIST("EXT-X-PART / EXT-X-PRELOAD-HINT: URI attribute is mandatory");
                                else a.INVALIDPLAYLIST("EXT-X-PRELOAD-HINT: TYPE attribute is mandatory")
                            }, m = n; m <= r; m++) d(m);
                        return u
                    }

                    function O(e, t, n, r, i) {
                        var o = t.discontinuity,
                            s = t.key,
                            u = t.map,
                            c = t.byterange,
                            l = t.uri;
                        if (o && (t.discontinuitySequence = n + 1), s || (t.key = r), u || (t.map = i), c && -1 === c.offset) {
                            var d = e.segments;
                            if (d.length > 0) {
                                var h = d[d.length - 1];
                                h.byterange && h.uri === l ? c.offset = h.byterange.offset + h.byterange.length : a.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST be a sub-range of the same media resource")
                            } else a.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST appear in the Playlist file")
                        }
                        return e.segments.push(t), [t.discontinuitySequence, t.key, t.map]
                    }

                    function L(e, t) {
                        var n = i(function(e) {
                                var t = e.indexOf(":");
                                return -1 === t ? [e.slice(1).trim(), null] : [e.slice(1, t).trim(), e.slice(t + 1).trim()]
                            }(e), 2),
                            r = n[0],
                            o = n[1],
                            s = function(e) {
                                switch (e) {
                                    case "EXTM3U":
                                    case "EXT-X-VERSION":
                                        return "Basic";
                                    case "EXTINF":
                                    case "EXT-X-BYTERANGE":
                                    case "EXT-X-DISCONTINUITY":
                                    case "EXT-X-KEY":
                                    case "EXT-X-MAP":
                                    case "EXT-X-PROGRAM-DATE-TIME":
                                    case "EXT-X-DATERANGE":
                                    case "EXT-X-CUE-OUT":
                                    case "EXT-X-CUE-IN":
                                    case "EXT-X-CUE-OUT-CONT":
                                    case "EXT-X-CUE":
                                    case "EXT-OATCLS-SCTE35":
                                    case "EXT-X-ASSET":
                                    case "EXT-X-SCTE35":
                                    case "EXT-X-PART":
                                    case "EXT-X-PRELOAD-HINT":
                                        return "Segment";
                                    case "EXT-X-TARGETDURATION":
                                    case "EXT-X-MEDIA-SEQUENCE":
                                    case "EXT-X-DISCONTINUITY-SEQUENCE":
                                    case "EXT-X-ENDLIST":
                                    case "EXT-X-PLAYLIST-TYPE":
                                    case "EXT-X-I-FRAMES-ONLY":
                                    case "EXT-X-SERVER-CONTROL":
                                    case "EXT-X-PART-INF":
                                    case "EXT-X-RENDITION-REPORT":
                                    case "EXT-X-SKIP":
                                        return "MediaPlaylist";
                                    case "EXT-X-MEDIA":
                                    case "EXT-X-STREAM-INF":
                                    case "EXT-X-I-FRAME-STREAM-INF":
                                    case "EXT-X-SESSION-DATA":
                                    case "EXT-X-SESSION-KEY":
                                        return "MasterPlaylist";
                                    case "EXT-X-INDEPENDENT-SEGMENTS":
                                    case "EXT-X-START":
                                        return "MediaorMasterPlaylist";
                                    default:
                                        return "Unknown"
                                }
                            }(r);
                        if (function(e, t) {
                                if ("Segment" === e || "MediaPlaylist" === e) return void 0 === t.isMasterPlaylist ? void(t.isMasterPlaylist = !1) : void(t.isMasterPlaylist && I());
                                if ("MasterPlaylist" === e) {
                                    if (void 0 === t.isMasterPlaylist) return void(t.isMasterPlaylist = !0);
                                    !1 === t.isMasterPlaylist && I()
                                }
                            }(s, t), "Unknown" === s) return null;
                        "MediaPlaylist" === s && "EXT-X-RENDITION-REPORT" !== r && (t.hash[r] && a.INVALIDPLAYLIST("There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist"), t.hash[r] = !0);
                        var u = i(function(e, t) {
                            switch (e) {
                                case "EXTM3U":
                                case "EXT-X-DISCONTINUITY":
                                case "EXT-X-ENDLIST":
                                case "EXT-X-I-FRAMES-ONLY":
                                case "EXT-X-INDEPENDENT-SEGMENTS":
                                case "EXT-X-CUE-IN":
                                    return [null, null];
                                case "EXT-X-VERSION":
                                case "EXT-X-TARGETDURATION":
                                case "EXT-X-MEDIA-SEQUENCE":
                                case "EXT-X-DISCONTINUITY-SEQUENCE":
                                case "EXT-X-CUE-OUT":
                                    return [a.toNumber(t), null];
                                case "EXT-X-KEY":
                                case "EXT-X-MAP":
                                case "EXT-X-DATERANGE":
                                case "EXT-X-MEDIA":
                                case "EXT-X-STREAM-INF":
                                case "EXT-X-I-FRAME-STREAM-INF":
                                case "EXT-X-SESSION-DATA":
                                case "EXT-X-SESSION-KEY":
                                case "EXT-X-START":
                                case "EXT-X-SERVER-CONTROL":
                                case "EXT-X-PART-INF":
                                case "EXT-X-PART":
                                case "EXT-X-PRELOAD-HINT":
                                case "EXT-X-RENDITION-REPORT":
                                case "EXT-X-SKIP":
                                    return [null, w(t)];
                                case "EXTINF":
                                    return [S(t), null];
                                case "EXT-X-BYTERANGE":
                                    return [b(t), null];
                                case "EXT-X-PROGRAM-DATE-TIME":
                                    return [new Date(t), null];
                                default:
                                    return [t, null]
                            }
                        }(r, o), 2);
                        return {
                            name: r,
                            category: s,
                            value: u[0],
                            attributes: u[1]
                        }
                    }

                    function C(e, t) {
                        var n;
                        return t.isMasterPlaylist ? n = function(e, t) {
                            var n, o = new m,
                                s = r(e.entries());
                            try {
                                for (s.s(); !(n = s.n()).done;) {
                                    var u = i(n.value, 2),
                                        c = u[0],
                                        l = u[1],
                                        f = l.name,
                                        p = l.value,
                                        _ = l.attributes;
                                    if ("EXT-X-VERSION" === f) o.version = p;
                                    else if ("EXT-X-STREAM-INF" === f) {
                                        var v = e[c + 1];
                                        ("string" != typeof v || v.startsWith("#EXT")) && a.INVALIDPLAYLIST("EXT-X-STREAM-INF must be followed by a URI line");
                                        var g = k(e, _, v, !1, t);
                                        g && o.variants.push(g)
                                    } else if ("EXT-X-I-FRAME-STREAM-INF" === f) {
                                        var y = k(e, _, _.URI, !0, t);
                                        y && o.variants.push(y)
                                    } else "EXT-X-SESSION-DATA" === f ? function() {
                                        var e = new d({
                                            id: _["DATA-ID"],
                                            value: _.VALUE,
                                            uri: _.URI,
                                            language: _.LANGUAGE
                                        });
                                        o.sessionDataList.find((function(t) {
                                            return t.id === e.id && t.language === e.language
                                        })) && a.INVALIDPLAYLIST("A Playlist MUST NOT contain more than one EXT-X-SESSION-DATA tag with the same DATA-ID attribute and the same LANGUAGE attribute."), o.sessionDataList.push(e)
                                    }() : "EXT-X-SESSION-KEY" === f ? function() {
                                        "NONE" === _.METHOD && a.INVALIDPLAYLIST("EXT-X-SESSION-KEY: The value of the METHOD attribute MUST NOT be NONE");
                                        var e = new h({
                                            method: _.METHOD,
                                            uri: _.URI,
                                            iv: _.IV,
                                            format: _.KEYFORMAT,
                                            formatVersion: _.KEYFORMATVERSIONS
                                        });
                                        o.sessionKeyList.find((function(t) {
                                            return P(t, e)
                                        })) && a.INVALIDPLAYLIST("A Master Playlist MUST NOT contain more than one EXT-X-SESSION-KEY tag with the same METHOD, URI, IV, KEYFORMAT, and KEYFORMATVERSIONS attribute values."), A(t, _), o.sessionKeyList.push(e)
                                    }() : "EXT-X-INDEPENDENT-SEGMENTS" === f ? (o.independentSegments && a.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), o.independentSegments = !0) : "EXT-X-START" === f && (o.start && a.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), "number" != typeof _["TIME-OFFSET"] && a.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), o.start = {
                                        offset: _["TIME-OFFSET"],
                                        precise: _.PRECISE || !1
                                    })
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                            if (t.isClosedCaptionsNone) {
                                var E, T = r(o.variants);
                                try {
                                    for (T.s(); !(E = T.n()).done;) E.value.closedCaptions.length > 0 && a.INVALIDPLAYLIST("If there is a variant with CLOSED-CAPTIONS attribute of NONE, all EXT-X-STREAM-INF tags MUST have this attribute with a value of NONE")
                                } catch (e) {
                                    T.e(e)
                                } finally {
                                    T.f()
                                }
                            }
                            return o
                        }(e, t) : !(n = function(e, t) {
                            var n, o = new v,
                                s = -1,
                                u = 0,
                                c = !1,
                                l = 0,
                                d = null,
                                h = null,
                                f = !1,
                                p = r(e.entries());
                            try {
                                for (p.s(); !(n = p.n()).done;) {
                                    var _ = i(n.value, 2),
                                        m = _[0],
                                        g = _[1],
                                        y = g.name,
                                        T = g.value,
                                        S = g.attributes;
                                    if ("Segment" !== g.category) {
                                        if ("EXT-X-VERSION" === y) void 0 === o.version ? o.version = T : a.INVALIDPLAYLIST("A Playlist file MUST NOT contain more than one EXT-X-VERSION tag.");
                                        else if ("EXT-X-TARGETDURATION" === y) o.targetDuration = t.targetDuration = T;
                                        else if ("EXT-X-MEDIA-SEQUENCE" === y) o.segments.length > 0 && a.INVALIDPLAYLIST("The EXT-X-MEDIA-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), o.mediaSequenceBase = u = T;
                                        else if ("EXT-X-DISCONTINUITY-SEQUENCE" === y) o.segments.length > 0 && a.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), c && a.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before any EXT-X-DISCONTINUITY tag."), o.discontinuitySequenceBase = l = T;
                                        else if ("EXT-X-ENDLIST" === y) o.endlist = !0;
                                        else if ("EXT-X-PLAYLIST-TYPE" === y) o.playlistType = T;
                                        else if ("EXT-X-I-FRAMES-ONLY" === y) t.compatibleVersion < 4 && (t.compatibleVersion = 4), o.isIFrame = !0;
                                        else if ("EXT-X-INDEPENDENT-SEGMENTS" === y) o.independentSegments && a.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), o.independentSegments = !0;
                                        else if ("EXT-X-START" === y) o.start && a.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), "number" != typeof S["TIME-OFFSET"] && a.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), o.start = {
                                            offset: S["TIME-OFFSET"],
                                            precise: S.PRECISE || !1
                                        };
                                        else if ("EXT-X-SERVER-CONTROL" === y) S["CAN-BLOCK-RELOAD"] || a.INVALIDPLAYLIST("EXT-X-SERVER-CONTROL: CAN-BLOCK-RELOAD=YES is mandatory for Low-Latency HLS"), o.lowLatencyCompatibility = {
                                            canBlockReload: S["CAN-BLOCK-RELOAD"],
                                            canSkipUntil: S["CAN-SKIP-UNTIL"],
                                            holdBack: S["HOLD-BACK"],
                                            partHoldBack: S["PART-HOLD-BACK"]
                                        };
                                        else if ("EXT-X-PART-INF" === y) S["PART-TARGET"] || a.INVALIDPLAYLIST("EXT-X-PART-INF: PART-TARGET attribute is mandatory"), o.partTargetDuration = S["PART-TARGET"];
                                        else if ("EXT-X-RENDITION-REPORT" === y) S.URI || a.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI attribute is mandatory"), 0 === S.URI.search(/^[a-z]+:/) && a.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI must be relative to the playlist uri"), o.renditionReports.push(new E({
                                            uri: S.URI,
                                            lastMSN: S["LAST-MSN"],
                                            lastPart: S["LAST-PART"]
                                        }));
                                        else if ("EXT-X-SKIP" === y) S["SKIPPED-SEGMENTS"] || a.INVALIDPLAYLIST("EXT-X-SKIP: SKIPPED-SEGMENTS attribute is mandatory"), t.compatibleVersion < 9 && (t.compatibleVersion = 9), o.skip = S["SKIPPED-SEGMENTS"], u += o.skip;
                                        else if ("string" == typeof g) {
                                            -1 === s && a.INVALIDPLAYLIST("A URI line is not preceded by any segment tags"), o.targetDuration || a.INVALIDPLAYLIST("The EXT-X-TARGETDURATION tag is REQUIRED");
                                            var b = D(e, g, s, m - 1, u++, l, t);
                                            if (b) {
                                                var A = i(O(o, b, l, d, h), 3);
                                                l = A[0], d = A[1], h = A[2], !f && b.parts.length > 0 && (f = !0)
                                            }
                                            s = -1
                                        }
                                    } else -1 === s && (s = m), "EXT-X-DISCONTINUITY" === y && (c = !0)
                                }
                            } catch (e) {
                                p.e(e)
                            } finally {
                                p.f()
                            }
                            if (-1 !== s) {
                                var w = D(e, "", s, e.length - 1, u++, l, t);
                                if (w) {
                                    var I = w.parts;
                                    I.length > 0 && !o.endlist && !I[I.length - 1].hint && a.INVALIDPLAYLIST("If the Playlist contains EXT-X-PART tags and does not contain an EXT-X-ENDLIST tag, the Playlist must contain an EXT-X-PRELOAD-HINT tag with a TYPE=PART attribute"), O(o, w, d, h), !f && w.parts.length > 0 && (f = !0)
                                }
                            }
                            return function(e) {
                                for (var t = new Map, n = new Map, i = !1, o = !1, s = e.length - 1; s >= 0; s--) {
                                    var u = e[s],
                                        c = u.programDateTime,
                                        l = u.dateRange;
                                    if (c && (o = !0), l && l.start) {
                                        i = !0, l.endOnNext && (l.end || l.duration) && a.INVALIDPLAYLIST("An EXT-X-DATERANGE tag with an END-ON-NEXT=YES attribute MUST NOT contain DURATION or END-DATE attributes.");
                                        var d = l.start.getTime(),
                                            h = l.duration || 0;
                                        l.end && l.duration && d + 1e3 * h !== l.end.getTime() && a.INVALIDPLAYLIST("END-DATE MUST be equal to the value of the START-DATE attribute plus the value of the DURATION"), l.endOnNext && (l.end = t.get(l.classId)), t.set(l.classId, l.start);
                                        var f = l.end ? l.end.getTime() : l.start.getTime() + 1e3 * (l.duration || 0),
                                            p = n.get(l.classId);
                                        if (p) {
                                            var _, m = r(p);
                                            try {
                                                for (m.s(); !(_ = m.n()).done;) {
                                                    var v = _.value;
                                                    (v.start <= d && v.end > d || v.start >= d && v.start < f) && a.INVALIDPLAYLIST("DATERANGE tags with the same CLASS should not overlap")
                                                }
                                            } catch (e) {
                                                m.e(e)
                                            } finally {
                                                m.f()
                                            }
                                            p.push({
                                                start: d,
                                                end: f
                                            })
                                        } else n.set(l.classId, [{
                                            start: d,
                                            end: f
                                        }])
                                    }
                                }
                                i && !o && a.INVALIDPLAYLIST("If a Playlist contains an EXT-X-DATERANGE tag, it MUST also contain at least one EXT-X-PROGRAM-DATE-TIME tag.")
                            }(o.segments), o.lowLatencyCompatibility && function(e, t) {
                                var n = e.lowLatencyCompatibility,
                                    o = e.targetDuration,
                                    s = e.partTargetDuration,
                                    u = e.segments,
                                    c = e.renditionReports,
                                    l = n.canSkipUntil,
                                    d = n.holdBack,
                                    h = n.partHoldBack;
                                if (l < 6 * o && a.INVALIDPLAYLIST("The Skip Boundary must be at least six times the EXT-X-TARGETDURATION."), d < 3 * o && a.INVALIDPLAYLIST("HOLD-BACK must be at least three times the EXT-X-TARGETDURATION."), t) {
                                    void 0 === s && a.INVALIDPLAYLIST("EXT-X-PART-INF is required if a Playlist contains one or more EXT-X-PART tags"), void 0 === h && a.INVALIDPLAYLIST("EXT-X-PART: PART-HOLD-BACK attribute is mandatory"), h < s && a.INVALIDPLAYLIST("PART-HOLD-BACK must be at least PART-TARGET");
                                    var f, p = r(u.entries());
                                    try {
                                        for (p.s(); !(f = p.n()).done;) {
                                            var _ = i(f.value, 2),
                                                m = _[0],
                                                v = _[1].parts;
                                            v.length > 0 && m < u.length - 3 && a.INVALIDPLAYLIST("Remove EXT-X-PART tags from the Playlist after they are greater than three target durations from the end of the Playlist.");
                                            var g, y = r(v.entries());
                                            try {
                                                for (y.s(); !(g = y.n()).done;) {
                                                    var E = i(g.value, 2),
                                                        T = E[0],
                                                        S = E[1].duration;
                                                    void 0 !== S && (S > s && a.INVALIDPLAYLIST("PART-TARGET is the maximum duration of any Partial Segment"), T < v.length - 1 && S < .85 * s && a.INVALIDPLAYLIST("All Partial Segments except the last part of a segment must have a duration of at least 85% of PART-TARGET"))
                                                }
                                            } catch (e) {
                                                y.e(e)
                                            } finally {
                                                y.f()
                                            }
                                        }
                                    } catch (e) {
                                        p.e(e)
                                    } finally {
                                        p.f()
                                    }
                                }
                                var b, A = r(c);
                                try {
                                    for (A.s(); !(b = A.n()).done;) {
                                        var w = b.value,
                                            I = u[u.length - 1];
                                        w.lastMSN || (w.lastMSN = I.mediaSequenceNumber), !w.lastPart && I.parts.length > 0 && (w.lastPart = I.parts.length - 1)
                                    }
                                } catch (e) {
                                    A.e(e)
                                } finally {
                                    A.f()
                                }
                            }(o, f), o
                        }(e, t)).isIFrame && t.hasMap && t.compatibleVersion < 6 && (t.compatibleVersion = 6), t.compatibleVersion > 1 && (!n.version || n.version < t.compatibleVersion) && a.INVALIDPLAYLIST("EXT-X-VERSION needs to be ".concat(t.compatibleVersion, " or higher.")), n
                    }
                    e.exports = function(e) {
                        var t = {
                                version: void 0,
                                isMasterPlaylist: void 0,
                                hasMap: !1,
                                targetDuration: 0,
                                compatibleVersion: 1,
                                isClosedCaptionsNone: !1,
                                hash: {}
                            },
                            n = C(function(e, t) {
                                var n = [];
                                return e.split("\n").forEach((function(e) {
                                    var r = e.trim();
                                    if (r)
                                        if (r.startsWith("#")) {
                                            if (r.startsWith("#EXT")) {
                                                var i = L(r, t);
                                                return void(i && n.push(i))
                                            }
                                        } else n.push(r)
                                })), 0 !== n.length && "EXTM3U" === n[0].name || a.INVALIDPLAYLIST("The EXTM3U tag MUST be the first line."), n
                            }(e, t), t);
                        return n.source = e, n
                    }
                },
                367: (e, t, n) => {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || s(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function o(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = s(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, o = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (u) throw o
                                }
                            }
                        }
                    }

                    function s(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                        }
                    }

                    function a(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }

                    function u(e, t, n) {
                        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                            var r = function(e, t) {
                                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
                                return e
                            }(e, t);
                            if (r) {
                                var i = Object.getOwnPropertyDescriptor(r, t);
                                return i.get ? i.get.call(n) : i.value
                            }
                        })(e, t, n || e)
                    }

                    function c(e, t) {
                        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }

                    function l(e) {
                        var t = "function" == typeof Map ? new Map : void 0;
                        return (l = function(e) {
                            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                            var n;
                            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== t) {
                                if (t.has(e)) return t.get(e);
                                t.set(e, r)
                            }

                            function r() {
                                return d(e, arguments, p(this).constructor)
                            }
                            return r.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: r,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), f(r, e)
                        })(e)
                    }

                    function d(e, t, n) {
                        return (d = h() ? Reflect.construct : function(e, t, n) {
                            var r = [null];
                            r.push.apply(r, t);
                            var i = new(Function.bind.apply(e, r));
                            return n && f(i, n.prototype), i
                        }).apply(null, arguments)
                    }

                    function h() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }

                    function f(e, t) {
                        return (f = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function p(e) {
                        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var _ = n(771),
                        m = ["#EXTINF", "#EXT-X-BYTERANGE", "#EXT-X-DISCONTINUITY", "#EXT-X-STREAM-INF", "#EXT-X-CUE-OUT", "#EXT-X-CUE-IN", "#EXT-X-KEY", "#EXT-X-MAP"],
                        v = ["#EXT-X-MEDIA"],
                        g = function(e) {
                            ! function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && f(e, t)
                            }(o, e);
                            var t, n, r, i = (t = o, n = h(), function() {
                                var e, r = p(t);
                                if (n) {
                                    var i = p(this).constructor;
                                    e = Reflect.construct(r, arguments, i)
                                } else e = r.apply(this, arguments);
                                return c(this, e)
                            });

                            function o(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, o), (t = i.call(this)).baseUri = e, t
                            }
                            return (r = [{
                                key: "push",
                                value: function() {
                                    for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    for (var i = function() {
                                            var t = a[s];
                                            if (!t.startsWith("#")) return u(p(o.prototype), "push", e).call(e, t), "continue";
                                            if (m.some((function(e) {
                                                    return t.startsWith(e)
                                                }))) return u(p(o.prototype), "push", e).call(e, t), "continue";
                                            if (e.includes(t)) {
                                                if (v.some((function(e) {
                                                        return t.startsWith(e)
                                                    }))) return "continue";
                                                _.INVALIDPLAYLIST("Redundant item (".concat(t, ")"))
                                            }
                                            u(p(o.prototype), "push", e).call(e, t)
                                        }, s = 0, a = n; s < a.length; s++) i()
                                }
                            }]) && function(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }(o.prototype, r), o
                        }(l(Array));

                    function y(e, t) {
                        var n = 1e3;
                        t && (n = Math.pow(10, t));
                        var r = Math.round(e * n) / n;
                        return t ? r.toFixed(t) : r
                    }

                    function E(e) {
                        var t = ['DATA-ID="'.concat(e.id, '"')];
                        return e.language && t.push('LANGUAGE="'.concat(e.language, '"')), e.value ? t.push('VALUE="'.concat(e.value, '"')) : e.uri && t.push('URI="'.concat(e.uri, '"')), "#EXT-X-SESSION-DATA:".concat(t.join(","))
                    }

                    function T(e, t) {
                        var n = t ? "#EXT-X-SESSION-KEY" : "#EXT-X-KEY",
                            r = ["METHOD=".concat(e.method)];
                        return e.uri && r.push('URI="'.concat(e.uri, '"')), e.iv && (16 !== e.iv.length && _.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), r.push("IV=".concat(_.byteSequenceToHex(e.iv)))), e.format && r.push('KEYFORMAT="'.concat(e.format, '"')), e.formatVersion && r.push('KEYFORMATVERSIONS="'.concat(e.formatVersion, '"')), "".concat(n, ":").concat(r.join(","))
                    }

                    function S(e, t) {
                        var n = t.isIFrameOnly ? "#EXT-X-I-FRAME-STREAM-INF" : "#EXT-X-STREAM-INF",
                            r = ["BANDWIDTH=".concat(t.bandwidth)];
                        if (t.averageBandwidth && r.push("AVERAGE-BANDWIDTH=".concat(t.averageBandwidth)), t.isIFrameOnly && r.push('URI="'.concat(t.uri, '"')), t.codecs && r.push('CODECS="'.concat(t.codecs, '"')), t.resolution && r.push("RESOLUTION=".concat(t.resolution.width, "x").concat(t.resolution.height)), t.frameRate && r.push("FRAME-RATE=".concat(y(t.frameRate, 3))), t.hdcpLevel && r.push("HDCP-LEVEL=".concat(t.hdcpLevel)), t.audio.length > 0) {
                            r.push('AUDIO="'.concat(t.audio[0].groupId, '"'));
                            var i, s = o(t.audio);
                            try {
                                for (s.s(); !(i = s.n()).done;) {
                                    var a = i.value;
                                    e.push(b(a))
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                        }
                        if (t.video.length > 0) {
                            r.push('VIDEO="'.concat(t.video[0].groupId, '"'));
                            var u, c = o(t.video);
                            try {
                                for (c.s(); !(u = c.n()).done;) {
                                    var l = u.value;
                                    e.push(b(l))
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                        }
                        if (t.subtitles.length > 0) {
                            r.push('SUBTITLES="'.concat(t.subtitles[0].groupId, '"'));
                            var d, h = o(t.subtitles);
                            try {
                                for (h.s(); !(d = h.n()).done;) {
                                    var f = d.value;
                                    e.push(b(f))
                                }
                            } catch (e) {
                                h.e(e)
                            } finally {
                                h.f()
                            }
                        }
                        if (_.getOptions().allowClosedCaptionsNone && 0 === t.closedCaptions.length) r.push("CLOSED-CAPTIONS=NONE");
                        else if (t.closedCaptions.length > 0) {
                            r.push('CLOSED-CAPTIONS="'.concat(t.closedCaptions[0].groupId, '"'));
                            var p, m = o(t.closedCaptions);
                            try {
                                for (m.s(); !(p = m.n()).done;) {
                                    var v = p.value;
                                    e.push(b(v))
                                }
                            } catch (e) {
                                m.e(e)
                            } finally {
                                m.f()
                            }
                        }
                        e.push("".concat(n, ":").concat(r.join(","))), t.isIFrameOnly || e.push("".concat(t.uri))
                    }

                    function b(e) {
                        var t = ["TYPE=".concat(e.type), 'GROUP-ID="'.concat(e.groupId, '"'), 'NAME="'.concat(e.name, '"')];
                        return void 0 !== e.isDefault && t.push("DEFAULT=".concat(e.isDefault ? "YES" : "NO")), void 0 !== e.autoselect && t.push("AUTOSELECT=".concat(e.autoselect ? "YES" : "NO")), void 0 !== e.forced && t.push("FORCED=".concat(e.forced ? "YES" : "NO")), e.language && t.push('LANGUAGE="'.concat(e.language, '"')), e.assocLanguage && t.push('ASSOC-LANGUAGE="'.concat(e.assocLanguage, '"')), e.instreamId && t.push('INSTREAM-ID="'.concat(e.instreamId, '"')), e.characteristics && t.push('CHARACTERISTICS="'.concat(e.characteristics, '"')), e.channels && t.push('CHANNELS="'.concat(e.channels, '"')), e.uri && t.push('URI="'.concat(e.uri, '"')), "#EXT-X-MEDIA:".concat(t.join(","))
                    }

                    function A(e, t, n, r) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                            o = !1;
                        if (t.byterange && e.push("#EXT-X-BYTERANGE:".concat(w(t.byterange))), t.discontinuity && e.push("#EXT-X-DISCONTINUITY"), t.key) {
                            var s = T(t.key);
                            s !== n && (e.push(s), n = s)
                        }
                        if (t.map) {
                            var a = function(e) {
                                var t = ['URI="'.concat(e.uri, '"')];
                                return e.byterange && t.push('BYTERANGE="'.concat(w(e.byterange), '"')), "#EXT-X-MAP:".concat(t.join(","))
                            }(t.map);
                            a !== r && (e.push(a), r = a)
                        }
                        if (t.programDateTime && e.push("#EXT-X-PROGRAM-DATE-TIME:".concat(_.formatDate(t.programDateTime))), t.dateRange && e.push(function(e) {
                                var t = ['ID="'.concat(e.id, '"')];
                                return e.start && t.push('START-DATE="'.concat(_.formatDate(e.start), '"')), e.end && t.push('END-DATE="'.concat(e.end, '"')), e.duration && t.push("DURATION=".concat(e.duration)), e.plannedDuration && t.push("PLANNED-DURATION=".concat(e.plannedDuration)), e.classId && t.push('CLASS="'.concat(e.classId, '"')), e.endOnNext && t.push("END-ON-NEXT=YES"), Object.keys(e.attributes).forEach((function(n) {
                                    n.startsWith("X-") ? "number" == typeof e.attributes[n] ? t.push("".concat(n, "=").concat(e.attributes[n])) : t.push("".concat(n, '="').concat(e.attributes[n], '"')) : n.startsWith("SCTE35-") && t.push("".concat(n, "=").concat(_.byteSequenceToHex(e.attributes[n])))
                                })), "#EXT-X-DATERANGE:".concat(t.join(","))
                            }(t.dateRange)), t.markers.length > 0 && I(e, t.markers), t.parts.length > 0 && (o = R(e, t.parts)), o) return [n, r];
                        var u = i < 3 ? Math.round(t.duration) : y(t.duration, function(e) {
                            var t = e.toString(10),
                                n = t.indexOf(".");
                            return -1 === n ? 0 : t.length - n - 1
                        }(t.duration));
                        return e.push("#EXTINF:".concat(u, ",").concat(unescape(encodeURIComponent(t.title || "")))), Array.prototype.push.call(e, "".concat(t.uri)), [n, r]
                    }

                    function w(e) {
                        var t = e.offset,
                            n = e.length;
                        return "".concat(n, "@").concat(t)
                    }

                    function I(e, t) {
                        var n, r = o(t);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value;
                                if ("OUT" === i.type) e.push("#EXT-X-CUE-OUT:".concat(i.duration));
                                else if ("IN" === i.type) e.push("#EXT-X-CUE-IN");
                                else if ("RAW" === i.type) {
                                    var s = i.value ? ":".concat(i.value) : "";
                                    e.push("#".concat(i.tagName).concat(s))
                                }
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }

                    function R(e, t) {
                        var n, r = !1,
                            i = o(t);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var s = n.value;
                                if (s.hint) {
                                    var a = [];
                                    if (a.push("TYPE=PART"), a.push('URI="'.concat(s.uri, '"')), s.byterange) {
                                        var u = s.byterange,
                                            c = u.offset,
                                            l = u.length;
                                        a.push("BYTERANGE-START=".concat(c)), l && a.push("BYTERANGE-LENGTH=".concat(l))
                                    }
                                    e.push("#EXT-X-PRELOAD-HINT:".concat(a.join(","))), r = !0
                                } else {
                                    var d = [];
                                    d.push("DURATION=".concat(s.duration)), d.push('URI="'.concat(s.uri, '"')), s.byterange && d.push("BYTERANGE=".concat(w(s.byterange))), s.independent && d.push("INDEPENDENT=YES"), s.gap && d.push("GAP=YES"), e.push("#EXT-X-PART:".concat(d.join(",")))
                                }
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        return r
                    }
                    e.exports = function(e) {
                        _.PARAMCHECK(e), _.ASSERT("Not a playlist", "playlist" === e.type);
                        var t = new g(e.uri);
                        return t.push("#EXTM3U"), e.version && t.push("#EXT-X-VERSION:".concat(e.version)), e.independentSegments && t.push("#EXT-X-INDEPENDENT-SEGMENTS"), e.start && t.push("#EXT-X-START:TIME-OFFSET=".concat(y(e.start.offset)).concat(e.start.precise ? ",PRECISE=YES" : "")), e.isMasterPlaylist ? function(e, t) {
                            var n, r = o(t.sessionDataList);
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    var i = n.value;
                                    e.push(E(i))
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            var s, a = o(t.sessionKeyList);
                            try {
                                for (a.s(); !(s = a.n()).done;) {
                                    var u = s.value;
                                    e.push(T(u, !0))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            var c, l = o(t.variants);
                            try {
                                for (l.s(); !(c = l.n()).done;) S(e, c.value)
                            } catch (e) {
                                l.e(e)
                            } finally {
                                l.f()
                            }
                        }(t, e) : function(e, t) {
                            var n = "",
                                r = "";
                            if (t.targetDuration && e.push("#EXT-X-TARGETDURATION:".concat(t.targetDuration)), t.lowLatencyCompatibility) {
                                var s = t.lowLatencyCompatibility,
                                    a = s.canBlockReload,
                                    u = s.canSkipUntil,
                                    c = s.holdBack,
                                    l = s.partHoldBack,
                                    d = [];
                                d.push("CAN-BLOCK-RELOAD=".concat(a ? "YES" : "NO")), void 0 !== u && d.push("CAN-SKIP-UNTIL=".concat(u)), void 0 !== c && d.push("HOLD-BACK=".concat(c)), void 0 !== l && d.push("PART-HOLD-BACK=".concat(l)), e.push("#EXT-X-SERVER-CONTROL:".concat(d.join(",")))
                            }
                            t.partTargetDuration && e.push("#EXT-X-PART-INF:PART-TARGET=".concat(t.partTargetDuration)), t.mediaSequenceBase && e.push("#EXT-X-MEDIA-SEQUENCE:".concat(t.mediaSequenceBase)), t.discontinuitySequenceBase && e.push("#EXT-X-DISCONTINUITY-SEQUENCE:".concat(t.discontinuitySequenceBase)), t.playlistType && e.push("#EXT-X-PLAYLIST-TYPE:".concat(t.playlistType)), t.isIFrame && e.push("#EXT-X-I-FRAMES-ONLY"), t.skip > 0 && e.push("#EXT-X-SKIP:SKIPPED-SEGMENTS=".concat(t.skip));
                            var h, f = o(t.segments);
                            try {
                                for (f.s(); !(h = f.n()).done;) {
                                    var p = i(A(e, h.value, n, r, t.version), 2);
                                    n = p[0], r = p[1]
                                }
                            } catch (e) {
                                f.e(e)
                            } finally {
                                f.f()
                            }
                            t.endlist && e.push("#EXT-X-ENDLIST");
                            var _, m = o(t.renditionReports);
                            try {
                                for (m.s(); !(_ = m.n()).done;) {
                                    var v = _.value,
                                        g = [];
                                    g.push('URI="'.concat(v.uri, '"')), g.push("LAST-MSN=".concat(v.lastMSN)), void 0 !== v.lastPart && g.push("LAST-PART=".concat(v.lastPart)), e.push("#EXT-X-RENDITION-REPORT:".concat(g.join(",")))
                                }
                            } catch (e) {
                                m.e(e)
                            } finally {
                                m.f()
                            }
                        }(t, e), t.join("\n")
                    }
                },
                890: (e, t, n) => {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function i(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && o(e, t)
                    }

                    function o(e, t) {
                        return (o = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function s(e) {
                        var t = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = u(e);
                            if (t) {
                                var i = u(this).constructor;
                                n = Reflect.construct(r, arguments, i)
                            } else n = r.apply(this, arguments);
                            return a(this, n)
                        }
                    }

                    function a(e, t) {
                        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }

                    function u(e) {
                        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function c(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    var l = n(771),
                        d = function e(t) {
                            c(this, e), l.PARAMCHECK(t), this.type = t
                        },
                        h = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n(e) {
                                var r, i = e.isMasterPlaylist,
                                    o = e.uri,
                                    s = e.version,
                                    a = e.independentSegments,
                                    u = void 0 !== a && a,
                                    d = e.start,
                                    h = e.source;
                                return c(this, n), r = t.call(this, "playlist"), l.PARAMCHECK(i), r.isMasterPlaylist = i, r.uri = o, r.version = s, r.independentSegments = u, r.start = d, r.source = h, r
                            }
                            return n
                        }(d),
                        f = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                c(this, n), r.isMasterPlaylist = !0, e = t.call(this, r);
                                var i = r.variants,
                                    o = void 0 === i ? [] : i,
                                    s = r.currentVariant,
                                    a = r.sessionDataList,
                                    u = void 0 === a ? [] : a,
                                    l = r.sessionKeyList,
                                    d = void 0 === l ? [] : l;
                                return e.variants = o, e.currentVariant = s, e.sessionDataList = u, e.sessionKeyList = d, e
                            }
                            return n
                        }(h),
                        p = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                c(this, n), r.isMasterPlaylist = !1, e = t.call(this, r);
                                var i = r.targetDuration,
                                    o = r.mediaSequenceBase,
                                    s = void 0 === o ? 0 : o,
                                    a = r.discontinuitySequenceBase,
                                    u = void 0 === a ? 0 : a,
                                    l = r.endlist,
                                    d = void 0 !== l && l,
                                    h = r.playlistType,
                                    f = r.isIFrame,
                                    p = r.segments,
                                    _ = void 0 === p ? [] : p,
                                    m = r.lowLatencyCompatibility,
                                    v = r.partTargetDuration,
                                    g = r.renditionReports,
                                    y = void 0 === g ? [] : g,
                                    E = r.skip,
                                    T = void 0 === E ? 0 : E,
                                    S = r.hash;
                                return e.targetDuration = i, e.mediaSequenceBase = s, e.discontinuitySequenceBase = u, e.endlist = d, e.playlistType = h, e.isIFrame = f, e.segments = _, e.lowLatencyCompatibility = m, e.partTargetDuration = v, e.renditionReports = y, e.skip = T, e.hash = S, e
                            }
                            return n
                        }(h),
                        _ = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n(e) {
                                var r, i = e.uri,
                                    o = e.mimeType,
                                    s = e.data,
                                    a = e.duration,
                                    u = e.title,
                                    l = e.byterange,
                                    d = e.discontinuity,
                                    h = e.mediaSequenceNumber,
                                    f = void 0 === h ? 0 : h,
                                    p = e.discontinuitySequence,
                                    _ = void 0 === p ? 0 : p,
                                    m = e.key,
                                    v = e.map,
                                    g = e.programDateTime,
                                    y = e.dateRange,
                                    E = e.markers,
                                    T = void 0 === E ? [] : E,
                                    S = e.parts,
                                    b = void 0 === S ? [] : S;
                                return c(this, n), (r = t.call(this, "segment")).uri = i, r.mimeType = o, r.data = s, r.duration = a, r.title = u, r.byterange = l, r.discontinuity = d, r.mediaSequenceNumber = f, r.discontinuitySequence = _, r.key = m, r.map = v, r.programDateTime = g, r.dateRange = y, r.markers = T, r.parts = b, r
                            }
                            return n
                        }(d),
                        m = function(e) {
                            i(n, e);
                            var t = s(n);

                            function n(e) {
                                var r, i = e.hint,
                                    o = void 0 !== i && i,
                                    s = e.uri,
                                    a = e.duration,
                                    u = e.independent,
                                    d = e.byterange,
                                    h = e.gap;
                                return c(this, n), r = t.call(this, "part"), l.PARAMCHECK(s), r.hint = o, r.uri = s, r.duration = a, r.independent = u, r.duration = a, r.byterange = d, r.gap = h, r
                            }
                            return n
                        }(d);
                    e.exports = {
                        Rendition: function e(t) {
                            var n = t.type,
                                r = t.uri,
                                i = t.groupId,
                                o = t.language,
                                s = t.assocLanguage,
                                a = t.name,
                                u = t.isDefault,
                                d = t.autoselect,
                                h = t.forced,
                                f = t.instreamId,
                                p = t.characteristics,
                                _ = t.channels;
                            c(this, e), l.PARAMCHECK(n, i, a), l.CONDITIONALASSERT(["SUBTITLES" === n, r], ["CLOSED-CAPTIONS" === n, f], ["CLOSED-CAPTIONS" === n, !r], [h, "SUBTITLES" === n]), this.type = n, this.uri = r, this.groupId = i, this.language = o, this.assocLanguage = s, this.name = a, this.isDefault = u, this.autoselect = d, this.forced = h, this.instreamId = f, this.characteristics = p, this.channels = _
                        },
                        Variant: function e(t) {
                            var n = t.uri,
                                r = t.isIFrameOnly,
                                i = void 0 !== r && r,
                                o = t.bandwidth,
                                s = t.averageBandwidth,
                                a = t.codecs,
                                u = t.resolution,
                                d = t.frameRate,
                                h = t.hdcpLevel,
                                f = t.audio,
                                p = void 0 === f ? [] : f,
                                _ = t.video,
                                m = void 0 === _ ? [] : _,
                                v = t.subtitles,
                                g = void 0 === v ? [] : v,
                                y = t.closedCaptions,
                                E = void 0 === y ? [] : y,
                                T = t.currentRenditions,
                                S = void 0 === T ? {
                                    audio: 0,
                                    video: 0,
                                    subtitles: 0,
                                    closedCaptions: 0
                                } : T;
                            c(this, e), l.PARAMCHECK(n, o), this.uri = n, this.isIFrameOnly = i, this.bandwidth = o, this.averageBandwidth = s, this.codecs = a, this.resolution = u, this.frameRate = d, this.hdcpLevel = h, this.audio = p, this.video = m, this.subtitles = g, this.closedCaptions = E, this.currentRenditions = S
                        },
                        SessionData: function e(t) {
                            var n = t.id,
                                r = t.value,
                                i = t.uri,
                                o = t.language;
                            c(this, e), l.PARAMCHECK(n, r || i), l.ASSERT("SessionData cannot have both value and uri, shoud be either.", !(r && i)), this.id = n, this.value = r, this.uri = i, this.language = o
                        },
                        Key: function e(t) {
                            var n = t.method,
                                r = t.uri,
                                i = t.iv,
                                o = t.format,
                                s = t.formatVersion;
                            c(this, e), l.PARAMCHECK(n), l.CONDITIONALPARAMCHECK(["NONE" !== n, r]), l.CONDITIONALASSERT(["NONE" === n, !(r || i || o || s)]), this.method = n, this.uri = r, this.iv = i, this.format = o, this.formatVersion = s
                        },
                        MediaInitializationSection: function e(t) {
                            var n = t.hint,
                                r = void 0 !== n && n,
                                i = t.uri,
                                o = t.mimeType,
                                s = t.byterange;
                            c(this, e), l.PARAMCHECK(i), this.hint = r, this.uri = i, this.mimeType = o, this.byterange = s
                        },
                        DateRange: function e(t) {
                            var n = t.id,
                                r = t.classId,
                                i = t.start,
                                o = t.end,
                                s = t.duration,
                                a = t.plannedDuration,
                                u = t.endOnNext,
                                d = t.attributes,
                                h = void 0 === d ? {} : d;
                            c(this, e), l.PARAMCHECK(n), l.CONDITIONALPARAMCHECK([!0 === u, r]), l.CONDITIONALASSERT([o, i], [o, i <= o], [s, s >= 0], [a, a >= 0]), this.id = n, this.classId = r, this.start = i, this.end = o, this.duration = s, this.plannedDuration = a, this.endOnNext = u, this.attributes = h
                        },
                        SpliceInfo: function e(t) {
                            var n = t.type,
                                r = t.duration,
                                i = t.tagName,
                                o = t.value;
                            c(this, e), l.PARAMCHECK(n), l.CONDITIONALPARAMCHECK(["OUT" === n, r]), l.CONDITIONALPARAMCHECK(["RAW" === n, i]), this.type = n, this.duration = r, this.tagName = i, this.value = o
                        },
                        Playlist: h,
                        MasterPlaylist: f,
                        MediaPlaylist: p,
                        Segment: _,
                        PartialSegment: m,
                        RenditionReport: function e(t) {
                            var n = t.uri,
                                r = t.lastMSN,
                                i = t.lastPart;
                            c(this, e), l.PARAMCHECK(n), this.uri = n, this.lastMSN = r, this.lastPart = i
                        }
                    }
                },
                771: e => {
                    function t(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || r(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function n(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var i = 0,
                                    o = function() {};
                                return {
                                    s: o,
                                    n: function() {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: o
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var s, a = !0,
                            u = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                u = !0, s = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (u) throw s
                                }
                            }
                        }
                    }

                    function r(e, t) {
                        if (e) {
                            if ("string" == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                        }
                    }

                    function i(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    var o = {};

                    function s(e) {
                        if (o.strictMode) throw e;
                        o.silent
                    }

                    function a(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        if ("number" == typeof e) return e;
                        var n = 10 === t ? Number.parseFloat(e, t) : Number.parseInt(e, t);
                        return Number.isNaN(n) ? 0 : n
                    }
                    e.exports = {
                        THROW: s,
                        ASSERT: function(e) {
                            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                            var a, u = n(i.entries());
                            try {
                                for (u.s(); !(a = u.n()).done;) {
                                    var c = t(a.value, 2),
                                        l = c[0];
                                    c[1] || s(new Error("".concat(e, " : Failed at [").concat(l, "]")))
                                }
                            } catch (e) {
                                u.e(e)
                            } finally {
                                u.f()
                            }
                        },
                        CONDITIONALASSERT: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o, a = n(r.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var u = t(o.value, 2),
                                        c = u[0],
                                        l = t(u[1], 2),
                                        d = l[0],
                                        h = l[1];
                                    d && (h || s(new Error("Conditional Assert : Failed at [".concat(c, "]"))))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        PARAMCHECK: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o, a = n(r.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var u = t(o.value, 2),
                                        c = u[0];
                                    void 0 === u[1] && s(new Error("Param Check : Failed at [".concat(c, "]")))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        CONDITIONALPARAMCHECK: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o, a = n(r.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var u = t(o.value, 2),
                                        c = u[0],
                                        l = t(u[1], 2),
                                        d = l[0],
                                        h = l[1];
                                    d && void 0 === h && s(new Error("Conditional Param Check : Failed at [".concat(c, "]")))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        INVALIDPLAYLIST: function(e) {
                            s(new Error("Invalid Playlist : ".concat(e)))
                        },
                        toNumber: a,
                        hexToByteSequence: function(e) {
                            (e.startsWith("0x") || e.startsWith("0X")) && (e = e.slice(2));
                            for (var t = [], n = 0; n < e.length; n += 2) t.push(a(e.slice(n, n + 2), 16));
                            return Buffer.from(t)
                        },
                        byteSequenceToHex: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length;
                            n <= t && s(new Error("end must be larger than start : start=".concat(t, ", end=").concat(n)));
                            for (var r = [], i = t; i < n; i++) r.push("0".concat((255 & e[i]).toString(16).toUpperCase()).slice(-2));
                            return "0x".concat(r.join(""))
                        },
                        tryCatch: function(e, t) {
                            try {
                                return e()
                            } catch (e) {
                                return t(e)
                            }
                        },
                        splitAt: function(e, t) {
                            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = -1, i = 0, o = 0; i < e.length; i++)
                                if (e[i] === t) {
                                    if (o++ === n) return [e.slice(0, i), e.slice(i + 1)];
                                    r = i
                                }
                            return -1 !== r ? [e.slice(0, r), e.slice(r + 1)] : [e]
                        },
                        trim: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
                            return e ? (e = e.trim(), " " === t || (e.startsWith(t) && (e = e.slice(1)), e.endsWith(t) && (e = e.slice(0, -1))), e) : e
                        },
                        splitByCommaWithPreservingQuotes: function(e) {
                            for (var t = [], n = !0, r = 0, i = [], o = 0; o < e.length; o++) {
                                var s = e[o];
                                n && "," === s ? (t.push(e.slice(r, o).trim()), r = o + 1) : '"' !== s && "'" !== s || (n ? (i.push(s), n = !1) : s === i[i.length - 1] ? (i.pop(), n = !0) : i.push(s))
                            }
                            return t.push(e.slice(r).trim()), t
                        },
                        camelify: function(e) {
                            var t, r = [],
                                i = !1,
                                o = n(e);
                            try {
                                for (o.s(); !(t = o.n()).done;) {
                                    var s = t.value;
                                    "-" !== s && "_" !== s ? i ? (r.push(s.toUpperCase()), i = !1) : r.push(s.toLowerCase()) : i = !0
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                            return r.join("")
                        },
                        formatDate: function(e) {
                            var t = e.getUTCFullYear(),
                                n = ("0" + (e.getUTCMonth() + 1)).slice(-2),
                                r = ("0" + e.getUTCDate()).slice(-2),
                                i = ("0" + e.getUTCHours()).slice(-2),
                                o = ("0" + e.getUTCMinutes()).slice(-2),
                                s = ("0" + e.getUTCSeconds()).slice(-2),
                                a = ("00" + e.getUTCMilliseconds()).slice(-3);
                            return "".concat(t, "-").concat(n, "-").concat(r, "T").concat(i, ":").concat(o, ":").concat(s, ".").concat(a, "Z")
                        },
                        hasOwnProp: function(e, t) {
                            return Object.hasOwnProperty.call(e, t)
                        },
                        setOptions: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            o = Object.assign(o, e)
                        },
                        getOptions: function() {
                            return Object.assign({}, o)
                        }
                    }
                }
            }, t = {},
            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                    exports: {}
                };
                return e[r](i, i.exports, n), i.exports
            }(851);
        var e, t
    }()
}));
const Wi = {},
    qi = {
        variant: 0,
        audio: 0,
        subtitles: 0
    };
let Gi = function(e) {
        function t(t, n) {
            var r;
            return (r = e.call(this, t) || this).type = r.type.toLowerCase(), r.index = qi[r.type]++, r.id = r.uri, r.label = r.name, r.codecs = Qi(n, r.type), r.url = null, r.playlist = null, r
        }
        return p(t, e), t.prototype.getSegmentBySN = function(e) {
            return this.playlist.getSegmentBySN(e)
        }, l(t, [{
            key: "mimeType",
            get: function() {
                return this.playlist && Ji(this.playlist.segments[0].uri, this.type)
            }
        }, {
            key: "initSegment",
            get: function() {
                const e = this;
                return {
                    get url() {
                        var t;
                        return null == (t = e.playlist) ? void 0 : t.initSegment.url
                    }
                }
            }
        }, {
            key: "segments",
            get: function() {
                var e;
                return (null == (e = this.playlist) ? void 0 : e.segments) || []
            }
        }, {
            key: "targetDuration",
            get: function() {
                var e;
                return null == (e = this.playlist) ? void 0 : e.targetDuration
            }
        }, {
            key: "hasProgramDateTime",
            get: function() {
                return this.playlist.hasProgramDateTime
            }
        }, {
            key: "age",
            get: function() {
                var e;
                return null == (e = this.playlist) ? void 0 : e.age
            }
        }, {
            key: "edge",
            get: function() {
                var e;
                return null == (e = this.playlist) ? void 0 : e.edge
            }
        }, {
            key: "parts",
            get: function() {
                var e;
                return (null == (e = this.playlist) ? void 0 : e.parts) || []
            }
        }, {
            key: "partTargetDuration",
            get: function() {
                var e;
                return null == (e = this.playlist) ? void 0 : e.partTargetDuration
            }
        }, {
            key: "lowLatencyCompatibility",
            get: function() {
                return this.playlist.lowLatencyCompatibility
            }
        }])
    }(Xi.types.Rendition),
    Ki = function(e) {
        function t(t) {
            var n, r, i;
            return (i = e.call(this, t) || this).audio = i.audio.map((e => Wi[e.uri] || (Wi[e.uri] = new Gi(e, i.codecs)))), i.subtitles = i.subtitles.map((e => Wi[e.uri] || (Wi[e.uri] = new Gi(e, i.codecs)))), i.type = "video", i.index = qi.variant++, i.id = i.uri, i.bitrate = i.bandwidth, i.avg_bitrate = i.averageBandwidth, i.framerate = i.frameRate || 30, i.height = null == (n = i.resolution) ? void 0 : n.height, i.width = null == (r = i.resolution) ? void 0 : r.width, i.codecs = function(e, t = zi) {
                return e ? t : Qi(t, "video")
            }(!i.audio.length, t.codecs), i.url = null, i.playlist = null, i
        }
        return p(t, e), t.prototype.getSegmentBySN = function(e) {
            return this.playlist.getSegmentBySN(e)
        }, l(t, [{
            key: "mimeType",
            get: function() {
                return this.playlist && Ji(this.playlist.segments[0].uri, "video")
            }
        }, {
            key: "initSegment",
            get: function() {
                const e = this;
                return {
                    get url() {
                        var t;
                        return null == (t = e.playlist) ? void 0 : t.initSegment.url
                    }
                }
            }
        }, {
            key: "segments",
            get: function() {
                var e;
                return (null == (e = this.playlist) ? void 0 : e.segments) || []
            }
        }, {
            key: "targetDuration",
            get: function() {
                var e;
                return null == (e = this.playlist) ? void 0 : e.targetDuration
            }
        }, {
            key: "hasProgramDateTime",
            get: function() {
                return this.playlist.hasProgramDateTime
            }
        }, {
            key: "age",
            get: function() {
                var e;
                return null == (e = this.playlist) ? void 0 : e.age
            }
        }, {
            key: "edge",
            get: function() {
                var e;
                return null == (e = this.playlist) ? void 0 : e.edge
            }
        }, {
            key: "parts",
            get: function() {
                var e;
                return (null == (e = this.playlist) ? void 0 : e.parts) || []
            }
        }, {
            key: "partTargetDuration",
            get: function() {
                var e;
                return null == (e = this.playlist) ? void 0 : e.partTargetDuration
            }
        }, {
            key: "lowLatencyCompatibility",
            get: function() {
                return this.playlist.lowLatencyCompatibility
            }
        }])
    }(Xi.types.Variant),
    Yi = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t) || this).variants = n.variants.map((e => new Ki(e))), n
        }
        return p(t, e), l(t, [{
            key: "video",
            get: function() {
                return this.variants
            }
        }, {
            key: "audio",
            get: function() {
                return w(I(this.variants, (e => e.audio)))
            }
        }, {
            key: "subtitles",
            get: function() {
                return w(I(this.variants, (e => e.subtitles)))
            }
        }, {
            key: "captions",
            get: function() {
                return this.subtitles
            }
        }])
    }(Xi.types.MasterPlaylist);
const $i = {
        audio: [/^vorbis$/, /^opus$/, /^flac$/, /^mp4a/, /^[ae]c-3$/],
        video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av1$/]
    },
    zi = "avc1.42E01E,mp4a.40.2";

function Qi(e = zi, t) {
    const n = e.split(","),
        r = $i[t.toLowerCase()] || [];
    return n.find((e => r.some((t => t.test(e.trim())))))
}

function Ji(e, t) {
    const n = e.split(".").pop().split("?")[0],
        r = {
            fmp4: "mp4",
            m4s: "mp4",
            ts: "mp2t"
        }[n] || n || "mp4";
    return `${t.toLowerCase()}/${r}`
}
const Zi = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }
}((function(e) {
    let t = !1;
    return function(n, r) {
        var i = function() {
            if (/json=1/.test(e)) return function(e, t) {
                return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
            }(Ke(e).json(), (function(e) {
                const n = e.url;
                return t = !0, n
            }))
        }();
        return i && i.then ? i.then(r) : r(i)
    }(0, (function(n) {
        return t ? n : e
    }))
}));

function eo(e) {
    return e.substr(0, e.lastIndexOf("/") + 1)
}

function to(e, t) {
    if (t) return /^https?:\/\//.test(t) ? t : e + t
}
const no = {};
let ro = function(e) {
        function t(t, {
            url: n,
            type: r,
            index: i
        }) {
            var o;
            return (o = e.call(this, t) || this).url = n, o.type = r, o.stream = i, o.advancedDateTime = 0, o.misses = 0, o.parts = null, o.initSegment = t.segments[0].map || {
                    uri: t.segments[0].uri
                }, o.initSegment.url = to(eo(o.url), o.initSegment.uri),
                function(e, t) {
                    let n = (t.segments[0].mediaSequenceNumber || 0) * t.targetDuration,
                        r = -1;
                    e.segments = [], e.parts = [], t.segments.forEach((i => {
                        var o, s;
                        if (void 0 === i.mediaSequenceNumber) throw new Error("No valid segment sequence number found");
                        let a = to(eo(e.url), i.uri);
                        const u = (null == (o = no[a]) ? void 0 : o.update(i)) || new io(g(g({}, i), {}, {
                            type: e.type,
                            stream: e.stream,
                            targetDuration: t.targetDuration,
                            url: a,
                            start: n
                        }));
                        a && (no[a] = u);
                        const c = i.parts.map(((n, r) => {
                            var i;
                            return a = to(eo(e.url), n.uri), (null == (i = no[a]) ? void 0 : i.update(n)) || (no[a] = new oo(g(g({}, n), {}, {
                                type: e.type,
                                stream: e.stream,
                                partTargetDuration: t.partTargetDuration,
                                mediaSequenceNumber: u.mediaSequenceNumber,
                                url: a,
                                part: r
                            })))
                        }));
                        u.parts = c, (s = e.parts).push.apply(s, T(c)),
                            function(e, t) {
                                e.programDateTime ? e.programDateTime = new Date(e.programDateTime).getTime() : null != t && t.programDateTime && (e.programDateTime = t.endProgramDateTime), Number.isFinite(e.programDateTime) || (e.programDateTime = null)
                            }(u, e.segments[e.segments.length - 1]), u.programDateTime && -1 === r && (r = e.segments.length), n += u.duration || 0, e.segments.push(u)
                    })), r > 0 && function(e, t) {
                        let n = e[t];
                        for (let r = t; r--;) {
                            const t = e[r];
                            if (!t) return;
                            t.programDateTime = n.programDateTime - 1e3 * t.duration, n = t
                        }
                    }(e.segments, r)
                }(o, t), o
        }
        p(t, e);
        var n = t.prototype;
        return n.reloaded = function(e) {
            if (!e) return this.advanced = !0, void(this.updated = !0);
            const t = this.lastPartSn - e.lastPartSn,
                n = this.lastPartIndex - e.lastPartIndex;
            this.updated = this.endSN !== e.endSN || !!n || !!t, this.advanced = this.endSN > e.endSN || t > 0 || 0 === t && n > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * e.misses) : this.misses = e.misses + 1, this.timeOffset = e.timeOffset
        }, n.getSegmentBySN = function(e) {
            return this.segments.find((t => t.mediaSequenceNumber === e))
        }, l(t, [{
            key: "availableParts",
            get: function() {
                var e;
                return null != (e = this.parts) && e.length ? this.parts.filter((e => !e.hint)) : []
            }
        }, {
            key: "timeOffset",
            get: function() {
                return this._timeOffset || 0
            },
            set: function(e) {
                this._timeOffset = e, this.segments.forEach((t => {
                    t.timeOffset = e
                }))
            }
        }, {
            key: "segmentEnd",
            get: function() {
                var e;
                return null != (e = this.segments) && e.length ? this.segments[this.segments.length - 1].end : 0
            }
        }, {
            key: "segmentEndPDT",
            get: function() {
                var e;
                return null != (e = this.segments) && e.length ? this.segments[this.segments.length - 1].programDateTime : 0
            }
        }, {
            key: "endSN",
            get: function() {
                var e;
                return null != (e = this.segments) && e.length ? this.segments[this.segments.length - 1].mediaSequenceNumber : 0
            }
        }, {
            key: "hasProgramDateTime",
            get: function() {
                return !!this.segments.length && Number.isFinite(this.segmentEndPDT)
            }
        }, {
            key: "age",
            get: function() {
                return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
            }
        }, {
            key: "partEnd",
            get: function() {
                var e;
                return null != (e = this.parts) && e.length ? this.parts[this.parts.length - 1].end : 0
            }
        }, {
            key: "lastPartIndex",
            get: function() {
                var e;
                return null != (e = this.parts) && e.length ? this.parts[this.parts.length - 1].part : -1
            }
        }, {
            key: "lastAvailablePartIndex",
            get: function() {
                var e;
                return null != (e = this.availableParts) && e.length ? this.availableParts[this.availableParts.length - 1].part : -1
            }
        }, {
            key: "lastPartSn",
            get: function() {
                var e;
                return null != (e = this.parts) && e.length ? this.parts[this.parts.length - 1].mediaSequenceNumber : this.endSN
            }
        }, {
            key: "lastAvailablePartSn",
            get: function() {
                var e;
                return null != (e = this.availableParts) && e.length ? this.availableParts[this.availableParts.length - 1].mediaSequenceNumber : this.endSN
            }
        }, {
            key: "edge",
            get: function() {
                return this.partEnd || this.segmentEnd
            }
        }])
    }(Xi.types.MediaPlaylist),
    io = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t) || this).type = t.type, n.stream = t.stream, n.targetDuration = t.targetDuration, n.start = t.start, n.parts = t.parts, n.url = t.url, n
        }
        p(t, e);
        var n = t.prototype;
        return n.getPart = function(e) {
            return e >= 0 && e < this._parts.length ? this._parts[e] : null
        }, n._linkParts = function() {
            var e;
            if ((null == (e = this._parts) ? void 0 : e.length) > 1 && !0 === this._parts[0].independent && !this._parts[1].independent) {
                var t;
                let e;
                null == (t = this._parts) || t.forEach((t => {
                    t.dependentOn = !0 === t.independent ? null : e, e = t
                }))
            }
        }, n._syncPartsWithStart = function() {
            var e;
            let t = this._start;
            null == (e = this._parts) || e.forEach((e => {
                e.start = t, t += e.duration || e.partTargetDuration || 0
            }))
        }, n._syncPartsWithPDT = function() {
            var e;
            let t = this.programDateTime;
            null == (e = this._parts) || e.forEach((e => {
                e.programDateTime = t, t += 1e3 * (e.duration || e.partTargetDuration || 0)
            }))
        }, n.update = function({
            uri: e
        }) {
            return this.uri = e, this
        }, l(t, [{
            key: "timeOffset",
            get: function() {
                return this._timeOffset || 0
            },
            set: function(e) {
                this._timeOffset = e, this.parts.forEach((t => {
                    t.timeOffset = e
                }))
            }
        }, {
            key: "start",
            get: function() {
                return this._start + this.timeOffset
            },
            set: function(e) {
                this._start = e, this._syncPartsWithStart()
            }
        }, {
            key: "programDateTime",
            get: function() {
                return this._programDateTime
            },
            set: function(e) {
                this._programDateTime = e, this._syncPartsWithPDT()
            }
        }, {
            key: "parts",
            get: function() {
                return this._parts
            },
            set: function(e) {
                this._parts = e, this._linkParts(), this._syncPartsWithStart(), this._syncPartsWithPDT()
            }
        }, {
            key: "segment",
            get: function() {
                return this.mediaSequenceNumber
            }
        }, {
            key: "end",
            get: function() {
                return this.start + (this.duration || this.targetDuration || 0)
            }
        }, {
            key: "endProgramDateTime",
            get: function() {
                if (null === this.programDateTime) return null;
                if (!Number.isFinite(this.programDateTime)) return null;
                const e = Number.isFinite(this.duration) ? this.duration : 0;
                return this.programDateTime + 1e3 * e
            }
        }])
    }(Xi.types.Segment),
    oo = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t) || this).type = t.type, n.stream = t.stream, n.partTargetDuration = t.partTargetDuration, n.start = t.start, n.url = t.url, n.mediaSequenceNumber = t.mediaSequenceNumber, n.part = t.part, n.programDateTime = null, n.timeOffset = 0, n.dependentOn = null, n
        }
        return p(t, e), t.prototype.update = function({
            hint: e,
            duration: t,
            independent: n
        }) {
            return this.hint = e, this.duration = t, this.independent = n, this
        }, l(t, [{
            key: "segment",
            get: function() {
                return this.mediaSequenceNumber
            }
        }, {
            key: "start",
            get: function() {
                return this._start + this.timeOffset
            },
            set: function(e) {
                this._start = e
            }
        }, {
            key: "end",
            get: function() {
                return this.start + (this.duration || this.partTargetDuration || 0)
            }
        }])
    }(Xi.types.PartialSegment);

function so(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const ao = co((function(e) {
    return so(Ke(e).json(), (function(e) {
        return Zi(e.url.hls)
    }))
}));

function uo(e, t) {
    try {
        var n = e()
    } catch (Np) {
        return t(Np)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function co(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }
}

function lo() {}

function ho(e, t) {
    if (!t) return e && e.then ? e.then(lo) : Promise.resolve()
}
Xi.setOptions({
    silent: !0
});
let fo = function() {
    function t(e, t, n) {
        this.lowLatencyMode = e.lowLatencyMode, this.dvrEnabled = e.dvrEnabled, this.disableDeltaUpdates = e.disableDeltaUpdates, this._masterLoader = e, this._oldPlaylist = null == n ? void 0 : n._oldPlaylist, this._type = t, this._expirationTime = 1 / 0, this.alive = !0
    }
    var n = t.prototype;
    return n.update = function(t, n, r) {
        try {
            const i = this;
            return t && i.alive ? so(uo((function() {
                return so(i._requestPromise, (function() {
                    var o, s, a;
                    t.url = to(i.baseUrl, t.uri);
                    const u = new URL(t.url).searchParams;
                    i.dvrEnabled || null !== u.get("max_segments") || (t.url = Se(t.url, {
                        max_segments: 10
                    }));
                    const c = (null == (o = t.playlist) || null == (o = o.lowLatencyCompatibility) ? void 0 : o.canSkipUntil) || 0;
                    return (null !== (s = null == (a = t.playlist) ? void 0 : a.age) && void 0 !== s ? s : 1 / 0) < c / 2 && !i.disableDeltaUpdates && (r = g(g({}, r), {}, {
                        _HLS_skip: "YES"
                    })), i._requestPromise = Ke(t.url, {
                        searchParams: r,
                        retryStatus: mo,
                        type: e.MANIFEST,
                        retry: 3,
                        hooks: {
                            beforeRequest: i._isExpired() ? [i._beforeRetry(t)] : [],
                            beforeRetry: [i._beforeRetry(t)]
                        }
                    }), so(i._requestPromise, (function(e) {
                        return so(e.text(), (function(r) {
                            var o;
                            const s = Xi.parse(r),
                                a = new ro(s, t),
                                u = a.skip > 0 ? i._mergeDeltaPlaylistUpdates(t.playlist, a) : a;
                            if (t.playlist = u, t.playlist.advancedDateTime = Date.now() - e.perfTimings.duration, t.playlist.reloaded(i._oldPlaylist), i._oldPlaylist = t.playlist, i._masterLoader.fire("1", t, n), i.lowLatencyMode && null != (o = t.playlist.lowLatencyCompatibility) && o.canBlockReload) {
                                const e = a.lastAvailablePartIndex,
                                    n = -1 !== e ? a.lastAvailablePartSn : a.endSN + 1,
                                    r = -1 !== e ? e + 1 : void 0;
                                i.update(t, !1, {
                                    _HLS_msn: n,
                                    _HLS_part: r
                                })
                            } else if (i.alive) {
                                clearTimeout(i._timer);
                                const e = function(e, t) {
                                    return 1e3 * (t && e.partTargetDuration || e.targetDuration)
                                }(t, i.lowLatencyMode);
                                i._timer = setTimeout((() => i.update(t)), e)
                            }
                        }))
                    }))
                }))
            }), (function(e) {
                e instanceof Ie || i._masterLoader.fire("2", e)
            }))) : so()
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n.stop = function() {
        var e;
        clearTimeout(this._timer), null == (e = this._requestPromise) || e.abort(), this._requestPromise = null, this.alive = !1
    }, n._isExpired = function() {
        return this._expirationTime && this._expirationTime - 1e4 <= Date.now()
    }, n._beforeRetry = function(e) {
        const t = this;
        return co((function(n, r) {
            return so(t._masterLoader.refreshBaseUrl(), (function(r) {
                n.url = to(r, e.uri), t._expirationTime = function(e) {
                    const t = Te(e),
                        n = t && t.pathname.match(/^\/(exp=)?(\d{10,})/);
                    return n && 1e3 * n[2]
                }(n.url)
            }))
        }))
    }, n._mergeDeltaPlaylistUpdates = function(e, t) {
        e.mediaSequenceBase < t.mediaSequenceBase && (e.segments = e.segments.filter((e => e.mediaSequenceNumber >= t.mediaSequenceBase)));
        const n = t.segments.filter((t => t.mediaSequenceNumber > e.endSN));
        return t.segments = [].concat(T(e.segments), T(n)), t
    }, l(t, [{
        key: "baseUrl",
        get: function() {
            var e;
            return null == (e = this._masterLoader) ? void 0 : e.baseUrl
        }
    }])
}();
const po = {
    disableDeltaUpdates: !1
};
let _o = function(t) {
    function n(e = po) {
        var n;
        return (n = t.call(this) || this).video = new fo(n, "video"), n.audio = new fo(n, "audio"), n.subtitles = new fo(n, "subtitles"), n._disableDeltaUpdates = e.disableDeltaUpdates, n._activeStreamIndex = {}, n
    }
    p(n, t);
    var r = n.prototype;
    return r.start = function(e, t) {
        try {
            const n = this;
            return n._refreshUrl = t, so(Zi(e), (function(e) {
                return n._masterPlaylistUrl = e, so(n._fetchMasterPlaylist(n._masterPlaylistUrl), (function(e) {
                    return n.manifest = new Yi(Xi.parse(e)), n.manifest
                }))
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, r.stop = function() {
        this.video.stop(), this.audio.stop(), this.subtitles.stop(), this.video = new fo(this, "video", this.video), this.audio = new fo(this, "audio", this.audio), this.subtitles = new fo(this, "subtitles", this.subtitles)
    }, r.update = function(e) {
        try {
            const t = this;
            return so(t.video.update(t.activeStream("video"), e), (function() {
                return ho(Promise.all([t.audio.update(t.activeStream("audio"), e), t.subtitles.update(t.activeStream("subtitles"), e)]))
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, r.switchTo = function(e, t) {
        try {
            const n = this;
            return t === n._activeStreamIndex[e] ? so() : (n[e].stop(), n[e] = new fo(n, e, n[e]), n._activeStreamIndex[e] = t, so(ho(n[e].update(n.activeStream(e), !0))))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, r.activeStream = function(e) {
        return this.manifest[e].find((({
            index: t
        }) => t === this._activeStreamIndex[e]))
    }, r.activeStreamIndex = function(e) {
        return this._activeStreamIndex[e]
    }, r.refreshBaseUrl = function() {
        try {
            const e = this;
            return so(ao(e._refreshUrl), (function(t) {
                return e._masterPlaylistUrl = t, e.baseUrl
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, r._fetchMasterPlaylist = function(t) {
        try {
            let n = !1;
            const r = this;
            let i;
            return so(function(e, t) {
                return e && e.then ? e.then(t) : t(e)
            }(uo((function() {
                const n = {
                    type: e.MANIFEST,
                    retry: 8,
                    retryStatus: mo,
                    hooks: {
                        beforeRetry: [r._beforeRetryMasterPlaylist.bind(r)]
                    }
                };
                return r.dvrEnabled || (n.searchParams = {
                    min_seconds: 30
                }), so(Ke(t, n).text(), (function(e) {
                    i = e
                }))
            }), (function() {
                throw new Error("Master playlist failed to load. Giving up updating after 8 attempts.")
            })), (function(e) {
                return n ? e : i
            })))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, r._beforeRetryMasterPlaylist = function(e, t, n) {
        try {
            const t = this;
            return so(ao(t._refreshUrl), (function(n) {
                t._masterPlaylistUrl = n, e.url = t._masterPlaylistUrl
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, l(n, [{
        key: "baseUrl",
        get: function() {
            return eo(this._masterPlaylistUrl)
        }
    }, {
        key: "lowLatencyMode",
        get: function() {
            var e;
            return !(null == (e = this.video) || !e.lowLatencyMode)
        },
        set: function(e) {
            this.video.lowLatencyMode = e, this.audio.lowLatencyMode = e, this.subtitles.lowLatencyMode = e
        }
    }, {
        key: "dvrEnabled",
        get: function() {
            var e;
            return !(null == (e = this.video) || !e.dvrEnabled)
        },
        set: function(e) {
            this.video.dvrEnabled = e, this.audio.dvrEnabled = e, this.subtitles.dvrEnabled = e
        }
    }, {
        key: "disableDeltaUpdates",
        get: function() {
            return this._disableDeltaUpdates
        }
    }])
}(wn);

function mo(e) {
    return [403, 404, 410].includes(e) || t.retryStatus(e)
}
const vo = ["width", "height", "bandwidth", "duration", "timescale", "presentationTimeOffset"];

function go(e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n].nodeName;
        let i = e[n].nodeValue; - 1 !== vo.indexOf(r) && (i = parseInt(i, 10)), "duration" === r && isNaN(i) && (i = Ao(e[n].nodeValue)), t[r] = i
    }
    return t
}

function yo(e, t, n) {
    return Array.prototype.filter.call(e.childNodes, (function(e) {
        return e instanceof Element && e.localName === n && e.namespaceURI === t
    }))
}

function Eo(e, t) {
    return e.hasAttribute(t) ? e.getAttribute(t) : null
}

function To(e, t, n) {
    return e.hasAttributeNS(t, n) ? e.getAttributeNS(t, n) : null
}

function So(e = "") {
    let t, n;
    return n = (t = e.match(/^(\d+)\/(\d+)$/)) ? Number(t[1] / t[2]) : Number(e), isNaN(n) ? null : n
}

function bo(e) {
    return Array.prototype.every.call(e.childNodes, (e => e.nodeType === Node.TEXT_NODE || e.nodeType === Node.CDATA_SECTION_NODE)) ? e.textContent.trim() : null
}

function Ao(e) {
    if (!e) return null;
    const t = /^([-])?P(([\d.]*)Y)?(([\d.]*)M)?(([\d.]*)D)?T?(([\d.]*)H)?(([\d.]*)M)?(([\d.]*)S)?/.exec(e);
    let n = 31536e3 * parseFloat(t[2] || 0) + 2592e3 * parseFloat(t[4] || 0) + 86400 * parseFloat(t[6] || 0) + 3600 * parseFloat(t[8] || 0) + 60 * parseFloat(t[10] || 0) + parseFloat(t[12] || 0);
    return void 0 !== t[1] && (n = -n), n
}
const wo = {
    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
};
var Io = Object.freeze({
    __proto__: null,
    fetchMasterPlaylistUrl: Zi,
    PLAYLIST_UPDATE: "1",
    PLAYLIST_ERROR: "2",
    M3U8Loader: _o,
    Rendition: Gi,
    Variant: Ki,
    M3U8Manifest: Yi,
    convertTsCodecs: function(e) {
        let t = e.replace(/mp2t/i, "mp4");
        const n = /avc1\.(66|77|100)\.(\d+)/.exec(t);
        if (n) {
            let e = "avc1.";
            const r = n[1];
            e += "66" === r ? "4200" : "77" === r ? "4d00" : "6400";
            const i = Number(n[2]);
            e += (i >> 4).toString(16), e += (15 & i).toString(16), t = t.replace(n[0], e)
        }
        return t
    },
    parseMPD: function(e, t, n = {}) {
        let r, i, o, s, a, u;

        function c(e, t) {
            return e.mimeType ? 0 === e.mimeType.indexOf(t) : e.representations.find((e => 0 === e.mimeType.indexOf(t)))
        }

        function l(e, t) {
            let r;
            return "audio" === t && n.audioLang && (r = e[0].adaptationSets.find((e => e.lang === n.audioLang && c(e, t)))), r || (r = e[0].adaptationSets.find((e => c(e, t))) || {}), (r.representations || []).map((e => {
                var t;
                return g(g({}, e), {}, {
                    avg_bitrate: e.bandwidth,
                    base_url: "",
                    bitrate: e.bandwidth,
                    duration: o,
                    framerate: So(e.frameRate),
                    init_segment_url: e.initSegment,
                    max_segment_duration: s,
                    mime_type: null !== (t = r.mimeType) && void 0 !== t ? t : e.mimeType
                })
            }))
        }

        function d(e, t) {
            const n = [];
            for (let r = 0; r < e.length; r++) {
                const i = go(e[r].attributes),
                    o = e[r].getElementsByTagName("Representation");
                i.representations = h(o, t), i.frameRate && i.representations.forEach((e => {
                    e.framerate = parseInt(i.frameRate, 10)
                })), 1 === i.representations.length && (i.width && (i.representations[0].width = i.width), i.height && (i.representations[0].height = i.height)), n.push(i)
            }
            return n
        }

        function h(e, t) {
            const n = [];
            for (let r = 0; r < e.length; r++) {
                const i = go(e[r].attributes),
                    o = e[r].getElementsByTagName("SegmentList")[0];
                let s = "";
                e[r].getElementsByTagName("BaseURL")[0] && (s = e[r].getElementsByTagName("BaseURL")[0].textContent), o && Object.assign(i, p(o, s, t));
                const a = e[r].getElementsByTagName("SegmentTemplate")[0];
                a && Object.assign(i, f(a, i)), n.push(i)
            }
            return n
        }

        function f(e, t) {
            const n = e.getElementsByTagName("S")[0],
                r = e.getElementsByTagName("S"),
                i = go(e.attributes);
            i.startNumber = parseInt(i.startNumber, 10), Number.isNaN(i.startNumber) && (i.startNumber = 1), i.timescale = parseInt(i.timescale, 10) || 1, i.initSegment = i.initialization.replace("$RepresentationID$", t.id), i.segments = [];
            let o = Eo(n, "t") / i.timescale,
                s = i.startNumber;
            for (let a = 0; a < r.length; a++) {
                const e = r[a],
                    n = Eo(e, "d") / i.timescale,
                    u = parseInt(Eo(e, "r") || 0, 10) + 1;
                for (let r = 0; r < u; r++) {
                    const e = o + n,
                        r = i.media.replace("$RepresentationID$", t.id).replace("$Time$", o).replace("$Number$", s);
                    i.segments.push({
                        url: r,
                        start: o,
                        end: e,
                        index: s
                    }), o += n, s += 1
                }
            }
            return i
        }

        function p(e, t, n) {
            const r = e.getElementsByTagName("Initialization")[0],
                i = e.getElementsByTagName("SegmentURL"),
                o = go(e.attributes);
            o.startNumber = parseInt(o.startNumber, 10), o.initSegment = t + Eo(r, "sourceURL"), o.segments = [];
            let s = 0;
            const a = o.duration / o.timescale;
            for (let u = 0; u < i.length; u++) {
                let e = s + a;
                if (e > n) {
                    if (u !== i.length - 1) throw new Error("segment list duration is greater than the period's duraton");
                    e = s + (n - s)
                }
                const r = Eo(i[u], "media");
                o.segments.push({
                    url: t + r,
                    start: s,
                    end: e
                }), s += a
            }
            return o
        }
        return function() {
            const n = (new DOMParser).parseFromString(e, "application/xml");
            r = n.getElementsByTagName("MPD")[0], i = function() {
                const e = function(e, t) {
                    let n = function(e, t) {
                        return Array.prototype.filter.call(e.childNodes, (function(e) {
                            return e instanceof Element && e.tagName === t
                        }))
                    }(e, t);
                    return 1 !== n.length ? null : n[0]
                }(r, "BaseURL");
                return e && bo(e) || t.substr(0, t.lastIndexOf("/") + 1)
            }(), o = Ao(Eo(r, "mediaPresentationDuration")), s = Ao(Eo(r, "maxSegmentDuration"));
            const c = function() {
                const e = [],
                    t = r.getElementsByTagName("Period");
                for (let n = 0; n < t.length; n++) {
                    const r = go(t[n].attributes),
                        i = t[n].getElementsByTagName("AdaptationSet");
                    r.adaptationSets = d(i, r.duration), e.push(r)
                }
                return e
            }();
            return c.length && (a = l(c, "video"), u = l(c, "audio")), g(g({}, function() {
                const e = "urn:mpeg:cenc:2013",
                    t = r.getElementsByTagName("ContentProtection");
                let n, i = [],
                    o = {};
                for (const r in t) {
                    const s = t[r];
                    if (!(s instanceof Element)) continue;
                    let a = Eo(s, "schemeIdUri");
                    a && wo[a] && i.push(wo[a]), n || (n = To(s, e, "default_KID"));
                    const u = yo(s, e, "pssh").map(bo);
                    let c = [];
                    try {
                        c = u.map((e => ({
                            initDataType: "cenc",
                            initData: e
                        })))
                    } catch (Np) {
                        throw new Error("Bad pshh encoding")
                    }
                    c.length > 0 && (o[wo[a]] = o[wo[a]] || {}, o[wo[a]].cenc = c[0]);
                    const l = yo(s, "usn:microsoft:playready", "pro").map(bo);
                    c = [];
                    try {
                        c = l.map((e => ({
                            initDataType: "mspr",
                            initData: e
                        })))
                    } catch (Np) {
                        throw new Error("Bad pro encoding")
                    }
                    c.length > 0 && (o[wo[a]] = o[wo[a]] || {}, o[wo[a]].mspr = c[0])
                }
                return n ? {
                    is_drm: !0,
                    key_info: {
                        cdms: T(new Set(i)),
                        key_id: n,
                        inits: o
                    }
                } : {}
            }()), {}, {
                audio: u,
                video: a,
                mediaPresentationDuration: o,
                maxSegmentDuration: s,
                baseUrl: i,
                base_url: i,
                get profiles() {
                    return Eo(r, "profiles")
                },
                get type() {
                    return Eo(r, "type")
                },
                get minimumUpdatePeriod() {
                    return Ao(Eo(r, "minimumUpdatePeriod"))
                },
                get publishTime() {
                    return Eo(r, "publishTime")
                },
                get availabilityStartTime() {
                    return Eo(r, "availabilityStartTime")
                },
                get timeShiftBufferDepth() {
                    return Ao(Eo(r, "timeShiftBufferDepth"))
                },
                get suggestedPresentationDelay() {
                    return Ao(Eo(r, "suggestedPresentationDelay"))
                },
                get minBufferTime() {
                    return Ao(Eo(r, "minBufferTime"))
                }
            })
        }()
    }
});

function Ro(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
let ko = function(e) {
    function t(t) {
        var n;
        return (n = e.call(this, t) || this)._videoElement = document.createElement("video"), n._videoElement.setAttribute("data-airplay", ""), n._videoElement.setAttribute("x-webkit-airplay", "allow"), n.addVideoEventListeners(), n
    }
    p(t, e);
    var n = t.prototype;
    return n.addVideoEventListeners = function(e = this._videoElement) {
        e.addEventListener(Li.LOADED_METADATA, (e => {
            this.fire(Li.LOADED_METADATA, e)
        })), e.addEventListener("webkitplaybacktargetavailabilitychanged", (e => {
            switch (e.availability) {
                case "available":
                    this._available || (this._available = !0, this.fire(Mi.AIRPLAY_AVAILABLE));
                    break;
                case "not-available":
                    this._available && (this._available = !1, this.fire(Mi.AIRPLAY_UNAVAILABLE))
            }
        })), e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", (e => {
            if (e.target.webkitCurrentPlaybackTargetIsWireless) return this._active = !0, void this.fire(Mi.AIRPLAY_ACTIVATED);
            this._active = !1, this.fire(Mi.AIRPLAY_DEACTIVATED)
        }))
    }, n.showPicker = function() {
        this._videoElement.webkitShowPlaybackTargetPicker(), this.loadMetadata().then((() => this._videoElement.webkitShowPlaybackTargetPicker())).catch((() => {}))
    }, n.loadMetadata = function() {
        try {
            const e = this;
            return e._videoElement.readyState >= 1 ? Promise.resolve() : Ro(new Promise(function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (Np) {
                        return Promise.reject(Np)
                    }
                }
            }((function(t) {
                return e._videoElement.addEventListener(Li.LOADED_METADATA, (() => {
                    t()
                })), Ro(Zi(e.getFile().src), (function(t) {
                    e._videoElement.src = t
                }))
            }))))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, l(t, [{
        key: "element",
        get: function() {
            return this._videoElement
        },
        set: function(e) {
            if (!(e instanceof HTMLVideoElement)) throw new TypeError("The element for AirPlay must be a <video>.");
            e !== this._videoElement && (this.addVideoEventListeners(e), this._videoElement = e, this._videoElement.setAttribute("x-webkit-airplay", "allow"))
        }
    }], [{
        key: "displayName",
        get: function() {
            return "AirPlayExternalDisplay"
        }
    }, {
        key: "supported",
        get: function() {
            return "WebKitPlaybackTargetAvailabilityEvent" in window
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return ["application/vnd.apple.mpegurl", "video/mp4"]
        }
    }])
}(Oi);
(() => {
    const e = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\./);
    e && (parseInt(e[1], 10), parseInt(e[2], 10))
})();
const Po = function(e) {
    for (let t = 0, n = this.length; t < n; t++)
        if (this[t].id === `${e}`) return this[t];
    return null
};

function Do(e = []) {
    return e.item = function(e) {
        return this[e]
    }, e.getTrackById = Po, e
}

function Oo(e) {
    const t = window.atob(e),
        n = t.length,
        r = new Uint8Array(n);
    for (let i = 0; i < n; i++) r[i] = t.charCodeAt(i);
    return r
}

function Lo(e, t, n, r) {
    let i = 0,
        o = 0,
        s = 0,
        a = 0;
    const u = e,
        c = t,
        l = n / r;
    return u / c >= l ? (o = c, i = (l * c).toFixed(2)) : (i = u, o = (u / l).toFixed(2)), s = Math.max((u - i) / 2, 0), a = Math.max((c - o) / 2, 0), {
        width: i,
        height: o,
        left: s,
        top: a
    }
}

function Co(e) {
    if (function(e) {
            return "webkitDisplayingFullscreen" in e && e.webkitDisplayingFullscreen
        }(e)) return !0;
    const t = [document.fullscreenElement, document.webkitFullscreenElement, document.webkitCurrentFullScreenElement, document.mozFullScreenElement, document.msFullscreenElement].find((e => void 0 !== e));
    return Boolean(t)
}

function No(e, t) {
    let n = e;
    return t && (n += `;codecs="${t}"`), n
}

function Mo(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    const n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function xo(e, t) {
    return e && e.tests && e.tests[t] ? e.tests[t] : null
}
let Uo = function(e, t) {
    this.name = e, this.message = t, Object.freeze(this)
};
const Fo = new WeakMap;
let jo = function() {
    function e(e, t = {}) {
        const n = parseFloat(e);
        if (isNaN(n)) throw new TypeError("Time must be a number.");
        if (n < 0) throw new TypeError("Time must be a positive number.");
        this.time = e, this.data = t, this.id = Ae();
        try {
            const n = "undefined" == typeof VTTCue ? TextTrackCue : VTTCue;
            this.vttCue = new n(e, e + .25, JSON.stringify(t)), this.vttCue.id = this.id
        } catch (Np) {
            throw new Uo("CuePointsNotSupported", "Cue points are not supported in this browser.")
        }
        Fo.set(this.vttCue, this), Object.freeze(this)
    }
    return e.fromVTTCue = function(t) {
        if (Fo.has(t)) return Fo.get(t);
        let n = {};
        try {
            n = JSON.parse(t.text)
        } catch (Np) {}
        return new e(t.startTime, n)
    }, e
}();

function Vo(e, t, n) {
    let r;
    try {
        document.removeChild({})
    } catch (Np) {
        r = Object.create(Object.getPrototypeOf(Np), {
            name: {
                value: t,
                configurable: !0,
                writable: !0
            },
            code: {
                value: e,
                configurable: !0,
                writable: !0
            },
            message: {
                value: n,
                configurable: !0,
                writable: !0
            },
            toString: {
                value: () => `${t}: DOM Exception ${e}`,
                configurable: !0,
                writable: !0
            }
        })
    }
    return Object.freeze(r)
}
const Bo = (e, t) => {
    if (!e || void 0 === e[t]) throw Vo(1, "INDEX_SIZE_ERR");
    return e[t]
};

function Ho(e = [], t = []) {
    return Object.freeze({
        get length() {
            return e.length
        },
        start: t => Bo(e, t),
        end: e => Bo(t, e),
        [Symbol.iterator]: () => function(e, t) {
            let n = 0;
            return {
                [Symbol.iterator]() {
                    return this
                },
                next: () => n < e.length ? {
                    done: !1,
                    value: t ? [e[n], t[n++]] : e[n++]
                } : {
                    done: !0
                }
            }
        }(e, t)
    })
}
Ho.from = function(e) {
    if (!(e instanceof TimeRanges)) throw new TypeError("Can only create a TelecineTimeRange from a TimeRanges object.");
    const t = [],
        n = [];
    for (let r = 0, i = e.length; r < i; r++) t.push(e.start(r)), n.push(e.end(r));
    return Ho(t, n)
};
const Xo = "DRMFailure",
    Wo = "MediaUnknownError",
    qo = "MediaUrlBadRequest",
    Go = "PlayInterrupted",
    Ko = "TextTracksNotSupported",
    Yo = "inline",
    $o = "picture-in-picture";

function zo() {}
const Qo = document.createElement("video"),
    Jo = {
        "application/vnd.apple.mpegurl": "application/vnd.apple.mpegurl",
        "video/mp4": 'video/mp4; codecs="avc1.64001E"',
        "video/webm": 'video/webm; codecs="vp8, vorbis"',
        "video/x-flv": 'video/x-flv; codecs="vp6"'
    },
    Zo = function() {
        const e = "undefined" == typeof TextTrack ? {} : TextTrack;
        return {
            disabled: "DISABLED" in e ? e.DISABLED : "disabled",
            hidden: "HIDDEN" in e ? e.HIDDEN : "hidden",
            showing: "SHOWING" in e ? e.SHOWING : "showing"
        }
    }();

function es(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const ts = function() {
        const e = document.createElement("track");
        return "track" in e && "oncuechange" in e.track
    }(),
    ns = new WeakMap;
let rs = function(e) {
    function t(t, n = {}) {
        var r;
        (r = e.call(this) || this)._element = t, r._options = n, r._telecineVideo = null, r._currentFile = null, r._externalDisplays = [];
        let i = t.querySelector("video");
        return i || (i = document.createElement("video"), i.preload = "none", r._element.appendChild(i)), i.setAttribute("tabindex", "-1"), r._video = i, n.playRequest && (r._playRequest = n.playRequest, r._playRequest.video = i), n.htmlScanner && n.htmlScanner.controls && (r._video.controls = !0), r._boundHandleVideoEvent = r.handleVideoEvent.bind(r), r._boundHandleAudioEvent = r.handleAudioEvent.bind(r), r.addVideoEventListeners(), r.addAudioEventListeners(), r._preload = "none", r._externalDisplayActivated = !1, r._inFullscreen = !1, r._lastCurrentTime = -1, r._switchingVideo = !1, r._resetInViewTracking(), r
    }
    p(t, e), t.supported = function() {
        return t.supportedVideoTypes.length > 0
    };
    var n = t.prototype;
    return n.deactivate = function() {
        this._telecineVideo && (this._telecineVideo.off(xi.FILE_SRC_UPDATE), this._telecineVideo.off("texttracksrcupdate")), this.removeVideoEventListeners(), this.removeAudioEventListeners(), this._switchingVideo || this.removeSnapshot(), this._video.style.display = "none", this._cleanUpInViewTracking()
    }, n.reactivate = function() {
        this.addVideoEventListeners(), this.addAudioEventListeners(), this._video.style.display = "", this._resetInViewTracking()
    }, n.addVideoEventListeners = function(e = this._video) {
        Object.keys(Li).forEach((t => {
            const n = Li[t];
            e.addEventListener(n, this._boundHandleVideoEvent)
        }))
    }, n.addAudioEventListeners = function(e = this._video) {
        var t;
        null != e && e.audioTracks && "function" == typeof(null == (t = e.audioTracks) ? void 0 : t.addEventListener) && (e.audioTracks.addEventListener(Ci.ADD_TRACK, this._boundHandleAudioEvent), e.audioTracks.addEventListener(Ci.REMOVE_TRACK, this._boundHandleAudioEvent), e.audioTracks.addEventListener(Ci.CHANGE, this._boundHandleAudioEvent))
    }, n.removeVideoEventListeners = function(e = this._video) {
        Object.keys(Li).forEach((t => {
            const n = Li[t];
            e.removeEventListener(n, this._boundHandleVideoEvent)
        }))
    }, n.removeAudioEventListeners = function(e = this._video) {
        var t;
        null != e && e.audioTracks && "function" == typeof(null == (t = e.audioTracks) ? void 0 : t.removeEventListener) && (e.audioTracks.removeEventListener(Ci.ADD_TRACK, this._boundHandleAudioEvent), e.audioTracks.removeEventListener(Ci.REMOVE_TRACK, this._boundHandleAudioEvent), e.audioTracks.removeEventListener(Ci.CHANGE, this._boundHandleAudioEvent))
    }, n.play = function(e) {
        return this._playRequest.start(e).catch((e => {
            var t;
            if ("sd-fallback" !== (null == (t = this._telecineVideo.drmHandler) ? void 0 : t.state) || "AbortError" !== e.name) throw this._onPlayError(e), e
        }))
    }, n._onPlayError = function(e) {
        this.fire(Li.ERROR, new Uo(null == e ? void 0 : e.name, null == e ? void 0 : e.message))
    }, n.pause = function() {
        this._playRequest.cancel(), this._video.pause()
    }, n.onpause = function() {}, n.ontimeupdate = function() {
        this._lastCurrentTime = this.currentTime
    }, n.addTextTrack = function(e) {
        let t, n;
        return e.src ? (t = document.createElement("track"), t.kind = e.kind, t.src = e.src, t.id = `telecine-track-${e.id}`, t.srclang = e.language, t.label = e.label, this._video.appendChild(t), n = t.track) : (n = this._video.addTextTrack(e.kind, e.label, e.language), this._textTracks = this._textTracks || {}, this._textTracks[`telecine-track-${e.id}`] = n), this._addTextTrackListeners(e, n, t), n
    }, n._addTextTrackListeners = function(e, t, n) {
        t.addEventListener("cuechange", (() => e.dispatchEvent("cuechange"))), this._video.addEventListener("timeupdate", (() => {
            Co(this._video) && (e.mode = t.mode)
        }));
        const r = () => {
                const n = ie.iOS && Co(this._video);
                !e._modeHasBeenSet || n ? e.mode = t.mode : t.mode = Zo[e.mode]
            },
            i = [];
        if (n ? n.addEventListener("load", r) : r(), ["loadeddata", "seeking"].forEach((e => {
                this._video.addEventListener(e, r), i.push([e, r])
            })), e._modeHasBeenSet && (t.mode = Zo[e.mode]), !ts) {
            let n = [];
            const r = () => {
                if (t && "disabled" !== Zo[t.mode]) {
                    if (n.length !== t.activeCues.length) return e.dispatchEvent("cuechange"), void(n = Array.from(t.activeCues));
                    for (let r = 0, i = t.activeCues.length; r < i; r++)
                        if (t.activeCues[r].startTime !== n[r].startTime) return e.dispatchEvent("cuechange"), void(n = Array.from(e.activeCues))
                }
            };
            this._video.addEventListener("timeupdate", r), i.push(["timeupdate", r])
        }
        return ns.set(e, i), t
    }, n.removeTextTrack = function(e) {
        const t = this._video.querySelector(`#telecine-track-${e.id}`);
        t && this._video.removeChild(t);
        const n = ns.get(e);
        Array.isArray(n) && n.forEach((([e, t]) => {
            this._video.removeEventListener(e, t)
        }))
    }, n.getCuesForTrack = function(e) {
        const t = this.getTrackById(`telecine-track-${e.id}`);
        return t ? Array.from(t.cues) : []
    }, n.getActiveCuesForTrack = function(e) {
        const t = this.getTrackById(`telecine-track-${e.id}`);
        return t && t.activeCues ? Array.from(t.activeCues) : []
    }, n.setModeForTrack = function(e, t) {
        const n = this.getTrackById(`telecine-track-${e.id}`);
        return n && n.mode !== Zo[t] && (n.mode = Zo[t], ts || "disabled" === t || e.dispatchEvent("cuechange")), this
    }, n.setSrcForTrack = function(e, t) {
        const n = this._video.querySelector(`#telecine-track-${e.id}`);
        return n && null === n.track.cues && (n.src = t), this
    }, n.enableAudioTrack = function(e) {
        if (!this.constructor.supportsVideoElementAudioTracks || !this.audioTracks) return null;
        if (!e) return null;
        if (!this.audioTracks.getTrackById(e)) return null;
        let t = null;
        for (let n = 0; n < this.audioTracks.length; n++) {
            const r = this.audioTracks[n].id === e;
            this.audioTracks[n].enabled = r, r && (t = this.audioTracks[n])
        }
        return t
    }, n._createChapterCue = function(e, t, n = null) {
        let r;
        this._chaptersTrack || (this._chaptersTrack = this._video.addTextTrack("chapters"), this._chaptersTrack.mode = "hidden");
        const i = e.timecode,
            o = n ? n.timecode : t,
            s = window.VTTCue || window.TextTrackCue;
        try {
            r = new s(i, o, e.title)
        } catch (Np) {
            throw new Uo("ChaptersNotSupported", "Chapters are not supported in this browser.")
        }
        r.size = (o - i) / t, r.id = i, this._chaptersTrack.addCue(r)
    }, n.addChapter = function(e, t) {
        const n = this.video.chapters,
            r = {
                timecode: e,
                title: t
            };
        n.push(r), n.sort(((e, t) => e.timecode - t.timecode));
        const i = n[n.indexOf(r) + 1];
        this._createChapterCue(r, this.video.duration, i), this._updateChapterCues(this._chaptersTrack, this.video.duration)
    }, n.removeChapter = function(e) {
        try {
            this._chaptersTrack.removeCue(e)
        } catch (Np) {
            throw new Uo("ChaptersNotSupported", "Chapters are not supported in this browser.")
        }
        const t = this.video.chapters.find((t => t.timecode === e.timecode));
        this.video.chapters.splice(t, 1), this._updateChapterCues(this._chaptersTrack, this.video.duration)
    }, n._updateChapterCues = function(e, t) {
        for (let n = 0; n < e.cues.length; n++) {
            let r = e.cues[n],
                i = e.cues[n + 1];
            const o = i ? i.startTime : t;
            r.endTime = o, r.size = (o - r.startTime) / t
        }
        this.fire(xi.CHAPTER_CUES_UPDATED)
    }, n.addChapters = function(e, t) {
        0 !== e.length && t && (e = e.filter((e => this._isValidChapter(e, t)))).sort(((e, t) => e.timecode - t.timecode)).forEach(((n, r) => this._createChapterCue(n, t, e[r + 1])))
    }, n.addCuePoint = function(e, t = {}) {
        if (this._cuePointTrack || (this._cuePointTrack = this._video.addTextTrack("metadata"), this._cuePointTrack.mode = "hidden", this._cuePointTrack.addEventListener("cuechange", (e => {
                Array.from(e.target.activeCues).forEach((e => {
                    this.fire(xi.CUE_POINT, jo.fromVTTCue(e))
                }))
            })), this._video.addEventListener("canplay", (e => {
                this._cuePointTrack.mode = "hidden"
            }))), e = parseFloat(e), isNaN(e)) throw new TypeError("Time must be a number.");
        if (e < 0 || e >= this.duration) throw new TypeError("Time must be a positive number less than the duration of the video.");
        const n = new jo(e, t);
        return this._cuePointTrack.addCue(n.vttCue), n
    }, n.removeCuePoint = function(e) {
        if (!e) throw new Uo("InvalidCuePoint", "The specified cue point is not valid.");
        return this._cuePointTrack.removeCue(e.vttCue), !0
    }, n.removeAllCuePoints = function() {
        return this._cuePointTrack && this._cuePointTrack.length && Array.from(this._cuePointTrack.cues).forEach((e => {
            this._cuePointTrack.removeCue(e)
        })), !0
    }, n.requestPictureInPicture = function() {
        try {
            const e = this;
            return es(function(t, n) {
                var r = function() {
                    if (e._video.readyState < 1) return function(e) {
                        if (!void 0) return e && e.then ? e.then(zo) : Promise.resolve()
                    }(e._initPreload())
                }();
                return r && r.then ? r.then(n) : n()
            }(0, (function() {
                switch (ie.pictureInPictureSupportType) {
                    case "pip-api":
                        return e._video.requestPictureInPicture();
                    case "webkit-presentation-mode":
                        return e._video.webkitSetPresentationMode($o);
                    default:
                        throw new Error("Picture-in-picture is not supported by this browser")
                }
            })))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n._initPreload = function() {
        return this.preload = "auto", new Promise((e => {
            this.once(Li.LOADED_METADATA, e)
        }))
    }, n.exitPictureInPicture = function() {
        try {
            const e = this;
            switch (ie.pictureInPictureSupportType) {
                case "pip-api":
                    return es(document.exitPictureInPicture());
                case "webkit-presentation-mode":
                    return es(e._video.webkitSetPresentationMode(Yo));
                default:
                    throw new Error("Picture-in-picture is not supported by this browser")
            }
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n.isInView = function() {
        var e, t;
        return null === (e = null == (t = this._playerInViewTracker) ? void 0 : t.isInView) || void 0 === e || e
    }, n.onerror = function() {
        if (!this._video.error) return !1;
        switch (this._video.error.code) {
            case this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                return this._fireVideoError("MediaSrcNotSupportedError", "The media was not suitable."), this._switchToNextFile(), !1;
            case this._video.error.MEDIA_ERR_DECODE:
                return -1 !== this._lastCurrentTime && ie.iOS ? (this._video.load(), this.currentTime = this._lastCurrentTime, this._lastCurrentTime = -1, !1) : (this._fireVideoError("MediaDecodeError", "The media could not be decoded."), this._switchToNextFile(), !1);
            case this._video.error.MEDIA_ERR_NETWORK:
                return this._fireVideoError("MediaNetworkError", "A network error ocurred while fetching the media."), !1;
            case this._video.error.MEDIA_ERR_ABORTED:
                return this._fireVideoError("MediaAbortedError", "The user agent aborted the fetching of the media."), !1;
            default:
                return this._fireVideoError(Wo, "An unknown error occurred."), !1
        }
    }, n._fireVideoError = function(e, t) {
        this.fire(Li.ERROR, new Uo(e, t))
    }, n.onended = function() {
        if (this._video.paused || this._video.pause(), this.currentTime < this._video.duration) return !1
    }, n.onwaiting = function() {
        return !1
    }, n.onwebkitbeginfullscreen = function() {
        this._inFullscreen = !0
    }, n.onwebkitendfullscreen = function() {
        this._video.webkitPresentationMode === Yo && !0 === this._video.controls && (this._video.controls = !1), this._inFullscreen = !1
    }, n.onwebkitpresentationmodechanged = function() {
        this.fire(this.pictureInPictureActive ? Li.ENTER_PICTURE_IN_PICTURE : Li.LEAVE_PICTURE_IN_PICTURE)
    }, n.shouldHandleVideoEvent = function(e) {
        return !0
    }, n.handleVideoEvent = function(e) {
        e.target === this._video && !1 !== this.shouldHandleVideoEvent(e) && ("function" == typeof this[`on${e.type}`] && !1 === this[`on${e.type}`](e) || this.fire(e.type))
    }, n.handleAudioEvent = function() {
        this.fire(xi.AUDIO_TRACK_CHANGED)
    }, n.swapVideo = function(e, t) {
        const n = e.paused;
        this.removeVideoEventListeners(e), this.removeAudioEventListeners(e), e.parentElement.replaceChild(t, e), e.pause(), t.currentTime = e.currentTime, n || t.play(), this.addVideoEventListeners(t), this.addAudioEventListeners(t), this._video = t
    }, n.onexternaldisplayactivated = function(e) {
        this._externalDisplayActivated || (this._video !== e.element && (this._originalVideo = this._video, this.swapVideo(this._video, e.element)), this._externalDisplayActivated = !0)
    }, n.onexternaldisplaydeactivated = function(e) {
        this._externalDisplayActivated && (this._originalVideo && (this.swapVideo(e.element, this._originalVideo), this._originalVideo = null), this._externalDisplayActivated = !1)
    }, n.setVideoSrc = function(e) {
        this._video.src = e
    }, n.canSeekTo = function(e) {
        const t = this.duration;
        if (t && e > t && (e = t), this._video.seekable.length > 0)
            for (let n = 0, r = this._video.seekable.length; n < r; n++)
                if (this._video.seekable.start(n) <= e && this._video.seekable.end(n) >= e) return !0;
        return !1
    }, n.seekToTime = function(e) {
        return this.canSeekTo(e) ? (this._video.currentTime = e, Promise.resolve(this._video.currentTime)) : new Promise((t => {
            const n = () => {
                this.canSeekTo(e) && (Object.keys(Li).forEach((e => {
                    const t = Li[e];
                    this._video.removeEventListener(t, n)
                })), this._video.currentTime = e, t(this._video.currentTime))
            };
            Object.keys(Li).forEach((e => {
                const t = Li[e];
                this._video.addEventListener(t, n)
            }))
        }))
    }, n.takeSnapshot = function() {
        let e = this._element.querySelector("[telecine-snapshot]");
        e || (e = document.createElement("canvas"), e.setAttribute("telecine-snapshot", ""), this._element.appendChild(e)), e.setAttribute("width", `${this._element.clientWidth}px`), e.setAttribute("height", `${this._element.clientHeight}px`), e.style.display = "";
        const {
            width: t,
            height: n,
            left: r,
            top: i
        } = Lo(this._video.clientWidth, this._video.clientHeight, this._video.videoWidth, this._video.videoHeight);
        e.style.cssText = `position:absolute;width:${t}px;height:${n}px;left:${r}px;top:${i}px`;
        const o = e.getContext("2d");
        e.width > 0 && e.height > 0 && o.drawImage(this._video, 0, 0, e.width, e.height)
    }, n.removeSnapshot = function() {
        const e = this._element.querySelector("[telecine-snapshot]");
        e && (e.style.display = "none")
    }, n.getTrackById = function(e) {
        if (this._textTracks && this._textTracks[e]) return this._textTracks[e];
        if ("function" == typeof this._video.textTracks.getTrackById) return this._video.textTracks.getTrackById(e);
        const t = document.getElementById(e);
        return t ? t.track : null
    }, n.initDrm = function() {
        const e = this._telecineVideo.drmHandler;
        e && e.init(this)
    }, n.showExternalDisplayPicker = function(e) {
        if (!this._externalDisplays.length) throw new Uo("ExternalDisplayUnvailable", "No external displays are available.");
        if (!e) return void this._externalDisplays[0].showPicker();
        const t = this._externalDisplays.filter((t => t.constructor.displayName.replace("ExternalDisplay", "") === e))[0];
        if (!t) throw new Uo("InvalidExternalDisplay", "The specified external display is not available.");
        t.showPicker()
    }, n.setCaptionsShouldDisplay = function(e) {}, n.setCaptionsShouldLoad = function(e) {}, n._pickFile = function() {
        if (this._files.length < 1) return null;
        const e = this._files.slice(0).sort(((e, t) => e.priority - t.priority));
        return e[0]
    }, n._updateCurrentFile = function() {
        const e = this._pickFile();
        e ? this.currentFile = e : this.fire(xi.SCANNER_ERROR, {
            reason: "all files failed"
        })
    }, n._isValidChapter = function(e, t) {
        return void 0 !== e.timecode && e.timecode >= 0 && e.timecode <= t && void 0 !== e.title
    }, n._switchToNextFile = function() {
        const e = this._files.indexOf(this._currentFile);
        this._files.splice(e, 1), this._updateCurrentFile()
    }, n._cleanUpInViewTracking = function() {
        var e;
        null == (e = this._playerInViewTracker) || e.cleanup()
    }, n._resetInViewTracking = function() {
        this._cleanUpInViewTracking(), this._playerInViewTracker = le(this._element)
    }, l(t, [{
        key: "audioTracks",
        get: function() {
            return this._video.audioTracks
        }
    }, {
        key: "chaptersTrack",
        get: function() {
            return this._chaptersTrack
        }
    }, {
        key: "manifest",
        get: function() {
            return this._manifest
        }
    }, {
        key: "manifestLoaded",
        get: function() {
            return !!this._manifest
        }
    }, {
        key: "buffered",
        get: function() {
            return Ho.from(this._video.buffered)
        }
    }, {
        key: "cuePoints",
        get: function() {
            var e, t;
            return null != (e = this._cuePointTrack) && e.cues && "function" == typeof(null == (t = this._cuePointTrack) ? void 0 : t.cues[Symbol.iterator]) ? Array.from(this._cuePointTrack.cues).map((e => jo.fromVTTCue(e))) : []
        }
    }, {
        key: "currentFile",
        get: function() {
            return this._currentFile
        },
        set: function(e) {
            const n = !this._video.paused,
                r = this.currentTime,
                i = !this._currentFile || e.video.id !== this._currentFile.video.id;
            if (i || this.takeSnapshot(), this._currentFile = e, i && (this._video.preload = this._preload), this.constructor === t && this._video.readyState > 0 && (this._video.currentTime = 0), (ie.iOS || ie.android) && this._currentFile.video.title) {
                let e = this._currentFile.video.title;
                this._currentFile.video.subtitle && (e = `${e} ${this._currentFile.video.subtitle}`), this._video.setAttribute("title", e)
            } else this._video.removeAttribute("title");
            this.setVideoSrc(this._currentFile.src, i), this.fire(xi.CURRENT_FILE_CHANGE, e), ie.iOS && !i && this.play().catch(this._onPlayError.bind(this)), this.constructor !== t || i ? n && this.play().catch(this._onPlayError.bind(this)) : (this.seekToTime(r).then((e => (n && this.play().catch(this._onPlayError.bind(this)), e))).catch((() => {})), this.once("canplay", (() => this.removeSnapshot())), this.once("playing", (() => this.removeSnapshot())))
        }
    }, {
        key: "currentTime",
        get: function() {
            return this._video.currentTime
        },
        set: function(e) {
            this.seekToTime(e)
        }
    }, {
        key: "duration",
        get: function() {
            return this._video.duration
        }
    }, {
        key: "ended",
        get: function() {
            return this._video.ended
        }
    }, {
        key: "externalDisplayAvailable",
        get: function() {
            return this._externalDisplays.some((e => e.available))
        }
    }, {
        key: "externalDisplayActive",
        get: function() {
            return this._externalDisplays.some((e => e.active))
        }
    }, {
        key: "loop",
        get: function() {
            return this._video.loop
        },
        set: function(e) {
            this._video.loop = e
        }
    }, {
        key: "isLowerProfileAvailable",
        get: function() {
            return null
        }
    }, {
        key: "muted",
        get: function() {
            return this._video.muted
        },
        set: function(e) {
            this._video.muted = e
        }
    }, {
        key: "playsinline",
        get: function() {
            return this._video.playsinline
        },
        set: function(e) {
            this._video.playsinline = e, e ? this._video.setAttribute("playsinline", "") : this._video.removeAttribute("playsinline")
        }
    }, {
        key: "paused",
        get: function() {
            return this._video.paused
        }
    }, {
        key: "defaultPlaybackRate",
        get: function() {
            return this._video.defaultPlaybackRate
        },
        set: function(e) {
            this._video.defaultPlaybackRate = e
        }
    }, {
        key: "playbackRate",
        get: function() {
            return this._video.playbackRate
        },
        set: function(e) {
            this._video.playbackRate = e
        }
    }, {
        key: "played",
        get: function() {
            return this._video.played
        }
    }, {
        key: "seekable",
        get: function() {
            return this._video.seekable
        }
    }, {
        key: "seeking",
        get: function() {
            return this._video.seeking
        }
    }, {
        key: "preload",
        get: function() {
            return this._preload
        },
        set: function(e) {
            this._video.preload = e, this._preload = e
        }
    }, {
        key: "autoPictureInPicture",
        get: function() {
            return this._video.autoPictureInPicture
        },
        set: function(e) {
            this._video.autoPictureInPicture = e
        }
    }, {
        key: "disablePictureInPicture",
        get: function() {
            return this._video.disablePictureInPicture
        },
        set: function(e) {
            this._video.disablePictureInPicture = e
        }
    }, {
        key: "pictureInPictureActive",
        get: function() {
            return this._video.webkitPresentationMode === $o || !!document.pictureInPictureElement
        }
    }, {
        key: "isPlayRequestActive",
        get: function() {
            var e, t;
            return null !== (e = null == (t = this._playRequest) ? void 0 : t.active) && void 0 !== e && e
        }
    }, {
        key: "pictureInPictureEnabled",
        get: function() {
            if (this.disablePictureInPicture) return !1;
            switch (ie.pictureInPictureSupportType) {
                case "pip-api":
                    return document.pictureInPictureEnabled;
                case "webkit-presentation-mode":
                    return !0;
                default:
                    return !1
            }
        }
    }, {
        key: "video",
        get: function() {
            return this._telecineVideo
        },
        set: function(e) {
            if (this.reactivate(), this._telecineVideo !== e) {
                if (this._telecineVideo && (this._telecineVideo.off(xi.FILE_SRC_UPDATE), this._telecineVideo.off("texttracksrcupdate")), this.removeAllCuePoints(), this._telecineVideo = e, this._files = e.files.filter((e => -1 !== this.constructor.supportedVideoTypes.indexOf(e.mime))), this._telecineVideo.on(xi.FILE_SRC_UPDATE, (e => {
                        e === this._currentFile && this._updateCurrentFile()
                    })), this._telecineVideo.on("texttracksrcupdate", (e => {
                        this.video.currentScanner && this.video.currentScanner.setSrcForTrack(e, e.src)
                    })), this._options.externalDisplays && this._options.externalDisplays.length) {
                    this._externalDisplays = [];
                    let t = this.constructor.supportedExternalDisplays;
                    Array.isArray(t) || (t = []);
                    const n = t.map((e => e.displayName));
                    this._options.externalDisplays.filter((e => e.supported && -1 !== n.indexOf(e.displayName))).forEach((t => {
                        const n = new t(e),
                            r = t.displayName.replace("ExternalDisplay", "");
                        n.on(Li.LOADED_METADATA, (e => this.fire(Li.LOADED_METADATA, e))), n.on("available", (() => this.fire(Ni.AVAILABLE, {
                            type: r
                        }))), n.on("unavailable", (() => this.fire(Ni.UNAVAILABLE, {
                            type: r
                        }))), n.on("activated", (() => {
                            "function" == typeof this.onexternaldisplayactivated && this.onexternaldisplayactivated(n), this.fire(Ni.ACTIVATED, {
                                type: r
                            })
                        })), n.on("deactivated", (() => {
                            "function" == typeof this.onexternaldisplaydeactivated && this.onexternaldisplaydeactivated(n), this.fire(Ni.DEACTIVATED, {
                                type: r
                            })
                        })), this._externalDisplays.push(n)
                    }))
                }
                this._updateCurrentFile(), ie.iOS && this._externalDisplays.forEach((e => {
                    "AirPlay" === e.constructor.displayName && (e.element = this._video)
                })), this.initDrm()
            }
        }
    }, {
        key: "videoElement",
        get: function() {
            return this._video
        }
    }, {
        key: "videoWidth",
        get: function() {
            return this._video.videoWidth
        }
    }, {
        key: "videoHeight",
        get: function() {
            return this._video.videoHeight
        }
    }, {
        key: "volume",
        get: function() {
            return M(this._video.volume)
        },
        set: function(e) {
            this._video.volume = N(e)
        }
    }, {
        key: "readyState",
        get: function() {
            return this._video.readyState
        }
    }], [{
        key: "displayName",
        get: function() {
            return "HTMLScanner"
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            const e = [];
            if ("function" != typeof Qo.canPlayType) return e;
            for (const t in Jo) {
                const n = Jo[t];
                ie.android && "application/vnd.apple.mpegurl" === t || (ie.android && !ie.mobileAndroid && "video/mp4" === t && ie.android instanceof String ? parseInt(ie.android.split(".")[0], 10) > 3 && e.push(t) : Qo.canPlayType(n).replace(/^no$/, "") && e.push(t))
            }
            return e
        }
    }, {
        key: "supportedAudioTypes",
        get: function() {
            return []
        }
    }, {
        key: "supportedExternalDisplays",
        get: function() {
            return [ko]
        }
    }, {
        key: "supportsVideoElementAudioTracks",
        get: function() {
            return void 0 !== Qo.audioTracks && this.supportedVideoTypes.includes("application/vnd.apple.mpegurl")
        }
    }])
}(wn);

function is(e, t = []) {
    if (0 === e.length) return 0;
    let n = 0,
        r = 0;
    for (let i = 0; i < e.length; i++) {
        const o = t[i] || 1;
        r += o, n += e[i] * o
    }
    return n / r
}

function os(e) {
    const t = T(e).sort(((e, t) => e - t)),
        n = Math.floor(t.length / 2);
    return t.length % 2 ? t[n] : (t[n - 1] + t[n]) / 2
}
let ss = function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    return p(t, e), t
}(A(Error));

function as(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const us = cs((function(e, t) {
    const n = this;
    return function(e, t) {
        var i = function() {
            if (!o(bs, n)) return as(r(Ls, n, qs).call(n), (function(e) {
                a(bs, n, new e({
                    keepOriginalTimestamps: !0
                }))
            }))
        }();
        return i && i.then ? i.then(t) : t()
    }(0, (function() {
        return new Promise((r => {
            o(bs, n).on("data", (t => {
                o(bs, n).off("data");
                let i = new Uint8Array(t.initSegment.byteLength + t.data.byteLength);
                i.set(t.initSegment, 0), i.set(t.data, t.initSegment.byteLength), r(e.data.isInitSegmentRequest ? t.initSegment : i)
            })), o(bs, n).push(new Uint8Array(t)), o(bs, n).flush()
        }))
    }))
}));

function cs(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }
}
const ls = cs((function() {
    const e = this;
    return function() {
        var t = function() {
            if (o(As, e)) return function(e) {
                if (!void 0) return e && e.then ? e.then(ds) : Promise.resolve()
            }(o(As, e))
        }();
        if (t && t.then) return t.then(ds)
    }()
}));

function ds() {}
var hs = new WeakMap,
    fs = new WeakMap,
    ps = new WeakMap,
    _s = new WeakMap,
    ms = new WeakMap,
    vs = new WeakMap,
    gs = new WeakMap,
    ys = new WeakMap,
    Es = new WeakMap,
    Ts = new WeakMap,
    Ss = new WeakMap,
    bs = new WeakMap,
    As = new WeakMap,
    ws = new WeakMap,
    Is = new WeakMap,
    Rs = new WeakMap,
    ks = new WeakMap,
    Ps = new WeakMap,
    Ds = new WeakMap,
    Os = new WeakMap,
    Ls = new WeakSet;
let Cs = function(e) {
    function t(t = {}) {
        var n;
        u(n = e.call(this) || this, Ls), s(n, hs, void 0), s(n, fs, void 0), s(n, ps, void 0), s(n, _s, 100), s(n, ms, void 0), s(n, vs, void 0), s(n, gs, void 0), s(n, ys, void 0), s(n, Es, new Set), s(n, Ts, void 0), s(n, Ss, !1), s(n, bs, void 0), s(n, As, void 0), s(n, ws, !1), s(n, Is, []), s(n, Rs, []), s(n, ks, []), s(n, Ps, []), s(n, Ds, []), s(n, Os, []), a(fs, n, x("Fetcher", "color: #586e75"));
        const {
            includeWithSpeeds: i = !0,
            parallel: o = 1,
            retryAbortErrors: c = !0,
            retryCount: l = 3,
            timeout: d = 0,
            networkInformationApiAB: h = "control"
        } = t;
        return a(hs, n, i), a(ps, n, o), a(ms, n, c), a(vs, n, l), a(gs, n, d), a(ys, n, h), r(Ls, n, Ms).call(n), n
    }
    p(t, e);
    var n = t.prototype;
    return n.getPercentileSpeed = function(e = 5, t = .8) {
        return function(e, t) {
            if (0 === e.length) return 0;
            const n = T(e).sort(((e, t) => e - t));
            if (t <= 0) return n[0];
            if (t >= 1) return n[n.length - 1];
            const r = n.length * t,
                i = Math.floor(r),
                o = i + 1,
                s = r % 1;
            return o >= n.length ? n[i] : n[i] * (1 - s) + n[o] * s
        }(o(Ds, this).slice(-e), t)
    }, n.getAverageSpeed = function(e = 5, t = []) {
        return is(o(Ds, this).slice(-e), t)
    }, n.getAverageSpeedNetworkInformationApi = function(e = 5, t = []) {
        return is(o(Os, this).slice(-e), t)
    }, n.getHarmonicAverageSpeed = function(e = 5) {
        return function(e) {
            if (0 === e.length) return 0;
            let t = 0;
            for (let n = 0; n < e.length; n++) t += 1 / e[n];
            return e.length / t
        }(o(Ds, this).slice(-e))
    }, n.getMedianSpeed = function(e = 5) {
        return os(o(Ds, this).slice(-e))
    }, n.getResponseSpeeds = function() {
        return o(Ds, this)
    }, n.getProgressSpeeds = function() {
        return o(Ps, this)
    }, n.getFailedSegments = function() {
        return o(Rs, this)
    }, n.getSuccessfulSegments = function() {
        return o(ks, this)
    }, n.resetResponseSpeeds = function() {
        o(Ds, this).length = 0
    }, n.add = function(e) {
        return new Promise(((t, n) => {
            const i = r(Ls, this, Fs).call(this, e, t, n);
            r(Ls, this, xs).call(this, i), o(Ss, this) && !o(ws, this) && r(Ls, this, Us).call(this)
        }))
    }, n.abort = function(e = null) {
        o(Is, this).filter((t => !e || e === t.stream)).forEach((e => {
            e.reject(new ss("Stream manually aborted")), this.fire("downloadabort", e.identifier)
        })), a(Is, this, o(Is, this).filter((t => e && e !== t.stream))), o(Es, this).forEach((t => {
            e && e !== t.stream || t.request.abort()
        }))
    }, n.start = function() {
        o(Ss, this) || (a(Ss, this, !0), r(Ls, this, Us).call(this))
    }, n.stop = function() {
        a(Ss, this, !1)
    }, n.saveResponseSpeeds = function(e, t, n) {
        const r = t / 1e3,
            i = e.perfTimings;
        if (o(hs, this) && e.includeWithBandwidthChecks) {
            const t = 8 * n,
                s = i && n <= 16e3;
            let a = t / r;
            if (e.excludeConnectTime && n > 16e3 && n <= 2e5) {
                const e = (50 * Math.max(0, 1 - t / 16e5) + 150) / 1e3;
                a = t / Math.max(.1, r - e)
            } else if (s) {
                const e = i.fetchStart || i.workerStart || i.requestStart || 0;
                a = t / (r - Math.max(0, i.responseStart - e) / 1e3)
            }
            o(Ds, this).push(a);
            const u = ie.navigatorConnection;
            u && "variant_2" === o(ys, this) && o(Os, this).push(1e6 * u.downlink)
        }
        o(Ds, this).length > 100 && o(Ds, this).shift(), o(Os, this).length > 100 && o(Os, this).shift()
    }, l(t, [{
        key: "pendingFetches",
        get: function() {
            const e = [];
            return o(Es, this).forEach((t => {
                const n = o(Ts, this).get(t);
                n && (n.elapsedTime = pe() - t.data.requestSendTime, e.push(n))
            })), e
        }
    }])
}(wn);

function Ns(e) {
    let t = 0;
    for (; t < o(Is, this).length && !(o(Is, this)[t].priority > e.priority); t++);
    o(Is, this).splice(t, 0, e)
}

function Ms() {
    a(Ts, this, new WeakMap), window.addEventListener("online", (() => {
        this.start(), o(As, this) && (o(As, this).resolve(), a(As, this, null))
    })), window.addEventListener("offline", (() => {
        this.stop(), this.abort(), a(As, this, de())
    }))
}

function xs(e) {
    e.hasOwnProperty("priority") ? r(Ls, this, Ns).call(this, e) : o(Is, this).push(e)
}

function Us() {
    if (!o(Ss, this)) return;
    a(ws, this, !0);
    const e = o(ps, this) - o(Es, this).size;
    for (let t = 0; t < e; t++) r(Ls, this, Vs).call(this)
}

function Fs(e, t, n) {
    let r = e;
    return "object" == typeof e && e.id && (r = e.id), Object.assign({}, e, {
        identifier: r,
        resolve: t,
        reject: n
    })
}

function js() {
    0 !== o(Es, this).size || 0 !== o(Is, this).length ? o(Es, this).size < o(ps, this) && r(Ls, this, Us).call(this) : a(ws, this, !1)
}

function Vs() {
    if (0 === o(Is, this).length) return void a(ws, this, !1);
    const t = o(Is, this).shift(),
        {
            url: n,
            byteRange: i,
            isInitSegmentRequest: s,
            identifier: u,
            stream: c,
            timeout: l
        } = t,
        d = {
            stream: c,
            data: {
                url: n,
                isInitSegmentRequest: s,
                requestSendTime: pe(),
                uuid: Ae()
            }
        };
    let h = o(gs, this);
    "number" == typeof l && l >= 0 && (h = l);
    const f = {
        url: n,
        type: e.SEGMENT,
        responseType: tt.ARRAY_BUFFER,
        retry: o(vs, this),
        hooks: {
            beforeRetry: [r(Ls, this, ls).bind(this)]
        },
        onDownloadProgress: r(Ls, this, Bs).call(this, u, d),
        headers: i && {
            Range: `bytes=${i}`
        },
        retryAbortErrors: o(ms, this),
        timeout: h
    };
    this.fire("downloadstart", u), d.request = Ke(f).then(r(Ls, this, Hs).call(this, d, t)).catch(r(Ls, this, Ws).call(this, d, t)), o(Es, this).add(d)
}

function Bs(e, t) {
    let n = 0,
        r = 0,
        i = pe();
    return s => {
        if (s.lengthComputable) {
            const a = 8 * (s.loaded - r),
                u = pe(),
                c = u - i,
                l = {
                    startTime: i,
                    length: c,
                    bitrate: a / (c / 1e3),
                    index: n
                };
            n > 0 && (o(Ps, this).length >= o(_s, this) && o(Ps, this).shift(), o(Ps, this).push(l)), i = u, r = s.loaded, n += 1, o(Ts, this).set(t, {
                bytesTotal: s.total,
                bytesLoaded: s.loaded,
                percent: s.loaded / s.total,
                identifier: e
            }), this.fire("progress", e)
        }
    }
}

function Hs(e, t) {
    const n = this,
        i = pe(),
        {
            identifier: s,
            resolve: a
        } = t;
    return cs((function(u) {
        let c = pe() - i;
        return as(u.arrayBuffer(), (function(i) {
            return Object.prototype.hasOwnProperty.call(u, "perfTimings") && Object.prototype.hasOwnProperty.call(u.perfTimings, "responseStart") && (t.perfTimings = u.perfTimings), e.data.duration = pe() - e.data.requestSendTime, o(Es, n).delete(e), o(Ts, n).delete(e), n.saveResponseSpeeds(t, c, i.byteLength), n.fire("downloadend", s, {
                request: e,
                response: u
            }), o(ks, n).push({
                url: e.data.url,
                status: 200,
                duration: e.data.duration
            }), as(r(Ls, n, Xs).call(n, e, i), (function(e) {
                a(i = e), r(Ls, n, js).call(n)
            }))
        }))
    }))
}

function Xs(e, t) {
    return e.data.url && e.data.url.match(".ts$") ? r(Ls, this, us).call(this, e, t) : Promise.resolve(new Uint8Array(t))
}

function Ws(e, t) {
    const {
        identifier: n,
        reject: i,
        size: s
    } = t;
    return t => {
        const a = pe() - e.data.requestSendTime;
        if (e.data.duration = a, t instanceof Ie) o(Rs, this).push({
            url: e.data.url,
            status: "abort",
            duration: a
        }), this.fire("downloadabort", n);
        else if (t instanceof Re) {
            const r = t.response.status;
            o(Rs, this).push({
                url: e.data.url,
                status: r,
                duration: a
            }), this.fire("downloaderror", n, r)
        } else if (t instanceof Pe) {
            if (o(Rs, this).push({
                    url: e.data.url,
                    status: "timeout",
                    duration: a
                }), "number" == typeof s && s > 0 && t.timeoutMs > 0) {
                let e = 8 * s / (t.timeoutMs / 1e3);
                e *= .5, o(fs, this).call(this, "Adding degraded speed of", e, "after timeout of", t.timeoutMs, "ms"), o(Ds, this).push(e)
            }
            this.fire("downloadtimeout", n, {
                timeoutMs: t.timeoutMs
            })
        }
        o(Ts, this).delete(e), o(Es, this).delete(e), i(t), r(Ls, this, js).call(this)
    }
}

function qs() {
    return import ("./mux-mp4.module.js").then((({
        default: e
    }) => e))
}
var Gs = new WeakMap,
    Ks = new WeakMap,
    Ys = new WeakMap,
    $s = new WeakMap,
    zs = new WeakMap,
    Qs = new WeakMap,
    Js = new WeakMap,
    Zs = new WeakMap,
    ea = new WeakMap,
    ta = new WeakMap,
    na = new WeakMap,
    ra = new WeakMap,
    ia = new WeakMap,
    oa = new WeakMap,
    sa = new WeakMap,
    aa = new WeakMap,
    ua = new WeakMap,
    ca = new WeakMap,
    la = new WeakMap,
    da = new WeakMap,
    ha = new WeakMap,
    fa = new WeakMap,
    pa = new WeakMap,
    _a = new WeakSet;
let ma = function(e) {
    function t(t, n) {
        var i;
        return u(i = e.call(this) || this, _a), s(i, Gs, void 0), s(i, Ks, void 0), s(i, Ys, void 0), s(i, $s, void 0), s(i, zs, void 0), s(i, Qs, void 0), s(i, Js, -1), s(i, Zs, !1), s(i, ea, !1), s(i, ta, {}), s(i, na, void 0), s(i, ra, !0), s(i, ia, null), s(i, oa, !0), s(i, sa, !1), s(i, aa, !1), s(i, ua, void 0), s(i, ca, null), s(i, la, void 0), s(i, da, null), s(i, ha, []), s(i, fa, void 0), s(i, pa, []), a(Qs, i, x("Buffer", "color: #586e75")), a(zs, i, n), a(la, i, t), a(Gs, i, r(_a, i, ga).bind(i)), a(Ks, i, r(_a, i, ba).bind(i)), a(Ys, i, r(_a, i, Sa).bind(i)), a($s, i, r(_a, i, Ra).bind(i)), o(la, i).on("durationset", o(Gs, i)), i
    }
    p(t, e);
    var n = t.prototype;
    return n.addStream = function(e) {
        e.on("segmentadd", o($s, this));
        const t = o(ha, this).push(e) - 1;
        e.index = t, -1 === o(Js, this) && (r(_a, this, Ta).call(this, t), a(sa, this, !0))
    }, n.getBufferState = function() {
        return o(ta, this)
    }, n.setBufferState = function(e) {
        a(ta, this, e)
    }, n.streamIndexAtTime = function(e) {
        if (o(ta, this)[void 0]) return this.activeStreamIndex;
        const t = r(_a, this, va).call(this, e) - 1,
            n = o(ta, this)[t];
        return (null == n ? void 0 : n.stream) || -1
    }, n.switchTo = function(e, t = !0, n = {}) {
        let i;
        i = "number" == typeof e ? e : e.index;
        let s = o(Js, this) !== i;
        const u = s;
        if (!s && o(sa, this) && (s = !0), s) {
            a(sa, this, !1);
            const e = o(Js, this),
                n = o(ha, this)[e];
            this.fire("streamchangestart", e, i), n && u && t && n.abort(), a(fa, this, i), r(_a, this, Ta).call(this, i)
        }
        return r(_a, this, Ra).call(this), new Promise((e => {
            s ? a(ca, this, (() => {
                o(fa, this) === i && (a(ca, this, null), e(), this.fire("streamchange", i, n))
            })) : e()
        }))
    }, n.isTimeInBuffer = function(e) {
        if (!o(da, this)) return o(Qs, this).warn("SourceBuffer is not set."), !1;
        for (let t = 0; t < o(da, this).buffered.length; t++) {
            const n = o(da, this).buffered.start(t),
                r = o(da, this).buffered.end(t);
            if (n <= e && r >= e) return !0
        }
        return !1
    }, n.hasAppendedFinalSegment = function() {
        return void 0 !== o(na, this) && this.isTimeInBuffer(o(na, this))
    }, n.clear = function() {
        o(ha, this).forEach((e => e.clear()))
    }, n.remove = function(e, t = o(la, this).mediaSource.duration) {
        return new Promise((n => {
            o(pa, this).push([e, t, n]), r(_a, this, Ra).call(this)
        }))
    }, n.removeEventListeners = function() {
        o(da, this) && (o(da, this).removeEventListener("updateend", o(Ys, this)), r(_a, this, Ea).call(this, o(da, this)) && o(da, this).removeEventListener("bufferedchange", o(Ks, this)))
    }, n.removeSorcerer = function() {
        o(la, this).off("durationset", o(Gs, this)), a(la, this, null)
    }, l(t, [{
        key: "activeStream",
        get: function() {
            return o(ha, this)[o(Js, this)] || null
        }
    }, {
        key: "activeStreamIndex",
        get: function() {
            return o(Js, this)
        }
    }, {
        key: "endTime",
        get: function() {
            if (!o(da, this)) return void o(Qs, this).warn("SourceBuffer is not set.");
            const e = o(da, this).buffered;
            return e.length > 0 ? e.end(e.length - 1) : void 0
        }
    }, {
        key: "sourceBuffer",
        get: function() {
            return o(da, this)
        },
        set: function(e) {
            a(da, this, e), r(_a, this, ya).call(this), this.fire("sourcebufferattach")
        }
    }, {
        key: "streams",
        get: function() {
            return o(ha, this)
        }
    }])
}(wn);

function va(e) {
    let t = Math.floor(e / 6);
    return e > 6 && e % 6 >= 2 ? t += 1 : e < 8 && (t = 1), t
}

function ga() {
    const e = o(la, this).mediaSource.duration,
        t = r(_a, this, va).call(this, e);
    for (let n = 0; n < t; n++) o(ta, this)[n] = {
        segment: n,
        stream: null,
        type: o(zs, this)
    }
}

function ya() {
    o(da, this) ? (o(da, this).addEventListener("updateend", o(Ys, this)), r(_a, this, Ea).call(this, o(da, this)) && o(da, this).addEventListener("bufferedchange", o(Ks, this))) : o(Qs, this).warn("SourceBuffer is not set.")
}

function Ea(e) {
    return "undefined" != typeof ManagedSourceBuffer && e instanceof ManagedSourceBuffer
}

function Ta(e) {
    a(oa, this, !0), a(Js, this, e), o(la, this).setStreamIndex(e)
}

function Sa() {
    r(_a, this, wa).call(this), r(_a, this, Ia).call(this), r(_a, this, Ra).call(this)
}

function ba(e) {
    var t;
    (null == (t = e.removedRanges) ? void 0 : t.length) > 0 && o(Qs, this).call(this, "Browser removed %s buffer:", o(zs, this), (e => {
        const t = [];
        for (let n = 0; n < e.length; n++) t.push(`${e.start(n)}-${e.end(n)}`);
        return t.join(", ")
    })(e.removedRanges))
}

function Aa() {
    if (o(da, this)) try {
        const e = o(da, this).buffered,
            t = o(la, this)._video.buffered;
        if (e.length && t.length) {
            const n = e.start(0),
                r = t.start(0);
            n < r && o(la, this).removeBuffer(0, r)
        }
    } catch (e) {
        o(Qs, this).error("Error failed to handle mismatch between video and sourceBuffer.")
    } else o(Qs, this).warn("SourceBuffer is not set.")
}

function wa() {
    if (o(ea, this) && this.endTime) return a(ea, this, !1), a(na, this, this.endTime), o(la, this).checkEndOfStream(), void r(_a, this, Aa).call(this);
    this.activeStream && !this.activeStream.hasNextSegment() && void 0 !== o(na, this) && o(na, this) > 0 && "open" === o(la, this).readyState && o(la, this).checkEndOfStream()
}

function Ia() {
    o(ia, this) && (this.fire("appendbufferend", o(ia, this)), a(ia, this, null), o(ca, this) && o(ca, this).call(this))
}

function Ra() {
    if (!o(da, this)) return o(Qs, this).warn("SourceBuffer is not set. Waiting for sourcebufferattach event."), void this.on("sourcebufferattach", o($s, this));
    this.activeStream && "closed" !== o(la, this).readyState && (o(da, this).updating || (o(pa, this).length ? r(_a, this, ka).call(this) : o(aa, this) || o(Zs, this) || (o(oa, this) ? r(_a, this, Pa).call(this) : r(_a, this, Da).call(this))))
}

function ka() {
    const e = o(da, this),
        t = o(pa, this).shift();
    if (!t || !e) return void o(Qs, this).warn("No entries to remove or sourceBuffer is not set.");
    const [n, i, s] = t, u = () => {
        e.removeEventListener("updateend", u), s(), void 0 !== o(ua, this) && clearTimeout(o(ua, this)), a(ua, this, setTimeout((() => {
            a(aa, this, !1), r(_a, this, Ra).call(this)
        }), 5e3))
    };
    e.addEventListener("updateend", u), e.remove(n, i)
}

function Pa() {
    a(oa, this, !1), a(Zs, this, !0), this.activeStream ? this.activeStream.getInitSegment().then((e => (a(ia, this, null), o(da, this) && e && o(da, this).appendBuffer(e), a(Zs, this, !1), e))).catch((e => {
        o(Qs, this).error("Error appending init segment to the buffer:", e), a(oa, this, !0), a(Zs, this, !1)
    })) : o(Qs, this).error("No active stream to append init segment.")
}

function Da() {
    if (!this.activeStream || !o(da, this)) return void o(Qs, this).error("No active stream or sourceBuffer to append segment.");
    const e = this.activeStream.getNextSegment();
    if (!e) return;
    const t = this.activeStream.getIdForSegment(e);
    this.activeStream.isFinal(e) && a(ea, this, !0), a(ia, this, t), this.fire("appendbufferstart", t);
    try {
        o(da, this).appendBuffer(e), o(ta, this)[t.segment] = t, o(ra, this) && (a(ra, this, !1), this.fire("initialbufferstart"))
    } catch (n) {
        if ("QuotaExceededError" === n.name) {
            a(aa, this, !0), this.fire("quotaexceedederror", o(da, this).buffered), o(Qs, this).error("Error QuotaExceededError.");
            const t = 6;
            if (o(la, this)._video.currentTime > t) {
                const e = 0,
                    n = o(la, this)._video.currentTime - t;
                o(Qs, this).call(this, `Removing buffer from ${e} to ${n}…`), o(la, this).removeBuffer(e, n)
            }
            this.activeStream.dequeueSegment(e)
        }
    }
}

function Oa() {}
var La = new WeakMap,
    Ca = new WeakMap,
    Na = new WeakMap,
    Ma = new WeakMap,
    xa = new WeakMap,
    Ua = new WeakMap,
    Fa = new WeakMap;
let ja = function(e) {
    function t(t, n = "", r = new Cs) {
        var i;
        return h(i = e.call(this) || this, "codec", void 0), h(i, "index", NaN), s(i, La, void 0), s(i, Ca, new WeakMap), s(i, Na, void 0), s(i, Ma, void 0), s(i, xa, !0), s(i, Ua, []), s(i, Fa, {}), a(La, i, x("Stream", "color: #586e75")), a(Ma, i, t), i.codec = n, a(Na, i, r), o(Na, i).start(), i
    }
    p(t, e), t.isValidSegmentUrl = function(e) {
        return "string" == typeof e || "object" == typeof e && "url" in e && "byteRange" in e && "string" == typeof e.url && "string" == typeof e.byteRange
    };
    var n = t.prototype;
    return n.getIdForSegment = function(e) {
        return t.isValidSegmentUrl(e) ? o(Fa, this)[e] : o(Ca, this).get(e).id
    }, n.getSegmentUrl = function(e) {
        return "object" == typeof e && "url" in e ? e.url : e
    }, n.getSegmentByteRange = function(e) {
        return "object" == typeof e && "byteRange" in e ? e.byteRange : void 0
    }, n.isFinal = function(e) {
        return o(Ca, this).get(e).final
    }, n.addSegment = function(e, {
        identifier: n = null,
        isFinalSegment: r = !1,
        loadOnly: i = !1,
        priority: s = 0,
        includeWithBandwidthChecks: a = !0,
        excludeConnectTime: u = !1,
        timeout: c = null,
        size: l = null
    } = {}) {
        if (o(xa, this) && this.getInitSegment(), t.isValidSegmentUrl(e)) {
            o(Fa, this)[e] = n || e;
            const t = this.getIdForSegment(e);
            return this.fire("queued", t), o(Na, this).add({
                byteRange: this.getSegmentByteRange(e),
                excludeConnectTime: u,
                id: t,
                includeWithBandwidthChecks: a,
                isInitSegmentRequest: !1,
                priority: s,
                size: l,
                stream: this,
                timeout: c,
                url: this.getSegmentUrl(e)
            }).then((s => {
                o(Ca, this).set(s, {
                    id: n || e,
                    final: r
                }), o(Ua, this).push(s), this.fire("bufferqueueadd", t), i || this.fire("segmentadd")
            }))
        }
        return o(Ca, this).set(e, {
            id: n,
            final: r
        }), o(Ua, this).push(e), this.fire("bufferqueueadd", n), Promise.resolve()
    }, n.clear = function() {
        a(Ua, this, [])
    }, n.abort = function() {
        try {
            const e = this;
            return function(e) {
                return e && e.then || (e = Promise.resolve(e)), e
            }(function(t, n) {
                var r = function() {
                    if (o(xa, e)) return function(e) {
                        if (e && e.then) return e.then(Oa)
                    }(function(e, t) {
                        try {
                            var n = e()
                        } catch (Np) {
                            return t(Np)
                        }
                        return n && n.then ? n.then(void 0, t) : n
                    }((function() {
                        return function(e) {
                            if (!void 0) return e && e.then ? e.then(Oa) : Promise.resolve()
                        }(e.getInitSegment())
                    }), (function(t) {
                        o(La, e).error("Error getting init segment:", t)
                    })))
                }();
                return r && r.then ? r.then(n) : n()
            }(0, (function() {
                o(Na, e).abort(e)
            })))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n.hasNextSegment = function() {
        return o(Ua, this).length > 0
    }, n.getNextSegment = function() {
        return o(Ua, this).shift()
    }, n.dequeueSegment = function(e) {
        o(Ua, this).unshift(e)
    }, n.getInitSegment = function() {
        const e = this.getSegmentUrl(o(Ma, this));
        return e ? (a(xa, this, !1), t.isValidSegmentUrl(e) ? o(Na, this).add({
            byteRange: this.getSegmentByteRange(o(Ma, this)),
            id: null,
            isInitSegmentRequest: !0,
            priority: 0,
            stream: this,
            url: e
        }).then((e => (a(Ma, this, e), o(Ma, this)))) : Promise.resolve(o(Ma, this))) : Promise.resolve(null)
    }, l(t, [{
        key: "pendingFetches",
        get: function() {
            return o(Na, this).pendingFetches
        }
    }])
}(wn);
var Va = new WeakMap,
    Ba = new WeakMap,
    Ha = new WeakMap,
    Xa = new WeakMap,
    Wa = new WeakMap,
    qa = new WeakMap,
    Ga = new WeakMap,
    Ka = new WeakMap,
    Ya = new WeakMap,
    $a = new WeakMap,
    za = new WeakMap,
    Qa = new WeakSet;
let Ja = function() {
    function e(e, t = -1) {
        u(this, Qa), h(this, "streamIndex", void 0), s(this, Va, void 0), s(this, Ba, void 0), s(this, Ha, void 0), s(this, Xa, void 0), s(this, Wa, !1), s(this, qa, void 0), s(this, Ga, {}), s(this, Ka, {}), s(this, Ya, 0), s(this, $a, 0), s(this, za, !1), a(Xa, this, e), this.streamIndex = t, a(Va, this, this.start.bind(this)), a(Ba, this, this.stop.bind(this)), a(Ha, this, r(Qa, this, nu).bind(this))
    }
    var t = e.prototype;
    return t.init = function() {
        r(Qa, this, Za).call(this)
    }, t.start = function() {
        a(Wa, this, !0), r(Qa, this, tu).call(this)
    }, t.stop = function() {
        a(Wa, this, !1)
    }, t.destroy = function() {
        this.stop(), r(Qa, this, eu).call(this)
    }, t.getDroppedFrameRate = function(e, t = -1, n = "average") {
        const r = o(Ga, this)[t];
        if (!r || r.length < e) return 0;
        const i = r.slice(-e);
        return "median" === n ? os(i) : is(i)
    }, t.getDroppedFrameTotal = function() {
        return {
            dropped: r(Qa, this, ru).call(this),
            total: r(Qa, this, iu).call(this)
        }
    }, e
}();

function Za() {
    o(za, this) || (o(Xa, this).addEventListener("playing", o(Va, this)), o(Xa, this).addEventListener("pause", o(Ba, this)), o(Xa, this).addEventListener("ended", o(Ba, this)), document.addEventListener("visibilitychange", o(Ha, this)), a(za, this, !0))
}

function eu() {
    o(Xa, this).removeEventListener("playing", o(Va, this)), o(Xa, this).removeEventListener("pause", o(Ba, this)), o(Xa, this).removeEventListener("ended", o(Ba, this)), document.removeEventListener("visibilitychange", o(Ha, this)), a(za, this, !1)
}

function tu() {
    if (!o(Wa, this) || -1 === this.streamIndex) return;
    if (ie.browser.safari && (document.hidden || "hidden" === document.visibilityState)) return;
    void 0 !== o(qa, this) && clearTimeout(o(qa, this));
    const e = r(Qa, this, ru).call(this),
        t = e - o(Ya, this);
    a(Ya, this, e);
    const n = r(Qa, this, ou).call(this),
        i = n - o($a, this);
    a($a, this, n), o(Ga, this)[this.streamIndex] || (o(Ga, this)[this.streamIndex] = []), o(Ka, this)[this.streamIndex] || (o(Ka, this)[this.streamIndex] = []), o(Ga, this)[this.streamIndex].length > 100 && o(Ga, this)[this.streamIndex].shift(), o(Ka, this)[this.streamIndex].length > 100 && o(Ka, this)[this.streamIndex].shift(), o(Ga, this)[this.streamIndex].push(t), o(Ka, this)[this.streamIndex].push(i), a(qa, this, setTimeout((() => {
        r(Qa, this, tu).call(this)
    }), 1e3))
}

function nu() {
    !ie.browser.safari || document.hidden && "hidden" === document.visibilityState || r(Qa, this, tu).call(this)
}

function ru() {
    return "function" == typeof o(Xa, this).getVideoPlaybackQuality ? o(Xa, this).getVideoPlaybackQuality().droppedVideoFrames : o(Xa, this).webkitDroppedFrameCount || 0
}

function iu() {
    return "function" == typeof o(Xa, this).getVideoPlaybackQuality ? o(Xa, this).getVideoPlaybackQuality().totalVideoFrames : o(Xa, this).webkitDecodedFrameCount || 0
}

function ou() {
    if ("function" == typeof o(Xa, this).getVideoPlaybackQuality) {
        const e = o(Xa, this).getVideoPlaybackQuality();
        return e.totalVideoFrames - e.droppedVideoFrames
    }
    return o(Xa, this).webkitDecodedFrameCount || 0
}
var su = new WeakMap,
    au = new WeakMap,
    uu = new WeakMap,
    cu = new WeakMap,
    lu = new WeakMap,
    du = new WeakMap,
    hu = new WeakMap,
    fu = new WeakMap,
    pu = new WeakMap,
    _u = new WeakMap,
    mu = new WeakMap;
let vu = function(e) {
        function t(t, n = {}) {
            var r;
            h(r = e.call(this) || this, "_video", void 0), h(r, "allowSegmentRequests", void 0), s(r, su, void 0), s(r, au, void 0), s(r, uu, void 0), s(r, cu, void 0), s(r, lu, void 0), s(r, du, void 0), s(r, hu, void 0), s(r, fu, void 0), s(r, pu, void 0), s(r, _u, void 0), s(r, mu, void 0), h(r, "isInstanceofManagedMediaSource", (e => "undefined" != typeof ManagedMediaSource && e instanceof ManagedMediaSource)), a(du, r, x("MediaSorcerer", "color: #586e75")), r._video = t, a(fu, r, n), r.allowSegmentRequests = !0;
            const i = o(fu, r).disableMMS;
            a(hu, r, new(F(i))), o(du, r).log("Media Source API: " + r._mediaSourceAPIName(o(hu, r)));
            const {
                fetcherTimeout: u = 0,
                fetcherRetryAbortErrors: c = !0
            } = o(fu, r);
            return a(pu, r, new Ja(t)), a(lu, r, new Cs({
                parallel: 1,
                timeout: u,
                retryAbortErrors: c,
                networkInformationApiAB: o(fu, r).networkInformationApiAB
            })), a(su, r, r._onMSSourceClose.bind(r)), a(au, r, r._onMSSourceOpen.bind(r)), a(cu, r, {
                audio: null,
                video: null
            }), a(uu, r, []), a(mu, r, null), r._attachEvents(), r
        }
        p(t, e);
        var n = t.prototype;
        return n.setStreamIndex = function(e) {
            o(pu, this).streamIndex = e
        }, n.getCurrentSpeed = function({
            type: e = "average",
            howMany: t = 10,
            weights: n = [],
            percentile: r
        } = {}) {
            switch (e) {
                case "harmonicAverage":
                    return o(lu, this).getHarmonicAverageSpeed(t);
                case "percentile":
                    return o(lu, this).getPercentileSpeed(t, r);
                case "median":
                    return o(lu, this).getMedianSpeed(t);
                case "average":
                case "networkInformation":
                    const i = o(lu, this).getAverageSpeed(t, n),
                        s = ie.navigatorConnection;
                    if (s) {
                        if ("variant" === o(fu, this).networkInformationApiAB || "networkInformation" === e) {
                            const e = 1e3 * (null == s ? void 0 : s.downlink) * 1e3;
                            return Math.max(i, e)
                        }
                        if ("variant_2" === o(fu, this).networkInformationApiAB) {
                            const e = o(lu, this).getAverageSpeedNetworkInformationApi(t, n);
                            return Math.max(i, e)
                        }
                    }
                    return i
            }
        }, n.getResponseSpeeds = function() {
            return o(lu, this).getResponseSpeeds()
        }, n.getFailedSegments = function() {
            return o(lu, this).getFailedSegments()
        }, n.getSuccessfulSegments = function() {
            return o(lu, this).getSuccessfulSegments()
        }, n.getDroppedFrameRate = function(e, t = this.activeStreamIndex, n = "average") {
            return o(pu, this).getDroppedFrameRate(e, t, n)
        }, n.getDroppedFrameTotal = function() {
            return o(pu, this).getDroppedFrameTotal()
        }, n.clear = function() {
            o(uu, this).forEach((e => e.clear()))
        }, n.initFrameDropper = function() {
            o(pu, this).init()
        }, n.streamIndexAtTime = function(e, t) {
            const n = o(cu, this)[t];
            return n ? n.streamIndexAtTime(e) : -1
        }, n.removeBuffer = function(e = 0, t = this._video.duration) {
            if (e >= (t = t || 0)) return Promise.resolve();
            const n = o(uu, this).map((n => n.remove(e, t)));
            return Promise.all(n)
        }, n.setLiveSeekableRange = function(e, t) {
            var n;
            "open" === (null == (n = o(hu, this)) ? void 0 : n.readyState) && o(hu, this).setLiveSeekableRange(e, t)
        }, n.addStream = function(e, t) {
            const n = this._getCodecType(e);
            if (!o(cu, this)[n]) {
                const t = new ma(this, n);
                o(cu, this)[n] = t, o(uu, this).push(t), o(_u, this).then((() => {
                    let r;
                    try {
                        r = o(hu, this).addSourceBuffer(e)
                    } catch (i) {
                        if (22 !== i.code) return o(du, this).error(i), void this.fire("srcnotsupported", i);
                        r = o(cu, this)[n]
                    }
                    if (o(fu, this).duration) {
                        const e = .1;
                        r.appendWindowEnd = o(fu, this).duration + e
                    }
                    t.sourceBuffer = r
                })).catch((e => {
                    o(du, this).error(e)
                })), ["appendbufferstart", "appendbufferend", "streamchange", "streamchangestart", "initialbufferstart", "quotaexceedederror"].forEach((e => {
                    t.on(e, ((...t) => {
                        this.fire.apply(this, [e].concat(t))
                    }))
                }))
            }
            const r = new ja(t, e, o(lu, this));
            ["queued", "bufferqueueadd"].forEach((e => {
                r.on(e, (t => {
                    this.fire(e, t)
                }))
            }));
            const i = o(cu, this)[n];
            return i && i.addStream(r), r
        }, n.checkEndOfStream = function() {
            if (!o(uu, this).every((e => e.hasAppendedFinalSegment()))) return;
            const e = () => {
                this._video.removeEventListener("timeupdate", e), this.endOfStream()
            };
            this._video.addEventListener("timeupdate", e)
        }, n.abortFetches = function() {
            o(lu, this).abort()
        }, n.endOfStream = function() {
            if (!o(uu, this).every((e => e.isTimeInBuffer(this._video.currentTime)))) {
                const e = 1;
                if (!(ie.browser.firefox && this._video.currentTime < e)) return
            }
            "open" === o(hu, this).readyState && (this._sourceBuffersAreUpdating() || (o(du, this).log("Firing MediaSource.endOfStream()"), o(hu, this).endOfStream(), this.fire("endofstream")))
        }, n.destroy = function() {
            this.clear(), this._removeEventListeners(), this.off(), o(pu, this).destroy(), o(lu, this).abort();
            const e = this._video.querySelectorAll("source");
            (this._video.src || e.length > 0) && (this._video.removeAttribute("src"), e.forEach((e => {
                this._video.removeChild(e)
            })), this._video.load())
        }, n._mediaSourceAPIName = function(e) {
            return this.isInstanceofManagedMediaSource(e) ? "ManagedMediaSource" : "MediaSource"
        }, n._attachEvents = function() {
            a(_u, this, new Promise((e => {
                a(mu, this, e), o(hu, this).addEventListener("sourceopen", o(au, this)), o(hu, this).addEventListener("sourceclose", o(su, this))
            }))), ["downloadstart", "downloadend", "downloadabort", "downloaderror", "downloadtimeout", "progress"].forEach((e => {
                o(lu, this).on(e, ((...t) => {
                    this.fire.apply(this, [e].concat(t))
                }))
            })), this.isInstanceofManagedMediaSource(o(hu, this)) && (o(hu, this).addEventListener("startstreaming", (() => {
                o(du, this).log("startstreaming event fired"), this.allowSegmentRequests = !0
            })), o(hu, this).addEventListener("endstreaming", (() => {
                o(du, this).log("endstreaming event fired"), this.allowSegmentRequests = !1
            })))
        }, n._sourceBuffersAreUpdating = function() {
            for (let e = 0; e < o(hu, this).sourceBuffers.length; e++)
                if (o(hu, this).sourceBuffers[e].updating) return !0;
            return !1
        }, n._onMSSourceOpen = function() {
            o(du, this).log("MediaSource open"), o(hu, this).removeEventListener("sourceopen", o(au, this)), URL.revokeObjectURL(this._video.src), this._video.querySelectorAll("source").forEach((e => {
                var t;
                0 === (null == (t = e.src) ? void 0 : t.indexOf("blob")) && URL.revokeObjectURL(e.src)
            })), o(fu, this).duration && (o(hu, this).duration = o(fu, this).duration, this.fire("durationset")), o(mu, this) && o(mu, this).call(this)
        }, n._onMSSourceClose = function() {
            o(du, this).log("MediaSource closed"), o(hu, this).removeEventListener("sourceclose", o(su, this)), this.fire("sourceclose")
        }, n._removeEventListeners = function() {
            o(uu, this).forEach((e => e.removeEventListeners()))
        }, n._getCodecType = function(e) {
            return 0 === e.indexOf("audio") ? "audio" : "video"
        }, l(t, [{
            key: "activeStreamIndex",
            get: function() {
                return 1 === o(uu, this).length && this.video ? this.video.activeStreamIndex : (o(du, this).warn("The activeStreamIndex property on MediaSorcerer only works with single streams"), -1)
            }
        }, {
            key: "mediaSource",
            get: function() {
                return o(hu, this)
            }
        }, {
            key: "pendingFetches",
            get: function() {
                return o(lu, this).pendingFetches
            }
        }, {
            key: "readyState",
            get: function() {
                return o(hu, this).readyState
            }
        }, {
            key: "streams",
            get: function() {
                return 1 === o(uu, this).length && this.video ? this.video.streams : (o(du, this).warn("The streams property on MediaSorcerer only works with single streams"), !1)
            }
        }, {
            key: "audio",
            get: function() {
                return o(cu, this).audio ? o(cu, this).audio : (o(du, this).warn("No audio streams have been added to MediaSorcerer"), !1)
            }
        }, {
            key: "video",
            get: function() {
                return o(cu, this).video ? o(cu, this).video : (o(du, this).warn("No video streams have been added to MediaSorcerer"), !1)
            }
        }])
    }(wn),
    gu = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t) || this)._options = n, r.blacklisted = [], r.whitelisted = [], r.MAX_LOADABLE_SEGMENTS_AUTO = 3, r.MAX_LOADABLE_SEGMENTS_PRELOAD = 1, r.MAX_LOADABLE_SEGMENTS_LOCKED = 15, r.SEGMENT_DURATION = 6, r
        }
        p(t, e);
        var n = t.prototype;
        return n.isTimeInBuffer = function(e, t, n) {
            return this._timesAreInRange(e, e, t, n, 1)
        }, n.getDistanceFromBuffer = function(e, t) {
            let n = e;
            for (let r = 0; r < t.length; r++)
                if (t.start(r) <= e && t.end(r) >= e) {
                    n = t.end(r);
                    break
                }
            return n - e
        }, n.blacklist = function(e) {
            this.blacklisted[e] = 1
        }, n.lock = function(e = []) {
            this.whitelisted = e
        }, n.filterStreams = function(e, t, n, r = null) {
            const i = [];
            let o, s = !1;
            for (let a = 0; a < e.length; a++)
                if (o && o[0] === e[a].width && o[1] === e[a].height) i.push(e[a]);
                else {
                    if (s) break;
                    this.blacklisted[a] && -1 === this.whitelisted.indexOf(a) || this.whitelisted.length && -1 === this.whitelisted.indexOf(a) || (this.whitelisted.length ? i.push(e[a]) : (this._getScaleFromDimensions(t, n, e[a].width, e[a].height, r) >= (n < 1e3 / (window.devicePixelRatio || 1) ? 1.75 : 1) && (s = !0), i.push(e[a]), o = [e[a].width, e[a].height]))
                }
            return i
        }, n.getCurrentSpeed = function(e = "average") {
            let t = 3,
                n = [1, 2, 5];
            return this._options.tests && this._options.tests.harmonic_average && this._options.tests.harmonic_average.group && (e = "harmonicAverage", t = this._getMaxLoadableSegmentsAuto(), n = []), this.scanner.sorcerer.getCurrentSpeed({
                type: e,
                howMany: t,
                weights: n
            })
        }, n.shouldUseSurroundSound = function(e, t) {
            return "240p" !== e[t].quality
        }, n.getAudioIndexFromVideo = function(e, t, n) {
            if (0 === t.length) return !1;
            if (!e[n]) return 0;
            const r = t.filter((({
                channels: e
            }) => e > 2));
            if (r.length > 0 && this.shouldUseSurroundSound(e, n)) {
                const e = r[r.length - 1];
                return t.indexOf(e)
            }
            return t.length > 1 && 0 === n && e[n].height <= 360 && e.length > 1 ? "mp4a.40.2" === t[0].codecs && t[0].bitrate < 8e4 && "240p" !== e[n].quality ? 1 : 0 : t.length - 1
        }, n._getVisibleDimensions = function(e, t, n, r) {
            const i = n / r,
                o = e - t * i,
                s = t - e / i;
            let a = e - o,
                u = t - s;
            return o > 0 && (u = t), s > 0 && (a = e), [a, u]
        }, n._getScaleFromDimensions = function(e, t, n, r, i = null) {
            const o = this._getVisibleDimensions(e, t, n, r);
            let s = n * r;
            i && (s *= i);
            const a = window.devicePixelRatio || 1;
            return s / (o[0] * o[1] * a * a)
        }, n._getMaxLoadableSegmentsAuto = function() {
            const e = xo(this._options, "lookahead_count");
            return e && e.group && e.data.count ? e.data.count : e && e.data.segment_lookahead_count ? e.data.segment_lookahead_count : this.MAX_LOADABLE_SEGMENTS_AUTO
        }, n._getSecondsToLoadAhead = function(e, t, n, r = !1) {
            if (r) return this.MAX_LOADABLE_SEGMENTS_PRELOAD * this.SEGMENT_DURATION;
            const i = n && n.bitrate > 11e6;
            return 1 === this.whitelisted.length ? i ? 30 : this.MAX_LOADABLE_SEGMENTS_LOCKED * this.SEGMENT_DURATION : this._getMaxLoadableSegmentsAuto() * this.SEGMENT_DURATION
        }, n._timesAreInRange = function(e, t, n, r, i = 0) {
            if (!n) return !1;
            t = Math.min(t, r);
            for (let o = 0; o < n.length; o++) {
                const r = n.start(o),
                    s = n.end(o),
                    a = Mo(r) - i,
                    u = Mo(s) + i;
                if (a <= e && u >= t) {
                    if (t < r || e > s) continue;
                    return !0
                }
            }
            return !1
        }, n._hasSeparateStreams = function(e) {
            return e.video.length > 0 && e.audio.length > 0
        }, n._isSegmentInBuffer = function(e, t, n, r) {
            let i = 1;
            return this._hasSeparateStreams(r) && (i = .1), this._timesAreInRange(e.start, e.end, t, n, i)
        }, l(t, [{
            key: "displayName",
            get: function() {
                return "MediaSource"
            }
        }])
    }(function() {
        function e(e) {
            this.scanner = e, this.STREAM_TYPE_VIDEO = "video", this.STREAM_TYPE_AUDIO = "audio"
        }
        var t = e.prototype;
        return t.destroy = function() {}, t.shouldPowerUp = function(e, t) {
            return !1
        }, t.shouldPowerDown = function(e, t) {
            return !1
        }, t.canPowerUp = function(e, t) {
            return 1 !== e.length && t < e.length - 1
        }, t.canPowerDown = function(e, t) {
            return 1 !== e.length && t > 0
        }, t.filterStreams = function(e) {
            return e
        }, l(e, [{
            key: "displayName",
            get: function() {
                return "Brain"
            }
        }])
    }());
let yu = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).BANDWIDTH_UPSWITCH_THRESHOLD = .85, r.BANDWIDTH_DOWNSWITCH_THRESHOLD = .9, r.DEFAULT_TIMEOUT = 8e3, r.SEGMENT_RELATIVE_TIMEOUT_RATIO = 4 / 3, r.MINIMUM_TIMEOUT = 1e3, r.FRAME_DROP_WINDOW_SECONDS = 10, r
        }
        p(t, e);
        var n = t.prototype;
        return n.shouldPowerUp = function(e, t, n) {
            var r;
            const i = xo(this._options, "prevent_up_switch_not_visible"),
                o = "variant" === (null == i ? void 0 : i.group),
                s = null === (r = this.scanner.isInView()) || void 0 === r || r;
            if (o && !s) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            n && this._options.startingBandwidthThreshold && (this.BANDWIDTH_UPSWITCH_THRESHOLD = this._options.startingBandwidthThreshold);
            let a = e.indexOf(t);
            if (-1 === a && (a = 0), !this.canPowerUp(e, a)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const u = this.getCurrentSpeed();
            if (!u) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const c = this.getStreamFromSpeed(u, e, this.BANDWIDTH_UPSWITCH_THRESHOLD);
            return c === a || !n && c > a && fe(this.scanner.currentTime, this.scanner._video.buffered) < 1.5 * this.SEGMENT_DURATION ? Promise.resolve({
                index: !1,
                reasonForSwitch: null
            }) : Promise.resolve({
                index: c,
                reasonForSwitch: 3
            })
        }, n.shouldPowerDown = function(e, t) {
            const n = e.indexOf(t);
            if (-1 === n) {
                const t = this.isTimeInBuffer(this.scanner._video.duration, this.scanner._video.buffered, this.scanner._video.duration);
                return this.whitelisted.length || this.blacklisted.length || !t ? Promise.resolve({
                    index: e.length - 1,
                    reasonForSwitch: 6
                }) : Promise.resolve({
                    index: !1,
                    reasonForSwitch: null
                })
            }
            if (!this.canPowerDown(e, n)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const r = this.getCurrentSpeed();
            if (!r) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            if (this.hasTooManyDroppedFrames(n, t, this._options.droppedFrameSwitchPercent)) return this.blacklist(n), Promise.resolve({
                index: n - 1,
                reasonForSwitch: 2
            });
            const i = this.getStreamFromSpeed(r, e, this.BANDWIDTH_DOWNSWITCH_THRESHOLD);
            return i === n ? Promise.resolve({
                index: !1,
                reasonForSwitch: null
            }) : Promise.resolve({
                index: i,
                reasonForSwitch: 1
            })
        }, n.hasTooManyDroppedFrames = function(e, t, n) {
            return this.scanner.sorcerer.getDroppedFrameRate(this.FRAME_DROP_WINDOW_SECONDS, e, "median") / t.framerate * 100 >= n
        }, n.getTimeEstimateToLoad = function(e, t) {
            var n;
            const r = null == t || null == (n = t.segments) ? void 0 : n[e];
            if (!r) return 3;
            const i = this.getCurrentSpeed(),
                o = r.end - r.start;
            return r.size ? (8 * r.size + t.audioBitrate * o) / i * 1.3 : o * (t.avg_bitrate + t.audioBitrate) / i * 1.3
        }, n.canPlayFromTimeInStream = function(e, t) {
            if (!this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration)) return !1;
            if (!t) return !1;
            const n = this.getSegmentsToLoad(!1, this.STREAM_TYPE_VIDEO, t);
            if (0 === n.length) return !0;
            const r = fe(e, this.scanner._video.buffered);
            return this.getTimeEstimateToLoad(n[0], t) < r
        }, n.getSegmentsToLoad = function(e, t = this.STREAM_TYPE_VIDEO, n, r = !1) {
            const i = this.scanner._video;
            if (i.webkitCurrentPlaybackTargetIsWireless) return [];
            const o = this.scanner.currentTime,
                s = [],
                a = o + this._getSecondsToLoadAhead(o, i.duration, n, r),
                u = this.scanner.sorcerer[t].activeStreamIndex,
                c = this.scanner._streams[t][u];
            if (!c) return s;
            const l = this.scanner.sorcerer[t].sourceBuffer;
            let d = null;
            l && (d = l.buffered);
            for (let h = 0; h < c.segments.length; h++) {
                const t = c.segments[h];
                if (t.end < o || t.start > a) continue;
                const n = o >= t.start && o < t.end,
                    r = this._isSegmentInBuffer(t, d, this.scanner._video.duration, this.scanner._streams);
                !e && r || e && r && n || (n || a >= t.start) && s.push(h)
            }
            return s
        }, n.getSegmentRelativeTimeout = function(e, t, n) {
            var r;
            const i = null == t ? void 0 : t.avg_bitrate,
                o = null == (r = e[0]) ? void 0 : r.avg_bitrate;
            if (!i || !o || !n) return this.DEFAULT_TIMEOUT;
            if (i === o) return this.DEFAULT_TIMEOUT;
            const s = n * this.SEGMENT_RELATIVE_TIMEOUT_RATIO;
            return Math.max(this.MINIMUM_TIMEOUT, Math.min(this.DEFAULT_TIMEOUT, s))
        }, n.getStreamFromSpeed = function(e, t, n = this.BANDWIDTH_UPSWITCH_THRESHOLD) {
            let r = 0;
            for (let i = r; i < t.length; i++) e * n > t[i].avg_bitrate + t[i].audioBitrate && (r = i);
            return r
        }, l(t, [{
            key: "displayName",
            get: function() {
                return "Skyfire"
            }
        }])
    }(gu),
    Eu = function() {
        function e(e, t) {
            this._video = e, this._getCurrentStream = t
        }
        var t = e.prototype;
        return t.start = function() {
            return clearInterval(this._checkGapInterval), this._checkGapInterval = setInterval(this._checkGap.bind(this), 200), this._checkGap()
        }, t.stop = function() {
            clearInterval(this._checkGapInterval)
        }, t.onSegmentAppended = function() {
            this._checkGap()
        }, t._checkGap = function() {
            const e = this._video.buffered,
                t = this._video.currentTime,
                n = this._getGapIndex(e, t);
            if (0 === this._video.readyState) return !1;
            if (this._video.paused) return !1;
            const r = this._video.duration;
            if (t >= r) return this._video.currentTime = r - .1, !0;
            if (e.length <= n) return !1;
            const i = e.start(n);
            return !(i >= r) && !(i - t > .5 || 0 !== n || (this.stop(), this._correctFirstSegmentStart("audio", i), this._correctFirstSegmentStart("video", i), this._video.currentTime = i, 0))
        }, t._getGapIndex = function(e, t) {
            if (!e || !e.length) return null;
            let n = 0;
            for (; n < e.length; n++) {
                const r = e.start(n),
                    i = e.end(n);
                if (r > t && (0 === n || i - t <= .1)) break
            }
            return n >= 0 ? n : null
        }, t._correctFirstSegmentStart = function(e, t) {
            const n = this._getCurrentStream(0, e);
            n && n.segments && n.segments[0] && (n.segments[0].start = t)
        }, e
    }();
const Tu = "br",
    Su = "bl",
    bu = "pr",
    Au = "sid",
    wu = "cid",
    Iu = "sf",
    Ru = "st",
    ku = "ot";
let Pu = function() {
    function e(e, t = {}) {
        this._scanner = e, this.sessionId = t.sessionId, this.clipId = t.clipId
    }
    var t = e.prototype;
    return t.getLogAsQueryParam = function(e, t) {
        return this._buildCMCDQueryParam(this._getLog(e, t))
    }, t._getLog = function(e, t) {
        let n = {};
        return Object.assign(n, this._getStaticSessionData()), Object.assign(n, this._getDynamicSessionData(e, t)), n
    }, t._buildCMCDQueryParam = function(e) {
        return ye({
            CMCD: this._getObjectAsAlphabetizedString(e)
        })
    }, t._getStaticSessionData = function() {
        return {
            [Au]: `"${this.sessionId}"`,
            [wu]: `"${this.clipId}"`,
            [Ru]: this._getStreamType(),
            [Iu]: this._getStreamingFormat()
        }
    }, t._getDynamicSessionData = function(e, t) {
        return {
            [bu]: this._scanner.playbackRate,
            [Tu]: this._scanner.getBitrateAtTime(this._scanner.currentTime, t, "max") / 1e3,
            [ku]: this._getObjectType(t),
            [Su]: this._getBufferLength(e)
        }
    }, t._getObjectType = function(e) {
        switch (e) {
            case "audio":
                return "a";
            case "video":
                return "v";
            default:
                return "av"
        }
    }, t._getBufferLength = function(e) {
        return Math.round(1e3 * (parseFloat(e.end) - parseFloat(e.start)))
    }, t._getStreamType = function() {
        switch (this._scanner.displayName) {
            case "HLSLiveScanner":
            case "NativeHLSLiveScanner":
                return "l";
            default:
                return "v"
        }
    }, t._getStreamingFormat = function() {
        switch (this._scanner.displayName) {
            case "HLSLiveScanner":
            case "NativeHLSLiveScanner":
                return '"hls"';
            default:
                return '"dash"'
        }
    }, t._getObjectAsAlphabetizedString = function(e) {
        let t = [],
            n = "";
        for (var r = 0, i = Object.entries(e); r < i.length; r++) {
            const [e, n] = i[r];
            t.push({
                key: e,
                value: n
            })
        }
        return t.sort((function(e, t) {
            return e.key.localeCompare(t.key)
        })).forEach((({
            key: e,
            value: t
        }) => {
            n += `${e}=${t},`
        })), n.replace(/,\s*$/, "")
    }, e
}();

function Du(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const Ou = ["supported"];

function Lu(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}
const Cu = new Map;

function Nu(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }
}
const Mu = x("MediaCapabilities", "color: white; background-color: green"),
    xu = Nu((function(e) {
        let t;
        const n = ju(e);
        return Cu.get(n) || Lu((function() {
            if (ie.mediaCapabilities) {
                const r = e.codecs.replace(/,.+/, ""),
                    i = {
                        type: "media-source",
                        video: {
                            contentType: `${e.mime_type}; codecs=${r}`,
                            width: e.width,
                            height: e.height,
                            bitrate: e.bitrate,
                            framerate: e.framerate
                        }
                    };
                return Du(navigator.mediaCapabilities.decodingInfo(i), (function(e) {
                    t = e, Cu.set(n, t)
                }))
            }
        }), (function() {
            return t
        }))
    })),
    Uu = Nu((function(e = []) {
        let t = !1,
            n = e,
            r = [],
            i = [];
        return Lu((function() {
            if (ie.mediaCapabilities) return function() {
                if (0 !== e.length) return function(o, s) {
                    try {
                        var a = Du(Promise.all(e.map((function(e) {
                            return Du(xu(e))
                        }))), (function(o) {
                            if (o) {
                                if (n = function(e, t) {
                                        return e.filter(((e, n) => Ou.every((e => t[n][e])) || (Mu(`Stream ${e.quality} is not supported`, t[n]), !1)))
                                    }(e, o), 0 === n.length) return Mu("No compatible streams found. Returning all available streams as safeguard."), t = !0, {
                                    compatibleStreams: e,
                                    incompatibleStreams: r,
                                    incompatibleStreamsAttributes: i
                                };
                                n.length < e.length ? (r = e.filter((e => -1 === n.indexOf(e))), i = r.map(Fu), Mu("Some streams are not supported. Returning compatible streams.")) : Mu("All streams are supported.")
                            }
                        }))
                    } catch (Np) {
                        return s(Np)
                    }
                    return a && a.then ? a.then(void 0, s) : a
                }(0, (function(e) {
                    Mu("Error checking stream capabilities", e)
                }));
                Mu("No streams to check for MediaCapabilities support")
            }();
            Mu("MediaCapabilities API not supported")
        }), (function(e) {
            return t ? e : {
                compatibleStreams: n,
                incompatibleStreams: r,
                incompatibleStreamsAttributes: i
            }
        }))
    }));

function Fu(e) {
    const t = ju(e),
        n = Cu.get(t);
    return n ? Ou.filter((e => !n[e])) : []
}

function ju(e) {
    return `${e.mime_type};${e.codecs};${e.width};${e.height};${e.bitrate};${e.framerate}`
}

function Vu() {}

function Bu(e, t) {
    try {
        var n = e()
    } catch (Np) {
        return t(Np)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function Hu(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }
}

function Xu(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const Wu = Hu((function(e, t, n) {
    const r = function(e) {
        const t = e.audio || [],
            n = e.video || [];
        return [{
            video: "HW_SECURE_ALL",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "HW_SECURE_DECODE",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "HW_SECURE_CRYPTO",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "SW_SECURE_DECODE",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "SW_SECURE_CRYPTO",
            audio: "SW_SECURE_CRYPTO"
        }].map((e => {
            const r = {
                persistentState: "optional",
                sessionTypes: ["temporary"],
                videoCapabilities: [],
                audioCapabilities: []
            };
            return n.length && (r.videoCapabilities = n.map((t => ({
                contentType: t,
                robustness: e.video
            })))), t.length && (r.audioCapabilities = t.map((t => ({
                contentType: t,
                robustness: e.audio
            })))), r
        }))
    }(n);
    return Promise.all(Object.keys(e).map(Hu((function(n) {
        const i = e[n].id;
        let o = null;
        return function(e, t) {
            return e && e.then ? e.then(t) : t()
        }(Bu((function() {
            return function() {
                var e = function() {
                    if (!t) return Xu(navigator.requestMediaKeySystemAccess(i, r), (function(e) {
                        return Xu(e.createMediaKeys(), (function(e) {
                            o = e
                        }))
                    }));
                    o = new window.WebKitMediaKeys(i)
                }();
                if (e && e.then) return e.then(Vu)
            }()
        }), (function(e) {})), (function() {
            return {
                name: i,
                mediaKeys: o
            }
        }))
    }))))
}));
const qu = Hu((function(e, t) {
    return function(e) {
        if (e && e.then) return e.then(Vu)
    }(Bu((function() {
        return function(e) {
            return e && e.then ? e.then(Vu) : Promise.resolve()
        }(t.setServerCertificate(Oo(e)))
    }), (function(e) {})))
}));

function Gu(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Ku(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }
}
const Yu = "video",
    $u = "audio";
let zu = function(t) {
        function n(e, n = {}) {
            var r;
            return (r = t.call(this, e, n) || this).reset(), r.manifestLoadDurations = [], r._preserveCurrentTime = !1, r._preloadStreamIndex = null, r
        }
        p(n, t), n.supported = function(e) {
            const t = F(e);
            return void 0 !== t && t.isTypeSupported
        };
        var r = n.prototype;
        return r.deactivate = function() {
            t.prototype.deactivate.call(this), this.sorcerer && this.sorcerer.destroy(), this.reset()
        }, r.reset = function() {
            this._waitingOnSet = new Set, this._streamsForSegment = {}, ie.browser.safari && (this._gapJumper = new Eu(this._video, this._getCurrentStream.bind(this))), this.resetBrain(), this._setupCMCDLogger(), this._ready = !1, this._startedPlaying = !1, this._manifest = null, this._streams = {}, this._streams[$u] = [], this._streams[Yu] = [], this._audioStreams = [], this._onReady = null, this._baseUrl = null, this._lastTargetStreamId = null, this._timeToSeekTo = null, this._seekInProgressPromise = null, this._resolveSeek = null, this._resolveStartPreload = null, this._reloadingExistingVideo = !1, this._lastStreamIndex = null, this._checkSwitchUp = !1, this._clearBufferAtTime = !1, this._preloadStream = null, this._removeBufferPromise = null, this._ranIntoBuffer = !1, this._restrictedStreamIndexes = [], this._switching = {}, this._lastDownloadBitrate = 0, this._preloadSegmentStreamIndex = null, this._preserveCurrentTime = !1, this._preloadStreamIndex = null, clearInterval(this._loadSegmentsInterval), clearTimeout(this._slowLoadSegmentTimeout)
        }, r.resetBrain = function() {
            const e = this._options.mediaSourceScanner || {};
            e.tests = this._options.tests, this._brain && this._brain.destroy(), this._brain = new yu(this, e)
        }, r.preloadStream = function() {
            if (this._preloadStream) return this._preloadStream;
            let e = 0,
                t = 1;
            this._streams.audio.length && (t = 2);
            let n = this._getStartingStreamIndex(),
                r = 0;
            const i = this._brain.getSegmentsToLoad(!1, Yu, n);
            i.length > 0 && (r = i[0]);
            let o = () => {};
            const s = (e = !1) => {
                    e && (n = this.sorcerer.video.activeStreamIndex), this._preloadSegmentStreamIndex = n, this._restartLoadSegmentsIntervalWithBackoff(!0)
                },
                a = n => {
                    e += 1, e < t || (n.segment === r && 1 !== this._restrictedStreamIndexes.length && null === this._preloadStreamIndex ? this._getStreamIndexToLoadAndSwitchReason(!0).then((t => {
                        let {
                            index: r,
                            reasonForSwitch: i
                        } = t, a = {
                            reasonForSwitch: i
                        };
                        if (!1 !== r && r > n.stream) {
                            if (this.sorcerer.video.switchTo(r, !1, a), this._streams.audio.length) {
                                const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, r);
                                this.sorcerer.audio.switchTo(e, !1)
                            }
                            return e = 0, void s(!0)
                        }
                        o()
                    })).catch(console.error) : o())
                };
            return this._preloadStream = new Promise((e => {
                o = () => {
                    const t = this._getCurrentStream(n).segments[0].end,
                        r = this._getDuration(!0);
                    if (this.currentTime >= r && (this.currentTime = r), this.currentTime > t && (this.sorcerer.clear(), this._waitingOnSet = new Set), this.sorcerer.video.switchTo(n, !1), this._streams.audio.length) {
                        const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, n);
                        this.sorcerer.audio.switchTo(e, !1)
                    }
                    this.sorcerer.off("bufferqueueadd", a), this._preloadSegmentStreamIndex = null, this._ready = !0, e()
                }, this.sorcerer.on("bufferqueueadd", a), s()
            })), this._preloadStream
        }, r.loadManifest = function(t) {
            try {
                const n = this;
                return Gu(n.video.metadata.p2pReady, (function() {
                    const r = Date.now();
                    return ie.browser.ie && t && -1 !== t.indexOf("archive_playlist") ? (setTimeout((() => {
                        n._fireVideoError(Wo, "An unknown error occurred.")
                    }), 250), new Promise((() => {}))) : Ke({
                        url: t,
                        timeout: 1e4,
                        type: e.MANIFEST
                    }).then((e => (e.url && e.url !== t && -1 !== e.url.indexOf("live-archive") && (n._baseUrl = e.url.split("/").slice(0, -2).join("/")), n.manifestLoadDurations.push({
                        url: t,
                        status: e.status,
                        duration: Date.now() - r
                    }), n.fire(xi.MANIFEST_LOADED), e.text()))).then(Ku((function(e) {
                        let r;
                        return function(i, o) {
                            var s = function() {
                                if (-1 !== t.indexOf(".mpd")) return Gu(n._loadMediaManifest(), (function({
                                    parseMPD: i
                                }) {
                                    const o = n._telecineVideo.enabledAudioTrack,
                                        s = {
                                            audioLang: null == o ? void 0 : o.language
                                        };
                                    r = i(e, t, s)
                                }));
                                r = JSON.parse(e)
                            }();
                            return s && s.then ? s.then(o) : o()
                        }(0, (function() {
                            return r
                        }))
                    }))).catch((e => {
                        if (n.manifestLoadDurations.push({
                                url: t,
                                status: e.response && e.response.status,
                                duration: Date.now() - r
                            }), n.reset(), e instanceof Re && 410 === e.response.status) return n.fire(xi.MEDIA_URL_EXPIRED), new Promise((() => {}));
                        throw e instanceof Re && 400 === e.response.status ? n.fire(xi.MEDIA_URL_BAD_REQUEST, e.response.url) : e instanceof Pe && n.fire(xi.MANIFEST_TIMEOUT), e
                    }))
                }))
            } catch (Np) {
                return Promise.reject(Np)
            }
        }, r.setVideoSrc = function(e, t, n = !0) {
            if (n && !t && this._onReady) {
                if (("metadata" === this._preload || "none" === this._preload && !this.paused) && !this._ready) return void this._onReady.then((() => {
                    const t = this.paused;
                    this.setVideoSrc(e, t, !1)
                })).catch(console.error);
                const t = this._telecineVideo.drmHandler;
                if (t && "sd-fallback" === t.state && !t.hasFallbackSourceUpdated) return void this._onReady.then((() => {
                    this.setVideoSrc(e, !0, !1)
                })).catch(console.error);
                if ("auto" === this._preload) return void this._onReady.then((() => {
                    this.setVideoSrc(e, !1, !1)
                })).catch(console.error)
            }
            t && this.reset(), t || !this.paused || this.sorcerer || (t = !0);
            let r = this._initializeManifest;
            t && (r = this._initialize);
            const i = e.split("/");
            i.pop();
            const o = `${i.join("/")}/`;
            this._reloadingExistingVideo = !t, this._onReady = this._startPreload(e, this._preload).then(this.loadManifest.bind(this)).then((e => "string" == typeof this._baseUrl && -1 !== this._baseUrl.indexOf("live-archive") ? e : (this._baseUrl = o, {
                manifest: e,
                isConfigRefresh: !t
            }))).then(r.bind(this)), t && "auto" === this._preload && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this), !1)), this._onReady = this._addCatchToPromise(this._onReady)
        }, r.getBitrateAtTime = function(e, t = "video", n = "average") {
            if (!this.sorcerer) return 0;
            const r = this.sorcerer.streamIndexAtTime(e, t),
                i = this._streams[t][r];
            var o;
            return i ? null !== (o = i["average" === n ? "avg_bitrate" : "bitrate"]) && void 0 !== o ? o : i.bitrate : 0
        }, r.lockStreamIndexes = function() {
            const e = this._restrictedStreamIndexes.map((e => this._streams[Yu].indexOf(this._streams[Yu][e]))),
                t = !this.paused;
            if (t && (this._ignorePauseEvent = !0, this._video.pause()), this._switching[Yu] = !1, this._brain.lock(e), !this._startedPlaying && "auto" !== this._preload) return;
            const n = Math.max(this.currentTime - 7, 0),
                r = Math.min(this.currentTime + 7, this._video.duration);
            this.sorcerer.removeBuffer(n, r).then((() => {
                !this._startedPlaying && "auto" === this._preload || this.ended ? this._loadSegments() : (this.seekToTime(this.currentTime), t && this.paused && (this._ignorePlayEvent = !0, this._video.play()))
            })).catch(console.error)
        }, r.seekToTime = function(e) {
            if (e === this.currentTime) return Promise.resolve();
            if (null === this._timeToSeekTo || (this._lastSeekReject && (this._lastSeekReject(), this._lastSeekReject = null), this._seekInProgressPromise = null, this._timeToSeekTo = null, this._resolveSeek = null), this._timeToSeekTo = e, this._handleScrubbing(), this._ready)
                for (const t in this._streams)
                    if (this._streams[t].length > 0) {
                        const e = this.sorcerer[t].activeStreamIndex;
                        this.sorcerer[t].streams[e].abort()
                    }
            return this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e), Promise.all([this._onReady, this._removeBufferPromise]).then((() => {
                this._loadSegments()
            })).catch(console.error), this._paused && 0 === e && this.fire(Li.SEEKING), this._onReady.then((() => this._seekInProgressPromise)).catch((e => {}))
        }, r.takeSnapshot = function() {
            this._switchingVideo && t.prototype.takeSnapshot.call(this)
        }, r.initDrm = function() {}, r.onstalled = function() {
            return !1
        }, r.onseeked = function(e) {
            this._startedPlaying && this._restartLoadSegmentsIntervalWithBackoff()
        }, r.onended = function(e) {
            return t.prototype.onended.call(this, e), !0
        }, r.onseeking = function(e) {
            this._startedPlaying
        }, r._handleScrubbing = function() {
            this._scrubStart(), clearTimeout(this._scrubTimeout), this._scrubTimeout = setTimeout((() => {
                this._scrubEnd()
            }), 200)
        }, r._scrubStart = function() {
            this._scrubbing || (this._scrubbing = !0)
        }, r._scrubEnd = function() {
            this._scrubbing = !1
        }, r.ontimeupdate = function(e) {
            if (!this.sorcerer) return !1;
            if (t.prototype.ontimeupdate.call(this), this._gapJumper && this._gapJumper.stop(), 0 === this.currentTime) return this._startedPlaying;
            if (this._timeToSeekTo) return !1;
            if (this._startedPlaying || (this._startedPlaying = !0), this._clearBufferAtTime && this.currentTime >= this._clearBufferAtTime) {
                const e = 2;
                this.sorcerer.removeBuffer(0, this._clearBufferAtTime - e), this._clearBufferAtTime = !1
            }
            const n = this.sorcerer.getDroppedFrameTotal();
            this.fire(xi.DROPPED_FRAMES, n);
            const r = this.sorcerer.getResponseSpeeds(),
                i = this._streams[Yu][this.sorcerer.video.activeStreamIndex],
                o = this._options.tests && this._options.tests.download_bitrate;
            if ((!o || !o.group) && i && this._brain.getCurrentSpeed) {
                const e = {
                    speed: this._brain.getCurrentSpeed(),
                    bitrate: i.avg_bitrate,
                    speeds: r
                };
                this.fire(xi.BANDWIDTH, e)
            }
            const s = this._video.buffered.length;
            if (!s) return !0;
            const a = this._video.buffered.end(s - 1);
            return Math.ceil(a) === Math.ceil(this._video.duration) || (Math.abs(this.currentTime - a) < .2 ? (this._ranIntoBuffer || (this.fire(xi.STREAM_BUFFER_START, {
                hasLowerStreamIndex: this.sorcerer[Yu].activeStreamIndex > 0
            }), this._ranIntoBuffer = !0), !1) : void 0)
        }, r._isEnded = function() {
            return !!this.ended || Math.ceil(this.currentTime) === Math.ceil(this._video.duration)
        }, r._loadSegmentsIntervalTick = function() {
            if (!this.sorcerer) return !1;
            if ("closed" === this.sorcerer.readyState) return !1;
            if (this._video.webkitCurrentPlaybackTargetIsWireless) return !1;
            if (this._isEnded()) return !1;
            if (null !== this._preloadSegmentStreamIndex) {
                try {
                    this._loadPreloadSegments()
                } catch (Np) {
                    return this._handleLoadSegmentFailures(Np), !1
                }
                return !0
            }
            if (0 === this.currentTime && !this._ready) return this._startedPlaying;
            const e = this._loadSegments();
            return e && "function" == typeof e.catch && e.catch(this._handleLoadSegmentFailures.bind(this)), !0
        }, r._handleLoadSegmentFailures = function(e) {
            e.code === DOMException.INVALID_STATE_ERR ? this.fire(xi.SCANNER_ERROR, {
                reason: e
            }) : this.fire(xi.LOAD_SEGMENT_FAILED, new Uo(`${xi.LOAD_SEGMENT_FAILED} - ${e.name}`, e.message)), clearInterval(this._loadSegmentsInterval)
        }, r.onprogress = function() {
            this._brain.canPlayFromTimeInStream(this.currentTime, this._getCurrentStream()) && this._ranIntoBuffer && (this.fire(xi.STREAM_BUFFER_END), this._ranIntoBuffer = !1)
        }, r.onwaiting = function() {
            return !this._gapJumper || !this._gapJumper.start()
        }, r.onerror = function() {
            return !!this._video.error && (this._video.error.code === this._video.error.MEDIA_ERR_DECODE ? (this.fire(xi.SCANNER_ERROR, {
                reason: `encountered media decode error. Message: "${this._video.error.message}"`
            }), !1) : this._video.error.code === this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? (this._preserveCurrentTime = !0, this.fire(xi.SCANNER_ERROR, {
                reason: `encountered media source not supported error. Message: "${this._video.error.message}"`
            }), !1) : t.prototype.onerror.call(this))
        }, r.pause = function() {
            t.prototype.pause.call(this)
        }, r.play = function() {
            return this._restartLoadSegmentsIntervalWithBackoff(), t.prototype.play.call(this, (() => (this._resolveStartPreload && this._resolveStartPreload(), this._reloadingExistingVideo || this._ready || "auto" === this._preload || (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), this._onReady.then((() => Promise.resolve(this._seekInProgressPromise))))))
        }, r.onpause = function() {
            return this._ignorePauseEvent ? (this._ignorePauseEvent = !1, !1) : (t.prototype.onpause.call(this), !0)
        }, r.onplay = function() {
            return !this._ignorePlayEvent || (this._ignorePlayEvent = !1, !1)
        }, r._addCallbackToPromise = function(e, t, n = !0) {
            let r = e.then(t);
            return n && (r = this._addCatchToPromise(r)), r
        }, r._addCatchToPromise = function(e) {
            return e.catch((e => (this.fire(xi.FILE_ERROR, {
                reason: e
            }), new Promise((() => {})))))
        }, r._handleBufferForSeek = function() {
            this._ready && this._streams[Yu][this.sorcerer.video.activeStreamIndex].bitrate / 1e3 > 12e3 && (this._removeBufferPromise = this.sorcerer.removeBuffer())
        }, r._startPreload = function(e, t) {
            return new Promise((n => {
                var r;
                "none" !== t || this._reloadingExistingVideo && !this.paused || "sd-fallback" === (null == (r = this._telecineVideo.drmHandler) ? void 0 : r.state) ? n(e) : this._resolveStartPreload = () => {
                    n(e), this._resolveStartPreload = null
                }
            }))
        }, r._getSeekReadyPromiseForTime = function(e = this._timeToSeekTo) {
            return new Promise((t => {
                const n = this._startedPlaying && 0 === e,
                    r = this._brain.canPlayFromTimeInStream(e, this._getCurrentStream());
                n || r ? t(e) : (this._handleBufferForSeek(), this._resolveSeek = t)
            })).then((e => {
                this._timeToSeekTo = null, this._seekInProgressPromise = null;
                const t = new Promise(((e, t) => {
                    this._lastSeekReject = t;
                    const n = () => {
                        e(this._video.currentTime), this._video.removeEventListener("seeked", n)
                    };
                    this._video.addEventListener("seeked", n)
                }));
                return this._video.currentTime = e, t
            }))
        }, r._handlePreloadChanged = function(e, t) {
            "auto" !== e && "auto" === t && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), e !== t && "none" !== t && this._resolveStartPreload && this._resolveStartPreload()
        }, r._avDurationDifference = function(e) {
            const t = e.audio.reduce(((e, t) => e + t.duration), 0),
                n = e.video.reduce(((e, t) => e + t.duration), 0),
                r = t / e.audio.length,
                i = n / e.video.length;
            return r + 4 < i ? i - r : 0
        }, r._manifestContainsSegmentSizes = function(e) {
            return e.video.every((e => e.segments.every((e => "size" in e))))
        }, r._initializeManifest = function(e) {
            const t = this;
            return new Promise(Ku((function(n, r) {
                const {
                    manifest: i,
                    isConfigRefresh: o
                } = e;
                if (t._manifest = i, t._streams[Yu] = t._sortVideoStreams(i.video), i.audio) {
                    const e = t._avDurationDifference(i);
                    e > 0 && (t._hasAudioVideoMismatch = !0, t.fire(xi.AV_DURATION_MISMATCH, e), t._audioDuration = i.audio.reduce(((e, t) => Math.max(e, t.duration)), 0));
                    const n = i.audio.filter((e => "opus" === e.codecs)),
                        r = i.audio.filter((e => "opus" !== e.codecs)),
                        o = ie.browser.safari || ie.iOS || ie.iPadOS || !F().isTypeSupported('audio/mp4; codecs="opus"') || !n.length ? r : n;
                    t._streams[$u] = t._sortAudioStreams(o)
                }
                for (let e = 0; e < t._streams[Yu].length; e++) {
                    let n = 0;
                    if (i.audio) {
                        const r = t._brain.getAudioIndexFromVideo(t._streams.video, t._streams.audio, e),
                            i = t._streams[$u][r];
                        i && (n = i.avg_bitrate)
                    }
                    t._streams[Yu][e].audioBitrate = n
                }
                return o || t._initDrm(t._streams[Yu], t._streams[$u], t._manifest.key_info), t._manifestContainsSegmentSizes(i) || t.resetBrain(), t.fire(xi.STREAMS_LOADED, t._streams), Gu(Uu(t._streams[Yu]), (function({
                    compatibleStreams: e,
                    incompatibleStreams: r,
                    incompatibleStreamsAttributes: i
                }) {
                    t._streams[Yu] = e, r.length && (t.fire(xi.AVAILABLE_STREAMS_CHANGED), t.fire(xi.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, {
                        incompatibleStreams: r,
                        incompatibleStreamsAttributes: i
                    })), n()
                }))
            })))
        }, r._setUpSorcerer = function(e, t) {
            if (this.sorcerer && this.sorcerer.destroy(), this.sorcerer = new vu(e, t), this.sorcerer.isInstanceofManagedMediaSource(this.sorcerer.mediaSource)) {
                const t = document.createElement("source");
                t.type = "video/mp4", t.src = URL.createObjectURL(this.sorcerer.mediaSource), e.appendChild(t);
                const {
                    src: n,
                    mime: r
                } = this._telecineVideo.externalDisplayFiles.AirPlay, i = document.createElement("source");
                i.type = r, i.src = n, e.appendChild(i)
            } else e.src = URL.createObjectURL(this.sorcerer.mediaSource);
            this.successfulSegments = this.sorcerer.getSuccessfulSegments(), this.failedSegments = this.sorcerer.getFailedSegments(), this._restartLoadSegmentsIntervalWithBackoff()
        }, r._restartLoadSegmentsIntervalWithBackoff = function(e = !1) {
            this._restartLoadSegmentsInterval(500), clearTimeout(this._slowLoadSegmentTimeout), this._slowLoadSegmentTimeout = setTimeout((() => {
                this._restartLoadSegmentsInterval(5e3)
            }), 6e4), e && this._loadSegmentsIntervalTick()
        }, r._restartLoadSegmentsInterval = function(e) {
            clearInterval(this._loadSegmentsInterval), this._loadSegmentsInterval = setInterval((() => {
                this._loadSegmentsIntervalTick()
            }), e)
        }, r._getDuration = function(e = !1) {
            let t = e ? 1 / 0 : 0;
            for (const n in this._streams) this._streams[n].length && (t = Math[e ? "min" : "max"](t, this._streams[n][0].duration));
            return t
        }, r._initialize = function(e) {
            return this._initializeManifest(e).then((() => {
                this._setUpSorcerer(this._video, {
                    duration: this._getDuration(),
                    fetcherTimeout: 8e3,
                    fetcherRetryAbortErrors: !1,
                    disableMMS: this._options.disableMMS,
                    networkInformationApiAB: this._options.networkInformationApiAB
                }), this.sorcerer.on("srcnotsupported", (() => {
                    this.fire(xi.SCANNER_ERROR, {
                        reason: "this codec is not supported for mediasource playback"
                    })
                })), this._video.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", (e => {
                    const t = !this._video.webkitCurrentPlaybackTargetIsWireless,
                        n = "closed" === this.sorcerer.readyState;
                    t && n && this.fire(xi.SCANNER_ERROR, {
                        reason: "MediaSource was closed during AirPlay, falling back to Native HLS playback."
                    })
                }));
                const e = this._getStartingStreamIndex();
                for (const t in this._streams) this._streams[t].forEach(((e, n) => {
                    let r = this._getSegmentUrl(n, "init", t);
                    this._useRangeRequests(n, t) && this._streams[t][n].init_segment_range && (r = {
                        url: r,
                        byteRange: this._getRangeForSegment(n, "init", t)
                    }), this.sorcerer.addStream(`${e.mime_type}; codecs="${this._streams[t][n].codecs}"`, r)
                }));
                this.sorcerer.video.switchTo(e, !0, {
                    reasonForSwitch: 7
                }), this.sorcerer.on("queued", this._handleQueued.bind(this)), this.sorcerer.on("downloadabort", this._handleAborted.bind(this)), this.sorcerer.on("appendbufferend", this._handleAppendBufferEnd.bind(this)), this.sorcerer.on("downloadstart", this._handleDownloadStart.bind(this)), this.sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)), this.sorcerer.on("downloaderror", this._handleDownloadError.bind(this)), this.sorcerer.on("downloadtimeout", this._handleDownloadTimeout.bind(this)), this.sorcerer.on("quotaexceedederror", this._handleQuotaExceededError.bind(this)), this.sorcerer.video.on("streamchange", this._handleStreamChange.bind(this)), this.sorcerer.video.on("streamchangestart", this._handleStreamChangeStart.bind(this)), this.sorcerer.mediaSource.addEventListener("sourceended", (() => {
                    this.fire(Li.PROGRESS)
                }))
            }))
        }, r._getStartingStreamIndex = function() {
            if (null !== this._preloadStreamIndex) return this._preloadStreamIndex;
            let e = this._streams[Yu],
                t = this.sorcerer.video.activeStreamIndex > 0 ? this.sorcerer.video.activeStreamIndex : 0;
            if (this._restrictedStreamIndexes.length && (e = this._restrictedStreamIndexes.map((e => this._streams[Yu][e])), t = this._restrictedStreamIndexes.includes(this.sorcerer.video.activeStreamIndex) ? this._restrictedStreamIndexes.indexOf(this.sorcerer.video.activeStreamIndex) : 0), ie.navigatorConnection && "variant" === this._options.networkInformationApiStartupAB) {
                const n = this._brain.getCurrentSpeed("networkInformation");
                n && (t = this._brain.getStreamFromSpeed(n, e))
            }
            const n = e[t];
            return this._streams[Yu].indexOf(n)
        }, r._sortVideoStreams = function(e) {
            const t = e.slice(0);
            return t.sort((function(e, t) {
                const n = e.width * e.height * e.avg_bitrate,
                    r = t.width * t.height * t.avg_bitrate;
                return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - r
            })), t
        }, r._sortAudioStreams = function(e) {
            const t = e.slice(0);
            return t.sort((function(e, t) {
                return e.avg_bitrate * e.channels - t.avg_bitrate * t.channels
            })), t
        }, r._useRangeRequests = function(e, t) {
            return !!this._streams[t][e].segments[0].range
        }, r._getRangeForSegment = function(e, t, n) {
            return "init" === t ? this._streams[n][e].init_segment_range : this._streams[n][e].segments[t].range
        }, r._getSegmentPriority = function(e, t, n = Yu) {
            return "init" === t ? 0 : this._streams[n][e].segments[t].start
        }, r._getSegmentUrl = function(e, t, n = Yu, r = !1) {
            if ("init" === t && !this._streams[n][e].init_segment_url) return function(e) {
                return Oo(e).buffer
            }(this._streams[n][e].init_segment);
            let i = this._baseUrl;
            const o = this._manifest.base_url && -1 !== this._manifest.base_url.indexOf("//");
            if (o && (i = this._manifest.base_url), this._manifest.base_url && !o && (i += this._manifest.base_url), this._streams[n][e].base_url && (i += this._streams[n][e].base_url), this._useRangeRequests(e, n)) return i;
            if ("init" === t) return i += this._streams[n][e].init_segment_url, i;
            const s = this._streams[n][e].segments[t];
            s.url && (i += s.url);
            const a = -1 !== i.indexOf("akamaized"),
                u = -1 === i.indexOf("?") ? "?" : "&";
            return r && this.CMCDLogger && a && (i += `${u}${this.CMCDLogger.getLogAsQueryParam(s,n)}`), i
        }, r._key = function(e, t, n) {
            return `${e}:${t}:${n}`
        }, r._isFinalSegment = function(e, t, n) {
            return t === this._streams[n][e].segments.length - 1
        }, r._getCurrentlyLoadingStreamsForSegment = function(e, t) {
            const n = [],
                r = this._streamsForSegment[e];
            if (!r) return n;
            for (let i = 0; i < r.length; i++) this._waitingOnSet.has(this._key(r[i], e, t)) && n.push(r[i]);
            return n
        }, r.getCurrentStream = function(e = "video") {
            return this._getCurrentStream(0, e)
        }, r._getCurrentStream = function(e = 0, t = Yu) {
            return void 0 !== this.sorcerer && (e = this.sorcerer[t].activeStreamIndex), this._streams[t][e]
        }, r._getStreamIndexToLoadAndSwitchReason = function(e) {
            let t = this._streams[Yu];
            const n = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null;
            if (t = this._brain.filterStreams(t, this._video.clientWidth, this._video.clientHeight, n), 0 === t.length) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            if (this._switching[Yu]) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const r = t[t.length - 1];
            if (r.id !== this._lastTargetStreamId) {
                this._lastTargetStreamId = r.id;
                const e = {
                    index: this._streams[Yu].indexOf(r),
                    streams: this._streams[Yu]
                };
                this.fire(xi.STREAM_TARGET_CHANGE, e)
            }
            const i = this._getCurrentStream();
            return this._brain.shouldPowerUp(t, i, e).then((e => !1 === e.index ? this._brain.shouldPowerDown(t, i).then((e => !1 === e.index ? {
                index: e.index,
                reasonForSwitch: e.reasonForSwitch
            } : {
                index: this._streams[Yu].indexOf(t[e.index]),
                reasonForSwitch: e.reasonForSwitch
            })) : {
                index: this._streams[Yu].indexOf(t[e.index]),
                reasonForSwitch: e.reasonForSwitch
            }))
        }, r._loadSegmentsForType = function(e = Yu) {
            return this.sorcerer.allowSegmentRequests ? this._getStreamIndexToLoadAndSwitchReason(!1).then((t => {
                let {
                    index: n,
                    reasonForSwitch: r
                } = t, i = {
                    reasonForSwitch: r
                };
                e === $u && (!1 === n && (n = this.sorcerer[Yu].activeStreamIndex), n = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, n), this.sorcerer[$u].activeStreamIndex === n && (n = !1));
                let o = !1;
                !1 !== n && (o = n > this.sorcerer[e].activeStreamIndex, this._switching[e] = !0, this.sorcerer[e].switchTo(n, !0, i).then((() => {
                    this._switching[e] = !1
                })).catch(console.error));
                let s = o;
                const a = "auto" === this._preload && !this._startedPlaying,
                    u = this._brain.getSegmentsToLoad(s, e, this._getCurrentStream(), a),
                    c = this.sorcerer[e].activeStreamIndex;
                for (let l = 0; l < u.length; l++) {
                    const t = this._getSegmentUrl(c, u[l], e, !0),
                        n = this._getCurrentlyLoadingStreamsForSegment(u[l], e);
                    if (n.length > 1) continue;
                    if (1 === n.length && c <= n[0]) continue;
                    const r = this._isFinalSegment(c, u[l], e),
                        i = {
                            stream: c,
                            segment: u[l],
                            type: e
                        },
                        o = this.sorcerer[e].streams[c];
                    let s = t;
                    this._useRangeRequests(c, e) && (s = {
                        url: s,
                        byteRange: this._getRangeForSegment(c, u[l], e)
                    });
                    const a = this._getSegmentPriority(c, u[l], e),
                        d = e === Yu;
                    let h = null;
                    0 === c && e === Yu && (h = 16e3);
                    let f = null;
                    try {
                        f = this._streams[e][c].segments[u[l]].size
                    } catch (Np) {}
                    o.addSegment(s, {
                        identifier: i,
                        isFinalSegment: r,
                        priority: a,
                        includeWithBandwidthChecks: d,
                        timeout: h,
                        size: f
                    }).catch((e => {}))
                }
            })).catch((e => {
                throw e
            })) : Promise.resolve()
        }, r._loadPreloadSegments = function() {
            for (const e in this._streams) {
                if (0 === this._streams[e].length) continue;
                let t = 0;
                const n = this._brain.getSegmentsToLoad(!1, e, this._getCurrentStream());
                n.length > 0 && (t = n[0]);
                let r = this._preloadSegmentStreamIndex;
                e === $u && (r = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, this._preloadSegmentStreamIndex));
                const i = this._key(r, t, e);
                if (this._waitingOnSet.has(i)) continue;
                const o = this._getSegmentUrl(r, t, e),
                    s = this._isFinalSegment(r, t, e),
                    a = this.sorcerer[e].streams[r],
                    u = {
                        stream: r,
                        segment: t,
                        type: e
                    },
                    c = !0;
                let l = o;
                this._useRangeRequests(r, e) && (l = {
                    url: l,
                    byteRange: this._getRangeForSegment(r, t, e)
                }), a.addSegment(l, {
                    identifier: u,
                    isFinalSegment: s,
                    loadOnly: c,
                    priority: 0
                }).catch((e => {}))
            }
        }, r._loadSegments = function() {
            const e = this._video.webkitCurrentPlaybackTargetIsWireless,
                t = "closed" === this.sorcerer.readyState;
            return e || t ? Promise.resolve() : this._onReady && this._onReady.then((() => {
                const e = [];
                for (const t in this._streams) this._streams[t].length > 0 && e.push(this._loadSegmentsForType(t));
                return Promise.all(e)
            }))
        }, r._handleQueued = function(e) {
            this._waitingOnSet.add(this._key(e.stream, e.segment, e.type)), this._streamsForSegment[e.segment] || (this._streamsForSegment[e.segment] = []), -1 === this._streamsForSegment[e.segment].indexOf(e.stream) && this._streamsForSegment[e.segment].push(e.stream)
        }, r._clearWaitingOn = function(e) {
            (this._streamsForSegment[e.segment] || []).forEach((t => {
                this._waitingOnSet.delete(this._key(t, e.segment, e.type))
            }))
        }, r._handleAborted = function(e) {
            this._streamsForSegment[e.segment] && this._clearWaitingOn(e)
        }, r._handleAppendBufferEnd = function(e) {
            this.fire(xi.APPEND_BUFFER_END, {
                identifier: e
            }), this.preloadStreamIndex = null, this._restartLoadSegmentsIntervalWithBackoff(), this._checkSwitchUp && e.stream === this._lastStreamIndex && (this._checkSwitchUp = !1, this._clearBufferAtTime = this._streams[Yu][e.stream].segments[e.segment].start), this._streamsForSegment[e.segment] && this._clearWaitingOn(e);
            const t = this._brain.canPlayFromTimeInStream(this._timeToSeekTo, this._getCurrentStream());
            null !== this._timeToSeekTo && this._resolveSeek && t && (this._resolveSeek(this._timeToSeekTo), this._resolveSeek = null), this._gapJumper && this._gapJumper.onSegmentAppended()
        }, r._handleDownloadStart = function(e) {
            this.fire(xi.DOWNLOAD_START, {
                identifier: e
            })
        }, r._handleDownloadEnd = function(e, t) {
            this.fire(xi.DOWNLOAD_END, {
                identifier: e,
                data: t
            })
        }, r._handleDownloadError = function(e, t) {
            this._clearWaitingOn(e);
            let n = xi.DOWNLOAD_ERROR;
            410 === t && (n = xi.MEDIA_URL_EXPIRED), 502 === t && this.video.metadata.drm && (n = xi.DRM_FAILURE), this.fire(n, {
                identifier: e,
                status: t
            })
        }, r._handleDownloadTimeout = function(e, t) {
            this.fire(xi.DOWNLOAD_TIMEOUT, {
                identifier: e,
                data: t
            }), this._streamsForSegment[e.segment] && this._clearWaitingOn(e), e.type === Yu ? this._switching[Yu] = !1 : e.type === $u && (this._switching[$u] = !1)
        }, r._handleQuotaExceededError = function(e) {
            this.fire(xi.QUOTA_EXCEEDED_ERROR, {
                buffered: e
            })
        }, r._handleStreamChangeStart = function(e, t) {
            const n = {
                previousStreamIndex: this._manifest.video.indexOf(this._streams[Yu][e]),
                index: this._manifest.video.indexOf(this._streams[Yu][t]),
                streams: this._manifest.video
            };
            this.fire(xi.STREAM_CHANGE_START, n)
        }, r._handleStreamChange = function(e, t) {
            var n;
            if (null == (n = this._manifest) || !n.video) return;
            e > this._lastStreamIndex && this.currentTime > 0 && (this._checkSwitchUp = !0), this._lastStreamIndex = e;
            const r = {
                index: this._manifest.video.indexOf(this._streams[Yu][e]),
                streams: this._manifest.video,
                metadata: t
            };
            this.fire(xi.STREAM_CHANGE, r)
        }, r._initDrm = function(e = [], t = [], n = {}) {
            const r = this._telecineVideo.drmHandler;
            if (!r) return;
            const i = function(e, t) {
                const n = {
                    audio: e.map((e => `${e.mime_type};codecs="${e.codecs}"`)),
                    video: []
                };
                for (let r = 0; r < t.length; r++) {
                    const [e, i] = t[r].codecs.split(",");
                    n.video[r] = `${t[r].mime_type};codecs="${e}"`, i && n.audio.push(`audio/mp4;codecs="${i}"`)
                }
                return n
            }(t, e);
            r.init(this, i, n), r.setFallbackCallback((() => {
                this.paused || (this._video.pause(), this.once(xi.CURRENT_FILE_CHANGE, (() => {
                    this.play()
                })))
            }))
        }, r._setupCMCDLogger = function() {
            var e;
            null != (e = this._options.tests) && null != (e = e.cmcd) && e.group && (this.CMCDLogger = new Pu(this, this._options.sessionMetadata))
        }, r._loadMediaManifest = function() {
            return Promise.resolve().then((function() {
                return Io
            }))
        }, l(n, [{
            key: "preload",
            get: function() {
                return this._preload
            },
            set: function(e) {
                this._handlePreloadChanged(this._preload, e), this._preload = e
            }
        }, {
            key: "videoElement",
            get: function() {
                return this._video
            }
        }, {
            key: "videoWidth",
            get: function() {
                const e = this._getCurrentStream();
                return e ? e.width : this._video.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                const e = this._getCurrentStream();
                return e ? e.height : this._video.videoHeight
            }
        }, {
            key: "restrictedStreamIndexes",
            get: function() {
                return this._restrictedStreamIndexes
            },
            set: function(e) {
                this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e, this._onReady.then((() => this.lockStreamIndexes())).catch(console.error))
            }
        }, {
            key: "preloadStreamIndex",
            get: function() {
                return this._preloadStreamIndex
            },
            set: function(e) {
                this._preloadStreamIndex = e;
                const t = null !== e ? [this._preloadStreamIndex] : this._restrictedStreamIndexes;
                this._brain.lock(t)
            }
        }, {
            key: "currentTime",
            get: function() {
                return null !== this._timeToSeekTo ? this._timeToSeekTo : this._video.currentTime
            },
            set: function(e) {
                (this._startedPlaying || 0 !== e) && (this._hasAudioVideoMismatch && this._audioDuration && e > this._audioDuration - 1 && !this._brain.isTimeInBuffer(e, this._video.buffered, this._video.duration) && (e = this._audioDuration - 1), this.seekToTime(e))
            }
        }, {
            key: "downloadSpeed",
            get: function() {
                return this._lastDownloadBitrate
            }
        }, {
            key: "brainDebug",
            get: function() {
                const e = this.sorcerer && this._brain && this._brain.getCurrentSpeed ? this._brain.getCurrentSpeed() : null;
                let t = this.sorcerer && this.sorcerer.getResponseSpeeds ? this.sorcerer.getResponseSpeeds() : null;
                return t = t ? t.slice(-20) : [], {
                    currentSpeed: e,
                    responseSpeeds: t
                }
            }
        }, {
            key: "isLowerProfileAvailable",
            get: function() {
                return this.sorcerer ? this.sorcerer[Yu].activeStreamIndex > 0 : null
            }
        }, {
            key: "videoStreams",
            get: function() {
                return this._streams[Yu]
            }
        }], [{
            key: "displayName",
            get: function() {
                return "MediaSourceScanner"
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                return ["application/vnd.vimeo.dash+json", "video/vnd.mpeg.dash.mpd"]
            }
        }])
    }(rs),
    Qu = function() {
        function e(e) {
            this._scanner = e, this._currentTime = 0, this._latencyInterval = setInterval(this._onLatencyInterval.bind(this), 500)
        }
        var t = e.prototype;
        return t.destroy = function() {
            clearInterval(this._latencyInterval)
        }, t._onLatencyInterval = function() {
            const e = this._scanner.videoElement,
                t = this._scanner.getCurrentStream();
            if (!e || !t) return;
            this._currentTime = e.currentTime;
            const n = this._computeLatency();
            null !== n && (this._latency = n, this._scanner.fire(Ui.LATENCY_UPDATED, n), this._scanner.lowLatencyMode && (ie.browser.ie || ie.browser.safari || null !== this._scanner.presentationDelay && (e.playbackRate = 1)))
        }, t._estimateLiveEdge = function() {
            const e = this._scanner.getCurrentStream();
            return e ? e.edge + e.age : null
        }, t._computeLatency = function() {
            const e = this._estimateLiveEdge();
            return null === e || 0 === this._currentTime ? null : e - this._currentTime
        }, t._getForwardBufferLength = function() {
            const e = this._scanner.videoElement,
                t = this._scanner.getCurrentStream();
            if (!e || !t) return 0;
            const n = e.buffered.length;
            return n ? e.buffered.end(n - 1) : t.edge - this._currentTime
        }, l(e, [{
            key: "latency",
            get: function() {
                return this._latency
            }
        }, {
            key: "liveSyncPosition",
            get: function() {
                const e = this._estimateLiveEdge(),
                    t = this._scanner.presentationDelay,
                    n = this._scanner.getCurrentStream();
                return null === e || null === t || null === n ? 0 : e - t - this.edgeStalled
            }
        }, {
            key: "edgeStalled",
            get: function() {
                const e = this._scanner.getCurrentStream();
                if (!e) return 0;
                const t = 3 * (this._scanner.lowLatencyMode && e.partTargetDuration || e.targetDuration);
                return Math.max(e.age - t, 0)
            }
        }])
    }();
const Ju = [1, 2, 5];
let Zu = function(e) {
    function t(t, n = {}) {
        var r;
        return (r = e.call(this, t, n) || this)._UPSHIFT_BANDWIDTH_THRESHOLD = .4, r._DOWNSHIFT_BANDWIDTH_THRESHOLD = .6, r.consecutiveStreamIndex = {}, r.isNewPlayback = !0, r
    }
    p(t, e);
    var n = t.prototype;
    return n.optimalStream = function(e, t) {
        var n, r;
        this.isNewPlayback && ((null == (r = this.scanner.sorcerer) ? void 0 : r.getResponseSpeeds().length) >= 2 && (this.isNewPlayback = !1));
        if (1 === e.length) return {
            index: 0,
            reasonForSwitch: 6
        };
        if (this.isNewPlayback) {
            let t = 0,
                n = 0,
                r = this.scanner.videoElement.clientHeight,
                i = [];
            for (let o = 0; o < e.length; o++) {
                let s = e[o].height;
                i.push(s), s < r && s > n && (t = o, n = e[o].height)
            }
            return t = Math.max(0, t - 1), {
                index: t,
                reasonForSwitch: 4
            }
        }
        const i = this.getCurrentSpeed();
        let o = t,
            s = t;
        for (let f = 0; f < e.length; f++) i * this._UPSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (o = f), i * this._DOWNSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (s = f);
        const a = t < o ? o : s;
        this._clearConsecutiveStreamIndexes(a), this.consecutiveStreamIndex[a]++;
        const u = this.scanner.lowLatencyMode ? .5 : 1.5,
            c = this.scanner.segmentLength * u,
            l = this.scanner.videoElement,
            d = l.buffered,
            h = null == (n = this._options.mediaSourceScanner) ? void 0 : n.droppedFrameSwitchPercent;
        return d && 0 !== d.length ? d.end(d.length - 1) - l.currentTime < c ? {
            index: 0 !== t ? t - 1 : 0,
            reasonForSwitch: 1
        } : t > 0 && !isNaN(h) && this.hasTooManyDroppedFrames(t, this.scanner.getCurrentStream(), h) ? (this.blacklist(t), this.scanner.fire(xi.DROPPED_FRAME_PERCENT_EXCEEDED), {
            index: t - 1,
            reasonForSwitch: 2
        }) : this.consecutiveStreamIndex[a] > 2 && a !== t ? {
            index: a,
            reasonForSwitch: 3
        } : {
            index: t,
            reasonForSwitch: null
        } : {
            index: 0,
            reasonForSwitch: 5
        }
    }, n.getCurrentSpeed = function() {
        var e;
        return null == (e = this.scanner.sorcerer) ? void 0 : e.getCurrentSpeed({
            type: "average",
            howMany: 5,
            weights: Ju
        })
    }, n._clearConsecutiveStreamIndexes = function(e) {
        this.consecutiveStreamIndex[e] || (this.consecutiveStreamIndex[e] = 0);
        for (const t in this.consecutiveStreamIndex) this.consecutiveStreamIndex.hasOwnProperty(t) && parseInt(t, 10) !== e && (this.consecutiveStreamIndex[t] = 0)
    }, n.getAvailabilityStart = function(e, t) {
        return this._getSegmentAvailabilityStart(e, t.edge)
    }, n.getAvailabilityEnd = function(e, t) {
        return this._getSegmentAvailabilityEnd(e, t.edge)
    }, n.canPlayFromTimeInStream = function(e, t) {
        return !!t && this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration)
    }, n.getSegmentsToLoad = function(e, t, n) {
        var r, i, o;
        const {
            currentTime: s,
            liveTailTime: a,
            sorcerer: u,
            bufferTarget: c,
            atLiveEdge: l
        } = this.scanner, d = null == (r = u[t]) || null == (r = r.sourceBuffer) ? void 0 : r.buffered, h = null != d && d.length ? d.start(d.length - 1) : 0, f = he(Math.max(s, h), d);
        if (!e && f >= c) return [];
        const p = Math.max(s, a),
            _ = l ? n.edge : p,
            m = this._getSegmentAvailabilityStart(_, n.edge),
            v = this._getSegmentAvailabilityEnd(_, n.edge),
            g = this.scanner.lowLatencyMode && (null == (i = n.parts) ? void 0 : i.length),
            y = [].concat(T(n.segments), T(null !== (o = n.parts) && void 0 !== o ? o : [])),
            E = (g ? n.parts : y).filter((t => !!t.uri && (e || !this.scanner.isSegmentAdded(t)) && !(t.end < m || t.start > v)));
        return g && E.forEach(((e, t) => {
            for (; e = e.dependentOn;) E.includes(e) || this.scanner.isStreamSegmentAdded(e) || E.splice(t, 0, e)
        })), u[t].activeStreamIndex, E
    }, n._getSegmentAvailabilityStart = function(e, t) {
        const n = t - this._getPresentationDelay();
        return Math.max(0, Math.min(e, n))
    }, n._getSegmentAvailabilityEnd = function(e, t) {
        const n = e + this.scanner.bufferTarget;
        return Math.min(n, t)
    }, n._getPresentationDelay = function() {
        return this.scanner.presentationDelay || this.scanner.manifest.presentationDelay
    }, l(t, [{
        key: "displayName",
        get: function() {
            return "Live"
        }
    }])
}(yu);
const ec = ["disabled", "hidden", "showing"],
    tc = ["subtitles", "captions", "descriptions", "chapters", "metadata"],
    nc = ["ar", "fa", "he", "iw", "ku", "ps", "sd", "ur", "yi"],
    rc = new WeakMap,
    ic = new WeakMap;
let oc = function(e) {
    function t({
        kind: t,
        src: n = null,
        label: r = "",
        language: i = "",
        id: o = Ae(),
        provenance: s = ""
    }, a) {
        var u;
        if (u = e.call(this) || this, -1 === tc.indexOf(t)) throw Vo(12, "SYNTAX_ERR", "Syntax Error");
        return Object.defineProperties(u, {
            kind: {
                value: t,
                enumerable: !0
            },
            label: {
                value: r,
                enumerable: !0
            },
            language: {
                value: i,
                enumerable: !0
            },
            id: {
                value: `${o}`,
                enumerable: !0
            },
            rtl: {
                value: -1 !== nc.indexOf(i.substr(0, 2)),
                enumerable: !0
            },
            provenance: {
                value: s,
                enumerable: !0
            }
        }), u.video = a, u.src = n, u._modeHasBeenSet = !1, rc.set(u, "disabled"), u
    }
    return p(t, e), t.prototype.dispatchEvent = function(e) {
        this.fire(e, {
            target: this
        })
    }, l(t, [{
        key: "mode",
        get: function() {
            return rc.get(this)
        },
        set: function(e) {
            if (ec.indexOf(e) > -1) {
                if (this._modeHasBeenSet = !0, rc.get(this) === e) return;
                rc.set(this, e), this.video.currentScanner && this.video.currentScanner.setModeForTrack(this, e), this.dispatchEvent("modechange")
            }
        }
    }, {
        key: "src",
        get: function() {
            return ic.get(this)
        },
        set: function(e) {
            ic.set(this, e), this.video.fire(xi.TEXT_SRC_UPDATE, this)
        }
    }, {
        key: "cues",
        get: function() {
            return this.video.currentScanner ? this.video.currentScanner.getCuesForTrack(this) : []
        }
    }, {
        key: "activeCues",
        get: function() {
            return this.video.currentScanner ? this.video.currentScanner.getActiveCuesForTrack(this) : []
        }
    }, {
        key: "trackElement",
        get: function() {
            return document.getElementById(`telecine-track-${this.id}`)
        }
    }])
}(wn);

function sc(e) {
    var t = /^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{3})$/.exec(e);
    if (!t) return -1;
    var n = parseInt(t[4], 10) / 1e3;
    return n += parseInt(t[3], 10), t[2] && (n += 60 * parseInt(t[2], 10)), t[1] && (n += 60 * parseInt(t[1], 10) * 60), n
}

function ac(e) {
    var t = 0,
        n = e.split(/(?:(?:\r\n|\n){2,})/),
        r = [],
        i = null;
    do {
        0 === t && /^\uFEFF?WEBVTT(?: .*)?/.test(n[t]) && t++, (i = /^(?:(.*)(?:\r\n|\n))?([\d:,.]+) --> ([\d:,.]+)(.*)?(?:\r\n|\n)([\s\S]*)/.exec(n[t])) && r.push({
            startTime: sc(i[2]),
            endTime: sc(i[3]),
            text: i[5]
        }), t++
    } while (t < n.length);
    return r
}

function uc(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function cc(e, t) {
    try {
        var n = e()
    } catch (Np) {
        return t(Np)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function lc(e, t) {
    return e && e.then ? e.then(t) : t(e)
}

function dc() {}

function hc(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function fc(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }
}

function pc(e, t) {
    if (!t) return e && e.then ? e.then(dc) : Promise.resolve()
}
const _c = ie.browser.ie || ie.browser.edge ? .5 : .2,
    mc = 8e3;
let vc = function(e) {
    function t(t, n = {}) {
        var r, i, o, s, a, u, c;
        return (c = e.call(this, t, n) || this)._playInitiated = !1, c._captionsVisible = !1, c._captionsLoading = !1, c._atLiveEdge = !0, c._atLiveTail = !1, c._STREAM_SWITCH_CHECK_INTERVAL = 2e3, c._DOWN_SHIFT_CHECK_INTERVAL = 1e4, c.reset(), c.defaultPresentationDelay = null !== (r = n.presentationDelay) && void 0 !== r ? r : n.lowLatencyMode ? 3 : 12, c.defaultBufferTarget = n.lowLatencyMode ? 3 : 12, c.bufferTarget = c.defaultBufferTarget, c.presentationDelay = c.defaultPresentationDelay, c.lowLatencyMode = null !== (i = n.lowLatencyMode) && void 0 !== i && i, c.disableDeltaUpdates = null !== (o = n.disableDeltaUpdates) && void 0 !== o && o, c._preloadStreamIndex = null, Object.defineProperty(c, "eventIsLowLatency", {
            value: null !== (s = n.lowLatencyMode) && void 0 !== s && s,
            writable: !1
        }), Object.defineProperty(c, "eventHasDVREnabled", {
            value: null !== (a = n.dvrEnabled) && void 0 !== a && a,
            writable: !1
        }), c._timeoutTest = null == (u = c._options.tests) || null == (u = u.llhls_timeout) ? void 0 : u.group, window.addEventListener("online", (() => {
            c.play()
        })), c
    }
    p(t, e), t.supported = function(e) {
        const t = F(e);
        return void 0 !== t && t.isTypeSupported
    };
    var n = t.prototype;
    return n.deactivate = function() {
        e.prototype.deactivate.call(this), this.reset()
    }, n.reset = function() {
        var e, t, n;
        null == (e = this._sorcerer) || e.destroy(), null == (t = this._manifestLoader) || t.stop(), null == (n = this._latencyController) || n.destroy(), this._videoReady = de(), this._sorcerer = null, this._streams = {}, this._streams.video = [], this._streams.audio = [], this._lastStreamIndex = 0, this._isOnline = !1, this._hasLiveEventEnded = !1, this._timeSinceLastStreamSwitchCheck = 0, this._timeSinceLastDownShift = Number.NEGATIVE_INFINITY, this._lastStallCurrentTime = -1, this._timeToSeekTo = null, this._resolveSeek = null, this._abr = new Zu(this, this._options), this._latencyController = new Qu(this), this._restrictedStreamIndexes = [], this._preloadStreamIndex = null, this._switching = {}, this._segmentsAdded = {}, this._captionsAddedToTextTrack = {}, this._captionsAddedToTranscript = {}, this._fetchedCues = {}
    }, n.endLive = function() {
        var t;
        this._isOnline = !1, this._hasLiveEventEnded = !0, this.eventHasDVREnabled && !this.atLiveEdge || (null == (t = this._manifestLoader) || t.stop(), this._sorcerer && (this._sorcerer.abortFetches(), this._sorcerer.endOfStream()), this.eventHasDVREnabled || e.prototype.deactivate.call(this), this.fire(Li.ENDED))
    }, n._signalOnline = function() {
        this._isOnline || (this._isOnline = !0, this.fire(Ui.STREAM_ONLINE))
    }, n._signalOffline = function() {
        this._isOnline && (this._isOnline = !1, this.fire(Ui.STREAM_OFFLINE))
    }, n._toggleConnection = function(e) {
        e ? this._signalOnline() : this._signalOffline()
    }, n._loadManifest = function(e) {
        try {
            const t = this;
            if (t._hasLiveEventEnded) return uc();
            t._manifestLoader && (t._manifestLoader.stop(), t._manifestLoader.off());
            let n = [t._loadMediaManifest()];
            return t.video.metadata.p2pReady && n.push(t.video.metadata.p2pReady), uc(Promise.allSettled(n), (function([n]) {
                const {
                    M3U8Loader: r,
                    PLAYLIST_UPDATE: i,
                    PLAYLIST_ERROR: o,
                    convertTsCodecs: s
                } = n.value;
                return t._manifestLoader = new r({
                    disableDeltaUpdates: t.disableDeltaUpdates
                }), t._manifestLoader.lowLatencyMode = t.lowLatencyMode, t._manifestLoader.dvrEnabled = t.eventHasDVREnabled, t._manifestLoader.on(i, t._onPlaylistUpdate.bind(t)), t._manifestLoader.on(o, (e => {
                    t._signalOffline()
                })), lc(cc((function() {
                    const n = t.video.metadata.playlistRefreshUrl;
                    return uc(t._manifestLoader.start(e, n), (function(e) {
                        t._manifest = e, t._signalOnline()
                    }))
                }), (function(e) {
                    throw t._signalOffline(), t.endLive(), e
                })), (function(e) {
                    t._streams.video = gc(function(e) {
                        return e.filter((t => t.codecs.split(".")[0] === e[0].codecs.split(".")[0]))
                    }(function(e) {
                        const t = e.slice(0);
                        return t.sort((function(e, t) {
                            const n = e.width * e.height * e.avg_bitrate,
                                r = t.width * t.height * t.avg_bitrate;
                            return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - r
                        })), t
                    }(t._manifest.video))), t._streams.audio = gc(w(I(t._streams.video, (({
                        audio: e
                    }) => e))));
                    const {
                        index: n,
                        reasonForSwitch: r
                    } = t._getStream("video", !0);
                    let i = {
                        reasonForSwitch: r
                    };
                    return uc(t._manifestLoader.switchTo("video", n), (function() {
                        let e, r = [];
                        if (t._streams.audio.length) {
                            let {
                                index: n
                            } = t._getStream("audio", !0);
                            e = n, r.push(t._manifestLoader.switchTo("audio", e))
                        }
                        if (t.manifest.captions && t.manifest.captions.length > 0) {
                            const {
                                index: e
                            } = t._getStream("subtitles", !0);
                            r.push(t._manifestLoader.switchTo("subtitles", e))
                        }
                        return uc(Promise.all(r), (function() {
                            var r, o;
                            null == (r = t._sorcerer) || r.destroy(), t._sorcerer = new vu(t._video, {
                                fetcherRetryAbortErrors: !1,
                                fetcherTimeout: mc,
                                disableMMS: t._options.disableMMS,
                                networkInformationApiAB: t._options.networkInformationApiAB
                            }), t._sorcerer.initFrameDropper(), t._streams.video.forEach((e => {
                                t._sorcerer.addStream(s(No(t._manifestLoader.activeStream("video").mimeType, e.codecs)), e.initSegment)
                            })), t._streams.audio.forEach((e => {
                                t._sorcerer.addStream(s(No(t._manifestLoader.activeStream("audio").mimeType, e.codecs)), e.initSegment)
                            })), t.fire(xi.STREAMS_LOADED, t._streams), t.manifest.captions && t.manifest.captions.length > 0 && (t.manifest.captions.forEach(t._loadTextTrack.bind(t)), t.fire(xi.TEXT_TRACKS_AVAILABLE)), t._setUpMediaSorcererEvents(), t._sorcerer.video.switchTo(n, !1, i), t._streams.audio.length && (null == (o = t._sorcerer.audio) || o.switchTo(e, !1))
                        }))
                    }))
                }))
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n._refreshManifest = function() {
        try {
            const e = this;
            return uc(function(e) {
                if (e && e.then) return e.then(dc)
            }(cc((function() {
                return uc(e._manifestLoader.update(), (function() {
                    e._signalOnline()
                }))
            }), (function() {
                e._signalOffline()
            }))))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n._setUpMediaSorcererEvents = function() {
        this._sorcerer.video.on("streamchange", this._handleStreamChange.bind(this)), this._sorcerer.video.on("streamchangestart", this._handleStreamChangeStart.bind(this)), this._sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)), this._sorcerer.on("downloadtimeout", this._handleDownloadTimeout.bind(this)), this._sorcerer.on("downloadabort", this._handleDownloadAbort.bind(this)), this._sorcerer.on("appendbufferend", this._handleBufferAppend.bind(this))
    }, n._handleDownloadEnd = function(e, t) {
        if (e && e.isInitSegmentRequest) return;
        const n = this._getCurrentStream();
        t.extraContext = {
            liveAvail: {
                start: this._abr.getAvailabilityStart(this.currentTime, n),
                end: this._abr.getAvailabilityEnd(this.currentTime, n)
            }
        }, this.fire(xi.DOWNLOAD_END, {
            identifier: e,
            data: t
        })
    }, n._handleDownloadTimeout = function(e, t) {
        e && e.isInitSegmentRequest || (this._key(e), this._clearSegment(e), this._switching[e.type] = !1, this.fire(xi.DOWNLOAD_TIMEOUT, {
            identifier: e,
            data: t
        }))
    }, n._handleDownloadAbort = function(e) {
        e && e.isInitSegmentRequest || (this._key(e), this._clearSegment(e))
    }, n._handleStreamChangeStart = function(e, t) {
        const n = {
            previousStreamIndex: this._streams.video.indexOf(this._streams.video[e]),
            index: this._streams.video.indexOf(this._streams.video[t]),
            streams: this._streams.video
        };
        this.fire(xi.STREAM_CHANGE_START, n)
    }, n._handleStreamChange = function(e, t = {}) {
        this.fire(xi.STREAM_CHANGE, {
            index: e,
            streams: this._streams.video,
            metadata: t
        })
    }, n._firstBufferAheadIndex = function(e, t) {
        for (let n = 0; n < (null == t ? void 0 : t.length); n++)
            if (t.start(n) > e) return n
    }, n._handleBufferAppend = function(e) {
        var t;
        const {
            type: n,
            stream: r
        } = e, i = this.sorcerer[n].sourceBuffer.buffered, o = this._getSegmentById(e);
        if (o && i.length && (this._streams[n][r].playlist.timeOffset = i.end(i.length - 1) - (o.end - o.timeOffset)), null === this._timeToSeekTo || !this._resolveSeek) return;
        const s = this._firstBufferAheadIndex(this.currentTime, i),
            a = null !== (t = null == i ? void 0 : i.start(s)) && void 0 !== t ? t : 0,
            u = he(a, i);
        if (void 0 !== s && u > this.bufferTarget) return Number((a - this.currentTime).toFixed(3)), void(this.currentTime = a);
        this._timeToSeekTo < this.liveTailTime && (this._timeToSeekTo = this.liveTailTime), this._abr.canPlayFromTimeInStream(this._timeToSeekTo, this._getCurrentStream()) && (this._resolveSeek(this._timeToSeekTo), this._resolveSeek = null)
    }, n._key = function({
        type: e,
        segment: t,
        part: n
    }) {
        return `${e}_${t}_${n}`
    }, n._getSegmentById = function({
        type: e,
        stream: t,
        segment: n,
        part: r
    }) {
        const i = this._streams[e][t].getSegmentBySN(n);
        return (null == i ? void 0 : i.getPart(r)) || i
    }, n._clearSegment = function(e) {
        if (e.part > 0) {
            const t = g(g({}, e), {}, {
                part: e.part - 1
            });
            this._clearSegment(t)
        }
        const t = this._key(e);
        delete this._segmentsAdded[t]
    }, n.isSegmentAdded = function(e) {
        return !!this._segmentsAdded[this._key(e)]
    }, n.isStreamSegmentAdded = function(e) {
        const t = this._key(e),
            n = this._sorcerer[e.type].activeStreamIndex;
        return !!this._segmentsAdded[t] && this._segmentsAdded[t].stream === n
    }, n._onPlaylistUpdate = function(e, t) {
        try {
            const i = this,
                {
                    type: o
                } = e;
            var n, r;
            return i.eventHasDVREnabled && (null == (n = i._sorcerer) || n.setLiveSeekableRange(i.liveTailTime, i.liveEdgeTime)), i.fire(xi.STREAM_UPDATED, e), "subtitles" === o ? ((i._captionsVisible || i._captionsLoading) && (null == (r = i.manifest.captions) ? void 0 : r.length) > 0 && i._addTextTrackCue(), uc()) : (t || i._loadSegmentsForType(o), i._toggleConnection(i._hasNewSegments(o) || !i._atDurationEnd()), i._checkForPlaybackGap(), (i.lowLatencyMode || i.video.metadata.p2pReady) && i._checkForPlaybackStall(), uc())
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n._loadTextTrack = function({
        label: e,
        language: t
    }, n) {
        if (!this._captionsTrack) {
            const r = new oc({
                label: e,
                id: n,
                kind: "captions",
                language: t
            }, this._telecineVideo);
            this._telecineVideo.textTracks = Do([r]), this._captionsTrack = this.addTextTrack(r)
        }
    }, n._getSegmentIdentifier = function(e) {
        return `${e.type}_${e.mediaSequenceNumber}`
    }, n._getVideoTimeOffset = function() {
        return this._getCurrentStream("video").playlist.timeOffset
    }, n._shouldAddSegmentCuesToTextTrack = function(e) {
        const t = this._getSegmentIdentifier(e),
            n = this._captionsAddedToTextTrack[t],
            r = this._getVideoTimeOffset(),
            i = e.end + r >= this.currentTime && e.start + r <= this.currentTime + this.bufferTarget;
        return this._captionsVisible && !n && i
    }, n._shouldAddSegmentCuesToTranscript = function(e) {
        const t = this._getSegmentIdentifier(e),
            n = this._captionsAddedToTranscript[t],
            r = this._getVideoTimeOffset(),
            i = e.end + r >= this.liveEdgeTime - e.duration && e.start + r <= this.liveEdgeTime + this.bufferTarget;
        return this._captionsLoading && !n && i
    }, n._getSegmentCues = function(e) {
        try {
            const t = this,
                n = t._getSegmentIdentifier(e);
            return uc(hc((function() {
                if (!t._fetchedCues[n]) return uc(Ke(e.url).text(), (function(e) {
                    const r = ac(e),
                        i = function(e) {
                            const t = e.match(/=MPEGTS:(\d+),/);
                            return (t && t[1] || 0) / 9e4
                        }(e),
                        o = r.map((e => (e.startTime = i + e.startTime, e.endTime = i + e.endTime, new(window.VTTCue || window.TextTrackCue)(e.startTime, e.endTime, e.text))));
                    t._fetchedCues[n] = o
                }))
            }), (function() {
                return t._fetchedCues[n]
            })))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n._addTextTrackCue = function() {
        try {
            const e = this;
            return uc(e._videoReady, (function() {
                e.manifest.captions && e.manifest.captions[0].segments.forEach(fc((function(t) {
                    const n = e._getSegmentIdentifier(t),
                        r = e._shouldAddSegmentCuesToTextTrack(t),
                        i = e._shouldAddSegmentCuesToTranscript(t);
                    return function() {
                        var o = function() {
                            if (r || i) return uc(e._getSegmentCues(t), (function(t) {
                                r && (e._captionsAddedToTextTrack[n] = !0, t.forEach((t => {
                                    e._captionsTrack.addCue(t)
                                }))), i && (e._captionsAddedToTranscript[n] = !0, e.fire(xi.SEGMENT_CUES_LOADED, t))
                            }))
                        }();
                        if (o && o.then) return o.then(dc)
                    }()
                })))
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n._hasNewSegments = function(e) {
        var t;
        const n = this._getCurrentStream(e),
            r = 3 * (this.lowLatencyMode ? 3 : 1);
        return (null == (t = n.playlist) ? void 0 : t.misses) < r
    }, n._loadSegments = function() {
        try {
            const e = this;
            return uc(e._videoReady, (function() {
                const t = e._video.webkitCurrentPlaybackTargetIsWireless,
                    n = "closed" === e._sorcerer.readyState;
                if (!t && !n)
                    for (const r in e._streams) e._streams[r].length > 0 && e._loadSegmentsForType(r)
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n._loadSegmentsForType = function(e) {
        try {
            const t = this;
            return uc(t._videoReady, (function() {
                if (!t._sorcerer.allowSegmentRequests) return;
                const {
                    index: n,
                    reasonForSwitch: r
                } = t._getStream(e);
                let i;
                return hc((function() {
                    if (n >= 0 && n !== t.sorcerer[e].activeStreamIndex) return i = n > t.sorcerer[e].activeStreamIndex, t._switching[e] = !0, uc(t._manifestLoader.switchTo(e, n), (function() {
                        let i = {
                            reasonForSwitch: r
                        };
                        t.sorcerer[e].switchTo(n, !0, i).then((() => {
                            t._switching[e] = !1
                        })).catch(console.error)
                    }))
                }), (function() {
                    return uc(O(0), (function() {
                        const n = t.lowLatencyMode && void 0 !== i,
                            r = t._sorcerer[e].activeStreamIndex,
                            o = t._getCurrentStream(e, r),
                            s = t._abr.getSegmentsToLoad(n, e, o),
                            a = t._getSegmentTimeoutMs();
                        s.forEach((n => {
                            const i = t._key(n),
                                s = {
                                    type: e,
                                    stream: r,
                                    segment: n.segment,
                                    part: n.part
                                },
                                u = "video" === e && !n.hint;
                            let c = a;
                            if (n.hint && t._playInitiated && n.start > t.currentTime) {
                                const e = 1e3 * (n.start - t.currentTime);
                                c = Math.min(mc, e + a)
                            }
                            const l = o.avg_bitrate / 8 * n.duration,
                                d = t.sorcerer[e].streams[r],
                                h = t._preventExpiredSegmentUsage(n);
                            d.addSegment(h, {
                                identifier: s,
                                includeWithBandwidthChecks: u,
                                priority: n.programDateTime,
                                excludeConnectTime: t.lowLatencyMode,
                                timeout: t._timeoutTest || t.lowLatencyMode ? c : mc,
                                size: t._timeoutTest || t.lowLatencyMode ? l : void 0
                            }).catch((e => {
                                e instanceof ss || e instanceof Ie || t._clearSegment(s)
                            })), t._segmentsAdded[i] = s
                        }))
                    }))
                }))
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n._preventExpiredSegmentUsage = function(e) {
        var t;
        let n = null == e ? void 0 : e.url;
        const r = null == (t = this._manifestLoader) ? void 0 : t.baseUrl;
        return r && n && !n.startsWith(r) && (n = `${r}${e.uri}`), n
    }, n._getStream = function(e, t = !1) {
        var n;
        let r;
        if (this._switching[e]) return {
            index: -1,
            reasonForSwitch: null
        };
        if ("subtitles" === e) return r = this._manifestLoader.activeStream("video"), {
            index: r.subtitles[r.currentRenditions.subtitles].index,
            reasonForSwitch: null
        };
        if ("audio" === e) return r = this._manifestLoader.activeStream("video"), {
            index: r.audio[r.currentRenditions.audio].index,
            reasonForSwitch: null
        };
        if (!t && ve(this._timeSinceLastStreamSwitchCheck) < this._STREAM_SWITCH_CHECK_INTERVAL) return {
            index: this._lastStreamIndex,
            reasonForSwitch: null
        };
        this._timeSinceLastStreamSwitchCheck = pe();
        const i = null == (n = this.video) || null == (n = n.metadata) ? void 0 : n.percentShown,
            o = this._abr.filterStreams(this._streams.video, this._video.clientWidth, this._video.clientHeight, i);
        if (0 === o.length) return {
            index: this._lastStreamIndex,
            reasonForSwitch: null
        };
        const {
            index: s,
            reasonForSwitch: a
        } = this._abr.optimalStream(o, this._lastStreamIndex), u = o[s], c = this._streams.video.indexOf(u);
        if (c >= 0 && (t || c !== this._lastStreamIndex)) {
            if (c > this._lastStreamIndex && ve(this._timeSinceLastDownShift) < this._DOWN_SHIFT_CHECK_INTERVAL) return {
                index: this._lastStreamIndex,
                reasonForSwitch: a
            };
            c < this._lastStreamIndex && (this._timeSinceLastDownShift = pe());
            const e = {
                index: c,
                streams: this._streams.video
            };
            return this.fire(xi.STREAM_TARGET_CHANGE, e), this._lastStreamIndex = c, {
                index: c,
                reasonForSwitch: a
            }
        }
        return {
            index: this._lastStreamIndex,
            reasonForSwitch: a
        }
    }, n.getCurrentStream = function(e = "video") {
        return this._getCurrentStream(e)
    }, n._getCurrentStream = function(e = "video", t = 0) {
        return void 0 !== this._sorcerer && null !== this._sorcerer && (t = this._sorcerer[e].activeStreamIndex), this._streams[e][t]
    }, n._checkForPlaybackStall = function() {
        if (this._video.currentTime === this._lastStallCurrentTime && pe() - this._lastStallCheckTime >= 1e3 && this._shouldBeMakingProgress()) {
            const e = `Jumping forward 0.1s because of stall at time of ${this._video.currentTime}`;
            this.fire(Ui.STALL_JUMP, {
                msg: e
            }), this._video.currentTime += .1
        }
        this._lastStallCurrentTime = this._video.currentTime, this._lastStallCheckTime = pe()
    }, n._shouldBeMakingProgress = function() {
        return this._video.readyState !== this._video.HAVE_NOTHING && !!this._video.buffered.length && !this._video.paused && this._hasContentFor(this._video.buffered, this._video.currentTime)
    }, n._hasContentFor = function(e, t) {
        for (let n = 0; n < e.length; n++)
            if (!(t < e.start(n) - .1 || t > e.end(n) - .5)) return !0;
        return !1
    }, n._checkForPlaybackGap = function() {
        const e = this.buffered;
        if (!e.length) return;
        const t = e.length,
            n = this._video.currentTime;
        let r, i, o, s;
        try {
            r = function(e, t) {
                if (!e || !e.length) return null;
                if (1 === e.length && e.end(0) - e.start(0) < 1e-6) return null;
                let n;
                for (let r = 0; r < e.length; r++)
                    if (e.start(r) > t && (0 === r || e.end(r - 1) - t <= .5)) {
                        n = r;
                        break
                    }
                return n >= 0 ? n : null
            }(e, n)
        } catch (Np) {
            throw DOMException, Np
        }
        if (null === r) return;
        if (this._video.readyState === this._video.HAVE_NOTHING) return;
        if (this._video.paused) return;
        if (t <= r) return;
        try {
            i = e.start(r), o = e.end(t - 1)
        } catch (Np) {
            throw DOMException, Np
        }
        const a = i - n,
            u = o - i,
            c = this.lowLatencyMode ? 1 : 2;
        if (u > 0 && u <= this.segmentLength * c) return s = `Preventing jump too close to buffered end time. Would have jumped to: ${i}. Last buffered end time ${o}.`, void this.fire(Ui.BUFFER_GAP_JUMP_PREVENT, {
            msg: s
        });
        0 === r ? (s = `Jumping forward ${a} seconds because of gap before start time of ${i}`, this.fire(Ui.BUFFER_GAP_JUMP, {
            msg: s
        })) : (s = `Jumping forward ${a} seconds because of gap starting at ${e.end(r-1)} and ending at ${i}`, this.fire(Ui.BUFFER_GAP_JUMP, {
            msg: s
        })), this._video.currentTime = i + .1
    }, n._atDurationEnd = function() {
        const e = this.buffered;
        return !!(e && e.length && this._video.currentTime + _c > e.end(e.length - 1))
    }, n.setVideoSrc = function(e) {
        try {
            const t = this;
            return uc(t._startPreload(t._preload), (function() {
                return uc(t._loadManifest(e), (function() {
                    return hc((function() {
                        if (t.sorcerer.isInstanceofManagedMediaSource(t.sorcerer.mediaSource)) {
                            const e = document.createElement("source");
                            e.type = "video/mp4", e.src = URL.createObjectURL(t.sorcerer.mediaSource), t._video.appendChild(e);
                            let {
                                src: n,
                                mime: r
                            } = t._telecineVideo.externalDisplayFiles.AirPlay;
                            const i = document.createElement("source");
                            return i.type = r, uc(Zi(n), (function(e) {
                                i.src = e, t._video.appendChild(i)
                            }))
                        }
                        t._video.src = URL.createObjectURL(t.sorcerer.mediaSource)
                    }), (function() {
                        t._videoReady.resolve()
                    }))
                }))
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n._startPreload = function(e) {
        try {
            const t = this;
            return t._preloadReady = de(), "none" === e && t.paused || t._preloadReady.resolve(), uc(t._preloadReady)
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, n.getBitrateAtTime = function(e, t = "video", n = "average") {
        if (!this._sorcerer) return 0;
        const r = this._sorcerer.streamIndexAtTime(e, t),
            i = this._streams[t][r];
        var o;
        return i ? null !== (o = i["average" === n ? "avg_bitrate" : "bitrate"]) && void 0 !== o ? o : i.bitrate : 0
    }, n.onprogress = function() {
        this._checkForPlaybackGap()
    }, n.ondurationchange = function() {
        this._checkForPlaybackGap()
    }, n.ontimeupdate = function() {
        if (!this._sorcerer) return;
        if (e.prototype.ontimeupdate.call(this), null !== this._timeToSeekTo) return;
        this.atLiveTail = this._isNearLiveTail(this._video.currentTime), this._shouldSnapToLiveEdge(this._video.currentTime) ? this.atLiveEdge = !0 : (this._video.playbackRate < 1 || this._hasDriftedBehindLiveEdge()) && (this.atLiveEdge = !1), this.fire(xi.DROPPED_FRAMES, this._sorcerer.getDroppedFrameTotal());
        const t = this._getCurrentStream();
        if (t) {
            const e = {
                speed: this._abr.getCurrentSpeed(),
                bitrate: t.avg_bitrate,
                speeds: this._sorcerer.getResponseSpeeds()
            };
            this.fire(xi.BANDWIDTH, e)
        }!this._isOnline && this._atDurationEnd() && this.fire(Ui.STREAM_OFFLINE), !this.lowLatencyMode && ve(this._timeSinceLastStreamSwitchCheck) > this._STREAM_SWITCH_CHECK_INTERVAL && this._loadSegments()
    }, n._shouldSnapToLiveEdge = function(e) {
        return e >= this.liveEdgeTime - 1 * this.segmentLength
    }, n._hasDriftedBehindLiveEdge = function(e) {
        return e >= this.liveEdgeTime - 2 * this.segmentLength
    }, n._isNearLiveTail = function(e) {
        return e <= this.liveTailTime + 2 * this.segmentLength
    }, n._getSeekReadyPromiseForTime = function(e = this._timeToSeekTo) {
        return new Promise((t => {
            this._abr.canPlayFromTimeInStream(e, this._getCurrentStream()) ? t(e) : this._resolveSeek = t
        })).then((e => (this._timeToSeekTo = null, this._seekInProgressPromise = null, this._video.currentTime = e, new Promise(((e, t) => {
            this._lastSeekReject = t;
            const n = () => {
                e(this._video.currentTime), this._video.removeEventListener("seeked", n)
            };
            this._video.addEventListener("seeked", n)
        })))))
    }, n.seekToTime = function(e) {
        if (!this.eventHasDVREnabled || e === this.currentTime) return Promise.resolve();
        let t;
        if (null === this._timeToSeekTo || (this._lastSeekReject && (this._lastSeekReject(), this._lastSeekReject = null), this._seekInProgressPromise = null, this._timeToSeekTo = null, this._resolveSeek = null), this._timeToSeekTo = e, !this._abr.canPlayFromTimeInStream(e, this._getCurrentStream())) try {
            this._segmentsAdded = {};
            for (const e in this._streams)
                if (this._streams[e].length > 0) {
                    const t = this.sorcerer[e].activeStreamIndex;
                    this.sorcerer[e].streams[t].abort()
                }
            t = this._sorcerer.removeBuffer()
        } catch (n) {}
        return this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e), Promise.all([this._videoReady, t]).then((() => (this._loadSegments(), this._seekInProgressPromise))).catch((e => {}))
    }, n.onpause = function() {
        var t;
        e.prototype.onpause.call(this), this.eventHasDVREnabled ? this.atLiveEdge = !1 : (null == (t = this._manifestLoader) || t.stop(), this._sorcerer && (this._sorcerer.abortFetches(), this._segmentsAdded = {}, this._sorcerer.removeBuffer().catch((() => {}))))
    }, n.onplay = function() {
        this.eventHasDVREnabled || this._playInitiated && this._refreshManifest()
    }, n.pause = function() {
        this.eventHasDVREnabled && (this.atLiveEdge = !1), e.prototype.pause.call(this)
    }, n.play = function() {
        const t = this;
        return e.prototype.play.call(this, fc((function() {
            return t._preloadReady.resolve(), null !== t._timeToSeekTo ? Promise.resolve(t._seekInProgressPromise) : hc((function() {
                if (t._playInitiated && !t.eventHasDVREnabled) return t._segmentsAdded = {}, lc(cc((function() {
                    return pc(t._sorcerer.removeBuffer())
                }), (function(e) {})), (function() {
                    return pc(t._refreshManifest())
                }))
            }), (function() {
                return uc(t._videoReady, (function() {
                    return t._loadSegments(), uc(t._bufferAvailable(), (function() {
                        const e = Math.max(t._latencyController.liveSyncPosition, t._video.buffered.start(0));
                        return t._atLiveEdge ? t.currentTime = e : t.currentTime = t._video.currentTime, t._playInitiated = !0, Promise.resolve()
                    }))
                }))
            }))
        })))
    }, n._bufferAvailable = function() {
        return new Promise((e => {
            const t = () => {
                this.buffered.length && (this._sorcerer.off("appendbufferend", t), this.preloadStreamIndex = null, e())
            };
            this._sorcerer.on("appendbufferend", t), t()
        }))
    }, n._getSegmentTimeoutMs = function() {
        return this._abr.getSegmentRelativeTimeout(this._streams.video, this._getCurrentStream("video"), 1e3 * this.segmentLength)
    }, n._loadMediaManifest = function() {
        return Promise.resolve().then((function() {
            return Io
        }))
    }, n.setCaptionsShouldDisplay = function(e) {
        this._captionsVisible = e
    }, n.setCaptionsShouldLoad = function(e) {
        this._captionsLoading = e
    }, l(t, [{
        key: "preload",
        get: function() {
            return this._preload
        },
        set: function(e) {
            this._preload !== e && "none" !== e && this._preloadReady.resolve(), this._preload = e
        }
    }, {
        key: "latency",
        get: function() {
            var e;
            return null == (e = this._latencyController) ? void 0 : e.latency
        }
    }, {
        key: "lowLatencyMode",
        get: function() {
            return this._lowLatencyMode
        },
        set: function(e) {
            this._lowLatencyMode = e, this._manifestLoader && (this._manifestLoader.lowLatencyMode = e)
        }
    }, {
        key: "downloadSpeed",
        get: function() {
            return this._abr.getCurrentSpeed()
        }
    }, {
        key: "restrictedStreamIndexes",
        get: function() {
            return this._restrictedStreamIndexes
        },
        set: function(e) {
            this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e, this._abr.lock(this._restrictedStreamIndexes))
        }
    }, {
        key: "preloadStreamIndex",
        get: function() {
            return this._preloadStreamIndex
        },
        set: function(e) {
            this._preloadStreamIndex = e;
            const t = null !== e ? [this._preloadStreamIndex] : this._restrictedStreamIndexes;
            this._abr.lock(t)
        }
    }, {
        key: "videoWidth",
        get: function() {
            return this._stream ? this._stream.width : this._video.videoWidth
        }
    }, {
        key: "videoHeight",
        get: function() {
            return this._stream ? this._stream.height : this._video.videoHeight
        }
    }, {
        key: "currentTime",
        get: function() {
            return null !== this._timeToSeekTo ? this._timeToSeekTo : this._video.currentTime
        },
        set: function(e) {
            this._video.readyState <= this._video.HAVE_NOTHING || (this.eventHasDVREnabled && this._playInitiated ? this._shouldSnapToLiveEdge(e) ? (this.atLiveEdge = !0, this.seekToTime(this.liveEdgeTime)) : (this.atLiveEdge = !1, this.seekToTime(Math.max(e, this.liveTailTime))) : this._video.currentTime = e)
        }
    }, {
        key: "liveEdgeTime",
        get: function() {
            return this._latencyController.liveSyncPosition
        }
    }, {
        key: "atLiveEdge",
        get: function() {
            return this._atLiveEdge
        },
        set: function(e) {
            this.atLiveEdge !== e && this.eventHasDVREnabled && (this._atLiveEdge = e, this._video.playbackRate > 1 && e && (this._video.playbackRate = 1), this.lowLatencyMode = !!this.eventIsLowLatency && e, this.bufferTarget = e ? this.defaultBufferTarget : 18, e && (this.presentationDelay = this.defaultPresentationDelay))
        }
    }, {
        key: "atLiveTail",
        get: function() {
            return this._atLiveTail
        },
        set: function(e) {
            this.atLiveTail !== e && this.eventHasDVREnabled && (this._atLiveTail = e, this._video.playbackRate < 1 && e && (this._video.playbackRate = 1))
        }
    }, {
        key: "liveTailTime",
        get: function() {
            var e, t;
            const n = null !== (e = null == (t = this._getCurrentStream()) || null == (t = t.segments) || null == (t = t[0]) ? void 0 : t.start) && void 0 !== e ? e : 0;
            return Math.max(n, 0)
        }
    }, {
        key: "ended",
        get: function() {
            return this._hasLiveEventEnded
        }
    }, {
        key: "isLowerProfileAvailable",
        get: function() {
            return this._sorcerer ? this._sorcerer.video.activeStreamIndex > 0 : null
        }
    }, {
        key: "sorcerer",
        get: function() {
            return this._sorcerer
        }
    }, {
        key: "segmentLength",
        get: function() {
            var e, t;
            return this.lowLatencyMode && (null == (e = this._manifestLoader) || null == (e = e.activeStream("video")) ? void 0 : e.partTargetDuration) || (null == (t = this._manifestLoader) || null == (t = t.activeStream("video")) ? void 0 : t.targetDuration)
        }
    }], [{
        key: "displayName",
        get: function() {
            return "HLSLiveScanner"
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return ["application/x-mpegURL"]
        }
    }])
}(rs);

function gc(e) {
    return e.forEach(((e, t) => {
        e.index = t
    })), e
}
const yc = document.createElement("video"),
    Ec = {
        "application/x-mpegURL": "application/x-mpegURL"
    };
let Tc = function(e) {
        function t(t, n = {}) {
            var r, i;
            return (i = e.call(this, t, n) || this)._apiManifestUrl = null, i._playInitiated = !1, i._atLiveEdge = !0, i._atLiveTail = !1, i._secondsBehindPlaylistStart = 0, i._playlistOffsetSet = !1, i.reset(), i.dvrEnabled = null !== (r = n.dvrEnabled) && void 0 !== r && r, i.getLiveEventStartTimeEpoch = n.getLiveEventStartTimeEpoch, window.addEventListener("online", (() => {
                i.play()
            })), i
        }
        p(t, e), t.supported = function() {
            return t.supportedVideoTypes.length > 0
        };
        var n = t.prototype;
        return n.deactivate = function() {
            e.prototype.deactivate.call(this), this.reset()
        }, n.reset = function() {
            this._manifestRefreshTimeout && clearTimeout(this._manifestRefreshTimeout), this._onReady = null, this._manifestRefreshTimeout = null, this._isOnline = !1, this._hasLiveEventEnded = !1, this._hlsAvailabilityCheckTimeout = null, this._bufferedIndex = 0, this._manifestRefreshTimeout = null, this._secondsBehindPlaylistStart = 0, this._playlistOffsetSet = !1, this._abr = new Zu(this, this._options), this._restrictedStreamIndexes = []
        }, n.endLive = function() {
            this._isOnline = !1, this._hasLiveEventEnded = !0, clearTimeout(this._manifestRefreshTimeout), this._video.pause(),
                function(e) {
                    setTimeout(e, 0)
                }((() => {
                    e.prototype.deactivate.call(this), this.fire(Li.ENDED)
                }))
        }, n._setUpRefreshTimer = function() {
            const e = Ee(this.video.metadata.playlistRefreshUrl.split("?")[1]);
            e.expires && (this._manifestRefreshTimeout = setTimeout((() => {
                this._refreshLiveApiPlaylistUrl()
            }), 1e3 * (e.expires - 10)))
        }, n._refreshLiveApiPlaylistUrl = function(e = 0) {
            const t = this.video.metadata.playlistRefreshUrl;
            return Ke(t).json().then((n => {
                if (!("url" in n)) throw new Error(`Error parsing 'url' key from player live API refresh endpoint: ${t} ${n}`);
                return this._loadNativeHlsManifest(n.url.hls).then((() => (this.play(), this._checkHlsAvailability(5e3), null))).catch((() => this._refreshLiveApiPlaylistUrl(++e)))
            })).catch((() => {
                if (e >= 3) throw new Error(`Manifest failed to load after ${e} attempts.`);
                return ++e, this._refreshLiveApiPlaylistUrl(e)
            }))
        }, n._setUpLiveEventListeners = function() {
            this.on(Ui.STREAM_OFFLINE, (() => {
                this._isOnline = !1
            }))
        }, n._setUpNativeHls = function(e) {
            return this._setUpLiveEventListeners(), this._isOnline = !0, this.fire(Ui.STREAM_ONLINE), this._checkHlsAvailability(5e3), Promise.resolve(e)
        }, n._loadNativeHlsManifest = function(e) {
            return this._apiManifestUrl = e, /json=1/.test(e) ? Ke(e).json().then((e => {
                if (!("url" in e)) throw new Error(`Error parsing 'url' key from Live API manifest endpoint: ${this._apiManifestUrl} ${e}`);
                this._video.src = this._getUrlWithMinSecondsParam(e.url), this._setUpRefreshTimer()
            })).catch((e => {
                const t = this.video.metadata.playlistRefreshUrl;
                return Ke(t).json().then((e => {
                    if (!("url" in e)) throw new Error(`Error parsing 'url' key from player live API refresh endpoint: ${t} ${e}`);
                    this._apiManifestUrl = e.url.ios, this._video.src = this._getUrlWithMinSecondsParam(e.url.ios), this._setUpRefreshTimer()
                }))
            })) : (this._video.src = this._getUrlWithMinSecondsParam(e), this._setUpRefreshTimer(), Promise.resolve())
        }, n._getUrlWithMinSecondsParam = function(e) {
            if (this.dvrEnabled) return e;
            const t = new URL(e);
            return t.searchParams.set("min_seconds", "30"), t.toString()
        }, n._loadTextTracks = function() {
            const e = this._video.textTracks;
            if (null != e && e.length)
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    this._loadTextTrack(n)
                }
        }, n._loadTextTrack = function(e) {
            if (e && !this._captionsTrack) {
                const {
                    label: t,
                    kind: n,
                    language: r,
                    id: i
                } = e, o = new oc({
                    label: t,
                    kind: n,
                    language: r,
                    id: i
                }, this._telecineVideo);
                this._telecineVideo.textTracks = Do([o]), this._addTextTrackListeners(o, e), this.fire(xi.TEXT_TRACKS_AVAILABLE), this._captionsTrack = e
            }
        }, n.setModeForTrack = function(e, t) {
            return this._captionsTrack && this._captionsTrack.mode !== t && (this._captionsTrack.mode = t), this
        }, n.getActiveCuesForTrack = function(e) {
            return this._captionsTrack && "disabled" !== this._captionsTrack.mode ? this._captionsTrack.activeCues : []
        }, n.addTextTrack = function(e) {
            return this._captionsTrack || this._loadTextTracks(), this._captionsTrack
        }, n._checkHlsAvailability = function(e) {
            "number" == typeof ie.iOS && ie.iOS < 9 || this._hlsAvailabilityCheckTimeout || (this._hlsAvailabilityCheckTimeout = setTimeout((() => {
                if (!this._isOnline) return;
                const e = new XMLHttpRequest;
                e.onload = () => {
                    410 !== e.status ? (200 !== e.status && this.fire(Ui.STREAM_OFFLINE), e.response.match(/^#EXTM3U\n#EXT-X-VERSION:3\n$/) && this.fire(Ui.STREAM_OFFLINE)) : this._refreshLiveApiPlaylistUrl()
                }, e.onerror = () => {
                    this.fire(Ui.STREAM_OFFLINE)
                }, /json=1/.test(this._apiManifestUrl) ? Ke(this._apiManifestUrl).json().then((t => {
                    "url" in t || this.fire(Ui.STREAM_OFFLINE), e.open("GET", t.url), e.send()
                })).catch((() => {
                    e.open("GET", this._apiManifestUrl), e.send()
                })) : (e.open("GET", this._apiManifestUrl), e.send())
            }), e))
        }, n._shouldSnapToLiveEdge = function(e) {
            return e >= this.liveEdgeTime - 3
        }, n._hasDriftedBehindLiveEdge = function(e) {
            return e >= this.liveEdgeTime - 6
        }, n._isNearLiveTail = function(e) {
            return e <= this.liveTailTime + 6
        }, n.setVideoSrc = function(e) {
            this._onReady = this._setUpNativeHls(e).then((() => (this._apiManifestUrl = e, this._loadNativeHlsManifest(e))))
        }, n.ontimeupdate = function() {
            e.prototype.ontimeupdate.call(this), this.atLiveTail = this._isNearLiveTail(this._video.currentTime), this._shouldSnapToLiveEdge(this._video.currentTime) ? this.atLiveEdge = !0 : (this._video.playbackRate < 1 || this._hasDriftedBehindLiveEdge()) && (this.atLiveEdge = !1)
        }, n.onplaying = function() {
            this._playInitiated = !0
        }, n.oncanplay = function() {
            if (!this._playInitiated) {
                const e = this._video.seekable.length;
                e > 0 && (this._video.currentTime = this._video.seekable.end(e - 1))
            }
            if (!this._playlistOffsetSet) {
                this._playlistOffsetSet = !0;
                const e = this._video.getStartDate().getTime() / 1e3;
                this._secondsBehindPlaylistStart = e - this.getLiveEventStartTimeEpoch()
            }
            this._loadTextTracks()
        }, n.onprogress = function() {
            this._hlsAvailabilityCheckTimeout && (clearTimeout(this._hlsAvailabilityCheckTimeout), this._hlsAvailabilityCheckTimeout = null)
        }, n.onstalled = function() {
            this._checkHlsAvailability(1e4)
        }, n.onerror = function() {
            return this._video.error.code === this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? (Ke(this._apiManifestUrl).then((() => {
                e.prototype.onerror.call(this)
            })).catch((t => {
                t instanceof ke ? this.fire(Li.ERROR, new Uo("MediaNetworkError", "A network error ocurred while fetching the media.")) : e.prototype.onerror.call(this)
            })), !1) : e.prototype.onerror.call(this)
        }, n.onwaiting = function() {
            this._checkHlsAvailability(1e4)
        }, n.pause = function() {
            this.dvrEnabled && (this.atLiveEdge = !1), e.prototype.pause.call(this)
        }, n.play = function() {
            return e.prototype.play.call(this, (() => this._onReady))
        }, l(t, [{
            key: "currentTime",
            get: function() {
                return this._secondsBehindPlaylistStart + this._video.currentTime
            },
            set: function(e) {
                if (this.liveEdgeTime) {
                    const t = e >= this.liveEdgeTime - 3;
                    this.atLiveEdge = t
                }
                this._video.currentTime = e - this._secondsBehindPlaylistStart
            }
        }, {
            key: "liveEdgeTime",
            get: function() {
                const e = this._video.seekable.length;
                return e > 0 ? this._secondsBehindPlaylistStart + this._video.seekable.end(e - 1) : 0
            }
        }, {
            key: "atLiveEdge",
            get: function() {
                return this._atLiveEdge
            },
            set: function(e) {
                this.dvrEnabled && (this._atLiveEdge = e, this._video.playbackRate > 1 && e && (this._video.playbackRate = 1))
            }
        }, {
            key: "atLiveTail",
            get: function() {
                return this._atLiveTail
            },
            set: function(e) {
                this.dvrEnabled && (this._atLiveTail = e, this._video.playbackRate < 1 && e && (this._video.playbackRate = 1))
            }
        }, {
            key: "liveTailTime",
            get: function() {
                return this._video.seekable.length > 0 ? this._secondsBehindPlaylistStart + this._video.seekable.start(0) : 0
            }
        }, {
            key: "ended",
            get: function() {
                return this._hasLiveEventEnded
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return e.prototype.supportsPlaybackRate && this.dvrEnabled
            }
        }], [{
            key: "displayName",
            get: function() {
                return "NativeHLSLiveScanner"
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                const e = [];
                if ("function" != typeof yc.canPlayType) return e;
                for (const t in Ec) {
                    const n = Ec[t];
                    yc.canPlayType(n).replace(/^no$/, "") && e.push(t)
                }
                return e
            }
        }])
    }(rs),
    Sc = function() {
        function e(e, t = {}) {
            this._telecine = e, this._element = e._element, this._options = t
        }
        var t = e.prototype;
        return t.activate = function() {
            throw new Uo("NotImplemented", "The effect must implement the activate method.")
        }, t.deactivate = function() {
            throw new Uo("NotImplemented", "The effect must implement the deactivate method.")
        }, l(e, null, [{
            key: "displayName",
            get: function() {
                return "Effect"
            }
        }, {
            key: "supported",
            get: function() {
                return !1
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return []
            }
        }])
    }();
const bc = new WeakMap,
    Ac = new WeakMap;
let wc = function() {
        return l((function({
            src: e,
            mime: t,
            id: n = Ae(),
            priority: r = 0,
            metadata: i = {}
        }, o) {
            if (!e) throw new TypeError("Must provide a src for the file.");
            if (!t) throw new TypeError("Must provide a mime type for the file.");
            Object.defineProperties(this, {
                mime: {
                    value: t,
                    enumerable: !0
                },
                id: {
                    value: `${n}`,
                    enumerable: !0
                },
                metadata: {
                    value: i,
                    enumerable: !0
                }
            }), this.video = o, this.priority = r, this.src = e
        }), [{
            key: "priority",
            get: function() {
                return bc.get(this)
            },
            set: function(e) {
                if (!("number" == typeof(e = parseInt(e, 10)) && isFinite(e) && Math.floor(e) === e && e >= 0)) throw new TypeError("The file priority must be an integer greater than or equal to 0.");
                bc.set(this, e)
            }
        }, {
            key: "src",
            get: function() {
                return Ac.get(this)
            },
            set: function(e) {
                Ac.set(this, e), this.video.fire(xi.FILE_SRC_UPDATE, this)
            }
        }, {
            key: "restrictedStreamIndexes",
            get: function() {
                if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
                return this.video.currentScanner.restrictedStreamIndexes
            },
            set: function(e) {
                if (!Array.isArray(e)) throw new TypeError("Indexes must be an array.");
                if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
                this.video.currentScanner.restrictedStreamIndexes = e
            }
        }])
    }(),
    Ic = function(e) {
        function t({
            enabled: t = !1,
            id: n = Ae(),
            kind: r = "",
            label: i = "",
            language: o = "",
            provenance: s = ""
        }, a) {
            var u;
            return (u = e.call(this) || this)._enabled = t, Object.defineProperties(u, {
                kind: {
                    value: r,
                    enumerable: !0
                },
                label: {
                    value: i,
                    enumerable: !0
                },
                language: {
                    value: o,
                    enumerable: !0
                },
                id: {
                    value: `${n}`,
                    enumerable: !0
                },
                provenance: {
                    value: s,
                    enumerable: !0
                }
            }), u.video = a, u
        }
        return p(t, e), t.prototype.dispatchEvent = function(e) {
            this.fire(e, {
                target: this
            })
        }, l(t, [{
            key: "enabled",
            get: function() {
                return this._enabled
            },
            set: function(e) {
                this._enabled = e
            }
        }, {
            key: "active",
            get: function() {
                return this._enabled
            }
        }])
    }(wn);
const Rc = "default";
let kc = function() {
    function e() {
        this._cdmList = {}, this._preferredKeySystems = {}, this._licenseTokenUrls = {}, this._licenseUrls = {}, this._certificateUrls = {}, this._keySessions = {}, this._keyChainState = Rc, this._keyTypes = {
            KEYCHAIN_DEFAULT: Rc,
            KEYCHAIN_SD_FALLBACK: "sd-fallback"
        }
    }
    var t = e.prototype;
    return t.getAllKeySessions = function() {
        return Object.values(this._keySessions) || []
    }, t.getCdms = function(e) {
        return this._cdmList[e]
    }, t.getAllPreferredKeySystems = function() {
        return this._preferredKeySystems
    }, t.addCdms = function(e, t) {
        this._cdmList[t] = e
    }, t.addKeySession = function(e, t) {
        this._keySessions[t] = e
    }, t.addLicenseTokenUrl = function(e, t) {
        this._licenseTokenUrls[t] = e
    }, t.addLicenseUrl = function(e, t) {
        this._licenseUrls[t] = e
    }, t.addPreferredKeySystem = function(e, t) {
        this._preferredKeySystems[t] = e
    }, t.closeAllKeySessions = function() {
        for (let e in this._keySessions) this._keySessions[e] && this._keySessions[e].sessionId && this._keySessions[e].close()
    }, l(e, [{
        key: "state",
        get: function() {
            return this._keyChainState
        },
        set: function(e) {
            Object.values(this._keyTypes).indexOf(e) < 0 || (this._keyChainState = e)
        }
    }, {
        key: "activeKeySession",
        get: function() {
            return this._keySessions[this._keyChainState]
        }
    }, {
        key: "activeKeySystem",
        get: function() {
            return this._preferredKeySystems[this._keyChainState]
        }
    }, {
        key: "keyTypes",
        get: function() {
            return this._keyTypes
        }
    }, {
        key: "activeLicenseTokenUrl",
        get: function() {
            return this._licenseTokenUrls[this._keyChainState]
        }
    }, {
        key: "activeLicenseUrl",
        get: function() {
            return this._licenseUrls[this._keyChainState]
        }
    }])
}();
const Pc = "com.apple.fps.1_0",
    Dc = "com.microsoft.playready";

function Oc(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
let Lc = function() {
    function e(e, t, n = {}) {
        this.logPrefix = "DrmHandler 🔒:", this._hasFallbackAssets = !!e.fallback_asset, this._useHls = t, this._drmLaUrlParams = n, this._fallbackCallback = () => null, this._currentTime = 0, this._firstLaUrlRequest = !0, this._hasFallbackSourceUpdated = !1, this._encryptedEventName = null, this._boundGenerateRequest = this._generateRequest.bind(this), this._boundOnKeyStatus = this._onKeyStatus.bind(this), this._boundUpdateTimeRef = this.updateTimeRef.bind(this), this._keyChain = new kc, this._keyTypes = this._keyChain.keyTypes, this._keyChain.state = this._keyTypes.KEYCHAIN_DEFAULT, this.updateLAUrls(e)
    }
    var t = e.prototype;
    return t.init = function(e, t = {}, n = {}) {
        try {
            let r = !1;
            const i = this;
            return i._video = e._video, i._scanner = e, window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration || window.WebKitMediaKeys ? (n = i._initDataToArray(n), Oc(Cc((function() {
                if (i._keyChain.state === i._keyTypes.KEYCHAIN_SD_FALLBACK) return i._scanner.once("seeking", i._boundUpdateTimeRef), i._hasFallbackSourceUpdated = !0, Oc(i.waitForPlay(), (function() {
                    const e = i.setUpKeySystem(t, n, i._keyTypes.KEYCHAIN_SD_FALLBACK).then((() => {
                        i._scanner.currentTime = i._currentTime, i._scanner.play()
                    }));
                    return r = !0, e
                }))
            }), (function(e) {
                if (r) return e;
                const o = i._keyChain.getCdms(i._keyTypes.KEYCHAIN_DEFAULT);
                return o ? Oc(Wu(o, i._useHls, t), (function(e) {
                    let r = !1;
                    const o = i.getPreferredMediaKeySystem(e);
                    return o && o.mediaKeys ? Cc((function() {
                        if (i._hasFallbackAssets) {
                            var e;
                            const t = null == (e = o.mediaKeys) ? void 0 : e.getStatusForPolicy;
                            return Oc(t ? o.mediaKeys.getStatusForPolicy({
                                minHdcpVersion: "1.0"
                            }) : "usable", (function(e) {
                                if ("output-restricted" === e) {
                                    const e = i._fallBackToSD();
                                    return r = !0, e
                                }
                            }), !t)
                        }
                    }), (function(e) {
                        return r ? e : Oc(i.waitForPlay(), (function() {
                            return i.setUpKeySystem(t, n)
                        }))
                    })) : Promise.reject("No supported CDMs are found")
                })) : Promise.reject("No CDMs set for keyType: " + i._keyTypes.KEYCHAIN_DEFAULT)
            })))) : (i._scanner.fire(xi.EME_UNSUPPORTED), Promise.reject("Encrypted Media Extensions are not supported!"))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, t.updateTimeRef = function() {
        this._currentTime = this._scanner.currentTime
    }, t.updateLAUrls = function(e) {
        this._keyChain.addCdms(e.cdms, this._keyTypes.KEYCHAIN_DEFAULT), e.fallback_asset && this._keyChain.addCdms(e.fallback_cdms, this._keyTypes.KEYCHAIN_SD_FALLBACK)
    }, t.waitForPlay = function() {
        try {
            const e = this;
            return Oc(new Promise((t => {
                e._scanner.paused && !e._scanner.isPlayRequestActive ? e._scanner.once("play", (() => t())) : t()
            })))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, t._initDataToArray = function(e = {}) {
        if (void 0 === e || void 0 === e.inits) return e;
        const t = ai(e);
        for (var n = 0, r = Object.entries(t.inits); n < r.length; n++) {
            const [t, s] = r[n];
            for (var i = 0, o = Object.entries(s); i < o.length; i++) {
                const [t, n] = o[i];
                if (void 0 === n || void 0 === n.initData) return e;
                n.initData = Oo(n.initData)
            }
        }
        return t
    }, t.getPreferredMediaKeySystem = function(e) {
        let t = e.find((e => (e.name === Pc || e.name === Dc) && null !== e.mediaKeys));
        return t || (t = e.find((e => null !== e.mediaKeys))), t
    }, t.setUpKeySystem = function(e, t, n = this._keyTypes.KEYCHAIN_DEFAULT) {
        const r = this,
            i = this._keyChain.getCdms(n);
        return i ? Wu(i, this._useHls, e).then(function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (Np) {
                    return Promise.reject(Np)
                }
            }
        }((function(e) {
            const o = r.getPreferredMediaKeySystem(e);
            if (!o || !o.mediaKeys) throw r._scanner.fire(xi.EME_UNSUPPORTED), new Error("No supported CDMs are found.");
            r._keyChain.addPreferredKeySystem(o, n);
            const s = r._keyChain.activeKeySystem && function(e, t) {
                let n = null;
                return Object.keys(e).forEach((r => {
                    t.name === e[r].id && (n = e[r])
                })), n
            }(i, r._keyChain.activeKeySystem);
            if (!s) throw r._scanner.fire(xi.EME_UNSUPPORTED), new Error("No valid key system was found.");
            return Cc((function() {
                if (s.certificate) return function(e) {
                    return e && e.then ? e.then(Nc) : Promise.resolve()
                }(qu(s.certificate, o.mediaKeys))
            }), (function() {
                r._keyChain.addLicenseTokenUrl(s.license_url, n);
                const e = t && t.inits && t.inits[s.id];
                return e || r._addEncryptedHandler(s, n), r._setMediaKeys(n).then((() => {
                    const t = r._keyChain.state === n;
                    return e && t && r._boundGenerateRequest(e.cenc, n)
                }))
            }))
        }))) : Promise.reject("No CDMs set for keyType: " + n)
    }, t.destroy = function() {
        this._keyChain && this._keyChain.closeAllKeySessions(), this._video && this._video.removeEventListener(this._encryptedEventName, this._boundGenerateRequest)
    }, t._switchKeyChainState = function(e) {
        return new Promise((t => {
            var n;
            this._keyChain.state = e, null == (n = this._keyChain.activeKeySession) || n.addEventListener("message", (e => this._getLicense(e))), t()
        }))
    }, t._addEncryptedHandler = function(e, t) {
        this._encryptedEventName = "encrypted", this._keyChain.addLicenseUrl(e.license_url, t), this._useHls && (this._certificateUrl = e.certificate_url, this._encryptedEventName = "webkitneedkey"), this._video.addEventListener(this._encryptedEventName, this._boundGenerateRequest)
    }, t._setMediaKeys = function(e) {
        if (this._useHls) this._video.webkitSetMediaKeys(this._keyChain.activeKeySystem.mediaKeys);
        else {
            this._video.mediaKeys;
            const t = this._video.mediaKeys || this._keyChain.activeKeySystem.mediaKeys;
            if (this._keyChain.addKeySession(this._createSession(t), e), e === this._keyChain.state && this._keyChain.activeKeySession.addEventListener("message", (e => this._getLicense(e))), !this._video.mediaKeys) return this._video.setMediaKeys(this._keyChain.activeKeySystem.mediaKeys)
        }
        return Promise.resolve()
    }, t._createSession = function(e, t, n) {
        const r = t && n ? e.createSession(t, n) : e.createSession();
        if (!r) throw new Error("Could not create media key session");
        return r
    }, t._generateRequest = function(e, t) {
        t = t || this._keyChain.state;
        const n = new Error("A decryption key error was encountered");
        return this._keyChain.activeKeySystem.name === Pc ? (this._loadFairPlayCertificate(this._certificateUrl).then((r => {
            this._contentId = function(e) {
                const t = function(e) {
                        const t = new Uint16Array(e.buffer);
                        return String.fromCharCode.apply(null, t)
                    }(e),
                    n = document.createElement("a");
                return n.href = t, n.hostname
            }(e.initData);
            const i = function(e, t, n) {
                const r = new Uint8Array(function(e) {
                    const t = new ArrayBuffer(2 * e.length),
                        n = new Uint16Array(t);
                    for (let r = 0, i = e.length; r < i; r++) n[r] = e.charCodeAt(r);
                    return n
                }(t).buffer);
                let i = 0;
                const o = new ArrayBuffer(e.byteLength + 4 + r.byteLength + 4 + n.byteLength),
                    s = new DataView(o);
                new Uint8Array(o, i, e.byteLength).set(e), i += e.byteLength, s.setUint32(i, r.byteLength, !0), i += 4;
                const a = new Uint8Array(o, i, r.byteLength);
                return a.set(r), i += a.byteLength, s.setUint32(i, n.byteLength, !0), i += 4, new Uint8Array(o, i, n.byteLength).set(n), new Uint8Array(o, 0, o.byteLength)
            }(e.initData, this._contentId, r);
            return this._keyChain.addKeySession(this._createSession(this._keyChain.activeKeySystem.mediaKeys, "video/mp4", i), t), this._keyChain.activeKeySession.contentId = this._contentId, this._keyChain.activeKeySession.addEventListener("webkitkeymessage", (e => this._getLicense(e))), this._keyChain.activeKeySession.addEventListener("webkitkeyerror", (e => {
                throw n
            })), r
        })).catch((e => {
            this._scanner.fire(e.error, e.payload)
        })), !0) : !this._keyChain.activeKeySession.sessionId && !this._activeKeySession && (this._keyChain.activeKeySession.addEventListener("keystatuseschange", this._boundOnKeyStatus), this._activeKeySession = this._keyChain.activeKeySession.generateRequest(e.initDataType, e.initData).catch((() => {
            this._scanner.fire(xi.DRM_FAILURE)
        })), !0)
    }, t._onKeyStatus = function() {
        let e = !1;
        const t = Array.from(this._keyChain.activeKeySession.keyStatuses.values());
        if (t.forEach(((t, n) => {
                "expired" === t && (e = !0)
            })), t.length && t.every((e => "output-restricted" === e))) {
            if (this._hasFallbackAssets) return void this._fallBackToSD();
            this._scanner.fire(xi.DRM_OUTPUT_RESTRICTED)
        }
        e && this._keyChain.activeKeySession.close()
    }, t._getLicense = function(e) {
        return this._getLicenseUrl(this._keyChain.activeLicenseTokenUrl).then((t => new Promise(((n, r) => {
            this._keyChain.addLicenseUrl(t, this._keyChain.state), this._activeKeySession = null;
            const i = new XMLHttpRequest;
            i.keySession = e.target, i.open("POST", this._keyChain.activeLicenseUrl), i.responseType = "arraybuffer";
            let o = e.message;
            if (this._keyChain.activeKeySystem.name === Dc) {
                const t = function(e) {
                        const t = e,
                            n = String.fromCharCode.apply(null, new Uint16Array(t)),
                            r = (new DOMParser).parseFromString(n, "application/xml"),
                            i = {},
                            o = r.getElementsByTagName("HttpHeader");
                        for (let s = 0; s < o.length; ++s) {
                            const e = o[s].querySelector("name"),
                                t = o[s].querySelector("value");
                            e && t && (i[e.textContent] = t.textContent)
                        }
                        return [i, Oo(r.querySelector("Challenge").textContent)]
                    }(e.message),
                    n = t[0];
                Object.keys(n).forEach((e => {
                    i.setRequestHeader(e, n[e])
                })), o = t[1]
            }
            this._keyChain.activeKeySystem.name === Pc && (o = new Uint8Array(o), i.setRequestHeader("Content-type", "application/octet-stream")), i.onload = () => {
                if (403 !== i.status)
                    if (i.status >= 400) r(new Uo(xi.DRM_FAILURE));
                    else try {
                        this._scanner.fire(xi.DRM_AUTH_SUCCESS);
                        const e = new Uint8Array(i.response);
                        i.keySession.update(e), n()
                    } catch (Np) {
                        r(new Uo(xi.DRM_FAILURE, `Error updating key session: ${Np}`))
                    } else r(new Uo(xi.DRM_AUTH_FAILURE))
            }, i.onerror = r, i.send(o)
        })).catch((e => {
            this._scanner.fire(e.name, {
                text: e.message || "License request failed."
            })
        }))))
    }, t._getLicenseUrl = function(e) {
        const t = ((e, t) => {
            const {
                atid: n,
                dnt: r,
                context: i,
                leadUUID: o,
                playerLocation: s,
                firstLog: a,
                playbackRoute: u,
                referrer: c
            } = t;
            return Se(e, {
                atid: n,
                context: i,
                referrer: c,
                dnt: 1 === r ? r : void 0,
                first_log: a ? "1" : void 0,
                lead_uuid: o,
                player_location: s,
                playback_route: u
            }, !0)
        })(e, g(g({}, this._drmLaUrlParams), {}, {
            firstLog: this._firstLaUrlRequest
        }));
        return new Promise(((e, n) => {
            const r = new XMLHttpRequest;
            r.withCredentials = !0, r.open("GET", t), r.onload = () => {
                if (r.status >= 400) n(new Uo(xi.DRM_FAILURE));
                else try {
                    try {
                        const t = JSON.parse(r.response),
                            {
                                licenseAcquisitionUrl: n,
                                token: i
                            } = t;
                        if (!n && !i) throw new Error;
                        e(`${n}?ExpressPlayToken=${i}`)
                    } catch (t) {
                        e(r.response)
                    }
                } catch (Np) {
                    n(new Uo(xi.DRM_FAILURE, `Error retrieving License Acquisition URL (LA_URL): ${Np}`))
                }
            }, r.onerror = n, r.send(), this._firstLaUrlRequest = !1
        }))
    }, t._loadFairPlayCertificate = function(e) {
        return new Promise(((t, n) => {
            const r = new XMLHttpRequest;
            r.open("GET", e), r.responseType = "arraybuffer", r.setRequestHeader("Pragma", "no-cache"), r.setRequestHeader("Cache-Control", "max-age=0"), r.onload = () => {
                if (403 !== r.status)
                    if (r.status >= 400) n({
                        error: xi.DRM_FAILURE
                    });
                    else try {
                        t(new Uint8Array(r.response))
                    } catch (Np) {
                        n(Np)
                    } else n({
                        error: xi.DRM_AUTH_FAILURE
                    })
            }, r.onerror = n, r.send()
        }))
    }, t._fallBackToSD = function() {
        this.updateTimeRef(), this._switchKeyChainState(this._keyTypes.KEYCHAIN_SD_FALLBACK).then((() => {
            this._fallbackCallback(), this._scanner.fire(xi.DRM_KEY_SWITCH, this._keyTypes.KEYCHAIN_SD_FALLBACK)
        })).catch((e => {
            this._scanner.fire(xi.DRM_OUTPUT_RESTRICTED)
        }))
    }, t.setFallbackCallback = function(e) {
        this._fallbackCallback = () => e()
    }, l(e, [{
        key: "state",
        get: function() {
            return this._keyChain.state
        }
    }, {
        key: "hasFallbackAssets",
        get: function() {
            return this._hasFallbackAssets
        }
    }, {
        key: "hasFallbackSourceUpdated",
        get: function() {
            return this._hasFallbackSourceUpdated
        },
        set: function(e) {
            this._hasFallbackSourceUpdated = e
        }
    }])
}();

function Cc(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function Nc() {}
const Mc = (() => {
        const e = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\./);
        return !!e && {
            major: parseInt(e[1], 10),
            minor: parseInt(e[2], 10)
        }
    })(),
    xc = document.createElement("video"),
    Uc = {
        settingPlaybackRate: (() => {
            if (ie.android && Mc && "object" == typeof Mc && Mc.major < 52) return !1;
            const e = xc.playbackRate;
            xc.playbackRate = .5 * e;
            const t = e !== xc.playbackRate;
            return xc.playbackRate = e, t
        })(),
        settingVolume: (() => {
            if (ie.android || ie.iOS || ie.iPadOS) return !1;
            const e = xc.volume;
            return xc.volume = .5 * e, xc.volume !== e
        })(),
        textTracks: void 0 !== xc.textTracks && "undefined" != typeof TextTrackList && xc.textTracks instanceof TextTrackList
    },
    Fc = new WeakMap;
let jc = function(e) {
        function t({
            files: t,
            id: n = Ae(),
            title: r = null,
            subtitle: i = null,
            metadata: o = {},
            textTracks: s = Do(),
            audioTracks: a = Do(),
            externalDisplayFiles: u = {},
            chapters: c = [],
            duration: l
        }) {
            var d;
            if (d = e.call(this) || this, !t || !Array.isArray(t)) throw new TypeError("Must provide files for the video.");
            const h = function(e = []) {
                    return e.getFileById = Po, e
                }(t.map((e => e instanceof wc ? (e.video = d, e) : new wc(e, d)))),
                f = Do(s.map((e => e instanceof oc ? (e.video = d, e) : new oc(e, d))));
            if (d._audioTracksFromConfig = a, Object.keys(u).forEach((e => {
                    !u[e] || u[e] instanceof wc || (u[e] = new wc(u[e], d))
                })), Object.defineProperties(d, {
                    id: {
                        value: `${n}`,
                        enumerable: !0
                    },
                    title: {
                        value: r,
                        enumerable: !0
                    },
                    subtitle: {
                        value: i,
                        enumerable: !0
                    },
                    metadata: {
                        value: o,
                        enumerable: !0
                    },
                    files: {
                        value: h,
                        enumerable: !0
                    },
                    textTracks: {
                        value: f,
                        enumerable: !0,
                        writable: !0
                    },
                    chapters: {
                        value: c,
                        enumerable: !0
                    },
                    duration: {
                        value: l,
                        enumerable: !0
                    },
                    externalDisplayFiles: {
                        value: u,
                        enumerable: !0
                    }
                }), o.drm) {
                const {
                    drm: e,
                    useHls: t,
                    drmLaUrlParams: n
                } = o;
                d._drmHandler = new Lc(e, t, n)
            }
            return d
        }
        return p(t, e), t.prototype.deactivate = function() {
            this._drmHandler && this._drmHandler.destroy(), this.textTracks.forEach((e => this.currentScanner.removeTextTrack(e)))
        }, l(t, [{
            key: "drmHandler",
            get: function() {
                return this._drmHandler || null
            }
        }, {
            key: "currentFile",
            get: function() {
                return this.currentScanner.currentFile
            },
            set: function(e) {
                this.currentScanner.currentFile = e
            }
        }, {
            key: "currentScanner",
            get: function() {
                return Fc.get(this)
            },
            set: function(e) {
                this.currentScanner && Uc.textTracks && this.textTracks.forEach((e => this.currentScanner.removeTextTrack(e))), Uc.textTracks && this.textTracks.forEach((t => e.addTextTrack(t))), Fc.set(this, e)
            }
        }, {
            key: "chapters",
            get: function() {
                return this.chapters
            }
        }, {
            key: "audioTracks",
            get: function() {
                return Do((this.currentScanner.constructor.supportsVideoElementAudioTracks ? Array.from(this.currentScanner.audioTracks) : this._audioTracksFromConfig).map((e => e instanceof Ic ? (e.video = this, e) : new Ic(e, this))))
            }
        }, {
            key: "enabledAudioTrack",
            get: function() {
                return this.audioTracks.find((e => !!e.enabled))
            }
        }])
    }(wn),
    Vc = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this) || this)._telecine = t, r._options = n, r._bufferInterval = null, r._lastBufferCheckVideoTime = r._options.embedTime ? r._options.embedTime : 0, r._isBuffering = !1, r._isSeeking = !1, r._userPlayState = !1, r.playInitiated = !1, r._isLiveStreamOnline = !1, r._checkInterval = 250, r._boundEndBuffering = r._endBuffering.bind(r), r._boundOnPause = r._onPause.bind(r), r._boundOnSeeking = r._onSeeking.bind(r), r._boundOnSeeked = r._onSeeked.bind(r), r._boundOnLiveOnline = r._onLiveOnline.bind(r), r._boundOnLiveOffline = r._onLiveOffline.bind(r), r._toggleEvents(r._telecine.on), r._options.noInterval || r._setUpRebufferMonitor(), r
        }
        p(t, e);
        var n = t.prototype;
        return n.destroy = function() {
            clearInterval(this._bufferInterval), this._toggleEvents(this._telecine.off), this._endBuffering()
        }, n._toggleEvents = function(e) {
            e(Li.PAUSE, this._boundOnPause), e(Li.PLAYING, this._boundEndBuffering), e(Li.SEEKING, this._boundOnSeeking), e(Li.SEEKED, this._boundOnSeeked), e(Ui.STREAM_ONLINE, this._boundOnLiveOnline), e(Ui.STREAM_OFFLINE, this._boundOnLiveOffline)
        }, n._onPause = function() {
            this.userPlayState = !1
        }, n._endBuffering = function() {
            this._isBuffering && (this._isBuffering = !1, this.fire(xi.BUFFER_ENDED))
        }, n._onSeeking = function() {
            this._isSeeking = !0
        }, n._onSeeked = function() {
            this._isSeeking = !1
        }, n._onLiveOnline = function() {
            this._isLiveStreamOnline = !0
        }, n._onLiveOffline = function() {
            this._isLiveStreamOnline = !1
        }, n._setUpRebufferMonitor = function() {
            clearInterval(this._bufferInterval), this._bufferInterval = setInterval(this.runIntervalCheck.bind(this), this._checkInterval)
        }, n.runIntervalCheck = function() {
            if (!this._telecine.video) return;
            const e = this._telecine.video.currentScanner;
            if (!e) return;
            const t = this._telecine.isLive(),
                n = e.currentTime,
                r = this._checkInterval / 2 / 1e3;
            if (this.playInitiated && (!this._isSeeking || t) && (!this._telecine.paused || this.userPlayState) && !this._isBuffering && n < this._lastBufferCheckVideoTime + r) {
                if (t && !this._isLiveStreamOnline) return;
                const e = this._telecine.buffered;
                for (let t = 0; t < e.length; t++)
                    if (n >= e.start(t) && n + .2 <= e.end(t)) return void(this._lastBufferCheckVideoTime = n);
                if (n + r >= this._telecine.duration) return;
                this._isBuffering = !0, this.fire(xi.BUFFER_STARTED)
            }(this.playInitiated && this._isBuffering && n > this._lastBufferCheckVideoTime + r || t && !this._isLiveStreamOnline && this._isBuffering) && (this._isBuffering = !1, this.fire(xi.BUFFER_ENDED)), this._lastBufferCheckVideoTime = n
        }, l(t, [{
            key: "userPlayState",
            get: function() {
                return this._userPlayState
            },
            set: function(e) {
                this._userPlayState = e, e || this._endBuffering()
            }
        }])
    }(wn);

function Bc() {
    let e, t;

    function n() {
        if (!t) return Promise.reject();
        e.preload = "";
        let n = e.play();
        return void 0 === n && (n = new Promise((t => {
            e.addEventListener("playing", t)
        }))), n
    }

    function r() {
        t && (t.resolve(), t = null)
    }

    function i(e) {
        t && (t.reject(e), t = null)
    }
    return {
        set video(t) {
            e = t
        },
        get video() {
            return e
        },
        get active() {
            return !!t
        },
        start: function(o = Promise.resolve.bind(Promise)) {
            return t || (t = de()), e.currentSrc ? document.createElement("video").load() : e.load(), o().then(n).then(r).catch(i), t
        },
        cancel: function() {
            t && (t.reject(new Uo(Go, "The play() request was interrupted by a call to pause()")), t = null)
        }
    }
}
let Hc = function(e) {
        function t(t, n, r = {}) {
            var i;
            return (i = e.call(this) || this)._element = t, i._scanners = n, i._options = r, i._video = null, i._textTracks = Do(), i._properties = {}, i._currentScanner = new rs(t), i._options.playRequest = new Bc, i._blacklistedScanners = [], i._activeEffects = [], i._previousScanner = null, i._switchingVideo = !1, i._snapshotDisplayed = !1, i
        }
        p(t, e);
        var n = t.prototype;
        return n.supportsEffect = function(e) {
            return !!e.supported && e.supportedScanners.some((e => this._getScannerName(this._currentScanner) === e.displayName))
        }, n.getEffectByName = function(e) {
            let t = null;
            return this._activeEffects.forEach((n => {
                e === this._getEffectName(n) && (t = n)
            })), t
        }, n.activateEffect = function(e, t) {
            const n = new e(this, t);
            return n.activate(), this._activeEffects.push(n), n
        }, n.deactivateEffect = function(e) {
            return this._activeEffects.some(((t, n) => t.constructor === e && (t.deactivate(), this._activeEffects.splice(n, 1), !0)))
        }, n.deactivateEffects = function() {
            this._activeEffects.forEach((e => this.deactivateEffect(e.constructor)))
        }, n.play = function() {
            if (!this._video || this._video.files.length < 1) throw new Uo("NoFiles", "There are no files to play.");
            this._rebufferMonitor.playInitiated || (this._rebufferMonitor.playInitiated = !0), this._rebufferMonitor.userPlayState = !0;
            const e = this._currentScanner.play();
            return this._properties.paused = !1, e
        }, n.pause = function() {
            if (!this._video || this._video.files.length < 1) throw new Uo("NoFiles", "There are no files to play.");
            return this._rebufferMonitor.userPlayState = !1, this._currentScanner.pause(), this._properties.paused = !0, this
        }, n.isLive = function() {
            return this.currentScannerName.includes("Live")
        }, n.endLive = function() {
            this._currentScanner.endLive()
        }, n.getBitrateAtTime = function(e, t = "video", n = "average") {
            var r, i;
            return "MediaSourceScanner" !== this._getScannerName(this._currentScanner) && "HLSLiveScanner" !== this._getScannerName(this._currentScanner) || "audio" === t && this._currentScanner._streams[t].length <= 1 ? 0 : (null == (r = (i = this._currentScanner).getBitrateAtTime) ? void 0 : r.call(i, e, t, n)) || 0
        }, n.getCurrentStream = function(e = "video") {
            var t, n;
            return null == (t = (n = this._currentScanner).getCurrentStream) ? void 0 : t.call(n, e)
        }, n.showExternalDisplayPicker = function(e) {
            this._currentScanner.showExternalDisplayPicker(e)
        }, n.requestPictureInPicture = function() {
            return this._currentScanner.requestPictureInPicture()
        }, n.exitPictureInPicture = function() {
            return this._currentScanner.exitPictureInPicture()
        }, n.addChapter = function(e, t) {
            this._currentScanner.addChapter(e, t)
        }, n.removeChapter = function(e) {
            this._currentScanner.removeChapter(e)
        }, n.addCuePoint = function(e, t) {
            return this._currentScanner.addCuePoint(e, t)
        }, n.removeCuePoint = function(e) {
            return this._currentScanner.removeCuePoint(e)
        }, n.removeAllCuePoints = function() {
            return this._currentScanner.removeAllCuePoints()
        }, n.enableAudioTrack = function(e) {
            return this._currentScanner.enableAudioTrack(e)
        }, n.addVideoEventListeners = function() {
            return this._currentScanner.addVideoEventListeners()
        }, n.removeVideoEventListeners = function() {
            return this._currentScanner.removeVideoEventListeners()
        }, n._findScanner = function({
            textTrackSupport: e = !1
        } = {}) {
            if (e && !Uc.textTracks) return null;
            const t = this._video.files.sort(((e, t) => e.priority - t.priority)),
                n = this._scanners;
            for (const r in t) {
                let e = t[r];
                for (const t in n) {
                    let r = n[t];
                    if (r.supported(this._options.disableMMS) && -1 === this._blacklistedScanners.indexOf(this._getScannerName(r)) && r.supportedVideoTypes.some((t => e.mime === t))) return r
                }
            }
            return null
        }, n.reactivate = function() {
            var e;
            null != (e = this._currentScanner) && e.reactivate && this._currentScanner.reactivate(), this.play()
        }, n.checkRebuffer = function(e, t) {
            this._rebufferMonitor && (this._rebufferMonitor.playInitiated = e, this._rebufferMonitor.userPlayState = t, this._rebufferMonitor.runIntervalCheck())
        }, n._initScanner = function(e, t) {
            if (this._currentScanner.constructor === e && this._currentScanner.video === t) return;
            const n = !this.isLive() && this._currentScanner._preserveCurrentTime;
            this._switchingVideo ? (this._previousScanner = this._currentScanner, this._previousScanner._switchingVideo = !0, this._snapshotDisplayed || (this._previousScanner.takeSnapshot(), this._snapshotDisplayed = !0), this._previousScanner.deactivate()) : this._currentScanner.deactivate();
            const r = new e(this._element, this._options);
            Object.keys(Vi).forEach((e => {
                const t = Vi[e];
                r.on(t, (e => this._handleEvent(t, e, r)))
            })), this._currentScanner = r, t.currentScanner = r, this._currentScanner.video = t;
            const i = Object.keys(this._properties);
            for (let o = 0; o < i.length; o++) {
                const e = i[o];
                "paused" !== e ? ("currentTime" !== e || n) && (this._currentScanner[e] = this._properties[e]) : !1 === this._properties.paused && this._currentScanner.play()
            }
            this._currentScanner.addChapters(t.chapters, t.duration), this.fire(xi.SCANNER_CHANGE, this._getScannerName(this._currentScanner)), this._currentScanner.on(["canplay", "playing"], (() => {
                this._previousScanner && (this._previousScanner._switchingVideo = !1, this._previousScanner.removeSnapshot(), this._previousScanner = null, this._snapshotDisplayed = !1)
            }))
        }, n._updateScanner = function() {
            if (null === this._video) return;
            const e = this._findScanner({
                textTrackSupport: this._video.textTracks.length > 0
            });
            e ? this._initScanner(e, this._video) : this._fireVideoError("FilesNotPlayable", "None of the files could be played in this browser.")
        }, n._resetScanner = function() {
            this._currentScanner.deactivate(), this._currentScanner = new rs(this._element)
        }, n._handleEvent = function(e, t, n) {
            if (n === this._currentScanner) {
                switch (e) {
                    case Li.ERROR:
                        return void(t instanceof Uo && this.fire(Li.ERROR, t));
                    case xi.SCANNER_ERROR:
                        this._fireVideoError("ScannerError", `The current scanner can no longer be used because ${t.reason}`), this._blacklistedScanners.push(this._getScannerName(this._currentScanner)), this._updateScanner([]);
                        break;
                    case xi.FILE_ERROR:
                        this._fireVideoError("FileError", `The current file can no longer be used because ${t.reason}`), this._currentScanner._switchToNextFile();
                        break;
                    case xi.DOWNLOAD_ERROR:
                        this._fireVideoError("DownloadError", t), this._currentScanner._switchToNextFile();
                        break;
                    case xi.EME_UNSUPPORTED:
                        this._fireVideoError(Xo, {
                            text: null,
                            code: "emeunsupported"
                        });
                        break;
                    case xi.DRM_FAILURE:
                    case xi.DRM_AUTH_FAILURE:
                        this._fireVideoError(Xo, {
                            text: t.text,
                            code: t.code
                        });
                        break;
                    case xi.DRM_OUTPUT_RESTRICTED:
                        this._fireVideoError(Xo, {
                            text: null,
                            code: "outputrestricted"
                        });
                        break;
                    case xi.DRM_AUTH_SUCCESS:
                        this.fire(xi.DRM_AUTH_SUCCESS);
                        break;
                    case Li.TIME_UPDATE:
                        this._properties.currentTime = this._currentScanner.currentTime;
                        break;
                    case xi.MEDIA_URL_EXPIRED:
                        this._fireVideoError("MediaUrlExpired", t);
                        break;
                    case xi.MEDIA_URL_BAD_REQUEST:
                        this._fireVideoError(qo, t);
                        break;
                    case Fi.SPATIAL_UNSUPPORTED:
                        this.getEffectByName("ThreeSixtyEffect").deactivate();
                        break;
                    case Li.ENDED:
                        const e = !this._options.dvrEnabled || this.atLiveEdge;
                        this._properties.paused = e;
                        break;
                    case Li.WAITING:
                        this.fire(Li.WAITING)
                }
                this._activeEffects.forEach((t => {
                    "function" == typeof t[`on${e}`] && t[`on${e}`]()
                })), this.fire(e, t)
            }
        }, n._fireVideoError = function(e, t) {
            this.fire(Li.ERROR, new Uo(e, t))
        }, n._getScannerName = function(e) {
            return e instanceof rs ? e.constructor.displayName : e.prototype.constructor.displayName
        }, n._setUpRebufferMonitor = function() {
            this._rebufferMonitor && this._rebufferMonitor.destroy(), this._rebufferMonitor = new Vc(this, this._options), this._rebufferMonitor.on(xi.BUFFER_STARTED, (() => {
                this.fire(xi.BUFFER_STARTED)
            })), this._rebufferMonitor.on(xi.BUFFER_ENDED, (() => {
                this.fire(xi.BUFFER_ENDED)
            }))
        }, n._getEffectName = function(e) {
            return e instanceof Sc ? e.constructor.displayName : e.prototype.constructor.displayName
        }, n.setCaptionsShouldDisplay = function(e) {
            "HLSLiveScanner" === this._getScannerName(this._currentScanner) && this._currentScanner.setCaptionsShouldDisplay(e)
        }, n.setCaptionsShouldLoad = function(e) {
            "HLSLiveScanner" === this._getScannerName(this._currentScanner) && this._currentScanner.setCaptionsShouldLoad(e)
        }, l(t, [{
            key: "element",
            get: function() {
                return this._element
            }
        }, {
            key: "videoElement",
            get: function() {
                return this._currentScanner.videoElement
            }
        }, {
            key: "manifest",
            get: function() {
                return this._currentScanner.manifest || {
                    video: []
                }
            }
        }, {
            key: "supportsVideoElementAudioTracks",
            get: function() {
                return this._currentScanner.constructor.supportsVideoElementAudioTracks
            }
        }, {
            key: "activeEffects",
            get: function() {
                return this._activeEffects
            }
        }, {
            key: "latency",
            get: function() {
                return this._currentScanner.latency
            }
        }, {
            key: "downloadSpeed",
            get: function() {
                return this._currentScanner.downloadSpeed || 0
            }
        }, {
            key: "pictureInPictureActive",
            get: function() {
                return this._currentScanner.pictureInPictureActive
            }
        }, {
            key: "pictureInPictureEnabled",
            get: function() {
                return this._currentScanner.pictureInPictureEnabled
            }
        }, {
            key: "isLowerProfileAvailable",
            get: function() {
                return this._currentScanner.isLowerProfileAvailable
            }
        }, {
            key: "buffered",
            get: function() {
                return this._currentScanner.buffered
            }
        }, {
            key: "bufferTarget",
            get: function() {
                return this._currentScanner.bufferTarget
            },
            set: function(e) {
                this._properties.bufferTarget = e, this._currentScanner.bufferTarget = e
            }
        }, {
            key: "presentationDelay",
            get: function() {
                return this._currentScanner.presentationDelay
            },
            set: function(e) {
                this._properties.presentationDelay = e, this._currentScanner.presentationDelay = e
            }
        }, {
            key: "lowLatencyMode",
            get: function() {
                return this._currentScanner.lowLatencyMode
            },
            set: function(e) {
                this._properties.lowLatencyMode = e, this._currentScanner.lowLatencyMode = e
            }
        }, {
            key: "manifestLoadDurations",
            get: function() {
                return this._currentScanner.manifestLoadDurations ? this._currentScanner.manifestLoadDurations : []
            }
        }, {
            key: "successfulSegments",
            get: function() {
                return this._currentScanner.successfulSegments ? this._currentScanner.successfulSegments : []
            }
        }, {
            key: "failedSegments",
            get: function() {
                return this._currentScanner.failedSegments ? this._currentScanner.failedSegments : []
            }
        }, {
            key: "cuePoints",
            get: function() {
                return this._currentScanner.cuePoints
            }
        }, {
            key: "currentChapterID",
            get: function() {
                if (this._currentScanner && this._currentScanner.chaptersTrack && this._currentScanner.chaptersTrack.activeCues.length) {
                    const {
                        activeCues: e
                    } = this._currentScanner.chaptersTrack;
                    return e[e.length - 1].id
                }
                return null
            }
        }, {
            key: "chapters",
            get: function() {
                return this._currentScanner.chaptersTrack ? this._currentScanner.chaptersTrack.cues : []
            }
        }, {
            key: "chaptersTrack",
            get: function() {
                return this._currentScanner.chaptersTrack
            }
        }, {
            key: "currentFile",
            get: function() {
                return this._currentScanner.currentFile
            },
            set: function(e) {
                if ("string" == typeof e && (e = this._files.filter((t => t.id === e))[0]), !e) throw new Uo("FileNotValid", "The file is not valid.");
                this._currentScanner.currentFile = e
            }
        }, {
            key: "currentScannerName",
            get: function() {
                return this._getScannerName(this._currentScanner)
            }
        }, {
            key: "currentScanner",
            get: function() {
                return this._currentScanner
            }
        }, {
            key: "currentTime",
            get: function() {
                return this._currentScanner.currentTime
            },
            set: function(e) {
                this._properties.currentTime = e, this._currentScanner.currentTime = e
            }
        }, {
            key: "liveEdgeTime",
            get: function() {
                const e = this._currentScanner.liveEdgeTime;
                return null == e ? this._previousLiveEdgeTime : (this._previousLiveEdgeTime = e, e)
            }
        }, {
            key: "atLiveEdge",
            get: function() {
                var e;
                return null !== (e = this._currentScanner.atLiveEdge) && void 0 !== e ? e : this.isLive()
            }
        }, {
            key: "liveTailTime",
            get: function() {
                const e = this._currentScanner.liveTailTime;
                return null == e ? this._previousLiveTailTime : (this._previousLiveTailTime = e, e)
            }
        }, {
            key: "atLiveTail",
            get: function() {
                var e;
                return null !== (e = this._currentScanner.atLiveTail) && void 0 !== e && e
            }
        }, {
            key: "duration",
            get: function() {
                return this._currentScanner.duration
            }
        }, {
            key: "ended",
            get: function() {
                return this._currentScanner.ended
            }
        }, {
            key: "externalDisplayAvailable",
            get: function() {
                return this._currentScanner.externalDisplayAvailable
            }
        }, {
            key: "externalDisplayActive",
            get: function() {
                return this._currentScanner.externalDisplayActive
            }
        }, {
            key: "loop",
            get: function() {
                return this._currentScanner.loop
            },
            set: function(e) {
                this._properties.loop = e, this._currentScanner.loop = e
            }
        }, {
            key: "muted",
            get: function() {
                return this._currentScanner.muted
            },
            set: function(e) {
                this._properties.muted = !!e, this._currentScanner.muted = !!e
            }
        }, {
            key: "playsinline",
            get: function() {
                return this._currentScanner.playsinline
            },
            set: function(e) {
                this._properties.playsinline = !!e, this._currentScanner.playsinline = !!e
            }
        }, {
            key: "paused",
            get: function() {
                return this._currentScanner.paused
            }
        }, {
            key: "played",
            get: function() {
                return this._currentScanner.played
            }
        }, {
            key: "seekable",
            get: function() {
                return this._currentScanner.seekable
            }
        }, {
            key: "seeking",
            get: function() {
                return this._currentScanner.seeking
            }
        }, {
            key: "defaultPlaybackRate",
            get: function() {
                return this._currentScanner.defaultPlaybackRate
            },
            set: function(e) {
                this._properties.defaultPlaybackRate = e, this._currentScanner.defaultPlaybackRate = e
            }
        }, {
            key: "playbackRate",
            get: function() {
                return this._currentScanner.playbackRate
            },
            set: function(e) {
                this._properties.playbackRate = e, this._currentScanner.playbackRate = e
            }
        }, {
            key: "preload",
            get: function() {
                return this._currentScanner.preload
            },
            set: function(e) {
                this._properties.preload = e, this._currentScanner.preload = e
            }
        }, {
            key: "autoPictureInPicture",
            get: function() {
                return this._currentScanner.autoPictureInPicture
            },
            set: function(e) {
                this._properties.autoPictureInPicture = !!e, this._currentScanner.autoPictureInPicture = !!e
            }
        }, {
            key: "disablePictureInPicture",
            get: function() {
                return this._currentScanner.disablePictureInPicture
            },
            set: function(e) {
                this._properties.disablePictureInPicture = !!e, this._currentScanner.disablePictureInPicture = !!e
            }
        }, {
            key: "video",
            get: function() {
                return this._video
            },
            set: function(e) {
                this._video && this._video.deactivate(), this._blacklistedScanners = [], this._setUpRebufferMonitor(), null === e ? (this._video = null, this._resetScanner()) : (this._video = new jc(e), this._updateScanner())
            }
        }, {
            key: "videoWidth",
            get: function() {
                return this._currentScanner.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                return this._currentScanner.videoHeight
            }
        }, {
            key: "volume",
            get: function() {
                return this._currentScanner.volume
            },
            set: function(e) {
                if (e < 0 || e > 1) throw new Uo("IndexSizeError", `Failed to set the 'volume' property: The volume provided (${e}) is outside of the range [0, 1].`);
                this._properties.volume = e, this._currentScanner.volume = e
            }
        }, {
            key: "videoElementAudioTracks",
            get: function() {
                return this._currentScanner.audioTracks
            }
        }, {
            key: "brainDebug",
            get: function() {
                return this._currentScanner.brainDebug
            }
        }])
    }(wn),
    Xc = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._activated = !1, r._video = r._telecine._currentScanner._video, r
        }
        p(t, e);
        var n = t.prototype;
        return n.activate = function() {
            this._activated = !0, this._canvas = document.createElement("canvas"), this._canvas.className = "vp-canvas-effect", this._canvas.style.cssText = "\n            position: absolute;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n        ", this._ctx = this._canvas.getContext("2d", {
                alpha: !1
            }), this._element.appendChild(this._canvas), this._startRendering()
        }, n.deactivate = function() {
            this._canvas && this._element.removeChild(this._canvas), this._stopRendering(), this._activated = !1
        }, n._startRendering = function() {
            this._requestFrame()
        }, n._requestFrame = function() {
            this._animationFrame = window.requestAnimationFrame(this._renderFrame.bind(this))
        }, n._renderFrame = function() {
            const e = this._video,
                t = this._canvas;
            t.width = e.clientWidth, t.height = e.clientHeight;
            const n = Math.floor(this._videoContentWidth()),
                r = Math.floor(this._videoContentHeight()),
                i = Math.floor((e.clientWidth - n) / 2),
                o = Math.floor((e.clientHeight - r) / 2);
            this._ctx.fillStyle = "#000", this._ctx.fillRect(0, 0, t.width, t.height), this._ctx.drawImage(e, i, o, n, r), this._requestFrame()
        }, n._videoRatio = function() {
            return this._video.videoHeight / this._video.videoWidth
        }, n._videoContentWidth = function() {
            return Math.min(this._video.clientHeight / this._videoRatio(), this._video.clientWidth)
        }, n._videoContentHeight = function() {
            return Math.min(this._video.clientWidth * this._videoRatio(), this._video.clientHeight)
        }, n._stopRendering = function() {
            this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = null)
        }, l(t, null, [{
            key: "displayName",
            get: function() {
                return "CanvasEffect"
            }
        }, {
            key: "supported",
            get: function() {
                return !0
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [rs, zu]
            }
        }])
    }(Sc),
    Wc = function() {
        return l((function() {}), null, [{
            key: "Equirect",
            get: function() {
                return "equirectangular"
            }
        }])
    }(),
    qc = function() {
        return l((function() {}), null, [{
            key: "Mono",
            get: function() {
                return "mono"
            }
        }, {
            key: "TopBottom",
            get: function() {
                return "top-bottom"
            }
        }, {
            key: "LeftRight",
            get: function() {
                return "left-right"
            }
        }])
    }(),
    Gc = function() {
        function e(e, t, n) {
            this.isStereo = t !== qc.Mono, this._leftEye = null, this._rightEye = null, e === Wc.Equirect ? this.createEquirectProjection(n, t) : this.createEquirectProjection(n, qc.Mono)
        }
        var t = e.prototype;
        return t.createEquirectProjection = function(e, t) {
            t !== qc.Mono ? (this._leftEye = this._createEquirectangularSphereMesh(e), this._rightEye = this._createEquirectangularSphereMesh(e), this._leftEye.layers.set(1), this._rightEye.layers.set(2), t === qc.TopBottom && (this._chopGeometryUvs(this._leftEye.geometry, .5, .5), this._chopGeometryUvs(this._rightEye.geometry, .5, 0)), t === qc.LeftRight && (this._chopGeometryUvs(this._leftEye.geometry, .5, 0, 0), this._chopGeometryUvs(this._rightEye.geometry, .5, .5, 0))) : this._leftEye = this._createEquirectangularSphereMesh(e)
        }, t._createEquirectangularSphereMesh = function(t, n, r, i) {
            const o = new THREE.SphereBufferGeometry(n || e.SPHERE_RADIUS, r || e.TESSELATION_WIDTH, i || e.TESSELATION_HEIGHT);
            o.scale(-1, 1, 1);
            const s = new THREE.MeshBasicMaterial({
                map: t
            });
            return new THREE.Mesh(o, s)
        }, t._chopGeometryUvs = function(e, t, n, r = 1) {
            for (let i = 0; i < e.attributes.uv.array.length; i += 2) e.attributes.uv.array[i + r] *= t, e.attributes.uv.array[i + r] += n
        }, l(e, [{
            key: "left",
            get: function() {
                return this._leftEye
            }
        }, {
            key: "right",
            get: function() {
                return this._rightEye
            }
        }], [{
            key: "TESSELATION_WIDTH",
            get: function() {
                return 120
            }
        }, {
            key: "TESSELATION_HEIGHT",
            get: function() {
                return 80
            }
        }, {
            key: "SPHERE_RADIUS",
            get: function() {
                return 500
            }
        }])
    }(),
    Kc = function() {
        function e(e) {
            this._renderer = e
        }
        var t = e.prototype;
        return t.hasVRHeadset = function() {
            return ie.webvr ? navigator.getVRDisplays().then((e => e.length > 0 ? (this._renderer.vr.setDevice(e[0]), e[0]) : null)) : null
        }, t.enter = function() {
            return this._renderer.vr.getDevice() && this._renderer.vr.getDevice().requestPresent([{
                source: this._renderer.domElement
            }])
        }, t.exit = function() {
            return this._renderer.vr.getDevice() && this._renderer.vr.getDevice().exitPresent()
        }, l(e, [{
            key: "supported",
            get: function() {
                return ie.webvr
            }
        }, {
            key: "device",
            get: function() {
                return this._renderer && this._renderer.vr.getDevice() ? this._renderer.vr.getDevice() : null
            }
        }, {
            key: "isPresenting",
            get: function() {
                return !(!this._renderer || !this._renderer.vr.getDevice()) && this._renderer.vr.getDevice().isPresenting
            }
        }])
    }(),
    Yc = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._activated = !1, r._camera = null, r._scene = null, r._renderer = null, r.isUserInteracting = !1, r._onMouseDownMouseX = 0, r._onMouseDownMouseY = 0, r._coordinates = {
                lat: 0,
                long: 0
            }, r._previousCoordinates = {
                lat: 0,
                long: 0
            }, r._onMouseDownCoordinates = {
                lat: 0,
                long: 0
            }, r._previousCameraProps = r.cameraProps, r._phi = 0, r._theta = 0, r._rotation = 0, r._video = r._telecine._currentScanner._video, r._videoRefreshLoop = null, r._gyroVector = {
                x: 0,
                y: 0
            }, r._offset = {
                lat: 0,
                long: 0
            }, r._writeSpeeds = {
                videoFps: r._options.fps,
                motionRenderSpeed: 60
            }, r._maxTimeBetweenWrites = 1e3 / r._writeSpeeds.videoFps, r._motionTimeouts = [], r._movingAutomatically = !1, r._deviceMotionHasOccurred = !1, r._updateFromGyroscopePending = !1, r._keysPressed = {
                up: !1,
                down: !1,
                left: !1,
                right: !1
            }, r
        }
        p(t, e), t.frustumSurfaceArea = function(e, t, n) {
            const r = 2 * Gc.SPHERE_RADIUS * 2 * Math.sin(Math.PI / 180 * (e / 2));
            return r * (r * t / n) / (4 * Math.PI * Math.pow(Gc.SPHERE_RADIUS, 2))
        };
        var n = t.prototype;
        return n.activate = function() {
            return new Promise((e => {
                if (window.THREE) return void e();
                const t = document.createElement("script");
                t.src = this._options.threeUrl, document.body.appendChild(t), t.onload = () => {
                    e()
                }
            })).then((() => this._initialize()))
        }, n._initialize = function() {
            this._activated = !0, this._camera = new THREE.PerspectiveCamera(this._options.fieldOfView, this._video.clientWidth / this._video.clientHeight, 1, 2 * Gc.SPHERE_RADIUS), this._camera.target = new THREE.Vector3(0, 0, 0), this._camera.layers.enable(1), this._initializeAutoMovement(this._options.directorTimeline), this._scene = new THREE.Scene, this._texture = new THREE.VideoTexture(this._video), this._texture.generateMipmaps = !1, this._texture.minFilter = THREE.NearestFilter, this._texture.maxFilter = THREE.NearestFilter, this._texture.format = THREE.RGBFormat, this._projector = new Gc(this._options.projection, this._options.stereoMode, this._texture), this._projector.isStereo && this._scene.add(this._projector.right), this._scene.add(this._projector.left), this._renderer = new THREE.WebGLRenderer, this._renderer.vr.enabled = !0, this._renderer.setPixelRatio(window.devicePixelRatio), this._output = document.createElement("div"), this._renderer.domElement.style.margin = "0 auto", this._output.appendChild(this._renderer.domElement), this._element.appendChild(this._output), this._hideOutput(), this._telecine._currentScanner._video.setAttribute("crossorigin", "anonymous"), this._startRendering(), this._telecine._currentScanner.paused || this._showOutput(), this._webvr = new Kc(this._renderer), this._webvr.supported && this._webvr.hasVRHeadset().then((e => {
                setTimeout((() => {
                    this._telecine.fire(Fi.WEBVR_HARDWARE_AVAILABLE, this._webvr.device)
                }), 100)
            })).catch((e => {}))
        }, n.toggleVR = function() {
            if (this._webvr.isPresenting) this._webvr.exit().then((() => {
                this.adjustRenderSize()
            })).catch((e => {}));
            else {
                if (this._telecine._currentScanner.paused) return;
                this._webvr.enter().then((() => {
                    this.adjustRenderSize()
                })).catch((e => {}))
            }
        }, n.onplay = function() {
            this._activated && (this._showOutput(), this.adjustRenderSize())
        }, n.deactivate = function() {
            this._output && this._element.removeChild(this._output), this._stopRendering(), this._activated = !1
        }, n.snapToCenter = function() {
            this._motionTimeouts.forEach((e => clearTimeout(e)));
            const e = ((this._coordinates.long >= 180 ? 360 : 0) - this._coordinates.long) / 11,
                t = (0 - this._coordinates.lat) / 11;
            this._rotation = 0;
            for (let n = 0; n < 50; n++) this._motionTimeouts.push(setTimeout((() => {
                0 === n && (this._movingAutomatically = !0, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)), 49 === n && (this._movingAutomatically = !1, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.videoFps)), this._updateViewpoint(this._coordinates.lat + t / Math.pow(1.1, n), this._coordinates.long + e / Math.pow(1.1, n)), this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._coordinates.lat + t / Math.pow(1.1, n), this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long + t / Math.pow(1.1, n)
            }), n * this._maxTimeBetweenWrites))
        }, n.isStereo = function() {
            return !!this._projector && this._projector.isStereo
        }, n._initializeAutoMovement = function(e) {
            e && e[0] && void 0 !== e[0].p && "undefined" !== e[0].y && this._updateViewpoint(e[0].p, e[0].y)
        }, n._updateViewpoint = function(e, t) {
            this._previousCoordinates.long = this._coordinates.long, this._previousCoordinates.lat = this._coordinates.lat, e %= 360, this._coordinates.lat = Math.max(-85, Math.min(85, e)), t = (t %= 360) >= 0 ? t : 360 + t, this._coordinates.long = t
        }, n.makeContact = function(e) {
            this.isUserInteracting = !0, this._motionTimeouts.forEach((e => clearTimeout(e))), this._movingAutomatically = !1, this._contactPoint = {
                x: e.x,
                y: e.y
            }, this._onMouseDownCoordinates.long = this._coordinates.long, this._onMouseDownCoordinates.lat = this._coordinates.lat, this._motionStart = {
                long: this._coordinates.long,
                lat: this._coordinates.lat
            }, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)
        }, n.move = function(e) {
            this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
            const t = this._motionStart.lat - .2 * (this._contactPoint.y - e.y),
                n = .2 * (this._contactPoint.x - e.x) + this._motionStart.long;
            this._updateViewpoint(t, n)
        }, n.moveWheel = function(e) {
            this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
            const t = this._coordinates.lat - .1 * e.y,
                n = this._coordinates.long + .1 * e.x;
            this._updateViewpoint(t, n)
        }, n.moveDevice = function(e, t, n, r) {
            this._updateFromGyroscopePending = !0;
            const i = new THREE.Quaternion;
            let o = window.orientation;
            null === o && (o = this._video.clientWidth > this._video.clientHeight ? 90 : 0), e = e ? THREE.Math.degToRad(e) : 0, t = t ? THREE.Math.degToRad(t) : 0, n = n ? THREE.Math.degToRad(n) : 0;
            const s = o ? THREE.Math.degToRad(o) : 0,
                a = new THREE.Vector3(0, 0, 1),
                u = new THREE.Euler,
                c = new THREE.Quaternion,
                l = new THREE.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5));
            u.set(t, e, -n, "YXZ"), i.setFromEuler(u), i.multiply(l), i.multiply(c.setFromAxisAngle(a, -s)), this._gyroVector = (new THREE.Euler).setFromQuaternion(i, "YXZ"), this._rotation = this._gyroVector.z, this.isUserInteracting || this._movingAutomatically || this._updateViewpoint(THREE.Math.radToDeg(this._gyroVector.x) - this._offset.lat, -THREE.Math.radToDeg(this._gyroVector.y) + this._offset.long), this._deviceMotionHasOccurred || (this.snapToCenter(), this._telecine.fire(Fi.MOTION_START), this._deviceMotionHasOccurred = !0)
        }, n.releaseContact = function(e) {
            if (this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) - this._coordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long, this.isUserInteracting = !1, this._motionStart && !e) {
                const e = Math.hypot(this._coordinates.long - this._motionStart.long, this._coordinates.lat - this._motionStart.lat);
                this._moveDueToMomentum(e)
            }
        }, n.abandonMotion = function() {
            this.isUserInteracting = !1, this._motionStart = null
        }, n.keyPress = function(e) {
            this._options.keyboardDisabled || (this._keyIsDown() || (this.isUserInteracting = !0, this._motionTimeouts && this._motionTimeouts.forEach((e => clearTimeout(e)))), this._keysPressed[e] || (this._keysPressed[e] = !0))
        }, n.keyUp = function(e) {
            this._keysPressed[e] = !1, this._keyIsDown() || (this.isUserInteracting = !1, this._moveDueToMomentum(1 / 0))
        }, n._moveFromKeyPress = function() {
            Object.keys(this._keysPressed).forEach((e => {
                if (this._keysPressed[e]) switch (e) {
                    case "up":
                        this._updateViewpoint(this._coordinates.lat + 2, this._coordinates.long);
                        break;
                    case "down":
                        this._updateViewpoint(this._coordinates.lat - 2, this._coordinates.long);
                        break;
                    case "left":
                        this._updateViewpoint(this._coordinates.lat, this._coordinates.long - 2);
                        break;
                    case "right":
                        this._updateViewpoint(this._coordinates.lat, this._coordinates.long + 2)
                }
            }))
        }, n._keyIsDown = function() {
            return Object.keys(this._keysPressed).map((e => this._keysPressed[e])).some((e => e))
        }, n._moveDueToMomentum = function(e) {
            if (e >= 20) {
                const t = {
                    long: this._coordinates.long - this._previousCoordinates.long,
                    lat: this._coordinates.lat - this._previousCoordinates.lat
                };
                e === 1 / 0 && (t.long /= 2, t.lat /= 2);
                for (let e = 1; e < 50; e++) this._motionTimeouts.push(setTimeout((() => {
                    1 === e && (this._movingAutomatically = !0), 49 === e && (this._movingAutomatically = !1, this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.videoFps);
                    const n = 2 / Math.pow(e, 1.5);
                    this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._coordinates.lat + t.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long + t.long, this._updateViewpoint(this._coordinates.lat + t.lat * n, this._coordinates.long + t.long * n)
                }), e * this._maxTimeBetweenWrites))
            }
        }, n.onseeked = function() {
            this._activated && this._update()
        }, n.onresize = function() {
            this.adjustRenderSize(), this.isUserInteracting = !1
        }, n._update = function() {
            if (!this.isVRPresenting) {
                this._phi = THREE.Math.degToRad(90 + this._coordinates.lat), this._theta = THREE.Math.degToRad(this._coordinates.long), this._camera.position.set(Math.sin(this._phi) * Math.cos(this._theta), Math.cos(this._phi), Math.sin(this._phi) * Math.sin(this._theta)), this._camera.lookAt(this._camera.target), this._camera.rotation.z += this._rotation;
                const e = this.cameraProps;
                this._telecine.fire(Fi.CAMERA_UPDATE, e), this._previousCameraProps.yaw === e.yaw && this._previousCameraProps.pitch === e.pitch && this._previousCameraProps.roll === e.roll && this._previousCameraProps.fov === e.fov || (this._previousCameraProps = e, this._telecine.fire(Fi.CAMERA_CHANGE, e))
            }
            this._renderer.render(this._scene, this._camera)
        }, n.adjustRenderSize = function() {
            if (this.isVRPresenting) this._camera.aspect = this._video.clientWidth / this._video.clientHeight, this._camera.updateProjectionMatrix(), this._renderer.setSize(this._video.clientWidth, this._video.clientHeight);
            else {
                this._video.clientWidth > this._video.clientHeight ? this._camera.aspect = Math.max(1, Math.min(2, this._video.clientWidth / this._video.clientHeight)) : this._camera.aspect = Math.max(1 / 3, Math.min(3, this._video.clientWidth / this._video.clientHeight)), this._camera.updateProjectionMatrix();
                const e = Lo(this._video.clientWidth, this._video.clientHeight, this._camera.aspect, 1);
                this._renderer.setSize(e.width, e.height), this._output.style.paddingTop = `${e.top}px`
            }
        }, n._startRendering = function() {
            this._renderer.setAnimationLoop((() => {
                this._keyIsDown() && this._moveFromKeyPress(), this._update()
            }))
        }, n._stopRendering = function() {
            this._renderer.setAnimationLoop(null)
        }, n._showOutput = function() {
            this._styleOutput({
                backgroundColor: "#000",
                display: "block"
            })
        }, n._hideOutput = function() {
            this._styleOutput({
                backgroundColor: "#000",
                display: "none"
            })
        }, n._styleOutput = function({
            backgroundColor: e,
            display: t
        } = {}) {
            this._output.style.cssText = `position:absolute;left:0;top:0;margin-left:auto;margin-right:auto;padding:0;background:${e};width:100%;height:100%;text-align:center;display:${t}`
        }, l(t, [{
            key: "isUserInteracting",
            get: function() {
                return this._isUserInteracting
            },
            set: function(e) {
                e !== this._isUserInteracting && (this._isUserInteracting = e, e ? this._options.isMobile || this._telecine.fire(Fi.MOTION_START) : this._options.isMobile || this._telecine.fire(Fi.MOTION_END))
            }
        }, {
            key: "currentCoordinates",
            get: function() {
                return this._coordinates
            },
            set: function([e, t]) {
                if (e > 90 || e < -90) throw new RangeError("Latitude should be a float between -90 and 90.");
                if (t < 0 || t > 360) throw new RangeError("Longitude should be a float between 0 and 360.");
                this._updateViewpoint(e, t), this._update()
            }
        }, {
            key: "cameraProps",
            get: function() {
                return {
                    yaw: this._coordinates.long,
                    pitch: this._coordinates.lat,
                    roll: this.roll,
                    fov: this.fieldOfView
                }
            },
            set: function(e) {
                e = g(g({}, this.cameraProps), e), this.fieldOfView = e.fov, this.roll = e.roll, this.currentCoordinates = [e.pitch, e.yaw]
            }
        }, {
            key: "roll",
            get: function() {
                return 180 * this._rotation / Math.PI
            },
            set: function(e) {
                if (e < -180 || e > 180) throw new RangeError("Roll should be a float between -180 and 180.");
                this._rotation = THREE.Math.degToRad(e)
            }
        }, {
            key: "isVRPresenting",
            get: function() {
                return this._webvr && this._webvr.isPresenting
            }
        }, {
            key: "fieldOfView",
            get: function() {
                return this._camera ? this._camera.fov : this._options.fieldOfView
            },
            set: function(e) {
                this._camera.fov = e, this._camera.updateProjectionMatrix(), this._renderer.render(this._scene, this._camera)
            }
        }, {
            key: "hasVRHeadset",
            get: function() {
                return this._webvr && !!this._webvr.device
            }
        }], [{
            key: "displayName",
            get: function() {
                return "ThreeSixtyEffect"
            }
        }, {
            key: "supported",
            get: function() {
                try {
                    const e = document.createElement("canvas");
                    return !!window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                } catch (Np) {
                    return this._telecine._currentScanner.fire(Fi.SPATIAL_UNSUPPORTED), !1
                }
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [rs, zu]
            }
        }])
    }(Sc),
    $c = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).connected = !1, r._context = null, r._source = null, r._mirror = null, r._rotator = null, r._decoder = null, r
        }
        p(t, e);
        var n = t.prototype;
        return n.activate = function() {
            return this._context = new AudioContext, new Promise(((e, t) => {
                if ("undefined" != typeof ambisonics) return void e();
                const n = document.createElement("script");
                n.src = this._options.ambisonicsUrl, document.body.appendChild(n), n.onload = () => e(), n.onerror = () => t()
            })).then((() => this.toggleAmbisonics())).catch((() => {
                this._telecine._currentScanner.fire(Fi.AMBISONIC_UNSUPPORTED)
            }))
        }, n.deactivate = function() {
            this._disconnect(!0)
        }, n.toggleAmbisonics = function() {
            var e, t;
            (null !== (e = null == (t = this._telecine.getCurrentStream("audio")) ? void 0 : t.ambisonic_order) && void 0 !== e ? e : 0) < 1 ? this._disconnect() : this._connect()
        }, n._connect = function() {
            var e, t;
            if (!this._context) return;
            const n = null !== (e = null == (t = this._telecine.getCurrentStream("audio")) ? void 0 : t.ambisonic_order) && void 0 !== e ? e : 0;
            if (this.connected || n < 1) return;
            const r = this._telecine._currentScanner._video;
            this._source = this._context.createMediaElementSource(r), this._mirror = new ambisonics.sceneMirror(this._context, n), this._rotator = new ambisonics.sceneRotator(this._context, n), this._decoder = new ambisonics.binDecoder(this._context, n), this._source.connect(this._mirror.in), this._mirror.out.connect(this._rotator.in), this._rotator.out.connect(this._decoder.in), this._decoder.out.connect(this._context.destination), this._mirror.mirror(1), this.connected = !0
        }, n._disconnect = function(e = !1) {
            this._source && this._source.disconnect(), e && this._context && (this._context.close(), this._context = null), this._source = null, this._mirror = null, this._rotator = null, this._decoder = null, this.connected = !1
        }, n.updateRotation = function(e, t, n) {
            this._rotator && (this._rotator.yaw !== e || this._rotator.pitch !== t || this._rotator.roll !== n) && (this._rotator.yaw = e, this._rotator.pitch = t, this._rotator.roll = n, this._rotator.updateRotMtx())
        }, l(t, null, [{
            key: "displayName",
            get: function() {
                return "AmbisonicEffect"
            }
        }, {
            key: "supported",
            get: function() {
                return void 0 !== window.AudioContext
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [rs, zu]
            }
        }])
    }(Sc);
const zc = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    Qc = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    },
    Jc = "pending",
    Zc = "active",
    el = "started",
    tl = "ended",
    nl = "started",
    rl = "done",
    il = "error";
var ol = /\s/,
    sl = /^\s+/;
var al = /^[-+]0x[0-9a-f]+$/i,
    ul = /^0b[01]+$/i,
    cl = /^0o[0-7]+$/i,
    ll = parseInt;

function dl(e) {
    if ("number" == typeof e) return e;
    if (mt(e)) return NaN;
    if (yt(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = yt(t) ? t + "" : t
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = function(e) {
        return e ? e.slice(0, function(e) {
            for (var t = e.length; t-- && ol.test(e.charAt(t)););
            return t
        }(e) + 1).replace(sl, "") : e
    }(e);
    var n = ul.test(e);
    return n || cl.test(e) ? ll(e.slice(2), n ? 2 : 8) : al.test(e) ? NaN : +e
}
var hl = 1 / 0;
var fl = st.isFinite,
    pl = Math.min,
    _l = function() {
        var e = Math.round;
        return function(t, n) {
            if (t = dl(t), (n = null == n ? 0 : pl(function(e) {
                    var t = function(e) {
                            return e ? (e = dl(e)) === hl || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                        }(e),
                        n = t % 1;
                    return t == t ? n ? t - n : t : 0
                }(n), 292)) && fl(t)) {
                var r = (zt(t) + "e").split("e");
                return +((r = (zt(e(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
            }
            return e(t)
        }
    }();

function ml(e) {
    return !isNaN(e)
}

function vl(e) {
    return _l(e, 3)
}

function gl(e) {
    return "webkitDisplayingFullscreen" in e && e.webkitDisplayingFullscreen
}
let yl = 0;

function El(e = "b") {
    return `${e}${++yl}`
}
El(), El();
const Tl = El(),
    Sl = El(),
    bl = El(),
    Al = El(),
    wl = El(),
    Il = El(),
    Rl = Symbol("CONFIG_CHANGED"),
    kl = Symbol("TELECINE_READY"),
    Pl = Symbol("TELECINE_VIDEO_INIT"),
    Dl = Symbol("PLAY_INITIATED"),
    Ol = Symbol("QUALITY_CHANGED"),
    Ll = Symbol("CUE_CHANGED"),
    Cl = Symbol("CAPTIONS_CHANGED"),
    Nl = Symbol("SPATIAL_PLAYBACK_TOGGLED"),
    Ml = Symbol("PICTURE_IN_PICTURE_AVAILABLE_SAFARI"),
    xl = Symbol("HLS_QUALITY_CHANGED"),
    Ul = Symbol("REQUEST_COMPLETE_LIVE_SUBTITLES"),
    Fl = Symbol("COMPLETE_LIVE_SUBTITLES_LOADED"),
    jl = Symbol("COMPLETE_LIVE_SUBTITLES_ERROR");
var Vl = Object.freeze({
    __proto__: null,
    CONFIG_CHANGED: Rl,
    TELECINE_READY: kl,
    TELECINE_VIDEO_INIT: Pl,
    PLAY_INITIATED: Dl,
    QUALITY_CHANGED: Ol,
    CUE_CHANGED: Ll,
    CAPTIONS_CHANGED: Cl,
    SPATIAL_PLAYBACK_TOGGLED: Nl,
    PICTURE_IN_PICTURE_AVAILABLE_SAFARI: Ml,
    HLS_QUALITY_CHANGED: xl,
    REQUEST_COMPLETE_LIVE_SUBTITLES: Ul,
    COMPLETE_LIVE_SUBTITLES_LOADED: Fl,
    COMPLETE_LIVE_SUBTITLES_ERROR: jl
});
const Bl = Symbol("liveeventpending"),
    Hl = Symbol("liveeventactive"),
    Xl = Symbol("liveeventstarting"),
    Wl = Symbol("liveeventstarted"),
    ql = Symbol("liveeventended"),
    Gl = Symbol("livearchivestarted"),
    Kl = Symbol("livearchivedone"),
    Yl = Symbol("livearchiveerror"),
    $l = Symbol("livesettingsupdated"),
    zl = Symbol("lowlatencyfallback"),
    Ql = Symbol("livestatssuccess"),
    Jl = Symbol("livestatsfailure");
var Zl = Object.freeze({
    __proto__: null,
    EVENT_PENDING: Bl,
    EVENT_ACTIVE: Hl,
    EVENT_STARTING: Xl,
    EVENT_STARTED: Wl,
    EVENT_ENDED: ql,
    ARCHIVE_STARTED: Gl,
    ARCHIVE_DONE: Kl,
    ARCHIVE_ERROR: Yl,
    SETTINGS_UPDATED: $l,
    LOW_LATENCY_FALLBACK: zl,
    LIVE_STATS_SUCCESS: Ql,
    LIVE_STATS_FAILURE: Jl
});
g(g(g(g(g(g(g(g({}, Li), xi), Ui), Zl), Fi), Ni), ji), Vl);
const ed = g(g({}, Ui), Zl);

function td(e) {
    var t;
    return (null == e || null == (t = e.archive) ? void 0 : t.status) === rl
}

function nd(e) {
    return (null == e ? void 0 : e.status) === Jc
}

function rd(e) {
    return (null == e ? void 0 : e.status) === el
}

function id(e) {
    return (null == e ? void 0 : e.status) === tl
}

function od(e) {
    return sd(e, "/playlist/refresh")
}

function sd(e, t) {
    var n;
    const r = null == (n = e.request.files.hls) ? void 0 : n.default_cdn,
        {
            signature: i,
            timestamp: o,
            expires: s
        } = e.request;
    return `https://${e.player_url}/live/${e.video.id}${t}?signature=${i}&time=${o}&expires=${s}&cdn=${r}`
}
var ad = Object.prototype.hasOwnProperty;

function ud(e) {
    if (null == e) return !0;
    if (sr(e) && (rt(e) || "string" == typeof e || "function" == typeof e.splice || Vn(e) || Qn(e) || xn(e))) return !e.length;
    var t = Br(e);
    if ("[object Map]" == t || "[object Set]" == t) return !e.size;
    if (tr(e)) return !or(e).length;
    for (var n in e)
        if (ad.call(e, n)) return !1;
    return !0
}

function cd(e) {
    const t = this;
    let n = {};
    const r = {
        get attributes() {
            return Object.assign({}, t)
        },
        get previousAttributes() {
            return n
        },
        clear() {
            i();
            var e = t.attributes;
            for (var n in e) delete t[n]
        },
        set(e) {
            for (var n in i(), e = ai(e)) t[n] = e[n]
        },
        clone: () => new cd(t.attributes),
        toJSON: () => ai(t.attributes)
    };

    function i() {
        ud(t.attributes) || (n = ai(t.attributes))
    }
    return r.set(e), k(t, r)
}

function ld(e, t) {
    const n = new cd(Di(e, t));
    let r = !1;
    return P(n, {
        reset: function(e) {
            return n.clear(),
                function(e) {
                    r = !0, n.set(e), Di(n, t)
                }(e), n
        },
        isNewVideo: function() {
            const e = n.previousAttributes;
            return !r || e.video.id !== n.video.id || e.video.version.current !== n.video.version.current || !!e.video.live_event && !td(e.video.live_event) && (!n.video.live_event || td(n.video.live_event))
        }
    })
}

function dd(e, t, n) {
    return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = dl(n)) == n ? n : 0), void 0 !== t && (t = (t = dl(t)) == t ? t : 0),
        function(e, t, n) {
            return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
        }(dl(e), t, n)
}

function hd(e = [], t = null, n = null) {
    if (!t && !n) return e;
    if (!e.length) return e;
    if (t === n && -1 !== e.indexOf(t)) return [t];
    const r = parseFloat(t),
        i = parseFloat(n);
    if (r && i && i < r) return e;
    const o = e.filter((e => {
        const t = parseFloat(e);
        return !(r && t < r || i && t > i)
    }));
    return o.length ? o : e
}

function fd(e = [], t = null) {
    const n = hd(e, t, t);
    return 1 === n.length ? n[0] : null
}

function pd(e) {
    return e.quality || e.metadata.quality
}

function _d(e, t, n = !1) {
    return n ? md(e, t) : function(e, t) {
        e.embed.settings.audio_tracks || (t = null);
        const n = e.request.files,
            r = Td(n),
            i = Rd(e),
            o = e.request.cookie.quality || i || function(e) {
                const t = Td(e.request.files);
                let n = t.some(wd);
                ie.mobileAndroid && (n = !1);
                let r = "720p";
                if (n) {
                    const e = t.map(pd); - 1 !== e.indexOf("1080p") && -1 === e.indexOf("720p") && (r = "1080p")
                }
                return e.request.cookie.hd || e.video.default_to_hd ? r : "360p"
            }(e);
        let s = function({
            files: e = [],
            preference: t = "360p",
            priorityOffset: n = 0
        }) {
            (e = Array.from(e)).sort(kd());
            const r = e.map(pd);
            if (t) {
                -1 === r.indexOf(t) && (r.push(t), r.sort(((e, t) => Id(t) - Id(e))));
                const e = r.indexOf(t),
                    n = r.splice(0, e);
                n.reverse(), r.push.apply(r, T(n))
            }
            return e.map((e => ({
                id: e.id,
                src: e.url,
                mime: e.mime,
                priority: r.indexOf(e.quality) + 1 + n,
                metadata: {
                    profile: e.profile,
                    cdn: e.cdn,
                    origin: e.origin,
                    quality: e.quality,
                    fps: e.fps
                }
            })))
        }({
            files: r,
            preference: o,
            priorityOffset: 3
        });
        return n.hls && (s = s.concat(yd(e, !1, t)), e.request.drm && ie.browser.webKit) || n.dash && (s = s.concat(Ed(e, !1, t))), s
    }(e, t)
}

function md(e, t) {
    const n = e.request.files;
    let r = [];
    const i = e.request.drm && ie.browser.webKit;
    return (n.hls && (ie.iPhone || ie.iPad) || i) && (r = r.concat(yd(e, !0, t))), n.dash && !i && (r = r.concat(Ed(e, !0, t))), r
}

function vd(e, t = !1, n = !1) {
    let r = e.url;
    if ("avc_url" in e && (r = e.avc_url), t) return r;
    const i = ie.dolbyVision,
        o = ie.hdr && ie.hevc,
        s = ie.hevc;
    return n || (i && "hevc_dvh1_url" in e ? r = e.hevc_dvh1_url : o && "hevc_hdr_url" in e ? r = e.hevc_hdr_url : s && "hevc_sdr_url" in e && (r = e.hevc_sdr_url)), ie.av1 && "av1_url" in e && (r = e.av1_url), r
}

function gd(e) {
    return e.fallback_url
}

function yd(e, t = !1, n = null) {
    var r;
    const i = e.request.files,
        o = i.hls.default_cdn,
        s = e.request.drm,
        a = i.hls.cdns[o],
        u = (null == a || null == (r = a.alternatives) ? void 0 : r[n]) || a,
        c = t ? gd(u) : vd(u, s);
    return {
        id: `hls-${o}-${e.video.id}`,
        src: c,
        mime: zc.hls,
        priority: 3,
        metadata: {
            cdn: o,
            origin: i.hls.cdns[o].origin,
            quality: "sd"
        }
    }
}

function Ed(e, t = !1, n = null) {
    const r = e.request.files;
    return ud(r.dash) ? [] : Object.keys(r.dash.cdns).map((i => {
        var o;
        const s = r.dash.cdns[i],
            a = (null == s || null == (o = s.alternatives) ? void 0 : o[n]) || s,
            u = (ie.browser.chrome || ie.browser.firefox) && e.request.drm,
            c = t ? gd(a) : vd(a, !1, u);
        return {
            id: `dash-${i}-${e.video.id}`,
            src: c,
            mime: e.request.drm ? zc.dashMpd : zc.dash,
            priority: i === r.dash.default_cdn ? 1 : 2,
            metadata: {
                cdn: i,
                origin: r.dash.cdns[i].origin,
                quality: "sd"
            }
        }
    }))
}

function Td(e) {
    if (ud(e.progressive)) return [];
    let t = e.progressive;
    return "progressive_avc" in e && (t = e.progressive_avc), t.filter(bd(t))
}

function Sd(e) {
    if ("number" == typeof e) return e;
    const t = e.split("-");
    return 5 === t.length ? t[0] : parseInt(t[0], 10)
}

function bd(e) {
    const t = e.filter(Ad).map(pd);
    return e => -1 === t.indexOf(pd(e)) || Ad(e)
}

function Ad(e) {
    let t = e.fps;
    return "metadata" in e && (t = e.metadata.fps), t > 30
}

function wd(e) {
    return Id(e) >= 720
}

function Id(e) {
    return "string" != typeof e && (e = pd(e)), parseInt(e, 10)
}

function Rd(e) {
    const t = Td(e.request.files).map((e => e.quality));
    return e.embed.on_site ? null : fd(t, e.embed.quality)
}

function kd(e = "desc") {
    return (t, n) => {
        const r = Id(t),
            i = Pd(t),
            o = Id(n),
            s = Pd(n);
        return "asc" === e ? r - o || i - s : o - r || s - i
    }
}

function Pd(e) {
    return "object" != typeof e ? 0 : "fps" in e ? e.fps : "metadata" in e && "fps" in e.metadata ? e.metadata.fps : 0
}

function Dd(e) {
    const t = e.video.live_event,
        n = e.request.files;
    if (!ud(n.hls)) {
        var r;
        const i = n.hls.default_cdn,
            o = n.hls.cdns[i].json_url || function(e) {
                var t;
                const n = e.dvr,
                    r = e.low_latency;
                var i, o;
                return n ? null == (i = e.playback_urls) ? void 0 : i["akamai-fmp4"].hls_noredirect : r ? null == (o = e.playback_urls) ? void 0 : o["akamai-low-latency"].hls_noredirect : null == (t = e.playback) ? void 0 : t.hls_noredirect
            }(t),
            s = null != (r = e.request.flags) && r.live_dash ? 2 : 1;
        return {
            id: `hls-${i}-${e.video.id}`,
            src: o,
            mime: zc.hlsLive,
            priority: s,
            metadata: {
                cdn: i,
                origin: n.hls.cdns[i].origin,
                quality: "sd"
            }
        }
    }
    return null
}

function Od(e, t) {
    let n = [];
    if (t.video) {
        const i = t.video.currentFile.mime;
        if (i === zc.hlsLive) return t.manifest.video.map((e => g(g({}, e), {}, {
            quality: `${e.height}p`
        })));
        if ([zc.dash, zc.dashMpd].includes(i)) {
            var r;
            const i = !!t.video.drmHandler,
                o = i && "sd-fallback" === t.video.drmHandler.state;
            n = function(e, t = !1) {
                if (!e) return [];
                let n = e.streams;
                "streams_avc" in e && (n = e.streams_avc);
                const r = ie.dolbyVision,
                    i = ie.hevc && ie.hdr,
                    o = ie.hevc;
                return r && "streams_hevc_dvh1" in e ? n = e.streams_hevc_dvh1 : i && "streams_hevc_hdr" in e ? n = e.streams_hevc_hdr : o && "streams_hevc_sdr" in e ? n = e.streams_hevc_sdr : ie.av1 && "streams_av1" in e && (n = e.streams_av1), t && "streams_fallback" in e && (n = e.streams_fallback), n
            }(e.request.files.dash, o), !i && null != t && null != (r = t.currentScanner) && r.manifestLoaded && (n = function(e, t) {
                const n = t.map((e => e.id));
                return e.filter((e => {
                    const t = Sd(e.id);
                    return n.includes(e.id) || n.includes(t)
                }))
            }(n, t.currentScanner.videoStreams))
        } else n = t.video.files.filter((e => "progressive" === Qc[e.mime]))
    }
    return n.filter(bd(n)).sort(kd())
}

function Ld(e) {
    let t = pd(e);
    const n = {
        "1440p": "2K",
        "2160p": "4K",
        "2700p": "5K",
        "3240p": "6K",
        "3780p": "7K",
        "4320p": "8K"
    };
    for (const r in n) t = t.replace(r, n[r]);
    return t
}

function Cd(e) {
    return ie.spatialPlayback && e.video.spatial ? 35 : 75
}

function Nd(e) {
    return e.request.text_tracks.map((e => ({
        id: e.id,
        src: e.url,
        kind: e.kind,
        label: e.label,
        language: e.lang,
        provenance: e.provenance
    })))
}
let Md = {
        captureException(e) {},
        captureMessage(e) {},
        captureBreadcrumb() {}
    },
    xd = Md;
var Ud = {
    set: function(e) {
        xd = Object.assign({}, Md, e)
    },
    captureException: function(e, t) {
        return xd.captureException(e, t)
    },
    captureMessage: function(e, t) {
        return xd.captureMessage(e, t)
    },
    captureBreadcrumb: function(e, t, n = "backbone", r = "info") {
        return xd.captureBreadcrumb(e, t, n, r)
    }
};

function Fd(e, t, n) {
    let r = !1,
        i = !1,
        o = !1,
        s = !0,
        a = "auto";

    function u(e) {
        if (!s && n.buffered && n.buffered.length > 0) {
            e = e || n.currentTime;
            const i = function(e, t) {
                    var n = e.length - 1;
                    if (e.length > 1)
                        for (var r = 0, i = e.length; r < i; r++)
                            if (e.start(r) <= t && e.end(r) >= t) {
                                n = r;
                                break
                            }
                    return n
                }(n.buffered, e),
                s = n.buffered.end(i),
                a = s / n.duration,
                u = n.duration;
            if (t.fire(Li.PROGRESS, {
                    loaded: s,
                    duration: u,
                    loadProgress: a
                }), o && r && s === n.duration) return void(r && n.paused && n.play().catch(Ud.captureException))
        }
    }

    function c(t = []) {
        const r = Od(e, n).reverse().map((e => e.quality)),
            i = t.filter((e => -1 !== r.indexOf(e))).sort(((e, t) => r.indexOf(e) - r.indexOf(t)));
        return i.map((e => r.indexOf(e)))
    }

    function l(e = [], t = null) {
        if (e.includes("auto")) n.video.currentFile.restrictedStreamIndexes = [];
        else {
            const t = c(e);
            t.length && (Ud.captureBreadcrumb(`Switched to ${e[0]}`, {}, "video"), n.video.currentFile.restrictedStreamIndexes = t)
        }
        if (t) {
            const e = c([t]),
                r = e.length ? e[0] : null;
            n._currentScanner.preloadStreamIndex = r
        } else n._currentScanner.preloadStreamIndex = null
    }

    function d() {
        if (e.embed.on_site) return;
        const t = Od(e, n).map((e => e.quality)),
            r = hd(t, e.embed.quality || e.embed.min_quality, e.embed.quality || e.embed.max_quality),
            i = fd(t, e.embed.initial_quality);
        l(r.length && r.length !== t.length ? r : ["auto"], i)
    }
    return t.on(Pl, (function() {
        var t;
        n.playsinline = e.embed.playsinline, n.muted = e.embed.muted, n.lowLatencyMode = null == (t = e.video.live_event) ? void 0 : t.low_latency
    })), t.on(Sl, (function() {
        s = !0, n.paused || n.pause(), i = !1, r = !1, n.currentTime = 0
    })), t.on(bl, (function() {
        n.paused || n.pause(), n.video = null
    })), n.on(Li.PLAY, (function() {
        s = !1, t.fire(Li.PLAY, n.currentTime)
    })), n.on(Li.PAUSE, (function() {
        r = !1, t.fire(Li.PAUSE, n.currentTime, n.ended)
    })), n.on(Li.PLAYING, (function(e) {
        u()
    })), n.on(Li.TIME_UPDATE, (function() {
        if (s) return;
        const {
            currentTime: e,
            liveEdgeTime: r,
            atLiveEdge: i,
            liveTailTime: o,
            atLiveTail: a,
            duration: u,
            playbackRate: c
        } = n, l = e / u;
        t.fire(Li.TIME_UPDATE, {
            currentTime: e,
            liveEdgeTime: r,
            atLiveEdge: i,
            liveTailTime: o,
            atLiveTail: a,
            duration: u,
            playbackRate: c,
            timeProgress: l
        })
    })), n.on(Li.ENDED, (function(e) {
        n.loop ? n.play().catch(Ud.captureException) : (r = !1, t.fire(Li.ENDED, e))
    })), n.on(Li.LOADED_METADATA, (function(t) {
        const r = n.duration;
        if (isFinite(r) && r > 0) {
            if (r < e.video.duration - 1 || r > e.video.duration + 1) return;
            e.video.duration = r
        }
        e.video.video_width = n.videoWidth, e.video.video_height = n.videoHeight
    })), n.on(Li.DURATION_CHANGE, (function(t) {
        const r = n.duration;
        isFinite(r) && (e.video.duration > 0 && (r < e.video.duration - 1 || r > e.video.duration + 1) || (e.video.duration = r))
    })), n.on(Li.PROGRESS, u), n.on(xi.BUFFER_STARTED, (() => {
        o = !0
    })), n.on(xi.BUFFER_ENDED, (() => {
        o = !1
    })), t.on(Tl, (function(t) {
        n.isLive() && 0 === n.liveEdgeTime || (t = dd(t, vl(n.isLive() ? n.liveTailTime : 0), vl(n.isLive() ? n.liveEdgeTime : n.duration || e.video.duration)), n.currentTime = t)
    })), n.on(Li.SEEKING, (function() {
        const e = n.currentTime,
            r = n.duration,
            i = e / r;
        t.fire(Li.SEEKING, {
            currentTime: e,
            duration: r,
            timeProgress: i
        })
    })), n.on(Li.SEEKED, (function() {
        u();
        const e = n.currentTime,
            r = n.duration,
            i = e / r;
        t.fire(Li.SEEKED, {
            currentTime: e,
            duration: r,
            timeProgress: i
        })
    })), n.on(xi.CURRENT_FILE_CHANGE, (function(t) {
        Ud.captureBreadcrumb("Current file changed", {
            id: t.id,
            mime: t.mime,
            src: t.src,
            metadata: t.metadata
        }, "video"), [zc.dash, zc.dashMpd].includes(t.mime) && d(), [zc.hlsLive].includes(t.mime) ? n.once(xi.STREAMS_LOADED, (() => {
            d()
        })) : Rd(e)
    })), n.on(Li.RESIZE, (function() {
        n.video.currentFile.mime === zc.hls && n.videoHeight && t.fire(xl, {
            height: n.videoHeight
        })
    })), {
        play: function() {
            return r = !0, i || (t.fire(Dl), i = !0), n.play()
        },
        pause: function() {
            r = !1, n.pause()
        },
        get quality() {
            return a
        },
        set quality(r) {
            ! function(r) {
                const i = n.video.currentFile.mime;
                if ([zc.dash, zc.dashMpd, zc.hlsLive].includes(i)) l([r]);
                else {
                    const t = Od(e, n).filter((e => e.metadata.quality === r));
                    t.length > 0 && (s = !0, n.video.currentFile = t[0])
                }
                a = r, t.fire(Ol, r)
            }(r)
        }
    }
}

function jd(e, t, n) {
    let r = null;
    ie.spatialPlayback && (t.on(Pl, (function() {
        r && (n.deactivateEffect(Yc), r = null, t.fire(Nl, r));
        const i = e.video.spatial;
        i && (e.request.drm || n.supportsEffect(Yc) && (r = n.activateEffect(Yc, {
            threeUrl: e.request.urls.three_js,
            fps: e.video.fps,
            fieldOfView: i.fov,
            directorTimeline: i.director_timeline,
            projection: i.projection,
            stereoMode: i.stereo_mode,
            initialView: i.initial_view,
            isMobile: ie.android,
            dimensions: e.embed.on_site ? {
                width: 1080,
                height: 540
            } : {
                width: 640,
                height: 360
            },
            keyboardDisabled: !e.embed.keyboard
        }), t.fire(Nl, r)))
    })), n.on(Fi.SPATIAL_UNSUPPORTED, (function() {
        r && (n.deactivateEffect(Yc), r = null, t.fire(Nl, r))
    })))
}

function Vd(e, t, n) {
    let r = null;
    t.on(Pl, (function() {
        r && (n.deactivateEffect(Xc), r = null), e.video.canvas && (e.request.drm || n.supportsEffect(Xc) && (r = n.activateEffect(Xc)))
    }))
}
var Bd = ki((function(e, t, n) {
    Ii(e, t, n)
}));

function Hd(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const Xd = 5e3;

function Wd(e, t) {
    try {
        var n = e()
    } catch (Np) {
        return t(Np)
    }
    return n && n.then ? n.then(void 0, t) : n
}
let qd = function(e) {
    function n(t, n, r, i) {
        var o;
        return (o = e.call(this) || this)._liveEventHasID = de(), o._liveEvent = ai(t), o._sessionUrl = t.session_url || t.sessionUrl, o._subtitleUrl = t.subtitleUrl, o._sessionRefreshUrl = n, o._subtitleRefreshUrl = i, o._appPollUrl = r, o._forcedPoll = !1, o._disabled = !1, o._dvrEnabled = t.dvr, o._setupPolling(), o
    }
    p(n, e);
    var r = n.prototype;
    return r.requestCompleteLiveSubtitles = function() {
        try {
            const e = this;
            return Hd(Wd((function() {
                return Hd(Ke({
                    url: e._subtitleUrl,
                    retry: 3,
                    retryStatus: e => [410].includes(e) || t.retryStatus(e),
                    hooks: {
                        beforeRetry: [e._beforeSubtitleRetry.bind(e)]
                    }
                }).json(), (function(e) {
                    if (null == e || !e.url) throw new Error("No webvtt url was available to fetch");
                    return Hd(Ke(e.url).text(), ac)
                }))
            }), (function(e) {
                throw e
            })))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, r._beforeSubtitleRetry = function(e) {
        try {
            return Hd(this._refreshSubtitleUrl(), (function(t) {
                e.url = t
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, r._refreshSubtitleUrl = function() {
        try {
            const e = this;
            return Hd(Ke(e._subtitleRefreshUrl).json(), (function(t) {
                return e._subtitleUrl = t.url, t.url
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, r.disable = function() {
        this._disabled = !0
    }, r.forcePolling = function() {
        this.isForcePolling || (this._forcedPoll = !0, this._setupPolling())
    }, r.unforcePolling = function() {
        this._forcedPoll = !1
    }, r._setupPolling = function() {
        !1 !== this._liveEvent.polling && (this._liveEvent.id && this._liveEventHasID.resolve(), this._shouldPollApp() ? this._pollApp() : this._shouldPoll() && this._pollLiveApi())
    }, r._shouldPoll = function() {
        var e;
        return !(id(this._liveEvent) && (null == (e = this._liveEvent.archive) ? void 0 : e.status) !== nl || !this.isForcePolling && rd(this._liveEvent))
    }, r._shouldPollApp = function() {
        return !this._sessionUrl || !(!nd(this._liveEvent) || null !== this._liveEvent.id)
    }, r._refreshSessionUrl = function() {
        try {
            const e = this;
            return Hd(Ke(e._sessionRefreshUrl).json(), (function(t) {
                return e._sessionUrl = t.url, t.url
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, r._pollLiveApi = function() {
        try {
            const e = this;
            if (e._disabled) return Hd();
            let n, r = {};
            return ie.browser.ie && (r = {
                Pragma: "no-cache",
                "Cache-Control": "no-cache"
            }), Hd(function(e, t) {
                return e && e.then ? e.then(t) : t()
            }(Wd((function() {
                return Hd(Ke({
                    url: e._sessionUrl,
                    retry: 3,
                    retryStatus: e => [410].includes(e) || t.retryStatus(e),
                    hooks: {
                        beforeRetry: [e._beforeRetry.bind(e)]
                    },
                    headers: r
                }).json(), (function(e) {
                    n = e
                }))
            }), (function() {
                throw new Error(`Hit max retries polling ${e._sessionUrl}`)
            })), (function(t) {
                if (e._dvrEnabled && (n.dvr = e._dvrEnabled), n.status !== e._liveEvent.status) {
                    if (id(n) && "provision_expire" === n.terminate_reason) return e._sessionUrl = null, e._liveEvent.id = null, void setTimeout(e._setupPolling.bind(e), Xd);
                    const t = {
                        [Zc]: ed.EVENT_ACTIVE,
                        [Jc]: ed.EVENT_PENDING,
                        [el]: ed.EVENT_STARTED,
                        [tl]: ed.EVENT_ENDED
                    }[n.status];
                    try {
                        e.fire(t, n)
                    } catch (r) {
                        throw new Error(`Error firing live event status change ${r}`)
                    }
                }
                if (n.archive && (!e._liveEvent.archive || n.archive.status !== e._liveEvent.archive.status)) {
                    const t = {
                        [nl]: ed.ARCHIVE_STARTED,
                        [rl]: ed.ARCHIVE_DONE,
                        [il]: ed.ARCHIVE_ERROR
                    }[n.archive.status];
                    e.fire(t, n)
                }
                e._liveEvent = Bd(e._liveEvent, n), e._shouldPoll() && setTimeout(e._pollLiveApi.bind(e), Xd)
            })))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, r._beforeRetry = function(e) {
        try {
            return Hd(this._refreshSessionUrl(), (function(t) {
                e.url = t
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, r._pollApp = function() {
        try {
            const e = this;
            return e._disabled ? Hd() : Hd(Ke(e._appPollUrl).json(), (function(t) {
                let n = !1;
                return function(r, i) {
                    var o = function() {
                        if (null !== t.ingest.session_id) return e._liveEventHasID.resolve(), e._liveEvent.id = t.ingest.session_id, Hd(e._refreshSessionUrl(), (function() {
                            e._pollLiveApi(), n = !0
                        }))
                    }();
                    return o && o.then ? o.then(i) : i(o)
                }(0, (function(t) {
                    if (n) return t;
                    setTimeout(e._pollApp.bind(e), Xd)
                }))
            }))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }, l(n, [{
        key: "isForcePolling",
        get: function() {
            return this._forcedPoll
        }
    }, {
        key: "liveEventIDReady",
        get: function() {
            return this._liveEventHasID
        }
    }])
}(wn);

function Gd() {}

function Kd(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }
}

function Yd(e, t, n) {
    const r = Kd((function() {
        return function(e) {
            return e && e.then ? e.then(Gd) : Promise.resolve()
        }({
            hive: () => {},
            kollective: () => {}
        }[e.video.ecdn.ecdn_provider]())
    }));
    let i, o, s, a = !1,
        u = 0,
        c = 0;

    function l() {
        o && (o.disable(), o = null)
    }

    function d() {
        n.endLive()
    }
    return t.on(Rl, (function() {
        i && !e.isNewVideo() || (i = !0, l(), e.video.live_event && !td(e.video.live_event) && (function(n) {
            o = new qd(n, function(e) {
                return sd(e, "/session/refresh")
            }(e), function(e) {
                return `https://${e.vimeo_url}/live_event/status?clip_id=${e.video.id}`
            }(e), function(e) {
                return sd(e, "/subtitle/refresh")
            }(e)), o.on(ed.EVENT_ENDED, d), Object.keys(ed).forEach((e => {
                const n = ed[e];
                o.on(n, (e => {
                    t.fire(n, e)
                }))
            })), t.on(Ul, Kd((function() {
                return function(e) {
                    if (e && e.then) return e.then(Gd)
                }(function(e, n) {
                    try {
                        var r = function() {
                            var e;
                            return function(e, t) {
                                return void 0 ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
                            }(null == (e = o) ? void 0 : e.requestCompleteLiveSubtitles(), (function(e) {
                                t.fire(Fl, e)
                            }))
                        }()
                    } catch (Np) {
                        return n()
                    }
                    return r && r.then ? r.then(void 0, n) : r
                }(0, (function(e) {
                    t.fire(jl)
                })))
            })))
        }(e.video.live_event), function() {
            u = 0, c = 0;
            let e = !1;
            n.once(Li.PLAYING, (() => e = !0));
            let r = pe();
            clearInterval(s), s = setInterval((() => {
                n.paused || (u += ve(r) / 1e3), e && a && (c += ve(r) / 1e3),
                    function(e) {
                        if (n.lowLatencyMode && e > 12 && n.latency > 10 && a) {
                            const e = "Rebuffer ratio > 12% and latency > 10s, fallback to normal HLS w/ target latency of 12s.";
                            t.fire(ed.LOW_LATENCY_FALLBACK, {
                                msg: e
                            }), n.lowLatencyMode = !1, n.presentationDelay = 12, n.bufferTarget = 12
                        }
                    }(c / u * 100), r = pe()
            }), 500)
        }()), e.video.ecdn && r())
    })), t.on(bl, (function() {
        l()
    })), n.on(ed.STREAM_ONLINE, (function() {
        o.isForcePolling && o.unforcePolling()
    })), n.on(ed.STREAM_OFFLINE, (function() {
        o.isForcePolling || o.forcePolling()
    })), n.on(xi.BUFFER_STARTED, (function() {
        a = !0
    })), n.on(xi.BUFFER_ENDED, (function() {
        a = !1
    })), {
        get p2pReady() {}
    }
}

function $d(e, t, n) {
    if (n) return t ? t(e()) : e();
    try {
        var r = Promise.resolve(e());
        return t ? r.then(t) : r
    } catch (Np) {
        return Promise.reject(Np)
    }
}

function zd(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function Qd(e, t) {
    try {
        var n = e()
    } catch (Np) {
        return t(Np)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function Jd(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Np) {
            return Promise.reject(Np)
        }
    }
}

function Zd(e, t, n) {
    var r;
    const i = Jd((function() {
            return Qd((function() {
                return $d(m, (function(t) {
                    return t(n, e)
                }))
            }), (function(e) {
                throw Ud.captureException(e), new Error("Failed to create Hive Module", e)
            }))
        })),
        o = Jd((function() {
            return Qd((function() {
                return $d(_, (function(e) {
                    return e(n)
                }))
            }), (function(e) {
                return Ud.captureException(e), null
            }))
        })),
        s = function() {
            return function(e) {
                return e && e.then || (e = Promise.resolve(e)), e
            }(zd((function() {
                if (!u) return $d(o, (function(e) {
                    u = e
                }))
            }), (function() {
                var t;
                return null == (t = u) ? void 0 : t.setUp(e)
            })))
        },
        a = Jd((function() {
            return Qd((function() {
                return zd((function() {
                    if (!c) return $d(i, (function(e) {
                        c = e
                    }))
                }), (function() {
                    var e;
                    return null == (e = c) ? void 0 : e.setUp(d)
                }))
            }), (function(e) {
                var t;
                return null == (t = c) || t.stop(), null
            }))
        }));
    let u, c, l = !1,
        d = !1,
        h = !1;
    const f = null == (r = e.video.ecdn) ? void 0 : r.ecdn_provider;
    let p;

    function _() {
        return import ("./kollective.module.js").then((({
            default: e
        }) => e))
    }

    function m() {
        return import ("./hive.module.js").then((({
            default: e
        }) => e))
    }

    function v() {
        try {
            u && (u.destroy(), u = null), c && (c.destroy(), c = null)
        } catch (e) {}
    }
    return t.on(Rl, (function() {
        var t;
        e.isNewVideo() && (l = !1), !0 !== e.preload || !1 !== h || "kollective" !== f ? l || ((null == (t = e.video.live_event) ? void 0 : t.status) !== Jc ? (l = !0, v(), f && (p = {
            hive: a,
            kollective: s
        }[f]())) : d = !0) : h = !0
    })), t.on(bl, v), {
        get p2pReady() {
            return p
        }
    }
}

function eh(e, t, n) {
    let r = null;

    function i() {
        n.deactivateEffect($c), r = null
    }
    t.on(Dl, (function() {
        var t;
        r && i(), (null == (t = e.video.channel_layout) ? void 0 : t.startsWith("ambisonic")) && n.supportsEffect($c) && (r = n.activateEffect($c, {
            ambisonicsUrl: e.request.urls.ambisonics_js
        }))
    })), n.on(Fi.CAMERA_UPDATE, (function({
        yaw: e,
        pitch: t,
        roll: n
    }) {
        r && r.updateRotation(e, t, n)
    })), n.on(Fi.AMBISONIC_UNSUPPORTED, (function() {
        r && i()
    })), n.on(xi.STREAM_CHANGE, (function() {
        r && r.toggleAmbisonics()
    }))
}

function th(e, t = []) {
    if (!e || "null" === e || 0 === t.length) return {
        track: null
    };
    const [n, r] = e.split("."), [i] = n.split(/[-_]/), o = n !== i, s = t.filter((e => o && e.language === n || e.language === i)).sort(((e, t) => {
        const o = 2 * (e.language === i && e.kind === r) + 2 * (e.language === n) + 1 * (e.kind === r);
        return 2 * (t.language === i && t.kind === r) + 2 * (t.language === n) + 1 * (t.kind === r) - o
    }));
    return s.length > 0 ? {
        track: s[0],
        exactMatch: s[0].language === n && s[0].kind === r
    } : {
        track: null
    }
}

function nh(e) {
    const t = e.split(/\n/g);
    let n = [],
        r = [];
    return t.forEach((e => {
        let t = e.match(/<[a-zA-Z]+ ?.*?>/g) || [],
            i = e.match(/<\/[a-zA-Z]+ ?.*?>/g) || [];
        const o = r.map((({
            startTag: e
        }) => e));
        r = [], t = o.concat(t), t.forEach((e => {
            let [t] = e.replace(/<|>/g, "").split(" ");
            const n = i.indexOf(`</${t}>`); - 1 !== n ? i.splice(n, 1) : r.push({
                startTag: e,
                closeTag: `</${t}>`
            })
        }));
        const s = r.map((({
                closeTag: e
            }) => e)).reverse().join(""),
            a = `${o.join("")}${e}${s}`;
        n.push(a)
    })), n.join("<br>")
}

function rh(e) {
    return e ? e.split(/\n/g).join("↵") : e
}

function ih(e, t) {
    let n;

    function r() {
        return t.pictureInPictureActive || gl(t.videoElement) ? "showing" : "hidden"
    }

    function i() {
        if (0 !== t.video.textTracks.length) {
            if (t.video.textTracks.forEach((e => {
                    e.on("cuechange", o), e.on("modechange", s)
                })), t.video.textTracks.language) {
                const [n] = t.video.textTracks.language.split(/[-_]/), [r] = t.video.textTracks.language.split(/[-_]/);
                if (n !== r) {
                    const n = `${t.video.textTracks.language}.subtitles`,
                        {
                            track: r
                        } = th(n, t.video.textTracks);
                    if (r) return void e.fire(Al, n)
                }
            }
            e.fire(wl)
        } else e.fire(wl)
    }

    function o(t) {
        const n = t.target,
            r = n.activeCues,
            i = [];
        let o;
        for (var s = 0, a = r.length; s < a; s++) "" !== r[s].text.replace(/^\s+|\s+$/gm, "") && (o = document.createElement("span"), o.appendChild(r[s].getCueAsHTML()), i.push({
            html: nh(o.innerHTML),
            text: rh(r[s].text)
        }));
        e.fire(Ll, n, i)
    }

    function s(n) {
        const r = n.target;
        gl(t.videoElement) && "showing" === r.mode && e.fire(Cl, r)
    }
    e.on(Pl, i), e.on(Al, (function(i) {
        if (n && n.id === i) return;
        let o = t.video.textTracks.getTrackById(i),
            s = !0;
        o || ({
            track: o,
            exactMatch: s
        } = th(i, t.video.textTracks)), o !== n && setTimeout((() => {
            t.video && t.video.textTracks.forEach((e => {
                e.mode = e === o ? r() : "disabled"
            })), e.fire(Cl, o, !s), n = o
        }), 0)
    })), e.on(wl, (function() {
        setTimeout((() => {
            t.video && t.video.textTracks.forEach((e => {
                e.mode = "disabled"
            })), e.fire(Ll), n && (n = null, e.fire(Cl, null))
        }), 0)
    })), e.on(xi.TEXT_TRACKS_AVAILABLE, i), e.on([Li.ENTER_PICTURE_IN_PICTURE, Li.LEAVE_PICTURE_IN_PICTURE], (function() {
        ! function(e) {
            n && n.mode !== e && (n.mode = e)
        }(r())
    }))
}
const oh = ["main", "translation"];

function sh(e, t) {
    return Array.from(e).map((e => g(g({}, e), {}, {
        enabled: e.id === t
    })))
}

function ah(e) {
    return Array.from(e).find((e => e.enabled))
}

function uh(e, t) {
    let n = "translation";
    return "1" === e.id ? n = "main" : e.label.includes("(Audio description)") ? n = "descriptions" : e.label.includes("(Commentary)") && (n = "commentary"), e.language === t.language && n === t.kind
}

function ch(e, t, n) {
    let r, i, o, s, a, u;

    function c() {
        var t, n;
        const i = e.video.live_event,
            o = null == i ? void 0 : i.dvr;
        if (nd(i) || function(e) {
                return (null == e ? void 0 : e.status) === Zc
            }(i) || id(i) && !td(i)) return void(r.video = null);
        if (rd(i) && r.video && !e.isNewVideo()) return;
        const s = e.request.audio_tracks || [],
            u = null == (t = ah(s)) ? void 0 : t.id,
            c = "sd-fallback" === (null == (n = r.video) || null == (n = n.drmHandler) ? void 0 : n.state),
            h = rd(i) ? function(e) {
                const t = [],
                    n = Dd(e);
                n && t.push(n);
                const r = function(e) {
                    var t, n;
                    const r = e.video.live_event,
                        i = e.request.files;
                    if (ud(i.dash)) return null;
                    const o = i.dash.default_cdn,
                        s = i.dash.cdns[o].url || (null == (t = r.playback) ? void 0 : t.dash_noredirect),
                        a = null != (n = e.request.flags) && n.live_dash ? 2 : 1;
                    return {
                        id: `dash-${o}-${e.video.id}`,
                        src: s,
                        mime: zc.dashMpd,
                        priority: a,
                        metadata: {
                            cdn: o,
                            origin: i.dash.cdns[o].origin,
                            quality: "sd"
                        }
                    }
                }(e);
                return r && t.push(r), t
            }(e) : _d(e, u, c),
            f = Nd(e);
        var p;
        if (r.video && !e.isNewVideo() && !a && (!o || td(i))) return null == (p = r.video.drmHandler) || p.updateLAUrls(e.request.drm), void l(h, f);
        d({
            files: h,
            textTracks: f,
            audioTracks: s,
            switchingVideo: o,
            startTime: o && r.currentTime
        })
    }

    function l(e, t) {
        e.forEach((e => {
            const t = r.video.files.getFileById(e.id);
            t && t.src !== e.src && (t.src = e.src)
        })), t.forEach((e => {
            const t = r.video.textTracks.getTrackById(e.id);
            t && t.src !== e.src && (t.src = e.src)
        }))
    }

    function d({
        files: i,
        textTracks: a,
        audioTracks: c = [],
        switchingVideo: l = !1,
        startTime: d
    }) {
        var h, f, p, _, m, v;
        const g = e.video.live_event,
            y = n.getBoundingClientRect(),
            E = rd(g) ? Dd(e) : function(e) {
                const t = e.request.files;
                if (!ud(t.hls)) {
                    const e = t.hls.default_cdn,
                        n = t.hls.cdns[e],
                        r = n.captions || n.url;
                    return r ? {
                        src: r,
                        mime: zc.hls,
                        metadata: {
                            cdn: e,
                            origin: n.origin,
                            quality: "sd"
                        }
                    } : null
                }
                return null
            }(e);
        var T;
        u || (u = (null == (T = r.played) ? void 0 : T.length) > 0);
        const S = !r.paused || (null == (h = r._rebufferMonitor) ? void 0 : h._isBuffering);
        r._switchingVideo = l, r.video = {
            id: e.video.id,
            title: e.video.title,
            subtitle: `from ${e.video.owner.name}`,
            files: i,
            textTracks: a,
            audioTracks: c,
            chapters: en(e, "embed.chapters", []),
            duration: e.video.duration,
            externalDisplayFiles: {
                AirPlay: E
            },
            metadata: {
                playlistRefreshUrl: od(e),
                useHls: e.request.drm && ie.browser.webKit,
                drm: e.request.drm,
                drmLaUrlParams: e.request.drm && {
                    atid: e.request.atid,
                    leadUUID: null == (f = e.user.lead) ? void 0 : f.id,
                    playbackRoute: null != (p = e.request.flags) && p.ott ? "player_embed_ott" : "player_embed",
                    playerLocation: e.embed.on_site ? "onsite" : "embed",
                    dnt: null !== (_ = null == (m = e.request.flags) ? void 0 : m.dnt) && void 0 !== _ ? _ : e.embed.dnt,
                    embedContext: e.embed.context,
                    referrer: e.request.referrer
                },
                p2pReady: e.video.ecdn && (null !== (v = o.p2pReady) && void 0 !== v ? v : s.p2pReady),
                percentShown: Yc.frustumSurfaceArea(e.video.spatial.fov, y.width, y.height)
            }
        }, l ? r.checkRebuffer(u, S) : t.fire(Pl), "number" == typeof d && (r.currentTime = d)
    }
    return function() {
            var t, i, o, s, a, u;
            const c = [zu, vc, Tc, rs],
                l = e.video.ecdn && !(null != (t = e.request.flags) && t.ecdn_delta_updates);
            r = new Hc(n, c, {
                externalDisplays: [ko],
                mediaSourceScanner: {
                    droppedFrameSwitchPercent: Cd(e)
                },
                tests: e.request.ab_tests,
                fileCodecs: e.request.file_codecs,
                presentationDelay: e.video.presentation_delay,
                lowLatencyMode: null == (i = e.video.live_event) ? void 0 : i.low_latency,
                dvrEnabled: null == (o = e.video.live_event) ? void 0 : o.dvr,
                disableDeltaUpdates: l,
                getLiveEventStartTimeEpoch: () => function(e) {
                    var t;
                    return null != e && e.started_on ? new Date(e.started_on).getTime() / 1e3 : null == e || null == (t = e.ingest) ? void 0 : t.start_time
                }(e.video.live_event),
                sessionMetadata: {
                    clipId: e.video.id,
                    sessionId: e.request.session
                },
                disableMMS: !(null == (s = e.request.flags) || !s.disable_mms) || !ie.iOS,
                networkInformationApiAB: null == (a = e.request.ab_tests) || null == (a = a.network_information_api) ? void 0 : a.group,
                networkInformationApiStartupAB: null == (u = e.request.ab_tests) || null == (u = u.network_information_startup_api) ? void 0 : u.group
            })
        }(), Object.values(Li).filter((e => ![Li.TIME_UPDATE, Li.PROGRESS, Li.SUSPEND, Li.ERROR].includes(e))).forEach((e => {
            r.on(e, ((t = "") => {
                Ud.captureBreadcrumb(e, t, "video event")
            }))
        })), r.on(xi.STREAMS_LOADED, (function(t) {
            t.video.forEach((t => {
                const n = function(e, t) {
                    return t.find((t => Sd(t.id) === String(e) || Sd(t.id) === Sd(e)))
                }(t.id, Od(e, r));
                n ? (t.profile = n.profile, t.quality = n.quality, t.fps = n.fps) : (t.profile = null, t.quality = `${t.height}p`, t.fps = t.framerate)
            }))
        })), r.on(xi.STREAM_CHANGE, (function({
            index: e,
            streams: n,
            metadata: r
        }) {
            const i = n[e];
            Ud.captureBreadcrumb("Stream changed", i, "video"), t.fire(xi.STREAM_CHANGE, i, e, n, r)
        })), r.on(xi.STREAM_TARGET_CHANGE, (function({
            index: e,
            streams: n
        }) {
            const r = n[e];
            t.fire(xi.STREAM_TARGET_CHANGE, r, e, n)
        })), r.on(xi.DRM_KEY_SWITCH, (function() {
            var t;
            if (!e.request.drm.fallback_asset) return;
            const n = Nd(e),
                i = null == (t = ah(r.video.audioTracks)) ? void 0 : t.id;
            l(md(e, i), n)
        })),
        function(e, t) {
            [Ni.ACTIVATED, Ni.AVAILABLE, Ni.DEACTIVATED, Ni.UNAVAILABLE, Ui.STREAM_OFFLINE, Ui.STREAM_ONLINE, Ui.BUFFER_GAP_JUMP, Ui.BUFFER_GAP_JUMP_PREVENT, Ui.STALL_JUMP, Ui.LATENCY_UPDATED, ji.MEDIASESSION_PAUSE, ji.MEDIASESSION_PLAY, ji.MEDIASESSION_SEEK_BACKWARD, ji.MEDIASESSION_SEEK_FORWARD, ji.MEDIASESSION_SEEK_TO, xi.AUDIO_TRACK_CHANGED, xi.AV_DURATION_MISMATCH, xi.BANDWIDTH, xi.BUFFER_ENDED, xi.BUFFER_OCCUPANCY, xi.BUFFER_STARTED, xi.CHAPTER_CUES_UPDATED, xi.CUE_POINT, xi.CURRENT_FILE_CHANGE, xi.DOWNLOAD_END, xi.DOWNLOAD_TIMEOUT, xi.DRM_AUTH_SUCCESS, xi.DRM_KEY_SWITCH, xi.DROPPED_FRAMES, xi.MANIFEST_LOADED, xi.MANIFEST_TIMEOUT, xi.QUOTA_EXCEEDED_ERROR, xi.SCANNER_CHANGE, xi.STREAM_CHANGE_START, xi.STREAM_BUFFER_END, xi.STREAM_BUFFER_START, xi.AVAILABLE_STREAMS_CHANGED, xi.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, xi.TEXT_TRACKS_AVAILABLE, xi.DROPPED_FRAME_PERCENT_EXCEEDED, xi.LOAD_SEGMENT_FAILED, xi.SEGMENT_CUES_LOADED, Fi.CAMERA_UPDATE, Fi.CAMERA_CHANGE, Fi.MOTION_END, Fi.MOTION_START, Fi.SPATIAL_UNSUPPORTED, Fi.WEBVR_ENTER, Fi.WEBVR_EXIT, Fi.WEBVR_HARDWARE_AVAILABLE, Li.DURATION_CHANGE, Li.ERROR, Li.LOAD_START, Li.LOADED_DATA, Li.LOADED_METADATA, Li.PLAYING, Li.RATE_CHANGE, Li.RESIZE, Li.STALLED, Li.VOLUME_CHANGE, Li.WAITING, Li.ENTER_PICTURE_IN_PICTURE, Li.LEAVE_PICTURE_IN_PICTURE, Li.WEBKIT_BEGIN_FULLSCREEN, Li.WEBKIT_END_FULLSCREEN].forEach((n => {
                e(n, ((...e) => {
                    t.apply(void 0, [n].concat(e))
                }))
            }))
        }(r.on, t.fire), t.fire(kl), new ih(t, r), new jd(e, t, r), new Vd(e, t, r), new eh(e, t, r), o = new Yd(e, t, r), i = new Fd(e, t, r), s = new Zd(e, t, r), t.on(Rl, c), t.on(Il, (function(n) {
            var i, o;
            if (null == (i = e.embed) || null == (i = i.settings) || !i.audio_tracks) return;
            if (r.supportsVideoElementAudioTracks) return void r.enableAudioTrack(null == n ? void 0 : n.id);
            const s = function(e, t = {}) {
                    if (null == e || !e.length) return [];
                    const n = t.language,
                        r = t.kind;
                    let i = null == t ? void 0 : t.id;
                    if (i) return sh(e, i);
                    if (r && n) {
                        const t = e.find((e => e.language === n && e.kind === r));
                        if (i = null == t ? void 0 : t.id, i) return sh(e, i)
                    }
                    if (n) {
                        const t = e.find((e => e.language === n && oh.includes(e.kind)));
                        if (i = null == t ? void 0 : t.id, i) return sh(e, i)
                    }
                    const o = e.find((e => "main" === e.kind));
                    return i = null == o ? void 0 : o.id, sh(e, i)
                }(e.request.audio_tracks, n),
                a = ah(s),
                u = "sd-fallback" === (null == (o = r.video) || null == (o = o.drmHandler) ? void 0 : o.state);
            d({
                files: _d(e, null == a ? void 0 : a.id, u),
                textTracks: r.video.textTracks,
                audioTracks: s,
                switchingVideo: !0,
                startTime: r.currentTime
            }), t.fire(xi.AUDIO_TRACK_CHANGED)
        })), t.on(Li.LOADED_DATA, (function() {
            var t, n;
            if (r.supportsVideoElementAudioTracks && null != e && null != (t = e.request) && null != (t = t.audio_tracks) && t.length && null != (n = r.videoElementAudioTracks) && n.length) {
                const t = ah(e.request.audio_tracks || []),
                    n = function(e, t) {
                        for (let n = 0; n < e.length; n++) {
                            const r = e[n];
                            if (uh(r, t)) return r
                        }
                        return null
                    }(r.videoElementAudioTracks, t);
                n && r.enableAudioTrack(n.id)
            }
        })), ie.browser.safari && window.addEventListener("pageshow", (e => {
            e.persisted && (a = !0, c())
        })), D({
            telecine: r
        }, i)
}

function lh(e, t, n) {
    this.constructorName = "BackboneError", this.message = e, this.name = t, this.source = n
}
lh.prototype = new Error;
var dh = {
    embed: {},
    request: {
        cookie: {},
        files: {},
        flags: {},
        urls: {},
        text_tracks: [],
        file_codecs: {}
    },
    video: {
        owner: {},
        thumbnail_url: "",
        version: {}
    },
    user: {}
};

function hh(e, t) {
    let n;
    const r = new wn;
    let i, o, s = null,
        a = new ld(t, dh);

    function u(e, t) {
        return r.fire(Rl, e, t), e
    }
    const c = {
        play: () => i.play(),
        pause: () => i.pause(),
        get currentTime() {
            return o.currentTime > .1 ? vl(o.currentTime) : 0
        },
        set currentTime(e) {
            if (e = parseFloat(e), isNaN(e) || e < 0) throw new lh("Seconds must be a positive number less than the duration of the video.", "RangeError", "setCurrentTime");
            r.fire(Tl, e)
        },
        get liveEdgeTime() {
            return o.liveEdgeTime
        },
        get atLiveEdge() {
            return o.atLiveEdge
        },
        get liveTailTime() {
            return o.liveTailTime
        },
        get atLiveTail() {
            return o.atLiveTail
        },
        get duration() {
            return vl(a.video.duration)
        },
        get enabledTextTrack() {
            return s
        },
        loadVideo(e) {
            const t = ai(a);
            return a.reset(e), a = u(a, t), this
        },
        reactivate() {
            var e;
            return null != (e = o) && e.reactivate && o.reactivate(), this
        },
        unload() {
            return r.fire(Sl), this
        },
        destroy() {
            return r.fire(bl), this
        },
        on(e, t) {
            return r.on(e, t), this
        },
        once(e, t) {
            return r.once(e, t), this
        },
        off(e, t) {
            return r.off(e, t), this
        },
        get events() {
            return r
        },
        hasTextTrack(e) {
            let t, n, r = this.textTracks;
            if (ml(e)) n = r.getTrackById(e);
            else {
                let n = e.split(".")[0];
                t = r.some((e => e.language.toLowerCase() === n.toLowerCase()))
            }
            return !(!n && !t)
        },
        enableTextTrack(e, t = null) {
            let n, i, a = this.textTracks;
            if (ml(e)) s = a.getTrackById(e);
            else {
                if ([n, i = t] = e.split("."), !this.hasTextTrack(e)) throw new lh(`There are no tracks for “${n.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
                s = th(i ? `${n}.${i}` : n, a).track
            }
            if (!s || i && s.kind !== i) throw new lh(`There are no ${i} tracks for “${n.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            o.setCaptionsShouldDisplay(!0), r.fire(Al, s.id)
        },
        disableTextTrack() {
            s = null, o.setCaptionsShouldDisplay(!1), r.fire(wl)
        },
        enableAudioTrack(e) {
            r.fire(Il, e)
        },
        get qualities() {
            return function(e) {
                var t;
                const n = e.representations.map((t => {
                        const n = pd(t);
                        return {
                            id: n,
                            label: Ld(t),
                            active: e.quality === n
                        }
                    })),
                    r = null == (t = e.video) ? void 0 : t.currentFile.mime;
                return [zc.dash, zc.dashMpd, zc.hlsLive, zc.hls].includes(r) && n.unshift({
                    id: "auto",
                    label: "Auto",
                    active: !e.quality || "auto" === e.quality
                }), n
            }(this)
        },
        get quality() {
            return i.quality
        },
        set quality(e) {
            i.quality = e
        },
        get playbackRate() {
            return o ? o.playbackRate : 1
        },
        set playbackRate(e) {
            o.playbackRate = e, o.defaultPlaybackRate = e
        },
        get textTracks() {
            return o.video ? o.video.textTracks : []
        },
        get representations() {
            return Od(a, o)
        },
        get volume() {
            return o ? o.volume : vl(a.request.cookie.volume)
        },
        set volume(e) {
            if (e = parseFloat(e), isNaN(e) || e < 0 || e > 1) throw new lh("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            o.volume = e
        },
        get videoId() {
            return a.video.id
        },
        get videoWidth() {
            return o.videoWidth || a.video.width
        },
        get videoHeight() {
            return o.videoHeight || a.video.height
        },
        get readyState() {
            return o.videoElement.readyState
        },
        get telecine() {
            return o
        },
        get audioTracks() {
            var e;
            return (null == (e = o) || null == (e = e.video) ? void 0 : e.audioTracks) || []
        },
        get enabledAudioTrack() {
            var e;
            return null == (e = o) || null == (e = e.video) ? void 0 : e.enabledAudioTrack
        },
        requestCompleteLiveSubtitles() {
            r.fire(Ul)
        },
        get hasAudio() {
            var e, t;
            return !(null == (e = o) || null == (e = e.video) || null == (e = e.audioTracks) || !e.length) || !(null == (t = o.manifest) || null == (t = t.audio) || !t.length)
        }
    };
    return a = u(a), i = new ch(a, r, e), o = i.telecine, n = Object.create(o), D(n, c)
}

function fh(e) {
    return "string" == typeof e || !rt(e) && _t(e) && "[object String]" == pt(e)
}

function ph(e) {
    return Math.round(parseInt(e, 16) / 255 * 100) / 100
}

function _h(...e) {
    if (1 === e.length && e[0] instanceof _h) {
        var t = e[0];
        return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this
    }
    if (1 === e.length) {
        if ("string" == typeof e[0] && e[0].indexOf("rgb") >= 0) return this.rgba = function(e) {
            var t = /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)/.exec(e);
            if (!t) throw new Error("Invalid rgb value");
            return {
                red: parseInt(t[1], 10),
                green: parseInt(t[2], 10),
                blue: parseInt(t[3], 10),
                alpha: parseFloat(t[5]) || 1
            }
        }(e[0]), this;
        if (! function(e) {
                return "string" == typeof(e = e.replace("#", "")) && [3, 4, 6, 8].includes(e.length) && !isNaN(parseInt(e, 16))
            }(`${e[0]}`)) throw new Error("Invalid hex value");
        const {
            hex: t,
            alpha: n
        } = function(e) {
            let t = 1;
            return 4 === (e = e.replace("#", "")).length && (t = ph(e.slice(3) + e.slice(3)), e = e.slice(0, 3)), 8 === e.length && (t = ph(e.slice(6, 8)), e = e.slice(0, 6)), {
                hex: e,
                alpha: t
            }
        }(`${e[0]}`);
        return this.hex = t, this.alpha = n, this
    }
    if (3 === e.length || 4 === e.length) {
        for (var n = 0; n < 3; n++)
            if (isNaN(parseInt(e[n], 10)) || parseInt(e[n], 10) < 0 || parseInt(e[n], 10) > 255) throw new Error("Invalid rgb value");
        if (e[3] && parseFloat(e[3]) < 0 || parseFloat(e[3]) > 1) throw new Error("Invalid alpha value");
        return this.rgba = {
            red: e[0],
            green: e[1],
            blue: e[2],
            alpha: parseFloat(e[3]) || 1
        }, this
    }
    throw new Error("Invalid color")
}

function mh() {
    let e = 0,
        t = null,
        n = 0,
        r = !1;

    function i() {
        return e / 1e3
    }
    return {
        trackBufferStart: function(e, i) {
            t = pe(), n++, r = !0, e(i)
        },
        trackBufferEnd: function(n, i = {}) {
            if (!r) return;
            const o = ve(t);
            e += o, i.buffer_duration = o / 1e3, r = !1, n(i)
        },
        trackVideoExit: function(n) {
            r && !n && (e += ve(t))
        },
        resetLastBufferTime: function() {
            t = null
        },
        getBufferRatio: function(e) {
            const t = i() / e * 100;
            return isNaN(t) ? 0 : Math.round(100 * t) / 100
        },
        getBufferCount: function() {
            return n
        },
        getTotalBufferDuration: i,
        isVideoBuffering: function() {
            return r
        }
    }
}
_h.prototype = {
    get complement() {
        var e = this.clone();
        return e.rgb = {
            red: 255 - this.red,
            green: 255 - this.green,
            blue: 255 - this.blue
        }, e
    },
    get hex() {
        return _h.rgbToHex(this.red, this.green, this.blue)
    },
    get hexWithAlpha() {
        const e = ("0" + Math.round(255 * this.alpha).toString(16)).slice(-2);
        return _h.rgbToHex(this.red, this.green, this.blue) + e
    },
    set hex(e) {
        return this.rgba = _h.hexToRgb(e), this
    },
    get hsl() {
        return "hsl(" + this.hue + "," + this.saturation + "%," + Math.round(this.lightness) + "%)"
    },
    set hsl(e) {
        this.hue = e.hue, this.saturation = e.saturation, this.lightness = e.lightness;
        var t = _h.hslToRgb(e.hue, e.saturation, e.lightness);
        return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this
    },
    get luminance() {
        function e(e) {
            return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
        }
        return .2126 * e(this.red / 255) + .7152 * e(this.green / 255) + .0722 * e(this.blue / 255)
    },
    get rgb() {
        return "rgb(" + this.red + "," + this.green + "," + this.blue + ")"
    },
    set rgb(e) {
        return this.rgba = e, this
    },
    get rgba() {
        return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")"
    },
    set rgba(e) {
        this.red = e.red, this.green = e.green, this.blue = e.blue, this.alpha = e.alpha || 1;
        var t = _h.rgbToHsl(e.red, e.green, e.blue);
        return this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this
    },
    get yiq() {
        return (299 * this.red + 587 * this.green + 114 * this.blue) / 1e3
    },
    clone: function() {
        return new _h(this)
    },
    lighten: function(e, t, n) {
        if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness + e
            }, t && n)
            for (var r = n.contrast(this).ratio; r < t && (this.lighten(5), r = n.contrast(this).ratio, !(this.lightness >= 100)););
        return this
    },
    darken: function(e, t, n) {
        if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness - e
            }, t && n)
            for (var r = n.contrast(this).ratio; r < t && (this.darken(5), r = n.contrast(this).ratio, !(this.lightness <= 0)););
        return this
    },
    overlayOn: function(e) {
        if (this.alpha >= 1) return this;
        var t = this.clone();
        return t.rgba = {
            red: t.red * this.alpha + e.red * e.alpha * (1 - this.alpha),
            green: t.green * this.alpha + e.green * e.alpha * (1 - this.alpha),
            blue: t.blue * this.alpha + e.blue * e.alpha * (1 - this.alpha),
            alpha: t.alpha + e.alpha * (1 - this.alpha)
        }, t
    },
    contrast: function(e) {
        var t = this.alpha;
        if (t >= 1) {
            e.alpha < 1 && (e = e.overlayOn(this));
            var n = this.luminance + .05,
                r = e.luminance + .05,
                i = n / r;
            return r > n && (i = 1 / i), {
                ratio: i = Math.round(10 * i) / 10,
                error: 0,
                min: i,
                max: i
            }
        }
        var o = this.overlayOn(_h.white).contrast(e).ratio,
            s = this.overlayOn(_h.black).contrast(e).ratio,
            a = Math.max(o, s),
            u = {
                red: Math.min(Math.max(0, (e.red - this.red * t) / (1 - t)), 255),
                green: Math.min(Math.max(0, (e.green - this.green * t) / (1 - t)), 255),
                blue: Math.min(Math.max(0, (e.blue - this.blue * t) / (1 - t)), 255)
            },
            c = this.clone();
        c.rgb = u;
        var l = this.overlayOn(c).contrast(e).ratio;
        return {
            ratio: Math.round((l + a) / 2 * 10) / 10,
            error: Math.round((a - l) / 2 * 10) / 10,
            min: l,
            max: a,
            closest: c,
            farthest: s === a ? _h.white : _h.black
        }
    },
    wcagAACompliant: function(e) {
        return this.contrast(e).ratio >= 4.5
    },
    wcagAAACompliant: function(e) {
        return this.contrast(e).ratio >= 7
    },
    yiqContrastColor: function() {
        return this.yiq >= 120 ? new _h(0, 0, 0) : new _h(255, 255, 255)
    }
}, _h.hexToRgb = function(e) {
    var t;
    return 3 === (e = String(e)).length || 4 === e.length ? (t = /^#?([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/i.exec(e)) && (t[1] += t[1], t[2] += t[2], t[3] += t[3]) : t = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/i.exec(e), t ? {
        red: parseInt(t[1], 16),
        green: parseInt(t[2], 16),
        blue: parseInt(t[3], 16),
        alpha: 1
    } : null
}, _h.rgbToHex = function(e, t, n) {
    return "#" + ((1 << 24) + (Math.round(e) << 16) + (Math.round(t) << 8) + Math.round(n)).toString(16).slice(1)
}, _h.rgbToHsl = function(e, t, n) {
    e /= 255, t /= 255, n /= 255;
    var r, i = Math.max(e, t, n),
        o = Math.min(e, t, n),
        s = (i + o) / 2,
        a = s;
    if (i === o) return {
        hue: 0,
        saturation: 0,
        lightness: 100 * a
    };
    var u = i - o;
    return r = a > .5 ? u / (2 - i - o) : u / (i + o), i === e ? s = (t - n) / u + (t < n ? 6 : 0) : i === t ? s = (n - e) / u + 2 : i === n && (s = (e - t) / u + 4), s /= 6, {
        hue: Math.round(360 * s),
        saturation: Math.round(100 * r),
        lightness: Math.round(100 * a)
    }
}, _h.hslToRgb = function(e, t, n) {
    function r(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), 6 * n < 1 ? e + 6 * (t - e) * n : 2 * n < 1 ? t : 3 * n < 2 ? e + 6 * (2 / 3 - n) * (t - e) : e
    }
    if (e /= 360, n /= 100, 0 == (t /= 100)) return {
        red: Math.floor(255 * n),
        green: Math.floor(255 * n),
        blue: Math.floor(255 * n)
    };
    var i = n < .5 ? n * (1 + t) : n + t - t * n,
        o = 2 * n - i;
    return {
        red: Math.floor(255 * r(o, i, e + 1 / 3)),
        green: Math.floor(255 * r(o, i, e)),
        blue: Math.floor(255 * r(o, i, e - 1 / 3))
    }
}, _h.hslToHex = function(e, t, n) {
    var r = _h.hslToRgb(e, t, n);
    return _h.rgbToHex(r.red, r.green, r.blue)
}, _h.white = new _h("fff"), _h.black = new _h("000");
const vh = {
    VIDEO_BUFFER_END: "video-buffer-end",
    VIDEO_BUFFER_START: "video-buffer-start",
    VIDEO_ENDED: "video-ended",
    VIDEO_EXIT: "video-exit",
    VIDEO_LOAD_FAILURE: "video-load-failure",
    VIDEO_MINUTE_WATCHED: "video-minute-watched",
    VIDEO_PAUSED: "video-paused",
    VIDEO_PLAYED: "video-played",
    VIDEO_PLAYBACK_ERROR: "video-playback-error",
    VIDEO_READY: "video-ready",
    VIDEO_START_ATTEMPT: "video-start-attempt",
    VIDEO_START_FAILURE: "video-start-failure",
    VIDEO_START_TIME: "video-start-time",
    VIDEO_SEEK: "video-seek",
    VIDEO_SEEKED: "video-seeked",
    CHUNK_DOWNLOADED: "chunk_downloaded"
};

function gh(e) {
    function t(e, t, n = !0, r = "POST") {
        return new Promise(((i, o) => {
            "POST" === r && navigator.sendBeacon ? i({
                status: navigator.sendBeacon(e, t)
            }) : Ke({
                url: e,
                body: t,
                method: r,
                async: n,
                headers: {
                    "Content-Type": "text/plain; charset=UTF-8"
                }
            }).then((e => {
                i({
                    response: e,
                    status: e.status
                })
            })).catch(o)
        }))
    }
    return {
        log: function(n, r = !0, i = !0) {
            i && (n.event_time = n.event_time || pe());
            const o = [n];
            return t(e, JSON.stringify(o), r)
        },
        logRequestPromiseWithUrl: t
    }
}
const yh = "playing";

function Eh(e) {
    let t = 0,
        n = 0,
        r = 0,
        i = 0,
        o = !1,
        s = -1,
        a = null,
        u = null,
        c = null,
        l = {
            satisfied: 0,
            tolerable: 0,
            frustrated: 0
        },
        d = null;

    function h() {
        const t = e.getBoundingClientRect(),
            n = e.videoWidth,
            r = e.videoHeight;
        if (0 === n && 0 === r) return;
        const i = "satisfied";
        let o = i;
        if (t.width > n && t.height > r && (n / t.width < .4 ? o = i : n / t.width < 1 ? o = "tolerable" : n / t.width > 1 && (o = "frustrated")), u) {
            const e = ve(u);
            l[c] += e
        }
        c = o, u = pe()
    }

    function f() {
        return o ? 0 : 1
    }

    function p() {
        return -1 === s ? null : s > 8e3 || -1 === s ? 0 : s > 2e3 ? .5 : 1
    }

    function _() {
        return d ? (i = r / ve(d), t >= 4 || i >= .12 ? 0 : t < 4 && 0 !== t ? i < .12 ? .5 : 0 : 1) : null
    }

    function m() {
        if (-1 === s) return null;
        h();
        const e = Object.keys(l).reduce(((e, t) => l[e] > l[t] ? e : t));
        switch (e) {
            case "satisfied":
                return 1;
            case "tolerable":
                return .5;
            case "frustrated":
                return 0
        }
        return null
    }
    return e.addEventListener(yh, (() => {
        -1 === s && (a = pe())
    })), e.addEventListener("progress", (() => {
        -1 === s && (d = pe(), s = ve(a)), h()
    })), {
        startupTimeScore: p,
        rebufferScore: _,
        failureScore: f,
        videoQualityScore: m,
        overallScore: function() {
            return Math.min(f(), p(), _(), m())
        },
        trackBufferStart: function() {
            -1 !== s && (t++, n = pe())
        },
        trackBufferEnd: function() {
            -1 !== s && (r += ve(n))
        },
        onError: function(e) {
            e.final && (o = !0)
        }
    }
}

function Th(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function Sh(e, t) {
    let n, r, i, o, s, a, u, c, l, d, h, f, p, _, m = 0;

    function v() {
        n = 0, r = 0, i = 0, o = 0, s = 0, a = null, u = 0, c = !1, l = !1, d = null, h = !1, f = new Eh(e), p = new mh, _ = {
            bufferTracker: p,
            videoBufferCheck: () => {
                setInterval((() => {
                    let t = e.currentTime;
                    l && !h && !e.paused && !_.bufferTracker.isVideoBuffering() && t < s + .125 && _.bufferTracker.trackBufferStart(y), l && !e.paused && _.bufferTracker.isVideoBuffering() && t > s + .125 && (_.bufferTracker.trackBufferEnd(E), _.bufferTracker.resetLastBufferTime()), s = t
                }), 250)
            },
            addEventData: e => null,
            playbackSessionTimer: () => {
                let t = pe();
                setInterval((() => {
                    (!e.paused && c || h || _.bufferTracker.isVideoBuffering()) && (u += ve(t) / 1e3), t = pe()
                }), 500)
            },
            customMinuteTracker: {
                shouldCount: () => !1,
                onCount: () => {}
            }
        }
    }

    function g(e, n = {}) {
        0 === m && (n = Object.assign(n, _.addEventData(e)), t(e, n))
    }

    function y(e = {}) {
        f.trackBufferStart(), g(vh.VIDEO_BUFFER_START, e)
    }

    function E(e = {}) {
        f.trackBufferEnd(), g(vh.VIDEO_BUFFER_END, e)
    }
    return v(), g(vh.VIDEO_READY),
        function() {
            let t = Math.ceil(59 * Math.random());
            setInterval((() => {
                var s, a, u;

                function l(e, n) {
                    return 0 === e ? n === t : n >= 60
                }!e.paused && c && (n++, null != (s = _.customMinuteTracker) && null != s.shouldCount && s.shouldCount() && r++, l(i, n) && (n = 0, i++, g(vh.VIDEO_MINUTE_WATCHED)), l(o, r) && null != (a = _.customMinuteTracker) && null != a.shouldCount && a.shouldCount() && (r = 0, o++, null == (u = _.customMinuteTracker) || null == u.onCount || u.onCount(o)))
            }), 1e3)
        }(), window.addEventListener("pagehide", (t => {
            _.bufferTracker.trackVideoExit(e.paused);
            const n = {
                startup: f.startupTimeScore(),
                rebuffer: f.rebufferScore(),
                failure: f.failureScore(),
                quality: f.videoQualityScore(),
                overall: f.overallScore()
            };
            d && g(vh.VIDEO_EXIT, {
                vxs: n
            })
        }), !1), e.addEventListener(yh, (() => {
            c = !0, h || l && g(vh.VIDEO_PLAYED)
        })), e.addEventListener("timeupdate", (() => {
            if (l) return;
            let e = {
                startup_duration: d ? Th(ve(d) / 1e3, 2) : null
            };
            g(vh.VIDEO_START_TIME, e), l = !0
        })), e.addEventListener("pause", (() => {
            c = !1, g(vh.VIDEO_PAUSED)
        })), e.addEventListener("seeking", (() => {
            h || (a = pe(), h = !0, c = !1, g(vh.VIDEO_SEEK))
        })), e.addEventListener("seeked", (() => {
            h = !1, e.paused || (c = !0), g(vh.VIDEO_SEEKED, {
                seek_duration: ve(a) / 1e3
            }), a = null
        })), e.addEventListener("ended", (() => {
            g(vh.VIDEO_ENDED)
        })), e.addEventListener("waiting", (() => {
            c = !1
        })), e.addEventListener("canplay", (() => {
            h || _.bufferTracker.isVideoBuffering() && !c && (_.bufferTracker.trackBufferEnd(E), _.bufferTracker.resetLastBufferTime())
        })), {
            globalProperties: function() {
                return {
                    autoplay: e.autoplay,
                    buffer_count: _.bufferTracker.getBufferCount(),
                    total_buffer_duration: _.bufferTracker.getTotalBufferDuration(),
                    buffer_ratio: _.bufferTracker.getBufferRatio(u),
                    client_time: pe(),
                    is_buffering: _.bufferTracker.isVideoBuffering(),
                    looping: e.loop,
                    minutes_watched: i,
                    network_state: e.networkState,
                    playback_rate: e.playbackRate,
                    player_width: e.getBoundingClientRect().width,
                    player_height: e.getBoundingClientRect().height,
                    session_playback_duration: Th(u, 2),
                    video_time: e.currentTime,
                    video_height: e.videoHeight,
                    video_width: e.videoWidth,
                    volume: Th(e.volume, 2)
                }
            },
            logStartRequest: function() {
                d = pe(), g(vh.VIDEO_START_ATTEMPT)
            },
            customizeHooks: function(e) {
                _ = Object.assign(_, e)
            },
            initHooks: function() {
                _.videoBufferCheck(), _.playbackSessionTimer()
            },
            logBufferStart: y,
            logBufferEnd: E,
            setDisplayContext: function(e) {
                m = e
            },
            handleExternalError: function(e, t) {
                c = !1, f.onError(t), g(l ? vh.VIDEO_PLAYBACK_ERROR : l ? vh.VIDEO_START_FAILURE : vh.VIDEO_LOAD_FAILURE, e)
            },
            reset: v
        }
}
var bh = function() {
        return st.Date.now()
    },
    Ah = Math.max,
    wh = Math.min;

function Ih(e, t, n) {
    var r, i, o, s, a, u, c = 0,
        l = !1,
        d = !1,
        h = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");

    function f(t) {
        var n = r,
            o = i;
        return r = i = void 0, c = t, s = e.apply(o, n)
    }

    function p(e) {
        var n = e - u;
        return void 0 === u || n >= t || n < 0 || d && e - c >= o
    }

    function _() {
        var e = bh();
        if (p(e)) return m(e);
        a = setTimeout(_, function(e) {
            var n = t - (e - u);
            return d ? wh(n, o - (e - c)) : n
        }(e))
    }

    function m(e) {
        return a = void 0, h && r ? f(e) : (r = i = void 0, s)
    }

    function v() {
        var e = bh(),
            n = p(e);
        if (r = arguments, i = this, u = e, n) {
            if (void 0 === a) return function(e) {
                return c = e, a = setTimeout(_, t), l ? f(e) : s
            }(u);
            if (d) return clearTimeout(a), a = setTimeout(_, t), f(u)
        }
        return void 0 === a && (a = setTimeout(_, t)), s
    }
    return t = dl(t) || 0, yt(n) && (l = !!n.leading, o = (d = "maxWait" in n) ? Ah(dl(n.maxWait) || 0, t) : o, h = "trailing" in n ? !!n.trailing : h), v.cancel = function() {
        void 0 !== a && clearTimeout(a), c = 0, r = u = i = a = void 0
    }, v.flush = function() {
        return void 0 === a ? s : m(bh())
    }, v
}

function Rh(e, t, n) {
    var r = !0,
        i = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    return yt(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Ih(e, t, {
        leading: r,
        maxWait: t,
        trailing: i
    })
}
var kh, Ph = 0,
    Dh = 0,
    Oh = {},
    Lh = {};

function Ch(e, t, n) {
    return "_root" == t ? n : e !== n ? function(e) {
        return kh || (kh = e.matches ? e.matches : e.webkitMatchesSelector ? e.webkitMatchesSelector : e.mozMatchesSelector ? e.mozMatchesSelector : e.msMatchesSelector ? e.msMatchesSelector : e.oMatchesSelector ? e.oMatchesSelector : Uh.matchesSelector)
    }(e).call(e, t) ? e : e.parentNode ? (Ph++, Ch(e.parentNode, t, n)) : void 0 : void 0
}

function Nh(e, t, n, r) {
    Oh[e.id] || (Oh[e.id] = {}), Oh[e.id][t] || (Oh[e.id][t] = {}), Oh[e.id][t][n] || (Oh[e.id][t][n] = []), Oh[e.id][t][n].push(r)
}

function Mh(e, t, n, r) {
    if (Oh[e.id])
        if (t)
            if (r || n)
                if (r) {
                    if (Oh[e.id][t][n])
                        for (var i = 0; i < Oh[e.id][t][n].length; i++)
                            if (Oh[e.id][t][n][i] === r) {
                                Oh[e.id][t][n].splice(i, 1);
                                break
                            }
                } else delete Oh[e.id][t][n];
    else Oh[e.id][t] = {};
    else
        for (var o in Oh[e.id]) Oh[e.id].hasOwnProperty(o) && (Oh[e.id][o] = {})
}

function xh(e, t, n, r) {
    if (this.element) {
        e instanceof Array || (e = [e]), n || "function" != typeof t || (n = t, t = "_root");
        var i, o = this.id;
        for (i = 0; i < e.length; i++) r ? Mh(this, e[i], t, n) : (Oh[o] && Oh[o][e[i]] || Uh.addEvent(this, e[i], s(e[i])), Nh(this, e[i], t, n));
        return this
    }

    function s(e) {
        return function(t) {
            ! function(e, t, n) {
                if (Oh[e][n]) {
                    var r, i, o = t.target || t.srcElement,
                        s = {},
                        a = 0,
                        u = 0;
                    for (r in Ph = 0, Oh[e][n]) Oh[e][n].hasOwnProperty(r) && (i = Ch(o, r, Lh[e].element)) && Uh.matchesEvent(n, Lh[e].element, i, "_root" == r, t) && (Ph++, Oh[e][n][r].match = i, s[Ph] = Oh[e][n][r]);
                    for (t.stopPropagation = function() {
                            t.cancelBubble = !0
                        }, a = 0; a <= Ph; a++)
                        if (s[a])
                            for (u = 0; u < s[a].length; u++) {
                                if (!1 === s[a][u].call(s[a].match, t)) return void Uh.cancel(t);
                                if (t.cancelBubble) return
                            }
                }
            }(o, t, e)
        }
    }
}

function Uh(e, t) {
    if (!(this instanceof Uh)) {
        for (var n in Lh)
            if (Lh[n].element === e) return Lh[n];
        return Dh++, Lh[Dh] = new Uh(e, Dh), Lh[Dh]
    }
    this.element = e, this.id = t
}
Uh.prototype.on = function(e, t, n) {
    return xh.call(this, e, t, n)
}, Uh.prototype.off = function(e, t, n) {
    return xh.call(this, e, t, n, !0)
}, Uh.matchesSelector = function() {}, Uh.cancel = function(e) {
    e.preventDefault(), e.stopPropagation()
}, Uh.addEvent = function(e, t, n) {
    var r = "blur" == t || "focus" == t,
        i = ie.passiveEvents ? {
            capture: r,
            passive: !1
        } : r;
    e.element.addEventListener(t, n, i)
}, Uh.matchesEvent = function() {
    return !0
};
const Fh = Uh.addEvent,
    jh = void 0 === window.PointerEvent && void 0 !== window.MSPointerEvent,
    Vh = {
        pointerdown: "MSPointerDown",
        pointerup: "MSPointerUp",
        pointercancel: "MSPointerCancel",
        pointermove: "MSPointerMove",
        pointerenter: "MSPointerEnter",
        pointerleave: "MSPointerLeave",
        pointerover: "MSPointerOver",
        pointerout: "MSPointerOut"
    },
    Bh = "onmspointerenter" in document,
    Hh = "onmspointerleave" in document;
Uh.addEvent = function(e, t, n) {
    jh && Vh[t] && (t = Vh[t]), "transitionend" === t && (Fh(e, "webkitTransitionEnd", n), Fh(e, "otransitionend", n)), "mouseenter" === t && (t = "mouseover"), "mouseleave" === t && (t = "mouseout"), "MSPointerEnter" !== t || Bh || (t = "MSPointerOver"), "MSPointerLeave" !== t || Hh || (t = "MSPointerOut"), Fh(e, t, n)
}, Uh.matchesEvent = function(e, t, n, r, i) {
    return !("mouseenter" === e || "mouseleave" === e || !Bh && "MSPointerEnter" === e || !Hh && "MSPointerLeave" === e) || function(e, t, n, r) {
        return !r.relatedTarget || (!n || e === t) && t !== r.relatedTarget && !t.contains(r.relatedTarget)
    }(t, n, r, i)
};
const Xh = {
    SETUP_DONE: "SETUP_DONE",
    NOT_SETUP: "NOT_SETUP"
};
let Wh = function() {
    function e() {
        this.version = "1.2.36", this.remotePlayer = null, this.remotePlayerController = null, this.CastContextEventType = null, this.RemotePlayerEventType = null, this.CastState = Xh, this.SessionState = null, this.PlayerState = null, this.currentLoadRequestId = null, this.currentLoadingMediaPromise = null
    }
    var t = e.prototype;
    return t.init = function({
        receiverApplicationId: e = "",
        resumeSavedSession: t = !0,
        language: n = null,
        autoJoinPolicy: r = "TAB_AND_ORIGIN_SCOPED"
    } = {}) {
        if (!this.isGCastApiAvailable) throw new Error("CAF is not available. Call setup() first.");
        if ("string" != typeof e || "" === e.trim()) throw new Error("Parameter 'receiverApplicationId' must be valid.");
        switch (r) {
            case chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED:
            case chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED:
            case chrome.cast.AutoJoinPolicy.PAGE_SCOPED:
                break;
            default:
                r = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED
        }
        return this.CastContextEventType = cast.framework.CastContextEventType, this.RemotePlayerEventType = cast.framework.RemotePlayerEventType, this.CastState = Object.assign(this.CastState, cast.framework.CastState), this.SessionState = cast.framework.SessionState, this.PlayerState = chrome.cast.media.PlayerState, cast.framework.CastContext.getInstance().setOptions({
            receiverApplicationId: e.trim(),
            resumeSavedSession: t,
            language: n,
            autoJoinPolicy: r
        }), this.isInitialized ? this.remotePlayerController : this.initRemotePlayer()
    }, t.initRemotePlayer = function() {
        if (!this.isGCastApiAvailable) throw new ReferenceError("CAF is not available. Call setup() first.");
        return this.remotePlayer = new cast.framework.RemotePlayer, this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer), this.remotePlayerController
    }, t.setup = function({
        loadLibrary: e = !0
    } = {}) {
        return new Promise(((t, n) => {
            if (this.isGCastApiAvailable) return this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, void t(!0);
            window.__onGCastApiAvailable = (e, r) => {
                let i;
                r ? (i = new Error(r), n(i)) : chrome.cast ? (this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, t(e)) : (i = new ReferenceError("Cast is not available on this browser."), n(i))
            };
            try {
                if (!1 === e) throw new ReferenceError("Cast is not available. Make sure the library has been loaded.");
                this.loadLibrary() || t(!1)
            } catch (r) {
                const e = new Error(r);
                n(e)
            }
        }))
    }, t.loadLibrary = function() {
        if (this.isGCastApiAvailable) return !0;
        if (null !== window.chrome && void 0 !== window.chrome && "Google Inc." === window.navigator.vendor) {
            let e = "//www.gstatic.com/cv/js/sender/v1/cast_sender.js";
            if (!(document.querySelectorAll('script[src^="' + e + '"]').length > 0)) {
                e += "?loadCastFramework=1";
                const t = document.createElement("script");
                return t.src = e, t.async = !0, t.defer = !0, document.head.appendChild(t), !0
            }
        }
        return !1
    }, t.loadMedia = function({
        contentId: e,
        contentType: t,
        currentTime: n = 0,
        duration: r = 0,
        requestCustomData: i = null,
        mediaCustomData: o = null,
        autoRequest: s = !1,
        tracks: a = [],
        ottCastOptions: u
    }) {
        return e ? this.isSessionEstablished ? this.loadMediaOnSession(this.currentSession, {
            contentId: e,
            contentType: t,
            currentTime: n,
            duration: r,
            requestCustomData: i,
            mediaCustomData: o,
            tracks: a,
            ottCastOptions: u
        }) : !0 !== s ? Promise.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then((s => this.loadMediaOnSession(s, {
            contentId: e,
            contentType: t,
            currentTime: n,
            duration: r,
            requestCustomData: i,
            mediaCustomData: o,
            tracks: a,
            ottCastOptions: u
        }))) : Promise.reject(new TypeError("Option 'contentId' must be valid."))
    }, t.loadMediaOnSession = function(e, {
        contentId: t,
        contentType: n,
        currentTime: r = 0,
        duration: i,
        requestCustomData: o = null,
        mediaCustomData: s = null,
        tracks: a = [],
        ottCastOptions: u
    }) {
        if (e && e instanceof cast.framework.CastSession) {
            const c = e.getSessionState();
            if (c !== this.SessionState.SESSION_STARTING && c !== this.SessionState.SESSION_STARTED && c !== this.SessionState.SESSION_RESUMED) return Promise.reject(new ReferenceError("Session must be established."));
            const l = this.createLoadRequest(t, n, r, i, o, s, a, u);
            return null !== this.currentLoadRequestId && this.currentLoadRequestId === l.requestId || (this.currentLoadRequestId = l.requestId, this.currentLoadingMediaPromise = e.loadMedia(l).finally((() => {
                this.currentLoadRequestId = null, this.currentLoadingMediaPromise = null
            }))), this.currentLoadingMediaPromise
        }
        return Promise.reject(new ReferenceError("Session must be cast.framework.CastSession."))
    }, t.requestSession = function() {
        return this.isSessionEstablished ? Promise.resolve(this.currentSession) : this.castContext ? this.castContext.requestSession().then((() => this.currentSession)) : Promise.reject(new Error("CastContext is not available. Call setup() first."))
    }, t.sendMessage = function({
        namespace: e,
        data: t = {},
        autoRequest: n = !1
    }) {
        return this.isSessionEstablished ? this.sendMessageOnSession(this.currentSession, {
            namespace: e,
            data: t
        }) : !0 !== n ? Promise.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then((n => this.sendMessageOnSession(n, {
            namespace: e,
            data: t
        })))
    }, t.sendMessageOnSession = function(e, {
        namespace: t,
        data: n = {}
    }) {
        if (e || !(e instanceof cast.framework.CastSession)) {
            const r = e.getSessionState();
            return r !== this.SessionState.SESSION_STARTING && r !== this.SessionState.SESSION_STARTED && r !== this.SessionState.SESSION_RESUMED ? Promise.reject(new ReferenceError("Session must be established.")) : e.sendMessage(t, n)
        }
        return Promise.reject(new ReferenceError("Session must be cast.framework.CastSession."))
    }, t.createCastButton = function(e) {
        const t = document.createElement("button", "google-cast-button");
        return e && e.style && (null === e.style["--disconnected-color"] && (e.style["--disconnected-color"] = "#00ADEF"), null === e.style["--connected-color"] && (e.style["--connected-color"] = "#E5E500")), e && Object.keys(e).forEach((n => {
            if ("string" == typeof e[n]) t.setAttribute(n, e[n]);
            else if ("style" === n && "object" == typeof e[n]) {
                let r = "";
                Object.keys(e[n]).forEach((t => {
                    r += t + ":" + e[n][t] + ";"
                })), t.setAttribute(n, r)
            }
        })), t
    }, t.createLoadRequest = function(e, t, n, r, i, o, s, a) {
        const u = a ? new chrome.cast.media.MediaInfo(a.contentId) : new chrome.cast.media.MediaInfo(e.toString(), t);
        u.customData = o, u.duration = r;
        const c = {
            subtitles: chrome.cast.media.TextTrackType.SUBTITLES,
            captions: chrome.cast.media.TextTrackType.CAPTIONS
        };
        u.tracks = s.map((e => {
            const t = new chrome.cast.media.Track(e.id, chrome.cast.media.TrackType.TEXT);
            return t.trackContentId = e.url, t.trackContentType = "text/vtt", t.subtype = c[e.kind], t.name = e.label, t.language = e.lang, t
        }));
        const l = new chrome.cast.media.LoadRequest(u);
        return l.customData = a ? a.customData : i, l.currentTime = n || 0, a && (l.credentials = a.credentials, l.credentialsType = a.credentialsType), l
    }, l(e, [{
        key: "isGCastApiAvailable",
        get: function() {
            return !!("undefined" != typeof cast && cast && cast.framework && cast.framework.VERSION)
        }
    }, {
        key: "castState",
        get: function() {
            return this.castContext ? this.castContext.getCastState() : this.isGCastApiAvailable ? this.CastState.SETUP_DONE : this.CastState.NOT_SETUP
        }
    }, {
        key: "versionGCastApi",
        get: function() {
            return this.isGCastApiAvailable ? cast.framework.VERSION : null
        }
    }, {
        key: "castContext",
        get: function() {
            return this.isGCastApiAvailable ? cast.framework.CastContext.getInstance() : null
        }
    }, {
        key: "currentSession",
        get: function() {
            return this.castContext ? this.castContext.getCurrentSession() : null
        }
    }, {
        key: "currentSessionObj",
        get: function() {
            const e = this.currentSession;
            return e ? e.getSessionObj() : null
        }
    }, {
        key: "isInitialized",
        get: function() {
            return !(!this.isGCastApiAvailable || !this.remotePlayerController)
        }
    }, {
        key: "isSessionEstablished",
        get: function() {
            const e = this.currentSessionObj;
            return !!e && e.status === chrome.cast.SessionStatus.CONNECTED
        }
    }, {
        key: "isCastConnected",
        get: function() {
            return this.castState === this.CastState.CONNECTED
        }
    }])
}();

function qh(e, t) {
    return null == e || e != e ? t : e
}
new Wh;
var Gh = function() {
        if ("undefined" != typeof Map) return Map;

        function e(e, t) {
            var n = -1;
            return e.some((function(e, r) {
                return e[0] === t && (n = r, !0)
            })), n
        }
        return function() {
            function t() {
                this.__entries__ = []
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.get = function(t) {
                var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                return r && r[1]
            }, t.prototype.set = function(t, n) {
                var r = e(this.__entries__, t);
                ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
            }, t.prototype.delete = function(t) {
                var n = this.__entries__,
                    r = e(n, t);
                ~r && n.splice(r, 1)
            }, t.prototype.has = function(t) {
                return !!~e(this.__entries__, t)
            }, t.prototype.clear = function() {
                this.__entries__.splice(0)
            }, t.prototype.forEach = function(e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var i = r[n];
                    e.call(t, i[1], i[0])
                }
            }, t
        }()
    }(),
    Kh = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
    Yh = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
    $h = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Yh) : function(e) {
        return setTimeout((function() {
            return e(Date.now())
        }), 1e3 / 60)
    },
    zh = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    Qh = "undefined" != typeof MutationObserver,
    Jh = function() {
        function e() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e) {
                var t = !1,
                    n = !1,
                    r = 0;

                function i() {
                    t && (t = !1, e()), n && s()
                }

                function o() {
                    $h(i)
                }

                function s() {
                    var e = Date.now();
                    if (t) {
                        if (e - r < 2) return;
                        n = !0
                    } else t = !0, n = !1, setTimeout(o, 20);
                    r = e
                }
                return s
            }(this.refresh.bind(this))
        }
        return e.prototype.addObserver = function(e) {
            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
        }, e.prototype.removeObserver = function(e) {
            var t = this.observers_,
                n = t.indexOf(e);
            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
        }, e.prototype.refresh = function() {
            this.updateObservers_() && this.refresh()
        }, e.prototype.updateObservers_ = function() {
            var e = this.observers_.filter((function(e) {
                return e.gatherActive(), e.hasActive()
            }));
            return e.forEach((function(e) {
                return e.broadcastActive()
            })), e.length > 0
        }, e.prototype.connect_ = function() {
            Kh && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Qh ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, e.prototype.disconnect_ = function() {
            Kh && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, e.prototype.onTransitionEnd_ = function(e) {
            var t = e.propertyName,
                n = void 0 === t ? "" : t;
            zh.some((function(e) {
                return !!~n.indexOf(e)
            })) && this.refresh()
        }, e.getInstance = function() {
            return this.instance_ || (this.instance_ = new e), this.instance_
        }, e.instance_ = null, e
    }(),
    Zh = function(e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(e, i, {
                value: t[i],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return e
    },
    ef = function(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || Yh
    },
    tf = af(0, 0, 0, 0);

function nf(e) {
    return parseFloat(e) || 0
}

function rf(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce((function(t, n) {
        return t + nf(e["border-" + n + "-width"])
    }), 0)
}
var of = "undefined" != typeof SVGGraphicsElement ? function(e) {
    return e instanceof ef(e).SVGGraphicsElement
} : function(e) {
    return e instanceof ef(e).SVGElement && "function" == typeof e.getBBox
};

function sf(e) {
    return Kh ? of (e) ? function(e) {
        var t = e.getBBox();
        return af(0, 0, t.width, t.height)
    }(e) : function(e) {
        var t = e.clientWidth,
            n = e.clientHeight;
        if (!t && !n) return tf;
        var r = ef(e).getComputedStyle(e),
            i = function(e) {
                for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                    var i = r[n],
                        o = e["padding-" + i];
                    t[i] = nf(o)
                }
                return t
            }(r),
            o = i.left + i.right,
            s = i.top + i.bottom,
            a = nf(r.width),
            u = nf(r.height);
        if ("border-box" === r.boxSizing && (Math.round(a + o) !== t && (a -= rf(r, "left", "right") + o), Math.round(u + s) !== n && (u -= rf(r, "top", "bottom") + s)), ! function(e) {
                return e === ef(e).document.documentElement
            }(e)) {
            var c = Math.round(a + o) - t,
                l = Math.round(u + s) - n;
            1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(l) && (u -= l)
        }
        return af(i.left, i.top, a, u)
    }(e) : tf
}

function af(e, t, n, r) {
    return {
        x: e,
        y: t,
        width: n,
        height: r
    }
}
var uf = function() {
        function e(e) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = af(0, 0, 0, 0), this.target = e
        }
        return e.prototype.isActive = function() {
            var e = sf(this.target);
            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        }, e.prototype.broadcastRect = function() {
            var e = this.contentRect_;
            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
        }, e
    }(),
    cf = function(e, t) {
        var n = function(e) {
            var t = e.x,
                n = e.y,
                r = e.width,
                i = e.height,
                o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                s = Object.create(o.prototype);
            return Zh(s, {
                x: t,
                y: n,
                width: r,
                height: i,
                top: n,
                right: t + r,
                bottom: i + n,
                left: t
            }), s
        }(t);
        Zh(this, {
            target: e,
            contentRect: n
        })
    },
    lf = function() {
        function e(e, t, n) {
            if (this.activeObservations_ = [], this.observations_ = new Gh, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
        }
        return e.prototype.observe = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof ef(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) || (t.set(e, new uf(e)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, e.prototype.unobserve = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof ef(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
            }
        }, e.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, e.prototype.gatherActive = function() {
            var e = this;
            this.clearActive(), this.observations_.forEach((function(t) {
                t.isActive() && e.activeObservations_.push(t)
            }))
        }, e.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var e = this.callbackCtx_,
                    t = this.activeObservations_.map((function(e) {
                        return new cf(e.target, e.broadcastRect())
                    }));
                this.callback_.call(e, t, e), this.clearActive()
            }
        }, e.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, e.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }, e
    }(),
    df = "undefined" != typeof WeakMap ? new WeakMap : new Gh,
    hf = function e(t) {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var n = Jh.getInstance(),
            r = new lf(t, n, this);
        df.set(this, r)
    };
["observe", "unobserve", "disconnect"].forEach((function(e) {
    hf.prototype[e] = function() {
        var t;
        return (t = df.get(this))[e].apply(t, arguments)
    }
}));
var ff = void 0 !== Yh.ResizeObserver ? Yh.ResizeObserver : hf;

function pf(e, t, n) {
    this.constructorName = "MessageApiError", this.message = e, this.name = t, this.source = n
}

function _f(e) {
    return e
}

function mf(e) {
    if (!e || "" === e) return {};
    if ("object" == typeof e) return e;
    try {
        return JSON.parse(e)
    } catch (t) {
        return {}
    }
}

function vf(e) {}
pf.prototype = new Error;
let gf = {
        captureException(e) {},
        captureMessage(e) {},
        captureBreadcrumb() {}
    },
    yf = gf;
var Ef = {
    set: function(e) {
        yf = Object.assign({}, gf, e)
    },
    captureException: function(e, t) {
        return yf.captureException(e, t)
    },
    captureMessage: function(e, t) {
        return yf.captureMessage(e, t)
    },
    captureBreadcrumb: function(e, t, n = "backbone", r = "info") {
        return yf.captureBreadcrumb(e, t, n, r)
    }
};

function Tf(e = {
    hidePrivateMethods: !0
}) {
    const t = {},
        n = {},
        r = {
            parseMessage: mf,
            buildMessage: _f,
            logError: vf
        };
    let i, o, s = {};
    const a = {
        get methods() {
            return t
        },
        extendMethods(...e) {
            D.apply(void 0, [t].concat(e))
        },
        get listeners() {
            return s
        },
        set listeners(e) {
            s = e
        },
        emit(e, ...t) {
            u.apply(void 0, [e].concat(t)) && d(c.apply(void 0, [e].concat(t)))
        },
        emitMethodEvent(e, t) {
            d({
                method: e,
                value: t
            })
        },
        filter(e, t) {
            t || "function" != typeof e || (t = e, e = null), e ? function(e, t) {
                n.event = n.event || {}, n.event[e] = n.event[e] || [], n.event[e].push(t)
            }(e, t) : function(e) {
                n.global = n.global || [], n.global.push(e)
            }(t)
        },
        hooks: (...e) => D.apply(void 0, [r].concat(e)),
        configureClient(e, t) {
            i = e, o = t
        },
        tearDown() {
            window.removeEventListener("message", l)
        }
    };

    function u(...e) {
        if (n) {
            let t, r;
            if (n.global && n.global.length)
                for (t = 0; t < n.global.length; t++)
                    if (r = n.global[t], !r.apply(r, e)) return !1;
            let i = e[0];
            if (n.event && n.event[i] && n.event[i].length)
                for (t = 0; t < n.event[i].length; t++)
                    if (r = n.event[i][t], !r.apply(r, e)) return !1
        }
        return !0
    }

    function c(e, ...t) {
        const n = {
            event: e
        };
        return t && void 0 !== t[0] && (n.data = t[0]), n
    }

    function l(n) {
        if (i !== n.source) return;
        let o = r.parseMessage(n.data),
            {
                method: s,
                value: a,
                id: u
            } = o;
        if (!(void 0 === s || "string" != typeof s || e.hidePrivateMethods && s.indexOf("_") > -1)) try {
            let e, i = function(e, t) {
                if (!e) return null;
                let n = Object.getOwnPropertyDescriptor(t, e);
                if (n && "function" == typeof n.value) return n.value;
                if (n && "function" == typeof n.get) return n.get;
                const r = e.substr(0, 3),
                    i = e.substr(3, 1).toLowerCase() + e.substr(4);
                return n = Object.getOwnPropertyDescriptor(t, i), "get" === r && n && "function" == typeof n.get ? n.get : "set" === r && n && "function" == typeof n.set ? n.set : null
            }(s, t);
            if (!i) throw new pf(`“${n}” is not a valid method. Valid methods are: ${function(e){return Object.keys(e).reduce(((t,n)=>{if(n.indexOf("_")>-1)return t;const r=Object.getOwnPropertyDescriptor(e,n);return"function"==typeof r.value?(t.push(n),t):("function"==typeof r.get&&t.push("get"+n.charAt(0).toUpperCase()+n.slice(1)),"function"==typeof r.set&&t.push("set"+n.charAt(0).toUpperCase()+n.slice(1)),t)}),[]).sort()}(t).join(", ")}.`, "TypeError", s);
            Ef.captureBreadcrumb("API message received", o, "api"), e = Array.isArray(a) ? a : null == a ? [] : [a], Promise.resolve(i.call.apply(i, [n].concat(T(e), [u]))).then((e => {
                d({
                    method: s,
                    value: null == e ? a : e
                })
            })).catch(r.logError)
        } catch (c) {
            r.logError(c)
        }
    }

    function d(e) {
        if (o && function(e = window.parent) {
                return !(!window.postMessage || !e.postMessage)
            }(i)) {
            e = r.buildMessage(e);
            try {
                i.postMessage(e, o)
            } catch (t) {}
        }
    }
    return window.addEventListener("message", l, !1), a
}
var Sf = self !== top,
    bf = function() {
        var e = document.createElement("video"),
            t = {
                request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
                exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
                element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
                change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
            },
            n = {};
        for (var r in t)
            for (var i = 0, o = t[r].length; i < o; i++)
                if (t[r][i] in e || t[r][i] in document || "on" + t[r][i].toLowerCase() in document) {
                    n[r] = t[r][i];
                    break
                }
        return n
    }(),
    Af = {
        ENTER: "enter",
        EXIT: "exit",
        CHANGE: "change",
        ERROR: "error"
    },
    wf = [],
    If = {};

function Rf() {
    var e = Array.prototype.slice.apply(arguments),
        t = e.shift();
    If[t].forEach((function(t) {
        "function" == typeof t && t.apply(t, e)
    }))
}

function kf(e) {
    return function(t, n) {
        -1 !== wf.indexOf(t) && e.call(this, t, n)
    }
}

function Pf(e) {
    var t = null;
    if ("VIDEO" === e.tagName) t = e;
    else {
        var n = e.getElementsByTagName("video");
        n[0] && (t = n[0])
    }
    return t
}
Object.keys(Af).forEach((function(e) {
    wf.push(Af[e]), If[Af[e]] = []
}));
var Df = null,
    Of = function() {},
    Lf = [];

function Cf(e) {
    var t = Pf(e);
    if (t && t.webkitEnterFullscreen) {
        try {
            t.readyState < t.HAVE_CURRENT_DATA ? t.addEventListener("loadeddata", (function n() {
                t.removeEventListener("loadeddata", n, !1);
                try {
                    t.webkitEnterFullscreen()
                } catch (r) {
                    return xf("cannot_enter_fullscreen", e)
                }
            }), !1) : t.webkitEnterFullscreen(), Df = t
        } catch (n) {
            return xf("not_supported", e)
        }
        return !0
    }
    return xf(void 0 === bf.request ? "not_supported" : "not_enabled", e)
}
var Nf = function(e) {
        var t = Lf[Lf.length - 1];
        t && (e !== t.element && e !== Df || !t.hasEntered) && ("VIDEO" === e.tagName && (Df = e), 1 === Lf.length && Uf.onenter(Uf.element), t.enter.call(t.element, e || t.element), t.hasEntered = !0, Rf(Af.ENTER, Uf.element))
    },
    Mf = function() {
        Df = null;
        var e = Lf.pop();
        e && (e.exit.call(e.element), Rf(Af.EXIT, e.element), Uf.element || (Lf.forEach((function(e) {
            e.exit.call(e.element), Rf(Af.EXIT, e.element)
        })), Lf = [], Uf.onexit()))
    },
    xf = function(e, t) {
        if (Lf.length > 0) {
            var n = Lf.pop();
            t = t || n.element, n.error.call(t, e), Uf.onerror(t, e), Rf(Af.ERROR, t, e)
        }
    },
    Uf = {
        request: function(e, t, n, r) {
            if (e = e || document.body, Lf.push({
                    element: e,
                    enter: t || Of,
                    exit: n || Of,
                    error: r || Of
                }), void 0 === bf.request) return Cf(e);
            if (Sf && !1 === document[bf.enabled]) return Cf(e);
            try {
                e[bf.request]()
            } catch (i) {
                xf("not_enabled", e)
            }
        },
        exit: function() {
            !document[bf.exit] && Uf.element ? Uf.element[bf.exit]() : document[bf.exit]()
        },
        toggle: function(e, t, n, r) {
            Uf.element ? Uf.exit() : Uf.request(e, t, n, r)
        },
        videoEnabled: function(e) {
            if (Uf.enabled) return !0;
            var t = Pf(e = e || document.body);
            return !(!t || void 0 === t.webkitSupportsFullscreen) && (t.readyState < t.HAVE_METADATA ? "maybe" : t.webkitSupportsFullscreen)
        },
        on: kf((function(e, t) {
            If[e].push(t)
        })),
        off: kf((function(e, t) {
            var n = If[e].indexOf(t);
            n > -1 && If[e].splice(n, 1)
        })),
        onenter: Of,
        onexit: Of,
        onchange: Of,
        onerror: Of
    };
try {
    Object.defineProperties(Uf, {
        element: {
            enumerable: !0,
            get: function() {
                return Df && Df.webkitDisplayingFullscreen ? Df : document[bf.element] || null
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return document[bf.enabled] || !1
            }
        }
    })
} catch (qv) {
    Uf.element = null, Uf.enabled = !1
}

function Ff() {
    return window.parent != window
}
bf.change && document.addEventListener(bf.change, (function(e) {
    if (Uf.onchange(Uf.element), Rf(Af.CHANGE, Uf.element), Uf.element) {
        var t = Lf[Lf.length - 2];
        t && t.element === Uf.element ? Mf() : Nf(Uf.element)
    } else Mf()
}), !1), document.addEventListener("webkitbeginfullscreen", (function(e) {
    var t = !0;
    if (Lf.length > 0)
        for (var n = 0, r = Lf.length; n < r; n++)
            if (Pf(Lf[n].element) === e.srcElement) {
                t = !1;
                break
            }
    t && Lf.push({
        element: e.srcElement,
        enter: Of,
        exit: Of,
        error: Of
    }), Uf.onchange(e.srcElement), Rf(Af.CHANGE, Uf.srcElement), Nf(e.srcElement)
}), !0), document.addEventListener("webkitendfullscreen", (function(e) {
    Uf.onchange(e.srcElement), Rf(Af.CHANGE, e.srcElement), Mf(e.srcElement)
}), !0), bf.error && document.addEventListener(bf.error, (function(e) {
    xf("not_allowed")
}), !1);
var jf = Object.prototype.hasOwnProperty,
    Vf = ki((function(e, t) {
        if (tr(t) || sr(t)) On(t, ar(t), e);
        else
            for (var n in t) jf.call(t, n) && Dn(e, n, t[n])
    })),
    Bf = Hi((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Tracker = void 0;
        var n = function() {
            function e() {}
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "version",
                baseName: "version",
                type: "string"
            }], e
        }();
        t.Tracker = n
    }));
let Hf;
const Xf = new Uint8Array(16);

function Wf() {
    if (!Hf && (Hf = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Hf)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Hf(Xf)
}
var qf = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function Gf(e) {
    return "string" == typeof e && qf.test(e)
}
const Kf = [];
for (let Gv = 0; Gv < 256; ++Gv) Kf.push((Gv + 256).toString(16).slice(1));

function Yf(e, t = 0) {
    return Kf[e[t + 0]] + Kf[e[t + 1]] + Kf[e[t + 2]] + Kf[e[t + 3]] + "-" + Kf[e[t + 4]] + Kf[e[t + 5]] + "-" + Kf[e[t + 6]] + Kf[e[t + 7]] + "-" + Kf[e[t + 8]] + Kf[e[t + 9]] + "-" + Kf[e[t + 10]] + Kf[e[t + 11]] + Kf[e[t + 12]] + Kf[e[t + 13]] + Kf[e[t + 14]] + Kf[e[t + 15]]
}
let $f, zf, Qf = 0,
    Jf = 0;

function Zf(e) {
    if (!Gf(e)) throw TypeError("Invalid UUID");
    let t;
    const n = new Uint8Array(16);
    return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = 255 & t, n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = 255 & t, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, n[9] = 255 & t, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, n[15] = 255 & t, n
}

function ep(e, t, n) {
    function r(e, r, i, o) {
        var s;
        if ("string" == typeof e && (e = function(e) {
                e = unescape(encodeURIComponent(e));
                const t = [];
                for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
                return t
            }(e)), "string" == typeof r && (r = Zf(r)), 16 !== (null === (s = r) || void 0 === s ? void 0 : s.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        let a = new Uint8Array(16 + e.length);
        if (a.set(r), a.set(e, r.length), a = n(a), a[6] = 15 & a[6] | t, a[8] = 63 & a[8] | 128, i) {
            o = o || 0;
            for (let e = 0; e < 16; ++e) i[o + e] = a[e];
            return i
        }
        return Yf(a)
    }
    try {
        r.name = e
    } catch (qv) {}
    return r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", r
}

function tp(e) {
    return 14 + (e + 64 >>> 9 << 4) + 1
}

function np(e, t) {
    const n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
}

function rp(e, t, n, r, i, o) {
    return np(function(e, t) {
        return e << t | e >>> 32 - t
    }(np(np(t, e), np(r, o)), i), n)
}

function ip(e, t, n, r, i, o, s) {
    return rp(t & n | ~t & r, e, t, i, o, s)
}

function op(e, t, n, r, i, o, s) {
    return rp(t & r | n & ~r, e, t, i, o, s)
}

function sp(e, t, n, r, i, o, s) {
    return rp(t ^ n ^ r, e, t, i, o, s)
}

function ap(e, t, n, r, i, o, s) {
    return rp(n ^ (t | ~r), e, t, i, o, s)
}
const up = ep("v3", 48, (function(e) {
    if ("string" == typeof e) {
        const t = unescape(encodeURIComponent(e));
        e = new Uint8Array(t.length);
        for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n)
    }
    return function(e) {
        const t = [],
            n = 32 * e.length,
            r = "0123456789abcdef";
        for (let i = 0; i < n; i += 8) {
            const n = e[i >> 5] >>> i % 32 & 255,
                o = parseInt(r.charAt(n >>> 4 & 15) + r.charAt(15 & n), 16);
            t.push(o)
        }
        return t
    }(function(e, t) {
        e[t >> 5] |= 128 << t % 32, e[tp(t) - 1] = t;
        let n = 1732584193,
            r = -271733879,
            i = -1732584194,
            o = 271733878;
        for (let s = 0; s < e.length; s += 16) {
            const t = n,
                a = r,
                u = i,
                c = o;
            n = ip(n, r, i, o, e[s], 7, -680876936), o = ip(o, n, r, i, e[s + 1], 12, -389564586), i = ip(i, o, n, r, e[s + 2], 17, 606105819), r = ip(r, i, o, n, e[s + 3], 22, -1044525330), n = ip(n, r, i, o, e[s + 4], 7, -176418897), o = ip(o, n, r, i, e[s + 5], 12, 1200080426), i = ip(i, o, n, r, e[s + 6], 17, -1473231341), r = ip(r, i, o, n, e[s + 7], 22, -45705983), n = ip(n, r, i, o, e[s + 8], 7, 1770035416), o = ip(o, n, r, i, e[s + 9], 12, -1958414417), i = ip(i, o, n, r, e[s + 10], 17, -42063), r = ip(r, i, o, n, e[s + 11], 22, -1990404162), n = ip(n, r, i, o, e[s + 12], 7, 1804603682), o = ip(o, n, r, i, e[s + 13], 12, -40341101), i = ip(i, o, n, r, e[s + 14], 17, -1502002290), r = ip(r, i, o, n, e[s + 15], 22, 1236535329), n = op(n, r, i, o, e[s + 1], 5, -165796510), o = op(o, n, r, i, e[s + 6], 9, -1069501632), i = op(i, o, n, r, e[s + 11], 14, 643717713), r = op(r, i, o, n, e[s], 20, -373897302), n = op(n, r, i, o, e[s + 5], 5, -701558691), o = op(o, n, r, i, e[s + 10], 9, 38016083), i = op(i, o, n, r, e[s + 15], 14, -660478335), r = op(r, i, o, n, e[s + 4], 20, -405537848), n = op(n, r, i, o, e[s + 9], 5, 568446438), o = op(o, n, r, i, e[s + 14], 9, -1019803690), i = op(i, o, n, r, e[s + 3], 14, -187363961), r = op(r, i, o, n, e[s + 8], 20, 1163531501), n = op(n, r, i, o, e[s + 13], 5, -1444681467), o = op(o, n, r, i, e[s + 2], 9, -51403784), i = op(i, o, n, r, e[s + 7], 14, 1735328473), r = op(r, i, o, n, e[s + 12], 20, -1926607734), n = sp(n, r, i, o, e[s + 5], 4, -378558), o = sp(o, n, r, i, e[s + 8], 11, -2022574463), i = sp(i, o, n, r, e[s + 11], 16, 1839030562), r = sp(r, i, o, n, e[s + 14], 23, -35309556), n = sp(n, r, i, o, e[s + 1], 4, -1530992060), o = sp(o, n, r, i, e[s + 4], 11, 1272893353), i = sp(i, o, n, r, e[s + 7], 16, -155497632), r = sp(r, i, o, n, e[s + 10], 23, -1094730640), n = sp(n, r, i, o, e[s + 13], 4, 681279174), o = sp(o, n, r, i, e[s], 11, -358537222), i = sp(i, o, n, r, e[s + 3], 16, -722521979), r = sp(r, i, o, n, e[s + 6], 23, 76029189), n = sp(n, r, i, o, e[s + 9], 4, -640364487), o = sp(o, n, r, i, e[s + 12], 11, -421815835), i = sp(i, o, n, r, e[s + 15], 16, 530742520), r = sp(r, i, o, n, e[s + 2], 23, -995338651), n = ap(n, r, i, o, e[s], 6, -198630844), o = ap(o, n, r, i, e[s + 7], 10, 1126891415), i = ap(i, o, n, r, e[s + 14], 15, -1416354905), r = ap(r, i, o, n, e[s + 5], 21, -57434055), n = ap(n, r, i, o, e[s + 12], 6, 1700485571), o = ap(o, n, r, i, e[s + 3], 10, -1894986606), i = ap(i, o, n, r, e[s + 10], 15, -1051523), r = ap(r, i, o, n, e[s + 1], 21, -2054922799), n = ap(n, r, i, o, e[s + 8], 6, 1873313359), o = ap(o, n, r, i, e[s + 15], 10, -30611744), i = ap(i, o, n, r, e[s + 6], 15, -1560198380), r = ap(r, i, o, n, e[s + 13], 21, 1309151649), n = ap(n, r, i, o, e[s + 4], 6, -145523070), o = ap(o, n, r, i, e[s + 11], 10, -1120210379), i = ap(i, o, n, r, e[s + 2], 15, 718787259), r = ap(r, i, o, n, e[s + 9], 21, -343485551), n = np(n, t), r = np(r, a), i = np(i, u), o = np(o, c)
        }
        return [n, r, i, o]
    }(function(e) {
        if (0 === e.length) return [];
        const t = 8 * e.length,
            n = new Uint32Array(tp(t));
        for (let r = 0; r < t; r += 8) n[r >> 5] |= (255 & e[r / 8]) << r % 32;
        return n
    }(e), 8 * e.length))
}));
var cp = {
    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
};

function lp(e, t, n, r) {
    switch (e) {
        case 0:
            return t & n ^ ~t & r;
        case 1:
        case 3:
            return t ^ n ^ r;
        case 2:
            return t & n ^ t & r ^ n & r
    }
}

function dp(e, t) {
    return e << t | e >>> 32 - t
}
const hp = ep("v5", 80, (function(e) {
    const t = [1518500249, 1859775393, 2400959708, 3395469782],
        n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if ("string" == typeof e) {
        const t = unescape(encodeURIComponent(e));
        e = [];
        for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n))
    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
    e.push(128);
    const r = e.length / 4 + 2,
        i = Math.ceil(r / 16),
        o = new Array(i);
    for (let s = 0; s < i; ++s) {
        const t = new Uint32Array(16);
        for (let n = 0; n < 16; ++n) t[n] = e[64 * s + 4 * n] << 24 | e[64 * s + 4 * n + 1] << 16 | e[64 * s + 4 * n + 2] << 8 | e[64 * s + 4 * n + 3];
        o[s] = t
    }
    o[i - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), o[i - 1][14] = Math.floor(o[i - 1][14]), o[i - 1][15] = 8 * (e.length - 1) & 4294967295;
    for (let s = 0; s < i; ++s) {
        const e = new Uint32Array(80);
        for (let t = 0; t < 16; ++t) e[t] = o[s][t];
        for (let t = 16; t < 80; ++t) e[t] = dp(e[t - 3] ^ e[t - 8] ^ e[t - 14] ^ e[t - 16], 1);
        let r = n[0],
            i = n[1],
            a = n[2],
            u = n[3],
            c = n[4];
        for (let n = 0; n < 80; ++n) {
            const o = Math.floor(n / 20),
                s = dp(r, 5) + lp(o, i, a, u) + c + t[o] + e[n] >>> 0;
            c = u, u = a, a = dp(i, 30) >>> 0, i = r, r = s
        }
        n[0] = n[0] + r >>> 0, n[1] = n[1] + i >>> 0, n[2] = n[2] + a >>> 0, n[3] = n[3] + u >>> 0, n[4] = n[4] + c >>> 0
    }
    return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
}));
var fp = Object.freeze({
        __proto__: null,
        v1: function(e, t, n) {
            let r = t && n || 0;
            const i = t || new Array(16);
            let o = (e = e || {}).node || $f,
                s = void 0 !== e.clockseq ? e.clockseq : zf;
            if (null == o || null == s) {
                const t = e.random || (e.rng || Wf)();
                null == o && (o = $f = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]), null == s && (s = zf = 16383 & (t[6] << 8 | t[7]))
            }
            let a = void 0 !== e.msecs ? e.msecs : Date.now(),
                u = void 0 !== e.nsecs ? e.nsecs : Jf + 1;
            const c = a - Qf + (u - Jf) / 1e4;
            if (c < 0 && void 0 === e.clockseq && (s = s + 1 & 16383), (c < 0 || a > Qf) && void 0 === e.nsecs && (u = 0), u >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            Qf = a, Jf = u, zf = s, a += 122192928e5;
            const l = (1e4 * (268435455 & a) + u) % 4294967296;
            i[r++] = l >>> 24 & 255, i[r++] = l >>> 16 & 255, i[r++] = l >>> 8 & 255, i[r++] = 255 & l;
            const d = a / 4294967296 * 1e4 & 268435455;
            i[r++] = d >>> 8 & 255, i[r++] = 255 & d, i[r++] = d >>> 24 & 15 | 16, i[r++] = d >>> 16 & 255, i[r++] = s >>> 8 | 128, i[r++] = 255 & s;
            for (let h = 0; h < 6; ++h) i[r + h] = o[h];
            return t || Yf(i)
        },
        v3: up,
        v4: function(e, t, n) {
            if (cp.randomUUID && !t && !e) return cp.randomUUID();
            const r = (e = e || {}).random || (e.rng || Wf)();
            if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
                n = n || 0;
                for (let e = 0; e < 16; ++e) t[n + e] = r[e];
                return t
            }
            return Yf(r)
        },
        v5: hp,
        NIL: "00000000-0000-0000-0000-000000000000",
        version: function(e) {
            if (!Gf(e)) throw TypeError("Invalid UUID");
            return parseInt(e.slice(14, 15), 16)
        },
        validate: Gf,
        stringify: function(e, t = 0) {
            const n = Yf(e, t);
            if (!Gf(n)) throw TypeError("Stringified UUID is invalid");
            return n
        },
        parse: Zf
    }),
    pp = function(e) {
        return e && e.default || e
    }(fp),
    _p = Hi((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Envelope = void 0;
        var n = function() {
            function e(e, t) {
                this.event = e, this.eid = (0, pp.v4)(), this.ts_ms = Date.now(), this.created_at = Date.now(), this._tracker = new Bf.Tracker, this._globalBPO = t
            }
            return Object.defineProperty(e.prototype, "tracker", {
                get: function() {
                    return this._tracker
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "global", {
                get: function() {
                    return this._globalBPO
                },
                enumerable: !1,
                configurable: !0
            }), e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "eid",
                baseName: "eid",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "created_at",
                baseName: "created_at",
                type: "number"
            }, {
                name: "event",
                baseName: "event",
                type: "Event"
            }, {
                name: "global",
                baseName: "global",
                type: "Event"
            }, {
                name: "tracker",
                baseName: "tracker",
                type: "Tracker"
            }], e
        }();
        t.Envelope = n
    })),
    mp = Hi((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Event = void 0;
        var n = function() {
            function e(e, t, n) {
                this.name = e, this.ts_ms = Date.now(), this.version = t, this.fields = n
            }
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "version",
                baseName: "version",
                type: "number"
            }, {
                name: "fields",
                baseName: "fields",
                type: "object"
            }], e
        }();
        t.Event = n
    })),
    vp = Hi((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EventContext = void 0;
        var n = function() {
            function e(e, t, n) {
                this.name = e, this.ts_ms = Date.now(), this.version = t, this.fields = n
            }
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "version",
                baseName: "version",
                type: "number"
            }, {
                name: "fields",
                baseName: "fields",
                type: "object"
            }], e
        }();
        t.EventContext = n
    })),
    gp = Hi((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GlobalContext = void 0;
        t.GlobalContext = function(e, t, n) {
            this.name = e, this.ts_ms = Date.now(), this.version = t, this.fields = n
        }
    })),
    yp = Hi((function(e, t) {
        var n = Bi && Bi.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, i)
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            r = Bi && Bi.__exportStar || function(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ObjectSerializer = void 0, r(_p, t), r(mp, t), r(vp, t), r(Bf, t), r(gp, t);
        var i = mp,
            o = vp,
            s = Bf,
            a = ["string", "boolean", "double", "integer", "long", "float", "number", "any"],
            u = {},
            c = {
                Envelope: _p.Envelope,
                Event: i.Event,
                Tracker: s.Tracker,
                EventContext: o.EventContext
            },
            l = function() {
                function e() {}
                return e.findCorrectType = function(e, t) {
                    if (null == e) return t;
                    if (-1 !== a.indexOf(t.toLowerCase())) return t;
                    if ("Date" === t) return t;
                    if (u[t]) return t;
                    if (!c[t]) return t;
                    var n = c[t].discriminator;
                    if (null == n) return t;
                    if (e[n]) {
                        var r = e[n];
                        return c[r] ? r : t
                    }
                    return t
                }, e.serialize = function(t, n) {
                    if (null == t) return t;
                    if (-1 !== a.indexOf(n.toLowerCase())) return t;
                    if (0 === n.lastIndexOf("Array<", 0)) {
                        var r = n.replace("Array<", "");
                        r = r.substring(0, r.length - 1);
                        var i = [];
                        for (var o in t) {
                            var s = t[o];
                            i.push(e.serialize(s, r))
                        }
                        return i
                    }
                    if ("Date" === n) return t.toISOString();
                    if (u[n]) return t;
                    if (!c[n]) return t;
                    n = this.findCorrectType(t, n);
                    var l = c[n].getAttributeTypeMap(),
                        d = {};
                    for (var o in l) {
                        var h = l[o];
                        d[h.baseName] = e.serialize(t[h.name], h.type)
                    }
                    return d
                }, e.deserialize = function(t, n) {
                    if (n = e.findCorrectType(t, n), null == t) return t;
                    if (-1 !== a.indexOf(n.toLowerCase())) return t;
                    if (0 === n.lastIndexOf("Array<", 0)) {
                        var r = n.replace("Array<", "");
                        r = r.substring(0, r.length - 1);
                        var i = [];
                        for (var o in t) {
                            var s = t[o];
                            i.push(e.deserialize(s, r))
                        }
                        return i
                    }
                    if ("Date" === n) return new Date(t);
                    if (u[n]) return t;
                    if (!c[n]) return t;
                    var l = new c[n],
                        d = c[n].getAttributeTypeMap();
                    for (var o in d) {
                        var h = d[o];
                        l[h.name] = e.deserialize(t[h.baseName], h.type)
                    }
                    return l
                }, e
            }();
        t.ObjectSerializer = l
    })),
    Ep = Hi((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.formatRequestEvent = t.parseJwt = t.getCookie = void 0, t.getCookie = function(e) {
            if ("undefined" == typeof document) return null;
            var t = document.cookie.match(new RegExp("(;\\s)?".concat(e, "=")));
            if (!t || 0 == t.length || void 0 === t.index) return null;
            var n = document.cookie.indexOf(";", t.index + 1),
                r = t.index + t[0].length,
                i = -1 === n ? document.cookie.substr(r) : document.cookie.substring(r, n);
            return decodeURIComponent(i)
        }, t.parseJwt = function(e) {
            var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
                n = decodeURIComponent(atob(t).split("").map((function(e) {
                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                })).join(""));
            return JSON.parse(n)
        }, t.formatRequestEvent = function(e) {
            var t = e.split(".");
            if (t.length <= 2) return e;
            var n = t.pop();
            return "".concat(t.join("_"), ".").concat(n)
        }
    })),
    Tp = Hi((function(e, t) {
        var n, r = Bi && Bi.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            u(r.next(e))
                        } catch (Np) {
                            o(Np)
                        }
                    }

                    function a(e) {
                        try {
                            u(r.throw(e))
                        } catch (Np) {
                            o(Np)
                        }
                    }

                    function u(e) {
                        e.done ? i(e.value) : function(e) {
                            return e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))
                        }(e.value).then(s, a)
                    }
                    u((r = r.apply(e, t || [])).next())
                }))
            },
            i = Bi && Bi.__generator || function(e, t) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(a) {
                    return function(u) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = t.call(e, s)
                            } catch (Np) {
                                a = [6, Np], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, u])
                    }
                }
            },
            o = Bi && Bi.__values || function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            s = Bi && Bi.__read || function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                } catch (a) {
                    i = {
                        error: a
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            };
        Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BigPictureClient = t.Configuration = t.Service = void 0,
            function(e) {
                e.FRESNEL_PROD = "https://fresnel-events.vimeocdn.com", e.FRESNEL_PROD_CN = "https://fresnel-events.videoji.cn", e.FRESNEL_DEV = "https://fresnel-event-staging.vimeows.com", e.EVENTS_PROD = "https://lensflare.vimeo.com"
            }(n = t.Service || (t.Service = {}));
        var a = function(e, t, n, r) {
            void 0 === t && (t = null), void 0 === n && (n = null), void 0 === r && (r = ""), this.service = e, this.globalBPO = t, this.contexts = n, this.endpoint = r
        };
        t.Configuration = a;
        var u = function() {
            function e() {}
            return Object.defineProperty(e, "isInitalized", {
                get: function() {
                    return Boolean(e.conf.globalBPO)
                },
                enumerable: !1,
                configurable: !0
            }), e.configure = function(t) {
                e.conf = t, e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE.map((function(t) {
                    var n = t.event,
                        r = t.contexts;
                    r ? e.sendEventWithContexts(n, r) : e.sendEvent(n)
                })), e.WAIT_QUEUE = [])
            }, e.updateObject = function(t, n) {
                return r(this, void 0, void 0, (function() {
                    var r, a, u, c, l, d, h;
                    return i(this, (function(i) {
                        try {
                            for (r = o(Object.entries(t)), a = r.next(); !a.done; a = r.next())
                                if (u = s(a.value, 2), c = u[0], l = u[1], c in n) {
                                    if (l instanceof Object) return n[c] instanceof Object ? (e.updateObject(l, n[c]), [2]) : (n[c] = l, [2]);
                                    n[c] = l
                                }
                        } catch (f) {
                            d = {
                                error: f
                            }
                        } finally {
                            try {
                                a && !a.done && (h = r.return) && h.call(r)
                            } finally {
                                if (d) throw d.error
                            }
                        }
                        return [2]
                    }))
                }))
            }, e.updateContext = function(t) {
                return r(this, void 0, void 0, (function() {
                    return i(this, (function(n) {
                        return "global" == t.context && e.conf.globalBPO && e.updateObject(t.fields, e.conf.globalBPO.fields), [2]
                    }))
                }))
            }, e.sendEvent = function(t, n) {
                return r(this, void 0, void 0, (function() {
                    var r, o, s, a, u, c;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null == t) throw new Error("Required parameter event was null or undefined when calling sendEvent.");
                                return e.isInitalized ? (r = JSON.stringify(yp.ObjectSerializer.serialize([new _p.Envelope(t, this.conf.globalBPO)], "Array<Envelope>")), o = (0, Ep.formatRequestEvent)(t.name), s = "" !== this.conf.endpoint ? this.conf.endpoint : this.conf.service, a = "".concat(s, "/add/").concat(encodeURIComponent(o)), navigator.sendBeacon && !n ? [3, 2] : (u = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "User-Agent": navigator.userAgent,
                                        Origin: location.origin,
                                        Referer: document.referrer
                                    },
                                    body: r
                                }, n && (u.headers.Authorization = n), [4, fetch(a, u)])) : (e.WAIT_QUEUE.push({
                                    event: t
                                }), e.waitAndFlushQueue(), [2]);
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                c = new Blob([r]), navigator.sendBeacon(a, c), i.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.sendEventWithContexts = function(t, n, a) {
                return r(this, void 0, void 0, (function() {
                    var r, u, c, l, d, h, f, p, _, m, v, g, y, E, T, S;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null == t) throw new Error("Required parameter event was null or undefined when calling sendEvent.");
                                if (!e.isInitalized) return e.WAIT_QUEUE.push({
                                    event: t,
                                    contexts: n
                                }), e.waitAndFlushQueue(), [2];
                                r = new _p.Envelope(t, this.conf.globalBPO), (u = yp.ObjectSerializer.serialize([r], "Array<Envelope>"))[0].contexts = {};
                                try {
                                    for (c = o(Object.entries(n)), l = c.next(); !l.done; l = c.next()) d = s(l.value, 2), h = d[0], f = d[1], p = yp.ObjectSerializer.serialize(f, "EventContext"), u[0].contexts[h] = p
                                } catch (b) {
                                    T = {
                                        error: b
                                    }
                                } finally {
                                    try {
                                        l && !l.done && (S = c.return) && S.call(c)
                                    } finally {
                                        if (T) throw T.error
                                    }
                                }
                                return _ = JSON.stringify(u), m = (0, Ep.formatRequestEvent)(t.name), v = "" !== this.conf.endpoint ? this.conf.endpoint : this.conf.service, g = "".concat(v, "/add/").concat(encodeURIComponent(m)), navigator.sendBeacon && !a ? [3, 2] : (y = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "User-Agent": navigator.userAgent,
                                        Origin: location.origin,
                                        Referer: document.referrer
                                    },
                                    body: _
                                }, a && (y.headers.Authorization = a), [4, fetch(g, y)]);
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                E = new Blob([_]), navigator.sendBeacon(g, E), i.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.waitAndFlushQueue = function() {
                e.flushQueueTimeoutHandler || (e.flushQueueTimeoutHandler = setTimeout((function() {
                    e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE = [])
                }), e.FLUSH_QUEUE_TIMEOUT))
            }, e.FLUSH_QUEUE_TIMEOUT = 1e4, e.conf = new a(n.FRESNEL_PROD), e.WAIT_QUEUE = [], e
        }();
        t.BigPictureClient = u
    })),
    Sp = Hi((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })),
    bp = Hi((function(e, t) {
        var n = Bi && Bi.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, i)
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            r = Bi && Bi.__exportStar || function(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r(Tp, t), r(yp, t), r(Sp, t)
    }));
const Ap = function(e) {
        return (t, ...n) => (n.forEach((n => {
            for (const r in n) {
                const i = Object.getOwnPropertyDescriptor(n, r);
                Object.defineProperty(t, r, Object.assign(i, e))
            }
        })), t)
    }({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    }),
    wp = {
        AD_BUFFERING: "ad-buffering",
        AD_COMPLETE: "ad-complete",
        AD_CLICK: "ad-click",
        AD_SKIPPED: "ad-skipped",
        ALL_ADS_COMPLETED: "all-ads-completed",
        AD_ERROR: "ad-error",
        AD_STARTED: "ad-started",
        ADS_MANAGER_LOADED: "ads-manager-loaded",
        CONTENT_PAUSE_REQUESTED: "content-pause-requested",
        CONTENT_RESUME_REQUESTED: "content-resume-requested"
    };

function Ip(e, t) {
    const n = new wn;
    let r, i, o, s, a, u, c = !1,
        l = 1,
        d = !1;

    function h() {
        return ie.iOS ? t.videoPlayer.videoElement : t.videoPlayer
    }

    function f() {
        s = new u.AdsRequest, t.adUrl && (s.adTagUrl = t.adUrl), s.linearAdSlotWidth = t.width.linear, s.linearAdSlotHeight = t.height.linear, s.nonLinearAdSlotWidth = t.width.nonlinear, s.nonLinearAdSlotHeight = t.height.nonlinear, s.setAdWillAutoPlay(t.autoplay), s.setAdWillPlayMuted(t.muted), i.requestAds(s)
    }

    function p(e) {
        const t = new u.AdsRenderingSettings;
        t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.uiElements = [], t.enablePreloading = !0, o = e.getAdsManager(h(), t);
        const r = d && a ? 0 : 1;
        o.setVolume(r), n.fire(wp.ADS_MANAGER_LOADED), o.addEventListener(u.AdErrorEvent.Type.AD_ERROR, R), o.addEventListener(u.AdEvent.Type.CONTENT_PAUSE_REQUESTED, y), o.addEventListener(u.AdEvent.Type.CONTENT_RESUME_REQUESTED, E), o.addEventListener(u.AdEvent.Type.AD_BUFFERING, T), o.addEventListener(u.AdEvent.Type.STARTED, S), o.addEventListener(u.AdEvent.Type.COMPLETE, b), o.addEventListener(u.AdEvent.Type.CLICK, A), o.addEventListener(u.AdEvent.Type.SKIPPED, w), o.addEventListener(u.AdEvent.Type.ALL_ADS_COMPLETED, I)
    }

    function _() {
        t.videoPlayer.pause(), d = !0, a = !1, f()
    }

    function m() {
        t.videoPlayer.volume = 0, t.videoPlayer.muted = !0;
        const e = t.videoPlayer.play();
        void 0 !== e && e.then(v).catch(g)
    }

    function v() {
        t.videoPlayer.pause(), d = !0, a = !0, f()
    }

    function g() {
        t.videoPlayer.volume = 1, t.videoPlayer.muted = !1, d = !1, a = !1, f()
    }

    function y(e) {
        n.fire(wp.CONTENT_PAUSE_REQUESTED, e)
    }

    function E(e) {
        n.fire(wp.CONTENT_RESUME_REQUESTED, e)
    }

    function T(e) {
        n.fire(wp.AD_BUFFERING, e)
    }

    function S(e) {
        n.fire(wp.AD_STARTED, e)
    }

    function b(e) {
        n.fire(wp.AD_COMPLETE, e)
    }

    function A(e) {
        o.pause(), n.fire(wp.AD_CLICK, e)
    }

    function w(e) {
        n.fire(wp.AD_SKIPPED, e)
    }

    function I(e) {
        n.fire(wp.ALL_ADS_COMPLETED, e)
    }

    function R(e) {
        n.fire(wp.AD_ERROR, e.getError()), o && o.destroy()
    }
    const k = {
        isAutoPlayAllowed: () => d,
        start: (e, t) => (c || (r.initialize(), c = !0), o.init(e, t, u.ViewMode.NORMAL), o.start()),
        stop: () => o.stop(),
        pause: () => o.pause(),
        play: () => o.resume(),
        skip: () => o.skip(),
        resize: (e, t, n) => n ? o.resize(e, t, u.ViewMode.FULLSCREEN) : o.resize(e, t, u.ViewMode.NORMAL),
        destroy() {
            n.off(), o.destroy(), i.destroy(), r.destroy()
        },
        get volume() {
            return M(o.getVolume())
        },
        set volume(e) {
            l = N(e), o.setVolume(l)
        },
        get muted() {
            return 0 === o.getVolume()
        },
        set muted(e) {
            e ? o.setVolume(0) : o.setVolume(l)
        },
        get remainingTime() {
            return o.getRemainingTime()
        },
        setContentComplete() {
            i && i.contentComplete()
        },
        on(e, t) {
            return n.on(e, t), this
        },
        off(e, t) {
            return n.off(e, t), this
        }
    };
    return function(e, t, n) {
        if (document.getElementById(e)) n && n();
        else {
            const t = document.createElement("script");
            t.id = e, t.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js", t.onload = () => {
                n && n()
            }, document.getElementsByTagName("body")[0].appendChild(t)
        }
    }("vp-ima-sdk", 0, (function() {
        u = google.ima, r = new u.AdDisplayContainer(e, h()), i = new u.AdsLoader(r), i.addEventListener(u.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, p, !1), i.addEventListener(u.AdErrorEvent.Type.AD_ERROR, R, !1),
            function() {
                const e = t.videoPlayer.play();
                void 0 !== e && e.then(_).catch(m)
            }()
    })), Ap(this, k)
}

function Rp(e, t, n, r) {
    if (!yt(e)) return e;
    for (var i = -1, o = (t = Qt(t, e)).length, s = o - 1, a = e; null != a && ++i < o;) {
        var u = Jt(t[i]),
            c = n;
        if ("__proto__" === u || "constructor" === u || "prototype" === u) return e;
        if (i != s) {
            var l = a[u];
            void 0 === (c = r ? r(l, u, a) : void 0) && (c = yt(l) ? l : Hn(t[i + 1]) ? [] : {})
        }
        Dn(a, u, c), a = a[u]
    }
    return e
}

function kp(e, t) {
    return null != e && t in Object(e)
}

function Pp(e, t) {
    return function(e, t, n) {
        for (var r = -1, i = t.length, o = {}; ++r < i;) {
            var s = t[r],
                a = Zt(e, s);
            n(0, s) && Rp(o, Qt(s, e), a)
        }
        return o
    }(e, t, (function(t, n) {
        return function(e, t) {
            return null != e && function(e, t, n) {
                for (var r = -1, i = (t = Qt(t, e)).length, o = !1; ++r < i;) {
                    var s = Jt(t[r]);
                    if (!(o = null != e && n(e, s))) break;
                    e = e[s]
                }
                return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && Xn(i) && Hn(s, i) && (rt(e) || xn(e))
            }(e, t, kp)
        }(e, n)
    }))
}
var Dp = at ? at.isConcatSpreadable : void 0;

function Op(e) {
    return rt(e) || xn(e) || !!(Dp && e && e[Dp])
}

function Lp(e, t, n, r, i) {
    var o = -1,
        s = e.length;
    for (n || (n = Op), i || (i = []); ++o < s;) {
        var a = e[o];
        t > 0 && n(a) ? t > 1 ? Lp(a, t - 1, n, r, i) : Er(i, a) : r || (i[i.length] = a)
    }
    return i
}

function Cp(e) {
    return null != e && e.length ? Lp(e, 1) : []
}
var Np, Mp, xp, Up, Fp, jp, Vp, Bp, Hp, Xp, Wp, qp = function(e) {
        return _i(di(e, void 0, Cp), e + "")
    }((function(e, t) {
        return null == e ? {} : Pp(e, t)
    })),
    Gp = function(e, t) {
        return {
            name: e,
            value: void 0 === t ? -1 : t,
            delta: 0,
            entries: [],
            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    },
    Kp = function(e, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
                var n = new PerformanceObserver((function(e) {
                    return e.getEntries().map(t)
                }));
                return n.observe({
                    type: e,
                    buffered: !0
                }), n
            }
        } catch (e) {}
    },
    Yp = function(e, t) {
        var n = function n(r) {
            "pagehide" !== r.type && "hidden" !== document.visibilityState || (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
        };
        addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
    },
    $p = function(e) {
        addEventListener("pageshow", (function(t) {
            t.persisted && e(t)
        }), !0)
    },
    zp = function(e, t, n) {
        var r;
        return function(i) {
            t.value >= 0 && (i || n) && (t.delta = t.value - (r || 0), (t.delta || void 0 === r) && (r = t.value, e(t)))
        }
    },
    Qp = -1,
    Jp = function() {
        return "hidden" === document.visibilityState ? 0 : 1 / 0
    },
    Zp = function() {
        Yp((function(e) {
            var t = e.timeStamp;
            Qp = t
        }), !0)
    },
    e_ = function() {
        return Qp < 0 && (Qp = Jp(), Zp(), $p((function() {
            setTimeout((function() {
                Qp = Jp(), Zp()
            }), 0)
        }))), {
            get firstHiddenTime() {
                return Qp
            }
        }
    },
    t_ = function(e, t) {
        var n, r = e_(),
            i = Gp("FCP"),
            o = function(e) {
                "first-contentful-paint" === e.name && (a && a.disconnect(), e.startTime < r.firstHiddenTime && (i.value = e.startTime, i.entries.push(e), n(!0)))
            },
            s = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
            a = s ? null : Kp("paint", o);
        (s || a) && (n = zp(e, i, t), s && o(s), $p((function(r) {
            i = Gp("FCP"), n = zp(e, i, t), requestAnimationFrame((function() {
                requestAnimationFrame((function() {
                    i.value = performance.now() - r.timeStamp, n(!0)
                }))
            }))
        })))
    },
    n_ = !1,
    r_ = -1,
    i_ = function(e, t) {
        n_ || (t_((function(e) {
            r_ = e.value
        })), n_ = !0);
        var n, r = function(t) {
                r_ > -1 && e(t)
            },
            i = Gp("CLS", 0),
            o = 0,
            s = [],
            a = function(e) {
                if (!e.hadRecentInput) {
                    var t = s[0],
                        r = s[s.length - 1];
                    o && e.startTime - r.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (o += e.value, s.push(e)) : (o = e.value, s = [e]), o > i.value && (i.value = o, i.entries = s, n())
                }
            },
            u = Kp("layout-shift", a);
        u && (n = zp(r, i, t), Yp((function() {
            u.takeRecords().map(a), n(!0)
        })), $p((function() {
            o = 0, r_ = -1, i = Gp("CLS", 0), n = zp(r, i, t)
        })))
    },
    o_ = {
        passive: !0,
        capture: !0
    },
    s_ = new Date,
    a_ = function(e, t) {
        Np || (Np = t, Mp = e, xp = new Date, l_(removeEventListener), u_())
    },
    u_ = function() {
        if (Mp >= 0 && Mp < xp - s_) {
            var e = {
                entryType: "first-input",
                name: Np.type,
                target: Np.target,
                cancelable: Np.cancelable,
                startTime: Np.timeStamp,
                processingStart: Np.timeStamp + Mp
            };
            Up.forEach((function(t) {
                t(e)
            })), Up = []
        }
    },
    c_ = function(e) {
        if (e.cancelable) {
            var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
            "pointerdown" == e.type ? function(e, t) {
                var n = function() {
                        a_(e, t), i()
                    },
                    r = function() {
                        i()
                    },
                    i = function() {
                        removeEventListener("pointerup", n, o_), removeEventListener("pointercancel", r, o_)
                    };
                addEventListener("pointerup", n, o_), addEventListener("pointercancel", r, o_)
            }(t, e) : a_(t, e)
        }
    },
    l_ = function(e) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
            return e(t, c_, o_)
        }))
    },
    d_ = function(e, t) {
        var n, r = e_(),
            i = Gp("FID"),
            o = function(e) {
                e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime, i.entries.push(e), n(!0))
            },
            s = Kp("first-input", o);
        n = zp(e, i, t), s && Yp((function() {
            s.takeRecords().map(o), s.disconnect()
        }), !0), s && $p((function() {
            var r;
            i = Gp("FID"), n = zp(e, i, t), Up = [], Mp = -1, Np = null, l_(addEventListener), r = o, Up.push(r), u_()
        }))
    },
    h_ = {},
    f_ = function(e, t) {
        var n, r = e_(),
            i = Gp("LCP"),
            o = function(e) {
                var t = e.startTime;
                t < r.firstHiddenTime && (i.value = t, i.entries.push(e), n())
            },
            s = Kp("largest-contentful-paint", o);
        if (s) {
            n = zp(e, i, t);
            var a = function() {
                h_[i.id] || (s.takeRecords().map(o), s.disconnect(), h_[i.id] = !0, n(!0))
            };
            ["keydown", "click"].forEach((function(e) {
                addEventListener(e, a, {
                    once: !0,
                    capture: !0
                })
            })), Yp(a, !0), $p((function(r) {
                i = Gp("LCP"), n = zp(e, i, t), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        i.value = performance.now() - r.timeStamp, h_[i.id] = !0, n(!0)
                    }))
                }))
            }))
        }
    },
    p_ = {},
    __ = [],
    m_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function v_(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function g_(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function y_(e, t, n) {
    var r, i, o, s = {};
    for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : s[o] = t[o];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? Fp.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
        for (o in e.defaultProps) void 0 === s[o] && (s[o] = e.defaultProps[o]);
    return E_(e, s, r, i, null)
}

function E_(e, t, n, r, i) {
    var o = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == i ? ++Vp : i
    };
    return null == i && null != jp.vnode && jp.vnode(o), o
}

function T_(e) {
    return e.children
}

function S_(e, t) {
    this.props = e, this.context = t
}

function b_(e, t) {
    if (null == t) return e.__ ? b_(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? b_(e) : null
}

function A_(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break
            }
        return A_(e)
    }
}

function w_(e) {
    (!e.__d && (e.__d = !0) && Bp.push(e) && !I_.__r++ || Xp !== jp.debounceRendering) && ((Xp = jp.debounceRendering) || Hp)(I_)
}

function I_() {
    for (var e; I_.__r = Bp.length;) e = Bp.sort((function(e, t) {
        return e.__v.__b - t.__v.__b
    })), Bp = [], e.some((function(e) {
        var t, n, r, i, o, s;
        e.__d && (o = (i = (t = e).__v).__e, (s = t.__P) && (n = [], (r = v_({}, i)).__v = i.__v + 1, M_(s, i, r, t.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [o] : null, n, null == o ? b_(i) : o, i.__h), x_(n, i), i.__e != o && A_(i)))
    }))
}

function R_(e, t, n, r, i, o, s, a, u, c) {
    var l, d, h, f, p, _, m, v = r && r.__k || __,
        g = v.length;
    for (n.__k = [], l = 0; l < t.length; l++)
        if (null != (f = n.__k[l] = null == (f = t[l]) || "boolean" == typeof f ? null : "string" == typeof f || "number" == typeof f || "bigint" == typeof f ? E_(null, f, null, null, f) : Array.isArray(f) ? E_(T_, {
                children: f
            }, null, null, null) : f.__b > 0 ? E_(f.type, f.props, f.key, null, f.__v) : f)) {
            if (f.__ = n, f.__b = n.__b + 1, null === (h = v[l]) || h && f.key == h.key && f.type === h.type) v[l] = void 0;
            else
                for (d = 0; d < g; d++) {
                    if ((h = v[d]) && f.key == h.key && f.type === h.type) {
                        v[d] = void 0;
                        break
                    }
                    h = null
                }
            M_(e, f, h = h || p_, i, o, s, a, u, c), p = f.__e, (d = f.ref) && h.ref != d && (m || (m = []), h.ref && m.push(h.ref, null, f), m.push(d, f.__c || p, f)), null != p ? (null == _ && (_ = p), "function" == typeof f.type && f.__k === h.__k ? f.__d = u = k_(f, u, e) : u = D_(e, f, h, v, p, u), "function" == typeof n.type && (n.__d = u)) : u && h.__e == u && u.parentNode != e && (u = b_(h))
        }
    for (n.__e = _, l = g; l--;) null != v[l] && ("function" == typeof n.type && null != v[l].__e && v[l].__e == n.__d && (n.__d = b_(r, l + 1)), j_(v[l], v[l]));
    if (m)
        for (l = 0; l < m.length; l++) F_(m[l], m[++l], m[++l])
}

function k_(e, t, n) {
    for (var r, i = e.__k, o = 0; i && o < i.length; o++)(r = i[o]) && (r.__ = e, t = "function" == typeof r.type ? k_(r, t, n) : D_(n, r, r, i, r.__e, t));
    return t
}

function P_(e, t) {
    return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
        P_(e, t)
    })) : t.push(e)), t
}

function D_(e, t, n, r, i, o) {
    var s, a, u;
    if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
    else if (null == n || i != o || null == i.parentNode) e: if (null == o || o.parentNode !== e) e.appendChild(i), s = null;
        else {
            for (a = o, u = 0;
                (a = a.nextSibling) && u < r.length; u += 2)
                if (a == i) break e;
            e.insertBefore(i, o), s = o
        }
    return void 0 !== s ? s : i.nextSibling
}

function O_(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || m_.test(t) ? n : n + "px"
}

function L_(e, t, n, r, i) {
    var o;
    e: if ("style" === t)
        if ("string" == typeof n) e.style.cssText = n;
        else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r)
                for (t in r) n && t in n || O_(e.style, t, "");
            if (n)
                for (t in n) r && n[t] === r[t] || O_(e.style, t, n[t])
        }
    else if ("o" === t[0] && "n" === t[1]) o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? N_ : C_, o) : e.removeEventListener(t, o ? N_ : C_, o);
    else if ("dangerouslySetInnerHTML" !== t) {
        if (i) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
            e[t] = null == n ? "" : n;
            break e
        } catch (e) {}
        "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
    }
}

function C_(e) {
    this.l[e.type + !1](jp.event ? jp.event(e) : e)
}

function N_(e) {
    this.l[e.type + !0](jp.event ? jp.event(e) : e)
}

function M_(e, t, n, r, i, o, s, a, u) {
    var c, l, d, h, f, p, _, m, v, g, y, E = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h && (u = n.__h, a = t.__e = n.__e, t.__h = null, o = [a]), (c = jp.__b) && c(t);
    try {
        e: if ("function" == typeof E) {
            if (m = t.props, v = (c = E.contextType) && r[c.__c], g = c ? v ? v.props.value : c.__ : r, n.__c ? _ = (l = t.__c = n.__c).__ = l.__E : ("prototype" in E && E.prototype.render ? t.__c = l = new E(m, g) : (t.__c = l = new S_(m, g), l.constructor = E, l.render = V_), v && v.sub(l), l.props = m, l.state || (l.state = {}), l.context = g, l.__n = r, d = l.__d = !0, l.__h = []), null == l.__s && (l.__s = l.state), null != E.getDerivedStateFromProps && (l.__s == l.state && (l.__s = v_({}, l.__s)), v_(l.__s, E.getDerivedStateFromProps(m, l.__s))), h = l.props, f = l.state, d) null == E.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);
            else {
                if (null == E.getDerivedStateFromProps && m !== h && null != l.componentWillReceiveProps && l.componentWillReceiveProps(m, g), !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(m, l.__s, g) || t.__v === n.__v) {
                    l.props = m, l.state = l.__s, t.__v !== n.__v && (l.__d = !1), l.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                        e && (e.__ = t)
                    })), l.__h.length && s.push(l);
                    break e
                }
                null != l.componentWillUpdate && l.componentWillUpdate(m, l.__s, g), null != l.componentDidUpdate && l.__h.push((function() {
                    l.componentDidUpdate(h, f, p)
                }))
            }
            l.context = g, l.props = m, l.state = l.__s, (c = jp.__r) && c(t), l.__d = !1, l.__v = t, l.__P = e, c = l.render(l.props, l.state, l.context), l.state = l.__s, null != l.getChildContext && (r = v_(v_({}, r), l.getChildContext())), d || null == l.getSnapshotBeforeUpdate || (p = l.getSnapshotBeforeUpdate(h, f)), y = null != c && c.type === T_ && null == c.key ? c.props.children : c, R_(e, Array.isArray(y) ? y : [y], t, n, r, i, o, s, a, u), l.base = t.__e, t.__h = null, l.__h.length && s.push(l), _ && (l.__E = l.__ = null), l.__e = !1
        } else null == o && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = U_(n.__e, t, n, r, i, o, s, u);
        (c = jp.diffed) && c(t)
    }
    catch (e) {
        t.__v = null, (u || null != o) && (t.__e = a, t.__h = !!u, o[o.indexOf(a)] = null), jp.__e(e, t, n)
    }
}

function x_(e, t) {
    jp.__c && jp.__c(t, e), e.some((function(t) {
        try {
            e = t.__h, t.__h = [], e.some((function(e) {
                e.call(t)
            }))
        } catch (e) {
            jp.__e(e, t.__v)
        }
    }))
}

function U_(e, t, n, r, i, o, s, a) {
    var u, c, l, d = n.props,
        h = t.props,
        f = t.type,
        p = 0;
    if ("svg" === f && (i = !0), null != o)
        for (; p < o.length; p++)
            if ((u = o[p]) && "setAttribute" in u == !!f && (f ? u.localName === f : 3 === u.nodeType)) {
                e = u, o[p] = null;
                break
            }
    if (null == e) {
        if (null === f) return document.createTextNode(h);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, h.is && h), o = null, a = !1
    }
    if (null === f) d === h || a && e.data === h || (e.data = h);
    else {
        if (o = o && Fp.call(e.childNodes), c = (d = n.props || p_).dangerouslySetInnerHTML, l = h.dangerouslySetInnerHTML, !a) {
            if (null != o)
                for (d = {}, p = 0; p < e.attributes.length; p++) d[e.attributes[p].name] = e.attributes[p].value;
            (l || c) && (l && (c && l.__html == c.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""))
        }
        if (function(e, t, n, r, i) {
                var o;
                for (o in n) "children" === o || "key" === o || o in t || L_(e, o, null, n[o], r);
                for (o in t) i && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === t[o] || L_(e, o, t[o], n[o], r)
            }(e, h, d, i, a), l) t.__k = [];
        else if (p = t.props.children, R_(e, Array.isArray(p) ? p : [p], t, n, r, i && "foreignObject" !== f, o, s, o ? o[0] : n.__k && b_(n, 0), a), null != o)
            for (p = o.length; p--;) null != o[p] && g_(o[p]);
        a || ("value" in h && void 0 !== (p = h.value) && (p !== e.value || "progress" === f && !p || "option" === f && p !== d.value) && L_(e, "value", p, d.value, !1), "checked" in h && void 0 !== (p = h.checked) && p !== e.checked && L_(e, "checked", p, d.checked, !1))
    }
    return e
}

function F_(e, t, n) {
    try {
        "function" == typeof e ? e(t) : e.current = t
    } catch (e) {
        jp.__e(e, n)
    }
}

function j_(e, t, n) {
    var r, i;
    if (jp.unmount && jp.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || F_(r, null, t)), null != (r = e.__c)) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount()
        } catch (e) {
            jp.__e(e, t)
        }
        r.base = r.__P = null
    }
    if (r = e.__k)
        for (i = 0; i < r.length; i++) r[i] && j_(r[i], t, "function" != typeof e.type);
    n || null == e.__e || g_(e.__e), e.__e = e.__d = void 0
}

function V_(e, t, n) {
    return this.constructor(e, n)
}

function B_(e, t, n) {
    var r, i, o;
    jp.__ && jp.__(e, t), i = (r = "function" == typeof n) ? null : n && n.__k || t.__k, o = [], M_(t, e = (!r && n || t).__k = y_(T_, null, [e]), i || p_, p_, void 0 !== t.ownerSVGElement, !r && n ? [n] : i ? null : t.firstChild ? Fp.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r), x_(o, e)
}

function H_(e, t) {
    B_(e, t, H_)
}

function X_(e, t, n) {
    var r, i, o, s = v_({}, e.props);
    for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : s[o] = t[o];
    return arguments.length > 2 && (s.children = arguments.length > 3 ? Fp.call(arguments, 2) : n), E_(e.type, s, r || e.key, i || e.ref, null)
}

function W_(e, t) {
    var n = {
        __c: t = "__cC" + Wp++,
        __: e,
        Consumer: function(e, t) {
            return e.children(t)
        },
        Provider: function(e) {
            var n, r;
            return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                return r
            }, this.shouldComponentUpdate = function(e) {
                this.props.value !== e.value && n.some(w_)
            }, this.sub = function(e) {
                n.push(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function() {
                    n.splice(n.indexOf(e), 1), t && t.call(e)
                }
            }), e.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
Fp = __.slice, jp = {
    __e: function(e, t) {
        for (var n, r, i; t = t.__;)
            if ((n = t.__c) && !n.__) try {
                if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), i = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), i = n.__d), i) return n.__E = n
            } catch (t) {
                e = t
            }
        throw e
    }
}, Vp = 0, S_.prototype.setState = function(e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v_({}, this.state), "function" == typeof e && (e = e(v_({}, n), this.props)), e && v_(n, e), null != e && this.__v && (t && this.__h.push(t), w_(this))
}, S_.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), w_(this))
}, S_.prototype.render = T_, Bp = [], Hp = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, I_.__r = 0, Wp = 0;
var q_, G_, K_, Y_ = 0,
    $_ = [],
    z_ = jp.__b,
    Q_ = jp.__r,
    J_ = jp.diffed,
    Z_ = jp.__c,
    em = jp.unmount;

function tm(e, t) {
    jp.__h && jp.__h(G_, e, Y_ || t), Y_ = 0;
    var n = G_.__H || (G_.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({}), n.__[e]
}

function nm(e) {
    return Y_ = 1, rm(vm, e)
}

function rm(e, t, n) {
    var r = tm(q_++, 2);
    return r.t = e, r.__c || (r.__ = [n ? n(t) : vm(void 0, t), function(e) {
        var t = r.t(r.__[0], e);
        r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}))
    }], r.__c = G_), r.__
}

function im(e, t) {
    var n = tm(q_++, 3);
    !jp.__s && mm(n.__H, t) && (n.__ = e, n.__H = t, G_.__H.__h.push(n))
}

function om(e, t) {
    var n = tm(q_++, 4);
    !jp.__s && mm(n.__H, t) && (n.__ = e, n.__H = t, G_.__h.push(n))
}

function sm(e) {
    return Y_ = 5, am((function() {
        return {
            current: e
        }
    }), [])
}

function am(e, t) {
    var n = tm(q_++, 7);
    return mm(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
}

function um(e, t) {
    return Y_ = 8, am((function() {
        return e
    }), t)
}

function cm(e) {
    var t = G_.context[e.__c],
        n = tm(q_++, 9);
    return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(G_)), t.props.value) : e.__
}

function lm(e, t) {
    jp.useDebugValue && jp.useDebugValue(t ? t(e) : e)
}

function dm(e) {
    var t = tm(q_++, 10),
        n = nm();
    return t.__ = e, G_.componentDidCatch || (G_.componentDidCatch = function(e) {
        t.__ && t.__(e), n[1](e)
    }), [n[0], function() {
        n[1](void 0)
    }]
}

function hm() {
    for (var e; e = $_.shift();)
        if (e.__P) try {
            e.__H.__h.forEach(pm), e.__H.__h.forEach(_m), e.__H.__h = []
        } catch ($p) {
            e.__H.__h = [], jp.__e($p, e.__v)
        }
}
jp.__b = function(e) {
    G_ = null, z_ && z_(e)
}, jp.__r = function(e) {
    Q_ && Q_(e), q_ = 0;
    var t = (G_ = e.__c).__H;
    t && (t.__h.forEach(pm), t.__h.forEach(_m), t.__h = [])
}, jp.diffed = function(e) {
    J_ && J_(e);
    var t = e.__c;
    t && t.__H && t.__H.__h.length && (1 !== $_.push(t) && K_ === jp.requestAnimationFrame || ((K_ = jp.requestAnimationFrame) || function(e) {
        var t, n = function() {
                clearTimeout(r), fm && cancelAnimationFrame(t), setTimeout(e)
            },
            r = setTimeout(n, 100);
        fm && (t = requestAnimationFrame(n))
    })(hm)), G_ = null
}, jp.__c = function(e, t) {
    t.some((function(e) {
        try {
            e.__h.forEach(pm), e.__h = e.__h.filter((function(e) {
                return !e.__ || _m(e)
            }))
        } catch (Gp) {
            t.some((function(e) {
                e.__h && (e.__h = [])
            })), t = [], jp.__e(Gp, e.__v)
        }
    })), Z_ && Z_(e, t)
}, jp.unmount = function(e) {
    em && em(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach((function(e) {
        try {
            pm(e)
        } catch (e) {
            t = e
        }
    })), t && jp.__e(t, n.__v))
};
var fm = "function" == typeof requestAnimationFrame;

function pm(e) {
    var t = G_,
        n = e.__c;
    "function" == typeof n && (e.__c = void 0, n()), G_ = t
}

function _m(e) {
    var t = G_;
    e.__c = e.__(), G_ = t
}

function mm(e, t) {
    return !e || e.length !== t.length || t.some((function(t, n) {
        return t !== e[n]
    }))
}

function vm(e, t) {
    return "function" == typeof t ? t(e) : t
}

function gm() {
    return gm = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, gm.apply(this, arguments)
}

function ym(e, t) {
    return ym = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
    }, ym(e, t)
}
var Em, Tm, Sm, bm = function(e) {
    var t, n;

    function r() {
        return e.apply(this, arguments) || this
    }
    n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, ym(t, n);
    var i = r.prototype;
    return i.componentDidMount = function() {
        this.props.nodeRef.current = this.base
    }, i.componentWillUnmount = function() {
        this.props.nodeRef.current = void 0
    }, i.render = function() {
        return y_(T_, {}, this.props.children)
    }, r
}(S_);
! function(e) {
    e.APPEAR = "appear", e.APPEAR_ACTIVE = "appearActive", e.APPEAR_DONE = "appearDone", e.ENTER = "enter", e.ENTER_ACTIVE = "enterActive", e.ENTER_DONE = "enterDone", e.EXIT = "exit", e.EXIT_ACTIVE = "exitActive", e.EXIT_DONE = "exitDone"
}(Tm || (Tm = {})),
function(e) {
    e.ENTER = "onEnter", e.ENTERING = "onEntering", e.ENTERED = "onEntered", e.EXIT = "onExit", e.EXITING = "onExiting", e.EXITED = "onExited"
}(Sm || (Sm = {}));
var Am = ((Em = {})[Tm.APPEAR] = [Sm.ENTER, Tm.APPEAR_ACTIVE], Em[Tm.APPEAR_ACTIVE] = [Sm.ENTERING, Tm.APPEAR_DONE, !0], Em[Tm.APPEAR_DONE] = [Sm.ENTERED], Em[Tm.ENTER] = [Sm.ENTER, Tm.ENTER_ACTIVE], Em[Tm.ENTER_ACTIVE] = [Sm.ENTERING, Tm.ENTER_DONE, !0], Em[Tm.ENTER_DONE] = [Sm.ENTERED], Em[Tm.EXIT] = [Sm.EXIT, Tm.EXIT_ACTIVE], Em[Tm.EXIT_ACTIVE] = [Sm.EXITING, Tm.EXIT_DONE, !0], Em[Tm.EXIT_DONE] = [Sm.EXITED], Em);

function wm(e) {
    var t = e.children,
        n = e.in,
        r = void 0 !== n && n,
        i = e.appear,
        o = void 0 !== i && i,
        s = e.enter,
        a = void 0 === s || s,
        u = e.exit,
        c = void 0 === u || u,
        l = e.duration,
        d = void 0 === l ? 500 : l,
        h = e.alwaysMounted,
        f = void 0 !== h && h,
        p = e.addEndListener,
        _ = sm(),
        m = sm(),
        v = !1,
        g = nm((function() {
            return v = !0, r ? o ? Tm.APPEAR : Tm.APPEAR_DONE : Tm.EXIT_DONE
        })),
        y = g[0],
        E = g[1];
    im((function() {
        var t = window,
            n = t.setTimeout,
            r = t.clearTimeout,
            i = Am[y],
            o = i[1],
            s = i[2],
            a = e[i[0]];
        return null == a || a(_.current), o && (s ? p ? p(_.current, (function() {
                return E(o)
            })) : m.current = n(E, d, o) : E(o)),
            function() {
                r(m.current)
            }
    }), [y, d]), om((function() {
        v || E(r ? a ? Tm.ENTER : Tm.ENTER_DONE : c ? Tm.EXIT : Tm.EXIT_DONE)
    }), [r]);
    var T = am((function() {
        var e = {};
        return Object.keys(Am).forEach((function(t) {
            e[t] = y === t
        })), e
    }), [y]);
    return f || (c ? y !== Tm.EXIT_DONE : r) ? y_(bm, {
        nodeRef: _,
        children: t(T, y)
    }) : null
}
var Im, Rm = ["children", "styles"];

function km(e) {
    var t = e.children,
        n = e.styles,
        r = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) t.indexOf(n = o[r]) >= 0 || (i[n] = e[n]);
            return i
        }(e, Rm);
    return y_(wm, r, (function(e, r) {
        var i = t.props.style,
            o = am((function() {
                return gm({}, function(e, t) {
                    var n = t[e];
                    switch (e) {
                        case Tm.APPEAR_ACTIVE:
                            return gm({}, t[Tm.APPEAR], n);
                        case Tm.ENTER_ACTIVE:
                            return gm({}, t[Tm.ENTER], n);
                        case Tm.EXIT_ACTIVE:
                            return gm({}, t[Tm.EXIT], n);
                        default:
                            return n
                    }
                }(r, n), i)
            }), [i, n, r]);
        return X_(t, {
            style: o
        })
    }))
}

function Pm(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function Dm(e, t) {
    for (var n in e)
        if ("__source" !== n && !(n in t)) return !0;
    for (var r in t)
        if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1
}

function Om(e) {
    this.props = e
}(Im = {})[Tm.APPEAR] = "-appear", Im[Tm.APPEAR_ACTIVE] = "-appear-active", Im[Tm.APPEAR_DONE] = "-appear-done", Im[Tm.ENTER] = "-enter", Im[Tm.ENTER_ACTIVE] = "-enter-active", Im[Tm.ENTER_DONE] = "-enter-done", Im[Tm.EXIT] = "-exit", Im[Tm.EXIT_ACTIVE] = "-exit-active", Im[Tm.EXIT_DONE] = "-exit-done", (Om.prototype = new S_).isPureReactComponent = !0, Om.prototype.shouldComponentUpdate = function(e, t) {
    return Dm(this.props, e) || Dm(this.state, t)
};
var Lm = jp.__b;
jp.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Lm && Lm(e)
};
var Cm = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function Nm(e) {
    function t(t, n) {
        var r = Pm({}, t);
        return delete r.ref, e(r, (n = t.ref || n) && ("object" != typeof n || "current" in n) ? n : null)
    }
    return t.$$typeof = Cm, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var Mm = function(e, t) {
        return null == e ? null : P_(P_(e).map(t))
    },
    xm = {
        map: Mm,
        forEach: Mm,
        count: function(e) {
            return e ? P_(e).length : 0
        },
        only: function(e) {
            var t = P_(e);
            if (1 !== t.length) throw "Children.only";
            return t[0]
        },
        toArray: P_
    },
    Um = jp.__e;
jp.__e = function(e, t, n) {
    if (e.then)
        for (var r, i = t; i = i.__;)
            if ((r = i.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
    Um(e, t, n)
};
var Fm = jp.unmount;

function jm() {
    this.__u = 0, this.t = null, this.__b = null
}

function Vm(e) {
    var t = e.__.__c;
    return t && t.__e && t.__e(e)
}

function Bm() {
    this.u = null, this.o = null
}
jp.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Fm && Fm(e)
}, (jm.prototype = new S_).__c = function(e, t) {
    var n = t.__c,
        r = this;
    null == r.t && (r.t = []), r.t.push(n);
    var i = Vm(r.__v),
        o = !1,
        s = function() {
            o || (o = !0, n.__R = null, i ? i(a) : a())
        };
    n.__R = s;
    var a = function() {
            if (!--r.__u) {
                if (r.state.__e) {
                    var e = r.state.__e;
                    r.__v.__k[0] = function e(t, n, r) {
                        return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                            return e(t, n, r)
                        })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                    }(e, e.__c.__P, e.__c.__O)
                }
                var t;
                for (r.setState({
                        __e: r.__b = null
                    }); t = r.t.pop();) t.forceUpdate()
            }
        },
        u = !0 === t.__h;
    r.__u++ || u || r.setState({
        __e: r.__b = r.__v.__k[0]
    }), e.then(s, s)
}, jm.prototype.componentWillUnmount = function() {
    this.t = []
}, jm.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div"),
                r = this.__v.__k[0].__c;
            this.__v.__k[0] = function e(t, n, r) {
                return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
                    "function" == typeof e.__c && e.__c()
                })), t.__c.__H = null), null != (t = Pm({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                    return e(t, n, r)
                }))), t
            }(this.__b, n, r.__O = r.__P)
        }
        this.__b = null
    }
    var i = t.__e && y_(T_, null, e.fallback);
    return i && (i.__h = null), [y_(T_, null, t.__e ? null : e.children), i]
};
var Hm = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
        for (n = e.u; n;) {
            for (; n.length > 3;) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2]
        }
};

function Xm(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function Wm(e) {
    var t = this,
        n = e.i;
    t.componentWillUnmount = function() {
        B_(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        appendChild: function(e) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        insertBefore: function(e, n) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        removeChild: function(e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
        }
    }), B_(y_(Xm, {
        context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount()
}

function qm(e, t) {
    return y_(Wm, {
        __v: e,
        i: t
    })
}(Bm.prototype = new S_).__e = function(e) {
    var t = this,
        n = Vm(t.__v),
        r = t.o.get(e);
    return r[0]++,
        function(i) {
            var o = function() {
                t.props.revealOrder ? (r.push(i), Hm(t, e, r)) : i()
            };
            n ? n(o) : o()
        }
}, Bm.prototype.render = function(e) {
    this.u = null, this.o = new Map;
    var t = P_(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children
}, Bm.prototype.componentDidUpdate = Bm.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach((function(t, n) {
        Hm(e, n, t)
    }))
};
var Gm = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    Km = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Ym = "undefined" != typeof document,
    $m = function(e) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };
S_.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
    Object.defineProperty(S_.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
}));
var zm = jp.event;

function Qm() {}

function Jm() {
    return this.cancelBubble
}

function Zm() {
    return this.defaultPrevented
}
jp.event = function(e) {
    return zm && (e = zm(e)), e.persist = Qm, e.isPropagationStopped = Jm, e.isDefaultPrevented = Zm, e.nativeEvent = e
};
var ev, tv = {
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    nv = jp.vnode;
jp.vnode = function(e) {
    var t = e.type,
        n = e.props,
        r = n;
    if ("string" == typeof t) {
        var i = -1 === t.indexOf("-");
        for (var o in r = {}, n) {
            var s = n[o];
            Ym && "children" === o && "noscript" === t || "value" === o && "defaultValue" in n && null == s || ("defaultValue" === o && "value" in n && null == n.value ? o = "value" : "download" === o && !0 === s ? s = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !$m(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && Km.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === s && (s = void 0), r[o] = s)
        }
        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = P_(n.children).forEach((function(e) {
            e.props.selected = -1 != r.value.indexOf(e.props.value)
        }))), "select" == t && null != r.defaultValue && (r.value = P_(n.children).forEach((function(e) {
            e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
        }))), e.props = r, n.class != n.className && (tv.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", tv))
    }
    e.$$typeof = Gm, nv && nv(e)
};
var rv = jp.__r;
jp.__r = function(e) {
    rv && rv(e), ev = e.__c
};
var iv = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(e) {
                return ev.__n[e.__c].props.value
            }
        }
    }
};

function ov(e) {
    return !!e && e.$$typeof === Gm
}
var sv = {
    useState: nm,
    useReducer: rm,
    useEffect: im,
    useLayoutEffect: om,
    useRef: sm,
    useImperativeHandle: function(e, t, n) {
        Y_ = 6, om((function() {
            "function" == typeof e ? e(t()) : e && (e.current = t())
        }), null == n ? n : n.concat(e))
    },
    useMemo: am,
    useCallback: um,
    useContext: cm,
    useDebugValue: lm,
    version: "17.0.2",
    Children: xm,
    render: function(e, t, n) {
        return null == t.__k && (t.textContent = ""), B_(e, t), "function" == typeof n && n(), e ? e.__c : null
    },
    hydrate: function(e, t, n) {
        return H_(e, t), "function" == typeof n && n(), e ? e.__c : null
    },
    unmountComponentAtNode: function(e) {
        return !!e.__k && (B_(null, e), !0)
    },
    createPortal: qm,
    createElement: y_,
    createContext: W_,
    createFactory: function(e) {
        return y_.bind(null, e)
    },
    cloneElement: function(e) {
        return ov(e) ? X_.apply(null, arguments) : e
    },
    createRef: function() {
        return {
            current: null
        }
    },
    Fragment: T_,
    isValidElement: ov,
    findDOMNode: function(e) {
        return e && (e.base || 1 === e.nodeType && e) || null
    },
    Component: S_,
    PureComponent: Om,
    memo: function(e, t) {
        function n(e) {
            var n = this.props.ref,
                r = n == e.ref;
            return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : Dm(this.props, e)
        }

        function r(t) {
            return this.shouldComponentUpdate = n, y_(e, t)
        }
        return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
    },
    forwardRef: Nm,
    flushSync: function(e, t) {
        return e(t)
    },
    unstable_batchedUpdates: function(e, t) {
        return e(t)
    },
    StrictMode: T_,
    Suspense: jm,
    SuspenseList: Bm,
    lazy: function(e) {
        var t, n, r;

        function i(i) {
            if (t || (t = e()).then((function(e) {
                    n = e.default || e
                }), (function(e) {
                    r = e
                })), r) throw r;
            if (!n) throw t;
            return y_(n, i)
        }
        return i.displayName = "Lazy", i.__f = !0, i
    },
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: iv
};
const av = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? im : om;

function uv(e) {
    const t = "function" == typeof e ? function(e) {
            let t;
            const n = new Set,
                r = (e, r) => {
                    const i = "function" == typeof e ? e(t) : e;
                    if (i !== t) {
                        const e = t;
                        t = r ? i : Object.assign({}, t, i), n.forEach((n => n(t, e)))
                    }
                },
                i = () => t,
                o = {
                    setState: r,
                    getState: i,
                    subscribe: (e, r, o) => r || o ? ((e, r = i, o = Object.is) => {
                        let s = r(t);

                        function a() {
                            const n = r(t);
                            if (!o(s, n)) {
                                const t = s;
                                e(s = n, t)
                            }
                        }
                        return n.add(a), () => n.delete(a)
                    })(e, r, o) : (n.add(e), () => n.delete(e)),
                    destroy: () => n.clear()
                };
            return t = e(r, i, o), o
        }(e) : e,
        n = (e = t.getState, n = Object.is) => {
            const [, r] = rm((e => e + 1), 0), i = t.getState(), o = sm(i), s = sm(e), a = sm(n), u = sm(!1), c = sm();
            let l;
            void 0 === c.current && (c.current = e(i));
            let d = !1;
            (o.current !== i || s.current !== e || a.current !== n || u.current) && (l = e(i), d = !n(c.current, l)), av((() => {
                d && (c.current = l), o.current = i, s.current = e, a.current = n, u.current = !1
            }));
            const h = sm(i);
            av((() => {
                const e = () => {
                        try {
                            const e = t.getState(),
                                n = s.current(e);
                            a.current(c.current, n) || (o.current = e, c.current = n, r())
                        } catch (e) {
                            u.current = !0, r()
                        }
                    },
                    n = t.subscribe(e);
                return t.getState() !== h.current && e(), n
            }), []);
            const f = d ? l : c.current;
            return lm(f), f
        };
    return Object.assign(n, t), n[Symbol.iterator] = function() {
        const e = [n, t];
        return {
            next() {
                const t = e.length <= 0;
                return {
                    value: e.shift(),
                    done: t
                }
            }
        }
    }, n
}

function cv() {
    const e = W_(void 0);
    return {
        Provider: ({
            initialStore: t,
            createStore: n,
            children: r
        }) => {
            const i = sm();
            return i.current || (t && (n || (n = () => t)), i.current = n()), y_(e.Provider, {
                value: i.current
            }, r)
        },
        useStore: (t, n = Object.is) => {
            const r = cm(e);
            if (!r) throw new Error("Seems like you have not used zustand provider as an ancestor.");
            return r(t, n)
        },
        useStoreApi: () => {
            const t = cm(e);
            if (!t) throw new Error("Seems like you have not used zustand provider as an ancestor.");
            return am((() => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy
            })), [t])
        }
    }
}
const lv = e => (t, n, r) => {
    const i = r.subscribe;
    return r.subscribe = (e, t, n) => {
        let o = e;
        if (t) {
            const i = (null == n ? void 0 : n.equalityFn) || Object.is;
            let s = e(r.getState());
            o = n => {
                const r = e(n);
                if (!i(s, r)) {
                    const e = s;
                    t(s = r, e)
                }
            }, (null == n ? void 0 : n.fireImmediately) && t(s, s)
        }
        return i(o)
    }, e(t, n, r)
};
var dv = 0;

function hv(e, t, n, r, i) {
    var o, s, a = {};
    for (s in t) "ref" == s ? o = t[s] : a[s] = t[s];
    var u = {
        type: e,
        props: a,
        key: n,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --dv,
        __source: r,
        __self: i
    };
    if ("function" == typeof e && (o = e.defaultProps))
        for (s in o) void 0 === a[s] && (a[s] = o[s]);
    return jp.vnode && jp.vnode(u), u
}

function fv(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.__data__ = new Ht; ++t < n;) this.add(e[t])
}

function pv(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
        if (t(e[n], n, e)) return !0;
    return !1
}

function _v(e, t) {
    return e.has(t)
}

function mv(e, t, n, r, i, o) {
    var s = 1 & n,
        a = e.length,
        u = t.length;
    if (a != u && !(s && u > a)) return !1;
    var c = o.get(e),
        l = o.get(t);
    if (c && l) return c == t && l == e;
    var d = -1,
        h = !0,
        f = 2 & n ? new fv : void 0;
    for (o.set(e, t), o.set(t, e); ++d < a;) {
        var p = e[d],
            _ = t[d];
        if (r) var m = s ? r(_, p, d, t, e, o) : r(p, _, d, e, t, o);
        if (void 0 !== m) {
            if (m) continue;
            h = !1;
            break
        }
        if (f) {
            if (!pv(t, (function(e, t) {
                    if (!_v(f, t) && (p === e || i(p, e, n, r, o))) return f.push(t)
                }))) {
                h = !1;
                break
            }
        } else if (p !== _ && !i(p, _, n, r, o)) {
            h = !1;
            break
        }
    }
    return o.delete(e), o.delete(t), h
}

function vv(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach((function(e, r) {
        n[++t] = [r, e]
    })), n
}

function gv(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach((function(e) {
        n[++t] = e
    })), n
}
fv.prototype.add = fv.prototype.push = function(e) {
    return this.__data__.set(e, "__lodash_hash_undefined__"), this
}, fv.prototype.has = function(e) {
    return this.__data__.has(e)
};
var yv = at ? at.prototype : void 0,
    Ev = yv ? yv.valueOf : void 0,
    Tv = Object.prototype.hasOwnProperty,
    Sv = "[object Arguments]",
    bv = "[object Array]",
    Av = "[object Object]",
    wv = Object.prototype.hasOwnProperty;

function Iv(e, t, n, r, i) {
    return e === t || (null == e || null == t || !_t(e) && !_t(t) ? e != e && t != t : function(e, t, n, r, i, o) {
        var s = rt(e),
            a = rt(t),
            u = s ? bv : Br(e),
            c = a ? bv : Br(t),
            l = (u = u == Sv ? Av : u) == Av,
            d = (c = c == Sv ? Av : c) == Av,
            h = u == c;
        if (h && Vn(e)) {
            if (!Vn(t)) return !1;
            s = !0, l = !1
        }
        if (h && !l) return o || (o = new In), s || Qn(e) ? mv(e, t, n, r, i, o) : function(e, t, n, r, i, o, s) {
            switch (n) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case "[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !o(new Xr(e), new Xr(t)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return xt(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var a = vv;
                case "[object Set]":
                    var u = 1 & r;
                    if (a || (a = gv), e.size != t.size && !u) return !1;
                    var c = s.get(e);
                    if (c) return c == t;
                    r |= 2, s.set(e, t);
                    var l = mv(a(e), a(t), r, i, o, s);
                    return s.delete(e), l;
                case "[object Symbol]":
                    if (Ev) return Ev.call(e) == Ev.call(t)
            }
            return !1
        }(e, t, u, n, r, i, o);
        if (!(1 & n)) {
            var f = l && wv.call(e, "__wrapped__"),
                p = d && wv.call(t, "__wrapped__");
            if (f || p) {
                var _ = f ? e.value() : e,
                    m = p ? t.value() : t;
                return o || (o = new In), i(_, m, n, r, o)
            }
        }
        return !!h && (o || (o = new In), function(e, t, n, r, i, o) {
            var s = 1 & n,
                a = Ar(e),
                u = a.length;
            if (u != Ar(t).length && !s) return !1;
            for (var c = u; c--;) {
                var l = a[c];
                if (!(s ? l in t : Tv.call(t, l))) return !1
            }
            var d = o.get(e),
                h = o.get(t);
            if (d && h) return d == t && h == e;
            var f = !0;
            o.set(e, t), o.set(t, e);
            for (var p = s; ++c < u;) {
                var _ = e[l = a[c]],
                    m = t[l];
                if (r) var v = s ? r(m, _, l, t, e, o) : r(_, m, l, e, t, o);
                if (!(void 0 === v ? _ === m || i(_, m, n, r, o) : v)) {
                    f = !1;
                    break
                }
                p || (p = "constructor" == l)
            }
            if (f && !p) {
                var g = e.constructor,
                    y = t.constructor;
                g == y || !("constructor" in e) || !("constructor" in t) || "function" == typeof g && g instanceof g && "function" == typeof y && y instanceof y || (f = !1)
            }
            return o.delete(e), o.delete(t), f
        }(e, t, n, r, i, o))
    }(e, t, n, r, Iv, i))
}

function Rv(e, t) {
    return Iv(e, t)
}
var kv = [],
    Pv = [];

function Dv(e, t) {
    if (e && "undefined" != typeof document) {
        var n, r = !0 === t.prepend ? "prepend" : "append",
            i = !0 === t.singleTag,
            o = "string" == typeof t.container ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
        if (i) {
            var s = kv.indexOf(o); - 1 === s && (s = kv.push(o) - 1, Pv[s] = {}), n = Pv[s] && Pv[s][r] ? Pv[s][r] : Pv[s][r] = a()
        } else n = a();
        65279 === e.charCodeAt(0) && (e = e.substring(1)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(document.createTextNode(e))
    }

    function a() {
        var e = document.createElement("style");
        if (e.setAttribute("type", "text/css"), t.attributes)
            for (var n = Object.keys(t.attributes), i = 0; i < n.length; i++) e.setAttribute(n[i], t.attributes[n[i]]);
        var s = "prepend" === r ? "afterbegin" : "beforeend";
        return o.insertAdjacentElement(s, e), e
    }
}

function Ov() {
    return Ov = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ov.apply(this, arguments)
}
var Lv, Cv = ["bottom", "height", "left", "right", "top", "width"],
    Nv = new Map,
    Mv = function e() {
        var t = [];
        Nv.forEach((function(e, n) {
            var r = n.getBoundingClientRect();
            (function(e, t) {
                return void 0 === e && (e = {}), void 0 === t && (t = {}), Cv.some((function(n) {
                    return e[n] !== t[n]
                }))
            })(r, e.rect) && (e.rect = r, t.push(e))
        })), t.forEach((function(e) {
            e.callbacks.forEach((function(t) {
                return t(e.rect)
            }))
        })), Lv = window.requestAnimationFrame(e)
    },
    xv = "undefined" != typeof window ? sv.useLayoutEffect : sv.useEffect;

function Uv(e, t) {
    void 0 === t && (t = {
        width: 0,
        height: 0
    });
    var n = sv.useState(e.current),
        r = n[0],
        i = n[1],
        o = sv.useReducer(Fv, t),
        s = o[0],
        a = o[1],
        u = sv.useRef(!1);
    return xv((function() {
        e.current !== r && i(e.current)
    })), xv((function() {
        if (r && !u.current) {
            u.current = !0;
            var e = r.getBoundingClientRect();
            a({
                rect: e
            })
        }
    }), [r]), sv.useEffect((function() {
        if (r) {
            var e = function(e, t) {
                return {
                    observe: function() {
                        var n = 0 === Nv.size;
                        Nv.has(e) ? Nv.get(e).callbacks.push(t) : Nv.set(e, {
                            rect: void 0,
                            hasRectChanged: !1,
                            callbacks: [t]
                        }), n && Mv()
                    },
                    unobserve: function() {
                        var n = Nv.get(e);
                        if (n) {
                            var r = n.callbacks.indexOf(t);
                            r >= 0 && n.callbacks.splice(r, 1), n.callbacks.length || Nv.delete(e), Nv.size || cancelAnimationFrame(Lv)
                        }
                    }
                }
            }(r, (function(e) {
                a({
                    rect: e
                })
            }));
            return e.observe(),
                function() {
                    e.unobserve()
                }
        }
    }), [r]), s
}

function Fv(e, t) {
    var n = t.rect;
    return e.height !== n.height || e.width !== n.width ? n : e
}
var jv = function() {
        return 50
    },
    Vv = function(e) {
        return e
    },
    Bv = function(e, t) {
        return e[t ? "offsetWidth" : "offsetHeight"]
    },
    Hv = function(e) {
        for (var t = Math.max(e.start - e.overscan, 0), n = Math.min(e.end + e.overscan, e.size - 1), r = [], i = t; i <= n; i++) r.push(i);
        return r
    };

function Xv(e) {
    var t, n = e.size,
        r = void 0 === n ? 0 : n,
        i = e.estimateSize,
        o = void 0 === i ? jv : i,
        s = e.overscan,
        a = void 0 === s ? 1 : s,
        u = e.paddingStart,
        c = void 0 === u ? 0 : u,
        l = e.paddingEnd,
        d = void 0 === l ? 0 : l,
        h = e.parentRef,
        f = e.horizontal,
        p = e.scrollToFn,
        _ = e.useObserver,
        m = e.initialRect,
        v = e.onScrollElement,
        g = e.scrollOffsetFn,
        y = e.keyExtractor,
        E = void 0 === y ? Vv : y,
        T = e.measureSize,
        S = void 0 === T ? Bv : T,
        b = e.rangeExtractor,
        A = void 0 === b ? Hv : b,
        w = f ? "width" : "height",
        I = f ? "scrollLeft" : "scrollTop",
        R = sv.useRef({
            scrollOffset: 0,
            measurements: []
        }),
        k = sv.useState(0),
        P = k[0],
        D = k[1];
    R.current.scrollOffset = P;
    var O = (_ || Uv)(h, m)[w];
    R.current.outerSize = O;
    var L = sv.useCallback((function(e) {
            h.current && (h.current[I] = e)
        }), [h, I]),
        C = p || L;
    p = sv.useCallback((function(e) {
        C(e, L)
    }), [L, C]);
    var N = sv.useState({}),
        M = N[0],
        x = N[1],
        U = sv.useCallback((function() {
            return x({})
        }), []),
        F = sv.useRef([]),
        j = sv.useMemo((function() {
            var e = F.current.length > 0 ? Math.min.apply(Math, F.current) : 0;
            F.current = [];
            for (var t = R.current.measurements.slice(0, e), n = e; n < r; n++) {
                var i = E(n),
                    s = M[i],
                    a = t[n - 1] ? t[n - 1].end : c,
                    u = "number" == typeof s ? s : o(n),
                    l = a + u;
                t[n] = {
                    index: n,
                    start: a,
                    size: u,
                    end: l,
                    key: i
                }
            }
            return t
        }), [o, M, c, r, E]),
        V = ((null == (t = j[r - 1]) ? void 0 : t.end) || c) + d;
    R.current.measurements = j, R.current.totalSize = V;
    var B = v ? v.current : h.current,
        H = sv.useRef(g);
    H.current = g, xv((function() {
        if (B) {
            var e = function(e) {
                var t = H.current ? H.current(e) : B[I];
                D(t)
            };
            return e(), B.addEventListener("scroll", e, {
                    capture: !1,
                    passive: !0
                }),
                function() {
                    B.removeEventListener("scroll", e)
                }
        }
        D(0)
    }), [B, I]);
    var X = function(e) {
            for (var t = e.measurements, n = e.outerSize, r = e.scrollOffset, i = t.length - 1, o = Wv(0, i, (function(e) {
                    return t[e].start
                }), r), s = o; s < i && t[s].end < r + n;) s++;
            return {
                start: o,
                end: s
            }
        }(R.current),
        W = X.start,
        q = X.end,
        G = sv.useMemo((function() {
            return A({
                start: W,
                end: q,
                overscan: a,
                size: j.length
            })
        }), [W, q, a, j.length, A]),
        K = sv.useRef(S);
    K.current = S;
    var Y = sv.useMemo((function() {
            for (var e = [], t = function(t, n) {
                    var r = G[t],
                        i = Ov(Ov({}, j[r]), {}, {
                            measureRef: function(e) {
                                if (e) {
                                    var t = K.current(e, f);
                                    if (t !== i.size) {
                                        var n = R.current.scrollOffset;
                                        i.start < n && L(n + (t - i.size)), F.current.push(r), x((function(e) {
                                            var n;
                                            return Ov(Ov({}, e), {}, ((n = {})[i.key] = t, n))
                                        }))
                                    }
                                }
                            }
                        });
                    e.push(i)
                }, n = 0, r = G.length; n < r; n++) t(n);
            return e
        }), [G, L, f, j]),
        $ = sv.useRef(!1);
    xv((function() {
        $.current && x({}), $.current = !0
    }), [o]);
    var z = sv.useCallback((function(e, t) {
            var n = (void 0 === t ? {} : t).align,
                r = void 0 === n ? "start" : n,
                i = R.current,
                o = i.scrollOffset,
                s = i.outerSize;
            "auto" === r && (r = e <= o ? "start" : e >= o + s ? "end" : "start"), "start" === r ? p(e) : "end" === r ? p(e - s) : "center" === r && p(e - s / 2)
        }), [p]),
        Q = sv.useCallback((function(e, t) {
            var n = void 0 === t ? {} : t,
                i = n.align,
                o = void 0 === i ? "auto" : i,
                s = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(n, ["align"]),
                a = R.current,
                u = a.measurements,
                c = a.scrollOffset,
                l = a.outerSize,
                d = u[Math.max(0, Math.min(e, r - 1))];
            if (d) {
                if ("auto" === o)
                    if (d.end >= c + l) o = "end";
                    else {
                        if (!(d.start <= c)) return;
                        o = "start"
                    }
                var h = "center" === o ? d.start + d.size / 2 : "end" === o ? d.end : d.start;
                z(h, Ov({
                    align: o
                }, s))
            }
        }), [z, r]),
        J = sv.useCallback((function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            Q.apply(void 0, t), requestAnimationFrame((function() {
                Q.apply(void 0, t)
            }))
        }), [Q]);
    return {
        virtualItems: Y,
        totalSize: V,
        scrollToOffset: z,
        scrollToIndex: J,
        measure: U
    }
}
var Wv = function(e, t, n, r) {
    for (; e <= t;) {
        var i = (e + t) / 2 | 0,
            o = n(i);
        if (o < r) e = i + 1;
        else {
            if (!(o > r)) return i;
            t = i - 1
        }
    }
    return e > 0 ? e - 1 : 0
};
export {
    Xo as $, Cl as A, Ll as B, _h as C, Ml as D, wn as E, kl as F, Uh as G, Pl as H, xl as I, Fl as J, jl as K, gh as L, Ni as M, ed as N, ji as O, Dl as P, Ol as Q, Ul as R, Nl as S, xi as T, Fi as U, Li as V, Uc as W, Go as X, Ko as Y, qo as Z, T as _, Se as a, ye as a$, O as a0, Xt as a1, Et as a2, qh as a3, ff as a4, pf as a5, Tf as a6, Ff as a7, Uf as a8, Ai as a9, Rv as aA, C as aB, lv as aC, km as aD, Nm as aE, y_ as aF, m as aG, T_ as aH, cm as aI, W_ as aJ, P_ as aK, X_ as aL, Qe as aM, qm as aN, Dv as aO, ce as aP, am as aQ, B_ as aR, Ui as aS, o as aT, dd as aU, a as aV, s as aW, Ud as aX, yn as aY, Sn as aZ, En as a_, vh as aa, _e as ab, le as ac, Sh as ad, me as ae, he as af, mh as ag, kd as ah, be as ai, Vf as aj, bp as ak, Ip as al, wp as am, qp as an, d_ as ao, i_ as ap, f_ as aq, fe as ar, im as as, nm as at, sm as au, um as av, cv as aw, dm as ax, hv as ay, uv as az, g as b, hh as b0, oe as b1, F as b2, L as b3, Ef as b4, nt as b5, t as b6, Zi as b7, Xv as b8, ai as c, Ee as d, x as e, ud as f, en as g, e as h, fh as i, d as j, y as k, pe as l, Rh as m, h as n, Bd as o, Te as p, vl as q, Ke as r, ie as s, ge as t, Ae as u, l as v, Ih as w, De as x, p as y, Wh as z
};